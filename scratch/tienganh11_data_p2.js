// tienganh11_data_p2.js
// Data for Tiếng Anh 11 Global Success - Part 2 (Units 6 to 10, Reviews 3 & 4, Cheatsheet & Handbook)

const unitsP2 = {
  // UNIT 6: PRESERVING OUR HERITAGE
  "6": {
    num: "6",
    themeId: "theme-3",
    title: "Preserving Our Heritage",
    pages: "66–75",
    subtitle: "Bảo tồn và phát huy giá trị di sản văn hóa vật thể, phi vật thể và di sản thiên nhiên",
    goals: "Hệ thống hóa vốn từ về di sản, danh lam thắng cảnh, trùng tu và khảo cổ; nắm vững ngữ điệu câu trần thuật, mệnh lệnh và danh sách liệt kê (intonation in statements, commands, lists); làm chủ cấu trúc Mệnh đề nguyên mẫu có 'to' (To-infinitive clauses) bổ nghĩa danh từ; đọc bài về sáng kiến bảo tồn, nói về cách quảng bá di sản, viết leaflet hướng dẫn tham quan; thực hành hỏi và chỉ đường.",
    pronunciation: {
      title: "Intonation in Statements, Commands, and Lists (Ngữ điệu trong câu trần thuật, mệnh lệnh và danh sách)",
      rule: "• Câu trần thuật và câu mệnh lệnh thông thường có ngữ điệu xuống giọng ở cuối câu (Falling intonation ➘).\n• Trong danh sách liệt kê, người nói sẽ lên giọng ở từng mục trước (Rising intonation ➚) để báo hiệu danh sách chưa kết thúc, và hạ giọng dứt khoát ở mục cuối cùng (Falling intonation ➘) để báo hiệu đã hết danh sách.",
      examples: [
        { strong: "Statement: Viet Nam has many UNESCO heritage sites. ➘", weak: "Falling at the end", word: "Statement", note: "Hạ giọng ở cuối câu trần thuật cung cấp thông tin." },
        { strong: "Command: Preserve the ancient temple carefully! ➘", weak: "Falling at the end", word: "Command", note: "Hạ giọng dứt khoát ở cuối câu mệnh lệnh." },
        { strong: "List: We visited Hue ➚, Hoi An ➚, and My Son. ➘", weak: "Rise on Hue & Hoi An, Fall on My Son", word: "List", note: "Lên giọng ở các mục liệt kê đầu, hạ giọng ở mục cuối." }
      ]
    },
    vocab: [
      { word: "heritage", ipa: "/ˈherɪtɪdʒ/", type: "noun", meaning: "di sản (văn hóa, lịch sử hoặc thiên nhiên)", eg: "Ha Long Bay and Trang An are recognized as world natural and mixed heritage sites." },
      { word: "historic", ipa: "/hɪˈstɒrɪk/", type: "adj", meaning: "có ý nghĩa lịch sử trọng đại, quan trọng", eg: "The signing of the declaration was a historic moment for the entire nation." },
      { word: "historical", ipa: "/hɪˈstɒrɪkl/", type: "adj", meaning: "thuộc về lịch sử, liên quan đến quá khứ", eg: "Students carried out historical research on ancient royal costumes." },
      { word: "preserve", ipa: "/prɪˈzɜːv/", type: "verb", meaning: "bảo tồn, giữ gìn nguyên trạng", eg: "Strict conservation laws help preserve fragile limestone caves from mass tourism." },
      { word: "restore", ipa: "/rɪˈstɔː(r)/", type: "verb", meaning: "phục chế, trùng tu công trình cổ", eg: "Expert craftsmen spent five years restoring the wooden imperial gates." },
      { word: "monument", ipa: "/ˈmɒnjumənt/", type: "noun", meaning: "đài tưởng niệm, công trình di tích cổ", eg: "Ancient monuments must be protected against atmospheric pollution and acid rain." },
      { word: "citadel", ipa: "/ˈsɪtədəl/", type: "noun", meaning: "hoàng thành, thành quách cổ", eg: "The Imperial Citadel of Thang Long in Ha Noi holds priceless underground relics." },
      { word: "performing arts", ipa: "/pəˌfɔːmɪŋ ˈɑːts/", type: "n. phr.", meaning: "nghệ thuật biểu diễn (nhã nhạc, ca trù, chèo)", eg: "Nha Nhac - Vietnamese court music is celebrated worldwide as intangible performing arts." },
      { word: "crowdfunding", ipa: "/ˈkraʊdfʌndɪŋ/", type: "noun", meaning: "gọi vốn cộng đồng qua mạng", eg: "The youth group initiated a crowdfunding campaign to digitize folk songs." },
      { word: "appreciate", ipa: "/əˈpriːʃieɪt/", type: "verb", meaning: "trân trọng, đánh giá cao giá trị", eg: "Cultural tours help young generations appreciate their ancestors' sacrifices." },
      { word: "complex", ipa: "/ˈkɒmpleks/", type: "noun", meaning: "quần thể di tích kiến trúc/thắng cảnh", eg: "Trang An Scenic Landscape Complex combines dramatic karst peaks and deep valleys." },
      { word: "limestone", ipa: "/ˈlaɪmstəʊn/", type: "noun", meaning: "đá vôi (địa chất karst)", eg: "Towering limestone karsts create a magical seascape in northern Viet Nam." }
    ],
    grammar: [
      {
        title: "To-infinitive Clauses modifying Nouns (Mệnh đề To-V rút gọn bổ nghĩa danh từ)",
        formula: "Noun / Pronoun + to-infinitive\nThường dùng sau: The first / second / last / only / next + Noun hoặc sau Tính từ so sánh nhất (the best, the most ancient...)",
        desc: "• Mệnh đề to-infinitive dùng để bổ nghĩa cho danh từ đi trước, thay thế cho mệnh đề quan hệ (Relative clause) khi danh từ đó có chứa các từ chỉ thứ tự (the first, the second, the last), từ duy nhất (the only), hoặc dạng so sánh nhất.\n• Mẫu câu chủ động: S + was the first person + to V.\n• Mẫu câu bị động: S + was the first monument + to be restored (dùng to be + V3/ed).",
        examples: [
          { en: "Trang An was the first site in Southeast Asia to be recognized as a mixed World Heritage site.", vi: "Tràng An là địa danh đầu tiên ở Đông Nam Á được công nhận là Di sản Thế giới hỗn hợp. (Bị động sau 'the first site' -> to be recognized)" },
          { en: "He is the only archaeologist to discover the secret underground royal tomb.", vi: "Ông là nhà khảo cổ duy nhất phát hiện ra ngôi mộ hoàng gia ngầm bí mật. (Chủ động sau 'the only archaeologist' -> to discover)" }
        ],
        notes: "Phân biệt: Nếu câu mang nghĩa chủ động dùng 'to V'; nếu mang nghĩa bị động bắt buộc dùng 'to be V3/ed'."
      }
    ],
    skills: {
      reading: "Đọc bài báo về một cuộc thi sáng kiến bảo tồn di sản dành cho học sinh THPT: ý tưởng ứng dụng công nghệ thực tế ảo VR tái hiện kinh thành Huế và mô hình du lịch sinh thái bền vững có sự tham gia của người dân bản địa.",
      speaking: "Thảo luận về các giải pháp thiết thực để quảng bá và giữ gìn di sản văn hóa trong kỷ nguyên số (số hóa tranh dân gian Đông Hồ, đưa nghệ thuật chèo vào trường học, gây quỹ cộng đồng phục dựng đình làng cổ).",
      listening: "Nghe bài giới thiệu của hướng dẫn viên tại Quần thể danh thắng Tràng An (Ninh Bình). Ghi chép các thông tin về lịch sử địa chất karst, hệ động thực vật đặc hữu trong Sách đỏ và các quy tắc ứng xử bảo vệ môi trường đối với du khách.",
      writing: "Viết tờ rơi hướng dẫn (information leaflet) khoảng 120–150 từ dành cho du khách quốc tế khi đến tham quan một khu di tích lịch sử địa phương. Nội dung: Giới thiệu giá trị nổi bật -> 4 quy tắc bắt buộc (Do's) -> 3 điều nghiêm cấm (Don'ts) -> Thông tin liên hệ ban quản lý.",
      cultureClil: "Các mô hình bảo tồn di sản sáng tạo trên thế giới: Dự án phục dựng Đền Angkor Wat (Campuchia) bằng công nghệ quét laser 3D LiDAR và chương trình bảo tồn di sản của cộng đồng người bản địa tại Machu Picchu (Peru)."
    },
    everydayEnglish: {
      function: "Asking for and Giving Directions (Hỏi đường và chỉ dẫn đường đi)",
      dialogues: [
        { speaker: "Tourist", text: "Excuse me, could you tell me how to get to the Imperial Citadel museum?" },
        { speaker: "Local", text: "Go straight along this street for two blocks, then turn left at the traffic light. It's on your right, opposite the post office." },
        { speaker: "Tourist", text: "Is it within walking distance from here?" },
        { speaker: "Local", text: "Yes, it takes only about five to ten minutes on foot." }
      ],
      usefulPhrases: [
        "Excuse me, could you direct me to...?",
        "How do I get to...?",
        "Go straight ahead / Walk along...",
        "Turn left / right at the intersection...",
        "It is on your left/right, next to / opposite...",
        "You can't miss it!"
      ]
    },
    project: {
      title: "Local Heritage Action Proposal (Đề Xuất Dự Án Bảo Tồn Di Sản Địa Phương)",
      guidance: "Chọn một di tích hoặc nét văn hóa phi vật thể tại quê hương bạn đang có nguy cơ mai một để lập đề án bảo tồn.",
      deliverables: "Bản đề án gồm: Hiện trạng di sản, 3 nguyên nhân xuống cấp, 3 hành động cụ thể của thanh niên và video/poster truyền thông.",
      rubric: "Tính cấp thiết và thực tiễn (40%), Kế hoạch khả thi (30%), Ngôn ngữ thuyết phục (30%)."
    },
    quiz: [
      {
        q: "Yuri Gagarin was the first human ______ into outer space in 1961.",
        options: ["flew", "flying", "to fly", "flown"],
        ans: 2,
        exp: "Sau cấu trúc có số thứ tự 'the first human', ta dùng mệnh đề nguyên mẫu 'to fly' mang nghĩa chủ động."
      },
      {
        q: "The ancient bridge was the last structure ______ by the conservation team last year.",
        options: ["to restore", "to be restored", "restoring", "restored"],
        ans: 1,
        exp: "Cây cầu cổ 'được phục chế' (bị động) sau cụm 'the last structure' -> bắt buộc dùng 'to be restored'."
      },
      {
        q: "Which word best completes the sentence: 'We need to make a distinction between ______ events (important in history) and historical records.'",
        options: ["historic", "history", "historian", "historically"],
        ans: 0,
        exp: "'historic' mang nghĩa là 'có ý nghĩa lịch sử trọng đại'; khác với 'historical' là 'thuộc về lịch sử'."
      }
    ]
  },

  // UNIT 7: EDUCATION OPTIONS FOR SCHOOL-LEAVERS
  "7": {
    num: "7",
    themeId: "theme-3",
    title: "Education Options for School-leavers",
    pages: "76–85",
    subtitle: "Các hướng đi sau tốt nghiệp THPT: Đại học, học nghề, du học, học việc và chuẩn bị hành trang lập nghiệp",
    goals: "Hệ thống từ vựng về các bậc học thuật (academic), đào tạo nghề (vocational training), văn bằng và chứng chỉ; nắm vững ngữ điệu trong câu hỏi Wh- và câu hỏi Yes/No; làm chủ Danh động từ hoàn thành (Perfect Gerunds) và Mệnh đề phân từ hoàn thành (Perfect Participle Clauses); rèn 4 kĩ năng viết thư hỏi thông tin khóa học (letter of enquiry); thực hành đặt lịch hẹn.",
    pronunciation: {
      title: "Intonation in Wh-questions and Yes/No Questions (Ngữ điệu trong câu hỏi Wh- và Yes/No)",
      rule: "• Câu hỏi Wh- (What, Where, When, Why, How...) thường có ngữ điệu xuống giọng ở cuối câu (Falling intonation ➘) khi là câu hỏi trung tính tìm kiếm thông tin.\n• Câu hỏi Yes/No (Do you, Are you, Can you...) thường có ngữ điệu lên giọng ở cuối câu (Rising intonation ➚) để xác nhận thông tin.",
      examples: [
        { strong: "Wh-question: What career path do you plan to pursue? ➘", weak: "Falling at the end", word: "Wh-question", note: "Xuống giọng ở từ cuối 'pursue'." },
        { strong: "Yes/No question: Do you want to apply for a vocational course? ➚", weak: "Rising at the end", word: "Yes/No question", note: "Lên giọng ở từ cuối 'course'." },
        { strong: "Wh-question: How long does the apprenticeship take? ➘", weak: "Falling at the end", word: "Wh-question", note: "Xuống giọng ở từ cuối 'take'." }
      ]
    },
    vocab: [
      { word: "school-leaver", ipa: "/ˈskuːl liːvə(r)/", type: "noun", meaning: "học sinh vừa tốt nghiệp phổ thông", eg: "Many school-leavers choose vocational colleges to acquire hands-on practical skills quickly." },
      { word: "higher education", ipa: "/ˌhaɪər edʒuˈkeɪʃn/", type: "noun", meaning: "giáo dục đại học và sau đại học", eg: "Higher education institutions offer bachelor's, master's and doctoral degree programmes." },
      { word: "vocational school", ipa: "/vəʊˈkeɪʃənl skuːl/", type: "noun", meaning: "trường đào tạo nghề", eg: "Vocational schools train high-demand technicians, electricians, cooks and mechanics." },
      { word: "apprenticeship", ipa: "/əˈprentɪsʃɪp/", type: "noun", meaning: "chương trình học việc, vừa học vừa làm", eg: "He completed a two-year apprenticeship with an automobile manufacturing company." },
      { word: "qualification", ipa: "/ˌkwɒlɪfɪˈkeɪʃn/", type: "noun", meaning: "văn bằng, chứng chỉ chuyên môn", eg: "Acquiring a recognized professional qualification increases your chances of promotion." },
      { word: "bachelor's degree", ipa: "/ˈbætʃələz dɪɡriː/", type: "noun", meaning: "bằng cử nhân (đại học 4 năm)", eg: "She graduated with a bachelor's degree in Computer Science with top honours." },
      { word: "master's degree", ipa: "/ˈmɑːstəz dɪɡriː/", type: "noun", meaning: "bằng thạc sĩ", eg: "He plans to work for two years before pursuing a master's degree abroad." },
      { word: "doctorate", ipa: "/ˈdɒktərət/", type: "noun", meaning: "học vị tiến sĩ (PhD)", eg: "Completing a doctorate requires original academic research and a defended thesis." },
      { word: "entrance exam", ipa: "/ˈentrəns ɪɡzæm/", type: "noun", meaning: "kỳ thi tuyển sinh đầu vào", eg: "Students study diligently to achieve high scores in the university entrance exam." },
      { word: "formal education", ipa: "/ˌfɔːml edʒuˈkeɪʃn/", type: "noun", meaning: "giáo dục chính quy trong trường lớp", eg: "Both formal education and on-the-job training are valuable for career success." },
      { word: "mechanic", ipa: "/məˈkænɪk/", type: "noun", meaning: "thợ cơ khí, thợ sửa chữa máy móc", eg: "Skilled mechanics are needed to maintain modern electric vehicle fleets." },
      { word: "brochure", ipa: "/ˈbrəʊʃə(r)/", type: "noun", meaning: "sách/tờ rơi thông tin giới thiệu khóa học", eg: "The admissions office sent an informative brochure detailing course fees and credits." }
    ],
    grammar: [
      {
        title: "Perfect Gerunds & Perfect Participle Clauses (Danh động từ hoàn thành & Phân từ hoàn thành)",
        formula: "Perfect Gerund: Having + V3/ed (làm Subject hoặc Object, nhấn mạnh hành động ĐÃ HOÀN TẤT trước một hành động khác)\nPerfect Participle Clause: Having + V3/ed..., Main Clause (rút gọn mệnh đề, diễn tả hành động xảy ra trước hoặc nêu lý do)",
        desc: "• Perfect Gerund: Dùng khi muốn nhấn mạnh một hành động trong quá khứ đã kết thúc trước thời điểm của động từ chính. Ví dụ: 'He was praised for having achieved the highest test score.' Phủ định: 'Not having + V3/ed'.\n• Perfect Participle Clause: Rút gọn mệnh đề chỉ nguyên nhân hoặc thời gian trong quá khứ xảy ra trước mệnh đề chính. Ví dụ: 'Because he had passed the entrance exam, he celebrated with family' -> 'Having passed the entrance exam, he celebrated with family.'\n• Phân biệt: Gerund có chức năng như danh từ (đứng sau giới từ, làm chủ ngữ/tân ngữ); Participle clause đóng vai trò trạng ngữ rút gọn mệnh đề phụ.",
        examples: [
          { en: "He admitted having made a mistake when choosing his major without research.", vi: "Cậu ấy thừa nhận đã mắc sai lầm khi chọn ngành học mà không tìm hiểu kĩ trước đó. (Perfect Gerund làm tân ngữ sau 'admit')" },
          { en: "Having graduated from vocational college, she immediately secured a well-paid job.", vi: "Sau khi đã tốt nghiệp trường nghề, cô ấy ngay lập tức nhận được một công việc lương cao. (Perfect Participle chỉ hành động xảy ra trước)" }
        ],
        notes: "Chủ ngữ của Perfect Participle Clause phải trùng với chủ ngữ mệnh đề chính ('she' vừa là người 'having graduated', vừa là người 'secured a job')."
      }
    ],
    skills: {
      reading: "Đọc bài so sánh hai con đường học tập chính sau phổ thông: Giáo dục đại học học thuật (Academic pathway: lý thuyết sâu, thời gian 4–6 năm, hướng đến nghiên cứu quản lý) và Đào tạo nghề thực hành (Vocational pathway: thực hành máy móc, 1–3 năm, gia nhập thị trường lao động sớm, chi phí thấp).",
      speaking: "Thảo luận nhóm về việc lựa chọn con đường nghề nghiệp tương lai dựa trên sở thích, năng lực cá nhân và điều kiện kinh tế gia đình. Luyện kỹ năng đặt câu hỏi làm rõ (Can you elaborate on...?) và phản biện lịch sự (I see your point, but consider...).",
      listening: "Nghe cuộc tư vấn giữa chuyên viên tuyển sinh trường cao đẳng nghề kỹ thuật công nghệ cao và một học sinh lớp 12. Ghi chú về thời lượng khóa học, điều kiện nộp hồ sơ, chính sách thực tập có lương và tỉ lệ có việc làm sau tốt nghiệp.",
      writing: "Viết bức thư trang trọng yêu cầu cung cấp thông tin khóa học (Formal Letter of Enquiry) dài 120–150 từ gửi phòng đào tạo trường cao đẳng/đại học. Bố cục: Nêu lý do viết thư -> 3 câu hỏi cụ thể về điều kiện đầu vào, học phí, học bổng -> Đề nghị phản hồi -> Lời chào kết thúc trang trọng (Yours sincerely / Yours faithfully).",
      cultureClil: "Hệ thống giáo dục sau phổ thông tại Vương quốc Anh (UK education options): Đại học (University), Cao đẳng nâng cao (Further Education College), chương trình T-Levels (kết hợp học và thực tập 45 ngày) và chương trình Học việc trình độ cao (Degree Apprenticeship)."
    },
    everydayEnglish: {
      function: "Making, Confirming and Changing an Appointment (Đặt lịch, xác nhận và đổi lịch hẹn)",
      dialogues: [
        { speaker: "Student", text: "Good morning. I'd like to make an appointment with the career counselor, please." },
        { speaker: "Receptionist", text: "Certainly. Would Thursday at 2:30 p.m. suit you?" },
        { speaker: "Student", text: "I'm afraid I have a chemistry lab then. Could we reschedule it for Friday morning?" },
        { speaker: "Receptionist", text: "Sure, Friday at 10:00 a.m. is available. I've noted that down for you." }
      ],
      usefulPhrases: [
        "I'd like to arrange / schedule an appointment with...",
        "Would [day/time] suit you / be convenient for you?",
        "Could we postpone / reschedule our meeting to...?",
        "I'd like to confirm my appointment on...",
        "That time works perfectly for me."
      ]
    },
    project: {
      title: "Educational Institution Factsheet (Hồ Sơ Hướng Nghiệp Cơ Sở Giáo Dục)",
      guidance: "Chọn một trường đại học hoặc trường đào tạo nghề nổi tiếng tại Việt Nam hoặc quốc tế để tìm hiểu chuyên sâu.",
      deliverables: "Tập tài liệu brochure gồm: Ngành đào tạo mũi nhọn, điểm chuẩn/điều kiện xét tuyển 3 năm gần nhất, cơ hội học bổng, và phỏng vấn 1 cựu sinh viên tiêu biểu.",
      rubric: "Thông tin cập nhật chính xác (40%), Thiết kế trực quan sinh động (30%), Khả năng định hướng nghề nghiệp (30%)."
    },
    quiz: [
      {
        q: "______ all necessary entrance exams, Minh felt completely relieved and relaxed.",
        options: ["Passing", "Having passed", "Passed", "To pass"],
        ans: 1,
        exp: "Hành động 'thi đỗ' đã hoàn thành trước khi Minh cảm thấy nhẹ nhõm ('felt relieved') -> dùng Phân từ hoàn thành 'Having passed'."
      },
      {
        q: "The candidate was disqualified for ______ falsified certificates in his job application.",
        options: ["submitted", "having submitted", "to submit", "have submit"],
        ans: 1,
        exp: "Sau giới từ 'for', ta dùng Danh động từ hoàn thành 'having submitted' để nhấn mạnh hành vi nộp bằng giả đã xảy ra trước khi bị loại."
      },
      {
        q: "What is the typical intonation for the question: 'Are you planning to apply for this scholarship?'",
        options: ["Falling at the end", "Rising at the end", "Flat without change", "Rise then sharp fall"],
        ans: 1,
        exp: "Đây là câu hỏi Yes/No -> ngữ điệu chuẩn trong tiếng Anh là lên giọng ở cuối câu (Rising intonation ➚)."
      }
    ]
  },

  // UNIT 8: BECOMING INDEPENDENT
  "8": {
    num: "8",
    themeId: "theme-3",
    title: "Becoming Independent",
    pages: "86–95",
    subtitle: "Rèn luyện tính tự lập, kỹ năng sống, quản lý thời gian, tự giác học tập và làm chủ cuộc đời",
    goals: "Khám phá trường từ vựng về tự lập (independence), trách nhiệm và kỹ năng sinh tồn; nắm vững ngữ điệu trong lời mời, gợi ý và yêu cầu lịch sự; làm chủ cấu trúc Câu chẻ nhấn mạnh (Cleft Sentences with It is/was... that/who...); đọc hiểu bài học tự lập, nói hướng dẫn kỹ năng sống, viết opinion essay về tự học (self-study); thực hành chúc mừng và chúc may mắn.",
    pronunciation: {
      title: "Intonation in Invitations, Suggestions, and Polite Requests (Ngữ điệu trong lời mời, gợi ý và yêu cầu lịch sự)",
      rule: "Để lời nói thể hiện sự chân thành, ấm áp, thân thiện và không mang tính áp đặt, các câu mời mọc, gợi ý và yêu cầu lịch sự thường kết thúc bằng ngữ điệu lên giọng nhẹ (Fall-Rise ➘➚ hoặc Rising intonation ➚). Ngữ điệu xuống giọng quá gắt gỏng sẽ khiến câu nói nghe như mệnh lệnh thô lỗ.",
      examples: [
        { strong: "Would you like to join our independent study club? ➚", weak: "Friendly rise at end", word: "Invitation", note: "Lên giọng nhẹ ở cuối để lời mời nghe thân thiện." },
        { strong: "Shall we divide the household chores equally? ➚", weak: "Polite rise at end", word: "Suggestion", note: "Lên giọng để thăm dò ý kiến đối phương một cách lịch sự." },
        { strong: "Could you show me how to budget weekly expenses, please? ➚", weak: "Polite request rise", word: "Polite request", note: "Lên giọng ở 'please' thể hiện sự tôn trọng." }
      ]
    },
    vocab: [
      { word: "independence", ipa: "/ˌɪndɪˈpendəns/", type: "noun", meaning: "sự tự lập, không phụ thuộc vào người khác", eg: "Gaining independence requires developing both practical life skills and emotional resilience." },
      { word: "self-motivated", ipa: "/ˌself ˈməʊtɪveɪtɪd/", type: "adj", meaning: "có động lực tự thân, tự giác", eg: "Self-motivated students set clear learning goals and stick to their revision schedules." },
      { word: "time management", ipa: "/ˈtaɪm mænɪdʒmənt/", type: "noun", meaning: "kỹ năng quản lý thời gian hiệu quả", eg: "Good time management prevents cramming before exams and reduces academic stress." },
      { word: "responsibility", ipa: "/rɪˌspɒnsəˈbɪləti/", type: "noun", meaning: "trách nhiệm, nghĩa vụ", eg: "Living alone teaches young adults to take full responsibility for their health and budget." },
      { word: "decision-making skills", ipa: "/dɪˈsɪʒn meɪkɪŋ skɪlz/", type: "n. phr.", meaning: "kỹ năng ra quyết định", eg: "Weighing pros and cons systematically sharpens your decision-making skills." },
      { word: "independent learner", ipa: "/ˌɪndɪˈpendənt ˈlɜːnə(r)/", type: "n. phr.", meaning: "người tự học độc lập", eg: "An independent learner knows how to find trustworthy reference materials online." },
      { word: "get into the habit of", ipa: "/ɡet ˈɪntə ðə ˈhæbɪt əv/", type: "idiom", meaning: "bước vào thói quen, hình thành thói quen", eg: "Students should get into the habit of planning daily to-do lists every morning." },
      { word: "make use of", ipa: "/meɪk juːs əv/", type: "phr. v.", meaning: "tận dụng tối đa cái gì", eg: "Independent teenagers make good use of public libraries and free online courses." },
      { word: "life skill", ipa: "/ˈlaɪf skɪl/", type: "noun", meaning: "kỹ năng sống (nấu ăn, sơ cứu, sửa chữa)", eg: "Knowing how to cook healthy meals is a fundamental life skill for college life." },
      { word: "body shaming", ipa: "/ˈbɒdi ʃeɪmɪŋ/", type: "noun", meaning: "hành vi miệt thị ngoại hình người khác", eg: "Schools must educate students to reject body shaming and promote self-acceptance." },
      { word: "confidence", ipa: "/ˈkɒnfɪdəns/", type: "noun", meaning: "sự tự tin vào bản thân", eg: "Overcoming small challenges on your own builds long-lasting self-confidence." },
      { word: "obey", ipa: "/əˈbeɪ/", type: "verb", meaning: "tuân thủ, vâng lời, chấp hành", eg: "Living independently still requires you to obey community safety laws and building rules." }
    ],
    grammar: [
      {
        title: "Cleft Sentences with It is / It was ... that / who ... (Câu chẻ nhấn mạnh thành phần câu)",
        formula: "It + is / was + Emphasized Element + that / who + Remaining Clause\n• Nhấn mạnh Chủ ngữ (Subject): It is/was + S + that/who + V + O\n• Nhấn mạnh Tân ngữ (Object): It is/was + O + that + S + V\n• Nhấn mạnh Trạng ngữ (Adverbial): It is/was + Adverbial + that + S + V + O",
        desc: "• Câu chẻ (Cleft sentence) dùng để tập trung sự chú ý vào một thông tin quan trọng nhất trong câu (chủ thể hành động, người chịu tác động, thời gian, địa điểm, lý do).\n• Thời của động từ 'to be': Dùng 'It is' khi câu ở Hiện tại/Tương lai; dùng 'It was' khi câu ở Quá khứ.\n• Đại từ nối: Dùng 'who' hoặc 'that' khi nhấn mạnh người; dùng 'that' cho mọi thành phần khác (vật, nơi chốn, thời gian, trạng ngữ).",
        examples: [
          { en: "It was my mother who/that taught me how to budget my pocket money.", vi: "Chính mẹ tôi là người đã dạy tôi cách quản lý tiền tiêu vặt. (Nhấn mạnh chủ ngữ chỉ người -> It was my mother who/that)" },
          { en: "It is practical life skills that teenagers need most when living away from home.", vi: "Chính những kỹ năng sống thực tế là điều thanh thiếu niên cần nhất khi sống xa nhà. (Nhấn mạnh tân ngữ -> It is practical life skills that)" },
          { en: "It was in high school that Lan learned to become truly self-motivated.", vi: "Chính tại trường cấp ba mà Lan đã học được cách trở nên thực sự tự giác. (Nhấn mạnh trạng ngữ nơi chốn -> It was in high school that)" }
        ],
        notes: "Mẹo kiểm tra: Khi bỏ 'It is/was' và 'that/who', các từ còn lại phải ghép thành một câu hoàn chỉnh ngữ pháp."
      }
    ],
    skills: {
      reading: "Đọc bài viết phân tích 5 bước giúp thanh thiếu niên chuyển tiếp từ sự bảo bọc của cha mẹ sang cuộc sống tự lập: tự quản lý tài chính cá nhân, chăm sóc sức khỏe dinh dưỡng, duy trì kỷ luật học tập, rèn kỹ năng xử lý khủng hoảng và xây dựng mạng lưới quan hệ xã hội lành mạnh.",
      speaking: "Hướng dẫn chi tiết từng bước thực hiện một kỹ năng sống thiết yếu (nấu một bữa cơm gia đình, giặt và là ủi quần áo đúng cách, lập kế hoạch chi tiêu tuần). Sử dụng các từ chuyển tiếp thứ tự rõ ràng (First of all, Make sure to, Do not forget to, Finally).",
      listening: "Nghe bài chia sẻ kinh nghiệm của một thủ khoa đại học về phương pháp tự học độc lập (independent learning): cách phân chia thời gian theo kỹ thuật Pomodoro, tự đặt câu hỏi phản biện khi đọc tài liệu và ghi chép có hệ thống theo sơ đồ Cornell.",
      writing: "Viết bài luận nêu quan điểm (opinion essay) khoảng 120–150 từ về chủ đề: Những ưu điểm và thách thức lớn nhất của việc tự học (self-study). Cấu trúc: Giới thiệu định nghĩa tự học -> Ưu điểm (chủ động thời gian, rèn tư duy) -> Thách thức (dễ trì hoãn, thiếu người giải đáp ngay) -> Giải pháp khắc phục & Kết luận.",
      cultureClil: "Văn hóa tự lập của thanh thiếu niên Mỹ (Independent teenagers in the USA): Đa số học sinh Mỹ bắt đầu làm thêm (babysitting, giao báo, nhân viên quán cà phê) từ năm 16 tuổi để tự trả tiền xăng xe, học cách quản lý tài khoản ngân hàng và tự lập hoàn toàn khi bước chân vào đại học."
    },
    everydayEnglish: {
      function: "Expressing Best Wishes and Responding (Gửi lời chúc mừng, chúc thành công và đáp lại)",
      dialogues: [
        { speaker: "Friend", text: "I know your university entrance interview is tomorrow. Best of luck with it!" },
        { speaker: "Student", text: "Thank you so much! I really appreciate your encouragement." },
        { speaker: "Parent", text: "We wish you all the best in your new independent apartment in Ha Noi!" },
        { speaker: "Son", text: "Thanks Mom and Dad! I'll make you proud." }
      ],
      usefulPhrases: [
        "Best of luck with your...!",
        "I wish you all the best / every success!",
        "Fingers crossed for you!",
        "Congratulations on your achievement!",
        "Thank you, I'll do my best!",
        "Thanks a million for your warm wishes."
      ]
    },
    project: {
      title: "My 30-Day Life Skill Mastery Plan (Kế Hoạch 30 Ngày Làm Chủ Kỹ Năng Sống)",
      guidance: "Lập kế hoạch cá nhân chi tiết trong 30 ngày để thành thạo 1 kỹ năng sống mà bạn còn yếu (nấu 10 món ăn cơ bản, tự sửa xe đạp, quản lý thời gian ngủ đúng giờ).",
      deliverables: "Bảng theo dõi mục tiêu theo từng tuần, nhật ký ghi lại 3 bài học kinh nghiệm và ảnh/video minh chứng kết quả sau 30 ngày.",
      rubric: "Mục tiêu cụ thể đo lường được (40%), Tính kiên trì & nhật ký thực chất (30%), Sự tiến bộ rõ rệt (30%)."
    },
    quiz: [
      {
        q: "It was my elder sister ______ inspired me to become an independent learner.",
        options: ["whom", "who", "which", "whose"],
        ans: 1,
        exp: "Cấu trúc câu chẻ nhấn mạnh chủ ngữ chỉ người: 'It was + N (person) + who/that + V'."
      },
      {
        q: "It was ______ that Nam learned how to manage his weekly budget without borrowing money.",
        options: ["from his grandfather", "his grandfather", "he grandfather", "to his grandfather"],
        ans: 0,
        exp: "Nhấn mạnh trạng ngữ chỉ nguồn gốc 'từ ông của mình' -> 'It was from his grandfather that Nam learned...'."
      },
      {
        q: "Your best friend is about to take the IELTS examination tomorrow morning. What should you say?",
        options: [
          "Congratulations on failing!",
          "Best of luck with your exam tomorrow! You'll do great!",
          "Watch out for the teacher!",
          "I don't mind at all."
        ],
        ans: 1,
        exp: "'Best of luck with your exam tomorrow! You'll do great!' là lời chúc may mắn chuẩn xác, truyền năng lượng tích cực nhất."
      }
    ]
  },

  // REVIEW 3 (UNITS 6–8)
  "review-3": {
    num: "3",
    themeId: "theme-3",
    title: "Review 3 (Units 6–8)",
    pages: "96–99",
    subtitle: "Tổng hợp kiến thức trọng tâm Theme 3: Bảo tồn di sản, Con đường học tập & Hành trình rèn luyện tự lập",
    goals: "Khắc sâu: Ngữ điệu câu trần thuật/mệnh lệnh/danh sách, ngữ điệu câu hỏi Wh- vs Yes/No, ngữ điệu lời mời thân thiện; Hệ thống từ vựng di sản, văn bằng nghề nghiệp và kỹ năng sống tự lập; Nắm vững To-infinitive clauses bổ nghĩa danh từ, Perfect Gerunds & Perfect Participle Clauses, Cleft Sentences (It is/was... that/who); Luyện bài tập tích hợp 4 kĩ năng và làm bài thi khảo sát năng lực.",
    contentSummary: `• Pronunciation:
  - Intonation: Falling ở câu trần thuật/mệnh lệnh/câu hỏi Wh- (➘).
  - Intonation: Rising ở câu hỏi Yes/No và lời mời/yêu cầu thân thiện (➚).
  - Lists: Lên giọng ở các mục liệt kê đầu (➚), hạ giọng ở mục cuối (➘).
• Vocabulary:
  - Unit 6: heritage, historic vs. historical, preserve, restore, monument, citadel, performing arts, crowdfunding.
  - Unit 7: school-leaver, higher education, vocational school, apprenticeship, qualification, bachelor's degree.
  - Unit 8: independence, self-motivated, time management, decision-making skills, life skill, body shaming.
• Grammar:
  - To-infinitive clauses sau the first, the second, the only, the best... (chủ động: to V; bị động: to be V3/ed).
  - Perfect Gerund (having + V3/ed) nhấn mạnh hành động đã hoàn tất trong quá khứ trước động từ chính.
  - Perfect Participle Clause (having + V3/ed..., S + V) rút gọn mệnh đề chỉ nguyên nhân hoặc thứ tự trước-sau.
  - Cleft sentences (It is/was + Emphasized element + that/who...).
• Communication:
  - Asking for & giving directions (Excuse me, could you direct me to... / Go straight and turn left).
  - Making & rescheduling appointments (I'd like to schedule an appointment / Would Friday suit you?).
  - Expressing best wishes & responding (Best of luck with... / Thanks a lot for your warm wishes).`,
    quiz: [
      {
        q: "Ha Long Bay was the first natural site in Viet Nam ______ by UNESCO as World Heritage.",
        options: ["recognized", "to recognize", "to be recognized", "recognizing"],
        ans: 2,
        exp: "Vịnh Hạ Long 'được công nhận' (bị động) sau cụm từ có số thứ tự 'the first natural site' -> 'to be recognized'."
      },
      {
        q: "______ his cooking apprenticeship, Bao was hired immediately as a commis chef at a five-star resort.",
        options: ["Having completed", "Completed", "Have completed", "To complete"],
        ans: 0,
        exp: "Hành động 'hoàn thành khóa học việc' xảy ra và kết thúc trước khi được tuyển dụng -> dùng Phân từ hoàn thành 'Having completed'."
      },
      {
        q: "It was in the school library ______ they found the historical archives about the ancient temple.",
        options: ["which", "that", "where", "whom"],
        ans: 1,
        exp: "Trong câu chẻ nhấn mạnh trạng ngữ 'It was in the school library...', từ nối chuẩn mực luôn là 'that'."
      },
      {
        q: "Which question typically ends with a rising intonation (➚) in standard English?",
        options: [
          "Where can I register for this vocational course?",
          "Can you manage to cook meals on your own?",
          "How many heritage monuments were restored?",
          "Why did you choose this university major?"
        ],
        ans: 1,
        exp: "'Can you manage to cook meals on your own?' là câu hỏi Yes/No -> ngữ điệu lên giọng ở cuối câu."
      }
    ]
  },

  // UNIT 9: SOCIAL ISSUES
  "9": {
    num: "9",
    themeId: "theme-4",
    title: "Social Issues",
    pages: "100–109",
    subtitle: "Các vấn đề xã hội ảnh hưởng đến thanh thiếu niên: Áp lực đồng trang lứa, bắt nạt học đường và nghèo đói",
    goals: "Khám phá trường từ vựng về các vấn đề xã hội học đường (peer pressure, bullying, cyberbullying, depression); nắm vững ngữ điệu trong câu hỏi lựa chọn (choice questions); làm chủ toàn diện các từ nối và cụm từ nối liên kết câu (Linking Words and Phrases: addition, contrast, cause/effect, condition, sequence); đọc hiểu về áp lực đồng trang lứa, nói về cách tìm trợ giúp, viết bản đề xuất (proposal) cho chiến dịch chống bắt nạt trên mạng; thực hành bày tỏ sự thất vọng và đồng cảm.",
    pronunciation: {
      title: "Intonation in Choice Questions (Ngữ điệu trong câu hỏi lựa chọn)",
      rule: "Trong câu hỏi lựa chọn có từ nối 'or', người nói sẽ lên giọng ở vế lựa chọn đầu tiên (Rising intonation ➚) và hạ giọng dứt khoát ở vế lựa chọn cuối cùng (Falling intonation ➘). Điều này giúp người nghe phân biệt rõ ràng các phương án và nhận biết câu hỏi đã kết thúc.",
      examples: [
        { strong: "Do you prefer talking to parents ➚ or seeking advice from friends? ➘", weak: "Rise on parents, Fall on friends", word: "Choice 1", note: "Lên giọng ở 'parents', xuống giọng ở 'friends'." },
        { strong: "Is cyberbullying more common on social networks ➚ or online gaming platforms? ➘", weak: "Rise on social networks, Fall on platforms", word: "Choice 2", note: "Lên giọng ở lựa chọn 1, xuống giọng ở lựa chọn 2." }
      ]
    },
    vocab: [
      { word: "peer pressure", ipa: "/ˈpɪə preʃə(r)/", type: "noun", meaning: "áp lực từ bạn bè cùng trang lứa", eg: "Many teenagers take up smoking or vaping simply due to intense peer pressure." },
      { word: "cyberbullying", ipa: "/ˈsaɪbəbʊliɪŋ/", type: "noun", meaning: "hành vi bắt nạt qua mạng internet", eg: "Cyberbullying on social media can cause severe depression and anxiety for young victims." },
      { word: "social issue", ipa: "/ˌsəʊʃl ˈɪʃuː/", type: "noun", meaning: "vấn đề nhức nhối của xã hội", eg: "Poverty, substance abuse, and juvenile crime are urgent social issues requiring joint action." },
      { word: "stand up to", ipa: "/stænd ʌp tuː/", type: "phr. v.", meaning: "dũng cảm đứng lên chống lại, đối đầu", eg: "Students should be trained to safely stand up to bullies and defend vulnerable peers." },
      { word: "anxiety", ipa: "/æŋˈzaɪəti/", type: "noun", meaning: "sự lo âu, cảm giác bất an thường trực", eg: "Academic expectations and social media comparisons often trigger severe anxiety in teens." },
      { word: "depression", ipa: "/dɪˈpreʃn/", type: "noun", meaning: "chứng trầm cảm, suy sụp tinh thần", eg: "Early psychological counseling helps prevent depression from spiraling out of control." },
      { word: "poverty line", ipa: "/ˈpɒvəti laɪn/", type: "noun", meaning: "chuẩn nghèo, ngưỡng nghèo", eg: "Millions of disadvantaged families still struggle to survive below the national poverty line." },
      { word: "campaign", ipa: "/kæmˈpeɪn/", type: "noun", meaning: "chiến dịch truyền thông, phong trào xã hội", eg: "The school launched a zero-tolerance campaign against bullying and harassment." },
      { word: "victim", ipa: "/ˈvɪktɪm/", type: "noun", meaning: "nạn nhân của hành vi bạo lực/bất công", eg: "Victims of verbal bullying need empathetic emotional support and legal protection." },
      { word: "the odd one out", ipa: "/ði ɒd wʌn aʊt/", type: "idiom", meaning: "người khác biệt, kẻ lạc lõng trong tập thể", eg: "She feared being the odd one out if she refused to join the late-night party." },
      { word: "awareness", ipa: "/əˈweənəs/", type: "noun", meaning: "nhận thức của cộng đồng", eg: "Raising public awareness is the first crucial step in eliminating body shaming." },
      { word: "admit", ipa: "/ədˈmɪt/", type: "verb", meaning: "thừa nhận sự thật, thú nhận", eg: "He finally admitted that he was struggling with peer pressure and requested help." }
    ],
    grammar: [
      {
        title: "Linking Words and Phrases (Từ nối và Cụm từ nối liên kết văn bản)",
        formula: "Addition: also, moreover, furthermore, in addition to + N/V-ing\nContrast: however, although + clause, despite / in spite of + N/V-ing, on the other hand\nCause & Effect: because + clause, because of + N/V-ing, therefore, as a result, consequently\nSequence & Example: first, next, finally; for example, for instance; in conclusion",
        desc: "• Từ nối giúp liên kết các câu và đoạn văn một cách mạch lạc, logic.\n• Phân biệt mệnh đề vs. cụm từ:\n  - 'Although' + Mệnh đề (S + V) >< 'Despite / In spite of' + Cụm danh từ / V-ing.\n  - 'Because' + Mệnh đề (S + V) >< 'Because of / Due to' + Cụm danh từ / V-ing.\n  - 'However / Therefore': Đứng đầu câu thường có dấu phẩy ngăn cách (e.g., 'He worked hard. However, he failed.').",
        examples: [
          { en: "Although she felt intimidated by the bullies, she bravely reported the incident to the teacher.", vi: "Mặc dù cô ấy cảm thấy sợ hãi trước những kẻ bắt nạt, cô ấy vẫn dũng cảm báo cáo vụ việc cho giáo viên. (Although + clause)" },
          { en: "Despite suffering from intense peer pressure, he stayed true to his personal principles.", vi: "Mặc dù phải chịu áp lực bạn bè dữ dội, cậu ấy vẫn kiên định với nguyên tắc cá nhân. (Despite + V-ing)" },
          { en: "Cyberbullying causes emotional distress; therefore, strict platform rules must be enforced.", vi: "Bắt nạt qua mạng gây tổn thương tinh thần; do đó, các quy tắc nền tảng nghiêm ngặt phải được thực thi. (Therefore chỉ kết quả)" }
        ],
        notes: "Lỗi phổ biến nhất: Dùng cả 'Although' và 'But' trong cùng một câu (sai: *Although it rained, but we went* -> đúng: *Although it rained, we went*)."
      }
    ],
    skills: {
      reading: "Đọc bài nghiên cứu tâm lý học đường về nguyên nhân sâu xa của áp lực bạn bè (peer pressure): nỗi sợ bị cô lập, nhu cầu khẳng định bản thân và hội chứng sợ bỏ lỡ (FOMO - Fear Of Missing Out). Nhận diện các dấu hiệu cảnh báo khi học sinh bị lôi kéo vào hành vi tiêu cực.",
      speaking: "Đóng vai xử lý tình huống (role-play): Một bạn học sinh bị bạn bè ép buộc bỏ học đi chơi game và cách ứng xử khéo léo nhưng dứt khoát từ chối mà không làm rạn nứt tình bạn. Chia sẻ các kênh hỗ trợ tâm lý đáng tin cậy tại trường.",
      listening: "Nghe câu chuyện có thật của một nạn nhân từng bị bắt nạt học đường trên mạng xã hội, hành trình bạn vượt qua nỗi sợ hãi nhờ sự can thiệp kịp thời của gia đình, thầy cô và việc tìm lại sự tự tin qua các hoạt động thể thao thiện nguyện.",
      writing: "Viết bản đề xuất (proposal) dài 120–150 từ cho Ban giám hiệu trường học về: 'Chiến dịch Nâng cao Nhận thức và Phòng chống Bắt nạt Trực tuyến' (Anti-Cyberbullying Awareness Campaign). Trình bày rõ: Lý do cấp thiết -> Mục tiêu cụ thể -> 3 hoạt động trọng điểm (tọa đàm, cuộc thi sáng tác poster, hòm thư ẩn danh) -> Đánh giá hiệu quả.",
      cultureClil: "Các vấn đề xã hội nóng đối với thanh thiếu niên Mỹ hiện nay: Áp lực nợ học phí đại học (student loan debt), khủng hoảng tâm lý do sử dụng mạng xã hội quá mức và phong trào học sinh đứng lên vận động kiểm soát bạo lực súng đạn học đường."
    },
    everydayEnglish: {
      function: "Expressing Disappointment and Sympathy (Bày tỏ sự thất vọng và đồng cảm, an ủi)",
      dialogues: [
        { speaker: "Lan", text: "I didn't get selected for the student council anti-bullying committee." },
        { speaker: "Minh", text: "What a shame! I know how much effort you put into it. Don't be discouraged!" },
        { speaker: "Tom", text: "Our campaign video didn't win the first prize as we had hoped." },
        { speaker: "Teacher", text: "I'm sorry to hear that, but your message reached thousands of peers. You should be proud!" }
      ],
      usefulPhrases: [
        "What a shame / pity!",
        "I'm really sorry to hear that.",
        "Don't let it get you down! / Cheer up!",
        "I completely understand how you feel.",
        "That must have been so difficult for you.",
        "Keep your chin up!"
      ]
    },
    project: {
      title: "Anti-Cyberbullying School Campaign (Chiến Dịch Trường Học Chống Bắt Nạt Mạng)",
      guidance: "Xây dựng kế hoạch truyền thông hoàn chỉnh cho một tuần lễ hành động chống bắt nạt trên không gian mạng tại trường bạn.",
      deliverables: "Tên thông điệp chiến dịch, kịch bản 1 video tiểu phẩm ngắn 2 phút, thiết kế 1 infographic cẩm nang 5 bước xử lý khi bị đe dọa trực tuyến.",
      rubric: "Thông điệp nhân văn sâu sắc (40%), Tính ứng dụng thực tế (30%), Sản phẩm truyền thông hấp dẫn (30%)."
    },
    quiz: [
      {
        q: "______ experiencing severe anxiety before public speaking, she delivered a compelling presentation.",
        options: ["Although", "Despite", "Because", "However"],
        ans: 1,
        exp: "Phía sau là cụm danh động từ 'experiencing severe anxiety' -> dùng 'Despite' để chỉ sự tương phản."
      },
      {
        q: "Social media allows instant communication; ______, it can spread cyberbullying rapidly if unmonitored.",
        options: ["moreover", "however", "therefore", "because"],
        ans: 1,
        exp: "Hai mệnh đề mang ý nghĩa tương phản đối lập nhau -> dùng trạng từ liên kết 'however' (tuy nhiên)."
      },
      {
        q: "Your friend is crying because of mean comments posted on her Facebook photo. What is the most empathetic response?",
        options: [
          "It's your fault for posting it.",
          "I'm so sorry you had to go through this. I'm right here with you.",
          "Whatever, nobody cares.",
          "You should have been stronger."
        ],
        ans: 1,
        exp: "'I'm so sorry you had to go through this. I'm right here with you' là cách thể hiện sự đồng cảm và sẵn sàng chia sẻ nâng đỡ tinh thần bạn."
      }
    ]
  },

  // UNIT 10: THE ECOSYSTEM
  "10": {
    num: "10",
    themeId: "theme-4",
    title: "The Ecosystem",
    pages: "110–119",
    subtitle: "Hệ sinh thái, đa dạng sinh học, chuỗi thức ăn, bảo tồn loài nguy cấp và lối sống xanh",
    goals: "Làm chủ trường từ vựng về hệ sinh thái, sinh cảnh, quần thể động thực vật và chuỗi thức ăn; nắm vững quy tắc ngữ điệu câu hỏi đuôi (intonation in question tags); phân biệt và cấu tạo danh từ ghép (Compound Nouns); đọc bài về vườn quốc gia, nói về bảo vệ đa dạng sinh học, viết opinion essay về đầu tư phục hồi thiên nhiên; thực hành bày tỏ sở thích (likes and dislikes).",
    pronunciation: {
      title: "Intonation in Question Tags (Ngữ điệu trong câu hỏi đuôi)",
      rule: "• Khi người nói CHẮC CHẮN về thông tin và chỉ muốn người nghe xác nhận hoặc đồng tình, ngữ điệu ở phần đuôi sẽ xuống giọng (Falling intonation ➘).\n• Khi người nói THỰC SỰ CHƯA CHẮC CHẮN và muốn hỏi để biết thông tin thực tế, ngữ điệu ở phần đuôi sẽ lên giọng (Rising intonation ➚).",
      examples: [
        { strong: "Confirmation: Coral reefs are vital marine ecosystems, aren't they? ➘", weak: "Falling tag", word: "Confirmation", note: "Xuống giọng ở đuôi 'aren't they' để mong đợi sự đồng tình." },
        { strong: "Real question: You haven't visited Cuc Phuong National Park, have you? ➚", weak: "Rising tag", word: "Real question", note: "Lên giọng ở đuôi 'have you' vì người nói thực sự không biết bạn đã đi chưa." }
      ]
    },
    vocab: [
      { word: "biodiversity", ipa: "/ˌbaɪəʊdaɪˈvɜːsəti/", type: "noun", meaning: "đa dạng sinh học", eg: "Tropical rainforests boast the richest terrestrial biodiversity on Earth." },
      { word: "ecosystem", ipa: "/ˈiːkəʊsɪstəm/", type: "noun", meaning: "hệ sinh thái (sinh vật và môi trường sống)", eg: "Pollution and overfishing can trigger the collapse of an entire marine ecosystem." },
      { word: "habitat", ipa: "/ˈhæbɪtæt/", type: "noun", meaning: "môi trường sống tự nhiên, sinh cảnh của một loài", eg: "Deforestation destroys the natural habitats of thousands of endangered species." },
      { word: "food chain", ipa: "/ˈfuːd tʃeɪn/", type: "noun", meaning: "chuỗi thức ăn trong tự nhiên", eg: "Apex predators like tigers and eagles play a critical role at the top of the food chain." },
      { word: "coral reef", ipa: "/ˈkɒrəl riːf/", type: "noun", meaning: "rạn san hô", eg: "Rising ocean temperatures cause widespread bleaching of sensitive coral reefs." },
      { word: "endangered", ipa: "/ɪnˈdeɪndʒəd/", type: "adj", meaning: "bị đe dọa, có nguy cơ tuyệt chủng", eg: "The red-shanked douc langur and pangolin are critically endangered mammals in Viet Nam." },
      { word: "flora", ipa: "/ˈflɔːrə/", type: "noun", meaning: "hệ thực vật của một vùng", eg: "The national park is home to hundreds of rare medicinal flora species." },
      { word: "fauna", ipa: "/ˈfɔːnə/", type: "noun", meaning: "hệ động vật của một vùng", eg: "Scientists documented fascinating nocturnal fauna living in the karst caves." },
      { word: "conservation", ipa: "/ˌkɒnsəˈveɪʃn/", type: "noun", meaning: "công tác bảo tồn thiên nhiên", eg: "Community-based conservation empowers indigenous people to protect native forests." },
      { word: "pangolin", ipa: "/pæŋˈɡəʊlɪn/", type: "noun", meaning: "con tê tê (động vật có vảy quý hiếm)", eg: "Pangolins are the most illegally trafficked wild mammals in the world." },
      { word: "national park", ipa: "/ˌnæʃnəl ˈpɑːk/", type: "noun", meaning: "vườn quốc gia, khu bảo tồn thiên nhiên", eg: "Cat Tien National Park protects lowland tropical rainforest ecosystems." },
      { word: "destroy", ipa: "/dɪˈstrɔɪ/", type: "verb", meaning: "phá hủy, tàn phá nghiêm trọng", eg: "Unregulated infrastructure projects risk destroying fragile wetland deltas." }
    ],
    grammar: [
      {
        title: "Compound Nouns (Danh từ ghép)",
        formula: "Noun + Noun (e.g., national park, food chain)\nAdjective + Noun (e.g., greenhouse gas, wildlife)\nVerb-ing + Noun (e.g., washing machine, breeding ground)\nNoun + Verb-ing / Prepositional phrase (e.g., bird-watching, mother-in-law)",
        desc: "• Danh từ ghép là từ tạo bởi hai hoặc nhiều từ đơn kết hợp lại để mang một ý nghĩa chuyên biệt mới.\n• Trọng âm của danh từ ghép: Thông thường trọng âm rơi vào THÀNH TỐ ĐẦU TIÊN (e.g., 'NAT-ional park, 'FOOD chain, 'RAIN-forest).\n• Hình thức số nhiều: Thường thêm số nhiều vào THÀNH TỐ DANH TỪ CHÍNH (e.g., national parks, coral reefs, washing machines, mothers-in-law).",
        examples: [
          { en: "The Mekong Delta is a fertile breeding ground for numerous migratory birds.", vi: "Đồng bằng sông Cửu Long là bãi sinh sản màu mỡ cho nhiều loài chim di cư. (Danh từ ghép: breeding ground)" },
          { en: "Eco-friendly national parks enforce strict rules against littering.", vi: "Các vườn quốc gia thân thiện với môi trường thực thi quy định nghiêm ngặt chống xả rác. (Số nhiều ở thành tố sau: national parks)" }
        ],
        notes: "Phân biệt: 'a 'green house' (ngôi nhà sơn màu xanh - cụm tính từ + danh từ, trọng âm ở house) với 'a 'greenhouse' (nhà kính trồng cây - danh từ ghép, trọng âm ở green)."
      }
    ],
    skills: {
      reading: "Đọc bài khảo cứu về Vườn quốc gia Cát Bà (Hải Phòng) - khu dự trữ sinh quyển thế giới với hệ sinh thái rừng mưa nhiệt đới trên núi đá vôi, rừng ngập mặn và rạn san hô biển. Tìm hiểu tình trạng bảo tồn loài Voọc Cát Bà (Cat Ba langur) - một trong những loài linh trưởng nguy cấp nhất hành tinh.",
      speaking: "Thảo luận về các giải pháp phục hồi và bảo vệ hệ sinh thái địa phương (trồng rừng ngập mặn ven biển, ngừng ăn thịt thú rừng, dọn rác bãi san hô, chuyển đổi sang lối sống xanh không rác thải). Thuyết phục các bạn cùng cam kết hành động.",
      listening: "Nghe bài giảng sinh thái học về 'Hiệu ứng domino trong chuỗi thức ăn' (Trophic cascades): Chuyện gì sẽ xảy ra khi một loài động vật ăn thịt đầu bảng (apex predator) hoặc một loài thụ phấn (loài ong) biến mất hoàn toàn khỏi hệ sinh thái.",
      writing: "Viết bài luận nêu quan điểm (opinion essay) dài 120–150 từ về chủ đề: Chính phủ và địa phương có nên đầu tư ngân sách đáng kể vào việc phục hồi các hệ sinh thái bị suy thoái hay không? (Mở bài nêu tầm quan trọng của hệ sinh thái -> Luận điểm 1: Giá trị kinh tế và dịch vụ môi trường như ngăn lũ, lọc nước -> Luận điểm 2: Trách nhiệm đạo đức với thế hệ tương lai -> Phản biện về chi phí -> Kết luận).",
      cultureClil: "Các sáng kiến phục hồi hệ sinh thái quy mô lớn trên thế giới: Dự án 'Bức tường xanh vĩ đại của châu Phi' (The Great Green Wall - trồng dải rừng dài 8.000 km ngăn sa mạc Sahara) và chiến dịch phục hồi rạn san hô nhân tạo Great Barrier Reef ở Úc."
    },
    everydayEnglish: {
      function: "Expressing Likes and Dislikes (Bày tỏ sở thích, niềm say mê và điều không thích)",
      dialogues: [
        { speaker: "Nam", text: "Are you keen on outdoor eco-tours or camping in the forest?" },
        { speaker: "Linh", text: "I'm really into trekking in national parks! Being surrounded by wildlife is incredible." },
        { speaker: "Nam", text: "How do you feel about boat trips to watch birds?" },
        { speaker: "Linh", text: "To be honest, I can't stand sitting still for hours in the hot sun." }
      ],
      usefulPhrases: [
        "I'm really into / passionate about...",
        "I'm keen on / fond of...",
        "I find... absolutely fascinating / enjoyable.",
        "I'm not a big fan of...",
        "I can't stand / I detest...",
        "It doesn't really appeal to me."
      ]
    },
    project: {
      title: "Local Ecosystem Restoration Poster (Poster Phục Hồi Hệ Sinh Thái)",
      guidance: "Thiết kế poster về một hệ sinh thái cụ thể tại địa phương (vùng ngập mặn, đầm sen, đồi thông, sông ngòi) đang bị ô nhiễm hoặc suy thoái.",
      deliverables: "Mô tả các loài sinh vật tiêu biểu, các mối nguy hại hiện hữu (nước thải, rác nhựa, săn bắt), 4 hành động phục hồi khả thi và thông điệp kêu gọi hành động.",
      rubric: "Độ chính xác sinh thái (40%), Tính trực quan mỹ thuật (30%), Khẩu hiệu truyền cảm hứng (30%)."
    },
    quiz: [
      {
        q: "Forest destruction severely damages the natural ______ of thousands of wild species.",
        options: ["habits", "habitats", "inhabitants", "habitations"],
        ans: 1,
        exp: "'habitat' (môi trường sống tự nhiên của động thực vật) là từ chuẩn xác, tránh nhầm lẫn với 'habit' (thói quen cá nhân)."
      },
      {
        q: "Which of the following is a compound noun with the primary stress on the first element?",
        options: ["national park", "greenhouse gas", "food chain", "All of the above"],
        ans: 3,
        exp: "Tất cả 'national park', 'greenhouse gas', 'food chain' đều là danh từ ghép và có trọng âm rơi vào từ đầu tiên."
      },
      {
        q: "The speaker is completely sure about the fact: 'Viet Nam has extraordinary marine biodiversity, ______?' (Falling tone)",
        options: ["has it", "hasn't it", "does it", "doesn't it"],
        ans: 3,
        exp: "Mệnh đề chính dùng 'has' (động từ thường thì Hiện tại đơn: Viet Nam has...) -> câu hỏi đuôi tương ứng là 'doesn't it?'."
      }
    ]
  },

  // REVIEW 4 (UNITS 9–10)
  "review-4": {
    num: "4",
    themeId: "theme-4",
    title: "Review 4 (Units 9–10)",
    pages: "120–123",
    subtitle: "Tổng hợp kiến thức trọng tâm Theme 4: Vấn đề xã hội học đường & Bảo tồn hệ sinh thái Trái Đất",
    goals: "Khắc sâu: Ngữ điệu câu hỏi lựa chọn (choice questions: lên ở đầu, xuống ở cuối), ngữ điệu câu hỏi đuôi (question tags: xuống để xác nhận, lên để hỏi thật); Từ vựng bạo lực học đường, áp lực bạn bè, chuỗi thức ăn, đa dạng sinh học và loài nguy cấp; Nắm chắc toàn bộ hệ thống từ nối (Linking words/phrases) và Cấu trúc danh từ ghép (Compound nouns); Luyện đề kiểm tra tổng hợp cuối năm học.",
    contentSummary: `• Pronunciation:
  - Intonation in choice questions: Lên giọng ở lựa chọn trước (➚), xuống giọng ở lựa chọn cuối cùng (➘).
  - Intonation in question tags: Xuống giọng (➘) khi chắc chắn/chờ đồng thuận; Lên giọng (➚) khi hỏi thật sự.
• Vocabulary:
  - Unit 9: peer pressure, cyberbullying, social issue, anxiety, depression, poverty line, stand up to, campaign.
  - Unit 10: biodiversity, ecosystem, habitat, food chain, coral reef, endangered, national park, pangolin.
• Grammar:
  - Linking words and phrases theo nhóm chức năng:
    + Addition: in addition to, moreover, furthermore, also.
    + Contrast: although/even though (+ clause) vs. despite/in spite of (+ N/V-ing); however, nevertheless.
    + Cause & Effect: because/since (+ clause) vs. because of/due to (+ N/V-ing); therefore, as a result.
  - Compound nouns (danh từ ghép: N+N, Adj+N, V-ing+N); trọng âm từ đầu, dạng số nhiều ở từ chính.
• Communication:
  - Expressing disappointment & sympathy (What a shame! / Don't let it get you down).
  - Expressing likes & dislikes (I'm really into... / I can't stand...).`,
    quiz: [
      {
        q: "______ many conservation efforts, some rare wildlife species are still on the brink of extinction.",
        options: ["Although", "Despite", "Because", "However"],
        ans: 1,
        exp: "Phía sau là cụm danh từ 'many conservation efforts' -> dùng 'Despite' để chỉ sự tương phản đối lập."
      },
      {
        q: "Plastic waste chokes marine life; ______, coastal cleanup campaigns are organized every weekend.",
        options: ["moreover", "however", "therefore", "although"],
        ans: 2,
        exp: "Mệnh đề sau là kết quả tất yếu của mệnh đề trước -> dùng trạng từ liên kết nguyên nhân - kết quả 'therefore'."
      },
      {
        q: "What is the correct plural form of the compound noun 'greenhouse'?",
        options: ["greenhouses", "greenshouse", "greenshouses", "greenhousen"],
        ans: 0,
        exp: "Số nhiều của 'greenhouse' được thêm '-s' vào thành tố danh từ chính ở cuối -> 'greenhouses'."
      },
      {
        q: "In a choice question: 'Would you rather clean up the mangrove forest ➚ or plant native trees ______?'",
        options: ["with rising intonation", "with falling intonation", "with flat tone", "with whisper"],
        ans: 1,
        exp: "Trong câu hỏi lựa chọn, vế lựa chọn cuối cùng luôn được phát âm với ngữ điệu xuống giọng (falling intonation ➘)."
      }
    ]
  }
};

