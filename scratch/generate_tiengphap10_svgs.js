const fs = require('fs');
const path = require('path');

const svgs = {
  u0: `<svg viewBox="0 0 800 220" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradU0" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e3a8a"/>
        <stop offset="50%" stop-color="#3b82f6"/>
        <stop offset="100%" stop-color="#dc2626"/>
      </linearGradient>
    </defs>
    <rect width="800" height="220" rx="16" fill="#0f172a"/>
    <rect x="20" y="20" width="760" height="180" rx="12" fill="url(#gradU0)" fill-opacity="0.15" stroke="#3b82f6" stroke-opacity="0.3"/>
    
    <g transform="translate(60, 45)">
      <circle cx="40" cy="40" r="36" fill="#3b82f6" fill-opacity="0.2" stroke="#60a5fa" stroke-width="2"/>
      <text x="40" y="47" text-anchor="middle" fill="#93c5fd" font-size="28" font-weight="bold">🏫</text>
      <text x="100" y="32" fill="#ffffff" font-size="20" font-weight="bold">BIENVENUE AU LYCÉE !</text>
      <text x="100" y="55" fill="#93c5fd" font-size="13">Hòa nhập môi trường THPT • Ôn tập A1/A2 • Giới thiệu bản thân & sở thích</text>
    </g>

    <g transform="translate(60, 125)">
      <!-- Step 1 -->
      <rect x="0" y="0" width="200" height="50" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="15" y="23" fill="#60a5fa" font-size="12" font-weight="bold">Étape 1 • Se présenter</text>
      <text x="15" y="40" fill="#cbd5e1" font-size="11">Nom, âge, nationalité, classe</text>

      <!-- Step 2 -->
      <rect x="230" y="0" width="210" height="50" rx="10" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="245" y="23" fill="#a78bfa" font-size="12" font-weight="bold">Étape 2 • Vie scolaire</text>
      <text x="245" y="40" fill="#cbd5e1" font-size="11">Emploi du temps & matières</text>

      <!-- Step 3 -->
      <rect x="470" y="0" width="210" height="50" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
      <text x="485" y="23" fill="#f87171" font-size="12" font-weight="bold">Étape 3 • Projet d'accueil</text>
      <text x="485" y="40" fill="#cbd5e1" font-size="11">Créer le profil du nouvel élève</text>
    </g>
  </svg>`,

  u1: `<svg viewBox="0 0 800 220" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="220" rx="16" fill="#0f172a"/>
    <g transform="translate(40, 30)">
      <text x="0" y="24" fill="#f43f5e" font-size="18" font-weight="bold">👗 UNITÉ 1 • UN LOOK QUI MARQUE ! (Phong cách thời trang & Nhận xét)</text>
      <text x="0" y="46" fill="#cbd5e1" font-size="12">Vêtements • Matières • Pronoms relatifs (qui / que) • Pronoms COD / COI</text>
    </g>
    <g transform="translate(40, 90)">
      <rect x="0" y="0" width="220" height="95" rx="12" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
      <text x="20" y="30" fill="#fb7185" font-size="14" font-weight="bold">👔 Vêtements & Styles</text>
      <text x="20" y="52" fill="#e2e8f0" font-size="11">• en coton, en lin, en cuir</text>
      <text x="20" y="70" fill="#e2e8f0" font-size="11">• rayé, à carreaux, uni</text>
      <text x="20" y="86" fill="#94a3b8" font-size="10">Classique, décontracté, sportif</text>

      <rect x="250" y="0" width="230" height="95" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="270" y="30" fill="#60a5fa" font-size="14" font-weight="bold">🔤 Pronoms QUI & QUE</text>
      <text x="270" y="52" fill="#e2e8f0" font-size="11">• QUI + Verbe (Sujet)</text>
      <text x="270" y="70" fill="#e2e8f0" font-size="11">• QUE/QU' + Sujet + Verbe (COD)</text>
      <text x="270" y="86" fill="#94a3b8" font-size="10">La robe QUI brille / QUE j'aime</text>

      <rect x="510" y="0" width="220" height="95" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <text x="530" y="30" fill="#34d399" font-size="14" font-weight="bold">💬 Donner une opinion</text>
      <text x="530" y="52" fill="#e2e8f0" font-size="11">• Ça te va très bien !</text>
      <text x="530" y="70" fill="#e2e8f0" font-size="11">• Je trouve ça élégant / moderne</text>
      <text x="530" y="86" fill="#94a3b8" font-size="10">Négocier & Acheter en boutique</text>
    </g>
  </svg>`,

  u2: `<svg viewBox="0 0 800 220" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="220" rx="16" fill="#0f172a"/>
    <g transform="translate(40, 30)">
      <text x="0" y="24" fill="#3b82f6" font-size="18" font-weight="bold">📚 UNITÉ 2 • LE QUOTIDIEN AU LYCÉE (Nhịp sống học đường & Kỉ luật)</text>
      <text x="0" y="46" fill="#cbd5e1" font-size="12">Règlement intérieur • Verbes modaux (devoir, falloir, pouvoir) • Expression de la cause et conséquence</text>
    </g>
    <g transform="translate(40, 90)">
      <rect x="0" y="0" width="220" height="95" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="20" y="30" fill="#60a5fa" font-size="14" font-weight="bold">⚖️ Obligation & Interdiction</text>
      <text x="20" y="52" fill="#e2e8f0" font-size="11">• Il faut + infinitif / On doit</text>
      <text x="20" y="70" fill="#e2e8f0" font-size="11">• Défense de / Interdit de</text>
      <text x="20" y="86" fill="#94a3b8" font-size="10">Éteindre les portables en classe</text>

      <rect x="250" y="0" width="230" height="95" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="270" y="30" fill="#fbbf24" font-size="14" font-weight="bold">🎯 Cause & Conséquence</text>
      <text x="270" y="52" fill="#e2e8f0" font-size="11">• Parce que / Comme / Grâce à</text>
      <text x="270" y="70" fill="#e2e8f0" font-size="11">• Donc / C'est pourquoi / Alors</text>
      <text x="270" y="86" fill="#94a3b8" font-size="10">À cause de (nguyên nhân tiêu cực)</text>

      <rect x="510" y="0" width="220" height="95" rx="12" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
      <text x="530" y="30" fill="#c084fc" font-size="14" font-weight="bold">🤝 Vie en communauté</text>
      <text x="530" y="52" fill="#e2e8f0" font-size="11">• Délégué de classe & CDI</text>
      <text x="530" y="70" fill="#e2e8f0" font-size="11">• Cantine scolaire & Clubs</text>
      <text x="530" y="86" fill="#94a3b8" font-size="10">Charte de respect et bienveillance</text>
    </g>
  </svg>`,

  u3: `<svg viewBox="0 0 800 220" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="220" rx="16" fill="#0f172a"/>
    <g transform="translate(40, 30)">
      <text x="0" y="24" fill="#06b6d4" font-size="18" font-weight="bold">📰 UNITÉ 3 • LE MONDE DES MÉDIAS (Báo chí, mạng xã hội & Tin tức)</text>
      <text x="0" y="46" fill="#cbd5e1" font-size="12">Passé composé vs Imparfait • Fait divers • Récit au passé • Vérification des sources</text>
    </g>
    <g transform="translate(40, 90)">
      <rect x="0" y="0" width="220" height="95" rx="12" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
      <text x="20" y="30" fill="#22d3ee" font-size="14" font-weight="bold">⏱️ Passé Composé</text>
      <text x="20" y="52" fill="#e2e8f0" font-size="11">• Hành động đã hoàn tất</text>
      <text x="20" y="70" fill="#e2e8f0" font-size="11">• Có mốc thời gian cụ thể</text>
      <text x="20" y="86" fill="#94a3b8" font-size="10">Hier, un accident a eu lieu</text>

      <rect x="250" y="0" width="230" height="95" rx="12" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="270" y="30" fill="#a78bfa" font-size="14" font-weight="bold">⏳ Imparfait</text>
      <text x="270" y="52" fill="#e2e8f0" font-size="11">• Bối cảnh, miêu tả hoàn cảnh</text>
      <text x="270" y="70" fill="#e2e8f0" font-size="11">• Thói quen lặp lại trong quá khứ</text>
      <text x="270" y="86" fill="#94a3b8" font-size="10">Il pleuvait et les gens marchaient</text>

      <rect x="510" y="0" width="220" height="95" rx="12" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
      <text x="530" y="30" fill="#f87171" font-size="14" font-weight="bold">🔍 Fake News & Fact-check</text>
      <text x="530" y="52" fill="#e2e8f0" font-size="11">• Sources fiables & esprit critique</text>
      <text x="530" y="70" fill="#e2e8f0" font-size="11">• À la une, titre accrocheur</text>
      <text x="530" y="86" fill="#94a3b8" font-size="10">Écrire un article de presse</text>
    </g>
  </svg>`,

  u4: `<svg viewBox="0 0 800 220" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="220" rx="16" fill="#0f172a"/>
    <g transform="translate(40, 30)">
      <text x="0" y="24" fill="#10b981" font-size="18" font-weight="bold">✈️ UNITÉ 4 • VOYAGE ET DÉCOUVERTE (Du lịch & Không gian Pháp ngữ)</text>
      <text x="0" y="46" fill="#cbd5e1" font-size="12">Pronoms Y et EN • Futur simple • Écotourisme • Géographie de la Francophonie</text>
    </g>
    <g transform="translate(40, 90)">
      <rect x="0" y="0" width="220" height="95" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <text x="20" y="30" fill="#34d399" font-size="14" font-weight="bold">📍 Pronom Y</text>
      <text x="20" y="52" fill="#e2e8f0" font-size="11">• Thay thế địa điểm: à, en, dans</text>
      <text x="20" y="70" fill="#e2e8f0" font-size="11">• Tu vas en France ? — J'y vais !</text>
      <text x="20" y="86" fill="#94a3b8" font-size="10">Thay thế: à + Chose</text>

      <rect x="250" y="0" width="230" height="95" rx="12" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
      <text x="270" y="30" fill="#22d3ee" font-size="14" font-weight="bold">📦 Pronom EN</text>
      <text x="270" y="52" fill="#e2e8f0" font-size="11">• Thay thế số lượng & de + Danh từ</text>
      <text x="270" y="70" fill="#e2e8f0" font-size="11">• Tu as des bagages ? — J'en ai 2.</text>
      <text x="270" y="86" fill="#94a3b8" font-size="10">Parler de quelque chose → En parler</text>

      <rect x="510" y="0" width="220" height="95" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="530" y="30" fill="#fbbf24" font-size="14" font-weight="bold">🧭 Futur Simple</text>
      <text x="530" y="52" fill="#e2e8f0" font-size="11">• Gốc Infinitif + -ai, -as, -a, -ons, -ez, -ont</text>
      <text x="530" y="70" fill="#e2e8f0" font-size="11">• Je visiterai, nous partirons</text>
      <text x="530" y="86" fill="#94a3b8" font-size="10">Projets de voyage & météo</text>
    </g>
  </svg>`,

  u5: `<svg viewBox="0 0 800 220" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="220" rx="16" fill="#0f172a"/>
    <g transform="translate(40, 30)">
      <text x="0" y="24" fill="#ec4899" font-size="18" font-weight="bold">🎨 UNITÉ 5 • LOISIRS ET DISTRACTIONS (Sở thích, Nghệ thuật & Thể thao)</text>
      <text x="0" y="46" fill="#cbd5e1" font-size="12">Pronoms DONT & OÙ • Comparatif & Superlatif • Cinéma, musique, sports extrêmes</text>
    </g>
    <g transform="translate(40, 90)">
      <rect x="0" y="0" width="220" height="95" rx="12" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
      <text x="20" y="30" fill="#f472b6" font-size="14" font-weight="bold">🔗 Pronom DONT</text>
      <text x="20" y="52" fill="#e2e8f0" font-size="11">• Thay bổ ngữ đi với giới từ DE</text>
      <text x="20" y="70" fill="#e2e8f0" font-size="11">• Le film DONT tout le monde parle</text>
      <text x="20" y="86" fill="#94a3b8" font-size="10">Avoir besoin de, parler de, rêver de</text>

      <rect x="250" y="0" width="230" height="95" rx="12" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="270" y="30" fill="#a78bfa" font-size="14" font-weight="bold">📊 So sánh hơn, kém, bằng</text>
      <text x="270" y="52" fill="#e2e8f0" font-size="11">• Plus ... que / Moins ... que / Aussi ... que</text>
      <text x="270" y="70" fill="#e2e8f0" font-size="11">• Meilleur (bon) / Mieux (bien)</text>
      <text x="270" y="86" fill="#94a3b8" font-size="10">Le plus passionnant des festivals</text>

      <rect x="510" y="0" width="220" height="95" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="530" y="30" fill="#60a5fa" font-size="14" font-weight="bold">🎭 Critique culturelle</text>
      <text x="530" y="52" fill="#e2e8f0" font-size="11">• Exprimer son enthousiasme</text>
      <text x="530" y="70" fill="#e2e8f0" font-size="11">• Ça vaut vraiment le coup !</text>
      <text x="530" y="86" fill="#94a3b8" font-size="10">Un chef-d'œuvre incontournable</text>
    </g>
  </svg>`,

  u6: `<svg viewBox="0 0 800 220" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="220" rx="16" fill="#0f172a"/>
    <g transform="translate(40, 30)">
      <text x="0" y="24" fill="#eab308" font-size="18" font-weight="bold">👨‍👩‍👧‍👦 UNITÉ 6 • EN FAMILLE (Gia đình, Thế hệ & Truyền thống)</text>
      <text x="0" y="46" fill="#cbd5e1" font-size="12">Voix passive • Discours indirect au présent • Relations intergénérationnelles • Fêtes de famille</text>
    </g>
    <g transform="translate(40, 90)">
      <rect x="0" y="0" width="220" height="95" rx="12" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/>
      <text x="20" y="30" fill="#fde047" font-size="14" font-weight="bold">🔄 La Voix Passive</text>
      <text x="20" y="52" fill="#e2e8f0" font-size="11">• Être + Participe passé + par / de</text>
      <text x="20" y="70" fill="#e2e8f0" font-size="11">• Le repas est préparé par grand-mère</text>
      <text x="20" y="86" fill="#94a3b8" font-size="10">Hợp giống và số với chủ ngữ mới</text>

      <rect x="250" y="0" width="230" height="95" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="270" y="30" fill="#60a5fa" font-size="14" font-weight="bold">💬 Discours Indirect</text>
      <text x="270" y="52" fill="#e2e8f0" font-size="11">• Il dit QUE / Il demande SI / CE QUE</text>
      <text x="270" y="70" fill="#e2e8f0" font-size="11">• "Viens ici" → Il me dit DE venir</text>
      <text x="270" y="86" fill="#94a3b8" font-size="10">Thay đổi đại từ nhân xưng và sở hữu</text>

      <rect x="510" y="0" width="220" height="95" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <text x="530" y="30" fill="#34d399" font-size="14" font-weight="bold">🕊️ Valeurs familiales</text>
      <text x="530" y="52" fill="#e2e8f0" font-size="11">• Entraide, respect des aînés</text>
      <text x="530" y="70" fill="#e2e8f0" font-size="11">• Famille recomposée, nucléaire</text>
      <text x="530" y="86" fill="#94a3b8" font-size="10">Résoudre un conflit de génération</text>
    </g>
  </svg>`
};

const outPath = path.join(__dirname, 'tiengphap10_svgs.json');
fs.writeFileSync(outPath, JSON.stringify(svgs, null, 2), 'utf8');
console.log('Saved SVG diagrams to scratch/tiengphap10_svgs.json');
