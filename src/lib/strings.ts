import type { Bi } from "./i18n";

/** UI chrome strings, keyed. Content strings live with their content modules. */
export const STR = {
  appName: { en: "Nihongo No Michinori", id: "Nihongo No Michinori" },
  tagline: {
    en: "JLPT N5 to N1 — follow a ready-made study plan, or build your own from single lessons.",
    id: "JLPT N5 sampai N1 — ikuti rencana belajar siap pakai, atau susun sendiri dari materi satuan.",
  },

  nav_dashboard: { en: "Dashboard", id: "Beranda" },
  nav_planner: { en: "Planner", id: "Planner" },
  nav_lessons: { en: "Lessons", id: "Materi" },
  nav_practice: { en: "Practice", id: "Latihan" },
  nav_decks: { en: "Flashcards", id: "Flashcard" },
  nav_settings: { en: "Settings", id: "Pengaturan" },
  nav_about: { en: "About", id: "Tentang" },

  // Kanji flashcard decks
  decks_title: { en: "Kanji Flashcards", id: "Flashcard Kanji" },
  decks_intro: {
    en: "Pick any kanji from N5 to N1, build a deck, and share the link with anyone studying with you.",
    id: "Pilih kanji mana pun dari N5 sampai N1, susun satu dek, lalu bagikan tautannya ke teman belajarmu.",
  },
  decks_new: { en: "New deck", id: "Dek baru" },
  decks_empty: {
    en: "No decks yet. Build one from the kanji you want to drill.",
    id: "Belum ada dek. Susun satu dari kanji yang ingin kamu latih.",
  },
  decks_sign_in: {
    en: "Sign in to build and share kanji decks.",
    id: "Masuk dulu untuk menyusun dan membagikan dek kanji.",
  },
  decks_card_count: { en: "kanji", id: "kanji" },
  decks_visits: { en: "Visits", id: "Kunjungan" },
  decks_learners: { en: "Learners", id: "Pemakai" },
  decks_copied_from: { en: "Copied from", id: "Disalin dari" },

  // Builder
  deck_build_title: { en: "Build a deck", id: "Susun dek" },
  deck_edit_title: { en: "Edit deck", id: "Ubah dek" },
  deck_name_label: { en: "Deck name", id: "Nama dek" },
  deck_name_placeholder: { en: "e.g. Kanji I keep forgetting", id: "mis. Kanji yang sering lupa" },
  deck_desc_label: { en: "Description (optional)", id: "Deskripsi (opsional)" },
  deck_desc_placeholder: {
    en: "What is this deck for?",
    id: "Dek ini untuk apa?",
  },
  deck_pick_label: { en: "Pick the kanji", id: "Pilih kanjinya" },
  deck_search_placeholder: { en: "Search a kanji, reading or meaning", id: "Cari kanji, cara baca, atau arti" },
  deck_selected: { en: "Selected", id: "Dipilih" },
  deck_clear: { en: "Clear all", id: "Kosongkan" },
  deck_no_match: { en: "Nothing matches that search.", id: "Tidak ada yang cocok dengan pencarian itu." },
  deck_save: { en: "Save deck", id: "Simpan dek" },
  deck_saving: { en: "Saving…", id: "Menyimpan…" },
  deck_needs_name: { en: "Give the deck a name.", id: "Beri nama untuk dek ini." },
  deck_needs_cards: { en: "Pick at least one kanji.", id: "Pilih minimal satu kanji." },
  deck_limit: {
    en: "A deck holds up to 200 kanji.",
    id: "Satu dek memuat paling banyak 200 kanji.",
  },
  deck_showing: { en: "Showing", id: "Menampilkan" },
  deck_all_levels: { en: "All", id: "Semua" },

  // Study
  deck_study: { en: "Study", id: "Belajar" },
  deck_flip_hint: { en: "Tap the card to turn it over", id: "Ketuk kartu untuk membaliknya" },
  deck_prev: { en: "Back", id: "Sebelumnya" },
  deck_next: { en: "Next", id: "Berikutnya" },
  deck_shuffle: { en: "Shuffle", id: "Acak" },
  deck_restart: { en: "Start again", id: "Mulai lagi" },
  deck_finished: { en: "You reached the end of the deck.", id: "Kamu sudah sampai akhir dek." },
  deck_on_reading: { en: "On", id: "On" },
  deck_kun_reading: { en: "Kun", id: "Kun" },
  deck_strokes: { en: "strokes", id: "coretan" },
  deck_meaning_en_note: {
    en: "Meanings come from KANJIDIC and are in English.",
    id: "Arti berasal dari KANJIDIC dan masih berbahasa Inggris.",
  },

  // Sharing
  deck_share_title: { en: "Share link", id: "Tautan berbagi" },
  deck_share_hint: {
    en: "Anyone with this link can study the deck once they sign in.",
    id: "Siapa pun yang punya tautan ini bisa belajar dari dek ini setelah masuk.",
  },
  deck_copy_link: { en: "Copy link", id: "Salin tautan" },
  deck_copied: { en: "Copied", id: "Tersalin" },
  deck_new_link: { en: "New link", id: "Tautan baru" },
  deck_new_link_confirm_title: { en: "Replace the share link?", id: "Ganti tautan berbagi?" },
  deck_new_link_confirm_body: {
    en: "The current link stops working straight away. Anyone still using it will need the new one.",
    id: "Tautan yang sekarang langsung berhenti bekerja. Siapa pun yang masih memakainya perlu tautan yang baru.",
  },
  deck_copy_to_mine: { en: "Copy to my decks", id: "Salin ke dek saya" },
  deck_copying: { en: "Copying…", id: "Menyalin…" },
  deck_copy_note: {
    en: "A copy is yours to edit, with its own link and its own counts.",
    id: "Salinan jadi milikmu untuk diubah, dengan tautan dan hitungannya sendiri.",
  },
  deck_shared_by: { en: "Shared by", id: "Dibagikan oleh" },
  deck_login_to_study: {
    en: "Sign in to study this deck.",
    id: "Masuk dulu untuk belajar dari dek ini.",
  },
  deck_not_found: {
    en: "This link doesn't lead to a deck. It may have been replaced or the deck deleted.",
    id: "Tautan ini tidak menuju dek mana pun. Mungkin sudah diganti atau deknya dihapus.",
  },

  // Owner stats
  deck_stats_title: { en: "Who has used it", id: "Siapa yang sudah memakainya" },
  deck_stats_empty: {
    en: "Nobody has opened the link yet.",
    id: "Belum ada yang membuka tautannya.",
  },
  deck_stats_guests_note: {
    en: "Visits count everyone who opens the link, once per browser session. Learners are the signed-in people below. Your own visits are not counted.",
    id: "Kunjungan menghitung semua yang membuka tautan, sekali tiap sesi peramban. Pemakai adalah orang yang sudah masuk di bawah ini. Kunjunganmu sendiri tidak dihitung.",
  },
  deck_stats_sessions: { en: "sessions", id: "sesi" },
  deck_last_used: { en: "Last", id: "Terakhir" },
  deck_edit: { en: "Edit", id: "Ubah" },
  deck_delete: { en: "Delete deck", id: "Hapus dek" },
  deck_delete_confirm_title: { en: "Delete this deck?", id: "Hapus dek ini?" },
  deck_delete_confirm_body: {
    en: "The deck, its share link and its visit counts go with it. Copies other people made stay theirs.",
    id: "Dek, tautan berbagi, dan hitungan kunjungannya ikut terhapus. Salinan milik orang lain tetap jadi milik mereka.",
  },

  // Practice hub
  practice_title: { en: "Practice Tools", id: "Alat Latihan" },
  practice_intro: {
    en: "Free-practice drills you can use any time, separate from the day-by-day plan.",
    id: "Latihan bebas yang bisa dipakai kapan saja, terpisah dari rencana harian.",
  },
  practice_conj_name: { en: "Conjugation Trainer", id: "Latihan Konjugasi" },
  practice_conj_desc: {
    en: "Drill every N5–N4 verb and adjective form — pick the forms, type the answer, build a streak.",
    id: "Latih setiap bentuk verba & kata sifat N5–N4 — pilih bentuknya, ketik jawaban, kumpulkan runtun.",
  },
  practice_particles_name: { en: "Particle Trainer", id: "Latihan Partikel" },
  practice_particles_desc: {
    en: "Fill-in-the-blank drills for は が を に で へ and more — tap the right particle, with は-vs-が and に-vs-で focus sets.",
    id: "Latihan isi-titik untuk は が を に で へ dan lainnya — ketuk partikel yang tepat, dengan set fokus は-vs-が dan に-vs-で.",
  },
  practice_kanji_name: { en: "Kanji Trainer", id: "Latihan Kanji" },
  practice_kanji_desc: {
    en: "~150 N5–N4 kanji words — drill reading, meaning, or kana → kanji, four options per question.",
    id: "~150 kata kanji N5–N4 — latih bacaan, arti, atau kana → kanji, empat pilihan per soal.",
  },
  practice_qw_name: { en: "Question Word Trainer", id: "Latihan Kata Tanya" },
  practice_qw_desc: {
    en: "何・誰・どこ・いつ and more — fill in the right question word from context, with どの/どれ/どちら and いくつ/いくら focus sets.",
    id: "何・誰・どこ・いつ dan lainnya — isi kata tanya yang tepat sesuai konteks, dengan set fokus どの/どれ/どちら dan いくつ/いくら.",
  },

  // Particle trainer
  pt_title: { en: "Particle Trainer", id: "Latihan Partikel" },
  pt_pick_what: { en: "What do you want to drill?", id: "Mau latihan yang mana?" },
  pt_choose_particles: { en: "Choose particles", id: "Pilih partikel" },
  pt_no_drills: {
    en: "No sentences match — pick more particles or a wider level.",
    id: "Tidak ada kalimat yang cocok — pilih lebih banyak partikel atau tingkat yang lebih luas.",
  },

  // Question word trainer
  qw_title: { en: "Question Word Trainer", id: "Latihan Kata Tanya" },
  qw_pick_what: { en: "What do you want to drill?", id: "Mau latihan yang mana?" },
  qw_choose_words: { en: "Choose question words", id: "Pilih kata tanya" },
  qw_no_drills: {
    en: "No sentences match — pick more question words or a wider level.",
    id: "Tidak ada kalimat yang cocok — pilih lebih banyak kata tanya atau tingkat yang lebih luas.",
  },

  // Kanji trainer
  kj_title: { en: "Kanji Trainer", id: "Latihan Kanji" },
  kj_pick_what: { en: "What do you want to drill?", id: "Mau latihan yang mana?" },
  kj_level: { en: "Level", id: "Tingkat" },
  kj_no_words: {
    en: "Pick at least one level.",
    id: "Pilih minimal satu tingkat.",
  },

  // Conjugation trainer
  conj_title: { en: "Conjugation Trainer", id: "Latihan Konjugasi" },
  conj_conjugate_to: { en: "Conjugate to", id: "Konjugasikan ke" },
  conj_type_answer: { en: "type the conjugated form", id: "ketik bentuk konjugasinya" },
  conj_check: { en: "Check", id: "Periksa" },
  conj_next: { en: "Next", id: "Lanjut" },
  conj_reveal: { en: "Show answer", id: "Lihat jawaban" },
  conj_correct: { en: "Correct", id: "Benar" },
  conj_incorrect: { en: "Not quite", id: "Belum tepat" },
  conj_answer: { en: "Answer", id: "Jawaban" },
  conj_streak: { en: "Streak", id: "Runtun" },
  conj_best: { en: "Best", id: "Terbaik" },
  conj_accuracy: { en: "Accuracy", id: "Akurasi" },
  conj_settings: { en: "Settings", id: "Pengaturan" },
  conj_start: { en: "Start", id: "Mulai" },
  conj_restart: { en: "New session", id: "Sesi baru" },
  conj_end_session: { en: "End session", id: "Akhiri sesi" },
  conj_session_done: { en: "Session complete", id: "Sesi selesai" },
  conj_practice_weak: { en: "Practice weak forms", id: "Latih bentuk yang lemah" },
  conj_no_pairs: {
    en: "No words match — pick at least one word type and one form.",
    id: "Tidak ada kata yang cocok — pilih minimal satu jenis kata dan satu bentuk.",
  },
  conj_input_mode: { en: "Input", id: "Masukan" },
  conj_input_romaji: { en: "Romaji (auto → kana)", id: "Romaji (otomatis → kana)" },
  conj_input_kana: { en: "Kana (needs IME)", id: "Kana (butuh IME)" },
  conj_word_types: { en: "Word types", id: "Jenis kata" },
  conj_level: { en: "Vocabulary level", id: "Tingkat kosakata" },
  conj_forms: { en: "Individual forms", id: "Bentuk satuan" },
  conj_forms_short: { en: "forms", id: "bentuk" },
  conj_presets: { en: "Presets", id: "Prasetel" },
  conj_pick_what: { en: "What do you want to drill?", id: "Mau latihan yang mana?" },
  conj_advanced: { en: "Advanced", id: "Lanjutan" },
  conj_advanced_title: { en: "Advanced settings", id: "Pengaturan lanjutan" },
  conj_advanced_intro: {
    en: "Pick exactly which forms and word types to drill.",
    id: "Pilih persis bentuk dan jenis kata yang mau dilatih.",
  },
  conj_custom_selection: { en: "Custom selection", id: "Pilihan khusus" },
  conj_done: { en: "Done", id: "Selesai" },
  conj_session_mode: { en: "Session length", id: "Panjang sesi" },
  conj_endless: { en: "Endless", id: "Tanpa henti" },
  conj_show_meaning: { en: "Show meaning", id: "Tampilkan arti" },
  conj_show_reading: { en: "Show reading", id: "Tampilkan bacaan" },
  conj_always: { en: "Always", id: "Selalu" },
  conj_after_answer: { en: "After answering", id: "Setelah dijawab" },
  conj_weak_spots: { en: "Weak spots", id: "Titik lemah" },
  conj_lifetime: { en: "All-time", id: "Sepanjang waktu" },
  conj_reset_stats: { en: "Reset stats", id: "Atur ulang statistik" },
  conj_cls_godan: { en: "う-verbs (godan)", id: "verba う (godan)" },
  conj_cls_ichidan: { en: "る-verbs (ichidan)", id: "verba る (ichidan)" },
  conj_cls_irregular: { en: "irregular verbs", id: "verba tak beraturan" },
  conj_cls_iadj: { en: "い-adjectives", id: "kata sifat い" },
  conj_cls_naadj: { en: "な-adjectives", id: "kata sifat な" },
  conj_open_trainer: { en: "Open the full conjugation trainer", id: "Buka latihan konjugasi lengkap" },

  // Dashboard
  today: { en: "Today", id: "Hari ini" },
  lessons_done: { en: "lessons done", id: "materi selesai" },
  resume: { en: "Continue today's study", id: "Lanjutkan belajar hari ini" },
  progress: { en: "Progress", id: "Progres" },
  completed: { en: "completed", id: "selesai" },
  streak: { en: "Streak", id: "Runtun" },
  days_unit: { en: "days", id: "hari" },
  up_next: { en: "Up next", id: "Berikutnya" },
  phase: { en: "Phase", id: "Fase" },
  jump_back_in: { en: "Jump back in", id: "Lanjutkan" },

  // Levels
  level: { en: "Level", id: "Level" },
  level_coming_soon: { en: "Coming soon", id: "Segera hadir" },

  // Lesson types
  type_diagnostic: { en: "Diagnostic", id: "Diagnostik" },
  type_grammar: { en: "Grammar", id: "Tata Bahasa" },
  "type_vocab-kanji": { en: "Vocab / Kanji", id: "Kosakata / Kanji" },
  type_reading: { en: "Reading", id: "Membaca" },
  type_listening: { en: "Listening", id: "Menyimak" },
  type_review: { en: "Review", id: "Ulasan" },
  type_test: { en: "Test", id: "Tes" },
  type_skill: { en: "Skill", id: "Keterampilan" },

  // Planner
  planner_title: { en: "Planner", id: "Planner" },
  filter_all: { en: "All", id: "Semua" },
  filter_level: { en: "Level", id: "Level" },
  filter_type: { en: "Type", id: "Jenis" },
  filter_status: { en: "Status", id: "Status" },

  // Status
  status_not_yet: { en: "Not started", id: "Belum" },
  status_partial: { en: "In progress", id: "Sebagian" },
  status_done: { en: "Done", id: "Selesai" },

  // Lesson detail
  study_task: { en: "Study task", id: "Tugas belajar" },
  suggested_time: { en: "Suggested time", id: "Waktu yang disarankan" },
  original_references: {
    en: "Original references (rebuilt here)",
    id: "Referensi asli (dibangun ulang di sini)",
  },
  lesson: { en: "Lesson", id: "Materi" },
  exercises: { en: "Exercises", id: "Latihan" },
  open_lesson: { en: "Open full lesson", id: "Buka materi lengkap" },
  content_coming: {
    en: "Built-in content & exercises for this lesson are coming. For now, the references above cover the material.",
    id: "Materi & latihan bawaan untuk pelajaran ini sedang disiapkan. Untuk sekarang, referensi di atas sudah mencakup materinya.",
  },
  your_progress: { en: "Your progress", id: "Progresmu" },
  mark_status: { en: "Status", id: "Status" },
  reviewed_label: { en: "Reviewed later", id: "Sudah diulang" },

  // Lesson score counter
  day_score: { en: "Lesson score", id: "Skor materi" },
  sets_done: { en: "exercises done", id: "latihan selesai" },
  score_so_far: { en: "correct so far", id: "benar sejauh ini" },
  score_breakdown: { en: "Score breakdown", id: "Rincian skor" },
  not_attempted: { en: "not started", id: "belum" },
  day_all_done: { en: "All exercises complete", id: "Semua latihan selesai" },
  practice_done: { en: "done", id: "selesai" },
  best_streak: { en: "best streak", id: "runtun terbaik" },
  no_exercises_scored: {
    en: "This lesson has no scored exercises.",
    id: "Materi ini tidak punya latihan berskor.",
  },
  notes_label: { en: "Notes", id: "Catatan" },
  notes_ph: { en: "Mistakes, weak points, reminders…", id: "Kesalahan, titik lemah, pengingat…" },
  saved: { en: "Saved", id: "Tersimpan" },
  prev_lesson: { en: "Previous lesson", id: "Materi sebelumnya" },
  next_lesson: { en: "Next lesson", id: "Materi berikutnya" },
  back_to_planner: { en: "Back to planner", id: "Kembali ke planner" },
  back_to_lessons: { en: "All lessons", id: "Semua materi" },

  // Exercises
  ex_check: { en: "Check", id: "Periksa" },
  ex_next: { en: "Next", id: "Lanjut" },
  ex_finish: { en: "Finish", id: "Selesai" },
  ex_retry: { en: "Try again", id: "Coba lagi" },
  ex_correct: { en: "Correct", id: "Benar" },
  ex_incorrect: { en: "Not quite", id: "Belum tepat" },
  ex_answer_was: { en: "Answer", id: "Jawaban" },
  ex_your_answer: { en: "Your answer", id: "Jawabanmu" },
  ex_score: { en: "You scored", id: "Skormu" },
  ex_type_answer: { en: "Type your answer", id: "Ketik jawabanmu" },
  ex_show_hint: { en: "Hint", id: "Petunjuk" },
  ex_reveal_transcript: { en: "Show transcript", id: "Tampilkan transkrip" },
  ex_hide_transcript: { en: "Hide transcript", id: "Sembunyikan transkrip" },
  ex_play: { en: "Play audio", id: "Putar audio" },
  ex_replay: { en: "Replay", id: "Ulangi" },
  ex_stop: { en: "Stop", id: "Berhenti" },
  ex_tts_unsupported: {
    en: "Your browser can't play synthesized Japanese audio. The transcript is shown below instead.",
    id: "Browser-mu tidak bisa memutar audio Jepang sintetis. Transkrip ditampilkan di bawah sebagai gantinya.",
  },
  ex_passage: { en: "Passage", id: "Bacaan" },
  ex_start: { en: "Start", id: "Mulai" },
  ex_of: { en: "of", id: "dari" },
  ex_streak: { en: "Streak", id: "Runtun" },
  ex_best: { en: "Best", id: "Terbaik" },
  ex_prompt_speak: {
    en: "Say each answer out loud before checking.",
    id: "Ucapkan tiap jawaban dengan lantang sebelum memeriksa.",
  },
  ex_writing_prompt: { en: "Writing prompt", id: "Latihan menulis" },
  ex_self_check: { en: "Self-check", id: "Periksa sendiri" },
  ex_mark_done: { en: "I completed this", id: "Saya sudah menyelesaikan ini" },

  // Reading aids
  aid_furigana: { en: "Furigana", id: "Furigana" },
  aid_romaji: { en: "Romaji", id: "Romaji" },
  aid_language: { en: "Explanation language", id: "Bahasa penjelasan" },
  aid_theme: { en: "Theme", id: "Tema" },
  theme_light: { en: "Light", id: "Terang" },
  theme_dark: { en: "Dark", id: "Gelap" },
  theme_system: { en: "System", id: "Sistem" },

  // Settings
  settings_title: { en: "Settings", id: "Pengaturan" },
  settings_start_date: { en: "Plan start date", id: "Tanggal mulai rencana" },
  settings_start_date_help: {
    en: "Used to work out which day is \"today\". Default: 2 September 2026.",
    id: "Dipakai untuk menentukan hari \"ini\". Bawaan: 2 September 2026.",
  },
  settings_data: { en: "Your data", id: "Datamu" },
  settings_data_help: {
    en: "Progress is saved to your account. Export a JSON backup, or import one.",
    id: "Progres tersimpan di akunmu. Ekspor cadangan JSON, atau impor.",
  },
  export_progress: { en: "Export progress", id: "Ekspor progres" },
  import_progress: { en: "Import progress", id: "Impor progres" },
  reset_progress: { en: "Reset all progress", id: "Atur ulang semua progres" },
  reset_confirm: {
    en: "Reset all progress and notes? This cannot be undone.",
    id: "Atur ulang semua progres dan catatan? Ini tidak bisa dibatalkan.",
  },
  import_failed: { en: "Import failed — file not recognised.", id: "Impor gagal — file tidak dikenali." },
  imported_ok: { en: "Progress imported.", id: "Progres berhasil diimpor." },

  // About
  about_title: { en: "About Nihongo No Michinori", id: "Tentang Nihongo No Michinori" },

  // Misc
  coming_soon: { en: "Coming soon", id: "Segera hadir" },
  no_results: { en: "No days match these filters.", id: "Tidak ada hari yang cocok dengan filter ini." },
} satisfies Record<string, Bi>;

export type StrKey = keyof typeof STR;
