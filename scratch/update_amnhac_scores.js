const fs = require('fs');

// Build the perfect two-staff Grand Choir SVG for Lesson 3 (Bảy sắc cầu vồng)
function buildGrandStaffSvg() {
  const gClefSvg = (x, y) => `
    <g transform="translate(${x}, ${y}) scale(0.62)">
      <path d="M 17 62 C 16 64, 13 65, 11 64 C 9 63, 7 61, 7 58 C 7 52, 13 46, 20 46 C 28 46, 33 52, 33 60 C 33 69, 25 78, 16 80 C 13 81, 10 79, 10 76 C 10 74, 12 73, 14 73 C 18 73, 23 70, 24 64 C 25 58, 20 54, 15 54 C 11 54, 8 57, 8 61 C 8 68, 17 74, 21 73 M 19 62 L 19 16 C 19 12, 16 7, 13 7 C 11 7, 9 9, 9 11 C 9 15, 14 24, 21 34 L 21 82 C 21 89, 17 96, 12 96 C 8 96, 5 93, 5 89 C 5 86, 7 84, 9 84 C 11 84, 13 86, 12 89 C 12 90, 13 92, 14 92 C 16 92, 17 88, 17 84 Z" fill="#1e293b"/>
    </g>
  `;

  return `
    <div class="my-4 p-4 sm:p-5 rounded-2xl bg-amber-50/50 dark:bg-slate-900/90 border border-amber-200/90 dark:border-slate-700 shadow-sm transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-amber-200/70 dark:border-slate-800">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 mr-2">
            <i class="fa-solid fa-file-audio"></i> Bản nhạc chuẩn
          </span>
          <strong class="text-xs sm:text-sm text-gray-900 dark:text-white font-bold">NÉT NHẠC HÁT BÈ: BẢY SẮC CẦU VỒNG (Vũ Trọng Tường)</strong>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
            <i class="fa-solid fa-layer-group text-emerald-600"></i> Hệ thống 2 khuông nhạc bè chuẩn mực (Grand Choir Staff): Tách biệt Bè 1 (Giai điệu) và Bè 2 (Hoà âm), không lo đè nốt.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-[11px] font-semibold text-gray-500 dark:text-gray-400 italic mr-1">
            Tempo: Moderato • Nhịp 2/4
          </span>
          <button type="button" onclick="playStaffAudio('staff-bai3-be1')" class="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-sm" title="Chỉ nghe Bè 1">
            <i class="fa-solid fa-volume-high"></i> Bè 1 (Soprano)
          </button>
          <button type="button" onclick="playStaffAudio('staff-bai3-be2')" class="px-2.5 py-1 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-sm" title="Chỉ nghe Bè 2">
            <i class="fa-solid fa-volume-high"></i> Bè 2 (Alto)
          </button>
          <button type="button" onclick="playStaffAudio('staff-bai3')" class="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-sm" title="Nghe 2 bè hoà âm cùng lúc">
            <i class="fa-solid fa-music"></i> Hoà âm cả 2 bè
          </button>
        </div>
      </div>

      <div class="overflow-x-auto">
        <svg viewBox="0 0 650 250" class="w-full max-w-4xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- Background subtle grouping box -->
          <rect x="2" y="2" width="646" height="246" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="1" class="dark:fill-slate-900/60 dark:stroke-slate-800"/>

          <!-- Dấu móc ngoặc hệ thống hợp xướng (Accolade bracket) bên trái nối liền 2 khuông -->
          <line x1="18" y1="28" x2="18" y2="200" stroke="#0f172a" stroke-width="2.5"/>
          <path d="M 18 28 C 10 65, 10 100, 4 114 C 10 128, 10 163, 18 200" fill="none" stroke="#0f172a" stroke-width="2.5"/>

          <!-- ==================== KHUÔNG 1: BÈ 1 (SOPRANO) ==================== -->
          <text x="28" y="20" font-size="11" font-weight="bold" fill="#059669">Bè 1: Giai điệu chính (Soprano - Giọng Nữ cao / Nam cao)</text>
          
          <!-- 5 dòng kẻ khuông 1 (y: 28, 38, 48, 58, 68) -->
          <line x1="18" y1="28" x2="635" y2="28" stroke="#64748b" stroke-width="1.2"/>
          <line x1="18" y1="38" x2="635" y2="38" stroke="#64748b" stroke-width="1.2"/>
          <line x1="18" y1="48" x2="635" y2="48" stroke="#64748b" stroke-width="1.2"/>
          <line x1="18" y1="58" x2="635" y2="58" stroke="#64748b" stroke-width="1.2"/>
          <line x1="18" y1="68" x2="635" y2="68" stroke="#64748b" stroke-width="1.2"/>

          <!-- Khóa Sol khuông 1 -->
          ${gClefSvg(22, 14)}

          <!-- Số chỉ nhịp 2/4 khuông 1 -->
          <text x="54" y="46" font-size="14" font-weight="bold" fill="#0f172a">2</text>
          <text x="54" y="63" font-size="14" font-weight="bold" fill="#0f172a">4</text>

          <!-- Ô nhịp 1: Sol4 - Sol4 (đen) -->
          <ellipse cx="105" cy="58" rx="5.5" ry="4" transform="rotate(-25 105 58)" fill="#0f172a"/>
          <line x1="109.8" y1="58" x2="109.8" y2="32" stroke="#0f172a" stroke-width="1.6"/>
          <text x="105" y="82" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#059669">Sol</text>

          <ellipse cx="155" cy="58" rx="5.5" ry="4" transform="rotate(-25 155 58)" fill="#0f172a"/>
          <line x1="159.8" y1="58" x2="159.8" y2="32" stroke="#0f172a" stroke-width="1.6"/>
          <text x="155" y="82" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#059669">Sol</text>

          <!-- Vạch nhịp 1 -->
          <line x1="195" y1="28" x2="195" y2="68" stroke="#64748b" stroke-width="1.3"/>

          <!-- Ô nhịp 2: Đô5 - Đô5 (đen) -->
          <ellipse cx="235" cy="43" rx="5.5" ry="4" transform="rotate(-25 235 43)" fill="#0f172a"/>
          <line x1="230.2" y1="43" x2="230.2" y2="69" stroke="#0f172a" stroke-width="1.6"/>
          <text x="235" y="82" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#059669">Đô</text>

          <ellipse cx="285" cy="43" rx="5.5" ry="4" transform="rotate(-25 285 43)" fill="#0f172a"/>
          <line x1="280.2" y1="43" x2="280.2" y2="69" stroke="#0f172a" stroke-width="1.6"/>
          <text x="285" y="82" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#059669">Đô</text>

          <!-- Vạch nhịp 2 -->
          <line x1="325" y1="28" x2="325" y2="68" stroke="#64748b" stroke-width="1.3"/>

          <!-- Ô nhịp 3: La4 (móc đơn) - Si4 (móc đơn) - Đô5 (đen) -->
          <!-- La4 & Si4 nối đuôi -->
          <ellipse cx="360" cy="53" rx="5.5" ry="4" transform="rotate(-25 360 53)" fill="#0f172a"/>
          <ellipse cx="395" cy="48" rx="5.5" ry="4" transform="rotate(-25 395 48)" fill="#0f172a"/>
          <line x1="364.8" y1="53" x2="364.8" y2="28" stroke="#0f172a" stroke-width="1.6"/>
          <line x1="399.8" y1="48" x2="399.8" y2="23" stroke="#0f172a" stroke-width="1.6"/>
          <line x1="364" y1="28" x2="400.5" y2="23" stroke="#0f172a" stroke-width="3.2"/>
          <text x="360" y="82" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#059669">La</text>
          <text x="395" y="82" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#059669">Si</text>

          <!-- Đô5 -->
          <ellipse cx="440" cy="43" rx="5.5" ry="4" transform="rotate(-25 440 43)" fill="#0f172a"/>
          <line x1="435.2" y1="43" x2="435.2" y2="69" stroke="#0f172a" stroke-width="1.6"/>
          <text x="440" y="82" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#059669">Đô</text>

          <!-- Vạch nhịp 3 -->
          <line x1="480" y1="28" x2="480" y2="68" stroke="#64748b" stroke-width="1.3"/>

          <!-- Ô nhịp 4: Sol4 (nốt trắng ngân dài 2 phách) -->
          <ellipse cx="530" cy="58" rx="5.5" ry="4" transform="rotate(-25 530 58)" fill="#fff" stroke="#0f172a" stroke-width="2"/>
          <line x1="534.8" y1="58" x2="534.8" y2="32" stroke="#0f172a" stroke-width="1.6"/>
          <text x="530" y="82" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#059669">Sol</text>

          <!-- Vạch kép khuông 1 -->
          <line x1="631" y1="28" x2="631" y2="68" stroke="#0f172a" stroke-width="1.2"/>
          <line x1="635" y1="28" x2="635" y2="68" stroke="#0f172a" stroke-width="3.5"/>


          <!-- ==================== HÀNG LỜI CA DÙNG CHUNG Ở GIỮA ==================== -->
          <rect x="70" y="98" width="560" height="24" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
          <text x="105" y="114" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">Mưa</text>
          <text x="155" y="114" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">vừa</text>
          <text x="235" y="114" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">tạnh</text>
          <text x="285" y="114" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">nắng</text>
          <text x="360" y="114" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">lên</text>
          <text x="395" y="114" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">cầu</text>
          <text x="440" y="114" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">vồng</text>
          <text x="530" y="114" text-anchor="middle" font-size="11.5" font-style="italic" font-weight="600" fill="#334155">lung linh bay xa...</text>


          <!-- ==================== KHUÔNG 2: BÈ 2 (ALTO) ==================== -->
          <text x="28" y="148" font-size="11" font-weight="bold" fill="#0284c7">Bè 2: Bè hoà âm đi kèm (Alto - Giọng Nữ trầm / Nam trầm)</text>
          
          <!-- 5 dòng kẻ khuông 2 (y: 156, 166, 176, 186, 196) -->
          <line x1="18" y1="156" x2="635" y2="156" stroke="#64748b" stroke-width="1.2"/>
          <line x1="18" y1="166" x2="635" y2="166" stroke="#64748b" stroke-width="1.2"/>
          <line x1="18" y1="176" x2="635" y2="176" stroke="#64748b" stroke-width="1.2"/>
          <line x1="18" y1="186" x2="635" y2="186" stroke="#64748b" stroke-width="1.2"/>
          <line x1="18" y1="196" x2="635" y2="196" stroke="#64748b" stroke-width="1.2"/>

          <!-- Khóa Sol khuông 2 -->
          ${gClefSvg(22, 142)}

          <!-- Số chỉ nhịp 2/4 khuông 2 -->
          <text x="54" y="174" font-size="14" font-weight="bold" fill="#0f172a">2</text>
          <text x="54" y="191" font-size="14" font-weight="bold" fill="#0f172a">4</text>

          <!-- Ô nhịp 1: Mi4 - Mi4 (đen) -->
          <ellipse cx="105" cy="196" rx="5.5" ry="4" transform="rotate(-25 105 196)" fill="#0f172a"/>
          <line x1="109.8" y1="196" x2="109.8" y2="170" stroke="#0f172a" stroke-width="1.6"/>
          <text x="105" y="218" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0284c7">Mi</text>

          <ellipse cx="155" cy="196" rx="5.5" ry="4" transform="rotate(-25 155 196)" fill="#0f172a"/>
          <line x1="159.8" y1="196" x2="159.8" y2="170" stroke="#0f172a" stroke-width="1.6"/>
          <text x="155" y="218" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0284c7">Mi</text>

          <!-- Vạch nhịp 1 khuông 2 -->
          <line x1="195" y1="156" x2="195" y2="196" stroke="#64748b" stroke-width="1.3"/>

          <!-- Ô nhịp 2: Sol4 - Sol4 (đen) -->
          <ellipse cx="235" cy="186" rx="5.5" ry="4" transform="rotate(-25 235 186)" fill="#0f172a"/>
          <line x1="239.8" y1="186" x2="239.8" y2="160" stroke="#0f172a" stroke-width="1.6"/>
          <text x="235" y="218" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0284c7">Sol</text>

          <ellipse cx="285" cy="186" rx="5.5" ry="4" transform="rotate(-25 285 186)" fill="#0f172a"/>
          <line x1="289.8" y1="186" x2="289.8" y2="160" stroke="#0f172a" stroke-width="1.6"/>
          <text x="285" y="218" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0284c7">Sol</text>

          <!-- Vạch nhịp 2 khuông 2 -->
          <line x1="325" y1="156" x2="325" y2="196" stroke="#64748b" stroke-width="1.3"/>

          <!-- Ô nhịp 3: Fa4 (móc đơn) - Sol4 (móc đơn) - La4 (đen) -->
          <!-- Fa4 & Sol4 nối đuôi -->
          <ellipse cx="360" cy="191" rx="5.5" ry="4" transform="rotate(-25 360 191)" fill="#0f172a"/>
          <ellipse cx="395" cy="186" rx="5.5" ry="4" transform="rotate(-25 395 186)" fill="#0f172a"/>
          <line x1="364.8" y1="191" x2="364.8" y2="166" stroke="#0f172a" stroke-width="1.6"/>
          <line x1="399.8" y1="186" x2="399.8" y2="161" stroke="#0f172a" stroke-width="1.6"/>
          <line x1="364" y1="166" x2="400.5" y2="161" stroke="#0f172a" stroke-width="3.2"/>
          <text x="360" y="218" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0284c7">Fa</text>
          <text x="395" y="218" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0284c7">Sol</text>

          <!-- La4 -->
          <ellipse cx="440" cy="181" rx="5.5" ry="4" transform="rotate(-25 440 181)" fill="#0f172a"/>
          <line x1="444.8" y1="181" x2="444.8" y2="155" stroke="#0f172a" stroke-width="1.6"/>
          <text x="440" y="218" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0284c7">La</text>

          <!-- Vạch nhịp 3 khuông 2 -->
          <line x1="480" y1="156" x2="480" y2="196" stroke="#64748b" stroke-width="1.3"/>

          <!-- Ô nhịp 4: Mi4 (nốt trắng ngân dài 2 phách) -->
          <ellipse cx="530" cy="196" rx="5.5" ry="4" transform="rotate(-25 530 196)" fill="#fff" stroke="#0f172a" stroke-width="2"/>
          <line x1="534.8" y1="196" x2="534.8" y2="170" stroke="#0f172a" stroke-width="1.6"/>
          <text x="530" y="218" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0284c7">Mi</text>

          <!-- Vạch kép khuông 2 -->
          <line x1="631" y1="156" x2="631" y2="196" stroke="#0f172a" stroke-width="1.2"/>
          <line x1="635" y1="156" x2="635" y2="196" stroke="#0f172a" stroke-width="3.5"/>
        </svg>
      </div>
    </div>
  `;
}

