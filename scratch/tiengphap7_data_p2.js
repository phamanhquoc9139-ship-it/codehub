// Dữ liệu Tiếng Pháp 7 - Phần 2: Unité 4, Unité 5, Unité 6 và Bảng Ngữ pháp, Chia động từ, Dự án
// Bộ sách Kết nối tri thức với cuộc sống (GDPT 2018)

const unitesPart2 = [
  // UNITÉ 4: ENVIRONNEMENT
  {
    id: "unite-4",
    uniteNum: 4,
    title: "Unité 4 : Environnement",
    subtitle: "Trái Đất, bảo vệ môi trường, tiết kiệm tài nguyên & hành động xanh",
    theme: "Môi trường, Bảo vệ hành tinh & Phân loại rác",
    badge: "Pouvoir + Infinitif & Trạng từ tần suất",
    color: "emerald",
    goal: "Nêu vấn đề môi trường, lời kêu gọi bảo vệ Trái Đất; nói việc bản thân làm cho hành tinh; cấu trúc pouvoir + infinitif; dùng très / trop; trạng từ chỉ tần suất; phân biệt các loại vật liệu. Dự án: Làm áp phích bảo vệ môi trường (Affiche écologique).",
    lecons: [
      {
        num: 1,
        title: "Protégeons notre planète",
        focus: "Nêu thực trạng ô nhiễm và thông điệp chung tay bảo vệ Trái Đất.",
        vocab: [
          { fr: "l'environnement", ipa: "/ɑ̃.vi.ʁɔn.mɑ̃/", vn: "Môi trường", type: "n.m." },
          { fr: "la planète", ipa: "/pla.nɛt/", vn: "Hành tinh", type: "n.f." },
          { fr: "la pollution", ipa: "/pɔ.ly.sjɔ̃/", vn: "Sự ô nhiễm", type: "n.f." },
          { fr: "protéger", ipa: "/pʁɔ.te.ʒe/", vn: "Bảo vệ, gìn giữ", type: "v." },
          { fr: "préserver", ipa: "/pʁe.zɛʁ.ve/", vn: "Bảo tồn, bảo vệ lâu dài", type: "v." }
        ]
      },
      {
        num: 2,
        title: "Qu’est-ce que tu fais pour la planète ?",
        focus: "Diễn đạt khả năng và hành động cụ thể với cấu trúc Pouvoir + Infinitif.",
        vocab: [
          { fr: "trier les déchets", ipa: "/tʁi.je le de.ʃɛ/", vn: "Phân loại rác thải", type: "loc.v." },
          { fr: "recycler", ipa: "/ʁə.si.kle/", vn: "Tái chế", type: "v." },
          { fr: "la poubelle", ipa: "/pu.bɛl/", vn: "Thùng rác", type: "n.f." },
          { fr: "réutiliser", ipa: "/ʁe.y.ti.li.ze/", vn: "Tái sử dụng", type: "v." },
          { fr: "réduire", ipa: "/ʁe.dɥiʁ/", vn: "Cắt giảm, hạn chế", type: "v." }
        ]
      },
      {
        num: 3,
        title: "Il faut économiser l’eau",
        focus: "Nhắc nhở tiết kiệm nước và điện; trạng từ chỉ mức độ très và trop.",
        vocab: [
          { fr: "économiser l'eau", ipa: "/e.kɔ.nɔ.mi.ze lo/", vn: "Tiết kiệm nước", type: "loc.v." },
          { fr: "fermer le robinet", ipa: "/fɛʁ.me lə ʁɔ.bi.nɛ/", vn: "Khóa vòi nước", type: "loc.v." },
          { fr: "éteindre la lumière", ipa: "/e.tɛ̃dʁ la ly.mjɛʁ/", vn: "Tắt đèn chiếu sáng", type: "loc.v." },
          { fr: "gaspiller", ipa: "/ɡas.pi.je/", vn: "Lãng phí", type: "v." },
          { fr: "trop de", ipa: "/tʁo də/", vn: "Quá nhiều (danh từ)", type: "loc.adv." }
        ]
      },
      {
        num: 4,
        title: "Les gestes écologiques",
        focus: "Hành động xanh hằng ngày; các loại vật liệu và trạng từ tần suất.",
        vocab: [
          { fr: "le geste écologique", ipa: "/ʒɛst e.kɔ.lɔ.ʒik/", vn: "Hành động xanh vì môi trường", type: "n.m." },
          { fr: "le plastique / le verre", ipa: "/plas.tik/ /vɛʁ/", vn: "Nhựa / Thủy tinh", type: "n.m." },
          { fr: "le papier / le carton", ipa: "/pa.pje/ /kaʁ.tɔ̃/", vn: "Giấy / Bìa các-tông", type: "n.m." },
          { fr: "le métal", ipa: "/me.tal/", vn: "Kim loại", type: "n.m." },
          { fr: "toujours / jamais", ipa: "/tu.ʒuʁ/ /ʒa.mɛ/", vn: "Luôn luôn / Không bao giờ", type: "adv." }
        ]
      }
    ],
    grammar: {
      title: "Động từ Pouvoir (Có thể), Trạng từ Très / Trop & Trạng từ chỉ tần suất",
      formula: "1. Pouvoir + Infinitif: je peux, tu peux, il/elle peut, nous pouvons, vous pouvez, ils/elles peuvent\n2. Phân biệt: très + tính từ (rất) vs. trop + tính từ (quá mức) vs. trop de + danh từ\n3. Trạng từ tần suất: toujours (luôn luôn) > souvent (thường) > parfois (đôi khi) > rarement (hiếm khi) > jamais (không bao giờ)",
      usage: "Pouvoir dùng để diễn đạt khả năng hoặc điều có thể làm. Trạng từ tần suất đứng ngay sau động từ đã chia trong câu khẳng định, riêng 'jamais' đi kèm với 'ne... jamais' trong câu phủ định.",
      examples: [
        "Nous pouvons recycler le papier et le carton. (Chúng ta có thể tái chế giấy và bìa các-tông.)",
        "Il y a trop de déchets plastiques dans l’océan. (Có quá nhiều rác thải nhựa trong đại dương.)",
        "Je trie toujours mes déchets à la maison. (Tôi luôn luôn phân loại rác ở nhà.)",
        "Il ne gaspille jamais l'eau quand il se brosse les dents. (Cậu ấy không bao giờ lãng phí nước khi đánh răng.)"
      ]
    },
    dialogue: {
      situation: "Hai bạn cùng lập kế hoạch cho câu lạc bộ môi trường của trường",
      lines: [
        { spk: "Clara", text: "Qu’est-ce que nous pouvons faire pour protéger l’environnement au collège ?" },
        { spk: "Maxime", text: "Nous pouvons installer des poubelles de tri dans chaque classe !" },
        { spk: "Clara", text: "Excellente idée ! Et il faut aussi rappeler à tout le monde d’éteindre la lumière en partant." },
        { spk: "Maxime", text: "Oui, chaque geste compte pour notre planète !" }
      ]
    },
    culture: "Văn hóa phân loại rác và tái chế tại Pháp: Nước Pháp áp dụng hệ thống thùng rác phân loại màu sắc cực kì nghiêm ngặt (thùng màu vàng cho nhựa, kim loại, giấy; thùng màu xanh lá cho thủy tinh; thùng màu nâu/xám cho rác hữu cơ thông thường).",
    projet: "Projet Unité 4 : Thiết kế áp phích tuyên truyền bảo vệ môi trường (Affiche écologique) với khẩu hiệu hành động, 3-5 giải pháp xanh cụ thể và hình vẽ minh họa sinh động.",
    quiz: [
      {
        q: "Chia động từ 'pouvoir' ở ngôi 'nous': 'Nous (____) recycler le plastique.'",
        options: ["A. peux", "B. peut", "C. pouvons", "D. peuvent"],
        a: 2,
        exp: "Động từ 'pouvoir' chia ở ngôi 'nous' ở thì hiện tại là 'pouvons'."
      },
      {
        q: "Điền trạng từ phù hợp: 'Il ne gaspille (____) l'eau au robinet.'",
        options: ["A. toujours", "B. souvent", "C. jamais", "D. très"],
        a: 2,
        exp: "Cấu trúc phủ định tần suất 'không bao giờ': ne + verbe + jamais."
      }
    ]
  },

  // UNITÉ 5: LE SPORT EST BON POUR LA SANTÉ
  {
    id: "unite-5",
    uniteNum: 5,
    title: "Unité 5 : Le sport est bon pour la santé",
    subtitle: "Thể thao, bóng đá, thể thao mạo hiểm & điều kiện Si + présent",
    theme: "Thể thao, Sức khỏe vận động & Hoài bão vô địch",
    badge: "Futur simple bất quy tắc & Câu điều kiện Si",
    color: "amber",
    goal: "Rủ rê, đề xuất hoạt động thể thao (On fait du sport ?); nói về bóng đá và tinh thần đồng đội; bày tỏ mong muốn tương lai; nói về thể thao mạo hiểm và sự an toàn; nắm Futur simple gốc bất quy tắc và câu điều kiện Si + présent, futur simple. Dự án: Làm cúp thể thao từ vật liệu tái chế.",
    lecons: [
      {
        num: 1,
        title: "On fait du sport ?",
        focus: "Rủ rê, đề xuất chơi thể thao; nói về thói quen vận động thể chất.",
        vocab: [
          { fr: "faire du sport", ipa: "/fɛʁ dy spɔʁ/", vn: "Tập luyện thể thao", type: "loc.v." },
          { fr: "courir", ipa: "/ku.ʁiʁ/", vn: "Chạy bộ", type: "v." },
          { fr: "nager", ipa: "/na.ʒe/", vn: "Bơi lội", type: "v." },
          { fr: "faire du vélo", ipa: "/fɛʁ dy ve.lo/", vn: "Đi xe đạp", type: "loc.v." },
          { fr: "s'entraîner", ipa: "/sɑ̃.tʁɛ.ne/", vn: "Tập luyện, rèn luyện", type: "v." }
        ]
      },
      {
        num: 2,
        title: "Le ballon rond",
        focus: "Bóng đá, trận đấu, đội bóng và tinh thần thể thao tập thể.",
        vocab: [
          { fr: "le football / le foot", ipa: "/fut.bɔl/", vn: "Bóng đá", type: "n.m." },
          { fr: "l'équipe", ipa: "/e.kip/", vn: "Đội bóng, tập thể", type: "n.f." },
          { fr: "le match", ipa: "/matʃ/", vn: "Trận đấu", type: "n.m." },
          { fr: "le joueur / la joueuse", ipa: "/ʒwœʁ/ /ʒwøz/", vn: "Cầu thủ, vận động viên", type: "n." },
          { fr: "gagner / perdre", ipa: "/ɡa.ɲe/ /pɛʁdʁ/", vn: "Chiến thắng / Thua cuộc", type: "v." }
        ]
      },
      {
        num: 3,
        title: "Je veux être champion !",
        focus: "Bày tỏ mong muốn, mục tiêu tương lai với Futur simple bất quy tắc.",
        vocab: [
          { fr: "le champion", ipa: "/ʃɑ̃.pjɔ̃/", vn: "Nhà vô địch, quán quân", type: "n.m." },
          { fr: "Je veux / Je voudrais", ipa: "/ʒə vø/ /ʒə vu.dʁɛ/", vn: "Tôi muốn / Tôi mong muốn", type: "expr." },
          { fr: "l'énergie", ipa: "/e.nɛʁ.ʒi/", vn: "Năng lượng", type: "n.f." },
          { fr: "réussir", ipa: "/ʁe.y.siʁ/", vn: "Thành công", type: "v." }
        ]
      },
      {
        num: 4,
        title: "Les sports extrêmes",
        focus: "Miêu tả môn thể thao mạo hiểm; điều kiện giả thiết Si + présent, futur simple.",
        vocab: [
          { fr: "le sport extrême", ipa: "/spɔʁ ɛk.stʁɛm/", vn: "Môn thể thao mạo hiểm", type: "n.m." },
          { fr: "l'escalade", ipa: "/ɛs.ka.lad/", vn: "Môn leo núi thể thao", type: "n.f." },
          { fr: "le surf", ipa: "/sœʁf/", vn: "Môn lướt sóng", type: "n.m." },
          { fr: "la plongée", ipa: "/plɔ̃.ʒe/", vn: "Môn lặn biển", type: "n.f." },
          { fr: "le parapente", ipa: "/pa.ʁa.pɑ̃t/", vn: "Dù lượn", type: "n.m." }
        ]
      }
    ],
    grammar: {
      title: "Futur simple động từ bất quy tắc & Cấu trúc giả thiết Si + présent, futur simple",
      formula: "1. Các gốc Futur simple bất quy tắc thường gặp:\n- être -> ser- (je serai, tu seras, il sera, nous serons, vous serez, ils seront)\n- avoir -> aur- (j'aurai, tu auras, il aura, nous aurons, vous aurez, ils auront)\n- aller -> ir- (j'irai, tu iras, il ira, nous irons, vous irez, ils iront)\n- faire -> fer- (je ferai, tu feras, il fera, nous ferons, vous ferez, ils feront)\n2. Câu điều kiện loại 1: Si + Présent, Futur simple",
      usage: "Mệnh đề điều kiện sau 'Si' luôn chia ở thì Hiện tại (Présent), mệnh đề kết quả chia ở thì Tương lai đơn (Futur simple). Tuyệt đối không dùng Futur simple ngay sau 'Si'.",
      examples: [
        "Un jour, je serai un grand champion de tennis. (Một ngày nào đó, tôi sẽ là một nhà vô địch quần vợt vĩ đại.)",
        "Nous ferons du vélo ce week-end s'il fait beau. (Chúng tôi sẽ đạp xe cuối tuần này nếu trời đẹp.)",
        "Si je m'entraîne dur tous les jours, je gagnerai le match. (Nếu tôi luyện tập chăm chỉ mỗi ngày, tôi sẽ thắng trận đấu.)",
        "Si tu viens avec nous, nous irons à la piscine. (Nếu bạn đi cùng chúng mình, chúng ta sẽ đến bể bơi.)"
      ]
    },
    dialogue: {
      situation: "Trò chuyện về ước mơ trở thành vận động viên thể thao",
      lines: [
        { spk: "Léo", text: "Tu t’entraînes souvent pour le tournoi de football ?" },
        { spk: "Gabriel", text: "Oui, tous les mercredis et samedis. Je veux que notre équipe gagne la coupe !" },
        { spk: "Léo", text: "Si vous gagnez ce match, vous serez en finale !" },
        { spk: "Gabriel", text: "Exactement ! Et un jour, je serai footballeur professionnel !" }
      ]
    },
    culture: "Nước Pháp và Thế vận hội Olympic (Les Jeux Olympiques) : Nước Pháp là quê hương của Nam tước Pierre de Coubertin - người sáng lập phong trào Olympic hiện đại. Thủ đô Paris đã vinh dự đăng cai Thế vận hội Mùa hè Olympic và Paralympic Paris 2024 lịch sử.",
    projet: "Projet Unité 5 : Làm chiếc cúp thể thao danh giá (Trophée sportif) từ vỏ chai nhựa, lon thiếc hoặc bìa các-tông tái chế, trang trí logo giải đấu và thuyết minh thông điệp thể thao gắn kết vì sức khỏe.",
    quiz: [
      {
        q: "Chọn dạng đúng của động từ 'être' ở ngôi 'je' thì Futur simple:",
        options: ["A. je serai", "B. j'aurai", "C. j'irai", "D. je ferai"],
        a: 0,
        exp: "Động từ 'être' có gốc tương lai là 'ser-' -> je serai."
      },
      {
        q: "Hoàn thiện câu điều kiện: 'Si nous (____) du sport, nous serons en forme.'",
        options: ["A. ferons", "B. faisons", "C. faisions", "D. avons fait"],
        a: 1,
        exp: "Cấu trúc 'Si + présent, futur simple' -> sau Si dùng thì hiện tại 'faisons'."
      }
    ]
  },

  // UNITÉ 6: COMMENT ÊTRE EN BONNE SANTÉ ?
  {
    id: "unite-6",
    uniteNum: 6,
    title: "Unité 6 : Comment être en bonne santé ?",
    subtitle: "Dinh dưỡng cân bằng, giấc ngủ, xả stress, câu mệnh lệnh & lời khuyên",
    theme: "Sức khỏe toàn diện, Thói quen lành mạnh & Lời khuyên",
    badge: "Il faudrait + Infinitif & Câu Mệnh lệnh",
    color: "teal",
    goal: "Nói về chế độ ăn uống cân bằng, tầm quan trọng của giấc ngủ và cách giải tỏa căng thẳng; đưa ra lời khuyên với Il faudrait + infinitif; dùng câu mệnh lệnh (Impératif) khẳng định/phủ định; nêu mục đích với pour / afin de; phân biệt si và même si. Dự án: Thiết kế ý tưởng ứng dụng theo dõi sức khỏe.",
    lecons: [
      {
        num: 1,
        title: "L’alimentation équilibrée",
        focus: "Ăn uống cân bằng, các nhóm thực phẩm dinh dưỡng và thói quen ăn uống tốt.",
        vocab: [
          { fr: "l'alimentation équilibrée", ipa: "/a.li.mɑ̃.ta.sjɔ̃ e.ki.li.bʁe/", vn: "Chế độ dinh dưỡng cân bằng", type: "n.f." },
          { fr: "les fruits et légumes", ipa: "/fʁɥi e le.ɡym/", vn: "Rau củ và trái cây", type: "n.m.pl." },
          { fr: "le sucre / le sel", ipa: "/sykʁ/ /sɛl/", vn: "Đường / Muối", type: "n.m." },
          { fr: "avoir faim / soif", ipa: "/a.vwaʁ fɛ̃/ /swaf/", vn: "Đói bụng / Khát nước", type: "loc.v." }
        ]
      },
      {
        num: 2,
        title: "Le sommeil, c’est important",
        focus: "Nói về giấc ngủ, thời gian nghỉ ngơi và tác động trực tiếp đến sự phát triển.",
        vocab: [
          { fr: "le sommeil", ipa: "/sɔ.mɛj/", vn: "Giấc ngủ", type: "n.m." },
          { fr: "dormir", ipa: "/dɔʁ.miʁ/", vn: "Ngủ", type: "v." },
          { fr: "se coucher", ipa: "/sə ku.ʃe/", vn: "Đi ngủ", type: "v.pron." },
          { fr: "se lever", ipa: "/sə lə.ve/", vn: "Thức dậy", type: "v.pron." },
          { fr: "la fatigue", ipa: "/fa.tiɡ/", vn: "Sự mệt mỏi", type: "n.f." }
        ]
      },
      {
        num: 3,
        title: "Délivre-toi du stress",
        focus: "Nói về áp lực, căng thẳng và các phương pháp thư giãn tinh thần.",
        vocab: [
          { fr: "le stress", ipa: "/stʁɛs/", vn: "Sự căng thẳng, stress", type: "n.m." },
          { fr: "se détendre", ipa: "/sə de.tɑ̃dʁ/", vn: "Thư giãn, xả hơi", type: "v.pron." },
          { fr: "se reposer", ipa: "/sə ʁə.po.ze/", vn: "Nghỉ ngơi", type: "v.pron." },
          { fr: "respirer", ipa: "/ʁɛs.pi.ʁe/", vn: "Hít thở sâu", type: "v." },
          { fr: "le calme", ipa: "/kalm/", vn: "Sự êm dịu, tĩnh lặng", type: "n.m." }
        ]
      },
      {
        num: 4,
        title: "Les conseils santé",
        focus: "Đưa ra lời khuyên sức khỏe; câu mệnh lệnh; nêu mục đích với pour / afin de.",
        vocab: [
          { fr: "le conseil", ipa: "/kɔ̃.sɛj/", vn: "Lời khuyên", type: "n.m." },
          { fr: "l'habitude", ipa: "/a.bi.tyd/", vn: "Thói quen", type: "n.f." },
          { fr: "pour / afin de", ipa: "/puʁ/ /a.fɛ̃ də/", vn: "Để, nhằm mục đích...", type: "prép." },
          { fr: "même si", ipa: "/mɛm si/", vn: "Ngay cả khi, mặc dù", type: "conj." }
        ]
      }
    ],
    grammar: {
      title: "Il faudrait + Infinitif, Thể Mệnh lệnh (Impératif) & Nêu mục đích (Pour / Afin de)",
      formula: "1. Đưa lời khuyên nhẹ nhàng: Il faudrait + Verbe à l'infinitif (Nên làm gì...)\n2. Câu mệnh lệnh (Impératif):\n- Khẳng định: Mange des fruits ! / Repose-toi ! / Faites une pause !\n- Phủ định: Ne mange pas trop de sucre ! / Ne te couche pas tard !\n3. Nêu mục đích: pour / afin de + Infinitif\n4. Phân biệt: Même si (nhượng bộ) vs. Si (điều kiện)",
      usage: "Thể mệnh lệnh chia theo 3 ngôi: tu, nous, vous (đối với động từ nhóm 1 tận cùng -er, ngôi 'tu' bỏ 's'). Ở động từ phản thân, đại từ đứng sau gạch nối ở câu khẳng định (Repose-toi) và quay lại đứng trước ở câu phủ định (Ne te repose pas).",
      examples: [
        "Il faudrait dormir au moins 8 heures par nuit pour être en forme. (Nên ngủ ít nhất 8 tiếng mỗi đêm để có thể trạng tốt.)",
        "Ne te couche pas trop tard ce soir ! (Đừng đi ngủ quá muộn tối nay nhé!)",
        "Je fais de la marche tous les matins afin de me détendre. (Tôi đi bộ mỗi sáng nhằm mục đích thư giãn.)",
        "Même si j’ai beaucoup de devoirs, je fais une petite pause de 10 minutes. (Ngay cả khi có nhiều bài tập, tôi vẫn nghỉ giải lao 10 phút.)"
      ]
    },
    dialogue: {
      situation: "Bác sĩ trường học tư vấn sức khỏe cho học sinh",
      lines: [
        { spk: "Médecin", text: "Bonjour Sarah. Tu as l’air un peu fatiguée aujourd’hui, que se passe-t-il ?" },
        { spk: "Sarah", text: "Bonjour docteur. J’ai souvent mal à la tête et je me sens stressée avant les contrôles." },
        { spk: "Médecin", text: "Il faudrait dormir suffisamment et manger équilibré. Tu prends un bon petit-déjeuner ?" },
        { spk: "Sarah", text: "Pas toujours, je saute parfois le petit-déjeuner quand je suis pressée." },
        { spk: "Médecin", text: "Ne fais plus ça ! Bois beaucoup d'eau et prends du temps pour respirer et te reposer !" }
      ]
    },
    culture: "Thói quen chăm sóc sức khỏe và lối sống lành mạnh tại Pháp: Người Pháp rất chú trọng bữa sáng đầy đủ dưỡng chất, văn hóa đi bộ vận động và các phương pháp chăm sóc tự nhiên như xoa bóp tinh dầu, trà thảo mộc nhằm duy trì sự cân bằng cả về thể chất lẫn tinh thần.",
    projet: "Projet Unité 6 : Thiết kế ý tưởng ứng dụng di động theo dõi sức khỏe tuổi teen (App Santé Ado), mô phỏng các tính năng nhắc nhở uống nước, đồng hồ đếm giờ ngủ đủ 8 tiếng, thực đơn bữa ăn dinh dưỡng và bài tập thở thư giãn.",
    quiz: [
      {
        q: "Chọn câu mệnh lệnh phủ định đúng quy tắc đối với động từ phản thân 'se coucher':",
        options: [
          "A. Ne te couche pas trop tard !",
          "B. Ne couche-toi pas trop tard !",
          "C. Ne te couches pas trop tard !",
          "D. Couche-toi ne pas trop tard !"
        ],
        a: 0,
        exp: "Mệnh lệnh phủ định động từ nhóm 1 ngôi 'tu': bỏ 's', đại từ 'te' đứng trước động từ -> Ne te couche pas."
      },
      {
        q: "Điền liên từ thích hợp: 'Je fais du yoga (____) me détendre après l'école.'",
        options: ["A. même si", "B. pour", "C. parce que", "D. mais"],
        a: 1,
        exp: "Chỉ mục đích cùng chủ ngữ dùng 'pour + infinitif' (để thư giãn)."
      }
    ]
  }
];

