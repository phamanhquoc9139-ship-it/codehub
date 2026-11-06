// tiengphap8_data_p2.js
// Dữ liệu Tiếng Pháp 8 - Phần 2: Unité 4, Unité 5, Unité 6 & Bảng tổng hợp Ngữ pháp, Động từ
// Bộ sách Kết nối tri thức với cuộc sống (GDPT 2018)

const unitesPart2 = [
  // UNITÉ 4: MANGE BIEN !
  {
    id: "unite-4",
    uniteNum: 4,
    title: "Unité 4 — Mange bien !",
    subtitle: "Ẩm thực tinh hoa & Thói quen ăn uống lành mạnh",
    theme: "Chế độ ăn, gọi món nhà hàng, công thức nấu ăn và phép lịch sự trên bàn ăn",
    badge: "Ẩm thực & Bán trợ động từ",
    goal: "Nói về các bữa ăn và thói quen dinh dưỡng; sử dụng các bán trợ động từ (semi-auxiliaires); thực hành gọi món lịch sự tại nhà hàng; đọc hiểu và viết công thức nấu ăn bằng thể mệnh lệnh; sử dụng tính từ và đại từ bất định.",
    lecons: [
      {
        num: "1",
        title: "Qu'est-ce que tu manges ?",
        focus: "Bữa ăn hằng ngày & Bán trợ động từ (Semi-auxiliaires)",
        vocab: [
          { fr: "le petit-déjeuner", ipa: "/pə.ti de.ʒœ.ne/", type: "n.m.", vn: "Bữa ăn sáng" },
          { fr: "le déjeuner", ipa: "/de.ʒœ.ne/", type: "n.m.", vn: "Bữa ăn trưa" },
          { fr: "le dîner", ipa: "/di.ne/", type: "n.m.", vn: "Bữa ăn tối" },
          { fr: "le goûter", ipa: "/ɡu.te/", type: "n.m.", vn: "Bữa ăn nhẹ xế chiều (khoảng 16h)" },
          { fr: "la tartine de beurre", ipa: "/taʁ.tin də bœʁ/", type: "n.f.", vn: "Lát bánh mì phết bơ" },
          { fr: "la confiture de fraises", ipa: "/kɔ̃.fi.tyʁ də fʁɛz/", type: "n.f.", vn: "Mứt dâu tây" },
          { fr: "commencer à (+ inf.)", ipa: "/kɔ.mɑ̃.se a/", type: "v.", vn: "Bắt đầu làm việc gì" },
          { fr: "être en train de (+ inf.)", ipa: "/ɛtʁ ɑ̃ tʁɛ̃ də/", type: "loc.v.", vn: "Đang làm gì ngay lúc nói" },
          { fr: "venir de (+ inf.)", ipa: "/və.niʁ də/", type: "v.", vn: "Vừa mới làm xong việc gì" },
          { fr: "aller (+ inf.)", ipa: "/a.le/", type: "v.", vn: "Sắp sửa làm gì (futur proche)" }
        ]
      },
      {
        num: "2",
        title: "Bonjour et bienvenue au restaurant !",
        focus: "Gọi món & Yêu cầu lịch sự (Demande polie)",
        vocab: [
          { fr: "l'entrée", ipa: "/ɑ̃.tʁe/", type: "n.f.", vn: "Món khai vị đầu bữa" },
          { fr: "le plat principal", ipa: "/pla pʁɛ̃.si.pal/", type: "n.m.", vn: "Món ăn chính" },
          { fr: "le dessert", ipa: "/de.sɛʁ/", type: "n.m.", vn: "Món tráng miệng cuối bữa" },
          { fr: "la boisson", ipa: "/bwa.sɔ̃/", type: "n.f.", vn: "Đồ uống, nước giải khát" },
          { fr: "l'addition", ipa: "/a.di.sjɔ̃/", type: "n.f.", vn: "Hóa đơn tính tiền" },
          { fr: "Je voudrais...", ipa: "/ʒə vu.dʁɛ/", type: "loc.", vn: "Tôi muốn xin món... (lịch sự)" },
          { fr: "Pourriez-vous... ?", ipa: "/pu.ʁje vu/", type: "loc.", vn: "Bạn/Ông có thể vui lòng... được không?" },
          { fr: "s'il vous plaît", ipa: "/s‿il vu plɛ/", type: "loc.", vn: "Làm ơn, xin vui lòng" }
        ]
      },
      {
        num: "3",
        title: "Crêpes magiques !",
        focus: "Công thức nấu ăn & Câu mệnh lệnh (Impératif)",
        vocab: [
          { fr: "les crêpes", ipa: "/kʁɛp/", type: "n.f.pl.", vn: "Bánh kếp truyền thống Pháp" },
          { fr: "la farine de blé", ipa: "/fa.ʁin də ble/", type: "n.f.", vn: "Bột mì" },
          { fr: "les œufs", ipa: "/z‿ø/", type: "n.m.pl.", vn: "Trứng gà" },
          { fr: "le saladier", ipa: "/sa.la.dje/", type: "n.m.", vn: "Tô/bát trộn lớn" },
          { fr: "le fouet", ipa: "/fwɛ/", type: "n.m.", vn: "Cây đánh trứng, dụng cụ đánh bột" },
          { fr: "la poêle", ipa: "/pwal/", type: "n.f.", vn: "Chảo rán" },
          { fr: "mélanger", ipa: "/me.lɑ̃.ʒe/", type: "v.", vn: "Trộn đều, khuấy đều" },
          { fr: "verser", ipa: "/vɛʁ.se/", type: "v.", vn: "Rót vào, đổ vào" },
          { fr: "ajouter", ipa: "/a.ʒu.te/", type: "v.", vn: "Thêm vào, cho thêm" },
          { fr: "faire cuire", ipa: "/fɛʁ kɥiʁ/", type: "loc.v.", vn: "Nấu chín, rán chín" }
        ]
      },
      {
        num: "4",
        title: "L'art de la table",
        focus: "Tính từ & Đại từ bất định (Indéfinis)",
        vocab: [
          { fr: "l'art de la table", ipa: "/aʁ də la tabl/", type: "n.m.", vn: "Nghệ thuật bài trí bàn ăn Pháp" },
          { fr: "chaque (+ nom)", ipa: "/ʃak/", type: "adj.indéf.", vn: "Mỗi, từng (đi với danh từ)" },
          { fr: "chacun / chacune", ipa: "/ʃa.kœ̃, -yn/", type: "pron.indéf.", vn: "Mỗi người, từng người một" },
          { fr: "plusieurs", ipa: "/ply.zjœʁ/", type: "adj./pron.", vn: "Nhiều, một số" },
          { fr: "quelques (+ nom)", ipa: "/kɛl.kə/", type: "adj.indéf.", vn: "Vài, một vài" },
          { fr: "tout / tous / toute / toutes", ipa: "/tu, tus, tut/", type: "adj./pron.", vn: "Tất cả, toàn bộ" },
          { fr: "aucun / aucune", ipa: "/o.kœ̃, -yn/", type: "adj./pron.", vn: "Không một ai / Không một cái nào" },
          { fr: "les couverts", ipa: "/ku.vɛʁ/", type: "n.m.pl.", vn: "Bộ dao, thìa, dĩa ăn" }
        ]
      }
    ],
    grammar: {
      title: "1. Bán trợ động từ (Semi-auxiliaires) / 2. Gọi món lịch sự / 3. Mệnh lệnh thức & Từ bất định",
      formula: "① Bán trợ động từ (Semi-auxiliaires + Verbe à l'infinitif):\n- Venir de + inf.: Vừa mới làm xong (Je viens de finir mon déjeuner)\n- Être en train de + inf.: Đang làm ngay lúc nói (Nous sommes en train de préparer le repas)\n- Aller + inf.: Sắp làm gì (Je vais manger une pomme)\n- Commencer à + inf.: Bắt đầu làm (Il commence à cuisiner)\n\n② Gọi món lịch sự:\n- Je voudrais / On voudrait + Nom / Infinitif\n- Pourriez-vous m'apporter... s'il vous plaît ?\n- Nom + au / à la / aux + ingrédient (vị chính): crêpe au chocolat, canard à l'orange\n- Nom + de + ingrédient (nguyên liệu làm nên): salade de légumes, jus de pomme\n\n③ Từ bất định (Indéfinis):\n- Tính từ (trước danh từ): chaque élève, plusieurs plats, quelques fruits\n- Đại từ (độc lập): Chacun a son assiette. Tous aiment les crêpes.",
      usage: "Bán trợ động từ diễn tả sắc thái thời gian hành động rất chính xác. Gọi món lịch sự sử dụng thì điều kiện (conditionnel) của vouloir và pouvoir để thể hiện sự tao nhã trong giao tiếp.",
      examples: [
        "Attends un peu, je suis en train de faire cuire les crêpes.(Đợi một chút, tớ đang rán bánh kếp đây.)",
        "Bonjour monsieur, je voudrais une quiche lorraine et de l'eau minérale, s'il vous plaît.(Kính chào ông, tôi xin gọi một phần bánh quiche lorraine và nước khoáng ạ.)",
        "Pour faire la pâte, versez d'abord la farine, puis ajoutez les œufs.(Để làm bột bánh, đầu tiên hãy rót bột mì, sau đó thêm trứng vào.)",
        "Chaque pays a ses spécialités, et chacun est fier de sa cuisine.(Mỗi quốc gia đều có đặc sản riêng, và mỗi người đều tự hào về ẩm thực của mình.)"
      ]
    },
    dialogue: {
      situation: "Học sinh thực hành gọi món tại một nhà hàng truyền thống của Pháp",
      lines: [
        { spk: "Serveur", text: "Bonjour ! Vous avez choisi ? Que désirez-vous comme entrée ?" },
        { spk: "Lucas", text: "Bonjour ! Je voudrais une salade de légumes comme entrée, s'il vous plaît." },
        { spk: "Serveur", text: "Très bien. Et comme plat principal ?" },
        { spk: "Lucas", text: "Pourriez-vous me servir un poulet rôti avec des pommes de terre ?" },
        { spk: "Serveur", text: "Parfait. Et comme dessert ?" },
        { spk: "Lucas", text: "Une tarte au citron, s'il vous plaît. Merci !" }
      ]
    },
    culture: "Bữa ăn truyền thống của người Pháp (Le repas gastronomique des Français) được UNESCO công nhận là Di sản văn hóa phi vật thể của nhân loại. Bữa ăn gồm đủ các bước: Khai vị (Entrée) -> Món chính (Plat principal) -> Phô mai (Fromage) -> Tráng miệng (Dessert). So sánh nét đẹp quây quần trong mâm cơm gia đình Việt Nam.",
    projet: "Sondage sur les habitudes alimentaires: Khảo sát thói quen ăn uống của các bạn trong lớp (bữa ăn sáng, món ăn vặt yêu thích, loại đồ uống, tần suất ăn rau xanh) và tổng hợp kết quả thành biểu đồ.",
    quiz: [
      {
        q: "Chọn câu diễn đạt hành động 'vừa mới ăn trưa xong':",
        options: [
          "A. Je vais déjeuner.",
          "B. Je suis en train de déjeuner.",
          "C. Je viens de déjeuner.",
          "D. Je commence à déjeuner."
        ],
        a: 2,
        exp: "Cấu trúc vừa mới làm xong việc gì: Venir de + infinitif -> Je viens de déjeuner."
      },
      {
        q: "Điền dạng đúng của từ bất định: '(____) élève doit apporter un tablier pour la cuisine.'",
        options: ["A. Chacun", "B. Chaque", "C. Tous", "D. Plusieurs"],
        a: 1,
        exp: "'Chaque' là tính từ bất định đi trực tiếp trước danh từ số ít (Chaque élève); 'Chacun' là đại từ đứng một mình."
      }
    ]
  },

  // UNITÉ 5: L’ART NOUS REND HEUREUX
  {
    id: "unite-5",
    uniteNum: 5,
    title: "Unité 5 — L’art nous rend heureux",
    subtitle: "Nghệ thuật lan tỏa hạnh phúc & Đam mê sáng tạo",
    theme: "Các loại hình nghệ thuật, bày tỏ quan điểm cá nhân, liên từ thời gian dès và avant / après",
    badge: "Nghệ thuật & Mốc thời gian",
    goal: "Nói về các loại hình nghệ thuật và đam mê sáng tạo; hỏi và đưa ra quan điểm cá nhân; thể hiện sự đồng tình hay phản đối; sử dụng các cấu trúc chỉ thời gian dès / dès que và avant / avant de / après.",
    lecons: [
      {
        num: "1",
        title: "Comment trouvez-vous ces graffitis ?",
        focus: "Hỏi & Bày tỏ ý kiến; Đồng tình (Moi aussi / Moi non plus)",
        vocab: [
          { fr: "le graffiti / l'art de la rue", ipa: "/ɡʁa.fi.ti, aʁ də la ʁy/", type: "n.m.", vn: "Tranh tường graffiti, nghệ thuật đường phố" },
          { fr: "la fresque murale", ipa: "/fʁɛsk my.ʁal/", type: "n.f.", vn: "Bức tranh bích họa khổ lớn trên tường" },
          { fr: "Qu'est-ce que tu en penses ?", ipa: "/k‿ɛs kə ty ɑ̃ pɑ̃s/", type: "loc.", vn: "Bạn nghĩ sao về điều đó?" },
          { fr: "Comment tu trouves... ?", ipa: "/kɔ.mɑ̃ ty tʁuv/", type: "loc.", vn: "Bạn thấy... như thế nào?" },
          { fr: "Moi aussi", ipa: "/mwa o.si/", type: "loc.", vn: "Tôi cũng vậy (đồng tình với câu khẳng định)" },
          { fr: "Moi non plus", ipa: "/mwa nɔ̃ ply/", type: "loc.", vn: "Tôi cũng không (đồng tình với câu phủ định)" },
          { fr: "coloré / colorée", ipa: "/kɔ.lɔ.ʁe/", type: "adj.", vn: "Rực rỡ sắc màu" },
          { fr: "original / originale", ipa: "/ɔ.ʁi.ʒi.nal/", type: "adj.", vn: "Độc đáo, sáng tạo nguyên bản" }
        ]
      },
      {
        num: "2",
        title: "La danse, une passion de ma vie",
        focus: "Nêu quan điểm & Biểu đạt đam mê",
        vocab: [
          { fr: "la danse classique / moderne", ipa: "/dɑ̃s kla.sik, mɔ.dɛʁn/", type: "n.f.", vn: "Múa ba lê cổ điển / nhảy hiện đại" },
          { fr: "se passionner pour", ipa: "/sə pa.sjɔ.ne puʁ/", type: "v.pron.", vn: "Đam mê cuồng nhiệt với cái gì" },
          { fr: "s'intéresser à", ipa: "/s‿ɛ̃.te.ʁɛ.se a/", type: "v.pron.", vn: "Quan tâm, có hứng thú với" },
          { fr: "admirer / contempler", ipa: "/ad.mi.ʁe, kɔ̃.tɑ̃.ple/", type: "v.", vn: "Chiêm ngưỡng, ngắm nhìn say đắm" },
          { fr: "À mon avis,...", ipa: "/a mɔ̃ n‿a.vi/", type: "loc.", vn: "Theo ý kiến của tôi,..." },
          { fr: "Personnellement,...", ipa: "/pɛʁ.sɔ.nɛl.mɑ̃/", type: "adv.", vn: "Về phương diện cá nhân tôi,..." },
          { fr: "Pour moi,...", ipa: "/puʁ mwa/", type: "loc.", vn: "Đối với tôi,..." },
          { fr: "la sculpture", ipa: "/skyl.tyʁ/", type: "n.f.", vn: "Nghệ thuật điêu khắc, tác phẩm tượng" }
        ]
      },
      {
        num: "3",
        title: "Visite d'un atelier artistique",
        focus: "Biểu đạt thời gian: Dès vs Dès que",
        vocab: [
          { fr: "l'atelier artistique", ipa: "/a.tə.lje aʁ.tis.tik/", type: "n.m.", vn: "Xưởng thực hành nghệ thuật, studio vẽ" },
          { fr: "l'artiste peintre", ipa: "/aʁ.tist pɛ̃tʁ/", type: "n.", vn: "Họa sĩ" },
          { fr: "l'inspiration", ipa: "/ɛ̃s.pi.ʁa.sjɔ̃/", type: "n.f.", vn: "Nguồn cảm hứng sáng tác" },
          { fr: "la palette de couleurs", ipa: "/pa.lɛt də ku.lœʁ/", type: "n.f.", vn: "Bảng pha màu vẽ" },
          { fr: "le chevalet", ipa: "/ʃə.va.lɛ/", type: "n.m.", vn: "Giá để tranh vẽ" },
          { fr: "dès (+ nom)", ipa: "/dɛ/", type: "prép.", vn: "Ngay từ khi, ngay từ lúc (dès mon arrivée)" },
          { fr: "dès que (+ proposition)", ipa: "/dɛ kə/", type: "conj.", vn: "Ngay khi (mệnh đề có chủ ngữ và vị ngữ)" },
          { fr: "abstrait / abstraite", ipa: "/ap.stʁɛ, -t/", type: "adj.", vn: "Trừu tượng (nghệ thuật)" }
        ]
      },
      {
        num: "4",
        title: "Comment réaliser un dessin ?",
        focus: "Trình tự quy trình: Avant / Avant de / Après",
        vocab: [
          { fr: "réaliser un dessin", ipa: "/ʁe.a.li.ze œ̃ de.sɛ̃/", type: "loc.v.", vn: "Thực hiện một bức vẽ" },
          { fr: "le collage", ipa: "/kɔ.laʒ/", type: "n.m.", vn: "Nghệ thuật tranh cắt dán" },
          { fr: "esquisser / faire le croquis", ipa: "/ɛs.ki.se, kʁɔ.ki/", type: "loc.v.", vn: "Vẽ phác thảo, dựng bố cục" },
          { fr: "avant (+ nom)", ipa: "/a.vɑ̃/", type: "prép.", vn: "Trước một danh từ/sự kiện" },
          { fr: "avant de (+ infinitif)", ipa: "/a.vɑ̃ də/", type: "loc.prép.", vn: "Trước khi làm một hành động" },
          { fr: "après (+ nom / infinitif passé)", ipa: "/a.pʁɛ/", type: "prép.", vn: "Sau khi (sau danh từ / après avoir + PP)" },
          { fr: "signer", ipa: "/si.ɲe/", type: "v.", vn: "Ký tên tác giả vào góc tranh" },
          { fr: "exposer", ipa: "/ɛks.po.ze/", type: "v.", vn: "Trưng bày triển lãm" }
        ]
      }
    ],
    grammar: {
      title: "1. Bày tỏ ý kiến & Đồng tình / 2. Mốc thời gian Dès vs Dès que / 3. Trình tự Avant & Après",
      formula: "① Bày tỏ ý kiến:\n- Hỏi: Qu'est-ce que tu penses de... ? / Comment trouves-tu... ?\n- Trả lời: Je pense que... / Je trouve que... / À mon avis,...\n- Đồng tình: 'J'aime la peinture.' → 'Moi aussi !' / 'Je n'aime pas le cirque.' → 'Moi non plus !'\n\n② Mốc thời gian tức thì:\n- DÈS + danh từ: Dès l'ouverture de l'atelier, le public est venu.\n- DÈS QUE + mệnh đề: Dès que l'artiste a commencé à peindre, tout le monde s'est tu.\n\n③ Trình tự thời gian:\n- AVANT + danh từ: Avant la leçon...\n- AVANT DE + động từ nguyên mẫu: Avant de peindre, il faut faire une esquisse.\n- APRÈS + danh từ: Après la visite...\n- APRÈS AVOIR / ÊTRE + participe passé: Après avoir terminé, elle a signé son dessin.",
      usage: "Cấu trúc biểu đạt ý kiến giúp tham gia vào các cuộc trao đổi văn hóa sinh động. Các liên từ chỉ thời gian dès/dès que và avant de/après tạo nên tính mạch lạc khi trình bày các bước sáng tác nghệ thuật.",
      examples: [
        "À mon avis, cette fresque murale est magnifique et très originale.(Theo tôi, bức tranh tường này rất lộng lẫy và độc đáo.)",
        "Dès son arrivée à Paris, elle a visité le musée d'Orsay.(Ngay từ khi đặt chân tới Paris, cô ấy đã ghé thăm bảo tàng Orsay - dès + nom).",
        "Dès que le spectacle commence, les lumières s'éteignent.(Ngay khi buổi diễn bắt đầu, ánh đèn vụt tắt - dès que + mệnh đề).",
        "Avant de colorier, vous devez dessiner les contours au crayon.(Trước khi tô màu, các bạn phải vẽ viền bằng bút chì - avant de + inf.)."
      ]
    },
    dialogue: {
      situation: "Hai bạn cùng nhận xét về triển lãm tranh nghệ thuật đường phố",
      lines: [
        { spk: "Chloé", text: "Comment trouves-tu cette exposition de street art ?" },
        { spk: "Nicolas", text: "Personnellement, je trouve que les couleurs sont incroyables et pleines d'énergie." },
        { spk: "Chloé", text: "Moi aussi ! Dès que je suis entrée dans la salle, j'ai été fascinée." },
        { spk: "Nicolas", text: "Tu as vu cette fresque ? Avant de la peindre, l'artiste a fait plus de cinquante croquis !" }
      ]
    },
    culture: "Văn hóa nghệ thuật giới trẻ Pháp ngữ: Phong trào Street Art tại khu phố Butte-aux-Cailles (Paris) và Lễ hội truyện tranh, xiếc đương nhiên Circus. Giới trẻ Pháp được khuyến khích tiếp cận các bảo tàng miễn phí dưới 26 tuổi qua thẻ văn hóa Pass Culture.",
    projet: "Création d'un collage artistique: Tạo một tác phẩm tranh cắt dán nghệ thuật (Collage) theo chủ đề môi trường hoặc trường học, viết tiêu đề và thuyết minh các bước thực hiện.",
    quiz: [
      {
        q: "Bạn A nói: 'Je n'aime pas du tout ce tableau abstrait.' Em cũng không thích, em đáp lại thế nào?",
        options: ["A. Moi aussi !", "B. Moi non plus !", "C. Moi si !", "D. Pas pour moi !"],
        a: 1,
        exp: "Để đồng tình với một ý kiến mang tính phủ định ('Je n'aime pas...'), ta dùng 'Moi non plus !'."
      },
      {
        q: "Điền liên từ thời gian đúng: '(____) peindre la toile, l'artiste prépare ses couleurs.'",
        options: ["A. Avant", "B. Avant de", "C. Dès que", "D. Après de"],
        a: 1,
        exp: "Đứng trước động từ nguyên mẫu 'peindre' mang nghĩa 'trước khi làm gì', ta dùng 'Avant de + infinitif'."
      }
    ]
  },

  // UNITÉ 6: C’ÉTAIT UNE EXPOSITION EXTRA !
  {
    id: "unite-6",
    uniteNum: 6,
    title: "Unité 6 — C’était une exposition extra !",
    subtitle: "Triển lãm tuyệt đỉnh & Trải nghiệm văn hóa khó phai",
    theme: "Triển lãm nhập vai, tượng sống đường phố, phối hợp Imparfait & Passé composé, giới thiệu sự kiện",
    badge: "Triển lãm & Phối hợp thì quá khứ",
    goal: "Miêu tả bối cảnh không gian và con người trong quá khứ bằng Imparfait; kể chuỗi sự việc cụ thể bằng Passé composé kèm từ nối trình tự; đưa ra nhận xét khen/chê về một tác phẩm; giới thiệu toàn diện một sự kiện triển lãm nghệ thuật.",
    lecons: [
      {
        num: "1",
        title: "Et nous sortions voir cette exposition ?",
        focus: "Imparfait: Miêu tả bối cảnh triển lãm & Lời gợi ý (Et si... ?)",
        vocab: [
          { fr: "l'exposition (l'expo)", ipa: "/ɛks.po.zi.sjɔ̃/", type: "n.f.", vn: "Cuộc triển lãm nghệ thuật" },
          { fr: "l'exposition immersive", ipa: "/ɛks.po.zi.sjɔ̃ i.mɛʁ.siv/", type: "n.f.", vn: "Triển lãm nhập vai (ánh sáng/âm thanh đa chiều)" },
          { fr: "la statue vivante", ipa: "/sta.ty vi.vɑ̃t/", type: "n.f.", vn: "Bức tượng người sống biểu diễn" },
          { fr: "le numéro de magie", ipa: "/ny.me.ʁo də ma.ʒi/", type: "n.m.", vn: "Tiết mục ảo thuật kỳ thú" },
          { fr: "l'ambiance chaleureuse", ipa: "/ɑ̃.bjɑ̃s ʃa.lœ.ʁøz/", type: "n.f.", vn: "Bầu không khí ấm áp, vui tươi" },
          { fr: "les visiteurs", ipa: "/vi.zi.tœʁ/", type: "n.m.pl.", vn: "Khách tham quan triển lãm" },
          { fr: "discuter", ipa: "/dis.ky.te/", type: "v.", vn: "Bàn luận, trò chuyện sôi nổi" },
          { fr: "Et si nous sortions ?", ipa: "/e si nu sɔʁ.tjɔ̃/", type: "loc.", vn: "Hay là chúng mình cùng ra ngoài dạo chơi đi?" }
        ]
      },
      {
        num: "2",
        title: "J'ai adoré cette exposition de rue",
        focus: "Phối hợp Imparfait & Passé composé & Từ nối trình tự",
        vocab: [
          { fr: "d'abord", ipa: "/d‿a.bɔʁ/", type: "adv.", vn: "Trước hết, đầu tiên" },
          { fr: "ensuite / puis", ipa: "/ɑ̃.sɥit, pɥi/", type: "adv.", vn: "Tiếp đó, sau đó" },
          { fr: "après", ipa: "/a.pʁɛ/", type: "adv.", vn: "Sau đấy" },
          { fr: "enfin / finalement", ipa: "/ɑ̃.fɛ̃, fi.nal.mɑ̃/", type: "adv.", vn: "Cuối cùng" },
          { fr: "faire une promenade", ipa: "/fɛʁ yn pʁɔm.nad/", type: "loc.v.", vn: "Đi dạo bộ ngắm cảnh" },
          { fr: "admirer les œuvres", ipa: "/ad.mi.ʁe le z‿œvʁ/", type: "loc.v.", vn: "Chiêm ngưỡng các tác phẩm" },
          { fr: "prendre des photos", ipa: "/pʁɑ̃dʁ de fɔ.to/", type: "loc.v.", vn: "Chụp ảnh lưu niệm" },
          { fr: "extraordinaire (extra)", ipa: "/ɛks.tʁa.ɔʁ.di.nɛʁ/", type: "adj.", vn: "Phi thường, tuyệt vời đỉnh cao" }
        ]
      },
      {
        num: "3",
        title: "Des chefs-d'œuvre !",
        focus: "Nhận xét, đánh giá khen chê & Lập luận",
        vocab: [
          { fr: "le chef-d'œuvre", ipa: "/ʃɛf.d‿œvʁ/", type: "n.m.", vn: "Kiệt tác xuất sắc đỉnh cao" },
          { fr: "plein de sensibilité", ipa: "/plɛ̃ də sɑ̃.si.bi.li.te/", type: "loc.adj.", vn: "Tràn đầy cảm xúc tinh tế" },
          { fr: "émouvant / émouvante", ipa: "/e.mu.vɑ̃, -t/", type: "adj.", vn: "Gây xúc động mạnh mẽ" },
          { fr: "ennuyeux / ennuyeuse", ipa: "/ɑ̃.nɥi.jø, -z/", type: "adj.", vn: "Buồn chán, tẻ nhạt" },
          { fr: "manquer de diversité", ipa: "/mɑ̃.ke də di.vɛʁ.si.te/", type: "loc.v.", vn: "Thiếu đi sự đa dạng phong phú" },
          { fr: "être loin de l'art", ipa: "/ɛtʁ lwɛ̃ də l‿aʁ/", type: "loc.v.", vn: "Còn cách xa chuẩn mực nghệ thuật" },
          { fr: "nul / nulle", ipa: "/nyl/", type: "adj.", vn: "Dở tệ, vô giá trị" },
          { fr: "le témoignage", ipa: "/te.mwa.ɲaʒ/", type: "n.m.", vn: "Lời chứng thực, bài chia sẻ cảm nhận" }
        ]
      },
      {
        num: "4",
        title: "Une exposition à voir absolument",
        focus: "Giới thiệu thông tin triển lãm: Nơi, thời gian, loại hình",
        vocab: [
          { fr: "à voir absolument", ipa: "/a vwaʁ ap.sɔ.ly.mɑ̃/", type: "loc.", vn: "Nhất định phải đến xem" },
          { fr: "l'exposition temporaire", ipa: "/ɛks.po.zi.sjɔ̃ tɑ̃.pɔ.ʁɛʁ/", type: "n.f.", vn: "Triển lãm tạm thời (mở trong thời gian ngắn)" },
          { fr: "l'espace interactif", ipa: "/ɛs.pas ɛ̃.tɛ.ʁak.tif/", type: "n.m.", vn: "Không gian tương tác trực tiếp" },
          { fr: "le tarif réduit", ipa: "/ta.ʁif ʁe.dɥi/", type: "n.m.", vn: "Giá vé ưu đãi (cho học sinh/sinh viên)" },
          { fr: "les horaires d'ouverture", ipa: "/o.ʁɛʁ d‿u.vɛʁ.tyʁ/", type: "n.m.pl.", vn: "Giờ mở cửa đón khách" },
          { fr: "le guide audioguide", ipa: "/ɡid o.djo.ɡid/", type: "n.m.", vn: "Thiết bị thuyết minh âm thanh cầm tay" },
          { fr: "la billetterie en ligne", ipa: "/bi.jɛt.ʁi ɑ̃ liɲ/", type: "n.f.", vn: "Hệ thống bán vé trực tuyến" },
          { fr: "le point fort", ipa: "/pwɛ̃ fɔʁ/", type: "n.m.", vn: "Điểm nhấn nổi bật nhất" }
        ]
      }
    ],
    grammar: {
      title: "1. Phối hợp Imparfait & Passé composé / 2. Lời rủ rê Et si... ? / 3. Khen chê nghệ thuật",
      formula: "① Phối hợp hai thì trong chuyện kể quá khứ:\n- IMPARFAIT: dựng khung bối cảnh, mô tả quang cảnh, người đang làm gì (Il faisait beau, les gens admiraient les tableaux...)\n- PASSÉ COMPOSÉ: các sự kiện cụ thể xảy ra tuần tự (Soudain, nous sommes entrés, puis nous avons rencontré le peintre...)\n\n② Lời đề nghị, rủ rê thân mật: ET SI + Sujet + Verbe à l'Imparfait ?\n- Et si nous allions au musée cet après-midi ? (Hay là chiều nay chúng mình đi bảo tàng nhé?)\n\n③ Cụm từ nhận xét nghệ thuật:\n- Tích cực: C'est un chef-d'œuvre ! / C'était impressionnant et très émouvant.\n- Tiêu cực: C'était ennuyeux, ça manquait de diversité.",
      usage: "Sự kết hợp giữa Imparfait (phim quay chậm mô tả không gian nền) và Passé composé (các hành động tạo nên cốt truyện) là kỹ năng kể chuyện (récit au passé) quan trọng bậc nhất của cấp THCS.",
      examples: [
        "Il faisait nuit et le musée était illuminé. Nous sommes entrés et nous avons adoré l'expo immersive.(Trời đã tối và bảo tàng rực sáng ánh đèn. Chúng tôi đã bước vào trong và say mê triển lãm nhập vai.)",
        "D'abord, nous avons vu les sculptures, ensuite nous avons écouté les explications du guide.(Đầu tiên chúng tôi xem tượng điêu khắc, sau đó chúng tôi nghe hướng dẫn viên thuyết minh.)",
        "C'est une exposition à voir absolument, les photographies sont magnifiques !(Đó là một triển lãm nhất định phải đi xem, những bức ảnh tuyệt đẹp!)",
        "Et si on prenait un verre après l'exposition ?(Hay là chúng mình đi uống nước sau khi xem triển lãm nhé?)"
      ]
    },
    dialogue: {
      situation: "Hai bạn cùng chia sẻ cảm nghĩ sau khi tham quan triển lãm nghệ thuật ánh sáng tại Atelier des Lumières",
      lines: [
        { spk: "Maxime", text: "Alors Emma, comment as-tu trouvé l'exposition immersive sur Van Gogh ?" },
        { spk: "Emma", text: "C'était tout simplement un chef-d'œuvre ! Les tableaux géants étaient projetés sur les murs avec de la musique classique." },
        { spk: "Maxime", text: "Moi aussi, j'ai été très ému. C'était une expérience extraordinaire." },
        { spk: "Emma", text: "Oui, il y avait beaucoup de visiteurs, mais l'ambiance était magique et paisible." }
      ]
    },
    culture: "Đêm Trắng (La Nuit Blanche) tại Paris: Một sự kiện văn hóa nghệ thuật kỳ thú diễn ra vào tháng 10. Suốt một đêm không ngủ, các bảo tàng, phòng trưng bày, di tích và không gian công cộng mở cửa tự do đón hàng triệu người dân và du khách thưởng lãm nghệ thuật thị giác và trình diễn âm thanh ánh sáng.",
    projet: "Organisation d'une mini-exposition en classe: Tổ chức một góc triển lãm ảnh nhỏ trong lớp học theo nhóm (chọn chủ đề ảnh, viết tựa đề, chú thích bằng tiếng Pháp và thuyết trình giới thiệu).",
    quiz: [
      {
        q: "Chọn câu phối hợp thì chính xác: 'Pendant que les musiciens (____), le public (____) chaleureusement.'",
        options: [
          "A. jouaient (imparfait) / a applaudi (passé composé)",
          "B. ont joué / applaudissait",
          "C. jouaient / applaudissaient",
          "D. ont joué / a applaudi"
        ],
        a: 0,
        exp: "Hành động nền đang kéo dài: Imparfait (jouaient); hành động chen ngang/hoàn tất: Passé composé (a applaudi)."
      },
      {
        q: "Để đưa ra lời rủ rê thân mật 'Hay là chúng ta cùng đi xem triển lãm tranh nhé?', ta nói:",
        options: [
          "A. Et si nous voyons l'exposition ?",
          "B. Et si nous voyions l'exposition ?",
          "C. Et si nous avons vu l'exposition ?",
          "D. Et si nous verrons l'exposition ?"
        ],
        a: 1,
        exp: "Cấu trúc rủ rê thân mật: Et si + Imparfait -> Et si nous voyions l'exposition ?"
      }
    ]
  }
];

