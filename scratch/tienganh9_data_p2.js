// tienganh9_data_p2.js
// Data for Tiếng Anh 9 (Global Success) - Theme 3: Our World & Theme 4: Visions of the Future
// Units 7 to 12 + Reviews 3 & 4 + Fast Summary Matrix + Phonics Matrix + 12 Communication Models + Skills Framework

const theme3And4Data = [
  // ==========================================
  // THEME 3: OUR WORLD
  // ==========================================

  // UNIT 7: NATURAL WONDERS OF THE WORLD
  {
    id: "unit-7",
    unit: "UNIT 7",
    theme: "OUR WORLD",
    title: "Natural Wonders of the World",
    focus: "Kì quan thiên nhiên, địa hình, hang động, vách đá & bảo tồn; Câu tường thuật cho câu hỏi Yes/No; Cụm phụ âm /sl/ và /sn/",
    color: "emerald",
    vocab: [
      { word: "natural wonder", type: "noun", ipa: "/ˈnætʃrəl ˈwʌndə/", meaning: "kì quan thiên nhiên", ex: "Ha Long Bay is recognized worldwide as a mesmerizing natural wonder." },
      { word: "limestone karst", type: "noun", ipa: "/ˈlaɪmstəʊn kɑːst/", meaning: "dãy núi đá vôi nhiệt đới", ex: "Phong Nha - Ke Bang features magnificent limestone karsts and subterranean rivers." },
      { word: "stalactite", type: "noun", ipa: "/ˈstæləktaɪt/", meaning: "thạch nhũ (từ trần hang rủ xuống)", ex: "Glistening stalactites hang down like natural chandeliers inside Son Doong Cave." },
      { word: "stalagmite", type: "noun", ipa: "/ˈstæləɡmaɪt/", meaning: "măng đá (mọc từ sàn hang lên)", ex: "It took millions of years for these towering stalagmites to form." },
      { word: "breathtaking", type: "adjective", ipa: "/ˈbreθteɪkɪŋ/", meaning: "đẹp ngoạn mục, nghẹt thở", ex: "The panoramic view of the cascading waterfall was truly breathtaking." },
      { word: "canyon", type: "noun", ipa: "/ˈkænjən/", meaning: "hẻm núi sâu hiểm trở", ex: "The Grand Canyon in the USA attracts millions of adventurers each year." },
      { word: "ecosystem", type: "noun", ipa: "/ˈiːkəʊsɪstəm/", meaning: "hệ sinh thái tự nhiên", ex: "Cuc Phuong National Park boasts a remarkably diverse tropical ecosystem." },
      { word: "magnificent", type: "adjective", ipa: "/mæɡˈnɪfɪsnt/", meaning: "tráng lệ, nguy nga", ex: "Mount Everest is the most magnificent mountain on Earth." },
      { word: "biodiversity", type: "noun", ipa: "/ˌbaɪəʊdaɪˈvɜːsəti/", meaning: "sự đa dạng sinh học phong phú", ex: "We must safeguard the marine biodiversity of our coral reefs." },
      { word: "conservation", type: "noun", ipa: "/ˌkɒnsəˈveɪʃn/", meaning: "công tác bảo tồn thiên nhiên", ex: "Wildlife conservation programs are vital to save endangered rhinos." }
    ],
    pronunciation: {
      focus: "Cụm phụ âm đầu /sl/ và /sn/",
      guide: "• /sl/: phát âm /s/ xát nhẹ rồi chuyển mượt mà sang /l/ (slope, slide, slow, sleep, slippery).\n• /sn/: phát âm /s/ xát nhẹ rồi chuyển ngay sang âm mũi /n/ (snow, snack, snake, snorkel, snap).",
      examples: [
        { word: "slope", ipa: "/sləʊp/", note: "chứa cụm /sl/" },
        { word: "snow", ipa: "/snəʊ/", note: "chứa cụm /sn/" },
        { word: "slippery", ipa: "/ˈslɪpəri/", note: "chứa cụm /sl/" }
      ]
    },
    grammar: {
      topic: "Reported Speech for Yes/No Questions (Câu tường thuật cho câu hỏi Yes/No)",
      rules: [
        "1. Cấu trúc cơ bản: S + asked + (O) + if / whether + S + V (lùi thì).",
        "2. Đổi trật tự câu: Biến đổi từ trật tự câu hỏi (trợ động từ đảo trước chủ ngữ) thành trật tự câu trần thuật (Chủ ngữ + Động từ). BỎ trợ động từ Do / Does / Did; KHÔNG dùng dấu hỏi chấm (?) ở cuối câu.",
        "3. Quy tắc lùi thì: Hiện tại đơn -> Quá khứ đơn; Hiện tại tiếp diễn -> Quá khứ tiếp diễn; Hiện tại hoàn thành -> Quá khứ hoàn thành; Can -> Could; Will -> Would; Must -> Had to.",
        "4. Đổi đại từ và trạng ngữ chỉ thời gian / nơi chốn: this -> that; here -> there; now -> then; today -> that day; tomorrow -> the next/following day; yesterday -> the day before/the previous day."
      ],
      examples: [
        "Direct: 'Are you going to explore Son Doong Cave tomorrow?' he asked me.",
        "Reported: He asked me if I was going to explore Son Doong Cave the next day.",
        "Direct: 'Have you seen the northern lights before?' Mai asked Peter.",
        "Reported: Mai asked Peter whether he had seen the northern lights before."
      ]
    },
    communication: {
      function: "Xin phép và đáp lại (Asking for permission and responding)",
      phrases: [
        { en: "May I take photographs inside the limestone cave?", vi: "Cháu có thể chụp ảnh bên trong hang đá vôi không ạ?", type: "asking" },
        { en: "Do you mind if I open the cabin window to see the mountain slope?", vi: "Bạn có phiền nếu mình mở cửa sổ khoang tàu để ngắm sườn núi không?", type: "asking" },
        { en: "Yes, of course you can. Go ahead.", vi: "Tất nhiên rồi bạn cứ tự nhiên.", type: "accepting" },
        { en: "I'm afraid you can't. Flash photography is forbidden here.", vi: "Rất tiếc là không được rồi. Ở đây cấm dùng đèn flash.", type: "declining" }
      ]
    },
    skills: {
      reading: "Đọc bài viết về kì quan Vịnh Hạ Long và Quần thể hang động Phong Nha; nhận diện từ đồng nghĩa, từ quy chiếu.",
      listening: "Nghe hướng dẫn viên phổ biến các quy định an toàn và bảo vệ môi trường khi thám hiểm hang Sơn Đoòng.",
      speaking: "Thuyết trình 2 phút miêu tả một kì quan thiên nhiên ở Việt Nam hoặc trên thế giới mà em khát khao được đặt chân tới.",
      writing: "Viết đoạn văn (100–120 từ) giới thiệu một thắng cảnh thiên nhiên tại quê hương em và nêu cách du khách nên giữ gìn vẻ đẹp đó."
    },
    project: {
      title: "Wonders of the Earth Exhibition (Triển lãm Kì quan Trái Đất)",
      task: "Mỗi nhóm chọn một kì quan (Grand Canyon, Rạn san hô Great Barrier, Vịnh Hạ Long, Thác Iguazu); làm poster infographic gồm vị trí, nguồn gốc, nét độc đáo và khẩu hiệu bảo vệ kì quan."
    },
    quiz: [
      {
        q: "Chuyển sang câu gián tiếp: 'Are you interested in geology?' the guide asked us.",
        options: [
          "A. The guide asked us if we are interested in geology.",
          "B. The guide asked us if we were interested in geology.",
          "C. The guide asked us whether were we interested in geology.",
          "D. The guide asked us if did we interest in geology."
        ],
        answer: 1,
        explain: "Quy tắc: asked + if/whether + S + V lùi thì (are -> were), giữ trật tự câu trần thuật."
      },
      {
        q: "Thạch nhũ rủ từ trần hang động xuống được gọi là gì trong tiếng Anh?",
        options: ["A. stalagmite", "B. stalactite", "C. canyon", "D. karst"],
        answer: 1,
        explain: "'stalactite' là thạch nhũ rủ từ trên trần hang xuống (mẹo nhớ: 'c' trong stalactite = ceiling - trần nhà)."
      },
      {
        q: "Từ nào bắt đầu bằng cụm phụ âm /sn/?",
        options: ["A. slope", "B. slide", "C. snow", "D. sleep"],
        answer: 2,
        explain: "'snow' /snəʊ/ bắt đầu bằng /sn/. Các từ còn lại bắt đầu bằng /sl/."
      },
      {
        q: "Khi bạn muốn xin phép chụp ảnh ở bảo tàng, câu nào lịch sự nhất?",
        options: [
          "A. May I take a photo here, please?",
          "B. I will take a photo now.",
          "C. Give me a photo!",
          "D. Why can't I take photos?"
        ],
        answer: 0,
        explain: "'May I take a photo here, please?' là lời xin phép trang trọng, lịch sự nhất."
      }
    ]
  },

  // UNIT 8: TOURISM
  {
    id: "unit-8",
    unit: "UNIT 8",
    theme: "OUR WORLD",
    title: "Tourism",
    focus: "Du lịch, tour trọn gói, chi phí & trải nghiệm; Đại từ quan hệ (Relative Pronouns: who, which, that, whose, where); Trọng âm đuôi -ic và -ious",
    color: "emerald",
    vocab: [
      { word: "package tour", type: "noun", ipa: "/ˈpækɪdʒ tʊə/", meaning: "chuyến du lịch trọn gói (ăn, ở, đi lại)", ex: "Booking a package tour helps tourists save both time and money." },
      { word: "itinerary", type: "noun", ipa: "/aɪˈtɪnərəri/", meaning: "lịch trình chi tiết của chuyến đi", ex: "The tour guide handed each traveler a well-planned itinerary for the 4-day trip." },
      { word: "destination", type: "noun", ipa: "/ˌdestɪˈneɪʃn/", meaning: "điểm đến du lịch", ex: "Phu Quoc Island is a tropical paradise and a top holiday destination in Asia." },
      { word: "accommodation", type: "noun", ipa: "/əˌkɒməˈdeɪʃn/", meaning: "chỗ ở, nơi lưu trú (khách sạn, resort)", ex: "The tour price includes five-star accommodation with daily breakfast buffet." },
      { word: "souvenir", type: "noun", ipa: "/ˌsuːvəˈnɪə/", meaning: "quà lưu niệm", ex: "She bought a handcrafted silk scarf as a charming souvenir from Hoi An." },
      { word: "ecotourism", type: "noun", ipa: "/ˈiːkəʊtʊərɪzəm/", meaning: "du lịch sinh thái tôn trọng tự nhiên", ex: "Ecotourism educates travelers on forest conservation and community livelihood." },
      { word: "sightseeing", type: "noun", ipa: "/ˈsaɪtsiːɪŋ/", meaning: "hoạt động ngắm cảnh, tham quan", ex: "We spent the whole afternoon sightseeing around the imperial citadel of Hue." },
      { word: "peak season", type: "noun", ipa: "/piːk ˈsiːzn/", meaning: "mùa cao điểm du lịch", ex: "Hotel room rates skyrocket during the summer peak season." },
      { word: "travel agency", type: "noun", ipa: "/ˈtrævl ˈeɪdʒənsi/", meaning: "đại lí lữ hành, công ty du lịch", ex: "The local travel agency arranged all the visa and flight tickets for our tour." },
      { word: "affordable", type: "adjective", ipa: "/əˈfɔːdəbl/", meaning: "vừa túi tiền, giá cả phải chăng", ex: "Homestays provide comfortable and affordable lodging for backpackers." }
    ],
    pronunciation: {
      focus: "Quy tắc trọng âm từ có hậu tố -ic và -ious",
      guide: "• Hậu tố -ic: Trọng âm chính rơi vào âm tiết NGAY TRƯỚC nó (ec'centric, dra'matic, his'toric, ro'mantic, spe'cific).\n• Hậu tố -ious: Trọng âm chính cũng rơi vào âm tiết NGAY TRƯỚC nó (de'licious, 'anxious, mys'terious, am'bitious, re'ligious).",
      examples: [
        { word: "historic", ipa: "/hɪˈstɒrɪk/", note: "trọng âm rơi vào âm tiết thứ 2 (trước -ic)" },
        { word: "delicious", ipa: "/dɪˈlɪʃəs/", note: "trọng âm rơi vào âm tiết thứ 2 (trước -ious)" },
        { word: "romantic", ipa: "/rəʊˈmæntɪk/", note: "trọng âm rơi vào âm tiết thứ 2 (trước -ic)" }
      ]
    },
    grammar: {
      topic: "Relative Pronouns (Đại từ quan hệ: who, which, that, whose, where)",
      rules: [
        "1. who: thay thế cho danh từ chỉ người (làm chủ ngữ hoặc tân ngữ): The guide who led our tour was very humorous.",
        "2. which: thay thế cho danh từ chỉ vật hoặc sự việc: We stayed at a resort which overlooked the emerald sea.",
        "3. that: có thể thay thế cho cả 'who' và 'which' trong mệnh đề quan hệ xác định (KHÔNG dùng sau dấu phẩy và giới từ).",
        "4. whose: chỉ quan hệ sở hữu cho cả người và vật (whose + Noun): That is the traveler whose passport was lost.",
        "5. where: thay thế cho trạng từ chỉ nơi chốn (= in / at which): Da Nang is the city where international firework festivals are held."
      ],
      examples: [
        "This is the tourist guide who showed us the hidden corners of the old quarter.",
        "I need to book a hotel room which has high-speed internet and air-conditioning.",
        "The lady whose luggage was misplaced received an apology from the airline.",
        "We visited the ancient temple where kings used to pray for national peace."
      ]
    },
    communication: {
      function: "Diễn đạt sự bắt buộc / nghĩa vụ (Expressing obligation and responding)",
      phrases: [
        { en: "Tourists must wear life jackets when boarding the cruise boat.", vi: "Du khách bắt buộc phải mặc áo phao khi bước lên thuyền du lịch.", type: "obligation" },
        { en: "You have to show your valid passport at the airport check-in desk.", vi: "Bạn phải xuất trình hộ chiếu còn hạn tại quầy làm thủ tục sân bay.", type: "obligation" },
        { en: "Understood. I will put it on right away.", vi: "Tôi hiểu rồi. Tôi sẽ mặc áo phao vào ngay.", type: "responding" },
        { en: "Certainly, here is my passport.", vi: "Dạ vâng, hộ chiếu của tôi đây ạ.", type: "responding" }
      ]
    },
    skills: {
      reading: "Đọc cẩm nang du lịch 'Eco-Friendly Travel': phân biệt tour trọn gói truyền thống và tour du lịch bền vững; tìm thông tin chi phí.",
      listening: "Nghe đoạn thông báo tại sân bay quốc tế về thay đổi cổng lên máy bay và quy định hành lí xách tay.",
      speaking: "Thảo luận nhóm xây dựng lịch trình tour du lịch 3 ngày 2 đêm tại một tỉnh thành nổi tiếng của Việt Nam.",
      writing: "Viết đoạn văn quảng bá (100–120 từ) giới thiệu một tour du lịch hấp dẫn gồm điểm tham quan, ẩm thực, phương tiện và mức giá hợp lí."
    },
    project: {
      title: "Plan Your Dream 2-Day Getaway (Kế hoạch chuyến đi mơ ước)",
      task: "Lên kế hoạch chi tiết cho chuyến dã ngoại 2 ngày cuối tuần của lớp: phương tiện di chuyển, thời gian biểu, dự toán kinh phí cho mỗi học sinh và các hoạt động teambuilding."
    },
    quiz: [
      {
        q: "Chọn đại từ quan hệ thích hợp: 'The tourist ______ camera was stolen reported it to the local police.'",
        options: ["A. who", "B. whose", "C. which", "D. that"],
        answer: 1,
        explain: "'whose + Noun' (whose camera) dùng để chỉ sở hữu (người khách du lịch có chiếc máy ảnh bị mất cắp)."
      },
      {
        q: "Từ nào sau đây có trọng âm rơi vào âm tiết thứ 2?",
        options: ["A. delicious", "B. historic", "C. romantic", "D. Tất cả các từ trên"],
        answer: 3,
        explain: "Cả 3 từ đều tuân theo quy tắc: đuôi -ious và -ic có trọng âm rơi vào âm tiết ngay trước nó (de'licious, his'toric, ro'mantic)."
      },
      {
        q: "Lịch trình chi tiết ghi rõ thời gian và địa điểm của chuyến tham quan gọi là gì?",
        options: ["A. souvenir", "B. itinerary", "C. accommodation", "D. ecosystem"],
        answer: 1,
        explain: "'itinerary' là lịch trình chi tiết của một chuyến đi du lịch."
      },
      {
        q: "Khi nhân viên an ninh yêu cầu: 'You must fasten your seat belt', câu đáp lại phù hợp là:",
        options: [
          "A. Yes, I'm doing it right now.",
          "B. You are welcome.",
          "C. I don't like food.",
          "D. Good idea for you."
        ],
        answer: 0,
        explain: "'Yes, I'm doing it right now' thể hiện việc tiếp nhận và thực hiện nghĩa vụ bắt buộc ngay lập tức."
      }
    ]
  },

  // UNIT 9: WORLD ENGLISHES
  {
    id: "unit-9",
    unit: "UNIT 9",
    theme: "OUR WORLD",
    title: "World Englishes",
    focus: "Biến thể tiếng Anh trên toàn cầu, ngôn ngữ chính thức & từ mượn; Mệnh đề quan hệ xác định (Defining Relative Clauses); Trọng âm đuôi -ion và -ity",
    color: "emerald",
    vocab: [
      { word: "first language", type: "noun", ipa: "/ˌfɜːst ˈlæŋɡwɪdʒ/", meaning: "tiếng mẹ đẻ, ngôn ngữ thứ nhất", ex: "Vietnamese is the first language of over 85% of our country's population." },
      { word: "second language", type: "noun", ipa: "/ˌsekənd ˈlæŋɡwɪdʒ/", meaning: "ngôn ngữ thứ hai (dùng trong hành chính/giáo dục)", ex: "In Singapore and India, English serves as a vital second language." },
      { word: "official language", type: "noun", ipa: "/əˌfɪʃl ˈlæŋɡwɪdʒ/", meaning: "ngôn ngữ chính thức của quốc gia", ex: "English is an official language in more than 60 sovereign countries." },
      { word: "bilingual", type: "adjective", ipa: "/ˌbaɪˈlɪŋɡwəl/", meaning: "song ngữ, nói thành thạo hai thứ tiếng", ex: "Growing up in a multicultural family made her naturally bilingual." },
      { word: "dialect", type: "noun", ipa: "/ˈdaɪəlekt/", meaning: "tiếng địa phương, phương ngữ", ex: "British English and American English have different dialects and accents." },
      { word: "borrowed word", type: "noun", ipa: "/ˌbɒrəʊd ˈwɜːd/", meaning: "từ vay mượn từ ngôn ngữ khác", ex: "Words like 'karaoke' from Japanese and 'ballet' from French are borrowed words in English." },
      { word: "vocabulary strategy", type: "noun", ipa: "/vəˈkæbjələri ˈstrætədʒi/", meaning: "chiến lược trau dồi từ vựng hiệu quả", ex: "Using flashcards and mindmaps is an excellent vocabulary strategy for learners." },
      { word: "accent", type: "noun", ipa: "/ˈæksent/", meaning: "chất giọng, ngữ âm đặc trưng vùng miền", ex: "I love listening to the musical Scottish accent of our exchange teacher." },
      { word: "global lingua franca", type: "noun", ipa: "/ˈɡləʊbl ˌlɪŋɡwə ˈfræŋkə/", meaning: "ngôn ngữ chung của toàn cầu", ex: "English has firmly established itself as the global lingua franca in commerce and science." },
      { word: "fluent", type: "adjective", ipa: "/ˈfluːənt/", meaning: "trôi chảy, lưu loát", ex: "Consistent daily practice is the only path to becoming fluent in English." }
    ],
    pronunciation: {
      focus: "Quy tắc trọng âm từ có hậu tố -ion và -ity",
      guide: "• Hậu tố -ion (tion, sion): Trọng âm chính rơi vào âm tiết NGAY TRƯỚC nó (sit'uation, na'tionality, de'cision, pol'lution, cele'bration).\n• Hậu tố -ity: Trọng âm chính cũng rơi vào âm tiết NGAY TRƯỚC nó (a'bility, com'munity, di'versity, pos'sibility, cre'ativity).",
      examples: [
        { word: "nationality", ipa: "/ˌnæʃəˈnæləti/", note: "trọng âm rơi vào 'na' trước đuôi -ity" },
        { word: "celebration", ipa: "/ˌselɪˈbreɪʃn/", note: "trọng âm rơi vào 'bra' trước đuôi -ion" },
        { word: "diversity", ipa: "/daɪˈvɜːsəti/", note: "trọng âm rơi vào 'ver' trước đuôi -ity" }
      ]
    },
    grammar: {
      topic: "Defining Relative Clauses (Mệnh đề quan hệ xác định)",
      rules: [
        "1. Chức năng: Cung cấp thông tin thiết yếu bắt buộc phải có để xác định rõ danh từ đứng trước. Nếu lược bỏ mệnh đề này, câu sẽ tối nghĩa hoặc không trọn vẹn.",
        "2. Không dùng dấu phẩy: Mệnh đề quan hệ xác định KHÔNG BAO GIỜ đặt giữa hai dấu phẩy.",
        "3. Lược bỏ đại từ quan hệ (Zero relative pronoun): Khi đại từ quan hệ (who, whom, which, that) đóng vai trò làm TÂN NGỮ trong mệnh đề, ta có thể lược bỏ đại từ đó.",
        "• Ví dụ: The English app (which/that) I downloaded yesterday is very useful. -> 'which/that' làm tân ngữ của 'downloaded' nên có thể bỏ.",
        "• LƯU Ý: Nếu đại từ làm CHỦ NGỮ thì TUYỆT ĐỐI KHÔNG ĐƯỢC lược bỏ (The teacher who taught us is from Canada -> Không thể bỏ 'who')."
      ],
      examples: [
        "The language app which my brother recommended is completely free.",
        "Students who practice speaking English daily achieve fluency much faster.",
        "The dictionary (that) she bought contains 50,000 idioms and phrasal verbs."
      ]
    },
    communication: {
      function: "Chúc may mắn và đáp lại (Saying good luck and responding)",
      phrases: [
        { en: "Good luck with your English presentation tomorrow! You'll do great.", vi: "Chúc bạn may mắn với bài thuyết trình tiếng Anh ngày mai nhé! Bạn sẽ làm tốt thôi.", type: "wishing" },
        { en: "I'll keep my fingers crossed for your speaking exam!", vi: "Tớ sẽ cầu chúc may mắn cho bài thi nói của cậu!", type: "wishing" },
        { en: "Thank you so much! I really need that encouragement.", vi: "Cảm ơn bạn rất nhiều! Mình thực sự cần lời động viên này.", type: "responding" },
        { en: "Thanks a lot. I'll do my best.", vi: "Cảm ơn nhé. Mình sẽ cố gắng hết sức.", type: "responding" }
      ]
    },
    skills: {
      reading: "Đọc về mô hình 'Ba vòng tròn ngôn ngữ của Kachru' (Vòng trong, Vòng ngoài, Vòng mở rộng) giải thích sự lan tỏa của tiếng Anh.",
      listening: "Nghe các chuyên gia ngôn ngữ học chia sẻ về các chiến lược ghi nhớ 10 từ vựng mới mỗi ngày bằng phương pháp ngữ cảnh.",
      speaking: "Thảo luận về các từ tiếng Anh mượn đã trở nên quen thuộc trong đời sống hàng ngày của người Việt (như cà phê, ban công, sơ mi, ghi bàn).",
      writing: "Viết đoạn văn (100–120 từ) đề xuất các phương pháp hiệu quả giúp nâng cao phản xạ nói tiếng Anh của học sinh lớp 9."
    },
    project: {
      title: "Our English Word Treasury (Kho tàng từ vựng)",
      task: "Biên soạn một cuốn sổ tay nhỏ 'Fun World Englishes': tập hợp 15 cặp từ khác nhau giữa Anh - Anh và Anh - Mỹ (ví dụ: flat - apartment, lift - elevator, autumn - fall, biscuit - cookie)."
    },
    quiz: [
      {
        q: "Trong câu nào sau đây đại từ quan hệ CÓ THỂ được lược bỏ?",
        options: [
          "A. The girl who won the first prize is my classmate.",
          "B. The vocabulary book which I borrowed from the library is very helpful.",
          "C. The doctor who treated my grandfather was very kind.",
          "D. This is the house which stands on the top of the hill."
        ],
        answer: 1,
        explain: "Trong câu B, 'which' làm tân ngữ của động từ 'borrowed', do đó có thể lược bỏ mà câu vẫn chuẩn ngữ pháp: 'The vocabulary book I borrowed...'."
      },
      {
        q: "Từ nào sau đây có trọng âm rơi vào âm tiết thứ 3?",
        options: ["A. celebration", "B. fluent", "C. dialect", "D. accent"],
        answer: 0,
        explain: "'celebration' /ˌselɪˈbreɪʃn/ có trọng âm rơi vào âm tiết thứ 3 ('bra') trước hậu tố -ion."
      },
      {
        q: "Một người có khả năng nói thành thạo hai thứ tiếng được gọi là:",
        options: ["A. monolingual", "B. bilingual", "C. dialectal", "D. official"],
        answer: 1,
        explain: "'bilingual' là tính từ chỉ người song ngữ, nói trôi chảy hai thứ tiếng."
      },
      {
        q: "Khi bạn mình sắp bước vào phòng thi vấn đáp, câu chúc nào tự nhiên và đúng nhất?",
        options: [
          "A. Have a safe flight!",
          "B. Good luck! Keep your fingers crossed!",
          "C. Happy New Year!",
          "D. Pardon me?"
        ],
        answer: 1,
        explain: "'Good luck!' là lời chúc may mắn chuẩn mực trước kì thi."
      }
    ]
  },

  // REVIEW 3 (UNITS 7–9)
  {
    id: "review-3",
    unit: "REVIEW 3",
    theme: "OUR WORLD",
    title: "Review 3 (Units 7 - 9)",
    focus: "Hệ thống hóa Theme 3: Natural Wonders, Tourism, World Englishes; Reported Yes/No questions, Relative pronouns & Defining relative clauses; Âm /sl/, /sn/, trọng âm đuôi -ic, -ious, -ion, -ity",
    color: "emerald",
    vocab: [
      { word: "globalization", type: "noun", ipa: "/ˌɡləʊbəlaɪˈzeɪʃn/", meaning: "quá trình toàn cầu hóa", ex: "Theme 3 broadens our horizons about global wonders, tourism, and languages." },
      { word: "cross-cultural", type: "adjective", ipa: "/ˌkrɒs ˈkʌltʃərəl/", meaning: "giao lưu liên văn hóa", ex: "Mastering English empowers teens to participate in cross-cultural dialogues." },
      { word: "sustainable tourism", type: "noun", ipa: "/səˈsteɪnəbl ˈtʊərɪzəm/", meaning: "du lịch bền vững bảo vệ thiên nhiên", ex: "Sustainable tourism creates green jobs while preserving natural habitats." },
      { word: "linguistic diversity", type: "noun", ipa: "/lɪŋˈɡwɪstɪk daɪˈvɜːsəti/", meaning: "sự đa dạng ngôn ngữ", ex: "Linguistic diversity is a cultural treasure of human civilization." }
    ],
    grammar: {
      topic: "Review 3 Grammar Synthesis: Structures 7–9",
      rules: [
        "1. Reported Yes/No questions: asked + if/whether + S + V (lùi thì, đổi thời gian/nơi chốn, bỏ trợ động từ do/does/did).",
        "2. Relative pronouns: who (người), which (vật), that (thay who/which trong mệnh đề xác định), whose (sở hữu), where (nơi chốn).",
        "3. Defining relative clauses: Cung cấp thông tin thiết yếu, không dùng dấu phẩy, có thể lược bỏ đại từ khi làm tân ngữ.",
        "4. Stress rules: Hậu tố -ic, -ious, -ion, -ity đều nhận trọng âm ở âm tiết ngay trước nó."
      ],
      examples: [
        "She asked me whether I had visited Phong Nha Cave before.",
        "The tourist guide who welcomed us at the airport was exceptionally courteous.",
        "The eco-tour (which) we took last summer taught us how to protect coral reefs."
      ]
    },
    communication: {
      function: "Tổng hợp giao tiếp Theme 3",
      phrases: [
        { en: "May I explore the canyon? — Yes, of course you can.", vi: "Xin phép và đáp lại (Unit 7)", type: "review" },
        { en: "You must follow the tour guide. — Understood, I will.", vi: "Diễn đạt nghĩa vụ và đáp lại (Unit 8)", type: "review" },
        { en: "Good luck with your exam! — Thank you so much!", vi: "Chúc may mắn và đáp lại (Unit 9)", type: "review" }
      ]
    },
    skills: {
      reading: "Đọc tổng hợp về xu hướng du lịch khám phá kì quan thế giới và vai trò kết nối của tiếng Anh toàn cầu.",
      listening: "Nghe bài thuyết trình của một nhà thám hiểm địa lí về các kì quan đang đứng trước nguy cơ biến đổi khí hậu.",
      speaking: "Thảo luận về tác động tích cực và tiêu cực của du lịch ồ ạt (mass tourism) đối với các kì quan tự nhiên.",
      writing: "Viết đoạn văn ngắn (120–150 từ) về tầm quan trọng của việc học tiếng Anh trong kỉ nguyên hội nhập quốc tế."
    },
    quiz: [
      {
        q: "Chuyển sang gián tiếp: 'Did you enjoy your trip to Ha Long Bay?' he asked me.",
        options: [
          "A. He asked me if I enjoyed my trip to Ha Long Bay.",
          "B. He asked me whether I had enjoyed my trip to Ha Long Bay.",
          "C. He asked me if did I enjoy my trip to Ha Long Bay.",
          "D. He asked me whether had I enjoyed my trip to Ha Long Bay."
        ],
        answer: 1,
        explain: "Thì Quá khứ đơn 'Did you enjoy' lùi thì thành Quá khứ hoàn thành 'had enjoyed' với trật tự khẳng định: 'whether I had enjoyed'."
      },
      {
        q: "Chọn câu có dấu phẩy đúng:",
        options: [
          "A. The resort which overlooks the lake is fully booked.",
          "B. The resort, which overlooks the lake, is fully booked.",
          "C. The resort that overlooks the lake, is fully booked.",
          "D. The resort where overlooks the lake is fully booked."
        ],
        answer: 0,
        explain: "Đây là mệnh đề quan hệ xác định (nêu rõ resort nào), không được dùng dấu phẩy."
      },
      {
        q: "Từ nào sau đây có trọng âm rơi vào âm tiết thứ 2?",
        options: ["A. community", "B. celebration", "C. nationality", "D. ecotourism"],
        answer: 0,
        explain: "'community' /kəˈmjuːnəti/ có trọng âm rơi vào âm tiết 2 ('mu') trước đuôi -ity."
      },
      {
        q: "Từ nào bắt đầu bằng cụm phụ âm /sl/?",
        options: ["A. snack", "B. snow", "C. slope", "D. snake"],
        answer: 2,
        explain: "'slope' /sləʊp/ bắt đầu bằng /sl/. Các từ còn lại bắt đầu bằng /sn/."
      }
    ]
  },

  // ==========================================
  // THEME 4: VISIONS OF THE FUTURE
  // ==========================================

  // UNIT 10: PLANET EARTH
  {
    id: "unit-10",
    unit: "UNIT 10",
    theme: "VISIONS OF THE FUTURE",
    title: "Planet Earth",
    focus: "Hành tinh Trái Đất, sinh cảnh (habitats), hệ động thực vật (flora and fauna), chuỗi thức ăn & bảo tồn; Mệnh đề quan hệ không xác định; Nhịp điệu câu",
    color: "indigo",
    vocab: [
      { word: "habitat", type: "noun", ipa: "/ˈhæbɪtæt/", meaning: "môi trường sống tự nhiên, sinh cảnh", ex: "Deforestation destroys the natural habitats of thousands of rare species." },
      { word: "flora and fauna", type: "noun phrase", ipa: "/ˌflɔːrə ənd ˈfɔːnə/", meaning: "hệ thực vật và hệ động vật", ex: "Tropical rainforests shelter the richest flora and fauna on the planet." },
      { word: "food chain", type: "noun", ipa: "/ˈfuːd tʃeɪn/", meaning: "chuỗi thức ăn trong hệ sinh thái", ex: "Every predator plays a critical role in maintaining the balance of the food chain." },
      { word: "endangered species", type: "noun", ipa: "/ɪnˌdeɪndʒəd ˈspiːʃiːz/", meaning: "loài sinh vật có nguy cơ tuyệt chủng", ex: "The Javan rhino is among the most critically endangered species in Southeast Asia." },
      { word: "poaching", type: "noun", ipa: "/ˈpəʊtʃɪŋ/", meaning: "hành vi săn bắt trộm động vật hoang dã", ex: "Strict laws and high fines are enforced to combat illegal poaching." },
      { word: "ecosystem balance", type: "noun", ipa: "/ˈiːkəʊsɪstəm ˈbæləns/", meaning: "sự cân bằng của hệ sinh thái", ex: "The extinction of top carnivores severely disrupts ecosystem balance." },
      { word: "carbon footprint", type: "noun", ipa: "/ˌkɑːbən ˈfʊtprɪnt/", meaning: "dấu chân carbon (lượng khí thải nhà kính cá nhân)", ex: "Riding bicycles and recycling help individuals reduce their carbon footprint." },
      { word: "renewable energy", type: "noun", ipa: "/rɪˌnjuːəbl ˈenədʒi/", meaning: "năng lượng tái tạo (gió, mặt trời, thủy triều)", ex: "Switching to renewable energy is the definitive solution to halt global warming." },
      { word: "extinction", type: "noun", ipa: "/ɪkˈstɪŋkʃn/", meaning: "sự tuyệt chủng vĩnh viễn", ex: "Human activities are accelerating the mass extinction of wildlife." },
      { word: "conservationist", type: "noun", ipa: "/ˌkɒnsəˈveɪʃənɪst/", meaning: "nhà hoạt động bảo tồn thiên nhiên", ex: "Passionate conservationists work tirelessly to rescue wounded pangolins." }
    ],
    pronunciation: {
      focus: "Nhịp điệu trong câu (Rhythm in sentences)",
      guide: "• Trong tiếng Anh, nhịp điệu được tạo nên bởi sự xen kẽ giữa các từ nội dung (content words) được NHẤN MẠNH và các từ chức năng (structure words) bị LƯỚT NHẸ.\n• Từ nội dung: Danh từ, động từ chính, tính từ, trạng từ (EARTH, proTECT, ANIMALS, CLEAN).\n• Từ chức năng: Đại từ, mạo từ, giới từ, trợ động từ (to, the, of, in, is, a).",
      examples: [
        { word: "Sentence 1", ipa: "/wɪ mʌst prəˈtekt ðə ˈplænɪt/", note: "Nhấn vào 'must', 'protect', 'planet'" },
        { word: "Sentence 2", ipa: "/ˈtriz prəˈvaɪd ˈɒksɪdʒən fɔːr ˈæs/", note: "Nhấn vào 'trees', 'provide', 'oxygen'" }
      ]
    },
    grammar: {
      topic: "Non-Defining Relative Clauses (Mệnh đề quan hệ không xác định)",
      rules: [
        "1. Chức năng: Bổ sung thêm thông tin phụ (extra information) về một danh từ đã được xác định rõ ràng (tên riêng, danh từ có tính từ sở hữu hoặc có từ chỉ định this/that/these/those). Nếu bỏ mệnh đề này đi, nghĩa chính của câu vẫn hoàn chỉnh và người nghe vẫn biết đối tượng là ai/cái gì.",
        "2. Phải có dấu phẩy: Mệnh đề quan hệ không xác định BẮT BUỘC phải được ngăn cách với mệnh đề chính bằng dấu phẩy (, ... ,).",
        "3. TUYỆT ĐỐI KHÔNG dùng 'THAT': Trong mệnh đề có dấu phẩy, KHÔNG ĐƯỢC dùng 'that' để thay cho who hoặc which.",
        "4. TUYỆT ĐỐI KHÔNG lược bỏ đại từ quan hệ: Dù đại từ làm tân ngữ, trong mệnh đề không xác định cũng KHÔNG ĐƯỢC bỏ đại từ.",
        "• Ví dụ: The Amazon Rainforest, which produces 20% of Earth's oxygen, is under severe threat. (ĐÚNG) | The Amazon Rainforest, that produces... (SAI)."
      ],
      examples: [
        "Son Doong, which is the world's largest natural cave, attracts scientists globally.",
        "My biology teacher, who is an active conservationist, organized a tree-planting day.",
        "Cat Ba National Park, where the golden-headed langurs live, is a UNESCO biosphere reserve."
      ]
    },
    communication: {
      function: "Thuyết phục ai đó làm việc gì và đáp lại (Persuading someone to do something and responding)",
      phrases: [
        { en: "You really should join our green recycling club. It makes a huge difference!", vi: "Cậu thực sự nên tham gia câu lạc bộ tái chế xanh. Nó tạo ra khác biệt to lớn đấy!", type: "persuading" },
        { en: "Come on! If we don't act now to save the turtles, it will be too late.", vi: "Nào bạn ơi! Nếu chúng mình không hành động cứu loài rùa bây giờ thì sẽ quá muộn mất.", type: "persuading" },
        { en: "You've convinced me. I'll sign up right away.", vi: "Cậu đã thuyết phục được tớ rồi. Tớ sẽ đăng kí ngay đây.", type: "accepting" },
        { en: "Let me think about it. I have quite a busy schedule this term.", vi: "Để tớ suy nghĩ thêm nhé. Kì này lịch học của tớ hơi kín.", type: "hesitating" }
      ]
    },
    skills: {
      reading: "Đọc báo cáo khoa học về rừng Amazon và tác động của nạn phá rừng đối với khí hậu toàn cầu; kĩ năng tóm tắt ý chính.",
      listening: "Nghe cuộc thảo luận bàn tròn giữa các nhà sinh vật học về vai trò then chốt của loài ong đối với chuỗi thụ phấn cây trồng.",
      speaking: "Tranh biện về các biện pháp cấp bách nhằm giảm thiểu rác thải nhựa đại dương tại các bãi biển du lịch.",
      writing: "Viết đoạn văn (100–120 từ) giới thiệu một loài động vật hoang dã nguy cấp tại Việt Nam (sao la, vọoc Cát Bà) và kêu gọi bảo vệ."
    },
    project: {
      title: "Local Biodiversity Poster & Action Plan",
      task: "Khảo sát và chụp ảnh hệ thực vật, chim muông hoặc côn trùng tại khuôn viên trường học hoặc công viên gần nhà; làm bảng tin 'Save Our Micro-Habitats'."
    },
    quiz: [
      {
        q: "Chọn câu viết đúng ngữ pháp:",
        options: [
          "A. Mount Everest, which is the highest mountain, attracts many climbers.",
          "B. Mount Everest, that is the highest mountain, attracts many climbers.",
          "C. Mount Everest which is the highest mountain, attracts many climbers.",
          "D. Mount Everest, is the highest mountain, attracts many climbers."
        ],
        answer: 0,
        explain: "Tên riêng 'Mount Everest' đòi hỏi mệnh đề quan hệ không xác định (có dấu phẩy) và TUYỆT ĐỐI KHÔNG dùng 'that'."
      },
      {
        q: "Từ 'flora' trong cụm 'flora and fauna' chỉ đối tượng nào?",
        options: ["A. Hệ động vật", "B. Hệ thực vật", "C. Khoáng sản", "D. Nguồn nước"],
        answer: 1,
        explain: "'flora' là hệ thực vật (cỏ cây hoa lá), còn 'fauna' là hệ động vật."
      },
      {
        q: "Trong quy tắc nhịp điệu câu tiếng Anh, từ nào thường ĐƯỢC NHẤN MẠNH?",
        options: [
          "A. Giới từ (in, on, at)",
          "B. Mạo từ (a, an, the)",
          "C. Danh từ và động từ chính",
          "D. Đại từ nhân xưng (he, she, it)"
        ],
        answer: 2,
        explain: "Từ nội dung (content words) như danh từ, động từ chính, tính từ, trạng từ mang thông tin cốt lõi nên luôn được nhấn mạnh."
      },
      {
        q: "Đáp lại lời thuyết phục tham gia chiến dịch nhặt rác: 'Come on, let's join!':",
        options: [
          "A. You've convinced me. Count me in!",
          "B. Good luck to you.",
          "C. Never mind.",
          "D. You are welcome."
        ],
        answer: 0,
        explain: "'You've convinced me. Count me in!' (Cậu thuyết phục được tớ rồi. Cho tớ tham gia với!) là lời đồng thuận tích cực nhất."
      }
    ]
  },

  // UNIT 11: ELECTRONIC DEVICES
  {
    id: "unit-11",
    unit: "UNIT 11",
    theme: "VISIONS OF THE FUTURE",
    title: "Electronic Devices",
    focus: "Thiết bị điện tử, công nghệ tương lai, AI & công dụng; Cấu trúc suggest / advise / recommend; Trọng âm câu (Sentence Stress)",
    color: "indigo",
    vocab: [
      { word: "electronic device", type: "noun", ipa: "/ɪˌlekˈtrɒnɪk dɪˈvaɪs/", meaning: "thiết bị điện tử cầm tay", ex: "Smartphones and tablets are indispensable electronic devices in modern classrooms." },
      { word: "artificial intelligence", type: "noun", ipa: "/ˌɑːtɪfɪʃl ɪnˈtelɪdʒəns/", meaning: "trí tuệ nhân tạo (AI)", ex: "Artificial intelligence empowers smart software to analyze complex medical data in seconds." },
      { word: "interactive screen", type: "noun", ipa: "/ˌɪntərˈæktɪv skriːn/", meaning: "màn hình cảm ứng tương tác thông minh", ex: "Our classroom was equipped with an interactive screen for multimedia lectures." },
      { word: "wearable technology", type: "noun", ipa: "/ˈweərəbl tekˈnɒlədʒi/", meaning: "công nghệ đeo thông minh (đồng hồ, kính VR)", ex: "Smartwatches represent the rapid evolution of wearable technology." },
      { word: "storage capacity", type: "noun", ipa: "/ˈstɔːrɪdʒ kəˈpæsəti/", meaning: "dung lượng lưu trữ dữ liệu", ex: "This hard drive provides a massive storage capacity of up to 4 terabytes." },
      { word: "voice recognition", type: "noun", ipa: "/ˈvɔɪs rekəɡˈnɪʃn/", meaning: "công nghệ nhận diện giọng nói", ex: "Virtual assistants use voice recognition to execute user commands smoothly." },
      { word: "cybersecurity", type: "noun", ipa: "/ˈsaɪbəsɪkjʊərəti/", meaning: "an ninh mạng, bảo mật thông tin số", ex: "Schools should educate students on cybersecurity to avoid phishing scams." },
      { word: "back up", type: "phrasal verb", ipa: "/bæk ʌp/", meaning: "sao lưu dữ liệu phòng sự cố", ex: "You should regularly back up your project files to cloud storage." },
      { word: "user-friendly", type: "adjective", ipa: "/ˌjuːzə ˈfrendli/", meaning: "thân thiện, dễ sử dụng với người dùng", ex: "The new operating system interface is clean and user-friendly." },
      { word: "battery life", type: "noun", ipa: "/ˈbætəri laɪf/", meaning: "thời lượng pin sử dụng", ex: "This laptop boasts an outstanding battery life of up to 15 continuous hours." }
    ],
    pronunciation: {
      focus: "Trọng âm câu (Sentence Stress)",
      guide: "• Nhấn mạnh vào những từ mang thông tin mấu chốt để truyền đạt đúng ý đồ và cảm xúc của người nói.\n• Thay đổi trọng âm câu có thể làm thay đổi hoàn toàn hàm ý: (1) *I* didn't say he stole the device (ai đó khác nói, không phải tôi); (2) I didn't say *HE* stole the device (người khác lấy, không phải cậu ấy); (3) I didn't say he *STOLE* the device (cậu ấy chỉ mượn, không phải ăn trộm).",
      examples: [
        { word: "Case A", ipa: "I recommend buying this LAPTOP.", note: "Nhấn mạnh thiết bị cụ thể được khuyên mua" },
        { word: "Case B", ipa: "This device is FAST and RELIABLE.", note: "Nhấn mạnh tính năng vượt trội" }
      ]
    },
    grammar: {
      topic: "Structures with Suggest / Advise / Recommend (Cấu trúc với suggest, advise, recommend)",
      rules: [
        "1. suggest:",
        "• suggest + V-ing: I suggest upgrading your operating system.",
        "• suggest + (that) + S + (should) + V-inf: The IT expert suggested that we (should) install antivirus software. (LƯU Ý: KHÔNG DÙNG: suggest somebody to do something).",
        "2. advise:",
        "• advise + somebody + to-V: The teacher advised us to back up our research files daily.",
        "• advise + V-ing: Doctors advise limiting screen time before bedtime.",
        "• advise + (that) + S + (should) + V-inf: She advised that he take a break.",
        "3. recommend:",
        "• recommend + V-ing: I recommend purchasing a protective shockproof case.",
        "• recommend + somebody + to-V: He recommended me to try this coding app.",
        "• recommend + (that) + S + (should) + V-inf: We recommend that users update their passwords frequently."
      ],
      examples: [
        "The computer technician suggested checking the Wi-Fi router first.",
        "My father advised me not to spend more than two hours playing video games.",
        "I recommend that every student should install an English-Vietnamese dictionary on their tablets."
      ]
    },
    communication: {
      function: "Kiểm tra sự hiểu biết và đáp lại (Checking understanding and responding)",
      phrases: [
        { en: "Do you see what I mean about cloud backup?", vi: "Cậu có hiểu ý tớ về việc sao lưu đám mây không?", type: "checking" },
        { en: "Are you following me so far on how to configure this setting?", vi: "Đến đây cậu vẫn theo kịp các bước cài đặt này chứ?", type: "checking" },
        { en: "Yes, I completely understand. It's crystal clear.", vi: "Có, mình hiểu rất rõ rồi. Rất dễ hiểu.", type: "responding" },
        { en: "Could you explain the last step again? I'm a bit confused.", vi: "Cậu có thể giải thích lại bước cuối không? Tớ hơi rối một chút.", type: "responding" }
      ]
    },
    skills: {
      reading: "Đọc bài dự báo về 'Thiết bị trường học năm 2040': bàn học tích hợp hình ảnh 3D hologram và gia sư AI cá nhân hóa; đoán nghĩa từ mới qua ngữ cảnh.",
      listening: "Nghe bài đánh giá so sánh (review) giữa máy tính bảng học tập và máy đọc sách điện tử (e-reader).",
      speaking: "Thuyết trình về thiết bị điện tử quan trọng nhất đối với việc học tập của em và cách em sử dụng nó hiệu quả.",
      writing: "Viết đoạn văn (100–120 từ) miêu tả những tính năng và tiện ích của một thiết bị công nghệ mà em ước ao được sở hữu trong tương lai."
    },
    project: {
      title: "Invention Pitch: Future Smart Gadget",
      task: "Mỗi nhóm sáng chế ý tưởng một thiết bị thông minh phục vụ học sinh (như bút ghi nhớ giọng nói tự chuyển thành văn bản, kính thông minh dịch tức thì); vẽ bản phác thảo và thuyết trình trước lớp."
    },
    quiz: [
      {
        q: "Chọn câu viết SAI ngữ pháp:",
        options: [
          "A. The technician suggested upgrading the computer's RAM.",
          "B. The technician suggested that we should upgrade the computer's RAM.",
          "C. The technician suggested us to upgrade the computer's RAM.",
          "D. The technician advised us to upgrade the computer's RAM."
        ],
        answer: 2,
        explain: "Động từ 'suggest' KHÔNG BAO GIỜ đi với cấu trúc 'suggest somebody to do something'. Câu C là sai quy tắc."
      },
      {
        q: "'advise' có thể đi với cấu trúc nào sau đây?",
        options: [
          "A. advise somebody to do something",
          "B. advise doing something",
          "C. advise that S (should) do something",
          "D. Tất cả các cấu trúc trên đều đúng"
        ],
        answer: 3,
        explain: "'advise' có thể đi với cả ba cấu trúc: advise sb to V, advise V-ing, hoặc advise that S (should) V."
      },
      {
        q: "Thuật ngữ 'storage capacity' chỉ đặc tính nào của thiết bị?",
        options: ["A. Thời lượng pin", "B. Dung lượng lưu trữ", "C. Trọng lượng máy", "D. Độ phân giải màn hình"],
        answer: 1,
        explain: "'storage capacity' là dung lượng lưu trữ của ổ đĩa hoặc bộ nhớ."
      },
      {
        q: "Khi giáo viên hỏi 'Are you following me?', câu trả lời khi đã nắm vững bài là:",
        options: [
          "A. Yes, I'm with you. It's very clear.",
          "B. No, thanks a lot.",
          "C. Happy to help.",
          "D. Never mind."
        ],
        answer: 0,
        explain: "'Yes, I'm with you. It's very clear' (Vâng, em vẫn đang theo dõi kịp và hiểu rất rõ) là câu trả lời chuẩn xác."
      }
    ]
  },

  // UNIT 12: CAREER CHOICES
  {
    id: "unit-12",
    unit: "UNIT 12",
    theme: "VISIONS OF THE FUTURE",
    title: "Career Choices",
    focus: "Nghề nghiệp tương lai, kĩ năng mềm & thị trường việc làm thời 4.0; Mệnh đề trạng ngữ chỉ nhượng bộ, kết quả & nguyên nhân; Ngữ điệu câu trần thuật hỏi",
    color: "indigo",
    vocab: [
      { word: "career path", type: "noun", ipa: "/kəˈrɪə pɑːθ/", meaning: "con đường phát triển sự nghiệp", ex: "Choosing the right career path requires a clear understanding of your passions and strengths." },
      { word: "vocational training", type: "noun", ipa: "/vəʊˈkeɪʃənl ˈtreɪnɪŋ/", meaning: "đào tạo nghề, trường dạy nghề", ex: "Vocational training equips students with hands-on skills for immediate employment." },
      { word: "software engineer", type: "noun", ipa: "/ˈsɒftweə ˌendʒɪˈnɪə/", meaning: "kĩ sư phần mềm máy tính", ex: "Demand for skilled software engineers remains exceptionally high in the digital age." },
      { word: "soft skills", type: "noun", ipa: "/ˈsɒft skɪlz/", meaning: "các kĩ năng mềm (giao tiếp, làm việc nhóm, giải quyết vấn đề)", ex: "Besides professional knowledge, mastering soft skills is essential for career success." },
      { word: "job satisfaction", type: "noun", ipa: "/ˈdʒɒb ˌsætɪsˈfækʃn/", meaning: "sự thỏa mãn, yêu thích công việc", ex: "High job satisfaction leads to higher creativity and workplace commitment." },
      { word: "workplace", type: "noun", ipa: "/ˈwɜːkpleɪs/", meaning: "môi trường làm việc, nơi làm việc", ex: "Modern companies strive to build an inclusive and supportive workplace." },
      { word: "qualification", type: "noun", ipa: "/ˌkwɒlɪfɪˈkeɪʃn/", meaning: "bằng cấp chuyên môn, chứng chỉ nghề", ex: "Having recognized international qualifications opens up global employment doors." },
      { word: "demanding", type: "adjective", ipa: "/dɪˈmɑːndɪŋ/", meaning: "đòi hỏi cao, nhiều áp lực", ex: "Being a surgeon is a highly demanding profession that requires utmost precision." },
      { word: "adaptability", type: "noun", ipa: "/əˌdæptəˈbɪləti/", meaning: "khả năng thích ứng linh hoạt", ex: "Adaptability is the most critical survival skill in an ever-changing labor market." },
      { word: "remote work", type: "noun", ipa: "/rɪˈməʊt wɜːk/", meaning: "làm việc từ xa (làm việc qua mạng tại nhà)", ex: "Remote work offers flexible working hours and eliminates the daily commute." }
    ],
    pronunciation: {
      focus: "Ngữ điệu của câu trần thuật dùng như câu hỏi (Statements used as questions)",
      guide: "• Trong giao tiếp đời thường, người nói có thể dùng cấu trúc của một câu khẳng định nhưng LÊN GIỌNG Ở CUỐI CÂU (rising intonation) để biến nó thành câu hỏi nhằm xác nhận lại thông tin hoặc thể hiện sự ngạc nhiên.\n• Ví dụ: You want to become a game designer? ↗ (Bạn muốn trở thành nhà thiết kế game thật sao?) | You have already finished your university application? ↗",
      examples: [
        { word: "Example 1", ipa: "You're applying for the coding camp? ↗", note: "Lên giọng cuối câu để hỏi xác nhận" },
        { word: "Example 2", ipa: "She wants to study graphic design? ↗", note: "Thể hiện sự bất ngờ và tò mò" }
      ]
    },
    grammar: {
      topic: "Adverbial Clauses of Concession, Result, and Reason (Mệnh đề trạng ngữ chỉ nhượng bộ, kết quả và nguyên nhân)",
      rules: [
        "1. Mệnh đề chỉ Nhượng bộ (Concession):",
        "• Although / Even though / Though + Clause (S + V): Although the job is demanding, she finds it deeply rewarding. (LƯU Ý: KHÔNG DÙNG đồng thời 'although' và 'but' trong cùng một câu).",
        "• Despite / In spite of + Noun / Noun Phrase / V-ing: Despite the low starting salary, he accepted the internship.",
        "2. Mệnh đề chỉ Kết quả (Result):",
        "• so + Clause: She prepared thoroughly for the interview, so she got the job.",
        "• so + Adj / Adv + that + Clause: The lecture was so inspiring that all students listened intently.",
        "• such + (a/an) + Adj + Noun + that + Clause: It was such an interesting job that hundreds of candidates applied.",
        "3. Mệnh đề chỉ Nguyên nhân (Reason):",
        "• Because / Since / As + Clause (S + V): He chose vocational school because he preferred practical training.",
        "• Because of / Due to + Noun / V-ing: He succeeded because of his tireless perseverance."
      ],
      examples: [
        "Although Nam loves technology, he decided to pursue a medical career.",
        "Despite having no prior work experience, she impressed the recruiter with her presentation.",
        "The project was so challenging that the engineering team worked overtime.",
        "Because she wanted to work remotely, she trained as a freelance graphic designer."
      ]
    },
    communication: {
      function: "Bày tỏ hi vọng và đáp lại (Expressing hope and responding)",
      phrases: [
        { en: "I hope you will pass the entrance exam to the specialized high school.", vi: "Tớ hi vọng cậu sẽ đỗ vào trường THPT chuyên.", type: "hoping" },
        { en: "I'm crossing my fingers that my job interview goes smoothly tomorrow.", vi: "Mình đang cầu mong buổi phỏng vấn ngày mai diễn ra suôn sẻ.", type: "hoping" },
        { en: "I hope so too. Thank you for your warm encouragement!", vi: "Tớ cũng hi vọng như vậy. Cảm ơn lời động viên ấm áp của cậu!", type: "responding" },
        { en: "Don't worry, with your dedication, you will definitely achieve it.", vi: "Đừng lo, với sự nỗ lực của cậu, nhất định cậu sẽ làm được mà.", type: "responding" }
      ]
    },
    skills: {
      reading: "Đọc bài phân tích về các ngành nghề bùng nổ trong tương lai (kĩ sư năng lượng xanh, chuyên viên dữ liệu lớn, thiết kế robot y tế).",
      listening: "Nghe buổi tọa đàm tư vấn hướng nghiệp giữa học sinh lớp 9 và các chuyên gia tuyển dụng nhân sự.",
      speaking: "Đóng vai buổi phỏng vấn xin việc bán thời gian hè: giới thiệu bản thân, thế mạnh và nguyện vọng học hỏi.",
      writing: "Viết email (100–120 từ) gửi cho chuyên viên tư vấn trường học bày tỏ nguyện vọng nghề nghiệp tương lai và xin lời khuyên định hướng."
    },
    project: {
      title: "My Career Vision Board 2035",
      task: "Làm bảng tầm nhìn nghề nghiệp (Vision Board): dán ảnh nghề nghiệp mơ ước, liệt kê 3 kĩ năng chuyên môn và 3 kĩ năng mềm cần rèn luyện từ bậc THCS."
    },
    quiz: [
      {
        q: "Chọn liên từ thích hợp: '______ the working hours were long, the young chef loved his job.'",
        options: ["A. Although", "B. Despite", "C. Because of", "D. In spite"],
        answer: 0,
        explain: "Đằng sau là một mệnh đề hoàn chỉnh (the working hours were long - S + V) nên ta dùng liên từ 'Although'."
      },
      {
        q: "Điền từ vào chỗ trống: 'It was ______ a difficult task that we had to ask our mentor for guidance.'",
        options: ["A. so", "B. such", "C. very", "D. too"],
        answer: 1,
        explain: "Cấu trúc 'such + a/an + adj + noun + that' ('such a difficult task that'). 'so' chỉ đi với tính từ đơn lẻ: 'so difficult that'."
      },
      {
        q: "Khi đọc câu trần thuật được dùng như câu hỏi để xác nhận: 'You're studying AI engineering?', ngữ điệu chuẩn là:",
        options: [
          "A. Xuống giọng ở cuối câu",
          "B. Lên giọng ở cuối câu",
          "C. Giữ giọng bằng phẳng",
          "D. Đọc thật nhanh không ngắt nghỉ"
        ],
        answer: 1,
        explain: "Câu trần thuật dùng làm câu hỏi (statements as questions) luôn lên giọng ở cuối câu (rising intonation)."
      },
      {
        q: "Đáp lại lời chúc 'I hope you get into your dream high school!':",
        options: [
          "A. I hope so too. Thanks a million!",
          "B. Never mind.",
          "C. You must wear a jacket.",
          "D. Excuse me?"
        ],
        answer: 0,
        explain: "'I hope so too. Thanks a million!' (Tớ cũng hi vọng thế. Cảm ơn cậu triệu lần!) là lời đáp lịch thiệp và đúng ngữ cảnh."
      }
    ]
  },

  // REVIEW 4 (UNITS 10–12)
  {
    id: "review-4",
    unit: "REVIEW 4",
    theme: "VISIONS OF THE FUTURE",
    title: "Review 4 (Units 10 - 12)",
    focus: "Hệ thống hóa Theme 4: Planet Earth, Electronic Devices, Career Choices; Non-defining relative clauses, suggest/advise/recommend, Adverbial clauses; Nhịp điệu câu, trọng âm câu & ngữ điệu trần thuật hỏi",
    color: "indigo",
    vocab: [
      { word: "future-ready", type: "adjective", ipa: "/ˌfjuːtʃə ˈredi/", meaning: "sẵn sàng cho tương lai", ex: "Theme 4 prepares students to become future-ready digital citizens and stewards of Earth." },
      { word: "sustainability", type: "noun", ipa: "/səˌsteɪnəˈbɪləti/", meaning: "sự phát triển bền vững", ex: "Balancing technological advancement with environmental sustainability is our top priority." },
      { word: "digital literacy", type: "noun", ipa: "/ˌdɪdʒɪtl ˈlɪtərəsi/", meaning: "năng lực số, kĩ năng làm chủ công nghệ", ex: "Digital literacy is an indispensable foundation for any modern career choice." },
      { word: "resilience", type: "noun", ipa: "/rɪˈzɪliəns/", meaning: "sự kiên cường, khả năng phục hồi trước khó khăn", ex: "Resilience enables young workers to navigate career challenges with confidence." }
    ],
    grammar: {
      topic: "Review 4 Grammar Synthesis: Structures 10–12",
      rules: [
        "1. Non-defining relative clauses: dùng dấu phẩy, KHÔNG dùng 'that', KHÔNG lược bỏ đại từ quan hệ.",
        "2. Structures with suggest/advise/recommend: suggest V-ing / that S (should) V; advise sb to V / V-ing; recommend V-ing / that S (should) V.",
        "3. Adverbial clauses: Although/Even though + Clause vs. Despite/In spite of + Noun/V-ing; so + Clause / so...that / such...that; Because/Since + Clause vs. Because of + Noun."
      ],
      examples: [
        "The red panda, which is an endangered mammal, lives in high bamboo forests.",
        "My mentor advised me to develop both coding skills and emotional intelligence.",
        "Although the competition was fierce, he secured a scholarship because of his impressive portfolio."
      ]
    },
    communication: {
      function: "Tổng hợp giao tiếp Theme 4",
      phrases: [
        { en: "You should join the tree planting! — You've convinced me.", vi: "Thuyết phục và đáp lại (Unit 10)", type: "review" },
        { en: "Are you following me? — Yes, it's very clear.", vi: "Kiểm tra sự hiểu biết và đáp lại (Unit 11)", type: "review" },
        { en: "I hope you succeed! — Thank you so much!", vi: "Bày tỏ hi vọng và đáp lại (Unit 12)", type: "review" }
      ]
    },
    skills: {
      reading: "Đọc bài tổng hợp về cuộc sống con người vào năm 2050: nhà thông minh, bảo tồn thiên nhiên và thị trường việc làm tự động hóa.",
      listening: "Nghe diễn văn bế mạc năm học của đại diện học sinh lớp 9 về hành trang tri thức và khát vọng tương lai.",
      speaking: "Thuyết trình tổng kết: 'Những giá trị cốt lõi mà học sinh lớp 9 cần trang bị để hội nhập thế giới tương lai'.",
      writing: "Viết bức thư gửi cho chính bản thân em ở tuổi 25 (150 từ), chia sẻ ước mơ nghề nghiệp và lời hứa sống có trách nhiệm với cộng đồng và hành tinh."
    },
    quiz: [
      {
        q: "Chọn câu viết đúng quy tắc ngữ pháp:",
        options: [
          "A. Despite he was tired, he finished his assignment.",
          "B. Although he was tired, but he finished his assignment.",
          "C. In spite of being tired, he finished his assignment.",
          "D. Despite of his tiredness, he finished his assignment."
        ],
        answer: 2,
        explain: "'In spite of + V-ing' là cấu trúc chính xác. 'Despite' không đi với 'of' và không đi trực tiếp với một mệnh đề (S+V)."
      },
      {
        q: "Điền vào chỗ trống: 'The teacher suggested that every student ______ an outline before writing.'",
        options: ["A. make", "B. makes", "C. to make", "D. made"],
        answer: 0,
        explain: "Cấu trúc giả định thức: suggest that S + (should) + V nguyên mẫu không chia ('make')."
      },
      {
        q: "Câu nào sau đây BẮT BUỘC phải dùng đại từ 'which' mà KHÔNG THỂ dùng 'that'?",
        options: [
          "A. The computer ______ I bought yesterday is very fast.",
          "B. Apple Inc., ______ is a tech giant, unveiled a new device.",
          "C. The book ______ is on the table belongs to Mai.",
          "D. Everything ______ he said was true."
        ],
        answer: 1,
        explain: "Đây là mệnh đề không xác định có dấu phẩy ('Apple Inc., ...'), nên tuyệt đối không được dùng 'that'."
      },
      {
        q: "Nhịp điệu câu tiếng Anh được quyết định bởi sự đối lập giữa:",
        options: [
          "A. Từ nội dung được nhấn và từ chức năng đọc lướt nhẹ",
          "B. Từ dài và từ ngắn",
          "C. Từ mượn và từ thuần Anh",
          "D. Nguyên âm đơn và nguyên âm đôi"
        ],
        answer: 0,
        explain: "Nhịp điệu câu tiếng Anh (Rhythm) dựa trên sự luân phiên giữa Content words (nhấn mạnh) và Structure words (lướt nhẹ)."
      }
    ]
  }
];

