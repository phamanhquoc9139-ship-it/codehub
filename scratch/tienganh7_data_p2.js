// Data for Tiếng Anh 7 - Theme 3 & Theme 4 (Units 7 -> 12 + Reviews 3 & 4)
// Global Success 7 - Sách học sinh

const theme3And4Data = [
  // UNIT 7
  {
    id: "unit-7",
    unit: "UNIT 7",
    theme: "OUR WORLD",
    title: "Traffic",
    focus: "Road safety, traffic rules, distances with 'It is ... from ... to ...', and should/shouldn't",
    color: "amber",
    vocab: [
      { word: "pedestrian", type: "noun", ipa: "/pəˈdestriən/", meaning: "người đi bộ", ex: "Pedestrians should always walk on the pavement." },
      { word: "traffic jam / congestion", type: "noun", ipa: "/ˈtræfɪk dʒæm/", meaning: "sự tắc đường, kẹt xe", ex: "We got stuck in a heavy traffic jam during rush hour." },
      { word: "crossroads", type: "noun", ipa: "/ˈkrɒsrəʊdz/", meaning: "ngã tư đường", ex: "Slow down when you approach the busy crossroads." },
      { word: "helmet / seat belt", type: "noun", ipa: "/ˈhelmɪt / ˈsiːt belt/", meaning: "mũ bảo hiểm / dây an toàn", ex: "Fasten your seat belt before driving on the highway." },
      { word: "obey traffic rules", type: "phrase", ipa: "/əˈbeɪ ˈtræfɪk ruːlz/", meaning: "tuân thủ luật lệ giao thông", ex: "Every citizen must strictly obey traffic rules." },
      { word: "pavement / sidewalk", type: "noun", ipa: "/ˈpeɪvmənt / ˈsaɪdwɔːk/", meaning: "vỉa hè dành cho người đi bộ", ex: "Do not ride motorbikes on the pedestrian pavement." }
    ],
    grammar: {
      topic: "Indicating Distances ('It is ... from ... to ...') & Modal 'Should / Shouldn't'",
      rules: [
        "Asking distance: 'How far is it from A to B?'",
        "Answering distance: 'It is / It's (about) + distance + from A to B.' (e.g. It's about 3 km from my house to school).",
        "Should + V_inf: Expressing obligation, duty, or strong recommendation (You should wear a helmet).",
        "Shouldn't + V_inf: Warning against dangerous or forbidden actions (You shouldn't ride a bike on the pavement).",
        "Do NOT add 'to' after should/shouldn't and do NOT add -s for third-person singular."
      ],
      examples: [
        "How far is it from Hanoi to Hai Phong? — It is about 120 kilometres.",
        "You should look both ways carefully before crossing the street.",
        "Drivers shouldn't speed or run red traffic lights."
      ]
    },
    pronunciation: {
      sounds: "/aɪ/ vs. /eɪ/",
      guide: "/aɪ/ là nguyên âm đôi mở rộng, trượt từ /a/ sang /ɪ/ (bike, sign, cycle). /eɪ/ trượt từ /e/ sang /ɪ/ (train, pavement, safe, station).",
      pairs: [
        { wordA: "bike /baɪk/", wordB: "bake /beɪk/" },
        { wordA: "sign /saɪn/", wordB: "same /seɪm/" },
        { wordA: "light /laɪt/", wordB: "late /leɪt/" }
      ]
    },
    communication: {
      function: "Asking about distances and giving road safety warnings",
      dialogue: [
        { speaker: "Policeman", text: "Excuse me, how do you travel to school every day?" },
        { speaker: "Pupil", text: "I cycle to school. It's about two kilometres from my home." },
        { speaker: "Policeman", text: "You should always wear a helmet and shouldn't use headphones while riding." }
      ]
    },
    skills: {
      reading: "Reading road signs, traffic regulations, and safe walking guidelines for teenagers.",
      writing: "Writing a paragraph (70-90 words) describing a traffic issue in your neighborhood and proposing solutions.",
      speaking: "Discussing: 'What are the main causes of road accidents in our city and how to prevent them?'"
    },
    quiz: [
      {
        q: "Choose the correct question for the answer: 'It is about 5 kilometres from my house to school.'",
        options: [
          "How long is it from your house to school?",
          "How far is it from your house to school?",
          "How much is it from your house to school?",
          "How many kilometres has your house to school?"
        ],
        a: 1,
        exp: "Để hỏi về khoảng cách giữa hai địa điểm A và B, cấu trúc chuẩn là 'How far is it from A to B?'."
      },
      {
        q: "Which word contains the diphthong /eɪ/?",
        options: ["cycle", "traffic", "pavement", "sign"],
        a: 2,
        exp: "'pavement' phát âm là /ˈpeɪvmənt/ chứa nguyên âm đôi /eɪ/. Các từ 'cycle, sign' chứa /aɪ/, 'traffic' chứa /æ/."
      }
    ]
  },

  // UNIT 8
  {
    id: "unit-8",
    unit: "UNIT 8",
    theme: "OUR WORLD",
    title: "Films",
    focus: "Film genres, film review vocabulary, connectors of contrast (although/though, however)",
    color: "rose",
    vocab: [
      { word: "science fiction (sci-fi)", type: "noun", ipa: "/ˌsaɪəns ˈfɪkʃn/", meaning: "phim khoa học viễn tưởng", ex: "Avatar is one of the most famous science fiction films." },
      { word: "documentary / animation", type: "noun", ipa: "/ˌdɒkjuˈmentri / ˌænɪˈmeɪʃn/", meaning: "phim tài liệu / phim hoạt hình", ex: "Nature documentaries provide fascinating facts about wildlife." },
      { word: "gripping / moving", type: "adj", ipa: "/ˈɡrɪpɪŋ / ˈmuːvɪŋ/", meaning: "lôi cuốn, hấp dẫn / cảm động sâu sắc", ex: "The plot was so gripping that I couldn't take my eyes off the screen." },
      { word: "hilarious / frightening", type: "adj", ipa: "/hɪˈleəriəs / ˈfraɪtnɪŋ/", meaning: "vui nhộn, hài hước / đáng sợ", ex: "The comedy was hilarious; the whole cinema burst into laughter." },
      { word: "soundtrack / special effects", type: "noun", ipa: "/ˈsaʊndtræk / ˈspeʃl ɪˈfekts/", meaning: "nhạc phim / kĩ xảo đặc biệt", ex: "The film won an Oscar for its magnificent soundtrack and special effects." }
    ],
    grammar: {
      topic: "Connectors of Contrast: Although / Though & However",
      rules: [
        "Although / Though + Clause 1, Clause 2: Expressing contrast within one sentence. (Although the tickets were expensive, the theater was full).",
        "NEVER use 'although' and 'but' together in the same sentence (Incorrect: Although it rained, but we went out).",
        "However: Used to connect two independent clauses or sentences, set off by punctuation: Sentence 1. However, Sentence 2. OR Clause 1; however, Clause 2.",
        "Contrast adjectives: interesting vs. boring, gripping vs. disappointing."
      ],
      examples: [
        "Although the ending was sad, the film was deeply moving.",
        "The story of the film is quite simple. However, the acting is excellent.",
        "I enjoyed the cartoon, though."
      ]
    },
    pronunciation: {
      sounds: "/ɪə/ vs. /eə/",
      guide: "/ɪə/ trượt từ /ɪ/ sang /ə/ (near, cheer, hear, idea). /eə/ trượt từ /e/ sang /ə/ (square, care, hair, share, hilarious).",
      pairs: [
        { wordA: "here /hɪə/", wordB: "hair /heə/" },
        { wordA: "cheer /tʃɪə/", wordB: "chair /tʃeə/" },
        { wordA: "fear /fɪə/", wordB: "fare /feə/" }
      ]
    },
    communication: {
      function: "Making suggestions to see a film and responding politely",
      dialogue: [
        { speaker: "John", text: "How about going to the cinema to see the new cartoon this Saturday?" },
        { speaker: "Mai", text: "That sounds great! What time does it start?" },
        { speaker: "John", text: "At 3 PM. Let's meet in front of the ticket counter." }
      ]
    },
    skills: {
      reading: "Reading film reviews and identifying details about the director, cast, plot summary, and critic ratings.",
      writing: "Writing a short review (80-100 words) of your favorite film (Title, genre, main actors, plot highlight, why you recommend it).",
      speaking: "Designing a movie poster project and presenting it to the class."
    },
    quiz: [
      {
        q: "Which sentence is grammatically correct?",
        options: [
          "Although he spent a lot of money on special effects, but the film was boring.",
          "Although he spent a lot of money on special effects, the film was boring.",
          "However he spent a lot of money, the film was boring.",
          "Though the film was boring, but we watched until the end."
        ],
        a: 1,
        exp: "Không được dùng cả 'although/though' và 'but' trong cùng một câu ghép. Câu B chuẩn ngữ pháp."
      },
      {
        q: "Choose the word with the underlined sound /ɪə/:",
        options: ["theater", "bear", "scary", "wear"],
        a: 0,
        exp: "'theater' (theatre) phát âm là /ˈθɪətə/ chứa nguyên âm đôi /ɪə/. Các từ 'bear, scary, wear' đều chứa /eə/."
      }
    ]
  },

  // UNIT 9
  {
    id: "unit-9",
    unit: "UNIT 9",
    theme: "OUR WORLD",
    title: "Festivals Around the World",
    focus: "Traditional holidays, customs, Yes/No questions, and two-syllable word stress",
    color: "purple",
    vocab: [
      { word: "celebrate / celebration", type: "v/n", ipa: "/ˈselɪbreɪt / ˌselɪˈbreɪʃn/", meaning: "kỉ niệm / lễ kỉ niệm", ex: "People celebrate Christmas with pine trees and family feasts." },
      { word: "parade / procession", type: "noun", ipa: "/pəˈreɪd / prəˈseʃn/", meaning: "cuộc diễu hành / đoàn rước", ex: "Thousands of visitors enjoyed the colorful street carnival parade." },
      { word: "take part in / participate in", type: "phrase", ipa: "/teɪk pɑːt ɪn/", meaning: "tham gia vào", ex: "Local dancers take part in the traditional folk dance competition." },
      { word: "costume / fireworks", type: "noun", ipa: "/ˈkɒstjuːm / ˈfaɪəwɜːks/", meaning: "trang phục hóa trang / pháo hoa", ex: "Children wear spooky costumes during Halloween." },
      { word: "feast / seasonal festival", type: "noun", ipa: "/fiːst / ˈsiːzənl/", meaning: "bữa tiệc lớn / lễ hội theo mùa", ex: "Thanksgiving is celebrated with a lavish turkey roast feast." }
    ],
    grammar: {
      topic: "Yes / No Questions in Present, Past, and with Modals",
      rules: [
        "With Be: Am/Is/Are + S + ...? (Present) | Was/Were + S + ...? (Past) -> Short answers: Yes, S + be / No, S + be + not.",
        "With Ordinary Verbs: Do/Does + S + V_inf? (Present) | Did + S + V_inf? (Past) -> Short answers: Yes, S + do/does/did.",
        "With Modal Verbs: Can/Will/Should + S + V_inf? -> Short answers: Yes, S + can/will/should.",
        "Do NOT repeat the main full verb in short answers (Incorrect: Yes, I enjoyed -> Correct: Yes, I did)."
      ],
      examples: [
        "Did you attend the Mid-Autumn Festival parade last night? — Yes, I did.",
        "Is La Tomatina the biggest food fight festival in Spain? — Yes, it is.",
        "Can visitors take part in the tomato fight? — Yes, they can."
      ]
    },
    pronunciation: {
      sounds: "Stress in Two-Syllable Words",
      guide: "Quy tắc trọng âm cơ bản: Hầu hết danh từ và tính từ 2 âm tiết có trọng âm rơi vào âm tiết THỨ NHẤT (féstival, cústom, cóncert). Hầu hết động từ 2 âm tiết có trọng âm rơi vào âm tiết THỨ HAI (perfórm, decíde, arríve, rejóice).",
      pairs: [
        { wordA: "dáncer /ˈdɑːnsə/ (N: 1st)", wordB: "perfórm /pəˈfɔːm/ (V: 2nd)" },
        { wordA: "séason /ˈsiːzn/ (N: 1st)", wordB: "atténd /əˈtend/ (V: 2nd)" }
      ]
    },
    communication: {
      function: "Asking and talking about international festivals and expressing disappointment",
      dialogue: [
        { speaker: "Nick", text: "Did you go to the Tulip Festival in Amsterdam last spring?" },
        { speaker: "Linh", text: "No, I couldn't because my flight was cancelled. What a pity!" },
        { speaker: "Nick", text: "That's disappointing! Hopefully you can visit it next year." }
      ]
    },
    skills: {
      reading: "Reading about unique seasonal festivals around the world (La Tomatina in Spain, Water Festival in Thailand).",
      writing: "Writing an informal email (80-100 words) describing a festival you recently experienced to an overseas pen pal.",
      speaking: "Presenting a festival you would love to visit and explaining your choice."
    },
    quiz: [
      {
        q: "Choose the correct short response: 'Did they celebrate Thanksgiving together?'",
        options: [
          "Yes, they celebrated.",
          "Yes, they did.",
          "Yes, they were.",
          "Yes, they do."
        ],
        a: 1,
        exp: "Câu hỏi bắt đầu bằng trợ động từ quá khứ 'Did', câu trả lời ngắn chuẩn là 'Yes, they did'."
      },
      {
        q: "Which word has the main stress on the SECOND syllable?",
        options: ["festival", "costume", "perform", "season"],
        a: 2,
        exp: "'perform' là động từ 2 âm tiết, trọng âm rơi vào âm tiết thứ hai /pəˈfɔːm/. Ba từ còn lại là danh từ nhấn âm tiết thứ nhất."
      }
    ]
  },

  // REVIEW 3
  {
    id: "review-3",
    unit: "REVIEW 3",
    theme: "OUR WORLD",
    title: "Review 3 (Units 7 - 9)",
    focus: "Consolidating Traffic, Films, Festivals; Grammar (Distances, should, although/however, Yes/No questions); Pronunciation (/aɪ/-/eɪ/, /ɪə/-/eə/, 2-syllable stress)",
    color: "blue",
    vocab: [
      { word: "road safety", type: "noun", ipa: "/rəʊd ˈseɪfti/", meaning: "an toàn giao thông", ex: "Road safety campaigns protect school children." },
      { word: "box office", type: "noun", ipa: "/ˈbɒks ɒfɪs/", meaning: "phòng vé rạp chiếu phim", ex: "The superhero film broke all box office records." },
      { word: "carnival atmosphere", type: "phrase", ipa: "/ˈkɑːnɪvl/", meaning: "không khí lễ hội tưng bừng", ex: "The city was filled with an exciting carnival atmosphere." }
    ],
    grammar: {
      topic: "Systematic Review of Units 7 - 9 Grammar",
      rules: [
        "Expressing distance: 'How far is it from ... to ...?' - 'It is ... km from ... to ...'",
        "Advice: 'should / shouldn't + V_inf'",
        "Contrast: 'Although + Clause, Clause' vs. 'Sentence 1. However, Sentence 2.'",
        "Yes/No questions: Invert aux/modal/be to front, keep verb in base form."
      ],
      examples: [
        "Although the cinema was far away, we walked there safely on the pavement.",
        "Did you wear a helmet? — Yes, I did."
      ]
    },
    pronunciation: {
      sounds: "Synthesis of /aɪ/ - /eɪ/, /ɪə/ - /eə/, and Two-Syllable Stress",
      guide: "Luyện phát âm câu tổng hợp: 'They rode a train (/eɪ/) to the square (/eə/) to hear (/ɪə/) the night (/aɪ/) parade (/eɪ/).'",
      pairs: [
        { wordA: "bike (/aɪ/)", wordB: "train (/eɪ/)" },
        { wordA: "cheer (/ɪə/)", wordB: "chair (/eə/)" },
        { wordA: "fámous (1st)", wordB: "arríve (2nd)" }
      ]
    },
    communication: {
      function: "Synthesized communication: Planning weekend outings and festival visits",
      dialogue: [
        { speaker: "A", text: "Although it's raining, would you like to see a comedy tonight?" },
        { speaker: "B", text: "That sounds fun! Let's take the bus so we don't get stuck in traffic." }
      ]
    },
    skills: {
      reading: "Reading comprehension combining transport systems, film reviews, and cultural festivals.",
      writing: "Writing an email recounting a memorable festival experience or travel trip.",
      speaking: "Role-playing a tourist seeking guidance on transport and entertainment in a big city."
    },
    quiz: [
      {
        q: "Combine the sentences: 'The film had a gripping plot. We did not like the ending.'",
        options: [
          "Although the film had a gripping plot, but we did not like the ending.",
          "The film had a gripping plot. However, we did not like the ending.",
          "However the film had a gripping plot, we did not like the ending.",
          "Because the film had a gripping plot, we did not like the ending."
        ],
        a: 1,
        exp: "'However' đứng đầu câu thứ hai theo sau dấu chấm và ngăn cách bằng dấu phẩy để nối hai ý tương phản."
      },
      {
        q: "Which word has a different stress pattern?",
        options: ["traffic", "helmet", "obey", "driver"],
        a: 2,
        exp: "'obey' là động từ nhấn âm 2 /əˈbeɪ/, ba từ còn lại là danh từ nhấn âm 1 (/ˈtræfɪk/, /ˈhelmɪt/, /ˈdraɪvə/)."
      }
    ]
  },

  // UNIT 10
  {
    id: "unit-10",
    unit: "UNIT 10",
    theme: "VISIONS OF THE FUTURE",
    title: "Energy Sources",
    focus: "Renewable vs. non-renewable energy, saving power, Present Continuous tense, and 3-syllable word stress",
    color: "emerald",
    vocab: [
      { word: "renewable energy", type: "noun", ipa: "/rɪˈnjuːəbl ˈenədʒi/", meaning: "năng lượng tái tạo (mặt trời, gió, nước)", ex: "Solar and wind are clean, renewable sources of energy." },
      { word: "fossil fuels", type: "noun", ipa: "/ˈfɒsl fjuːəlz/", meaning: "nhiên liệu hóa thạch (than đá, dầu mỏ, khí đốt)", ex: "Burning fossil fuels releases massive amounts of carbon dioxide." },
      { word: "solar panel", type: "noun", ipa: "/ˈsəʊlə ˈpænl/", meaning: "tấm pin năng lượng mặt trời", ex: "Installing solar panels on rooftops generates electricity for homes." },
      { word: "wind turbine / hydropower", type: "noun", ipa: "/wɪnd ˈtɜːbaɪn / ˈhaɪdrəʊpaʊə/", meaning: "tua bin gió / thủy điện", ex: "Hydropower utilizes the natural force of running water." },
      { word: "energy consumption", type: "noun", ipa: "/ˈenədʒi kənˈsʌmpʃn/", meaning: "sự tiêu thụ năng lượng", ex: "Turn off appliances when not in use to reduce energy consumption." },
      { word: "carbon footprint", type: "noun", ipa: "/ˌkɑːbən ˈfʊtprɪnt/", meaning: "dấu chân các-bon (lượng khí thải nhà kính)", ex: "Cycling to work instead of driving cuts your carbon footprint." }
    ],
    grammar: {
      topic: "The Present Continuous Tense for Current Actions & Definite Trends",
      rules: [
        "Form: (+) S + am/is/are + V-ing | (-) S + am/is/are not + V-ing | (?) Am/Is/Are + S + V-ing?",
        "Usage 1: Actions happening right now at the moment of speaking (now, at present, at the moment, Look!, Listen!).",
        "Usage 2: Changing or developing situations around the present time (More and more countries are switching to green energy).",
        "Spelling rules for V-ing: drop silent -e (make -> making), double consonant after 1 vowel in 1-syllable verb (run -> running), ie -> y (die -> dying)."
      ],
      examples: [
        "Look! The solar panels are generating clean electricity for our school.",
        "Scientists are developing more efficient wind turbines this year.",
        "Are you turning off the lights to save power? — Yes, I am."
      ]
    },
    pronunciation: {
      sounds: "Stress in Three-Syllable Words",
      guide: "Trong từ 3 âm tiết, trọng âm có thể rơi vào âm tiết thứ nhất (énergy, chémistry, nátural) hoặc âm tiết thứ hai (polúting, consúmption, impórtant). Cần tra từ điển và nghe mẫu để ghi nhớ chuẩn.",
      pairs: [
        { wordA: "énergy /ˈenədʒi/ (1st)", wordB: "effícient /ɪˈfɪʃnt/ (2nd)" },
        { wordA: "nátural /ˈnætʃrəl/ (1st)", wordB: "pollúting /pəˈluːtɪŋ/ (2nd)" }
      ]
    },
    communication: {
      function: "Discussing energy-saving tips at home and school",
      dialogue: [
        { speaker: "Lan", text: "What are you doing to save electricity in your house?" },
        { speaker: "Mark", text: "I am replacing all incandescent bulbs with LED lights and turning off the air conditioner when leaving." }
      ]
    },
    skills: {
      reading: "Reading about international eco-friendly schools and modern renewable energy projects.",
      writing: "Writing a paragraph (80-100 words) proposing practical habits to reduce energy waste at home.",
      speaking: "Group presentation: 'Designing a Zero-Carbon Eco School'."
    },
    quiz: [
      {
        q: "Complete the sentence: 'At the moment, our government ________ new wind farms along the coast.'",
        options: ["builds", "is building", "built", "will build"],
        a: 1,
        exp: "Dấu hiệu thời gian 'At the moment' yêu cầu dùng thì hiện tại tiếp diễn: 'is building'."
      },
      {
        q: "Which three-syllable word has the stress on the FIRST syllable?",
        options: ["pollution", "dangerous", "consumption", "electric"],
        a: 1,
        exp: "'dangerous' nhấn âm 1 /ˈdeɪndʒərəs/. Ba từ còn lại nhấn âm 2 (/pəˈluːʃn/, /kənˈsʌmpʃn/, /ɪˈlektrɪk/)."
      }
    ]
  },

  // UNIT 11
  {
    id: "unit-11",
    unit: "UNIT 11",
    theme: "VISIONS OF THE FUTURE",
    title: "Travelling in the Future",
    focus: "Future vehicles, predicting with will/won't, possessive pronouns, and sentence stress",
    color: "teal",
    vocab: [
      { word: "flying car / sky train", type: "noun", ipa: "/ˈflaɪɪŋ kɑː / skaɪ treɪn/", meaning: "ô tô bay / tàu điện trên cao", ex: "Flying cars will ease road traffic jams in megacities." },
      { word: "driverless car / autonomous", type: "noun", ipa: "/ˈdraɪvələs kɑː/", meaning: "xe tự lái không người lái", ex: "Driverless cars use artificial intelligence and radar sensors to navigate." },
      { word: "solar-powered vehicle", type: "phrase", ipa: "/ˈsəʊlə ˈpaʊəd/", meaning: "phương tiện chạy bằng năng lượng mặt trời", ex: "Solar-powered buses produce zero toxic greenhouse emissions." },
      { word: "hyperloop / bullet train", type: "noun", ipa: "/ˈhaɪpəluːp/", meaning: "hệ thống tàu đệm từ trong ống chân không", ex: "Hyperloop pods will travel at supersonic speeds up to 1000 km/h." },
      { word: "teleportation", type: "noun", ipa: "/ˌtelɪpɔːˈteɪʃn/", meaning: "công nghệ dịch chuyển tức thời", ex: "Teleportation remains a fascinating dream of science fiction." }
    ],
    grammar: {
      topic: "Future Simple with 'Will / Won't' & Possessive Pronouns",
      rules: [
        "Will / Won't + V_inf: Used for future predictions based on personal opinion, promises, or spontaneous decisions at the moment of speaking.",
        "Affirmative: S + will + V_inf | Negative: S + will not (won't) + V_inf | Question: Will + S + V_inf?",
        "Possessive Pronouns: mine, yours, his, hers, ours, theirs (replace Possessive Adjective + Noun to avoid repetition).",
        "Comparison: 'This is my car' (my = possessive adj) -> 'This car is mine' (mine = possessive pronoun)."
      ],
      examples: [
        "I think people will travel in driverless electric pods in 2050.",
        "Your bicycle is fast, but mine (my bicycle) is eco-friendly.",
        "Our future vehicle is solar-powered. What about theirs (their vehicle)?"
      ]
    },
    pronunciation: {
      sounds: "Sentence Stress (Content words vs. Function words)",
      guide: "Trong câu tiếng Anh, từ mang thông tin chính (Danh từ, Động từ chính, Tính từ, Trạng từ) được NHẤN TRỌNG ÂM mạnh hơn. Từ ngữ pháp/chức năng (đại từ, giới từ, mạo từ, trợ động từ) phát âm nhẹ, lướt.",
      pairs: [
        { wordA: "'Flying 'cars will 'save 'time. (Content words stressed)", wordB: "It is for 'us. (Function words unstressed)" }
      ]
    },
    communication: {
      function: "Making predictions about future transport and comparing vehicle features",
      dialogue: [
        { speaker: "Alex", text: "Do you think people will still use petrol cars in thirty years?" },
        { speaker: "Linh", text: "Definitely not! We will travel in solar-powered flying cars or sky trains." },
        { speaker: "Alex", text: "That sounds amazing and pollution-free!" }
      ]
    },
    skills: {
      reading: "Reading articles on futuristic inventions in public and personal transport.",
      writing: "Writing a description (80-100 words) of an imaginative vehicle of the future (Name, fuel source, speed, passenger capacity, safety features).",
      speaking: "Presenting a mock commercial pitch for a newly invented future vehicle."
    },
    quiz: [
      {
        q: "Choose the correct possessive pronoun: 'My flying car is red. What color is ________?'",
        options: ["your", "yours", "you", "your's"],
        a: 1,
        exp: "'yours' là đại từ sở hữu đứng độc lập thay thế cho cụm 'your flying car'."
      },
      {
        q: "Complete the prediction: 'In 2050, children ________ to school by hyperloop.'",
        options: ["will travel", "travels", "are travelling", "travelled"],
        a: 0,
        exp: "Dự đoán tương lai xa với mốc năm 'In 2050' dùng thì tương lai đơn 'will travel'."
      }
    ]
  },

  // UNIT 12
  {
    id: "unit-12",
    unit: "UNIT 12",
    theme: "VISIONS OF THE FUTURE",
    title: "English-speaking Countries",
    focus: "Geography, people and landmarks of English-speaking nations, Articles (a, an, the, zero article), and Question intonation",
    color: "cyan",
    vocab: [
      { word: "English-speaking country", type: "noun", ipa: "/ˈɪŋɡlɪʃ ˈspiːkɪŋ/", meaning: "quốc gia nói tiếng Anh (UK, USA, Australia, Canada, New Zealand...)", ex: "Australia is an English-speaking country in the Southern Hemisphere." },
      { word: "native speaker", type: "noun", ipa: "/ˈneɪtɪv ˈspiːkə/", meaning: "người bản xứ nói tiếng mẹ đẻ", ex: "Practicing with native speakers boosts pronunciation accuracy." },
      { word: "capital / landmark", type: "noun", ipa: "/ˈkæpɪtl / ˈlændmɑːk/", meaning: "thủ đô / công trình biểu tượng", ex: "The Sydney Opera House is a world-famous architectural landmark." },
      { word: "landscape / wildlife", type: "noun", ipa: "/ˈlændskeɪp / ˈwaɪldlaɪf/", meaning: "phong cảnh thiên nhiên / động vật hoang dã", ex: "New Zealand is renowned for its breathtaking alpine landscapes." },
      { word: "kangaroo / koala", type: "noun", ipa: "/ˌkæŋɡəˈruː / kəʊˈɑːlə/", meaning: "chuột túi / gấu túi koala", ex: "Kangaroos and koalas are native marsupials of Australia." }
    ],
    grammar: {
      topic: "Articles: A, An, The & Zero Article (Ø)",
      rules: [
        "a / an: Used before singular countable nouns mentioned for the first time or non-specific items (a kangaroo, an island). Note: 'a university' (/juː/), 'an hour' (/aʊə/).",
        "the: Used before definite items known to both speaker and listener; items mentioned a second time; unique entities (the sun, the earth); superlatives (the largest city).",
        "Zero article (Ø): Before plural countable nouns and uncountable nouns when speaking in general (Ø Kangaroos live in Australia. Ø Water is vital).",
        "Geographical names: 'the USA', 'the UK' (composite nations), but 'Ø Vietnam', 'Ø Australia', 'Ø Canada'."
      ],
      examples: [
        "Canberra is the capital city of Australia.",
        "We visited an ancient castle in Scotland yesterday. The castle was magnificent.",
        "English is spoken as an official language in many countries."
      ]
    },
    pronunciation: {
      sounds: "Rising and Falling Intonation in Questions",
      guide: "Ngữ điệu câu hỏi: Câu hỏi Yes/No thường LÊN GIỌNG ở cuối câu (↗ Did you visit London last year? ↗). Câu hỏi Wh- thường XUỐNG GIỌNG ở cuối câu (↘ What is the capital of Canada? ↘).",
      pairs: [
        { wordA: "Is Sydney the capital? (↗ Rising)", wordB: "Where is Ottawa located? (↘ Falling)" }
      ]
    },
    communication: {
      function: "Asking and giving facts about English-speaking countries",
      dialogue: [
        { speaker: "Guide", text: "Did you know that Washington D.C. is the capital of the United States?" },
        { speaker: "Tourist", text: "Yes, but New York City is the largest city, isn't it?" },
        { speaker: "Guide", text: "Exactly! New York is famous for the Statue of Liberty." }
      ]
    },
    skills: {
      reading: "Reading travel guides about unique attractions in Scotland, New Zealand, Canada, and the USA.",
      writing: "Writing a travel diary entry or postcard (80-100 words) recounting a tour visit to an English-speaking city.",
      speaking: "Playing a geographic quiz game: 'Guess the Country & Landmark'."
    },
    quiz: [
      {
        q: "Fill in the blank with the correct article: 'Ottawa is ________ capital city of Canada.'",
        options: ["a", "an", "the", "Ø (no article)"],
        a: 2,
        exp: "'the capital city' là danh từ xác định duy nhất của một quốc gia, bắt buộc dùng mạo từ 'the'."
      },
      {
        q: "Which question normally has a RISING intonation at the end?",
        options: [
          "What is the population of New Zealand?",
          "How many states are there in the USA?",
          "Have you ever seen a wild kangaroo in Australia?",
          "Where does the Queen live?"
        ],
        a: 2,
        exp: "Câu C là câu hỏi Yes/No ('Have you ever seen...?') nên ngữ điệu lên giọng ở cuối câu (Rising ↗)."
      }
    ]
  },

  // REVIEW 4
  {
    id: "review-4",
    unit: "REVIEW 4",
    theme: "VISIONS OF THE FUTURE",
    title: "Review 4 (Units 10 - 12)",
    focus: "Consolidating Energy, Future Travel, English-speaking Countries; Grammar (Present Continuous, Future Will, Possessive Pronouns, Articles); Pronunciation (3-syllable stress, Sentence stress, Question intonation)",
    color: "rose",
    vocab: [
      { word: "sustainable future", type: "phrase", ipa: "/səˈsteɪnəbl ˈfjuːtʃə/", meaning: "tương lai bền vững", ex: "Renewable energy paves the way for a sustainable future." },
      { word: "autonomous transport", type: "noun", ipa: "/ɔːˈtɒnəməs/", meaning: "giao thông tự hành", ex: "Autonomous transport will revolutionize global mobility." },
      { word: "global citizen", type: "noun", ipa: "/ˈɡləʊbl ˈsɪtɪzn/", meaning: "công dân toàn cầu", ex: "Mastering English helps students become confident global citizens." }
    ],
    grammar: {
      topic: "Systematic Review of Units 10 - 12 Grammar",
      rules: [
        "Contrast Present Continuous (actions now / trends) vs. Future Simple (predictions with will/won't).",
        "Master possessive pronouns: mine, yours, his, hers, ours, theirs.",
        "Apply article rules: a/an, the, and zero article."
      ],
      examples: [
        "They are developing eco-friendly flying cars, and I think people will use them soon.",
        "The capital of Australia is Canberra, not Sydney."
      ]
    },
    pronunciation: {
      sounds: "Synthesis of 3-Syllable Stress, Sentence Stress & Intonation",
      guide: "Luyện đọc diễn cảm các đoạn văn và câu hỏi phức hợp, chú ý nhấn trọng âm từ khóa và ngữ điệu câu hỏi Yes/No ↗ và Wh- ↘.",
      pairs: [
        { wordA: "énergy (1st)", wordB: "pollúting (2nd)" },
        { wordA: "Can you speak English? (↗)", wordB: "Which country is larger? (↘)" }
      ]
    },
    communication: {
      function: "Debating visions of 2050 and international travel plans",
      dialogue: [
        { speaker: "A", text: "Are you planning a trip to New Zealand next summer?" },
        { speaker: "B", text: "Yes! I will explore its beautiful national parks and learn about Maori culture." }
      ]
    },
    skills: {
      reading: "Comprehensive reading on energy innovations and global exploration.",
      writing: "Writing a vision essay (90-110 words) about life, transport, and energy in the year 2050.",
      speaking: "Group discussion: 'How will technology and green energy transform our daily lives?'"
    },
    quiz: [
      {
        q: "Choose the correct sentence:",
        options: [
          "Our house has solar panels, but their doesn't.",
          "Our house has solar panels, but theirs doesn't.",
          "Our house has solar panels, but they doesn't.",
          "Ours house has solar panels, but theirs doesn't."
        ],
        a: 1,
        exp: "'theirs' là đại từ sở hữu làm chủ ngữ vế sau thay thế cho 'their house'. 'Ours' ở câu D sai vì trước danh từ 'house' phải dùng tính từ sở hữu 'Our'."
      },
      {
        q: "Complete: 'Look! The technicians ________ the solar water heater on the roof.'",
        options: ["install", "are installing", "installed", "will install"],
        a: 1,
        exp: "Mệnh lệnh 'Look!' báo hiệu hành động đang diễn ra trước mắt -> dùng thì hiện tại tiếp diễn 'are installing'."
      }
    ]
  }
];

