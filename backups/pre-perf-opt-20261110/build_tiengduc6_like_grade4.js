const fs = require('fs');
const path = require('path');

// 11 Units data matching user's curriculum
const units = [
  {
    id: 'unit-einfuehrung',
    num: 0,
    tag: 'Tập 1 • Khởi động (Start)',
    titleDe: 'Start: Ich bin neu an der Schule',
    titleVn: 'Tôi là học sinh mới ở trường',
    audioText: 'Start: Ich bin neu an der Schule. die Schule, das Klassenzimmer, der Schulhof, die Mitschüler, die Schulfächer, die Pause, heißen, neu. Ich bin neu an der Schule. Meine Schule ist groß und schön. Was machst du in der Pause?',
    vocab: [
      { de: 'die Schule', vn: 'trường học' },
      { de: 'das Klassenzimmer', vn: 'phòng học, lớp học' },
      { de: 'der Schulhof', vn: 'sân trường' },
      { de: 'die Mitschüler', vn: 'bạn cùng lớp' },
      { de: 'die Schulfächer', vn: 'các môn học' },
      { de: 'die Pause', vn: 'giờ ra chơi, giải lao' },
      { de: 'heißen', vn: 'tên là, gọi là' },
      { de: 'neu', vn: 'mới, học sinh mới' }
    ],
    grammarTitle: 'Ngữ âm unbetontes e (/ə/) & Giới thiệu bản thân, trường lớp',
    grammarRules: [
      '<strong>1. Ngữ âm unbetontes e:</strong> Âm "e" không nhấn trọng âm ở cuối từ phát âm nhẹ thành âm /ə/ (ví dụ: spiele, heiße, Pause, Schule, Name).',
      '<strong>2. Mạo từ xác định:</strong> der (giống đực: der Schulhof), die (giống cái: die Schule, die Pause), das (giống trung: das Klassenzimmer).',
      '<strong>3. Cấu trúc giới thiệu:</strong> "Ich heiße...", "Ich bin neu an der Schule", "Meine Schule ist groß und schön."'
    ],
    qa: [
      { q: 'Wie heißt du?', a: 'Ich heiße Lukas và tôi là học sinh mới.' },
      { q: 'Was machst du in der Pause?', a: 'Ich spiele Fußball auf dem Schulhof.' },
      { q: 'Wie ist deine Schule?', a: 'Meine Schule ist groß, modern und sehr schön.' }
    ],
    phonetik: 'Luyện phát âm âm cuối /ə/: spiele, heiße, Pause, Schule, Name. Đọc thả lỏng miệng, không nhấn mạnh trọng âm.',
    dialog: [
      { speaker: 'Lukas', text: 'Hallo! Ich bin neu an der Schule. Wie heißt du?' },
      { speaker: 'Anna', text: 'Guten Tag, Lukas! Ich heiße Anna. Willkommen in unserer Klasse!' },
      { speaker: 'Lukas', text: 'Danke! Euer Schulhof ist wirklich groß und schön.' }
    ],
    quiz: {
      qName: 'q_unit0',
      qText: 'Từ nào sau đây có âm "e" cuối phát âm là unbetontes e (/ə/)?',
      options: [
        { label: 'A. die Schule', val: 'A' },
        { label: 'B. der Tee', val: 'B' },
        { label: 'C. das Café', val: 'C' }
      ],
      correct: 'A',
      expl: 'die Schule có âm e cuối không mang trọng âm, phát âm nhẹ là /ə/.'
    }
  },
  {
    id: 'unit-1',
    num: 1,
    tag: 'Tập 1 • Einheit 1',
    titleDe: 'Einheit 1: Meine Hobbys',
    titleVn: 'Sở thích của tôi',
    audioText: 'Einheit 1: Meine Hobbys. die Freizeitbeschäftigung, der Schachclub, basteln, spazieren gehen, das Seilspringen, das Lieblingsspiel, warten auf, sprechen über, helfen bei, teilnehmen an. Was machst du in deiner Freizeit? Ich nehme am Tanzclub teil. Mein Lieblingsspiel ist Seilspringen.',
    vocab: [
      { de: 'die Freizeitbeschäftigung', vn: 'hoạt động lúc rảnh rỗi' },
      { de: 'der Schachclub', vn: 'câu lạc bộ cờ vua' },
      { de: 'basteln', vn: 'làm đồ thủ công' },
      { de: 'spazieren gehen', vn: 'đi dạo' },
      { de: 'das Seilspringen', vn: 'trò chơi nhảy dây' },
      { de: 'das Lieblingsspiel', vn: 'trò chơi yêu thích' },
      { de: 'warten auf (+ Akk)', vn: 'chờ đợi ai/cái gì' },
      { de: 'teilnehmen an (+ Dat)', vn: 'tham gia vào CLB' }
    ],
    grammarTitle: 'Động từ & Danh từ đi kèm giới từ cố định (Feste Präpositionen)',
    grammarRules: [
      '<strong>1. Động từ + Giới từ:</strong> warten auf (+ Akk) – chờ đợi; sprechen über (+ Akk) – nói về; helfen bei (+ Dat) – giúp đỡ; teilnehmen an (+ Dat) – tham gia.',
      '<strong>2. Danh từ + Giới từ:</strong> Interesse an (+ Dat) – sự quan tâm; Freude an (+ Dat) – niềm vui; Lust auf (+ Akk) – có hứng thú.',
      '<strong>3. Cấu trúc câu hỏi:</strong> "Was machst du in deiner Freizeit?" $\rightarrow$ "Ich nehme am Tanzclub teil."'
    ],
    qa: [
      { q: 'Was machst du in deiner Freizeit?', a: 'Ich nehme am Tanzclub teil và chơi thể thao.' },
      { q: 'Auf wen wartest du?', a: 'Ich warte auf meinen Freund vor der Schule.' },
      { q: 'Was ist dein Lieblingsspiel?', a: 'Mein Lieblingsspiel ist Seilspringen.' }
    ],
    phonetik: 'Phát âm tổ hợp phụ âm /ʃp/ và /ʃt/ trong spazieren, spielen, Sport. Luôn đọc là /ʃ/ như "s" nặng.',
    dialog: [
      { speaker: 'Felix', text: 'Was machst du gern in deiner Freizeit, Mia?' },
      { speaker: 'Mia', text: 'Ich bastele sehr gern und spiele oft im Schachclub.' },
      { speaker: 'Felix', text: 'Toll! Am Wochenende gehe ich im Park spazieren.' }
    ],
    quiz: {
      qName: 'q_unit1',
      qText: 'Động từ "warten" đi kèm với giới từ nào và cách mấy?',
      options: [
        { label: 'A. auf (+ Akkusativ)', val: 'A' },
        { label: 'B. an (+ Dativ)', val: 'B' },
        { label: 'C. über (+ Dativ)', val: 'C' }
      ],
      correct: 'A',
      expl: 'warten auf + Akkusativ mang nghĩa chờ đợi ai/cái gì.'
    }
  },
  {
    id: 'unit-2',
    num: 2,
    tag: 'Tập 1 • Einheit 2',
    titleDe: 'Einheit 2: Meine Familie',
    titleVn: 'Gia đình tôi',
    audioText: 'Einheit 2: Meine Familie. die Familienmitglieder, der Rentner, die Rentnerin, der Schwager, die Schwägerin, Zimmer aufräumen, Geschirr spülen, das Frühstück, weil. Das ist meine Familie. Wir basteln oft zusammen, weil er das sehr gut kann. Möchtest du einen Apfel? Nein, ich möchte keinen.',
    vocab: [
      { de: 'die Familienmitglieder', vn: 'các thành viên gia đình' },
      { de: 'der Rentner', vn: 'người về hưu (nam)' },
      { de: 'die Rentnerin', vn: 'người về hưu (nữ)' },
      { de: 'der Schwager', vn: 'anh/em rể' },
      { de: 'die Schwägerin', vn: 'chị/em dâu' },
      { de: 'Zimmer aufräumen', vn: 'dọn dẹp phòng' },
      { de: 'Geschirr spülen', vn: 'rửa bát đĩa' },
      { de: 'das Frühstück', vn: 'bữa ăn sáng' }
    ],
    grammarTitle: 'Mệnh đề phụ với "weil" & Đại từ bất định ở cách 4 (Akkusativ)',
    grammarRules: [
      '<strong>1. Mệnh đề phụ với liên từ weil:</strong> Trong câu có "weil" (bởi vì), động từ chia luôn luôn được chuyển xuống đứng ở VỊ TRÍ CUỐI CÙNG của câu.',
      '<strong>2. Đại từ bất định ở cách 4 (Akkusativ):</strong> einen / keinen (giống đực), eine / keine (giống cái), eins / keins (giống trung).',
      '<strong>Ví dụ:</strong> "Möchtest du einen Apfel? – Nein, ich möchte keinen."'
    ],
    qa: [
      { q: 'Wer ist das auf dem Foto?', a: 'Das ist mein Großvater. Er ist Rentner.' },
      { q: 'Warum bastelt ihr zusammen?', a: 'Weil mein kleiner Bruder das sehr gut kann.' },
      { q: 'Hast du ein Haustier?', a: 'Nein, ich habe keins.' }
    ],
    phonetik: 'Phát âm âm phụ âm cuối ngắt /r/ và đuôi /-er/ phát âm nhẹ thành /ɐ/ trong Rentner, Schwager, Mutter, Vater.',
    dialog: [
      { speaker: 'Leon', text: 'Hilfst du oft zu Hause mit, Sophie?' },
      { speaker: 'Sophie', text: 'Ja, ich räume mein Zimmer auf und spüle das Geschirr.' },
      { speaker: 'Leon', text: 'Das ist super! Meine ganze Familie frühstückt immer gemeinsam.' }
    ],
    quiz: {
      qName: 'q_unit2',
      qText: 'Trong mệnh đề phụ với "weil", động từ chia đứng ở vị trí nào?',
      options: [
        { label: 'A. Ở vị trí cuối cùng của mệnh đề', val: 'A' },
        { label: 'B. Ở vị trí đầu tiên', val: 'B' },
        { label: 'C. Ở vị trí thứ hai', val: 'C' }
      ],
      correct: 'A',
      expl: 'Liên từ weil bắt buộc đẩy động từ chia xuống đứng cuối mệnh đề phụ.'
    }
  },
  {
    id: 'unit-3',
    num: 3,
    tag: 'Tập 1 • Einheit 3',
    titleDe: 'Einheit 3: Meine Sprachen',
    titleVn: 'Ngôn ngữ của tôi',
    audioText: 'Einheit 3: Meine Sprachen. die Muttersprache, die Fremdsprache, Vokabeln abschreiben, Wörter nachschlagen, Fehler korrigieren, die Mehrsprachigkeit, denn, deshalb. Welche Sprachen spricht dein Cousin? Ich schlage oft Wörter im Wörterbuch nach. Chi ist neu im Club, deshalb spricht sie wenig Deutsch.',
    vocab: [
      { de: 'die Muttersprache', vn: 'tiếng mẹ đẻ' },
      { de: 'die Fremdsprache', vn: 'ngoại ngữ' },
      { de: 'Vokabeln abschreiben', vn: 'chép từ vựng' },
      { de: 'Wörter nachschlagen', vn: 'tra cứu từ vựng' },
      { de: 'Fehler korrigieren', vn: 'sửa lỗi sai' },
      { de: 'die Mehrsprachigkeit', vn: 'tính đa ngôn ngữ' },
      { de: 'denn', vn: 'vì (liên từ vị trí 0)' },
      { de: 'deshalb', vn: 'do đó, vì vậy (đảo ngữ)' }
    ],
    grammarTitle: 'Chia động từ sprechen (e $\rightarrow$ i), số nhiều & Liên từ denn, weil, deshalb',
    grammarRules: [
      '<strong>1. Động từ bất quy tắc sprechen:</strong> ich spreche, du sprichst, er/sie/es spricht, wir sprechen, ihr sprecht, sie sprechen.',
      '<strong>2. Hình thức số nhiều Pluralformen:</strong> die Sprachen, die Wörter, die Fehler, die Bücher.',
      '<strong>3. Phân biệt trật tự từ:</strong> denn (vị trí 0, không đổi trật tự), weil (động từ cuối câu), deshalb (vị trí 1 $\rightarrow$ động từ vị trí 2: deshalb + V + S).'
    ],
    qa: [
      { q: 'Welche Sprachen spricht dein Cousin?', a: 'Er spricht Deutsch, Englisch und Vietnamesisch.' },
      { q: 'Wie lernst du am besten Vokabeln?', a: 'Ich schreibe Vokabeln ab und schlage Wörter im Wörterbuch nach.' },
      { q: 'Warum spricht Chi wenig Deutsch?', a: 'Chi ist neu im Club, deshalb spricht sie noch wenig Deutsch.' }
    ],
    phonetik: 'Phân biệt âm /ç/ (trong ich, sprechen, nicht) và âm /x/ (trong nach, Buch, Sprache). Âm /ç/ phát âm ở vòm miệng trước.',
    dialog: [
      { speaker: 'Tom', text: 'Welche Fremdsprachen lernst du in der Schule?' },
      { speaker: 'Chi', text: 'Ich lerne Deutsch und Englisch. Deutsch macht mir viel Spaß.' },
      { speaker: 'Tom', text: 'Toll! Bei Fragen helfe ich dir gern.' }
    ],
    quiz: {
      qName: 'q_unit3',
      qText: 'Sau trạng từ chỉ kết quả "deshalb" (do đó), thành phần nào đứng kế tiếp?',
      options: [
        { label: 'A. Động từ chia (vị trí 2)', val: 'A' },
        { label: 'B. Chủ ngữ', val: 'B' },
        { label: 'C. Tân ngữ', val: 'C' }
      ],
      correct: 'A',
      expl: 'deshalb chiếm vị trí 1, theo luật ngữ pháp tiếng Đức động từ chia phải đảo lên vị trí 2.'
    }
  },
  {
    id: 'unit-4',
    num: 4,
    tag: 'Tập 1 • Einheit 4',
    titleDe: 'Einheit 4: Mein Zuhause',
    titleVn: 'Nhà của tôi',
    audioText: 'Einheit 4: Mein Zuhause. das Reihenhaus, das Hochhaus, das Bauernhaus, das Möbelstück, der Schreibtisch, das Haustier, liegen, stehen, sitzen, hängen. Ich wohne in einem Bauernhaus. Das Regal hängt über dem Schreibtisch. Die Katze sitzt unter dem Baum.',
    vocab: [
      { de: 'das Reihenhaus', vn: 'nhà liền kề' },
      { de: 'das Hochhaus', vn: 'nhà cao tầng, chung cư' },
      { de: 'das Bauernhaus', vn: 'nhà trang trại, nông thôn' },
      { de: 'das Möbelstück', vn: 'đồ nội thất' },
      { de: 'der Schreibtisch', vn: 'bàn học, bàn làm việc' },
      { de: 'das Haustier', vn: 'thú cưng, vật nuôi' },
      { de: 'liegen / stehen', vn: 'nằm / đứng (vị trí)' },
      { de: 'sitzen / hängen', vn: 'ngồi / treo' }
    ],
    grammarTitle: 'Giới từ 2 cách với Dativ (Wo?) & Động từ chỉ vị trí trạng thái',
    grammarRules: [
      '<strong>1. Giới từ 2 cách đi với Dativ (câu hỏi Wo?):</strong> in, an, auf, neben, hinter, über, unter, vor, zwischen.',
      '<strong>Biến đổi mạo từ Dativ:</strong> der/das $\rightarrow$ dem (auf dem Schreibtisch, unter dem Bett); die $\rightarrow$ der (an der Wand); số nhiều $\rightarrow$ den (+n).',
      '<strong>2. Động từ chỉ vị trí trạng thái:</strong> stehen (đứng), liegen (nằm), sitzen (ngồi), hängen (treo).'
    ],
    qa: [
      { q: 'Wo wohnst du?', a: 'Ich wohne in einem schönen Reihenhaus mit Garten.' },
      { q: 'Wo hängt das Bild?', a: 'Das Bild hängt an der Wand über dem Sofa.' },
      { q: 'Wo ist die Katze?', a: 'Die Katze sitzt unter dem Baum im Garten.' }
    ],
    phonetik: 'Phát âm nguyên âm kép /aʊ/ trong Haus, Bauernhaus và âm /aɪ/ trong Schreibtisch, Reihenhaus.',
    dialog: [
      { speaker: 'Jonas', text: 'Hast du ein eigenes Zimmer in deinem Haus?' },
      { speaker: 'Lukas', text: 'Ja, mein Zimmer ist gemütlich. Mein Schreibtisch steht am Fenster.' },
      { speaker: 'Jonas', text: 'Und dein Hund, wo schläft er?' },
      { speaker: 'Lukas', text: 'Er liegt immer auf dem Teppich neben meinem Bett.' }
    ],
    quiz: {
      qName: 'q_unit4',
      qText: 'Điền mạo từ vào chỗ trống: "Das Buch liegt auf ___ (der Tisch - Dativ)":',
      options: [
        { label: 'A. dem Tisch', val: 'A' },
        { label: 'B. den Tisch', val: 'B' },
        { label: 'C. des Tisch', val: 'C' }
      ],
      correct: 'A',
      expl: 'Ở cách Dativ, danh từ giống đực der chuyển thành dem $\rightarrow$ auf dem Tisch.'
    }
  },
  {
    id: 'unit-5',
    num: 5,
    tag: 'Tập 1 • Einheit 5',
    titleDe: 'Einheit 5: Mein Geburtstag',
    titleVn: 'Sinh nhật của tôi',
    audioText: 'Einheit 5: Mein Geburtstag. die Geburtstagstorte, die Kerze, das Geschenk, die Einladungskarte, danken, gefallen, gratulieren, am ersten, am dritten. Ich habe am 3. Mai Geburtstag. Ich gratuliere dir herzlich zum Geburtstag! Das T-Shirt gefällt mir sehr gut.',
    vocab: [
      { de: 'die Geburtstagstorte', vn: 'bánh sinh nhật' },
      { de: 'die Kerze', vn: 'ngọn nến' },
      { de: 'das Geschenk', vn: 'món quà' },
      { de: 'die Einladungskarte', vn: 'thiệp mời sinh nhật' },
      { de: 'gratulieren (+ Dat)', vn: 'chúc mừng ai' },
      { de: 'danken (+ Dat)', vn: 'cảm ơn ai' },
      { de: 'gefallen (+ Dat)', vn: 'vừa ý, thích' },
      { de: 'am ersten / am dritten', vn: 'vào ngày mùng 1 / mùng 3' }
    ],
    grammarTitle: 'Động từ đi với tân ngữ Dativ & Số thứ tự Ordinalzahlen (Ngày tháng)',
    grammarRules: [
      '<strong>1. Động từ đòi hỏi tân ngữ Dativ (cách 3):</strong> gratulieren (Ich gratuliere dir!), danken (Ich danke Ihnen), gefallen (Das Geschenk gefällt mir).',
      '<strong>2. Số thứ tự chỉ ngày tháng (Ordinalzahlen):</strong> am 1. (ersten), am 2. (zweiten), am 3. (dritten), am 20. (zwanzigsten)...',
      '<strong>3. Lời chúc mừng:</strong> "Herzlichen Glückwunsch zum Geburtstag!" hoặc "Alles Gute zum Geburtstag!"'
    ],
    qa: [
      { q: 'Wann hast du Geburtstag?', a: 'Ich habe am 3. Mai Geburtstag.' },
      { q: 'Wie gratuliert man zum Geburtstag?', a: 'Herzlichen Glückwunsch zum Geburtstag!' },
      { q: 'Gefällt dir das Geschenk?', a: 'Ja, das Geschenk gefällt mir wirklich sehr gut.' }
    ],
    phonetik: 'Phát âm đuôi số thứ tự /-ten/ và /-sten/ trong vierten, zehnten, zwanzigsten. Phát âm dứt khoát, rõ âm n cuối.',
    dialog: [
      { speaker: 'Lukas', text: 'Herzlichen Glückwunsch zum Geburtstag, David! Hier ist dein Geschenk.' },
      { speaker: 'David', text: 'Vielen Dank, Lukas! Das Buch gefällt mir sehr.' },
      { speaker: 'Lukas', text: 'Schön! Puste jetzt die Kerzen auf der Torte aus!' }
    ],
    quiz: {
      qName: 'q_unit5',
      qText: 'Động từ "gratulieren" (chúc mừng) đi với tân ngữ ở cách nào?',
      options: [
        { label: 'A. Dativ (cách 3)', val: 'A' },
        { label: 'B. Akkusativ (cách 4)', val: 'B' },
        { label: 'C. Nominativ (cách 1)', val: 'C' }
      ],
      correct: 'A',
      expl: 'gratulieren đòi hỏi tân ngữ người ở cách Dativ (dir, ihm, ihr...).'
    }
  },
  {
    id: 'unit-6',
    num: 6,
    tag: 'Tập 2 • Einheit 6',
    titleDe: 'Einheit 6: Mein Restaurantbesuch',
    titleVn: 'Đi ăn nhà hàng',
    audioText: 'Einheit 6: Mein Restaurantbesuch. die Hauptspeise, die Vorspeise, die Nachspeise, der Bratreis, das Rezept, die Geschmacksrichtung, die Rechnung. Nimm Bratreis, der schmeckt auch gut! Wie schmeckt der Bratreis? Er ist sehr lecker. Bananen schälen und in Scheiben schneiden. Die Rechnung, bitte!',
    vocab: [
      { de: 'die Hauptspeise', vn: 'món ăn chính' },
      { de: 'die Vorspeise', vn: 'món khai vị' },
      { de: 'die Nachspeise', vn: 'món tráng miệng' },
      { de: 'der Bratreis', vn: 'cơm rang' },
      { de: 'das Rezept', vn: 'công thức nấu ăn' },
      { de: 'die Geschmacksrichtung', vn: 'hương vị (ngọt, mặn...)' },
      { de: 'die Rechnung', vn: 'hóa đơn tính tiền' },
      { de: 'bestellen / bezahlen', vn: 'gọi món / thanh toán' }
    ],
    grammarTitle: 'Đại từ nhân xưng thay thế ở Nominativ & Cấu trúc chỉ dẫn thao tác',
    grammarRules: [
      '<strong>1. Đại từ thay thế danh từ ở Nominativ:</strong> der Bratreis $\rightarrow$ er / der; die Suppe $\rightarrow$ sie / die; das Schnitzel $\rightarrow$ es / das.',
      '<strong>2. Thao tác chế biến:</strong> schneiden / teilen / geben / gießen + etw. + in/über + Akkusativ.',
      '<strong>3. Mẫu câu gọi món & tính tiền:</strong> "Ich möchte...", "Die Rechnung, bitte! Zusammen oder getrennt?"'
    ],
    qa: [
      { q: 'Was möchten Sie bestellen?', a: 'Ich nehme Schnitzel mit Pommes frites.' },
      { q: 'Wie schmeckt der Bratreis?', a: 'Er schmeckt fantastisch và rất vừa miệng.' },
      { q: 'Zahlen Sie zusammen oder getrennt?', a: 'Zusammen, bitte! Hier ist das Geld.' }
    ],
    phonetik: 'Phát âm âm /ʃ/ trong Vorspeise, Hauptspeise, Nachspeise, schmecken. Uốn nhẹ đầu lưỡi, khẩu hình mở vừa.',
    dialog: [
      { speaker: 'Kellner', text: 'Guten Abend! Was möchten Sie bestellen?' },
      { speaker: 'Herr Schmidt', text: 'Als Vorspeise eine Gemüsesuppe und als Hauptspeise Bratreis mit Hähnchen.' },
      { speaker: 'Kellner', text: 'Sehr gern! Und zu trinken?' },
      { speaker: 'Herr Schmidt', text: 'Eine Apfelschorle, bitte.' }
    ],
    quiz: {
      qName: 'q_unit6',
      qText: 'Khi yêu cầu nhân viên tính tiền trong nhà hàng, câu nói lịch sự chuẩn xác là:',
      options: [
        { label: 'A. Die Rechnung, bitte!', val: 'A' },
        { label: 'B. Ich habe Hunger!', val: 'B' },
        { label: 'C. Guten Appetit!', val: 'C' }
      ],
      correct: 'A',
      expl: 'Die Rechnung, bitte! là câu chuẩn mực để đề nghị mang hóa đơn thanh toán.'
    }
  },
  {
    id: 'unit-7',
    num: 7,
    tag: 'Tập 2 • Einheit 7',
    titleDe: 'Einheit 7: Meine Lieblingssendung',
    titleVn: 'Chương trình truyền hình yêu thích',
    audioText: 'Einheit 7: Meine Lieblingssendung. die Fernsehsendung, der Zeichentrickfilm, die Kindersendung, die Sportsendung, die Gameshow, die Nachrichten, fernsehen, besser, am besten. Was ist deine Lieblingssendung? Schneewittchen ist freundlicher als die Königin. Diese Runde ist am schwierigsten.',
    vocab: [
      { de: 'die Fernsehsendung', vn: 'chương trình truyền hình' },
      { de: 'der Zeichentrickfilm', vn: 'phim hoạt hình' },
      { de: 'die Kindersendung', vn: 'chương trình thiếu nhi' },
      { de: 'die Sportsendung', vn: 'chương trình thể thao' },
      { de: 'die Gameshow', vn: 'trò chơi truyền hình' },
      { de: 'die Nachrichten', vn: 'tin tức thời sự' },
      { de: 'fernsehen', vn: 'xem tivi (động từ tách)' },
      { de: 'am besten / am liebsten', vn: 'tốt nhất / thích nhất' }
    ],
    grammarTitle: 'Cấp so sánh hơn, so sánh nhất của tính từ & Động từ tách fernsehen',
    grammarRules: [
      '<strong>1. Động từ tách fernsehen:</strong> ich sehe fern, du siehst fern, er sieht fern (đổi e $\rightarrow$ ie), wir sehen fern.',
      '<strong>2. So sánh tính từ thông thường:</strong> Komparativ: Adjektiv + -er als; Superlativ: am + Adjektiv + -(e)sten.',
      '<strong>3. So sánh bất quy tắc:</strong> gut $\rightarrow$ besser $\rightarrow$ am besten; gern $\rightarrow$ lieber $\rightarrow$ am liebsten; viel $\rightarrow$ mehr $\rightarrow$ am meisten.'
    ],
    qa: [
      { q: 'Was ist deine Lieblingssendung?', a: 'Meine Lieblingssendung ist der Zeichentrickfilm.' },
      { q: 'Welche Sendung findest du besser?', a: 'Ich finde die Sportsendung spannender als die Nachrichten.' },
      { q: 'Wann siehst du fern?', a: 'Ich sehe am Wochenende nach den Hausaufgaben fern.' }
    ],
    phonetik: 'Phát âm nguyên âm dài /iː/ trong sieht, fernsehen và nguyên âm ngắn /ɪ/ trong Zeichentrickfilm, Kindersendung.',
    dialog: [
      { speaker: 'Ben', text: 'Welche Sendung siehst du am liebsten im Fernsehen?' },
      { speaker: 'Lisa', text: 'Ich liebe Zeichentrickfilme. Sie sind lustiger als Krimis.' },
      { speaker: 'Ben', text: 'Stimmt! Aber die Gameshow heute Abend ist am spannendsten.' }
    ],
    quiz: {
      qName: 'q_unit7',
      qText: 'Dạng so sánh hơn của tính từ "gut" (tốt/hay) là:',
      options: [
        { label: 'A. besser', val: 'A' },
        { label: 'B. guter', val: 'B' },
        { label: 'C. am besten', val: 'C' }
      ],
      correct: 'A',
      expl: 'gut là tính từ bất quy tắc: gut $\rightarrow$ besser $\rightarrow$ am besten.'
    }
  },
  {
    id: 'unit-8',
    num: 8,
    tag: 'Tập 2 • Einheit 8',
    titleDe: 'Einheit 8: Mein Arztbesuch',
    titleVn: 'Khám bác sĩ',
    audioText: 'Einheit 8: Mein Arztbesuch. die Halsschmerzen, das Fieber, der Hustensaft, die Hausapotheke, das Pflaster, das Thermometer, sollen. Ich habe Husten und Halsschmerzen. Trink nicht zu viel kaltes Wasser! Du sollst regelmäßig Sport treiben.',
    vocab: [
      { de: 'die Halsschmerzen', vn: 'chứng đau họng' },
      { de: 'das Fieber', vn: 'cơn sốt' },
      { de: 'der Hustensaft', vn: 'si-rô ho' },
      { de: 'die Hausapotheke', vn: 'tủ thuốc gia đình' },
      { de: 'das Pflaster', vn: 'băng cá nhân dán vết thương' },
      { de: 'das Thermometer', vn: 'nhiệt kế' },
      { de: 'sollen', vn: 'nên làm gì (khuyên bảo)' },
      { de: 'Gute Besserung!', vn: 'Chúc mau bình phục!' }
    ],
    grammarTitle: 'Thể mệnh lệnh (Imperativ) & Động từ khuyết thiếu "sollen" đưa lời khuyên',
    grammarRules: [
      '<strong>1. Thể mệnh lệnh Imperativ:</strong>',
      '- Ngôi du: Bỏ du và đuôi -st (Trink nicht zu viel kaltes Wasser!, Bleib im Bett!).',
      '- Ngôi ihr: Bỏ ihr, giữ nguyên động từ chia (Nehmt die Medikamente!).',
      '- Ngôi Sie: Đảo động từ lên trước Sie (Trinken Sie bitte viel Tee!).',
      '<strong>2. Động từ khuyết thiếu sollen:</strong> Du sollst regelmäßig Sport treiben.'
    ],
    qa: [
      { q: 'Was fehlt dir denn?', a: 'Ich habe Husten, Fieber und Halsschmerzen.' },
      { q: 'Was hat der Arzt gesagt?', a: 'Ich soll drei Tage im Bett bleiben und Tee trinken.' },
      { q: 'Wie wünscht man Gesundheit?', a: 'Gute Besserung! Werde bald wieder gesund!' }
    ],
    phonetik: 'Phát âm phụ âm kép /ts/ trong Arzt, Arztbesuch và âm /h/ thở mạnh trong Hals, Halsschmerzen, Husten.',
    dialog: [
      { speaker: 'Arzt', text: 'Guten Tag! Was fehlt dir denn, Paul?' },
      { speaker: 'Paul', text: 'Guten Tag, Herr Doktor. Mir tut der Hals weh und ich habe Fieber.' },
      { speaker: 'Arzt', text: 'Öffne bitte den Mund. Du hast eine Erkältung. Trink viel warmen Tee und nimm diesen Hustensaft!' }
    ],
    quiz: {
      qName: 'q_unit8',
      qText: 'Mệnh lệnh của động từ "trinken" (uống) ở ngôi "du" là gì?',
      options: [
        { label: 'A. Trink!', val: 'A' },
        { label: 'B. Trinkst!', val: 'B' },
        { label: 'C. Trinke du!', val: 'C' }
      ],
      correct: 'A',
      expl: 'Mệnh lệnh ngôi du bỏ đại từ du và bỏ đuôi -st $\rightarrow$ Trink!.'
    }
  },
  {
    id: 'unit-9',
    num: 9,
    tag: 'Tập 2 • Einheit 9',
    titleDe: 'Einheit 9: Meine Lieblingsjahreszeit',
    titleVn: 'Mùa yêu thích của tôi',
    audioText: 'Einheit 9: Meine Lieblingsjahreszeit. die Jahreszeit, die Sonne, sonnig, der Regen, regnerisch, der Ausflug, die Sonnencreme, wechselhaft, müssen, dürfen. Welche Jahreszeit magst du? Es ist sonnig, aber nicht so heiß. Im Sommer dürfen wir schwimmen gehen.',
    vocab: [
      { de: 'die Jahreszeit', vn: 'mùa trong năm' },
      { de: 'die Sonne / sonnig', vn: 'mặt trời / có nắng' },
      { de: 'der Regen / regnerisch', vn: 'cơn mưa / có mưa' },
      { de: 'der Ausflug', vn: 'chuyến dã ngoại' },
      { de: 'die Sonnencreme', vn: 'kem chống nắng' },
      { de: 'wechselhaft', vn: 'thời tiết thay đổi thất thường' },
      { de: 'müssen', vn: 'phải (bắt buộc)' },
      { de: 'dürfen', vn: 'được phép (cho phép)' }
    ],
    grammarTitle: 'Giới từ chỉ thời gian (am, um, vor, nach, für, von... bis...) & Modalverben',
    grammarRules: [
      '<strong>1. Giới từ chỉ thời gian:</strong>',
      '- am: đi với ngày, thứ, buổi (am Montag, am Nachmittag).',
      '- um: đi với giờ (um 8 Uhr).',
      '- im: đi với tháng, mùa (im Sommer, im Winter, im Juli).',
      '- von... bis...: từ... đến... (von Juni bis August).',
      '<strong>2. Động từ khuyết thiếu:</strong> müssen (phải), dürfen (được phép), sollen (nên).'
    ],
    qa: [
      { q: 'Welche Jahreszeit magst du am liebsten?', a: 'Ich mag den Sommer, denn da haben wir Ferien.' },
      { q: 'Wie ist das Wetter heute?', a: 'Es ist sonnig, warm und der Himmel ist blau.' },
      { q: 'Dürft ihr im See schwimmen?', a: 'Ja, im Sommer dürfen wir dort schwimmen gehen.' }
    ],
    phonetik: 'Phát âm biến âm Umlaut /yː/ trong Frühling, /œ/ trong Sommer và phụ âm rung lưỡi /r/ trong Regen, regnerisch.',
    dialog: [
      { speaker: 'Hannah', text: 'Welche Jahreszeit gefällt dir am besten, Max?' },
      { speaker: 'Max', text: 'Ich liebe den Herbst. Die Blätter sind bunt und es ist nicht zu heiß.' },
      { speaker: 'Hannah', text: 'Ich mag lieber den Sommer, weil wir da oft Ausflüge an den See machen.' }
    ],
    quiz: {
      qName: 'q_unit9',
      qText: 'Điền giới từ chỉ thời gian thích hợp: "___ Sommer ist es sonnig und warm."',
      options: [
        { label: 'A. Im', val: 'A' },
        { label: 'B. Am', val: 'B' },
        { label: 'C. Um', val: 'C' }
      ],
      correct: 'A',
      expl: 'Đi với mùa (Sommer, Winter, Frühling, Herbst) trong tiếng Đức dùng giới từ "im" (in dem).'
    }
  },
  {
    id: 'unit-10',
    num: 10,
    tag: 'Tập 2 • Einheit 10',
    titleDe: 'Einheit 10: Mein Museumsbesuch',
    titleVn: 'Chuyến thăm viện bảo tàng',
    audioText: 'Einheit 10: Mein Museumsbesuch. das Museum, die Kasse, das Ticket, kostenlos, der Eingang, der Ausgang, das Erdgeschoss, war, hatte, ob. Ein Ticket für Schüler kostet 10.000 Dong. Ich möchte fragen, ob wir Fotos machen dürfen. Erzähl mal, wie dein Museumsbesuch war.',
    vocab: [
      { de: 'das Museum', vn: 'viện bảo tàng' },
      { de: 'die Kasse', vn: 'quầy thanh toán, quầy vé' },
      { de: 'das Ticket', vn: 'vé vào cửa' },
      { de: 'kostenlos', vn: 'miễn phí' },
      { de: 'der Eingang / Ausgang', vn: 'lối vào / lối ra' },
      { de: 'das Erdgeschoss', vn: 'tầng trệt' },
      { de: 'war / hatte', vn: 'đã là / đã có (quá khứ)' },
      { de: 'ob', vn: 'liệu rằng (câu hỏi gián tiếp)' }
    ],
    grammarTitle: 'Câu hỏi gián tiếp (W-Frage & liên từ "ob") & Thì quá khứ đơn Präteritum',
    grammarRules: [
      '<strong>1. Câu hỏi gián tiếp (Indirekte Fragesätze):</strong> Động từ chia luôn đứng ở CUỐI CÙNG:',
      '- Có từ để hỏi: "Ich möchte wissen / Erzähl mal, + W-Frage + ... + Verb chia" (Erzähl mal, wie dein Museumsbesuch war).',
      '- Không có từ để hỏi (Yes/No): Dùng liên từ "ob" (Ich möchte fragen, ob wir Fotos machen dürfen).',
      '<strong>2. Quá khứ đơn của sein và haben:</strong> sein $\rightarrow$ war (ich war, er war); haben $\rightarrow$ hatte (ich hatte, er hatte).'
    ],
    qa: [
      { q: 'Wie viel kostet ein Ticket für Schüler?', a: 'Ein Ticket für Schüler kostet 10.000 Dong.' },
      { q: 'Darf man im Museum Fotos machen?', a: 'Ich frage an der Kasse, ob wir Fotos machen dürfen.' },
      { q: 'Wie war dein Museumsbesuch gestern?', a: 'Es war sehr interessant und lehrreich.' }
    ],
    phonetik: 'Phát âm âm đôi /aʊ/ trong Ausgang và nguyên âm mở /ɛ/ trong Erdgeschoss, Eintrittskarte.',
    dialog: [
      { speaker: 'Tim', text: 'Entschuldigung, wie viel kostet der Eintritt für Schüler?' },
      { speaker: 'Kassierer', text: 'Für Schüler ist der Eintritt heute kostenlos.' },
      { speaker: 'Tim', text: 'Toll! Darf man drinnen fotografieren?' },
      { speaker: 'Kassierer', text: 'Ja, aber bitte ohne Blitzlicht.' }
    ],
    quiz: {
      qName: 'q_unit10',
      qText: 'Trong câu hỏi gián tiếp không có từ để hỏi, ta dùng liên từ nào để liên kết?',
      options: [
        { label: 'A. ob', val: 'A' },
        { label: 'B. dass', val: 'B' },
        { label: 'C. weil', val: 'C' }
      ],
      correct: 'A',
      expl: 'Liên từ ob (liệu rằng có... không) dùng để nối câu hỏi gián tiếp dạng Yes/No.'
    }
  }
];

