// tienganh9_exam.js
// 25 Master Exam Questions for Đấu Trường Trạng Nguyên Tiếng Anh 9 (Global Success) - 60:00 Timer

const examQuestions = [
  {
    q: "Question 1: Mark the letter A, B, C, or D to indicate the word whose underlined part differs from the other three in pronunciation.",
    options: ["A. craft", "B. artisan", "C. father", "D. cat"],
    answer: 3,
    explain: "'cat' có nguyên âm /æ/, trong khi 'craft', 'artisan', 'father' đều có nguyên âm dài /ɑː/."
  },
  {
    q: "Question 2: Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress.",
    options: ["A. historic", "B. delicious", "C. romantic", "D. difficulty"],
    answer: 3,
    explain: "'difficulty' có trọng âm rơi vào âm tiết thứ 1 ('dif-). Các từ còn lại có đuôi -ic và -ious nên trọng âm rơi vào âm tiết thứ 2 (his'toric, de'licious, ro'mantic)."
  },
  {
    q: "Question 3: Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress.",
    options: ["A. celebration", "B. nationality", "C. community", "D. information"],
    answer: 2,
    explain: "'community' có trọng âm rơi vào âm tiết thứ 2 (kə'mju-). Các từ còn lại có đuôi -ion và -ity nên trọng âm rơi vào âm tiết thứ 3 (ˌselɪ'breɪʃn, ˌnæʃə'næləti, ˌɪnfə'meɪʃn)."
  },
  {
    q: "Question 4: The secret embroidery methods have been ______ down through five generations in this traditional craft village.",
    options: ["A. handed", "B. cut", "C. come", "D. looked"],
    answer: 0,
    explain: "'handed down' là cụm động từ mang nghĩa trao truyền, truyền thụ lại qua nhiều thế hệ."
  },
  {
    q: "Question 5: She was completely bewildered and didn't know ______ to ask for directions in the massive airport terminal.",
    options: ["A. who", "B. why", "C. which", "D. whose"],
    answer: 0,
    explain: "Cấu trúc từ để hỏi + to-infinitive: 'who to ask' (hỏi ai). 'Why' không dùng với to-infinitive."
  },
  {
    q: "Question 6: The ______ carefully urban planners design public transportation, the ______ city life becomes for citizens.",
    options: ["A. more / better", "B. most / best", "C. more / good", "D. much / well"],
    answer: 0,
    explain: "Cấu trúc so sánh kép: 'The more carefully..., the better...' (Càng quy hoạch cẩn thận bao nhiêu thì cuộc sống càng tốt bấy nhiêu)."
  },
  {
    q: "Question 7: Unless teens learn proper time-management skills, they ______ suffer from constant academic stress and anxiety.",
    options: ["A. might", "B. would", "C. could to", "D. should have"],
    answer: 0,
    explain: "Mệnh đề Unless (= If not) đi với câu điều kiện loại 1 diễn tả khả năng có thể xảy ra trong tương lai: 'might + V-inf'."
  },
  {
    q: "Question 8: While the villagers ______ traditional conical hats in the yard, a sudden summer thunderstorm broke out.",
    options: ["A. are making", "B. were making", "C. made", "D. have made"],
    answer: 1,
    explain: "Hành động đang diễn ra tại một thời điểm trong quá khứ dùng Quá khứ tiếp diễn ('were making'), hành động cắt ngang dùng Quá khứ đơn ('broke out')."
  },
  {
    q: "Question 9: I really love old architecture. I wish our ancient town ______ that rustic wooden bridge across the river.",
    options: ["A. still has", "B. still had", "C. is having", "D. will have"],
    answer: 1,
    explain: "Cấu trúc ước trái ngược với hiện tại lùi thì về Quá khứ đơn: 'still had'."
  },
  {
    q: "Question 10: Minh ______ three different programming languages since he enrolled in the vocational academy two years ago.",
    options: ["A. has mastered", "B. mastered", "C. was mastering", "D. is mastering"],
    answer: 0,
    explain: "Có dấu hiệu 'since + mốc thời gian quá khứ' nên mệnh đề chính chia ở thì Hiện tại hoàn thành: 'has mastered'."
  },
  {
    q: "Question 11: After walking for hours under the scorching sun, the backpackers stopped ______ some refreshing coconut water.",
    options: ["A. buying", "B. to buy", "C. buy", "D. bought"],
    answer: 1,
    explain: "'stop to do sth' có nghĩa là dừng lại để làm việc khác (dừng lại để mua nước dừa). 'stop doing sth' là từ bỏ việc đang làm."
  },
  {
    q: "Question 12: 'Have you ever visited Son Doong Cave?' the foreign tourist asked the tour guide. -> The foreign tourist asked the tour guide ______.",
    options: [
      "A. whether had he visited Son Doong Cave before",
      "B. if he had ever visited Son Doong Cave before",
      "C. if did he ever visit Son Doong Cave before",
      "D. that he had visited Son Doong Cave before"
    ],
    answer: 1,
    explain: "Chuyển câu hỏi Yes/No sang gián tiếp: asked + if/whether + S + V lùi thì (have visited -> had visited), bỏ đảo trợ động từ."
  },
  {
    q: "Question 13: The dedicated artisan ______ taught us the art of Bat Trang ceramics was awarded the title of National Craftsman.",
    options: ["A. which", "B. who", "C. whose", "D. where"],
    answer: 1,
    explain: "Đại từ quan hệ 'who' thay thế cho danh từ chỉ người ('The dedicated artisan') làm chủ ngữ trong mệnh đề quan hệ."
  },
  {
    q: "Question 14: In which of the following sentences can the relative pronoun be OMITTED?",
    options: [
      "A. The scholarship which was awarded to Lan helped her study abroad.",
      "B. The smart robot which cleans the floor operates automatically.",
      "C. The mobile app which I downloaded yesterday helps track my study routine.",
      "D. The teacher who inspired my passion for robotics retired last month."
    ],
    answer: 2,
    explain: "Trong câu C, 'which' làm tân ngữ của động từ 'downloaded', do đó có thể lược bỏ mà câu vẫn chuẩn: 'The mobile app I downloaded...'."
  },
  {
    q: "Question 15: Ha Long Bay, ______ is a UNESCO World Natural Heritage site, attracts millions of international travelers annually.",
    options: ["A. which", "B. that", "C. what", "D. whose"],
    answer: 0,
    explain: "Ha Long Bay là tên riêng, mệnh đề quan hệ có dấu phẩy (không xác định), TUYỆT ĐỐI KHÔNG dùng 'that'. Đáp án chuẩn là 'which'."
  },
  {
    q: "Question 16: The cybersecurity specialist suggested that we ______ our cloud storage passwords at least once every three months.",
    options: ["A. should change", "B. changed", "C. to change", "D. changing"],
    answer: 0,
    explain: "Cấu trúc giả định thức với suggest: suggest that S + (should) + V-infinitive."
  },
  {
    q: "Question 17: Our computer science teacher advised us ______ single-use passwords and two-factor authentication for extra security.",
    options: ["A. use", "B. using", "C. to use", "D. should use"],
    answer: 2,
    explain: "Cấu trúc 'advise somebody to do something': 'advised us to use'."
  },
  {
    q: "Question 18: ______ the weather conditions were extremely harsh, the conservation team reached the remote habitat safely.",
    options: ["A. Although", "B. Despite", "C. Because of", "D. In spite"],
    answer: 0,
    explain: "Đằng sau là một mệnh đề hoàn chỉnh (S + V: the weather conditions were...), do đó dùng liên từ 'Although'."
  },
  {
    q: "Question 19: It was ______ an engaging and practical vocational course that all students signed up for the advanced modules.",
    options: ["A. so", "B. such", "C. very", "D. too"],
    answer: 1,
    explain: "Cấu trúc: 'such + an + Adj + Noun + that' ('such an engaging and practical vocational course that')."
  },
  {
    q: "Question 20: Nam decided to pursue environmental engineering ______ his deep passion for wildlife and nature preservation.",
    options: ["A. because", "B. because of", "C. although", "D. even though"],
    answer: 1,
    explain: "'his deep passion...' là một cụm danh từ (Noun Phrase), do đó dùng giới từ chỉ nguyên nhân 'because of'."
  },
  {
    q: "Question 21: Peter: 'Could you please give me a hand with moving this heavy bookshelf?' - Mary: '______'",
    options: [
      "A. Certainly, I'd be glad to help you.",
      "B. You are welcome.",
      "C. It is not my fault.",
      "D. I don't care about it."
    ],
    answer: 0,
    explain: "'Certainly, I'd be glad to help you' là câu đáp lại lời nhờ vả lịch thiệp, sẵn lòng hỗ trợ."
  },
  {
    q: "Question 22: Teacher: 'Do you see what I mean about balancing screen time and outdoor exercise?' - Student: '______'",
    options: [
      "A. Yes, I completely understand. It's crystal clear, teacher.",
      "B. Good luck to you too.",
      "C. No, thank you. I don't buy it.",
      "D. Never mind, don't mention it."
    ],
    answer: 0,
    explain: "Đáp lại lời kiểm tra sự hiểu biết (Checking understanding): 'Yes, I completely understand. It's crystal clear'."
  },
  {
    q: "Question 23: The word 'biodiversity' in environmental studies refers to ______.",
    options: [
      "A. the variety of plant and animal life in a particular habitat",
      "B. the level of chemical air pollution in industrial zones",
      "C. the quantity of underground limestone caves",
      "D. the speed of urban public transport systems"
    ],
    answer: 0,
    explain: "'Biodiversity' (đa dạng sinh học) là sự phong phú của các loài thực vật và động vật trong một sinh cảnh tự nhiên."
  },
  {
    q: "Question 24: Which sentence has the correct rising intonation for a statement used as a question (xác nhận lại thông tin)?",
    options: [
      "A. You want to apply for the software engineering scholarship? ↗",
      "B. Where do you live? ↘",
      "C. Open your book, please. ↘",
      "D. Ha Long Bay is in Quang Ninh province. ↘"
    ],
    answer: 0,
    explain: "Câu trần thuật dùng làm câu hỏi để xác nhận hoặc thể hiện sự ngạc nhiên luôn lên giọng ở cuối câu (↗)."
  },
  {
    q: "Question 25: Mark the letter A, B, C, or D to indicate the sentence that is closest in meaning to the original: 'They didn't start the tour early, so they got stuck in the city traffic congestion.'",
    options: [
      "A. If they had started the tour early, they wouldn't have got stuck in the traffic congestion.",
      "B. If they started the tour early, they wouldn't get stuck in the traffic congestion.",
      "C. Although they started the tour early, they got stuck in the traffic congestion.",
      "D. Unless they started the tour early, they would get stuck in the traffic congestion."
    ],
    answer: 0,
    explain: "Diễn tả giả định trái ngược với sự thật đã xảy ra trong quá khứ dùng câu điều kiện loại 3: If + had V3, S + would have V3."
  }
];

module.exports = { examQuestions };
