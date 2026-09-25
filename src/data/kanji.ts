// Generated file — do not edit by hand. See docs/authoring.md for how to refresh it.
//
// Every kanji in the JLPT lists, N5 to N1 (2211 characters:
// N1 1232, N2 367, N3 367, N4 166, N5 79).
//
// Dictionary data: KANJIDIC, property of the Electronic Dictionary Research and
// Development Group (https://www.edrdg.org/), used in conformance with the group's
// licence (CC BY-SA 4.0). JLPT levels from Jonathan Waller's JLPT Resources.
// Packed one line per kanji to keep the file small; parsed once, on first use.

import type { JlptLevel } from "@/lib/types";

export interface KanjiChar {
  /** The character itself. */
  char: string;
  /** On'yomi, katakana, at most three. */
  on: string[];
  /** Kun'yomi, hiragana, at most three (a dot marks where okurigana starts). */
  kun: string[];
  /** English meanings, at most three. The source has no Indonesian. */
  meanings: string[];
  level: JlptLevel;
  strokes: number;
}

const PACKED = `
日|ジツ,ニチ|-か,-び,ひ|Japan,counter for days,day|5|4
一|イチ,イツ|ひと-,ひと.つ|one,one radical (no.1)|5|1
国|コク|くに|country|5|8
人|ジン,ニン|-と,-り,ひと|person|5|2
年|ネン|とし|counter for years,year|5|6
大|タイ,ダイ|-おお.いに,おお-,おお.きい|big,large|5|3
十|ジッ,ジュウ,ジュッ|そ,と,とお|ten|5|2
二|ジ,ニ|ふた,ふた.つ,ふたたび|two,two radical (no. 7)|5|2
本|ホン|もと|book,counter for long cylindrical things,main|5|5
中|チュウ|あた.る,うち,なか|center,in,inside|5|4
長|チョウ|おさ,なが.い|leader,long,senior|5|8
出|シュツ,スイ|-だ.す,-で,い.だす|come out,exit,go out|5|5
三|サン,ゾウ|み,み.つ,みっ.つ|three|5|3
時|ジ|-どき,とき|hour,time|5|10
行|アン,ギョウ,コウ|-い.き,-いき,-ゆ.き|act,bank,carry out|5|6
見|ケン|み.える,み.せる,み.る|chances,hopes,idea|5|7
月|ガツ,ゲツ|つき|month,moon|5|4
後|コウ,ゴ|あと,うし.ろ,うしろ|back,behind,later|5|9
前|ゼン|-まえ,まえ|before,in front|5|9
生|ショウ,セイ|-う,い.かす,い.きる|birth,genuine,life|5|5
五|ゴ|いつ,いつ.つ|five|5|4
間|カン,ケン|あい,あいだ,ま|interval,space|5|12
上|シャン,ショウ,ジョウ|-あ.がり,-あ.がる,-あ.げる|above,up|5|3
東|トウ|ひがし|east|5|8
四|シ|よ,よ.つ,よっ.つ|four|5|5
今|キン,コン|いま|now|5|4
金|キン,コン,ゴン|-がね,かな-,かね|gold|5|8
九|キュウ,ク|ここの,ここの.つ|nine|5|2
入|ジュ,ニュウ|-い.り,-い.る,-い.れ|enter,insert|5|2
学|ガク|まな.ぶ|learning,science,study|5|8
高|コウ|-だか,たか,たか.い|expensive,high,tall|5|10
円|エン|まど,まど.か,まる|circle,round,yen|5|4
子|シ,ス,ツ|-こ,こ,ね|11PM-1AM,child,first sign of Chinese zodiac|5|3
外|ガイ,ゲ|そと,と-,はず.す|outside|5|5
八|ハチ,ハツ|や,や.つ,やっ.つ|eight,eight radical (no. 12)|5|2
六|リク,ロク|む,む.つ,むい|six|5|4
下|カ,ゲ|-くだ.す,お.りる,お.ろす|below,descend,down|5|3
来|タイ,ライ|き,き.たす,き.たる|become,cause,come|5|7
気|キ,ケ|き|air,atmosphere,mind|5|6
小|ショウ|お-,こ-,さ-|little,small|5|3
七|シチ|なな,なな.つ,なの|seven|5|2
山|サン,セン|やま|mountain|5|3
話|ワ|はな.す,はなし|tale,talk|5|13
女|ジョ,ニョ,ニョウ|おんな,め|female,woman|5|3
北|ホク|きた|north|5|5
午|ゴ|うま|11AM-1PM,noon,seventh sign of Chinese zodiac|5|4
百|ヒャク,ビャク|もも|hundred|5|6
書|ショ|-が.き,-がき,か.く|write|5|10
先|セン|さき,ま.ず|ahead,before,future|5|6
名|ミョウ,メイ|-な,な|distinguished,name,noted|5|6
川|セン|かわ|river,river or three-stroke river radical (no. 47),stream|5|3
千|セン|ち|thousand|5|3
水|スイ|みず,みず-|water|5|4
半|ハン|なか.ば|half,middle,odd number|5|5
男|ダン,ナン|お,おとこ|male|5|7
西|サイ,ス,セイ|にし|Spain,west|5|6
電|デン||electricity|5|13
校|キョウ,コウ||correction,exam,printing|5|10
語|ゴ|かた.らう,かた.る|language,speech,word|5|14
土|ト,ド|つち|Turkey,earth,ground|5|3
木|ボク,モク|き,こ-|tree,wood|5|4
聞|ブン,モン|き.く,き.こえる|ask,hear,listen|5|14
食|ショク,ジキ|く.う,く.らう,た.べる|eat,food|5|9
車|シャ|くるま|car|5|7
何|カ|なに,なに-,なん|what|5|7
南|ナ,ナン|みなみ|south|5|9
万|バン,マン|よろず|10,000,ten thousand|5|3
毎|マイ|-ごと.に,ごと|every|5|6
白|ハク,ビャク|しら-,しろ,しろ.い|white|5|5
天|テン|あま-,あまつ,あめ|heavens,imperial,sky|5|4
母|ボ|はは,も|mother|5|5
火|カ|-び,ひ,ほ-|fire|5|4
右|ウ,ユウ|みぎ|right|5|5
読|トウ,トク,ドク|-よ.み,よ.む|read|5|14
友|ユウ|とも|friend|5|4
左|サ,シャ|ひだり|left|5|5
休|キュウ|やす.まる,やす.む,やす.める|day off,rest,retire|5|6
父|フ|ちち|father|5|4
雨|ウ|-さめ,あま-,あめ|rain|5|8
会|エ,カイ|あ.う,あ.わせる,あつ.まる|association,interview,join|4|6
同|ドウ|おな.じ|agree,equal,same|4|6
事|ジ,ズ|こと,つか.う,つか.える|business,fact,matter|4|8
自|シ,ジ|おの.ずから,おの.ずと,みずか.ら|oneself|4|6
社|シャ|やしろ|association,company,firm|4|7
発|ハツ,ホツ|あば.く,おこ.る,た.つ|counter for gunshots,departure,discharge|4|9
者|シャ|もの|person,someone|4|8
地|ジ,チ||earth,ground|4|6
業|ギョウ,ゴウ|わざ|arts,business,performance|4|13
方|ホウ|-かた,-がた,かた|alternative,direction,person|4|4
新|シン|あたら.しい,あら-,あら.た|new|4|13
場|ジョウ,チョウ|ば|location,place|4|12
員|イン||employee,member,number|4|10
立|リットル,リツ,リュウ|-た.つ,-た.て,-た.てる|erect,rise,set up|4|5
開|カイ|-びら.き,あ.く,あ.ける|open,unfold,unseal|4|12
手|シュ,ズ|-て,た-,て|hand|4|4
力|リイ,リキ,リョク|ちから|bear up,exert,power|4|2
問|モン|と.い,と.う,とん|ask,problem,question|4|11
代|タイ,ダイ|-が.わり,-がわ.り,か.える|age,change,charge|4|5
明|ミョウ,ミン,メイ|-あ.け,あ.かす,あ.かり|bright,light|4|8
動|ドウ|うご.かす,うご.く|change,confusion,motion|4|11
京|キョウ,キン,ケイ|みやこ|10**16,capital|4|8
目|ボク,モク|-め,ま-,め|care,class,experience|4|5
通|ツ,ツウ|-とお.り,-どお.し,-どお.り|avenue,commute,counter for letters, notes, documents, etc.|4|10
言|ゲン,ゴン|い.う,こと|say,word|4|7
理|リ|ことわり|arrangement,justice,logic|4|11
体|タイ,テイ|かたち,からだ|body,counter for images,object|4|7
田|デン|た|rice field,rice paddy|4|5
主|シュ,シュウ,ス|あるじ,おも,ぬし|chief,lord,main thing|4|5
題|ダイ||subject,topic|4|18
意|イ||care,desire,heart|4|13
不|フ,ブ||bad,clumsy,negative|4|4
作|サ,サク|-づく.り,つく.り,つく.る|build,make,prepare|4|7
用|ヨウ|もち.いる|business,employ,service|4|5
度|タク,ト,ド|-た.い,たび|attitude,consider,counter for occurrences|4|9
強|キョウ,ゴウ|こわ.い,し.いる,つよ.い|strong|4|11
公|ク,コウ|おおやけ|governmental,official,prince|4|4
持|ジ|-も.ち,も.つ,も.てる|have,hold|4|9
野|ショ,ヤ|の,の-|civilian life,field,plains|4|11
以|イ|もっ.て|because,by means of,compared with|4|5
思|シ|おぼ.す,おも.う,おもえら.く|think|4|9
家|カ,ケ|いえ,うち,や|expert,family,home|4|10
世|セ,セイ,ソウ|よ|generation,public,society|4|5
多|タ|おお.い,まさ.に,まさ.る|frequent,many,much|4|6
正|ショウ,セイ|ただ.しい,ただ.す,まさ|10**40,correct,justice|4|5
安|アン|やす,やす.い,やす.まる|cheap,contented,low|4|6
院|イン||Inst.,institution,mansion|4|10
心|シン|-ごころ,こころ|heart,heart radical (no. 61),mind|4|4
界|カイ||boundary,world|4|9
教|キョウ|おし.える,おそ.わる|doctrine,faith,teach|4|11
文|ブン,モン|あや,ふみ|art,decoration,figures|4|4
元|ガン,ゲン|もと|beginning,former time,origin|4|4
重|ジュウ,チョウ|え,おも,おも.い|-fold,esteem,heap up|4|9
近|キン,コン|ちか.い|akin,early,near|4|7
考|コウ|かんが.え,かんが.える|consider,think over|4|6
画|エ,カイ,カク|えが.く,かぎ.る,かく.する|brush-stroke,picture|4|8
海|カイ|うみ|ocean,sea|4|9
売|バイ|う.る,う.れる|sell|4|7
知|チ|し.らせる,し.る|know,wisdom|4|8
道|トウ,ドウ|いう,みち|course,district,journey|4|12
集|シュウ|あつ.まる,あつ.める,つど.う|congregate,flock,gather|4|12
別|ベツ|わ.ける,わか.れる|another,branch off,diverge|4|7
物|ブツ,モツ|もの,もの-|matter,object,thing|4|8
使|シ|-つか.い,-づか.い,つか.い|ambassador,cause,envoy|4|8
品|ヒン,ホン|しな|article,counter for meal courses,dignity|4|9
計|ケイ|はか.らう,はか.る|measure,plan,plot|4|9
死|シ|し.に-,し.ぬ|death,die|4|6
特|トク||special|4|10
私|シ|わたくし,わたし|I,me,private|4|7
始|シ|-はじ.める,はじ.まる,はじ.める|begin,commence|4|8
朝|チョウ|あさ|(North) Korea,dynasty,epoch|4|12
運|ウン|はこ.ぶ|advance,carry,destiny|4|12
終|シュウ|-お.わる,お.える,お.わる|end,finish|4|11
台|タイ,ダイ|うてな,つかさ,われ|a stand,counter for machines and vehicles,pedestal|4|5
広|コウ|ひろ.い,ひろ.がる,ひろ.げる|broad,spacious,wide|4|5
住|ジュウ,チュウ,ヂュウ|-ず.まい,す.まう,す.む|dwell,inhabit,live|4|7
真|シン|ま,ま-,まこと|Buddhist sect,reality,true|4|10
有|ウ,ユウ|あ.る|approx,exist,happen|4|6
口|ク,コウ|くち|mouth|4|3
少|ショウ|すく.ない,すこ.し|few,little|4|4
町|チョウ|まち|block,street,town|4|7
料|リョウ||fee,materials|4|10
工|ク,グ,コウ||construction,craft,katakana e radical (no. 48)|4|3
建|ケン,コン|-だ.て,た.つ,た.て|build|4|9
空|クウ|あ.き,あ.く,あ.ける|empty,sky,vacant|4|8
急|キュウ|いそ.ぎ,いそ.ぐ,せ.く|emergency,hurry,steep|4|9
止|シ|-さ.し,-さ.す,-と.める|halt,stop|4|4
送|ソウ|おく.る|escort,send|4|9
切|サイ,セツ|-き.り,-き.る,-き.れ|be sharp,cut,cutoff|4|4
転|テン|うたた,うつ.る,くる.めく|change,revolve,turn around|4|11
研|ケン|と.ぐ|polish,sharpen,study of|4|9
足|ソク|あし,た.す,た.りる|be sufficient,counter for pairs of footwear,foot|4|7
究|キュウ,ク|きわ.める|research,study|4|7
楽|ガク,ゴウ,ラク|この.む,たの.しい,たの.しむ|comfort,ease,music|4|13
起|キ|お.きる,お.こす,お.こる|get up,rouse,wake up|4|10
着|ジャク,チャク|き.せる,き.る,つ.く|arrive,counter for suits of clothing,don|4|12
店|テン|たな,みせ|shop,store|4|8
病|ビョウ,ヘイ|-や.み,や.む,やまい|ill,sick|4|10
質|シチ,シツ,チ|ただ.す,たち,もと|matter,quality,substance|4|15
待|タイ|-ま.ち,ま.つ|depend on,wait|4|9
試|シ|こころ.みる,ため.す|attempt,experiment,ordeal|4|13
族|ゾク||family,tribe|4|11
銀|ギン|しろがね|silver|4|14
早|サッ,ソウ|さ-,はや,はや-|early,fast|4|6
映|エイ|-ば.え,うつ.す,うつ.る|projection,reflect,reflection|4|9
親|シン|おや,おや-,した.しい|dealer (cards),familiarity,intimacy|4|16
験|ケン,ゲン|あかし,しるし,ため.す|effect,testing,verification|4|18
英|エイ|はなぶさ|England,English,calyx|4|8
医|イ|い.する,い.やす,くすし|doctor,medicine|4|7
仕|シ,ジ|つか.える|attend,doing,official|4|5
去|キョ,コ|-さ.る,さ.る|divorce,elapse,eliminate|4|5
味|ミ|あじ,あじ.わう|flavor,taste|4|8
写|シャ,ジャ|うつ-,うつ.し,うつ.す|be photographed,copy,describe|4|5
字|ジ|-な,あざ,あざな|character,letter,section of village|4|6
答|トウ|こた.え,こた.える|answer,solution|4|12
夜|ヤ|よ,よる|evening,night|4|8
音|-ノン,イン,オン|おと,ね|noise,sound|4|9
注|チュウ|さ.す,そそ.ぐ,つ.ぐ|annotate,comment,concentrate on|4|8
帰|キ|おく.る,かえ.す,かえ.る|arrive at,homecoming,lead to|4|10
古|コ|-ふる.す,ふる-,ふる.い|old|4|5
歌|カ|うた,うた.う|sing,song|4|14
買|バイ|か.う|buy|4|12
悪|アク,オ|-にく.い,あ.し,ああ|bad,evil,false|4|11
図|ズ,ト|え,はか.る|audacious,drawing,extraordinary|4|7
週|シュウ||week|4|11
室|シツ|むろ|apartment,cellar,chamber|4|9
歩|フ,ブ,ホ|あゆ.む,ある.く|counter for steps,walk|4|8
風|フ,フウ|かざ-,かぜ|air,manner,style|4|9
紙|シ|かみ|paper|4|10
黒|コク|くろ,くろ.い,くろ.ずむ|black|4|11
花|カ,ケ|はな|flower|4|7
春|シュン|はる|spring (season),springtime|4|9
赤|シャク,セキ|あか,あか-,あか.い|red|4|7
青|ショウ,セイ|あお,あお-,あお.い|blue,green|4|8
館|カン|たて,やかた|building,large building,mansion|4|16
屋|オク|や|dealer,house,roof|4|9
色|シキ,ショク|いろ|color|4|6
走|ソウ|はし.る|run|4|7
秋|シュウ|あき,とき|autumn|4|9
夏|カ,ガ,ゲ|なつ|summer|4|10
習|シュウ,ジュ|なら.い,なら.う|learn|4|11
駅|エキ||station|4|14
洋|ヨウ||Western style,foreign,ocean|4|9
旅|リョ|たび|travel,trip|4|10
服|フク||admit,clothing,discharge|4|8
夕|セキ|ゆう|evening|4|3
借|シャク|か.りる|borrow,rent|4|10
曜|ヨウ||weekday|4|18
飲|イン,オン|-の.み,の.む|drink,smoke,take|4|12
肉|ニク|しし|meat|4|6
貸|タイ|か.し-,か.す,かし-|lend|4|12
堂|ドウ||hall,public chamber|4|11
鳥|チョウ|とり|bird,chicken|4|11
飯|ハン|めし|boiled rice,meal|4|12
勉|ベン|つと.める|diligent,encourage,endeavour|4|10
冬|トウ|ふゆ|winter|4|5
昼|チュウ|ひる|daytime,noon|4|9
茶|サ,チャ||tea|4|9
弟|ダイ,テイ,デ|おとうと|faithful service to elders,younger brother|4|7
牛|ギュウ|うし|cow|4|4
魚|ギョ|-ざかな,うお,さかな|fish|4|11
兄|キョウ,ケイ|あに|big brother,elder brother|4|5
犬|ケン|いぬ,いぬ-|dog|4|4
妹|マイ|いもうと|younger sister|4|8
姉|シ|あね,はは|elder sister|4|8
漢|カン||China,Sino-|4|13
政|ショウ,セイ|まつりごと,まん|government,politics|3|9
議|ギ||consideration,consultation,debate|3|20
民|ミン|たみ|nation,people,subjects|3|5
連|レン|-づ.れ,つ.れる,つら.なる|clique,connect,gang|3|10
対|タイ,ツイ|あいて,こた.える,そろ.い|anti-,compare,equal|3|7
部|ブ|-べ|bureau,class,copy|3|11
合|カッ,ガッ,ゴウ|-あ.い,-あ.う,-あ.わせる|0.1,fit,join|3|6
市|シ|いち|city,market,town|3|5
内|ダイ,ナイ|うち|among,between,home|3|4
相|ショウ,ソウ|あい-|aspect,councillor,each other|3|9
定|ジョウ,テイ|さだ.か,さだ.まる,さだ.める|decide,determine,establish|3|8
回|エ,カイ|-まわ.し,-まわ.す,-まわ.り|-times,counter for occurrences,game|3|6
選|セン|え.る,えら.ぶ,よ.る|choose,elect,prefer|3|15
米|ベイ,マイ,メエトル|こめ,よね|USA,metre,rice|3|6
実|シツ,ジツ|まこと,み,みち.る|fruit,nut,reality|3|8
関|カン|-ぜき,かか.わる,からくり|barrier,concerning,connection|3|14
決|ケツ|-ぎ.め,き.まる,き.める|agree upon,appoint,decide|3|7
全|ゼン|すべ.て,まった.く|all,complete,entire|3|6
表|ヒョウ|-おもて,あら.わす,あらわ.す|chart,diagram,surface|3|8
戦|セン|いくさ,おのの.く,そよ.ぐ|battle,match,war|3|13
経|キョウ,キン,ケイ|た.つ,たていと,のり|expire,longitude,pass thru|3|11
最|サイ,シュ|つま,もっと.も|extreme,most,utmost|3|12
現|ゲン|あらわ.す,あらわ.れる,うつ.つ|actual,existing,present|3|11
調|チョウ|しら.べ,しら.べる,ととの.う|exorcise,harmonize,investigate|3|15
化|カ,ケ|け.する,ば.かす,ば.ける|-ization,change,delude|3|4
当|トウ|あ.たり,あ.たる,あ.て|appropriate,himself,hit|3|6
約|ヤク|つづ.まる,つづ.める,つづま.やか|approximately,promise,shrink|3|9
首|シュ|くび|counter for songs and poems,neck|3|9
法|ハッ,フラン,ホウ|のり|law,method,model|3|8
性|ショウ,セイ|さが|gender,nature,sex|3|8
要|ヨウ|い.る,かなめ|essence,key to,main point|3|9
制|セイ||law,rule,system|3|8
治|ジ,チ|おさ.まる,おさ.める,なお.す|be at peace,calm down,conserve|3|8
務|ム|つと.める|duties,task|3|11
成|ジョウ,セイ|-な.す,な.す,な.る|become,elapse,get|3|6
期|キ,ゴ||date,period,term|3|12
取|シュ|-ど.り,と.り,と.り-|fetch,take,take up|3|8
都|ツ,ト|みやこ|all,capital,everything|3|11
和|オ,カ,ワ|あ.える,なご.む,なご.やか|Japan,Japanese style,harmony|3|8
機|キ|はた|airplane,efficacy,loom|3|16
平|ヒョウ,ビョウ,ヘイ|たい.ら,たい.らげる,ひら|even,flat,peace|3|5
加|カ|くわ.える,くわ.わる|Canada,add,addition|3|5
受|ジュ|-う.け,う.かる,う.ける|accept,answer (phone),catch|3|8
続|キョウ,コウ,ショク|つぐ.ない,つづ.く,つづ.ける|continue,sequel,series|3|13
進|シン|すす.む,すす.める|advance,proceed,progress|3|11
数|サク,シュ,ス|かず,かぞ.える,しばしば|fate,figures,law|3|13
記|キ|しる.す|account,narrative,scribe|3|10
初|ショ|-そ.める,-ぞ.め,うい-|beginning,first time|3|7
指|シ|-さ.し,さ.す,ゆび|finger,indicate,measure (ruler)|3|9
権|ケン,ゴン|おもり,かり,はか.る|authority,power,rights|3|15
支|シ|か.う,ささ.える,つか.える|branch,branch radical (no. 65),support|3|4
産|サン|う.まれる,う.む,うぶ-|bear,childbirth,give birth|3|11
点|テン|さ.す,た.てる,つ.く|decimal point,mark,point|3|9
報|ホウ|むく.いる|news,report,retribution|3|12
済|サイ,セイ|-す.ます,-ず.み,-ずみ|come to an end,excusable,finish|3|11
活|カツ|い.かす,い.きる,い.ける|being helped,lively,living|3|9
原|ゲン|はら|field,meadow,original|3|10
共|キョウ|-ども,とも,とも.に|alike,all,and|3|6
得|トク|う.る,え.る|able to,acquire,advantage|3|11
解|カイ,ゲ|さと.る,と.かす,と.く|absolve,answer,cancel|3|13
交|コウ|-か.う,か.わす,かわ.す|association,coming & going,mingle|3|6
資|シ||assets,be conducive to,capital|3|13
予|シャ,ヨ|あらかじ.め|I,beforehand,myself|3|4
向|コウ|-む.き,-む.け,む.い|approach,beyond,confront|3|6
際|サイ|-ぎわ,きわ|adventurous,dangerous,edge|3|14
勝|ショウ|-が.ち,か.つ,かつ|excel,prevail,victory|3|12
面|ベン,メン|おも,おもて,つら|face,features,mask|3|9
告|コク|つ.げる|announce,inform,revelation|3|7
反|タン,ハン,ホ|-かえ.る,かえ.す,かえ.る|anti-|3|4
判|ハン,バン|わか.る|judgement,judgment,seal|3|7
認|ニン|したた.める,みと.める|acknowledge,appreciate,believe|3|14
参|サン,シン|まい-,まい.る,まじわる|be defeated,be madly in love,coming|3|8
利|リ|き.く|advantage,benefit,profit|3|7
組|ソ|-ぐみ,く.む,くみ|assemble,association,braid|3|11
信|シン||faith,fidelity,trust|3|9
在|ザイ|あ.る|exist,located in,outskirts|3|6
件|ケン|くだん|affair,case,item|3|6
側|ソク|かわ,がわ,そば|lean,oppose,regret|3|11
任|ニン|まか.す,まか.せる|appoint,duty,entrust to|3|6
引|イン|ひ.く,ひ.ける|admit,install,jerk|3|4
求|キュウ,グ|もと.める|demand,request,require|3|7
所|ショ|-ところ,とこ,ところ|extent,place|3|8
次|シ,ジ|つ.ぐ,つぎ|next,order,sequence|3|6
昨|サク||previous,yesterday|3|9
論|ロン|あげつら.う|argument,discourse|3|15
官|カン||bureaucrat,organ,the government|3|8
増|ゾウ|ふ.える,ふ.やす,ま.し|add,augment,gain|3|14
係|ケイ|-がかり,かか.る,かか.わる|concern oneself,connection,duty|3|9
感|カン||emotion,feeling,sensation|3|13
情|ジョウ,セイ|なさ.け|circumstances,emotion,facts|3|11
投|トウ|-な.げ,な.げる|abandon,discard,give up|3|7
示|シ,ジ|しめ.す|display,express,indicate|3|5
変|ヘン|か.える,か.わり,か.わる|change,strange,unusual|3|9
打|ダ,ダース|う.ち-,う.つ,ぶ.つ|dozen,hit,knock|3|5
直|ジカ,ジキ,チョク|-なお.す,す.ぐ,ただ.ちに|fix,frankness,honesty|3|8
両|リョウ|てる,ふたつ|both,counter for carriages (e.g., in a train),old Japanese coin|3|6
式|シキ||ceremony,expression,form|3|6
確|カク,コウ|たし.か,たし.かめる|assurance,clear,confirm|3|15
果|カ|-は.たす,-は.てる,は.たす|achieve,carry out,complete|3|8
容|ヨウ|い.れる|contain,form,looks|3|10
必|ヒツ|かなら.ず|certain,inevitable,invariably|3|5
演|エン||act,performance,play|3|14
歳|サイ,セイ|とし,とせ,よわい|age,occasion,opportunity|3|13
争|ソウ|あらそ.う,いか.でか|argue,contend,dispute|3|6
談|ダン||discuss,talk|3|15
能|ノウ|あた.う,よ.く|ability,capacity,skill|3|10
位|イ|くらい,ぐらい|about,crown,grade|3|7
置|チ|-お.き,お.く|deposit,employ,keep|3|13
流|リュウ,ル|-なが.す,なが.す,なが.れ|a sink,current,flow|3|10
格|カク,キャク,コウ||capacity,case (law, grammar),character|3|10
疑|ギ|うたが.う|be suspicious,distrust,doubt|3|14
過|カ|あやま.ち,あやま.つ,す.ぎる|error,exceed,go beyond|3|12
局|キョク|つぼね|affair,board,bureau|3|7
放|ホウ|-っぱな.し,こ.く,はな.す|banish,emit,fire|3|8
常|ジョウ|つね,とこ-|always,common,continually|3|11
状|ジョウ||appearance,circumstances,conditions|3|7
球|キュウ|たま|ball,sphere|3|11
職|ショク,ソク||employment,post,work|3|18
与|ヨ|あずか.る,あた.える,くみ.する|award,bestow,cause|3|3
供|キョウ,ク,クウ|-ども,そな.える,とも|accompany,offer,present|3|8
役|エキ,ヤク||campaign,drafted labor,duty|3|7
構|コウ|かま.う,かま.える|appearance,build,posture|3|14
割|カツ|さ.く,わ.り,わ.る|comparatively,cut,divide|3|12
費|ヒ|つい.える,つい.やす|consume,cost,expense|3|12
付|フ|-つ.き,-つ.け,-つ.ける|adhere,append,attach|3|5
由|ユ,ユイ,ユウ|よ.る,よし|a reason,wherefore|3|5
説|セツ,ゼイ|と.く|explanation,opinion,rumor|3|14
難|ナン|-がた.い,-にく.い,かた.い|accident,defect,difficult|3|18
優|ウ,ユウ|すぐ.れる,まさ.る,やさ.しい|actor,excel,gentleness|3|17
夫|フ,フウ,ブ|おっと,それ|husband,man|3|4
収|シュウ|おさ.まる,おさ.める|income,obtain,pay|3|4
断|ダン|ことわ.る,さだ.める,た.つ|apologize,cutting,decision|3|11
石|コク,シャク,セキ|いし|stone|3|5
違|イ|-ちが.える,たが.う,たが.える|differ,difference|3|13
消|ショウ|き.える,け.す|blow out,cancel,extinguish|3|10
神|シン,ジン|かみ,かん-,こう-|gods,mind,soul|3|9
番|バン|つが.い|number in a series,turn|3|12
規|キ||measure,standard|3|11
術|ジュツ|すべ|art,magic,means|3|11
備|ビ|そな.える,そな.わる,つぶさ.に|equip,preparation,provision|3|12
宅|タク||home,house,my husband|3|6
害|ガイ||harm,injury|3|10
配|ハイ|くば.る|distribute,exile,rationing|3|10
警|ケイ|いまし.める|admonish,commandment|3|19
育|イク|そだ.ち,そだ.つ,そだ.てる|bring up,grow up,raise|3|8
席|セキ|むしろ|mat,occasion,place|3|10
訪|ホウ|おとず.れる,たず.ねる,と.う|call on,look up,offer sympathy|3|11
乗|ショウ,ジョウ|-の.り,の.せる,の.る|board,counter for vehicles,join|3|9
残|サン,ザン|そこな.う,のこ.す,のこ.り|balance,leftover,remainder|3|10
想|ソ,ソウ|おも.う|concept,idea,think|3|13
声|ショウ,セイ|こえ,こわ-|voice|3|7
念|ネン||attention,desire,feeling|3|8
助|ジョ|す.ける,すけ,たす.かる|assist,help,rescue|3|7
労|ロウ|いた.ずき,いたわ.る,つか.れる|labor,reward for,thank for|3|7
例|レイ|たと.える|custom,example,precedent|3|8
然|ゼン,ネン|さ,しか,しか.し|if so,in that case,so|3|12
限|ゲン|-かぎ.り,かぎ.り,かぎ.る|limit,restrict,to best of ability|3|9
追|ツイ|お.う|chase,drive away,follow|3|9
商|ショウ|あきな.う|dealing in,make a deal,merchant|3|11
葉|ヨウ|は|blade,counter for flat things,fragment|3|12
伝|テン,デン|-づた.い,つた.う,つた.える|communicate,follow,go along|3|6
働|ドウ|はたら.く|(kokuji),work|3|13
形|ギョウ,ケイ|-がた,かた,かたち|form,shape,style|3|7
景|ケイ||scenery,view|3|12
落|ラク|お.ち,お.ちる,お.とす|come down,drop,fall|3|12
好|コウ|い.い,この.む,す.く|fond,like something,pleasing|3|6
退|タイ|しりぞ.く,しりぞ.ける,ど.く|expel,reject,repel|3|9
頭|ズ,ト,トウ|-がしら,あたま,かしら|counter for large animals,head|3|16
負|フ|お.う,ま.かす,ま.ける|-,assume a responsibility,bear|3|9
渡|ト|-わた.る,わた.す,わた.る|cross,deliver,diameter|3|12
失|シツ|う.せる,うしな.う|disadvantage,error,fault|3|5
差|サ|さ.し,さ.す|balance,difference,discrepancy|3|10
末|バツ,マツ|うら,うれ,すえ|close,end,posterity|3|5
守|シュ,ス|-もり,かみ,まも.り|defend,guard,obey|3|6
若|ジャク,ニャ,ニャク|ごと.し,も.し,も.しくは|if,immature,low number|3|8
種|シュ|-ぐさ,たね|class,kind,seed|3|14
美|ビ,ミ|うつく.しい|beautiful,beauty|3|9
命|ミョウ,メイ|いのち|appoint,command,decree|3|8
福|フク||blessing,fortune,luck|3|13
望|ボウ,モウ|のぞ.む,もち|ambition,aspire to,desire|3|11
非|ヒ|あら.ず|injustice,mistake,negative|3|8
観|カン|しめ.す,み.る|appearance,condition,look|3|18
察|サツ||guess,judge,presume|3|14
段|タン,ダン||grade,stairs,steps|3|9
横|オウ|よこ|horizontal,perverse,side|3|15
深|シン|-ぶか.い,ふか.い,ふか.まる|deep,heighten,intensify|3|11
申|シン|さる,もう.し-,もう.す|3-5PM,have the honor to,ninth sign of Chinese zodiac|3|5
様|ショウ,ヨウ|さま,さん|Esq.,manner,polite suffix|3|14
財|サイ,ザイ,ゾク|たから|assets,money,property|3|10
港|コウ|みなと|harbor|3|12
識|シキ|し.る,しる.す|discriminating,know,write|3|19
呼|コ|よ.ぶ|call,call out to,invite|3|8
達|タツ,ダ|-たち|accomplished,arrive,attain|3|12
良|リョウ|-い.い,-よ.い,い.い|good,pleasing,skilled|3|7
候|コウ|そうろう|climate,expect,season|3|10
程|テイ|-ほど,ほど|amount,degree,distance|3|12
満|バン,マン|み.たす,み.ちる,み.つ|enough,full,fullness|3|12
敗|ハイ|やぶ.れる|defeat,failure,reversal|3|11
値|チ|あたい,ね|cost,price,value|3|10
突|カ,トツ|つ.く|collision,pierce,prick|3|8
光|コウ|ひか.る,ひかり|light,ray|3|6
路|ル,ロ|-じ,みち|distance,path,road|3|13
科|カ||course,department,section|3|9
積|セキ|-づ.み,つ.む,つ.もり|acreage,amass,contents|3|16
他|タ|ほか|another,other,the others|3|5
処|ショ|-こ,お.る,ところ|act,behave,condemn|3|5
太|タ,タイ|ふと.い,ふと.る|big around,plump,thick|3|4
客|カク,キャク||client,customer,guest|3|9
否|ヒ|いな,いや|decline,deny,negate|3|7
師|シ|いくさ|army (incl. counter),exemplar,expert|3|10
登|ショウ,チョウ,ト|あ.がる,のぼ.る|ascend,climb up|3|12
易|イ,エキ|やさ.しい,やす.い|divination,easy,fortune-telling|3|8
速|ソク|すみ.やか,はや-,はや.い|fast,quick|3|10
存|ソン,ゾン|あ.る,たも.つ,と.う|be aware of,believe,exist|3|6
飛|ヒ|-と.ばす,と.ばす,と.ぶ|fly,scatter,skip (pages)|3|9
殺|サイ,サツ,セツ|-ごろ.し,あや.める,ころ.す|butcher,diminish,kill|3|10
号|ゴウ|さけ.ぶ,よびな|call,item,name|3|5
単|タン|ひとえ|merely,one,simple|3|9
座|ザ|すわ.る|cushion,gathering,seat|3|10
破|ハ|やぶ.る,やぶ.れる,わ.れる|break,defeat,destroy|3|10
除|ジ,ジョ|-よ.け,のぞ.く|abolish,cancel,division (x/3)|3|10
完|カン||completion,end,perfect|3|7
降|コウ,ゴ|お.りる,お.ろす,くだ.す|descend,fall,precipitate|3|10
責|セキ|せ.める|blame,censure,condemn|3|11
捕|ホ|つか.まえる,つか.まる,と.らえる|capture,catch|3|10
危|キ|あぶ.ない,あや.うい,あや.ぶむ|dangerous,fear,uneasy|3|6
給|キュウ|-たま.え,たま.う,たも.う|allow,bestow on,gift|3|12
苦|ク|-ぐる.しい,くる.しい,くる.しむ|feel bitter,hardship,scowl|3|8
迎|ゲイ|むか.える|greet,meet,welcome|3|7
園|エン|その|farm,garden,park|3|13
具|グ|そな.える,つぶさ.に|counter for armor, suits, sets of furniture,ingredients,means|3|8
辞|ジ|いな.む,や.める|expression,resign,term|3|13
因|イン|ちな.む,よ.る|be associated with,be limited to,cause|3|6
馬|バ|うま,うま-,ま|horse|3|10
愛|アイ|いと.しい,お.しむ,かな.しい|affection,favourite,love|3|13
富|フ,フウ|と.む,とみ|abundant,enrich,wealth|3|12
彼|ヒ|か.の,かの,かれ|he,that,the|3|8
未|ビ,ミ|いま.だ,ひつじ,ま.だ|1-3PM,eighth sign of Chinese zodiac,even now|3|5
舞|ブ|-ま.う,ま.う,まい|circle,dance,flit|3|15
亡|ボウ,モウ|な.い,な.き-,ほろ.びる|deceased,dying,perish|3|3
冷|レイ|さ.ます,さ.める,つめ.たい|chill,cold (beer, person),cool|3|7
適|テキ|かな.う|capable,occasional,qualified|3|14
婦|フ|よめ|bride,lady,wife|3|11
寄|キ|-よ.り,よ.せる,よ.る|bring near,collect,draw near|3|11
込||-こ.み,-こ.む,こ.み|(kokuji),crowded,in bulk|3|5
顔|ガン|かお|expression,face|3|18
類|ルイ|たぐ.い|class,genus,kind|3|18
余|ヨ|あま.す,あま.り,あま.る|myself,other,remainder|3|7
王|-ノウ,オウ||king,magnate,rule|3|4
返|ヘン|-かえ.す,-かえ.る,かえ.す|answer,fade,repay|3|7
妻|サイ|つま|spouse,wife|3|8
背|ハイ|せ,せい,そむ.く|back,behind,defy|3|9
熱|ネツ|あつ.い|fever,heat,mania|3|15
宿|シュク|やど,やど.す,やど.る|be pregnant,dwell,dwelling|3|11
薬|ヤク|くすり|benefit,chemical,enamel|3|16
険|ケン|けわ.しい|impregnable position,inaccessible place,precipitous|3|11
頼|ライ|たの.む,たの.もしい,たよ.る|request,trust|3|16
覚|カク|おぼ.える,さ.ます,さ.める|awake,learn,memorize|3|12
船|セン|ふな-,ふね|boat,ship|3|11
途|ト|みち|road,route,way|3|10
許|キョ|もと,ゆる.す|approve,permit|3|11
抜|ハイ,ハツ,バツ|-ぬ.く,ぬ.かす,ぬ.かる|extract,omit,pilfer|3|7
便|ビン,ベン|たよ.り|chance,convenience,excrement|3|9
留|リュウ,ル|と.まる,と.める,とど.まる|detain,fasten,halt|3|10
罪|ザイ|つみ|blame,crime,fault|3|13
努|ド|つと.める|as much as possible,diligent,toil|3|7
精|ショウ,セイ|くわ.しい,しら.げる|energy,excellence,fairy|3|14
散|サン|-ち.らす,ち.らかす,ち.らかる|disperse,scatter,spend|3|12
静|ジョウ,セイ|しず-,しず.か,しず.まる|quiet|3|14
婚|コン||marriage|3|11
喜|キ|よろこ.ばす,よろこ.ぶ|rejoice,take pleasure in|3|12
浮|フ|う.かぶ,う.かべる,う.かれる|float,floating,rise to surface|3|10
絶|ゼツ|た.える,た.つ,た.やす|abstain,be beyond,cut off|3|12
幸|コウ|さいわ.い,さち,しあわ.せ|blessing,fortune,happiness|3|8
押|オウ|お.さえる,お.し-,お.す|attach,check,do in spite of|3|8
倒|トウ|-だお.れ,さかさ,さかさま|break down,collapse,drop|3|10
等|トウ|-ら,など,ひと.しい|and so forth,class (first),equal|3|12
老|ロウ|お.いる,ふ.ける|grow old,old age,old man|3|6
曲|キョク|くま,ま.がる,ま.げる|bend,composition,crooked|3|6
払|ヒツ,フツ,ホツ|-はら.い,-ばら.い,はら.う|banish,clear out,dispose of|3|5
庭|テイ|にわ|courtyard,garden,yard|3|10
徒|ト|あだ,いたずら|emptiness,ephemeral thing,futility|3|10
勤|キン,ゴン|-づと.め,いそ.しむ,つと.まる|become employed,diligence,serve|3|12
遅|チ|おく.らす,おく.れる,おそ.い|back,late,later|3|12
居|キョ,コ|-い,い.る,お.る|exist,live with,reside|3|8
雑|ザツ,ゾウ|まじ.える,まじ.る|miscellaneous|3|14
招|ショウ|まね.く|beckon,engage,invite|3|8
困|コン|こま.る|annoyed,become distressed,quandary|3|7
欠|ケツ,ケン|か.く,か.ける|fail,gap,lack|3|4
更|コウ|さら,さら.に,ふ.かす|again,further,grow late|3|7
刻|コク|きざ.み,きざ.む|carving,chop,cut fine|3|8
賛|サン|たす.ける,たた.える|agree with,approve,assist|3|15
抱|ホウ|いだ.く,かか.える,だ.く|embrace,hold in arms,hug|3|8
犯|ハン,ボン|おか.す|crime,offense,sin|3|5
恐|キョウ|おそ.る,おそ.れる,おそ.ろしい|awe,dread,fear|3|10
息|ソク|いき|breath,coming to an end,interest (on money)|3|10
遠|エン,オン|とお.い|distant,far|3|13
戻|レイ|もど.す,もど.る|go backwards,re-,restore|3|7
願|ガン|-ねがい,ねが.う|hope,petition,request|3|19
絵|エ,カイ||drawing,painting,picture|3|12
越|エツ,オツ|-こ.す,-ご.え,-ご.し|Vietnam,cross over,exceed|3|12
欲|ヨク|ほ.しい,ほっ.する|covetousness,craving,desire|3|11
痛|ツウ|いた.い,いた.ましい,いた.む|bruise,damage,hurt|3|12
笑|ショウ|え.む,わら.う|laugh|3|10
互|ゴ|かたみ.に,たが.い|mutually,reciprocally,together|3|4
束|ソク|たば,たば.ねる,つか|bundle,control,govern|3|7
似|ジ|に.る,ひ.る|becoming,counterfeit,imitate|3|7
列|レ,レツ||column,file,rank|3|6
探|タン|さが.す,さぐ.る|grope,look for,search|3|11
逃|トウ|に.がす,に.げる,のが.す|escape,evade,flee|3|9
遊|ユ,ユウ|あそ.ばす,あそ.ぶ|play|3|12
迷|メイ|まよ.う|astray,be perplexed,err|3|9
夢|ボウ,ム|くら.い,ゆめ,ゆめ.みる|dream,illusion,vision|3|13
君|クン|-ぎみ,きみ|male name suffix,mister,ruler|3|7
閉|ヘイ|し.まる,し.める,た.てる|closed,shut|3|11
緒|ショ,チョ|いとぐち,お|beginning,cord,end|3|14
折|シャク,セツ|-お.り,お.り,お.る|bend,break,fold|3|7
草|ソウ|-ぐさ,くさ,くさ-|draft,grass,herbs|3|9
暮|ボ|く.らす,く.れる|evening,livelihood,make a living|3|14
酒|シュ|さか-,さけ|alcohol,sake|3|10
悲|ヒ|かな.しい,かな.しむ|deplore,grieve,regret|3|12
晴|セイ|-ば.れ,は.らす,は.れ|clear up|3|12
掛|カイ,ケイ|-か.かる,-か.け,-か.ける|arrive at,depend,hang|3|11
到|トウ|いた.る|arrival,attain,proceed|3|8
寝|シン|い.ぬ,ね.かす,ね.る|bed,lie down,remain unsold|3|13
暗|アン|くら.い,くら.む,くれ.る|be blinded,darkness,disappear|3|13
盗|トウ|ぬす.み,ぬす.む|pilfer,rob,steal|3|11
吸|キュウ|す.う|imbibe,inhale,sip|3|6
陽|ヨウ|ひ|daytime,heaven,male|3|12
御|ギョ,ゴ|お-,おん-,み-|govern,honorable,manipulate|3|12
歯|シ|は,よわ.い,よわい|cog,tooth|3|12
忘|ボウ|わす.れる|forget|3|7
雪|セツ|ゆき|snow|3|11
吹|スイ|ふ.く|blow,breathe,emit|3|7
娘|ジョウ|こ,むすめ|daughter,girl|3|10
誤|ゴ|-あやま.る,あやま.る|do wrong,err,mislead|3|14
洗|セン|あら.う|inquire into,probe,wash|3|9
慣|カン|な.らす,な.れる|accustomed,become experienced,get used to|3|14
礼|ライ,レイ||bow,ceremony,remuneration|3|5
窓|ス,ソウ|けむだし,てんまど,まど|pane,window|3|11
昔|シャク,セキ|むかし|antiquity,old times,once upon a time|3|8
貧|ヒン,ビン|まず.しい|poor,poverty|3|11
怒|ド,ヌ|いか.る,おこ.る|angry,be offended|3|9
泳|エイ|およ.ぐ|swim|3|8
祖|ソ||ancestor,founder,pioneer|3|9
杯|ハイ|さかずき|counter for cupfuls,glass,toast|3|8
疲|ヒ|-づか.れ,つか.らす,つか.れる|exhausted,tire,weary|3|10
皆|カイ|みな,みんな|all,everything|3|9
鳴|メイ|な.く,な.らす,な.る|bark,chirp,cry|3|14
腹|フク|はら|abdomen,belly,stomach|3|13
煙|エン|けむ.い,けむ.る,けむり|smoke|3|13
眠|ミン|ねむ.い,ねむ.る|die,sleep,sleepy|3|10
怖|フ,ホ|お.じる,おそ.れる,こわ.い|be frightened,dreadful,fearful|3|8
耳|ジ|みみ|ear|3|6
頂|チョウ|いただ.く,いただき|peak,place on the head,receive|3|11
箱|ソウ|はこ|bin,box,case|3|15
晩|バン||night,nightfall|3|12
寒|カン|さむ.い|cold|3|12
髪|ハツ|かみ|hair of the head|3|14
忙|ボウ,モウ|いそが.しい,うれえるさま,おそ.れる|busy,occupied,restless|3|6
才|サイ||cubic shaku,genius,years old|3|3
靴|カ|くつ|shoes|3|13
恥|チ|は.じらう,は.じる,は.ずかしい|dishonor,shame|3|10
偶|グウ|たま|accidentally,couple,even number|3|11
偉|イ|えら.い|admirable,conceited,excellent|3|12
猫|ビョウ|ねこ|cat|3|11
幾|キ|いく-,いく.つ,いく.ら|how far,how long,how many|3|12
党|トウ|なかま,むら|clique,faction,party|2|10
協|キョウ||co-,cooperation|2|8
総|ソウ|す.べて,すべ.て,ふさ|all,full,general|2|14
区|オウ,ク,コウ||district,ward|2|4
領|リョウ|えり|dominion,fief,jurisdiction|2|14
県|ケン|か.ける|prefecture|2|9
設|セツ|もう.ける|establishment,prepare,provision|2|11
改|カイ|あらた.まる,あらた.める|change,examine,inspect|2|7
府|フ||borough,govt office,representative body|2|8
査|サ||investigate|2|9
委|イ|ゆだ.ねる|committee,devote,discard|2|8
軍|グン|いくさ|army,battle,force|2|9
団|ダン,トン|かたまり,まる.い|association,group|2|6
各|カク|おのおの|each,either,every|2|6
島|トウ|しま|island|2|10
革|カク|かわ|become serious,leather,reform|2|9
村|ソン|むら|town,village|2|7
勢|セイ,ゼイ|いきお.い,はずみ|energy,forces,military strength|2|13
減|ゲン|へ.らす,へ.る|curtail,decline,decrease|2|12
再|サ,サイ|ふたた.び|again,second time,twice|2|6
税|ゼイ||duty,tax|2|12
営|エイ|いとな.み,いとな.む|build,camp,conduct (business)|2|12
比|ヒ|くら.べる|Philippines,compare,race|2|4
防|ボウ|ふせ.ぐ|defend,protect,resist|2|7
補|ホ|おぎな.う|assistant,compensate,learner|2|12
境|キョウ,ケイ|さかい|border,boundary,region|2|14
導|ドウ|みちび.く|conduct,guidance,leading|2|15
副|フク||aide,assistant,copy|2|11
算|サン|そろ|abacus,calculate,divining|2|14
輸|シュ,ユ||be inferior,send,transport|2|16
述|ジュツ|の.べる|mention,relate,speak|2|8
線|セン|すじ|line,track|2|15
農|ノウ||agriculture,farmers|2|13
州|シュウ,ス|す|province,state|2|6
武|ブ,ム|たけ,たけ.し|arms,chivalry,military|2|8
象|ショウ,ゾウ|かたど.る|elephant,image,imitate|2|12
域|イキ||level,limits,range|2|11
額|ガク|ひたい|amount,forehead,framed picture|2|18
欧|オウ|うた.う,は.く|Europe|2|8
担|タン|かつ.ぐ,にな.う|bear,carry,raise|2|8
準|ジュン|じゅん.じる,じゅん.ずる,なぞら.える|conform,correspond to,imitate|2|13
賞|ショウ|ほ.める|praise,prize,reward|2|15
辺|ヘン|-べ,あた.り,ほと.り|border,boundary,environs|2|5
造|ゾウ|-づく.り,つく.り,つく.る|create,make,physique|2|10
被|ヒ|おお.う,かぶ.せる,かぶ.る|be exposed (film),brood over,cover|2|10
技|ギ|わざ|ability,art,arts|2|7
低|テイ|ひく.い,ひく.まる,ひく.める|humble,lower,short|2|7
復|フク|また|restore,resume,return to|2|12
移|イ|うつ.す,うつ.る|catch (cold, fire),change,drift|2|11
個|カ,コ||counter for articles,individual|2|10
門|モン|かど,と|counter for cannons,gate|2|8
課|カ||chapter,counter for chapters (of a book),department|2|15
脳|ドウ,ノウ|のうずる|brain,memory|2|11
極|キョク,ゴク|-ぎ.め,き.まる,き.める|10**48,conclusion,electric poles|2|12
含|ガン|ふく.む,ふく.める|bear in mind,cherish,contain|2|7
蔵|ソウ,ゾウ|おさ.める,かく.れる,くら|have,hide,own|2|15
量|リョウ|はか.る|amount,consider,estimate|2|12
型|ケイ|-がた,かた|model,mould,type|2|9
況|キョウ|いわ.んや,おもむき,まし.て|condition,situation|2|8
針|シン|はり|needle,pin,staple|2|10
専|セン|もっぱ.ら|exclusive,mainly,solely|2|9
谷|コク|きわ.まる,たに|valley|2|7
史|シ||chronicle,history|2|5
階|カイ|きざはし|counter for storeys of a building,stair,storey|2|12
管|カン|くだ|control,drunken talk,jurisdiction|2|14
兵|ヒョウ,ヘイ|つわもの|army,private,soldier|2|7
接|ショウ,セツ|つ.ぐ|adjoin,contact,piece together|2|11
細|サイ|こま.か,こま.かい,ほそ.い|dainty,detailed,get thin|2|11
効|コウ|き.く,ききめ,なら.う|benefit,efficacy,efficiency|2|8
丸|ガン|まる,まる.い,まる.める|-ship,curl up,explain away|2|3
湾|ワン|いりえ|bay,gulf,inlet|2|12
録|ロク|しる.す,と.る|record|2|16
省|ショウ,セイ|かえり.みる,はぶ.く|conserve,government ministry,omit|2|9
旧|キュウ|ふる.い,もと|ex-,former,old friend|2|5
橋|キョウ|はし|bridge|2|16
岸|ガン|きし|beach|2|8
周|シュウ|まわ.り|circuit,circumference,lap|2|8
材|ザイ||ingredients,log,lumber|2|7
戸|コ|と|counter for houses,door,door radical (no. 63)|2|4
央|オウ||center,middle|2|5
券|ケン||ticket|2|8
編|ヘン|-あ.み,あ.む|braid,compilation,completed poem|2|15
捜|シュ,シュウ,ソウ|さが.す|locate,look for,search|2|10
竹|チク|たけ|bamboo|2|6
超|チョウ|こ.える,こ.す|super-,transcend,ultra-|2|12
並|ヘイ,ホウ|な.み,なみ,なら.びに|and,as well as,besides|2|8
療|リョウ||cure,heal|2|17
採|サイ|と.る|fetch,pick,take|2|11
森|シン|もり|forest,woods|2|12
競|キョウ,ケイ|きそ.う,くら.べる,せ.る|bid,bout,compete with|2|20
介|カイ||concern oneself with,jammed in,mediate|2|4
根|コン|-ね,ね|head (pimple),radical,root|2|10
販|ハン||marketing,sell,trade|2|11
歴|レキ,レッキ||continuation,curriculum,passage of time|2|14
将|ショウ,ソウ|はた,ひきい.る,まさ|admiral,and again,commander|2|10
幅|フク|はば|hanging scroll,width|2|12
般|ハン||all,carrier,carry|2|10
貿|ボウ||exchange,trade|2|12
講|コウ||association,club,lecture|2|17
林|リン|はやし|forest,grove|2|8
装|ショウ,ソウ|よそお.い,よそお.う|attire,disguise,dress|2|12
諸|ショ|もろ|many,several,together|2|15
劇|ゲキ||drama,play|2|15
河|カ|かわ|river|2|8
航|コウ||cruise,fly,navigate|2|10
鉄|テツ|くろがね|iron|2|13
児|ゲイ,ジ,ニ|-こ,-っこ,こ|child,newborn babe,young of animals|2|7
禁|キン||ban,forbid,prohibition|2|13
印|イン|-じるし,しる.す,しるし|India,emblem,evidence|2|6
逆|ギャク,ゲキ|さか,さか.さ,さか.らう|inverted,opposite,reverse|2|9
換|カン|-か.える,か.える,か.わる|change,convert,interchange|2|12
久|キュウ,ク|ひさ.しい|long time,old story|2|3
短|タン|みじか.い|brevity,defect,fault|2|12
油|ユ,ユウ|あぶら|fat,oil|2|8
暴|バク,ボウ|あば.く,あば.れる|cruelty,force,fret|2|15
輪|リン|わ|circle,counter for wheels and flowers,link|2|15
占|セン|うらな.う,し.める|divining,forecasting,fortune-telling|2|5
植|ショク|う.える,う.わる|plant|2|12
清|ショウ,シン,セイ|きよ.い,きよ.まる,きよ.める|Manchu dynasty,cleanse,exorcise|2|11
倍|バイ||double,fold,times|2|10
均|キン|なら.す|average,level|2|7
億|オク||10**8,hundred million|2|15
圧|アツ,エン,オウ|お.さえる,お.す,おさ.える|dominate,oppress,overwhelm|2|5
芸|ウン,ゲイ|う.える,のり,わざ|acting,art,craft|2|7
署|ショ||govt office,police station,signature|2|13
伸|シン|の.す,の.ばす,の.びる|expand,extend,increase|2|7
停|テイ|と.まる,と.める|halt,stopping|2|11
爆|バク|は.ぜる|bomb,burst open,pop|2|19
陸|リク,ロク|おか|land,six|2|11
玉|ギョク|-だま,たま,たま-|ball,jewel|2|5
波|ハ|なみ|Poland,billows,waves|2|8
帯|タイ|お.びる,おび|belt,obi,region|2|10
延|エン|の.ばす,の.びる,の.べ|prolong,stretching|2|8
羽|ウ|は,はね,わ|counter for birds, rabbits,feathers|2|6
固|コ|かた.い,かた.まり,かた.まる|clot,curdle,harden|2|8
則|ソク|すなわち,のっと.る,のり|based on,follow,law|2|9
乱|ラン,ロン|おさ.める,みだ,みだ.す|disorder,disturb,riot|2|7
普|フ|あまね.く,あまねし|Prussia,generally,universal|2|12
測|ソク|はか.る|fathom,measure,plan|2|12
豊|ブ,ホウ|とよ,ゆた.か|bountiful,excellent,rich|2|13
厚|コウ|あか,あつ.い|brazen,cordial,heavy|2|9
齢|レイ|とし,よわい|age|2|17
囲|イ|かこ.い,かこ.う,かこ.む|besiege,encircle,enclosure|2|7
卒|シュツ,ソツ|お.える,お.わる,そっ.する|die,graduate,private|2|8
略|リャク|おか.す,おさ.める,はか.る|abbreviation,capture,omission|2|11
承|ショウ,ジョウ|う.ける,うけたまわ.る|acquiesce,be informed,hear|2|8
順|ジュン||docility,obey,occasion|2|12
岩|ガン|いわ|boulder,cliff,rock|2|8
練|レン|ね.り,ね.る|drill,gloss,polish|2|14
軽|キョウ,キン,ケイ|かる.い,かろ.やか,かろ.んじる|lightly,trifling,unimportant|2|12
了|リョウ||complete,finish|2|2
庁|チョウ,テイ|やくしょ|government office|2|5
城|ジョウ,セイ|しろ|castle|2|9
患|カン|わずら.う|afflicted,be ill,disease|2|11
層|ソウ||floor,layer,social class|2|14
版|ハン||edition,impression,label|2|8
令|レイ||command,decree,good|2|5
角|カク|かど,つの|angle,antlers,corner|2|7
絡|ラク|から.まる,から.む|coil around,entwine,get caught in|2|12
損|ソン|-そこ.なう,-そこ.ねる,そこ.なう|damage,disadvantage,hurt|2|13
募|ボ|つの.る|campaign,enlist,gather (contributions)|2|12
裏|リ|うら|amidst,back,in|2|13
仏|フツ,ブツ|ほとけ|Buddha,France,the dead|2|4
績|セキ||achievements,exploits,unreeling cocoons|2|17
築|チク|きず.く|build,construct,fabricate|2|16
貨|カ|たから|freight,goods,property|2|11
混|コン|-ま.じり,こ.む,ま.ざる|blend,confuse,mix|2|11
昇|ショウ|のぼ.る|rise up|2|8
池|チ|いけ|cistern,pond,pool|2|6
血|ケツ|ち|blood|2|6
温|オン|あたた.か,あたた.かい,あたた.まる|warm|2|12
季|キ||seasons|2|8
星|ショウ,セイ|-ぼし,ほし|dot,mark,spot|2|9
永|エイ|なが.い|eternity,lengthy,long|2|5
著|チャク,チョ|あらわ.す,いちじる.しい|arrival,counter for suits of clothing,don|2|11
誌|シ||document,records|2|14
庫|ク,コ|くら|storehouse,warehouse|2|10
刊|カン||carve,engrave,publish|2|5
像|ゾウ||figure,image,picture|2|14
香|キョウ,コウ|か,かお.り,かお.る|incense,perfume,smell|2|9
坂|ハン|さか|hill,incline,slope|2|7
底|テイ|そこ|base,bottom,bottom price|2|8
布|フ,ホ|きれ,し.く,ぬの|cloth,distribute,linen|2|5
寺|ジ|てら|Buddhist temple|2|6
宇|ウ||eaves,heaven,house|2|6
巨|キョ||big,gigantic,great|2|5
震|シン|ふる.う,ふる.える,ふる.わす|quake,quiver,shake|2|15
希|キ,ケ|こいねが.う,まれ|Greece,beg,beseech|2|7
触|ショク|さわ,さわ.る,ふ.れる|announce,conflict,contact|2|13
依|イ,エ|よ.る|consequently,depend on,due to|2|8
籍|セキ||domiciliary register,enroll,membership|2|20
汚|オ|きたな.い,けが.す,けが.らわしい|defile,dirty,disgrace|2|6
枚|バイ,マイ||counter for flat thin objects or sheets,sheet of...|2|8
複|フク||compound,double,duplicate|2|14
郵|ユウ||mail,stagecoach stop|2|11
仲|チュウ|なか|go-between,relationship|2|6
栄|エイ,ヨウ|-ば.え,え,さか.える|flourish,glory,honor|2|9
札|サツ|ふだ|bid,counter for bonds,paper money|2|5
板|ハン,バン|いた|board,plank,plate|2|8
骨|コツ|ほね|bone,frame,remains|2|10
傾|ケイ|かし.げる,かた.げる,かたぶ.く|bias,incline,lean|2|13
届|カイ|-とど.け,とど.く,とど.ける|arrive,deliver,forward|2|8
巻|カン,ケン|ま.き,ま.く,まき|book,coil,counter for texts (or book scrolls)|2|9
燃|ネン|も.える,も.す,も.やす|blaze,burn,glow|2|16
跡|セキ|あと|impression,mark,print|2|13
包|ホウ|くる.む,つつ.む|conceal,cover,pack up|2|5
駐|チュウ||reside in,resident,stop-over|2|15
弱|ジャク|よわ.い,よわ.まる,よわ.める|frail,weak|2|10
紹|ショウ||help,inherit,introduce|2|11
雇|コ|やと.う|employ,hire|2|12
替|タイ|か.え-,か.える,か.わる|exchange,per-,spare|2|12
預|ヨ|あず.かる,あず.ける|custody,deposit,entrust to|2|13
焼|ショウ|-や.き,や.き,や.き-|bake,burning|2|12
簡|カン,ケン|えら.ぶ,ふだ|brevity,simplicity|2|18
章|ショウ||badge,chapter,composition|2|11
臓|ゾウ|はらわた|bowels,entrails,viscera|2|19
律|リチ,リツ,レツ||control,gauge,law|2|9
贈|ソウ,ゾウ|おく.る|award to,confer on,give to|2|18
照|ショウ|て.らす,て.る,て.れる|bashful,compare,illuminate|2|13
薄|ハク|-うす,うす-,うす.い|dilute,pampas grass,thin|2|16
群|グン|む.れ,む.れる,むら|cluster,crowd,flock|2|13
秒|ビョウ||second (1/60 minute)|2|9
奥|オウ|おく,おく.まる,くま|heart,interior|2|12
詰|キチ,キツ|-づ.め,つ.まる,つ.む|blame,close,packed|2|13
双|ソウ|たぐい,ならぶ,ふた|comparison,counter for pairs,pair|2|4
刺|シ|さ.さる,さ.し,さ.す|calling card,pierce,prick|2|8
純|ジュン||genuine,innocence,net (profit)|2|10
翌|ヨク||next,the following|2|11
快|カイ|こころよ.い|agreeable,cheerful,comfortable|2|7
片|ヘン|かた,かた-|leaf,one-sided,right-side kata radical (no. 91)|2|4
敬|キョウ,ケイ|うやま.う|awe,honor,respect|2|12
悩|ノウ|なや.ましい,なや.ます,なや.む|distress,illness,in pain|2|10
泉|セン|いずみ|fountain,spring|2|9
皮|ヒ|かわ|hide,leather,pelt|2|5
漁|ギョ,リョウ|あさ.る|fishery,fishing|2|14
荒|コウ|あ.らし,あ.らす,あ.れる|laid waste,rough,rude|2|9
貯|チョ|た.める,たくわ.える|keep,lay in,savings|2|12
硬|コウ|かた.い|hard,stiff|2|12
埋|マイ|い.ける,う.まる,う.める|be filled up,bury,embedded|2|10
柱|チュウ|はしら|cylinder,pillar,post|2|9
祭|サイ|まつ.り,まつ.る,まつり|celebrate,deify,enshrine|2|11
袋|タイ,ダイ|ふくろ|bag,pouch,sack|2|11
筆|ヒツ|ふで|handwriting,painting brush,writing|2|12
訓|キン,クン|おし.える,くん.ずる,よ.む|Japanese character reading,explanation,instruction|2|10
浴|ヨク|あ.びせる,あ.びる|bask in,bathe,be favored with|2|10
童|ドウ|わらべ|child,juvenile|2|12
宝|ホウ|たから|treasure,valuables,wealth|2|8
封|フウ,ホウ||closing,seal|2|9
胸|キョウ|むな-,むね|bosom,breast,chest|2|10
砂|サ,シャ|すな|sand|2|9
塩|エン|しお|salt|2|13
賢|ケン|かしこ.い|cleverness,intelligent,wisdom|2|16
腕|ワン|うで|ability,arm,talent|2|12
兆|チョウ|きざ.し,きざ.す|10**12,omen,portent|2|6
床|ショウ|とこ,ゆか|bed,counter for beds,floor|2|7
毛|モウ|け|down,feather,fur|2|4
緑|リョク,ロク|みどり|green|2|14
尊|ソン|たっと.い,たっと.ぶ,とうと.い|exalted,noble,precious|2|12
祝|シュウ,シュク|いわ.う|celebrate,congratulate|2|9
柔|ジュウ,ニュウ|やわ,やわ.ら,やわ.らか|gentleness,softness,tender|2|9
殿|テン,デン|-どの,との|Mr.,hall,lord|2|13
濃|ノウ|こ.い|concentrated,dark,thick|2|16
液|エキ||fluid,juice,liquid|2|11
衣|イ,エ|-ぎ,きぬ,ころも|clothes,dressing,garment|2|6
肩|ケン|かた|shoulder|2|8
零|レイ|こぼ.す,こぼ.れる,ぜろ|cipher,nothing,overflow|2|13
幼|ヨウ|おさな.い|childhood,infancy|2|5
荷|カ|に|baggage,bear (a burden),cargo|2|10
泊|ハク|と.まる,と.める|overnight stay,put up at,ride at anchor|2|8
黄|オウ,コウ|き,こ-|yellow|2|11
甘|カン|あま.い,あま.える,あま.やかす|be content,coax,pamper|2|5
臣|シン,ジン||retainer,subject|2|7
浅|セン|あさ.い|frivolous,shallow,shameful|2|9
掃|シュ,ソウ|は.く|brush,sweep|2|11
雲|ウン|-ぐも,くも|cloud|2|12
掘|クツ|ほ.る|delve,dig,excavate|2|11
捨|シャ|す.てる|abandon,discard,reject|2|11
軟|ナン|やわ.らか,やわ.らかい|soft|2|11
沈|ジン,チン|しず.む,しず.める|aloes,be depressed,be submerged|2|7
凍|トウ|い.てる,こお.る,こご.える|congeal,frozen,refrigerate|2|10
乳|ニュウ|ち,ちち|breasts,milk|2|8
恋|レン|こ.う,こい,こい.しい|darling,in love,miss|2|10
紅|ク,コウ|あか.い,くれない,べに|crimson,deep red|2|9
郊|コウ||outskirts,rural area,suburbs|2|9
腰|ヨウ|こし|hips,loins,low wainscoting|2|13
炭|タン|すみ|charcoal,coal|2|9
踊|ヨウ|おど.る|dance,jump,leap|2|14
冊|サク,サツ|ふみ|counter for books,tome,volume|2|5
勇|ユウ|いさ.む|be in high spirits,bravery,cheer up|2|9
械|カイ|かせ|contraption,fetter,instrument|2|11
菜|サイ|な|greens,side dish,vegetable|2|11
珍|チン|たから,めずら.しい|curious,rare,strange|2|9
卵|ラン|たまご|egg,ovum,roe|2|7
湖|コ|みずうみ|lake|2|12
喫|キツ|の.む|consume,drink,eat|2|12
干|カン|-ぼ.し,ひ.る,ほ.し-|dry,ebb,intercede|2|3
虫|キ,チュウ|むし|bug,insect,temper|2|6
刷|サツ|-ず.り,-ずり,す.る|brush,print,printing|2|8
湯|トウ|ゆ|bath,hot spring,hot water|2|12
溶|ヨウ|と.かす,と.く,と.ける|dissolve,melt,thaw|2|13
鉱|コウ|あらがね|mineral,ore|2|13
涙|ルイ,レイ|なみだ|sympathy,tears|2|10
匹|ヒツ|ひき|counter for small animals,equal,head|2|4
孫|ソン|まご|descendants,grandchild|2|10
鋭|エイ|するど.い|edge,pointed,sharp|2|15
枝|シ|えだ|bough,branch,counter for branches|2|8
塗|ト|ぬ.り,ぬ.る,まみ.れる|coating,daub,paint|2|13
軒|ケン|のき|counter for houses,eaves,flats|2|10
毒|ドク||germ,harm,injury|2|8
叫|キョウ|さけ.ぶ|exclaim,shout,yell|2|6
拝|ハイ|おが.む,おろが.む|adore,pray to,worship|2|8
氷|ヒョウ|こお.る,こおり,ひ|congeal,freeze,hail|2|5
乾|カン,ケン|いぬい,かわ.かす,かわ.く|dessicate,drink up,drought|2|11
棒|ボウ||cane,club,line|2|12
祈|キ|いの.る|pray,wish|2|8
拾|シュウ,ジュウ|ひろ.う|find,gather,go on foot|2|9
粉|フン|こ,こな,デシメートル|dust,flour,powder|2|10
糸|シ|いと|thread|2|6
綿|メン|わた|cotton|2|14
汗|カン|あせ|perspire,sweat|2|6
銅|ドウ|あかがね|copper|2|14
湿|シツ,シュウ|うるお.う,うるお.す,しめ.す|damp,moist,wet|2|12
瓶|ビン|かめ,へい|bottle,jar,jug|2|11
咲|ショウ|-ざき,さ.く|bloom,blossom|2|9
召|ショウ|め.す|buy,call,catch (cold)|2|5
缶|カン|かま|container,jar radical (no. 121),tin can|2|6
隻|セキ||arrows,birds,counter for ships|2|10
脂|シ|あぶら|fat,grease,gum|2|10
蒸|ジョウ,セイ|む.す,む.らす,む.れる|foment,get musty,heat|2|13
肌|キ|はだ|body,grain,skin|2|6
耕|コウ|たがや.す|cultivate,plow,till|2|10
鈍|ドン|なま.る,なまく.ら,にぶ-|blunt,dull,foolish|2|12
泥|デ,デイ,ナイ|どろ,なず.む|adhere to,be attached to,mire|2|8
隅|グウ|すみ|corner,nook|2|12
灯|トウ|あかり,とも.す,ともしび|a light,counter for lights,lamp|2|6
辛|シン|-づら.い,かのと,から.い|acrid,bitter,hot|2|7
磨|マ|す.る,みが.く|brush (teeth),grind,improve|2|16
麦|バク|むぎ|barley,wheat|2|7
姓|ショウ,セイ||surname|2|8
筒|トウ|つつ|cylinder,gun barrel,pipe|2|12
鼻|ビ|はな|nose,snout|2|14
粒|リュウ|つぶ|counter for tiny particles,drop,grains|2|11
詞|シ|ことば|part of speech,poetry,words|2|12
胃|イ||craw,crop,paunch|2|9
畳|ジョウ,チョウ|かさ.なる,たた.む,たたみ|counter for tatami mats,do away with,fold|2|12
机|キ|つくえ|desk,table|2|6
膚|フ|はだ|body,disposition,grain|2|15
濯|タク|すす.ぐ,ゆす.ぐ|laundry,pour on,rinse|2|17
塔|トウ||pagoda,steeple,tower|2|12
沸|フツ|わ.かす,わ.く|boil,breed,ferment|2|8
灰|カイ|はい|ashes,cremate,puckery juice|2|6
菓|カ||cakes,candy,fruit|2|11
帽|ボウ,モウ|おお.う,ずきん|cap,headgear|2|12
枯|コ|か.らす,か.れる|be seasoned,die,dry up|2|9
涼|リョウ|うす.い,すず.しい,すず.む|nice and cool,refreshing|2|11
舟|シュウ|-ぶね,ふな-,ふね|boat,ship|2|6
貝|バイ|かい|shellfish|2|7
符|フ||charm,mark,sign|2|11
憎|ゾウ|にく.い,にく.しみ,にく.む|detest,hate|2|14
皿|ベイ|さら|a helping,dish,plate|2|5
肯|コウ|がえんじ.る|agreement,comply with,consent|2|8
燥|ソウ|はしゃ.ぐ|dry up,parch|2|17
畜|チク||domestic fowl and animals,livestock|2|10
挟|キョウ,ショウ|さしはさ.む,はさ.まる,はさ.む|between,pinch|2|9
曇|ドン|くも.る|cloud up,cloudy weather|2|16
滴|テキ|しずく,したた.る|drip,drop|2|14
伺|シ|うかが.う|ask,implore,inquire|2|7
氏|シ|-うじ,うじ|clan,family name,surname|1|4
統|トウ|す.べる,ほび.る|governing,overall,relationship|1|12
保|ホ,ホウ|たも.つ|guarantee,keep,preserve|1|9
第|ダイ,テイ||No.,residence|1|11
結|ケチ,ケツ|むす.ぶ,ゆ.う,ゆ.わえる|bind,contract,do up hair|1|12
派|ハ||clique,faction,group|1|9
案|アン|つくえ|bench,draft,expectation|1|10
策|サク||means,plan,policy|1|12
基|キ|もと,もとい|counter for machines,foundation,fundamentals|1|11
価|カ,ケ|あたい|price,value|1|8
提|ダイ,チョウ,テイ|さ.げる|carry in hand,propose,take along|1|12
挙|キョ|あ.がる,あ.げる,こぞ.る|actions,behavior,plan|1|10
応|-ノウ,オウ,ヨウ|あた.る,こた.える,まさに|OK,accept,answer|1|7
企|キ|くわだ.てる,たくら.む|attempt,design,plan|1|6
検|ケン|しら.べる|examination,investigate|1|12
藤|トウ,ドウ|ふじ|wisteria|1|18
沢|タク|うるお.い,うるお.す,さわ|brilliance,grace,marsh|1|7
裁|サイ|さば.く,た.つ|cut out (pattern),decision,judge|1|12
証|ショウ|あかし|certificate,evidence,proof|1|12
援|エン||abet,help,save|1|12
施|シ,セ|ほどこ.す|alms,bestow,give|1|9
井|ショウ,セイ|い|community,town,well|1|4
護|ゴ|まも.る|protect,safeguard|1|20
展|テン||expand,unfold|1|10
態|タイ|わざ.と|appearance,attitude,condition|1|14
鮮|セン|あざ.やか|Korea,brilliant,clear|1|17
視|シ|み.る|inspection,look at,regard as|1|11
条|ジョウ,チョウ,デキ|えだ,すじ|article,clause,counter for articles, clauses, paragraphs, etc.|1|7
幹|カン|みき|capability,main part,talent|1|13
独|トク,ドク|ひと.り|Germany,alone,single|1|9
宮|キュウ,ク,クウ|みや|Shinto shrine,constellations,palace|1|10
率|シュツ,ソツ,リツ|ひき.いる|%,command,factor|1|11
衛|エ,エイ||defense,protection|1|16
張|チョウ|-は.り,-ば.り,は.る|counter for bows & stringed instruments,put up (tent),spread|1|11
監|カン||administer,govt office,official|1|15
環|カン|わ|circle,loop,ring|1|17
審|シン|つぶさ.に,つまび.らか|hearing,judge,trial|1|15
義|ギ||honor,justice,loyalty|1|13
訴|ソ|うった.える|accusation,appeal to,complain of pain|1|12
株|シュ|かぶ|counter for small plants,shares,stock|1|10
姿|シ|すがた|figure,form,shape|1|9
閣|カク||palace,tall building,tower|1|14
衆|シュ,シュウ|おお.い|great numbers,masses,multitude|1|12
評|ヒョウ||comment,criticism,evaluate|1|12
影|エイ|かげ|phantom,shadow,silhouette|1|15
松|ショウ|まつ|pine tree|1|8
撃|ゲキ|う.つ|attack,beat,conquer|1|15
佐|サ||assistant,help|1|7
核|カク||core,kernel,nucleus|1|10
整|セイ|ととの.う,ととの.える|arranging,key (music),meter|1|16
融|ユウ|と.かす,と.ける|dissolve,melt|1|16
製|セイ||made in...,manufacture|1|14
票|ヒョウ||ballot,label,sign|1|11
渉|ショウ|わた.る|ferry,ford,go cross|1|11
響|キョウ|ひび.く|echo,resound,ring|1|20
推|スイ|お.す|conjecture,guess,infer|1|11
請|ショウ,シン,セイ|う.ける,こ.う|ask,invite,solicit|1|15
器|キ|うつわ|ability,container,implement|1|15
士|シ|さむらい|gentleman,samurai,samurai radical (no. 33)|1|3
討|トウ|う.つ|attack,chastise,conquer|1|10
攻|コウ|せ.める|aggression,attack,criticize|1|7
崎|キ|さい,さき,みさき|cape,promontory,spit|1|11
督|トク||coach,command,lead|1|13
授|ジュ|さず.かる,さず.ける|confer,grant,impart|1|11
催|サイ|もよう.す,もよお.す|give (a dinner),hold (a meeting),sponsor|1|13
及|キュウ|およ.び,およ.ぶ,およ.ぼす|cause,exercise,exert|1|3
憲|ケン||constitution,law|1|16
離|リ|はな.す,はな.れる|detach,digress,disjoin|1|19
激|ゲキ|はげ.しい|chafe,enraged,get excited|1|16
摘|テキ|つ.む|clip,pick,pinch|1|14
系|ケイ||lineage,system|1|7
批|ヒ||criticism,strike|1|7
郎|リョウ,ロウ|おとこ|counter for sons,son|1|9
健|ケン|すこ.やか|health,healthy,persistence|1|11
盟|メイ||alliance,oath|1|13
従|ショウ,ジュ,ジュウ|したが.う,したが.える,より|accompany,comply,follow|1|10
修|シュ,シュウ|おさ.まる,おさ.める|conduct oneself well,discipline,master|1|10
隊|タイ||company,party,regiment|1|12
織|シキ,ショク|-お.り,-おり,お.り|fabric,weave|1|18
拡|カク,コウ|ひろ.がる,ひろ.げる,ひろ.める|broaden,enlarge,expand|1|8
故|コ|ふる.い,もと,ゆえ|cause,circumstances,consequently|1|9
振|シン|ふ.る,ふ.るう,ふ.れる|shake,swing,wag|1|10
弁|ヘン,ベン|あらそ.う,かんむり,はなびら|braid,conical cap,dialect|1|5
就|シュウ,ジュ|つ.く,つ.ける|concerning,depart,per|1|12
異|イ|け,こと,こと.なる|curious,different,queerness|1|11
献|ケン,コン|たてまつ.る|counter for drinks,offer,offering|1|13
厳|ゲン,ゴン|いか.めしい,いつくし,おごそ.か|rigidity,severity,stern|1|17
維|イ||fiber,rope,tie|1|14
浜|ヒン|はま|beach,seacoast,seashore|1|10
遺|イ,ユイ|のこ.す|bequeath,leave behind,reserve|1|15
塁|スイ,ライ,ルイ|とりで|base(ball),bases,fort|1|12
邦|ホウ|くに|Japan,country,home country|1|7
素|ス,ソ|もと|elementary,naked,principle|1|10
遣|ケン|-つか.い,-づか.い,つか.う|despatch,dispatch,do|1|13
抗|コウ|あらが.う|confront,defy,oppose|1|7
模|ボ,モ||copy,imitation,mock|1|14
雄|ユウ|お-,おす,おん|excellence,hero,leader|1|12
益|エキ,ヤク|ま.す|advantage,benefit,gain|1|10
緊|キン|し.まる,し.める|hard,reliable,solid|1|15
標|ヒョウ|しるし,しるべ|emblem,evidence,imprint|1|15
宣|セン|のたま.う|announce,proclaim,say|1|9
昭|ショウ||bright,shining|1|9
廃|ハイ|すた.る,すた.れる|abandon,abolish,cessation|1|12
伊|イ|かれ|Italy,that one|1|6
江|コウ|え|bay,creek,inlet|1|6
僚|リョウ||colleague,companion,official|1|14
吉|キチ,キツ|よし|congratulations,good luck,joy|1|6
盛|ジョウ,セイ|さか.る,さか.ん,も.る|boom,copulate,prosper|1|11
皇|オウ,コウ||emperor|1|9
臨|リン|のぞ.む|attend,call on,confront|1|18
踏|トウ|ふ.まえる,ふ.む|appraise,carry through,evade payment|1|15
壊|エ,カイ|こわ.す,こわ.れる,やぶ.る|break,demolition,destroy|1|16
債|サイ||bond,debt,loan|1|13
興|キョウ,コウ|おこ.す,おこ.る|entertain,interest,pleasure|1|16
源|ゲン|みなもと|origin,source|1|13
儀|ギ||a matter,affair,case|1|15
創|ショウ,ソウ|きず,けず.しける,つく.る|genesis,hurt,injury|1|12
障|ショウ|さわ.る|harm,hinder,hurt|1|14
継|ケイ|つ.ぐ,まま-|continue,graft (tree),inherit|1|13
筋|キン|すじ|descent,fiber,muscle|1|12
闘|トウ|あらそ.う,たたか.う|fight,war|1|18
葬|ソウ|ほうむ.る|bury,interment,shelve|1|12
避|ヒ|さ.ける,よ.ける|avert,avoid,evade|1|16
司|シ|つかさど.る|administer,director,govt office|1|5
康|コウ||ease,peace|1|11
善|ゼン|い.い,よ.い,よ.く|good,goodness,virtuous|1|12
逮|タイ||apprehend,chase|1|11
迫|ハク|せま.る|force,imminent,spur on|1|8
惑|ワク|まど.う|beguile,delusion,perplexity|1|12
崩|ホウ|-くず.れ,くず.す,くず.れる|crumble,demolish,die|1|11
紀|キ||account,annals,chronicle|1|9
聴|チョウ,テイ|き.く,ゆる.す|careful inquiry,headstrong,listen|1|17
脱|ダツ|ぬ.ぐ,ぬ.げる|be left out,escape from,get rid of|1|11
級|キュウ||class,grade,rank|1|9
博|ハク,バク||Dr.,Ph.D.,command|1|12
締|テイ|-し.め,-じ.め,し.まり|fasten,lock,shut|1|15
救|キュウ|すく.う|help,reclaim,rescue|1|11
執|シツ,シュウ|と.る|grasp,take hold,take to heart|1|11
房|ボウ|ふさ|bunch,fringe,house|1|8
撤|テツ||disarm,dismantle,exclude|1|15
削|サク|けず.る,そ.ぐ,はつ.る|pare,plane,sharpen|1|9
密|ミツ|ひそ.か|carefulness,density (pop),minuteness|1|11
措|ソ|お.く|discontinue,except,give up|1|11
志|シ|こころざ.す,こころざし,シリング|aspire,hopes,intention|1|7
載|サイ|の.せる,の.る|10**44,board,get on|1|13
陣|ジン||battle array,brief time,camp|1|10
我|ガ|わ,わ.が-,わが-|I,ego,oneself|1|7
為|イ|す.る,ため,たり|advantage,as a result of,be of use|1|9
抑|ヨク|おさ.える|do in spite of,in the first place,now|1|7
幕|バク,マク|とばり|act of play,bunting,curtain|1|13
染|セン|し.み,し.みる,そ.まる|color,dye,paint|1|9
奈|ダイ,ナ,ナイ|いかん,からなし|Nara,what?|1|8
傷|ショウ|いた.む,いた.める,きず|cut,gash,hurt|1|13
択|タク|えら.ぶ|choose,elect,prefer|1|7
秀|シュウ|ひい.でる|beauty,excel,excellence|1|7
徴|チ,チョウ|しるし|collect,indications,omen|1|14
弾|タン,ダン|-ひ.き,ただ.す,たま|bullet,flip,snap|1|12
償|ショウ|つぐな.う|make up for,recompense,redeem|1|17
功|ク,コウ|いさお|achievement,credit,honor|1|5
拠|キョ,コ|よ.る|based on,follow,foothold|1|8
秘|ヒ|かく.す,ひ.める,ひそ.か|conceal,secret|1|10
拒|キョ,ゴ|こば.む|decline,refuse,reject|1|8
刑|ケイ||penalty,punish,punishment|1|6
塚|チョウ|-づか,つか|hillock,mound|1|12
致|チ|いた.す|cause,do,doth|1|10
繰|ソウ|く.る|look up,reel,refer to|1|19
尾|ビ|お|counter for fish,end,lower slope of mountain|1|7
描|ビョウ|えが.く,か.く|compose,draw,paint|1|11
鈴|リン,レイ|すず|buzzer,small bell|1|13
盤|バン||board,phonograph record,platter|1|15
項|コウ|うなじ|clause,item,nape of neck|1|12
喪|ソウ|も|miss,mourning|1|12
伴|ハン,バン|ともな.う|accompany,bring with,companion|1|7
養|ヨウ,リョウ|やしな.う|bring up,develop,foster|1|15
懸|ケ,ケン|か.かる,か.ける|consult,depend,distant|1|20
街|カイ,ガイ|まち|boulevard,street,town|1|12
契|ケイ|ちぎ.る|pledge,promise,vow|1|9
掲|ケイ|かか.げる|describe,display,hang out|1|11
躍|ヤク|おど.る|dance,leap,skip|1|21
棄|キ|す.てる|abandon,discard,reject|1|13
邸|テイ|やしき|mansion,residence|1|8
縮|シュク|ちぢ.まる,ちぢ.む,ちぢ.める|contract,reduce,shrink|1|17
還|カン|かえ.る|return,send back|1|16
属|ショク,ゾク|さかん,つく,やから|affiliated,belong,genus|1|12
慮|リョ|おもんぱか.る,おもんぱく.る|concern,consider,deliberate|1|15
枠||わく|(kokuji),bounding-box,frame|1|8
恵|エ,ケイ|めぐ.み,めぐ.む|blessing,favor,grace|1|10
露|ロ,ロウ|つゆ|Russia,dew,expose|1|21
沖|チュウ|おき,おきつ,ちゅう.する|offing,open sea,rise high into sky|1|7
緩|カン|ゆる.い,ゆる.む,ゆる.める|be moderate,ease,lessen|1|15
節|セチ,セツ|-ぶし,のっと,ふし|clause,honor,joint|1|13
需|ジュ||demand,need,request|1|14
射|シャ|い.る,う.つ,さ.す|archery,onto,shine into|1|10
購|コウ||buy,subscription|1|17
揮|キ|ふる.う|brandish,shake,swing|1|12
充|ジュウ|あ.てる,み.たす|allot,fill|1|6
貢|ク,コウ|みつ.ぐ|finance,support,tribute|1|10
鹿|ロク|か,しか|deer|1|11
却|キャク|かえ.って,しりぞ.く,しりぞ.ける|instead,on the contrary,rather|1|7
端|タン|-ばた,は,はし|border,cape,edge|1|14
賃|チン||charge,fare,fee|1|13
獲|カク|え.る|able to,acquire,can|1|16
郡|グン|こおり|county,district|1|10
併|ヘイ|あわ.せる|collective,get together,join|1|8
徹|テツ||clear,penetrate,pierce|1|15
貴|キ|たっと.い,たっと.ぶ,とうと.い|esteem,honor,precious|1|12
衝|ショウ|つ.く|brunt,collide,highway|1|15
焦|ショウ|あせ.る,こ.がす,こ.がれる|burn,char,hurry|1|12
奪|ダツ|うば.う|dispossess,plunder,rob|1|14
災|サイ|わざわ.い|calamity,curse,disaster|1|7
浦|ホ|うら|bay,beach,creek|1|10
析|セキ||analyze,chop,divide|1|8
譲|ジョウ|ゆず.る|convey,defer,transfer|1|20
称|ショウ|あ.げる,かな.う,たた.える|admire,appellation,fame|1|10
納|トウ,ナ,ナッ|-おさ.める,おさ.まる,おさ.める|obtain,pay,reap|1|10
樹|ジュ|き|establish,set up,timber|1|16
挑|チョウ|いど.む|challenge,contend for,make love to|1|9
誘|ユウ|いざな.う,さそ.う|allure,ask,call for|1|14
紛|フン|-まぎ.れ,まぎ.らす,まぎ.らわしい|be mistaken for,distract,divert|1|10
至|シ|いた.る|arrive,attain,climax|1|6
宗|シュウ,ソウ|むね|denomination,essence,main point|1|8
促|ソク|うなが.す|demand,incite,press|1|9
慎|シン|つつ.ましい,つつし,つつし.み|be careful,discreet,humility|1|13
控|コウ|ひか.え,ひか.える|be moderate,draw in,hold back|1|11
智|チ||intellect,reason,wisdom|1|12
握|アク|にぎ.る|bribe,grip,hold|1|12
宙|チュウ||air,interval of time,memorization|1|8
俊|シュン||excellence,genius,sagacious|1|9
銭|セン,ゼン|すき,ぜに|.01 yen,coin,money|1|14
渋|シュウ,ジュウ|しぶ,しぶ.い,しぶ.る|astringent,have diarrhea,hesitate|1|11
銃|ジュウ|つつ|arms,gun|1|14
操|サン,ソウ|あやつ.る,みさお|chastity,fidelity,maneuver|1|16
携|ケイ|たずさ.える,たずさ.わる|armed with,bring along,carry (in hand)|1|13
診|シン|み.る|checkup,diagnose,examine|1|12
託|タク|かこ.つ,かこ.つける,かこつ.ける|consign,entrusting with,hint|1|10
撮|サツ|-ど.り,つま.む,と.る|snapshot,take pictures|1|15
誕|タン||be arbitrary,be born,declension|1|15
侵|シン|おか.す|encroach,invade,raid|1|9
括|カツ|くく.る|arrest,constrict,fasten|1|9
謝|シャ|あやま.る|apologize,refuse,thank|1|17
駆|ク|か.ける,か.る|advance,drive,gallop|1|14
透|トウ|す.かす,す.く,す.ける|filter,penetrate,permeate|1|10
津|シン|つ|ferry,harbor,haven|1|9
壁|ヘキ|かべ|fence,lining (stomach),wall|1|16
稲|テ,トウ|いな-,いね|rice plant|1|14
仮|カ,ケ|かり,かり-|assumed (name),informal,interim|1|6
裂|レツ|-ぎ.れ,さ.く,さ.ける|rend,split,tear|1|12
敏|ビン|さとい|agile,alert,cleverness|1|10
是|シ,ゼ|ここ,この,これ|just so,justice,right|1|9
排|ハイ||arrange,exclude,expel|1|11
裕|ユウ||abundant,fertile,rich|1|12
堅|ケン|-がた.い,かた.い|hard,reliable,solid|1|12
訳|ヤク|わけ|case,circumstance,reason|1|11
芝|シ|しば|lawn,turf|1|6
綱|コウ|つな|cable,class (genus),cord|1|14
典|テン,デン|のり,ふみ|ceremony,code,law|1|8
賀|ガ||congratulations,joy|1|12
扱|キュウ,ソウ|あつか.い,あつか.う,あつか.る|entertain,handle,strip|1|6
顧|コ|かえり.みる|examine oneself,look back,review|1|21
弘|グ,コウ|ひろ.い|broad,vast,wide|1|5
看|カン|み.る|see,watch over|1|9
訟|ショウ||accuse,sue|1|11
戒|カイ|いまし.める|commandment|1|7
祉|シ||happiness,welfare|1|8
誉|ヨ|ほ.める,ほま.れ|glory,honor,praise|1|13
歓|カン|よろこ.ぶ|delight,joy|1|15
奏|ソウ|かな.でる|complete,play music,speak to a ruler|1|9
勧|カン,ケン|すす.める|advise,encourage,offer|1|13
騒|ソウ|うれい,さわ.がしい,さわ.ぐ|boisterous,clamor,disturb|1|18
閥|バツ||clan,clique,faction|1|14
甲|カン,コウ|きのえ|A grade,armor,carapace|1|5
縄|ジョウ|ただ.す,なわ|cord,straw rope|1|15
郷|キョウ,ゴウ|さと|district,home town,native place|1|11
揺|ヨウ|うご.く,ゆ.さぶる,ゆ.すぶる|rock,shake,sway|1|12
免|メン|まぬか.れる,まぬが.れる|dismissal,excuse|1|8
既|キ|すで.に|already,long ago,previously|1|10
薦|セン|すす.める|advise,encourage,mat|1|16
隣|リン|とな.る,となり|neighboring|1|16
華|カ,ケ|はな|flower,gay,gorgeous|1|10
範|ハン||example,model,pattern|1|15
隠|イン,オン|かく.し,かく.す,かく.れる|conceal,cover,hide|1|14
徳|トク||benevolence,commanding respect,goodness|1|14
哲|テツ|あきらか,さとい|clear,philosophy|1|10
杉|サン|すぎ|cedar,cryptomeria|1|7
釈|シャク,セキ|す.てる,とく,ゆる.す|explanation|1|11
己|キ,コ|おのれ,つちのと,な|self|1|3
妥|ダ||depravity,gentle,peace|1|7
威|イ|おど.かす,おど.し,おど.す|dignity,intimidate,majesty|1|9
豪|ゴウ|えら.い|Australia,excelling,great|1|14
熊|ユウ|くま|bear|1|14
滞|タイ,テイ|とどこお.る|arrears,be delayed,overdue|1|13
微|ビ|かす.か|delicate,insignificance,minuteness|1|13
隆|リュウ||high,hump,noble|1|11
症|ショウ||illness,symptoms|1|10
暫|ザン|しばら.く|a while,long time,moment|1|15
忠|チュウ||faithfulness,fidelity,loyalty|1|8
倉|ソウ|くら|cellar,godown,storehouse|1|10
彦|ゲン|ひこ|boy (ancient),lad|1|9
肝|カン|きも|chutzpah,liver,nerve|1|7
喚|カン|わめ.く|call,cry,scream|1|12
沿|エン|-ぞ.い,そ.う|follow along,lie along,run along|1|8
妙|ビョウ,ミョウ|たえ|charming,delicate,excellent|1|7
唱|ショウ|とな.える|call upon,chant,recite|1|11
阿|ア,オ|おもね.る,くま|Africa,corner,fawn upon|1|8
索|サク||cord,inquiring,rope|1|10
誠|セイ|まこと|admonish,fidelity,prohibit|1|13
襲|シュウ|おそ.う,かさ.ね|advance on,attack,heap|1|22
懇|コン|ねんご.ろ|cordial,courteous,hospitable|1|17
俳|ハイ||actor,haiku|1|10
柄|ヘイ|え,がら,つか|build,character,crank|1|9
驚|キョウ|おどろ.かす,おどろ.く|amazed,be surprised,frightened|1|22
麻|マ,マア|あさ|flax,hemp,numb|1|11
李|リ|すもも|plum|1|7
浩|コウ|おおき.い,ひろ.い|abundance,vigorous,wide expanse|1|10
剤|ザイ,スイ,セイ|かる,けず.る|dose,drug,medicine|1|10
瀬|ライ|せ|current,rapids,shallows|1|19
趣|シュ|おもむ.く,おもむき|become,elegance,gist|1|15
陥|カン|おちい.る,おとしい.れる|cave in,collapse,fall (castle)|1|10
斎|サイ|い.む,いつ.く,いわ.う|Buddhist food,alike,avoid|1|11
貫|カン|つらぬ.く,ぬ.く,ぬき|8 1/3lbs,brace,penetrate|1|11
仙|セン,セント||cent,hermit,wizard|1|5
慰|イ|なぐさ.む,なぐさ.める|amusement,cheer,comfort|1|15
序|ジョ|つい.で,ついで|beginning,chance,incidentally|1|7
旬|シュン,ジュン||decameron,season (for specific products),ten-day period|1|6
兼|ケン|-か.ねる,か.ねる|and,beforehand,concurrently|1|10
聖|ショウ,セイ|ひじり|holy,master,priest|1|13
旨|シ|うま.い,むね|clever,delicious,expert|1|6
即|ソク|すなわ.ち,つ.く,つ.ける|adapt,agree,as is|1|7
柳|リュウ|やなぎ|willow|1|9
舎|シャ,セキ|やど.る|cottage,house,hut|1|8
偽|カ,ギ|いつわ.り,いつわ.る,にせ|counterfeit,deceive,falsehood|1|11
較|カク,コウ|くら.べる|compare,contrast|1|13
覇|ハ,ハク|はたがしら|champion,hegemony,leadership|1|19
詳|ショウ|くわ.しい,つまび.らか|accurate,detailed,full|1|13
抵|テイ||reach,resist,touch|1|8
脅|キョウ|おど.かす,おど.す,おびや.かす|coerce,threaten|1|10
茂|モ|しげ.る|be luxuriant,grow thick,overgrown|1|8
犠|キ,ギ|いけにえ|sacrifice|1|17
旗|キ|はた|banner,national flag,standard|1|14
距|キョ|けづめ,へだ.たる|fetlock,long-distance,spur|1|12
雅|ガ|みや.び|elegant,graceful,gracious|1|13
飾|ショク|かざ.り,かざ.る|adorn,decorate,embellish|1|13
網|モウ|あみ|netting,network|1|14
竜|リュウ,リョウ,ロウ|いせ,たつ|dragon,imperial|1|10
詩|シ|うた|poem,poetry|1|13
繁|ハン|しげ.く,しげ.る|complexity,frequency,luxuriant|1|16
翼|ヨク|つばさ|flank,plane,wing|1|17
潟|セキ|-がた,かた|lagoon|1|15
敵|テキ|あだ,かたき,かな.う|enemy,foe,opponent|1|15
魅|ミ||bewitch,charm,fascination|1|15
嫌|ケン,ゲン|いや,きら.い,きら.う|detest,dislike,hate|1|13
斉|サイ,セイ|あたる,そろ.う,はやい|adjusted,alike,equal|1|8
敷|フ|-し.き,し.く|pave,promulgate,sit|1|15
擁|ヨウ||embrace,hug,lead|1|16
圏|ケン|かこ.い|circle,radius,range|1|12
酸|サン|す.い|acid,bitterness,sour|1|14
罰|ハツ,バチ,バツ|ばっ.する|penalty,punishment|1|14
滅|メツ|ほろ.びる,ほろ.ぶ,ほろ.ぼす|destroy,overthrow,perish|1|13
礎|ソ|いしずえ|cornerstone,foundation stone|1|18
腐|フ|-くさ.る,くさ.す,くさ.らす|decay,rot,sour|1|14
脚|カク,キャ,キャク|あし|base,leg,lower part|1|11
潮|チョウ|うしお,しお|opportunity,salt water,tide|1|15
梅|バイ|うめ|plum|1|10
尽|サン,ジン|-ず.く,-づ.く,ことごと.く|befriend,deplete,exhaust|1|6
僕|ボク|しもべ|I (male),manservant,me|1|14
桜|オウ,ヨウ|さくら|cherry|1|10
滑|カツ,コツ|すべ.る,なめ.らか|fail exam,slide,slip|1|13
孤|コ||alone,orphan|1|9
炎|エン|ほのお|blaze,flame,inflammation|1|8
賠|バイ||compensation,indemnify|1|15
句|ク||clause,counter for haiku,paragraph|1|5
鋼|コウ|はがね|steel|1|16
頑|ガン|かたく.な|firmly,foolish,stubborn|1|13
鎖|サ|くさり,とざ.す|chain,connection,irons|1|18
彩|サイ|いろど.る|coloring,makeup,paint|1|11
摩|マ|さす.る,す.る,ま.する|chafe,grind,polish|1|15
励|レイ|はげ.ます,はげ.む|be diligent,encourage,inspire|1|7
縦|ジュウ|たて|height,length,self-indulgent|1|16
輝|キ|かがや.く|gleam,radiance,shine|1|15
蓄|チク|たくわ.える|amass,hoard,raise|1|13
軸|ジク||axis,counter for book scrolls,pivot|1|12
巡|ジュン|めぐ.り,めぐ.る|circumference,go around,patrol|1|6
稼|カ|かせ.ぐ|earn money,earnings,work|1|15
瞬|シュン|まじろ.ぐ,またた.く|blink,twinkle,wink|1|18
砲|ホウ||cannon,gun|1|10
噴|フン|ふ.く|emit,erupt,flush out|1|15
誇|コ|ほこ.る|be proud,boast,pride|1|13
祥|ショウ|きざ.し,さいわ.い,つまび.らか|auspicious,blessedness,good fortune|1|10
牲|セイ||animal sacrifice,offering|1|9
秩|チツ||order,regularity,salary|1|10
帝|テイ|みかど|creator,god,sovereign|1|9
宏|コウ|ひろ.い|large,wide|1|7
唆|サ|そそ.る,そそのか.す|instigate,promote,seduce|1|10
阻|ソ|はば.む|deter,impede,obstruct|1|8
泰|タイ||Thailand,calm,easy|1|10
賄|ワイ|まかな.う|board,bribe,finance|1|13
撲|ボク||beat,hit,slap|1|15
堀|クツ|ほり|canal,ditch,moat|1|11
菊|キク||chrysanthemum|1|11
絞|コウ|し.まる,し.める,しぼ.る|constrict,strangle,wring|1|12
縁|-ネン,エン|えにし,ふち,ふち.どる|affinity,border,brink|1|15
唯|イ,ユイ|ただ|merely,only,simply|1|11
膨|ボウ|ふく.らむ,ふく.れる|get fat,swell,thick|1|16
矢|シ|や|arrow,dart|1|5
耐|タイ|た.える|-proof,enduring|1|9
塾|ジュク||cram school,private school|1|14
漏|ロウ|も.らす,も.る,も.れる|escape,leak,time|1|14
慶|ケイ|よろこ.び|be happy,congratulate,jubilation|1|15
猛|モウ||become furious,fierce,rave|1|11
芳|ホウ|かんば.しい|balmy,favorable,fragrant|1|7
懲|チョウ|こ.らしめる,こ.らす,こ.りる|chastise,discipline,penal|1|18
剣|ケン|つるぎ|blade,clock hand,sabre|1|10
彰|ショウ||clear,patent|1|14
棋|キ|ご|Japanese chess,chess piece,shogi|1|12
丁|チ,チョウ,チン|ひのと|4th calendar sign,counter for guns, tools, leaves or cakes of something,even number|1|2
恒|コウ|つね,つねに|always,constancy|1|9
揚|ヨウ|-あ.げ,あ.がる,あ.げる|elevate,extol,fry in deep fat|1|12
冒|ボウ|おか.す|assume (a name),damage,dare|1|9
之|シ|この,これ,の|of,this|1|3
倫|リン||companion,ethics|1|10
陳|チン|ひ.ねる|exhibit,explain,relate|1|11
憶|オク||recollection,remember,think|1|16
潜|セン|かく.れる,くぐ.る,ひそ.む|conceal,hide,hush|1|15
梨|リ|なし|pear tree|1|11
仁|ジン,ニ,ニン||benevolence,charity,humanity|1|4
克|コク|か.つ|kindly,overcome,skillfully|1|7
岳|ガク|たけ|mountain,peak,point|1|8
概|ガイ|おおむ.ね|approximation,condition,generally|1|14
拘|コウ|かか.わる|adhere to,arrest,concerned|1|8
墓|ボ|はか|grave,tomb|1|13
黙|ボク,モク|だま.る,もだ.す|become silent,leave as is,silence|1|15
須|シュ,ス|すべから.く,すべし,ひげ|by all means,necessarily,ought|1|12
偏|ヘン|かたよ.る|biased,inclining,left-side radical|1|11
雰|フン||atmosphere,fog|1|12
遇|グウ|あ.う|deal with,encounter,entertain|1|12
諮|シ|はか.る|consult with|1|16
狭|キョウ,コウ|さ,せば.まる,せば.める|contract,cramped,narrow|1|9
卓|タク||desk,eminent,high|1|8
亀|キ,キュウ,キン|かめ|tortoise,turtle|1|11
糧|リョウ,ロウ|かて|bread,food,provisions|1|18
簿|ボ||record book,register|1|19
炉|ロ|いろり|furnace,hearth,kiln|1|8
牧|ボク|まき|breed,care for,feed|1|8
殊|シュ|こと|especially,exceptionally,particularly|1|10
殖|ショク|ふ.える,ふ.やす|augment,increase,multiply|1|12
艦|カン||warship|1|21
輩|ハイ|-ばら,ともがら,やかい|companions,comrade,fellow|1|15
穴|ケツ|あな|aperture,cave,den|1|5
奇|キ|あや.しい,く.しき,くし|curiosity,strange,strangeness|1|8
慢|マン||laziness,ridicule|1|14
鶴|カク|つる|crane,stork|1|21
謀|ボウ,ム|たばか.る,はか.る,はかりごと|cheat,conspire,deceive|1|16
暖|ダン,ノン|あたた.か,あたた.かい,あたた.まる|warmth|1|13
昌|ショウ|さかん|bright,clear,prosperous|1|8
拍|ハク,ヒョウ||beat (music),clap|1|8
朗|ロウ|あき.らか,ほが.らか|bright,cheerful,clear|1|10
寛|カン|くつろ.ぐ,ひろ.い,ゆる.やか|be at ease,broadminded,feel at home|1|13
覆|フク|おお.う,くつがえ.す,くつがえ.る|be ruined,capsize,cover|1|18
胞|ホウ||placenta,sac,sheath|1|9
泣|キュウ|な.く|cry,moan,weep|1|8
隔|カク|へだ.たる,へだ.てる|alternate,distance,gulf|1|13
浄|ジョウ,セイ|きよ.い,きよ.める|Manchu Dynasty,clean,cleanse|1|9
没|ボツ,モツ|おぼ.れる,しず.む,ない|die,disappear,drown|1|7
暇|カ|いとま,ひま|leave of absence,leisure,rest|1|13
肺|ハイ||lungs|1|9
貞|ジョウ,テイ|さだ,ただし.い|chastity,constancy,righteousness|1|9
靖|ジョウ,セイ|やす.んじる|peaceful|1|13
鑑|カン|かがみ,かんが.みる|learn from,specimen,take warning from|1|23
飼|シ|か.う|domesticate,feed,keep|1|13
陰|イン|かげ,かげ.る|negative,secret,sex organs|1|11
銘|メイ||inscription,signature (of artisan)|1|14
随|ズイ|したが.う,まにま.に|all,at the mercy of (the waves),both|1|12
烈|レツ|はげ.しい|ardent,extreme,furious|1|10
尋|ジン|たず.ねる,ひろ|fathom,inquire,look for|1|12
稿|コウ|したがき,わら|copy,draft,manuscript|1|15
丹|タン|に|pills,red,red lead|1|4
啓|ケイ|さと.す,ひら.く|disclose,open,say|1|11
也|エ,ヤ|か,なり,また|to be (classical)|1|3
丘|キュウ|おか|hill,knoll|1|5
棟|トウ|むな-,むね|ridge,ridgepole|1|12
壌|ジョウ|つち|earth,lot,soil|1|16
漫|マン|そぞ.ろ,みだり.に|cartoon,corrupt,in spite of oneself|1|14
玄|ゲン|くろ,くろ.い|black,deep,mysterious|1|5
粘|ネン|ねば.る|glutinous,greasy,persevere|1|11
悟|ゴ|さと.る|discern,enlightenment,perceive|1|10
舗|ホ||pave,shop,store|1|15
妊|ジン,ニン|はら.む,みごも.る|pregnancy|1|7
熟|ジュク|う.れる|acquire skill,mature,mellow|1|15
旭|キョク|あさひ|morning sun,rising sun|1|6
恩|オン||benefit,blessing,favor|1|10
騰|トウ|あが.る,のぼ.る|advancing,going,jumping up|1|20
往|オウ|い.く,いにしえ,さき.に|before,chase away,formerly|1|8
豆|ズ,トウ|まめ,まめ-|beans,midget,pea|1|7
遂|スイ|つい.に,と.げる|accomplish,attain,commit (suicide)|1|12
狂|キョウ|くる.う,くる.おしい,くるお.しい|confuse,crazy,insane|1|7
岐|キ,ギ||arena,branch off,fork in road|1|7
陛|ヘイ||highness,steps (of throne)|1|10
緯|イ|ぬき,よこいと|(parallels of) latitude,horizontal,left & right|1|16
培|バイ|つちか.う|cultivate,foster|1|11
衰|スイ|おとろ.える|decline,wane,weaken|1|10
艇|テイ||rowboat,small boat|1|13
屈|クツ|かが.む,かが.める|bend,flinch,submit|1|8
径|ケイ|こみち,さしわたし,ただちに|diameter,method,path|1|8
淡|タン|あわ.い|faint,fleeting,pale|1|11
抽|チュウ|ひき-|excel,extract,pluck|1|8
披|ヒ||expose,open|1|8
廷|テイ||courts,government office,imperial court|1|7
錦|キン|にしき|brocade,fine dress,honors|1|16
准|ジュン||associate,quasi-,semi-|1|10
暑|ショ|あつ.い|hot,sultry,summer heat|1|12
磯|キ|いそ|beach,seashore|1|17
奨|ショウ,ソウ|すす.める|encourage,exhort,urge|1|13
浸|シン|つ.かる,ひた.す,ひた.る|dip,dunk,immersed|1|10
剰|ジョウ|あま.り,あま.る,あまつさえ|besides,surplus|1|11
胆|タン|きも|courage,gall bladder,nerve|1|9
繊|セン||fine,slender,thin kimono|1|17
駒|ク|こま|colt,horse,pony|1|15
虚|キョ,コ|うつ.ろ,むな.しい|crack,emptiness,fissure|1|11
霊|リョウ,レイ|たま|soul,spirits|1|15
帳|チョウ|とばり|account book,album,curtain|1|11
悔|カイ|く.いる,く.やむ,くや.しい|regret,repent|1|9
諭|ユ|さと.す|admonish,charge,persuade|1|16
惨|サン,ザン|いた.む,みじ.め,むご.い|cruelty,disaster,harsh|1|11
虐|ギャク|しいた.げる|oppress,tyrannize|1|9
翻|ハン,ホン|ひるがえ.す,ひるがえ.る|change (mind),flip,flutter|1|18
墜|ツイ|お.ちる,お.つ|crash,fall (down)|1|15
沼|ショウ|ぬま|bog,lake,marsh|1|8
据|キョ|す.える,す.わる|equip,install,lay a foundation|1|11
肥|ヒ|こ.える,こ.やし,こ.やす|fertile,fertilizer,get fat|1|8
徐|ジョ|おもむ.ろに|deliberately,gently,gradually|1|10
糖|トウ||sugar|1|16
搭|トウ||board,load (a vehicle),ride|1|12
盾|ジュン|たて|escutcheon,pretext,shield|1|9
脈|ミャク|すじ|hope,pulse,vein|1|10
滝|ソウ,ロウ|たき|cascade,rapids,waterfall|1|13
軌|キ||model,rut,track|1|9
俵|ヒョウ|たわら|bag,bale,counter for bags|1|10
妨|ボウ|さまた.げる|disturb,hamper,obstruct|1|7
擦|サツ|-ず.れ,こす.る,こす.れる|chafe,grate,rub|1|17
鯨|ゲイ|くじら|whale|1|19
荘|ショウ,ソウ,チャン|おごそ.か,ほうき|cottage,dignified,feudal manor|1|9
諾|ダク||agreement,assent,consent|1|15
雷|ライ|いかずち,いかづち,かみなり|lightning bolt,thunder|1|13
漂|ヒョウ|ただよ.う|drift,float (on liquid)|1|14
懐|エ,カイ|いだ.く,おも.う,なず.ける|become attached to,bosom,breast|1|16
勘|カン||check,compare,intuition|1|11
栽|サイ||plantation,planting|1|10
拐|カイ||falsify,kidnap|1|8
駄|タ,ダ||burdensome,horse load,pack horse|1|14
添|テン|そ.う,そ.える|accompany,annexed,append|1|11
冠|カン|かんむり|best,crown,peerless|1|9
斜|シャ|なな.め,はす|diagonal,oblique,slanting|1|11
鏡|キョウ,ケイ|かがみ|barrel-head,mirror,round rice-cake offering|1|19
聡|ソウ|さと.い,みみざと.い|fast learner,wise|1|14
浪|ロウ||billows,reckless,unrestrained|1|10
亜|ア|つ.ぐ|-ous,Asia,come after|1|7
覧|ラン|み.る|perusal,see|1|17
詐|サ|いつわ.る|deceive,falsehood,lie|1|12
壇|タン,ダン||podium,rostrum,stage|1|16
勲|クン|いさお|merit,meritorious deed|1|15
魔|マ||demon,evil spirit,witch|1|21
酬|シュ,シュウ,トウ|むく.いる|repay,retribution,reward|1|13
紫|シ|むらさき|purple,violet|1|12
曙|ショ|あけぼの|dawn,daybreak|1|17
紋|モン||family crest,figures|1|10
卸|シャ|おろ.し,おろ.す,おろし|wholesale|1|9
奮|フン|ふる.う|be invigorated,flourish,stirred up|1|16
欄|ラン|てすり|blank,column,handrail|1|20
逸|イツ|そ.らす,そ.れる,はぐ.れる|deviate,diverge,elude|1|11
涯|ガイ|はて|bound,horizon,limit|1|11
拓|タク|ひら.く|break up (land),clear (the land),open|1|8
眼|ガン,ゲン|まなこ,め|eyeball|1|11
獄|ゴク||jail,prison|1|14
尚|ショウ|なお|esteem,furthermore,still|1|8
彫|チョウ|-ぼ.り,ほ.る|carve,chisel,engrave|1|11
穏|オン|おだ.やか|calm,moderation,quiet|1|16
顕|ケン|あきらか,あらわ.れる|appear,existing|1|18
巧|コウ|うま.い,たく.み,たく.む|adroit,ingenuity,skilled|1|5
矛|ボウ,ム|ほこ|arms,festival float,halberd|1|5
垣|エン|かき|fence,hedge,wall|1|9
欺|ギ|あざむ.く|cheat,deceit,delude|1|12
釣|チョウ|つ.り,つ.り-,つ.る|allure,angling,catch|1|11
萩|シュウ|はぎ|bush clover|1|12
粛|シュク,スク|つつし.む|quietly,softly,solemn|1|11
栗|リ,リツ|おののく,くり|chestnut|1|10
愚|グ|おろ.か|absurdity,folly,foolish|1|13
嘉|カ|よい,よみ.する|applaud,auspicious,esteem|1|14
遭|ソウ|あ.う,あ.わせる|association,encounter,interview|1|14
架|カ|か.かる,か.ける|construct,erect,frame|1|9
鬼|キ|おに,おに-|devil,ghost|1|10
庶|ショ||all,bastard,commoner|1|11
稚|ジ,チ|いとけない,おくて,おさない|immature,young|1|13
滋|シ,ジ||be luxuriant,more & more,nourishing|1|12
幻|ゲン|まぼろし|apparition,dream,illusion|1|4
煮|シャ|-に,に.える,に.やす|boil,cook|1|12
姫|キ|ひめ,ひめ-|princess|1|10
誓|セイ|ちか.う|pledge,swear,vow|1|14
把|ハ,ワ||bunch,counter for bundles,faggot|1|7
践|セン|ふ.む|carry through,practice,step on|1|13
呈|テイ||display,exhibit,offer|1|7
疎|ショ,ソ|うと.い,うと.む,まば.ら|alienate,neglect,penetrate|1|12
仰|ギョウ,コウ|あお.ぐ,お.っしゃる,おお.せ|depend,drink,face-up|1|6
剛|ゴウ||strength,sturdy|1|10
疾|シツ|はや.い|rapidly|1|10
征|セイ||attack the rebellious,collect taxes,subjugate|1|8
砕|サイ|くだ.く,くだ.ける|break,crush,familiar|1|9
謡|ヨウ|うた.い,うた.う|ballad,noh chanting,sing|1|16
嫁|カ|い.く,とつ.ぐ,ゆ.く|bride,marry into|1|13
謙|ケン|へりくだ.る|be modest,condescend,humble oneself|1|17
后|コウ,ゴ|きさき|after,back,behind|1|6
嘆|タン|なげ.かわしい,なげ.く|grieve,lament,moan|1|13
菌|キン||bacteria,fungus,germ|1|11
鎌|ケン,レン|かま|scythe,sickle,trick|1|18
巣|ソウ|す,す.くう|cobweb,den,hive|1|11
頻|ヒン|しき.りに|recur,repeatedly|1|17
琴|キン,ゴン|こと|harp,koto|1|12
班|ハン||corps,group,squad|1|10
棚|ホウ|-だな,たな|ledge,mantle,mount|1|12
潔|ケツ|いさぎよ.い|clean,gallant,pure|1|15
酷|コク|ひど.い|atrocious,cruel,severe|1|14
宰|サイ||manager,rule,superintend|1|10
廊|ロウ||corridor,hall,tower|1|12
寂|ジャク,セキ|さび,さび.しい,さび.れる|death of a priest,loneliness,mature|1|11
辰|シン,ジン|たつ|7-9AM,fifth sign of Chinese zodiac,shin dragon radical (no. 161)|1|7
霞|カ,ゲ|かす.む,かすみ|be hazy,blurred,grow dim|1|17
伏|フク|ふ.す,ふ.せる|bend down,bow,cover|1|6
碁|ゴ||Go|1|13
俗|ゾク||customs,manners,mundane things|1|9
漠|バク||desert,obscure,vague|1|13
邪|ジャ|よこし.ま|injustice,wicked,wrong|1|8
晶|ショウ||clear,crystal,sparkle|1|12
墨|ボク|すみ|India ink,Mexico,black ink|1|14
鎮|チン|おさえ,しず.まる,しず.める|ancient peace-preservation centers,tranquilize|1|18
洞|ドウ|ほら|cave,den,excavation|1|9
履|リ|は.く|boots,complete,footgear|1|15
劣|レツ|おと.る|be inferior to,be worse,inferiority|1|6
那|ダ,ナ|いかん,なに,なんぞ|what?|1|7
殴|オウ|なぐ.る|assault,beat,hit|1|8
娠|シン||pregnancy,with child|1|10
奉|ブ,ホウ|たてまつ.る,ほう.ずる,まつ.る|dedicate,observance,offer|1|8
憂|ユウ|う.い,う.き,うれ.い|be anxious,grieve,lament|1|15
朴|ボク|えのき,ほう,ほお|crude,docile,plain|1|6
亭|チン,テイ||arbor,cottage,mansion|1|9
淳|シュン,ジュン|あつ.い|pure|1|11
怪|カイ,ケ|あや.しい,あや.しむ|apparition,mystery,suspicious|1|8
鳩|キュウ,ク|あつ.める,はと|dove,pigeon|1|13
酔|スイ|よ,よ.い,よ.う|drunk,elated,feel sick|1|11
惜|セキ|お.しい,お.しむ|be sparing of,frugal,pity|1|11
穫|カク||harvest,reap|1|18
佳|カ||beautiful,excellent,good|1|8
潤|ジュン|うる.む,うるお.う,うるお.す|be watered,charm,favor|1|15
悼|トウ|いた.む|grieve over,lament|1|11
乏|ボウ|とぼ.しい,とも.しい|destitution,limited,scarce|1|4
該|ガイ||above-stated,that specific,the said|1|13
赴|フ|おもむ.く|become,get,proceed|1|9
桑|ソウ|くわ|mulberry|1|10
桂|ケイ|かつら|Japanese Judas-tree,cinnamon tree|1|10
髄|ズイ||essence,marrow,pith|1|19
虎|コ|とら|drunkard,tiger|1|8
盆|ボン||basin,lantern festival,tray|1|9
晋|シン|すす.む|advance|1|10
穂|スイ|ほ|crest (wave),ear,ear (grain)|1|15
壮|ソウ|さかん|manhood,prosperity,robust|1|6
堤|テイ|つつみ|bank,dike,embankment|1|12
飢|キ|う.える|hungry,starve|1|10
傍|ボウ|おか-,かたわ.ら,そば|besides,bystander,nearby|1|12
疫|エキ,ヤク||epidemic|1|9
累|ルイ||accumulate,continually,involvement|1|11
痴|チ|おろか,し.れる|foolish,stupid|1|13
搬|ハン||carry,conveyor,transport|1|13
晃|コウ|あきらか|clear|1|10
癒|ユ|い.える,い.やす,いや.す|cure,healing,quench (thirst)|1|18
桐|トウ,ドウ|きり|paulownia|1|10
寸|スン||a little,measurement,small|1|3
郭|カク|くるわ|enclosure,fortification,quarters|1|11
尿|ニョウ|いばり,しと,ゆばり|urine|1|7
凶|キョウ||bad luck,disaster,evil|1|4
吐|ト|つ.く,は.く|belch,confess,spit|1|6
宴|エン|うたげ|banquet,feast,party|1|10
鷹|オウ,ヨウ|たか|hawk|1|24
賓|ヒン||V.I.P.,guest|1|15
虜|リョ,ロ|とりく,とりこ|barbarian,captive,low epithet for the enemy|1|13
陶|トウ|すえ|porcelain,pottery|1|11
鐘|ショウ|かね|bell,chimes,gong|1|20
憾|カン|うら.む|be sorry,regret,remorse|1|16
猪|チョ|い,いのしし|boar|1|11
紘|コウ|おおづな,つな,つなぐ|large|1|10
磁|ジ||magnet,porcelain|1|14
弥|ビ,ミ|いや,いよ.いよ,や|all the more,increasingly|1|8
昆|コン||descendants,elder brother,insect|1|8
粗|ソ|あら-,あら.い|coarse,rough,rugged|1|11
訂|テイ|ただ.す|correct,decide,revise|1|9
芽|ガ|め|bud,germ,spear|1|8
庄|ショウ,ソ,ソウ||hamlet,in the country,level|1|6
傘|サン|かさ|umbrella|1|12
敦|タイ,ダン,チョウ|あつ.い|industry,kindliness|1|12
騎|キ||counter for equestrians,equestrian,riding on horses|1|18
寧|ネイ|むし.ろ|peaceful,preferably,quiet|1|14
循|ジュン||follow,sequential|1|12
忍|ニン|しの.ばせる,しの.ぶ|bear,conceal,endure|1|7
怠|タイ|おこた.る,なま.ける|laziness,neglect|1|9
如|ジョ,ニョ|ごと.し|as if,best,better|1|6
寮|リョウ||dormitory,hostel,tea pavillion|1|15
祐|ウ,ユウ|たす.ける|help|1|9
鵬|ホウ|おおとり|phoenix|1|19
鉛|エン|なまり|lead|1|13
珠|シュ|たま|gem,jewel,pearl|1|10
凝|ギョウ|こ.らす,こ.る,こご.らす|be absorbed in,congeal,freeze|1|16
苗|ビョウ,ミョウ|なえ,なわ-|sapling,seedling,shoot|1|8
獣|ジュウ|けだもの,けもの|animal,beast|1|16
哀|アイ|あわ.れ,あわ.れむ,かな.しい|grief,pathetic,pathos|1|9
跳|チョウ|-と.び,と.ぶ,は.ねる|buck,hop,jerk|1|13
匠|ショウ|たくみ|artisan,carpenter,workman|1|6
垂|スイ|-た.れ,た.らす,た.れ|droop,hang,slouch|1|8
蛇|イ,ジャ,ダ|へび|hard drinker,serpent,snake|1|11
澄|チョウ|-す.ます,す.ます,す.む|be clear,clarify,clear|1|15
縫|ホウ|ぬ.う|embroider,sew,stitch|1|16
僧|ソウ||Buddhist priest,monk|1|13
眺|チョウ|なが.める|look at,scrutinize,see|1|11
亘|カン,コウ,セン|もと.める,わた.る|extend over,range,span|1|6
呉|ゴ|く.れる,くれ|do something for,give,kingdom of Wu|1|7
凡|ハン,ボン|おうよ.そ,およ.そ,すべ.て|commonplace,mediocre,ordinary|1|3
憩|ケイ|いこ.い,いこ.う|recess,relax,repose|1|16
媛|エン|ひめ|beautiful woman,princess|1|12
溝|コウ|みぞ|10**32,ditch,drain|1|13
恭|キョウ|うやうや.しい|respect,reverent|1|10
刈|カイ,ガイ|か.る|clip,cut,prune|1|4
睡|スイ|ねむ.い,ねむ.る|die,drowsy,sleep|1|13
錯|サク,シャク||be in disorder,confused,mix|1|16
伯|ハク||Brazil,chief,count|1|7
笹||ささ|(kokuji),bamboo grass|1|11
穀|コク||cereals,grain|1|14
陵|リョウ|みささぎ|hill,imperial tomb,mausoleum|1|11
霧|ブ,ボウ,ム|きり|fog,mist|1|19
魂|コン|たま,たましい|soul,spirit|1|14
弊|ヘイ||abuse,breakage,evil|1|15
妃|ヒ|きさき|princess,queen|1|6
舶|ハク||liner,ship|1|11
餓|ガ|う.える|hungry,starve,thirst|1|15
窮|キュウ,キョウ|きわ.まり,きわ.まる,きわ.み|cornered,destitute,hard up|1|15
掌|ショウ|たなごころ,てのひら|administer,conduct,manipulate|1|12
麗|レイ|うら.らか,うるわ.しい|beautiful,graceful,lovely|1|19
綾|リン|あや|design,figured cloth,twill|1|14
臭|シュウ|-くさ.い,くさ.い,にお.い|be bright,be fragrant,fragrance|1|9
悦|エツ|よろこ.ばす,よろこ.ぶ|ecstasy,joy,rapture|1|10
刃|ジン,ニン|き.る,は,やいば|blade,edge,sword|1|3
縛|バク|しば.る|arrest,bind,restrain|1|16
暦|リャク,レキ|こよみ|almanac,calendar|1|14
宜|ギ|よろ.しい,よろ.しく|best regards,good|1|8
盲|モウ|めくら|blind,blind man,ignoramus|1|8
粋|スイ|いき|chic,choice,cream|1|10
辱|ジョク|はずかし.める|embarrass,humiliate,shame|1|10
毅|キ,ギ|つよ.い|strong|1|15
轄|カツ|くさび|control,wedge|1|17
猿|エン|さる|monkey|1|13
弦|ゲン|つる|bowstring,chord,hypotenuse|1|8
稔|ジン,ニン,ネン|みの.る,みのり|harvest,ripen|1|13
窒|チツ||obstruct,plug up|1|11
炊|スイ|-だ.き,た.く|boil,cook|1|8
洪|コウ||deluge,flood,vast|1|9
摂|ショウ,セツ|おさ.める,かね.る,と.る|absorb,act in addition to,surrogate|1|13
飽|ホウ|あ.かす,あ.きる,あ.く|bored,sated,satiate|1|13
冗|ジョウ||superfluous,uselessness|1|4
桃|トウ|もも|peach|1|10
狩|シュ|-が.り,か.り,か.る|gather,hunt,raid|1|9
朱|シュ|あけ|bloody,cinnabar,red|1|6
渦|カ|うず|eddy,vortex,whirlpool|1|12
紳|シン||gentleman,good belt,sire|1|11
枢|シュ,スウ|からくり,とぼそ|center of things,door,hinge|1|8
碑|ヒ|いしぶみ|monument,tombstone|1|14
鍛|タン|きた.える|discipline,forge,train|1|17
刀|トウ|かたな,そり|knife,saber,sword|1|2
鼓|コ|つづみ|beat,drum,muster|1|13
裸|ラ|はだか|naked,nude,partially clothed|1|13
猶|ユ,ユウ|なお|furthermore,still,yet|1|12
塊|カイ,ケ|かたまり,つちくれ|chunk,clod,clot|1|13
旋|セン|いばり,め.ぐる|go around,rotation|1|11
弓|キュウ|ゆみ|bow,bow (archery, violin)|1|3
幣|ヘイ|ぬさ|Shinto offerings of cloth,bad habit,cash|1|15
膜|マク||membrane|1|14
扇|セン|おうぎ|fan,folding fan|1|10
腸|チョウ|はらわた,わた|bowels,guts,intestines|1|13
槽|ソウ|ふね|tank,tub,vat|1|15
慈|ジ|いつく.しむ|mercy|1|13
楊|ヨウ|やなぎ|willow|1|13
伐|カ,ハツ,バツ|う.つ,き.る,そむ.く|attack,fell,punish|1|6
駿|シュン,スン|すぐ.れる|a fast person,a good horse,speed|1|17
漬|シ|-づ.け,-づけ,つ.かる|moisten,pickling,soak|1|14
糾|キュウ|ただ.す|ask,investigate,twist|1|9
亮|リョウ|あきらか|clear,help|1|9
墳|フン||mound,tomb|1|15
坪|ヘイ|つぼ|approx. thirty-six sq ft,two-mat area|1|8
紺|コン||dark blue,navy|1|11
娯|ゴ||pleasure,recreation|1|10
椿|チュン,チン|つばき|camellia|1|13
舌|ゼツ|した|clapper,reed,tongue|1|6
羅|ラ|うすもの|Rome,arrange,gauze|1|19
峡|キョウ,コウ|はざま|gorge,ravine|1|9
俸|ホウ||salary,stipend|1|10
厘|リン||1/10 bu,1/10 sen,rin|1|9
峰|ホウ|ね,みね|peak,summit|1|10
圭|ケ,ケイ||angle,corner,edge|1|6
醸|ジョウ|かも.す|brew,cause|1|20
蓮|レン|はす,はちす|lotus|1|13
弔|チョウ|とぶら.う,とむら.う|condolences,funeral,mourning|1|4
乙|イツ,オツ|おと-,きのと|duplicate,fishhook radical (no. 5),strange|1|1
汁|ジュウ|-しる,しる,つゆ|broth,gravy,juice|1|5
尼|ニ|あま|nun|1|5
遍|ヘン|あまね.く|everywhere,generally,times|1|12
衡|コウ||equilibrium,measuring rod,scale|1|16
薫|クン|かお.る|be scented,fragrant,send forth fragrance|1|16
猟|リョウ|か.る,かり|bag,game,game-hunting|1|11
羊|ヨウ|ひつじ|sheep|1|6
款|カン||article,collusion,friendship|1|12
閲|エツ|けみ.する|inspection,review,revision|1|15
偵|テイ||spy|1|11
喝|カツ||hoarse,scold|1|11
敢|カン|あ.えず,あ.えて,あ.えない|bold,brave,daring|1|12
胎|タイ||uterus,womb|1|9
酵|コウ||fermentation|1|14
憤|フン|いきどお.る|anger,aroused,be indignant|1|15
豚|トン|ぶた|pig,pork|1|11
遮|シャ|さえぎ.る|intercept,interrupt,obstruct|1|14
扉|ヒ|とびら|front door,front page,title page|1|12
硫|リュウ||sulphur|1|12
赦|シャ||forgiveness,pardon|1|11
窃|セツ|ぬす.む,ひそ.か|hushed,private,secret|1|9
泡|ホウ|あわ|bubbles,foam,froth|1|8
瑞|スイ,ズイ|しるし,みず-|congratulations|1|13
又|ユウ|また,また-,また.の-|furthermore,on the other hand,or again|1|2
慨|ガイ|なげ.く|be sad,lament,rue|1|13
紡|ボウ|つむ.ぐ|spinning|1|10
恨|コン|うら.む,うら.めしい|bear a grudge,hatred,malice|1|9
肪|ボウ||fat,obese|1|8
扶|フ|たす.ける|aid,assist,help|1|7
戯|ギ,ゲ|ざ.れる,じゃ.れる,たわむ.れる|frolic,play,sport|1|15
伍|ゴ|いつつ|file,five,five-man squad|1|6
忌|キ|い.まわしい,い.み,い.む|abhor,death anniversary,detestable|1|7
濁|ジョク,ダク|にご.す,にご.る|impurity,nigori,uncleanness|1|16
奔|ホン|はし.る|bustle,run|1|8
斗|ト,トウ||Big Dipper,dots and cross radical (no. 68),sake dipper|1|4
蘭|ラ,ラン||Holland,orchid|1|19
迅|ジン||fast,swift|1|6
肖|ショウ|あやか.る|resemblance|1|7
鉢|ハチ,ハツ||bowl,crown,pot|1|13
朽|キュウ|く.ちる|decay,remain in seclusion,rot|1|6
殻|カク,コク,バイ|から,がら|husk,nut shell|1|11
享|キョウ,コウ|う.ける|answer (phone),catch,enjoy|1|8
秦|シン|はた|Manchu dynasty,name given to naturalized foreigners|1|10
茅|ボウ,ミョウ|かや,ちがや|miscanthus reed|1|8
藩|ハン||clan,enclosure|1|18
沙|サ,シャ|すな,よなげる|sand|1|7
輔|フ,ホ|たす.ける|help|1|14
媒|バイ|なこうど|go-between,mediator|1|12
鶏|ケイ|とり,にわとり|chicken|1|19
禅|セン,ゼン|しずか,ゆず.る|Zen,silent meditation|1|13
嘱|ショク|しょく.する,たの.む|entrust,request,send a message|1|15
胴|ドウ||hub of wheel,hull (ship),torso|1|10
迭|テツ||alternation,transfer|1|8
挿|ソウ|さ.す,はさ.む|graft,insert,put in|1|10
嵐|ラン|あらし|storm,tempest|1|12
椎|スイ,ツイ|う.つ,つち|chinquapin,mallet,spine|1|12
絹|ケン|きぬ|silk|1|13
陪|バイ||accompany,attend on,follow|1|11
剖|ボウ||divide|1|10
譜|フ||genealogy,music,musical score|1|19
郁|イク||cultural progress,perfume|1|9
悠|ユウ||distant,leisure,long time|1|11
淑|シュク|しと.やか|gentle,graceful,pure|1|11
帆|ハン|ほ|sail|1|6
暁|キョウ,ギョウ|あかつき,さと.る|dawn,daybreak,in the event|1|12
傑|ケツ|すぐ.れる|excellence,greatness|1|13
楠|ゼン,ダン,ナン|くす,くすのき|camphor tree|1|13
笛|テキ|ふえ|bagpipe,clarinet,flute|1|11
玲|レイ||sound of jewels|1|9
奴|ド|やっこ,やつ|fellow,guy,manservant|1|5
錠|ジョウ||fetters,lock,shackles|1|16
拳|ケン,ゲン|こぶし|fist|1|10
翔|ショウ|かけ.る,と.ぶ|fly,soar|1|12
遷|セン|うつ.す,うつ.る,みやこがえ|change,move,transition|1|15
拙|セツ|つたな.い|bungling,clumsy,unskillful|1|8
侍|シ,ジ|さむらい,はべ.る|samurai,serve,wait upon|1|8
尺|シャク,セキ|さし|Japanese foot,measure,rule|1|4
峠||とうげ|(kokuji),climax,crest|1|9
篤|トク|あつ.い|cordial,deliberate,fervent|1|16
肇|ジョウ,チョウ,トウ|はじ.める,はじめ|beginning|1|14
渇|カツ|かわ.く|dry up,parch,thirst|1|11
叔|シュク||uncle,youth|1|8
雌|シ|め-,めす,めん|female,feminine|1|14
亨|キョウ,コウ,ホウ|とお.る|go smoothly,pass through|1|7
堪|カン,タン|こた.える,こら.える,た.える|endure,resist,support|1|12
叙|ジョ|つい.ず,ついで|confer,describe,narrate|1|9
酢|サク|す|acid,sour,tart|1|12
吟|ギン||recital,singing,versify|1|7
逓|テイ|かわ.る,たがいに|in turn,relay,sending|1|10
嶺|リョウ,レイ|みね|peak,summit|1|17
甚|ジン|はなは.だ,はなは.だしい|exceedingly,great,tremendously|1|9
喬|キョウ|たか.い|boasting,high|1|12
崇|スウ|あが.める|adore,respect,revere|1|11
漆|シツ|うるし|lacquer,seven,varnish|1|14
岬|コウ|みさき|cape,headland,promontory|1|8
癖|ヘキ|くせ,くせ.に|fault,habit,kink|1|18
愉|ユ|たの.しい,たの.しむ|happy,pleasure,rejoice|1|12
寅|イン|とら|3-5AM,sign of the tiger,third sign of Chinese zodiac|1|11
礁|ショウ||reef,sunken rock|1|17
乃|アイ,ダイ,ナイ|すなわ.ち,なんじ,の|accordingly,from,possessive particle|1|2
洲|シュウ,ス|しま|continent,country,island|1|9
屯|トン|たむろ|barracks,camp,police station|1|4
樺|カ|かば,かんば|birch,dark red|1|14
槙|シン,テン|こずえ,まき|ornamental evergreen,twig|1|14
姻|イン||marry,matrimony|1|9
巌|ガン|いわ,いわお,けわ.しい|boulder,crag,rock|1|20
擬|ギ|まが.い,もど.き|aim (a gun) at,imitate,mimic|1|17
塀|ヘイ,ベイ||(kokuji),fence,wall|1|12
唇|シン|くちびる|lips|1|10
睦|ボク,モク|むつ.ぶ,むつ.まじい,むつ.む|friendly,harmonious,intimate|1|13
閑|カン||leisure|1|12
胡|ウ,コ,ゴ|なんぞ|barbarian,foreign|1|9
幽|ユウ|かす.か,くら.い,しろ.い|calm,confine to a room,dark|1|9
峻|シュン|けわ.しい,たか.い|high,steep|1|10
曹|ソウ,ゾウ||comrade,fellow,office|1|11
詠|エイ|うた.う,よ.む|composing,poem,recitation|1|12
卑|ヒ|いや.しい,いや.しむ,いや.しめる|base,despise,lowly|1|9
侮|ブ|あなず.る,あなど.る|contempt,despise,make light of|1|8
鋳|イ,シュ,シュウ|い.る|casting,mint|1|15
抹|マツ||erase,paint,rub|1|8
尉|イ,ジョウ||jailer,military officer,old man|1|11
槻|キ|つき|Zelkova tree|1|15
隷|レイ|したが.う,しもべ|criminal,follower,prisoner|1|16
禍|カ|わざわい|calamity,curse,evil|1|13
蝶|チョウ||butterfly|1|15
酪|ラク||broth,dairy products,fruit juice|1|13
茎|キョウ,ケイ|くき|stalk,stem|1|8
帥|スイ||commander,governor,leading troops|1|9
逝|セイ|い.く,ゆ.く|departed,die|1|10
汽|キ||steam,vapor|1|7
琢|タク|みが.く|polish|1|11
匿|トク|かくま.う|hide,shelter,shield|1|10
襟|キン|えり|collar,lapel,neck|1|18
蛍|ケイ|ほたる|firefly,lightning-bug|1|11
蕉|ショウ||banana,plantain|1|15
寡|カ||few,minority,widow|1|14
琉|リュウ,ル||gem,lapis lazuli,precious stone|1|11
痢|リ||diarrhea|1|12
庸|ヨウ||commonplace,employment,ordinary|1|11
朋|ホウ|とも|companion,friend|1|8
坑|コウ||hole,pit|1|7
藍|ラン|あい|indigo|1|18
賊|ゾク||burglar,rebel,robber|1|13
搾|サク|しぼ.る|squeeze|1|13
畔|ハン|あぜ,くろ,ほとり|levee,paddy ridge|1|10
遼|リョウ||distant|1|15
唄|バイ|うた,うた.う|ballad,song|1|10
孔|ク,コウ|あな|cavity,exceedingly,great|1|4
橘|キツ|たちばな|mandarin orange|1|16
漱|シュウ,ス,ソウ|うがい,くちすす.ぐ,くちそそ.ぐ|gargle,rinse mouth|1|14
呂|リョ,ロ|せぼね|backbone,spine|1|7
拷|ゴウ||beat,torture|1|9
嬢|ジョウ|むすめ|Miss,daughter,girl|1|16
苑|エン,オン|う.つ,その|farm,garden,park|1|8
巽|ソン|たつみ|southeast|1|12
杜|ズ,ト,トウ|ふさ.ぐ,もり,やまなし|grove,woods|1|7
渓|ケイ|たに,たにがわ|mountain stream,valley|1|11
翁|オウ|おきな|venerable old man|1|10
廉|レン||account,bargain,charge|1|13
謹|キン|つつし.む|discreet,humbly,reverently|1|17
瞳|トウ,ドウ|ひとみ|pupil (of eye)|1|17
湧|ユ,ユウ,ヨウ|わ.く|boil,breed,ferment|1|12
欣|キン,コン,ゴン|よろこ.び,よろこ.ぶ|rejoice,take pleasure in|1|8
窯|ヨウ|かま|furnace,kiln,oven|1|15
褒|ホウ|ほ.める|extol,praise|1|15
醜|シュウ|しこ,みにく.い|bad looking,shame,ugly|1|17
升|ショウ|ます|1.8 liter,measuring box|1|4
殉|ジュン||follow by resigning,martyrdom|1|10
煩|ハン,ボン|うるさ.い,うるさ.がる,わずら.う|annoy,anxiety,ill|1|13
巴|ハ|うずまき,ともえ|comma-design|1|4
禎|テイ|さいわ.い|auspicious,blessed,good fortune|1|13
劾|ガイ||censure,criminal investigation|1|8
堕|ダ|お.ちる,くず.す,くず.れる|degenerate,descend to,lapse into|1|12
租|ソ||borrowing,crop tax,tariff|1|10
稜|リョウ,ロウ|いつ,かど|angle,corner,edge|1|13
桟|サン,セン|かけはし|bolt (door),cleat,frame|1|10
倭|イ,ワ|したが.う,やまと|Yamato,ancient Japan|1|10
婿|セイ|むこ|bridegroom,son-in-law|1|12
慕|ボ|した.う|adore,love dearly,pining|1|14
斐|イ,ヒ||beautiful,patterned|1|12
罷|ヒ|まか.り-,や.める|go,leave,quit|1|15
矯|キョウ|た.める|control,correct,cure|1|17
某|ボウ|それがし,なにがし|a certain,one,so-and-so|1|9
囚|シュウ|とら.われる|arrest,captured,catch|1|5
魁|カイ|かしら,さきがけ|charging ahead of others|1|14
虹|コウ|にじ|rainbow|1|9
鴻|コウ,ゴウ|おおがり,おおとり,ひしくい|great,large,large bird|1|17
泌|ヒ,ヒツ||flow,ooze,penetrate|1|8
於|オ,ヨ|ああ,お.ける,おい.て|as for,at,in|1|8
赳|キュウ||strong and brave|1|10
漸|ゼン|すす.む,やや,ようや.く|barely,finally,gradually advancing|1|14
蚊|ブン|か|mosquito|1|10
葵|キ|あおい|hollyhock|1|12
厄|ヤク||bad luck,disaster,misfortune|1|4
藻|ソウ|も|duckweed,seaweed|1|19
禄|ロク|さいわ.い,ふち|allowance,fief,grant|1|12
孟|ボウ,ミョウ,モウ|かしら|beginning,chief|1|8
嫡|チャク,テキ||direct descent (non-bastard),legitimate wife|1|14
尭|ギョウ|たか.い|far,high|1|8
嚇|カク|おど.す|dignity,majesty,menacing|1|17
巳|シ|み|9-11AM,sign of the snake or serpent,sixth sign of Chinese zodiac|1|3
凸|トツ|でこ|beetle brow,convex,uneven|1|5
暢|チョウ|のび.る|stretch|1|14
韻|イン||elegance,rhyme,tone|1|19
霜|ソウ|しも|frost|1|17
硝|ショウ||nitrate,saltpeter|1|12
勅|チョク|いまし.める,みことのり|imperial order|1|9
芹|キン|せり|parsley|1|7
杏|アン,キョウ,コウ|あんず|apricot|1|7
棺|カン||casket,coffin|1|12
儒|ジュ||Confucian|1|16
鳳|フウ,ホウ||male mythical bird|1|14
馨|キョウ,ケイ|かお.る,かおり|balmy,favourable,fragrant|1|20
慧|エ,ケイ|さとい|wise|1|15
愁|シュウ|うれ.い,うれ.える|be anxious,distress,grieve|1|13
楼|ロウ|たかどの|high building,lookout,watchtower|1|13
彬|ヒン,フン|あき.らか,うるわ.しい|gentle,refined|1|11
匡|オウ,キョウ|すく.う,ただ.す|assist,correct,save|1|6
眉|ビ,ミ|まゆ|eyebrow|1|9
欽|キン,コン|つつし.む|long for,respect,revere|1|12
薪|シン|たきぎ,まき|firewood,fuel,kindling|1|16
褐|カツ||brown,woollen kimono|1|13
賜|シ|たま.う,たまわ.る,たも.う|boon,gift,grant|1|15
嵯|サ,シ||craggy,rugged,steep|1|13
綜|ソウ|おさ.める,す.べる|rule,synthesize|1|14
繕|ゼン|つくろ.う|adjust,darning,mend|1|18
栓|セン||bolt,bung,cork|1|10
翠|スイ|かわせみ,みどり|green,kingfisher|1|14
鮎|デン,ネン|あゆ,なまず|freshwater trout,smelt|1|16
榛|シン,ハン|はしばみ,はり|filbert,hazelnut|1|14
凹|オウ|くぼ.む,へこ.む,ぼこ|concave,hollow,sunken|1|5
艶|エン|あで.やか,つや,つや.めく|captivating,charm,colorful|1|19
惣|ソウ|すべ.て|all|1|12
蔦|チョウ|つた|ivy,vine|1|14
錬|レン|ね.る|drill,polish,refine|1|16
隼|シュン,ジュン|はやぶさ|falcon|1|10
渚|ショ|なぎさ|beach,shore,strand|1|11
衷|チュウ||heart,inmost,inside|1|9
逐|チク||accomplish,attain,chase|1|10
斥|セキ|しりぞ.ける|recede,reject,repel|1|5
稀|キ,ケ|まばら,まれ|dilute (acid),phenomenal,rare|1|12
芙|フ||Mt Fuji,lotus|1|7
詔|ショウ|みことのり|imperial edict|1|12
皐|コウ|さつき|shore,swamp|1|11
雛|ジュ,ス,スウ|ひな,ひよこ|chick,doll,duckling|1|18
惟|イ,ユイ|おも.うに,おも.んみる,これ|consider,reflect,think|1|11
佑|ウ,ユウ|たす.ける|assist,help|1|7
耀|ヨウ|かがや.く,ひかり|gleam,shine,sparkle|1|20
黛|タイ|まゆずみ|blackened eyebrows|1|16
渥|アク|あつ.い,うるお.う|kindness,moisten|1|12
憧|ショウ,トウ,ドウ|あこが.れる|admire,adore,aspire to|1|15
宵|ショウ|よい|early night,evening,wee hours|1|10
妄|ボウ,モウ|みだ.りに|delusion,reckless,unnecessarily|1|6
惇|シュン,ジュン,トン|あつ.い|considerate,kind,sincere|1|11
脩|シュウ|おさ.める,なが.い,ほじし|dried meat|1|11
甫|フ,ホ|はじ.めて|for the first time,not until|1|7
酌|シャク|く.む|bar-tending,draw (water),ladle|1|10
蚕|サン,テン|かいこ,こ|silkworm|1|10
嬉|キ|うれ.しい,たの.しむ|glad,pleased,rejoice|1|15
蒼|ソウ|あお.い|blue,pale|1|13
暉|キ|かが.やく|light,shine|1|13
頒|ハン|わ.かつ,わ.ける|disseminate,distribute,partition|1|13
只|シ|ただ|free,in addition,only|1|5
肢|シ||arms & legs,limb|1|8
檀|タン,ダン|まゆみ|cedar,sandalwood,spindle tree|1|17
凱|カイ,ガイ|かちどき,やわらぐ|victory song|1|12
彗|エ,ケイ,スイ|ほうき|comet|1|11
謄|トウ||copy,mimeograph|1|17
梓|シ|あずさ|catalpa tree,woodblock printing|1|11
丑|チュウ|うし|1-3AM,second sign of Chinese zodiac,sign of the ox or cow|1|4
嗣|シ||heir,succeed|1|13
叶|キョウ|かな.う,かな.える|answer,grant|1|5
汐|セキ|うしお,しお,せい|eventide,opportunity,salt water|1|6
絢|ケン||brilliant fabric design|1|12
朔|サク|ついたち|conjunction (astronomy),first day of month,north|1|10
伽|カ,ガ,キャ|とぎ|attending,entertainer,nursing|1|7
畝|ホ,ボウ,ム|うね,せ|furrow,rib,ridge|1|10
抄|ショウ||copy,extract,selection|1|7
爽|ソウ|あき.らか,さわ.やか,たがう|bracing,clear,refreshing|1|11
黎|リ,レイ|くろ.い|black,dark,many|1|15
惰|ダ||laziness,lazy|1|12
蛮|バン|えびす|barbarian|1|12
冴|コ,ゴ|こお.る,さ.える,ひ.える|be clear,cold,serene|1|7
旺|オウ,キョウ,ゴウ|うつくし.い,かがや.き,さかん|beautiful,flourishing,successful|1|8
萌|ホウ|きざ.し,きざ.す,めばえ|bud,malt,show symptoms of|1|11
偲|サイ,シ|しの.ぶ|recollect,remember|1|11
壱|イチ,イツ|ひとつ|one (in documents)|1|7
瑠|リュウ,ル||lapis lazuli|1|14
允|イン|じょう,まこと.に,ゆるす|license,permit,sincerity|1|4
侯|コウ||daimyo,lord,marquis|1|9
蒔|シ,ジ|う.える,ま.く|sow (seeds)|1|13
鯉|リ|こい|carp|1|18
弧|コ||arc,arch,bow|1|9
遥|ヨウ|はる.か|distant,far off,long ago|1|12
舜|シュン||althea,rose of Sharon,type of morning glory|1|13
瑛|エイ||crystal,sparkle of jewelry|1|12
附|フ|つ.く,つ.ける|affixed,append,attach|1|8
彪|ヒュウ,ヒョウ|あや|mottled,patterned,small tiger|1|11
卯|ボウ,モウ|う|5-7AM,east,fourth sign of Chinese zodiac|1|5
但|タン|ただ.し|but,however|1|7
綺|キ|あや|beautiful,figured cloth|1|14
芋|ウ|いも|potato|1|6
茜|セン|あかね|Turkey red,madder,red dye|1|9
凌|リョウ|しの.ぐ|defy,endure,keep (rain)out|1|10
皓|コウ|しろ.い,ひか.る|clear,white|1|12
洸|コウ||sparkling water|1|9
毬|キュウ|いが,まり|ball,burr|1|11
婆|バ|ばあ,ばば|grandma,old woman,wet nurse|1|11
緋|ヒ|あか,あけ|cardinal,scarlet|1|14
鯛|チョウ|たい|red snapper,sea bream|1|19
怜|リョウ,レイ,レン|あわ.れむ,さと.い|wise|1|8
邑|ユウ|むら|right village radical (no. 163),rural community,village|1|7
倣|ホウ|なら.う|emulate,imitate|1|10
碧|ヒャク,ヘキ||blue,green|1|14
啄|タク,ツク,トク|ついば.む,つつ.く|peck,pick up|1|10
穣|ジョウ|ゆたか,わら|10**28,good crops,prosperity|1|18
酉|ユウ|とり|5-7PM,bird,sake radical (no. 164)|1|7
悌|ダイ,テイ||serving our elders|1|10
倹|ケン|つづまやか,つま.しい|economy,frugal,thrifty|1|10
柚|ジク,ユ,ユウ|ゆず|citron|1|9
繭|ケン|きぬ,まゆ|cocoon|1|18
且|ショ,ショウ,ソ|か.つ|also,furthermore,moreover|1|5
丙|ヘイ|ひのえ|3rd,3rd calendar sign,third class|1|5
丞|ショウ,ジョウ|すく.う,たす.ける|help|1|6
亥|カイ,ガイ|い|9-11PM,sign of the hog,twelfth sign of the Chinese zodiac|1|6
亦|エキ,ヤク|また|again,also|1|6
伎|キ,ギ|わざ,わざおぎ|deed,skill|1|6
伶|リョウ,レイ|わざおぎ|actor|1|7
侃|カン|つよ.い|just,peace-loving,righteous|1|8
侑|ウ,ユウ|すす.める,たす.ける|urge to eat|1|8
倖|コウ|さいわ.い,しあわ.せ|happiness,luck|1|10
冶|ヤ|い.る|melting,smelting|1|7
凜|リン|きびし.い|cold,severe,strict|1|15
凪||な.ぐ,なぎ|(kokuji),calm,lull|1|6
勁|ケイ|つよ.い|strong|1|9
勺|シャク||dip,ladle,one tenth of a go|1|3
匁||め,もんめ|(kokuji),3.75 grams,monme|1|4
叡|エイ|あき.らか|imperial,intelligence|1|16
吏|リ||an official,officer|1|6
哉|サイ|かな,や|alas,exclamation mark,how|1|9
塑|ソ|でく|model,molding|1|13
墾|コン|は.る,ひら.く|ground-breaking,open up farmland|1|16
奎|キ,ケイ||god of literature,star|1|9
宥|ユウ|なだ.める,ゆる.す|calm,pacify,soothe|1|9
崚|リョウ||mountains towering in a row|1|11
嵩|シュウ,スウ|かさ,かさ.む,たか.い|be aggravated,grow bulky,grow worse|1|13
弐|ジ,ニ|そえ,ふた.つ|II,second,two|1|6
恕|ショ,ジョ|ゆる.す|excuse,forgive,tolerate|1|10
捷|ショウ,ソウ|はや.い|fast,victory|1|11
捺|ダツ,ナツ|お.す,さ.す|affix a seal,press,print|1|11
斤|キン||1.32 lb,axe,axe radical (no. 69)|1|4
旦|タン,ダン|あき.らか,あきら,あさ|dawn,daybreak,morning|1|5
昂|コウ,ゴウ|あ.がる,たか.い,たか.ぶる|rise|1|8
昴|コウ,ボウ|すばる|the Pleiades|1|9
晏|アン|おそ.い|late,quiet,sets (sun)|1|10
晟|ジョウ,セイ|あきらか|clear|1|10
晨|シン|あさ,あした,とき|early,morning|1|11
朕|チン||imperial we,majestic plural|1|10
柊|シュ,シュウ|ひいらぎ|holly|1|9
柾||まさ,まさき,まさめ|(kokuji),spindle tree,straight grain|1|9
栞|カン|しおり|bookmark,guidebook|1|10
梢|ショウ|くすのき,こずえ|treetops,twig|1|11
梧|ゴ|あおぎり|Chinese parasol tree,phoenix tree|1|11
椋|リョウ|むく|grey starling,type of deciduous tree|1|12
椰|ヤ|やし|coconut tree|1|13
楓|フウ|かえで|maple|1|13
汰|タ,タイ|おご.る,にご.る,よな.げる|filtering,luxury,sieving|1|7
洵|シュン,ジュン|の.ぶ,まこと.に|alike,truth|1|9
滉|コウ|ひろ.い|deep and broad (water)|1|13
澪|レイ|みお|shipping channel,water route|1|16
濫|ラン|みだ.りがましい,みだ.りに|excessive,overflow,spread out|1|18
熙|キ|あきらか,かわ.く,たのし.む|bright,merry,prosperous|1|15
燎|リョウ|かがりび|bonfire,burn|1|16
燦|サン|あき.らか,きら.めく,きらめ.く|brilliant|1|17
燿|ヨウ|かがや.く,ひかり|shine|1|18
爵|シャク||baron,court rank,peerage|1|17
爾|ジ,ニ|おれ,しか,しかり|second person,thou,you|1|14
玖|キュウ,ク||beautiful black jewel,nine|1|7
琳|リン||jewel,tinkling of jewelry|1|12
瑚|コ,ゴ||ancestral offering receptacle,coral|1|13
瑳|サ|みが.く|artful smile,brilliant white luster of a gem,polish|1|14
瑶|ヨウ|たま|beautiful as a jewel|1|13
璃|リ||glassy,lapis lazuli|1|15
痘|トウ||pox,smallpox|1|12
眸|ボウ,ム|ひとみ|pupil of the eye|1|11
瞭|リョウ|あきらか|clear|1|17
碩|セキ|おお.きい|eminent,great,large|1|14
竣|シュン,ドウ|おわ.る,わらべ,わらわ|end,finish|1|12
笙|ショウ,ソウ|ふえ|a reed instrument|1|11
箇|カ,コ||counter for articles|1|14
紗|サ,シャ|うすぎぬ|gauze,gossamer|1|10
紬|チュウ|つむ.ぐ,つむぎ|pongee (a knotted silk cloth)|1|11
絃|ゲン|いと|cord,samisen music,string|1|11
綸|カン,リン|いと|silk cloth,thread|1|14
耗|コウ,モウ||decrease|1|10
耶|ジャ,ヤ|か|question mark|1|9
胤|イン|たね|descendent,issue,offspring|1|9
脹|チョウ|は.れる,ふく.らむ,ふく.れる|bulge,dilate,distend|1|12
茄|カ||eggplant|1|8
茉|バツ,マ,マツ||jasmine|1|8
莉|ライ,リ,レイ||jasmine|1|10
莞|カン|い|reed used to cover tatami,smiling|1|10
菖|ショウ||iris|1|11
菫|キン|すみれ|the violet|1|11
蓉|ヨウ||lotus|1|13
蕗|ル,ロ|ふき|bog rhubarb,butterbur|1|16
虞|グ|あざむ.く,あやま.る,うれ.える|anxiety,concern,consideration|1|13
衿|キン,コン|えり|collar,lapel,neck|1|9
袈|カ,ケ||a coarse camlet|1|11
裟|サ,シャ||Buddhist surplice|1|13
詢|シュン,ジュン|はか.る,まこと|consult with|1|13
誼|ギ|よい,よしみ|friendship,intimacy|1|15
諄|シュン|くど.い,くどくど,ねんご.ろ|tedious|1|15
諒|リョウ|あきら.か,まことに|appreciate,fact,reality|1|15
謁|エツ||audience,audience (with king)|1|15
賦|フ,ブ||installment,levy,ode|1|15
迪|テキ|いた.る,すす.む,みち|edify,path,way|1|8
遵|ジュン||abide by,follow,learn|1|15
采|サイ|いろどり,と.る|appearance,coloring,dice|1|8
銑|セン||pig iron|1|14
錘|スイ|おもり,つむ|plumb bob,sinker,spindle|1|16
鞠|キク,キュウ|まり|ball|1|17
頌|ショウ,ジュ,ヨウ|かたち,たた.える,ほめ.る|eulogy|1|13
颯|サツ,ソウ|さっ.と|quick,sound of the wind,sudden|1|14
麟|リン||Chinese unicorn,bright,genius|1|24
麿||まろ|(kokuji),I,you|1|18
`;

function parse(): KanjiChar[] {
  const out: KanjiChar[] = [];
  for (const line of PACKED.trim().split("\n")) {
    const [char, on, kun, meanings, jlpt, strokes] = line.split("|");
    out.push({
      char,
      on: on ? on.split(",") : [],
      kun: kun ? kun.split(",") : [],
      meanings: meanings ? meanings.split(",") : [],
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