// Read template structure from tiengduc_4.html to ensure exact parity
console.log('Total units to render:', units.length);

// Generate full HTML
let html = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Tiếng Đức Lớp 6 (Start &amp; 10 Einheiten) - Deutsch 6 | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  
  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            dark: {
              bg: '#0A0B14',
              surface: '#121422',
              card: '#1B1E34'
            }
          }
        }
      }
    };
  </script>

  <!-- FontAwesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <meta name="codehub-activity-name" content="Khóa Học Tiếng Đức Lớp 6">

  <style>
    .sidebar-scroll::-webkit-scrollbar { width: 4px; }
    .sidebar-scroll::-webkit-scrollbar-thumb { background: #dc2626; border-radius: 4px; }
    .german-hero-bg {
      background: radial-gradient(circle at 10% 20%, rgba(220, 38, 38, 0.12) 0%, transparent 40%),
                  radial-gradient(circle at 90% 80%, rgba(245, 158, 11, 0.12) 0%, transparent 40%),
                  radial-gradient(circle at 50% 50%, rgba(17, 24, 39, 0.08) 0%, transparent 50%);
    }
    .vocab-chip {
      transition: all 0.2s ease;
    }
    .vocab-chip:hover {
      transform: translateY(-2px);
    }
    .german-flag-gradient {
      background: linear-gradient(135deg, #111827 0%, #dc2626 50%, #f59e0b 100%);
    }
  </style>
</head>
<body class="bg-gray-50 dark:bg-dark-bg text-gray-800 dark:text-gray-100 font-sans min-h-screen flex flex-col transition-colors duration-200">

  <!-- Mobile Drawer Backdrop -->
  <div id="drawer-backdrop" onclick="toggleDrawer()" class="fixed inset-0 bg-black/50 z-40 hidden lg:hidden backdrop-blur-sm transition-opacity"></div>

  <!-- Mobile Drawer Navigation -->
  <div id="mobile-drawer" class="fixed top-0 left-0 bottom-0 w-80 bg-white dark:bg-dark-surface z-50 transform -translate-x-full transition-transform duration-300 ease-in-out lg:hidden flex flex-col p-6 shadow-2xl border-r border-gray-100 dark:border-gray-800">
    <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
      <div class="flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg german-flag-gradient flex items-center justify-center text-white font-black text-sm">
          <i class="fa-solid fa-flag"></i>
        </span>
        <span class="font-bold text-gray-900 dark:text-white text-base">Tiếng Đức 6 Chi Tiết</span>
      </div>
      <button onclick="toggleDrawer()" class="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <div class="flex-1 overflow-y-auto sidebar-scroll py-4 space-y-2 text-xs">
      <a href="#tap-1" onclick="toggleDrawer()" class="block px-3 py-2 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 font-bold">
        I. Tập Một (Start &amp; Einheit 1–5)
      </a>

      <div class="pt-1 font-bold text-gray-400 uppercase tracking-wider text-[10px] pl-2">Chủ đề Tập 1</div>
      <a href="#unit-einfuehrung" onclick="toggleDrawer()" class="block py-0.5 pl-3 text-gray-600 dark:text-gray-300 hover:text-red-600">Start. Ich bin neu an der Schule</a>
      <a href="#unit-1" onclick="toggleDrawer()" class="block py-0.5 pl-3 text-gray-600 dark:text-gray-300 hover:text-red-600">Einheit 1. Meine Hobbys</a>
      <a href="#unit-2" onclick="toggleDrawer()" class="block py-0.5 pl-3 text-gray-600 dark:text-gray-300 hover:text-red-600">Einheit 2. Meine Familie</a>
      <a href="#unit-3" onclick="toggleDrawer()" class="block py-0.5 pl-3 text-gray-600 dark:text-gray-300 hover:text-red-600">Einheit 3. Meine Sprachen</a>
      <a href="#unit-4" onclick="toggleDrawer()" class="block py-0.5 pl-3 text-gray-600 dark:text-gray-300 hover:text-red-600">Einheit 4. Mein Zuhause</a>
      <a href="#unit-5" onclick="toggleDrawer()" class="block py-0.5 pl-3 text-gray-600 dark:text-gray-300 hover:text-red-600">Einheit 5. Mein Geburtstag</a>

      <a href="#tap-2" onclick="toggleDrawer()" class="block px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-bold mt-2">
        II. Tập Hai (Einheit 6–10)
      </a>

      <div class="pt-1 font-bold text-gray-400 uppercase tracking-wider text-[10px] pl-2">Chủ đề Tập 2</div>
      <a href="#unit-6" onclick="toggleDrawer()" class="block py-0.5 pl-3 text-gray-600 dark:text-gray-300 hover:text-red-600">Einheit 6. Mein Restaurantbesuch</a>
      <a href="#unit-7" onclick="toggleDrawer()" class="block py-0.5 pl-3 text-gray-600 dark:text-gray-300 hover:text-red-600">Einheit 7. Meine Lieblingssendung</a>
      <a href="#unit-8" onclick="toggleDrawer()" class="block py-0.5 pl-3 text-gray-600 dark:text-gray-300 hover:text-red-600">Einheit 8. Mein Arztbesuch</a>
      <a href="#unit-9" onclick="toggleDrawer()" class="block py-0.5 pl-3 text-gray-600 dark:text-gray-300 hover:text-red-600">Einheit 9. Meine Lieblingsjahreszeit</a>
      <a href="#unit-10" onclick="toggleDrawer()" class="block py-0.5 pl-3 text-gray-600 dark:text-gray-300 hover:text-red-600">Einheit 10. Mein Museumsbesuch</a>

      <div class="pt-2 font-bold text-gray-400 uppercase tracking-wider text-[10px] pl-2">Hệ Thống Tổng Hợp</div>
      <a href="#kien-thuc-bat-buoc" onclick="toggleDrawer()" class="block py-1 pl-3 text-gray-600 dark:text-gray-300 hover:text-red-600">III. 18 Trọng tâm bắt buộc</a>
      <a href="#noi-dung-khong-bo" onclick="toggleDrawer()" class="block py-1 pl-3 text-gray-600 dark:text-gray-300 hover:text-red-600">IV. Tiêu chuẩn lọc kiến thức</a>
      <a href="#chi-tiet-lektion" onclick="toggleDrawer()" class="block py-1 pl-3 text-gray-600 dark:text-gray-300 hover:text-red-600">V. Chi tiết từng Lektion</a>
      <a href="#dinh-huong-kiem-tra" onclick="toggleDrawer()" class="block py-1 pl-3 text-gray-600 dark:text-gray-300 hover:text-red-600">VI. Định hướng &amp; Thi Trạng Nguyên</a>
    </div>

    <div class="pt-3 border-t border-gray-100 dark:border-gray-800">
      <button onclick="openCertificationModal(); toggleDrawer();" class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-red-500/20">
        <i class="fa-solid fa-award"></i>
        <span>Hội Thi Tiếng Đức 6 (60:00)</span>
      </button>
    </div>
  </div>

  <!-- Top Navigation Bar -->
  <header class="sticky top-0 z-30 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Brand & Mobile Toggle -->
      <div class="flex items-center gap-3">
        <button onclick="toggleDrawer()" class="lg:hidden p-2 rounded-xl bg-gray-50 dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
        <a href="../index.html" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-2xl german-flag-gradient flex items-center justify-center text-white font-black text-lg shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-flag"></i>
          </div>
          <div class="hidden sm:block">
            <span class="text-sm font-black bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">TIẾNG ĐỨC 6</span>
            <span class="block text-[10px] font-semibold text-gray-400">Deutsch für die 6. Klasse &bull; GDPT 2018</span>
          </div>
        </a>
      </div>

      <!-- Quick Jump Grade 6 Links -->
      <div class="hidden md:flex items-center gap-1.5 overflow-x-auto py-1 text-xs font-semibold">
        <a href="toan_6.html" class="px-2.5 py-1 rounded-lg text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40 flex items-center gap-1 transition">
          <i class="fa-solid fa-calculator"></i> Toán 6
        </a>
        <a href="nguvan_6.html" class="px-2.5 py-1 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center gap-1 transition">
          <i class="fa-solid fa-book-open"></i> Ngữ Văn 6
        </a>
        <a href="tienganh_6.html" class="px-2.5 py-1 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 flex items-center gap-1 transition">
          <i class="fa-solid fa-language"></i> Tiếng Anh 6
        </a>
        <a href="tiengduc_6.html" class="px-2.5 py-1 rounded-lg bg-red-600 text-white font-bold flex items-center gap-1 shadow-sm">
          <i class="fa-solid fa-flag"></i> Tiếng Đức 6
        </a>
        <a href="tiengphap_6.html" class="px-2.5 py-1 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 flex items-center gap-1 transition">
          <i class="fa-solid fa-tower-observation"></i> Tiếng Pháp 6
        </a>
        <a href="tiengtrung_6.html" class="px-2.5 py-1 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 flex items-center gap-1 transition">
          <i class="fa-solid fa-dragon"></i> Tiếng Trung 6
        </a>
        <a href="khtn_6.html" class="px-2.5 py-1 rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 flex items-center gap-1 transition">
          <i class="fa-solid fa-atom"></i> KHTN 6
        </a>
        <a href="lsdl_6.html" class="px-2.5 py-1 rounded-lg text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40 flex items-center gap-1 transition">
          <i class="fa-solid fa-map-location-dot"></i> Sử Địa 6
        </a>
        <a href="tinhoc_6.html" class="px-2.5 py-1 rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 flex items-center gap-1 transition">
          <i class="fa-solid fa-laptop-code"></i> Tin Học 6
        </a>
      </div>

      <!-- Action Tools -->
      <div class="flex items-center gap-2">
        <button id="theme-toggle" class="p-2.5 rounded-xl bg-gray-50 dark:bg-dark-card hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition" title="Đổi giao diện Sáng / Tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>

        <button onclick="openCertificationModal()" class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:opacity-90 text-white font-bold text-xs flex items-center gap-2 shadow-sm shadow-red-500/20 transition">
          <i class="fa-solid fa-award"></i>
          <span class="hidden sm:inline">Hội Thi Trạng Nguyên</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">

      <!-- Left Sidebar (Desktop) -->
      <aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 bg-white dark:bg-dark-surface p-5 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
          <div class="flex items-center gap-2.5 pb-3 border-b border-gray-100 dark:border-gray-800">
            <div class="w-8 h-8 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 flex items-center justify-center font-bold">
              <i class="fa-solid fa-book-bookmark"></i>
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400">Mục lục chi tiết</h3>
              <p class="text-sm font-black text-gray-900 dark:text-white">Start &amp; 10 Einheiten</p>
            </div>
          </div>

          <nav class="space-y-1 text-xs sidebar-scroll max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
            <a href="#tap-1" class="flex items-center gap-2 px-3 py-2 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 font-bold transition">
              <i class="fa-solid fa-bookmark text-red-500 w-4"></i> I. Tập Một (Start - E5)
            </a>

            <div class="space-y-0.5 pl-2 text-[11px]">
              <a href="#unit-einfuehrung" class="block py-0.5 text-gray-600 dark:text-gray-300 hover:text-red-600 transition">Start. Ich bin neu an der Schule</a>
              <a href="#unit-1" class="block py-0.5 text-gray-600 dark:text-gray-300 hover:text-red-600 transition">Einheit 1. Meine Hobbys</a>
              <a href="#unit-2" class="block py-0.5 text-gray-600 dark:text-gray-300 hover:text-red-600 transition">Einheit 2. Meine Familie</a>
              <a href="#unit-3" class="block py-0.5 text-gray-600 dark:text-gray-300 hover:text-red-600 transition">Einheit 3. Meine Sprachen</a>
              <a href="#unit-4" class="block py-0.5 text-gray-600 dark:text-gray-300 hover:text-red-600 transition">Einheit 4. Mein Zuhause</a>
              <a href="#unit-5" class="block py-0.5 text-gray-600 dark:text-gray-300 hover:text-red-600 transition">Einheit 5. Mein Geburtstag</a>
            </div>

            <a href="#tap-2" class="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-bold transition mt-2">
              <i class="fa-solid fa-bookmark text-amber-500 w-4"></i> II. Tập Hai (Einheit 6–10)
            </a>

            <div class="space-y-0.5 pl-2 text-[11px]">
              <a href="#unit-6" class="block py-0.5 text-gray-600 dark:text-gray-300 hover:text-red-600 transition">Einheit 6. Mein Restaurantbesuch</a>
              <a href="#unit-7" class="block py-0.5 text-gray-600 dark:text-gray-300 hover:text-red-600 transition">Einheit 7. Meine Lieblingssendung</a>
              <a href="#unit-8" class="block py-0.5 text-gray-600 dark:text-gray-300 hover:text-red-600 transition">Einheit 8. Mein Arztbesuch</a>
              <a href="#unit-9" class="block py-0.5 text-gray-600 dark:text-gray-300 hover:text-red-600 transition">Einheit 9. Meine Lieblingsjahreszeit</a>
              <a href="#unit-10" class="block py-0.5 text-gray-600 dark:text-gray-300 hover:text-red-600 transition">Einheit 10. Mein Museumsbesuch</a>
            </div>

            <div class="pt-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-2">
              Hệ Thống Tổng Hợp
            </div>

            <a href="#kien-thuc-bat-buoc" class="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/30 text-gray-700 dark:text-gray-300 font-semibold transition">
              <i class="fa-solid fa-cube text-blue-500 w-4"></i> III. 18 Trọng tâm bắt buộc
            </a>

            <a href="#noi-dung-khong-bo" class="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/30 text-gray-700 dark:text-gray-300 font-semibold transition">
              <i class="fa-solid fa-shield-halved text-emerald-500 w-4"></i> IV. Tiêu chuẩn lọc kiến thức
            </a>

            <a href="#chi-tiet-lektion" class="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/30 text-gray-700 dark:text-gray-300 font-semibold transition">
              <i class="fa-solid fa-list-check text-purple-500 w-4"></i> V. Chi tiết từng Lektion
            </a>

            <a href="#dinh-huong-kiem-tra" class="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/30 text-gray-700 dark:text-gray-300 font-semibold transition">
              <i class="fa-solid fa-clipboard-check text-amber-500 w-4"></i> VI. Định hướng kiểm tra
            </a>
          </nav>

          <div class="pt-3 border-t border-gray-100 dark:border-gray-800">
            <button onclick="openCertificationModal()" class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm shadow-red-500/20 transition">
              <i class="fa-solid fa-award"></i>
              <span>Trạng Nguyên Tiếng Đức 6</span>
            </button>
          </div>
        </div>
      </aside>

      <!-- Right Column: Main Content -->
      <div class="lg:col-span-3 space-y-12">
        
        <!-- Hero Section -->
        <div class="p-6 sm:p-8 rounded-3xl german-hero-bg bg-white dark:bg-dark-surface border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div class="space-y-3">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-300 text-xs font-bold">
                <i class="fa-solid fa-flag"></i> Tiếng Đức Lớp 6 (Deutsch für die 6. Klasse) &bull; GDPT 2018 &amp; CEFR A1.2
              </div>
              <h2 class="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-tight">
                Tiếng Đức Lớp 6: Thiết Kế Chi Tiết Từng Bài (Start &amp; 10 Einheiten)
              </h2>
              <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Cung cấp trọn vẹn kiến thức chuyên sâu <strong>10 Chủ đề &amp; các Lektionen chi tiết</strong> từ Start đến Einheit 10: hệ thống từ vựng kèm phát âm bấm nghe bản ngữ Đức (Web Speech API <code>de-DE</code>), 18 nhóm ngữ pháp bắt buộc, mẫu câu hỏi – đáp, ngữ âm Phonetik, hội thoại mẫu thực hành và câu hỏi kiểm tra nhanh từng bài.
              </p>
              <div class="flex flex-wrap items-center gap-2 pt-1">
                <span class="px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-bold border border-red-200 dark:border-red-800">
                  <i class="fa-solid fa-book mr-1"></i> Start + 10 Einheiten
                </span>
                <span class="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800">
                  <i class="fa-solid fa-headphones mr-1"></i> Ngữ âm Phonetik
                </span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800">
                  <i class="fa-solid fa-cube mr-1"></i> 18 Ngữ Pháp Trọng Tâm
                </span>
                <span class="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-bold border border-purple-200 dark:border-purple-800">
                  <i class="fa-solid fa-award mr-1"></i> Exam 60 Phút
                </span>
              </div>
            </div>

            <div class="hidden sm:flex flex-col items-center justify-center p-5 rounded-2xl bg-gradient-to-tr from-red-500/10 via-amber-500/10 to-stone-500/10 border border-red-100 dark:border-red-900/40 text-center">
              <div class="w-16 h-16 rounded-2xl german-flag-gradient text-white flex items-center justify-center text-2xl shadow-lg shadow-red-500/20 mb-2">
                <i class="fa-solid fa-landmark"></i>
              </div>
              <span class="text-xs font-bold text-gray-800 dark:text-gray-200">Deutsch 6</span>
              <span class="text-[10px] text-gray-500">Chuẩn GDPT 2018</span>
            </div>
          </div>
        </div>

        <!-- Vector SVG Infographic: Deutschland & Willkommen in Klasse 6 -->
        <div class="space-y-2">
          <svg viewBox="0 0 800 220" class="w-full h-auto rounded-3xl shadow-sm bg-gradient-to-r from-stone-900 via-neutral-900 to-stone-900 text-white" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="flagD6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#111827"/><stop offset="50%" stop-color="#DC2626"/><stop offset="100%" stop-color="#F59E0B"/>
              </linearGradient>
            </defs>
            <circle cx="90" cy="110" r="70" fill="#DC2626" opacity="0.12"/>
            <circle cx="710" cy="110" r="75" fill="#F59E0B" opacity="0.12"/>
            <text x="400" y="45" font-size="16" font-weight="900" fill="#FCD34D" text-anchor="middle" letter-spacing="1">
              WILLKOMMEN IN KLASSE 6 &bull; DEUTSCH 6
            </text>
            <text x="400" y="68" font-size="11" fill="#D1D5DB" text-anchor="middle">
              Chương trình Ngoại ngữ 2 THCS &bull; Khung năng lực A1.2 / A2 &bull; 10 Chủ đề cốt lõi
            </text>
            <g transform="translate(60, 90)">
              <rect width="150" height="55" rx="12" fill="#1F2937" stroke="#DC2626" stroke-width="1.5"/>
              <text x="75" y="24" font-size="11" font-weight="bold" fill="#FCA5A5" text-anchor="middle">Start &bull; Schule</text>
              <text x="75" y="42" font-size="10" fill="#E5E7EB" text-anchor="middle">&quot;Ich bin neu&quot;</text>
            </g>
            <g transform="translate(230, 90)">
              <rect width="160" height="55" rx="12" fill="#1F2937" stroke="#F59E0B" stroke-width="1.5"/>
              <text x="80" y="24" font-size="11" font-weight="bold" fill="#FDE68A" text-anchor="middle">Hobbys &amp; Familie</text>
              <text x="80" y="42" font-size="10" fill="#E5E7EB" text-anchor="middle">&quot;Freizeit &amp; weil&quot;</text>
            </g>
            <g transform="translate(410, 90)">
              <rect width="160" height="55" rx="12" fill="#1F2937" stroke="#3B82F6" stroke-width="1.5"/>
              <text x="80" y="24" font-size="11" font-weight="bold" fill="#93C5FD" text-anchor="middle">DACH &amp; Zuhause</text>
              <text x="80" y="42" font-size="10" fill="#E5E7EB" text-anchor="middle">&quot;Wo? + Dativ&quot;</text>
            </g>
            <g transform="translate(590, 90)">
              <rect width="150" height="55" rx="12" fill="#1F2937" stroke="#10B981" stroke-width="1.5"/>
              <text x="75" y="24" font-size="11" font-weight="bold" fill="#6EE7B7" text-anchor="middle">Alltag &amp; Kultur</text>
              <text x="75" y="42" font-size="10" fill="#E5E7EB" text-anchor="middle">&quot;Arzt, Feste, Museum&quot;</text>
            </g>
            <rect x="40" y="165" width="720" height="38" rx="10" fill="#FEF2F2" stroke="#FECACA"/>
            <text x="400" y="188" font-size="11" font-weight="bold" fill="#B91C1C" text-anchor="middle">
              Start &bull; E1. Hobbys &bull; E2. Familie &bull; E3. Sprachen &bull; E4. Zuhause &bull; E5. Geburtstag &bull; E6. Restaurant &bull; E7. Sendung &bull; E8. Arzt &bull; E9. Jahreszeit &bull; E10. Museum
            </text>
          </svg>
        </div>

        <!-- ======================================================== -->
        <!-- PHẦN I: KIẾN THỨC CỐT LÕI – TẬP MỘT (START &amp; EINHEIT 1–5) -->
        <!-- ======================================================== -->
        <section id="tap-1" class="space-y-8 scroll-mt-24">
          <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-surface border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
            <div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-red-500">Band 1</span>
                <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5">I. Tập một – Các chủ đề chính</h3>
              </div>
              <span class="px-3 py-1 rounded-full bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-bold border border-red-200 dark:border-red-800">
                Start &amp; Einheit 1 – 5
              </span>
            </div>

            <!-- Bảng Tổng Quan Tập 1 -->
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr class="border-b border-gray-200 dark:border-gray-700 bg-gray-50/70 dark:bg-dark-card/50 text-gray-600 dark:text-gray-400">
                    <th class="py-3 px-3 font-bold text-center w-28">Bài</th>
                    <th class="py-3 px-4 font-bold w-64">Chủ đề</th>
                    <th class="py-3 px-4 font-bold">Kiến thức cần giữ</th>
                    <th class="py-3 px-3 font-bold text-center w-20">Nghe</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                  <tr class="hover:bg-red-50/30 dark:hover:bg-red-950/20 transition">
                    <td class="py-3 px-3 font-bold text-red-600 dark:text-red-400 text-center whitespace-nowrap">Start</td>
                    <td class="py-3 px-4 font-bold text-gray-900 dark:text-white">Ich bin neu an der Schule – Tôi là học sinh mới</td>
                    <td class="py-3 px-4">Làm quen, chào hỏi, hỏi tên, giới thiệu trường lớp, môn học yêu thích, giờ ra chơi; phát âm unbetontes e (/ə/)</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Start: Ich bin neu an der Schule – Tôi là học sinh mới ở trường')" class="p-1.5 rounded-lg bg-gray-50 dark:bg-dark-card hover:bg-red-50 text-gray-500 hover:text-red-600 transition" title="Nghe tiêu đề">
                        <i class="fa-solid fa-volume-high text-xs"></i>
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-red-50/30 dark:hover:bg-red-950/20 transition">
                    <td class="py-3 px-3 font-bold text-red-600 dark:text-red-400 text-center whitespace-nowrap">Einheit 1</td>
                    <td class="py-3 px-4 font-bold text-gray-900 dark:text-white">Meine Hobbys – Sở thích của tôi</td>
                    <td class="py-3 px-4">Động từ + giới từ: warten auf, sprechen über, helfen bei; danh từ + giới từ: Interesse an; câu lạc bộ và trò chơi nhảy dây</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Einheit 1: Meine Hobbys – Sở thích của tôi')" class="p-1.5 rounded-lg bg-gray-50 dark:bg-dark-card hover:bg-red-50 text-gray-500 hover:text-red-600 transition" title="Nghe tiêu đề">
                        <i class="fa-solid fa-volume-high text-xs"></i>
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-red-50/30 dark:hover:bg-red-950/20 transition">
                    <td class="py-3 px-3 font-bold text-red-600 dark:text-red-400 text-center whitespace-nowrap">Einheit 2</td>
                    <td class="py-3 px-4 font-bold text-gray-900 dark:text-white">Meine Familie – Gia đình tôi</td>
                    <td class="py-3 px-4">Mệnh đề phụ chỉ nguyên nhân với weil (Verb cuối câu); đại từ bất định cách 4 (Akkusativ: einen/keinen, eins/keins); việc nhà</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Einheit 2: Meine Familie – Gia đình tôi')" class="p-1.5 rounded-lg bg-gray-50 dark:bg-dark-card hover:bg-red-50 text-gray-500 hover:text-red-600 transition" title="Nghe tiêu đề">
                        <i class="fa-solid fa-volume-high text-xs"></i>
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-red-50/30 dark:hover:bg-red-950/20 transition">
                    <td class="py-3 px-3 font-bold text-red-600 dark:text-red-400 text-center whitespace-nowrap">Einheit 3</td>
                    <td class="py-3 px-4 font-bold text-gray-900 dark:text-white">Meine Sprachen – Ngôn ngữ của tôi</td>
                    <td class="py-3 px-4">Hình thức số nhiều Pluralformen; liên từ denn, weil, deshalb; chia động từ sprechen; khối quốc gia nói tiếng Đức DACH</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Einheit 3: Meine Sprachen – Ngôn ngữ của tôi')" class="p-1.5 rounded-lg bg-gray-50 dark:bg-dark-card hover:bg-red-50 text-gray-500 hover:text-red-600 transition" title="Nghe tiêu đề">
                        <i class="fa-solid fa-volume-high text-xs"></i>
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-red-50/30 dark:hover:bg-red-950/20 transition">
                    <td class="py-3 px-3 font-bold text-red-600 dark:text-red-400 text-center whitespace-nowrap">Einheit 4</td>
                    <td class="py-3 px-4 font-bold text-gray-900 dark:text-white">Mein Zuhause – Nhà của tôi</td>
                    <td class="py-3 px-4">Cụm từ chỉ vị trí: Giới từ 2 cách đi với Dativ (Wo?: in, an, auf, neben, hinter, über, unter, vor, zwischen); động từ stehen, liegen, sitzen, hängen</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Einheit 4: Mein Zuhause – Nhà của tôi')" class="p-1.5 rounded-lg bg-gray-50 dark:bg-dark-card hover:bg-red-50 text-gray-500 hover:text-red-600 transition" title="Nghe tiêu đề">
                        <i class="fa-solid fa-volume-high text-xs"></i>
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-red-50/30 dark:hover:bg-red-950/20 transition">
                    <td class="py-3 px-3 font-bold text-red-600 dark:text-red-400 text-center whitespace-nowrap">Einheit 5</td>
                    <td class="py-3 px-4 font-bold text-gray-900 dark:text-white">Mein Geburtstag – Sinh nhật của tôi</td>
                    <td class="py-3 px-4">Động từ đi với Dativ: danken, gefallen, gratulieren; số thứ tự Ordinalzahlen (am 1. ersten, am 3. dritten...); ngày tháng và lời chúc mừng</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Einheit 5: Mein Geburtstag – Sinh nhật của tôi')" class="p-1.5 rounded-lg bg-gray-50 dark:bg-dark-card hover:bg-red-50 text-gray-500 hover:text-red-600 transition" title="Nghe tiêu đề">
                        <i class="fa-solid fa-volume-high text-xs"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- ======================================================== -->
        <!-- PHẦN II: KIẾN THỨC CỐT LÕI – TẬP HAI (EINHEIT 6–10) -->
        <!-- ======================================================== -->
        <section id="tap-2" class="space-y-8 scroll-mt-24">
          <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-surface border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
            <div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-amber-500">Band 2</span>
                <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5">II. Tập hai – Các chủ đề chính</h3>
              </div>
              <span class="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800">
                Einheit 6 – 10
              </span>
            </div>

            <!-- Bảng Tổng Quan Tập 2 -->
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr class="border-b border-gray-200 dark:border-gray-700 bg-gray-50/70 dark:bg-dark-card/50 text-gray-600 dark:text-gray-400">
                    <th class="py-3 px-3 font-bold text-center w-28">Bài</th>
                    <th class="py-3 px-4 font-bold w-64">Chủ đề</th>
                    <th class="py-3 px-4 font-bold">Kiến thức cần giữ</th>
                    <th class="py-3 px-3 font-bold text-center w-20">Nghe</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                  <tr class="hover:bg-amber-50/30 dark:hover:bg-amber-950/20 transition">
                    <td class="py-3 px-3 font-bold text-amber-600 dark:text-amber-400 text-center whitespace-nowrap">Einheit 6</td>
                    <td class="py-3 px-4 font-bold text-gray-900 dark:text-white">Mein Restaurantbesuch – Đi ăn nhà hàng</td>
                    <td class="py-3 px-4">Đại từ nhân xưng thay thế ở Nominativ (der $\rightarrow$ er, die $\rightarrow$ sie, das $\rightarrow$ es); thao tác chế biến công thức nấu ăn; gọi món &amp; thanh toán</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Einheit 6: Mein Restaurantbesuch – Đi ăn nhà hàng')" class="p-1.5 rounded-lg bg-gray-50 dark:bg-dark-card hover:bg-red-50 text-gray-500 hover:text-red-600 transition" title="Nghe tiêu đề">
                        <i class="fa-solid fa-volume-high text-xs"></i>
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-amber-50/30 dark:hover:bg-amber-950/20 transition">
                    <td class="py-3 px-3 font-bold text-amber-600 dark:text-amber-400 text-center whitespace-nowrap">Einheit 7</td>
                    <td class="py-3 px-4 font-bold text-gray-900 dark:text-white">Meine Lieblingssendung – Chương trình truyền hình yêu thích</td>
                    <td class="py-3 px-4">So sánh hơn (-er als) &amp; so sánh nhất (am -sten); so sánh bất quy tắc (gut/besser/am besten, gern/lieber/am liebsten); động từ tách fernsehen</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Einheit 7: Meine Lieblingssendung – Chương trình truyền hình yêu thích')" class="p-1.5 rounded-lg bg-gray-50 dark:bg-dark-card hover:bg-red-50 text-gray-500 hover:text-red-600 transition" title="Nghe tiêu đề">
                        <i class="fa-solid fa-volume-high text-xs"></i>
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-amber-50/30 dark:hover:bg-amber-950/20 transition">
                    <td class="py-3 px-3 font-bold text-amber-600 dark:text-amber-400 text-center whitespace-nowrap">Einheit 8</td>
                    <td class="py-3 px-4 font-bold text-gray-900 dark:text-white">Mein Arztbesuch – Khám bác sĩ</td>
                    <td class="py-3 px-4">Thể mệnh lệnh Imperativ (ngôi du, ihr, Sie); động từ khuyết thiếu sollen đưa lời khuyên; các bộ phận cơ thể và triệu chứng đau ốm</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Einheit 8: Mein Arztbesuch – Khám bác sĩ')" class="p-1.5 rounded-lg bg-gray-50 dark:bg-dark-card hover:bg-red-50 text-gray-500 hover:text-red-600 transition" title="Nghe tiêu đề">
                        <i class="fa-solid fa-volume-high text-xs"></i>
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-amber-50/30 dark:hover:bg-amber-950/20 transition">
                    <td class="py-3 px-3 font-bold text-amber-600 dark:text-amber-400 text-center whitespace-nowrap">Einheit 9</td>
                    <td class="py-3 px-4 font-bold text-gray-900 dark:text-white">Meine Lieblingsjahreszeit – Mùa yêu thích của tôi</td>
                    <td class="py-3 px-4">Giới từ chỉ thời gian: am, um, vor, nach, für, von... bis...; động từ khuyết thiếu müssen (phải) và dürfen (được phép); thời tiết 4 mùa</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Einheit 9: Meine Lieblingsjahreszeit – Mùa yêu thích của tôi')" class="p-1.5 rounded-lg bg-gray-50 dark:bg-dark-card hover:bg-red-50 text-gray-500 hover:text-red-600 transition" title="Nghe tiêu đề">
                        <i class="fa-solid fa-volume-high text-xs"></i>
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-amber-50/30 dark:hover:bg-amber-950/20 transition">
                    <td class="py-3 px-3 font-bold text-amber-600 dark:text-amber-400 text-center whitespace-nowrap">Einheit 10</td>
                    <td class="py-3 px-4 font-bold text-gray-900 dark:text-white">Mein Museumsbesuch – Chuyến thăm viện bảo tàng</td>
                    <td class="py-3 px-4">Câu hỏi gián tiếp có từ để hỏi (W-Frage) và câu hỏi Yes/No với liên từ ob; thì quá khứ đơn Präteritum của sein (war) và haben (hatte)</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Einheit 10: Mein Museumsbesuch – Chuyến thăm viện bảo tàng')" class="p-1.5 rounded-lg bg-gray-50 dark:bg-dark-card hover:bg-red-50 text-gray-500 hover:text-red-600 transition" title="Nghe tiêu đề">
                        <i class="fa-solid fa-volume-high text-xs"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- ======================================================== -->
        <!-- PHẦN III: CHI TIẾT NHỮNG KIẾN THỨC BẮT BUỘC GIỮ LẠI -->
        <!-- ======================================================== -->
        <section id="kien-thuc-bat-buoc" class="space-y-6 scroll-mt-24">
          <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-surface border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
            <div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-blue-500">Grammatik &amp; Kommunikation</span>
                <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5">III. Chi tiết những kiến thức bắt buộc giữ lại</h3>
              </div>
              <span class="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800">
                18 Nhóm Trọng Tâm
              </span>
            </div>

            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Dưới đây là 18 nhóm ngữ pháp và giao tiếp nền tảng của chương trình Tiếng Đức Lớp 6:
            </p>

            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr class="border-b border-gray-200 dark:border-gray-700 bg-gray-50/70 dark:bg-dark-card/50 text-gray-600 dark:text-gray-400">
                    <th class="py-3 px-3 font-bold text-center w-12">STT</th>
                    <th class="py-3 px-4 font-bold w-52">Nhóm kiến thức</th>
                    <th class="py-3 px-4 font-bold">Nội dung và ví dụ</th>
                    <th class="py-3 px-3 font-bold text-center w-28">Nghe mẫu</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">1</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Ngữ âm unbetontes e</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">spiele, heiße, Pause, Schule, Name (/ə/)</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('spiele, heiße, Pause, Schule, Name')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">2</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Động từ + Giới từ cố định</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">warten auf (+ Akk), sprechen über (+ Akk), helfen bei (+ Dat)</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('warten auf, sprechen über, helfen bei')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">3</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Mệnh đề phụ với "weil"</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">Wir basteln oft zusammen, weil er das gut kann.</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Wir basteln oft zusammen, weil er das gut kann.')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">4</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Đại từ bất định (Akkusativ)</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">einen/keinen (đực), eine/keine (cái), eins/keins (trung)</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Möchtest du einen Apfel? Nein, ich möchte keinen.')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">5</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Chia động từ sprechen</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">ich spreche, du sprichst, er spricht, wir sprechen</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('ich spreche, du sprichst, er spricht, wir sprechen')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">6</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Liên từ: denn, weil, deshalb</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">denn (vị trí 0), weil (Verb cuối), deshalb (đảo ngữ V2)</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Chi ist neu, deshalb spricht sie wenig Deutsch.')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">7</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Giới từ nơi chốn + Dativ</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">in, an, auf, neben, hinter, über, unter, vor, zwischen (Wo?)</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Das Regal hängt über dem Schreibtisch.')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">8</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Động từ chỉ vị trí trạng thái</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">stehen (đứng), liegen (nằm), sitzen (ngồi), hängen (treo)</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Die Katze sitzt unter dem Baum.')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">9</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Số thứ tự (Ordinalzahlen)</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">am 1. (ersten), am 3. (dritten), am 20. (zwanzigsten)</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Ich habe am dritten Mai Geburtstag.')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">10</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Động từ đi với Dativ</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">danken, gefallen, gratulieren (Ich gratuliere dir!)</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Ich gratuliere dir herzlich zum Geburtstag!')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">11</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Đại từ thay thế ở Nominativ</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">der Bratreis $\rightarrow$ er / der; die Suppe $\rightarrow$ sie; das Schnitzel $\rightarrow$ es</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Wie schmeckt der Bratreis? Er ist sehr lecker.')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">12</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Cấp so sánh hơn (Komparativ)</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">Adjektiv + -er als (freundlicher als, schneller als)</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Schneewittchen ist freundlicher als die Königin.')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">13</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">So sánh bất quy tắc</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">gut $\rightarrow$ besser $\rightarrow$ am besten; gern $\rightarrow$ lieber $\rightarrow$ am liebsten</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('gut, besser, am besten. gern, lieber, am liebsten.')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">14</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Động từ tách fernsehen</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">ich sehe fern, du siehst fern, er sieht fern (e $\rightarrow$ ie)</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Er sieht jeden Abend fern.')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">15</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Thể mệnh lệnh (Imperativ)</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">Trink! (du), Trinkt! (ihr), Trinken Sie! (Sie)</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Trink nicht zu viel kaltes Wasser!')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">16</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Giới từ chỉ thời gian</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">am (ngày/thứ), um (giờ), im (tháng/mùa), von... bis...</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('am Montag, um acht Uhr, im Sommer')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">17</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Quá khứ đơn: war / hatte</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">ich war, er war (sein); ich hatte, er hatte (haben)</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Gestern war ich im Kunstmuseum.')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition">
                    <td class="py-3 px-3 text-center font-bold text-gray-400">18</td>
                    <td class="py-3 px-4 font-bold text-blue-700 dark:text-blue-300">Câu hỏi gián tiếp (ob / W-)</td>
                    <td class="py-3 px-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-white">Ich möchte fragen, ob wir Fotos machen dürfen. (Verb cuối)</td>
                    <td class="py-3 px-3 text-center">
                      <button onclick="speakGerman('Ich möchte fragen, ob wir Fotos machen dürfen.')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 hover:bg-blue-100 text-xs font-semibold inline-flex items-center gap-1 transition">
                        <i class="fa-solid fa-volume-high text-[10px]"></i> Đọc
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- ======================================================== -->
        <!-- PHẦN IV: NHỮNG NỘI DUNG KHÔNG ĐƯỢC BỎ KHI LỌC -->
        <!-- ======================================================== -->
        <section id="noi-dung-khong-bo" class="space-y-6 scroll-mt-24">
          <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-surface border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
            <div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-500">Quy chuẩn học tập</span>
                <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5">IV. Những nội dung không được bỏ khi lọc</h3>
              </div>
              <span class="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                Tiêu Chuẩn Giữ Lại
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-gray-800 space-y-2 hover:border-red-400 transition">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-sm">
                    <i class="fa-solid fa-book-bookmark"></i>
                  </div>
                  <h4 class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">Mỗi Lektion</h4>
                </div>
                <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">Giữ mục tiêu bài học, từ vựng trọng tâm, phân tích ngữ pháp, bảng mẫu câu hỏi - đáp và tình huống giao tiếp thực hành.</p>
              </div>
              <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-gray-800 space-y-2 hover:border-purple-400 transition">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
                    <i class="fa-solid fa-headphones"></i>
                  </div>
                  <h4 class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">Phonetik</h4>
                </div>
                <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">Giữ các nội dung phát âm chuẩn: unbetontes e (/ə/), phụ âm kép /ʃp/, /ʃt/, âm vòm họng /ç/ và /x/, trọng âm từ.</p>
              </div>
              <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-gray-800 space-y-2 hover:border-blue-400 transition">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                    <i class="fa-solid fa-spell-check"></i>
                  </div>
                  <h4 class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">Wortschatz</h4>
                </div>
                <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">Giữ từ vựng thiết yếu kèm mạo từ der/die/das và phát âm giọng chuẩn de-DE qua Web Speech API.</p>
              </div>
              <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-gray-800 space-y-2 hover:border-indigo-400 transition">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
                    <i class="fa-solid fa-cube"></i>
                  </div>
                  <h4 class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">Grammatik</h4>
                </div>
                <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">Giữ công thức 4 cách (Kasus), vị trí động từ trong mệnh đề weil/denn/deshalb, thể mệnh lệnh và động từ khuyết thiếu.</p>
              </div>
              <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-gray-800 space-y-2 hover:border-amber-400 transition">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                    <i class="fa-solid fa-comments"></i>
                  </div>
                  <h4 class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">Kommunikation</h4>
                </div>
                <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">Giữ các đoạn hội thoại thực tế: làm quen, hỏi đường, gọi món ăn, đi khám bệnh, mua vé bảo tàng.</p>
              </div>
              <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-gray-800 space-y-2 hover:border-rose-400 transition">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-sm">
                    <i class="fa-solid fa-circle-check"></i>
                  </div>
                  <h4 class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">Kiểm tra nhanh</h4>
                </div>
                <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">Giữ câu hỏi trắc nghiệm tương tác tự chấm điểm ngay dưới mỗi bài học để củng cố kiến thức tức thì.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ======================================================== -->
        <!-- PHẦN V: BẢN CHI TIẾT THEO TỪNG LEKTION (START & 10 EINHEITEN) -->
        <!-- ======================================================== -->
        <section id="chi-tiet-lektion" class="space-y-8 scroll-mt-24">
          <div class="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-red-500">Chi tiết từng bài học</span>
              <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5">V. Bản chi tiết theo từng Lektion (Start &amp; 10 Einheiten)</h3>
            </div>
            <span class="px-3 py-1 rounded-full bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-bold border border-red-200 dark:border-red-800">
              Toàn diện 11 Đơn vị bài
            </span>
          </div>
