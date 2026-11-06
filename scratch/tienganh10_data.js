// Data for Tiếng Anh 10 - Global Success (GDPT 2018)
// 4 Themes • 10 Units • 4 Reviews • 21 Grammar Structures • 9 Communication Functions • 7 Writing Genres

const themes = [
  {
    id: 1,
    title: "Theme 1: Our Lives",
    desc: "Family life, household chores, environmental impact, green living, and the emotional power of music.",
    units: ["unit-1", "unit-2", "unit-3", "review-1"],
    icon: "fa-house-chimney-user",
    color: "from-blue-600 to-cyan-600"
  },
  {
    id: 2,
    title: "Theme 2: Our Society",
    desc: "Community service, volunteerism, innovative inventions, and technological advances shaping life.",
    units: ["unit-4", "unit-5", "review-2"],
    icon: "fa-users-line",
    color: "from-indigo-600 to-purple-600"
  },
  {
    id: 3,
    title: "Theme 3: Global Cooperation & Learning",
    desc: "Gender equality, career opportunities, international organisations (UNICEF, FAO), and digital blended learning.",
    units: ["unit-6", "unit-7", "unit-8", "review-3"],
    icon: "fa-globe",
    color: "from-emerald-600 to-teal-600"
  },
  {
    id: 4,
    title: "Theme 4: Our Environment & Our Future",
    desc: "Biodiversity preservation, climate change, wildlife rescue, and responsible ecotourism development.",
    units: ["unit-9", "unit-10", "review-4"],
    icon: "fa-seedling",
    color: "from-amber-600 to-rose-600"
  }
];

