// amnhac9_staves.js
// Dedicated SVG Sheet Music (Khuông nhạc và Nốt nhạc) generator for Grade 9 Music

const noteY = {
  'A5': 10,
  'G5': 15,
  'F5': 20, // line 5
  'E5': 25, // space 4
  'D5': 30, // line 4
  'C5': 35, // space 3
  'B4': 40, // line 3
  'Bb4': 40, // line 3 flat
  'A4': 45, // space 2
  'G4': 50, // line 2
  'F#4': 55, // space 1 sharp
  'F4': 55, // space 1
  'E4': 60, // line 1
  'D4': 65, // below line 1
  'C4': 70, // ledger line (Middle C)
  'B3': 75,
  'A3': 80  // ledger line
};

// SVG Treble Clef Path
function getTrebleClef(x = 18, y = 5) {
  return `
    <g transform="translate(${x}, ${y}) scale(0.62)">
      <!-- G Clef path -->
      <path d="M 17 62 C 16 64, 13 65, 11 64 C 9 63, 7 61, 7 58 C 7 52, 13 46, 20 46 C 28 46, 33 52, 33 60 C 33 69, 25 78, 16 80 C 13 81, 10 79, 10 76 C 10 74, 12 73, 14 73 C 18 73, 23 70, 24 64 C 25 58, 20 54, 15 54 C 11 54, 8 57, 8 61 C 8 68, 17 74, 21 73 M 19 62 L 19 16 C 19 12, 16 7, 13 7 C 11 7, 9 9, 9 11 C 9 15, 14 24, 21 34 L 21 82 C 21 89, 17 96, 12 96 C 8 96, 5 93, 5 89 C 5 86, 7 84, 9 84 C 11 84, 13 86, 12 89 C 12 90, 13 92, 14 92 C 16 92, 17 88, 17 84 Z" fill="#1e293b"/>
    </g>
  `;
}

// 5 staff lines
function getStaffLines(width = 620, startX = 10, endX = 610) {
  let lines = '';
  for (let i = 0; i < 5; i++) {
    const y = 20 + i * 10;
    lines += `<line x1="${startX}" y1="${y}" x2="${endX}" y2="${y}" stroke="#64748b" stroke-width="1.2"/>\n`;
  }
  return lines;
}

// Helper to render a note on staff
function renderNote({ x, note, type = 'quarter', lyric = '', name = '', sharp = false, flat = false, isWhite = false, stemDown = null }) {
  const y = noteY[note] || 50;
  const isDown = stemDown !== null ? stemDown : (y <= 40);
  let svg = '';

  // Ledger lines
  if (note === 'C4') {
    svg += `<line x1="${x - 10}" y1="70" x2="${x + 10}" y2="70" stroke="#64748b" stroke-width="1.3"/>`;
  } else if (note === 'A3') {
    svg += `<line x1="${x - 10}" y1="70" x2="${x + 10}" y2="70" stroke="#64748b" stroke-width="1.3"/>`;
    svg += `<line x1="${x - 10}" y1="80" x2="${x + 10}" y2="80" stroke="#64748b" stroke-width="1.3"/>`;
  } else if (note === 'A5') {
    svg += `<line x1="${x - 10}" y1="10" x2="${x + 10}" y2="10" stroke="#64748b" stroke-width="1.3"/>`;
  }

  // Accidental
  if (sharp || note.includes('#')) {
    svg += `<text x="${x - 12}" y="${y + 4.5}" font-size="12" font-weight="bold" fill="#0f172a">♯</text>`;
  } else if (flat || note.includes('b')) {
    svg += `<text x="${x - 11}" y="${y + 4}" font-size="13" font-weight="bold" fill="#0f172a">♭</text>`;
  }

  // Notehead
  if (isWhite || type === 'half' || type === 'whole') {
    svg += `<ellipse cx="${x}" cy="${y}" rx="5.5" ry="4" transform="rotate(-25 ${x} ${y})" fill="#fff" stroke="#0f172a" stroke-width="2"/>`;
  } else {
    svg += `<ellipse cx="${x}" cy="${y}" rx="5.5" ry="4" transform="rotate(-25 ${x} ${y})" fill="#0f172a"/>`;
  }

  // Stem (if not whole)
  if (type !== 'whole') {
    if (isDown) {
      svg += `<line x1="${x - 4.8}" y1="${y}" x2="${x - 4.8}" y2="${y + 26}" stroke="#0f172a" stroke-width="1.6"/>`;
      if (type === 'eighth') {
        svg += `<path d="M ${x - 4.8} ${y + 26} C ${x - 2} ${y + 22}, ${x + 2} ${y + 20}, ${x + 4} ${y + 16}" fill="none" stroke="#0f172a" stroke-width="1.8"/>`;
      }
    } else {
      svg += `<line x1="${x + 4.8}" y1="${y}" x2="${x + 4.8}" y2="${y - 26}" stroke="#0f172a" stroke-width="1.6"/>`;
      if (type === 'eighth') {
        svg += `<path d="M ${x + 4.8} ${y - 26} C ${x + 7} ${y - 22}, ${x + 9} ${y - 18}, ${x + 11} ${y - 14}" fill="none" stroke="#0f172a" stroke-width="1.8"/>`;
      }
    }
  }

  // Note Name label
  if (name) {
    svg += `<text x="${x}" y="92" text-anchor="middle" font-size="9" font-weight="bold" fill="#059669">${name}</text>`;
  }

  // Lyric label
  if (lyric) {
    svg += `<text x="${x}" y="105" text-anchor="middle" font-size="9.5" font-style="italic" fill="#334155">${lyric}</text>`;
  }

  return svg;
}

// Render beamed pair of eighth notes
function renderBeamedPair(x1, note1, name1, lyric1, x2, note2, name2, lyric2) {
  const y1 = noteY[note1] || 50;
  const y2 = noteY[note2] || 50;
  const isDown = (y1 <= 40 && y2 <= 40);
  let svg = '';

  // Render notes without stems
  svg += renderNote({ x: x1, note: note1, type: 'whole', name: name1, lyric: lyric1 });
  // re-fill notehead as solid
  svg += `<ellipse cx="${x1}" cy="${y1}" rx="5.5" ry="4" transform="rotate(-25 ${x1} ${y1})" fill="#0f172a"/>`;

  svg += renderNote({ x: x2, note: note2, type: 'whole', name: name2, lyric: lyric2 });
  svg += `<ellipse cx="${x2}" cy="${y2}" rx="5.5" ry="4" transform="rotate(-25 ${x2} ${y2})" fill="#0f172a"/>`;

  if (isDown) {
    const stemY1 = y1 + 25;
    const stemY2 = y2 + 25;
    svg += `<line x1="${x1 - 4.8}" y1="${y1}" x2="${x1 - 4.8}" y2="${stemY1}" stroke="#0f172a" stroke-width="1.6"/>`;
    svg += `<line x1="${x2 - 4.8}" y1="${y2}" x2="${x2 - 4.8}" y2="${stemY2}" stroke="#0f172a" stroke-width="1.6"/>`;
    svg += `<line x1="${x1 - 5.5}" y1="${stemY1}" x2="${x2 - 4}" y2="${stemY2}" stroke="#0f172a" stroke-width="3.2"/>`;
  } else {
    const stemY1 = y1 - 25;
    const stemY2 = y2 - 25;
    svg += `<line x1="${x1 + 4.8}" y1="${y1}" x2="${x1 + 4.8}" y2="${stemY1}" stroke="#0f172a" stroke-width="1.6"/>`;
    svg += `<line x1="${x2 + 4.8}" y1="${y2}" x2="${x2 + 4.8}" y2="${stemY2}" stroke="#0f172a" stroke-width="1.6"/>`;
    svg += `<line x1="${x1 + 4}" y1="${stemY1}" x2="${x2 + 5.5}" y2="${stemY2}" stroke="#0f172a" stroke-width="3.2"/>`;
  }

  return svg;
}

