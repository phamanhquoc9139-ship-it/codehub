// scratch/generate_tiengphap10_data.js
// Complete educational dataset for Tiếng Pháp 10 - Kết nối tri thức với cuộc sống

const fs = require('fs');

const unite0 = {
  id: 0,
  title: "Unité 0 – Bienvenue au lycée !",
  subtitle: "Mục tiêu và ôn tập đầu năm: Làm quen với môi trường THPT, tựu trường và giao tiếp thường nhật",
  description: "Ôn tập các mẫu câu giao tiếp cơ bản, làm quen với môi trường lycée, trao đổi về ngày tựu trường, thời khóa biểu, môn học, câu lạc bộ và định hướng nghề nghiệp tương lai.",
  keyPoints: [
    {
      title: "Hỏi và chỉ đường trong khuôn viên trường",
      french: "Demander et indiquer le chemin dans le lycée",
      content: "Sử dụng các mẫu câu: « C'est où, s'il vous plaît ? », « Pour aller au laboratoire de langues ? ». Chỉ đường bằng các chỉ dẫn: « Tournez à droite », « Allez tout droit », « C'est au bout du couloir », « Montez l'escalier jusqu'au deuxième étage »."
    },
    {
      title: "Hỏi và nói về dự định nghề nghiệp tương lai",
      french: "Parler de ses projets professionnels",
      content: "Các câu hỏi tiêu biểu: « Tu veux faire quoi plus tard ? », « Tu veux travailler dans quel domaine ? », « Tu aimerais travailler dans un hôpital ? ». Trả lời kèm lí do: « Je voudrais devenir médecin parce que j'aime aider les gens », « Je m'intéresse à l'informatique »."
    },
    {
      title: "Đăng kí câu lạc bộ & Đề nghị giúp đỡ",
      french: "S'inscrire à un club et proposer son aide",
      content: "Mẫu câu: « Il faut s'inscrire avant vendredi », « Est-ce que tu peux m'aider à remplir cette fiche d'inscription ? », « Je peux t'aider à choisir tes activités extrascolaires »."
    },
    {
      title: "Trao đổi ý kiến về chương trình & An toàn mạng xã hội",
      french: "Exprimer son opinion et sécurité sur les réseaux",
      content: "Đánh giá phim, chương trình: « Ce film est captivant / trop lent / ennuyeux », « J'adore cette émission ». Quy tắc an toàn số: giữ tài khoản riêng tư (garder son compte privé), đặt mật khẩu mạnh (choisir un mot de passe sécurisé), cân nhắc kĩ trước khi chia sẻ thông tin cá nhân."
    },
    {
      title: "Thời khóa biểu & Trải nghiệm ngày tựu trường",
      french: "L'emploi du temps et le journal de la rentrée",
      content: "Đọc hiểu nhật kí của Alice tại lycée Louis Pasteur: từ cảm giác lo lắng ban đầu (l'angoisse) đến sự an tâm khi gặp lại bạn cũ (retrouver de vieux amis), được chào đón bởi giáo viên chủ nhiệm (le professeur principal) và làm quen với khuôn viên rộng lớn."
    }
  ],
  vocabulary: [
    { fr: "la rentrée", vn: "ngày tựu trường, khai giảng" },
    { fr: "le lycée", vn: "trường trung học phổ thông (cấp 3)" },
    { fr: "l'emploi du temps (m.)", vn: "thời khóa biểu" },
    { fr: "le couloir", vn: "hành lang" },
    { fr: "l'escalier (m.)", vn: "cầu thang" },
    { fr: "le proviseur / la proviseure", vn: "hiệu trưởng trường THPT" },
    { fr: "le professeur principal", vn: "giáo viên chủ nhiệm" },
    { fr: "une matière obligatoire / optionnelle", vn: "môn học bắt buộc / tự chọn" },
    { fr: "les activités extrascolaires (f.)", vn: "hoạt động ngoại khóa" },
    { fr: "un mot de passe sécurisé", vn: "mật khẩu an toàn" }
  ]
};

