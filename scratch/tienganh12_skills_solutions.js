// Tiếng Anh 12 - Global Success: Hệ thống Giải Chi Tiết Các Bài Kỹ Năng (Reading, Speaking, Listening, Writing)

const skillsSolutions = {
  unit1: {
    reading: {
      title: "Reading Comprehension: Steve Jobs — A Visionary Pioneer",
      passage: "Steve Jobs (1955–2011) was born in San Francisco and adopted by Paul and Clara Jobs. Although he was intellectually gifted, he found formal secondary education rigid. In 1972, Jobs attended Reed College but dropped out after just six months because the tuition fees burdened his working-class parents. However, he remained on campus as an auditor, attending classes that truly fascinated him, including a calligraphy course that later inspired the elegant typography of the Macintosh computer.\n\nIn 1976, Jobs and his brilliant engineer friend Steve Wozniak co-founded Apple Computer in the Jobs family garage. Their revolutionary Apple II computer became an unprecedented commercial hit. After internal disagreements led to Jobs's departure from Apple in 1985, he founded NeXT and purchased Pixar Animation Studios, which produced the world's first computer-animated feature film, Toy Story.\n\nJobs returned to Apple in 1997 when the company was on the brink of bankruptcy. Through visionary products such as the iMac, iPod, iPhone, and iPad, Jobs completely transformed four global industries: personal computing, music, animated movies, and mobile communications. Even after being diagnosed with a rare pancreatic neuroendocrine tumor in 2003, Jobs fought the illness tenaciously until his passing in 2011, leaving behind a timeless legacy of innovation.",
      questions: [
        {
          q: "Why did Steve Jobs decide to drop out of Reed College?",
          options: [
            "A. He wanted to start a computer company immediately.",
            "B. He failed all his core science exams.",
            "C. The expensive tuition fees put a heavy financial burden on his parents.",
            "D. He received a lucrative job offer from Pixar Studios."
          ],
          ans: 2,
          explain: "Dẫn chứng từ đoạn 1: 'Jobs attended Reed College but dropped out after just six months because the tuition fees burdened his working-class parents.' -> Đáp án C."
        },
        {
          q: "What role did the calligraphy course play in Jobs's subsequent career?",
          options: [
            "A. It helped him become a professional book designer.",
            "B. It directly influenced the elegant typefaces and fonts of the Macintosh computer.",
            "C. It taught him the programming language for Apple II.",
            "D. It motivated him to launch an animation studio."
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1: 'including a calligraphy course that later inspired the elegant typography of the Macintosh computer.' -> Đáp án B."
        },
        {
          q: "Which word in paragraph 3 is CLOSEST in meaning to 'brink'?",
          options: ["A. center", "B. edge / verge", "C. bottom", "D. peak"],
          ans: 1,
          explain: "Cụm từ 'on the brink of bankruptcy' = trên bờ vực phá sản. 'Brink' đồng nghĩa với 'edge' hoặc 'verge' -> Đáp án B."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Narrating the Life of General Vo Nguyen Giap",
      task: "Work in pairs. Use the provided fact sheet to deliver a 2-minute spoken presentation about General Vo Nguyen Giap's life and military achievements.",
      modelSpeech: "Good morning everyone. Today, I feel deeply honored to talk about General Vo Nguyen Giap, one of the greatest military commanders of the 20th century.\n\nHe was born in Quang Binh province in 1911. Before becoming a renowned commander, he worked as a dedicated history teacher and journalist, which gave him profound insight into national patriotism. In 1944, following President Ho Chi Minh's directive, he founded the Vietnam Armed Propaganda Unit for National Liberation, the predecessor of the Vietnam People's Army.\n\nHis most celebrated military milestone was the historic Dien Bien Phu victory in 1954, where his brilliant tactic of 'steady attack, steady advance' successfully brought down the heavily fortified colonial base. He passed away in 2013 at the age of 102, leaving an immortal legacy of strategic genius, modesty, and profound love for the Vietnamese people.",
      usefulPhrases: [
        "• *He was born into a patriotic family in...*",
        "• *Before embarking on his military career, he worked as...*",
        "• *His most iconic historical achievement was...*",
        "• *He is widely remembered not only as a genius commander but also as...*"
      ]
    },
    listening: {
      title: "Listening Comprehension: Walt Disney's Journey to Success",
      task: "Listen to an educational biography excerpt about Walt Disney and decide whether the following statements are True (T) or False (F).",
      tapescript: "Walt Disney was born in Chicago in 1901. From an early age, he showed a passion for drawing cartoon characters. However, his path to worldwide fame was far from smooth. In 1919, an editor fired young Disney from a newspaper company, claiming that he 'lacked imagination and had no good ideas.' Rather than surrendering to despair, Walt established his own small animation firm. His breakthrough arrived in 1928 with the creation of Mickey Mouse in 'Steamboat Willie', the first animation featuring synchronized sound. Disney went on to win 22 Academy Awards and built Disneyland, proving that perseverance can transform childhood dreams into reality.",
      questions: [
        { q: "Walt Disney was praised as highly imaginative by his first newspaper employer.", ans: "False (F)", explain: "Ngược lại, tổng biên tập đã sa thải ông với lý do 'lacked imagination and had no good ideas' (thiếu trí tưởng tượng và không có ý tưởng hay)." },
        { q: "Mickey Mouse debuted in a cartoon that featured synchronized sound.", ans: "True (T)", explain: "Dẫn chứng tapescript: 'creation of Mickey Mouse in Steamboat Willie, the first animation featuring synchronized sound'." },
        { q: "Disney won over twenty Academy Awards during his illustrious career.", ans: "True (T)", explain: "Dẫn chứng tapescript: 'Disney went on to win 22 Academy Awards'." }
      ]
    },
    writing: {
      title: "Writing: A Biography of Steve Jobs (180–220 words)",
      prompt: "Write a biographical profile about Steve Jobs, highlighting his early life, career challenges, monumental achievements, and lasting inspiration.",
      outline: [
        "**Introduction:** Introduce Steve Jobs, his birth year (1955), adoption, and status as a legendary tech visionary.",
        "**Early life & Struggles:** College dropout, starting Apple in a garage, being ousted from Apple in 1985.",
        "**Major Achievements:** Pixar success, triumphant return in 1997, launching iMac, iPod, iPhone, and iPad.",
        "**Conclusion:** His battle with cancer, legacy, and message to youth ('Stay hungry, stay foolish')."
      ],
      modelEssay: "Steve Jobs (1955–2011) was an American visionary entrepreneur and inventor whose ingenious mind revolutionized the global technology landscape. Born in San Francisco and raised by adoptive parents, Jobs displayed an intense curiosity for mechanics and design from an early age.\n\nIn 1976, Jobs co-founded Apple Computer alongside Steve Wozniak in his family garage. Their early invention, the Apple II, popularized personal computing worldwide. Despite being abruptly dismissed from Apple in 1985 after executive friction, Jobs persevered with resilience. He founded NeXT Computer and financed Pixar Animation Studios, which created revolutionary blockbusters such as Toy Story.\n\nReturning to Apple in 1997 as CEO, Jobs orchestrated one of the greatest corporate turnarounds in business history. Under his charismatic leadership, Apple unveiled groundbreaking devices—most notably the iMac, iPod, iPhone, and iPad—that seamlessly united artistic aesthetics with intuitive technology. Diagnosed with pancreatic cancer in 2003, Jobs continued to work passionately until his demise in 2011. Today, he remains an enduring icon of creativity, reminding generations of dreamers to 'Stay hungry, stay foolish.'",
      vocabHighlights: [
        "• *visionary entrepreneur:* doanh nhân có tầm nhìn chiến lược",
        "• *orchestrated a corporate turnaround:* đạo diễn cuộc lội ngược dòng ngoạn mục",
        "• *seamlessly united aesthetics with technology:* kết hợp hoàn hảo giữa tính thẩm mỹ và công nghệ"
      ]
    }
  },

  unit2: {
    reading: {
      title: "Reading Comprehension: Melbourne — The Cultural Capital",
      passage: "Melbourne, the coastal capital of the southeastern Australian state of Victoria, is globally recognized as one of the world's most vibrant multicultural metropolises. Following the Gold Rush of the 1850s, people from all corners of the planet migrated to Victoria. Today, nearly half of Melbourne's residents were either born overseas or have at least one parent born abroad, creating an authentic cultural mosaic.\n\nThis cultural diversity is most vividly observed through the city's lively food scene and festive calendar. In precincts like Carlton, one encounters authentic Italian espresso bars, while the historic Chinatown on Little Bourke Street—the oldest continuous ethnic Chinese settlement in the Western world—offers delicious dim sum. Furthermore, annual celebrations such as the Antipodean festival Antipodes (celebrating Greek culture) and the spectacular Lunar New Year parade reflect mutual respect and cultural appreciation. By encouraging migrant communities to preserve their heritage while actively participating in broader civic life, Melbourne demonstrates how diversity fosters economic dynamism and social harmony.",
      questions: [
        {
          q: "What historical event first triggered mass migration to Melbourne in the 1850s?",
          options: ["A. The Industrial Revolution", "B. The Gold Rush", "C. The World Wars", "D. The IT boom"],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1: 'Following the Gold Rush of the 1850s, people from all corners of the planet migrated to Victoria.' -> Đáp án B."
        },
        {
          q: "What makes Chinatown in Melbourne historically unique in the Western world?",
          options: [
            "A. It is the largest shopping mall in Australia.",
            "B. It is the oldest continuous ethnic Chinese settlement in the Western world.",
            "C. It serves exclusively modern fusion food.",
            "D. It was constructed entirely during the 21st century."
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 2: 'the historic Chinatown on Little Bourke Street—the oldest continuous ethnic Chinese settlement in the Western world' -> Đáp án B."
        },
        {
          q: "According to the passage, how does Melbourne benefit from its cultural diversity?",
          options: [
            "A. It avoids having to maintain traditional buildings.",
            "B. It limits the number of overseas visitors.",
            "C. Diversity fosters economic dynamism and social harmony.",
            "D. It eliminates the need for foreign languages."
          ],
          ans: 2,
          explain: "Dẫn chứng từ câu kết: 'Melbourne demonstrates how diversity fosters economic dynamism and social harmony.' -> Đáp án C."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Presenting a Traditional Cultural Festival (Tết Nguyên Đán)",
      task: "Work in pairs. Talk about how Lunar New Year (Tết) is celebrated in Vietnam and how it promotes family reunions and cultural preservation.",
      modelSpeech: "Hello everyone. Today, I would like to introduce Tết, or Lunar New Year, the most sacred and widely anticipated festival in Vietnamese culture.\n\nTết usually occurs between late January and mid-February, marking the arrival of spring and a fresh beginning according to the lunar calendar. Weeks before Tết, families busy themselves cleaning their homes and decorating the living room with bright yellow apricot blossoms or pink peach blossoms. The most heartwarming aspect of Tết is the family reunion on New Year's Eve, where generations gather around the dining table to savor traditional Chung cakes, pickled onions, and candied fruits.\n\nDuring the first days of the year, people wear their finest traditional Áo dài, visit pagodas to pray for peace, and give lucky money enclosed in vibrant red envelopes to children and the elderly. To me, Tết is not merely a holiday; it is an invaluable cultural bond that anchors our cultural identity.",
      usefulPhrases: [
        "• *Tết marks the arrival of spring and signifies a fresh beginning...*",
        "• *The quintessential food that defines Tết is Bánh chưng...*",
        "• *It serves as a cherished occasion for family reunions...*"
      ]
    },
    listening: {
      title: "Listening Comprehension: Overcoming Culture Shock",
      task: "Listen to an interview with an international exchange student in Canada and answer the questions.",
      tapescript: "When I first moved from Hanoi to Vancouver for high school, I underwent noticeable culture shock. In the beginning, everything felt overwhelming—from the freezing winter snow to the casual communication styles between students and teachers. In Vietnam, we maintain strict formality with educators, whereas in Canada, students openly debate professors and address them by their first names. Fortunately, my host family was exceptionally hospitable. They invited me to celebrate Thanksgiving and guided me through local bus transit. In return, I cooked Vietnamese spring rolls for them. Gradually, what initially felt alien transformed into an enriching intercultural exchange.",
      questions: [
        { q: "What communication difference surprised the speaker the most?", ans: "The casual communication style between students and teachers (open debates and addressing by first names).", explain: "Người nói bất ngờ vì phong cách giao tiếp thoải mái giữa học sinh và giáo viên ở Canada." },
        { q: "How did the speaker share her native culture with her host family?", ans: "By cooking authentic Vietnamese spring rolls for them.", explain: "Dẫn chứng: 'In return, I cooked Vietnamese spring rolls for them'." }
      ]
    },
    writing: {
      title: "Writing: Describing a Cultural Festival (150–180 words)",
      prompt: "Write an article describing the Mid-Autumn Festival (Tết Trung Thu) in Vietnam for an international youth magazine.",
      outline: [
        "**Introduction:** Name of the festival, timing (15th day of the 8th lunar month), and main purpose (celebrating children and full harvest moon).",
        "**Key preparations and activities:** Lantern making, star-shaped lanterns, lion dances, and festive drum beats.",
        "**Traditional foods:** Mooncakes (bánh nướng, bánh dẻo), pomelos, and green rice flakes.",
        "**Conclusion:** Meaning of family togetherness and cultural significance."
      ],
      modelEssay: "The Mid-Autumn Festival, known locally as Tết Trung Thu, is one of the most vibrant and joyous traditional celebrations in Vietnam. Held annually on the 15th day of the eighth lunar month under the luminous full moon, this beloved occasion is predominantly dedicated to children and family reunions.\n\nPreparations commence weeks in advance as market stalls fill with colorful star-shaped lanterns, masks, and elaborate dragon decorations. On the festive night, children parade merrily through neighborhood alleys carrying illuminated lanterns and singing traditional folk songs to the rhythmic beat of lion dance drums. Another indispensable highlight is sharing exquisite mooncakes—both baked and sticky varieties filled with lotus seeds, salted egg yolks, and green bean paste—paired with fragrant lotus tea.\n\nBeyond the culinary delights and joyful festivities, the Mid-Autumn Festival serves as a poignant reminder of unity, maternal love, and filial devotion. It is an extraordinary cultural celebration that continues to illuminate the hearts of Vietnamese across generations.",
      vocabHighlights: [
        "• *luminous full moon:* vầng trăng rằm sáng vằng vặc",
        "• *parade merrily through alleys:* rước đèn rộn rã qua các ngõ phố",
        "• *filial devotion:* lòng hiếu thảo của con cháu"
      ]
    }
  },

  unit3: {
    reading: {
      title: "Reading Comprehension: Combatting the Plastic Menace",
      passage: "Plastic pollution has emerged as one of the most pressing ecological crises of the 21st century. Because conventional plastics are petroleum-based polymers designed for immense durability, they do not biodegrade naturally. Instead, environmental exposure to sunlight and ocean waves fragments them into microscopic particles known as microplastics. A discarded plastic water bottle, for example, takes an estimated 450 years to decompose in terrestrial landfills, during which it leaches harmful chemical plasticizers into surrounding groundwater.\n\nIn marine ecosystems, the consequences are catastrophic. Marine turtles frequently mistake translucent plastic bags for jellyfish, their natural prey, which obstructs their digestive systems and leads to fatal starvation. Furthermore, filter-feeding fish ingest microplastics, introducing toxic compounds into the marine food chain and ultimately reaching human dinner plates. In response, global environmentalists advocate adopting a circular economy model centered around the 3R philosophy: reducing superfluous packaging, reusing containers, and investing in advanced mechanical and chemical recycling infrastructure.",
      questions: [
        {
          q: "What causes plastic to break down into microplastics in the ocean?",
          options: [
            "A. Extreme cold and darkness",
            "B. Sunlight and mechanical wave action",
            "C. Chemical reactions with coral reefs",
            "D. Consumption by marine plants"
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1: 'environmental exposure to sunlight and ocean waves fragments them into microscopic particles known as microplastics.' -> Đáp án B."
        },
        {
          q: "Why do sea turtles frequently ingest plastic bags?",
          options: [
            "A. They use plastic bags to build underwater nests.",
            "B. They mistake translucent bags for jellyfish.",
            "C. The bags smell like sea grass.",
            "D. They drink seawater through plastic containers."
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 2: 'Marine turtles frequently mistake translucent plastic bags for jellyfish, their natural prey' -> Đáp án B."
        },
        {
          q: "What is the core idea of the circular economy model advocated in the passage?",
          options: [
            "A. Burning all municipal waste in incinerators",
            "B. Dumping treated plastics into deep ocean trenches",
            "C. The 3R philosophy: Reduce, Reuse, and Recycle",
            "D. Banning all manufacturing industries"
          ],
          ans: 2,
          explain: "Dẫn chứng từ câu cuối: 'centered around the 3R philosophy: reducing superfluous packaging, reusing containers, and investing in advanced recycling' -> Đáp án C."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Proposing a 'Green School' Campaign",
      task: "Work in groups of three. Formulate and present a proposal for an eco-friendly action plan at your high school to minimize single-use plastics and save electricity.",
      modelSpeech: "Good afternoon teachers and fellow classmates. Today, our team would like to propose our 'Green School, Clean Future' initiative.\n\nFirst, we propose replacing all single-use plastic cups and straws in the school cafeteria with biodegradable bamboo or paper alternatives. Concurrently, our school should install filtered water refill stations on every floor, which will encourage students to bring reusable stainless steel bottles instead of buying single-use bottled water.\n\nSecond, regarding energy conservation, we recommend establishing a student-led 'Green Patrol'. Their duty is to ensure all classroom air conditioners and lights are switched off during recess and after the final period, which can cut our school's electricity consumption by up to 20%. Let us work together to make our school an inspiring beacon of sustainable living!",
      usefulPhrases: [
        "• *We strongly recommend installing water refill stations, which will reduce...*",
        "• *An effective measure to cut energy waste is...*",
        "• *By adopting these habits, we can collectively minimize our carbon footprint.*"
      ]
    },
    listening: {
      title: "Listening Comprehension: A Zero-Waste Lifestyle Journey",
      task: "Listen to an interview with an environmental advocate living a zero-waste lifestyle and fill in the missing information.",
      tapescript: "When I began my zero-waste journey three years ago, many friends thought it was an unattainable ideal. However, zero-waste is not about achieving flawless perfection; it is about making conscious everyday decisions. I started by conducting a household waste audit, which revealed that 70% of my trash consisted of single-use food packaging. Consequently, I shifted to buying groceries in bulk at farmers' markets using canvas tote bags and glass mason jars. In my kitchen, organic vegetable scraps are placed in a small balcony composter, which turns into rich organic fertilizer for my potted herbs. Over one full year, all my non-recyclable trash fit comfortably inside a single 1-liter glass jar.",
      questions: [
        { q: "What percentage of the speaker's original household waste was single-use food packaging?", ans: "70%", explain: "Dẫn chứng tapescript: '70% of my trash consisted of single-use food packaging'." },
        { q: "What does the speaker do with organic vegetable scraps?", ans: "Places them in a balcony composter to produce organic fertilizer.", explain: "Dẫn chứng: 'placed in a small balcony composter, which turns into rich organic fertilizer'." },
        { q: "How much non-recyclable waste did the speaker generate in an entire year?", ans: "A single 1-liter glass jar.", explain: "Dẫn chứng: 'all my non-recyclable trash fit comfortably inside a single 1-liter glass jar'." }
      ]
    },
    writing: {
      title: "Writing: A Problem-Solution Essay on Plastic Waste (180–220 words)",
      prompt: "Write a problem-solution essay addressing the proliferation of plastic waste in cities and proposing viable solutions.",
      outline: [
        "**Introduction:** Introduce the ubiquity of plastic waste in modern urban centers and state the thesis statement.",
        "**Body Paragraph 1 (Root Causes):** Convenience-driven consumerism, lack of accessible alternatives, and inadequate recycling infrastructure.",
        "**Body Paragraph 2 (Viable Solutions):** Government bans/taxes on single-use items, public awareness campaigns, and community refill initiatives.",
        "**Conclusion:** Summarize key arguments and issue an urgent call for collaborative action."
      ],
      modelEssay: "In contemporary society, plastic pollution has escalated into a catastrophic ecological dilemma threatening urban centers and marine habitats worldwide. The unchecked proliferation of disposable packaging demands immediate, decisive interventions from governments, corporations, and conscientious consumers.\n\nThe crisis stems primarily from two interdependent factors. First, modern convenience-oriented consumerism has fostered widespread reliance on single-use plastics, including shopping bags, straws, and food containers. Because these items are distributed virtually free of charge, consumers treat them as disposable commodities. Second, waste management systems in many municipal areas remain sorely inadequate, with obsolete recycling facilities capable of processing only a meager percentage of discarded plastic materials, leading to massive landfill congestion.\n\nTo tackle this menace effectively, a multi-tiered approach is imperative. Primarily, municipal authorities should implement stringent regulations, such as levying heavy taxes on plastic bags and mandating biodegradable substitutes for commercial eateries. Concurrently, educational institutions must champion sustainability campaigns to cultivate eco-friendly habits among the youth, which will normalize bringing personal canvas totes and water flasks. In conclusion, while plastic pollution poses monumental challenges, concerted systemic reforms and personal lifestyle adjustments can undoubtedly restore ecological harmony to our planet.",
      vocabHighlights: [
        "• *convenience-oriented consumerism:* chủ nghĩa tiêu dùng đề cao sự tiện lợi",
        "• *levying heavy taxes on:* áp đặt thuế nặng lên...",
        "• *concerted systemic reforms:* các cải cách mang tính hệ thống và đồng bộ"
      ]
    }
  },

  unit4: {
    reading: {
      title: "Reading Comprehension: The Megacity Phenomenon",
      passage: "Urbanisation has progressed at an unprecedented rate across the globe over the past century. According to the United Nations, more than 55% of the world's population currently resides in urban areas, a figure projected to climb to 68% by 2050. This profound rural-to-urban migration is fueled by powerful 'push' and 'pull' factors. Rural dwellers are frequently pushed away by agricultural mechanization, which reduces farm labor requirements, and extreme weather events that decimate crop yields. Conversely, metropolitan hubs exert an irresistible pull by offering diversified employment options, superior healthcare facilities, and prestigious educational universities.\n\nHowever, explosive urbanization also breeds daunting infrastructural dilemmas. The more densely populated cities become, the higher the prices of residential real estate soar, pushing vulnerable low-income migrants into precarious, unregulated informal settlements or slums. Additionally, vehicular traffic congestion leads to hazardous particulate air pollution, severely exacerbating respiratory illnesses. To prevent urban collapse, progressive architects advocate developing 'smart cities'—compact urban spaces integrated with automated electric transit networks, vertical rooftop gardens, and digital energy management systems.",
      questions: [
        {
          q: "What percentage of the global population is projected to reside in urban areas by 2050?",
          options: ["A. 55%", "B. 68%", "C. 75%", "D. 85%"],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1: 'a figure projected to climb to 68% by 2050.' -> Đáp án B."
        },
        {
          q: "Which of the following is identified as a 'push' factor driving people away from rural regions?",
          options: [
            "A. Prestigious universities in cities",
            "B. Agricultural mechanization reducing farm jobs and extreme weather",
            "C. High real estate prices in downtown areas",
            "D. Modern electric subway networks"
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1: 'Rural dwellers are frequently pushed away by agricultural mechanization... and extreme weather events that decimate crop yields.' -> Đáp án B."
        },
        {
          q: "What solution do progressive architects propose to counter rapid urban congestion?",
          options: [
            "A. Forcing residents back to rural farming",
            "B. Constructing massive highways through green belts",
            "C. Developing smart cities with electric transit and vertical gardens",
            "D. Shutting down all commercial office towers"
          ],
          ans: 2,
          explain: "Dẫn chứng từ câu cuối: 'advocate developing smart cities—compact urban spaces integrated with automated electric transit networks, vertical rooftop gardens' -> Đáp án C."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Debating Urban vs. Rural Life",
      task: "Work in pairs. Role-play a debate where Student A argues in favor of living in a modern city and Student B supports living in a peaceful rural countryside.",
      modelSpeech: "Student A: In my opinion, living in a bustling city is vastly superior for young individuals. The more developed the city is, the greater career opportunities you have. We have immediate access to world-class hospitals, high-speed metro lines, and vibrant entertainment hubs.\n\nStudent B: While I acknowledge your points regarding convenience, I firmly believe the countryside provides an incomparably healthier quality of life. Urbanites suffer from relentless noise, toxic exhaust fumes, and exorbitant living costs. In contrast, rural life offers clean, fresh air, organic homegrown produce, and close-knit community bonds where neighbors genuinely care for one another.\n\nStudent A: That is certainly a valid consideration; however, smart city technologies and urban green parks are rapidly mitigating pollution, allowing us to enjoy the best of both worlds!",
      usefulPhrases: [
        "• *The more urbanized an area becomes, the wider the career prospects...*",
        "• *While I acknowledge the convenience of city life, rural living offers...*",
        "• *In contrast to urban noise and smog, the countryside boasts...*"
      ]
    },
    listening: {
      title: "Listening Comprehension: Smart Cities of Tomorrow",
      task: "Listen to an urban planning podcast about Singapore's smart city model and answer the questions.",
      tapescript: "Singapore is internationally acclaimed as a trailblazer in sustainable urban planning. With a land area of slightly over 700 square kilometers and more than 5.5 million inhabitants, efficient spatial planning is a matter of national survival. Instead of sprawling horizontally, Singapore has embraced vertical green architecture. Under the 'City in a Garden' vision, new skyscrapers must incorporate skyrise greenery equal to the footprint of the land they occupy. Furthermore, automated sensors monitor street lighting, dimming luminaires when roads are empty to conserve energy. Singapore proves that high urban density does not have to come at the expense of environmental quality.",
      questions: [
        { q: "What unique architectural requirement must new skyscrapers in Singapore fulfill?", ans: "They must incorporate skyrise greenery equal to the footprint of the land they occupy.", explain: "Dẫn chứng: 'new skyscrapers must incorporate skyrise greenery equal to the footprint of the land they occupy'." },
        { q: "How do automated street sensors contribute to energy conservation in Singapore?", ans: "By dimming luminaires when roads are empty.", explain: "Dẫn chứng: 'automated sensors monitor street lighting, dimming luminaires when roads are empty to conserve energy'." }
      ]
    },
    writing: {
      title: "Writing: Describing a Line Graph on Urban Migration (150–180 words)",
      prompt: "The line graph illustrates the percentage of the population living in urban areas in three countries (Vietnam, South Korea, and Kenya) between 1980 and 2020. Summarize the information by selecting and reporting the main features.",
      outline: [
        "**Introduction:** Paraphrase the prompt (graph displays urban population shares in Vietnam, South Korea, and Kenya over a 40-year period).",
        "**Overview:** South Korea consistently held the highest urban proportion with massive growth; Vietnam and Kenya experienced steady, moderate upward trends.",
        "**Body 1 (South Korea):** Started high at around 57% in 1980 and surged dramatically to over 81% by 2020.",
        "**Body 2 (Vietnam & Kenya):** Vietnam grew from 19% to 37%, surpassing Kenya (16% to 28%) over the four decades."
      ],
      modelEssay: "The line graph delineates the proportion of residents living in urban areas across three distinct nations—South Korea, Vietnam, and Kenya—over a 40-year span from 1980 to 2020.\n\nOverall, it is readily apparent that all three countries witnessed consistent increases in their urban populations throughout the period. South Korea maintained a commanding lead, sustaining urbanization levels far higher than those recorded in Vietnam and Kenya.\n\nIn 1980, South Korea's urban population share stood at approximately 57%. Over the subsequent four decades, this metric experienced a pronounced upward surge, reaching an impressive peak of roughly 82% in 2020. This trajectory cemented South Korea's status as a predominantly urbanized economy.\n\nIn stark contrast, Vietnam and Kenya started at much lower baseline figures of 19% and 16% respectively in 1980. Vietnam exhibited a steady, accelerated climb after the 1990s, culminating at approximately 37% by 2020. Similarly, Kenya experienced a gradual upward trajectory, concluding the period at 28%, remaining the least urbanized of the three examined nations.",
      vocabHighlights: [
        "• *delineates the proportion of:* mô tả tỷ lệ phần trăm của...",
        "• *experienced a pronounced upward surge:* trải qua một bước tăng vọt rõ rệt",
        "• *stark contrast:* sự đối lập hoàn toàn rõ nét"
      ]
    }
  },

  unit5: {
    reading: {
      title: "Reading Comprehension: Essential Soft Skills for the Modern Workplace",
      passage: "In previous decades, landing a secure job depended predominantly on technical proficiency and academic qualifications. Today, however, the rapid integration of artificial intelligence and automation into corporate workflows has fundamentally redefined recruiters' criteria. While technical acumen remains essential for initial eligibility, employers increasingly view interpersonal and emotional intelligence—commonly referred to as 'soft skills'—as the true differentiators of long-term career success.\n\nAmong these competencies, adaptability ranks at the pinnacle. Modern corporate environments are subjected to volatile market fluctuations and frequent technological overhauls; consequently, workers who display intellectual agility and embrace lifelong upskilling thrive far better than rigid specialists. Furthermore, persuasive communication and empathetic teamwork are indispensable. Machines can compute intricate algorithms at blinding speeds, but they cannot arbitrate workplace conflicts, inspire cross-cultural negotiations, or build genuine rapport with clients. Finally, robust critical thinking enables employees to filter mountains of data, discern factual integrity, and formulate ethical decisions.",
      questions: [
        {
          q: "Why are soft skills becoming increasingly critical compared to traditional technical skills?",
          options: [
            "A. Because universities have stopped teaching computer science.",
            "B. Because automation and AI perform routine technical calculations, making human emotional and social skills decisive.",
            "C. Because employers no longer require degrees of any kind.",
            "D. Because soft skills are easier to measure with standardized tests."
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1 & 2: 'rapid integration of artificial intelligence... Machines can compute intricate algorithms, but cannot arbitrate conflicts or build rapport' -> Đáp án B."
        },
        {
          q: "What characteristic makes adaptability the most prized skill in modern business?",
          options: [
            "A. The ability to work without receiving a monthly salary",
            "B. Intellectual agility and willingness to upskill amid rapid technological shifts",
            "C. Strictly following old organizational manuals without questioning",
            "D. Relocating permanently to overseas branch offices"
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 2: 'workers who display intellectual agility and embrace lifelong upskilling thrive far better than rigid specialists' -> Đáp án B."
        },
        {
          q: "What is an inherent limitation of machines highlighted in paragraph 2?",
          options: [
            "A. They cannot calculate complex numbers.",
            "B. They cannot arbitrate human conflicts, lead cross-cultural talks, or foster client rapport.",
            "C. They require human manual cranking to turn on.",
            "D. They break down every few hours."
          ],
          ans: 1,
          explain: "Dẫn chứng: 'they cannot arbitrate workplace conflicts, inspire cross-cultural negotiations, or build genuine rapport with clients' -> Đáp án B."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Mock Job Interview for an Internship",
      task: "Work in pairs. One student plays the role of an HR interviewer and the other acts as an applicant interviewing for a Digital Marketing Summer Internship.",
      modelSpeech: "Interviewer: Good morning, Minh. Welcome to our firm. Could you start by introducing yourself and highlighting why you applied for this position?\n\nApplicant: Good morning, Ms. Ha. I am currently a senior at Tran Phu High School with a profound passion for creative digital media. Over the past two years, I served as the head of our school media club, where I led a campaign that increased our Facebook page engagement by 150%. I applied for this internship because your company is renowned for innovative campaigns, and I am eager to contribute my graphic design skills while learning corporate brand strategy.\n\nInterviewer: That sounds impressive! How do you handle stressful deadlines when multiple assignments coincide?\n\nApplicant: Whenever tight deadlines loom, I immediately prioritize tasks using the Eisenhower Matrix. I communicate proactively with team members to delegate responsibilities, ensuring our deliverables are completed on schedule without sacrificing quality.",
      usefulPhrases: [
        "• *I have a proven track record of leading creative projects in...*",
        "• *When confronted with tight deadlines, I prioritize tasks using...*",
        "• *I am eager to contribute my skills while learning from your experienced team.*"
      ]
    },
    listening: {
      title: "Listening Comprehension: Mastering Job Interviews",
      task: "Listen to a recruitment specialist giving advice on how young candidates can impress potential employers during an interview.",
      tapescript: "When preparing for a job interview, thorough research is your greatest weapon. Too many young graduates walk in knowing only the company's name. You should meticulously study their mission statement, recent corporate press releases, and major competitors. During the interview, structure your answers using the STAR technique: Situation, Task, Action, and Result. Rather than making vague assertions like 'I am a team player', narrate a specific Situation, explain the Task you faced, describe the Action you took, and quantify the positive Result. Lastly, always prepare two thoughtful questions to ask the interviewer; this demonstrates authentic enthusiasm.",
      questions: [
        { q: "What does the recruitment expert consider a candidate's greatest weapon?", ans: "Thorough research into the company's mission, press releases, and competitors.", explain: "Dẫn chứng: 'thorough research is your greatest weapon'." },
        { q: "What do the letters in the STAR technique stand for?", ans: "Situation, Task, Action, Result.", explain: "Dẫn chứng: 'STAR technique: Situation, Task, Action, and Result'." },
        { q: "Why should candidates prepare questions for the interviewer at the end?", ans: "To demonstrate authentic enthusiasm for the job.", explain: "Dẫn chứng: 'this demonstrates authentic enthusiasm'." }
      ]
    },
    writing: {
      title: "Writing: A Formal Job Application Letter (150–180 words)",
      prompt: "Write a formal letter of application applying for the position of Volunteer English Tutor at a local non-profit community center.",
      outline: [
        "**Sender & Receiver Information + Formal Salutation:** Dear Hiring Manager,",
        "**Opening:** State the position applied for and where the notice was seen.",
        "**Body Paragraph 1 (Qualifications & Experience):** High school academic standing, IELTS score, experience tutoring peers.",
        "**Body Paragraph 2 (Soft skills & Motivation):** Patience, passion for community service, adaptability.",
        "**Closing & Sign-off:** Request for an interview, polite sign-off: Sincerely, [Your Name]."
      ],
      modelEssay: "Dear Hiring Manager,\n\nI am writing to express my enthusiastic interest in the Volunteer English Tutor position advertised on the Green Future Community Center's bulletin board on October 15th. With my solid academic foundation and passion for community education, I am confident in my ability to make a meaningful contribution to your tutoring program.\n\nCurrently a grade 12 student at Le Quy Don High School, I possess an overall IELTS score of 7.5. Over the past academic year, I served as a volunteer peer tutor, mentoring junior students in English grammar and conversational skills. This practical experience sharpened my pedagogical techniques and taught me how to explain intricate linguistic concepts through interactive games and relatable storytelling.\n\nMoreover, I am patient, empathetic, and exceptionally punctual. I am eager to assist underprivileged children in improving their English fluency and academic self-confidence. I have attached my curriculum vitae for your consideration and welcome the opportunity to discuss my application in a personal interview. Thank you for your time.\n\nSincerely,\nNguyen Van An",
      vocabHighlights: [
        "• *express my enthusiastic interest in:* bày tỏ sự quan tâm nhiệt thành tới...",
        "• *sharpened my pedagogical techniques:* trau dồi các kỹ năng sư phạm của bản thân",
        "• *underprivileged children:* trẻ em có hoàn cảnh khó khăn"
      ]
    }
  },

  unit6: {
    reading: {
      title: "Reading Comprehension: Artificial Intelligence in Modern Education",
      passage: "Artificial Intelligence (AI) is transforming classroom pedagogy worldwide at breathtaking speed. Traditional teaching models have historically suffered from the 'one-size-fits-all' limitation, where teachers were compelled to teach at a uniform pace despite wide variations in students' individual cognitive abilities. Today, AI-powered adaptive learning platforms can analyze a student's problem-solving history in real time, automatically recalibrating the difficulty of assignments, identifying conceptual misunderstandings, and providing customized explanations.\n\nMoreover, AI alleviates teachers' crushing administrative workloads by grading multiple-choice and short-answer exams within seconds, freeing educators to focus on empathetic mentoring and creative project guidance. However, the unchecked adoption of generative AI tools also elicits grave concerns. Educational psychologists warn that over-reliance on chatbots for essay writing impairs critical thinking and creative problem-solving skills. Additionally, biometric facial recognition used to monitor student engagement in virtual classrooms poses profound data privacy and surveillance concerns. Striking a harmonious equilibrium between technological innovation and humanistic pedagogy remains the defining educational challenge of our era.",
      questions: [
        {
          q: "What historical drawback of traditional education does adaptive AI help resolve?",
          options: [
            "A. The expensive cost of textbooks",
            "B. The 'one-size-fits-all' pace that ignores individual student differences",
            "C. The lack of sports facilities in schools",
            "D. The absence of electricity in classrooms"
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1: 'Traditional teaching models have historically suffered from the one-size-fits-all limitation... Today, AI-powered adaptive learning platforms automatically recalibrate difficulty' -> Đáp án B."
        },
        {
          q: "How does AI specifically assist teachers with their workloads?",
          options: [
            "A. By teaching physical education classes outdoors",
            "B. By replacing human headmasters entirely",
            "C. By grading assessments within seconds, allowing teachers to focus on mentoring",
            "D. By driving school buses"
          ],
          ans: 2,
          explain: "Dẫn chứng từ đoạn 2: 'AI alleviates teachers' administrative workloads by grading exams within seconds, freeing educators to focus on mentoring' -> Đáp án C."
        },
        {
          q: "What major psychological concern is associated with students over-relying on AI chatbots?",
          options: [
            "A. It damages computer screens.",
            "B. It impairs students' critical thinking and creative problem-solving skills.",
            "C. It prevents them from learning how to type.",
            "D. It makes internet cables overheat."
          ],
          ans: 1,
          explain: "Dẫn chứng: 'over-reliance on chatbots for essay writing impairs critical thinking and creative problem-solving skills' -> Đáp án B."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Will AI Robots Replace Human Workers?",
      task: "Work in pairs. Discuss whether artificial intelligence and automated robotics will displace the majority of human professions within the next twenty years.",
      modelSpeech: "Student A: I am deeply concerned that AI will render millions of people unemployed. Autonomous driving systems are replacing taxi and truck drivers, while automated software handles accounting and basic legal drafting. If machines do everything faster and cheaper, where will human graduates work?\n\nStudent B: While I understand your apprehension, history reveals that every industrial revolution creates far more occupations than it destroys. Routine, hazardous, and repetitive tasks will indeed be automated, but this liberation will spawn entirely new sectors—such as prompt engineering, AI ethics compliance, and specialized healthcare robotics. The key is not to compete against machines, but to learn how to collaborate with them using our unique human strengths: creativity and empathy.\n\nStudent A: I agree that adaptation is crucial. Governments and universities must overhaul curriculums to prepare students for hybrid human-AI workplaces.",
      usefulPhrases: [
        "• *While I understand the fear of job displacement, history shows that...*",
        "• *Routine and hazardous jobs should be automated, which allows humans to...*",
        "• *The future belongs to those who collaborate synergistically with AI.*"
      ]
    },
    listening: {
      title: "Listening Comprehension: Smart Homes and AI Assistants",
      task: "Listen to a tech journalist discussing how machine learning powers modern smart home appliances and answer the questions.",
      tapescript: "Modern smart homes have evolved far beyond simple voice-activated speakers. Today, integrated domestic AI systems continuously learn household occupants' behavioral rhythms. For instance, your intelligent thermostat does not merely follow a static clock; it analyzes outdoor weather fluctuations, calculates home thermal insulation, and adjusts ambient room temperatures before you arrive from work, trimming energy bills by up to 25%. In the kitchen, smart refrigerators photograph internal shelves and generate recipe suggestions based on expiring ingredients to minimize food waste. In the near future, specialized humanoid care-robots will help elderly citizens with medication reminders and household chores, enabling seniors to maintain independent lives in their own residences.",
      questions: [
        { q: "How much can an intelligent AI thermostat reduce household energy costs by?", ans: "By up to 25%.", explain: "Dẫn chứng: 'trimming energy bills by up to 25%'." },
        { q: "How do smart refrigerators reduce food waste?", ans: "By scanning shelves and generating recipes based on expiring ingredients.", explain: "Dẫn chứng: 'generate recipe suggestions based on expiring ingredients to minimize food waste'." },
        { q: "What role will humanoid robots play for senior citizens?", ans: "Assisting with medication reminders and household chores for independent living.", explain: "Dẫn chứng: 'help elderly citizens with medication reminders and household chores'." }
      ]
    },
    writing: {
      title: "Writing: Opinion Essay on Deploying Robots in Hazardous Jobs (180–220 words)",
      prompt: "Write an opinion essay stating your viewpoint on whether humanoid robots should completely replace human workers in dangerous working environments.",
      outline: [
        "**Introduction:** Introduce the emergence of advanced robotics in industrial operations. State clear opinion: Human lives must be protected by deploying robots in lethal environments.",
        "**Body Paragraph 1 (Safety & Precision):** Bomb disposal, deep-sea exploration, firefighting, and nuclear radiation management prevent tragic human casualties.",
        "**Body Paragraph 2 (Economic & Operational Efficiency):** Robots do not suffer fatigue, work continuously in extreme temperatures, and lower long-term liability costs.",
        "**Counter-argument & Rebuttal:** Upfront capital costs are high, but saving human lives is priceless; workers can be retrained as remote operators.",
        "**Conclusion:** Reiterate that replacing humans in perilous conditions is a moral and technological triumph."
      ],
      modelEssay: "In recent years, the rapid advancement of robotics and artificial intelligence has sparked passionate debates regarding the automation of hazardous occupations. In my opinion, deploying autonomous and remotely controlled robots to replace human personnel in perilous work environments is not merely advantageous, but a moral imperative.\n\nFirst and foremost, substituting machines for human labor in life-threatening scenarios preserves human lives and prevents catastrophic injuries. Occupations such as deep underground mining, nuclear decontamination, bomb defusal, and chemical firefighting expose human beings to toxic emissions and lethal collapses. Unlike fragile biological organisms, specialized robots can withstand extreme temperatures, poisonous atmospheres, and severe radiation without compromising operational integrity. For example, robots deployed during the Fukushima nuclear disaster performed reconnaissance that would have proved fatal to human responders.\n\nFurthermore, automated systems deliver unparalleled stamina and precision in demanding industrial contexts. Robots execute delicate high-risk tasks without experiencing physical exhaustion or psychological panic, which are frequent catalysts for catastrophic human error. Although critics argue that manufacturing specialized robotic units requires colossal capital investments, the long-term economic savings—coupled with the invaluable preservation of human life—far outweigh initial expenses.\n\nIn conclusion, employing robotic workers in hazardous sectors represents a humane and progressive application of modern technology. Governments and corporations must accelerate this transition, liberating human workers from deadly perils and retraining them for safer supervisory positions.",
      vocabHighlights: [
        "• *a moral imperative:* một mệnh lệnh mang tính đạo đức bắt buộc",
        "• *substituting machines for human labor:* thay thế sức người bằng máy móc",
        "• *withstand extreme temperatures and radiation:* chịu được nhiệt độ và phóng xạ cực hạn"
      ]
    }
  },

  unit7: {
    reading: {
      title: "Reading Comprehension: Navigating Mass Media in the Digital Era",
      passage: "The 21st century has witnessed a seismic shift in how society produces, disseminates, and consumes information. For decades, traditional print newspapers and evening broadcast networks functioned as primary gatekeepers, employing veteran editors and strict fact-checkers to verify reporting integrity before publication. In the contemporary digital ecosystem, however, decentralized social media platforms like TikTok, X, and Facebook have democratized news delivery, enabling citizens to report breaking occurrences in real time with a smartphone.\n\nYet, this democratization has arrived with profound perils. Because online algorithms prioritize emotional engagement and sensationalism over objective nuance, provocative headlines and unverified rumors spread six times faster than factual clarifications. This gives rise to 'echo chambers', where users are repeatedly exposed only to viewpoints reinforcing their pre-existing biases. The proliferation of fabricated deepfakes and algorithmic disinformation campaigns poses immense threats to democratic cohesion and public health. Consequently, media literacy—the cognitive ability to evaluate sources critically, verify evidence cross-referentially, and detect sensationalist manipulation—has become an indispensable life skill for every digital citizen.",
      questions: [
        {
          q: "How did traditional media historically safeguard reporting accuracy compared to modern social platforms?",
          options: [
            "A. By posting unverified rumors online",
            "B. By employing professional editors and fact-checkers as gatekeepers before publication",
            "C. By relying exclusively on citizen smartphone videos",
            "D. By using algorithmic recommendations"
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1: 'employing veteran editors and strict fact-checkers to verify reporting integrity before publication' -> Đáp án B."
        },
        {
          q: "According to paragraph 2, why does sensationalist fake news spread faster than factual news online?",
          options: [
            "A. Because algorithms prioritize high emotional engagement and sensationalism",
            "B. Because social networks ban factual newspapers",
            "C. Because computers cannot read factual news",
            "D. Because fake news articles are always much shorter"
          ],
          ans: 0,
          explain: "Dẫn chứng từ đoạn 2: 'Because online algorithms prioritize emotional engagement and sensationalism over objective nuance' -> Đáp án A."
        },
        {
          q: "What defines an 'echo chamber' in online communication?",
          options: [
            "A. An audio recording studio with thick acoustic foam",
            "B. An online environment where users only encounter opinions that reinforce their own existing biases",
            "C. A viral dance video shared across multiple platforms",
            "D. A broken computer speaker"
          ],
          ans: 1,
          explain: "Dẫn chứng: 'echo chambers, where users are repeatedly exposed only to viewpoints reinforcing their pre-existing biases' -> Đáp án B."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Social Media vs. Traditional Newspapers",
      task: "Work in pairs. Compare social media and traditional journalism as sources of daily information, weighing speed against credibility.",
      modelSpeech: "Student A: I rely almost exclusively on social media for news updates. When an earthquake strikes or a sporting event occurs, Twitter and TikTok provide live video feeds within minutes, whereas morning newspapers are published a day late.\n\nStudent B: While I concede that social media offers unrivaled speed, its credibility is notoriously dubious. Anyone can fabricate an alarming rumor or use AI to generate misleading images for viral engagement. In contrast, traditional journalism adheres to strict editorial standards and fact-checking protocols. I would rather wait an hour for a verified story than believe an instantaneous lie.\n\nStudent A: That is a fair point. Perhaps the wisest strategy is to treat social media as an alert mechanism, but verify significant claims through reputable news publications before sharing them.",
      usefulPhrases: [
        "• *While social media offers unrivaled speed, its credibility is often questionable...*",
        "• *Traditional news outlets adhere to rigorous fact-checking protocols...*",
        "• *We must verify breaking claims across reputable sources before sharing.*"
      ]
    },
    listening: {
      title: "Listening Comprehension: Detecting Disinformation and Deepfakes",
      task: "Listen to an interview with a digital forensics investigator and note down three methods for spotting manipulated media.",
      tapescript: "As generative AI video tools grow sophisticated, distinguishing real footage from synthetic deepfakes has become a high-stakes challenge. However, telltale artifacts almost always remain. First, examine facial boundaries and lighting consistency. In synthetic videos, shadows around the nose and neck frequently fail to match background light sources. Second, observe natural human biological micro-cues: deepfake figures often display erratic blinking rhythms, unnatural tooth geometry, or subtle blurriness near the hairline. Third, always perform a reverse-image search on key video frames; this frequently unearths the original unedited source material.",
      questions: [
        { q: "What lighting flaw frequently exposes synthetic deepfake videos?", ans: "Inconsistent shadows around the nose and neck that don't match background light.", explain: "Dẫn chứng: 'shadows around the nose and neck frequently fail to match background light sources'." },
        { q: "What biological micro-cues should viewers scrutinize in video subjects?", ans: "Erratic blinking patterns, unnatural tooth alignment, and blurred hairlines.", explain: "Dẫn chứng: 'erratic blinking rhythms, unnatural tooth geometry, or subtle blurriness near the hairline'." },
        { q: "What practical online tool can reveal original source material?", ans: "A reverse-image search on captured video frames.", explain: "Dẫn chứng: 'always perform a reverse-image search on key video frames'." }
      ]
    },
    writing: {
      title: "Writing: Describing a Pie Chart on Media Consumption Habits (150–180 words)",
      prompt: "The pie chart illustrates how high school students in Vietnam allocate their daily screen time across various mass media platforms. Summarize the main features and make comparisons where relevant.",
      outline: [
        "**Introduction:** Paraphrase chart description (distribution of teenagers' daily media consumption across social networks, streaming video, digital news, podcasts, and print media).",
        "**Overview:** Social media and video streaming constitute the overwhelming majority of screen time; print media represents an almost negligible proportion.",
        "**Body 1 (Dominant Categories):** Social media platforms command the largest slice at 42%, closely followed by video streaming platforms (YouTube, Netflix) at 33%.",
        "**Body 2 (Minor Categories):** Online news outlets and educational blogs comprise 15%, while podcasts (7%) and traditional print newspapers/magazines (3%) make up the remainder."
      ],
      modelEssay: "The pie chart breaks down the daily allocation of media consumption time among Vietnamese high school students across five distinct media categories.\n\nOverall, it is immediately striking that interactive digital entertainment—specifically social networking and video streaming platforms—dominates teenagers' media diets, commanding three-quarters of total daily usage. Conversely, traditional print media accounts for a negligible fraction of students' attention.\n\nAccounting for the lion's share of media consumption, social networking platforms (such as TikTok, Facebook, and Instagram) capture 42% of daily usage. Video streaming services rank as the second most popular medium, representing precisely one-third (33%) of students' aggregate media time, indicating a profound preference for dynamic visual content.\n\nIn stark contrast, informative media avenues register substantially lower engagement. Digital news websites and educational blogs comprise a modest 15% of daily consumption. Audio podcasts account for just 7%, while traditional print media (such as physical newspapers and magazines) languishes at a mere 3%, underscoring the sweeping digital migration among the youth.",
      vocabHighlights: [
        "• *breaks down the daily allocation of:* phân tích sự phân bổ thời gian hàng ngày của...",
        "• *accounts for the lion's share:* chiếm tỷ trọng lớn nhất áp đảo",
        "• *underscores the sweeping digital migration:* nhấn mạnh sự chuyển dịch số toàn diện"
      ]
    }
  },

  unit8: {
    reading: {
      title: "Reading Comprehension: Guardians of the Annamite Range",
      passage: "The Annamite Mountain Range (Dãy Trường Sơn), traversing the borderlands of Vietnam and Laos, stands as one of Earth's most biologically exceptional evolutionary corridors. In 1992, biologists made one of the 20th century's most extraordinary zoological breakthroughs here: the discovery of the Saola (Pseudoryx nghetinhensis). Known colloquially as the 'Asian Unicorn' owing to its elusive nature and dual long, parallel horns, this bovine species is found nowhere else on the planet.\n\nTragically, decades of habitat fragmentation and industrialized wire snaring have pushed the Saola to the precipice of extinction, with the species currently classified as Critically Endangered on the IUCN Red List. Millions of cheap, deadly wire snares set by commercial poachers target wild boars and deer for illegal bushmeat, but indiscriminately trap and kill rare primates and ungulates. In response, national park authorities have partnered with conservation NGOs like WWF to deploy indigenous forest ranger patrols. These dedicated guardians trek through rugged jungles for weeks at a time, dismantling tens of thousands of lethal snares annually and guarding core sanctuary zones. Conservationists emphasize that unless international funding and strict wildlife trade enforcement are maintained, the gentle ghost of the Annamites may vanish forever.",
      questions: [
        {
          q: "When was the Saola officially discovered by modern scientists in the Annamite Range?",
          options: ["A. 1954", "B. 1976", "C. 1992", "D. 2011"],
          ans: 2,
          explain: "Dẫn chứng từ đoạn 1: 'In 1992, biologists made one of the 20th century's most extraordinary zoological breakthroughs here: the discovery of the Saola' -> Đáp án C."
        },
        {
          q: "What is the primary destructive threat posed by commercial wire snares in the forest?",
          options: [
            "A. They cause widespread forest fires.",
            "B. They poison drinking rivers.",
            "C. They catch and kill wildlife indiscriminately, including critically endangered species.",
            "D. They block the migration of migratory birds."
          ],
          ans: 2,
          explain: "Dẫn chứng từ đoạn 2: 'target wild boars and deer for bushmeat, but indiscriminately trap and kill rare primates and ungulates' -> Đáp án C."
        },
        {
          q: "What is the chief mission of the ranger patrol teams mentioned in paragraph 2?",
          options: [
            "A. Building luxury tourist hotels inside the national park",
            "B. Dismantling thousands of deadly snares and protecting core sanctuary zones",
            "C. Capturing wild animals to sell to overseas zoos",
            "D. Cutting down trees to build wider highways"
          ],
          ans: 1,
          explain: "Dẫn chứng: 'dismantling tens of thousands of lethal snares annually and guarding core sanctuary zones' -> Đáp án B."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Zoos vs. Natural Sanctuaries Debate",
      task: "Work in pairs. Debate whether wild animals should be kept in modern urban zoos for public education or relocated exclusively to natural safari sanctuaries.",
      modelSpeech: "Student A: Modern accredited zoos serve an indispensable educational and scientific role. Millions of urban schoolchildren would never experience or care about endangered animals like rhinos or tigers without seeing them in person. Furthermore, accredited zoos coordinate international captive breeding programs, which have saved species like the California Condor from absolute extinction.\n\nStudent B: While breeding programs are commendable, confining sentient wild creatures inside concrete cages or restricted enclosures is inherently cruel. Animals in captivity frequently exhibit repetitive stress behaviors like pacing. I strongly advocate phasing out traditional urban zoos in favor of expansive in-situ sanctuaries and protected national parks, where animals roam freely in authentic natural habitats while protected by anti-poaching rangers.\n\nStudent A: Perhaps a progressive middle ground is best: transform traditional cramped zoos into vast open-range safari biomes, while channeling revenues directly into wild habitat conservation.",
      usefulPhrases: [
        "• *Accredited zoos coordinate international captive breeding programs, which help...*",
        "• *Confining wild animals inside small enclosures causes unnatural stress...*",
        "• *We should prioritize in-situ conservation within authentic wild habitats.*"
      ]
    },
    listening: {
      title: "Listening Comprehension: Sea Turtle Rescue in Con Dao National Park",
      task: "Listen to a Con Dao marine ranger recount the midnight rescue of green sea turtle hatchlings and answer the questions.",
      tapescript: "Between May and October each year, Con Dao National Park becomes Vietnam's most vital nesting sanctuary for green sea turtles. Our ranger patrol shifts commence around 10 PM. We patrol miles of desolate sandy beaches in pitch darkness to locate nesting females. Because high coastal tides and beach erosion frequently wash away freshly laid nests, we delicately unearth the clutches—often exceeding 100 eggs per nest—and transfer them into artificial incubation stations shielded from predators. After roughly 55 days, the baby turtles hatch. We then release thousands of energetic hatchlings onto the beach at dawn, watching them scramble instinctively toward the crashing waves. Knowing that our efforts help reverse turtle decline gives us immense pride.",
      questions: [
        { q: "During which months do sea turtles predominantly nest in Con Dao?", ans: "Between May and October each year.", explain: "Dẫn chứng: 'Between May and October each year, Con Dao becomes Vietnam's most vital nesting sanctuary'." },
        { q: "Why do rangers relocate turtle egg clutches to incubation stations?", ans: "Because high coastal tides and erosion can wash nests away, and to protect them from predators.", explain: "Dẫn chứng: 'coastal tides and beach erosion frequently wash away nests... transferred into incubation stations shielded from predators'." },
        { q: "How long is the typical incubation period before baby turtles hatch?", ans: "Approximately 55 days.", explain: "Dẫn chứng: 'After roughly 55 days, the baby turtles hatch'." }
      ]
    },
    writing: {
      title: "Writing: A Conservation Action Report for the Indochinese Tiger (180–220 words)",
      prompt: "Write a formal Conservation Action Report proposing concrete measures to restore and protect the endangered Indochinese Tiger population in Vietnam.",
      outline: [
        "**Header:** Title, Target Species, Conservation Status, Region.",
        "**1. Current Threats:** Poaching for traditional medicine/bone glue, illegal snare trapping, and prey depletion (wild boars and deer).",
        "**2. Proposed Strategic Solutions:** Establishing connected ecological corridors, community ranger patrols, and enacting severe criminal penalties for wildlife trade.",
        "**3. Expected Outcomes:** Halting snare injuries, stabilizing prey populations, and creating viable tiger breeding habitats."
      ],
      modelEssay: "**CONSERVATION ACTION REPORT: SAVING THE INDOCHINESE TIGER**\n\n**Target Species:** Indochinese Tiger (*Panthera tigris corbetti*)\n**Current Conservation Status:** Critically Endangered (IUCN Red List)\n**Geographic Focus:** Central Annamites Landscape, Vietnam\n\n**1. Problem Statement and Threats:**\nOnce abundant across Vietnamese forests, the Indochinese Tiger is teetering on the edge of extinction. The crisis is driven primarily by illegal poaching to supply the black market for tiger bone glue, claws, and skins. Furthermore, widespread snare trapping has decimated prey species such as muntjacs and wild boars, while infrastructure projects have fragmented contiguous tiger hunting territories into isolated forest pockets.\n\n**2. Proposed Strategic Measures:**\n• **Establishing Ecological Corridors:** Connect fragmented protected parks through reforested biological corridors, which will allow tigers to establish viable hunting territories and prevent inbreeding.\n• **Community-Based Smart Patrols:** Recruit and equip indigenous local villagers as professional rangers to conduct systematic snare-removal patrols in core forest biomes.\n• **Strict Criminal Enforcement:** Elevate judicial penalties for wildlife trafficking offenses and launch nationwide anti-consumption campaigns to dismantle urban demand for tiger products.\n\n**3. Expected Conservation Outcomes:**\nImplementing these comprehensive interventions over the next five years will eliminate lethal snares, recover wild ungulate populations by 40%, and create an ecologically secure habitat capable of supporting wild tiger reintroduction.",
      vocabHighlights: [
        "• *teetering on the edge of extinction:* đang chao đảo bên bờ vực tuyệt chủng",
        "• *contiguous hunting territories:* các lãnh thổ săn mồi liền mạch không bị chia cắt",
        "• *elevate judicial penalties:* nâng cao các mức hình phạt tư pháp"
      ]
    }
  },

  unit9: {
    reading: {
      title: "Reading Comprehension: The Evolution of Career Paths in the 21st Century",
      passage: "For much of the 20th century, a conventional professional career followed a predictable, linear path: an individual completed university or vocational school, secured an entry-level position at an established corporation, and climbed the internal organizational hierarchy over three to four decades until retirement. In today's volatile digital economy, however, that traditional corporate ladder is rapidly dissolving, replaced by what career theorists describe as a 'portfolio career'.\n\nRather than committing to a single employer, an increasing number of professionals now curate a portfolio of multiple income streams—combining remote freelance contracts, consulting retainers, and digital entrepreneurship. This shift has been dramatically accelerated by the global 'gig economy' and flexible remote working software. While this trajectory affords unprecedented autonomy and control over one's work-life balance, it also presents distinct challenges. Freelancers must bear full responsibility for personal health insurance, retirement pensions, and irregular cash flow during economic downturns. Consequently, thriving in modern career landscapes requires high self-discipline, financial literacy, and an unwavering commitment to continuous lifelong upskilling.",
      questions: [
        {
          q: "How did a traditional 20th-century career differ fundamentally from modern careers?",
          options: [
            "A. It involved constantly moving between five different companies every year.",
            "B. It followed a predictable, linear path climbing a single company's hierarchy until retirement.",
            "C. It was conducted entirely over the internet.",
            "D. It did not provide retirement pensions."
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1: 'conventional professional career followed a predictable, linear path... climbed the internal organizational hierarchy over three to four decades until retirement' -> Đáp án B."
        },
        {
          q: "What defines a 'portfolio career' as described in paragraph 2?",
          options: [
            "A. Working solely as a professional artist or photographer",
            "B. Curating multiple simultaneous income streams such as freelance contracts and consulting",
            "C. Refusing to use computers in the workplace",
            "D. Applying for jobs using a printed paper binder"
          ],
          ans: 1,
          explain: "Dẫn chứng: 'curate a portfolio of multiple income streams—combining remote freelance contracts, consulting retainers, and digital entrepreneurship' -> Đáp án B."
        },
        {
          q: "What significant vulnerability must modern freelance workers navigate on their own?",
          options: [
            "A. Having too many paid vacations",
            "B. Strict company dress codes",
            "C. Financial uncertainty, irregular cash flow, and lack of employer-provided pensions",
            "D. Overly rigid office hours"
          ],
          ans: 2,
          explain: "Dẫn chứng: 'Freelancers must bear full responsibility for personal health insurance, retirement pensions, and irregular cash flow' -> Đáp án C."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: University Degree vs. Vocational Apprenticeship",
      task: "Work in pairs. Role-play a discussion between two high school seniors evaluating whether to pursue a 4-year university academic degree or enroll in a 2-year vocational tech program.",
      modelSpeech: "Student A: I have decided to apply to the University of Technology for a 4-year degree in Computer Science. While four years of university requires high tuition fees and dedication, the comprehensive theoretical foundation and prestigious bachelor's degree open doors to senior management and global leadership positions.\n\nStudent B: That makes great sense for your analytical goals. For me, however, I am planning to enroll in a 2-year dual vocational apprenticeship in renewable energy installation. Vocational training costs substantially less, provides hands-on practical skills from day one, and allows me to start earning a solid income two years earlier than university graduates. Technicians specializing in solar and wind systems are in massive demand worldwide.\n\nStudent A: Exactly! There is no single 'superior' route. Success hinges upon aligning your educational choice with your individual talents, market demand, and learning preferences.",
      usefulPhrases: [
        "• *While a university degree provides a strong theoretical foundation...*",
        "• *Vocational apprenticeships offer hands-on training and early entry into the job market...*",
        "• *The optimal decision depends on personal strengths and future market demand.*"
      ]
    },
    listening: {
      title: "Listening Comprehension: Career Counseling and Holland Codes",
      task: "Listen to a certified career advisor explaining how the Holland Code personality framework guides career choices and answer the questions.",
      tapescript: "When high school students ask me what career they should choose, I steer them away from chasing transient salary trends and introduce John Holland's RIASEC framework. This methodology identifies six core personality types: Realistic (hands-on doers), Investigative (scientific thinkers), Artistic (creative innovators), Social (empathetic helpers), Enterprising (persuasive leaders), and Conventional (organized detail-managers). Most individuals possess a blend of two or three dominant types. For example, someone scoring high in 'Investigative' and 'Artistic' often flourishes in software UX design, where algorithmic analysis meets creative visual aesthetics. When your daily duties harmonize with your intrinsic psychological traits, work ceases to feel like a chore.",
      questions: [
        { q: "What does the RIASEC acronym stand for in the Holland framework?", ans: "Realistic, Investigative, Artistic, Social, Enterprising, Conventional.", explain: "Dẫn chứng: 'Realistic, Investigative, Artistic, Social, Enterprising, Conventional'." },
        { q: "What career example is provided for an individual combining 'Investigative' and 'Artistic' traits?", ans: "Software UX (User Experience) design.", explain: "Dẫn chứng: 'someone scoring high in Investigative and Artistic often flourishes in software UX design'." },
        { q: "What benefit occurs when a person's work aligns with their intrinsic traits?", ans: "Work ceases to feel like a burdensome chore and brings natural fulfillment.", explain: "Dẫn chứng: 'When your daily duties harmonize with your intrinsic psychological traits, work ceases to feel like a chore'." }
      ]
    },
    writing: {
      title: "Writing: A Professional Curriculum Vitae (CV) & Profile (160–200 words)",
      prompt: "Draft a concise, professional Curriculum Vitae (CV) for a high school graduate applying for a Junior Content Creator role.",
      outline: [
        "**Personal Contact Information:** Full Name, Phone, Email, LinkedIn profile.",
        "**Professional Summary:** 3 lines highlighting creative digital skills, storytelling ability, and enthusiasm.",
        "**Education:** High school name, GPA, honors.",
        "**Experience & Projects:** School club media leadership, video editing, social media metric growth.",
        "**Core Skills:** Premiere Pro, Canva, copy-writing, team collaboration."
      ],
      modelEssay: "**NGUYEN THAO LINH**\n📍 Hanoi, Vietnam | 📞 (+84) 912 345 678 | ✉️ thaolinh.media@gmail.com | 🌐 linkedin.com/in/thaolinh-creative\n\n**PROFESSIONAL SUMMARY**\nDynamic, creative Grade 12 graduate with demonstrated expertise in short-form video production and social media marketing. Adept at transforming complex concepts into engaging visual narratives. Eager to contribute fresh perspectives and technical acumen as a Junior Content Creator.\n\n**EDUCATION**\n• **Chu Van An National High School** | Hanoi, Vietnam (2021 – 2024)\n  - Cumulative GPA: 8.9/10 (Ranked Top 5% of graduating cohort)\n  - IELTS Academic: Overall 7.5 (Reading 8.0, Writing 7.0)\n\n**RELEVANT EXPERIENCE & LEADERSHIP**\n• **Head of Content Creation — School Youth Media Club** (2022 – 2024)\n  - Directed and edited 24 educational short-form TikTok/Reels videos, generating over 450,000 organic views.\n  - Managed a 6-member creative team to photograph and publish quarterly school magazine issues.\n• **Volunteer Communications Assistant — Blue Heart Charity** (Summer 2023)\n  - Designed promotional posters using Canva, boosting volunteer turnout by 40%.\n\n**KEY TECHNICAL & SOFT SKILLS**\n• Adobe Premiere Pro, CapCut, Canva, Basic SEO copywriting\n• Cross-functional teamwork, time management under strict deadlines, bilingual communication",
      vocabHighlights: [
        "• *adept at transforming complex concepts:* thành thạo trong việc chuyển đổi các khái niệm phức tạp",
        "• *generating organic views:* tạo ra lượt xem tự nhiên không qua quảng cáo",
        "• *cross-functional teamwork:* khả năng làm việc nhóm đa chức năng"
      ]
    }
  },

  unit10: {
    reading: {
      title: "Reading Comprehension: Neuroplasticity and the Ageless Mind",
      passage: "In ancient medical literature, the human brain was long conceptualized as a static, hardwired organ that developed rapidly during childhood, solidified in young adulthood, and suffered irreversible cognitive degeneration in old age. Over the past three decades, however, cutting-edge neuroimaging has shattered this fatalistic paradigm through the discovery of 'neuroplasticity'—the central nervous system's extraordinary biological capacity to physically rewire its synaptic networks in response to novel experiences, mental challenges, and intellectual curiosity.\n\nWhenever a person engages in lifelong learning—whether by acquiring a new foreign language, mastering a musical instrument, or studying coding algorithms—neurons sprout new dendrites, reinforcing neural pathways and expanding cognitive reserves. Longitudinal medical studies demonstrate that seniors who actively pursue intellectual challenges display a dramatically reduced incidence of neurodegenerative diseases such as Alzheimer's. Furthermore, in rapidly shifting modern knowledge economies, intellectual adaptability has become synonymous with professional relevance. Lifelong learning is therefore far more than an educational philosophy; it is a vital neurological defense mechanism and the ultimate catalyst for human flourishing.",
      questions: [
        {
          q: "What ancient misconception regarding the adult human brain has neuroplasticity disproven?",
          options: [
            "A. The belief that the brain cannot feel physical pain",
            "B. The belief that the brain is static and loses the capacity to adapt after young adulthood",
            "C. The belief that the brain requires sleep to function",
            "D. The belief that memory is stored in the heart"
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1: 'the human brain was long conceptualized as a static, hardwired organ that solidified in young adulthood... neuroplasticity shattered this paradigm' -> Đáp án B."
        },
        {
          q: "How does intellectual learning physically alter brain neurons according to paragraph 2?",
          options: [
            "A. By shrinking the size of brain cells",
            "B. By sprouting new dendrites and strengthening synaptic pathways",
            "C. By stopping blood flow to the cerebral cortex",
            "D. By replacing brain tissue with synthetic plastic"
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 2: 'neurons sprout new dendrites, reinforcing neural pathways and expanding cognitive reserves' -> Đáp án B."
        },
        {
          q: "What major health benefit do seniors experience by remaining intellectually active?",
          options: [
            "A. Perfect 20/20 eyesight",
            "B. Immunity to all physical viral infections",
            "C. A substantially lowered risk of neurodegenerative diseases like Alzheimer's",
            "D. The ability to run marathon races effortlessly"
          ],
          ans: 2,
          explain: "Dẫn chứng: 'display a dramatically reduced incidence of neurodegenerative diseases such as Alzheimer's' -> Đáp án C."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Cultivating Lifelong Learning Habits",
      task: "Work in pairs. Discuss practical habits that students and working adults can establish to sustain intellectual curiosity and self-directed study throughout their lives.",
      modelSpeech: "Student A: Many people assume that learning ends once they receive their high school or university diploma. How can we instill the habit of learning throughout adulthood?\n\nStudent B: I believe it begins with small, consistent micro-habits. For example, adopting the '30-minute daily reading rule' guarantees that you finish dozens of enriching books annually. Furthermore, taking advantage of free online MOOCs (Massive Open Online Courses) from platforms like Coursera or edX allows anyone with an internet connection to learn artificial intelligence, philosophy, or foreign languages from top global professors.\n\nStudent A: I completely agree! Another crucial element is fostering a 'growth mindset'. Rather than viewing mistakes as humiliating failures, lifelong learners treat errors as invaluable feedback that illuminates the path to mastery.\n\nStudent B: Absolutely. Curiosity is an intellectual muscle; the more consistently you exercise it, the sharper it stays throughout your entire life.",
      usefulPhrases: [
        "• *Adopting the habit of reading for 30 minutes daily guarantees...*",
        "• *MOOCs allow anyone with an internet connection to access...*",
        "• *Fostering a growth mindset enables us to view mistakes as valuable feedback.*"
      ]
    },
    listening: {
      title: "Listening Comprehension: An 82-Year-Old College Graduate",
      task: "Listen to an inspiring radio feature about Margaret Evans, an 82-year-old grandmother who graduated with a bachelor's degree in art history, and answer the questions.",
      tapescript: "When 82-year-old Margaret Evans walked proudly across the university stage to receive her Bachelor of Arts diploma last Saturday, the entire auditorium erupted into a standing ovation. Margaret had married at nineteen and spent four decades raising five children and running a family farm, never having the luxury of higher education. At age seventy-eight, having lost her husband, she decided to fulfill her lifelong dream. Sitting alongside classmates who were sixty years younger, Margaret learned how to navigate laptop software, submit academic essays online, and participate in lively seminar debates. 'Never let society convince you that you are too old to learn,' Margaret smiled. 'Age is an arbitrary number; an inquisitive mind is forever youthful.'",
      questions: [
        { q: "How old was Margaret Evans when she graduated from university?", ans: "82 years old.", explain: "Dẫn chứng: '82-year-old Margaret Evans walked proudly across the university stage'." },
        { q: "What initial obstacles did Margaret have to overcome in the classroom?", ans: "Learning how to navigate laptop software and submit academic assignments online.", explain: "Dẫn chứng: 'learned how to navigate laptop software, submit academic essays online'." },
        { q: "What inspirational advice did Margaret share regarding age and learning?", ans: "'Never let society convince you that you are too old to learn; age is an arbitrary number; an inquisitive mind is forever youthful.'", explain: "Dẫn chứng câu kết thúc của bài nghe." }
      ]
    },
    writing: {
      title: "Writing: An Article on Self-Study Habits in the Digital Age (180–220 words)",
      prompt: "Write an article for a high school magazine entitled 'Unlocking the Power of Self-Directed Learning in the Digital Age'.",
      outline: [
        "**Engaging Headline:** Catchy title on becoming an autonomous learner.",
        "**Introduction:** The digital era provides unlimited knowledge, but success requires self-discipline and strategic habits.",
        "**Strategy 1 (Digital curation & MOOCs):** Leveraging reputable online platforms, micro-learning, and active note-taking.",
        "**Strategy 2 (Time management & Focus blocks):** The Pomodoro technique, blocking digital distractions.",
        "**Conclusion:** Reiterate that self-directed learning is the ultimate superpower of the 21st century."
      ],
      modelEssay: "**Unlocking the Power of Self-Directed Learning in the Digital Age**\n*By Le Minh Duc, Grade 12*\n\nWe reside in an unprecedented epoch of human history where the entirety of global human knowledge can be accessed with a few taps on a smartphone screen. Yet, access alone does not equal understanding. In an environment saturated with endless digital distractions, developing effective self-directed learning habits has emerged as the ultimate competitive superpower for high school students.\n\nFirst and foremost, autonomous learners must cultivate deliberate digital curation. Rather than passively scrolling through social media algorithms, students should harness structured educational platforms such as MOOCs, scholarly open-access journals, and educational podcasts. Establishing a daily 45-minute micro-learning routine—paired with active synthesis methods like Cornell note-taking or mind-mapping—transforms fleeting information into durable neural connections.\n\nEqually vital is mastering ruthless focus. Multitasking is an insidious cognitive myth; switching between study material and smartphone notifications severely fractures attention spans. Implementing focus protocols—such as the renowned Pomodoro Technique, which alternates 25-minute intervals of deep, uninterrupted concentration with five-minute restorative breaks—trains the brain to achieve high productivity.\n\nIn conclusion, self-directed learning is not an innate talent reserved for geniuses, but an empowering discipline forged through deliberate daily habits. By mastering self-discipline and leveraging digital tools thoughtfully, students can future-proof their intellectual growth and achieve lifelong mastery.",
      vocabHighlights: [
        "• *an unprecedented epoch of human history:* một kỷ nguyên vô tiền khoáng hậu trong lịch sử",
        "• *deliberate digital curation:* sự chọn lọc thông tin số một cách có chủ đích",
        "• *fractures attention spans:* làm đứt gãy sự tập trung chú ý"
      ]
    }
  }
};

module.exports = skillsSolutions;