// Fast Summary Matrix (Bảng tra cứu nhanh hệ thống ngữ pháp - 14 rows)
const fastSummaryMatrix = [
  { structure: "Question word + to-infinitive", functionVi: "Diễn tả điều cần biết / cách làm / nơi cần đến trong câu gián tiếp rút gọn", formula: "what / how / where / who / when + to + V", example: "I don't know what to do next." },
  { structure: "Phrasal verbs (Cụm động từ)", functionVi: "Kết hợp động từ với tiểu từ mang nghĩa đặc thù theo ngữ cảnh", formula: "Verb + particle / preposition", example: "hand down, look around, cut down on" },
  { structure: "Double comparatives (So sánh kép)", functionVi: "Hai xu hướng thay đổi song hành hoặc mức độ tăng/giảm dần", formula: "The + comparative, the + comparative; Comp and comp", example: "The harder you work, the better you become." },
  { structure: "First conditional + modals", functionVi: "Điều kiện có thể xảy ra ở hiện tại/tương lai đi kèm khả năng, lời khuyên, bắt buộc", formula: "If + present simple, S + can/should/must/might + V", example: "If you want to stay fit, you should exercise." },
  { structure: "Past continuous (Quá khứ tiếp diễn)", functionVi: "Hành động đang diễn ra tại một thời điểm hoặc bị hành động khác cắt ngang", formula: "S + was / were + V-ing", example: "At 8 p.m., I was studying English." },
  { structure: "Wish + past simple (Câu ước hiện tại)", functionVi: "Ước muốn trái ngược với thực tế ở hiện tại hoặc khó xảy ra", formula: "S + wish(es) + S + V-past / were / could + V", example: "I wish I had more free time for painting." },
  { structure: "Present perfect (Hiện tại hoàn thành)", functionVi: "Trải nghiệm đến hiện tại, hành động vừa xảy ra hoặc còn tiếp diễn", formula: "S + have / has + past participle (V3/ed)", example: "Have you ever tried kayaking before?" },
  { structure: "Verb patterns (To-V / V-ing)", functionVi: "Dạng động từ theo sau: dự định/mong muốn (+to-V) vs. sở thích/tránh né (+V-ing)", formula: "want/decide + to-V vs. enjoy/avoid + V-ing", example: "She decided to study abroad." },
  { structure: "Reported Yes/No questions", functionVi: "Tường thuật câu hỏi có/không, lùi thì và đưa về trật tự câu trần thuật", formula: "asked + (O) + if / whether + S + V (lùi thì)", example: "He asked me if I was ready for the trip." },
  { structure: "Relative pronouns (Đại từ quan hệ)", functionVi: "Nối danh từ với mệnh đề bổ nghĩa nhằm tránh lặp lại từ", formula: "who, which, that, whose, where", example: "This is the artisan who made the vase." },
  { structure: "Defining relative clauses", functionVi: "Cung cấp thông tin thiết yếu xác định danh từ; không dùng dấu phẩy", formula: "Noun + who / which / that + clause (không phẩy)", example: "The book (which) I read was fascinating." },
  { structure: "Non-defining relative clauses", functionVi: "Bổ sung thông tin thêm về danh từ đã rõ; có dấu phẩy, KHÔNG dùng that", formula: "Noun, who / which / whose ..., + main clause", example: "Ha Long Bay, which is in Quang Ninh, is scenic." },
  { structure: "Suggest / advise / recommend", functionVi: "Nêu lời gợi ý, khuyên bảo, đề xuất giải pháp", formula: "suggest V-ing/clause; advise sb to V; recommend V-ing", example: "I suggest (that) you should back up files." },
  { structure: "Adverbial clauses (Nhượng bộ, kết quả, nguyên nhân)", functionVi: "Mệnh đề trạng ngữ chỉ sự tương phản, hệ quả hoặc lí do", formula: "although / despite; so / such...that; because / since", example: "Although it rained, we carried out the tour." }
];