// Render a Triad chord stacked vertically on one stem
function renderTriadChord(x, root, third, fifth, chordName, type = 'half') {
  const y1 = noteY[root];
  const y3 = noteY[third];
  const y5 = noteY[fifth];
  let svg = '';

  const vnNames = {
    'C4': 'Đô', 'D4': 'Rê', 'E4': 'Mi', 'F4': 'Fa', 'F#4': 'Fa♯', 'G4': 'Sol', 'A4': 'La', 'B4': 'Si',
    'A3': 'La', 'B3': 'Si', 'C5': 'Đô', 'D5': 'Rê', 'E5': 'Mi', 'F5': 'Fa', 'G5': 'Sol'
  };

  // Ledger line if root is C4 or A3
  if (root === 'C4') {
    svg += `<line x1="${x - 12}" y1="70" x2="${x + 12}" y2="70" stroke="#64748b" stroke-width="1.3"/>`;
  } else if (root === 'A3') {
    svg += `<line x1="${x - 12}" y1="70" x2="${x + 12}" y2="70" stroke="#64748b" stroke-width="1.3"/>`;
    svg += `<line x1="${x - 12}" y1="80" x2="${x + 12}" y2="80" stroke="#64748b" stroke-width="1.3"/>`;
  }

  // 3 stacked ellipses
  const isWhite = (type === 'half' || type === 'whole');
  const fill = isWhite ? '#fff' : '#0f172a';
  const stroke = isWhite ? 'stroke="#0f172a" stroke-width="2"' : '';

  svg += `<ellipse cx="${x}" cy="${y1}" rx="5.5" ry="4" transform="rotate(-25 ${x} ${y1})" fill="${fill}" ${stroke}/>`;
  svg += `<ellipse cx="${x}" cy="${y3}" rx="5.5" ry="4" transform="rotate(-25 ${x} ${y3})" fill="${fill}" ${stroke}/>`;
  svg += `<ellipse cx="${x}" cy="${y5}" rx="5.5" ry="4" transform="rotate(-25 ${x} ${y5})" fill="${fill}" ${stroke}/>`;

  // Stem
  svg += `<line x1="${x + 4.8}" y1="${y1}" x2="${x + 4.8}" y2="${y5 - 20}" stroke="#0f172a" stroke-width="1.6"/>`;

  // Chord symbol above staff
  svg += `<text x="${x}" y="12" text-anchor="middle" font-size="12" font-weight="900" fill="#047857">${chordName}</text>`;
  // Vietnamese note names below
  const noteNamesStr = `${vnNames[root] || root} – ${vnNames[third] || third} – ${vnNames[fifth] || fifth}`;
  svg += `<text x="${x}" y="95" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a">${noteNamesStr}</text>`;

  return svg;
}

// Wrapper for Staff container
function wrapStaffCard({ title, subtitle, tempo = 'Moderato', timeSig = '2/4', audioId, svgContent, width = 640, height = 135 }) {
  return `
    <div class="my-4 p-4 rounded-2xl bg-amber-50/40 dark:bg-slate-900/80 border border-amber-200/80 dark:border-slate-700 shadow-sm transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-amber-100 dark:border-slate-800">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 mr-2">
            <i class="fa-solid fa-file-audio"></i> Bản nhạc chuẩn
          </span>
          <strong class="text-xs sm:text-sm text-gray-900 dark:text-white font-bold">${title}</strong>
          ${subtitle ? `<span class="text-xs text-gray-500 dark:text-gray-400 ml-2">(${subtitle})</span>` : ''}
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[11px] font-semibold text-gray-500 dark:text-gray-400 italic">
            Tempo: ${tempo} • Nhịp ${timeSig}
          </span>
          ${audioId ? `
            <button type="button" onclick="playStaffAudio('${audioId}')" class="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-sm">
              <i class="fa-solid fa-volume-high"></i> Nghe nốt
            </button>
          ` : ''}
        </div>
      </div>
      <div class="overflow-x-auto">
        <svg viewBox="0 0 ${width} ${height}" class="w-full max-w-3xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          ${svgContent}
        </svg>
      </div>
    </div>
  `;
}

// ==========================================
// 16 LESSON SHEET MUSIC GENERATORS
// ==========================================

