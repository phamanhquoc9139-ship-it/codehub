// Data for Tieng Phap Lop 5
const units = [
  // UNITÉ 0: Bienvenue dans Tiếng Pháp 5 !
  {
    id: 0,
    titleFr: 'Unité 0 – Bienvenue dans Tiếng Pháp 5 !',
    titleVi: 'Chào mừng đến với Tiếng Pháp 5 !',
    theme: 'Ôn tập kiến thức đã học; giới thiệu các nhân vật, hoạt động giao tiếp cơ bản và làm quen với nội dung năm học',
    summary: 'Khởi động năm học mới, ôn lại các câu chào hỏi lịch sự (Bonjour, Bonsoir, Au revoir, S\'il vous plaît, Merci), cách giới thiệu bản thân (Je m\'appelle, J\'ai ... ans, Je suis en classe de 5e), quốc tịch, các đồ dùng học tập và làm quen với các bạn nhỏ đồng hành trong sách: Pierre, Marie, Minh, Lan.',
    lessons: [
      {
        num: '0.1',
        title: 'Faisons connaissance ! (Làm quen nào!)',
        target: 'Chào hỏi, giới thiệu tên, tuổi, lớp và sở thích cá nhân bằng tiếng Pháp.',
        vocab: [
          { fr: 'Bonjour / Bonsoir', vi: 'Chào buổi sáng (ngày) / Chào buổi tối', pron: '[bɔ̃ʒuʁ / bɔ̃swaʁ]', type: 'Chào hỏi' },
          { fr: 'Comment tu t\'appelles ?', vi: 'Bạn tên là gì?', pron: '[kɔmɑ̃ ty tapɛl]', type: 'Mẫu câu' },
          { fr: 'Je m\'appelle...', vi: 'Tôi tên là...', pron: '[ʒə mapɛl]', type: 'Mẫu câu' },
          { fr: 'Quel âge as-tu ? - J\'ai 10 ans.', vi: 'Bạn bao nhiêu tuổi? - Mình 10 tuổi.', pron: '[kɛl aʒ a ty]', type: 'Mẫu câu' },
          { fr: 'Enchanté(e) !', vi: 'Rất hân hạnh được gặp bạn!', pron: '[ɑ̃ʃɑ̃te]', type: 'Chào hỏi' },
          { fr: 'Le cartable / La trousse', vi: 'Cặp sách / Hộp bút', pron: '[kaʁtabl / tʁus]', type: 'Danh từ' }
        ],
        grammar: {
          title: 'Động từ "s\'appeler" (gọi tên là) & "avoir" (có / tuổi)',
          desc: 'Je m\'appelle, tu t\'appelles, il/elle s\'appelle. J\'ai 10 ans, tu as 10 ans, il/elle a 10 ans.',
          formula: 'Je m\'appelle + [Tên] / J\'ai + [Số tuổi] + ans'
        },
        dialogue: [
          { spk: 'Pierre', fr: 'Bonjour ! Comment tu t\'appelles ?', vi: 'Xin chào! Bạn tên là gì thế?' },
          { spk: 'Minh', fr: 'Bonjour Pierre ! Je m\'appelle Minh. J\'ai 10 ans. Et toi ?', vi: 'Chào Pierre! Mình tên là Minh. Mình 10 tuổi. Còn bạn?' },
          { spk: 'Pierre', fr: 'Moi, j\'ai 10 ans aussi. Bienvenue dans notre classe de français !', vi: 'Mình cũng 10 tuổi. Chào mừng bạn đến với lớp tiếng Pháp của chúng mình!' }
        ],
        phonetics: 'Cách phát âm âm mũi [ɑ̃] trong "Enchanté", "France", "Ans" và âm [ɔ̃] trong "Bonjour".',
        quiz: {
          q: 'Để hỏi tuổi một người bạn đồng trang lứa, câu tiếng Pháp đúng là:',
          options: ['Comment tu t\'appelles ?', 'Quel âge as-tu ?', 'Où habites-tu ?', 'Comment vas-tu ?'],
          ans: 1,
          exp: '"Quel âge as-tu ?" có nghĩa là Bạn bao nhiêu tuổi?'
        }
      }
    ]
  },

  // UNITÉ 1: En ville
  {
    id: 1,
    titleFr: 'Unité 1 – En ville',
    titleVi: 'Trong thành phố',
    theme: 'Giới thiệu thành phố, địa điểm tham quan, phương tiện giao thông, đặc điểm cư dân; động từ apprendre, comprendre; trạng từ tần suất; câu hỏi où, quand, pourquoi, comment',
    summary: 'Khám phá các công trình kiến trúc, danh lam thắng cảnh trong đô thị; cách sử dụng phương tiện giao thông công cộng và bảo vệ môi trường; miêu tả tính cách thân thiện, hiếu khách của cư dân thành phố.',
    lessons: [
      {
        num: '1.1',
        title: 'Leçon 1 – Ma ville (Thành phố của tôi)',
        target: 'Giới thiệu một thành phố, nêu tên các địa điểm công cộng có thể tham quan; nắm vững cách chia động từ nhóm 3: apprendre và comprendre.',
        vocab: [
          { fr: 'La cathédrale', vi: 'Nhà thờ chính tòa / Nhà thờ lớn', pron: '[katedʁal]', type: 'Danh từ giống cái' },
          { fr: 'Le cirque', vi: 'Rạp xiếc', pron: '[siʁk]', type: 'Danh từ giống đực' },
          { fr: 'Le château', vi: 'Lâu đài / Tòa thành', pron: '[ʃɑto]', type: 'Danh từ giống đực' },
          { fr: 'Le théâtre', vi: 'Nhà hát / Rạp kịch', pron: '[teɑtʁ]', type: 'Danh từ giống đực' },
          { fr: 'Le musée', vi: 'Viện bảo tàng', pron: '[myze]', type: 'Danh từ giống đực' },
          { fr: 'Apprendre', vi: 'học / học tập', pron: '[apʁɑ̃dʁ]', type: 'Động từ' },
          { fr: 'Comprendre', vi: 'hiểu / lĩnh hội', pron: '[kɔ̃pʁɑ̃dʁ]', type: 'Động từ' }
        ],
        grammar: {
          title: 'Chia động từ bất quy tắc: apprendre (học) & comprendre (hiểu)',
          desc: 'Động từ tận cùng bằng -prendre chia theo nhóm: j\'apprends, tu apprends, il/elle apprend, nous apprenons, vous apprenez, ils/elles apprennent.',
          formula: 'Sujet + apprends/apprend/apprenons/apprenez/apprennent + COD',
          examples: [
            { fr: 'J\'apprends le français avec mes amis.', vi: 'Tôi học tiếng Pháp cùng các bạn của tôi.' },
            { fr: 'Nous comprenons bien la leçon.', vi: 'Chúng tôi hiểu bài học rất rõ.' }
          ]
        },
        dialogue: [
          { spk: 'Marie', fr: 'Regarde, Minh ! Voici ma ville natale. Au centre, il y a une grande cathédrale et un beau château.', vi: 'Minh nhìn kìa! Đây là thành phố quê hương của mình. Ở trung tâm có một nhà thờ lớn và một lâu đài rất đẹp.' },
          { spk: 'Minh', fr: 'C\'est magnifique ! Qu\'est-ce qu\'on peut visiter encore ?', vi: 'Đẹp tuyệt vời! Chúng mình còn có thể tham quan nơi nào nữa?' },
          { spk: 'Marie', fr: 'On peut aller au cirque ou au théâtre le soir.', vi: 'Buổi tối chúng mình có thể đến rạp xiếc hoặc nhà hát kịch.' }
        ],
        phonetics: 'Quy tắc đọc âm "ch" [ʃ] trong "château" khác với âm "c" [k] trong "cathédrale" và "cirque" [s].',
        quiz: {
          q: 'Chia động từ "apprendre" với ngôi "Nous":',
          options: ['Nous apprendons', 'Nous apprenons', 'Nous apprends', 'Nous apprenez'],
          ans: 1,
          exp: 'Ngôi Nous của động từ apprendre bỏ chữ "d" -> "Nous apprenons".'
        }
      },
      {
        num: '1.2',
        title: 'Leçon 2 – Quand est-ce que tu visites ma ville ? (Khi nào bạn đến thăm thành phố của tôi?)',
        target: 'Hỏi và trả lời về địa điểm (Où) và thời gian (Quand) đến thăm các công trình kiến trúc của thành phố.',
        vocab: [
          { fr: 'La tour', vi: 'Tòa tháp (la tour Eiffel)', pron: '[tuʁ]', type: 'Danh từ giống cái' },
          { fr: 'La place', vi: 'Quảng trường', pron: '[plas]', type: 'Danh từ giống cái' },
          { fr: 'L\'hôtel de ville', vi: 'Tòa thị chính / Tòa thị chính thành phố', pron: '[otɛl də vil]', type: 'Danh từ giống đực' },
          { fr: 'Le quartier', vi: 'Khu phố / Khu dân cư', pron: '[kaʁtje]', type: 'Danh từ giống đực' },
          { fr: 'Le fleuve', vi: 'Dòng sông lớn (chảy ra biển)', pron: '[flœv]', type: 'Danh từ giống đực' },
          { fr: 'Le jardin des plantes', vi: 'Vườn bách thảo / Vườn thực vật', pron: '[ʒaʁdɛ̃ de plɑ̃t]', type: 'Danh từ giống đực' },
          { fr: 'Où / Quand', vi: 'Ở đâu / Khi nào', pron: '[u / kɑ̃]', type: 'Từ để hỏi' }
        ],
        grammar: {
          title: 'Từ để hỏi: Où (Ở đâu) & Quand (Khi nào) với "est-ce que"',
          desc: 'Đặt từ để hỏi ở đầu câu kết hợp với cấu trúc "est-ce que" để tạo thành câu hỏi lịch sự, chuẩn mực.',
          formula: 'Où / Quand + est-ce que + Sujet + Verbe... ?',
          examples: [
            { fr: 'Où est-ce que tu habites ? - J\'habite près du fleuve.', vi: 'Bạn sống ở đâu? - Tôi sống ở gần con sông.' },
            { fr: 'Quand est-ce que tu visites le jardin des plantes ? - Dimanche prochain.', vi: 'Khi nào bạn đi thăm vườn bách thảo? - Chủ nhật tới.' }
          ]
        },
        dialogue: [
          { spk: 'Lucas', fr: 'Quand est-ce que tu visites notre quartier, Minh ?', vi: 'Khi nào thì cậu đến thăm khu phố của tụi mình vậy Minh?' },
          { spk: 'Minh', fr: 'Je viens cet après-midi ! Où est-ce qu\'on se retrouve ?', vi: 'Chiều nay mình đến nhé! Chúng mình hẹn gặp nhau ở đâu đây?' },
          { spk: 'Lucas', fr: 'Devant la grande tour, près de l\'hôtel de ville !', vi: 'Ở trước tòa tháp lớn, ngay gần tòa thị chính nhé!' }
        ],
        phonetics: 'Phát âm phân biệt từ để hỏi "Où" [u] (có dấu huyền) và liên từ "Ou" [u] (hoặc - không dấu).',
        quiz: {
          q: 'Để hỏi về THỜI ĐIỂM (Khi nào bạn đi du lịch?), ta dùng từ để hỏi nào?',
          options: ['Où', 'Comment', 'Quand', 'Pourquoi'],
          ans: 2,
          exp: '"Quand" là từ để hỏi về thời gian (Khi nào).'
        }
      },
      {
        num: '1.3',
        title: 'Leçon 3 – J\'aime toujours aller au zoo avec mon frère (Tôi luôn thích đi sở thú cùng anh trai)',
        target: 'Sử dụng các trạng từ tần suất để diễn đạt thói quen và giới thiệu các cửa hàng chuyên doanh truyền thống tại Pháp.',
        vocab: [
          { fr: 'La parfumerie', vi: 'Cửa hàng nước hoa / mỹ phẩm', pron: '[paʁfymʁi]', type: 'Danh từ giống cái' },
          { fr: 'La bijouterie', vi: 'Tiệm trang sức vàng bạc đá quý', pron: '[biʒutʁi]', type: 'Danh từ giống cái' },
          { fr: 'La crèmerie', vi: 'Cửa hàng bơ sữa trứng', pron: '[kʁɛmʁi]', type: 'Danh từ giống cái' },
          { fr: 'La charcuterie', vi: 'Cửa hàng thịt nguội dăm bông xúc xích', pron: '[ʃaʁkytʁi]', type: 'Danh từ giống cái' },
          { fr: 'La fromagerie', vi: 'Cửa hàng phô mai truyền thống', pron: '[fʁɔmaʒʁi]', type: 'Danh từ giống cái' },
          { fr: 'Toujours', vi: 'luôn luôn (100%)', pron: '[tuʒuʁ]', type: 'Trạng từ' },
          { fr: 'Souvent', vi: 'thường xuyên (~70%)', pron: '[suvɑ̃]', type: 'Trạng từ' },
          { fr: 'Parfois', vi: 'đôi khi / thỉnh thoảng (~40%)', pron: '[paʁfwa]', type: 'Trạng từ' },
          { fr: 'Rarement', vi: 'hiếm khi (~10%)', pron: '[ʁaʁmɑ̃]', type: 'Trạng từ' }
        ],
        grammar: {
          title: 'Vị trí của trạng từ tần suất trong câu tiếng Pháp',
          desc: 'Trạng từ tần suất (toujours, souvent, parfois, rarement) đứng ngay sau động từ được chia ở thì hiện tại.',
          formula: 'Sujet + Verbe + Trạng từ tần suất + Complément',
          examples: [
            { fr: 'J\'aime toujours aller au zoo.', vi: 'Tôi luôn luôn thích đi sở thú.' },
            { fr: 'Maman va souvent à la fromagerie.', vi: 'Mẹ thường xuyên đến tiệm phô mai.' },
            { fr: 'Nous mangeons rarement au restaurant.', vi: 'Chúng tôi hiếm khi đi ăn nhà hàng.' }
          ]
        },
        dialogue: [
          { spk: 'Lan', fr: 'Tu vas souvent au centre-ville le week-end ?', vi: 'Cuối tuần cậu có thường lên trung tâm thành phố không?' },
          { spk: 'Camille', fr: 'Oui, je vais toujours à la librairie avec ma sœur. Et parfois, nous achetons du bon fromage à la fromagerie.', vi: 'Có chứ, mình luôn luôn đến hiệu sách cùng chị gái. Và thỉnh thoảng tụi mình mua phô mai ngon ở tiệm phô mai.' }
        ],
        phonetics: 'Cách phát âm đuôi danh từ chỉ cửa tiệm "-erie" [ʁi] mềm mại và nhấn nhẹ.',
        quiz: {
          q: 'Trạng từ nào có nghĩa là "hiếm khi"?',
          options: ['Toujours', 'Souvent', 'Rarement', 'Parfois'],
          ans: 2,
          exp: '"Rarement" có nghĩa là hiếm khi / ít khi.'
        }
      },
      {
        num: '1.4',
        title: 'Leçon 4 – Pourquoi est-ce que tu te déplaces à vélo ? (Tại sao bạn lại đi lại bằng xe đạp?)',
        target: 'Hỏi và giải thích nguyên nhân lựa chọn phương tiện giao thông thân thiện môi trường; cấu trúc Pourquoi...? Parce que... .',
        vocab: [
          { fr: 'La moto', vi: 'Xe máy', pron: '[mɔto]', type: 'Danh từ giống cái' },
          { fr: 'Le scooter', vi: 'Xe tay ga', pron: '[skutɛʁ]', type: 'Danh từ giống đực' },
          { fr: 'Le VTC', vi: 'Xe ô tô dịch vụ đặt qua app (Grab/Uber)', pron: '[ve te se]', type: 'Danh từ giống đực' },
          { fr: 'Le vélo électrique', vi: 'Xe đạp điện', pron: '[velo elɛktʁik]', type: 'Danh từ giống đực' },
          { fr: 'La trottinette', vi: 'Xe trượt scooter / xe trượt điện', pron: '[tʁɔtinɛt]', type: 'Danh từ giống cái' },
          { fr: 'Le tramway', vi: 'Tàu điện trên mặt đất', pron: '[tʁamwɛ]', type: 'Danh từ giống đực' },
          { fr: 'Pourquoi... ?', vi: 'Tại sao... ?', pron: '[puʁkwa]', type: 'Từ để hỏi' },
          { fr: 'Parce que... / Car...', vi: 'Bởi vì... / Vì...', pron: '[paʁs kə / kaʁ]', type: 'Liên từ' }
        ],
        grammar: {
          title: 'Cặp câu hỏi và trả lời nguyên nhân: Pourquoi...? - Parce que...',
          desc: 'Sử dụng "Pourquoi est-ce que..." để hỏi lý do, và dùng "Parce que + mệnh đề" (trước nguyên âm đổi thành parce qu\') để trả lời.',
          formula: 'Câu hỏi: Pourquoi est-ce que + S + V... ?\nCâu trả lời: Parce que + S + V...',
          examples: [
            { fr: 'Pourquoi est-ce que tu te déplaces à vélo ? - Parce que c\'est bon pour la santé et l\'environnement.', vi: 'Tại sao bạn đi lại bằng xe đạp? - Vì nó tốt cho sức khỏe và môi trường.' },
            { fr: 'Pourquoi prends-tu le tramway ? - Parce qu\'il est rapide et moderne.', vi: 'Tại sao bạn đi tàu điện? - Vì nó nhanh và hiện đại.' }
          ]
        },
        dialogue: [
          { spk: 'Thomas', fr: 'Pourquoi est-ce que tu prends la trottinette électrique ce matin ?', vi: 'Tại sao sáng nay cậu lại đi xe trượt điện thế?' },
          { spk: 'Minh', fr: 'Parce que c\'est très pratique et écologique pour aller à l\'école !', vi: 'Bởi vì nó rất tiện lợi và bảo vệ môi trường khi đến trường!' }
        ],
        phonetics: 'Rút gọn nguyên âm "parce que" thành "parce qu\'" khi đứng trước nguyên âm (il, elle, on): parce qu\'il est rapide.',
        quiz: {
          q: 'Điền từ thích hợp vào câu trả lời: "Pourquoi aimes-tu le tramway ? - ____ il ne pollue pas."',
          options: ['Pourquoi', 'Parce qu\'', 'Quand', 'Comment'],
          ans: 1,
          exp: 'Trước đại từ "il", "parce que" giản lược thành "Parce qu\'".'
        }
      },
      {
        num: '1.5',
        title: 'Leçon 5 – Comment sont les habitants de ta ville ? (Cư dân thành phố bạn như thế nào?)',
        target: 'Miêu tả tính cách con người và nét đặc trưng của cư dân thành phố bằng tính từ chỉ phẩm chất và câu hỏi "Comment... ?".',
        vocab: [
          { fr: 'Sympathique (sympa)', vi: 'Đáng mến / dễ thương', pron: '[sɛ̃patik]', type: 'Tính từ' },
          { fr: 'Sociable', vi: 'Hòa đồng / cởi mở', pron: '[sɔsjabl]', type: 'Tính từ' },
          { fr: 'Accueillant(e)', vi: 'Niềm nở / hiếu khách', pron: '[akœjɑ̃ / akœjɑ̃t]', type: 'Tính từ' },
          { fr: 'Hospitalier / Hospitalière', vi: 'Mến khách / thân tình', pron: '[ɔspitalje / ɔspitaljɛʁ]', type: 'Tính từ' },
          { fr: 'Gentil / Gentille', vi: 'Tử tế / tốt bụng / ngoan', pron: '[ʒɑ̃ti / ʒɑ̃tij]', type: 'Tính từ' },
          { fr: 'Calme / Bruyant(e)', vi: 'Yên tĩnh / Ồn ào náo nhiệt', pron: '[kalm / bʁɥijɑ̃]', type: 'Tính từ trái nghĩa' },
          { fr: 'Comment... ?', vi: 'Như thế nào... ?', pron: '[kɔmɑ̃]', type: 'Từ để hỏi' }
        ],
        grammar: {
          title: 'Câu hỏi tính chất: Comment + être + Sujet ?',
          desc: 'Dùng động từ être để hỏi và miêu tả đặc điểm tính cách của con người hoặc quang cảnh nơi chốn.',
          formula: 'Comment est/sont + Sujet ?  --->  Sujet + est/sont + Adjectif(s)',
          examples: [
            { fr: 'Comment sont les habitants de ta ville ? - Ils sont très accueillants et sociables.', vi: 'Người dân thành phố bạn thế nào? - Họ rất hiếu khách và hòa đồng.' },
            { fr: 'Comment est ton quartier ? - Il est calme et verdoyant.', vi: 'Khu phố của bạn thế nào? - Nó yên tĩnh và nhiều cây xanh.' }
          ]
        },
        dialogue: [
          { spk: 'Lan', fr: 'Comment sont les habitants de Paris, Pierre ?', vi: 'Người dân Paris như thế nào vậy Pierre?' },
          { spk: 'Pierre', fr: 'Ils sont toujours actifs et très polis. Et à Hanoï, comment sont les gens ?', vi: 'Họ luôn năng động và rất lịch thiệp. Còn ở Hà Nội thì mọi người thế nào?' },
          { spk: 'Lan', fr: 'Les Hanoïens sont extrêmement chaleureux, souriants et accueillants !', vi: 'Người Hà Nội cực kỳ nồng hậu, tươi cười và mến khách!' }
        ],
        phonetics: 'Hợp giống và số của tính từ: thêm "e" ở giống cái (accueillant -> accueillante), thêm "s" ở số nhiều (sociables).',
        quiz: {
          q: 'Tính từ "gentil" (tốt bụng) khi chuyển sang giống cái số nhiều sẽ là:',
          options: ['gentils', 'gentilles', 'gentiles', 'gentile'],
          ans: 1,
          exp: 'Giống cái của gentil là gentille, số nhiều thêm "s" -> gentilles.'
        }
      }
    ],
    culture: {
      title: 'Các thành phố lớn trong Cộng đồng Pháp ngữ (Villes francophones)',
      content: 'Tiếng Pháp được sử dụng rộng rãi khắp 5 châu lục! Tại châu Âu, Paris (Pháp), Bruxelles (Bỉ), Genève (Thụy Sĩ) nổi tiếng với những đại lộ tráng lệ. Tại châu Mỹ, thành phố Québec và Montréal (Canada) gìn giữ văn hóa Pháp cổ kính bên dòng sông Saint-Laurent. Tại châu Phi, Dakar (Sénégal) là thủ phủ văn hóa và nghệ thuật rực rỡ đầy nắng ấm.'
    },
    project: {
      title: 'Dự án thực hành (Projet): Làm tờ rơi / mô hình giới thiệu Thành phố mơ ước (Ma ville de rêve)',
      steps: [
        '1. Lên ý tưởng: Chọn tên thành phố, vẽ sơ đồ trung tâm thành phố với các địa điểm (nhà hát, bảo tàng, công viên, quảng trường).',
        '2. Lựa chọn phương tiện: Đề xuất phương tiện giao thông xanh (xe đạp điện, tramway, lối đi bộ).',
        '3. Viết bài thuyết minh ngắn: Dùng các tính từ (moderne, accueillante, écologique) và trình bày trước lớp.'
      ]
    }
  },

  // UNITÉ 2: Chez moi
  {
    id: 2,
    titleFr: 'Unité 2 – Chez moi',
    titleVi: 'Ở nhà tôi',
    theme: 'Địa chỉ, nhà ở, các phòng, đồ nội thất, vị trí đồ vật, màu sắc; tính từ sở hữu, chez + đại từ, cấu trúc c\'est / ce sont, je voudrais / j\'aimerais + động từ nguyên mẫu',
    summary: 'Giới thiệu ngôi nhà thân yêu, các phòng chức năng (phòng khách, phòng ngủ, bếp, ban công); bài trí đồ nội thất; sử dụng tính từ sở hữu và giới từ chỉ vị trí.',
    lessons: [
      {
        num: '2.1',
        title: 'Mon adresse et ma maison (Địa chỉ và ngôi nhà của tôi)',
        target: 'Nói địa chỉ nhà, miêu tả kiểu nhà (căn hộ chung cư, nhà phố, nhà vườn) và sử dụng "chez + đại từ".',
        vocab: [
          { fr: 'L\'adresse', vi: 'Địa chỉ nhà', pron: '[adʁɛs]', type: 'Danh từ giống cái' },
          { fr: 'L\'appartement', vi: 'Căn hộ chung cư', pron: '[apaʁtəmɑ̃]', type: 'Danh từ giống đực' },
          { fr: 'La maison individuelle', vi: 'Nhà riêng / biệt thự', pron: '[mɛzɔ̃ ɛ̃dividɥɛl]', type: 'Danh từ giống cái' },
          { fr: 'L\'immeuble', vi: 'Tòa nhà cao tầng / chung cư', pron: '[imœbl]', type: 'Danh từ giống đực' },
          { fr: 'Chez moi / Chez toi', vi: 'Ở nhà tôi / Ở nhà bạn', pron: '[ʃe mwa / ʃe twa]', type: 'Cụm từ' },
          { fr: 'Habiter au ... étage', vi: 'Sống ở tầng thứ...', pron: '[abite o etaʒ]', type: 'Cụm ĐT' }
        ],
        grammar: {
          title: 'Giới từ "chez" + Đại từ nhấn mạnh (chez moi, chez toi, chez lui, chez elle)',
          desc: '"Chez" có nghĩa là ở nhà của ai đó hoặc tại nơi của ai đó.',
          formula: 'Chez + moi / toi / lui / elle / nous / vous / eux / elles',
          examples: [
            { fr: 'Viens chez moi ce soir !', vi: 'Tối nay đến nhà mình chơi nhé!' },
            { fr: 'Nous déjeunons chez nos grands-parents.', vi: 'Chúng tôi ăn trưa ở nhà ông bà.' }
          ]
        },
        dialogue: [
          { spk: 'Minh', fr: 'Où habites-tu, Pierre ?', vi: 'Cậu sống ở đâu vậy Pierre?' },
          { spk: 'Pierre', fr: 'J\'habite au numéro 15, rue Victor Hugo. C\'est un bel appartement au troisième étage. Viens chez moi samedi !', vi: 'Mình sống ở số 15 phố Victor Hugo. Đó là một căn hộ đẹp ở tầng 3. Thứ Bảy đến nhà mình chơi nhé!' }
        ],
        phonetics: 'Nối âm liaison bắt buộc sau giới từ "chez": chez elle [ʃe.zɛl], chez eux [ʃe.zø].',
        quiz: {
          q: 'Để nói "Đến nhà của tôi", ta dùng cụm từ nào?',
          options: ['Chez toi', 'Chez moi', 'Chez lui', 'Chez nous'],
          ans: 1,
          exp: '"Chez moi" có nghĩa là ở nhà của tôi.'
        }
      },
      {
        num: '2.2',
        title: 'Les pièces de la maison (Các căn phòng trong nhà)',
        target: 'Gọi tên các phòng trong nhà và sử dụng cấu trúc giới thiệu "C\'est / Ce sont".',
        vocab: [
          { fr: 'Le salon', vi: 'Phòng khách', pron: '[salɔ̃]', type: 'Danh từ giống đực' },
          { fr: 'La chambre à coucher', vi: 'Phòng ngủ', pron: '[ʃɑ̃bʁ a kuʃe]', type: 'Danh từ giống cái' },
          { fr: 'La cuisine', vi: 'Nhà bếp', pron: '[kɥizin]', type: 'Danh từ giống cái' },
          { fr: 'La salle de bains', vi: 'Phòng tắm', pron: '[sal də bɛ̃]', type: 'Danh từ giống cái' },
          { fr: 'Le balcon', vi: 'Ban công', pron: '[balkɔ̃]', type: 'Danh từ giống đực' },
          { fr: 'Le jardin', vi: 'Khu vườn', pron: '[ʒaʁdɛ̃]', type: 'Danh từ giống đực' }
        ],
        grammar: {
          title: 'Cấu trúc định danh: C\'est + số ít / Ce sont + số nhiều',
          desc: 'Dùng để chỉ và giới thiệu người hoặc đồ vật.',
          formula: 'C\'est + Danh từ số ít / Ce sont + Danh từ số nhiều',
          examples: [
            { fr: 'C\'est le salon de notre appartement.', vi: 'Đây là phòng khách của căn hộ chúng tôi.' },
            { fr: 'Ce sont les chambres de mes frères.', vi: 'Đây là các phòng ngủ của các anh trai tôi.' }
          ]
        },
        dialogue: [
          { spk: 'Marie', fr: 'Voici ma maison ! Au rez-de-chaussée, c\'est le salon et la cuisine.', vi: 'Đây là nhà của mình! Ở tầng trệt là phòng khách và nhà bếp.' },
          { spk: 'Lan', fr: 'Et au premier étage ? - Ce sont les chambres et la salle de bains.', vi: 'Còn ở tầng một (tầng lầu)? - Đó là các phòng ngủ và phòng tắm.' }
        ],
        phonetics: 'Nguyên âm đôi "ou" [u] trong "chambre à coucher" khác với nguyên âm "u" [y] trong "cuisine".',
        quiz: {
          q: 'Chọn câu viết đúng ngữ pháp cho danh từ số nhiều:',
          options: ['C\'est les chambres.', 'Ce sont les chambres.', 'Ce sont la chambre.', 'C\'est des chambre.'],
          ans: 1,
          exp: 'Với danh từ số nhiều "les chambres", ta dùng "Ce sont".'
        }
      },
      {
        num: '2.3',
        title: 'Les meubles et la décoration (Đồ nội thất và trang trí)',
        target: 'Kể tên các đồ đạc nội thất cơ bản và sử dụng tính từ sở hữu (mon, ton, son...).',
        vocab: [
          { fr: 'Le canapé', vi: 'Ghế sô pha', pron: '[kanape]', type: 'Danh từ giống đực' },
          { fr: 'La table / La chaise', vi: 'Cái bàn / Cái ghế tựa', pron: '[tabl / ʃɛz]', type: 'Danh từ giống cái' },
          { fr: 'Le lit', vi: 'Cái giường ngủ', pron: '[li]', type: 'Danh từ giống đực' },
          { fr: 'L\'armoire', vi: 'Tủ quần áo', pron: '[aʁmwaʁ]', type: 'Danh từ giống cái' },
          { fr: 'Le bureau', vi: 'Bàn học / Bàn làm việc', pron: '[byʁo]', type: 'Danh từ giống đực' },
          { fr: 'La lampe', vi: 'Đèn bàn / Đèn ngủ', pron: '[lɑ̃p]', type: 'Danh từ giống cái' },
          { fr: 'L\'étagère', vi: 'Kệ sách / Giá để đồ', pron: '[etaʒɛʁ]', type: 'Danh từ giống cái' }
        ],
        grammar: {
          title: 'Hệ thống tính từ sở hữu (Les adjectifs possessifs)',
          desc: 'Tính từ sở hữu hợp giống và số với danh từ đi sau nó.',
          formula: 'Giống đực: mon, ton, son, notre, votre, leur\nGiống cái: ma, ta, sa, notre, votre, leur\nSố nhiều: mes, tes, ses, nos, vos, leurs',
          examples: [
            { fr: 'Mon lit est confortable, et ma chambre est claire.', vi: 'Giường của tôi êm ái, và phòng của tôi ngập tràn ánh sáng.' },
            { fr: 'Range tes livres sur ton étagère !', vi: 'Hãy xếp sách của bạn lên giá sách của bạn đi!' }
          ]
        },
        dialogue: [
          { spk: 'Minh', fr: 'Dans ma chambre, j\'ai un grand bureau et une étagère en bois.', vi: 'Trong phòng ngủ của mình, mình có một bàn học lớn và một kệ sách bằng gỗ.' },
          { spk: 'Pierre', fr: 'Et où est ton lit ? - Mon lit est près de la fenêtre.', vi: 'Thế giường của cậu ở đâu? - Giường của mình ở gần cửa sổ.' }
        ],
        phonetics: 'Quy tắc đặc biệt: Danh từ giống cái bắt đầu bằng nguyên âm dùng "mon, ton, son" thay cho "ma, ta, sa" (mon armoire, son école).',
        quiz: {
          q: 'Chọn tính từ sở hữu thích hợp: "C\'est ____ armoire (giống cái, bắt đầu bằng nguyên âm a).',
          options: ['ma', 'mon', 'sa', 'ta'],
          ans: 1,
          exp: 'Trước danh từ giống cái bắt đầu bằng nguyên âm (armoire), dùng "mon" để tránh trùng nguyên âm.'
        }
      },
      {
        num: '2.4',
        title: 'Où sont les objets ? (Đồ vật ở đâu?)',
        target: 'Chỉ vị trí chính xác của đồ vật trong phòng bằng các giới từ không gian (sur, sous, devant, derrière, entre, à côté de).',
        vocab: [
          { fr: 'Sur / Sous', vi: 'Trên / Dưới', pron: '[syʁ / su]', type: 'Giới từ vị trí' },
          { fr: 'Devant / Derrière', vi: 'Đằng trước / Đằng sau', pron: '[dəvɑ̃ / dɛʁjɛʁ]', type: 'Giới từ vị trí' },
          { fr: 'Dans', vi: 'Trong / Bên trong', pron: '[dɑ̃]', type: 'Giới từ vị trí' },
          { fr: 'À côté de', vi: 'Bên cạnh', pron: '[a kote də]', type: 'Cụm giới từ' },
          { fr: 'Entre ... et ...', vi: 'Ở giữa ... và ...', pron: '[ɑ̃tʁ]', type: 'Giới từ' },
          { fr: 'À gauche / À droite', vi: 'Bên trái / Bên phải', pron: '[a goʃ / a dʁwat]', type: 'Cụm từ' }
        ],
        grammar: {
          title: 'Các giới từ chỉ vị trí và sự kết hợp của "de"',
          desc: 'Khi dùng "à côté de", "près de", giới từ de kết hợp với mạo từ xác định: de + le = du; de + les = des.',
          formula: 'Sujet + est/sont + Giới từ vị trí + Lieu/Objet',
          examples: [
            { fr: 'Le cahier est sur le bureau.', vi: 'Quyển vở ở trên bàn học.' },
            { fr: 'La lampe est à côté du lit (de + le = du).', vi: 'Chiếc đèn ngủ ở bên cạnh giường.' }
          ]
        },
        dialogue: [
          { spk: 'Lan', fr: 'Où est mon dictionnaire de français ?', vi: 'Từ điển tiếng Pháp của mình ở đâu rồi nhỉ?' },
          { spk: 'Minh', fr: 'Il est sous la table, à côté de ton sac à dos !', vi: 'Nó ở dưới gầm bàn, ngay cạnh ba lô của cậu kìa!' }
        ],
        phonetics: 'Phân biệt phát âm cực chuẩn giữa "sur" [syʁ] (chu môi u) và "sous" [su] (môi tròn tròn).',
        quiz: {
          q: 'Giới từ nào có nghĩa là "ở trên mặt phẳng"?',
          options: ['Sous', 'Dans', 'Sur', 'Derrière'],
          ans: 2,
          exp: '"Sur" có nghĩa là ở trên (ngược với sous là ở dưới).'
        }
      },
      {
        num: '2.5',
        title: 'Ma chambre idéale (Căn phòng lý tưởng của tôi)',
        target: 'Bày tỏ mong muốn trang trí căn phòng trong mơ bằng mẫu câu lịch sự "Je voudrais / J\'aimerais + Động từ nguyên mẫu".',
        vocab: [
          { fr: 'Je voudrais', vi: 'Tôi muốn (lịch sự)', pron: '[ʒə vudʁɛ]', type: 'Mẫu câu' },
          { fr: 'J\'aimerais', vi: 'Tôi mong muốn / Tôi muốn', pron: '[ʒɛmʁɛ]', type: 'Mẫu câu' },
          { fr: 'Peindre', vi: 'Sơn tường / Vẽ tranh', pron: '[pɛ̃dʁ]', type: 'Động từ' },
          { fr: 'Les murs', vi: 'Các bức tường', pron: '[myʁ]', type: 'Danh từ giống đực' },
          { fr: 'Bleu ciel / Vert clair', vi: 'Xanh da trời / Xanh lá nhạt', pron: '[blø sjɛl / vɛʁ klɛʁ]', type: 'Màu sắc' },
          { fr: 'Confortable', vi: 'Tiện nghi / Thoải mái', pron: '[kɔ̃fɔʁtabl]', type: 'Tính từ' }
        ],
        grammar: {
          title: 'Cấu trúc điều kiện lịch sự: Je voudrais / J\'aimerais + Động từ nguyên mẫu',
          desc: 'Thể hiện ước muốn nhã nhặn, không ra lệnh.',
          formula: 'Je voudrais / J\'aimerais + Verbe à l\'infinitif',
          examples: [
            { fr: 'J\'aimerais peindre ma chambre en bleu ciel.', vi: 'Tôi muốn sơn phòng mình màu xanh da trời.' },
            { fr: 'Je voudrais acheter un grand tapis moelleux.', vi: 'Tôi muốn mua một tấm thảm lớn êm ái.' }
          ]
        },
        dialogue: [
          { spk: 'Pierre', fr: 'Comment aimerais-tu décorer ta chambre ?', vi: 'Cậu muốn trang trí phòng mình như thế nào?' },
          { spk: 'Minh', fr: 'J\'aimerais avoir un grand poster de la tour Eiffel et une étagère blanche.', vi: 'Mình muốn có một tấm áp phích lớn hình tháp Eiffel và một kệ sách màu trắng.' }
        ],
        phonetics: 'Âm [ɛ] cuối câu trong "voudrais" và "aimerais".',
        quiz: {
          q: 'Hoàn thành câu diễn tả mong muốn lịch sự: "Je ____ habiter dans une maison au bord de la mer."',
          options: ['voudrais', 'veux', 'va', 'est'],
          ans: 0,
          exp: '"Je voudrais" thể hiện mong muốn nhã nhặn, lịch sự.'
        }
      }
    ],
    culture: {
      title: 'Kiến trúc nhà ở tại Pháp: Từ căn hộ Haussmann đến nhà ngoại ô',
      content: 'Tại thủ đô Paris, những tòa nhà chung cư mang phong cách Haussmann với ban công sắt uốn nghệ thuật, trần nhà cao đắp thạch cao tinh xảo và lò sưởi đá hoa cương là biểu tượng kiến trúc thế kỷ 19. Trong khi đó ở miền quê nước Pháp, những ngôi nhà lợp ngói đá đen hay mái ngói đỏ bên vườn nho mang lại cảm giác thanh bình, gần gũi thiên nhiên.'
    }
  },

  // UNITÉ 3: Faisons nos achats !
  {
    id: 3,
    titleFr: 'Unité 3 – Faisons nos achats !',
    titleVi: 'Cùng đi mua sắm nào !',
    theme: 'Mua sắm, giá tiền, tiền tiêu vặt, chi tiêu, phương thức thanh toán, sở thích sưu tầm; câu hỏi combien, combien de, combien d\', các động từ acheter, espérer, payer',
    summary: 'Học cách hỏi giá cả hàng hóa, quản lý tiền tiêu vặt cá nhân, các phương thức thanh toán (tiền mặt, thẻ ngân hàng), sở thích sưu tập tem/mô hình và chia động từ biến đổi âm: acheter, espérer, payer.',
    lessons: [
      {
        num: '3.1',
        title: 'Au supermarché et au marché (Ở siêu thị và chợ phiên)',
        target: 'Hỏi giá tiền và số lượng bằng từ để hỏi "Combien... ?" và "Combien de... ?".',
        vocab: [
          { fr: 'Le prix', vi: 'Giá cả / Giá tiền', pron: '[pʁi]', type: 'Danh từ giống đực' },
          { fr: 'L\'euro (€)', vi: 'Đồng tiền chung châu Âu (Euro)', pron: '[øʁo]', type: 'Đơn vị tiền' },
          { fr: 'Le centime', vi: 'Xu / Xu cent (1 euro = 100 centimes)', pron: '[sɑ̃tim]', type: 'Đơn vị tiền' },
          { fr: 'Combien coûte... ?', vi: 'Cái này giá bao nhiêu?', pron: '[kɔ̃bjɛ̃ kut]', type: 'Mẫu câu' },
          { fr: 'Combien de / d\'...', vi: 'Bao nhiêu (số lượng danh từ)', pron: '[kɔ̃bjɛ̃ də]', type: 'Mẫu câu' },
          { fr: 'Un kilo de pommes', vi: 'Một cân táo', pron: '[ɛ̃ kilo də pɔm]', type: 'Cụm từ' }
        ],
        grammar: {
          title: 'Hỏi giá tiền và số lượng: Combien coûte... ? & Combien de + Danh từ ?',
          desc: 'Combien coûte + danh từ số ít? / Combien coûtent + danh từ số nhiều? - Combien de luôn đi với danh từ không có mạo từ.',
          formula: 'Combien coûte + S ?  /  Combien de/d\' + Nom + ... ?',
          examples: [
            { fr: 'Combien coûte ce livre ? - Il coûte 12 euros.', vi: 'Cuốn sách này giá bao nhiêu? - Nó có giá 12 euro.' },
            { fr: 'Combien de stylos veux-tu acheter ?', vi: 'Bạn muốn mua bao nhiêu cây bút mực?' }
          ]
        },
        dialogue: [
          { spk: 'Marchand', fr: 'Bonjour jeune homme ! Que désirez-vous ?', vi: 'Xin chào cháu! Cháu muốn mua gì nào?' },
          { spk: 'Minh', fr: 'Bonjour monsieur. Combien coûte un kilo de fraises ?', vi: 'Cháu chào bác. Một cân dâu tây giá bao nhiêu ạ?' },
          { spk: 'Marchand', fr: 'C\'est 4 euros et 50 centimes le kilo.', vi: 'Dâu tây giá 4 euro 50 cent một cân cháu nhé.' }
        ],
        phonetics: 'Quy tắc nối âm tiền tệ: 2 euros [dø.zøʁo], 6 euros [si.zøʁo], 10 euros [di.zøʁo].',
        quiz: {
          q: 'Điền từ thích hợp: "____ de pommes voulez-vous acheter ?"',
          options: ['Combien', 'Comment', 'Où', 'Pourquoi'],
          ans: 0,
          exp: 'Hỏi số lượng ta dùng cụm từ "Combien de".'
        }
      },
      {
        num: '3.2',
        title: 'L\'argent de poche (Tiền tiêu vặt)',
        target: 'Nói về việc quản lý tiền tiêu vặt, tiết kiệm và chia động từ nhóm 1 đặc biệt: acheter (mua).',
        vocab: [
          { fr: 'L\'argent de poche', vi: 'Tiền tiêu vặt', pron: '[aʁʒɑ̃ də pɔʃ]', type: 'Danh từ giống đực' },
          { fr: 'Économiser', vi: 'Tiết kiệm tiền', pron: '[ekɔnɔmize]', type: 'Động từ' },
          { fr: 'Dépenser', vi: 'Tiêu xài / Chi tiêu', pron: '[depɑ̃se]', type: 'Động từ' },
          { fr: 'La tirelire', vi: 'Con heo đất tiết kiệm', pron: '[tiʁliʁ]', type: 'Danh từ giống cái' },
          { fr: 'Acheter', vi: 'Mua', pron: '[aʃte]', type: 'Động từ nhóm 1' },
          { fr: 'Chaque semaine', vi: 'Mỗi tuần', pron: '[ʃak səmɛn]', type: 'Cụm từ' }
        ],
        grammar: {
          title: 'Chia động từ nhóm 1 có biến đổi dấu: acheter (thêm dấu huyền è)',
          desc: 'J\'achète, tu achètes, il/elle achète, nous achetons, vous achetez, ils/elles achètent.',
          formula: 'Sujet + achète/achetons/achetez/achètent',
          examples: [
            { fr: 'J\'achète une BD avec mon argent de poche.', vi: 'Tôi mua một cuốn truyện tranh bằng tiền tiêu vặt của mình.' },
            { fr: 'Nous achetons des bonbons.', vi: 'Chúng tôi mua kẹo.' }
          ]
        },
        dialogue: [
          { spk: 'Lucas', fr: 'Tu reçois de l\'argent de poche, Minh ?', vi: 'Cậu có nhận được tiền tiêu vặt không Minh?' },
          { spk: 'Minh', fr: 'Oui, mes parents me donnent 5 euros par semaine. Je le mets dans ma tirelire pour acheter un jeu vidéo.', vi: 'Có chứ, bố mẹ cho mình 5 euro mỗi tuần. Mình bỏ ống heo tiết kiệm để mua đĩa game.' }
        ],
        phonetics: 'Âm [ɛ] mở khi có dấu huyền trong "j\'achète" khác với âm [ə] lướt trong "nous achetons".',
        quiz: {
          q: 'Chia động từ "acheter" với chủ ngữ "Tu":',
          options: ['Tu achetes', 'Tu achètes', 'Tu achetons', 'Tu achetez'],
          ans: 1,
          exp: 'Ngôi Tu của acheter có dấu huyền trên âm e: "Tu achètes".'
        }
      },
      {
        num: '3.3',
        title: 'Comment payer ? (Thanh toán như thế nào?)',
        target: 'Các phương thức thanh toán trong cửa hàng và chia động từ payer (thanh toán/trả tiền).',
        vocab: [
          { fr: 'Payer', vi: 'Thanh toán / Trả tiền', pron: '[peje]', type: 'Động từ' },
          { fr: 'En espèces / En liquide', vi: 'Bằng tiền mặt', pron: '[ɑ̃n ɛspɛs]', type: 'Phương thức' },
          { fr: 'Par carte bancaire', vi: 'Bằng thẻ ngân hàng', pron: '[paʁ kaʁt bɑ̃kɛʁ]', type: 'Phương thức' },
          { fr: 'Le ticket de caisse', vi: 'Hóa đơn / Biên lai tính tiền', pron: '[tikɛ də kɛs]', type: 'Danh từ giống đực' },
          { fr: 'La monnaie', vi: 'Tiền lẻ / Tiền thối lại', pron: '[mɔnɛ]', type: 'Danh từ giống cái' },
          { fr: 'La caisse', vi: 'Quầy thu ngân', pron: '[kɛs]', type: 'Danh từ giống cái' }
        ],
        grammar: {
          title: 'Động từ "payer" (thay y thành i hoặc giữ nguyên y)',
          desc: 'Je paie (hoặc paye), tu paies, il/elle paie, nous payons, vous payez, ils/elles paient.',
          formula: 'Payer + en espèces / par carte bancaire',
          examples: [
            { fr: 'Comment voulez-vous payer ? - Je paie par carte bancaire.', vi: 'Quý khách muốn thanh toán thế nào? - Tôi trả bằng thẻ ngân hàng.' }
          ]
        },
        dialogue: [
          { spk: 'Caissière', fr: 'Cela fait 15 euros au total. Vous payez comment ?', vi: 'Của cháu hết tổng cộng 15 euro. Cháu thanh toán thế nào ạ?' },
          { spk: 'Pierre', fr: 'Je paie en espèces. Voici un billet de 20 euros.', vi: 'Cháu trả bằng tiền mặt. Gửi cô tờ 20 euro ạ.' },
          { spk: 'Caissière', fr: 'Merci ! Voici votre monnaie : 5 euros et votre ticket.', vi: 'Cảm ơn cháu! Đây là tiền thối lại 5 euro và hóa đơn của cháu nhé.' }
        ],
        phonetics: 'Quy tắc phát âm âm [j] mềm trong "payer" [pe.je], "payons" [pe.jɔ̃].',
        quiz: {
          q: 'Khi trả bằng tiền mặt, người Pháp nói:',
          options: ['Je paie par carte', 'Je paie en espèces', 'Je paie par chèque', 'Je paie par téléphone'],
          ans: 1,
          exp: '"En espèces" (hoặc en liquide) nghĩa là thanh toán bằng tiền mặt.'
        }
      },
      {
        num: '3.4',
        title: 'J\'espère trouver ce que je cherche ! (Tôi hy vọng tìm thấy thứ tôi đang tìm!)',
        target: 'Nói về sở thích mua sắm, hy vọng tìm được món đồ ưng ý và chia động từ espérer (hy vọng).',
        vocab: [
          { fr: 'Espérer', vi: 'Hy vọng / Mong chờ', pron: '[ɛspeʁe]', type: 'Động từ' },
          { fr: 'Chercher', vi: 'Tìm kiếm', pron: '[ʃɛʁʃe]', type: 'Động từ' },
          { fr: 'Trouver', vi: 'Tìm thấy / Bắt gặp', pron: '[tʁuve]', type: 'Động từ' },
          { fr: 'La vitrine', vi: 'Tủ kính trưng bày hàng mẫu', pron: '[vitʁin]', type: 'Danh từ giống cái' },
          { fr: 'Le centre commercial', vi: 'Trung tâm thương mại', pron: '[sɑ̃tʁ kɔmɛʁsjal]', type: 'Danh từ giống đực' }
        ],
        grammar: {
          title: 'Chia động từ espérer (đổi dấu sắc é thành dấu huyền è ở các ngôi số ít)',
          desc: 'J\'espère, tu espères, il/elle espère, nous espérons, vous espérez, ils/elles espèrent.',
          formula: 'Espérer + Động từ nguyên mẫu (hy vọng làm gì)',
          examples: [
            { fr: 'J\'espère acheter un joli cadeau pour maman.', vi: 'Tôi hy vọng mua được món quà đẹp tặng mẹ.' }
          ]
        },
        dialogue: [
          { spk: 'Camille', fr: 'Qu\'est-ce que tu cherches au magasin ?', vi: 'Cậu đang tìm kiếm món gì ở cửa hàng thế?' },
          { spk: 'Lan', fr: 'J\'espère trouver une belle boîte de crayons de couleur pour mon cours de dessin !', vi: 'Mình hy vọng tìm được hộp bút chì màu thật đẹp cho tiết học vẽ!' }
        ],
        phonetics: 'Biến đổi dấu sắc và dấu huyền trong chia động từ: espérer -> j\'espère [ɛspɛʁ].',
        quiz: {
          q: 'Chia động từ "espérer" với ngôi "Il":',
          options: ['Il espere', 'Il espère', 'Il espérons', 'Il espérent'],
          ans: 1,
          exp: 'Ngôi Il của espérer có dấu huyền: "Il espère".'
        }
      },
      {
        num: '3.5',
        title: 'Ma collection préférée (Bộ sưu tập yêu thích của tôi)',
        target: 'Giới thiệu về sở thích sưu tầm tem, huy hiệu, mô hình đồ chơi và giá trị của các món đồ sưu tầm.',
        vocab: [
          { fr: 'La collection', vi: 'Bộ sưu tập', pron: '[kɔlɛksjɔ̃]', type: 'Danh từ giống cái' },
          { fr: 'Le timbre', vi: 'Con tem bưu chính', pron: '[tɛ̃bʁ]', type: 'Danh từ giống đực' },
          { fr: 'La figurine', vi: 'Mô hình nhân vật / Tượng nhỏ', pron: '[figyʁin]', type: 'Danh từ giống cái' },
          { fr: 'Les cartes postales', vi: 'Bưu thiếp / Bưu ảnh', pron: '[kaʁt pɔstal]', type: 'Danh từ giống cái số nhiều' },
          { fr: 'Collectionner', vi: 'Sưu tầm / Thu thập', pron: '[kɔlɛksjɔne]', type: 'Động từ' }
        ],
        grammar: {
          title: 'Động từ "collectionner" và bổ ngữ trực tiếp',
          desc: 'Je collectionne les timbres, tu collectionnes les figurines, il collectionne les pièces de monnaie.',
          formula: 'Sujet + collectionne + Danh từ số nhiều',
          examples: [
            { fr: 'Je collectionne les timbres français depuis deux ans.', vi: 'Tôi sưu tầm tem nước Pháp được hai năm rồi.' }
          ]
        },
        dialogue: [
          { spk: 'Pierre', fr: 'Regarde ma collection de timbres du monde entier !', vi: 'Minh xem bộ sưu tập tem khắp thế giới của mình này!' },
          { spk: 'Minh', fr: 'C\'est passionnant ! Moi, je collectionne les petites voitures miniatures.', vi: 'Thú vị thật đấy! Còn mình thì thích sưu tầm ô tô đồ chơi thu nhỏ.' }
        ],
        phonetics: 'Âm mũi [ɛ̃] trong "timbre" [tɛ̃bʁ].',
        quiz: {
          q: '"Con tem bưu chính" trong tiếng Pháp là:',
          options: ['Le livre', 'Le timbre', 'Le cahier', 'Le crayon'],
          ans: 1,
          exp: '"Le timbre" là con tem bưu chính.'
        }
      }
    ],
    culture: {
      title: 'Đồng tiền Euro (€) và Văn hóa chợ phiên Marché truyền thống tại Pháp',
      content: 'Nước Pháp sử dụng đồng tiền chung châu Âu Euro (€) từ năm 2002. Người Pháp có nét văn hóa độc đáo là đi chợ phiên cuối tuần (le marché plein air): nơi các bác nông dân bày bán bánh mì baguettes nóng hổi, phô mai tự làm, mật ong hoa oải hương và hoa quả tươi ngon, mang lại không khí cộng đồng rộn ràng và thân thuộc.'
    }
  },

  // UNITÉ 4: La magie du climat
  {
    id: 4,
    titleFr: 'Unité 4 – La magie du climat',
    titleVi: 'Sự kỳ diệu của khí hậu',
    theme: 'Mùa trong năm, khí hậu, cảm xúc, cảm giác, biến đổi khí hậu; cách nói về thời tiết và thời gian; câu vô nhân xưng chỉ thời tiết, câu hỏi về tình trạng thời tiết',
    summary: 'Khám phá 4 mùa (xuân, hạ, thu, đông), các hiện tượng thời tiết đặc trưng qua cấu trúc vô nhân xưng "Il fait...", "Il pleut", "Il neige"; cảm giác nóng lạnh và nâng cao ý thức về biến đổi khí hậu toàn cầu.',
    lessons: [
      {
        num: '4.1',
        title: 'Les quatre saisons (Bốn mùa trong năm)',
        target: 'Nói tên 4 mùa trong năm và giới từ đi cùng mùa (au printemps, en été, en automne, en hiver).',
        vocab: [
          { fr: 'Le printemps', vi: 'Mùa xuân', pron: '[pʁɛ̃tɑ̃]', type: 'Danh từ giống đực' },
          { fr: 'L\'été', vi: 'Mùa hè', pron: '[ete]', type: 'Danh từ giống đực' },
          { fr: 'L\'automne', vi: 'Mùa thu', pron: '[otɔn]', type: 'Danh từ giống đực' },
          { fr: 'L\'hiver', vi: 'Mùa đông', pron: '[ivɛʁ]', type: 'Danh từ giống đực' },
          { fr: 'La saison', vi: 'Mùa trong năm', pron: '[sɛzɔ̃]', type: 'Danh từ giống cái' }
        ],
        grammar: {
          title: 'Giới từ đi trước 4 mùa: "au" printemps, "en" été, "en" automne, "en" hiver',
          desc: 'Mùa xuân dùng "au" vì bắt đầu bằng phụ âm p; ba mùa còn lại bắt đầu bằng nguyên âm hoặc h câm nên dùng "en".',
          formula: 'Au printemps  /  En été  /  En automne  /  En hiver',
          examples: [
            { fr: 'Au printemps, les fleurs s\'épanouissent.', vi: 'Vào mùa xuân, muôn hoa đua nở.' },
            { fr: 'En hiver, il fait très froid.', vi: 'Vào mùa đông, trời rất lạnh.' }
          ]
        },
        dialogue: [
          { spk: 'Marie', fr: 'Quelle est ta saison préférée, Minh ?', vi: 'Mùa yêu thích nhất của cậu là mùa nào Minh?' },
          { spk: 'Minh', fr: 'J\'adore l\'automne parce que le temps est doux et les feuilles jaunissent.', vi: 'Mình mê mùa thu vì thời tiết dịu mát và lá cây chuyển sang màu vàng óng.' }
        ],
        phonetics: 'Âm câm "m" trong "automne" đọc là [otɔn] (không phát âm chữ m).',
        quiz: {
          q: 'Giới từ đi trước mùa xuân (printemps) là:',
          options: ['en', 'au', 'à la', 'dans'],
          ans: 1,
          exp: 'Duy nhất mùa xuân dùng "au printemps", ba mùa còn lại dùng "en".'
        }
      },
      {
        num: '4.2',
        title: 'Quel temps fait-il ? (Thời tiết thế nào?)',
        target: 'Hỏi và miêu tả thời tiết bằng các câu trúc vô nhân xưng "Il fait beau/froid", "Il pleut", "Il neige".',
        vocab: [
          { fr: 'Il fait beau / Il fait mauvais', vi: 'Trời đẹp / Trời xấu', pron: '[il fɛ bo / il fɛ movɛ]', type: 'Mẫu câu' },
          { fr: 'Il fait chaud / Il fait froid', vi: 'Trời nóng / Trời lạnh', pron: '[il fɛ ʃo / il fɛ fʁwa]', type: 'Mẫu câu' },
          { fr: 'Il y a du soleil / du vent', vi: 'Có nắng / Có gió', pron: '[il j a dy sɔlɛj / dy vɑ̃]', type: 'Mẫu câu' },
          { fr: 'Il pleut', vi: 'Trời mưa (động từ pleuvoir)', pron: '[il plø]', type: 'Động từ vô nhân xưng' },
          { fr: 'Il neige', vi: 'Tuyết rơi (động từ neiger)', pron: '[il nɛʒ]', type: 'Động từ vô nhân xưng' }
        ],
        grammar: {
          title: 'Cấu trúc vô nhân xưng miêu tả thời tiết với đại từ "Il"',
          desc: 'Chủ ngữ "Il" ở đây là đại từ giả (vô nhân xưng), không chỉ người cụ thể.',
          formula: 'Quel temps fait-il ?  --->  Il fait + Tính từ  /  Il y a + du/de la + Danh từ  /  Il pleut / Il neige',
          examples: [
            { fr: 'Aujourd\'hui, il fait beau et il y a du soleil.', vi: 'Hôm nay trời đẹp và có nắng.' },
            { fr: 'En hiver à Paris, il neige souvent.', vi: 'Vào mùa đông ở Paris, tuyết rơi thường xuyên.' }
          ]
        },
        dialogue: [
          { spk: 'Pierre', fr: 'Allô Minh ! Quel temps fait-il à Hanoï aujourd\'hui ?', vi: 'A lô Minh à! Thời tiết ở Hà Nội hôm nay thế nào?' },
          { spk: 'Minh', fr: 'Il fait très chaud et il y a du soleil ! Et à Paris ? - Ici, il pleut et il fait un peu frais.', vi: 'Trời rất nóng và nắng chói chang! Còn ở Paris thì sao? - Ở đây trời mưa và hơi se lạnh.' }
        ],
        phonetics: 'Nối âm trong câu hỏi thời tiết: "Quel temps fait-il ?" đọc nối [kɛl tɑ̃ fɛ.til].',
        quiz: {
          q: 'Để nói "Trời mưa", câu tiếng Pháp chuẩn là:',
          options: ['Il fait pluie', 'Il pleut', 'Il y a pluie', 'Il est pleut'],
          ans: 1,
          exp: '"Il pleut" là dạng chia vô nhân xưng của động từ pleuvoir (trời mưa).'
        }
      },
      {
        num: '4.3',
        title: 'J\'ai chaud, j\'ai froid (Tôi thấy nóng, tôi thấy lạnh)',
        target: 'Biểu đạt cảm giác cơ thể với động từ avoir (avoir chaud, avoir froid, avoir soif, avoir faim).',
        vocab: [
          { fr: 'Avoir chaud', vi: 'Cảm thấy nóng', pron: '[avwaʁ ʃo]', type: 'Cụm ĐT' },
          { fr: 'Avoir froid', vi: 'Cảm thấy lạnh', pron: '[avwaʁ fʁwa]', type: 'Cụm ĐT' },
          { fr: 'Avoir soif', vi: 'Cảm thấy khát nước', pron: '[avwaʁ swaf]', type: 'Cụm ĐT' },
          { fr: 'Avoir faim', vi: 'Cảm thấy đói bụng', pron: '[avwaʁ fɛ̃]', type: 'Cụm ĐT' },
          { fr: 'Mettre un manteau', vi: 'Mặc áo khoác ấm', pron: '[mɛtʁ ɛ̃ mɑ̃to]', type: 'Cụm ĐT' }
        ],
        grammar: {
          title: 'Cấu trúc chỉ cảm giác: Avoir + Danh từ cảm giác (KHÔNG dùng être)',
          desc: 'Trong tiếng Pháp, nói "Tôi lạnh" phải dùng "J\'ai froid" (tôi có cảm giác lạnh), KHÔNG được nói "Je suis froid" (sai ngữ pháp).',
          formula: 'Sujet + avoir (chia thì hiện tại) + chaud / froid / faim / soif',
          examples: [
            { fr: 'J\'ai froid, je mets mon manteau.', vi: 'Tôi thấy lạnh, tôi mặc áo khoác.' },
            { fr: 'Il a soif, il boit de l\'eau fraîche.', vi: 'Cậu ấy khát nước, cậu ấy uống nước mát.' }
          ]
        },
        dialogue: [
          { spk: 'Maman', fr: 'Tu as froid, Lucas ?', vi: 'Con thấy lạnh không Lucas?' },
          { spk: 'Lucas', fr: 'Oui, maman. J\'ai très froid parce que le vent souffle fort dehors.', vi: 'Dạ có mẹ ơi. Con thấy rất lạnh vì ngoài trời gió đang thổi mạnh lắm.' }
        ],
        phonetics: 'Âm [wa] trong "froid" [fʁwa] và "soif" [swaf].',
        quiz: {
          q: 'Cách nói đúng cho "Tôi cảm thấy nóng" là:',
          options: ['Je suis chaud', 'J\'ai chaud', 'Je fais chaud', 'J\'ai le chaud'],
          ans: 1,
          exp: 'Tiếng Pháp dùng động từ avoir để chỉ cảm giác: "J\'ai chaud".'
        }
      },
      {
        num: '4.4',
        title: 'Protégeons notre planète ! (Hãy bảo vệ hành tinh của chúng ta!)',
        target: 'Hiểu về hiện tượng biến đổi khí hậu toàn cầu và các hành động nhỏ để bảo vệ môi trường.',
        vocab: [
          { fr: 'Le changement climatique', vi: 'Biến đổi khí hậu', pron: '[ʃɑ̃ʒmɑ̃ klimatik]', type: 'Danh từ giống đực' },
          { fr: 'La Terre / La planète', vi: 'Trái Đất / Hành tinh xanh', pron: '[tɛʁ / planɛt]', type: 'Danh từ giống cái' },
          { fr: 'La pollution', vi: 'Sự ô nhiễm môi trường', pron: '[pɔlysjɔ̃]', type: 'Danh từ giống cái' },
          { fr: 'Recycler les déchets', vi: 'Tái chế rác thải', pron: '[ʁəsikle le deʃɛ]', type: 'Cụm ĐT' },
          { fr: 'Planter des arbres', vi: 'Trồng thêm cây xanh', pron: '[plɑ̃te de zaʁbʁ]', type: 'Cụm ĐT' },
          { fr: 'Éteindre la lumière', vi: 'Tắt đèn khi ra khỏi phòng', pron: '[etɛ̃dʁ la lymjɛʁ]', type: 'Cụm ĐT' }
        ],
        grammar: {
          title: 'Câu mệnh lệnh rủ rê với ngôi "Nous": Protégeons ! Recyclons !',
          desc: 'Dùng động từ ở ngôi Nous nhưng bỏ đại từ chủ ngữ để tạo lời kêu gọi hành động chung.',
          formula: 'Verbe (ngôi Nous bỏ chủ ngữ) + COD !',
          examples: [
            { fr: 'Protégeons notre belle planète !', vi: 'Chúng ta hãy cùng bảo vệ hành tinh tươi đẹp của mình!' },
            { fr: 'Éteignons les lumières inutiles !', vi: 'Chúng ta hãy tắt những bóng đèn không cần thiết!' }
          ]
        },
        dialogue: [
          { spk: 'Maître', fr: 'Que pouvons-nous faire pour lutter contre le réchauffement climatique ?', vi: 'Chúng ta có thể làm gì để chống lại sự nóng lên toàn cầu các em?' },
          { spk: 'Élèves', fr: 'Nous pouvons aller à l\'école à vélo, trier les déchets et planter des fleurs !', vi: 'Chúng em có thể đi học bằng xe đạp, phân loại rác và trồng thêm hoa ạ!' }
        ],
        phonetics: 'Đuôi "-tion" trong "pollution" luôn phát âm là [sjɔ̃].',
        quiz: {
          q: 'Khẩu hiệu "Hãy bảo vệ Trái Đất của chúng ta!" trong tiếng Pháp là:',
          options: ['Protégez la Terre', 'Protégeons notre planète', 'Protéger la planète', 'Nous protégeons'],
          ans: 1,
          exp: '"Protégeons notre planète !" là thể mệnh lệnh ngôi Nous kêu gọi hành động chung.'
        }
      },
      {
        num: '4.5',
        title: 'Le bulletin météo des vacances (Bản tin thời tiết kỳ nghỉ)',
        target: 'Đọc hiểu bản tin dự báo thời tiết truyền hình và lên kế hoạch cho kỳ nghỉ dã ngoại.',
        vocab: [
          { fr: 'Le bulletin météo', vi: 'Bản tin dự báo thời tiết', pron: '[byltɛ̃ meteo]', type: 'Danh từ giống đực' },
          { fr: 'La température', vi: 'Nhiệt độ', pron: '[tɑ̃peʁatyʁ]', type: 'Danh từ giống cái' },
          { fr: 'Le degré Celsius (°C)', vi: 'Độ C', pron: '[dəgʁe sɛlsjys]', type: 'Đơn vị đo' },
          { fr: 'Le ciel dégagé', vi: 'Bầu trời quang mây trong xanh', pron: '[sjɛl degaʒe]', type: 'Cụm từ' },
          { fr: 'Une averse', vi: 'Trận mưa rào', pron: '[avɛʁs]', type: 'Danh từ giống cái' }
        ],
        grammar: {
          title: 'Cách nói nhiệt độ trong tiếng Pháp: Il fait + [Số] degrés',
          desc: 'Diễn đạt nhiệt độ hiện tại.',
          formula: 'Il fait + [Số] + degrés',
          examples: [
            { fr: 'Aujourd\'hui, il fait 25 degrés à Paris.', vi: 'Hôm nay nhiệt độ ở Paris là 25 độ C.' }
          ]
        },
        dialogue: [
          { spk: 'Présentateur', fr: 'Demain, sur toute la côte sud, le ciel sera bleu avec 28 degrés au thermomètre !', vi: 'Ngày mai trên khắp bờ biển phía nam, bầu trời sẽ trong xanh với nhiệt độ 28 độ C trên nhiệt kế!' }
        ],
        phonetics: 'Âm [y] trong "température" và "bulletin".',
        quiz: {
          q: 'Để nói "Nhiệt độ hôm nay là 30 độ", ta dùng mẫu câu:',
          options: ['Il a 30 degrés', 'Il fait 30 degrés', 'Il est 30 degrés', 'Il fait 30 ans'],
          ans: 1,
          exp: 'Nói nhiệt độ thời tiết dùng "Il fait + [Số] degrés".'
        }
      }
    ],
    culture: {
      title: 'Khí hậu nước Pháp và Hoạt động trượt tuyết mùa đông ở dãy Alps',
      content: 'Nước Pháp có khí hậu ôn đới dễ chịu với 4 mùa rõ rệt. Vào mùa đông, dãy núi Alps hùng vĩ phủ trắng tuyết mịn là thiên đường nghỉ dưỡng và thể thao mùa đông nổi tiếng khắp thế giới. Trẻ em Pháp rất háo hức mong chờ kỳ nghỉ đông để cùng gia đình học trượt tuyết và quây quần bên nồi lẩu phô mai fondue nóng hổi.'
    }
  },

  // UNITÉ 5: Mes loisirs
  {
    id: 5,
    titleFr: 'Unité 5 – Mes loisirs',
    titleVi: 'Thời gian rảnh rỗi và sở thích của tôi',
    theme: 'Sở thích, hoạt động giải trí, bình luận tích cực/tiêu cực, thể thao, cảm xúc; câu hỏi phủ định, c\'est + tính từ, ce qui est + tính từ, đại từ sở hữu',
    summary: 'Chia sẻ các môn thể thao yêu thích (bóng đá, bơi lội, judo), các hoạt động nghệ thuật; đưa ra nhận xét khen/chê; sử dụng cấu trúc nhấn mạnh "C\'est + Adjectif" và đại từ sở hữu.',
    lessons: [
      {
        num: '5.1',
        title: 'Les sports et les activités (Thể thao và các hoạt động)',
        target: 'Phân biệt cách dùng "jouer à" (chơi môn thể thao đồng đội/có bóng) và "faire de" (tập luyện các môn thể thao/năng khiếu).',
        vocab: [
          { fr: 'Le football / Le basket', vi: 'Môn bóng đá / Bóng rổ', pron: '[futbɔl / baskɛt]', type: 'Danh từ giống đực' },
          { fr: 'La natation', vi: 'Môn bơi lội', pron: '[natasjɔ̃]', type: 'Danh từ giống cái' },
          { fr: 'Le judo / Le karaté', vi: 'Môn võ Judo / Karate', pron: '[ʒydo / kaʁate]', type: 'Danh từ giống đực' },
          { fr: 'Le piano / La guitare', vi: 'Đàn piano / Đàn ghi ta', pron: '[pjano / gitaʁ]', type: 'Nhạc cụ' },
          { fr: 'Jouer à (+ môn bóng/trò chơi)', vi: 'Chơi (bóng đá, game...)', pron: '[ʒwe a]', type: 'Cụm ĐT' },
          { fr: 'Faire de (+ môn thể thao/nhạc cụ)', vi: 'Tập luyện (bơi lội, đàn...)', pron: '[fɛʁ də]', type: 'Cụm ĐT' }
        ],
        grammar: {
          title: 'Phân biệt: Jouer à + le/la/les  vs  Faire de + le/la/les',
          desc: 'Jouer à + le = au football, aux échecs. Faire de + le = du judo, de la natation, de l\'équitation.',
          formula: 'Jouer + à / au / à la / aux  <--->  Faire + de / du / de la / de l\' / des',
          examples: [
            { fr: 'Je joue au football avec mes copains.', vi: 'Tôi chơi bóng đá cùng bạn bè.' },
            { fr: 'Ma sœur fait de la natation chaque samedi.', vi: 'Chị gái tôi tập bơi vào mỗi thứ Bảy.' }
          ]
        },
        dialogue: [
          { spk: 'Pierre', fr: 'Quel sport fais-tu, Minh ?', vi: 'Cậu tập môn thể thao nào thế Minh?' },
          { spk: 'Minh', fr: 'Je fais du judo et je joue souvent au basket après l\'école.', vi: 'Mình tập võ Judo và mình thường chơi bóng rổ sau giờ tan học.' }
        ],
        phonetics: 'Âm [ʒ] trong "jouer" [ʒwe] và "judo" [ʒy.do].',
        quiz: {
          q: 'Điền giới từ thích hợp: "Elle fait ____ natation tous les mercredis."',
          options: ['au', 'de la', 'à la', 'du'],
          ans: 1,
          exp: '"Faire de" đi với danh từ giống cái "la natation" -> "de la natation".'
        }
      },
      {
        num: '5.2',
        title: 'Donner son avis : J\'adore ou je déteste ? (Đưa ra nhận xét: Yêu thích hay không thích?)',
        target: 'Bình luận tích cực và tiêu cực về một hoạt động với cấu trúc "C\'est + tính từ" và "Ce qui est + tính từ...".',
        vocab: [
          { fr: 'Passionnant(e)', vi: 'Hấp dẫn / Cuốn hút', pron: '[pasjɔnɑ̃]', type: 'Tính từ' },
          { fr: 'Ennuyeux / Ennuyeuse', vi: 'Nhàm chán / Tẻ nhạt', pron: '[ɑ̃nɥijø / ɑ̃nɥijøz]', type: 'Tính từ' },
          { fr: 'Génial(e) !', vi: 'Tuyệt đỉnh / Tuyệt vời!', pron: '[ʒenjal]', type: 'Tính từ cảm thán' },
          { fr: 'Fatigant(e)', vi: 'Mệt mỏi / Mất sức', pron: '[fatigɑ̃]', type: 'Tính từ' },
          { fr: 'C\'est super !', vi: 'Thật là tuyệt vời!', pron: '[sɛ sypɛʁ]', type: 'Mẫu câu' }
        ],
        grammar: {
          title: 'Cấu trúc nhấn mạnh: C\'est + Tính từ (luôn ở giống đực số ít)',
          desc: 'Khi đưa ra nhận xét chung về một sự việc, tính từ sau "C\'est" luôn ở giống đực số ít.',
          formula: 'C\'est + Adjectif (masculin singulier) !',
          examples: [
            { fr: 'Faire du vélo le week-end, c\'est génial !', vi: 'Đạp xe cuối tuần thật là tuyệt cú mèo!' },
            { fr: 'Regarder ce film, c\'est passionnant.', vi: 'Xem bộ phim này thật cuốn hút.' }
          ]
        },
        dialogue: [
          { spk: 'Lan', fr: 'Tu aimes jouer aux jeux vidéo ?', vi: 'Cậu có thích chơi game không?' },
          { spk: 'Camille', fr: 'Oui, c\'est très amusant ! Mais parfois, c\'est un peu fatigant pour les yeux.', vi: 'Có chứ, vui lắm! Nhưng đôi khi cũng hơi mỏi mắt một chút.' }
        ],
        phonetics: 'Âm mũi [ɑ̃] trong "passionnant" và "fatigant".',
        quiz: {
          q: 'Khi nhận xét chung "Chơi cờ vua thật tuyệt!", câu tiếng Pháp đúng là:',
          options: ['C\'est génial', 'C\'est géniale', 'Ce sont génial', 'C\'est géniaux'],
          ans: 0,
          exp: 'Sau "C\'est", tính từ luôn ở dạng giống đực số ít: "C\'est génial".'
        }
      },
      {
        num: '5.3',
        title: 'Les pronoms possessifs (Đại từ sở hữu: Của tôi, của bạn)',
        target: 'Sử dụng đại từ sở hữu để tránh lặp lại danh từ (le mien, la mienne, le tien, la tienne...).',
        vocab: [
          { fr: 'Le mien / La mienne', vi: 'Cái của tôi (giống đực / giống cái)', pron: '[lə mjɛ̃ / la mjɛn]', type: 'Đại từ sở hữu' },
          { fr: 'Le tien / La tienne', vi: 'Cái của bạn (giống đực / giống cái)', pron: '[lə tjɛ̃ / la tjɛn]', type: 'Đại từ sở hữu' },
          { fr: 'Le sien / La sienne', vi: 'Cái của anh ấy / cô ấy', pron: '[lə sjɛ̃ / la sjɛn]', type: 'Đại từ sở hữu' },
          { fr: 'Les miens / Les miennes', vi: 'Những cái của tôi', pron: '[le mjɛ̃ / le mjɛn]', type: 'Số nhiều' }
        ],
        grammar: {
          title: 'Đại từ sở hữu thay thế cho "Tính từ sở hữu + Danh từ"',
          desc: 'Giúp câu văn cô đọng, không bị lặp từ.',
          formula: 'Mon vélo -> Le mien  /  Ta raquette -> La tienne  /  Mes rollers -> Les miens',
          examples: [
            { fr: 'Ton vélo est bleu, mais le mien est rouge.', vi: 'Xe đạp của bạn màu xanh, nhưng cái của tôi màu đỏ.' }
          ]
        },
        dialogue: [
          { spk: 'Lucas', fr: 'C\'est ta raquette de tennis, Minh ?', vi: 'Đây là cây vợt tennis của cậu hả Minh?' },
          { spk: 'Minh', fr: 'Non, ce n\'est pas la mienne, c\'est celle de Pierre. La mienne est dans mon casier.', vi: 'Không, không phải cái của mình, là cái của Pierre đấy. Cái của mình ở trong tủ đồ cơ.' }
        ],
        phonetics: 'Phân biệt âm [jɛ̃] trong "le mien" và [jɛn] trong "la mienne".',
        quiz: {
          q: 'Thay thế cụm từ "mon livre" bằng đại từ sở hữu thích hợp:',
          options: ['la mienne', 'le mien', 'le tien', 'les miens'],
          ans: 1,
          exp: '"Livre" là danh từ giống đực nên "mon livre" thay bằng "le mien".'
        }
      },
      {
        num: '5.4',
        title: 'Tu ne viens pas avec nous ? (Cậu không đi cùng tụi mình à?)',
        target: 'Đáp lại câu hỏi phủ định bằng "Si" (Có chứ!) thay vì "Oui".',
        vocab: [
          { fr: 'Si !', vi: 'Có chứ! (Khẳng định lại câu hỏi phủ định)', pron: '[si]', type: 'Từ đối đáp' },
          { fr: 'Non', vi: 'Không (đồng tình với phủ định)', pron: '[nɔ̃]', type: 'Từ đối đáp' },
          { fr: 'La piscine', vi: 'Hồ bơi', pron: '[pisin]', type: 'Danh từ giống cái' },
          { fr: 'Faire du roller', vi: 'Trượt pa tanh', pron: '[fɛʁ dy ʁɔlœʁ]', type: 'Cụm ĐT' }
        ],
        grammar: {
          title: 'Cách trả lời câu hỏi phủ định: "Si" (Có chứ!) vs "Non" (Không)',
          desc: 'Khi người hỏi dùng câu phủ định (Tu ne viens pas ?), nếu muốn nói "CÓ, TÔI CÓ ĐI", tiếng Pháp BẮT BUỘC dùng "Si !", không được dùng "Oui".',
          formula: 'Câu hỏi phủ định: Tu ne... pas... ?\n- Muốn khẳng định: Si, je viens !\n- Muốn phủ định: Non, je ne viens pas.',
          examples: [
            { fr: 'Tu n\'aimes pas le tennis ? - Si, j\'adore le tennis !', vi: 'Cậu không thích quần vợt à? - Có chứ, mình mê quần vợt lắm!' }
          ]
        },
        dialogue: [
          { spk: 'Pierre', fr: 'Tu ne fais pas de vélo cet après-midi ?', vi: 'Chiều nay cậu không đi đạp xe à?' },
          { spk: 'Minh', fr: 'Si, bien sûr ! J\'arrive tout de suite avec mon casque !', vi: 'Có chứ, đương nhiên rồi! Mình đội mũ bảo hiểm ra ngay đây!' }
        ],
        phonetics: 'Nguyên âm [i] vang sáng và dứt khoát trong từ "Si !".',
        quiz: {
          q: 'Khi bạn hỏi: "Tu ne manges pas ?" và bạn muốn đáp "Có, tôi có ăn", từ cần dùng là:',
          options: ['Oui', 'Si', 'Non', 'Jamais'],
          ans: 1,
          exp: 'Đáp lại câu hỏi phủ định để khẳng định hành động, bắt buộc dùng "Si !".'
        }
      },
      {
        num: '5.5',
        title: 'Mon week-end sportif et artistique (Cuối tuần thể thao và nghệ thuật)',
        target: 'Viết bài văn ngắn kể về các hoạt động giải trí yêu thích cuối tuần.',
        vocab: [
          { fr: 'Un tournoi', vi: 'Giải đấu thể thao', pron: '[tuʁnwa]', type: 'Danh từ giống đực' },
          { fr: 'Un concert', vi: 'Buổi hòa nhạc', pron: '[kɔ̃sɛʁ]', type: 'Danh từ giống đực' },
          { fr: 'Gagner / Perdre', vi: 'Chiến thắng / Thua cuộc', pron: '[gaɲe / pɛʁdʁ]', type: 'Động từ' },
          { fr: 'Une médaille', vi: 'Huy chương', pron: '[medaj]', type: 'Danh từ giống cái' }
        ],
        grammar: {
          title: 'Liên kết ý trong bài viết: D\'abord, Ensuite, Puis, Enfin',
          desc: 'Dùng các từ nối thời gian để bài văn mạch lạc.',
          formula: 'D\'abord (Trước tiên) -> Ensuite (Sau đó) -> Puis (Tiếp theo) -> Enfin (Cuối cùng)',
          examples: [
            { fr: 'D\'abord, je fais du vélo. Ensuite, je joue au football.', vi: 'Trước tiên tôi đạp xe. Sau đó tôi chơi bóng đá.' }
          ]
        },
        dialogue: [
          { spk: 'Marie', fr: 'Qu\'as-tu fait samedi dernier ?', vi: 'Thứ Bảy tuần trước cậu đã làm những gì?' },
          { spk: 'Minh', fr: 'D\'abord, j\'ai participé à un tournoi de judo et j\'ai gagné une médaille d\'or ! C\'était formidable !', vi: 'Trước tiên mình tham gia giải đấu Judo và giành được huy chương vàng! Tuyệt vời lắm!' }
        ],
        phonetics: 'Âm [ɲ] trong "gagner" [ga.ɲe] giống âm "nh" tiếng Việt.',
        quiz: {
          q: 'Từ nối nào có nghĩa là "Trước tiên / Trước hết"?',
          options: ['Enfin', 'D\'abord', 'Puis', 'Ensuite'],
          ans: 1,
          exp: '"D\'abord" nghĩa là trước tiên / trước hết.'
        }
      }
    ],
    culture: {
      title: 'Giải đua xe đạp Tour de France và Ngày hội Âm nhạc Fête de la Musique',
      content: 'Tour de France là giải đua xe đạp vòng quanh nước Pháp danh giá nhất hành tinh, thu hút hàng triệu người đứng hai bên đường cổ vũ chiếc áo vàng Maillot Jaune. Cùng với đó là Lễ hội Âm nhạc (Fête de la Musique) diễn ra vào ngày 21 tháng 6 hằng năm: mọi góc phố quảng trường nước Pháp ngập tràn tiếng đàn ca nhảy múa tự do của các nghệ sĩ và người dân.'
    }
  },

  // UNITÉ 6: Au spectacle
  {
    id: 6,
    titleFr: 'Unité 6 – Au spectacle',
    titleVi: 'Đi xem biểu diễn nghệ thuật',
    theme: 'Các loại hình biểu diễn, từ vựng sân khấu, lựa chọn chương trình, đặt chỗ, nhận xét buổi biểu diễn; cấu trúc phủ định với ne… plus, ne… rien, ôn tập tính từ chỉ định',
    summary: 'Tìm hiểu thế giới sân khấu diệu kỳ: múa rối, kịch nói, rạp xiếc, hòa nhạc cổ điển; cách đặt vé, chọn ghế ngồi và sử dụng câu phủ định mở rộng (ne... plus, ne... rien).',
    lessons: [
      {
        num: '6.1',
        title: 'Quel spectacle choisir ? (Chọn buổi biểu diễn nào?)',
        target: 'Gọi tên các loại hình nghệ thuật biểu diễn và ôn tập tính từ chỉ định (ce, cet, cette, ces).',
        vocab: [
          { fr: 'La pièce de théâtre', vi: 'Vở kịch sân khấu', pron: '[pjɛs də teɑtʁ]', type: 'Danh từ giống cái' },
          { fr: 'Le spectacle de magie', vi: 'Buổi biểu diễn ảo thuật', pron: '[spɛktakl də maʒi]', type: 'Danh từ giống đực' },
          { fr: 'Le spectacle de marionnettes', vi: 'Biểu diễn múa rối (múa rối cạn/rối nước)', pron: '[maʁjɔnɛt]', type: 'Danh từ giống đực' },
          { fr: 'L\'opéra', vi: 'Vở nhạc kịch opera / Nhà hát opera', pron: '[ɔpeʁa]', type: 'Danh từ giống đực' },
          { fr: 'Le ballet', vi: 'Múa ba lê', pron: '[balɛ]', type: 'Danh từ giống đực' }
        ],
        grammar: {
          title: 'Ôn tập tính từ chỉ định: Ce, Cet, Cette, Ces (Này / Kia)',
          desc: 'Ce (đực phụ âm), Cet (đực nguyên âm/h câm), Cette (cái), Ces (số nhiều).',
          formula: 'Ce spectacle, Cet opéra, Cette pièce, Ces acteurs',
          examples: [
            { fr: 'Cet opéra est grandiose.', vi: 'Vở nhạc kịch này thật hoành tráng.' },
            { fr: 'Cette pièce de théâtre est drôle.', vi: 'Vở kịch này rất hài hước.' }
          ]
        },
        dialogue: [
          { spk: 'Lan', fr: 'Regarde cette affiche ! Il y a un spectacle de marionnettes sur l\'eau ce soir.', vi: 'Minh nhìn tấm áp phích này này! Có buổi biểu diễn múa rối nước tối nay đấy.' },
          { spk: 'Minh', fr: 'C\'est une excellente idée ! J\'adore ce spectacle traditionnel !', vi: 'Ý tưởng tuyệt vời đó! Mình mê buổi biểu diễn truyền thống này lắm!' }
        ],
        phonetics: 'Quy tắc dùng "Cet" trước danh từ giống đực bắt đầu bằng nguyên âm: cet opéra [sɛ.tɔpeʁa].',
        quiz: {
          q: 'Điền tính từ chỉ định thích hợp: "____ opéra est magnifique."',
          options: ['Ce', 'Cet', 'Cette', 'Ces'],
          ans: 1,
          exp: '"Opéra" là danh từ giống đực bắt đầu bằng nguyên âm nên dùng "Cet".'
        }
      },
      {
        num: '6.2',
        title: 'À la billetterie : Réserver des places (Tại quầy vé: Đặt chỗ xem)',
        target: 'Thực hành hội thoại mua vé, hỏi số ghế, giá vé và vị trí ngồi trong khán phòng.',
        vocab: [
          { fr: 'Le billet / La place', vi: 'Vé xem / Chỗ ngồi', pron: '[bijɛ / plas]', type: 'Danh từ' },
          { fr: 'Réserver', vi: 'Đặt trước (vé, chỗ)', pron: '[ʁezeʁve]', type: 'Động từ' },
          { fr: 'Le premier rang', vi: 'Hàng ghế đầu tiên', pron: '[pʁəmje ʁɑ̃]', type: 'Danh từ giống đực' },
          { fr: 'Le balcon / L\'orchestre', vi: 'Ghế tầng lửng ban công / Ghế khu vực khán phòng chính', pron: '[balkɔ̃ / ɔʁkɛstʁ]', type: 'Vị trí ghế' },
          { fr: 'Le tarif réduit (enfant)', vi: 'Giá vé giảm giá (dành cho trẻ em)', pron: '[taʁif ʁedɥi]', type: 'Danh từ giống đực' }
        ],
        grammar: {
          title: 'Mẫu câu đặt vé lịch sự: Je voudrais réserver + Số lượng + places',
          desc: 'Dùng trong giao tiếp tại quầy bán vé nhà hát.',
          formula: 'Je voudrais réserver [Số] places pour [Tên buổi diễn]...',
          examples: [
            { fr: 'Je voudrais deux places au premier rang, s\'il vous plaît.', vi: 'Làm ơn cho tôi đặt 2 vé ở hàng ghế đầu tiên ạ.' }
          ]
        },
        dialogue: [
          { spk: 'Employé', fr: 'Bonjour, que désirez-vous ?', vi: 'Xin chào, quý khách muốn mua gì ạ?' },
          { spk: 'Pierre', fr: 'Bonjour monsieur. Je voudrais réserver deux places pour le cirque de samedi après-midi.', vi: 'Cháu chào bác. Cháu muốn đặt hai chỗ xem xiếc chiều thứ Bảy ạ.' },
          { spk: 'Employé', fr: 'Très bien ! Deux tarifs réduits, cela fait 20 euros.', vi: 'Được rồi cháu! Hai vé trẻ em giảm giá, hết 20 euro nhé.' }
        ],
        phonetics: 'Âm [j] trong "billet" [bi.jɛ] (l câm).',
        quiz: {
          q: 'Để đặt 2 chỗ ngồi, mẫu câu lịch sự chuẩn là:',
          options: ['Je veux deux places', 'Je voudrais deux places', 'J\'ai deux places', 'Donne deux places'],
          ans: 1,
          exp: '"Je voudrais deux places, s\'il vous plaît" là cách nói lịch sự, nhã nhặn nhất.'
        }
      },
      {
        num: '6.3',
        title: 'Dans la salle de spectacle (Trong khán phòng biểu diễn)',
        target: 'Từ vựng sân khấu (nghệ sĩ, đạo cụ, tiếng vỗ tay) và cấu trúc phủ định mở rộng: "ne... plus" (không còn nữa).',
        vocab: [
          { fr: 'La scène', vi: 'Sân khấu biểu diễn', pron: '[sɛn]', type: 'Danh từ giống cái' },
          { fr: 'Le rideau', vi: 'Bức màn nhung sân khấu', pron: '[ʁido]', type: 'Danh từ giống đực' },
          { fr: 'L\'acteur / L\'actrice', vi: 'Nam diễn viên / Nữ diễn viên', pron: '[aktœʁ / aktʁis]', type: 'Danh từ' },
          { fr: 'Les applaudissements', vi: 'Những tràng pháo tay tán thưởng', pron: '[aplodismɑ̃]', type: 'Danh từ giống đực số nhiều' },
          { fr: 'Ne... plus', vi: 'Không còn... nữa', pron: '[nə ply]', type: 'Cấu trúc phủ định' }
        ],
        grammar: {
          title: 'Cấu trúc phủ định: Ne + Động từ + plus (Không còn... nữa)',
          desc: 'Chỉ một hành động trước đây có nhưng hiện tại đã chấm dứt hoàn toàn.',
          formula: 'Sujet + ne/n\' + Verbe + plus + Complément',
          examples: [
            { fr: 'Il n\'y a plus de bruit dans la salle.', vi: 'Không còn tiếng ồn nào trong khán phòng nữa (tất cả im lặng lắng nghe).' },
            { fr: 'Le spectacle est fini, les acteurs ne jouent plus.', vi: 'Buổi diễn đã kết thúc, các diễn viên không còn diễn nữa.' }
          ]
        },
        dialogue: [
          { spk: 'Marie', fr: 'Chut ! Le rideau se lève, le spectacle commence !', vi: 'Suỵt! Bức màn nhung đang kéo lên rồi, buổi diễn bắt đầu!' },
          { spk: 'Minh', fr: 'Regarde, les lumières s\'éteignent. Il n\'y a plus de bruit !', vi: 'Nhìn kìa, đèn khán phòng đang tắt dần. Không còn tiếng xì xào nào nữa rồi!' }
        ],
        phonetics: 'Lưu ý khi phát âm "plus" trong câu phủ định "ne... plus": chữ s là âm câm [nə ply] (không đọc chữ s).',
        quiz: {
          q: 'Ý nghĩa của câu "Il ne joue plus au théâtre" là:',
          options: ['Anh ấy đang diễn kịch', 'Anh ấy không bao giờ diễn kịch', 'Anh ấy không còn diễn kịch nữa', 'Anh ấy thích diễn kịch'],
          ans: 2,
          exp: '"Ne... plus" biểu thị sự chấm dứt: không còn làm việc đó nữa.'
        }
      },
      {
        num: '6.4',
        title: 'C\'était magique ! (Thật là kỳ diệu!)',
        target: 'Nhận xét và đánh giá cảm xúc sau khi thưởng thức buổi diễn nghệ thuật; cấu trúc phủ định: "ne... rien" (không có gì cả).',
        vocab: [
          { fr: 'Magique !', vi: 'Kỳ diệu / Huyền ảo!', pron: '[maʒik]', type: 'Tính từ cảm thán' },
          { fr: 'Émouvant(e)', vi: 'Cảm động / Rung động', pron: '[emuvɑ̃]', type: 'Tính từ' },
          { fr: 'Drôle / Amusant(e)', vi: 'Hài hước / Buồn cười', pron: '[dʁol / amyzɑ̃]', type: 'Tính từ' },
          { fr: 'Ne... rien', vi: 'Không... cái gì cả', pron: '[nə ʁjɛ̃]', type: 'Cấu trúc phủ định' },
          { fr: 'Bravo !', vi: 'Hoan hô! / Tuyệt vời!', pron: '[bʁavo]', type: 'Thán từ' }
        ],
        grammar: {
          title: 'Cấu trúc phủ định: Ne + Động từ + rien (Không làm gì / Không có gì)',
          desc: 'Phủ định hoàn toàn đối tượng, sự vật.',
          formula: 'Sujet + ne/n\' + Verbe + rien',
          examples: [
            { fr: 'Je n\'entends rien parce que tout le monde applaudit.', vi: 'Tôi không nghe thấy gì cả vì mọi người đang vỗ tay vang dội.' },
            { fr: 'Il ne dit rien, il est sous le charme.', vi: 'Cậu ấy không nói gì cả, cậu ấy đang bị mê hoặc bởi vở kịch.' }
          ]
        },
        dialogue: [
          { spk: 'Lan', fr: 'Comment as-tu trouvé cette pièce de théâtre, Pierre ?', vi: 'Cậu thấy vở kịch này thế nào Pierre?' },
          { spk: 'Pierre', fr: 'C\'était magique et tellement drôle ! Je n\'ai rien vu d\'aussi beau depuis longtemps !', vi: 'Thật kỳ diệu và quá đỗi hài hước! Lâu lắm rồi mình chưa thấy thứ gì đẹp đến thế!' }
        ],
        phonetics: 'Âm mũi [jɛ̃] trong "rien" [ʁjɛ̃].',
        quiz: {
          q: 'Điền từ phủ định thích hợp: "Je ne comprends ____ à ce texte."',
          options: ['pas', 'rien', 'plus', 'jamais'],
          ans: 1,
          exp: '"Je ne comprends rien" nghĩa là Tôi không hiểu gì cả.'
        }
      },
      {
        num: '6.5',
        title: 'Bilan et fête de fin d\'année (Tổng kết và tiệc văn nghệ cuối năm)',
        target: 'Tổng ôn tập toàn bộ từ vựng, ngữ pháp, mẫu câu đã học qua 6 đơn vị bài và tự tin biểu diễn một tiết mục văn nghệ tiếng Pháp.',
        vocab: [
          { fr: 'La fête de fin d\'année', vi: 'Buổi liên hoan tổng kết cuối năm', pron: '[fɛt də fɛ̃ dane]', type: 'Danh từ giống cái' },
          { fr: 'Chanter une chanson', vi: 'Hát một bài hát', pron: '[ʃɑ̃te yn ʃɑ̃sɔ̃]', type: 'Cụm ĐT' },
          { fr: 'Jouer un sketch', vi: 'Đóng một vở kịch hài ngắn', pron: '[ʒwe ɛ̃ skɛtʃ]', type: 'Cụm ĐT' },
          { fr: 'Félicitations !', vi: 'Xin chúc mừng!', pron: '[felisitasjɔ̃]', type: 'Thán từ' }
        ],
        grammar: {
          title: 'Tổng kết các cấu trúc phủ định trong tiếng Pháp Lớp 5',
          desc: '1. Ne... pas (không)  |  2. Ne... plus (không còn nữa)  |  3. Ne... rien (không có gì)  |  4. Ne... jamais (không bao giờ)',
          formula: 'S + ne + V + pas / plus / rien / jamais',
          examples: [
            { fr: 'Nous n\'oublierons jamais cette belle année scolaire !', vi: 'Chúng tôi sẽ không bao giờ quên năm học tuyệt đẹp này!' }
          ]
        },
        dialogue: [
          { spk: 'Tous les élèves', fr: 'Merci chers professeurs ! Vive le français et vive la classe de 5e !', vi: 'Cảm ơn các thầy cô kính yêu! Tiếng Pháp muôn năm và lớp 5 muôn năm!' }
        ],
        phonetics: 'Luyện đọc diễn cảm các câu thoại ngắn chuẩn ngữ điệu Pháp.',
        quiz: {
          q: 'Câu nào mang nghĩa "Chúng tôi không bao giờ quên"?',
          options: ['Nous n\'oublions pas', 'Nous n\'oublions plus', 'Nous n\'oublions jamais', 'Nous n\'oublions rien'],
          ans: 2,
          exp: '"Ne... jamais" có nghĩa là không bao giờ.'
        }
      }
    ],
    culture: {
      title: 'Nhà hát Opéra Garnier tráng lệ và Nghệ thuật Xiếc mới Cirque du Soleil',
      content: 'Nhà hát kịch Opéra Garnier tại Paris là kiệt tác kiến trúc baroque lộng lẫy với trần nhà do danh họa Marc Chagall vẽ và chiếc đèn chùm pha lê nặng 8 tấn. Nước Pháp cũng là cái nôi của nghệ thuật xiếc đương đại (Nouveau Cirque) kết hợp xiếc nhào lộn, kịch câm, âm nhạc thính phòng và ánh sáng huyền ảo đỉnh cao.'
    }
  }
];