// 12-Unit Grammar Matrix
const grammarMatrix = [
  { unit: "Unit 1", topic: "Present Simple & Verbs of liking", formula: "S + V(s/es) | like/love/enjoy + V-ing", note: "Diễn tả thói quen, sở thích, sự thật hiển nhiên. Trạng từ tần suất đứng trước động từ thường." },
  { unit: "Unit 2", topic: "Simple Sentences & Should/Shouldn't", formula: "S + V (+ O/Adv) | should/shouldn't + V_inf", note: "Câu có 1 mệnh đề độc lập. Should khuyên nên làm, shouldn't khuyên không nên làm." },
  { unit: "Unit 3", topic: "Past Simple Tense", formula: "S + V2/-ed | Did + S + V_inf?", note: "Hành động đã chấm dứt trong quá khứ (yesterday, ago, last). Phát âm -ed (/t/, /d/, /ɪd/)." },
  { unit: "Unit 4", topic: "Comparisons: like, different from, (not) as...as", formula: "S1 + be + (not) as + adj + as + S2", note: "So sánh giống (like), khác biệt (different from), ngang bằng (as...as). Tính từ giữ nguyên dạng." },
  { unit: "Unit 5", topic: "Quantifiers with Countable/Uncountable", formula: "How many + N_pl? | How much + N_unc?", note: "some (khẳng định/mời), any (phủ định/hỏi), a lot of/lots of (cả 2 loại danh từ)." },
  { unit: "Unit 6", topic: "Prepositions of Time & Place", formula: "at (giờ), on (ngày/thứ), in (tháng/năm/mùa)", note: "Place: in (bên trong), on (bề mặt), at (địa điểm cụ thể), next to, opposite, between." },
  { unit: "Unit 7", topic: "Distances & Should/Shouldn't", formula: "It is + distance + from A to B | should + V", note: "Hỏi khoảng cách: 'How far is it from A to B?'. Khuyên chấp hành an toàn giao thông." },
  { unit: "Unit 8", topic: "Connectors of Contrast", formula: "Although/Though + Clause, Clause | Sentence. However, ...", note: "Không dùng 'although... but' cùng lúc. However đứng đầu câu thứ 2 có dấu phẩy." },
  { unit: "Unit 9", topic: "Yes / No Questions", formula: "Do/Does/Did/Be/Modal + S + V_inf?", note: "Đảo trợ động từ lên trước chủ ngữ. Câu trả lời ngắn lặp lại trợ động từ, không lặp động từ chính." },
  { unit: "Unit 10", topic: "Present Continuous Tense", formula: "S + am/is/are + V-ing", note: "Hành động đang diễn ra (now, at present, Look!) hoặc xu hướng thay đổi hiện tại." },
  { unit: "Unit 11", topic: "Future Simple & Possessive Pronouns", formula: "S + will/won't + V | mine, yours, his, hers, ours, theirs", note: "Dự đoán tương lai. Đại từ sở hữu đứng độc lập thay thế cho [Tính từ sở hữu + Danh từ]." },
  { unit: "Unit 12", topic: "Articles (a, an, the, Ø)", formula: "a/an (chưa xác định số ít), the (xác định duy nhất)", note: "Zero article (Ø) khi nói chung danh từ số nhiều/không đếm được. Mạo từ trước tên nước đặc thù." }
];

module.exports = { theme3And4Data, grammarMatrix };