// BẢNG NGỮ PHÁP TRỌNG TÂM TOÀN SÁCH
const grammarMatrix = [
  { unité: "Unité 0", cấuTrúc: "Passé composé & Articles partitifs (du, de la, de l', des)", côngDụng: "Kể lại sự việc đã làm hôm qua; gọi món và định lượng đồ ăn thức uống." },
  { unité: "Unité 1", cấuTrúc: "Futur simple & Le comparatif (plus/moins/aussi... que)", côngDụng: "Nói về kế hoạch, dự đoán tương lai năm 2050 và so sánh tính chất/số lượng." },
  { unité: "Unité 2", cấuTrúc: "Jouer de + instrument, pronom 'ça', ne pas + infinitif", côngDụng: "Nói về chơi nhạc cụ, biểu đạt sở thích, bày tỏ ý kiến và phủ định nguyên mẫu." },
  { unité: "Unité 3", cấuTrúc: "Vị trí & hòa hợp tính từ; Imparfait (thói quen quá khứ)", côngDụng: "Miêu tả trang phục, khen chê lịch sự và hồi tưởng thói quen bối cảnh xưa." },
  { unité: "Unité 4", cấuTrúc: "Pouvoir + infinitif; très / trop; trạng từ tần suất", côngDụng: "Nói về khả năng hành động xanh bảo vệ Trái Đất và mức độ thường xuyên." },
  { unité: "Unité 5", cấuTrúc: "Futur simple bất quy tắc & Giả thiết Si + présent, futur", côngDụng: "Nói về hoài bão vô địch và dự đoán kết quả dựa trên điều kiện rèn luyện." },
  { unité: "Unité 6", cấuTrúc: "Il faudrait + infinitif; Impératif; pour/afin de; même si", côngDụng: "Đưa ra lời khuyên sức khỏe, câu mệnh lệnh, chỉ mục đích và sự nhượng bộ." }
];

