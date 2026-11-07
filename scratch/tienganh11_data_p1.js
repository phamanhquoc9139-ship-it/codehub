// tienganh11_data_p1.js
// Data for Tiếng Anh 11 Global Success - Part 1 (Units 1 to 5 + Reviews 1 & 2)

const themes = [
  { id: 'theme-1', name: 'Our Lives (Cuộc Sống & Con Người)', units: ['1', '2', '3', 'review-1'], pages: 'SGK tr. 8–41' },
  { id: 'theme-2', name: 'Our Community and Environment (Cộng Đồng & Môi Trường)', units: ['4', '5', 'review-2'], pages: 'SGK tr. 42–65' },
  { id: 'theme-3', name: 'Our Heritage and Pathways (Di Sản & Định Hướng)', units: ['6', '7', '8', 'review-3'], pages: 'SGK tr. 66–99' },
  { id: 'theme-4', name: 'Our Society and Planet (Xã Hội & Hệ Sinh Thái)', units: ['9', '10', 'review-4'], pages: 'SGK tr. 100–123' }
];

const unitsP1 = {
  // UNIT 1: A LONG AND HEALTHY LIFE
  "1": {
    num: "1",
    themeId: "theme-1",
    title: "A Long and Healthy Life",
    pages: "8–17",
    subtitle: "Lối sống lành mạnh, tuổi thọ, dinh dưỡng, thể dục và thói quen bảo vệ sức khỏe",
    goals: "Hệ thống hóa trường từ vựng sức khỏe và dinh dưỡng; phân biệt dạng mạnh và dạng yếu của trợ động từ; nắm vững sự khác biệt giữa Past Simple và Present Perfect; thực hành 4 kỹ năng ngôn ngữ quanh chủ đề sống lâu sống khỏe; nắm cách đề nghị giúp đỡ (Everyday English) và tìm hiểu kiến thức sinh học vi khuẩn - virus (Culture/CLIL).",
    pronunciation: {
      title: "Strong and Weak Forms of Auxiliary Verbs (Dạng mạnh và yếu của trợ động từ)",
      rule: "Trong lời nói tự nhiên, các trợ động từ (do, does, can, could, have, has, was, were...) thường ở dạng yếu (weak form với nguyên âm /ə/ hoặc /ɪ/) khi không nhấn trọng âm. Chúng chỉ phát âm ở dạng mạnh (strong form) khi đứng cuối câu/mệnh đề, trong câu trả lời ngắn, hoặc khi người nói muốn nhấn mạnh/đối lập ý kiến.",
      examples: [
        { strong: "/duː/", weak: "/də/, /du/", word: "do", note: "Do you exercise regularly? (/də juː.../) vs. Yes, I do! (/...duː/)" },
        { strong: "/kæn/", weak: "/kən/", word: "can", note: "Can you help me? (/kən juː.../) vs. Yes, I can! (/...kæn/)" },
        { strong: "/hæv/", weak: "/həv/, /əv/", word: "have", note: "What have you done? (/...həv juː.../) vs. Yes, I have! (/...hæv/)" },
        { strong: "/wɒz/", weak: "/wəz/", word: "was", note: "He was sick yesterday. (/...wəz sɪk.../) vs. I knew he was. (/...wɒz/)" }
      ]
    },
    vocab: [
      { word: "life expectancy", ipa: "/ˈlaɪf ɪkspektənsi/", type: "n. phr.", meaning: "tuổi thọ trung bình dự tính", eg: "Improvements in medical healthcare have significantly increased life expectancy." },
      { word: "nutrient", ipa: "/ˈnjuːtriənt/", type: "noun", meaning: "chất dinh dưỡng", eg: "Fresh vegetables and whole grains provide essential nutrients for body development." },
      { word: "antibiotic", ipa: "/ˌæntibaɪˈɒtɪk/", type: "noun", meaning: "thuốc kháng sinh", eg: "Antibiotics are effective against bacterial infections, but they cannot kill viruses." },
      { word: "bacteria", ipa: "/bækˈtɪəriə/", type: "noun (pl.)", meaning: "vi khuẩn", eg: "Not all bacteria are harmful; some live in our intestines and aid digestion." },
      { word: "virus", ipa: "/ˈvaɪrəs/", type: "noun", meaning: "vi-rút", eg: "The influenza virus mutates rapidly, requiring updated annual vaccines." },
      { word: "food poisoning", ipa: "/ˈfuːd pɔɪzənɪŋ/", type: "n. phr.", meaning: "ngộ độc thực phẩm", eg: "Contaminated seafood can cause severe food poisoning if not cooked properly." },
      { word: "cut down on", ipa: "/kʌt daʊn ɒn/", type: "phr. v.", meaning: "cắt giảm (tiêu thụ cái gì)", eg: "Doctors advise patients to cut down on sugar, salt and saturated fats." },
      { word: "work out", ipa: "/wɜːk aʊt/", type: "phr. v.", meaning: "tập thể dục rèn luyện thân thể", eg: "He works out at the local gym three times a week to stay fit." },
      { word: "suffer from", ipa: "/ˈsʌfə frəm/", type: "phr. v.", meaning: "chịu đựng, mắc phải bệnh gì", eg: "Many desk workers suffer from chronic back pain and eye strain." },
      { word: "press-up", ipa: "/ˈpres ʌp/", type: "noun", meaning: "động tác chống đẩy (hít đất)", eg: "Doing thirty press-ups every morning strengthens chest and arm muscles." },
      { word: "give up", ipa: "/ɡɪv ʌp/", type: "phr. v.", meaning: "từ bỏ một thói quen có hại", eg: "Giving up smoking immediately reduces the risk of cardiovascular diseases." },
      { word: "treatment", ipa: "/ˈtriːtmənt/", type: "noun", meaning: "phương pháp điều trị y tế", eg: "Early detection of illness enables faster recovery and more effective treatment." }
    ],
    grammar: [
      {
        title: "Past Simple vs. Present Perfect (Quá khứ đơn vs. Hiện tại hoàn thành)",
        formula: "Past Simple: S + V2/ed | S + did not + V-bare | Did + S + V-bare?\nPresent Perfect: S + have/has + V3/ed | S + have/has not + V3/ed | Have/Has + S + V3/ed?",
        desc: "• Past Simple diễn tả hành động đã bắt đầu và kết thúc hoàn toàn tại thời điểm xác định trong quá khứ (yesterday, last year, in 2020, two days ago, when I was young).\n• Present Perfect diễn tả hành động xảy ra tại thời điểm không xác định trong quá khứ, trải nghiệm cuộc đời (ever, never), hành động vừa mới xảy ra (just, already, yet), hoặc hành động bắt đầu từ quá khứ và vẫn kéo dài đến hiện tại (since + mốc, for + khoảng thời gian).",
        examples: [
          { en: "He caught a severe cold two days ago.", vi: "Anh ấy bị cảm lạnh nặng hai ngày trước. (Mốc thời gian xác định trong quá khứ -> Past Simple)" },
          { en: "Scientists have discovered new antibiotics recently.", vi: "Các nhà khoa học vừa phát hiện những loại kháng sinh mới gần đây. (Kết quả gắn với hiện tại -> Present Perfect)" },
          { en: "She has suffered from muscle aches since last Monday.", vi: "Cô ấy bị đau mỏi cơ từ thứ Hai tuần trước đến nay. (Kéo dài đến nay với 'since' -> Present Perfect)" }
        ],
        notes: "Tuyệt đối không dùng Present Perfect khi câu có trạng từ chỉ thời gian quá khứ đóng như yesterday, in 2019, 5 minutes ago. Hãy dùng since cho mốc bắt đầu (since 2015, since childhood) và for cho khoảng thời gian (for 10 years, for a long time)."
      }
    ],
    skills: {
      reading: "Đọc bài viết phân tích lối sống và các yếu tố quyết định tuổi thọ cao (chế độ dinh dưỡng giàu chất xơ, tập luyện đều đặn, giấc ngủ sâu và tinh thần lạc quan). Rèn kỹ năng tìm ý chính (skimming) và quét thông tin chi tiết (scanning) để phân biệt dữ kiện khoa học với nhận định cá nhân.",
      speaking: "Hướng dẫn người khác thực hiện một thói quen thể dục hàng ngày (exercise routine). Sử dụng các từ chỉ trình tự (First, Then, Next, After that, Finally), động từ hành động (warm up, stretch, breathe in/out) và mẫu câu khuyến nghị (You should / It is crucial to...).",
      listening: "Nghe buổi tọa đàm truyền hình về mối liên hệ giữa thói quen ăn uống và bệnh tật hiện đại. Luyện nghe từ khóa chuyên ngành dinh dưỡng, thái độ của chuyên gia và ghi chép số liệu về lượng calo, chất béo chuyển hóa.",
      writing: "Viết tin nhắn ngắn (60–80 từ) hoặc email gửi cho bạn bè/người thân chia sẻ một thay đổi tích cực trong thói quen ăn uống và rèn luyện thể chất, nêu lý do và kêu gọi bạn cùng tham gia.",
      cultureClil: "Bacteria and Viruses: Phân biệt vi khuẩn (sinh vật đơn bào sống độc lập, điều trị được bằng kháng sinh) và virus (thực thể siêu vi cần tế bào vật chủ để nhân lên, phòng ngừa chủ yếu bằng vaccine và vệ sinh diệt khuẩn)."
    },
    everydayEnglish: {
      function: "Offering Help and Responding (Đề nghị giúp đỡ và đáp lại)",
      dialogues: [
        { speaker: "A", text: "Can I give you a hand with those heavy dumbbell weights?" },
        { speaker: "B", text: "That would be wonderful! Thank you so much." },
        { speaker: "A", text: "Would you like me to prepare a healthy fruit smoothie for you?" },
        { speaker: "B", text: "Thanks a lot, but I've already had a bottle of mineral water." }
      ],
      usefulPhrases: [
        "Can I help you with...?",
        "Would you like me to...?",
        "Shall I get you...?",
        "That's very kind of you. / That would be great!",
        "Thanks, but I can manage it myself."
      ]
    },
    project: {
      title: "Healthy Living Habit Poster (Poster Thói Quen Lành Mạnh)",
      guidance: "Thiết kế một áp phích cổ động một thói quen có lợi cho sức khỏe (uống đủ nước, ngủ 8 tiếng, đi bộ 10.000 bước mỗi ngày, nói không với thức ăn nhanh).",
      deliverables: "Tên thói quen hấp dẫn, 3 lợi ích khoa học then chốt, hướng dẫn 4 bước thực hiện dễ dàng và một thông điệp/khẩu hiệu (slogan) ấn tượng.",
      rubric: "Nội dung khoa học (40%), Tính trực quan & sáng tạo (30%), Độ chuẩn xác ngôn ngữ (30%)."
    },
    quiz: [
      {
        q: "Doctors emphasize that antibiotics are completely ineffective against diseases caused by a ______.",
        options: ["bacteria", "virus", "nutrient", "mineral"],
        ans: 1,
        exp: "Kháng sinh (antibiotics) chỉ diệt được vi khuẩn, hoàn toàn vô hiệu đối với bệnh do vi-rút (virus) như cảm cúm thông thường."
      },
      {
        q: "Look at the sentence: 'My grandfather ______ smoking ten years ago and has lived healthier ever since.'",
        options: ["has given up", "gave up", "gives up", "had given up"],
        ans: 1,
        exp: "'Ten years ago' là mốc thời gian xác định đã chấm dứt trong quá khứ -> chia thì Quá khứ đơn (gave up)."
      },
      {
        q: "What is the most polite response to decline an offer: 'Would you like me to carry this bag for you?'",
        options: [
          "No, I hate your help.",
          "Thanks, but I can manage it, thank you.",
          "You must not do that.",
          "Of course not, go away."
        ],
        ans: 1,
        exp: "'Thanks, but I can manage it, thank you' là cách từ chối lịch sự và phổ biến nhất trong giao tiếp tiếng Anh thường ngày."
      }
    ]
  },

  // UNIT 2: THE GENERATION GAP
  "2": {
    num: "2",
    themeId: "theme-1",
    title: "The Generation Gap",
    pages: "18–27",
    subtitle: "Khác biệt giữa các thế hệ trong gia đình, quan điểm sống, xung đột và giải pháp gắn kết",
    goals: "Khám phá trường từ vựng về gia đình, niềm tin và thế hệ; nhận diện và phát âm chuẩn các dạng rút gọn (contracted forms); làm chủ cách dùng động từ khuyết thiếu must, have to, should; thảo luận và viết bài văn nêu ý kiến (opinion essay) về khoảng cách thế hệ; rèn kỹ năng xin phép và cho phép.",
    pronunciation: {
      title: "Contracted Forms in Connected Speech (Dạng rút gọn trong lời nói tự nhiên)",
      rule: "Trong văn nói và hội thoại thân mật, các đại từ và trợ động từ thường được viết và phát âm rút gọn (I'm, you've, she'd, they'll, don't, mustn't). Nhận diện dạng rút gọn giúp học sinh nghe bắt kịp tốc độ người bản xứ và nói tự nhiên hơn. Lưu ý không lạm dụng dạng rút gọn trong các bài viết học thuật trang trọng.",
      examples: [
        { strong: "I have -> I've", weak: "/aɪv/", word: "I've got", note: "I've got to discuss family rules with my parents." },
        { strong: "She would / had -> She'd", weak: "/ʃiːd/", word: "She'd rather", note: "She'd like more freedom to choose her career." },
        { strong: "Must not -> Mustn't", weak: "/ˈmʌsnt/", word: "Mustn't", note: "You mustn't stay out past 10 p.m. without calling." },
        { strong: "Do not -> Don't", weak: "/dəʊnt/", word: "Don't", note: "They don't have to agree on everything." }
      ]
    },
    vocab: [
      { word: "generation gap", ipa: "/ˌdʒenəˈreɪʃn ɡæp/", type: "noun", meaning: "khoảng cách thế hệ (khác biệt quan điểm)", eg: "Open family discussions are essential to bridge the generation gap between parents and teens." },
      { word: "nuclear family", ipa: "/ˌnjuːkliə ˈfæməli/", type: "noun", meaning: "gia đình hạt nhân (bố mẹ và con cái)", eg: "Nuclear families have become much more common than multi-generational households." },
      { word: "extended family", ipa: "/ɪkˌstendɪd ˈfæməli/", type: "noun", meaning: "đại gia đình nhiều thế hệ chung sống", eg: "Living in an extended family allows grandparents to support childcare and pass down values." },
      { word: "digital native", ipa: "/ˌdɪdʒɪtl ˈneɪtɪv/", type: "noun", meaning: "người bản địa kỹ thuật số (sinh ra thời công nghệ)", eg: "Generation Z are digital natives who have interacted with smartphones since early childhood." },
      { word: "screen time", ipa: "/ˈskriːn taɪm/", type: "noun", meaning: "thời gian sử dụng màn hình thiết bị", eg: "Excessive screen time late at night often disrupts teenagers' sleeping cycles." },
      { word: "individualism", ipa: "/ˌɪndɪˈvɪdʒuəlɪzəm/", type: "noun", meaning: "chủ nghĩa cá nhân, đề cao tự do bản thân", eg: "Young people tend to value individualism and pursue unique lifestyle choices." },
      { word: "family rules", ipa: "/ˈfæməli ruːlz/", type: "n. phr.", meaning: "nội quy, phép tắc gia đình", eg: "Setting reasonable family rules on curfew helps keep teenagers safe." },
      { word: "conflict", ipa: "/ˈkɒnflɪkt/", type: "noun", meaning: "sự xung đột, mâu thuẫn quan điểm", eg: "Differences in music taste and fashion styles often cause minor conflicts at home." },
      { word: "curious", ipa: "/ˈkjʊəriəs/", type: "adj", meaning: "tò mò, ham học hỏi khám phá", eg: "Grandparents are curious to learn how social media apps work from their grandkids." },
      { word: "adapt to", ipa: "/əˈdæpt tuː/", type: "phr. v.", meaning: "thích nghi với hoàn cảnh/thời đại mới", eg: "Parents need to adapt to modern technology to communicate effectively with teenagers." },
      { word: "freedom", ipa: "/ˈfriːdəm/", type: "noun", meaning: "sự tự do, quyền tự quyết", eg: "Teenagers desire greater freedom to express their identities and make decisions." },
      { word: "value", ipa: "/ˈvæljuː/", type: "verb / noun", meaning: "coi trọng / giá trị cốt lõi", eg: "Both generations deeply value mutual respect, family loyalty and honest dialogue." }
    ],
    grammar: [
      {
        title: "Modal Verbs: Must, Have to, Should (Động từ khuyết thiếu chỉ nghĩa vụ và lời khuyên)",
        formula: "Must: S + must + V-bare (nghĩa vụ xuất phát từ cảm xúc/ý kiến chủ quan của người nói)\nHave to: S + have/has to + V-bare (nghĩa vụ xuất phát từ quy định, luật lệ, tình huống khách quan)\nMustn't: S + mustn't + V-bare (sự cấm đoán tuyệt đối, cấm làm)\nDon't have to: S + don't/doesn't have to + V-bare (không bắt buộc, thích thì làm không thì thôi)\nShould: S + should/shouldn't + V-bare (lời khuyên, điều nên/không nên làm)",
        desc: "• Must: Thể hiện sự cần thiết bắt buộc mạnh mẽ do người nói quyết định ('I must study harder').\n• Have to: Thể hiện nghĩa vụ do hoàn cảnh, nội quy khách quan áp đặt ('In Viet Nam, students have to wear uniforms'). Có thể dùng ở quá khứ (had to) và tương lai (will have to).\n• Mustn't vs. Don't have to: 'Mustn't' mang tính cấm đoán (You mustn't drive through red lights). 'Don't have to' chỉ việc không cần thiết (Tomorrow is Sunday, so I don't have to wake up early).",
        examples: [
          { en: "You must show respect to your grandparents.", vi: "Con phải luôn thể hiện lòng kính trọng với ông bà. (Ý kiến người nói nhấn mạnh nghĩa vụ đạo đức)" },
          { en: "He has to be home before 10 p.m. because it is a strict family rule.", vi: "Cậu ấy phải về nhà trước 10 giờ đêm vì đó là gia quy nghiêm khắc. (Nội quy khách quan)" },
          { en: "You don't have to finish this chore today; you can do it tomorrow.", vi: "Con không cần phải làm xong việc nhà này hôm nay; con có thể để ngày mai làm. (Không bắt buộc)" }
        ],
        notes: "Ghi nhớ: 'mustn't' = cấm đoán (prohibition); 'don't have to' = không bắt buộc (absence of obligation). Đây là lỗi sai rất phổ biến trong các bài thi tốt nghiệp."
      }
    ],
    skills: {
      reading: "Đọc bài phân tích đặc điểm các thế hệ: Baby Boomers (chăm chỉ, tôn ti trật tự), Gen X (thực tế, tự lập), Gen Y/Millennials (hợp tác, linh hoạt) và Gen Z (nhanh nhạy công nghệ, tư duy cởi mở). Phân tích nguyên nhân dẫn đến khác biệt trong định hướng nghề nghiệp và sử dụng công nghệ.",
      speaking: "Thảo luận về các xung đột thế hệ thường gặp trong gia đình (giờ giới nghiêm, trang phục, thời gian lướt điện thoại, việc chọn trường thi). Rèn kỹ năng mở đầu và duy trì hội thoại, nêu quan điểm lịch sự, và đưa ra giải pháp thương lượng dung hòa.",
      listening: "Nghe cuộc hội thoại giữa cha mẹ và con cái giải quyết bất đồng về thời gian sử dụng điện thoại thông minh. Nắm bắt được cảm xúc của từng nhân vật và thỏa thuận cuối cùng mà hai bên đồng thuận.",
      writing: "Viết bài văn nêu quan điểm (opinion essay) khoảng 120–150 từ về chủ đề: Liệu cha mẹ có nên giới hạn nghiêm ngặt thời gian sử dụng thiết bị điện tử của thanh thiếu niên hay không? (Bố cục: Mở bài nêu vấn đề + Luận điểm chính 1 + Luận điểm chính 2 + Phản biện & Kết luận).",
      cultureClil: "So sánh văn hóa ứng xử gia đình giữa các nước châu Á (đề cao tính gắn kết, thứ bậc gia tộc, chữ hiếu) và các nước phương Tây/Mỹ (khuyến khích tính độc lập sớm, bình đẳng ý kiến trong gia đình)."
    },
    everydayEnglish: {
      function: "Asking for and Giving Permission (Xin phép và cho phép lịch sự)",
      dialogues: [
        { speaker: "Teenager", text: "Mom, do you mind if I go to the cinema with Nam this evening?" },
        { speaker: "Mother", text: "Not at all, as long as you finish your homework first." },
        { speaker: "Teenager", text: "Can I borrow your laptop for my online group project?" },
        { speaker: "Father", text: "I'm afraid you can't right now, I need it for a business meeting." }
      ],
      usefulPhrases: [
        "May I / Can I please...?",
        "Do you mind if I...?",
        "Is it okay if I...?",
        "Sure, go right ahead. / Yes, of course.",
        "I'm afraid not, because..."
      ]
    },
    project: {
      title: "Family Generation Gap Survey (Khảo Sát Khác Biệt Thế Hệ)",
      guidance: "Tiến hành khảo sát ít nhất 2 thế hệ trong gia đình hoặc trường học về 3 khía cạnh: lựa chọn nghề nghiệp, phong cách giải trí và sử dụng mạng xã hội.",
      deliverables: "Bảng hỏi điều tra mẫu, biểu đồ tổng hợp tỷ lệ phần trăm câu trả lời, và bản nhận xét 3 điều học được để cải thiện sự hòa thuận gia đình.",
      rubric: "Phương pháp khảo sát trung lập (30%), Dữ liệu & biểu đồ trực quan (40%), Lời khuyên thiết thực (30%)."
    },
    quiz: [
      {
        q: "In many schools, students ______ turn off their mobile phones during exam sessions. It is strictly forbidden.",
        options: ["don't have to", "mustn't", "shouldn't", "needn't"],
        ans: 1,
        exp: "'Strictly forbidden' (bị nghiêm cấm) -> bắt buộc dùng 'mustn't' để chỉ sự cấm đoán."
      },
      {
        q: "Tomorrow is a national holiday, so all employees ______ go to work.",
        options: ["mustn't", "don't have to", "shouldn't", "have to"],
        ans: 1,
        exp: "Ngày lễ không bắt buộc phải đi làm (không có nghĩa vụ) -> dùng 'don't have to'."
      },
      {
        q: "Which word describes a person born and brought up during the age of digital technology?",
        options: ["digital native", "breadwinner", "pedestrian", "city dweller"],
        ans: 0,
        exp: "'Digital native' (người bản địa số) là thuật ngữ chỉ thế hệ trẻ sinh ra và lớn lên trong môi trường công nghệ số."
      }
    ]
  },

  // UNIT 3: CITIES OF THE FUTURE
  "3": {
    num: "3",
    themeId: "theme-1",
    title: "Cities of the Future",
    pages: "28–37",
    subtitle: "Đô thị tương lai, đô thị thông minh (smart cities), hạ tầng xanh và phát triển bền vững",
    goals: "Khám phá trường từ vựng về đô thị, công nghệ và phát triển bền vững; nắm quy tắc nối âm phụ âm cuối với nguyên âm đầu; phân biệt Stative Verbs và Linking Verbs trong câu; đọc hiểu và viết bài văn cân bằng ưu nhược điểm của thành phố thông minh; thực hành diễn đạt mức độ chắc chắn và dự đoán tương lai.",
    pronunciation: {
      title: "Linking Final Consonants to Initial Vowels (Nối phụ âm cuối với nguyên âm đầu)",
      rule: "Trong lời nói tự nhiên, khi một từ kết thúc bằng một phụ âm và từ tiếp theo bắt đầu bằng một nguyên âm, phụ âm cuối sẽ tự nhiên nối sang nguyên âm kế tiếp (Consonant + Vowel linking). Điều này giúp phát âm mượt mà, lưu loát, không bị giật cục.",
      examples: [
        { strong: "live in", weak: "/lɪv ɪn/ -> /lɪ-vɪn/", word: "live in", note: "Millions of people will live_in smart cities." },
        { strong: "hold on", weak: "/həʊld ɒn/ -> /həʊl-dɒn/", word: "hold on", note: "Please hold_on while the sensor connects." },
        { strong: "think of", weak: "/θɪŋk ɒv/ -> /θɪŋ-kɒv/", word: "think of", note: "Architects think_of sustainable roof gardens." },
        { strong: "built in", weak: "/bɪlt ɪn/ -> /bɪl-tɪn/", word: "built in", note: "Smart sensors are built_in the road surface." }
      ]
    },
    vocab: [
      { word: "city dweller", ipa: "/ˈsɪti ˈdwelə(r)/", type: "noun", meaning: "cư dân thành phố, người sống ở đô thị", eg: "Future city dwellers will enjoy cleaner air thanks to zero-emission public transport." },
      { word: "infrastructure", ipa: "/ˈɪnfrəstrʌktʃə(r)/", type: "noun", meaning: "cơ sở hạ tầng (đường sá, điện nước, mạng lưới)", eg: "Investing in 5G infrastructure is crucial for autonomous electric vehicles." },
      { word: "liveable", ipa: "/ˈlɪvəbl/", type: "adj", meaning: "đáng sống, có môi trường sống tốt", eg: "Parks, pedestrian zones, and bike paths make cities much more liveable." },
      { word: "sustainable", ipa: "/səˈsteɪnəbl/", type: "adj", meaning: "bền vững, thân thiện với môi trường dài hạn", eg: "Solar panels and rainwater recycling systems make buildings environmentally sustainable." },
      { word: "pedestrian", ipa: "/pəˈdestriən/", type: "noun", meaning: "người đi bộ", eg: "Many city centers are transforming into pedestrian-only streets to cut down pollution." },
      { word: "skyscraper", ipa: "/ˈskaɪskreɪpə(r)/", type: "noun", meaning: "tòa nhà chọc trời", eg: "Modern skyscrapers are designed with vertical forests to absorb carbon dioxide." },
      { word: "roof garden", ipa: "/ˈruːf ɡɑːdn/", type: "noun", meaning: "vườn trên mái nhà", eg: "Roof gardens help lower indoor temperatures during scorching summer heatwaves." },
      { word: "smart living", ipa: "/smɑːt ˈlɪvɪŋ/", type: "n. phr.", meaning: "lối sống thông minh ứng dụng công nghệ IoT", eg: "Smart living utilizes artificial intelligence to optimize energy consumption at home." },
      { word: "traffic jam", ipa: "/ˈtræfɪk dʒæm/", type: "noun", meaning: "sự tắc đường, kẹt xe", eg: "AI-driven traffic lights dynamically adjust timing to prevent severe traffic jams." },
      { word: "cycle path", ipa: "/ˈsaɪkl pɑːθ/", type: "noun", meaning: "làn đường chuyên dụng dành cho xe đạp", eg: "Expanding safe cycle paths encourages commuters to leave private cars behind." },
      { word: "urban development", ipa: "/ˈɜːbən dɪˈveləpmənt/", type: "n. phr.", meaning: "sự quy hoạch và phát triển đô thị", eg: "Urban development must balance high-tech modernization with green park spaces." },
      { word: "proposal", ipa: "/prəˈpəʊzl/", type: "noun", meaning: "bản đề xuất, kế hoạch dự án", eg: "The city council approved a ambitious proposal to install public charging stations." }
    ],
    grammar: [
      {
        title: "Stative Verbs vs. Dynamic Verbs (Động từ chỉ trạng thái vs. hành động)",
        formula: "Stative: S + Verb (Simple tenses only) | Dynamic: S + Verb (Simple & Continuous tenses)",
        desc: "• Stative verbs chỉ suy nghĩ, cảm xúc, tri giác, sở hữu (know, believe, understand, love, hate, own, possess, belong to). Chúng KHÔNG dùng ở thì tiếp diễn khi giữ nghĩa trạng thái.\n• Một số động từ có thể vừa là trạng thái vừa là hành động tùy nghĩa: 'I think you are right' (ý kiến - stative) vs. 'I am thinking about future cities' (hoạt động suy nghĩ - dynamic); 'He has a smart car' (sở hữu - stative) vs. 'He is having lunch' (ăn - dynamic).",
        examples: [
          { en: "I believe that future cities will be powered by renewable energy.", vi: "Tôi tin rằng các thành phố tương lai sẽ chạy bằng năng lượng tái tạo. (Trạng thái niềm tin -> không dùng *I am believing*)" },
          { en: "The engineer is tasting the purified recycled water right now.", vi: "Kỹ sư đang nếm thử mẫu nước tinh chế tái chế ngay lúc này. (Hành động nếm -> được dùng tiếp diễn)" }
        ],
        notes: "Luôn kiểm tra ngữ cảnh xem động từ đang diễn tả trạng thái tĩnh hay hành động đang diễn tiến để quyết định có chia đuôi -ing hay không."
      },
      {
        title: "Linking Verbs (Động từ nối)",
        formula: "S + Linking Verb + Adjective (hoặc Noun phrase)",
        desc: "• Linking verbs nối chủ ngữ với vị ngữ miêu tả đặc điểm tính chất của chủ ngữ (be, seem, become, appear, feel, look, sound, taste, smell).\n• Điểm cốt lõi: Sau linking verb là TÍNH TỪ (Adjective) bổ nghĩa cho chủ ngữ, KHÔNG dùng trạng từ (Adverb) chỉ thể cách.",
        examples: [
          { en: "The proposed subway system sounds efficient and modern.", vi: "Hệ thống tàu điện ngầm được đề xuất nghe có vẻ hiệu quả và hiện đại. (Sau 'sounds' là tính từ efficient, modern)" },
          { en: "City dwellers feel safe with AI monitoring systems.", vi: "Người dân thành phố cảm thấy an toàn với hệ thống camera AI. (Sau 'feel' là tính từ safe, không dùng safely)" }
        ],
        notes: "Phân biệt: 'The food tastes delicious' (taste là linking verb + adj) với 'The chef tastes the soup carefully' (taste là hành động + adv)."
      }
    ],
    skills: {
      reading: "Đọc bài báo về các đặc trưng của thành phố tương lai: thành phố 15 phút (15-minute city - mọi dịch vụ trong tầm đi bộ/xe đạp), xe điện tự hành, tòa nhà tự sản sinh năng lượng và hệ thống quản lý rác thải thông minh bằng cảm biến ngầm.",
      speaking: "Thảo luận về mô hình thành phố tương lai lý tưởng. Vận dụng các câu hỏi Wh- để mở rộng hội thoại (What features would you prioritize? How will pedestrians be protected? Why do you think so?), đưa ra dự đoán và bảo vệ quan điểm.",
      listening: "Nghe bài phỏng vấn chuyên gia đô thị về những thách thức và bất lợi tiềm ẩn của smart city (nguy cơ mất an toàn thông tin cá nhân, chi phí sinh hoạt đắt đỏ, phụ thuộc quá mức vào công nghệ khi mất điện).",
      writing: "Viết đoạn văn hoặc bài luận ngắn (120–150 từ) phân tích ưu điểm và nhược điểm (advantages and disadvantages) của việc sinh sống trong một thành phố thông minh. Sử dụng các liên từ tương phản (On the one hand, On the other hand, However, In addition).",
      cultureClil: "Khám phá các mô hình thành phố thông minh tiêu biểu trên thế giới: Songdo (Hàn Quốc), Copenhagen (Đan Mạch - thành phố xe đạp và trung hòa carbon), Singapore (quốc gia vườn hoa thông minh)."
    },
    everydayEnglish: {
      function: "Expressing Certainty, Uncertainty & Making Predictions (Bày tỏ độ chắc chắn và dự đoán)",
      dialogues: [
        { speaker: "A", text: "Do you think flying taxis will replace conventional buses by 2040?" },
        { speaker: "B", text: "I'm not completely certain. It may take longer due to air traffic safety regulations." },
        { speaker: "A", text: "Will smart buildings definitely reduce carbon emissions?" },
        { speaker: "B", text: "I'm convinced that they will; the technology is already mature." }
      ],
      usefulPhrases: [
        "I'm quite sure / certain that...",
        "I have no doubt that...",
        "It is likely / probable that...",
        "I'm not really sure / I doubt that...",
        "It might / may happen, but..."
      ]
    },
    project: {
      title: "Design an Ideal Future City (Thiết Kế Thành Phố Tương Lai)",
      guidance: "Thiết kế poster hoặc bản vẽ ý tưởng về một đô thị thông minh bền vững tại Việt Nam vào năm 2050.",
      deliverables: "Sơ đồ mặt bằng các phân khu (khu ở, khu công nghệ, công viên, đường ray ngầm), giải pháp xanh giải quyết 2 vấn đề lớn (kẹt xe & ngập nước), khẩu hiệu thành phố.",
      rubric: "Tính khả thi & bền vững (40%), Tính sáng tạo & thiết kế (30%), Thuyết trình mạch lạc (30%)."
    },
    quiz: [
      {
        q: "The air in green roof residential areas smells ______ and fresh every morning.",
        options: ["sweetly", "sweet", "sweetness", "sweeten"],
        ans: 1,
        exp: "'Smell' ở đây là linking verb chỉ tri giác -> phía sau cần một tính từ (sweet) bổ nghĩa cho chủ ngữ 'The air'."
      },
      {
        q: "Look! That architect ______ about a new blueprint for vertical skyscraper farms.",
        options: ["is thinking", "thinks", "thought", "has thought"],
        ans: 0,
        exp: "'Think' ở đây diễn tả hành động suy nghĩ chủ động đang diễn ra tại thời điểm nói ('Look!') -> chia thì Hiện tại tiếp diễn (is thinking)."
      },
      {
        q: "Which phrase best expresses hesitation and uncertainty about a future event?",
        options: [
          "I'm positive that it will occur.",
          "I'm not entirely certain whether it will work.",
          "There is no doubt in my mind.",
          "I guarantee that."
        ],
        ans: 1,
        exp: "'I'm not entirely certain whether...' là mẫu câu chuẩn xác nhất để biểu đạt sự phân vân, chưa chắc chắn."
      }
    ]
  },

  // REVIEW 1 (UNITS 1–3)
  "review-1": {
    num: "1",
    themeId: "theme-1",
    title: "Review 1 (Units 1–3)",
    pages: "38–41",
    subtitle: "Tổng hợp kiến thức trọng tâm 3 Units đầu: Lối sống khỏe mạnh, Khoảng cách thế hệ & Thành phố tương lai",
    goals: "Củng cố vững chắc: Dạng mạnh/yếu của trợ động từ, dạng rút gọn, nối âm phụ âm - nguyên âm; Hệ thống từ vựng sức khỏe, gia đình và đô thị thông minh; Phân biệt dứt khoát Past Simple vs. Present Perfect, Modal verbs (must / have to / should), Stative verbs vs. Linking verbs; Luyện bài tập tích hợp 4 kĩ năng đọc - nghe - nói - viết và làm đề kiểm tra đánh giá năng lực.",
    contentSummary: `• Pronunciation:
  - Strong vs. Weak forms của auxiliary verbs (/duː/ vs /də/, /kæn/ vs /kən/).
  - Contracted forms (I've, she'd, they'll, mustn't, don't).
  - Consonant-to-vowel linking (live_in, built_in, hold_on).
• Vocabulary:
  - Unit 1: life expectancy, nutrient, antibiotic, food poisoning, cut down on, work out, suffer from.
  - Unit 2: generation gap, nuclear/extended family, digital native, screen time, individualism, family rules.
  - Unit 3: city dweller, infrastructure, sustainable, liveable, pedestrian, roof garden, smart living.
• Grammar:
  - Past Simple (mốc quá khứ đã đóng) vs. Present Perfect (kinh nghiệm, kết quả hiện tại, since/for).
  - Modals: Must (chủ quan) vs. Have to (khách quan); Mustn't (cấm) vs. Don't have to (không bắt buộc); Should (khuyên).
  - Stative verbs (không dùng tiếp diễn ở nghĩa trạng thái) & Linking verbs (sau động từ là Tính từ).
• Communication:
  - Offering help & responding (Can I help... / That would be great).
  - Asking for & giving permission (Do you mind if... / Go ahead).
  - Expressing certainty & predictions (I'm sure that... / It may happen).`,
    quiz: [
      {
        q: "Up to now, our town ______ two new pedestrian bridges over the highway.",
        options: ["built", "has built", "is building", "builds"],
        ans: 1,
        exp: "'Up to now' (cho đến tận bây giờ) là dấu hiệu kinh điển của thì Hiện tại hoàn thành (has built)."
      },
      {
        q: "Teenagers ______ download unverified apps on school computers. It violates internet security policy.",
        options: ["mustn't", "don't have to", "should", "needn't"],
        ans: 0,
        exp: "Vi phạm quy định an ninh mạng -> sự cấm đoán tuyệt đối -> dùng 'mustn't'."
      },
      {
        q: "The freshly baked sourdough bread in the local bakery smells ______.",
        options: ["deliciously", "delicious", "delicacy", "delightfully"],
        ans: 1,
        exp: "'Smell' đóng vai trò linking verb -> cần đi kèm tính từ 'delicious' bổ nghĩa cho 'bread'."
      },
      {
        q: "In natural spoken English, which phrase demonstrates consonant-to-vowel linking?",
        options: ["smart city", "green park", "think_of", "car traffic"],
        ans: 2,
        exp: "'think_of' kết thúc bằng phụ âm /k/ và bắt đầu bằng nguyên âm /ɒ/ -> nối âm thành /θɪŋ-kɒv/."
      }
    ]
  },

  // UNIT 4: ASEAN AND VIET NAM
  "4": {
    num: "4",
    themeId: "theme-2",
    title: "ASEAN and Viet Nam",
    pages: "42–51",
    subtitle: "Hiệp hội các quốc gia Đông Nam Á, vai trò của Việt Nam, giao lưu văn hóa và thanh niên ASEAN",
    goals: "Nắm vững vốn từ vựng về hội nhập khu vực, ngoại giao, giáo dục và giao lưu thanh niên; nhận biết hiện tượng lược âm nguyên âm (elision of vowels) trong văn nói nhanh; làm chủ danh động từ (Gerunds) đóng vai trò chủ ngữ và tân ngữ; đọc hiểu tin tức ASEAN, nói về phẩm chất thanh niên và viết bản đề xuất (proposal) tổ chức sự kiện đón đoàn học sinh.",
    pronunciation: {
      title: "Elision of Vowels in Fast Speech (Lược âm nguyên âm trong lời nói nhanh)",
      rule: "Trong lời nói nhanh và tự nhiên của người bản ngữ, một số nguyên âm không mang trọng âm (đặc biệt là âm /ə/ hoặc /ɪ/) có thể bị lược bỏ hoàn toàn mà không làm mất đi nghĩa của từ. Hiện tượng này xảy ra phổ biến ở các âm tiết giữa từ.",
      examples: [
        { strong: "history -> /ˈhɪstəri/", weak: "-> /ˈhɪstri/", word: "history", note: "ASEAN history has witnessed tremendous progress." },
        { strong: "camera -> /ˈkæmərə/", weak: "-> /ˈkæmrə/", word: "camera", note: "He captured the cultural dance on camera." },
        { strong: "different -> /ˈdɪfərənt/", weak: "-> /ˈdɪfrənt/", word: "different", note: "Delegates represent different member states." },
        { strong: "family -> /ˈfæməli/", weak: "-> /ˈfæmli/", word: "family", note: "The ASEAN family is united under one vision." }
      ]
    },
    vocab: [
      { word: "cultural exchange", ipa: "/ˌkʌltʃərəl ɪksˈtʃeɪndʒ/", type: "n. phr.", meaning: "sự giao lưu, trao đổi văn hóa", eg: "Youth cultural exchange programmes foster mutual understanding among member states." },
      { word: "leadership skills", ipa: "/ˈliːdəʃɪp skɪlz/", type: "n. phr.", meaning: "kỹ năng lãnh đạo, dẫn dắt đội ngũ", eg: "Volunteering in regional forums helps students develop valuable leadership skills." },
      { word: "represent", ipa: "/ˌreprɪˈzent/", type: "verb", meaning: "đại diện cho, thay mặt", eg: "Two high school students were chosen to represent Viet Nam at the ASEAN summit." },
      { word: "strengthen", ipa: "/ˈstreŋθn/", type: "verb", meaning: "tăng cường, củng cố (quan hệ, hợp tác)", eg: "Educational scholarships help strengthen bilateral relations across Southeast Asia." },
      { word: "contribution", ipa: "/ˌkɒntrɪˈbjuːʃn/", type: "noun", meaning: "sự đóng góp, cống hiến", eg: "Viet Nam has made significant contributions to regional peace, stability and prosperity." },
      { word: "take part in", ipa: "/teɪk pɑːt ɪn/", type: "phr. v.", meaning: "tham gia vào hoạt động gì", eg: "Over five hundred teenagers took part in the annual ASEAN Art and Music Festival." },
      { word: "volunteer", ipa: "/ˌvɒlənˈtɪə(r)/", type: "verb / noun", meaning: "tình nguyện / tình nguyện viên", eg: "Volunteering in environmental cleanups benefits both the community and self-growth." },
      { word: "live-stream", ipa: "/ˈlaɪv striːm/", type: "verb / noun", meaning: "phát sóng trực tiếp qua mạng", eg: "The youth debate competition was live-streamed to thousands of schools." },
      { word: "promote", ipa: "/prəˈməʊt/", type: "verb", meaning: "quảng bá, thúc đẩy", eg: "The campaign aims to promote eco-tourism and traditional handicrafts in ASEAN." },
      { word: "compliment", ipa: "/ˈkɒmplɪmənt/", type: "noun / verb", meaning: "lời khen ngợi / khen ngợi", eg: "She received warm compliments on her confident English presentation." },
      { word: "issue", ipa: "/ˈɪʃuː/", type: "noun", meaning: "vấn đề thời sự đang được quan tâm", eg: "Youth unemployment and climate resilience are pressing regional issues." },
      { word: "efficiently", ipa: "/ɪˈfɪʃntli/", type: "adv", meaning: "một cách hiệu quả, năng suất", eg: "Multilingual teams work efficiently when members demonstrate cultural empathy." }
    ],
    grammar: [
      {
        title: "Gerunds as Subjects and Objects (Danh động từ làm Chủ ngữ và Tân ngữ)",
        formula: "As Subject: V-ing + Singular Verb (e.g., Learning English opens doors)\nAs Object of Verbs: S + Verb + V-ing (enjoy, avoid, consider, discuss, involve, suggest, mind...)\nAs Object of Prepositions: S + Verb + Preposition + V-ing (interested in, good at, look forward to...)\nNegative Form: Not + V-ing",
        desc: "• Gerund (V-ing) có tính chất như một danh từ: có thể làm chủ ngữ của câu (luôn đi với động từ số ít), bổ ngữ sau 'be', hoặc làm tân ngữ sau một số động từ và mọi giới từ.\n• Phân biệt một số động từ đi với V-ing: admit, avoid, consider, delay, deny, enjoy, finish, imagine, involve, keep, mind, postpone, practice, suggest, recommend.\n• Giới từ luôn đi với V-ing: keen on, fond of, instead of, apologize for, succeed in, look forward to V-ing.",
        examples: [
          { en: "Participating in ASEAN youth forums enhances global citizenship.", vi: "Việc tham gia các diễn đàn thanh niên ASEAN nâng cao tinh thần công dân toàn cầu. (Gerund làm chủ ngữ)" },
          { en: "She suggested organizing a welcoming ceremony for Indonesian exchange students.", vi: "Cô ấy đề xuất tổ chức một buổi lễ đón tiếp cho học sinh trao đổi Indonesia. (Gerund làm tân ngữ sau 'suggest')" },
          { en: "He apologized for not attending the preparatory briefing on time.", vi: "Cậu ấy xin lỗi vì đã không tham gia buổi họp chuẩn bị đúng giờ. (Phủ định not + V-ing sau giới từ 'for')" }
        ],
        notes: "Lưu ý cụm từ có 'to' là giới từ (không phải to-infinitive): look forward to + V-ing, be used to + V-ing, object to + V-ing."
      }
    ],
    skills: {
      reading: "Đọc bản tin tổng hợp về các sự kiện hợp tác nổi bật trong khối ASEAN: chương trình giao lưu văn hóa học đường, học bổng ASEAN và hiệp định tự do thương mại. Luyện kỹ năng đọc lướt xác định thông điệp chính và phân tích mối liên kết giữa các nước thành viên.",
      speaking: "Thuyết trình về các kỹ năng và phẩm chất cần thiết của một đại sứ thanh niên ASEAN (giao tiếp tiếng Anh tự tin, tư duy phản biện, kỹ năng làm việc nhóm đa văn hóa và khả năng thích ứng linh hoạt). Trả lời câu hỏi phỏng vấn mô phỏng.",
      listening: "Nghe đoạn băng hướng dẫn về chương trình tham quan và học tập tại một trường trung học liên cấp ở Thái Lan thuộc mạng lưới đối tác ASEAN. Ghi chép lịch trình, các hoạt động trải nghiệm văn hóa và quy định lưu trú.",
      writing: "Viết bản đề xuất (proposal) khoảng 120–150 từ gửi Ban giám hiệu nhà trường đề nghị tổ chức 'Ngày hội Văn hóa Thanh niên ASEAN' (ASEAN Youth Cultural Day). Cấu trúc: Mục tiêu dự án (Objectives) -> Người tham gia (Participants) -> Các hoạt động chính (Activities) -> Thời gian & địa điểm (Time and Venue) -> Lợi ích mong đợi (Expected outcomes).",
      cultureClil: "Khám phá các lễ hội mừng năm mới truyền thống rực rỡ tại các nước Đông Nam Á: Songkran (Thái Lan), Bun Pi May (Lào), Chol Chnam Thmay (Campuchia) và Tết cổ truyền (Việt Nam), tìm ra điểm tương đồng về ước vọng may mắn, cầu mùa màng bội thu và lòng hiếu thảo."
    },
    everydayEnglish: {
      function: "Giving Compliments and Responding to Compliments (Khen ngợi và đáp lại lời khen)",
      dialogues: [
        { speaker: "Lan", text: "You did a fantastic job on the ASEAN cultural presentation, Alex!" },
        { speaker: "Alex", text: "Thank you so much, Lan. That's really encouraging to hear." },
        { speaker: "Teacher", text: "I must compliment your team on creating such an engaging video." },
        { speaker: "Student", text: "We appreciate your kind words! We spent a lot of time editing it." }
      ],
      usefulPhrases: [
        "What a wonderful / fantastic / great...!",
        "You did an amazing job with...",
        "I really admire how you...",
        "Thank you, that's very kind of you.",
        "I'm glad you liked it!",
        "Thanks, it means a lot coming from you."
      ]
    },
    project: {
      title: "ASEAN Member State Discovery (Hồ Sơ Một Quốc Gia ASEAN)",
      guidance: "Lựa chọn 1 trong 10 quốc gia thành viên ASEAN (như Indonesia, Philippines, Malaysia, Lào...) để làm bài nghiên cứu và thuyết trình đa phương tiện.",
      deliverables: "Slide thuyết trình gồm: Quốc kỳ & thủ đô, nét văn hóa đặc trưng (trang phục, ẩm thực), một di sản UNESCO tiêu biểu, và quan hệ hợp tác với Việt Nam.",
      rubric: "Nội dung chuẩn xác (40%), Phong thái thuyết trình & tương tác (30%), Slide sáng tạo (30%)."
    },
    quiz: [
      {
        q: "______ in international volunteer projects helps young people broaden their horizons.",
        options: ["Participate", "Participating", "Participated", "To participating"],
        ans: 1,
        exp: "Chỗ trống cần một Danh động từ (Gerund 'Participating') đóng vai trò làm Chủ ngữ của câu."
      },
      {
        q: "My classmate suggested ______ a cultural exchange booth at the upcoming school spring festival.",
        options: ["set up", "to set up", "setting up", "have set up"],
        ans: 2,
        exp: "Động từ 'suggest' bắt buộc đi kèm Danh động từ V-ing (suggest setting up)."
      },
      {
        q: "What is the most natural way to accept a compliment on your English speech?",
        options: [
          "Don't mention it, I am the best.",
          "Thank you, I'm glad you enjoyed it!",
          "Yes, I know I did well.",
          "Why did you say that?"
        ],
        ans: 1,
        exp: "'Thank you, I'm glad you enjoyed it!' là lời đáp lại lời khen vừa khiêm tốn vừa lịch thiệp theo chuẩn giao tiếp quốc tế."
      }
    ]
  },

  // UNIT 5: GLOBAL WARMING
  "5": {
    num: "5",
    themeId: "theme-2",
    title: "Global Warming",
    pages: "52–61",
    subtitle: "Hiện tượng nóng lên toàn cầu, khí nhà kính, biến đổi khí hậu và giải pháp cắt giảm phát thải",
    goals: "Làm chủ trường từ vựng về môi trường, năng lượng tái tạo và khí thải nhà kính; nắm vững trọng âm câu và nhịp điệu (sentence stress and rhythm); vận dụng chuẩn xác các mệnh đề phân từ (Present Participle Clauses & Past Participle Clauses); rèn luyện 4 kỹ năng viết leaflet tuyên truyền; thực hành đưa ra lời cảnh báo (giving warnings) và tìm hiểu tác động của nông nghiệp đến môi trường (CLIL).",
    pronunciation: {
      title: "Sentence Stress and Rhythm (Trọng âm câu và nhịp điệu)",
      rule: "Tiếng Anh là ngôn ngữ có nhịp điệu theo trọng âm (stress-timed language). Các từ mang nội dung chính (Content words: danh từ, động từ chính, tính từ, trạng từ, từ phủ định) sẽ được nhấn mạnh hơn, phát âm rõ hơn và kéo dài hơn. Các từ chức năng (Function words: mạo từ, giới từ, đại từ, trợ động từ) được phát âm nhanh và nhẹ hơn.",
      examples: [
        { strong: "GLOBAL WARMING THREATENS COASTAL CITIES.", weak: "Stress on: GLOBAL, WARMING, THREATENS, COASTAL, CITIES.", word: "Sentence 1", note: "Các từ in hoa là từ nội dung nhận trọng âm câu." },
        { strong: "WE MUST REDUCE FOSSIL FUELS IMMEDIATELY.", weak: "Stress on: MUST, REDUCE, FOSSIL, FUELS, IMMEDIATELY.", word: "Sentence 2", note: "Nhấn vào MUST để thể hiện tính cấp bách của hành động." }
      ]
    },
    vocab: [
      { word: "fossil fuel", ipa: "/ˈfɒsl fjuːəl/", type: "noun", meaning: "nhiên liệu hóa thạch (than đá, dầu mỏ, khí đốt)", eg: "Burning fossil fuels releases massive amounts of carbon dioxide into the atmosphere." },
      { word: "greenhouse gas", ipa: "/ˈɡriːnhaʊs ɡæs/", type: "noun", meaning: "khí nhà kính (gây giữ nhiệt)", eg: "Methane and carbon dioxide are two of the most potent greenhouse gases driving climate change." },
      { word: "global warming", ipa: "/ˌɡləʊbl ˈwɔːmɪŋ/", type: "noun", meaning: "hiện tượng nóng lên toàn cầu", eg: "Global warming causes glaciers to melt at unprecedented rates, raising sea levels." },
      { word: "emission", ipa: "/ɪˈmɪʃn/", type: "noun", meaning: "sự phát thải, lượng khí thải thải ra", eg: "Countries worldwide have committed to reaching net-zero carbon emissions by 2050." },
      { word: "pollutant", ipa: "/pəˈluːtənt/", type: "noun", meaning: "chất gây ô nhiễm môi trường", eg: "Industrial pollutants in river basins threaten freshwater biodiversity and human health." },
      { word: "renewable", ipa: "/rɪˈnjuːəbl/", type: "adj", meaning: "có thể tái tạo (năng lượng gió, mặt trời)", eg: "Switching from coal to renewable solar energy reduces long-term operational costs." },
      { word: "deforestation", ipa: "/diːˌfɒrɪˈsteɪʃn/", type: "noun", meaning: "nạn phá rừng, chặt phá rừng bừa bãi", eg: "Deforestation in tropical zones destroys natural carbon sinks and animal habitats." },
      { word: "sea level", ipa: "/ˈsiː levl/", type: "noun", meaning: "mực nước biển", eg: "Rising sea levels threaten coastal agricultural deltas like the Mekong River Delta." },
      { word: "heat-trapping", ipa: "/ˈhiːt træpɪŋ/", type: "adj", meaning: "có đặc tính giữ nhiệt, bẫy nhiệt", eg: "The heat-trapping layer of gases acts like a glass roof around the planet." },
      { word: "soot", ipa: "/sʊt/", type: "noun", meaning: "muội than, bồ hóng (black carbon)", eg: "Soot particles deposited on snow and ice accelerate thawing by absorbing sunlight." },
      { word: "cut down", ipa: "/kʌt daʊn/", type: "phr. v.", meaning: "chặt hạ cây cối", eg: "Illegal loggers cut down century-old trees, causing devastating soil erosion." },
      { word: "consequence", ipa: "/ˈkɒnsɪkwəns/", type: "noun", meaning: "hậu quả, hệ quả nghiêm trọng", eg: "Severe droughts and extreme storms are direct consequences of global climate disruption." }
    ],
    grammar: [
      {
        title: "Participle Clauses (Mệnh đề phân từ: Hiện tại phân từ & Quá khứ phân từ)",
        formula: "Present Participle Clause: V-ing..., Main Clause (nghĩa chủ động, hành động đồng thời hoặc nguyên nhân)\nPast Participle Clause: V3/ed..., Main Clause (nghĩa bị động, điều kiện hoặc nguyên nhân)\nRule: Chủ ngữ ngầm của mệnh đề phân từ BẮT BUỘC phải trùng với chủ ngữ của mệnh đề chính.",
        desc: "• Mệnh đề phân từ dùng để rút gọn câu, giúp câu văn cô đọng, giàu tính học thuật.\n• Present Participle (V-ing): Rút gọn mệnh đề chủ động. Ví dụ: 'Because they burned fossil fuels, factories released soot' -> 'Burning fossil fuels, factories released soot.'\n• Past Participle (V3/ed): Rút gọn mệnh đề bị động. Ví dụ: 'Because it is caused by human activity, global warming can be mitigated' -> 'Caused by human activity, global warming can be mitigated.'\n• Lỗi cần tránh (Dangling Participle): Tuyệt đối không để chủ ngữ mệnh đề chính khác với đối tượng thực hiện hành động ở mệnh đề phân từ.",
        examples: [
          { en: "Realizing the severe threat of climate change, the students initiated a recycling campaign.", vi: "Nhận thức được mối đe dọa nghiêm trọng của biến đổi khí hậu, các học sinh đã khởi xướng chiến dịch tái chế. (Chủ động -> V-ing 'Realizing')" },
          { en: "Frightened by rising sea levels, local coastal residents built higher flood barriers.", vi: "Bị hoảng sợ trước mực nước biển dâng, cư dân ven biển đã dựng các đê chắn sóng cao hơn. (Bị động/cảm xúc -> V3/ed 'Frightened')" }
        ],
        notes: "Ghi nhớ thần chú: Chủ động dùng V-ing, Bị động dùng V3/ed. Luôn đối chiếu với chủ ngữ ngay sau dấu phẩy!"
      }
    ],
    skills: {
      reading: "Đọc bài báo cáo tổng thuật về Hội nghị Thượng đỉnh Khí hậu Liên Hợp Quốc (COP). Phân tích bảng biểu so sánh lượng phát thải carbon của các ngành kinh tế (năng lượng, giao thông, công nghiệp nặng, nông nghiệp) và các cam kết tài chính khí hậu toàn cầu.",
      speaking: "Thuyết trình và thảo luận nhóm về các hoạt động hàng ngày của con người gây ra hiệu ứng nhà kính (sử dụng túi nilon, lãng phí điện năng, đi lại bằng xe máy xăng cá nhân). Đề xuất 3 giải pháp xanh có thể thực hiện ngay tại trường học.",
      listening: "Nghe bài giảng của nhà khoa học khí quyển giải thích về 'black carbon' (muội than) - loại hạt ô nhiễm giữ nhiệt ngắn hạn nhưng tác động cực mạnh lên băng tuyết. Ghi nhận các số liệu về thời gian tồn tại trong khí quyển và giải pháp bếp lò sạch.",
      writing: "Viết một tờ rơi tuyên truyền (leaflet) dài khoảng 120–150 từ kêu gọi học sinh và cộng đồng địa phương hành động cắt giảm phát thải muội than và rác thải nhựa. Sử dụng tiêu đề hấp dẫn (catchy headings), các gạch đầu dòng ngắn gọn và lời kêu gọi hành động quyết liệt (Call to Action).",
      cultureClil: "Tác động môi trường của nền nông nghiệp thâm canh (Environmental impact of farming): Phân tích lượng khí metan sinh ra từ chăn nuôi gia súc nhai lại, khí N2O từ phân bón hóa học và giải pháp nông nghiệp tuần hoàn bền vững."
    },
    everydayEnglish: {
      function: "Giving Warnings and Responding to Warnings (Đưa ra cảnh báo và đáp lại)",
      dialogues: [
        { speaker: "Guide", text: "Watch out! The path near the melting glacier edge is extremely slippery." },
        { speaker: "Hiker", text: "Thanks for warning me! I'll step back onto the secure trail." },
        { speaker: "Mother", text: "Be careful not to leave the electric heater on overnight; it's a fire hazard." },
        { speaker: "Son", text: "Don't worry, Mom. I've set an automatic shut-off timer." }
      ],
      usefulPhrases: [
        "Watch out! / Look out!",
        "Be careful with / not to...",
        "Mind the step / gap!",
        "Whatever you do, don't...",
        "Thank you for the warning / reminder.",
        "Don't worry, I will be careful."
      ]
    },
    project: {
      title: "Community Carbon Footprint Survey (Khảo Sát Dấu Chân Carbon Cộng Đồng)",
      guidance: "Tiến hành khảo sát thói quen tiêu dùng năng lượng của 15 hộ gia đình tại địa phương (tiền điện hàng tháng, thói quen phân loại rác, phương tiện đi lại).",
      deliverables: "Báo cáo tóm tắt mức độ phát thải trung bình, xếp hạng 3 hành vi gây lãng phí năng lượng nhiều nhất và danh sách 5 mẹo tiết kiệm điện thiết thực.",
      rubric: "Tính trung thực của dữ liệu (40%), Khuyến nghị thiết thực (30%), Trình bày chuyên nghiệp (30%)."
    },
    quiz: [
      {
        q: "______ by massive deforestation, the local hillside suffered a devastating landslide after the tropical storm.",
        options: ["Weakening", "Weakened", "To weaken", "Having weaken"],
        ans: 1,
        exp: "Khu vực đồi núi 'bị làm suy yếu' (mang nghĩa bị động do nạn phá rừng) -> dùng Quá khứ phân từ 'Weakened'."
      },
      {
        q: "______ the devastating consequences of global warming, the community planted over two thousand mangrove trees.",
        options: ["Understood", "Understanding", "Understand", "To understand"],
        ans: 1,
        exp: "Chủ ngữ 'the community' tự 'nhận thức' (mang nghĩa chủ động) -> dùng Hiện tại phân từ 'Understanding'."
      },
      {
        q: "When your friend is about to cross the street while looking at their smartphone, you should shout: '______!'",
        options: ["Congratulation!", "Watch out! A motorbike is coming!", "Never mind!", "I don't think so."],
        ans: 1,
        exp: "'Watch out!' (Hãy cẩn thận / Coi chừng!) là câu cảnh báo khẩn cấp chuẩn mực nhất trong tình huống nguy hiểm."
      }
    ]
  },

  // REVIEW 2 (UNITS 4–5)
  "review-2": {
    num: "2",
    themeId: "theme-2",
    title: "Review 2 (Units 4–5)",
    pages: "62–65",
    subtitle: "Tổng hợp kiến thức trọng tâm Theme 2: Hội nhập khu vực ASEAN & Thách thức Biến đổi khí hậu toàn cầu",
    goals: "Khắc sâu: Lược âm nguyên âm (vowel elision), trọng âm và nhịp điệu câu (sentence stress & rhythm); Từ vựng hợp tác ngoại giao, thanh niên, khí nhà kính, phát thải và năng lượng xanh; Nắm vững bản chất Gerunds làm chủ ngữ/tân ngữ và Mệnh đề phân từ (Participle Clauses); Luyện bài tập kết hợp kĩ năng và làm đề kiểm tra đánh giá định kỳ.",
    contentSummary: `• Pronunciation:
  - Elision of unstressed vowels (/ˈhɪstri/, /ˈkæmrə/, /ˈdɪfrənt/).
  - Sentence stress & rhythm: Nhấn mạnh content words (danh, động, tính, trạng, phủ định), lướt nhanh function words.
• Vocabulary:
  - Unit 4: cultural exchange, leadership skills, contribution, represent, strengthen, take part in, volunteer.
  - Unit 5: fossil fuel, greenhouse gas, global warming, emission, pollutant, renewable, deforestation, sea level.
• Grammar:
  - Gerunds (V-ing) làm Chủ ngữ (động từ theo sau luôn chia số ít) và Tân ngữ sau các động từ đặc biệt (enjoy, suggest, avoid...) và sau mọi giới từ.
  - Present Participle Clauses (V-ing) cho nghĩa chủ động, hành động đồng thời hoặc nguyên nhân.
  - Past Participle Clauses (V3/ed) cho nghĩa bị động hoặc trạng thái.
  - Quy tắc đồng chủ ngữ: Chủ ngữ ngầm của phân từ BẮT BUỘC trùng với chủ ngữ mệnh đề chính.
• Communication:
  - Giving compliments & responding (What a fantastic job / Thank you, that's very kind of you).
  - Giving warnings & responding (Watch out! / Thanks for warning me).`,
    quiz: [
      {
        q: "______ greenhouse gas emissions is the most urgent priority for all participating nations.",
        options: ["Reduce", "Reducing", "Reduced", "Reduction of"],
        ans: 1,
        exp: "Chỗ trống cần một Danh động từ (Gerund 'Reducing') làm chủ ngữ của động từ số ít 'is'."
      },
      {
        q: "______ from recycled plastic bottles, these eco-friendly jackets are very popular among teenagers.",
        options: ["Making", "Made", "To make", "Having make"],
        ans: 1,
        exp: "Những chiếc áo khoác 'được làm từ' (bị động) -> dùng Quá khứ phân từ 'Made'."
      },
      {
        q: "Which word typically drops the middle unstressed vowel in natural fluent English speech?",
        options: ["student", "camera", "program", "teacher"],
        ans: 1,
        exp: "'camera' thường được phát âm lược âm thành /ˈkæmrə/ thay vì đủ 3 âm tiết /ˈkæmərə/."
      },
      {
        q: "Which sentence has correct sentence stress emphasizing urgent action?",
        options: [
          "we ARE going to the school.",
          "We MUST PROTECT our PLANET IMMEDIATELY.",
          "it IS a very cold DAY.",
          "OF the by THE for A."
        ],
        ans: 1,
        exp: "Nhấn mạnh vào các từ nội dung cốt lõi: MUST, PROTECT, PLANET, IMMEDIATELY thể hiện đúng nhịp điệu trọng âm câu."
      }
    ]
  }
};

module.exports = {
  themes,
  unitsP1
};