const units = {
  1: {
    num: 1,
    themeId: 1,
    title: "Family life",
    subtitle: "Đời sống gia đình & Phân chia trách nhiệm",
    goals: [
      "Pronounce consonant blends /br/, /kr/, /tr/ clearly without inserting an extra vowel.",
      "Master vocabulary & collocations about household chores (breadwinner, homemaker, do the laundry).",
      "Differentiate and use present simple (routines, facts) and present continuous (actions in progress, temporary situations).",
      "Read, listen, discuss benefits of sharing chores, write family daily routines, and explore family values in the UK and Viet Nam."
    ],
    pronunciation: {
      title: "Consonant blends: /br/, /kr/, /tr/",
      guide: "Pronounce the two consonants smoothly together without pausing or inserting a schwa /ə/ sound between them.",
      examples: [
        { word: "breadwinner", ipa: "/ˈbredwɪnə(r)/", meaning: "trụ cột kiếm thu nhập chính" },
        { word: "breakfast", ipa: "/ˈbrekfəst/", meaning: "bữa sáng" },
        { word: "crash", ipa: "/kræʃ/", meaning: "va chạm, sự cố" },
        { word: "crane", ipa: "/kreɪn/", meaning: "con sếu, cần cẩu" },
        { word: "traffic", ipa: "/ˈtræfɪk/", meaning: "giao thông" },
        { word: "train", ipa: "/treɪn/", meaning: "tàu hỏa, huấn luyện" }
      ]
    },
    vocab: [
      { word: "household chores", ipa: "/ˈhaʊshəʊld tʃɔːz/", type: "n. phr.", meaning: "việc nhà", eg: "Sharing household chores strengthens family bonds." },
      { word: "breadwinner", ipa: "/ˈbredwɪnə(r)/", type: "noun", meaning: "người kiếm thu nhập chính", eg: "In modern families, both parents are often breadwinners." },
      { word: "homemaker", ipa: "/ˈhəʊmmeɪkə(r)/", type: "noun", meaning: "người nội trợ quán xuyến gia đình", eg: "Being a homemaker requires exceptional management skills." },
      { word: "do the cooking", ipa: "/duː ðə ˈkʊkɪŋ/", type: "verb phr.", meaning: "nấu ăn", eg: "My father often does the cooking on Sunday evenings." },
      { word: "do the laundry", ipa: "/duː ðə ˈlɔːndri/", type: "verb phr.", meaning: "giặt giũ quần áo", eg: "She does the laundry twice a week with the washing machine." },
      { word: "do the washing-up", ipa: "/duː ðə ˌwɒʃɪŋ ˈʌp/", type: "verb phr.", meaning: "rửa bát đĩa", eg: "I usually do the washing-up after dinner." },
      { word: "do heavy lifting", ipa: "/duː ˌhevi ˈlɪftɪŋ/", type: "verb phr.", meaning: "làm việc nặng nhọc", eg: "Brothers usually help with heavy lifting around the house." },
      { word: "shop for groceries", ipa: "/ʃɒp fɔː(r) ˈɡrəʊsəriz/", type: "verb phr.", meaning: "mua thực phẩm, nhu yếu phẩm", eg: "Mum shops for groceries every Saturday morning." },
      { word: "put out the rubbish", ipa: "/pʊt aʊt ðə ˈrʌbɪʃ/", type: "verb phr.", meaning: "đem rác đi đổ", eg: "Don't forget to put out the rubbish before going to bed." },
      { word: "be responsible for", ipa: "/bi rɪˈspɒnsəbl fɔː(r)/", type: "adj. phr.", meaning: "chịu trách nhiệm về việc gì", eg: "Each family member is responsible for specific tasks." }
    ],
    grammar: [
      {
        title: "Present Simple vs. Present Continuous",
        desc: "Present simple diễn tả thói quen, chân lí hiển nhiên hoặc sự sắp đặt ổn định. Present continuous diễn tả hành động đang diễn ra tại thời điểm nói hoặc tình huống tạm thời khác ngày thường.",
        formula: "Present Simple: S + V(s/es) | S + do/does not + V | Do/Does + S + V?\nPresent Continuous: S + am/is/are + V-ing | S + am/is/are not + V-ing",
        examples: [
          { en: "My sister usually does the washing-up, but today she is studying for her exam.", vi: "Chị gái tôi thường rửa bát, nhưng hôm nay chị ấy đang ôn thi." },
          { en: "Dad is working late tonight, so I am preparing dinner.", vi: "Tối nay bố làm về muộn nên tôi đang chuẩn bị bữa tối." }
        ],
        notes: "Không dùng thì tiếp diễn với các động từ chỉ trạng thái (stative verbs): know, like, love, understand, believe, own, belong."
      }
    ],
    everydayEnglish: {
      function: "Expressing opinions and responding politely",
      phrases: [
        { en: "In my opinion, teenagers should share household chores.", vi: "Theo ý tôi, thanh thiếu niên nên chia sẻ việc nhà." },
        { en: "I couldn't agree more. It teaches them responsibility.", vi: "Tôi hoàn toàn đồng ý. Việc đó rèn cho họ tinh thần trách nhiệm." },
        { en: "I see your point, but they also need time for study.", vi: "Tôi hiểu ý bạn, nhưng các bạn ấy cũng cần thời gian học tập." }
      ]
    },
    skills: {
      reading: "Đọc bài luận về lợi ích của việc chia sẻ việc nhà: phát triển kĩ năng sống, rèn tính tự lập, hiểu được công lao của cha mẹ và xây dựng mối quan hệ gia đình gắn kết.",
      speaking: "Thảo luận theo cặp: Ai nên chịu trách nhiệm làm việc nhà trong gia đình hiện đại? Đưa ra luận điểm, ví dụ minh chứng và quan điểm cá nhân.",
      listening: "Nghe cuộc trò chuyện trong talk show gia đình: phân biệt thói quen thường nhật và hành động đặc biệt diễn ra trong tuần này của từng thành viên.",
      writing: "Viết đoạn văn (120-150 từ) miêu tả nếp sinh hoạt gia đình vào các ngày thường và cuối tuần, sử dụng thì hiện tại đơn, hiện tại tiếp diễn và trạng từ tần suất.",
      cultureClil: "Giá trị gia đình ở Vương quốc Anh và Việt Nam: So sánh mức độ phân chia bình đẳng việc nhà, sự tôn trọng không gian cá nhân và trách nhiệm phụng dưỡng cha mẹ."
    },
    project: "Family Day Celebration Project: Lập kế hoạch tổ chức 'Ngày Gia đình' (Family Day) với các hoạt động kết nối, phân công nấu ăn và làm thiệp tri ân cha mẹ.",
    quiz: [
      {
        q: "Look! My mother ______ dinner in the kitchen right now.",
        options: ["is preparing", "prepares", "prepared", "prepare"],
        ans: 0,
        exp: "Dấu hiệu 'Look!' và 'right now' biểu thị hành động đang diễn ra tại thời điểm nói, ta dùng thì Present Continuous: 'is preparing'."
      },
      {
        q: "Which collocation means 'người kiếm thu nhập chính nuôi sống gia đình'?",
        options: ["Breadwinner", "Homemaker", "Baby-sitter", "Shop assistant"],
        ans: 0,
        exp: "'Breadwinner' là trụ cột kinh tế nuôi gia đình, đối lập với 'Homemaker' là người nội trợ quán xuyến việc nhà."
      },
      {
        q: "My brother usually ______ the rubbish, but tonight he ______ for his exam.",
        options: [
          "puts out / is studying",
          "is putting out / studies",
          "put out / study",
          "puts out / studies"
        ],
        ans: 0,
        exp: "Vế đầu có 'usually' chỉ thói quen dùng hiện tại đơn 'puts out'; vế sau có 'tonight' chỉ tình huống tạm thời khác thường ngày dùng hiện tại tiếp diễn 'is studying'."
      }
    ]
  },

  2: {
    num: 2,
    themeId: 1,
    title: "Humans and the environment",
    subtitle: "Con người và môi trường • Lối sống xanh",
    goals: [
      "Pronounce consonant clusters /kl/, /gl/, /gr/, /pr/ clearly and accurately.",
      "Expand vocabulary related to eco-friendly living, carbon footprint, renewable energy, and 3Rs (Reduce, Reuse, Recycle).",
      "Master and distinguish 'will' (spontaneous decisions, predictions without present evidence) and 'be going to' (prior plans, predictions with evidence).",
      "Form and use the Passive Voice in the Present Simple and Future Simple."
    ],
    pronunciation: {
      title: "Consonant clusters: /kl/, /gl/, /gr/, /pr/",
      guide: "Keep the consonant transition swift without inserting vowel sounds between the stops and liquids.",
      examples: [
        { word: "clean", ipa: "/kliːn/", meaning: "sạch sẽ" },
        { word: "glass", ipa: "/ɡlɑːs/", meaning: "thủy tinh, kính" },
        { word: "green", ipa: "/ɡriːn/", meaning: "xanh lá, thân thiện môi trường" },
        { word: "protect", ipa: "/prəˈtekt/", meaning: "bảo vệ" }
      ]
    },
    vocab: [
      { word: "carbon footprint", ipa: "/ˌkɑːbən ˈfʊtprɪnt/", type: "noun", meaning: "dấu chân carbon (lượng phát thải CO2 cá nhân)", eg: "Cycling to school significantly reduces your carbon footprint." },
      { word: "green lifestyle", ipa: "/ɡriːn ˈlaɪfstaɪl/", type: "n. phr.", meaning: "lối sống xanh thân thiện môi trường", eg: "More young people are adopting a green lifestyle." },
      { word: "eco-friendly", ipa: "/ˌiːkəʊ ˈfrendli/", type: "adj.", meaning: "thân thiện với môi trường sinh thái", eg: "Always choose eco-friendly packaging when shopping." },
      { word: "save energy", ipa: "/seɪv ˈenədʒi/", type: "verb phr.", meaning: "tiết kiệm năng lượng điện nước", eg: "Turning off unused appliances helps save energy." },
      { word: "reduce, reuse, recycle", ipa: "/rɪˈdjuːs ˌriːˈjuːz ˌriːˈsaɪkl/", type: "verb phr.", meaning: "giảm thiểu, tái sử dụng, tái chế (3Rs)", eg: "The 3Rs principle is essential for waste management." },
      { word: "public transport", ipa: "/ˌpʌblɪk ˈtrænspɔːt/", type: "n. phr.", meaning: "phương tiện giao thông công cộng", eg: "Using public transport reduces traffic congestion and emissions." },
      { word: "environmental impact", ipa: "/ɪnˌvaɪrənˈmentl ˈɪmpækt/", type: "n. phr.", meaning: "tác động tới môi trường", eg: "Factories must assess their environmental impact regularly." },
      { word: "organic food", ipa: "/ɔːˈɡænɪk fuːd/", type: "n. phr.", meaning: "thực phẩm hữu cơ sạch", eg: "Organic food is grown without harmful chemical pesticides." }
    ],
    grammar: [
      {
        title: "Will vs. Be going to & The Passive Voice",
        desc: "Will dùng cho quyết định nảy ra ngay lúc nói, lời hứa hoặc dự đoán chủ quan. Be going to dùng cho dự định đã lên kế hoạch từ trước hoặc dự đoán có căn cứ xác thực ở hiện tại. Câu bị động (Passive voice) nhấn mạnh đối tượng tiếp nhận tác động.",
        formula: "Will: S + will + V(bare)\nBe going to: S + am/is/are going to + V(bare)\nPassive Present: S + am/is/are + V3/ed (+ by agent)\nPassive Future: S + will be + V3/ed (+ by agent)",
        examples: [
          { en: "Look at those dark clouds! It is going to rain.", vi: "Nhìn những đám mây đen kìa! Trời sắp sửa mưa rồi." },
          { en: "Plastic bottles are collected and recycled into new materials.", vi: "Chai nhựa được thu gom và tái chế thành vật liệu mới." },
          { en: "A clean-up campaign will be organized next weekend.", vi: "Một chiến dịch làm sạch sẽ được tổ chức vào cuối tuần tới." }
        ],
        notes: "Chỉ chuyển sang câu bị động với ngoại động từ (transitive verbs) có tân ngữ trực tiếp."
      }
    ],
    everydayEnglish: {
      function: "Asking for and giving advice on green living",
      phrases: [
        { en: "What should we do to reduce plastic waste?", vi: "Chúng ta nên làm gì để giảm rác thải nhựa?" },
        { en: "You should carry a reusable water bottle and cloth shopping bags.", vi: "Bạn nên mang theo bình nước dùng nhiều lần và túi vải mua sắm." },
        { en: "If I were you, I would take the bus instead of a motorbike.", vi: "Nếu tôi là bạn, tôi sẽ đi xe buýt thay vì xe máy." }
      ]
    },
    skills: {
      reading: "Đọc bài viết về các phương pháp hiệu quả để giảm dấu chân carbon cá nhân (Go Green at School and Home).",
      speaking: "Thảo luận nhóm đề xuất các giải pháp khả thi để biến trường học thành 'Ngôi trường xanh' (Green School Initiative).",
      listening: "Nghe thông báo tuyển thành viên cho câu lạc bộ Môi trường xanh và lịch trình sự kiện 'Clean Up the Park'.",
      writing: "Viết một thông báo chính thức (Announcement, 120-150 từ) về sự kiện ngày hội đổi rác tái chế lấy cây xanh tại trường học.",
      cultureClil: "Khái niệm 'Carbon footprint': Đo lường lượng khí thải nhà kính (tính theo CO2 tương đương) sinh ra từ việc đi lại, tiêu thụ thực phẩm và sử dụng điện."
    },
    project: "Go Green Weekend Plan: Lập kế hoạch chi tiết cho một cuối tuần sống xanh: tiết kiệm điện, thu gom pin cũ, đạp xe và ăn thực phẩm thuần chay.",
    quiz: [
      {
        q: "The room is very hot. I ______ the air conditioner right away.",
        options: ["will turn on", "am going to turn on", "turn on", "turned on"],
        ans: 0,
        exp: "Quyết định đưa ra ngay tại thời điểm nói ('right away') do cảm thấy phòng nóng, ta dùng 'will turn on'."
      },
      {
        q: "Look at the dark clouds gathering! It ______ heavily.",
        options: ["is going to rain", "will rain", "rains", "is raining"],
        ans: 0,
        exp: "Dự đoán có bằng chứng cụ thể rõ ràng ở hiện tại ('dark clouds gathering') dùng cấu trúc 'is going to rain'."
      },
      {
        q: "Millions of plastic bags ______ into the ocean every year.",
        options: ["are thrown", "is thrown", "will throw", "throw"],
        ans: 0,
        exp: "Chủ ngữ số nhiều 'plastic bags' ở thì hiện tại đơn câu bị động dùng: 'are + thrown (V3)'."
      }
    ]
  },

  3: {
    num: 3,
    themeId: 1,
    title: "Music",
    subtitle: "Âm nhạc • Cảm xúc & Di sản",
    goals: [
      "Master word stress in two-syllable words according to their parts of speech (nouns, adjectives, verbs).",
      "Expand vocabulary concerning music shows, traditional instruments, artists, and live performances.",
      "Build compound sentences using coordinating conjunctions (and, but, or, so).",
      "Use gerunds (V-ing) and bare infinitives correctly after specific verbs (enjoy, look forward to, make, let)."
    ],
    pronunciation: {
      title: "Word stress in two-syllable words",
      guide: "Most two-syllable nouns and adjectives have stress on the FIRST syllable. Most two-syllable verbs have stress on the SECOND syllable.",
      examples: [
        { word: "music", ipa: "/ˈmjuːzɪk/", meaning: "âm nhạc (noun -> trọng âm 1)" },
        { word: "singer", ipa: "/ˈsɪŋə(r)/", meaning: "ca sĩ (noun -> trọng âm 1)" },
        { word: "perform", ipa: "/pəˈfɔːm/", meaning: "biểu diễn (verb -> trọng âm 2)" },
        { word: "relax", ipa: "/rɪˈlæks/", meaning: "thư giãn (verb -> trọng âm 2)" }
      ]
    },
    vocab: [
      { word: "music festival", ipa: "/ˈmjuːzɪk ˈfestɪvl/", type: "n. phr.", meaning: "lễ hội âm nhạc", eg: "Thousands of fans attended the outdoor music festival." },
      { word: "live performance", ipa: "/laɪv pəˈfɔːməns/", type: "n. phr.", meaning: "buổi biểu diễn trực tiếp", eg: "Her live performance captivated the entire audience." },
      { word: "audience", ipa: "/ˈɔːdiəns/", type: "noun", meaning: "khán giả thưởng thức", eg: "The audience gave the pianist a standing ovation." },
      { word: "musical instrument", ipa: "/ˈmjuːzɪkl ˈɪnstrəmənt/", type: "n. phr.", meaning: "nhạc cụ âm nhạc", eg: "He can play three different musical instruments." },
      { word: "traditional music", ipa: "/trəˈdɪʃənl ˈmjuːzɪk/", type: "n. phr.", meaning: "âm nhạc cổ truyền", eg: "Quan ho is a famous genre of Vietnamese traditional music." },
      { word: "participant", ipa: "/pɑːˈtɪsɪpənt/", type: "noun", meaning: "người tham gia", eg: "Contest participants must prepare two contrasting songs." },
      { word: "look forward to", ipa: "/lʊk ˈfɔːwəd tuː/", type: "verb phr.", meaning: "rất mong đợi (đi với V-ing)", eg: "We are looking forward to attending the concert." },
      { word: "talented", ipa: "/ˈtæləntɪd/", type: "adj.", meaning: "tài năng, có năng khiếu", eg: "She is a remarkably talented singer and songwriter." }
    ],
    grammar: [
      {
        title: "Compound Sentences, Gerunds & Bare Infinitives",
        desc: "Câu ghép liên kết hai mệnh đề độc lập bằng liên từ đẳng lập (FANBOYS: and, but, or, so). Gerund (V-ing) dùng sau giới từ và các động từ như enjoy, mind, consider, look forward to. Bare infinitive dùng sau modal verbs và cấu trúc make/let + O + V.",
        formula: "Compound: Clause 1, + and / but / or / so + Clause 2\nGerund: Verb + V-ing | Preposition + V-ing\nBare Inf: make / let + Object + V(bare) | Modal verb + V(bare)",
        examples: [
          { en: "The concert was exciting, so everyone cheered loudly.", vi: "Buổi hòa nhạc rất sôi động, vì vậy mọi người reo hò cuồng nhiệt." },
          { en: "She enjoys listening to classical music before going to bed.", vi: "Cô ấy thích nghe nhạc cổ điển trước khi đi ngủ." },
          { en: "The rhythmic beat made everyone dance together.", vi: "Giai điệu nhịp nhàng khiến tất cả mọi người cùng nhảy múa." }
        ],
        notes: "Chú ý phân biệt 'to-infinitive' (chỉ mục đích: He stopped to play music) và 'gerund' (chấm dứt hành động: He stopped playing music)."
      }
    ],
    everydayEnglish: {
      function: "Making and responding to suggestions",
      phrases: [
        { en: "Why don’t we go to the acoustic concert tonight?", vi: "Tại sao tối nay chúng ta không đi nghe nhạc acoustic nhỉ?" },
        { en: "That sounds like a great idea! I’d love to.", vi: "Ý kiến hay tuyệt! Mình rất muốn đi." },
        { en: "I'd love to, but I have to finish my assignment.", vi: "Mình rất muốn đi, nhưng mình phải làm xong bài tập đã." }
      ]
    },
    skills: {
      reading: "Đọc bài viết về một cuộc thi âm nhạc truyền hình thực tế nổi tiếng (Vietnam Idol / The Voice) và con đường trở thành ca sĩ chuyên nghiệp.",
      speaking: "Thuyết trình giới thiệu chương trình âm nhạc em yêu thích: định dạng, giám khảo, thí sinh và trải nghiệm cá nhân.",
      listening: "Nghe buổi phỏng vấn một nhạc sĩ trẻ nói về niềm đam mê kết hợp nhạc cụ dân tộc (đàn bầu, đàn tranh) với âm nhạc điện tử hiện đại.",
      writing: "Viết bài blog ngắn (120-150 từ) chia sẻ trải nghiệm tham dự một buổi hòa nhạc trực tiếp hoặc biểu diễn văn nghệ trường.",
      cultureClil: "Hát Chầu văn (Chau van singing): Hình thức diễn xướng dân gian gắn liền với tín ngưỡng thờ Mẫu của người Việt, được UNESCO vinh danh là di sản văn hóa phi vật thể."
    },
    project: "Traditional Music Heritage: Nghiên cứu và thuyết trình về một loại hình âm nhạc truyền thống của Việt Nam (Quan họ, Ca trù, Nhã nhạc cung đình Huế, Đờn ca tài tử).",
    quiz: [
      {
        q: "The loud and energetic music made the entire audience ______ enthusiastically.",
        options: ["dance", "to dance", "dancing", "danced"],
        ans: 0,
        exp: "Cấu trúc 'make + Object + V(bare)' (khiến cho ai làm gì), nên ta chọn 'dance'."
      },
      {
        q: "We are really looking forward to ______ our idol in person.",
        options: ["seeing", "see", "to see", "saw"],
        ans: 0,
        exp: "Sau cụm cố định 'look forward to', 'to' là giới từ nên theo sau bắt buộc là một Gerund (V-ing): 'seeing'."
      },
      {
        q: "The tickets were expensive, ______ we decided to buy them anyway because we love the band.",
        options: ["but", "so", "and", "or"],
        ans: 0,
        exp: "Hai mệnh đề có mối quan hệ tương phản (vé đắt NHƯNG vẫn mua vì yêu thích ban nhạc), ta dùng liên từ 'but'."
      }
    ]
  },

  "review-1": {
    num: "review-1",
    isReview: true,
    themeId: 1,
    title: "Review 1 (Units 1, 2, 3)",
    subtitle: "Ôn tập tổng hợp Chủ điểm 1: Our Lives",
    goals: [
      "Review consonant blends /br/, /kr/, /tr/, /kl/, /gl/, /gr/, /pr/ and two-syllable word stress.",
      "Consolidate vocabulary about family routines, eco-lifestyle, carbon footprints, and music shows.",
      "Review grammar: Present Simple vs. Continuous, Will vs. Be going to, Passive Voice, Compound Sentences, Gerunds & Bare Infinitives."
    ],
    contentSummary: `
- **Pronunciation:** Cluster articulation & noun/verb stress rules.
- **Grammar Essentials:**
  1. *Present Simple* (routine) vs. *Present Continuous* (temporary/now).
  2. *Will* (instant decision) vs. *Be going to* (prior plan/evidence).
  3. *Passive Voice:* Be + V3/ed.
  4. *Gerunds* (after prepositions, enjoy, look forward to) & *Bare Infinitives* (after make, let, modals).
    `,
    quiz: [
      {
        q: "While my mother is at work, my brother and I ______ the household chores.",
        options: ["divide", "are dividing", "divided", "divides"],
        ans: 0,
        exp: "Diễn tả thói quen phân chia việc nhà thông thường giữa hai anh em, ta dùng thì hiện tại đơn chủ ngữ số nhiều: 'divide'."
      },
      {
        q: "Don't throw away plastic containers! They can ______ to hold small plants.",
        options: ["be reused", "reused", "be reuse", "reuse"],
        ans: 0,
        exp: "Thể bị động với động từ khuyết thiếu 'can + be + V3': 'can be reused' (có thể được tái sử dụng)."
      },
      {
        q: "She avoids ______ late at night because it disturbs her neighbours.",
        options: ["practising", "to practise", "practise", "practised"],
        ans: 0,
        exp: "Sau động từ 'avoid' luôn là một Gerund (V-ing): 'practising'."
      }
    ]
  },

  4: {
    num: 4,
    themeId: 2,
    title: "For a better community",
    subtitle: "Vì một cộng đồng tốt đẹp hơn • Tình nguyện & Sẻ chia",
    goals: [
      "Master word stress in two-syllable words and suffixes forming adjectives (-ed/-ing, -ful/-less).",
      "Acquire vocabulary regarding volunteer work, community development, charitable donations, and NGOs.",
      "Master and combine Past Simple and Past Continuous with 'when' and 'while'.",
      "Write a formal volunteer application letter stating reasons, skills, and availability."
    ],
    pronunciation: {
      title: "Stress in two-syllable words & Adjective suffixes",
      guide: "Adjectives ending in -ed describe people's feelings (confused, excited). Adjectives ending in -ing describe the quality of things/events causing the feeling (confusing, exciting). Suffix -ful means 'full of' (helpful), while -less means 'without' (helpless).",
      examples: [
        { word: "interested / interesting", ipa: "/ˈɪntrəstɪd/ - /ˈɪntrəstɪŋ/", meaning: "thấy hào hứng / thú vị" },
        { word: "hopeless / hopeful", ipa: "/ˈhəʊpləs/ - /ˈhəʊpfl/", meaning: "vô vọng / tràn trề hi vọng" },
        { word: "donate", ipa: "/dəʊˈneɪt/", meaning: "quyên góp (verb stress 2)" },
        { word: "volunteer", ipa: "/ˌvɒlənˈtɪə(r)/", meaning: "tình nguyện viên" }
      ]
    },
    vocab: [
      { word: "volunteer work", ipa: "/ˌvɒlənˈtɪə wɜːk/", type: "n. phr.", meaning: "công việc tình nguyện", eg: "Doing volunteer work helps young people build essential empathy." },
      { word: "donate / donation", ipa: "/dəʊˈneɪt/ - /dəʊˈneɪʃn/", type: "v. / n.", meaning: "quyên góp / khoản quyên góp", eg: "Many local businesses donated warm clothes to children in need." },
      { word: "raise money", ipa: "/reɪz ˈmʌni/", type: "verb phr.", meaning: "gây quỹ từ thiện", eg: "Our school club raised money for the local animal shelter." },
      { word: "non-governmental organisation (NGO)", ipa: "/ˌnɒn ˌɡʌvənˈmentl/", type: "n. phr.", meaning: "tổ chức phi chính phủ", eg: "The NGO provides free medical check-ups in rural mountainous areas." },
      { word: "orphanage", ipa: "/ˈɔːfənɪdʒ/", type: "noun", meaning: "trại trẻ mồ côi", eg: "Volunteers visit the orphanage every weekend to teach English." },
      { word: "generous", ipa: "/ˈdʒenərəs/", type: "adj.", meaning: "hào phóng, rộng lượng", eg: "They received generous financial support from international donors." },
      { word: "participate in", ipa: "/pɑːˈtɪsɪpeɪt ɪn/", type: "verb phr.", meaning: "tham gia vào", eg: "Over a hundred students participated in the environmental clean-up." },
      { word: "community development", ipa: "/kəˈmjuːnəti dɪˈveləpmənt/", type: "n. phr.", meaning: "phát triển cộng đồng", eg: "Education is the key driver of community development." }
    ],
    grammar: [
      {
        title: "Past Simple vs. Past Continuous with When & While",
        desc: "Thì quá khứ đơn (Past Simple) diễn tả hành động ngắn xen vào hoặc chuỗi sự việc đã kết thúc. Thì quá khứ tiếp diễn (Past Continuous) diễn tả hành động nền đang diễn ra tại một thời điểm xác định trong quá khứ.",
        formula: "Past Simple: S + V2/ed\nPast Continuous: S + was/were + V-ing\nInterruption: When + Past Simple, Past Continuous | While + Past Continuous, Past Simple",
        examples: [
          { en: "While we were sorting donated books, a new volunteer arrived.", vi: "Khi chúng tôi đang phân loại sách quyên góp thì một tình nguyện viên mới đến." },
          { en: "The volunteers were teaching children when the rain started.", vi: "Các tình nguyện viên đang dạy học cho trẻ thì trời bắt đầu đổ mưa." }
        ],
        notes: "While thường đi với thì tiếp diễn (hành động kéo dài); When thường đi với thì quá khứ đơn (hành động ngắn cắt ngang)."
      }
    ],
    everydayEnglish: {
      function: "Expressing feelings and emotions",
      phrases: [
        { en: "I felt really proud when we finished painting the classroom.", vi: "Tôi cảm thấy thực sự tự hào khi chúng tôi sơn xong phòng học." },
        { en: "That must have been an amazing and rewarding experience!", vi: "Đó chắc chắn là một trải nghiệm tuyệt vời và ý nghĩa!" },
        { en: "I was a bit nervous at first, but everything went smoothly.", vi: "Lúc đầu tôi hơi lo lắng, nhưng mọi thứ đã diễn ra suôn sẻ." }
      ]
    },
    skills: {
      reading: "Đọc bài viết về các hoạt động tình nguyện viên trẻ tại Việt Nam (Mùa hè xanh, Tiếp sức mùa thi) và giá trị của sự cống hiến.",
      speaking: "Trình bày về lợi ích của công việc tình nguyện đối với bản thân (rèn kĩ năng, mở rộng quan hệ) và cộng đồng xã hội.",
      listening: "Nghe thông báo tuyển tình nguyện viên tham gia dự án dạy học và bảo vệ trẻ em có hoàn cảnh khó khăn.",
      writing: "Viết thư xin làm tình nguyện viên (Job Application Letter, 120-150 từ): vị trí mong muốn, lí do ứng tuyển, kĩ năng phù hợp và cam kết thời gian.",
      cultureClil: "Tổ chức Save the Children: Lịch sử thành lập, sứ mệnh bảo vệ quyền trẻ em, cung cấp dinh dưỡng, giáo dục và cứu trợ khẩn cấp trên toàn cầu."
    },
    project: "Community Action Plan: Khảo sát một vấn đề cấp thiết tại địa phương (người già neo đơn, rác thải ven sông) và lập dự án tình nguyện để giải quyết.",
    quiz: [
      {
        q: "While the students ______ the playground, they found a lost kitten.",
        options: ["were cleaning", "cleaned", "clean", "are cleaning"],
        ans: 0,
        exp: "Hành động nền kéo dài trong quá khứ sau 'While' chia ở thì Past Continuous: 'were cleaning'."
      },
      {
        q: "The explanations were very ______, which left all of us feeling totally ______.",
        options: [
          "confusing / confused",
          "confused / confusing",
          "confused / confused",
          "confusing / confusing"
        ],
        ans: 0,
        exp: "Lời giải thích mang tính chất gây bối rối dùng tính từ đuôi -ing ('confusing'); con người cảm thấy bối rối dùng tính từ đuôi -ed ('confused')."
      },
      {
        q: "They ______ hundreds of warm blankets to families affected by the flood last month.",
        options: ["donated", "were donating", "donate", "have donated"],
        ans: 0,
        exp: "Có mốc thời gian quá khứ cụ thể đã chấm dứt ('last month'), ta dùng thì Past Simple: 'donated'."
      }
    ]
  },

  5: {
    num: 5,
    themeId: 2,
    title: "Inventions",
    subtitle: "Phát minh & Công nghệ • Trí tuệ nhân tạo",
    goals: [
      "Master word stress in three-syllable nouns (telephone, Internet, processor).",
      "Expand vocabulary concerning modern digital devices, AI, 3D printing, and computer hardware components.",
      "Form and use the Present Perfect tense for past experiences, recent achievements, and actions with present relevance.",
      "Write an informative paragraph evaluating the benefits and drawbacks of a technological invention."
    ],
    pronunciation: {
      title: "Stress in three-syllable nouns",
      guide: "Most three-syllable nouns have the primary stress on the first syllable (processor, Internet, smartphone, battery, telescope).",
      examples: [
        { word: "processor", ipa: "/ˈprəʊsesə(r)/", meaning: "bộ vi xử lí máy tính" },
        { word: "Internet", ipa: "/ˈɪntənet/", meaning: "mạng Internet" },
        { word: "battery", ipa: "/ˈbætəri/", meaning: "pin, ắc quy" },
        { word: "telescope", ipa: "/ˈtelɪskəʊp/", meaning: "kính thiên văn" }
      ]
    },
    vocab: [
      { word: "artificial intelligence (AI)", ipa: "/ˌɑːtɪfɪʃl ɪnˈtelɪdʒəns/", type: "n. phr.", meaning: "trí tuệ nhân tạo", eg: "Artificial intelligence is transforming medical diagnosis." },
      { word: "3D printing", ipa: "/ˌθriː diː ˈprɪntɪŋ/", type: "n. phr.", meaning: "công nghệ in 3D tạo khối", eg: "3D printing allows engineers to create complex parts quickly." },
      { word: "e-reader", ipa: "/ˈiː riːdə(r)/", type: "noun", meaning: "máy đọc sách điện tử", eg: "An e-reader can store thousands of books in a lightweight device." },
      { word: "driverless car", ipa: "/ˈdraɪvələs kɑː(r)/", type: "n. phr.", meaning: "xe ô tô tự hành không người lái", eg: "Driverless cars use smart sensors and cameras to navigate." },
      { word: "portable", ipa: "/ˈpɔːtəbl/", type: "adj.", meaning: "di động, dễ mang theo", eg: "Laptops are portable computers suitable for remote work." },
      { word: "install", ipa: "/ɪnˈstɔːl/", type: "verb", meaning: "cài đặt (phần mềm, ứng dụng)", eg: "You need to install the latest security update on your device." },
      { word: "hardware", ipa: "/ˈhɑːdweə(r)/", type: "noun", meaning: "phần cứng máy tính", eg: "Computer hardware includes the CPU, RAM, and monitor." },
      { word: "valuable", ipa: "/ˈvæljuəbl/", type: "adj.", meaning: "có giá trị cao, hữu ích", eg: "Smartphones have become valuable tools for daily learning." }
    ],
    grammar: [
      {
        title: "Present Perfect Tense",
        desc: "Thì hiện tại hoàn thành diễn tả hành động đã xảy ra trong quá khứ nhưng kết quả hoặc tầm ảnh hưởng vẫn còn ở hiện tại, hoặc trải nghiệm tính tới nay (ever, never), hay hành động bắt đầu trong quá khứ kéo dài đến hiện tại (since, for).",
        formula: "S + have/has + V3/ed | S + have/has not + V3/ed | Have/Has + S + V3/ed?\nSignals: already, yet, just, ever, never, since + point of time, for + period of time",
        examples: [
          { en: "Scientists have invented many groundbreaking devices recently.", vi: "Các nhà khoa học gần đây đã phát minh nhiều thiết bị mang tính đột phá." },
          { en: "Have you ever used a 3D printer for your school projects?", vi: "Bạn đã từng sử dụng máy in 3D cho dự án trường học chưa?" },
          { en: "He has worked with AI software for over five years.", vi: "Anh ấy đã làm việc với phần mềm AI hơn 5 năm nay." }
        ],
        notes: "Không dùng thì hiện tại hoàn thành với các mốc thời gian quá khứ đã chấm dứt hẳn (yesterday, in 2010, last week -> dùng Past Simple)."
      }
    ],
    everydayEnglish: {
      function: "Making and responding to requests for assistance with devices",
      phrases: [
        { en: "Could you show me how to install this learning application?", vi: "Bạn có thể chỉ cho mình cách cài đặt ứng dụng học tập này không?" },
        { en: "Certainly! First, open the App Store and search for the app name.", vi: "Chắc chắn rồi! Trước hết, mở kho ứng dụng và tìm kiếm tên app." },
        { en: "Would you mind checking my tablet settings?", vi: "Bạn có phiền kiểm tra cài đặt máy tính bảng giúp mình không?" }
      ]
    },
    skills: {
      reading: "Đọc bài viết về sự phát triển vượt bậc của công nghệ in 3D trong y học (tạo xương giả nhân tạo) và xây dựng nhà ở xã hội.",
      speaking: "Tranh biện: 'Điện thoại thông minh trong lớp học: Công cụ học tập tiện ích hay nguồn gây xao nhãng lớn?'.",
      listening: "Nghe đoạn hướng dẫn về các tính năng vượt trội của thiết bị đọc sách điện tử và mẹo bảo vệ thị lực.",
      writing: "Viết đoạn văn (120-150 từ) phân tích lợi ích và hạn chế của một phát minh công nghệ mà em sử dụng hằng ngày.",
      cultureClil: "Phần cứng máy tính (Computer Hardware): Tìm hiểu chức năng của bộ vi xử lí CPU (bộ não xử lí), RAM (bộ nhớ tạm) và ổ cứng SSD lưu trữ dữ liệu."
    },
    project: "Inventors of Tomorrow: Đề xuất ý tưởng một phát minh mới giải quyết vấn đề học tập hoặc bảo vệ môi trường trong trường học của em.",
    quiz: [
      {
        q: "Artificial intelligence ______ significant changes in education over the past decade.",
        options: ["has brought", "brought", "bring", "is bringing"],
        ans: 0,
        exp: "Cụm 'over the past decade' chỉ khoảng thời gian kéo dài tới hiện tại, ta dùng thì Present Perfect với chủ ngữ số ít 'AI': 'has brought'."
      },
      {
        q: "Which word has the primary stress on the FIRST syllable?",
        options: ["Processor", "Computer", "Invention", "Device"],
        ans: 0,
        exp: "'Processor' /ˈprəʊsesə(r)/ có trọng âm rơi vào âm tiết đầu; ba từ còn lại có trọng âm ở âm tiết thứ 2: com-PU-ter, in-VEN-tion, de-VICE."
      },
      {
        q: "I have not installed the new antivirus software ______.",
        options: ["yet", "already", "since", "just"],
        ans: 0,
        exp: "Trong câu phủ định của thì hiện tại hoàn thành, từ đứng ở cuối câu mang nghĩa 'vẫn chưa' là 'yet'."
      }
    ]
  },

  "review-2": {
    num: "review-2",
    isReview: true,
    themeId: 2,
    title: "Review 2 (Units 4, 5)",
    subtitle: "Ôn tập tổng hợp Chủ điểm 2: Our Society",
    goals: [
      "Review word stress in two- and three-syllable words and adjective suffixes (-ed/-ing, -ful/-less).",
      "Consolidate vocabulary about volunteer work, community service, digital inventions, and computer components.",
      "Master Past Simple vs. Past Continuous with when/while and Present Perfect tense."
    ],
    contentSummary: `
- **Pronunciation:** 2-syllable & 3-syllable noun stress rules; adjective suffixes.
- **Grammar Essentials:**
  1. *Past Simple vs. Past Continuous:* Action in progress interrupted by a short event.
  2. *Present Perfect:* S + have/has + V3/ed (experiences, unfinished actions, recent results).
  3. *Adjectives in -ed vs. -ing:* Feelings vs. Characteristics.
    `,
    quiz: [
      {
        q: "The volunteers ______ hot meals when the power went out.",
        options: ["were distributing", "distributed", "distribute", "have distributed"],
        ans: 0,
        exp: "Hành động đang diễn ra trong quá khứ bị cắt ngang bởi sự cố mất điện ('when the power went out'), ta dùng 'were distributing'."
      },
      {
        q: "Many groundbreaking technological tools ______ in the 21st century.",
        options: ["have been developed", "developed", "were developing", "develop"],
        ans: 0,
        exp: "Câu bị động thì hiện tại hoàn thành: 'have been developed' (đã và đang được phát triển trong thế kỉ 21)."
      },
      {
        q: "The children were very ______ about the upcoming field trip to the science museum.",
        options: ["excited", "exciting", "excitement", "excite"],
        ans: 0,
        exp: "Miêu tả cảm xúc hào hứng của con người, ta dùng tính từ đuôi -ed: 'excited'."
      }
    ]
  },

  6: {
    num: 6,
    themeId: 3,
    title: "Gender equality",
    subtitle: "Bình đẳng giới • Cơ hội & Xóa bỏ định kiến",
    goals: [
      "Master word stress in three-syllable adjectives and verbs (educated, participate, encourage).",
      "Expand vocabulary concerning equal rights, career opportunities, gender discrimination, and domestic roles.",
      "Form and use the Passive Voice with Modal Verbs (can/must/should/may + be + V3/ed).",
      "Write an essay presenting arguments for equal career access for men and women."
    ],
    pronunciation: {
      title: "Stress in three-syllable adjectives and verbs",
      guide: "Identify suffix patterns and prefix rules affecting the primary stress of three-syllable adjectives and verbs.",
      examples: [
        { word: "effective", ipa: "/ɪˈfektɪv/", meaning: "hiệu quả (stress 2)" },
        { word: "educated", ipa: "/ˈedʒukeɪtɪd/", meaning: "có học thức (stress 1)" },
        { word: "participate", ipa: "/pɑːˈtɪsɪpeɪt/", meaning: "tham gia (stress 2)" },
        { word: "encourage", ipa: "/ɪnˈkʌrɪdʒ/", meaning: "khuyến khích (stress 2)" }
      ]
    },
    vocab: [
      { word: "gender equality", ipa: "/ˌdʒendər iˈkwɒləti/", type: "n. phr.", meaning: "bình đẳng giới", eg: "Gender equality is fundamental for economic growth and human rights." },
      { word: "equal opportunity", ipa: "/ˌiːkwəl ˌɒpəˈtjuːnəti/", type: "n. phr.", meaning: "cơ hội bình đẳng ngang nhau", eg: "All candidates should have equal opportunities regardless of gender." },
      { word: "discrimination", ipa: "/dɪˌskrɪmɪˈneɪʃn/", type: "noun", meaning: "sự phân biệt đối xử", eg: "Laws must prohibit gender discrimination in the workplace." },
      { word: "domestic violence", ipa: "/dəˌmestɪk ˈvaɪələns/", type: "n. phr.", meaning: "bạo lực gia đình", eg: "Education plays a critical role in ending domestic violence." },
      { word: "surgeon", ipa: "/ˈsɜːdʒən/", type: "noun", meaning: "bác sĩ phẫu thuật", eg: "More female surgeons are leading complex medical operations." },
      { word: "astronaut", ipa: "/ˈæstrənɔːt/", type: "noun", meaning: "nhà du hành vũ trụ", eg: "Valentina Tereshkova was the first female astronaut in space." },
      { word: "skilled worker", ipa: "/ˌskɪld ˈwɜːkə(r)/", type: "n. phr.", meaning: "lao động có tay nghề kĩ thuật", eg: "Vocational schools train both boys and girls to become skilled workers." },
      { word: "eliminate", ipa: "/ɪˈlɪmɪneɪt/", type: "verb", meaning: "xóa bỏ, triệt tiêu", eg: "The programme aims to eliminate barriers to girls' secondary education." }
    ],
    grammar: [
      {
        title: "Passive Voice with Modal Verbs",
        desc: "Dùng để diễn tả những điều nên, cần phải, có thể hoặc sẽ được thực hiện khi đối tượng tiếp nhận hành động là trung tâm của câu.",
        formula: "S + modal verb (can / could / should / must / may / might) + be + V3/ed\nNegative: S + modal verb + not + be + V3/ed\nQuestion: Modal verb + S + be + V3/ed?",
        examples: [
          { en: "Equal career opportunities must be provided to both men and women.", vi: "Cơ hội nghề nghiệp bình đẳng phải được tạo ra cho cả nam và nữ." },
          { en: "Girls should not be forced into early marriage.", vi: "Trẻ em gái không nên bị ép buộc kết hôn sớm." },
          { en: "More women can be elected to leadership positions in business.", vi: "Nhiều phụ nữ hơn có thể được bầu vào các vị trí lãnh đạo doanh nghiệp." }
        ],
        notes: "Luôn giữ nguyên trợ động từ 'be' ở dạng nguyên mẫu sau động từ khuyết thiếu, không chia theo thì hay chủ ngữ."
      }
    ],
    everydayEnglish: {
      function: "Expressing agreement and polite disagreement",
      phrases: [
        { en: "I completely agree that men and women have equal abilities in science.", vi: "Tôi hoàn toàn đồng ý rằng nam và nữ có năng lực khoa học ngang nhau." },
        { en: "I see what you mean, but traditional mindsets take time to change.", vi: "Tôi hiểu ý bạn, nhưng tư duy truyền thống cần thời gian để thay đổi." },
        { en: "I’m afraid I have to disagree. Career choice should depend solely on passion and skills.", vi: "Tôi e rằng phải bất đồng. Chọn nghề chỉ nên dựa vào đam mê và kĩ năng." }
      ]
    },
    skills: {
      reading: "Đọc bài viết về sự xóa bỏ rào cản giới tính trong các ngành nghề trước đây vốn do nam giới chiếm ưu thế (kĩ thuật hàng không, hải quân, phẫu thuật).",
      speaking: "Thảo luận về các giải pháp giúp phụ nữ ở nông thôn tiếp cận giáo dục đại học và cơ hội khởi nghiệp bình đẳng.",
      listening: "Nghe câu chuyện về Valentina Tereshkova - người phụ nữ đầu tiên trên thế giới bay vào không gian vũ trụ năm 1963.",
      writing: "Viết bài luận ngắn (120-150 từ) nêu quan điểm về bình đẳng giới trong việc lựa chọn nghề nghiệp tương lai.",
      cultureClil: "Bóng đá nữ (Women's Football): Sự vươn lên mạnh mẽ của các đội tuyển bóng đá nữ thế giới và Việt Nam, khẳng định nghị lực và tài năng thể thao phi thường."
    },
    project: "Career Equality Survey: Khảo sát nhận thức của học sinh trong trường về các ngành nghề tương lai và xây dựng thông điệp bình đẳng giới học đường.",
    quiz: [
      {
        q: "Gender discrimination in recruitment ______ strictly prohibited by law.",
        options: ["must be", "must", "is being", "will"],
        ans: 0,
        exp: "Câu bị động với động từ khuyết thiếu 'must': 'must be + prohibited (V3)' (phải được cấm triệt để)."
      },
      {
        q: "Both men and women should ______ equal pay for performing the same job.",
        options: ["be given", "give", "given", "be giving"],
        ans: 0,
        exp: "Cấu trúc bị động với modal verb: 'should + be + V3' -> 'should be given'."
      },
      {
        q: "Which word has a different stress pattern from the others?",
        options: ["Educated", "Effective", "Encourage", "Participate"],
        ans: 0,
        exp: "'Educated' /ˈedʒukeɪtɪd/ có trọng âm ở âm tiết 1; ba từ còn lại có trọng âm ở âm tiết 2: ef-FEC-tive, en-COU-rage, par-TI-ci-pate."
      }
    ]
  },

  7: {
    num: 7,
    themeId: 3,
    title: "Viet Nam and international organisations",
    subtitle: "Việt Nam và các tổ chức quốc tế • Hợp tác phát triển",
    goals: [
      "Pronounce words with more than three syllables accurately according to standard primary stress rules.",
      "Acquire vocabulary regarding international diplomacy, global development funds, trade pacts, and UNICEF/FAO initiatives.",
      "Form and use comparative and superlative degrees of adjectives (short, long, and irregular forms).",
      "Write an informative paragraph outlining Viet Nam’s contributions to and benefits from international organisations."
    ],
    pronunciation: {
      title: "Stress in words of more than three syllables",
      guide: "Notice ending patterns: words ending in -tion, -sion, -ic usually take stress on the syllable immediately preceding the suffix (international, organisation, communication).",
      examples: [
        { word: "international", ipa: "/ˌɪntəˈnæʃnəl/", meaning: "quốc tế (stress 3)" },
        { word: "organisation", ipa: "/ˌɔːɡənaɪˈzeɪʃn/", meaning: "tổ chức (stress 4)" },
        { word: "economic", ipa: "/ˌiːkəˈnɒmɪk/", meaning: "thuộc kinh tế (stress 3)" },
        { word: "participate", ipa: "/pɑːˈtɪsɪpeɪt/", meaning: "tham gia (stress 2)" }
      ]
    },
    vocab: [
      { word: "international organisation", ipa: "/ˌɪntəˈnæʃnəl ˌɔːɡənaɪˈzeɪʃn/", type: "n. phr.", meaning: "tổ chức quốc tế", eg: "Viet Nam is an active member of numerous international organisations." },
      { word: "UNICEF", ipa: "/ˈjuːnɪsef/", type: "proper noun", meaning: "Quỹ Nhi đồng Liên Hợp Quốc", eg: "UNICEF supports quality education and healthcare for disadvantaged children." },
      { word: "FAO", ipa: "/ˌef eɪ ˈəʊ/", type: "proper noun", meaning: "Tổ chức Lương thực và Nông nghiệp Liên Hợp Quốc", eg: "FAO helps Vietnamese farmers improve rice yields through sustainable techniques." },
      { word: "scholarship", ipa: "/ˈskɒləʃɪp/", type: "noun", meaning: "học bổng du học", eg: "International exchange programmes provide valuable university scholarships." },
      { word: "essential", ipa: "/ɪˈsenʃl/", type: "adj.", meaning: "thiết yếu, cốt lõi", eg: "Clean water and vaccines are essential for children's healthy development." },
      { word: "expert", ipa: "/ˈekspɜːt/", type: "noun", meaning: "chuyên gia", eg: "Foreign agricultural experts visited the Mekong Delta to study drought solutions." },
      { word: "trade agreement", ipa: "/treɪd əˈɡriːmənt/", type: "n. phr.", meaning: "hiệp định thương mại", eg: "Free trade agreements boost export markets for Vietnamese agricultural products." },
      { word: "cooperation", ipa: "/kəʊˌɒpəˈreɪʃn/", type: "noun", meaning: "sự hợp tác đa phương", eg: "Global cooperation is crucial for tackling climate change and pandemics." }
    ],
    grammar: [
      {
        title: "Comparative and Superlative Adjectives",
        desc: "Dùng để so sánh sự hơn kém giữa hai (so sánh hơn) hoặc từ ba đối tượng trở lên (so sánh nhất). Chú ý quy tắc phân loại tính từ ngắn (1 âm tiết, hoặc 2 âm tiết tận cùng -y, -er, -le, -ow) và tính từ dài (từ 2 âm tiết trở lên).",
        formula: "Comparative Short: S1 + be + adj-er + than + S2\nComparative Long: S1 + be + more + adj + than + S2\nSuperlative Short: S + be + the + adj-est (+ in/of...)\nSuperlative Long: S + be + the most + adj (+ in/of...)\nIrregulars: good -> better -> best | bad -> worse -> worst | far -> farther/further -> farthest/furthest",
        examples: [
          { en: "Viet Nam's trade partnerships have become more diverse than ever before.", vi: "Quan hệ đối tác thương mại của Việt Nam đã trở nên đa dạng hơn bao giờ hết." },
          { en: "UNICEF is one of the most influential organisations supporting children worldwide.", vi: "UNICEF là một trong những tổ chức có tầm ảnh hưởng lớn nhất hỗ trợ trẻ em trên toàn thế giới." },
          { en: "This year's agricultural export turnover is higher than last year's.", vi: "Kim ngạch xuất khẩu nông sản năm nay cao hơn năm ngoái." }
        ],
        notes: "Không dùng đồng thời 'more' với đuôi '-er' (không nói 'more better') hoặc 'most' với '-est' (không nói 'most easiest')."
      }
    ],
    everydayEnglish: {
      function: "Making, accepting, and declining invitations",
      phrases: [
        { en: "Would you like to join our workshop on international youth diplomacy?", vi: "Bạn có muốn tham gia buổi hội thảo về ngoại giao thanh niên quốc tế không?" },
        { en: "I’d love to! What time does the session begin?", vi: "Mình rất muốn tham gia! Buổi chia sẻ bắt đầu lúc mấy giờ thế?" },
        { en: "Thank you for the invitation, but I have a prior commitment.", vi: "Cảm ơn bạn đã mời, nhưng mình có lịch bận từ trước rồi." }
      ]
    },
    skills: {
      reading: "Đọc tài liệu về các dự án hỗ trợ tiêm chủng vaccine và đào tạo giáo viên vùng cao do UNICEF tài trợ tại Việt Nam.",
      speaking: "Giới thiệu về vai trò và lợi ích của Việt Nam khi gia nhập Tổ chức Thương mại Thế giới (WTO) và Hiệp hội các quốc gia Đông Nam Á (ASEAN).",
      listening: "Nghe bài phát biểu tổng kết về 45 năm quan hệ hợp tác gắn bó giữa Việt Nam và Liên Hợp Quốc (United Nations).",
      writing: "Viết đoạn văn (120-150 từ) miêu tả các cơ hội và lợi ích mà học sinh Việt Nam nhận được từ các chương trình học bổng quốc tế.",
      cultureClil: "Tổ chức Lương thực và Nông nghiệp (FAO): Sứ mệnh xóa đói giảm nghèo, đảm bảo an ninh lương thực và hỗ trợ nông dân thích ứng với xâm nhập mặn ở đồng bằng sông Cửu Long."
    },
    project: "International Organisation Profile: Thiết kế poster infographic giới thiệu chi tiết về một tổ chức quốc tế hoạt động tích cực tại Việt Nam (WHO, UNESCO, WWF, UNDP).",
    quiz: [
      {
        q: "Joining the World Trade Organization has made Vietnamese goods ______ accessible to international consumers.",
        options: ["more", "most", "much", "many"],
        ans: 0,
        exp: "Trước tính từ dài 'accessible' trong câu so sánh hơn với đối tượng khác, ta dùng 'more'."
      },
      {
        q: "UNICEF is considered one of ______ successful international partners of Viet Nam.",
        options: ["the most", "most", "more", "the more"],
        ans: 0,
        exp: "So sánh nhất với tính từ dài 'successful': 'the most successful'."
      },
      {
        q: "Life in rural areas has become much ______ thanks to international development programmes.",
        options: ["better", "gooder", "more good", "best"],
        ans: 0,
        exp: "So sánh hơn của tính từ bất quy tắc 'good' là 'better'."
      }
    ]
  },

  8: {
    num: 8,
    themeId: 3,
    title: "New ways to learn",
    subtitle: "Phương pháp học tập mới • Học kết hợp & Chuyển đổi số",
    goals: [
      "Apply sentence stress correctly to highlight content words (nouns, main verbs, adjectives) and reduce function words.",
      "Expand vocabulary concerning blended learning, educational apps, digital distractions, and self-directed study.",
      "Master and distinguish defining and non-defining relative clauses using relative pronouns (who, that, which, whose).",
      "Write a well-structured paragraph arguing the advantages of blended learning."
    ],
    pronunciation: {
      title: "Sentence stress (Trọng âm câu)",
      guide: "In spoken English, content words (nouns, main verbs, adjectives, adverbs) receive stress, while function words (articles, prepositions, auxiliary verbs, pronouns) are usually unstressed.",
      examples: [
        { word: "ONLINE LEARNING is VERY CONVENIENT.", ipa: "/ˈɒnlaɪn ˈlɜːnɪŋ ɪz ˈveri kənˈviːniənt/", meaning: "Nhấn mạnh từ mang thông tin chính" },
        { word: "STUDENTS can STUDY at their OWN PACE.", ipa: "/ˈstjuːdnts kən ˈstʌdi ət ðeər əʊn peɪs/", meaning: "Giảm nhẹ can, at, their" }
      ]
    },
    vocab: [
      { word: "blended learning", ipa: "/ˌblendɪd ˈlɜːnɪŋ/", type: "n. phr.", meaning: "học tập kết hợp trực tiếp và trực tuyến", eg: "Blended learning combines classroom lectures with flexible digital activities." },
      { word: "online learning", ipa: "/ˌɒnlaɪn ˈlɜːnɪŋ/", type: "n. phr.", meaning: "học trực tuyến qua mạng", eg: "Online learning allows students to access global lectures from home." },
      { word: "face-to-face", ipa: "/ˌfeɪs tə ˈfeɪs/", type: "adj. / adv.", meaning: "trực tiếp, mặt đối mặt", eg: "Face-to-face interaction promotes teamwork and instant feedback." },
      { word: "digital device", ipa: "/ˌdɪdʒɪtl dɪˈvaɪs/", type: "n. phr.", meaning: "thiết bị kĩ thuật số (laptop, tablet)", eg: "Students must use digital devices responsibly during class." },
      { word: "distraction", ipa: "/dɪˈstrækʃn/", type: "noun", meaning: "sự xao nhãng, phân tâm", eg: "Social media notifications are a major distraction when studying." },
      { word: "self-directed", ipa: "/ˌself daɪˈrektɪd/", type: "adj.", meaning: "tự định hướng, tự giác", eg: "Independent learners need strong self-directed study skills." },
      { word: "interaction", ipa: "/ˌɪntərˈækʃn/", type: "noun", meaning: "sự tương tác hai chiều", eg: "Classroom activities encourage meaningful interaction among peers." },
      { word: "access", ipa: "/ˈækses/", type: "verb / noun", meaning: "tiếp cận, truy cập tài liệu", eg: "High-speed Internet enables learners to access vast digital libraries." }
    ],
    grammar: [
      {
        title: "Defining vs. Non-defining Relative Clauses",
        desc: "Mệnh đề quan hệ xác định (Defining) cung cấp thông tin thiết yếu để xác định danh từ đứng trước, không có dấu phẩy. Mệnh đề quan hệ không xác định (Non-defining) chỉ bổ sung thêm thông tin, đứng giữa các dấu phẩy và KHÔNG được dùng 'that'.",
        formula: "Who: chỉ người (làm S hoặc O)\nWhich: chỉ vật (làm S hoặc O)\nThat: thay cho who/which trong Defining relative clause\nWhose: chỉ sở hữu (+ noun)\nDefining: The teacher who/that helped me is very patient.\nNon-defining: Our school library, which was renovated recently, is open daily.",
        examples: [
          { en: "Students who use educational apps wisely achieve better academic results.", vi: "Những học sinh sử dụng ứng dụng học tập thông minh đạt kết quả học tập tốt hơn." },
          { en: "Blended learning, which combines online and offline methods, is increasingly popular.", vi: "Học tập kết hợp, phương pháp kết hợp trực tuyến và trực tiếp, ngày càng trở nên phổ biến." },
          { en: "I met a student whose research on artificial intelligence won first prize.", vi: "Tôi đã gặp một học sinh mà nghiên cứu về trí tuệ nhân tạo của bạn ấy đã đoạt giải nhất." }
        ],
        notes: "Không bao giờ dùng đại từ 'that' sau dấu phẩy trong mệnh đề quan hệ không xác định."
      }
    ],
    everydayEnglish: {
      function: "Making and responding to invitations to study groups",
      phrases: [
        { en: "Would you like to join our online study group this weekend?", vi: "Bạn có muốn tham gia nhóm học trực tuyến của chúng mình vào cuối tuần này không?" },
        { en: "That sounds wonderful! Which video platform are we using?", vi: "Nghe tuyệt quá! Chúng mình sẽ dùng nền tảng gọi video nào vậy?" },
        { en: "I wish I could, but I need to prepare for my music test.", vi: "Mình ước là có thể, nhưng mình phải chuẩn bị cho bài kiểm tra âm nhạc." }
      ]
    },
    skills: {
      reading: "Đọc bài phân tích so sánh giữa mô hình học truyền thống và lớp học kết hợp hiện đại (Flipped Classroom).",
      speaking: "Thảo luận nhóm: Làm thế nào để quản lí thời gian hiệu quả và loại bỏ sự xao nhãng từ mạng xã hội khi học online.",
      listening: "Nghe bài giảng của chuyên gia giáo dục hướng dẫn các bước thiết lập mục tiêu học tập tự định hướng trên nền tảng số.",
      writing: "Viết đoạn văn (120-150 từ) trình bày các lợi ích vượt trội của phương pháp học tập kết hợp (blended learning).",
      cultureClil: "Trường học thông minh thế kỉ 21: Xu hướng trường học không giấy mực, tích hợp bảng tương tác thông minh và trợ lí ảo cá nhân hóa tiến độ học của từng học sinh."
    },
    project: "Digital Learning Habits Survey: Khảo sát thói quen sử dụng thiết bị số để học tập của học sinh khối 10 và đưa ra bản khuyến nghị 5 quy tắc vàng học online hiệu quả.",
    quiz: [
      {
        q: "The tablet ______ my parents bought for my birthday is extremely useful for reading e-books.",
        options: ["which", "who", "whose", "where"],
        ans: 0,
        exp: "Thay thế cho danh từ chỉ đồ vật 'The tablet' làm tân ngữ, ta dùng đại từ quan hệ 'which' (hoặc 'that')."
      },
      {
        q: "Mr. Brown, ______ lectures on modern science are fascinating, will visit our school tomorrow.",
        options: ["whose", "who", "which", "that"],
        ans: 0,
        exp: "Mệnh đề biểu thị quyền sở hữu 'bài giảng của thầy Brown' (+ lectures), ta dùng đại từ sở hữu 'whose'."
      },
      {
        q: "Students ______ manage their screen time well avoid serious eye strain.",
        options: ["who", "which", "whose", "whom"],
        ans: 0,
        exp: "Đại từ quan hệ thay thế cho danh từ chỉ người 'Students' làm chủ ngữ của mệnh đề quan hệ xác định là 'who'."
      }
    ]
  },

  "review-3": {
    num: "review-3",
    isReview: true,
    themeId: 3,
    title: "Review 3 (Units 6, 7, 8)",
    subtitle: "Ôn tập tổng hợp Chủ điểm 3: Global Cooperation & Learning",
    goals: [
      "Review stress in 3-syllable adjectives/verbs, words with >3 syllables, and sentence stress.",
      "Consolidate vocabulary about gender equality, international organisations, and blended learning.",
      "Master Modal Passives, Comparative/Superlative Adjectives, and Defining/Non-defining Relative Clauses."
    ],
    contentSummary: `
- **Pronunciation:** Polysyllabic stress & content word emphasis.
- **Grammar Essentials:**
  1. *Passive with Modals:* Modal + be + V3/ed.
  2. *Comparatives & Superlatives:* -er / more; -est / most.
  3. *Relative Clauses:* Who, Which, That, Whose (Defining vs. Non-defining with commas).
    `,
    quiz: [
      {
        q: "Every child ______ the opportunity to receive quality primary education.",
        options: ["should be given", "should give", "gives", "is given should"],
        ans: 0,
        exp: "Bị động với động từ khuyết thiếu: 'should be given' (nên được trao cơ hội)."
      },
      {
        q: "Viet Nam has established diplomatic ties with ______ nations across the globe.",
        options: ["more than 190", "most than 190", "the more 190", "the most of 190"],
        ans: 0,
        exp: "Cụm so sánh số lượng 'more than 190' (hơn 190 quốc gia)."
      },
      {
        q: "The online library, ______ contains thousands of journals, is completely free for students.",
        options: ["which", "that", "who", "whose"],
        ans: 0,
        exp: "Mệnh đề quan hệ không xác định (có dấu phẩy) thay thế cho vật 'The online library', tuyệt đối không dùng 'that' mà phải dùng 'which'."
      }
    ]
  },

  9: {
    num: 9,
    themeId: 4,
    title: "Protecting the environment",
    subtitle: "Bảo tồn môi trường • Đa dạng sinh học & Động vật hoang dã",
    goals: [
      "Master sentence rhythm by grouping words into natural sense units and thought groups.",
      "Expand vocabulary regarding biodiversity, endangered species habitats, climate consequences, and deforestation.",
      "Master Reported Speech (statements, questions, commands) with accurate backshifting of tenses and pronoun changes.",
      "Write an informative article about a wildlife conservation organization (WWF, Save Vietnam’s Wildlife)."
    ],
    pronunciation: {
      title: "Rhythm in connected speech",
      guide: "English rhythm is stress-timed. Stressed syllables occur at roughly regular intervals, with unstressed syllables shortened and compressed together.",
      examples: [
        { word: "CLIMATE CHANGE is a GLOBAL CRISIS.", ipa: "/ˈklaɪmət tʃeɪndʒ ɪz ə ˈɡləʊbl ˈkraɪsɪs/", meaning: "Nhịp điệu dồn trọng âm vào các từ in hoa" },
        { word: "WE must PRO-TECT the EN-DAN-GERED SPE-CIES.", ipa: "/wi məst prəˈtekt ði ɪnˈdeɪndʒəd ˈspiːʃiːz/", meaning: "Ngắt nghỉ tự nhiên theo cụm nghĩa" }
      ]
    },
    vocab: [
      { word: "biodiversity", ipa: "/ˌbaɪəʊdaɪˈvɜːsəti/", type: "noun", meaning: "đa dạng sinh học", eg: "Tropical rainforests have the highest biodiversity on Earth." },
      { word: "climate change", ipa: "/ˈklaɪmət tʃeɪndʒ/", type: "n. phr.", meaning: "biến đổi khí hậu toàn cầu", eg: "Climate change causes extreme weather events such as heatwaves." },
      { word: "deforestation", ipa: "/diːˌfɒrɪˈsteɪʃn/", type: "noun", meaning: "nạn tàn phá rừng", eg: "Deforestation leads to massive habitat loss for wild animals." },
      { word: "endangered species", ipa: "/ɪnˌdeɪndʒəd ˈspiːʃiːz/", type: "n. phr.", meaning: "các loài có nguy cơ tuyệt chủng", eg: "The red panda and sea turtle are critically endangered species." },
      { word: "ecosystem", ipa: "/ˈiːkəʊsɪstəm/", type: "noun", meaning: "hệ sinh thái sinh vật", eg: "Pollution upsets the delicate balance of aquatic ecosystems." },
      { word: "habitat loss", ipa: "/ˈhæbɪtæt lɒs/", type: "n. phr.", meaning: "mất môi trường sống tự nhiên", eg: "Urban expansion is the primary driver of wildlife habitat loss." },
      { word: "consequence", ipa: "/ˈkɒnsɪkwəns/", type: "noun", meaning: "hậu quả, hệ lụy", eg: "Melting polar ice caps are a catastrophic consequence of global warming." },
      { word: "wildlife conservation", ipa: "/ˈwaɪldlaɪf ˌkɒnsəˈveɪʃn/", type: "n. phr.", meaning: "bảo tồn đời sống hoang dã", eg: "Wildlife conservation rangers risk their lives to stop illegal poaching." }
    ],
    grammar: [
      {
        title: "Reported Speech (Statements, Questions, Requests)",
        desc: "Dùng để thuật lại lời nói của người khác mà không trích nguyên văn. Khi động từ tường thuật ở quá khứ (said, told, asked), ta lùi thì của động từ trong câu gián tiếp, đồng thời chuyển đổi đại từ, tính từ sở hữu và từ chỉ thời gian/nơi chốn cho phù hợp.",
        formula: "Statements: S + said (that) / told O (that) + clause (lùi thì)\nYes/No Questions: S + asked (O) if / whether + S + V(lùi thì)\nWh- Questions: S + asked (O) + Wh-word + S + V(lùi thì)\nCommands/Requests: S + told / asked / advised + O + (not) to V\nBackshift Rules:\nPresent Simple -> Past Simple | Present Continuous -> Past Continuous\nWill -> Would | Can -> Could | Present Perfect -> Past Perfect\nTime/Place Changes: now -> then | today -> that day | tomorrow -> the next day | here -> there",
        examples: [
          { en: "Direct: 'We are planting trees to save the local forest,' the students said.\nReported: The students said (that) they were planting trees to save the local forest.", vi: "Học sinh nói rằng họ đang trồng cây để cứu khu rừng địa phương." },
          { en: "Direct: 'Do you know how many rhinos remain in the wild?' she asked me.\nReported: She asked me if I knew how many rhinos remained in the wild.", vi: "Cô ấy hỏi tôi xem tôi có biết còn bao nhiêu cá thể tê giác trong tự nhiên không." },
          { en: "Direct: 'Don't buy products made from ivory,' the ranger told tourists.\nReported: The ranger told tourists not to buy products made from ivory.", vi: "Kiểm lâm bảo du khách không được mua sản phẩm làm từ ngà voi." }
        ],
        notes: "Nếu lời nói diễn tả một chân lí hoặc sự thật hiển nhiên luôn đúng (The Earth revolves around the Sun), ta giữ nguyên thì hiện tại không cần lùi thì."
      }
    ],
    everydayEnglish: {
      function: "Making and responding to apologies",
      phrases: [
        { en: "I’m terribly sorry for forgetting to bring the reusable bags.", vi: "Tôi vô cùng xin lỗi vì quên mang theo túi dùng nhiều lần." },
        { en: "That’s quite all right. We can use a cardboard box instead.", vi: "Không sao đâu. Chúng ta có thể dùng hộp bìa carton thay thế." },
        { en: "I sincerely apologize for the delay in our clean-up schedule.", vi: "Tôi chân thành xin lỗi vì sự chậm trễ trong lịch trình dọn dẹp." }
      ]
    },
    skills: {
      reading: "Đọc phóng sự về sự suy giảm nghiêm trọng của hệ sinh thái rạn san hô do nước biển ấm lên và rác thải nhựa đại dương.",
      speaking: "Thảo luận đề xuất các chiến dịch tuyên truyền bảo vệ các loài động vật hoang dã quý hiếm của Việt Nam (Sao la, Voọc Cát Bà).",
      listening: "Nghe cuộc phỏng vấn một tình nguyện viên tại trung tâm cứu hộ gấu và tê tê tại Vườn quốc gia Cúc Phương.",
      writing: "Viết bài báo ngắn (120-150 từ) giới thiệu về một tổ chức bảo vệ động vật hoang dã (Save Vietnam's Wildlife) và kêu gọi hành động.",
      cultureClil: "Chiến dịch Giờ Trái Đất (Earth Hour): Phong trào tắt đèn tự nguyện trong 60 phút do Quỹ Quốc tế Bảo vệ Thiên nhiên (WWF) khởi xướng nhằm nâng cao nhận thức chống biến đổi khí hậu."
    },
    project: "Endangered Wildlife Awareness Poster: Thiết kế áp phích tuyên truyền song ngữ kêu gọi chấm dứt nạn săn bắt và tiêu thụ thịt thú rừng trái phép.",
    quiz: [
      {
        q: "'We will protect the mangrove forests,' the local leaders declared.\n-> The local leaders declared that they ______ the mangrove forests.",
        options: ["would protect", "will protect", "protected", "protect"],
        ans: 0,
        exp: "Khi chuyển sang câu tường thuật với động từ giới thiệu ở quá khứ 'declared', 'will' lùi thì thành 'would'."
      },
      {
        q: "She asked the forest ranger ______ any tigers still lived in that national park.",
        options: ["if", "that", "weather", "did"],
        ans: 0,
        exp: "Câu hỏi gián tiếp Yes/No dùng từ nối 'if' hoặc 'whether'."
      },
      {
        q: "The scientist warned the public ______ single-use plastics carelessly.",
        options: ["not to discard", "not discard", "to not discard", "don't discard"],
        ans: 0,
        exp: "Cấu trúc câu mệnh lệnh/khuyên gián tiếp dạng phủ định: 'warned + O + not to V' -> 'not to discard'."
      }
    ]
  },

  10: {
    num: 10,
    themeId: 4,
    title: "Ecotourism",
    subtitle: "Du lịch sinh thái • Trải nghiệm & Trách nhiệm",
    goals: [
      "Master English intonation patterns for statements, yes/no questions, wh-questions, and lists.",
      "Expand vocabulary concerning ecotours, responsible tourists, local crafts, stalactites, and sustainable travel.",
      "Form and use Conditional Sentences Type 1 (real in present/future) and Type 2 (unreal/hypothetical in present).",
      "Write a compelling website promotional brochure for an authentic ecotour."
    ],
    pronunciation: {
      title: "Intonation in questions and statements",
      guide: "Falling intonation (↘) is used for statements, commands, and Wh-questions. Rising intonation (↗) is used for Yes/No questions and list items before the final item.",
      examples: [
        { word: "Have you ever been on an ecotour? (↗)", ipa: "/hæv ju ˈevə biːn ɒn ən ˈiːkəʊtʊə/", meaning: "Yes/No question -> Lên giọng cuối câu" },
        { word: "Where is the nearest national park? (↘)", ipa: "/weər ɪz ðə ˈnɪərɪst ˈnæʃnəl pɑːk/", meaning: "Wh-question -> Xuống giọng cuối câu" }
      ]
    },
    vocab: [
      { word: "ecotourism", ipa: "/ˈiːkəʊtʊərɪzəm/", type: "noun", meaning: "du lịch sinh thái bền vững", eg: "Ecotourism aims to preserve natural environments and support local people." },
      { word: "responsible tourist", ipa: "/rɪˈspɒnsəbl ˈtʊərɪst/", type: "n. phr.", meaning: "du khách có trách nhiệm", eg: "Responsible tourists never leave trash or disturb wildlife." },
      { word: "mass tourism", ipa: "/ˌmæs ˈtʊərɪzəm/", type: "n. phr.", meaning: "du lịch đại trà, du lịch ồ ạt", eg: "Mass tourism can cause severe damage to fragile cave systems." },
      { word: "stalactite", ipa: "/ˈstæləktaɪt/", type: "noun", meaning: "thạch nhũ (trong hang động)", eg: "Tourists must not touch the stalactites because skin oils stop their growth." },
      { word: "local craft", ipa: "/ˌləʊkl ˈkrɑːft/", type: "n. phr.", meaning: "hàng thủ công mĩ nghệ địa phương", eg: "Buying local crafts directly benefits indigenous artisans." },
      { word: "brochure", ipa: "/ˈbrəʊʃə(r)/", type: "noun", meaning: "tờ rơi, tập gấp quảng cáo", eg: "Read the ecotour brochure carefully for safety regulations." },
      { word: "explore", ipa: "/ɪkˈsplɔː(r)/", type: "verb", meaning: "khám phá, thám hiểm", eg: "We spent two days exploring Phong Nha - Ke Bang National Park." },
      { word: "sustainable", ipa: "/səˈsteɪnəbl/", type: "adj.", meaning: "bền vững, duy trì lâu dài", eg: "Sustainable tourism protects cultural traditions for future generations." }
    ],
    grammar: [
      {
        title: "Conditional Sentences Type 1 vs. Type 2",
        desc: "Câu điều kiện loại 1 diễn tả điều kiện có thật, có thể xảy ra ở hiện tại hoặc tương lai. Câu điều kiện loại 2 diễn tả điều kiện giả định, không có thật hoặc trái ngược với thực tế ở hiện tại/tương lai.",
        formula: "Type 1: If + S + V(present simple), S + will / can / may + V(bare)\nType 2: If + S + V(past simple), S + would / could / might + V(bare)\n(Trong Type 2, to be dùng 'were' cho tất cả các ngôi trong văn phong trang trọng)",
        examples: [
          { en: "If visitors follow the guided trail, they will not damage delicate wild plants.", vi: "Nếu du khách đi theo đường mòn có hướng dẫn, họ sẽ không giẫm nát các loài cây dại mỏng manh." },
          { en: "If I were an ecotourist, I would only buy locally handmade souvenirs.", vi: "Nếu tôi là một du khách sinh thái, tôi sẽ chỉ mua quà lưu niệm thủ công của người địa phương." },
          { en: "If we had more money, we would invest in eco-friendly solar boats.", vi: "Nếu chúng tôi có nhiều tiền hơn, chúng tôi sẽ đầu tư vào thuyền năng lượng mặt trời." }
        ],
        notes: "Tuyệt đối không dùng 'will' trong mệnh đề If của loại 1; không dùng 'would' trong mệnh đề If của loại 2."
      }
    ],
    everydayEnglish: {
      function: "Asking for and giving recommendations for travel",
      phrases: [
        { en: "Can you recommend a responsible ecotour destination in Viet Nam?", vi: "Bạn có thể gợi ý một điểm đến du lịch sinh thái có trách nhiệm ở Việt Nam không?" },
        { en: "You should visit Cat Tien National Park if you love wildlife trekking.", vi: "Bạn nên đến Vườn quốc gia Cát Tiên nếu bạn mê đi bộ xuyên rừng ngắm thú." },
        { en: "Make sure you book homestays run by local ethnic families.", vi: "Hãy nhớ đặt homestay do chính các gia đình đồng bào thiểu số vận hành." }
      ]
    },
    skills: {
      reading: "Đọc tờ gấp quảng cáo về tour thám hiểm hang động Sơn Đoòng (Quảng Bình) và các nguyên tắc bảo tồn nghiêm ngặt.",
      speaking: "Đóng vai hướng dẫn viên du lịch sinh thái và du khách: giải thích 5 quy tắc ứng xử văn minh khi tham quan khu bảo tồn thiên nhiên.",
      listening: "Nghe bài giới thiệu tour du lịch sinh thái cộng đồng tại chợ nổi và vườn cây ăn trái đồng bằng sông Cửu Long.",
      writing: "Viết bài viết quảng cáo trang web (Website Brochure, 120-150 từ) cho một tour du lịch sinh thái bền vững tại địa phương.",
      cultureClil: "Tác động của du lịch đại chúng (Mass Tourism) đối với di sản văn hóa và tự nhiên: Sự cân bằng tinh tế giữa thu nhập kinh tế và bảo tồn sinh thái."
    },
    project: "Ecotour Design Challenge: Lập kế hoạch thiết kế một tour du lịch sinh thái 2 ngày 1 đêm cho lớp tại một vườn quốc gia hoặc khu sinh thái gần trường.",
    quiz: [
      {
        q: "If tourists ______ more aware of environmental protection, our beaches would be much cleaner.",
        options: ["were", "are", "will be", "would be"],
        ans: 0,
        exp: "Câu điều kiện loại 2 (vế chính có 'would be' diễn tả giả định trái với hiện tại), mệnh đề If chia quá khứ giả định: 'were'."
      },
      {
        q: "If you join this ecotour, you ______ an opportunity to observe rare birds in their natural habitat.",
        options: ["will have", "would have", "had", "have"],
        ans: 0,
        exp: "Câu điều kiện loại 1 (mệnh đề If 'join' ở hiện tại đơn), mệnh đề chính chỉ khả năng có thật ở tương lai: 'will have'."
      },
      {
        q: "Responsible ecotourists ______ touch or break stalactites when visiting limestone caves.",
        options: ["must not", "don't have to", "needn't", "should"],
        ans: 0,
        exp: "'Must not' chỉ sự cấm đoán nghiêm ngặt (không được phép chạm vào hoặc bẻ nhũ đá trong hang động)."
      }
    ]
  },

  "review-4": {
    num: "review-4",
    isReview: true,
    themeId: 4,
    title: "Review 4 (Units 9, 10)",
    subtitle: "Ôn tập tổng hợp Chủ điểm 4: Our Environment & Our Future",
    goals: [
      "Review connected speech rhythm and English intonation patterns.",
      "Consolidate vocabulary regarding biodiversity, endangered species, ecosystems, and ecotourism.",
      "Master Reported Speech transformations and Conditional Sentences Types 1 and 2."
    ],
    contentSummary: `
- **Pronunciation:** Rhythm groups & intonation contour (rising/falling).
- **Grammar Essentials:**
  1. *Reported Speech:* Backshifting tenses, pronoun shifts, time/place word adjustments.
  2. *Conditionals Type 1:* Real possibility in present/future (If + Present, Will + V).
  3. *Conditionals Type 2:* Hypothetical condition in present (If + Past, Would + V).
    `,
    quiz: [
      {
        q: "If we ______ action immediately to halt deforestation, many species will lose their habitats forever.",
        options: ["don't take", "didn't take", "won't take", "wouldn't take"],
        ans: 0,
        exp: "Câu điều kiện loại 1 (mệnh đề chính 'will lose'), mệnh đề If dùng hiện tại đơn phủ định: 'don't take'."
      },
      {
        q: "The researcher told us that polar bears ______ facing unprecedented challenges due to global warming.",
        options: ["were", "are", "will be", "have been"],
        ans: 0,
        exp: "Câu tường thuật gián tiếp với động từ 'told' ở quá khứ, lùi thì từ 'are' thành 'were'."
      },
      {
        q: "If I ______ you, I would choose an ecotour that directly benefits local ethnic communities.",
        options: ["were", "am", "will be", "would be"],
        ans: 0,
        exp: "Cấu trúc khuyên nhủ của câu điều kiện loại 2: 'If I were you, I would...'"
      }
    ]
  }
};

