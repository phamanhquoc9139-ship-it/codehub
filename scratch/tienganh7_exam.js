// Bộ 40 câu hỏi trắc nghiệm Đấu trường Trạng Nguyên Tiếng Anh 7 (60 phút)
// Bao quát 4 Theme và 12 Unit Global Success 7

const examQuestions = [
  // PHONETICS & PRONUNCIATION (Questions 1 - 8)
  {
    q: "Choose the word whose underlined part is pronounced differently from the others:",
    options: ["A. bird", "B. girl", "C. first", "D. sister"],
    answer: 3,
    explain: "'sister' phát âm là /ə/, còn 'bird', 'girl', 'first' đều phát âm là âm dài /ɜː/ (Unit 1)."
  },
  {
    q: "Choose the word whose underlined part is pronounced differently from the others:",
    options: ["A. cough", "B. tough", "C. through", "D. laugh"],
    answer: 2,
    explain: "Trong 'through' đuôi gh câm hoặc phát âm /uː/, còn 'cough', 'tough', 'laugh' có gh phát âm là /f/ (Unit 2)."
  },
  {
    q: "Choose the word whose underlined part is pronounced differently from the others:",
    options: ["A. cooked", "B. helped", "C. watched", "D. donated"],
    answer: 3,
    explain: "'donated' kết thúc bằng âm /t/ nên phát âm đuôi -ed là /ɪd/; các từ còn lại kết thúc bằng vô thanh nên phát âm là /t/ (Unit 3)."
  },
  {
    q: "Choose the word whose underlined part is pronounced differently from the others:",
    options: ["A. musician", "B. delicious", "C. cinema", "D. special"],
    answer: 2,
    explain: "'cinema' có c phát âm là /s/, còn 'musician', 'delicious', 'special' có c phát âm là /ʃ/ (Unit 4)."
  },
  {
    q: "Choose the word whose underlined part is pronounced differently from the others:",
    options: ["A. hot", "B. pot", "C. fork", "D. bottle"],
    answer: 2,
    explain: "'fork' phát âm là /ɔː/, các từ còn lại có nguyên âm là /ɒ/ (Unit 5)."
  },
  {
    q: "Choose the word whose underlined part is pronounced differently from the others:",
    options: ["A. ahead", "B. seatbelt", "C. bread", "D. break"],
    answer: 3,
    explain: "'break' có ea phát âm là /eɪ/, còn lại là /e/ (Unit 7)."
  },
  {
    q: "Choose the word whose main stress is placed differently from the others:",
    options: ["A. solar", "B. carbon", "C. pollute", "D. footprint"],
    answer: 2,
    explain: "'pollute' có trọng âm rơi vào âm tiết thứ 2 (/pəˈluːt/), các từ còn lại trọng âm rơi vào âm tiết thứ nhất (Unit 10)."
  },
  {
    q: "Choose the word whose main stress is placed differently from the others:",
    options: ["A. festival", "B. seasonal", "C. celebrate", "D. fantastic"],
    answer: 3,
    explain: "'fantastic' có trọng âm rơi vào âm tiết 2 (/fænˈtæstɪk/), các từ còn lại trọng âm 1 (Unit 9)."
  },

  // GRAMMAR & STRUCTURES (Questions 9 - 24)
  {
    q: "My brother enjoys ________ models of aeroplanes in his spare time.",
    options: ["A. make", "B. making", "C. makes", "D. to making"],
    answer: 1,
    explain: "Sau động từ chỉ sở thích 'enjoy' ta dùng danh động từ V-ing: enjoy making (Unit 1)."
  },
  {
    q: "Eat more green vegetables and exercise daily, ________ you will keep fit.",
    options: ["A. or", "B. and", "C. but", "D. so"],
    answer: 1,
    explain: "Mệnh đề nối liên từ kết hợp mang tính điều kiện tích cực 'Làm ... và bạn sẽ...' dùng liên từ 'and' (Unit 2)."
  },
  {
    q: "Last Sunday, our volunteer club ________ warm clothes to homeless children in the city center.",
    options: ["A. donates", "B. is donating", "C. donated", "D. has donated"],
    answer: 2,
    explain: "Dấu hiệu thời gian trong quá khứ 'Last Sunday' dùng thì Quá khứ đơn (Past Simple): donated (Unit 3)."
  },
  {
    q: "Classical music is not ________ rock music. Rock is much louder and energetic.",
    options: ["A. as exciting as", "B. different from", "C. the same as", "D. more excitedly"],
    answer: 0,
    explain: "Cấu trúc so sánh ngang bằng phủ định: not as + adj + as (Unit 4)."
  },
  {
    q: "How ________ cartons of milk do you need for the pudding recipe?",
    options: ["A. much", "B. many", "C. little", "D. few"],
    answer: 1,
    explain: "'cartons of milk' là danh từ đếm được số nhiều nên dùng nghi vấn lượng từ 'How many' (Unit 5)."
  },
  {
    q: "The Imperial Academy ________ in 1076 as the first university in Viet Nam.",
    options: ["A. constructed", "B. was constructed", "C. is constructed", "D. were constructed"],
    answer: 1,
    explain: "Câu bị động thì Quá khứ đơn với chủ ngữ số ít: was + V3/ed (was constructed) (Unit 6)."
  },
  {
    q: "________ is it from your house to the nearest supermarket? — It's about two kilometers.",
    options: ["A. How long", "B. How often", "C. How far", "D. How much"],
    answer: 2,
    explain: "Cấu trúc hỏi khoảng cách: 'How far is it from A to B?' (Unit 7)."
  },
  {
    q: "You ________ fasten your seatbelt securely when driving or riding in a car. It's the law.",
    options: ["A. must", "B. might", "C. can", "D. may"],
    answer: 0,
    explain: "Quy định luật pháp bắt buộc ta dùng trợ động từ tình thái 'must' (phải) (Unit 7)."
  },
  {
    q: "________ the film had a very simple plot, the acting of the main cast was superb.",
    options: ["A. In spite of", "B. Although", "C. Because", "D. However"],
    answer: 1,
    explain: "Theo sau là một mệnh đề (S + V) chỉ sự nhượng bộ đối lập, ta dùng liên từ 'Although' (Unit 8)."
  },
  {
    q: "She cried a lot at the end of the film because the ending was extremely ________.",
    options: ["A. moved", "B. moving", "C. movement", "D. mover"],
    answer: 1,
    explain: "Tính từ đuôi -ing miêu tả tính chất của sự vật/bộ phim gây ra cảm xúc cho người khác: 'moving' (cảm động) (Unit 8)."
  },
  {
    q: "At La Tomatina in Spain, people ________ thousands of ripe tomatoes at one another for fun.",
    options: ["A. throw", "B. will throw", "C. threw", "D. are throwing"],
    answer: 0,
    explain: "Miêu tả một phong tục, hoạt động lễ hội định kì dùng thì Hiện tại đơn: throw (Unit 9)."
  },
  {
    q: "Solar power, wind power and hydropower are examples of ________ energy sources.",
    options: ["A. non-renewable", "B. renewable", "C. exhausted", "D. harmful"],
    answer: 1,
    explain: "Năng lượng mặt trời, gió và thủy điện là các nguồn năng lượng tái tạo (renewable energy) (Unit 10)."
  },
  {
    q: "Look at the thick black clouds! It ________ rain very soon.",
    options: ["A. will", "B. is going to", "C. rains", "D. has rained"],
    answer: 1,
    explain: "Dự đoán sự việc sắp xảy ra dựa trên bằng chứng hiện tại rõ ràng (thick black clouds) dùng 'be going to' (Unit 10)."
  },
  {
    q: "In the year 2050, driverless cars ________ our streets much safer.",
    options: ["A. make", "B. made", "C. will make", "D. are making"],
    answer: 2,
    explain: "Dự đoán trong tương lai xa (In the year 2050) dùng thì Tương lai đơn: will + V (Unit 11)."
  },
  {
    q: "This flying car belongs to my parents. It is ________.",
    options: ["A. their", "B. them", "C. theirs", "D. they"],
    answer: 2,
    explain: "Đại từ sở hữu thay thế cho danh từ 'their flying car' đứng độc lập cuối câu là 'theirs' (Unit 11)."
  },
  {
    q: "The koala and the kangaroo are unique animals native to ________.",
    options: ["A. Canada", "B. Australia", "C. Scotland", "D. New Zealand"],
    answer: 1,
    explain: "Gấu túi Koala và chuột túi Kangaroo là động vật biểu tượng đặc trưng của nước Úc (Australia) (Unit 12)."
  },

  // FUNCTIONAL & EVERYDAY ENGLISH (Questions 25 - 30)
  {
    q: "Tom: 'Would you like to come to my photography exhibition this Saturday?' — David: '________'",
    options: ["A. Yes, I'd love to.", "B. Not at all.", "C. You are welcome.", "D. No problem."],
    answer: 0,
    explain: "Đáp lại lời mời trang trọng 'Would you like to...' một cách hào hứng là 'Yes, I'd love to' (Unit 4)."
  },
  {
    q: "Doctor: 'You have a bad fever and sore eyes.' — Patient: 'What should I do?' — Doctor: '________'",
    options: [
      "A. You should stay up late and play video games.",
      "B. You ought to take medicine and get plenty of rest.",
      "C. Why don't you eat more junk food?",
      "D. You must walk outside under the hot sun."
    ],
    answer: 1,
    explain: "Lời khuyên sức khỏe phù hợp: 'You ought to take medicine and get plenty of rest' (Unit 2)."
  },
  {
    q: "Tourist: 'Excuse me, could you tell me how to get to the Temple of Literature?' — Local person: '________'",
    options: [
      "A. Yes, it was built in 1070.",
      "B. Go straight ahead and take the first turning on the left.",
      "C. It is very delicious.",
      "D. I am busy right now."
    ],
    answer: 1,
    explain: "Chỉ đường lịch sự: 'Go straight ahead and take the first turning on the left' (Unit 6)."
  },
  {
    q: "Nick: 'I think flying cars will completely solve urban traffic jams.' — Mary: '________. They will create sky jams instead!'",
    options: ["A. I totally agree with you", "B. I don't think so", "C. That's a great idea", "D. You are right"],
    answer: 1,
    explain: "Mary phản bác ý kiến vì cho rằng sẽ gây tắc nghẽn trên bầu trời (sky jams), nên chọn lời không đồng ý: 'I don't think so' (Unit 11)."
  },
  {
    q: "Waiter: 'Are you ready to order, sir?' — Customer: '________'",
    options: [
      "A. Yes, I'd like beef noodle soup and a glass of mineral water, please.",
      "B. How much does your house cost?",
      "C. No, I hate watching documentaries.",
      "D. I can speak English very well."
    ],
    answer: 0,
    explain: "Khách gọi món trong nhà hàng: 'Yes, I'd like beef noodle soup and a glass of mineral water, please' (Unit 5)."
  },
  {
    q: "Lan: 'I won the first prize in the English speaking contest!' — Mai: '________'",
    options: ["A. Good luck next time!", "B. Congratulations! That's awesome!", "C. Never mind.", "D. It's my pleasure."],
    answer: 1,
    explain: "Chúc mừng thành tích của bạn bè: 'Congratulations! That's awesome!' (Unit 12)."
  },

  // ERROR IDENTIFICATION (Questions 31 - 34)
  {
    q: "Find the underlined part that needs correction: 'She (A) doesn't mind (B) to help elderly people (C) with their grocery shopping (D) every weekend.'",
    options: ["A. doesn't mind", "B. to help", "C. with their", "D. every weekend"],
    answer: 1,
    explain: "Sau động từ 'mind' ta phải dùng V-ing: 'to help' sửa thành 'helping' (Unit 1/3)."
  },
  {
    q: "Find the underlined part that needs correction: 'There (A) isn't (B) many butter (C) left in the fridge (D) to make pancakes.'",
    options: ["A. isn't", "B. many butter", "C. left in", "D. to make"],
    answer: 1,
    explain: "'butter' (bơ) là danh từ không đếm được, phải dùng 'much butter', không dùng 'many' (Unit 5)."
  },
  {
    q: "Find the underlined part that needs correction: 'Despite (A) he was (B) exhausted after the long trip, he (C) helped us clean (D) the classroom.'",
    options: ["A. Despite", "B. was", "C. helped", "D. the classroom"],
    answer: 0,
    explain: "Sau 'Despite' là danh từ/cụm danh từ hoặc V-ing. Vì theo sau là mệnh đề (he was exhausted) nên phải sửa 'Despite' thành 'Although' (Unit 8)."
  },
  {
    q: "Find the underlined part that needs correction: 'Our school (A) was founded (B) by the local community (C) in (D) 1995, wasn't they?'",
    options: ["A. was founded", "B. by", "C. in", "D. wasn't they"],
    answer: 3,
    explain: "Chủ ngữ là 'Our school' (ngôi thứ ba số ít chỉ vật) nên câu hỏi đuôi phải là 'wasn't it', không dùng 'wasn't they' (Unit 6)."
  },

  // READING COMPREHENSION (Questions 35 - 40)
  // Passage about Renewable Energy and Future Cities
  {
    q: "Read the passage and answer: What is the main idea of renewable energy discussed in Unit 10?",
    options: [
      "A. It comes from natural resources that never run out such as sun, wind, and water.",
      "B. It causes heavy environmental pollution and global warming.",
      "C. It is very limited and will disappear completely in a few years.",
      "D. It is only used for cooking food at home."
    ],
    answer: 0,
    explain: "Năng lượng tái tạo là nguồn năng lượng vô tận từ thiên nhiên (mặt trời, gió, nước) và thân thiện với môi trường (Unit 10)."
  },
  {
    q: "According to Unit 11, what is one major advantage of a teleporter in future transportation?",
    options: [
      "A. It takes hours to arrive at a destination.",
      "B. It travels instantly from one location to another without traffic jams.",
      "C. It runs on heavy fossil coal and emits toxic fumes.",
      "D. It requires a driving license and road tracks."
    ],
    answer: 1,
    explain: "Cổng dịch chuyển tức thời (teleporter) giúp di chuyển ngay tức khắc giữa 2 điểm mà không lo tắc đường hay tốn thời gian (Unit 11)."
  },
  {
    q: "Which of the following is NOT an English-speaking country studied in Unit 12?",
    options: ["A. New Zealand", "B. The United Kingdom", "C. Japan", "D. The USA"],
    answer: 2,
    explain: "Nhật Bản (Japan) không phải là quốc gia sử dụng tiếng Anh làm ngôn ngữ mẹ đẻ/ngôn ngữ chính thức (Unit 12)."
  },
  {
    q: "In Unit 7, traffic rules state that pedestrian road users must ________.",
    options: [
      "A. walk across the road anywhere without looking",
      "B. walk on the pavement and cross the street at zebra crossings",
      "C. ride motorbikes on the sidewalk",
      "D. ignore all red traffic lights"
    ],
    answer: 1,
    explain: "Người đi bộ phải đi trên vỉa hè và băng qua đường tại vạch kẻ ngựa vằn (zebra crossings) (Unit 7)."
  },
  {
    q: "In Unit 3, doing community service helps teenagers ________.",
    options: [
      "A. waste their valuable study time",
      "B. develop practical life skills, empathy, and make their community better",
      "C. earn huge profits immediately",
      "D. isolate themselves from friends"
    ],
    answer: 1,
    explain: "Hoạt động tình nguyện giúp học sinh rèn luyện kĩ năng sống, lòng nhân ái và đóng góp tích cực cho xã hội (Unit 3)."
  },
  {
    q: "What is the traditional instrument commonly associated with Scottish culture mentioned in Unit 12?",
    options: ["A. Bagpipes", "B. Dan bau", "C. Piano", "D. Electric guitar"],
    answer: 0,
    explain: "Kèn túi (bagpipes) và váy kẻ ca-rô (kilt) là biểu tượng văn hóa truyền thống nổi tiếng của xứ Scotland (Unit 12)."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { examQuestions };
}
