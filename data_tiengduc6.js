// Generator script for Tieng Duc Lop 6 - Ket noi tri thuc voi cuoc song
const fs = require('fs');
const path = require('path');

console.log("Preparing data for Tieng Duc 6...");

const unitsData = [
  {
    id: "start",
    number: "Start",
    bookPart: "Tập 1",
    titleDe: "Ich bin neu an der Schule",
    titleVi: "Tôi là học sinh mới ở trường",
    page: "10",
    desc: "Làm quen môi trường THCS, phòng ban trường học, bạn học mới, môn học và hoạt động giờ ra chơi.",
    lektions: [
      {
        num: "Start",
        nameDe: "Ich bin neu an der Schule",
        nameVi: "Tôi là học sinh mới ở trường",
        page: "10",
        vocab: [
          { de: "die Schule", gender: "f.", vi: "trường học" },
          { de: "das Klassenzimmer", gender: "n.", vi: "phòng học" },
          { de: "der Schulhof", gender: "m.", vi: "sân trường" },
          { de: "die Mitschüler", gender: "pl.", vi: "bạn cùng lớp" },
          { de: "die Schulfächer", gender: "pl.", vi: "các môn học" },
          { de: "die Pause", gender: "f.", vi: "giờ ra chơi, giải lao" },
          { de: "neu", gender: "adj.", vi: "mới" },
          { de: "groß und schön", gender: "phrase", vi: "to và đẹp" }
        ],
        grammarTitle: "Chào hỏi & Giới thiệu bản thân, trường học",
        grammarContent: [
          { pattern: "Ich bin neu an der Schule.", vi: "Tôi là học sinh mới ở trường." },
          { pattern: "Meine Schule ist groß und modern.", vi: "Trường của tôi to và hiện đại." },
          { pattern: "Was machst du in der Pause? – Ich rede mit meinen Mitschülern.", vi: "Cậu làm gì trong giờ ra chơi? – Tớ trò chuyện với các bạn cùng lớp." },
          { pattern: "Mein Lieblingsfach ist Deutsch.", vi: "Môn học yêu thích của tớ là tiếng Đức." }
        ],
        phonetik: "Âm e không nhấn trọng âm ở cuối từ (unbetontes e: Schule, Pause, spiele, heiße, Klasse). Phát âm nhẹ như âm /ə/.",
        dialogue: [
          { speaker: "Lukas", text: "Hallo! Ich bin Lukas. Ich bin neu an der Schule." },
          { speaker: "Mai", text: "Hallo Lukas! Herzlich willkommen! Unsere Schule ist sehr schön. Was ist dein Lieblingsfach?" },
          { speaker: "Lukas", text: "Mein Lieblingsfach ist Deutsch. Und was machst du in der Pause?" },
          { speaker: "Mai", text: "In der Pause gehe ich auf den Schulhof und spiele mit Freunden." }
        ],
        quiz: {
          q: "Câu nào dùng để giới thiệu 'Tôi là học sinh mới ở trường'?",
          options: [
            "Ich bin neu an der Schule.",
            "Ich habe eine neue Schule.",
            "Meine Schule ist alt.",
            "Ich lerne keine Schule."
          ],
          ans: 0,
          explain: "'Ich bin neu an der Schule' là mẫu câu chuẩn để giới thiệu mình là học sinh mới chuyển đến hoặc mới vào lớp 6."
        }
      }
    ]
  },
  {
    id: "unit-1",
    number: "1",
    bookPart: "Tập 1",
    titleDe: "Meine Hobbys",
    titleVi: "Sở thích của tôi",
    page: "14",
    desc: "Các hoạt động lúc rảnh rỗi, tham gia câu lạc bộ học đường, các trò chơi yêu thích và giao lưu văn hóa trò chơi ở Đức.",
    lektions: [
      {
        num: "Lektion 1",
        nameDe: "Freizeitbeschäftigungen",
        nameVi: "Các hoạt động lúc rảnh rỗi",
        page: "14",
        vocab: [
          { de: "die Freizeit", gender: "f.", vi: "thời gian rảnh rỗi" },
          { de: "basteln", gender: "v.", vi: "làm đồ thủ công" },
          { de: "spazieren gehen", gender: "v.", vi: "đi dạo" },
          { de: "zeichnen", gender: "v.", vi: "vẽ tranh" },
          { de: "schwimmen", gender: "v.", vi: "bơi lội" },
          { de: "Rad fahren", gender: "v.", vi: "đi xe đạp" },
          { de: "Musik hören", gender: "v.", vi: "nghe nhạc" },
          { de: "Bücher lesen", gender: "v.", vi: "đọc sách" }
        ],
        grammarTitle: "Động từ đi kèm giới từ (Verben mit Präpositionen: warten auf + Akk, sprechen über + Akk)",
        grammarContent: [
          { pattern: "Was machst du in deiner Freizeit? – Ich bastele gern.", vi: "Bạn làm gì trong thời gian rảnh? – Tớ thích làm đồ thủ công." },
          { pattern: "Wir sprechen über unsere Hobbys.", vi: "Chúng tớ trò chuyện về các sở thích của mình. (sprechen über + Akkusativ)" },
          { pattern: "Ich warte auf meinen Freund auf dem Schulhof.", vi: "Tớ đang chờ bạn ở sân trường. (warten auf + Akkusativ)" }
        ],
        phonetik: "Trọng âm từ ghép (Komposita: 'Freizeit, 'Lieblingshobby). Trọng âm rơi vào từ tố thứ nhất.",
        dialogue: [
          { speaker: "Tim", text: "Hallo Mai, was machst du am Wochenende in deiner Freizeit?" },
          { speaker: "Mai", text: "Ich fahre gern Rad und höre Musik. Und du?" },
          { speaker: "Tim", text: "Ich bastele Flugzeuge aus Papier und gehe oft im Park spazieren." }
        ],
        quiz: {
          q: "Điền giới từ thích hợp: 'Wir sprechen _____ unsere Freizeitbeschäftigungen.'",
          options: ["über", "auf", "mit", "bei"],
          ans: 0,
          explain: "Động từ 'sprechen über + Akkusativ' nghĩa là nói/bàn luận về điều gì."
        }
      },
      {
        num: "Lektion 2",
        nameDe: "Clubs",
        nameVi: "Các câu lạc bộ trường học",
        page: "16",
        vocab: [
          { de: "der Club", gender: "m. (Pl. Clubs)", vi: "câu lạc bộ" },
          { de: "der Schachclub", gender: "m.", vi: "CLB cờ vua" },
          { de: "der Tanzclub", gender: "m.", vi: "CLB khiêu vũ / nhảy" },
          { de: "der Sportclub", gender: "m.", vi: "CLB thể thao" },
          { de: "teilnehmen an", gender: "v. (+ Dat)", vi: "tham gia vào" },
          { de: "helfen bei", gender: "v. (+ Dat)", vi: "giúp đỡ việc gì" },
          { de: "sich anmelden", gender: "v.", vi: "đăng ký" },
          { de: "regelmäßig", gender: "adv.", vi: "đều đặn, thường xuyên" }
        ],
        grammarTitle: "Động từ đi với Dativ (teilnehmen an + Dativ, helfen bei + Dativ)",
        grammarContent: [
          { pattern: "Ich nehme am Tanzclub teil.", vi: "Tớ tham gia câu lạc bộ khiêu vũ. (an + dem = am)" },
          { pattern: "Er hilft mir beim Deutschlernen.", vi: "Cậu ấy giúp tớ học tiếng Đức. (bei + dem = beim)" },
          { pattern: "Nimmst du auch am Schachclub teil?", vi: "Cậu cũng tham gia CLB cờ vua chứ?" }
        ],
        phonetik: "Phát âm phụ âm đôi /pf/ trong 'Pferd' và /ts/ trong 'Tanzclub', 'Zeit'.",
        dialogue: [
          { speaker: "Anna", text: "Mai, machst du in einem Schulclub mit?" },
          { speaker: "Mai", text: "Ja, ich nehme am Tanzclub teil. Das macht großen Spaß!" },
          { speaker: "Anna", text: "Toll! Kannst du mir beim Anmelden helfen?" },
          { speaker: "Mai", text: "Sehr gern! Wir gehen zusammen zum Lehrerzimmer." }
        ],
        quiz: {
          q: "Dạng kết hợp đúng của giới từ trong câu 'Ich nehme _____ Sportclub teil.' là:",
          options: ["am (an dem)", "im (in dem)", "beim (bei dem)", "zum (zu dem)"],
          ans: 0,
          explain: "Cụm cố định 'teilnehmen an + Dativ'. Vì 'der Sportclub' giống đực nên an + dem = am."
        }
      },
      {
        num: "Lektion 3",
        nameDe: "Mein Lieblingsspiel",
        nameVi: "Trò chơi yêu thích của tôi",
        page: "18",
        vocab: [
          { de: "das Lieblingsspiel", gender: "n.", vi: "trò chơi yêu thích" },
          { de: "das Seilspringen", gender: "n.", vi: "trò nhảy dây" },
          { de: "Verstecken spielen", gender: "v.", vi: "chơi trốn tìm" },
          { de: "das Brettspiel", gender: "n.", vi: "trò chơi cờ bàn" },
          { de: "Lust auf (+ Akk)", gender: "f.", vi: "có hứng thú/thích cái gì" },
          { de: "Interesse an (+ Dat)", gender: "n.", vi: "sự quan tâm tới" },
          { de: "gewinnen", gender: "v.", vi: "chiến thắng" },
          { de: "verlieren", gender: "v.", vi: "thua cuộc" }
        ],
        grammarTitle: "Danh từ đi kèm giới từ biểu thị sự hứng thú (Lust auf + Akk, Interesse an + Dat)",
        grammarContent: [
          { pattern: "Mein Lieblingsspiel ist Seilspringen.", vi: "Trò chơi yêu thích của tớ là nhảy dây." },
          { pattern: "Hast du Lust auf ein Spiel? – Ja, gerne!", vi: "Cậu có hứng thú chơi một ván không? – Có chứ, rất sẵn lòng!" },
          { pattern: "Ich habe großes Interesse an Brettspielen.", vi: "Tớ rất có hứng thú với các trò chơi cờ bàn." }
        ],
        phonetik: "Phát âm nguyên âm kép /ai/ (Seil, mein) và /au/ (auf, Baum).",
        dialogue: [
          { speaker: "Leon", text: "Was ist dein Lieblingsspiel, Phong?" },
          { speaker: "Phong", text: "Mein Lieblingsspiel ist Schach. Und deins?" },
          { speaker: "Leon", text: "Ich liebe Seilspringen und Tischtennis. Hast du jetzt Lust auf eine Partie Tischtennis?" },
          { speaker: "Phong", text: "Klar, los geht's!" }
        ],
        quiz: {
          q: "Cụm từ nào biểu đạt 'có hứng thú với một ván chơi'?",
          options: [
            "Lust auf ein Spiel haben",
            "Lust für ein Spiel machen",
            "Interesse nach Spiel suchen",
            "Freude bei Spiel stehen"
          ],
          ans: 0,
          explain: "Cấu trúc chuẩn tiếng Đức là 'Lust auf (+ Akkusativ) haben'."
        }
      },
      {
        num: "Landeskunde",
        nameDe: "Ein Spielabend in Deutschland",
        nameVi: "Văn hóa một buổi tối chơi cờ bàn tại Đức",
        page: "20",
        vocab: [
          { de: "der Spielabend", gender: "m.", vi: "buổi tối chơi trò chơi" },
          { de: "das Gesellschaftsspiel", gender: "n.", vi: "trò chơi nhóm / cờ bàn" },
          { de: "die Spielregeln", gender: "pl.", vi: "luật chơi" },
          { de: "gemütlich", gender: "adj.", vi: "ấm cúng, thoải mái" }
        ],
        grammarTitle: "Văn hóa Gesellschaftsspiele tại Đức",
        grammarContent: [
          { pattern: "In Deutschland sind Spielabende mit Familie und Freunden sehr beliebt.", vi: "Tại Đức, các buổi tối chơi trò chơi cùng gia đình và bạn bè rất phổ biến." },
          { pattern: "Beliebte Spiele sind 'Mensch ärgere Dich nicht', 'Catan' und 'Carcassonne'.", vi: "Các trò chơi được yêu thích là Cờ cá ngựa Đức, Catan và Carcassonne." }
        ],
        phonetik: "Âm /ç/ trong 'nicht', 'gemütlich' (âm vòm họng mềm).",
        dialogue: [
          { speaker: "Klara", text: "Freitags machen wir oft einen gemütlichen Spielabend zu Hause." },
          { speaker: "Lan", text: "Spielt ihr am Computer?" },
          { speaker: "Klara", text: "Nein, wir spielen Brettspiele wie 'Mensch ärgere Dich nicht'. Alle sitzen zusammen am Tisch!" }
        ],
        quiz: {
          q: "Trò chơi cờ bàn gia đình kinh điển và nổi tiếng nhất ở Đức là gì?",
          options: ["Mensch ärgere Dich nicht", "Football", "Roblox", "Golf"],
          ans: 0,
          explain: "'Mensch ärgere Dich nicht' (tương tự cờ cá ngựa) là trò chơi cờ bàn biểu tượng có trong hầu hết gia đình Đức."
        }
      },
      {
        num: "Projekt",
        nameDe: "Unser Club – Thành lập CLB của chúng mình",
        nameVi: "Dự án: Thiết kế Poster và Giới thiệu Câu Lạc Bộ",
        page: "21",
        vocab: [
          { de: "das Clubplakat", gender: "n.", vi: "áp phích câu lạc bộ" },
          { de: "die Aktivität", gender: "f.", vi: "hoạt động" },
          { de: "der Treffpunkt", gender: "m.", vi: "địa điểm gặp gỡ" },
          { de: "die Uhrzeit", gender: "f.", vi: "thời gian sinh hoạt" }
        ],
        grammarTitle: "Thuyết trình giới thiệu dự án (Präsentation)",
        grammarContent: [
          { pattern: "Unser Club heißt 'Deutsch & Spaß'.", vi: "CLB của chúng mình tên là 'Tiếng Đức & Niềm vui'." },
          { pattern: "Wir treffen uns jeden Dienstag um 16 Uhr auf dem Schulhof.", vi: "Chúng mình gặp nhau vào thứ Ba hàng tuần lúc 16h ở sân trường." },
          { pattern: "Macht alle mit!", vi: "Mọi người hãy cùng tham gia nhé!" }
        ],
        phonetik: "Ngữ điệu câu kêu gọi và thuyết trình tự tin, rõ ràng.",
        dialogue: [
          { speaker: "Nhóm trưởng", text: "Wir präsentieren heute unseren neuen Club: den Fußballclub der Klasse 6A. Wir trainieren jeden Freitag!" }
        ],
        quiz: {
          q: "Để mời bạn bè tham gia dự án CLB, ta dùng câu cảm thán nào?",
          options: ["Macht alle mit!", "Bleibt zu Hause!", "Geht weg!", "Seid leise!"],
          ans: 0,
          explain: "'Macht alle mit!' nghĩa là 'Mọi người hãy cùng tham gia nhé!'."
        }
      }
    ]
  },
  {
    id: "unit-2",
    number: "2",
    bookPart: "Tập 1",
    titleDe: "Meine Familie",
    titleVi: "Gia đình tôi",
    page: "22",
    desc: "Cây phả hệ, các thành viên gia đình nhiều thế hệ, sinh hoạt chung, công việc gia đình buổi sáng và mệnh đề phụ với weil.",
    lektions: [
      {
        num: "Lektion 1",
        nameDe: "Familienmitglieder",
        nameVi: "Các thành viên trong gia đình",
        page: "22",
        vocab: [
          { de: "die Familie", gender: "f.", vi: "gia đình" },
          { de: "die Großeltern", gender: "pl.", vi: "ông bà" },
          { de: "der Rentner / die Rentnerin", gender: "m./f.", vi: "người nghỉ hưu" },
          { de: "die Geschwister", gender: "pl.", vi: "anh chị em ruột" },
          { de: "der Schwager / die Schwägerin", gender: "m./f.", vi: "anh/em rể, chị/em dâu" },
          { de: "der Cousin / die Cousine", gender: "m./f.", vi: "anh chị em họ" },
          { de: "der Onkel / die Tante", gender: "m./f.", vi: "chú, bác, cậu / cô, dì" },
          { de: "ledig / verheiratet", gender: "adj.", vi: "độc thân / đã kết hôn" }
        ],
        grammarTitle: "Giới từ von (của) & Đại từ sở hữu (Possessivpronomen: mein, dein, sein, ihr)",
        grammarContent: [
          { pattern: "Das ist die Schwester von meinem Vater – meine Tante.", vi: "Đây là em gái của bố tớ – cô của tớ." },
          { pattern: "Mein Großvater ist 70 Jahre alt, er ist Rentner.", vi: "Ông tớ 70 tuổi, ông đã nghỉ hưu." },
          { pattern: "Ich habe zwei Geschwister: einen Bruder und eine Schwester.", vi: "Tớ có 2 anh chị em: một người anh/em trai và một người chị/em gái." }
        ],
        phonetik: "Âm đuôi -er trong Rentner, Vater, Bruder phát âm nhẹ /ɐ/.",
        dialogue: [
          { speaker: "Felix", text: "Ist das deine Familie auf dem Foto, Mai?" },
          { speaker: "Mai", text: "Ja! Das sind meine Großeltern, meine Eltern und mein kleiner Bruder." },
          { speaker: "Felix", text: "Und wer ist der Mann rechts?" },
          { speaker: "Mai", text: "Das ist mein Onkel Huy. Er ist Arzt von Beruf." }
        ],
        quiz: {
          q: "Người đã đến tuổi nghỉ hưu trong tiếng Đức gọi là gì?",
          options: ["der Rentner / die Rentnerin", "der Student", "der Schüler", "der Praktikant"],
          ans: 0,
          explain: "'der Rentner' (nam) và 'die Rentnerin' (nữ) chỉ người đã nghỉ chế độ hưu trí."
        }
      },
      {
        num: "Lektion 2",
        nameDe: "Zusammen mit Familie",
        nameVi: "Cùng làm việc với gia đình",
        page: "24",
        vocab: [
          { de: "zusammen kochen", gender: "v.", vi: "cùng nhau nấu ăn" },
          { de: "einen Ausflug machen", gender: "v.", vi: "đi dã ngoại" },
          { de: "den Garten pflegen", gender: "v.", vi: "chăm sóc vườn" },
          { de: "weil", gender: "conj.", vi: "bởi vì (động từ đứng cuối)" },
          { de: "helfen", gender: "v. (du hilfst)", vi: "giúp đỡ" },
          { de: "fleißig", gender: "adj.", vi: "chăm chỉ" },
          { de: "gemütlich zusammen sitzen", gender: "v.", vi: "ngồi quây quần bên nhau" }
        ],
        grammarTitle: "Mệnh đề phụ chỉ nguyên nhân với liên từ 'weil' (Nebensatz mit weil - Động từ chia chuyển xuống cuối câu)",
        grammarContent: [
          { pattern: "Wir basteln oft zusammen, weil mein Bruder das sehr gut kann.", vi: "Chúng tớ thường làm thủ công cùng nhau vì em trai tớ làm việc đó rất giỏi." },
          { pattern: "Ich helfe meiner Mutter beim Kochen, weil sie müde ist.", vi: "Tớ giúp mẹ nấu ăn vì mẹ đang mệt." },
          { pattern: "Am Sonntag machen wir ein Picknick, weil das Wetter schön ist.", vi: "Chủ nhật nhà tớ đi dã ngoại vì thời tiết rất đẹp." }
        ],
        phonetik: "Ngữ điệu hạ giọng cuối mệnh đề phụ với 'weil... [Verb].'",
        dialogue: [
          { speaker: "Ben", text: "Warum seid ihr am Wochenende immer so fröhlich?" },
          { speaker: "Mai", text: "Weil wir viel Zeit zusammen verbringen und oft gemeinsam kochen!" },
          { speaker: "Ben", text: "Das klingt wunderbar! Zusammen kochen macht immer Spaß." }
        ],
        quiz: {
          q: "Vị trí của động từ chia trong mệnh đề phụ với 'weil' là ở đâu?",
          options: [
            "Đứng ở cuối cùng của mệnh đề",
            "Đứng ở vị trí thứ hai sau liên từ",
            "Đứng ở đầu câu",
            "Không cần chia động từ"
          ],
          ans: 0,
          explain: "Trong tiếng Đức, liên từ phụ thuộc 'weil' luôn đẩy động từ đã chia xuống vị trí cuối cùng của mệnh đề phụ."
        }
      },
      {
        num: "Lektion 3",
        nameDe: "Ein Morgen bei uns",
        nameVi: "Một buổi sáng ở nhà chúng mình",
        page: "26",
        vocab: [
          { de: "das Frühstück", gender: "n.", vi: "bữa ăn sáng" },
          { de: "Zimmer aufräumen", gender: "v.", vi: "dọn dẹp phòng" },
          { de: "Geschirr spülen", gender: "v.", vi: "rửa bát đĩa" },
          { de: "das Bett machen", gender: "v.", vi: "dọn dẹp giường ngủ" },
          { de: "die Zähne putzen", gender: "v.", vi: "đánh răng" },
          { de: "sich beeilen", gender: "v.", vi: "khẩn trương, vội vã" },
          { de: "der Apfel", gender: "m.", vi: "quả táo" },
          { de: "das Brötchen", gender: "n.", vi: "bánh mì ổ nhỏ" }
        ],
        grammarTitle: "Đại từ bất định ở dạng Akkusativ: einen/keinen (giống đực), eine/keine (giống cái), eins/keins (giống trung)",
        grammarContent: [
          { pattern: "Möchtest du einen Apfel? – Nein, ich möchte keinen.", vi: "Cậu muốn một quả táo không? – Không, tớ không muốn quả nào cả. (m. -> einen / keinen)" },
          { pattern: "Hast du ein Brötchen? – Ja, ich habe eins.", vi: "Cậu có bánh mì tròn không? – Có, tớ có một chiếc. (n. -> ein / eins)" },
          { pattern: "Morgens räume ich immer mein Zimmer auf.", vi: "Buổi sáng tớ luôn dọn dẹp phòng của mình." }
        ],
        phonetik: "Âm /ʃ/ trong Geschirr, Frühstück, Schwester (viết là sch hoặc sp/st ở đầu âm tiết).",
        dialogue: [
          { speaker: "Mẹ", text: "Guten Morgen, Mai! Hast du dein Bett schon gemacht?" },
          { speaker: "Mai", text: "Ja, Mama! Ich habe auch die Zähne geputzt. Kann ich beim Frühstück helfen?" },
          { speaker: "Mẹ", text: "Danke, Liebling! Spülst du bitte das Geschirr nach dem Essen?" },
          { speaker: "Mai", text: "Klar, mache ich sofort!" }
        ],
        quiz: {
          q: "Điền đại từ bất định thích hợp: 'Möchtest du einen Saft? – Nein, danke, ich möchte _____.'",
          options: ["keinen", "keine", "keins", "nicht"],
          ans: 0,
          explain: "'der Saft' là giống đực (maskulin), tân ngữ trực tiếp Akkusativ phủ định là 'keinen'."
        }
      },
      {
        num: "Landeskunde",
        nameDe: "Wochenende in Deutschland",
        nameVi: "Ngày cuối tuần tại nước Đức",
        page: "28",
        vocab: [
          { de: "der Ruhetag", gender: "m.", vi: "ngày nghỉ ngơi tĩnh lặng" },
          { de: "der Sonntagsspaziergang", gender: "m.", vi: "chuyến đi dạo chủ nhật" },
          { de: "Kaffee und Kuchen", gender: "phrase", vi: "tiệc trà chiều cà phê và bánh ngọt" },
          { de: "die Ruhe", gender: "f.", vi: "sự yên tĩnh" }
        ],
        grammarTitle: "Văn hóa ngày chủ nhật (Sonntagsruhe) ở Đức",
        grammarContent: [
          { pattern: "Der Sonntag ist in Deutschland ein offizieller Ruhetag. Die Geschäfte sind geschlossen.", vi: "Chủ nhật ở Đức là ngày nghỉ ngơi chính thức. Tất cả các cửa hàng, siêu thị đều đóng cửa." },
          { pattern: "Familien machen oft einen Spaziergang im Wald und essen nachmittags Kuchen.", vi: "Các gia đình thường đi dạo trong rừng và cùng thưởng thức bánh ngọt vào buổi chiều." }
        ],
        phonetik: "Âm /uː/ dài trong 'Ruhe', 'Kuchen'.",
        dialogue: [
          { speaker: "Lukas", text: "Am Sonntag kaufen wir nicht ein. Wir fahren alle zusammen mit dem Fahrrad zum See." }
        ],
        quiz: {
          q: "Ở Đức, các cửa hàng và siêu thị vào ngày Chủ nhật thường như thế nào?",
          options: [
            "Đóng cửa (Geschäfte sind geschlossen) để giữ yên tĩnh nghỉ ngơi",
            "Mở cửa 24/24 suốt ngày đêm",
            "Chỉ mở vào ban đêm",
            "Mở cửa miễn phí"
          ],
          ans: 0,
          explain: "Luật 'Sonntagsruhe' của Đức quy định ngày Chủ nhật là ngày nghỉ ngơi, hầu hết cửa hàng siêu thị đều đóng cửa."
        }
      },
      {
        num: "Projekt",
        nameDe: "Familienstammbaum",
        nameVi: "Dự án: Sơ đồ cây phả hệ gia đình",
        page: "29",
        vocab: [
          { de: "der Familienstammbaum", gender: "m.", vi: "cây gia phả" },
          { de: "die Generation", gender: "f.", vi: "thế hệ" },
          { de: "die Verwandten", gender: "pl.", vi: "họ hàng, người thân" },
          { de: "beschreiben", gender: "v.", vi: "miêu tả" }
        ],
        grammarTitle: "Thuyết trình về cây gia phả bằng tiếng Đức",
        grammarContent: [
          { pattern: "Hier ganz oben sind meine Urgroßeltern und Großeltern.", vi: "Ở phía trên cùng này là các cụ và ông bà của mình." },
          { pattern: "In der Mitte sind meine Eltern, mein Onkel und meine Tante.", vi: "Ở giữa là bố mẹ, chú và cô của mình." },
          { pattern: "Ganz unten seht ihr mich und meine Geschwister.", vi: "Ở dưới cùng các bạn nhìn thấy mình và các anh chị em." }
        ],
        phonetik: "Cách đọc các từ ghép nhiều âm tiết: Fa-mi-li-en-stamm-baum.",
        dialogue: [
          { speaker: "Học sinh", text: "Das ist mein Familienstammbaum. Meine Familie hat drei Generationen. Wir leben alle zusammen in Hanoi." }
        ],
        quiz: {
          q: "Từ tiếng Đức nào có nghĩa là 'Cây phả hệ / Cây gia phả'?",
          options: ["der Familienstammbaum", "der Weihnachtsbaum", "der Apfelbaum", "der Wald"],
          ans: 0,
          explain: "'Familienstammbaum' ghép từ 'Familie' (gia đình) + 'Stamm' (thân cây/gốc) + 'Baum' (cây)."
        }
      }
    ]
  },
  {
    id: "unit-3",
    number: "3",
    bookPart: "Tập 1",
    titleDe: "Meine Sprachen",
    titleVi: "Ngôn ngữ của tôi",
    page: "30",
    desc: "Chào đón khách Đức, các mẹo học ngoại ngữ hiệu quả, các liên từ denn/weil/deshalb và dạng số nhiều của danh từ.",
    lektions: [
      {
        num: "Lektion 1",
        nameDe: "Unsere Gäste aus Deutschland",
        nameVi: "Những vị khách của chúng em đến từ nước Đức",
        page: "30",
        vocab: [
          { de: "die Gäste", gender: "pl.", vi: "khách mời" },
          { de: "der Austauschschüler", gender: "m.", vi: "học sinh trao đổi" },
          { de: "willkommen heißen", gender: "v.", vi: "chào mừng" },
          { de: "sich unterhalten", gender: "v.", vi: "trò chuyện" },
          { de: "kennenlernen", gender: "v.", vi: "làm quen" },
          { de: "gastfreundlich", gender: "adj.", vi: "hiếu khách" },
          { de: "die Partnerschule", gender: "f.", vi: "trường đối tác" },
          { de: "zusammenarbeiten", gender: "v.", vi: "hợp tác" }
        ],
        grammarTitle: "Chào đón khách và giới thiệu nguồn gốc (kommen aus / wohnen in)",
        grammarContent: [
          { pattern: "Herzlich willkommen an unserer Schule!", vi: "Nhiệt liệt chào mừng các bạn đến với trường của chúng mình!" },
          { pattern: "Unsere Gäste kommen aus Frankfurt am Main.", vi: "Khách của chúng mình đến từ thành phố Frankfurt am Main." },
          { pattern: "Wir unterhalten uns auf Deutsch und Englisch.", vi: "Chúng mình trò chuyện với nhau bằng tiếng Đức và tiếng Anh." }
        ],
        phonetik: "Âm /st/ và /sp/ ở đầu từ: 'Sprache', 'Stadt', 'Stunde' (phát âm như /ʃt/, /ʃp/).",
        dialogue: [
          { speaker: "Hiệu trưởng", text: "Guten Tag, liebe Schüler und Gäste! Wir freuen uns sehr über euren Besuch." },
          { speaker: "Florian", text: "Vielen Dank für den herzlichen Empfang! Vietnam ist ein wunderschönes Land." }
        ],
        quiz: {
          q: "Để gửi lời chào mừng nồng nhiệt đến khách, người Đức nói:",
          options: ["Herzlich willkommen!", "Auf Wiedersehen!", "Gute Nacht!", "Entschuldigung!"],
          ans: 0,
          explain: "'Herzlich willkommen!' là câu chào đón nồng hậu chính thức."
        }
      },
      {
        num: "Lektion 2",
        nameDe: "Tipps zum Fremdsprachenlernen",
        nameVi: "Các bí quyết học tốt ngoại ngữ",
        page: "32",
        vocab: [
          { de: "die Muttersprache", gender: "f.", vi: "tiếng mẹ đẻ" },
          { de: "die Fremdsprache", gender: "f.", vi: "ngoại ngữ" },
          { de: "Vokabeln abschreiben", gender: "v.", vi: "chép từ vựng" },
          { de: "Wörter nachschlagen", gender: "v.", vi: "tra cứu từ điển" },
          { de: "Hörtexte hören", gender: "v.", vi: "nghe bài đọc" },
          { de: "Apps benutzen", gender: "v.", vi: "dùng ứng dụng học tập" },
          { de: "denn", gender: "conj. (Pos. 0)", vi: "bởi vì (không đảo trật tự từ)" },
          { de: "deshalb", gender: "adv. (Pos. 1)", vi: "cho nên, vì thế (đảo động từ lên Pos. 2)" }
        ],
        grammarTitle: "Ba cách diễn đạt nguyên nhân - kết quả: denn (vị trí 0), weil (động từ cuối), deshalb (đảo ngữ vị trí 2)",
        grammarContent: [
          { pattern: "Ich lerne gern Deutsch, denn es macht großen Spaß.", vi: "Tớ thích học tiếng Đức, bởi vì nó rất thú vị. (denn giữ trật tự S + V)" },
          { pattern: "Ich lerne gern Deutsch, weil es großen Spaß macht.", vi: "Tớ thích học tiếng Đức, vì nó rất thú vị. (weil đẩy động từ macht xuống cuối)" },
          { pattern: "Deutsch ist nützlich, deshalb lerne ich jeden Tag.", vi: "Tiếng Đức rất hữu ích, vì vậy tớ học mỗi ngày. (deshalb + động từ lerne + chủ ngữ ich)" }
        ],
        phonetik: "Sự phân biệt âm vô thanh và hữu thanh /b/ - /p/, /d/ - /t/.",
        dialogue: [
          { speaker: "Niko", text: "Wie lernst du so schnell Vokabeln, Mai?" },
          { speaker: "Mai", text: "Ich schreibe die Wörter auf Kärtchen, denn so behalte ich sie besser." },
          { speaker: "Niko", text: "Ich höre gern deutsche Lieder, deshalb verstehe ich die Aussprache gut." }
        ],
        quiz: {
          q: "Câu nào dưới đây sử dụng đúng cấu trúc với liên từ 'deshalb'?",
          options: [
            "Ich möchte nach Berlin reisen, deshalb lerne ich Deutsch.",
            "Ich möchte nach Berlin reisen, deshalb ich lerne Deutsch.",
            "Ich möchte nach Berlin reisen, deshalb Deutsch lerne ich.",
            "Ich möchte nach Berlin reisen, deshalb lerne Deutsch ich."
          ],
          ans: 0,
          explain: "'deshalb' là trạng từ liên kết chiếm vị trí 1, động từ chia 'lerne' phải đứng ngay vị trí 2: 'deshalb lerne ich Deutsch'."
        }
      },
      {
        num: "Lektion 3",
        nameDe: "Deutsch macht Freu(n)de",
        nameVi: "Tiếng Đức mang lại niềm vui và những người bạn",
        page: "34",
        vocab: [
          { de: "die Freude", gender: "f.", vi: "niềm vui" },
          { de: "die Freunde", gender: "pl.", vi: "những người bạn" },
          { de: "das Wortspiel", gender: "n.", vi: "trò chơi chữ nghệ thuật" },
          { de: "die Pluralformen", gender: "pl.", vi: "các dạng số nhiều" },
          { de: "der Umlaut", gender: "m. (ä, ö, ü)", vi: "nguyên âm biến âm" },
          { de: "zusammen lachen", gender: "v.", vi: "cùng nhau cười vui" }
        ],
        grammarTitle: "Các hình thức biến đổi số nhiều của danh từ (Plural: -e, -er, -(e)n, -s, biến âm Umlaut)",
        grammarContent: [
          { pattern: "der Freund -> die Freunde (-e)", vi: "người bạn -> những người bạn" },
          { pattern: "das Kind -> die Kinder (-er)", vi: "đứa trẻ -> những đứa trẻ" },
          { pattern: "das Buch -> die Bücher (Umlaut + -er)", vi: "quyển sách -> những quyển sách" },
          { pattern: "die Schule -> die Schulen (-n)", vi: "trường học -> các trường học" },
          { pattern: "das Hobby -> die Hobbys (-s)", vi: "sở thích -> các sở thích" }
        ],
        phonetik: "Sự phân biệt âm /ɔɪ/ trong Freude, Freunde, neu, Deutsch.",
        dialogue: [
          { speaker: "Thầy giáo", text: "Versteht ihr das Wortspiel 'Deutsch macht Freu(n)de'?" },
          { speaker: "Học sinh", text: "Ja! Es bedeutet: Deutsch bringt Freude und hilft uns, neue Freunde zu finden!" }
        ],
        quiz: {
          q: "Dạng số nhiều của danh từ 'das Buch' (quyển sách) là gì?",
          options: ["die Bücher", "die Buche", "die Buchs", "die Buchen"],
          ans: 0,
          explain: "'das Buch' khi sang số nhiều nhận biến âm Umlaut và đuôi -er thành 'die Bücher'."
        }
      },
      {
        num: "Landeskunde",
        nameDe: "Mehrsprachigkeit in der Schweiz",
        nameVi: "Hiện tượng đa ngôn ngữ tại Thụy Sĩ",
        page: "36",
        vocab: [
          { de: "die Schweiz", gender: "f.", vi: "nước Thụy Sĩ" },
          { de: "die Vielsprachigkeit", gender: "f.", vi: "tính đa ngôn ngữ" },
          { de: "die Landessprachen", gender: "pl.", vi: "các ngôn ngữ quốc gia" },
          { de: "Deutsch, Französisch, Italienisch, Rätoromanisch", gender: "proper", vi: "4 ngôn ngữ chính thức của Thụy Sĩ" }
        ],
        grammarTitle: "4 ngôn ngữ chính thức của Thụy Sĩ",
        grammarContent: [
          { pattern: "Die Schweiz hat vier offizielle Landessprachen: Deutsch, Französisch, Italienisch und Rätoromanisch.", vi: "Thụy Sĩ có 4 ngôn ngữ chính thức: tiếng Đức (hơn 60%), tiếng Pháp, tiếng Ý và tiếng Romansh." },
          { pattern: "Viele Schweizer sprechen mindestens zwei oder drei Sprachen fließend.", vi: "Nhiều người dân Thụy Sĩ nói trôi chảy ít nhất 2 hoặc 3 thứ tiếng." }
        ],
        phonetik: "Cách phát âm âm mũi trong tiếng Pháp và biến thể tiếng Đức Thụy Sĩ (Schwiizerdütsch).",
        dialogue: [
          { speaker: "Beat", text: "Ich wohne in Zürich. Meine Muttersprache ist Deutsch, aber in der Schule lerne ich auch Französisch und Englisch." }
        ],
        quiz: {
          q: "Thụy Sĩ có bao nhiêu ngôn ngữ quốc gia chính thức?",
          options: ["4 ngôn ngữ (Đức, Pháp, Ý, Romansh)", "1 ngôn ngữ duy nhất", "2 ngôn ngữ", "6 ngôn ngữ"],
          ans: 0,
          explain: "Thụy Sĩ có 4 ngôn ngữ chính thức được hiến pháp công nhận: Deutsch, Französisch, Italienisch, Rätoromanisch."
        }
      },
      {
        num: "Projekt",
        nameDe: "Mein Lieblingswort",
        nameVi: "Dự án: Từ vựng tiếng Đức yêu thích của em",
        page: "37",
        vocab: [
          { de: "das Lieblingswort", gender: "n.", vi: "từ vựng yêu thích" },
          { de: "die Bedeutung", gender: "f.", vi: "ý nghĩa" },
          { de: "der Klang", gender: "m.", vi: "âm hưởng, giai điệu từ ngữ" },
          { de: "die Gemütlichkeit", gender: "f.", vi: "sự ấm cúng, dễ chịu" },
          { de: "das Fernweh", gender: "n.", vi: "nỗi khao khát đi xa khám phá thế giới" },
          { de: "der Schmetterling", gender: "m.", vi: "con bướm" }
        ],
        grammarTitle: "Thuyết trình về từ yêu thích: 'Mein Lieblingswort ist ..., weil ...'",
        grammarContent: [
          { pattern: "Mein deutsches Lieblingswort ist 'Fernweh', weil es die Sehnsucht nach fernen Ländern beschreibt.", vi: "Từ tiếng Đức yêu thích của mình là 'Fernweh', vì nó miêu tả nỗi khao khát được đặt chân tới những miền đất xa xôi." },
          { pattern: "Ich mag das Wort 'Schmetterling', weil es sehr schön klingt.", vi: "Mình thích từ 'Schmetterling', vì nghe phát âm của nó rất hay." }
        ],
        phonetik: "Luyện phát âm rõ ràng các phụ âm nối trong các từ dài của tiếng Đức.",
        dialogue: [
          { speaker: "Lan", text: "Mein Lieblingswort ist 'Kummerspeck'. Es ist so lustig und typisch deutsch!" }
        ],
        quiz: {
          q: "Từ 'Fernweh' trong tiếng Đức mang ý nghĩa đặc biệt nào?",
          options: [
            "Nỗi khao khát được đi du lịch, khám phá những vùng đất xa xôi",
            "Nỗi nhớ nhà khi đi xa (Heimweh)",
            "Cơn đau đầu",
            "Nỗi sợ bóng tối"
          ],
          ans: 0,
          explain: "'Fernweh' (trái nghĩa với 'Heimweh' - nhớ nhà) là từ đặc trưng chỉ khát khao được đi thật xa đến những miền đất mới lạ."
        }
      }
    ]
  },
  {
    id: "plattform-1",
    isStation: true,
    number: "P1",
    bookPart: "Tập 1",
    titleDe: "Plattform 1",
    titleVi: "Trạm ôn tập & Củng cố kiến thức (Einheit 1 – 3)",
    page: "38",
    desc: "Tổng kết toàn diện từ vựng sở thích, câu lạc bộ, gia đình, ngôn ngữ và các hiện tượng ngữ pháp weil, denn, deshalb, số nhiều danh từ.",
    lektions: [
      {
        num: "Plattform 1",
        nameDe: "Wiederholung & Festigung (E1 - E3)",
        nameVi: "Ôn tập và kiểm tra định kỳ 1",
        page: "38",
        vocab: [
          { de: "die Wiederholung", gender: "f.", vi: "sự ôn tập" },
          { de: "die Grammatikregel", gender: "f.", vi: "quy tắc ngữ pháp" },
          { de: "die Zusammenfassung", gender: "f.", vi: "bản tóm tắt tổng kết" },
          { de: "das Hörverstehen", gender: "n.", vi: "kỹ năng nghe hiểu" }
        ],
        grammarTitle: "Bảng so sánh cốt lõi: denn, weil, deshalb",
        grammarContent: [
          { pattern: "denn + S + V (giữ nguyên vị trí)", vi: "... denn ich habe keine Zeit." },
          { pattern: "weil + S + ... + V (động từ xuống cuối câu)", vi: "... weil ich keine Zeit habe." },
          { pattern: "deshalb + V + S (đảo động từ lên vị trí 2)", vi: "Ich bin krank, deshalb gehe ich zum Arzt." }
        ],
        phonetik: "Ôn tập tổng hợp âm unbetontes e, đuôi -er, và âm ghép ch/sch/sp/st.",
        dialogue: [
          { speaker: "Lehrer", text: "Guten Tag Klasse! Heute wiederholen wir Einheit 1 bis 3 auf Plattform 1." }
        ],
        quiz: {
          q: "Câu nào đồng nghĩa chính xác với 'Er lernt fleißig, weil er eine gute Note bekommen möchte'?",
          options: [
            "Er lernt fleißig, denn er möchte eine gute Note bekommen.",
            "Er lernt fleißig, denn er eine gute Note bekommen möchte.",
            "Er möchte eine gute Note bekommen, weil lernt er fleißig.",
            "Deshalb er lernt fleißig, er möchte eine Note."
          ],
          ans: 0,
          explain: "'denn' giữ trật tự câu chính (Chủ ngữ 'er' + Động từ 'möchte' + ...)."
        }
      }
    ]
  },
  {
    id: "unit-4",
    number: "4",
    bookPart: "Tập 1",
    titleDe: "Mein Zuhause",
    titleVi: "Ngôi nhà của tôi",
    page: "40",
    desc: "Các loại hình nhà ở, phòng ốc và đồ nội thất, giới từ chỉ vị trí 2 cách (Wechselpräpositionen Wo? + Dativ vs Wohin? + Akkusativ).",
    lektions: [
      {
        num: "Lektion 1",
        nameDe: "Wohnformen",
        nameVi: "Các loại hình nhà ở",
        page: "40",
        vocab: [
          { de: "das Einfamilienhaus", gender: "n.", vi: "nhà riêng cho một gia đình" },
          { de: "die Wohnung", gender: "f.", vi: "căn hộ" },
          { de: "das Hochhaus", gender: "n.", vi: "tòa nhà cao tầng" },
          { de: "der Bauernhof", gender: "m.", vi: "trang trại nông thôn" },
          { de: "auf dem Land", gender: "phrase", vi: "ở nông thôn" },
          { de: "in der Stadt", gender: "phrase", vi: "ở thành phố" },
          { de: "der Stock", gender: "m.", vi: "tầng nhà" },
          { de: "der Balkon", gender: "m.", vi: "ban công" }
        ],
        grammarTitle: "Giới từ chỉ nơi chốn (in einer Wohnung, in einem Haus, auf dem Land)",
        grammarContent: [
          { pattern: "Ich wohne in einer Wohnung im vierten Stock.", vi: "Tớ sống trong một căn hộ ở tầng bốn." },
          { pattern: "Mein Onkel lebt auf dem Land in einem gemütlichen Bauernhof.", vi: "Chú tớ sống ở vùng nông thôn trong một nông trại ấm cúng." },
          { pattern: "Das Hochhaus hat zwanzig Stockwerke.", vi: "Tòa nhà cao tầng có 20 tầng." }
        ],
        phonetik: "Âm /h/ bật hơi trong Haus, Hochhaus, Hof (không được nuốt âm).",
        dialogue: [
          { speaker: "Jonas", text: "Wo wohnst du in Hanoi, Phong?" },
          { speaker: "Phong", text: "Ich wohne mit meiner Familie in einem Reihenhaus. Wir haben einen kleinen Garten." },
          { speaker: "Jonas", text: "Schön! Ich wohne in Berlin in einer Wohnung im dritten Stock mit einem großen Balkon." }
        ],
        quiz: {
          q: "Để nói 'sống ở vùng nông thôn', ta dùng cụm từ nào?",
          options: ["auf dem Land", "in das Land", "an dem Dorf", "zu der Stadt"],
          ans: 0,
          explain: "Cụm thành ngữ cố định trong tiếng Đức là 'auf dem Land leben/wohnen'."
        }
      },
      {
        num: "Lektion 2",
        nameDe: "Mein Zimmer",
        nameVi: "Căn phòng của tôi",
        page: "42",
        vocab: [
          { de: "das Bett", gender: "n.", vi: "giường ngủ" },
          { de: "der Schreibtisch", gender: "m.", vi: "bàn học, bàn làm việc" },
          { de: "der Kleiderschrank", gender: "m.", vi: "tủ quần áo" },
          { de: "das Bücherregal", gender: "n.", vi: "giá sách" },
          { de: "die Lampe", gender: "f.", vi: "cây đèn" },
          { de: "der Teppich", gender: "m.", vi: "thảm trải sàn" },
          { de: "das Poster", gender: "n.", vi: "áp phích tranh ảnh" },
          { de: "hell und gemütlich", gender: "adj.", vi: "sáng sủa và ấm cúng" }
        ],
        grammarTitle: "Giới từ 2 cách chỉ vị trí tĩnh với câu hỏi 'Wo?' + Dativ (in, an, auf, neben, hinter, vor, über, unter, zwischen)",
        grammarContent: [
          { pattern: "Wo steht der Schreibtisch? – Der Schreibtisch steht am Fenster.", vi: "Bàn học đặt ở đâu? – Bàn học đặt cạnh cửa sổ. (an + dem = am)" },
          { pattern: "Das Buch liegt auf dem Tisch.", vi: "Quyển sách nằm ở trên bàn. (auf + dem Tisch)" },
          { pattern: "Das Poster hängt an der Wand.", vi: "Bức áp phích treo ở trên tường. (an + der Wand)" },
          { pattern: "Die Schuhe stehen unter dem Bett.", vi: "Đôi giày để ở dưới gầm giường. (unter + dem Bett)" }
        ],
        phonetik: "Âm /l/ trong Lampe, Regal, liegen (đầu lưỡi chạm vòm miệng trên).",
        dialogue: [
          { speaker: "Mia", text: "Dein Zimmer ist wirklich gemütlich!" },
          { speaker: "Mai", text: "Danke! Auf dem Schreibtisch steht mein Laptop, und an der Wand hängen Fotos von meinen Freunden." },
          { speaker: "Mia", text: "Und das Bücherregal steht neben dem Bett, praktisch!" }
        ],
        quiz: {
          q: "Trong câu 'Der Teppich liegt auf _____ Boden (der Boden)', mạo từ chia Dativ là gì?",
          options: ["dem", "den", "der", "des"],
          ans: 0,
          explain: "Câu hỏi 'Wo?' (ở đâu) đòi hỏi cách Dativ. 'der Boden' chuyển thành 'dem Boden'."
        }
      },
      {
        num: "Lektion 3",
        nameDe: "Ich suche meine Katze",
        nameVi: "Tôi đang tìm chú mèo của mình",
        page: "44",
        vocab: [
          { de: "die Katze", gender: "f.", vi: "con mèo" },
          { de: "der Hund", gender: "m.", vi: "con chó" },
          { de: "das Haustier", gender: "n.", vi: "thú cưng" },
          { de: "suchen / finden", gender: "v.", vi: "tìm kiếm / tìm thấy" },
          { de: "sich verstecken", gender: "v.", vi: "trốn, ẩn náu" },
          { de: "maunzen / bellen", gender: "v.", vi: "kêu meo meo / sủa gâu gâu" },
          { de: "laufen", gender: "v. (du läufst)", vi: "chạy" },
          { de: "der Korb", gender: "m.", vi: "chiếc giỏ" }
        ],
        grammarTitle: "Giới từ 2 cách chỉ phương hướng chuyển động với câu hỏi 'Wohin?' + Akkusativ",
        grammarContent: [
          { pattern: "Wohin läuft die Katze? – Sie läuft unter das Bett.", vi: "Con mèo chạy đi đâu thế? – Nó chạy xuống dưới gầm giường. (unter + das Bett)" },
          { pattern: "Ich lege das Kissen auf den Stuhl.", vi: "Tớ đặt chiếc gối lên chiếc ghế. (auf + den Stuhl - Akkusativ)" },
          { pattern: "So sánh: Wo ist die Katze? (unter dem Bett - Dat) vs Wohin läuft sie? (unter das Bett - Akk).", vi: "Phân biệt rõ: Vị trí tĩnh Wo? -> Dativ; Chuyển động hướng đến Wohin? -> Akkusativ." }
        ],
        phonetik: "Âm /ts/ trong Katze và /k/ trong Korb, Kissen.",
        dialogue: [
          { speaker: "Tim", text: "Mai, wo ist Mimi? Ich kann deine Katze nicht finden!" },
          { speaker: "Mai", text: "Schau mal, sie läuft gerade hinter das Sofa!" },
          { speaker: "Tim", text: "Ach ja, da versteckt sie sich gern!" }
        ],
        quiz: {
          q: "Chọn câu trả lời đúng cho câu hỏi chuyển động: 'Wohin läuft der Hund?'",
          options: [
            "Er läuft in den Garten.",
            "Er schläft im Garten.",
            "Er liegt auf dem Teppich.",
            "Er ist unter dem Tisch."
          ],
          ans: 0,
          explain: "'Wohin' hỏi về hướng di chuyển đòi hỏi Akkusativ: 'in den Garten'."
        }
      },
      {
        num: "Landeskunde",
        nameDe: "Haustiere und Kosenamen in Deutschland",
        nameVi: "Thú cưng và biệt danh dễ thương ở Đức",
        page: "46",
        vocab: [
          { de: "das Haustier", gender: "n.", vi: "thú cưng" },
          { de: "der Kosename", gender: "m.", vi: "tên gọi âu yếm, biệt danh" },
          { de: "Schatz / Schatzi", gender: "n.", vi: "kho báu / bé yêu" },
          { de: "Bärchen / Hasi", gender: "n.", vi: "gấu nhỏ / thỏ con" }
        ],
        grammarTitle: "Hậu tố giảm nhẹ thân thương -chen và -lein",
        grammarContent: [
          { pattern: "Katze -> Kätzchen (mèo con); Bär -> Bärchen (gấu nhỏ)", vi: "Hậu tố -chen luôn làm danh từ thành giống Trung (das) và thường gây biến âm Umlaut." },
          { pattern: "Hunde und Katzen sind die beliebtesten Haustiere in Deutschland.", vi: "Chó và mèo là hai loài thú nuôi được yêu thích nhất tại Đức." }
        ],
        phonetik: "Âm /ç/ trong đuôi -chen (Bärchen, Kätzchen).",
        dialogue: [
          { speaker: "Lisa", text: "Mein Hund heißt Bello, aber ich nenne ihn oft 'Bärchen', weil er so flauschig ist." }
        ],
        quiz: {
          q: "Hậu tố nào được người Đức thêm vào sau danh từ để tạo tên gọi âu yếm, nhỏ bé thân thương?",
          options: ["-chen / -lein", "-heit / -keit", "-ung / -schaft", "-tion / -tät"],
          ans: 0,
          explain: "Hậu tố '-chen' hoặc '-lein' là hình thức Diminutiv (thu nhỏ/âu yếm), ví dụ das Bärchen, das Hasi/Häschen."
        }
      },
      {
        num: "Projekt",
        nameDe: "Mein Traumhaus",
        nameVi: "Dự án: Ngôi nhà mơ ước của em",
        page: "47",
        vocab: [
          { de: "das Traumhaus", gender: "n.", vi: "ngôi nhà trong mơ" },
          { de: "der Swimmingpool", gender: "m.", vi: "bể bơi" },
          { de: "das Spielzimmer", gender: "n.", vi: "phòng trò chơi" },
          { de: "der Garten mit Blumen", gender: "m.", vi: "khu vườn đầy hoa" }
        ],
        grammarTitle: "Miêu tả cấu trúc nhà với 'Es gibt (+ Akk)' và 'In meinem Traumhaus gibt es...'",
        grammarContent: [
          { pattern: "In meinem Traumhaus gibt es fünf Zimmer und einen großen Garten.", vi: "Trong ngôi nhà mơ ước của mình có năm phòng và một khu vườn rộng." },
          { pattern: "Im Erdgeschoss ist das Wohnzimmer, und oben sind die Schlafzimmer.", vi: "Ở tầng trệt là phòng khách, và ở trên là các phòng ngủ." }
        ],
        phonetik: "Ngữ điệu hào hứng khi trình bày mô hình kiến trúc sáng tạo.",
        dialogue: [
          { speaker: "Học sinh", text: "Das ist der Bauplan für mein Traumhaus. Es steht am Meer und hat einen Pool auf dem Dach!" }
        ],
        quiz: {
          q: "Cấu trúc nào dùng để diễn đạt 'Có cái gì' (There is / There are) trong tiếng Đức?",
          options: ["Es gibt (+ Akkusativ)", "Es hat (+ Dativ)", "Es ist (+ Genitiv)", "Es macht (+ Nominativ)"],
          ans: 0,
          explain: "'Es gibt + Akkusativ' nghĩa là 'có...', ví dụ 'Es gibt einen Garten'."
        }
      }
    ]
  },
  {
    id: "unit-5",
    number: "5",
    bookPart: "Tập 1",
    titleDe: "Mein Geburtstag",
    titleVi: "Sinh nhật của tôi",
    page: "48",
    desc: "Viết thiệp mời sinh nhật, màu sắc và trang phục hợp với Dativ, tổ chức tiệc sinh nhật trẻ em theo truyền thống Đức.",
    lektions: [
      {
        num: "Lektion 1",
        nameDe: "Einladung zum Geburtstag",
        nameVi: "Thư mời dự tiệc sinh nhật",
        page: "48",
        vocab: [
          { de: "die Einladung", gender: "f.", vi: "lời mời, thiệp mời" },
          { de: "der Geburtstag", gender: "m.", vi: "ngày sinh nhật" },
          { de: "einladen", gender: "v. (du lädst ein)", vi: "mời" },
          { de: "stattfinden", gender: "v.", vi: "diễn ra, tổ chức" },
          { de: "das Datum", gender: "n.", vi: "ngày tháng" },
          { de: "die Uhrzeit", gender: "f.", vi: "giờ giấc" },
          { de: "mitbringen", gender: "v.", vi: "mang theo" },
          { de: "sich freuen auf (+ Akk)", gender: "v.", vi: "mong chờ điều gì" }
        ],
        grammarTitle: "Đại từ nhân xưng ở dạng Dativ (Dativpronomen: mir, dir, ihm, ihr, uns, euch, ihnen/Ihnen)",
        grammarContent: [
          { pattern: "Ich lade dich herzlich zu meiner Geburtstagsparty ein.", vi: "Tớ trân trọng mời cậu tới dự tiệc sinh nhật của tớ." },
          { pattern: "Die Feier findet am Samstag um 15 Uhr bei mir statt.", vi: "Bữa tiệc diễn ra vào thứ Bảy lúc 15h tại nhà tớ." },
          { pattern: "Gibst du mir bitte bis Freitag Bescheid?", vi: "Cậu báo lại cho tớ trước thứ Sáu được không? (geben + Dativ 'mir')" }
        ],
        phonetik: "Âm /ŋ/ trong Einladung, Wohnung, Hoffnung.",
        dialogue: [
          { speaker: "Nils", text: "Hier Mai, eine Einladung für dich zu meinem Geburtstag!" },
          { speaker: "Mai", text: "Oh danke, Nils! Wann findet die Party statt?" },
          { speaker: "Nils", text: "Am nächsten Sonntag um 14 Uhr. Ich freue mich sehr, wenn du kommst!" }
        ],
        quiz: {
          q: "Động từ tách nào có nghĩa là 'diễn ra, tổ chức' trong câu 'Die Party findet morgen _____.'?",
          options: ["statt", "auf", "mit", "aus"],
          ans: 0,
          explain: "Động từ 'stattfinden' có tiền tố tách là 'statt': 'Die Party findet morgen statt'."
        }
      },
      {
        num: "Lektion 2",
        nameDe: "Die Farbe steht ihm gut",
        nameVi: "Màu sắc này rất hợp với bạn ấy",
        page: "50",
        vocab: [
          { de: "die Farben", gender: "pl.", vi: "các màu sắc" },
          { de: "blau, rot, gelb, grün", gender: "adj.", vi: "xanh dương, đỏ, vàng, xanh lá" },
          { de: "schwarz, weiß, bunt", gender: "adj.", vi: "đen, trắng, rực rỡ nhiều màu" },
          { de: "stehen (+ Dat)", gender: "v.", vi: "hợp với ai (về trang phục, màu sắc)" },
          { de: "gefallen (+ Dat)", gender: "v.", vi: "làm cho ai thích thú" },
          { de: "passen (+ Dat)", gender: "v.", vi: "vừa vặn với ai" },
          { de: "das T-Shirt / der Pullover", gender: "n./m.", vi: "áo phông / áo len" }
        ],
        grammarTitle: "Các động từ luôn đòi hỏi tân ngữ Dativ: stehen, gefallen, passen (+ Dativ)",
        grammarContent: [
          { pattern: "Das blaue Hemd steht ihm sehr gut.", vi: "Chiếc áo sơ mi xanh dương rất hợp với cậu ấy. (steht + ihm)" },
          { pattern: "Wie gefällt dir mein neues Kleid? – Es gefällt mir prima!", vi: "Cậu thấy chiếc váy mới của tớ thế nào? – Tớ thích nó lắm! (gefällt + mir)" },
          { pattern: "Die Hose passt mir leider nicht.", vi: "Chiếc quần này tiếc là không vừa với tớ." }
        ],
        phonetik: "Nguyên âm dài và ngắn: 'rot' (dài) vs 'blau' (nguyên âm đôi).",
        dialogue: [
          { speaker: "Anna", text: "Schau mal, Max trägt heute ein rotes T-Shirt." },
          { speaker: "Mai", text: "Ja, rot steht ihm wirklich ausgezeichnet!" }
        ],
        quiz: {
          q: "Điền đại từ thích hợp: 'Das Geschenk gefällt _____ (du) sehr.'",
          options: ["dir", "dich", "du", "dein"],
          ans: 0,
          explain: "Động từ 'gefallen' luôn đi với tân ngữ cách 3 Dativ: 'dir'."
        }
      },
      {
        num: "Lektion 3",
        nameDe: "Eine Geburtstagsparty",
        nameVi: "Một bữa tiệc sinh nhật tưng bừng",
        page: "52",
        vocab: [
          { de: "die Party", gender: "f.", vi: "bữa tiệc" },
          { de: "die Geburtstagstorte", gender: "f.", vi: "bánh gato sinh nhật" },
          { de: "die Kerzen ausblasen", gender: "v.", vi: "thổi tắt nến" },
          { de: "Geschenke auspacken", gender: "v.", vi: "bóc quà tặng" },
          { de: "gratulieren (+ Dat)", gender: "v.", vi: "chúc mừng ai" },
          { de: "Herzlichen Glückwunsch!", gender: "phrase", vi: "Chúc mừng nhiệt liệt!" },
          { de: "Alles Gute zum Geburtstag!", gender: "phrase", vi: "Mọi điều tốt lành nhân ngày sinh nhật!" }
        ],
        grammarTitle: "Câu chúc tụng và giới từ 'zu' (+ Dativ: zum Geburtstag)",
        grammarContent: [
          { pattern: "Wir gratulieren dir herzlich zum Geburtstag!", vi: "Chúng tớ chúc mừng sinh nhật cậu thật nồng nhiệt! (gratulieren + dir + zu dem Geburtstag)" },
          { pattern: "Alles Gute zum Geburtstag, liebe Mai!", vi: "Chúc mừng sinh nhật, Mai thân mến!" },
          { pattern: "Zuerst bläst er die Kerzen aus, dann schneidet er die Torte an.", vi: "Đầu tiên bạn ấy thổi nến, sau đó cắt bánh gato." }
        ],
        phonetik: "Âm /ts/ trong 'Glückwunsch', 'Kerzen', 'zuerst'.",
        dialogue: [
          { speaker: "Tất cả", text: "Zum Geburtstag viel Glück! Zum Geburtstag, lieber Tom!" },
          { speaker: "Tom", text: "Vielen Dank, ihr seid die besten Freunde! Kommt, wir essen jetzt Kuchen." }
        ],
        quiz: {
          q: "Lời chúc sinh nhật phổ biến nhất trong tiếng Đức là gì?",
          options: [
            "Herzlichen Glückwunsch zum Geburtstag!",
            "Frohe Weihnachten!",
            "Gute Besserung!",
            "Guten Appetit!"
          ],
          ans: 0,
          explain: "'Herzlichen Glückwunsch zum Geburtstag!' hoặc 'Alles Gute zum Geburtstag!' là câu chúc chuẩn nhất."
        }
      },
      {
        num: "Landeskunde",
        nameDe: "Kindergeburtstag in Deutschland",
        nameVi: "Phong tục sinh nhật trẻ em tại Đức",
        page: "54",
        vocab: [
          { de: "das Topfschlagen", gender: "n.", vi: "trò chơi gõ nồi bịt mắt nhận quà" },
          { de: "die Schnitzeljagd", gender: "f.", vi: "trò chơi truy tìm kho báu theo manh mối" },
          { de: "der Geburtstagskuchen", gender: "m.", vi: "bánh sinh nhật" },
          { de: "die Tradition", gender: "f.", vi: "truyền thống" }
        ],
        grammarTitle: "Các trò chơi truyền thống trong tiệc sinh nhật trẻ em Đức",
        grammarContent: [
          { pattern: "Beim 'Topfschlagen' verbinden sich die Kinder die Augen und suchen mit einem Holzlöffel einen Topf.", vi: "Trong trò 'Gõ nồi', trẻ em bịt mắt và cầm muỗng gỗ dò tìm chiếc nồi úp có phần thưởng bên trong." },
          { pattern: "Auf dem Kuchen brennen so viele Kerzen wie das Kind alt wird.", vi: "Trên bánh cắm số ngọn nến bằng đúng số tuổi của bạn nhỏ." }
        ],
        phonetik: "Âm /pf/ bật hơi môi trong 'Topfschlagen'.",
        dialogue: [
          { speaker: "Jonas", text: "An meinem 12. Geburtstag haben wir eine spannende Schnitzeljagd im Wald gemacht!" }
        ],
        quiz: {
          q: "Trò chơi sinh nhật trẻ em Đức trong đó người chơi bịt mắt cầm thìa gõ tìm nồi úp có tên là gì?",
          options: ["Topfschlagen", "Schnitzeljagd", "Sackhüpfen", "Verstecken"],
          ans: 0,
          explain: "'Topfschlagen' (Topf = nồi, schlagen = đập/gõ) là trò chơi sinh nhật cổ điển của trẻ em Đức."
        }
      },
      {
        num: "Projekt",
        nameDe: "Eine Geburtstagsparty in der Schule",
        nameVi: "Dự án: Kế hoạch tổ chức sinh nhật tại lớp học",
        page: "55",
        vocab: [
          { de: "die Partyplanung", gender: "f.", vi: "kế hoạch tổ chức tiệc" },
          { de: "die Aufgabenliste", gender: "f.", vi: "danh sách phân công công việc" },
          { de: "die Dekoration", gender: "f.", vi: "trang trí lớp học" },
          { de: "die Musikliste", gender: "f.", vi: "danh sách bài hát phát tiệc" }
        ],
        grammarTitle: "Phân công nhiệm vụ với động từ khuyết thiếu 'können / sollen / müssen'",
        grammarContent: [
          { pattern: "Mai kann den Kuchen mitbringen.", vi: "Mai có thể mang bánh ngọt tới." },
          { pattern: "Tom und Ben sollen den Klassenraum dekorieren.", vi: "Tom và Ben sẽ phụ trách trang trí phòng học." },
          { pattern: "Wir müssen pünktlich anfangen.", vi: "Chúng ta phải bắt đầu đúng giờ." }
        ],
        phonetik: "Ngữ điệu câu kế hoạch, thảo luận nhóm vui vẻ, tích cực.",
        dialogue: [
          { speaker: "Nhóm trưởng", text: "Hier ist unser Plan: Wir feiern am Freitag in der 6. Stunde. Alle bringen etwas Leckeres mit!" }
        ],
        quiz: {
          q: "Để phân công 'Bạn Nam có nhiệm vụ chuẩn bị âm nhạc', ta nói:",
          options: [
            "Nam soll die Musik vorbereiten.",
            "Nam will kein Musik hören.",
            "Nam geht nach Hause.",
            "Nam macht keine Musik an."
          ],
          ans: 0,
          explain: "'sollen' được dùng để diễn tả sự phân công nhiệm vụ hoặc lời dặn dò."
        }
      }
    ]
  },
  {
    id: "plattform-2",
    isStation: true,
    number: "P2",
    bookPart: "Tập 1",
    titleDe: "Plattform 2 & Fit für ...",
    titleVi: "Trạm ôn tập & Luyện thi học kì 1",
    page: "56",
    desc: "Củng cố toàn bộ kiến thức Học kì 1 (Start & Einheit 1 – 5), rèn luyện 4 kỹ năng Đọc hiểu, Nghe, Viết và Nói theo chuẩn đề thi quốc tế Goethe Zertifikat A1.1/A1.2 Fit in Deutsch.",
    lektions: [
      {
        num: "Plattform 2",
        nameDe: "Große Wiederholung Semester 1",
        nameVi: "Tổng ôn tập học kì 1 (S. 56)",
        page: "56",
        vocab: [
          { de: "die Prüfung", gender: "f.", vi: "kỳ thi, bài kiểm tra" },
          { de: "das Semester", gender: "n.", vi: "học kỳ" },
          { de: "die Kompetenzen", gender: "pl.", vi: "các năng lực ngôn ngữ" },
          { de: "erfolgreich", gender: "adj.", vi: "thành công" }
        ],
        grammarTitle: "Tổng kết 5 điểm ngữ pháp trọng tâm Học kì 1",
        grammarContent: [
          { pattern: "1. Giới từ động từ: warten auf (+ Akk), teilnehmen an (+ Dat).", vi: "Động từ kèm giới từ cố định." },
          { pattern: "2. Mệnh đề phụ với 'weil' (Verb cuối câu) vs 'denn' (Pos. 0) vs 'deshalb' (Pos. 1 + Verb Pos. 2).", vi: "Ba cấu trúc nguyên nhân - kết quả." },
          { pattern: "3. Wechselpräpositionen: Wo? + Dativ vs Wohin? + Akkusativ.", vi: "Giới từ 2 cách chỉ vị trí và hướng chuyển động." },
          { pattern: "4. Dativpronomen: mir, dir, ihm, ihr, uns, euch, ihnen/Ihnen.", vi: "Đại từ nhân xưng ở cách 3 Dativ." },
          { pattern: "5. Các động từ đi với Dativ: stehen, gefallen, passen, gratulieren.", vi: "Các động từ đòi hỏi bổ ngữ cách 3." }
        ],
        phonetik: "Luyện phát âm tổng hợp toàn bộ các cặp âm khó của Học kì 1.",
        dialogue: [
          { speaker: "Lehrer", text: "Sehr gut, Kinder! Ihr habt das erste Semester mit Bravour abgeschlossen!" }
        ],
        quiz: {
          q: "Trong câu 'Er gratuliert _____ (ich) zum Geburtstag', đại từ cần điền là:",
          options: ["mir", "mich", "mein", "ich"],
          ans: 0,
          explain: "'gratulieren' đòi hỏi cách 3 Dativ: 'mir'."
        }
      },
      {
        num: "Fit für ...",
        nameDe: "Fit für die Prüfung Semester 1",
        nameVi: "Luyện đề thi học kì 1 (S. 58)",
        page: "58",
        vocab: [
          { de: "das Leseverstehen", gender: "n.", vi: "bài đọc hiểu" },
          { de: "der Lückentext", gender: "m.", vi: "bài điền khuyết" },
          { de: "die E-Mail schreiben", gender: "v.", vi: "viết thư điện tử" },
          { de: "die Punkte", gender: "pl.", vi: "điểm số" }
        ],
        grammarTitle: "Kỹ năng làm bài thi trắc nghiệm & viết thư theo đề mẫu chuẩn",
        grammarContent: [
          { pattern: "Lieber Paul, / Liebe Anna, (Lời chào đầu thư)", vi: "Quy tắc viết hoa - viết thường sau dấu phẩy trong thư tiếng Đức." },
          { pattern: "Ich lade dich herzlich zu... ein. (Nội dung chính)", vi: "Nêu rõ thời gian, địa điểm, mục đích." },
          { pattern: "Viele Grüße / Herzliche Grüße (Lời chào kết thư)", vi: "Kết thư bằng hữu nghị." }
        ],
        phonetik: "Luyện phản xạ nghe đề thi tốc độ chuẩn A1.",
        dialogue: [
          { speaker: "Prüfer", text: "Guten Tag! Willkommen zur Prüfung Fit für Deutsch 1!" }
        ],
        quiz: {
          q: "Sau lời mở đầu bức thư 'Liebe Anna,' chữ cái đầu tiên của câu tiếp theo phải viết thế nào?",
          options: [
            "Viết thường (trừ khi là danh từ hoặc đại từ Sie)",
            "Luôn luôn viết hoa",
            "Viết in nghiêng",
            "Viết số"
          ],
          ans: 0,
          explain: "Trong tiếng Đức, sau lời chào mở đầu bức thư có dấu phẩy (Liebe Anna,), dòng tiếp theo bắt đầu bằng chữ viết thường."
        }
      }
    ]
  },
  {
    id: "unit-6",
    number: "6",
    bookPart: "Tập 2",
    titleDe: "Mein Restaurantbesuch",
    titleVi: "Chuyến đi nhà hàng của tôi",
    page: "60",
    desc: "Gọi đồ ăn thức uống, hương vị món ăn, công thức chế biến salad hoa quả, câu mệnh lệnh Imperativ và đặc sản ẩm thực nước Đức.",
    lektions: [
      {
        num: "Lektion 1",
        nameDe: "Ich liebe Eis",
        nameVi: "Tôi yêu thích món kem",
        page: "60",
        vocab: [
          { de: "das Restaurant", gender: "n.", vi: "nhà hàng" },
          { de: "die Eisdiele", gender: "f.", vi: "tiệm kem Ý" },
          { de: "das Eis", gender: "n.", vi: "kem, đá tuyết" },
          { de: "die Kugel Eis", gender: "f.", vi: "viên kem" },
          { de: "die Schokolade", gender: "f.", vi: "sô-cô-la" },
          { de: "die Erdbeere", gender: "f.", vi: "dâu tây" },
          { de: "die Vanille", gender: "f.", vi: "va-ni" },
          { de: "bestellen", gender: "v.", vi: "gọi món, đặt hàng" },
          { de: "die Sahne", gender: "f.", vi: "kem tươi béo" }
        ],
        grammarTitle: "Động từ 'möchten' khi gọi món (Ich möchte zwei Kugeln...)",
        grammarContent: [
          { pattern: "Ich möchte bitte zwei Kugeln Eis: Schokolade und Erdbeere.", vi: "Cho cháu xin 2 viên kem: sô-cô-la và dâu tây." },
          { pattern: "Möchten Sie das Eis in der Waffel oder im Becher? – In der Waffel, bitte!", vi: "Quý khách muốn kem ốc quế hay đựng trong cốc? – Ốc quế ạ!" },
          { pattern: "Mit Sahne? – Nein, ohne Sahne, bitte.", vi: "Có lấy kem tươi không? – Dạ không, không lấy kem tươi ạ." }
        ],
        phonetik: "Âm /v/ trong 'Vanille', 'Waffel' và âm /ʃ/ trong 'Schokolade'.",
        dialogue: [
          { speaker: "Eisverkäufer", text: "Hallo! Was darf es sein?" },
          { speaker: "Mai", text: "Guten Tag! Ich möchte zwei Kugeln: eine Kugel Vanille und eine Kugel Mango." },
          { speaker: "Eisverkäufer", text: "Im Becher oder in der Waffel?" },
          { speaker: "Mai", text: "In der Waffel, bitte. Was kostet das?" },
          { speaker: "Eisverkäufer", text: "Das macht 3 Euro, bitte!" }
        ],
        quiz: {
          q: "Để gọi 2 viên kem lịch sự bằng tiếng Đức, ta nói:",
          options: [
            "Ich möchte bitte zwei Kugeln Eis.",
            "Ich nehme kein Eis.",
            "Eis schmeckt mir schlecht.",
            "Kaufst du das Eis?"
          ],
          ans: 0,
          explain: "'Ich möchte bitte...' là cách nói chuẩn mực, lịch sự nhất khi gọi món ăn/uống."
        }
      },
      {
        num: "Lektion 2",
        nameDe: "Wie schmeckt der Bratreis?",
        nameVi: "Cơm rang ăn có ngon không?",
        page: "62",
        vocab: [
          { de: "der Bratreis", gender: "m.", vi: "cơm rang, cơm chiên" },
          { de: "die Frühlingsrollen", gender: "pl.", vi: "nem rán, chả giò" },
          { de: "die Bratwurst", gender: "f.", vi: "xúc xích nướng" },
          { de: "schmecken (+ Dat)", gender: "v.", vi: "có vị, ngon miệng đối với ai" },
          { de: "lecker / köstlich", gender: "adj.", vi: "ngon miệng" },
          { de: "süß / salzig / sauer / scharf", gender: "adj.", vi: "ngọt / mặn / chua / cay" },
          { de: "die Speisekarte", gender: "f.", vi: "thực đơn" },
          { de: "die Rechnung", gender: "f.", vi: "hóa đơn tính tiền" }
        ],
        grammarTitle: "Động từ 'schmecken + Dativ' và tính từ miêu tả vị giác",
        grammarContent: [
          { pattern: "Wie schmeckt der Bratreis? – Er schmeckt ausgezeichnet!", vi: "Món cơm rang ăn thế nào? – Ngon tuyệt vời!" },
          { pattern: "Schmeckt es dir? – Ja, die Suppe schmeckt mir sehr gut.", vi: "Cậu ăn thấy ngon miệng không? – Có, món súp này rất hợp khẩu vị của tớ." },
          { pattern: "Die Soße ist ein bisschen zu scharf.", vi: "Nước sốt hơi bị cay một chút." }
        ],
        phonetik: "Âm /ç/ trong 'Bratreis', 'lecker' và âm /ʃ/ trong 'scharf', 'schmecken'.",
        dialogue: [
          { speaker: "Kellner", text: "Hat es Ihnen geschmeckt?" },
          { speaker: "Familie", text: "Ja, vielen Dank! Alles war wirklich köstlich. Wir möchten bitte zahlen." },
          { speaker: "Kellner", text: "Gerne! Zusammen oder getrennt?" },
          { speaker: "Familie", text: "Zusammen, bitte." }
        ],
        quiz: {
          q: "Để khen món súp rất ngon, ta nói câu nào?",
          options: [
            "Die Suppe schmeckt mir sehr gut!",
            "Die Suppe ist mir egal.",
            "Die Suppe will ich nicht.",
            "Die Suppe schmeckt furchtbar."
          ],
          ans: 0,
          explain: "'schmecken + Dativ + sehr gut' là cách diễn đạt chuẩn khi khen ngợi đồ ăn ngon."
        }
      },
      {
        num: "Lektion 3",
        nameDe: "Ein Rezept für Obstsalat",
        nameVi: "Một công thức làm món salad trái cây",
        page: "64",
        vocab: [
          { de: "das Rezept", gender: "n.", vi: "công thức nấu ăn" },
          { de: "die Zutaten", gender: "pl.", vi: "nguyên liệu" },
          { de: "schneiden", gender: "v.", vi: "thái, cắt" },
          { de: "waschen", gender: "v. (du wäschst)", vi: "rửa sạch" },
          { de: "mischen", gender: "v.", vi: "trộn đều" },
          { de: "dazugeben", gender: "v.", vi: "cho thêm vào" },
          { de: "die Banane / der Apfel / die Weintrauben", gender: "f./m./pl.", vi: "chuối / táo / nho" },
          { de: "der Joghurt", gender: "m.", vi: "sữa chua" }
        ],
        grammarTitle: "Câu mệnh lệnh (Imperativ) ở ngôi 'du' và ngôi 'ihr'",
        grammarContent: [
          { pattern: "Wasch die Früchte gründlich! (Imperativ ngôi du: bỏ đuôi -st và chủ ngữ du)", vi: "Hãy rửa trái cây thật kỹ!" },
          { pattern: "Schneide den Apfel und die Bananen in kleine Stücke! (ngôi du)", vi: "Hãy cắt táo và chuối thành từng miếng nhỏ!" },
          { pattern: "Mischt alles in einer Schüssel zusammen! (Imperativ ngôi ihr: bỏ chủ ngữ ihr, giữ nguyên dạng động từ chia)", vi: "Các em hãy trộn đều tất cả trong một chiếc tô lớn!" }
        ],
        phonetik: "Âm ngắt vòm họng Knacklaut trước các nguyên âm đầu từ trong 'Obst', 'Apfel'.",
        dialogue: [
          { speaker: "Cô giáo", text: "Kinder, heute machen wir Obstsalat! Wasch zuerst eure Hände!" },
          { speaker: "Học sinh", text: "Und danach schneiden wir das Obst, richtig?" },
          { speaker: "Cô giáo", text: "Genau. Gebt dann etwas Joghurt dazu und rührt alles gut um!" }
        ],
        quiz: {
          q: "Dạng thức mệnh lệnh chuẩn (Imperativ) của động từ 'waschen' đối với ngôi 'du' là gì?",
          options: ["Wasch! / Wasche!", "Wäschst!", "Wascht ihr!", "Waschen du!"],
          ans: 0,
          explain: "Thể mệnh lệnh ngôi 'du' bỏ hậu tố -st, bỏ chủ ngữ du, và bỏ dấu Umlaut: 'Wasch!' hoặc 'Wasche!'."
        }
      },
      {
        num: "Landeskunde",
        nameDe: "Eine Spezialität von Deutschland",
        nameVi: "Các món đặc sản ẩm thực nổi tiếng của nước Đức",
        page: "66",
        vocab: [
          { de: "die Spezialität", gender: "f.", vi: "món đặc sản" },
          { de: "die Currywurst", gender: "f.", vi: "xúc xích cà ri nổi tiếng Berlin" },
          { de: "die Brezel", gender: "f.", vi: "bánh mì xoắn Brezel miền Nam nước Đức" },
          { de: "das Sauerkraut", gender: "n.", vi: "bắp cải muối chua Đức" },
          { de: "das Schwarzbrot", gender: "n.", vi: "bánh mì đen lúa mạch nguyên cám" }
        ],
        grammarTitle: "Văn hóa ẩm thực đường phố và bánh mì Đức (Deutsche Brotkultur)",
        grammarContent: [
          { pattern: "Deutschland hat über 3.000 verschiedene Brotsorten. Die deutsche Brotkultur gehört zum UNESCO-Kulturerbe.", vi: "Nước Đức có hơn 3.000 loại bánh mì khác nhau. Văn hóa bánh mì Đức được UNESCO công nhận là di sản văn hóa phi vật thể." },
          { pattern: "Die Currywurst ist der beliebteste Imbiss-Klassiker in Berlin und ganz Deutschland.", vi: "Xúc xích nướng sốt cà ri là món ăn nhanh kinh điển được yêu thích hàng đầu tại Berlin." }
        ],
        phonetik: "Âm /ts/ trong 'Brezel' và âm /aʊ/ trong 'Sauerkraut'.",
        dialogue: [
          { speaker: "Lukas", text: "Wenn du nach Deutschland kommst, musst du unbedingt eine frische Brezel mit Butter und eine Currywurst probieren!" }
        ],
        quiz: {
          q: "Món ăn đường phố trứ danh của thủ đô Berlin gồm xúc xích cắt lát và sốt cà ri có tên là:",
          options: ["Currywurst", "Pizza", "Sushi", "Croissant"],
          ans: 0,
          explain: "'Currywurst' là món ăn biểu tượng của văn hóa ẩm thực bình dân Berlin."
        }
      },
      {
        num: "Projekt",
        nameDe: "Einkaufszettel",
        nameVi: "Dự án: Lập danh sách mua hàng siêu thị",
        page: "67",
        vocab: [
          { de: "der Einkaufszettel", gender: "m.", vi: "danh sách đi chợ / mua hàng" },
          { de: "der Supermarkt", gender: "m.", vi: "siêu thị" },
          { de: "die Packung", gender: "f.", vi: "gói, hộp" },
          { de: "die Flasche", gender: "f.", vi: "chai, lọ" },
          { de: "das Kilo", gender: "n.", vi: "ki-lô-gam" },
          { de: "der Liter", gender: "m.", vi: "lít" }
        ],
        grammarTitle: "Các từ chỉ số lượng và đo lường (Mengenangaben: eine Flasche Milch, ein Kilo Äpfel)",
        grammarContent: [
          { pattern: "Auf meinem Einkaufszettel stehen: 1 Kilo Äpfel, 2 Packungen Nudeln und 1 Flasche Saft.", vi: "Trên danh sách mua sắm của mình có: 1 kg táo, 2 gói mì và 1 chai nước ép." },
          { pattern: "Wie viel kostet das alles zusammen? – Das kostet ungefähr 15 Euro.", vi: "Tất cả chỗ đó giá bao nhiêu tiền? – Khoảng 15 Euro." }
        ],
        phonetik: "Ngữ điệu đọc danh sách liệt kê đồ dùng rõ ràng, ngắt nghỉ hợp lý.",
        dialogue: [
          { speaker: "Học sinh", text: "Wir schreiben heute den Einkaufszettel für unsere Kochparty in der Schule!" }
        ],
        quiz: {
          q: "Đơn vị đóng gói nào đi kèm với 'Milch' (sữa)?",
          options: ["eine Packung / eine Flasche Milch", "ein Kilo Milch", "ein Stück Milch", "eine Dose Salz"],
          ans: 0,
          explain: "Sữa dạng lỏng thường đựng trong chai 'Flasche' hoặc hộp giấy 'Packung'."
        }
      }
    ]
  },
  {
    id: "unit-7",
    number: "7",
    bookPart: "Tập 2",
    titleDe: "Meine Lieblingssendung",
    titleVi: "Chương trình truyền hình yêu thích của tôi",
    page: "68",
    desc: "Các thể loại chương trình TV, phim hoạt hình, động từ tách trennbare Verben, cấp so sánh hơn và hơn nhất, thói quen xem TV ở Đức.",
    lektions: [
      {
        num: "Lektion 1",
        nameDe: "Was ist deine Lieblingssendung?",
        nameVi: "Chương trình yêu thích của bạn là gì?",
        page: "68",
        vocab: [
          { de: "die Sendung", gender: "f.", vi: "chương trình truyền hình" },
          { de: "das Fernsehen", gender: "n.", vi: "vô tuyến truyền hình" },
          { de: "das Fernsehprogramm", gender: "n.", vi: "lịch phát sóng truyền hình" },
          { de: "die Nachrichten", gender: "pl.", vi: "bản tin thời sự" },
          { de: "die Dokumentation (die Doku)", gender: "f.", vi: "phim tài liệu" },
          { de: "die Musiksendung", gender: "f.", vi: "chương trình ca nhạc" },
          { de: "laufen im Fernsehen", gender: "v.", vi: "được chiếu / phát sóng trên TV" },
          { de: "interessant / spannend", gender: "adj.", vi: "thú vị / hồi hộp, kịch tính" }
        ],
        grammarTitle: "Hỏi và trả lời về sở thích truyền hình (Was läuft heute im Fernsehen?)",
        grammarContent: [
          { pattern: "Was ist deine Lieblingssendung? – Meine Lieblingssendung ist 'Logo!' auf KiKA.", vi: "Chương trình yêu thích của cậu là gì? – Chương trình yêu thích của tớ là bản tin thiếu nhi 'Logo!' trên kênh KiKA." },
          { pattern: "Wann läuft die Sendung? – Sie läuft jeden Abend um 19:50 Uhr.", vi: "Chương trình phát sóng lúc mấy giờ? – Phát sóng mỗi tối lúc 19h50." },
          { pattern: "Ich finde Dokumentationen sehr lehrreich und spannend.", vi: "Tớ thấy phim tài liệu rất bổ ích và lôi cuốn." }
        ],
        phonetik: "Âm /z/ hữu thanh trong 'Sendung' và âm /ŋ/ trong 'Lieblingssendung'.",
        dialogue: [
          { speaker: "Niko", text: "Mai, siehst du oft fern?" },
          { speaker: "Mai", text: "Nicht so oft, nur eine halbe Stunde am Tag. Meine Lieblingssendung sind Naturdokumentationen." },
          { speaker: "Niko", text: "Toll! Ich mag Sportsendungen, besonders Fußballübertragungen." }
        ],
        quiz: {
          q: "Chương trình thời sự tin tức trong tiếng Đức được gọi là gì?",
          options: ["die Nachrichten", "die Werbung", "der Zeichentrickfilm", "die Serie"],
          ans: 0,
          explain: "'die Nachrichten' là bản tin thời sự."
        }
      },
      {
        num: "Lektion 2",
        nameDe: "Ich sehe gern Zeichentrickfilme",
        nameVi: "Tôi thích xem phim hoạt hình",
        page: "70",
        vocab: [
          { de: "der Zeichentrickfilm", gender: "m.", vi: "phim hoạt hình" },
          { de: "fernsehen", gender: "v. (du siehst fern)", vi: "xem ti vi (động từ tách)" },
          { de: "ansehen", gender: "v. (du siehst an)", vi: "theo dõi, ngắm nhìn" },
          { de: "die Hauptfigur", gender: "f.", vi: "nhân vật chính" },
          { de: "lustig / witzig", gender: "adj.", vi: "hài hước, vui nhộn" },
          { de: "langweilig", gender: "adj.", vi: "nhàm chán" },
          { de: "die Episode / die Folge", gender: "f.", vi: "tập phim" }
        ],
        grammarTitle: "Động từ tách (trennbare Verben: fernsehen -> er sieht fern) & biến âm e -> ie",
        grammarContent: [
          { pattern: "Ich sehe jeden Tag eine halbe Stunde fern.", vi: "Mỗi ngày tớ xem tivi nửa tiếng. (tiền tố fern đứng ở cuối câu)" },
          { pattern: "Siehst du am Abend fern? (Biến âm: du siehst, er sieht)", vi: "Buổi tối cậu có xem tivi không?" },
          { pattern: "Wir sehen uns zusammen einen lustigen Zeichentrickfilm an.", vi: "Chúng tớ cùng nhau theo dõi một bộ phim hoạt hình vui nhộn." }
        ],
        phonetik: "Nguyên âm dài /iː/ trong 'sieht', 'Zeichentrickfilm', 'Brot'.",
        dialogue: [
          { speaker: "Ben", text: "Warum magst du Zeichentrickfilme so gern?" },
          { speaker: "Mai", text: "Weil sie bunt und super lustig sind! Ich lache immer sehr viel." }
        ],
        quiz: {
          q: "Chọn câu chia đúng động từ 'fernsehen' với chủ ngữ 'Er':",
          options: [
            "Er sieht jeden Abend fern.",
            "Er fernsieht jeden Abend.",
            "Er seht fern jeden Abend.",
            "Er ferngesehen am Abend."
          ],
          ans: 0,
          explain: "Động từ 'fernsehen' là động từ tách bất quy tắc: er sieht ... fern."
        }
      },
      {
        num: "Lektion 3",
        nameDe: "Gameshows für Kinder",
        nameVi: "Các trò chơi truyền hình cho thiếu nhi",
        page: "72",
        vocab: [
          { de: "die Gameshow", gender: "f.", vi: "chương trình trò chơi truyền hình" },
          { de: "das Quiz", gender: "n.", vi: "trò chơi đố vui kiến thức" },
          { de: "der Moderator / die Moderatorin", gender: "m./f.", vi: "người dẫn chương trình (MC)" },
          { de: "die Kandidaten", gender: "pl.", vi: "các thí sinh tham gia" },
          { de: "die Frage beantworten", gender: "v.", vi: "trả lời câu hỏi" },
          { de: "Punkte sammeln", gender: "v.", vi: "tích lũy điểm số" },
          { de: "der Sieger / die Siegerin", gender: "m./f.", vi: "người chiến thắng" },
          { de: "gewinnen / siegen", gender: "v.", vi: "chiến thắng" }
        ],
        grammarTitle: "Cấp so sánh hơn (Komparativ) và hơn nhất (Superlativ) bất quy tắc: gern - lieber - am liebsten; gut - besser - am besten",
        grammarContent: [
          { pattern: "Ich sehe gern Zeichentrickfilme, aber ich sehe lieber Gameshows.", vi: "Tớ thích xem hoạt hình, nhưng tớ thích xem gameshow hơn. (gern -> lieber)" },
          { pattern: "Am liebsten schaue ich Quizsendungen mit Wissen.", vi: "Thích nhất là tớ xem các chương trình đố vui tri thức. (am liebsten)" },
          { pattern: "Tom antwortet gut, aber Anna antwortet noch besser.", vi: "Tom trả lời tốt, nhưng Anna trả lời còn tốt hơn. (gut -> besser -> am besten)" }
        ],
        phonetik: "Âm /kv/ trong 'Quiz', 'Quelle'.",
        dialogue: [
          { speaker: "Klara", text: "Kennst du die Quizsendung '1, 2 oder 3'?" },
          { speaker: "Mai", text: "Ja! Das ist die bekannteste Kindershow in Deutschland. Die Kinder müssen sich auf das richtige Feld stellen!" }
        ],
        quiz: {
          q: "Cấp so sánh hơn nhất của phó từ 'gern' là gì?",
          options: ["am liebsten", "gerner", "am gernsten", "am besten"],
          ans: 0,
          explain: "'gern' có dạng so sánh bất quy tắc: gern -> lieber -> am liebsten."
        }
      },
      {
        num: "Landeskunde",
        nameDe: "Ein Fernsehabend zu Hause in Deutschland",
        nameVi: "Buổi tối xem truyền hình tại gia đình Đức",
        page: "74",
        vocab: [
          { de: "der KiKA (Kinderkanal)", gender: "m.", vi: "Kênh truyền hình thiếu nhi quốc gia Đức" },
          { de: "die 'Sendung mit der Maus'", gender: "f.", vi: "'Chương trình cùng Chú chuột' huyền thoại" },
          { de: "der Tatort", gender: "m.", vi: "phim truyền hình trinh thám chủ nhật" },
          { de: "die Medienzeit", gender: "f.", vi: "thời lượng sử dụng thiết bị điện tử" }
        ],
        grammarTitle: "Kênh KiKA và 'Die Sendung mit der Maus'",
        grammarContent: [
          { pattern: "'Die Sendung mit der Maus' läuft seit über 50 Jahren jeden Sonntagmorgen und erklärt Kindern die Welt.", vi: "'Die Sendung mit der Maus' phát sóng hơn 50 năm qua vào mỗi sáng chủ nhật, giải thích cho trẻ em các kiến thức khoa học đời sống." },
          { pattern: "KiKA ist ein werbefreier öffentlich-rechtlicher Sender für Kinder.", vi: "KiKA là kênh truyền hình công ích hoàn toàn không có quảng cáo thương mại dành riêng cho thiếu nhi." }
        ],
        phonetik: "Âm /aʊ/ trong 'Maus' và âm /ai/ trong 'frei'.",
        dialogue: [
          { speaker: "Lukas", text: "Meine Eltern und ich schauen am Sonntag zusammen 'Die Sendung mit der Maus'. Da lernt man immer tolle Sachgeschichten!" }
        ],
        quiz: {
          q: "Chương trình truyền hình thiếu nhi mang tính giáo dục khoa học huyền thoại phát sóng hơn 50 năm qua ở Đức là:",
          options: [
            "Die Sendung mit der Maus",
            "Tom & Jerry",
            "Micky Maus Show",
            "Superman"
          ],
          ans: 0,
          explain: "'Die Sendung mit der Maus' là biểu tượng văn hóa truyền hình giáo dục thiếu nhi tại Đức."
        }
      },
      {
        num: "Projekt",
        nameDe: "Meine Lieblingssendung im Fernsehen",
        nameVi: "Dự án: Giới thiệu chương trình truyền hình yêu thích của em",
        page: "75",
        vocab: [
          { de: "das Plakat", gender: "n.", vi: "áp phích thuyết trình" },
          { de: "die Sendezeit", gender: "f.", vi: "khung giờ phát sóng" },
          { de: "der Inhalt", gender: "m.", vi: "nội dung chính" },
          { de: "die Empfehlung", gender: "f.", vi: "lời gợi ý, đề xuất" }
        ],
        grammarTitle: "Thuyết trình giới thiệu chương trình: 'Ich empfehle euch..., weil...'",
        grammarContent: [
          { pattern: "Heute stelle ich euch meine Lieblingssendung vor.", vi: "Hôm nay mình xin giới thiệu với các bạn chương trình yêu thích của mình." },
          { pattern: "Ich empfehle euch diese Sendung, weil sie spannend und sehr lehrreich ist.", vi: "Mình khuyên các bạn nên xem chương trình này vì nó rất kịch tính và bổ ích." }
        ],
        phonetik: "Cách ngắt nhịp khi giới thiệu nội dung theo từng đề mục.",
        dialogue: [
          { speaker: "Học sinh", text: "Das ist mein Poster über die Sendung 'Logo!'. Sie bringt jeden Tag wichtige Nachrichten für Kinder verständlich erklärt." }
        ],
        quiz: {
          q: "Từ nào mang nghĩa là 'khuyên bảo, đề xuất xem'?",
          options: ["empfehlen", "verbieten", "vergessen", "ausschalten"],
          ans: 0,
          explain: "'empfehlen' nghĩa là giới thiệu, khuyên nên thử/xem."
        }
      }
    ]
  },
  {
    id: "unit-8",
    number: "8",
    bookPart: "Tập 2",
    titleDe: "Mein Arztbesuch",
    titleVi: "Chuyến đi khám bác sĩ của tôi",
    page: "76",
    desc: "Các bộ phận cơ thể và triệu chứng đau ốm, tủ thuốc gia đình, động từ khuyết thiếu sollen cho lời khuyên y tế, cách người Đức giữ gìn sức khỏe.",
    lektions: [
      {
        num: "Lektion 1",
        nameDe: "Ich habe Halsschmerzen",
        nameVi: "Tôi bị đau họng",
        page: "76",
        vocab: [
          { de: "der Arzt / die Ärztin", gender: "m./f.", vi: "bác sĩ" },
          { de: "der Kopf / die Kopfschmerzen", gender: "m./pl.", vi: "đầu / cơn đau đầu" },
          { de: "der Hals / die Halsschmerzen", gender: "m./pl.", vi: "họng, cổ / cơn đau họng" },
          { de: "der Bauch / die Bauchschmerzen", gender: "m./pl.", vi: "bụng / đau bụng" },
          { de: "das Fieber", gender: "n.", vi: "cơn sốt" },
          { de: "der Husten", gender: "m.", vi: "cơn ho" },
          { de: "der Schnupfen", gender: "m.", vi: "sổ mũi, nghẹt mũi" },
          { de: "wehtun", gender: "v. (tut weh)", vi: "gây đau đớn" }
        ],
        grammarTitle: "Biểu đạt đau ốm: 'Ich habe ...schmerzen' hoặc 'Mein ... tut weh'",
        grammarContent: [
          { pattern: "Ich habe Halsschmerzen und hohes Fieber.", vi: "Cháu bị đau họng và sốt cao." },
          { pattern: "Mein Kopf tut sehr weh. (Động từ tách wehtun: tut weh / tun weh)", vi: "Đầu của tớ đau nhức dữ dội." },
          { pattern: "Meine Augen tun weh, weil ich zu lange am Computer gelernt habe.", vi: "Mắt tớ bị đau vì học trước máy tính quá lâu." }
        ],
        phonetik: "Âm /ts/ trong 'Arzt' và âm /ç/ trong 'Bauch' vs 'Bäuche'.",
        dialogue: [
          { speaker: "Arzt", text: "Guten Tag, Mai! Was fehlt dir denn?" },
          { speaker: "Mai", text: "Guten Tag, Herr Doktor! Ich habe Halsschmerzen und kann kaum schlucken." },
          { speaker: "Arzt", text: "Mach bitte den Mund weit auf und sag 'Aaah'!" }
        ],
        quiz: {
          q: "Để nói 'Bụng của tớ bị đau', ta dùng câu nào chuẩn xác?",
          options: [
            "Mein Bauch tut weh.",
            "Mein Bauch macht krank.",
            "Mein Bauch hat keine Schmerzen.",
            "Mein Bauch ist gesund."
          ],
          ans: 0,
          explain: "Thành ngữ 'etwas tut weh' dùng để diễn đạt bộ phận nào đó bị đau: 'Mein Bauch tut weh'."
        }
      },
      {
        num: "Lektion 2",
        nameDe: "Das ist meine Hausapotheke",
        nameVi: "Đây là tủ thuốc gia đình tôi",
        page: "78",
        vocab: [
          { de: "die Hausapotheke", gender: "f.", vi: "tủ thuốc gia đình" },
          { de: "das Medikament", gender: "n.", vi: "thuốc men" },
          { de: "die Tablette", gender: "f.", vi: "viên thuốc nén" },
          { de: "der Hustensaft", gender: "m.", vi: "si-rô ho" },
          { de: "das Pflaster", gender: "n.", vi: "băng dán cá nhân" },
          { de: "das Fieberthermometer", gender: "n.", vi: "nhiệt kế đo độ sốt" },
          { de: "der Kräutertee", gender: "m.", vi: "trà thảo mộc" },
          { de: "einnehmen", gender: "v.", vi: "uống thuốc (động từ tách)" }
        ],
        grammarTitle: "Động từ khuyết thiếu 'sollen' đưa ra lời khuyên y tế, chỉ dẫn điều trị",
        grammarContent: [
          { pattern: "Du sollst im Bett bleiben und viel schlafen.", vi: "Cháu nên nằm nghỉ trên giường và ngủ thật nhiều. (sollen + Infinitiv cuối câu)" },
          { pattern: "Du sollst dreimal am Tag eine Tablette nach dem Essen einnehmen.", vi: "Cháu nên uống mỗi ngày 3 lần, mỗi lần 1 viên sau bữa ăn." },
          { pattern: "Du sollst warmen Kamillentee trinken.", vi: "Cháu nên uống trà hoa cúc ấm." }
        ],
        phonetik: "Nguyên âm ngắn /ɔ/ trong 'soll', 'sollst' và phụ âm đôi /fl/ trong 'Pflaster'.",
        dialogue: [
          { speaker: "Mẹ", text: "Mai, der Arzt sagt, du sollst heute viel Kamillentee trinken und im Bett bleiben." },
          { speaker: "Mai", text: "Ja Mama, ich nehme noch den Hustensaft und ruhe mich aus." }
        ],
        quiz: {
          q: "Động từ khuyết thiếu nào được dùng để truyền đạt lời dặn dò, lời khuyên của bác sĩ?",
          options: ["sollen (du sollst)", "wollen (du willst)", "dürfen (du darfst)", "können (du kannst)"],
          ans: 0,
          explain: "'sollen' chuyên dùng để truyền đạt lời dặn của bác sĩ: 'Der Arzt sagt, du sollst Tee trinken'."
        }
      },
      {
        num: "Lektion 3",
        nameDe: "Was fehlt dir denn?",
        nameVi: "Bạn bị làm sao thế?",
        page: "80",
        vocab: [
          { de: "fehlen (+ Dat)", gender: "v.", vi: "thiếu, có vấn đề gì (sức khỏe)" },
          { de: "die Praxis", gender: "f.", vi: "phòng khám tư của bác sĩ" },
          { de: "die Untersuchung", gender: "f.", vi: "việc thăm khám" },
          { de: "untersuchen", gender: "v.", vi: "khám bệnh" },
          { de: "das Rezept verschreiben", gender: "v.", vi: "kê đơn thuốc" },
          { de: "die Besserung", gender: "f.", vi: "sự hồi phục" },
          { de: "Gute Besserung!", gender: "phrase", vi: "Chúc mau bình phục / Chúc mau khỏe!" }
        ],
        grammarTitle: "Hội thoại tại phòng khám và lời chúc sức khỏe: 'Gute Besserung!'",
        grammarContent: [
          { pattern: "Was fehlt Ihnen / dir denn? – Mir ist schwindelig und ich fühle mich schwach.", vi: "Bạn/Bác cảm thấy trong người thế nào? – Cháu thấy chóng mặt và người yếu ớt." },
          { pattern: "Der Arzt verschreibt mir ein Rezept für die Apotheke.", vi: "Bác sĩ kê cho tớ một đơn thuốc để mang ra hiệu thuốc." },
          { pattern: "Ich wünsche dir gute Besserung! – Vielen Dank!", vi: "Tớ chúc cậu sớm bình phục! – Cảm ơn cậu nhiều nhé!" }
        ],
        phonetik: "Âm /b/ trong 'Besserung' và ngữ điệu an ủi, cảm thông.",
        dialogue: [
          { speaker: "Lukas", text: "Hallo Mai, ich habe gehört, du bist krank. Was fehlt dir denn?" },
          { speaker: "Mai", text: "Ich habe eine Erkältung mit Husten. Aber es geht mir schon etwas besser." },
          { speaker: "Lukas", text: "Gute Besserung, Mai! Werde schnell wieder gesund!" }
        ],
        quiz: {
          q: "Khi một người bạn bị ốm, câu chúc thích hợp nhất trong tiếng Đức là:",
          options: ["Gute Besserung!", "Guten Rutsch!", "Herzlichen Glückwunsch!", "Mahlzeit!"],
          ans: 0,
          explain: "'Gute Besserung!' nghĩa là 'Chúc bạn mau chóng bình phục/khỏe lại!'."
        }
      },
      {
        num: "Landeskunde",
        nameDe: "Wie bleiben die Deutschen gesund?",
        nameVi: "Người Đức giữ gìn sức khỏe như thế nào?",
        page: "82",
        vocab: [
          { de: "die frische Luft", gender: "f.", vi: "không khí trong lành" },
          { de: "lüften", gender: "v.", vi: "mở cửa thông gió làm thoáng phòng" },
          { de: "der Kräutertee", gender: "m.", vi: "trà thảo dược (hoa cúc, bạc hà, thì là)" },
          { de: "die Bewegung", gender: "f.", vi: "vận động thể chất" }
        ],
        grammarTitle: "Văn hóa 'Stoßlüften' và chữa bệnh bằng thảo dược tự nhiên của người Đức",
        grammarContent: [
          { pattern: "Die Deutschen lieben das 'Stoßlüften': Mehrmals am Tag öffnen sie alle Fenster weit für 5 bis 10 Minuten.", vi: "Người Đức có thói quen 'Stoßlüften': Mở toang tất cả cửa sổ vài lần mỗi ngày trong 5-10 phút để không khí tươi mới tràn vào." },
          { pattern: "Bei Erkältung trinken die Deutschen sofort Kamillentee oder Pfefferminztee statt sofort starke Medikamente zu nehmen.", vi: "Khi bị cảm, người Đức ưu tiên uống trà hoa cúc hoặc bạc hà tự nhiên trước khi dùng thuốc nặng." }
        ],
        phonetik: "Âm /yː/ trong 'lüften' và âm /t/ đanh ở cuối từ.",
        dialogue: [
          { speaker: "Klara", text: "Auch im Winter machen wir in der Schule das Fenster auf: Stoßlüften bringt Sauerstoff und hält gesund!" }
        ],
        quiz: {
          q: "Thói quen mở toang tất cả các cửa sổ trong vài phút để thay mới không khí phòng tại Đức gọi là gì?",
          options: ["Stoßlüften", "Winterpause", "Kaffeeklatsch", "Hausputz"],
          ans: 0,
          explain: "'Stoßlüften' (mở cửa thông gió nhanh) là nét văn hóa sinh hoạt đặc trưng nổi tiếng của người Đức để ngừa ốm."
        }
      },
      {
        num: "Projekt",
        nameDe: "Tipps für die Gesundheit",
        nameVi: "Dự án: Các lời khuyên vàng giữ gìn sức khỏe",
        page: "83",
        vocab: [
          { de: "der Gesundheitstipp", gender: "m.", vi: "mẹo giữ gìn sức khỏe" },
          { de: "genug Wasser trinken", gender: "phrase", vi: "uống đủ nước lọc" },
          { de: "frisches Obst essen", gender: "phrase", vi: "ăn hoa quả tươi" },
          { de: "Sport treiben", gender: "v.", vi: "tập luyện thể thao" }
        ],
        grammarTitle: "Tổng hợp các mẫu câu khuyên nhủ: 'Du sollst...', 'Trink...', 'Iss...'",
        grammarContent: [
          { pattern: "Tipp 1: Trink jeden Tag mindestens 1,5 Liter Wasser!", vi: "Mẹo 1: Hãy uống ít nhất 1,5 lít nước mỗi ngày!" },
          { pattern: "Tipp 2: Iss viel Gemüse und Obst!", vi: "Mẹo 2: Hãy ăn nhiều rau xanh và hoa quả!" },
          { pattern: "Tipp 3: Du sollst jeden Tag mindestens 8 Stunden schlafen.", vi: "Mẹo 3: Bạn nên ngủ đủ ít nhất 8 tiếng mỗi đêm." }
        ],
        phonetik: "Cách nhấn giọng vào các động từ mệnh lệnh để tăng tính thuyết phục.",
        dialogue: [
          { speaker: "Học sinh", text: "Hier ist unser Plakat mit 5 goldenen Tipps für einen gesunden Schulalltag!" }
        ],
        quiz: {
          q: "Câu mệnh lệnh nào khuyên 'Hãy ăn nhiều rau quả!' đối với ngôi 'du'?",
          options: ["Iss viel Gemüse!", "Esse du viel Gemüse!", "Isst Gemüse ihr!", "Gegessen viel Gemüse!"],
          ans: 0,
          explain: "Động từ 'essen' biến đổi bất quy tắc ở thể mệnh lệnh ngôi 'du' thành 'Iss!'."
        }
      }
    ]
  },
  {
    id: "plattform-3",
    isStation: true,
    number: "P3",
    bookPart: "Tập 2",
    titleDe: "Plattform 3",
    titleVi: "Trạm ôn tập & Củng cố kiến thức (Einheit 6 – 8)",
    page: "84",
    desc: "Tổng kết toàn diện từ vựng gọi món tại nhà hàng, chương trình truyền hình, triệu chứng sức khỏe, câu mệnh lệnh Imperativ, động từ tách và động từ khuyết thiếu sollen.",
    lektions: [
      {
        num: "Plattform 3",
        nameDe: "Wiederholung & Systematisierung (E6 - E8)",
        nameVi: "Ôn tập và hệ thống hóa kiến thức 3",
        page: "84",
        vocab: [
          { de: "der Imperativ", gender: "m.", vi: "thể mệnh lệnh" },
          { de: "die Modalverben", gender: "pl.", vi: "các động từ tình thái" },
          { de: "trennbare Verben", gender: "pl.", vi: "các động từ tách tiền tố" },
          { de: "der Komparativ", gender: "m.", vi: "cấp so sánh hơn" }
        ],
        grammarTitle: "Bảng tổng hợp ngữ pháp Trạm 3: Imperativ & Trennbare Verben & Sollen",
        grammarContent: [
          { pattern: "Imperativ: (du) Wasch! / Schneide! | (ihr) Wascht! / Schneidet!", vi: "Mệnh lệnh thể hiện chỉ dẫn hoặc mệnh lệnh trực tiếp." },
          { pattern: "Trennbare Verben: fernsehen -> er sieht fern; ansehen -> er sieht an.", vi: "Tiền tố tách bị đẩy xuống vị trí cuối cùng trong câu đơn." },
          { pattern: "Sollen: Du sollst die Medizin einnehmen.", vi: "Động từ khuyết thiếu sollen bổ nghĩa cho động từ nguyên thể cuối câu." }
        ],
        phonetik: "Luyện ngữ điệu câu hỏi, câu trần thuật và câu mệnh lệnh.",
        dialogue: [
          { speaker: "Lehrer", text: "Klasse, auf Plattform 3 überprüfen wir eure Kenntnisse zu Restaurant, Fernsehen und Gesundheit!" }
        ],
        quiz: {
          q: "Chuyển câu sau sang thể mệnh lệnh ngôi 'du': 'Du schneidest das Brot.'",
          options: [
            "Schneide das Brot!",
            "Schneidest du das Brot!",
            "Schneiden das Brot!",
            "Schneidet das Brot!"
          ],
          ans: 0,
          explain: "Thể mệnh lệnh ngôi 'du' của 'schneiden' là 'Schneide!' (thêm -e do tận cùng gốc động từ là -d-)."
        }
      }
    ]
  },
  {
    id: "unit-9",
    number: "9",
    bookPart: "Tập 2",
    titleDe: "Meine Lieblingsjahreszeit",
    titleVi: "Mùa yêu thích của tôi",
    page: "86",
    desc: "Bốn mùa trong năm, thời tiết, kỳ nghỉ lễ, viết bưu thiếp từ chuyến du lịch, thời quá khứ Perfekt, câu điều kiện wenn và hiện tượng thời tiết tháng Tư tại Đức.",
    lektions: [
      {
        num: "Lektion 1",
        nameDe: "Welche Jahreszeit magst du?",
        nameVi: "Bạn thích mùa nào nhất trong năm?",
        page: "86",
        vocab: [
          { de: "die Jahreszeit", gender: "f. (Pl. Jahreszeiten)", vi: "mùa trong năm" },
          { de: "der Frühling", gender: "m.", vi: "mùa xuân" },
          { de: "der Sommer", gender: "m.", vi: "mùa hè" },
          { de: "der Herbst", gender: "m.", vi: "mùa thu" },
          { de: "der Winter", gender: "m.", vi: "mùa đông" },
          { de: "die Sonne scheint", gender: "phrase", vi: "mặt trời chiếu sáng rực rỡ" },
          { de: "es regnet / es schneit", gender: "phrase", vi: "trời mưa / trời rơi tuyết" },
          { de: "warm / kalt / sonnig / windig", gender: "adj.", vi: "ấm áp / lạnh giá / nắng ráo / có gió" }
        ],
        grammarTitle: "Giới từ chỉ mùa và tháng 'im' (im Frühling, im Sommer, im Juli) & hiện tượng thời tiết vô nhân xưng 'es'",
        grammarContent: [
          { pattern: "Welche Jahreszeit magst du am liebsten? – Ich mag den Sommer, weil es warm ist.", vi: "Cậu thích mùa nào nhất? – Tớ thích mùa hè nhất vì thời tiết ấm áp." },
          { pattern: "Im Winter schneit es oft in Deutschland và es ist sehr kalt.", vi: "Vào mùa đông ở Đức tuyết thường rơi và trời rất rét. (im Winter)" },
          { pattern: "Im Frühling blühen die Blumen überall.", vi: "Vào mùa xuân hoa nở rộ khắp muôn nơi." }
        ],
        phonetik: "Âm /ʃ/ trong 'Frühling', 'Schnee', 'scheinen'.",
        dialogue: [
          { speaker: "Paul", text: "Mai, welche Jahreszeit magst du am liebsten?" },
          { speaker: "Mai", text: "Ich liebe den Herbst! In Hanoi ist der Herbst wunderschön, die Sonne scheint mild und es ist nicht zu heiß." },
          { speaker: "Paul", text: "Ich mag den Winter, weil ich dann Ski fahren und einen Schneemann bauen kann!" }
        ],
        quiz: {
          q: "Để diễn đạt 'Vào mùa thu', ta dùng cụm giới từ nào?",
          options: ["im Herbst", "am Herbst", "um Herbst", "in Herbst"],
          ans: 0,
          explain: "Các mùa và tháng trong tiếng Đức luôn đi với giới từ 'im' (in + dem)."
        }
      },
      {
        num: "Lektion 2",
        nameDe: "Grüße aus dem Urlaub",
        nameVi: "Lời chào từ kỳ nghỉ dưỡng",
        page: "88",
        vocab: [
          { de: "der Urlaub", gender: "m.", vi: "kỳ nghỉ, chuyến du lịch" },
          { de: "die Ferien", gender: "pl.", vi: "kỳ nghỉ hè, nghỉ lễ của học sinh" },
          { de: "die Postkarte", gender: "f.", vi: "bưu thiếp" },
          { de: "das Meer / der Strand", gender: "n./m.", vi: "biển / bãi biển" },
          { de: "die Berge", gender: "pl.", vi: "núi non" },
          { de: "die Sehenswürdigkeit", gender: "f.", vi: "danh lam thắng cảnh" },
          { de: "besichtigen", gender: "v.", vi: "tham quan" },
          { de: "faulenzen", gender: "v.", vi: "thư giãn lười biếng, nghỉ xả hơi" }
        ],
        grammarTitle: "Thời quá khứ hoàn thành (Perfekt mit haben / sein: haben + Partizip II / sein + Partizip II)",
        grammarContent: [
          { pattern: "Wir haben am Strand gelegen und gebadet. (Perfekt với haben)", vi: "Chúng tớ đã nằm trên bãi biển và tắm biển." },
          { pattern: "Ich bin nach Da Nang gefahren. (Perfekt với sein cho động từ chuyển động)", vi: "Tớ đã đi du lịch tới Đà Nẵng." },
          { pattern: "Wir haben viele Sehenswürdigkeiten besichtigt.", vi: "Chúng tớ đã tham quan nhiều danh thắng." }
        ],
        phonetik: "Tiền tố không nhấn trọng âm be- trong 'besichtigen', 'bekommen'.",
        dialogue: [
          { speaker: "Bưu thiếp", text: "Lieber Paul, viele Grüße aus Nha Trang! Das Wetter ist herrlich. Gestern sind wir im Meer geschwommen. Bis bald! Deine Mai." }
        ],
        quiz: {
          q: "Trợ động từ quá khứ Perfekt cho câu 'Gestern _____ wir nach Berlin gefahren' là:",
          options: ["sind", "haben", "werden", "waren"],
          ans: 0,
          explain: "Động từ chuyển động 'fahren' tạo thời quá khứ Perfekt với trợ động từ 'sein' (wir sind gefahren)."
        }
      },
      {
        num: "Lektion 3",
        nameDe: "Ausflugswetter",
        nameVi: "Thời tiết cho chuyến dã ngoại",
        page: "90",
        vocab: [
          { de: "der Ausflug", gender: "m.", vi: "chuyến đi dã ngoại" },
          { de: "die Wettervorhersage", gender: "f.", vi: "dự báo thời tiết" },
          { de: "die Temperatur", gender: "f.", vi: "nhiệt độ" },
          { de: "der Grad (Celsius)", gender: "m.", vi: "độ C" },
          { de: "bewölkt / regnerisch", gender: "adj.", vi: "nhiều mây / có mưa rào" },
          { de: "der Regenschirm", gender: "m.", vi: "chiếc ô che mưa" },
          { de: "vorbereiten", gender: "v.", vi: "chuẩn bị" },
          { de: "wenn", gender: "conj.", vi: "nếu / khi (liên từ phụ thuộc)" }
        ],
        grammarTitle: "Mệnh đề phụ điều kiện với 'wenn' (Nebensatz mit wenn - Verb cuối câu)",
        grammarContent: [
          { pattern: "Wenn das Wetter schön ist, machen wir ein Picknick im Park.", vi: "Nếu thời tiết đẹp, chúng mình sẽ đi dã ngoại trong công viên." },
          { pattern: "Wenn es regnet, bleiben wir zu Hause und spielen Brettspiele.", vi: "Nếu trời mưa, chúng mình sẽ ở nhà và chơi cờ bàn." },
          { pattern: "Die Temperatur liegt heute bei angenehmen 25 Grad.", vi: "Nhiệt độ hôm nay ở mức dễ chịu 25 độ C." }
        ],
        phonetik: "Âm /v/ trong 'Wettervorhersage', 'wenn', 'Wolke'.",
        dialogue: [
          { speaker: "Leon", text: "Was sagt die Wettervorhersage für morgen?" },
          { speaker: "Mai", text: "Es soll sonnig und warm werden, etwa 28 Grad!" },
          { speaker: "Leon", text: "Super! Wenn die Sonne scheint, können wir mit dem Fahrrad zum See fahren." }
        ],
        quiz: {
          q: "Trong mệnh đề điều kiện với 'wenn', động từ chia nằm ở vị trí nào?",
          options: [
            "Ở cuối mệnh đề phụ",
            "Ở ngay sau liên từ wenn",
            "Ở vị trí thứ 2",
            "Ở đầu câu chính"
          ],
          ans: 0,
          explain: "'wenn' là liên từ phụ thuộc, luôn đẩy động từ chia xuống vị trí cuối cùng của mệnh đề phụ."
        }
      },
      {
        num: "Landeskunde",
        nameDe: "Aprilwetter in Deutschland",
        nameVi: "Hiện tượng thời tiết tháng Tư tại Đức",
        page: "92",
        vocab: [
          { de: "das Aprilwetter", gender: "n.", vi: "thời tiết tháng Tư thất thường" },
          { de: "der Hagel", gender: "m.", vi: "mưa đá" },
          { de: "der Sonnenschein", gender: "m.", vi: "ánh nắng rực rỡ" },
          { de: "wechselhaft", gender: "adj.", vi: "thay đổi liên tục, thất thường" },
          { de: "die Bauernregel", gender: "f.", vi: "câu châm ngôn dân gian về thời tiết" }
        ],
        grammarTitle: "Câu thành ngữ kinh điển: 'April, April, der macht, was er will!'",
        grammarContent: [
          { pattern: "'April, April, der macht, was er will!' – In Deutschland kann es im April innerhalb einer Stunde schneien, regnen und die Sonne scheinen.", vi: "'Tháng Tư, tháng Tư, nó muốn làm gì thì làm!' – Ở Đức trong tháng 4, chỉ trong vòng 1 tiếng đồng hồ có thể vừa có tuyết, vừa mưa rào rồi lại nắng chang chang." },
          { pattern: "Die Menschen nehmen im April immer eine Jacke und einen Regenschirm mit.", vi: "Vào tháng Tư người dân Đức luôn mang theo áo khoác và ô bên mình." }
        ],
        phonetik: "Ngữ điệu vui nhộn khi đọc câu châm ngôn vần: will / April.",
        dialogue: [
          { speaker: "Opa", text: "Schau mal hinaus: Vor zehn Minuten schien noch die Sonne, und jetzt hagelt es! Typisches Aprilwetter!" }
        ],
        quiz: {
          q: "Câu châm ngôn dân gian nổi tiếng nào của Đức nói về thời tiết thất thường của tháng Tư?",
          options: [
            "April, April, der macht, was er will!",
            "Der Mai ist gekommen.",
            "Winter ade, scheiden tut weh.",
            "Im Sommer scheint die Sonne immer."
          ],
          ans: 0,
          explain: "'April, April, der macht, was er will!' là câu tục ngữ cửa miệng của mọi người Đức khi nói về thời tiết tháng Tư."
        }
      },
      {
        num: "Projekt",
        nameDe: "Unser Ausflugsplan",
        nameVi: "Dự án: Kế hoạch chuyến dã ngoại cuối tuần",
        page: "93",
        vocab: [
          { de: "der Ausflugsplan", gender: "m.", vi: "kế hoạch dã ngoại" },
          { de: "das Reiseziel", gender: "n.", vi: "điểm đến du lịch" },
          { de: "die Abfahrtszeit", gender: "f.", vi: "thời gian khởi hành" },
          { de: "die Packliste", gender: "f.", vi: "danh sách đồ cần mang theo" }
        ],
        grammarTitle: "Lập kế hoạch hoàn chỉnh với thời gian, phương tiện và đồ dùng",
        grammarContent: [
          { pattern: "Wir fahren am Samstag um 8 Uhr mit dem Bus nach Ba Vi.", vi: "Chúng mình sẽ đi xe buýt đến Ba Vì vào lúc 8h sáng thứ Bảy." },
          { pattern: "Jeder Schüler nimmt einen Rucksack, Wasser và feste Schuhe mit.", vi: "Mỗi bạn học sinh mang theo một ba lô, nước uống và giày thể thao chắc chắn." }
        ],
        phonetik: "Luyện phát âm rõ ràng tên các địa danh và con số thời gian.",
        dialogue: [
          { speaker: "Nhóm trưởng", text: "Hier ist unser Ausflugsplan für den nächsten Sonntag. Hoffentlich spielt das Wetter mit!" }
        ],
        quiz: {
          q: "Cụm từ nào biểu đạt 'đi bằng xe buýt'?",
          options: ["mit dem Bus", "in den Bus", "bei dem Bus", "an den Bus"],
          ans: 0,
          explain: "Phương tiện giao thông luôn đi với giới từ 'mit + Dativ': 'mit dem Bus'."
        }
      }
    ]
  },
  {
    id: "unit-10",
    number: "10",
    bookPart: "Tập 2",
    titleDe: "Mein Museumsbesuch",
    titleVi: "Chuyến tham quan bảo tàng của tôi",
    page: "94",
    desc: "Mua vé tại quầy, quy định tại bảo tàng, động từ khuyết thiếu dürfen (được phép/cấm đoán), kể lại trải nghiệm chuyến tham quan và Bảo tàng Sô-cô-la tại Köln.",
    lektions: [
      {
        num: "Lektion 1",
        nameDe: "An der Ticketkasse",
        nameVi: "Tại quầy bán vé tham quan",
        page: "94",
        vocab: [
          { de: "das Museum", gender: "n.", vi: "bảo tàng" },
          { de: "die Ticketkasse", gender: "f.", vi: "quầy bán vé" },
          { de: "die Eintrittskarte", gender: "f.", vi: "vé vào cửa" },
          { de: "die Ermäßigung", gender: "f.", vi: "giảm giá vé (cho học sinh/sinh viên)" },
          { de: "der Audioguide", gender: "m.", vi: "thiết bị thuyết minh tự động cầm tay" },
          { de: "die Öffnungszeiten", gender: "pl.", vi: "giờ mở cửa" },
          { de: "geöffnet / geschlossen", gender: "adj.", vi: "mở cửa / đóng cửa" },
          { de: "kosten", gender: "v.", vi: "có giá tiền là" }
        ],
        grammarTitle: "Hỏi giá và mua vé giảm giá cho học sinh (Wie viel kostet... / Gibt es eine Ermäßigung?)",
        grammarContent: [
          { pattern: "Guten Tag! Ich möchte zwei Eintrittskarten für Schüler, bitte.", vi: "Xin chào! Cho cháu mua 2 vé vào cửa dành cho học sinh." },
          { pattern: "Wie viel kostet eine Schülerkarte? – Drei Euro, bitte.", vi: "Một vé học sinh giá bao nhiêu ạ? – 3 Euro cháu nhé." },
          { pattern: "Gibt es einen Audioguide auf Englisch oder Deutsch? – Ja, natürlich!", vi: "Có máy thuyết minh tiếng Anh hoặc tiếng Đức không ạ? – Có, đương nhiên rồi!" }
        ],
        phonetik: "Âm /s/ không rung trong 'Kasse', 'kosten' và âm /ts/ trong 'Ticketkasse'.",
        dialogue: [
          { speaker: "Kassierer", text: "Guten Tag! Wie kann ich euch helfen?" },
          { speaker: "Mai", text: "Guten Tag! Wir sind Schüler. Gibt es eine Ermäßigung?" },
          { speaker: "Kassierer", text: "Ja, mit Schülerausweis kostet die Karte nur 2,50 Euro." },
          { speaker: "Mai", text: "Super! Dann nehmen wir drei Karten, bitte." }
        ],
        quiz: {
          q: "Để hỏi về chế độ giảm giá vé dành cho học sinh, ta dùng câu nào?",
          options: [
            "Gibt es eine Ermäßigung für Schüler?",
            "Wo ist das Ticket teuer?",
            "Kaufen Sie keine Karten!",
            "Das Museum hat keine Tickets."
          ],
          ans: 0,
          explain: "'die Ermäßigung' là từ chuyên dùng để hỏi về chế độ giảm giá vé cho đối tượng ưu tiên."
        }
      },
      {
        num: "Lektion 2",
        nameDe: "Im Museum",
        nameVi: "Bên trong bảo tàng",
        page: "96",
        vocab: [
          { de: "die Ausstellung", gender: "f.", vi: "triển lãm" },
          { de: "das Kunstwerk", gender: "n.", vi: "tác phẩm nghệ thuật" },
          { de: "das Gemälde", gender: "n.", vi: "bức tranh sơn dầu" },
          { de: "die Skulptur", gender: "f.", vi: "bức tượng điêu khắc" },
          { de: "fotografieren verboten", gender: "phrase", vi: "cấm chụp ảnh" },
          { de: "leise sein", gender: "v.", vi: "giữ yên lặng, trật tự" },
          { de: "berühren", gender: "v.", vi: "chạm vào, sờ tay vào" },
          { de: "dürfen", gender: "modal (du darfst)", vi: "được phép (thể phủ định: cấm)" }
        ],
        grammarTitle: "Động từ khuyết thiếu 'dürfen' và cấu trúc cấm đoán 'Man darf hier nicht...'",
        grammarContent: [
          { pattern: "Hier darf man nicht fotografieren. (Quy định cấm đoán: không được phép chụp ảnh)", vi: "Ở đây không được phép chụp ảnh." },
          { pattern: "Man darf die Ausstellungsstücke nicht berühren.", vi: "Không được chạm tay vào các hiện vật triển lãm." },
          { pattern: "Im Museum muss man leise sprechen und das Handy ausschalten.", vi: "Trong bảo tàng mọi người phải nói khẽ và tắt chuông điện thoại." }
        ],
        phonetik: "Âm /ʏ/ ngắn trong 'dürfen', 'darf' và phụ âm đôi /st/ trong 'Ausstellungsstücke'.",
        dialogue: [
          { speaker: "Aufseher", text: "Entschuldigung junger Mann! Hier darf man nicht mit Blitz fotografieren!" },
          { speaker: "Ben", text: "Oh, das tut mir leid! Ich schalte den Blitz sofort aus." },
          { speaker: "Aufseher", text: "Danke für dein Verständnis." }
        ],
        quiz: {
          q: "Để diễn đạt biển báo 'Cấm sờ vào hiện vật' trong bảo tàng, câu chuẩn là:",
          options: [
            "Man darf die Kunstwerke nicht berühren.",
            "Man muss die Kunstwerke berühren.",
            "Man kann alles mitnehmen.",
            "Man darf laut rufen."
          ],
          ans: 0,
          explain: "'nicht dürfen' mang ý nghĩa cấm đoán nghiêm ngặt theo quy định."
        }
      },
      {
        num: "Lektion 3",
        nameDe: "Mein Museumsbesuch war toll!",
        nameVi: "Chuyến tham quan bảo tàng thật tuyệt vời!",
        page: "98",
        vocab: [
          { de: "das Erlebnis", gender: "n.", vi: "trải nghiệm" },
          { de: "der Museumsbesuch", gender: "m.", vi: "chuyến tham quan bảo tàng" },
          { de: "beeindruckend", gender: "adj.", vi: "gây ấn tượng sâu sắc" },
          { de: "interessant / spannend", gender: "adj.", vi: "thú vị / ly kỳ" },
          { de: "wunderbar / herrlich", gender: "adj.", vi: "tuyệt diệu / tuyệt vời" },
          { de: "Souvenirs kaufen", gender: "v.", vi: "mua quà lưu niệm" },
          { de: "erzählen von (+ Dat)", gender: "v.", vi: "kể về điều gì" }
        ],
        grammarTitle: "Kể lại chuyến đi ở quá khứ (Präteritum của sein/haben: war / hatte) kết hợp Perfekt",
        grammarContent: [
          { pattern: "Mein Museumsbesuch war wirklich toll!", vi: "Chuyến tham quan bảo tàng của tớ thực sự rất tuyệt vời!" },
          { pattern: "Wir hatten viel Spaß und haben viel über die Geschichte gelernt.", vi: "Chúng tớ đã có nhiều niềm vui và học được nhiều điều về lịch sử." },
          { pattern: "Am Ende habe ich schöne Postkarten im Museumsshop gekauft.", vi: "Vào cuối buổi tớ đã mua những tấm bưu thiếp đẹp tại quầy lưu niệm của bảo tàng." }
        ],
        phonetik: "Ngữ điệu phấn khởi, hào hứng khi chia sẻ trải nghiệm tích cực.",
        dialogue: [
          { speaker: "Mama", text: "Wie war dein Ausflug ins Historische Museum, Mai?" },
          { speaker: "Mai", text: "Es war fantastisch, Mama! Wir haben alte Königtümer gesehen und hatten eine tolle Führung!" }
        ],
        quiz: {
          q: "Dạng quá khứ của động từ 'sein' trong câu 'Der Ausflug _____ super' là:",
          options: ["war", "hatte", "ist gewesen", "wurde"],
          ans: 0,
          explain: "Thời quá khứ đơn Präteritum của 'sein' ở ngôi thứ 3 số ít là 'war'."
        }
      },
      {
        num: "Landeskunde",
        nameDe: "Das Schokoladenmuseum in Köln",
        nameVi: "Bảo tàng Sô-cô-la nổi tiếng tại thành phố Köln",
        page: "100",
        vocab: [
          { de: "das Schokoladenmuseum", gender: "n.", vi: "Bảo tàng Sô-cô-la" },
          { de: "der Kakaobaum", gender: "m.", vi: "cây ca-cao" },
          { de: "der Schokoladenbrunnen", gender: "m.", vi: "đài phun sô-cô-la khổng lồ" },
          { de: "die Produktion", gender: "f.", vi: "quy trình sản xuất" },
          { de: "probieren / naschen", gender: "v.", vi: "nếm thử / ăn vặt đồ ngọt" }
        ],
        grammarTitle: "Bảo tàng Sô-cô-la Köln bên dòng sông Rhein",
        grammarContent: [
          { pattern: "Das Schokoladenmuseum in Köln liegt direkt am Rhein und gehört zu den beliebtesten Museen Deutschlands.", vi: "Bảo tàng Sô-cô-la ở thành phố Köln nằm ngay bên bờ sông Rhein và là một trong những bảo tàng được yêu thích nhất nước Đức." },
          { pattern: "Das Highlight ist der 3 Meter hohe Schokoladenbrunnen: Besucher dürfen frische Waffeln in flüssige Schokolade tauchen und probieren!", vi: "Điểm nhấn là đài phun sô-cô-la cao 3m: Khách tham quan được nhúng bánh quế giòn vào dòng sô-cô-la ấm chảy và thưởng thức ngay tại chỗ!" }
        ],
        phonetik: "Âm /œ/ trong 'Köln' (nguyên âm biến âm ö ngắn).",
        dialogue: [
          { speaker: "Lisa", text: "Im Schokoladenmuseum in Köln habe ich gesehen, wie Schokolade gemacht wird. Und der Brunnen war so lecker!" }
        ],
        quiz: {
          q: "Bảo tàng Sô-cô-la nổi tiếng nhất nước Đức nằm ở thành phố nào bên dòng sông Rhein?",
          options: ["Köln (Cologne)", "München", "Hamburg", "Frankfurt"],
          ans: 0,
          explain: "'Das Schokoladenmuseum Köln' là địa điểm du lịch văn hóa nổi tiếng tọa lạc tại thành phố Köln."
        }
      },
      {
        num: "Projekt",
        nameDe: "Unser Ausflug ins Museum",
        nameVi: "Dự án: Kỷ yếu nhật ký tham quan bảo tàng",
        page: "101",
        vocab: [
          { de: "der Exkursionsbericht", gender: "m.", vi: "báo cáo chuyến dã ngoại" },
          { de: "das Fotoalbum", gender: "n.", vi: "cuốn album ảnh kỷ niệm" },
          { de: "das Lieblingsstück", gender: "n.", vi: "hiện vật yêu thích nhất" },
          { de: "präsentieren", gender: "v.", vi: "thuyết trình, báo cáo" }
        ],
        grammarTitle: "Trình bày báo cáo kết quả trải nghiệm bảo tàng trước lớp",
        grammarContent: [
          { pattern: "Unser Ausflug ins Museum fand am vergangenen Mittwoch statt.", vi: "Chuyến dã ngoại đến bảo tàng của chúng mình đã diễn ra vào thứ Tư tuần trước." },
          { pattern: "Mein persönliches Lieblingsstück war das Modell eines alten Schiffs.", vi: "Hiện vật yêu thích nhất của mình là mô hình chiếc thuyền buồm cổ." }
        ],
        phonetik: "Luyện giọng báo cáo lưu loát, tự nhiên.",
        dialogue: [
          { speaker: "Học sinh", text: "Wir zeigen euch heute unser Fotoplakat über den Besuch im Schokoladenmuseum!" }
        ],
        quiz: {
          q: "Để diễn đạt 'Hiện vật yêu thích nhất của tôi là...', ta nói:",
          options: [
            "Mein Lieblingsstück war...",
            "Ich habe kein Stück...",
            "Das Museum mag ich nicht...",
            "Kaufst du ein Stück..."
          ],
          ans: 0,
          explain: "'Mein Lieblingsstück war...' nghĩa là hiện vật triển lãm mà tôi yêu thích nhất là..."
        }
      }
    ]
  },
  {
    id: "plattform-4",
    isStation: true,
    number: "P4",
    bookPart: "Tập 2",
    titleDe: "Plattform 4 & Fit für ...",
    titleVi: "Trạm ôn tập toàn diện & Luyện thi học kì 2",
    page: "102",
    desc: "Tổng kết toàn bộ 10 Einheit của chương trình Tiếng Đức 6 – Bộ sách Kết nối tri thức với cuộc sống. Luyện đề thi cuối năm chuẩn Fit in Deutsch A1.2 dành cho học sinh THCS.",
    lektions: [
      {
        num: "Plattform 4",
        nameDe: "Gesamtwiederholung Semester 2",
        nameVi: "Tổng ôn tập học kì 2 (S. 102)",
        page: "102",
        vocab: [
          { de: "das Jahresende", gender: "n.", vi: "cuối năm học" },
          { de: "der Gesamtüberblick", gender: "m.", vi: "cái nhìn bao quát toàn diện" },
          { de: "der Wortschatz A1", gender: "m.", vi: "vốn từ vựng chuẩn A1" },
          { de: "die Sprachkompetenz", gender: "f.", vi: "năng lực giao tiếp ngôn ngữ" }
        ],
        grammarTitle: "Hệ thống hóa toàn bộ các mảng ngữ pháp trọng tâm Lớp 6",
        grammarContent: [
          { pattern: "Học kì 1: Verben mit Präpositionen, weil / denn / deshalb, Wechselpräpositionen (Wo? + Dat vs Wohin? + Akk), Dativpronomen.", vi: "Ngữ pháp cốt lõi Tập 1." },
          { pattern: "Học kì 2: Imperativ (du, ihr), Trennbare Verben, Komparativ / Superlativ, Modalverben (sollen, dürfen), Perfekt mit haben/sein, wenn-Sätze.", vi: "Ngữ pháp cốt lõi Tập 2." }
        ],
        phonetik: "Tổng ôn toàn bộ các cặp âm khó, ngữ điệu hội thoại trôi chảy.",
        dialogue: [
          { speaker: "Lehrer", text: "Herzlichen Glückwunsch! Ihr habt alle 10 Einheiten Deutsch 6 hervorragend gemeistert!" }
        ],
        quiz: {
          q: "Câu nào dưới đây hoàn toàn chính xác về ngữ pháp thời Perfekt?",
          options: [
            "Gestern sind wir ins Museum gegangen.",
            "Gestern haben wir ins Museum gegangen.",
            "Gestern sind wir ins Museum gehen.",
            "Gestern wir haben ins Museum gehen."
          ],
          ans: 0,
          explain: "Động từ chuyển động 'gehen' đi với trợ động từ 'sein' và phân từ hai 'gegangen': 'sind ... gegangen'."
        }
      },
      {
        num: "Fit für ...",
        nameDe: "Fit für Deutsch 6 – Abschlussprüfung",
        nameVi: "Đề thi khảo sát đánh giá cuối năm Lớp 6 (S. 104)",
        page: "104",
        vocab: [
          { de: "das Zertifikat", gender: "n.", vi: "chứng chỉ đạt chuẩn" },
          { de: "die Aufgabenstellung", gender: "f.", vi: "yêu cầu bài tập đề thi" },
          { de: "die Hörverstehensprüfung", gender: "f.", vi: "phần thi nghe hiểu" },
          { de: "die Sprechprüfung", gender: "f.", vi: "phần thi nói tương tác" }
        ],
        grammarTitle: "Cấu trúc bài kiểm tra đánh giá định kỳ cuối năm chuẩn Bộ GD&ĐT",
        grammarContent: [
          { pattern: "Phần 1: Nghe hiểu thông tin chi tiết qua các đoạn hội thoại ngắn.", vi: "Hörverstehen" },
          { pattern: "Phần 2: Đọc hiểu văn bản, biển báo, thông báo bảo tàng, email.", vi: "Leseverstehen" },
          { pattern: "Phần 3: Sử dụng ngôn ngữ (Ngữ âm, Từ vựng, Ngữ pháp trọng điểm).", vi: "Sprachbausteine" },
          { pattern: "Phần 4: Viết đoạn văn ngắn 40 - 50 từ giới thiệu về kỳ nghỉ hoặc bữa tiệc.", vi: "Schreiben" }
        ],
        phonetik: "Tự tin phát âm chuẩn xác trong phần thi vấn đáp trực tiếp.",
        dialogue: [
          { speaker: "Prüfer", text: "Du hast die Prüfung mit der Note 1 (sehr gut) bestanden! Gratulation!" }
        ],
        quiz: {
          q: "Trong bài thi viết thư tiếng Đức cuối năm, phần kết thư lịch sự gửi cho bạn bè thường dùng cụm từ nào?",
          options: ["Viele liebe Grüße", "Auf Wiederhören", "Guten Morgen", "Kein Problem"],
          ans: 0,
          explain: "'Viele liebe Grüße' hoặc 'Herzliche Grüße' là câu kết thư tiêu chuẩn, ấm áp gửi cho bạn bè."
        }
      }
    ]
  }
];

console.log("Loaded units data:", unitsData.length, "units/stations.");

module.exports = { unitsData };
