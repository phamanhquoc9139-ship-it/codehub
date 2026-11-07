// Tiếng Anh 11 - Global Success: Hệ thống Giải Chi Tiết Các Bài Kỹ Năng (Reading, Speaking, Listening, Writing)

const skillsSolutions11 = {
  "1": {
    reading: {
      title: "Reading Comprehension: Secrets of the Blue Zones — The Science of Longevity",
      passage: "Across the globe, demographic researchers have identified five extraordinary geographic regions known as 'Blue Zones'—including Okinawa in Japan, Sardinia in Italy, and Ikaria in Greece—where citizens live active, vibrant lives well beyond the age of 100 at rates significantly higher than the global average. Rather than relying on genetic luck or high-tech pharmaceutical interventions, longevity scientists have discovered that centenarians in these regions share remarkably similar, sustainable lifestyle habits.\n\nFirst and foremost is their dietary foundation. Inhabitants of Blue Zones adhere to predominantly plant-based regimens rich in legumes, garden vegetables, nuts, and whole grains, while consuming meat sparingly, usually only on festive occasions. In Okinawa, elders follow the Confucian mantra 'Hara Hachi Bu', which instructs them to stop eating when their stomachs are eighty percent full, naturally preventing caloric overconsumption and metabolic strain. Furthermore, their physical activity is not structured around grueling gym workouts; rather, it is naturally nudged by their environment through gardening, walking steep village hills, and manual household tasks. Combined with restorative sleep routines and profound community interconnectedness that mitigates chronic stress, these centenarians demonstrate that proactive daily habits form the ultimate fountain of youth.",
      questions: [
        {
          q: "What is a defining characteristic of Blue Zones highlighted in paragraph 1?",
          options: [
            "A. They possess the world's most technologically advanced hospitals.",
            "B. People live active, healthy lives past 100 years old at exceptionally high rates.",
            "C. Citizens rely almost exclusively on synthetic vitamin pills.",
            "D. They are all located in sub-zero polar climates."
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1: 'where citizens live active, vibrant lives well beyond the age of 100 at rates significantly higher than the global average.' -> Đáp án B."
        },
        {
          q: "What does the Okinawan philosophy 'Hara Hachi Bu' teach individuals?",
          options: [
            "A. Exercise for at least three hours every afternoon.",
            "B. Sleep at least ten hours every night.",
            "C. Stop eating when your stomach is eighty percent full.",
            "D. Eat exclusively raw seafood."
          ],
          ans: 2,
          explain: "Dẫn chứng từ đoạn 2: 'In Okinawa, elders follow the Confucian mantra Hara Hachi Bu, which instructs them to stop eating when their stomachs are eighty percent full' -> Đáp án C."
        },
        {
          q: "How do residents in Blue Zones typically maintain their physical fitness?",
          options: [
            "A. By enrolling in expensive modern fitness centers",
            "B. By taking experimental performance-enhancing drugs",
            "C. Through natural daily physical activities like gardening, walking, and manual tasks",
            "D. By participating in professional competitive marathons"
          ],
          ans: 2,
          explain: "Dẫn chứng từ đoạn 2: 'their physical activity is not structured around grueling gym workouts; rather, it is naturally nudged by their environment through gardening, walking steep village hills, and manual household tasks' -> Đáp án C."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Guiding a Daily Home Fitness Routine",
      task: "Work in pairs. Instruct your partner on how to perform a 15-minute morning exercise routine to boost energy and cardiovascular health.",
      modelSpeech: "Good morning everyone. Today, I would like to guide you through a simple yet highly invigorating 15-minute morning workout routine that requires zero equipment.\n\nFirst of all, begin with a gentle 3-minute warm-up. Rotate your neck, shoulders, and wrists smoothly, then march in place to elevate your heart rate and lubricate your joints.\n\nNext, transition into the core circuit. Perform 15 bodyweight squats, making sure your back remains straight and your knees do not extend beyond your toes. Immediately after that, perform 10 push-ups—or knee push-ups if you are a beginner—which strengthens your chest and triceps.\n\nThen, engage your core with a 30-second forearm plank. Remember to breathe deeply and avoid sagging your hips.\n\nFinally, wind down with 2 minutes of full-body static stretches, focusing on your hamstrings and lower back. Practicing this routine every morning will leave you energized and ready to conquer the day!",
      usefulPhrases: [
        "• *First of all, begin with a gentle warm-up to lubricate your joints...*",
        "• *Next, transition into the core strength circuit...*",
        "• *Remember to breathe rhythmically and maintain proper posture...*",
        "• *Finally, wind down with static stretching to relieve muscle tension.*"
      ]
    },
    listening: {
      title: "Listening Comprehension: Nutrition and Modern Ultra-Processed Foods",
      task: "Listen to a nutritionist discussing the health consequences of ultra-processed foods and answer the questions.",
      tapescript: "In recent years, modern supermarket shelves have become dominated by what food scientists call ultra-processed foods—items such as carbonated sodas, instant noodles, pre-packaged pastries, and processed meats. These products undergo extensive industrial refining, stripping away beneficial natural dietary fiber while adding high quantities of refined sugars, artificial flavor enhancers, and unhealthy trans fats. Regular consumption of ultra-processed foods significantly disrupts the delicate balance of gut microbiome bacteria, triggering chronic low-grade inflammation that is directly linked to obesity, type 2 diabetes, and cardiovascular diseases. Nutritionists strongly recommend replacing these convenience snacks with whole foods: fresh seasonal fruits, raw nuts, and probiotic yogurt.",
      questions: [
        { q: "What vital nutrient is stripped away during industrial food refining?", ans: "Natural dietary fiber.", explain: "Dẫn chứng tapescript: 'stripping away beneficial natural dietary fiber while adding high quantities of refined sugars'." },
        { q: "What biological system in the human body is disrupted by ultra-processed foods?", ans: "The delicate balance of gut microbiome bacteria.", explain: "Dẫn chứng: 'significantly disrupts the delicate balance of gut microbiome bacteria, triggering chronic inflammation'." },
        { q: "What healthy whole-food substitutes does the speaker recommend?", ans: "Fresh seasonal fruits, raw nuts, and probiotic yogurt.", explain: "Dẫn chứng: 'replacing these convenience snacks with whole foods: fresh seasonal fruits, raw nuts, and probiotic yogurt'." }
      ]
    },
    writing: {
      title: "Writing: Advice Email on Healthy Lifestyle Habits (120–150 words)",
      prompt: "Write an email to your close friend, Minh, who is experiencing chronic fatigue and poor sleep due to late-night snacking and sedentary gaming habits. Offer practical advice.",
      outline: [
        "**Friendly Salutation:** Dear Minh, / Hi Minh,",
        "**Opening:** Express concern regarding his recent complaints of fatigue and exhaustion.",
        "**Advice Point 1 (Diet & Sleep):** Stop eating heavy snacks within 3 hours of bedtime; limit caffeine after 2 PM.",
        "**Advice Point 2 (Physical Routine & Digital detox):** Walk or jog for 30 minutes every afternoon; turn off phone screens 1 hour before sleeping.",
        "**Closing:** Express confidence in his recovery and sign off warmly."
      ],
      modelEssay: "Dear Minh,\n\nI was really concerned to hear that you have been feeling perpetually exhausted and struggling to sleep lately. Having overcome a similar routine rut last term, I wanted to share a few actionable adjustments that worked wonders for me.\n\nFirst, you should eliminate heavy late-night snacking. Digesting greasy noodles or sugary sodas right before bed forces your digestive tract to work overtime, which severely disrupts deep sleep cycles. Instead, finish your last meal at least three hours before bedtime, opting for warm herbal chamomile tea if you feel hungry.\n\nSecond, make physical movement a non-negotiable daily priority. Jogging or cycling for just 30 minutes every afternoon releases endorphins and naturally regulates your circadian rhythm. Finally, turn off your gaming PC and smartphone screens at least 45 minutes before turning in; the blue light emission tricks your brain into thinking it is still daytime.\n\nGive these habits a try for two weeks, and I guarantee your energy levels will rebound! Let's go jogging together this weekend.\n\nWarm regards,\nNam",
      vocabHighlights: [
        "• *perpetually exhausted:* kiệt sức triền miên liên tục",
        "• *regulates your circadian rhythm:* điều hòa nhịp sinh học cơ thể",
        "• *non-negotiable daily priority:* một ưu tiên hàng ngày không thể thương lượng"
      ]
    }
  },

  "2": {
    reading: {
      title: "Reading Comprehension: Bridging the Generation Gap",
      passage: "The phrase 'generation gap' describes the natural divergence in opinions, values, and communicative styles between younger individuals and their elder family members. In contemporary Vietnam, rapid socioeconomic development and the digital revolution have accelerated this divide. Grandparents and parents who grew up during eras of economic hardship frequently prioritize financial prudence, stable public-sector employment, and strict adherence to traditional hierarchical family norms.\n\nIn stark contrast, Gen Z youths—raised in an interconnected digital landscape—prioritize personal autonomy, creative self-expression, and mental well-being over sheer financial security. These divergent perspectives frequently spark domestic friction over matters such as career aspirations, clothing choices, and smartphone usage. However, sociologists emphasize that the generation gap is not an insurmountable chasm. Families that establish regular, non-judgmental communication rituals—such as sharing weekend meals without digital devices and practicing empathetic active listening—often discover that generational differences can become a rich source of mutual learning and intergenerational affection.",
      questions: [
        {
          q: "What historical background shapes parents' and grandparents' values according to paragraph 1?",
          options: [
            "A. Growing up in eras of economic hardship, which makes them prioritize financial prudence and stability",
            "B. Studying abroad in Western nations",
            "C. Working exclusively in software programming companies",
            "D. Constant exposure to social media influencers"
          ],
          ans: 0,
          explain: "Dẫn chứng từ đoạn 1: 'Grandparents and parents who grew up during eras of economic hardship frequently prioritize financial prudence, stable employment' -> Đáp án A."
        },
        {
          q: "What priorities characterize Gen Z youths in the passage?",
          options: [
            "A. Traditional hierarchy and strict obedience",
            "B. Personal autonomy, creative self-expression, and mental well-being",
            "C. Refusing to learn foreign languages",
            "D. Avoiding all forms of technology"
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 2: 'Gen Z youths... prioritize personal autonomy, creative self-expression, and mental well-being' -> Đáp án B."
        },
        {
          q: "What practical family habit is recommended to bridge the generation gap?",
          options: [
            "A. Living in completely separate towns",
            "B. Family members only communicating via text messages",
            "C. Sharing screen-free weekend meals and practicing empathetic listening",
            "D. Never discussing career choices at home"
          ],
          ans: 2,
          explain: "Dẫn chứng từ câu cuối: 'sharing weekend meals without digital devices and practicing empathetic active listening' -> Đáp án C."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Resolving Parent-Teen Conflicts",
      task: "Work in pairs. Role-play a discussion between a mother and her teenage son discussing his choice between an artistic design career and an accounting degree.",
      modelSpeech: "Mother: Son, your father and I noticed that you placed Graphic Design as your first choice for university. We are deeply worried. Accounting provides stable corporate employment and a guaranteed income, whereas freelance art is notoriously unstable.\n\nSon: Mom, I completely understand your concern for my financial future, and I know your advice comes from a place of deep love. However, the creative design industry is expanding rapidly due to digital media, gaming, and advertising. I have researched thoroughly: UI/UX designers and 3D animators command very competitive salaries. Furthermore, visual design is where my authentic passion lies, and I am willing to work diligently to build a professional portfolio.\n\nMother: We appreciate that you have researched the market so maturely. How about we arrange a meeting with your cousin, who works in an advertising agency, so we can learn more about actual career trajectories together?\n\nSon: That sounds like a wonderful compromise, Mom! Thank you for listening to my perspective.",
      usefulPhrases: [
        "• *I completely understand your concern, and I know it comes from love...*",
        "• *However, the creative digital industry is expanding rapidly, offering...*",
        "• *How about we find a constructive compromise where we can both...*"
      ]
    },
    listening: {
      title: "Listening Comprehension: Active Listening in the Family",
      task: "Listen to a family counselor discuss the difference between hearing and active listening and answer the questions.",
      tapescript: "Most family arguments do not stem from a lack of affection; they occur because people listen to respond rather than listening to understand. When your teenage daughter complains about excessive homework, a parent's instinct is often to offer immediate dismissive advice: 'When I was your age, we studied by candlelight, so stop whining.' This shuts down dialogue instantly. Active listening requires setting down your smartphone, maintaining eye contact, and validating the other person's emotions before offering solutions: 'It sounds like you are feeling really overwhelmed right now; do you want to talk through it?' When children feel emotionally heard, their defensiveness evaporates.",
      questions: [
        { q: "What fundamental listening flaw causes most family arguments?", ans: "Listening to respond rather than listening to understand.", explain: "Dẫn chứng: 'they occur because people listen to respond rather than listening to understand'." },
        { q: "What should parents do before jumping to offer solutions?", ans: "Maintain eye contact and validate the child's emotions.", explain: "Dẫn chứng: 'maintaining eye contact, and validating the other person's emotions before offering solutions'." },
        { q: "What happens to teenagers' defensiveness when they feel emotionally heard?", ans: "Their defensiveness evaporates and opens up dialogue.", explain: "Dẫn chứng: 'When children feel emotionally heard, their defensiveness evaporates'." }
      ]
    },
    writing: {
      title: "Writing: An Opinion Essay on the Generation Gap (150–180 words)",
      prompt: "Write an opinion essay answering the question: 'Can the generation gap between parents and teenagers ever be completely bridged?'",
      outline: [
        "**Introduction:** Define the generation gap and state clear viewpoint: while differences in perspective are natural, mutual empathy can successfully bridge the emotional divide.",
        "**Body Paragraph 1 (Roots of disagreement):** Divergent upbringings, technological familiarity, and expectations regarding career and lifestyle.",
        "**Body Paragraph 2 (Constructive solutions):** Open-minded dialogue, mutual respect for boundaries, and quality offline family time.",
        "**Conclusion:** Reiterate that generational diversity enriches families when approached with love and active listening."
      ],
      modelEssay: "In contemporary family life, the generation gap between parents and their adolescent children has become an increasingly prominent topic of discussion. In my view, while minor generational differences in tastes and technology are inevitable, the emotional chasm between generations can undoubtedly be bridged through mutual empathy and open dialogue.\n\nAdmittedly, friction naturally arises because parents and teens grow up in vastly different societal landscapes. Parents who experienced historical hardships prioritize stability and obedience, whereas digital-native teenagers yearn for personal autonomy and self-expression. Misunderstandings frequently flare up over career ambitions, social media habits, and dress codes when both parties assume their viewpoint is the sole correct one.\n\nNevertheless, this divide is far from insurmountable. Families can overcome friction by cultivating active listening and respecting personal boundaries. Parents must refrain from imposing rigid life scripts, choosing instead to guide with compassionate mentorship. Simultaneously, teenagers should appreciate their parents' protective intentions and communicate their goals maturely. In conclusion, rather than viewing the generation gap as an obstacle, families should embrace it as a valuable bridge for intergenerational wisdom and personal growth.",
      vocabHighlights: [
        "• *inevitable generational differences:* những khác biệt thế hệ không thể tránh khỏi",
        "• *imposing rigid life scripts:* áp đặt những khuôn mẫu cuộc đời cứng nhắc",
        "• *intergenerational wisdom:* sự thông thái và thấu hiểu giữa các thế hệ"
      ]
    }
  },

  "3": {
    reading: {
      title: "Reading Comprehension: Smart Eco-Cities of Tomorrow",
      passage: "As the global urban population expands toward an estimated 6.5 billion by mid-century, traditional urban models are reaching their ecological limits. In response, architectural pioneers and environmental engineers are creating 'smart eco-cities'—holistic metropolitan environments that leverage cutting-edge Internet of Things (IoT) sensors, renewable energy microgrids, and biophilic architectural design to eliminate carbon emissions while enhancing civic well-being.\n\nIn futuristic cities like Masdar in Abu Dhabi or Songdo in South Korea, smart infrastructure operates seamlessly behind the scenes. Underground automated pneumatic tubes transport municipal waste directly to sorting plants at high speed, eradicating noisy garbage trucks and street litter. Meanwhile, public transport is entirely electrified and driverless, running on subterranean and elevated tracks powered by solar and wind micro-turbines. Rooftops are transformed into lush urban agricultural farms that insulate buildings from heat while supplying fresh organic produce to nearby residents. By viewing technology not as a sterile replacement for nature, but as a regenerative tool to harmonize humanity with the biosphere, smart eco-cities illustrate that urban density can coexist with pristine ecological balance.",
      questions: [
        {
          q: "What three technological and design pillars define smart eco-cities in paragraph 1?",
          options: [
            "A. Massive highways, coal power plants, and concrete walls",
            "B. IoT sensors, renewable energy microgrids, and biophilic architectural design",
            "C. Underground shopping malls, private helicopters, and diesel generators",
            "D. Paper records, landlines, and horse carriages"
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1: 'leverage cutting-edge Internet of Things (IoT) sensors, renewable energy microgrids, and biophilic architectural design' -> Đáp án B."
        },
        {
          q: "How does the pneumatic tube system in Songdo eliminate traditional garbage trucks?",
          options: [
            "A. By dumping waste into the local ocean",
            "B. By burning trash in citizens' backyards",
            "C. By transporting municipal waste directly to sorting plants through underground vacuum pipes",
            "D. By sending garbage into outer space"
          ],
          ans: 2,
          explain: "Dẫn chứng từ đoạn 2: 'Underground automated pneumatic tubes transport municipal waste directly to sorting plants at high speed, eradicating noisy garbage trucks' -> Đáp án C."
        },
        {
          q: "What dual benefit do rooftop urban farms provide according to the passage?",
          options: [
            "A. They make buildings taller and attract tourists.",
            "B. They insulate buildings from heat and supply fresh organic produce to locals.",
            "C. They generate electricity during thunderstorms.",
            "D. They replace school playgrounds entirely."
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 2: 'insulate buildings from heat while supplying fresh organic produce to nearby residents' -> Đáp án B."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Proposing a Future Smart City Feature",
      task: "Work in pairs. Present your vision of an innovative public infrastructure feature for a smart Vietnamese city in the year 2050.",
      modelSpeech: "Hello everyone. If our team could introduce one transformative feature to modern Vietnamese cities like Hanoi or Ho Chi Minh City by 2050, it would be an Integrated Smart Rainwater and Solar Canopy Network.\n\nCurrently, our cities face two major challenges: sweltering urban heat islands during sunny afternoons and severe localized street flooding during monsoon downpours. Our proposed innovation consists of elevated photovoltaic canopies constructed above all primary pedestrian sidewalks and bicycle lanes.\n\nDuring dry sunny hours, these semi-transparent solar panels generate renewable electricity to power city streetlights while shielding pedestrians from harsh UV rays. During heavy tropical downpours, the canopy surfaces channel rainwater into underground bio-filtration reservoirs, completely preventing street inundation while storing billions of liters of purified water for urban parks and emergency firefighting. It is an elegant, multi-purpose solution that turns climate challenges into civic assets!",
      usefulPhrases: [
        "• *Our proposed innovation tackles two prominent urban challenges...*",
        "• *During sunny hours, these photovoltaic canopies generate clean energy while...*",
        "• *During heavy downpours, the bio-filtration reservoirs prevent street inundation...*"
      ]
    },
    listening: {
      title: "Listening Comprehension: Copenhagen's Carbon-Neutral Cycling Infrastructure",
      task: "Listen to an urban planning report on how Copenhagen transformed into the world's premier cycling metropolis and answer the questions.",
      tapescript: "In Copenhagen, Denmark, more than 62% of citizens commute to school or work by bicycle every single day, regardless of rain or winter snow. This was not an accidental cultural phenomenon; it was the direct outcome of five decades of deliberate urban engineering. Copenhagen prioritized bicycle express superhighways over automobile expansion. Traffic lights are programmed with 'Green Waves', synchronized to the average cycling speed of 20 kilometers per hour, meaning cyclists encounter green lights consecutively throughout their commute without stopping. Cycle tracks are physically elevated and separated from vehicular lanes by raised stone curbs, providing absolute safety for children and seniors. By choosing bicycles over cars, the city saves over 230 million euros annually in public healthcare costs and reduces thousands of tons of greenhouse gases.",
      questions: [
        { q: "What percentage of Copenhagen residents commute by bicycle daily?", ans: "Over 62%.", explain: "Dẫn chứng: 'more than 62% of citizens commute to school or work by bicycle every single day'." },
        { q: "How do 'Green Wave' traffic lights assist cyclists?", ans: "They are synchronized to 20 km/h, allowing cyclists to hit green lights consecutively without stopping.", explain: "Dẫn chứng: 'synchronized to the average cycling speed of 20 kilometers per hour, meaning cyclists encounter green lights consecutively'." },
        { q: "How much does the city save annually in public healthcare expenses through cycling?", ans: "Over 230 million euros.", explain: "Dẫn chứng: 'the city saves over 230 million euros annually in public healthcare costs'." }
      ]
    },
    writing: {
      title: "Writing: A Descriptive Article on City Life in 2050 (150–180 words)",
      prompt: "Write a descriptive article for a youth magazine depicting a typical morning in a smart eco-city in the year 2050.",
      outline: [
        "**Engaging Title:** A Day in the Life: Welcome to the Eco-City of 2050.",
        "**Introduction:** Wake up to an AI-optimized sustainable apartment powered by 100% solar microgrids.",
        "**Body Paragraph (Daily commute & Environment):** Stepping onto elevated biophilic skywalks, silent autonomous electric pods, fresh air filtered by vertical vertical algae towers.",
        "**Conclusion:** Reflection on how technology restored harmony between human urban living and nature."
      ],
      modelEssay: "**A Day in the Life: Welcome to the Eco-City of 2050**\n*By Tran Mai Anh*\n\nImagine waking up in the year 2050 to the gentle chime of an intelligent home assistant adjusting your bio-dynamic lighting. Your apartment, wrapped in self-cooling vertical moss facades, is powered entirely by neighborhood solar microgrids and silent rooftop wind turbines.\n\nStepping outside onto the fifth-floor pedestrian skywalk, the first sensation is the pristine, fragrant air—purified continuously by biophilic algae towers that line every boulevard. The chaotic roar and suffocating smog of 20th-century fossil fuel vehicles have vanished into history. Instead, citizens glide smoothly aboard autonomous electric pods or pedal along tree-shaded cycle superhighways that weave effortlessly through suspended botanical gardens.\n\nEvery aspect of civic life is harmonized with nature. Waste is whisked away via subterranean vacuum tubes, while rooftop hydroponic allotments supply crisp vegetables for lunch. In this vibrant metropolis of 2050, technology has ceased to be an environmental conqueror; it has become the ultimate guardian of human flourishing and planetary health.",
      vocabHighlights: [
        "• *bio-dynamic lighting:* hệ thống chiếu sáng sinh học tự điều chỉnh",
        "• *pristine, fragrant air:* bầu không khí nguyên sơ, thơm ngát",
        "• *autonomous electric pods:* các khoang xe điện tự hành không người lái"
      ]
    }
  },

  "4": {
    reading: {
      title: "Reading Comprehension: ASEAN Youth — Bridges of Cultural Harmony",
      passage: "Established in 1967 with the signing of the Bangkok Declaration, the Association of Southeast Asian Nations (ASEAN) has evolved from a security pact into an economically integrated, culturally dynamic community of over 660 million people. Within this tapestry of linguistic, religious, and political diversity, the ASEAN Socio-Cultural Community (ASCC) places extraordinary emphasis on empowering the youth—who represent over a third of the region's aggregate demographic.\n\nPrograms such as the ASEAN Youth Volunteer Programme (AYVP) and the ASEAN University Network (AUN) have created unprecedented opportunities for cross-border collaboration. Through AYVP, young Vietnamese doctors, educators, and engineers travel to rural provinces in Cambodia, Indonesia, or the Philippines, partnering with local peers to spearhead disaster relief initiatives and ecological conservation projects. These immersive intercultural exchanges dissolve historical prejudices and foster a shared regional consciousness. Furthermore, mutual recognition arrangements in professional fields like engineering and medicine allow skilled young graduates to seek employment across member states, driving economic dynamism and positioning Southeast Asia as a thriving global powerhouse.",
      questions: [
        {
          q: "What proportion of ASEAN's total population does the youth demographic comprise?",
          options: ["A. Less than 10%", "B. Over a third (more than 33%)", "C. Exactly half", "D. Nearly 80%"],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1: 'the youth—who represent over a third of the region's aggregate demographic.' -> Đáp án B."
        },
        {
          q: "What do young volunteers do through the ASEAN Youth Volunteer Programme (AYVP)?",
          options: [
            "A. They work in overseas factories without pay.",
            "B. They travel across member states to lead disaster relief and ecological conservation projects.",
            "C. They organize military parades.",
            "D. They build private commercial shopping centers."
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 2: 'young Vietnamese doctors, educators, and engineers travel to rural provinces... to spearhead disaster relief initiatives and ecological conservation projects' -> Đáp án B."
        },
        {
          q: "How do mutual recognition arrangements benefit young professionals in ASEAN?",
          options: [
            "A. They eliminate all taxes on foreign goods.",
            "B. They allow skilled graduates in fields like engineering to work legally across member states.",
            "C. They require everyone to speak only one language.",
            "D. They prevent international travel."
          ],
          ans: 1,
          explain: "Dẫn chứng: 'mutual recognition arrangements in professional fields like engineering and medicine allow skilled young graduates to seek employment across member states' -> Đáp án B."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Vietnam's Contributions to the ASEAN Community",
      task: "Work in pairs. Deliver a 2-minute spoken presentation highlighting Vietnam's key contributions to ASEAN since joining the association in 1995.",
      modelSpeech: "Good afternoon teachers and fellow classmates. Today, I am proud to highlight Vietnam's active and constructive role within the ASEAN family since officially joining in July 1995.\n\nVietnam's accession was a historic turning point that bridged ideological divides and paved the way for the inclusion of Laos, Myanmar, and Cambodia, transforming ASEAN into a truly unified ten-nation bloc. Over the past three decades, Vietnam has successfully hosted multiple ASEAN Summits—most notably in 1998, 2010, and 2020. During our 2020 Chairmanship under the theme 'Cohesive and Responsive', Vietnam demonstrated remarkable leadership by steering the bloc through the unprecedented global pandemic, establishing the ASEAN COVID-19 Response Fund.\n\nFurthermore, Vietnamese youth actively contribute to cultural diplomacy through youth leadership forums, educational exchanges, and environmental campaigns. Vietnam exemplifies an enthusiastic, forward-looking partner dedicated to regional solidarity and mutual prosperity.",
      usefulPhrases: [
        "• *Vietnam's accession in 1995 was a historic milestone that helped...*",
        "• *During our 2020 Chairmanship under the theme 'Cohesive and Responsive'...*",
        "• *Vietnam exemplifies a dedicated partner committed to regional solidarity.*"
      ]
    },
    listening: {
      title: "Listening Comprehension: An ASEAN Youth Ambassador's Experience",
      task: "Listen to an interview with a Vietnamese university student participating in the Ship for Southeast Asian and Japanese Youth Program (SSYEAP) and answer the questions.",
      tapescript: "Participating in the Ship for Southeast Asian and Japanese Youth Program was the most transformative experience of my life. For 50 days, over 300 youth leaders from all 10 ASEAN countries and Japan lived aboard the cruise ship Nippon Maru. During institutional homestays in cities like Tokyo, Manila, and Bangkok, we immersed ourselves in local customs and engaged in intense symposiums addressing environmental sustainability and youth entrepreneurship. I learned that while our languages, culinary traditions, and religions differ widely, our fundamental aspirations—for peace, creative freedom, and inclusive economic opportunities—are virtually identical. That voyage transformed me from a citizen of Vietnam into an authentic global ambassador.",
      questions: [
        { q: "How long did the SSYEAP voyage aboard the cruise ship last?", ans: "50 days.", explain: "Dẫn chứng: 'For 50 days, over 300 youth leaders from all 10 ASEAN countries and Japan lived aboard'." },
        { q: "What topics did participants debate during their international symposiums?", ans: "Environmental sustainability and youth entrepreneurship.", explain: "Dẫn chứng: 'symposiums addressing environmental sustainability and youth entrepreneurship'." },
        { q: "What realization did the speaker gain regarding the diverse youth of ASEAN?", ans: "Their fundamental aspirations for peace, freedom, and opportunities are identical despite cultural differences.", explain: "Dẫn chứng: 'while our traditions differ, our fundamental aspirations are virtually identical'." }
      ]
    },
    writing: {
      title: "Writing: An Essay on the Benefits of ASEAN for Vietnamese Youth (150–180 words)",
      prompt: "Write an essay discussing the major educational and career benefits that ASEAN integration brings to young Vietnamese citizens.",
      outline: [
        "**Introduction:** Introduce Vietnam's integration into the ASEAN Community and state main benefits for youth: educational mobility and regional employment horizons.",
        "**Body Paragraph 1 (Educational Opportunities):** ASEAN University Network (AUN) scholarships, student exchange programs, and credit transfer systems.",
        "**Body Paragraph 2 (Employment & Cultural Horizons):** Free movement of skilled labor, multinational networking, and multicultural competency.",
        "**Conclusion:** Summarize that ASEAN empowerment prepares Vietnamese youth to become confident global leaders."
      ],
      modelEssay: "Since joining the Association of Southeast Asian Nations (ASEAN) in 1995, Vietnam has reaped profound socioeconomic benefits. For the younger generation in particular, ASEAN integration has unlocked extraordinary avenues for academic advancement and international career development.\n\nFirst and foremost, ASEAN membership has revolutionized higher education through enhanced regional mobility. Frameworks like the ASEAN University Network (AUN) provide Vietnamese undergraduates with prestigious exchange scholarships, allowing students to study for a semester in leading universities across Singapore, Malaysia, or Thailand with seamless credit transfer. This exposure cultivates intercultural fluency and academic agility.\n\nFurthermore, economic integration widens career horizons immensely. Under the ASEAN Mutual Recognition Arrangements, certified young professionals in sectors such as software engineering, nursing, and architectural design can pursue employment across member states with streamlined visa procedures. This dynamic mobility elevates technical skillsets and encourages entrepreneurial cross-border ventures. In conclusion, ASEAN integration provides Vietnamese youth with a vibrant springboard, empowering them to transition from local learners into dynamic global contributors.",
      vocabHighlights: [
        "• *enhanced regional mobility:* tính dịch chuyển học thuật khu vực được nâng cao",
        "• *seamless credit transfer:* chuyển đổi tín chỉ học tập liền mạch",
        "• *a vibrant springboard:* một bệ phóng đầy sức sống"
      ]
    }
  },

  "5": {
    reading: {
      title: "Reading Comprehension: The Climate Emergency — Tipping Points and Glaciers",
      passage: "Global warming is no longer a distant theoretical threat; it is an accelerating planetary emergency unfolding with brutal clarity before our eyes. The primary driver is anthropogenic greenhouse gas emissions—predominantly carbon dioxide from fossil fuel combustion, methane from intensive livestock farming, and nitrous oxide from industrial agriculture. These heat-trapping gases thicken the atmosphere's thermal blanket, driving average global temperatures to record highs and destabilizing long-standing climatic cycles.\n\nWhat alarms climatologists most is the imminent danger of crossing irreversible planetary 'tipping points'. In polar regions, the catastrophic retreat of Arctic sea ice and Greenland ice sheets reduces Earth's albedo effect—the reflective capability of ice to bounce solar radiation back into space. As bright ice vanishes, darker ocean waters absorb more heat, triggering a self-reinforcing vicious warming cycle. Concurrently, thawing Siberian permafrost releases gigatons of trapped methane, a greenhouse gas thirty times more potent than carbon dioxide over a century. To avert catastrophic sea-level rise and extreme droughts that would displace hundreds of millions of climate refugees, global society must rapidly decarbonize energy grids, transition to circular green economies, and aggressively preserve remaining tropical rainforest biomes.",
      questions: [
        {
          q: "What is the primary anthropogenic driver of global warming mentioned in paragraph 1?",
          options: [
            "A. Solar flares from deep space",
            "B. Volcanic eruptions on oceanic floors",
            "C. Greenhouse gas emissions from fossil fuel burning, livestock farming, and agriculture",
            "D. High-frequency radio transmissions"
          ],
          ans: 2,
          explain: "Dẫn chứng từ đoạn 1: 'primary driver is anthropogenic greenhouse gas emissions—predominantly carbon dioxide from fossil fuel combustion, methane from livestock farming' -> Đáp án C."
        },
        {
          q: "What happens when Arctic sea ice melts and reduces the 'albedo effect'?",
          options: [
            "A. Earth becomes cooler because seawater freezes faster.",
            "B. Darker oceans absorb more solar heat, triggering a self-reinforcing warming cycle.",
            "C. Sea levels immediately drop by several meters.",
            "D. Cloud cover disappears entirely across the equator."
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 2: 'reduces Earth's albedo effect... darker ocean waters absorb more heat, triggering a self-reinforcing vicious warming cycle' -> Đáp án B."
        },
        {
          q: "Why is thawing permafrost considered exceptionally dangerous by scientists?",
          options: [
            "A. It exposes ancient dinosaur bones.",
            "B. It makes ground too soft for walking.",
            "C. It releases massive amounts of trapped methane, which is 30 times more potent than carbon dioxide.",
            "D. It prevents pine trees from growing."
          ],
          ans: 2,
          explain: "Dẫn chứng: 'thawing permafrost releases gigatons of trapped methane, a greenhouse gas thirty times more potent than carbon dioxide' -> Đáp án C."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Debating Fossil Fuels vs. Renewable Energy Transition",
      task: "Work in pairs. Debate whether developing countries should immediately halt coal power plants in favor of solar and wind energy.",
      modelSpeech: "Student A: I firmly believe developing nations must immediately shut down all coal-fired thermal power stations. Coal combustion is the single greatest emitter of greenhouse gases and toxic particulate matter, inflicting severe air pollution and respiratory diseases upon urban populations. Solar, wind, and hydroelectric power prices have plummeted by over 80% in the last decade, making clean energy both environmentally imperative and economically viable.\n\nStudent B: While I share your commitment to a green planet, an abrupt, overnight shutdown of coal infrastructure would trigger catastrophic electricity blackouts and paralyze burgeoning industrial manufacturing. Developing economies need stable baseload electricity to lift millions out of poverty. Solar and wind are inherently intermittent—dependent on weather and sunshine. Therefore, a pragmatic phased transition—investing heavily in battery energy storage systems while gradually decommissioning coal plants—is far more sustainable and realistic.\n\nStudent A: I agree that a phased transition coupled with grid modernizations is the most sensible roadmap to achieve net-zero emissions without risking economic paralysis.",
      usefulPhrases: [
        "• *Coal combustion is the single greatest emitter of carbon emissions...*",
        "• *However, an abrupt shutdown would trigger catastrophic power blackouts...*",
        "• *A pragmatic phased transition with smart grid battery storage is essential.*"
      ]
    },
    listening: {
      title: "Listening Comprehension: Calculating Your Ecological Carbon Footprint",
      task: "Listen to an environmental science educator explain how individuals calculate and minimize their personal carbon footprint and answer the questions.",
      tapescript: "A personal carbon footprint represents the total greenhouse gas emissions generated directly and indirectly by an individual's lifestyle over one year, typically measured in metric tons of CO2 equivalent. The three largest components of a typical teenager's footprint are transportation, diet, and household electrical consumption. Opting for public transit or cycling instead of riding a motorbike cuts transportation emissions by up to 60%. Dietary choices also exert a colossal impact: producing one kilogram of beef generates approximately 60 kilograms of greenhouse gas emissions—nearly sixty times more than producing the equivalent weight of legumes or grains. Adopting 'Meatless Mondays' and eliminating food waste are simple, powerful daily interventions that drastically diminish your environmental footprint.",
      questions: [
        { q: "What are the three largest components of an individual's carbon footprint?", ans: "Transportation, diet, and household electrical consumption.", explain: "Dẫn chứng: 'The three largest components are transportation, diet, and household electrical consumption'." },
        { q: "How much can opting for public transit or cycling reduce personal transit emissions by?", ans: "By up to 60%.", explain: "Dẫn chứng: 'cuts transportation emissions by up to 60%'." },
        { q: "How does the carbon impact of beef compare to that of grains or legumes?", ans: "Beef produces nearly 60 times more greenhouse gases per kilogram than legumes or grains.", explain: "Dẫn chứng: 'generating nearly sixty times more than producing the equivalent weight of legumes or grains'." }
      ]
    },
    writing: {
      title: "Writing: A Problem-Solution Essay on Global Warming (150–180 words)",
      prompt: "Write a problem-solution essay proposing two actionable measures that governments and citizens can take to mitigate global warming.",
      outline: [
        "**Introduction:** Introduce the escalating climate emergency driven by carbon emissions; state that combating it requires coordinated legislative and civic actions.",
        "**Body Paragraph 1 (Government Actions):** Imposing carbon taxes on heavy industrial polluters and funding renewable solar/wind infrastructure.",
        "**Body Paragraph 2 (Citizen Interventions):** Embracing energy-saving household habits, reducing single-use packaging, and adopting plant-forward diets.",
        "**Conclusion:** Reiterate that combining policy enforcement with personal responsibility can safeguard Earth for future generations."
      ],
      modelEssay: "In contemporary times, global warming has escalated into the most formidable ecological catastrophe threatening our biosphere. Halting this downward spiral demands synchronized interventions uniting governmental policy with grassroots civic action.\n\nAt the macro level, national governments must wield legislative power to drive clean energy transitions. Primarily, authorities should levy stringent carbon taxes on fossil-fuel-intensive corporations, making industrial emissions economically punitive while offering subsidies for solar and wind installations. Concurrently, massive investments in electrified public mass transit can curtail the proliferation of exhaust-belching private vehicles in crowded metropolitan hubs.\n\nEqually vital are individual behavioral transformations. Citizens can meaningfully shrink their ecological footprints by embracing energy-efficient household appliances, eliminating single-use plastic commodities, and adopting plant-forward dietary routines. Reducing meat consumption directly alleviates deforestation and livestock methane emissions. In conclusion, while mitigating climate change presents monumental hurdles, harmonizing bold legislative mandates with conscientious lifestyle modifications can successfully steer our planet toward sustainable ecological rejuvenation.",
      vocabHighlights: [
        "• *most formidable ecological catastrophe:* thảm họa sinh thái ghê gớm nhất",
        "• *levy stringent carbon taxes:* áp đặt các khoản thuế carbon nghiêm ngặt",
        "• *sustainable ecological rejuvenation:* sự trẻ hóa sinh thái bền vững"
      ]
    }
  },

  "6": {
    reading: {
      title: "Reading Comprehension: Preserving Our Living Heritage",
      passage: "Vietnam boasts an exceptionally wealthy cultural and natural heritage, encompassing eight UNESCO World Heritage Sites including the Imperial Citadel of Thang Long, the Complex of Hue Monuments, and the Trang An Scenic Landscape Complex. These monuments represent not merely antique stones and picturesque vistas, but the tangible soul, spiritual resilience, and architectural mastery of past civilizations.\n\nHowever, safeguarding these irreplaceable treasures amid rapid commercial modernization and mass tourism presents intricate dilemmas. Overcrowding, improper renovation techniques using modern concrete, and commercial infrastructure expansion threaten to erode the authentic historic fabric of ancient sites. In response, modern preservation philosophy has shifted away from turning heritage into static, museumized relicts. Instead, conservationists advocate 'living heritage preservation'. This approach empowers local descendant communities to remain inside or alongside historic sites, training them as cultural storytellers and artisans. When local residents earn sustainable livelihoods through eco-cultural tourism and traditional crafts, they become the most passionate, vigilant guardians of their ancestral legacy.",
      questions: [
        {
          q: "How many UNESCO World Heritage Sites does Vietnam currently possess according to the passage?",
          options: ["A. Three", "B. Five", "C. Eight", "D. Twelve"],
          ans: 2,
          explain: "Dẫn chứng từ đoạn 1: 'encompassing eight UNESCO World Heritage Sites including the Imperial Citadel' -> Đáp án C."
        },
        {
          q: "What major threat does improper renovation pose to ancient historic monuments?",
          options: [
            "A. It makes entrance tickets too cheap.",
            "B. It erodes the authentic historic fabric of monuments by using inappropriate modern materials like concrete.",
            "C. It prevents sunlight from reaching trees.",
            "D. It makes old buildings too cold in winter."
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 2: 'improper renovation techniques using modern concrete... threaten to erode the authentic historic fabric of ancient sites' -> Đáp án B."
        },
        {
          q: "What is the core principle of the 'living heritage preservation' model?",
          options: [
            "A. Evicting all local residents to build high-rise tourist hotels",
            "B. Keeping heritage static and locked away in museums",
            "C. Empowering local communities to earn sustainable livelihoods and act as active guardians of their heritage",
            "D. Rebuilding all ancient sites in plastic replica form"
          ],
          ans: 2,
          explain: "Dẫn chứng từ câu cuối: 'When local residents earn sustainable livelihoods through eco-cultural tourism... they become the most passionate, vigilant guardians' -> Đáp án C."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Promoting Folk Performing Arts to Youth",
      task: "Work in pairs. Discuss strategies to inspire young Vietnamese students to appreciate and preserve traditional folk performing arts like Quan họ folk singing and Đờn ca tài tử.",
      modelSpeech: "Student A: It is regrettable that many of our peers perceive traditional folk music like Quan họ or Chèo as outdated or dull. If young generations neglect them, these UNESCO intangible cultural heritages could gradually fade away.\n\nStudent B: I share your concern; however, I believe youth disinterest stems from a lack of accessible exposure rather than lack of appreciation. If we present folk arts through creative modern avenues, young people will embrace them enthusiastically. For example, contemporary music artists like Hoang Thuy Linh have successfully blended Quan họ melodies and ethnic folk motifs with modern electronic beats, garnering tens of millions of views on streaming platforms.\n\nStudent A: That is a brilliant example! In addition, high schools could organize interactive workshops where seasoned folk artisans teach students how to sing folk duets or play traditional bamboo instruments. Experiencing heritage hands-on builds deep, lasting pride.",
      usefulPhrases: [
        "• *Youth disinterest often stems from a lack of accessible exposure...*",
        "• *Blending traditional folk melodies with modern acoustic arrangements helps...*",
        "• *Interactive workshops with master artisans foster hands-on cultural pride.*"
      ]
    },
    listening: {
      title: "Listening Comprehension: Restoring Ancient Stone Sanctuaries in My Son",
      task: "Listen to an interview with a conservation architect working on the Cham temple towers of My Son Sanctuary and answer the questions.",
      tapescript: "Restoring the centuries-old terracotta brick towers of My Son Sanctuary in Quang Nam province is one of the most complex archaeological endeavors in Southeast Asia. Built between the 4th and 14th centuries by the Champa civilization, these religious sanctuaries were erected using a mysterious resin-based bonding agent without any visible mortar seams. For decades, previous restoration attempts using modern cement failed miserably, trapping internal moisture and causing bricks to crack and foster invasive mold. Our contemporary international team collaborated with local craftspeople to rediscover the historical resin technique. By using authentic salvaged Cham bricks and natural tree sap adhesive, we are successfully restoring structural integrity while preserving authentic cultural aesthetics.",
      questions: [
        { q: "Why did previous restoration efforts using modern cement fail at My Son?", ans: "Cement trapped internal moisture, causing bricks to crack and promoting invasive mold.", explain: "Dẫn chứng: 'cement failed miserably, trapping internal moisture and causing bricks to crack and foster invasive mold'." },
        { q: "What adhesive material did the original Cham builders use to bond bricks?", ans: "A natural resin-based bonding agent made from tree sap without visible mortar.", explain: "Dẫn chứng: 'using a mysterious resin-based bonding agent... natural tree sap adhesive'." },
        { q: "How is the contemporary restoration team ensuring authentic results?", ans: "By using salvaged Cham bricks bonded with natural tree sap adhesive.", explain: "Dẫn chứng: 'using authentic salvaged Cham bricks and natural tree sap adhesive'." }
      ]
    },
    writing: {
      title: "Writing: A Proposal for a Heritage Preservation Project (150–180 words)",
      prompt: "Write a formal proposal to your school principal requesting permission and funding to launch a 'Youth Heritage Ambassadors' club at school.",
      outline: [
        "**Header:** Project Proposal: Establishment of the Youth Heritage Ambassadors Club.",
        "**1. Problem Statement & Rationale:** Students' disconnect from local historical landmarks due to exam pressures.",
        "**2. Proposed Club Activities:** Weekend field trips to local heritage sites, creating bilingual TikTok educational videos, and hosting artisan workshops.",
        "**3. Expected Impact:** Boosting student historical literacy, civic pride, and practical communication skills."
      ],
      modelEssay: "**PROJECT PROPOSAL: ESTABLISHMENT OF THE YOUTH HERITAGE AMBASSADORS CLUB**\n\n**To:** The School Principal, Nguyen Hue High School\n**From:** Le Minh Khoa, Class 11A1\n**Date:** November 12, 2026\n\n**1. Rationale and Objective:**\nSurveys among our student body indicate that while students appreciate national history, over 70% have never visited our town's centuries-old communal houses and pagodas. To bridge this gap, we propose establishing the 'Youth Heritage Ambassadors Club' to actively engage students in local cultural preservation.\n\n**2. Proposed Action Plan:**\n• **Bilingual Digital Storytelling:** Produce monthly short educational video reels showcasing local historic sites with English subtitles to promote tourism.\n• **Artisan Masterclasses:** Invite traditional craftspeople (pottery, lacquerware) to deliver hands-on weekend workshops in the school hall.\n• **Community Cleanup Patrols:** Organize quarterly clean-up days at historical monuments to safeguard site surroundings.\n\n**3. Expected Outcomes:**\nThe club will enhance members' cultural literacy, foster deep communal pride, and provide valuable leadership experience. We respectfully request approval and a small seed grant of 3,000,000 VND to launch club operations.",
      vocabHighlights: [
        "• *bilingual digital storytelling:* kể chuyện số song ngữ",
        "• *hands-on weekend workshops:* các hội thảo thực hành trải nghiệm cuối tuần",
        "• *foster deep communal pride:* nuôi dưỡng lòng tự hào cộng đồng sâu sắc"
      ]
    }
  },

  "7": {
    reading: {
      title: "Reading Comprehension: Pathways for School-Leavers — University vs. Vocational Mastery",
      passage: "For generations of Vietnamese families, passing the national university entrance examination and obtaining a bachelor's degree was regarded as the singular, non-negotiable gateway to social mobility and corporate respectability. However, the realities of the modern 21st-century labor market have dismantled this monolithic myth. Across many developed and emerging economies, a severe paradox has emerged: millions of university graduates struggle with underemployment or work in fields totally unrelated to their degrees, while industries face acute shortages of certified technicians, skilled electricians, and software specialists.\n\nRecognizing this imbalance, many progressive high school leavers are deliberately opting for vocational education and dual apprenticeships. Unlike traditional four-year academic universities that emphasize broad theoretical literature, vocational polytechnics deliver intensive, hands-on technical training designed in direct consultation with commercial employers. Students master practical proficiencies from day one, completing their diplomas in half the time and entering the workforce with zero student debt. Furthermore, in an economy transformed by automation and high-tech infrastructure, specialized technicians commanding expertise in solar installation, robotics maintenance, and CNC manufacturing frequently earn salaries that match or surpass those of white-collar office administrators.",
      questions: [
        {
          q: "What labor market paradox is described in paragraph 1?",
          options: [
            "A. Everyone wants to become a doctor but hospitals are closing.",
            "B. University graduates face underemployment while industries suffer acute shortages of skilled technicians.",
            "C. Factories have closed down because robots do everything.",
            "D. University degrees have become completely illegal."
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1: 'millions of university graduates struggle with underemployment... while industries face acute shortages of certified technicians' -> Đáp án B."
        },
        {
          q: "How does vocational education differ primarily from traditional universities?",
          options: [
            "A. Vocational schools only teach ancient history.",
            "B. Vocational schools deliver intensive, hands-on training tailored directly to industry needs in a shorter duration.",
            "C. Vocational schools do not allow students to use tools.",
            "D. Vocational schools require ten years to finish."
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 2: 'deliver intensive, hands-on technical training designed in direct consultation with commercial employers' -> Đáp án B."
        },
        {
          q: "What types of technicians frequently earn competitive salaries comparable to white-collar jobs?",
          options: [
            "A. Traditional typewriter repairers",
            "B. Technicians specializing in solar installation, robotics maintenance, and precision manufacturing",
            "C. Manual street sweepers",
            "D. Untrained construction laborers"
          ],
          ans: 1,
          explain: "Dẫn chứng: 'specialized technicians commanding expertise in solar installation, robotics maintenance, and CNC manufacturing frequently earn salaries that match or surpass' -> Đáp án B."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Consulting a Career Guidance Advisor",
      task: "Work in pairs. Role-play a career consultation where a student expresses uncertainty between studying Business Administration at university or enrolling in a Culinary Arts Academy.",
      modelSpeech: "Student: Good afternoon, Mr. David. I am feeling really torn about my plans after graduation. My parents strongly want me to study Business Administration at a prestigious university, but my true passion has always been cooking and culinary arts.\n\nAdvisor: Hello An. It is completely normal to feel conflicted when parental expectations clash with personal passions. Let us examine this pragmatically. A culinary career path does not mean abandoning business; in fact, the world's most successful head chefs and restaurateurs combine culinary wizardry with business acumen.\n\nStudent: That is true! If I pursue a specialized culinary arts diploma, I could master professional kitchen techniques, gain internships at five-star hotels, and later study short management courses to open my own restaurant.\n\nAdvisor: Exactly! Presenting your parents with a detailed, five-year business plan—demonstrating how culinary training will lead directly into successful restaurant entrepreneurship—will reassure them of your maturity and ambition.",
      usefulPhrases: [
        "• *It is completely normal to feel torn between parental wishes and passion...*",
        "• *A practical vocational path does not mean abandoning business ambitions...*",
        "• *Presenting a structured five-year career roadmap will reassure your parents.*"
      ]
    },
    listening: {
      title: "Listening Comprehension: The German Dual Apprenticeship Model",
      task: "Listen to an education report on Germany's Dual Vocational Training System and answer the questions.",
      tapescript: "Germany boasts one of the lowest youth unemployment rates in the European Union, a triumph widely credited to its world-renowned Dual Vocational Training System. Under this framework, high school leavers split their week between a state vocational polytechnic and a partner private corporation. Two days a week are spent learning technical theory in classroom seminars, while the remaining three days involve hands-on paid apprenticeship on the company's factory floor. Apprentices receive a monthly stipend funded by the enterprise, graduating debt-free with recognized national certifications. More than 70% of apprentices transition immediately into permanent, high-paying jobs with their training firms, creating a seamless bridge between school and career.",
      questions: [
        { q: "How do apprentices divide their weekly schedule in the German dual system?", ans: "Two days in classroom theory seminars and three days in paid hands-on corporate apprenticeship.", explain: "Dẫn chứng: 'Two days a week are spent learning technical theory... remaining three days involve hands-on paid apprenticeship'." },
        { q: "What percentage of dual apprentices secure immediate permanent employment with their training firms?", ans: "More than 70%.", explain: "Dẫn chứng: 'More than 70% of apprentices transition immediately into permanent, high-paying jobs'." },
        { q: "What financial advantage do apprentices experience during their training?", ans: "They receive a monthly corporate stipend and graduate completely debt-free.", explain: "Dẫn chứng: 'Apprentices receive a monthly stipend funded by the enterprise, graduating debt-free'." }
      ]
    },
    writing: {
      title: "Writing: An Opinion Essay on Higher Education (150–180 words)",
      prompt: "Write an opinion essay responding to the statement: 'A university degree is the only path to a successful and fulfilling career in modern society.'",
      outline: [
        "**Introduction:** State clear disagreement with the prompt: while university remains valuable, it is far from the sole route to career triumph.",
        "**Body Paragraph 1 (Alternative routes):** Vocational apprenticeships, coding bootcamps, and digital entrepreneurship offer direct, debt-free paths to high-paying jobs.",
        "**Body Paragraph 2 (Skills vs Degrees):** Modern employers prioritize demonstrable technical competencies, problem-solving, and adaptability over paper diplomas.",
        "**Conclusion:** Reiterate that success is determined by practical ability and continuous learning rather than the type of school attended."
      ],
      modelEssay: "For decades, conventional wisdom dictated that securing a university degree was the solitary golden ticket to professional prosperity. In the contemporary digital economy, however, I firmly believe this viewpoint is obsolete. While higher education remains beneficial for theoretical fields, it is certainly no longer the sole avenue to a fulfilling and lucrative career.\n\nFirst, alternative educational pathways have proven remarkably efficient. Intensive vocational polytechnics, coding bootcamps, and creative apprenticeships provide targeted, hands-on training tailored to real industry demands. Students develop high-demand proficiencies in fields like renewable energy, software design, and digital marketing in two years or less, entering the workforce debt-free while university peers are still buried under theoretical textbooks.\n\nFurthermore, modern corporate recruiters have progressively shifted away from strict credentialism. In forward-thinking sectors, employers value demonstrable problem-solving capacity, portfolio quality, and emotional adaptability far above a university transcript. Numerous self-taught programmers and skilled entrepreneurs have built successful enterprises without a bachelor's degree. In conclusion, individual success is forged through grit, technical mastery, and lifelong upskilling, rather than a university diploma alone.",
      vocabHighlights: [
        "• *the solitary golden ticket:* chiếc vé vàng duy nhất",
        "• *shifted away from strict credentialism:* từ bỏ tư duy trọng bằng cấp cứng nhắc",
        "• *demonstrable problem-solving capacity:* năng lực giải quyết vấn đề đã được chứng minh"
      ]
    }
  },

  "8": {
    reading: {
      title: "Reading Comprehension: Cultivating Independence — Life Skills for Adolescents",
      passage: "The transition from adolescence into legal adulthood is not marked merely by celebrating one's eighteenth birthday; it is defined by the gradual mastery of self-reliance and practical autonomy. In modern society, helicopter parenting—where parents micromanage every minute of their children's academic schedules and domestic chores—frequently creates a phenomenon psychologists term 'prolonged adolescence'. Young adults arrive on university campuses possessing exemplary test scores, yet find themselves completely paralyzed when confronted with everyday realities like laundry, cooking nutritious meals, or budgeting allowances.\n\nTrue independence rests upon four core behavioral pillars. The first is rigorous time management: mastering the discipline to prioritize academic deadlines and resist digital distractions without parental nagging. The second is financial literacy—understanding the distinction between essential needs and fleeting wants, tracking expenditures, and cultivating emergency savings. The third pillar comprises fundamental domestic life skills, including basic food hygiene, meal preparation, and personal health care. Finally, emotional autonomy—the psychological resilience to make independent decisions, accept responsibility for mistakes, and regulate stress constructively—is the ultimate cornerstone of genuine adulthood.",
      questions: [
        {
          q: "What negative consequence is linked to 'helicopter parenting' in paragraph 1?",
          options: [
            "A. Children become too athletic.",
            "B. High academic scores coupled with total helplessness in basic daily life tasks",
            "C. Children refuse to attend elementary school.",
            "D. Children learn to cook too early."
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1: 'possessing exemplary test scores, yet find themselves completely paralyzed when confronted with everyday realities like laundry, cooking' -> Đáp án B."
        },
        {
          q: "What does financial literacy encompass as described in paragraph 2?",
          options: [
            "A. Spending all allowance money on video games immediately",
            "B. Distinguishing needs from wants, tracking expenditures, and cultivating savings",
            "C. Refusing to open a bank account",
            "D. Borrowing money continuously from classmates"
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 2: 'understanding the distinction between essential needs and fleeting wants, tracking expenditures, and cultivating emergency savings' -> Đáp án B."
        },
        {
          q: "What defines emotional autonomy according to the passage?",
          options: [
            "A. Never speaking to family members again",
            "B. Blaming others whenever problems occur",
            "C. The psychological resilience to make decisions, own mistakes, and regulate stress",
            "D. Suppressing all natural feelings"
          ],
          ans: 2,
          explain: "Dẫn chứng từ câu cuối: 'the psychological resilience to make independent decisions, accept responsibility for mistakes, and regulate stress constructively' -> Đáp án C."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Overcoming Procrastination and Managing Time",
      task: "Work in pairs. Share your personal time management strategies and discuss how you overcome the temptation to procrastinate when major assignments loom.",
      modelSpeech: "Student A: Time management is honestly my biggest struggle as an 11th grader. With seven academic subjects, club activities, and constant social media notifications, I frequently find myself procrastinating until midnight, which causes immense panic.\n\nStudent B: I used to suffer from the exact same anxiety until I implemented the 'Two-Minute Rule' and the Pomodoro Technique. Whenever a task takes less than two minutes—like filing an assignment or replying to a teacher's email—I execute it immediately instead of putting it off. For larger essay writing, I set a timer for 25 minutes of deep, uninterrupted focus, placing my phone in another room, followed by a strict 5-minute break.\n\nStudent A: Putting the phone in another room is brilliant! The visual cue of a glowing smartphone screen constantly shatters concentration. I will adopt the 25-minute Pomodoro method this evening for my chemistry report.",
      usefulPhrases: [
        "• *Procrastination often leads to midnight panic and burnout...*",
        "• *The Two-Minute Rule dictates executing small tasks immediately...*",
        "• *Removing the physical phone eliminates visual cues for distraction.*"
      ]
    },
    listening: {
      title: "Listening Comprehension: College Dormitory Survival Guide",
      task: "Listen to an interview with a university sophomore sharing practical tips for surviving freshman year in a dormitory and answer the questions.",
      tapescript: "When I moved into my university residence hall last September, my biggest shock wasn't the challenging calculus lectures; it was managing my daily budget. In my first month, I blew through my entire semester allowance on takeout deliveries, bubble tea, and impulsive online shopping within three weeks! I had to live on plain bread for days. That painful wake-up call forced me to download an expense-tracking app and learn batch-cooking. Every Sunday, my roommate and I purchase bulk groceries at the local farmers' market and cook large batches of stew and roasted vegetables for the week. We slash our food costs by 65% and eat far more nutritiously. My advice to high schoolers: master simple cooking and budgeting before you leave home!",
      questions: [
        { q: "What was the speaker's biggest shock during his freshman year?", ans: "Managing his daily budget and personal finances.", explain: "Dẫn chứng: 'my biggest shock wasn't the challenging calculus lectures; it was managing my daily budget'." },
        { q: "What culinary habit did the speaker adopt to resolve his financial crisis?", ans: "Sunday batch-cooking with bulk groceries from the farmers' market.", explain: "Dẫn chứng: 'download an expense-tracking app and learn batch-cooking... purchase bulk groceries'." },
        { q: "By how much did batch-cooking reduce the students' food expenses?", ans: "By 65%.", explain: "Dẫn chứng: 'We slash our food costs by 65% and eat far more nutritiously'." }
      ]
    },
    writing: {
      title: "Writing: An Article on Crucial Life Skills for Adolescents (150–180 words)",
      prompt: "Write an article for a high school magazine entitled 'Three Non-Negotiable Skills for True Independence'.",
      outline: [
        "**Catchy Title:** Three Non-Negotiable Skills for True Independence.",
        "**Introduction:** Transitioning to adulthood requires more than passing exams; it demands practical self-reliance.",
        "**Skill 1: Basic Culinary Competence:** Cooking healthy whole meals prevents dietary illness and saves financial resources.",
        "**Skill 2: Financial Budgeting:** Tracking daily expenses, avoiding impulsive debt, and building emergency funds.",
        "**Skill 3: Time Prioritization:** The ability to plan study blocks and resist digital distractions without supervision.",
        "**Conclusion:** Mastering these skills transforms teenagers into confident, resilient architects of their own destiny."
      ],
      modelEssay: "**Three Non-Negotiable Skills for True Independence**\n*By Hoang Gia Bao, Class 11*\n\nAchieving true independence is far more than receiving an eighteen-year-old birthday card or moving into a college dorm; it is the deliberate cultivation of self-reliance across daily life. To thrive in the adult world, every adolescent must master three foundational competencies.\n\nFirst and foremost is basic culinary self-sufficiency. Relying perpetually on greasy food deliveries is financially ruinous and medically hazardous. Mastering half a dozen nutritious, balanced meals—such as vegetable stir-fries, omelets, and brown rice dishes—protects your health and saves hundreds of thousands of dong monthly.\n\nEqually imperative is financial literacy. Independent adults understand that money earned requires careful allocation. By tracking daily expenditures and following the 50/30/20 budgeting rule (needs, wants, and savings), teenagers avoid impulsive debt and construct vital emergency reserves.\n\nFinally, robust time management is the engine of autonomy. High schoolers must learn to schedule study blocks and conquer procrastination without parental nagging. By mastering nutrition, budgeting, and time, you transform yourself into a confident architect of your future.",
      vocabHighlights: [
        "• *deliberate cultivation of self-reliance:* sự nuôi dưỡng tính tự lập một cách có chủ đích",
        "• *financially ruinous and medically hazardous:* tàn phá tài chính và nguy hiểm cho sức khỏe",
        "• *vital emergency reserves:* nguồn quỹ dự phòng khẩn cấp thiết yếu"
      ]
    }
  },

  "9": {
    reading: {
      title: "Reading Comprehension: Confronting the Shadow of Cyberbullying",
      passage: "The ubiquitous proliferation of smartphones and social media algorithms has dramatically transformed adolescent social dynamics. While digital networks facilitate peer connection and creative expression, they have also cast a dark, insidious shadow: cyberbullying. Unlike traditional schoolyard bullying—which was physically confined to school grounds and ended with the afternoon bell—cyberbullying pursues victims relentlessly 24 hours a day directly into the sanctity of their bedrooms.\n\nPerpetrators hide behind cowardly cloaks of online anonymity to unleash vicious harassment, circulate doctored humiliating photographs, and orchestrate deliberate social ostracization in group chat threads. Educational psychologists point out that the psychological devastation of cyberbullying is exceptionally severe. Victims frequently experience debilitating chronic anxiety, clinical depression, social withdrawal, and a catastrophic erosion of academic self-worth. Combating this crisis requires a multi-pronged approach: social media corporations must enforce stricter identity verification and swift algorithmic hate-speech removal; educational institutions must establish confidential reporting channels; and families must foster trusting, non-punitive environments where teenagers feel secure reporting online harassment without fear of having their devices confiscated.",
      questions: [
        {
          q: "How does cyberbullying differ fundamentally from traditional playground bullying in paragraph 1?",
          options: [
            "A. It only happens during physical education classes.",
            "B. It is limited to paper letters.",
            "C. It relentlessly pursues victims 24 hours a day into their private bedrooms via digital screens.",
            "D. It only involves teachers."
          ],
          ans: 2,
          explain: "Dẫn chứng từ đoạn 1: 'Unlike traditional schoolyard bullying... cyberbullying pursues victims relentlessly 24 hours a day directly into the sanctity of their bedrooms' -> Đáp án C."
        },
        {
          q: "What psychological consequences do cyberbullying victims frequently experience?",
          options: [
            "A. Enhanced physical strength",
            "B. Debilitating chronic anxiety, depression, social withdrawal, and plummeting self-worth",
            "C. Superior memory retention during exams",
            "D. Total happiness and joy"
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 2: 'Victims frequently experience debilitating chronic anxiety, clinical depression, social withdrawal, and a catastrophic erosion of academic self-worth' -> Đáp án B."
        },
        {
          q: "Why should families avoid confiscating teenagers' phones when they report online harassment?",
          options: [
            "A. Because phones are too expensive to touch",
            "B. Because punitive confiscation discourages teenagers from being transparent and seeking help in the future",
            "C. Because phones must charge continuously",
            "D. Because parents don't know how to turn off phones"
          ],
          ans: 1,
          explain: "Dẫn chứng: 'foster trusting, non-punitive environments where teenagers feel secure reporting online harassment without fear of having their devices confiscated' -> Đáp án B."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Supporting Victims of School Bullying",
      task: "Work in pairs. Discuss effective ways bystanders can intervene safely and compassionately when they witness peer bullying in school corridors or online group chats.",
      modelSpeech: "Student A: I was deeply troubled yesterday when I witnessed several classmates mocking Nam's stutter during lunch. No one stood up for him; we all stood there in awkward silence. What should we have done?\n\nStudent B: That passive silence is what psychologists call the 'Bystander Effect'. When everyone assumes someone else will intervene, the bully feels emboldened. While physical confrontation is risky, there are far more effective ways to intervene. First, use distraction: step into the conversation, address the victim directly, and say, 'Hey Nam, our teacher asked us to bring the library books right now, let's walk together.' This breaks the tension and escorts the victim out of danger.\n\nStudent A: That is an exceptionally clever, non-violent de-escalation tactic! What about after the incident?\n\nStudent B: Afterward, offer emotional solidarity: sit with the victim, affirm that the harassment was not their fault, and offer to accompany them to report the behavior to a school counselor. Being an active upstander rather than a silent bystander can save someone's life.",
      usefulPhrases: [
        "• *The Bystander Effect occurs when passive silence emboldens the bully...*",
        "• *Using distraction can safely de-escalate tension and protect the victim...*",
        "• *Being an active upstander means offering solidarity and reporting abuse.*"
      ]
    },
    listening: {
      title: "Listening Comprehension: Developing Mental Resilience against Peer Pressure",
      task: "Listen to an adolescent psychologist discuss how teenagers can resist negative peer pressure and answer the questions.",
      tapescript: "Peer pressure during adolescence is powered by a powerful neurobiological need: the evolutionary drive for social belonging and fear of tribal exclusion. When friends pressure you into dangerous behaviors—such as underage vaping, truanting classes, or reckless motorcycling—the fear of being labeled 'uncool' often overrides logical reasoning. Resisting negative peer influence requires pre-planning your exit strategy. Psychologists recommend the 'Broken Record' technique: calmly and firmly repeat your refusal without making aggressive counter-attacks: 'No thanks, that's not my style.' If pressure intensifies, use a trusted family code-word via text to have your parents call and order you home immediately. True friends respect your boundaries; those who demand you sacrifice your integrity for their amusement do not deserve your loyalty.",
      questions: [
        { q: "What evolutionary biological drive powers peer pressure among adolescents?", ans: "The neurobiological drive for social belonging and fear of exclusion.", explain: "Dẫn chứng: 'powered by a powerful neurobiological need: the evolutionary drive for social belonging and fear of exclusion'." },
        { q: "How does the 'Broken Record' technique work when resisting pressure?", ans: "By calmly and repeatedly stating your refusal without getting aggressive.", explain: "Dẫn chứng: 'calmly and firmly repeat your refusal without making aggressive counter-attacks'." },
        { q: "What defines true friends according to the psychologist's conclusion?", ans: "True friends respect your personal boundaries rather than forcing you to sacrifice integrity.", explain: "Dẫn chứng: 'True friends respect your boundaries; those who demand you sacrifice your integrity... do not deserve your loyalty'." }
      ]
    },
    writing: {
      title: "Writing: A Problem-Solution Essay on School Bullying (150–180 words)",
      prompt: "Write a problem-solution essay addressing the proliferation of bullying in high schools and proposing actionable measures for students and educators.",
      outline: [
        "**Introduction:** Define bullying (both physical and cyber forms) as a grave social affliction harming teenagers' mental health and academic futures.",
        "**Body Paragraph 1 (Root causes):** Insecurity, toxic peer culture, and a lack of empathy or emotional regulation.",
        "**Body Paragraph 2 (Actionable solutions):** Anti-bullying school policies, confidential anonymous reporting apps, and peer-mentoring empathy programs.",
        "**Conclusion:** Emphasize that creating safe, inclusive educational environments requires active solidarity from all members of the school community."
      ],
      modelEssay: "Bullying, whether manifested through physical intimidation, verbal humiliation, or malicious cyber harassment, remains one of the most toxic afflictions plaguing contemporary secondary schools. Eliminating this scourge requires a comprehensive strategy combining strict institutional policies with proactive empathy education.\n\nTo effectively curb bullying, educational institutions must establish robust, zero-tolerance frameworks. Schools should launch confidential anonymous reporting platforms—such as specialized digital apps or dedicated suggestion boxes—enabling vulnerable victims and conscientious bystanders to report harassment without fear of social retaliation. Furthermore, designated counselors must conduct restorative justice interventions, holding perpetrators accountable while providing behavioral rehabilitation.\n\nSimultaneously, cultivation of peer empathy is paramount. Schools should integrate social-emotional learning into weekly homeroom periods, teaching conflict de-escalation, mutual respect, and digital ethics. Training students to become active 'upstanders' rather than passive bystanders empowers communities to ostracize abusive conduct rather than the victim. In conclusion, every student deserves to learn in an environment free from terror. By combining firm institutional accountability with empathetic peer solidarity, we can dismantle the culture of bullying.",
      vocabHighlights: [
        "• *toxic afflictions plaguing secondary schools:* những căn bệnh độc hại đang tàn phá trường học",
        "• *confidential anonymous reporting platforms:* các nền tảng báo cáo ẩn danh và bảo mật",
        "• *active upstanders rather than passive bystanders:* những người dám lên tiếng hành động thay vì người đứng nhìn thụ động"
      ]
    }
  },

  "10": {
    reading: {
      title: "Reading Comprehension: Guardians of Can Gio — The Green Lungs of the Coast",
      passage: "Situated in the coastal delta just 40 kilometers southeast of Ho Chi Minh City, the Can Gio Biosphere Reserve represents one of the most remarkable ecological restoration triumphs in modern history. During the wartime conflicts of the late 1960s, heavy applications of toxic chemical defoliants and napalm decimated this dense mangrove wetland into a lifeless, saline wasteland devoid of vegetation or wildlife.\n\nIn 1978, the municipal government and local citizens launched an ambitious reforestation campaign. Over four decades of grueling manual labor, foresters planted tens of millions of Rhizophora mangrove saplings in muddy, tidal salt marshes. Today, Can Gio has resurrected into over 75,000 hectares of lush, biodiverse mangrove ecosystems, earning recognition as Vietnam's first UNESCO World Biosphere Reserve in 2000.\n\nEcologically, Can Gio serves as the indispensable 'green lung' and protective coastal shield for southern Vietnam. The intricate, submerged root systems of mangrove trees trap sediment, purify industrial runoff before it reaches the sea, and act as a formidable natural barrier against tropical typhoons and coastal storm surges. Furthermore, mangroves sequester atmospheric carbon at rates four times greater than terrestrial tropical rainforests, making Can Gio a premier weapon in Vietnam's national strategy to achieve net-zero carbon emissions.",
      questions: [
        {
          q: "What catastrophic event reduced the Can Gio mangroves to a barren wasteland in the late 1960s?",
          options: [
            "A. A massive tsunami",
            "B. Heavy wartime applications of chemical defoliants and napalm",
            "C. Severe volcanic eruptions",
            "D. Industrial plastic dumping"
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 1: 'heavy applications of toxic chemical defoliants and napalm decimated this dense mangrove wetland into a lifeless, saline wasteland' -> Đáp án B."
        },
        {
          q: "When was Can Gio officially recognized as Vietnam's first UNESCO World Biosphere Reserve?",
          options: ["A. 1978", "B. 1995", "C. 2000", "D. 2020"],
          ans: 2,
          explain: "Dẫn chứng từ đoạn 2: 'earning recognition as Vietnam's first UNESCO World Biosphere Reserve in 2000' -> Đáp án C."
        },
        {
          q: "How does the carbon sequestration rate of mangroves compare to terrestrial rainforests?",
          options: [
            "A. It is exactly the same.",
            "B. It is four times greater than terrestrial tropical rainforests.",
            "C. Mangroves do not absorb carbon dioxide.",
            "D. It is fifty percent slower."
          ],
          ans: 1,
          explain: "Dẫn chứng từ đoạn 3: 'mangroves sequester atmospheric carbon at rates four times greater than terrestrial tropical rainforests' -> Đáp án B."
        }
      ]
    },
    speaking: {
      title: "Speaking Task: Proposing a Coral Reef Protection Campaign",
      task: "Work in pairs. Formulate and deliver a 2-minute proposal outlining measures to rescue dying coral reefs in coastal waters like Nha Trang and Phu Quoc.",
      modelSpeech: "Good afternoon everyone. Today, our team wishes to raise urgent awareness about the critical degradation of coral reef ecosystems in coastal Vietnam.\n\nCoral reefs are often called the 'rainforests of the sea', supporting over 25% of all marine biodiversity despite occupying less than one percent of the ocean floor. Unfortunately, rising sea temperatures, anchor damage from irresponsible tourist boats, and plastic litter have induced catastrophic coral bleaching across Phu Quoc and Nha Trang Bay.\n\nTo reverse this tragic trend, we propose three immediate interventions. First, authorities must establish designated mooring buoys around vulnerable reefs, completely prohibiting commercial boats from dropping heavy metal anchors onto living corals. Second, municipalities should deploy artificial 3D-printed ceramic reef structures to provide stable substrata for nursery-grown coral fragments to colonize. Finally, organizing community underwater cleanups and enforcing strict bans on single-use plastics on tour boats will restore water clarity. Healthy coral reefs mean thriving fisheries and resilient coastal communities!",
      usefulPhrases: [
        "• *Coral reefs are often celebrated as the rainforests of the sea...*",
        "• *Rising sea temperatures and anchor damage trigger catastrophic coral bleaching...*",
        "• *Installing designated mooring buoys prevents boats from dropping heavy anchors.*"
      ]
    },
    listening: {
      title: "Listening Comprehension: The Disappearance of Apex Predators and Trophic Cascades",
      task: "Listen to an ecologist explain the concept of a 'trophic cascade' and what happens when top predators vanish from an ecosystem and answer the questions.",
      tapescript: "When people think about wildlife conservation, they often ask why we expend millions of dollars protecting fierce carnivores like wolves, sharks, and tigers. The answer lies in an ecological phenomenon known as a 'trophic cascade'. Apex predators control the populations and grazing behaviors of herbivores. When wolves were eradicated from Yellowstone National Park in the 1920s, the elk population exploded, overbrowsing young willows and aspen trees along riverbanks. Without roots to anchor soil, riverbanks collapsed into muddy erosion, and songbirds, beavers, and river otters vanished. When biologists reintroduced wolves in 1995, the wolves not only culled sickly deer, but also altered deer grazing patterns. Forests regenerated, riverbanks stabilized, and the entire river geography changed. Saving apex predators literally saves the entire landscape.",
      questions: [
        { q: "What ecological term describes the top-down effect triggered when apex predators are removed?", ans: "A trophic cascade.", explain: "Dẫn chứng: 'known as an ecological phenomenon known as a trophic cascade'." },
        { q: "What disastrous environmental event occurred in Yellowstone after wolves were eradicated?", ans: "Elk multiplied and overgrazed trees, leading to severe riverbank soil erosion.", explain: "Dẫn chứng: 'elk population exploded, overbrowsing young willows... riverbanks collapsed into muddy erosion'." },
        { q: "What happened to the park's riverbanks after wolves were reintroduced in 1995?", ans: "Forests regenerated and riverbanks stabilized, restoring the river geography.", explain: "Dẫn chứng: 'Forests regenerated, riverbanks stabilized, and the entire river geography changed'." }
      ]
    },
    writing: {
      title: "Writing: An Environmental Report on Local Ecosystem Degradation (150–180 words)",
      prompt: "Write a formal environmental report assessing the degradation of a local wetland or river ecosystem and recommending restoration measures.",
      outline: [
        "**Report Title:** Environmental Assessment and Restoration Report: The Red River Riparian Wetland.",
        "**1. Problem Statement:** Unregulated industrial wastewater discharge, plastic dumping, and riparian deforestation threatening native bird habitats.",
        "**2. Proposed Strategic Solutions:** Installing municipal automated wastewater monitoring, launching community riparian tree-planting days, and imposing steep fines for dumping.",
        "**3. Expected Ecological Impact:** Restoring water quality by 50%, re-establishing migratory bird habitats, and mitigating flood risks."
      ],
      modelEssay: "**ENVIRONMENTAL ASSESSMENT AND RESTORATION REPORT: THE RED RIVER WETLAND**\n\n**To:** The Municipal Department of Natural Resources and Environment\n**From:** Youth Environmental Taskforce\n**Date:** November 14, 2026\n\n**1. Ecological Assessment and Threats:**\nThe riparian wetlands bordering the Red River serve as vital ecological filters and critical resting stations for seasonal migratory waterfowl. Over recent years, however, unchecked agricultural runoff, untreated residential sewage discharge, and illegal riverside plastic dumping have severely degraded water oxygen levels, precipitating massive fish die-offs and driving away endangered avian species.\n\n**2. Proposed Remedial Measures:**\n• **Automated Water Quality Monitoring:** Install sensor buoys along major industrial drainage channels to track chemical contaminants in real time and penalize violators.\n• **Riparian Buffer Reforestation:** Plant native willow and bamboo groves along riverbanks to stabilize soil, filter surface runoff, and restore wildlife nesting biomes.\n• **Strict Anti-Dumping Enforcement:** Deploy mobile camera surveillance at chronic dumping hotspots, levying hefty administrative fines on repeat offenders.\n\n**3. Expected Outcomes:**\nEnacting these recommendations will recover dissolved oxygen levels by 40%, eliminate toxic plastic debris, and restore biodiversity to this invaluable fluvial ecosystem.",
      vocabHighlights: [
        "• *riparian wetlands:* các vùng đất ngập nước ven sông",
        "• *unchecked agricultural runoff:* dòng chảy phân bón nông nghiệp chưa được kiểm soát",
        "• *riparian buffer reforestation:* tái trồng rừng tạo vành đai đệm ven sông"
      ]
    }
  }
};

module.exports = skillsSolutions11;
