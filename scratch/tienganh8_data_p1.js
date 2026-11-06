// tienganh8_data_p1.js
// Data for Tiếng Anh 8 (Global Success) - Theme 1 & Theme 2
// Units 1 to 6 + Reviews 1 & 2

const theme1And2Data = [
  // ==========================================
  // THEME 1: OUR COMMUNITIES
  // ==========================================

  // UNIT 1: LEISURE TIME
  {
    id: "unit-1",
    unit: "UNIT 1",
    theme: "OUR COMMUNITIES",
    title: "Leisure Time",
    focus: "Sở thích, hoạt động thời gian rảnh; Động từ chỉ mức độ yêu thích; Mời và nhận lời; Âm /ʊ/ và /uː/",
    color: "blue",
    vocab: [
      { word: "do DIY", type: "phrase", ipa: "/duː ˌdiː aɪ ˈwaɪ/", meaning: "tự làm đồ thủ công/sửa chữa (Do-It-Yourself)", ex: "My brother likes doing DIY in his spare time, such as making wooden shelves." },
      { word: "do puzzles", type: "phrase", ipa: "/duː ˈpʌzlz/", meaning: "giải đố, chơi trò ghép hình/ô chữ", ex: "Doing puzzles helps seniors train their memory and focus." },
      { word: "surf the net", type: "phrase", ipa: "/sɜːf ðə net/", meaning: "lướt mạng Internet", ex: "Teens should not surf the net for more than two hours a day." },
      { word: "message friends", type: "phrase", ipa: "/ˈmesɪdʒ frendz/", meaning: "nhắn tin cho bạn bè", ex: "Mai often messages her close friends after finishing her homework." },
      { word: "make paper flowers", type: "phrase", ipa: "/meɪk ˈpeɪpə ˈflaʊəz/", meaning: "làm hoa giấy thủ công", ex: "We made colorful paper flowers to decorate our classroom for Teachers' Day." },
      { word: "build dollhouses", type: "phrase", ipa: "/bɪld ˈdɒlhaʊzɪz/", meaning: "xây/làm nhà búp bê", ex: "Building dollhouses requires a lot of patience, glue, and cardboard." },
      { word: "go cycling", type: "phrase", ipa: "/ɡəʊ ˈsaɪklɪŋ/", meaning: "đi đạp xe", ex: "My father and I go cycling around the lake every Sunday morning." },
      { word: "be fond of", type: "idiom/phrase", ipa: "/biː fɒnd əv/", meaning: "rất thích, say mê (+ N/V-ing)", ex: "She is fond of cooking traditional Vietnamese dishes for her family." },
      { word: "be keen on", type: "idiom/phrase", ipa: "/biː kiːn ɒn/", meaning: "hứng thú, say mê (+ N/V-ing)", ex: "Minh is very keen on playing sports, especially basketball." },
      { word: "be crazy about", type: "idiom/phrase", ipa: "/biː ˈkreɪzi əˈbaʊt/", meaning: "cực kì đam mê, cuồng (+ N/V-ing)", ex: "Most boys in my class are crazy about playing online video games." },
      { word: "be into", type: "idiom/phrase", ipa: "/biː ˈɪntuː/", meaning: "thích, quan tâm đến cái gì", ex: "Are you into origami and making miniature craft models?" }
    ],
    grammar: {
      topic: "Verbs of Liking & Disliking + Gerunds / To-Infinitives",
      rules: [
        "Động từ chỉ mức độ thích/ghét thường đi kèm với V-ing (danh động từ): like, love, enjoy, fancy, adore, dislike, detest, mind, hate.",
        "Quy tắc đặc biệt: Một số động từ chỉ đi với V-ing: fancy, adore, enjoy, detest, mind (Ví dụ: fancy going out, detest hunting, enjoy reading).",
        "Động từ có thể đi với cả V-ing hoặc To-infinitive mà nghĩa không đổi nhiều: like, love, hate, prefer (Ví dụ: I like playing / like to play badminton).",
        "Cấu trúc tính từ + giới từ: be interested in, be fond of, be keen on, be crazy about, be into + Noun / V-ing. Dạng phủ định thêm 'not' sau 'be' (Ví dụ: He is not keen on swimming).",
        "Lưu ý cấu trúc song song (parallel structure): Khi liệt kê sở thích, phải giữ cùng dạng từ (Ví dụ: I like reading books and listening to music - KHÔNG DÙNG: I like reading books and to listen to music)."
      ],
      examples: [
        "Do you fancy hanging out at the local milk tea shop this evening? (fancy + V-ing)",
        "Lan detests waking up early on cold winter mornings. (detest + V-ing)",
        "Peter is crazy about photography; he takes photos wherever he travels."
      ]
    },
    pronunciation: {
      sounds: "/ʊ/ vs. /uː/",
      guide: "Âm /ʊ/ là nguyên âm ngắn, môi tròn nhẹ, cơ lưỡi thả lỏng (cook, book, put). Âm /uː/ là nguyên âm dài, môi chu tròn và căng ra, phát âm kéo dài (school, food, music, group).",
      pairs: [
        { wordA: "book /bʊk/ (sách)", wordB: "boot /buːt/ (đôi ủng)" },
        { wordA: "look /lʊk/ (nhìn)", wordB: "luke /luːk/ (ấm áp)" },
        { wordA: "pull /pʊl/ (kéo)", wordB: "pool /puːl/ (hồ bơi)" },
        { wordA: "full /fʊl/ (đầy)", wordB: "fool /fuːl/ (kẻ ngốc)" }
      ]
    },
    communication: {
      function: "Making and responding to invitations (Mời và nhận/từ chối lời mời)",
      dialogue: [
        { speaker: "Phong", text: "Do you fancy going cycling with me around West Lake this Saturday afternoon?" },
        { speaker: "Tom", text: "I'd love to! What time shall we meet?" },
        { speaker: "Phong", text: "How about 3:30 p.m. at the park gate? Can we ask Duy to join us?" },
        { speaker: "Tom", text: "That's a great idea! I'll message him right now." }
      ]
    },
    skills: {
      reading: "Đọc hiểu về sở thích cùng gia đình và bạn bè: Đọc văn bản tìm thông tin chi tiết về các hoạt động thủ công (DIY), lợi ích rèn luyện tính kiên nhẫn, gắn kết tình cảm gia đình và tiết kiệm tiền bạc.",
      writing: "Viết email (80–100 từ) cho bạn bè qua thư: Mở lời thân mật → Kể 1-2 hoạt động thời gian rảnh thường làm với bạn bè → Nêu rõ thời gian, địa điểm, lí do yêu thích và cảm nhận → Lời hỏi thăm và kết thư chuẩn mực.",
      speaking: "Thảo luận nhóm: Phỏng vấn bạn cùng bàn về các mức độ yêu thích sở thích (be fond of, detest, be keen on) và trình bày trước lớp.",
      project: "Leisure Survey: Khảo sát thói quen sử dụng thời gian rảnh của 20 học sinh trong khối 8; phân loại theo nhóm (cùng gia đình, bạn bè, một mình) và báo cáo biểu đồ kết quả."
    },
    quiz: [
      {
        q: "Choose the correct verb form: 'Do you fancy _______ a movie with us tonight?'",
        options: ["A. to watch", "B. watching", "C. watch", "D. watched"],
        a: 1,
        exp: "Động từ 'fancy' chỉ đi với V-ing (danh động từ): fancy doing something."
      },
      {
        q: "Which word has the underlined part pronounced as /uː/ (long vowel)?",
        options: ["A. look", "B. foot", "C. school", "D. cook"],
        a: 2,
        exp: "'school' phát âm là /skuːl/ chứa âm /uː/ dài; các từ 'look /lʊk/', 'foot /fʊt/', 'cook /kʊk/' đều chứa âm /ʊ/ ngắn."
      },
      {
        q: "Complete the sentence: 'Nam is not keen _______ playing computer games all day.'",
        options: ["A. in", "B. on", "C. at", "D. with"],
        a: 1,
        exp: "Cụm tính từ đi với giới từ cố định: be keen on + V-ing/Noun (hứng thú với cái gì)."
      }
    ]
  },

  // UNIT 2: LIFE IN THE COUNTRYSIDE
  {
    id: "unit-2",
    unit: "UNIT 2",
    theme: "OUR COMMUNITIES",
    title: "Life in the Countryside",
    focus: "Đời sống làng quê, cảnh quan nông thôn; Trạng từ so sánh hơn (Comparative Adverbs); Khen ngợi và đáp lại; Âm /ə/ và /ɪ/",
    color: "amber",
    vocab: [
      { word: "herd cattle", type: "phrase", ipa: "/hɜːd ˈkætl/", meaning: "chăn dắt gia súc (trâu, bò)", ex: "Village children often help their parents herd cattle on the dike." },
      { word: "harvest crops", type: "phrase", ipa: "/ˈhɑːvɪst krɒps/", meaning: "thu hoạch mùa màng", ex: "Farmers work hard from dawn to dusk during harvest time." },
      { word: "plough a field", type: "phrase", ipa: "/plaʊ ə fiːld/", meaning: "cày cấy ruộng đất", ex: "Modern farmers use tractors instead of buffaloes to plough fields." },
      { word: "paddy field", type: "noun", ipa: "/ˈpædi fiːld/", meaning: "cánh đồng lúa chín vàng", ex: "The golden paddy fields spread as far as the eye can see." },
      { word: "orchard", type: "noun", ipa: "/ˈɔːtʃəd/", meaning: "vườn cây ăn quả", ex: "My grandparents grow mangoes, oranges, and grapefruits in their orchard." },
      { word: "canal", type: "noun", ipa: "/kəˈnæl/", meaning: "kênh, rạch dẫn nước", ex: "People in the Mekong Delta rely heavily on canals for irrigation and transport." },
      { word: "hospitable", type: "adj", ipa: "/hɒˈspɪtəbl/", meaning: "hiếu khách, nồng hậu", ex: "Country people are extremely hospitable and always welcome visitors warmly." },
      { word: "picturesque", type: "adj", ipa: "/ˌpɪktʃəˈresk/", meaning: "đẹp như tranh vẽ", ex: "The ancient village with its banyan tree and well is very picturesque." },
      { word: "vast", type: "adj", ipa: "/vɑːst/", meaning: "rộng lớn, bao la, bát ngát", ex: "From the hill, we looked down at the vast green fields below." },
      { word: "well-trained", type: "adj", ipa: "/ˌwel ˈtreɪnd/", meaning: "được huấn luyện, đào tạo bài bản", ex: "Herding dogs are well-trained to protect farm animals from dangers." }
    ],
    grammar: {
      topic: "Comparative Forms of Adverbs (So sánh hơn của trạng từ)",
      rules: [
        "Trạng từ ngắn (1 âm tiết hoặc có cùng dạng với tính từ): thêm đuôi '-er' + than (fast -> faster, hard -> harder, early -> earlier, late -> later).",
        "Trạng từ dài (tận cùng bằng đuôi -ly): dùng 'more + adverb + than' (carefully -> more carefully, slowly -> more slowly, quietly -> more quietly).",
        "Trạng từ bất quy tắc đặc biệt: well -> better; badly -> worse; far -> farther/further; little -> less; much -> more.",
        "Quy tắc nhận diện: Động từ thường đi kèm với TRẠNG TỪ (He runs faster than me), trong khi động từ 'be' và linking verbs đi với TÍNH TỪ (He is taller than me)."
      ],
      examples: [
        "In harvest season, farmers have to get up earlier than usual to avoid the midday sun.",
        "A tractor can plough a field much more quickly than a water buffalo.",
        "Linh speaks English better than any other student in our village school."
      ]
    },
    pronunciation: {
      sounds: "/ə/ vs. /ɪ/",
      guide: "Âm /ə/ là âm schwa trung tâm, không nhấn trọng âm (canal, farmer, village). Âm /ɪ/ là nguyên âm ngắn ở vòm miệng trước (harvest, cottage, trip, live).",
      pairs: [
        { wordA: "cottage /ˈkɒtɪdʒ/ (âm /ɪ/)", wordB: "canal /kəˈnæl/ (âm /ə/)" },
        { wordA: "activity /ækˈtɪvəti/ (cả 2 âm)", wordB: "hospitable /hɒˈspɪtəbl/" },
        { wordA: "harvest /ˈhɑːvɪst/", wordB: "scenery /ˈsiːnəri/" }
      ]
    },
    communication: {
      function: "Giving and responding to compliments (Khen ngợi và đáp lại)",
      dialogue: [
        { speaker: "Lan", text: "What a picturesque cottage you have! The garden is so beautiful!" },
        { speaker: "Mai", text: "Thank you so much, Lan. I'm glad you like it. My family planted all these flowers." },
        { speaker: "Lan", text: "You arrange the flowers so skillfully!" },
        { speaker: "Mai", text: "It's very kind of you to say so." }
      ]
    },
    skills: {
      reading: "Đọc bài giới thiệu du lịch nông thôn và mô tả làng quê Bắc Bộ: Khai thác từ vựng về cảnh quan thanh bình, nghề dệt chiếu, làm gốm và tình làng nghĩa xóm bền chặt.",
      writing: "Viết đoạn văn (80–100 từ) về điều em thích HOẶC không thích về cuộc sống nông thôn: Mở đoạn nêu quan điểm → Thân đoạn đưa ra 2-3 lí do kèm dẫn chứng (không khí trong lành, chi phí rẻ vs. thiếu dịch vụ y tế, giải trí) → Kết luận cảm xúc.",
      speaking: "Thuyết trình về một ngày trải nghiệm làm nông dân: Mô tả hoạt động gặt lúa, bắt cá, cưỡi trâu.",
      project: "My Dream Village: Thiết kế áp phích giới thiệu ngôi làng mơ ước; nêu rõ vị trí địa lí, cảnh quan, hoạt động văn hóa và đón tiếp du khách."
    },
    quiz: [
      {
        q: "Choose the correct comparative adverb: 'The combine harvester works _______ than ten manual laborers.'",
        options: ["A. more fast", "B. faster", "C. fastly", "D. more faster"],
        a: 1,
        exp: "'fast' là trạng từ ngắn, dạng so sánh hơn là 'faster' (không dùng more fast hay fastly)."
      },
      {
        q: "Choose the irregular comparative: 'Hoa did _______ on the English test than her brother.'",
        options: ["A. gooder", "B. more well", "C. better", "D. best"],
        a: 2,
        exp: "Trạng từ 'well' có dạng so sánh hơn bất quy tắc là 'better'."
      },
      {
        q: "What is the appropriate response to 'What a lovely peaceful village you live in!'?",
        options: ["A. No, it isn't.", "B. Thank you. I'm glad you think so.", "C. You're welcome.", "D. Yes, I do."],
        a: 1,
        exp: "Khi nhận lời khen ngợi cảnh quan, đáp lại lịch sự bằng 'Thank you. I'm glad you think so/like it.'"
      }
    ]
  },

  // UNIT 3: TEENAGERS
  {
    id: "unit-3",
    unit: "UNIT 3",
    theme: "OUR COMMUNITIES",
    title: "Teenagers",
    focus: "Đời sống tuổi teen, câu lạc bộ học đường, mạng xã hội và áp lực; Câu đơn và Câu ghép; Đưa ra yêu cầu lịch sự; Âm /ʊə/ và /ɔɪ/",
    color: "purple",
    vocab: [
      { word: "peer pressure", type: "noun", ipa: "/ˈpɪə ˌpreʃə/", meaning: "áp lực từ bạn bè đồng trang lứa", ex: "Teenagers often face peer pressure regarding clothing brands and academic scores." },
      { word: "bully", type: "verb/noun", ipa: "/ˈbʊli/", meaning: "bắt nạt, kẻ bắt nạt", ex: "Schools must enforce zero tolerance for cyberbullying and school bullying." },
      { word: "concentrate", type: "verb", ipa: "/ˈkɒnsntreɪt/", meaning: "tập trung chú ý (+ on)", ex: "Turn off social media notifications so that you can concentrate on your study." },
      { word: "browse a website", type: "phrase", ipa: "/braʊz ə ˈwebsaɪt/", meaning: "lướt xem thông tin trên trang web", ex: "He browses educational websites to find materials for his science project." },
      { word: "upload posts / photos", type: "phrase", ipa: "/ʌpˈləʊd pəʊsts / ˈfəʊtəʊz/", meaning: "đăng tải bài viết / hình ảnh", ex: "Students should be careful when uploading personal photos onto social forums." },
      { word: "expectation", type: "noun", ipa: "/ˌekspekˈteɪʃn/", meaning: "kì vọng, sự mong đợi", ex: "High parental expectations sometimes create severe stress for young teenagers." },
      { word: "arts and crafts club", type: "noun", ipa: "/ɑːts ənd krɑːfts klʌb/", meaning: "câu lạc bộ mĩ thuật và thủ công", ex: "Joining the arts and crafts club helps students relax and develop artistic talents." },
      { word: "connect with friends", type: "phrase", ipa: "/kəˈnekt wɪð frendz/", meaning: "kết nối, giữ liên lạc với bạn bè", ex: "Video calls make it easy to connect with international friends." }
    ],
    grammar: {
      topic: "Simple Sentences & Compound Sentences (Câu đơn và Câu ghép)",
      rules: [
        "Câu đơn (Simple sentence): Gồm MỘT mệnh đề độc lập (Independent clause), có một cụm chủ - vị hoàn chỉnh (S + V). Câu có thể có chủ ngữ kép hoặc vị ngữ kép nhưng vẫn là câu đơn.",
        "Câu ghép (Compound sentence): Gồm HAI hoặc nhiều mệnh đề độc lập nối với nhau, có ý nghĩa tương đương.",
        "Cách 1 nối câu ghép: Dùng liên từ kết hợp (Coordinating Conjunctions - FANBOYS): for, and, nor, but, or, yet, so. Đặt dấu phẩy (,) trước liên từ khi nối hai mệnh đề.",
        "Cách 2 nối câu ghép: Dùng trạng từ liên kết (Conjunctive Adverbs): however (tuy nhiên), therefore (do đó), otherwise (nếu không thì). Cấu trúc: [Mệnh đề 1]; however/therefore, [Mệnh đề 2] hoặc tách câu riêng.",
        "Ý nghĩa liên từ: and (bổ sung), but/however (đối lập, tương phản), so/therefore (kết quả), or/otherwise (lựa chọn/điều kiện hệ quả)."
      ],
      examples: [
        "Minh enjoys playing chess. (Câu đơn - 1 mệnh đề độc lập)",
        "Minh enjoys playing chess, but his brother prefers football. (Câu ghép với 'but')",
        "She studied very hard for the midterm exams; therefore, she got an A+. (Câu ghép với 'therefore')"
      ]
    },
    pronunciation: {
      sounds: "/ʊə/ vs. /ɔɪ/",
      guide: "Âm /ʊə/ là nguyên âm đôi chuyển từ /ʊ/ sang /ə/ (tour, sure, pure). Âm /ɔɪ/ là nguyên âm đôi chuyển từ /ɔː/ sang /ɪ/ (boy, voice, enjoy, choice).",
      pairs: [
        { wordA: "sure /ʃʊə/ (chắc chắn)", wordB: "shore /ʃɔː/ (bờ biển)" },
        { wordA: "cure /kjʊə/ (chữa trị)", wordB: "coin /kɔɪn/ (đồng xu)" },
        { wordA: "tour /tʊə/ (chuyến du lịch)", wordB: "toy /tɔɪ/ (đồ chơi)" },
        { wordA: "pure /pjʊə/ (thuần khiết)", wordB: "point /pɔɪnt/ (điểm)" }
      ]
    },
    communication: {
      function: "Making polite requests (Đưa ra yêu cầu lịch sự)",
      dialogue: [
        { speaker: "An", text: "Could you please show me how to log on to the school forum account?" },
        { speaker: "Binh", text: "Certainly! First, enter your student ID, and then type your default password." },
        { speaker: "An", text: "Would you mind checking if my profile picture uploaded successfully?" },
        { speaker: "Binh", text: "Not at all. It looks great on the screen!" }
      ]
    },
    skills: {
      reading: "Đọc hiểu về hoạt động của các câu lạc bộ học đường và diễn đàn chia sẻ của học sinh: Xác định các nguyên nhân gây căng thẳng (áp lực thi cử, kì vọng gia đình, bắt nạt trực tuyến) và biện pháp vượt qua.",
      writing: "Viết đoạn văn (80–100 từ) về một nguyên nhân gây căng thẳng cho thanh thiếu niên và giải pháp: Giới thiệu tình huống → Phân tích nguyên nhân → Đưa ra 2 giải pháp thiết thực (tâm sự với chuyên viên tâm lí, tập thể dục, quản lí thời gian).",
      speaking: "Tranh biện về việc nên hay không nên cho học sinh sử dụng điện thoại thông minh trong giờ ra chơi.",
      project: "Propose a School Club: Xây dựng đề án thành lập câu lạc bộ mới (Tên CLB, sứ mệnh, thời gian sinh hoạt, người cố vấn, các hoạt động cụ thể và lợi ích mang lại)."
    },
    quiz: [
      {
        q: "Identify the type of sentence: 'Lan checked her notifications, and she replied to all messages immediately.'",
        options: ["A. Simple sentence", "B. Compound sentence", "C. Complex sentence", "D. Imperative sentence"],
        a: 1,
        exp: "Câu gồm hai mệnh đề độc lập nối với nhau bằng liên từ kết hợp 'and' -> Câu ghép (Compound sentence)."
      },
      {
        q: "Choose the correct connector: 'You must submit your assignment before 5 p.m.; _______, you will lose points.'",
        options: ["A. however", "B. therefore", "C. otherwise", "D. so"],
        a: 2,
        exp: "'otherwise' nghĩa là 'nếu không thì', diễn tả hậu quả nếu không làm điều kiện ở mệnh đề trước."
      },
      {
        q: "How do you respond politely to 'Would you mind helping me with this math problem?' when you agree?",
        options: ["A. Yes, I would mind.", "B. No, not at all. Let's look at it.", "C. You are wrong.", "D. Never mind."],
        a: 1,
        exp: "Câu hỏi 'Would you mind...?' mang nghĩa 'Bạn có phiền không?'. Trả lời đồng ý giúp đỡ bằng 'No, not at all' (Không, không phiền chút nào)."
      }
    ]
  },

  // REVIEW 1 (UNITS 1 - 3)
  {
    id: "review-1",
    unit: "REVIEW 1",
    theme: "OUR COMMUNITIES",
    title: "Review 1 (Units 1 - 2 - 3)",
    focus: "Ôn tập tổng hợp Theme 1: Sở thích, Nông thôn, Tuổi teen; Động từ chỉ sở thích; So sánh trạng từ; Câu đơn & Câu ghép; Phát âm tổng hợp",
    color: "sky",
    vocab: [
      { word: "synthesis", type: "noun", ipa: "/ˈsɪnθəsɪs/", meaning: "sự tổng hợp kiến thức", ex: "Review 1 provides a comprehensive synthesis of vocabulary and grammar from Units 1 to 3." },
      { word: "leisure activity", type: "phrase", ipa: "/ˈleʒər ækˈtɪvəti/", meaning: "hoạt động giải trí", ex: "Playing sports and reading books are healthy leisure activities." },
      { word: "peaceful atmosphere", type: "phrase", ipa: "/ˈpiːsfl ˈætməsfɪə/", meaning: "bầu không khí thanh bình", ex: "The peaceful atmosphere of the countryside helps relax the mind." },
      { word: "peer interaction", type: "phrase", ipa: "/pɪər ˌɪntərˈækʃn/", meaning: "sự tương tác bạn bè", ex: "Positive peer interaction improves teamwork and social skills." }
    ],
    grammar: {
      topic: "Systematic Grammar Revision: Liking Verbs, Comparative Adverbs, Sentence Structures",
      rules: [
        "1. Verbs of liking: enjoy/fancy/detest + V-ing; like/love + V-ing / to-inf; be interested in/fond of/keen on + N/V-ing.",
        "2. Comparative adverbs: short adv + -er + than (harder, faster, earlier); more + long adv + than (more carefully); irregulars: well -> better, badly -> worse.",
        "3. Sentence types: Simple (1 independent clause) vs. Compound (2 clauses joined by FANBOYS or however/therefore/otherwise)."
      ],
      examples: [
        "Although Nam enjoys cycling, his brother prefers to stay indoors and read.",
        "Farmers in this commune harvest their crops more quickly than they did five years ago.",
        "Teens experience academic pressure; therefore, schools should organize more sports clubs."
      ]
    },
    pronunciation: {
      sounds: "Phonetic Revision: /ʊ/ - /uː/, /ə/ - /ɪ/, /ʊə/ - /ɔɪ/",
      guide: "Ôn tập và phân biệt các cặp nguyên âm đơn và nguyên âm đôi cốt lõi của Theme 1 qua các bài tập nhận diện phiên âm và phát âm câu hoàn chỉnh.",
      pairs: [
        { wordA: "cook /kʊk/", wordB: "cool /kuːl/" },
        { wordA: "village /ˈvɪlɪdʒ/", wordB: "canal /kəˈnæl/" },
        { wordA: "tourist /ˈtʊərɪst/", wordB: "enjoy /ɪnˈdʒɔɪ/" }
      ]
    },
    communication: {
      function: "Comprehensive Everyday English: Inviting, Complimenting, Requesting",
      dialogue: [
        { speaker: "Minh", text: "What a stunning drawing! Did you do it in your arts club?" },
        { speaker: "Lan", text: "Thank you, Minh! Yes, our coach showed us this watercolor technique." },
        { speaker: "Minh", text: "Could you ask her if I can join the club next Tuesday?" },
        { speaker: "Lan", text: "Certainly! I'd love to have you in our group." }
      ]
    },
    skills: {
      reading: "Đọc hiểu bài viết tổng hợp về phong cách sống cân bằng của thanh thiếu niên nông thôn và thành thị.",
      writing: "Viết đoạn văn ngắn (80-100 từ) về cách học sinh có thể cân bằng giữa bài tập ở trường và hoạt động giải trí lành mạnh.",
      speaking: "Trình bày về các biện pháp giảm căng thẳng thi cử thông qua thể thao và câu lạc bộ ngoại khóa."
    },
    quiz: [
      {
        q: "Choose the correct sentence:",
        options: [
          "A. She works more hardly than her sister.",
          "B. She works harder than her sister.",
          "C. She works more hard than her sister.",
          "D. She works as hard than her sister."
        ],
        a: 1,
        exp: "'hard' là trạng từ ngắn, so sánh hơn là 'harder than'."
      },
      {
        q: "Which word has the underlined part pronounced as /ʊə/?",
        options: ["A. sure", "B. boy", "C. coin", "D. noise"],
        a: 0,
        exp: "'sure' phát âm là /ʃʊə/ hoặc /ʃɔː/; 'boy, coin, noise' đều chứa âm /ɔɪ/."
      }
    ]
  },

  // ==========================================
  // THEME 2: OUR HERITAGE
  // ==========================================

  // UNIT 4: ETHNIC GROUPS OF VIET NAM
  {
    id: "unit-4",
    unit: "UNIT 4",
    theme: "OUR HERITAGE",
    title: "Ethnic Groups of Viet Nam",
    focus: "54 dân tộc Việt Nam, nhà sàn, trang phục truyền thống; Câu hỏi Yes/No & Wh-; Danh từ đếm được/không đếm được & Từ chỉ số lượng; Âm /k/ và /g/",
    color: "rose",
    vocab: [
      { word: "ethnic minority group", type: "noun", ipa: "/ˈeθnɪk maɪˈnɒrəti ɡruːp/", meaning: "nhóm dân tộc thiểu số", ex: "Viet Nam is a multicultural country with 53 ethnic minority groups." },
      { word: "stilt house", type: "noun", ipa: "/stɪlt haʊs/", meaning: "nhà sàn gỗ truyền thống", ex: "Stilt houses protect people from wild beasts and damp ground." },
      { word: "communal house (Rong house)", type: "noun", ipa: "/kəˈmjuːnl haʊs/", meaning: "nhà rông sinh hoạt cộng đồng", ex: "The Rong house is the center of cultural life in Central Highland villages." },
      { word: "terraced fields", type: "noun", ipa: "/ˈterəst fiːldz/", meaning: "ruộng bậc thang kì vĩ", ex: "Terraced fields in Mu Cang Chai attract photographers from all over the world." },
      { word: "traditional costume", type: "noun", ipa: "/trəˈdɪʃənl ˈkɒstjuːm/", meaning: "trang phục truyền thống", ex: "The traditional costume of Hmong women is elaborately decorated with embroidery." },
      { word: "five-colour sticky rice", type: "noun", ipa: "/faɪv ˈkʌlə ˈstɪki raɪs/", meaning: "xôi ngũ sắc", ex: "Five-colour sticky rice represents the five elements in oriental philosophy." },
      { word: "weaving", type: "noun", ipa: "/ˈwiːvɪŋ/", meaning: "nghề dệt vải thổ cẩm", ex: "Traditional brocade weaving is passed down from mothers to daughters." },
      { word: "musical instrument", type: "noun", ipa: "/ˈmjuːzɪkl ˈɪnstrəmənt/", meaning: "nhạc cụ dân tộc (cồng, chiêng, khèn)", ex: "The T'rung is a traditional bamboo musical instrument of the Central Highlands." },
      { word: "livestock", type: "noun", ipa: "/ˈlaɪvstɒk/", meaning: "vật nuôi, gia súc gia cầm", ex: "Many highland families raise livestock such as buffaloes, goats, and pigs." }
    ],
    grammar: {
      topic: "Yes/No Questions, Wh- Questions, Countable & Uncountable Nouns with Quantifiers",
      rules: [
        "1. Câu hỏi Yes/No: Đảo trợ động từ (Do/Does/Did/Will) hoặc động từ 'to be' lên đầu câu. Cấu trúc: Do/Does/Did + S + V_inf? / Be + S + Adj/Noun? Trả lời ngắn: Yes, S + aux / No, S + aux + not.",
        "2. Câu hỏi Wh-: Wh-word (Who, What, Where, When, Why, How, How many, How much, Which) + aux + S + V_inf? Dùng để hỏi thông tin chi tiết.",
        "3. Danh từ đếm được (Countable Nouns): Có dạng số ít (a stilt house) và số nhiều (many stilt houses). Đi kèm với: a/an, many, a few, few, several.",
        "4. Danh từ không đếm được (Uncountable Nouns): Chỉ có một dạng, không thêm -s/es (rice, water, money, weaving, music). Đi kèm với: much, a little, little.",
        "5. Phân biệt: 'a few' (một vài, đủ dùng) vs. 'few' (rất ít, gần như không có) cho danh từ đếm được; 'a little' (một chút, đủ dùng) vs. 'little' (rất ít, không đủ) cho không đếm được."
      ],
      examples: [
        "Do the Tay people live in stilt houses? — Yes, they do.",
        "Where can tourists visit the most breathtaking terraced fields in Viet Nam?",
        "There are a few ethnic minority cultural festivals held in autumn.",
        "We need a little five-colour sticky rice to prepare the offering tray."
      ]
    },
    pronunciation: {
      sounds: "/k/ vs. /g/",
      guide: "Âm /k/ là phụ âm vô thanh, bật hơi mạnh ở cuống họng, dây thanh không rung (costume, folk, keep). Âm /g/ là phụ âm hữu thanh, vị trí phát âm tương tự nhưng dây thanh rung (gong, group, agriculture).",
      pairs: [
        { wordA: "coat /kəʊt/ (áo khoác)", wordB: "goat /ɡəʊt/ (con dê)" },
        { wordA: "cold /kəʊld/ (lạnh)", wordB: "gold /ɡəʊld/ (vàng)" },
        { wordA: "class /klɑːs/ (lớp)", wordB: "glass /ɡlɑːs/ (thủy tinh)" },
        { wordA: "came /keɪm/ (đã đến)", wordB: "game /ɡeɪm/ (trò chơi)" }
      ]
    },
    communication: {
      function: "Asking for and expressing opinions (Hỏi và nêu ý kiến)",
      dialogue: [
        { speaker: "Elena", text: "What do you think about the terraced fields in Sa Pa?" },
        { speaker: "Duong", text: "In my opinion, they are extraordinary architectural masterpieces created by ethnic farmers." },
        { speaker: "Elena", text: "To my way of thinking, preserving their traditional weaving craft is equally important." },
        { speaker: "Duong", text: "I totally agree with you. It preserves their cultural soul." }
      ]
    },
    skills: {
      reading: "Đọc hiểu về kiến trúc nhà sàn của các dân tộc Tày, Nùng, Mường: Tìm hiểu về cấu trúc cột gỗ, cầu thang số bậc lẻ, bếp lửa trung tâm và cách bố trí không gian thờ cúng, tiếp khách.",
      writing: "Viết đoạn văn (80–100 từ) về các công việc em làm để phụ giúp gia đình: Liệt kê công việc theo thứ tự thời gian (dọn dẹp, nấu cơm, chăm sóc em, cho vật nuôi ăn) và nêu ý thức trách nhiệm.",
      speaking: "Giới thiệu một nhạc cụ dân tộc (Đàn đá, Đàn T'rưng, Cồng chiêng) trước lớp.",
      project: "Ethnic Heritage Exhibition: Tìm hiểu về một dân tộc thiểu số tại Việt Nam (Địa bàn sinh sống, ngôn ngữ, kiểu nhà ở, trang phục đặc sắc, ẩm thực tiêu biểu) và làm poster trưng bày."
    },
    quiz: [
      {
        q: "Choose the correct quantifier: 'There is only _______ water left in the bamboo container.'",
        options: ["A. a few", "B. a little", "C. many", "D. few"],
        a: 1,
        exp: "'water' là danh từ không đếm được, dùng 'a little' (một lượng nhỏ)."
      },
      {
        q: "Form the question: '_______ ethnic groups are there in Viet Nam?' — 'There are 54.'",
        options: ["A. How much", "B. How many", "C. What", "D. Which"],
        a: 1,
        exp: "'ethnic groups' là danh từ đếm được số nhiều, câu hỏi số lượng dùng 'How many'."
      },
      {
        q: "Which word starts with the voiced consonant /g/?",
        options: ["A. kitchen", "B. culture", "C. gong", "D. craft"],
        a: 2,
        exp: "'gong' phát âm là /ɡɒŋ/ bắt đầu bằng âm hữu thanh /g/. Các từ còn lại bắt đầu bằng /k/."
      }
    ]
  },

  // UNIT 5: OUR CUSTOMS AND TRADITIONS
  {
    id: "unit-5",
    unit: "UNIT 5",
    theme: "OUR CUSTOMS AND TRADITIONS",
    title: "Our Customs and Traditions",
    focus: "Phong tục và truyền thống gia đình/dân tộc; Mạo từ Zero (Ø article); Đưa ra lời khuyên với should/shouldn't; Âm /n/ và /θ/",
    color: "emerald",
    vocab: [
      { word: "custom", type: "noun", ipa: "/ˈkʌstəm/", meaning: "phong tục, tập quán được thực hành", ex: "It is a custom in our family to have breakfast together on Sundays." },
      { word: "tradition", type: "noun", ipa: "/trəˈdɪʃn/", meaning: "truyền thống lưu truyền qua nhiều thế hệ", ex: "Vietnamese people maintain the tradition of ancestor worship." },
      { word: "keep / maintain a tradition", type: "phrase", ipa: "/kiːp ə trəˈdɪʃn/", meaning: "gìn giữ, duy trì một truyền thống", ex: "Young generations should help maintain the tradition of cooking banh chung at Tet." },
      { word: "break with tradition", type: "phrase", ipa: "/breɪk wɪð trəˈdɪʃn/", meaning: "phá vỡ, đi ngược lại truyền thống cũ", ex: "They decided to break with tradition by travelling abroad instead of staying home for Tet." },
      { word: "family reunion", type: "noun", ipa: "/ˈfæməli ˌriːˈjuːniən/", meaning: "cuộc sum họp gia đình ấm cúng", ex: "Tet is the most important occasion for family reunions in Viet Nam." },
      { word: "ancestor worship", type: "noun", ipa: "/ˈænsestə ˈwɜːʃɪp/", meaning: "tục lệ thờ cúng tổ tiên", ex: "Ancestor worship demonstrates filial piety and gratitude toward previous generations." },
      { word: "offerings", type: "noun", ipa: "/ˈɒfərɪŋz/", meaning: "lễ vật, đồ cúng dâng lên bàn thờ", ex: "The offerings on the altar usually include flowers, fresh fruits, and incense." },
      { word: "bamboo pole (Cay Neu)", type: "noun", ipa: "/bæmˈbuː pəʊl/", meaning: "cây nêu đón Tết bằng tre", ex: "Villagers erect a tall bamboo pole in the courtyard to ward off evil spirits." },
      { word: "longevity", type: "noun", ipa: "/lɒnˈdʒevəti/", meaning: "sự trường thọ, lễ mừng thọ", ex: "The village council organizes a longevity celebration for elderly residents over 70." }
    ],
    grammar: {
      topic: "Zero Article (Mạo từ Zero - Ø) & Comparison with A / An / The",
      rules: [
        "1. Mạo từ Zero (Ø article) nghĩa là KHÔNG dùng mạo từ (a/an/the) trước danh từ.",
        "2. Không dùng mạo từ với danh từ không đếm được hoặc danh từ trừu tượng khi nói chung: Sugar is sweet. Knowledge is power. Tradition is important.",
        "3. Không dùng mạo từ với danh từ số nhiều khi nói khái quát chung: Students should respect teachers. Stilt houses are common in mountain areas.",
        "4. Không dùng mạo từ với phương tiện đi lại trong cấu trúc 'by + vehicle': by bus, by train, by air, by boat.",
        "5. Không dùng mạo từ trước tên bữa ăn thông thường (have breakfast, dinner), tên môn thể thao (play football), môn học (study English), tên quốc gia số ít (Viet Nam, Japan).",
        "6. So sánh: Dùng 'a/an' với danh từ đếm được số ít nhắc đến lần đầu (a custom); dùng 'the' khi danh từ đã xác định hoặc duy nhất (the custom of worshipping ancestors in our village)."
      ],
      examples: [
        "Ø Vietnamese people value Ø family reunions during Tet holiday.",
        "We went to the festival by Ø bus instead of by car.",
        "The custom of sending lucky money brings Ø joy to children."
      ]
    },
    pronunciation: {
      sounds: "/n/ vs. /θ/",
      guide: "Âm /n/ là âm mũi hữu thanh, đầu lưỡi chạm nướu trên (name, tradition, reunion). Âm /θ/ là âm vô thanh, đầu lưỡi đặt nhẹ giữa hai hàm răng và thổi luồng hơi ra, không làm rung dây thanh quản (thank, think, theme, month).",
      pairs: [
        { wordA: "tin /tɪn/ (thiếc)", wordB: "thin /θɪn/ (mỏng, gầy)" },
        { wordA: "net /net/ (lưới)", wordB: "thank /θæŋk/ (cảm ơn)" },
        { wordA: "ten /ten/ (số 10)", wordB: "theme /θiːm/ (chủ đề)" },
        { wordA: "sin /sɪn/ (tội lỗi)", wordB: "thin /θɪn/ (gầy)" }
      ]
    },
    communication: {
      function: "Giving advice about customs and etiquettes (Đưa ra lời khuyên)",
      dialogue: [
        { speaker: "David", text: "I'm visiting a Vietnamese family this weekend. What should I do?" },
        { speaker: "Nga", text: "You should take off your shoes before entering their house. It's a sign of respect." },
        { speaker: "David", text: "Should I bring a small gift?" },
        { speaker: "Nga", text: "Yes, it's a good idea to bring some fruit or cakes. However, you shouldn't give white flowers." }
      ]
    },
    skills: {
      reading: "Đọc hiểu về Lễ hội Ok Om Bok của đồng bào Khmer Nam Bộ: Thời gian tổ chức vào rằm tháng 10 âm lịch, nghi thức cúng trăng tạ ơn, thả đèn hoa đăng và đua ghe ngo truyền thống.",
      writing: "Viết email (80–100 từ) khuyên bạn bè nước ngoài cách ứng xử khi tham gia một lễ hội Việt Nam: Chào hỏi → Nêu 2 điều nên làm (ăn mặc lịch sự, chào người lớn) → Nêu 1 điều không nên làm → Chúc chuyến đi vui vẻ.",
      speaking: "Thảo luận về các phong tục gia đình: Bữa cơm tất niên, thăm mộ tổ tiên, mừng tuổi đầu xuân.",
      project: "Local Customs & Traditions: Phỏng vấn ông bà hoặc cha mẹ về một phong tục truyền thống của dòng họ hoặc quê hương; trình bày báo cáo về nguồn gốc và ý nghĩa."
    },
    quiz: [
      {
        q: "Choose the correct sentence regarding articles:",
        options: [
          "A. We always travel to our hometown by the train.",
          "B. We always travel to our hometown by a train.",
          "C. We always travel to our hometown by train.",
          "D. We always travel to our hometown by trains."
        ],
        a: 2,
        exp: "Cấu trúc 'by + phương tiện' dùng zero article: by train, by bus, by plane."
      },
      {
        q: "Which word contains the voiceless sound /θ/?",
        options: ["A. name", "B. tradition", "C. thank", "D. night"],
        a: 2,
        exp: "'thank' phát âm là /θæŋk/ chứa âm /θ/. Các từ còn lại chứa âm /n/."
      },
      {
        q: "Complete the advice: 'When entering a pagoda, you _______ wear shorts or sleeveless tops.'",
        options: ["A. should", "B. shouldn't", "C. must", "D. have to"],
        a: 1,
        exp: "Khi vào chùa tôn nghiêm, không nên mặc quần ngắn hay áo cộc: 'shouldn't'."
      }
    ]
  },

  // UNIT 6: LIFESTYLES
  {
    id: "unit-6",
    unit: "UNIT 6",
    theme: "OUR HERITAGE",
    title: "Lifestyles",
    focus: "Lối sống truyền thống và hiện đại, học tập trực tuyến; Tương lai đơn (Future Simple) & Câu điều kiện loại 1 (First Conditional) với Unless; Âm /br/ và /pr/",
    color: "indigo",
    vocab: [
      { word: "nomadic", type: "adj", ipa: "/nəʊˈmædɪk/", meaning: "du mục, nay đây mai đó", ex: "Nomadic tribes in Mongolia move several times a year to find fresh pastures." },
      { word: "dogsled", type: "noun", ipa: "/ˈdɒɡsled/", meaning: "xe trượt tuyết do chó kéo", ex: "The native Inuit people traditionally used dogsleds to travel across frozen snow." },
      { word: "common practice", type: "noun", ipa: "/ˈkɒmən ˈpræktɪs/", meaning: "thói quen, tập quán phổ biến", ex: "Taking an afternoon nap is a common practice in many tropical countries." },
      { word: "tribal dance", type: "noun", ipa: "/ˈtraɪbl dɑːns/", meaning: "điệu múa bộ lạc truyền thống", ex: "Villagers performed an energetic tribal dance around the blazing campfire." },
      { word: "online learning", type: "noun", ipa: "/ˌɒnˈlaɪn ˈlɜːnɪŋ/", meaning: "học trực tuyến, học từ xa qua mạng", ex: "Online learning offers students great flexibility in scheduling their study hours." },
      { word: "interact", type: "verb", ipa: "/ˌɪntərˈækt/", meaning: "tương tác, giao lưu tiếp xúc", ex: "Students can interact directly with teachers via video conferencing tools." },
      { word: "native art", type: "noun", ipa: "/ˈneɪtɪv ɑːt/", meaning: "nghệ thuật bản địa", ex: "Museums help preserve precious native art forms from disappearing." },
      { word: "greet", type: "verb", ipa: "/ɡriːt/", meaning: "chào hỏi khi gặp gỡ", ex: "People in different cultures greet each other by shaking hands, bowing, or hugging." }
    ],
    grammar: {
      topic: "Future Simple & First Conditional with If / Unless",
      rules: [
        "1. Thì Tương lai đơn (Future Simple): S + will + V_inf | S + will not (won't) + V_inf | Will + S + V_inf? Dùng để đưa ra dự đoán tương lai, quyết định tức thì tại thời điểm nói hoặc lời hứa.",
        "2. Câu điều kiện loại 1 (First Conditional): Diễn tả một điều kiện có thể xảy ra ở hiện tại hoặc tương lai và kết quả có thể xảy ra.",
        "Cấu trúc: If + S + V(hiện tại đơn), S + will / can / must + V_inf.",
        "Nếu mệnh đề 'if' đứng trước, dùng dấu phẩy (,) ngăn cách. Nếu mệnh đề 'if' đứng sau, không cần dấu phẩy.",
        "3. 'Unless' tương đương với 'If ... not' (Trừ khi / Nếu không thì): Unless + S + V(hiện tại đơn khẳng định), S + will + V_inf.",
        "Ví dụ: Unless you study hard, you will fail = If you don't study hard, you will fail. TUYỆT ĐỐI KHÔNG dùng phủ định kép sau 'unless'."
      ],
      examples: [
        "If more people adopt a green lifestyle, our planet will become much cleaner.",
        "Unless students have stable Internet access, online learning will be difficult.",
        "They won't maintain their nomadic lifestyle if urbanization expands rapidly."
      ]
    },
    pronunciation: {
      sounds: "/br/ vs. /pr/",
      guide: "Cụm phụ âm /br/ là âm hữu thanh kết hợp giữa âm môi /b/ và âm lướt /r/ (bread, brave, brown). Cụm /pr/ là âm vô thanh bật hơi kết hợp giữa /p/ và /r/ (practice, proud, protect, present). Chú ý không chèn thêm nguyên âm /ə/ vào giữa hai phụ âm.",
      pairs: [
        { wordA: "bread /bred/ (bánh mì)", wordB: "present /ˈpreznt/ (quà tặng)" },
        { wordA: "branch /brɑːntʃ/ (cành cây)", wordB: "proud /praʊd/ (tự hào)" },
        { wordA: "brave /breɪv/ (dũng cảm)", wordB: "protect /prəˈtekt/ (bảo vệ)" },
        { wordA: "bridge /brɪdʒ/ (cây cầu)", wordB: "price /praɪs/ (giá cả)" }
      ]
    },
    communication: {
      function: "Expressing certainty and uncertainty (Diễn đạt mức độ chắc chắn)",
      dialogue: [
        { speaker: "Nick", text: "Do you think native tribal lifestyles will survive modern civilization?" },
        { speaker: "Mai", text: "I'm certain that some unique traditions will survive if governments support cultural preservation." },
        { speaker: "Nick", text: "Will online learning completely replace classroom teaching in the next 10 years?" },
        { speaker: "Mai", text: "I doubt it. Face-to-face interaction is still irreplaceable." }
      ]
    },
    skills: {
      reading: "Đọc hiểu về cuộc sống của người bản địa Alaska (Inuit): Thích nghi với khí hậu băng giá khắc nghiệt, di chuyển bằng xe chó kéo, săn bắt hải cẩu và cách thế hệ trẻ vừa giữ gìn truyền thống vừa học trực tuyến.",
      writing: "Viết đoạn văn (80–100 từ) nêu ưu điểm HOẶC nhược điểm của việc học trực tuyến: Nêu luận điểm rõ ràng → Đưa ra 2-3 luận cứ (linh hoạt thời gian, học tại nhà vs. mỏi mắt, thiếu tương tác trực tiếp) → Kết luận đề xuất giải pháp.",
      speaking: "So sánh lối sống thành thị hối hả và lối sống nông thôn thanh bình: Phân tích ưu và nhược điểm.",
      project: "Fascinating Lifestyles of the World: Chọn một lối sống độc đáo trên thế giới (Người du mục sa mạc Sahara, người chài lưới trên sông nước) và thuyết trình qua tranh ảnh."
    },
    quiz: [
      {
        q: "Choose the correct sentence using 'unless':",
        options: [
          "A. Unless you don't practice speaking English, you won't improve.",
          "B. Unless you practice speaking English, you won't improve.",
          "C. Unless you practice speaking English, you will improve.",
          "D. If you practice speaking English, you won't improve."
        ],
        a: 1,
        exp: "'Unless you practice...' = 'If you don't practice...'. Mệnh đề sau unless mang nghĩa khẳng định để tránh phủ định kép."
      },
      {
        q: "Complete the conditional: 'If we _______ traditional crafts, more young artisans will make a living from them.'",
        options: ["A. will support", "B. supported", "C. support", "D. are supporting"],
        a: 2,
        exp: "Mệnh đề 'if' của câu điều kiện loại 1 chia ở thì Hiện tại đơn: 'support'."
      },
      {
        q: "Which word starts with the consonant cluster /pr/?",
        options: ["A. brother", "B. brown", "C. practice", "D. bright"],
        a: 2,
        exp: "'practice' bắt đầu bằng cụm phụ âm /pr/. Các từ 'brother, brown, bright' đều bắt đầu bằng /br/."
      }
    ]
  },

  // REVIEW 2 (UNITS 4 - 6)
  {
    id: "review-2",
    unit: "REVIEW 2",
    theme: "OUR HERITAGE",
    title: "Review 2 (Units 4 - 5 - 6)",
    focus: "Ôn tập tổng hợp Theme 2: Dân tộc, Phong tục tập quán, Lối sống; Yes/No & Wh-questions, Quantifiers, Zero article, Conditional type 1; Cụm âm /k/ - /g/, /n/ - /θ/, /br/ - /pr/",
    color: "amber",
    vocab: [
      { word: "cultural diversity", type: "phrase", ipa: "/ˈkʌltʃərəl daɪˈvɜːsəti/", meaning: "sự đa dạng văn hóa", ex: "Viet Nam prides itself on its rich cultural diversity across 54 ethnic groups." },
      { word: "ancestral custom", type: "phrase", ipa: "/ænˈsestrəl ˈkʌstəm/", meaning: "tập tục của tổ tiên để lại", ex: "Respecting ancestral customs helps preserve national identity." },
      { word: "sustainable lifestyle", type: "phrase", ipa: "/səˈsteɪnəbl ˈlaɪfstaɪl/", meaning: "lối sống bền vững, thân thiện môi trường", ex: "Adopting a sustainable lifestyle is essential for preserving nature." }
    ],
    grammar: {
      topic: "Grammar Consolidation: Questions, Articles, Conditionals",
      rules: [
        "1. Questions: Yes/No (Aux + S + V?) vs. Wh- (Wh + aux + S + V?).",
        "2. Quantifiers: a few / many + Countable Noun; a little / much + Uncountable Noun.",
        "3. Zero article: dùng cho danh từ không đếm được/số nhiều nói chung, by + transport.",
        "4. First conditional: If + present simple, S + will + V_inf (Unless = If ... not)."
      ],
      examples: [
        "How many ethnic minority groups live in the northern mountainous provinces?",
        "If you visit a stilt house, you should respect the local customs.",
        "Unless we preserve native languages, they will disappear forever."
      ]
    },
    pronunciation: {
      sounds: "Phonetic Revision: /k/ - /g/, /n/ - /θ/, /br/ - /pr/",
      guide: "Ôn luyện phân biệt phụ âm vô thanh và hữu thanh (/k/ - /g/), âm mũi và âm răng thổi (/n/ - /θ/), cụm phụ âm đầu (/br/ - /pr/).",
      pairs: [
        { wordA: "coat /kəʊt/", wordB: "goat /ɡəʊt/" },
        { wordA: "ten /ten/", wordB: "thank /θæŋk/" },
        { wordA: "brave /breɪv/", wordB: "practice /ˈpræktɪs/" }
      ]
    },
    communication: {
      function: "Expressing opinions, giving advice, expressing certainty",
      dialogue: [
        { speaker: "David", text: "In your opinion, what should tourists do when attending village festivals?" },
        { speaker: "Linh", text: "I'm certain they should dress respectfully and ask before taking photos of elders." }
      ]
    },
    skills: {
      reading: "Đọc hiểu về lễ hội truyền thống mừng mùa hoa nở của đồng bào miền núi phía Bắc.",
      writing: "Viết đoạn văn ngắn (80-100 từ) về sự cần thiết của việc tôn trọng người cao tuổi trong văn hóa truyền thống Việt Nam.",
      speaking: "Thuyết trình về một nét đẹp văn hóa truyền thống của quê hương em."
    },
    quiz: [
      {
        q: "Choose the correct answer: 'If we _______ our heritage, future generations won't know their roots.'",
        options: ["A. don't protect", "B. won't protect", "C. protect", "D. protected"],
        a: 0,
        exp: "Mệnh đề 'if' của câu điều kiện loại 1 chia thì hiện tại đơn phủ định: 'don't protect'."
      },
      {
        q: "Choose the correct article: 'She usually travels to Da Nang by _______ air.'",
        options: ["A. the", "B. an", "C. a", "D. Ø (no article)"],
        a: 3,
        exp: "Cụm 'by air' (bằng đường hàng không) sử dụng zero article."
      }
    ]
  }
];

module.exports = { theme1And2Data };
