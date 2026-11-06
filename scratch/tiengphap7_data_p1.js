// Dữ liệu Tiếng Pháp 7 - Phần 1: Unité 0, Unité 1, Unité 2, Unité 3
// Bộ sách Kết nối tri thức với cuộc sống (GDPT 2018)

const unitesPart1 = [
  // UNITÉ 0: EN ROUTE
  {
    id: "unite-0",
    uniteNum: 0,
    title: "Unité 0 : En route !",
    subtitle: "Khởi động & Ôn nền giao tiếp tiếng Pháp",
    theme: "Ôn tập nền tảng & Thế giới Pháp ngữ",
    badge: "Khởi động & Ôn nền",
    color: "blue",
    goal: "Kích hoạt vốn từ vựng, tự giới thiệu bản thân trong không gian Pháp ngữ, giao tiếp về bữa ăn/gọi món và kể lại một sự việc đã qua trong quá khứ.",
    lecons: [
      {
        num: 1,
        title: "Le français dans le monde",
        focus: "Tiếng Pháp trên 5 châu lục, các quốc gia thuộc cộng đồng Pháp ngữ (OIF) và bản sắc văn hóa.",
        vocab: [
          { fr: "la Francophonie", ipa: "/fʁɑ̃.kɔ.fɔ.ni/", vn: "Cộng đồng các nước nói tiếng Pháp", type: "n.f." },
          { fr: "le continent", ipa: "/kɔ̃.ti.nɑ̃/", vn: "Châu lục", type: "n.m." },
          { fr: "la langue officielle", ipa: "/lɑ̃ɡ ɔ.fi.sjɛl/", vn: "Ngôn ngữ chính thức", type: "n.f." },
          { fr: "la diversité culturelle", ipa: "/di.vɛʁ.si.te kyl.ty.ʁɛl/", vn: "Sự đa dạng văn hóa", type: "n.f." }
        ]
      },
      {
        num: 2,
        title: "À table !",
        focus: "Gọi món, gọi tên các món ăn và văn hóa ẩm thực Pháp.",
        vocab: [
          { fr: "le repas", ipa: "/ʁə.pa/", vn: "Bữa ăn", type: "n.m." },
          { fr: "l'entrée", ipa: "/ɑ̃.tʁe/", vn: "Món khai vị", type: "n.f." },
          { fr: "le plat principal", ipa: "/pla pʁɛ̃.si.pal/", vn: "Món ăn chính", type: "n.m." },
          { fr: "le dessert", ipa: "/de.sɛʁ/", vn: "Món tráng miệng", type: "n.m." },
          { fr: "la boisson", ipa: "/bwa.sɔ̃/", vn: "Đồ uống", type: "n.f." }
        ]
      },
      {
        num: 3,
        title: "Qu’est-ce que tu as fait hier ?",
        focus: "Kể lại các hoạt động đã làm hôm qua với Passé composé.",
        vocab: [
          { fr: "hier", ipa: "/jɛʁ/", vn: "Hôm qua", type: "adv." },
          { fr: "passer du temps", ipa: "/pa.se dy tɑ̃/", vn: "Dành thời gian", type: "v." },
          { fr: "rencontrer des amis", ipa: "/ʁɑ̃.kɔ̃.tʁe dez‿a.mi/", vn: "Gặp gỡ bạn bè", type: "loc.v." },
          { fr: "visiter un musée", ipa: "/vi.zi.te œ̃ my.ze/", vn: "Tham quan bảo tàng", type: "loc.v." }
        ]
      }
    ],
    grammar: {
      title: "Ôn tập Passé composé và Mạo từ bộ phận (Articles partitifs)",
      formula: "1. Passé composé: Avoir / Être (hiện tại) + Participe passé\n2. Articles partitifs: du (nam), de la (nữ), de l' (nguyên âm), des (số nhiều)",
      usage: "Dùng Passé composé để kể các sự việc đã kết thúc trong quá khứ. Mạo từ bộ phận dùng trước danh từ chỉ số lượng không đếm được như thức ăn, nước uống.",
      examples: [
        "Hier, j’ai mangé du poulet et j’ai bu de l’eau minérale. (Hôm qua tôi đã ăn thịt gà và uống nước khoáng.)",
        "Nous avons visité le musée du Louvre à Paris. (Chúng tôi đã tham quan bảo tàng Louvre ở Paris.)",
        "Qu’est-ce que tu as fait pendant les vacances ? (Bạn đã làm gì trong suốt kì nghỉ?)"
      ]
    },
    dialogue: {
      situation: "Hai bạn học sinh hỏi thăm nhau về bữa tối hôm qua",
      lines: [
        { spk: "Thomas", text: "Salut Linh ! Qu’est-ce que tu as fait hier soir ?" },
        { spk: "Linh", text: "Hier soir, j’ai dîné au restaurant avec mes parents. J’ai pris du poisson et une salade." },
        { spk: "Thomas", text: "C’était bon ? Tu as pris un dessert ?" },
        { spk: "Linh", text: "Oui, c’était délicieux ! J’ai mangé une tarte aux pommes." }
      ]
    },
    culture: "Cộng đồng Pháp ngữ (La Francophonie): Tiếng Pháp hiện được nói trên khắp 5 châu lục với hơn 320 triệu người sử dụng tại Pháp, Bỉ, Thụy Sĩ, Canada (Québec), nhiều quốc gia châu Phi và các nước thành viên OIF tại châu Á như Việt Nam.",
    quiz: [
      {
        q: "Điền mạo từ bộ phận thích hợp: 'Au petit-déjeuner, je bois (____) café au lait.'",
        options: ["A. de la", "B. du", "C. des", "D. de l'"],
        a: 1,
        exp: "'café' là danh từ giống đực số ít nên dùng mạo từ bộ phận 'du' (de + le = du)."
      },
      {
        q: "Chọn câu chia đúng thì Passé composé: 'Hier, nous (____) nos devoirs de français.'",
        options: ["A. faisons", "B. ferons", "C. avons fait", "D. faisions"],
        a: 2,
        exp: "Chủ ngữ 'nous' đi với trợ động từ 'avoir' ở hiện tại là 'avons' + participe passé 'fait' -> avons fait."
      }
    ]
  },

  // UNITÉ 1: TU FINIRAS BIENTÔT TON EXPOSÉ
  {
    id: "unite-1",
    uniteNum: 1,
    title: "Unité 1 : Tu finiras bientôt ton exposé",
    subtitle: "Tương lai, dự đoán, so sánh và khám phá vũ trụ",
    theme: "Không gian, Vũ trụ & Viễn cảnh tương lai",
    badge: "Futur simple & So sánh",
    color: "blue",
    goal: "Nói về kế hoạch, dự đoán tương lai năm 2050; so sánh người và vật bằng tính từ; nói về thời tiết, các mùa và hệ Mặt Trời. Dự án: Làm mô hình ô tô bay bằng bìa.",
    lecons: [
      {
        num: 1,
        title: "Je finirai mon travail vers 10 heures",
        focus: "Nói kế hoạch và thời điểm hoàn thành trong tương lai; trạng từ chỉ thời gian vers..., bientôt, demain.",
        vocab: [
          { fr: "finir", ipa: "/fi.niʁ/", vn: "Hoàn thành, kết thúc", type: "v." },
          { fr: "bientôt", ipa: "/bjɛ̃.to/", vn: "Sắp sửa, chẳng bao lâu nữa", type: "adv." },
          { fr: "vers", ipa: "/vɛʁ/", vn: "Vào khoảng (thời gian)", type: "prép." },
          { fr: "l'exposé", ipa: "/ɛk.spo.ze/", vn: "Bài thuyết trình, báo cáo", type: "n.m." }
        ]
      },
      {
        num: 2,
        title: "L’homme atterrira sur Mars en 2050",
        focus: "Dự đoán về du hành vũ trụ và khoa học viễn tưởng; nói mốc năm trong tương lai.",
        vocab: [
          { fr: "atterrir", ipa: "/a.te.ʁiʁ/", vn: "Hạ cánh, đáp xuống", type: "v." },
          { fr: "la planète", ipa: "/pla.nɛt/", vn: "Hành tinh", type: "n.f." },
          { fr: "Mars", ipa: "/maʁs/", vn: "Sao Hỏa", type: "n.pr." },
          { fr: "le vaisseau spatial", ipa: "/vɛ.so spa.sjal/", vn: "Tàu vũ trụ", type: "n.m." },
          { fr: "l'astronaute", ipa: "/as.tʁɔ.not/", vn: "Phi hành gia", type: "n." }
        ]
      },
      {
        num: 3,
        title: "Les Martiens sont plus petits que nous",
        focus: "So sánh hơn, kém và ngang bằng giữa hai đối tượng với tính từ.",
        vocab: [
          { fr: "l'extraterrestre", ipa: "/ɛk.stʁa.te.ʁɛstʁ/", vn: "Người ngoài hành tinh", type: "n.m." },
          { fr: "plus... que", ipa: "/ply... kə/", vn: "Hơn...", type: "loc.adv." },
          { fr: "moins... que", ipa: "/mwɛ̃... kə/", vn: "Kém hơn...", type: "loc.adv." },
          { fr: "aussi... que", ipa: "/o.si... kə/", vn: "Bằng nhau, như...", type: "loc.adv." },
          { fr: "rapide / lent", ipa: "/ʁa.pid/ /lɑ̃/", vn: "Nhanh / Chậm", type: "adj." }
        ]
      },
      {
        num: 4,
        title: "Notre Terre en 2050",
        focus: "Dự đoán đời sống, đặc điểm Trái Đất và các viễn cảnh công nghệ tương lai.",
        vocab: [
          { fr: "la Terre", ipa: "/tɛʁ/", vn: "Trái Đất", type: "n.f." },
          { fr: "le système solaire", ipa: "/sis.tɛm sɔ.lɛʁ/", vn: "Hệ Mặt Trời", type: "n.m." },
          { fr: "la voiture volante", ipa: "/vwa.tyʁ vɔ.lɑ̃t/", vn: "Ô tô bay", type: "n.f." },
          { fr: "dans l'avenir", ipa: "/dɑ̃ lav.niʁ/", vn: "Trong tương lai", type: "loc.adv." }
        ]
      }
    ],
    grammar: {
      title: "Futur simple (Thì tương lai đơn) & Cấu trúc so sánh (Le comparatif)",
      formula: "1. Futur simple: Động từ nguyên mẫu (-er, -ir) + Đuôi: -ai, -as, -a, -ons, -ez, -ont\n(Động từ -re bỏ 'e' rồi thêm đuôi: prendre -> prendrai)\n2. So sánh tính từ: plus / moins / aussi + Adjectif + que\n3. So sánh danh từ: plus de / moins de / autant de + Nom + que",
      usage: "Futur simple dùng để diễn tả một hành động sẽ xảy ra, một kế hoạch hoặc một dự đoán trong tương lai. Cấu trúc so sánh dùng để đối chiếu tính chất hoặc số lượng giữa hai thực thể.",
      examples: [
        "Je finirai mon exposé vers 10 heures ce soir. (Tôi sẽ hoàn thành bài thuyết trình vào khoảng 10 giờ tối nay.)",
        "En 2050, les scientifiques construiront des villes sur Mars. (Vào năm 2050, các nhà khoa học sẽ xây dựng những thành phố trên sao Hỏa.)",
        "La Terre est plus grande que Mars. (Trái Đất lớn hơn sao Hỏa.)",
        "Les fusées sont plus rapides que les avions ordinaires. (Tên lửa nhanh hơn máy bay thông thường.)"
      ]
    },
    dialogue: {
      situation: "Thảo luận về bài tập nhóm và viễn cảnh năm 2050",
      lines: [
        { spk: "Marc", text: "Tu finiras bientôt ton exposé sur le système solaire ?" },
        { spk: "Sophie", text: "Oui, je le finirai vers 10 heures. Et toi, quelle planète as-tu choisie ?" },
        { spk: "Marc", text: "J’ai choisi Mars. Je pense que l’homme atterrira sur Mars avant 2050." },
        { spk: "Sophie", text: "C’est fascinant ! Penses-tu que les Martiens existent ?" },
        { spk: "Marc", text: "Peut-être ! Mais ils seront très différents de nous !" }
      ]
    },
    culture: "Văn học khoa học viễn tưởng Pháp: Nước Pháp là cái nôi của văn học viễn tưởng thế giới với đại văn hào Jules Verne (tác giả 'Hai vạn dặm dưới đáy biển', 'Hành trình vào tâm Trái Đất', 'Từ Trái Đất lên Mặt Trăng').",
    projet: "Projet Unité 1 : Chế tạo mô hình ô tô bay (voiture volante) từ bìa cứng tái chế, thuyết minh về động cơ năng lượng mặt trời, tốc độ và khả năng di chuyển trên không trung trong tương lai.",
    quiz: [
      {
        q: "Chia động từ 'finir' ở ngôi 'tu' thì Futur simple: 'Tu (____) bientôt ton travail.'",
        options: ["A. finiras", "B. finira", "C. finis", "D. finirons"],
        a: 0,
        exp: "Nguyên mẫu 'finir' + đuôi của ngôi 'tu' là '-as' -> tu finiras."
      },
      {
        q: "Điền từ so sánh hơn thích hợp: 'L'avion est (____) rapide que le train.'",
        options: ["A. aussi", "B. plus", "C. autant", "D. moins de"],
        a: 1,
        exp: "So sánh hơn về tính từ ta dùng 'plus + adj + que' (máy bay nhanh hơn tàu hỏa)."
      }
    ]
  },

  // UNITÉ 2: FÊTE DE LA MUSIQUE !
  {
    id: "unite-2",
    uniteNum: 2,
    title: "Unité 2 : Fête de la musique !",
    subtitle: "Nhạc cụ, thể loại nhạc, ca sĩ Pháp ngữ và sở thích",
    theme: "Âm nhạc, Nhạc cụ & Lễ hội âm nhạc",
    badge: "Jouer de + Nhạc cụ & Đại từ ça",
    color: "purple",
    goal: "Nói chơi nhạc cụ nào với cấu trúc jouer de; bày tỏ sở thích thể loại nhạc; so sánh sự ưu tiên; nêu ý kiến và phản hồi nhận xét; hiểu lợi ích của âm nhạc. Dự án: Làm sách ảnh về ca sĩ Pháp ngữ.",
    lecons: [
      {
        num: 1,
        title: "Je joue du violon",
        focus: "Nói chơi nhạc cụ nào với cấu trúc jouer de kết hợp mạo từ rút gọn.",
        vocab: [
          { fr: "le violon", ipa: "/vjɔ.lɔ̃/", vn: "Đàn vi-ô-lông", type: "n.m." },
          { fr: "la guitare", ipa: "/ɡi.taʁ/", vn: "Đàn ghi-ta", type: "n.f." },
          { fr: "le piano", ipa: "/pja.no/", vn: "Đàn dương cầm (piano)", type: "n.m." },
          { fr: "la batterie", ipa: "/ba.tʁi/", vn: "Bộ trống", type: "n.f." },
          { fr: "la flûte", ipa: "/flyt/", vn: "Cây sáo", type: "n.f." }
        ]
      },
      {
        num: 2,
        title: "J’aime le jazz",
        focus: "Bày tỏ sở thích các thể loại âm nhạc: classique, pop, rock, rap, jazz.",
        vocab: [
          { fr: "le jazz", ipa: "/dʒaz/", vn: "Nhạc Jazz", type: "n.m." },
          { fr: "la musique classique", ipa: "/my.zik kla.sik/", vn: "Nhạc cổ điển", type: "n.f." },
          { fr: "le rock", ipa: "/ʁɔk/", vn: "Nhạc Rock", type: "n.m." },
          { fr: "la chanson", ipa: "/ʃɑ̃.sɔ̃/", vn: "Bài hát", type: "n.f." }
        ]
      },
      {
        num: 3,
        title: "Je préfère le concert de pop",
        focus: "So sánh lựa chọn, nêu sự ưu tiên và sử dụng đại từ thân mật ça.",
        vocab: [
          { fr: "préférer", ipa: "/pʁe.fe.ʁe/", vn: "Thích hơn, ưu tiên hơn", type: "v." },
          { fr: "le concert", ipa: "/kɔ̃.sɛʁ/", vn: "Buổi hòa nhạc", type: "n.m." },
          { fr: "ça", ipa: "/sa/", vn: "Cái đó, điều đó", type: "pron." },
          { fr: "à mon avis", ipa: "/a mɔ̃n‿a.vi/", vn: "Theo ý kiến của tôi", type: "loc.adv." }
        ]
      },
      {
        num: 4,
        title: "Les bienfaits de la musique",
        focus: "Nói về lợi ích của âm nhạc; cấu trúc phủ định động từ nguyên mẫu ne pas + infinitif.",
        vocab: [
          { fr: "le bienfait", ipa: "/bjɛ̃.fɛ/", vn: "Lợi ích, tác dụng tốt", type: "n.m." },
          { fr: "calmer / détendre", ipa: "/kal.me/ /de.tɑ̃dʁ/", vn: "Làm dịu / Thư giãn", type: "v." },
          { fr: "énergique", ipa: "/e.nɛʁ.ʒik/", vn: "Tràn đầy năng lượng", type: "adj." },
          { fr: "joyeux / triste", ipa: "/ʒwa.jø/ /tʁist/", vn: "Vui vẻ / Buồn bã", type: "adj." }
        ]
      }
    ],
    grammar: {
      title: "Cấu trúc Jouer de + Nhạc cụ, Đại từ 'ça' & Phủ định nguyên mẫu (ne pas + infinitif)",
      formula: "1. Jouer de + Instrument:\n- de + le = du (du piano, du violon)\n- de + la = de la (de la guitare, de la flûte)\n- de + l' = de l' (de l'accordéon)\n- de + les = des (des percussions)\n2. Đại từ ça thay cho một ý/mệnh đề: Tu aimes ça ?\n3. Ne pas + Verbe à l'infinitif: Je préfère ne pas sortir.",
      usage: "Phân biệt: Jouer à + môn thể thao (jouer au football) vs. Jouer de + nhạc cụ (jouer de la guitare). Động từ nguyên mẫu ở dạng phủ định luôn đặt cả cụm 'ne pas' trước nguyên mẫu.",
      examples: [
        "Mon frère joue du violon et ma sœur joue de la guitare. (Anh trai tôi chơi vi-ô-lông và em gái tôi chơi ghi-ta.)",
        "Tu aimes écouter du rock ? — Oui, j’adore ça ! (Bạn thích nghe nhạc rock không? — Có, mình cực kì thích điều đó!)",
        "À mon avis, la musique classique nous aide à nous détendre. (Theo tôi, âm nhạc cổ điển giúp chúng ta thư giãn.)",
        "Il préfère ne pas écouter de musique trop forte en révisant. (Cậu ấy thích không nghe nhạc quá to khi ôn bài.)"
      ]
    },
    dialogue: {
      situation: "Rủ bạn cùng đi tham dự ngày hội Fête de la Musique",
      lines: [
        { spk: "Antoine", text: "Salut Lucas ! Tu viens avec moi à la Fête de la musique ce soir ?" },
        { spk: "Lucas", text: "Avec plaisir ! Il y aura des concerts de jazz ou de rock ?" },
        { spk: "Antoine", text: "Il y aura les deux ! Mais moi, je préfère le concert de pop rock sur la place." },
        { spk: "Lucas", text: "Super ! J’adore ça. Tu joues d’un instrument, toi ?" },
        { spk: "Antoine", text: "Oui, je joue de la batterie dans le groupe du collège !" }
      ]
    },
    culture: "Fête de la Musique (Ngày hội Âm nhạc Pháp): Được khởi xướng vào năm 1982 tại Pháp bởi Bộ trưởng Văn hóa Jack Lang, diễn ra vào đúng ngày Hạ chí 21/6 hằng năm. Vào ngày này, tất cả mọi nghệ sĩ chuyên nghiệp và nghiệp dư đều biểu diễn tự do trên mọi nẻo đường, góc phố hoàn toàn miễn phí.",
    projet: "Projet Unité 2 : Thiết kế sách ảnh (livret photo) giới thiệu các nghệ sĩ/ca sĩ Pháp ngữ nổi tiếng (như Céline Dion, Stromae, Édith Piaf, Louane), nêu thể loại nhạc, bài hát tiêu biểu và lí do yêu thích.",
    quiz: [
      {
        q: "Điền giới từ thích hợp: 'Elle joue (____) guitare tous les soirs.'",
        options: ["A. du", "B. de la", "C. à la", "D. au"],
        a: 1,
        exp: "'guitare' là danh từ giống cái nên chơi nhạc cụ dùng 'jouer de la guitare'."
      },
      {
        q: "Chọn câu có cấu trúc phủ định nguyên mẫu đúng ngữ pháp:",
        options: [
          "A. Je préfère ne sortir pas.",
          "B. Je préfère ne pas sortir ce soir.",
          "C. Je préfère pas sortir ne ce soir.",
          "D. Je préfère sortir ne pas."
        ],
        a: 1,
        exp: "Quy tắc phủ định động từ nguyên mẫu: 'ne pas + verbe à l'infinitif' -> ne pas sortir."
      }
    ]
  },

  // UNITÉ 3: MODE ADO
  {
    id: "unite-3",
    uniteNum: 3,
    title: "Unité 3 : Mode ado",
    subtitle: "Trang phục, phong cách giới trẻ, cỡ đồ & thì Imparfait",
    theme: "Thời trang tuổi teen, Phong cách & Kí ức xưa",
    badge: "Vị trí tính từ & Thì Imparfait",
    color: "pink",
    goal: "Hỏi và nói về cách ăn mặc, phong cách thời trang tuổi teen; hỏi cỡ quần áo (taille) và cỡ giày (pointure); khen chê lịch sự; miêu tả bối cảnh và thói quen trong quá khứ bằng thì Imparfait. Dự án: Tổ chức trình diễn thời trang (Défilé de mode).",
    lecons: [
      {
        num: 1,
        title: "Comment tu t’habilles ?",
        focus: "Hỏi và nói về trang phục hằng ngày, các loại quần áo cơ bản.",
        vocab: [
          { fr: "le vêtement", ipa: "/vɛt.mɑ̃/", vn: "Quần áo, y phục", type: "n.m." },
          { fr: "le pantalon", ipa: "/pɑ̃.ta.lɔ̃/", vn: "Quần dài", type: "n.m." },
          { fr: "le jean", ipa: "/dʒin/", vn: "Quần bò, quần jean", type: "n.m." },
          { fr: "la robe", ipa: "/ʁɔb/", vn: "Váy liền", type: "n.f." },
          { fr: "la jupe", ipa: "/ʒyp/", vn: "Chân váy", type: "n.f." },
          { fr: "la chemise", ipa: "/ʃə.miz/", vn: "Áo sơ mi", type: "n.f." },
          { fr: "le pull", ipa: "/pyl/", vn: "Áo len", type: "n.m." },
          { fr: "les baskets", ipa: "/bas.kɛt/", vn: "Giày thể thao", type: "n.f.pl." }
        ]
      },
      {
        num: 2,
        title: "Chacun son style",
        focus: "Miêu tả phong cách thời trang; vị trí và hòa hợp tính từ; khen chê lịch sự.",
        vocab: [
          { fr: "le style / le look", ipa: "/stil/ /luk/", vn: "Phong cách", type: "n.m." },
          { fr: "élégant(e)", ipa: "/e.le.ɡɑ̃/", vn: "Thanh lịch", type: "adj." },
          { fr: "confortable", ipa: "/kɔ̃.fɔʁ.tabl/", vn: "Thoải mái, tiện dụng", type: "adj." },
          { fr: "original(e)", ipa: "/ɔ.ʁi.ʒi.nal/", vn: "Độc đáo, mới lạ", type: "adj." },
          { fr: "C'est joli !", ipa: "/sɛ ʒɔ.li/", vn: "Đẹp quá!", type: "expr." }
        ]
      },
      {
        num: 3,
        title: "Mets ton manteau !",
        focus: "Nhắc nhở mặc ấm, hỏi cỡ quần áo (taille) và cỡ giày (pointure).",
        vocab: [
          { fr: "le manteau", ipa: "/mɑ̃.to/", vn: "Áo khoác dài mùa đông", type: "n.m." },
          { fr: "l'écharpe", ipa: "/e.ʃaʁp/", vn: "Khăn quàng cổ", type: "n.f." },
          { fr: "la taille", ipa: "/taj/", vn: "Cỡ quần áo (S, M, L)", type: "n.f." },
          { fr: "la pointure", ipa: "/pwɛ̃.tyʁ/", vn: "Cỡ giày (36, 37, 38...)", type: "n.f." },
          { fr: "mettre / essayer", ipa: "/mɛtʁ/ /e.se.je/", vn: "Mặc vào / Thử đồ", type: "v." }
        ]
      },
      {
        num: 4,
        title: "Le look des ados",
        focus: "Nói về thói quen ăn mặc hồi nhỏ và bối cảnh quá khứ bằng thì Imparfait.",
        vocab: [
          { fr: "l'adolescent(e) / l'ado", ipa: "/a.dɔ.lɛ.sɑ̃/ /a.do/", vn: "Tuổi teen, thanh thiếu niên", type: "n." },
          { fr: "avant", ipa: "/a.vɑ̃/", vn: "Trước đây", type: "adv." },
          { fr: "quand j'étais petit(e)", ipa: "/kɑ̃ ʒe.tɛ pə.ti/", vn: "Khi tôi còn nhỏ", type: "loc.adv." },
          { fr: "porter", ipa: "/pɔʁ.te/", vn: "Mặc, mang trên người", type: "v." }
        ]
      }
    ],
    grammar: {
      title: "Vị trí & Sự hòa hợp của Tính từ (L'accord des adjectifs) & Thì Imparfait",
      formula: "1. Vị trí tính từ:\n- Đa số tính từ đứng SAU danh từ (un pantalon noir, une veste confortable)\n- Một số tính từ ngắn thông dụng đứng TRƯỚC danh từ (BAGS: Beau, Joli, Petit, Grand, Nouveau...: un beau manteau, une jolie robe)\n2. Thì Imparfait: Gốc của ngôi 'nous' ở hiện tại (bỏ -ons) + Đuôi: -ais, -ais, -ait, -ions, -iez, -aient\n(Ngoại lệ duy nhất: Être -> gốc ét- : j'étais, tu étais, il était...)",
      usage: "Tính từ luôn hòa hợp về giống (masculin/féminin) và số (singulier/pluriel) với danh từ nó bổ nghĩa. Thì Imparfait dùng để miêu tả thói quen lặp đi lặp lại hoặc bối cảnh trạng thái trong quá khứ.",
      examples: [
        "Elle porte une jolie robe rouge et des baskets blanches. (Cô ấy mặc một chiếc váy đỏ xinh xắn và đi đôi giày thể thao trắng.)",
        "Quelle est votre taille ? — Je fais du 38. Quelle est votre pointure ? — Je fais du 39. (Cỡ áo của bạn là bao nhiêu? — Cỡ 38. Cỡ giày của bạn là bao nhiêu? — Cỡ 39.)",
        "Quand j’étais petit, je portais toujours des salopettes en jean. (Hồi tôi còn nhỏ, tôi luôn mặc quần yếm bò.)",
        "À cette époque, nous habitions à la campagne et il faisait très froid en hiver. (Thời kì đó, chúng tôi sống ở nông thôn và trời rất lạnh vào mùa đông.)"
      ]
    },
    dialogue: {
      situation: "Đi mua sắm quần áo chuẩn bị cho mùa đông",
      lines: [
        { spk: "Vendeuse", text: "Bonjour jeune homme ! Je peux vous aider ?" },
        { spk: "Julien", text: "Oui, je cherche un manteau chaud pour l’hiver." },
        { spk: "Vendeuse", text: "Quelle est votre taille ? Nous avons ce beau manteau bleu marine." },
        { spk: "Julien", text: "Je fais du M. Je peux l’essayer ?" },
        { spk: "Vendeuse", text: "Bien sûr, la cabine d’essayage est juste là-bas !" }
      ]
    },
    culture: "Lịch sử của chiếc quần Jean (Le jean): Bắt nguồn từ chất liệu vải bông dày dệt tại thành phố Nîmes (Pháp) gọi là 'denim' (de Nîmes), sau đó được Levi Strauss may thành quần cho công nhân đào mỏ tại Mỹ và ngày nay trở thành biểu tượng thời trang vượt thời gian của giới trẻ toàn cầu.",
    projet: "Projet Unité 3 : Tổ chức biểu diễn thời trang học đường (Défilé de mode ado) tái chế, thiết kế trang phục sáng tạo, giới thiệu chất liệu, màu sắc và tự tin sải bước trên sàn diễn.",
    quiz: [
      {
        q: "Hỏi cỡ giày trong tiếng Pháp ta dùng danh từ nào?",
        options: ["A. la taille", "B. la pointure", "C. la longueur", "D. la couleur"],
        a: 1,
        exp: "Cỡ giày là 'la pointure', còn 'la taille' là cỡ quần áo hoặc chiều cao."
      },
      {
        q: "Chia động từ 'être' ở ngôi 'nous' thì Imparfait:",
        options: ["A. nous sommes", "B. nous serons", "C. nous étions", "D. nous avons été"],
        a: 2,
        exp: "Động từ 'être' có gốc Imparfait là 'ét-' + đuôi '-ions' -> nous étions."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { unitesPart1 };
}