// 11 Core Grammar Points (Tong hop ngu phap toan sach theo SGK Tieng Anh 11)
const grammarCheatsheet = [
  {
    num: 1,
    title: "Past Simple vs. Present Perfect",
    unit: "Unit 1",
    formula: "Past Simple: S + V2/ed | Present Perfect: S + have/has + V3/ed",
    usage: "Past Simple dùng cho mốc quá khứ đã đóng hoàn toàn (yesterday, in 2020, 2 days ago). Present Perfect dùng cho kinh nghiệm (ever, never), kết quả gắn với hiện tại (just, already, yet), hoặc hành động kéo dài từ quá khứ đến nay (since + mốc, for + khoảng).",
    warning: "Không dùng Present Perfect với các mốc thời gian quá khứ cụ thể đã kết thúc như yesterday, last night."
  },
  {
    num: 2,
    title: "Modal Verbs: Must, Have to, Should",
    unit: "Unit 2",
    formula: "Must / Have to / Should + V-bare",
    usage: "• Must: Nghĩa vụ xuất phát từ cảm xúc/ý chí chủ quan của người nói.\n• Have to: Nghĩa vụ xuất phát từ quy định, luật lệ, hoàn cảnh khách quan.\n• Mustn't: Cấm đoán tuyệt đối.\n• Don't have to: Không bắt buộc, không cần thiết.\n• Should: Lời khuyên nên làm.",
    warning: "Phân biệt rạch ròi: Mustn't (cấm) khác hoàn toàn Don't have to (không bắt buộc)."
  },
  {
    num: 3,
    title: "Stative Verbs & Linking Verbs",
    unit: "Unit 3",
    formula: "Stative: Simple tenses only | Linking Verb + Adjective",
    usage: "• Stative verbs (know, believe, understand, love, own) không dùng ở thì tiếp diễn ở nghĩa trạng thái.\n• Linking verbs (be, look, seem, feel, taste, smell, sound) nối chủ ngữ với tính từ bổ nghĩa cho chủ ngữ (không dùng trạng từ).",
    warning: "The food tastes delicious (tính từ), KHÔNG dùng *tastes deliciously*."
  },
  {
    num: 4,
    title: "Gerunds as Subjects and Objects",
    unit: "Unit 4",
    formula: "Subject: V-ing + V(singular) | Object: Verb + V-ing | Prep + V-ing",
    usage: "Danh động từ đóng vai trò danh từ: làm chủ ngữ số ít, tân ngữ sau một số động từ (enjoy, avoid, suggest, mind, consider, involve) và sau mọi giới từ.",
    warning: "Phủ định của Gerund là 'Not + V-ing' (e.g. He apologized for not calling)."
  },
  {
    num: 5,
    title: "Participle Clauses (Present & Past)",
    unit: "Unit 5",
    formula: "Active: V-ing..., Main Clause | Passive: V3/ed..., Main Clause",
    usage: "Rút gọn mệnh đề: Present participle (V-ing) cho nghĩa chủ động, hành động đồng thời hoặc nguyên nhân. Past participle (V3/ed) cho nghĩa bị động.",
    warning: "Quy tắc đồng chủ ngữ: Chủ ngữ ngầm của phân từ BẮT BUỘC trùng với chủ ngữ của mệnh đề chính."
  },
  {
    num: 6,
    title: "To-infinitive Clauses modifying Nouns",
    unit: "Unit 6",
    formula: "Noun (the first / last / only / superlative) + to V / to be V3/ed",
    usage: "Rút gọn mệnh đề quan hệ sau danh từ có số thứ tự (the first, the second), the only, the last hoặc tính từ so sánh nhất.",
    warning: "Chủ động dùng 'to V' (the first to arrive), bị động dùng 'to be V3/ed' (the first to be built)."
  },
  {
    num: 7,
    title: "Perfect Gerunds & Perfect Participle Clauses",
    unit: "Unit 7",
    formula: "Having + V3/ed (Gerund or Participle Clause)",
    usage: "Nhấn mạnh hành động đã hoàn tất trong quá khứ trước một hành động khác. Dùng làm tân ngữ sau giới từ hoặc rút gọn mệnh đề nguyên nhân/thời gian.",
    warning: "Khác với V-ing thông thường, 'Having + V3/ed' nhấn mạnh tính chất hoàn thành dứt điểm."
  },
  {
    num: 8,
    title: "Cleft Sentences with It is/was... that/who...",
    unit: "Unit 8",
    formula: "It is / was + Emphasized Element + that / who + Remaining Clause",
    usage: "Nhấn mạnh chủ ngữ, tân ngữ hoặc trạng ngữ trong câu. Dùng 'who' hoặc 'that' cho người, dùng 'that' cho các thành phần còn lại.",
    warning: "Thời của 'to be' phụ thuộc vào thời của câu gốc: quá khứ dùng 'It was', hiện tại dùng 'It is'."
  },
  {
    num: 9,
    title: "Linking Words and Phrases",
    unit: "Unit 9",
    formula: "Addition, Contrast, Cause/Effect, Sequence, Conclusion",
    usage: "• Addition: moreover, furthermore, in addition to.\n• Contrast: although + clause vs. despite + N/V-ing; however.\n• Cause & Effect: because + clause vs. because of + N/V-ing; therefore, as a result.",
    warning: "Không bao giờ dùng cặp từ 'Although... but...' trong cùng một câu tiếng Anh."
  },
  {
    num: 10,
    title: "Compound Nouns (Danh từ ghép)",
    unit: "Unit 10",
    formula: "Noun + Noun | Adj + Noun | V-ing + Noun",
    usage: "Tạo từ mới từ hai hoặc nhiều từ đơn. Trọng âm thường rơi vào thành tố đầu tiên ('national park, 'food chain). Hình thức số nhiều đánh dấu ở danh từ chính.",
    warning: "Số nhiều đổi ở từ chính (e.g. coral reefs, national parks, mothers-in-law)."
  },
  {
    num: 11,
    title: "Comprehensive Intonation System (Hệ thống ngữ điệu toàn sách)",
    unit: "Units 1–10",
    formula: "Falling (➘) vs. Rising (➚) vs. Fall-Rise (➘➚)",
    usage: "• Xuống giọng (➘): Câu trần thuật, mệnh lệnh, câu hỏi Wh-, lựa chọn cuối cùng trong câu hỏi choice, câu hỏi đuôi chờ xác nhận.\n• Lên giọng (➚): Câu hỏi Yes/No, các mục liệt kê phía trước, lời mời/yêu cầu lịch sự, câu hỏi đuôi hỏi thật.",
    warning: "Ngữ điệu thể hiện thái độ và cảm xúc của người nói, tránh nói giọng đều đều đơn điệu."
  }
];