const trangNguyenFrenchQuizzes = [
  { q: 'Trong câu "Où est-ce que tu habites ?", từ để hỏi "Où" có nghĩa là:', options: ['Khi nào', 'Ở đâu', 'Tại sao', 'Như thế nào'], ans: 1, exp: '"Où" là từ để hỏi vị trí địa điểm (ở đâu).' },
  { q: 'Chia động từ "comprendre" với ngôi "Nous":', options: ['Nous comprendons', 'Nous comprenons', 'Nous comprends', 'Nous comprenez'], ans: 1, exp: 'Động từ comprendre với ngôi Nous chia là "Nous comprenons".' },
  { q: 'Trạng từ nào sau đây có nghĩa là "thường xuyên"?', options: ['Toujours', 'Souvent', 'Rarement', 'Jamais'], ans: 1, exp: '"Souvent" có nghĩa là thường xuyên.' },
  { q: 'Để trả lời cho câu hỏi nguyên nhân "Pourquoi... ?", ta dùng:', options: ['Quand', 'Parce que', 'Comment', 'Combien'], ans: 1, exp: '"Pourquoi... ?" (Tại sao?) trả lời bằng "Parce que..." (Bởi vì...).' },
  { q: 'Cụm từ nào có nghĩa là "ở nhà tôi"?', options: ['Chez toi', 'Chez moi', 'Chez lui', 'Chez nous'], ans: 1, exp: '"Chez moi" nghĩa là ở nhà của tôi.' },
  { q: 'Cấu trúc định danh số nhiều trong tiếng Pháp là:', options: ['C\'est', 'Ce sont', 'Il est', 'Ils sont'], ans: 1, exp: 'Định danh số nhiều dùng "Ce sont + Danh từ số nhiều".' },
  { q: 'Tính từ sở hữu thích hợp cho "armoire" (giống cái, bắt đầu bằng nguyên âm) của tôi là:', options: ['ma', 'mon', 'sa', 'ta'], ans: 1, exp: 'Trước danh từ giống cái bắt đầu bằng nguyên âm dùng "mon": mon armoire.' },
  { q: 'Giới từ nào có nghĩa là "ở dưới"?', options: ['Sur', 'Sous', 'Dans', 'Devant'], ans: 1, exp: '"Sous" có nghĩa là ở dưới (đối nghĩa với sur là ở trên).' },
  { q: 'Để diễn tả mong muốn lịch sự "Tôi muốn có...", ta dùng mẫu câu:', options: ['Je veux', 'Je voudrais', 'Je vais', 'Je suis'], ans: 1, exp: '"Je voudrais" là thể điều kiện lịch sự nhã nhặn.' },
  { q: 'Hỏi giá tiền của một món đồ: "____ coûte ce chapeau ?"', options: ['Combien', 'Comment', 'Quand', 'Où'], ans: 0, exp: '"Combien coûte... ?" dùng để hỏi giá tiền.' },
  { q: 'Đơn vị tiền tệ chính thức của nước Pháp là:', options: ['Đồng Franc', 'Đồng Dollar', 'Đồng Euro (€)', 'Đồng Bảng'], ans: 2, exp: 'Nước Pháp sử dụng đồng tiền chung châu Âu Euro (€).' },
  { q: 'Phương thức thanh toán "en espèces" có nghĩa là:', options: ['Bằng thẻ ngân hàng', 'Bằng tiền mặt', 'Bằng séc', 'Qua ứng dụng'], ans: 1, exp: '"En espèces" nghĩa là thanh toán bằng tiền mặt.' },
  { q: 'Giới từ đi trước mùa xuân (printemps) là:', options: ['en', 'au', 'à la', 'dans'], ans: 1, exp: 'Mùa xuân dùng "au printemps", các mùa còn lại dùng "en".' },
  { q: 'Cấu trúc vô nhân xưng nào mang nghĩa "Trời mưa"?', options: ['Il fait chaud', 'Il pleut', 'Il neige', 'Il fait beau'], ans: 1, exp: '"Il pleut" có nghĩa là trời mưa.' },
  { q: 'Để nói "Tôi cảm thấy lạnh", câu tiếng Pháp đúng ngữ pháp là:', options: ['Je suis froid', 'J\'ai froid', 'Je fais froid', 'Je sens froid'], ans: 1, exp: 'Tiếng Pháp dùng động từ avoir để chỉ cảm giác cơ thể: "J\'ai froid".' },
  { q: 'Khẩu hiệu "Hãy bảo vệ hành tinh của chúng ta!" là:', options: ['Protégeons notre planète !', 'Protégez la terre !', 'Protéger le monde !', 'Nous protégeons !'], ans: 0, exp: '"Protégeons notre planète !" là thể mệnh lệnh ngôi Nous.' },
  { q: 'Khi nói về chơi môn thể thao bóng đá, cấu trúc đúng là:', options: ['Faire au football', 'Jouer au football', 'Jouer du football', 'Faire à football'], ans: 1, exp: 'Môn bóng dùng Jouer à + le = "Jouer au football".' },
  { q: 'Sau cấu trúc nhận xét "C\'est...", tính từ luôn ở dạng:', options: ['Giống cái số ít', 'Giống đực số ít', 'Giống đực số nhiều', 'Giống cái số nhiều'], ans: 1, exp: 'Sau "C\'est", tính từ luôn ở dạng giống đực số ít (C\'est génial).' },
  { q: 'Đại từ sở hữu thay thế cho "mon vélo" là:', options: ['la mienne', 'le mien', 'le tien', 'les miens'], ans: 1, exp: '"Vélo" giống đực nên "mon vélo" thay bằng "le mien".' },
  { q: 'Khi người bạn hỏi phủ định "Tu ne viens pas ?", muốn khẳng định "Có chứ, tôi có đi", ta đáp:', options: ['Oui !', 'Si !', 'Non !', 'Jamais !'], ans: 1, exp: 'Đáp lại câu hỏi phủ định để khẳng định bắt buộc dùng "Si !".' },
  { q: 'Tính từ chỉ định thích hợp đi trước danh từ giống đực bắt đầu bằng nguyên âm "opéra" là:', options: ['Ce', 'Cet', 'Cette', 'Ces'], ans: 1, exp: '"Cet" dùng cho danh từ giống đực bắt đầu bằng nguyên âm hoặc h câm: cet opéra.' },
  { q: 'Cấu trúc phủ định "Ne... plus" có nghĩa là:', options: ['Không bao giờ', 'Không còn... nữa', 'Không có gì', 'Chưa từng'], ans: 1, exp: '"Ne... plus" mang nghĩa là không còn làm gì nữa.' },
  { q: 'Câu "Je ne comprends rien" có nghĩa là:', options: ['Tôi hiểu tất cả', 'Tôi không hiểu gì cả', 'Tôi hiểu một chút', 'Tôi không còn hiểu'], ans: 1, exp: '"Ne... rien" nghĩa là không... cái gì cả.' },
  { q: 'Tháp Eiffel nổi tiếng nằm ở thành phố nào của nước Pháp?', options: ['Marseille', 'Lyon', 'Paris', 'Bordeaux'], ans: 2, exp: 'Tháp Eiffel là biểu tượng của thủ đô Paris, nước Pháp.' },
  { q: 'Giải đua xe đạp danh giá nhất thế giới diễn ra hằng năm tại Pháp tên là:', options: ['Giro d\'Italia', 'Vuelta a España', 'Tour de France', 'Paris Marathon'], ans: 2, exp: 'Tour de France là giải đua xe đạp vòng quanh nước Pháp nổi tiếng nhất hành tinh.' }
];

module.exports = { units, trangNguyenFrenchQuizzes };
