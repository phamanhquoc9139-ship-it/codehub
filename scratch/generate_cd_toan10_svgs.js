const fs = require('fs');
const path = require('path');

const diagramSVGs = {
  "1": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 p-4 border border-indigo-500/30 shadow-lg">
    <defs>
      <linearGradient id="gGauss" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#3b82f6"/>
        <stop offset="100%" stop-color="#6366f1"/>
      </linearGradient>
      <filter id="glow1" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>
    <!-- Title -->
    <text x="450" y="32" text-anchor="middle" fill="#e0e7ff" font-size="16" font-weight="bold" letter-spacing="1">QUY TRÌNH BIẾN ĐỔI KHỬ GAUSS & HỆ TAM GIÁC BẬC THANG</text>
    
    <!-- Step 1 Box: Hệ gốc -->
    <rect x="40" y="70" width="220" height="180" rx="16" fill="#1e1b4b" stroke="#6366f1" stroke-width="2"/>
    <text x="150" y="100" text-anchor="middle" fill="#a5b4fc" font-size="14" font-weight="bold">HỆ BAN ĐẦU</text>
    <text x="60" y="140" fill="#ffffff" font-size="13" font-family="monospace">a₁x + b₁y + c₁z = d₁</text>
    <text x="60" y="175" fill="#cbd5e1" font-size="13" font-family="monospace">a₂x + b₂y + c₂z = d₂</text>
    <text x="60" y="210" fill="#cbd5e1" font-size="13" font-family="monospace">a₃x + b₃y + c₃z = d₃</text>
    <rect x="40" y="260" width="220" height="36" rx="8" fill="#312e81"/>
    <text x="150" y="283" text-anchor="middle" fill="#c7d2fe" font-size="11">Khử ẩn x ở PT 2 và 3</text>

    <!-- Arrow 1 -->
    <path d="M 270 160 L 320 160" stroke="#f59e0b" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
    <polygon points="325,160 315,154 315,166" fill="#f59e0b"/>

    <!-- Step 2 Box: Bậc thang cấp 1 -->
    <rect x="340" y="70" width="220" height="180" rx="16" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
    <text x="450" y="100" text-anchor="middle" fill="#c4b5fd" font-size="14" font-weight="bold">KHỬ ẨN TUẦN TỰ</text>
    <text x="360" y="140" fill="#ffffff" font-size="13" font-family="monospace">a₁x + b₁y + c₁z = d₁</text>
    <text x="360" y="175" fill="#38bdf8" font-size="13" font-family="monospace">      b'₂y + c'₂z = d'₂</text>
    <text x="360" y="210" fill="#cbd5e1" font-size="13" font-family="monospace">      b'₃y + c'₃z = d'₃</text>
    <rect x="340" y="260" width="220" height="36" rx="8" fill="#4c1d95"/>
    <text x="450" y="283" text-anchor="middle" fill="#ddd6fe" font-size="11">Khử tiếp ẩn y ở PT 3</text>

    <!-- Arrow 2 -->
    <path d="M 570 160 L 620 160" stroke="#f59e0b" stroke-width="3" fill="none"/>
    <polygon points="625,160 615,154 615,166" fill="#f59e0b"/>

    <!-- Step 3 Box: Hệ tam giác chuẩn -->
    <rect x="640" y="70" width="220" height="180" rx="16" fill="#1e1b4b" stroke="#10b981" stroke-width="2" filter="url(#glow1)"/>
    <text x="750" y="100" text-anchor="middle" fill="#6ee7b7" font-size="14" font-weight="bold">HỆ TAM GIÁC</text>
    <text x="660" y="140" fill="#ffffff" font-size="13" font-family="monospace">a₁x + b₁y + c₁z = d₁</text>
    <text x="660" y="175" fill="#38bdf8" font-size="13" font-family="monospace">      b'₂y + c'₂z = d'₂</text>
    <text x="660" y="210" fill="#34d399" font-size="13" font-family="monospace">            c''₃z = d''₃</text>
    <rect x="640" y="260" width="220" height="36" rx="8" fill="#064e3b"/>
    <text x="750" y="283" text-anchor="middle" fill="#a7f3d0" font-size="11">Thế ngược: z → y → x</text>

    <!-- Bottom explanation footer -->
    <rect x="180" y="315" width="540" height="30" rx="8" fill="#1e293b"/>
    <text x="450" y="335" text-anchor="middle" fill="#94a3b8" font-size="12">Biện luận số nghiệm: Dòng 0=k (vô nghiệm) • c''₃≠0 (nghiệm duy nhất) • 0=0 (vô số nghiệm)</text>
  </svg>`,

  "2": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 p-4 border border-indigo-500/30 shadow-lg">
    <text x="450" y="32" text-anchor="middle" fill="#e0e7ff" font-size="16" font-weight="bold" letter-spacing="1">MÔ HÌNH HÓA ỨNG DỤNG: ĐỊNH LUẬT MẠNG ĐIỆN KIRCHHOFF</text>
    
    <!-- Circuit Diagram Box Left -->
    <g transform="translate(60, 60)">
      <rect x="0" y="0" width="360" height="230" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      <text x="180" y="28" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">SƠ ĐỒ MẠCH ĐIỆN HAI MẮT LƯỚI</text>
      <!-- Circuit lines -->
      <path d="M 40 70 L 320 70 L 320 190 L 40 190 Z" fill="none" stroke="#94a3b8" stroke-width="3"/>
      <path d="M 180 70 L 180 190" fill="none" stroke="#94a3b8" stroke-width="3"/>
      <!-- Node A & B -->
      <circle cx="180" cy="70" r="6" fill="#f59e0b"/>
      <text x="180" y="58" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">Nút A</text>
      <circle cx="180" cy="190" r="6" fill="#f59e0b"/>
      <text x="180" y="210" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">Nút B</text>
      <!-- Resistors -->
      <rect x="90" y="62" width="40" height="16" fill="#64748b" rx="3"/>
      <text x="110" y="55" text-anchor="middle" fill="#cbd5e1" font-size="11">R₁</text>
      <rect x="172" y="115" width="16" height="40" fill="#64748b" rx="3"/>
      <text x="205" y="140" fill="#cbd5e1" font-size="11">R₃</text>
      <rect x="230" y="62" width="40" height="16" fill="#64748b" rx="3"/>
      <text x="250" y="55" text-anchor="middle" fill="#cbd5e1" font-size="11">R₂</text>
      <!-- Currents -->
      <text x="75" y="90" fill="#a7f3d0" font-size="12" font-weight="bold">I₁ →</text>
      <text x="275" y="90" fill="#a7f3d0" font-size="12" font-weight="bold">← I₂</text>
      <text x="160" y="140" fill="#fcd34d" font-size="12" font-weight="bold">↓ I₃</text>
    </g>

    <!-- Mathematical Model Box Right -->
    <g transform="translate(460, 60)">
      <rect x="0" y="0" width="380" height="230" rx="14" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
      <text x="190" y="28" text-anchor="middle" fill="#c084fc" font-size="13" font-weight="bold">THIẾT LẬP HỆ BA PHƯƠNG TRÌNH</text>
      
      <rect x="20" y="45" width="340" height="45" rx="8" fill="#1e1b4b"/>
      <text x="30" y="65" fill="#f59e0b" font-size="11" font-weight="bold">Định luật Kirchhoff 1 (tại Nút A):</text>
      <text x="30" y="82" fill="#ffffff" font-size="12" font-family="monospace">I₁ + I₂ - I₃ = 0  (Vào = Ra)</text>

      <rect x="20" y="100" width="340" height="50" rx="8" fill="#1e1b4b"/>
      <text x="30" y="120" fill="#38bdf8" font-size="11" font-weight="bold">Định luật Kirchhoff 2 (Vòng kín 1):</text>
      <text x="30" y="140" fill="#ffffff" font-size="12" font-family="monospace">R₁·I₁ + R₃·I₃ = E₁</text>

      <rect x="20" y="160" width="340" height="50" rx="8" fill="#1e1b4b"/>
      <text x="30" y="180" fill="#34d399" font-size="11" font-weight="bold">Định luật Kirchhoff 2 (Vòng kín 2):</text>
      <text x="30" y="200" fill="#ffffff" font-size="12" font-family="monospace">R₂·I₂ + R₃·I₃ = E₂</text>
    </g>

    <text x="450" y="330" text-anchor="middle" fill="#94a3b8" font-size="12">Ứng dụng đa ngành: Mạch điện • Pha trộn nồng độ hóa học • Cân bằng thị trường kinh tế</text>
  </svg>`,

  "3": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 p-4 border border-indigo-500/30 shadow-lg">
    <text x="450" y="32" text-anchor="middle" fill="#e0e7ff" font-size="16" font-weight="bold" letter-spacing="1">MÔ HÌNH DÂY CHUYỀN DOMINO CỦA PHƯƠNG PHÁP QUY NẠP TOÁN HỌC</text>
    
    <!-- Base Case: Domino 1 -->
    <g transform="translate(100, 70)">
      <rect x="0" y="0" width="180" height="210" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
      <text x="90" y="30" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">BƯỚC 1: CƠ SỞ</text>
      <!-- Falling Domino 1 -->
      <g transform="translate(70, 60) rotate(35)">
        <rect x="0" y="0" width="22" height="70" rx="4" fill="#10b981"/>
        <circle cx="11" cy="20" r="3" fill="#ffffff"/>
        <circle cx="11" cy="50" r="3" fill="#ffffff"/>
      </g>
      <text x="90" y="155" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">P(1) ĐÚNG</text>
      <text x="90" y="180" text-anchor="middle" fill="#94a3b8" font-size="11">Quân cờ đầu tiên ngã</text>
    </g>

    <!-- Transition Arrow -->
    <g transform="translate(305, 160)">
      <path d="M 0 0 L 50 0" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4,4"/>
      <polygon points="55,0 45,-6 45,6" fill="#f59e0b"/>
      <text x="25" y="-12" text-anchor="middle" fill="#fcd34d" font-size="11">Truyền lực</text>
    </g>

    <!-- Inductive Step: Domino k to k+1 -->
    <g transform="translate(380, 70)">
      <rect x="0" y="0" width="220" height="210" rx="14" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
      <text x="110" y="30" text-anchor="middle" fill="#a5b4fc" font-size="13" font-weight="bold">BƯỚC 2: QUY NẠP</text>
      <!-- Domino k -->
      <g transform="translate(60, 65) rotate(25)">
        <rect x="0" y="0" width="20" height="65" rx="4" fill="#6366f1"/>
        <text x="10" y="40" text-anchor="middle" fill="#ffffff" font-size="10" transform="rotate(-25 10 40)">k</text>
      </g>
      <!-- Domino k+1 -->
      <g transform="translate(130, 75) rotate(15)">
        <rect x="0" y="0" width="20" height="65" rx="4" fill="#818cf8"/>
        <text x="10" y="40" text-anchor="middle" fill="#ffffff" font-size="10" transform="rotate(-15 10 40)">k+1</text>
      </g>
      <text x="110" y="155" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">P(k) đúng ⇒ P(k+1) đúng</text>
      <text x="110" y="180" text-anchor="middle" fill="#94a3b8" font-size="11">Quân k ngã kéo k+1 ngã</text>
    </g>

    <!-- Conclusion: All Dominoes Fall -->
    <g transform="translate(630, 70)">
      <rect x="0" y="0" width="180" height="210" rx="14" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
      <text x="90" y="30" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="bold">KẾT LUẬN TOÀN CỤC</text>
      <!-- Series of fallen dominoes -->
      <path d="M 30 110 L 150 110" stroke="#f59e0b" stroke-width="2"/>
      <g transform="translate(45, 90) rotate(50)"><rect width="14" height="40" rx="3" fill="#f59e0b"/></g>
      <g transform="translate(75, 90) rotate(50)"><rect width="14" height="40" rx="3" fill="#f59e0b"/></g>
      <g transform="translate(105, 90) rotate(50)"><rect width="14" height="40" rx="3" fill="#f59e0b"/></g>
      <g transform="translate(135, 90) rotate(50)"><rect width="14" height="40" rx="3" fill="#f59e0b"/></g>
      <text x="90" y="155" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">∀ n ≥ p : P(n) ĐÚNG</text>
      <text x="90" y="180" text-anchor="middle" fill="#94a3b8" font-size="11">Toàn bộ hàng vô hạn ngã</text>
    </g>

    <text x="450" y="325" text-anchor="middle" fill="#94a3b8" font-size="12">Thiếu Bước 1 (không có lực gạt) hoặc thiếu Bước 2 (đứt đoạn chuyển tiếp) đều dẫn tới ngụy biện quy nạp</text>
  </svg>`,

  "4": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 p-4 border border-indigo-500/30 shadow-lg">
    <text x="450" y="30" text-anchor="middle" fill="#e0e7ff" font-size="16" font-weight="bold" letter-spacing="1">TAM GIÁC PASCAL & HỆ SỐ KHAI TRIỂN NHỊ THỨC NEWTON</text>
    
    <!-- Pascal Triangle Left -->
    <g transform="translate(50, 50)">
      <rect x="0" y="0" width="380" height="250" rx="14" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
      <text x="190" y="26" text-anchor="middle" fill="#a5b4fc" font-size="13" font-weight="bold">TAM GIÁC PASCAL (CÁC HÀNG 0 ĐẾN 4)</text>
      <!-- Rows -->
      <text x="190" y="60" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">1</text>
      <text x="160" y="95" text-anchor="middle" fill="#ffffff" font-size="14">1</text>
      <text x="220" y="95" text-anchor="middle" fill="#ffffff" font-size="14">1</text>
      
      <text x="130" y="130" text-anchor="middle" fill="#ffffff" font-size="14">1</text>
      <text x="190" y="130" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">2</text>
      <text x="250" y="130" text-anchor="middle" fill="#ffffff" font-size="14">1</text>
      
      <text x="100" y="165" text-anchor="middle" fill="#ffffff" font-size="14">1</text>
      <text x="160" y="165" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">3</text>
      <text x="220" y="165" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">3</text>
      <text x="280" y="165" text-anchor="middle" fill="#ffffff" font-size="14">1</text>
      
      <text x="70" y="205" text-anchor="middle" fill="#ffffff" font-size="14">1</text>
      <text x="130" y="205" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">4</text>
      <text x="190" y="205" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">6</text>
      <text x="250" y="205" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">4</text>
      <text x="310" y="205" text-anchor="middle" fill="#ffffff" font-size="14">1</text>
      
      <!-- Pascal Rule hint -->
      <path d="M 160 170 L 190 190 M 220 170 L 190 190" stroke="#f59e0b" stroke-width="2" stroke-dasharray="2,2"/>
      <text x="190" y="235" text-anchor="middle" fill="#94a3b8" font-size="11">Quy tắc cộng: C(n+1, k) = C(n, k-1) + C(n, k)</text>
    </g>

    <!-- Formula & Structure Right -->
    <g transform="translate(460, 50)">
      <rect x="0" y="0" width="390" height="250" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
      <text x="195" y="26" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">CÔNG THỨC NHỊ THỨC NEWTON</text>
      
      <rect x="20" y="45" width="350" height="46" rx="8" fill="#1e1b4b"/>
      <text x="195" y="74" text-anchor="middle" fill="#fcd34d" font-size="14" font-family="monospace" font-weight="bold">(a + b)ⁿ = Σ C(n, k) · aⁿ⁻ᵏ · bᵏ</text>

      <rect x="20" y="105" width="350" height="60" rx="8" fill="#1e1b4b"/>
      <text x="35" y="125" fill="#a5b4fc" font-size="12" font-weight="bold">Số hạng tổng quát thứ k + 1:</text>
      <text x="35" y="150" fill="#ffffff" font-size="13" font-family="monospace">T(k+1) = C(n, k) · aⁿ⁻ᵏ · bᵏ   (0 ≤ k ≤ n)</text>

      <rect x="20" y="180" width="350" height="52" rx="8" fill="#1e1b4b"/>
      <text x="35" y="200" fill="#38bdf8" font-size="11" font-weight="bold">Tổng các hệ số (thay a = b = 1):</text>
      <text x="35" y="220" fill="#ffffff" font-size="12" font-family="monospace">C(n,0) + C(n,1) + ... + C(n,n) = 2ⁿ</text>
    </g>

    <text x="450" y="330" text-anchor="middle" fill="#94a3b8" font-size="12">Tổng số mũ của a và b luôn bằng n • Khai triển (a+b)ⁿ luôn có chính xác n + 1 hạng tử</text>
  </svg>`,

  "5": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 p-4 border border-indigo-500/30 shadow-lg">
    <text x="450" y="28" text-anchor="middle" fill="#e0e7ff" font-size="16" font-weight="bold" letter-spacing="1">ĐƯỜNG ELIP: TIÊU ĐIỂM, CÁC TRỤC & ĐƯỜNG CHUẨN</text>
    
    <g transform="translate(450, 180)">
      <!-- Axes -->
      <line x1="-380" y1="0" x2="380" y2="0" stroke="#64748b" stroke-width="2"/>
      <polygon points="385,0 375,-5 375,5" fill="#64748b"/>
      <text x="375" y="-12" fill="#94a3b8" font-size="14" font-weight="bold">x</text>

      <line x1="0" y1="-140" x2="0" y2="140" stroke="#64748b" stroke-width="2"/>
      <polygon points="0,-145 -5,-135 5,-135" fill="#64748b"/>
      <text x="12" y="-135" fill="#94a3b8" font-size="14" font-weight="bold">y</text>
      <text x="-16" y="18" fill="#94a3b8" font-size="12">O</text>

      <!-- Fundamental Rectangle -->
      <rect x="-240" y="-110" width="480" height="220" fill="none" stroke="#6366f1" stroke-dasharray="4,4" stroke-width="1.5"/>
      <text x="-240" y="-118" fill="#818cf8" font-size="10">Hình chữ nhật cơ sở (±a, ±b)</text>

      <!-- Ellipse Curve -->
      <ellipse cx="0" cy="0" rx="240" ry="110" fill="#3b82f6" fill-opacity="0.1" stroke="#38bdf8" stroke-width="3"/>

      <!-- Foci -->
      <!-- c = sqrt(240^2 - 110^2) = sqrt(57600 - 12100) = sqrt(45500) ≈ 213 -->
      <circle cx="-190" cy="0" r="5" fill="#f59e0b"/>
      <text x="-190" y="22" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="bold">F₁(-c; 0)</text>

      <circle cx="190" cy="0" r="5" fill="#f59e0b"/>
      <text x="190" y="22" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="bold">F₂(c; 0)</text>

      <!-- Vertices -->
      <circle cx="-240" cy="0" r="4" fill="#ffffff"/>
      <text x="-260" y="-8" fill="#ffffff" font-size="12">A₁(-a;0)</text>
      <circle cx="240" cy="0" r="4" fill="#ffffff"/>
      <text x="245" y="-8" fill="#ffffff" font-size="12">A₂(a;0)</text>

      <circle cx="0" cy="110" r="4" fill="#ffffff"/>
      <text x="10" y="120" fill="#ffffff" font-size="11">B₁(0;-b)</text>
      <circle cx="0" cy="-110" r="4" fill="#ffffff"/>
      <text x="10" y="-115" fill="#ffffff" font-size="11">B₂(0;b)</text>

      <!-- Point M on Ellipse -->
      <circle cx="120" cy="-95" r="5" fill="#ec4899"/>
      <text x="130" y="-105" fill="#f472b6" font-size="12" font-weight="bold">M(x; y)</text>
      <!-- Radii MF1 and MF2 -->
      <line x1="-190" y1="0" x2="120" y2="-95" stroke="#ec4899" stroke-width="2"/>
      <line x1="190" y1="0" x2="120" y2="-95" stroke="#ec4899" stroke-width="2"/>

      <!-- Directrices -->
      <line x1="-300" y1="-140" x2="-300" y2="140" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6,4"/>
      <text x="-305" y="-120" text-anchor="end" fill="#fb7185" font-size="11">Δ₁: x = -a/e</text>
      <line x1="300" y1="-140" x2="300" y2="140" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6,4"/>
      <text x="305" y="-120" fill="#fb7185" font-size="11">Δ₂: x = a/e</text>
    </g>

    <text x="450" y="340" text-anchor="middle" fill="#94a3b8" font-size="12">MF₁ + MF₂ = 2a • b² = a² - c² • Tâm sai e = c/a (0 &lt; e &lt; 1) • Bán kính qua tiêu điểm MF₁ = a + ex</text>
  </svg>`,

  "6": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 p-4 border border-indigo-500/30 shadow-lg">
    <text x="450" y="28" text-anchor="middle" fill="#e0e7ff" font-size="16" font-weight="bold" letter-spacing="1">ĐƯỜNG HYPEBOL: HAI NHÁNH & ĐƯỜNG TIỆM CẬN</text>
    
    <g transform="translate(450, 180)">
      <!-- Axes -->
      <line x1="-380" y1="0" x2="380" y2="0" stroke="#64748b" stroke-width="2"/>
      <text x="375" y="-10" fill="#94a3b8" font-size="14" font-weight="bold">x</text>
      <line x1="0" y1="-140" x2="0" y2="140" stroke="#64748b" stroke-width="2"/>
      <text x="12" y="-135" fill="#94a3b8" font-size="14" font-weight="bold">y</text>
      <text x="-16" y="18" fill="#94a3b8" font-size="12">O</text>

      <!-- Fundamental Rectangle: a=130, b=90 -->
      <rect x="-130" y="-90" width="260" height="180" fill="none" stroke="#6366f1" stroke-dasharray="4,4" stroke-width="1.5"/>

      <!-- Asymptotes: y = ±(b/a)x -->
      <line x1="-260" y1="-180" x2="260" y2="180" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,3"/>
      <text x="250" y="165" fill="#fcd34d" font-size="11">y = -(b/a)x</text>
      <line x1="-260" y1="180" x2="260" y2="-180" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,3"/>
      <text x="250" y="-165" fill="#fcd34d" font-size="11">y = (b/a)x</text>

      <!-- Hyperbola Left Branch -->
      <path d="M -300 -125 Q -140 -30 -130 0 Q -140 30 -300 125" fill="none" stroke="#38bdf8" stroke-width="3"/>
      <!-- Hyperbola Right Branch -->
      <path d="M 300 -125 Q 140 -30 130 0 Q 140 30 300 125" fill="none" stroke="#38bdf8" stroke-width="3"/>

      <!-- Foci: c = sqrt(130^2 + 90^2) = sqrt(16900 + 8100) ≈ 158 -->
      <circle cx="-160" cy="0" r="5" fill="#f43f5e"/>
      <text x="-160" y="22" text-anchor="middle" fill="#fb7185" font-size="12" font-weight="bold">F₁(-c; 0)</text>
      <circle cx="160" cy="0" r="5" fill="#f43f5e"/>
      <text x="160" y="22" text-anchor="middle" fill="#fb7185" font-size="12" font-weight="bold">F₂(c; 0)</text>

      <!-- Vertices -->
      <circle cx="-130" cy="0" r="4" fill="#ffffff"/>
      <text x="-140" y="-10" text-anchor="end" fill="#ffffff" font-size="11">A₁(-a;0)</text>
      <circle cx="130" cy="0" r="4" fill="#ffffff"/>
      <text x="140" y="-10" fill="#ffffff" font-size="11">A₂(a;0)</text>
    </g>

    <text x="450" y="340" text-anchor="middle" fill="#94a3b8" font-size="12">|MF₁ - MF₂| = 2a • c² = a² + b² (c &gt; a) • Tâm sai e = c/a &gt; 1 • Tiệm cận y = ±(b/a)x</text>
  </svg>`,

  "7": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 p-4 border border-indigo-500/30 shadow-lg">
    <text x="450" y="28" text-anchor="middle" fill="#e0e7ff" font-size="16" font-weight="bold" letter-spacing="1">ĐƯỜNG PARABOL: TIÊU ĐIỂM, ĐƯỜNG CHUẨN & PHẢN XẠ QUANG HỌC</text>
    
    <g transform="translate(350, 180)">
      <!-- Axes -->
      <line x1="-220" y1="0" x2="480" y2="0" stroke="#64748b" stroke-width="2"/>
      <text x="470" y="-10" fill="#94a3b8" font-size="14" font-weight="bold">x</text>
      <line x1="0" y1="-140" x2="0" y2="140" stroke="#64748b" stroke-width="2"/>
      <text x="12" y="-135" fill="#94a3b8" font-size="14" font-weight="bold">y</text>
      <text x="-16" y="18" fill="#94a3b8" font-size="12">O</text>

      <!-- Focus F(p/2, 0) : say p = 120 => p/2 = 60 -->
      <circle cx="60" cy="0" r="5" fill="#f59e0b"/>
      <text x="60" y="22" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="bold">F(p/2; 0)</text>

      <!-- Directrix: x = -p/2 = -60 -->
      <line x1="-60" y1="-140" x2="-60" y2="140" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="6,4"/>
      <text x="-70" y="-120" text-anchor="end" fill="#fb7185" font-size="12" font-weight="bold">Δ: x = -p/2</text>

      <!-- Parabol Curve y^2 = 2px = 240x -->
      <!-- x = y^2 / 240. for y=130 => x = 16900/240 ≈ 70.4. Scale for visual: y^2 = 4*30*x => 120x -->
      <path d="M 280 -130 Q 0 -60 0 0 Q 0 60 280 130" fill="none" stroke="#38bdf8" stroke-width="3"/>

      <!-- Point M(x, y) on Parabola -->
      <circle cx="120" cy="-90" r="5" fill="#ec4899"/>
      <text x="130" y="-100" fill="#f472b6" font-size="12" font-weight="bold">M(x; y)</text>
      
      <!-- Distance MF and d(M, delta) -->
      <line x1="120" y1="-90" x2="60" y2="0" stroke="#ec4899" stroke-width="2"/>
      <line x1="120" y1="-90" x2="-60" y2="-90" stroke="#ec4899" stroke-width="2" stroke-dasharray="4,4"/>
      <circle cx="-60" cy="-90" r="4" fill="#f43f5e"/>
      <text x="-50" y="-95" fill="#fb7185" font-size="11">H</text>
      <text x="30" y="-95" fill="#fcd34d" font-size="11" font-weight="bold">MF = MH = x + p/2</text>

      <!-- Parallel rays reflection -->
      <path d="M 380 -50 L 50 -50 L 60 0" stroke="#34d399" stroke-width="1.5" stroke-dasharray="3,3"/>
      <path d="M 380 50 L 50 50 L 60 0" stroke="#34d399" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="385" y="-45" fill="#34d399" font-size="10">Tia tới song song</text>
    </g>

    <text x="450" y="340" text-anchor="middle" fill="#94a3b8" font-size="12">y² = 2px (p &gt; 0) • F(p/2; 0) • Đường chuẩn x = -p/2 • Tâm sai e = 1 • Tia tới song song trục đối xứng luôn phản xạ qua F</text>
  </svg>`,

  "8": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 p-4 border border-indigo-500/30 shadow-lg">
    <text x="450" y="28" text-anchor="middle" fill="#e0e7ff" font-size="16" font-weight="bold" letter-spacing="1">SỰ THỐNG NHẤT BA ĐƯỜNG CONIC & QUỸ ĐẠO THIÊN THỂ VŨ TRỤ</text>
    
    <!-- Left: Cone Sections Visualization -->
    <g transform="translate(60, 50)">
      <rect x="0" y="0" width="360" height="250" rx="14" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
      <text x="180" y="26" text-anchor="middle" fill="#a5b4fc" font-size="13" font-weight="bold">THIẾT DIỆN MẶT NÓN TRÒN XOAY</text>
      <!-- Double cone outline -->
      <polygon points="180,130 90,40 270,40" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5"/>
      <polygon points="180,130 90,220 270,220" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5"/>
      
      <!-- Ellipse Plane cut -->
      <ellipse cx="165" cy="75" rx="45" ry="16" fill="none" stroke="#38bdf8" stroke-width="2" transform="rotate(-15 165 75)"/>
      <text x="225" y="80" fill="#38bdf8" font-size="11" font-weight="bold">Elip (cắt 1 nhánh)</text>

      <!-- Parabola Plane cut -->
      <path d="M 125 100 Q 150 125 180 200" fill="none" stroke="#34d399" stroke-width="2"/>
      <text x="210" y="160" fill="#34d399" font-size="11" font-weight="bold">Parabol (// đường sinh)</text>

      <!-- Hyperbola Plane cut -->
      <path d="M 105 50 Q 120 80 135 125" fill="none" stroke="#f43f5e" stroke-width="2"/>
      <path d="M 135 135 Q 120 180 105 210" fill="none" stroke="#f43f5e" stroke-width="2"/>
      <text x="50" y="130" fill="#f43f5e" font-size="11" font-weight="bold">Hypebol</text>
      
      <text x="180" y="240" text-anchor="middle" fill="#94a3b8" font-size="11">Cắt cả 2 nhánh đối đỉnh</text>
    </g>

    <!-- Right: Eccentricity Spectrum & Orbit Velocity -->
    <g transform="translate(460, 50)">
      <rect x="0" y="0" width="380" height="250" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
      <text x="190" y="26" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">PHÂN LOẠI TÂM SAI & VẬN TỐC TẠI CẬN ĐIỂM</text>

      <!-- Elip Row -->
      <rect x="20" y="45" width="340" height="52" rx="8" fill="#1e1b4b" stroke="#38bdf8" stroke-width="1"/>
      <text x="35" y="65" fill="#38bdf8" font-size="12" font-weight="bold">1. ĐƯỜNG ELIP (0 &lt; e &lt; 1)</text>
      <text x="35" y="86" fill="#cbd5e1" font-size="11">Quỹ đạo khép kín • v &lt; √(2GM/p)</text>

      <!-- Parabol Row -->
      <rect x="20" y="110" width="340" height="52" rx="8" fill="#1e1b4b" stroke="#34d399" stroke-width="1"/>
      <text x="35" y="130" fill="#34d399" font-size="12" font-weight="bold">2. ĐƯỜNG PARABOL (e = 1)</text>
      <text x="35" y="151" fill="#cbd5e1" font-size="11">Quỹ đạo mở giới hạn • v = √(2GM/p) (Vận tốc vũ trụ cấp 2)</text>

      <!-- Hypebol Row -->
      <rect x="20" y="175" width="340" height="52" rx="8" fill="#1e1b4b" stroke="#f43f5e" stroke-width="1"/>
      <text x="35" y="195" fill="#fb7185" font-size="12" font-weight="bold">3. ĐƯỜNG HYPEBOL (e &gt; 1)</text>
      <text x="35" y="216" fill="#cbd5e1" font-size="11">Quỹ đạo mở không gian liên sao • v &gt; √(2GM/p)</text>
    </g>

    <text x="450" y="335" text-anchor="middle" fill="#94a3b8" font-size="12">Định nghĩa thống nhất: MF / d(M, Δ) = e • Phương trình: (x - f)² + y² = e²(x - d)²</text>
  </svg>`
};

const outputPath = path.join(__dirname, 'cd_toan10_svgs.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(diagramSVGs, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/cd_toan10_svgs.js with 8 SVGs.');
