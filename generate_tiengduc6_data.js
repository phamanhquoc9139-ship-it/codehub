const fs = require('fs');

const germanLessonsData = [
  {
    id: 0,
    unitNum: "Start",
    titleDe: "Ich bin neu an der Schule",
    titleVn: "Tôi là học sinh mới ở trường",
    topic: "Làm quen, chào hỏi & Giới thiệu trường lớp",
    grammar: {
      title: "Ngữ âm: unbetontes e (e không nhấn trọng âm) & Giới thiệu bản thân",
      rule: "1. Ngữ âm: Âm 'e' không nhấn trọng âm ở cuối từ phát âm nhẹ là âm /ə/ (unbetontes e: spiele, heiße, Pause, Schule, Name).\n2. Giao tiếp cơ bản: Làm quen, chào hỏi (Guten Tag, Hallo), hỏi tên (Wie heißt du? - Ich heiße...), giới thiệu trường lớp và môn học yêu thích."
    },
    vocab: [
      { word: "die Schule", article: "die", meaning: "trường học" },
      { word: "das Klassenzimmer", article: "das", meaning: "phòng học, lớp học" },
      { word: "der Schulhof", article: "der", meaning: "sân trường" },
      { word: "die Mitschüler", article: "die", meaning: "các bạn cùng lớp" },
      { word: "die Schulfächer", article: "die", meaning: "các môn học" },
      { word: "die Pause", article: "die", meaning: "giờ ra chơi, giờ giải lao" }
    ],
    sentences: [
      { de: "Ich bin neu an der Schule.", vn: "Tôi là học sinh mới ở trường." },
      { de: "Meine Schule ist groß und schön.", vn: "Trường của tôi to và đẹp." },
      { de: "Was machst du in der Pause?", vn: "Bạn làm gì trong giờ ra chơi?" }
    ],
    quizzes: [
      {
        q: "Trong các từ sau, từ nào có âm 'e' cuối phát âm là unbetontes e (/ə/)?",
        options: ["(Recommended) die Schule", "der Tee", "das Café", "das Beet"],
        ans: 0,
        expl: "'die Schule' có âm e kết thúc không mang trọng âm, phát âm nhẹ là /ə/."
      },
      {
        q: "Mạo từ xác định chuẩn của danh từ 'Klassenzimmer' (phòng học) là:",
        options: ["(Recommended) das", "der", "die", "den"],
        ans: 0,
        expl: "das Klassenzimmer là danh từ giống trung (Neutrum)."
      }
    ]
  },
  {
    id: 1,
    unitNum: "Einheit 1",
    titleDe: "Meine Hobbys",
    titleVn: "Sở thích của tôi",
    topic: "Hoạt động rảnh rỗi & Động từ đi kèm giới từ",
    grammar: {
      title: "Động từ và Danh từ đi kèm Giới từ cố định",
      rule: "1. Động từ đi kèm giới từ:\n   • warten auf (+ Akkusativ): chờ đợi ai/cái gì.\n   • sprechen über (+ Akkusativ): nói chuyện về điều gì.\n   • helfen bei (+ Dativ): giúp đỡ trong việc gì.\n   • teilnehmen an (+ Dativ): tham gia vào hoạt động gì.\n2. Cụm danh từ biểu thị sự hứng thú:\n   • Interesse an (+ Dativ): quan tâm đến.\n   • Freude an (+ Dativ): niềm vui với.\n   • Lust auf (+ Akkusativ): có hứng thú, thích làm gì."
    },
    vocab: [
      { word: "die Freizeitbeschäftigung", article: "die", meaning: "hoạt động lúc rảnh rỗi" },
      { word: "basteln", article: "", meaning: "làm đồ thủ công" },
      { word: "spazieren gehen", article: "", meaning: "đi dạo, tản bộ" },
      { word: "der Schachclub", article: "der", meaning: "câu lạc bộ cờ vua" },
      { word: "das Seilspringen", article: "das", meaning: "trò chơi nhảy dây" },
      { word: "das Lieblingsspiel", article: "das", meaning: "trò chơi yêu thích" }
    ],
    sentences: [
      { de: "Was machst du in deiner Freizeit?", vn: "Bạn làm gì trong thời gian rảnh rỗi?" },
      { de: "Ich nehme am Tanzclub teil.", vn: "Tôi tham gia câu lạc bộ khiêu vũ." },
      { de: "Mein Lieblingsspiel ist Seilspringen.", vn: "Trò chơi yêu thích của tôi là nhảy dây." }
    ],
    quizzes: [
      {
        q: "Điền giới từ thích hợp: 'Ich nehme ______ Schachclub teil.' (der Schachclub)",
        options: ["(Recommended) am (an dem)", "auf dem", "über den", "bei"],
        ans: 0,
        expl: "Cấu trúc: teilnehmen an + Dativ. Với 'der Schachclub' thành 'an dem' = 'am'."
      },
      {
        q: "Động từ 'warten' (chờ đợi) đi kèm với giới từ nào?",
        options: ["(Recommended) auf (+ Akkusativ)", "bei (+ Dativ)", "mit (+ Dativ)", "nach (+ Dativ)"],
        ans: 0,
        expl: "warten auf + Akkusativ: chờ đợi ai đó hoặc điều gì đó."
      }
    ]
  },
  {
    id: 2,
    unitNum: "Einheit 2",
    titleDe: "Meine Familie",
    titleVn: "Gia đình tôi",
    topic: "Mệnh đề phụ liên từ weil & Đại từ bất định Akkusativ",
    grammar: {
      title: "Mệnh đề phụ nguyên nhân với 'weil' & Đại từ bất định Akkusativ",
      rule: "1. Mệnh đề phụ với liên từ 'weil' (bởi vì): Động từ đã chia bắt buộc phải chuyển xuống vị trí cuối cùng của mệnh đề phụ:\n   - Cấu trúc: [Hauptsatz], weil + Subjekt + ... + konjugiertes Verb.\n   - Ví dụ: Wir basteln oft zusammen, weil er das sehr gut kann.\n2. Đại từ bất định ở cách 4 (Akkusativ):\n   - Giống đực (Maskulin): einen / keinen.\n   - Giống cái (Feminin): eine / keine.\n   - Giống trung (Neutrum): eins / keins."
    },
    vocab: [
      { word: "die Familienmitglieder", article: "die", meaning: "các thành viên trong gia đình" },
      { word: "der Rentner / die Rentnerin", article: "der/die", meaning: "người về hưu (ông/bà)" },
      { word: "der Schwager / die Schwägerin", article: "der/die", meaning: "anh/em rể, chị/em dâu" },
      { word: "Zimmer aufräumen", article: "", meaning: "dọn dẹp phòng ngủ" },
      { word: "Geschirr spülen", article: "", meaning: "rửa bát đĩa" },
      { word: "das Frühstück", article: "das", meaning: "bữa ăn sáng" }
    ],
    sentences: [
      { de: "Das ist meine Familie.", vn: "Đây là gia đình của tôi." },
      { de: "Wir basteln oft zusammen, weil er das sehr gut kann.", vn: "Chúng tôi thường làm thủ công cùng nhau vì em ấy làm rất giỏi." },
      { de: "Möchtest du einen Apfel? – Nein, ich möchte keinen.", vn: "Cậu có muốn một quả táo không? – Không, tớ không muốn ăn quả nào." }
    ],
    quizzes: [
      {
        q: "Chọn câu có vị trí động từ đúng sau liên từ 'weil':",
        options: [
          "(Recommended) Ich lerne Deutsch, weil ich in Deutschland studieren möchte.",
          "Ich lerne Deutsch, weil ich möchte in Deutschland studieren.",
          "Ich lerne Deutsch, weil möchte ich in Deutschland studieren.",
          "Ich lerne Deutsch, weil in Deutschland studieren ich möchte."
        ],
        ans: 0,
        expl: "Sau liên từ 'weil', động từ liên kết/chia 'möchte' bắt buộc chuyển xuống cuối câu."
      },
      {
        q: "Điền đại từ bất định Akkusativ giống đực: 'Hast du einen Stift? - Nein, ich habe ______.'",
        options: ["(Recommended) keinen", "keine", "keins", "kein"],
        ans: 0,
        expl: "der Stift (giống đực) ở thể phủ định độc lập Akkusativ là 'keinen'."
      }
    ]
  },
  {
    id: 3,
    unitNum: "Einheit 3",
    titleDe: "Meine Sprachen",
    titleVn: "Ngôn ngữ của tôi",
    topic: "Số nhiều danh từ & Liên từ chỉ nguyên nhân (denn, weil, deshalb)",
    grammar: {
      title: "Số nhiều danh từ & Phân biệt liên từ denn, weil, deshalb",
      rule: "1. Hình thức số nhiều của danh từ (Pluralformen): Thường thêm đuôi -e, -er, -en/-n, hoặc giữ nguyên có/không có biến âm Umlaut (ä, ö, ü).\n2. Phân biệt liên từ chỉ nguyên nhân - kết quả:\n   • denn (vì): Đứng ở vị trí 0, trật tự câu giữ nguyên (Chủ ngữ + Động từ chia ở vị trí 2).\n   • weil (bởi vì): Liên từ phụ thuộc, đưa động từ chia xuống cuối câu.\n   • deshalb (do đó, vì vậy): Trạng từ chỉ kết quả, đảo động từ chia lên vị trí 2 (deshalb + Verb + Subjekt)."
    },
    vocab: [
      { word: "die Muttersprache", article: "die", meaning: "tiếng mẹ đẻ" },
      { word: "die Fremdsprache", article: "die", meaning: "ngoại ngữ" },
      { word: "Vokabeln abschreiben", article: "", meaning: "chép từ vựng để ghi nhớ" },
      { word: "Wörter nachschlagen", article: "", meaning: "tra cứu từ vựng trong từ điển" },
      { word: "Fehler korrigieren", article: "", meaning: "sửa lỗi sai" },
      { word: "die Mehrsprachigkeit", article: "die", meaning: "tính đa ngôn ngữ, biết nhiều thứ tiếng" }
    ],
    sentences: [
      { de: "Welche Sprachen spricht dein Cousin?", vn: "Em họ của bạn nói những thứ tiếng nào?" },
      { de: "Ich schlage oft Wörter im Wörterbuch nach.", vn: "Tôi thường tra cứu từ vựng trong từ điển." },
      { de: "Chi ist neu im Club, deshalb spricht sie wenig Deutsch.", vn: "Chi mới vào câu lạc bộ, do đó bạn ấy nói ít tiếng Đức." }
    ],
    quizzes: [
      {
        q: "Sau liên từ 'denn' (bởi vì), vị trí của động từ chính trong câu là:",
        options: ["(Recommended) Vị trí 2 (như câu chính bình thường)", "Vị trí cuối cùng", "Vị trí số 1", "Bất kỳ vị trí nào"],
        ans: 0,
        expl: "'denn' là liên từ đẳng lập (vị trí 0), cấu trúc: denn + Chủ ngữ + Động từ (vị trí 2)."
      },
      {
        q: "Sau từ nối 'deshalb' (do đó), thành phần nào đứng ngay sau nó?",
        options: ["(Recommended) Động từ đã chia (Verb)", "Chủ ngữ (Subjekt)", "Tân ngữ (Objekt)", "Trạng từ"],
        ans: 0,
        expl: "'deshalb' đảo ngữ: deshalb + Động từ + Chủ ngữ..."
      }
    ]
  },
  {
    id: 4,
    unitNum: "Einheit 4",
    titleDe: "Mein Zuhause",
    titleVn: "Nhà của tôi",
    topic: "Giới từ 2 cách với Dativ (Wo?) & Động từ trạng thái",
    grammar: {
      title: "Giới từ 2 cách (Wechselpräpositionen) đi với Dativ & Động từ trạng thái",
      rule: "1. Câu hỏi 'Wo?' (Ở đâu?) đòi hỏi giới từ 2 cách đi với Dativ:\n   • 9 giới từ 2 cách: in (trong), an (sát bên), auf (trên bề mặt), neben (bên cạnh), hinter (phía sau), über (phía trên), unter (phía dưới), vor (phía trước), zwischen (ở giữa).\n   • Biến cách mạo từ Dativ: der/das → dem (im, am); die → der; die (Pl.) → den (+ -n).\n2. Động từ chỉ vị trí trạng thái đứng yên:\n   • liegen (nằm), stehen (đứng thẳng), sitzen (ngồi), hängen (treo ở)."
    },
    vocab: [
      { word: "das Reihenhaus", article: "das", meaning: "nhà liền kề" },
      { word: "das Hochhaus", article: "das", meaning: "tòa nhà cao tầng, chung cư" },
      { word: "das Bauernhaus", article: "das", meaning: "nhà ở trang trại, vùng quê" },
      { word: "das Möbelstück", article: "das", meaning: "đồ đạc nội thất" },
      { word: "der Schreibtisch", article: "der", meaning: "bàn học, bàn làm việc" },
      { word: "das Haustier", article: "das", meaning: "thú cưng trong nhà" }
    ],
    sentences: [
      { de: "Ich wohne in einem Bauernhaus.", vn: "Tôi sống trong một ngôi nhà ở nông thôn." },
      { de: "Das Regal hängt über dem Schreibtisch.", vn: "Cái giá sách được treo phía trên bàn học." },
      { de: "Die Katze sitzt unter dem Baum.", vn: "Con mèo đang ngồi ở dưới gốc cây." }
    ],
    quizzes: [
      {
        q: "Trả lời câu hỏi 'Wo ist das Buch?': 'Das Buch liegt auf ______ Tisch.' (der Tisch)",
        options: ["(Recommended) dem", "den", "der", "das"],
        ans: 0,
        expl: "Hỏi 'Wo?' đi với Dativ. Danh từ 'der Tisch' đổi thành 'dem Tisch'."
      },
      {
        q: "Động từ nào biểu thị vị trí đồ vật dạng đứng thẳng (như đèn cây, tủ lạnh)?",
        options: ["(Recommended) stehen", "liegen", "sitzen", "hängen"],
        ans: 0,
        expl: "'stehen' dùng cho vật đứng thẳng trên chân đế."
      }
    ]
  },
  {
    id: 5,
    unitNum: "Einheit 5",
    titleDe: "Mein Geburtstag",
    titleVn: "Sinh nhật của tôi",
    topic: "Động từ đòi hỏi Dativ & Giống của danh từ ghép",
    grammar: {
      title: "Động từ đòi hỏi Dativ (Verben mit Dativ) & Giống danh từ ghép",
      rule: "1. Động từ đi với tân ngữ gián tiếp Dativ:\n   • gratulieren (+ Dativ): chúc mừng ai (Ich gratuliere dir!).\n   • danken (+ Dativ): cảm ơn ai (Ich danke Ihnen).\n   • gefallen (+ Dativ): làm ai thích thú (Das Geschenk gefällt mir).\n   • stehen (+ Dativ): hợp với ai (Die Farbe steht ihm gut).\n2. Giống của danh từ ghép (Komposita): Luôn được xác định bởi giống của từ đứng ở vị trí cuối cùng:\n   - die Geburt + der Tag = der Geburtstag (vì der Tag là giống đực).\n   - der Geburtstag + die Karte = die Geburtstagskarte (vì die Karte là giống cái)."
    },
    vocab: [
      { word: "die Geburtstagsfeier", article: "die", meaning: "tiệc sinh nhật" },
      { word: "einladen", article: "", meaning: "mời mọc (tách: lädt... ein)" },
      { word: "das Geschenk", article: "das", meaning: "món quà tặng" },
      { word: "die Geburtstagskarte", article: "die", meaning: "thiệp chúc mừng sinh nhật" },
      { word: "der Wecker", article: "der", meaning: "đồng hồ báo thức" },
      { word: "gratulieren", article: "", meaning: "chúc mừng, chúc tụng" }
    ],
    sentences: [
      { de: "Ich möchte euch zu meiner Geburtstagsfeier einladen.", vn: "Mình muốn mời các bạn đến dự tiệc sinh nhật của mình." },
      { de: "Die Farbe steht ihm gut.", vn: "Màu sắc này rất hợp với cậu ấy." },
      { de: "Alles Gute zum Geburtstag!", vn: "Chúc mừng sinh nhật, mọi điều tốt lành nhất!" }
    ],
    quizzes: [
      {
        q: "Chia đại từ nhân xưng Dativ: 'Das neue Buch gefällt ______ sehr gut.' (ich)",
        options: ["(Recommended) mir", "mich", "mein", "ich"],
        ans: 0,
        expl: "Động từ 'gefallen' đòi hỏi Dativ. Đại từ 'ich' chuyển thành 'mir'."
      },
      {
        q: "Giống của từ ghép 'die Geburtstagsfeier' được quyết định bởi từ nào?",
        options: ["(Recommended) die Feier (từ đứng cuối cùng)", "die Geburt", "der Tag", "do người nói chọn"],
        ans: 0,
        expl: "Quy tắc tiếng Đức: Giống của danh từ ghép luôn do thành phần cuối cùng quyết định."
      }
    ]
  },
  {
    id: 6,
    unitNum: "Einheit 6",
    titleDe: "Mein Restaurantbesuch",
    titleVn: "Đi ăn nhà hàng",
    topic: "Đại từ nhân xưng thay thế Nominativ & Thao tác chế biến món ăn",
    grammar: {
      title: "Đại từ nhân xưng thay thế danh từ & Cấu trúc chỉ thao tác chế biến",
      rule: "1. Đại từ nhân xưng thay thế danh từ ở cách 1 (Nominativ):\n   • Thay thế danh từ giống đực (der): er (hoặc der).\n   • Thay thế danh từ giống cái (die): sie (hoặc die).\n   • Thay thế danh từ giống trung (das): es (hoặc das).\n2. Cấu trúc chỉ thao tác chế biến món ăn:\n   - schneiden / teilen / geben / gießen + etw. + in / über + Akkusativ.\n   - Ví dụ: Bananen schälen und in Scheiben schneiden (Bóc vỏ chuối và cắt lát)."
    },
    vocab: [
      { word: "die Hauptspeise", article: "die", meaning: "món ăn chính" },
      { word: "die Vorspeise", article: "die", meaning: "món khai vị" },
      { word: "die Nachspeise", article: "die", meaning: "món tráng miệng" },
      { word: "der Bratreis", article: "der", meaning: "món cơm rang, cơm chiên" },
      { word: "das Rezept", article: "das", meaning: "công thức nấu ăn" },
      { word: "die Geschmacksrichtung", article: "die", meaning: "hương vị: süß (ngọt), salzig (mặn), sauer (chua), scharf (cay)" }
    ],
    sentences: [
      { de: "Nimm Bratreis, der schmeckt auch gut!", vn: "Hãy chọn món cơm rang đi, món đó cũng ngon lắm!" },
      { de: "Wie schmeckt der Bratreis? – Er ist sehr lecker.", vn: "Món cơm rang có vị thế nào? – Nó rất ngon." },
      { de: "Bananen schälen und in Scheiben schneiden.", vn: "Bóc vỏ chuối và cắt thành từng lát mỏng." }
    ],
    quizzes: [
      {
        q: "Đại từ nào thay thế cho danh từ 'der Salat' trong câu: 'Wie schmeckt der Salat? - ______ ist frisch.'",
        options: ["(Recommended) Er", "Es", "Sie", "Ihn"],
        ans: 0,
        expl: "'der Salat' là danh từ giống đực (der), đại từ nhân xưng chủ ngữ thay thế là 'Er'."
      },
      {
        q: "Từ nào sau đây mang nghĩa là 'vị cay' trong tiếng Đức?",
        options: ["(Recommended) scharf", "süß", "salzig", "sauer"],
        ans: 0,
        expl: "scharf = cay; süß = ngọt; salzig = mặn; sauer = chua."
      }
    ]
  },
  {
    id: 7,
    unitNum: "Einheit 7",
    titleDe: "Meine Lieblingssendung",
    titleVn: "Chương trình truyền hình yêu thích",
    topic: "Cấp so sánh hơn & So sánh nhất của tính từ (Komparativ & Superlativ)",
    grammar: {
      title: "So sánh hơn (Komparativ) & So sánh nhất (Superlativ) của tính từ",
      rule: "1. So sánh hơn (Komparativ):\n   • Cấu trúc: Adjektiv + -er als... (Ví dụ: klein → kleiner als; schnell → schneller als).\n   • Tính từ đơn âm tiết có a, o, u thường thêm biến âm Umlaut: alt → älter; groß → größer.\n2. So sánh nhất (Superlativ):\n   • Cấu trúc: am + Adjektiv + -(e)sten (Ví dụ: am schnellsten, am ältesten).\n3. Các tính từ so sánh bất quy tắc quan trọng:\n   • gut → besser → am besten (tốt, giỏi).\n   • gern → lieber → am liebsten (thích).\n   • viel → mehr → am meisten (nhiều)."
    },
    vocab: [
      { word: "die Fernsehsendung", article: "die", meaning: "chương trình truyền hình" },
      { word: "der Zeichentrickfilm", article: "der", meaning: "phim hoạt hình" },
      { word: "die Kindersendung", article: "die", meaning: "chương trình thiếu nhi" },
      { word: "die Sportsendung", article: "die", meaning: "chương trình thể thao" },
      { word: "die Gameshow", article: "die", meaning: "trò chơi truyền hình" },
      { word: "die Nachrichten", article: "die", meaning: "tin tức thời sự" }
    ],
    sentences: [
      { de: "Was ist deine Lieblingssendung?", vn: "Chương trình truyền hình yêu thích của bạn là gì?" },
      { de: "Schneewittchen ist freundlicher als die Königin.", vn: "Bạch Tuyết thân thiện hơn Hoàng hậu." },
      { de: "Diese Runde ist am schwierigsten.", vn: "Vòng thi này là khó khăn nhất." }
    ],
    quizzes: [
      {
        q: "Dạng so sánh hơn (Komparativ) của tính từ 'gut' (tốt) là:",
        options: ["(Recommended) besser", "guter", "am besten", "mehr gut"],
        ans: 0,
        expl: "'gut' là tính từ biến đổi bất quy tắc: gut → besser → am besten."
      },
      {
        q: "Điền từ so sánh nhất: 'Im Sommer ist es ______ heißesten.'",
        options: ["(Recommended) am", "im", "an", "als"],
        ans: 0,
        expl: "Cấu trúc so sánh nhất đi với vị ngữ là 'am + Adjektiv + -(e)sten'."
      }
    ]
  },
  {
    id: 8,
    unitNum: "Einheit 8",
    titleDe: "Mein Arztbesuch",
    titleVn: "Khám bác sĩ",
    topic: "Thể mệnh lệnh (Imperativ) & Động từ khuyết thiếu sollen",
    grammar: {
      title: "Thể mệnh lệnh (Imperativ) & Đưa ra lời khuyên với 'sollen'",
      rule: "1. Thể mệnh lệnh (Imperativ):\n   • Ngôi 'du': Bỏ đuôi -st và bỏ đại từ 'du' (Ví dụ: Trinken → Trink!; Gehen → Geh!). Động từ đổi âm e → i/ie vẫn giữ âm đổi (Lies!).\n   • Ngôi 'ihr': Giữ nguyên dạng chia thì hiện tại, bỏ đại từ 'ihr' (Trinkt!).\n   • Ngôi 'Sie' (lịch sự): Đảo động từ lên trước đại từ 'Sie' (Trinken Sie!).\n2. Động từ khuyết thiếu 'sollen' (nên làm gì để đưa ra lời khuyên y tế/sức khỏe):\n   - Du sollst regelmäßig Sport treiben. (Bạn nên tập thể dục đều đặn)."
    },
    vocab: [
      { word: "die Halsschmerzen", article: "die", meaning: "chứng đau họng" },
      { word: "das Fieber", article: "das", meaning: "cơn sốt" },
      { word: "der Hustensaft", article: "der", meaning: "si-rô ho" },
      { word: "die Hausapotheke", article: "die", meaning: "tủ thuốc gia đình" },
      { word: "das Pflaster", article: "das", meaning: "băng cá nhân dán vết thương" },
      { word: "das Thermometer", article: "das", meaning: "nhiệt kế y tế" }
    ],
    sentences: [
      { de: "Ich habe Husten und Halsschmerzen.", vn: "Tôi bị ho và đau họng." },
      { de: "Trink nicht zu viel kaltes Wasser!", vn: "Đừng uống quá nhiều nước lạnh!" },
      { de: "Du sollst regelmäßig Sport treiben.", vn: "Bạn nên tập thể dục đều đặn." }
    ],
    quizzes: [
      {
        q: "Chuyển câu 'Du machst Sport.' sang thể mệnh lệnh ngôi du:",
        options: ["(Recommended) Mach Sport!", "Machst Sport!", "Machest du Sport!", "Sport mach!"],
        ans: 0,
        expl: "Thể mệnh lệnh ngôi 'du': Bỏ đại từ 'du' và bỏ đuôi '-st', còn lại 'Mach!'."
      },
      {
        q: "Động từ khuyết thiếu nào thường dùng để bác sĩ khuyên bệnh nhân nên làm gì?",
        options: ["(Recommended) sollen", "wollen", "dürfen", "können"],
        ans: 0,
        expl: "'sollen' mang nghĩa 'nên làm gì' theo lời khuyên hoặc yêu cầu của người khác."
      }
    ]
  },
  {
    id: 9,
    unitNum: "Einheit 9",
    titleDe: "Meine Lieblingsjahreszeit",
    titleVn: "Mùa yêu thích của tôi",
    topic: "Giới từ chỉ thời gian & Động từ khuyết thiếu müssen, dürfen, sollen",
    grammar: {
      title: "Giới từ chỉ thời gian (Temporale Präpositionen) & Động từ khuyết thiếu",
      rule: "1. Giới từ chỉ thời gian:\n   • am: Dùng cho ngày trong tuần, buổi trong ngày, ngày cụ thể (am Montag, am Morgen, am 5. Mai).\n   • um: Dùng cho mốc giờ chính xác (um 8 Uhr).\n   • im: Dùng cho tháng và mùa trong năm (im Sommer, im Januar).\n   • von... bis...: Từ mốc thời gian nào đến mốc thời gian nào.\n   • vor (trước), nach (sau), für (+ Akk: khoảng thời gian).\n2. Động từ khuyết thiếu:\n   • müssen: phải làm gì (bắt buộc, khách quan).\n   • dürfen: được phép làm gì (cho phép / cấm đoán với nicht dürfen).\n   • sollen: nên làm gì."
    },
    vocab: [
      { word: "die Jahreszeit", article: "die", meaning: "mùa trong năm (Frühling, Sommer, Herbst, Winter)" },
      { word: "die Sonne / sonnig", article: "die", meaning: "mặt trời / trời có nắng" },
      { word: "der Regen / regnerisch", article: "der", meaning: "cơn mưa / trời có mưa" },
      { word: "der Ausflug", article: "der", meaning: "chuyến dã ngoại, chuyến đi chơi" },
      { word: "die Sonnencreme", article: "die", meaning: "kem chống nắng" },
      { word: "wechselhaft", article: "", meaning: "thời tiết thay đổi thất thường" }
    ],
    sentences: [
      { de: "Welche Jahreszeit magst du?", vn: "Bạn thích mùa nào trong năm?" },
      { de: "Es ist sonnig, aber nicht so heiß.", vn: "Trời có nắng, nhưng không quá nóng." },
      { de: "Im Sommer dürfen wir schwimmen gehen.", vn: "Vào mùa hè, chúng tôi được phép đi bơi." }
    ],
    quizzes: [
      {
        q: "Điền giới từ chỉ thời gian thích hợp: 'Wir haben Deutschunterricht ______ Montag.'",
        options: ["(Recommended) am", "um", "im", "in"],
        ans: 0,
        expl: "Các thứ trong tuần (Montag, Dienstag...) bắt buộc đi với giới từ 'am'."
      },
      {
        q: "Câu 'Hier darf man nicht rauchen.' có ý nghĩa là gì?",
        options: [
          "(Recommended) Ở đây bị cấm hút thuốc (không được phép)",
          "Ở đây phải hút thuốc",
          "Ở đây nên hút thuốc",
          "Ở đây có thể hút thuốc"
        ],
        ans: 0,
        expl: "'nicht dürfen' biểu thị sự cấm đoán (không được phép làm)."
      }
    ]
  },
  {
    id: 10,
    unitNum: "Einheit 10",
    titleDe: "Mein Museumsbesuch",
    titleVn: "Chuyến thăm viện bảo tàng",
    topic: "Câu hỏi gián tiếp có từ để hỏi (W-Fragen) & Câu hỏi gián tiếp với liên từ 'ob'",
    grammar: {
      title: "Câu hỏi gián tiếp (Indirekte Fragesätze) với W-Fragen và liên từ 'ob'",
      rule: "1. Câu hỏi gián tiếp có từ để hỏi (W-Frage):\n   • Cấu trúc: [Mệnh đề dẫn], + W-Wort + Subjekt + ... + konjugiertes Verb.\n   • Ví dụ: Ich möchte wissen, wie viel das Ticket kostet.\n2. Câu hỏi gián tiếp Yes/No (không có từ để hỏi) dùng liên từ 'ob' (liệu rằng... có hay không):\n   • Cấu trúc: [Mệnh đề dẫn], + ob + Subjekt + ... + konjugiertes Verb.\n   • Ví dụ: Ich möchte fragen, ob wir hier Fotos machen dürfen.\n3. Động từ ở mệnh đề phụ gián tiếp luôn chuyển xuống vị trí cuối cùng."
    },
    vocab: [
      { word: "das Museum", article: "das", meaning: "viện bảo tàng" },
      { word: "die Kasse", article: "die", meaning: "quầy thanh toán, quầy bán vé" },
      { word: "das Ticket", article: "das", meaning: "vé vào cửa, vé tham quan" },
      { word: "kostenlos", article: "", meaning: "miễn phí, không mất tiền" },
      { word: "der Eingang / der Ausgang", article: "der", meaning: "lối vào / lối ra" },
      { word: "das Erdgeschoss", article: "das", meaning: "tầng trệt, tầng một" }
    ],
    sentences: [
      { de: "Ein Ticket für Schüler kostet 10.000 Dong.", vn: "Một vé cho học sinh có giá 10.000 đồng." },
      { de: "Ich möchte fragen, ob wir Fotos machen dürfen.", vn: "Tôi muốn hỏi xem chúng tôi có được phép chụp ảnh không." },
      { de: "Erzähl mal, wie dein Museumsbesuch war.", vn: "Hãy kể xem chuyến đi thăm bảo tàng của bạn như thế nào." }
    ],
    quizzes: [
      {
        q: "Điền liên từ nối câu hỏi gián tiếp Yes/No: 'Können Sie mir sagen, ______ das Museum heute geöffnet ist?'",
        options: ["(Recommended) ob", "dass", "weil", "wann"],
        ans: 0,
        expl: "Câu hỏi gián tiếp xuất phát từ câu hỏi Yes/No (Ist das Museum geöffnet?) dùng liên từ 'ob'."
      },
      {
        q: "Chọn câu hỏi gián tiếp đúng trật tự ngữ pháp tiếng Đức:",
        options: [
          "(Recommended) Ich möchte wissen, wann der Bus abfährt.",
          "Ich möchte wissen, wann fährt der Bus ab.",
          "Ich möchte wissen, wann der Bus fährt ab.",
          "Ich möchte wissen, der Bus wann abfährt."
        ],
        ans: 0,
        expl: "Trong mệnh đề phụ gián tiếp, động từ (kể cả động từ tách 'abfahren') chuyển xuống cuối câu và ghép liền."
      }
    ]
  }
];

module.exports = { germanLessonsData };
console.log('Tiếng Đức 6 Data (11 Units) ready.');