// BẢNG TỔNG HỢP 16 ĐIỂM NGỮ PHÁP TIẾNG PHÁP 8
const grammarSummaryTable = [
  { unité: "Unité 0", điểmNgữPháp: "Futur simple (Être & Avoir)", côngDụng: "Dự đoán, kế hoạch trường tương lai; ser- / aur- + ai, as, a, ons, ez, ont", víDụ: "Les bâtiments seront plus écologiques. Il y aura une piscine." },
  { unité: "Unité 0", điểmNgữPháp: "Comparaison (So sánh)", côngDụng: "So sánh tính chất (plus/moins/aussi + adj) và số lượng (+ de + nom)", víDụ: "La bibliothèque sera plus moderne. Il y aura moins de devoirs." },
  { unité: "Unité 1", điểmNgữPháp: "Imparfait (Quá khứ chưa hoàn thành)", côngDụng: "Miêu tả bối cảnh, cảnh quan, thời tiết, thói quen lặp lại trong quá khứ", víDụ: "Les rues d'Angoulême étaient très animées pendant le festival." },
  { unité: "Unité 1", điểmNgữPháp: "Passé composé (Quá khứ hoàn thành)", côngDụng: "Kể sự kiện xác định, hành động đơn lẻ đã kết thúc trong quá khứ", víDụ: "Hier soir, nous avons assisté à un spectacle de magie en plein air." },
  { unité: "Unité 1", điểmNgữPháp: "Verbes pronominaux au passé composé", côngDụng: "Động từ đại từ ở quá khứ: đi với trợ động từ Être; nghĩa phản thân / tương hỗ", víDụ: "Les amis se sont rencontrés devant la cathédrale." },
  { unité: "Unité 2", điểmNgữPháp: "Pronoms relatifs Qui / Que", côngDụng: "Qui thay cho chủ ngữ (trước động từ); Que/Qu' thay cho bổ ngữ trực tiếp COD", víDụ: "Voici le smartphone qui aide Alice. C'est l'appareil qu'elle choisit." },
  { unité: "Unité 2", điểmNgữPháp: "Proportion (Tỉ lệ phần trăm)", côngDụng: "Biểu đạt tỉ lệ: un quart (25%), un tiers (33%), une moitié (50%), x sur y", víDụ: "En France, un inventeur sur six était une femme." },
  { unité: "Unité 2", điểmNgữPháp: "Superlatif (So sánh nhất)", côngDụng: "le/la/les plus (moins) + adjectif; le plus/moins de + nom", víDụ: "Le livre numérique est le plus léger et le plus pratique." },
  { unité: "Unité 3", điểmNgữPháp: "Pronoms compléments COD & COI", côngDụng: "COD (le/la/les) thay trực tiếp; COI (lui/leur) thay cho người có giới từ à", víDụ: "Je lis ce roman → Je le lis. Je prête le livre à Marc → Je lui prête." },
  { unité: "Unité 3", điểmNgữPháp: "Depuis vs À partir de", côngDụng: "Depuis: từ quá khứ đến nay; À partir de: bắt đầu có hiệu lực từ mốc thời gian", víDụ: "Je lis depuis deux heures. Le salon ouvre à partir du 15 octobre." },
  { unité: "Unité 4", điểmNgữPháp: "Semi-auxiliaires (Bán trợ động từ)", côngDụng: "commencer à, aller, être en train de, venir de + infinitif", víDụ: "Je viens de terminer mon déjeuner. Je suis en train de cuisiner." },
  { unité: "Unité 4", điểmNgữPháp: "Demande polie (Yêu cầu lịch sự)", côngDụng: "Dùng conditionnel của vouloir/pouvoir để gọi món nhà hàng nhã nhặn", víDụ: "Je voudrais une salade. Pourriez-vous m'apporter de l'eau ?" },
  { unité: "Unité 4", điểmNgữPháp: "Adjectifs et pronoms indéfinis", côngDụng: "chaque, plusieurs, quelques, tout... (tính từ); chacun, aucun, tous (đại từ)", víDụ: "Chaque élève a son assiette. Chacun apprécie ce plat délicieux." },
  { unité: "Unité 5", điểmNgữPháp: "Opinions & Accord / Désaccord", côngDụng: "Hỏi và nêu ý kiến; đồng tình khẳng định (Moi aussi), phủ định (Moi non plus)", víDụ: "À mon avis, c'est magnifique. ― Moi aussi, j'adore !" },
  { unité: "Unité 5", điểmNgữPháp: "Dès vs Dès que", côngDụng: "Dès + danh từ; Dès que + mệnh đề (biểu thị sự việc xảy ra ngay tức khắc)", víDụ: "Dès mon arrivée, j'ai vu l'artiste. Dès que la musique commence..." },
  { unité: "Unité 5, 6", điểmNgữPháp: "Avant / Avant de / Après", côngDụng: "Avant + nom; Avant de + infinitif; Après + nom / Après avoir + participe passé", víDụ: "Avant de peindre, faites un croquis. Après la visite, nous rentrons." }
];