// 21 Grammar Structures for Quick Reference Table
const grammarCheatsheet = [
  { unit: "Unit 1", topic: "Present Simple", formula: "S + V(s/es) | S + do/does not + V | Do/Does + S + V?", note: "Thói quen thường nhật, lịch trình, chân lí hiển nhiên (always, usually, every day)." },
  { unit: "Unit 1", topic: "Present Continuous", formula: "S + am/is/are + V-ing", note: "Hành động đang diễn ra lúc nói hoặc tình huống tạm thời khác thường ngày (now, at the moment, today)." },
  { unit: "Unit 2", topic: "Will (Future Simple)", formula: "S + will + V(bare)", note: "Quyết định nảy ra ngay lúc nói, lời hứa, đề nghị, dự đoán không bằng chứng hiện tại." },
  { unit: "Unit 2", topic: "Be going to", formula: "S + am/is/are going to + V(bare)", note: "Dự định đã lên kế hoạch từ trước; dự đoán có bằng chứng cụ thể trước mắt." },
  { unit: "Unit 2", topic: "Passive Voice (Present & Future)", formula: "Present: am/is/are + V3/ed | Future: will be + V3/ed", note: "Nhấn mạnh đối tượng chịu tác động khi tác nhân không quan trọng hoặc chưa biết." },
  { unit: "Unit 3", topic: "Compound Sentences", formula: "Clause 1, + and / but / or / so + Clause 2", note: "Nối hai mệnh đề độc lập bình đẳng về ngữ pháp bằng liên từ đẳng lập." },
  { unit: "Unit 3", topic: "Gerunds (V-ing)", formula: "Verb + V-ing | Preposition + V-ing", note: "Dùng làm chủ ngữ hoặc sau một số động từ: enjoy, mind, consider, look forward to." },
  { unit: "Unit 3", topic: "Bare Infinitives", formula: "make / let + O + V(bare) | Modal verb + V(bare)", note: "Động từ nguyên thể không to sau động từ khuyết thiếu và cấu trúc sai khiến/cho phép." },
  { unit: "Unit 4", topic: "Past Simple", formula: "S + V2/ed | S + did not + V", note: "Hành động đã xảy ra và kết thúc hoàn toàn tại thời điểm xác định trong quá khứ." },
  { unit: "Unit 4", topic: "Past Continuous", formula: "S + was/were + V-ing", note: "Hành động đang diễn ra tại một thời điểm quá khứ hoặc làm nền cho sự việc khác." },
  { unit: "Unit 4", topic: "When vs. While", formula: "When + Past Simple, Past Continuous | While + Past Continuous, Past Simple", note: "When chỉ hành động ngắn xen ngang; While chỉ hành động kéo dài làm nền." },
  { unit: "Unit 4", topic: "Adjective Suffixes", formula: "-ed (feelings) vs. -ing (characteristics) | -ful (with) vs. -less (without)", note: "Interested/interesting; helpful/helpless; careful/careless." },
  { unit: "Unit 5", topic: "Present Perfect", formula: "S + have/has + V3/ed", note: "Trải nghiệm tới nay (ever, never), hành động quá khứ có kết quả hiện tại, hoặc kéo dài (since, for)." },
  { unit: "Unit 6", topic: "Passive with Modals", formula: "S + modal (can, should, must...) + be + V3/ed", note: "Diễn tả hành động nên/phải/có thể được làm đối với chủ thể." },
  { unit: "Unit 7", topic: "Comparative Adjectives", formula: "Short: adj-er + than | Long: more + adj + than", note: "So sánh hơn giữa hai đối tượng (good -> better; bad -> worse)." },
  { unit: "Unit 7", topic: "Superlative Adjectives", formula: "Short: the + adj-est | Long: the most + adj", note: "So sánh nhất từ ba đối tượng trở lên (good -> best; far -> farthest/furthest)." },
  { unit: "Unit 8", topic: "Defining Relative Clauses", formula: "Who (person), Which (thing), That (person/thing), Whose (possession)", note: "Xác định rõ danh từ đứng trước; không có dấu phẩy; có thể dùng 'that'." },
  { unit: "Unit 8", topic: "Non-defining Relative Clauses", formula: ", who / which / whose...,", note: "Bổ sung thông tin cho danh từ đã xác định; ngăn cách bằng dấu phẩy; KHÔNG dùng 'that'." },
  { unit: "Unit 9", topic: "Reported Speech (Statements)", formula: "S + said (that) / told O (that) + S + V(backshifted)", note: "Lùi thì của động từ, đổi đại từ nhân xưng, tính từ sở hữu và từ chỉ thời gian/nơi chốn." },
  { unit: "Unit 10", topic: "Conditional Type 1", formula: "If + S + V(present simple), S + will/can + V(bare)", note: "Điều kiện có thật, có thể xảy ra ở hiện tại hoặc tương lai." },
  { unit: "Unit 10", topic: "Conditional Type 2", formula: "If + S + V(past simple), S + would/could + V(bare)", note: "Giả định không có thật hoặc trái với thực tế ở hiện tại; to be dùng 'were'." }
];

