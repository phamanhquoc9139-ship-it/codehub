const fs = require('fs');
const path = require('path');

const grammarTable = [
  {
    stt: 1,
    topic: "Pronoms relatifs QUI et QUE",
    unite: "Unité 1",
    rule: "QUI làm chủ ngữ của mệnh đề quan hệ (theo sau là động từ). QUE làm tân ngữ trực tiếp (theo sau là chủ ngữ + động từ, đổi thành QU' trước nguyên âm).",
    formula: "S + V + N + QUI + V... | S + V + N + QUE + S + V...",
    example: "J'aime la robe QUI est élégante. / Voilà la veste QU'il a achetée hier."
  },
  {
    stt: 2,
    topic: "Pronoms personnels COD và COI",
    unite: "Unité 1",
    rule: "COD (le, la, l', les) thay thế tân ngữ trực tiếp không có giới từ. COI (lui, leur) thay thế tân ngữ gián tiếp đi với giới từ À chỉ người.",
    formula: "Sujet + (ne) + [me/te/se/nous/vous] + [le/la/les] + [lui/leur] + Verbe",
    example: "Tu aimes ce pantalon ? — Oui, je LE prends. / Tu écris à tes parents ? — Oui, je LUI écris."
  },
  {
    stt: 3,
    topic: "Verbes modaux: Devoir, Falloir, Pouvoir",
    unite: "Unité 2",
    rule: "Diễn đạt bổn phận, sự cần thiết bắt buộc và khả năng/sự cho phép. Falloir chỉ dùng ở ngôi thứ ba số ít vô nhân xưng (Il faut).",
    formula: "Il faut + V-inf / Devoir + V-inf / Pouvoir + V-inf",
    example: "Il faut éteindre son portable en cours. / Les élèves doivent respecter le règlement intérieur."
  },
  {
    stt: 4,
    topic: "L'expression de la cause et de la conséquence",
    unite: "Unité 2",
    rule: "Cause: Parce que (giữa câu), Comme (đầu câu), Grâce à (+ kết quả tích cực), À cause de (+ kết quả tiêu cực). Conséquence: Donc, C'est pourquoi, Alors.",
    formula: "Grâce à + Nom (positif) | À cause de + Nom (négatif) | Cause -> Donc -> Conséquence",
    example: "Grâce à ses efforts, elle a réussi. / Il est en retard à cause des embouteillages."
  },
  {
    stt: 5,
    topic: "Passé Composé vs Imparfait",
    unite: "Unité 3",
    rule: "Passé composé dùng cho hành động cụ thể đã hoàn tất, có mốc thời gian rõ ràng. Imparfait dùng cho miêu tả bối cảnh, hoàn cảnh, thời tiết hoặc thói quen lặp lại trong quá khứ.",
    formula: "Avoir/Être au présent + Participe passé (PC) vs Radical de nous + -ais, -ais, -ait, -ions, -iez, -aient (IMP)",
    example: "Hier, quand je MARCHAIS (IMP bối cảnh) dans la rue, un chat A TRAVERSÉ (PC biến cố) la route."
  },
  {
    stt: 6,
    topic: "Accord du participe passé với AVOIR",
    unite: "Unité 3",
    rule: "Với trợ động từ AVOIR, quá khứ phân từ không hợp với chủ ngữ mà chỉ hợp giống và số với tân ngữ trực tiếp (COD) khi COD đứng trước động từ.",
    formula: "COD (đứng trước) + AVOIR + Participe passé (hợp giống/số với COD)",
    example: "Les photos qu'il a PRISES sont superbes. (photos là giống cái số nhiều -> thêm -es)."
  },
  {
    stt: 7,
    topic: "Pronom Y (Lieu et Chose avec À)",
    unite: "Unité 4",
    rule: "Thay thế trạng từ/cụm từ chỉ nơi chốn đi với giới từ à, en, dans, chez, sur... hoặc thay thế cụm [à + danh từ chỉ vật/việc].",
    formula: "Sujet + (ne) + Y + Verbe",
    example: "Tu vas à la bibliothèque ? — Oui, j'Y vais tout de suite. / Tu penses à ton avenir ? — Oui, j'Y pense souvent."
  },
  {
    stt: 8,
    topic: "Pronom EN (Quantité et Complément avec DE)",
    unite: "Unité 4",
    rule: "Thay thế danh từ đi với quán từ bộ phận (du, de la, des), số từ (un, deux...), phó từ chỉ số lượng (beaucoup de...) hoặc bổ ngữ đi với giới từ DE.",
    formula: "Sujet + (ne) + EN + Verbe + (nombre/quantité)",
    example: "Tu as des frères ? — Oui, j'EN ai deux. / Tu as besoin de repos ? — Oui, j'EN ai besoin."
  },
  {
    stt: 9,
    topic: "Le Futur Simple",
    unite: "Unité 4",
    rule: "Diễn tả hành động sẽ xảy ra trong tương lai hoặc dự báo, lời hứa. Cấu tạo từ động từ nguyên mẫu (bỏ -e với đuôi -re) cộng đuôi -ai, -as, -a, -ons, -ez, -ont.",
    formula: "Infinitif + -ai, -as, -a, -ons, -ez, -ont (Bất quy tắc: être -> ser-, avoir -> aur-, aller -> ir-, faire -> fer-)",
    example: "Demain, nous PARTIRONS en voyage au Canada et nous VISITERONS Montréal."
  },
  {
    stt: 10,
    topic: "Pronom relatif DONT",
    unite: "Unité 5",
    rule: "Thay thế danh từ làm bổ ngữ đi với giới từ DE trong mệnh đề phụ quan hệ (chỉ quan hệ sở hữu, động từ đi với de, hoặc tính từ đi với de).",
    formula: "Nom + DONT + Sujet + Verbe (qui se construit avec DE)",
    example: "C'est le roman DONT j'ai oublié le titre. (oublier le titre DE ce roman) / L'ami DONT je te parle."
  },
  {
    stt: 11,
    topic: "Le Comparatif et le Superlatif",
    unite: "Unité 5",
    rule: "So sánh tính từ: plus/aussi/moins + Adjectif + que. So sánh danh từ: plus/autant/moins DE + Nom + que. So sánh cao nhất: le/la/les plus + Adjectif. Bất quy tắc: bon -> meilleur, bien -> mieux.",
    formula: "plus / aussi / moins + Adj + que | le / la / les plus + Adj | bon -> meilleur, bien -> mieux",
    example: "Ce film est PLUS captivant QUE le précédent. C'est LE MEILLEUR film de l'année."
  },
  {
    stt: 12,
    topic: "La Voix Passive et le Discours Indirect",
    unite: "Unité 6",
    rule: "Thể bị động: Être (chia theo thì) + Participe passé (hợp giống/số) + PAR/DE. Câu gián tiếp: Verbe + que / si / de + V-inf.",
    formula: "Voix passive: S (patient) + ÊTRE + P.P (accordé) + PAR + Agent | Indirect: Il dit QUE... / Il demande SI...",
    example: "Ce gâteau traditionnel est préparé PAR ma mère. / Elle me dit QU'elle viendra ce soir."
  }
];