const unites = [
  // =========================================================================
  // UNITÉ 1: UN LOOK QUI MARQUE !
  // =========================================================================
  {
    id: 1,
    title: "Unité 1 – Un look qui marque !",
    theme: "Ngoại hình, tính cách, phong cách ăn mặc; khen ngợi và phê bình",
    project: "Bài báo tường « Qui est-ce qui est mon bon pote ? » (Chân dung người bạn tốt)",
    culture: "Phong cách học sinh tại các quốc gia Pháp ngữ: Québec (chú trọng giữ ấm và tiện dụng mùa đông), Bỉ (thanh lịch, tối giản), Tunisia (pha trộn truyền thống và hiện đại), Pháp (streetwear, casual chic và khẳng định cá tính riêng).",
    lessons: [
      {
        num: 1,
        title: "Décrire l'apparence et le style",
        focus: "Miêu tả ngoại hình, quần áo, phụ kiện và phong cách cá nhân",
        vocab: "Quần áo: un jean, un pantalon, une chemise, un chemisier, un T-shirt, un blazer, une veste, une robe. Phụ kiện: un pendentif, une montre, un bracelet, des boucles d'oreilles, des baskets, des chaussures, des escarpins. Ngoại hình: grand(e), mince, de taille moyenne, les cheveux bouclés/lisses/courts, avoir les yeux marron/bleus.",
        grammar: "Đại từ quan hệ QUI và QUE: « qui » làm chủ ngữ của mệnh đề quan hệ (không bao giờ lược âm thành qu'); « que / qu' » làm bổ ngữ trực tiếp (COD) của mệnh đề quan hệ. Ví dụ: L'artiste qui porte la veste noire... / Les baskets que l'artiste porte sont très originales.",
        communication: "« Elle est grande et mince. Elle a les cheveux bouclés. »; « Elle porte une chemise à rayures et un jean droit. »; « Ce pendentif en argent lui donne un style très original. »",
        phonetics: "Phân biệt phụ âm [g] (như trong gâteau, grand, bague) và [ʒ] (như trong jean, jaune, veste rouge, voyage)."
      },
      {
        num: 2,
        title: "Un bon ami ?",
        focus: "Phẩm chất, hành vi quý trọng hoặc không thích ở bạn bè",
        vocab: "Tính cách: ambitieux/ambitieuse, honnête, impatient(e), jaloux/jalouse, obstiné(e), optimiste, sociable, timide, sincère, fiable, loyal(e), généreux/généreuse, attentif/attentive, égoïste, arrogant(e). Hành vi: avoir le sens de l'humour, se moquer des autres, raconter des potins, trahir un secret.",
        grammar: "Bốn cấu trúc câu hỏi với đại từ nghi vấn: (1) Qui est-ce qui... ? (hỏi chủ ngữ là người); (2) Qu'est-ce qui... ? (hỏi chủ ngữ là vật/sự việc); (3) Qui est-ce que... ? (hỏi COD là người); (4) Qu'est-ce que... ? (hỏi COD là vật/sự việc).",
        communication: "« La loyauté et la sincérité comptent le plus dans une amitié. »; « J'aime les amis qui sont toujours là pour moi. »; « Il me fait rire sans jamais se moquer des autres. »; « Qu'est-ce qui compte le plus pour toi ? »",
        phonetics: "Ngữ điệu câu hỏi với đại từ nghi vấn phức: hạ giọng ở cuối câu đối với câu hỏi có từ để hỏi."
      },
      {
        num: 3,
        title: "Dire du bien de quelqu'un / de quelque chose",
        focus: "Khen ngợi phong cách, lựa chọn và đưa ra nhận xét tích cực",
        vocab: "Tính từ khen ngợi: confortable, décontracté(e), pratique, élégant(e), chic, sophistiqué(e), intemporel(le), minimaliste, bohème. Phong cách: casual, streetwear, vintage, chic-décontracté. Chất liệu: les matières naturelles (coton, lin), les couleurs neutres.",
        grammar: "Sự hòa hợp giống và số của tính từ miêu tả: un style élégant ⟶ une veste élégante ⟶ des chaussures élégantes; Vận dụng mệnh đề quan hệ với qui/que để giải thích lí do yêu thích.",
        communication: "« C'est top ! »; « Ton style est super cool ! »; « Tu es très élégant(e) aujourd'hui ! »; « Tu as un vrai sens du style ! »; « Ça te va à ravir ! »; « Je privilégie le confort avant tout. »",
        phonetics: "Nối âm bắt buộc sau tính từ đứng trước danh từ: un_élégant manteau [n], de beaux_yeux [z]."
      },
      {
        num: 4,
        title: "Critiquer quelqu'un ou quelque chose",
        focus: "Bày tỏ quan điểm không đồng tình, phê bình trang phục và hành vi",
        vocab: "Từ vựng phê bình: insupportable, nul/nulle, une catastrophe, mauvais(e), raté(e), ennuyeux/ennuyeuse, trop lourd, trop voyant, ridicule, pas pratique du tout.",
        grammar: "Cấu trúc phủ định kép « ne… ni… ni… » (thường lược bỏ mạo từ không xác định sau ni: Il ne porte ni montre ni bracelet; Il n'est ni timide ni pessimiste) và cấu trúc hạn định « ne… que » (chỉ: Il ne pense qu'à lui-même; Elle n'achète ses vêtements qu'en ligne).",
        communication: "« Ce genre d'attitude m'énerve ! »; « Il ne pense qu'à lui ! »; « Ce sac est beaucoup trop lourd. »; « Cette tenue n'est pas pratique du tout pour voyager. »; « C'est complètement raté ! »",
        phonetics: "Phát âm dứt khoát các từ ngữ cảm thán phê bình: C'est nul ! / Quelle catastrophe !"
      }
    ],
    cases: [
      {
        title: "Tư vấn trang phục cho buổi phỏng vấn xin việc bán thời gian",
        scenario: "Lucas chuẩn bị đi phỏng vấn xin làm thêm tại một cửa hàng sách nhưng chưa biết nên mặc trang phục phong cách nào. Bạn hãy đưa ra lời nhận xét và gợi ý giúp Lucas.",
        solution: "1. Khen ngợi và định hướng phong cách: « Lucas, pour un entretien en librairie, je te conseille d'opter pour un style chic-décontracté. »\n2. Đề xuất trang phục cụ thể: « Tu devrais porter une chemise blanche bien repassée avec un pantalon chino beige et des chaussures en cuir propres. »\n3. Phê bình điều cần tránh bằng cấu trúc phủ định: « Évite le style streetwear trop voyant : ne porte ni casquette, ni jean déchiré, ni baskets fluorescentes. Ce n'est pas du tout adapté pour un entretien formel ! »\n4. Lời chúc khích lệ: « Ça te donnera une allure soignée et professionnelle. Bon courage, tu vas réussir ! »"
      },
      {
        title: "Tranh luận về tiêu chuẩn một người bạn tốt (Un vrai ami)",
        scenario: "Trong giờ học tiếng Pháp, nhóm bạn tranh luận về câu hỏi: « Qu'est-ce qui est le plus important dans l'amitié ? ». Hãy đóng vai người tham gia tranh luận sử dụng 4 dạng câu hỏi và tính từ tính cách.",
        solution: "1. Đặt câu hỏi mở đầu: « Qu'est-ce qui compte le plus pour vous chez un ami ? Est-ce la générosité ou la loyauté ? »\n2. Nêu quan điểm cá nhân: « Pour moi, c'est la franchise et la loyauté qui comptent le plus. J'adore les amis qui sont sincères et qui ne racontent jamais de potins dans mon dos. »\n3. Đặt câu hỏi tìm hiểu bạn: « Et toi, qui est-ce que tu considères comme ton meilleur ami ? Quelles sont les qualités qu'il possède ? »\n4. Phê bình tính cách xấu: « Je ne supporte pas les gens arrogants et égoïstes qui ne pensent qu'à leurs propres intérêts ! »"
      }
    ],
    quizzes: [
      {
        question: "Chọn đại từ quan hệ thích hợp: « Voici l'artiste ______ porte une veste en cuir rouge sur scène. »",
        options: ["qui", "que", "où", "dont"],
        correct: 0,
        explanation: "« qui » thay thế cho danh từ đi trước (l'artiste) và làm chủ ngữ của động từ « porte » trong mệnh đề quan hệ."
      },
      {
        question: "Chọn câu hỏi đúng để hỏi về chủ ngữ là một sự việc/điều trừu tượng: « ______ te préoccupe le plus pour la rentrée ? »",
        options: ["Qu'est-ce qui", "Qui est-ce qui", "Qu'est-ce que", "Qui est-ce que"],
        correct: 0,
        explanation: "« Qu'est-ce qui » dùng để hỏi chủ ngữ là sự vật, sự việc hoặc điều trừu tượng (chủ ngữ gây ra hành động préoccupe)."
      },
      {
        question: "Chọn câu viết đúng cấu trúc phủ định kép « ne… ni… ni… »:",
        options: [
          "Elle ne porte ni bague ni collier.",
          "Elle ne porte ni une bague ni un collier.",
          "Elle ne porte pas ni bague ni collier.",
          "Elle porte ni bague ni collier."
        ],
        correct: 0,
        explanation: "Trong cấu trúc « ne… ni… ni… », mạo từ không xác định (un, une, des) và mạo từ bộ phận (du, de la, des) được lược bỏ hoàn toàn."
      }
    ]
  },

  // =========================================================================
  // UNITÉ 2: LE QUOTIDIEN AU LYCÉE
  // =========================================================================
  {
    id: 2,
    title: "Unité 2 – Le quotidien au lycée",
    theme: "Không gian trường học, môn học, định hướng nghề nghiệp và hoạt động ngoại khóa",
    project: "Mô hình số « Le lycée du futur » (Trường THPT tương lai)",
    culture: "Khám phá hệ thống trường trung học tại Pháp và các nước khối Francophonie: vai trò của Hội đồng học sinh (Conseil de la vie lycéenne), khu nội trú, căn tin dinh dưỡng, sự bình đẳng cơ hội và không gian xanh sinh thái.",
    lessons: [
      {
        num: 1,
        title: "Localiser les lieux au lycée",
        focus: "Miêu tả trường học, hỏi và chỉ vị trí các phòng, tòa nhà và khu sinh hoạt",
        vocab: "Địa điểm trường học: le bâtiment, la salle de classe, la bibliothèque (CDI), la salle multimédia, le laboratoire de langues, le laboratoire de sciences, le gymnase, la cour de récréation, la cantine, les espaces verts, le parc, le centre-ville, le lac.",
        grammar: "Giới từ và cụm giới từ chỉ vị trí: dans, sur, à côté de, près de, à proximité de, en face de, à droite de, à gauche de, entre… et…; Trạng từ nơi chốn: ici, là, là-bas, autour, en face, à proximité.",
        communication: "« Où se trouve le laboratoire de sciences, s'il vous plaît ? »; « La bibliothèque se trouve à proximité de la salle multimédia. »; « Le gymnase est situé en face de la cour, entre le bâtiment A et les espaces verts. »",
        phonetics: "Phân biệt các nguyên âm mũi [ɑ̃] (bâtiment, cantine), [ɛ̃] (bain, plein, technicien) và [ɔ̃] (orientation, pont)."
      },
      {
        num: 2,
        title: "Une activité indispensable : l'orientation professionnelle",
        focus: "Hoạt động hướng nghiệp, tìm hiểu nghề nghiệp địa phương và kĩ năng làm việc",
        vocab: "Hướng nghiệp: l'orientation professionnelle, un métier d'avenir, une formation universitaire, une journée portes ouvertes, un atelier pratique, un conseiller d'orientation, une entreprise partenaire. Nghề nghiệp: agriculteur, artisan, designer graphique, conseiller agricole, technicien en informatique, guide touristique.",
        grammar: "Đại từ quan hệ « où » thay thế cho danh từ chỉ nơi chốn (l'entreprise où ils travaillent) hoặc thời gian (le jour où nous avons visité l'atelier).",
        communication: "« Nous avons visité une entreprise où les ingénieurs nous ont expliqué leur travail quotidien. »; « Le jour où le conseiller est venu, tous les élèves ont posé beaucoup de questions sur les métiers du numérique. »",
        phonetics: "Phát âm các từ mượn và danh từ chỉ nghề nghiệp kết thúc bằng -eur / -euse, -ien / -ienne."
      },
      {
        num: 3,
        title: "Mon parcours scolaire",
        focus: "Các môn học, chương trình GDPT và trải nghiệm học tập ở lycée",
        vocab: "Môn học THPT: les sciences numériques et technologie (SNT), les sciences économiques et sociales (SES), l'histoire-géographie, la physique-chimie, les sciences de la vie et de la Terre (SVT), les mathématiques, la philosophie, les langues vivantes.",
        grammar: "Đại từ chỉ định (Les pronoms démonstratifs): celui (giống đực số ít), celle (giống cái số ít), ceux (giống đực số nhiều), celles (giống cái số nhiều). Dạng nhấn mạnh với -ci (ở đây/cái này) và -là (ở kia/cái kia), hoặc đi kèm « de… » / mệnh đề quan hệ « qui/que ».",
        communication: "« Tu te souviens des matières que j'ai choisies ? Celles-ci sont très captivantes ! »; « De tous les projets, celui de SVT me demande le plus de temps. »; « Tu préfères ce cours ou celui-là ? »",
        phonetics: "Trọng âm từ và nhịp điệu câu khi dùng đại từ chỉ định có gạch nối: celui-CI / celui-LÀ."
      },
      {
        num: 4,
        title: "La vie dynamique dans notre lycée",
        focus: "Hoạt động câu lạc bộ, sự kiện ngoại khóa, nội quy và đời sống học đường",
        vocab: "Đời sống học đường: les activités extrascolaires, le club d'éloquence, le club de théâtre, le club d'échecs, le tournoi de football inter-lycées, le conseil des délégués, la Semaine de l'environnement, le projet de recyclage des déchets.",
        grammar: "Tổng hợp đại từ quan hệ où, đại từ chỉ định và giới từ chỉ nơi chốn để trình bày bài diễn thuyết mạch lạc; các trạng từ tần suất: tous les jours, chaque semaine, souvent, de temps en temps.",
        communication: "« Tous les vendredis après-midi, notre club organise des répétitions dans la salle polyvalente. »; « Le lycée organise une exposition où chacun peut présenter ses créations artistiques. »",
        phonetics: "Ngữ điệu hào hứng khi thuyết phục bạn bè tham gia câu lạc bộ học đường."
      }
    ],
    cases: [
      {
        title: "Chỉ đường cho học sinh mới đến phòng thí nghiệm ngoại ngữ",
        scenario: "Một học sinh mới chuyển trường đến đứng ở cổng trường và hỏi bạn đường tới phòng Lab ngoại ngữ (le laboratoire de langues). Hãy chỉ đường cụ thể, rõ ràng.",
        solution: "1. Chào đón và xác định vị trí: « Bonjour ! Bienvenue dans notre lycée. Ne t'inquiète pas, c'est facile à trouver. »\n2. Hướng dẫn chi tiết: « D'abord, traverse la cour principale tout droit. Entre dans le bâtiment B qui se trouve en face de la cantine. »\n3. Chỉ tầng và hướng rẽ: « Monte l'escalier jusqu'au premier étage. Ensuite, tourne à gauche : le laboratoire de langues est situé juste à côté de la salle multimédia, en face du CDI. »\n4. Lời chúc: « Bonne journée et bon cours ! »"
      },
      {
        title: "Viết email chia sẻ về môn học yêu thích và định hướng nghề nghiệp",
        scenario: "Viết một đoạn email ngắn gửi cho người bạn qua thư (correspondant) kể về những môn học tự chọn năm lớp 10 và nghề nghiệp em mơ ước.",
        solution: "« Salut Marc,\nComment vas-tu ? Cette année en classe de 10e, mon quotidien au lycée est très stimulant. J'ai choisi plusieurs matières optionnelles : parmi celles-ci, les sciences numériques et technologie (SNT) sont celles qui me passionnent le plus !\nLa semaine dernière, nous avons participé à une journée d'orientation où des professionnels du numérique sont venus présenter leurs métiers. Plus tard, je voudrais devenir développeur d'applications mobiles parce que j'aime créer des solutions utiles pour la société.\nEt toi, quelles sont les matières que tu préfères dans ton lycée ?\nÀ très bientôt,\nMinh »"
      }
    ],
    quizzes: [
      {
        question: "Chọn đại từ quan hệ thích hợp: « C'est l'entreprise ______ mon père travaille depuis dix ans. »",
        options: ["où", "qui", "que", "dont"],
        correct: 0,
        explanation: "« où » là đại từ quan hệ chỉ nơi chốn (l'entreprise), thay thế cho trạng ngữ nơi chốn « dans cette entreprise »."
      },
      {
        question: "Điền đại từ chỉ định phù hợp: « Tu aimes ces deux matières ? — Je préfère ______ qui porte sur l'informatique. »",
        options: ["celle", "celui", "ceux", "celles"],
        correct: 0,
        explanation: "Từ được thay thế là « la matière » (danh từ giống cái số ít) nên ta dùng đại từ chỉ định « celle »."
      },
      {
        question: "Cụm từ nào sau đây mang nghĩa là « đối diện với »?",
        options: ["en face de", "à côté de", "au bout de", "autour de"],
        correct: 0,
        explanation: "« en face de » có nghĩa là đối diện với; « à côté de » là bên cạnh; « au bout de » là ở cuối; « autour de » là xung quanh."
      }
    ]
  },

  // =========================================================================
  // UNITÉ 3: LE MONDE DES MÉDIAS
  // =========================================================================
  {
    id: 3,
    title: "Unité 3 – Le monde des médias",
    theme: "Phương tiện truyền thông, tiếp nhận tin tức, sự kiện thời sự và giới thiệu sách",
    project: "Thiết kế bìa tạp chí học đường (La une d'un magazine lycéen)",
    culture: "Báo chí và truyền thông Pháp ngữ: các tờ báo lớn (Le Monde, Le Figaro, Libération), tuần lễ báo chí trong trường học (La Semaine de la presse et des médias dans l'École), sự phát triển của podcast và báo chí kĩ thuật số trong giới trẻ.",
    lessons: [
      {
        num: 1,
        title: "Choisissons un jeu télévisé !",
        focus: "Các chương trình truyền hình, bày tỏ ý kiến đồng tình hoặc phản đối",
        vocab: "Truyền hình: la télévision, une émission de divertissement, un jeu télévisé, un dessin animé, une série policière, un reportage d'investigation, un documentaire animalier, le journal télévisé (JT), une chaîne de télévision.",
        grammar: "Diễn đạt sự đồng tình: Tu as parfaitement raison; Sans aucun doute; Optons pour...; J'adhère totalement à ton idée. Diễn đạt sự phản đối: Ah non, pas question !; Tu as complètement tort !; Hors de question !; Au contraire, je pense que...",
        communication: "« Si on regardait ce jeu télévisé ce soir ? — Ah non, pas question ! C'est trop répétitif, optons plutôt pour ce documentaire passionnant ! »",
        phonetics: "Liaison bắt buộc (nối âm bắt buộc): sau mạo từ và tính từ chỉ định (les_émissions [z], ces_articles [z]), sau đại từ chủ ngữ (nous_avons [z], ils_ont [z]), giữa tính từ và danh từ đi sau (un grand_événement [t])."
      },
      {
        num: 2,
        title: "Raconter un fait divers",
        focus: "Đọc hiểu và tường thuật một mẩu tin sự kiện đời sống thực tế",
        vocab: "Sự kiện thời sự (Fait divers): un sauvetage héroïque, un incendie violent, un cambriolage nocturne, un accident de la route, une victime indemne, un témoin oculaire, les pompiers courageux, les flammes dévastatrices, un cambrioleur arrêté.",
        grammar: "Passé composé và quy tắc hòa hợp phân từ quá khứ (L'accord du participe passé): (1) Với trợ động từ ÊTRE: phân từ quá khứ luôn hòa hợp giống/số với chủ ngữ (Des pompiers sont venus; Les victimes sont arrivées); (2) Với trợ động từ AVOIR: phân từ quá khứ hòa hợp với bổ ngữ trực tiếp (COD) NẾU COD đứng TRƯỚC động từ (Les flammes, il les a aperçues et les a signalées; La médaille que la mairie a offerte).",
        communication: "« Hier soir, un violent incendie s'est déclaré dans le centre-ville. Heureusement, les pompiers sont intervenus rapidement et ont sauvé toutes les victimes. »",
        phonetics: "Phân biệt phát âm đuôi phân từ quá khứ -é, -i, -u (sauvé, parti, aperçu)."
      },
      {
        num: 3,
        title: "J'ai lu la presse écrite",
        focus: "Báo in, tạp chí, podcast, mạng xã hội và các kênh tiếp nhận thông tin",
        vocab: "Báo chí: la presse écrite, un quotidien (báo hàng ngày), un hebdomadaire (báo hàng tuần), un mensuel (tạp chí hàng tháng), un magazine de mode, la une (trang nhất), la couverture, le sommaire, une rubrique sportive, un gros titre, un journaliste d'investigation, l'actualité brûlante.",
        grammar: "Củng cố hòa hợp phân từ quá khứ có COD đi trước là đại từ nhân xưng COD (le, la, les) hoặc đại từ quan hệ QUE: « Les journaux que j'ai lus ce matin parlent de la crise écologique. »",
        communication: "« Je m'informe principalement sur les réseaux sociaux et via des podcasts, mais mon grand-père lit toujours son quotidien papier tous les matins. »",
        phonetics: "Âm bán nguyên âm [j] (quotidien, média, travailleur)."
      },
      {
        num: 4,
        title: "Mon coup de cœur littéraire",
        focus: "Giới thiệu tác phẩm văn học yêu thích, tóm tắt cốt truyện và nhận xét",
        vocab: "Văn học: un coup de cœur (tác phẩm yêu thích đặc biệt), un roman contemporain, une œuvre classique, un auteur célèbre / une auteure, une histoire captivante, un personnage principal attachant, une intrigue palpitante, un thème universel, recommander vivement.",
        grammar: "Vận dụng câu phức với mệnh đề quan hệ và quá khứ kép có hòa hợp phân từ: « C'est une histoire magnifique que l'auteur a écrite avec beaucoup d'émotion. »",
        communication: "« Mon coup de cœur littéraire est 'Le Petit Prince'. L'histoire raconte la rencontre d'un aviateur et d'un petit garçon venu d'une autre planète. Je vous recommande vivement cette lecture émouvante ! »",
        phonetics: "Nhịp điệu ngữ điệu truyền cảm khi đọc đoạn trích văn học."
      }
    ],
    cases: [
      {
        title: "Tường thuật mẩu tin người hùng cứu hộ trên báo tường trường",
        scenario: "Em hãy viết một mẩu tin thời sự ngắn (Fait divers) khoảng 60 từ kể về việc một bạn học sinh dũng cảm nhảy xuống hồ cứu em nhỏ bị đuối nước.",
        solution: "« Un sauvetage héroïque au parc municipal\nHier après-midi, vers 16 heures, un jeune garçon de huit ans est tombé accidentellement dans le lac du parc municipal. Témoin de la scène, Nam, un élève de notre lycée, s'est immédiatement jeté à l'eau sans hésiter. Grâce à son courage et sa rapidité, la petite victime a été ramenée saine et sauve sur la rive. Les secours, qui sont arrivés quelques minutes plus tard, ont félicité le jeune lycéen pour son acte héroïque. »"
      },
      {
        title: "Trình bày bài giới thiệu sách yêu thích (Coup de cœur)",
        scenario: "Trước câu lạc bộ đọc sách của trường, hãy giới thiệu ngắn gọn một cuốn tiểu thuyết em yêu thích, nêu nội dung chính và lí do bạn bè nên đọc.",
        solution: "« Bonjour à tous,\nAujourd'hui, je voudrais vous partager mon véritable coup de cœur littéraire : le roman 'Le Tour du monde en quatre-vingts jours' de Jules Verne.\nL'histoire raconte le pari audacieux d'un gentleman anglais nommé Phileas Fogg, qui tente de faire le tour du globe terrestre en seulement 80 jours, accompagné de son fidèle serviteur Passepartout.\nCe qui me plaît le plus dans cette œuvre, ce sont les péripéties palpitantes et la découverte des cultures à travers le monde. Les leçons de persévérance et d'amitié que l'auteur a transmises sont inoubliables. Je vous recommande vivement ce chef-d'œuvre passionnant ! »"
      }
    ],
    quizzes: [
      {
        question: "Chọn câu có sự hòa hợp phân từ quá khứ (accord du participe passé) CHÍNH XÁC:",
        options: [
          "Les fleurs que Lucas a achetées pour sa mère sont très belles.",
          "Les fleurs que Lucas a acheté pour sa mère sont très belles.",
          "Les fleurs que Lucas a achetés pour sa mère sont rất belles.",
          "Les fleurs que Lucas a acheter pour sa mère sont très belles."
        ],
        correct: 0,
        explanation: "Trong câu này, động từ chia với avoir (a acheté), nhưng có COD đứng trước là đại từ quan hệ « que » thay thế cho danh từ giống cái số nhiều « les fleurs » ⟶ phân từ quá khứ bắt buộc thêm -es ⟶ « achetées »."
      },
      {
        question: "Cụm từ nào dùng để thể hiện sự phản đối mạnh mẽ, kiên quyết?",
        options: [
          "Hors de question !",
          "Tu as parfaitement raison.",
          "Sans aucun doute.",
          "J'adhère totalement à ton avis."
        ],
        correct: 0,
        explanation: "« Hors de question ! » (Không đời nào! Tuyệt đối không!) là mẫu câu phản đối dứt khoát."
      },
      {
        question: "Từ nào chỉ trang đầu tiên quan trọng nhất của một tờ báo in?",
        options: ["La une", "Le sommaire", "La rubrique", "Le reportage"],
        correct: 0,
        explanation: "« La une » là trang nhất của báo in, nơi đăng tải các tiêu đề và tin tức nóng hổi, quan trọng nhất trong ngày."
      }
    ]
  },

  // =========================================================================
  // UNITÉ 4: VOYAGE ET DÉCOUVERTE
  // =========================================================================
  {
    id: 4,
    title: "Unité 4 – Voyage et découverte",
    theme: "Ước muốn du lịch, cảm xúc niềm vui, hỏi thông tin điểm đến/thời tiết và chỉ dẫn lộ trình",
    project: "Sổ tay hành trình du lịch (Le carnet de voyage au Québec / Canada)",
    culture: "Khám phá các điểm đến du lịch nổi tiếng trong thế giới Pháp ngữ: Québec và thác Niagara hùng vĩ (Canada), thủ đô ánh sáng Paris (Pháp), vịnh Hạ Long (Việt Nam), đảo ngọc Madagascar và dãy núi Alps Thụy Sĩ.",
    lessons: [
      {
        num: 1,
        title: "Moi, je voudrais partir au Québec",
        focus: "Bày tỏ ước muốn đi du lịch, khám phá điểm đến mới và trải nghiệm",
        vocab: "Du lịch & phiêu lưu: un voyage inoubliable, une destination exotique, partir à l'aventure, découvrir de nouveaux horizons, faire une randonnée pédestre, faire du kayak sur le fleuve, faire du ski alpin, l'escalade en montagne, un safari photo, une compétition sportive.",
        grammar: "Thì điều kiện hiện tại (Le conditionnel présent): Dùng để diễn đạt mong muốn tha thiết (un souhait) hoặc yêu cầu lịch sự (une demande polie). Cấu tạo: Gốc tương lai đơn (Radical du futur simple) + Đuôi thì quá khứ chưa hoàn thành (Terminaisons de l'imparfait: -ais, -ais, -ait, -ions, -iez, -aient). Ví dụ: Je voudrais voyager; J'aimerais visiter le Québec; Pourriez-vous m'indiquer l'horaire ?",
        communication: "« Moi, je voudrais partir au Québec pour admirer les couleurs flamboyantes de l'automne. »; « J'aimerais faire du kayak sur les lacs canadiens. »; « Pourriez-vous nous donner des brochures touristiques ? »",
        phonetics: "Phân biệt phát âm đuôi tương lai đơn [-e] (j'aimerai) và đuôi điều kiện [-ɛ] (j'aimerais)."
      },
      {
        num: 2,
        title: "Une journée magique à Paris",
        focus: "Kể lại chuyến tham quan và biểu lộ cảm xúc ngạc nhiên, niềm vui sướng",
        vocab: "Cảm xúc niềm vui: la joie immense, être heureux/heureuse, un bonheur indescriptible, une expérience magique, une promenade romantique, un monument historique, à perte de vue, une atmosphère chaleureuse, se réjouir de, un vrai plaisir, un paradis pour les touristes.",
        grammar: "Câu hỏi với phép đảo ngữ chủ ngữ (L'inversion du sujet): Dùng trong văn cảnh trang trọng hoặc văn viết. Động từ đứng trước đại từ chủ ngữ, nối bằng dấu gạch ngang (Quand partez-vous ?). Thêm -t- đệm âm khi động từ kết thúc bằng nguyên âm và đại từ bắt đầu bằng nguyên âm (A-t-il visité Paris ?). Khi chủ ngữ là danh từ, đặt danh từ ở đầu câu rồi lặp lại bằng đại từ sau động từ: « Marie a-t-elle aimé son voyage ? ».",
        communication: "« Je suis fou de joie à l'idée de visiter le musée du Louvre ! »; « Quel bonheur d'admirer Paris depuis le sommet de la tour Eiffel ! »; « Avez-vous déjà voyagé en France ? »",
        phonetics: "Nối âm t trong phép đảo ngữ: A-t-elle_aimé [t], Préfère-t-il [t]."
      },
      {
        num: 3,
        title: "Les chutes du Niagara",
        focus: "Hỏi và cung cấp thông tin du lịch: vị trí, thời tiết, hoạt động và thắng cảnh",
        vocab: "Thiên nhiên & khí hậu: une merveille naturelle, se situer à la frontière, une chute d'eau impressionnante, contempler un paysage grandiose, la température moyenne, un temps ensoleillé, un hiver neigeux, un accueil chaleureux, déguster un plat typique, un souvenir impérissable.",
        grammar: "Cách thành lập trạng từ chỉ cách thức kết thúc bằng đuôi -ment: (1) Tính từ giống cái + -ment: générale ⟶ généralement, lente ⟶ lentement, naturelle ⟶ naturellement; (2) Tính từ kết thúc bằng nguyên âm -é, -i, -u thêm trực tiếp -ment: poli ⟶ poliment, vrai ⟶ vraiment, absolu ⟶ absolument; (3) Tính từ đuôi -ent chuyển thành -emment: fréquent ⟶ fréquemment, prudent ⟶ prudemment; (4) Tính từ đuôi -ant chuyển thành -amment: constant ⟶ constamment, étonnant ⟶ étonnamment.",
        communication: "« Où se trouvent exactement les chutes du Niagara ? »; « Quel temps fait-il en automne au Canada ? »; « Qu'est-ce qu'on peut y faire comme activités sportives ? »",
        phonetics: "Phát âm chuẩn âm đôi [amɑ̃] (-amment) và [emɑ̃] (-emment)."
      },
      {
        num: 4,
        title: "Itinéraire idéal pour découvrir le Canada",
        focus: "Đề xuất, hỏi đáp và giải thích lộ trình du lịch chi tiết",
        vocab: "Lộ trình & hành trình: un itinéraire détaillé, un séjour touristique, préparer les bagages, une excursion d'une journée, les routards, un circuit organisé, un vol direct, une visite guidée passionnante, calculer la distance, estimer la durée du trajet, un moyen de transport écologique.",
        grammar: "Đại từ bổ ngữ kép (La double pronomination): Trật tự đại từ đứng trước động từ: [me / te / se / nous / vous] đứng trước [le / la / les] đứng trước [lui / leur] đứng trước [y] đứng trước [en]. Ví dụ: Le guide vous les montre (Người hướng dẫn chỉ chúng cho bạn); Il les leur donne (Anh ấy đưa chúng cho họ); Il ne les leur montre pas (Phủ định ne... pas bao quanh cả cụm đại từ + động từ).",
        communication: "« Quelle est la distance entre Toronto et Montréal ? »; « Combien de temps faut-il pour aller aux chutes en train ? »; « Quels moyens de transport peut-on emprunter pour ce circuit ? »",
        phonetics: "Trọng âm câu dồn vào động từ chính khi có đại từ bổ ngữ đi trước."
      }
    ],
    cases: [
      {
        title: "Lên kế hoạch và hỏi thông tin chuyến du lịch tại văn phòng du lịch (Office de tourisme)",
        scenario: "Em đến một văn phòng du lịch tại thành phố Québec để hỏi thông tin tour khám phá mùa lá phong đỏ và thuê xe đạp. Hãy thực hiện cuộc hội thoại lịch sự.",
        solution: "« Bonjour Madame,\n— Bonjour jeune homme ! Comment puis-je vous renseigner ?\n— Pourriez-vous me donner des informations sur les excursions pour observer les forêts d'érables ? Je voudrais savoir quelle est la meilleure période.\n— Absolument ! La période idéale est entre fin septembre et mi-octobre. Vous pouvez réserver un circuit guidé d'une journée.\n— Combien coûte cette excursion et quels sont les moyens de transport disponibles ?\n— Elle coûte 45 dollars par personne et le bus touristique vous y emmène directement.\n— C'est parfait ! Pourriez-vous m'inscrire pour ce samedi ?\n— Avec grand plaisir ! »"
      },
      {
        title: "Kể lại một trải nghiệm ấn tượng bằng các trạng từ đuôi -ment",
        scenario: "Viết đoạn văn ngắn khoảng 50 từ chia sẻ cảm nghĩ khi đứng trước vẻ đẹp của thác Niagara, sử dụng ít nhất 3 trạng từ đuôi -ment.",
        solution: "« L'été dernier, j'ai eu la chance inouïe de visiter les chutes du Niagara. Dès notre arrivée, nous avons été immédiatement émerveillés par la puissance incroyable de l'eau. Les bateaux s'approchent prudemment du pied de la chute dans un grondement assourdissant. Le paysage est véritablement spectaculaire ! C'est incontestablement le plus beau souvenir de mon voyage au Canada. »"
      }
    ],
    quizzes: [
      {
        question: "Chuyển tính từ « prudent » sang trạng từ chỉ cách thức tương ứng:",
        options: ["prudemment", "prudement", "prudament", "prudentement"],
        correct: 0,
        explanation: "Các tính từ kết thúc bằng đuôi -ent khi chuyển sang trạng từ sẽ đổi thành -emment (phát âm là [amɑ̃]) ⟶ « prudemment »."
      },
      {
        question: "Chọn câu có trật tự đại từ bổ ngữ kép (double pronomination) ĐÚNG:",
        options: [
          "Le guide touristique nous les montre.",
          "Le guide touristique les nous montre.",
          "Le guide touristique montre nous les.",
          "Le guide touristique nous montre les."
        ],
        correct: 0,
        explanation: "Theo bảng trật tự đại từ bổ ngữ: đại từ chỉ người ngôi 1, 2 (nous) đứng TRƯỚC đại từ COD ngôi 3 (les) ⟶ « nous les montre »."
      },
      {
        question: "Động từ « vouloir » chia ở ngôi « Je » thì Conditionnel présent là:",
        options: ["voudrais", "voulais", "voudrai", "veut"],
        correct: 0,
        explanation: "Gốc tương lai của vouloir là « voudr- » cộng với đuôi imparfait của ngôi Je là « -ais » ⟶ « voudrais »."
      }
    ]
  },

  // =========================================================================
  // UNITÉ 5: LOISIRS ET DISTRACTIONS
  // =========================================================================
  {
    id: 5,
    title: "Unité 5 – Loisirs et distractions",
    theme: "Sở thích, hoạt động giải trí, cân bằng học tập – nghỉ ngơi, xin ý kiến và tư vấn",
    project: "Áp phích quảng bá câu lạc bộ sở thích (L'affiche d'un club de loisirs lycéen)",
    culture: "Xu hướng giải trí của giới trẻ Pháp: sự hòa quyện giữa các môn nghệ thuật cổ điển (múa ba lê, nhiếp ảnh phim, hội họa) với văn hóa kĩ thuật số hiện đại (e-sport, sáng tạo nội dung video, cosplay, manga và nghe nhạc streaming).",
    lessons: [
      {
        num: 1,
        title: "Je pratique la danse classique",
        focus: "Giới thiệu hoạt động nghệ thuật, thể thao và lợi ích của sở thích cá nhân",
        vocab: "Sở thích nghệ thuật & thể thao: la danse classique, la photographie argentique, la littérature de science-fiction, lire des romans fantastiques, pratiquer le football, jouer d'un instrument de musique, les jeux vidéo en ligne, visionner des vidéos éducatives, se détendre l'esprit, s'exprimer librement.",
        grammar: "Cấu trúc « sans + động từ nguyên mẫu (infinitif) »: Diễn tả một hành động không được thực hiện hoặc làm gì đó mà không cần đến điều gì. Ví dụ: « Elle s'exprime sans utiliser de mots » (Cô ấy biểu đạt mà không cần dùng lời nói); « Il travaille sans faire de bruit ».",
        communication: "« Je pratique la danse classique depuis plus de cinq ans. »; « Cette passion me permet de m'exprimer pleinement sans prononcer un seul mot. »; « Après une longue journée de cours intensifs, écouter du piano me détend profondément. »",
        phonetics: "Phát âm âm nối và nhịp điệu mượt mà của cấu trúc sans + infinitif: sans_utiliser [z], sans_hésiter [z]."
      },
      {
        num: 2,
        title: "Mes loisirs préférés",
        focus: "Miêu tả các thú vui, giải thích lí do yêu thích và giá trị tinh thần",
        vocab: "Từ vựng đam mê: un loisir enrichissant, une distraction saine, une véritable passion, s'intéresser vivement à, se passionner pour, raffoler de, être un grand fan de, adorer par-dessus tout, développer un bel esprit d'équipe, une activité hautement créative.",
        grammar: "Đại từ quan hệ « DONT »: Dùng để thay thế cho một danh từ hoặc đại từ làm bổ ngữ đi kèm với giới từ « de » (bổ ngữ của động từ: parler de, avoir besoin de, rêver de; hoặc bổ ngữ của tính từ: être fier de, être content de; hoặc chỉ sự sở hữu: le père de...).\nVí dụ: C'est un sport dont je ne peux plus me passer (se passer de); C'est un loisir dont il est très fier (fier de); L'écrivain dont je lis le livre (le livre de l'écrivain).",
        communication: "« Ce qui me plaît le plus dans la photographie, c'est de capturer l'émotion de l'instant. »; « Je me passionne pour la guitare classique, un instrument dont j'adore la sonorité douce. »",
        phonetics: "Phát âm nguyên âm mũi [ɔ̃] trong đại từ « dont » và phân biệt với [dɑ̃] trong « dans »."
      },
      {
        num: 3,
        title: "Problèmes personnels : demander un avis ou un conseil",
        focus: "Trình bày khó khăn cá nhân (cân bằng học tập và đam mê), xin lời khuyên",
        vocab: "Khó khăn & giải tỏa: équilibrer harmonieusement les études et les loisirs, s'entraîner quotidiennement, préparer un examen important, surmonter le stress, réaménager son emploi du temps, planifier ses révisions, maintenir une concentration optimale, se sentir débordé(e).",
        grammar: "Các mẫu câu xin ý kiến và lời khuyên: « Que me conseilles-tu de faire pour... ? »; « À ton avis, est-ce une bonne idée de... ? »; « Quel est ton avis sur cette méthode d'organisation ? »; « Aurais-tu un conseil efficace pour m'aider ? »",
        communication: "« J'adore jouer au basket, mais avec les examens qui approchent, je me sens débordé. Que me conseilles-tu pour mieux m'organiser sans abandonner mon sport ? »",
        phonetics: "Ngữ điệu thể hiện sự băn khoăn, tìm kiếm sự thấu hiểu và sẻ chia."
      },
      {
        num: 4,
        title: "Conseiller ou déconseiller",
        focus: "Đưa ra lời khuyên khoa học, khuyến khích hoặc khuyên tránh một hành động",
        vocab: "Giải pháp quản lí thời gian: la méthode Pomodoro, établir une liste de priorités, alterner le travail intellectuel et les pauses régulières, éviter les distractions numériques, s'aérer l'esprit, garder un sommeil réparateur.",
        grammar: "Sử dụng thì Conditionnel présent với các ngôi « tu » và « vous » để đưa ra lời khuyên một cách nhẹ nhàng, lịch sự và tinh tế:\n« Tu devrais planifier tes journées. » (Bạn nên lập kế hoạch...)\n« Tu pourrais essayer la méthode Pomodoro. » (Bạn có thể thử...)\n« Vous devriez faire des pauses régulières. »\nCác cấu trúc khuyên khác: « À ta place, je ferais... »; « Il faudrait éviter de réviser tard la nuit »; « Il est important de... ».",
        communication: "« Tu devrais consacrer 45 minutes aux devoirs puis 15 minutes à ta passion. À ta place, j'éviterais d'utiliser le smartphone pendant les sessions de révision. »",
        phonetics: "Ngữ điệu chân thành, mang tính khích lệ và đồng cảm."
      }
    ],
    cases: [
      {
        title: "Tư vấn cho bạn cùng lớp đang bị căng thẳng vì học tập quá tải",
        scenario: "Người bạn thân của em tên là Antoine cảm thấy kiệt sức vì vừa phải ôn thi học kì vừa muốn duy trì tập đàn piano 3 tiếng mỗi ngày. Hãy viết tin nhắn tư vấn giúp Antoine lấy lại cân bằng.",
        solution: "« Salut Antoine,\nJ'ai bien reçu ton message. Ne t'inquiète pas, c'est normal de se sentir stressé avant les examens.\nÀ ta place, je réorganiserais mon emploi du temps dès aujourd'hui. Tu devrais réduire temporairement tes répétitions de piano à une heure par jour : cela te permettra de garder le plaisir de jouer sans empiéter sur tes révisions.\nTu pourrais aussi appliquer la méthode Pomodoro : travailler 25 minutes puis faire 5 minutes de pause pour te détendre les yeux. Surtout, il faudrait éviter de veiller après 23 heures, car un bon sommeil est indispensable pour la mémoire.\nCourage mon ami, tu vas y arriver !\nTho »"
      },
      {
        title: "Giới thiệu niềm đam mê nhiếp ảnh bằng đại từ DONT",
        scenario: "Trong buổi sinh hoạt câu lạc bộ nghệ thuật, hãy thuyết trình ngắn gọn về niềm đam mê nhiếp ảnh của em, sử dụng đại từ quan hệ DONT ít nhất 2 lần.",
        solution: "« Bonjour à tous,\nAujourd'hui, je suis très heureux de vous présenter la photographie argentique, une activité artistique dont je suis profondément passionné depuis deux ans.\nC'est un loisir dont les bienfaits sur mon bien-être sont immenses. Grâce à l'appareil photo dont mon grand-père m'a fait cadeau, j'apprends à observer le monde avec patience et sensibilité. La photographie me permet de capturer des instants précieux dont tout le monde admire la poésie. Je vous invite tous à essayer cet art merveilleux ! »"
      }
    ],
    quizzes: [
      {
        question: "Chọn đại từ quan hệ thích hợp: « Le football est une activité sportive ______ mon frère est très fier. »",
        options: ["dont", "qui", "que", "où"],
        correct: 0,
        explanation: "Tính từ « fier » đi với giới từ « de » (être fier de quelque chose) ⟶ đại từ quan hệ thay thế bắt buộc phải là « DONT »."
      },
      {
        question: "Cấu trúc nào sau đây được dùng để đưa ra lời khuyên lịch thiệp nhất?",
        options: [
          "Tu devrais faire du sport régulièrement.",
          "Tu dois faire du sport.",
          "Fais du sport immédiatement !",
          "Tu as fait du sport."
        ],
        correct: 0,
        explanation: "« Tu devrais + infinitif » sử dụng thì Conditionnel présent của động từ devoir, tạo sắc thái khuyên nhủ nhẹ nhàng, lịch thiệp và mang tính xây dựng."
      },
      {
        question: "Điền dạng đúng của động từ sau cấu trúc sans: « Elle a réussi son projet sans ______ l'aide de personne. »",
        options: ["demander", "demande", "demandé", "demandant"],
        correct: 0,
        explanation: "Sau giới từ « sans », động từ luôn luôn được để ở dạng nguyên mẫu (infinitif) ⟶ « demander »."
      }
    ]
  },

  // =========================================================================
  // UNITÉ 6: EN FAMILLE
  // =========================================================================
  {
    id: 6,
    title: "Unité 6 – En famille",
    theme: "Xin phép, quan hệ gia đình, các thế hệ và sự kiện gia đình trọng đại",
    project: "Album kỉ niệm gia đình số (L'album de famille numérique)",
    culture: "Văn hóa gia đình Pháp và cộng đồng Pháp ngữ: bữa cơm sum họp ngày Chủ nhật, lễ Giáng sinh (Noël) với cây thông và bữa ăn Réveillon truyền thống, tiệc năm mới (Jour de l'An), sự gắn kết giữa các thế hệ ông bà – cha mẹ – con cháu và các buổi họp mặt đại gia đình (la cousinade).",
    lessons: [
      {
        num: 1,
        title: "Est-ce que je peux sortir ?",
        focus: "Xin phép người lớn, đồng ý có điều kiện hoặc từ chối lịch sự",
        vocab: "Xin phép & quy tắc: demander la permission, accorder l'autorisation, refuser poliment, fixer une condition stricte, respecter les règles de la maison, rentrer avant 22 heures, faire une exception exceptionnelle, prévenir par message.",
        grammar: "Mẫu câu xin phép: « Est-ce que je peux sortir ce soir ? »; « Je voudrais bien aller chez un ami, si c'est possible. »; « Est-ce que vous me permettez de participer à cette fête ? »; « C'est possible de faire une exception ? ».\nMẫu câu cho phép: « Oui, bien sûr, vas-y ! »; « Pas de problème, mais à condition que tu rentres tôt »; « D'accord, mais préviens-nous si tu as du retard ».\nMẫu câu từ chối: « Je suis désolé(e), mais ce n'est pas possible ce soir »; « C'est hors de question, tu as un devoir important demain ».",
        communication: "« Maman, est-ce que je peux aller au cinéma avec mes camarades ce samedi ? — Oui, tu peux y aller, mais à condition que tes devoirs soient finis avant 18 heures ! »",
        phonetics: "Ngữ điệu lễ phép, mềm mỏng khi xin phép người lớn tuổi trong gia đình."
      },
      {
        num: 2,
        title: "Mon frère et ma sœur : entre disputes et complicité",
        focus: "Mối quan hệ anh chị em, vai trò thứ bậc, bất đồng và tình cảm thương yêu",
        vocab: "Anh chị em: l'aîné(e) (con cả/anh cả), le/la cadet(te) (con thứ), le/la benjamin(e) (con út), un grand frère protecteur, une petite sœur espiègle, une dispute passagère, une complicité touchante, surveiller avec bienveillance, se chamailler, s'entraider, se réconcilier rapidement.",
        grammar: "Các đại từ bổ ngữ kép trong câu mệnh lệnh khẳng định và phủ định (xem chi tiết ở Bài 4); Sử dụng thì hiện tại và quá khứ để so sánh sự thay đổi trong mối quan hệ anh em qua năm tháng.",
        communication: "« Entre mon frère et moi, il y a parfois de petites disputes pour la télévision, mais notre complicité est beaucoup plus forte. Nous nous réconcilions toujours après quelques minutes ! »",
        phonetics: "Phát âm các từ vựng chỉ thứ bậc gia đình: l'aîné [lɛne], le cadet [lə kadɛ], le benjamin [lə bɛ̃ʒamɛ̃]."
      },
      {
        num: 3,
        title: "Les relations familiales",
        focus: "Hòa thuận, mâu thuẫn thế hệ, hoạt động chung và cách giải quyết mâu thuẫn",
        vocab: "Quan hệ gia đình: s'entendre à merveille avec, avoir d'excellentes relations, être très complice avec, se disputer rarement, se mettre en colère contre, faire des reproches injustes à, punir équitablement, se réconcilier avec. Đại gia đình: les grands-parents paternels/maternels, l'oncle, la tante, le cousin/la cousine, le neveu/la nièce, les beaux-parents.",
        grammar: "Thể bị động trong tiếng Pháp (La voix passive) - Cơ chế biến đổi: Chủ ngữ câu chủ động chuyển thành tác nhân (complément d'agent) đi với giới từ « PAR » (hoặc « DE » đối với động từ chỉ cảm xúc, trạng thái như aimer, respecter, apprécier, remplir, entourer).\nĐộng từ ÊTRE được chia ở thì của câu chủ động + Phân từ quá khứ (hòa hợp giống/số với chủ ngữ mới của câu bị động).\nVí dụ:\nChủ động: Ma famille organise cette grande fête. (Hiện tại)\nBị động: Cette grande fête est organisée par ma famille.\nChủ động: On respecte les traditions. ⟶ Bị động: Les traditions sont respectées. (Nếu chủ ngữ chủ động là 'on', câu bị động không cần tác nhân par).",
        communication: "« Dans notre foyer, les tâches ménagères sont partagées équitablement par tous les membres. Les grands-parents sont aimés et respectés de tous leurs petits-enfants. »",
        phonetics: "Hòa âm và trọng âm ngữ điệu trong câu bị động tiếng Pháp."
      },
      {
        num: 4,
        title: "Les événements importants de la famille",
        focus: "Các ngày lễ kỉ niệm, nghi lễ truyền thống, tiệc gia đình và viết thư chia sẻ",
        vocab: "Sự kiện gia đình: un anniversaire mémorable, un baptême solennel, des fiançailles joyeuses, un mariage féerique, une naissance tant attendue, les noces d'or, une cousinade géante, une réunion de famille conviviale, des funérailles émouvantes, perpétuer une tradition.",
        grammar: "Trật tự hai đại từ bổ ngữ ở thể Mệnh lệnh (L'impératif avec pronoms doubles):\n(1) Mệnh lệnh KHẲNG ĐỊNH: Động từ đứng trước, nối với các đại từ bằng dấu gạch ngang. Trật tự: Động từ - [le / la / les] - [moi / toi / lui / nous / vous / leur] - [y / en]. Lưu ý: me ⟶ moi, te ⟶ toi.\nVí dụ: Montre-le-moi ! (Hãy cho tôi xem cái đó!); Donnez-la-lui !; Expliquez-le-leur !; Donnez-m'en !\n(2) Mệnh lệnh PHỦ ĐỊNH: Các đại từ đứng TRƯỚC động từ như câu bình thường, không có gạch ngang. Khung phủ định « ne… pas » bao quanh.\nVí dụ: Ne me le montre pas ! (Đừng cho tôi xem cái đó!); Ne la lui donnez pas !; Ne nous le cachez pas !",
        communication: "« Le week-end dernier, toute notre famille s'est réunie pour célébrer les 80 ans de notre grand-père. Ce fut une fête inoubliable remplie de joie et de rires ! »; « Montre-moi les photos du mariage ! — Tiens, regarde-les, elles sont magnifiques ! »",
        phonetics: "Hiện tượng lược âm e câm (e caduc) trong giao tiếp thân mật hàng ngày: « Je n'sais pas », « C'est pas grave »."
      }
    ],
    cases: [
      {
        title: "Xin phép bố mẹ đi cắm trại qua đêm cùng lớp",
        scenario: "Lớp em tổ chức chuyến dã ngoại cắm trại 2 ngày 1 đêm tại Ba Vì. Hãy viết một đoạn đối thoại xin phép bố mẹ, nêu lí do an toàn và cam kết tuân thủ quy định.",
        solution: "« Papa, Maman, est-ce que je peux vous parler quelques minutes ?\n— Oui mon chéri, qu'est-ce qui se passe ?\n— Notre classe organise une sortie de camping écologique à Ba Vì le week-end prochain. Deux professeurs principaux et un guide expérimenté nous accompagnent pour encadrer le groupe. Est-ce que vous me permettez d'y participer ?\n— C'est une excellente initiative, mais tu sais que nous sommes attentifs à ta sécurité. À quelle heure est prévu le retour dimanche ?\n— Le car nous ramènera devant le lycée à 17 heures précises. Je promets de vous envoyer un message dès notre arrivée au campement !\n— D'accord, nous te donnons la permission. Profite bien de cette expérience avec tes camarades ! »"
      },
      {
        title: "Kể về một bữa tiệc kỉ niệm ngày cưới của bố mẹ bằng thể bị động",
        scenario: "Viết một đoạn văn ngắn khoảng 50 từ mô tả lễ kỉ niệm 20 năm ngày cưới của bố mẹ, áp dụng cấu trúc câu bị động (la voix passive) ít nhất 2 lần.",
        solution: "« Dimanche dernier, les noces de porcelaine de mes parents ont été célébrées chaleureusement chez nous. Un somptueux dîner a été préparé par mon frère aîné et moi-même en secret. Le salon était magnifiquement décoré de fleurs fraîches et de photos souvenirs. Tous les invités ont été touchés par l'amour qui unit mes parents depuis vingt ans. »"
      }
    ],
    quizzes: [
      {
        question: "Chuyển câu sau sang thể bị động (voix passive): « Tous les élèves respectent le règlement intérieur. »",
        options: [
          "Le règlement intérieur est respecté par tous les élèves.",
          "Le règlement intérieur a été respecté de tous les élèves.",
          "Le règlement intérieur sont respectés par tous les élèves.",
          "Le règlement intérieur est respecter par tous les élèves."
        ],
        correct: 0,
        explanation: "Chủ ngữ mới là « Le règlement intérieur » (giống đực số ít), động từ respectent ở thì hiện tại nên être chia là « est », phân từ « respecté », tác nhân đi với « par »."
      },
      {
        question: "Chọn câu mệnh lệnh khẳng định có trật tự đại từ bổ ngữ CHÍNH XÁC:",
        options: [
          "Donne-le-moi !",
          "Donne-moi-le !",
          "Donne me le !",
          "Le-moi donne !"
        ],
        correct: 0,
        explanation: "Ở thức mệnh lệnh khẳng định, đại từ COD (le) đứng trước đại từ COI (moi), nối với nhau bằng dấu gạch ngang ⟶ « Donne-le-moi ! »."
      },
      {
        question: "Từ nào dùng để chỉ người con út trong gia đình?",
        options: [
          "Le benjamin / La benjamine",
          "L'aîné / L'aînée",
          "Le cadet / La cadette",
          "Le neveu / La nièce"
        ],
        correct: 0,
        explanation: "« L'aîné(e) » là con cả, « le/la cadet(te) » là con thứ, và « le benjamin / la benjamine » là con út."
      }
    ]
  }
];

fs.writeFileSync('scratch/tiengphap10_data.js', 'module.exports = ' + JSON.stringify({ unite0, unites }, null, 2) + ';\n', 'utf8');
console.log('Generated scratch/tiengphap10_data.js successfully!');