// 9 Communication Functions
const communicationHandbook = [
  { func: "Nêu quan điểm cá nhân (Expressing opinions)", patterns: ["I think / believe that...", "In my opinion / From my point of view...", "Personally, I feel that..."], example: "In my opinion, blended learning offers great flexibility." },
  { func: "Đồng ý & Bất đồng lịch sự (Agreeing & Disagreeing)", patterns: ["I completely agree with you.", "I couldn't agree more.", "I see your point, but...", "I'm afraid I have to disagree because..."], example: "I see your point, but technology can sometimes cause distractions." },
  { func: "Đưa ra lời gợi ý & đề xuất (Making suggestions)", patterns: ["Why don't we...?", "How about + V-ing...?", "Let's...", "Shall we...?"], example: "Why don't we organise a recycling drive this Saturday?" },
  { func: "Phản hồi lời gợi ý (Responding to suggestions)", patterns: ["That sounds like a great idea!", "I'd love to!", "I'm afraid I can't because..."], example: "That sounds wonderful! I'll bring some cloth bags." },
  { func: "Xin & đáp lời yêu cầu (Requests & Responses)", patterns: ["Could you please...?", "Would you mind + V-ing...?", "Certainly / Of course.", "I'd be glad to help."], example: "Could you show me how to install this educational app?" },
  { func: "Mời & đáp lời mời (Invitations & Responses)", patterns: ["Would you like to join...?", "Do you fancy going to...?", "I'd love to, thank you.", "I wish I could, but..."], example: "Would you like to come to our acoustic music night?" },
  { func: "Bày tỏ cảm xúc (Expressing feelings)", patterns: ["I'm delighted / proud that...", "I was a bit confused when...", "That sounds fascinating / exciting!"], example: "I felt really proud when our project won first place." },
  { func: "Xin lỗi & đáp lại (Apologising & Responding)", patterns: ["I'm terribly sorry for...", "I sincerely apologise for...", "That's quite all right.", "Don't worry about it."], example: "I'm sorry for being late to the group meeting." },
  { func: "Hỏi & đưa lời khuyên (Asking for & Giving advice)", patterns: ["What should I do about...?", "You should / ought to...", "If I were you, I would..."], example: "If I were you, I would take public transport to reduce emissions." }
];