`;

// Render each unit in Part V
units.forEach(u => {
  const safeAudio = u.audioText.replace(/'/g, "\\'").replace(/"/g, '&quot;');

  html += `
          <!-- ==================== ${u.titleDe} ==================== -->
          <article id="${u.id}" class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-surface border border-gray-100 dark:border-gray-800 shadow-sm space-y-6 scroll-mt-24">
            <!-- Header -->
            <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-gray-800">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl german-flag-gradient text-white flex items-center justify-center font-black text-xl shadow-md shadow-red-500/20">
                  ${u.num}
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold text-[10px] uppercase tracking-wider">
                      ${u.tag}
                    </span>
                    <span class="text-[11px] font-semibold text-gray-400">Deutsch 6</span>
                  </div>
                  <h3 class="text-lg sm:text-xl font-black text-gray-900 dark:text-white mt-0.5">${u.titleDe}</h3>
                  <p class="text-xs text-red-600 dark:text-red-400 font-semibold">${u.titleVn}</p>
                </div>
              </div>
              <button onclick="speakGerman('${safeAudio}')"
                class="px-3 py-1.5 rounded-xl bg-gray-50 dark:bg-dark-card hover:bg-red-50 text-gray-600 dark:text-gray-300 hover:text-red-600 text-xs font-semibold flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 transition">
                <i class="fa-solid fa-volume-high text-red-500"></i> <span>Nghe đọc bài</span>
              </button>
            </div>

            <!-- 1. Vocabulary Chips -->
            <div class="space-y-2.5">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-spell-check text-red-500"></i> Từ vựng trọng tâm (Bấm để nghe phát âm)
              </h4>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