const amnhac9Staves = {
  // Bài 1: Đọc nhạc số 1 (Chiếc cầu Luân Đôn) & Gam C + Trục gam
  bai1: wrapStaffCard({
    title: 'BÀI ĐỌC NHẠC SỐ 1 (Giai điệu Dân ca Anh: Chiếc cầu Luân Đôn)',
    subtitle: 'Giọng Đô trưởng, nhịp 2/4 rộn rã, trong sáng',
    tempo: 'Allegretto (Hơi nhanh)',
    timeSig: '2/4',
    audioId: 'staff-bai1',
    width: 630,
    height: 125,
    svgContent: `
      <!-- Staff lines -->
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      
      <!-- Time signature 2/4 -->
      <text x="48" y="38" font-size="14" font-weight="bold" fill="#0f172a">2</text>
      <text x="48" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      <!-- Measure 1: Sol La Sol Fa (4 eighth notes) -->
      ${renderBeamedPair(75, 'G4', 'Sol', 'Lon-', 100, 'A4', 'La', 'don')}
      ${renderBeamedPair(125, 'G4', 'Sol', 'bridge', 150, 'F4', 'Fa', 'is')}
      <line x1="172" y1="20" x2="172" y2="60" stroke="#475569" stroke-width="1.3"/>
      
      <!-- Measure 2: Mi Fa Sol (2 eighths + 1 quarter) -->
      ${renderBeamedPair(195, 'E4', 'Mi', 'fal-', 220, 'F4', 'Fa', 'ling')}
      ${renderNote({ x: 250, note: 'G4', type: 'quarter', name: 'Sol', lyric: 'down' })}
      <line x1="280" y1="20" x2="280" y2="60" stroke="#475569" stroke-width="1.3"/>
      
      <!-- Measure 3: Re Mi Fa -->
      ${renderBeamedPair(305, 'D4', 'Rê', 'fal-', 330, 'E4', 'Mi', 'ling')}
      ${renderNote({ x: 360, note: 'F4', type: 'quarter', name: 'Fa', lyric: 'down' })}
      <line x1="390" y1="20" x2="390" y2="60" stroke="#475569" stroke-width="1.3"/>
      
      <!-- Measure 4: Mi Fa Sol -->
      ${renderBeamedPair(415, 'E4', 'Mi', 'fal-', 440, 'F4', 'Fa', 'ling')}
      ${renderNote({ x: 470, note: 'G4', type: 'quarter', name: 'Sol', lyric: 'down' })}
      <line x1="500" y1="20" x2="500" y2="60" stroke="#475569" stroke-width="1.3"/>
      
      <!-- Measure 5: Re Sol Mi Do (Kêt) -->
      ${renderNote({ x: 525, note: 'D4', type: 'quarter', name: 'Rê', lyric: 'my' })}
      ${renderNote({ x: 555, note: 'G4', type: 'quarter', name: 'Sol', lyric: 'fair' })}
      <line x1="580" y1="20" x2="580" y2="60" stroke="#475569" stroke-width="1.3"/>
      ${renderNote({ x: 602, note: 'C4', type: 'half', name: 'Đô', lyric: 'lady' })}
      
      <!-- Final Double Bar line -->
      <line x1="616" y1="20" x2="616" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3.5"/>
    `
  }),

  // Bài 2: Sơ lược về Quãng & Ca khúc "Đường chúng ta đi"
  bai2: wrapStaffCard({
    title: 'HỆ THỐNG CÁC QUÃNG ÂM CƠ BẢN TRÊN KHUÔNG NHẠC TỪ NỐT ĐÔ (C4)',
    subtitle: 'Quãng 1Đ, 2T, 3T, 4Đ, 5Đ, 6T, 7T, 8Đ chuẩn xác cao độ',
    tempo: 'Adagio (Chậm rãi, rõ ràng)',
    timeSig: '4/4',
    audioId: 'staff-bai2',
    width: 630,
    height: 125,
    svgContent: `
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      
      <text x="48" y="38" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      <text x="48" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      <!-- Quãng 1 Đúng: C4 - C4 -->
      ${renderNote({ x: 75, note: 'C4', type: 'quarter', name: 'Đô' })}
      ${renderNote({ x: 100, note: 'C4', type: 'quarter', name: 'Đô', lyric: 'Quãng 1Đ' })}
      <line x1="125" y1="20" x2="125" y2="60" stroke="#94a3b8" stroke-width="1"/>
      
      <!-- Quãng 2 Trưởng: C4 - D4 (1 cung) -->
      ${renderNote({ x: 145, note: 'C4', type: 'quarter', name: 'Đô' })}
      ${renderNote({ x: 170, note: 'D4', type: 'quarter', name: 'Rê', lyric: 'Quãng 2T' })}
      <line x1="195" y1="20" x2="195" y2="60" stroke="#94a3b8" stroke-width="1"/>
      
      <!-- Quãng 3 Trưởng: C4 - E4 (2 cung) -->
      ${renderNote({ x: 215, note: 'C4', type: 'quarter', name: 'Đô' })}
      ${renderNote({ x: 240, note: 'E4', type: 'quarter', name: 'Mi', lyric: 'Quãng 3T (2c)' })}
      <line x1="270" y1="20" x2="270" y2="60" stroke="#94a3b8" stroke-width="1"/>
      
      <!-- Quãng 4 Đúng: C4 - F4 (2.5 cung) -->
      ${renderNote({ x: 290, note: 'C4', type: 'quarter', name: 'Đô' })}
      ${renderNote({ x: 315, note: 'F4', type: 'quarter', name: 'Fa', lyric: 'Quãng 4Đ' })}
      <line x1="345" y1="20" x2="345" y2="60" stroke="#94a3b8" stroke-width="1"/>
      
      <!-- Quãng 5 Đúng: C4 - G4 (3.5 cung) -->
      ${renderNote({ x: 365, note: 'C4', type: 'quarter', name: 'Đô' })}
      ${renderNote({ x: 390, note: 'G4', type: 'quarter', name: 'Sol', lyric: 'Quãng 5Đ' })}
      <line x1="420" y1="20" x2="420" y2="60" stroke="#94a3b8" stroke-width="1"/>
      
      <!-- Quãng 6 Trưởng: C4 - A4 (4.5 cung) -->
      ${renderNote({ x: 440, note: 'C4', type: 'quarter', name: 'Đô' })}
      ${renderNote({ x: 465, note: 'A4', type: 'quarter', name: 'La', lyric: 'Quãng 6T' })}
      <line x1="495" y1="20" x2="495" y2="60" stroke="#94a3b8" stroke-width="1"/>
      
      <!-- Quãng 8 Đúng: C4 - C5 (6 cung) -->
      ${renderNote({ x: 520, note: 'C4', type: 'quarter', name: 'Đô1' })}
      ${renderNote({ x: 550, note: 'C5', type: 'quarter', name: 'Đô2', lyric: 'Quãng 8Đ' })}
      
      <!-- Double bar -->
      <line x1="590" y1="20" x2="590" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="594" y1="20" x2="594" y2="60" stroke="#0f172a" stroke-width="3.5"/>
    `
  }),

  // Bài 3: Hát bè "Bảy sắc cầu vồng" (Vũ Trọng Tường) - Hệ thống 2 Khuông nhạc chuyên nghiệp
  bai3: wrapStaffCard({
    title: 'NÉT NHẠC HÁT BÈ: BẢY SẮC CẦU VỒNG (Vũ Trọng Tường)',
    subtitle: 'Hệ thống 2 khuông nhạc hát bè: Bè 1 (Soprano) & Bè 2 (Alto) song song chuẩn mực',
    tempo: 'Moderato con brio',
    timeSig: '2/4',
    audioId: 'staff-bai3',
    width: 630,
    height: 205,
    svgContent: `
      <!-- Vạch hệ thống nối liền 2 khuông nhạc ở đầu và cuối -->
      <line x1="10" y1="20" x2="10" y2="155" stroke="#0f172a" stroke-width="2"/>
      <path d="M 10 20 C 5 45, 5 65, 2 87.5 C 5 110, 5 130, 10 155" fill="none" stroke="#0f172a" stroke-width="2.5"/>

      <!-- ==================== KHUÔNG 1: BÈ 1 (SOPRANO) ==================== -->
      <text x="15" y="15" font-size="11" font-weight="bold" fill="#059669">Bè 1: Giai điệu chính (Giọng Nữ cao / Nam cao - Soprano)</text>
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      
      <text x="48" y="38" font-size="14" font-weight="bold" fill="#0f172a">2</text>
      <text x="48" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      <!-- Measure 1: Sol Sol -->
      ${renderNote({ x: 95, note: 'G4', type: 'quarter', name: 'Sol', lyric: 'Mưa' })}
      ${renderNote({ x: 140, note: 'G4', type: 'quarter', name: 'Sol', lyric: 'vừa' })}
      <line x1="175" y1="20" x2="175" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 2: Do5 Do5 -->
      ${renderNote({ x: 210, note: 'C5', type: 'quarter', name: 'Đô', lyric: 'tạnh' })}
      ${renderNote({ x: 255, note: 'C5', type: 'quarter', name: 'Đô', lyric: 'nắng' })}
      <line x1="290" y1="20" x2="290" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 3: La Si Do -->
      ${renderBeamedPair(320, 'A4', 'La', 'lên', 355, 'B4', 'Si', 'cầu')}
      ${renderNote({ x: 400, note: 'C5', type: 'quarter', name: 'Đô', lyric: 'vồng' })}
      <line x1="440" y1="20" x2="440" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 4: Sol (trắng) -->
      ${renderNote({ x: 485, note: 'G4', type: 'half', name: 'Sol', lyric: 'lung linh bay xa...', isWhite: true })}
      
      <!-- Double bar khuông 1 -->
      <line x1="616" y1="20" x2="616" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3.5"/>

      <!-- ==================== KHUÔNG 2: BÈ 2 (ALTO) ==================== -->
      <g transform="translate(0, 95)">
        <text x="15" y="15" font-size="11" font-weight="bold" fill="#0284c7">Bè 2: Bè hoà âm (Giọng Nữ trầm / Nam trầm - Alto)</text>
        ${getStaffLines(630, 10, 620)}
        ${getTrebleClef(15, 6)}
        
        <text x="48" y="38" font-size="14" font-weight="bold" fill="#0f172a">2</text>
        <text x="48" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
        
        <!-- Measure 1: Mi Mi -->
        ${renderNote({ x: 95, note: 'E4', type: 'quarter', name: 'Mi', lyric: 'Mưa' })}
        ${renderNote({ x: 140, note: 'E4', type: 'quarter', name: 'Mi', lyric: 'vừa' })}
        <line x1="175" y1="20" x2="175" y2="60" stroke="#64748b" stroke-width="1.3"/>
        
        <!-- Measure 2: Sol Sol -->
        ${renderNote({ x: 210, note: 'G4', type: 'quarter', name: 'Sol', lyric: 'tạnh' })}
        ${renderNote({ x: 255, note: 'G4', type: 'quarter', name: 'Sol', lyric: 'nắng' })}
        <line x1="290" y1="20" x2="290" y2="60" stroke="#64748b" stroke-width="1.3"/>
        
        <!-- Measure 3: Fa Sol La -->
        ${renderBeamedPair(320, 'F4', 'Fa', 'lên', 355, 'G4', 'Sol', 'cầu')}
        ${renderNote({ x: 400, note: 'A4', type: 'quarter', name: 'La', lyric: 'vồng' })}
        <line x1="440" y1="20" x2="440" y2="60" stroke="#64748b" stroke-width="1.3"/>
        
        <!-- Measure 4: Mi (trắng) -->
        ${renderNote({ x: 485, note: 'E4', type: 'half', name: 'Mi', lyric: 'lung linh bay xa...', isWhite: true })}
        
        <!-- Double bar khuông 2 -->
        <line x1="616" y1="20" x2="616" y2="60" stroke="#0f172a" stroke-width="1.2"/>
        <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3.5"/>
      </g>
    `
  }),

  // Bài 4: Nhạc cụ "Vui đến trường - Happy School"
  bai4: wrapStaffCard({
    title: 'BÀI TẬP RECORDER & KÈN PHÍM: VUI ĐẾN TRƯỜNG (HAPPY SCHOOL)',
    subtitle: 'Luyện ngón bấm liên hoàn các nốt Đô, Rê, Mi, Fa, Sol, La, Si',
    tempo: 'Allegro moderato',
    timeSig: '2/4',
    audioId: 'staff-bai4',
    width: 630,
    height: 125,
    svgContent: `
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      
      <text x="48" y="38" font-size="14" font-weight="bold" fill="#0f172a">2</text>
      <text x="48" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      <!-- Measure 1: Sol Sol Mi Fa -->
      ${renderBeamedPair(75, 'G4', 'Sol', '1', 100, 'G4', 'Sol', '2')}
      ${renderBeamedPair(125, 'E4', 'Mi', '3', 150, 'F4', 'Fa', '4')}
      <line x1="175" y1="20" x2="175" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 2: Sol La Sol -->
      ${renderBeamedPair(200, 'G4', 'Sol', '', 225, 'A4', 'La', '')}
      ${renderNote({ x: 255, note: 'G4', type: 'quarter', name: 'Sol' })}
      <line x1="285" y1="20" x2="285" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 3: Fa Fa Re Mi -->
      ${renderBeamedPair(310, 'F4', 'Fa', '', 335, 'F4', 'Fa', '')}
      ${renderBeamedPair(360, 'D4', 'Rê', '', 385, 'E4', 'Mi', '')}
      <line x1="410" y1="20" x2="410" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 4: Fa Sol Fa Re Do -->
      ${renderBeamedPair(435, 'F4', 'Fa', '', 460, 'G4', 'Sol', '')}
      ${renderNote({ x: 490, note: 'F4', type: 'quarter', name: 'Fa' })}
      <line x1="520" y1="20" x2="520" y2="60" stroke="#64748b" stroke-width="1.3"/>
      ${renderNote({ x: 555, note: 'C4', type: 'half', name: 'Đô', lyric: 'Vui tới trường!' })}
      
      <!-- Double bar -->
      <line x1="600" y1="20" x2="600" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="604" y1="20" x2="604" y2="60" stroke="#0f172a" stroke-width="3.5"/>
    `
  }),

  // Bài 5: Nét nhạc "Tháng năm học trò" (Nguyễn Đức Trung)
  bai5: wrapStaffCard({
    title: 'NÉT NHẠC CHỦ ĐỀ: THÁNG NĂM HỌC TRÒ (Nguyễn Đức Trung)',
    subtitle: 'Giai điệu da diết, trong sáng, ngập tràn kỉ niệm tuổi hoa niên',
    tempo: 'Andantino cantabile',
    timeSig: '2/4',
    audioId: 'staff-bai5',
    width: 630,
    height: 125,
    svgContent: `
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      
      <text x="48" y="38" font-size="14" font-weight="bold" fill="#0f172a">2</text>
      <text x="48" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      <!-- Measure 1: Mi Sol La Do -->
      ${renderBeamedPair(80, 'E4', 'Mi', 'Tháng', 110, 'G4', 'Sol', 'năm')}
      <line x1="140" y1="20" x2="140" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 2: La Do -->
      ${renderBeamedPair(165, 'A4', 'La', 'học', 195, 'C5', 'Đô', 'trò')}
      <line x1="230" y1="20" x2="230" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 3: Si La Sol Mi -->
      ${renderBeamedPair(255, 'B4', 'Si', 'như', 285, 'A4', 'La', 'trang')}
      ${renderBeamedPair(315, 'G4', 'Sol', 'sách', 345, 'E4', 'Mi', 'mở')}
      <line x1="375" y1="20" x2="375" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 4: Re Fa Sol La -->
      ${renderBeamedPair(400, 'D4', 'Rê', 'ngút', 430, 'F4', 'Fa', 'ngàn')}
      ${renderNote({ x: 465, note: 'G4', type: 'quarter', name: 'Sol', lyric: 'mơ' })}
      <line x1="500" y1="20" x2="500" y2="60" stroke="#64748b" stroke-width="1.3"/>
      ${renderNote({ x: 540, note: 'A4', type: 'half', name: 'La', lyric: 'ước...' })}
      
      <!-- Double bar -->
      <line x1="600" y1="20" x2="600" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="604" y1="20" x2="604" y2="60" stroke="#0f172a" stroke-width="3.5"/>
    `
  }),

  // Bài 6: Đọc nhạc số 2 và Dịch giọng từ C lên D
  bai6: wrapStaffCard({
    title: 'BÀI ĐỌC NHẠC SỐ 2 & MINH HOẠ DỊCH GIỌNG TỪ ĐÔ TRƯỞNG LÊN RÊ TRƯỞNG',
    subtitle: 'Khuông trên: Đô trưởng (Không dấu hoá) • Khuông dưới: Rê trưởng (+1 cung, hoá biểu 2 dấu thăng: F# & C#)',
    tempo: 'Moderato',
    timeSig: '2/4',
    audioId: 'staff-bai6',
    width: 630,
    height: 190,
    svgContent: `
      <!-- KHUÔNG 1: C MAJOR -->
      <text x="15" y="16" font-size="11" font-weight="bold" fill="#0369a1">Khuông 1: Giọng Đô trưởng (C major) — Không có dấu hoá</text>
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      <text x="48" y="38" font-size="14" font-weight="bold" fill="#0f172a">2</text>
      <text x="48" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      ${renderNote({ x: 80, note: 'C4', type: 'quarter', name: 'Đô' })}
      ${renderNote({ x: 120, note: 'E4', type: 'quarter', name: 'Mi' })}
      <line x1="155" y1="20" x2="155" y2="60" stroke="#64748b" stroke-width="1.3"/>
      ${renderBeamedPair(180, 'G4', 'Sol', '', 210, 'A4', 'La', '')}
      <line x1="240" y1="20" x2="240" y2="60" stroke="#64748b" stroke-width="1.3"/>
      ${renderNote({ x: 265, note: 'G4', type: 'quarter', name: 'Sol' })}
      ${renderNote({ x: 305, note: 'E4', type: 'quarter', name: 'Mi' })}
      <line x1="340" y1="20" x2="340" y2="60" stroke="#64748b" stroke-width="1.3"/>
      ${renderNote({ x: 375, note: 'C4', type: 'half', name: 'Đô' })}
      <line x1="430" y1="20" x2="430" y2="60" stroke="#0f172a" stroke-width="3"/>
      
      <!-- KHUÔNG 2: D MAJOR (translate y=85) -->
      <g transform="translate(0, 85)">
        <text x="15" y="16" font-size="11" font-weight="bold" fill="#4338ca">Khuông 2: Dịch giọng lên Rê trưởng (D major) — Có 2 dấu thăng: F# & C#</text>
        ${getStaffLines(630, 10, 620)}
        ${getTrebleClef(15, 6)}
        <!-- Key signature 2 sharps: F# line 5 (y=20), C# space 3 (y=35) -->
        <text x="42" y="24" font-size="13" font-weight="bold" fill="#4338ca">♯</text>
        <text x="50" y="38" font-size="13" font-weight="bold" fill="#4338ca">♯</text>
        
        <text x="62" y="38" font-size="14" font-weight="bold" fill="#0f172a">2</text>
        <text x="62" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
        
        ${renderNote({ x: 95, note: 'D4', type: 'quarter', name: 'Rê' })}
        ${renderNote({ x: 135, note: 'F#4', type: 'quarter', name: 'Fa#' })}
        <line x1="170" y1="20" x2="170" y2="60" stroke="#64748b" stroke-width="1.3"/>
        ${renderBeamedPair(195, 'A4', 'La', '', 225, 'B4', 'Si', '')}
        <line x1="255" y1="20" x2="255" y2="60" stroke="#64748b" stroke-width="1.3"/>
        ${renderNote({ x: 280, note: 'A4', type: 'quarter', name: 'La' })}
        ${renderNote({ x: 320, note: 'F#4', type: 'quarter', name: 'Fa#' })}
        <line x1="355" y1="20" x2="355" y2="60" stroke="#64748b" stroke-width="1.3"/>
        ${renderNote({ x: 390, note: 'D4', type: 'half', name: 'Rê' })}
        <line x1="445" y1="20" x2="445" y2="60" stroke="#0f172a" stroke-width="3"/>
      </g>
    `
  }),

  // Bài 7: Dân ca Nam Bộ "Lí ngựa ô"
  bai7: wrapStaffCard({
    title: 'NÉT NHẠC DÂN CA NAM BỘ: LÍ NGỰA Ô',
    subtitle: 'Thang âm ngũ cung phương Nam (Hò - Xự - Xang - Xê - Cống: Đô - Rê - Fa - Sol - La)',
    tempo: 'Allegro vivace (Rộn rã, náo nức)',
    timeSig: '2/4',
    audioId: 'staff-bai7',
    width: 630,
    height: 125,
    svgContent: `
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      
      <text x="48" y="38" font-size="14" font-weight="bold" fill="#0f172a">2</text>
      <text x="48" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      <!-- Measure 1: Sol La Do Re -->
      ${renderBeamedPair(80, 'G4', 'Sol', 'Khớp', 105, 'A4', 'La', 'con')}
      ${renderBeamedPair(130, 'C5', 'Đô', 'ngựa', 155, 'D5', 'Rê', 'ô')}
      <line x1="180" y1="20" x2="180" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 2: Do La Sol -->
      ${renderBeamedPair(205, 'C5', 'Đô', 'ngựa', 230, 'A4', 'La', 'ô')}
      ${renderNote({ x: 260, note: 'G4', type: 'quarter', name: 'Sol', lyric: 'anh' })}
      <line x1="290" y1="20" x2="290" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 3: Sol A C D -->
      ${renderBeamedPair(315, 'G4', 'Sol', 'khớp', 340, 'A4', 'La', 'cái')}
      ${renderBeamedPair(365, 'C5', 'Đô', 'lọng', 390, 'D5', 'Rê', 'vàng')}
      <line x1="415" y1="20" x2="415" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 4: Do La Sol -->
      ${renderBeamedPair(440, 'C5', 'Đô', 'xứ', 465, 'A4', 'La', 'sở')}
      ${renderNote({ x: 495, note: 'G4', type: 'quarter', name: 'Sol', lyric: 'anh' })}
      <line x1="525" y1="20" x2="525" y2="60" stroke="#64748b" stroke-width="1.3"/>
      ${renderNote({ x: 560, note: 'C4', type: 'half', name: 'Đô', lyric: 'đi...' })}
      
      <!-- Double bar -->
      <line x1="600" y1="20" x2="600" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="604" y1="20" x2="604" y2="60" stroke="#0f172a" stroke-width="3.5"/>
    `
  }),

  // Bài 8: Nhã nhạc "Lưu thuỷ - Kim tiền" & Nốt Si giáng (Bb)
  bai8: wrapStaffCard({
    title: 'BÀI TẬP NHẠC CỤ & NHÃ NHẠC: LƯU THUỶ – KIM TIỀN (Có Nốt Si Giáng Bb)',
    subtitle: 'Nốt Si giáng (Bb4) nằm trên dòng kẻ thứ 3 của khuông nhạc',
    tempo: 'Moderato maestoso',
    timeSig: '2/4',
    audioId: 'staff-bai8',
    width: 630,
    height: 125,
    svgContent: `
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      
      <!-- Key signature 1 Flat (Bb on line 3 y=40) -->
      <text x="44" y="44" font-size="14" font-weight="bold" fill="#0d9488">♭</text>
      
      <text x="56" y="38" font-size="14" font-weight="bold" fill="#0f172a">2</text>
      <text x="56" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      <!-- Measure 1: Do Re Fa Sol -->
      ${renderBeamedPair(85, 'C4', 'Đô', '', 110, 'D4', 'Rê', '')}
      ${renderBeamedPair(135, 'F4', 'Fa', '', 160, 'G4', 'Sol', '')}
      <line x1="185" y1="20" x2="185" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 2: Bb Do Bb Sol (Có nốt Si giáng trên dòng 3) -->
      ${renderBeamedPair(210, 'B4', 'Si♭', 'Dòng 3', 235, 'C5', 'Đô', '')}
      ${renderBeamedPair(260, 'B4', 'Si♭', '', 285, 'G4', 'Sol', '')}
      <line x1="310" y1="20" x2="310" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 3: Fa Sol Bb Do -->
      ${renderBeamedPair(335, 'F4', 'Fa', '', 360, 'G4', 'Sol', '')}
      ${renderBeamedPair(385, 'B4', 'Si♭', '', 410, 'C5', 'Đô', '')}
      <line x1="435" y1="20" x2="435" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 4: Sol Fa Re Do -->
      ${renderBeamedPair(460, 'G4', 'Sol', '', 485, 'F4', 'Fa', '')}
      ${renderBeamedPair(510, 'D4', 'Rê', '', 535, 'C4', 'Đô', '')}
      <line x1="560" y1="20" x2="560" y2="60" stroke="#64748b" stroke-width="1.3"/>
      ${renderNote({ x: 585, note: 'C4', type: 'half', name: 'Đô' })}
      
      <!-- Double bar -->
      <line x1="612" y1="20" x2="612" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="616" y1="20" x2="616" y2="60" stroke="#0f172a" stroke-width="3.5"/>
    `
  }),

  // Bài 9: Hát "Ngôi nhà của chúng ta" & Nghe "Mùa xuân" (Vivaldi)
  bai9: wrapStaffCard({
    title: 'NÉT NHẠC KIỆT TÁC: CONCERTO "MÙA XUÂN" (ANTONIO VIVALDI)',
    subtitle: 'Âm hưởng rực rỡ thời kì Baroque ngập tràn sức sống thiên nhiên thức giấc',
    tempo: 'Allegro (Nhanh, tươi vui rực rỡ)',
    timeSig: '4/4',
    audioId: 'staff-bai9',
    width: 630,
    height: 125,
    svgContent: `
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      
      <text x="48" y="38" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      <text x="48" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      <!-- Measure 1: Sol Sol Sol Sol Mi Do Sol -->
      ${renderBeamedPair(75, 'G4', 'Sol', '', 95, 'G4', 'Sol', '')}
      ${renderBeamedPair(115, 'G4', 'Sol', '', 135, 'G4', 'Sol', '')}
      ${renderNote({ x: 160, note: 'E4', type: 'quarter', name: 'Mi', lyric: 'Xuân' })}
      ${renderNote({ x: 195, note: 'C4', type: 'quarter', name: 'Đô', lyric: 'về' })}
      <line x1="225" y1="20" x2="225" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 2: Sol Sol Sol Sol Mi Do -->
      ${renderNote({ x: 250, note: 'G4', type: 'quarter', name: 'Sol' })}
      ${renderBeamedPair(280, 'G4', 'Sol', '', 305, 'G4', 'Sol', '')}
      ${renderNote({ x: 335, note: 'E4', type: 'quarter', name: 'Mi' })}
      ${renderNote({ x: 370, note: 'C4', type: 'quarter', name: 'Đô' })}
      <line x1="400" y1="20" x2="400" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 3: D4 E4 F4 E4 D4 C4 -->
      ${renderBeamedPair(425, 'D4', 'Rê', '', 450, 'E4', 'Mi', '')}
      ${renderBeamedPair(475, 'F4', 'Fa', '', 500, 'E4', 'Mi', '')}
      ${renderNote({ x: 530, note: 'D4', type: 'quarter', name: 'Rê' })}
      ${renderNote({ x: 565, note: 'C4', type: 'quarter', name: 'Đô' })}
      
      <!-- Double bar -->
      <line x1="605" y1="20" x2="605" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="609" y1="20" x2="609" y2="60" stroke="#0f172a" stroke-width="3.5"/>
    `
  }),

  // Bài 10: Hợp âm ba (C, F, G, Am) & Bài đọc nhạc số 3 hai bè
  bai10: wrapStaffCard({
    title: 'HỆ THỐNG HỢP ÂM BA CƠ BẢN TRÊN KHUÔNG NHẠC & ĐỌC NHẠC SỐ 3 (HAI BÈ)',
    subtitle: 'Các hợp âm C (Đô trưởng), F (Fa trưởng), G (Son trưởng), Am (La thứ) xếp theo quãng 3',
    tempo: 'Moderato',
    timeSig: '4/4',
    audioId: 'staff-bai10',
    width: 630,
    height: 125,
    svgContent: `
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      
      <text x="48" y="38" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      <text x="48" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      <!-- Chord C (Do - Mi - Sol) -->
      ${renderTriadChord(100, 'C4', 'E4', 'G4', 'C (Đô trưởng)')}
      <line x1="160" y1="20" x2="160" y2="60" stroke="#94a3b8" stroke-width="1.3"/>
      
      <!-- Chord F (Fa - La - Do) -->
      ${renderTriadChord(220, 'F4', 'A4', 'C5', 'F (Fa trưởng)')}
      <line x1="280" y1="20" x2="280" y2="60" stroke="#94a3b8" stroke-width="1.3"/>
      
      <!-- Chord G (Sol - Si - Re) -->
      ${renderTriadChord(340, 'G4', 'B4', 'D5', 'G (Son trưởng)')}
      <line x1="400" y1="20" x2="400" y2="60" stroke="#94a3b8" stroke-width="1.3"/>
      
      <!-- Chord Am (La - Do - Mi) -->
      ${renderTriadChord(460, 'A3', 'C4', 'E4', 'Am (La thứ)')}
      <line x1="520" y1="20" x2="520" y2="60" stroke="#94a3b8" stroke-width="1.3"/>
      
      <!-- Chord Dm (Re - Fa - La) -->
      ${renderTriadChord(570, 'D4', 'F4', 'A4', 'Dm (Rê thứ)')}
      
      <!-- Double bar -->
      <line x1="616" y1="20" x2="616" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3.5"/>
    `
  }),

  // Bài 11: Hát "Nụ cười" (V. Shainsky)
  bai11: wrapStaffCard({
    title: 'GIAI ĐIỆU BÀI HÁT THIẾU NHI QUỐC TẾ: NỤ CƯỜI (V. SHAINSKY)',
    subtitle: 'Nhịp 2/4 tươi vui, nhí nhảnh, truyền cảm hứng lạc quan',
    tempo: 'Allegretto giocoso',
    timeSig: '2/4',
    audioId: 'staff-bai11',
    width: 630,
    height: 125,
    svgContent: `
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      
      <text x="48" y="38" font-size="14" font-weight="bold" fill="#0f172a">2</text>
      <text x="48" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      <!-- Measure 1: Do Mi Sol La -->
      ${renderBeamedPair(80, 'C4', 'Đô', 'Cho', 110, 'E4', 'Mi', 'trời')}
      ${renderBeamedPair(140, 'G4', 'Sol', 'sáng', 170, 'A4', 'La', 'lên')}
      <line x1="195" y1="20" x2="195" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 2: Sol Mi Do -->
      ${renderBeamedPair(220, 'G4', 'Sol', 'cùng', 250, 'E4', 'Mi', 'với')}
      ${renderNote({ x: 285, note: 'C4', type: 'quarter', name: 'Đô', lyric: 'bao' })}
      <line x1="320" y1="20" x2="320" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 3: D4 F4 A4 B4 -->
      ${renderBeamedPair(345, 'D4', 'Rê', 'nụ', 375, 'F4', 'Fa', 'cười')}
      ${renderBeamedPair(405, 'A4', 'La', 'rộn', 435, 'B4', 'Si', 'rã')}
      <line x1="465" y1="20" x2="465" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 4: C5 C5 (Kết) -->
      ${renderNote({ x: 495, note: 'C5', type: 'quarter', name: 'Đô', lyric: 'tiếng' })}
      ${renderNote({ x: 540, note: 'C5', type: 'quarter', name: 'Đô', lyric: 'ca!' })}
      
      <!-- Double bar -->
      <line x1="595" y1="20" x2="595" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="599" y1="20" x2="599" y2="60" stroke="#0f172a" stroke-width="3.5"/>
    `
  }),

  // Bài 12: Nốt Pha thăng (F#) & Thang âm G trưởng
  bai12: wrapStaffCard({
    title: 'VỊ TRÍ NỐT PHA THĂNG (F#) TRÊN DÒNG KẺ 5 & THANG ÂM G TRƯỞNG CHO RECORDER',
    subtitle: 'Nốt Pha thăng (F#5) nằm trên dòng kẻ thứ 5; nốt F#4 nằm ở khe thứ 1',
    tempo: 'Moderato',
    timeSig: '4/4',
    audioId: 'staff-bai12',
    width: 630,
    height: 125,
    svgContent: `
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      
      <!-- Key Signature: 1 Sharp (F# on line 5 y=20) -->
      <text x="44" y="24" font-size="14" font-weight="bold" fill="#0891b2">♯</text>
      
      <text x="56" y="38" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      <text x="56" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      <!-- Thang âm G trưởng: Sol - La - Si - Do - Re - Mi - Fa# - Sol -->
      ${renderNote({ x: 85, note: 'G4', type: 'quarter', name: 'Sol' })}
      ${renderNote({ x: 130, note: 'A4', type: 'quarter', name: 'La' })}
      ${renderNote({ x: 175, note: 'B4', type: 'quarter', name: 'Si' })}
      ${renderNote({ x: 220, note: 'C5', type: 'quarter', name: 'Đô' })}
      <line x1="250" y1="20" x2="250" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      ${renderNote({ x: 280, note: 'D5', type: 'quarter', name: 'Rê' })}
      ${renderNote({ x: 325, note: 'E5', type: 'quarter', name: 'Mi' })}
      ${renderNote({ x: 375, note: 'F5', type: 'quarter', name: 'Fa#', lyric: 'Dòng 5 (#)' })}
      ${renderNote({ x: 425, note: 'G5', type: 'quarter', name: 'Sol' })}
      <line x1="465" y1="20" x2="465" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Luyện đảo phách có nốt F# -->
      ${renderBeamedPair(495, 'E5', 'Mi', '', 525, 'F5', 'Fa#', '')}
      ${renderNote({ x: 565, note: 'G5', type: 'half', name: 'Sol' })}
      
      <!-- Double bar -->
      <line x1="612" y1="20" x2="612" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="616" y1="20" x2="616" y2="60" stroke="#0f172a" stroke-width="3.5"/>
    `
  }),

  // Bài 13: Ca khúc "Donna Donna" & Khúc ca chiều "Serenade" (F. Schubert)
  bai13: wrapStaffCard({
    title: 'GIAI ĐIỆU BẤT HỦ: SERENADE (KHÚC CA CHIỀU) — FRANZ SCHUBERT',
    subtitle: 'Trích từ tập di cảo "Bài ca thiên nga" (Schwanengesang D. 957) giọng Rê thứ u sầu, lãng mạn',
    tempo: 'Andante con moto',
    timeSig: '3/4',
    audioId: 'staff-bai13',
    width: 630,
    height: 125,
    svgContent: `
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      
      <!-- Key Signature: 1 Flat (Bb on line 3) -->
      <text x="44" y="44" font-size="14" font-weight="bold" fill="#7c3aed">♭</text>
      
      <text x="56" y="38" font-size="14" font-weight="bold" fill="#0f172a">3</text>
      <text x="56" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      <!-- Measure 1: D4 F4 A4 -->
      ${renderNote({ x: 85, note: 'D4', type: 'quarter', name: 'Rê' })}
      ${renderNote({ x: 125, note: 'F4', type: 'quarter', name: 'Fa' })}
      ${renderNote({ x: 165, note: 'A4', type: 'quarter', name: 'La' })}
      <line x1="195" y1="20" x2="195" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 2: D5 C#5 D5 -->
      ${renderNote({ x: 225, note: 'D5', type: 'quarter', name: 'Rê' })}
      ${renderBeamedPair(260, 'C5', 'Đô#', '', 290, 'D5', 'Rê', '')}
      <line x1="320" y1="20" x2="320" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 3: Bb4 A4 G4 -->
      ${renderNote({ x: 350, note: 'B4', type: 'quarter', name: 'Si♭' })}
      ${renderNote({ x: 390, note: 'A4', type: 'quarter', name: 'La' })}
      ${renderNote({ x: 430, note: 'G4', type: 'quarter', name: 'Sol' })}
      <line x1="460" y1="20" x2="460" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 4: F4 E4 D4 -->
      ${renderNote({ x: 490, note: 'F4', type: 'quarter', name: 'Fa' })}
      ${renderNote({ x: 530, note: 'E4', type: 'quarter', name: 'Mi' })}
      ${renderNote({ x: 570, note: 'D4', type: 'quarter', name: 'Rê', lyric: 'Serenade...' })}
      
      <!-- Double bar -->
      <line x1="612" y1="20" x2="612" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="616" y1="20" x2="616" y2="60" stroke="#0f172a" stroke-width="3.5"/>
    `
  }),

  // Bài 14: Đọc nhạc số 4 (Bài hát cổ nước Pháp - Tchaikovsky) & Hợp âm
  bai14: wrapStaffCard({
    title: 'BÀI ĐỌC NHẠC SỐ 4 (Trích: BÀI HÁT CỔ NƯỚC PHÁP — P.I. TCHAIKOVSKY)',
    subtitle: 'Giọng La thứ (A minor), nhịp 2/4, nét nhạc cổ kính, trữ tình tao nhã',
    tempo: 'Andante grazioso',
    timeSig: '2/4',
    audioId: 'staff-bai14',
    width: 630,
    height: 125,
    svgContent: `
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      
      <text x="48" y="38" font-size="14" font-weight="bold" fill="#0f172a">2</text>
      <text x="48" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      <!-- Measure 1: La C5 Si A -->
      ${renderBeamedPair(80, 'A4', 'La', '', 105, 'C5', 'Đô', '')}
      ${renderBeamedPair(130, 'B4', 'Si', '', 155, 'A4', 'La', '')}
      <line x1="180" y1="20" x2="180" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 2: G#4 A4 B4 -->
      ${renderNote({ x: 205, note: 'G4', type: 'quarter', name: 'Sol#', sharp: true })}
      ${renderBeamedPair(240, 'A4', 'La', '', 265, 'B4', 'Si', '')}
      <line x1="290" y1="20" x2="290" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 3: E4 A4 C5 B4 -->
      ${renderNote({ x: 315, note: 'E4', type: 'quarter', name: 'Mi' })}
      ${renderBeamedPair(350, 'A4', 'La', '', 375, 'C5', 'Đô', '')}
      <line x1="400" y1="20" x2="400" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 4: B4 A4 -->
      ${renderBeamedPair(425, 'B4', 'Si', '', 450, 'A4', 'La', '')}
      ${renderNote({ x: 485, note: 'A4', type: 'quarter', name: 'La' })}
      <line x1="515" y1="20" x2="515" y2="60" stroke="#64748b" stroke-width="1.3"/>
      ${renderNote({ x: 555, note: 'A4', type: 'half', name: 'La (Kết)' })}
      
      <!-- Double bar -->
      <line x1="605" y1="20" x2="605" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="609" y1="20" x2="609" y2="60" stroke="#0f172a" stroke-width="3.5"/>
    `
  }),

  // Bài 15: Nét nhạc "Một thời để nhớ"
  bai15: wrapStaffCard({
    title: 'NÉT NHẠC CHỦ ĐỀ: MỘT THỜI ĐỂ NHỚ (Bài ca chia tay mái trường)',
    subtitle: 'Âm điệu lắng đọng, bồi hồi nhớ thương bè bạn và thầy cô',
    tempo: 'Moderato espressivo',
    timeSig: '2/4',
    audioId: 'staff-bai15',
    width: 630,
    height: 125,
    svgContent: `
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      
      <text x="48" y="38" font-size="14" font-weight="bold" fill="#0f172a">2</text>
      <text x="48" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      <!-- Measure 1: Do Mi Sol La -->
      ${renderBeamedPair(80, 'C4', 'Đô', 'Một', 110, 'E4', 'Mi', 'thời')}
      ${renderBeamedPair(140, 'G4', 'Sol', 'để', 170, 'A4', 'La', 'nhớ')}
      <line x1="195" y1="20" x2="195" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 2: Sol Mi Re Do -->
      ${renderBeamedPair(220, 'G4', 'Sol', 'những', 250, 'E4', 'Mi', 'vui')}
      ${renderBeamedPair(280, 'D4', 'Rê', 'buồn', 310, 'C4', 'Đô', 'xưa')}
      <line x1="335" y1="20" x2="335" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 3: E4 G4 C5 -->
      ${renderNote({ x: 360, note: 'E4', type: 'quarter', name: 'Mi', lyric: 'mái' })}
      ${renderNote({ x: 400, note: 'G4', type: 'quarter', name: 'Sol', lyric: 'trường' })}
      <line x1="435" y1="20" x2="435" y2="60" stroke="#64748b" stroke-width="1.3"/>
      
      <!-- Measure 4: C5 C5 -->
      ${renderNote({ x: 470, note: 'C5', type: 'quarter', name: 'Đô', lyric: 'thân' })}
      ${renderNote({ x: 520, note: 'C5', type: 'half', name: 'Đô', lyric: 'yêu...' })}
      
      <!-- Double bar -->
      <line x1="595" y1="20" x2="595" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="599" y1="20" x2="599" y2="60" stroke="#0f172a" stroke-width="3.5"/>
    `
  }),

  // Bài 16: Hoà tấu nhạc cụ tổng hợp cuối khoá (Recorder & Kèn phím)
  bai16: wrapStaffCard({
    title: 'TỔNG PHỔ HOÀ TẤU NHẠC CỤ TỔNG HỢP: RECORDER & KÈN PHÍM (MELODICA)',
    subtitle: 'Bè 1: Recorder dẫn dắt giai điệu chính • Bè 2: Kèn phím đệm bè hoà âm nhịp nhàng',
    tempo: 'Allegro maestoso',
    timeSig: '2/4',
    audioId: 'staff-bai16',
    width: 630,
    height: 180,
    svgContent: `
      <!-- BÈ 1: RECORDER -->
      <text x="15" y="16" font-size="11" font-weight="bold" fill="#047857">Bè 1 (Recorder): Giai điệu chính trong trẻo</text>
      ${getStaffLines(630, 10, 620)}
      ${getTrebleClef(15, 6)}
      <text x="48" y="38" font-size="14" font-weight="bold" fill="#0f172a">2</text>
      <text x="48" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
      
      ${renderBeamedPair(80, 'G4', 'Sol', '', 110, 'A4', 'La', '')}
      ${renderNote({ x: 145, note: 'C5', type: 'quarter', name: 'Đô' })}
      <line x1="175" y1="20" x2="175" y2="60" stroke="#64748b" stroke-width="1.3"/>
      ${renderBeamedPair(205, 'B4', 'Si', '', 235, 'A4', 'La', '')}
      ${renderNote({ x: 270, note: 'G4', type: 'quarter', name: 'Sol' })}
      <line x1="300" y1="20" x2="300" y2="60" stroke="#64748b" stroke-width="1.3"/>
      ${renderNote({ x: 340, note: 'C5', type: 'half', name: 'Đô' })}
      <line x1="400" y1="20" x2="400" y2="60" stroke="#0f172a" stroke-width="3"/>
      
      <!-- BÈ 2: KÈN PHÍM (translate y=80) -->
      <g transform="translate(0, 80)">
        <text x="15" y="16" font-size="11" font-weight="bold" fill="#0284c7">Bè 2 (Kèn phím Melodica): Bè đệm hoà âm vững chãi</text>
        ${getStaffLines(630, 10, 620)}
        ${getTrebleClef(15, 6)}
        <text x="48" y="38" font-size="14" font-weight="bold" fill="#0f172a">2</text>
        <text x="48" y="55" font-size="14" font-weight="bold" fill="#0f172a">4</text>
        
        ${renderBeamedPair(80, 'E4', 'Mi', '', 110, 'F4', 'Fa', '')}
        ${renderNote({ x: 145, note: 'E4', type: 'quarter', name: 'Mi' })}
        <line x1="175" y1="20" x2="175" y2="60" stroke="#64748b" stroke-width="1.3"/>
        ${renderBeamedPair(205, 'G4', 'Sol', '', 235, 'F4', 'Fa', '')}
        ${renderNote({ x: 270, note: 'E4', type: 'quarter', name: 'Mi' })}
        <line x1="300" y1="20" x2="300" y2="60" stroke="#64748b" stroke-width="1.3"/>
        ${renderNote({ x: 340, note: 'C4', type: 'half', name: 'Đô' })}
        <line x1="400" y1="20" x2="400" y2="60" stroke="#0f172a" stroke-width="3"/>
      </g>
    `
  })
};

module.exports = amnhac9Staves;
