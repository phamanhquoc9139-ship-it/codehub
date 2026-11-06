// tiengphap9_exam.js
// 25 Master Questions for Đấu Trường Trạng Nguyên Tiếng Pháp 9 (60:00 Timer)

const examQuestions = [
  {
    q: "Câu 1 (Unité 0): Chọn câu chia đúng thì quá khứ để diễn tả bối cảnh thời tiết trong kỳ nghỉ hè:",
    options: [
      "Il a fait très chaud hier.",
      "Il faisait beau et le ciel était bleu.",
      "Il fera beau demain.",
      "Il fait beau tous les jours."
    ],
    answer: 1,
    explain: "Để miêu tả bối cảnh và thời tiết trong quá khứ, ta dùng thì Imparfait ('Il faisait beau et le ciel était bleu')."
  },
  {
    q: "Câu 2 (Unité 0): Chọn động từ chia đúng ở Passé composé: 'L'année dernière, nous ______ en France pendant trois semaines.'",
    options: [
      "avons voyagé",
      "sommes voyagé",
      "voyagions",
      "voyagerons"
    ],
    answer: 0,
    explain: "Động từ 'voyager' chia ở Passé composé đi với trợ động từ 'avoir': 'nous avons voyagé'."
  },
  {
    q: "Câu 3 (Unité 0): Trong các từ sau, từ nào chứa âm [y] (tròn môi, phát âm như chữ 'u' tiếng Pháp)?",
    options: [
      "musée",
      "vacances",
      "soleil",
      "hôtel"
    ],
    answer: 0,
    explain: "Chữ cái 'u' trong từ 'musée' được phát âm là nguyên âm [y]."
  },
  {
    q: "Câu 4 (Unité 1): Chọn liên từ chỉ mục đích thích hợp: 'Marie Curie a travaillé dur ______ découvrir le radium.'",
    options: [
      "parce que",
      "afin de",
      "depuis",
      "pendant"
    ],
    answer: 1,
    explain: "'Afin de + infinitif' (hoặc 'pour + infinitif') dùng để nêu mục đích khi hai mệnh đề cùng chủ ngữ."
  },
  {
    q: "Câu 5 (Unité 1): Điền từ chỉ thời gian thích hợp: 'Il étudie la biologie à l'université ______ deux ans (và hiện tại vẫn đang học).'",
    options: [
      "il y a",
      "pendant",
      "depuis",
      "pour"
    ],
    answer: 2,
    explain: "Hành động bắt đầu trong quá khứ và vẫn đang tiếp diễn ở hiện tại dùng 'depuis + thời gian'."
  },
  {
    q: "Câu 6 (Unité 1): Câu nào dưới đây diễn tả một thời điểm cách hiện tại trong quá khứ?",
    options: [
      "J'ai rencontré ce chercheur il y a trois jours.",
      "J'étudie avec lui depuis trois jours.",
      "J'ai travaillé pendant trois jours.",
      "Je vais le voir dans trois jours."
    ],
    answer: 0,
    explain: "'Il y a + khoảng thời gian' có nghĩa là 'cách đây...', chỉ thời điểm quá khứ."
  },
  {
    q: "Câu 7 (Unité 1): Hiện tượng 'Liaison' bắt buộc xuất hiện trong cụm từ nào sau đây?",
    options: [
      "un grand savant",
      "les‿enfants",
      "le laboratoire moderne",
      "des microscopes neufs"
    ],
    answer: 1,
    explain: "Mạo từ 'les' kết hợp với danh từ bắt đầu bằng nguyên âm 'enfants' bắt buộc phải nối âm (Liaison): [le.zɑ̃.fɑ̃]."
  },
  {
    q: "Câu 8 (Unité 2): Chọn dạng Conditionnel présent của động từ 'pouvoir' để đưa ra lời đề nghị giúp đỡ lịch sự:",
    options: [
      "Tu peux m'aider ?",
      "Tu pourrais m'aider ?",
      "Tu pouvais m'aider ?",
      "Tu pourras m'aider ?"
    ],
    answer: 1,
    explain: "'Tu pourrais' là dạng Conditionnel présent của 'pouvoir', dùng để yêu cầu/đề nghị một cách lịch sự, tế nhị."
  },
  {
    q: "Câu 9 (Unité 2): Để khuyên một người bạn chuẩn bị trước trận đấu thể thao, ta dùng câu nào?",
    options: [
      "Tu devrais t'échauffer soigneusement.",
      "Tu t'es échauffé hier.",
      "Tu t'échaufferas demain.",
      "Tu dois interdire le match."
    ],
    answer: 0,
    explain: "'Tu devrais + infinitif' là cấu trúc khuyên nhủ lịch sự chuẩn trong tiếng Pháp."
  },
  {
    q: "Câu 10 (Unité 2): Thay thế phần gạch chân bằng đại từ thích hợp: 'Les joueurs pensent <u>à la finale</u>.'",
    options: [
      "Les joueurs en pensent.",
      "Les joueurs la pensent.",
      "Les joueurs y pensent.",
      "Les joueurs lui pensent."
    ],
    answer: 2,
    explain: "'À la finale' là bổ ngữ sự vật đi kèm giới từ 'à', được thay thế bằng đại từ 'y': 'Les joueurs y pensent'."
  },
  {
    q: "Câu 11 (Unité 2): Phẩm chất nào sau đây là yếu tố quan trọng nhất trong các môn thể thao đồng đội như bóng đá, bóng rổ?",
    options: [
      "l'esprit d'équipe",
      "la solitude",
      "la défaite",
      "l'interdiction"
    ],
    answer: 0,
    explain: "'L'esprit d'équipe' có nghĩa là 'tinh thần đồng đội'."
  },
  {
    q: "Câu 12 (Unité 3): Tại quầy bán vé nhà ga, muốn mua một vé khứ hồi đi Lyon, bạn nói thế nào?",
    options: [
      "Je voudrais un aller simple pour Lyon.",
      "Je voudrais un aller-retour pour Lyon, s'il vous plaît.",
      "Tournez à gauche pour aller à Lyon.",
      "Quel beau voyage à Lyon !"
    ],
    answer: 1,
    explain: "'Un aller-retour' là vé khứ hồi (hai chiều)."
  },
  {
    q: "Câu 13 (Unité 3): Chọn tính từ phái sinh từ động từ 'lire' bằng hậu tố '-ible':",
    options: [
      "liable",
      "liseur",
      "lisible",
      "lisoire"
    ],
    answer: 2,
    explain: "Động từ 'lire' kết hợp hậu tố '-ible' tạo thành tính từ 'lisible' (dễ đọc, đọc được)."
  },
  {
    q: "Câu 14 (Unité 3): Tiền tố phủ định nào thích hợp cho tính từ 'patient' (kiên nhẫn)?",
    options: [
      "in- &rarr; inpatient",
      "im- &rarr; impatient",
      "des- &rarr; despatient",
      "mal- &rarr; malpatient"
    ],
    answer: 1,
    explain: "Trước các phụ âm p, b, m, tiền tố phủ định đổi thành 'im-': 'impatient' (mất kiên nhẫn)."
  },
  {
    q: "Câu 15 (Unité 3): Chọn câu cảm thán đúng ngữ pháp với danh từ giống đực số ít 'voyage':",
    options: [
      "Quelle beau voyage !",
      "Quel beau voyage !",
      "Quels beau voyage !",
      "Quelles beau voyage !"
    ],
    answer: 1,
    explain: "'Voyage' là danh từ giống đực số ít, nên tính từ cảm thán là 'Quel'."
  },
  {
    q: "Câu 16 (Unité 4): Thay thế cụm chỉ nơi chốn trong câu: 'Nous allons <u>au cinéma</u> ce soir.'",
    options: [
      "Nous y allons ce soir.",
      "Nous en allons ce soir.",
      "Nous le allons ce soir.",
      "Nous lui allons ce soir."
    ],
    answer: 0,
    explain: "'Au cinéma' chỉ địa điểm đi với 'à', thay thế bằng đại từ nơi chốn 'y': 'Nous y allons ce soir'."
  },
  {
    q: "Câu 17 (Unité 4): Thay thế cụm chỉ nơi chốn xuất phát: 'Elle revient <u>de Paris</u>.'",
    options: [
      "Elle y revient.",
      "Elle en revient.",
      "Elle la revient.",
      "Elle les revient."
    ],
    answer: 1,
    explain: "'De Paris' chỉ nơi chốn xuất phát đi với giới từ 'de', thay thế bằng đại từ 'en': 'Elle en revient'."
  },
  {
    q: "Câu 18 (Unité 4): Trong đoàn làm phim, ai là người trực tiếp viết kịch bản và sáng tác lời thoại?",
    options: [
      "Le réalisateur",
      "Le scénariste",
      "Le producteur",
      "Le cadreur"
    ],
    answer: 1,
    explain: "'Le scénariste' là nhà biên kịch, người sáng tác kịch bản và viết lời thoại cho phim."
  },
  {
    q: "Câu 19 (Unité 4): Trong câu khẩu ngữ 'Ce spectacle est super bien !', từ 'super' có vai trò gì?",
    options: [
      "Phủ định câu",
      "Hỏi nghi vấn",
      "Tăng cường mức độ (phóng đại thân mật)",
      "Chỉ nơi chốn"
    ],
    answer: 2,
    explain: "Trong khẩu ngữ thân mật, 'super', 'hyper', 'trop' được dùng để tăng cường mức độ cao hơn bình thường."
  },
  {
    q: "Câu 20 (Unité 5): Chọn cấu trúc vô nhân xưng đúng để đưa ra lời khuyên bảo mật:",
    options: [
      "Il est recommandé de changer son mot de passe.",
      "Il a recommandé à changer son mot de passe.",
      "C'est recommandant de changer son mot de passe.",
      "Il est recommandé que changer son mot de passe."
    ],
    answer: 0,
    explain: "Cấu trúc vô nhân xưng đưa ra lời khuyên: 'Il est recommandé de + infinitif'."
  },
  {
    q: "Câu 21 (Unité 5): Chọn dạng Conditionnel đúng để diễn đạt giả định tương lai: 'Dans cinquante ans, les voitures ______ (voler) dans le ciel.'",
    options: [
      "volent",
      "volaient",
      "voleront",
      "voleraient"
    ],
    answer: 3,
    explain: "Gốc tương lai 'voler-' kết hợp đuôi imparfait '-aient' cho chủ ngữ 'les voitures' thành 'voleraient' (thể điều kiện giả định)."
  },
  {
    q: "Câu 22 (Unité 5): Cụm từ tiếng Pháp nào chỉ 'thời gian sử dụng màn hình điện tử' cần được giới hạn hợp lý?",
    options: [
      "le mot de passe",
      "le temps d'écran",
      "le moteur de recherche",
      "le faux profil"
    ],
    answer: 1,
    explain: "'Le temps d'écran' là thời gian nhìn/sử dụng màn hình điện thoại, máy tính."
  },
  {
    q: "Câu 23 (Unité 6): Điền đại từ sở hữu thích hợp: 'Ma photo est très claire, mais ______ (ta photo) est un peu floue.'",
    options: [
      "le tien",
      "la tienne",
      "les tiens",
      "les tiennes"
    ],
    answer: 1,
    explain: "'Photo' là danh từ giống cái số ít, nên đại từ sở hữu thay thế cho 'ta photo' là 'la tienne'."
  },
  {
    q: "Câu 24 (Unité 6): Điền đại từ sở hữu thay thế cho 'notre projet': 'Leur projet est intéressant, mais ______ est plus innovant.'",
    options: [
      "le nôtre",
      "la nôtre",
      "les nôtres",
      "notre"
    ],
    answer: 0,
    explain: "'Projet' là danh từ giống đực số ít của chúng tôi, đại từ sở hữu tương ứng là 'le nôtre'."
  },
  {
    q: "Câu 25 (Unité 6): Khi bạn muốn yêu cầu người đối thoại nói rõ hơn hoặc giải thích chi tiết ý kiến, câu nào là phù hợp nhất?",
    options: [
      "Tu peux préciser ?",
      "Il est interdit de parler.",
      "Prenez un billet aller-retour.",
      "C'est impossible !"
    ],
    answer: 0,
    explain: "'Tu peux préciser ?' (Bạn có thể nói rõ hơn được không?) là mẫu câu giao tiếp chuẩn để yêu cầu làm sáng tỏ thông tin."
  }
];

module.exports = { examQuestions };
