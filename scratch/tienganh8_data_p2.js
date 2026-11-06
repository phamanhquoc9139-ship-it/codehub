// tienganh8_data_p2.js
// Data for Tiếng Anh 8 (Global Success) - Theme 3 & Theme 4
// Units 7 to 12 + Reviews 3 & 4 + Fast Summary Matrix & Phonics Matrix

const theme3And4Data = [
  // ==========================================
  // THEME 3: OUR WORLD
  // ==========================================

  // UNIT 7: ENVIRONMENTAL PROTECTION
  {
    id: "unit-7",
    unit: "UNIT 7",
    theme: "OUR WORLD",
    title: "Environmental Protection",
    focus: "Bảo vệ môi trường, sinh thái, giảm thiểu rác thải; Câu phức với mệnh đề trạng ngữ chỉ thời gian; Hỏi xin giải thích/làm rõ; Cụm âm /bl/ và /kl/",
    color: "emerald",
    vocab: [
      { word: "carbon footprint", type: "noun", ipa: "/ˈkɑːbən ˈfʊtprɪnt/", meaning: "dấu chân carbon (lượng khí CO2 phát thải)", ex: "Cycling to school instead of taking motorbikes helps reduce your carbon footprint." },
      { word: "endangered species", type: "noun", ipa: "/ɪnˈdeɪndʒəd ˈspiːʃiːz/", meaning: "loài sinh vật có nguy cơ tuyệt chủng", ex: "Sea turtles in Con Dao National Park are legally protected endangered species." },
      { word: "single-use products", type: "noun", ipa: "/ˈsɪŋɡl juːs ˈprɒdʌkts/", meaning: "sản phẩm nhựa dùng một lần", ex: "Supermarkets should charge extra for single-use plastic bags to discourage usage." },
      { word: "ecosystem", type: "noun", ipa: "/ˈiːkəʊsɪstəm/", meaning: "hệ sinh thái tự nhiên", ex: "Cutting down mangrove forests damages the delicate coastal marine ecosystem." },
      { word: "habitat", type: "noun", ipa: "/ˈhæbɪtæt/", meaning: "môi trường sống tự nhiên của sinh vật", ex: "Deforestation destroys the natural habitat of wild animals like tigers and monkeys." },
      { word: "water pollution", type: "noun", ipa: "/ˈwɔːtə pəˈluːʃn/", meaning: "sự ô nhiễm nguồn nước", ex: "Industrial wastewater discharged into rivers causes severe water pollution." },
      { word: "pick up rubbish", type: "phrase", ipa: "/pɪk ʌp ˈrʌbɪʃ/", meaning: "nhặt gom rác thải", ex: "Volunteers gathered on the beach on Sunday morning to pick up plastic rubbish." },
      { word: "environmental programme", type: "noun", ipa: "/ɪnˌvaɪrənˈmentl ˈprəʊɡræm/", meaning: "chương trình hành động vì môi trường", ex: "Our school initiated an environmental programme called 'Green Sunday'." }
    ],
    grammar: {
      topic: "Complex Sentences with Adverbial Clauses of Time (Câu phức với mệnh đề trạng ngữ chỉ thời gian)",
      rules: [
        "1. Câu phức (Complex sentence) gồm: Một mệnh đề độc lập (Independent clause) và ít nhất một mệnh đề phụ thuộc (Dependent clause).",
        "2. Mệnh đề trạng ngữ chỉ thời gian bắt đầu bằng các liên từ: before (trước khi), after (sau khi), when (khi), while (trong khi), until / till (cho đến khi), as soon as (ngay khi).",
        "3. Vị trí và dấu câu: Nếu mệnh đề thời gian đứng đầu câu, ngăn cách với mệnh đề chính bằng dấu phẩy (,). Nếu đứng sau mệnh đề chính, thường không có dấu phẩy.",
        "4. Quy tắc thì tương lai quan trọng: Khi diễn tả sự việc tương lai, trong mệnh đề trạng ngữ thời gian TUYỆT ĐỐI KHÔNG dùng 'will', mà dùng THÌ HIỆN TẠI ĐƠN (Present Simple).",
        "Ví dụ: I will call you as soon as I arrive at the national park. (KHÔNG DÙNG: as soon as I will arrive)."
      ],
      examples: [
        "Before you throw plastic bottles away, rinse them clean for recycling.",
        "We will start the tree planting campaign as soon as the weather turns sunny.",
        "While volunteers were cleaning the beach, students collected plastic caps for art projects."
      ]
    },
    pronunciation: {
      sounds: "/bl/ vs. /kl/",
      guide: "Cụm phụ âm /bl/ là âm hữu thanh kết hợp /b/ và /l/ (black, blanket, bloom). Cụm phụ âm /kl/ là âm vô thanh bật hơi kết hợp /k/ và /l/ (clean, clever, climate, plastic). Phát âm liền mạch, không chen âm schwa vào giữa.",
      pairs: [
        { wordA: "black /blæk/ (màu đen)", wordB: "clean /kliːn/ (sạch sẽ)" },
        { wordA: "blow /bləʊ/ (thổi)", wordB: "clone /kləʊn/ (nhân bản)" },
        { wordA: "bloom /bluːm/ (nở hoa)", wordB: "climb /klaɪm/ (leo trèo)" },
        { wordA: "blind /blaɪnd/ (mù)", wordB: "client /ˈklaɪənt/ (khách hàng)" }
      ]
    },
    communication: {
      function: "Asking for clarification and explaining (Hỏi xin làm rõ/giải thích ý kiến)",
      dialogue: [
        { speaker: "Nhi", text: "We should strive to minimize our personal carbon footprint every day." },
        { speaker: "Alex", text: "Could you explain what you mean by 'carbon footprint'?" },
        { speaker: "Nhi", text: "It means the total amount of carbon dioxide emitted into the atmosphere by our daily activities, like driving cars or using electricity." },
        { speaker: "Alex", text: "I see! Thank you for making it clear." }
      ]
    },
    skills: {
      reading: "Đọc hiểu về Vườn quốc gia Côn Đảo: Khám phá hệ sinh thái biển và rừng ngập mặn phong phú, các bãi rùa biển đẻ trứng và nỗ lực cấm rác thải nhựa dùng một lần.",
      writing: "Viết một thông báo (Notice) ngắn gọn (80–100 từ) về sự kiện bảo vệ môi trường của trường: Tiêu đề rõ ràng → Thời gian, địa điểm → Mục đích (dọn rác khuôn viên, phân loại rác) → Đối tượng tham gia và vật dụng cần mang theo → Người liên hệ.",
      speaking: "Thảo luận về các hành động cụ thể để giảm thiểu rác thải nhựa tại căn tin trường học.",
      project: "Local Pollution Solution: Khảo sát một điểm nóng ô nhiễm rác thải hoặc nguồn nước tại địa phương; thiết kế áp phích tuyên truyền và đề xuất biện pháp xử lí tới ủy ban phường/xã."
    },
    quiz: [
      {
        q: "Choose the correct verb tense: 'We will turn off all electric lights before we _______ the classroom.'",
        options: ["A. will leave", "B. leave", "C. left", "D. are leaving"],
        a: 1,
        exp: "Trong mệnh đề trạng ngữ chỉ thời gian bắt đầu bằng 'before', dùng thì hiện tại đơn ('leave') để diễn tả hành động tương lai."
      },
      {
        q: "Which word starts with the consonant cluster /kl/?",
        options: ["A. black", "B. blanket", "C. climate", "D. blossom"],
        a: 2,
        exp: "'climate' bắt đầu bằng cụm phụ âm /kl/. Các từ 'black, blanket, blossom' bắt đầu bằng /bl/."
      },
      {
        q: "How do you ask for clarification politely?",
        options: [
          "A. You are speaking nonsense.",
          "B. What do you mean by that term?",
          "C. Say it again right now.",
          "D. I don't care."
        ],
        a: 1,
        exp: "'What do you mean by that term?' hoặc 'Could you explain...?' là cấu trúc chuẩn để xin làm rõ thông tin một cách lịch sự."
      }
    ]
  },

  // UNIT 8: SHOPPING
  {
    id: "unit-8",
    unit: "UNIT 8",
    theme: "OUR WORLD",
    title: "Shopping",
    focus: "Địa điểm và hình thức mua sắm; Trạng từ tần suất & Hiện tại đơn diễn đạt lịch trình tương lai; Khiếu nại dịch vụ lịch sự; Cụm âm /sp/ và /st/",
    color: "teal",
    vocab: [
      { word: "open-air market", type: "noun", ipa: "/ˈəʊpən eə ˈmɑːkɪt/", meaning: "chợ ngoài trời truyền thống", ex: "Local villagers prefer buying fresh vegetables and herbs at the morning open-air market." },
      { word: "convenience store", type: "noun", ipa: "/kənˈviːniəns stɔː/", meaning: "cửa hàng tiện lợi mở 24/7", ex: "There is a 24-hour convenience store right across the street from my apartment." },
      { word: "shopping centre (mall)", type: "noun", ipa: "/ˈʃɒpɪŋ ˈsentə/", meaning: "trung tâm thương mại sầm uất", ex: "Teens love going to the shopping mall on weekends for shopping, food, and cinema." },
      { word: "farmers' market", type: "noun", ipa: "/ˈfɑːməz ˈmɑːkɪt/", meaning: "chợ nông sản do chính nông dân bán", ex: "Organic apples and freshly squeezed honey are sold at the weekly farmers' market." },
      { word: "bargain", type: "verb/noun", ipa: "/ˈbɑːɡən/", meaning: "mặc cả, trả giá / món hàng giá hời", ex: "Foreign tourists often learn how to bargain politely when shopping at market stalls." },
      { word: "price tag", type: "noun", ipa: "/ˈpraɪs tæɡ/", meaning: "mác ghi giá niêm yết trên sản phẩm", ex: "In department stores, all goods have fixed price tags, so you cannot bargain." },
      { word: "on sale", type: "idiom", ipa: "/ɒn seɪl/", meaning: "đang được giảm giá khuyến mãi", ex: "Many winter jackets are on sale at a 50% discount this week." },
      { word: "shopaholic", type: "noun", ipa: "/ˌʃɒpəˈhɒlɪk/", meaning: "người nghiện mua sắm không kiểm soát", ex: "Linda is a real shopaholic; she orders online clothes almost every single day." },
      { word: "home-grown", type: "adj", ipa: "/ˌhəʊm ˈɡrəʊn/", meaning: "nhà tự trồng (rau củ quả sạch)", ex: "My grandmother always serves delicious home-grown tomatoes and cucumbers." }
    ],
    grammar: {
      topic: "Adverbs of Frequency & Present Simple for Future Schedules (Trạng từ tần suất & Hiện tại đơn chỉ lịch trình)",
      rules: [
        "1. Trạng từ chỉ tần suất (Adverbs of Frequency): always (100%), usually (80%), often (60%), sometimes (40%), rarely / seldom (10%), never (0%).",
        "Vị trí trạng từ: Đứng TRƯỚC động từ thường (I usually shop online) nhưng đứng SAU động từ 'to be' (He is always on time for work).",
        "2. Thì Hiện tại đơn diễn đạt thời khóa biểu, lịch trình cố định trong tương lai (Timetables & Scheduled Events):",
        "Dùng thì Hiện tại đơn cho lịch tàu xe, máy bay, giờ mở cửa cửa hàng, lịch chiếu phim hoặc chương trình hội chợ có lịch công bố trước.",
        "Dấu hiệu: Các động từ lịch trình như leave, depart, arrive, start, begin, open, close, end kèm mốc thời gian tương lai.",
        "Ví dụ: The supermarket opens at 7:30 a.m. tomorrow. The flight departs at 9:15 p.m. this evening."
      ],
      examples: [
        "My mother rarely goes to the shopping mall because she prefers the local farmers' market.",
        "The annual summer discount fair starts next Friday and lasts for three days.",
        "What time does the express train to Da Nang leave tonight? — It leaves at 8:00 p.m."
      ]
    },
    pronunciation: {
      sounds: "/sp/ vs. /st/",
      guide: "Cụm phụ âm /sp/ kết hợp âm gió /s/ và âm bật môi /p/ (spend, space, speciality, sport). Cụm phụ âm /st/ kết hợp /s/ và âm chân răng /t/ (store, stand, station, storm). Phát âm dứt khoát, không tạo âm đệm giữa hai âm.",
      pairs: [
        { wordA: "spin /spɪn/ (quay tròn)", wordB: "sting /stɪŋ/ (châm chích)" },
        { wordA: "spend /spend/ (tiêu xài)", wordB: "stand /stænd/ (đứng)" },
        { wordA: "spot /spɒt/ (điểm)", wordB: "stop /stɒp/ (dừng lại)" },
        { wordA: "special /ˈspeʃl/ (đặc biệt)", wordB: "station /ˈsteɪʃn/ (nhà ga)" }
      ]
    },
    communication: {
      function: "Making polite complaints (Khiếu nại về hàng hóa/dịch vụ lịch sự)",
      dialogue: [
        { speaker: "Customer", text: "Excuse me, I'm calling to complain about the sweater I ordered yesterday." },
        { speaker: "Shop Assistant", text: "I'm very sorry to hear that. What seems to be the problem with it?" },
        { speaker: "Customer", text: "The color is completely different from the photo on your website, and the sleeve is torn." },
        { speaker: "Shop Assistant", text: "We apologize for this inconvenience. We will send you a replacement immediately without extra charge." }
      ]
    },
    skills: {
      reading: "Đọc hiểu về những lí do trung tâm thương mại thu hút khách hàng: Không chỉ để mua sắm hàng hóa đa dạng, mà còn để trải nghiệm ẩm thực, xem phim, tận hưởng máy lạnh và giao lưu bạn bè.",
      writing: "Viết đoạn văn (80–100 từ) về ưu điểm HOẶC nhược điểm của việc mua sắm trực tuyến (Online shopping): Nêu rõ hình thức → 2-3 lí do (tiết kiệm thời gian, so sánh giá dễ dàng vs. hàng lỗi, mất thời gian giao hàng) → Lời khuyên khi mua online.",
      speaking: "Phỏng vấn bạn bè về thói quen mua sắm: Tần suất đi chợ, đồ hay mua, có hay mặc cả không.",
      project: "Dream Shopping Venue: Thiết kế một địa điểm mua sắm lí tưởng trong khu phố (Tên cửa hàng, vị trí, các mặt hàng đặc sản, tiện ích thân thiện môi trường và bảng giá)."
    },
    quiz: [
      {
        q: "Choose the correct sentence indicating a future timetable:",
        options: [
          "A. The shopping center will open at 8 a.m. tomorrow.",
          "B. The shopping center opens at 8 a.m. tomorrow.",
          "C. The shopping center opened at 8 a.m. tomorrow.",
          "D. The shopping center is opening at 8 a.m. tomorrow."
        ],
        a: 1,
        exp: "Hiện tại đơn ('opens') được dùng chuẩn mực để chỉ giờ mở cửa theo lịch trình cố định trong tương lai."
      },
      {
        q: "Choose the correct word order: 'He _______ late for his shift at the supermarket.'",
        options: ["A. is never", "B. never is", "C. doesn't never", "D. is not never"],
        a: 0,
        exp: "Trạng từ tần suất đứng SAU động từ 'to be': 'is never late'."
      },
      {
        q: "Which word starts with the consonant cluster /sp/?",
        options: ["A. stall", "B. store", "C. speciality", "D. street"],
        a: 2,
        exp: "'speciality' bắt đầu bằng cụm /sp/. Các từ 'stall, store, street' bắt đầu bằng /st/ hoặc /str/."
      }
    ]
  },

  // UNIT 9: NATURAL DISASTERS
  {
    id: "unit-9",
    unit: "UNIT 9",
    theme: "OUR WORLD",
    title: "Natural Disasters",
    focus: "Thảm họa thiên nhiên, công tác cứu hộ khẩn cấp; Thì Quá khứ tiếp diễn (Past Continuous); Thể hiện sự đồng cảm với tin xấu; Trọng âm từ đuôi -al và -ous",
    color: "rose",
    vocab: [
      { word: "earthquake", type: "noun", ipa: "/ˈɜːθkweɪk/", meaning: "trận động đất", ex: "The powerful earthquake shook buildings and caused widespread tremors across the city." },
      { word: "volcanic eruption", type: "noun", ipa: "/vɒlˈkænɪk ɪˈrʌpʃn/", meaning: "sự phun trào núi lửa", ex: "The volcanic eruption spewed tons of boiling ash and lava into the sky." },
      { word: "tsunami", type: "noun", ipa: "/tsuːˈnɑːmi/", meaning: "sóng thần kinh hoàng", ex: "A massive tsunami followed the undersea earthquake, flooding coastal villages." },
      { word: "landslide", type: "noun", ipa: "/ˈlændslaɪd/", meaning: "sạt lở đất đá nghiêm trọng", ex: "Heavy tropical downpours triggered dangerous landslides on the mountain pass." },
      { word: "emergency kit", type: "noun", ipa: "/ɪˈmɜːdʒənsi kɪt/", meaning: "bộ dụng cụ sơ cứu/sinh tồn khẩn cấp", ex: "Every family should prepare an emergency kit with canned food, torches, and water bottles." },
      { word: "rescue worker", type: "noun", ipa: "/ˈreskjuː ˈwɜːkə/", meaning: "nhân viên cứu hộ cứu nạn", ex: "Brave rescue workers worked through the night to search for trapped survivors." },
      { word: "victim", type: "noun", ipa: "/ˈvɪktɪm/", meaning: "nạn nhân của thảm họa", ex: "Charity organizations donated warm clothes and medicines to the flood victims." },
      { word: "property damage", type: "noun", ipa: "/ˈprɒpəti ˈdæmɪdʒ/", meaning: "thiệt hại về tài sản", ex: "The tropical typhoon caused millions of dollars in property damage." }
    ],
    grammar: {
      topic: "The Past Continuous Tense & Past Continuous vs. Past Simple (Thì Quá khứ tiếp diễn)",
      rules: [
        "1. Cấu trúc Quá khứ tiếp diễn: Khẳng định: S + was/were + V-ing | Phủ định: S + was/were not (wasn't/weren't) + V-ing | Nghi vấn: Was/Were + S + V-ing?",
        "Dùng 'was' cho: I, he, she, it, danh từ số ít. Dùng 'were' cho: you, we, they, danh từ số nhiều.",
        "2. Cách dùng 1: Hành động đang xảy ra tại một thời điểm xác định trong quá khứ. (Ví dụ: At 8 p.m. yesterday, we were watching storm warnings on TV).",
        "3. Cách dùng 2: Hành động đang diễn ra (hành động nền - chia Quá khứ tiếp diễn) thì có hành động khác xen vào (chia Quá khứ đơn).",
        "Cấu trúc liên từ: When + S + V(quá khứ đơn), S + was/were + V-ing. HOẶC While + S + was/were + V-ing, S + V(quá khứ đơn).",
        "4. Cách dùng 3: Hai hành động diễn ra song song cùng lúc trong quá khứ (While my mother was cooking dinner, my father was checking the storm shutters)."
      ],
      examples: [
        "What were you doing when the earthquake struck the coastal province?",
        "While rescue workers were searching the rubble, they heard a faint crying voice.",
        "At this time last Monday, torrential rain was flooding all downtown streets."
      ]
    },
    pronunciation: {
      sounds: "Stress in words ending in -al and -ous",
      guide: "Các từ có hậu tố '-al' và '-ous' thường có trọng âm rơi vào âm tiết thứ 3 từ cuối lên (hoặc âm tiết trước hậu tố nếu từ 2 âm tiết): 'natural /ˈnætʃrəl/', 'practical /ˈpræktɪkl/', 'dangerous /ˈdeɪndʒərəs/', 'poisonous /ˈpɔɪzənəs/'.",
      pairs: [
        { wordA: "nature /ˈneɪtʃə/", wordB: "natural /ˈnætʃrəl/ (trọng âm 1)" },
        { wordA: "danger /ˈdeɪndʒə/", wordB: "dangerous /ˈdeɪndʒərəs/ (trọng âm 1)" },
        { wordA: "disaster /dɪˈzɑːstə/", wordB: "disastrous /dɪˈzɑːstrəs/ (trọng âm 2)" },
        { wordA: "accident /ˈæksɪdənt/", wordB: "accidental /ˌæksɪˈdentl/ (trọng âm 3)" }
      ]
    },
    communication: {
      function: "Expressing sympathy to bad news (Chia sẻ sự cảm thông trước tin buồn/thiên tai)",
      dialogue: [
        { speaker: "Mark", text: "Did you hear about the massive flood in the central region yesterday?" },
        { speaker: "Hoa", text: "Yes, I watched the news. Hundreds of homes were submerged under water." },
        { speaker: "Mark", text: "That's awful! I'm so sorry to hear that. I hope everyone is in safe shelters now." },
        { speaker: "Hoa", text: "Our school is launching a fundraiser to help the victims tomorrow." }
      ]
    },
    skills: {
      reading: "Đọc hiểu bản tin về các thảm họa tự nhiên (Núi lửa phun trào ở Philippines, động đất ở Nhật Bản): Nhận biết nguyên nhân, thời điểm, con số thiệt hại và hoạt động cứu hộ.",
      writing: "Viết hướng dẫn an toàn (80–100 từ) về những điều cần làm trước, trong và sau bão (Typhoon safety rules): Trước bão (chuẩn bị lương thực, chằng chống nhà) → Trong bão (ở trong nhà, ngắt nguồn điện) → Sau bão (tránh dây điện đứt, kiểm tra nguồn nước).",
      speaking: "Đóng vai người dẫn chương trình thời tiết đưa tin về một trận bão nhiệt đới đang tiến vào Biển Đông.",
      project: "Natural Disaster Preparedness: Tạo cẩm nang sinh tồn khi xảy ra thiên tai (Động đất hoặc sạt lở đất); trình bày danh mục 10 đồ vật cần có trong ba lô khẩn cấp."
    },
    quiz: [
      {
        q: "Choose the correct sentence combining past tenses:",
        options: [
          "A. We were eating dinner when the siren began to wail.",
          "B. We ate dinner when the siren was beginning to wail.",
          "C. We were eating dinner when the siren was beginning to wail.",
          "D. We eat dinner when the siren began to wail."
        ],
        a: 0,
        exp: "Hành động đang diễn ra chia Quá khứ tiếp diễn ('were eating'), hành động bất ngờ xen vào chia Quá khứ đơn ('began')."
      },
      {
        q: "Which word has the primary stress on the first syllable?",
        options: ["A. disastrous", "B. dangerous", "C. eruptive", "D. electric"],
        a: 1,
        exp: "'dangerous' có trọng âm rơi vào âm tiết thứ nhất /ˈdeɪndʒərəs/. Các từ còn lại có trọng âm ở âm tiết 2."
      },
      {
        q: "What is the most sympathetic response to 'A flash flood swept through our village last night'?",
        options: [
          "A. That's fantastic!",
          "B. I'm terribly sorry to hear that. I hope your family is safe.",
          "C. Congratulations to you.",
          "D. It doesn't matter at all."
        ],
        a: 1,
        exp: "Đáp lại tin buồn về thiên tai bằng lời chia sẻ chân thành: 'I'm terribly sorry to hear that. I hope your family is safe.'"
      }
    ]
  },

  // REVIEW 3 (UNITS 7 - 9)
  {
    id: "review-3",
    unit: "REVIEW 3",
    theme: "OUR WORLD",
    title: "Review 3 (Units 7 - 8 - 9)",
    focus: "Ôn tập tổng hợp Theme 3: Môi trường, Mua sắm, Thiên tai; Mệnh đề thời gian, Lịch trình tương lai, Quá khứ tiếp diễn; Cụm âm /bl/ - /kl/, /sp/ - /st/, Trọng âm -al / -ous",
    color: "emerald",
    vocab: [
      { word: "global crisis", type: "phrase", ipa: "/ˈɡləʊbl ˈkraɪsɪs/", meaning: "khủng hoảng toàn cầu", ex: "Climate change and extreme natural disasters are creating a severe global crisis." },
      { word: "consumer habits", type: "phrase", ipa: "/kənˈsjuːmə ˈhæbɪts/", meaning: "thói quen tiêu dùng", ex: "Greener consumer habits help minimize waste and protect the ecosystem." },
      { word: "disaster response", type: "phrase", ipa: "/dɪˈzɑːstə rɪˈspɒns/", meaning: "ứng phó thảm họa thiên tai", ex: "Effective disaster response saves thousands of lives during earthquakes." }
    ],
    grammar: {
      topic: "Grammar Consolidation: Time Clauses, Scheduled Present, Past Continuous",
      rules: [
        "1. Time clauses: Before/After/When/While/As soon as + S + V(present simple), S + will + V_inf.",
        "2. Scheduled events: S + V(s/es) with fixed timetables in the future.",
        "3. Past continuous: S + was/were + V-ing for past actions at a point in time or interrupted by another action (when + past simple)."
      ],
      examples: [
        "As soon as the storm passes, emergency workers will deliver supplies to victims.",
        "The department store closes at 10 p.m. this evening.",
        "While we were preparing our emergency kit, the electricity went out."
      ]
    },
    pronunciation: {
      sounds: "Phonetic Revision: /bl/ - /kl/, /sp/ - /st/, Stress in -al & -ous",
      guide: "Ôn tập phát âm các cụm phụ âm đôi (/bl/ - /kl/, /sp/ - /st/) và quy tắc đánh trọng âm từ kết thúc bằng hậu tố -al, -ous.",
      pairs: [
        { wordA: "black /blæk/", wordB: "clean /kliːn/" },
        { wordA: "spend /spend/", wordB: "store /stɔː/" },
        { wordA: "practical /ˈpræktɪkl/", wordB: "famous /ˈfeɪməs/" }
      ]
    },
    communication: {
      function: "Asking for clarification, polite complaints, expressing sympathy",
      dialogue: [
        { speaker: "A", text: "I'm calling to complain about the emergency kit we bought; the flashlight was broken." },
        { speaker: "B", text: "I'm really sorry to hear that. Could you explain the defect so we can replace it immediately?" }
      ]
    },
    skills: {
      reading: "Đọc hiểu về kĩ năng phòng chống sạt lở đất tại các vùng núi Tây Bắc trong mùa mưa bão.",
      writing: "Viết đoạn văn ngắn (80-100 từ) về các biện pháp gia đình em thực hiện để giảm thiểu túi nilon và đồ nhựa dùng một lần.",
      speaking: "Thảo luận về các hành động cấp bách cần làm khi có cảnh báo siêu bão đổ bộ."
    },
    quiz: [
      {
        q: "Choose the correct sentence:",
        options: [
          "A. While we walked to school, it began to rain heavily.",
          "B. While we were walking to school, it began to rain heavily.",
          "C. While we were walking to school, it was beginning to rain heavily.",
          "D. While we walked to school, it was beginning to rain heavily."
        ],
        a: 1,
        exp: "Sau 'while' dùng quá khứ tiếp diễn ('were walking'), hành động xen vào dùng quá khứ đơn ('began')."
      },
      {
        q: "Which word has stress on the second syllable?",
        options: ["A. natural", "B. practical", "C. disastrous", "D. dangerous"],
        a: 2,
        exp: "'disastrous' phát âm là /dɪˈzɑːstrəs/ có trọng âm ở âm tiết thứ 2. Các từ còn lại có trọng âm ở âm tiết 1."
      }
    ]
  },

  // ==========================================
  // THEME 4: VISIONS OF THE FUTURE
  // ==========================================

  // UNIT 10: COMMUNICATION IN THE FUTURE
  {
    id: "unit-10",
    unit: "UNIT 10",
    theme: "VISIONS OF THE FUTURE",
    title: "Communication in the Future",
    focus: "Công nghệ giao tiếp tương lai, thần giao cách cảm, thực tế ảo; Giới từ chỉ nơi chốn & thời gian; Đại từ sở hữu; Trọng âm từ đuôi -ese và -ee",
    color: "indigo",
    vocab: [
      { word: "video conference", type: "noun", ipa: "/ˈvɪdiəʊ ˈkɒnfərəns/", meaning: "cuộc họp hội nghị truyền hình trực tuyến", ex: "Business partners around the world hold daily video conferences on high-speed networks." },
      { word: "holography", type: "noun", ipa: "/hɒˈlɒɡrəfi/", meaning: "kĩ thuật ghi hình 3D toàn ảnh (hologram)", ex: "Holography will allow us to project 3D lifelike images of friends into our living rooms." },
      { word: "telepathy", type: "noun", ipa: "/təˈlepəθi/", meaning: "thần giao cách cảm (truyền ý nghĩ)", ex: "In science fiction, telepathy enables people to communicate thoughts directly without speaking." },
      { word: "translation machine", type: "noun", ipa: "/trænzˈleɪʃn məˈʃiːn/", meaning: "thiết bị/máy dịch thuật tức thì", ex: "Pocket translation machines help tourists break language barriers instantly." },
      { word: "language barrier", type: "noun", ipa: "/ˈlæŋɡwɪdʒ ˈbæriə/", meaning: "rào cản ngôn ngữ", ex: "Advanced AI translation tools will soon completely eliminate language barriers." },
      { word: "text message", type: "noun", ipa: "/tekst ˈmesɪdʒ/", meaning: "tin nhắn văn bản điện thoại", ex: "Instead of calling, young people prefer sending quick text messages with emojis." },
      { word: "voice message", type: "noun", ipa: "/vɔɪs ˈmesɪdʒ/", meaning: "tin nhắn ghi âm giọng nói", ex: "I left a voice message explaining why I couldn't attend the study group." },
      { word: "instantly", type: "adv", ipa: "/ˈɪnstəntli/", meaning: "ngay lập tức, tức thời", ex: "High-speed 6G connectivity allows data and videos to download instantly." }
    ],
    grammar: {
      topic: "Prepositions of Place & Time; Possessive Pronouns (Giới từ chỉ nơi chốn/thời gian & Đại từ sở hữu)",
      rules: [
        "1. Giới từ chỉ nơi chốn (Prepositions of Place): at (tại điểm cụ thể: at school, at home), in (trong không gian khép kín/thành phố/quốc gia: in the room, in Ha Noi), on (trên bề mặt: on the table, on the screen), in front of (phía trước), opposite (đối diện).",
        "2. Giới từ chỉ thời gian (Prepositions of Time): in (tháng/năm/thế kỉ/buổi: in 2050, in May, in the morning), at (giờ giấc/dịp lễ cụ thể: at 7 a.m., at noon), on (ngày trong tuần/ngày tháng: on Monday, on July 15th), for (khoảng thời gian: for 3 hours), by (trước mốc thời gian: by 5 p.m.).",
        "3. Đại từ sở hữu (Possessive Pronouns): mine, yours, his, hers, ours, theirs. Dùng để THAY THẾ cho [Tính từ sở hữu + Danh từ] đã nhắc đến trước đó để tránh lặp từ.",
        "Ví dụ: This smartphone is my smartphone -> This smartphone is mine. Her hologram is brighter than yours (your hologram).",
        "4. Cấu trúc sở hữu kép: 'a friend of mine' = one of my friends; 'a cousin of hers' = one of her cousins."
      ],
      examples: [
        "We will meet at the tech exhibition on Sunday morning.",
        "Your translation device works much faster than mine.",
        "That holographic headset belongs to Nam; it is his."
      ]
    },
    pronunciation: {
      sounds: "Stress in words ending in -ese and -ee",
      guide: "Các từ kết thúc bằng hậu tố '-ese' và '-ee' LUÔN nhận trọng âm chính ở chính âm tiết cuối cùng đó: 'Vietnamese /ˌvjetnəˈmiːz/', 'Japanese /ˌdʒæpəˈniːz/', 'trainee /ˌtreɪˈniː/', 'referee /ˌrefəˈriː/', 'interviewee /ˌɪntəvjuːˈiː/'.",
      pairs: [
        { wordA: "Vietnam /ˌvjetˈnæm/", wordB: "Vietnamese /ˌvjetnəˈmiːz/ (trọng âm âm 3)" },
        { wordA: "Japan /dʒəˈpæn/", wordB: "Japanese /ˌdʒæpəˈniːz/ (trọng âm âm 3)" },
        { wordA: "train /treɪn/", wordB: "trainee /ˌtreɪˈniː/ (trọng âm âm 2)" },
        { wordA: "refer /rɪˈfɜː/", wordB: "referee /ˌrefəˈriː/ (trọng âm âm 3)" }
      ]
    },
    communication: {
      function: "Making polite interruptions (Ngắt lời người khác một cách lịch sự)",
      dialogue: [
        { speaker: "Professor", text: "In the 2050s, human thought transfer will replace smartphones entirely..." },
        { speaker: "Student", text: "Sorry for interrupting, Professor, but how will we protect our personal privacy during telepathic communication?" },
        { speaker: "Professor", text: "That is an excellent question! Engineers will develop cryptographic brainwave firewalls." }
      ]
    },
    skills: {
      reading: "Đọc hiểu các dự đoán về công nghệ viễn thông tương lai: Kính áp tròng 3D, thần giao cách cảm nhân tạo qua chip thần kinh và những băn khoăn về quyền riêng tư dữ liệu cá nhân.",
      writing: "Viết đoạn văn (80–100 từ) mô tả một phương thức giao tiếp hiện đại hoặc tương lai: Tên công nghệ (Hologram chat) → Cách thức hoạt động và thiết bị cần thiết → 2 ưu điểm nổi trội → 1 hạn chế (chi phí đắt, đòi hỏi băng thông cao) → Triển vọng sử dụng.",
      speaking: "Tranh luận về việc liệu giao tiếp trực tuyến có làm con người xa cách nhau hơn trong đời thực.",
      project: "Communication in 2050: Tưởng tượng và vẽ poster một thiết bị giao tiếp mang tính đột phá vào năm 2050 (Tên phát minh, tính năng kì diệu, lợi ích cho nhân loại)."
    },
    quiz: [
      {
        q: "Choose the correct possessive pronoun: 'My smartphone has a 5G connection, but _______ doesn't.'",
        options: ["A. her", "B. hers", "C. she", "D. your"],
        a: 1,
        exp: "'hers' = 'her smartphone'. Đại từ sở hữu thay thế cho tính từ sở hữu + danh từ."
      },
      {
        q: "Where is the main stress in the word 'interviewee'?",
        options: ["A. first syllable", "B. second syllable", "C. third syllable", "D. fourth syllable (-ee)"],
        a: 3,
        exp: "Từ có đuôi '-ee' có trọng âm rơi vào chính âm tiết cuối cùng: /ˌɪntəvjuːˈiː/."
      },
      {
        q: "How do you interrupt a speaker politely?",
        options: [
          "A. Stop talking right now!",
          "B. Excuse me, sorry for interrupting, but could you clarify that point?",
          "C. Your talk is boring.",
          "D. Listen to me instead."
        ],
        a: 1,
        exp: "Cách ngắt lời lịch sự chuẩn mực: 'Excuse me, sorry for interrupting, but...'"
      }
    ]
  },

  // UNIT 11: SCIENCE AND TECHNOLOGY
  {
    id: "unit-11",
    unit: "UNIT 11",
    theme: "VISIONS OF THE FUTURE",
    title: "Science and Technology",
    focus: "Khoa học, phát minh và công nghệ giáo dục; Câu tường thuật dạng câu kể (Reported Speech - Statements); Bày tỏ và đáp lại tin mừng; Trọng âm câu (Sentence Stress)",
    color: "blue",
    vocab: [
      { word: "biometrics", type: "noun", ipa: "/ˌbaɪəʊˈmetrɪks/", meaning: "sinh trắc học (vân tay, mống mắt, khuôn mặt)", ex: "Biometrics allows secure authentication without remembering complicated passwords." },
      { word: "fingerprint scanner", type: "noun", ipa: "/ˈfɪŋɡəprɪnt ˈskænə/", meaning: "máy quét dấu vân tay", ex: "The school library installed a fingerprint scanner for automated book checkouts." },
      { word: "face recognition", type: "noun", ipa: "/feɪs ˌrekəɡˈnɪʃn/", meaning: "công nghệ nhận diện khuôn mặt", ex: "Face recognition cameras can take attendance in classrooms within seconds." },
      { word: "eye-tracking", type: "noun", ipa: "/aɪ ˈtrækɪŋ/", meaning: "công nghệ theo dõi ánh nhìn của mắt", ex: "Eye-tracking sensors help teachers understand which slides students focus on most." },
      { word: "3D contact lenses", type: "noun", ipa: "/ˌθriː diː ˈkɒntækt lenzɪz/", meaning: "kính áp tròng 3D thực tế ảo", ex: "3D contact lenses will display virtual screens right in front of our eyes." },
      { word: "breakout room", type: "noun", ipa: "/ˈbreɪkaʊt ruːm/", meaning: "phòng thảo luận nhóm nhỏ trong học trực tuyến", ex: "The teacher divided our online class into four breakout rooms for group discussion." },
      { word: "robot teacher", type: "noun", ipa: "/ˈrəʊbɒt ˈtiːtʃə/", meaning: "giáo viên người máy/trí tuệ nhân tạo", ex: "Can a robot teacher truly understand the emotional needs of young students?" },
      { word: "invent vs. discover", type: "verb", ipa: "/ɪnˈvent / dɪˈskʌvə/", meaning: "phát minh (tạo ra cái mới) vs. khám phá (tìm ra cái đã có)", ex: "Edison invented the light bulb, whereas Columbus discovered America." }
    ],
    grammar: {
      topic: "Reported Speech for Statements (Câu tường thuật dạng câu kể)",
      rules: [
        "1. Khái niệm: Dùng để thuật lại lời nói của người khác mà không giữ nguyên văn câu gốc.",
        "2. Động từ tường thuật phổ biến: said (that) + mệnh đề; told + Object (người nghe) + (that) + mệnh đề. (Lưu ý: said to me -> told me; KHÔNG DÙNG told that mà thiếu tân ngữ).",
        "3. Quy tắc LÙI THÌ (Tense Backshift) khi động từ tường thuật ở quá khứ:",
        "- Hiện tại đơn (V/Vs/es) -> Quá khứ đơn (V-ed/V2)",
        "- Hiện tại tiếp diễn (am/is/are + V-ing) -> Quá khứ tiếp diễn (was/were + V-ing)",
        "- Hiện tại hoàn thành (have/has + V3) -> Quá khứ hoàn thành (had + V3)",
        "- Tương lai đơn (will + V) -> Tương lai trong quá khứ (would + V)",
        "- Can -> Could; May -> Might; Must -> Had to",
        "4. Điều chỉnh Đại từ nhân xưng và Tính từ sở hữu: Phù hợp với người nói và người nghe (I -> he/she; my -> his/her; we -> they).",
        "5. Điều chỉnh Trạng từ chỉ thời gian và nơi chốn:",
        "- now -> then; today -> that day; tonight -> that night",
        "- tomorrow -> the next day / the following day; yesterday -> the day before / the previous day",
        "- ago -> before; this -> that; these -> those; here -> there"
      ],
      examples: [
        "Direct: 'I am inventing a mini cleaning robot,' Tom said. -> Indirect: Tom said that he was inventing a mini cleaning robot.",
        "Direct: 'We will install face recognition tomorrow,' the technician told us. -> Indirect: The technician told us that they would install face recognition the following day.",
        "Direct: 'Mai can operate this 3D printer skillfully,' Nam said. -> Indirect: Nam said that Mai could operate that 3D printer skillfully."
      ]
    },
    pronunciation: {
      sounds: "Sentence Stress (Trọng âm câu)",
      guide: "Trong câu tiếng Anh, các TỪ NỘI DUNG (Content words: danh từ, động từ chính, tính từ, trạng từ, từ phủ định, từ hỏi) thường được nhấn mạnh (đọc to, cao, rõ hơn). Các TỪ CHỨC NĂNG (Structure/Function words: mạo từ, giới từ, đại từ, trợ động từ) thường đọc lướt, không nhấn.",
      pairs: [
        { wordA: "'ROBOTS will ne'ver re'place 'TEACHERS.", wordB: "(Nhấn các từ: robots, never, replace, teachers)" },
        { wordA: "She in'VENTED an in'CREdible 'DEvice.", wordB: "(Nhấn các từ: invented, incredible, device)" },
        { wordA: "We 'STUDY 'ONLINE in 'BREAKout 'ROOMS.", wordB: "(Nhấn các từ: study, online, breakout, rooms)" }
      ]
    },
    communication: {
      function: "Expressing and responding to good news (Bày tỏ và đáp lại tin mừng)",
      dialogue: [
        { speaker: "Minh", text: "Guess what! My STEM team won the first prize in the National Robotics Competition!" },
        { speaker: "Sarah", text: "That's fantastic news! Congratulations! You all worked so hard for it!" },
        { speaker: "Minh", text: "Thank you so much! Our robot completed the obstacle course in record time." },
        { speaker: "Sarah", text: "Brilliant! You must be extremely proud!" }
      ]
    },
    skills: {
      reading: "Đọc bài viết về các ứng dụng sinh trắc học và AI trong trường học thông minh: Quét vân tay mở cửa, camera nhận diện điểm danh và ứng dụng kính áp tròng tương tác 3D.",
      writing: "Viết đoạn văn (80–100 từ) trình bày quan điểm ĐỒNG Ý hoặc KHÔNG ĐỒNG Ý về việc robot giáo viên thay thế giáo viên con người trong tương lai: Nêu luận điểm → 2 luận cứ (robot lưu trữ dữ liệu khổng lồ, dạy 24/7 vs. thiếu cảm xúc, không thể dạy đạo đức hay đồng cảm) → Khẳng định vai trò của thầy cô.",
      speaking: "Trình bày về một phát minh công nghệ mà em mong muốn sở hữu nhất trong tương lai.",
      project: "Invent a Classroom Gadget: Sáng chế mô hình một thiết bị thông minh giải quyết vấn đề học tập (Tên thiết bị, hình dáng, cách thức vận hành, các linh kiện và lợi ích đem lại cho học sinh)."
    },
    quiz: [
      {
        q: "Change into reported speech: 'I will buy a new tablet tomorrow,' Peter told me.",
        options: [
          "A. Peter told me that he will buy a new tablet tomorrow.",
          "B. Peter told me that he would buy a new tablet the following day.",
          "C. Peter said me that he would buy a new tablet the next day.",
          "D. Peter told that he bought a new tablet yesterday."
        ],
        a: 1,
        exp: "Lùi thì: 'will buy' -> 'would buy'; đổi trạng từ: 'tomorrow' -> 'the following day'; 'Peter told me' giữ nguyên."
      },
      {
        q: "Choose the correct reporting verb: 'She _______ me that the science lab was closed.'",
        options: ["A. said", "B. told", "C. asked", "D. spoke"],
        a: 1,
        exp: "Có tân ngữ chỉ người nhận 'me', dùng động từ 'told' (told + O + that...)."
      },
      {
        q: "How do you respond enthusiastically to good news like 'I passed the exam with flying colours'?",
        options: [
          "A. What a pity!",
          "B. That's brilliant! Congratulations!",
          "C. Never mind.",
          "D. I don't believe you."
        ],
        a: 1,
        exp: "Đáp lại tin mừng bằng sự khen ngợi nồng nhiệt: 'That's brilliant! Congratulations!'"
      }
    ]
  },

  // UNIT 12: LIFE ON OTHER PLANETS
  {
    id: "unit-12",
    unit: "UNIT 12",
    theme: "VISIONS OF THE FUTURE",
    title: "Life on Other Planets",
    focus: "Hệ Mặt Trời, khám phá vũ trụ, người ngoài hành tinh; Câu hỏi tường thuật (Reported Speech - Questions); Ngữ điệu khi liệt kê (Listing Intonation); Thể hiện sự chưa chắc chắn",
    color: "purple",
    vocab: [
      { word: "solar system", type: "noun", ipa: "/ˈsəʊlə ˈsɪstəm/", meaning: "Hệ Mặt Trời (Thái Dương Hệ)", ex: "Our solar system consists of the Sun and eight planets revolving around it." },
      { word: "outer space", type: "noun", ipa: "/ˌaʊtə ˈspeɪs/", meaning: "không gian vũ trụ bao la", ex: "Telescopes help astronomers explore distant galaxies in outer space." },
      { word: "habitable", type: "adj", ipa: "/ˈhæbɪtəbl/", meaning: "có thể sinh sống được (có nước, khí quyển)", ex: "Scientists are searching for habitable exoplanets that have liquid water and oxygen." },
      { word: "crater", type: "noun", ipa: "/ˈkreɪtə/", meaning: "miệng hố thiên thạch trên bề mặt hành tinh", ex: "The surface of the Moon is covered with thousands of impact craters." },
      { word: "gravity", type: "noun", ipa: "/ˈɡrævəti/", meaning: "trọng lực, lực hút của hành tinh", ex: "The gravity on Mars is only about 38 percent of that on Earth." },
      { word: "alien creature", type: "noun", ipa: "/ˈeɪliən ˈkriːtʃə/", meaning: "sinh vật ngoài hành tinh", ex: "Movies often portray alien creatures with green skin and multiple large eyes." },
      { word: "telescope", type: "noun", ipa: "/ˈtelɪskəʊp/", meaning: "kính thiên văn quang học/vũ trụ", ex: "The James Webb Space Telescope captures breathtaking images of deep cosmic nebulas." },
      { word: "galaxy", type: "noun", ipa: "/ˈɡæləksi/", meaning: "dải ngân hà, thiên hà", ex: "The Milky Way is our home galaxy containing billions of solar systems." },
      { word: "8 planets in Solar System", type: "phrase", ipa: "/eɪt ˈplænɪts/", meaning: "8 hành tinh: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune", ex: "Mercury is the closest planet to the Sun, while Neptune is the farthest." }
    ],
    grammar: {
      topic: "Reported Speech for Questions (Câu hỏi tường thuật)",
      rules: [
        "1. Động từ tường thuật câu hỏi: asked (+ O), wanted to know, wondered.",
        "2. Câu hỏi Wh-questions (câu hỏi có từ để hỏi):",
        "Cấu trúc: S + asked (+ O) + Wh-word + S + V(lùi thì).",
        "QUY TẮC CỐT LÕI: Đổi trật tự câu hỏi về trật tự CÂU KỂ (S + V); TUYỆT ĐỐI KHÔNG đảo trợ động từ (do/does/did) lên trước chủ ngữ; BỎ dấu chấm hỏi (?).",
        "Ví dụ: 'Where is Mars?' she asked. -> She asked where Mars was. (KHÔNG DÙNG: where was Mars).",
        "3. Câu hỏi Yes/No questions (câu hỏi Có/Không):",
        "Cấu trúc: S + asked (+ O) + if / whether + S + V(lùi thì).",
        "Ví dụ: 'Can aliens survive on Jupiter?' Tom asked. -> Tom asked if aliens could survive on Jupiter.",
        "4. Lùi thì và đổi đại từ, thời gian, nơi chốn theo đúng quy tắc câu tường thuật câu kể."
      ],
      examples: [
        "Direct: 'What does the telescope show?' Nick asked. -> Nick asked what the telescope showed.",
        "Direct: 'Are there any traces of water on Mars?' Dr. Green asked. -> Dr. Green asked if there were any traces of water on Mars.",
        "Direct: 'Why do astronauts need spacesuits?' Mai wondered. -> Mai wondered why astronauts needed spacesuits."
      ]
    },
    pronunciation: {
      sounds: "Listing Intonation (Ngữ điệu khi đọc danh sách liệt kê)",
      guide: "Khi đọc danh sách liệt kê các danh từ/mục: Giọng NÂNG LÊN NHẸ (Rising tone ↗) ở tất cả các mục phía trước, và HẠ GIỌNG XUỐNG DỨT KHOÁT (Falling tone ↘) ở mục cuối cùng để báo hiệu danh sách đã kết thúc.",
      pairs: [
        { wordA: "Our solar system includes Mercury ↗, Venus ↗, Earth ↗, and Mars ↘.", wordB: "(Lên giọng ở 3 hành tinh đầu, xuống giọng ở Mars)" },
        { wordA: "Astronauts need oxygen ↗, water ↗, food ↗, and spacesuits ↘.", wordB: "(Lên giọng ở oxygen, water, food; xuống giọng ở spacesuits)" }
      ]
    },
    communication: {
      function: "Expressing doubt and uncertainty (Diễn đạt sự nghi ngờ và chưa chắc chắn)",
      dialogue: [
        { speaker: "James", text: "Do you believe UFOs have actually visited Earth?" },
        { speaker: "Mi", text: "I'm not sure about that. I doubt that aliens have landed in secret." },
        { speaker: "James", text: "Is it possible that microbial life exists in the subterranean ocean of Europa?" },
        { speaker: "Mi", text: "Yes, scientists believe it is quite possible because Europa has warm liquid water." }
      ]
    },
    skills: {
      reading: "Đọc văn bản khoa học về 4 điều kiện cốt lõi để một hành tinh hỗ trợ sự sống: Nước ở dạng lỏng, nhiệt độ thích hợp không quá nóng hay quá lạnh (Goldilocks zone), khí quyển giàu oxy bảo vệ khỏi bức xạ và kích thước/trọng lực đủ lớn để giữ khí quyển.",
      writing: "Viết đoạn văn tưởng tượng (80–100 từ) miêu tả một sinh vật ngoài hành tinh (Alien creature): Tên sinh vật và hành tinh cư trú → Ngoại hình đặc điểm thích nghi (màu da, số mắt, tay chân, chiều cao) → Thức ăn và cách di chuyển → Tính cách (thân thiện hay hiếu chiến).",
      speaking: "Thuyết trình về hành tinh Sao Hỏa (Mars): Kích thước, bề mặt cát đỏ, các miệng hố và triển vọng con người định cư.",
      project: "Planet Profile Poster: Chọn 1 trong 8 hành tinh trong Hệ Mặt Trời; nghiên cứu vị trí, khoảng cách đến Mặt Trời, số lượng vệ tinh, nhiệt độ bề mặt và làm poster khoa học."
    },
    quiz: [
      {
        q: "Report this question: 'Where do astronauts sleep?' she asked.",
        options: [
          "A. She asked where did astronauts sleep.",
          "B. She asked where astronauts slept.",
          "C. She asked where astronauts sleep?",
          "D. She asked if astronauts slept where."
        ],
        a: 1,
        exp: "Câu hỏi Wh- tường thuật: Wh-word + S + V(lùi thì) -> 'where astronauts slept', bỏ trợ động từ 'do', không còn dấu hỏi."
      },
      {
        q: "Report this Yes/No question: 'Can humans breathe on Mars?' the boy asked.",
        options: [
          "A. The boy asked whether humans could breathe on Mars.",
          "B. The boy asked could humans breathe on Mars.",
          "C. The boy asked if can humans breathe on Mars.",
          "D. The boy wondered humans can breathe on Mars."
        ],
        a: 0,
        exp: "Câu hỏi Yes/No tường thuật dùng 'if/whether' + S + V(lùi thì: could breathe)."
      },
      {
        q: "Which intonation pattern is correct when reading: 'Mercury, Venus, Earth, and Mars'?",
        options: [
          "A. Down, down, down, down",
          "B. Up, up, up, and down at the end",
          "C. Up, up, up, and up",
          "D. Down, up, down, up"
        ],
        a: 1,
        exp: "Quy tắc ngữ điệu liệt kê: Giọng đi lên nhẹ ở các mục phía trước và đi xuống dứt khoát ở mục cuối cùng."
      }
    ]
  },

  // REVIEW 4 (UNITS 10 - 12)
  {
    id: "review-4",
    unit: "REVIEW 4",
    theme: "VISIONS OF THE FUTURE",
    title: "Review 4 (Units 10 - 11 - 12)",
    focus: "Ôn tập tổng hợp Theme 4: Giao tiếp tương lai, Khoa học công nghệ, Vũ trụ; Giới từ & Đại từ sở hữu, Câu tường thuật (Statements & Questions); Trọng âm -ese/-ee, Trọng âm câu & Ngữ điệu liệt kê",
    color: "purple",
    vocab: [
      { word: "technological advancement", type: "phrase", ipa: "/ˌteknəˈlɒdʒɪkl ədˈvɑːnsmənt/", meaning: "bước tiến công nghệ đột phá", ex: "Technological advancements in AI and space rockets are transforming human civilization." },
      { word: "interplanetary exploration", type: "phrase", ipa: "/ˌɪntəˈplænɪtri ˌekspləˈreɪʃn/", meaning: "thám hiểm liên hành tinh", ex: "Interplanetary exploration may discover signs of primitive microbial life." },
      { word: "digital connectivity", type: "phrase", ipa: "/ˈdɪdʒɪtl kəˌnekˈtɪvəti/", meaning: "kết nối kĩ thuật số toàn cầu", ex: "High-speed digital connectivity brings real-time communication to every corner of Earth." }
    ],
    grammar: {
      topic: "Grammar Consolidation: Reported Speech Mastery & Possessives",
      rules: [
        "1. Possessive pronouns: mine, yours, his, hers, ours, theirs (replaces possessive adj + noun).",
        "2. Reported statements: S + said (that) / told O (that) + S + V(backshifted).",
        "3. Reported questions: S + asked (+ O) + Wh-word / if / whether + S + V(backshifted)."
      ],
      examples: [
        "Linh told me that she was researching the atmosphere of Venus.",
        "The professor asked if we had completed the robotics project.",
        "Our telescope is modern, but theirs has a larger aperture."
      ]
    },
    pronunciation: {
      sounds: "Phonetic Revision: -ese / -ee stress, Sentence Stress, Listing Intonation",
      guide: "Luyện phát âm câu tổng hợp chứa từ đuôi -ese, -ee, trọng âm câu nhấn từ nội dung và ngữ điệu liệt kê các thiên thể.",
      pairs: [
        { wordA: "Chinese /ˌtʃaɪˈniːz/", wordB: "employee /ɪmˈplɔɪiː/" },
        { wordA: "I 'WANT to 'STUDY as'TRONomy.", wordB: "(Sentence stress)" },
        { wordA: "Mars ↗, Jupiter ↗, and Saturn ↘.", wordB: "(Listing intonation)" }
      ]
    },
    communication: {
      function: "Polite interruptions, celebrating good news, expressing uncertainty",
      dialogue: [
        { speaker: "Tom", text: "Sorry for interrupting, but our school team just passed the NASA space competition!" },
        { speaker: "Lan", text: "That's fantastic news! Congratulations to all of you!" }
      ]
    },
    skills: {
      reading: "Đọc hiểu về sứ mệnh tìm kiếm dấu vết sự sống trên Sao Hỏa của các robot thám hiểm Perseverance và Curiosity.",
      writing: "Viết đoạn văn ngắn (80-100 từ) về thiết bị công nghệ mà em dự đoán sẽ thay đổi cuộc sống học sinh nhiều nhất vào năm 2050.",
      speaking: "Thuyết trình về Hệ Mặt Trời và lí do vì sao Trái Đất là ngôi nhà duy nhất con người có thể sinh sống vào thời điểm hiện tại."
    },
    quiz: [
      {
        q: "Report: 'What will future robots look like?' she asked.",
        options: [
          "A. She asked what future robots will look like.",
          "B. She asked what future robots would look like.",
          "C. She asked what would future robots look like.",
          "D. She wondered what did future robots look like."
        ],
        a: 1,
        exp: "Wh-question reported: 'what future robots would look like' (đổi will -> would, trật tự câu kể, không đảo ngữ)."
      },
      {
        q: "Choose the word with stress on the last syllable:",
        options: ["A. planet", "B. creature", "C. Japanese", "D. telescope"],
        a: 2,
        exp: "Từ có đuôi '-ese' nhận trọng âm ở âm tiết cuối: /ˌdʒæpəˈniːz/."
      }
    ]
  }
];