// 10 Everyday English Communication Functions
const communicationHandbook = [
  {
    id: 1,
    function: "Offering Help and Responding",
    unit: "Unit 1",
    phrases: ["Can I give you a hand with...?", "Would you like me to...?", "Shall I help you with...?"],
    responses: ["That would be wonderful, thank you!", "Thanks a lot, but I can manage it myself."]
  },
  {
    id: 2,
    function: "Asking for and Giving Permission",
    unit: "Unit 2",
    phrases: ["May I / Can I please...?", "Do you mind if I...?", "Is it okay if I...?"],
    responses: ["Sure, go right ahead!", "Not at all.", "I'm afraid you can't right now, because..."]
  },
  {
    id: 3,
    function: "Expressing Certainty and Uncertainty",
    unit: "Unit 3",
    phrases: ["I'm quite sure / certain that...", "I have no doubt that...", "I'm not really sure whether..."],
    responses: ["I agree completely.", "It may take longer than expected."]
  },
  {
    id: 4,
    function: "Giving Compliments and Responding",
    unit: "Unit 4",
    phrases: ["What a fantastic presentation!", "You did an amazing job with...", "I really admire how you..."],
    responses: ["Thank you, that's very kind of you!", "Thanks, it means a lot to me."]
  },
  {
    id: 5,
    function: "Giving Warnings and Responding",
    unit: "Unit 5",
    phrases: ["Watch out! / Look out!", "Be careful not to...", "Whatever you do, don't..."],
    responses: ["Thanks for warning me!", "Don't worry, I will be careful."]
  },
  {
    id: 6,
    function: "Asking for and Giving Directions",
    unit: "Unit 6",
    phrases: ["Excuse me, could you direct me to...?", "How do I get to the museum?"],
    responses: ["Go straight ahead, then turn left at the traffic light.", "It's on your right, opposite the station."]
  },
  {
    id: 7,
    function: "Making, Confirming and Rescheduling Appointments",
    unit: "Unit 7",
    phrases: ["I'd like to schedule an appointment with...", "Could we reschedule our meeting to...?"],
    responses: ["Would Friday at 10 a.m. suit you?", "I've noted that down for you."]
  },
  {
    id: 8,
    function: "Expressing Best Wishes and Responding",
    unit: "Unit 8",
    phrases: ["Best of luck with your exam!", "I wish you all the best and every success!"],
    responses: ["Thank you so much! I'll do my best.", "Thanks a million for your encouragement!"]
  },
  {
    id: 9,
    function: "Expressing Disappointment and Sympathy",
    unit: "Unit 9",
    phrases: ["What a shame / pity!", "I'm really sorry to hear that.", "Don't let it get you down!"],
    responses: ["Thank you for understanding.", "I'll try harder next time."]
  },
  {
    id: 10,
    function: "Expressing Likes and Dislikes",
    unit: "Unit 10",
    phrases: ["I'm really into / passionate about...", "I'm keen on...", "I can't stand / I detest..."],
    responses: ["Me too! It's so exciting.", "Really? It doesn't really appeal to me."]
  }
];

