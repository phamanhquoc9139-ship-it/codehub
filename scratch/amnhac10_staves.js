// scratch/amnhac10_staves.js
// Thư viện tạo bản nhạc mô phỏng SVG và sơ đồ nhạc cụ cho Âm Nhạc 10

const noteY = {
  'G5': 15,
  'F#5': 20,
  'F5': 20, // line 5
  'E5': 25, // space 4
  'D#5': 30,
  'D5': 30, // line 4
  'C5': 35, // space 3
  'B4': 40, // line 3
  'Bb4': 40,
  'A4': 45, // space 2
  'G4': 50, // line 2
  'F#4': 55, // space 1 sharp
  'F4': 55, // space 1
  'E4': 60, // line 1
  'D#4': 65,
  'D4': 65, // below line 1
  'C4': 70, // ledger line (Middle C)
  'B3': 75,
  'A3': 80, // ledger line
  'G3': 85,
  'E3': 95,
  'E2': 115
};

// SVG Treble Clef Path
function getTrebleClef(x = 18, y = 5) {
  return `
    <g transform="translate(${x}, ${y}) scale(0.62)">
      <path d="M 17 62 C 16 64, 13 65, 11 64 C 9 63, 7 61, 7 58 C 7 52, 13 46, 20 46 C 28 46, 33 52, 33 60 C 33 69, 25 78, 16 80 C 13 81, 10 79, 10 76 C 10 74, 12 73, 14 73 C 18 73, 23 70, 24 64 C 25 58, 20 54, 15 54 C 11 54, 8 57, 8 61 C 8 68, 17 74, 21 73 M 19 62 L 19 16 C 19 12, 16 7, 13 7 C 11 7, 9 9, 9 11 C 9 15, 14 24, 21 34 L 21 82 C 21 89, 17 96, 12 96 C 8 96, 5 93, 5 89 C 5 86, 7 84, 9 84 C 11 84, 13 86, 12 89 C 12 90, 13 92, 14 92 C 16 92, 17 88, 17 84 Z" fill="#1e293b" class="dark:fill-slate-200"/>
    </g>
  `;
}

// 5 staff lines
function getStaffLines(width = 640, startX = 10, endX = 630, topY = 20) {
  let lines = '';
  for (let i = 0; i < 5; i++) {
    const y = topY + i * 10;
    lines += `<line x1="${startX}" y1="${y}" x2="${endX}" y2="${y}" stroke="#64748b" stroke-width="1.2" class="dark:stroke-slate-600"/>\n`;
  }
  return lines;
}

// Helper to render a single note
function renderNote({ x, note, type = 'quarter', lyric = '', name = '', sharp = false, flat = false, isWhite = false, stemDown = null, color = '#0f172a' }) {
  const y = noteY[note] || 50;
  const isDown = stemDown !== null ? stemDown : (y <= 40);
  let svg = '';

  // Ledger lines
  if (note === 'C4') {
    svg += `<line x1="${x - 10}" y1="70" x2="${x + 10}" y2="70" stroke="#64748b" stroke-width="1.3" class="dark:stroke-slate-500"/>`;
  } else if (note === 'A3') {
    svg += `<line x1="${x - 10}" y1="70" x2="${x + 10}" y2="70" stroke="#64748b" stroke-width="1.3" class="dark:stroke-slate-500"/>`;
    svg += `<line x1="${x - 10}" y1="80" x2="${x + 10}" y2="80" stroke="#64748b" stroke-width="1.3" class="dark:stroke-slate-500"/>`;
  } else if (note === 'G5') {
    svg += `<line x1="${x - 10}" y1="10" x2="${x + 10}" y2="10" stroke="#64748b" stroke-width="1.3" class="dark:stroke-slate-500"/>`;
  }

  // Accidental
  if (sharp || note.includes('#')) {
    svg += `<text x="${x - 13}" y="${y + 4.5}" font-size="13" font-weight="bold" fill="${color}" class="dark:fill-rose-400">♯</text>`;
  } else if (flat || note.includes('b')) {
    svg += `<text x="${x - 12}" y="${y + 4}" font-size="14" font-weight="bold" fill="${color}" class="dark:fill-rose-400">♭</text>`;
  }

  // Notehead
  if (isWhite || type === 'half' || type === 'whole') {
    svg += `<ellipse cx="${x}" cy="${y}" rx="5.5" ry="4" transform="rotate(-25 ${x} ${y})" fill="#fff" stroke="${color}" stroke-width="2" class="dark:stroke-slate-200"/>`;
  } else {
    svg += `<ellipse cx="${x}" cy="${y}" rx="5.5" ry="4" transform="rotate(-25 ${x} ${y})" fill="${color}" class="dark:fill-slate-100"/>`;
  }

  // Stem (if not whole)
  if (type !== 'whole') {
    if (isDown) {
      svg += `<line x1="${x - 4.8}" y1="${y}" x2="${x - 4.8}" y2="${y + 26}" stroke="${color}" stroke-width="1.6" class="dark:stroke-slate-200"/>`;
      if (type === 'eighth') {
        svg += `<path d="M ${x - 4.8} ${y + 26} C ${x - 2} ${y + 22}, ${x + 2} ${y + 20}, ${x + 5} ${y + 16}" fill="none" stroke="${color}" stroke-width="1.8" class="dark:stroke-slate-200"/>`;
      }
    } else {
      svg += `<line x1="${x + 4.8}" y1="${y}" x2="${x + 4.8}" y2="${y - 26}" stroke="${color}" stroke-width="1.6" class="dark:stroke-slate-200"/>`;
      if (type === 'eighth') {
        svg += `<path d="M ${x + 4.8} ${y - 26} C ${x + 7} ${y - 22}, ${x + 9} ${y - 18}, ${x + 12} ${y - 14}" fill="none" stroke="${color}" stroke-width="1.8" class="dark:stroke-slate-200"/>`;
      }
    }
  }

  // Note Name label
  if (name) {
    svg += `<text x="${x}" y="79" text-anchor="middle" font-size="10" font-weight="bold" fill="${color}" class="dark:fill-slate-300">${name}</text>`;
  }

  // Lyric under note
  if (lyric) {
    svg += `<text x="${x}" y="98" text-anchor="middle" font-size="11" font-weight="600" fill="#be123c" class="dark:fill-rose-300">${lyric}</text>`;
  }

  return svg;
}

// Helper to render beamed pair of eighth notes
function renderBeamedPair({ x1, n1, x2, n2, lyric1 = '', lyric2 = '', name1 = '', name2 = '', color = '#0f172a' }) {
  const y1 = noteY[n1] || 50;
  const y2 = noteY[n2] || 50;
  const isDown = ((y1 + y2) / 2) <= 40;
  let svg = '';

  svg += renderNote({ x: x1, note: n1, type: 'quarter', lyric: lyric1, name: name1, color, stemDown: isDown });
  svg += renderNote({ x: x2, note: n2, type: 'quarter', lyric: lyric2, name: name2, color, stemDown: isDown });

  if (isDown) {
    const stemY1 = y1 + 26;
    const stemY2 = y2 + 26;
    svg += `<line x1="${x1 - 4.8}" y1="${stemY1}" x2="${x2 - 4.8}" y2="${stemY2}" stroke="${color}" stroke-width="3.2" class="dark:stroke-slate-200"/>`;
  } else {
    const stemY1 = y1 - 26;
    const stemY2 = y2 - 26;
    svg += `<line x1="${x1 + 4.8}" y1="${stemY1}" x2="${x2 + 4.8}" y2="${stemY2}" stroke="${color}" stroke-width="3.2" class="dark:stroke-slate-200"/>`;
  }

  return svg;
}