`;

  u.vocab.forEach(v => {
    const safeWord = v.de.replace(/'/g, "\\'");
    html += `                <div onclick="speakGerman('${safeWord}')" class="vocab-chip p-2.5 rounded-xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 hover:border-red-400 hover:bg-red-50/50 dark:hover:bg-red-950/30 cursor-pointer flex items-center justify-between gap-2 group transition">
                  <div>
                    <span class="font-bold text-gray-900 dark:text-white text-xs sm:text-sm group-hover:text-red-600 dark:group-hover:text-red-400">${v.de}</span>
                    <span class="block text-[11px] text-gray-500 dark:text-gray-400">${v.vn}</span>
                  </div>
                  <i class="fa-solid fa-volume-high text-gray-400 group-hover:text-red-500 text-xs"></i>
                </div>\n`;
  });

  html += `              </div>
            </div>

            <!-- 2. Grammar Rules -->
            <div class="space-y-2.5">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-cube text-blue-500"></i> Ngữ pháp &amp; Cấu trúc bắt buộc: ${u.grammarTitle}
              </h4>
              <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-gray-800 space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
`;

  u.grammarRules.forEach(r => {
    html += `                <p>${r}</p>\n`;
  });

  html += `              </div>
            </div>

            <!-- 3. Question & Answer Patterns -->
            <div class="space-y-2.5">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-comments text-amber-500"></i> Mẫu câu hỏi – đáp &amp; Giao tiếp
              </h4>
              <div class="overflow-x-auto rounded-2xl border border-gray-100 dark:border-gray-800">
                <table class="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr class="bg-gray-50/80 dark:bg-dark-card/60 text-gray-600 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">
                      <th class="py-2.5 px-3 font-bold w-1/2">Câu hỏi &bull; Phát âm</th>
                      <th class="py-2.5 px-3 font-bold w-1/2">Câu trả lời mẫu &bull; Nghĩa</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
