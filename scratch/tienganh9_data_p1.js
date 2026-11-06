// tienganh9_data_p1.js
// Data for Tiếng Anh 9 (Global Success) - Theme 1: Our Communities & Theme 2: Our Heritage
// Units 1 to 6 + Reviews 1 & 2

const theme1And2Data = [
  // ==========================================
  // THEME 1: OUR COMMUNITIES
  // ==========================================

  // UNIT 1: LOCAL COMMUNITY
  {
    id: "unit-1",
    unit: "UNIT 1",
    theme: "OUR COMMUNITIES",
    title: "Local Community",
    focus: "Người phục vụ cộng đồng, nghề thủ công & sản phẩm địa phương; Từ để hỏi + to-V; Cụm động từ 1; Âm /æ/, /ɑː/, /e/",
    color: "sky",
    vocab: [
      { word: "community helper", type: "noun", ipa: "/kəˈmjuːnəti ˈhelpə/", meaning: "người phục vụ/hỗ trợ cộng đồng", ex: "Police officers, firefighters, and garbage collectors are dedicated community helpers." },
      { word: "handicraft", type: "noun", ipa: "/ˈhændikrɑːft/", meaning: "sản phẩm thủ công mĩ nghệ", ex: "Bat Trang is famous for its unique pottery handicrafts." },
      { word: "pottery", type: "noun", ipa: "/ˈpɒtəri/", meaning: "đồ gốm, nghề gốm sứ", ex: "Visitors can try making their own pottery bowls in the workshop." },
      { word: "artisan", type: "noun", ipa: "/ˌɑːtɪˈzæn/", meaning: "nghệ nhân, thợ thủ công lành nghề", ex: "The skilled artisan carved the wood into a delicate dragon statue." },
      { word: "speciality", type: "noun", ipa: "/ˌspeʃiˈæləti/", meaning: "đặc sản, nét đặc trưng của địa phương", ex: "Bun cha is an iconic culinary speciality of Hanoi." },
      { word: "preserve", type: "verb", ipa: "/prɪˈzɜːv/", meaning: "bảo tồn, giữ gìn", ex: "Young generations should work together to preserve traditional craft villages." },
      { word: "look around", type: "phrasal verb", ipa: "/lʊk əˈraʊnd/", meaning: "nhìn quanh, tham quan xung quanh", ex: "We spent the whole morning looking around the ancient village." },
      { word: "hand down", type: "phrasal verb", ipa: "/hænd daʊn/", meaning: "truyền lại, để lại cho đời sau", ex: "This silk-weaving technique has been handed down through five generations." },
      { word: "get on with", type: "phrasal verb", ipa: "/ɡet ɒn wɪð/", meaning: "có mối quan hệ tốt đẹp, hòa hợp với ai", ex: "My family gets on well with all the neighbors in our lane." },
      { word: "be responsible for", type: "phrase", ipa: "/bi rɪˈspɒnsəbl fɔː/", meaning: "chịu trách nhiệm về cái gì", ex: "Every resident is responsible for keeping the public park clean." }
    ],
    pronunciation: {
      focus: "Nguyên âm ngắn /æ/, dài /ɑː/ và ngắn /e/",
      guide: "• /æ/: miệng mở rộng, lưỡi hạ thấp (cat, craft, handicraft).\n• /ɑː/: miệng mở sâu, kéo dài hơi (father, park, artisan).\n• /e/: khóe miệng hé vừa phải, âm dứt khoát (helper, member, get).",
      examples: [
        { word: "handicraft", ipa: "/ˈhændikrɑːft/", note: "chứa cả âm /æ/ ở 'handi' và /ɑː/ ở 'craft'" },
        { word: "artisan", ipa: "/ˌɑːtɪˈzæn/", note: "chứa /ɑː/ ở đầu và /æ/ ở đuôi" },
        { word: "helper", ipa: "/ˈhelpə/", note: "chứa âm /e/" }
      ]
    },
    grammar: {
      topic: "Question Words + To-Infinitive & Phrasal Verbs (Part 1)",
      rules: [
        "Cấu trúc 'Từ để hỏi + to-V': what / where / how / who / when + to + V-infinitive được dùng làm tân ngữ sau các động từ như know, wonder, decide, tell, show, ask để rút gọn câu gián tiếp khi chủ ngữ chính và đại từ trùng nhau.",
        "Ví dụ: I don't know what to do. (= I don't know what I should do.) | Can you show me how to make pottery? (= ...how I can make pottery?)",
        "Lưu ý: 'Why' KHÔNG được dùng trong cấu trúc 'why + to-V' (Không nói: I don't know why to do it).",
        "Cụm động từ (Phrasal Verbs): kết hợp Động từ + Tiểu từ (giới từ/trạng từ) mang nghĩa hoàn toàn mới, không thể dịch rời rạc từng từ.",
        "Các cụm trọng tâm Unit 1: look around (tham quan), hand down (truyền lại), get on with (hòa thuận với), come back (quay lại), pass down (truyền thụ)."
      ],
      examples: [
        "She didn't know where to buy authentic Van Phuc silk.",
        "Could you tell me who to contact about the neighborhood clean-up campaign?",
        "These precious carving skills were handed down from father to son."
      ]
    },
    communication: {
      function: "Xin giúp đỡ và đáp lại (Seeking help and responding)",
      phrases: [
        { en: "Could you help me with this box, please?", vi: "Bạn có thể giúp tôi chuyển cái hộp này được không?", type: "asking" },
        { en: "Can you give me a hand with cleaning the community hall?", vi: "Bạn có thể phụ tôi một tay dọn hội trường thôn không?", type: "asking" },
        { en: "Certainly. / Sure, I'd be glad to help.", vi: "Chắc chắn rồi. / Rất sẵn lòng giúp bạn.", type: "accepting" },
        { en: "I'm sorry, I'm a bit busy right now.", vi: "Mình xin lỗi, hiện tại mình đang hơi bận.", type: "declining" }
      ]
    },
    skills: {
      reading: "Đọc bài viết về các sản phẩm thủ công đặc sắc ở một số làng nghề truyền thống Việt Nam; nhận diện từ khoá, đại từ thay thế.",
      listening: "Nghe câu chuyện về một người phục vụ cộng đồng (community helper) tận tụy; bắt thông tin chi tiết về nhiệm vụ và đóng góp.",
      speaking: "Thuyết trình ngắn 2 phút giới thiệu một đặc sản hoặc nghề thủ công truyền thống tại quê hương em.",
      writing: "Viết đoạn văn (100–120 từ) miêu tả một người phục vụ cộng đồng mà em yêu quý và cảm phục."
    },
    project: {
      title: "Our Local Pride (Niềm tự hào địa phương)",
      task: "Làm áp phích hoặc cẩm nang giới thiệu về một làng nghề truyền thống hoặc sản phẩm đặc sản của địa phương em: tên gọi, nguồn gốc, quy trình sản xuất và giá trị văn hóa đối với cộng đồng."
    },
    quiz: [
      {
        q: "Chọn cấu trúc đúng: 'He didn't know ______ to ask for directions to the craft village.'",
        options: ["A. who", "B. which", "C. why", "D. whose"],
        answer: 0,
        explain: "Cấu trúc 'who + to-V' dùng để chỉ đối tượng cần hỏi ('hỏi ai để xin chỉ đường'). 'Why' không đi với to-infinitive."
      },
      {
        q: "Từ 'hand down' trong câu 'The secret embroidery techniques were handed down through generations' có nghĩa là gì?",
        options: ["A. bị lãng quên", "B. truyền lại cho đời sau", "C. bán đấu giá", "D. ghi chép vào sách"],
        answer: 1,
        explain: "'hand down' là cụm động từ mang nghĩa trao truyền, để lại di sản/kĩ nghệ cho thế hệ sau."
      },
      {
        q: "Từ nào sau đây có phần gạch chân phát âm là /ɑː/?",
        options: ["A. cat", "B. craft", "C. help", "D. send"],
        answer: 1,
        explain: "'craft' phát âm là /krɑːft/ với nguyên âm dài /ɑː/. 'cat' là /kæt/ (/æ/), 'help' và 'send' là /e/."
      },
      {
        q: "Đáp lại lời nhờ vả lịch sự: 'Could you please give me a hand with this task?'",
        options: ["A. You are welcome.", "B. No problem, I'd love to help.", "C. That's right.", "D. Never mind."],
        answer: 1,
        explain: "'No problem, I'd love to help' là câu đồng ý giúp đỡ lịch sự, thân thiện và tự nhiên."
      }
    ]
  },

  // UNIT 2: CITY LIFE
  {
    id: "unit-2",
    unit: "UNIT 2",
    theme: "OUR COMMUNITIES",
    title: "City Life",
    focus: "Cuộc sống đô thị, tiện ích, ùn tắc & giải pháp; So sánh kép (Double comparatives); Cụm động từ 2; Nguyên âm đôi /aʊ/, /əʊ/, /eɪ/",
    color: "sky",
    vocab: [
      { word: "metro", type: "noun", ipa: "/ˈmetrəʊ/", meaning: "tàu điện ngầm, hệ thống đường sắt đô thị", ex: "Taking the metro helps commuters avoid morning traffic jams." },
      { word: "traffic congestion", type: "noun", ipa: "/ˈtræfɪk kənˈdʒestʃən/", meaning: "tình trạng tắc nghẽn giao thông", ex: "Traffic congestion is a severe headache in megacities like Hanoi and Ho Chi Minh City." },
      { word: "amenity", type: "noun", ipa: "/əˈmiːnəti/", meaning: "tiện ích sinh hoạt (công viên, hồ bơi, rạp chiếu phim)", ex: "Modern residential areas provide diverse amenities for residents." },
      { word: "hustle and bustle", type: "idiom", ipa: "/ˈhʌsl ənd ˈbʌsl/", meaning: "sự hối hả và nhộn nhịp", ex: "Many elders prefer living in the countryside to escape the hustle and bustle of city life." },
      { word: "cost of living", type: "noun", ipa: "/kɒst əv ˈlɪvɪŋ/", meaning: "chi phí sinh hoạt", ex: "The high cost of living makes it challenging for young graduates to buy a home." },
      { word: "air pollution", type: "noun", ipa: "/eə pəˈluːʃn/", meaning: "ô nhiễm không khí", ex: "Vehicle exhaust is the primary cause of urban air pollution." },
      { word: "carry out", type: "phrasal verb", ipa: "/ˈkæri aʊt/", meaning: "tiến hành, thực hiện (nghiên cứu/kế hoạch)", ex: "The city council decided to carry out a survey on public transport satisfaction." },
      { word: "come down with", type: "phrasal verb", ipa: "/kʌm daʊn wɪð/", meaning: "bị ốm, mắc bệnh nhẹ (do khói bụi/thời tiết)", ex: "She came down with a bad cold due to sudden temperature changes." },
      { word: "cut down on", type: "phrasal verb", ipa: "/kʌt daʊn ɒn/", meaning: "cắt giảm, giảm bớt (chi tiêu/khí thải)", ex: "We must cut down on plastic bags and single-use containers." },
      { word: "hang out with", type: "phrasal verb", ipa: "/hæŋ aʊt wɪð/", meaning: "đi chơi, la cà cùng bạn bè", ex: "Teenagers love hanging out with friends at pedestrian streets on weekends." }
    ],
    pronunciation: {
      focus: "Nguyên âm đôi /aʊ/, /əʊ/, /eɪ/",
      guide: "• /aʊ/: chuyển từ /a/ sang /ʊ/ (town, crowded, downtown).\n• /əʊ/: chuyển từ /ə/ sang /ʊ/ (metro, road, coast).\n• /eɪ/: chuyển từ /e/ sang /ɪ/ (train, pavement, subway, daily).",
      examples: [
        { word: "downtown", ipa: "/ˌdaʊnˈtaʊn/", note: "chứa hai âm /aʊ/" },
        { word: "metro", ipa: "/ˈmetrəʊ/", note: "kết thúc bằng âm /əʊ/" },
        { word: "pavement", ipa: "/ˈpeɪvmənt/", note: "bắt đầu bằng âm /eɪ/" }
      ]
    },
    grammar: {
      topic: "Double Comparatives & Phrasal Verbs (Part 2)",
      rules: [
        "So sánh kép dạng 1 (Càng... càng...): The + comparative (+ S + V), the + comparative (+ S + V). Diễn tả hai sự việc thay đổi tỉ lệ thuận hoặc song hành với nhau.",
        "Mẫu tính từ ngắn: The + adj-er..., the + adj-er... (Ví dụ: The bigger the city is, the noisier it gets).",
        "Mẫu tính từ dài: The more + adj..., the more + adj... (Ví dụ: The more modern the transport system is, the more convenient our lives become).",
        "So sánh kép dạng 2 (Càng ngày càng...): comparative + and + comparative (Ví dụ: The air is getting dirtier and dirtier; Life is becoming more and more expensive).",
        "Phrasal verbs phân loại tách và không tách: Với các cụm có thể tách (separable), nếu tân ngữ là đại từ (it, them) thì BẮT BUỘC đặt ở giữa (Ví dụ: cut it down, carry it out)."
      ],
      examples: [
        "The more carefully we plan our cities, the better the quality of life becomes.",
        "Public transport is getting cheaper and more convenient.",
        "The more green trees we plant, the fresher the air will be."
      ]
    },
    communication: {
      function: "Đề nghị giúp đỡ và đáp lại (Offering help and responding)",
      phrases: [
        { en: "Would you like me to show you the way to the subway station?", vi: "Bạn có muốn mình chỉ đường tới ga tàu điện ngầm không?", type: "offering" },
        { en: "Shall I carry this heavy suitcase for you?", vi: "Để mình xách vali nặng này giúp bạn nhé?", type: "offering" },
        { en: "That would be wonderful, thank you so much!", vi: "Được vậy thì tuyệt quá, cảm ơn bạn rất nhiều!", type: "accepting" },
        { en: "No, thank you. I can manage it myself.", vi: "Dạ thôi, mình tự xoay sở được, cảm ơn bạn.", type: "declining" }
      ]
    },
    skills: {
      reading: "Đọc thông báo về cuộc thi sáng kiến 'Smart City Solutions'; tìm ý chính, tham chiếu từ thay thế và giải pháp cho tắc đường.",
      listening: "Nghe buổi phỏng vấn cư dân đô thị về những thuận lợi và bất tiện khi sống tại chung cư cao tầng.",
      speaking: "Thảo luận nhóm về các giải pháp giảm thiểu ùn tắc giao thông và ô nhiễm tiếng ồn tại thành phố.",
      writing: "Viết đoạn văn (100–120 từ) trình bày những điểm em thích và không thích về nhịp sống tại một đô thị lớn."
    },
    project: {
      title: "My Future Eco-City (Thành phố sinh thái tương lai)",
      task: "Thiết kế poster về một thành phố bền vững trong tương lai: hệ thống năng lượng tái tạo, mạng lưới giao thông xanh (tàu điện ngầm, xe đạp điện), các khu vườn trên cao và công viên cộng đồng."
    },
    quiz: [
      {
        q: "Hoàn thành câu so sánh kép: 'The ______ you study, the ______ marks you will get.'",
        options: ["A. harder / better", "B. more hard / more good", "C. hardest / best", "D. hardly / well"],
        answer: 0,
        explain: "Cấu trúc 'The + comparative, the + comparative'. So sánh hơn của 'hard' là 'harder', của 'good' là 'better'."
      },
      {
        q: "Điền cụm động từ thích hợp: 'We should ______ on our daily electricity consumption to save money.'",
        options: ["A. hand down", "B. cut down", "C. come down", "D. look down"],
        answer: 1,
        explain: "'cut down on' nghĩa là cắt giảm, giảm bớt số lượng tiêu thụ."
      },
      {
        q: "Từ nào có chứa nguyên âm đôi /eɪ/?",
        options: ["A. road", "B. town", "C. pavement", "D. round"],
        answer: 2,
        explain: "'pavement' /ˈpeɪvmənt/ chứa nguyên âm đôi /eɪ/. 'road' là /əʊ/, 'town' và 'round' là /aʊ/."
      },
      {
        q: "Khi ai đó nói: 'Shall I carry this luggage for you?', cách từ chối lịch sự là:",
        options: ["A. No, I don't like it.", "B. Thank you, but I can manage it myself.", "C. Yes, please do not.", "D. It is not your business."],
        answer: 1,
        explain: "'Thank you, but I can manage it myself' là lời từ chối khéo léo, vừa cảm ơn vừa khẳng định bản thân tự làm được."
      }
    ]
  },

  // UNIT 3: HEALTHY LIVING FOR TEENS
  {
    id: "unit-3",
    unit: "UNIT 3",
    theme: "OUR COMMUNITIES",
    title: "Healthy Living for Teens",
    focus: "Đời sống học đường, quản lí thời gian, cân bằng thể chất – tinh thần; Câu điều kiện loại 1 với động từ khuyết thiếu; Âm /h/ và /r/",
    color: "sky",
    vocab: [
      { word: "time management", type: "noun", ipa: "/taɪm ˈmænɪdʒmənt/", meaning: "kĩ năng quản lí thời gian", ex: "Good time management helps teens finish assignments without pulling all-nighters." },
      { word: "stress", type: "noun", ipa: "/stres/", meaning: "căng thẳng, áp lực tinh thần", ex: "High expectations before exams often cause severe stress among students." },
      { word: "priority", type: "noun", ipa: "/praɪˈɒrəti/", meaning: "sự ưu tiên, việc ưu tiên hàng đầu", ex: "You should give high priority to sleeping at least 8 hours every night." },
      { word: "procrastination", type: "noun", ipa: "/prəʊˌkræstɪˈneɪʃn/", meaning: "thói quen trì hoãn công việc", ex: "Procrastination is the biggest barrier to achieving academic goals." },
      { word: "well-balanced", type: "adjective", ipa: "/ˌwel ˈbælənst/", meaning: "cân bằng, hài hòa (chế độ ăn/lối sống)", ex: "A well-balanced diet must include plenty of green vegetables and protein." },
      { word: "counsellor", type: "noun", ipa: "/ˈkaʊnsələ/", meaning: "chuyên viên tư vấn tâm lí học đường", ex: "Whenever you feel overwhelmed, talking to the school counsellor can be very helpful." },
      { word: "physical health", type: "noun", ipa: "/ˈfɪzɪkl helθ/", meaning: "sức khỏe thể chất", ex: "Regular exercise is key to boosting your physical health and immune system." },
      { word: "mental health", type: "noun", ipa: "/ˈmentl helθ/", meaning: "sức khỏe tinh thần", ex: "Meditation and hobbies play an essential role in preserving mental health." },
      { word: "deadline", type: "noun", ipa: "/ˈdedlaɪn/", meaning: "hạn chót hoàn thành nhiệm vụ", ex: "Make sure you submit your science project two days before the deadline." },
      { word: "distraction", type: "noun", ipa: "/dɪˈstrækʃn/", meaning: "yếu tố gây xao nhãng, mất tập trung", ex: "Turning off phone notifications eliminates unnecessary distractions while studying." }
    ],
    pronunciation: {
      focus: "Phân biệt phụ âm /h/ và /r/",
      guide: "• /h/: âm vô thanh, đẩy luồng hơi nhẹ qua họng mở (healthy, habit, help, hospital).\n• /r/: âm hữu thanh, đầu lưỡi cong nhẹ về phía vòm họng, môi hơi tròn (rest, routine, priority, relax).",
      examples: [
        { word: "healthy", ipa: "/ˈhelθi/", note: "bắt đầu bằng âm /h/" },
        { word: "routine", ipa: "/ruːˈtiːn/", note: "bắt đầu bằng âm /r/" },
        { word: "habit", ipa: "/ˈhæbɪt/", note: "âm /h/ đầu từ" }
      ]
    },
    grammar: {
      topic: "First Conditional with Modal Verbs",
      rules: [
        "Mẫu cơ bản: If + S + V (hiện tại đơn), S + can / should / must / might / may + V-infinitive.",
        "Ý nghĩa: Dùng để đưa ra lời khuyên (should), nói về khả năng (can/might), sự bắt buộc (must) hoặc sự cho phép (may) khi điều kiện ở hiện tại/tương lai được thỏa mãn.",
        "KHÔNG dùng 'will' trong mệnh đề 'If' theo quy tắc chuẩn: If you plan... (ĐÚNG) | If you will plan... (SAI).",
        "Đảo vị trí hai mệnh đề: Nếu mệnh đề chính đứng trước mệnh đề 'If', không cần đặt dấu phẩy ở giữa.",
        "Unless = If ... not: Unless you manage your time well, you cannot meet deadlines."
      ],
      examples: [
        "If you want to stay energetic, you should exercise for 30 minutes every day.",
        "Students can achieve better results if they avoid procrastination.",
        "If you feel stressed, you must talk to your teachers or parents for support."
      ]
    },
    communication: {
      function: "Hỏi người khác nhắc lại và đáp lại (Asking for repetition and responding)",
      phrases: [
        { en: "Could you say that again, please? The line was breaking up.", vi: "Bạn có thể nói lại được không? Đường truyền vừa bị chập chờn.", type: "asking" },
        { en: "Pardon me? I didn't quite catch what you said about the assignment.", vi: "Xin lỗi bạn nói gì cơ? Mình chưa nghe kịp phần bài tập.", type: "asking" },
        { en: "Sure, let me repeat that for you.", vi: "Chắc chắn rồi, để mình nhắc lại cho bạn nhé.", type: "responding" },
        { en: "No problem. I was saying that the deadline is next Monday.", vi: "Không sao. Mình vừa bảo hạn chót là thứ Hai tuần sau.", type: "responding" }
      ]
    },
    skills: {
      reading: "Đọc bài viết chia sẻ kinh nghiệm của một thủ khoa về cách lập kế hoạch biểu tuần và cân bằng giữa việc học với thư giãn.",
      listening: "Nghe chuyên gia tâm lí học đường tư vấn các phương pháp xoa dịu áp lực trước kì thi chuyển cấp.",
      speaking: "Đóng vai buổi tư vấn giữa học sinh và chuyên viên tư vấn về việc khắc phục thói quen thức khuya lướt điện thoại.",
      writing: "Viết đoạn văn (100–120 từ) đề xuất 3 thói quen lành mạnh giúp học sinh lớp 9 nâng cao sức khỏe tinh thần."
    },
    project: {
      title: "Teen Wellness Survey (Khảo sát sức khỏe học đường)",
      task: "Thực hiện bảng khảo sát 10 bạn cùng lớp về: số giờ ngủ trung bình, tần suất tập thể dục, mức độ lo âu trước bài kiểm tra; phân tích số liệu và đề xuất thời gian biểu mẫu 'Study Smart – Live Well'."
    },
    quiz: [
      {
        q: "Chọn dạng đúng của động từ: 'If you want to stay focused, you ______ put away your smartphone.'",
        options: ["A. should", "B. would", "C. could to", "D. will be"],
        answer: 0,
        explain: "Câu điều kiện loại 1 đưa ra lời khuyên dùng 'should + V-inf'."
      },
      {
        q: "Từ 'procrastination' đồng nghĩa với hành vi nào sau đây?",
        options: ["A. hoàn thành bài tập sớm", "B. trì hoãn công việc đến phút chót", "C. tập thể thao đều đặn", "D. dậy sớm học bài"],
        answer: 1,
        explain: "'Procrastination' là thói quen lần lữa, trì hoãn công việc cần làm."
      },
      {
        q: "Từ nào có chứa phụ âm /r/?",
        options: ["A. healthy", "B. habit", "C. priority", "D. heavy"],
        answer: 2,
        explain: "'priority' /praɪˈɒrəti/ chứa âm /r/ sau âm /p/. Các từ còn lại bắt đầu bằng /h/."
      },
      {
        q: "Khi bạn chưa nghe rõ hướng dẫn của giáo viên, câu nào sau đây phù hợp nhất để nhờ cô nhắc lại?",
        options: ["A. What did you say?", "B. Could you please repeat that, teacher?", "C. Speak again!", "D. I don't care."],
        answer: 1,
        explain: "'Could you please repeat that, teacher?' là lời nhờ trang trọng, lịch sự và đúng chuẩn giao tiếp sư phạm."
      }
    ]
  },

  // REVIEW 1 (UNITS 1–3)
  {
    id: "review-1",
    unit: "REVIEW 1",
    theme: "OUR COMMUNITIES",
    title: "Review 1 (Units 1 - 3)",
    focus: "Hệ thống hóa Theme 1: Local Community, City Life, Healthy Living; Question word + to-V, Double comparatives, First conditional + modals; Âm /æ/, /ɑː/, /e/, nguyên âm đôi, /h/, /r/",
    color: "sky",
    vocab: [
      { word: "consolidate", type: "verb", ipa: "/kənˈsɒlɪdeɪt/", meaning: "củng cố, khắc sâu kiến thức", ex: "Review 1 helps students consolidate core grammar and vocabulary from Units 1 to 3." },
      { word: "civic duty", type: "noun", ipa: "/ˈsɪvɪk ˈdjuːti/", meaning: "nghĩa vụ công dân", ex: "Participating in local clean-up drives is an essential civic duty." },
      { word: "urbanization", type: "noun", ipa: "/ˌɜːbənaɪˈzeɪʃn/", meaning: "quá trình đô thị hóa", ex: "Rapid urbanization creates both great economic opportunities and social pressures." },
      { word: "work-life balance", type: "noun", ipa: "/ˌwɜːk laɪf ˈbæləns/", meaning: "sự cân bằng giữa công việc và đời sống", ex: "Achieving a healthy study-life balance is crucial for ninth graders." }
    ],
    grammar: {
      topic: "Review 1 Grammar Synthesis: Structures 1–3",
      rules: [
        "1. Question word + to-V: I don't know who to consult / what to do / how to solve this issue.",
        "2. Phrasal verbs: look around, hand down, get on with, cut down on, carry out, come down with.",
        "3. Double comparatives: The + comparative..., the + comparative... (The more we practice, the better we speak) & comparative and comparative (busier and busier).",
        "4. First conditional with modals: If + present simple, S + can/should/must + V-inf."
      ],
      examples: [
        "The more crowded the subway gets, the harder it is to find a seat.",
        "If you don't cut down on screen time, you might suffer from severe eye strain.",
        "My grandmother handed down this antique silk scarf to my mother."
      ]
    },
    communication: {
      function: "Tổng hợp giao tiếp Theme 1",
      phrases: [
        { en: "Could you give me a hand? — Sure, I'd be happy to help.", vi: "Xin giúp đỡ và đáp lại (Unit 1)", type: "review" },
        { en: "Shall I help you with this map? — Thank you, that's very kind.", vi: "Đề nghị giúp đỡ và đáp lại (Unit 2)", type: "review" },
        { en: "Could you say that again, please? — Of course, I said...", vi: "Nhờ nhắc lại và đáp lại (Unit 3)", type: "review" }
      ]
    },
    skills: {
      reading: "Đọc hiểu tổng hợp về sự chuyển mình của các làng nghề truyền thống trong bối cảnh các đô thị hiện đại thông minh.",
      listening: "Nghe bản tin tổng hợp về phong trào 'Thanh thiếu niên vì một cộng đồng xanh và khỏe mạnh'.",
      speaking: "Thuyết trình tổng kết 3 giải pháp cải thiện môi trường sống và sức khỏe học sinh tại trường học.",
      writing: "Viết thư điện tử (email) tư vấn cho một người bạn cách vượt qua căng thẳng và quản lí thời gian biểu khoa học."
    },
    quiz: [
      {
        q: "Chọn câu đúng ngữ pháp:",
        options: [
          "A. The higher the mountain is, the colder the air becomes.",
          "B. The more high the mountain is, the more cold the air becomes.",
          "C. The highest the mountain is, the coldest the air becomes.",
          "D. The high the mountain is, the cold the air becomes."
        ],
        answer: 0,
        explain: "Với tính từ ngắn 'high' và 'cold', so sánh kép là: The higher..., the colder..."
      },
      {
        q: "'She told me how ______ the traditional conical hat.'",
        options: ["A. make", "B. to make", "C. making", "D. made"],
        answer: 1,
        explain: "Cấu trúc từ để hỏi + to-infinitive: 'how to make'."
      },
      {
        q: "Nếu bạn muốn khuyên ai đó đi khám bệnh khi bị sốt:",
        options: [
          "A. If you have a fever, you should see a doctor.",
          "B. If you will have a fever, you should see a doctor.",
          "C. If you have a fever, you would see a doctor.",
          "D. If you had a fever, you must saw a doctor."
        ],
        answer: 0,
        explain: "Câu điều kiện loại 1 với lời khuyên: If + hiện tại đơn, S + should + V-inf."
      },
      {
        q: "Cụm động từ nào mang nghĩa 'thực hiện' (cuộc khảo sát/nghiên cứu)?",
        options: ["A. hand down", "B. carry out", "C. come down with", "D. look around"],
        answer: 1,
        explain: "'carry out' nghĩa là tiến hành, thực thi (ví dụ: carry out a project/survey)."
      }
    ]
  },

  // ==========================================
  // THEME 2: OUR HERITAGE
  // ==========================================

  // UNIT 4: REMEMBERING THE PAST
  {
    id: "unit-4",
    unit: "UNIT 4",
    theme: "OUR HERITAGE",
    title: "Remembering the Past",
    focus: "Cuộc sống xưa, phong tục, ẩm thực & trường học truyền thống; Thì Quá khứ tiếp diễn (Past Continuous); Cấu trúc Wish + Quá khứ đơn; Phụ âm /m/ và /l/",
    color: "rose",
    vocab: [
      { word: "tradition", type: "noun", ipa: "/trəˈdɪʃn/", meaning: "truyền thống, phong tục tập quán", ex: "It is an age-old tradition in Vietnam to gather for family meals during Tet." },
      { word: "custom", type: "noun", ipa: "/ˈkʌstəm/", meaning: "tập quán, thói quen lâu đời của cộng đồng", ex: "Wearing Ao Dai on special occasions is a cherished cultural custom." },
      { word: "pastime", type: "noun", ipa: "/ˈpɑːstaɪm/", meaning: "trò tiêu khiển, thú vui giải trí ngày xưa", ex: "Flying kites and playing tug-of-war were popular pastimes for rural children." },
      { word: "extended family", type: "noun", ipa: "/ɪkˈstendɪd ˈfæməli/", meaning: "gia đình nhiều thế hệ (đại gia đình)", ex: "In the past, most Vietnamese people lived in extended families under one roof." },
      { word: "nuclear family", type: "noun", ipa: "/ˌnjuːkliə ˈfæməli/", meaning: "gia đình hạt nhân (chỉ gồm bố mẹ và con cái)", ex: "Today, nuclear families are becoming much more prevalent in metropolitan areas." },
      { word: "preserve", type: "verb", ipa: "/prɪˈzɜːv/", meaning: "gìn giữ, lưu giữ nét đẹp quá khứ", ex: "We need stricter policies to preserve historical landmarks." },
      { word: "generation", type: "noun", ipa: "/ˌdʒenəˈreɪʃn/", meaning: "thế hệ", ex: "There is sometimes a generation gap between grandparents and teenagers." },
      { word: "memorise", type: "verb", ipa: "/ˈmeməraɪz/", meaning: "ghi nhớ, học thuộc lòng", ex: "Students in old classrooms had to memorise lengthy literary texts." },
      { word: "wooden blackboard", type: "noun", ipa: "/ˈwʊdn ˈblækbɔːd/", meaning: "bảng đen bằng gỗ phấn trắng thời xưa", ex: "The ancient classroom featured a rustic wooden blackboard and oil lamps." },
      { word: "street vendor", type: "noun", ipa: "/striːt ˈvendə/", meaning: "người bán hàng rong", ex: "Street vendors with shoulder poles are an unforgettable memory of old Hanoi." }
    ],
    pronunciation: {
      focus: "Phân biệt phụ âm /m/ và /l/",
      guide: "• /m/: âm môi - môi khép kín, luồng hơi thoát ra qua khoang mũi (memory, memorise, custom, family).\n• /l/: đầu lưỡi chạm vào lợi phía sau răng cửa hàm trên, hơi thoát ra hai bên lưỡi (life, lantern, old, cultural).",
      examples: [
        { word: "memory", ipa: "/ˈmeməri/", note: "chứa hai âm /m/" },
        { word: "cultural", ipa: "/ˈkʌltʃərəl/", note: "chứa hai âm /l/" },
        { word: "lamp", ipa: "/læmp/", note: "bắt đầu bằng /l/ và kết thúc bằng /m/" }
      ]
    },
    grammar: {
      topic: "Past Continuous & Wish for the Present",
      rules: [
        "1. Quá khứ tiếp diễn (Past Continuous): S + was / were + V-ing.",
        "Dùng để diễn tả: (a) Hành động đang diễn ra tại một thời điểm xác định trong quá khứ (At 8 p.m. yesterday, I was studying); (b) Hai hành động diễn ra song song (While my mother was cooking, my father was reading); (c) Hành động đang diễn ra thì một hành động ngắn khác cắt ngang (I was walking home when it began to rain).",
        "2. Cấu trúc Wish + Quá khứ đơn (Wish for the present): S + wish(es) + S + V-past / could + V-inf.",
        "Dùng để diễn tả ước muốn trái ngược với thực tế ở hiện tại hoặc khó có thể xảy ra.",
        "Lưu ý: Với động từ 'to be', trong văn phong chuẩn học thuật thường dùng 'were' cho tất cả các ngôi (I wish I were..., He wishes he were...)."
      ],
      examples: [
        "At this time fifty years ago, children were playing folk games in the village yard.",
        "I was listening to my grandfather's story when the power went out.",
        "I wish our village still had the old communal banyan tree.",
        "She wishes she could experience a school day in the 19th century."
      ]
    },
    communication: {
      function: "Cảm ơn và đáp lại (Thanking and responding)",
      phrases: [
        { en: "Thank you so much for sharing your childhood memories with us.", vi: "Cháu cảm ơn ông rất nhiều vì đã chia sẻ những kỉ niệm tuổi thơ.", type: "thanking" },
        { en: "I really appreciate your helping me research our local history.", vi: "Em rất trân trọng sự giúp đỡ của thầy khi nghiên cứu lịch sử địa phương.", type: "thanking" },
        { en: "You're very welcome. It was my pleasure.", vi: "Không có chi. Đó là niềm vui của tôi mà.", type: "responding" },
        { en: "Don't mention it. I'm glad you found it interesting.", vi: "Đừng bận tâm. Tôi rất vui vì bạn thấy nó thú vị.", type: "responding" }
      ]
    },
    skills: {
      reading: "Đọc bài viết về cách người dân nước Anh lưu giữ các công thức làm bánh mì và món ăn truyền thống gia đình.",
      listening: "Nghe lời kể của một cựu học sinh về lớp học lợp mái lá và tình thầy trò sâu nặng trong những năm tháng kháng chiến.",
      speaking: "Kể về một phong tục cổ truyền trong gia đình em (như gói bánh chưng, cúng giao thừa) và ý nghĩa của nó.",
      writing: "Viết đoạn văn (100–120 từ) chia sẻ một nét văn hóa xưa mà em mong muốn tiếp tục được bảo tồn trong nhịp sống hiện đại."
    },
    project: {
      title: "Preserving Ancient Footprints (Dấu ấn xưa)",
      task: "Sưu tầm hình ảnh hoặc hiện vật về trường học/sinh hoạt xưa (bút máy chấm mực, đèn dầu, cặp sách vải); phỏng vấn ông bà và dựng thành một album ảnh 'Kí ức thời gian'."
    },
    quiz: [
      {
        q: "Chọn câu đúng: 'While they ______ folk games, it suddenly ______ to rain.'",
        options: ["A. were playing / started", "B. played / was starting", "C. was playing / started", "D. were playing / was starting"],
        answer: 0,
        explain: "Hành động đang diễn ra trong quá khứ dùng quá khứ tiếp diễn ('were playing'), hành động cắt ngang dùng quá khứ đơn ('started')."
      },
      {
        q: "Chuyển câu sau sang câu ước: 'I don't have enough time to visit my grandparents often.'",
        options: [
          "A. I wish I have enough time to visit my grandparents often.",
          "B. I wish I had enough time to visit my grandparents often.",
          "C. I wish I will have enough time to visit my grandparents often.",
          "D. I wish I am having enough time to visit my grandparents often."
        ],
        answer: 1,
        explain: "Ước muốn trái ngược với hiện tại lùi thì về quá khứ đơn: 'don't have' -> 'had'."
      },
      {
        q: "Từ nào sau đây chứa âm /m/?",
        options: ["A. lantern", "B. memorise", "C. folk", "D. old"],
        answer: 1,
        explain: "'memorise' /ˈmeməraɪz/ chứa hai âm /m/."
      },
      {
        q: "Khi ai đó nói: 'Thank you for your valuable guidance!', câu đáp lại phù hợp là:",
        options: ["A. You are welcome.", "B. Yes, I do.", "C. Good luck!", "D. I don't think so."],
        answer: 0,
        explain: "'You are welcome' (Không có gì) là lời đáp lại chuẩn mực cho lời cảm ơn."
      }
    ]
  },

  // UNIT 5: OUR EXPERIENCES
  {
    id: "unit-5",
    unit: "UNIT 5",
    theme: "OUR HERITAGE",
    title: "Our Experiences",
    focus: "Trải nghiệm học tập, khóa hè, vượt thử thách & cảm xúc; Thì Hiện tại hoàn thành (Present Perfect); Phụ âm /j/ và /w/",
    color: "rose",
    vocab: [
      { word: "experience", type: "noun/verb", ipa: "/ɪkˈspɪəriəns/", meaning: "trải nghiệm, kinh nghiệm / nếm trải", ex: "Attending the leadership summer camp was an unforgettable experience." },
      { word: "unforgettable", type: "adjective", ipa: "/ˌʌnfəˈɡetəbl/", meaning: "không thể nào quên", ex: "Watching the sunrise on top of Fansipan mountain was an unforgettable moment." },
      { word: "challenging", type: "adjective", ipa: "/ˈtʃælɪndʒɪŋ/", meaning: "đầy thách thức, cam go", ex: "Kayaking through the rocky rapids proved to be a challenging task." },
      { word: "embarrassing", type: "adjective", ipa: "/ɪmˈbærəsɪŋ/", meaning: "ngượng ngùng, xấu hổ", ex: "Calling my teacher by my mother's name was quite an embarrassing mistake." },
      { word: "summer camp", type: "noun", ipa: "/ˈsʌmə kæmp/", meaning: "trại hè thanh thiếu niên", ex: "At the summer camp, teens learn survival skills and team cooperation." },
      { word: "survival skill", type: "noun", ipa: "/səˈvaɪvl skɪl/", meaning: "kĩ năng sinh tồn", ex: "Knowing how to purify water and pitch a tent are essential survival skills." },
      { word: "overcome", type: "verb", ipa: "/ˌəʊvəˈkʌm/", meaning: "vượt qua (nỗi sợ, khó khăn)", ex: "She managed to overcome her stage fright and delivered an inspiring speech." },
      { word: "thrilling", type: "adjective", ipa: "/ˈθrɪlɪŋ/", meaning: "hồi hộp, phấn khích tột độ", ex: "Riding the roller coaster at the theme park was a thrilling experience." },
      { word: "accomplishment", type: "noun", ipa: "/əˈkʌmplɪʃmənt/", meaning: "thành tựu, sự hoàn thành xuất sắc", ex: "Finishing the 10-kilometer marathon gave him a huge sense of accomplishment." },
      { word: "disappointed", type: "adjective", ipa: "/ˌdɪsəˈpɔɪntɪd/", meaning: "thất vọng", ex: "We were slightly disappointed because the weather ruined our outdoor picnic." }
    ],
    pronunciation: {
      focus: "Phân biệt phụ âm /j/ và /w/",
      guide: "• /j/: âm bán nguyên âm, cuống lưỡi nâng cao về phía vòm họng mềm, không chạm môi (yes, youth, year, yellow, uniform).\n• /w/: âm môi - hai môi chu tròn ra trước rồi mở rộng khi luồng hơi bật ra (water, win, wood, wonderful, world).",
      examples: [
        { word: "youth", ipa: "/juːθ/", note: "bắt đầu bằng âm /j/" },
        { word: "wonderful", ipa: "/ˈwʌndəfl/", note: "bắt đầu bằng âm /w/" },
        { word: "year", ipa: "/jɪə/", note: "phát âm với /j/, khác với 'ear' /ɪə/" }
      ]
    },
    grammar: {
      topic: "The Present Perfect Tense (Thì Hiện tại hoàn thành)",
      rules: [
        "1. Công thức: Khẳng định: S + have / has + V3/ed | Phủ định: S + haven't / hasn't + V3/ed | Nghi vấn: Have / Has + S + V3/ed?",
        "2. Cách dùng trọng tâm trong Unit 5: (a) Kể về trải nghiệm tính đến thời điểm hiện tại (không nêu mốc thời gian cụ thể): I have visited Da Nang twice; (b) Hành động vừa mới xảy ra: She has just finished her test; (c) Hành động bắt đầu trong quá khứ và còn tiếp diễn đến hiện tại (đi với since / for): We have lived here for ten years.",
        "3. Dấu hiệu nhận biết: ever (đã từng), never (chưa bao giờ), just (vừa mới), already (đã... rồi), yet (chưa - dùng trong câu phủ định và nghi vấn), recently, so far, since + mốc, for + khoảng.",
        "4. Phân biệt với Quá khứ đơn: Nếu có mốc thời gian chấm dứt trong quá khứ (yesterday, last year, in 2020, ago) thì BẮT BUỘC dùng Quá khứ đơn, KHÔNG dùng Hiện tại hoàn thành."
      ],
      examples: [
        "Have you ever joined a volunteer summer camp? — No, I have never tried it.",
        "She has already climbed the highest peak in Ba Vi National Park.",
        "They haven't announced the competition results yet."
      ]
    },
    communication: {
      function: "Xin lỗi và đáp lại (Apologising and responding)",
      phrases: [
        { en: "I'm terribly sorry for arriving late. The traffic was awful.", vi: "Mình vô cùng xin lỗi vì đến muộn. Giao thông hôm nay tệ quá.", type: "apologising" },
        { en: "I apologise for forgetting to bring your book back.", vi: "Tớ thành thật xin lỗi vì quên mang trả sách cho cậu.", type: "apologising" },
        { en: "That's quite all right. Don't worry about it.", vi: "Không sao đâu mà. Bạn đừng bận tâm nhé.", type: "responding" },
        { en: "Never mind. Just remember to bring it tomorrow.", vi: "Không sao đâu. Nhớ mang vào ngày mai là được rồi.", type: "responding" }
      ]
    },
    skills: {
      reading: "Đọc hồi kí của ba bạn học sinh về những trải nghiệm đáng nhớ trong các chuyến đi dã ngoại và hoạt động thiện nguyện.",
      listening: "Nghe câu chuyện chia sẻ về một sự cố đáng xấu hổ nhưng đem lại bài học đắt giá tại trường học.",
      speaking: "Phỏng vấn bạn cùng lớp về những điều bạn ấy đã từng làm hoặc chưa bao giờ làm ('Have you ever...?').",
      writing: "Viết đoạn văn (100–120 từ) kể lại một trải nghiệm đáng nhớ nhất (tích cực hoặc thử thách) mà em từng trải qua."
    },
    project: {
      title: "Our Bucket List & Experience Map",
      task: "Lập sơ đồ tư duy 'Trải nghiệm tuổi trẻ': 5 điều cả nhóm đã từng làm và 5 trải nghiệm muốn chinh phục trước khi tốt nghiệp THCS."
    },
    quiz: [
      {
        q: "Điền dạng đúng của động từ: '______ you ever ______ bungee jumping?'",
        options: ["A. Did / try", "B. Have / tried", "C. Were / trying", "D. Do / try"],
        answer: 1,
        explain: "Hỏi về trải nghiệm với 'ever' dùng thì Hiện tại hoàn thành: 'Have you ever tried'."
      },
      {
        q: "Chọn từ điền vào chỗ trống: 'I haven't completed my English assignment ______.'",
        options: ["A. already", "B. just", "C. yet", "D. ever"],
        answer: 2,
        explain: "'yet' đứng ở cuối câu phủ định trong thì Hiện tại hoàn thành để diễn tả việc 'chưa làm'."
      },
      {
        q: "Từ nào bắt đầu bằng âm /j/?",
        options: ["A. wonderful", "B. youth", "C. winter", "D. world"],
        answer: 1,
        explain: "'youth' /juːθ/ bắt đầu bằng phụ âm /j/. Các từ còn lại bắt đầu bằng /w/."
      },
      {
        q: "Khi bạn vô tình làm rơi bút của bạn mình, câu xin lỗi nào tự nhiên và đúng nhất?",
        options: [
          "A. I'm sorry for dropping your pen.",
          "B. You are welcome.",
          "C. Don't mention it.",
          "D. I apologize that you dropped it."
        ],
        answer: 0,
        explain: "'I'm sorry for dropping your pen' là lời xin lỗi trực tiếp, chân thành."
      }
    ]
  },

  // UNIT 6: VIETNAMESE LIFESTYLE: THEN AND NOW
  {
    id: "unit-6",
    unit: "UNIT 6",
    theme: "OUR HERITAGE",
    title: "Vietnamese Lifestyle: Then and Now",
    focus: "Sự thay đổi lối sống, học tập, giao thông & nhà ở xưa và nay; Động từ theo sau bởi To-V hoặc V-ing; Cụm phụ âm /fl/ và /fr/",
    color: "rose",
    vocab: [
      { word: "thatched house", type: "noun", ipa: "/θætʃt haʊs/", meaning: "nhà tranh mái lá", ex: "Decades ago, most villagers lived in humble thatched houses made of mud and straw." },
      { word: "tiled roof", type: "noun", ipa: "/taɪld ruːf/", meaning: "mái nhà lợp ngói đỏ", ex: "Only wealthy landlords could afford houses with sturdy tiled roofs in the old days." },
      { word: "e-learning", type: "noun", ipa: "/ˈiː lɜːnɪŋ/", meaning: "học trực tuyến trên nền tảng số", ex: "E-learning allows students to access rich study materials anytime and anywhere." },
      { word: "convenience", type: "noun", ipa: "/kənˈviːniəns/", meaning: "sự tiện nghi, thuận lợi", ex: "Modern electrical appliances bring immense convenience to daily household chores." },
      { word: "commute", type: "verb", ipa: "/kəˈmjuːt/", meaning: "đi lại hàng ngày (giữa nhà và trường/nơi làm việc)", ex: "People used to walk on foot, but now they commute by motorbikes or electric buses." },
      { word: "face-to-face", type: "adjective", ipa: "/ˌfeɪs tə ˈfeɪs/", meaning: "trực tiếp, mặt đối mặt", ex: "Nothing can replace genuine face-to-face interactions among family members." },
      { word: "transformation", type: "noun", ipa: "/ˌtrænsfəˈmeɪʃn/", meaning: "sự biến đổi to lớn, lột xác", ex: "Vietnam has witnessed an incredible socio-economic transformation over the past thirty years." },
      { word: "preserve", type: "verb", ipa: "/prɪˈzɜːv/", meaning: "bảo tồn, giữ gìn bản sắc", ex: "Despite modernization, we must preserve our warm family bonds and respect for elders." },
      { word: "traditional games", type: "noun", ipa: "/trəˈdɪʃənl ɡeɪmz/", meaning: "các trò chơi dân gian (ô ăn quan, nhảy dây)", ex: "Children today spend more time on video games than on traditional games." },
      { word: "household chores", type: "noun", ipa: "/ˈhaʊshəʊld tʃɔːz/", meaning: "công việc vặt trong nhà", ex: "Dishwashers and washing machines have drastically reduced the time spent on household chores." }
    ],
    pronunciation: {
      focus: "Cụm phụ âm đầu /fl/ và /fr/",
      guide: "• /fl/: môi dưới chạm răng trên (/f/) rồi lướt nhanh sang âm /l/ (flag, fly, flight, flood, flat).\n• /fr/: môi dưới chạm răng trên (/f/) rồi uốn nhẹ lưỡi phát âm /r/ (friend, fresh, fruit, frame, from).",
      examples: [
        { word: "flat", ipa: "/flæt/", note: "chứa cụm phụ âm /fl/" },
        { word: "friend", ipa: "/frend/", note: "chứa cụm phụ âm /fr/" },
        { word: "fruit", ipa: "/fruːt/", note: "chứa cụm phụ âm /fr/" }
      ]
    },
    grammar: {
      topic: "Verbs Followed by To-Infinitive or V-ing (Động từ đi với To-V hoặc V-ing)",
      rules: [
        "1. Động từ theo sau bởi To-Infinitive (To-V): Thường diễn tả dự định, mong ước, quyết định hoặc cố gắng trong tương lai. Nhóm phổ biến: want, hope, decide, plan, promise, agree, refuse, manage, expect, offer + to-V. (Ví dụ: She decided to study abroad; They promised to visit us).",
        "2. Động từ theo sau bởi Gerund (V-ing): Thường diễn tả sở thích, sự tránh né, thừa nhận hoặc gợi ý. Nhóm phổ biến: enjoy, avoid, suggest, consider, practice, finish, mind, admit, delay + V-ing. (Ví dụ: He enjoys cycling; Avoid eating fast food).",
        "3. Động từ đi được với cả hai nhưng đổi nghĩa:",
        "• remember to do (nhớ phải làm gì) vs. remember doing (nhớ đã làm gì trong quá khứ).",
        "• forget to do (quên phải làm gì) vs. forget doing (quên việc đã từng làm).",
        "• stop to do (dừng lại để làm việc khác) vs. stop doing (dừng hẳn việc đang làm).",
        "• try to do (cố gắng làm gì) vs. try doing (thử nghiệm làm gì xem kết quả thế nào)."
      ],
      examples: [
        "My grandfather remembers riding a bicycle 20 kilometers to school every day.",
        "They stopped to buy some street food on their way home.",
        "Doctors advise people to stop smoking to protect their lungs.",
        "We decided to organize a traditional game festival at school."
      ]
    },
    communication: {
      function: "Hứa hẹn và đáp lại (Making promises and responding)",
      phrases: [
        { en: "I promise I will help you practice speaking English every evening.", vi: "Mình hứa sẽ giúp bạn luyện nói tiếng Anh mỗi tối.", type: "promising" },
        { en: "I give you my word that I won't tell anyone your secret.", vi: "Tớ lấy danh dự cam đoan sẽ không hé răng với ai về bí mật của cậu.", type: "promising" },
        { en: "I hope you will keep your promise.", vi: "Mình hi vọng bạn sẽ giữ đúng lời hứa nhé.", type: "responding" },
        { en: "Thanks, I trust you completely.", vi: "Cảm ơn bạn, mình hoàn toàn tin tưởng bạn.", type: "responding" }
      ]
    },
    skills: {
      reading: "Đọc bài viết phân tích những nét đổi thay trong phương thức học tập của học sinh Việt Nam qua ba thế hệ: thời bao cấp, đổi mới và kỉ nguyên số.",
      listening: "Nghe cuộc trò chuyện giữa một bà cụ và cháu gái về thói quen mua sắm ngày xưa (chợ phiên) và ngày nay (mua sắm online).",
      speaking: "Thảo luận về lợi ích và mặt trái của công nghệ số đối với mối quan hệ giữa các thành viên trong gia đình.",
      writing: "Viết email (100–120 từ) gửi cho một người bạn nước ngoài kể về sự đổi thay kì diệu tại quê hương em trong mười năm qua."
    },
    project: {
      title: "Family Memoir: Then and Now (Kí ức gia đình xưa và nay)",
      task: "Thực hiện bài phỏng vấn ba thế hệ trong gia đình (ông bà, bố mẹ, bản thân) về 3 khía cạnh: phương tiện đi lại, cách liên lạc và cách giải trí; tổng hợp thành infographic so sánh."
    },
    quiz: [
      {
        q: "Chọn dạng đúng của động từ: 'He decided ______ a new laptop for his online courses.'",
        options: ["A. buy", "B. to buy", "C. buying", "D. bought"],
        answer: 1,
        explain: "Động từ 'decide' luôn đi kèm với to-infinitive: 'decided to buy'."
      },
      {
        q: "Phân biệt nghĩa: 'On the way to school, Nam stopped ______ a loaf of bread.'",
        options: ["A. buying", "B. to buy", "C. buy", "D. bought"],
        answer: 1,
        explain: "'stop to do sth' là dừng lại giữa chừng để làm một việc khác (dừng lại để mua bánh mì)."
      },
      {
        q: "Từ nào bắt đầu bằng cụm phụ âm /fl/?",
        options: ["A. friend", "B. fruit", "C. flat", "D. from"],
        answer: 2,
        explain: "'flat' bắt đầu bằng /fl/. 'friend', 'fruit', 'from' đều bắt đầu bằng /fr/."
      },
      {
        q: "Đáp lại lời hứa 'I promise I will never be late for class again':",
        options: [
          "A. I hope you will keep your word.",
          "B. Never mind.",
          "C. That sounds dangerous.",
          "D. Good luck to you."
        ],
        answer: 0,
        explain: "'I hope you will keep your word' (Hi vọng bạn giữ lời) là câu phản hồi tự nhiên và xác đáng nhất."
      }
    ]
  },

  // REVIEW 2 (UNITS 4–6)
  {
    id: "review-2",
    unit: "REVIEW 2",
    theme: "OUR HERITAGE",
    title: "Review 2 (Units 4 - 6)",
    focus: "Hệ thống hóa Theme 2: Remembering the Past, Our Experiences, Vietnamese Lifestyle; Past continuous, Wish for present, Present perfect, Verbs + to-V/V-ing; Âm /m/, /l/, /j/, /w/, /fl/, /fr/",
    color: "rose",
    vocab: [
      { word: "heritage", type: "noun", ipa: "/ˈherɪtɪdʒ/", meaning: "di sản văn hóa quý báu", ex: "Theme 2 helps students explore and appreciate Vietnam's cultural heritage." },
      { word: "nostalgia", type: "noun", ipa: "/nɒˈstældʒə/", meaning: "hoài niệm, nỗi nhớ về quá khứ", ex: "Looking at vintage black-and-white photographs always evokes a sense of nostalgia." },
      { word: "modernisation", type: "noun", ipa: "/ˌmɒdnaɪˈzeɪʃn/", meaning: "quá trình hiện đại hóa", ex: "Modernisation should go hand in hand with preserving traditional customs." },
      { word: "solidarity", type: "noun", ipa: "/ˌsɒlɪˈdærəti/", meaning: "tinh thần đoàn kết, gắn bó", ex: "Family solidarity has remained the backbone of Vietnamese society for centuries." }
    ],
    grammar: {
      topic: "Review 2 Grammar Synthesis: Structures 4–6",
      rules: [
        "1. Past Continuous: was/were + V-ing (kết hợp với When/While).",
        "2. Wish + Past Simple: S + wish(es) + S + V-past / were / could + V-inf.",
        "3. Present Perfect: have/has + V3/ed với ever, never, just, already, yet, since, for.",
        "4. Verb Patterns: want/decide/promise + to-V vs. enjoy/avoid/suggest + V-ing vs. stop/remember/try + to-V/V-ing (đổi nghĩa)."
      ],
      examples: [
        "While my father was fixing the radio, I was reading an old comic book.",
        "I wish our school had an open-air historical museum.",
        "She has lived in this quiet alley since she was born.",
        "Remember to turn off the fans before leaving the classroom."
      ]
    },
    communication: {
      function: "Tổng hợp giao tiếp Theme 2",
      phrases: [
        { en: "Thank you for showing me around. — You're very welcome.", vi: "Cảm ơn và đáp lại (Unit 4)", type: "review" },
        { en: "I'm sorry for breaking the vase. — Don't worry about it.", vi: "Xin lỗi và đáp lại (Unit 5)", type: "review" },
        { en: "I promise I will finish it. — I trust you completely.", vi: "Hứa hẹn và đáp lại (Unit 6)", type: "review" }
      ]
    },
    skills: {
      reading: "Đọc bài luận phân tích sự hài hòa giữa việc phát huy di sản quá khứ và ứng dụng các tiện ích công nghệ hiện đại.",
      listening: "Nghe bài phát biểu của đại diện UNESCO về giá trị của các di sản phi vật thể tại Việt Nam.",
      speaking: "Tranh biện về chủ đề: 'Nên ưu tiên xây dựng các tòa nhà chọc trời hay bảo tồn các dãy phố cổ truyền thống?'.",
      writing: "Viết bài văn ngắn (120–150 từ) về một nét đẹp trong lối sống truyền thống của người Việt mà em tự hào nhất."
    },
    quiz: [
      {
        q: "Chọn câu đúng: 'Lan ______ in Hue for five years before moving to Da Nang last month.'",
        options: ["A. has lived", "B. lived", "C. was living", "D. lives"],
        answer: 1,
        explain: "Vì sự việc đã hoàn toàn chấm dứt trong quá khứ ('before moving... last month'), ta dùng thì Quá khứ đơn 'lived'."
      },
      {
        q: "Tìm lỗi sai trong câu: 'I wish I can speak three foreign languages fluently.'",
        options: ["A. wish", "B. can", "C. foreign", "D. fluently"],
        answer: 1,
        explain: "Cấu trúc ước ở hiện tại phải lùi thì: 'can' sửa thành 'could'."
      },
      {
        q: "Động từ nào sau đây luôn đi với danh động từ (V-ing)?",
        options: ["A. decide", "B. refuse", "C. avoid", "D. hope"],
        answer: 2,
        explain: "'avoid + V-ing' (tránh làm gì). 'decide', 'refuse', 'hope' đều đi với to-infinitive."
      },
      {
        q: "Cặp từ nào sau đây minh họa chính xác cho sự phân biệt /fl/ và /fr/?",
        options: ["A. flight / fresh", "B. cat / cart", "C. hat / rat", "D. town / road"],
        answer: 0,
        explain: "'flight' chứa cụm /fl/, 'fresh' chứa cụm /fr/."
      }
    ]
  }
];

module.exports = { theme1And2Data };