// Render harmonic interval (2 stacked notes)
function renderHarmonicInterval({ x, n1, n2, intervalName, chordLabel = '', isConsonant = true }) {
  const y1 = noteY[n1] || 60;
  const y2 = noteY[n2] || 40;
  let svg = '';

  if (n1 === 'C4') svg += `<line x1="${x - 10}" y1="70" x2="${x + 10}" y2="70" stroke="#64748b" stroke-width="1.3"/>`;
  if (n2 === 'C4') svg += `<line x1="${x - 10}" y1="70" x2="${x + 10}" y2="70" stroke="#64748b" stroke-width="1.3"/>`;

  // Noteheads
  svg += `<ellipse cx="${x}" cy="${y1}" rx="5.5" ry="4" transform="rotate(-25 ${x} ${y1})" fill="#0f172a" class="dark:fill-slate-100"/>`;
  svg += `<ellipse cx="${x}" cy="${y2}" rx="5.5" ry="4" transform="rotate(-25 ${x} ${y2})" fill="#0f172a" class="dark:fill-slate-100"/>`;

  // Stem
  svg += `<line x1="${x + 4.8}" y1="${y1}" x2="${x + 4.8}" y2="${y2 - 24}" stroke="#0f172a" stroke-width="1.6" class="dark:stroke-slate-200"/>`;

  // Text labels
  if (chordLabel) {
    svg += `<text x="${x}" y="12" text-anchor="middle" font-size="11" font-weight="900" fill="#be123c" class="dark:fill-rose-400">${chordLabel}</text>`;
  }
  svg += `<text x="${x}" y="78" text-anchor="middle" font-size="10" font-weight="bold" fill="${isConsonant ? '#047857' : '#b91c1c'}" class="${isConsonant ? 'dark:fill-emerald-400' : 'dark:fill-red-400'}">${intervalName}</text>`;

  return svg;
}

// Render Triad chord (3 stacked notes)
function renderTriad({ x, root, third, fifth, chordName, type = 'quarter' }) {
  const y1 = noteY[root] || 60;
  const y2 = noteY[third] || 50;
  const y3 = noteY[fifth] || 40;
  let svg = '';

  if (root === 'C4') svg += `<line x1="${x - 10}" y1="70" x2="${x + 10}" y2="70" stroke="#64748b" stroke-width="1.3"/>`;

  const isWhite = (type === 'half' || type === 'whole');
  const fill = isWhite ? '#fff' : '#0f172a';
  const stroke = isWhite ? 'stroke="#0f172a" stroke-width="2"' : '';

  svg += `<ellipse cx="${x}" cy="${y1}" rx="5.5" ry="4" transform="rotate(-25 ${x} ${y1})" fill="${fill}" ${stroke} class="dark:fill-slate-100"/>`;
  svg += `<ellipse cx="${x}" cy="${y2}" rx="5.5" ry="4" transform="rotate(-25 ${x} ${y2})" fill="${fill}" ${stroke} class="dark:fill-slate-100"/>`;
  svg += `<ellipse cx="${x}" cy="${y3}" rx="5.5" ry="4" transform="rotate(-25 ${x} ${y3})" fill="${fill}" ${stroke} class="dark:fill-slate-100"/>`;

  svg += `<line x1="${x + 4.8}" y1="${y1}" x2="${x + 4.8}" y2="${y3 - 22}" stroke="#0f172a" stroke-width="1.6" class="dark:stroke-slate-200"/>`;

  svg += `<text x="${x}" y="12" text-anchor="middle" font-size="13" font-weight="900" fill="#047857" class="dark:fill-emerald-400">${chordName}</text>`;
  svg += `<text x="${x}" y="78" text-anchor="middle" font-size="9" font-weight="bold" fill="#475569" class="dark:fill-slate-400">${root}-${third}-${fifth}</text>`;

  return svg;
}

// Render Guitar Chord Box Diagram
function renderGuitarChordBox({ x, y, name, frets = [0, 1, 0, 2, 3, 'X'], fingers = ['', '1', '', '2', '3', ''], startFret = 1 }) {
  // frets array order: string 1 (high E) to 6 (low E)
  // or string 6 to 1: standard is 6 to 1 (E A D G B E)
  const width = 80;
  const height = 95;
  const numFrets = 4;
  const numStrings = 6;
  const stringDist = width / (numStrings - 1);
  const fretDist = 18;

  let svg = `<g transform="translate(${x}, ${y})">`;
  svg += `<text x="${width / 2}" y="-6" text-anchor="middle" font-size="14" font-weight="900" fill="#be123c" class="dark:fill-rose-400">${name}</text>`;

  // Nut or top line
  svg += `<line x1="0" y1="0" x2="${width}" y2="0" stroke="#0f172a" stroke-width="3" class="dark:stroke-slate-200"/>`;

  // Fret lines
  for (let f = 1; f <= numFrets; f++) {
    const fy = f * fretDist;
    svg += `<line x1="0" y1="${fy}" x2="${width}" y2="${fy}" stroke="#94a3b8" stroke-width="1"/>`;
  }

  // String lines (from 6 to 1)
  for (let s = 0; s < numStrings; s++) {
    const sx = s * stringDist;
    svg += `<line x1="${sx}" y1="0" x2="${sx}" y2="${numFrets * fretDist}" stroke="#64748b" stroke-width="1.2"/>`;
  }

  // Dots / O / X markers
  frets.forEach((fretVal, sIdx) => {
    const sx = sIdx * stringDist;
    if (fretVal === 'X' || fretVal === 'x') {
      svg += `<text x="${sx}" y="-2" text-anchor="middle" font-size="10" font-weight="bold" fill="#ef4444">✕</text>`;
    } else if (fretVal === 0) {
      svg += `<circle cx="${sx}" cy="-4" r="3.5" fill="none" stroke="#047857" stroke-width="1.5"/>`;
    } else if (typeof fretVal === 'number' && fretVal > 0) {
      const cy = (fretVal - 0.5) * fretDist;
      svg += `<circle cx="${sx}" cy="${cy}" r="5.5" fill="#0f172a" class="dark:fill-slate-100"/>`;
      if (fingers[sIdx]) {
        svg += `<text x="${sx}" y="${cy + 3.5}" text-anchor="middle" font-size="8" font-weight="bold" fill="#fff" class="dark:fill-slate-900">${fingers[sIdx]}</text>`;
      }
    }
  });

  svg += `</g>`;
  return svg;
}

