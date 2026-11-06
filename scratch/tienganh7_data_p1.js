// Data for Tiếng Anh 7 - Theme 1 & Theme 2 (Units 1 -> 6 + Reviews 1 & 2)
// Global Success 7 - Sách học sinh

const theme1And2Data = [
  // UNIT 1
  {
    id: "unit-1",
    unit: "UNIT 1",
    theme: "OUR COMMUNITIES",
    title: "Hobbies",
    focus: "Talking about hobbies, action verbs of liking, and Present Simple tense",
    color: "blue",
    vocab: [
      { word: "build dollhouses", type: "phrase", ipa: "/bɪld ˈdɒlhaʊzɪz/", meaning: "làm/xây nhà búp bê", ex: "My sister loves to build dollhouses from cardboard." },
      { word: "make models", type: "phrase", ipa: "/meɪk ˈmɒdlz/", meaning: "làm mô hình (máy bay, thuyền...)", ex: "He enjoys making models of military aircraft." },
      { word: "collect coins / stamps", type: "phrase", ipa: "/kəˈlekt kɔɪnz / stæmps/", meaning: "sưu tầm tiền xu / tem", ex: "My grandfather has collected stamps for forty years." },
      { word: "ride a horse / horse riding", type: "phrase", ipa: "/raɪd ə hɔːs/", meaning: "cưỡi ngựa", ex: "She goes horse riding every weekend in the countryside." },
      { word: "gardening", type: "noun", ipa: "/ˈɡɑːdnɪŋ/", meaning: "làm vườn", ex: "Gardening helps my mother relax after stressful workdays." },
      { word: "do judo", type: "phrase", ipa: "/duː ˈdʒuːdəʊ/", meaning: "tập võ judo", ex: "Nam does judo three times a week to keep fit." },
      { word: "take photos", type: "phrase", ipa: "/teɪk ˈfəʊtəʊz/", meaning: "chụp ảnh", ex: "I usually take photos of beautiful landscapes when travelling." },
      { word: "go cycling", type: "phrase", ipa: "/ɡəʊ ˈsaɪklɪŋ/", meaning: "đi đạp xe", ex: "We often go cycling around West Lake on Sunday mornings." }
    ],
    grammar: {
      topic: "The Present Simple Tense & Verbs of Liking / Disliking",
      rules: [
        "Form: (+) S + V(s/es) / be (am/is/are) | (-) S + do/does not + V_inf | (?) Do/Does + S + V_inf?",
        "Usage: Expressing habitual actions, daily routines, general truths, and personal hobbies.",
        "Third-person singular spelling: add -s (reads), -es after -ch, -sh, -s, -x, -z, -o (watches, goes), consonant + y -> -ies (studies).",
        "Adverbs of frequency (always, usually, often, sometimes, rarely, never) stand BEFORE ordinary verbs and AFTER 'be'.",
        "Verbs of liking/disliking: like, love, enjoy, fancy, adore, hate, dislike, detest + V-ing.",
        "Expressions of preference: be keen on / be fond of / be interested in + N/V-ing; prefer A to B."
      ],
      examples: [
        "My brother collects coins and stamps. (Thói quen thường xuyên)",
        "She doesn't like horse riding because she is afraid of falling.",
        "Do you enjoy gardening in your free time? — Yes, I do."
      ]
    },
    pronunciation: {
      sounds: "/ə/ vs. /ɜː/",
      guide: "Âm /ə/ là nguyên âm ngắn, yếu, xuất hiện ở âm tiết không nhấn trọng âm (about, cinema). Âm /ɜː/ là nguyên âm dài, mở hơi, xuất hiện ở âm tiết có trọng âm (bird, learn, work).",
      pairs: [
        { wordA: "away /əˈweɪ/", wordB: "early /ˈɜːli/" },
        { wordA: "neighbour /ˈneɪbə/", wordB: "burn /bɜːn/" },
        { wordA: "collect /kəˈlekt/", wordB: "girl /ɡɜːl/" }
      ]
    },
    communication: {
      function: "Asking and talking about hobbies",
      dialogue: [
        { speaker: "Lan", text: "What do you do in your free time, Mark?" },
        { speaker: "Mark", text: "I love making models of cars and planes." },
        { speaker: "Lan", text: "When did you start it and what are its benefits?" },
        { speaker: "Mark", text: "Two years ago. It helps me improve my patience and creativity." }
      ]
    },
    skills: {
      reading: "Reading about unusual hobbies (carving eggshells, origami) and identifying key materials, steps, and benefits.",
      writing: "Writing a short paragraph (60-80 words) introducing your personal hobby (Name -> When/With whom started -> Needed tools -> Benefits).",
      speaking: "Interviewing classmates about their favorite pastimes and reporting results."
    },
    quiz: [
      {
        q: "Choose the correct sentence in the Present Simple:",
        options: [
          "My sister don't like building dollhouses.",
          "My sister doesn't likes building dollhouses.",
          "My sister doesn't like building dollhouses.",
          "My sister not like building dollhouses."
        ],
        a: 2,
        exp: "Với chủ ngữ số ít 'My sister', câu phủ định dùng 'doesn't' + V nguyên mẫu ('like')."
      },
      {
        q: "Which word has the underlined part pronounced as /ɜː/?",
        options: ["around", "listen", "service", "doctor"],
        a: 2,
        exp: "'service' phát âm là /ˈsɜːvɪs/ chứa âm /ɜː/, các từ còn lại chứa âm /ə/."
      }
    ]
  },

  // UNIT 2
  {
    id: "unit-2",
    unit: "UNIT 2",
    theme: "OUR COMMUNITIES",
    title: "Healthy Living",
    focus: "Health problems, healthy habits, simple sentences, and giving advice with should/shouldn't",
    color: "emerald",
    vocab: [
      { word: "allergy", type: "noun", ipa: "/ˈælədʒi/", meaning: "bệnh dị ứng", ex: "He has a severe allergy to seafood and peanuts." },
      { word: "acne / spots", type: "noun", ipa: "/ˈækni / spɒts/", meaning: "mụn trứng cá", ex: "Wash your face regularly to prevent acne." },
      { word: "sunburn", type: "noun", ipa: "/ˈsʌnbɜːn/", meaning: "cháy nắng", ex: "Wear a wide-brimmed hat to avoid sunburn." },
      { word: "headache / toothache", type: "noun", ipa: "/ˈhedeɪk / ˈtuːθeɪk/", meaning: "đau đầu / đau răng", ex: "She had a terrible headache after working in the sun." },
      { word: "sore throat", type: "noun", ipa: "/ˌsɔː ˈθrəʊt/", meaning: "viêm họng, đau họng", ex: "Drink warm ginger tea if you have a sore throat." },
      { word: "keep fit / stay in shape", type: "phrase", ipa: "/kiːp fɪt/", meaning: "giữ dáng, duy trì thể lực", ex: "Daily morning jogging helps people keep fit." },
      { word: "screen time", type: "noun", ipa: "/ˈskriːn taɪm/", meaning: "thời gian xem màn hình điện tử", ex: "Children should limit their screen time to two hours a day." }
    ],
    grammar: {
      topic: "Simple Sentences & Modal Verb 'Should / Shouldn't'",
      rules: [
        "A simple sentence consists of one independent clause with a subject and a verb expressing a complete thought.",
        "Basic patterns: S + V (Birds sing) | S + V + O (We eat fresh vegetables) | S + V + Adverbial (He runs in the park every morning).",
        "Compound elements: A simple sentence can have compound subjects (Lan and Nam study) or compound verbs (He exercises and drinks water).",
        "Should / Shouldn't + V_inf: Used to give polite advice or recommendations (You should sleep early. You shouldn't skip meals)."
      ],
      examples: [
        "Fresh fruit and vegetables provide essential vitamins. (Simple sentence: S + V + O)",
        "You should drink at least two litres of water every day.",
        "He shouldn't spend too much time playing computer games."
      ]
    },
    pronunciation: {
      sounds: "/f/ vs. /v/",
      guide: "/f/ là phụ âm vô thanh (không rung dây thanh quản, răng trên chạm môi dưới thổi hơi: food, safe). /v/ là phụ âm hữu thanh (có rung dây thanh quản: very, save).",
      pairs: [
        { wordA: "fat /fæt/", wordB: "vat /væt/" },
        { wordA: "leaf /liːf/", wordB: "leave /liːv/" },
        { wordA: "safe /seɪf/", wordB: "save /seɪv/" }
      ]
    },
    communication: {
      function: "Asking about health problems and giving advice",
      dialogue: [
        { speaker: "Doctor", text: "What's the matter with you, Alex?" },
        { speaker: "Alex", text: "I have a terrible toothache and a fever." },
        { speaker: "Doctor", text: "You should see a dentist and you shouldn't eat sugary candies." }
      ]
    },
    skills: {
      reading: "Reading tips and articles about healthy lifestyle habits (diet, physical exercise, sleep).",
      writing: "Writing a paragraph providing health advice for a specific problem (e.g., how to avoid obesity or flu).",
      speaking: "Role-playing a consultation between a doctor and a patient."
    },
    quiz: [
      {
        q: "Which of the following is a Simple Sentence?",
        options: [
          "She eats healthy food, but she doesn't exercise regularly.",
          "Walking thirty minutes every day keeps your heart healthy.",
          "Although he was tired, he finished all his homework.",
          "Drink more water and you will feel much better."
        ],
        a: 1,
        exp: "Câu B chỉ có 1 mệnh đề độc lập với chủ ngữ là danh động từ 'Walking thirty minutes every day' và vị ngữ 'keeps your heart healthy'."
      },
      {
        q: "Complete the advice: 'You have a bad cough. You ________ drink ice-cold water.'",
        options: ["should", "shouldn't", "must to", "ought"],
        a: 1,
        exp: "Khi bị ho nặng, không nên uống nước đá lạnh: dùng 'shouldn't' + V nguyên mẫu."
      }
    ]
  },

  // UNIT 3
  {
    id: "unit-3",
    unit: "UNIT 3",
    theme: "OUR COMMUNITIES",
    title: "Community Service",
    focus: "Volunteer activities, helping people in need, and the Past Simple tense",
    color: "amber",
    vocab: [
      { word: "clean up the neighbourhood", type: "phrase", ipa: "/kliːn ʌp/", meaning: "dọn dẹp vệ sinh khu phố", ex: "Volunteers cleaned up the local park last Saturday." },
      { word: "donate books / clothes", type: "phrase", ipa: "/dəʊˈneɪt/", meaning: "quyên góp sách / quần áo", ex: "Our class donated over 200 notebooks to rural pupils." },
      { word: "tutor younger students", type: "phrase", ipa: "/ˈtjuːtə/", meaning: "dạy kèm học sinh nhỏ tuổi", ex: "High school students tutor primary kids in math and reading." },
      { word: "nursing home", type: "noun", ipa: "/ˈnɜːsɪŋ həʊm/", meaning: "viện dưỡng lão", ex: "We visited the nursing home to cheer up the elderly." },
      { word: "homeless / street children", type: "noun", ipa: "/ˈhəʊmləs/", meaning: "người vô gia cư / trẻ em đường phố", ex: "Charities provide warm meals and shelters for homeless people." },
      { word: "recycle paper / plastic", type: "phrase", ipa: "/ˌriːˈsaɪkl/", meaning: "tái chế giấy / nhựa", ex: "Recycling empty plastic bottles protects marine animals." }
    ],
    grammar: {
      topic: "The Past Simple Tense (Regular & Irregular Verbs)",
      rules: [
        "Usage: Actions or events completed at a specific time in the past.",
        "Time markers: yesterday, last week/month/year, two days ago, in 2022.",
        "Form with regular verbs: V-ed (clean -> cleaned, study -> studied, stop -> stopped).",
        "Form with irregular verbs: V2 (go -> went, have -> had, give -> gave, see -> saw, buy -> bought).",
        "Negative & Question: S + did not (didn't) + V_inf | Did + S + V_inf?",
        "To be in the past: was (I, he, she, it, singular) / were (you, we, they, plural)."
      ],
      examples: [
        "We planted fifty trees in our school garden last Sunday.",
        "They didn't organise the charity concert yesterday.",
        "Did you donate your old warm clothes to poor children? — Yes, I did."
      ]
    },
    pronunciation: {
      sounds: "Pronunciation of -ed endings (/t/, /d/, /ɪd/)",
      guide: "/ɪd/ sau âm /t/ hoặc /d/ (wanted, needed); /t/ sau phụ âm vô thanh /p, k, f, s, ʃ, tʃ/ (helped, washed, watched); /d/ sau các âm hữu thanh còn lại (cleaned, played, loved).",
      pairs: [
        { wordA: "wanted /ˈwɒntɪd/ (/ɪd/)", wordB: "helped /helpt/ (/t/)" },
        { wordA: "visited /ˈvɪzɪtɪd/ (/ɪd/)", wordB: "cleaned /kliːnd/ (/d/)" }
      ]
    },
    communication: {
      function: "Asking and talking about volunteer experiences",
      dialogue: [
        { speaker: "Tom", text: "What community service did your school do last month?" },
        { speaker: "Mai", text: "We collected plastic bottles and donated books to mountainous kids." },
        { speaker: "Tom", text: "That sounds wonderful! Did you feel happy?" },
        { speaker: "Mai", text: "Yes, we felt proud because we helped many people in need." }
      ]
    },
    skills: {
      reading: "Reading about international youth volunteer projects (e.g. Green Summer, soup kitchens).",
      writing: "Writing an informal email (80-100 words) to a friend recounting community work done last summer.",
      speaking: "Discussing the benefits of volunteer service for both helpers and the community."
    },
    quiz: [
      {
        q: "Which verb has the -ed ending pronounced differently from the others?",
        options: ["planted", "collected", "needed", "helped"],
        a: 3,
        exp: "'helped' kết thúc bằng âm /t/, trong khi 'planted, collected, needed' kết thúc bằng âm /ɪd/."
      },
      {
        q: "Change into negative: 'They gave food to homeless people yesterday.'",
        options: [
          "They didn't gave food to homeless people yesterday.",
          "They didn't give food to homeless people yesterday.",
          "They not give food to homeless people yesterday.",
          "They weren't give food to homeless people yesterday."
        ],
        a: 1,
        exp: "Câu phủ định quá khứ đơn của động từ thường là: didn't + V nguyên mẫu ('give')."
      }
    ]
  },

  // REVIEW 1
  {
    id: "review-1",
    unit: "REVIEW 1",
    theme: "OUR COMMUNITIES",
    title: "Review 1 (Units 1 - 3)",
    focus: "Consolidating vocabulary (Hobbies, Health, Community), Grammar (Present Simple, Simple Sentences, Past Simple), and Pronunciation (/ə/, /ɜː/, /f/, /v/, -ed)",
    color: "purple",
    vocab: [
      { word: "volunteer work", type: "noun", ipa: "/ˌvɒlənˈtɪə wɜːk/", meaning: "công việc tình nguyện", ex: "Doing volunteer work enriches life experience." },
      { word: "healthy balance", type: "phrase", ipa: "/ˈhelθi ˈbæləns/", meaning: "sự cân bằng lành mạnh", ex: "Maintain a healthy balance between study and recreation." },
      { word: "creative hobby", type: "phrase", ipa: "/kriˈeɪtɪv ˈhɒbi/", meaning: "sở thích sáng tạo", ex: "Painting and sculpturing are creative hobbies." }
    ],
    grammar: {
      topic: "Systematic Review of Units 1 - 3 Grammar",
      rules: [
        "Contrast Present Simple (daily routine/hobby) vs. Past Simple (completed past action with yesterday, ago, last...).",
        "Verify sentence structure: Subject + Verb + Complement / Object.",
        "Check spelling rules for -s/-es and -ed endings."
      ],
      examples: [
        "She usually enjoys gardening, but last week she visited the local nursing home.",
        "He didn't eat vegetables when he was small, but now he eats them daily."
      ]
    },
    pronunciation: {
      sounds: "Synthesis of /ə/ - /ɜː/, /f/ - /v/, and -ed endings",
      guide: "Luyện phát âm câu hoàn chỉnh có chứa các âm mục tiêu: 'The volunteer (/ə/) worked (/t/) early (/ɜː/) to provide food (/f/) and very (/v/) clean water.'",
      pairs: [
        { wordA: "bird (/ɜː/)", wordB: "actor (/ə/)" },
        { wordA: "laugh (/f/)", wordB: "leave (/v/)" },
        { wordA: "stopped (/t/)", wordB: "started (/ɪd/)" }
      ]
    },
    communication: {
      function: "Synthesized communicative practice across Units 1 - 3",
      dialogue: [
        { speaker: "A", text: "How did you spend your weekend?" },
        { speaker: "B", text: "I joined a clean-up campaign. We should keep our neighbourhood green and clean!" }
      ]
    },
    skills: {
      reading: "Reading comprehension test combining healthy lifestyle and community projects.",
      writing: "Writing a short reflection about how hobbies and community service contribute to personal growth.",
      speaking: "Group presentation about 'Our Green & Healthy Community'."
    },
    quiz: [
      {
        q: "Choose the correct sentence combining Present and Past:",
        options: [
          "I usually go cycling on Sundays, but last Sunday I stayed home to nurse a cold.",
          "I usually went cycling on Sundays, but last Sunday I stay home.",
          "I usually go cycling on Sundays, but last Sunday I stay home.",
          "I usually goes cycling on Sundays, but last Sunday I stayed home."
        ],
        a: 0,
        exp: "Vế đầu dùng hiện tại đơn diễn tả thói quen ('go'), vế sau dùng quá khứ đơn với mốc 'last Sunday' ('stayed')."
      },
      {
        q: "Which word has the underlined part pronounced as /v/?",
        options: ["knife", "enough", "village", "photograph"],
        a: 2,
        exp: "'village' phát âm là /ˈvɪlɪdʒ/ bắt đầu bằng âm /v/. Các từ 'knife, enough, photograph' đều kết thúc bằng âm /f/."
      }
    ]
  },

  // UNIT 4
  {
    id: "unit-4",
    unit: "UNIT 4",
    theme: "OUR HERITAGE",
    title: "Music and Arts",
    focus: "Musical instruments, visual arts, comparisons with like, different from, (not) as ... as",
    color: "rose",
    vocab: [
      { word: "musical instrument", type: "noun", ipa: "/ˈmjuːzɪkl ˈɪnstrəmənt/", meaning: "nhạc cụ (đàn, sáo, trống)", ex: "Can you play any musical instruments like the piano or guitar?" },
      { word: "water puppetry", type: "noun", ipa: "/ˈwɔːtə ˈpʌpɪtri/", meaning: "nghệ thuật múa rối nước", ex: "Water puppetry is a unique traditional art form of Vietnam." },
      { word: "art gallery / exhibition", type: "noun", ipa: "/ɑːt ˈɡæləri / ˌeksɪˈbɪʃn/", meaning: "phòng tranh / buổi triển lãm", ex: "We admired contemporary paintings at the national art gallery." },
      { word: "composer / musician", type: "noun", ipa: "/kəmˈpəʊzə / mjuˈzɪʃn/", meaning: "nhà soạn nhạc / nhạc sĩ", ex: "Van Cao is one of Vietnam's greatest national composers." },
      { word: "portrait / landscape", type: "noun", ipa: "/ˈpɔːtreɪt / ˈlændskeɪp/", meaning: "tranh chân dung / tranh phong cảnh", ex: "He prefers painting rural landscapes to urban portraits." }
    ],
    grammar: {
      topic: "Comparisons: like, different from, (not) as ... as",
      rules: [
        "like: expressing similarity (The puppet show was like a magical story).",
        "different from: expressing contrast/distinction (Classical music is very different from modern rock).",
        "(not) as + adj/adv + as: expressing equality or inequality (This art exhibition isn't as crowded as last year's).",
        "Keep structure balanced on both sides: Her painting is as beautiful as his (painting)."
      ],
      examples: [
        "Traditional folk music is quite different from electronic pop music.",
        "Learning to play the violin is not as easy as playing the recorder.",
        "His voice sounds like an opera singer."
      ]
    },
    pronunciation: {
      sounds: "/ʃ/ vs. /ʒ/",
      guide: "/ʃ/ là phụ âm vô thanh (she, show, action, musician). /ʒ/ là phụ âm hữu thanh rung cổ họng (measure, pleasure, usual, television).",
      pairs: [
        { wordA: "washer /ˈwɒʃə/", wordB: "pleasure /ˈpleʒə/" },
        { wordA: "special /ˈspeʃl/", wordB: "television /ˈtelɪvɪʒn/" }
      ]
    },
    communication: {
      function: "Making and responding to invitations to arts events",
      dialogue: [
        { speaker: "Nam", text: "Would you like to go to the Thang Long Water Puppet Theatre tonight?" },
        { speaker: "David", text: "I'd love to! I've heard it is different from any Western theater." },
        { speaker: "Nam", text: "Great! Let's meet at 7 PM in front of the ticket booth." }
      ]
    },
    skills: {
      reading: "Reading about traditional Vietnamese musical heritage (Dan bau, Ca tru, Gong culture).",
      writing: "Writing an informal invitation letter to an art or music performance (Event, date, time, venue, RSVP).",
      speaking: "Debating preferences: 'Is modern pop music better than classical music?'"
    },
    quiz: [
      {
        q: "Fill in the blank: 'This oil painting is completely different ________ the watercolor sketch.'",
        options: ["with", "from", "as", "like"],
        a: 1,
        exp: "Cấu trúc so sánh khác biệt luôn đi kèm giới từ 'different from'."
      },
      {
        q: "Which word contains the sound /ʒ/?",
        options: ["musician", "exhibition", "decision", "fashion"],
        a: 2,
        exp: "'decision' phát âm là /dɪˈsɪʒn/ chứa âm /ʒ/, các từ còn lại chứa âm /ʃ/."
      }
    ]
  },

  // UNIT 5
  {
    id: "unit-5",
    unit: "UNIT 5",
    theme: "OUR HERITAGE",
    title: "Food and Drink",
    focus: "Vietnamese and international cuisine, cooking methods, quantifiers with countable/uncountable nouns",
    color: "amber",
    vocab: [
      { word: "omelette / pancake", type: "noun", ipa: "/ˈɒmlət / ˈpænkeɪk/", meaning: "trứng cuộn / bánh kếp", ex: "She made a delicious mushroom omelette for breakfast." },
      { word: "ingredients / recipe", type: "noun", ipa: "/ɪnˈɡriːdiənts / ˈresəpi/", meaning: "nguyên liệu / công thức nấu ăn", ex: "Pho requires fresh rice noodles, beef, and fragrant herbs." },
      { word: "boil / fry / bake", type: "verb", ipa: "/bɔɪl / fraɪ / beɪk/", meaning: "luộc / rán / nướng bánh", ex: "Boil the water before adding vegetables to keep their green color." },
      { word: "tablespoon / teaspoon", type: "noun", ipa: "/ˈteɪblspuːn / ˈtiːspuːn/", meaning: "thìa canh / thìa cà phê", ex: "Add two tablespoons of fish sauce to the soup." },
      { word: "turmeric / pepper", type: "noun", ipa: "/ˈtɜːmərɪk / ˈpepə/", meaning: "bột nghệ / hạt tiêu", ex: "Turmeric gives the curry its appealing golden color." }
    ],
    grammar: {
      topic: "Nouns & Quantifiers (some, any, a lot of, lots of, much, many, How much/How many)",
      rules: [
        "Countable nouns (eggs, apples, onions) take 'many', 'a few', 'How many + plural noun?'.",
        "Uncountable nouns (water, milk, beef, rice, flour, oil) take 'much', 'a little', 'How much + uncountable noun?'.",
        "'some' is used in affirmative sentences and polite requests/offers (Would you like some tea?).",
        "'any' is used in negative sentences and questions (Is there any milk left? There isn't any salt).",
        "'a lot of / lots of' can be used with BOTH countable plural and uncountable nouns."
      ],
      examples: [
        "How many eggs do we need for the pancake? — We need three eggs.",
        "How much olive oil is left in the bottle? — There is only a little.",
        "We have got a lot of apples and some fresh milk."
      ]
    },
    pronunciation: {
      sounds: "/ɒ/ vs. /ɔː/",
      guide: "/ɒ/ là nguyên âm ngắn, hạ cằm, môi tròn nhẹ (pot, hot, lot). /ɔː/ là nguyên âm dài, chu tròn môi, kéo dài hơn (sauce, pork, fork, water).",
      pairs: [
        { wordA: "pot /pɒt/", wordB: "port /pɔːt/" },
        { wordA: "fox /fɒks/", wordB: "fork /fɔːk/" },
        { wordA: "spot /spɒt/", wordB: "sport /spɔːt/" }
      ]
    },
    communication: {
      function: "Ordering food and asking about culinary ingredients",
      dialogue: [
        { speaker: "Waiter", text: "Good evening! Can I take your order?" },
        { speaker: "Guest", text: "Yes, I'd like a bowl of beef noodle soup (Pho bo), please." },
        { speaker: "Waiter", text: "Would you like something to drink?" },
        { speaker: "Guest", text: "Just a glass of warm mineral water, thank you." }
      ]
    },
    skills: {
      reading: "Reading recipes and cultural stories behind traditional Vietnamese dishes (Pho, Bun cha, Banh mi).",
      writing: "Writing a paragraph describing your favorite dish and its simple step-by-step recipe.",
      speaking: "Discussing healthy eating habits and table manners across cultures."
    },
    quiz: [
      {
        q: "Select the correct sentence with quantifiers:",
        options: [
          "There are much apples on the table.",
          "How many milk do you want in your coffee?",
          "We don't have any eggs left in the fridge.",
          "She bought any fresh butter yesterday."
        ],
        a: 2,
        exp: "Trong câu phủ định, danh từ số nhiều 'eggs' dùng lượng từ 'any'. Câu A sai vì 'apples' đếm được; câu B sai vì 'milk' không đếm được phải dùng 'How much'."
      },
      {
        q: "Which word has the vowel pronounced as /ɔː/?",
        options: ["bottle", "sauce", "omelette", "drop"],
        a: 1,
        exp: "'sauce' phát âm là /sɔːs/ chứa nguyên âm dài /ɔː/, các từ còn lại chứa nguyên âm ngắn /ɒ/."
      }
    ]
  },

  // UNIT 6
  {
    id: "unit-6",
    unit: "UNIT 6",
    theme: "OUR HERITAGE",
    title: "A Visit to a School",
    focus: "School facilities, historical colleges, prepositions of time (in, on, at) and place",
    color: "cyan",
    vocab: [
      { word: "boarding school", type: "noun", ipa: "/ˈbɔːdɪŋ skuːl/", meaning: "trường nội trú (học sinh ăn ở tại trường)", ex: "Students at boarding schools develop independence early." },
      { word: "school facilities", type: "noun", ipa: "/skjuːl fəˈsɪlətiz/", meaning: "cơ sở vật chất trường học (thư viện, phòng lab...)", ex: "Modern school facilities include smart boards and science labs." },
      { word: "entrance examination", type: "noun", ipa: "/ˈentrəns ɪɡˌzæmɪˈneɪʃn/", meaning: "kì thi tuyển sinh đầu vào", ex: "Passing the entrance exam requires diligence and solid knowledge." },
      { word: "laboratory / library", type: "noun", ipa: "/ləˈbɒrətri / ˈlaɪbrəri/", meaning: "phòng thí nghiệm / thư viện", ex: "We conduct chemistry experiments in the science laboratory." },
      { word: "Imperial Academy", type: "noun", ipa: "/ɪmˈpɪəriəl əˈkædəmi/", meaning: "Quốc Tử Giám (trường đại học đầu tiên của VN)", ex: "The Imperial Academy was established in 1076 in Thang Long." }
    ],
    grammar: {
      topic: "Prepositions of Time (at, on, in) and Place",
      rules: [
        "Time - at: specific clock times (at 7:30 AM), meal times (at lunchtime), fixed points (at noon, at night, at the weekend).",
        "Time - on: days of the week (on Monday), specific calendar dates (on 15th October), special days (on Christmas Day).",
        "Time - in: months (in July), seasons (in summer), years (in 2026), centuries (in the 21st century), parts of the day (in the morning).",
        "Place: in (inside enclosed space: in the classroom, in Hanoi), on (on surfaces: on the wall, on the 2nd floor), at (exact spot/institution: at school, at the bus stop).",
        "Relative positions: next to, between, opposite, behind, in front of, above, under."
      ],
      examples: [
        "Quoc Tu Giam was founded in 1076. (Năm dùng 'in')",
        "Our English club meets at 8 AM on Saturday morning.",
        "The computer room is on the second floor, next to the library."
      ]
    },
    pronunciation: {
      sounds: "/tʃ/ vs. /dʒ/",
      guide: "/tʃ/ là phụ âm tắc xát vô thanh (chair, teacher, lunch, cultural). /dʒ/ là phụ âm tắc xát hữu thanh (juice, jam, college, project).",
      pairs: [
        { wordA: "choke /tʃəʊk/", wordB: "joke /dʒəʊk/" },
        { wordA: "cheap /tʃiːp/", wordB: "jeep /dʒiːp/" },
        { wordA: "cherry /ˈtʃeri/", wordB: "Jerry /ˈdʒeri/" }
      ]
    },
    communication: {
      function: "Asking for and giving information about school features",
      dialogue: [
        { speaker: "Guide", text: "Welcome to Chu Van An High School, one of the oldest schools in Vietnam!" },
        { speaker: "Student", text: "When was the school established, sir?" },
        { speaker: "Guide", text: "It was built in 1908 on the bank of West Lake." }
      ]
    },
    skills: {
      reading: "Reading an article about the history of the Temple of Literature (Van Mieu) and the Imperial Academy.",
      writing: "Writing a paragraph (70-90 words) describing an interesting outdoor activity or school facility at your school.",
      speaking: "Presenting a virtual tour guide introduction for your ideal school."
    },
    quiz: [
      {
        q: "Fill in the blank: 'The new school year officially begins ________ 5th September.'",
        options: ["in", "on", "at", "to"],
        a: 1,
        exp: "Với ngày tháng cụ thể trong năm ('5th September'), bắt buộc dùng giới từ 'on'."
      },
      {
        q: "Which word contains the initial sound /dʒ/?",
        options: ["children", "gymnasium", "chemistry", "scholarship"],
        a: 1,
        exp: "'gymnasium' phát âm là /dʒɪmˈneɪziəm/ bắt đầu bằng âm /dʒ/."
      }
    ]
  },

  // REVIEW 2
  {
    id: "review-2",
    unit: "REVIEW 2",
    theme: "OUR HERITAGE",
    title: "Review 2 (Units 4 - 6)",
    focus: "Consolidating Arts, Food & Drink, School Heritage; Grammar (Comparisons, Quantifiers, Prepositions); Pronunciation (/ʃ/-/ʒ/, /ɒ/-/ɔː/, /tʃ/-/dʒ/)",
    color: "indigo",
    vocab: [
      { word: "cultural heritage", type: "noun", ipa: "/ˈkʌltʃərəl ˈherɪtɪdʒ/", meaning: "di sản văn hóa", ex: "Preserving cultural heritage is everyone's responsibility." },
      { word: "traditional recipe", type: "phrase", ipa: "/trəˈdɪʃənl ˈresəpi/", meaning: "công thức truyền thống", ex: "She inherited the traditional recipe from her grandmother." },
      { word: "historic building", type: "noun", ipa: "/hɪˈstɒrɪk ˈbɪldɪŋ/", meaning: "tòa nhà di tích lịch sử", ex: "Van Mieu is a famous historic building in Hanoi." }
    ],
    grammar: {
      topic: "Systematic Review of Units 4 - 6 Grammar",
      rules: [
        "Double-check comparisons: as...as, different from, like.",
        "Categorize nouns into Countable (many, few) vs. Uncountable (much, little).",
        "Master the in/on/at pyramid for both Time and Space."
      ],
      examples: [
        "Water puppetry is not as common as cinema, but it is deeply traditional.",
        "How much flour do we need to bake this cake on Sunday?"
      ]
    },
    pronunciation: {
      sounds: "Synthesis of /ʃ/ - /ʒ/, /ɒ/ - /ɔː/, and /tʃ/ - /dʒ/",
      guide: "Luyện đọc câu tổng hợp: 'The musician (/ʃ/) made a decision (/ʒ/) to enjoy hot (/ɒ/) pork (/ɔː/) at the college (/dʒ/) canteen (/tʃ/).'",
      pairs: [
        { wordA: "shoe (/ʃ/)", wordB: "measure (/ʒ/)" },
        { wordA: "box (/ɒ/)", wordB: "board (/ɔː/)" },
        { wordA: "chair (/tʃ/)", wordB: "jam (/dʒ/)" }
      ]
    },
    communication: {
      function: "Expressing opinions on cultural heritage and campus life",
      dialogue: [
        { speaker: "A", text: "Is your new school different from your old one?" },
        { speaker: "B", text: "Yes, it has much better facilities, and the art club meets on Friday afternoon." }
      ]
    },
    skills: {
      reading: "Reading comprehension covering folk arts and school traditions.",
      writing: "Writing a short invitation or review letter about a school food festival.",
      speaking: "Group discussion on how to introduce Vietnamese traditional food and music to foreign friends."
    },
    quiz: [
      {
        q: "Identify the grammatically correct sentence:",
        options: [
          "My school library isn't as larger as the public library.",
          "My school library isn't as large as the public library.",
          "My school library isn't as more large as the public library.",
          "My school library isn't like large as the public library."
        ],
        a: 1,
        exp: "Trong cấu trúc so sánh ngang bằng '(not) as ... as', tính từ luôn giữ nguyên dạng ('large'), không thêm -er hay more."
      },
      {
        q: "Choose the correct prepositions: 'He was born ________ 2012 ________ Hanoi.'",
        options: ["in / at", "on / in", "in / in", "at / on"],
        a: 2,
        exp: "Trước năm dùng 'in 2012', trước tên thành phố lớn dùng 'in Hanoi'."
      }
    ]
  }
];

module.exports = { theme1And2Data };
