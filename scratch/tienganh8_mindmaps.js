// tienganh8_mindmaps.js
// Vector SVG Concept Mindmaps for Tiếng Anh 8 (12 Units)
// Global Success 8 - Trực quan hóa cấu trúc cốt lõi

function getMindmapSVG(unitId) {
  switch (unitId) {
    case 'unit-1':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 1: LEISURE TIME</text>
        <text x="135" y="105" text-anchor="middle" fill="#bae6fd" font-size="10" font-weight="700">Verbs of Liking / Disliking</text>
        <text x="135" y="128" text-anchor="middle" fill="#e0f2fe" font-size="8.5">do DIY &bull; do puzzles &bull; surf the net</text>
        <text x="135" y="148" text-anchor="middle" fill="#7dd3fc" font-size="8.5">Pronunciation: /ʊ/ vs. /uː/</text>

        <path d="M 245 75 L 320 40" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0284c7"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">VOCABULARY &amp; PREFERENCE PHRASES</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">be fond of, be keen on, be crazy about, be into + N/V-ing (mức độ thích thú).</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#38bdf8"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">GRAMMAR: GERUNDS VS. TO-INFINITIVES</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">fancy, enjoy, detest, adore + V-ing; like, love, prefer + V-ing / to-V; cấu trúc song song.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0369a1" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0369a1"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">PRONUNCIATION &amp; COMMUNICATION</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/ʊ/ (book, cook) vs. /uː/ (school, food); Mời &amp; nhận lời: Would you like to...? / I'd love to.</text>
        </g>
      </svg>`;

    case 'unit-2':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#b45309" stroke="#f59e0b" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 2: COUNTRYSIDE</text>
        <text x="135" y="105" text-anchor="middle" fill="#fef3c7" font-size="10" font-weight="700">Comparative Adverbs</text>
        <text x="135" y="128" text-anchor="middle" fill="#fffbeb" font-size="8.5">herd cattle &bull; harvest crops &bull; canal</text>
        <text x="135" y="148" text-anchor="middle" fill="#fde68a" font-size="8.5">Pronunciation: /ə/ vs. /ɪ/</text>

        <path d="M 245 75 L 320 40" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#d97706" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#d97706"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fef3c7" font-size="11" font-weight="800">RURAL ACTIVITIES &amp; LANDSCAPES</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">paddy fields, orchards, cottage, picturesque, hospitable, well-trained herding dogs.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f59e0b"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fef3c7" font-size="11" font-weight="800">COMPARATIVE ADVERBS FORMULA</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Short adv: V + adv-er + than (faster); Long adv: V + more + adv + than; well-&gt;better, badly-&gt;worse.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#b45309" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#b45309"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fef3c7" font-size="11" font-weight="800">PRONUNCIATION &amp; COMPLIMENTS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/ə/ (canal) vs. /ɪ/ (cottage, harvest); Khen ngợi: What a beautiful cottage! / Thank you.</text>
        </g>
      </svg>`;

    case 'unit-3':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#7e22ce" stroke="#a855f7" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 3: TEENAGERS</text>
        <text x="135" y="105" text-anchor="middle" fill="#f3e8ff" font-size="10" font-weight="700">Simple &amp; Compound Sentences</text>
        <text x="135" y="128" text-anchor="middle" fill="#faf5ff" font-size="8.5">peer pressure &bull; bully &bull; forum</text>
        <text x="135" y="148" text-anchor="middle" fill="#e9d5ff" font-size="8.5">Pronunciation: /ʊə/ vs. /ɔɪ/</text>

        <path d="M 245 75 L 320 40" stroke="#a855f7" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#a855f7" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#a855f7" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#9333ea" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#9333ea"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#f3e8ff" font-size="11" font-weight="800">TEEN LIFE &amp; ONLINE PLATFORMS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">log on to accounts, upload photos, expectations, stress, school clubs (sports, chess, crafts).</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#a855f7"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#f3e8ff" font-size="11" font-weight="800">SIMPLE VS. COMPOUND SENTENCES</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Simple: 1 clause; Compound: 2 clauses + FANBOYS (and, but, or, so) or however/therefore/otherwise.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#7e22ce" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#7e22ce"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#f3e8ff" font-size="11" font-weight="800">PRONUNCIATION &amp; REQUESTS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/ʊə/ (tour, sure) vs. /ɔɪ/ (boy, voice); Yêu cầu: Could you please...? / Would you mind checking...?</text>
        </g>
      </svg>`;

    case 'unit-4':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#be123c" stroke="#f43f5e" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 4: ETHNIC GROUPS</text>
        <text x="135" y="105" text-anchor="middle" fill="#ffe4e6" font-size="10" font-weight="700">Questions &amp; Quantifiers</text>
        <text x="135" y="128" text-anchor="middle" fill="#fff1f2" font-size="8.5">stilt house &bull; Rong house &bull; weaving</text>
        <text x="135" y="148" text-anchor="middle" fill="#fecdd3" font-size="8.5">Pronunciation: /k/ vs. /g/</text>

        <path d="M 245 75 L 320 40" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#e11d48" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#e11d48"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#ffe4e6" font-size="11" font-weight="800">CULTURAL HERITAGE OF VIET NAM</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">54 ethnic groups, communal houses, terraced fields, five-colour sticky rice, brocade costumes.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f43f5e"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#ffe4e6" font-size="11" font-weight="800">YES/NO &amp; WH- QUESTIONS; QUANTIFIERS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Do they live...? / Where do they...?; many, a few + Countable; much, a little + Uncountable.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#be123c" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#be123c"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#ffe4e6" font-size="11" font-weight="800">PRONUNCIATION &amp; EXPRESSING OPINIONS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/k/ (costume, folk) vs. /g/ (gong, group); Nêu ý kiến: In my opinion... / To my way of thinking...</text>
        </g>
      </svg>`;

    case 'unit-5':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#047857" stroke="#10b981" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 5: TRADITIONS</text>
        <text x="135" y="105" text-anchor="middle" fill="#d1fae5" font-size="10" font-weight="700">Zero Article (Ø)</text>
        <text x="135" y="128" text-anchor="middle" fill="#ecfdf5" font-size="8.5">reunion &bull; ancestor worship &bull; offerings</text>
        <text x="135" y="148" text-anchor="middle" fill="#a7f3d0" font-size="8.5">Pronunciation: /n/ vs. /θ/</text>

        <path d="M 245 75 L 320 40" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#059669" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#059669"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#d1fae5" font-size="11" font-weight="800">CUSTOMS &amp; TRADITIONAL PRACTICES</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">maintain traditions, break with tradition, family reunions, Cay Neu, longevity celebrations.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#10b981"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#d1fae5" font-size="11" font-weight="800">ZERO ARTICLE (Ø) RULES</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">No article for uncount/plural in general (Students respect teachers), by + transport (by bus).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#047857" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#047857"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#d1fae5" font-size="11" font-weight="800">PRONUNCIATION &amp; GIVING ADVICE</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/n/ (name, night) vs. /θ/ (thank, theme); Lời khuyên: You should take off shoes... / You shouldn't...</text>
        </g>
      </svg>`;

    case 'unit-6':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#6366f1" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#4338ca" stroke="#6366f1" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 6: LIFESTYLES</text>
        <text x="135" y="105" text-anchor="middle" fill="#e0e7ff" font-size="10" font-weight="700">First Conditional &amp; Unless</text>
        <text x="135" y="128" text-anchor="middle" fill="#eef2ff" font-size="8.5">nomadic &bull; dogsled &bull; online learning</text>
        <text x="135" y="148" text-anchor="middle" fill="#c7d2fe" font-size="8.5">Pronunciation: /br/ vs. /pr/</text>

        <path d="M 245 75 L 320 40" stroke="#6366f1" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#6366f1" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#6366f1" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#4f46e5" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#4f46e5"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#e0e7ff" font-size="11" font-weight="800">TRADITIONAL VS. MODERN LIFESTYLES</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Inuit native lifestyle, dogsled, tribal dance, greeting habits, digital classroom interaction.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#6366f1"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#e0e7ff" font-size="11" font-weight="800">FUTURE SIMPLE &amp; FIRST CONDITIONAL</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">If + Present Simple, will + V_inf; Unless = If... not (Unless you study, you will fail).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#4338ca" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#4338ca"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#e0e7ff" font-size="11" font-weight="800">PRONUNCIATION &amp; CERTAINTY</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/br/ (bread, brave) vs. /pr/ (practice, proud); Diễn đạt mức độ chắc: I'm certain... / I doubt it.</text>
        </g>
      </svg>`;

    case 'unit-7':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#047857" stroke="#10b981" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 7: ENVIRONMENT</text>
        <text x="135" y="105" text-anchor="middle" fill="#d1fae5" font-size="10" font-weight="700">Adverbial Clauses of Time</text>
        <text x="135" y="128" text-anchor="middle" fill="#ecfdf5" font-size="8.5">carbon footprint &bull; endangered species</text>
        <text x="135" y="148" text-anchor="middle" fill="#a7f3d0" font-size="8.5">Pronunciation: /bl/ vs. /kl/</text>

        <path d="M 245 75 L 320 40" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#059669" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#059669"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#d1fae5" font-size="11" font-weight="800">ECOLOGICAL ISSUES &amp; CONSERVATION</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">habitat destruction, single-use plastics, ecosystems, pick up rubbish, Con Dao National Park.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#10b981"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#d1fae5" font-size="11" font-weight="800">TIME CLAUSES (BEFORE, AFTER, AS SOON AS)</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Mệnh đề thời gian tương lai dùng Hiện tại đơn (We will plant trees as soon as the rain stops).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#047857" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#047857"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#d1fae5" font-size="11" font-weight="800">PRONUNCIATION &amp; CLARIFICATION</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/bl/ (black, bloom) vs. /kl/ (clean, climate); Hỏi làm rõ: What do you mean by carbon footprint?</text>
        </g>
      </svg>`;

    case 'unit-8':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#14b8a6" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#0f766e" stroke="#14b8a6" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 8: SHOPPING</text>
        <text x="135" y="105" text-anchor="middle" fill="#ccfbf1" font-size="10" font-weight="700">Scheduled Present Simple</text>
        <text x="135" y="128" text-anchor="middle" fill="#f0fdfa" font-size="8.5">open-air market &bull; bargain &bull; price tag</text>
        <text x="135" y="148" text-anchor="middle" fill="#99f6e4" font-size="8.5">Pronunciation: /sp/ vs. /st/</text>

        <path d="M 245 75 L 320 40" stroke="#14b8a6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#14b8a6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#14b8a6" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0d9488" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0d9488"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#ccfbf1" font-size="11" font-weight="800">SHOPPING VENUES &amp; EXPERIENCES</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">convenience stores, discount shops, malls, farmers' markets, shopaholics, home-grown items.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#14b8a6" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#14b8a6"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#ccfbf1" font-size="11" font-weight="800">FREQUENCY ADVERBS &amp; FUTURE TIMETABLES</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">always, usually (trước V thường, sau 'be'); Hiện tại đơn chỉ lịch trình (The mall opens at 8 a.m.).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0f766e" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0f766e"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#ccfbf1" font-size="11" font-weight="800">PRONUNCIATION &amp; POLITE COMPLAINTS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/sp/ (spend, spot) vs. /st/ (store, stand); Khiếu nại: I'm calling to complain about this item...</text>
        </g>
      </svg>`;

    case 'unit-9':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#be123c" stroke="#f43f5e" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 9: DISASTERS</text>
        <text x="135" y="105" text-anchor="middle" fill="#ffe4e6" font-size="10" font-weight="700">Past Continuous Tense</text>
        <text x="135" y="128" text-anchor="middle" fill="#fff1f2" font-size="8.5">earthquake &bull; volcano &bull; tsunami</text>
        <text x="135" y="148" text-anchor="middle" fill="#fecdd3" font-size="8.5">Word Stress: -al and -ous</text>

        <path d="M 245 75 L 320 40" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#e11d48" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#e11d48"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#ffe4e6" font-size="11" font-weight="800">NATURAL CALAMITIES &amp; EMERGENCY</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">landslides, eruptions, emergency kit, rescue workers, flood victims, property damage.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f43f5e"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#ffe4e6" font-size="11" font-weight="800">PAST CONTINUOUS &amp; INTERRUPTIONS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">was/were + V-ing (hành động nền); When + Past Simple (xen vào): We were eating when it shook.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#be123c" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#be123c"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#ffe4e6" font-size="11" font-weight="800">PRONUNCIATION &amp; SYMPATHY</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Stress on -al &amp; -ous (natural, dangerous); Thể hiện đồng cảm: I'm so sorry to hear that!</text>
        </g>
      </svg>`;

    case 'unit-10':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#6366f1" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#4338ca" stroke="#6366f1" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 10: COMMUNICATION</text>
        <text x="135" y="105" text-anchor="middle" fill="#e0e7ff" font-size="10" font-weight="700">Prepositions &amp; Possessives</text>
        <text x="135" y="128" text-anchor="middle" fill="#eef2ff" font-size="8.5">hologram &bull; telepathy &bull; video call</text>
        <text x="135" y="148" text-anchor="middle" fill="#c7d2fe" font-size="8.5">Word Stress: -ese and -ee</text>

        <path d="M 245 75 L 320 40" stroke="#6366f1" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#6366f1" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#6366f1" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#4f46e5" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#4f46e5"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#e0e7ff" font-size="11" font-weight="800">FUTURE TELECOMMUNICATION TECH</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">translation machines, language barrier, instant messages, 3D holographic meetings.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#6366f1"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#e0e7ff" font-size="11" font-weight="800">PREPOSITIONS &amp; POSSESSIVE PRONOUNS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">in, on, at, opposite; mine, yours, his, hers, ours, theirs (This phone is mine; a friend of hers).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#4338ca" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#4338ca"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#e0e7ff" font-size="11" font-weight="800">PRONUNCIATION &amp; INTERRUPTIONS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Stress on -ese / -ee (Vietnamese, trainee); Ngắt lời lịch sự: Sorry for interrupting, but...</text>
        </g>
      </svg>`;

    case 'unit-11':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#0ea5e9" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#0284c7" stroke="#0ea5e9" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 11: SCIENCE &amp; TECH</text>
        <text x="135" y="105" text-anchor="middle" fill="#e0f2fe" font-size="10" font-weight="700">Reported Statements</text>
        <text x="135" y="128" text-anchor="middle" fill="#f0f9ff" font-size="8.5">biometrics &bull; face recognition &bull; AI</text>
        <text x="135" y="148" text-anchor="middle" fill="#bae6fd" font-size="8.5">Phonetics: Sentence Stress</text>

        <path d="M 245 75 L 320 40" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0369a1" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0369a1"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#e0f2fe" font-size="11" font-weight="800">INVENTIONS &amp; SMART CLASSROOMS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">fingerprint scanner, eye-tracking, 3D contact lenses, breakout rooms, robot teachers.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0ea5e9" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0ea5e9"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#e0f2fe" font-size="11" font-weight="800">REPORTED SPEECH: STATEMENTS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">S + said/told O (that) + lùi thì (V-&gt;V2, will-&gt;would, can-&gt;could); đổi đại từ &amp; thời gian/nơi chốn.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0284c7"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#e0f2fe" font-size="11" font-weight="800">SENTENCE STRESS &amp; CELEBRATING</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Nhấn mạnh từ nội dung (nouns, verbs); Chúc mừng tin vui: That's brilliant! Congratulations!</text>
        </g>
      </svg>`;

    case 'unit-12':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#7e22ce" stroke="#a855f7" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 12: OTHER PLANETS</text>
        <text x="135" y="105" text-anchor="middle" fill="#f3e8ff" font-size="10" font-weight="700">Reported Questions</text>
        <text x="135" y="128" text-anchor="middle" fill="#faf5ff" font-size="8.5">solar system &bull; crater &bull; habitable</text>
        <text x="135" y="148" text-anchor="middle" fill="#e9d5ff" font-size="8.5">Intonation: Listing Items</text>

        <path d="M 245 75 L 320 40" stroke="#a855f7" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#a855f7" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#a855f7" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#9333ea" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#9333ea"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#f3e8ff" font-size="11" font-weight="800">SPACE EXPLORATION &amp; 8 PLANETS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune; alien creatures, gravity, telescopes.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#a855f7"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#f3e8ff" font-size="11" font-weight="800">REPORTED SPEECH: QUESTIONS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Wh-question: S + asked + Wh-word + S + V; Yes/No: S + asked + if/whether + S + V (không đảo ngữ).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#7e22ce" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#7e22ce"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#f3e8ff" font-size="11" font-weight="800">LISTING INTONATION &amp; UNCERTAINTY</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Lên giọng (↗) ở các mục trước, hạ giọng (↘) ở mục cuối; Chưa chắc chắn: I'm not sure about it.</text>
        </g>
      </svg>`;

    default:
      return '';
  }
}

module.exports = { getMindmapSVG };