// BẢNG CHIA ĐỘNG TỪ TRỌNG TÂM TIẾNG PHÁP 8 (CONJUGAISON MATRIX)
const conjugationMatrix = [
  { verbe: "Être (thì/là/ở)", present: "suis, es, est, sommes, êtes, sont", imparfait: "étais, étais, était, étions, étiez, étaient", passeCompose: "ai été", futurSimple: "serai, seras, sera, serons, serez, seront" },
  { verbe: "Avoir (có)", present: "ai, as, a, avons, avez, ont", imparfait: "avais, avais, avait, avions, aviez, avaient", passeCompose: "ai eu", futurSimple: "aurai, auras, aura, aurons, aurez, auront" },
  { verbe: "Aller (đi)", present: "vais, vas, va, allons, allez, vont", imparfait: "allais, allais, allait, allions, alliez, allaient", passeCompose: "suis allé(e)", futurSimple: "irai, iras, ira, irons, irez, iront" },
  { verbe: "Faire (làm)", present: "fais, fais, fait, faisons, faites, font", imparfait: "faisais, faisais, faisait, faisions, faisiez, faisaient", passeCompose: "ai fait", futurSimple: "ferai, feras, fera, ferons, ferez, feront" },
  { verbe: "Venir (đến)", present: "viens, viens, vient, venons, venez, viennent", imparfait: "venais, venais, venait, venions, veniez, venaient", passeCompose: "suis venu(e)", futurSimple: "viendrai, viendras, viendra, viendrons, viendrez, viendront" },
  { verbe: "Prendre (cầm/lấy/ăn)", present: "prends, prends, prend, prenons, prenez, prennent", imparfait: "prenais, prenais, prenait, prenions, preniez, prenaient", passeCompose: "ai pris", futurSimple: "prendrai, prendras, prendra, prendrons, prendrez, prendront" },
  { verbe: "Lire (đọc)", present: "lis, lis, lit, lisons, lisez, lisent", imparfait: "lisais, lisais, lisait, lisions, lisiez, lisaient", passeCompose: "ai lu", futurSimple: "lirai, liras, lira, lirons, lirez, liront" },
  { verbe: "Écrire (viết)", present: "écris, écris, écrit, écrivons, écrivez, écrivent", imparfait: "écrivais, écrivais, écrivait, écrivions, écriviez, écrivaient", passeCompose: "ai écrit", futurSimple: "écrirai, écriras, écrira, écrirons, écrirez, écriront" },
  { verbe: "Se reposer (nghỉ ngơi)", present: "me repose, te reposes, se repose, nous reposons, vous reposez, se reposent", imparfait: "me reposais, te reposais, se reposait, nous reposions, vous reposiez, se reposaient", passeCompose: "me suis reposé(e)", futurSimple: "me reposerai, te reposeras, se reposera, nous reposerons, vous reposerez, se reposeront" },
  { verbe: "Pouvoir (có thể)", present: "peux, peux, peut, pouvons, pouvez, peuvent", imparfait: "pouvais, pouvais, pouvait, pouvions, pouviez, pouvaient", passeCompose: "ai pu", futurSimple: "pourrai, pourras, pourra, pourrons, pourrez, pourront" },
  { verbe: "Vouloir (muốn)", present: "veux, veux, veut, voulons, voulez, veulent", imparfait: "voulais, voulais, voulait, voulions, vouliez, voulaient", passeCompose: "ai voulu", futurSimple: "voudrai, voudras, voudra, voudrons, voudrez, voudront" }
];

