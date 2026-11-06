const fs = require('fs');
const path = require('path');

const diagrams = {
  // Unit 1: Family Life - Sharing Housework & Family Bonds
  "1": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="u1g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.05"/>
      </linearGradient>
      <linearGradient id="u1g2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.05"/>
      </linearGradient>
    </defs>
    <!-- Left: Sharing Housework -->
    <rect x="20" y="20" width="220" height="140" rx="14" fill="url(#u1g1)" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="130" y="48" fill="#60a5fa" font-size="13" font-weight="bold" text-anchor="middle">SHARING HOUSEWORK</text>
    <text x="40" y="75" fill="#e2e8f0" font-size="11">• Equal chore division</text>
    <text x="40" y="98" fill="#e2e8f0" font-size="11">• Breadwinner &amp; Homemaker</text>
    <text x="40" y="121" fill="#93c5fd" font-size="11">• Responsibility &amp; Gratitude</text>
    <text x="40" y="144" fill="#64748b" font-size="10">Present Simple: Habits</text>

    <!-- Arrow 1 -> Center -->
    <path d="M 245 90 L 275 90" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 2"/>
    <polygon points="275,86 283,90 275,94" fill="#38bdf8"/>

    <!-- Center: Family Dynamics -->
    <rect x="290" y="15" width="200" height="150" rx="14" fill="#1e293b" stroke="#8b5cf6" stroke-width="2"/>
    <text x="390" y="42" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">FAMILY DYNAMICS</text>
    <circle cx="390" cy="80" r="24" fill="#312e81" stroke="#a855f7" stroke-width="2"/>
    <text x="390" y="85" fill="#f8fafc" font-size="16" text-anchor="middle">🏡</text>
    <text x="390" y="120" fill="#e2e8f0" font-size="11" font-weight="600" text-anchor="middle">Strengthen Family Bonds</text>
    <text x="390" y="142" fill="#a78bfa" font-size="10" text-anchor="middle">Present Continuous: In progress</text>

    <!-- Arrow Center -> Right -->
    <path d="M 495 90 L 525 90" stroke="#10b981" stroke-width="2" stroke-dasharray="4 2"/>
    <polygon points="525,86 533,90 525,94" fill="#10b981"/>

    <!-- Right: Life Skills & Values -->
    <rect x="540" y="20" width="200" height="140" rx="14" fill="url(#u1g2)" stroke="#10b981" stroke-width="1.5"/>
    <text x="640" y="48" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">LONG-TERM BENEFITS</text>
    <text x="560" y="75" fill="#e2e8f0" font-size="11">• Essential life skills</text>
    <text x="560" y="98" fill="#e2e8f0" font-size="11">• Mutual respect &amp; care</text>
    <text x="560" y="121" fill="#6ee7b7" font-size="11">• Positive atmosphere</text>
    <text x="560" y="144" fill="#64748b" font-size="10">Emotional resilience</text>
  </svg>`,

  // Unit 2: Humans and the Environment - Eco-friendly living & Carbon Footprint
  "2": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Left: Human Impact -->
    <rect x="20" y="20" width="210" height="140" rx="14" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="125" y="48" fill="#fb7185" font-size="13" font-weight="bold" text-anchor="middle">HUMAN ACTIVITIES</text>
    <text x="40" y="75" fill="#cbd5e1" font-size="11">• Single-use plastic waste</text>
    <text x="40" y="98" fill="#cbd5e1" font-size="11">• Carbon footprint (CO₂)</text>
    <text x="40" y="121" fill="#fda4af" font-size="11">• Deforestation &amp; Energy</text>
    <text x="40" y="144" fill="#94a3b8" font-size="10">Future with Will / Be going to</text>

    <!-- Connector -->
    <path d="M 235 90 L 265 90" stroke="#f43f5e" stroke-width="2"/>
    <polygon points="265,86 273,90 265,94" fill="#f43f5e"/>

    <!-- Center: The 3Rs Principle -->
    <rect x="275" y="15" width="220" height="150" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
    <text x="385" y="42" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">GREEN LIVING (3Rs)</text>
    <circle cx="385" cy="80" r="24" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
    <text x="385" y="85" fill="#f8fafc" font-size="16" text-anchor="middle">🌱</text>
    <text x="385" y="118" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">Reduce • Reuse • Recycle</text>
    <text x="385" y="138" fill="#94a3b8" font-size="10" text-anchor="middle">Passive voice: Waste is sorted</text>

    <!-- Connector -->
    <path d="M 500 90 L 530 90" stroke="#10b981" stroke-width="2"/>
    <polygon points="530,86 538,90 530,94" fill="#10b981"/>

    <!-- Right: Sustainable Future -->
    <rect x="540" y="20" width="200" height="140" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="640" y="48" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">SUSTAINABLE FUTURE</text>
    <text x="560" y="75" fill="#cbd5e1" font-size="11">• Renewable clean energy</text>
    <text x="560" y="98" fill="#cbd5e1" font-size="11">• Eco-friendly products</text>
    <text x="560" y="121" fill="#7dd3fc" font-size="11">• Lower global emissions</text>
    <text x="560" y="144" fill="#94a3b8" font-size="10">Biodiversity protected</text>
  </svg>`,

  // Unit 3: Music - Musical Heritage & Modern Talents
  "3": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Left: Traditional / Folk Music -->
    <rect x="20" y="20" width="210" height="140" rx="14" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="125" y="48" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">FOLK &amp; TRADITIONAL</text>
    <text x="40" y="75" fill="#cbd5e1" font-size="11">• Quan họ &amp; Đờn ca tài tử</text>
    <text x="40" y="98" fill="#cbd5e1" font-size="11">• Traditional instruments</text>
    <text x="40" y="121" fill="#fde68a" font-size="11">• Cultural identity &amp; roots</text>
    <text x="40" y="144" fill="#94a3b8" font-size="10">Gerunds &amp; To-infinitives</text>

    <!-- Connector -->
    <path d="M 235 90 L 265 90" stroke="#ec4899" stroke-width="2"/>
    <polygon points="265,86 273,90 265,94" fill="#ec4899"/>

    <!-- Center: Modern Music & Shows -->
    <rect x="275" y="15" width="220" height="150" rx="14" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
    <text x="385" y="42" fill="#f472b6" font-size="13" font-weight="bold" text-anchor="middle">TALENT &amp; PERFORMANCE</text>
    <circle cx="385" cy="80" r="24" fill="#500724" stroke="#ec4899" stroke-width="2"/>
    <text x="385" y="85" fill="#f8fafc" font-size="16" text-anchor="middle">🎵</text>
    <text x="385" y="118" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">Music Competitions &amp; Idol</text>
    <text x="385" y="138" fill="#94a3b8" font-size="10" text-anchor="middle">Conjunctions: and, or, but, so</text>

    <!-- Connector -->
    <path d="M 500 90 L 530 90" stroke="#a855f7" stroke-width="2"/>
    <polygon points="530,86 538,90 530,94" fill="#a855f7"/>

    <!-- Right: Global Harmony -->
    <rect x="540" y="20" width="200" height="140" rx="14" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
    <text x="640" y="48" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">GLOBAL RESONANCE</text>
    <text x="560" y="75" fill="#cbd5e1" font-size="11">• Inspiring lyrics &amp; beats</text>
    <text x="560" y="98" fill="#cbd5e1" font-size="11">• International festivals</text>
    <text x="560" y="121" fill="#e9d5ff" font-size="11">• Connecting generations</text>
    <text x="560" y="144" fill="#94a3b8" font-size="10">Universal music language</text>
  </svg>`,

  // Review 1: Units 1-3 Synthesis
  "review-1": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="220" height="140" rx="14" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="130" y="45" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">UNIT 1: FAMILY LIFE</text>
    <text x="40" y="72" fill="#cbd5e1" font-size="11">• Present simple vs cont.</text>
    <text x="40" y="94" fill="#cbd5e1" font-size="11">• Consonant blends /br/, /kr/</text>
    <text x="40" y="116" fill="#93c5fd" font-size="11">• Sharing chores benefits</text>
    <text x="40" y="138" fill="#64748b" font-size="10">Routine &amp; Relationships</text>

    <rect x="270" y="20" width="220" height="140" rx="14" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
    <text x="380" y="45" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">UNIT 2: ENVIRONMENT</text>
    <text x="290" y="72" fill="#cbd5e1" font-size="11">• Future with will/going to</text>
    <text x="290" y="94" fill="#cbd5e1" font-size="11">• Passive voice structure</text>
    <text x="290" y="116" fill="#6ee7b7" font-size="11">• Consonant blends /kl/, /pl/</text>
    <text x="290" y="138" fill="#64748b" font-size="10">Green living &amp; Carbon</text>

    <rect x="520" y="20" width="220" height="140" rx="14" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
    <text x="630" y="45" fill="#f472b6" font-size="12" font-weight="bold" text-anchor="middle">UNIT 3: MUSIC</text>
    <text x="540" y="72" fill="#cbd5e1" font-size="11">• Gerunds &amp; to-infinitives</text>
    <text x="540" y="94" fill="#cbd5e1" font-size="11">• Compound sentences</text>
    <text x="540" y="116" fill="#fbcfe8" font-size="11">• Stress in 2-syllable words</text>
    <text x="540" y="138" fill="#64748b" font-size="10">Art, talents &amp; culture</text>
  </svg>`,

  // Unit 4: For a Better Community - Volunteering & Community Service
  "4": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="210" height="140" rx="14" fill="#1e293b" stroke="#f97316" stroke-width="1.5"/>
    <text x="125" y="48" fill="#fb923c" font-size="13" font-weight="bold" text-anchor="middle">COMMUNITY NEEDS</text>
    <text x="40" y="75" fill="#cbd5e1" font-size="11">• Disadvantaged children</text>
    <text x="40" y="98" fill="#cbd5e1" font-size="11">• Remote rural areas</text>
    <text x="40" y="121" fill="#fed7aa" font-size="11">• Food donation &amp; charity</text>
    <text x="40" y="144" fill="#94a3b8" font-size="10">Past Simple &amp; Past Cont.</text>

    <path d="M 235 90 L 265 90" stroke="#f97316" stroke-width="2"/>
    <polygon points="265,86 273,90 265,94" fill="#f97316"/>

    <rect x="275" y="15" width="220" height="150" rx="14" fill="#0f172a" stroke="#eab308" stroke-width="2"/>
    <text x="385" y="42" fill="#fde047" font-size="13" font-weight="bold" text-anchor="middle">VOLUNTEER ACTIONS</text>
    <circle cx="385" cy="80" r="24" fill="#713f12" stroke="#eab308" stroke-width="2"/>
    <text x="385" y="85" fill="#f8fafc" font-size="16" text-anchor="middle">🤝</text>
    <text x="385" y="118" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">Dedication &amp; Support</text>
    <text x="385" y="138" fill="#94a3b8" font-size="10" text-anchor="middle">Adjectives: -ed vs -ing</text>

    <path d="M 500 90 L 530 90" stroke="#22c55e" stroke-width="2"/>
    <polygon points="530,86 538,90 530,94" fill="#22c55e"/>

    <rect x="540" y="20" width="200" height="140" rx="14" fill="#1e293b" stroke="#22c55e" stroke-width="1.5"/>
    <text x="640" y="48" fill="#4ade80" font-size="13" font-weight="bold" text-anchor="middle">SOCIAL IMPACT</text>
    <text x="560" y="75" fill="#cbd5e1" font-size="11">• Inclusive community</text>
    <text x="560" y="98" fill="#cbd5e1" font-size="11">• Empathy &amp; Leadership</text>
    <text x="560" y="121" fill="#bbf7d0" font-size="11">• Sustainable changes</text>
    <text x="560" y="144" fill="#94a3b8" font-size="10">Youth empowerment</text>
  </svg>`,

  // Unit 5: Inventions - AI, 3D Printing & Breakthroughs
  "5": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="210" height="140" rx="14" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
    <text x="125" y="48" fill="#22d3ee" font-size="13" font-weight="bold" text-anchor="middle">BREAKTHROUGHS</text>
    <text x="40" y="75" fill="#cbd5e1" font-size="11">• Artificial Intelligence (AI)</text>
    <text x="40" y="98" fill="#cbd5e1" font-size="11">• 3D printing technology</text>
    <text x="40" y="121" fill="#a5f3fc" font-size="11">• Smartphones &amp; Robots</text>
    <text x="40" y="144" fill="#94a3b8" font-size="10">Present Perfect tense</text>

    <path d="M 235 90 L 265 90" stroke="#06b6d4" stroke-width="2"/>
    <polygon points="265,86 273,90 265,94" fill="#06b6d4"/>

    <rect x="275" y="15" width="220" height="150" rx="14" fill="#0f172a" stroke="#3b82f6" stroke-width="2"/>
    <text x="385" y="42" fill="#60a5fa" font-size="13" font-weight="bold" text-anchor="middle">FUNCTIONALITY</text>
    <circle cx="385" cy="80" r="24" fill="#172554" stroke="#3b82f6" stroke-width="2"/>
    <text x="385" y="85" fill="#f8fafc" font-size="16" text-anchor="middle">💡</text>
    <text x="385" y="118" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">Automation &amp; Efficiency</text>
    <text x="385" y="138" fill="#94a3b8" font-size="10" text-anchor="middle">used for V-ing / used to V</text>

    <path d="M 500 90 L 530 90" stroke="#8b5cf6" stroke-width="2"/>
    <polygon points="530,86 538,90 530,94" fill="#8b5cf6"/>

    <rect x="540" y="20" width="200" height="140" rx="14" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="640" y="48" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">HUMAN TRANSFORMATION</text>
    <text x="560" y="75" fill="#cbd5e1" font-size="11">• Faster global learning</text>
    <text x="560" y="98" fill="#cbd5e1" font-size="11">• Medical advancements</text>
    <text x="560" y="121" fill="#e9d5ff" font-size="11">• Eco-friendly devices</text>
    <text x="560" y="144" fill="#94a3b8" font-size="10">Future digital world</text>
  </svg>`,

  // Review 2: Units 4-5 Synthesis
  "review-2": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="20" width="310" height="140" rx="14" fill="#1e293b" stroke="#f97316" stroke-width="1.5"/>
    <text x="205" y="48" fill="#fb923c" font-size="13" font-weight="bold" text-anchor="middle">UNIT 4: VOLUNTEERING</text>
    <text x="75" y="75" fill="#cbd5e1" font-size="11">• Past Simple vs Past Continuous</text>
    <text x="75" y="98" fill="#cbd5e1" font-size="11">• Adjective endings (-ed, -ing, -ful, -less)</text>
    <text x="75" y="121" fill="#fed7aa" font-size="11">• Stress in 3-syllable words</text>
    <text x="75" y="144" fill="#64748b" font-size="10">Community projects &amp; letters</text>

    <rect x="400" y="20" width="310" height="140" rx="14" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
    <text x="555" y="48" fill="#22d3ee" font-size="13" font-weight="bold" text-anchor="middle">UNIT 5: INVENTIONS</text>
    <text x="425" y="75" fill="#cbd5e1" font-size="11">• Present Perfect: form and signal words</text>
    <text x="425" y="98" fill="#cbd5e1" font-size="11">• Gerunds and infinitives of purpose</text>
    <text x="425" y="121" fill="#a5f3fc" font-size="11">• Stress in compound nouns</text>
    <text x="425" y="144" fill="#64748b" font-size="10">Invention descriptions &amp; reviews</text>
  </svg>`,

  // Unit 6: Gender Equality - Equal Opportunities & Rights
  "6": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="210" height="140" rx="14" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
    <text x="125" y="48" fill="#f472b6" font-size="13" font-weight="bold" text-anchor="middle">CHALLENGES</text>
    <text x="40" y="75" fill="#cbd5e1" font-size="11">• Gender wage gap</text>
    <text x="40" y="98" fill="#cbd5e1" font-size="11">• Job stereotyping</text>
    <text x="40" y="121" fill="#fbcfe8" font-size="11">• Barriers in leadership</text>
    <text x="40" y="144" fill="#94a3b8" font-size="10">Passive with modals</text>

    <path d="M 235 90 L 265 90" stroke="#ec4899" stroke-width="2"/>
    <polygon points="265,86 273,90 265,94" fill="#ec4899"/>

    <rect x="275" y="15" width="220" height="150" rx="14" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
    <text x="385" y="42" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">EQUAL RIGHTS</text>
    <circle cx="385" cy="80" r="24" fill="#4c1d95" stroke="#a78bfa" stroke-width="2"/>
    <text x="385" y="85" fill="#f8fafc" font-size="16" text-anchor="middle">⚖️</text>
    <text x="385" y="118" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">Equal Opportunity for All</text>
    <text x="385" y="138" fill="#94a3b8" font-size="10" text-anchor="middle">should be done / must be given</text>

    <path d="M 500 90 L 530 90" stroke="#3b82f6" stroke-width="2"/>
    <polygon points="530,86 538,90 530,94" fill="#3b82f6"/>

    <rect x="540" y="20" width="200" height="140" rx="14" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="640" y="48" fill="#60a5fa" font-size="13" font-weight="bold" text-anchor="middle">PROGRESS &amp; GROWTH</text>
    <text x="560" y="75" fill="#cbd5e1" font-size="11">• Women in STEM &amp; Politics</text>
    <text x="560" y="98" fill="#cbd5e1" font-size="11">• Fair workplace policies</text>
    <text x="560" y="121" fill="#bfdbfe" font-size="11">• Prosperous balanced society</text>
    <text x="560" y="144" fill="#94a3b8" font-size="10">Eliminating discrimination</text>
  </svg>`,

  // Unit 7: Viet Nam and International Organisations - ASEAN, UN, WTO, UNICEF
  "7": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="210" height="140" rx="14" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
    <text x="125" y="48" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">VIET NAM INTEGRATION</text>
    <text x="40" y="75" fill="#cbd5e1" font-size="11">• UN member since 1977</text>
    <text x="40" y="98" fill="#cbd5e1" font-size="11">• ASEAN entry in 1995</text>
    <text x="40" y="121" fill="#fca5a5" font-size="11">• WTO accession in 2007</text>
    <text x="40" y="144" fill="#94a3b8" font-size="10">Comparative adjectives</text>

    <path d="M 235 90 L 265 90" stroke="#ef4444" stroke-width="2"/>
    <polygon points="265,86 273,90 265,94" fill="#ef4444"/>

    <rect x="275" y="15" width="220" height="150" rx="14" fill="#0f172a" stroke="#3b82f6" stroke-width="2"/>
    <text x="385" y="42" fill="#60a5fa" font-size="13" font-weight="bold" text-anchor="middle">ORGANISATIONS</text>
    <circle cx="385" cy="80" r="24" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
    <text x="385" y="85" fill="#f8fafc" font-size="16" text-anchor="middle">🌐</text>
    <text x="385" y="118" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">UNICEF • UNDP • UNESCO</text>
    <text x="385" y="138" fill="#94a3b8" font-size="10" text-anchor="middle">Superlative forms</text>

    <path d="M 500 90 L 530 90" stroke="#10b981" stroke-width="2"/>
    <polygon points="530,86 538,90 530,94" fill="#10b981"/>

    <rect x="540" y="20" width="200" height="140" rx="14" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
    <text x="640" y="48" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">GLOBAL PARTNERSHIP</text>
    <text x="560" y="75" fill="#cbd5e1" font-size="11">• Peacekeeping missions</text>
    <text x="560" y="98" fill="#cbd5e1" font-size="11">• Economic growth &amp; export</text>
    <text x="560" y="121" fill="#6ee7b7" font-size="11">• Educational scholarships</text>
    <text x="560" y="144" fill="#94a3b8" font-size="10">Multilateral diplomacy</text>
  </svg>`,

  // Unit 8: New Ways to Learn - Blended Learning & Mobile Devices
  "8": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="210" height="140" rx="14" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="125" y="48" fill="#60a5fa" font-size="13" font-weight="bold" text-anchor="middle">DIGITAL TOOLS</text>
    <text x="40" y="75" fill="#cbd5e1" font-size="11">• Smartphones &amp; Tablets</text>
    <text x="40" y="98" fill="#cbd5e1" font-size="11">• Educational learning apps</text>
    <text x="40" y="121" fill="#93c5fd" font-size="11">• Online video lectures</text>
    <text x="40" y="144" fill="#94a3b8" font-size="10">Relative clauses: which, who</text>

    <path d="M 235 90 L 265 90" stroke="#8b5cf6" stroke-width="2"/>
    <polygon points="265,86 273,90 265,94" fill="#8b5cf6"/>

    <rect x="275" y="15" width="220" height="150" rx="14" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
    <text x="385" y="42" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">BLENDED LEARNING</text>
    <circle cx="385" cy="80" r="24" fill="#3b0764" stroke="#c084fc" stroke-width="2"/>
    <text x="385" y="85" fill="#f8fafc" font-size="16" text-anchor="middle">💻</text>
    <text x="385" y="118" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">Online + Face-to-Face</text>
    <text x="385" y="138" fill="#94a3b8" font-size="10" text-anchor="middle">that, whose, where</text>

    <path d="M 500 90 L 530 90" stroke="#10b981" stroke-width="2"/>
    <polygon points="530,86 538,90 530,94" fill="#10b981"/>

    <rect x="540" y="20" width="200" height="140" rx="14" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
    <text x="640" y="48" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">SELF-PACED MASTERY</text>
    <text x="560" y="75" fill="#cbd5e1" font-size="11">• Flexible schedule &amp; pace</text>
    <text x="560" y="98" fill="#cbd5e1" font-size="11">• Autonomous research skills</text>
    <text x="560" y="121" fill="#6ee7b7" font-size="11">• Collaborative projects</text>
    <text x="560" y="144" fill="#94a3b8" font-size="10">Lifelong learning mindset</text>
  </svg>`,

  // Review 3: Units 6-8 Synthesis
  "review-3": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="220" height="140" rx="14" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
    <text x="130" y="45" fill="#f472b6" font-size="12" font-weight="bold" text-anchor="middle">UNIT 6: GENDER EQUALITY</text>
    <text x="40" y="72" fill="#cbd5e1" font-size="11">• Modals in passive voice</text>
    <text x="40" y="94" fill="#cbd5e1" font-size="11">• Stress in 2-syllable words</text>
    <text x="40" y="116" fill="#fbcfe8" font-size="11">• Equal wage &amp; opportunities</text>
    <text x="40" y="138" fill="#64748b" font-size="10">Social justice &amp; leadership</text>

    <rect x="270" y="20" width="220" height="140" rx="14" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="380" y="45" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">UNIT 7: GLOBAL ORGS</text>
    <text x="290" y="72" fill="#cbd5e1" font-size="11">• Comparative &amp; Superlative</text>
    <text x="290" y="94" fill="#cbd5e1" font-size="11">• Stress in words &gt; 3 syllables</text>
    <text x="290" y="116" fill="#93c5fd" font-size="11">• UN, ASEAN, WTO partnerships</text>
    <text x="290" y="138" fill="#64748b" font-size="10">Diplomatic collaboration</text>

    <rect x="520" y="20" width="220" height="140" rx="14" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="630" y="45" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">UNIT 8: LEARNING</text>
    <text x="540" y="72" fill="#cbd5e1" font-size="11">• Defining relative clauses</text>
    <text x="540" y="94" fill="#cbd5e1" font-size="11">• Sentence stress &amp; rhythm</text>
    <text x="540" y="116" fill="#e9d5ff" font-size="11">• Blended learning models</text>
    <text x="540" y="138" fill="#64748b" font-size="10">EdTech &amp; self-study skills</text>
  </svg>`,

  // Unit 9: Protecting the Environment - Biodiversity & Global Warming
  "9": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="210" height="140" rx="14" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
    <text x="125" y="48" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">ENVIRONMENTAL THREATS</text>
    <text x="40" y="75" fill="#cbd5e1" font-size="11">• Global warming &amp; extremes</text>
    <text x="40" y="98" fill="#cbd5e1" font-size="11">• Habitat destruction &amp; logging</text>
    <text x="40" y="121" fill="#fca5a5" font-size="11">• Endangered species risk</text>
    <text x="40" y="144" fill="#94a3b8" font-size="10">Reported Speech: Statements</text>

    <path d="M 235 90 L 265 90" stroke="#ef4444" stroke-width="2"/>
    <polygon points="265,86 273,90 265,94" fill="#ef4444"/>

    <rect x="275" y="15" width="220" height="150" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
    <text x="385" y="42" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">CONSERVATION</text>
    <circle cx="385" cy="80" r="24" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <text x="385" y="85" fill="#f8fafc" font-size="16" text-anchor="middle">🌍</text>
    <text x="385" y="118" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">National Parks &amp; Sanctuaries</text>
    <text x="385" y="138" fill="#94a3b8" font-size="10" text-anchor="middle">said that / told sb that</text>

    <path d="M 500 90 L 530 90" stroke="#3b82f6" stroke-width="2"/>
    <polygon points="530,86 538,90 530,94" fill="#3b82f6"/>

    <rect x="540" y="20" width="200" height="140" rx="14" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="640" y="48" fill="#60a5fa" font-size="13" font-weight="bold" text-anchor="middle">COLLECTIVE ACTION</text>
    <text x="560" y="75" fill="#cbd5e1" font-size="11">• Strict anti-poaching laws</text>
    <text x="560" y="98" fill="#cbd5e1" font-size="11">• Forest replanting campaigns</text>
    <text x="560" y="121" fill="#93c5fd" font-size="11">• Clean energy transition</text>
    <text x="560" y="144" fill="#94a3b8" font-size="10">Preserving our biosphere</text>
  </svg>`,

  // Unit 10: Ecotourism - Responsible Travel & Heritage Preservation
  "10": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="210" height="140" rx="14" fill="#1e293b" stroke="#14b8a6" stroke-width="1.5"/>
    <text x="125" y="48" fill="#2dd4bf" font-size="13" font-weight="bold" text-anchor="middle">ECO-TRAVEL PRINCIPLES</text>
    <text x="40" y="75" fill="#cbd5e1" font-size="11">• Leave only footprints</text>
    <text x="40" y="98" fill="#cbd5e1" font-size="11">• Respect indigenous culture</text>
    <text x="40" y="121" fill="#99f6e4" font-size="11">• Minimal environmental impact</text>
    <text x="40" y="144" fill="#94a3b8" font-size="10">Conditional Type 1 (If + Present)</text>

    <path d="M 235 90 L 265 90" stroke="#14b8a6" stroke-width="2"/>
    <polygon points="265,86 273,90 265,94" fill="#14b8a6"/>

    <rect x="275" y="15" width="220" height="150" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
    <text x="385" y="42" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">DESTINATIONS</text>
    <circle cx="385" cy="80" r="24" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <text x="385" y="85" fill="#f8fafc" font-size="16" text-anchor="middle">🧭</text>
    <text x="385" y="118" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">Cát Tiên • Phong Nha • Ba Bể</text>
    <text x="385" y="138" fill="#94a3b8" font-size="10" text-anchor="middle">Conditional Type 2 (Unreal)</text>

    <path d="M 500 90 L 530 90" stroke="#eab308" stroke-width="2"/>
    <polygon points="530,86 538,90 530,94" fill="#eab308"/>

    <rect x="540" y="20" width="200" height="140" rx="14" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/>
    <text x="640" y="48" fill="#fde047" font-size="13" font-weight="bold" text-anchor="middle">LOCAL PROSPERITY</text>
    <text x="560" y="75" fill="#cbd5e1" font-size="11">• Sustainable livelihoods</text>
    <text x="560" y="98" fill="#cbd5e1" font-size="11">• Cultural handicraft support</text>
    <text x="560" y="121" fill="#fef08a" font-size="11">• Revenue funds conservation</text>
    <text x="560" y="144" fill="#94a3b8" font-size="10">Harmonious tourism</text>
  </svg>`,

  // Review 4: Units 9-10 Synthesis
  "review-4": `<svg viewBox="0 0 760 180" class="w-full max-w-[760px] h-auto font-sans select-none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="20" width="310" height="140" rx="14" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
    <text x="205" y="48" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">UNIT 9: ENVIRONMENT PROTECTION</text>
    <text x="75" y="75" fill="#cbd5e1" font-size="11">• Reported speech (tenses, pronouns, adverbs)</text>
    <text x="75" y="98" fill="#cbd5e1" font-size="11">• Intonation in choice questions</text>
    <text x="75" y="121" fill="#fca5a5" font-size="11">• Global warming, wildlife preservation</text>
    <text x="75" y="144" fill="#64748b" font-size="10">Articles on endangered species</text>

    <rect x="400" y="20" width="310" height="140" rx="14" fill="#1e293b" stroke="#14b8a6" stroke-width="1.5"/>
    <text x="555" y="48" fill="#2dd4bf" font-size="13" font-weight="bold" text-anchor="middle">UNIT 10: ECOTOURISM</text>
    <text x="425" y="75" fill="#cbd5e1" font-size="11">• Conditional sentences Type 1 vs Type 2</text>
    <text x="425" y="98" fill="#cbd5e1" font-size="11">• Intonation in list questions</text>
    <text x="425" y="121" fill="#99f6e4" font-size="11">• Responsible tourism benefits</text>
    <text x="425" y="144" fill="#64748b" font-size="10">Eco-tour brochures and itineraries</text>
  </svg>`
};

const outputPath = path.join(__dirname, 'tienganh10_diagrams.js');
const exportContent = 'module.exports = ' + JSON.stringify(diagrams, null, 2) + ';\n';
fs.writeFileSync(outputPath, exportContent, 'utf8');
console.log('Created tienganh10_diagrams.js with 14 SVG diagrams. Size:', exportContent.length);
