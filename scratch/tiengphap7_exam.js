// Bộ 40 câu hỏi trắc nghiệm Đấu trường Trạng Nguyên Tiếng Pháp 7 (Le Lauréat - 60 phút)
// Bao quát 6 Unité và Unité 0 SGK Tiếng Pháp 7 Kết nối tri thức

const examQuestions = [
  // PHẦN 1: THÌ TƯƠNG LAI ĐƠN - FUTUR SIMPLE (Câu 1 - 8)
  {
    q: "Chia động từ 'finir' ở ngôi 'je' thì Futur simple: 'Demain, je (____) mon exposé.'",
    options: ["A. finirai", "B. finiras", "C. finira", "D. finirons"],
    answer: 0,
    explain: "Futur simple động từ nhóm 2: nguyên mẫu 'finir' + đuôi '-ai' của ngôi 'je' -> je finirai (Unité 1)."
  },
  {
    q: "Chia động từ 'prendre' ở ngôi 'nous' thì Futur simple: 'Nous (____) le train pour Paris.'",
    options: ["A. prendrons", "B. prendrez", "C. prendront", "D. prendrions"],
    answer: 0,
    explain: "Động từ đuôi '-re' bỏ 'e' rồi thêm đuôi tương lai: prendr- + -ons -> nous prendrons (Unité 1)."
  },
  {
    q: "Gốc Futur simple của động từ 'être' là:",
    options: ["A. ét-", "B. ser-", "C. aur-", "D. ir-"],
    answer: 1,
    explain: "Động từ 'être' có gốc tương lai đơn bất quy tắc là 'ser-' (je serai, tu seras...) (Unité 5)."
  },
  {
    q: "Gốc Futur simple của động từ 'avoir' là:",
    options: ["A. aur-", "B. av-", "C. ser-", "D. fer-"],
    answer: 0,
    explain: "Động từ 'avoir' có gốc tương lai đơn là 'aur-' (j'aurai, tu auras...) (Unité 5)."
  },
  {
    q: "Chia động từ 'faire' ở ngôi 'ils' thì Futur simple: 'Ils (____) du sport demain.'",
    options: ["A. font", "B. feront", "C. faisaient", "D. ferez"],
    answer: 1,
    explain: "Động từ 'faire' có gốc tương lai là 'fer-' + đuôi '-ont' -> feront (Unité 5)."
  },
  {
    q: "Chia động từ 'aller' ở ngôi 'nous' thì Futur simple: 'L'année prochaine, nous (____) en France.'",
    options: ["A. allons", "B. irons", "C. irions", "D. allions"],
    answer: 1,
    explain: "Động từ 'aller' có gốc tương lai là 'ir-' + đuôi '-ons' -> nous irons (Unité 5)."
  },
  {
    q: "Chọn câu đúng: 'En 2050, les astronautes (____) sur Mars.'",
    options: ["A. atterrira", "B. atterriront", "C. atterrissaient", "D. ont atterri"],
    answer: 1,
    explain: "Chủ ngữ số nhiều 'les astronautes' đi với đuôi '-ont' ở thì tương lai -> atterriront (Unité 1)."
  },
  {
    q: "Chọn câu chia đúng: 'Si tu t'entraînes sérieusement, tu (____) champion.'",
    options: ["A. es", "B. seras", "C. étais", "D. sois"],
    answer: 1,
    explain: "Cấu trúc 'Si + présent, futur simple' -> ngôi 'tu' ở tương lai của être là 'seras' (Unité 5)."
  },

  // PHẦN 2: THÌ QUÁ KHỨ CHƯA HOÀN THÀNH - IMPARFAIT (Câu 9 - 14)
  {
    q: "Đuôi của thì Imparfait theo các ngôi lần lượt là:",
    options: [
      "A. -ai, -as, -a, -ons, -ez, -ont",
      "B. -ais, -ais, -ait, -ions, -iez, -aient",
      "C. -e, -es, -e, -ons, -ez, -ent",
      "D. -is, -is, -it, -issons, -issez, -issent"
    ],
    answer: 1,
    explain: "Đuôi chuẩn của thì Imparfait là: -ais, -ais, -ait, -ions, -iez, -aient (Unité 3)."
  },
  {
    q: "Gốc duy nhất bất quy tắc ở thì Imparfait là của động từ nào?",
    options: ["A. avoir", "B. aller", "C. être (gốc ét-)", "D. faire"],
    answer: 2,
    explain: "Duy nhất động từ 'être' có gốc Imparfait bất quy tắc là 'ét-' (j'étais, tu étais...) (Unité 3)."
  },
  {
    q: "Chia động từ 'porter' ở ngôi 'je' thì Imparfait: 'Quand j’étais petit, je (____) un uniforme.'",
    options: ["A. portais", "B. porterai", "C. porte", "D. portait"],
    answer: 0,
    explain: "Gốc 'port-' + đuôi '-ais' của ngôi 'je' -> je portais (Unité 3)."
  },
  {
    q: "Chia động từ 'habiter' ở ngôi 'nous' thì Imparfait: 'À cette époque, nous (____) à la campagne.'",
    options: ["A. habitions", "B. habiterons", "C. habitons", "D. habitaient"],
    answer: 0,
    explain: "Gốc 'habit-' + đuôi '-ions' của ngôi 'nous' -> nous habitions (Unité 3)."
  },
  {
    q: "Thì Imparfait được dùng với chức năng nào sau đây?",
    options: [
      "A. Kể một sự việc xảy ra và kết thúc ngay lập tức",
      "B. Miêu tả bối cảnh, thói quen lặp đi lặp lại trong quá khứ",
      "C. Đưa ra mệnh lệnh cho người khác",
      "D. Dự đoán tương lai xa"
    ],
    answer: 1,
    explain: "Imparfait dùng để miêu tả trạng thái, bối cảnh hoặc thói quen trong quá khứ (Unité 3)."
  },
  {
    q: "Chọn câu đúng ở thì Imparfait: 'Pendant les vacances, il (____) très beau.'",
    options: ["A. fait", "B. fera", "C. faisait", "D. a fait"],
    answer: 2,
    explain: "Miêu tả thời tiết trong quá khứ dùng thì Imparfait: il faisait beau (Unité 3)."
  },

  // PHẦN 3: CẤU TRÚC SO SÁNH (Câu 15 - 20)
  {
    q: "Cấu trúc so sánh hơn với tính từ là:",
    options: ["A. plus + adjectif + que", "B. plus de + adjectif + que", "C. aussi de + adjectif + que", "D. autant + adjectif + que"],
    answer: 0,
    explain: "So sánh tính chất: plus / moins / aussi + adjectif + que (Unité 1)."
  },
  {
    q: "Điền từ thích hợp: 'La Terre est (____) grande que Mars.'",
    options: ["A. plus", "B. plus de", "C. autant", "D. meilleur"],
    answer: 0,
    explain: "'grande' là tính từ nên so sánh hơn dùng 'plus grande que' (Unité 1)."
  },
  {
    q: "Cấu trúc so sánh ngang bằng với danh từ số lượng là:",
    options: ["A. aussi + nom + que", "B. autant de + nom + que", "C. plus + nom + que", "D. moins + nom + que"],
    answer: 1,
    explain: "So sánh số lượng danh từ: plus de / moins de / autant de + nom + que (Unité 1)."
  },
  {
    q: "Điền từ thích hợp: 'Paul a (____) livres que son frère.'",
    options: ["A. plus", "B. plus de", "C. aussi", "D. très"],
    answer: 1,
    explain: "'livres' là danh từ nên so sánh số lượng phải dùng 'plus de + nom + que' (Unité 1)."
  },
  {
    q: "Tính từ nào sau đây thường đứng TRƯỚC danh từ?",
    options: ["A. noir", "B. confortable", "C. beau", "D. écologique"],
    answer: 2,
    explain: "Tính từ ngắn thông dụng chỉ vẻ đẹp/kích cỡ (Beau, Joli, Petit, Grand) đứng trước danh từ: un beau manteau (Unité 3)."
  },
  {
    q: "Chọn dạng đúng của tính từ: 'Elle achète une (____) robe.'",
    options: ["A. joli", "B. jolie", "C. jolis", "D. jolies"],
    answer: 1,
    explain: "'robe' là danh từ giống cái số ít nên tính từ hòa hợp thêm 'e' -> jolie (Unité 3)."
  },

  // PHẦN 4: GIỚI TỪ, NHẠC CỤ & MỤC ĐÍCH (Câu 21 - 26)
  {
    q: "Khi nói về chơi nhạc cụ, ta dùng cấu trúc:",
    options: ["A. jouer à + nhạc cụ", "B. jouer de + nhạc cụ", "C. faire de + nhạc cụ", "D. pratiquer à + nhạc cụ"],
    answer: 1,
    explain: "Quy tắc: Jouer de + nhạc cụ (jouer du piano) vs. Jouer à + thể thao (jouer au foot) (Unité 2)."
  },
  {
    q: "Điền dạng đúng của giới từ: 'Mon frère joue (____) violon.'",
    options: ["A. du (de + le)", "B. de la", "C. de l'", "D. des"],
    answer: 0,
    explain: "'violon' là danh từ giống đực nên: de + le = du -> joue du violon (Unité 2)."
  },
  {
    q: "Điền dạng đúng của giới từ: 'Elle joue (____) guitare dans un groupe.'",
    options: ["A. du", "B. de la", "C. à la", "D. au"],
    answer: 1,
    explain: "'guitare' là danh từ giống cái nên dùng 'de la guitare' (Unité 2)."
  },
  {
    q: "Đại từ thân mật 'ça' trong câu 'Tu aimes le jazz ? — Oui, j’adore ça !' dùng để thay thế cho:",
    options: ["A. một người", "B. một địa điểm", "C. sự việc / điều vừa được nhắc tới (le jazz)", "D. thời gian"],
    answer: 2,
    explain: "'ça' là đại từ thân mật thay cho một điều/ý vừa được nêu (ở đây là le jazz) (Unité 2)."
  },
  {
    q: "Điền từ chỉ mục đích thích hợp: 'Je fais du sport (____) être en bonne santé.'",
    options: ["A. pour", "B. mais", "C. parce que", "D. avec"],
    answer: 0,
    explain: "Chỉ mục đích cùng chủ ngữ dùng 'pour + infinitif' (để có sức khỏe tốt) (Unité 6)."
  },
  {
    q: "Cụm từ đồng nghĩa trang trọng hơn của 'pour + infinitif' là:",
    options: ["A. afin de + infinitif", "B. à cause de", "C. grâce à", "D. sans"],
    answer: 0,
    explain: "'afin de + infinitif' đồng nghĩa với 'pour + infinitif' và mang tính trang trọng hơn (Unité 6)."
  },

  // PHẦN 5: CÂU MỆNH LỆNH & LỜI KHUYÊN (Câu 27 - 30)
  {
    q: "Cấu trúc đưa ra lời khuyên nhẹ nhàng trong Unité 6 là:",
    options: ["A. Il faut que", "B. Il faudrait + infinitif", "C. Il sera", "D. Il avait"],
    answer: 1,
    explain: "Cấu trúc đưa lời khuyên lịch sự, mềm mỏng: 'Il faudrait + infinitif' (Nên...) (Unité 6)."
  },
  {
    q: "Chọn câu mệnh lệnh khẳng định đúng với động từ phản thân 'se reposer' ngôi 'tu':",
    options: ["A. Te repose !", "B. Repose-toi !", "C. Tu reposes !", "D. Reposes-toi !"],
    answer: 1,
    explain: "Mệnh lệnh khẳng định động từ phản thân: động từ (bỏ s) + gạch nối + toi -> Repose-toi ! (Unité 6)."
  },
  {
    q: "Chọn câu mệnh lệnh phủ định đúng:",
    options: [
      "A. Ne te couche pas trop tard !",
      "B. Ne couche-toi pas trop tard !",
      "C. Couche-toi pas ne !",
      "D. Ne te couches pas trop tard !"
    ],
    answer: 0,
    explain: "Mệnh lệnh phủ định động từ phản thân: Ne + đại từ + động từ + pas -> Ne te couche pas (Unité 6)."
  },
  {
    q: "Động từ nhóm 1 tận cùng '-er' ở thể mệnh lệnh ngôi 'tu' có đặc điểm gì?",
    options: [
      "A. Giữ nguyên đuôi -es",
      "B. Bỏ chữ cái 's' ở cuối",
      "C. Thêm chữ cái 't' ở cuối",
      "D. Chuyển thành nguyên mẫu"
    ],
    answer: 1,
    explain: "Động từ nhóm 1 ở câu mệnh lệnh ngôi 'tu' luôn bỏ 's': Mange ! Écoute ! (Unité 6)."
  },

  // PHẦN 6: ĐIỀU KIỆN SI & NHƯỢNG BỘ MÊME SI (Câu 31 - 34)
  {
    q: "Quy tắc chia thì trong câu điều kiện: 'Si + (____), (____)'",
    options: [
      "A. présent, futur simple",
      "B. futur simple, présent",
      "C. imparfait, présent",
      "D. futur simple, futur simple"
    ],
    answer: 0,
    explain: "Cấu trúc điều kiện có thể xảy ra: Si + présent, futur simple (Tuyệt đối không dùng tương lai sau Si) (Unité 5)."
  },
  {
    q: "Điền liên từ thích hợp: '(____) il pleut, nous irons faire du vélo.'",
    options: ["A. Même si", "B. Si", "C. Parce que", "D. Donc"],
    answer: 0,
    explain: "'Même si + mệnh đề' biểu đạt sự nhượng bộ/ngay cả khi (Ngay cả khi trời mưa, chúng tôi vẫn sẽ đạp xe) (Unité 6)."
  },
  {
    q: "Sau 'Si' trong mẫu điều kiện cơ bản, điều cấm kị ngữ pháp là gì?",
    options: [
      "A. Dùng thì Hiện tại (Présent)",
      "B. Dùng thì Tương lai đơn (Futur simple) ngay sau Si",
      "C. Dùng đại từ nhân xưng",
      "D. Dùng danh từ"
    ],
    answer: 1,
    explain: "Trong tiếng Pháp không bao giờ đặt thì Futur simple ngay sau liên từ 'Si' trong mệnh đề điều kiện (Unité 5/6)."
  },
  {
    q: "Chọn câu đúng ngữ pháp:",
    options: [
      "A. Si tu viendras, je serai content.",
      "B. Si tu viens, je serai content.",
      "C. Si tu viens, je suis serai content.",
      "D. Si tu venais, je serai content."
    ],
    answer: 1,
    explain: "Si + présent (viens), futur simple (serai) (Unité 5)."
  },

  // PHẦN 7: TỪ VỰNG & VĂN HÓA PHÁP NGỮ (Câu 35 - 40)
  {
    q: "Ngày hội Âm nhạc 'Fête de la Musique' diễn ra vào ngày nào hằng năm tại Pháp?",
    options: ["A. Ngày 21 tháng 6 (Hạ chí)", "B. Ngày 14 tháng 7", "C. Ngày 1 tháng 1", "D. Ngày 25 tháng 12"],
    answer: 0,
    explain: "Fête de la Musique được tổ chức vào ngày 21/6 hằng năm trên toàn nước Pháp (Unité 2)."
  },
  {
    q: "Từ 'pointure' trong tiếng Pháp có nghĩa là gì?",
    options: ["A. Cỡ quần áo", "B. Cỡ giày", "C. Chiều cao", "D. Cân nặng"],
    answer: 1,
    explain: "'la pointure' là kích cỡ giày, còn 'la taille' là cỡ quần áo (Unité 3)."
  },
  {
    q: "Hành động nào sau đây là 'geste écologique' (hành động bảo vệ môi trường)?",
    options: [
      "A. Gaspiller l'eau au robinet",
      "B. Jeter les déchets par terre",
      "C. Trier les déchets et éteindre la lumière",
      "D. Utiliser beaucoup de sacs plastiques"
    ],
    answer: 2,
    explain: "Phân loại rác (trier les déchets) và tắt đèn (éteindre la lumière) là các hành động xanh (Unité 4)."
  },
  {
    q: "Chất liệu 'denim' của chiếc quần jean có nguồn gốc lịch sử từ thành phố nào của nước Pháp?",
    options: ["A. Paris", "B. Nîmes (de Nîmes -> denim)", "C. Lyon", "D. Marseille"],
    answer: 1,
    explain: "Vải denim bắt nguồn từ thành phố Nîmes miền nam nước Pháp (de Nîmes) (Unité 3)."
  },
  {
    q: "Nhà văn Pháp nổi tiếng với các tiểu thuyết khoa học viễn tưởng như 'Hai vạn dặm dưới đáy biển' là:",
    options: ["A. Victor Hugo", "B. Jules Verne", "C. Alexandre Dumas", "D. Albert Camus"],
    answer: 1,
    explain: "Jules Verne là cha đẻ của dòng văn học khoa học viễn tưởng Pháp (Unité 1)."
  },
  {
    q: "Thành phố nào đã đăng cai Thế vận hội Mùa hè Olympic và Paralympic 2024?",
    options: ["A. London", "B. Tokyo", "C. Paris", "D. New York"],
    answer: 2,
    explain: "Thủ đô Paris (Pháp) là chủ nhà của Thế vận hội Olympic và Paralympic Paris 2024 (Unité 5)."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { examQuestions };
}