// BẢNG CHIA ĐỘNG TỪ
const conjugationMatrix = [
  { verbe: "Finir (Nhóm 2)", futur: "je finirai, tu finiras, il finira, nous finirons, vous finirez, ils finiront", imparfait: "je finissais, tu finissais, il finissait, nous finissions, vous finissiez, ils finissaient" },
  { verbe: "Parler (Nhóm 1)", futur: "je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront", imparfait: "je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient" },
  { verbe: "Être (Bất quy tắc)", futur: "je serai, tu seras, il sera, nous serons, vous serez, ils seront", imparfait: "j'étais, tu étais, il était, nous étions, vous étiez, ils étaient" },
  { verbe: "Avoir (Bất quy tắc)", futur: "j'aurai, tu auras, il aura, nous aurons, vous aurez, ils auront", imparfait: "j'avais, tu avais, il avait, nous avions, vous aviez, ils avaient" },
  { verbe: "Faire (Bất quy tắc)", futur: "je ferai, tu feras, il fera, nous ferons, vous ferez, ils feront", imparfait: "je faisais, tu faisais, il faisait, nous faisions, vous faisiez, ils faisaient" },
  { verbe: "Aller (Bất quy tắc)", futur: "j'irai, tu iras, il ira, nous irons, vous irez, ils iront", imparfait: "j'allais, tu allais, il allait, nous allions, vous alliez, ils allaient" }
];