`;

  u.qa.forEach(pair => {
    const safeQ = pair.q.replace(/'/g, "\\'");
    const safeA = pair.a.replace(/'/g, "\\'");
    html += `                    <tr class="hover:bg-amber-50/30 dark:hover:bg-amber-950/20 transition">
                      <td class="py-2.5 px-3 font-medium">
                        <div class="flex items-center justify-between gap-2">
                          <span>${pair.q}</span>
                          <button onclick="speakGerman('${safeQ}')" class="p-1 rounded text-gray-400 hover:text-amber-500">
                            <i class="fa-solid fa-volume-high text-xs"></i>
                          </button>
                        </div>
                      </td>
                      <td class="py-2.5 px-3">
                        <div class="flex items-center justify-between gap-2">
                          <span>${pair.a}</span>
                          <button onclick="speakGerman('${safeA}')" class="p-1 rounded text-gray-400 hover:text-amber-500">
                            <i class="fa-solid fa-volume-high text-xs"></i>
                          </button>
                        </div>
                      </td>
                    </tr>\n`;
  });

  html += `                  </tbody>
                </table>
              </div>
            </div>

            <!-- 4. Phonetik -->
            <div class="space-y-2">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-headphones text-purple-500"></i> Ngữ âm Phonetik
              </h4>
              <div class="p-3.5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40 text-xs sm:text-sm text-purple-900 dark:text-purple-300">
                <i class="fa-solid fa-circle-info mr-1.5 text-purple-500"></i> ${u.phonetik}
              </div>
            </div>

            <!-- 5. Sample Dialog -->
            <div class="space-y-2.5">
              <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-users text-emerald-500"></i> Tình huống giao tiếp &amp; Hội thoại mẫu
              </h4>
              <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-gray-800 space-y-2 text-xs sm:text-sm">
