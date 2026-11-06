// tiengphap8_data_p1.js
// Dữ liệu Tiếng Pháp 8 - Phần 1: Unité 0, Unité 1, Unité 2, Unité 3
// Bộ sách Kết nối tri thức với cuộc sống (GDPT 2018)

const unitesPart1 = [
  // UNITÉ 0: BONNE RENTRÉE ! (KHỞI ĐỘNG)
  {
    id: "unite-0",
    uniteNum: 0,
    title: "Unité 0 — Bonne rentrée !",
    subtitle: "Khởi động năm học mới & Ngôi trường tương lai",
    theme: "Trường học tương lai, so sánh và tương lai đơn",
    badge: "Khởi động & Futur simple",
    goal: "Nói về ngôi trường mơ ước trong tương lai; ôn lại thì tương lai đơn (futur simple) của động từ être và avoir; so sánh hơn, kém, bằng về tính chất và số lượng.",
    lecons: [
      {
        num: "0",
        title: "Mon collège du futur (Ngôi trường tương lai của tôi)",
        focus: "Futur simple (être, avoir) & Comparaison",
        vocab: [
          { fr: "le bâtiment", ipa: "/ba.ti.mɑ̃/", type: "n.m.", vn: "Tòa nhà, dãy phòng học" },
          { fr: "l'espace vert", ipa: "/ɛs.pas vɛʁ/", type: "n.m.", vn: "Không gian cây xanh" },
          { fr: "la cantine scolaire", ipa: "/kɑ̃.tin sko.lɛʁ/", type: "n.f.", vn: "Căng-tin, nhà ăn trường học" },
          { fr: "la bibliothèque moderne", ipa: "/bi.bli.jɔ.tɛk mɔ.dɛʁn/", type: "n.f.", vn: "Thư viện hiện đại" },
          { fr: "les devoirs", ipa: "/də.vwaʁ/", type: "n.m.pl.", vn: "Bài tập về nhà" },
          { fr: "l'équipement numérique", ipa: "/e.kip.mɑ̃ ny.me.ʁik/", type: "n.m.", vn: "Trang thiết bị kỹ thuật số" },
          { fr: "moderne", ipa: "/mɔ.dɛʁn/", type: "adj.", vn: "Hiện đại, tân tiến" },
          { fr: "spacieux / spacieuse", ipa: "/spa.sjø, -z/", type: "adj.", vn: "Rộng rãi, thoáng đãng" },
          { fr: "agréable", ipa: "/a.ɡʁe.abl/", type: "adj.", vn: "Dễ chịu, thoải mái" },
          { fr: "écologique", ipa: "/e.kɔ.lɔ.ʒik/", type: "adj.", vn: "Thân thiện môi trường, sinh thái" }
        ]
      }
    ],
    grammar: {
      title: "1. Futur simple của Être & Avoir / 2. Câu so sánh tính chất & số lượng",
      formula: "① Futur simple:\n- ÊTRE: je serai, tu seras, il/elle sera, nous serons, vous serez, ils/elles seront\n- AVOIR: j'aurai, tu auras, il/elle aura, nous aurons, vous aurez, ils/elles auront (Il y aura... = Sẽ có...)\n\n② So sánh tính chất: plus / moins / aussi + adjectif + que\n③ So sánh số lượng: plus de / moins de / autant de + nom + que",
      usage: "Thì tương lai đơn (futur simple) dùng để diễn tả những dự đoán, kế hoạch hoặc viễn cảnh trong tương lai. Cấu trúc so sánh giúp đối chiếu mức độ của tính từ hoặc số lượng danh từ giữa trường học hiện tại và ngôi trường tương lai.",
      examples: [
        "Dans l'avenir, les bâtiments du collège seront plus écologiques.(Trong tương lai, các tòa nhà của trường sẽ thân thiện với môi trường hơn.)",
        "Il y aura plus d'espaces verts et une grande piscine.(Sẽ có nhiều không gian cây xanh hơn và một bể bơi lớn.)",
        "La bibliothèque sera plus moderne que l'ancienne bibliothèque.(Thư viện sẽ hiện đại hơn thư viện cũ.)",
        "Les élèves auront moins de devoirs à la maison.(Học sinh sẽ có ít bài tập về nhà hơn.)"
      ]
    },
    dialogue: {
      situation: "Hai bạn học sinh trao đổi về ngôi trường mơ ước trong ngày tựu trường",
      lines: [
        { spk: "Lucas", text: "Salut Sophie ! Comment imagines-tu notre collège dans vingt ans ?" },
        { spk: "Sophie", text: "Je pense que les salles de classe seront plus spacieuses et équipées de robots." },
        { spk: "Lucas", text: "C'est super ! Et pour la cantine ?" },
        { spk: "Sophie", text: "Il y aura des repas biologiques délicieux et nous aurons autant de temps pour faire du sport." }
      ]
    },
    culture: "Ngày tựu trường (La rentrée scolaire) ở Pháp diễn ra vào đầu tháng 9 sau 2 tháng nghỉ hè. Học sinh bước vào năm học mới với sách vở, thời khóa biểu mới và gặp lại bạn bè, thầy cô; nét tương đồng với ngày khai giảng mùng 5 tháng 9 tại Việt Nam.",
    projet: "Dessine et présente ton collège du futur: Vẽ sơ đồ và thuyết trình bằng 5 câu tiếng Pháp miêu tả ngôi trường tương lai.",
    quiz: [
      {
        q: "Điền dạng đúng của động từ 'être' ở futur simple: 'Dans le futur, notre école (____) plus verte.'",
        options: ["A. est", "B. sera", "C. était", "D. serons"],
        a: 1,
        exp: "Chủ ngữ 'notre école' (ngôi thứ 3 số ít) đi với dạng 'sera' của động từ être ở thì futur simple."
      },
      {
        q: "Chọn câu so sánh số lượng đúng nghĩa 'Sẽ có ít bài tập hơn':",
        options: [
          "A. Il y aura moins devoirs.",
          "B. Il y aura moins de devoirs.",
          "C. Il y aura aussi devoirs.",
          "D. Il y aura plus devoirs."
        ],
        a: 1,
        exp: "So sánh số lượng danh từ bắt buộc phải có giới từ 'de': moins de + nom."
      }
    ]
  },

  // UNITÉ 1: AUX COULEURS DES FESTIVALS
  {
    id: "unite-1",
    uniteNum: 1,
    title: "Unité 1 — Aux couleurs des festivals",
    subtitle: "Lễ hội muôn màu & Kỷ niệm đáng nhớ",
    theme: "Lễ hội, biểu diễn đường phố, truyện tranh BD và kể chuyện quá khứ",
    badge: "Lễ hội & Imparfait vs Passé composé",
    goal: "Kể lại một lễ hội hoặc sự kiện văn hóa đã tham gia; miêu tả khung cảnh và không khí trong quá khứ bằng Imparfait; kể chuỗi sự việc cụ thể bằng Passé composé; sử dụng động từ đại từ.",
    lecons: [
      {
        num: "1",
        title: "Souvenirs du festival d'Angoulême",
        focus: "Imparfait: Miêu tả bối cảnh và thói quen quá khứ",
        vocab: [
          { fr: "le festival", ipa: "/fɛs.ti.val/", type: "n.m.", vn: "Lễ hội, liên hoan" },
          { fr: "la bande dessinée (BD)", ipa: "/bɑ̃d de.si.ne/", type: "n.f.", vn: "Truyện tranh phong cách Pháp-Bỉ" },
          { fr: "l'auteur / le dessinateur", ipa: "/o.tœʁ, de.si.na.tœʁ/", type: "n.m.", vn: "Tác giả, họa sĩ vẽ truyện" },
          { fr: "l'album de BD", ipa: "/al.bɔm də be.de/", type: "n.m.", vn: "Tập truyện tranh" },
          { fr: "la séance de dédicaces", ipa: "/se.ɑ̃s də de.di.kas/", type: "n.f.", vn: "Buổi ký tặng sách/truyện" },
          { fr: "animé / animée", ipa: "/a.ni.me/", type: "adj.", vn: "Náo nhiệt, sôi động" },
          { fr: "magique", ipa: "/ma.ʒik/", type: "adj.", vn: "Kỳ diệu, huyền ảo" },
          { fr: "impressionnant(e)", ipa: "/ɛ̃.pʁe.sjɔ.nɑ̃, -t/", type: "adj.", vn: "Gây ấn tượng sâu sắc" }
        ]
      },
      {
        num: "2",
        title: "Nous sommes allés au Festival d'Avignon",
        focus: "Passé composé: Kể sự kiện xác định đã hoàn tất",
        vocab: [
          { fr: "le spectacle de rue", ipa: "/spɛk.takl də ʁy/", type: "n.m.", vn: "Buổi biểu diễn đường phố" },
          { fr: "l'acrobate", ipa: "/a.kʁɔ.bat/", type: "n.m./f.", vn: "Diễn viên xiếc nhào lộn" },
          { fr: "le jongleur", ipa: "/ʒɔ̃.ɡlœʁ/", type: "n.m.", vn: "Nghệ sĩ tung hứng" },
          { fr: "la marionnette", ipa: "/ma.ʁjɔ.nɛt/", type: "n.f.", vn: "Con rối, kịch rối" },
          { fr: "le public / les spectateurs", ipa: "/py.blik, spɛk.ta.tœʁ/", type: "n.m.", vn: "Khán giả, công chúng xem" },
          { fr: "en plein air", ipa: "/ɑ̃ plɛ̃ n‿ɛʁ/", type: "loc.adv.", vn: "Ngoài trời" },
          { fr: "assister à", ipa: "/a.sis.te a/", type: "v.", vn: "Tham dự, theo dõi (buổi diễn)" },
          { fr: "festif / festive", ipa: "/fɛs.tif, -v/", type: "adj.", vn: "Mang không khí lễ hội tưng bừng" }
        ]
      },
      {
        num: "3",
        title: "Le festival de la BD d'Angoulême",
        focus: "Verbes pronominaux au passé composé",
        vocab: [
          { fr: "avoir lieu", ipa: "/a.vwaʁ ljø/", type: "loc.v.", vn: "Diễn ra, được tổ chức" },
          { fr: "durer", ipa: "/dy.ʁe/", type: "v.", vn: "Kéo dài (thời gian)" },
          { fr: "être destiné(e) à", ipa: "/ɛtʁ dɛs.ti.ne a/", type: "loc.v.", vn: "Dành riêng cho đối tượng nào" },
          { fr: "se reposer", ipa: "/sə ʁə.po.ze/", type: "v.pron.", vn: "Nghỉ ngơi" },
          { fr: "se préparer à", ipa: "/sə pʁe.pa.ʁe a/", type: "v.pron.", vn: "Chuẩn bị cho điều gì" },
          { fr: "se rencontrer", ipa: "/sə ʁɑ̃.kɔ̃.tʁe/", type: "v.pron.", vn: "Gặp gỡ nhau (tương hỗ)" },
          { fr: "s'amuser", ipa: "/s‿a.my.ze/", type: "v.pron.", vn: "Vui chơi thỏa thích" },
          { fr: "le stand d'exposition", ipa: "/stɑnd d‿ɛks.po.zi.sjɔ̃/", type: "n.m.", vn: "Gian hàng triển lãm" }
        ]
      },
      {
        num: "4",
        title: "Une expérience inoubliable",
        focus: "Nêu nhận xét, cảm nhận & Đánh giá sự kiện",
        vocab: [
          { fr: "inoubliable", ipa: "/i.nu.bli.jabl/", type: "adj.", vn: "Không thể nào quên" },
          { fr: "fascinant(e)", ipa: "/fa.si.nɑ̃, -t/", type: "adj.", vn: "Cuốn hút, mê hoặc" },
          { fr: "enrichissant(e)", ipa: "/ɑ̃.ʁi.ʃi.sɑ̃, -t/", type: "adj.", vn: "Bổ ích, làm giàu tri thức" },
          { fr: "talentueux / talentueuse", ipa: "/ta.lɑ̃.tɥø, -z/", type: "adj.", vn: "Tài năng, khéo léo" },
          { fr: "décevant(e)", ipa: "/de.sə.vɑ̃, -t/", type: "adj.", vn: "Đáng thất vọng" },
          { fr: "monotone", ipa: "/mɔ.nɔ.tɔn/", type: "adj.", vn: "Đơn điệu, nhàm chán" },
          { fr: "adorer", ipa: "/a.dɔ.ʁe/", type: "v.", vn: "Cực kỳ yêu thích, say mê" },
          { fr: "l'émotion", ipa: "/e.mo.sjɔ̃/", type: "n.f.", vn: "Cảm xúc chân thành" }
        ]
      }
    ],
    grammar: {
      title: "1. Imparfait vs Passé composé / 2. Động từ đại từ ở Passé composé",
      formula: "① Imparfait (Thân nous ở hiện tại + -ais, -ais, -ait, -ions, -iez, -aient)\n- Être: j'étais, tu étais, il était, nous étions, vous étiez, ils étaient\n\n② Passé composé (Sujet + avoir/être au présent + participe passé)\n- Với être: hòa hợp giống và số với chủ ngữ (Elle est allée, Ils sont partis)\n\n③ Động từ đại từ ở Passé composé (luôn dùng trợ động từ ÊTRE):\n- je me suis reposé(e), tu t'es reposé(e), il s'est reposé, elle s'est reposée\n- nous nous sommes reposé(e)s, vous vous êtes reposé(e)s, ils/elles se sont reposé(e)s\n- Phủ định: Je ne me suis pas reposé(e).",
      usage: "Dùng Imparfait để miêu tả bối cảnh, phong cảnh, thời tiết, thói quen lặp lại trong quá khứ. Dùng Passé composé để kể hành động đơn lẻ, dứt khoát, chuỗi sự kiện đã hoàn tất. Động từ đại từ có giá trị phản thân (tác động lên chính mình) hoặc tương hỗ (nhiều người tác động lẫn nhau).",
      examples: [
        "Les rues d'Angoulême étaient très animées.(Đường phố Angoulême khi đó rất náo nhiệt - Imparfait miêu tả).",
        "Hier soir, nous avons assisté à un spectacle magnifique.(Tối qua, chúng tôi đã tham dự một buổi biểu diễn lộng lẫy - Passé composé kể sự kiện).",
        "Les deux amis se sont rencontrés devant le château.(Hai người bạn đã gặp nhau trước lâu đài - Pronominal tương hỗ).",
        "C'était une fête magique, j'ai adoré l'ambiance.(Đó là một lễ hội kỳ diệu, tôi rất thích bầu không khí)."
      ]
    },
    dialogue: {
      situation: "Hai bạn kể lại kỷ niệm tham dự Festival d'Avignon vào mùa hè vừa qua",
      lines: [
        { spk: "Camille", text: "L'été dernier, je suis allée au Festival d'Avignon avec ma famille." },
        { spk: "Marc", text: "C'était comment ? Il y avait beaucoup de monde ?" },
        { spk: "Camille", text: "Oui ! La ville était pleine d'artistes. Nous avons vu des jongleurs et des acrobates fabuleux." },
        { spk: "Marc", text: "Tu t'es bien amusée alors ?" },
        { spk: "Camille", text: "Absolument, c'était une expérience inoubliable !" }
      ]
    },
    culture: "Festival international de la bande dessinée d'Angoulême (tháng 1) và Festival d'Avignon (tháng 7 về nghệ thuật sân khấu) là 2 lễ hội văn hóa tầm cỡ thế giới của Pháp; liên hệ với Lễ hội Festival Huế và các lễ hội truyền thống đặc sắc của Việt Nam.",
    projet: "Création d'une affiche de festival: Làm áp phích giới thiệu một lễ hội (tên, ngày, nơi, hoạt động nổi bật, giá vé và minh họa).",
    quiz: [
      {
        q: "Chọn thì thích hợp để miêu tả thời tiết trong quá khứ: 'Hier, il (____) très beau à Avignon.'",
        options: ["A. fait", "B. a fait", "C. faisait", "D. fera"],
        a: 2,
        exp: "Miêu tả thời tiết, khung cảnh nền trong quá khứ ta dùng thì Imparfait: Il faisait beau."
      },
      {
        q: "Dạng quá khứ đúng của động từ đại từ: 'Elles (____) au festival.' (se rencontrer)",
        options: [
          "A. ont rencontré",
          "B. se sont rencontrées",
          "C. se sont rencontré",
          "D. sont rencontrées"
        ],
        a: 1,
        exp: "Động từ đại từ chia ở passé composé với trợ động từ Être và hòa hợp giống số: Elles se sont rencontrées."
      }
    ]
  },

  // UNITÉ 2: LES INVENTIONS AU FIL DU TEMPS
  {
    id: "unite-2",
    uniteNum: 2,
    title: "Unité 2 — Les inventions au fil du temps",
    subtitle: "Phát minh qua thời gian & Tiến bộ công nghệ",
    theme: "Chức năng đồ vật, lịch sử phát minh, số liệu thống kê và đại từ quan hệ",
    badge: "Công nghệ & Qui / Que",
    goal: "Nói về chức năng của các thiết bị công nghệ; đọc hiểu dữ liệu tỉ lệ phần trăm; so sánh tính năng và sử dụng đại từ quan hệ qui / que để nối câu; phối hợp Imparfait và Passé composé trong văn bản lịch sử.",
    lecons: [
      {
        num: "1",
        title: "Quelles sont les fonctions d'un smartphone ?",
        focus: "Pronoms relatifs qui / que (qu') & Chức năng đồ vật",
        vocab: [
          { fr: "le smartphone", ipa: "/smaʁt.fon/", type: "n.m.", vn: "Điện thoại thông minh" },
          { fr: "l'écran tactile", ipa: "/e.kʁɑ̃ tak.til/", type: "n.m.", vn: "Màn hình cảm ứng" },
          { fr: "l'ordinateur personnel", ipa: "/ɔʁ.di.na.tœʁ pɛʁ.sɔ.nɛl/", type: "n.m.", vn: "Máy vi tính cá nhân (PC)" },
          { fr: "l'ampoule électrique", ipa: "/ɑ̃.pul e.lɛk.tʁik/", type: "n.f.", vn: "Bóng đèn điện phát sáng" },
          { fr: "servir à (+ inf.)", ipa: "/sɛʁ.viʁ a/", type: "v.", vn: "Dùng để làm việc gì" },
          { fr: "avoir pour fonction de", ipa: "/a.vwaʁ puʁ fɔ̃k.sjɔ̃ də/", type: "loc.v.", vn: "Có chức năng là..." },
          { fr: "être utilisé pour", ipa: "/ɛtʁ y.ti.li.ze puʁ/", type: "loc.v.", vn: "Được sử dụng cho mục đích..." },
          { fr: "remplacer", ipa: "/ʁɑ̃.pla.se/", type: "v.", vn: "Thay thế cho cái gì" }
        ]
      },
      {
        num: "2",
        title: "En France, un inventeur sur six était une femme",
        focus: "Biểu đạt số lượng & Tỉ lệ (Proportion)",
        vocab: [
          { fr: "l'inventeur / l'inventrice", ipa: "/ɛ̃.vɑ̃.tœʁ, -tʁis/", type: "n.", vn: "Nhà phát minh (nam/nữ)" },
          { fr: "l'invention", ipa: "/ɛ̃.vɑ̃.sjɔ̃/", type: "n.f.", vn: "Sự phát minh, sáng chế" },
          { fr: "le brevet", ipa: "/bʁə.vɛ/", type: "n.m.", vn: "Bằng sáng chế, bằng phát minh" },
          { fr: "la proportion", ipa: "/pʁɔ.pɔʁ.sjɔ̃/", type: "n.f.", vn: "Tỉ lệ trong một tổng thể" },
          { fr: "un quart (25 %)", ipa: "/œ̃ kaʁ/", type: "loc.n.", vn: "Một phần tư (25%)" },
          { fr: "un tiers (environ 33 %)", ipa: "/œ̃ tjɛʁ/", type: "loc.n.", vn: "Một phần ba (~33%)" },
          { fr: "une moitié (50 %)", ipa: "/yn mwa.tje/", type: "loc.n.", vn: "Một nửa (50%)" },
          { fr: "un sur six", ipa: "/œ̃ syʁ sis/", type: "loc.", vn: "Cứ một trên sáu (1/6)" }
        ]
      },
      {
        num: "3",
        title: "Le livre numérique et les jeunes",
        focus: "Comparatif & Superlatif (So sánh hơn nhất)",
        vocab: [
          { fr: "le livre numérique", ipa: "/livʁ ny.me.ʁik/", type: "n.m.", vn: "Sách điện tử (E-book)" },
          { fr: "la liseuse", ipa: "/li.zøz/", type: "n.f.", vn: "Máy đọc sách điện tử" },
          { fr: "léger / légère", ipa: "/le.ʒe, -ɛʁ/", type: "adj.", vn: "Nhẹ nhàng, gọn nhẹ" },
          { fr: "pratique", ipa: "/pʁa.tik/", type: "adj.", vn: "Tiện lợi, thiết thực" },
          { fr: "l'avantage", ipa: "/a.vɑ̃.taʒ/", type: "n.m.", vn: "Ưu điểm, lợi thế" },
          { fr: "l'inconvénient", ipa: "/ɛ̃.kɔ̃.ve.njɑ̃/", type: "n.m.", vn: "Nhược điểm, điểm bất tiện" },
          { fr: "la capacité de stockage", ipa: "/ka.pa.si.te də stɔ.kaʒ/", type: "n.f.", vn: "Dung lượng bộ nhớ lưu trữ" },
          { fr: "télécharger", ipa: "/te.le.ʃaʁ.ʒe/", type: "v.", vn: "Tải xuống, download" }
        ]
      },
      {
        num: "4",
        title: "L'intelligence artificielle, une révolution",
        focus: "Imparfait & Passé composé trong lịch sử công nghệ",
        vocab: [
          { fr: "l'intelligence artificielle (IA)", ipa: "/ɛ̃.tɛ.li.ʒɑ̃s aʁ.ti.fi.sjɛl/", type: "n.f.", vn: "Trí tuệ nhân tạo (AI)" },
          { fr: "le progrès scientifique", ipa: "/pʁɔ.ɡʁɛ sjɑ̃.ti.fik/", type: "n.m.", vn: "Tiến bộ khoa học" },
          { fr: "révolutionner", ipa: "/ʁe.vɔ.ly.sjɔ.ne/", type: "v.", vn: "Cách mạng hóa" },
          { fr: "l'application", ipa: "/a.pli.ka.sjɔ̃/", type: "n.f.", vn: "Ứng dụng phần mềm" },
          { fr: "le robot assistant", ipa: "/ʁɔ.bo a.sis.tɑ̃/", type: "n.m.", vn: "Robot trợ lý" },
          { fr: "auparavant", ipa: "/o.pa.ʁa.vɑ̃/", type: "adv.", vn: "Trước đây, ngày trước" },
          { fr: "désormais", ipa: "/de.zɔʁ.mɛ/", type: "adv.", vn: "Kể từ nay trở đi" },
          { fr: "automatique", ipa: "/o.tɔ.ma.tik/", type: "adj.", vn: "Tự động" }
        ]
      }
    ],
    grammar: {
      title: "1. Pronoms relatifs Qui / Que / 2. So sánh hơn nhất (Superlatif)",
      formula: "① Đại từ quan hệ:\n- QUI: thay thế chủ ngữ (Sujet) của mệnh đề phụ (theo sau là động từ): Nom + QUI + Verbe\n- QUE (QU'): thay thế bổ ngữ trực tiếp (COD) của mệnh đề phụ: Nom + QUE + Sujet + Verbe\n\n② So sánh hơn nhất (Superlatif):\n- Tính từ: le / la / les plus (moins) + adjectif\n- Danh từ: le plus de / le moins de + nom",
      usage: "Đại từ quan hệ 'qui' và 'que' giúp nối hai câu đơn có cùng một danh từ chung thành câu phức mượt mà, tránh lặp lại từ. Cấu trúc Superlatif dùng để biểu thị tính chất nổi bật nhất trong một tập hợp.",
      examples: [
        "J'utilise un smartphone qui a un écran tactile très moderne.(Tôi sử dụng một chiếc điện thoại mà có màn hình cảm ứng rất hiện đại - qui làm chủ ngữ).",
        "Voici l'application que les jeunes préfèrent.(Đây là ứng dụng mà giới trẻ ưa chuộng nhất - que làm COD).",
        "Le livre numérique est le plus pratique pour voyager.(Sách điện tử là tiện lợi nhất khi đi du lịch - Superlatif tính từ).",
        "Avant, les calculs étaient lents, puis l'ordinateur a changé le monde.(Trước kia, việc tính toán rất chậm, rồi máy vi tính đã thay đổi thế giới - Imparfait & Passé composé)."
      ]
    },
    dialogue: {
      situation: "Thảo luận về tính tiện lợi của sách giấy và máy đọc sách điện tử",
      lines: [
        { spk: "Thomas", text: "Tu lis encore des livres papier, Léa ?" },
        { spk: "Léa", text: "Oui, j'adore le contact du papier. Et toi ?" },
        { spk: "Thomas", text: "Moi, j'ai une liseuse que mon père m'a offerte. C'est l'appareil le plus léger pour lire partout." },
        { spk: "Léa", text: "C'est vrai, mais les livres numériques n'ont pas la même odeur !" }
      ]
    },
    culture: "Các phát minh vĩ đại của người Pháp: máy chụp ảnh của Nicéphore Niépce, vắc-xin phòng bệnh dại của Louis Pasteur, chữ nổi của Louis Braille, điện ảnh của anh em nhà Lumière.",
    projet: "Conception d'un robot assistant: Thiết kế ý tưởng robot trợ giảng tiếng Pháp (tên gọi, hình dáng, các chức năng luyện phát âm, sửa bài tập, đố vui).",
    quiz: [
      {
        q: "Điền đại từ quan hệ thích hợp: 'C'est une machine (____) aide les scientifiques.'",
        options: ["A. qui", "B. que", "C. qu'", "D. où"],
        a: 0,
        exp: "Phía sau là động từ 'aide', vậy đại từ thay thế chủ ngữ là 'qui'."
      },
      {
        q: "Điền đại từ quan hệ thích hợp: 'L'ordinateur (____) Alice a acheté est très rapide.'",
        options: ["A. qui", "B. que", "C. qu'", "D. dont"],
        a: 2,
        exp: "Phía sau là chủ ngữ 'Alice' bắt đầu bằng nguyên âm 'A', nên 'que' được viết rút gọn thành 'qu''."
      }
    ]
  },

  // UNITÉ 3: LES ADOS ET LA LECTURE
  {
    id: "unite-3",
    uniteNum: 3,
    title: "Unité 3 — Les ados et la lecture",
    subtitle: "Thanh thiếu niên & Văn hóa đọc sách",
    theme: "Thể loại sách, mượn/trả sách thư viện, hội sách và đại từ COD/COI",
    badge: "Văn hóa đọc & Pronoms COD / COI",
    goal: "Nói về thói quen và sở thích đọc sách; sử dụng cấu trúc mượn/cho mượn/trả sách (prêter, emprunter, rendre); phân biệt mốc thời gian depuis và à partir de; thay thế danh từ bằng đại từ tân ngữ COD và COI.",
    lecons: [
      {
        num: "1",
        title: "C'est quoi un conte philosophique ?",
        focus: "Yêu cầu nhắc lại & Giải thích thuật ngữ văn học",
        vocab: [
          { fr: "le conte philosophique", ipa: "/kɔ̃t fi.lɔ.zɔ.fik/", type: "n.m.", vn: "Truyện triết lý (ví dụ: Le Petit Prince)" },
          { fr: "le roman d'aventure", ipa: "/ʁɔ.mɑ̃ d‿a.vɑ̃.tyʁ/", type: "n.m.", vn: "Tiểu thuyết phiêu lưu mạo hiểm" },
          { fr: "le roman policier", ipa: "/ʁɔ.mɑ̃ pɔ.li.sje/", type: "n.m.", vn: "Tiểu thuyết trinh thám hình sự" },
          { fr: "la fantasy", ipa: "/fɑ̃.ta.zi/", type: "n.f.", vn: "Truyện giả tưởng, kỳ ảo" },
          { fr: "le roman graphique", ipa: "/ʁɔ.mɑ̃ ɡʁa.fik/", type: "n.m.", vn: "Tiểu thuyết đồ họa" },
          { fr: "se passionner pour", ipa: "/sə pa.sjɔ.ne puʁ/", type: "v.pron.", vn: "Say mê, đam mê cái gì" },
          { fr: "pouvez-vous répéter ?", ipa: "/pu.ve vu ʁe.pe.te/", type: "loc.", vn: "Thầy/Cô có thể nhắc lại được không ạ?" },
          { fr: "explique-moi !", ipa: "/ɛks.plik mwa/", type: "loc.", vn: "Hãy giải thích cho mình với!" }
        ]
      },
      {
        num: "2",
        title: "Tu peux me prêter ton livre ?",
        focus: "Prêter / Emprunter / Rendre: Trao đổi & Mượn sách",
        vocab: [
          { fr: "prêter (quelque chose à quelqu'un)", ipa: "/pʁɛ.te/", type: "v.", vn: "Cho ai mượn cái gì" },
          { fr: "emprunter (quelque chose à...)", ipa: "/ɑ̃.pʁœ̃.te/", type: "v.", vn: "Mượn cái gì từ ai / từ thư viện" },
          { fr: "rendre", ipa: "/ʁɑ̃dʁ/", type: "v.", vn: "Trả lại (đồ đã mượn)" },
          { fr: "la bibliothèque scolaire", ipa: "/bi.bli.jɔ.tɛk sko.lɛʁ/", type: "n.f.", vn: "Thư viện trường học" },
          { fr: "à temps", ipa: "/a tɑ̃/", type: "loc.adv.", vn: "Đúng hạn, kịp giờ" },
          { fr: "la carte de lecteur", ipa: "/kaʁt də lɛk.tœʁ/", type: "n.f.", vn: "Thẻ bạn đọc thư viện" },
          { fr: "le signet / le marque-page", ipa: "/si.ɲɛ, maʁk paʒ/", type: "n.m.", vn: "Thẻ đánh dấu trang sách" },
          { fr: "prendre soin de", ipa: "/pʁɑ̃dʁ swɛ̃ də/", type: "loc.v.", vn: "Giữ gìn cẩn thận" }
        ]
      },
      {
        num: "3",
        title: "Le Salon du livre jeunesse",
        focus: "Biểu đạt thời gian: Depuis vs À partir de",
        vocab: [
          { fr: "le salon du livre", ipa: "/sa.lɔ̃ dy livʁ/", type: "n.m.", vn: "Hội chợ sách, ngày hội triển lãm sách" },
          { fr: "la maison d'édition", ipa: "/mɛ.zɔ̃ d‿e.di.sjɔ̃/", type: "n.f.", vn: "Nhà xuất bản" },
          { fr: "la rencontre littéraire", ipa: "/ʁɑ̃.kɔ̃tʁ li.te.ʁɛʁ/", type: "n.f.", vn: "Buổi giao lưu văn học" },
          { fr: "le prix littéraire", ipa: "/pʁi li.te.ʁɛʁ/", type: "n.m.", vn: "Giải thưởng văn học" },
          { fr: "depuis", ipa: "/də.pɥi/", type: "prép.", vn: "Từ (việc đã bắt đầu và còn tiếp diễn)" },
          { fr: "à partir de", ipa: "/a paʁ.tiʁ də/", type: "loc.prép.", vn: "Kể từ mốc thời gian bắt đầu" },
          { fr: "l'entrée gratuite", ipa: "/ɑ̃.tʁe ɡʁa.tɥit/", type: "n.f.", vn: "Vé vào cửa miễn phí" },
          { fr: "l'écrivain / l'écrivaine", ipa: "/e.kʁi.vɛ̃, -vɛn/", type: "n.", vn: "Nhà văn (nam/nữ)" }
        ]
      },
      {
        num: "4",
        title: "Dis-moi ce que tu lis !",
        focus: "Pronoms compléments COD & COI",
        vocab: [
          { fr: "recommander", ipa: "/ʁə.kɔ.mɑ̃.de/", type: "v.", vn: "Gợi ý, giới thiệu cho ai" },
          { fr: "passionnant(e)", ipa: "/pa.sjɔ.nɑ̃, -t/", type: "adj.", vn: "Hấp dẫn, lôi cuốn" },
          { fr: "l'intrigue", ipa: "/ɛ̃.tʁiɡ/", type: "n.f.", vn: "Cốt truyện, tình tiết" },
          { fr: "le personnage principal", ipa: "/pɛʁ.sɔ.naʒ pʁɛ̃.si.pal/", type: "n.m.", vn: "Nhân vật chính" },
          { fr: "dévorer un livre", ipa: "/de.vɔ.ʁe œ̃ livʁ/", type: "loc.v.", vn: "Đọc say sưa ngấu nghiến" },
          { fr: "le chef-d'œuvre", ipa: "/ʃɛf.d‿œvʁ/", type: "n.m.", vn: "Kiệt tác văn học" },
          { fr: "illustré / illustrée", ipa: "/i.lys.tʁe/", type: "adj.", vn: "Được minh họa tranh vẽ" },
          { fr: "feuilleter", ipa: "/fœj.te/", type: "v.", vn: "Lật giở từng trang xem lướt" }
        ]
      }
    ],
    grammar: {
      title: "1. Đại từ COD & COI / 2. Phân biệt Depuis & À partir de",
      formula: "① Đại từ tân ngữ trực tiếp (COD): me, te, le / la / l', nous, vous, les\n- Đặt trước động từ chia: Je lis ce roman. → Je LE lis.\n- Với động từ nguyên mẫu: Je vais LE lire.\n\n② Đại từ tân ngữ gián tiếp (COI chỉ người đi với giới từ à): me, te, lui, nous, vous, leur\n- Je parle à mon ami. → Je LUI parle.\n- Je prête des livres aux élèves. → Je LEUR prête des livres.\n\n③ Depuis vs À partir de:\n- DEPUIS + khoảng thời gian / mốc quá khứ: hành động kéo dài đến nay (Je lis ce livre depuis deux jours).\n- À PARTIR DE + thời điểm: mốc khởi đầu có hiệu lực (Le salon ouvre à partir de lundi).",
      usage: "Đại từ COD/COI thay thế danh từ đã biết để câu văn không bị trùng lặp. Lưu ý xác định động từ có đi kèm giới từ 'à' hay không để chọn đúng giữa COD (le/la/les) và COI (lui/leur).",
      examples: [
        "Tu aimes cette bande dessinée ? ― Oui, je la lis tous les soirs.(Bạn thích bộ truyện tranh này chứ? ― Vâng, tôi đọc nó mỗi tối - COD la).",
        "Tu as rendu le livre au professeur ? ― Oui, je lui ai rendu hier.(Bạn đã trả sách cho thầy giáo chưa? ― Rồi, tôi đã trả sách cho thầy hôm qua - COI lui).",
        "Je fréquente cette bibliothèque depuis trois ans.(Tôi thường lui tới thư viện này được 3 năm rồi - depuis).",
        "Les inscriptions commencent à partir de demain.(Việc đăng ký bắt đầu kể từ ngày mai - à partir de)."
      ]
    },
    dialogue: {
      situation: "Hai bạn mượn sách tại thư viện trường",
      lines: [
        { spk: "Julien", text: "Tu as fini 'Le Petit Prince', Manon ?" },
        { spk: "Manon", text: "Oui, je l'ai terminé hier soir. C'est un conte philosophique merveilleux !" },
        { spk: "Julien", text: "Tu peux me le prêter ? J'aimerais beaucoup le lire." },
        { spk: "Manon", text: "Bien sûr, je te le donne tout de suite. Prends-en bien soin !" }
      ]
    },
    culture: "Đêm đọc sách (Les Nuits de la lecture) tại Pháp là sự kiện thường niên do Bộ Văn hóa Pháp tổ chức vào tháng 1 với hàng nghìn buổi đọc sách đêm tại các bảo tàng, lâu đài và thư viện công cộng.",
    projet: "Affiche de présentation d'une BD: Thiết kế poster giới thiệu một bộ truyện tranh nổi tiếng (tựa đề, tác giả/họa sĩ, nhân vật chính, tóm tắt cốt truyện và lời nhận xét).",
    quiz: [
      {
        q: "Thay thế danh từ in nghiêng bằng đại từ thích hợp: 'Je prête mon livre à Paul.'",
        options: [
          "A. Je le prête à Paul. / Je lui prête mon livre.",
          "B. Je leur prête mon livre.",
          "C. Je les prête mon livre.",
          "D. Je la prête mon livre."
        ],
        a: 0,
        exp: "Thay 'mon livre' (COD nam số ít) bằng 'le'; thay 'à Paul' (COI người số ít) bằng 'lui'."
      },
      {
        q: "Chọn từ chỉ thời gian thích hợp: 'Le festival du livre sera ouvert (____) 15 octobre.'",
        options: ["A. depuis", "B. à partir du", "C. pendant", "D. dans"],
        a: 1,
        exp: "Chỉ mốc thời gian bắt đầu có hiệu lực trong tương lai: à partir de (à partir du 15 octobre)."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { unitesPart1 };
}
