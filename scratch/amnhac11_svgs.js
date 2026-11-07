// scratch/amnhac11_svgs.js
// Bộ sơ đồ tư duy, khuông nhạc vector SVG chuẩn nét cho Âm nhạc 11

const amnhac11_svgs = {
  svg_f_major: {
    title: "Sơ đồ Gam Pha trưởng (F major) & Trục âm ổn định",
    caption: "Hoá biểu có 1 dấu giáng Si♭, âm chủ Pha, âm ổn định bậc I (Pha), bậc III (La), bậc V (Đô)",
    svg: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[300px] select-none">
      <!-- Background -->
      <rect width="800" height="240" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>
      
      <!-- Staff Lines (5 lines) -->
      <g stroke="#64748b" stroke-width="1.5">
        <line x1="60" y1="70" x2="740" y2="70"/>
        <line x1="60" y1="90" x2="740" y2="90"/>
        <line x1="60" y1="110" x2="740" y2="110"/>
        <line x1="60" y1="130" x2="740" y2="130"/>
        <line x1="60" y1="150" x2="740" y2="150"/>
      </g>

      <!-- Clef & Key Signature (Treble Clef & B flat) -->
      <!-- Treble Clef Graphic -->
      <text x="75" y="145" font-family="serif" font-size="64" fill="#0f172a" class="dark:fill-slate-100 font-bold">𝄞</text>
      <!-- Flat symbol on B line (Line 3: y=110) -->
      <text x="135" y="115" font-family="sans-serif" font-size="28" font-weight="bold" fill="#e11d48">♭</text>
      <text x="135" y="50" font-size="11" font-weight="bold" fill="#e11d48">Si♭ (B♭)</text>

      <!-- Scale Notes F G A Bb C D E F -->
      <!-- Note 1: F4 (Space 1: y=140) -->
      <circle cx="210" cy="140" r="8" fill="#0284c7"/>
      <line x1="218" y1="140" x2="218" y2="85" stroke="#0284c7" stroke-width="2"/>
      <text x="210" y="180" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1" class="dark:fill-sky-400">Pha (I)*</text>

      <!-- Note 2: G4 (Line 2: y=130) -->
      <circle cx="280" cy="130" r="8" fill="#64748b"/>
      <line x1="288" y1="130" x2="288" y2="75" stroke="#64748b" stroke-width="2"/>
      <text x="280" y="180" text-anchor="middle" font-size="12" fill="#475569" class="dark:fill-slate-400">Son (II)</text>

      <!-- Note 3: A4 (Space 2: y=120) -->
      <circle cx="350" cy="120" r="8" fill="#0284c7"/>
      <line x1="358" y1="120" x2="358" y2="65" stroke="#0284c7" stroke-width="2"/>
      <text x="350" y="180" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1" class="dark:fill-sky-400">La (III)*</text>

      <!-- Note 4: Bb4 (Line 3: y=110) -->
      <circle cx="420" cy="110" r="8" fill="#e11d48"/>
      <line x1="412" y1="110" x2="412" y2="165" stroke="#e11d48" stroke-width="2"/>
      <text x="420" y="180" text-anchor="middle" font-size="12" font-weight="bold" fill="#e11d48">Si♭ (IV)</text>

      <!-- Note 5: C5 (Space 3: y=100) -->
      <circle cx="490" cy="100" r="8" fill="#0284c7"/>
      <line x1="482" y1="100" x2="482" y2="155" stroke="#0284c7" stroke-width="2"/>
      <text x="490" y="180" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1" class="dark:fill-sky-400">Đô (V)*</text>

      <!-- Note 6: D5 (Line 4: y=90) -->
      <circle cx="560" cy="90" r="8" fill="#64748b"/>
      <line x1="552" y1="90" x2="552" y2="145" stroke="#64748b" stroke-width="2"/>
      <text x="560" y="180" text-anchor="middle" font-size="12" fill="#475569" class="dark:fill-slate-400">Rê (VI)</text>

      <!-- Note 7: E5 (Space 4: y=80) -->
      <circle cx="630" cy="80" r="8" fill="#64748b"/>
      <line x1="622" y1="80" x2="622" y2="135" stroke="#64748b" stroke-width="2"/>
      <text x="630" y="180" text-anchor="middle" font-size="12" fill="#475569" class="dark:fill-slate-400">Mi (VII)</text>

      <!-- Note 8: F5 (Line 5: y=70) -->
      <circle cx="700" cy="70" r="8" fill="#0284c7"/>
      <line x1="692" y1="70" x2="692" y2="125" stroke="#0284c7" stroke-width="2"/>
      <text x="700" y="180" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1" class="dark:fill-sky-400">Pha (I')*</text>

      <!-- Legend -->
      <rect x="220" y="205" width="360" height="24" rx="6" fill="#e0f2fe" class="dark:fill-sky-950/60"/>
      <text x="400" y="221" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">(*) Âm ổn định: Pha – La – Đô (Tạo hợp âm ba chủ F)</text>
    </svg>`
  },

  svg_chords_f: {
    title: "Sơ đồ Hệ thống Hợp âm Giọng Pha trưởng (F major)",
    caption: "3 Hợp âm ba chính (F, B♭, C), 4 Hợp âm ba phụ (Gm, Am, Dm, Bdim) và Hợp âm bảy át (C7)",
    svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[320px] select-none">
      <!-- Title Bar -->
      <rect x="20" y="15" width="760" height="36" rx="10" fill="#0284c7"/>
      <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">HỆ THỐNG HỢP ÂM CỦA GIỌNG PHA TRƯỞNG</text>

      <!-- Group 1: 3 Hợp âm chính (F - Bb - C) -->
      <g transform="translate(30, 65)">
        <rect width="230" height="195" rx="14" fill="#f0f9ff" class="dark:fill-slate-900" stroke="#0284c7" stroke-width="2"/>
        <rect width="230" height="32" rx="14" fill="#0284c7"/>
        <text x="115" y="21" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">3 HỢP ÂM BA CHÍNH (TRƯỞNG)</text>
        
        <g transform="translate(20, 50)" font-size="12">
          <text y="20" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">• Bậc I: F (Pha trưởng)</text>
          <text y="38" font-size="11" fill="#64748b" class="dark:fill-slate-400">Pha – La – Đô (Âm chủ tươi sáng)</text>

          <text y="68" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">• Bậc IV: B♭ (Si giáng trưởng)</text>
          <text y="86" font-size="11" fill="#64748b" class="dark:fill-slate-400">Si♭ – Rê – Pha (Hạ át khoẻ khoắn)</text>

          <text y="116" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">• Bậc V: C (Đô trưởng)</text>
          <text y="134" font-size="11" fill="#64748b" class="dark:fill-slate-400">Đô – Mi – Son (Át hướng về chủ)</text>
        </g>
      </g>

      <!-- Group 2: 4 Hợp âm phụ (Gm - Am - Dm - Bdim) -->
      <g transform="translate(285, 65)">
        <rect width="230" height="195" rx="14" fill="#f8fafc" class="dark:fill-slate-900" stroke="#64748b" stroke-width="2"/>
        <rect width="230" height="32" rx="14" fill="#475569"/>
        <text x="115" y="21" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">4 HỢP ÂM BA PHỤ</text>

        <g transform="translate(20, 50)" font-size="11.5">
          <text y="18" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Bậc II: Gm (Son thứ)</text>
          <text y="34" font-size="10.5" fill="#64748b">Son – Si♭ – Rê (Êm dịu)</text>

          <text y="56" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Bậc III: Am (La thứ)</text>
          <text y="72" font-size="10.5" fill="#64748b">La – Đô – Mi (Mềm mại)</text>

          <text y="94" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Bậc VI: Dm (Rê thứ)</text>
          <text y="110" font-size="10.5" fill="#64748b">Rê – Pha – La (Giọng song song)</text>

          <text y="132" font-weight="bold" fill="#dc2626" class="dark:fill-rose-400">• Bậc VII: Bdim (Si giảm)</text>
          <text y="148" font-size="10.5" fill="#64748b">Si – Rê – Pha (Căng thẳng)</text>
        </g>
      </g>

      <!-- Group 3: Hợp âm bảy át (C7) -->
      <g transform="translate(540, 65)">
        <rect width="230" height="195" rx="14" fill="#fff1f2" class="dark:fill-slate-900" stroke="#e11d48" stroke-width="2"/>
        <rect width="230" height="32" rx="14" fill="#e11d48"/>
        <text x="115" y="21" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">HỢP ÂM BẢY ÁT (C7)</text>

        <g transform="translate(20, 50)" font-size="12">
          <text y="25" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">Cấu tạo hợp âm C7:</text>
          <text y="48" font-size="13" font-weight="bold" fill="#0f172a" class="dark:fill-white">Đô – Mi – Son – Si♭</text>
          <text y="70" font-size="11" fill="#64748b" class="dark:fill-slate-400">Xây dựng trên bậc V của Pha trưởng</text>
          
          <line x1="0" y1="85" x2="190" y2="85" stroke="#fecdd3"/>
          <text y="105" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">Đặc tính hoà âm:</text>
          <text y="125" font-size="11" fill="#475569" class="dark:fill-slate-300">Tính nghịch, sức căng rất mạnh</text>
          <text y="145" font-size="11" font-weight="bold" fill="#16a34a">Luôn giải về hợp âm chủ F</text>
        </g>
      </g>
    </svg>`
  },

  svg_d_minor: {
    title: "Sơ đồ Gam Rê thứ tự nhiên & Rê thứ hoà thanh",
    caption: "Rê thứ hoà thanh nâng bậc VII (Đô) lên nửa cung thành Đô thăng (C♯), tạo quãng 2 tăng Si♭ - Đô♯",
    svg: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[300px] select-none">
      <!-- Background -->
      <rect width="800" height="240" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" stroke-width="1.5"/>

      <!-- Staff Lines (5 lines) -->
      <g stroke="#64748b" stroke-width="1.5">
        <line x1="60" y1="70" x2="740" y2="70"/>
        <line x1="60" y1="90" x2="740" y2="90"/>
        <line x1="60" y1="110" x2="740" y2="110"/>
        <line x1="60" y1="130" x2="740" y2="130"/>
        <line x1="60" y1="150" x2="740" y2="150"/>
      </g>

      <!-- Clef & Key Signature (Treble Clef & B flat) -->
      <text x="75" y="145" font-family="serif" font-size="64" fill="#0f172a" class="dark:fill-slate-100 font-bold">𝄞</text>
      <text x="135" y="115" font-family="sans-serif" font-size="28" font-weight="bold" fill="#e11d48">♭</text>

      <!-- Notes D4 to D5 -->
      <!-- Note 1: D4 (Below staff: y=160 with ledger line) -->
      <circle cx="210" cy="160" r="8" fill="#10b981"/>
      <line x1="218" y1="160" x2="218" y2="105" stroke="#10b981" stroke-width="2"/>
      <line x1="198" y1="160" x2="222" y2="160" stroke="#64748b" stroke-width="1.5"/>
      <text x="210" y="195" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857" class="dark:fill-emerald-400">Rê (I)*</text>

      <!-- Note 2: E4 (Bottom space: y=150) -->
      <circle cx="280" cy="150" r="8" fill="#64748b"/>
      <line x1="288" y1="150" x2="288" y2="95" stroke="#64748b" stroke-width="2"/>
      <text x="280" y="195" text-anchor="middle" font-size="12" fill="#475569" class="dark:fill-slate-400">Mi (II)</text>

      <!-- Note 3: F4 (Space 1: y=140) -->
      <circle cx="350" cy="140" r="8" fill="#10b981"/>
      <line x1="358" y1="140" x2="358" y2="85" stroke="#10b981" stroke-width="2"/>
      <text x="350" y="195" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857" class="dark:fill-emerald-400">Pha (III)*</text>

      <!-- Note 4: G4 (Line 2: y=130) -->
      <circle cx="420" cy="130" r="8" fill="#64748b"/>
      <line x1="428" y1="130" x2="428" y2="75" stroke="#64748b" stroke-width="2"/>
      <text x="420" y="195" text-anchor="middle" font-size="12" fill="#475569" class="dark:fill-slate-400">Son (IV)</text>

      <!-- Note 5: A4 (Space 2: y=120) -->
      <circle cx="490" cy="120" r="8" fill="#10b981"/>
      <line x1="498" y1="120" x2="498" y2="65" stroke="#10b981" stroke-width="2"/>
      <text x="490" y="195" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857" class="dark:fill-emerald-400">La (V)*</text>

      <!-- Note 6: Bb4 (Line 3: y=110) -->
      <circle cx="560" cy="110" r="8" fill="#e11d48"/>
      <line x1="552" y1="110" x2="552" y2="165" stroke="#e11d48" stroke-width="2"/>
      <text x="560" y="195" text-anchor="middle" font-size="12" font-weight="bold" fill="#e11d48">Si♭ (VI)</text>

      <!-- Note 7: C#5 (Space 3: y=100 with Sharp symbol) -->
      <text x="612" y="106" font-size="18" font-weight="bold" fill="#e11d48">♯</text>
      <circle cx="630" cy="100" r="8" fill="#e11d48"/>
      <line x1="622" y1="100" x2="622" y2="155" stroke="#e11d48" stroke-width="2"/>
      <text x="630" y="195" text-anchor="middle" font-size="12" font-weight="bold" fill="#e11d48">Đô♯ (VII)</text>

      <!-- Note 8: D5 (Line 4: y=90) -->
      <circle cx="700" cy="90" r="8" fill="#10b981"/>
      <line x1="692" y1="90" x2="692" y2="145" stroke="#10b981" stroke-width="2"/>
      <text x="700" y="195" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857" class="dark:fill-emerald-400">Rê (I')*</text>

      <!-- Augmented 2nd Bracket -->
      <path d="M 560 60 L 595 50 L 630 60" stroke="#e11d48" stroke-width="2" fill="none"/>
      <text x="595" y="42" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#e11d48">Quãng 2 tăng (1,5 cung)</text>

      <!-- Legend -->
      <rect x="230" y="212" width="340" height="22" rx="6" fill="#ecfdf5" class="dark:fill-emerald-950/60"/>
      <text x="400" y="227" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">(*) Âm ổn định: Rê – Pha – La (Hợp âm ba chủ Dm)</text>
    </svg>`
  },

  svg_vocal_techniques: {
    title: "Sơ đồ Tư duy 4 Kĩ thuật Thanh nhạc Lớp 11",
    caption: "So sánh toàn diện: Legato, Passage, Staccato và Luyến âm",
    svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[320px] select-none">
      <!-- 4 Columns -->
      <!-- Col 1: Legato -->
      <g transform="translate(20, 20)">
        <rect width="175" height="240" rx="14" fill="#eff6ff" class="dark:fill-slate-900" stroke="#3b82f6" stroke-width="2"/>
        <rect width="175" height="34" rx="14" fill="#3b82f6"/>
        <text x="87" y="22" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#ffffff">LEGATO (LIỀN TIẾNG)</text>
        
        <g transform="translate(15, 50)" font-size="11">
          <text y="15" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">• Bản chất:</text>
          <text y="32" fill="#475569" class="dark:fill-slate-300">Nối các âm liên tục,</text>
          <text y="48" fill="#475569" class="dark:fill-slate-300">không ngắt quãng</text>

          <text y="75" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">• Hơi thở:</text>
          <text y="92" fill="#475569" class="dark:fill-slate-300">Luồng hơi đều đặn,</text>
          <text y="108" fill="#475569" class="dark:fill-slate-300">thả lỏng cơ hàm</text>

          <text y="135" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">• Ca khúc mẫu:</text>
          <text y="152" fill="#475569" class="dark:fill-slate-300">"Ru con" (Mozart)</text>
          <text y="168" fill="#475569" class="dark:fill-slate-300">"Bác Hồ tình yêu bao la"</text>
        </g>
      </g>

      <!-- Col 2: Passage -->
      <g transform="translate(215, 20)">
        <rect width="175" height="240" rx="14" fill="#f0fdf4" class="dark:fill-slate-900" stroke="#10b981" stroke-width="2"/>
        <rect width="175" height="34" rx="14" fill="#10b981"/>
        <text x="87" y="22" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#ffffff">PASSAGE (LƯỚT NHANH)</text>

        <g transform="translate(15, 50)" font-size="11">
          <text y="15" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">• Bản chất:</text>
          <text y="32" fill="#475569" class="dark:fill-slate-300">Hát chuỗi nốt nhanh,</text>
          <text y="48" fill="#475569" class="dark:fill-slate-300">rõ ràng từng nốt</text>

          <text y="75" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">• Luyện tập:</text>
          <text y="92" fill="#475569" class="dark:fill-slate-300">Tập chậm rồi tăng tốc,</text>
          <text y="108" fill="#475569" class="dark:fill-slate-300">không ép giọng</text>

          <text y="135" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">• Ca khúc mẫu:</text>
          <text y="152" fill="#475569" class="dark:fill-slate-300">"Nét phấn thân thương"</text>
          <text y="168" fill="#475569" class="dark:fill-slate-300">"Mùa xuân đến rồi đó"</text>
        </g>
      </g>

      <!-- Col 3: Staccato -->
      <g transform="translate(410, 20)">
        <rect width="175" height="240" rx="14" fill="#fef2f2" class="dark:fill-slate-900" stroke="#ef4444" stroke-width="2"/>
        <rect width="175" height="34" rx="14" fill="#ef4444"/>
        <text x="87" y="22" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#ffffff">STACCATO (NẢY TIẾNG)</text>

        <g transform="translate(15, 50)" font-size="11">
          <text y="15" font-weight="bold" fill="#b91c1c" class="dark:fill-rose-300">• Bản chất:</text>
          <text y="32" fill="#475569" class="dark:fill-slate-300">Bật âm ngắn, dứt khoát,</text>
          <text y="48" fill="#475569" class="dark:fill-slate-300">ngân 1/2 trường độ</text>

          <text y="75" font-weight="bold" fill="#b91c1c" class="dark:fill-rose-300">• Cơ chế:</text>
          <text y="92" fill="#475569" class="dark:fill-slate-300">Cơ bụng &amp; cơ hoành</text>
          <text y="108" fill="#475569" class="dark:fill-slate-300">nảy giật dứt khoát</text>

          <text y="135" font-weight="bold" fill="#b91c1c" class="dark:fill-rose-300">• Ca khúc mẫu:</text>
          <text y="152" fill="#475569" class="dark:fill-slate-300">"Trống cơm" (Dân ca)</text>
          <text y="168" fill="#475569" class="dark:fill-slate-300">"Rừng xanh vang Ta-lư"</text>
        </g>
      </g>

      <!-- Col 4: Melisma -->
      <g transform="translate(605, 20)">
        <rect width="175" height="240" rx="14" fill="#faf5ff" class="dark:fill-slate-900" stroke="#a855f7" stroke-width="2"/>
        <rect width="175" height="34" rx="14" fill="#a855f7"/>
        <text x="87" y="22" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#ffffff">LUYẾN ÂM (MELISMA)</text>

        <g transform="translate(15, 50)" font-size="11">
          <text y="15" font-weight="bold" fill="#7e22ce" class="dark:fill-purple-300">• Bản chất:</text>
          <text y="32" fill="#475569" class="dark:fill-slate-300">MỘT ca từ đi qua</text>
          <text y="48" fill="#475569" class="dark:fill-slate-300">nhiều cao độ liên tiếp</text>

          <text y="75" font-weight="bold" fill="#7e22ce" class="dark:fill-purple-300">• Lưu ý quan trọng:</text>
          <text y="92" fill="#475569" class="dark:fill-slate-300">Giữ chuẩn thanh điệu</text>
          <text y="108" fill="#475569" class="dark:fill-slate-300">tiếng Việt, không biến âm</text>

          <text y="135" font-weight="bold" fill="#7e22ce" class="dark:fill-purple-300">• Ca khúc mẫu:</text>
          <text y="152" fill="#475569" class="dark:fill-slate-300">"Tình ca Tây Nguyên"</text>
          <text y="168" fill="#475569" class="dark:fill-slate-300">"Lời ca dâng Bác"</text>
        </g>
      </g>
    </svg>`
  },

  svg_guitar_hands: {
    title: "Sơ đồ Kĩ thuật Bàn tay Guitar & Kĩ thuật Bấm chặn (Barre)",
    caption: "Quy ước ngón tay phải (p, i, m, a), tay trái (1, 2, 3, 4) và tư thế ngón trỏ chặn Barre",
    svg: `<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[300px] select-none">
      <!-- Panel Left: Tay phải -->
      <g transform="translate(30, 20)">
        <rect width="230" height="220" rx="14" fill="#fffbeb" class="dark:fill-slate-900" stroke="#f59e0b" stroke-width="2"/>
        <rect width="230" height="34" rx="14" fill="#f59e0b"/>
        <text x="115" y="22" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#ffffff">TAY PHẢI (GẢY ĐÀN)</text>
        
        <g transform="translate(20, 55)" font-size="12">
          <text y="18" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">p = Ngón cái (Pouce)</text>
          <text y="35" font-size="11" fill="#64748b">Phụ trách dây Bass 4, 5, 6</text>

          <text y="65" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">i = Ngón trỏ (Index)</text>
          <text y="82" font-size="11" fill="#64748b">Phụ trách dây 3 (Son)</text>

          <text y="112" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">m = Ngón giữa (Majeur)</text>
          <text y="129" font-size="11" fill="#64748b">Phụ trách dây 2 (Si)</text>

          <text y="159" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">a = Ngón áp út (Anulaire)</text>
          <text y="176" font-size="11" fill="#64748b">Phụ trách dây 1 (Mi cao)</text>
        </g>
      </g>

      <!-- Panel Middle: Tay trái -->
      <g transform="translate(285, 20)">
        <rect width="230" height="220" rx="14" fill="#f0fdfa" class="dark:fill-slate-900" stroke="#0d9488" stroke-width="2"/>
        <rect width="230" height="34" rx="14" fill="#0d9488"/>
        <text x="115" y="22" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#ffffff">TAY TRÁI (BẤM PHÍM)</text>

        <g transform="translate(20, 55)" font-size="12">
          <text y="18" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">Ngón 1 = Ngón trỏ</text>
          <text y="35" font-size="11" fill="#64748b">Bấm phím 1 hoặc chặn Barre</text>

          <text y="65" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">Ngón 2 = Ngón giữa</text>
          <text y="82" font-size="11" fill="#64748b">Bấm phím kế tiếp</text>

          <text y="112" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">Ngón 3 = Ngón áp út</text>
          <text y="129" font-size="11" fill="#64748b">Bấm nốt quãng xa</text>

          <text y="159" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">Ngón 4 = Ngón út</text>
          <text y="176" font-size="11" fill="#64748b">Bấm nốt với tầm với rộng</text>
        </g>
      </g>

      <!-- Panel Right: Barre Chord -->
      <g transform="translate(540, 20)">
        <rect width="230" height="220" rx="14" fill="#eff6ff" class="dark:fill-slate-900" stroke="#2563eb" stroke-width="2"/>
        <rect width="230" height="34" rx="14" fill="#2563eb"/>
        <text x="115" y="22" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#ffffff">BẤM CHẶN (BARRE)</text>

        <g transform="translate(20, 55)" font-size="11.5">
          <text y="18" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">Cơ chế đòn bẩy:</text>
          <text y="36" fill="#475569" class="dark:fill-slate-300">• Ngón trỏ thẳng, hơi nghiêng</text>
          <text y="54" fill="#475569" class="dark:fill-slate-300">sang cạnh ngoài xương cứng</text>
          <text y="72" fill="#475569" class="dark:fill-slate-300">• Bấm sát thanh phím kim loại</text>

          <line x1="0" y1="90" x2="190" y2="90" stroke="#bfdbfe"/>
          <text y="110" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">Phân loại Barre:</text>
          <text y="130" fill="#475569" class="dark:fill-slate-300">• Bấm nửa chặn: 2 - 4 dây</text>
          <text y="150" fill="#475569" class="dark:fill-slate-300">• Bấm toàn chặn: cả 6 dây</text>
          <text y="172" font-size="11" font-weight="bold" fill="#16a34a">Tiếng đàn vang sạch, không rè</text>
        </g>
      </g>
    </svg>`
  },

  svg_guitar_slow: {
    title: "Sơ đồ Âm hình Rải Tiết điệu Slow trên Guitar (Nhịp 6/8 & 4/4)",
    caption: "Mô hình gảy rải Arpeggio ngón tay phải cho ca khúc trữ tình, êm ả",
    svg: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-h-[280px] select-none">
      <!-- Section 1: Nhịp 6/8 Slow Rock -->
      <g transform="translate(30, 20)">
        <rect width="355" height="200" rx="14" fill="#f8fafc" class="dark:fill-slate-900" stroke="#0284c7" stroke-width="2"/>
        <rect width="355" height="34" rx="14" fill="#0284c7"/>
        <text x="177" y="22" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#ffffff">TIẾT ĐIỆU SLOW NHỊP 6/8 (SLOW ROCK)</text>
        
        <g transform="translate(20, 55)" font-size="12">
          <text y="20" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">Âm hình rải Arpeggio (6 móc đơn):</text>
          
          <!-- Flow boxes -->
          <g transform="translate(0, 35)">
            <rect x="0" y="0" width="46" height="30" rx="6" fill="#0284c7"/>
            <text x="23" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Bass</text>

            <rect x="52" y="0" width="46" height="30" rx="6" fill="#e0f2fe" class="dark:fill-slate-800"/>
            <text x="75" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">Dây 3</text>

            <rect x="104" y="0" width="46" height="30" rx="6" fill="#e0f2fe" class="dark:fill-slate-800"/>
            <text x="127" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">Dây 2</text>

            <rect x="156" y="0" width="46" height="30" rx="6" fill="#0284c7"/>
            <text x="179" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Dây 1</text>

            <rect x="208" y="0" width="46" height="30" rx="6" fill="#e0f2fe" class="dark:fill-slate-800"/>
            <text x="231" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">Dây 2</text>

            <rect x="260" y="0" width="46" height="30" rx="6" fill="#e0f2fe" class="dark:fill-slate-800"/>
            <text x="283" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">Dây 3</text>
          </g>

          <text y="95" font-size="11" fill="#64748b">• Phách 1 (Bass) mạnh; Phách 4 (Dây 1) mạnh vừa</text>
          <text y="115" font-size="11" fill="#64748b">• Ngón gảy: p – i – m – a – m – i</text>
          <text y="135" font-size="11.5" font-weight="bold" fill="#16a34a">Ứng dụng: Ca khúc êm ả, lượn sóng du dương</text>
        </g>
      </g>

      <!-- Section 2: Nhịp 4/4 Slow Surf / Ballad -->
      <g transform="translate(415, 20)">
        <rect width="355" height="200" rx="14" fill="#f8fafc" class="dark:fill-slate-900" stroke="#0d9488" stroke-width="2"/>
        <rect width="355" height="34" rx="14" fill="#0d9488"/>
        <text x="177" y="22" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#ffffff">TIẾT ĐIỆU SLOW NHỊP 4/4 (BALLAD)</text>

        <g transform="translate(20, 55)" font-size="12">
          <text y="20" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">Âm hình rải Ballad (8 móc đơn):</text>

          <g transform="translate(0, 35)">
            <rect x="0" y="0" width="36" height="30" rx="6" fill="#0d9488"/>
            <text x="18" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">B</text>

            <rect x="40" y="0" width="36" height="30" rx="6" fill="#ccfbf1" class="dark:fill-slate-800"/>
            <text x="58" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">3</text>

            <rect x="80" y="0" width="36" height="30" rx="6" fill="#ccfbf1" class="dark:fill-slate-800"/>
            <text x="98" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">2</text>

            <rect x="120" y="0" width="36" height="30" rx="6" fill="#ccfbf1" class="dark:fill-slate-800"/>
            <text x="138" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">3</text>

            <rect x="160" y="0" width="36" height="30" rx="6" fill="#0d9488"/>
            <text x="178" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">1</text>

            <rect x="200" y="0" width="36" height="30" rx="6" fill="#ccfbf1" class="dark:fill-slate-800"/>
            <text x="218" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">3</text>

            <rect x="240" y="0" width="36" height="30" rx="6" fill="#ccfbf1" class="dark:fill-slate-800"/>
            <text x="258" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">2</text>

            <rect x="280" y="0" width="36" height="30" rx="6" fill="#ccfbf1" class="dark:fill-slate-800"/>
            <text x="298" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">3</text>
          </g>

          <text y="95" font-size="11" fill="#64748b">• Công thức: Bass – 3 – 2 – 3 – 1 – 3 – 2 – 3</text>
          <text y="115" font-size="11" fill="#64748b">• Giữ nhịp đều đặn 4 phách trong một ô nhịp</text>
          <text y="135" font-size="11.5" font-weight="bold" fill="#16a34a">Ứng dụng: "Màu hoa đỏ", "Người thầy"</text>
        </g>
      </g>
    </svg>`
  }
};

module.exports = amnhac11_svgs;
