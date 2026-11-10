const fs = require('fs');
const path = require('path');

// SVG Generator cho từng chương Toán 6
const chapterSVGs = {
  1: `
    <svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g_ch1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#3b82f6"/>
          <stop offset="100%" stop-color="#1d4ed8"/>
        </linearGradient>
      </defs>
      <!-- Background Card -->
      <rect x="10" y="10" width="680" height="140" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="350" y="32" fill="#1e293b" font-size="13" font-weight="bold" text-anchor="middle">TIA SỐ TỰ NHIÊN VÀ CÁC TẬP HỢP SỐ ℕ, ℕ*</text>
      
      <!-- Tia số gốc O -->
      <line x1="60" y1="80" x2="640" y2="80" stroke="#2563eb" stroke-width="3"/>
      <polygon points="645,80 635,74 635,86" fill="#2563eb"/>
      
      <!-- Các vạch số -->
      <line x1="80" y1="72" x2="80" y2="88" stroke="#1e293b" stroke-width="2.5"/>
      <circle cx="80" cy="80" r="4" fill="#e11d48"/>
      <text x="80" y="105" fill="#e11d48" font-size="13" font-weight="bold" text-anchor="middle">0 (Gốc O)</text>

      <line x1="160" y1="74" x2="160" y2="86" stroke="#475569" stroke-width="2"/>
      <text x="160" y="103" fill="#334155" font-size="12" font-weight="600" text-anchor="middle">1</text>

      <line x1="240" y1="74" x2="240" y2="86" stroke="#475569" stroke-width="2"/>
      <text x="240" y="103" fill="#334155" font-size="12" font-weight="600" text-anchor="middle">2</text>

      <line x1="320" y1="74" x2="320" y2="86" stroke="#475569" stroke-width="2"/>
      <text x="320" y="103" fill="#334155" font-size="12" font-weight="600" text-anchor="middle">3</text>

      <line x1="400" y1="74" x2="400" y2="86" stroke="#475569" stroke-width="2"/>
      <text x="400" y="103" fill="#334155" font-size="12" font-weight="600" text-anchor="middle">4</text>

      <line x1="480" y1="74" x2="480" y2="86" stroke="#475569" stroke-width="2"/>
      <text x="480" y="103" fill="#334155" font-size="12" font-weight="600" text-anchor="middle">5</text>

      <text x="560" y="84" fill="#64748b" font-size="18" font-weight="bold" text-anchor="middle">...</text>

      <!-- Label N & N* -->
      <rect x="75" y="122" width="165" height="22" rx="6" fill="#dbeafe"/>
      <text x="157" y="137" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">ℕ = {0; 1; 2; 3; 4; 5; ...}</text>

      <rect x="260" y="122" width="165" height="22" rx="6" fill="#fef3c7"/>
      <text x="342" y="137" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">ℕ* = {1; 2; 3; 4; 5; ...}</text>

      <rect x="445" y="122" width="200" height="22" rx="6" fill="#dcfce7"/>
      <text x="545" y="137" fill="#15803d" font-size="11" font-weight="bold" text-anchor="middle">Thứ tự: ( ) → [ ] → { }</text>
    </svg>
  `,

  2: `
    <svg viewBox="0 0 700 170" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="150" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="350" y="32" fill="#1e293b" font-size="13" font-weight="bold" text-anchor="middle">PHÂN TÍCH RA THỪA SỐ NGUYÊN TỐ & TÌM ƯCLN / BCNN</text>

      <!-- Sơ đồ cây cho số 24 -->
      <g transform="translate(60, 45)">
        <circle cx="60" cy="15" r="14" fill="#3b82f6"/>
        <text x="60" y="20" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">24</text>
        
        <line x1="50" y1="27" x2="25" y2="48" stroke="#64748b" stroke-width="1.5"/>
        <line x1="70" y1="27" x2="95" y2="48" stroke="#64748b" stroke-width="1.5"/>

        <circle cx="25" cy="55" r="12" fill="#e11d48"/>
        <text x="25" y="59" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">2</text>

        <circle cx="95" cy="55" r="12" fill="#3b82f6"/>
        <text x="95" y="59" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">12</text>

        <line x1="85" y1="67" x2="65" y2="85" stroke="#64748b" stroke-width="1.5"/>
        <line x1="105" y1="67" x2="125" y2="85" stroke="#64748b" stroke-width="1.5"/>

        <circle cx="65" cy="92" r="12" fill="#e11d48"/>
        <text x="65" y="96" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">2</text>

        <circle cx="125" cy="92" r="12" fill="#e11d48"/>
        <text x="125" y="96" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">6</text>
      </g>

      <text x="260" y="85" fill="#1e293b" font-size="13" font-weight="bold">24 = 2³ × 3</text>
      <text x="260" y="105" fill="#059669" font-size="11" font-weight="600">30 = 2 × 3 × 5</text>

      <!-- Hộp so sánh ƯCLN & BCNN -->
      <rect x="420" y="50" width="240" height="90" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="540" y="72" fill="#2563eb" font-size="12" font-weight="bold" text-anchor="middle">ƯCLN(24, 30) = 2 × 3 = 6</text>
      <text x="540" y="90" fill="#64748b" font-size="10" text-anchor="middle">(Chọn thừa số chung, số mũ nhỏ nhất)</text>
      <line x1="435" y1="100" x2="645" y2="100" stroke="#f1f5f9"/>
      <text x="540" y="118" fill="#d97706" font-size="12" font-weight="bold" text-anchor="middle">BCNN(24, 30) = 2³ × 3 × 5 = 120</text>
      <text x="540" y="132" fill="#64748b" font-size="10" text-anchor="middle">(Chọn thừa số chung & riêng, số mũ lớn nhất)</text>
    </svg>
  `,

  3: `
    <svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="350" y="32" fill="#1e293b" font-size="13" font-weight="bold" text-anchor="middle">TRỤC SỐ NGUYÊN (ℤ) VÀ CẶP SỐ ĐỐI XỨNG</text>

      <!-- Trục số nguyên -->
      <line x1="40" y1="80" x2="660" y2="80" stroke="#0284c7" stroke-width="3"/>
      <polygon points="665,80 655,74 655,86" fill="#0284c7"/>
      <polygon points="35,80 45,74 45,86" fill="#0284c7"/>

      <!-- Gốc 0 -->
      <line x1="350" y1="70" x2="350" y2="90" stroke="#0f172a" stroke-width="3"/>
      <circle cx="350" cy="80" r="5" fill="#f59e0b"/>
      <text x="350" y="106" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">0</text>

      <!-- Các vạch âm -->
      <line x1="280" y1="74" x2="280" y2="86" stroke="#dc2626" stroke-width="2"/>
      <text x="280" y="103" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">-1</text>

      <line x1="210" y1="74" x2="210" y2="86" stroke="#dc2626" stroke-width="2"/>
      <text x="210" y="103" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">-2</text>

      <line x1="140" y1="74" x2="140" y2="86" stroke="#dc2626" stroke-width="2"/>
      <text x="140" y="103" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">-3</text>

      <line x1="70" y1="74" x2="70" y2="86" stroke="#dc2626" stroke-width="2"/>
      <text x="70" y="103" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">-4</text>

      <!-- Các vạch dương -->
      <line x1="420" y1="74" x2="420" y2="86" stroke="#16a34a" stroke-width="2"/>
      <text x="420" y="103" fill="#16a34a" font-size="12" font-weight="bold" text-anchor="middle">+1</text>

      <line x1="490" y1="74" x2="490" y2="86" stroke="#16a34a" stroke-width="2"/>
      <text x="490" y="103" fill="#16a34a" font-size="12" font-weight="bold" text-anchor="middle">+2</text>

      <line x1="560" y1="74" x2="560" y2="86" stroke="#16a34a" stroke-width="2"/>
      <text x="560" y="103" fill="#16a34a" font-size="12" font-weight="bold" text-anchor="middle">+3</text>

      <line x1="630" y1="74" x2="630" y2="86" stroke="#16a34a" stroke-width="2"/>
      <text x="630" y="103" fill="#16a34a" font-size="12" font-weight="bold" text-anchor="middle">+4</text>

      <!-- Cung đối xứng -3 và +3 -->
      <path d="M 140 70 Q 350 25 560 70" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="4,4"/>
      <text x="350" y="52" fill="#7c3aed" font-size="11" font-weight="bold" text-anchor="middle">Số đối: -3 và +3 cách đều gốc 0</text>

      <rect x="50" y="122" width="250" height="22" rx="6" fill="#fee2e2"/>
      <text x="175" y="137" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">Số nguyên âm (Nhỏ hơn 0)</text>

      <rect x="400" y="122" width="250" height="22" rx="6" fill="#dcfce7"/>
      <text x="525" y="137" fill="#15803d" font-size="11" font-weight="bold" text-anchor="middle">Số nguyên dương (Lớn hơn 0)</text>
    </svg>
  `,

  4: `
    <svg viewBox="0 0 700 240" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="220" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="350" y="30" fill="#1e293b" font-size="13" font-weight="bold" text-anchor="middle">CÁC HÌNH PHẲNG TRONG THỰC TIỄN & CÔNG THỨC CHU VI, DIỆN TÍCH</text>

      <!-- 1. Tam giác đều -->
      <g transform="translate(30, 45)">
        <polygon points="40,10 10,65 70,65" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <text x="40" y="80" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Tam giác đều</text>
        <text x="40" y="93" fill="#2563eb" font-size="9" text-anchor="middle">C = 3a; 3 góc 60°</text>
      </g>

      <!-- 2. Hình vuông -->
      <g transform="translate(130, 45)">
        <rect x="15" y="15" width="50" height="50" rx="2" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
        <text x="40" y="80" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Hình vuông</text>
        <text x="40" y="93" fill="#16a34a" font-size="9" text-anchor="middle">C = 4a; S = a²</text>
      </g>

      <!-- 3. Lục giác đều -->
      <g transform="translate(230, 45)">
        <polygon points="40,10 65,25 65,55 40,70 15,55 15,25" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="40" y="85" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Lục giác đều</text>
        <text x="40" y="98" fill="#d97706" font-size="9" text-anchor="middle">6 cạnh bằng; góc 120°</text>
      </g>

      <!-- 4. Hình chữ nhật -->
      <g transform="translate(330, 45)">
        <rect x="10" y="20" width="65" height="42" rx="2" fill="#fae8ff" stroke="#a855f7" stroke-width="2"/>
        <text x="42" y="80" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Hình chữ nhật</text>
        <text x="42" y="93" fill="#9333ea" font-size="9" text-anchor="middle">C = 2(a+b); S = a·b</text>
      </g>

      <!-- 5. Hình thoi -->
      <g transform="translate(435, 45)">
        <polygon points="40,10 68,38 40,66 12,38" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
        <line x1="40" y1="10" x2="40" y2="66" stroke="#dc2626" stroke-dasharray="2,2"/>
        <line x1="12" y1="38" x2="68" y2="38" stroke="#dc2626" stroke-dasharray="2,2"/>
        <text x="40" y="80" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Hình thoi</text>
        <text x="40" y="93" fill="#dc2626" font-size="9" text-anchor="middle">S = ½(a·b); C = 4m</text>
      </g>

      <!-- 6. Hình bình hành -->
      <g transform="translate(545, 45)">
        <polygon points="25,20 75,20 60,62 10,62" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
        <text x="42" y="80" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Hình bình hành</text>
        <text x="42" y="93" fill="#4f46e5" font-size="9" text-anchor="middle">S = a·h; C = 2(a+b)</text>
      </g>

      <!-- 7. Hình thang cân -->
      <g transform="translate(260, 140)">
        <polygon points="35,15 95,15 115,55 15,55" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
        <line x1="35" y1="15" x2="35" y2="55" stroke="#0d9488" stroke-dasharray="2,2"/>
        <text x="65" y="70" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Hình thang cân (2 đáy a, b // nhau; 2 cạnh bên bằng nhau)</text>
        <text x="65" y="84" fill="#0f766e" font-size="10" font-weight="600" text-anchor="middle">Chu vi: C = a + b + c + d  •  Diện tích: S = ½(a + b)·h</text>
      </g>
    </svg>
  `,

  5: `
    <svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="350" y="32" fill="#1e293b" font-size="13" font-weight="bold" text-anchor="middle">TÍNH ĐỐI XỨNG CỦA HÌNH PHẲNG TRONG TỰ NHIÊN</text>

      <!-- Trục đối xứng (Hình thang cân / Bướm) -->
      <g transform="translate(100, 45)">
        <polygon points="40,10 90,10 110,65 20,65" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
        <line x1="65" y1="0" x2="65" y2="75" stroke="#e11d48" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="65" y="92" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Hình có TRỤC đối xứng</text>
        <text x="65" y="106" fill="#e11d48" font-size="10" text-anchor="middle">Đường thẳng d chia đôi chồng khít</text>
      </g>

      <!-- Tâm đối xứng (Hình thoi / Hình bình hành / Chong chóng) -->
      <g transform="translate(420, 45)">
        <polygon points="70,10 120,38 70,66 20,38" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <circle cx="70" cy="38" r="4" fill="#dc2626"/>
        <line x1="20" y1="38" x2="120" y2="38" stroke="#d97706" stroke-dasharray="2,2"/>
        <line x1="70" y1="10" x2="70" y2="66" stroke="#d97706" stroke-dasharray="2,2"/>
        <text x="70" y="92" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Hình có TÂM đối xứng</text>
        <text x="70" y="106" fill="#d97706" font-size="10" text-anchor="middle">Quay nửa vòng 180° quanh O trùng khớp</text>
      </g>
    </svg>
  `,

  6: `
    <svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="350" y="30" fill="#1e293b" font-size="13" font-weight="bold" text-anchor="middle">PHÂN SỐ: BIỂU DIỄN HÌNH HỌC VÀ 2 BÀI TOÁN CƠ BẢN</text>

      <!-- Thanh phân số 3/4 -->
      <g transform="translate(60, 45)">
        <text x="100" y="15" fill="#1e293b" font-size="12" font-weight="bold" text-anchor="middle">Phân số 3/4 của một thanh</text>
        <rect x="10" y="25" width="45" height="30" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
        <rect x="55" y="25" width="45" height="30" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
        <rect x="100" y="25" width="45" height="30" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
        <rect x="145" y="25" width="45" height="30" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="100" y="75" fill="#2563eb" font-size="11" font-weight="600" text-anchor="middle">3 phần tô màu / 4 phần bằng nhau</text>
      </g>

      <!-- 2 bài toán cơ bản -->
      <g transform="translate(340, 45)">
        <rect x="10" y="10" width="310" height="75" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
        <text x="165" y="30" fill="#059669" font-size="11" font-weight="bold" text-anchor="middle">BÀI TOÁN 1: Tìm m/n của số a</text>
        <text x="165" y="46" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">Giá trị = a · (m/n)</text>
        <line x1="20" y1="52" x2="310" y2="52" stroke="#f1f5f9"/>
        <text x="165" y="66" fill="#d97706" font-size="11" font-weight="bold" text-anchor="middle">BÀI TOÁN 2: Tìm số biết m/n của nó là b → Số đó = b : (m/n)</text>
      </g>
    </svg>
  `,

  7: `
    <svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="350" y="30" fill="#1e293b" font-size="13" font-weight="bold" text-anchor="middle">SỐ THẬP PHÂN, LÀM TRÒN & TỈ SỐ PHẦN TRĂM (%)</text>

      <!-- Quy tắc làm tròn -->
      <g transform="translate(50, 45)">
        <rect x="10" y="10" width="260" height="75" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
        <text x="140" y="30" fill="#2563eb" font-size="11" font-weight="bold" text-anchor="middle">QUY TẮC LÀM TRÒN SỐ</text>
        <text x="140" y="50" fill="#dc2626" font-size="10" font-weight="600" text-anchor="middle">Sau hàng làm tròn ≥ 5: Tăng 1 đơn vị</text>
        <text x="140" y="68" fill="#16a34a" font-size="10" font-weight="600" text-anchor="middle">Sau hàng làm tròn &lt; 5: Giữ nguyên</text>
      </g>

      <!-- Tỉ số phần trăm -->
      <g transform="translate(370, 45)">
        <rect x="10" y="10" width="280" height="75" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
        <text x="150" y="28" fill="#7c3aed" font-size="11" font-weight="bold" text-anchor="middle">TỈ SỐ PHẦN TRĂM: (a/b) · 100%</text>
        <text x="150" y="48" fill="#334155" font-size="11" text-anchor="middle">Tìm m% của a: a · (m/100)</text>
        <text x="150" y="68" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">Tìm x biết m% của nó là b: b : (m/100)</text>
      </g>
    </svg>
  `,

  8: `
    <svg viewBox="0 0 700 170" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="150" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="350" y="30" fill="#1e293b" font-size="13" font-weight="bold" text-anchor="middle">HÌNH HỌC CƠ BẢN: ĐIỂM, ĐOẠN THẲNG, TRUNG ĐIỂM VÀ 4 LOẠI GÓC</text>

      <!-- Đoạn thẳng và Trung điểm -->
      <g transform="translate(30, 45)">
        <line x1="20" y1="25" x2="180" y2="25" stroke="#2563eb" stroke-width="3"/>
        <circle cx="20" cy="25" r="4" fill="#0f172a"/>
        <text x="20" y="45" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">A</text>

        <circle cx="100" cy="25" r="5" fill="#e11d48"/>
        <text x="100" y="45" fill="#e11d48" font-size="12" font-weight="bold" text-anchor="middle">I (Trung điểm)</text>

        <circle cx="180" cy="25" r="4" fill="#0f172a"/>
        <text x="180" y="45" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">B</text>
        <text x="100" y="70" fill="#475569" font-size="10" font-weight="600" text-anchor="middle">IA = IB = AB / 2</text>
      </g>

      <!-- 4 loại góc -->
      <g transform="translate(250, 45)">
        <!-- Góc nhọn -->
        <g transform="translate(10, 0)">
          <line x1="30" y1="40" x2="70" y2="40" stroke="#0f172a" stroke-width="2"/>
          <line x1="30" y1="40" x2="60" y2="10" stroke="#0f172a" stroke-width="2"/>
          <text x="45" y="60" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Góc nhọn</text>
          <text x="45" y="73" fill="#2563eb" font-size="9" text-anchor="middle">&lt; 90°</text>
        </g>
        <!-- Góc vuông -->
        <g transform="translate(100, 0)">
          <line x1="30" y1="40" x2="70" y2="40" stroke="#0f172a" stroke-width="2"/>
          <line x1="30" y1="40" x2="30" y2="10" stroke="#0f172a" stroke-width="2"/>
          <rect x="30" y="30" width="8" height="10" fill="none" stroke="#dc2626" stroke-width="1.5"/>
          <text x="45" y="60" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Góc vuông</text>
          <text x="45" y="73" fill="#dc2626" font-size="9" text-anchor="middle">= 90°</text>
        </g>
        <!-- Góc tù -->
        <g transform="translate(200, 0)">
          <line x1="45" y1="40" x2="85" y2="40" stroke="#0f172a" stroke-width="2"/>
          <line x1="45" y1="40" x2="10" y2="15" stroke="#0f172a" stroke-width="2"/>
          <text x="50" y="60" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Góc tù</text>
          <text x="50" y="73" fill="#d97706" font-size="9" text-anchor="middle">90° &lt; α &lt; 180°</text>
        </g>
        <!-- Góc bẹt -->
        <g transform="translate(310, 0)">
          <line x1="10" y1="35" x2="90" y2="35" stroke="#0f172a" stroke-width="2"/>
          <circle cx="50" cy="35" r="3" fill="#7c3aed"/>
          <text x="50" y="60" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Góc bẹt</text>
          <text x="50" y="73" fill="#7c3aed" font-size="9" text-anchor="middle">= 180°</text>
        </g>
      </g>
    </svg>
  `,

  9: `
    <svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="350" y="30" fill="#1e293b" font-size="13" font-weight="bold" text-anchor="middle">DỮ LIỆU, BIỂU ĐỒ CỘT KÉP & XÁC SUẤT THỰC NGHIỆM</text>

      <!-- Biểu đồ cột kép minh họa -->
      <g transform="translate(50, 45)">
        <line x1="20" y1="70" x2="180" y2="70" stroke="#64748b" stroke-width="2"/>
        <line x1="20" y1="70" x2="20" y2="10" stroke="#64748b" stroke-width="2"/>
        
        <!-- Cặp cột 1 -->
        <rect x="40" y="25" width="18" height="45" fill="#3b82f6" rx="2"/>
        <rect x="60" y="35" width="18" height="35" fill="#f59e0b" rx="2"/>

        <!-- Cặp cột 2 -->
        <rect x="110" y="15" width="18" height="55" fill="#3b82f6" rx="2"/>
        <rect x="130" y="30" width="18" height="40" fill="#f59e0b" rx="2"/>

        <text x="100" y="86" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">Biểu đồ cột kép so sánh 2 dãy số</text>
      </g>

      <!-- Công thức xác suất thực nghiệm -->
      <g transform="translate(320, 45)">
        <rect x="10" y="10" width="330" height="75" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
        <text x="175" y="30" fill="#e11d48" font-size="12" font-weight="bold" text-anchor="middle">XÁC SUẤT THỰC NGHIỆM = k / n</text>
        <text x="175" y="50" fill="#0f172a" font-size="11" text-anchor="middle">k: Số lần sự kiện xảy ra</text>
        <text x="175" y="68" fill="#059669" font-size="11" font-weight="600" text-anchor="middle">n: Tổng số lần thực hiện thí nghiệm / trò chơi</text>
      </g>
    </svg>
  `
};

module.exports = { chapterSVGs };