// FAST SUMMARY MATRIX (BẢNG HỆ THỐNG NHANH 12 UNIT)
const fastSummaryMatrix = [
  { unit: "Unit 1. Leisure Time", vocab: "Sở thích, hoạt động rảnh", grammar: "Động từ thích/ghét + V-ing / to-inf", pronunciation: "/ʊ/ – /uː/", communication: "Mời và nhận lời", project: "Email về hoạt động; Khảo sát sở thích" },
  { unit: "Unit 2. Life in the Countryside", vocab: "Nông thôn, cảnh quan, sinh hoạt", grammar: "So sánh hơn của trạng từ (-er, more, better)", pronunciation: "/ə/ – /ɪ/", communication: "Khen và đáp lời khen", project: "Đoạn thích/không thích nông thôn; Poster làng" },
  { unit: "Unit 3. Teenagers", vocab: "Câu lạc bộ, mạng xã hội, áp lực", grammar: "Câu đơn & Câu ghép (FANBOYS, however, therefore)", pronunciation: "/ʊə/ – /ɔɪ/", communication: "Yêu cầu lịch sự", project: "Đoạn về căng thẳng; Đề xuất câu lạc bộ" },
  { unit: "Unit 4. Ethnic Groups of Viet Nam", vocab: "Dân tộc, nhà sàn, thổ cẩm, văn hóa", grammar: "Yes/No, Wh-questions; Countable/Uncountable & Quantifiers", pronunciation: "/k/ – /g/", communication: "Nêu ý kiến", project: "Đoạn việc nhà; Poster dân tộc thiểu số" },
  { unit: "Unit 5. Our Customs and Traditions", vocab: "Phong tục, lễ hội, thờ cúng tổ tiên", grammar: "Mạo từ Zero (Ø article) vs. A/An/The", pronunciation: "/n/ – /θ/", communication: "Đưa ra lời khuyên", project: "Email khuyên dự lễ hội; Tìm hiểu phong tục" },
  { unit: "Unit 6. Lifestyles", vocab: "Lối sống du mục, truyền thống, học online", grammar: "Tương lai đơn; Điều kiện loại 1 & Unless", pronunciation: "/br/ – /pr/", communication: "Diễn đạt sự chắc chắn", project: "Đoạn ưu/nhược học online; Poster lối sống thế giới" },
  { unit: "Unit 7. Environmental Protection", vocab: "Môi trường, sinh cảnh, rác thải, ô nhiễm", grammar: "Câu phức với mệnh đề trạng ngữ thời gian (before, after, when)", pronunciation: "/bl/ – /kl/", communication: "Hỏi xin giải thích/làm rõ", project: "Thông báo (Notice); Poster giải pháp ô nhiễm" },
  { unit: "Unit 8. Shopping", vocab: "Địa điểm mua sắm, giá cả, khuyến mãi", grammar: "Trạng từ tần suất; Hiện tại đơn chỉ lịch trình tương lai", pronunciation: "/sp/ – /st/", communication: "Khiếu nại lịch sự", project: "Đoạn ưu/nhược kiểu mua sắm; Thiết kế nơi mua sắm" },
  { unit: "Unit 9. Natural Disasters", vocab: "Thiên tai, động đất, núi lửa, cứu hộ", grammar: "Quá khứ tiếp diễn (was/were + V-ing) & Phối hợp thì", pronunciation: "Trọng âm đuôi -al & -ous", communication: "Chia sẻ sự cảm thông", project: "Chỉ dẫn an toàn 3 giai đoạn; Poster thiên tai" },
  { unit: "Unit 10. Communication in the Future", vocab: "Công nghệ giao tiếp, hologram, thần giao cách cảm", grammar: "Giới từ nơi chốn/thời gian; Đại từ sở hữu (mine, yours)", pronunciation: "Trọng âm đuôi -ese & -ee", communication: "Ngắt lời lịch sự", project: "Đoạn mô tả giao tiếp; Ý tưởng năm 2050" },
  { unit: "Unit 11. Science and Technology", vocab: "Sinh trắc học, AI, kính 3D, robot giáo viên", grammar: "Câu tường thuật dạng câu kể (Reported statements)", pronunciation: "Trọng âm câu (Sentence stress)", communication: "Bày tỏ/đáp lại tin mừng", project: "Ý kiến về robot giáo viên; Sáng chế thiết bị học tập" },
  { unit: "Unit 12. Life on Other Planets", vocab: "Không gian, 8 hành tinh, sinh vật ngoài Trái Đất", grammar: "Câu hỏi tường thuật (Reported questions: Wh- & Yes/No)", pronunciation: "Ngữ điệu liệt kê danh sách", communication: "Thể hiện sự chưa chắc chắn", project: "Mô tả sinh vật ngoài hành tinh; Poster Hệ Mặt Trời" }
];