// Phonics Matrix (12 Units Phonics Synthesis)
const phonicsMatrix = [
  { unit: "Unit 1", focus: "/æ/ vs. /ɑː/ vs. /e/", rule: "Phân biệt khẩu hình: /æ/ mở rộng (craft, cat), /ɑː/ kéo dài sâu (artisan, father), /e/ hé vừa (helper, get)." },
  { unit: "Unit 2", focus: "Nguyên âm đôi /aʊ/, /əʊ/, /eɪ/", rule: "Lướt khẩu hình mượt mà: /aʊ/ (town, crowded), /əʊ/ (metro, road), /eɪ/ (pavement, train)." },
  { unit: "Unit 3", focus: "Phụ âm /h/ vs. /r/", rule: "/h/ luồng hơi vô thanh qua họng (healthy, habit) vs. /r/ cong đầu lưỡi hữu thanh (routine, priority)." },
  { unit: "Unit 4", focus: "Phụ âm /m/ vs. /l/", rule: "/m/ ngậm môi thoát hơi mũi (memory, custom) vs. /l/ đầu lưỡi chạm lợi trên hơi ra hai bên (lantern, life)." },
  { unit: "Unit 5", focus: "Bán nguyên âm /j/ vs. /w/", rule: "/j/ nâng cuống lưỡi không chạm môi (youth, year) vs. /w/ chu tròn hai môi (water, wonderful)." },
  { unit: "Unit 6", focus: "Cụm phụ âm đầu /fl/ vs. /fr/", rule: "/fl/ môi răng lướt sang /l/ (flat, flag, flight) vs. /fr/ môi răng uốn lưỡi sang /r/ (friend, fresh, fruit)." },
  { unit: "Unit 7", focus: "Cụm phụ âm đầu /sl/ vs. /sn/", rule: "/sl/ xát /s/ rồi chuyển sang /l/ (slope, slide, sleep) vs. /sn/ xát /s/ rồi chuyển âm mũi /n/ (snow, snack, snake)." },
  { unit: "Unit 8", focus: "Trọng âm đuôi -ic và -ious", rule: "Trọng âm chính BẮT BUỘC rơi vào âm tiết ngay trước hậu tố: his'toric, ro'mantic; de'licious, mys'terious." },
  { unit: "Unit 9", focus: "Trọng âm đuôi -ion và -ity", rule: "Trọng âm chính BẮT BUỘC rơi vào âm tiết ngay trước hậu tố: cele'bration, pol'lution; a'bility, di'versity." },
  { unit: "Unit 10", focus: "Nhịp điệu câu (Rhythm)", rule: "Đan xen giữa Content words (nhấn mạnh: danh từ, động từ, tính từ) và Structure words (lướt nhẹ: mạo từ, giới từ, trợ từ)." },
  { unit: "Unit 11", focus: "Trọng âm câu (Sentence Stress)", rule: "Nhấn mạnh từ ngữ chứa thông điệp cốt lõi; đổi trọng âm câu sẽ làm thay đổi sắc thái và hàm ý giao tiếp." },
  { unit: "Unit 12", focus: "Ngữ điệu câu trần thuật hỏi", rule: "Dùng câu khẳng định nhưng lên giọng ở cuối câu (rising intonation: ↗) để hỏi xác nhận hoặc thể hiện sự ngạc nhiên." }
];