`;

  u.dialog.forEach(d => {
    const safeText = d.text.replace(/'/g, "\\'");
    html += `                <div class="flex items-start gap-2">
                  <span class="font-bold text-red-600 dark:text-red-400 w-24 shrink-0">${d.speaker}:</span>
                  <span class="text-gray-800 dark:text-gray-200">${d.text}</span>
                  <button onclick="speakGerman('${safeText}')" class="p-1 text-gray-400 hover:text-red-500 ml-auto shrink-0">
                    <i class="fa-solid fa-volume-high text-xs"></i>
                  </button>
                </div>\n`;
  });

  const q = u.quiz;
  html += `              </div>
            </div>

            <!-- 6. Quick Quiz Item -->
            <div class="p-4 rounded-2xl bg-gray-50/80 dark:bg-dark-card/60 border border-gray-200 dark:border-gray-800 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-red-500 flex items-center gap-1.5">
                  <i class="fa-solid fa-circle-question"></i> Câu hỏi kiểm tra nhanh
                </span>
                <span class="text-[11px] text-gray-400">Chọn đáp án đúng</span>
              </div>
              <p class="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">${q.qText}</p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
`;

  q.options.forEach(opt => {
    html += `                <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                  <input type="radio" name="${q.qName}" value="${opt.val}" class="text-red-600 focus:ring-red-500">
                  <span>${opt.label}</span>
                </label>\n`;
  });

  const safeExpl = q.expl.replace(/'/g, "\\'");
  html += `              </div>
              <div class="flex items-center gap-3 pt-1">
                <button onclick="checkAnswer('${q.qName}', '${q.correct}', '${safeExpl}')" class="px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-sm transition">
                  Kiểm tra đáp án
                </button>
                <div id="${q.qName}_res" class="text-xs font-semibold"></div>
              </div>
            </div>

          </article>