const communicationTable = [
  { stt: 1, fn: "Demander et donner une opinion sur un vêtement", phrase: "Qu'est-ce que tu penses de ce blouson ? — Ça te va à ravir, c'est très élégant !" },
  { stt: 2, fn: "Acheter et demander le prix en boutique", phrase: "Combien coûte cette robe en lin ? — Elle fait 45 euros, monsieur." },
  { stt: 3, fn: "Exprimer l'obligation scolaire", phrase: "Il est obligatoire d'arriver à l'heure et d'avoir son carnet de correspondance." },
  { stt: 4, fn: "Exprimer l'interdiction", phrase: "Il est strictement interdit d'utiliser son téléphone pendant les cours." },
  { stt: 5, fn: "Exprimer la cause", phrase: "Elle a manqué le cours parce qu'elle était malade / en raison d'une panne de réveil." },
  { stt: 6, fn: "Exprimer la conséquence", phrase: "Il n'a pas révisé la veille, par conséquent il a eu de mauvaises notes." },
  { stt: 7, fn: "Raconter un fait divers au passé", phrase: "Hier matin, vers 8 heures, un camion a percuté un feu tricolore au carrefour." },
  { stt: 8, fn: "Exprimer le doute et la méfiance face aux fake news", phrase: "Je doute de la fiabilité de cet article, il faut vérifier les sources officielles." },
  { stt: 9, fn: "Présenter ses projets de vacances", phrase: "L'été prochain, nous irons explorer les parcs nationaux du Québec au Canada." },
  { stt: 10, fn: "Demander et indiquer la direction", phrase: "Pour aller à la gare centrale, continuez tout droit puis tournez à droite après le pont." },
  { stt: 11, fn: "Exprimer une quantité précise ou indéterminée", phrase: "Je voudrais un demi-kilo de pommes et un litre de jus d'orange, s'il vous plaît." },
  { stt: 12, fn: "Décrire un monument ou paysage francophone", phrase: "Le Château Frontenac est un monument majestueux qui domine le fleuve Saint-Laurent." },
  { stt: 13, fn: "Recommander une œuvre artistique / un film", phrase: "Je vous recommande vivement ce film, c'est un véritable chef-d'œuvre à ne pas rater !" },
  { stt: 14, fn: "Exprimer des goûts et passions personnelles", phrase: "Je me passionne pour la photographie urbaine et la guitare classique." },
  { stt: 15, fn: "Faire une comparaison valorisante", phrase: "Le théâtre antique d'Arles est bien mieux conservé que celui de notre ville." },
  { stt: 16, fn: "Proposer son aide ou ses services", phrase: "Est-ce que je peux t'aider à ranger la cuisine ou à préparer le dîner ?" },
  { stt: 17, fn: "Parler des liens familiaux intergénérationnels", phrase: "Mes grands-parents nous transmettent des récits précieux sur notre histoire familiale." },
  { stt: 18, fn: "Exprimer un désaccord poli", phrase: "Je comprends ton point de vue, mais je ne partage pas tout à fait ton avis sur ce sujet." },
  { stt: 19, fn: "Rapporter les paroles de quelqu'un", phrase: "Le professeur nous a rappelé de rendre le projet de groupe avant vendredi midi." }
];