// 7 Writing Genre Guides
const writingGenres = [
  { genre: "Family Routines Paragraph", guide: "Mở đoạn giới thiệu khái quát gia đình; thân đoạn miêu tả lịch trình việc nhà các ngày trong tuần và cuối tuần (dùng present simple + trạng từ tần suất); kết đoạn nêu cảm nghĩ và sự gắn kết gia đình." },
  { genre: "Formal Announcement", guide: "Tiêu đề bắt mắt ngắn gọn; mục tiêu sự kiện rõ ràng; thời gian, địa điểm cụ thể; các hoạt động chính; đối tượng tham gia và phương thức liên hệ/đăng kí." },
  { genre: "Event Experience Blog Post", guide: "Tiêu đề lôi cuốn; đoạn mở đầu nêu hoàn cảnh sự kiện; thân bài kể diễn biến theo trình tự thời gian kết hợp chi tiết cảm giác âm thanh, ánh sáng; kết luận rút ra bài học hoặc kỉ niệm sâu sắc." },
  { genre: "Volunteer Application Letter", guide: "Lời chào trang trọng (Dear Sir/Madam); nêu vị trí tình nguyện ứng tuyển và nguồn thông tin; trình bày lí do muốn tham gia; nêu kĩ năng và kinh nghiệm phù hợp; cam kết thời gian; lời cảm ơn và kết thư trang trọng (Yours faithfully/sincerely)." },
  { genre: "Invention Benefits Paragraph", guide: "Câu chủ đề nêu rõ phát minh; giải thích cơ chế/chức năng chính; phân tích 2-3 lợi ích thiết thực trong học tập/cuộc sống có ví dụ minh họa; nêu hạn chế nhỏ cần lưu ý và câu kết luận tổng quát." },
  { genre: "Social Issue / Equality Essay", guide: "Mở bài nêu thực trạng vấn đề xã hội/bình đẳng; thân bài chia luận điểm rõ ràng (nguyên nhân, hệ quả, dẫn chứng số liệu hoặc ví dụ); đề xuất các giải pháp khả thi; kết bài khẳng định lại quan điểm văn minh tiến bộ." },
  { genre: "Ecotour Website Promotional Brochure", guide: "Tiêu đề tour hấp dẫn; điểm đến thiên nhiên độc đáo; lịch trình trải nghiệm theo ngày; các quy tắc du lịch có trách nhiệm bảo vệ môi trường; lợi ích đem lại cho cộng đồng bản địa; thông tin liên hệ và đặt chỗ." }
];

module.exports = {
  themes,
  units,
  grammarCheatsheet,
  communicationHandbook,
  writingGenres
};
