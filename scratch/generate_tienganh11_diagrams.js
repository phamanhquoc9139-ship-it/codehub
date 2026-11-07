// generate_tienganh11_diagrams.js
// Generates 14 responsive SVG Mindmaps / Visual Infographics for Tiếng Anh 11
const fs = require('fs');
const path = require('path');

const diagrams = {
  // UNIT 1: A LONG AND HEALTHY LIFE
  "1": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="u1g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u1g2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u1g3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <!-- Card 1: Nutrition & Diet -->
    <rect x="20" y="20" width="220" height="140" rx="14" fill="url(#u1g1)" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="36" y="50" fill="#1e3a8a" font-size="13" font-weight="bold">🥗 Balanced Nutrition</text>
    <text x="36" y="74" fill="#1e293b" font-size="11">• Essential nutrients & fiber</text>
    <text x="36" y="94" fill="#1e293b" font-size="11">• Cut down on sugar & salt</text>
    <text x="36" y="114" fill="#1e293b" font-size="11">• Avoid food poisoning</text>
    <text x="36" y="136" fill="#2563eb" font-size="10" font-weight="600">Goal: Longevity & Energy</text>

    <!-- Card 2: Fitness & Workout -->
    <rect x="270" y="20" width="220" height="140" rx="14" fill="url(#u1g2)" stroke="#10b981" stroke-width="1.5"/>
    <text x="286" y="50" fill="#065f46" font-size="13" font-weight="bold">🏃 Daily Workouts</text>
    <text x="286" y="74" fill="#1e293b" font-size="11">• Press-ups & star jumps</text>
    <text x="286" y="94" fill="#1e293b" font-size="11">• Build muscle & stamina</text>
    <text x="286" y="114" fill="#1e293b" font-size="11">• Regular exercise routine</text>
    <text x="286" y="136" fill="#059669" font-size="10" font-weight="600">Goal: High Life Expectancy</text>

    <!-- Card 3: Grammar Core -->
    <rect x="520" y="20" width="220" height="140" rx="14" fill="url(#u1g3)" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="536" y="50" fill="#4c1d95" font-size="13" font-weight="bold">⏳ Past Simple vs. Pres. Perf.</text>
    <text x="536" y="74" fill="#1e293b" font-size="11">• Past Simple: Yesterday, ago</text>
    <text x="536" y="94" fill="#1e293b" font-size="11">• Pres. Perf.: Ever, since, for</text>
    <text x="536" y="114" fill="#1e293b" font-size="11">• Strong/Weak auxiliary forms</text>
    <text x="536" y="136" fill="#7c3aed" font-size="10" font-weight="600">Grammar & Pronunciation</text>
  </svg>`,

  // UNIT 2: THE GENERATION GAP
  "2": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="u2g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u2g2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ef4444" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b91c1c" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u2g3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#0e7490" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <!-- Card 1: Generational Views -->
    <rect x="20" y="20" width="220" height="140" rx="14" fill="url(#u2g1)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="36" y="50" fill="#78350f" font-size="13" font-weight="bold">👥 Generations</text>
    <text x="36" y="74" fill="#1e293b" font-size="11">• Traditional values vs. Gen Z</text>
    <text x="36" y="94" fill="#1e293b" font-size="11">• Digital natives & screen time</text>
    <text x="36" y="114" fill="#1e293b" font-size="11">• Individualism vs. Family rules</text>
    <text x="36" y="136" fill="#d97706" font-size="10" font-weight="600">Nuclear & Extended Family</text>

    <!-- Card 2: Modal Verbs Distinction -->
    <rect x="270" y="20" width="220" height="140" rx="14" fill="url(#u2g2)" stroke="#ef4444" stroke-width="1.5"/>
    <text x="286" y="50" fill="#7f1d1d" font-size="13" font-weight="bold">⚖️ Must, Have to, Should</text>
    <text x="286" y="74" fill="#1e293b" font-size="11">• Must: Speaker's feeling</text>
    <text x="286" y="94" fill="#1e293b" font-size="11">• Have to: Rules & laws</text>
    <text x="286" y="114" fill="#1e293b" font-size="11">• Mustn't (cấm) vs. Don't have to</text>
    <text x="286" y="136" fill="#dc2626" font-size="10" font-weight="600">Should: Advice & Opinions</text>

    <!-- Card 3: Harmony & Communication -->
    <rect x="520" y="20" width="220" height="140" rx="14" fill="url(#u2g3)" stroke="#06b6d4" stroke-width="1.5"/>
    <text x="536" y="50" fill="#164e63" font-size="13" font-weight="bold">🤝 Bridging the Gap</text>
    <text x="536" y="74" fill="#1e293b" font-size="11">• Open & honest dialogue</text>
    <text x="536" y="94" fill="#1e293b" font-size="11">• Contracted forms in speech</text>
    <text x="536" y="114" fill="#1e293b" font-size="11">• Ask for & give permission</text>
    <text x="536" y="136" fill="#0891b2" font-size="10" font-weight="600">Mutual Respect & Love</text>
  </svg>`,

  // UNIT 3: CITIES OF THE FUTURE
  "3": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="u3g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#0369a1" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u3g2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#059669" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u3g3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6366f1" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#4338ca" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <!-- Card 1: Smart Living -->
    <rect x="20" y="20" width="220" height="140" rx="14" fill="url(#u3g1)" stroke="#0284c7" stroke-width="1.5"/>
    <text x="36" y="50" fill="#0c4a6e" font-size="13" font-weight="bold">🏙️ Smart Infrastructure</text>
    <text x="36" y="74" fill="#1e293b" font-size="11">• AI traffic control sensors</text>
    <text x="36" y="94" fill="#1e293b" font-size="11">• Autonomous green transport</text>
    <text x="36" y="114" fill="#1e293b" font-size="11">• Pedestrian-only cycle paths</text>
    <text x="36" y="136" fill="#0284c7" font-size="10" font-weight="600">Zero Traffic Jams</text>

    <!-- Card 2: Green & Sustainable -->
    <rect x="270" y="20" width="220" height="140" rx="14" fill="url(#u3g2)" stroke="#10b981" stroke-width="1.5"/>
    <text x="286" y="50" fill="#065f46" font-size="13" font-weight="bold">🌿 Liveable & Sustainable</text>
    <text x="286" y="74" fill="#1e293b" font-size="11">• Skyscraper vertical farms</text>
    <text x="286" y="94" fill="#1e293b" font-size="11">• Cooling rooftop gardens</text>
    <text x="286" y="114" fill="#1e293b" font-size="11">• Renewable solar & wind energy</text>
    <text x="286" y="136" fill="#059669" font-size="10" font-weight="600">15-Minute City Model</text>

    <!-- Card 3: Grammar & Pronunciation -->
    <rect x="520" y="20" width="220" height="140" rx="14" fill="url(#u3g3)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="536" y="50" fill="#312e81" font-size="13" font-weight="bold">🧩 Stative & Linking Verbs</text>
    <text x="536" y="74" fill="#1e293b" font-size="11">• Stative: No continuous (know)</text>
    <text x="536" y="94" fill="#1e293b" font-size="11">• Linking: Verb + Adjective</text>
    <text x="536" y="114" fill="#1e293b" font-size="11">• Consonant-to-vowel linking</text>
    <text x="536" y="136" fill="#4f46e5" font-size="10" font-weight="600">Express Certainty & Prediction</text>
  </svg>`,

  // REVIEW 1: UNITS 1–3
  "review-1": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="r1g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#0284c7" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="720" height="140" rx="16" fill="url(#r1g)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="40" y="50" fill="#312e81" font-size="14" font-weight="bold">📌 REVIEW 1 (UNITS 1–3): OUR LIVES & FUTURE COMMUNITIES</text>
    <line x1="40" y1="62" x2="720" y2="62" stroke="#6366f1" stroke-dasharray="4 4" stroke-opacity="0.4"/>
    <text x="40" y="86" fill="#1e293b" font-size="11"><tspan font-weight="bold" fill="#4338ca">Unit 1:</tspan> Health, diet, workout | Past Simple vs. Present Perfect | Strong/Weak auxiliary forms</text>
    <text x="40" y="110" fill="#1e293b" font-size="11"><tspan font-weight="bold" fill="#0284c7">Unit 2:</tspan> Generation gap, digital natives | Must / Have to / Should / Mustn't | Contracted forms</text>
    <text x="40" y="134" fill="#1e293b" font-size="11"><tspan font-weight="bold" fill="#059669">Unit 3:</tspan> Smart cities, infrastructure, liveable | Stative & Linking verbs | Consonant-vowel linking</text>
  </svg>`,

  // UNIT 4: ASEAN AND VIET NAM
  "4": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="u4g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#be123c" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u4g2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u4g3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <!-- Card 1: Regional Integration -->
    <rect x="20" y="20" width="220" height="140" rx="14" fill="url(#u4g1)" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="36" y="50" fill="#881337" font-size="13" font-weight="bold">🌏 ASEAN Community</text>
    <text x="36" y="74" fill="#1e293b" font-size="11">• 10 member states united</text>
    <text x="36" y="94" fill="#1e293b" font-size="11">• Viet Nam's active role</text>
    <text x="36" y="114" fill="#1e293b" font-size="11">• Strengthen regional ties</text>
    <text x="36" y="136" fill="#e11d48" font-size="10" font-weight="600">Peace, Stability, Prosperity</text>

    <!-- Card 2: Youth & Culture -->
    <rect x="270" y="20" width="220" height="140" rx="14" fill="url(#u4g2)" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="286" y="50" fill="#1e3a8a" font-size="13" font-weight="bold">🎉 Youth & Exchange</text>
    <text x="286" y="74" fill="#1e293b" font-size="11">• Cultural exchange forums</text>
    <text x="286" y="94" fill="#1e293b" font-size="11">• Leadership & volunteer skills</text>
    <text x="286" y="114" fill="#1e293b" font-size="11">• Traditional New Year festivals</text>
    <text x="286" y="136" fill="#2563eb" font-size="10" font-weight="600">Songkran, Bun Pi May, Tet</text>

    <!-- Card 3: Grammar - Gerunds -->
    <rect x="520" y="20" width="220" height="140" rx="14" fill="url(#u4g3)" stroke="#10b981" stroke-width="1.5"/>
    <text x="536" y="50" fill="#064e3b" font-size="13" font-weight="bold">📖 Gerunds (V-ing)</text>
    <text x="536" y="74" fill="#1e293b" font-size="11">• As Subject: V-ing + V(sing.)</text>
    <text x="536" y="94" fill="#1e293b" font-size="11">• After verbs: enjoy, suggest...</text>
    <text x="536" y="114" fill="#1e293b" font-size="11">• After prepositions: keen on...</text>
    <text x="536" y="136" fill="#059669" font-size="10" font-weight="600">Give & Respond to Compliments</text>
  </svg>`,

  // UNIT 5: GLOBAL WARMING
  "5": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="u5g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ea580c" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#9a3412" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u5g2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#16a34a" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#15803d" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u5g3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#0369a1" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <!-- Card 1: Greenhouse Causes -->
    <rect x="20" y="20" width="220" height="140" rx="14" fill="url(#u5g1)" stroke="#ea580c" stroke-width="1.5"/>
    <text x="36" y="50" fill="#7c2d12" font-size="13" font-weight="bold">🔥 Climate Threats</text>
    <text x="36" y="74" fill="#1e293b" font-size="11">• Fossil fuel emissions (CO2)</text>
    <text x="36" y="94" fill="#1e293b" font-size="11">• Heat-trapping methane & soot</text>
    <text x="36" y="114" fill="#1e293b" font-size="11">• Deforestation & sea level rise</text>
    <text x="36" y="136" fill="#c2410c" font-size="10" font-weight="600">Urgent Net-Zero Target</text>

    <!-- Card 2: Green Solutions -->
    <rect x="270" y="20" width="220" height="140" rx="14" fill="url(#u5g2)" stroke="#16a34a" stroke-width="1.5"/>
    <text x="286" y="50" fill="#14532d" font-size="13" font-weight="bold">🌱 Climate Actions</text>
    <text x="286" y="74" fill="#1e293b" font-size="11">• Renewable clean energy</text>
    <text x="286" y="94" fill="#1e293b" font-size="11">• Reforestation campaigns</text>
    <text x="286" y="114" fill="#1e293b" font-size="11">• Cut black carbon emissions</text>
    <text x="286" y="136" fill="#16a34a" font-size="10" font-weight="600">Write Action Leaflets</text>

    <!-- Card 3: Grammar - Participle Clauses -->
    <rect x="520" y="20" width="220" height="140" rx="14" fill="url(#u5g3)" stroke="#0284c7" stroke-width="1.5"/>
    <text x="536" y="50" fill="#0c4a6e" font-size="13" font-weight="bold">⚡ Participle Clauses</text>
    <text x="536" y="74" fill="#1e293b" font-size="11">• Present (V-ing): Active cause</text>
    <text x="536" y="94" fill="#1e293b" font-size="11">• Past (V3/ed): Passive state</text>
    <text x="536" y="114" fill="#1e293b" font-size="11">• Subject match rule strictly</text>
    <text x="536" y="136" fill="#0284c7" font-size="10" font-weight="600">Give & Respond to Warnings</text>
  </svg>`,

  // REVIEW 2: UNITS 4–5
  "review-2": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="r2g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#059669" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#d97706" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="720" height="140" rx="16" fill="url(#r2g)" stroke="#10b981" stroke-width="1.5"/>
    <text x="40" y="50" fill="#064e3b" font-size="14" font-weight="bold">📌 REVIEW 2 (UNITS 4–5): ASEAN COMMUNITY & CLIMATE DISRUPTION</text>
    <line x1="40" y1="62" x2="720" y2="62" stroke="#10b981" stroke-dasharray="4 4" stroke-opacity="0.4"/>
    <text x="40" y="86" fill="#1e293b" font-size="11"><tspan font-weight="bold" fill="#059669">Unit 4:</tspan> ASEAN, youth exchange, cultural diplomacy | Gerunds as Subjects and Objects | Vowel elision</text>
    <text x="40" y="110" fill="#1e293b" font-size="11"><tspan font-weight="bold" fill="#d97706">Unit 5:</tspan> Global warming, fossil fuels, black carbon | Present & Past Participle clauses | Sentence stress</text>
    <text x="40" y="134" fill="#1e293b" font-size="11"><tspan font-weight="bold" fill="#2563eb">Functional skills:</tspan> Giving compliments & warnings | Writing proposals & environmental leaflets</text>
  </svg>`,

  // UNIT 6: PRESERVING OUR HERITAGE
  "6": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="u6g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#b45309" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#78350f" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u6g2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#075985" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u6g3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#5b21b6" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <!-- Card 1: Heritage Classification -->
    <rect x="20" y="20" width="220" height="140" rx="14" fill="url(#u6g1)" stroke="#b45309" stroke-width="1.5"/>
    <text x="36" y="50" fill="#451a03" font-size="13" font-weight="bold">🏛️ Heritage Values</text>
    <text x="36" y="74" fill="#1e293b" font-size="11">• Tangible: Citadel, monuments</text>
    <text x="36" y="94" fill="#1e293b" font-size="11">• Intangible: Performing arts</text>
    <text x="36" y="114" fill="#1e293b" font-size="11">• Historic (trọng đại) vs. Historical</text>
    <text x="36" y="136" fill="#b45309" font-size="10" font-weight="600">Preserve & Restore</text>

    <!-- Card 2: Modern Conservation -->
    <rect x="270" y="20" width="220" height="140" rx="14" fill="url(#u6g2)" stroke="#0284c7" stroke-width="1.5"/>
    <text x="286" y="50" fill="#082f49" font-size="13" font-weight="bold">💡 Smart Initiatives</text>
    <text x="286" y="74" fill="#1e293b" font-size="11">• 3D digital museum scanning</text>
    <text x="286" y="94" fill="#1e293b" font-size="11">• Crowdfunding youth projects</text>
    <text x="286" y="114" fill="#1e293b" font-size="11">• Sustainable eco-tourism</text>
    <text x="286" y="136" fill="#0284c7" font-size="10" font-weight="600">Trang An & Hue Citadel</text>

    <!-- Card 3: Grammar - To-infinitive Clauses -->
    <rect x="520" y="20" width="220" height="140" rx="14" fill="url(#u6g3)" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="536" y="50" fill="#3b0764" font-size="13" font-weight="bold">🔗 To-infinitive Clauses</text>
    <text x="536" y="74" fill="#1e293b" font-size="11">• The first / last / only to V</text>
    <text x="536" y="94" fill="#1e293b" font-size="11">• Passive: to be V3/ed</text>
    <text x="536" y="114" fill="#1e293b" font-size="11">• Intonation: Lists & commands</text>
    <text x="536" y="136" fill="#7c3aed" font-size="10" font-weight="600">Ask for & Give Directions</text>
  </svg>`,

  // UNIT 7: EDUCATION OPTIONS FOR SCHOOL-LEAVERS
  "7": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="u7g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#0369a1" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u7g2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d97706" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u7g3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#3730a3" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <!-- Card 1: Higher Education -->
    <rect x="20" y="20" width="220" height="140" rx="14" fill="url(#u7g1)" stroke="#0284c7" stroke-width="1.5"/>
    <text x="36" y="50" fill="#082f49" font-size="13" font-weight="bold">🎓 Academic Pathway</text>
    <text x="36" y="74" fill="#1e293b" font-size="11">• University entrance exams</text>
    <text x="36" y="94" fill="#1e293b" font-size="11">• Bachelor's & master's degrees</text>
    <text x="36" y="114" fill="#1e293b" font-size="11">• Theoretical depth & research</text>
    <text x="36" y="136" fill="#0284c7" font-size="10" font-weight="600">Formal Higher Education</text>

    <!-- Card 2: Vocational Pathway -->
    <rect x="270" y="20" width="220" height="140" rx="14" fill="url(#u7g2)" stroke="#d97706" stroke-width="1.5"/>
    <text x="286" y="50" fill="#451a03" font-size="13" font-weight="bold">🔧 Vocational Training</text>
    <text x="286" y="74" fill="#1e293b" font-size="11">• Apprenticeship programmes</text>
    <text x="286" y="94" fill="#1e293b" font-size="11">• Practical skills: mechanic, cook</text>
    <text x="286" y="114" fill="#1e293b" font-size="11">• Fast entry into job market</text>
    <text x="286" y="136" fill="#d97706" font-size="10" font-weight="600">Professional Qualifications</text>

    <!-- Card 3: Grammar - Perfect Gerund & Participle -->
    <rect x="520" y="20" width="220" height="140" rx="14" fill="url(#u7g3)" stroke="#4f46e5" stroke-width="1.5"/>
    <text x="536" y="50" fill="#312e81" font-size="13" font-weight="bold">⏳ Perfect Forms</text>
    <text x="536" y="74" fill="#1e293b" font-size="11">• Having + V3/ed (Prior action)</text>
    <text x="536" y="94" fill="#1e293b" font-size="11">• Wh- fall (➘) vs. Yes/No rise (➚)</text>
    <text x="536" y="114" fill="#1e293b" font-size="11">• Formal Letter of Enquiry</text>
    <text x="536" y="136" fill="#4f46e5" font-size="10" font-weight="600">Schedule Appointments</text>
  </svg>`,

  // UNIT 8: BECOMING INDEPENDENT
  "8": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="u8g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u8g2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u8g3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6366f1" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#4338ca" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <!-- Card 1: Core Life Skills -->
    <rect x="20" y="20" width="220" height="140" rx="14" fill="url(#u8g1)" stroke="#10b981" stroke-width="1.5"/>
    <text x="36" y="50" fill="#064e3b" font-size="13" font-weight="bold">💪 Survival Skills</text>
    <text x="36" y="74" fill="#1e293b" font-size="11">• Budgeting & saving money</text>
    <text x="36" y="94" fill="#1e293b" font-size="11">• Healthy meal preparation</text>
    <text x="36" y="114" fill="#1e293b" font-size="11">• Decision-making & safety</text>
    <text x="36" y="136" fill="#059669" font-size="10" font-weight="600">Personal Responsibility</text>

    <!-- Card 2: Self-Motivation -->
    <rect x="270" y="20" width="220" height="140" rx="14" fill="url(#u8g2)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="286" y="50" fill="#78350f" font-size="13" font-weight="bold">🎯 Time Management</text>
    <text x="286" y="74" fill="#1e293b" font-size="11">• Independent learner mindset</text>
    <text x="286" y="94" fill="#1e293b" font-size="11">• Clear daily learning goals</text>
    <text x="286" y="114" fill="#1e293b" font-size="11">• Overcome procrastination</text>
    <text x="286" y="136" fill="#d97706" font-size="10" font-weight="600">Confidence & Resilience</text>

    <!-- Card 3: Grammar - Cleft Sentences -->
    <rect x="520" y="20" width="220" height="140" rx="14" fill="url(#u8g3)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="536" y="50" fill="#312e81" font-size="13" font-weight="bold">🔦 Cleft Sentences</text>
    <text x="536" y="74" fill="#1e293b" font-size="11">• It is/was [Focus] that/who...</text>
    <text x="536" y="94" fill="#1e293b" font-size="11">• Focus on S, O, or Adverbial</text>
    <text x="536" y="114" fill="#1e293b" font-size="11">• Polite request rise (➚)</text>
    <text x="536" y="136" fill="#4f46e5" font-size="10" font-weight="600">Express Best Wishes</text>
  </svg>`,

  // REVIEW 3: UNITS 6–8
  "review-3": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="r3g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#b45309" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="720" height="140" rx="16" fill="url(#r3g)" stroke="#d97706" stroke-width="1.5"/>
    <text x="40" y="50" fill="#451a03" font-size="14" font-weight="bold">📌 REVIEW 3 (UNITS 6–8): HERITAGE PRESERVATION & PATHWAYS TO INDEPENDENCE</text>
    <line x1="40" y1="62" x2="720" y2="62" stroke="#d97706" stroke-dasharray="4 4" stroke-opacity="0.4"/>
    <text x="40" y="86" fill="#1e293b" font-size="11"><tspan font-weight="bold" fill="#b45309">Unit 6:</tspan> Cultural & natural heritage | To-infinitive clauses (the first/only to V) | Lists & commands intonation</text>
    <text x="40" y="110" fill="#1e293b" font-size="11"><tspan font-weight="bold" fill="#0284c7">Unit 7:</tspan> Academic degrees vs. vocational training | Perfect Gerund & Participle (Having + V3/ed) | Wh-/Yes-No tone</text>
    <text x="40" y="134" fill="#1e293b" font-size="11"><tspan font-weight="bold" fill="#4f46e5">Unit 8:</tspan> Self-motivation, life skills | Cleft sentences (It is/was... that/who) | Polite request tone (➚)</text>
  </svg>`,

  // UNIT 9: SOCIAL ISSUES
  "9": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="u9g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e11d48" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#9f1239" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u9g2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#0369a1" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u9g3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <!-- Card 1: Teen Social Pressures -->
    <rect x="20" y="20" width="220" height="140" rx="14" fill="url(#u9g1)" stroke="#e11d48" stroke-width="1.5"/>
    <text x="36" y="50" fill="#881337" font-size="13" font-weight="bold">🛑 School Pressures</text>
    <text x="36" y="74" fill="#1e293b" font-size="11">• Peer pressure & FOMO</text>
    <text x="36" y="94" fill="#1e293b" font-size="11">• Cyberbullying on social media</text>
    <text x="36" y="114" fill="#1e293b" font-size="11">• Anxiety & depression risks</text>
    <text x="36" y="136" fill="#be123c" font-size="10" font-weight="600">Zero Tolerance Policy</text>

    <!-- Card 2: Support & Campaigns -->
    <rect x="270" y="20" width="220" height="140" rx="14" fill="url(#u9g2)" stroke="#0284c7" stroke-width="1.5"/>
    <text x="286" y="50" fill="#082f49" font-size="13" font-weight="bold">📢 Stand Up to Bullying</text>
    <text x="286" y="74" fill="#1e293b" font-size="11">• Seek professional guidance</text>
    <text x="286" y="94" fill="#1e293b" font-size="11">• School awareness campaigns</text>
    <text x="286" y="114" fill="#1e293b" font-size="11">• Anonymous reporting channels</text>
    <text x="286" y="136" fill="#0284c7" font-size="10" font-weight="600">Empathetic Community</text>

    <!-- Card 3: Grammar - Linking Words -->
    <rect x="520" y="20" width="220" height="140" rx="14" fill="url(#u9g3)" stroke="#10b981" stroke-width="1.5"/>
    <text x="536" y="50" fill="#064e3b" font-size="13" font-weight="bold">🔗 Linking Words</text>
    <text x="536" y="74" fill="#1e293b" font-size="11">• Addition: moreover, in addition</text>
    <text x="536" y="94" fill="#1e293b" font-size="11">• Contrast: although vs. despite</text>
    <text x="536" y="114" fill="#1e293b" font-size="11">• Cause: because vs. because of</text>
    <text x="536" y="136" fill="#059669" font-size="10" font-weight="600">Disappointment & Sympathy</text>
  </svg>`,

  // UNIT 10: THE ECOSYSTEM
  "10": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="u10g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#16a34a" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#15803d" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u10g2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#0369a1" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="u10g3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ea580c" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#c2410c" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <!-- Card 1: Biodiversity & Food Chain -->
    <rect x="20" y="20" width="220" height="140" rx="14" fill="url(#u10g1)" stroke="#16a34a" stroke-width="1.5"/>
    <text x="36" y="50" fill="#14532d" font-size="13" font-weight="bold">🌿 Biodiversity Balance</text>
    <text x="36" y="74" fill="#1e293b" font-size="11">• Complex food chains & webs</text>
    <text x="36" y="94" fill="#1e293b" font-size="11">• Rich native flora and fauna</text>
    <text x="36" y="114" fill="#1e293b" font-size="11">• Protect apex predators</text>
    <text x="36" y="136" fill="#16a34a" font-size="10" font-weight="600">Ecological Equilibrium</text>

    <!-- Card 2: Endangered Habitats -->
    <rect x="270" y="20" width="220" height="140" rx="14" fill="url(#u10g2)" stroke="#0284c7" stroke-width="1.5"/>
    <text x="286" y="50" fill="#082f49" font-size="13" font-weight="bold">🐾 Species Conservation</text>
    <text x="286" y="74" fill="#1e293b" font-size="11">• Protect pangolins & langurs</text>
    <text x="286" y="94" fill="#1e293b" font-size="11">• Restore bleaching coral reefs</text>
    <text x="286" y="114" fill="#1e293b" font-size="11">• National park buffer zones</text>
    <text x="286" y="136" fill="#0284c7" font-size="10" font-weight="600">Cat Ba & Cuc Phuong</text>

    <!-- Card 3: Grammar - Compound Nouns -->
    <rect x="520" y="20" width="220" height="140" rx="14" fill="url(#u10g3)" stroke="#ea580c" stroke-width="1.5"/>
    <text x="536" y="50" fill="#7c2d12" font-size="13" font-weight="bold">🧱 Compound Nouns</text>
    <text x="536" y="74" fill="#1e293b" font-size="11">• N+N, Adj+N, V-ing+N</text>
    <text x="536" y="94" fill="#1e293b" font-size="11">• Stress on first element ('rainforest)</text>
    <text x="536" y="114" fill="#1e293b" font-size="11">• Tag question intonation</text>
    <text x="536" y="136" fill="#ea580c" font-size="10" font-weight="600">Express Likes & Dislikes</text>
  </svg>`,

  // REVIEW 4: UNITS 9–10
  "review-4": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="r4g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e11d48" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#16a34a" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="720" height="140" rx="16" fill="url(#r4g)" stroke="#e11d48" stroke-width="1.5"/>
    <text x="40" y="50" fill="#881337" font-size="14" font-weight="bold">📌 REVIEW 4 (UNITS 9–10): SOCIETY CHALLENGES & ECOSYSTEM CONSERVATION</text>
    <line x1="40" y1="62" x2="720" y2="62" stroke="#e11d48" stroke-dasharray="4 4" stroke-opacity="0.4"/>
    <text x="40" y="86" fill="#1e293b" font-size="11"><tspan font-weight="bold" fill="#e11d48">Unit 9:</tspan> Peer pressure, cyberbullying | Linking words & phrases (although vs. despite, because of, therefore)</text>
    <text x="40" y="110" fill="#1e293b" font-size="11"><tspan font-weight="bold" fill="#16a34a">Unit 10:</tspan> Ecosystem, biodiversity, food chain, habitats | Compound nouns (stress & plural) | Question tags</text>
    <text x="40" y="134" fill="#1e293b" font-size="11"><tspan font-weight="bold" fill="#2563eb">Functional skills:</tspan> Choice questions & tag intonation | Expressing disappointment/sympathy & likes/dislikes</text>
  </svg>`
};

const fileContent = `// tienganh11_diagrams.js
// 14 Responsive SVG Mindmaps / Visual Infographics for Tiếng Anh 11 Global Success
module.exports = ${JSON.stringify(diagrams, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'tienganh11_diagrams.js'), fileContent, 'utf8');
console.log('Successfully generated tienganh11_diagrams.js with 14 SVGs!');