`;
});

// Part VI: Exam & Footer & Scripts
html += `
        </section>

        <!-- ======================================================== -->
        <!-- PHẦN VI: ĐỊNH HƯỚNG KIỂM TRA & HỘI THI TRẠNG NGUYÊN -->
        <!-- ======================================================== -->
        <section id="dinh-huong-kiem-tra" class="space-y-6 scroll-mt-24">
          <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-surface border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
            <div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-amber-500">Khảo sát năng lực</span>
                <h3 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-0.5">VI. Định hướng kiểm tra &amp; Hội thi Trạng Nguyên</h3>
              </div>
              <span class="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800">
                Đánh giá toàn diện
              </span>
            </div>

            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Kỳ thi <strong>Trạng Nguyên Tiếng Đức Lớp 6 (Deutscher Meister 6)</strong> gồm 10 câu hỏi trắc nghiệm kiểm tra toàn diện 18 nhóm ngữ pháp và 10 chủ đề kiến thức. Thời gian làm bài 60:00, tính điểm và trao huy hiệu vinh danh ngay khi hoàn thành.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-red-500/10 via-amber-500/10 to-orange-500/10 border border-red-200 dark:border-red-800/40">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl german-flag-gradient text-white flex items-center justify-center text-xl shadow-md">
                  <i class="fa-solid fa-trophy"></i>
                </div>
                <div>
                  <h4 class="font-bold text-sm text-gray-900 dark:text-white">Hội Thi Trạng Nguyên Tiếng Đức Lớp 6</h4>
                  <p class="text-xs text-gray-500">10 câu hỏi &bull; Thời gian 60:00 &bull; Nhận huy hiệu Deutscher Meister 6</p>
                </div>
              </div>
              <button onclick="openCertificationModal()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:opacity-95 text-white font-bold text-xs shadow-md shadow-red-500/20 transition">
                <i class="fa-solid fa-play mr-1.5"></i> Bắt đầu thi ngay
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>

  <!-- Global Footer -->
  <footer class="bg-white dark:bg-dark-surface border-t border-gray-100 dark:border-gray-800 py-10 transition-colors mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <div class="flex items-center justify-center gap-2">
        <div class="w-8 h-8 rounded-lg german-flag-gradient flex items-center justify-center text-white text-sm shadow-md">
          <i class="fa-solid fa-graduation-cap"></i>
        </div>
        <span class="font-extrabold text-base tracking-tight text-gray-900 dark:text-white">CodeHub Education Platform</span>
      </div>
      <p class="text-xs text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
        Chương trình Tiếng Đức Lớp 6 (Deutsch 6) – Toàn diện hệ thống Start &amp; 10 Einheiten. Tích hợp phát âm chuẩn Web Speech API, âm vị học Phonetik, ngữ pháp 4 cách (Kasus), cấu trúc câu và văn hóa Landeskunde.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-gray-500 dark:text-gray-400 pt-2">
        <a href="../index.html" class="hover:text-red-600 transition">Trang chủ CodeHub</a>
        <span>&bull;</span>
        <a href="toan_6.html" class="hover:text-red-600 transition">Toán 6</a>
        <span>&bull;</span>
        <a href="nguvan_6.html" class="hover:text-red-600 transition">Ngữ Văn 6</a>
        <span>&bull;</span>
        <a href="tienganh_6.html" class="hover:text-red-600 transition">Tiếng Anh 6</a>
        <span>&bull;</span>
        <a href="tiengduc_6.html" class="hover:text-red-600 transition font-bold text-red-600">Tiếng Đức 6</a>
        <span>&bull;</span>
        <a href="tiengphap_6.html" class="hover:text-red-600 transition">Tiếng Pháp 6</a>
        <span>&bull;</span>
        <a href="tiengtrung_6.html" class="hover:text-red-600 transition">Tiếng Trung 6</a>
      </div>
      <div class="text-[11px] text-gray-400 dark:text-gray-600 pt-2">
        &copy; 2026 CodeHub Platform. Tiếng Đức THCS theo Chương trình Giáo dục Phổ thông 2018.
      </div>
    </div>
  </footer>

  <!-- ==================== MODAL HỘI THI TRẠNG NGUYÊN (60:00) ==================== -->
  <div id="certification-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-dark-surface rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-100 dark:border-gray-800">
      
      <!-- Modal Header -->
      <div class="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-red-500/10 via-amber-500/10 to-transparent">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl german-flag-gradient text-white flex items-center justify-center font-black text-lg shadow-md">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <h3 class="font-black text-base sm:text-lg text-gray-900 dark:text-white">Kỳ Thi Trạng Nguyên Tiếng Đức Lớp 6</h3>
            <p class="text-xs text-gray-500">10 câu hỏi trắc nghiệm &bull; Tính giờ 60:00 &bull; Chuẩn A1.2</p>
          </div>
        </div>
        
        <div class="flex items-center gap-3">
          <div class="px-3 py-1.5 rounded-xl bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-mono font-bold text-xs flex items-center gap-1.5">
            <i class="fa-solid fa-stopwatch animate-pulse"></i>
            <span id="examTimer">60:00</span>
          </div>
          <button onclick="closeCertificationModal()" class="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-card transition">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>
      </div>
      
      <!-- Modal Body (Exam Questions) -->
      <div class="flex-1 overflow-y-auto p-6 space-y-6 sidebar-scroll">
        <form id="certification-form" class="space-y-6">
          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2">
            <p class="font-bold text-sm text-gray-900 dark:text-white">Câu 1 (Ngữ âm): Từ nào sau đây có âm "e" cuối phát âm là unbetontes e (/ə/)?</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq1" value="A" class="text-red-600 focus:ring-red-500">
                <span>A. die Schule</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq1" value="B" class="text-red-600 focus:ring-red-500">
                <span>B. der Tee</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq1" value="C" class="text-red-600 focus:ring-red-500">
                <span>C. das Café</span>
              </label>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2">
            <p class="font-bold text-sm text-gray-900 dark:text-white">Câu 2 (Giới từ cố định): "Ich warte ___ den Bus vor der Schule."</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq2" value="A" class="text-red-600 focus:ring-red-500">
                <span>A. auf</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq2" value="B" class="text-red-600 focus:ring-red-500">
                <span>B. an</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq2" value="C" class="text-red-600 focus:ring-red-500">
                <span>C. über</span>
              </label>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2">
            <p class="font-bold text-sm text-gray-900 dark:text-white">Câu 3 (Mệnh đề phụ weil): Vị trí của động từ chia trong mệnh đề với "weil" là:</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq3" value="A" class="text-red-600 focus:ring-red-500">
                <span>A. Cuối cùng của mệnh đề</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq3" value="B" class="text-red-600 focus:ring-red-500">
                <span>B. Đầu tiên sau weil</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq3" value="C" class="text-red-600 focus:ring-red-500">
                <span>C. Vị trí thứ hai</span>
              </label>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2">
            <p class="font-bold text-sm text-gray-900 dark:text-white">Câu 4 (Đại từ bất định): "Möchtest du einen Apfel? – Nein, ich möchte ___."</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq4" value="A" class="text-red-600 focus:ring-red-500">
                <span>A. keinen</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq4" value="B" class="text-red-600 focus:ring-red-500">
                <span>B. keine</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq4" value="C" class="text-red-600 focus:ring-red-500">
                <span>C. keins</span>
              </label>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2">
            <p class="font-bold text-sm text-gray-900 dark:text-white">Câu 5 (Chia động từ): Dạng chia đúng của "sprechen" ở ngôi "du" là:</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq5" value="A" class="text-red-600 focus:ring-red-500">
                <span>A. du sprichst</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq5" value="B" class="text-red-600 focus:ring-red-500">
                <span>B. du sprechst</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq5" value="C" class="text-red-600 focus:ring-red-500">
                <span>C. du sprecht</span>
              </label>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2">
            <p class="font-bold text-sm text-gray-900 dark:text-white">Câu 6 (Giới từ nơi chốn): "Das Regal hängt über ___ Schreibtisch (der Schreibtisch - Dativ)."</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq6" value="A" class="text-red-600 focus:ring-red-500">
                <span>A. dem</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq6" value="B" class="text-red-600 focus:ring-red-500">
                <span>B. den</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq6" value="C" class="text-red-600 focus:ring-red-500">
                <span>C. das</span>
              </label>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2">
            <p class="font-bold text-sm text-gray-900 dark:text-white">Câu 7 (Số thứ tự): "Ich habe am ___ (3.) Mai Geburtstag."</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq7" value="A" class="text-red-600 focus:ring-red-500">
                <span>A. dritten</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq7" value="B" class="text-red-600 focus:ring-red-500">
                <span>B. dreisten</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq7" value="C" class="text-red-600 focus:ring-red-500">
                <span>C. dreiten</span>
              </label>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2">
            <p class="font-bold text-sm text-gray-900 dark:text-white">Câu 8 (So sánh hơn): Dạng so sánh hơn của "gut" (tốt/hay) là:</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq8" value="A" class="text-red-600 focus:ring-red-500">
                <span>A. besser</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq8" value="B" class="text-red-600 focus:ring-red-500">
                <span>B. guter</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq8" value="C" class="text-red-600 focus:ring-red-500">
                <span>C. am besten</span>
              </label>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2">
            <p class="font-bold text-sm text-gray-900 dark:text-white">Câu 9 (Thể mệnh lệnh): Mệnh lệnh của "trinken" ở ngôi "du" là:</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq9" value="A" class="text-red-600 focus:ring-red-500">
                <span>A. Trink!</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq9" value="B" class="text-red-600 focus:ring-red-500">
                <span>B. Trinkst!</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq9" value="C" class="text-red-600 focus:ring-red-500">
                <span>C. Trinke du!</span>
              </label>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 space-y-2">
            <p class="font-bold text-sm text-gray-900 dark:text-white">Câu 10 (Câu hỏi gián tiếp): Trong câu hỏi gián tiếp Yes/No, ta dùng liên từ nào:</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq10" value="A" class="text-red-600 focus:ring-red-500">
                <span>A. ob</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq10" value="B" class="text-red-600 focus:ring-red-500">
                <span>B. dass</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-dark-surface cursor-pointer transition">
                <input type="radio" name="eq10" value="C" class="text-red-600 focus:ring-red-500">
                <span>C. weil</span>
              </label>
            </div>
          </div>
        </form>
        
        <!-- Exam Results Container -->
        <div id="exam-results" class="hidden space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800">
          <div id="exam-badge"></div>
          <h4 class="font-bold text-sm text-gray-800 dark:text-gray-200">Chi tiết kết quả bài làm:</h4>
          <div id="exam-feedback-list" class="space-y-2 text-xs"></div>
        </div>
      </div>
      
      <!-- Modal Footer -->
      <div class="p-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-dark-card/50">
        <button onclick="resetCertificationExam()" class="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-card text-xs font-semibold transition">
          Làm lại bài
        </button>
        <button onclick="submitCertificationExam()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:opacity-95 text-white font-bold text-xs shadow-md shadow-red-500/20 transition">
          Nộp bài &amp; Xem kết quả
        </button>
      </div>

    </div>
  </div>

  <!-- JavaScript Web Speech API & Interactive Tools -->
  <script>
    // Web Speech API Voice synthesis (de-DE)
    function speakGerman(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const cleanText = text.replace(/[\\/\\\\#,+()$~%.'":*?<>{}]/g, ' ');
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'de-DE';
        utterance.rate = 0.85;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
      } else {
        alert('Trình duyệt của bạn hiện chưa hỗ trợ Web Speech API tiếng Đức.');
      }
    }

    // Mobile Drawer Toggle
    function toggleDrawer() {
      const drawer = document.getElementById('mobile-drawer');
      const backdrop = document.getElementById('drawer-backdrop');
      if (drawer.classList.contains('-translate-x-full')) {
        drawer.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
      } else {
        drawer.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
      }
    }

    // Dark/Light Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn?.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    // Quick Quiz Checker
    function checkAnswer(qName, correctVal, explanation) {
      const formElem = document.querySelector('input[name="' + qName + '"]:checked');
      const resElem = document.getElementById(qName + '_res');

      if (!formElem) {
        resElem.className = 'text-xs font-bold text-amber-600 dark:text-amber-400 p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800';
        resElem.innerHTML = '<i class="fa-solid fa-triangle-exclamation mr-1"></i> Vui lòng chọn một đáp án!';
        return;
      }

      if (formElem.value === correctVal) {
        resElem.className = 'text-xs font-bold text-emerald-600 dark:text-emerald-400 p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800';
        resElem.innerHTML = '<i class="fa-solid fa-circle-check mr-1"></i> Chính xác! ' + explanation;
      } else {
        resElem.className = 'text-xs font-bold text-rose-600 dark:text-rose-400 p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800';
        resElem.innerHTML = '<i class="fa-solid fa-circle-xmark mr-1"></i> Chưa chính xác. Đáp án đúng là ' + correctVal + '. ' + explanation;
      }
    }

    // Modal Controls
    function openCertificationModal() {
      document.getElementById('certification-modal').classList.remove('hidden');
    }
    function closeCertificationModal() {
      document.getElementById('certification-modal').classList.add('hidden');
    }

    // Certification Timer (60:00)
    let examSeconds = 60 * 60;
    const timerElem = document.getElementById('examTimer');
    const examTimerInterval = setInterval(function() {
      if (examSeconds <= 0) {
        clearInterval(examTimerInterval);
        submitCertificationExam();
        return;
      }
      examSeconds--;
      const m = Math.floor(examSeconds / 60);
      const s = examSeconds % 60;
      if (timerElem) {
        timerElem.innerText = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
      }
    }, 1000);

    // Correct Answers Map (eq1 -> eq10)
    const examAnswers = {
      eq1: 'A',
      eq2: 'A',
      eq3: 'A',
      eq4: 'A',
      eq5: 'A',
      eq6: 'A',
      eq7: 'A',
      eq8: 'A',
      eq9: 'A',
      eq10: 'A'
    };

    let examSubmitted = false;

    function submitCertificationExam() {
      if (examSubmitted) return;
      examSubmitted = true;
      clearInterval(examTimerInterval);

      let score = 0;
      const form = document.getElementById('certification-form');
      const resultsContainer = document.getElementById('exam-results');
      const badgeElem = document.getElementById('exam-badge');
      const feedbackList = document.getElementById('exam-feedback-list');

      feedbackList.innerHTML = '';

      for (let i = 1; i <= 10; i++) {
        const qName = 'eq' + i;
        const selected = form.querySelector('input[name="' + qName + '"]:checked');
        const correctVal = examAnswers[qName];
        const isRight = selected && selected.value === correctVal;

        if (isRight) score++;

        const item = document.createElement('div');
        item.className = 'p-3 rounded-xl border ' + (isRight ? 'border-green-200 bg-green-50 dark:bg-green-950/20 text-green-900 dark:text-green-200' : 'border-rose-200 bg-rose-50 dark:bg-rose-950/20 text-rose-900 dark:text-rose-200');
        item.innerHTML = '<strong>Câu ' + i + ':</strong> ' + (isRight ? '<i class="fa-solid fa-circle-check text-green-600"></i> Chính xác!' : '<i class="fa-solid fa-circle-xmark text-rose-600"></i> Chưa đúng (Đáp án chính xác là ' + correctVal + ')');
        feedbackList.appendChild(item);
      }

      resultsContainer.classList.remove('hidden');

      if (score >= 8) {
        badgeElem.className = 'p-5 rounded-2xl text-center space-y-2 bg-gradient-to-r from-red-500/20 via-amber-500/20 to-yellow-500/20 border-2 border-amber-500';
        badgeElem.innerHTML = '<div class="text-3xl text-amber-500"><i class="fa-solid fa-crown"></i></div>' +
          '<h4 class="text-lg font-black text-amber-800 dark:text-amber-300">Chúc mừng! Bạn đạt danh hiệu "Trạng Nguyên Tiếng Đức Lớp 6 (Deutscher Meister 6)"!</h4>' +
          '<p class="text-xs text-gray-600 dark:text-gray-300">Điểm số xuất sắc: <strong>' + score + '/10</strong> điểm. Bạn nắm vững kiến thức ngữ pháp, mạo từ và giao tiếp tiếng Đức lớp 6!</p>';
      } else {
        badgeElem.className = 'p-5 rounded-2xl text-center space-y-2 bg-red-50 dark:bg-red-950/30 border border-red-300 dark:border-red-700';
        badgeElem.innerHTML = '<div class="text-2xl text-red-600"><i class="fa-solid fa-thumbs-up"></i></div>' +
          '<h4 class="text-base font-bold text-red-800 dark:text-red-300">Kết quả: ' + score + '/10 điểm</h4>' +
          '<p class="text-xs text-gray-600 dark:text-gray-300">Hãy rà soát các câu chưa đúng và ôn luyện lại các bài học để đạt danh hiệu Trạng nguyên nhé!</p>';
      }

      resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }

    function resetCertificationExam() {
      examSubmitted = false;
      document.getElementById('certification-form').reset();
      document.getElementById('exam-results').classList.add('hidden');
    }
  </script>
</body>
</html>
`;

// Save files
const outPath1 = path.join(__dirname, 'courses', 'tiengduc_6.html');
const outPath2 = path.join(__dirname, 'courses', 'german_6.html');

fs.writeFileSync(outPath1, html, 'utf8');
fs.writeFileSync(outPath2, html, 'utf8');

console.log(`Generated successfully: ${outPath1} (${html.length} bytes)`);
console.log(`Generated successfully alias: ${outPath2} (${html.length} bytes)`);