// 12 Key Communicative Functions
const communicativeFunctions = [
  { unit: 1, title: "Xin giúp đỡ và đáp lại (Seeking help)", asking: "Could you help me with this box, please?", responding: "Certainly. / I'd be glad to help." },
  { unit: 2, title: "Đề nghị giúp đỡ và đáp lại (Offering help)", asking: "Shall I carry this heavy suitcase for you?", responding: "That would be wonderful, thank you so much!" },
  { unit: 3, title: "Nhờ người khác nhắc lại (Asking for repetition)", asking: "Could you say that again, please? I didn't catch it.", responding: "Sure, let me repeat that for you." },
  { unit: 4, title: "Cảm ơn và đáp lại (Thanking and responding)", asking: "Thank you so much for sharing your memories.", responding: "You're very welcome. It was my pleasure." },
  { unit: 5, title: "Xin lỗi và đáp lại (Apologising and responding)", asking: "I'm terribly sorry for arriving late today.", responding: "That's quite all right. Don't worry about it." },
  { unit: 6, title: "Hứa hẹn và đáp lại (Making promises)", asking: "I promise I will practice speaking English daily.", responding: "I hope you will keep your word. I trust you!" },
  { unit: 7, title: "Xin phép và đáp lại (Asking for permission)", asking: "May I take photographs inside this ancient cave?", responding: "Yes, of course you can. Go right ahead." },
  { unit: 8, title: "Diễn đạt sự bắt buộc (Expressing obligation)", asking: "Tourists must wear life jackets during the boat tour.", responding: "Understood. I will put it on right away." },
  { unit: 9, title: "Chúc may mắn và đáp lại (Saying good luck)", asking: "Good luck with your English presentation tomorrow!", responding: "Thank you so much! I'll do my very best." },
  { unit: 10, title: "Thuyết phục ai đó làm gì (Persuading someone)", asking: "You really should join our green recycling club!", responding: "You've convinced me. I'll sign up right now." },
  { unit: 11, title: "Kiểm tra sự hiểu biết (Checking understanding)", asking: "Do you see what I mean about cloud backup?", responding: "Yes, I completely understand. It's crystal clear." },
  { unit: 12, title: "Bày tỏ hi vọng và đáp lại (Expressing hope)", asking: "I hope you will pass the entrance exam to high school.", responding: "I hope so too. Thank you for your warm support!" }
];

