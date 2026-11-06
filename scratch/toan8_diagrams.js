// Toán 8 - Sơ đồ hình học Vector SVG minh họa trực quan
module.exports = {
  'svg-tu-giac': `
    <svg viewBox="0 0 720 280" class="w-full h-auto max-h-72 select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
        </marker>
      </defs>
      <rect x="5" y="5" width="710" height="270" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="360" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">SƠ ĐỒ QUAN HỆ BAO HÀM VÀ CHUYỂN HÓA CÁC TỨ GIÁC ĐẶC BIỆT</text>

      <!-- Tứ giác -->
      <g transform="translate(300, 42)">
        <rect width="120" height="36" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
        <text x="60" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">TỨ GIÁC</text>
      </g>

      <!-- Hình thang -->
      <g transform="translate(300, 105)">
        <rect width="120" height="36" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
        <text x="60" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#3730a3">HÌNH THANG</text>
      </g>
      <line x1="360" y1="78" x2="360" y2="103" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="365" y="94" font-size="9" fill="#64748b">2 cạnh đối // </text>

      <!-- Hình thang cân -->
      <g transform="translate(100, 105)">
        <rect width="140" height="36" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
        <text x="70" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#065f46">HÌNH THANG CÂN</text>
      </g>
      <line x1="300" y1="123" x2="242" y2="123" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)"/>
      <text x="270" y="117" text-anchor="middle" font-size="8.5" fill="#64748b">2 góc kề đáy = nhau</text>

      <!-- Hình bình hành -->
      <g transform="translate(290, 170)">
        <rect width="140" height="36" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="70" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">HÌNH BÌNH HÀNH</text>
      </g>
      <line x1="360" y1="141" x2="360" y2="168" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="365" y="157" font-size="9" fill="#64748b">2 cặp cạnh đối // </text>

      <!-- Hình chữ nhật -->
      <g transform="translate(110, 225)">
        <rect width="130" height="36" rx="8" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
        <text x="65" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#9d174d">HÌNH CHỮ NHẬT</text>
      </g>
      <line x1="310" y1="206" x2="200" y2="225" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)"/>
      <text x="235" y="210" font-size="8.5" fill="#64748b">1 góc vuông</text>

      <!-- Hình thoi -->
      <g transform="translate(480, 225)">
        <rect width="130" height="36" rx="8" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/>
        <text x="65" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#6b21a8">HÌNH THOI</text>
      </g>
      <line x1="410" y1="206" x2="520" y2="225" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)"/>
      <text x="485" y="210" font-size="8.5" fill="#64748b">2 cạnh kề = nhau</text>

      <!-- Hình vuông -->
      <g transform="translate(295, 225)">
        <rect width="130" height="36" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5"/>
        <text x="65" y="22" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#991b1b">HÌNH VUÔNG</text>
      </g>
      <line x1="240" y1="243" x2="293" y2="243" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrow)"/>
      <line x1="480" y1="243" x2="427" y2="243" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrow)"/>
    </svg>
  `,

  'svg-thales': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="670" height="220" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">ĐỊNH LÍ THALÈS VÀ ĐƯỜNG TRUNG BÌNH TRONG TAM GIÁC</text>

      <!-- Tam giác bên trái: Thalès -->
      <g transform="translate(60, 45)">
        <polygon points="120,15 20,150 220,150" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
        <line x1="60" y1="95" x2="180" y2="95" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 2"/>
        <circle cx="120" cy="15" r="3" fill="#1e40af"/>
        <circle cx="20" cy="150" r="3" fill="#1e40af"/>
        <circle cx="220" cy="150" r="3" fill="#1e40af"/>
        <circle cx="60" cy="95" r="3" fill="#dc2626"/>
        <circle cx="180" cy="95" r="3" fill="#dc2626"/>
        <text x="120" y="5" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">A</text>
        <text x="10" y="155" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">B</text>
        <text x="230" y="155" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">C</text>
        <text x="45" y="95" font-size="11" font-weight="bold" fill="#dc2626">M</text>
        <text x="190" y="95" font-size="11" font-weight="bold" fill="#dc2626">N</text>
        <text x="120" y="172" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">MN // BC</text>
      </g>

      <!-- Nội dung Thalès -->
      <g transform="translate(330, 50)">
        <rect width="310" height="150" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="15" y="25" font-size="12" font-weight="bold" fill="#1e40af">1. Định lí Thalès thuận:</text>
        <text x="25" y="48" font-size="11" font-family="serif" fill="#334155">$$\\frac{AM}{AB} = \\frac{AN}{AC} \\quad \\text{và} \\quad \\frac{AM}{MB} = \\frac{AN}{NC}$$</text>
        <text x="15" y="80" font-size="12" font-weight="bold" fill="#047857">2. Hệ quả Thalès:</text>
        <text x="25" y="102" font-size="11" font-family="serif" fill="#334155">$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$</text>
        <text x="15" y="132" font-size="11.5" font-weight="bold" fill="#b91c1c">3. Khi M, N là trung điểm: $MN = \\frac{1}{2}BC$</text>
      </g>
    </svg>
  `,

  'svg-phan-giac': `
    <svg viewBox="0 0 680 220" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="670" height="210" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">TÍNH CHẤT ĐƯỜNG PHÂN GIÁC CỦA TAM GIÁC</text>

      <g transform="translate(60, 40)">
        <polygon points="120,15 30,150 230,150" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
        <line x1="120" y1="15" x2="110" y2="150" stroke="#dc2626" stroke-width="2"/>
        <circle cx="120" cy="15" r="3" fill="#854d0e"/>
        <circle cx="30" cy="150" r="3" fill="#854d0e"/>
        <circle cx="230" cy="150" r="3" fill="#854d0e"/>
        <circle cx="110" cy="150" r="3" fill="#dc2626"/>
        <text x="120" y="5" text-anchor="middle" font-size="12" font-weight="bold" fill="#854d0e">A</text>
        <text x="20" y="155" text-anchor="middle" font-size="12" font-weight="bold" fill="#854d0e">B</text>
        <text x="240" y="155" text-anchor="middle" font-size="12" font-weight="bold" fill="#854d0e">C</text>
        <text x="110" y="168" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">D</text>
        <!-- Cung góc A1, A2 -->
        <path d="M 112 35 A 20 20 0 0 0 120 35" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        <text x="108" y="48" font-size="9" fill="#dc2626">^1</text>
        <text x="126" y="48" font-size="9" fill="#dc2626">^2</text>
      </g>

      <g transform="translate(330, 45)">
        <rect width="310" height="145" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="15" y="30" font-size="13" font-weight="bold" fill="#b45309">Định lí đường phân giác:</text>
        <text x="15" y="55" font-size="11.5" fill="#475569">Trong tam giác, tia phân giác của một góc chia cạnh đối diện thành hai đoạn thẳng tỉ lệ với hai cạnh kề hai đoạn ấy:</text>
        <rect x="25" y="75" width="260" height="42" rx="8" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
        <text x="155" y="102" text-anchor="middle" font-size="14" font-weight="bold" fill="#854d0e">$$\\frac{BD}{DC} = \\frac{AB}{AC}$$</text>
      </g>
    </svg>
  `,

  'svg-do-thi-bac-nhat': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="670" height="220" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">HÀM SỐ BẬC NHẤT y = ax + b (a ≠ 0) VÀ HỆ SỐ GÓC a</text>

      <!-- Trường hợp a > 0 -->
      <g transform="translate(60, 45)">
        <rect width="250" height="150" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Trục Oxy -->
        <line x1="20" y1="120" x2="230" y2="120" stroke="#64748b" stroke-width="1.5"/>
        <line x1="70" y1="140" x2="70" y2="15" stroke="#64748b" stroke-width="1.5"/>
        <text x="225" y="115" font-size="10" fill="#64748b">x</text>
        <text x="75" y="20" font-size="10" fill="#64748b">y</text>
        <text x="60" y="132" font-size="10" fill="#64748b">O</text>
        <!-- Đường thẳng đi lên -->
        <line x1="30" y1="135" x2="190" y2="35" stroke="#2563eb" stroke-width="2.5"/>
        <text x="125" y="30" font-size="11" font-weight="bold" fill="#2563eb">y = ax + b (a > 0)</text>
        <text x="125" y="145" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#059669">Đồng biến • Góc α nhọn (&lt; 90°)</text>
      </g>

      <!-- Trường hợp a < 0 -->
      <g transform="translate(370, 45)">
        <rect width="250" height="150" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Trục Oxy -->
        <line x1="20" y1="120" x2="230" y2="120" stroke="#64748b" stroke-width="1.5"/>
        <line x1="180" y1="140" x2="180" y2="15" stroke="#64748b" stroke-width="1.5"/>
        <text x="225" y="115" font-size="10" fill="#64748b">x</text>
        <text x="185" y="20" font-size="10" fill="#64748b">y</text>
        <text x="170" y="132" font-size="10" fill="#64748b">O</text>
        <!-- Đường thẳng đi xuống -->
        <line x1="50" y1="35" x2="210" y2="135" stroke="#dc2626" stroke-width="2.5"/>
        <text x="110" y="30" font-size="11" font-weight="bold" fill="#dc2626">y = ax + b (a &lt; 0)</text>
        <text x="125" y="145" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">Nghịch biến • Góc α tù (&gt; 90°)</text>
      </g>
    </svg>
  `,

  'svg-hinh-chop': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="670" height="220" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">MÔ HÌNH HÌNH CHÓP TAM GIÁC ĐỀU & HÌNH CHÓP TỨ GIÁC ĐỀU</text>

      <!-- Hình chóp tam giác đều -->
      <g transform="translate(80, 45)">
        <polygon points="120,15 40,130 190,130" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
        <line x1="120" y1="15" x2="110" y2="150" stroke="#ea580c" stroke-width="2"/>
        <line x1="40" y1="130" x2="110" y2="150" stroke="#ea580c" stroke-width="1.5"/>
        <line x1="190" y1="130" x2="110" y2="150" stroke="#ea580c" stroke-width="1.5"/>
        <!-- Đường cao h và trung đoạn d -->
        <line x1="120" y1="15" x2="113" y2="135" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3 2"/>
        <line x1="120" y1="15" x2="150" y2="140" stroke="#dc2626" stroke-width="1.5"/>
        <text x="120" y="5" text-anchor="middle" font-size="11" font-weight="bold" fill="#9a3412">S</text>
        <text x="110" y="165" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ea580c">Chóp tam giác đều</text>
        <text x="155" y="80" font-size="9.5" fill="#dc2626">d (trung đoạn)</text>
      </g>

      <!-- Hình chóp tứ giác đều -->
      <g transform="translate(400, 45)">
        <polygon points="120,15 30,120 170,120 210,95" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
        <line x1="120" y1="15" x2="30" y2="120" stroke="#dc2626" stroke-width="2"/>
        <line x1="120" y1="15" x2="170" y2="120" stroke="#dc2626" stroke-width="2"/>
        <line x1="120" y1="15" x2="210" y2="95" stroke="#dc2626" stroke-width="2"/>
        <line x1="120" y1="15" x2="70" y2="95" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/>
        <line x1="30" y1="120" x2="70" y2="95" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/>
        <line x1="70" y1="95" x2="210" y2="95" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/>
        <!-- Đường cao h -->
        <line x1="120" y1="15" x2="120" y2="108" stroke="#2563eb" stroke-width="2" stroke-dasharray="3 2"/>
        <text x="120" y="5" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">S</text>
        <text x="120" y="165" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">Chóp tứ giác đều (đáy vuông)</text>
        <text x="130" y="70" font-size="10" font-weight="bold" fill="#2563eb">h</text>
      </g>
    </svg>
  `
};
