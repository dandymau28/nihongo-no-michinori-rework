/**
 * One JSON line per interesting event, written to stdout. On the server systemd puts
 * those lines in the journal, Alloy ships them to Loki, and the "Learner flows" dashboard
 * queries them (`| json | evt="planner.start"`).
 *
 * Field names are part of that contract — dashboards and saved queries are written
 * against them, so rename one only together with the dashboards in `observability/`.
 *
 * Lines carry the learner's `userId`. That's a random cuid, never an email or a name, but
 * it does let anyone who can read the logs follow one learner's activity. To stop that,
 * hash it here — every caller passes it through this one function.
 */
type Value = string | number | boolean | null | undefined;
/** `props` carries the event's own details; everything else stays flat for LogQL. */
type Field = Value | Record<string, Value>;

export function logEvent(evt: string, fields: Record<string, Field> = {}): void {
  const line: Record<string, Field> = { evt };
  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined) line[key] = value;
  }
  console.log(JSON.stringify(line));
}

/** Start a stopwatch; call the result for elapsed milliseconds (the `ms` field). */
export function timer(): () => number {
  const start = performance.now();
  return () => Math.round(performance.now() - start);
}