// Skills Framework
const skillsFramework = {
  listening: [
    "Xác định mục đích nghe: Nghe lấy ý chính (gist), nghe thông tin chi tiết (specific information), hay nghe thái độ người nói.",
    "Đọc lướt câu hỏi trước khi băng phát: Dự đoán từ loại và loại dữ liệu cần bắt (tên người, số liệu, địa điểm, lí do, thời gian).",
    "Chiến thuật 2 lượt nghe: Lượt 1 nắm tổng thể bức tranh; Lượt 2 đối chiếu chi tiết then chốt, chú ý bẫy từ đồng nghĩa (distractors)."
  ],
  speaking: [
    "Cấu trúc P-E-E-R: Point (Nêu ý chính) -> Explanation (Giải thích) -> Example (Ví dụ thực tế) -> Restatement (Khẳng định lại).",
    "Sử dụng từ nối (Discourse markers): First of all, In addition, However, On the other hand, As a result, In conclusion.",
    "Phát âm rõ ràng, làm chủ trọng âm từ, trọng âm câu và ngữ điệu phù hợp; tự tin hỏi lại lịch sự khi chưa hiểu đối phương."
  ],
  reading: [
    "Skimming (Đọc lướt): Đọc tiêu đề, câu chủ đề đoạn đầu và câu kết để nắm bố cục và thông điệp toàn bài.",
    "Scanning (Đọc quét nhanh): Tìm kiếm tên riêng, con số, mốc năm, thuật ngữ chuyên ngành mà không cần đọc từng từ.",
    "Đoán nghĩa từ qua ngữ cảnh: Dựa vào từ đồng nghĩa, từ trái nghĩa, ví dụ minh họa và cấu tạo tiền tố/hậu tố của từ mới.",
    "Xác định từ quy chiếu (Reference): Lần ngược lại câu phía trước để tìm xem các đại từ it, they, this, which thay thế cho danh từ nào."
  ],
  writing: [
    "Xác định thể loại và đối tượng: Đoạn văn nghị luận, email trang trọng/thân mật, thông báo lịch trình hay bài thuyết trình.",
    "Lập dàn ý 3 phần: Topic sentence (Câu chủ đề rõ ràng) -> 2-3 Supporting sentences (Ý bổ trợ + dẫn chứng) -> Concluding sentence.",
    "Quy trình tự kiểm tra 5 bước (COPS): Capitalization (Viết hoa), Order (Trật tự từ/Ngữ pháp), Punctuation (Dấu câu), Spelling (Chính tả)."
  ]
};

module.exports = {
  theme3And4Data,
  fastSummaryMatrix,
  phonicsMatrix,
  communicativeFunctions,
  skillsFramework
};
