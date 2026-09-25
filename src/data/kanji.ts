// Generated file — do not edit by hand. Rebuild it with scripts/kanji/build-catalog.mjs.
//
// Every kanji in the JLPT lists, N5 to N1 (2211 characters:
// N1 1232, N2 367, N3 367, N4 166, N5 79).
//
// Dictionary data: KANJIDIC, property of the Electronic Dictionary Research and
// Development Group (https://www.edrdg.org/), used in conformance with the group's
// licence (CC BY-SA 4.0). JLPT levels from Jonathan Waller's JLPT Resources. The
// Indonesian meanings are this project's translation of KANJIDIC's English ones
// (scripts/kanji/gloss-id.tsv) and are covered by the same licence.
//
// Packed one line per kanji to keep the file small; parsed once, on first use. Fields are
// separated by | and list items by ; — a meaning can contain a comma ("case (law, grammar)").

import type { JlptLevel } from "@/lib/types";

export interface KanjiChar {
  /** The character itself. */
  char: string;
  /** On'yomi, katakana, at most three. */
  on: string[];
  /** Kun'yomi, hiragana, at most three (a dot marks where okurigana starts). */
  kun: string[];
  /** English meanings, at most three — KANJIDIC's own wording. */
  meanings: string[];
  /** The same meanings in Indonesian, one for one with `meanings`. */
  meaningsId: string[];
  level: JlptLevel;
  strokes: number;
}