const mistakesAndTips = [
  {
    title: "1. Nhầm lẫn giữa đại từ quan hệ QUI và QUE",
    mistake: "Le livre que est sur la table... (SAI)",
    correct: "Le livre QUI est sur la table... (ĐÚNG)",
    tip: "Nhớ quy tắc vàng: QUI + Verbe (QUI làm chủ ngữ); QUE + Sujet + Verbe (QUE làm tân ngữ COD). Không bao giờ dùng QUE trực tiếp trước động từ!"
  },
  {
    title: "2. Quên hợp giống số quá khứ phân từ khi COD đứng trước AVOIR",
    mistake: "Les pommes que j'ai acheté... (SAI)",
    correct: "Les pommes que j'ai ACHETÉES... (ĐÚNG)",
    tip: "Khi dùng trợ động từ AVOIR, nếu tân ngữ trực tiếp (ở đây là que thay thế les pommes - giống cái số nhiều) đứng trước động từ, quá khứ phân từ bắt buộc phải hợp giống và số (-ées)."
  },
  {
    title: "3. Nhầm lẫn À CAUSE DE và GRÂÃCE À khi chỉ nguyên nhân",
    mistake: "J'ai réussi mon bac à cause de mon professeur. (SAI ngữ nghĩa)",
    correct: "J'ai réussi mon bac GRÂCE À mon professeur. (ĐÚNG)",
    tip: "GRÂCE À mang nghĩa tích cực (nhờ vào, nhờ có). À CAUSE DE mang nghĩa tiêu cực hoặc trung tính (do, tại vì, vì lí do xấu gây cản trở)."
  },
  {
    title: "4. Đặt sai vị trí của đại từ Y và EN",
    mistake: "Je vais y demain. / J'en veux pas. (Văn nói không trang trọng)",
    correct: "J'y vais demain. / Je n'en veux pas. (ĐÚNG chuẩn mực)",
    tip: "Trong câu đơn thì hiện tại, đại từ thay thế Y và EN luôn đứng TRƯỚC động từ chia. Trong câu phủ định: Sujet + ne + pronom + verbe + pas."
  },
  {
    title: "5. Nhầm lẫn đại từ quan hệ DONT với OÙ",
    mistake: "La ville dont je suis né... (SAI)",
    correct: "La ville OÙ je suis né... (ĐÚNG)",
    tip: "OÙ chỉ nơi chốn hoặc thời gian (nơi mà, lúc mà). DONT chỉ bổ ngữ đi với giới từ DE (avoir besoin de, parler de, rêver de...). Ta nói 'naître dans une ville' chứ không phải 'naître de'."
  },
  {
    title: "6. Quên biến đổi động từ ÊTRE trong câu bị động",
    mistake: "Le pont a construit en 1900. (SAI - Nghĩa là cây cầu tự xây)",
    correct: "Le pont A ÉTÉ CONSTRUIT en 1900. (ĐÚNG bị động)",
    tip: "Thể bị động bắt buộc phải có trợ động từ ÊTRE chia theo đúng thì của câu chủ động (passé composé -> a été + P.P; présent -> est + P.P; futur -> sera + P.P)."
  },
  {
    title: "7. Phân biệt C'EST và IL EST khi miêu tả tính chất",
    mistake: "C'est médecin. / Il est un bon livre. (SAI)",
    correct: "Il est médecin. / C'est un bon livre. (ĐÚNG)",
    tip: "C'EST đi với mạo từ + danh từ (C'est un professeur) hoặc nhận xét chung (C'est beau). IL EST đi trực tiếp với danh từ chỉ nghề nghiệp không có mạo từ (Il est professeur) hoặc tính từ cụ thể."
  },
  {
    title: "8. Nhầm lẫn so sánh BON / MEILLEUR và BIEN / MIEUX",
    mistake: "Il parle plus bien français. / Ce gâteau est plus bon. (SAI)",
    correct: "Il parle MIEUX français. / Ce gâteau est MEILLEUR. (ĐÚNG)",
    tip: "BON là tính từ, dạng so sánh hơn là MEILLEUR(E)(S). BIEN là phó từ, dạng so sánh hơn là MIEUX. Tuyệt đối không dùng 'plus bon' hay 'plus bien' trong tiếng Pháp chuẩn!"
  }
];

