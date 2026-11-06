const fs = require('fs');

const svgs = {};

// 1. Bài 1: Thế giới kì ảo (Truyện truyền kì)
svgs['bai-1'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#fff1f2" class="dark:fill-slate-900" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#be123c" class="dark:fill-rose-400">
    CẤU TRÚC KHÔNG GIAN THỰC - ẢO TRONG TRUYỆN TRUYỀN KÌ &amp; BI KỊCH VŨ NƯƠNG
  </text>

  <!-- Left: Cõi Trần gian (Hiện thực khốc liệt) -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="330" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#e11d48" stroke-width="1.2"/>
    <rect x="0" y="0" width="330" height="30" rx="12" fill="#be123c"/>
    <text x="165" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">CÕI TRẦN GIAN (HIỆN THỰC XÃ HỘI)</text>
    
    <!-- House & Shadow Motif -->
    <path d="M 60 115 L 105 75 L 150 115 Z" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
    <rect x="75" y="115" width="60" height="45" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
    <circle cx="105" cy="135" r="8" fill="#fb7185"/>
    
    <!-- Shadow projection on the wall -->
    <ellipse cx="230" cy="130" rx="35" ry="45" fill="#334155" opacity="0.6"/>
    <text x="230" y="135" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">CHIẾC BÓNG</text>

    <!-- Arrow from lamp/mother to shadow -->
    <line x1="140" y1="135" x2="190" y2="135" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="165" y="125" text-anchor="middle" font-size="9" fill="#e11d48">Đêm vắng</text>

    <!-- Key conflict points -->
    <text x="165" y="178" text-anchor="middle" font-size="10" font-weight="bold" fill="#9f1239" class="dark:fill-rose-300">Bi kịch oan khuất nghi kị</text>
    <text x="15" y="196" font-size="9" fill="#475569" class="dark:fill-slate-300">• Lời ngây thơ con trẻ + Tính đa nghi của Trương Sinh</text>
    <text x="15" y="212" font-size="9" fill="#475569" class="dark:fill-slate-300">• Nam quyền gia trưởng + Chiến tranh phong kiến li tán</text>
  </g>

  <!-- Middle: Hoàng Giang River (Boundary) -->
  <g transform="translate(378, 60)">
    <line x1="15" y1="10" x2="15" y2="220" stroke="#0284c7" stroke-width="3" stroke-dasharray="6,4"/>
    <text x="15" y="115" text-anchor="middle" font-size="10" font-weight="bold" fill="#0284c7" transform="rotate(-90 15 115)">SÔNG HOÀNG GIANG</text>
  </g>

  <!-- Right: Thuỷ Cung Kì Ảo (Minh oan & Bất tử) -->
  <g transform="translate(415, 60)">
    <rect x="0" y="0" width="345" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#0284c7" stroke-width="1.2"/>
    <rect x="0" y="0" width="345" height="30" rx="12" fill="#0369a1"/>
    <text x="172" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">CÕI THUỶ CUNG (KÌ ẢO HOANG ĐƯỜNG)</text>

    <!-- Underwater Palace Motif -->
    <path d="M 60 85 Q 120 45 180 85 L 180 145 L 60 145 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
    <circle cx="120" cy="115" r="18" fill="#38bdf8"/>
    <text x="120" y="122" text-anchor="middle" font-size="14">🧜‍♀️</text>

    <!-- Altar at Riverbank -->
    <rect x="235" y="105" width="70" height="40" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <text x="270" y="125" text-anchor="middle" font-size="9" font-weight="bold" fill="#854d0e">Đàn giải oan</text>

    <!-- Symbolism points -->
    <text x="172" y="178" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">Ý nghĩa nhân văn &amp; Ước mơ công lí</text>
    <text x="15" y="196" font-size="9" fill="#475569" class="dark:fill-slate-300">• Bù đắp phẩm giá trinh bạch cho người phụ nữ</text>
    <text x="15" y="212" font-size="9" font-weight="bold" fill="#be123c">• Âm dương cách trở: Bi kịch không thể đảo ngược</text>
  </g>
</svg>
`;

// 2. Bài 2: Những cung bậc tâm trạng (Song thất lục bát)
svgs['bai-2'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#fdf2f8" class="dark:fill-slate-900" stroke="#ec4899" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#9d174d" class="dark:fill-pink-400">
    CẤU TRÚC VẦN NHỊP &amp; PHỐI THANH THỂ THƠ SONG THẤT LỤC BÁT (7-7-6-8)
  </text>

  <!-- 4-line Stanza Architecture -->
  <g transform="translate(50, 60)">
    <!-- Line 1: Thất 1 (7 tiếng) -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="690" height="38" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#db2777" stroke-width="1.2"/>
      <rect x="0" y="0" width="80" height="38" rx="8" fill="#db2777"/>
      <text x="40" y="23" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">CÂU 7 (1)</text>
      <text x="100" y="24" font-size="11" fill="#475569" class="dark:fill-slate-200">Dạo hiên vắng / thầm gieo / từng bước (T)</text>
      <!-- Rhyme dot -->
      <circle cx="630" cy="19" r="10" fill="#f43f5e"/>
      <text x="630" y="23" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">bước (T)</text>
    </g>

    <!-- Connecting Rhyme Arc Line 1 -> Line 2 -->
    <path d="M 630 38 Q 630 58 450 60" fill="none" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3,2"/>

    <!-- Line 2: Thất 2 (7 tiếng) -->
    <g transform="translate(0, 48)">
      <rect x="0" y="0" width="690" height="38" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#db2777" stroke-width="1.2"/>
      <rect x="0" y="0" width="80" height="38" rx="8" fill="#db2777"/>
      <text x="40" y="23" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">CÂU 7 (2)</text>
      <text x="100" y="24" font-size="11" fill="#475569" class="dark:fill-slate-200">Rèm thưa rủ / thác đòi phen (B)</text>
      <!-- Rhyme dots -->
      <circle cx="450" cy="19" r="10" fill="#f43f5e"/>
      <text x="450" y="23" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">thác (T)</text>
      <circle cx="630" cy="19" r="10" fill="#3b82f6"/>
      <text x="630" y="23" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">phen (B)</text>
    </g>

    <!-- Connecting Rhyme Arc Line 2 -> Line 3 -->
    <path d="M 630 86 Q 630 106 630 110" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,2"/>

    <!-- Line 3: Lục (6 tiếng) -->
    <g transform="translate(0, 96)">
      <rect x="0" y="0" width="690" height="38" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#0284c7" stroke-width="1.2"/>
      <rect x="0" y="0" width="80" height="38" rx="8" fill="#0284c7"/>
      <text x="40" y="23" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">CÂU LỤC (6)</text>
      <text x="100" y="24" font-size="11" fill="#475569" class="dark:fill-slate-200">Ngoài rèm thước chẳng mách tin (B)</text>
      <circle cx="630" cy="19" r="10" fill="#3b82f6"/>
      <text x="630" y="23" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">tin (B)</text>
    </g>

    <!-- Connecting Rhyme Arc Line 3 -> Line 4 -->
    <path d="M 630 134 Q 630 154 500 156" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,2"/>

    <!-- Line 4: Bát (8 tiếng) -->
    <g transform="translate(0, 144)">
      <rect x="0" y="0" width="690" height="38" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#0284c7" stroke-width="1.2"/>
      <rect x="0" y="0" width="80" height="38" rx="8" fill="#0284c7"/>
      <text x="40" y="23" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">CÂU BÁT (8)</text>
      <text x="100" y="24" font-size="11" fill="#475569" class="dark:fill-slate-200">Trong rèm dường đã / có đèn biết chăng? (B)</text>
      <circle cx="500" cy="19" r="10" fill="#3b82f6"/>
      <text x="500" y="23" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">đèn (B)</text>
      <circle cx="630" cy="19" r="10" fill="#10b981"/>
      <text x="630" y="23" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">chăng (B)</text>
    </g>

    <!-- Summary footer note -->
    <rect x="0" y="192" width="690" height="28" rx="6" fill="#fce7f3" class="dark:fill-pink-950/40"/>
    <text x="345" y="210" text-anchor="middle" font-size="10" font-weight="bold" fill="#be185d" class="dark:fill-pink-300">
      Đặc trưng: Vần trắc đan cài vần bằng liên hoàn • Nhịp ngắt 3/4 &amp; 2/2/2 triền miên như sóng cuộn • Gợi nỗi sầu bi oán hờn
    </text>
  </g>
</svg>
`;

// 3. Bài 3: Hồn nước nằm trong tiếng mẹ cha (Truyện thơ Nôm)
svgs['bai-3'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#fffbeb" class="dark:fill-slate-900" stroke="#d97706" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#92400e" class="dark:fill-amber-400">
    HÀNH TRÌNH VĂN TỰ DÂN TỘC &amp; MÔ HÌNH CỐT TRUYỆN THƠ NÔM
  </text>

  <!-- Left: Hành trình văn tự (Hán - Nôm - Quốc ngữ) -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="330" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#d97706" stroke-width="1.2"/>
    <text x="165" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">TIẾN TRÌNH VĂN TỰ GHI ÂM TIẾNG VIỆT</text>

    <!-- 3 stages -->
    <rect x="25" y="45" width="280" height="45" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
    <text x="40" y="72" font-size="14">📜</text>
    <text x="65" y="65" font-size="10.5" font-weight="bold" fill="#78350f">CHỮ HÁN (Bắc thuộc – Trung đại)</text>
    <text x="65" y="80" font-size="9" fill="#92400e">Văn tự hành chính, văn học cung đình bác học</text>

    <rect x="25" y="100" width="280" height="45" rx="8" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
    <text x="40" y="127" font-size="14">🖋️</text>
    <text x="65" y="120" font-size="10.5" font-weight="bold" fill="#9a3412">CHỮ NÔM (Thế kỉ X – Đầu TK XX)</text>
    <text x="65" y="135" font-size="9" fill="#9a3412">Mượn kí tự Hán ghi âm tiếng mẹ đẻ (Truyện Kiều, thơ Hồ Xuân Hương)</text>

    <rect x="25" y="155" width="280" height="45" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
    <text x="40" y="182" font-size="14">💡</text>
    <text x="65" y="175" font-size="10.5" font-weight="bold" fill="#14532d">CHỮ QUỐC NGỮ (Kí tự La-tinh)</text>
    <text x="65" y="190" font-size="9" fill="#166534">Chuẩn hoá, phổ cập toàn dân, đưa văn hoá hội nhập</text>

    <text x="165" y="218" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#d97706">Ý thức tự chủ &amp; Bản sắc văn hoá Việt Nam</text>
  </g>

  <!-- Right: 3 Giai đoạn cốt truyện thơ Nôm -->
  <g transform="translate(400, 60)">
    <rect x="0" y="0" width="360" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#d97706" stroke-width="1.2"/>
    <text x="180" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">MÔ HÌNH CỐT TRUYỆN TRUYỆN THƠ NÔM</text>

    <!-- Stage 1 -->
    <rect x="30" y="45" width="300" height="45" rx="8" fill="#fdf2f8" stroke="#f472b6" stroke-width="1"/>
    <text x="50" y="72" font-size="14">🌸</text>
    <text x="80" y="65" font-size="10" font-weight="bold" fill="#be185d">1. GẶP GỠ &amp; ĐÍNH ƯỚC</text>
    <text x="80" y="80" font-size="9" fill="#831843">Kim – Kiều thề nguyền; Vân Tiên cứu Nguyệt Nga</text>

    <!-- Stage 2 -->
    <rect x="30" y="100" width="300" height="45" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
    <text x="50" y="127" font-size="14">⚡</text>
    <text x="80" y="120" font-size="10" font-weight="bold" fill="#b91c1c">2. TAI BIẾN &amp; LƯU LẠC</text>
    <text x="80" y="135" font-size="9" fill="#7f1d1d">Kiều 15 năm truân chuyên chìm nổi; Vân Tiên mù mắt</text>

    <!-- Stage 3 -->
    <rect x="30" y="155" width="300" height="45" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1"/>
    <text x="50" y="182" font-size="14">🕊️</text>
    <text x="80" y="175" font-size="10" font-weight="bold" fill="#15803d">3. ĐOÀN TỤ &amp; CÔNG LÍ</text>
    <text x="80" y="190" font-size="9" fill="#14532d">Khát vọng hạnh phúc, đạo lí nhân nghĩa chiến thắng</text>

    <text x="180" y="218" text-anchor="middle" font-size="9.5" fill="#64748b" class="dark:fill-slate-400">Kiệt tác Truyện Kiều vượt thoát ước lệ để trở thành bi ca hiện thực</text>
  </g>
</svg>
`;

// 4. Bài 4: Khám phá vẻ đẹp văn chương
svgs['bai-4'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#f0f9ff" class="dark:fill-slate-900" stroke="#0284c7" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#0369a1" class="dark:fill-sky-400">
    TAM GIÁC TIẾP NHẬN VĂN HỌC &amp; QUY CHUẨN TRÍCH DẪN NGUỒN TÀI LIỆU
  </text>

  <!-- Left: Tam giác tiếp nhận văn học -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="330" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#0284c7" stroke-width="1.2"/>
    <text x="165" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#0284c7" class="dark:fill-sky-300">TAM GIÁC TIẾP NHẬN NGHỆ THUẬT</text>

    <!-- Triangle vertices -->
    <!-- Top: Tác phẩm (Văn bản) -->
    <circle cx="165" cy="70" r="24" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
    <text x="165" y="74" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">TÁC PHẨM</text>

    <!-- Bottom Left: Tác giả -->
    <circle cx="70" cy="165" r="24" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
    <text x="70" y="169" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">TÁC GIẢ</text>

    <!-- Bottom Right: Người đọc -->
    <circle cx="260" cy="165" r="24" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
    <text x="260" y="169" text-anchor="middle" font-size="10" font-weight="bold" fill="#854d0e">NGƯỜI ĐỌC</text>

    <!-- Connectors -->
    <line x1="90" y1="150" x2="145" y2="85" stroke="#0284c7" stroke-width="1.5"/>
    <text x="100" y="110" font-size="9" fill="#0284c7">Sáng tạo</text>

    <line x1="240" y1="150" x2="185" y2="85" stroke="#ca8a04" stroke-width="2"/>
    <text x="230" y="110" font-size="9" font-weight="bold" fill="#ca8a04">Đồng sáng tạo</text>

    <line x1="94" y1="165" x2="236" y2="165" stroke="#64748b" stroke-width="1" stroke-dasharray="3,3"/>
    <text x="165" y="180" text-anchor="middle" font-size="9" fill="#64748b">Đối thoại liên thế hệ</text>

    <text x="165" y="215" text-anchor="middle" font-size="9.5" fill="#475569" class="dark:fill-slate-300">Tiếp nhận sáng tạo nhưng bắt buộc phải có căn cứ văn bản</text>
  </g>

  <!-- Right: Quy chuẩn trích dẫn -->
  <g transform="translate(400, 60)">
    <rect x="0" y="0" width="360" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#0284c7" stroke-width="1.2"/>
    <text x="180" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#0284c7" class="dark:fill-sky-300">QUY CHUẨN TRÍCH DẪN &amp; BẢN QUYỀN</text>

    <!-- Direct Citation Box -->
    <rect x="25" y="45" width="310" height="65" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1"/>
    <text x="40" y="65" font-size="10.5" font-weight="bold" fill="#15803d">1. TRÍCH DẪN TRỰC TIẾP</text>
    <text x="40" y="82" font-size="9" fill="#14532d">• Giữ nguyên 100% câu chữ, đặt trong ngoặc kép "..."</text>
    <text x="40" y="98" font-size="9" font-family="monospace" fill="#166534">Ví dụ: Nguyễn Dữ viết: "Chàng về đến nhà..." [1, tr.25]</text>

    <!-- Indirect Citation Box -->
    <rect x="25" y="120" width="310" height="65" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
    <text x="40" y="140" font-size="10.5" font-weight="bold" fill="#1d4ed8">2. TRÍCH DẪN GIÁN TIẾP</text>
    <text x="40" y="157" font-size="9" fill="#1e40af">• Diễn đạt lại ý bằng lời của mình, trung thành với nghĩa</text>
    <text x="40" y="173" font-size="9" fill="#1e40af">• Vẫn bắt buộc phải ghi rõ tên tác giả và nguồn tham khảo</text>

    <text x="180" y="215" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#e11d48">Tuyệt đối không đạo văn • Tôn trọng quyền sở hữu trí tuệ</text>
  </g>
</svg>
`;

// 5. Bài 5: Đối diện với nỗi đau (Bi kịch)
svgs['bai-5'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#fdf4ff" class="dark:fill-slate-900" stroke="#a855f7" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#7e22ce" class="dark:fill-purple-400">
    MÔ HÌNH XUNG ĐỘT BI KỊCH (TRAGEDY) &amp; HIỆU ỨNG THANH LỌC TÂM HỒN
  </text>

  <!-- Left: Xung đột kịch liệt -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="330" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#a855f7" stroke-width="1.2"/>
    <text x="165" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#7e22ce" class="dark:fill-purple-300">XUNG ĐỘT KHÔNG THỂ DUNG HOÀ</text>

    <!-- Force 1: Khát vọng tình yêu tự do -->
    <rect x="25" y="45" width="280" height="50" rx="8" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.5"/>
    <text x="40" y="70" font-size="16">💖</text>
    <text x="70" y="65" font-size="11" font-weight="bold" fill="#be185d">KHÁT VỌNG TỰ DO &amp; TÌNH YÊU</text>
    <text x="70" y="82" font-size="9" fill="#9d174d">Rô-mê-ô &amp; Giu-li-ét vượt lên định kiến thù hận</text>

    <!-- Collision Lightning Bolt -->
    <path d="M 165 98 L 155 120 L 175 120 L 160 142" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>

    <!-- Force 2: Hận thù dòng họ & Lực lượng đen tối -->
    <rect x="25" y="145" width="280" height="50" rx="8" fill="#1e1b4b" stroke="#4338ca" stroke-width="1.5"/>
    <text x="40" y="170" font-size="16">⚔️</text>
    <text x="70" y="165" font-size="11" font-weight="bold" fill="#ffffff">MỐI THÙ TRUYỀN KIẾP DÒNG HỌ</text>
    <text x="70" y="182" font-size="9" fill="#c7d2fe">Định kiến phong kiến hà khắc dòng họ Montague &amp; Capulet</text>

    <text x="165" y="218" text-anchor="middle" font-size="9.5" fill="#64748b" class="dark:fill-slate-400">Va đập không thể nhượng bộ dẫn đến hồi kết đau thương</text>
  </g>

  <!-- Right: Hiệu ứng thanh lọc tâm hồn (Catharsis) -->
  <g transform="translate(400, 60)">
    <rect x="0" y="0" width="360" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#a855f7" stroke-width="1.2"/>
    <text x="180" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#7e22ce" class="dark:fill-purple-300">Ý NGHĨA THANH LỌC TÂM HỒN (CATHARSIS)</text>

    <!-- 3 Steps of Catharsis -->
    <rect x="30" y="45" width="300" height="42" rx="8" fill="#faf5ff" stroke="#c084fc" stroke-width="1"/>
    <text x="45" y="70" font-size="14">😢</text>
    <text x="70" y="63" font-size="10" font-weight="bold" fill="#6b21a8">1. XÓT THƯƠNG &amp; KINH SỢ</text>
    <text x="70" y="78" font-size="8.5" fill="#475569">Rung động mãnh liệt trước sự hi sinh của cái đẹp cao thượng</text>

    <rect x="30" y="95" width="300" height="42" rx="8" fill="#faf5ff" stroke="#c084fc" stroke-width="1"/>
    <text x="45" y="120" font-size="14">🕊️</text>
    <text x="70" y="113" font-size="10" font-weight="bold" fill="#6b21a8">2. THỨC TỈNH LƯƠNG TRI</text>
    <text x="70" y="128" font-size="8.5" fill="#475569">Bắt tay hoà giải trên xác hai con; xoá bỏ thù hận mù quáng</text>

    <rect x="30" y="145" width="300" height="42" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1"/>
    <text x="45" y="170" font-size="14">✨</text>
    <text x="70" y="163" font-size="10" font-weight="bold" fill="#15803d">3. NIỀM TIN VÀO CÁI ĐẸP BẤT TỬ</text>
    <text x="70" y="178" font-size="8.5" fill="#166534">Tình yêu vượt qua cái chết, tôn vinh phẩm giá con người Phục hưng</text>

    <text x="180" y="215" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#7e22ce">Bi kịch nâng đỡ tâm hồn con người hướng thiện</text>
  </g>
</svg>
`;

// 6. Ôn tập HKI
svgs['on-tap-hki'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#fef2f2" class="dark:fill-slate-900" stroke="#e11d48" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#9f1239" class="dark:fill-rose-400">
    HỆ THỐNG 5 THỂ LOẠI &amp; MẠCH TIẾNG VIỆT NGỮ VĂN 9 – TẬP MỘT
  </text>

  <!-- 5 Columns Grid -->
  <g transform="translate(25, 55)">
    <!-- Col 1 -->
    <rect x="0" y="0" width="142" height="235" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#f43f5e" stroke-width="1"/>
    <rect x="0" y="0" width="142" height="28" rx="10" fill="#e11d48"/>
    <text x="71" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 1: TRUYỀN KÌ</text>
    <text x="10" y="50" font-size="9" font-weight="bold" fill="#be123c">Kì ảo &amp; Hiện thực</text>
    <text x="10" y="70" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Người con gái Nam Xương</text>
    <text x="10" y="90" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Dế chọi (Bồ Tùng Linh)</text>
    <rect x="8" y="165" width="126" height="55" rx="6" fill="#ffe4e6"/>
    <text x="71" y="182" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#9f1239">Tiếng Việt:</text>
    <text x="71" y="198" text-anchor="middle" font-size="8" fill="#be123c">Yếu tố Hán Việt</text>
    <text x="71" y="212" text-anchor="middle" font-size="7.5" fill="#be123c">Đồng âm, gần âm</text>
  </g>

  <g transform="translate(177, 55)">
    <!-- Col 2 -->
    <rect x="0" y="0" width="142" height="235" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#ec4899" stroke-width="1"/>
    <rect x="0" y="0" width="142" height="28" rx="10" fill="#db2777"/>
    <text x="71" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 2: SONG THẤT</text>
    <text x="10" y="50" font-size="9" font-weight="bold" fill="#9d174d">Cung bậc tâm trạng</text>
    <text x="10" y="70" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Nỗi niềm chinh phụ</text>
    <text x="10" y="90" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Tiếng đàn mưa</text>
    <rect x="8" y="165" width="126" height="55" rx="6" fill="#fce7f3"/>
    <text x="71" y="182" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#831843">Tiếng Việt:</text>
    <text x="71" y="198" text-anchor="middle" font-size="8" fill="#9d174d">Chơi chữ, điệp thanh</text>
    <text x="71" y="212" text-anchor="middle" font-size="7.5" fill="#9d174d">Điệp vần biểu cảm</text>
  </g>

  <g transform="translate(329, 55)">
    <!-- Col 3 -->
    <rect x="0" y="0" width="142" height="235" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#d97706" stroke-width="1"/>
    <rect x="0" y="0" width="142" height="28" rx="10" fill="#b45309"/>
    <text x="71" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 3: THƠ NÔM</text>
    <text x="10" y="50" font-size="9" font-weight="bold" fill="#b45309">Tiếng mẹ cha</text>
    <text x="10" y="70" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Kim – Kiều gặp gỡ</text>
    <text x="10" y="90" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Lục Vân Tiên cứu Ng.Nga</text>
    <rect x="8" y="165" width="126" height="55" rx="6" fill="#fef3c7"/>
    <text x="71" y="182" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#78350f">Tiếng Việt:</text>
    <text x="71" y="198" text-anchor="middle" font-size="8" fill="#92400e">Chữ Nôm</text>
    <text x="71" y="212" text-anchor="middle" font-size="7.5" fill="#92400e">Chữ Quốc ngữ</text>
  </g>

  <g transform="translate(481, 55)">
    <!-- Col 4 -->
    <rect x="0" y="0" width="142" height="235" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#0284c7" stroke-width="1"/>
    <rect x="0" y="0" width="142" height="28" rx="10" fill="#0369a1"/>
    <text x="71" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 4: NGHỊ LUẬN</text>
    <text x="10" y="50" font-size="9" font-weight="bold" fill="#0369a1">Vẻ đẹp văn chương</text>
    <text x="10" y="70" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Bi kịch con người</text>
    <text x="10" y="90" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Văn học thiếu nhi</text>
    <rect x="8" y="165" width="126" height="55" rx="6" fill="#e0f2fe"/>
    <text x="71" y="182" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0c4a6e">Tiếng Việt:</text>
    <text x="71" y="198" text-anchor="middle" font-size="8" fill="#0369a1">Trích dẫn trực tiếp</text>
    <text x="71" y="212" text-anchor="middle" font-size="7.5" fill="#0369a1">Trích dẫn gián tiếp</text>
  </g>

  <g transform="translate(633, 55)">
    <!-- Col 5 -->
    <rect x="0" y="0" width="142" height="235" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#7c3aed" stroke-width="1"/>
    <rect x="0" y="0" width="142" height="28" rx="10" fill="#6d28d9"/>
    <text x="71" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BÀI 5: BI KỊCH</text>
    <text x="10" y="50" font-size="9" font-weight="bold" fill="#5b21b6">Đối diện nỗi đau</text>
    <text x="10" y="70" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Rô-mê-ô &amp; Giu-li-ét</text>
    <text x="10" y="90" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Bí ẩn làn nước</text>
    <rect x="8" y="165" width="126" height="55" rx="6" fill="#f3e8ff"/>
    <text x="71" y="182" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#4c1d95">Tiếng Việt:</text>
    <text x="71" y="198" text-anchor="middle" font-size="8" fill="#6d28d9">Câu rút gọn</text>
    <text x="71" y="212" text-anchor="middle" font-size="7.5" fill="#6d28d9">Câu đặc biệt</text>
  </g>
</svg>
`;

// 7. Bài 6: Giải mã những bí mật (Truyện trinh thám)
svgs['bai-6'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#0f172a" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#0f172a" class="dark:fill-slate-100">
    SƠ ĐỒ PHƯƠNG PHÁP SUY LUẬN LOGIC TRINH THÁM (SHERLOCK HOLMES)
  </text>

  <!-- 4-step Detective Logic Flow -->
  <!-- Step 1: Hiện trường bí ẩn -->
  <g transform="translate(35, 60)">
    <rect x="0" y="0" width="165" height="225" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#334155" stroke-width="1.2"/>
    <rect x="0" y="0" width="165" height="28" rx="10" fill="#1e293b"/>
    <text x="82" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">1. HIỆN TRƯỜNG</text>
    <circle cx="82" cy="65" r="24" fill="#f1f5f9"/>
    <text x="82" y="72" text-anchor="middle" font-size="20">🔍</text>
    <text x="82" y="105" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">Vụ án Đề thi</text>
    <text x="12" y="128" font-size="9" fill="#475569" class="dark:fill-slate-300">• 3 bản giấy in bị xáo trộn</text>
    <text x="12" y="146" font-size="9" fill="#475569" class="dark:fill-slate-300">• 3 nghi phạm cùng tầng</text>
    <text x="12" y="164" font-size="9" fill="#475569" class="dark:fill-slate-300">• Thời gian ngắn ngủi</text>
    <text x="12" y="184" font-size="9" font-weight="bold" fill="#be123c">• Khủng hoảng danh dự</text>
  </g>

  <!-- Step 2: Manh mối vi mô -->
  <g transform="translate(220, 60)">
    <rect x="0" y="0" width="165" height="225" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#334155" stroke-width="1.2"/>
    <rect x="0" y="0" width="165" height="28" rx="10" fill="#1e293b"/>
    <text x="82" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">2. MANH MỐI VI MÔ</text>
    <circle cx="82" cy="65" r="24" fill="#f1f5f9"/>
    <text x="82" y="72" text-anchor="middle" font-size="20">✏️</text>
    <text x="82" y="105" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">Dấu vết vật chất</text>
    <text x="12" y="128" font-size="9" fill="#475569" class="dark:fill-slate-300">• Vụn than chì gãy trên bàn</text>
    <text x="12" y="146" font-size="9" fill="#475569" class="dark:fill-slate-300">• Phoi gọt bút chì ngắn</text>
    <text x="12" y="164" font-size="9" fill="#475569" class="dark:fill-slate-300">• Đất sét đỏ bãi nhảy xa</text>
    <text x="12" y="184" font-size="9" font-weight="bold" fill="#0284c7">• Vết rách đệm da</text>
  </g>

  <!-- Step 3: Suy luận loại trừ -->
  <g transform="translate(405, 60)">
    <rect x="0" y="0" width="165" height="225" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#334155" stroke-width="1.2"/>
    <rect x="0" y="0" width="165" height="28" rx="10" fill="#1e293b"/>
    <text x="82" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">3. SUY LUẬN LOẠI SUY</text>
    <circle cx="82" cy="65" r="24" fill="#f1f5f9"/>
    <text x="82" y="72" text-anchor="middle" font-size="20">⚖️</text>
    <text x="82" y="105" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">Loại trừ giả thuyết</text>
    <text x="12" y="128" font-size="9" fill="#475569" class="dark:fill-slate-300">• Chiều cao nhìn qua cửa sổ</text>
    <text x="12" y="146" font-size="9" fill="#475569" class="dark:fill-slate-300">• Giày đinh vận động viên</text>
    <text x="12" y="164" font-size="9" fill="#475569" class="dark:fill-slate-300">• Không thể là sinh viên 1, 2</text>
    <text x="12" y="184" font-size="9" font-weight="bold" fill="#f59e0b">• Khoanh vùng Gilchrist</text>
  </g>

  <!-- Step 4: Chân lí & Nhân văn -->
  <g transform="translate(590, 60)">
    <rect x="0" y="0" width="175" height="225" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#334155" stroke-width="1.2"/>
    <rect x="0" y="0" width="175" height="28" rx="10" fill="#1e293b"/>
    <text x="87" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">4. CÔNG LÍ NHÂN VĂN</text>
    <circle cx="87" cy="65" r="24" fill="#f1f5f9"/>
    <text x="87" y="72" text-anchor="middle" font-size="20">🤝</text>
    <text x="87" y="105" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">Cứu rỗi tương lai</text>
    <text x="12" y="128" font-size="9" fill="#475569" class="dark:fill-slate-300">• Thủ phạm tự nguyện nhận lỗi</text>
    <text x="12" y="146" font-size="9" fill="#475569" class="dark:fill-slate-300">• Rút lui khỏi kì thi</text>
    <text x="12" y="164" font-size="9" fill="#475569" class="dark:fill-slate-300">• Sang Nam Phi lập nghiệp</text>
    <text x="12" y="184" font-size="9" font-weight="bold" fill="#10b981">• Công lí đi cùng sự tha thứ</text>
  </g>
</svg>
`;

// 8. Bài 7: Hồn thơ muôn điệu (Thơ hiện đại)
svgs['bai-7'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#ecfdf5" class="dark:fill-slate-900" stroke="#059669" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#065f46" class="dark:fill-emerald-400">
    HÌNH TƯỢNG TIẾNG VIỆT &amp; CÁC CON ĐƯỜNG PHÁT TRIỂN TỪ VỰNG DÂN TỘC
  </text>

  <!-- Left: Hình tượng Tiếng Việt (Lưu Quang Vũ) -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="330" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#059669" stroke-width="1.2"/>
    <text x="165" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#059669" class="dark:fill-emerald-300">HÌNH TƯỢNG TIẾNG VIỆT (LƯU QUANG VŨ)</text>

    <!-- 4 Layers of Tiếng Việt -->
    <rect x="25" y="45" width="280" height="38" rx="6" fill="#f0fdf4" stroke="#34d399"/>
    <text x="40" y="68" font-size="12">🌾</text>
    <text x="65" y="62" font-size="10" font-weight="bold" fill="#065f46">Bình dị như đất cày, bùn nắng lửa</text>
    <text x="65" y="75" font-size="8.5" fill="#047857">Cội nguồn chân lấm tay bùn của người nông dân</text>

    <rect x="25" y="90" width="280" height="38" rx="6" fill="#f0fdf4" stroke="#34d399"/>
    <text x="40" y="113" font-size="12">🧵</text>
    <text x="65" y="107" font-size="10" font-weight="bold" fill="#065f46">Mềm mại như dải lụa ngàn tơ</text>
    <text x="65" y="120" font-size="8.5" fill="#047857">Lời ru của mẹ, ca dao tha thiết ngọt ngào</text>

    <rect x="25" y="135" width="280" height="38" rx="6" fill="#f0fdf4" stroke="#34d399"/>
    <text x="40" y="158" font-size="12">⛵</text>
    <text x="65" y="152" font-size="10" font-weight="bold" fill="#065f46">Vút ngàn cao như cánh buồm lộng gió</text>
    <text x="65" y="165" font-size="8.5" fill="#047857">Sức sống kiên cường vượt qua bão táp ngàn năm</text>

    <text x="165" y="215" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#059669">Tiếng nói thiêng liêng gắn liền độc lập dân tộc</text>
  </g>

  <!-- Right: 3 phương thức phát triển từ vựng -->
  <g transform="translate(400, 60)">
    <rect x="0" y="0" width="360" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#059669" stroke-width="1.2"/>
    <text x="180" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#059669" class="dark:fill-emerald-300">3 PHƯƠNG THỨC PHÁT TRIỂN TỪ VỰNG</text>

    <!-- Method 1 -->
    <rect x="30" y="45" width="300" height="45" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
    <text x="45" y="72" font-size="14">🔄</text>
    <text x="75" y="63" font-size="10" font-weight="bold" fill="#065f46">1. CHUYỂN NGHĨA CỦA TỪ CÓ SẴN</text>
    <text x="75" y="78" font-size="8.5" fill="#047857">Ẩn dụ (chân núi, chuột máy tính) &amp; Hoán dụ (áo chàm)</text>

    <!-- Method 2 -->
    <rect x="30" y="100" width="300" height="45" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
    <text x="45" y="127" font-size="14">➕</text>
    <text x="75" y="118" font-size="10" font-weight="bold" fill="#065f46">2. TẠO TỪ NGỮ MỚI PHÙ HỢP THỜI ĐẠI</text>
    <text x="75" y="133" font-size="8.5" fill="#047857">Kinh tế số, nông nghiệp xanh, trí tuệ nhân tạo (AI)</text>

    <!-- Method 3 -->
    <rect x="30" y="155" width="300" height="45" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="1"/>
    <text x="45" y="182" font-size="14">🌐</text>
    <text x="75" y="173" font-size="10" font-weight="bold" fill="#065f46">3. TIẾP NHẬN TỪ NGỮ NƯỚC NGOÀI</text>
    <text x="75" y="188" font-size="8.5" fill="#047857">Từ gốc Hán + Từ ngữ quốc tế (internet, vaccine, video)</text>

    <text x="180" y="215" text-anchor="middle" font-size="9.5" fill="#475569" class="dark:fill-slate-300">Đảm bảo vừa giàu có, hiện đại vừa giữ gìn sự trong sáng</text>
  </g>
</svg>
`;

// 9. Bài 8: Tiếng nói của lương tri
svgs['bai-8'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#eff6ff" class="dark:fill-slate-900" stroke="#2563eb" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#1e40af" class="dark:fill-blue-400">
    ĐỐI LẬP PHI LÍ CỦA VŨ KHÍ HẠT NHÂN &amp; TRÁCH NHIỆM BẢO VỆ HOÀ BÌNH
  </text>

  <!-- Left: Chi phí Vũ khí Huỷ diệt -->
  <g transform="translate(40, 60)">
    <rect x="0" y="0" width="330" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#ef4444" stroke-width="1.5"/>
    <rect x="0" y="0" width="330" height="30" rx="12" fill="#dc2626"/>
    <text x="165" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">CHẠY ĐUA VŨ KHÍ HẠT NHÂN (PHI LÍ)</text>

    <!-- Bomb / Submarine Icon -->
    <circle cx="165" cy="80" r="32" fill="#fee2e2"/>
    <text x="165" y="88" text-anchor="middle" font-size="28">💣</text>

    <text x="165" y="135" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">Chi phí 10 Tàu ngầm Trident</text>
    <text x="15" y="160" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Hàng trăm tỉ USD lãng phí vô ích</text>
    <text x="15" y="180" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Đủ sức huỷ diệt sự sống Trái Đất nhiều lần</text>
    <text x="15" y="200" font-size="9.5" font-weight="bold" fill="#dc2626">• Thảm hoạ diệt vong của nhân loại</text>
  </g>

  <!-- Middle: VS / Arrow -->
  <g transform="translate(378, 60)">
    <circle cx="15" cy="115" r="16" fill="#f59e0b"/>
    <text x="15" y="120" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">VS</text>
  </g>

  <!-- Right: Nhu cầu cứu trợ Nhân sinh -->
  <g transform="translate(415, 60)">
    <rect x="0" y="0" width="345" height="230" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#16a34a" stroke-width="1.5"/>
    <rect x="0" y="0" width="345" height="30" rx="12" fill="#15803d"/>
    <text x="172" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">NHU CẦU CỨU TRỢ TRẺ EM (NHÂN ĐẠO)</text>

    <!-- Globe / Dove / Food Icon -->
    <circle cx="172" cy="80" r="32" fill="#dcfce7"/>
    <text x="172" y="88" text-anchor="middle" font-size="28">🕊️</text>

    <text x="172" y="135" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">Chương trình Cứu trợ UNICEF &amp; WHO</text>
    <text x="15" y="160" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Đủ thanh toán nạn đói cho 575 triệu trẻ em nghèo</text>
    <text x="15" y="180" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Xoá mù chữ, cung cấp nước sạch, vaccine toàn cầu</text>
    <text x="15" y="200" font-size="9.5" font-weight="bold" fill="#15803d">• Thông điệp: Hãy lên tiếng bảo vệ hoà bình!</text>
  </g>
</svg>
`;

// 10. Bài 9: Đi và suy ngẫm (Thuyết minh danh lam di tích)
svgs['bai-9'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#fdf4ff" class="dark:fill-slate-900" stroke="#9333ea" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#6b21a8" class="dark:fill-purple-400">
    CẤU TRÚC VĂN BẢN THUYẾT MINH DI TÍCH LỊCH SỬ &amp; DANH LAM THẮNG CẢNH
  </text>

  <!-- 4 Pillars of Monument Exposition -->
  <g transform="translate(30, 55)">
    <!-- 1. Vị trí & Lịch sử -->
    <rect x="0" y="0" width="168" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#9333ea" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="30" rx="12" fill="#7e22ce"/>
    <text x="84" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">1. VỊ TRÍ &amp; LỊCH SỬ</text>
    <circle cx="84" cy="65" r="22" fill="#f3e8ff"/>
    <text x="84" y="71" text-anchor="middle" font-size="16">📍</text>
    <text x="84" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8">Địa danh &amp; Niên đại</text>
    <text x="12" y="128" font-size="9" fill="#475569" class="dark:fill-slate-300">• Yên Tử (Uông Bí, Quảng Ninh)</text>
    <text x="12" y="146" font-size="9" fill="#475569" class="dark:fill-slate-300">• Hoàng thành Thăng Long</text>
    <text x="12" y="164" font-size="9" fill="#475569" class="dark:fill-slate-300">• Vua Trần Nhân Tông (1299)</text>
    <text x="12" y="184" font-size="9" font-weight="bold" fill="#9333ea">• Cột mốc lịch sử nghìn năm</text>
  </g>

  <g transform="translate(218, 55)">
    <!-- 2. Kiến trúc & Cảnh quan -->
    <rect x="0" y="0" width="168" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#9333ea" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="30" rx="12" fill="#7e22ce"/>
    <text x="84" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">2. KIẾN TRÚC - CẢNH</text>
    <circle cx="84" cy="65" r="22" fill="#f3e8ff"/>
    <text x="84" y="71" text-anchor="middle" font-size="16">⛩️</text>
    <text x="84" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8">Công trình đặc sắc</text>
    <text x="12" y="128" font-size="9" fill="#475569" class="dark:fill-slate-300">• Chùa Đồng trên đỉnh mây phủ</text>
    <text x="12" y="146" font-size="9" fill="#475569" class="dark:fill-slate-300">• Tháp Huệ Quang cổ kính</text>
    <text x="12" y="164" font-size="9" fill="#475569" class="dark:fill-slate-300">• Rừng trúc bạt ngàn hùng vĩ</text>
    <text x="12" y="184" font-size="9" font-weight="bold" fill="#9333ea">• Sơ đồ mặt bằng chi tiết</text>
  </g>

  <g transform="translate(406, 55)">
    <!-- 3. Giá trị văn hoá tâm linh -->
    <rect x="0" y="0" width="168" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#9333ea" stroke-width="1.2"/>
    <rect x="0" y="0" width="168" height="30" rx="12" fill="#7e22ce"/>
    <text x="84" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">3. GIÁ TRỊ VĂN HOÁ</text>
    <circle cx="84" cy="65" r="22" fill="#f3e8ff"/>
    <text x="84" y="71" text-anchor="middle" font-size="16">🙏</text>
    <text x="84" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8">Tâm linh Trúc Lâm</text>
    <text x="12" y="128" font-size="9" fill="#475569" class="dark:fill-slate-300">• Phật giáo thuần Việt nhập thế</text>
    <text x="12" y="146" font-size="9" fill="#475569" class="dark:fill-slate-300">• Tinh thần hoà quang đồng trần</text>
    <text x="12" y="164" font-size="9" fill="#475569" class="dark:fill-slate-300">• Thú chơi hoa - cây cảnh tao nhã</text>
    <text x="12" y="184" font-size="9" font-weight="bold" fill="#9333ea">• Di sản thế giới UNESCO</text>
  </g>

  <g transform="translate(594, 55)">
    <!-- 4. Đa phương thức & Bảo tồn -->
    <rect x="0" y="0" width="176" height="235" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#9333ea" stroke-width="1.2"/>
    <rect x="0" y="0" width="176" height="30" rx="12" fill="#7e22ce"/>
    <text x="88" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">4. KÊNH ĐA PHƯƠNG THỨC</text>
    <circle cx="88" cy="65" r="22" fill="#f3e8ff"/>
    <text x="88" y="71" text-anchor="middle" font-size="16">📷</text>
    <text x="88" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8">Phương tiện hỗ trợ</text>
    <text x="12" y="128" font-size="9" fill="#475569" class="dark:fill-slate-300">• Chữ viết + Ảnh chụp thực tế</text>
    <text x="12" y="146" font-size="9" fill="#475569" class="dark:fill-slate-300">• Bản đồ du lịch + Sơ đồ đường đi</text>
    <text x="12" y="164" font-size="9" fill="#475569" class="dark:fill-slate-300">• Ý thức giữ gìn vệ sinh di tích</text>
    <text x="12" y="184" font-size="9" font-weight="bold" fill="#9333ea">• Giáo dục lòng tự hào dân tộc</text>
  </g>
</svg>
`;

// 11. Bài 10: Văn học – lịch sử tâm hồn
svgs['bai-10'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#fff7ed" class="dark:fill-slate-900" stroke="#ea580c" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#c2410c" class="dark:fill-orange-400">
    TRỤC THỜI GIAN LỊCH SỬ TÂM HỒN VĂN HỌC DÂN TỘC VIỆT NAM
  </text>

  <!-- 3 Historical Eras Timeline -->
  <g transform="translate(40, 60)">
    <!-- Timeline Axis -->
    <line x1="30" y1="115" x2="690" y2="115" stroke="#cbd5e1" stroke-width="4"/>
    
    <!-- Era 1: Dân gian -->
    <g transform="translate(30, 20)">
      <rect x="0" y="0" width="200" height="175" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#ea580c" stroke-width="1.2"/>
      <rect x="0" y="0" width="200" height="28" rx="10" fill="#ea580c"/>
      <text x="100" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">1. VĂN HỌC DÂN GIAN</text>
      <circle cx="100" cy="55" r="18" fill="#ffedd5"/>
      <text x="100" y="60" text-anchor="middle" font-size="14">🎋</text>
      <text x="100" y="90" text-anchor="middle" font-size="10" font-weight="bold" fill="#9a3412">Sáng tác truyền miệng</text>
      <text x="12" y="112" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Cội nguồn ca dao, thần thoại</text>
      <text x="12" y="130" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Tinh thần lạc quan lao động</text>
      <text x="12" y="150" font-size="8.5" font-weight="bold" fill="#ea580c">• Nền tảng tâm thức dân tộc</text>
    </g>

    <!-- Era 2: Trung đại -->
    <g transform="translate(260, 20)">
      <rect x="0" y="0" width="200" height="175" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#d97706" stroke-width="1.5"/>
      <rect x="0" y="0" width="200" height="28" rx="10" fill="#d97706"/>
      <text x="100" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">2. VĂN HỌC TRUNG ĐẠI</text>
      <circle cx="100" cy="55" r="18" fill="#fef3c7"/>
      <text x="100" y="60" text-anchor="middle" font-size="14">📜</text>
      <text x="100" y="90" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">Chữ Hán &amp; Chữ Nôm</text>
      <text x="12" y="112" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Cảm hứng yêu nước &amp; nhân đạo</text>
      <text x="12" y="130" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Nguyễn Trãi, Nguyễn Du, Hồ X.Hương</text>
      <text x="12" y="150" font-size="8.5" font-weight="bold" fill="#d97706">• Đỉnh cao Truyện Kiều lục bát</text>
    </g>

    <!-- Era 3: Hiện đại -->
    <g transform="translate(490, 20)">
      <rect x="0" y="0" width="200" height="175" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#2563eb" stroke-width="1.2"/>
      <rect x="0" y="0" width="200" height="28" rx="10" fill="#2563eb"/>
      <text x="100" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">3. VĂN HỌC HIỆN ĐẠI</text>
      <circle cx="100" cy="55" r="18" fill="#dbeafe"/>
      <text x="100" y="60" text-anchor="middle" font-size="14">📚</text>
      <text x="100" y="90" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Chữ Quốc ngữ</text>
      <text x="12" y="112" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Đổi mới thể loại, tiếp thu thế giới</text>
      <text x="12" y="130" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Thơ mới, hiện thực, sử thi kháng chiến</text>
      <text x="12" y="150" font-size="8.5" font-weight="bold" fill="#2563eb">• Khát vọng độc lập, nhân bản</text>
    </g>

    <!-- Project Callout -->
    <rect x="0" y="202" width="690" height="26" rx="6" fill="#ffedd5" class="dark:fill-orange-950/40"/>
    <text x="345" y="219" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#c2410c" class="dark:fill-orange-300">
      Dự án đọc sách: Đọc tác phẩm kinh điển • Thiết kế hồ sơ đọc Reading Journal • Phỏng vấn lan toả văn hoá đọc
    </text>
  </g>
</svg>
`;

// 12. Ôn tập HKII & Cuối năm
svgs['on-tap-hkii'] = `
<svg viewBox="0 0 800 320" class="w-full h-auto max-h-[340px] select-none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="780" height="300" rx="16" fill="#f0fdf4" class="dark:fill-slate-900" stroke="#16a34a" stroke-width="1.5"/>
  <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#15803d" class="dark:fill-green-400">
    BẢN ĐỒ TỔNG THỂ 4 TRỤ CỘT NĂNG LỰC NGỮ VĂN 9 TOÀN KHÓA
  </text>

  <!-- 4 Competency Quadrants -->
  <g transform="translate(40, 55)">
    <!-- Quadrant 1: Kĩ năng Đọc hiểu (Reading) -->
    <rect x="0" y="0" width="340" height="110" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#16a34a" stroke-width="1.2"/>
    <rect x="0" y="0" width="340" height="26" rx="10" fill="#15803d"/>
    <text x="170" y="18" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">1. NĂNG LỰC ĐỌC HIỂU (10 THỂ LOẠI)</text>
    <text x="15" y="45" font-size="9" fill="#475569" class="dark:fill-slate-300">• Truyện: Truyền kì kì ảo, Truyện thơ Nôm, Truyện trinh thám</text>
    <text x="15" y="63" font-size="9" fill="#475569" class="dark:fill-slate-300">• Thơ: Song thất lục bát, Thơ hiện đại 6-7-8 chữ</text>
    <text x="15" y="81" font-size="9" fill="#475569" class="dark:fill-slate-300">• Kịch bi kịch; Nghị luận văn học &amp; Nghị luận xã hội</text>
    <text x="15" y="99" font-size="9" font-weight="bold" fill="#15803d">• Thuyết minh đa phương thức giới thiệu di tích danh lam</text>

    <!-- Quadrant 2: Thực hành Tiếng Việt (Language) -->
    <rect x="380" y="0" width="340" height="110" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#0284c7" stroke-width="1.2"/>
    <rect x="380" y="0" width="340" height="26" rx="10" fill="#0284c7"/>
    <text x="550" y="18" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">2. NĂNG LỰC THỰC HÀNH TIẾNG VIỆT</text>
    <text x="395" y="45" font-size="9" fill="#475569" class="dark:fill-slate-300">• Từ vựng: Yếu tố Hán Việt, Chữ Nôm, Sự phát triển từ vựng</text>
    <text x="395" y="63" font-size="9" fill="#475569" class="dark:fill-slate-300">• Tu từ: Chơi chữ, Điệp thanh, Điệp vần, Ẩn dụ, Hoán dụ</text>
    <text x="395" y="81" font-size="9" fill="#475569" class="dark:fill-slate-300">• Ngữ pháp: Câu rút gọn, Câu đặc biệt, Câu ghép và quan hệ ý nghĩa</text>
    <text x="395" y="99" font-size="9" font-weight="bold" fill="#0284c7">• Kĩ năng viết: Trích dẫn, ghi nguồn &amp; Tên viết tắt quốc tế</text>

    <!-- Quadrant 3: Năng lực Viết (Writing) -->
    <rect x="0" y="125" width="340" height="110" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#e11d48" stroke-width="1.2"/>
    <rect x="0" y="125" width="340" height="26" rx="10" fill="#be123c"/>
    <text x="170" y="143" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">3. NĂNG LỰC VIẾT BÀI VĂN CHUẨN MỰC</text>
    <text x="15" y="170" font-size="9" fill="#475569" class="dark:fill-slate-300">• Nghị luận văn học: Phân tích truyện, thơ, đoạn trích bi kịch</text>
    <text x="15" y="188" font-size="9" fill="#475569" class="dark:fill-slate-300">• Nghị luận xã hội: Vấn đề đời sống học sinh &amp; Vấn đề toàn cầu</text>
    <text x="15" y="206" font-size="9" fill="#475569" class="dark:fill-slate-300">• Tự sự sáng tạo: Kể chuyện có yếu tố trinh thám/phiêu lưu</text>
    <text x="15" y="224" font-size="9" font-weight="bold" fill="#be123c">• Thuyết minh: Giới thiệu danh lam thắng cảnh, di tích lịch sử</text>

    <!-- Quadrant 4: Nói và Nghe (Speaking & Listening) -->
    <rect x="380" y="125" width="340" height="110" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#d97706" stroke-width="1.2"/>
    <rect x="380" y="125" width="340" height="26" rx="10" fill="#b45309"/>
    <text x="550" y="143" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">4. NĂNG LỰC NÓI &amp; NGHE TƯƠNG TÁC</text>
    <text x="395" y="170" font-size="9" fill="#475569" class="dark:fill-slate-300">• Trình bày ý kiến về sự việc thời sự và bảo vệ môi trường</text>
    <text x="395" y="188" font-size="9" fill="#475569" class="dark:fill-slate-300">• Thuyết trình hướng dẫn viên du lịch giới thiệu di tích</text>
    <text x="395" y="206" font-size="9" fill="#475569" class="dark:fill-slate-300">• Thảo luận, phản biện văn minh, tôn trọng ý kiến khác biệt</text>
    <text x="395" y="224" font-size="9" font-weight="bold" fill="#b45309">• Phỏng vấn báo chí và quảng bá lan toả văn hoá đọc sách</text>
  </g>
</svg>
`;

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/nguvan9_svgs.json', JSON.stringify(svgs, null, 2), 'utf8');
console.log('Successfully saved nguvan9_svgs.json with 12 bespoke SVGs.');
