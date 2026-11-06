// Sưu tập đầy đủ sơ đồ hình học & đồ thị Vector SVG cho Toán 8
// Thiết kế responsive, chuẩn xác về mặt toán học, phối màu hiện đại

module.exports = {
  // Bài 6: Minh họa hình học hằng đẳng thức (a+b)^2 = a^2 + 2ab + b^2
  'bai-6': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">MINH HỌA HÌNH HỌC: DIỆN TÍCH HÌNH VUÔNG (a + b)² = a² + 2ab + b²</text>
      
      <!-- Hình vuông lớn chia làm 4 phần -->
      <g transform="translate(60, 42)">
        <!-- a^2 -->
        <rect x="0" y="0" width="90" height="90" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <text x="45" y="48" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d4ed8">a²</text>
        <text x="45" y="-6" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">a</text>
        <text x="-10" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">a</text>

        <!-- ab trên phải -->
        <rect x="90" y="0" width="50" height="90" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="115" y="48" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">ab</text>
        <text x="115" y="-6" text-anchor="middle" font-size="11" font-weight="bold" fill="#d97706">b</text>

        <!-- ab dưới trái -->
        <rect x="0" y="90" width="90" height="50" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="45" y="118" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">ab</text>
        <text x="-10" y="118" text-anchor="middle" font-size="11" font-weight="bold" fill="#d97706">b</text>

        <!-- b^2 -->
        <rect x="90" y="90" width="50" height="50" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
        <text x="115" y="118" text-anchor="middle" font-size="13" font-weight="bold" fill="#b91c1c">b²</text>
      </g>

      <!-- Phân tích ý nghĩa bên phải -->
      <g transform="translate(250, 48)">
        <rect width="390" height="155" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="20" y="28" font-size="13" font-weight="bold" fill="#0369a1">• Diện tích hình vuông cạnh (a + b):</text>
        <text x="40" y="52" font-size="14" font-weight="bold" fill="#0f172a" font-family="monospace">S = (a + b) × (a + b) = (a + b)²</text>
        
        <text x="20" y="82" font-size="13" font-weight="bold" fill="#059669">• Tổng diện tích 4 hình hợp thành:</text>
        <text x="40" y="106" font-size="14" font-weight="bold" fill="#0f172a" font-family="monospace">S = a² + ab + ab + b² = a² + 2ab + b²</text>
        
        <path d="M 20 120 L 370 120" stroke="#e2e8f0" stroke-width="1"/>
        <text x="195" y="140" text-anchor="middle" font-size="12" font-weight="bold" fill="#ea580c">⇒ (a + b)² = a² + 2ab + b² (Đẳng thức luôn đúng)</text>
      </g>
    </svg>
  `,

  // Bài 9: Sơ đồ 4 phương pháp phân tích đa thức thành nhân tử
  'bai-9': `
    <svg viewBox="0 0 680 210" class="w-full h-auto max-h-64 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="210" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">SƠ ĐỒ 4 PHƯƠNG PHÁP PHÂN TÍCH ĐA THỨC THÀNH NHÂN TỬ</text>
      
      <!-- Khối trung tâm -->
      <rect x="250" y="40" width="180" height="34" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <text x="340" y="62" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">ĐA THỨC BAN ĐẦU</text>

      <!-- 4 Nhánh -->
      <g transform="translate(15, 100)">
        <rect width="150" height="92" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
        <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">1. Đặt nhân tử chung</text>
        <text x="75" y="40" text-anchor="middle" font-size="10" font-family="monospace" fill="#334155">A·B + A·C = A(B+C)</text>
        <text x="75" y="62" text-anchor="middle" font-size="9" fill="#64748b">Ví dụ: 3x² + 6x</text>
        <text x="75" y="78" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#15803d">= 3x(x + 2)</text>
      </g>

      <g transform="translate(180, 100)">
        <rect width="150" height="92" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
        <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#a16207">2. Dùng hằng đẳng thức</text>
        <text x="75" y="40" text-anchor="middle" font-size="10" font-family="monospace" fill="#334155">A² - B² = (A-B)(A+B)</text>
        <text x="75" y="62" text-anchor="middle" font-size="9" fill="#64748b">Ví dụ: x² - 9</text>
        <text x="75" y="78" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#a16207">= (x - 3)(x + 3)</text>
      </g>

      <g transform="translate(345, 100)">
        <rect width="155" height="92" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
        <text x="77" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#6d28d9">3. Nhóm hạng tử</text>
        <text x="77" y="40" text-anchor="middle" font-size="10" font-family="monospace" fill="#334155">Ghép cụm hợp lí</text>
        <text x="77" y="62" text-anchor="middle" font-size="9" fill="#64748b">Ví dụ: xy + 2x + y + 2</text>
        <text x="77" y="78" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#6d28d9">= (x + 1)(y + 2)</text>
      </g>

      <g transform="translate(515, 100)">
        <rect width="150" height="92" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="75" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">4. Phối hợp nhiều PP</text>
        <text x="75" y="40" text-anchor="middle" font-size="10" font-family="monospace" fill="#334155">Đặt NTC + HĐT</text>
        <text x="75" y="62" text-anchor="middle" font-size="9" fill="#64748b">Ví dụ: 2x³ - 8x</text>
        <text x="75" y="78" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#b91c1c">= 2x(x - 2)(x + 2)</text>
      </g>

      <!-- Đường nối từ tâm -->
      <path d="M 270 74 L 90 100" stroke="#94a3b8" stroke-width="1.5"/>
      <path d="M 320 74 L 255 100" stroke="#94a3b8" stroke-width="1.5"/>
      <path d="M 360 74 L 420 100" stroke="#94a3b8" stroke-width="1.5"/>
      <path d="M 410 74 L 590 100" stroke="#94a3b8" stroke-width="1.5"/>
    </svg>
  `,

  // Bài 10: Tứ giác lồi ABCD và tổng các góc
  'bai-10': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">HÌNH HỌC TỨ GIÁC LỒI ABCD &amp; TỔNG CÁC GÓC TRONG</text>
      
      <!-- Hình tứ giác lồi ABCD -->
      <g transform="translate(60, 45)">
        <!-- Đa giác ABCD -->
        <polygon points="60,10 180,20 150,140 20,110" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
        <!-- Đường chéo AC, BD đứt nét -->
        <line x1="60" y1="10" x2="150" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="180" y1="20" x2="20" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>

        <!-- Tên các đỉnh -->
        <circle cx="60" cy="10" r="4" fill="#0369a1"/>
        <text x="55" y="-2" font-size="12" font-weight="bold" fill="#0369a1">A</text>
        <circle cx="180" cy="20" r="4" fill="#0369a1"/>
        <text x="190" y="22" font-size="12" font-weight="bold" fill="#0369a1">B</text>
        <circle cx="150" cy="140" r="4" fill="#0369a1"/>
        <text x="155" y="156" font-size="12" font-weight="bold" fill="#0369a1">C</text>
        <circle cx="20" cy="110" r="4" fill="#0369a1"/>
        <text x="5" y="122" font-size="12" font-weight="bold" fill="#0369a1">D</text>

        <!-- Kí hiệu các góc -->
        <path d="M 60 25 A 15 15 0 0 0 47 18" fill="none" stroke="#dc2626" stroke-width="2"/>
        <path d="M 167 22 A 15 15 0 0 0 174 33" fill="none" stroke="#16a34a" stroke-width="2"/>
        <path d="M 140 134 A 15 15 0 0 0 148 126" fill="none" stroke="#d97706" stroke-width="2"/>
        <path d="M 32 105 A 15 15 0 0 0 28 97" fill="none" stroke="#7c3aed" stroke-width="2"/>
      </g>

      <!-- Bảng tính chất bên phải -->
      <g transform="translate(300, 45)">
        <rect width="340" height="155" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="20" y="26" font-size="12.5" font-weight="bold" fill="#0369a1">• Định nghĩa tứ giác lồi:</text>
        <text x="30" y="46" font-size="11.5" fill="#334155">Luôn nằm trọn trong một nửa mặt phẳng có bờ</text>
        <text x="30" y="64" font-size="11.5" fill="#334155">là đường thẳng chứa bất kì cạnh nào của tứ giác.</text>
        
        <path d="M 20 78 L 320 78" stroke="#f1f5f9" stroke-width="1.5"/>
        <text x="20" y="98" font-size="12.5" font-weight="bold" fill="#dc2626">• Định lí tổng các góc trong một tứ giác:</text>
        <text x="40" y="124" font-size="15" font-weight="bold" fill="#dc2626" font-family="monospace">Â + B̂ + Ĉ + D̂ = 360°</text>
        <text x="30" y="146" font-size="10.5" fill="#64748b">(Chứng minh qua đường chéo AC chia tứ giác làm 2 tam giác)</text>
      </g>
    </svg>
  `,

  // Bài 11: Hình thang cân
  'bai-11': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">HÌNH THANG CÂN ABCD (AB // CD, AD = BC)</text>
      
      <!-- Hình vẽ hình thang cân -->
      <g transform="translate(60, 45)">
        <!-- Đa giác ABCD cân: A(50,20), B(150,20), C(190,130), D(10,130) -->
        <polygon points="50,20 150,20 190,130 10,130" fill="#ecfdf5" stroke="#059669" stroke-width="2.5"/>
        
        <!-- Đường cao AH, BK -->
        <line x1="50" y1="20" x2="50" y2="130" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="150" y1="20" x2="150" y2="130" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
        <!-- Kí hiệu vuông góc tại H, K -->
        <rect x="50" y="122" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1"/>
        <rect x="142" y="122" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1"/>
        <text x="50" y="145" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">H</text>
        <text x="150" y="145" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">K</text>

        <!-- Đường chéo AC, BD -->
        <line x1="50" y1="20" x2="190" y2="130" stroke="#2563eb" stroke-width="1.5"/>
        <line x1="150" y1="20" x2="10" y2="130" stroke="#2563eb" stroke-width="1.5"/>

        <!-- Đỉnh -->
        <circle cx="50" cy="20" r="4" fill="#047857"/>
        <text x="44" y="10" font-size="12" font-weight="bold" fill="#047857">A</text>
        <circle cx="150" cy="20" r="4" fill="#047857"/>
        <text x="154" y="10" font-size="12" font-weight="bold" fill="#047857">B</text>
        <circle cx="190" cy="130" r="4" fill="#047857"/>
        <text x="198" y="140" font-size="12" font-weight="bold" fill="#047857">C</text>
        <circle cx="10" cy="130" r="4" fill="#047857"/>
        <text x="-4" y="140" font-size="12" font-weight="bold" fill="#047857">D</text>

        <!-- Kí hiệu cạnh bên bằng nhau AD = BC (gạch chéo) -->
        <line x1="26" y1="73" x2="34" y2="77" stroke="#059669" stroke-width="2"/>
        <line x1="166" y1="77" x2="174" y2="73" stroke="#059669" stroke-width="2"/>
      </g>

      <!-- Hộp tính chất & Dấu hiệu bên phải -->
      <g transform="translate(310, 45)">
        <rect width="330" height="155" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="16" y="24" font-size="12" font-weight="bold" fill="#047857">TÍNH CHẤT HÌNH THANG CÂN:</text>
        <text x="24" y="44" font-size="11" fill="#334155">1. Hai cạnh bên bằng nhau: <tspan font-weight="bold" fill="#047857">AD = BC</tspan></text>
        <text x="24" y="62" font-size="11" fill="#334155">2. Hai góc kề một đáy bằng nhau: <tspan font-weight="bold" fill="#047857">D̂ = Ĉ</tspan> và <tspan font-weight="bold" fill="#047857">Â = B̂</tspan></text>
        <text x="24" y="80" font-size="11" fill="#334155">3. Hai đường chéo bằng nhau: <tspan font-weight="bold" fill="#2563eb">AC = BD</tspan></text>
        
        <path d="M 16 92 L 314 92" stroke="#e2e8f0" stroke-width="1"/>
        <text x="16" y="110" font-size="12" font-weight="bold" fill="#b45309">DẤU HIỆU NHẬN BIẾT:</text>
        <text x="24" y="128" font-size="11" fill="#334155">• Hình thang có 2 góc kề 1 đáy bằng nhau</text>
        <text x="24" y="146" font-size="11" fill="#334155">• Hình thang có 2 đường chéo bằng nhau</text>
      </g>
    </svg>
  `,

  // Bài 12: Hình bình hành
  'bai-12': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">HÌNH BÌNH HÀNH ABCD &amp; TÍNH CHẤT TRUNG ĐIỂM ĐƯỜNG CHÉO</text>
      
      <!-- Hình vẽ hình bình hành -->
      <g transform="translate(60, 45)">
        <!-- Đỉnh: A(60,20), B(200,20), C(150,130), D(10,130) -->
        <polygon points="60,20 200,20 150,130 10,130" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
        
        <!-- Đường chéo AC, BD cắt nhau tại O (105, 75) -->
        <line x1="60" y1="20" x2="150" y2="130" stroke="#2563eb" stroke-width="1.5"/>
        <line x1="200" y1="20" x2="10" y2="130" stroke="#2563eb" stroke-width="1.5"/>

        <!-- Điểm O -->
        <circle cx="105" cy="75" r="4.5" fill="#dc2626"/>
        <text x="105" y="93" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#dc2626">O</text>

        <!-- Kí hiệu OA = OC (1 gạch) -->
        <circle cx="82" cy="47" r="2.5" fill="#2563eb"/>
        <circle cx="128" cy="103" r="2.5" fill="#2563eb"/>

        <!-- Đỉnh -->
        <circle cx="60" cy="20" r="4" fill="#b45309"/>
        <text x="52" y="10" font-size="12" font-weight="bold" fill="#b45309">A</text>
        <circle cx="200" cy="20" r="4" fill="#b45309"/>
        <text x="208" y="18" font-size="12" font-weight="bold" fill="#b45309">B</text>
        <circle cx="150" cy="130" r="4" fill="#b45309"/>
        <text x="156" y="144" font-size="12" font-weight="bold" fill="#b45309">C</text>
        <circle cx="10" cy="130" r="4" fill="#b45309"/>
        <text x="-4" y="144" font-size="12" font-weight="bold" fill="#b45309">D</text>
      </g>

      <!-- Bảng tính chất bên phải -->
      <g transform="translate(310, 45)">
        <rect width="330" height="155" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="16" y="24" font-size="12" font-weight="bold" fill="#b45309">TÍNH CHẤT TRỌNG TÂM:</text>
        <text x="24" y="44" font-size="11" fill="#334155">• Các cạnh đối song song &amp; bằng nhau: <tspan font-weight="bold" fill="#b45309">AB = CD, AD = BC</tspan></text>
        <text x="24" y="64" font-size="11" fill="#334155">• Các góc đối bằng nhau: <tspan font-weight="bold" fill="#b45309">Â = Ĉ, B̂ = D̂</tspan></text>
        <text x="24" y="84" font-size="11" fill="#334155">• 2 đường chéo cắt nhau tại trung điểm mỗi đường:</text>
        <text x="40" y="104" font-size="12" font-weight="bold" fill="#dc2626" font-family="monospace">OA = OC và OB = OD</text>
        
        <path d="M 16 114 L 314 114" stroke="#e2e8f0" stroke-width="1"/>
        <text x="16" y="132" font-size="11.5" font-weight="bold" fill="#0284c7">Dấu hiệu nhận biết thường dùng nhất:</text>
        <text x="24" y="148" font-size="10.5" fill="#64748b">Tứ giác có 1 cặp cạnh đối song song VÀ bằng nhau là hình bình hành.</text>
      </g>
    </svg>
  `,

  // Bài 13: Hình chữ nhật
  'bai-13': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">HÌNH CHỮ NHẬT ABCD (4 GÓC VUÔNG, 2 ĐƯỜNG CHÉO BẰNG NHAU)</text>
      
      <!-- Hình chữ nhật -->
      <g transform="translate(60, 45)">
        <rect x="10" y="20" width="180" height="110" fill="#fce7f3" stroke="#db2777" stroke-width="2.5"/>
        
        <!-- 4 Góc vuông -->
        <rect x="10" y="20" width="10" height="10" fill="none" stroke="#db2777" stroke-width="1.5"/>
        <rect x="180" y="20" width="10" height="10" fill="none" stroke="#db2777" stroke-width="1.5"/>
        <rect x="180" y="120" width="10" height="10" fill="none" stroke="#db2777" stroke-width="1.5"/>
        <rect x="10" y="120" width="10" height="10" fill="none" stroke="#db2777" stroke-width="1.5"/>

        <!-- 2 đường chéo bằng nhau -->
        <line x1="10" y1="20" x2="190" y2="130" stroke="#2563eb" stroke-width="1.5"/>
        <line x1="190" y1="20" x2="10" y2="130" stroke="#2563eb" stroke-width="1.5"/>
        <circle cx="100" cy="75" r="4.5" fill="#dc2626"/>
        <text x="100" y="93" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#dc2626">O</text>

        <!-- Đỉnh -->
        <text x="2" y="12" font-size="12" font-weight="bold" fill="#9d174d">A</text>
        <text x="195" y="12" font-size="12" font-weight="bold" fill="#9d174d">B</text>
        <text x="195" y="142" font-size="12" font-weight="bold" fill="#9d174d">C</text>
        <text x="2" y="142" font-size="12" font-weight="bold" fill="#9d174d">D</text>
      </g>

      <!-- Tính chất bên phải -->
      <g transform="translate(310, 45)">
        <rect width="330" height="155" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="16" y="24" font-size="12" font-weight="bold" fill="#9d174d">ĐẶC TÍNH CỐT LÕI CỦA HÌNH CHỮ NHẬT:</text>
        <text x="24" y="44" font-size="11" fill="#334155">• Có 4 góc vuông: <tspan font-weight="bold" fill="#9d174d">Â = B̂ = Ĉ = D̂ = 90°</tspan></text>
        <text x="24" y="64" font-size="11" fill="#334155">• 2 đường chéo vừa bằng nhau vừa cắt nhau tại trung điểm:</text>
        <text x="40" y="84" font-size="12" font-weight="bold" fill="#2563eb" font-family="monospace">AC = BD ⇒ OA = OB = OC = OD</text>
        
        <path d="M 16 94 L 314 94" stroke="#e2e8f0" stroke-width="1"/>
        <text x="16" y="114" font-size="12" font-weight="bold" fill="#059669">ĐỊNH LÍ TRONG TAM GIÁC VUÔNG (HỆ QUẢ):</text>
        <text x="24" y="132" font-size="11" fill="#334155">Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền</text>
        <text x="24" y="148" font-size="11" font-weight="bold" fill="#059669">bằng một nửa cạnh huyền (AO = 1/2 BC trong ΔABC vuông tại A).</text>
      </g>
    </svg>
  `,

  // Bài 14: Hình thoi và Hình vuông
  'bai-14': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">HÌNH THOI &amp; HÌNH VUÔNG: ĐẶC TRƯNG ĐƯỜNG CHÉO VUÔNG GÓC</text>
      
      <!-- Khung 1: Hình thoi -->
      <g transform="translate(40, 42)">
        <rect width="280" height="165" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="140" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#7c3aed">1. HÌNH THOI (4 CẠNH BẰNG NHAU)</text>
        
        <!-- Hình thoi -->
        <g transform="translate(60, 30)">
          <polygon points="80,10 140,55 80,100 20,55" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
          <line x1="80" y1="10" x2="80" y2="100" stroke="#dc2626" stroke-width="1.5"/>
          <line x1="20" y1="55" x2="140" y2="55" stroke="#dc2626" stroke-width="1.5"/>
          <!-- Góc vuông tại tâm -->
          <rect x="80" y="55" width="7" height="7" fill="none" stroke="#dc2626" stroke-width="1"/>
          <circle cx="80" cy="55" r="2.5" fill="#dc2626"/>
          <text x="75" y="7" font-size="9.5" font-weight="bold" fill="#7c3aed">A</text>
          <text x="146" y="58" font-size="9.5" font-weight="bold" fill="#7c3aed">B</text>
          <text x="75" y="112" font-size="9.5" font-weight="bold" fill="#7c3aed">C</text>
          <text x="7" y="58" font-size="9.5" font-weight="bold" fill="#7c3aed">D</text>
        </g>
        <text x="140" y="152" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">AC ⊥ BD tại trung điểm &amp; là phân giác</text>
      </g>

      <!-- Khung 2: Hình vuông -->
      <g transform="translate(360, 42)">
        <rect width="280" height="165" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="140" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#059669">2. HÌNH VUÔNG (VỪA LÀ CN, VỪA LÀ THOI)</text>
        
        <!-- Hình vuông -->
        <g transform="translate(95, 32)">
          <rect x="0" y="0" width="85" height="85" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
          <line x1="0" y1="0" x2="85" y2="85" stroke="#2563eb" stroke-width="1.5"/>
          <line x1="85" y1="0" x2="0" y2="85" stroke="#2563eb" stroke-width="1.5"/>
          <!-- Góc vuông tâm -->
          <rect x="37" y="37" width="6" height="6" fill="none" stroke="#dc2626" stroke-width="1"/>
          
          <text x="-12" y="-2" font-size="9.5" font-weight="bold" fill="#047857">A</text>
          <text x="88" y="-2" font-size="9.5" font-weight="bold" fill="#047857">B</text>
          <text x="88" y="94" font-size="9.5" font-weight="bold" fill="#047857">C</text>
          <text x="-12" y="94" font-size="9.5" font-weight="bold" fill="#047857">D</text>
        </g>
        <text x="140" y="140" text-anchor="middle" font-size="10" fill="#334155">4 góc vuông + 4 cạnh bằng nhau</text>
        <text x="140" y="155" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#059669">2 đường chéo bằng nhau &amp; vuông góc</text>
      </g>
    </svg>
  `,

  // Bài 15: Định lí Thalès trong tam giác
  'bai-15': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">ĐỊNH LÍ THALÈS THUẬN, ĐẢO &amp; HỆ QUẢ TRONG TAM GIÁC</text>
      
      <!-- Hình vẽ Thalès -->
      <g transform="translate(60, 42)">
        <!-- Tam giác ABC: A(100,10), B(15,145), C(185,145) -->
        <polygon points="100,10 15,145 185,145" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
        
        <!-- Đường thẳng d // BC cắt tại B'(57, 78) và C'(142, 78) -->
        <line x1="30" y1="78" x2="170" y2="78" stroke="#dc2626" stroke-width="2.5"/>
        <text x="176" y="81" font-size="11" font-weight="bold" fill="#dc2626">d // BC</text>

        <!-- Đỉnh và điểm -->
        <circle cx="100" cy="10" r="4" fill="#0369a1"/>
        <text x="96" y="-1" font-size="12" font-weight="bold" fill="#0369a1">A</text>
        <circle cx="15" cy="145" r="4" fill="#0369a1"/>
        <text x="3" y="155" font-size="12" font-weight="bold" fill="#0369a1">B</text>
        <circle cx="185" cy="145" r="4" fill="#0369a1"/>
        <text x="190" y="155" font-size="12" font-weight="bold" fill="#0369a1">C</text>

        <circle cx="57" cy="78" r="4" fill="#dc2626"/>
        <text x="42" y="74" font-size="11.5" font-weight="bold" fill="#dc2626">B'</text>
        <circle cx="142" cy="78" r="4" fill="#dc2626"/>
        <text x="148" y="74" font-size="11.5" font-weight="bold" fill="#dc2626">C'</text>
      </g>

      <!-- Công thức tỉ số bên phải -->
      <g transform="translate(300, 42)">
        <rect width="345" height="162" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="16" y="24" font-size="12" font-weight="bold" fill="#0284c7">CÁC TỈ SỐ ĐOẠN THẲNG TƯƠNG ỨNG TỈ LỆ:</text>
        <text x="24" y="48" font-size="13" font-family="monospace" fill="#0f172a">1. AB' / AB = AC' / AC</text>
        <text x="24" y="70" font-size="13" font-family="monospace" fill="#0f172a">2. AB' / B'B = AC' / C'C</text>
        <text x="24" y="92" font-size="13" font-family="monospace" fill="#0f172a">3. B'B / AB = C'C / AC</text>
        
        <path d="M 16 104 L 329 104" stroke="#e2e8f0" stroke-width="1"/>
        <text x="16" y="124" font-size="12" font-weight="bold" fill="#dc2626">HỆ QUẢ ĐỊNH LÍ THALÈS (TAM GIÁC MỚI):</text>
        <text x="24" y="146" font-size="13.5" font-weight="bold" font-family="monospace" fill="#dc2626">AB' / AB = AC' / AC = B'C' / BC</text>
      </g>
    </svg>
  `,

  // Bài 16: Đường trung bình của tam giác
  'bai-16': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">ĐƯỜNG TRUNG BÌNH CỦA TAM GIÁC (SONG SONG &amp; BẰNG 1/2 ĐÁY)</text>
      
      <!-- Hình tam giác ABC có đường trung bình MN -->
      <g transform="translate(60, 42)">
        <polygon points="90,15 15,145 180,145" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
        
        <!-- Trung điểm M(52.5, 80) và N(135, 80) -->
        <line x1="52.5" y1="80" x2="135" y2="80" stroke="#2563eb" stroke-width="2.5"/>

        <!-- Kí hiệu bằng nhau trên AB: MA = MB -->
        <line x1="68" y1="44" x2="74" y2="50" stroke="#16a34a" stroke-width="1.5"/>
        <line x1="31" y1="109" x2="37" y2="115" stroke="#16a34a" stroke-width="1.5"/>

        <!-- Kí hiệu bằng nhau trên AC: NA = NC (2 gạch) -->
        <line x1="109" y1="45" x2="115" y2="51" stroke="#16a34a" stroke-width="1.5"/>
        <line x1="112" y1="42" x2="118" y2="48" stroke="#16a34a" stroke-width="1.5"/>
        <line x1="154" y1="110" x2="160" y2="116" stroke="#16a34a" stroke-width="1.5"/>
        <line x1="157" y1="107" x2="163" y2="113" stroke="#16a34a" stroke-width="1.5"/>

        <!-- Đỉnh và điểm -->
        <circle cx="90" cy="15" r="4" fill="#15803d"/>
        <text x="86" y="3" font-size="12" font-weight="bold" fill="#15803d">A</text>
        <circle cx="15" cy="145" r="4" fill="#15803d"/>
        <text x="2" y="156" font-size="12" font-weight="bold" fill="#15803d">B</text>
        <circle cx="180" cy="145" r="4" fill="#15803d"/>
        <text x="185" y="156" font-size="12" font-weight="bold" fill="#15803d">C</text>

        <circle cx="52.5" cy="80" r="4" fill="#2563eb"/>
        <text x="36" y="78" font-size="11.5" font-weight="bold" fill="#2563eb">M</text>
        <circle cx="135" cy="80" r="4" fill="#2563eb"/>
        <text x="142" y="78" font-size="11.5" font-weight="bold" fill="#2563eb">N</text>
      </g>

      <!-- Hộp định nghĩa & tính chất -->
      <g transform="translate(290, 42)">
        <rect width="355" height="162" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="16" y="24" font-size="12.5" font-weight="bold" fill="#15803d">ĐỊNH NGHĨA:</text>
        <text x="24" y="44" font-size="11.5" fill="#334155">Đoạn thẳng nối trung điểm 2 cạnh của tam giác.</text>
        <text x="24" y="62" font-size="11" fill="#64748b">(M là trung điểm AB, N là trung điểm AC ⇒ MN là đường TB)</text>
        
        <path d="M 16 74 L 339 74" stroke="#e2e8f0" stroke-width="1"/>
        <text x="16" y="94" font-size="12.5" font-weight="bold" fill="#2563eb">TÍNH CHẤT TRỌNG TÂM:</text>
        <text x="24" y="116" font-size="13" font-weight="bold" fill="#0f172a">• MN // BC (song song với cạnh thứ ba)</text>
        <text x="24" y="138" font-size="13" font-weight="bold" fill="#2563eb" font-family="monospace">• MN = 1/2 BC (bằng một nửa cạnh đáy)</text>
        <text x="24" y="154" font-size="10.5" fill="#64748b">Ứng dụng: Đo khoảng cách gián tiếp giữa 2 điểm bị vật cản.</text>
      </g>
    </svg>
  `,

  // Bài 17: Tính chất đường phân giác của tam giác
  'bai-17': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">TÍNH CHẤT ĐƯỜNG PHÂN GIÁC TRONG &amp; NGOÀI CỦA TAM GIÁC</text>
      
      <!-- Hình vẽ phân giác -->
      <g transform="translate(60, 42)">
        <polygon points="80,15 15,145 190,145" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
        
        <!-- Tia phân giác AD trong: D nằm trên BC chia tỉ lệ AB/AC = 70/130 ≈ 0.54 -> D(76, 145) -->
        <line x1="80" y1="15" x2="80" y2="145" stroke="#dc2626" stroke-width="2.5"/>

        <!-- 2 cung tròn đánh dấu góc bằng nhau tại A -->
        <path d="M 72 32 A 18 18 0 0 0 80 34" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        <path d="M 80 34 A 18 18 0 0 0 88 32" fill="none" stroke="#dc2626" stroke-width="1.5"/>

        <!-- Điểm -->
        <circle cx="80" cy="15" r="4" fill="#c2410c"/>
        <text x="76" y="2" font-size="12" font-weight="bold" fill="#c2410c">A</text>
        <circle cx="15" cy="145" r="4" fill="#c2410c"/>
        <text x="2" y="156" font-size="12" font-weight="bold" fill="#c2410c">B</text>
        <circle cx="190" cy="145" r="4" fill="#c2410c"/>
        <text x="195" y="156" font-size="12" font-weight="bold" fill="#c2410c">C</text>

        <circle cx="80" cy="145" r="4" fill="#dc2626"/>
        <text x="77" y="160" font-size="12" font-weight="bold" fill="#dc2626">D</text>

        <!-- Kích thước minh họa -->
        <text x="35" y="75" font-size="10.5" font-weight="bold" fill="#ea580c">c (AB)</text>
        <text x="145" y="75" font-size="10.5" font-weight="bold" fill="#ea580c">b (AC)</text>
        <text x="45" y="140" font-size="10" font-weight="bold" fill="#dc2626">DB</text>
        <text x="130" y="140" font-size="10" font-weight="bold" fill="#dc2626">DC</text>
      </g>

      <!-- Khung công thức -->
      <g transform="translate(300, 42)">
        <rect width="340" height="162" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="16" y="24" font-size="12.5" font-weight="bold" fill="#c2410c">ĐỊNH LÍ ĐƯỜNG PHÂN GIÁC TRONG:</text>
        <text x="24" y="44" font-size="11.5" fill="#334155">Đường phân giác trong chia cạnh đối diện thành hai đoạn</text>
        <text x="24" y="60" font-size="11.5" fill="#334155">thẳng tỉ lệ với hai cạnh kề hai đoạn thẳng ấy:</text>
        <text x="40" y="86" font-size="14.5" font-weight="bold" fill="#dc2626" font-family="monospace">DB / DC = AB / AC</text>
        
        <path d="M 16 100 L 324 100" stroke="#e2e8f0" stroke-width="1"/>
        <text x="16" y="120" font-size="12" font-weight="bold" fill="#7c3aed">MỞ RỘNG VỚI PHÂN GIÁC NGOÀI (AE):</text>
        <text x="24" y="140" font-size="11" fill="#334155">Nếu AE là tia phân giác của góc ngoài tại đỉnh A (E ∈ BC):</text>
        <text x="40" y="156" font-size="13" font-weight="bold" fill="#7c3aed" font-family="monospace">EB / EC = AB / AC (với AB ≠ AC)</text>
      </g>
    </svg>
  `,

  // Bài 18: Sơ đồ phân loại dữ liệu thống kê
  'bai-18': `
    <svg viewBox="0 0 680 220" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">CÂY PHÂN LOẠI DỮ LIỆU THỐNG KÊ (DATA CLASSIFICATION)</text>
      
      <!-- Cây phân loại -->
      <!-- Gốc -->
      <g transform="translate(260, 40)">
        <rect width="160" height="32" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
        <text x="80" y="21" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">DỮ LIỆU THỐNG KÊ</text>
      </g>

      <!-- Nhánh 1: Định tính -->
      <g transform="translate(60, 100)">
        <rect width="240" height="105" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="120" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#92400e">DỮ LIỆU ĐỊNH TÍNH (Chữ, Kí hiệu)</text>
        <text x="16" y="44" font-size="10.5" font-weight="bold" fill="#b45309">• Không sắp thứ tự:</text>
        <text x="24" y="60" font-size="10" fill="#334155">Màu sắc (xanh, đỏ), Giới tính, Dân tộc</text>
        <text x="16" y="80" font-size="10.5" font-weight="bold" fill="#b45309">• Có thể sắp thứ tự:</text>
        <text x="24" y="96" font-size="10" fill="#334155">Xếp loại học lực (Giỏi, Khá, TB), Size áo</text>
      </g>

      <!-- Nhánh 2: Định lượng -->
      <g transform="translate(380, 100)">
        <rect width="240" height="105" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
        <text x="120" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#065f46">DỮ LIỆU ĐỊNH LƯỢNG (Con số)</text>
        <text x="16" y="44" font-size="10.5" font-weight="bold" fill="#047857">• Số liệu rời rạc (đếm được):</text>
        <text x="24" y="60" font-size="10" fill="#334155">Số học sinh, số bàn thắng, số lỗi phạt</text>
        <text x="16" y="80" font-size="10.5" font-weight="bold" fill="#047857">• Số liệu liên tục (đo đạc):</text>
        <text x="24" y="96" font-size="10" fill="#334155">Chiều cao, cân nặng, thời gian chạy, nhiệt độ</text>
      </g>

      <!-- Đường nối -->
      <path d="M 300 72 L 180 100" stroke="#94a3b8" stroke-width="1.5"/>
      <path d="M 380 72 L 500 100" stroke="#94a3b8" stroke-width="1.5"/>
    </svg>
  `,

  // Bài 19: Bộ 3 biểu đồ thống kê
  'bai-19': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">BỘ BA BIỂU ĐỒ THỐNG KÊ PHỔ BIẾN &amp; MỤC ĐÍCH SỬ DỤNG</text>
      
      <!-- Biểu đồ 1: Cột kép -->
      <g transform="translate(30, 42)">
        <rect width="190" height="170" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="95" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">1. BIỂU ĐỒ CỘT KÉP</text>
        <!-- Cột minh họa -->
        <line x1="25" y1="125" x2="165" y2="125" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="25" y1="40" x2="25" y2="125" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- Cặp 1 -->
        <rect x="40" y="70" width="16" height="55" fill="#3b82f6"/>
        <rect x="58" y="55" width="16" height="70" fill="#f97316"/>
        <!-- Cặp 2 -->
        <rect x="95" y="60" width="16" height="65" fill="#3b82f6"/>
        <rect x="113" y="45" width="16" height="80" fill="#f97316"/>
        <text x="95" y="145" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0284c7">So sánh 2 đối tượng</text>
        <text x="95" y="160" text-anchor="middle" font-size="8.5" fill="#64748b">(Nam/Nữ, Lớp A/Lớp B)</text>
      </g>

      <!-- Biểu đồ 2: Quạt tròn -->
      <g transform="translate(245, 42)">
        <rect width="190" height="170" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="95" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">2. HÌNH QUẠT TRÒN</text>
        <!-- Quạt tròn -->
        <g transform="translate(95, 80)">
          <circle cx="0" cy="0" r="42" fill="#10b981"/>
          <!-- Cung 40% (xanh dương) -->
          <path d="M 0 0 L 0 -42 A 42 42 0 0 1 40 12 Z" fill="#3b82f6"/>
          <!-- Cung 25% (vàng) -->
          <path d="M 0 0 L 40 12 A 42 42 0 0 1 -12 40 Z" fill="#f59e0b"/>
          <text x="14" y="-14" font-size="9" font-weight="bold" fill="#ffffff">40%</text>
          <text x="8" y="24" font-size="8.5" font-weight="bold" fill="#ffffff">25%</text>
        </g>
        <text x="95" y="145" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#15803d">Biểu diễn tỉ lệ %</text>
        <text x="95" y="160" text-anchor="middle" font-size="8.5" fill="#64748b">So với toàn thể (100%)</text>
      </g>

      <!-- Biểu đồ 3: Đoạn thẳng -->
      <g transform="translate(460, 42)">
        <rect width="190" height="170" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="95" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">3. BIỂU ĐỒ ĐOẠN THẲNG</text>
        <!-- Trục và đường gấp khúc -->
        <line x1="25" y1="125" x2="165" y2="125" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="25" y1="40" x2="25" y2="125" stroke="#94a3b8" stroke-width="1.5"/>
        <polyline points="40,110 75,75 110,90 145,50" fill="none" stroke="#ef4444" stroke-width="2.5"/>
        <circle cx="40" cy="110" r="3" fill="#b91c1c"/>
        <circle cx="75" cy="75" r="3" fill="#b91c1c"/>
        <circle cx="110" cy="90" r="3" fill="#b91c1c"/>
        <circle cx="145" cy="50" r="3" fill="#b91c1c"/>
        <text x="95" y="145" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#b91c1c">Xu hướng theo thời gian</text>
        <text x="95" y="160" text-anchor="middle" font-size="8.5" fill="#64748b">(Tăng trưởng, biến động)</text>
      </g>
    </svg>
  `,

  // Bài 20: Phân tích số liệu và phát hiện bất thường
  'bai-20': `
    <svg viewBox="0 0 680 220" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">PHÂN TÍCH VÀ PHÁT HIỆN SỐ LIỆU BẤT THƯỜNG TRÊN BIỂU ĐỒ</text>
      
      <!-- Biểu đồ có điểm bất thường -->
      <g transform="translate(60, 45)">
        <rect width="240" height="150" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Trục tọa độ -->
        <line x1="30" y1="130" x2="220" y2="130" stroke="#64748b" stroke-width="1.5"/>
        <line x1="30" y1="20" x2="30" y2="130" stroke="#64748b" stroke-width="1.5"/>
        
        <!-- Đường diễn biến bình thường -->
        <polyline points="45,100 80,95 115,88 150,25 185,80" fill="none" stroke="#2563eb" stroke-width="2"/>
        <circle cx="45" cy="100" r="3" fill="#2563eb"/>
        <circle cx="80" cy="95" r="3" fill="#2563eb"/>
        <circle cx="115" cy="88" r="3" fill="#2563eb"/>
        <circle cx="185" cy="80" r="3" fill="#2563eb"/>
        
        <!-- Điểm dị biệt (Outlier) -->
        <circle cx="150" cy="25" r="5" fill="#dc2626"/>
        <circle cx="150" cy="25" r="9" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
        <text x="150" y="16" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">Điểm bất thường!</text>
      </g>

      <!-- Nội dung ghi chú phân tích -->
      <g transform="translate(325, 45)">
        <rect width="315" height="150" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="16" y="24" font-size="12" font-weight="bold" fill="#0284c7">QUY TRÌNH 3 BƯỚC PHÂN TÍCH DỮ LIỆU:</text>
        <text x="24" y="46" font-size="11" fill="#334155"><tspan font-weight="bold" fill="#0284c7">Bước 1:</tspan> Đọc giá trị lớn nhất (Max), nhỏ nhất (Min).</text>
        <text x="24" y="68" font-size="11" fill="#334155"><tspan font-weight="bold" fill="#0284c7">Bước 2:</tspan> Xác định xu thế chung (tăng, giảm, ổn định).</text>
        <text x="24" y="90" font-size="11" fill="#334155"><tspan font-weight="bold" fill="#0284c7">Bước 3:</tspan> Tìm kiếm dữ liệu đột biến hoặc lỗi ghi chép.</text>
        
        <path d="M 16 104 L 299 104" stroke="#e2e8f0" stroke-width="1"/>
        <text x="16" y="124" font-size="11" font-weight="bold" fill="#dc2626">Cảnh giác:</text>
        <text x="24" y="140" font-size="10.5" fill="#64748b">Tránh bị đánh lừa bởi biểu đồ có gốc trục tung không bắt đầu từ 0.</text>
      </g>
    </svg>
  `,

  // Bài 26: Chu trình giải bài toán lập PT
  'bai-26': `
    <svg viewBox="0 0 680 200" class="w-full h-auto max-h-60 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="200" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">QUY TRÌNH 3 BƯỚC GIẢI BÀI TOÁN BẰNG CÁCH LẬP PHƯƠNG TRÌNH</text>
      
      <!-- Bước 1 -->
      <g transform="translate(30, 48)">
        <rect width="180" height="125" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
        <text x="90" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0369a1">BƯỚC 1: LẬP PHƯƠNG TRÌNH</text>
        <text x="12" y="44" font-size="10" fill="#334155">• Chọn ẩn x &amp; đặt ĐKXĐ</text>
        <text x="12" y="62" font-size="10" fill="#334155">• Biểu diễn đại lượng chưa biết</text>
        <text x="12" y="80" font-size="10" fill="#334155">• Lập phương trình theo quan hệ</text>
        <text x="90" y="110" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0284c7">ax + b = 0</text>
      </g>

      <!-- Mũi tên 1 -> 2 -->
      <path d="M 218 110 L 244 110" stroke="#64748b" stroke-width="2.5" marker-end="url(#arrow)"/>

      <!-- Bước 2 -->
      <g transform="translate(250, 48)">
        <rect width="180" height="125" rx="10" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
        <text x="90" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#a16207">BƯỚC 2: GIẢI PHƯƠNG TRÌNH</text>
        <text x="12" y="44" font-size="10" fill="#334155">• Chuyển vế đổi dấu</text>
        <text x="12" y="62" font-size="10" fill="#334155">• Thu gọn các hạng tử</text>
        <text x="12" y="80" font-size="10" fill="#334155">• Tìm nghiệm x</text>
        <text x="90" y="110" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#a16207">x = -b / a</text>
      </g>

      <!-- Mũi tên 2 -> 3 -->
      <path d="M 438 110 L 464 110" stroke="#64748b" stroke-width="2.5" marker-end="url(#arrow)"/>

      <!-- Bước 3 -->
      <g transform="translate(470, 48)">
        <rect width="180" height="125" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
        <text x="90" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#15803d">BƯỚC 3: ĐỐI CHIẾU &amp; KẾT LUẬN</text>
        <text x="12" y="44" font-size="10" fill="#334155">• So sánh nghiệm với ĐKXĐ</text>
        <text x="12" y="62" font-size="10" fill="#334155">• Loại nghiệm không thỏa</text>
        <text x="12" y="80" font-size="10" fill="#334155">• Trả lời đúng câu hỏi bài toán</text>
        <text x="90" y="110" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#15803d">Ghi rõ đơn vị đo</text>
      </g>
    </svg>
  `,

  // Bài 28: Mặt phẳng tọa độ Oxy và tọa độ điểm
  'bai-28': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">HỆ TRỤC TỌA ĐỘ OXY &amp; BỐN GÓC PHẦN TƯ (I, II, III, IV)</text>
      
      <!-- Hệ trục tọa độ Oxy -->
      <g transform="translate(100, 115)">
        <!-- Lưới nền nhẹ -->
        <line x1="-80" y1="-70" x2="80" y2="-70" stroke="#e2e8f0" stroke-width="1"/>
        <line x1="-80" y1="70" x2="80" y2="70" stroke="#e2e8f0" stroke-width="1"/>
        <line x1="-70" y1="-80" x2="-70" y2="80" stroke="#e2e8f0" stroke-width="1"/>
        <line x1="70" y1="-80" x2="70" y2="80" stroke="#e2e8f0" stroke-width="1"/>

        <!-- Trục Ox và Oy -->
        <line x1="-90" y1="0" x2="90" y2="0" stroke="#0f172a" stroke-width="2"/>
        <polygon points="90,-3 98,0 90,3" fill="#0f172a"/>
        <text x="96" y="14" font-size="12" font-weight="bold" fill="#0f172a">x</text>

        <line x1="0" y1="90" x2="0" y2="-90" stroke="#0f172a" stroke-width="2"/>
        <polygon points="-3,-90 0,-98 3,-90" fill="#0f172a"/>
        <text x="10" y="-88" font-size="12" font-weight="bold" fill="#0f172a">y</text>

        <!-- Gốc O -->
        <circle cx="0" cy="0" r="3.5" fill="#0f172a"/>
        <text x="-12" y="14" font-size="11" font-weight="bold" fill="#0f172a">O</text>

        <!-- Điểm A(2, 3) tại (40, -60) -->
        <line x1="40" y1="0" x2="40" y2="-60" stroke="#2563eb" stroke-dasharray="3,2"/>
        <line x1="0" y1="-60" x2="40" y2="-60" stroke="#2563eb" stroke-dasharray="3,2"/>
        <circle cx="40" cy="-60" r="4" fill="#2563eb"/>
        <text x="46" y="-62" font-size="11" font-weight="bold" fill="#2563eb">A(2; 3)</text>
        <text x="40" y="14" font-size="9" fill="#2563eb">2</text>
        <text x="-12" y="-58" font-size="9" fill="#2563eb">3</text>

        <!-- Điểm B(-3, 2) tại (-60, -40) -->
        <circle cx="-60" cy="-40" r="4" fill="#059669"/>
        <text x="-80" y="-46" font-size="10.5" font-weight="bold" fill="#059669">B(-3; 2)</text>

        <!-- Nhãn 4 góc phần tư -->
        <text x="50" y="-20" font-size="11" font-weight="bold" fill="#94a3b8">I (+;+)</text>
        <text x="-65" y="-20" font-size="11" font-weight="bold" fill="#94a3b8">II (-;+)</text>
        <text x="-65" y="45" font-size="11" font-weight="bold" fill="#94a3b8">III (-;-)</text>
        <text x="50" y="45" font-size="11" font-weight="bold" fill="#94a3b8">IV (+;-)</text>
      </g>

      <!-- Bảng giải thích bên phải -->
      <g transform="translate(300, 45)">
        <rect width="345" height="155" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="16" y="24" font-size="12" font-weight="bold" fill="#0369a1">QUY TẮC XÁC ĐỊNH TỌA ĐỘ M(x₀; y₀):</text>
        <text x="24" y="46" font-size="11.5" fill="#334155">• <tspan font-weight="bold" fill="#2563eb">x₀ (Hoành độ):</tspan> Khoảng cách có dấu đến trục tung Oy.</text>
        <text x="24" y="68" font-size="11.5" fill="#2563eb">• <tspan font-weight="bold" fill="#dc2626">y₀ (Tung độ):</tspan> Khoảng cách có dấu đến trục hoành Ox.</text>
        
        <path d="M 16 82 L 329 82" stroke="#e2e8f0" stroke-width="1"/>
        <text x="16" y="102" font-size="11.5" font-weight="bold" fill="#059669">ĐIỂM NẰM TRÊN CÁC TRỤC:</text>
        <text x="24" y="122" font-size="11" fill="#334155">• Điểm thuộc trục hoành Ox có tung độ bằng 0: <tspan font-weight="bold">M(x₀; 0)</tspan></text>
        <text x="24" y="142" font-size="11" fill="#334155">• Điểm thuộc trục tung Oy có hoành độ bằng 0: <tspan font-weight="bold">N(0; y₀)</tspan></text>
      </g>
    </svg>
  `,

  // Bài 29: Đồ thị hàm số bậc nhất và hệ số góc
  'bai-29': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">HỆ SỐ GÓC a CỦA ĐƯỜNG THẲNG y = ax + b (a ≠ 0)</text>
      
      <!-- Đồ thị a > 0 -->
      <g transform="translate(40, 42)">
        <rect width="285" height="165" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="142" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#059669">KHI a &gt; 0: GÓC TẠO VỚI Ox LÀ GÓC NHỌN</text>
        
        <g transform="translate(142, 95)">
          <line x1="-90" y1="0" x2="90" y2="0" stroke="#64748b" stroke-width="1.5"/>
          <line x1="0" y1="55" x2="0" y2="-55" stroke="#64748b" stroke-width="1.5"/>
          <!-- Đường thẳng y = x + 20 dốc lên -->
          <line x1="-70" y1="45" x2="60" y2="-45" stroke="#059669" stroke-width="2.5"/>
          <!-- Cung góc alpha nhọn -->
          <path d="M 25 0 A 25 25 0 0 0 17 -16" fill="none" stroke="#dc2626" stroke-width="1.5"/>
          <text x="24" y="-8" font-size="10" font-weight="bold" fill="#dc2626">α &lt; 90°</text>
          <text x="75" y="14" font-size="9" fill="#64748b">x</text>
          <text x="8" y="-48" font-size="9" fill="#64748b">y</text>
        </g>
        <text x="142" y="152" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#059669">a càng lớn thì góc α càng lớn</text>
      </g>

      <!-- Đồ thị a < 0 -->
      <g transform="translate(355, 42)">
        <rect width="285" height="165" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="142" y="20" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#b91c1c">KHI a &lt; 0: GÓC TẠO VỚI Ox LÀ GÓC TÙ</text>
        
        <g transform="translate(142, 95)">
          <line x1="-90" y1="0" x2="90" y2="0" stroke="#64748b" stroke-width="1.5"/>
          <line x1="0" y1="55" x2="0" y2="-55" stroke="#64748b" stroke-width="1.5"/>
          <!-- Đường thẳng dốc xuống -->
          <line x1="-60" y1="-45" x2="70" y2="45" stroke="#dc2626" stroke-width="2.5"/>
          <!-- Cung góc beta tù -->
          <path d="M 30 0 A 30 30 0 0 0 -18 24" fill="none" stroke="#2563eb" stroke-width="1.5"/>
          <text x="20" y="20" font-size="10" font-weight="bold" fill="#2563eb">β &gt; 90°</text>
          <text x="75" y="14" font-size="9" fill="#64748b">x</text>
          <text x="8" y="-48" font-size="9" fill="#64748b">y</text>
        </g>
        <text x="142" y="152" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b91c1c">Hai đường // khi: a = a' và b ≠ b'</text>
      </g>
    </svg>
  `,

  // Bài 30-32: Xác suất & Không gian mẫu
  'bai-30': `
    <svg viewBox="0 0 680 220" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">MÔ HÌNH XÁC SUẤT: VÒNG QUAY MAY MẮN &amp; XÚC XẮC ĐỒNG CHẤT</text>
      
      <!-- Vòng quay 8 phần -->
      <g transform="translate(120, 115)">
        <circle cx="0" cy="0" r="55" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
        <!-- 8 nan quạt -->
        <path d="M 0 0 L 55 0" stroke="#cbd5e1"/>
        <path d="M 0 0 L -55 0" stroke="#cbd5e1"/>
        <path d="M 0 0 L 0 55" stroke="#cbd5e1"/>
        <path d="M 0 0 L 0 -55" stroke="#cbd5e1"/>
        <path d="M 0 0 L 39 39" stroke="#cbd5e1"/>
        <path d="M 0 0 L -39 -39" stroke="#cbd5e1"/>
        <path d="M 0 0 L -39 39" stroke="#cbd5e1"/>
        <path d="M 0 0 L 39 -39" stroke="#cbd5e1"/>
        
        <!-- Các số 1 đến 8 -->
        <text x="25" y="-15" font-size="10" font-weight="bold" fill="#2563eb">1</text>
        <text x="15" y="-32" font-size="10" font-weight="bold" fill="#dc2626">2</text>
        <text x="-15" y="-32" font-size="10" font-weight="bold" fill="#2563eb">3</text>
        <text x="-32" y="-15" font-size="10" font-weight="bold" fill="#dc2626">4</text>
        <text x="-32" y="20" font-size="10" font-weight="bold" fill="#2563eb">5</text>
        <text x="-15" y="38" font-size="10" font-weight="bold" fill="#dc2626">6</text>
        <text x="15" y="38" font-size="10" font-weight="bold" fill="#2563eb">7</text>
        <text x="25" y="20" font-size="10" font-weight="bold" fill="#dc2626">8</text>

        <!-- Mũi tên kim quay -->
        <polygon points="0,-65 -6,-50 6,-50" fill="#dc2626"/>
        <circle cx="0" cy="0" r="5" fill="#0f172a"/>
        <text x="0" y="75" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">n = 8 kết quả đồng khả năng</text>
      </g>

      <!-- Khung công thức xác suất cổ điển -->
      <g transform="translate(260, 42)">
        <rect width="385" height="155" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="16" y="24" font-size="12" font-weight="bold" fill="#0284c7">CÔNG THỨC XÁC SUẤT CỔ ĐIỂN CỦA BIẾN CỐ E:</text>
        <text x="40" y="55" font-size="16" font-weight="bold" fill="#0f172a" font-family="monospace">P(E) = m / n</text>
        <text x="24" y="80" font-size="11" fill="#334155">• <tspan font-weight="bold" fill="#0284c7">m:</tspan> Số kết quả thuận lợi cho biến cố E.</text>
        <text x="24" y="98" font-size="11" fill="#334155">• <tspan font-weight="bold" fill="#0284c7">n:</tspan> Tổng số kết quả có thể xảy ra (đồng khả năng).</text>
        
        <path d="M 16 110 L 369 110" stroke="#e2e8f0" stroke-width="1"/>
        <text x="16" y="128" font-size="11" font-weight="bold" fill="#15803d">Ví dụ Vòng quay: Xác suất quay vào số chẵn (2, 4, 6, 8):</text>
        <text x="30" y="146" font-size="12" font-weight="bold" fill="#15803d" font-family="monospace">m = 4 ⇒ P = 4 / 8 = 1/2 = 50%</text>
      </g>
    </svg>
  `,

  // Bài 33: Hai tam giác đồng dạng
  'bai-33': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">HAI TAM GIÁC ĐỒNG DẠNG: ΔA'B'C' ∽ ΔABC (TỈ SỐ k)</text>
      
      <!-- Tam giác nhỏ A'B'C' -->
      <g transform="translate(60, 55)">
        <polygon points="50,10 10,85 90,85" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
        <circle cx="50" cy="10" r="3" fill="#0369a1"/>
        <text x="46" y="-1" font-size="11" font-weight="bold" fill="#0369a1">A'</text>
        <circle cx="10" cy="85" r="3" fill="#0369a1"/>
        <text x="-4" y="94" font-size="11" font-weight="bold" fill="#0369a1">B'</text>
        <circle cx="90" cy="85" r="3" fill="#0369a1"/>
        <text x="94" y="94" font-size="11" font-weight="bold" fill="#0369a1">C'</text>
        <text x="50" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">ΔA'B'C' (Nhỏ)</text>
      </g>

      <!-- Dấu đồng dạng ở giữa -->
      <text x="185" y="115" text-anchor="middle" font-size="28" font-weight="bold" fill="#dc2626">∽</text>
      <text x="185" y="135" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">tỉ số k = 1/2</text>

      <!-- Tam giác lớn ABC -->
      <g transform="translate(230, 40)">
        <polygon points="100,10 20,135 180,135" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
        <circle cx="100" cy="10" r="4" fill="#0369a1"/>
        <text x="96" y="-2" font-size="12" font-weight="bold" fill="#0369a1">A</text>
        <circle cx="20" cy="135" r="4" fill="#0369a1"/>
        <text x="4" y="146" font-size="12" font-weight="bold" fill="#0369a1">B</text>
        <circle cx="180" cy="135" r="4" fill="#0369a1"/>
        <text x="186" y="146" font-size="12" font-weight="bold" fill="#0369a1">C</text>
        <text x="100" y="160" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">ΔABC (Lớn)</text>
      </g>

      <!-- Bảng định nghĩa & tính chất bên phải -->
      <g transform="translate(435, 42)">
        <rect width="215" height="165" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="14" y="24" font-size="11.5" font-weight="bold" fill="#0369a1">1. CÁC GÓC TƯƠNG ỨNG =</text>
        <text x="24" y="46" font-size="11" font-family="monospace" fill="#334155">Â' = Â</text>
        <text x="24" y="64" font-size="11" font-family="monospace" fill="#334155">B̂' = B̂</text>
        <text x="24" y="82" font-size="11" font-family="monospace" fill="#334155">Ĉ' = Ĉ</text>
        
        <path d="M 14 94 L 201 94" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="112" font-size="11.5" font-weight="bold" fill="#dc2626">2. CẠNH TƯƠNG ỨNG TỈ LỆ</text>
        <text x="20" y="134" font-size="11" font-weight="bold" font-family="monospace" fill="#dc2626">A'B'/AB = B'C'/BC</text>
        <text x="20" y="152" font-size="11" font-weight="bold" font-family="monospace" fill="#dc2626">= A'C'/AC = k</text>
      </g>
    </svg>
  `,

  // Bài 34: 3 trường hợp đồng dạng của hai tam giác
  'bai-34': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">BA TRƯỜNG HỢP ĐỒNG DẠNG CỦA HAI TAM GIÁC THƯỜNG</text>
      
      <!-- TH1: C-C-C -->
      <g transform="translate(30, 42)">
        <rect width="195" height="170" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="97" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">1. CẠNH - CẠNH - CẠNH (c.c.c)</text>
        
        <g transform="translate(35, 40)">
          <!-- Tam giác nhỏ -->
          <polygon points="30,5 5,45 55,45" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
          <!-- Tam giác lớn -->
          <polygon points="95,5 55,65 135,65" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
        </g>
        <text x="97" y="125" text-anchor="middle" font-size="10" fill="#334155">Ba cặp cạnh tương ứng</text>
        <text x="97" y="140" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0284c7">tỉ lệ với nhau:</text>
        <text x="97" y="158" text-anchor="middle" font-size="9" font-family="monospace" fill="#0f172a">A'B'/AB = B'C'/BC = A'C'/AC</text>
      </g>

      <!-- TH2: C-G-C -->
      <g transform="translate(242, 42)">
        <rect width="195" height="170" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="97" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">2. CẠNH - GÓC - CẠNH (c.g.c)</text>
        
        <g transform="translate(35, 40)">
          <polygon points="30,5 5,45 55,45" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
          <path d="M 23 15 A 8 8 0 0 0 35 15" fill="none" stroke="#dc2626" stroke-width="1.5"/>

          <polygon points="95,5 55,65 135,65" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
          <path d="M 85 20 A 12 12 0 0 0 105 20" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        </g>
        <text x="97" y="125" text-anchor="middle" font-size="10" fill="#334155">Hai cặp cạnh tỉ lệ VÀ</text>
        <text x="97" y="140" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#15803d">hai góc xen giữa bằng nhau:</text>
        <text x="97" y="158" text-anchor="middle" font-size="9" font-family="monospace" fill="#0f172a">A'B'/AB = A'C'/AC và Â' = Â</text>
      </g>

      <!-- TH3: G-G -->
      <g transform="translate(455, 42)">
        <rect width="195" height="170" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="97" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">3. GÓC - GÓC (g.g)</text>
        
        <g transform="translate(35, 40)">
          <polygon points="30,5 5,45 55,45" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
          <path d="M 12 40 A 8 8 0 0 1 20 45" fill="none" stroke="#2563eb" stroke-width="1.5"/>
          <path d="M 45 45 A 8 8 0 0 1 48 38" fill="none" stroke="#16a34a" stroke-width="1.5"/>

          <polygon points="95,5 55,65 135,65" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
          <path d="M 67 58 A 12 12 0 0 1 78 65" fill="none" stroke="#2563eb" stroke-width="1.5"/>
          <path d="M 120 65 A 12 12 0 0 1 125 54" fill="none" stroke="#16a34a" stroke-width="1.5"/>
        </g>
        <text x="97" y="125" text-anchor="middle" font-size="10" fill="#334155">Hai góc của tam giác này</text>
        <text x="97" y="140" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b91c1c">lần lượt bằng 2 góc kia:</text>
        <text x="97" y="158" text-anchor="middle" font-size="9.5" font-family="monospace" fill="#0f172a">Â' = Â và B̂' = B̂</text>
      </g>
    </svg>
  `,

  // Bài 35: Định lí Pythagore và mô hình hình vuông cổ điển
  'bai-35': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">ĐỊNH LÍ PYTHAGORE: a² + b² = c² (MÔ HÌNH HÌNH VUÔNG CỔ ĐIỂN)</text>
      
      <!-- Hình vuông cổ điển 3-4-5 -->
      <g transform="translate(100, 48)">
        <!-- Tam giác vuông ABC: vuông tại A(40, 80), B(40, 40), C(90, 80) -> c=40, b=50, a=sqrt(40^2+50^2) -->
        <!-- Vẽ chuẩn 3-4-5 với đơn vị 12px: cạnh 36, 48, 60 -->
        <!-- Tam giác vuông: A(48, 48), B(48, 0), C(96, 48) -> AB=48, AC=48... Để vẽ đẹp ta dùng: -->
        <!-- Hình vuông 1: cạnh b=36 (trái) -->
        <rect x="12" y="48" width="36" height="36" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <text x="30" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">b²</text>

        <!-- Hình vuông 2: cạnh a=48 (dưới) -->
        <rect x="48" y="84" width="48" height="48" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
        <text x="72" y="112" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">a²</text>

        <!-- Tam giác vuông ở giữa: (48,84), (48,48), (96,84) -> góc vuông tại (48,84) -->
        <polygon points="48,84 48,48 96,84" fill="#f87171" stroke="#dc2626" stroke-width="2"/>
        <rect x="48" y="76" width="8" height="8" fill="none" stroke="#0f172a" stroke-width="1"/>

        <!-- Hình vuông 3: cạnh huyền c=60 dựng trên cạnh huyền -->
        <!-- Nghiêng góc: tạo đa giác 4 điểm -->
        <polygon points="48,48 96,84 132,36 84,0" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
        <text x="90" y="46" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">c²</text>
      </g>

      <!-- Hộp chứng minh bên phải -->
      <g transform="translate(280, 45)">
        <rect width="365" height="155" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="16" y="24" font-size="12.5" font-weight="bold" fill="#dc2626">ĐỊNH LÍ THUẬN TRONG TAM GIÁC VUÔNG:</text>
        <text x="24" y="44" font-size="11" fill="#334155">Bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông:</text>
        <text x="40" y="70" font-size="16" font-weight="bold" fill="#dc2626" font-family="monospace">BC² = AB² + AC²  ⇔  c² = a² + b²</text>
        
        <path d="M 16 82 L 349 82" stroke="#e2e8f0" stroke-width="1"/>
        <text x="16" y="102" font-size="12" font-weight="bold" fill="#059669">ĐỊNH LÍ PYTHAGORE ĐẢO (DÙNG ĐỂ CHỨNG MINH GÓC VUÔNG):</text>
        <text x="24" y="122" font-size="11" fill="#334155">Nếu một tam giác có bình phương một cạnh bằng tổng bình phương</text>
        <text x="24" y="140" font-size="11" fill="#334155">hai cạnh kia thì tam giác đó là <tspan font-weight="bold" fill="#059669">tam giác vuông</tspan>.</text>
      </g>
    </svg>
  `,

  // Bài 36: Các trường hợp đồng dạng của hai tam giác vuông
  'bai-36': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">CÁC TRƯỜNG HỢP ĐỒNG DẠNG ĐẶC BIỆT CỦA HAI TAM GIÁC VUÔNG</text>
      
      <!-- TH1: Góc nhọn -->
      <g transform="translate(30, 42)">
        <rect width="195" height="170" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="97" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0284c7">1. CÓ MỘT GÓC NHỌN = NHAU</text>
        <g transform="translate(30, 40)">
          <polygon points="10,50 10,15 45,50" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
          <rect x="10" y="42" width="8" height="8" fill="none" stroke="#0284c7"/>
          <path d="M 38 50 A 7 7 0 0 0 41 45" fill="none" stroke="#dc2626" stroke-width="1.5"/>

          <polygon points="65,65 65,10 125,65" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
          <rect x="65" y="55" width="10" height="10" fill="none" stroke="#0284c7"/>
          <path d="M 115 65 A 10 10 0 0 0 119 59" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        </g>
        <text x="97" y="130" text-anchor="middle" font-size="10" fill="#334155">Vì đã có sẵn 1 góc vuông,</text>
        <text x="97" y="145" text-anchor="middle" font-size="10" fill="#334155">chỉ cần thêm 1 góc nhọn:</text>
        <text x="97" y="160" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">B̂' = B̂ ⇒ ΔA'B'C' ∽ ΔABC</text>
      </g>

      <!-- TH2: Hai cạnh góc vuông -->
      <g transform="translate(242, 42)">
        <rect width="195" height="170" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="97" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#15803d">2. HAI CẠNH GÓC VUÔNG TỈ LỆ</text>
        <g transform="translate(30, 40)">
          <polygon points="10,50 10,15 45,50" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
          <polygon points="65,65 65,10 125,65" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
        </g>
        <text x="97" y="130" text-anchor="middle" font-size="10" fill="#334155">Tỉ số 2 cạnh góc vuông</text>
        <text x="97" y="145" text-anchor="middle" font-size="10" fill="#334155">của 2 tam giác bằng nhau:</text>
        <text x="97" y="160" text-anchor="middle" font-size="10" font-weight="bold" font-family="monospace" fill="#15803d">A'B'/AB = A'C'/AC</text>
      </g>

      <!-- TH3: Cạnh huyền & cạnh góc vuông -->
      <g transform="translate(455, 42)">
        <rect width="195" height="170" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="97" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">3. CẠNH HUYỀN - CGV</text>
        <g transform="translate(30, 40)">
          <polygon points="10,50 10,15 45,50" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
          <polygon points="65,65 65,10 125,65" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
        </g>
        <text x="97" y="130" text-anchor="middle" font-size="10" fill="#334155">Cạnh huyền và một cạnh</text>
        <text x="97" y="145" text-anchor="middle" font-size="10" fill="#334155">góc vuông tỉ lệ với nhau:</text>
        <text x="97" y="160" text-anchor="middle" font-size="10" font-weight="bold" font-family="monospace" fill="#dc2626">B'C'/BC = A'B'/AB</text>
      </g>
    </svg>
  `,

  // Bài 37: Hình đồng dạng phối cảnh
  'bai-37': `
    <svg viewBox="0 0 680 220" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="220" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">HÌNH ĐỒNG DẠNG PHỐI CẢNH (TÂM VỊ TỰ O, TỈ SỐ k)</text>
      
      <!-- Phép vị tự phối cảnh từ tâm O -->
      <g transform="translate(60, 45)">
        <rect width="250" height="150" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        
        <!-- Tâm O -->
        <circle cx="30" cy="75" r="4" fill="#dc2626"/>
        <text x="25" y="93" font-size="11" font-weight="bold" fill="#dc2626">O</text>

        <!-- Các tia từ O -->
        <line x1="30" y1="75" x2="220" y2="25" stroke="#94a3b8" stroke-dasharray="3,2"/>
        <line x1="30" y1="75" x2="220" y2="75" stroke="#94a3b8" stroke-dasharray="3,2"/>
        <line x1="30" y1="75" x2="220" y2="125" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>

        <!-- Hình nhỏ A'B'C' tại khoảng cách 1 -->
        <polygon points="90,55 90,95 115,75" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="95" y="112" font-size="9" font-weight="bold" fill="#2563eb">Hình F'</text>

        <!-- Hình lớn ABC tại khoảng cách 2 (phóng to k=2) -->
        <polygon points="170,35 170,115 220,75" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
        <text x="185" y="132" font-size="9" font-weight="bold" fill="#dc2626">Hình F (Gấp 2 lần)</text>
      </g>

      <!-- Giải thích bên phải -->
      <g transform="translate(330, 45)">
        <rect width="310" height="150" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="16" y="24" font-size="12" font-weight="bold" fill="#0369a1">KHÁI NIỆM HÌNH ĐỒNG DẠNG:</text>
        <text x="24" y="46" font-size="11" fill="#334155">• Có cùng hình dạng nhưng có thể khác kích thước.</text>
        <text x="24" y="66" font-size="11" fill="#334155">• Là kết quả của phép phóng to hoặc thu nhỏ.</text>
        
        <path d="M 16 80 L 294 80" stroke="#e2e8f0" stroke-width="1"/>
        <text x="16" y="100" font-size="12" font-weight="bold" fill="#dc2626">ĐẶC ĐIỂM ĐỒNG DẠNG PHỐI CẢNH:</text>
        <text x="24" y="120" font-size="11" fill="#334155">Đoạn thẳng nối các điểm tương ứng cùng quy đồng quy</text>
        <text x="24" y="138" font-size="11" fill="#334155">về một điểm <tspan font-weight="bold" fill="#dc2626">O</tspan> gọi là <tspan font-weight="bold" fill="#dc2626">tâm phối cảnh (tâm vị tự)</tspan>.</text>
      </g>
    </svg>
  `,

  // Bài 38: Hình chóp tam giác đều
  'bai-38': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">HÌNH CHÓP TAM GIÁC ĐỀU S.ABC (ĐÁY LÀ TAM GIÁC ĐỀU)</text>
      
      <!-- Hình học không gian 3D -->
      <g transform="translate(80, 35)">
        <!-- Đỉnh S(90, 15), Đáy ABC: A(20, 130), B(90, 160), C(160, 125) -->
        <!-- Đáy: AB liền, BC liền, AC đứt nét (khuất phía sau) -->
        <line x1="20" y1="130" x2="90" y2="160" stroke="#0284c7" stroke-width="2"/>
        <line x1="90" y1="160" x2="160" y2="125" stroke="#0284c7" stroke-width="2"/>
        <line x1="20" y1="130" x2="160" y2="125" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,3"/>

        <!-- Cạnh bên: SA liền, SB liền, SC liền -->
        <line x1="90" y1="15" x2="20" y2="130" stroke="#0284c7" stroke-width="2.5"/>
        <line x1="90" y1="15" x2="90" y2="160" stroke="#0284c7" stroke-width="2.5"/>
        <line x1="90" y1="15" x2="160" y2="125" stroke="#0284c7" stroke-width="2.5"/>

        <!-- Chiều cao SO (đứt nét): O là trọng tâm đáy (90, 138) -->
        <line x1="90" y1="15" x2="90" y2="138" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,2"/>
        <circle cx="90" cy="138" r="3" fill="#dc2626"/>
        <text x="96" y="142" font-size="10" font-weight="bold" fill="#dc2626">O (h)</text>

        <!-- Trung đoạn SH trên mặt bên SBC: H là trung điểm BC (125, 142.5) -->
        <line x1="90" y1="15" x2="125" y2="142.5" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,2"/>
        <circle cx="125" cy="142.5" r="3" fill="#16a34a"/>
        <text x="132" y="152" font-size="10" font-weight="bold" fill="#16a34a">H (d)</text>

        <!-- Đỉnh -->
        <circle cx="90" cy="15" r="4.5" fill="#0369a1"/>
        <text x="86" y="5" font-size="12" font-weight="bold" fill="#0369a1">S</text>
        <circle cx="20" cy="130" r="3.5" fill="#0369a1"/>
        <text x="6" y="135" font-size="11" font-weight="bold" fill="#0369a1">A</text>
        <circle cx="90" cy="160" r="3.5" fill="#0369a1"/>
        <text x="86" y="176" font-size="11" font-weight="bold" fill="#0369a1">B</text>
        <circle cx="160" cy="125" r="3.5" fill="#0369a1"/>
        <text x="166" y="130" font-size="11" font-weight="bold" fill="#0369a1">C</text>
      </g>

      <!-- Công thức bên phải -->
      <g transform="translate(300, 42)">
        <rect width="345" height="162" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="16" y="24" font-size="12" font-weight="bold" fill="#0369a1">CÁC THÀNH PHẦN HÌNH HỌC:</text>
        <text x="24" y="44" font-size="11" fill="#334155">• Đáy ABC là <tspan font-weight="bold" fill="#0284c7">tam giác đều</tspan>.</text>
        <text x="24" y="62" font-size="11" fill="#334155">• 3 mặt bên SAB, SBC, SCA là <tspan font-weight="bold" fill="#0284c7">các tam giác cân bằng nhau</tspan>.</text>
        <text x="24" y="80" font-size="11" fill="#334155">• <tspan font-weight="bold" fill="#dc2626">SO = h:</tspan> Chiều cao hình chóp (vuông góc tâm đáy).</text>
        <text x="24" y="98" font-size="11" fill="#334155">• <tspan font-weight="bold" fill="#16a34a">SH = d:</tspan> Trung đoạn (chiều cao của mặt bên xuất phát từ S).</text>
        
        <path d="M 16 108 L 329 108" stroke="#e2e8f0" stroke-width="1"/>
        <text x="16" y="126" font-size="11" font-weight="bold" fill="#ea580c">CÔNG THỨC TÍNH TOÁN:</text>
        <text x="24" y="142" font-size="11.5" font-weight="bold" font-family="monospace" fill="#ea580c">S_xq = p · d (p: nửa chu vi đáy, d: trung đoạn)</text>
        <text x="24" y="156" font-size="11.5" font-weight="bold" font-family="monospace" fill="#ea580c">V = 1/3 · S_đáy · h (h: chiều cao SO)</text>
      </g>
    </svg>
  `,

  // Bài 39: Hình chóp tứ giác đều
  'bai-39': `
    <svg viewBox="0 0 680 230" class="w-full h-auto max-h-68 select-none" xmlns="http://www.w3.org/2000/svg">
      <rect width="680" height="230" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="340" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">HÌNH CHÓP TỨ GIÁC ĐỀU S.ABCD (ĐÁY LÀ HÌNH VUÔNG)</text>
      
      <!-- Hình học không gian 3D -->
      <g transform="translate(80, 35)">
        <!-- Đỉnh S(95, 15), Đáy ABCD: A(50, 115), B(15, 150), C(145, 150), D(180, 115) -->
        <!-- Đáy: AB liền, BC liền, CD liền, DA đứt nét -->
        <line x1="15" y1="150" x2="145" y2="150" stroke="#059669" stroke-width="2"/>
        <line x1="145" y1="150" x2="180" y2="115" stroke="#059669" stroke-width="2"/>
        <line x1="15" y1="150" x2="50" y2="115" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="50" y1="115" x2="180" y2="115" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/>

        <!-- Cạnh bên: SA đứt nét, SB liền, SC liền, SD liền -->
        <line x1="95" y1="15" x2="50" y2="115" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="95" y1="15" x2="15" y2="150" stroke="#059669" stroke-width="2.5"/>
        <line x1="95" y1="15" x2="145" y2="150" stroke="#059669" stroke-width="2.5"/>
        <line x1="95" y1="15" x2="180" y2="115" stroke="#059669" stroke-width="2.5"/>

        <!-- Hai đường chéo đáy AC, BD cắt nhau tại tâm O (97.5, 132.5) -->
        <line x1="50" y1="115" x2="145" y2="150" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
        <line x1="15" y1="150" x2="180" y2="115" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>

        <!-- Chiều cao SO đứt nét -->
        <line x1="95" y1="15" x2="97.5" y2="132.5" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,2"/>
        <circle cx="97.5" cy="132.5" r="3" fill="#dc2626"/>
        <text x="104" y="136" font-size="10" font-weight="bold" fill="#dc2626">O (h)</text>

        <!-- Trung đoạn SI trên mặt bên SCD: I là trung điểm CD (162.5, 132.5) -->
        <line x1="95" y1="15" x2="162.5" y2="132.5" stroke="#2563eb" stroke-width="1.5"/>
        <circle cx="162.5" cy="132.5" r="3" fill="#2563eb"/>
        <text x="170" y="142" font-size="10" font-weight="bold" fill="#2563eb">I (d)</text>

        <!-- Đỉnh -->
        <circle cx="95" cy="15" r="4.5" fill="#047857"/>
        <text x="91" y="5" font-size="12" font-weight="bold" fill="#047857">S</text>
        <circle cx="50" cy="115" r="3" fill="#047857"/>
        <text x="38" y="112" font-size="11" font-weight="bold" fill="#047857">A</text>
        <circle cx="15" cy="150" r="3.5" fill="#047857"/>
        <text x="2" y="156" font-size="11" font-weight="bold" fill="#047857">B</text>
        <circle cx="145" cy="150" r="3.5" fill="#047857"/>
        <text x="146" y="165" font-size="11" font-weight="bold" fill="#047857">C</text>
        <circle cx="180" cy="115" r="3.5" fill="#047857"/>
        <text x="186" y="118" font-size="11" font-weight="bold" fill="#047857">D</text>
      </g>

      <!-- Công thức bên phải -->
      <g transform="translate(300, 42)">
        <rect width="345" height="162" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="16" y="24" font-size="12" font-weight="bold" fill="#047857">CÁC YẾU TỐ HÌNH HỌC HÌNH CHÓP TỨ GIÁC ĐỀU:</text>
        <text x="24" y="44" font-size="11" fill="#334155">• Đáy ABCD là <tspan font-weight="bold" fill="#047857">hình vuông</tspan> cạnh a ⇒ S_đáy = a².</text>
        <text x="24" y="62" font-size="11" fill="#334155">• 4 mặt bên là <tspan font-weight="bold" fill="#047857">các tam giác cân bằng nhau</tspan>.</text>
        <text x="24" y="80" font-size="11" fill="#334155">• <tspan font-weight="bold" fill="#dc2626">SO = h:</tspan> Chiều cao (O là giao điểm 2 đường chéo đáy).</text>
        <text x="24" y="98" font-size="11" fill="#334155">• <tspan font-weight="bold" fill="#2563eb">SI = d:</tspan> Trung đoạn (chiều cao mặt bên kẻ từ S).</text>
        
        <path d="M 16 108 L 329 108" stroke="#e2e8f0" stroke-width="1"/>
        <text x="16" y="126" font-size="11" font-weight="bold" fill="#b45309">CÔNG THỨC TOÁN HỌC:</text>
        <text x="24" y="142" font-size="11.5" font-weight="bold" font-family="monospace" fill="#b45309">S_xq = 4 · (1/2 · a · d) = 2 · a · d = p · d</text>
        <text x="24" y="156" font-size="11.5" font-weight="bold" font-family="monospace" fill="#b45309">V = 1/3 · S_đáy · h = 1/3 · a² · h</text>
      </g>
    </svg>
  `
};