const arenaQuestions = [
  {
    q: "Câu 1: Chọn đại từ quan hệ thích hợp: 'Voilà le nouveau professeur _____ nous enseigne la littérature cette année.'",
    options: ["A. que", "B. qui", "C. dont", "D. où"],
    correct: 1,
    explain: "Sau đại từ là động từ 'nous enseigne' (chủ ngữ còn thiếu), nên ta dùng đại từ quan hệ QUI làm chủ ngữ."
  },
  {
    q: "Câu 2: Dạng đúng của quá khứ phân từ trong câu: 'Voici les superbes photos que ma sœur a _____ pendant son séjour à Paris.'",
    options: ["A. pris", "B. prise", "C. prises", "D. prient"],
    correct: 2,
    explain: "Mệnh đề có tân ngữ trực tiếp (COD) là 'que' thay thế 'les superbes photos' (giống cái số nhiều) đứng trước động từ có trợ động từ AVOIR, nên quá khứ phân từ hợp giống số thành 'prises'."
  },
  {
    q: "Câu 3: Chọn liên từ nguyên nhân thích hợp: 'Les élèves sont arrivés en retard _____ une panne d'électricité dans le métro.'",
    options: ["A. grâce à", "B. à cause d'", "C. parce que", "D. comme"],
    correct: 1,
    explain: "Sự cố mất điện là nguyên nhân tiêu cực và theo sau là cụm danh từ 'une panne', do đó ta dùng 'à cause d''."
  },
  {
    q: "Câu 4: Chọn câu trả lời đúng với đại từ Y: 'Est-ce que tu penses souvent à tes prochains examens ?'",
    options: ["A. Oui, j'en pense souvent.", "B. Oui, je les pense souvent.", "C. Oui, j'y pense souvent.", "D. Oui, je lui pense souvent."],
    correct: 2,
    explain: "Cụm 'penser à quelque chose' (nghĩ về điều gì) được thay thế bằng đại từ Y: 'Oui, j'y pense souvent'."
  },
  {
    q: "Câu 5: Chọn câu trả lời đúng với đại từ EN: 'Combien de stylos as-tu dans ta trousse ?'",
    options: ["A. J'y ai trois.", "B. Je les ai trois.", "C. J'en ai trois.", "D. Je lui ai trois."],
    correct: 2,
    explain: "Khi trả lời về số lượng kèm số từ (trois stylos), danh từ được thay thế bằng đại từ EN: 'J'en ai trois'."
  },
  {
    q: "Câu 6: Chia động từ trong ngoặc ở thì Futur Simple: 'L'année prochaine, nous (partir) _____ en colonie de vacances.'",
    options: ["A. partirons", "B. partons", "C. partirions", "D. sommes partis"],
    correct: 0,
    explain: "Chủ ngữ 'nous' với động từ nhóm 2 'partir' ở thì tương lai đơn có đuôi là -ons -> 'partirons'."
  },
  {
    q: "Câu 7: Chọn đại từ quan hệ thích hợp: 'Le musée du Louvre est l'endroit _____ j'ai vu la célèbre Joconde.'",
    options: ["A. dont", "B. qui", "C. que", "D. où"],
    correct: 3,
    explain: "'L'endroit' là danh từ chỉ địa điểm, nơi hành động diễn ra nên dùng đại từ quan hệ OÙ."
  },
  {
    q: "Câu 8: Chọn đại từ quan hệ thích hợp: 'C'est un film d'aventure extraordinaire _____ tout le monde parle actuellement.'",
    options: ["A. que", "B. dont", "C. qui", "D. lequel"],
    correct: 1,
    explain: "Động từ 'parler de' đi với giới từ DE, nên dùng đại từ quan hệ DONT để thay thế: 'parler de ce film' -> 'le film dont tout le monde parle'."
  },
  {
    q: "Câu 9: Điền từ so sánh đúng: 'Ce coureur s'entraîne beaucoup, il court _____ vite que son rival.'",
    options: ["A. plus", "B. le plus", "C. meilleur", "D. bon"],
    correct: 0,
    explain: "'Vite' là phó từ, so sánh hơn là 'plus vite que' (chạy nhanh hơn)."
  },
  {
    q: "Câu 10: Chuyển sang câu bị động: 'Gustave Eiffel a conçu cette tour en 1889.'",
    options: [
      "A. Cette tour est conçue par Gustave Eiffel en 1889.",
      "B. Cette tour a été conçue par Gustave Eiffel en 1889.",
      "C. Cette tour sera conçue par Gustave Eiffel en 1889.",
      "D. Cette tour avait conçu par Gustave Eiffel en 1889."
    ],
    correct: 1,
    explain: "Câu chủ động ở thì Passé Composé ('a conçu'), nên câu bị động phải dùng trợ động từ ÊTRE ở Passé Composé ('a été') kết hợp quá khứ phân từ hợp giống cái ('conçue') + 'par Gustave Eiffel'."
  },
  {
    q: "Câu 11: Chuyển sang câu gián tiếp: Le père dit à son fils : 'Fais attention à la circulation !'",
    options: [
      "A. Le père dit à son fils qu'il fait attention à la circulation.",
      "B. Le père dit à son fils de faire attention à la circulation.",
      "C. Le père dit à son fils s'il fait attention à la circulation.",
      "D. Le père dit à son fils pour faire attention à la circulation."
    ],
    correct: 1,
    explain: "Câu mệnh lệnh trực tiếp ('Fais attention') chuyển sang gián tiếp bằng cấu trúc: Verbe + de + V-inf ('de faire attention')."
  },
  {
    q: "Câu 12: Phân biệt thì quá khứ: 'Quand nous _____ jeunes, nous _____ souvent nos grands-parents à la campagne.'",
    options: [
      "A. étions / visitions",
      "B. avons été / avons visité",
      "C. étions / avons visité",
      "D. serons / visiterons"
    ],
    correct: 0,
    explain: "Cả hai vế đều diễn tả trạng thái trong quá khứ kéo dài ('quand nous étions jeunes') và thói quen lặp lại ('souvent') nên chia ở thì Imparfait."
  },
  {
    q: "Câu 13: Điền mạo từ hoặc tính từ chỉ định: 'Ce pantalon en velours me plaît, mais je préfère _____ robe en soie.'",
    options: ["A. cette", "B. cet", "C. ce", "D. ces"],
    correct: 0,
    explain: "'Robe' là danh từ giống cái số ít bắt đầu bằng phụ âm nên dùng tính từ chỉ định 'cette'."
  },
  {
    q: "Câu 14: Thành ngữ hoặc mẫu câu nào dùng để khuyên nhủ học sinh trong nội quy nhà trường?",
    options: [
      "A. Il est interdit de porter l'uniforme.",
      "B. Il est obligatoire de respecter les horaires de cours.",
      "C. Ça te va comme un gant.",
      "D. Je n'en sais rien du tout."
    ],
    correct: 1,
    explain: "'Il est obligatoire de respecter les horaires de cours' (Bắt buộc phải tuân thủ giờ học) là quy định chuẩn mực trong trường học."
  },
  {
    q: "Câu 15: Từ nào sau đây là từ đồng nghĩa hoặc giải thích đúng cho 'Fait divers' trong báo chí?",
    options: [
      "A. Un article de mode haut de gamme",
      "B. Un événement insolite ou accidentel de la vie quotidienne",
      "C. Une critique gastronomique de restaurant",
      "D. Un poème classique du 19ème siècle"
    ],
    correct: 1,
    explain: "'Fait divers' trong báo chí tiếng Pháp là mục tin vặt, phản ánh các sự kiện bất ngờ, tai nạn hoặc biến cố đời thường."
  },
  {
    q: "Câu 16: Chọn hình thức so sánh đúng của tính từ 'bon': 'La tarte de grand-mère est _____ que celle du supermarché.'",
    options: ["A. plus bonne", "B. meilleure", "C. mieux", "D. aussi bon"],
    correct: 1,
    explain: "'Tarte' là danh từ giống cái, tính từ 'bon' có so sánh hơn bất quy tắc là 'meilleure' (tuyệt đối không dùng 'plus bonne')."
  },
  {
    q: "Câu 17: Chọn câu có cấu trúc phủ định kết hợp đại từ đúng nhất:",
    options: [
      "A. Je ne lui en ai pas parlé.",
      "B. Je n'en lui ai pas parlé.",
      "C. Je lui en ai parlé pas.",
      "D. Ne je lui en ai pas parlé."
    ],
    correct: 0,
    explain: "Thứ tự đại từ đứng trước trợ động từ: LUI đứng trước EN. Cấu trúc phủ định chuẩn: 'ne + lui + en + ai + pas + parlé'."
  },
  {
    q: "Câu 18: Tỉnh bang nào ở Canada sử dụng tiếng Pháp là ngôn ngữ chính thức duy nhất?",
    options: ["A. L'Ontario", "B. La Colombie-Britannique", "C. Le Québec", "D. L'Alberta"],
    correct: 2,
    explain: "Québec là tỉnh bang có cộng đồng Pháp ngữ lớn nhất Canada với tiếng Pháp là ngôn ngữ chính thức duy nhất theo Hiến chương tiếng Pháp."
  },
  {
    q: "Câu 19: Chọn câu trả lời thích hợp khi muốn đưa ra lời khen ngợi chân thành về bộ trang phục của bạn mình:",
    options: [
      "A. C'est hors de prix pour toi.",
      "B. Cette couleur met vraiment en valeur tes yeux !",
      "C. Il faut jeter ce vêtement tout de suite.",
      "D. Je doute que ce soit une bonne idée."
    ],
    correct: 1,
    explain: "'Cette couleur met vraiment en valeur tes yeux !' (Màu này thực sự làm nổi bật đôi mắt của bạn) là lời khen ngợi thời trang khéo léo và tự nhiên."
  },
  {
    q: "Câu 20: Điền dạng đúng của động từ: 'S'il fait beau ce week-end, nous _____ un pique-nique au bord du lac.'",
    options: ["A. ferons", "B. fassions", "C. ferions", "D. faisons"],
    correct: 0,
    explain: "Cấu trúc giả định điều kiện có thể xảy ra: Si + Présent ('s'il fait beau'), mệnh đề chính chia ở Futur Simple ('nous ferons')."
  }
];

const outObj = {
  grammarTable,
  communicationTable,
  mistakesAndTips,
  arenaQuestions
};

fs.writeFileSync(path.join(__dirname, 'tiengphap10_review_arena.json'), JSON.stringify(outObj, null, 2), 'utf8');
console.log('Saved review and arena data to scratch/tiengphap10_review_arena.json');