// DANH SÁCH DỰ ÁN SÁNG TẠO (PROJETS CRÉATIFS)
const projectsList = [
  { unité: "Unité 0", titre: "Mon collège du futur", môTả: "Vẽ sơ đồ và thuyết trình ý tưởng về ngôi trường thông minh, sinh thái trong 20 năm tới." },
  { unité: "Unité 1", titre: "Affiche d'un festival culturel", môTả: "Thiết kế áp phích quảng bá lễ hội (tên, ngày, địa điểm, các tiết mục biểu diễn, giá vé và minh họa)." },
  { unité: "Unité 2", titre: "Robot assistant de français", môTả: "Phác thảo ý tưởng robot trợ giảng tiếng Pháp: ngoại hình, màn hình, chức năng sửa ngữ pháp và đố vui." },
  { unité: "Unité 3", titre: "Affiche d'une bande dessinée (BD)", môTả: "Làm poster giới thiệu bộ truyện tranh yêu thích (nhân vật, bối cảnh, tình tiết hấp dẫn và cảm nhận cá nhân)." },
  { unité: "Unité 4", titre: "Sondage sur les habitudes alimentaires", môTả: "Thực hiện khảo sát về chế độ ăn uống lành mạnh của các bạn trong lớp và vẽ biểu đồ phân tích." },
  { unité: "Unité 5", titre: "Création d'un collage artistique", môTả: "Sáng tác tranh cắt dán nghệ thuật (Collage) theo chủ đề, viết chú thích quy trình thực hiện bằng tiếng Pháp." },
  { unité: "Unité 6", titre: "Mini-exposition de photos en classe", môTả: "Tổ chức không gian triển lãm ảnh nhóm, chú thích các bức ảnh và đóng vai hướng dẫn viên thuyết minh." }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    unitesPart2,
    grammarSummaryTable,
    conjugationMatrix,
    projectsList
  };
}