// Wrapper card for staff
function wrapStaffCard({ title, subtitle, tempo = 'Moderato', timeSig = '2/4', audioNotes = [], svgContent, width = 640, height = 125, id = '' }) {
  const jsonNotes = JSON.stringify(audioNotes).replace(/"/g, '&quot;');
  return `
    <div class="my-5 p-4 sm:p-5 rounded-2xl bg-amber-50/50 dark:bg-slate-900/90 border border-amber-200/80 dark:border-slate-800 shadow-sm transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 pb-2.5 border-b border-amber-100 dark:border-slate-800">
        <div>
          <span class="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300 mr-2">
            <i class="fa-solid fa-music"></i> Nốt nhạc mô phỏng
          </span>
          <strong class="text-sm sm:text-base text-slate-900 dark:text-white font-black">${title}</strong>
          ${subtitle ? `<span class="text-xs text-slate-500 dark:text-slate-400 block sm:inline sm:ml-2">(${subtitle})</span>` : ''}
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 italic">
            ${tempo ? `Tempo: ${tempo} • ` : ''}Nhịp ${timeSig}
          </span>
          ${audioNotes && audioNotes.length > 0 ? `
            <button type="button" onclick="playMelodyNotes(this, ${jsonNotes})" class="play-audio-btn px-3 py-1 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-sm shadow-rose-500/20">
              <i class="fa-solid fa-play text-[10px]"></i> Nghe nốt
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
// THƯ VIỆN BẢN NHẠC MÔ PHỎNG CHO ÂM NHẠC 10
// ==========================================

const amnhac10Staves = {
  // 1. Quãng hòa thanh & Quãng giai điệu (Chủ đề 1)
  intervals_demo: wrapStaffCard({
    title: 'CÁC LOẠI QUÃNG VÀ TÍNH CHẤT TRONG ÂM NHẠC',
    subtitle: 'Quãng hòa thanh (vang đồng thời) & Quãng giai điệu (vang nối tiếp)',
    tempo: 'Lento',
    timeSig: '4/4',
    audioNotes: [261.63, 329.63, 261.63, 392.00, 261.63, 523.25, 293.66, 329.63],
    width: 640,
    height: 120,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      
      <!-- Hóa biểu: không có dấu thăng/giáng (C) -->
      <!-- Vạch nhịp 1 -->
      <line x1="140" y1="20" x2="140" y2="60" stroke="#94a3b8" stroke-width="1.2"/>
      <!-- Vạch nhịp 2 -->
      <line x1="280" y1="20" x2="280" y2="60" stroke="#94a3b8" stroke-width="1.2"/>
      <!-- Vạch nhịp 3 -->
      <line x1="420" y1="20" x2="420" y2="60" stroke="#94a3b8" stroke-width="1.2"/>
      <!-- Vạch nhịp kép -->
      <line x1="622" y1="20" x2="622" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="626" y1="20" x2="626" y2="60" stroke="#0f172a" stroke-width="3"/>

      <!-- Ô 1: Quãng 3 trưởng hòa thanh (C4 - E4) -->
      ${renderHarmonicInterval({ x: 80, n1: 'C4', n2: 'E4', intervalName: 'Q.3 Trưởng (Thuận)', chordLabel: 'Hòa thanh' })}

      <!-- Ô 2: Quãng 5 đúng hòa thanh (C4 - G4) -->
      ${renderHarmonicInterval({ x: 210, n1: 'C4', n2: 'G4', intervalName: 'Q.5 Đúng (Thuận)', chordLabel: 'Hòa thanh' })}

      <!-- Ô 3: Quãng 8 đúng hòa thanh (C4 - C5) -->
      ${renderHarmonicInterval({ x: 350, n1: 'C4', n2: 'C5', intervalName: 'Q.8 Đúng (Thuận hoàn toàn)', chordLabel: 'Hòa thanh' })}

      <!-- Ô 4: Quãng 2 thứ giai điệu (E4 -> F4: nối tiếp) -->
      ${renderNote({ x: 470, note: 'E4', type: 'quarter', name: 'Mi', lyric: 'Q.2' })}
      ${renderNote({ x: 530, note: 'F4', type: 'quarter', name: 'Fa', lyric: 'Thứ' })}
      <text x="500" y="12" text-anchor="middle" font-size="11" font-weight="900" fill="#be123c">Giai điệu (Nghịch)</text>
    `
  }),

  // 2. Gam Son trưởng & Bài đọc nhạc số 1 (Chủ đề 1)
  g_major_scale: wrapStaffCard({
    title: 'GAM SON TRƯỞNG & CÁC ÂM ỔN ĐỊNH',
    subtitle: 'Hóa biểu 1 dấu thăng Fa♯, âm chủ Son (G4)',
    tempo: 'Moderato',
    timeSig: '4/4',
    audioNotes: [392.00, 440.00, 493.88, 523.25, 587.33, 659.25, 739.99, 783.99],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      
      <!-- Hóa biểu Fa# ở dòng 5 -->
      <text x="46" y="24" font-size="15" font-weight="bold" fill="#0f172a" class="dark:fill-slate-100">♯</text>

      <!-- 8 nốt gam Son trưởng: G4 -> G5 -->
      ${renderNote({ x: 80, note: 'G4', name: 'Sol (I)', lyric: 'Âm chủ', color: '#be123c' })}
      ${renderNote({ x: 145, note: 'A4', name: 'La (II)' })}
      ${renderNote({ x: 210, note: 'B4', name: 'Si (III)', lyric: 'Ổn định', color: '#be123c' })}
      ${renderNote({ x: 275, note: 'C5', name: 'Đô (IV)' })}
      ${renderNote({ x: 340, note: 'D5', name: 'Rê (V)', lyric: 'Ổn định', color: '#be123c' })}
      ${renderNote({ x: 405, note: 'E5', name: 'Mi (VI)' })}
      ${renderNote({ x: 470, note: 'F#5', name: 'Fa♯ (VII)' })}
      ${renderNote({ x: 545, note: 'G5', name: 'Sol (I)', lyric: 'Âm chủ', color: '#be123c' })}

      <!-- Vạch kép kết -->
      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 3. Bài đọc nhạc số 1 trích đoạn (Chủ đề 1)
  reading_1: wrapStaffCard({
    title: 'BÀI ĐỌC NHẠC SỐ 1 (Trích đoạn giọng Son trưởng)',
    subtitle: 'Nhịp 2/4, nét nhạc vui tươi, rộn rã',
    tempo: 'Allegretto',
    timeSig: '2/4',
    audioNotes: [392.00, 493.88, 587.33, 587.33, 659.25, 587.33, 493.88, 392.00],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      <text x="46" y="24" font-size="15" font-weight="bold" fill="#0f172a" class="dark:fill-slate-100">♯</text>
      <text x="64" y="38" font-size="14" font-weight="900" fill="#0f172a" class="dark:fill-slate-100">2</text>
      <text x="64" y="52" font-size="14" font-weight="900" fill="#0f172a" class="dark:fill-slate-100">4</text>

      <!-- M1: Sol - Si -->
      ${renderNote({ x: 110, note: 'G4', type: 'quarter', lyric: 'Sol', name: 'G' })}
      ${renderNote({ x: 175, note: 'B4', type: 'quarter', lyric: 'Si', name: 'B' })}
      <line x1="225" y1="20" x2="225" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      <!-- M2: Rê - Rê -->
      ${renderBeamedPair({ x1: 260, n1: 'D5', x2: 305, n2: 'D5', lyric1: 'Rê', lyric2: 'Rê' })}
      ${renderNote({ x: 360, note: 'E5', type: 'quarter', lyric: 'Mi', name: 'E' })}
      <line x1="410" y1="20" x2="410" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      <!-- M3: Rê - Si - Sol (kết) -->
      ${renderBeamedPair({ x1: 445, n1: 'D5', x2: 490, n2: 'B4', lyric1: 'Rê', lyric2: 'Si' })}
      ${renderNote({ x: 550, note: 'G4', type: 'half', lyric: 'Sol', name: 'G (kết)' })}

      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 4. Hát Dân ca "Đèn cù" (Chủ đề 1)
  song_dencu: wrapStaffCard({
    title: 'DÂN CA ĐỒNG BẰNG BẮC BỘ: "ĐÈN CÙ" (Trích đoạn)',
    subtitle: 'Nhịp độ nhanh vừa, vui hoạt, gợi chiếc đèn kéo quân Trung thu',
    tempo: 'Vui hoạt (Allegro)',
    timeSig: '2/4',
    audioNotes: [392.00, 392.00, 440.00, 493.88, 587.33, 493.88, 440.00, 392.00],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      <text x="46" y="24" font-size="15" font-weight="bold" fill="#0f172a">♯</text>
      <text x="64" y="38" font-size="14" font-weight="900" fill="#0f172a">2</text>
      <text x="64" y="52" font-size="14" font-weight="900" fill="#0f172a">4</text>

      ${renderBeamedPair({ x1: 105, n1: 'G4', x2: 150, n2: 'G4', lyric1: 'Khen', lyric2: 'ai' })}
      ${renderBeamedPair({ x1: 190, n1: 'A4', x2: 235, n2: 'B4', lyric1: 'khéo', lyric2: 'nặn' })}
      <line x1="265" y1="20" x2="265" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 300, note: 'D5', type: 'quarter', lyric: 'cái' })}
      ${renderBeamedPair({ x1: 350, n1: 'B4', x2: 395, n2: 'A4', lyric1: 'đèn', lyric2: 'cù' })}
      <line x1="435" y1="20" x2="435" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 475, note: 'G4', type: 'half', lyric: 'ô...' })}
      ${renderNote({ x: 555, note: 'G4', type: 'quarter', lyric: 'kìa' })}
      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 5. Gam Mi thứ & So sánh Son trưởng / Mi thứ (Chủ đề 2)
  e_minor_scale: wrapStaffCard({
    title: 'GAM MI THỨ TỰ NHIÊN (E Minor Scale)',
    subtitle: 'Cùng hóa biểu 1 dấu thăng Fa♯ với Son trưởng, nhưng âm chủ là Mi (E4)',
    tempo: 'Andante',
    timeSig: '4/4',
    audioNotes: [329.63, 369.99, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      <text x="46" y="24" font-size="15" font-weight="bold" fill="#0f172a">♯</text>

      ${renderNote({ x: 80, note: 'E4', name: 'Mi (I)', lyric: 'Âm chủ', color: '#be123c' })}
      ${renderNote({ x: 145, note: 'F#4', name: 'Fa♯ (II)' })}
      ${renderNote({ x: 210, note: 'G4', name: 'Sol (III)', lyric: 'Ổn định', color: '#be123c' })}
      ${renderNote({ x: 275, note: 'A4', name: 'La (IV)' })}
      ${renderNote({ x: 340, note: 'B4', name: 'Si (V)', lyric: 'Ổn định', color: '#be123c' })}
      ${renderNote({ x: 405, note: 'C5', name: 'Đô (VI)' })}
      ${renderNote({ x: 470, note: 'D5', name: 'Rê (VII)' })}
      ${renderNote({ x: 545, note: 'E5', name: 'Mi (I)', lyric: 'Âm chủ', color: '#be123c' })}

      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 6. Bài đọc nhạc số 2 (Chủ đề 2)
  reading_2: wrapStaffCard({
    title: 'BÀI ĐỌC NHẠC SỐ 2 (Giọng Mi thứ, nhịp 3/4)',
    subtitle: 'Nét nhạc mềm mại, êm dịu, nhịp nhàng 3 phách',
    tempo: 'Moderato',
    timeSig: '3/4',
    audioNotes: [329.63, 392.00, 493.88, 493.88, 440.00, 392.00, 329.63],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      <text x="46" y="24" font-size="15" font-weight="bold" fill="#0f172a">♯</text>
      <text x="64" y="38" font-size="14" font-weight="900" fill="#0f172a">3</text>
      <text x="64" y="52" font-size="14" font-weight="900" fill="#0f172a">4</text>

      ${renderNote({ x: 110, note: 'E4', type: 'quarter', lyric: 'Mi', name: 'E' })}
      ${renderNote({ x: 170, note: 'G4', type: 'quarter', lyric: 'Sol', name: 'G' })}
      ${renderNote({ x: 230, note: 'B4', type: 'quarter', lyric: 'Si', name: 'B' })}
      <line x1="280" y1="20" x2="280" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 320, note: 'B4', type: 'half', lyric: 'Si', name: 'B' })}
      ${renderNote({ x: 395, note: 'A4', type: 'quarter', lyric: 'La', name: 'A' })}
      <line x1="445" y1="20" x2="445" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 485, note: 'G4', type: 'quarter', lyric: 'Sol', name: 'G' })}
      ${renderNote({ x: 555, note: 'E4', type: 'half', lyric: 'Mi', name: 'E (kết)' })}
      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 7. Hát "Ơi cuộc sống mến thương" & Hát đuổi (Chủ đề 2)
  song_cuocsongmenthuong: wrapStaffCard({
    title: '"ƠI CUỘC SỐNG MẾN THƯƠNG" & KĨ THUẬT HÁT ĐUỔI (CANON)',
    subtitle: 'Nhạc & lời Nguyễn Ngọc Thiện (1978) - Hai bè nối tiếp',
    tempo: 'Vui tươi, rộn rã',
    timeSig: '2/4',
    audioNotes: [392.00, 440.00, 493.88, 523.25, 587.33, 523.25, 493.88, 440.00],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      <text x="46" y="24" font-size="15" font-weight="bold" fill="#0f172a">♯</text>
      <text x="64" y="38" font-size="14" font-weight="900" fill="#0f172a">2</text>
      <text x="64" y="52" font-size="14" font-weight="900" fill="#0f172a">4</text>

      ${renderBeamedPair({ x1: 105, n1: 'G4', x2: 150, n2: 'A4', lyric1: 'Có', lyric2: 'chú' })}
      ${renderBeamedPair({ x1: 190, n1: 'B4', x2: 235, n2: 'C5', lyric1: 'chim', lyric2: 'cơ' })}
      <line x1="265" y1="20" x2="265" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 300, note: 'D5', type: 'quarter', lyric: 'vành' })}
      <text x="300" y="14" text-anchor="middle" font-size="9" font-weight="bold" fill="#be123c">Bè 1 vào</text>
      ${renderBeamedPair({ x1: 350, n1: 'C5', x2: 395, n2: 'B4', lyric1: 'khuyên', lyric2: 'nhỏ' })}
      <line x1="435" y1="20" x2="435" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 475, note: 'A4', type: 'quarter', lyric: 'líu' })}
      <text x="475" y="14" text-anchor="middle" font-size="9" font-weight="bold" fill="#2563eb">Bè 2 đuổi</text>
      ${renderNote({ x: 540, note: 'G4', type: 'quarter', lyric: 'lo...' })}
      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 8. Trích đoạn Giao hưởng số 6 Đồng quê (Beethoven) (Chủ đề 2)
  beethoven_pastoral: wrapStaffCard({
    title: 'L. V. BEETHOVEN: GIAO HƯỞNG SỐ 6 "ĐỒNG QUÊ" (Chương I)',
    subtitle: 'Chủ đề phong cảnh thôn quê thanh bình giọng Fa trưởng',
    tempo: 'Allegro ma non troppo',
    timeSig: '2/4',
    audioNotes: [349.23, 440.00, 523.25, 440.00, 392.00, 349.23],
    width: 640,
    height: 120,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      <!-- Hóa biểu Bb ở dòng 3 -->
      <text x="46" y="44" font-size="15" font-weight="bold" fill="#0f172a">♭</text>
      <text x="64" y="38" font-size="14" font-weight="900" fill="#0f172a">2</text>
      <text x="64" y="52" font-size="14" font-weight="900" fill="#0f172a">4</text>

      ${renderNote({ x: 110, note: 'F4', type: 'quarter', lyric: 'Fa' })}
      ${renderBeamedPair({ x1: 170, n1: 'A4', x2: 215, n2: 'C5', lyric1: 'La', lyric2: 'Đô' })}
      <line x1="260" y1="20" x2="260" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 305, note: 'A4', type: 'quarter', lyric: 'La' })}
      ${renderBeamedPair({ x1: 365, n1: 'G4', x2: 410, n2: 'F4', lyric1: 'Sol', lyric2: 'Fa' })}
      <line x1="460" y1="20" x2="460" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 520, note: 'F4', type: 'half', lyric: 'Fa (ngân)' })}
      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 9. Bài đọc nhạc số 3 & So sánh giọng (Chủ đề 3)
  reading_3: wrapStaffCard({
    title: 'BÀI ĐỌC NHẠC SỐ 3 (Giọng Mi thứ, cấu trúc câu đối xứng)',
    subtitle: 'Luyện quãng 2, quãng 3 và đảo phách',
    tempo: 'Moderato',
    timeSig: '2/4',
    audioNotes: [329.63, 392.00, 440.00, 493.88, 523.25, 493.88, 392.00, 329.63],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      <text x="46" y="24" font-size="15" font-weight="bold" fill="#0f172a">♯</text>
      <text x="64" y="38" font-size="14" font-weight="900" fill="#0f172a">2</text>
      <text x="64" y="52" font-size="14" font-weight="900" fill="#0f172a">4</text>

      ${renderBeamedPair({ x1: 110, n1: 'E4', x2: 155, n2: 'G4', lyric1: 'Mi', lyric2: 'Sol' })}
      ${renderBeamedPair({ x1: 195, n1: 'A4', x2: 240, n2: 'B4', lyric1: 'La', lyric2: 'Si' })}
      <line x1="275" y1="20" x2="275" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 315, note: 'C5', type: 'quarter', lyric: 'Đô' })}
      ${renderBeamedPair({ x1: 370, n1: 'B4', x2: 415, n2: 'G4', lyric1: 'Si', lyric2: 'Sol' })}
      <line x1="455" y1="20" x2="455" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 520, note: 'E4', type: 'half', lyric: 'Mi (kết)' })}
      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 10. Hợp âm ba chính giọng Son trưởng & Mi thứ (Chủ đề 4)
  primary_triads: wrapStaffCard({
    title: 'CÁC HỢP ÂM BA CHÍNH CỦA GIỌNG SON TRƯỞNG & MI THỨ',
    subtitle: 'Son trưởng: G (I) - C (IV) - D (V); Mi thứ hòa thanh có B (V trưởng)',
    tempo: 'Lento',
    timeSig: '4/4',
    audioNotes: [392.00, 493.88, 587.33, 523.25, 659.25, 783.99, 587.33, 739.99, 880.00],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      <text x="46" y="24" font-size="15" font-weight="bold" fill="#0f172a">♯</text>

      <!-- Hợp âm G (Bậc I) -->
      ${renderTriad({ x: 90, root: 'G4', third: 'B4', fifth: 'D5', chordName: 'G (Bậc I)' })}
      <line x1="165" y1="20" x2="165" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      <!-- Hợp âm C (Bậc IV) -->
      ${renderTriad({ x: 215, root: 'C4', third: 'E4', fifth: 'G4', chordName: 'C (Bậc IV)' })}
      <line x1="290" y1="20" x2="290" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      <!-- Hợp âm D (Bậc V) -->
      ${renderTriad({ x: 340, root: 'D4', third: 'F#4', fifth: 'A4', chordName: 'D (Bậc V)' })}
      <line x1="415" y1="20" x2="415" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      <!-- Hợp âm Em (Bậc I thứ) -->
      ${renderTriad({ x: 465, root: 'E4', third: 'G4', fifth: 'B4', chordName: 'Em (Bậc I thứ)' })}
      <line x1="535" y1="20" x2="535" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      <!-- Hợp âm B (Bậc V hòa thanh) -->
      ${renderTriad({ x: 580, root: 'B3', third: 'D#4', fifth: 'F#4', chordName: 'B (Át V)' })}
      <line x1="625" y1="20" x2="625" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 11. Bài đọc nhạc số 4 hai bè (Chủ đề 4)
  reading_4_two_parts: wrapStaffCard({
    title: 'BÀI ĐỌC NHẠC SỐ 4 (Thực hành hòa âm hai bè song song)',
    subtitle: 'Bè 1 (Giai điệu trên) hòa quyện cùng Bè 2 (Giai điệu dưới)',
    tempo: 'Andante cantabile',
    timeSig: '3/4',
    audioNotes: [493.88, 392.00, 523.25, 440.00, 493.88, 392.00, 329.63],
    width: 640,
    height: 130,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      <text x="46" y="24" font-size="15" font-weight="bold" fill="#0f172a">♯</text>
      <text x="64" y="38" font-size="14" font-weight="900" fill="#0f172a">3</text>
      <text x="64" y="52" font-size="14" font-weight="900" fill="#0f172a">4</text>

      <!-- Cặp 1: Bè 1 Si (B4), Bè 2 Sol (G4) -->
      ${renderHarmonicInterval({ x: 120, n1: 'G4', n2: 'B4', intervalName: 'Q.3', chordLabel: 'Bè 1: Si / Bè 2: Sol' })}
      
      <!-- Cặp 2: Bè 1 Đô (C5), Bè 2 La (A4) -->
      ${renderHarmonicInterval({ x: 230, n1: 'A4', n2: 'C5', intervalName: 'Q.3', chordLabel: 'Bè 1: Đô / Bè 2: La' })}
      <line x1="290" y1="20" x2="290" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      <!-- Cặp 3: Bè 1 Rê (D5), Bè 2 Si (B4) -->
      ${renderHarmonicInterval({ x: 350, n1: 'B4', n2: 'D5', intervalName: 'Q.3', chordLabel: 'Bè 1: Rê / Bè 2: Si' })}
      
      <!-- Cặp 4: Kết về Mi4 (Đồng âm / Quãng 8) -->
      ${renderHarmonicInterval({ x: 490, n1: 'E4', n2: 'B4', intervalName: 'Q.5', chordLabel: 'Bè 1: Si / Bè 2: Mi' })}

      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 12. Thang âm 4 âm Dân ca "Cò lả" (Lựa chọn Hát - Bài 3)
  cola_scale: wrapStaffCard({
    title: 'THANG ÂM BỐN ÂM DÂN CA "CÒ LẢ": SOL – LA – SI – RÊ',
    subtitle: 'Nét đặc trưng dân ca đồng bằng Bắc Bộ kèm luyến láy',
    tempo: 'Êm dịu, trong sáng',
    timeSig: '2/4',
    audioNotes: [392.00, 440.00, 493.88, 587.33, 493.88, 440.00, 392.00],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      
      ${renderNote({ x: 90, note: 'G4', type: 'quarter', name: 'Sol', lyric: 'Con' })}
      ${renderNote({ x: 170, note: 'A4', type: 'quarter', name: 'La', lyric: 'cò' })}
      ${renderNote({ x: 250, note: 'B4', type: 'quarter', name: 'Si', lyric: 'bay' })}
      ${renderNote({ x: 340, note: 'D5', type: 'quarter', name: 'Rê', lyric: 'lả' })}

      <!-- Nốt luyến ngược về -->
      ${renderBeamedPair({ x1: 420, n1: 'B4', x2: 470, n2: 'A4', lyric1: 'lả', lyric2: 'bay' })}
      ${renderNote({ x: 550, note: 'G4', type: 'half', name: 'Sol', lyric: 'la...' })}

      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 13. Sơ đồ 6 dây đàn guitar & Nốt buông thế tay 1 (Lựa chọn Guitar - Bài 1)
  guitar_strings_diagram: `
    <div class="my-5 p-5 rounded-2xl bg-slate-900 text-white border border-slate-700 shadow-md">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-700">
        <h4 class="text-sm sm:text-base font-black text-rose-400 flex items-center gap-2">
          <i class="fa-solid fa-guitar"></i> SƠ ĐỒ 6 DÂY GUITAR & QUY ƯỚC NGÓN TAY
        </h4>
        <span class="text-xs text-slate-400">Từ dây 1 (cao) đến dây 6 (trầm)</span>
      </div>
      <div class="overflow-x-auto">
        <svg viewBox="0 0 660 160" class="w-full max-w-3xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <!-- Cần đàn 6 dây -->
          <rect x="70" y="20" width="520" height="100" fill="#1e293b" rx="8" stroke="#475569" stroke-width="2"/>
          
          <!-- Lược đàn Nut -->
          <rect x="70" y="20" width="14" height="100" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
          <text x="77" y="14" text-anchor="middle" font-size="9" font-weight="bold" fill="#94a3b8">Nut</text>

          <!-- 4 phím đàn Fret lines -->
          <line x1="190" y1="20" x2="190" y2="120" stroke="#cbd5e1" stroke-width="2.5"/>
          <text x="135" y="14" text-anchor="middle" font-size="10" font-weight="bold" fill="#38bdf8">Phím 1 (Ngón 1)</text>

          <line x1="310" y1="20" x2="310" y2="120" stroke="#cbd5e1" stroke-width="2.5"/>
          <text x="250" y="14" text-anchor="middle" font-size="10" font-weight="bold" fill="#38bdf8">Phím 2 (Ngón 2)</text>

          <line x1="430" y1="20" x2="430" y2="120" stroke="#cbd5e1" stroke-width="2.5"/>
          <text x="370" y="14" text-anchor="middle" font-size="10" font-weight="bold" fill="#38bdf8">Phím 3 (Ngón 3)</text>

          <line x1="550" y1="20" x2="550" y2="120" stroke="#cbd5e1" stroke-width="2.5"/>
          <text x="490" y="14" text-anchor="middle" font-size="10" font-weight="bold" fill="#38bdf8">Phím 4 (Ngón 4)</text>

          <!-- 6 dây đàn (độ dày tăng dần) -->
          <!-- Dây 1 (E4) -->
          <line x1="70" y1="28" x2="590" y2="28" stroke="#e2e8f0" stroke-width="1.2"/>
          <text x="45" y="32" font-size="11" font-weight="bold" fill="#f43f5e">Dây 1: E (Mi)</text>

          <!-- Dây 2 (B3) -->
          <line x1="70" y1="45" x2="590" y2="45" stroke="#e2e8f0" stroke-width="1.5"/>
          <text x="45" y="49" font-size="11" font-weight="bold" fill="#fb923c">Dây 2: B (Si)</text>

          <!-- Dây 3 (G3) -->
          <line x1="70" y1="62" x2="590" y2="62" stroke="#e2e8f0" stroke-width="1.8"/>
          <text x="45" y="66" font-size="11" font-weight="bold" fill="#facc15">Dây 3: G (Sol)</text>

          <!-- Dây 4 (D3) -->
          <line x1="70" y1="79" x2="590" y2="79" stroke="#cbd5e1" stroke-width="2.2"/>
          <text x="45" y="83" font-size="11" font-weight="bold" fill="#4ade80">Dây 4: D (Rê)</text>

          <!-- Dây 5 (A2) -->
          <line x1="70" y1="96" x2="590" y2="96" stroke="#cbd5e1" stroke-width="2.8"/>
          <text x="45" y="100" font-size="11" font-weight="bold" fill="#60a5fa">Dây 5: A (La)</text>

          <!-- Dây 6 (E2) -->
          <line x1="70" y1="113" x2="590" y2="113" stroke="#cbd5e1" stroke-width="3.5"/>
          <text x="45" y="117" font-size="11" font-weight="bold" fill="#c084fc">Dây 6: E (Mi)</text>

          <!-- Ghi chú ngón tay -->
          <text x="330" y="148" text-anchor="middle" font-size="11" font-weight="bold" fill="#cbd5e1">
            Tay trái: Ngón 1 (Trỏ) - 2 (Giữa) - 3 (Áp út) - 4 (Út) • Tay phải: p (Cái) - i (Trỏ) - m (Giữa) - a (Áp út)
          </text>
        </svg>
      </div>
    </div>
  `,

  // 14. Bộ hợp âm Waltz: G, C, D (Lựa chọn Guitar - Bài 5)
  waltz_chords: `
    <div class="my-5 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
        <h4 class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 flex items-center gap-2">
          <i class="fa-solid fa-guitar"></i> THẾ BẤM 3 HỢP ÂM CHÍNH ĐỆM ĐIỆU WALTZ: G – C – D
        </h4>
        <span class="text-xs text-slate-500">Giọng Son trưởng (Nhịp 3/4)</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto py-2">
        <!-- G Chord -->
        <div class="flex flex-col items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
          <svg viewBox="0 0 100 125" class="w-28 h-auto select-none">
            ${renderGuitarChordBox({ x: 10, y: 20, name: 'G (Son trưởng)', frets: [3, 0, 0, 0, 2, 3], fingers: ['4', '', '', '', '1', '2'] })}
          </svg>
          <span class="text-xs text-slate-500 dark:text-slate-400 mt-2">Dây trầm: <strong>Dây 6 (G)</strong></span>
        </div>

        <!-- C Chord -->
        <div class="flex flex-col items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
          <svg viewBox="0 0 100 125" class="w-28 h-auto select-none">
            ${renderGuitarChordBox({ x: 10, y: 20, name: 'C (Đô trưởng)', frets: [0, 1, 0, 2, 3, 'X'], fingers: ['', '1', '', '2', '3', ''] })}
          </svg>
          <span class="text-xs text-slate-500 dark:text-slate-400 mt-2">Dây trầm: <strong>Dây 5 (C)</strong></span>
        </div>

        <!-- D Chord -->
        <div class="flex flex-col items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
          <svg viewBox="0 0 100 125" class="w-28 h-auto select-none">
            ${renderGuitarChordBox({ x: 10, y: 20, name: 'D (Rê trưởng)', frets: [2, 3, 2, 0, 'X', 'X'], fingers: ['2', '3', '1', '', '', ''] })}
          </svg>
          <span class="text-xs text-slate-500 dark:text-slate-400 mt-2">Dây trầm: <strong>Dây 4 (D)</strong></span>
        </div>
      </div>
      <div class="mt-3 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-xs text-rose-900 dark:text-rose-200 text-center font-bold">
        Mẫu gảy Waltz nhịp 3/4: Phách 1 gảy Bass (ngón p) — Phách 2 & 3 móc đồng thời 3 dây 3-2-1 (ngón i + m + a)
      </div>
    </div>
  `,

  // 15. Bộ hợp âm Fox: Em, Am, B7 (Lựa chọn Guitar - Bài 6)
  fox_chords: `
    <div class="my-5 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
        <h4 class="text-sm sm:text-base font-black text-purple-600 dark:text-purple-400 flex items-center gap-2">
          <i class="fa-solid fa-guitar"></i> THẾ BẤM 3 HỢP ÂM CHÍNH ĐỆM ĐIỆU FOX: Em – Am – B7
        </h4>
        <span class="text-xs text-slate-500">Giọng Mi thứ (Nhịp 2/4)</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto py-2">
        <!-- Em Chord -->
        <div class="flex flex-col items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
          <svg viewBox="0 0 100 125" class="w-28 h-auto select-none">
            ${renderGuitarChordBox({ x: 10, y: 20, name: 'Em (Mi thứ)', frets: [0, 0, 0, 2, 2, 0], fingers: ['', '', '', '3', '2', ''] })}
          </svg>
          <span class="text-xs text-slate-500 dark:text-slate-400 mt-2">Dây trầm: <strong>Dây 6 (E)</strong></span>
        </div>

        <!-- Am Chord -->
        <div class="flex flex-col items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
          <svg viewBox="0 0 100 125" class="w-28 h-auto select-none">
            ${renderGuitarChordBox({ x: 10, y: 20, name: 'Am (La thứ)', frets: [0, 1, 2, 2, 0, 'X'], fingers: ['', '1', '3', '2', '', ''] })}
          </svg>
          <span class="text-xs text-slate-500 dark:text-slate-400 mt-2">Dây trầm: <strong>Dây 5 (A)</strong></span>
        </div>

        <!-- B7 Chord -->
        <div class="flex flex-col items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
          <svg viewBox="0 0 100 125" class="w-28 h-auto select-none">
            ${renderGuitarChordBox({ x: 10, y: 20, name: 'B7 (Si bảy)', frets: [2, 0, 2, 1, 2, 'X'], fingers: ['4', '', '3', '1', '2', ''] })}
          </svg>
          <span class="text-xs text-slate-500 dark:text-slate-400 mt-2">Dây trầm: <strong>Dây 5 (B)</strong></span>
        </div>
      </div>
      <div class="mt-3 p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-xs text-purple-900 dark:text-purple-200 text-center font-bold">
        Mẫu gảy Fox nhịp 2/4: Phách 1: Bass (p) - Chát (i+m+a) • Phách 2: Bass phụ (p) - Chát (i+m+a)
      </div>
    </div>
  `,

  // 16. Hòa tấu "Ngày đầu tiên đi học" (Lựa chọn Guitar - Bài 7)
  ensemble_ngaydautien: wrapStaffCard({
    title: 'HÒA TẤU TIỂU PHẨM VIỆT NAM: "NGÀY ĐẦU TIÊN ĐI HỌC"',
    subtitle: 'Nhạc Nguyễn Ngọc Thiện - Phối hợp Guitar 1 (Giai điệu) & Guitar 2 (Đệm hòa âm)',
    tempo: 'Andante espressivo',
    timeSig: '3/4',
    audioNotes: [392.00, 392.00, 440.00, 493.88, 523.25, 493.88, 440.00, 392.00],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      <text x="46" y="24" font-size="15" font-weight="bold" fill="#0f172a">♯</text>
      <text x="64" y="38" font-size="14" font-weight="900" fill="#0f172a">3</text>
      <text x="64" y="52" font-size="14" font-weight="900" fill="#0f172a">4</text>

      ${renderNote({ x: 105, note: 'G4', type: 'quarter', lyric: 'Ngày' })}
      ${renderNote({ x: 165, note: 'G4', type: 'quarter', lyric: 'đầu' })}
      ${renderNote({ x: 225, note: 'A4', type: 'quarter', lyric: 'tiên' })}
      <line x1="275" y1="20" x2="275" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 315, note: 'B4', type: 'quarter', lyric: 'đi' })}
      ${renderNote({ x: 375, note: 'C5', type: 'quarter', lyric: 'học' })}
      ${renderNote({ x: 435, note: 'B4', type: 'quarter', lyric: 'mẹ' })}
      <line x1="485" y1="20" x2="485" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 535, note: 'A4', type: 'half', lyric: 'dắt' })}
      ${renderNote({ x: 585, note: 'G4', type: 'quarter', lyric: 'tay' })}
      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 17. Hòa tấu nước ngoài "Lullaby" (Brahms) (Lựa chọn Guitar - Bài 8)
  ensemble_lullaby: wrapStaffCard({
    title: 'HÒA TẤU TIỂU PHẨM QUỐC TẾ: "LULLABY" (JOHANNES BRAHMS)',
    subtitle: 'Chuyển soạn hòa tấu Guitar: Quang Tùng - Xuân Cung',
    tempo: 'Andantino',
    timeSig: '3/4',
    audioNotes: [392.00, 392.00, 493.88, 392.00, 392.00, 493.88, 392.00, 493.88, 587.33],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      <text x="46" y="24" font-size="15" font-weight="bold" fill="#0f172a">♯</text>
      <text x="64" y="38" font-size="14" font-weight="900" fill="#0f172a">3</text>
      <text x="64" y="52" font-size="14" font-weight="900" fill="#0f172a">4</text>

      ${renderNote({ x: 105, note: 'G4', type: 'quarter', lyric: 'Guten' })}
      ${renderNote({ x: 165, note: 'G4', type: 'quarter', lyric: 'Abend,' })}
      ${renderNote({ x: 235, note: 'B4', type: 'half', lyric: 'gut\'' })}
      <line x1="290" y1="20" x2="290" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 330, note: 'G4', type: 'quarter', lyric: 'Nacht,' })}
      ${renderNote({ x: 390, note: 'G4', type: 'quarter', lyric: 'mit' })}
      ${renderNote({ x: 460, note: 'B4', type: 'half', lyric: 'Rosen' })}
      <line x1="515" y1="20" x2="515" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 565, note: 'D5', type: 'half', lyric: 'bedacht...' })}
      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 18. Mẫu luyện thanh liền bậc nguyên âm Ô, A, Ê (Bài 1 Hát)
  vocal_exercise_1: wrapStaffCard({
    title: 'MẪU LUYỆN THANH KHỞI ĐỘNG LIỀN BẬC NGUYÊN ÂM Ô – A – Ê',
    subtitle: 'Năm nốt liền bậc từ Sol4 xuống Đô4; mở rộng khẩu hình tự nhiên',
    tempo: 'Moderato',
    timeSig: '4/4',
    audioNotes: [392.00, 349.23, 329.63, 293.66, 261.63],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      <text x="50" y="38" font-size="14" font-weight="900" fill="#0f172a">4</text>
      <text x="50" y="52" font-size="14" font-weight="900" fill="#0f172a">4</text>

      ${renderNote({ x: 95, note: 'G4', type: 'quarter', lyric: 'Ô...', name: 'Sol' })}
      ${renderNote({ x: 175, note: 'F4', type: 'quarter', lyric: 'Ô...', name: 'Fa' })}
      ${renderNote({ x: 255, note: 'E4', type: 'quarter', lyric: 'Ô...', name: 'Mi' })}
      ${renderNote({ x: 335, note: 'D4', type: 'quarter', lyric: 'Ô...', name: 'Rê' })}
      ${renderNote({ x: 440, note: 'C4', type: 'half', lyric: 'Ô...', name: 'Đô (ngân)' })}

      <line x1="535" y1="20" x2="535" y2="60" stroke="#94a3b8" stroke-width="1.2"/>
      <!-- Nốt nhắc lại với A, Ê -->
      <text x="580" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">Lặp lại: A... Ê...</text>
      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 19. Mẫu âm luyện hơi thở ngân dài (Bài 2 Hát)
  vocal_exercise_breath: wrapStaffCard({
    title: 'MẪU ÂM RÈN LUYỆN LÀM CHỦ HƠI THỞ & NGÂN DÀI',
    subtitle: 'Nén hơi cơ hoành, giữ âm thanh ổn định qua các bước nhảy quãng 3',
    tempo: 'Andante',
    timeSig: '4/4',
    audioNotes: [261.63, 329.63, 392.00, 523.25, 392.00, 329.63, 261.63],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      <text x="50" y="38" font-size="14" font-weight="900" fill="#0f172a">4</text>
      <text x="50" y="52" font-size="14" font-weight="900" fill="#0f172a">4</text>

      ${renderNote({ x: 90, note: 'C4', type: 'quarter', lyric: 'Lấy hơi', name: 'Đô' })}
      ${renderNote({ x: 160, note: 'E4', type: 'quarter', lyric: 'Giữ', name: 'Mi' })}
      ${renderNote({ x: 230, note: 'G4', type: 'quarter', lyric: 'hơi', name: 'Sol' })}
      ${renderNote({ x: 300, note: 'C5', type: 'quarter', lyric: 'đều', name: 'Đô' })}
      <line x1="345" y1="20" x2="345" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 385, note: 'G4', type: 'quarter', lyric: 'điều', name: 'Sol' })}
      ${renderNote({ x: 455, note: 'E4', type: 'quarter', lyric: 'tiết', name: 'Mi' })}
      ${renderNote({ x: 545, note: 'C4', type: 'half', lyric: 'hơi...', name: 'Đô (ngân)' })}

      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 20. Trích đoạn Mùa xuân đầu tiên (Bài 4 Hát)
  song_muaxuandautien: wrapStaffCard({
    title: 'VĂN CAO: "MÙA XUÂN ĐẦU TIÊN" (Kĩ thuật Hát giọng chuyển)',
    subtitle: 'Nhịp 3/4 du dương; chuyển tiếp nhẹ nhàng từ giọng ngực sang giọng pha',
    tempo: 'Nhẹ nhàng, sâu lắng',
    timeSig: '3/4',
    audioNotes: [392.00, 392.00, 440.00, 493.88, 587.33, 493.88, 392.00],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      <text x="46" y="24" font-size="15" font-weight="bold" fill="#0f172a">♯</text>
      <text x="64" y="38" font-size="14" font-weight="900" fill="#0f172a">3</text>
      <text x="64" y="52" font-size="14" font-weight="900" fill="#0f172a">4</text>

      ${renderNote({ x: 105, note: 'G4', type: 'quarter', lyric: 'Rồi' })}
      ${renderNote({ x: 165, note: 'G4', type: 'quarter', lyric: 'dặt' })}
      ${renderNote({ x: 225, note: 'A4', type: 'quarter', lyric: 'dìu' })}
      <line x1="270" y1="20" x2="270" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 310, note: 'B4', type: 'half', lyric: 'mùa' })}
      <text x="310" y="14" text-anchor="middle" font-size="9" font-weight="bold" fill="#be123c">Giọng pha</text>
      ${renderNote({ x: 385, note: 'D5', type: 'quarter', lyric: 'xuân' })}
      <line x1="435" y1="20" x2="435" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 480, note: 'B4', type: 'half', lyric: 'đầu' })}
      ${renderNote({ x: 555, note: 'G4', type: 'quarter', lyric: 'tiên...' })}

      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 21. Bài tập nốt & Tab gảy dây 5 và dây 4 (Bài 1 Guitar)
  guitar_exercise_d54: wrapStaffCard({
    title: 'BÀI TẬP BẤM VÀ GẢY TRÊN DÂY 5 VÀ DÂY 4 (Khuông nhạc & Tab)',
    subtitle: 'Thế tay 1: Dây 5 buông La, phím 2 Si, phím 3 Đô • Dây 4 buông Rê, phím 2 Mi, phím 3 Fa',
    tempo: 'Moderato',
    timeSig: '4/4',
    audioNotes: [220.00, 246.94, 261.63, 293.66, 329.63, 349.23],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}

      <!-- Dây 5: La (A3) buông -->
      ${renderNote({ x: 80, note: 'A3', type: 'quarter', name: 'La (D5: 0)' })}
      <!-- Dây 5: Si (B3) phím 2 -->
      ${renderNote({ x: 155, note: 'B3', type: 'quarter', name: 'Si (D5: 2)' })}
      <!-- Dây 5: Đô (C4) phím 3 -->
      ${renderNote({ x: 230, note: 'C4', type: 'quarter', name: 'Đô (D5: 3)' })}
      <line x1="280" y1="20" x2="280" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      <!-- Dây 4: Rê (D4) buông -->
      ${renderNote({ x: 330, note: 'D4', type: 'quarter', name: 'Rê (D4: 0)' })}
      <!-- Dây 4: Mi (E4) phím 2 -->
      ${renderNote({ x: 415, note: 'E4', type: 'quarter', name: 'Mi (D4: 2)' })}
      <!-- Dây 4: Fa (F4) phím 3 -->
      ${renderNote({ x: 505, note: 'F4', type: 'half', name: 'Fa (D4: 3)' })}

      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 22. Bài tập nốt & Tab gảy dây 3 và dây 2 (Bài 2 Guitar)
  guitar_exercise_d32: wrapStaffCard({
    title: 'BÀI TẬP BẤM VÀ GẢY TRÊN DÂY 3 VÀ DÂY 2 (Luyện ngón i – m)',
    subtitle: 'Dây 3 buông Sol, phím 2 La • Dây 2 buông Si, phím 1 Đô, phím 3 Rê',
    tempo: 'Moderato',
    timeSig: '4/4',
    audioNotes: [392.00, 440.00, 493.88, 523.25, 587.33],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}

      ${renderNote({ x: 80, note: 'G4', type: 'quarter', name: 'Sol (D3: 0)', lyric: 'i' })}
      ${renderNote({ x: 160, note: 'A4', type: 'quarter', name: 'La (D3: 2)', lyric: 'm' })}
      ${renderNote({ x: 240, note: 'B4', type: 'quarter', name: 'Si (D2: 0)', lyric: 'i' })}
      <line x1="290" y1="20" x2="290" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 345, note: 'C5', type: 'quarter', name: 'Đô (D2: 1)', lyric: 'm' })}
      ${renderNote({ x: 435, note: 'D5', type: 'quarter', name: 'Rê (D2: 3)', lyric: 'i' })}
      ${renderNote({ x: 535, note: 'C5', type: 'half', name: 'Đô (D2: 1)', lyric: 'm' })}

      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  }),

  // 23. Bản nhạc Happy Birthday trên guitar (Bài 3 Guitar)
  guitar_happy_birthday: wrapStaffCard({
    title: 'TIỂU PHẨM GUITAR THỰC HÀNH: "HAPPY BIRTHDAY"',
    subtitle: 'Luyện tập nốt dây 6 đến dây 1; thể hiện sắc thái p (piano) và f (forte)',
    tempo: 'Allegretto',
    timeSig: '3/4',
    audioNotes: [392.00, 392.00, 440.00, 392.00, 523.25, 493.88],
    width: 640,
    height: 125,
    svgContent: `
      ${getStaffLines(640, 10, 630)}
      ${getTrebleClef(15, 6)}
      <text x="48" y="38" font-size="14" font-weight="900" fill="#0f172a">3</text>
      <text x="48" y="52" font-size="14" font-weight="900" fill="#0f172a">4</text>
      <text x="75" y="14" font-size="12" font-weight="900" fill="#2563eb">p (nhỏ)</text>

      ${renderBeamedPair({ x1: 95, n1: 'G4', x2: 140, n2: 'G4', lyric1: 'Hap-', lyric2: 'py' })}
      <line x1="175" y1="20" x2="175" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      ${renderNote({ x: 215, note: 'A4', type: 'quarter', lyric: 'birth-' })}
      ${renderNote({ x: 285, note: 'G4', type: 'quarter', lyric: 'day' })}
      ${renderNote({ x: 355, note: 'C5', type: 'quarter', lyric: 'to' })}
      <line x1="400" y1="20" x2="400" y2="60" stroke="#94a3b8" stroke-width="1.2"/>

      <text x="435" y="14" font-size="12" font-weight="900" fill="#be123c">f (mạnh)</text>
      ${renderNote({ x: 460, note: 'B4', type: 'half', lyric: 'you...' })}

      <line x1="615" y1="20" x2="615" y2="60" stroke="#0f172a" stroke-width="1.2"/>
      <line x1="620" y1="20" x2="620" y2="60" stroke="#0f172a" stroke-width="3"/>
    `
  })

};

module.exports = amnhac10Staves;
