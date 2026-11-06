// tienganh8_exam.js
// Bộ 40 câu hỏi trắc nghiệm Đấu trường Trạng Nguyên Tiếng Anh 8 (60:00)
// Chuẩn chương trình SGK Global Success 8 - Bộ Giáo Dục & Đào Tạo

const examQuestions = [
  // ==========================================
  // PHONETICS & PRONUNCIATION (Questions 1 - 8)
  // ==========================================
  {
    q: "Choose the word whose underlined part is pronounced as /uː/ (long vowel):",
    options: ["A. look", "B. book", "C. school", "D. foot"],
    answer: 2,
    explain: "'school' phát âm là /skuːl/ chứa âm /uː/ dài. Các từ 'look /lʊk/', 'book /bʊk/', 'foot /fʊt/' đều chứa âm /ʊ/ ngắn."
  },
  {
    q: "Which word has the underlined part pronounced as /ə/ instead of /ɪ/?",
    options: ["A. village", "B. cottage", "C. canal", "D. harvest"],
    answer: 2,
    explain: "'canal' phát âm là /kəˈnæl/ có âm đầu là schwa /ə/. Các từ 'village /ˈvɪlɪdʒ/', 'cottage /ˈkɒtɪdʒ/', 'harvest /ˈhɑːvɪst/' đều chứa âm /ɪ/."
  },
  {
    q: "Which word contains the diphthong sound /ʊə/?",
    options: ["A. choice", "B. tour", "C. boy", "D. voice"],
    answer: 1,
    explain: "'tour' phát âm là /tʊə/ chứa nguyên âm đôi /ʊə/. Các từ 'choice, boy, voice' đều chứa nguyên âm đôi /ɔɪ/."
  },
  {
    q: "Identify the word that begins with the voiced consonant /g/:",
    options: ["A. costume", "B. gong", "C. kitchen", "D. craft"],
    answer: 1,
    explain: "'gong' phát âm là /ɡɒŋ/ bắt đầu bằng âm hữu thanh /g/. Các từ còn lại bắt đầu bằng âm vô thanh /k/."
  },
  {
    q: "Which word contains the voiceless dental sound /θ/?",
    options: ["A. tradition", "B. reunion", "C. thank", "D. nomadic"],
    answer: 2,
    explain: "'thank' phát âm là /θæŋk/ chứa âm /θ/. Các từ còn lại chứa âm mũi /n/."
  },
  {
    q: "Which word starts with the consonant cluster /pr/?",
    options: ["A. brave", "B. bread", "C. practice", "D. bridge"],
    answer: 2,
    explain: "'practice' phát âm là /ˈpræktɪs/ bắt đầu bằng cụm /pr/. Các từ 'brave, bread, bridge' bắt đầu bằng cụm /br/."
  },
  {
    q: "Which word has the primary stress on the first syllable?",
    options: ["A. disastrous", "B. dangerous", "C. electric", "D. Vietnamese"],
    answer: 1,
    explain: "'dangerous' có trọng âm rơi vào âm tiết thứ nhất: /ˈdeɪndʒərəs/. 'disastrous' và 'electric' trọng âm âm 2; 'Vietnamese' trọng âm âm 3."
  },
  {
    q: "Which word ending in '-ee' has its stress on the final syllable?",
    options: ["A. coffee", "B. trainee", "C. committee", "D. toffee"],
    answer: 1,
    explain: "'trainee' phát âm là /ˌtreɪˈniː/ có trọng âm ở âm tiết cuối theo quy tắc hậu tố -ee. 'coffee' và 'committee' là các ngoại lệ quen thuộc."
  },

  // ==========================================
  // GRAMMAR & SENTENCE STRUCTURE (Questions 9 - 22)
  // ==========================================
  {
    q: "Choose the correct verb form: 'Do you fancy _______ paper flowers with me this afternoon?'",
    options: ["A. to make", "B. making", "C. make", "D. made"],
    answer: 1,
    explain: "Sau động từ 'fancy' luôn đi kèm danh động từ (V-ing): fancy making something."
  },
  {
    q: "Complete the sentence: 'Nam is very keen _______ playing chess with his grandfather.'",
    options: ["A. in", "B. at", "C. on", "D. about"],
    answer: 2,
    explain: "Cấu trúc tính từ cố định: be keen on + N/V-ing (say mê, hào hứng với cái gì)."
  },
  {
    q: "Select the correct comparative adverb: 'A combine harvester works _______ than a group of manual reapers.'",
    options: ["A. more fast", "B. faster", "C. more fastly", "D. fastly"],
    answer: 1,
    explain: "'fast' vừa là tính từ vừa là trạng từ ngắn. Dạng so sánh hơn là 'faster than'."
  },
  {
    q: "Choose the irregular comparative adverb: 'Hoa speaks English _______ than anyone else in her village.'",
    options: ["A. weller", "B. more well", "C. better", "D. best"],
    answer: 2,
    explain: "Trạng từ 'well' có dạng so sánh hơn bất quy tắc là 'better than'."
  },
  {
    q: "Identify the sentence type: 'Linh logged on to her account, but she forgot her password.'",
    options: ["A. Simple sentence", "B. Compound sentence", "C. Complex sentence", "D. Question sentence"],
    answer: 1,
    explain: "Câu gồm hai mệnh đề độc lập nối với nhau bằng liên từ kết hợp 'but' -> Câu ghép (Compound sentence)."
  },
  {
    q: "Choose the correct connector: 'You must finish your chores; _______, your mother will not allow you to go out.'",
    options: ["A. therefore", "B. otherwise", "C. however", "D. and"],
    answer: 1,
    explain: "'otherwise' nghĩa là 'nếu không thì', diễn tả hậu quả nếu không thực hiện điều kiện trước."
  },
  {
    q: "Select the appropriate quantifier: 'There are only _______ terraced fields in this valley.'",
    options: ["A. a few", "B. a little", "C. much", "D. little"],
    answer: 0,
    explain: "'terraced fields' là danh từ đếm được số nhiều, dùng 'a few' (một vài)."
  },
  {
    q: "Choose the correct article usage: 'My uncle travelled to the mountain festival by _______ train.'",
    options: ["A. the", "B. a", "C. an", "D. Ø (no article)"],
    answer: 3,
    explain: "Cấu trúc 'by + phương tiện giao thông' sử dụng zero article: by train, by bus, by air."
  },
  {
    q: "Complete the first conditional sentence: 'Unless it _______ heavily tomorrow, we will go cycling around the lake.'",
    options: ["A. won't rain", "B. doesn't rain", "C. rains", "D. will rain"],
    answer: 2,
    explain: "'Unless' = 'If ... not'. Mệnh đề sau 'unless' chia ở thì Hiện tại đơn khẳng định: 'Unless it rains'."
  },
  {
    q: "Choose the correct verb in the adverbial time clause: 'We will clean the classroom as soon as the bell _______.'",
    options: ["A. will ring", "B. rings", "C. rang", "D. is ringing"],
    answer: 1,
    explain: "Trong mệnh đề trạng ngữ chỉ thời gian bắt đầu bằng 'as soon as', dùng thì Hiện tại đơn ('rings') để diễn tả hành động tương lai."
  },
  {
    q: "Which sentence expresses a scheduled timetable in the future?",
    options: [
      "A. The shopping mall will open tomorrow morning.",
      "B. The shopping mall opens at 8:00 a.m. tomorrow.",
      "C. The shopping mall is going to open tomorrow.",
      "D. The shopping mall opened at 8:00 a.m."
    ],
    answer: 1,
    explain: "Hiện tại đơn ('opens') được sử dụng chuẩn mực để diễn đạt thời khóa biểu, lịch trình cố định của cửa hàng, sự kiện công cộng."
  },
  {
    q: "Choose the correct tense combination: 'While the rescue workers _______ for survivors, the rain began to pour.'",
    options: ["A. searched", "B. were searching", "C. are searching", "D. search"],
    answer: 1,
    explain: "Sau 'while' diễn tả hành động đang diễn ra (hành động nền) chia Quá khứ tiếp diễn: 'were searching'."
  },
  {
    q: "Change into reported statement: 'I am inventing a new mini vacuum robot,' Nam said.",
    options: [
      "A. Nam said that he is inventing a new mini vacuum robot.",
      "B. Nam said that he was inventing a new mini vacuum robot.",
      "C. Nam told that he was inventing a new mini vacuum robot.",
      "D. Nam said that he will invent a new mini vacuum robot."
    ],
    answer: 1,
    explain: "Lùi thì: 'am inventing' -> 'was inventing'. Đổi đại từ: 'I' -> 'he'. Dùng 'Nam said that...'."
  },
  {
    q: "Report the question: 'Where is the James Webb Space Telescope located?' Tom asked.",
    options: [
      "A. Tom asked where was the James Webb Space Telescope located.",
      "B. Tom asked where the James Webb Space Telescope was located.",
      "C. Tom asked if where the telescope was located.",
      "D. Tom wondered where did the telescope locate."
    ],
    answer: 1,
    explain: "Câu hỏi Wh- gián tiếp: Wh-word + S + V (không đảo trợ động từ, không dùng dấu hỏi): 'where the... was located'."
  },

  // ==========================================
  // VOCABULARY & USAGE (Questions 23 - 32)
  // ==========================================
  {
    q: "Which phrase means 'the total amount of greenhouse gases emitted by human activities'?",
    options: ["A. single-use plastic", "B. carbon footprint", "C. natural habitat", "D. ecosystem"],
    answer: 1,
    explain: "'carbon footprint' nghĩa là dấu chân carbon (tổng lượng khí nhà kính, đặc biệt là CO2 phát thải)."
  },
  {
    q: "A _______ is a traditional large wooden house built on tall posts to avoid flooding and wild animals.",
    options: ["A. cottage", "B. skyscraper", "C. stilt house", "D. convenience store"],
    answer: 2,
    explain: "'stilt house' là nhà sàn của đồng bào các dân tộc thiểu số vùng núi."
  },
  {
    q: "The five colors of five-colour sticky rice symbolize the five _______ of the universe.",
    options: ["A. elements", "B. seasons", "C. planets", "D. continents"],
    answer: 0,
    explain: "Năm màu của xôi ngũ sắc tượng trưng cho Ngũ hành (five elements: Kim, Mộc, Thủy, Hỏa, Thổ)."
  },
  {
    q: "People who constantly move from place to place to find fresh pastures for their herds lead a _______ lifestyle.",
    options: ["A. modern", "B. nomadic", "C. sedentary", "D. crowded"],
    answer: 1,
    explain: "'nomadic' nghĩa là du mục, di chuyển thường xuyên cùng bầy gia súc."
  },
  {
    q: "What do we call a person who is addicted to buying goods and cannot stop shopping?",
    options: ["A. shop assistant", "B. shopkeeper", "C. shopaholic", "D. customer"],
    answer: 2,
    explain: "'shopaholic' là danh từ chỉ người nghiện mua sắm không kiềm chế được."
  },
  {
    q: "A violent rotating column of air extending from a thunderstorm to the ground is called a _______.",
    options: ["A. tornado", "B. tsunami", "C. landslide", "D. volcanic eruption"],
    answer: 0,
    explain: "'tornado' là lốc xoáy (cột gió xoáy ốc dữ dội chạm đất)."
  },
  {
    q: "The technology that enables direct mind-to-mind communication without speaking or writing is _______.",
    options: ["A. holography", "B. video call", "C. telepathy", "D. biometric scan"],
    answer: 2,
    explain: "'telepathy' là thần giao cách cảm (truyền suy nghĩ trực tiếp từ tâm trí sang tâm trí)."
  },
  {
    q: "Which planet is the fourth from the Sun and is often known as the 'Red Planet'?",
    options: ["A. Venus", "B. Earth", "C. Mars", "D. Jupiter"],
    answer: 2,
    explain: "'Mars' (Sao Hỏa) là hành tinh thứ tư trong Hệ Mặt Trời, có màu đỏ do chứa nhiều oxit sắt."
  },
  {
    q: "Which word means 'discovering something that already existed in nature'?",
    options: ["A. invent", "B. discover", "C. create", "D. manufacture"],
    answer: 1,
    explain: "'discover' là phát hiện/khám phá ra thứ đã tồn tại trong tự nhiên (như Columbus discovered America); khác với 'invent' là sáng chế ra thứ chưa từng có."
  },
  {
    q: "A planet that has liquid water, an atmosphere, and a suitable temperature is considered _______.",
    options: ["A. cratered", "B. habitable", "C. poisonous", "D. rocky"],
    answer: 1,
    explain: "'habitable' nghĩa là có thể sinh sống được (đủ điều kiện hỗ trợ sự sống)."
  },

  // ==========================================
  // EVERYDAY ENGLISH & COMMUNICATION (Questions 33 - 36)
  // ==========================================
  {
    q: "What is the best way to politely invite a classmate to play badminton?",
    options: [
      "A. You have to play badminton with me.",
      "B. Do you fancy playing badminton with me this Saturday?",
      "C. Why didn't you play badminton?",
      "D. Badminton is better than your sport."
    ],
    answer: 1,
    explain: "'Do you fancy playing badminton with me...?' hoặc 'Would you like to...?' là lời mời giao tiếp tự nhiên và lịch sự."
  },
  {
    q: "How should you respond politely to a compliment: 'You arranged these paper flowers so beautifully!'?",
    options: [
      "A. That's true, I am the best.",
      "B. Thank you. It's very kind of you to say so.",
      "C. No, you are lying.",
      "D. You're welcome."
    ],
    answer: 1,
    explain: "Đáp lại lời khen bằng sự nhã nhặn: 'Thank you. It's very kind of you to say so / I'm glad you like it.'"
  },
  {
    q: "What is the appropriate response to hear that your friend's village was flooded?",
    options: [
      "A. Fantastic! Have fun!",
      "B. That's awful! I'm so sorry to hear that. I hope your family is safe.",
      "C. Don't worry, it's not my business.",
      "D. Congratulations!"
    ],
    answer: 1,
    explain: "Thể hiện sự đồng cảm với tin xấu về thảm họa: 'That's awful! I'm so sorry to hear that. I hope your family is safe.'"
  },
  {
    q: "Which phrase is used to politely interrupt a speaker during a presentation?",
    options: [
      "A. Shut up, please.",
      "B. Sorry for interrupting, but could you explain that point again?",
      "C. Your talk is too long.",
      "D. Listen to me now."
    ],
    answer: 1,
    explain: "'Sorry for interrupting, but...' là mẫu câu chuẩn mực để ngắt lời một cách lịch sự trong hội thoại tiếng Anh."
  },

  // ==========================================
  // READING & WRITING SYNTHESIS (Questions 37 - 40)
  // ==========================================
  {
    q: "In an email to a penfriend about leisure time, which part should come first?",
    options: [
      "A. Details of the sports club fees.",
      "B. A friendly greeting (e.g., Dear Tom / Hi Sarah).",
      "C. The closing signature.",
      "D. A complaint about school homework."
    ],
    answer: 1,
    explain: "Cấu trúc thư/email chuẩn luôn bắt đầu bằng lời chào thân mật (Friendly greeting: Dear... / Hi...)."
  },
  {
    q: "When writing a formal Notice for a school environmental event, what MUST be included?",
    options: [
      "A. Only the names of the organizers.",
      "B. Event title, date, time, location, purpose, and contact person.",
      "C. A long fictional story about trees.",
      "D. A personal poem."
    ],
    answer: 1,
    explain: "Một thông báo (Notice) chuẩn cần đầy đủ thông tin thiết yếu: Tiêu đề sự kiện, ngày giờ, địa điểm, mục đích và người liên hệ."
  },
  {
    q: "What intonation should you use when reading: 'Mercury, Venus, Earth, and Mars'?",
    options: [
      "A. Rise on all four items.",
      "B. Fall on all four items.",
      "C. Rise on Mercury, Venus, Earth, and fall on Mars.",
      "D. Fall on Mercury and rise on Mars."
    ],
    answer: 2,
    explain: "Quy tắc ngữ điệu liệt kê: Giọng đi lên nhẹ (↗) ở các mục chưa phải cuối cùng và đi xuống dứt khoát (↘) ở mục cuối để báo hiệu kết thúc danh sách."
  },
  {
    q: "Choose the correct sentence combining possessive pronouns:",
    options: [
      "A. Your smartphone has face recognition, but my doesn't.",
      "B. Your smartphone has face recognition, but mine doesn't.",
      "C. Yours smartphone has face recognition, but mine doesn't.",
      "D. Your smartphone has face recognition, but me doesn't."
    ],
    answer: 1,
    explain: "'mine' là đại từ sở hữu thay thế cho 'my smartphone'; vế đầu 'Your smartphone' là tính từ sở hữu đi với danh từ."
  }
];

module.exports = { examQuestions };
