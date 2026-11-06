// khtn9_svg_p1.js - 17 bản vẽ vector SVG riêng biệt độc quyền cho Bài 1 đến Bài 17
module.exports = {
  // Bài 1: Dụng cụ & An toàn phòng thí nghiệm
  1: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#ef4444" stroke-width="1.2"/>
        <circle cx="75" cy="30" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
        <text x="75" y="36" text-anchor="middle" font-size="16">🔥</text>
        <text x="75" y="65" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b91c1c">CHẤT DỄ CHÁY</text>
        <text x="75" y="82" text-anchor="middle" font-size="9" fill="#64748b">Cồn, xăng, gas</text>
      </g>
      <g transform="translate(195, 20)">
        <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1.2"/>
        <circle cx="75" cy="30" r="16" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="75" y="36" text-anchor="middle" font-size="16">⚗️</text>
        <text x="75" y="65" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b45309">CHẤT ĂN MÒN</text>
        <text x="75" y="82" text-anchor="middle" font-size="9" fill="#64748b">Acid, kiềm đặc</text>
      </g>
      <g transform="translate(365, 20)">
        <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#8b5cf6" stroke-width="1.2"/>
        <circle cx="75" cy="30" r="16" fill="#ede9fe" stroke="#8b5cf6" stroke-width="1.5"/>
        <text x="75" y="36" text-anchor="middle" font-size="16">☠️</text>
        <text x="75" y="65" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6d28d9">CHẤT ĐỘC HẠI</text>
        <text x="75" y="82" text-anchor="middle" font-size="9" fill="#64748b">Không hít, nếm ngửi</text>
      </g>
      <g transform="translate(535, 20)">
        <rect x="0" y="0" width="160" height="95" rx="8" fill="#ffffff" stroke="#0ea5e9" stroke-width="1.2"/>
        <text x="80" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0369a1">5 BƯỚC BÁO CÁO</text>
        <text x="12" y="44" font-size="8.5" fill="#334155">1. Xác định câu hỏi</text>
        <text x="12" y="58" font-size="8.5" fill="#334155">2. Thu thập dữ liệu</text>
        <text x="12" y="72" font-size="8.5" fill="#334155">3. Phân tích bằng chứng</text>
        <text x="12" y="86" font-size="8.5" font-weight="bold" fill="#0284c7">4. Thiết kế poster / slide</text>
      </g>
    </svg>
  `,

  // Bài 2: Động năng & Thế năng
  2: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
      <!-- Nửa trái: Động năng -->
      <g transform="translate(25, 15)">
        <rect x="0" y="0" width="320" height="105" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1"/>
        <text x="160" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">ĐỘNG NĂNG (KINETIC ENERGY)</text>
        <!-- Xe chuyển động -->
        <rect x="30" y="45" width="60" height="25" rx="4" fill="#3b82f6"/>
        <circle cx="45" cy="72" r="7" fill="#1e293b"/>
        <circle cx="75" cy="72" r="7" fill="#1e293b"/>
        <line x1="95" y1="58" x2="160" y2="58" stroke="#ef4444" stroke-width="2.5"/>
        <polygon points="160,58 150,53 150,63" fill="#ef4444"/>
        <text x="125" y="50" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">v (vận tốc)</text>
        <text x="235" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">W_đ = ½ m v²</text>
        <text x="235" y="75" text-anchor="middle" font-size="9" fill="#475569">v tăng 2 lần -> W_đ tăng 4 lần</text>
      </g>
      <!-- Nửa phải: Thế năng -->
      <g transform="translate(370, 15)">
        <rect x="0" y="0" width="325" height="105" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1"/>
        <text x="162" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">THẾ NĂNG TRỌNG TRƯỜNG</text>
        <!-- Cột độ cao h -->
        <line x1="45" y1="35" x2="45" y2="90" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
        <line x1="38" y1="90" x2="52" y2="90" stroke="#64748b" stroke-width="2"/>
        <circle cx="45" cy="38" r="12" fill="#10b981"/>
        <text x="45" y="42" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">m</text>
        <text x="65" y="65" font-size="10" font-weight="bold" fill="#64748b">h</text>
        <text x="220" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">W_t = m · g · h</text>
        <text x="220" y="75" text-anchor="middle" font-size="9" fill="#475569">g ≈ 10 N/kg • mốc tại mặt đất</text>
      </g>
    </svg>
  `,

  // Bài 3: Cơ năng & Bảo toàn cơ năng
  3: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.2"/>
      <path d="M 60 30 Q 180 115 360 115 T 660 30" fill="none" stroke="#a855f7" stroke-width="2.5" stroke-dasharray="5,3"/>
      <!-- Vị trí A -->
      <circle cx="60" cy="30" r="12" fill="#ef4444"/>
      <text x="60" y="34" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">A</text>
      <text x="60" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">Đỉnh A: Wt max, Wđ=0</text>
      <!-- Vị trí Cân bằng O -->
      <circle cx="360" cy="115" r="12" fill="#10b981"/>
      <text x="360" y="119" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">O</text>
      <text x="360" y="100" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">Đáy O: Wđ max, Wt=0</text>
      <!-- Vị trí B -->
      <circle cx="660" cy="30" r="12" fill="#ef4444"/>
      <text x="660" y="34" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">B</text>
      <text x="660" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">Đỉnh B: Wt max, Wđ=0</text>
      <!-- Hộp trung tâm -->
      <rect x="230" y="38" width="260" height="32" rx="6" fill="#ffffff" stroke="#9333ea" stroke-width="1.2"/>
      <text x="360" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#6b21a8">CƠ NĂNG: W = W_đ + W_t = const</text>
    </svg>
  `,

  // Bài 4: Công & Công suất
  4: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
      <!-- Khối vật chịu lực kéo F hợp góc alpha -->
      <line x1="30" y1="100" x2="420" y2="100" stroke="#94a3b8" stroke-width="2"/>
      <rect x="70" y="60" width="60" height="40" rx="4" fill="#60a5fa" stroke="#2563eb" stroke-width="1.5"/>
      <circle cx="100" cy="80" r="3" fill="#1e293b"/>
      <!-- Lực kéo F xiên góc alpha -->
      <line x1="100" y1="80" x2="200" y2="35" stroke="#ef4444" stroke-width="2.5"/>
      <polygon points="200,35 190,38 193,48" fill="#ef4444"/>
      <text x="185" y="28" font-size="11" font-weight="bold" fill="#dc2626">Lực kéo F</text>
      <!-- Góc alpha -->
      <line x1="100" y1="80" x2="190" y2="80" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,2"/>
      <path d="M 130 80 A 30 30 0 0 0 126 68" fill="none" stroke="#d97706" stroke-width="1.5"/>
      <text x="135" y="75" font-size="9" font-weight="bold" fill="#b45309">α</text>
      <!-- Quãng đường s -->
      <line x1="70" y1="115" x2="350" y2="115" stroke="#2563eb" stroke-width="1.5"/>
      <text x="210" y="125" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1d4ed8">Quãng đường dịch chuyển s —></text>
      <!-- Bảng công thức bên phải -->
      <rect x="440" y="18" width="250" height="98" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <text x="565" y="42" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">CÔNG &amp; CÔNG SUẤT</text>
      <text x="460" y="68" font-size="11" font-weight="bold" fill="#2563eb">A = F · s · cos(α) (J)</text>
      <text x="460" y="92" font-size="11" font-weight="bold" fill="#059669">P = A / t = F · v (W)</text>
      <text x="460" y="108" font-size="8.5" fill="#64748b">1 kW = 1000 W • 1 J = 1 N.m</text>
    </svg>
  `,

  // Bài 5: Khúc xạ ánh sáng
  5: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.2"/>
      <!-- Mặt nước phân cách -->
      <rect x="10" y="65" width="700" height="60" fill="#e0f2fe"/>
      <line x1="10" y1="65" x2="710" y2="65" stroke="#0284c7" stroke-width="1.8"/>
      <!-- Pháp tuyến N-N' -->
      <line x1="360" y1="15" x2="360" y2="120" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,2"/>
      <!-- Tia tới SI -->
      <line x1="220" y1="18" x2="360" y2="65" stroke="#ea580c" stroke-width="2.5"/>
      <polygon points="295,43 304,38 300,48" fill="#ea580c"/>
      <text x="205" y="25" font-size="10" font-weight="bold" fill="#ea580c">Tia tới S</text>
      <text x="335" y="48" font-size="9.5" font-weight="bold" fill="#ea580c">Góc i</text>
      <!-- Tia khúc xạ IR -->
      <line x1="360" y1="65" x2="450" y2="118" stroke="#059669" stroke-width="2.5"/>
      <polygon points="410,95 419,90 415,100" fill="#059669"/>
      <text x="465" y="115" font-size="10" font-weight="bold" fill="#059669">Tia khúc xạ R (r &lt; i)</text>
      <text x="370" y="95" font-size="9.5" font-weight="bold" fill="#059669">Góc r</text>
      <!-- Nhãn môi trường & công thức -->
      <text x="25" y="32" font-size="9.5" font-weight="bold" fill="#0369a1">Không khí (n1 ≈ 1)</text>
      <text x="25" y="95" font-size="9.5" font-weight="bold" fill="#0369a1">Nước (n2 ≈ 1.33)</text>
      <rect x="540" y="25" width="160" height="45" rx="6" fill="#ffffff" stroke="#0284c7" stroke-width="1"/>
      <text x="620" y="43" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0284c7">ĐỊNH LUẬT KHÚC XẠ</text>
      <text x="620" y="58" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">n1·sin(i) = n2·sin(r)</text>
    </svg>
  `,

  // Bài 6: Phản xạ toàn phần
  6: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <line x1="20" y1="65" x2="700" y2="65" stroke="#3b82f6" stroke-width="1.8"/>
      <!-- 3 trường hợp -->
      <g transform="translate(40, 20)">
        <text x="90" y="15" text-anchor="middle" font-size="10" font-weight="bold" fill="#334155">1. i &lt; igh (Có khúc xạ)</text>
        <line x1="90" y1="20" x2="90" y2="90" stroke="#94a3b8" stroke-dasharray="2,2"/>
        <line x1="40" y1="85" x2="90" y2="45" stroke="#ea580c" stroke-width="2"/>
        <line x1="90" y1="45" x2="160" y2="25" stroke="#059669" stroke-width="2"/>
      </g>
      <g transform="translate(260, 20)">
        <text x="90" y="15" text-anchor="middle" font-size="10" font-weight="bold" fill="#d97706">2. i = igh (Tia đi là là r=90°)</text>
        <line x1="90" y1="20" x2="90" y2="90" stroke="#94a3b8" stroke-dasharray="2,2"/>
        <line x1="30" y1="85" x2="90" y2="45" stroke="#ea580c" stroke-width="2"/>
        <line x1="90" y1="45" x2="170" y2="45" stroke="#059669" stroke-width="2.5"/>
      </g>
      <g transform="translate(480, 20)">
        <text x="90" y="15" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">3. i &gt; igh (PHẢN XẠ TOÀN PHẦN)</text>
        <line x1="90" y1="20" x2="90" y2="90" stroke="#94a3b8" stroke-dasharray="2,2"/>
        <line x1="25" y1="85" x2="90" y2="45" stroke="#dc2626" stroke-width="2.5"/>
        <line x1="90" y1="45" x2="155" y2="85" stroke="#dc2626" stroke-width="2.5"/>
      </g>
      <text x="360" y="122" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0284c7">Điều kiện: n1 &gt; n2 và i ≥ igh với sin(igh) = n2 / n1 (Cáp quang viễn thông)</text>
    </svg>
  `,

  // Bài 7: Lăng kính
  7: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.2"/>
      <!-- Lăng kính tam giác thủy tinh -->
      <polygon points="300,20 220,115 380,115" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Chùm sáng trắng tới -->
      <line x1="60" y1="75" x2="250" y2="75" stroke="#ffffff" stroke-width="3"/>
      <text x="140" y="65" font-size="10" font-weight="bold" fill="#ffffff">Ánh sáng trắng</text>
      <!-- Dải tán sắc ló ra đáy -->
      <line x1="330" y1="70" x2="640" y2="45" stroke="#ef4444" stroke-width="2"/>
      <text x="650" y="48" font-size="9" font-weight="bold" fill="#ef4444">Đỏ (lệch ít nhất)</text>
      <line x1="332" y1="73" x2="640" y2="60" stroke="#f59e0b" stroke-width="2"/>
      <line x1="334" y1="76" x2="640" y2="75" stroke="#eab308" stroke-width="2"/>
      <line x1="336" y1="79" x2="640" y2="90" stroke="#10b981" stroke-width="2"/>
      <line x1="338" y1="82" x2="640" y2="105" stroke="#06b6d4" stroke-width="2"/>
      <line x1="340" y1="85" x2="640" y2="120" stroke="#8b5cf6" stroke-width="2"/>
      <text x="650" y="122" font-size="9" font-weight="bold" fill="#a855f7">Tím (lệch nhiều nhất)</text>
    </svg>
  `,

  // Bài 8: Thấu kính
  8: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.2"/>
      <!-- Nửa trái: Thấu kính hội tụ -->
      <g transform="translate(30, 10)">
        <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#6b21a8">THẤU KÍNH HỘI TỤ (Rìa mỏng)</text>
        <line x1="20" y1="65" x2="280" y2="65" stroke="#6b21a8" stroke-width="1"/>
        <line x1="150" y1="25" x2="150" y2="105" stroke="#9333ea" stroke-width="2.5"/>
        <polygon points="150,25 145,33 155,33" fill="#9333ea"/>
        <polygon points="150,105 145,97 155,97" fill="#9333ea"/>
        <!-- Chùm tia hội tụ -->
        <line x1="40" y1="45" x2="150" y2="45" stroke="#ea580c" stroke-width="1.5"/>
        <line x1="150" y1="45" x2="230" y2="65" stroke="#ea580c" stroke-width="1.5"/>
        <line x1="40" y1="85" x2="150" y2="85" stroke="#ea580c" stroke-width="1.5"/>
        <line x1="150" y1="85" x2="230" y2="65" stroke="#ea580c" stroke-width="1.5"/>
        <circle cx="230" cy="65" r="3" fill="#dc2626"/>
        <text x="230" y="80" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#dc2626">F' (thật)</text>
      </g>
      <!-- Nửa phải: Thấu kính phân kì -->
      <g transform="translate(380, 10)">
        <text x="150" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">THẤU KÍNH PHÂN KÌ (Rìa dày)</text>
        <line x1="20" y1="65" x2="280" y2="65" stroke="#0369a1" stroke-width="1"/>
        <line x1="150" y1="25" x2="150" y2="105" stroke="#0284c7" stroke-width="2.5"/>
        <polygon points="150,25 145,17 155,17" fill="#0284c7"/>
        <polygon points="150,105 145,113 155,113" fill="#0284c7"/>
        <!-- Chùm tia phân kì -->
        <line x1="40" y1="45" x2="150" y2="45" stroke="#0284c7" stroke-width="1.5"/>
        <line x1="150" y1="45" x2="260" y2="30" stroke="#0284c7" stroke-width="1.5"/>
        <line x1="40" y1="85" x2="150" y2="85" stroke="#0284c7" stroke-width="1.5"/>
        <line x1="150" y1="85" x2="260" y2="100" stroke="#0284c7" stroke-width="1.5"/>
        <circle cx="90" cy="65" r="3" fill="#0284c7"/>
        <text x="90" y="80" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0284c7">F' (ảo)</text>
      </g>
    </svg>
  `,

  // Bài 9: Thực hành đo tiêu cự
  9: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <!-- Băng ghế quang học thẳng -->
      <rect x="40" y="85" width="640" height="15" rx="3" fill="#cbd5e1"/>
      <text x="360" y="118" text-anchor="middle" font-size="10" font-weight="bold" fill="#475569">GIÁ QUANG HỌC CÓ VẠCH CHIA MI-LI-MÉT (KHOẢNG CÁCH L = 4f)</text>
      <!-- Vật AB tại x = 120 -->
      <line x1="120" y1="85" x2="120" y2="40" stroke="#2563eb" stroke-width="3"/>
      <polygon points="120,40 115,48 125,48" fill="#2563eb"/>
      <text x="120" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Vật AB (chữ F)</text>
      <!-- Thấu kính hội tụ tại x = 360 -->
      <line x1="360" y1="25" x2="360" y2="85" stroke="#9333ea" stroke-width="2.5"/>
      <text x="360" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#7e22ce">Thấu kính (d = 2f)</text>
      <!-- Màn hứng tại x = 600 -->
      <rect x="595" y="35" width="10" height="50" fill="#e2e8f0" stroke="#475569" stroke-width="1"/>
      <line x1="600" y1="85" x2="600" y2="40" stroke="#dc2626" stroke-width="3"/>
      <polygon points="600,85 595,77 605,77" fill="#dc2626"/>
      <text x="600" y="30" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">Màn (ảnh A'B' = AB)</text>
      <!-- Kích thước L = 4f -->
      <line x1="120" y1="65" x2="600" y2="65" stroke="#ea580c" stroke-width="1.2" stroke-dasharray="4,2"/>
      <text x="360" y="60" text-anchor="middle" font-size="11" font-weight="bold" fill="#ea580c">L = 4f => f ≈ L / 4</text>
    </svg>
  `,

  // Bài 10: Kính lúp & Bài tập thấu kính
  10: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
      <!-- Mô hình kính lúp ngắm chừng -->
      <circle cx="280" cy="65" r="40" fill="none" stroke="#2563eb" stroke-width="4"/>
      <line x1="308" y1="93" x2="360" y2="125" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
      <!-- Vật nhỏ trong khoảng tiêu cự -->
      <line x1="240" y1="65" x2="240" y2="52" stroke="#475569" stroke-width="2.5"/>
      <text x="240" y="47" text-anchor="middle" font-size="8.5">Vật AB</text>
      <!-- Ảnh ảo phóng to A'B' -->
      <line x1="160" y1="65" x2="160" y2="25" stroke="#2563eb" stroke-width="3.5" stroke-dasharray="4,2"/>
      <text x="160" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Ảnh ảo A'B' lớn hơn</text>
      <!-- Hộp công thức bội giác -->
      <rect x="420" y="20" width="270" height="95" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.2"/>
      <text x="555" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">SỐ BỘI GIÁC KÍNH LÚP</text>
      <text x="555" y="68" text-anchor="middle" font-size="13" font-weight="bold" fill="#2563eb">G = 25 / f (cm)</text>
      <text x="555" y="90" text-anchor="middle" font-size="9" fill="#475569">Ví dụ: Kính lúp 5x => f = 25/5 = 5 cm</text>
      <text x="555" y="104" text-anchor="middle" font-size="8.5" fill="#64748b">Vật đặt trong tiêu cự (d &lt; f) cho ảnh ảo cùng chiều</text>
    </svg>
  `,

  // Bài 11: Điện trở & Định luật Ohm
  11: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <!-- Sơ đồ mạch điện đo Ohm -->
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="280" height="95" rx="8" fill="#ffffff" stroke="#64748b" stroke-width="1"/>
        <text x="140" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#334155">MẠCH ĐO ĐỊNH LUẬT OHM</text>
        <rect x="110" y="40" width="55" height="18" rx="2" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.5"/>
        <text x="137" y="53" text-anchor="middle" font-size="9" font-weight="bold">R</text>
        <circle cx="50" cy="49" r="11" fill="#fff" stroke="#ef4444" stroke-width="1.2"/>
        <text x="50" y="53" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">A</text>
        <circle cx="137" cy="80" r="11" fill="#fff" stroke="#3b82f6" stroke-width="1.2"/>
        <text x="137" y="84" text-anchor="middle" font-size="9" font-weight="bold" fill="#3b82f6">V</text>
      </g>
      <!-- Đồ thị U-I và công thức -->
      <g transform="translate(340, 20)">
        <rect x="0" y="0" width="345" height="95" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <line x1="30" y1="80" x2="130" y2="80" stroke="#1e293b" stroke-width="1.5"/>
        <line x1="30" y1="80" x2="30" y2="15" stroke="#1e293b" stroke-width="1.5"/>
        <line x1="30" y1="80" x2="120" y2="25" stroke="#10b981" stroke-width="2"/>
        <text x="135" y="83" font-size="9" font-weight="bold">I (A)</text>
        <text x="25" y="12" font-size="9" font-weight="bold">U (V)</text>
        <text x="240" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">I = U / R  <=>  U = I · R</text>
        <text x="240" y="60" text-anchor="middle" font-size="11" font-weight="bold" fill="#4f46e5">R = ρ · (ℓ / S)</text>
        <text x="240" y="80" text-anchor="middle" font-size="8.5" fill="#64748b">ρ: điện trở suất (Ω.m) • ℓ: chiều dài (m) • S (m²)</text>
      </g>
    </svg>
  `,

  // Bài 12: Mạch nối tiếp vs Song song
  12: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.2"/>
      <!-- Nửa trái: Mạch nối tiếp -->
      <g transform="translate(25, 15)">
        <rect x="0" y="0" width="320" height="105" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1"/>
        <text x="160" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">MẠCH NỐI TIẾP (SERIES)</text>
        <rect x="40" y="40" width="45" height="18" fill="#dcfce7" stroke="#16a34a" stroke-width="1.2"/>
        <text x="62" y="53" text-anchor="middle" font-size="9" font-weight="bold">R1</text>
        <line x1="85" y1="49" x2="115" y2="49" stroke="#1e293b" stroke-width="1.5"/>
        <rect x="115" y="40" width="45" height="18" fill="#dcfce7" stroke="#16a34a" stroke-width="1.2"/>
        <text x="137" y="53" text-anchor="middle" font-size="9" font-weight="bold">R2</text>
        <text x="235" y="45" font-size="10" font-weight="bold" fill="#15803d">• I = I1 = I2</text>
        <text x="235" y="65" font-size="10" font-weight="bold" fill="#15803d">• U = U1 + U2</text>
        <text x="235" y="85" font-size="10" font-weight="bold" fill="#15803d">• Rtđ = R1 + R2</text>
      </g>
      <!-- Nửa phải: Mạch song song -->
      <g transform="translate(375, 15)">
        <rect x="0" y="0" width="320" height="105" rx="8" fill="#ffffff" stroke="#0ea5e9" stroke-width="1"/>
        <text x="160" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">MẠCH SONG SONG (PARALLEL)</text>
        <rect x="50" y="35" width="45" height="16" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.2"/>
        <text x="72" y="47" text-anchor="middle" font-size="8.5" font-weight="bold">R1</text>
        <rect x="50" y="65" width="45" height="16" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.2"/>
        <text x="72" y="77" text-anchor="middle" font-size="8.5" font-weight="bold">R2</text>
        <text x="180" y="45" font-size="10" font-weight="bold" fill="#0369a1">• U = U1 = U2</text>
        <text x="180" y="65" font-size="10" font-weight="bold" fill="#0369a1">• I = I1 + I2</text>
        <text x="180" y="85" font-size="10" font-weight="bold" fill="#0369a1">• Rtđ = (R1·R2)/(R1+R2)</text>
      </g>
    </svg>
  `,

  // Bài 13: Năng lượng điện & Công suất
  13: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="1.2"/>
      <!-- Công tơ điện kWh -->
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="160" height="95" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
        <text x="80" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">CÔNG TƠ ĐIỆN</text>
        <rect x="25" y="35" width="110" height="25" fill="#1e293b" rx="3"/>
        <text x="80" y="52" text-anchor="middle" font-size="12" font-family="monospace" font-weight="bold" fill="#4ade80">0 1 5 8 . 4</text>
        <text x="80" y="78" text-anchor="middle" font-size="9" font-weight="bold" fill="#d97706">kWh (Số điện)</text>
      </g>
      <!-- Hộp công thức & quy đổi -->
      <g transform="translate(230, 20)">
        <rect x="0" y="0" width="455" height="95" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="227" y="25" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0f172a">ĐIỆN NĂNG &amp; CÔNG SUẤT TIÊU THỤ</text>
        <text x="20" y="55" font-size="11" font-weight="bold" fill="#2563eb">A = U · I · t = P · t</text>
        <text x="240" y="55" font-size="11" font-weight="bold" fill="#dc2626">P = U · I = I² · R = U² / R</text>
        <text x="20" y="80" font-size="10.5" font-weight="bold" fill="#059669">Quy đổi: 1 kWh = 1000 W × 3600 s = 3.600.000 J (3,6 × 10⁶ J)</text>
      </g>
    </svg>
  `,

  // Bài 14: Cảm ứng điện từ & Máy phát điện AC
  14: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
      <!-- Nam châm N-S dịch chuyển -->
      <g transform="translate(60, 45)">
        <rect x="0" y="0" width="60" height="30" fill="#ef4444" rx="3"/>
        <text x="30" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">N</text>
        <rect x="60" y="0" width="60" height="30" fill="#3b82f6" rx="3"/>
        <text x="90" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">S</text>
        <line x1="130" y1="15" x2="175" y2="15" stroke="#d97706" stroke-width="2.5"/>
        <polygon points="175,15 167,10 167,20" fill="#d97706"/>
      </g>
      <!-- Cuộn dây và đèn LED xoay chiều -->
      <g transform="translate(280, 20)">
        <ellipse cx="40" cy="45" rx="25" ry="38" fill="none" stroke="#b45309" stroke-width="2.5"/>
        <ellipse cx="65" cy="45" rx="25" ry="38" fill="none" stroke="#b45309" stroke-width="2.5"/>
        <ellipse cx="90" cy="45" rx="25" ry="38" fill="none" stroke="#b45309" stroke-width="2.5"/>
        <text x="65" y="98" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">Cuộn dây kín</text>
      </g>
      <g transform="translate(450, 25)">
        <rect x="0" y="0" width="235" height="85" rx="6" fill="#ffffff" stroke="#3b82f6" stroke-width="1"/>
        <text x="117" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">NGUYÊN LÍ MÁY PHÁT ĐIỆN AC</text>
        <text x="15" y="44" font-size="9" fill="#334155">• Từ thông qua cuộn dây biến thiên</text>
        <text x="15" y="60" font-size="9" fill="#334155">• Cơ năng quay -> Điện năng xoay chiều</text>
        <text x="15" y="76" font-size="9" font-weight="bold" fill="#059669">• Dòng điện đổi chiều luân phiên</text>
      </g>
    </svg>
  `,

  // Bài 15: Tác dụng dòng điện xoay chiều
  15: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#ef4444" stroke-width="1.2"/>
        <text x="75" y="30" text-anchor="middle" font-size="16">♨️</text>
        <text x="75" y="58" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b91c1c">TÁC DỤNG NHIỆT</text>
        <text x="75" y="78" text-anchor="middle" font-size="8.5" fill="#64748b">Bàn là, ấm điện, bếp từ</text>
      </g>
      <g transform="translate(195, 20)">
        <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#eab308" stroke-width="1.2"/>
        <text x="75" y="30" text-anchor="middle" font-size="16">💡</text>
        <text x="75" y="58" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#a16207">TÁC DỤNG QUANG</text>
        <text x="75" y="78" text-anchor="middle" font-size="8.5" fill="#64748b">Đèn LED, huỳnh quang</text>
      </g>
      <g transform="translate(365, 20)">
        <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.2"/>
        <text x="75" y="30" text-anchor="middle" font-size="16">🧲</text>
        <text x="75" y="58" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">TÁC DỤNG TỪ</text>
        <text x="75" y="78" text-anchor="middle" font-size="8.5" fill="#64748b">Động cơ điện, biến áp</text>
      </g>
      <g transform="translate(535, 20)">
        <rect x="0" y="0" width="160" height="95" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="1.2"/>
        <text x="80" y="30" text-anchor="middle" font-size="16">⚡</text>
        <text x="80" y="58" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">TÁC DỤNG SINH LÍ</text>
        <text x="80" y="78" text-anchor="middle" font-size="8.5" fill="#64748b">Nguy hiểm điện lưới 220V</text>
      </g>
    </svg>
  `,

  // Bài 16: Vòng năng lượng Trái Đất & Nhiên liệu hóa thạch
  16: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <circle cx="45" cy="45" r="25" fill="#f59e0b"/>
        <text x="45" y="50" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Mặt Trời</text>
      </g>
      <line x1="110" y1="65" x2="180" y2="65" stroke="#f59e0b" stroke-width="2.5"/>
      <polygon points="180,65 170,60 170,70" fill="#f59e0b"/>
      <g transform="translate(190, 25)">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
        <text x="60" y="30" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">CÂY XANH</text>
        <text x="60" y="50" text-anchor="middle" font-size="8.5">Quang hợp tích lũy</text>
        <text x="60" y="66" text-anchor="middle" font-size="8.5">hóa năng sinh khối</text>
      </g>
      <line x1="320" y1="65" x2="380" y2="65" stroke="#16a34a" stroke-width="2.5"/>
      <polygon points="380,65 370,60 370,70" fill="#16a34a"/>
      <g transform="translate(390, 25)">
        <rect x="0" y="0" width="130" height="80" rx="6" fill="#f1f5f9" stroke="#475569" stroke-width="1"/>
        <text x="65" y="30" text-anchor="middle" font-size="10" font-weight="bold" fill="#334155">ĐỊA CHẤT TRIỆU NĂM</text>
        <text x="65" y="50" text-anchor="middle" font-size="8.5">Chôn vùi yếm khí</text>
        <text x="65" y="66" text-anchor="middle" font-size="8.5">Than đá, dầu mỏ</text>
      </g>
      <line x1="530" y1="65" x2="570" y2="65" stroke="#dc2626" stroke-width="2.5"/>
      <polygon points="570,65 560,60 560,70" fill="#dc2626"/>
      <g transform="translate(580, 25)">
        <rect x="0" y="0" width="115" height="80" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
        <text x="57" y="30" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">ĐỐT CHÁY</text>
        <text x="57" y="50" text-anchor="middle" font-size="8.5">Phát thải CO2</text>
        <text x="57" y="66" text-anchor="middle" font-size="8.5">Hiệu ứng nhà kính</text>
      </g>
    </svg>
  `,

  // Bài 17: Năng lượng tái tạo
  17: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.2"/>
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1.2"/>
        <text x="75" y="30" text-anchor="middle" font-size="16">☀️</text>
        <text x="75" y="55" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b45309">ĐIỆN MẶT TRỜI</text>
        <text x="75" y="75" text-anchor="middle" font-size="8.5" fill="#64748b">Pin quang điện sạch</text>
      </g>
      <g transform="translate(195, 20)">
        <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#0ea5e9" stroke-width="1.2"/>
        <text x="75" y="30" text-anchor="middle" font-size="16">💨</text>
        <text x="75" y="55" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0369a1">ĐIỆN GIÓ</text>
        <text x="75" y="75" text-anchor="middle" font-size="8.5" fill="#64748b">Turbine động năng gió</text>
      </g>
      <g transform="translate(365, 20)">
        <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.2"/>
        <text x="75" y="30" text-anchor="middle" font-size="16">🌊</text>
        <text x="75" y="55" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">THỦY ĐIỆN</text>
        <text x="75" y="75" text-anchor="middle" font-size="8.5" fill="#64748b">Thế năng nước hồ cao</text>
      </g>
      <g transform="translate(535, 20)">
        <rect x="0" y="0" width="160" height="95" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.2"/>
        <text x="80" y="30" text-anchor="middle" font-size="16">🌱</text>
        <text x="80" y="55" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">SINH KHỐI &amp; BIOGAS</text>
        <text x="80" y="75" text-anchor="middle" font-size="8.5" fill="#64748b">Phụ phẩm nông nghiệp</text>
      </g>
    </svg>
  `
};
