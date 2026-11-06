// Vector SVG Concept Mindmaps for Tiếng Anh 7 (12 Units)

function getMindmapSVG(unitId) {
  switch (unitId) {
    case 'unit-1':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 1: HOBBIES</text>
        <text x="135" y="105" text-anchor="middle" fill="#bae6fd" font-size="10" font-weight="700">Present Simple &amp; Verbs of Liking</text>
        <text x="135" y="128" text-anchor="middle" fill="#e0f2fe" font-size="8.5">build dollhouses &bull; make models</text>
        <text x="135" y="148" text-anchor="middle" fill="#7dd3fc" font-size="8.5">collect stamps &bull; horse riding</text>

        <path d="M 245 75 L 320 40" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0284c7"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">VOCABULARY &amp; VERBS OF LIKING</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">like, love, enjoy, hate + V-ing; be keen on, be fond of, be interested in + N/V-ing.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#38bdf8"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">PRESENT SIMPLE TENSE</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">(+) S + V(s/es) | (-) S + don't/doesn't + V_inf | (?) Do/Does + S + V_inf? (Thói quen, sở thích).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0369a1" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0369a1"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">PRONUNCIATION: /ə/ vs. /ɜː/</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/ə/ là âm yếu không nhấn (about, doctor); /ɜː/ là âm dài có trọng âm (bird, learn, girl).</text>
        </g>
      </svg>`;

    case 'unit-2':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#065f46" stroke="#10b981" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 2: HEALTHY LIVING</text>
        <text x="135" y="105" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="700">Health Problems &amp; Should/Shouldn't</text>
        <text x="135" y="128" text-anchor="middle" fill="#d1fae5" font-size="8.5">allergy &bull; sunburn &bull; headache</text>
        <text x="135" y="148" text-anchor="middle" fill="#6ee7b7" font-size="8.5">keep fit &bull; avoid screen time</text>

        <path d="M 245 75 L 320 40" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#059669" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#059669"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#a7f3d0" font-size="11" font-weight="800">HEALTH ISSUES &amp; SYMPTOMS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">acne, spots, sore throat, fever, toothache; daily habits: exercise, sleep well, drink water.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#10b981"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#a7f3d0" font-size="11" font-weight="800">SIMPLE SENTENCES &amp; SHOULD</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Câu đơn có 1 mệnh đề độc lập: S + V (+ O / Adv). Khuyên bảo: You should/shouldn't + V_inf.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#047857" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#047857"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#a7f3d0" font-size="11" font-weight="800">PRONUNCIATION: /f/ vs. /v/</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/f/ vô thanh không rung (food, leaf, safe); /v/ hữu thanh rung cổ họng (very, leave, save).</text>
        </g>
      </svg>`;

    case 'unit-3':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#b45309" stroke="#f59e0b" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 3: COMMUNITY</text>
        <text x="135" y="105" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700">Volunteer Work &amp; Past Simple</text>
        <text x="135" y="128" text-anchor="middle" fill="#fef3c7" font-size="8.5">donate books &bull; clean up park</text>
        <text x="135" y="148" text-anchor="middle" fill="#fde68a" font-size="8.5">tutor children &bull; nursing home</text>

        <path d="M 245 75 L 320 40" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#d97706" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#d97706"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fde68a" font-size="11" font-weight="800">COMMUNITY SERVICE ACTIVITIES</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">plant trees, raise money, help street children, cheer up elderly, recycle plastic bottles.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f59e0b"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fde68a" font-size="11" font-weight="800">THE PAST SIMPLE TENSE</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">(+) S + V2/-ed | (-) S + didn't + V_inf | (?) Did + S + V_inf? (yesterday, ago, last week...).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#b45309" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#b45309"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fde68a" font-size="11" font-weight="800">PRONUNCIATION OF -ED ENDINGS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/ɪd/ sau /t, d/ (wanted); /t/ sau âm vô thanh (helped, washed); /d/ sau âm hữu thanh (cleaned).</text>
        </g>
      </svg>`;

    case 'unit-4':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#fb7185" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#be123c" stroke="#fb7185" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 4: MUSIC &amp; ARTS</text>
        <text x="135" y="105" text-anchor="middle" fill="#fecdd3" font-size="10" font-weight="700">Artistic Heritage &amp; Comparisons</text>
        <text x="135" y="128" text-anchor="middle" fill="#ffe4e6" font-size="8.5">water puppetry &bull; art gallery</text>
        <text x="135" y="148" text-anchor="middle" fill="#fda4af" font-size="8.5">musical instrument &bull; portrait</text>

        <path d="M 245 75 L 320 40" stroke="#fb7185" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#fb7185" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#fb7185" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#e11d48" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#e11d48"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fda4af" font-size="11" font-weight="800">ARTS &amp; MUSIC GENRES</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">classical, folk, country, exhibition, concert, composer, musician, painter, photographer.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f43f5e"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fda4af" font-size="11" font-weight="800">COMPARISONS: LIKE, DIFFERENT FROM, AS...AS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">like (giống như); different from (khác với); (not) as + adj/adv + as (so sánh ngang bằng).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#be123c" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#be123c"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fda4af" font-size="11" font-weight="800">PRONUNCIATION: /ʃ/ vs. /ʒ/</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/ʃ/ vô thanh (she, musician, special); /ʒ/ hữu thanh rung cổ họng (measure, television, pleasure).</text>
        </g>
      </svg>`;

    case 'unit-5':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#b45309" stroke="#f59e0b" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 5: FOOD &amp; DRINK</text>
        <text x="135" y="105" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700">Culinary Heritage &amp; Quantifiers</text>
        <text x="135" y="128" text-anchor="middle" fill="#fef3c7" font-size="8.5">omelette &bull; ingredients &bull; recipe</text>
        <text x="135" y="148" text-anchor="middle" fill="#fde68a" font-size="8.5">boil, fry, bake &bull; tablespoon</text>

        <path d="M 245 75 L 320 40" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#d97706" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#d97706"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fde68a" font-size="11" font-weight="800">CULINARY VOCABULARY &amp; COOKING</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">pork, beef, tofu, noodles, turmeric, sauce; cooking verbs: boil, fry, bake, roast, stew.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f59e0b"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fde68a" font-size="11" font-weight="800">QUANTIFIERS (SOME, ANY, MUCH, MANY)</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">How many + N_pl (đếm được); How much + N_unc (không đếm được); a lot of/lots of dùng cả hai.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#b45309" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#b45309"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fde68a" font-size="11" font-weight="800">PRONUNCIATION: /ɒ/ vs. /ɔː/</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/ɒ/ nguyên âm ngắn hạ cằm (hot, pot, bottle); /ɔː/ nguyên âm dài chu tròn môi (sauce, pork, fork).</text>
        </g>
      </svg>`;

    case 'unit-6':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#0891b2" stroke="#06b6d4" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 6: A VISIT TO SCHOOL</text>
        <text x="135" y="105" text-anchor="middle" fill="#cffafe" font-size="10" font-weight="700">School Facilities &amp; Prepositions</text>
        <text x="135" y="128" text-anchor="middle" fill="#e0f2fe" font-size="8.5">boarding school &bull; laboratory</text>
        <text x="135" y="148" text-anchor="middle" fill="#a5f3fc" font-size="8.5">Imperial Academy &bull; library</text>

        <path d="M 245 75 L 320 40" stroke="#06b6d4" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#06b6d4" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#06b6d4" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0891b2" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0891b2"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#cffafe" font-size="11" font-weight="800">SCHOOL FACILITIES &amp; HISTORY</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">international school, entrance exam, playground, projector, Van Mieu - Quoc Tu Giam.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#06b6d4"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#cffafe" font-size="11" font-weight="800">PREPOSITIONS OF TIME &amp; PLACE</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">at (giờ/điểm cụ thể); on (ngày/thứ/bề mặt); in (tháng/năm/bên trong); next to, between, opposite.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0e7490" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0e7490"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#cffafe" font-size="11" font-weight="800">PRONUNCIATION: /tʃ/ vs. /dʒ/</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/tʃ/ vô thanh (chair, teacher, lunch); /dʒ/ hữu thanh rung (juice, jam, gymnasium, project).</text>
        </g>
      </svg>`;

    case 'unit-7':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#b45309" stroke="#f59e0b" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 7: TRAFFIC</text>
        <text x="135" y="105" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700">Road Safety &amp; Distances</text>
        <text x="135" y="128" text-anchor="middle" fill="#fef3c7" font-size="8.5">traffic jam &bull; pedestrian</text>
        <text x="135" y="148" text-anchor="middle" fill="#fde68a" font-size="8.5">helmet, seat belt &bull; obey rules</text>

        <path d="M 245 75 L 320 40" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#d97706" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#d97706"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fde68a" font-size="11" font-weight="800">ROAD SAFETY VOCABULARY</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">crossroads, traffic lights, pavement, cyclist, passenger, road sign, accident, safe lane.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f59e0b"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fde68a" font-size="11" font-weight="800">DISTANCES &amp; SHOULD / SHOULDN'T</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">How far is it from A to B? - It's ... km. Khuyên: You should wear a helmet / shouldn't speed.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#b45309" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#b45309"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fde68a" font-size="11" font-weight="800">PRONUNCIATION: /aɪ/ vs. /eɪ/</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/aɪ/ trượt mở rộng (bike, sign, light); /eɪ/ trượt từ e sang i (train, pavement, safe, station).</text>
        </g>
      </svg>`;

    case 'unit-8':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#fb7185" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#be123c" stroke="#fb7185" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 8: FILMS</text>
        <text x="135" y="105" text-anchor="middle" fill="#fecdd3" font-size="10" font-weight="700">Genres &amp; Contrast Connectors</text>
        <text x="135" y="128" text-anchor="middle" fill="#ffe4e6" font-size="8.5">sci-fi, documentary, comedy</text>
        <text x="135" y="148" text-anchor="middle" fill="#fda4af" font-size="8.5">soundtrack &bull; special effects</text>

        <path d="M 245 75 L 320 40" stroke="#fb7185" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#fb7185" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#fb7185" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#e11d48" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#e11d48"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fda4af" font-size="11" font-weight="800">FILM GENRES &amp; CRITIC REVIEWS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">action, animation, horror; review adjectives: gripping, moving, hilarious, frightening, boring.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f43f5e"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fda4af" font-size="11" font-weight="800">CONNECTORS: ALTHOUGH / THOUGH &amp; HOWEVER</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Although + Clause, Clause (không dùng but). However đứng đầu câu thứ hai theo sau dấu chấm.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#be123c" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#be123c"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fda4af" font-size="11" font-weight="800">PRONUNCIATION: /ɪə/ vs. /eə/</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">/ɪə/ trượt từ i sang ơ (theater, cheer, hear); /eə/ trượt từ e sang ơ (chair, share, square, scary).</text>
        </g>
      </svg>`;

    case 'unit-9':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#7e22ce" stroke="#a855f7" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 9: FESTIVALS</text>
        <text x="135" y="105" text-anchor="middle" fill="#e9d5ff" font-size="10" font-weight="700">World Traditions &amp; Yes/No Questions</text>
        <text x="135" y="128" text-anchor="middle" fill="#f3e8ff" font-size="8.5">celebration &bull; street parade</text>
        <text x="135" y="148" text-anchor="middle" fill="#d8b4fe" font-size="8.5">costume &bull; La Tomatina &bull; Easter</text>

        <path d="M 245 75 L 320 40" stroke="#a855f7" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#a855f7" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#a855f7" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#9333ea" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#9333ea"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#e9d5ff" font-size="11" font-weight="800">GLOBAL FESTIVALS &amp; CUSTOMS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">procession, fireworks, traditional feast, take part in, Tulip Festival, Thanksgiving dinner.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#a855f7"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#e9d5ff" font-size="11" font-weight="800">YES / NO QUESTIONS &amp; SHORT ANSWERS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Đưa Be/Trợ động từ/Modal lên trước chủ ngữ. Trả lời: Yes, S + aux / No, S + aux + not.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#7e22ce" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#7e22ce"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#e9d5ff" font-size="11" font-weight="800">STRESS IN TWO-SYLLABLE WORDS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Danh từ/Tính từ thường nhấn âm 1 (fámous, séason); Động từ thường nhấn âm 2 (perfórm, decíde).</text>
        </g>
      </svg>`;

    case 'unit-10':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#065f46" stroke="#10b981" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 10: ENERGY</text>
        <text x="135" y="105" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="700">Renewables &amp; Present Continuous</text>
        <text x="135" y="128" text-anchor="middle" fill="#d1fae5" font-size="8.5">solar, wind, hydropower</text>
        <text x="135" y="148" text-anchor="middle" fill="#6ee7b7" font-size="8.5">carbon footprint &bull; save power</text>

        <path d="M 245 75 L 320 40" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#059669" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#059669"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#a7f3d0" font-size="11" font-weight="800">RENEWABLE VS. NON-RENEWABLE</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Solar, wind, hydro (tái tạo, sạch); coal, oil, natural gas (hóa thạch, hữu hạn, gây ô nhiễm).</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#10b981"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#a7f3d0" font-size="11" font-weight="800">THE PRESENT CONTINUOUS TENSE</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">S + am/is/are + V-ing (hành động đang diễn ra lúc nói hoặc xu hướng chuyển dịch hiện tại).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#047857" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#047857"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#a7f3d0" font-size="11" font-weight="800">STRESS IN THREE-SYLLABLE WORDS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Trọng âm âm 1 (énergy, nátural, dángerous); Trọng âm âm 2 (pollútion, consúmption, effícient).</text>
        </g>
      </svg>`;

    case 'unit-11':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#14b8a6" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#0f766e" stroke="#14b8a6" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 11: FUTURE TRAVEL</text>
        <text x="135" y="105" text-anchor="middle" fill="#99f6e4" font-size="10" font-weight="700">Future Vehicles &amp; Will / Possessives</text>
        <text x="135" y="128" text-anchor="middle" fill="#ccfbf1" font-size="8.5">flying car &bull; driverless pod</text>
        <text x="135" y="148" text-anchor="middle" fill="#5eead4" font-size="8.5">hyperloop &bull; solar vehicle</text>

        <path d="M 245 75 L 320 40" stroke="#14b8a6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#14b8a6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#14b8a6" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0d9488" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0d9488"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#99f6e4" font-size="11" font-weight="800">FUTURISTIC TRANSPORT MODES</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">sky train, bamboo-copter, supersonic bullet train, eco-friendly, autopilot, accident-free.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#14b8a6" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#14b8a6"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#99f6e4" font-size="11" font-weight="800">FUTURE WILL &amp; POSSESSIVE PRONOUNS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">S + will/won't + V_inf (dự đoán); mine, yours, his, hers, ours, theirs thay cho Tính từ + Noun.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0f766e" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0f766e"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#99f6e4" font-size="11" font-weight="800">SENTENCE STRESS</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Nhấn mạnh vào từ nội dung (Content words: N, V, Adj, Adv); từ chức năng phát âm nhẹ lướt.</text>
        </g>
      </svg>`;

    case 'unit-12':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#0369a1" stroke="#0284c7" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNIT 12: ENGLISH NATIONS</text>
        <text x="135" y="105" text-anchor="middle" fill="#bae6fd" font-size="10" font-weight="700">Landmarks, Articles &amp; Intonation</text>
        <text x="135" y="128" text-anchor="middle" fill="#e0f2fe" font-size="8.5">capital, landmark, wildlife</text>
        <text x="135" y="148" text-anchor="middle" fill="#7dd3fc" font-size="8.5">Australia, Canada, UK, NZ</text>

        <path d="M 245 75 L 320 40" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0284c7"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">ENGLISH-SPEAKING WORLD</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">landmarks (Sydney Opera House, Big Ben), native marsupials (kangaroo, koala), Maori culture.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#38bdf8"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">ARTICLES: A, AN, THE &amp; ZERO ARTICLE (Ø)</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">a/an (đếm được số ít chưa xác định); the (đã biết, duy nhất, so sánh nhất); Ø (nói chung số nhiều/không đếm).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0369a1" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0369a1"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">QUESTION INTONATION</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Yes/No questions thường LÊN GIỌNG ở cuối (↗); Wh- questions thường XUỐNG GIỌNG ở cuối (↘).</text>
        </g>
      </svg>`;

    default:
      return '';
  }
}

module.exports = { getMindmapSVG };