const PACKED = `
日|ジツ;ニチ|-か;-び;ひ|Japan;counter for days;day|5|4|Jepang;penggolong hari;hari
一|イチ;イツ|ひと-;ひと.つ|one;one radical (no.1)|5|1|satu;radikal satu (no. 1)
国|コク|くに|country|5|8|negara
人|ジン;ニン|-と;-り;ひと|person|5|2|orang
年|ネン|とし|counter for years;year|5|6|penggolong tahun;tahun
大|タイ;ダイ|-おお.いに;おお-;おお.きい|big;large|5|3|besar;besar
十|ジッ;ジュウ;ジュッ|そ;と;とお|ten|5|2|sepuluh
二|ジ;ニ|ふた;ふた.つ;ふたたび|two;two radical (no. 7)|5|2|dua;radikal dua (no. 7)
本|ホン|もと|book;counter for long cylindrical things;main|5|5|buku;penggolong benda panjang silindris;utama
中|チュウ|あた.る;うち;なか|center;in;inside|5|4|pusat;di dalam;di dalam
長|チョウ|おさ;なが.い|leader;long;senior|5|8|pemimpin;panjang;senior
出|シュツ;スイ|-だ.す;-で;い.だす|come out;exit;go out|5|5|keluar;keluar;keluar
三|サン;ゾウ|み;み.つ;みっ.つ|three|5|3|tiga
時|ジ|-どき;とき|hour;time|5|10|jam;waktu
行|アン;ギョウ;コウ|-い.き;-いき;-ゆ.き|act;bank;carry out|5|6|bertindak;bank;melaksanakan
見|ケン|み.える;み.せる;み.る|chances;hopes;idea|5|7|peluang;harapan;gagasan
月|ガツ;ゲツ|つき|month;moon|5|4|bulan;bulan
後|コウ;ゴ|あと;うし.ろ;うしろ|back;behind;later|5|9|punggung;di belakang;kemudian
前|ゼン|-まえ;まえ|before;in front|5|9|sebelum;di depan
生|ショウ;セイ|-う;い.かす;い.きる|birth;genuine;life|5|5|kelahiran;asli;kehidupan
五|ゴ|いつ;いつ.つ|five|5|4|lima
間|カン;ケン|あい;あいだ;ま|interval;space|5|12|selang;ruang
上|シャン;ショウ;ジョウ|-あ.がり;-あ.がる;-あ.げる|above;up|5|3|di atas;ke atas
東|トウ|ひがし|east|5|8|timur
四|シ|よ;よ.つ;よっ.つ|four|5|5|empat
今|キン;コン|いま|now|5|4|sekarang
金|キン;コン;ゴン|-がね;かな-;かね|gold|5|8|emas
九|キュウ;ク|ここの;ここの.つ|nine|5|2|sembilan
入|ジュ;ニュウ|-い.り;-い.る;-い.れ|enter;insert|5|2|masuk;menyisipkan
学|ガク|まな.ぶ|learning;science;study|5|8|pembelajaran;ilmu pengetahuan;belajar
高|コウ|-だか;たか;たか.い|expensive;high;tall|5|10|mahal;tinggi;tinggi
円|エン|まど;まど.か;まる|circle;round;yen|5|4|lingkaran;bulat;yen
子|シ;ス;ツ|-こ;こ;ね|11PM-1AM;child;first sign of Chinese zodiac|5|3|pukul 23-01;anak;shio pertama
外|ガイ;ゲ|そと;と-;はず.す|outside|5|5|di luar
八|ハチ;ハツ|や;や.つ;やっ.つ|eight;eight radical (no. 12)|5|2|delapan;radikal delapan (no. 12)
六|リク;ロク|む;む.つ;むい|six|5|4|enam
下|カ;ゲ|-くだ.す;お.りる;お.ろす|below;descend;down|5|3|di bawah;menuruni;ke bawah
来|タイ;ライ|き;き.たす;き.たる|become;cause;come|5|7|menjadi;sebab;datang
気|キ;ケ|き|air;atmosphere;mind|5|6|udara;suasana;pikiran
小|ショウ|お-;こ-;さ-|little;small|5|3|kecil;kecil
七|シチ|なな;なな.つ;なの|seven|5|2|tujuh
山|サン;セン|やま|mountain|5|3|gunung
話|ワ|はな.す;はなし|tale;talk|5|13|cerita;berbicara
女|ジョ;ニョ;ニョウ|おんな;め|female;woman|5|3|perempuan;perempuan
北|ホク|きた|north|5|5|utara
午|ゴ|うま|11AM-1PM;noon;seventh sign of Chinese zodiac|5|4|pukul 11-13;tengah hari;shio ketujuh
百|ヒャク;ビャク|もも|hundred|5|6|seratus
書|ショ|-が.き;-がき;か.く|write|5|10|menulis
先|セン|さき;ま.ず|ahead;before;future|5|6|di depan;sebelum;masa depan
名|ミョウ;メイ|-な;な|distinguished;name;noted|5|6|terkemuka;nama;termasyhur
川|セン|かわ|river;river or three-stroke river radical (no. 47);stream|5|3|sungai;radikal sungai (no. 47);aliran
千|セン|ち|thousand|5|3|seribu
水|スイ|みず;みず-|water|5|4|air
半|ハン|なか.ば|half;middle;odd number|5|5|setengah;tengah;bilangan ganjil
男|ダン;ナン|お;おとこ|male|5|7|laki-laki
西|サイ;ス;セイ|にし|Spain;west|5|6|Spanyol;barat
電|デン||electricity|5|13|listrik
校|キョウ;コウ||correction;exam;printing|5|10|koreksi;ujian;percetakan
語|ゴ|かた.らう;かた.る|language;speech;word|5|14|bahasa;pidato;kata
土|ト;ド|つち|Turkey;earth;ground|5|3|Turki;bumi;tanah
木|ボク;モク|き;こ-|tree;wood|5|4|pohon;kayu
聞|ブン;モン|き.く;き.こえる|ask;hear;listen|5|14|bertanya;mendengar;mendengarkan
食|ショク;ジキ|く.う;く.らう;た.べる|eat;food|5|9|makan;makanan
車|シャ|くるま|car|5|7|mobil
何|カ|なに;なに-;なん|what|5|7|apa
南|ナ;ナン|みなみ|south|5|9|selatan
万|バン;マン|よろず|10,000;ten thousand|5|3|sepuluh ribu;sepuluh ribu
毎|マイ|-ごと.に;ごと|every|5|6|setiap
白|ハク;ビャク|しら-;しろ;しろ.い|white|5|5|putih
天|テン|あま-;あまつ;あめ|heavens;imperial;sky|5|4|langit;kekaisaran;langit
母|ボ|はは;も|mother|5|5|ibu
火|カ|-び;ひ;ほ-|fire|5|4|api
右|ウ;ユウ|みぎ|right|5|5|kanan
読|トウ;トク;ドク|-よ.み;よ.む|read|5|14|membaca
友|ユウ|とも|friend|5|4|teman
左|サ;シャ|ひだり|left|5|5|kiri
休|キュウ|やす.まる;やす.む;やす.める|day off;rest;retire|5|6|hari libur;istirahat;pensiun
父|フ|ちち|father|5|4|ayah
雨|ウ|-さめ;あま-;あめ|rain|5|8|hujan
会|エ;カイ|あ.う;あ.わせる;あつ.まる|association;interview;join|4|6|perkumpulan;wawancara;bergabung
同|ドウ|おな.じ|agree;equal;same|4|6|setuju;sama;sama
事|ジ;ズ|こと;つか.う;つか.える|business;fact;matter|4|8|bisnis;fakta;perkara
自|シ;ジ|おの.ずから;おの.ずと;みずか.ら|oneself|4|6|diri sendiri
社|シャ|やしろ|association;company;firm|4|7|perkumpulan;perusahaan;kokoh
発|ハツ;ホツ|あば.く;おこ.る;た.つ|counter for gunshots;departure;discharge|4|9|penggolong tembakan;keberangkatan;melepaskan
者|シャ|もの|person;someone|4|8|orang;seseorang
地|ジ;チ||earth;ground|4|6|bumi;tanah
業|ギョウ;ゴウ|わざ|arts;business;performance|4|13|kesenian;bisnis;pertunjukan
方|ホウ|-かた;-がた;かた|alternative;direction;person|4|4|pilihan lain;arah;orang
新|シン|あたら.しい;あら-;あら.た|new|4|13|baru
場|ジョウ;チョウ|ば|location;place|4|12|lokasi;tempat
員|イン||employee;member;number|4|10|karyawan;anggota;angka
立|リットル;リツ;リュウ|-た.つ;-た.て;-た.てる|erect;rise;set up|4|5|mendirikan;naik;mendirikan
開|カイ|-びら.き;あ.く;あ.ける|open;unfold;unseal|4|12|membuka;membentangkan;membuka segel
手|シュ;ズ|-て;た-;て|hand|4|4|tangan
力|リイ;リキ;リョク|ちから|bear up;exert;power|4|2|bertahan;mengerahkan;kekuatan
問|モン|と.い;と.う;とん|ask;problem;question|4|11|bertanya;masalah;pertanyaan
代|タイ;ダイ|-が.わり;-がわ.り;か.える|age;change;charge|4|5|usia;perubahan;biaya
明|ミョウ;ミン;メイ|-あ.け;あ.かす;あ.かり|bright;light|4|8|terang;cahaya
動|ドウ|うご.かす;うご.く|change;confusion;motion|4|11|perubahan;kekacauan;gerakan
京|キョウ;キン;ケイ|みやこ|10**16;capital|4|8|10 pangkat 16;ibu kota
目|ボク;モク|-め;ま-;め|care;class;experience|4|5|perhatian;kelas;pengalaman
通|ツ;ツウ|-とお.り;-どお.し;-どお.り|avenue;commute;counter for letters, notes, documents, etc.|4|10|jalan raya;pulang pergi kerja;penggolong surat, nota, dokumen, dsb.
言|ゲン;ゴン|い.う;こと|say;word|4|7|berkata;kata
理|リ|ことわり|arrangement;justice;logic|4|11|penataan;keadilan;logika
体|タイ;テイ|かたち;からだ|body;counter for images;object|4|7|tubuh;penggolong arca;benda
田|デン|た|rice field;rice paddy|4|5|sawah;sawah
主|シュ;シュウ;ス|あるじ;おも;ぬし|chief;lord;main thing|4|5|kepala;tuan;hal utama
題|ダイ||subject;topic|4|18|pokok bahasan;topik
意|イ||care;desire;heart|4|13|perhatian;hasrat;hati
不|フ;ブ||bad;clumsy;negative|4|4|buruk;kikuk;negatif
作|サ;サク|-づく.り;つく.り;つく.る|build;make;prepare|4|7|membangun;membuat;menyiapkan
用|ヨウ|もち.いる|business;employ;service|4|5|bisnis;mempekerjakan;layanan
度|タク;ト;ド|-た.い;たび|attitude;consider;counter for occurrences|4|9|sikap;mempertimbangkan;penggolong kejadian
強|キョウ;ゴウ|こわ.い;し.いる;つよ.い|strong|4|11|kuat
公|ク;コウ|おおやけ|governmental;official;prince|4|4|pemerintahan;resmi;pangeran
持|ジ|-も.ち;も.つ;も.てる|have;hold|4|9|memiliki;memegang
野|ショ;ヤ|の;の-|civilian life;field;plains|4|11|kehidupan sipil;ladang;dataran
以|イ|もっ.て|because;by means of;compared with|4|5|karena;dengan cara;dibandingkan dengan
思|シ|おぼ.す;おも.う;おもえら.く|think|4|9|berpikir
家|カ;ケ|いえ;うち;や|expert;family;home|4|10|ahli;keluarga;rumah
世|セ;セイ;ソウ|よ|generation;public;society|4|5|generasi;publik;masyarakat
多|タ|おお.い;まさ.に;まさ.る|frequent;many;much|4|6|sering;banyak;banyak
正|ショウ;セイ|ただ.しい;ただ.す;まさ|10**40;correct;justice|4|5|10 pangkat 40;benar;keadilan
安|アン|やす;やす.い;やす.まる|cheap;contented;low|4|6|murah;puas;rendah
院|イン||Inst.;institution;mansion|4|10|bulan ini;lembaga;rumah besar
心|シン|-ごころ;こころ|heart;heart radical (no. 61);mind|4|4|hati;radikal hati (no. 61);pikiran
界|カイ||boundary;world|4|9|batas;dunia
教|キョウ|おし.える;おそ.わる|doctrine;faith;teach|4|11|doktrin;iman;mengajar
文|ブン;モン|あや;ふみ|art;decoration;figures|4|4|seni;hiasan;angka
元|ガン;ゲン|もと|beginning;former time;origin|4|4|permulaan;masa lalu;asal
重|ジュウ;チョウ|え;おも;おも.い|-fold;esteem;heap up|4|9|lipat;penghargaan;menimbun
近|キン;コン|ちか.い|akin;early;near|4|7|serupa;awal;dekat
考|コウ|かんが.え;かんが.える|consider;think over|4|6|mempertimbangkan;merenungkan
画|エ;カイ;カク|えが.く;かぎ.る;かく.する|brush-stroke;picture|4|8|goresan kuas;gambar
海|カイ|うみ|ocean;sea|4|9|samudra;laut
売|バイ|う.る;う.れる|sell|4|7|menjual
知|チ|し.らせる;し.る|know;wisdom|4|8|tahu;kebijaksanaan
道|トウ;ドウ|いう;みち|course;district;journey|4|12|jalur;distrik;perjalanan
集|シュウ|あつ.まる;あつ.める;つど.う|congregate;flock;gather|4|12|berkumpul;kawanan;mengumpulkan
別|ベツ|わ.ける;わか.れる|another;branch off;diverge|4|7|yang lain;bercabang;bercabang
物|ブツ;モツ|もの;もの-|matter;object;thing|4|8|perkara;benda;benda
使|シ|-つか.い;-づか.い;つか.い|ambassador;cause;envoy|4|8|duta besar;sebab;utusan
品|ヒン;ホン|しな|article;counter for meal courses;dignity|4|9|barang;penggolong hidangan;martabat
計|ケイ|はか.らう;はか.る|measure;plan;plot|4|9|mengukur;rencana;persekongkolan
死|シ|し.に-;し.ぬ|death;die|4|6|kematian;mati
特|トク||special|4|10|khusus
私|シ|わたくし;わたし|I;me;private|4|7|saya;saya;pribadi
始|シ|-はじ.める;はじ.まる;はじ.める|begin;commence|4|8|memulai;memulai
朝|チョウ|あさ|(North) Korea;dynasty;epoch|4|12|Korea (Utara);dinasti;zaman
運|ウン|はこ.ぶ|advance;carry;destiny|4|12|maju;membawa;takdir
終|シュウ|-お.わる;お.える;お.わる|end;finish|4|11|akhir;menyelesaikan
台|タイ;ダイ|うてな;つかさ;われ|a stand;counter for machines and vehicles;pedestal|4|5|dudukan;penggolong mesin dan kendaraan;alas tumpuan
広|コウ|ひろ.い;ひろ.がる;ひろ.げる|broad;spacious;wide|4|5|luas;lapang;lebar
住|ジュウ;チュウ;ヂュウ|-ず.まい;す.まう;す.む|dwell;inhabit;live|4|7|bermukim;mendiami;hidup
真|シン|ま;ま-;まこと|Buddhist sect;reality;true|4|10|aliran Buddha;kenyataan;benar
有|ウ;ユウ|あ.る|approx;exist;happen|4|6|kira-kira;ada;terjadi
口|ク;コウ|くち|mouth|4|3|mulut
少|ショウ|すく.ない;すこ.し|few;little|4|4|sedikit;kecil
町|チョウ|まち|block;street;town|4|7|balok;jalan;kota kecil
料|リョウ||fee;materials|4|10|biaya;bahan
工|ク;グ;コウ||construction;craft;katakana e radical (no. 48)|4|3|konstruksi;kerajinan;radikal e katakana (no. 48)
建|ケン;コン|-だ.て;た.つ;た.て|build|4|9|membangun
空|クウ|あ.き;あ.く;あ.ける|empty;sky;vacant|4|8|kosong;langit;kosong
急|キュウ|いそ.ぎ;いそ.ぐ;せ.く|emergency;hurry;steep|4|9|keadaan darurat;bergegas;curam
止|シ|-さ.し;-さ.す;-と.める|halt;stop|4|4|berhenti;berhenti
送|ソウ|おく.る|escort;send|4|9|mengawal;mengirim
切|サイ;セツ|-き.り;-き.る;-き.れ|be sharp;cut;cutoff|4|4|tajam;memotong;pemutusan
転|テン|うたた;うつ.る;くる.めく|change;revolve;turn around|4|11|perubahan;berputar;berbalik
研|ケン|と.ぐ|polish;sharpen;study of|4|9|memoles;mengasah;ilmu tentang
足|ソク|あし;た.す;た.りる|be sufficient;counter for pairs of footwear;foot|4|7|cukup;penggolong pasang alas kaki;kaki
究|キュウ;ク|きわ.める|research;study|4|7|penelitian;belajar
楽|ガク;ゴウ;ラク|この.む;たの.しい;たの.しむ|comfort;ease;music|4|13|kenyamanan;kemudahan;musik
起|キ|お.きる;お.こす;お.こる|get up;rouse;wake up|4|10|bangun;membangunkan;bangun
着|ジャク;チャク|き.せる;き.る;つ.く|arrive;counter for suits of clothing;don|4|12|tiba;penggolong setelan pakaian;mengenakan
店|テン|たな;みせ|shop;store|4|8|toko;toko
病|ビョウ;ヘイ|-や.み;や.む;やまい|ill;sick|4|10|sakit;sakit
質|シチ;シツ;チ|ただ.す;たち;もと|matter;quality;substance|4|15|perkara;mutu;zat
待|タイ|-ま.ち;ま.つ|depend on;wait|4|9|bergantung pada;menunggu
試|シ|こころ.みる;ため.す|attempt;experiment;ordeal|4|13|mencoba;percobaan;cobaan berat
族|ゾク||family;tribe|4|11|keluarga;suku
銀|ギン|しろがね|silver|4|14|perak
早|サッ;ソウ|さ-;はや;はや-|early;fast|4|6|awal;cepat
映|エイ|-ば.え;うつ.す;うつ.る|projection;reflect;reflection|4|9|tonjolan;memantulkan;pantulan
親|シン|おや;おや-;した.しい|dealer (cards);familiarity;intimacy|4|16|pembagi kartu;keakraban;keakraban
験|ケン;ゲン|あかし;しるし;ため.す|effect;testing;verification|4|18|efek;pengujian;verifikasi
英|エイ|はなぶさ|England;English;calyx|4|8|Inggris;bahasa Inggris;kelopak
医|イ|い.する;い.やす;くすし|doctor;medicine|4|7|dokter;obat
仕|シ;ジ|つか.える|attend;doing;official|4|5|menghadiri;perbuatan;resmi
去|キョ;コ|-さ.る;さ.る|divorce;elapse;eliminate|4|5|cerai;berlalu;menyingkirkan
味|ミ|あじ;あじ.わう|flavor;taste|4|8|rasa;rasa
写|シャ;ジャ|うつ-;うつ.し;うつ.す|be photographed;copy;describe|4|5|terfoto;salinan;menggambarkan
字|ジ|-な;あざ;あざな|character;letter;section of village|4|6|watak;surat;bagian desa
答|トウ|こた.え;こた.える|answer;solution|4|12|jawaban;larutan
夜|ヤ|よ;よる|evening;night|4|8|petang;malam
音|-ノン;イン;オン|おと;ね|noise;sound|4|9|bising;suara
注|チュウ|さ.す;そそ.ぐ;つ.ぐ|annotate;comment;concentrate on|4|8|memberi anotasi;komentar;memusatkan diri pada
帰|キ|おく.る;かえ.す;かえ.る|arrive at;homecoming;lead to|4|10|sampai di;pulang kampung;mengarah ke
古|コ|-ふる.す;ふる-;ふる.い|old|4|5|tua
歌|カ|うた;うた.う|sing;song|4|14|menyanyi;lagu
買|バイ|か.う|buy|4|12|membeli
悪|アク;オ|-にく.い;あ.し;ああ|bad;evil;false|4|11|buruk;jahat;salah
図|ズ;ト|え;はか.る|audacious;drawing;extraordinary|4|7|berani nekat;gambar;luar biasa
週|シュウ||week|4|11|minggu
室|シツ|むろ|apartment;cellar;chamber|4|9|apartemen;ruang bawah tanah;bilik
歩|フ;ブ;ホ|あゆ.む;ある.く|counter for steps;walk|4|8|penggolong anak tangga;berjalan
風|フ;フウ|かざ-;かぜ|air;manner;style|4|9|udara;cara;gaya
紙|シ|かみ|paper|4|10|kertas
黒|コク|くろ;くろ.い;くろ.ずむ|black|4|11|hitam
花|カ;ケ|はな|flower|4|7|bunga
春|シュン|はる|spring (season);springtime|4|9|musim semi;musim semi
赤|シャク;セキ|あか;あか-;あか.い|red|4|7|merah
青|ショウ;セイ|あお;あお-;あお.い|blue;green|4|8|biru;hijau
館|カン|たて;やかた|building;large building;mansion|4|16|gedung;bangunan besar;rumah besar
屋|オク|や|dealer;house;roof|4|9|pedagang;rumah;atap
色|シキ;ショク|いろ|color|4|6|warna
走|ソウ|はし.る|run|4|7|berlari
秋|シュウ|あき;とき|autumn|4|9|musim gugur
夏|カ;ガ;ゲ|なつ|summer|4|10|musim panas
習|シュウ;ジュ|なら.い;なら.う|learn|4|11|belajar
駅|エキ||station|4|14|stasiun
洋|ヨウ||Western style;foreign;ocean|4|9|gaya Barat;asing;samudra
旅|リョ|たび|travel;trip|4|10|perjalanan;perjalanan
服|フク||admit;clothing;discharge|4|8|mengakui;busana;melepaskan
夕|セキ|ゆう|evening|4|3|petang
借|シャク|か.りる|borrow;rent|4|10|meminjam;sewa
曜|ヨウ||weekday|4|18|hari kerja
飲|イン;オン|-の.み;の.む|drink;smoke;take|4|12|minum;asap;mengambil
肉|ニク|しし|meat|4|6|daging
貸|タイ|か.し-;か.す;かし-|lend|4|12|meminjamkan
堂|ドウ||hall;public chamber|4|11|aula;balai umum
鳥|チョウ|とり|bird;chicken|4|11|burung;ayam
飯|ハン|めし|boiled rice;meal|4|12|nasi;santapan
勉|ベン|つと.める|diligent;encourage;endeavour|4|10|tekun;menyemangati;berusaha
冬|トウ|ふゆ|winter|4|5|musim dingin
昼|チュウ|ひる|daytime;noon|4|9|siang hari;tengah hari
茶|サ;チャ||tea|4|9|teh
弟|ダイ;テイ;デ|おとうと|faithful service to elders;younger brother|4|7|bakti kepada orang tua;adik laki-laki
牛|ギュウ|うし|cow|4|4|sapi
魚|ギョ|-ざかな;うお;さかな|fish|4|11|ikan
兄|キョウ;ケイ|あに|big brother;elder brother|4|5|kakak laki-laki;kakak laki-laki
犬|ケン|いぬ;いぬ-|dog|4|4|anjing
妹|マイ|いもうと|younger sister|4|8|adik perempuan
姉|シ|あね;はは|elder sister|4|8|kakak perempuan
漢|カン||China;Sino-|4|13|Tiongkok;Tionghoa-
政|ショウ;セイ|まつりごと;まん|government;politics|3|9|pemerintah;politik
議|ギ||consideration;consultation;debate|3|20|pertimbangan;konsultasi;perdebatan
民|ミン|たみ|nation;people;subjects|3|5|bangsa;orang-orang;rakyat
連|レン|-づ.れ;つ.れる;つら.なる|clique;connect;gang|3|10|kelompok kecil;menghubungkan;gerombolan
対|タイ;ツイ|あいて;こた.える;そろ.い|anti-;compare;equal|3|7|anti-;membandingkan;sama
部|ブ|-べ|bureau;class;copy|3|11|biro;kelas;salinan
合|カッ;ガッ;ゴウ|-あ.い;-あ.う;-あ.わせる|0.1;fit;join|3|6|0,1;cocok;bergabung
市|シ|いち|city;market;town|3|5|kota;pasar;kota kecil
内|ダイ;ナイ|うち|among;between;home|3|4|di antara;di antara;rumah
相|ショウ;ソウ|あい-|aspect;councillor;each other|3|9|segi;anggota dewan;satu sama lain
定|ジョウ;テイ|さだ.か;さだ.まる;さだ.める|decide;determine;establish|3|8|memutuskan;menentukan;mendirikan
回|エ;カイ|-まわ.し;-まわ.す;-まわ.り|-times;counter for occurrences;game|3|6|kali;penggolong kejadian;permainan
選|セン|え.る;えら.ぶ;よ.る|choose;elect;prefer|3|15|memilih;memilih;lebih suka
米|ベイ;マイ;メエトル|こめ;よね|USA;metre;rice|3|6|Amerika Serikat;meter;beras
実|シツ;ジツ|まこと;み;みち.る|fruit;nut;reality|3|8|buah;kacang keras;kenyataan
関|カン|-ぜき;かか.わる;からくり|barrier;concerning;connection|3|14|penghalang;mengenai;hubungan
決|ケツ|-ぎ.め;き.まる;き.める|agree upon;appoint;decide|3|7|menyepakati;menunjuk;memutuskan
全|ゼン|すべ.て;まった.く|all;complete;entire|3|6|semua;lengkap;seluruh
表|ヒョウ|-おもて;あら.わす;あらわ.す|chart;diagram;surface|3|8|bagan;diagram;permukaan
戦|セン|いくさ;おのの.く;そよ.ぐ|battle;match;war|3|13|pertempuran;korek api;perang
経|キョウ;キン;ケイ|た.つ;たていと;のり|expire;longitude;pass thru|3|11|kedaluwarsa;garis bujur;melewati
最|サイ;シュ|つま;もっと.も|extreme;most;utmost|3|12|ekstrem;paling;sepenuhnya
現|ゲン|あらわ.す;あらわ.れる;うつ.つ|actual;existing;present|3|11|sebenarnya;yang ada;hadiah
調|チョウ|しら.べ;しら.べる;ととの.う|exorcise;harmonize;investigate|3|15|mengusir roh;menyelaraskan;menyelidiki
化|カ;ケ|け.する;ば.かす;ば.ける|-ization;change;delude|3|4|-isasi;perubahan;memperdaya
当|トウ|あ.たり;あ.たる;あ.て|appropriate;himself;hit|3|6|pantas;dirinya sendiri;memukul
約|ヤク|つづ.まる;つづ.める;つづま.やか|approximately;promise;shrink|3|9|kira-kira;janji;menyusut
首|シュ|くび|counter for songs and poems;neck|3|9|penggolong lagu dan puisi;leher
法|ハッ;フラン;ホウ|のり|law;method;model|3|8|hukum;metode;model
性|ショウ;セイ|さが|gender;nature;sex|3|8|jenis kelamin;alam;jenis kelamin
要|ヨウ|い.る;かなめ|essence;key to;main point|3|9|inti sari;kunci untuk;pokok utama
制|セイ||law;rule;system|3|8|hukum;aturan;sistem
治|ジ;チ|おさ.まる;おさ.める;なお.す|be at peace;calm down;conserve|3|8|damai;menenangkan diri;melestarikan
務|ム|つと.める|duties;task|3|11|tugas;tugas
成|ジョウ;セイ|-な.す;な.す;な.る|become;elapse;get|3|6|menjadi;berlalu;mendapat
期|キ;ゴ||date;period;term|3|12|tanggal;periode;istilah
取|シュ|-ど.り;と.り;と.り-|fetch;take;take up|3|8|mengambil;mengambil;mengangkat
都|ツ;ト|みやこ|all;capital;everything|3|11|semua;ibu kota;segalanya
和|オ;カ;ワ|あ.える;なご.む;なご.やか|Japan;Japanese style;harmony|3|8|Jepang;gaya Jepang;keselarasan
機|キ|はた|airplane;efficacy;loom|3|16|pesawat terbang;kemanjuran;alat tenun
平|ヒョウ;ビョウ;ヘイ|たい.ら;たい.らげる;ひら|even;flat;peace|3|5|rata;datar;damai
加|カ|くわ.える;くわ.わる|Canada;add;addition|3|5|Kanada;menambah;penambahan
受|ジュ|-う.け;う.かる;う.ける|accept;answer (phone);catch|3|8|menerima;menjawab telepon;menangkap
続|キョウ;コウ;ショク|つぐ.ない;つづ.く;つづ.ける|continue;sequel;series|3|13|melanjutkan;lanjutan;seri
進|シン|すす.む;すす.める|advance;proceed;progress|3|11|maju;melanjutkan;kemajuan
数|サク;シュ;ス|かず;かぞ.える;しばしば|fate;figures;law|3|13|nasib;angka;hukum
記|キ|しる.す|account;narrative;scribe|3|10|rekening;penuturan;juru tulis
初|ショ|-そ.める;-ぞ.め;うい-|beginning;first time|3|7|permulaan;pertama kali
指|シ|-さ.し;さ.す;ゆび|finger;indicate;measure (ruler)|3|9|jari;menunjukkan;penggaris
権|ケン;ゴン|おもり;かり;はか.る|authority;power;rights|3|15|wewenang;kekuatan;hak
支|シ|か.う;ささ.える;つか.える|branch;branch radical (no. 65);support|3|4|cabang;radikal cabang (no. 65);dukungan
産|サン|う.まれる;う.む;うぶ-|bear;childbirth;give birth|3|11|beruang;persalinan;melahirkan
点|テン|さ.す;た.てる;つ.く|decimal point;mark;point|3|9|koma desimal;tanda;titik
報|ホウ|むく.いる|news;report;retribution|3|12|berita;laporan;pembalasan
済|サイ;セイ|-す.ます;-ず.み;-ずみ|come to an end;excusable;finish|3|11|berakhir;dapat dimaklumi;menyelesaikan
活|カツ|い.かす;い.きる;い.ける|being helped;lively;living|3|9|mendapat bantuan;hidup bersemangat;kehidupan
原|ゲン|はら|field;meadow;original|3|10|ladang;padang rumput;asli
共|キョウ|-ども;とも;とも.に|alike;all;and|3|6|sama;semua;dan
得|トク|う.る;え.る|able to;acquire;advantage|3|11|mampu;memperoleh;keuntungan
解|カイ;ゲ|さと.る;と.かす;と.く|absolve;answer;cancel|3|13|membebaskan;jawaban;membatalkan
交|コウ|-か.う;か.わす;かわ.す|association;coming & going;mingle|3|6|perkumpulan;keluar masuk;berbaur
資|シ||assets;be conducive to;capital|3|13|aset;mendukung;ibu kota
予|シャ;ヨ|あらかじ.め|I;beforehand;myself|3|4|saya;sebelumnya;diri saya
向|コウ|-む.き;-む.け;む.い|approach;beyond;confront|3|6|mendekati;di seberang;menghadapi
際|サイ|-ぎわ;きわ|adventurous;dangerous;edge|3|14|penuh petualangan;berbahaya;tepi
勝|ショウ|-が.ち;か.つ;かつ|excel;prevail;victory|3|12|unggul;berjaya;kemenangan
面|ベン;メン|おも;おもて;つら|face;features;mask|3|9|wajah;ciri-ciri;topeng
告|コク|つ.げる|announce;inform;revelation|3|7|mengumumkan;memberi tahu;wahyu
反|タン;ハン;ホ|-かえ.る;かえ.す;かえ.る|anti-|3|4|anti-
判|ハン;バン|わか.る|judgement;judgment;seal|3|7|penilaian;penilaian;cap
認|ニン|したた.める;みと.める|acknowledge;appreciate;believe|3|14|mengakui;menghargai;percaya
参|サン;シン|まい-;まい.る;まじわる|be defeated;be madly in love;coming|3|8|kalah;mabuk cinta;kedatangan
利|リ|き.く|advantage;benefit;profit|3|7|keuntungan;manfaat;laba
組|ソ|-ぐみ;く.む;くみ|assemble;association;braid|3|11|merakit;perkumpulan;kepang
信|シン||faith;fidelity;trust|3|9|iman;kesetiaan;kepercayaan
在|ザイ|あ.る|exist;located in;outskirts|3|6|ada;terletak di;pinggiran
件|ケン|くだん|affair;case;item|3|6|urusan;kasus;butir
側|ソク|かわ;がわ;そば|lean;oppose;regret|3|11|bersandar;menentang;menyesal
任|ニン|まか.す;まか.せる|appoint;duty;entrust to|3|6|menunjuk;kewajiban;menitipkan kepada
引|イン|ひ.く;ひ.ける|admit;install;jerk|3|4|mengakui;memasang;sentakan
求|キュウ;グ|もと.める|demand;request;require|3|7|tuntutan;permintaan;memerlukan
所|ショ|-ところ;とこ;ところ|extent;place|3|8|luasnya;tempat
次|シ;ジ|つ.ぐ;つぎ|next;order;sequence|3|6|berikutnya;perintah;urutan
昨|サク||previous;yesterday|3|9|sebelumnya;kemarin
論|ロン|あげつら.う|argument;discourse|3|15|argumen;wacana
官|カン||bureaucrat;organ;the government|3|8|birokrat;organ;pemerintah
増|ゾウ|ふ.える;ふ.やす;ま.し|add;augment;gain|3|14|menambah;menambah;perolehan
係|ケイ|-がかり;かか.る;かか.わる|concern oneself;connection;duty|3|9|ikut campur;hubungan;kewajiban
感|カン||emotion;feeling;sensation|3|13|emosi;perasaan;sensasi
情|ジョウ;セイ|なさ.け|circumstances;emotion;facts|3|11|keadaan;emosi;fakta
投|トウ|-な.げ;な.げる|abandon;discard;give up|3|7|menelantarkan;membuang;menyerah
示|シ;ジ|しめ.す|display;express;indicate|3|5|memajang;mengungkapkan;menunjukkan
変|ヘン|か.える;か.わり;か.わる|change;strange;unusual|3|9|perubahan;aneh;tidak biasa
打|ダ;ダース|う.ち-;う.つ;ぶ.つ|dozen;hit;knock|3|5|lusin;memukul;mengetuk
直|ジカ;ジキ;チョク|-なお.す;す.ぐ;ただ.ちに|fix;frankness;honesty|3|8|memperbaiki;keterusterangan;kejujuran
両|リョウ|てる;ふたつ|both;counter for carriages (e.g., in a train);old Japanese coin|3|6|keduanya;penggolong gerbong;koin Jepang kuno
式|シキ||ceremony;expression;form|3|6|upacara;ungkapan;bentuk
確|カク;コウ|たし.か;たし.かめる|assurance;clear;confirm|3|15|jaminan;jelas;memastikan
果|カ|-は.たす;-は.てる;は.たす|achieve;carry out;complete|3|8|mencapai;melaksanakan;lengkap
容|ヨウ|い.れる|contain;form;looks|3|10|memuat;bentuk;rupa
必|ヒツ|かなら.ず|certain;inevitable;invariably|3|5|pasti;tak terelakkan;selalu
演|エン||act;performance;play|3|14|bertindak;pertunjukan;bermain
歳|サイ;セイ|とし;とせ;よわい|age;occasion;opportunity|3|13|usia;kesempatan;peluang
争|ソウ|あらそ.う;いか.でか|argue;contend;dispute|3|6|berdebat;berselisih;perselisihan
談|ダン||discuss;talk|3|15|membahas;berbicara
能|ノウ|あた.う;よ.く|ability;capacity;skill|3|10|kemampuan;kapasitas;keterampilan
位|イ|くらい;ぐらい|about;crown;grade|3|7|tentang;mahkota;nilai
置|チ|-お.き;お.く|deposit;employ;keep|3|13|simpanan;mempekerjakan;menyimpan
流|リュウ;ル|-なが.す;なが.す;なが.れ|a sink;current;flow|3|10|bak cuci;arus;mengalir
格|カク;キャク;コウ||capacity;case (law, grammar);character|3|10|kapasitas;kasus (hukum, tata bahasa);watak
疑|ギ|うたが.う|be suspicious;distrust;doubt|3|14|curiga;ketidakpercayaan;keraguan
過|カ|あやま.ち;あやま.つ;す.ぎる|error;exceed;go beyond|3|12|kesalahan;melampaui;melampaui
局|キョク|つぼね|affair;board;bureau|3|7|urusan;papan;biro
放|ホウ|-っぱな.し;こ.く;はな.す|banish;emit;fire|3|8|mengasingkan;memancarkan;api
常|ジョウ|つね;とこ-|always;common;continually|3|11|selalu;umum;terus-menerus
状|ジョウ||appearance;circumstances;conditions|3|7|penampilan;keadaan;syarat
球|キュウ|たま|ball;sphere|3|11|bola;bola
職|ショク;ソク||employment;post;work|3|18|pekerjaan;pos;bekerja
与|ヨ|あずか.る;あた.える;くみ.する|award;bestow;cause|3|3|penghargaan;menganugerahkan;sebab
供|キョウ;ク;クウ|-ども;そな.える;とも|accompany;offer;present|3|8|menemani;menawarkan;hadiah
役|エキ;ヤク||campaign;drafted labor;duty|3|7|kampanye;kerja wajib;kewajiban
構|コウ|かま.う;かま.える|appearance;build;posture|3|14|penampilan;membangun;postur
割|カツ|さ.く;わ.り;わ.る|comparatively;cut;divide|3|12|secara relatif;memotong;membagi
費|ヒ|つい.える;つい.やす|consume;cost;expense|3|12|mengonsumsi;biaya;pengeluaran
付|フ|-つ.き;-つ.け;-つ.ける|adhere;append;attach|3|5|melekat;melampirkan;memasang
由|ユ;ユイ;ユウ|よ.る;よし|a reason;wherefore|3|5|alasan;oleh sebab itu
説|セツ;ゼイ|と.く|explanation;opinion;rumor|3|14|penjelasan;pendapat;desas-desus
難|ナン|-がた.い;-にく.い;かた.い|accident;defect;difficult|3|18|kecelakaan;cacat;sulit
優|ウ;ユウ|すぐ.れる;まさ.る;やさ.しい|actor;excel;gentleness|3|17|aktor;unggul;kelembutan
夫|フ;フウ;ブ|おっと;それ|husband;man|3|4|suami;pria
収|シュウ|おさ.まる;おさ.める|income;obtain;pay|3|4|pendapatan;memperoleh;membayar
断|ダン|ことわ.る;さだ.める;た.つ|apologize;cutting;decision|3|11|meminta maaf;potongan;keputusan
石|コク;シャク;セキ|いし|stone|3|5|batu
違|イ|-ちが.える;たが.う;たが.える|differ;difference|3|13|berbeda;perbedaan
消|ショウ|き.える;け.す|blow out;cancel;extinguish|3|10|memadamkan;membatalkan;memadamkan
神|シン;ジン|かみ;かん-;こう-|gods;mind;soul|3|9|para dewa;pikiran;jiwa
番|バン|つが.い|number in a series;turn|3|12|nomor urut;berputar
規|キ||measure;standard|3|11|mengukur;standar
術|ジュツ|すべ|art;magic;means|3|11|seni;sihir;sarana
備|ビ|そな.える;そな.わる;つぶさ.に|equip;preparation;provision|3|12|melengkapi;persiapan;ketentuan
宅|タク||home;house;my husband|3|6|rumah;rumah;suami saya
害|ガイ||harm;injury|3|10|bahaya;cedera
配|ハイ|くば.る|distribute;exile;rationing|3|10|membagikan;pengasingan;penjatahan
警|ケイ|いまし.める|admonish;commandment|3|19|menegur;perintah suci
育|イク|そだ.ち;そだ.つ;そだ.てる|bring up;grow up;raise|3|8|membesarkan;tumbuh dewasa;mengangkat
席|セキ|むしろ|mat;occasion;place|3|10|tikar;kesempatan;tempat
訪|ホウ|おとず.れる;たず.ねる;と.う|call on;look up;offer sympathy|3|11|mengunjungi;mendongak;menyampaikan simpati
乗|ショウ;ジョウ|-の.り;の.せる;の.る|board;counter for vehicles;join|3|9|papan;penggolong kendaraan;bergabung
残|サン;ザン|そこな.う;のこ.す;のこ.り|balance;leftover;remainder|3|10|keseimbangan;sisa;sisa
想|ソ;ソウ|おも.う|concept;idea;think|3|13|konsep;gagasan;berpikir
声|ショウ;セイ|こえ;こわ-|voice|3|7|suara
念|ネン||attention;desire;feeling|3|8|perhatian;hasrat;perasaan
助|ジョ|す.ける;すけ;たす.かる|assist;help;rescue|3|7|membantu;bantuan;menyelamatkan
労|ロウ|いた.ずき;いたわ.る;つか.れる|labor;reward for;thank for|3|7|kerja;ganjaran atas;berterima kasih atas
例|レイ|たと.える|custom;example;precedent|3|8|adat;contoh;preseden
然|ゼン;ネン|さ;しか;しか.し|if so;in that case;so|3|12|kalau begitu;kalau begitu;jadi
限|ゲン|-かぎ.り;かぎ.り;かぎ.る|limit;restrict;to best of ability|3|9|batas;membatasi;sebisa mungkin
追|ツイ|お.う|chase;drive away;follow|3|9|mengejar;mengusir;mengikuti
商|ショウ|あきな.う|dealing in;make a deal;merchant|3|11|berdagang;membuat kesepakatan;pedagang
葉|ヨウ|は|blade;counter for flat things;fragment|3|12|bilah;penggolong benda pipih;serpihan
伝|テン;デン|-づた.い;つた.う;つた.える|communicate;follow;go along|3|6|berkomunikasi;mengikuti;menyusuri
働|ドウ|はたら.く|(kokuji);work|3|13|(kanji buatan Jepang);bekerja
形|ギョウ;ケイ|-がた;かた;かたち|form;shape;style|3|7|bentuk;bentuk;gaya
景|ケイ||scenery;view|3|12|pemandangan;pemandangan
落|ラク|お.ち;お.ちる;お.とす|come down;drop;fall|3|12|turun;menjatuhkan;jatuh
好|コウ|い.い;この.む;す.く|fond;like something;pleasing|3|6|menyukai;menyukai;menyenangkan
退|タイ|しりぞ.く;しりぞ.ける;ど.く|expel;reject;repel|3|9|mengusir;menolak;menangkis
頭|ズ;ト;トウ|-がしら;あたま;かしら|counter for large animals;head|3|16|penggolong hewan besar;kepala
負|フ|お.う;ま.かす;ま.ける|-;assume a responsibility;bear|3|9|-;memikul tanggung jawab;beruang
渡|ト|-わた.る;わた.す;わた.る|cross;deliver;diameter|3|12|menyeberang;mengantarkan;diameter
失|シツ|う.せる;うしな.う|disadvantage;error;fault|3|5|kerugian;kesalahan;kesalahan
差|サ|さ.し;さ.す|balance;difference;discrepancy|3|10|keseimbangan;perbedaan;ketidaksesuaian
末|バツ;マツ|うら;うれ;すえ|close;end;posterity|3|5|menutup;akhir;anak cucu
守|シュ;ス|-もり;かみ;まも.り|defend;guard;obey|3|6|membela;penjaga;menaati
若|ジャク;ニャ;ニャク|ごと.し;も.し;も.しくは|if;immature;low number|3|8|jika;belum matang;bilangan kecil
種|シュ|-ぐさ;たね|class;kind;seed|3|14|kelas;baik hati;benih
美|ビ;ミ|うつく.しい|beautiful;beauty|3|9|indah;keindahan
命|ミョウ;メイ|いのち|appoint;command;decree|3|8|menunjuk;perintah;dekret
福|フク||blessing;fortune;luck|3|13|berkah;keberuntungan;keberuntungan
望|ボウ;モウ|のぞ.む;もち|ambition;aspire to;desire|3|11|cita-cita;mendambakan;hasrat
非|ヒ|あら.ず|injustice;mistake;negative|3|8|ketidakadilan;kesalahan;negatif
観|カン|しめ.す;み.る|appearance;condition;look|3|18|penampilan;kondisi;melihat
察|サツ||guess;judge;presume|3|14|menebak;hakim;mengira
段|タン;ダン||grade;stairs;steps|3|9|nilai;tangga;tangga
横|オウ|よこ|horizontal;perverse;side|3|15|mendatar;melenceng;sisi
深|シン|-ぶか.い;ふか.い;ふか.まる|deep;heighten;intensify|3|11|dalam;meninggikan;memperkuat
申|シン|さる;もう.し-;もう.す|3-5PM;have the honor to;ninth sign of Chinese zodiac|3|5|pukul 15-17;berkenan;shio kesembilan
様|ショウ;ヨウ|さま;さん|Esq.;manner;polite suffix|3|14|Yth.;cara;akhiran sopan
財|サイ;ザイ;ゾク|たから|assets;money;property|3|10|aset;uang;milik
港|コウ|みなと|harbor|3|12|pelabuhan
識|シキ|し.る;しる.す|discriminating;know;write|3|19|jeli membedakan;tahu;menulis
呼|コ|よ.ぶ|call;call out to;invite|3|8|memanggil;menyerukan kepada;mengundang
達|タツ;ダ|-たち|accomplished;arrive;attain|3|12|terlaksana;tiba;mencapai
良|リョウ|-い.い;-よ.い;い.い|good;pleasing;skilled|3|7|baik;menyenangkan;terampil
候|コウ|そうろう|climate;expect;season|3|10|iklim;mengharapkan;musim
程|テイ|-ほど;ほど|amount;degree;distance|3|12|jumlah;derajat;jarak
満|バン;マン|み.たす;み.ちる;み.つ|enough;full;fullness|3|12|cukup;penuh;kepenuhan
敗|ハイ|やぶ.れる|defeat;failure;reversal|3|11|kekalahan;kegagalan;pembalikan
値|チ|あたい;ね|cost;price;value|3|10|biaya;harga;nilai
突|カ;トツ|つ.く|collision;pierce;prick|3|8|tabrakan;menusuk;menusuk
光|コウ|ひか.る;ひかり|light;ray|3|6|cahaya;sinar
路|ル;ロ|-じ;みち|distance;path;road|3|13|jarak;jalan setapak;jalan
科|カ||course;department;section|3|9|jalur;departemen;bagian
積|セキ|-づ.み;つ.む;つ.もり|acreage;amass;contents|3|16|luas lahan;mengumpulkan;isi
他|タ|ほか|another;other;the others|3|5|yang lain;lain;yang lain
処|ショ|-こ;お.る;ところ|act;behave;condemn|3|5|bertindak;berperilaku;mengecam
太|タ;タイ|ふと.い;ふと.る|big around;plump;thick|3|4|besar melingkar;montok;tebal
客|カク;キャク||client;customer;guest|3|9|klien;pelanggan;tamu
否|ヒ|いな;いや|decline;deny;negate|3|7|menolak;menyangkal;menyangkal
師|シ|いくさ|army (incl. counter);exemplar;expert|3|10|tentara (juga kata bantu bilangan);teladan;ahli
登|ショウ;チョウ;ト|あ.がる;のぼ.る|ascend;climb up|3|12|naik;memanjat
易|イ;エキ|やさ.しい;やす.い|divination;easy;fortune-telling|3|8|ramalan;mudah;ramalan nasib
速|ソク|すみ.やか;はや-;はや.い|fast;quick|3|10|cepat;cepat
存|ソン;ゾン|あ.る;たも.つ;と.う|be aware of;believe;exist|3|6|menyadari;percaya;ada
飛|ヒ|-と.ばす;と.ばす;と.ぶ|fly;scatter;skip (pages)|3|9|terbang;menyebar;melewati halaman
殺|サイ;サツ;セツ|-ごろ.し;あや.める;ころ.す|butcher;diminish;kill|3|10|tukang daging;menyusut;membunuh
号|ゴウ|さけ.ぶ;よびな|call;item;name|3|5|memanggil;butir;nama
単|タン|ひとえ|merely;one;simple|3|9|hanya;satu;sederhana
座|ザ|すわ.る|cushion;gathering;seat|3|10|bantalan;perkumpulan;tempat duduk
破|ハ|やぶ.る;やぶ.れる;わ.れる|break;defeat;destroy|3|10|patah;kekalahan;menghancurkan
除|ジ;ジョ|-よ.け;のぞ.く|abolish;cancel;division (x/3)|3|10|menghapuskan;membatalkan;pembagian
完|カン||completion;end;perfect|3|7|penyelesaian;akhir;sempurna
降|コウ;ゴ|お.りる;お.ろす;くだ.す|descend;fall;precipitate|3|10|menuruni;jatuh;mengendapkan
責|セキ|せ.める|blame;censure;condemn|3|11|menyalahkan;mencela;mengecam
捕|ホ|つか.まえる;つか.まる;と.らえる|capture;catch|3|10|menawan;menangkap
危|キ|あぶ.ない;あや.うい;あや.ぶむ|dangerous;fear;uneasy|3|6|berbahaya;takut;gelisah
給|キュウ|-たま.え;たま.う;たも.う|allow;bestow on;gift|3|12|mengizinkan;melimpahkan kepada;hadiah
苦|ク|-ぐる.しい;くる.しい;くる.しむ|feel bitter;hardship;scowl|3|8|merasa getir;kesukaran;mengernyit marah
迎|ゲイ|むか.える|greet;meet;welcome|3|7|menyapa;bertemu;menyambut
園|エン|その|farm;garden;park|3|13|ladang;taman;taman
具|グ|そな.える;つぶさ.に|counter for armor, suits, sets of furniture;ingredients;means|3|8|penggolong zirah, setelan, set perabot;bahan;sarana
辞|ジ|いな.む;や.める|expression;resign;term|3|13|ungkapan;mengundurkan diri;istilah
因|イン|ちな.む;よ.る|be associated with;be limited to;cause|3|6|berkaitan dengan;terbatas pada;sebab
馬|バ|うま;うま-;ま|horse|3|10|kuda
愛|アイ|いと.しい;お.しむ;かな.しい|affection;favourite;love|3|13|kasih sayang;favorit;cinta
富|フ;フウ|と.む;とみ|abundant;enrich;wealth|3|12|berlimpah;memperkaya;kekayaan
彼|ヒ|か.の;かの;かれ|he;that;the|3|8|dia;itu;itu
未|ビ;ミ|いま.だ;ひつじ;ま.だ|1-3PM;eighth sign of Chinese zodiac;even now|3|5|pukul 13-15;shio kedelapan;bahkan sekarang
舞|ブ|-ま.う;ま.う;まい|circle;dance;flit|3|15|lingkaran;tarian;melintas cepat
亡|ボウ;モウ|な.い;な.き-;ほろ.びる|deceased;dying;perish|3|3|almarhum;sekarat;binasa
冷|レイ|さ.ます;さ.める;つめ.たい|chill;cold (beer, person);cool|3|7|dingin;dingin (bir, orang);sejuk
適|テキ|かな.う|capable;occasional;qualified|3|14|cakap;sesekali;memenuhi syarat
婦|フ|よめ|bride;lady;wife|3|11|pengantin perempuan;nyonya;istri
寄|キ|-よ.り;よ.せる;よ.る|bring near;collect;draw near|3|11|mendekatkan;mengumpulkan;mendekat
込||-こ.み;-こ.む;こ.み|(kokuji);crowded;in bulk|3|5|(kanji buatan Jepang);padat;dalam jumlah besar
顔|ガン|かお|expression;face|3|18|ungkapan;wajah
類|ルイ|たぐ.い|class;genus;kind|3|18|kelas;marga;baik hati
余|ヨ|あま.す;あま.り;あま.る|myself;other;remainder|3|7|diri saya;lain;sisa
王|-ノウ;オウ||king;magnate;rule|3|4|raja;taipan;aturan
返|ヘン|-かえ.す;-かえ.る;かえ.す|answer;fade;repay|3|7|jawaban;memudar;membalas
妻|サイ|つま|spouse;wife|3|8|pasangan hidup;istri
背|ハイ|せ;せい;そむ.く|back;behind;defy|3|9|punggung;di belakang;menantang
熱|ネツ|あつ.い|fever;heat;mania|3|15|demam;panas;kegandrungan
宿|シュク|やど;やど.す;やど.る|be pregnant;dwell;dwelling|3|11|hamil;bermukim;tempat tinggal
薬|ヤク|くすり|benefit;chemical;enamel|3|16|manfaat;bahan kimia;enamel
険|ケン|けわ.しい|impregnable position;inaccessible place;precipitous|3|11|posisi tak tertembus;tempat tak terjangkau;curam
頼|ライ|たの.む;たの.もしい;たよ.る|request;trust|3|16|permintaan;kepercayaan
覚|カク|おぼ.える;さ.ます;さ.める|awake;learn;memorize|3|12|terjaga;belajar;menghafal
船|セン|ふな-;ふね|boat;ship|3|11|perahu;kapal
途|ト|みち|road;route;way|3|10|jalan;rute;cara
許|キョ|もと;ゆる.す|approve;permit|3|11|menyetujui;izin
抜|ハイ;ハツ;バツ|-ぬ.く;ぬ.かす;ぬ.かる|extract;omit;pilfer|3|7|menyarikan;menghilangkan;mencuri kecil-kecilan
便|ビン;ベン|たよ.り|chance;convenience;excrement|3|9|kesempatan;kemudahan;kotoran
留|リュウ;ル|と.まる;と.める;とど.まる|detain;fasten;halt|3|10|menahan;mengencangkan;berhenti
罪|ザイ|つみ|blame;crime;fault|3|13|menyalahkan;kejahatan;kesalahan
努|ド|つと.める|as much as possible;diligent;toil|3|7|sebisa mungkin;tekun;kerja keras
精|ショウ;セイ|くわ.しい;しら.げる|energy;excellence;fairy|3|14|energi;keunggulan;peri
散|サン|-ち.らす;ち.らかす;ち.らかる|disperse;scatter;spend|3|12|membubarkan;menyebar;membelanjakan
静|ジョウ;セイ|しず-;しず.か;しず.まる|quiet|3|14|tenang
婚|コン||marriage|3|11|pernikahan
喜|キ|よろこ.ばす;よろこ.ぶ|rejoice;take pleasure in|3|12|bersukacita;menikmati
浮|フ|う.かぶ;う.かべる;う.かれる|float;floating;rise to surface|3|10|mengapung;mengambang;muncul ke permukaan
絶|ゼツ|た.える;た.つ;た.やす|abstain;be beyond;cut off|3|12|menahan diri;melampaui;memutus
幸|コウ|さいわ.い;さち;しあわ.せ|blessing;fortune;happiness|3|8|berkah;keberuntungan;kebahagiaan
押|オウ|お.さえる;お.し-;お.す|attach;check;do in spite of|3|8|memasang;memeriksa;nekat melakukan
倒|トウ|-だお.れ;さかさ;さかさま|break down;collapse;drop|3|10|rusak;runtuh;menjatuhkan
等|トウ|-ら;など;ひと.しい|and so forth;class (first);equal|3|12|dan sebagainya;kelas (satu);sama
老|ロウ|お.いる;ふ.ける|grow old;old age;old man|3|6|menua;usia lanjut;orang tua laki-laki
曲|キョク|くま;ま.がる;ま.げる|bend;composition;crooked|3|6|menekuk;karangan;bengkok
払|ヒツ;フツ;ホツ|-はら.い;-ばら.い;はら.う|banish;clear out;dispose of|3|5|mengasingkan;mengosongkan;menyingkirkan
庭|テイ|にわ|courtyard;garden;yard|3|10|halaman dalam;taman;halaman
徒|ト|あだ;いたずら|emptiness;ephemeral thing;futility|3|10|kehampaan;hal yang fana;kesia-siaan
勤|キン;ゴン|-づと.め;いそ.しむ;つと.まる|become employed;diligence;serve|3|12|mendapat pekerjaan;ketekunan;melayani
遅|チ|おく.らす;おく.れる;おそ.い|back;late;later|3|12|punggung;terlambat;kemudian
居|キョ;コ|-い;い.る;お.る|exist;live with;reside|3|8|ada;tinggal bersama;bertempat tinggal
雑|ザツ;ゾウ|まじ.える;まじ.る|miscellaneous|3|14|serba-serbi
招|ショウ|まね.く|beckon;engage;invite|3|8|melambai memanggil;melibatkan;mengundang
困|コン|こま.る|annoyed;become distressed;quandary|3|7|kesal;menjadi susah hati;dilema
欠|ケツ;ケン|か.く;か.ける|fail;gap;lack|3|4|gagal;celah;kekurangan
更|コウ|さら;さら.に;ふ.かす|again;further;grow late|3|7|lagi;lebih lanjut;larut
刻|コク|きざ.み;きざ.む|carving;chop;cut fine|3|8|ukiran;mencincang;mencincang halus
賛|サン|たす.ける;たた.える|agree with;approve;assist|3|15|sependapat dengan;menyetujui;membantu
抱|ホウ|いだ.く;かか.える;だ.く|embrace;hold in arms;hug|3|8|memeluk;memangku;memeluk
犯|ハン;ボン|おか.す|crime;offense;sin|3|5|kejahatan;pelanggaran;dosa
恐|キョウ|おそ.る;おそ.れる;おそ.ろしい|awe;dread;fear|3|10|kekaguman;kengerian;takut
息|ソク|いき|breath;coming to an end;interest (on money)|3|10|napas;mendekati akhir;bunga uang
遠|エン;オン|とお.い|distant;far|3|13|jauh;jauh
戻|レイ|もど.す;もど.る|go backwards;re-;restore|3|7|mundur;ulang;memulihkan
願|ガン|-ねがい;ねが.う|hope;petition;request|3|19|harapan;petisi;permintaan
絵|エ;カイ||drawing;painting;picture|3|12|gambar;lukisan;gambar
越|エツ;オツ|-こ.す;-ご.え;-ご.し|Vietnam;cross over;exceed|3|12|Vietnam;melintasi;melampaui
欲|ヨク|ほ.しい;ほっ.する|covetousness;craving;desire|3|11|ketamakan;keinginan kuat;hasrat
痛|ツウ|いた.い;いた.ましい;いた.む|bruise;damage;hurt|3|12|memar;kerusakan;melukai
笑|ショウ|え.む;わら.う|laugh|3|10|tertawa
互|ゴ|かたみ.に;たが.い|mutually;reciprocally;together|3|4|saling;secara timbal balik;bersama
束|ソク|たば;たば.ねる;つか|bundle;control;govern|3|7|bundel;kendali;memerintah
似|ジ|に.る;ひ.る|becoming;counterfeit;imitate|3|7|pantas;palsu;meniru
列|レ;レツ||column;file;rank|3|6|kolom;berkas;peringkat
探|タン|さが.す;さぐ.る|grope;look for;search|3|11|meraba-raba;mencari;mencari
逃|トウ|に.がす;に.げる;のが.す|escape;evade;flee|3|9|melarikan diri;mengelak;melarikan diri
遊|ユ;ユウ|あそ.ばす;あそ.ぶ|play|3|12|bermain
迷|メイ|まよ.う|astray;be perplexed;err|3|9|tersesat;bingung;keliru
夢|ボウ;ム|くら.い;ゆめ;ゆめ.みる|dream;illusion;vision|3|13|mimpi;ilusi;penglihatan
君|クン|-ぎみ;きみ|male name suffix;mister;ruler|3|7|akhiran nama laki-laki;tuan;penguasa
閉|ヘイ|し.まる;し.める;た.てる|closed;shut|3|11|tertutup;menutup
緒|ショ;チョ|いとぐち;お|beginning;cord;end|3|14|permulaan;tali;akhir
折|シャク;セツ|-お.り;お.り;お.る|bend;break;fold|3|7|menekuk;patah;melipat
草|ソウ|-ぐさ;くさ;くさ-|draft;grass;herbs|3|9|draf;rumput;rempah
暮|ボ|く.らす;く.れる|evening;livelihood;make a living|3|14|petang;penghidupan;mencari nafkah
酒|シュ|さか-;さけ|alcohol;sake|3|10|alkohol;sake
悲|ヒ|かな.しい;かな.しむ|deplore;grieve;regret|3|12|menyesalkan;berduka;menyesal
晴|セイ|-ば.れ;は.らす;は.れ|clear up|3|12|mencerahkan
掛|カイ;ケイ|-か.かる;-か.け;-か.ける|arrive at;depend;hang|3|11|sampai di;bergantung;menggantung
到|トウ|いた.る|arrival;attain;proceed|3|8|kedatangan;mencapai;melanjutkan
寝|シン|い.ぬ;ね.かす;ね.る|bed;lie down;remain unsold|3|13|tempat tidur;berbaring;tak terjual
暗|アン|くら.い;くら.む;くれ.る|be blinded;darkness;disappear|3|13|dibutakan;kegelapan;menghilang
盗|トウ|ぬす.み;ぬす.む|pilfer;rob;steal|3|11|mencuri kecil-kecilan;merampok;mencuri
吸|キュウ|す.う|imbibe;inhale;sip|3|6|meneguk;menghirup;menyesap
陽|ヨウ|ひ|daytime;heaven;male|3|12|siang hari;surga;laki-laki
御|ギョ;ゴ|お-;おん-;み-|govern;honorable;manipulate|3|12|memerintah;terhormat;memanipulasi
歯|シ|は;よわ.い;よわい|cog;tooth|3|12|gerigi;gigi
忘|ボウ|わす.れる|forget|3|7|lupa
雪|セツ|ゆき|snow|3|11|salju
吹|スイ|ふ.く|blow;breathe;emit|3|7|meniup;bernapas;memancarkan
娘|ジョウ|こ;むすめ|daughter;girl|3|10|anak perempuan;gadis
誤|ゴ|-あやま.る;あやま.る|do wrong;err;mislead|3|14|berbuat salah;keliru;menyesatkan
洗|セン|あら.う|inquire into;probe;wash|3|9|menyelidiki;menyelidiki;mencuci
慣|カン|な.らす;な.れる|accustomed;become experienced;get used to|3|14|terbiasa;menjadi berpengalaman;terbiasa
礼|ライ;レイ||bow;ceremony;remuneration|3|5|busur;upacara;imbalan
窓|ス;ソウ|けむだし;てんまど;まど|pane;window|3|11|kaca jendela;jendela
昔|シャク;セキ|むかし|antiquity;old times;once upon a time|3|8|zaman purba;zaman dahulu;pada suatu masa
貧|ヒン;ビン|まず.しい|poor;poverty|3|11|miskin;kemiskinan
怒|ド;ヌ|いか.る;おこ.る|angry;be offended|3|9|marah;tersinggung
泳|エイ|およ.ぐ|swim|3|8|berenang
祖|ソ||ancestor;founder;pioneer|3|9|leluhur;pendiri;perintis
杯|ハイ|さかずき|counter for cupfuls;glass;toast|3|8|penggolong cangkir;kaca;bersulang
疲|ヒ|-づか.れ;つか.らす;つか.れる|exhausted;tire;weary|3|10|kelelahan;ban;lelah
皆|カイ|みな;みんな|all;everything|3|9|semua;segalanya
鳴|メイ|な.く;な.らす;な.る|bark;chirp;cry|3|14|kulit kayu;berkicau;menangis
腹|フク|はら|abdomen;belly;stomach|3|13|perut;perut;lambung
煙|エン|けむ.い;けむ.る;けむり|smoke|3|13|asap
眠|ミン|ねむ.い;ねむ.る|die;sleep;sleepy|3|10|mati;tidur;mengantuk
怖|フ;ホ|お.じる;おそ.れる;こわ.い|be frightened;dreadful;fearful|3|8|ketakutan;mengerikan;penakut
耳|ジ|みみ|ear|3|6|telinga
頂|チョウ|いただ.く;いただき|peak;place on the head;receive|3|11|puncak;menaruh di kepala;menerima
箱|ソウ|はこ|bin;box;case|3|15|tempat penyimpanan;kotak;kasus
晩|バン||night;nightfall|3|12|malam;senja
寒|カン|さむ.い|cold|3|12|dingin
髪|ハツ|かみ|hair of the head|3|14|rambut kepala
忙|ボウ;モウ|いそが.しい;うれえるさま;おそ.れる|busy;occupied;restless|3|6|sibuk;terisi;gelisah
才|サイ||cubic shaku;genius;years old|3|3|shaku kubik;jenius;tahun usia
靴|カ|くつ|shoes|3|13|sepatu
恥|チ|は.じらう;は.じる;は.ずかしい|dishonor;shame|3|10|penghinaan;malu
偶|グウ|たま|accidentally;couple;even number|3|11|secara tidak sengaja;pasangan;bilangan genap
偉|イ|えら.い|admirable;conceited;excellent|3|12|mengagumkan;sombong;sangat baik
猫|ビョウ|ねこ|cat|3|11|kucing
幾|キ|いく-;いく.つ;いく.ら|how far;how long;how many|3|12|sejauh apa;berapa lama;berapa banyak
党|トウ|なかま;むら|clique;faction;party|2|10|kelompok kecil;faksi;pesta
協|キョウ||co-;cooperation|2|8|bersama;kerja sama
総|ソウ|す.べて;すべ.て;ふさ|all;full;general|2|14|semua;penuh;umum
区|オウ;ク;コウ||district;ward|2|4|distrik;distrik kota
領|リョウ|えり|dominion;fief;jurisdiction|2|14|kekuasaan;wilayah kekuasaan;yurisdiksi
県|ケン|か.ける|prefecture|2|9|prefektur
設|セツ|もう.ける|establishment;prepare;provision|2|11|pendirian;menyiapkan;ketentuan
改|カイ|あらた.まる;あらた.める|change;examine;inspect|2|7|perubahan;memeriksa;memeriksa
府|フ||borough;govt office;representative body|2|8|kota praja;kantor pemerintah;badan perwakilan
査|サ||investigate|2|9|menyelidiki
委|イ|ゆだ.ねる|committee;devote;discard|2|8|panitia;mengabdikan;membuang
軍|グン|いくさ|army;battle;force|2|9|tentara;pertempuran;kekuatan
団|ダン;トン|かたまり;まる.い|association;group|2|6|perkumpulan;kelompok
各|カク|おのおの|each;either;every|2|6|masing-masing;salah satu;setiap
島|トウ|しま|island|2|10|pulau
革|カク|かわ|become serious;leather;reform|2|9|menjadi serius;kulit samak;pembaruan
村|ソン|むら|town;village|2|7|kota kecil;desa
勢|セイ;ゼイ|いきお.い;はずみ|energy;forces;military strength|2|13|energi;pasukan;kekuatan militer
減|ゲン|へ.らす;へ.る|curtail;decline;decrease|2|12|memangkas;menolak;berkurang
再|サ;サイ|ふたた.び|again;second time;twice|2|6|lagi;kali kedua;dua kali
税|ゼイ||duty;tax|2|12|kewajiban;pajak
営|エイ|いとな.み;いとな.む|build;camp;conduct (business)|2|12|membangun;perkemahan;menjalankan usaha
比|ヒ|くら.べる|Philippines;compare;race|2|4|Filipina;membandingkan;balapan
防|ボウ|ふせ.ぐ|defend;protect;resist|2|7|membela;melindungi;melawan
補|ホ|おぎな.う|assistant;compensate;learner|2|12|asisten;mengganti rugi;pembelajar
境|キョウ;ケイ|さかい|border;boundary;region|2|14|perbatasan;batas;wilayah
導|ドウ|みちび.く|conduct;guidance;leading|2|15|perilaku;bimbingan;terkemuka
副|フク||aide;assistant;copy|2|11|ajudan;asisten;salinan
算|サン|そろ|abacus;calculate;divining|2|14|sempoa;menghitung;meramal
輸|シュ;ユ||be inferior;send;transport|2|16|kalah mutu;mengirim;pengangkutan
述|ジュツ|の.べる|mention;relate;speak|2|8|menyebutkan;menceritakan;berbicara
線|セン|すじ|line;track|2|15|garis;jejak
農|ノウ||agriculture;farmers|2|13|pertanian;petani
州|シュウ;ス|す|province;state|2|6|provinsi;negara bagian
武|ブ;ム|たけ;たけ.し|arms;chivalry;military|2|8|senjata;jiwa ksatria;militer
象|ショウ;ゾウ|かたど.る|elephant;image;imitate|2|12|gajah;citra;meniru
域|イキ||level;limits;range|2|11|tingkat;batasan;jangkauan
額|ガク|ひたい|amount;forehead;framed picture|2|18|jumlah;dahi;lukisan berbingkai
欧|オウ|うた.う;は.く|Europe|2|8|Eropa
担|タン|かつ.ぐ;にな.う|bear;carry;raise|2|8|beruang;membawa;mengangkat
準|ジュン|じゅん.じる;じゅん.ずる;なぞら.える|conform;correspond to;imitate|2|13|menyesuaikan diri;sesuai dengan;meniru
賞|ショウ|ほ.める|praise;prize;reward|2|15|pujian;hadiah;ganjaran
辺|ヘン|-べ;あた.り;ほと.り|border;boundary;environs|2|5|perbatasan;batas;sekitar
造|ゾウ|-づく.り;つく.り;つく.る|create;make;physique|2|10|menciptakan;membuat;perawakan
被|ヒ|おお.う;かぶ.せる;かぶ.る|be exposed (film);brood over;cover|2|10|terekspos (film);merenungi;menutupi
技|ギ|わざ|ability;art;arts|2|7|kemampuan;seni;kesenian
低|テイ|ひく.い;ひく.まる;ひく.める|humble;lower;short|2|7|rendah hati;menurunkan;pendek
復|フク|また|restore;resume;return to|2|12|memulihkan;melanjutkan kembali;kembali ke
移|イ|うつ.す;うつ.る|catch (cold, fire);change;drift|2|11|terkena (pilek, api);perubahan;hanyut
個|カ;コ||counter for articles;individual|2|10|penggolong barang;perorangan
門|モン|かど;と|counter for cannons;gate|2|8|penggolong meriam;gerbang
課|カ||chapter;counter for chapters (of a book);department|2|15|bab;penggolong bab;departemen
脳|ドウ;ノウ|のうずる|brain;memory|2|11|otak;ingatan
極|キョク;ゴク|-ぎ.め;き.まる;き.める|10**48;conclusion;electric poles|2|12|10 pangkat 48;kesimpulan;kutub listrik
含|ガン|ふく.む;ふく.める|bear in mind;cherish;contain|2|7|mengingat;menyayangi;memuat
蔵|ソウ;ゾウ|おさ.める;かく.れる;くら|have;hide;own|2|15|memiliki;menyembunyikan;memiliki
量|リョウ|はか.る|amount;consider;estimate|2|12|jumlah;mempertimbangkan;perkiraan
型|ケイ|-がた;かた|model;mould;type|2|9|model;cetakan;jenis
況|キョウ|いわ.んや;おもむき;まし.て|condition;situation|2|8|kondisi;situasi
針|シン|はり|needle;pin;staple|2|10|jarum;peniti;pokok
専|セン|もっぱ.ら|exclusive;mainly;solely|2|9|eksklusif;terutama;semata-mata
谷|コク|きわ.まる;たに|valley|2|7|lembah
史|シ||chronicle;history|2|5|kronik;sejarah
階|カイ|きざはし|counter for storeys of a building;stair;storey|2|12|penggolong lantai gedung;anak tangga;lantai
管|カン|くだ|control;drunken talk;jurisdiction|2|14|kendali;ocehan mabuk;yurisdiksi
兵|ヒョウ;ヘイ|つわもの|army;private;soldier|2|7|tentara;pribadi;prajurit
接|ショウ;セツ|つ.ぐ|adjoin;contact;piece together|2|11|berbatasan;kontak;merangkai
細|サイ|こま.か;こま.かい;ほそ.い|dainty;detailed;get thin|2|11|mungil elok;terperinci;mengurus
効|コウ|き.く;ききめ;なら.う|benefit;efficacy;efficiency|2|8|manfaat;kemanjuran;efisiensi
丸|ガン|まる;まる.い;まる.める|-ship;curl up;explain away|2|3|-an;meringkuk;berdalih
湾|ワン|いりえ|bay;gulf;inlet|2|12|teluk;teluk besar;teluk kecil
録|ロク|しる.す;と.る|record|2|16|catatan
省|ショウ;セイ|かえり.みる;はぶ.く|conserve;government ministry;omit|2|9|melestarikan;kementerian;menghilangkan
旧|キュウ|ふる.い;もと|ex-;former;old friend|2|5|mantan;mantan;teman lama
橋|キョウ|はし|bridge|2|16|jembatan
岸|ガン|きし|beach|2|8|pantai
周|シュウ|まわ.り|circuit;circumference;lap|2|8|sirkuit;keliling;pangkuan
材|ザイ||ingredients;log;lumber|2|7|bahan;batang kayu;kayu olahan
戸|コ|と|counter for houses;door;door radical (no. 63)|2|4|penggolong rumah;pintu;radikal pintu (no. 63)
央|オウ||center;middle|2|5|pusat;tengah
券|ケン||ticket|2|8|tiket
編|ヘン|-あ.み;あ.む|braid;compilation;completed poem|2|15|kepang;penyusunan;puisi yang rampung
捜|シュ;シュウ;ソウ|さが.す|locate;look for;search|2|10|menempatkan;mencari;mencari
竹|チク|たけ|bamboo|2|6|bambu
超|チョウ|こ.える;こ.す|super-;transcend;ultra-|2|12|super-;melampaui;ultra-
並|ヘイ;ホウ|な.み;なみ;なら.びに|and;as well as;besides|2|8|dan;serta;selain itu
療|リョウ||cure;heal|2|17|menyembuhkan;menyembuhkan
採|サイ|と.る|fetch;pick;take|2|11|mengambil;memetik;mengambil
森|シン|もり|forest;woods|2|12|hutan;hutan kecil
競|キョウ;ケイ|きそ.う;くら.べる;せ.る|bid;bout;compete with|2|20|menawar;babak;bersaing dengan
介|カイ||concern oneself with;jammed in;mediate|2|4|menaruh perhatian pada;terjepit;menengahi
根|コン|-ね;ね|head (pimple);radical;root|2|10|mata bisul;radikal;akar
販|ハン||marketing;sell;trade|2|11|pemasaran;menjual;perdagangan
歴|レキ;レッキ||continuation;curriculum;passage of time|2|14|kelanjutan;kurikulum;berlalunya waktu
将|ショウ;ソウ|はた;ひきい.る;まさ|admiral;and again;commander|2|10|laksamana;dan lagi;panglima
幅|フク|はば|hanging scroll;width|2|12|gulungan gantung;lebar
般|ハン||all;carrier;carry|2|10|semua;pengangkut;membawa
貿|ボウ||exchange;trade|2|12|pertukaran;perdagangan
講|コウ||association;club;lecture|2|17|perkumpulan;kelab;kuliah
林|リン|はやし|forest;grove|2|8|hutan;rumpun pohon
装|ショウ;ソウ|よそお.い;よそお.う|attire;disguise;dress|2|12|pakaian;penyamaran;gaun
諸|ショ|もろ|many;several;together|2|15|banyak;beberapa;bersama
劇|ゲキ||drama;play|2|15|drama;bermain
河|カ|かわ|river|2|8|sungai
航|コウ||cruise;fly;navigate|2|10|pelayaran;terbang;berlayar
鉄|テツ|くろがね|iron|2|13|besi
児|ゲイ;ジ;ニ|-こ;-っこ;こ|child;newborn babe;young of animals|2|7|anak;bayi baru lahir;anak hewan
禁|キン||ban;forbid;prohibition|2|13|larangan;melarang;larangan
印|イン|-じるし;しる.す;しるし|India;emblem;evidence|2|6|India;lambang;bukti
逆|ギャク;ゲキ|さか;さか.さ;さか.らう|inverted;opposite;reverse|2|9|terbalik;berlawanan;kebalikan
換|カン|-か.える;か.える;か.わる|change;convert;interchange|2|12|perubahan;mengubah;pertukaran
久|キュウ;ク|ひさ.しい|long time;old story|2|3|waktu lama;kisah lama
短|タン|みじか.い|brevity;defect;fault|2|12|keringkasan;cacat;kesalahan
油|ユ;ユウ|あぶら|fat;oil|2|8|gemuk;minyak
暴|バク;ボウ|あば.く;あば.れる|cruelty;force;fret|2|15|kekejaman;kekuatan;gelisah
輪|リン|わ|circle;counter for wheels and flowers;link|2|15|lingkaran;penggolong roda dan bunga;tautan
占|セン|うらな.う;し.める|divining;forecasting;fortune-telling|2|5|meramal;peramalan;ramalan nasib
植|ショク|う.える;う.わる|plant|2|12|tanaman
清|ショウ;シン;セイ|きよ.い;きよ.まる;きよ.める|Manchu dynasty;cleanse;exorcise|2|11|Dinasti Manchu;membersihkan;mengusir roh
倍|バイ||double;fold;times|2|10|ganda;melipat;kali
均|キン|なら.す|average;level|2|7|rata-rata;tingkat
億|オク||10**8;hundred million|2|15|10 pangkat 8;seratus juta
圧|アツ;エン;オウ|お.さえる;お.す;おさ.える|dominate;oppress;overwhelm|2|5|menguasai;menindas;menenggelamkan
芸|ウン;ゲイ|う.える;のり;わざ|acting;art;craft|2|7|pelaksana sementara;seni;kerajinan
署|ショ||govt office;police station;signature|2|13|kantor pemerintah;kantor polisi;tanda tangan
伸|シン|の.す;の.ばす;の.びる|expand;extend;increase|2|7|memperluas;memperpanjang;bertambah
停|テイ|と.まる;と.める|halt;stopping|2|11|berhenti;penghentian
爆|バク|は.ぜる|bomb;burst open;pop|2|19|bom;merekah;letupan
陸|リク;ロク|おか|land;six|2|11|tanah;enam
玉|ギョク|-だま;たま;たま-|ball;jewel|2|5|bola;permata
波|ハ|なみ|Poland;billows;waves|2|8|Polandia;gelombang besar;ombak
帯|タイ|お.びる;おび|belt;obi;region|2|10|sabuk;obi;wilayah
延|エン|の.ばす;の.びる;の.べ|prolong;stretching|2|8|memperpanjang;peregangan
羽|ウ|は;はね;わ|counter for birds, rabbits;feathers|2|6|penggolong burung dan kelinci;bulu
固|コ|かた.い;かた.まり;かた.まる|clot;curdle;harden|2|8|gumpalan;menggumpal;mengeras
則|ソク|すなわち;のっと.る;のり|based on;follow;law|2|9|berdasarkan;mengikuti;hukum
乱|ラン;ロン|おさ.める;みだ;みだ.す|disorder;disturb;riot|2|7|kekacauan;mengganggu;kerusuhan
普|フ|あまね.く;あまねし|Prussia;generally;universal|2|12|Prusia;pada umumnya;semesta
測|ソク|はか.る|fathom;measure;plan|2|12|depa;mengukur;rencana
豊|ブ;ホウ|とよ;ゆた.か|bountiful;excellent;rich|2|13|melimpah;sangat baik;kaya
厚|コウ|あか;あつ.い|brazen;cordial;heavy|2|9|tak tahu malu;ramah;berat
齢|レイ|とし;よわい|age|2|17|usia
囲|イ|かこ.い;かこ.う;かこ.む|besiege;encircle;enclosure|2|7|mengepung;mengelilingi;pagar keliling
卒|シュツ;ソツ|お.える;お.わる;そっ.する|die;graduate;private|2|8|mati;lulus;pribadi
略|リャク|おか.す;おさ.める;はか.る|abbreviation;capture;omission|2|11|singkatan;menawan;kelalaian
承|ショウ;ジョウ|う.ける;うけたまわ.る|acquiesce;be informed;hear|2|8|menyetujui diam-diam;diberi tahu;mendengar
順|ジュン||docility;obey;occasion|2|12|kepatuhan;menaati;kesempatan
岩|ガン|いわ|boulder;cliff;rock|2|8|batu besar;tebing;batu
練|レン|ね.り;ね.る|drill;gloss;polish|2|14|latihan;kilap;memoles
軽|キョウ;キン;ケイ|かる.い;かろ.やか;かろ.んじる|lightly;trifling;unimportant|2|12|dengan ringan;sepele;tidak penting
了|リョウ||complete;finish|2|2|lengkap;menyelesaikan
庁|チョウ;テイ|やくしょ|government office|2|5|kantor pemerintah
城|ジョウ;セイ|しろ|castle|2|9|kastil
患|カン|わずら.う|afflicted;be ill;disease|2|11|menderita;sakit;penyakit
層|ソウ||floor;layer;social class|2|14|lantai;lapisan;kelas sosial
版|ハン||edition;impression;label|2|8|edisi;kesan;label
令|レイ||command;decree;good|2|5|perintah;dekret;baik
角|カク|かど;つの|angle;antlers;corner|2|7|sudut;tanduk rusa;sudut
絡|ラク|から.まる;から.む|coil around;entwine;get caught in|2|12|melilit;melilit;terjebak dalam
損|ソン|-そこ.なう;-そこ.ねる;そこ.なう|damage;disadvantage;hurt|2|13|kerusakan;kerugian;melukai
募|ボ|つの.る|campaign;enlist;gather (contributions)|2|12|kampanye;mendaftar tentara;menghimpun sumbangan
裏|リ|うら|amidst;back;in|2|13|di tengah;punggung;di dalam
仏|フツ;ブツ|ほとけ|Buddha;France;the dead|2|4|Buddha;Prancis;orang mati
績|セキ||achievements;exploits;unreeling cocoons|2|17|pencapaian;jasa besar;memintal kepompong
築|チク|きず.く|build;construct;fabricate|2|16|membangun;membangun;mengarang
貨|カ|たから|freight;goods;property|2|11|barang angkutan;barang;milik
混|コン|-ま.じり;こ.む;ま.ざる|blend;confuse;mix|2|11|memadukan;membingungkan;mencampur
昇|ショウ|のぼ.る|rise up|2|8|bangkit
池|チ|いけ|cistern;pond;pool|2|6|bak air;kolam;kolam
血|ケツ|ち|blood|2|6|darah
温|オン|あたた.か;あたた.かい;あたた.まる|warm|2|12|hangat
季|キ||seasons|2|8|musim
星|ショウ;セイ|-ぼし;ほし|dot;mark;spot|2|9|titik;tanda;bintik
永|エイ|なが.い|eternity;lengthy;long|2|5|keabadian;panjang lebar;panjang
著|チャク;チョ|あらわ.す;いちじる.しい|arrival;counter for suits of clothing;don|2|11|kedatangan;penggolong setelan pakaian;mengenakan
誌|シ||document;records|2|14|dokumen;arsip
庫|ク;コ|くら|storehouse;warehouse|2|10|gudang;gudang
刊|カン||carve;engrave;publish|2|5|mengukir;mengukir;menerbitkan
像|ゾウ||figure;image;picture|2|14|sosok;citra;gambar
香|キョウ;コウ|か;かお.り;かお.る|incense;perfume;smell|2|9|dupa;parfum;bau
坂|ハン|さか|hill;incline;slope|2|7|bukit;kemiringan;lereng
底|テイ|そこ|base;bottom;bottom price|2|8|dasar;dasar;harga terendah
布|フ;ホ|きれ;し.く;ぬの|cloth;distribute;linen|2|5|kain;membagikan;linen
寺|ジ|てら|Buddhist temple|2|6|kuil Buddha
宇|ウ||eaves;heaven;house|2|6|atap teritis;surga;rumah
巨|キョ||big;gigantic;great|2|5|besar;raksasa;hebat
震|シン|ふる.う;ふる.える;ふる.わす|quake;quiver;shake|2|15|gempa;gemetar;mengguncang
希|キ;ケ|こいねが.う;まれ|Greece;beg;beseech|2|7|Yunani;memohon;memohon sangat
触|ショク|さわ;さわ.る;ふ.れる|announce;conflict;contact|2|13|mengumumkan;konflik;kontak
依|イ;エ|よ.る|consequently;depend on;due to|2|8|akibatnya;bergantung pada;karena
籍|セキ||domiciliary register;enroll;membership|2|20|kartu keluarga;mendaftar;keanggotaan
汚|オ|きたな.い;けが.す;けが.らわしい|defile;dirty;disgrace|2|6|mencemari;kotor;aib
枚|バイ;マイ||counter for flat thin objects or sheets;sheet of...|2|8|penggolong lembaran tipis;lembar...
複|フク||compound;double;duplicate|2|14|senyawa;ganda;duplikat
郵|ユウ||mail;stagecoach stop|2|11|surat pos;pos kereta kuda
仲|チュウ|なか|go-between;relationship|2|6|perantara;hubungan
栄|エイ;ヨウ|-ば.え;え;さか.える|flourish;glory;honor|2|9|berkembang pesat;kejayaan;kehormatan
札|サツ|ふだ|bid;counter for bonds;paper money|2|5|menawar;penggolong obligasi;uang kertas
板|ハン;バン|いた|board;plank;plate|2|8|papan;papan;piring
骨|コツ|ほね|bone;frame;remains|2|10|tulang;bingkai;jasad
傾|ケイ|かし.げる;かた.げる;かたぶ.く|bias;incline;lean|2|13|kecondongan;kemiringan;bersandar
届|カイ|-とど.け;とど.く;とど.ける|arrive;deliver;forward|2|8|tiba;mengantarkan;maju
巻|カン;ケン|ま.き;ま.く;まき|book;coil;counter for texts (or book scrolls)|2|9|buku;gulungan;penggolong naskah
燃|ネン|も.える;も.す;も.やす|blaze;burn;glow|2|16|kobaran api;membakar;bersinar
跡|セキ|あと|impression;mark;print|2|13|kesan;tanda;mencetak
包|ホウ|くる.む;つつ.む|conceal;cover;pack up|2|5|menyembunyikan;menutupi;mengemasi
駐|チュウ||reside in;resident;stop-over|2|15|tinggal di;penghuni;persinggahan
弱|ジャク|よわ.い;よわ.まる;よわ.める|frail;weak|2|10|ringkih;lemah
紹|ショウ||help;inherit;introduce|2|11|bantuan;mewarisi;memperkenalkan
雇|コ|やと.う|employ;hire|2|12|mempekerjakan;menyewa
替|タイ|か.え-;か.える;か.わる|exchange;per-;spare|2|12|pertukaran;per-;cadangan
預|ヨ|あず.かる;あず.ける|custody;deposit;entrust to|2|13|penahanan;simpanan;menitipkan kepada
焼|ショウ|-や.き;や.き;や.き-|bake;burning|2|12|memanggang;terbakar
簡|カン;ケン|えら.ぶ;ふだ|brevity;simplicity|2|18|keringkasan;kesederhanaan
章|ショウ||badge;chapter;composition|2|11|lencana;bab;karangan
臓|ゾウ|はらわた|bowels;entrails;viscera|2|19|usus;jeroan;organ dalam
律|リチ;リツ;レツ||control;gauge;law|2|9|kendali;pengukur;hukum
贈|ソウ;ゾウ|おく.る|award to;confer on;give to|2|18|menganugerahkan;menganugerahkan kepada;memberikan kepada
照|ショウ|て.らす;て.る;て.れる|bashful;compare;illuminate|2|13|pemalu;membandingkan;menerangi
薄|ハク|-うす;うす-;うす.い|dilute;pampas grass;thin|2|16|mengencerkan;rumput susuki;tipis
群|グン|む.れ;む.れる;むら|cluster;crowd;flock|2|13|gugusan;kerumunan;kawanan
秒|ビョウ||second (1/60 minute)|2|9|detik
奥|オウ|おく;おく.まる;くま|heart;interior|2|12|hati;bagian dalam
詰|キチ;キツ|-づ.め;つ.まる;つ.む|blame;close;packed|2|13|menyalahkan;menutup;padat terisi
双|ソウ|たぐい;ならぶ;ふた|comparison;counter for pairs;pair|2|4|perbandingan;penggolong pasang;pasang
刺|シ|さ.さる;さ.し;さ.す|calling card;pierce;prick|2|8|kartu nama;menusuk;menusuk
純|ジュン||genuine;innocence;net (profit)|2|10|asli;ketidakbersalahan;laba bersih
翌|ヨク||next;the following|2|11|berikutnya;berikut ini
快|カイ|こころよ.い|agreeable;cheerful;comfortable|2|7|menyenangkan;ceria;nyaman
片|ヘン|かた;かた-|leaf;one-sided;right-side kata radical (no. 91)|2|4|daun;berat sebelah;radikal kata sisi kanan (no. 91)
敬|キョウ;ケイ|うやま.う|awe;honor;respect|2|12|kekaguman;kehormatan;menghormati
悩|ノウ|なや.ましい;なや.ます;なや.む|distress;illness;in pain|2|10|kesusahan;penyakit;kesakitan
泉|セン|いずみ|fountain;spring|2|9|air mancur;mata air
皮|ヒ|かわ|hide;leather;pelt|2|5|menyembunyikan;kulit samak;kulit berbulu
漁|ギョ;リョウ|あさ.る|fishery;fishing|2|14|perikanan;memancing
荒|コウ|あ.らし;あ.らす;あ.れる|laid waste;rough;rude|2|9|jadi tandus;kasar;kasar
貯|チョ|た.める;たくわ.える|keep;lay in;savings|2|12|menyimpan;menyetok;tabungan
硬|コウ|かた.い|hard;stiff|2|12|keras;kaku
埋|マイ|い.ける;う.まる;う.める|be filled up;bury;embedded|2|10|terisi penuh;mengubur;tertanam
柱|チュウ|はしら|cylinder;pillar;post|2|9|silinder;tiang;pos
祭|サイ|まつ.り;まつ.る;まつり|celebrate;deify;enshrine|2|11|merayakan;mendewakan;menyemayamkan
袋|タイ;ダイ|ふくろ|bag;pouch;sack|2|11|tas;kantong;karung
筆|ヒツ|ふで|handwriting;painting brush;writing|2|12|tulisan tangan;kuas lukis;tulisan
訓|キン;クン|おし.える;くん.ずる;よ.む|Japanese character reading;explanation;instruction|2|10|cara baca Jepang;penjelasan;petunjuk
浴|ヨク|あ.びせる;あ.びる|bask in;bathe;be favored with|2|10|berjemur dalam;berendam;dianugerahi
童|ドウ|わらべ|child;juvenile|2|12|anak;remaja
宝|ホウ|たから|treasure;valuables;wealth|2|8|harta karun;barang berharga;kekayaan
封|フウ;ホウ||closing;seal|2|9|penutupan;cap
胸|キョウ|むな-;むね|bosom;breast;chest|2|10|dada;dada;dada
砂|サ;シャ|すな|sand|2|9|pasir
塩|エン|しお|salt|2|13|garam
賢|ケン|かしこ.い|cleverness;intelligent;wisdom|2|16|kepandaian;cerdas;kebijaksanaan
腕|ワン|うで|ability;arm;talent|2|12|kemampuan;lengan;bakat
兆|チョウ|きざ.し;きざ.す|10**12;omen;portent|2|6|10 pangkat 12;pertanda;firasat
床|ショウ|とこ;ゆか|bed;counter for beds;floor|2|7|tempat tidur;penggolong tempat tidur;lantai
毛|モウ|け|down;feather;fur|2|4|ke bawah;bulu;bulu tebal
緑|リョク;ロク|みどり|green|2|14|hijau
尊|ソン|たっと.い;たっと.ぶ;とうと.い|exalted;noble;precious|2|12|mulia;bangsawan;berharga
祝|シュウ;シュク|いわ.う|celebrate;congratulate|2|9|merayakan;mengucapkan selamat
柔|ジュウ;ニュウ|やわ;やわ.ら;やわ.らか|gentleness;softness;tender|2|9|kelembutan;kelembutan;lembut
殿|テン;デン|-どの;との|Mr.;hall;lord|2|13|Tuan;aula;tuan
濃|ノウ|こ.い|concentrated;dark;thick|2|16|terpusat;gelap;tebal
液|エキ||fluid;juice;liquid|2|11|cairan;jus;cairan
衣|イ;エ|-ぎ;きぬ;ころも|clothes;dressing;garment|2|6|pakaian;balutan;pakaian
肩|ケン|かた|shoulder|2|8|bahu
零|レイ|こぼ.す;こぼ.れる;ぜろ|cipher;nothing;overflow|2|13|sandi;tidak ada;meluap
幼|ヨウ|おさな.い|childhood;infancy|2|5|masa kanak-kanak;masa bayi
荷|カ|に|baggage;bear (a burden);cargo|2|10|bagasi;memikul beban;muatan
泊|ハク|と.まる;と.める|overnight stay;put up at;ride at anchor|2|8|menginap;menginap di;berlabuh
黄|オウ;コウ|き;こ-|yellow|2|11|kuning
甘|カン|あま.い;あま.える;あま.やかす|be content;coax;pamper|2|5|puas;membujuk;memanjakan
臣|シン;ジン||retainer;subject|2|7|abdi;pokok bahasan
浅|セン|あさ.い|frivolous;shallow;shameful|2|9|remeh;dangkal;memalukan
掃|シュ;ソウ|は.く|brush;sweep|2|11|sikat;menyapu
雲|ウン|-ぐも;くも|cloud|2|12|awan
掘|クツ|ほ.る|delve;dig;excavate|2|11|menggali dalam;menggali;menggali
捨|シャ|す.てる|abandon;discard;reject|2|11|menelantarkan;membuang;menolak
軟|ナン|やわ.らか;やわ.らかい|soft|2|11|lembut
沈|ジン;チン|しず.む;しず.める|aloes;be depressed;be submerged|2|7|gaharu;murung;terendam
凍|トウ|い.てる;こお.る;こご.える|congeal;frozen;refrigerate|2|10|membeku;beku;mendinginkan
乳|ニュウ|ち;ちち|breasts;milk|2|8|payudara;susu
恋|レン|こ.う;こい;こい.しい|darling;in love;miss|2|10|kesayangan;jatuh cinta;merindukan
紅|ク;コウ|あか.い;くれない;べに|crimson;deep red|2|9|merah tua;merah pekat
郊|コウ||outskirts;rural area;suburbs|2|9|pinggiran;daerah pedesaan;pinggiran kota
腰|ヨウ|こし|hips;loins;low wainscoting|2|13|pinggul;pinggang;pelapis dinding rendah
炭|タン|すみ|charcoal;coal|2|9|arang;batu bara
踊|ヨウ|おど.る|dance;jump;leap|2|14|tarian;melompat;melompat
冊|サク;サツ|ふみ|counter for books;tome;volume|2|5|penggolong buku;jilid tebal;jilid
勇|ユウ|いさ.む|be in high spirits;bravery;cheer up|2|9|bersemangat;keberanian;menghibur
械|カイ|かせ|contraption;fetter;instrument|2|11|alat rakitan;belenggu;alat
菜|サイ|な|greens;side dish;vegetable|2|11|sayuran hijau;lauk;sayur
珍|チン|たから;めずら.しい|curious;rare;strange|2|9|penasaran;langka;aneh
卵|ラン|たまご|egg;ovum;roe|2|7|telur;sel telur;telur ikan
湖|コ|みずうみ|lake|2|12|danau
喫|キツ|の.む|consume;drink;eat|2|12|mengonsumsi;minum;makan
干|カン|-ぼ.し;ひ.る;ほ.し-|dry;ebb;intercede|2|3|kering;surut;menengahi
虫|キ;チュウ|むし|bug;insect;temper|2|6|serangga;serangga;perangai
刷|サツ|-ず.り;-ずり;す.る|brush;print;printing|2|8|sikat;mencetak;percetakan
湯|トウ|ゆ|bath;hot spring;hot water|2|12|mandi;pemandian air panas;air panas
溶|ヨウ|と.かす;と.く;と.ける|dissolve;melt;thaw|2|13|melarutkan;meleleh;mencair
鉱|コウ|あらがね|mineral;ore|2|13|mineral;bijih
涙|ルイ;レイ|なみだ|sympathy;tears|2|10|simpati;air mata
匹|ヒツ|ひき|counter for small animals;equal;head|2|4|penggolong hewan kecil;sama;kepala
孫|ソン|まご|descendants;grandchild|2|10|keturunan;cucu
鋭|エイ|するど.い|edge;pointed;sharp|2|15|tepi;runcing;tajam
枝|シ|えだ|bough;branch;counter for branches|2|8|dahan;cabang;penggolong ranting
塗|ト|ぬ.り;ぬ.る;まみ.れる|coating;daub;paint|2|13|lapisan;melumuri;cat
軒|ケン|のき|counter for houses;eaves;flats|2|10|penggolong rumah;atap teritis;apartemen
毒|ドク||germ;harm;injury|2|8|kuman;bahaya;cedera
叫|キョウ|さけ.ぶ|exclaim;shout;yell|2|6|berseru;berteriak;berteriak
拝|ハイ|おが.む;おろが.む|adore;pray to;worship|2|8|memuja;memohon kepada;menyembah
氷|ヒョウ|こお.る;こおり;ひ|congeal;freeze;hail|2|5|membeku;membeku;hujan es
乾|カン;ケン|いぬい;かわ.かす;かわ.く|dessicate;drink up;drought|2|11|mengeringkan;menghabiskan minuman;kekeringan
棒|ボウ||cane;club;line|2|12|tongkat;kelab;garis
祈|キ|いの.る|pray;wish|2|8|berdoa;harapan
拾|シュウ;ジュウ|ひろ.う|find;gather;go on foot|2|9|menemukan;mengumpulkan;berjalan kaki
粉|フン|こ;こな;デシメートル|dust;flour;powder|2|10|debu;tepung;bubuk
糸|シ|いと|thread|2|6|benang
綿|メン|わた|cotton|2|14|kapas
汗|カン|あせ|perspire;sweat|2|6|berkeringat;keringat
銅|ドウ|あかがね|copper|2|14|tembaga
湿|シツ;シュウ|うるお.う;うるお.す;しめ.す|damp;moist;wet|2|12|lembap;lembap;basah
瓶|ビン|かめ;へい|bottle;jar;jug|2|11|botol;guci;kendi
咲|ショウ|-ざき;さ.く|bloom;blossom|2|9|mekar;bunga
召|ショウ|め.す|buy;call;catch (cold)|2|5|membeli;memanggil;terkena pilek
缶|カン|かま|container;jar radical (no. 121);tin can|2|6|wadah;radikal guci (no. 121);kaleng
隻|セキ||arrows;birds;counter for ships|2|10|anak panah;burung;penggolong kapal
脂|シ|あぶら|fat;grease;gum|2|10|gemuk;gemuk pelumas;gusi
蒸|ジョウ;セイ|む.す;む.らす;む.れる|foment;get musty;heat|2|13|menghasut;berjamur;panas
肌|キ|はだ|body;grain;skin|2|6|tubuh;butir;kulit
耕|コウ|たがや.す|cultivate;plow;till|2|10|mengolah tanah;bajak;sampai
鈍|ドン|なま.る;なまく.ら;にぶ-|blunt;dull;foolish|2|12|tumpul;tumpul;bodoh
泥|デ;デイ;ナイ|どろ;なず.む|adhere to;be attached to;mire|2|8|berpegang pada;terikat pada;lumpur
隅|グウ|すみ|corner;nook|2|12|sudut;sudut tersembunyi
灯|トウ|あかり;とも.す;ともしび|a light;counter for lights;lamp|2|6|cahaya;penggolong lampu;lampu
辛|シン|-づら.い;かのと;から.い|acrid;bitter;hot|2|7|pedas menyengat;pahit;panas
磨|マ|す.る;みが.く|brush (teeth);grind;improve|2|16|menyikat gigi;menggiling;memperbaiki
麦|バク|むぎ|barley;wheat|2|7|jelai;gandum
姓|ショウ;セイ||surname|2|8|nama keluarga
筒|トウ|つつ|cylinder;gun barrel;pipe|2|12|silinder;laras senapan;pipa
鼻|ビ|はな|nose;snout|2|14|hidung;moncong
粒|リュウ|つぶ|counter for tiny particles;drop;grains|2|11|penggolong butiran;menjatuhkan;biji-bijian
詞|シ|ことば|part of speech;poetry;words|2|12|kelas kata;puisi;kata-kata
胃|イ||craw;crop;paunch|2|9|tembolok;panen;perut buncit
畳|ジョウ;チョウ|かさ.なる;たた.む;たたみ|counter for tatami mats;do away with;fold|2|12|penggolong tatami;meniadakan;melipat
机|キ|つくえ|desk;table|2|6|meja;meja
膚|フ|はだ|body;disposition;grain|2|15|tubuh;watak;butir
濯|タク|すす.ぐ;ゆす.ぐ|laundry;pour on;rinse|2|17|cucian;menyiramkan;membilas
塔|トウ||pagoda;steeple;tower|2|12|pagoda;menara gereja;menara
沸|フツ|わ.かす;わ.く|boil;breed;ferment|2|8|merebus;membiakkan;memfermentasi
灰|カイ|はい|ashes;cremate;puckery juice|2|6|abu;mengkremasi;sari yang sepat
菓|カ||cakes;candy;fruit|2|11|kue;permen;buah
帽|ボウ;モウ|おお.う;ずきん|cap;headgear|2|12|topi;tutup kepala
枯|コ|か.らす;か.れる|be seasoned;die;dry up|2|9|berbumbu;mati;mengering
涼|リョウ|うす.い;すず.しい;すず.む|nice and cool;refreshing|2|11|sejuk nyaman;menyegarkan
舟|シュウ|-ぶね;ふな-;ふね|boat;ship|2|6|perahu;kapal
貝|バイ|かい|shellfish|2|7|kerang
符|フ||charm;mark;sign|2|11|pesona;tanda;tanda
憎|ゾウ|にく.い;にく.しみ;にく.む|detest;hate|2|14|membenci;benci
皿|ベイ|さら|a helping;dish;plate|2|5|satu porsi;piring;piring
肯|コウ|がえんじ.る|agreement;comply with;consent|2|8|kesepakatan;mematuhi;persetujuan
燥|ソウ|はしゃ.ぐ|dry up;parch|2|17|mengering;memanggang kering
畜|チク||domestic fowl and animals;livestock|2|10|unggas dan ternak;ternak
挟|キョウ;ショウ|さしはさ.む;はさ.まる;はさ.む|between;pinch|2|9|di antara;mencubit
曇|ドン|くも.る|cloud up;cloudy weather|2|16|mendung;cuaca mendung
滴|テキ|しずく;したた.る|drip;drop|2|14|menetes;menjatuhkan
伺|シ|うかが.う|ask;implore;inquire|2|7|bertanya;memohon sangat;menanyakan
氏|シ|-うじ;うじ|clan;family name;surname|1|4|marga;nama keluarga;nama keluarga
統|トウ|す.べる;ほび.る|governing;overall;relationship|1|12|pemerintahan;keseluruhan;hubungan
保|ホ;ホウ|たも.つ|guarantee;keep;preserve|1|9|jaminan;menyimpan;melestarikan
第|ダイ;テイ||No.;residence|1|11|No.;kediaman
結|ケチ;ケツ|むす.ぶ;ゆ.う;ゆ.わえる|bind;contract;do up hair|1|12|mengikat;kontrak;menata rambut
派|ハ||clique;faction;group|1|9|kelompok kecil;faksi;kelompok
案|アン|つくえ|bench;draft;expectation|1|10|bangku;draf;harapan
策|サク||means;plan;policy|1|12|sarana;rencana;kebijakan
基|キ|もと;もとい|counter for machines;foundation;fundamentals|1|11|penggolong mesin;fondasi;dasar-dasar
価|カ;ケ|あたい|price;value|1|8|harga;nilai
提|ダイ;チョウ;テイ|さ.げる|carry in hand;propose;take along|1|12|menjinjing;mengusulkan;membawa serta
挙|キョ|あ.がる;あ.げる;こぞ.る|actions;behavior;plan|1|10|tindakan;perilaku;rencana
応|-ノウ;オウ;ヨウ|あた.る;こた.える;まさに|OK;accept;answer|1|7|baiklah;menerima;jawaban
企|キ|くわだ.てる;たくら.む|attempt;design;plan|1|6|mencoba;rancangan;rencana
検|ケン|しら.べる|examination;investigate|1|12|pemeriksaan;menyelidiki
藤|トウ;ドウ|ふじ|wisteria|1|18|bunga wisteria
沢|タク|うるお.い;うるお.す;さわ|brilliance;grace;marsh|1|7|kecemerlangan;anugerah;rawa
裁|サイ|さば.く;た.つ|cut out (pattern);decision;judge|1|12|menggunting pola;keputusan;hakim
証|ショウ|あかし|certificate;evidence;proof|1|12|sertifikat;bukti;bukti
援|エン||abet;help;save|1|12|menghasut;bantuan;menyelamatkan
施|シ;セ|ほどこ.す|alms;bestow;give|1|9|sedekah;menganugerahkan;memberi
井|ショウ;セイ|い|community;town;well|1|4|komunitas;kota kecil;sumur
護|ゴ|まも.る|protect;safeguard|1|20|melindungi;pengaman
展|テン||expand;unfold|1|10|memperluas;membentangkan
態|タイ|わざ.と|appearance;attitude;condition|1|14|penampilan;sikap;kondisi
鮮|セン|あざ.やか|Korea;brilliant;clear|1|17|Korea;cemerlang;jelas
視|シ|み.る|inspection;look at;regard as|1|11|inspeksi;memandang;menganggap sebagai
条|ジョウ;チョウ;デキ|えだ;すじ|article;clause;counter for articles, clauses, paragraphs, etc.|1|7|barang;klausa;penggolong pasal, klausa, paragraf, dsb.
幹|カン|みき|capability;main part;talent|1|13|kesanggupan;bagian utama;bakat
独|トク;ドク|ひと.り|Germany;alone;single|1|9|Jerman;sendirian;tunggal
宮|キュウ;ク;クウ|みや|Shinto shrine;constellations;palace|1|10|kuil Shinto;rasi bintang;istana
率|シュツ;ソツ;リツ|ひき.いる|%;command;factor|1|11|persen;perintah;faktor
衛|エ;エイ||defense;protection|1|16|pertahanan;perlindungan
張|チョウ|-は.り;-ば.り;は.る|counter for bows & stringed instruments;put up (tent);spread|1|11|penggolong busur dan alat musik dawai;mendirikan tenda;menyebar
監|カン||administer;govt office;official|1|15|mengurus;kantor pemerintah;resmi
環|カン|わ|circle;loop;ring|1|17|lingkaran;simpul lingkar;cincin
審|シン|つぶさ.に;つまび.らか|hearing;judge;trial|1|15|pendengaran;hakim;persidangan
義|ギ||honor;justice;loyalty|1|13|kehormatan;keadilan;kesetiaan
訴|ソ|うった.える|accusation;appeal to;complain of pain|1|12|tuduhan;memohon kepada;mengeluh sakit
株|シュ|かぶ|counter for small plants;shares;stock|1|10|penggolong tanaman kecil;saham;persediaan
姿|シ|すがた|figure;form;shape|1|9|sosok;bentuk;bentuk
閣|カク||palace;tall building;tower|1|14|istana;gedung tinggi;menara
衆|シュ;シュウ|おお.い|great numbers;masses;multitude|1|12|jumlah besar;rakyat banyak;khalayak
評|ヒョウ||comment;criticism;evaluate|1|12|komentar;kritik;menilai
影|エイ|かげ|phantom;shadow;silhouette|1|15|bayangan hantu;bayangan;siluet
松|ショウ|まつ|pine tree|1|8|pohon pinus
撃|ゲキ|う.つ|attack;beat;conquer|1|15|serangan;memukul;menaklukkan
佐|サ||assistant;help|1|7|asisten;bantuan
核|カク||core;kernel;nucleus|1|10|inti;inti biji;inti
整|セイ|ととの.う;ととの.える|arranging;key (music);meter|1|16|penyusunan;nada dasar;meter
融|ユウ|と.かす;と.ける|dissolve;melt|1|16|melarutkan;meleleh
製|セイ||made in...;manufacture|1|14|buatan...;memproduksi
票|ヒョウ||ballot;label;sign|1|11|surat suara;label;tanda
渉|ショウ|わた.る|ferry;ford;go cross|1|11|kapal feri;arungan sungai;menyeberang
響|キョウ|ひび.く|echo;resound;ring|1|20|gema;bergema;cincin
推|スイ|お.す|conjecture;guess;infer|1|11|dugaan;menebak;menyimpulkan
請|ショウ;シン;セイ|う.ける;こ.う|ask;invite;solicit|1|15|bertanya;mengundang;memohon
器|キ|うつわ|ability;container;implement|1|15|kemampuan;wadah;perkakas
士|シ|さむらい|gentleman;samurai;samurai radical (no. 33)|1|3|pria terhormat;samurai;radikal samurai (no. 33)
討|トウ|う.つ|attack;chastise;conquer|1|10|serangan;menghukum;menaklukkan
攻|コウ|せ.める|aggression;attack;criticize|1|7|agresi;serangan;mengkritik
崎|キ|さい;さき;みさき|cape;promontory;spit|1|11|tanjung;tanjung;meludah
督|トク||coach;command;lead|1|13|pelatih;perintah;memimpin
授|ジュ|さず.かる;さず.ける|confer;grant;impart|1|11|berunding;memberikan;menyampaikan
催|サイ|もよう.す;もよお.す|give (a dinner);hold (a meeting);sponsor|1|13|mengadakan jamuan;mengadakan rapat;penyokong
及|キュウ|およ.び;およ.ぶ;およ.ぼす|cause;exercise;exert|1|3|sebab;latihan;mengerahkan
憲|ケン||constitution;law|1|16|konstitusi;hukum
離|リ|はな.す;はな.れる|detach;digress;disjoin|1|19|melepaskan;melantur;memisahkan
激|ゲキ|はげ.しい|chafe;enraged;get excited|1|16|bergesekan;murka;bersemangat
摘|テキ|つ.む|clip;pick;pinch|1|14|menjepit;memetik;mencubit
系|ケイ||lineage;system|1|7|garis keturunan;sistem
批|ヒ||criticism;strike|1|7|kritik;memukul
郎|リョウ;ロウ|おとこ|counter for sons;son|1|9|penggolong anak lelaki;anak laki-laki
健|ケン|すこ.やか|health;healthy;persistence|1|11|kesehatan;sehat;keuletan
盟|メイ||alliance;oath|1|13|persekutuan;sumpah
従|ショウ;ジュ;ジュウ|したが.う;したが.える;より|accompany;comply;follow|1|10|menemani;menuruti;mengikuti
修|シュ;シュウ|おさ.まる;おさ.める|conduct oneself well;discipline;master|1|10|berkelakuan baik;disiplin;tuan
隊|タイ||company;party;regiment|1|12|perusahaan;pesta;resimen
織|シキ;ショク|-お.り;-おり;お.り|fabric;weave|1|18|kain;menenun
拡|カク;コウ|ひろ.がる;ひろ.げる;ひろ.める|broaden;enlarge;expand|1|8|memperluas;memperbesar;memperluas
故|コ|ふる.い;もと;ゆえ|cause;circumstances;consequently|1|9|sebab;keadaan;akibatnya
振|シン|ふ.る;ふ.るう;ふ.れる|shake;swing;wag|1|10|mengguncang;berayun;mengibaskan
弁|ヘン;ベン|あらそ.う;かんむり;はなびら|braid;conical cap;dialect|1|5|kepang;topi kerucut;dialek
就|シュウ;ジュ|つ.く;つ.ける|concerning;depart;per|1|12|mengenai;berangkat;per
異|イ|け;こと;こと.なる|curious;different;queerness|1|11|penasaran;berbeda;keanehan
献|ケン;コン|たてまつ.る|counter for drinks;offer;offering|1|13|penggolong minuman;menawarkan;persembahan
厳|ゲン;ゴン|いか.めしい;いつくし;おごそ.か|rigidity;severity;stern|1|17|kekakuan;ketegasan;buritan
維|イ||fiber;rope;tie|1|14|serat;tali tambang;mengikat
浜|ヒン|はま|beach;seacoast;seashore|1|10|pantai;pesisir;tepi laut
遺|イ;ユイ|のこ.す|bequeath;leave behind;reserve|1|15|mewariskan;meninggalkan;cadangan
塁|スイ;ライ;ルイ|とりで|base(ball);bases;fort|1|12|base (bisbol);pangkalan;benteng
邦|ホウ|くに|Japan;country;home country|1|7|Jepang;negara;tanah air
素|ス;ソ|もと|elementary;naked;principle|1|10|dasar;telanjang;prinsip
遣|ケン|-つか.い;-づか.い;つか.う|despatch;dispatch;do|1|13|pengiriman;pengiriman;melakukan
抗|コウ|あらが.う|confront;defy;oppose|1|7|menghadapi;menantang;menentang
模|ボ;モ||copy;imitation;mock|1|14|salinan;tiruan;mengejek
雄|ユウ|お-;おす;おん|excellence;hero;leader|1|12|keunggulan;pahlawan;pemimpin
益|エキ;ヤク|ま.す|advantage;benefit;gain|1|10|keuntungan;manfaat;perolehan
緊|キン|し.まる;し.める|hard;reliable;solid|1|15|keras;dapat diandalkan;padat
標|ヒョウ|しるし;しるべ|emblem;evidence;imprint|1|15|lambang;bukti;cetakan
宣|セン|のたま.う|announce;proclaim;say|1|9|mengumumkan;memaklumkan;berkata
昭|ショウ||bright;shining|1|9|terang;berkilau
廃|ハイ|すた.る;すた.れる|abandon;abolish;cessation|1|12|menelantarkan;menghapuskan;penghentian
伊|イ|かれ|Italy;that one|1|6|Italia;yang itu
江|コウ|え|bay;creek;inlet|1|6|teluk;anak sungai;teluk kecil
僚|リョウ||colleague;companion;official|1|14|rekan kerja;teman seperjalanan;resmi
吉|キチ;キツ|よし|congratulations;good luck;joy|1|6|selamat;keberuntungan;sukacita
盛|ジョウ;セイ|さか.る;さか.ん;も.る|boom;copulate;prosper|1|11|ledakan;kawin;makmur
皇|オウ;コウ||emperor|1|9|kaisar
臨|リン|のぞ.む|attend;call on;confront|1|18|menghadiri;mengunjungi;menghadapi
踏|トウ|ふ.まえる;ふ.む|appraise;carry through;evade payment|1|15|menaksir;menuntaskan;mangkir bayar
壊|エ;カイ|こわ.す;こわ.れる;やぶ.る|break;demolition;destroy|1|16|patah;pembongkaran;menghancurkan
債|サイ||bond;debt;loan|1|13|ikatan;utang;pinjaman
興|キョウ;コウ|おこ.す;おこ.る|entertain;interest;pleasure|1|16|menjamu;minat;kesenangan
源|ゲン|みなもと|origin;source|1|13|asal;sumber
儀|ギ||a matter;affair;case|1|15|perkara;urusan;kasus
創|ショウ;ソウ|きず;けず.しける;つく.る|genesis;hurt;injury|1|12|asal mula;melukai;cedera
障|ショウ|さわ.る|harm;hinder;hurt|1|14|bahaya;menghalangi;melukai
継|ケイ|つ.ぐ;まま-|continue;graft (tree);inherit|1|13|melanjutkan;mencangkok;mewarisi
筋|キン|すじ|descent;fiber;muscle|1|12|penurunan;serat;otot
闘|トウ|あらそ.う;たたか.う|fight;war|1|18|berkelahi;perang
葬|ソウ|ほうむ.る|bury;interment;shelve|1|12|mengubur;pemakaman;menunda
避|ヒ|さ.ける;よ.ける|avert;avoid;evade|1|16|menghindarkan;menghindari;mengelak
司|シ|つかさど.る|administer;director;govt office|1|5|mengurus;direktur;kantor pemerintah
康|コウ||ease;peace|1|11|kemudahan;damai
善|ゼン|い.い;よ.い;よ.く|good;goodness;virtuous|1|12|baik;kebaikan;berbudi luhur
逮|タイ||apprehend;chase|1|11|menangkap;mengejar
迫|ハク|せま.る|force;imminent;spur on|1|8|kekuatan;sudah di ambang;memacu
惑|ワク|まど.う|beguile;delusion;perplexity|1|12|memperdaya;khayalan;kebingungan
崩|ホウ|-くず.れ;くず.す;くず.れる|crumble;demolish;die|1|11|remuk;merobohkan;mati
紀|キ||account;annals;chronicle|1|9|rekening;kronik;kronik
聴|チョウ;テイ|き.く;ゆる.す|careful inquiry;headstrong;listen|1|17|penyelidikan cermat;keras kepala;mendengarkan
脱|ダツ|ぬ.ぐ;ぬ.げる|be left out;escape from;get rid of|1|11|tersisih;lolos dari;menyingkirkan
級|キュウ||class;grade;rank|1|9|kelas;nilai;peringkat
博|ハク;バク||Dr.;Ph.D.;command|1|12|Dr.;doktor;perintah
締|テイ|-し.め;-じ.め;し.まり|fasten;lock;shut|1|15|mengencangkan;kunci;menutup
救|キュウ|すく.う|help;reclaim;rescue|1|11|bantuan;mereklamasi;menyelamatkan
執|シツ;シュウ|と.る|grasp;take hold;take to heart|1|11|menggenggam;memegang erat;memasukkan ke hati
房|ボウ|ふさ|bunch;fringe;house|1|8|seikat;rumbai;rumah
撤|テツ||disarm;dismantle;exclude|1|15|melucuti senjata;membongkar;mengecualikan
削|サク|けず.る;そ.ぐ;はつ.る|pare;plane;sharpen|1|9|mengupas;ketam;mengasah
密|ミツ|ひそ.か|carefulness;density (pop);minuteness|1|11|kehati-hatian;kepadatan penduduk;kehalusan detail
措|ソ|お.く|discontinue;except;give up|1|11|menghentikan;kecuali;menyerah
志|シ|こころざ.す;こころざし;シリング|aspire;hopes;intention|1|7|bercita-cita;harapan;niat
載|サイ|の.せる;の.る|10**44;board;get on|1|13|10 pangkat 44;papan;naik
陣|ジン||battle array;brief time;camp|1|10|formasi tempur;waktu singkat;perkemahan
我|ガ|わ;わ.が-;わが-|I;ego;oneself|1|7|saya;ego;diri sendiri
為|イ|す.る;ため;たり|advantage;as a result of;be of use|1|9|keuntungan;akibat dari;berguna
抑|ヨク|おさ.える|do in spite of;in the first place;now|1|7|nekat melakukan;pada awalnya;sekarang
幕|バク;マク|とばり|act of play;bunting;curtain|1|13|babak lakon;bendera hias;tirai
染|セン|し.み;し.みる;そ.まる|color;dye;paint|1|9|warna;mewarnai;cat
奈|ダイ;ナ;ナイ|いかん;からなし|Nara;what?|1|8|Nara;apa?
傷|ショウ|いた.む;いた.める;きず|cut;gash;hurt|1|13|memotong;luka sayat;melukai
択|タク|えら.ぶ|choose;elect;prefer|1|7|memilih;memilih;lebih suka
秀|シュウ|ひい.でる|beauty;excel;excellence|1|7|keindahan;unggul;keunggulan
徴|チ;チョウ|しるし|collect;indications;omen|1|14|mengumpulkan;tanda-tanda;pertanda
弾|タン;ダン|-ひ.き;ただ.す;たま|bullet;flip;snap|1|12|peluru;membalik;patah
償|ショウ|つぐな.う|make up for;recompense;redeem|1|17|menebus;imbalan;menebus
功|ク;コウ|いさお|achievement;credit;honor|1|5|pencapaian;kredit;kehormatan
拠|キョ;コ|よ.る|based on;follow;foothold|1|8|berdasarkan;mengikuti;pijakan
秘|ヒ|かく.す;ひ.める;ひそ.か|conceal;secret|1|10|menyembunyikan;rahasia
拒|キョ;ゴ|こば.む|decline;refuse;reject|1|8|menolak;menolak;menolak
刑|ケイ||penalty;punish;punishment|1|6|hukuman;menghukum;hukuman
塚|チョウ|-づか;つか|hillock;mound|1|12|gundukan;gundukan
致|チ|いた.す|cause;do;doth|1|10|sebab;melakukan;melakukan
繰|ソウ|く.る|look up;reel;refer to|1|19|mendongak;kelos;merujuk pada
尾|ビ|お|counter for fish;end;lower slope of mountain|1|7|penggolong ikan;akhir;lereng bawah gunung
描|ビョウ|えが.く;か.く|compose;draw;paint|1|11|menggubah;menggambar;cat
鈴|リン;レイ|すず|buzzer;small bell|1|13|bel;lonceng kecil
盤|バン||board;phonograph record;platter|1|15|papan;piringan hitam;nampan
項|コウ|うなじ|clause;item;nape of neck|1|12|klausa;butir;tengkuk
喪|ソウ|も|miss;mourning|1|12|merindukan;berkabung
伴|ハン;バン|ともな.う|accompany;bring with;companion|1|7|menemani;membawa;teman seperjalanan
養|ヨウ;リョウ|やしな.う|bring up;develop;foster|1|15|membesarkan;mengembangkan;mengasuh
懸|ケ;ケン|か.かる;か.ける|consult;depend;distant|1|20|berkonsultasi;bergantung;jauh
街|カイ;ガイ|まち|boulevard;street;town|1|12|jalan lebar;jalan;kota kecil
契|ケイ|ちぎ.る|pledge;promise;vow|1|9|janji;janji;ikrar
掲|ケイ|かか.げる|describe;display;hang out|1|11|menggambarkan;memajang;menjemur
躍|ヤク|おど.る|dance;leap;skip|1|21|tarian;melompat;melompati
棄|キ|す.てる|abandon;discard;reject|1|13|menelantarkan;membuang;menolak
邸|テイ|やしき|mansion;residence|1|8|rumah besar;kediaman
縮|シュク|ちぢ.まる;ちぢ.む;ちぢ.める|contract;reduce;shrink|1|17|kontrak;mengurangi;menyusut
還|カン|かえ.る|return;send back|1|16|kembali;mengembalikan
属|ショク;ゾク|さかん;つく;やから|affiliated;belong;genus|1|12|berafiliasi;termasuk;marga
慮|リョ|おもんぱか.る;おもんぱく.る|concern;consider;deliberate|1|15|kepedulian;mempertimbangkan;sengaja
枠||わく|(kokuji);bounding-box;frame|1|8|(kanji buatan Jepang);kotak pembatas;bingkai
恵|エ;ケイ|めぐ.み;めぐ.む|blessing;favor;grace|1|10|berkah;kebaikan hati;anugerah
露|ロ;ロウ|つゆ|Russia;dew;expose|1|21|Rusia;embun;membeberkan
沖|チュウ|おき;おきつ;ちゅう.する|offing;open sea;rise high into sky|1|7|lepas pantai;laut lepas;menjulang ke langit
緩|カン|ゆる.い;ゆる.む;ゆる.める|be moderate;ease;lessen|1|15|sedang;kemudahan;mengurangi
節|セチ;セツ|-ぶし;のっと;ふし|clause;honor;joint|1|13|klausa;kehormatan;sendi
需|ジュ||demand;need;request|1|14|tuntutan;butuh;permintaan
射|シャ|い.る;う.つ;さ.す|archery;onto;shine into|1|10|panahan;ke atas;menyinari
購|コウ||buy;subscription|1|17|membeli;langganan
揮|キ|ふる.う|brandish;shake;swing|1|12|mengacungkan;mengguncang;berayun
充|ジュウ|あ.てる;み.たす|allot;fill|1|6|membagikan;mengisi
貢|ク;コウ|みつ.ぐ|finance;support;tribute|1|10|keuangan;dukungan;upeti
鹿|ロク|か;しか|deer|1|11|rusa
却|キャク|かえ.って;しりぞ.く;しりぞ.ける|instead;on the contrary;rather|1|7|sebagai gantinya;sebaliknya;agak
端|タン|-ばた;は;はし|border;cape;edge|1|14|perbatasan;tanjung;tepi
賃|チン||charge;fare;fee|1|13|biaya;ongkos;biaya
獲|カク|え.る|able to;acquire;can|1|16|mampu;memperoleh;kaleng
郡|グン|こおり|county;district|1|10|kabupaten;distrik
併|ヘイ|あわ.せる|collective;get together;join|1|8|kolektif;berkumpul;bergabung
徹|テツ||clear;penetrate;pierce|1|15|jelas;menembus;menusuk
貴|キ|たっと.い;たっと.ぶ;とうと.い|esteem;honor;precious|1|12|penghargaan;kehormatan;berharga
衝|ショウ|つ.く|brunt;collide;highway|1|15|hantaman;bertabrakan;jalan raya
焦|ショウ|あせ.る;こ.がす;こ.がれる|burn;char;hurry|1|12|membakar;hangus;bergegas
奪|ダツ|うば.う|dispossess;plunder;rob|1|14|merampas;menjarah;merampok
災|サイ|わざわ.い|calamity;curse;disaster|1|7|malapetaka;kutukan;bencana
浦|ホ|うら|bay;beach;creek|1|10|teluk;pantai;anak sungai
析|セキ||analyze;chop;divide|1|8|menganalisis;mencincang;membagi
譲|ジョウ|ゆず.る|convey;defer;transfer|1|20|menyampaikan;menangguhkan;memindahkan
称|ショウ|あ.げる;かな.う;たた.える|admire;appellation;fame|1|10|mengagumi;sebutan;kemasyhuran
納|トウ;ナ;ナッ|-おさ.める;おさ.まる;おさ.める|obtain;pay;reap|1|10|memperoleh;membayar;menuai
樹|ジュ|き|establish;set up;timber|1|16|mendirikan;mendirikan;kayu
挑|チョウ|いど.む|challenge;contend for;make love to|1|9|tantangan;memperebutkan;bercinta dengan
誘|ユウ|いざな.う;さそ.う|allure;ask;call for|1|14|memikat;bertanya;meminta
紛|フン|-まぎ.れ;まぎ.らす;まぎ.らわしい|be mistaken for;distract;divert|1|10|disangka;mengalihkan perhatian;mengalihkan
至|シ|いた.る|arrive;attain;climax|1|6|tiba;mencapai;puncak
宗|シュウ;ソウ|むね|denomination;essence;main point|1|8|denominasi;inti sari;pokok utama
促|ソク|うなが.す|demand;incite;press|1|9|tuntutan;menghasut;menekan
慎|シン|つつ.ましい;つつし;つつし.み|be careful;discreet;humility|1|13|berhati-hati;bijak menahan diri;kerendahan hati
控|コウ|ひか.え;ひか.える|be moderate;draw in;hold back|1|11|sedang;menarik masuk;menahan
智|チ||intellect;reason;wisdom|1|12|akal budi;alasan;kebijaksanaan
握|アク|にぎ.る|bribe;grip;hold|1|12|suap;cengkeraman;memegang
宙|チュウ||air;interval of time;memorization|1|8|udara;jeda waktu;penghafalan
俊|シュン||excellence;genius;sagacious|1|9|keunggulan;jenius;arif
銭|セン;ゼン|すき;ぜに|.01 yen;coin;money|1|14|0,01 yen;koin;uang
渋|シュウ;ジュウ|しぶ;しぶ.い;しぶ.る|astringent;have diarrhea;hesitate|1|11|sepat;diare;ragu
銃|ジュウ|つつ|arms;gun|1|14|senjata;senapan
操|サン;ソウ|あやつ.る;みさお|chastity;fidelity;maneuver|1|16|kesucian;kesetiaan;manuver
携|ケイ|たずさ.える;たずさ.わる|armed with;bring along;carry (in hand)|1|13|bersenjatakan;membawa serta;menjinjing
診|シン|み.る|checkup;diagnose;examine|1|12|pemeriksaan;mendiagnosis;memeriksa
託|タク|かこ.つ;かこ.つける;かこつ.ける|consign;entrusting with;hint|1|10|menitipkan;pemercayaan;petunjuk
撮|サツ|-ど.り;つま.む;と.る|snapshot;take pictures|1|15|jepretan;memotret
誕|タン||be arbitrary;be born;declension|1|15|sewenang-wenang;lahir;deklinasi
侵|シン|おか.す|encroach;invade;raid|1|9|merambah;menyerbu;penyerbuan
括|カツ|くく.る|arrest;constrict;fasten|1|9|menangkap;menyempitkan;mengencangkan
謝|シャ|あやま.る|apologize;refuse;thank|1|17|meminta maaf;menolak;berterima kasih
駆|ク|か.ける;か.る|advance;drive;gallop|1|14|maju;mengemudi;berderap
透|トウ|す.かす;す.く;す.ける|filter;penetrate;permeate|1|10|menyaring;menembus;meresap
津|シン|つ|ferry;harbor;haven|1|9|kapal feri;pelabuhan;tempat berlindung
壁|ヘキ|かべ|fence;lining (stomach);wall|1|16|pagar;dinding lambung;dinding
稲|テ;トウ|いな-;いね|rice plant|1|14|padi
仮|カ;ケ|かり;かり-|assumed (name);informal;interim|1|6|nama samaran;tidak resmi;sementara
裂|レツ|-ぎ.れ;さ.く;さ.ける|rend;split;tear|1|12|merobek;membelah;air mata
敏|ビン|さとい|agile;alert;cleverness|1|10|gesit;waspada;kepandaian
是|シ;ゼ|ここ;この;これ|just so;justice;right|1|9|tepat begitu;keadilan;kanan
排|ハイ||arrange;exclude;expel|1|11|menata;mengecualikan;mengusir
裕|ユウ||abundant;fertile;rich|1|12|berlimpah;subur;kaya
堅|ケン|-がた.い;かた.い|hard;reliable;solid|1|12|keras;dapat diandalkan;padat
訳|ヤク|わけ|case;circumstance;reason|1|11|kasus;keadaan;alasan
芝|シ|しば|lawn;turf|1|6|halaman rumput;rumput
綱|コウ|つな|cable;class (genus);cord|1|14|kabel;kelas (genus);tali
典|テン;デン|のり;ふみ|ceremony;code;law|1|8|upacara;kode;hukum
賀|ガ||congratulations;joy|1|12|selamat;sukacita
扱|キュウ;ソウ|あつか.い;あつか.う;あつか.る|entertain;handle;strip|1|6|menjamu;gagang;melucuti
顧|コ|かえり.みる|examine oneself;look back;review|1|21|introspeksi;menoleh;tinjauan
弘|グ;コウ|ひろ.い|broad;vast;wide|1|5|luas;luas;lebar
看|カン|み.る|see;watch over|1|9|melihat;mengawasi
訟|ショウ||accuse;sue|1|11|menuduh;menggugat
戒|カイ|いまし.める|commandment|1|7|perintah suci
祉|シ||happiness;welfare|1|8|kebahagiaan;kesejahteraan
誉|ヨ|ほ.める;ほま.れ|glory;honor;praise|1|13|kejayaan;kehormatan;pujian
歓|カン|よろこ.ぶ|delight;joy|1|15|kegembiraan;sukacita
奏|ソウ|かな.でる|complete;play music;speak to a ruler|1|9|lengkap;memainkan musik;menghadap penguasa
勧|カン;ケン|すす.める|advise;encourage;offer|1|13|menasihati;menyemangati;menawarkan
騒|ソウ|うれい;さわ.がしい;さわ.ぐ|boisterous;clamor;disturb|1|18|riuh;keriuhan;mengganggu
閥|バツ||clan;clique;faction|1|14|marga;kelompok kecil;faksi
甲|カン;コウ|きのえ|A grade;armor;carapace|1|5|nilai A;baju zirah;tempurung
縄|ジョウ|ただ.す;なわ|cord;straw rope|1|15|tali;tali jerami
郷|キョウ;ゴウ|さと|district;home town;native place|1|11|distrik;kampung halaman;tempat asal
揺|ヨウ|うご.く;ゆ.さぶる;ゆ.すぶる|rock;shake;sway|1|12|batu;mengguncang;bergoyang
免|メン|まぬか.れる;まぬが.れる|dismissal;excuse|1|8|pemecatan;alasan
既|キ|すで.に|already;long ago;previously|1|10|sudah;dahulu kala;sebelumnya
薦|セン|すす.める|advise;encourage;mat|1|16|menasihati;menyemangati;tikar
隣|リン|とな.る;となり|neighboring|1|16|bertetangga
華|カ;ケ|はな|flower;gay;gorgeous|1|10|bunga;riang;memukau
範|ハン||example;model;pattern|1|15|contoh;model;pola
隠|イン;オン|かく.し;かく.す;かく.れる|conceal;cover;hide|1|14|menyembunyikan;menutupi;menyembunyikan
徳|トク||benevolence;commanding respect;goodness|1|14|kebajikan;berwibawa;kebaikan
哲|テツ|あきらか;さとい|clear;philosophy|1|10|jelas;filsafat
杉|サン|すぎ|cedar;cryptomeria|1|7|pohon aras;pohon sugi
釈|シャク;セキ|す.てる;とく;ゆる.す|explanation|1|11|penjelasan
己|キ;コ|おのれ;つちのと;な|self|1|3|diri
妥|ダ||depravity;gentle;peace|1|7|kebejatan;lembut;damai
威|イ|おど.かす;おど.し;おど.す|dignity;intimidate;majesty|1|9|martabat;menggertak;keagungan
豪|ゴウ|えら.い|Australia;excelling;great|1|14|Australia;melebihi;hebat
熊|ユウ|くま|bear|1|14|beruang
滞|タイ;テイ|とどこお.る|arrears;be delayed;overdue|1|13|tunggakan;tertunda;terlambat jatuh tempo
微|ビ|かす.か|delicate;insignificance;minuteness|1|13|halus;ketidakberartian;kehalusan detail
隆|リュウ||high;hump;noble|1|11|tinggi;punuk;bangsawan
症|ショウ||illness;symptoms|1|10|penyakit;gejala
暫|ザン|しばら.く|a while;long time;moment|1|15|sebentar;waktu lama;saat
忠|チュウ||faithfulness;fidelity;loyalty|1|8|kesetiaan;kesetiaan;kesetiaan
倉|ソウ|くら|cellar;godown;storehouse|1|10|ruang bawah tanah;gudang;gudang
彦|ゲン|ひこ|boy (ancient);lad|1|9|anak lelaki (kuno);pemuda
肝|カン|きも|chutzpah;liver;nerve|1|7|kenekatan;hati;saraf
喚|カン|わめ.く|call;cry;scream|1|12|memanggil;menangis;menjerit
沿|エン|-ぞ.い;そ.う|follow along;lie along;run along|1|8|menyertai;terbentang;menyusuri
妙|ビョウ;ミョウ|たえ|charming;delicate;excellent|1|7|memesona;halus;sangat baik
唱|ショウ|とな.える|call upon;chant;recite|1|11|menyeru;melantunkan;melafalkan
阿|ア;オ|おもね.る;くま|Africa;corner;fawn upon|1|8|Afrika;sudut;menjilat
索|サク||cord;inquiring;rope|1|10|tali;penyelidikan;tali tambang
誠|セイ|まこと|admonish;fidelity;prohibit|1|13|menegur;kesetiaan;melarang
襲|シュウ|おそ.う;かさ.ね|advance on;attack;heap|1|22|menyerbu;serangan;timbunan
懇|コン|ねんご.ろ|cordial;courteous;hospitable|1|17|ramah;santun;ramah menjamu
俳|ハイ||actor;haiku|1|10|aktor;haiku
柄|ヘイ|え;がら;つか|build;character;crank|1|9|membangun;watak;engkol
驚|キョウ|おどろ.かす;おどろ.く|amazed;be surprised;frightened|1|22|takjub;terkejut;ketakutan
麻|マ;マア|あさ|flax;hemp;numb|1|11|rami;rami;mati rasa
李|リ|すもも|plum|1|7|prem
浩|コウ|おおき.い;ひろ.い|abundance;vigorous;wide expanse|1|10|kelimpahan;bertenaga;hamparan luas
剤|ザイ;スイ;セイ|かる;けず.る|dose;drug;medicine|1|10|dosis;obat;obat
瀬|ライ|せ|current;rapids;shallows|1|19|arus;jeram;perairan dangkal
趣|シュ|おもむ.く;おもむき|become;elegance;gist|1|15|menjadi;keanggunan;inti
陥|カン|おちい.る;おとしい.れる|cave in;collapse;fall (castle)|1|10|ambruk;runtuh;jatuhnya benteng
斎|サイ|い.む;いつ.く;いわ.う|Buddhist food;alike;avoid|1|11|makanan biara;sama;menghindari
貫|カン|つらぬ.く;ぬ.く;ぬき|8 1/3lbs;brace;penetrate|1|11|8 1/3 pon;penopang;menembus
仙|セン;セント||cent;hermit;wizard|1|5|sen;pertapa;penyihir
慰|イ|なぐさ.む;なぐさ.める|amusement;cheer;comfort|1|15|hiburan;sorak;kenyamanan
序|ジョ|つい.で;ついで|beginning;chance;incidentally|1|7|permulaan;kesempatan;omong-omong
旬|シュン;ジュン||decameron;season (for specific products);ten-day period|1|6|sepuluh hari;musim panen;sepuluh hari
兼|ケン|-か.ねる;か.ねる|and;beforehand;concurrently|1|10|dan;sebelumnya;sekaligus
聖|ショウ;セイ|ひじり|holy;master;priest|1|13|suci;tuan;pendeta
旨|シ|うま.い;むね|clever;delicious;expert|1|6|pandai;lezat;ahli
即|ソク|すなわ.ち;つ.く;つ.ける|adapt;agree;as is|1|7|menyesuaikan;setuju;apa adanya
柳|リュウ|やなぎ|willow|1|9|pohon dedalu
舎|シャ;セキ|やど.る|cottage;house;hut|1|8|pondok;rumah;gubuk
偽|カ;ギ|いつわ.り;いつわ.る;にせ|counterfeit;deceive;falsehood|1|11|palsu;menipu;kebohongan
較|カク;コウ|くら.べる|compare;contrast|1|13|membandingkan;kontras
覇|ハ;ハク|はたがしら|champion;hegemony;leadership|1|19|juara;hegemoni;kepemimpinan
詳|ショウ|くわ.しい;つまび.らか|accurate;detailed;full|1|13|akurat;terperinci;penuh
抵|テイ||reach;resist;touch|1|8|menjangkau;melawan;menyentuh
脅|キョウ|おど.かす;おど.す;おびや.かす|coerce;threaten|1|10|memaksa;mengancam
茂|モ|しげ.る|be luxuriant;grow thick;overgrown|1|8|rimbun;menebal;ditumbuhi lebat
犠|キ;ギ|いけにえ|sacrifice|1|17|pengorbanan
旗|キ|はた|banner;national flag;standard|1|14|panji;bendera negara;standar
距|キョ|けづめ;へだ.たる|fetlock;long-distance;spur|1|12|jumbai kaki kuda;jarak jauh;taji
雅|ガ|みや.び|elegant;graceful;gracious|1|13|anggun;anggun;murah hati
飾|ショク|かざ.り;かざ.る|adorn;decorate;embellish|1|13|menghias;menghias;memperindah
網|モウ|あみ|netting;network|1|14|jaring;jaringan
竜|リュウ;リョウ;ロウ|いせ;たつ|dragon;imperial|1|10|naga;kekaisaran
詩|シ|うた|poem;poetry|1|13|puisi;puisi
繁|ハン|しげ.く;しげ.る|complexity;frequency;luxuriant|1|16|kerumitan;frekuensi;rimbun
翼|ヨク|つばさ|flank;plane;wing|1|17|sisi;ketam;sayap
潟|セキ|-がた;かた|lagoon|1|15|laguna
敵|テキ|あだ;かたき;かな.う|enemy;foe;opponent|1|15|musuh;lawan;lawan
魅|ミ||bewitch;charm;fascination|1|15|menyihir;pesona;daya tarik
嫌|ケン;ゲン|いや;きら.い;きら.う|detest;dislike;hate|1|13|membenci;tidak suka;benci
斉|サイ;セイ|あたる;そろ.う;はやい|adjusted;alike;equal|1|8|tersetel;sama;sama
敷|フ|-し.き;し.く|pave;promulgate;sit|1|15|mengaspal;mengundangkan;duduk
擁|ヨウ||embrace;hug;lead|1|16|memeluk;memeluk;memimpin
圏|ケン|かこ.い|circle;radius;range|1|12|lingkaran;jari-jari;jangkauan
酸|サン|す.い|acid;bitterness;sour|1|14|asam;kepahitan;masam
罰|ハツ;バチ;バツ|ばっ.する|penalty;punishment|1|14|hukuman;hukuman
滅|メツ|ほろ.びる;ほろ.ぶ;ほろ.ぼす|destroy;overthrow;perish|1|13|menghancurkan;menggulingkan;binasa
礎|ソ|いしずえ|cornerstone;foundation stone|1|18|batu penjuru;batu fondasi
腐|フ|-くさ.る;くさ.す;くさ.らす|decay;rot;sour|1|14|membusuk;membusuk;masam
脚|カク;キャ;キャク|あし|base;leg;lower part|1|11|dasar;kaki;bagian bawah
潮|チョウ|うしお;しお|opportunity;salt water;tide|1|15|peluang;air asin;pasang surut
梅|バイ|うめ|plum|1|10|prem
尽|サン;ジン|-ず.く;-づ.く;ことごと.く|befriend;deplete;exhaust|1|6|berteman dengan;menguras;menguras
僕|ボク|しもべ|I (male);manservant;me|1|14|saya (pria);pelayan pria;saya
桜|オウ;ヨウ|さくら|cherry|1|10|sakura
滑|カツ;コツ|すべ.る;なめ.らか|fail exam;slide;slip|1|13|gagal ujian;meluncur;tergelincir
孤|コ||alone;orphan|1|9|sendirian;yatim piatu
炎|エン|ほのお|blaze;flame;inflammation|1|8|kobaran api;nyala api;peradangan
賠|バイ||compensation;indemnify|1|15|ganti rugi;mengganti rugi
句|ク||clause;counter for haiku;paragraph|1|5|klausa;penggolong haiku;paragraf
鋼|コウ|はがね|steel|1|16|baja
頑|ガン|かたく.な|firmly;foolish;stubborn|1|13|dengan teguh;bodoh;keras kepala
鎖|サ|くさり;とざ.す|chain;connection;irons|1|18|rantai;hubungan;belenggu besi
彩|サイ|いろど.る|coloring;makeup;paint|1|11|pewarnaan;riasan;cat
摩|マ|さす.る;す.る;ま.する|chafe;grind;polish|1|15|bergesekan;menggiling;memoles
励|レイ|はげ.ます;はげ.む|be diligent;encourage;inspire|1|7|rajin;menyemangati;mengilhami
縦|ジュウ|たて|height;length;self-indulgent|1|16|tinggi;panjang;memanjakan diri
輝|キ|かがや.く|gleam;radiance;shine|1|15|kilau;sinar cemerlang;bersinar
蓄|チク|たくわ.える|amass;hoard;raise|1|13|mengumpulkan;menimbun;mengangkat
軸|ジク||axis;counter for book scrolls;pivot|1|12|poros;penggolong gulungan naskah;poros
巡|ジュン|めぐ.り;めぐ.る|circumference;go around;patrol|1|6|keliling;berkeliling;patroli
稼|カ|かせ.ぐ|earn money;earnings;work|1|15|mencari uang;penghasilan;bekerja
瞬|シュン|まじろ.ぐ;またた.く|blink;twinkle;wink|1|18|berkedip;berkelip;mengedip
砲|ホウ||cannon;gun|1|10|meriam;senapan
噴|フン|ふ.く|emit;erupt;flush out|1|15|memancarkan;meletus;menghalau keluar
誇|コ|ほこ.る|be proud;boast;pride|1|13|bangga;menyombongkan;kebanggaan
祥|ショウ|きざ.し;さいわ.い;つまび.らか|auspicious;blessedness;good fortune|1|10|membawa untung;keberkahan;nasib baik
牲|セイ||animal sacrifice;offering|1|9|kurban hewan;persembahan
秩|チツ||order;regularity;salary|1|10|perintah;keteraturan;gaji
帝|テイ|みかど|creator;god;sovereign|1|9|pencipta;dewa;penguasa
宏|コウ|ひろ.い|large;wide|1|7|besar;lebar
唆|サ|そそ.る;そそのか.す|instigate;promote;seduce|1|10|menghasut;mempromosikan;merayu
阻|ソ|はば.む|deter;impede;obstruct|1|8|mencegah;merintangi;menghalangi
泰|タイ||Thailand;calm;easy|1|10|Thailand;tenang;mudah
賄|ワイ|まかな.う|board;bribe;finance|1|13|papan;suap;keuangan
撲|ボク||beat;hit;slap|1|15|memukul;memukul;menampar
堀|クツ|ほり|canal;ditch;moat|1|11|kanal;parit;parit benteng
菊|キク||chrysanthemum|1|11|krisan
絞|コウ|し.まる;し.める;しぼ.る|constrict;strangle;wring|1|12|menyempitkan;mencekik;memeras
縁|-ネン;エン|えにし;ふち;ふち.どる|affinity;border;brink|1|15|kecocokan;perbatasan;tepi jurang
唯|イ;ユイ|ただ|merely;only;simply|1|11|hanya;hanya;sekadar
膨|ボウ|ふく.らむ;ふく.れる|get fat;swell;thick|1|16|menggemuk;membengkak;tebal
矢|シ|や|arrow;dart|1|5|anak panah;anak panah kecil
耐|タイ|た.える|-proof;enduring|1|9|anti-;tahan lama
塾|ジュク||cram school;private school|1|14|bimbingan belajar;sekolah swasta
漏|ロウ|も.らす;も.る;も.れる|escape;leak;time|1|14|melarikan diri;bocor;waktu
慶|ケイ|よろこ.び|be happy;congratulate;jubilation|1|15|bahagia;mengucapkan selamat;sorak kegembiraan
猛|モウ||become furious;fierce;rave|1|11|menjadi murka;garang;mengigau
芳|ホウ|かんば.しい|balmy;favorable;fragrant|1|7|sejuk nyaman;menguntungkan;harum
懲|チョウ|こ.らしめる;こ.らす;こ.りる|chastise;discipline;penal|1|18|menghukum;disiplin;pidana
剣|ケン|つるぎ|blade;clock hand;sabre|1|10|bilah;jarum jam;pedang saber
彰|ショウ||clear;patent|1|14|jelas;paten
棋|キ|ご|Japanese chess;chess piece;shogi|1|12|shogi;buah catur;shogi
丁|チ;チョウ;チン|ひのと|4th calendar sign;counter for guns, tools, leaves or cakes of something;even number|1|2|tanda kalender ke-4;penggolong senjata, perkakas, lembar atau bongkah;bilangan genap
恒|コウ|つね;つねに|always;constancy|1|9|selalu;keteguhan
揚|ヨウ|-あ.げ;あ.がる;あ.げる|elevate;extol;fry in deep fat|1|12|mengangkat;memuji tinggi;menggoreng rendam
冒|ボウ|おか.す|assume (a name);damage;dare|1|9|memakai nama;kerusakan;berani
之|シ|この;これ;の|of;this|1|3|dari;ini
倫|リン||companion;ethics|1|10|teman seperjalanan;etika
陳|チン|ひ.ねる|exhibit;explain;relate|1|11|memamerkan;menjelaskan;menceritakan
憶|オク||recollection;remember;think|1|16|kenangan;mengingat;berpikir
潜|セン|かく.れる;くぐ.る;ひそ.む|conceal;hide;hush|1|15|menyembunyikan;menyembunyikan;diam
梨|リ|なし|pear tree|1|11|pohon pir
仁|ジン;ニ;ニン||benevolence;charity;humanity|1|4|kebajikan;amal;kemanusiaan
克|コク|か.つ|kindly;overcome;skillfully|1|7|dengan ramah;mengatasi;dengan terampil
岳|ガク|たけ|mountain;peak;point|1|8|gunung;puncak;titik
概|ガイ|おおむ.ね|approximation;condition;generally|1|14|perkiraan;kondisi;pada umumnya
拘|コウ|かか.わる|adhere to;arrest;concerned|1|8|berpegang pada;menangkap;khawatir
墓|ボ|はか|grave;tomb|1|13|makam;makam
黙|ボク;モク|だま.る;もだ.す|become silent;leave as is;silence|1|15|terdiam;membiarkan;keheningan
須|シュ;ス|すべから.く;すべし;ひげ|by all means;necessarily;ought|1|12|dengan segala cara;tentu saja;seharusnya
偏|ヘン|かたよ.る|biased;inclining;left-side radical|1|11|berat sebelah;condong;radikal sisi kiri
雰|フン||atmosphere;fog|1|12|suasana;kabut
遇|グウ|あ.う|deal with;encounter;entertain|1|12|menangani;perjumpaan;menjamu
諮|シ|はか.る|consult with|1|16|berunding dengan
狭|キョウ;コウ|さ;せば.まる;せば.める|contract;cramped;narrow|1|9|kontrak;sempit;sempit
卓|タク||desk;eminent;high|1|8|meja;termasyhur;tinggi
亀|キ;キュウ;キン|かめ|tortoise;turtle|1|11|kura-kura;kura-kura
糧|リョウ;ロウ|かて|bread;food;provisions|1|18|roti;makanan;perbekalan
簿|ボ||record book;register|1|19|buku catatan;mendaftar
炉|ロ|いろり|furnace;hearth;kiln|1|8|tungku;perapian;tungku pembakaran
牧|ボク|まき|breed;care for;feed|1|8|membiakkan;merawat;memberi makan
殊|シュ|こと|especially;exceptionally;particularly|1|10|terutama;luar biasa;khususnya
殖|ショク|ふ.える;ふ.やす|augment;increase;multiply|1|12|menambah;bertambah;mengalikan
艦|カン||warship|1|21|kapal perang
輩|ハイ|-ばら;ともがら;やかい|companions;comrade;fellow|1|15|para teman;kawan seperjuangan;orang
穴|ケツ|あな|aperture;cave;den|1|5|celah;gua;sarang
奇|キ|あや.しい;く.しき;くし|curiosity;strange;strangeness|1|8|rasa ingin tahu;aneh;keanehan
慢|マン||laziness;ridicule|1|14|kemalasan;mengolok
鶴|カク|つる|crane;stork|1|21|bangau;bangau
謀|ボウ;ム|たばか.る;はか.る;はかりごと|cheat;conspire;deceive|1|16|curang;bersekongkol;menipu
暖|ダン;ノン|あたた.か;あたた.かい;あたた.まる|warmth|1|13|kehangatan
昌|ショウ|さかん|bright;clear;prosperous|1|8|terang;jelas;makmur
拍|ハク;ヒョウ||beat (music);clap|1|8|ketukan;bertepuk
朗|ロウ|あき.らか;ほが.らか|bright;cheerful;clear|1|10|terang;ceria;jelas
寛|カン|くつろ.ぐ;ひろ.い;ゆる.やか|be at ease;broadminded;feel at home|1|13|merasa tenang;berpikiran luas;merasa betah
覆|フク|おお.う;くつがえ.す;くつがえ.る|be ruined;capsize;cover|1|18|hancur;terbalik;menutupi
胞|ホウ||placenta;sac;sheath|1|9|ari-ari;kantung;sarung pedang
泣|キュウ|な.く|cry;moan;weep|1|8|menangis;mengerang;menangis
隔|カク|へだ.たる;へだ.てる|alternate;distance;gulf|1|13|bergantian;jarak;teluk besar
浄|ジョウ;セイ|きよ.い;きよ.める|Manchu Dynasty;clean;cleanse|1|9|Dinasti Manchu;bersih;membersihkan
没|ボツ;モツ|おぼ.れる;しず.む;ない|die;disappear;drown|1|7|mati;menghilang;tenggelam
暇|カ|いとま;ひま|leave of absence;leisure;rest|1|13|cuti;waktu luang;istirahat
肺|ハイ||lungs|1|9|paru-paru
貞|ジョウ;テイ|さだ;ただし.い|chastity;constancy;righteousness|1|9|kesucian;keteguhan;kebenaran
靖|ジョウ;セイ|やす.んじる|peaceful|1|13|tenteram
鑑|カン|かがみ;かんが.みる|learn from;specimen;take warning from|1|23|belajar dari;spesimen;mengambil pelajaran dari
飼|シ|か.う|domesticate;feed;keep|1|13|menjinakkan;memberi makan;menyimpan
陰|イン|かげ;かげ.る|negative;secret;sex organs|1|11|negatif;rahasia;alat kelamin
銘|メイ||inscription;signature (of artisan)|1|14|prasasti;tanda tangan perajin
随|ズイ|したが.う;まにま.に|all;at the mercy of (the waves);both|1|12|semua;terombang-ambing;keduanya
烈|レツ|はげ.しい|ardent;extreme;furious|1|10|berapi-api;ekstrem;murka
尋|ジン|たず.ねる;ひろ|fathom;inquire;look for|1|12|depa;menanyakan;mencari
稿|コウ|したがき;わら|copy;draft;manuscript|1|15|salinan;draf;naskah
丹|タン|に|pills;red;red lead|1|4|pil;merah;timbal merah
啓|ケイ|さと.す;ひら.く|disclose;open;say|1|11|mengungkapkan;membuka;berkata
也|エ;ヤ|か;なり;また|to be (classical)|1|3|adalah (klasik)
丘|キュウ|おか|hill;knoll|1|5|bukit;bukit kecil
棟|トウ|むな-;むね|ridge;ridgepole|1|12|punggung bukit;balok bubungan
壌|ジョウ|つち|earth;lot;soil|1|16|bumi;banyak;tanah
漫|マン|そぞ.ろ;みだり.に|cartoon;corrupt;in spite of oneself|1|14|kartun;korup;tanpa sadar
玄|ゲン|くろ;くろ.い|black;deep;mysterious|1|5|hitam;dalam;misterius
粘|ネン|ねば.る|glutinous;greasy;persevere|1|11|lengket;berminyak;bertekun
悟|ゴ|さと.る|discern;enlightenment;perceive|1|10|membedakan;pencerahan;menangkap
舗|ホ||pave;shop;store|1|15|mengaspal;toko;toko
妊|ジン;ニン|はら.む;みごも.る|pregnancy|1|7|kehamilan
熟|ジュク|う.れる|acquire skill;mature;mellow|1|15|menguasai keterampilan;matang;melunak
旭|キョク|あさひ|morning sun;rising sun|1|6|matahari pagi;matahari terbit
恩|オン||benefit;blessing;favor|1|10|manfaat;berkah;kebaikan hati
騰|トウ|あが.る;のぼ.る|advancing;going;jumping up|1|20|memajukan;kepergian;melonjak
往|オウ|い.く;いにしえ;さき.に|before;chase away;formerly|1|8|sebelum;mengusir;dahulu
豆|ズ;トウ|まめ;まめ-|beans;midget;pea|1|7|kacang;cebol;kacang polong
遂|スイ|つい.に;と.げる|accomplish;attain;commit (suicide)|1|12|menyelesaikan;mencapai;melakukan (bunuh diri)
狂|キョウ|くる.う;くる.おしい;くるお.しい|confuse;crazy;insane|1|7|membingungkan;gila;gila
岐|キ;ギ||arena;branch off;fork in road|1|7|arena;bercabang;persimpangan
陛|ヘイ||highness;steps (of throne)|1|10|paduka;tangga singgasana
緯|イ|ぬき;よこいと|(parallels of) latitude;horizontal;left & right|1|16|garis lintang;mendatar;kiri dan kanan
培|バイ|つちか.う|cultivate;foster|1|11|mengolah tanah;mengasuh
衰|スイ|おとろ.える|decline;wane;weaken|1|10|menolak;meredup;melemahkan
艇|テイ||rowboat;small boat|1|13|perahu dayung;perahu kecil
屈|クツ|かが.む;かが.める|bend;flinch;submit|1|8|menekuk;mengkerut;menyerahkan
径|ケイ|こみち;さしわたし;ただちに|diameter;method;path|1|8|diameter;metode;jalan setapak
淡|タン|あわ.い|faint;fleeting;pale|1|11|pingsan;sekejap;pucat
抽|チュウ|ひき-|excel;extract;pluck|1|8|unggul;menyarikan;memetik
披|ヒ||expose;open|1|8|membeberkan;membuka
廷|テイ||courts;government office;imperial court|1|7|pengadilan;kantor pemerintah;istana kaisar
錦|キン|にしき|brocade;fine dress;honors|1|16|kain brokat;busana indah;penghargaan
准|ジュン||associate;quasi-;semi-|1|10|rekan;semu;semi-
暑|ショ|あつ.い|hot;sultry;summer heat|1|12|panas;gerah;panas musim panas
磯|キ|いそ|beach;seashore|1|17|pantai;tepi laut
奨|ショウ;ソウ|すす.める|encourage;exhort;urge|1|13|menyemangati;mendesak;mendorong
浸|シン|つ.かる;ひた.す;ひた.る|dip;dunk;immersed|1|10|mencelupkan;mencelup;terendam
剰|ジョウ|あま.り;あま.る;あまつさえ|besides;surplus|1|11|selain itu;surplus
胆|タン|きも|courage;gall bladder;nerve|1|9|keberanian;kantong empedu;saraf
繊|セン||fine;slender;thin kimono|1|17|denda;ramping;kimono tipis
駒|ク|こま|colt;horse;pony|1|15|anak kuda;kuda;kuda poni
虚|キョ;コ|うつ.ろ;むな.しい|crack;emptiness;fissure|1|11|retak;kehampaan;celah retak
霊|リョウ;レイ|たま|soul;spirits|1|15|jiwa;arwah
帳|チョウ|とばり|account book;album;curtain|1|11|buku kas;album;tirai
悔|カイ|く.いる;く.やむ;くや.しい|regret;repent|1|9|menyesal;bertobat
諭|ユ|さと.す|admonish;charge;persuade|1|16|menegur;biaya;membujuk
惨|サン;ザン|いた.む;みじ.め;むご.い|cruelty;disaster;harsh|1|11|kekejaman;bencana;kasar
虐|ギャク|しいた.げる|oppress;tyrannize|1|9|menindas;menindas
翻|ハン;ホン|ひるがえ.す;ひるがえ.る|change (mind);flip;flutter|1|18|berubah pikiran;membalik;berkibar
墜|ツイ|お.ちる;お.つ|crash;fall (down)|1|15|tabrakan;terjatuh
沼|ショウ|ぬま|bog;lake;marsh|1|8|rawa;danau;rawa
据|キョ|す.える;す.わる|equip;install;lay a foundation|1|11|melengkapi;memasang;meletakkan fondasi
肥|ヒ|こ.える;こ.やし;こ.やす|fertile;fertilizer;get fat|1|8|subur;pupuk;menggemuk
徐|ジョ|おもむ.ろに|deliberately;gently;gradually|1|10|dengan sengaja;dengan lembut;lambat laun
糖|トウ||sugar|1|16|gula
搭|トウ||board;load (a vehicle);ride|1|12|papan;memuat kendaraan;menunggangi
盾|ジュン|たて|escutcheon;pretext;shield|1|9|perisai lambang;dalih;perisai
脈|ミャク|すじ|hope;pulse;vein|1|10|harapan;denyut;pembuluh darah
滝|ソウ;ロウ|たき|cascade;rapids;waterfall|1|13|air terjun bertingkat;jeram;air terjun
軌|キ||model;rut;track|1|9|model;alur roda;jejak
俵|ヒョウ|たわら|bag;bale;counter for bags|1|10|tas;bal;penggolong karung
妨|ボウ|さまた.げる|disturb;hamper;obstruct|1|7|mengganggu;menghambat;menghalangi
擦|サツ|-ず.れ;こす.る;こす.れる|chafe;grate;rub|1|17|bergesekan;memarut;menggosok
鯨|ゲイ|くじら|whale|1|19|paus
荘|ショウ;ソウ;チャン|おごそ.か;ほうき|cottage;dignified;feudal manor|1|9|pondok;berwibawa;tanah feodal
諾|ダク||agreement;assent;consent|1|15|kesepakatan;persetujuan;persetujuan
雷|ライ|いかずち;いかづち;かみなり|lightning bolt;thunder|1|13|sambaran petir;guntur
漂|ヒョウ|ただよ.う|drift;float (on liquid)|1|14|hanyut;terapung
懐|エ;カイ|いだ.く;おも.う;なず.ける|become attached to;bosom;breast|1|16|menjadi terikat pada;dada;dada
勘|カン||check;compare;intuition|1|11|memeriksa;membandingkan;intuisi
栽|サイ||plantation;planting|1|10|perkebunan;penanaman
拐|カイ||falsify;kidnap|1|8|memalsukan;menculik
駄|タ;ダ||burdensome;horse load;pack horse|1|14|memberatkan;muatan kuda;kuda beban
添|テン|そ.う;そ.える|accompany;annexed;append|1|11|menemani;dianeksasi;melampirkan
冠|カン|かんむり|best;crown;peerless|1|9|terbaik;mahkota;tiada tara
斜|シャ|なな.め;はす|diagonal;oblique;slanting|1|11|diagonal;serong;miring
鏡|キョウ;ケイ|かがみ|barrel-head;mirror;round rice-cake offering|1|19|tutup tong;cermin;sesaji mochi bundar
聡|ソウ|さと.い;みみざと.い|fast learner;wise|1|14|cepat belajar;bijak
浪|ロウ||billows;reckless;unrestrained|1|10|gelombang besar;sembrono;tak terkekang
亜|ア|つ.ぐ|-ous;Asia;come after|1|7|bersifat;Asia;menyusul
覧|ラン|み.る|perusal;see|1|17|pembacaan cermat;melihat
詐|サ|いつわ.る|deceive;falsehood;lie|1|12|menipu;kebohongan;berbohong
壇|タン;ダン||podium;rostrum;stage|1|16|podium;mimbar;panggung
勲|クン|いさお|merit;meritorious deed|1|15|jasa;perbuatan berjasa
魔|マ||demon;evil spirit;witch|1|21|iblis;roh jahat;penyihir
酬|シュ;シュウ;トウ|むく.いる|repay;retribution;reward|1|13|membalas;pembalasan;ganjaran
紫|シ|むらさき|purple;violet|1|12|ungu;ungu violet
曙|ショ|あけぼの|dawn;daybreak|1|17|fajar;dini hari
紋|モン||family crest;figures|1|10|lambang keluarga;angka
卸|シャ|おろ.し;おろ.す;おろし|wholesale|1|9|grosir
奮|フン|ふる.う|be invigorated;flourish;stirred up|1|16|bergairah;berkembang pesat;terhasut
欄|ラン|てすり|blank;column;handrail|1|20|kosong;kolom;pegangan tangga
逸|イツ|そ.らす;そ.れる;はぐ.れる|deviate;diverge;elude|1|11|menyimpang;bercabang;mengelak
涯|ガイ|はて|bound;horizon;limit|1|11|terikat;cakrawala;batas
拓|タク|ひら.く|break up (land);clear (the land);open|1|8|membuka lahan;membuka lahan;membuka
眼|ガン;ゲン|まなこ;め|eyeball|1|11|bola mata
獄|ゴク||jail;prison|1|14|penjara;penjara
尚|ショウ|なお|esteem;furthermore;still|1|8|penghargaan;lagi pula;masih
彫|チョウ|-ぼ.り;ほ.る|carve;chisel;engrave|1|11|mengukir;pahat;mengukir
穏|オン|おだ.やか|calm;moderation;quiet|1|16|tenang;kesederhanaan;tenang
顕|ケン|あきらか;あらわ.れる|appear;existing|1|18|muncul;yang ada
巧|コウ|うま.い;たく.み;たく.む|adroit;ingenuity;skilled|1|5|cekatan;kepiawaian;terampil
矛|ボウ;ム|ほこ|arms;festival float;halberd|1|5|senjata;kereta hias festival;tombak kapak
垣|エン|かき|fence;hedge;wall|1|9|pagar;pagar tanaman;dinding
欺|ギ|あざむ.く|cheat;deceit;delude|1|12|curang;tipu daya;memperdaya
釣|チョウ|つ.り;つ.り-;つ.る|allure;angling;catch|1|11|memikat;memancing;menangkap
萩|シュウ|はぎ|bush clover|1|12|semanggi semak
粛|シュク;スク|つつし.む|quietly;softly;solemn|1|11|dengan tenang;dengan lembut;khidmat
栗|リ;リツ|おののく;くり|chestnut|1|10|berangan
愚|グ|おろ.か|absurdity;folly;foolish|1|13|kemustahilan;kebodohan;bodoh
嘉|カ|よい;よみ.する|applaud;auspicious;esteem|1|14|bertepuk tangan;membawa untung;penghargaan
遭|ソウ|あ.う;あ.わせる|association;encounter;interview|1|14|perkumpulan;perjumpaan;wawancara
架|カ|か.かる;か.ける|construct;erect;frame|1|9|membangun;mendirikan;bingkai
鬼|キ|おに;おに-|devil;ghost|1|10|setan;hantu
庶|ショ||all;bastard;commoner|1|11|semua;anak haram;rakyat jelata
稚|ジ;チ|いとけない;おくて;おさない|immature;young|1|13|belum matang;muda
滋|シ;ジ||be luxuriant;more & more;nourishing|1|12|rimbun;makin banyak;bergizi
幻|ゲン|まぼろし|apparition;dream;illusion|1|4|penampakan;mimpi;ilusi
煮|シャ|-に;に.える;に.やす|boil;cook|1|12|merebus;memasak
姫|キ|ひめ;ひめ-|princess|1|10|putri
誓|セイ|ちか.う|pledge;swear;vow|1|14|janji;bersumpah;ikrar
把|ハ;ワ||bunch;counter for bundles;faggot|1|7|seikat;penggolong ikat;ikatan ranting
践|セン|ふ.む|carry through;practice;step on|1|13|menuntaskan;latihan;menginjak
呈|テイ||display;exhibit;offer|1|7|memajang;memamerkan;menawarkan
疎|ショ;ソ|うと.い;うと.む;まば.ら|alienate;neglect;penetrate|1|12|menjauhkan;menelantarkan;menembus
仰|ギョウ;コウ|あお.ぐ;お.っしゃる;おお.せ|depend;drink;face-up|1|6|bergantung;minum;menghadap ke atas
剛|ゴウ||strength;sturdy|1|10|kekuatan;kokoh
疾|シツ|はや.い|rapidly|1|10|dengan cepat
征|セイ||attack the rebellious;collect taxes;subjugate|1|8|menumpas pemberontak;memungut pajak;menundukkan
砕|サイ|くだ.く;くだ.ける|break;crush;familiar|1|9|patah;menghancurkan;akrab
謡|ヨウ|うた.い;うた.う|ballad;noh chanting;sing|1|16|balada;nyanyian noh;menyanyi
嫁|カ|い.く;とつ.ぐ;ゆ.く|bride;marry into|1|13|pengantin perempuan;menikah masuk keluarga
謙|ケン|へりくだ.る|be modest;condescend;humble oneself|1|17|rendah hati;merendahkan diri;merendahkan diri
后|コウ;ゴ|きさき|after;back;behind|1|6|sesudah;punggung;di belakang
嘆|タン|なげ.かわしい;なげ.く|grieve;lament;moan|1|13|berduka;meratap;mengerang
菌|キン||bacteria;fungus;germ|1|11|bakteri;jamur;kuman
鎌|ケン;レン|かま|scythe;sickle;trick|1|18|sabit;arit;tipuan
巣|ソウ|す;す.くう|cobweb;den;hive|1|11|sarang laba-laba;sarang;sarang lebah
頻|ヒン|しき.りに|recur;repeatedly|1|17|berulang;berulang kali
琴|キン;ゴン|こと|harp;koto|1|12|harpa;koto
班|ハン||corps;group;squad|1|10|korps;kelompok;regu
棚|ホウ|-だな;たな|ledge;mantle;mount|1|12|birai;mantel;menaiki
潔|ケツ|いさぎよ.い|clean;gallant;pure|1|15|bersih;gagah berani;murni
酷|コク|ひど.い|atrocious;cruel;severe|1|14|keji;kejam;keras
宰|サイ||manager;rule;superintend|1|10|manajer;aturan;mengawasi
廊|ロウ||corridor;hall;tower|1|12|koridor;aula;menara
寂|ジャク;セキ|さび;さび.しい;さび.れる|death of a priest;loneliness;mature|1|11|wafatnya biksu;kesepian;matang
辰|シン;ジン|たつ|7-9AM;fifth sign of Chinese zodiac;shin dragon radical (no. 161)|1|7|pukul 07-09;shio kelima;radikal naga shin (no. 161)
霞|カ;ゲ|かす.む;かすみ|be hazy;blurred;grow dim|1|17|berkabut;kabur;meredup
伏|フク|ふ.す;ふ.せる|bend down;bow;cover|1|6|membungkuk;busur;menutupi
碁|ゴ||Go|1|13|Go
俗|ゾク||customs;manners;mundane things|1|9|bea cukai;tata krama;hal duniawi
漠|バク||desert;obscure;vague|1|13|gurun;samar;samar
邪|ジャ|よこし.ま|injustice;wicked;wrong|1|8|ketidakadilan;keji;salah
晶|ショウ||clear;crystal;sparkle|1|12|jelas;kristal;berkilauan
墨|ボク|すみ|India ink;Mexico;black ink|1|14|tinta cina;Meksiko;tinta hitam
鎮|チン|おさえ;しず.まる;しず.める|ancient peace-preservation centers;tranquilize|1|18|pos keamanan zaman kuno;menenangkan
洞|ドウ|ほら|cave;den;excavation|1|9|gua;sarang;penggalian
履|リ|は.く|boots;complete;footgear|1|15|sepatu bot;lengkap;alas kaki
劣|レツ|おと.る|be inferior to;be worse;inferiority|1|6|lebih rendah dari;lebih buruk;inferioritas
那|ダ;ナ|いかん;なに;なんぞ|what?|1|7|apa?
殴|オウ|なぐ.る|assault;beat;hit|1|8|serangan;memukul;memukul
娠|シン||pregnancy;with child|1|10|kehamilan;mengandung
奉|ブ;ホウ|たてまつ.る;ほう.ずる;まつ.る|dedicate;observance;offer|1|8|mendedikasikan;pelaksanaan;menawarkan
憂|ユウ|う.い;う.き;うれ.い|be anxious;grieve;lament|1|15|cemas;berduka;meratap
朴|ボク|えのき;ほう;ほお|crude;docile;plain|1|6|kasar;penurut;polos
亭|チン;テイ||arbor;cottage;mansion|1|9|pondok taman;pondok;rumah besar
淳|シュン;ジュン|あつ.い|pure|1|11|murni
怪|カイ;ケ|あや.しい;あや.しむ|apparition;mystery;suspicious|1|8|penampakan;misteri;mencurigakan
鳩|キュウ;ク|あつ.める;はと|dove;pigeon|1|13|merpati;merpati
酔|スイ|よ;よ.い;よ.う|drunk;elated;feel sick|1|11|mabuk;girang;merasa mual
惜|セキ|お.しい;お.しむ|be sparing of;frugal;pity|1|11|berhemat;hemat;kasihan
穫|カク||harvest;reap|1|18|panen;menuai
佳|カ||beautiful;excellent;good|1|8|indah;sangat baik;baik
潤|ジュン|うる.む;うるお.う;うるお.す|be watered;charm;favor|1|15|disiram;pesona;kebaikan hati
悼|トウ|いた.む|grieve over;lament|1|11|meratapi;meratap
乏|ボウ|とぼ.しい;とも.しい|destitution;limited;scarce|1|4|kemelaratan;terbatas;langka
該|ガイ||above-stated;that specific;the said|1|13|tersebut di atas;yang tertentu itu;yang disebut
赴|フ|おもむ.く|become;get;proceed|1|9|menjadi;mendapat;melanjutkan
桑|ソウ|くわ|mulberry|1|10|murbei
桂|ケイ|かつら|Japanese Judas-tree;cinnamon tree|1|10|pohon katsura;pohon kayu manis
髄|ズイ||essence;marrow;pith|1|19|inti sari;sumsum;empulur
虎|コ|とら|drunkard;tiger|1|8|pemabuk;harimau
盆|ボン||basin;lantern festival;tray|1|9|baskom;festival lampion;baki
晋|シン|すす.む|advance|1|10|maju
穂|スイ|ほ|crest (wave);ear;ear (grain)|1|15|puncak gelombang;telinga;bulir
壮|ソウ|さかん|manhood;prosperity;robust|1|6|kedewasaan pria;kemakmuran;kekar
堤|テイ|つつみ|bank;dike;embankment|1|12|bank;tanggul;tanggul
飢|キ|う.える|hungry;starve|1|10|lapar;kelaparan
傍|ボウ|おか-;かたわ.ら;そば|besides;bystander;nearby|1|12|selain itu;orang yang menonton;di dekat
疫|エキ;ヤク||epidemic|1|9|wabah
累|ルイ||accumulate;continually;involvement|1|11|menumpuk;terus-menerus;keterlibatan
痴|チ|おろか;し.れる|foolish;stupid|1|13|bodoh;bodoh
搬|ハン||carry;conveyor;transport|1|13|membawa;pengangkut;pengangkutan
晃|コウ|あきらか|clear|1|10|jelas
癒|ユ|い.える;い.やす;いや.す|cure;healing;quench (thirst)|1|18|menyembuhkan;penyembuhan;melepas dahaga
桐|トウ;ドウ|きり|paulownia|1|10|pohon paulownia
寸|スン||a little;measurement;small|1|3|sedikit;pengukuran;kecil
郭|カク|くるわ|enclosure;fortification;quarters|1|11|pagar keliling;kubu pertahanan;tempat tinggal
尿|ニョウ|いばり;しと;ゆばり|urine|1|7|air seni
凶|キョウ||bad luck;disaster;evil|1|4|sial;bencana;jahat
吐|ト|つ.く;は.く|belch;confess;spit|1|6|bersendawa;mengaku;meludah
宴|エン|うたげ|banquet;feast;party|1|10|jamuan;pesta makan;pesta
鷹|オウ;ヨウ|たか|hawk|1|24|elang
賓|ヒン||V.I.P.;guest|1|15|tamu penting;tamu
虜|リョ;ロ|とりく;とりこ|barbarian;captive;low epithet for the enemy|1|13|orang barbar;tawanan;sebutan hina bagi musuh
陶|トウ|すえ|porcelain;pottery|1|11|porselen;tembikar
鐘|ショウ|かね|bell;chimes;gong|1|20|lonceng;lonceng bernada;gong
憾|カン|うら.む|be sorry;regret;remorse|1|16|menyesal;menyesal;penyesalan
猪|チョ|い;いのしし|boar|1|11|babi hutan
紘|コウ|おおづな;つな;つなぐ|large|1|10|besar
磁|ジ||magnet;porcelain|1|14|magnet;porselen
弥|ビ;ミ|いや;いよ.いよ;や|all the more;increasingly|1|8|apalagi;makin lama makin
昆|コン||descendants;elder brother;insect|1|8|keturunan;kakak laki-laki;serangga
粗|ソ|あら-;あら.い|coarse;rough;rugged|1|11|kasar;kasar;bergerigi kasar
訂|テイ|ただ.す|correct;decide;revise|1|9|benar;memutuskan;merevisi
芽|ガ|め|bud;germ;spear|1|8|tunas;kuman;tombak
庄|ショウ;ソ;ソウ||hamlet;in the country;level|1|6|dusun;di desa;tingkat
傘|サン|かさ|umbrella|1|12|payung
敦|タイ;ダン;チョウ|あつ.い|industry;kindliness|1|12|industri;keramahan
騎|キ||counter for equestrians;equestrian;riding on horses|1|18|penggolong penunggang kuda;penunggang kuda;menunggang kuda
寧|ネイ|むし.ろ|peaceful;preferably;quiet|1|14|tenteram;sebaiknya;tenang
循|ジュン||follow;sequential|1|12|mengikuti;berurutan
忍|ニン|しの.ばせる;しの.ぶ|bear;conceal;endure|1|7|beruang;menyembunyikan;bertahan
怠|タイ|おこた.る;なま.ける|laziness;neglect|1|9|kemalasan;menelantarkan
如|ジョ;ニョ|ごと.し|as if;best;better|1|6|seolah-olah;terbaik;lebih baik
寮|リョウ||dormitory;hostel;tea pavillion|1|15|asrama;penginapan;paviliun teh
祐|ウ;ユウ|たす.ける|help|1|9|bantuan
鵬|ホウ|おおとり|phoenix|1|19|feniks
鉛|エン|なまり|lead|1|13|memimpin
珠|シュ|たま|gem;jewel;pearl|1|10|permata;permata;mutiara
凝|ギョウ|こ.らす;こ.る;こご.らす|be absorbed in;congeal;freeze|1|16|tenggelam dalam;membeku;membeku
苗|ビョウ;ミョウ|なえ;なわ-|sapling;seedling;shoot|1|8|anak pohon;bibit;menembak
獣|ジュウ|けだもの;けもの|animal;beast|1|16|hewan;binatang buas
哀|アイ|あわ.れ;あわ.れむ;かな.しい|grief;pathetic;pathos|1|9|duka;memilukan;keharuan
跳|チョウ|-と.び;と.ぶ;は.ねる|buck;hop;jerk|1|13|rusa jantan;melompat;sentakan
匠|ショウ|たくみ|artisan;carpenter;workman|1|6|perajin;tukang kayu;pekerja
垂|スイ|-た.れ;た.らす;た.れ|droop;hang;slouch|1|8|terkulai;menggantung;membungkuk lesu
蛇|イ;ジャ;ダ|へび|hard drinker;serpent;snake|1|11|peminum berat;ular;ular
澄|チョウ|-す.ます;す.ます;す.む|be clear;clarify;clear|1|15|jernih;memperjelas;jelas
縫|ホウ|ぬ.う|embroider;sew;stitch|1|16|menyulam;menjahit;jahitan
僧|ソウ||Buddhist priest;monk|1|13|biksu;biksu
眺|チョウ|なが.める|look at;scrutinize;see|1|11|memandang;meneliti;melihat
亘|カン;コウ;セン|もと.める;わた.る|extend over;range;span|1|6|membentang;jangkauan;bentang
呉|ゴ|く.れる;くれ|do something for;give;kingdom of Wu|1|7|melakukan untuk;memberi;Kerajaan Wu
凡|ハン;ボン|おうよ.そ;およ.そ;すべ.て|commonplace;mediocre;ordinary|1|3|biasa saja;biasa-biasa saja;biasa
憩|ケイ|いこ.い;いこ.う|recess;relax;repose|1|16|istirahat;bersantai;istirahat
媛|エン|ひめ|beautiful woman;princess|1|12|wanita cantik;putri
溝|コウ|みぞ|10**32;ditch;drain|1|13|10 pangkat 32;parit;saluran air
恭|キョウ|うやうや.しい|respect;reverent|1|10|menghormati;khidmat
刈|カイ;ガイ|か.る|clip;cut;prune|1|4|menjepit;memotong;memangkas
睡|スイ|ねむ.い;ねむ.る|die;drowsy;sleep|1|13|mati;mengantuk;tidur
錯|サク;シャク||be in disorder;confused;mix|1|16|kacau;bingung;mencampur
伯|ハク||Brazil;chief;count|1|7|Brasil;kepala;menghitung
笹||ささ|(kokuji);bamboo grass|1|11|(kanji buatan Jepang);rumput bambu
穀|コク||cereals;grain|1|14|biji-bijian;butir
陵|リョウ|みささぎ|hill;imperial tomb;mausoleum|1|11|bukit;makam kaisar;makam megah
霧|ブ;ボウ;ム|きり|fog;mist|1|19|kabut;kabut tipis
魂|コン|たま;たましい|soul;spirit|1|14|jiwa;semangat
弊|ヘイ||abuse;breakage;evil|1|15|penyalahgunaan;kerusakan;jahat
妃|ヒ|きさき|princess;queen|1|6|putri;ratu
舶|ハク||liner;ship|1|11|kapal penumpang;kapal
餓|ガ|う.える|hungry;starve;thirst|1|15|lapar;kelaparan;haus
窮|キュウ;キョウ|きわ.まり;きわ.まる;きわ.み|cornered;destitute;hard up|1|15|terpojok;melarat;kesulitan uang
掌|ショウ|たなごころ;てのひら|administer;conduct;manipulate|1|12|mengurus;perilaku;memanipulasi
麗|レイ|うら.らか;うるわ.しい|beautiful;graceful;lovely|1|19|indah;anggun;elok
綾|リン|あや|design;figured cloth;twill|1|14|rancangan;kain bermotif;kain kepar
臭|シュウ|-くさ.い;くさ.い;にお.い|be bright;be fragrant;fragrance|1|9|cerah;harum;keharuman
悦|エツ|よろこ.ばす;よろこ.ぶ|ecstasy;joy;rapture|1|10|kegirangan;sukacita;kegirangan
刃|ジン;ニン|き.る;は;やいば|blade;edge;sword|1|3|bilah;tepi;pedang
縛|バク|しば.る|arrest;bind;restrain|1|16|menangkap;mengikat;menahan
暦|リャク;レキ|こよみ|almanac;calendar|1|14|penanggalan;kalender
宜|ギ|よろ.しい;よろ.しく|best regards;good|1|8|salam hormat;baik
盲|モウ|めくら|blind;blind man;ignoramus|1|8|buta;orang buta;orang bodoh
粋|スイ|いき|chic;choice;cream|1|10|anggun;pilihan;krim
辱|ジョク|はずかし.める|embarrass;humiliate;shame|1|10|mempermalukan;mempermalukan;malu
毅|キ;ギ|つよ.い|strong|1|15|kuat
轄|カツ|くさび|control;wedge|1|17|kendali;pasak
猿|エン|さる|monkey|1|13|monyet
弦|ゲン|つる|bowstring;chord;hypotenuse|1|8|tali busur;akor;sisi miring
稔|ジン;ニン;ネン|みの.る;みのり|harvest;ripen|1|13|panen;matang
窒|チツ||obstruct;plug up|1|11|menghalangi;menyumbat
炊|スイ|-だ.き;た.く|boil;cook|1|8|merebus;memasak
洪|コウ||deluge;flood;vast|1|9|banjir bandang;banjir;luas
摂|ショウ;セツ|おさ.める;かね.る;と.る|absorb;act in addition to;surrogate|1|13|menyerap;merangkap;pengganti
飽|ホウ|あ.かす;あ.きる;あ.く|bored;sated;satiate|1|13|bosan;kenyang;mengenyangkan
冗|ジョウ||superfluous;uselessness|1|4|berlebihan;kesia-siaan
桃|トウ|もも|peach|1|10|persik
狩|シュ|-が.り;か.り;か.る|gather;hunt;raid|1|9|mengumpulkan;berburu;penyerbuan
朱|シュ|あけ|bloody;cinnabar;red|1|6|berdarah;merah cinnabar;merah
渦|カ|うず|eddy;vortex;whirlpool|1|12|pusaran;pusaran;pusaran air
紳|シン||gentleman;good belt;sire|1|11|pria terhormat;sabuk bagus;ayahanda
枢|シュ;スウ|からくり;とぼそ|center of things;door;hinge|1|8|inti persoalan;pintu;engsel
碑|ヒ|いしぶみ|monument;tombstone|1|14|monumen;nisan
鍛|タン|きた.える|discipline;forge;train|1|17|disiplin;menempa;kereta api
刀|トウ|かたな;そり|knife;saber;sword|1|2|pisau;pedang saber;pedang
鼓|コ|つづみ|beat;drum;muster|1|13|memukul;gendang;mengerahkan
裸|ラ|はだか|naked;nude;partially clothed|1|13|telanjang;telanjang;setengah berpakaian
猶|ユ;ユウ|なお|furthermore;still;yet|1|12|lagi pula;masih;belum
塊|カイ;ケ|かたまり;つちくれ|chunk;clod;clot|1|13|bongkah;gumpalan tanah;gumpalan
旋|セン|いばり;め.ぐる|go around;rotation|1|11|berkeliling;perputaran
弓|キュウ|ゆみ|bow;bow (archery, violin)|1|3|busur;busur (panah, biola)
幣|ヘイ|ぬさ|Shinto offerings of cloth;bad habit;cash|1|15|persembahan kain Shinto;kebiasaan buruk;uang tunai
膜|マク||membrane|1|14|selaput
扇|セン|おうぎ|fan;folding fan|1|10|kipas;kipas lipat
腸|チョウ|はらわた;わた|bowels;guts;intestines|1|13|usus;nyali;usus
槽|ソウ|ふね|tank;tub;vat|1|15|tangki;bak;tong besar
慈|ジ|いつく.しむ|mercy|1|13|belas kasihan
楊|ヨウ|やなぎ|willow|1|13|pohon dedalu
伐|カ;ハツ;バツ|う.つ;き.る;そむ.く|attack;fell;punish|1|6|serangan;menebang;menghukum
駿|シュン;スン|すぐ.れる|a fast person;a good horse;speed|1|17|orang yang cepat;kuda bagus;kecepatan
漬|シ|-づ.け;-づけ;つ.かる|moisten;pickling;soak|1|14|membasahi;pengasinan;merendam
糾|キュウ|ただ.す|ask;investigate;twist|1|9|bertanya;menyelidiki;memelintir
亮|リョウ|あきらか|clear;help|1|9|jelas;bantuan
墳|フン||mound;tomb|1|15|gundukan;makam
坪|ヘイ|つぼ|approx. thirty-six sq ft;two-mat area|1|8|sekitar 3,3 meter persegi;luas dua tatami
紺|コン||dark blue;navy|1|11|biru tua;angkatan laut
娯|ゴ||pleasure;recreation|1|10|kesenangan;rekreasi
椿|チュン;チン|つばき|camellia|1|13|bunga kamelia
舌|ゼツ|した|clapper;reed;tongue|1|6|pemukul lonceng;buluh;lidah
羅|ラ|うすもの|Rome;arrange;gauze|1|19|Roma;menata;kain kasa
峡|キョウ;コウ|はざま|gorge;ravine|1|9|ngarai;jurang
俸|ホウ||salary;stipend|1|10|gaji;tunjangan berkala
厘|リン||1/10 bu;1/10 sen;rin|1|9|1/10 bu;1/10 sen;rin
峰|ホウ|ね;みね|peak;summit|1|10|puncak;puncak
圭|ケ;ケイ||angle;corner;edge|1|6|sudut;sudut;tepi
醸|ジョウ|かも.す|brew;cause|1|20|menyeduh;sebab
蓮|レン|はす;はちす|lotus|1|13|teratai
弔|チョウ|とぶら.う;とむら.う|condolences;funeral;mourning|1|4|belasungkawa;pemakaman;berkabung
乙|イツ;オツ|おと-;きのと|duplicate;fishhook radical (no. 5);strange|1|1|duplikat;radikal kail (no. 5);aneh
汁|ジュウ|-しる;しる;つゆ|broth;gravy;juice|1|5|kaldu;kuah daging;jus
尼|ニ|あま|nun|1|5|biksuni
遍|ヘン|あまね.く|everywhere;generally;times|1|12|di mana-mana;pada umumnya;kali
衡|コウ||equilibrium;measuring rod;scale|1|16|keseimbangan;tongkat ukur;timbangan
薫|クン|かお.る|be scented;fragrant;send forth fragrance|1|16|semerbak;harum;menebar harum
猟|リョウ|か.る;かり|bag;game;game-hunting|1|11|tas;permainan;berburu
羊|ヨウ|ひつじ|sheep|1|6|domba
款|カン||article;collusion;friendship|1|12|barang;persekongkolan;persahabatan
閲|エツ|けみ.する|inspection;review;revision|1|15|inspeksi;tinjauan;revisi
偵|テイ||spy|1|11|mata-mata
喝|カツ||hoarse;scold|1|11|serak;memarahi
敢|カン|あ.えず;あ.えて;あ.えない|bold;brave;daring|1|12|berani;berani;nekat
胎|タイ||uterus;womb|1|9|rahim;rahim
酵|コウ||fermentation|1|14|fermentasi
憤|フン|いきどお.る|anger;aroused;be indignant|1|15|amarah;terbangkitkan;geram
豚|トン|ぶた|pig;pork|1|11|babi;daging babi
遮|シャ|さえぎ.る|intercept;interrupt;obstruct|1|14|mencegat;menyela;menghalangi
扉|ヒ|とびら|front door;front page;title page|1|12|pintu depan;halaman depan;halaman judul
硫|リュウ||sulphur|1|12|belerang
赦|シャ||forgiveness;pardon|1|11|pengampunan;pengampunan
窃|セツ|ぬす.む;ひそ.か|hushed;private;secret|1|9|senyap;pribadi;rahasia
泡|ホウ|あわ|bubbles;foam;froth|1|8|gelembung;busa;buih
瑞|スイ;ズイ|しるし;みず-|congratulations|1|13|selamat
又|ユウ|また;また-;また.の-|furthermore;on the other hand;or again|1|2|lagi pula;di sisi lain;atau lagi
慨|ガイ|なげ.く|be sad;lament;rue|1|13|sedih;meratap;menyesali
紡|ボウ|つむ.ぐ|spinning|1|10|pemintalan
恨|コン|うら.む;うら.めしい|bear a grudge;hatred;malice|1|9|menyimpan dendam;kebencian;niat jahat
肪|ボウ||fat;obese|1|8|gemuk;gemuk sekali
扶|フ|たす.ける|aid;assist;help|1|7|bantuan;membantu;bantuan
戯|ギ;ゲ|ざ.れる;じゃ.れる;たわむ.れる|frolic;play;sport|1|15|bercanda riang;bermain;olahraga
伍|ゴ|いつつ|file;five;five-man squad|1|6|berkas;lima;regu lima orang
忌|キ|い.まわしい;い.み;い.む|abhor;death anniversary;detestable|1|7|membenci;haul;menjijikkan
濁|ジョク;ダク|にご.す;にご.る|impurity;nigori;uncleanness|1|16|kotoran;tanda nigori;kenajisan
奔|ホン|はし.る|bustle;run|1|8|kesibukan;berlari
斗|ト;トウ||Big Dipper;dots and cross radical (no. 68);sake dipper|1|4|Bintang Biduk;radikal titik dan silang (no. 68);gayung sake
蘭|ラ;ラン||Holland;orchid|1|19|Belanda;anggrek
迅|ジン||fast;swift|1|6|cepat;gesit
肖|ショウ|あやか.る|resemblance|1|7|kemiripan
鉢|ハチ;ハツ||bowl;crown;pot|1|13|mangkuk;mahkota;panci
朽|キュウ|く.ちる|decay;remain in seclusion;rot|1|6|membusuk;berdiam menyepi;membusuk
殻|カク;コク;バイ|から;がら|husk;nut shell|1|11|sekam;cangkang kacang
享|キョウ;コウ|う.ける|answer (phone);catch;enjoy|1|8|menjawab telepon;menangkap;menikmati
秦|シン|はた|Manchu dynasty;name given to naturalized foreigners|1|10|Dinasti Manchu;nama bagi warga naturalisasi
茅|ボウ;ミョウ|かや;ちがや|miscanthus reed|1|8|alang-alang susuki
藩|ハン||clan;enclosure|1|18|marga;pagar keliling
沙|サ;シャ|すな;よなげる|sand|1|7|pasir
輔|フ;ホ|たす.ける|help|1|14|bantuan
媒|バイ|なこうど|go-between;mediator|1|12|perantara;penengah
鶏|ケイ|とり;にわとり|chicken|1|19|ayam
禅|セン;ゼン|しずか;ゆず.る|Zen;silent meditation|1|13|Zen;meditasi hening
嘱|ショク|しょく.する;たの.む|entrust;request;send a message|1|15|memercayakan;permintaan;mengirim pesan
胴|ドウ||hub of wheel;hull (ship);torso|1|10|poros roda;lambung kapal;batang tubuh
迭|テツ||alternation;transfer|1|8|pergantian;memindahkan
挿|ソウ|さ.す;はさ.む|graft;insert;put in|1|10|cangkok;menyisipkan;memasukkan
嵐|ラン|あらし|storm;tempest|1|12|badai;badai dahsyat
椎|スイ;ツイ|う.つ;つち|chinquapin;mallet;spine|1|12|pohon shii;palu kayu;tulang belakang
絹|ケン|きぬ|silk|1|13|sutra
陪|バイ||accompany;attend on;follow|1|11|menemani;melayani;mengikuti
剖|ボウ||divide|1|10|membagi
譜|フ||genealogy;music;musical score|1|19|silsilah;musik;partitur
郁|イク||cultural progress;perfume|1|9|kemajuan budaya;parfum
悠|ユウ||distant;leisure;long time|1|11|jauh;waktu luang;waktu lama
淑|シュク|しと.やか|gentle;graceful;pure|1|11|lembut;anggun;murni
帆|ハン|ほ|sail|1|6|layar
暁|キョウ;ギョウ|あかつき;さと.る|dawn;daybreak;in the event|1|12|fajar;dini hari;jika terjadi
傑|ケツ|すぐ.れる|excellence;greatness|1|13|keunggulan;kebesaran
楠|ゼン;ダン;ナン|くす;くすのき|camphor tree|1|13|pohon kamper
笛|テキ|ふえ|bagpipe;clarinet;flute|1|11|bagpipa;klarinet;seruling
玲|レイ||sound of jewels|1|9|dentingan permata
奴|ド|やっこ;やつ|fellow;guy;manservant|1|5|orang;orang;pelayan pria
錠|ジョウ||fetters;lock;shackles|1|16|belenggu;kunci;belenggu
拳|ケン;ゲン|こぶし|fist|1|10|kepalan
翔|ショウ|かけ.る;と.ぶ|fly;soar|1|12|terbang;membumbung
遷|セン|うつ.す;うつ.る;みやこがえ|change;move;transition|1|15|perubahan;bergerak;peralihan
拙|セツ|つたな.い|bungling;clumsy;unskillful|1|8|ceroboh;kikuk;tidak cakap
侍|シ;ジ|さむらい;はべ.る|samurai;serve;wait upon|1|8|samurai;melayani;melayani
尺|シャク;セキ|さし|Japanese foot;measure;rule|1|4|shaku;mengukur;aturan
峠||とうげ|(kokuji);climax;crest|1|9|(kanji buatan Jepang);puncak;lambang keluarga
篤|トク|あつ.い|cordial;deliberate;fervent|1|16|ramah;sengaja;bersemangat
肇|ジョウ;チョウ;トウ|はじ.める;はじめ|beginning|1|14|permulaan
渇|カツ|かわ.く|dry up;parch;thirst|1|11|mengering;memanggang kering;haus
叔|シュク||uncle;youth|1|8|paman;masa muda
雌|シ|め-;めす;めん|female;feminine|1|14|perempuan;feminin
亨|キョウ;コウ;ホウ|とお.る|go smoothly;pass through|1|7|berjalan lancar;melewati
堪|カン;タン|こた.える;こら.える;た.える|endure;resist;support|1|12|bertahan;melawan;dukungan
叙|ジョ|つい.ず;ついで|confer;describe;narrate|1|9|berunding;menggambarkan;menuturkan
酢|サク|す|acid;sour;tart|1|12|asam;masam;asam tajam
吟|ギン||recital;singing;versify|1|7|resital;nyanyian;menyair
逓|テイ|かわ.る;たがいに|in turn;relay;sending|1|10|bergiliran;estafet;pengiriman
嶺|リョウ;レイ|みね|peak;summit|1|17|puncak;puncak
甚|ジン|はなは.だ;はなは.だしい|exceedingly;great;tremendously|1|9|amat sangat;hebat;luar biasa
喬|キョウ|たか.い|boasting;high|1|12|kesombongan;tinggi
崇|スウ|あが.める|adore;respect;revere|1|11|memuja;menghormati;memuliakan
漆|シツ|うるし|lacquer;seven;varnish|1|14|pernis;tujuh;pernis
岬|コウ|みさき|cape;headland;promontory|1|8|tanjung;tanjung;tanjung
癖|ヘキ|くせ;くせ.に|fault;habit;kink|1|18|kesalahan;kebiasaan;lekukan
愉|ユ|たの.しい;たの.しむ|happy;pleasure;rejoice|1|12|bahagia;kesenangan;bersukacita
寅|イン|とら|3-5AM;sign of the tiger;third sign of Chinese zodiac|1|11|pukul 03-05;shio macan;shio ketiga
礁|ショウ||reef;sunken rock|1|17|karang;karang terendam
乃|アイ;ダイ;ナイ|すなわ.ち;なんじ;の|accordingly;from;possessive particle|1|2|karena itu;dari;partikel kepemilikan
洲|シュウ;ス|しま|continent;country;island|1|9|benua;negara;pulau
屯|トン|たむろ|barracks;camp;police station|1|4|barak;perkemahan;kantor polisi
樺|カ|かば;かんば|birch;dark red|1|14|pohon birch;merah gelap
槙|シン;テン|こずえ;まき|ornamental evergreen;twig|1|14|tanaman hias hijau abadi;ranting
姻|イン||marry;matrimony|1|9|menikah;pernikahan
巌|ガン|いわ;いわお;けわ.しい|boulder;crag;rock|1|20|batu besar;karang terjal;batu
擬|ギ|まが.い;もど.き|aim (a gun) at;imitate;mimic|1|17|membidik;meniru;menirukan
塀|ヘイ;ベイ||(kokuji);fence;wall|1|12|(kanji buatan Jepang);pagar;dinding
唇|シン|くちびる|lips|1|10|bibir
睦|ボク;モク|むつ.ぶ;むつ.まじい;むつ.む|friendly;harmonious;intimate|1|13|ramah;harmonis;akrab
閑|カン||leisure|1|12|waktu luang
胡|ウ;コ;ゴ|なんぞ|barbarian;foreign|1|9|orang barbar;asing
幽|ユウ|かす.か;くら.い;しろ.い|calm;confine to a room;dark|1|9|tenang;mengurung di kamar;gelap
峻|シュン|けわ.しい;たか.い|high;steep|1|10|tinggi;curam
曹|ソウ;ゾウ||comrade;fellow;office|1|11|kawan seperjuangan;orang;kantor
詠|エイ|うた.う;よ.む|composing;poem;recitation|1|12|penggubahan;puisi;pembacaan
卑|ヒ|いや.しい;いや.しむ;いや.しめる|base;despise;lowly|1|9|dasar;memandang rendah;hina
侮|ブ|あなず.る;あなど.る|contempt;despise;make light of|1|8|penghinaan;memandang rendah;meremehkan
鋳|イ;シュ;シュウ|い.る|casting;mint|1|15|pengecoran;percetakan uang
抹|マツ||erase;paint;rub|1|8|menghapus;cat;menggosok
尉|イ;ジョウ||jailer;military officer;old man|1|11|sipir;perwira;orang tua laki-laki
槻|キ|つき|Zelkova tree|1|15|pohon keyaki
隷|レイ|したが.う;しもべ|criminal;follower;prisoner|1|16|penjahat;pengikut;narapidana
禍|カ|わざわい|calamity;curse;evil|1|13|malapetaka;kutukan;jahat
蝶|チョウ||butterfly|1|15|kupu-kupu
酪|ラク||broth;dairy products;fruit juice|1|13|kaldu;produk susu;sari buah
茎|キョウ;ケイ|くき|stalk;stem|1|8|tangkai;batang
帥|スイ||commander;governor;leading troops|1|9|panglima;gubernur;memimpin pasukan
逝|セイ|い.く;ゆ.く|departed;die|1|10|telah tiada;mati
汽|キ||steam;vapor|1|7|uap;uap
琢|タク|みが.く|polish|1|11|memoles
匿|トク|かくま.う|hide;shelter;shield|1|10|menyembunyikan;tempat berteduh;perisai
襟|キン|えり|collar;lapel;neck|1|18|kerah;kerah jas;leher
蛍|ケイ|ほたる|firefly;lightning-bug|1|11|kunang-kunang;kunang-kunang
蕉|ショウ||banana;plantain|1|15|pisang;pisang raja
寡|カ||few;minority;widow|1|14|sedikit;minoritas;janda
琉|リュウ;ル||gem;lapis lazuli;precious stone|1|11|permata;lazuardi;batu mulia
痢|リ||diarrhea|1|12|diare
庸|ヨウ||commonplace;employment;ordinary|1|11|biasa saja;pekerjaan;biasa
朋|ホウ|とも|companion;friend|1|8|teman seperjalanan;teman
坑|コウ||hole;pit|1|7|lubang;lubang
藍|ラン|あい|indigo|1|18|nila
賊|ゾク||burglar;rebel;robber|1|13|pencuri;memberontak;perampok
搾|サク|しぼ.る|squeeze|1|13|memeras
畔|ハン|あぜ;くろ;ほとり|levee;paddy ridge|1|10|tanggul;pematang sawah
遼|リョウ||distant|1|15|jauh
唄|バイ|うた;うた.う|ballad;song|1|10|balada;lagu
孔|ク;コウ|あな|cavity;exceedingly;great|1|4|rongga;amat sangat;hebat
橘|キツ|たちばな|mandarin orange|1|16|jeruk mandarin
漱|シュウ;ス;ソウ|うがい;くちすす.ぐ;くちそそ.ぐ|gargle;rinse mouth|1|14|berkumur;berkumur
呂|リョ;ロ|せぼね|backbone;spine|1|7|tulang punggung;tulang belakang
拷|ゴウ||beat;torture|1|9|memukul;penyiksaan
嬢|ジョウ|むすめ|Miss;daughter;girl|1|16|Nona;anak perempuan;gadis
苑|エン;オン|う.つ;その|farm;garden;park|1|8|ladang;taman;taman
巽|ソン|たつみ|southeast|1|12|tenggara
杜|ズ;ト;トウ|ふさ.ぐ;もり;やまなし|grove;woods|1|7|rumpun pohon;hutan kecil
渓|ケイ|たに;たにがわ|mountain stream;valley|1|11|sungai gunung;lembah
翁|オウ|おきな|venerable old man|1|10|orang tua yang dihormati
廉|レン||account;bargain;charge|1|13|rekening;tawar-menawar;biaya
謹|キン|つつし.む|discreet;humbly;reverently|1|17|bijak menahan diri;dengan rendah hati;dengan khidmat
瞳|トウ;ドウ|ひとみ|pupil (of eye)|1|17|pupil mata
湧|ユ;ユウ;ヨウ|わ.く|boil;breed;ferment|1|12|merebus;membiakkan;memfermentasi
欣|キン;コン;ゴン|よろこ.び;よろこ.ぶ|rejoice;take pleasure in|1|8|bersukacita;menikmati
窯|ヨウ|かま|furnace;kiln;oven|1|15|tungku;tungku pembakaran;oven
褒|ホウ|ほ.める|extol;praise|1|15|memuji tinggi;pujian
醜|シュウ|しこ;みにく.い|bad looking;shame;ugly|1|17|berwajah buruk;malu;buruk rupa
升|ショウ|ます|1.8 liter;measuring box|1|4|1,8 liter;kotak takar
殉|ジュン||follow by resigning;martyrdom|1|10|ikut mengundurkan diri;kesyahidan
煩|ハン;ボン|うるさ.い;うるさ.がる;わずら.う|annoy;anxiety;ill|1|13|mengganggu;kecemasan;sakit
巴|ハ|うずまき;ともえ|comma-design|1|4|motif tomoe
禎|テイ|さいわ.い|auspicious;blessed;good fortune|1|13|membawa untung;diberkati;nasib baik
劾|ガイ||censure;criminal investigation|1|8|mencela;penyidikan
堕|ダ|お.ちる;くず.す;くず.れる|degenerate;descend to;lapse into|1|12|merosot;turun ke;jatuh ke dalam
租|ソ||borrowing;crop tax;tariff|1|10|peminjaman;pajak hasil bumi;tarif
稜|リョウ;ロウ|いつ;かど|angle;corner;edge|1|13|sudut;sudut;tepi
桟|サン;セン|かけはし|bolt (door);cleat;frame|1|10|palang pintu;penambat;bingkai
倭|イ;ワ|したが.う;やまと|Yamato;ancient Japan|1|10|Yamato;Jepang kuno
婿|セイ|むこ|bridegroom;son-in-law|1|12|pengantin laki-laki;menantu laki-laki
慕|ボ|した.う|adore;love dearly;pining|1|14|memuja;menyayangi sepenuh hati;merindu
斐|イ;ヒ||beautiful;patterned|1|12|indah;bermotif
罷|ヒ|まか.り-;や.める|go;leave;quit|1|15|pergi;pergi;berhenti
矯|キョウ|た.める|control;correct;cure|1|17|kendali;benar;menyembuhkan
某|ボウ|それがし;なにがし|a certain;one;so-and-so|1|9|suatu;satu;si anu
囚|シュウ|とら.われる|arrest;captured;catch|1|5|menangkap;tertangkap;menangkap
魁|カイ|かしら;さきがけ|charging ahead of others|1|14|melesat mendahului
虹|コウ|にじ|rainbow|1|9|pelangi
鴻|コウ;ゴウ|おおがり;おおとり;ひしくい|great;large;large bird|1|17|hebat;besar;burung besar
泌|ヒ;ヒツ||flow;ooze;penetrate|1|8|mengalir;merembes;menembus
於|オ;ヨ|ああ;お.ける;おい.て|as for;at;in|1|8|adapun;di;di dalam
赳|キュウ||strong and brave|1|10|kuat dan berani
漸|ゼン|すす.む;やや;ようや.く|barely;finally;gradually advancing|1|14|nyaris tidak;akhirnya;maju bertahap
蚊|ブン|か|mosquito|1|10|nyamuk
葵|キ|あおい|hollyhock|1|12|bunga hollyhock
厄|ヤク||bad luck;disaster;misfortune|1|4|sial;bencana;kemalangan
藻|ソウ|も|duckweed;seaweed|1|19|kiambang;rumput laut
禄|ロク|さいわ.い;ふち|allowance;fief;grant|1|12|tunjangan;wilayah kekuasaan;memberikan
孟|ボウ;ミョウ;モウ|かしら|beginning;chief|1|8|permulaan;kepala
嫡|チャク;テキ||direct descent (non-bastard);legitimate wife|1|14|keturunan sah;istri sah
尭|ギョウ|たか.い|far;high|1|8|jauh;tinggi
嚇|カク|おど.す|dignity;majesty;menacing|1|17|martabat;keagungan;mengancam
巳|シ|み|9-11AM;sign of the snake or serpent;sixth sign of Chinese zodiac|1|3|pukul 09-11;shio ular;shio keenam
凸|トツ|でこ|beetle brow;convex;uneven|1|5|alis tebal menonjol;cembung;tidak rata
暢|チョウ|のび.る|stretch|1|14|meregang
韻|イン||elegance;rhyme;tone|1|19|keanggunan;rima;nada
霜|ソウ|しも|frost|1|17|embun beku
硝|ショウ||nitrate;saltpeter|1|12|nitrat;sendawa
勅|チョク|いまし.める;みことのり|imperial order|1|9|titah kaisar
芹|キン|せり|parsley|1|7|peterseli
杏|アン;キョウ;コウ|あんず|apricot|1|7|aprikot
棺|カン||casket;coffin|1|12|peti;peti mati
儒|ジュ||Confucian|1|16|Konfusius
鳳|フウ;ホウ||male mythical bird|1|14|burung mitos jantan
馨|キョウ;ケイ|かお.る;かおり|balmy;favourable;fragrant|1|20|sejuk nyaman;menguntungkan;harum
慧|エ;ケイ|さとい|wise|1|15|bijak
愁|シュウ|うれ.い;うれ.える|be anxious;distress;grieve|1|13|cemas;kesusahan;berduka
楼|ロウ|たかどの|high building;lookout;watchtower|1|13|gedung tinggi;pengintai;menara pengawas
彬|ヒン;フン|あき.らか;うるわ.しい|gentle;refined|1|11|lembut;terhalus
匡|オウ;キョウ|すく.う;ただ.す|assist;correct;save|1|6|membantu;benar;menyelamatkan
眉|ビ;ミ|まゆ|eyebrow|1|9|alis
欽|キン;コン|つつし.む|long for;respect;revere|1|12|merindukan;menghormati;memuliakan
薪|シン|たきぎ;まき|firewood;fuel;kindling|1|16|kayu bakar;bahan bakar;kayu pemantik
褐|カツ||brown;woollen kimono|1|13|cokelat;kimono wol
賜|シ|たま.う;たまわ.る;たも.う|boon;gift;grant|1|15|anugerah;hadiah;memberikan
嵯|サ;シ||craggy;rugged;steep|1|13|terjal;bergerigi kasar;curam
綜|ソウ|おさ.める;す.べる|rule;synthesize|1|14|aturan;mensintesis
繕|ゼン|つくろ.う|adjust;darning;mend|1|18|menyetel;menisik;memperbaiki
栓|セン||bolt;bung;cork|1|10|baut;sumbat;gabus
翠|スイ|かわせみ;みどり|green;kingfisher|1|14|hijau;raja udang
鮎|デン;ネン|あゆ;なまず|freshwater trout;smelt|1|16|ikan ayu;melebur
榛|シン;ハン|はしばみ;はり|filbert;hazelnut|1|14|kemiri hazel;kemiri hazel
凹|オウ|くぼ.む;へこ.む;ぼこ|concave;hollow;sunken|1|5|cekung;berongga;tenggelam
艶|エン|あで.やか;つや;つや.めく|captivating;charm;colorful|1|19|memesona;pesona;berwarna-warni
惣|ソウ|すべ.て|all|1|12|semua
蔦|チョウ|つた|ivy;vine|1|14|tanaman rambat;sulur
錬|レン|ね.る|drill;polish;refine|1|16|latihan;memoles;memurnikan
隼|シュン;ジュン|はやぶさ|falcon|1|10|elang
渚|ショ|なぎさ|beach;shore;strand|1|11|pantai;pantai;untai
衷|チュウ||heart;inmost;inside|1|9|hati;paling dalam;di dalam
逐|チク||accomplish;attain;chase|1|10|menyelesaikan;mencapai;mengejar
斥|セキ|しりぞ.ける|recede;reject;repel|1|5|surut;menolak;menangkis
稀|キ;ケ|まばら;まれ|dilute (acid);phenomenal;rare|1|12|mengencerkan (asam);luar biasa;langka
芙|フ||Mt Fuji;lotus|1|7|Gunung Fuji;teratai
詔|ショウ|みことのり|imperial edict|1|12|maklumat kaisar
皐|コウ|さつき|shore;swamp|1|11|pantai;rawa
雛|ジュ;ス;スウ|ひな;ひよこ|chick;doll;duckling|1|18|anak ayam;boneka;anak bebek
惟|イ;ユイ|おも.うに;おも.んみる;これ|consider;reflect;think|1|11|mempertimbangkan;memantulkan;berpikir
佑|ウ;ユウ|たす.ける|assist;help|1|7|membantu;bantuan
耀|ヨウ|かがや.く;ひかり|gleam;shine;sparkle|1|20|kilau;bersinar;berkilauan
黛|タイ|まゆずみ|blackened eyebrows|1|16|alis yang dihitamkan
渥|アク|あつ.い;うるお.う|kindness;moisten|1|12|kebaikan;membasahi
憧|ショウ;トウ;ドウ|あこが.れる|admire;adore;aspire to|1|15|mengagumi;memuja;mendambakan
宵|ショウ|よい|early night;evening;wee hours|1|10|awal malam;petang;dini hari
妄|ボウ;モウ|みだ.りに|delusion;reckless;unnecessarily|1|6|khayalan;sembrono;tanpa perlu
惇|シュン;ジュン;トン|あつ.い|considerate;kind;sincere|1|11|penuh tenggang rasa;baik hati;tulus
脩|シュウ|おさ.める;なが.い;ほじし|dried meat|1|11|dendeng
甫|フ;ホ|はじ.めて|for the first time;not until|1|7|untuk pertama kali;baru setelah
酌|シャク|く.む|bar-tending;draw (water);ladle|1|10|meracik minuman;menimba air;gayung
蚕|サン;テン|かいこ;こ|silkworm|1|10|ulat sutra
嬉|キ|うれ.しい;たの.しむ|glad;pleased;rejoice|1|15|senang;senang;bersukacita
蒼|ソウ|あお.い|blue;pale|1|13|biru;pucat
暉|キ|かが.やく|light;shine|1|13|cahaya;bersinar
頒|ハン|わ.かつ;わ.ける|disseminate;distribute;partition|1|13|menyebarluaskan;membagikan;sekat
只|シ|ただ|free;in addition;only|1|5|bebas;selain itu;hanya
肢|シ||arms & legs;limb|1|8|tangan dan kaki;anggota badan
檀|タン;ダン|まゆみ|cedar;sandalwood;spindle tree|1|17|pohon aras;cendana;pohon mayumi
凱|カイ;ガイ|かちどき;やわらぐ|victory song|1|12|lagu kemenangan
彗|エ;ケイ;スイ|ほうき|comet|1|11|komet
謄|トウ||copy;mimeograph|1|17|salinan;stensil
梓|シ|あずさ|catalpa tree;woodblock printing|1|11|pohon katalpa;cetak balok kayu
丑|チュウ|うし|1-3AM;second sign of Chinese zodiac;sign of the ox or cow|1|4|pukul 01-03;shio kedua;shio kerbau
嗣|シ||heir;succeed|1|13|ahli waris;berhasil
叶|キョウ|かな.う;かな.える|answer;grant|1|5|jawaban;memberikan
汐|セキ|うしお;しお;せい|eventide;opportunity;salt water|1|6|senja;peluang;air asin
絢|ケン||brilliant fabric design|1|12|motif kain yang cemerlang
朔|サク|ついたち|conjunction (astronomy);first day of month;north|1|10|konjungsi (astronomi);tanggal satu;utara
伽|カ;ガ;キャ|とぎ|attending;entertainer;nursing|1|7|kehadiran;penghibur;perawatan
畝|ホ;ボウ;ム|うね;せ|furrow;rib;ridge|1|10|alur bajak;tulang rusuk;punggung bukit
抄|ショウ||copy;extract;selection|1|7|salinan;menyarikan;pemilihan
爽|ソウ|あき.らか;さわ.やか;たがう|bracing;clear;refreshing|1|11|menyegarkan;jelas;menyegarkan
黎|リ;レイ|くろ.い|black;dark;many|1|15|hitam;gelap;banyak
惰|ダ||laziness;lazy|1|12|kemalasan;malas
蛮|バン|えびす|barbarian|1|12|orang barbar
冴|コ;ゴ|こお.る;さ.える;ひ.える|be clear;cold;serene|1|7|jernih;dingin;tenteram
旺|オウ;キョウ;ゴウ|うつくし.い;かがや.き;さかん|beautiful;flourishing;successful|1|8|indah;makmur;sukses
萌|ホウ|きざ.し;きざ.す;めばえ|bud;malt;show symptoms of|1|11|tunas;ragi malt;menunjukkan gejala
偲|サイ;シ|しの.ぶ|recollect;remember|1|11|mengenang;mengingat
壱|イチ;イツ|ひとつ|one (in documents)|1|7|satu (dalam dokumen)
瑠|リュウ;ル||lapis lazuli|1|14|lazuardi
允|イン|じょう;まこと.に;ゆるす|license;permit;sincerity|1|4|izin;izin;ketulusan
侯|コウ||daimyo;lord;marquis|1|9|daimyo;tuan;markis
蒔|シ;ジ|う.える;ま.く|sow (seeds)|1|13|menabur benih
鯉|リ|こい|carp|1|18|ikan mas
弧|コ||arc;arch;bow|1|9|busur;lengkung;busur
遥|ヨウ|はる.か|distant;far off;long ago|1|12|jauh;jauh sekali;dahulu kala
舜|シュン||althea;rose of Sharon;type of morning glory|1|13|bunga althea;bunga mugunghwa;sejenis bunga telang
瑛|エイ||crystal;sparkle of jewelry|1|12|kristal;kilau perhiasan
附|フ|つ.く;つ.ける|affixed;append;attach|1|8|terlampir;melampirkan;memasang
彪|ヒュウ;ヒョウ|あや|mottled;patterned;small tiger|1|11|berbintik;bermotif;macan kecil
卯|ボウ;モウ|う|5-7AM;east;fourth sign of Chinese zodiac|1|5|pukul 05-07;timur;shio keempat
但|タン|ただ.し|but;however|1|7|tetapi;namun
綺|キ|あや|beautiful;figured cloth|1|14|indah;kain bermotif
芋|ウ|いも|potato|1|6|kentang
茜|セン|あかね|Turkey red;madder;red dye|1|9|merah Turki;akar mengkudu merah;pewarna merah
凌|リョウ|しの.ぐ|defy;endure;keep (rain)out|1|10|menantang;bertahan;menahan hujan
皓|コウ|しろ.い;ひか.る|clear;white|1|12|jelas;putih
洸|コウ||sparkling water|1|9|air berkarbonasi
毬|キュウ|いが;まり|ball;burr|1|11|bola;duri
婆|バ|ばあ;ばば|grandma;old woman;wet nurse|1|11|nenek;orang tua perempuan;ibu susu
緋|ヒ|あか;あけ|cardinal;scarlet|1|14|utama;merah menyala
鯛|チョウ|たい|red snapper;sea bream|1|19|ikan kakap merah;ikan kakap tai
怜|リョウ;レイ;レン|あわ.れむ;さと.い|wise|1|8|bijak
邑|ユウ|むら|right village radical (no. 163);rural community;village|1|7|radikal desa kanan (no. 163);masyarakat desa;desa
倣|ホウ|なら.う|emulate;imitate|1|10|meniru;meniru
碧|ヒャク;ヘキ||blue;green|1|14|biru;hijau
啄|タク;ツク;トク|ついば.む;つつ.く|peck;pick up|1|10|mematuk;memungut
穣|ジョウ|ゆたか;わら|10**28;good crops;prosperity|1|18|10 pangkat 28;panen bagus;kemakmuran
酉|ユウ|とり|5-7PM;bird;sake radical (no. 164)|1|7|pukul 17-19;burung;radikal sake (no. 164)
悌|ダイ;テイ||serving our elders|1|10|berbakti pada orang tua
倹|ケン|つづまやか;つま.しい|economy;frugal;thrifty|1|10|ekonomi;hemat;hemat
柚|ジク;ユ;ユウ|ゆず|citron|1|9|jeruk sitrun
繭|ケン|きぬ;まゆ|cocoon|1|18|kepompong
且|ショ;ショウ;ソ|か.つ|also;furthermore;moreover|1|5|juga;lagi pula;lagi pula
丙|ヘイ|ひのえ|3rd;3rd calendar sign;third class|1|5|ketiga;tanda kalender ke-3;kelas tiga
丞|ショウ;ジョウ|すく.う;たす.ける|help|1|6|bantuan
亥|カイ;ガイ|い|9-11PM;sign of the hog;twelfth sign of the Chinese zodiac|1|6|pukul 21-23;shio babi;shio kedua belas
亦|エキ;ヤク|また|again;also|1|6|lagi;juga
伎|キ;ギ|わざ;わざおぎ|deed;skill|1|6|perbuatan;keterampilan
伶|リョウ;レイ|わざおぎ|actor|1|7|aktor
侃|カン|つよ.い|just;peace-loving;righteous|1|8|adil;cinta damai;lurus hati
侑|ウ;ユウ|すす.める;たす.ける|urge to eat|1|8|mempersilakan makan
倖|コウ|さいわ.い;しあわ.せ|happiness;luck|1|10|kebahagiaan;keberuntungan
冶|ヤ|い.る|melting;smelting|1|7|peleburan;peleburan
凜|リン|きびし.い|cold;severe;strict|1|15|dingin;keras;ketat
凪||な.ぐ;なぎ|(kokuji);calm;lull|1|6|(kanji buatan Jepang);tenang;reda sejenak
勁|ケイ|つよ.い|strong|1|9|kuat
勺|シャク||dip;ladle;one tenth of a go|1|3|mencelupkan;gayung;sepersepuluh go
匁||め;もんめ|(kokuji);3.75 grams;monme|1|4|(kanji buatan Jepang);3,75 gram;monme
叡|エイ|あき.らか|imperial;intelligence|1|16|kekaisaran;kecerdasan
吏|リ||an official;officer|1|6|pejabat;petugas
哉|サイ|かな;や|alas;exclamation mark;how|1|9|sayang sekali;tanda seru;bagaimana
塑|ソ|でく|model;molding|1|13|model;lis hias
墾|コン|は.る;ひら.く|ground-breaking;open up farmland|1|16|peletakan batu pertama;membuka lahan pertanian
奎|キ;ケイ||god of literature;star|1|9|dewa sastra;bintang
宥|ユウ|なだ.める;ゆる.す|calm;pacify;soothe|1|9|tenang;menenangkan;menenangkan
崚|リョウ||mountains towering in a row|1|11|barisan gunung menjulang
嵩|シュウ;スウ|かさ;かさ.む;たか.い|be aggravated;grow bulky;grow worse|1|13|memburuk;membesar;memburuk
弐|ジ;ニ|そえ;ふた.つ|II;second;two|1|6|II;detik;dua
恕|ショ;ジョ|ゆる.す|excuse;forgive;tolerate|1|10|alasan;memaafkan;menoleransi
捷|ショウ;ソウ|はや.い|fast;victory|1|11|cepat;kemenangan
捺|ダツ;ナツ|お.す;さ.す|affix a seal;press;print|1|11|membubuhkan cap;menekan;mencetak
斤|キン||1.32 lb;axe;axe radical (no. 69)|1|4|1,32 pon;kapak;radikal kapak (no. 69)
旦|タン;ダン|あき.らか;あきら;あさ|dawn;daybreak;morning|1|5|fajar;dini hari;pagi
昂|コウ;ゴウ|あ.がる;たか.い;たか.ぶる|rise|1|8|naik
昴|コウ;ボウ|すばる|the Pleiades|1|9|gugus Pleiades
晏|アン|おそ.い|late;quiet;sets (sun)|1|10|terlambat;tenang;terbenam
晟|ジョウ;セイ|あきらか|clear|1|10|jelas
晨|シン|あさ;あした;とき|early;morning|1|11|awal;pagi
朕|チン||imperial we;majestic plural|1|10|kami (kaisar);jamak keagungan
柊|シュ;シュウ|ひいらぎ|holly|1|9|holi
柾||まさ;まさき;まさめ|(kokuji);spindle tree;straight grain|1|9|(kanji buatan Jepang);pohon mayumi;serat lurus
栞|カン|しおり|bookmark;guidebook|1|10|pembatas buku;buku panduan
梢|ショウ|くすのき;こずえ|treetops;twig|1|11|pucuk pohon;ranting
梧|ゴ|あおぎり|Chinese parasol tree;phoenix tree|1|11|pohon parasol Tiongkok;pohon paulownia
椋|リョウ|むく|grey starling;type of deciduous tree|1|12|jalak kelabu;sejenis pohon peluruh
椰|ヤ|やし|coconut tree|1|13|pohon kelapa
楓|フウ|かえで|maple|1|13|maple
汰|タ;タイ|おご.る;にご.る;よな.げる|filtering;luxury;sieving|1|7|penyaringan;kemewahan;penyaringan
洵|シュン;ジュン|の.ぶ;まこと.に|alike;truth|1|9|sama;kebenaran
滉|コウ|ひろ.い|deep and broad (water)|1|13|dalam dan luas
澪|レイ|みお|shipping channel;water route|1|16|alur pelayaran;jalur air
濫|ラン|みだ.りがましい;みだ.りに|excessive;overflow;spread out|1|18|berlebihan;meluap;membentang
熙|キ|あきらか;かわ.く;たのし.む|bright;merry;prosperous|1|15|terang;riang;makmur
燎|リョウ|かがりび|bonfire;burn|1|16|api unggun;membakar
燦|サン|あき.らか;きら.めく;きらめ.く|brilliant|1|17|cemerlang
燿|ヨウ|かがや.く;ひかり|shine|1|18|bersinar
爵|シャク||baron;court rank;peerage|1|17|baron;pangkat istana;kebangsawanan
爾|ジ;ニ|おれ;しか;しかり|second person;thou;you|1|14|orang kedua;engkau;kamu
玖|キュウ;ク||beautiful black jewel;nine|1|7|permata hitam yang indah;sembilan
琳|リン||jewel;tinkling of jewelry|1|12|permata;denting perhiasan
瑚|コ;ゴ||ancestral offering receptacle;coral|1|13|wadah sesaji leluhur;karang
瑳|サ|みが.く|artful smile;brilliant white luster of a gem;polish|1|14|senyum memikat;kilau putih permata;memoles
瑶|ヨウ|たま|beautiful as a jewel|1|13|indah bagai permata
璃|リ||glassy;lapis lazuli|1|15|bening;lazuardi
痘|トウ||pox;smallpox|1|12|cacar;cacar
眸|ボウ;ム|ひとみ|pupil of the eye|1|11|pupil mata
瞭|リョウ|あきらか|clear|1|17|jelas
碩|セキ|おお.きい|eminent;great;large|1|14|termasyhur;hebat;besar
竣|シュン;ドウ|おわ.る;わらべ;わらわ|end;finish|1|12|akhir;menyelesaikan
笙|ショウ;ソウ|ふえ|a reed instrument|1|11|alat musik tiup buluh
箇|カ;コ||counter for articles|1|14|penggolong barang
紗|サ;シャ|うすぎぬ|gauze;gossamer|1|10|kain kasa;kain tipis melayang
紬|チュウ|つむ.ぐ;つむぎ|pongee (a knotted silk cloth)|1|11|kain sutra tsumugi
絃|ゲン|いと|cord;samisen music;string|1|11|tali;musik shamisen;tali
綸|カン;リン|いと|silk cloth;thread|1|14|kain sutra;benang
耗|コウ;モウ||decrease|1|10|berkurang
耶|ジャ;ヤ|か|question mark|1|9|tanda tanya
胤|イン|たね|descendent;issue;offspring|1|9|keturunan;terbitan;keturunan
脹|チョウ|は.れる;ふく.らむ;ふく.れる|bulge;dilate;distend|1|12|tonjolan;melebar;mengembang
茄|カ||eggplant|1|8|terong
茉|バツ;マ;マツ||jasmine|1|8|melati
莉|ライ;リ;レイ||jasmine|1|10|melati
莞|カン|い|reed used to cover tatami;smiling|1|10|buluh penutup tatami;tersenyum
菖|ショウ||iris|1|11|bunga iris
菫|キン|すみれ|the violet|1|11|bunga violet
蓉|ヨウ||lotus|1|13|teratai
蕗|ル;ロ|ふき|bog rhubarb;butterbur|1|16|fuki;fuki
虞|グ|あざむ.く;あやま.る;うれ.える|anxiety;concern;consideration|1|13|kecemasan;kepedulian;pertimbangan
衿|キン;コン|えり|collar;lapel;neck|1|9|kerah;kerah jas;leher
袈|カ;ケ||a coarse camlet|1|11|kain kasar
裟|サ;シャ||Buddhist surplice|1|13|jubah biksu
詢|シュン;ジュン|はか.る;まこと|consult with|1|13|berunding dengan
誼|ギ|よい;よしみ|friendship;intimacy|1|15|persahabatan;keakraban
諄|シュン|くど.い;くどくど;ねんご.ろ|tedious|1|15|membosankan
諒|リョウ|あきら.か;まことに|appreciate;fact;reality|1|15|menghargai;fakta;kenyataan
謁|エツ||audience;audience (with king)|1|15|penonton;audiensi dengan raja
賦|フ;ブ||installment;levy;ode|1|15|angsuran;pungutan;syair pujian
迪|テキ|いた.る;すす.む;みち|edify;path;way|1|8|mencerahkan;jalan setapak;cara
遵|ジュン||abide by;follow;learn|1|15|menaati;mengikuti;belajar
采|サイ|いろどり;と.る|appearance;coloring;dice|1|8|penampilan;pewarnaan;dadu
銑|セン||pig iron|1|14|besi kasar
錘|スイ|おもり;つむ|plumb bob;sinker;spindle|1|16|unting-unting;pemberat pancing;kumparan
鞠|キク;キュウ|まり|ball|1|17|bola
頌|ショウ;ジュ;ヨウ|かたち;たた.える;ほめ.る|eulogy|1|13|pujian
颯|サツ;ソウ|さっ.と|quick;sound of the wind;sudden|1|14|cepat;desau angin;mendadak
麟|リン||Chinese unicorn;bright;genius|1|24|kirin;terang;jenius
麿||まろ|(kokuji);I;you|1|18|(kanji buatan Jepang);saya;kamu
`;

function parse(): KanjiChar[] {
  const out: KanjiChar[] = [];
  for (const line of PACKED.trim().split("\n")) {
    const [char, on, kun, meanings, jlpt, strokes, meaningsId] = line.split("|");
    out.push({
      char,
      on: on ? on.split(";") : [],
      kun: kun ? kun.split(";") : [],
      meanings: meanings ? meanings.split(";") : [],
      meaningsId: meaningsId ? meaningsId.split(";") : [],
      level: `N${jlpt}` as JlptLevel,
      strokes: Number(strokes),
    });
  }
  return out;
}

let cache: KanjiChar[] | null = null;

/** The whole catalog, parsed on first call. */
export function allKanji(): KanjiChar[] {
  return (cache ??= parse());
}

export function kanjiAtLevel(level: JlptLevel): KanjiChar[] {
  return allKanji().filter((k) => k.level === level);
}

export function getKanji(char: string): KanjiChar | undefined {
  return allKanji().find((k) => k.char === char);
}

/** A kanji's meanings in the reader's language, falling back to KANJIDIC's English. */
export function meaningsIn(k: KanjiChar, lang: "en" | "id"): string[] {
  return lang === "id" && k.meaningsId.length > 0 ? k.meaningsId : k.meanings;
}
