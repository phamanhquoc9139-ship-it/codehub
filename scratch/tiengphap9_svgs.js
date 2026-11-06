// tiengphap9_svgs.js
// 7 Bespoke Concept Mindmaps / Infographic SVGs for Tiếng Pháp 9 (Unité 0 to Unité 6)
// ViewBox: 0 0 840 210

function getUnitSVG(unitId) {
  switch (unitId) {
    case 'unite-0':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900/50 bg-gradient-to-r from-blue-50/70 via-indigo-50/60 to-sky-50/70 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="u0grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563eb" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="u0grad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>
  </defs>
  <!-- Background Accents -->
  <circle cx="100" cy="50" r="80" fill="#3b82f6" opacity="0.05" />
  <circle cx="740" cy="160" r="90" fill="#6366f1" opacity="0.05" />

  <!-- Node 1: Vacances d'été (Left) -->
  <g transform="translate(40, 30)">
    <rect width="220" height="150" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#bfdbfe" stroke-width="1.5" />
    <rect width="220" height="34" rx="16" fill="url(#u0grad1)" />
    <text x="110" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">LES VACANCES D'ÉTÉ</text>
    <circle cx="40" cy="65" r="14" fill="#dbeafe" />
    <path d="M35 68 L40 58 L45 68 Z" fill="#2563eb" />
    <text x="65" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#1e293b" class="dark:fill-slate-200">La montagne / La plage</text>
    <text x="65" y="82" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#64748b">Randonnée, baignade</text>
    <line x1="20" y1="95" x2="200" y2="95" stroke="#e2e8f0" stroke-width="1" />
    <text x="25" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="#2563eb">Qu'est-ce que tu as fait ?</text>
    <text x="25" y="132" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">Nous avons visité un musée.</text>
    <text x="25" y="148" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">Il faisait très beau.</text>
  </g>

  <!-- Central Bridge: Passé Composé vs Imparfait -->
  <g transform="translate(290, 20)">
    <rect width="260" height="170" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#93c5fd" stroke-width="2" />
    <path d="M0 0 H260 V38 H0 Z" fill="#1e40af" rx="18" />
    <text x="130" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">PASSÉ COMPOSÉ vs IMPARFAIT</text>
    
    <!-- Left Box: Passé composé -->
    <rect x="15" y="50" width="110" height="105" rx="10" fill="#eff6ff" class="dark:fill-slate-700/60" stroke="#bfdbfe" stroke-width="1" />
    <text x="70" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" font-weight="800" fill="#1d4ed8" text-anchor="middle">PASSÉ COMPOSÉ</text>
    <text x="22" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600" fill="#334155" class="dark:fill-slate-200">&bull; Hành động hoàn tất</text>
    <text x="22" y="99" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600" fill="#334155" class="dark:fill-slate-200">&bull; Sự việc nối tiếp</text>
    <text x="22" y="117" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#2563eb" font-style="italic">J'ai voyagé...</text>
    <text x="22" y="132" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#2563eb" font-style="italic">Je suis allé(e)...</text>

    <!-- Right Box: Imparfait -->
    <rect x="135" y="50" width="110" height="105" rx="10" fill="#f0fdf4" class="dark:fill-slate-700/60" stroke="#bbf7d0" stroke-width="1" />
    <text x="190" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" font-weight="800" fill="#15803d" text-anchor="middle">IMPARFAIT</text>
    <text x="142" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600" fill="#334155" class="dark:fill-slate-200">&bull; Khung cảnh, thời tiết</text>
    <text x="142" y="99" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600" fill="#334155" class="dark:fill-slate-200">&bull; Thói quen quá khứ</text>
    <text x="142" y="117" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#16a34a" font-style="italic">Il faisait beau...</text>
    <text x="142" y="132" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#16a34a" font-style="italic">On se baignait...</text>
  </g>

  <!-- Node 3: Rentrée & Phonétique (Right) -->
  <g transform="translate(580, 30)">
    <rect width="220" height="150" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#bfdbfe" stroke-width="1.5" />
    <rect width="220" height="34" rx="16" fill="url(#u0grad2)" />
    <text x="110" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">RENTREE &amp; SONS [i, y, u]</text>
    <circle cx="35" cy="65" r="14" fill="#e0f2fe" />
    <path d="M30 65 L40 60 L40 70 Z" fill="#0284c7" />
    <text x="60" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#1e293b" class="dark:fill-slate-200">Khẩu hình &amp; Âm sắc</text>
    <text x="60" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#64748b">Phân biệt [i] dẹt - [y, u] tròn môi</text>
    <line x1="20" y1="92" x2="200" y2="92" stroke="#e2e8f0" stroke-width="1" />
    <text x="25" y="112" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#0369a1">[i] : Paris, ville, ami</text>
    <text x="25" y="129" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#0369a1">[y] : musée, tu, musique</text>
    <text x="25" y="146" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#0369a1">[u] : vacances, vous, nous</text>
  </g>
</svg>`;

    case 'unite-1':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-sky-100 dark:border-sky-900/50 bg-gradient-to-r from-sky-50/70 via-blue-50/60 to-indigo-50/70 dark:from-slate-900 dark:via-sky-950/40 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="u1grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>
  </defs>
  <!-- Node 1: Métiers scientifiques -->
  <g transform="translate(30, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#bae6fd" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="url(#u1grad1)" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="800" fill="#ffffff" text-anchor="middle">MÉTIERS &amp; INVENTIONS</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#0369a1">&bull; Scientifique, chercheur/euse</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#0369a1">&bull; Physicien, chimiste, médecin</text>
    <text x="20" y="93" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">Faire une découverte, inventer</text>
    <text x="20" y="108" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">Faire des expériences, publier</text>
    <line x1="20" y1="120" x2="210" y2="120" stroke="#e0f2fe" stroke-width="1" />
    <text x="20" y="137" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" fill="#0284c7">Louis Pasteur &bull; Marie Curie</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#64748b">Alexandre Yersin &bull; Tôn Thất Tùng</text>
  </g>

  <!-- Node 2: Grammaire du but & du temps -->
  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#7dd3fc" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#0284c7" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">LE BUT ET LE TEMPS</text>
    
    <!-- But: pour / afin de -->
    <rect x="15" y="48" width="240" height="48" rx="10" fill="#f0f9ff" class="dark:fill-slate-700/60" stroke="#bae6fd" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#0369a1">POUR / AFIN DE + INFINITIF</text>
    <text x="25" y="82" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#0284c7" font-style="italic">...pour soigner les gens / afin de vérifier</text>

    <!-- Temps: depuis / pendant / il y a -->
    <rect x="15" y="104" width="240" height="78" rx="10" fill="#f8fafc" class="dark:fill-slate-700/60" stroke="#cbd5e1" stroke-width="1" />
    <text x="25" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#334155" class="dark:fill-slate-200">DEPUIS &bull; PENDANT &bull; IL Y A</text>
    <text x="25" y="138" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300"><b>Depuis:</b> Kéo dài đến hiện tại (Depuis 2 ans)</text>
    <text x="25" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300"><b>Pendant:</b> Thời lượng trọn vẹn (Pendant 2h)</text>
    <text x="25" y="166" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300"><b>Il y a:</b> Mốc quá khứ (Il y a 3 jours)</text>
  </g>

  <!-- Node 3: Phonétique & Fiche signalétique -->
  <g transform="translate(580, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#bae6fd" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="url(#u1grad1)" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="800" fill="#ffffff" text-anchor="middle">LIAISON &amp; FICHE SIGNALÉTIQUE</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#0284c7">Kỹ thuật nối âm Liaison</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">les‿amis [le.za.mi], des‿inventions</text>
    <text x="20" y="90" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#0284c7">Enchaînement vocalique</text>
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">pour‿apprendre, une grande‿école</text>
    <line x1="20" y1="118" x2="210" y2="118" stroke="#e0f2fe" stroke-width="1" />
    <text x="20" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#0369a1">PROJET : FICHE SIGNALÉTIQUE</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#64748b">Nom, nationalité, découvertes, prix</text>
  </g>
</svg>`;

    case 'unite-2':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900/50 bg-gradient-to-r from-emerald-50/70 via-teal-50/60 to-cyan-50/70 dark:from-slate-900 dark:via-emerald-950/40 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <!-- Node 1: Sports & Qualités -->
  <g transform="translate(30, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#a7f3d0" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#059669" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="800" fill="#ffffff" text-anchor="middle">SPORTS &amp; QUALITÉS</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#047857">&bull; Football, basketball, natation</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#047857">&bull; Athlétisme, judo, cyclisme</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#d1fae5" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#065f46">Phẩm chất thi đấu:</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Vitesse, endurance, souplesse</text>
    <text x="20" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Précision, réflexes, courage</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" fill="#059669">L'esprit d'équipe &bull; Coopération</text>
  </g>

  <!-- Node 2: Conditionnel présent & Pronoms Y / EN -->
  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#6ee7b7" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#047857" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">CONDITIONNEL (1) &amp; PRONOMS Y / EN</text>
    
    <!-- Conditionnel -->
    <rect x="15" y="48" width="240" height="56" rx="10" fill="#ecfdf5" class="dark:fill-slate-700/60" stroke="#a7f3d0" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#047857">RADICAL FUTUR + AIS, AIS, AIT...</text>
    <text x="25" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#065f46"><b>Lịch sự:</b> Je voudrais / Tu pourrais m'aider ?</text>
    <text x="25" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#065f46"><b>Lời khuyên:</b> Tu devrais t'échauffer.</text>

    <!-- Pronoms Y / EN -->
    <rect x="15" y="112" width="240" height="52" rx="10" fill="#f8fafc" class="dark:fill-slate-700/60" stroke="#cbd5e1" stroke-width="1" />
    <text x="25" y="128" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#334155" class="dark:fill-slate-200">PRONOMS COMPLÉMENTS Y / EN</text>
    <text x="25" y="144" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300"><b>Y:</b> à + Chose &rarr; J'y pense. (penser à)</text>
    <text x="25" y="158" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300"><b>EN:</b> de + Chose &rarr; J'en parle. (parler de)</text>
  </g>

  <!-- Node 3: Sons [ʃ, ʒ] & Affiche sportive -->
  <g transform="translate(580, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#a7f3d0" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#059669" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="800" fill="#ffffff" text-anchor="middle">SONS [ʃ, ʒ] &amp; PROJET AFFICHE</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#059669">[ʃ] : chat, chaussure, match</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#047857">[ʒ] : joueur, gymnase, judo, nager</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#d1fae5" stroke-width="1" />
    <text x="20" y="106" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#065f46">AFFICHE JOURNÉE SPORTIVE</text>
    <text x="20" y="122" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">&bull; Slogan percutant</text>
    <text x="20" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">&bull; Disciplines, horaires, lieu</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#059669">Paris 2024 &bull; Esprit olympique</text>
  </g>
</svg>`;

    case 'unite-3':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900/50 bg-gradient-to-r from-amber-50/70 via-orange-50/60 to-yellow-50/70 dark:from-slate-900 dark:via-amber-950/40 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <!-- Node 1: Guichet & Itinéraire -->
  <g transform="translate(30, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#fde68a" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#d97706" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="800" fill="#ffffff" text-anchor="middle">GUICHET &amp; ITINÉRAIRE</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#b45309">&bull; Billet aller-simple / aller-retour</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" fill="#475569" class="dark:fill-slate-300">Prendre le TGV, descendre à la gare</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#fef3c7" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#92400e">Hỏi và chỉ đường:</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Tournez à gauche / à droite</text>
    <text x="20" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Continuez tout droit, traversez</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#d97706">En face de &bull; À côté de</text>
  </g>

  <!-- Node 2: Grammaire: -able/-ible, in-/im-, Exclamatives -->
  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#fcd34d" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#b45309" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">FORMATION &amp; EXCLAMATIONS</text>
    
    <!-- Suffixes & Préfixes -->
    <rect x="15" y="48" width="240" height="56" rx="10" fill="#fffbeb" class="dark:fill-slate-700/60" stroke="#fde68a" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#b45309">-ABLE / -IBLE &amp; PRÉFIXE IN- / IM-</text>
    <text x="25" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#92400e">lire &rarr; lisible | admirer &rarr; admirable</text>
    <text x="25" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#92400e">possible &rarr; impossible | connu &rarr; inconnu</text>

    <!-- Exclamatives -->
    <rect x="15" y="112" width="240" height="52" rx="10" fill="#f8fafc" class="dark:fill-slate-700/60" stroke="#cbd5e1" stroke-width="1" />
    <text x="25" y="128" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#334155" class="dark:fill-slate-200">PHRASES EXCLAMATIVES (!)</text>
    <text x="25" y="144" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300"><b>Comme / Que:</b> Comme c'est magnifique !</text>
    <text x="25" y="158" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300"><b>Quel(le)(s):</b> Quel beau voyage ! Quelle vue !</text>
  </g>

  <!-- Node 3: Tour de France & Carnet de voyage -->
  <g transform="translate(580, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#fde68a" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#d97706" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="800" fill="#ffffff" text-anchor="middle">TOUR DE FRANCE &amp; CARNET</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#d97706">6 Expériences incontournables</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Paris, Châteaux de la Loire, Calanques</text>
    <text x="20" y="88" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Provence, Alpes, Gastronomie</text>
    <line x1="20" y1="100" x2="210" y2="100" stroke="#fef3c7" stroke-width="1" />
    <text x="20" y="118" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#92400e">PROJET: CARNET DE VOYAGE</text>
    <text x="20" y="134" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">D'abord... Ensuite... Enfin...</text>
    <text x="20" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#b45309">Voyage inoubliable &bull; Émerveillé(e)</text>
  </g>
</svg>`;

    case 'unite-4':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900/50 bg-gradient-to-r from-rose-50/70 via-pink-50/60 to-red-50/70 dark:from-slate-900 dark:via-rose-950/40 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <!-- Node 1: Cinéma & Métiers -->
  <g transform="translate(30, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#fecdd3" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#e11d48" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="800" fill="#ffffff" text-anchor="middle">CINÉMA &amp; MÉTIERS</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#be123c">&bull; Film d'animation, comédie</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#be123c">&bull; Scénario, dialogues, effets</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#ffe4e6" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#9f1239">Ai làm gì trong phim ?</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300"><b>Réalisateur:</b> Đạo diễn chỉ đạo</text>
    <text x="20" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300"><b>Scénariste:</b> Viết kịch bản lời thoại</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300"><b>Producteur:</b> Quản lý tài chính</text>
  </g>

  <!-- Node 2: Y/EN de lieu & Hyper, Super, Trop -->
  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#fb7185" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#be123c" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">PRONOMS DE LIEU &amp; EXAGÉRATION</text>
    
    <!-- Y et EN de lieu -->
    <rect x="15" y="48" width="240" height="56" rx="10" fill="#fff1f2" class="dark:fill-slate-700/60" stroke="#fecdd3" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#be123c">Y ET EN (LIEU / NƠI CHỐN)</text>
    <text x="25" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#9f1239"><b>Y (ở/đến đâu):</b> Je vais au cinéma &rarr; J'y vais.</text>
    <text x="25" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#9f1239"><b>EN (từ đâu ra):</b> Je sors du cinéma &rarr; J'en sors.</text>

    <!-- Exagération -->
    <rect x="15" y="112" width="240" height="52" rx="10" fill="#f8fafc" class="dark:fill-slate-700/60" stroke="#cbd5e1" stroke-width="1" />
    <text x="25" y="128" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#334155" class="dark:fill-slate-200">HYPER &bull; SUPER &bull; TROP (FAMILIER)</text>
    <text x="25" y="144" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">Ce film est <b>super bien</b> !</text>
    <text x="25" y="158" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">Les effets sont <b>trop beaux</b> ! / <b>hyper cool</b> !</text>
  </g>

  <!-- Node 3: Chute du NE & Festival de Cannes -->
  <g transform="translate(580, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#fecdd3" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#e11d48" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="800" fill="#ffffff" text-anchor="middle">CHUTE DU 'NE' &amp; PROJET</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#e11d48">Lược 'NE' trong khẩu ngữ:</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Je ne comprends pas &rarr; Je comprends pas</text>
    <text x="20" y="88" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Je ne sais pas &rarr; Je sais pas [ʃe.pa]</text>
    <line x1="20" y1="100" x2="210" y2="100" stroke="#ffe4e6" stroke-width="1" />
    <text x="20" y="118" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#9f1239">PORTRAIT DE PERSONNAGE</text>
    <text x="20" y="134" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Rôle, physique, moral, scènes-clés</text>
    <text x="20" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#e11d48">Frères Lumière &bull; Festival de Cannes</text>
  </g>
</svg>`;

    case 'unite-5':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900/50 bg-gradient-to-r from-violet-50/70 via-purple-50/60 to-indigo-50/70 dark:from-slate-900 dark:via-violet-950/40 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <!-- Node 1: Internet & Risques -->
  <g transform="translate(30, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#ddd6fe" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#7c3aed" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="800" fill="#ffffff" text-anchor="middle">LE MONDE DU WEB &amp; RISQUES</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#6d28d9">&bull; Internaute, connexion, compte</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#6d28d9">&bull; Moteur de recherche, réseau social</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#ede9fe" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#5b21b6">Các mối nguy hiểm số:</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Faux profil, virus, arnaque</text>
    <text x="20" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Vol de données personnelles</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" fill="#7c3aed">Temps d'écran excessif</text>
  </g>

  <!-- Node 2: Cấu trúc vô nhân xưng & Conditionnel (2) -->
  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#c4b5fd" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#6d28d9" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">CONSEILS &amp; FUTUR HYPOTHÉTIQUE</text>
    
    <!-- Impersonnel -->
    <rect x="15" y="48" width="240" height="56" rx="10" fill="#f5f3ff" class="dark:fill-slate-700/60" stroke="#ddd6fe" stroke-width="1" />
    <text x="25" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#6d28d9">STRUCTURES IMPERSONNELLES + INF</text>
    <text x="25" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#5b21b6">Il est recommandé de changer de mot de passe.</text>
    <text x="25" y="94" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#5b21b6">Il est important de rester prudent. / Il faut...</text>

    <!-- Conditionnel hypothétique -->
    <rect x="15" y="112" width="240" height="52" rx="10" fill="#f8fafc" class="dark:fill-slate-700/60" stroke="#cbd5e1" stroke-width="1" />
    <text x="25" y="128" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#334155" class="dark:fill-slate-200">CONDITIONNEL PRÉSENT : GIẢ ĐỊNH</text>
    <text x="25" y="144" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">Les robots <b>remplaceraient</b> les professeurs.</text>
    <text x="25" y="158" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#475569" class="dark:fill-slate-300">Les élèves <b>feraient</b> leurs devoirs en ligne.</text>
  </g>

  <!-- Node 3: Rythme & Dépliant de sécurité -->
  <g transform="translate(580, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#ddd6fe" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#7c3aed" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="800" fill="#ffffff" text-anchor="middle">RYTHME &amp; DÉPLIANT SÉCURITÉ</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#7c3aed">Ngắt nhịp &amp; Âm tiết</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">C'est|pra|tique (Trọng âm cuối nhịp)</text>
    <text x="20" y="90" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#6d28d9">Connecteurs logiques</text>
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">et, d'abord, ensuite, alors, parce que</text>
    <line x1="20" y1="118" x2="210" y2="118" stroke="#ede9fe" stroke-width="1" />
    <text x="20" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#5b21b6">DÉPLIANT: INTERNET PLUS SÛR</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#64748b">CNIL &bull; Safer Internet Day</text>
  </g>
</svg>`;

    case 'unite-6':
      return `
<svg viewBox="0 0 840 210" class="w-full h-auto rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900/50 bg-gradient-to-r from-indigo-50/70 via-blue-50/60 to-purple-50/70 dark:from-slate-900 dark:via-indigo-950/40 dark:to-slate-900" xmlns="http://www.w3.org/2000/svg">
  <!-- Node 1: Réseaux & Interactions -->
  <g transform="translate(30, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#c7d2fe" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#4f46e5" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="800" fill="#ffffff" text-anchor="middle">RÉSEAUX &amp; INTERACTIONS</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#4338ca">&bull; Profil, compte, mot de passe</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#4338ca">&bull; Publication, commentaire, message</text>
    <line x1="20" y1="88" x2="210" y2="88" stroke="#e0e7ff" stroke-width="1" />
    <text x="20" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700" fill="#3730a3">Hành động tương tác:</text>
    <text x="20" y="121" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Publier, partager, liker, commenter</text>
    <text x="20" y="136" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">Hỏi làm rõ: Tu peux préciser ?</text>
    <text x="20" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#4f46e5">C'est-à-dire ? / Tu peux expliquer ?</text>
  </g>

  <!-- Node 2: Les pronoms possessifs -->
  <g transform="translate(285, 15)">
    <rect width="270" height="180" rx="18" fill="#ffffff" class="dark:fill-slate-800" stroke="#a5b4fc" stroke-width="2" />
    <rect width="270" height="36" rx="18" fill="#4338ca" />
    <text x="135" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">LES PRONOMS POSSESSIFS</text>
    
    <!-- Table Grid -->
    <rect x="15" y="48" width="240" height="116" rx="10" fill="#eef2ff" class="dark:fill-slate-700/60" stroke="#c7d2fe" stroke-width="1" />
    <text x="25" y="66" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#3730a3">ĐỰC ÍT &bull; CÁI ÍT &bull; SỐ NHIỀU</text>
    <text x="25" y="82" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#4338ca"><b>1st:</b> le mien / la mienne / les miens / miennes</text>
    <text x="25" y="96" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#4338ca"><b>2nd:</b> le tien / la tienne / les tiens / tiennes</text>
    <text x="25" y="110" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#4338ca"><b>3rd:</b> le sien / la sienne / les siens / siennes</text>
    <text x="25" y="124" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#4338ca"><b>Nous:</b> le nôtre / la nôtre / les nôtres</text>
    <text x="25" y="138" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#4338ca"><b>Vous:</b> le vôtre / la vôtre / les vôtres</text>
    <text x="25" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" fill="#4338ca"><b>Ils/Elles:</b> le leur / la leur / les leurs</text>
  </g>

  <!-- Node 3: 10 Règles d'or -->
  <g transform="translate(580, 25)">
    <rect width="230" height="160" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#c7d2fe" stroke-width="1.5" />
    <rect width="230" height="34" rx="16" fill="#4f46e5" />
    <text x="115" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="800" fill="#ffffff" text-anchor="middle">10 RÈGLES D'OR &amp; PROJET</text>
    <text x="20" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#4f46e5">Quy tắc ứng xử mạng (Netiquette)</text>
    <text x="20" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">1. Réfléchir avant de poster</text>
    <text x="20" y="88" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">2. Respecter la vie privée d'autrui</text>
    <text x="20" y="102" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#475569" class="dark:fill-slate-300">3. Ne pas propager de fausses infos</text>
    <line x1="20" y1="114" x2="210" y2="114" stroke="#e0e7ff" stroke-width="1" />
    <text x="20" y="132" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#3730a3">PROJET: CHARTE DU BON USAGE</text>
    <text x="20" y="148" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="#64748b">Ngữ điệu khẳng định vs do dự</text>
  </g>
</svg>`;

    default:
      return '';
  }
}

module.exports = { getUnitSVG };