// Update files
const files = [
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/amnhac_9.html',
  'C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/music_9.html'
];

const newSvgHtml = buildGrandStaffSvg();

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace the entire Lesson 3 sheet music block
  // Find start of Lesson 3 sheet music block
  const anchor = 'NÉT NHẠC HÁT BÈ: BẢY SẮC CẦU VỒNG';
  const idx = content.indexOf(anchor);
  if (idx !== -1) {
    const blockStart = content.lastIndexOf('<div class="my-4 p-4', idx);
    const blockEnd = content.indexOf('</div>\n    </div>\n  \n\n      <!-- Sơ đồ trực quan', blockStart);
    if (blockStart !== -1 && blockEnd !== -1) {
      const oldBlock = content.substring(blockStart, blockEnd + 19);
      content = content.replace(oldBlock, newSvgHtml.trim() + '\n\n');
      console.log(`Replaced SVG block in ${filePath}`);
    } else {
      console.log(`Could not find block boundaries in ${filePath}`);
    }
  } else {
    console.log(`Anchor not found in ${filePath}`);
  }

  // Also update staffMelodies in script:
  // Add 'staff-bai3-be1', 'staff-bai3-be2', and harmony chord playback for 'staff-bai3'!
  const oldStaffMelodiesStart = content.indexOf("'staff-bai3': [");
  if (oldStaffMelodiesStart !== -1) {
    const oldStaffMelodiesEnd = content.indexOf("],", oldStaffMelodiesStart) + 2;
    const replacementMelodies = `'staff-bai3': [
        // Hoà âm 2 bè: Bè 1 (f1) và Bè 2 (f2) cùng ngân vang đồng thời
        { f1: 392.00, f2: 329.63, d: 0.4 }, { f1: 392.00, f2: 329.63, d: 0.4 },
        { f1: 523.25, f2: 392.00, d: 0.4 }, { f1: 523.25, f2: 392.00, d: 0.4 },
        { f1: 440.00, f2: 349.23, d: 0.22 }, { f1: 493.88, f2: 392.00, d: 0.22 }, { f1: 523.25, f2: 440.00, d: 0.4 },
        { f1: 392.00, f2: 329.63, d: 0.85 }
      ],
      'staff-bai3-be1': [
        { f: 392.00, d: 0.38 }, { f: 392.00, d: 0.38 },
        { f: 523.25, d: 0.38 }, { f: 523.25, d: 0.38 },
        { f: 440.00, d: 0.22 }, { f: 493.88, d: 0.22 }, { f: 523.25, d: 0.38 },
        { f: 392.00, d: 0.8 }
      ],
      'staff-bai3-be2': [
        { f: 329.63, d: 0.38 }, { f: 329.63, d: 0.38 },
        { f: 392.00, d: 0.38 }, { f: 392.00, d: 0.38 },
        { f: 349.23, d: 0.22 }, { f: 392.00, d: 0.22 }, { f: 440.00, d: 0.38 },
        { f: 329.63, d: 0.8 }
      ],`;
    
    content = content.substring(0, oldStaffMelodiesStart) + replacementMelodies + content.substring(oldStaffMelodiesEnd);
    console.log(`Updated staffMelodies in ${filePath}`);
  }

  // Update playStaffAudio to support dual-voice harmony { f1, f2, d }
  const oldPlayFunc = `function playStaffAudio(audioId) {
      const notes = staffMelodies[audioId];
      if (!notes || !notes.length) return;
      const ctx = getAudioCtx();

      let currentTime = ctx.currentTime;
      notes.forEach(n => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.f, currentTime);
        gain.gain.setValueAtTime(0, currentTime);
        gain.gain.linearRampToValueAtTime(0.25, currentTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, currentTime + n.d);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(currentTime);
        osc.stop(currentTime + n.d);
        currentTime += n.d + 0.06;
      });
    }`;

  const newPlayFunc = `function playStaffAudio(audioId) {
      const notes = staffMelodies[audioId];
      if (!notes || !notes.length) return;
      const ctx = getAudioCtx();

      let currentTime = ctx.currentTime;
      notes.forEach(n => {
        // Hỗ trợ nốt đơn hoặc hoà âm đa âm (hai bè f1 & f2 cùng phát)
        const freqs = n.f1 && n.f2 ? [n.f1, n.f2] : [n.f || 440];
        freqs.forEach(freq => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, currentTime);
          gain.gain.setValueAtTime(0, currentTime);
          gain.gain.linearRampToValueAtTime(freqs.length > 1 ? 0.16 : 0.25, currentTime + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.001, currentTime + n.d);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(currentTime);
          osc.stop(currentTime + n.d);
        });
        currentTime += n.d + 0.06;
      });
    }`;

  if (content.includes(oldPlayFunc)) {
    content = content.replace(oldPlayFunc, newPlayFunc);
    console.log(`Updated playStaffAudio in ${filePath}`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Finished updating both files!');