// PHONICS MATRIX (BẢNG HỆ THỐNG PHÁT ÂM CẢ NĂM)
const phonicsMatrix = [
  { unit: "Unit 1", focus: "/ʊ/ vs. /uː/", rule: "/ʊ/ ngắn (book, cook, look) vs. /uː/ dài chu môi (school, food, boot, cool)" },
  { unit: "Unit 2", focus: "/ə/ vs. /ɪ/", rule: "/ə/ âm schwa không nhấn (canal, village) vs. /ɪ/ âm ngắn vòm miệng (harvest, cottage, trip)" },
  { unit: "Unit 3", focus: "/ʊə/ vs. /ɔɪ/", rule: "/ʊə/ nguyên âm đôi lướt (tour, sure, pure) vs. /ɔɪ/ nguyên âm đôi (boy, coin, enjoy, voice)" },
  { unit: "Unit 4", focus: "/k/ vs. /g/", rule: "/k/ vô thanh bật hơi (costume, folk, keep) vs. /g/ hữu thanh rung thanh quản (gong, group, agriculture)" },
  { unit: "Unit 5", focus: "/n/ vs. /θ/", rule: "/n/ âm mũi hữu thanh (name, night) vs. /θ/ âm răng vô thanh thổi hơi (thank, think, theme, month)" },
  { unit: "Unit 6", focus: "/br/ vs. /pr/", rule: "/br/ hữu thanh (bread, brave, brown) vs. /pr/ vô thanh bật hơi (practice, proud, protect, present)" },
  { unit: "Unit 7", focus: "/bl/ vs. /kl/", rule: "/bl/ hữu thanh (black, bloom, blanket) vs. /kl/ vô thanh (clean, climate, clever, plastic)" },
  { unit: "Unit 8", focus: "/sp/ vs. /st/", rule: "/sp/ âm gió + môi (spend, spot, speciality) vs. /st/ âm gió + răng (store, stand, station, storm)" },
  { unit: "Unit 9", focus: "Trọng âm đuôi -al & -ous", rule: "Thường nhận trọng âm ở âm tiết thứ 3 từ cuối lên: 'natural /ˈnætʃrəl/', 'dangerous /ˈdeɪndʒərəs/'" },
  { unit: "Unit 10", focus: "Trọng âm đuôi -ese & -ee", rule: "Luôn nhấn trọng âm chính ở chính âm tiết cuối: 'Vietnamese /ˌvjetnəˈmiːz/', 'trainee /ˌtreɪˈniː/'" },
  { unit: "Unit 11", focus: "Trọng âm câu (Sentence Stress)", rule: "Nhấn mạnh các Content Words (Danh từ, động từ chính, tính từ, trạng từ); đọc lướt Function Words" },
  { unit: "Unit 12", focus: "Ngữ điệu liệt kê (Listing Intonation)", rule: "Lên giọng nhẹ (↗) ở các mục phía trước và hạ giọng dứt khoát (↘) ở mục cuối cùng trong danh sách" }
];

module.exports = { theme3And4Data, fastSummaryMatrix, phonicsMatrix };
