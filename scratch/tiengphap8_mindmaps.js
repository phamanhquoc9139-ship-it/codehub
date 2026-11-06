// tiengphap8_mindmaps.js
// Vector SVG Concept Mindmaps cho Tiếng Pháp 8 (Unité 0 đến Unité 6)
// Bộ sách Kết nối tri thức với cuộc sống (GDPT 2018)

function getMindmapSVG(uniteId) {
  switch (uniteId) {
    case 'unite-0':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#1d4ed8" stroke="#60a5fa" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNITÉ 0: BONNE RENTRÉE !</text>
        <text x="135" y="105" text-anchor="middle" fill="#dbeafe" font-size="10" font-weight="700">Futur simple &amp; Comparaison</text>
        <text x="135" y="128" text-anchor="middle" fill="#eff6ff" font-size="8.5">Être (ser-) &bull; Avoir (aur-)</text>
        <text x="135" y="148" text-anchor="middle" fill="#93c5fd" font-size="8.5">plus / moins / autant de + nom</text>

        <path d="M 245 75 L 320 40" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#2563eb" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#2563eb"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#dbeafe" font-size="11" font-weight="800">FUTUR SIMPLE (ÊTRE &amp; AVOIR)</text>
          <text x="48" y="38" fill="#bfdbfe" font-size="9">Les bâtiments seront modernes; il y aura plus d'espaces verts et d'équipements.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#3b82f6"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#dbeafe" font-size="11" font-weight="800">COMPARAISON (SO SÁNH TÍNH TỪ &amp; SỐ LƯỢNG)</text>
          <text x="48" y="38" fill="#bfdbfe" font-size="9">plus/moins/aussi + adj + que; plus de / moins de / autant de + nom + que.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#1d4ed8" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#1d4ed8"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#dbeafe" font-size="11" font-weight="800">COLLÈGE DU FUTUR (TRƯỜNG TƯƠNG LAI)</text>
          <text x="48" y="38" fill="#bfdbfe" font-size="9">Miêu tả đổi mới: cantine bio, bibliothèque numérique, moins de devoirs.</text>
        </g>
      </svg>`;

    case 'unite-1':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#111827" stroke="#e11d48" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#9f1239" stroke="#fb7185" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNITÉ 1: FESTIVALS</text>
        <text x="135" y="105" text-anchor="middle" fill="#fecdd3" font-size="10" font-weight="700">Imparfait vs Passé composé</text>
        <text x="135" y="128" text-anchor="middle" fill="#fff1f2" font-size="8.5">Festivals d'Angoulême &amp; Avignon</text>
        <text x="135" y="148" text-anchor="middle" fill="#fda4af" font-size="8.5">Verbes pronominaux (se reposer)</text>

        <path d="M 245 75 L 320 40" stroke="#e11d48" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#e11d48" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#e11d48" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1f2937" stroke="#be123c" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#be123c"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fecdd3" font-size="11" font-weight="800">IMPARFAIT (BỐI CẢNH &amp; THÓI QUEN)</text>
          <text x="48" y="38" fill="#fda4af" font-size="9">Thân nous + ais, ais, ait, ions, iez, aient: Les rues étaient animées, il faisait beau.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1f2937" stroke="#e11d48" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#e11d48"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fecdd3" font-size="11" font-weight="800">PASSÉ COMPOSÉ (HÀNH ĐỘNG ĐƠN LẺ ĐÃ KẾT THÚC)</text>
          <text x="48" y="38" fill="#fda4af" font-size="9">Avoir/Être + Participe passé: Nous avons vu un spectacle; elle est allée au concert.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1f2937" stroke="#9f1239" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#9f1239"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fecdd3" font-size="11" font-weight="800">VERBES PRONOMINAUX (ĐỘNG TỪ ĐẠI TỪ)</text>
          <text x="48" y="38" fill="#fda4af" font-size="9">Chia với Être: Elles se sont rencontrées; nous nous sommes bien amusés.</text>
        </g>
      </svg>`;

    case 'unite-2':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0b1329" stroke="#6366f1" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#4338ca" stroke="#818cf8" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNITÉ 2: INVENTIONS</text>
        <text x="135" y="105" text-anchor="middle" fill="#e0e7ff" font-size="10" font-weight="700">Qui / Que &amp; Superlatif</text>
        <text x="135" y="128" text-anchor="middle" fill="#eef2ff" font-size="8.5">Fonctions &bull; Proportions (1 sur 6)</text>
        <text x="135" y="148" text-anchor="middle" fill="#a5b4fc" font-size="8.5">Histoire des technologies &bull; IA</text>

        <path d="M 245 75 L 320 40" stroke="#6366f1" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#6366f1" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#6366f1" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e1b4b" stroke="#4f46e5" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#4f46e5"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#e0e7ff" font-size="11" font-weight="800">PRONOMS RELATIFS (QUI VS. QUE / QU')</text>
          <text x="48" y="38" fill="#c7d2fe" font-size="9">Qui + Verbe (chủ ngữ); Que/Qu' + Sujet + Verbe (bổ ngữ trực tiếp COD).</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#6366f1"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#e0e7ff" font-size="11" font-weight="800">PROPORTIONS &amp; SUPERLATIF</text>
          <text x="48" y="38" fill="#c7d2fe" font-size="9">un quart (25%), un tiers (33%), un sur six; le/la/les plus + adjectif (le plus pratique).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e1b4b" stroke="#4338ca" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#4338ca"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#e0e7ff" font-size="11" font-weight="800">CHỨC NĂNG ĐỒ VẬT (FONCTIONS)</text>
          <text x="48" y="38" fill="#c7d2fe" font-size="9">servir à + inf; avoir pour fonction de + inf; être utilisé pour + inf.</text>
        </g>
      </svg>`;

    case 'unite-3':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#062e24" stroke="#10b981" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#047857" stroke="#34d399" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNITÉ 3: LECTURE</text>
        <text x="135" y="105" text-anchor="middle" fill="#d1fae5" font-size="10" font-weight="700">Pronoms COD &amp; COI</text>
        <text x="135" y="128" text-anchor="middle" fill="#ecfdf5" font-size="8.5">Prêter &bull; Emprunter &bull; Rendre</text>
        <text x="135" y="148" text-anchor="middle" fill="#6ee7b7" font-size="8.5">Depuis vs À partir de</text>

        <path d="M 245 75 L 320 40" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#064e3b" stroke="#059669" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#059669"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#d1fae5" font-size="11" font-weight="800">PRONOMS COMPLÉMENTS COD &amp; COI</text>
          <text x="48" y="38" fill="#a7f3d0" font-size="9">COD (le/la/les): Je le lis; COI (lui/leur đi với giới từ à): Je lui donne le livre.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#10b981"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#d1fae5" font-size="11" font-weight="800">THỜI GIAN: DEPUIS VS À PARTIR DE</text>
          <text x="48" y="38" fill="#a7f3d0" font-size="9">Depuis (từ quá khứ kéo dài đến nay); À partir de (bắt đầu có hiệu lực từ mốc thời gian).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#064e3b" stroke="#047857" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#047857"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#d1fae5" font-size="11" font-weight="800">TRAO ĐỔI SÁCH (PRÊTER, EMPRUNTER, RENDRE)</text>
          <text x="48" y="38" fill="#a7f3d0" font-size="9">Prêter qc à qn (cho mượn); Emprunter qc à (mượn từ); Rendre (trả lại đúng hẹn).</text>
        </g>
      </svg>`;

    case 'unite-4':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#1c1917" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#b45309" stroke="#fcd34d" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNITÉ 4: MANGE BIEN !</text>
        <text x="135" y="105" text-anchor="middle" fill="#fef3c7" font-size="10" font-weight="700">Semi-auxiliaires &amp; Recette</text>
        <text x="135" y="128" text-anchor="middle" fill="#fffbeb" font-size="8.5">Venir de &bull; Être en train de &bull; Aller</text>
        <text x="135" y="148" text-anchor="middle" fill="#fde68a" font-size="8.5">Demande polie &bull; Indéfinis</text>

        <path d="M 245 75 L 320 40" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#292524" stroke="#d97706" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#d97706"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fef3c7" font-size="11" font-weight="800">SEMI-AUXILIAIRES (BÁN TRỢ ĐỘNG TỪ)</text>
          <text x="48" y="38" fill="#fde68a" font-size="9">Venir de + inf (vừa mới); Être en train de + inf (đang làm); Aller + inf (sắp sửa).</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#292524" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f59e0b"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fef3c7" font-size="11" font-weight="800">DEMANDE POLIE &amp; RECETTE (MỆNH LỆNH)</text>
          <text x="48" y="38" fill="#fde68a" font-size="9">Je voudrais... / Pourriez-vous... ?; Impératif quy trình: d'abord, puis, enfin.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#292524" stroke="#b45309" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#b45309"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fef3c7" font-size="11" font-weight="800">ADJECTIFS &amp; PRONOMS INDÉFINIS</text>
          <text x="48" y="38" fill="#fde68a" font-size="9">chaque élève (tính từ) vs. chacun(e) (đại từ); plusieurs, quelques, tous/toutes.</text>
        </g>
      </svg>`;

    case 'unite-5':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#1f1322" stroke="#d946ef" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#86198f" stroke="#f0abfc" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNITÉ 5: L'ART HEUREUX</text>
        <text x="135" y="105" text-anchor="middle" fill="#fae8ff" font-size="10" font-weight="700">Opinions &amp; Connecteurs</text>
        <text x="135" y="128" text-anchor="middle" fill="#fdf4ff" font-size="8.5">Moi aussi / Moi non plus</text>
        <text x="135" y="148" text-anchor="middle" fill="#f5d0fe" font-size="8.5">Dès / Dès que &bull; Avant / Après</text>

        <path d="M 245 75 L 320 40" stroke="#d946ef" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#d946ef" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#d946ef" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#2e1065" stroke="#a21caf" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#a21caf"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fae8ff" font-size="11" font-weight="800">BÀY TỎ Ý KIẾN &amp; ĐỒNG TÌNH</text>
          <text x="48" y="38" fill="#f5d0fe" font-size="9">À mon avis, je trouve que; Moi aussi (khẳng định), Moi non plus (phủ định).</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#2e1065" stroke="#d946ef" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#d946ef"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fae8ff" font-size="11" font-weight="800">MỐC THỜI GIAN: DÈS VS. DÈS QUE</text>
          <text x="48" y="38" fill="#f5d0fe" font-size="9">Dès + nom (ngay từ mốc); Dès que + proposition (ngay khi mệnh đề diễn ra).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#2e1065" stroke="#701a75" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#701a75"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fae8ff" font-size="11" font-weight="800">TRÌNH TỰ: AVANT DE VS. APRÈS</text>
          <text x="48" y="38" fill="#f5d0fe" font-size="9">Avant de + infinitif (trước khi làm); Après + nom / après avoir + participe passé.</text>
        </g>
      </svg>`;

    case 'unite-6':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#0ea5e9" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">UNITÉ 6: EXPOSITION</text>
        <text x="135" y="105" text-anchor="middle" fill="#bae6fd" font-size="10" font-weight="700">Récit au passé &amp; Avis</text>
        <text x="135" y="128" text-anchor="middle" fill="#e0f2fe" font-size="8.5">Imparfait (décor) &bull; PC (action)</text>
        <text x="135" y="148" text-anchor="middle" fill="#7dd3fc" font-size="8.5">Chef-d'œuvre &bull; Expo immersive</text>

        <path d="M 245 75 L 320 40" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0284c7"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">PHỐI HỢP THÌ TRONG KỂ CHUYỆN (RÉCIT AU PASSÉ)</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Imparfait (bối cảnh nền, thời tiết) + Passé composé (sự kiện cụ thể diễn tiến).</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0ea5e9" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0ea5e9"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">GỢI Ý &amp; ĐÁNH GIÁ NGHỆ THUẬT</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Et si nous sortions ?; C'est un chef-d'œuvre, plein de sensibilité et d'émotion.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0369a1" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0369a1"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">GIỚI THIỆU TRIỂN LÃM (EXPOSITION)</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Exposition temporaire, immersive, espace interactif, tarif réduit, horaires.</text>
        </g>
      </svg>`;

    default:
      return '';
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getMindmapSVG };
}
