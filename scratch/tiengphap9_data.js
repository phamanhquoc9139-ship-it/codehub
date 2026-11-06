// tiengphap9_data.js
// Comprehensive dataset for Tiếng Pháp 9 (Unité 0 to Unité 6)

const unitsData = [
  {
    id: "unite-0",
    unitNum: "Unité 0",
    badge: "Révision & Rentrée",
    title: "Retour à l’école",
    vietTitle: "Trở lại trường học & Kể lại kỳ nghỉ",
    desc: "Ôn tập kiến thức nền tảng, kể lại kỳ nghỉ hè, phân biệt Passé composé và Imparfait, luyện các âm nguyên âm [i], [y], [u], [a], [œ].",
    target: "Kể được các hoạt động trong kỳ nghỉ bằng câu đơn giản; nhận biết thì quá khứ trong hội thoại; phân biệt thông tin về thời tiết, địa điểm và hoạt động.",
    vocab: [
      { fr: "les vacances", pos: "n.f.pl", ipa: "/va.kɑ̃s/", vi: "Kỳ nghỉ hè, ngày nghỉ", ex: "Où as-tu passé tes vacances ?", viEx: "Bạn đã trải qua kỳ nghỉ ở đâu?" },
      { fr: "la rentrée scolaire", pos: "n.f", ipa: "/ʁɑ̃.tʁe sko.lɛʁ/", vi: "Ngày tựu trường, năm học mới", ex: "C'est la rentrée scolaire aujourd'hui.", viEx: "Hôm nay là ngày tựu trường." },
      { fr: "la montagne", pos: "n.f", ipa: "/mɔ̃.taɲ/", vi: "Vùng núi, đồi núi", ex: "Je suis allé à la montagne cet été.", viEx: "Tôi đã đi nghỉ ở miền núi mùa hè này." },
      { fr: "la plage", pos: "n.f", ipa: "/plaʒ/", vi: "Bãi biển", ex: "Nous nous sommes baignés à la plage.", viEx: "Chúng tôi đã tắm biển ở bãi biển." },
      { fr: "visiter un musée", pos: "v.loc", ipa: "/vi.zi.te œ̃ my.ze/", vi: "Tham quan bảo tàng", ex: "Nous avons visité un beau musée d'art.", viEx: "Chúng tôi đã tham quan một bảo tàng nghệ thuật tuyệt đẹp." },
      { fr: "le temps qu'il fait", pos: "n.m", ipa: "/lə tɑ̃ kil fɛ/", vi: "Thời tiết", ex: "Il faisait beau et ensoleillé.", viEx: "Trời đã rất đẹp và nắng ấm." },
      { fr: "se baigner", pos: "v.pr", ipa: "/sə bɛ.ɲe/", vi: "Tắm biển, tắm sông", ex: "On se baignait tous les matins.", viEx: "Chúng tôi tắm biển mỗi buổi sáng." },
      { fr: "faire une randonnée", pos: "v.loc", ipa: "/fɛʁ yn ʁɑ̃.dɔ.ne/", vi: "Đi bộ đường dài dã ngoại", ex: "J'ai fait une randonnée en forêt.", viEx: "Tôi đã đi bộ dã ngoại trong rừng." }
    ],
    dialogues: [
      {
        speakerA: "Antoine",
        speakerB: "Léa",
        lines: [
          { speaker: "Antoine", fr: "Salut Léa ! Tu as passé de bonnes vacances ? Où es-tu allée ?", vi: "Chào Léa! Kỳ nghỉ của bạn vui chứ? Bạn đã đi đâu thế?" },
          { speaker: "Léa", fr: "Salut Antoine ! Oui, c'était formidable ! Je suis allée à la montagne avec ma famille.", vi: "Chào Antoine! Tuyệt lắm! Mình đã đi vùng núi cùng gia đình." },
          { speaker: "Antoine", fr: "Qu'est-ce que vous avez fait là-bas ? Il faisait beau ?", vi: "Mọi người đã làm gì ở đó? Thời tiết có đẹp không?" },
          { speaker: "Léa", fr: "Il faisait très frais. Nous avons fait des randonnées et nous avons visité de magnifiques cascades !", vi: "Trời rất mát mẻ. Tụi mình đã đi bộ dã ngoại và ghé thăm những thác nước tuyệt đẹp!" }
        ]
      }
    ],
    grammar: {
      title: "Phân biệt Passé composé và Imparfait trong văn kể chuyện",
      rules: [
        {
          name: "Passé composé (Quá khứ kép)",
          usage: "Dùng để diễn tả một hành động đã xảy ra và hoàn tất dứt điểm trong quá khứ, hoặc một chuỗi sự việc diễn ra nối tiếp nhau.",
          formula: "Sujet + avoir / être (hiện tại) + Participe passé",
          examples: [
            "Nous avons voyagé au Canada l'été dernier. (Hành động đã hoàn thành)",
            "Je suis entré, j'ai vu mon ami et nous sommes sortis. (Chuỗi hành động nối tiếp)"
          ]
        },
        {
          name: "Imparfait (Quá khứ chưa hoàn thành)",
          usage: "Dùng để miêu tả bối cảnh, thời tiết, trạng thái tâm lý, hoàn cảnh xung quanh hoặc thói quen lặp đi lặp lại trong quá khứ.",
          formula: "Gốc nous ở présent + đuôi: -ais, -ais, -ait, -ions, -iez, -aient",
          examples: [
            "Il faisait beau et les oiseaux chantaient. (Miêu tả khung cảnh, thời tiết)",
            "Quand j'étais petit, on se baignait tous les jours. (Thói quen trong quá khứ)"
          ]
        }
      ],
      comparisonTable: [
        { criteria: "Chức năng chính", passeCompose: "Sự kiện, hành động chính, kết quả", imparfait: "Bối cảnh, miêu tả, trạng thái, thói quen" },
        { criteria: "Thời gian", passeCompose: "Có khởi đầu và kết thúc xác định", imparfait: "Không xác định rõ thời điểm kết thúc" },
        { criteria: "Ví dụ điển hình", passeCompose: "Soudain, le téléphone a sonné.", imparfait: "Pendant qu'il lisait un livre tranquille..." }
      ]
    },
    phonetics: {
      title: "Luyện phát âm các nguyên âm [i], [y], [u], [a], [œ]",
      content: "Chú ý phân biệt khẩu hình miệng giữa âm [i] (môi bè dẹt sang hai bên) và âm [y] (phát âm chữ 'i' nhưng miệng tròn như thổi sáo). Âm [u] môi tròn chu ra phía trước (như trong 'vous', 'nous').",
      examples: [
        { sound: "[i]", words: "Paris, visite, ami, ville" },
        { sound: "[y]", words: "musée, tu, une, voiture, musique" },
        { sound: "[u]", words: "souvenir, où, nous, tout, vacances" },
        { sound: "[œ]", words: "fleur, sœur, œuf, peur" }
      ]
    },
    culture: {
      title: "Kỳ nghỉ hè và truyền thống 'Grandes Vacances' ở Pháp",
      desc: "Ở Pháp, kỳ nghỉ hè kéo dài gần 2 tháng (tháng 7 và tháng 8) được gọi là 'les grandes vacances'. Người Pháp thường chia thành nhóm 'juilletistes' (nghỉ tháng 7) và 'aoûtiens' (nghỉ tháng 8) để về miền quê, lên núi hoặc đến các bờ biển nổi tiếng như Côte d'Azur và Bretagne."
    },
    project: {
      title: "Hỏi - đáp và phỏng vấn về kỳ nghỉ",
      desc: "Làm việc theo cặp: Đặt câu hỏi và kể về kỳ nghỉ của bản thân (địa điểm, phương tiện, hoạt động, thời tiết, cảm xúc) và ghi lại tóm tắt phiếu trả lời của bạn mình."
    },
    quiz: [
      {
        q: "Chọn câu dùng đúng Passé composé để nói về hành động đã hoàn tất:",
        options: ["Il faisait beau hier.", "Nous avons visité le musée du Louvre.", "Quand j'étais jeune, je jouais au football.", "On se baignait tous les soirs."],
        ans: 1,
        exp: "'Nous avons visité' là thì Passé composé chỉ hành động đã xảy ra và hoàn tất xác định."
      },
      {
        q: "Để miêu tả thời tiết trong quá khứ, ta dùng thì nào?",
        options: ["Passé composé", "Futur simple", "Imparfait", "Présent de l'indicatif"],
        ans: 2,
        exp: "Miêu tả bối cảnh và thời tiết trong quá khứ (ví dụ: 'Il faisait beau') luôn dùng Imparfait."
      },
      {
        q: "Âm [y] trong tiếng Pháp xuất hiện trong từ nào sau đây?",
        options: ["Paris", "musée", "bonjour", "vacances"],
        ans: 1,
        exp: "Từ 'musée' có chữ cái 'u' được phát âm là nguyên âm [y]."
      },
      {
        q: "Hoàn thành câu: 'Pendant les vacances, nous ______ (aller) à la montagne.'",
        options: ["avons allé", "sommes allés", "allions", "sont allés"],
        ans: 1,
        exp: "Động từ 'aller' chia ở Passé composé đi với trợ động từ 'être' và hòa hợp giống số: 'sommes allés'."
      }
    ]
  },
  {
    id: "unite-1",
    unitNum: "Unité 1",
    badge: "Sciences & Biographies",
    title: "Les scientifiques",
    vietTitle: "Các nhà khoa học & Tiểu sử phát minh",
    desc: "Nói về sự nghiệp khoa học, tiểu sử nhà khoa học, cấu trúc nêu mục đích pour/afin de + infinitif, cách dùng mốc thời gian depuis/pendant/il y a, kỹ thuật nối âm liaison và enchaînement.",
    target: "Kể được các mốc thay đổi sự nghiệp; nêu mục đích hành động; giới thiệu tiểu sử một nhà khoa học; thiết kế và thuyết trình phiếu thông tin (fiche signalétique).",
    vocab: [
      { fr: "un scientifique / une scientifique", pos: "n", ipa: "/sjɑ̃.ti.fik/", vi: "Nhà khoa học", ex: "C'est une scientifique très renommée.", viEx: "Đó là một nhà khoa học rất nổi tiếng." },
      { fr: "un chercheur / une chercheuse", pos: "n", ipa: "/ʃɛʁ.ʃœʁ, ʃɛʁ.ʃøz/", vi: "Nhà nghiên cứu", ex: "Les chercheurs travaillent dans le laboratoire.", viEx: "Các nhà nghiên cứu làm việc trong phòng thí nghiệm." },
      { fr: "une découverte", pos: "n.f", ipa: "/de.ku.vɛʁt/", vi: "Phát hiện, khám phá mới", ex: "La découverte du vaccin a sauvé des millions de vies.", viEx: "Việc phát hiện ra vắc-xin đã cứu sống hàng triệu sinh mạng." },
      { fr: "une invention", pos: "n.f", ipa: "/ɛ̃.vɑ̃.sjɔ̃/", vi: "Phát minh, sáng chế", ex: "Cette invention a changé le monde.", viEx: "Phát minh này đã làm thay đổi cả thế giới." },
      { fr: "la carrière", pos: "n.f", ipa: "/ka.ʁjɛʁ/", vi: "Sự nghiệp", ex: "Il a commencé sa carrière à Paris.", viEx: "Ông ấy đã bắt đầu sự nghiệp tại Paris." },
      { fr: "une expérience", pos: "n.f", ipa: "/ɛk.spe.ʁjɑ̃s/", vi: "Thí nghiệm, trải nghiệm", ex: "Faire des expériences scientifiques.", viEx: "Làm các thí nghiệm khoa học." },
      { fr: "recevoir un prix", pos: "v.loc", ipa: "/ʁə.sə.vwaʁ œ̃ pʁi/", vi: "Nhận giải thưởng", ex: "Marie Curie a reçu deux prix Nobel.", viEx: "Marie Curie đã nhận hai giải Nobel." },
      { fr: "la date de naissance", pos: "n.f", ipa: "/dat də nɛ.sɑ̃s/", vi: "Ngày sinh", ex: "Quelle est sa date de naissance ?", viEx: "Ngày sinh của ông ấy là khi nào?" }
    ],
    dialogues: [
      {
        speakerA: "Thầy giáo",
        speakerB: "Marc",
        lines: [
          { speaker: "Thầy giáo", fr: "Marc, peux-tu nous présenter le scientifique que tu as choisi pour ta recherche ?", vi: "Marc, em có thể giới thiệu nhà khoa học mà em đã chọn nghiên cứu không?" },
          { speaker: "Marc", fr: "Oui, monsieur. J'ai choisi Louis Pasteur. Il est né en 1822 en France. C'était un grand chimiste et biologiste.", vi: "Vâng thưa thầy. Em chọn Louis Pasteur. Ông sinh năm 1822 tại Pháp, là một nhà hóa học và sinh học lỗi lạc." },
          { speaker: "Thầy giáo", fr: "Quelle a été sa plus grande découverte ?", vi: "Phát hiện vĩ đại nhất của ông là gì?" },
          { speaker: "Marc", fr: "Il a inventé le vaccin contre la rage en 1885 afin de sauver des vies humaines.", vi: "Ông đã phát minh vắc-xin phòng bệnh dại năm 1885 nhằm cứu sống mạng người." }
        ]
      }
    ],
    grammar: {
      title: "Ngữ pháp trọng tâm: Cấu trúc mục đích & Thời gian",
      rules: [
        {
          name: "1. Nêu mục đích: pour / afin de + infinitif",
          usage: "Dùng để diễn tả mục đích của hành động khi hai vế có cùng một chủ ngữ. Sau 'pour' hoặc 'afin de' luôn là động từ nguyên mẫu (infinitif).",
          formula: "Mệnh đề chính + pour / afin de + Verbe à l'infinitif",
          examples: [
            "Elle étudie la médecine pour soigner les gens. (Cô ấy học y để chữa bệnh cho mọi người)",
            "Les chercheurs font des expériences afin de vérifier leurs hypothèses. (Các nhà nghiên cứu làm thí nghiệm nhằm kiểm chứng giả thuyết)"
          ]
        },
        {
          name: "2. Từ chỉ thời gian: depuis, pendant, il y a",
          usage: "Phân biệt chính xác cách diễn đạt thời gian trong tiếng Pháp:",
          formula: "depuis (kéo dài đến hiện tại) | pendant (khoảng thời gian trọn vẹn) | il y a (thời điểm quá khứ)",
          examples: [
            "depuis + mốc/khoảng thời gian: 'Depuis 2020, il étudie de nouvelles espèces.' (bắt đầu từ 2020 và hiện vẫn đang tiếp tục)",
            "pendant + khoảng thời gian: 'Elle a travaillé pendant deux heures hier.' (thời lượng có giới hạn, đã xong)",
            "il y a + khoảng thời gian: 'J’ai lu cette biographie il y a deux jours.' (cách đây 2 ngày, sự việc đã xảy ra)"
          ]
        }
      ],
      comparisonTable: [
        { criteria: "Cấu trúc thời gian", passeCompose: "depuis + Temps", imparfait: "pendant + Temps", extra: "il y a + Temps" },
        { criteria: "Tính chất hành động", passeCompose: "Đang tiếp diễn ở hiện tại", imparfait: "Thời lượng đã kết thúc trọn vẹn", extra: "Điểm mốc lùi về quá khứ" },
        { criteria: "Thì động từ thường đi kèm", passeCompose: "Présent de l'indicatif", imparfait: "Passé composé hoặc Futur", extra: "Passé composé" }
      ]
    },
    phonetics: {
      title: "Kỹ thuật nối âm: Liaison & Enchaînement",
      content: "Liaison: Hiện tượng phụ âm cuối bình thường là âm câm được phát âm nối với nguyên âm hoặc âm 'h câm' đứng đầu từ kế tiếp (ví dụ: les‿amis [le.za.mi], un‿inventeur [œ̃.nɛ̃.vɑ̃.tœʁ]). Enchaînement: Phụ âm cuối vốn được phát âm nối thẳng sang âm tiết của nguyên âm kế tiếp (ví dụ: une grande‿école).",
      examples: [
        { sound: "Liaison bắt buộc", words: "les‿enfants, des‿expériences, deux‿années, ils‿ont" },
        { sound: "Enchaînement", words: "avec‿elle, pour‿apprendre, sept‿heures" }
      ]
    },
    culture: {
      title: "Các nhà khoa học lừng danh Pháp - Việt",
      desc: "Nước Pháp nổi tiếng với Marie Curie (hai giải Nobel Vật lý và Hóa học), Louis Pasteur (vắc-xin phòng dại, phương pháp thanh trùng Pasteurisation). Bác sĩ Alexandre Yersin người Pháp gốc Thụy Sĩ đã cống hiến trọn đời cho y học Việt Nam, thành lập Viện Pasteur Nha Trang. Bên cạnh đó là các nhà khoa học lỗi lạc Việt Nam như GS. Tôn Thất Tùng (phương pháp mổ gan nổi tiếng thế giới), GS. Lương Định Của (nhà nông học lúa gạo)."
    },
    project: {
      title: "Phiếu thông tin nhà khoa học (Fiche signalétique)",
      desc: "Thiết kế một Fiche signalétique về một nhà khoa học yêu thích: Họ tên, Quốc tịch, Năm sinh - mất, Chuyên ngành, Phát minh tiêu biểu, Giải thưởng đạt được và Thuyết trình 2 phút trước lớp."
    },
    quiz: [
      {
        q: "Chọn cấu trúc đúng để nêu mục đích: 'Il lit beaucoup ______ enrichir ses connaissances.'",
        options: ["parce que", "pour", "depuis", "pendant"],
        ans: 1,
        exp: "'Pour + infinitif' được dùng để nêu mục đích 'để làm gì'."
      },
      {
        q: "Điền từ thích hợp: 'Marie habite à Paris ______ trois ans et elle y vit encore.'",
        options: ["il y a", "pendant", "depuis", "pour"],
        ans: 2,
        exp: "Hành động bắt đầu trong quá khứ và vẫn đang tiếp diễn ở hiện tại dùng 'depuis'."
      },
      {
        q: "Từ 'il y a deux jours' trong câu 'J'ai rencontré ce chercheur il y a deux jours' có nghĩa là:",
        options: ["Trong vòng 2 ngày", "Cách đây 2 ngày", "Kể từ 2 ngày trước tới nay", "Trong 2 ngày tới"],
        ans: 1,
        exp: "'Il y a + khoảng thời gian' diễn tả một mốc thời điểm cách hiện tại, có nghĩa là 'cách đây'."
      },
      {
        q: "Trong cụm từ 'les scientifiques et leurs‿inventions', hiện tượng ngữ âm nào xuất hiện ở gạch nối?",
        options: ["Lược âm (Élision)", "Nối âm bắt buộc (Liaison)", "Đổi dấu giọng (Accentuation)", "Ngắt nhịp (Césure)"],
        ans: 1,
        exp: "Phụ âm 's' câm ở cuối từ 'leurs' được phát âm nối thành âm [z] với nguyên âm 'i' của 'inventions', đó là hiện tượng Liaison."
      }
    ]
  },
  {
    id: "unite-2",
    unitNum: "Unité 2",
    badge: "Sports & Bien-être",
    title: "Vivre le sport !",
    vietTitle: "Sống cùng thể thao & Tinh thần đồng đội",
    desc: "Nói về môn thể thao yêu thích, phẩm chất thi đấu, quy tắc môn chơi, cách thức đưa lời khuyên và yêu cầu lịch sự với Conditionnel présent, ôn tập đại từ y và en.",
    target: "Nói về môn thể thao, địa điểm và tần suất chơi; nêu phẩm chất thi đấu; giải thích luật chơi cơ bản; dùng Conditionnel présent để đề nghị, khuyên nhủ lịch sự; thiết kế áp phích Ngày hội thể thao.",
    vocab: [
      { fr: "le football", pos: "n.m", ipa: "/fut.bɔl/", vi: "Bóng đá", ex: "Le football est le sport le plus populaire.", viEx: "Bóng đá là môn thể thao phổ biến nhất." },
      { fr: "la natation", pos: "n.f", ipa: "/na.ta.sjɔ̃/", vi: "Môn bơi lội", ex: "Je pratique la natation deux fois par semaine.", viEx: "Tôi tập bơi hai lần một tuần." },
      { fr: "l'athlétisme", pos: "n.m", ipa: "/at.le.tizm/", vi: "Điền kinh", ex: "L'athlétisme demande beaucoup d'endurance.", viEx: "Điền kinh đòi hỏi rất nhiều sức bền." },
      { fr: "l'endurance", pos: "n.f", ipa: "/ɑ̃.dy.ʁɑ̃s/", vi: "Sức bền, sự dẻo dai kiên trì", ex: "Pour courir un marathon, il faut de l'endurance.", viEx: "Để chạy marathon, cần phải có sức bền." },
      { fr: "l'esprit d'équipe", pos: "n.m", ipa: "/lɛs.pʁi de.kip/", vi: "Tinh thần đồng đội", ex: "Le basketball renforce l'esprit d'équipe.", viEx: "Bóng rổ củng cố tinh thần đồng đội." },
      { fr: "un gymnase", pos: "n.m", ipa: "/ʒim.naz/", vi: "Nhà thi đấu, phòng tập thể dục", ex: "L'entraînement a lieu au gymnase.", viEx: "Buổi tập diễn ra tại nhà thi đấu." },
      { fr: "marquer un but", pos: "v.loc", ipa: "/maʁ.ke œ̃ byt/", vi: "Ghi bàn thắng", ex: "Notre attaquant a marqué un magnifique but.", viEx: "Tiền đạo của chúng tôi đã ghi một bàn thắng tuyệt đẹp." },
      { fr: "respecter les règles", pos: "v.loc", ipa: "/ʁɛs.pɛk.te le ʁɛɡl/", vi: "Tuân thủ luật lệ thi đấu", ex: "Tous les joueurs doivent respecter les règles.", viEx: "Mọi cầu thủ đều phải tuân thủ luật lệ." }
    ],
    dialogues: [
      {
        speakerA: "Julien",
        speakerB: "Thierry",
        lines: [
          { speaker: "Julien", fr: "Salut Thierry ! Tu pourrais m'aider à préparer le tournoi de badminton du collège ?", vi: "Chào Thierry! Bạn có thể giúp mình chuẩn bị cho giải cầu lông của trường không?" },
          { speaker: "Thierry", fr: "Avec plaisir, Julien ! De quoi as-tu besoin exactement ?", vi: "Rất sẵn lòng, Julien! Cậu cần giúp việc gì cụ thể nào?" },
          { speaker: "Julien", fr: "Il faudrait réserver le gymnase et imprimer les affiches d'inscription.", vi: "Cần phải đặt trước nhà thi đấu và in các áp phích đăng ký." },
          { speaker: "Thierry", fr: "D'accord ! Tu devrais aussi demander à notre professeur d'EPS pour le matériel.", vi: "Đồng ý! Cậu cũng nên hỏi thầy giáo thể dục về trang thiết bị nữa nhé." }
        ]
      }
    ],
    grammar: {
      title: "Conditionnel présent (1) & Đại từ bổ ngữ Y / EN",
      rules: [
        {
          name: "1. Thể điều kiện hiện tại (Conditionnel présent) - Lời khuyên & Lịch sự",
          usage: "Dùng để diễn đạt mong muốn, đưa ra yêu cầu/đề nghị lịch sự, hoặc đưa ra lời khuyên tế nhị.",
          formula: "Gốc tương lai (Futur simple) + Đuôi Imparfait (-ais, -ais, -ait, -ions, -iez, -aient)",
          examples: [
            "aimer → j'aimerais / nous aimerions (Tôi muốn / Chúng tôi muốn)",
            "vouloir → je voudrais (Tôi muốn - rất lịch sự)",
            "pouvoir → pourrais-tu m'aider ? / pourriez-vous m'indiquer... ? (Bạn/Ngài có thể...)",
            "devoir → tu devrais t'échauffer avant le match. (Bạn nên khởi động trước trận đấu)"
          ]
        },
        {
          name: "2. Đại từ Y và EN thay thế cho bổ ngữ sự vật",
          usage: "Đại từ đứng ngay trước động từ đã chia để tránh lặp từ:",
          formula: "y thay cho 'à + Nom de chose' | en thay cho 'de + Nom de chose'",
          examples: [
            "Nous pensons à l'événement sportif. → Nous y pensons. ('y' thay cho 'à l'événement')",
            "Elle parle souvent de son entraînement. → Elle en parle souvent. ('en' thay cho 'de son entraînement')"
          ]
        }
      ],
      comparisonTable: [
        { criteria: "Động từ bất quy tắc", passeCompose: "Gốc Futur", imparfait: "Conditionnel (je)", extra: "Ý nghĩa giao tiếp" },
        { criteria: "Vouloir (muốn)", passeCompose: "voudr-", imparfait: "je voudrais", extra: "Yêu cầu lịch sự" },
        { criteria: "Pouvoir (có thể)", passeCompose: "pourr-", imparfait: "je pourrais", extra: "Xin phép, nhờ vả" },
        { criteria: "Devoir (phải/nên)", passeCompose: "devr-", imparfait: "tu devrais", extra: "Đưa ra lời khuyên" }
      ]
    },
    phonetics: {
      title: "Luyện phát âm hai âm phụ âm [ʃ] và [ʒ]",
      content: "Âm [ʃ] (vô thanh, như tiếng 'suỵt' trong 'chat', 'chaussure', 'flèche'). Âm [ʒ] (hữu thanh, rung dây thanh quản, như trong 'jour', 'gymnase', 'joueur', 'judo').",
      examples: [
        { sound: "[ʃ]", words: "chaussure, match, échauffement, natation (ch/sh)" },
        { sound: "[ʒ]", words: "gymnase, joueur, judo, nager, courage" }
      ]
    },
    culture: {
      title: "Thể thao học đường và các sự kiện thể thao lớn tại Pháp",
      desc: "Nước Pháp coi trọng thể thao học đường thông qua hiệp hội UNSS (Union Nationale du Sport Scolaire). Nước Pháp là quê hương của Thế vận hội Olympic hiện đại do Nam tước Pierre de Coubertin sáng lập, đồng thời là nước chủ nhà của Olympic Paris 2024 với khẩu hiệu lan tỏa tinh thần thể thao toàn cầu."
    },
    project: {
      title: "Áp phích Ngày hội Thể thao (Affiche de la Journée sportive)",
      desc: "Tạo áp phích quảng bá Ngày hội thể thao học đường gồm: Khẩu hiệu (Slogan), Danh sách môn thi đấu (Bóng đá, Điền kinh, Bơi lội), Thời gian & Địa điểm, Điều kiện tham gia và Lời kêu gọi cổ vũ."
    },
    quiz: [
      {
        q: "Chọn dạng Conditionnel présent phù hợp để đưa ra lời khuyên lịch sự: 'Tu ______ faire attention aux règles.'",
        options: ["dois", "devrais", "devais", "devras"],
        ans: 1,
        exp: "'Tu devrais' là dạng Conditionnel présent của động từ devoir, dùng để khuyên nhủ nhẹ nhàng."
      },
      {
        q: "Thay thế phần gạch chân bằng đại từ thích hợp: 'Nous pensons souvent à ce match.'",
        options: ["Nous en pensons souvent.", "Nous le pensons souvent.", "Nous y pensons souvent.", "Nous lui pensons souvent."],
        ans: 2,
        exp: "'À ce match' là bổ ngữ sự vật đi với giới từ 'à', do đó được thay thế bằng đại từ 'y': 'Nous y pensons'."
      },
      {
        q: "Trong các phẩm chất sau, từ nào có nghĩa là 'tinh thần đồng đội'?",
        options: ["la souplesse", "la vitesse", "l'esprit d'équipe", "l'endurance"],
        ans: 2,
        exp: "'L'esprit d'équipe' là tinh thần đồng đội."
      },
      {
        q: "Âm [ʒ] xuất hiện trong từ nào sau đây?",
        options: ["chaussure", "judo", "match", "flèche"],
        ans: 1,
        exp: "Chữ 'j' trong 'judo' được phát âm là phụ âm hữu thanh [ʒ]."
      }
    ]
  },
  {
    id: "unite-3",
    unitNum: "Unité 3",
    badge: "Voyage & Découverte",
    title: "Voyager, explorer et au-delà…",
    vietTitle: "Du lịch, khám phá và những miền đất mới",
    desc: "Kỹ năng hỏi đường và chỉ đường, mua vé tàu xe tại quầy vé, miêu tả cảm xúc sau chuyến đi, tính từ hậu tố -able/-ible, tiền tố phủ định in-/im-, và các mẫu câu cảm thán đầy sức biểu cảm.",
    target: "Hỏi và chỉ đường không cần bản đồ; mua vé giao thông tại quầy; diễn đạt cảm xúc ấn tượng; áp dụng tính từ phái sinh (-able/-ible) và câu cảm thán; lập kế hoạch du lịch (Carnet de voyage).",
    vocab: [
      { fr: "un billet", pos: "n.m", ipa: "/bi.jɛ/", vi: "Vé tàu, vé xe, vé máy bay", ex: "Je voudrais acheter un billet de train.", viEx: "Tôi muốn mua một vé tàu hỏa." },
      { fr: "un aller-retour", pos: "n.m", ipa: "/a.le ʁə.tuʁ/", vi: "Vé khứ hồi (hai chiều)", ex: "Un aller-retour pour Lyon, s'il vous plaît.", viEx: "Một vé khứ hồi đi Lyon, xin vui lòng." },
      { fr: "le guichet", pos: "n.m", ipa: "/ɡi.ʃɛ/", vi: "Quầy bán vé, ô cửa giao dịch", ex: "Rendez-vous au guichet de la gare.", viEx: "Hẹn gặp ở quầy bán vé của nhà ga." },
      { fr: "un itinéraire", pos: "n.m", ipa: "/i.ti.ne.ʁɛʁ/", vi: "Lộ trình, tuyến đường đi", ex: "Nous préparons notre itinéraire de voyage.", viEx: "Chúng tôi chuẩn bị lộ trình cho chuyến đi." },
      { fr: "tourner à gauche / à droite", pos: "v.loc", ipa: "/tuʁ.ne a ɡoʃ, a dʁwat/", vi: "Rẽ trái / rẽ phải", ex: "Tournez à droite au carrefour.", viEx: "Hãy rẽ phải ở ngã tư." },
      { fr: "continuer tout droit", pos: "v.loc", ipa: "/kɔ̃.ti.nɥe tu dʁwa/", vi: "Đi thẳng tiếp tục", ex: "Continuez tout droit pendant 200 mètres.", viEx: "Hãy tiếp tục đi thẳng khoảng 200 mét." },
      { fr: "être émerveillé(e)", pos: "adj", ipa: "/etʁ e.mɛʁ.ve.je/", vi: "Trầm trồ, ngạc nhiên thán phục", ex: "Elle était émerveillée par la beauté du paysage.", viEx: "Cô ấy đã vô cùng thán phục trước vẻ đẹp của phong cảnh." },
      { fr: "inoubliable", pos: "adj", ipa: "/i.nu.bli.jabl/", vi: "Không thể nào quên, đáng nhớ", ex: "C'était un voyage inoubliable !", viEx: "Đó là một chuyến đi không thể nào quên!" }
    ],
    dialogues: [
      {
        speakerA: "Du khách (Touriste)",
        speakerB: "Nhân viên quầy vé (Guichetier)",
        lines: [
          { speaker: "Du khách", fr: "Bonjour monsieur, je voudrais un aller-retour pour Marseille, s'il vous plaît.", vi: "Xin chào ông, tôi muốn mua một vé khứ hồi đi Marseille." },
          { speaker: "Nhân viên", fr: "Bonjour ! En première ou en seconde classe ? Vous partez quand ?", vi: "Xin chào! Vé hạng nhất hay hạng hai ạ? Quý khách khởi hành khi nào?" },
          { speaker: "Du khách", fr: "En seconde classe, pour le train de 9 heures demain matin. C'est combien ?", vi: "Hạng hai ạ, đi chuyến tàu 9 giờ sáng mai. Giá vé bao nhiêu vậy ạ?" },
          { speaker: "Nhân viên", fr: "Ça fait 45 euros. Pourriez-vous insérer votre carte de paiement ?", vi: "Hết 45 euro. Xin quý khách vui lòng cắm thẻ thanh toán." }
        ]
      }
    ],
    grammar: {
      title: "Cấu tạo từ (-able/-ible, in-/im-) & Câu cảm thán",
      rules: [
        {
          name: "1. Hậu tố -able / -ible (Tính chất có thể làm được)",
          usage: "Gắn vào gốc động từ để tạo tính từ mang nghĩa 'có thể được thực hiện' hoặc 'đáng được khen ngợi'.",
          formula: "Radical du verbe + -able / -ible",
          examples: [
            "lire (đọc) → lisible (dễ đọc, đọc được)",
            "admirer (ngưỡng mộ) → admirable (đáng ngưỡng mộ)",
            "visiter (thăm) → visitable (có thể tham quan)",
            "Chữa hòa hợp giống số: un paysage admirable, des paysages admirables."
          ]
        },
        {
          name: "2. Tiền tố phủ định in- / im-",
          usage: "Thêm vào trước tính từ để tạo nghĩa phủ định 'không thể'. Dùng 'im-' trước các phụ âm b, p, m; dùng 'in-' trước các chữ cái khác.",
          formula: "in- / im- + Adjectif",
          examples: [
            "possible → impossible (không thể)",
            "patient → impatient (mất kiên nhẫn)",
            "connu → inconnu (không quen biết, vô danh)"
          ]
        },
        {
          name: "3. Câu cảm thán (Phrases exclamatives)",
          usage: "Dùng để bộc lộ cảm xúc khen ngợi, ngạc nhiên hoặc thán phục, kết thúc bằng dấu chấm than (!):",
          formula: "Comme / Que + Phrase ! | Quel(le)(s) + Nom !",
          examples: [
            "Comme c'est magnifique ! / Que c'est beau ! (Thật là tuyệt đẹp!)",
            "Quel voyage formidable ! (Chuyến đi thật tuyệt vời! - giống đực số ít)",
            "Quelle belle journée ! (Một ngày thật đẹp trời! - giống cái số ít)",
            "Quels beaux monuments ! (Những công trình thật nguy nga! - giống đực số nhiều)"
          ]
        }
      ],
      comparisonTable: [
        { criteria: "Đại từ cảm thán", passeCompose: "Quel (đực ít)", imparfait: "Quelle (cái ít)", extra: "Quels / Quelles (nhiều)" },
        { criteria: "Ví dụ đi kèm", passeCompose: "Quel beau paysage !", imparfait: "Quelle belle vue !", extra: "Quelles belles vacances !" }
      ]
    },
    phonetics: {
      title: "Ngữ điệu câu cảm thán & Ngữ điệu thuyết phục",
      content: "Trong câu cảm thán, ngữ điệu lên cao ở từ mang trọng âm cảm xúc rồi ngân dài hoặc hạ xuống đầy thán phục: 'Comme c'est beau ! ↗↘'. Cần biểu cảm ánh mắt và âm sắc giọng nói khi nói câu cảm thán.",
      examples: [
        { sound: "Cảm thán thán phục", words: "C'est incroyable ! / Quelle merveille !" },
        { sound: "Hỏi và chỉ đường", words: "Où se trouve la cathédrale ? / Continuez tout droit !" }
      ]
    },
    culture: {
      title: "Tour de France: 6 trải nghiệm không thể bỏ qua trên đất Pháp",
      desc: "Khám phá nước Pháp qua 6 trải nghiệm kinh điển: Chiêm ngưỡng tháp Eiffel và bảo tàng Louvre tại Paris, tham quan các lâu đài cổ kính thung lũng sông Loire (Châteaux de la Loire), ngắm cánh đồng oải hương Provence, chinh phục đỉnh Mont Blanc trên dãy Alpes, nếm thử bánh mì Baguette và phô mai truyền thống, đi thuyền ngắm vịnh Calanques ở Marseille."
    },
    project: {
      title: "Nhật ký hành trình du lịch (Carnet de voyage)",
      desc: "Lập kế hoạch chuyến đi trong mơ gồm: Điểm đến (Destination), Lịch trình theo ngày (D'abord, Ensuite, Enfin), Phương tiện di chuyển, Khách sạn lưu trú, Đặc sản ẩm thực và Ước tính ngân sách."
    },
    quiz: [
      {
        q: "Chọn từ phủ định đúng nghĩa của 'possible':",
        options: ["inpossible", "impossible", "dispossible", "unpossible"],
        ans: 1,
        exp: "Trước chữ 'p', tiền tố phủ định đổi thành 'im-': 'impossible'."
      },
      {
        q: "Chọn câu cảm thán phù hợp với danh từ giống cái số ít 'ville':",
        options: ["Quel belle ville !", "Quelle belle ville !", "Quels belle ville !", "Quelles belle ville !"],
        ans: 1,
        exp: "'Ville' là danh từ giống cái số ít, nên tính từ nghi vấn cảm thán là 'Quelle'."
      },
      {
        q: "Hậu tố nào được thêm vào động từ 'admirer' để tạo tính từ 'đáng ngưỡng mộ'?",
        options: ["-tion", "-able", "-ment", "-eur"],
        ans: 1,
        exp: "'admirer' + '-able' tạo thành tính từ 'admirable'."
      },
      {
        q: "Khi một du khách hỏi: 'Pourriez-vous m'indiquer le chemin pour aller à la gare ?', bạn trả lời thế nào để chỉ đường thẳng?",
        options: ["Tournez à gauche.", "Continuez tout droit.", "Prenez un aller-retour.", "C'est impossible."],
        ans: 1,
        exp: "'Continuez tout droit' có nghĩa là 'Hãy tiếp tục đi thẳng'."
      }
    ]
  },
  {
    id: "unite-4",
    unitNum: "Unité 4",
    badge: "Cinéma & Médias",
    title: "Du mot à l’image",
    vietTitle: "Từ ngôn từ đến hình ảnh & Nghệ thuật điện ảnh",
    desc: "Thể loại phim, nghề làm phim, cách bày tỏ cảm xúc hào hứng/thất vọng/thờ ơ, cách nói phóng đại trong khẩu ngữ thanh thiếu niên (hyper, super, trop), đại từ Y và EN chỉ nơi chốn, hiện tượng lược 'ne' trong văn nói.",
    target: "Mô tả một bộ phim yêu thích; nêu vai trò các nghề điện ảnh; bày tỏ thái độ và đánh giá; dùng đại từ Y và EN chỉ nơi chốn; phân tích nhân vật điện ảnh (Portrait de personnage).",
    vocab: [
      { fr: "un film d’animation", pos: "n.m", ipa: "/film da.ni.ma.sjɔ̃/", vi: "Phim hoạt hình", ex: "J'adore regarder les films d'animation.", viEx: "Tôi rất thích xem phim hoạt hình." },
      { fr: "une comédie", pos: "n.f", ipa: "/kɔ.me.di/", vi: "Phim hài, kịch vui", ex: "C'est une comédie très amusante.", viEx: "Đó là một bộ phim hài rất vui nhộn." },
      { fr: "un réalisateur / une réalisatrice", pos: "n", ipa: "/ʁe.a.li.za.tœʁ, ʁe.a.li.za.tʁis/", vi: "Đạo diễn phim", ex: "Le réalisateur dirige les acteurs sur le plateau.", viEx: "Đạo diễn chỉ đạo các diễn viên trên trường quay." },
      { fr: "un scénariste", pos: "n.m", ipa: "/se.na.ʁist/", vi: "Nhà biên kịch, người viết kịch bản", ex: "Le scénariste a écrit une histoire captivante.", viEx: "Nhà biên kịch đã viết nên một câu chuyện lôi cuốn." },
      { fr: "un producteur / une productrice", pos: "n", ipa: "/pʁɔ.dyk.tœʁ, pʁɔ.dyk.tʁis/", vi: "Nhà sản xuất phim (quản lý ngân sách)", ex: "La productrice finance le projet de film.", viEx: "Nhà sản xuất tài trợ tài chính cho dự án phim." },
      { fr: "un acteur / une actrice", pos: "n", ipa: "/ak.tœʁ, ak.tʁis/", vi: "Diễn viên nam / nữ", ex: "Cet acteur joue le rôle principal.", viEx: "Nam diễn viên này đóng vai chính." },
      { fr: "passionnant", pos: "adj", ipa: "/pa.sjɔ.nɑ̃/", vi: "Hấp dẫn, say mê, cuốn hút", ex: "Ce film d'aventure est passionnant !", viEx: "Bộ phim phiêu lưu này thật là cuốn hút!" },
      { fr: "décevant", pos: "adj", ipa: "/de.sə.vɑ̃/", vi: "Gây thất vọng, không như mong đợi", ex: "La fin du film est un peu décevante.", viEx: "Đoạn kết của bộ phim hơi gây thất vọng." }
    ],
    dialogues: [
      {
        speakerA: "Sophie",
        speakerB: "Lucas",
        lines: [
          { speaker: "Sophie", fr: "Lucas, tu as vu le nouveau film de science-fiction au cinéma ?", vi: "Lucas, bạn đã xem bộ phim khoa học viễn tưởng mới ở rạp chưa?" },
          { speaker: "Lucas", fr: "Oui ! J'y suis allé samedi avec mon frère. C'était super bien !", vi: "Rồi! Mình đã đến đó hôm thứ Bảy cùng anh trai. Phim hay tuyệt vời luôn!" },
          { speaker: "Sophie", fr: "Vraiment ? Les effets spéciaux étaient réussis ?", vi: "Thật sao? Hiệu ứng kỹ xảo có xuất sắc không?" },
          { speaker: "Lucas", fr: "Trop beaux ! Et la musique est hyper cool. En revanche, le scénario est un peu simple.", vi: "Đẹp dã man luôn! Nhạc phim cũng cực đỉnh. Có điều kịch bản thì hơi đơn giản một chút." }
        ]
      }
    ],
    grammar: {
      title: "Đại từ nơi chốn Y / EN & Khẩu ngữ phóng đại",
      rules: [
        {
          name: "1. Đại từ Y và EN chỉ nơi chốn",
          usage: "Dùng để thay thế cụm từ chỉ địa điểm đã nhắc tới trước đó, tránh lặp từ. Đặt trước động từ đã chia:",
          formula: "Y thay cho nơi chốn đi với: à, au, à la, en, dans... | EN thay cho nơi chốn đi với: de, du, de la, des...",
          examples: [
            "Je vais au cinéma ce soir. → J'y vais ce soir. ('y' thay cho 'au cinéma')",
            "Les acteurs sont dans la salle. → Ils y sont. ('y' thay cho 'dans la salle')",
            "Tu reviens de Paris ? → Oui, j'en reviens. ('en' thay cho 'de Paris')",
            "Il sort de la salle de montage. → Il en sort. ('en' thay cho 'de la salle...')"
          ]
        },
        {
          name: "2. Cách nói phóng đại trong khẩu ngữ: hyper, super, trop",
          usage: "Trong giao tiếp hàng ngày của giới trẻ Pháp, các tiền tố/phó từ này được dùng để nhấn mạnh mức độ cao độ:",
          formula: "hyper / super / trop + Adjectif",
          examples: [
            "Le film est super bien ! (Phim siêu hay!)",
            "Les décors sont trop beaux ! (Khung cảnh đẹp quá mức / đẹp dã man!)",
            "Cette actrice est hyper talentueuse. (Nữ diễn viên này cực kỳ tài năng)"
          ]
        }
      ],
      comparisonTable: [
        { criteria: "Đại từ nơi chốn", passeCompose: "Y (đến/ở đâu)", imparfait: "EN (từ đâu về/rời khỏi)" },
        { criteria: "Giới từ gốc", passeCompose: "à, chez, dans, en, sur", imparfait: "de, du, de la, des" },
        { criteria: "Ví dụ câu hỏi - đáp", passeCompose: "Tu vas au cinéma ? – Oui, j'y vais.", imparfait: "Tu sors du cinéma ? – Oui, j'en sors." }
      ]
    },
    phonetics: {
      title: "Hiện tượng lược 'ne' trong phủ định khẩu ngữ",
      content: "Trong văn nói thân mật hàng ngày (registre familier), người Pháp thường lược bỏ từ 'ne' và chỉ giữ lại 'pas': 'Je ne sais pas' → 'Je sais pas' [ʃe.pa], 'Je ne comprends pas' → 'Je comprends pas'. Tuy nhiên trong văn viết và giao tiếp trang trọng, bắt buộc phải viết đầy đủ 'ne... pas'.",
      examples: [
        { sound: "Văn phong chuẩn (Standard)", words: "Je ne veux pas, Il n'a pas aimé" },
        { sound: "Khẩu ngữ thân mật (Familier)", words: "Je veux pas, Il a pas aimé, C'est pas mal" }
      ]
    },
    culture: {
      title: "Cái nôi điện ảnh Pháp & Lễ hội phim Cannes lừng danh",
      desc: "Nước Pháp chính là nơi khai sinh ra nghệ thuật thứ bảy (Le Septième Art) với buổi chiếu phim công cộng đầu tiên của anh em nhà Lumière (Frères Lumière) năm 1895 tại Paris. Hàng năm, Liên hoan phim Cannes (Festival de Cannes) trao giải Cành cọ Vàng (Palme d'Or) danh giá nhất hành tinh, thu hút sự chú ý của toàn bộ giới điện ảnh toàn cầu."
    },
    project: {
      title: "Chân dung nhân vật điện ảnh (Portrait de personnage)",
      desc: "Lựa chọn một nhân vật điện ảnh hoặc hoạt hình yêu thích: Phác thảo ngoại hình (portrait physique), tính cách (portrait moral), vai trò trong phim, phân tích một cảnh quay ấn tượng và nêu lý do vì sao em yêu thích."
    },
    quiz: [
      {
        q: "Chọn đại từ nơi chốn thích hợp: 'Tu vas souvent au cinéma ? – Oui, ______ vais tous les samedis.'",
        options: ["j'en", "j'y", "je le", "je lui"],
        ans: 1,
        exp: "'Au cinéma' là địa điểm đi với giới từ 'à', được thay thế bằng đại từ 'y': 'j'y vais'."
      },
      {
        q: "Người chịu trách nhiệm viết kịch bản và lời thoại cho phim được gọi là:",
        options: ["le réalisateur", "le producteur", "le scénariste", "le cadreur"],
        ans: 2,
        exp: "'Le scénariste' là nhà biên kịch, người viết cốt truyện và lời thoại cho bộ phim."
      },
      {
        q: "Trong khẩu ngữ giới trẻ Pháp, từ 'trop' trong câu 'Ce film est trop bien !' mang ý nghĩa:",
        options: ["Quá tệ", "Rất hay / Cực kỳ hay", "Không hay lắm", "Hơi nhàm chán"],
        ans: 1,
        exp: "Trong khẩu ngữ thân mật, 'trop' có thể mang nghĩa tăng cường tích cực: 'rất / cực kỳ'."
      },
      {
        q: "Hiện tượng lược bỏ từ nào thường xảy ra trong câu phủ định khẩu ngữ của người Pháp?",
        options: ["pas", "ne", "rien", "jamais"],
        ans: 1,
        exp: "Trong giao tiếp thân mật, người Pháp thường lược bỏ 'ne' (ví dụ: 'Je sais pas' thay vì 'Je ne sais pas')."
      }
    ]
  },
  {
    id: "unite-5",
    unitNum: "Unité 5",
    badge: "Numérique & Sécurité",
    title: "Pour un Internet plus sûr",
    vietTitle: "Vì một môi trường Internet an toàn hơn",
    desc: "Đánh giá Internet và không gian mạng, các cấu trúc vô nhân xưng đưa ra lời khuyên/cảnh báo, Conditionnel présent dùng cho các viễn cảnh giả định tương lai, cách ngắt nhịp tách âm tiết và kỹ năng bảo mật số.",
    target: "Đưa ra khuyến nghị và cảnh báo khi dùng Internet; hình dung tương lai công nghệ bằng Conditionnel présent; nhận thức lợi ích và nguy cơ mạng; thiết kế tờ gấp hướng dẫn an toàn số (Dépliant).",
    vocab: [
      { fr: "un internaute", pos: "n.m", ipa: "/ɛ̃.tɛʁ.nɔt/", vi: "Cư dân mạng, người dùng Internet", ex: "Les internautes doivent protéger leurs données.", viEx: "Cư dân mạng cần phải bảo vệ dữ liệu của mình." },
      { fr: "un réseau social", pos: "n.m", ipa: "/ʁe.zo sɔ.sjal/", vi: "Mạng xã hội", ex: "Passer trop de temps sur les réseaux sociaux.", viEx: "Dành quá nhiều thời gian trên mạng xã hội." },
      { fr: "un mot de passe fort", pos: "n.m", ipa: "/mo d(ə) pɑs fɔʁ/", vi: "Mật khẩu mạnh", ex: "Il faut choisir un mot de passe fort et complexe.", viEx: "Cần phải chọn một mật khẩu mạnh và phức tạp." },
      { fr: "des informations personnelles", pos: "n.f.pl", ipa: "/dɛ zɛ̃.fɔʁ.ma.sjɔ̃ pɛʁ.sɔ.nɛl/", vi: "Thông tin cá nhân", ex: "Ne partagez jamais vos informations personnelles.", viEx: "Đừng bao giờ chia sẻ thông tin cá nhân của bạn." },
      { fr: "un faux profil", pos: "n.m", ipa: "/fo pʁɔ.fil/", vi: "Tài khoản giả mạo", ex: "Méfiez-vous des faux profils sur Internet.", viEx: "Hãy cảnh giác với các tài khoản giả mạo trên Internet." },
      { fr: "télécharger", pos: "v", ipa: "/te.le.ʃaʁ.ʒe/", vi: "Tải xuống, download", ex: "Télécharger des fichiers depuis des sites fiables.", viEx: "Tải tệp tin từ những trang web đáng tin cậy." },
      { fr: "le temps d'écran", pos: "n.m", ipa: "/tɑ̃ de.kʁɑ̃/", vi: "Thời gian nhìn màn hình điện tử", ex: "Il est conseillé de limiter son temps d'écran.", viEx: "Nên giới hạn thời gian sử dụng màn hình thiết bị." },
      { fr: "prudent(e)", pos: "adj", ipa: "/pʁy.dɑ̃, pʁy.dɑ̃t/", vi: "Thận trọng, cẩn giác", ex: "Restez toujours prudent en ligne.", viEx: "Hãy luôn thận trọng khi trực tuyến." }
    ],
    dialogues: [
      {
        speakerA: "Chuyên gia an ninh mạng",
        speakerB: "Học sinh",
        lines: [
          { speaker: "Chuyên gia", fr: "Bonjour les jeunes ! Savez-vous comment sécuriser votre compte en ligne ?", vi: "Xin chào các bạn trẻ! Các em đã biết cách bảo mật tài khoản trực tuyến chưa?" },
          { speaker: "Học sinh", fr: "Il est recommandé d'utiliser un mot de passe complexe avec des chiffres et des symboles, n'est-ce pas ?", vi: "Nên sử dụng mật khẩu phức tạp gồm chữ số và ký tự đặc biệt, đúng không ạ?" },
          { speaker: "Chuyên gia", fr: "Exactement ! Et il est très important de ne jamais cliquer sur des liens suspects.", vi: "Chính xác! Và điều rất quan trọng là không bao giờ nhấp vào các đường link đáng ngờ." },
          { speaker: "Học sinh", fr: "À l'avenir, est-ce que l'intelligence artificielle nous protégerait mieux ?", vi: "Trong tương lai, liệu trí tuệ nhân tạo có thể bảo vệ chúng ta tốt hơn không ạ?" }
        ]
      }
    ],
    grammar: {
      title: "Cấu trúc vô nhân xưng & Conditionnel diễn đạt giả định",
      rules: [
        {
          name: "1. Cấu trúc vô nhân xưng đưa ra khuyến nghị, cảnh báo",
          usage: "Dùng các cụm từ vô nhân xưng đi với động từ nguyên mẫu (infinitif) để đưa ra lời khuyên hoặc quy tắc mang tính phổ quát:",
          formula: "Il est + Adjectif + de + Verbe à l'infinitif",
          examples: [
            "Il est recommandé de changer régulièrement de mot de passe. (Nên thay đổi mật khẩu thường xuyên)",
            "Il est important de rester prudent sur les réseaux sociaux. (Quan trọng là phải luôn thận trọng trên mạng xã hội)",
            "Il est interdit de publier des photos sans autorisation. (Nghiêm cấm đăng ảnh khi chưa được phép)",
            "Il faut protéger ses données privées. (Cần phải bảo vệ dữ liệu riêng tư)",
            "On a besoin d'une connexion sécurisée. (Chúng ta cần một đường truyền an toàn)"
          ]
        },
        {
          name: "2. Conditionnel présent (2) - Diễn đạt giả định tương lai & Tưởng tượng",
          usage: "Dùng thể điều kiện để tưởng tượng hoặc đưa ra viễn cảnh giả định về tương lai:",
          formula: "Gốc tương lai + Đuôi Imparfait (-ais, -ais, -ait, -ions, -iez, -aient)",
          examples: [
            "À l'école du futur, les robots remplaceraient les professeurs. (Ở trường tương lai, robot sẽ thay thế giáo viên - giả định)",
            "Les élèves feraient tous leurs devoirs en réalité virtuelle. (Học sinh sẽ làm bài tập trong không gian thực tế ảo)",
            "On pourrait surfer sans aucun risque de virus. (Chúng ta có thể lướt web mà không sợ dính virus)"
          ]
        }
      ],
      comparisonTable: [
        { criteria: "Loại câu", passeCompose: "Khuyến nghị / Lời khuyên", imparfait: "Cấm đoán / Quy tắc", extra: "Giả định tương lai" },
        { criteria: "Cấu trúc", passeCompose: "Il est recommandé/conseillé de + inf", imparfait: "Il est interdit de / Il ne faut pas + inf", extra: "Sujet + Verbe au conditionnel" },
        { criteria: "Ví dụ", passeCompose: "Il est recommandé d'utiliser un pseudo.", imparfait: "Il est interdit de pirater un compte.", extra: "Internet deviendrait 100% sécurisé." }
      ]
    },
    phonetics: {
      title: "Phân tách âm tiết & Trọng âm nhịp điệu (Rythme et syllabes)",
      content: "Trong tiếng Pháp, âm tiết thường kết thúc bằng nguyên âm mở. Khi nói, trọng âm rơi vào âm tiết cuối cùng của mỗi nhóm nhịp nghĩa (groupe rythmique): 'C'est|pra|tique ↗' (3 âm tiết, nhấn vào '-tique').",
      examples: [
        { sound: "Phân tách âm tiết", words: "In|ter|net (3 âm), sé|cu|ri|té (4 âm), mot|de|passe (3 âm)" },
        { sound: "Nhóm nhịp", words: "Il est im|por|tant ↗ / de res|ter pru|dent ↘." }
      ]
    },
    culture: {
      title: "Phong trào an toàn số tại Pháp: Safer Internet Day & CNIL",
      desc: "Nước Pháp tham gia tích cực ngày 'Safer Internet Day' hàng năm để nâng cao ý thức cho thanh thiếu niên. Cơ quan CNIL (Commission Nationale de l'Informatique et des Libertés) của Pháp là tổ chức hàng đầu châu Âu về bảo vệ quyền riêng tư số và dữ liệu cá nhân của công dân trên Internet."
    },
    project: {
      title: "Tờ gấp hướng dẫn sử dụng Internet an toàn (Dépliant)",
      desc: "Thiết kế một tờ gấp 3 mặt (Dépliant 3 volets) với: Tiêu đề thu hút, Các nguy cơ tiềm ẩn (Lừa đảo, Bắt nạt mạng, Virus), 5 Lời khuyên vàng để tự bảo vệ và Khẩu hiệu hành động ý nghĩa."
    },
    quiz: [
      {
        q: "Chọn cấu trúc đúng để đưa ra lời khuyên an toàn: '______ de ne jamais divulguer son mot de passe.'",
        options: ["Il est recommandé", "Il a recommandé", "C'est recommandant", "Il recommande que"],
        ans: 0,
        exp: "'Il est recommandé de + infinitif' là cấu trúc chuẩn để đưa ra khuyến nghị."
      },
      {
        q: "Trong câu giả định: 'À l'avenir, les voitures ______ (rouler) à l'énergie solaire', động từ chia ở Conditionnel présent là:",
        options: ["roulent", "roulaient", "rouleront", "rouleraient"],
        ans: 3,
        exp: "Gốc tương lai 'rouler-' kết hợp đuôi imparfait '-aient' cho ngôi 'les voitures' thành 'rouleraient'."
      },
      {
        q: "Thuật ngữ tiếng Pháp nào chỉ 'thời gian nhìn màn hình thiết bị'?",
        options: ["le temps d'écran", "le temps de passe", "le réseau social", "le faux profil"],
        ans: 0,
        exp: "'Le temps d'écran' là thời gian nhìn màn hình điện thoại/máy tính."
      },
      {
        q: "Từ 'sécurité' có bao nhiêu âm tiết phát âm?",
        options: ["2 âm tiết", "3 âm tiết", "4 âm tiết (sé-cu-ri-té)", "5 âm tiết"],
        ans: 2,
        exp: "Từ 'sécurité' được phát âm tách thành 4 âm tiết: sé - cu - ri - té."
      }
    ]
  },
  {
    id: "unite-6",
    unitNum: "Unité 6",
    badge: "Communication & Réseaux",
    title: "Je communique sur les réseaux sociaux",
    vietTitle: "Giao tiếp trên mạng xã hội & Đại từ sở hữu",
    desc: "Mạng xã hội và giới trẻ, phương thức tương tác số, mẫu câu hỏi giải thích làm rõ (préciser, expliquer), đại từ sở hữu (les pronoms possessifs: le mien, le tien, le nôtre...), xây dựng 10 quy tắc vàng ứng xử mạng.",
    target: "Thảo luận về cách dùng mạng xã hội; hỏi lại để làm rõ thông tin; phân biệt và dùng thành thạo đại từ sở hữu; xây dựng bộ 10 quy tắc vàng (10 règles d'or) trên mạng xã hội.",
    vocab: [
      { fr: "les réseaux sociaux", pos: "n.m.pl", ipa: "/le ʁe.zo sɔ.sjo/", vi: "Các mạng xã hội", ex: "Les adolescents utilisent beaucoup les réseaux sociaux.", viEx: "Thanh thiếu niên sử dụng rất nhiều mạng xã hội." },
      { fr: "une publication / un post", pos: "n", ipa: "/py.bli.ka.sjɔ̃, pɔst/", vi: "Bài đăng, bài chia sẻ", ex: "J'ai publié une nouvelle photo hier.", viEx: "Tôi đã đăng một bức ảnh mới ngày hôm qua." },
      { fr: "un commentaire", pos: "n.m", ipa: "/kɔ.mɑ̃.tɛʁ/", vi: "Bình luận, lời nhận xét", ex: "Laisser un commentaire gentil et bienveillant.", viEx: "Để lại một bình luận tử tế và thiện chí." },
      { fr: "liker / aimer", pos: "v", ipa: "/laj.ke, e.me/", vi: "Thích bài viết, thả tim", ex: "Ses amis ont liké sa dernière vidéo.", viEx: "Bạn bè của cậu ấy đã thả tim video mới nhất." },
      { fr: "partager", pos: "v", ipa: "/paʁ.ta.ʒe/", vi: "Chia sẻ nội dung", ex: "Partager des articles intéressants avec ses camarades.", viEx: "Chia sẻ những bài báo thú vị với bạn bè." },
      { fr: "un abonné / une abonnée", pos: "n", ipa: "/a.bɔ.ne/", vi: "Người theo dõi, follower", ex: "Sa chaîne compte plus de mille abonnés.", viEx: "Kênh của cô ấy có hơn một ngàn người theo dõi." },
      { fr: "préciser", pos: "v", ipa: "/pʁe.si.ze/", vi: "Nói rõ hơn, làm sáng tỏ", ex: "Peux-tu préciser ta pensée ?", viEx: "Bạn có thể nói rõ hơn suy nghĩ của mình không?" },
      { fr: "une messagerie instantanée", pos: "n.f", ipa: "/mɛ.saʒ.ʁi ɛ̃s.tɑ̃.ta.ne/", vi: "Ứng dụng nhắn tin tức thời", ex: "Communiquer par messagerie instantanée.", viEx: "Giao tiếp qua ứng dụng nhắn tin tức thời." }
    ],
    dialogues: [
      {
        speakerA: "Camille",
        speakerB: "Thomas",
        lines: [
          { speaker: "Camille", fr: "Thomas, quels réseaux sociaux utilises-tu le plus souvent ?", vi: "Thomas, bạn sử dụng mạng xã hội nào thường xuyên nhất?" },
          { speaker: "Thomas", fr: "J'utilise surtout Instagram pour partager des photos de mes dessins.", vi: "Mình chủ yếu dùng Instagram để chia sẻ tranh vẽ của mình." },
          { speaker: "Camille", fr: "Tu peux préciser pourquoi tu préfères cette application aux autres ?", vi: "Bạn có thể nói rõ hơn tại sao bạn thích ứng dụng này hơn các ứng dụng khác không?" },
          { speaker: "Thomas", fr: "C'est-à-dire que l'interface est très visuelle. Mon profil est public, et le tien ?", vi: "Ý mình là giao diện của nó rất trực quan. Trang cá nhân của mình ở chế độ công khai, còn của bạn thì sao?" },
          { speaker: "Camille", fr: "Le mien est privé. Mes parents contrôlent mes contacts pour ma sécurité.", vi: "Của mình thì ở chế độ riêng tư. Bố mẹ mình kiểm soát danh bạ để đảm bảo an toàn cho mình." }
        ]
      }
    ],
    grammar: {
      title: "Đại từ sở hữu (Les pronoms possessifs)",
      rules: [
        {
          name: "Quy tắc hòa hợp Đại từ sở hữu",
          usage: "Đại từ sở hữu dùng để thay thế cho một danh từ đã được nhắc tới trước đó kèm theo tính từ sở hữu, nhằm tránh lặp từ. Hình thức của đại từ sở hữu phải hòa hợp về GIỐNG và SỐ với VẬT/NGƯỜI ĐƯỢC SỞ HỮU, còn nhóm ngôi đại từ phụ thuộc vào NGƯỜI SỞ HỮU.",
          formula: "Mạo từ xác định (le / la / les) + Dạng đại từ sở hữu",
          examples: [
            "Mon profil est public, et le tien ? ('le tien' = ton profil, giống đực số ít)",
            "Ma photo a reçu 50 likes. Et la tienne ? ('la tienne' = ta photo, giống cái số ít)",
            "Ses amis sont sympathiques, mais les miens sont plus drôles. ('les miens' = mes amis, đực số nhiều)",
            "Leur classe participera au projet. Et la nôtre ? ('la nôtre' = notre classe, cái số ít)"
          ]
        }
      ],
      comparisonTable: [
        { criteria: "Người sở hữu", passeCompose: "Đực số ít", imparfait: "Cái số ít", extra: "Số nhiều (Đực / Cái)" },
        { criteria: "Của tôi (1st sing)", passeCompose: "le mien", imparfait: "la mienne", extra: "les miens / les miennes" },
        { criteria: "Của bạn (2nd sing)", passeCompose: "le tien", imparfait: "la tienne", extra: "les tiens / les tiennes" },
        { criteria: "Của anh/cô ấy (3rd sing)", passeCompose: "le sien", imparfait: "la sienne", extra: "les siens / les siennes" },
        { criteria: "Của chúng tôi (1st pl)", passeCompose: "le nôtre", imparfait: "la nôtre", extra: "les nôtres" },
        { criteria: "Của các bạn/ông bà (2nd pl)", passeCompose: "le vôtre", imparfait: "la vôtre", extra: "les vôtres" },
        { criteria: "Của họ (3rd pl)", passeCompose: "le leur", imparfait: "la leur", extra: "les leurs" }
      ]
    },
    phonetics: {
      title: "Ngữ điệu câu khẳng định và câu thể hiện sự do dự",
      content: "Câu khẳng định dứt khoát có ngữ điệu hạ giọng ở cuối câu: 'Je suis d'accord ↘'. Câu thể hiện do dự hoặc thăm dò ý kiến có ngữ điệu hơi ngân cao và lửng: 'Je ne sais pas trop... ↗', 'C'est-à-dire... ↗'.",
      examples: [
        { sound: "Khẳng định dứt khoát", words: "C'est une bonne idée. / J'en suis sûr." },
        { sound: "Do dự / Thăm dò", words: "Tu crois ? / C'est-à-dire que... / Peut-être..." }
      ]
    },
    culture: {
      title: "Văn hóa giao tiếp mạng của thanh thiếu niên Pháp ngữ",
      desc: "Giới trẻ Pháp rất chuộng các ứng dụng giao tiếp hình ảnh và video ngắn. Đồng thời, văn hóa 'netiquette' (phép lịch sự trên mạng) được giảng dạy kỹ lưỡng trong các trường THCS tại Pháp: không bao giờ bình luận xúc phạm, luôn tôn trọng sự đa dạng quan điểm và tuân thủ luật bảo vệ bản quyền hình ảnh."
    },
    project: {
      title: "10 Quy tắc vàng trên Mạng xã hội (Les 10 règles d'or)",
      desc: "Xây dựng cẩm nang '10 Règles d'or pour bien communiquer sur les réseaux sociaux': Viết các điều răn ngắn gọn bằng cấu trúc 'Il faut / Il ne faut pas / Il est recommandé de', trang trí biểu tượng icon sinh động và giới thiệu trước lớp."
    },
    quiz: [
      {
        q: "Điền đại từ sở hữu thích hợp: 'Voici mon livre. Où est ______ (ton livre) ?'",
        options: ["le mien", "le tien", "la tienne", "les tiens"],
        ans: 1,
        exp: "'Livre' là danh từ giống đực số ít của 'bạn', do đó dùng 'le tien'."
      },
      {
        q: "Trong câu: 'Ma passion, c'est le dessin. Et ______ ?', đại từ thay cho 'sa passion' là:",
        options: ["le sien", "la sienne", "les siens", "les siennes"],
        ans: 1,
        exp: "'Passion' là danh từ giống cái số ít, nên đại từ sở hữu ngôi thứ ba là 'la sienne'."
      },
      {
        q: "Khi muốn yêu cầu bạn mình giải thích rõ hơn, ta có thể dùng câu nào?",
        options: ["C'est impossible !", "Tu peux préciser ?", "Tournez à droite.", "Au revoir !"],
        ans: 1,
        exp: "'Tu peux préciser ?' có nghĩa là 'Bạn có thể nói rõ hơn được không?'."
      },
      {
        q: "Điền đại từ sở hữu: 'Leur école est moderne, mais ______ (notre école) est plus ancienne.'",
        options: ["le nôtre", "la nôtre", "les nôtres", "notre"],
        ans: 1,
        exp: "'École' là danh từ giống cái số ít của chúng tôi, đại từ sở hữu là 'la nôtre'."
      }
    ]
  }
];

module.exports = { unitsData };
