-- Aggregate views for the Grafana dashboards, plus the read-only role that reads them.
--
-- Grafana never touches the app's tables. It gets SELECT on this `metrics` schema only,
-- and every view here is an aggregate: no email addresses, names, password hashes,
-- session tokens, notes or IP addresses can be read through it. (A plain Postgres view
-- runs with its owner's privileges, so the role needs no rights on the tables beneath.)
--
-- Run as the database owner, with a password you generate:
--   openssl rand -hex 24
--   sudo -u postgres psql -d nihongo_no_michinori -v grafana_pw=<password> -f metrics-views.sql
--
-- Re-running it is safe: views are replaced and the role is left alone if it exists.
--
-- The app stores timestamps in UTC. The daily views bucket them into **Asia/Jakarta**
-- days, so a "day" runs midnight to midnight where you are, not 07:00 to 07:00. To use
-- another zone, replace 'Asia/Jakarta' throughout and re-run this file.

create schema if not exists metrics;

-- Headline numbers for the stat tiles.
create or replace view metrics.totals as
select
  (select count(*) from "user")::int                                            as learners,
  (select count(*) from "user" where email_verified)::int                        as confirmed_email,
  (select count(distinct user_id) from account where provider_id = 'google')::int as google_accounts,
  (select count(*) from plan_settings)::int                                       as planners,
  (select count(*) from lesson_progress where status = 'done')::int               as lessons_done,
  (select count(distinct user_id) from lesson_progress
     where updated_at > now() - interval '7 days')::int                           as active_7d,
  (select count(distinct user_id) from lesson_progress
     where updated_at > now() - interval '30 days')::int                          as active_30d;

-- New accounts per day, and how many confirmed their address.
create or replace view metrics.signups_daily as
select
  date_trunc('day', created_at at time zone 'UTC' at time zone 'Asia/Jakarta')
    at time zone 'Asia/Jakarta'                          as day,
  count(*)::int                                          as signups,
  (count(*) filter (where email_verified))::int           as confirmed
from "user"
group by 1;

-- Sign-ins per day (one row per session better-auth created).
create or replace view metrics.signins_daily as
select
  date_trunc('day', created_at at time zone 'UTC' at time zone 'Asia/Jakarta')
    at time zone 'Asia/Jakarta'        as day,
  count(*)::int                        as signins,
  count(distinct user_id)::int         as learners
from session
group by 1;

-- Study activity per day: who touched a lesson, and how many lessons were finished.
create or replace view metrics.activity_daily as
select
  date_trunc('day', updated_at at time zone 'UTC' at time zone 'Asia/Jakarta')
    at time zone 'Asia/Jakarta'                                   as day,
  count(distinct user_id)::int                                    as active_learners,
  (count(*) filter (where status = 'done'))::int                   as lessons_done,
  (count(*) filter (where status = 'partial'))::int                as lessons_started
from lesson_progress
group by 1;

-- Planners started per day, by where they came from.
create or replace view metrics.planners_daily as
select
  date_trunc('day', created_at at time zone 'UTC' at time zone 'Asia/Jakarta')
    at time zone 'Asia/Jakarta'              as day,
  coalesce(preset_id, 'custom')              as planner,
  count(*)::int                              as planners
from plan_settings
group by 1, 2;

-- Which presets learners actually pick, and how big their planners are.
create or replace view metrics.planners_by_preset as
select
  coalesce(s.preset_id, 'custom')                                          as planner,
  count(*)::int                                                            as planners,
  coalesce(round(avg(e.lessons)::numeric, 1), 0)                           as avg_lessons,
  coalesce(round(avg(e.tasks)::numeric, 1), 0)                             as avg_custom_tasks,
  max(s.created_at)                                                        as last_started
from plan_settings s
left join lateral (
  select
    (count(*) filter (where lesson_id is not null))::int as lessons,
    (count(*) filter (where lesson_id is null))::int     as tasks
  from plan_entry p
  where p.user_id = s.user_id
) e on true
group by 1;

-- Per lesson: how many learners have it, finished it, or are stuck on it.
-- Titles live in the code (src/data/lessons.ts), so this is by lesson id.
create or replace view metrics.lesson_status as
select
  lesson_id,
  count(*)::int                                     as learners,
  (count(*) filter (where status = 'done'))::int     as done,
  (count(*) filter (where status = 'partial'))::int  as in_progress,
  max(updated_at)                                    as last_touched
from lesson_progress
group by 1;

-- Lessons sitting in planners but never finished — the ones worth improving.
create or replace view metrics.lesson_dropoff as
select
  e.lesson_id,
  count(*)::int                                                      as in_planners,
  (count(*) filter (where p.status = 'done'))::int                    as done,
  (count(*) filter (where p.status is null or p.status = 'not-yet'))::int as untouched,
  (count(*) filter (where e.skipped))::int                            as skipped
from plan_entry e
left join lesson_progress p
  on p.user_id = e.user_id and p.lesson_id = e.lesson_id
where e.lesson_id is not null
group by 1;

-- Practice trainers: how many learners use each one, and when it was last used.
create or replace view metrics.practice_usage as
select
  key                            as trainer,
  count(*)::int                  as learners,
  max(updated_at)                as last_used
from practice_stats
group by 1;

-- ---------------------------------------------------------------------------
-- The role Grafana connects as.
-- ---------------------------------------------------------------------------

do $$
begin
  if not exists (select 1 from pg_roles where rolname = 'grafana_ro') then
    create role grafana_ro login;
  end if;
end
$$;

alter role grafana_ro with password :'grafana_pw';

grant usage on schema metrics to grafana_ro;
grant select on all tables in schema metrics to grafana_ro;
alter default privileges in schema metrics grant select on tables to grafana_ro;

-- Belt and braces: no reading (or creating) anything outside the metrics schema.
revoke all on schema public from grafana_ro;