// 6 Core Writing Genres in Grade 11
const writingGenres = [
  { genre: "Short Message / Note", unit: "Unit 1", length: "60–80 words", keyPoints: "Mục đích rõ ràng, ngắn gọn, giọng điệu thân mật, thông tin đầy đủ về lời khuyên sức khỏe." },
  { genre: "Opinion Essay", unit: "Units 2, 8, 10", length: "120–150 words", keyPoints: "Mở bài nêu luận đề (thesis statement) -> 2 đoạn thân bài nêu luận điểm + dẫn chứng -> Kết luận khẳng định lại quan điểm." },
  { genre: "Advantages & Disadvantages Essay", unit: "Unit 3", length: "120–150 words", keyPoints: "Tổ chức 2 mặt cân bằng, dùng từ nối tương phản (On the one hand, On the other hand), kết luận công bằng." },
  { genre: "Event / Action Proposal", unit: "Units 4, 9", length: "120–150 words", keyPoints: "Tiêu đề dự án -> Mục tiêu (Objectives) -> Người tham gia (Participants) -> Hoạt động chính (Activities) -> Lợi ích (Outcomes)." },
  { genre: "Information Leaflet", unit: "Units 5, 6", length: "120–150 words", keyPoints: "Tiêu đề cuốn hút (Catchy heading), các gạch đầu dòng ngắn gọn, quy tắc Do's and Don'ts, lời kêu gọi hành động (Call to Action)." },
  { genre: "Formal Letter of Enquiry", unit: "Unit 7", length: "120–150 words", keyPoints: "Mở đầu trang trọng (Dear Sir/Madam) -> Nêu lý do viết thư -> 3 câu hỏi lịch sự về khóa học -> Lời kết (Yours faithfully)." }
];

module.exports = {
  unitsP2,
  grammarCheatsheet,
  communicationHandbook,
  writingGenres
};