// 6 DỰ ÁN HỌC TẬP TIÊU BIỂU
const projectsList = [
  { unité: "Unité 1", tên: "Mô hình Ô tô bay (Voiture volante)", môTả: "Chế tạo mô hình ô tô bay tương lai bằng bìa cứng tái chế, trang bị thuyết minh tốc độ, pin năng lượng mặt trời và khả năng cất cánh năm 2050." },
  { unité: "Unité 2", tên: "Sách ảnh Ca sĩ Pháp ngữ (Livret photo)", môTả: "Thiết kế tập san ảnh giới thiệu các danh ca của cộng đồng Pháp ngữ, tóm tắt tiểu sử, thể loại âm nhạc tiêu biểu và bài hát yêu thích." },
  { unité: "Unité 3", tên: "Trình diễn Thời trang Tuổi Teen (Défilé de mode)", môTả: "Tổ chức sàn diễn thời trang học đường, phối trang phục trẻ trung, sành điệu, giới thiệu chất liệu và phong cách ăn mặc tự tin." },
  { unité: "Unité 4", tên: "Áp phích Hành tinh Xanh (Affiche écologique)", môTả: "Sáng tạo poster tuyên truyền bảo vệ môi trường với thông điệp mạnh mẽ, 3-5 giải pháp phân loại rác và tiết kiệm nước tại trường học." },
  { unité: "Unité 5", tên: "Cúp Vô địch Tái chế (Trophée sportif)", môTả: "Chế tác cúp thể thao từ vỏ chai, lon thiếc và vật liệu đã qua sử dụng, vinh danh tinh thần đồng đội và lối sống thể thao tích cực." },
  { unité: "Unité 6", tên: "Ý tưởng App Sức khỏe (App Santé Ado)", môTả: "Phác thảo giao diện ứng dụng theo dõi thể trạng cho học sinh THCS, tích hợp đồng hồ nhắc uống nước, đếm giờ ngủ đủ 8 tiếng và thực đơn dinh dưỡng." }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    unitesPart2,
    grammarMatrix,
    conjugationMatrix,
    projectsList
  };
}
