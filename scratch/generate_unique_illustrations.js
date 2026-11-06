// Module: generate_unique_illustrations.js
// Tạo 18 bức tranh minh họa nghệ thuật vector (SVG) độc bản, tinh tế, đúng chuẩn từng bài học SGK Mĩ Thuật 7

function getArtworkSVG(lessonId) {
  switch (lessonId) {
    case "mt-bai-1":
      // Bài 1: Quý bà và con chồn (Da Vinci) & Tượng David (Michelangelo)
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bg_davinci" cx="70%" cy="30%" r="80%">
            <stop offset="0%" stop-color="#2a2421"/>
            <stop offset="100%" stop-color="#0d0b0a"/>
          </radialGradient>
          <linearGradient id="skin_tone" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fde8d7"/>
            <stop offset="70%" stop-color="#e2b99b"/>
            <stop offset="100%" stop-color="#a67c5b"/>
          </linearGradient>
          <linearGradient id="ermine_fur" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="60%" stop-color="#f1f5f9"/>
            <stop offset="100%" stop-color="#cbd5e1"/>
          </linearGradient>
          <linearGradient id="marble" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f8fafc"/>
            <stop offset="50%" stop-color="#e2e8f0"/>
            <stop offset="100%" stop-color="#94a3b8"/>
          </linearGradient>
        </defs>
        <rect width="400" height="280" fill="url(#bg_davinci)"/>
        
        <!-- Khung tranh Phục Hưng -->
        <rect x="8" y="8" width="384" height="264" rx="8" fill="none" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4 2" opacity="0.6"/>

        <!-- Trái: Phác họa tượng David (Cẩm thạch) -->
        <g transform="translate(45, 35)">
          <text x="50" y="15" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="bold" letter-spacing="1">TƯỢNG DAVID</text>
          <!-- Bệ đá -->
          <rect x="25" y="195" width="50" height="15" rx="3" fill="#475569"/>
          <!-- Thân tượng cẩm thạch -->
          <ellipse cx="50" cy="50" rx="14" ry="18" fill="url(#marble)"/>
          <path d="M 42 66 L 36 120 L 44 195 L 56 195 L 64 120 L 58 66 Z" fill="url(#marble)"/>
          <!-- Tay giữ dây ném đá vắt vai -->
          <path d="M 38 75 C 22 95, 20 120, 32 135 C 36 125, 42 95, 42 75 Z" fill="#cbd5e1"/>
          <path d="M 60 75 C 75 90, 80 115, 70 130 C 65 120, 60 95, 60 75 Z" fill="#cbd5e1"/>
          <text x="50" y="225" text-anchor="middle" fill="#94a3b8" font-size="8.5">Michelangelo (1501)</text>
        </g>

        <!-- Ngăn cách thẩm mĩ -->
        <line x1="170" y1="25" x2="170" y2="255" stroke="#451a03" stroke-width="1.5" stroke-dasharray="3 3"/>

        <!-- Phải: Quý bà và con chồn (Chiaroscuro) -->
        <g transform="translate(195, 25)">
          <text x="90" y="15" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="bold" letter-spacing="1">QUÝ BÀ &amp; CON CHỒN</text>
          <!-- Ánh sáng hắt từ bên phải -->
          <ellipse cx="100" cy="70" rx="28" ry="36" fill="url(#skin_tone)"/>
          <!-- Tóc rẽ ngôi kiểu Phục Hưng -->
          <path d="M 74 65 C 75 40, 125 40, 126 65 C 120 50, 80 50, 74 65 Z" fill="#3f2e24"/>
          <rect x="73" y="65" width="54" height="4" fill="#1c1917" rx="2"/>
          <!-- Váy dạ hội đỏ viền nhung vàng -->
          <path d="M 65 105 C 50 150, 40 210, 40 215 L 160 215 C 160 210, 150 150, 135 105 Z" fill="#881337"/>
          <path d="M 80 105 L 120 105 L 115 140 L 85 140 Z" fill="#0284c7"/>
          <path d="M 75 105 C 100 130, 100 130, 125 105" stroke="#fbbf24" stroke-width="2" fill="none"/>
          <!-- Con chồn trắng trong lòng -->
          <path d="M 85 145 C 70 140, 65 165, 80 180 C 105 195, 145 175, 135 150 C 130 135, 100 140, 85 145 Z" fill="url(#ermine_fur)"/>
          <circle cx="75" cy="155" r="3" fill="#0f172a"/>
          <polygon points="68,160 74,158 72,163" fill="#f43f5e"/>
          <!-- Vệt sáng Chiaroscuro -->
          <text x="100" y="235" text-anchor="middle" fill="#fb7185" font-size="8.5">Leonardo da Vinci (1489)</text>
        </g>
      </svg>`;

    case "mt-bai-2":
      // Bài 2: Gốm Syria & Thảm dệt Ottoman Thổ Nhĩ Kỳ
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#180e0a"/>
        <rect x="10" y="10" width="380" height="260" rx="8" fill="#2d150d" stroke="#f59e0b" stroke-width="1.5"/>
        
        <!-- Bát gốm Syria TK XIV men ngọc lam -->
        <g transform="translate(35, 40)">
          <text x="65" y="15" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="bold">BÁT GỐM MEN SYRIA</text>
          <!-- Bát gốm -->
          <ellipse cx="65" cy="90" rx="55" ry="25" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
          <path d="M 10 90 C 15 150, 115 150, 120 90 Z" fill="#0369a1" stroke="#0284c7" stroke-width="2"/>
          <!-- Đế bát -->
          <ellipse cx="65" cy="145" rx="25" ry="8" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1"/>
          <!-- Họa tiết hoa văn 4 thùy Syria -->
          <circle cx="65" cy="115" r="14" fill="#075985" stroke="#bae6fd" stroke-width="1.5"/>
          <path d="M 65 101 L 65 129 M 51 115 L 79 115" stroke="#f0f9ff" stroke-width="1.5"/>
          <circle cx="65" cy="115" r="4" fill="#f59e0b"/>
          <text x="65" y="185" text-anchor="middle" fill="#7dd3fc" font-size="8.5">Hoa văn men xanh Cobalt</text>
        </g>

        <!-- Đường ngăn cách -->
        <line x1="180" y1="25" x2="180" y2="255" stroke="#78350f" stroke-width="1.5" stroke-dasharray="4 2"/>

        <!-- Thảm dệt Thổ Nhĩ Kỳ TK XVI -->
        <g transform="translate(205, 30)">
          <text x="85" y="15" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="bold">THẢM DỆT OTTOMAN</text>
          <!-- Thảm đỏ viền vàng hoa văn đối xứng -->
          <rect x="15" y="30" width="140" height="180" rx="4" fill="#991b1b" stroke="#f59e0b" stroke-width="2"/>
          <rect x="25" y="40" width="120" height="160" fill="#7f1d1d" stroke="#fbbf24" stroke-width="1"/>
          <!-- Vòm nhọn mihrab cầu nguyện -->
          <path d="M 45 170 L 45 95 Q 85 55 125 95 L 125 170 Z" fill="#450a0a" stroke="#fcd34d" stroke-width="1.5"/>
          <!-- Đèn treo / họa tiết cẩm chướng cách điệu -->
          <circle cx="85" cy="100" r="10" fill="#f59e0b"/>
          <polygon points="85,115 80,125 90,125" fill="#fef08a"/>
          <!-- Tua rua thảm -->
          <line x1="15" y1="213" x2="155" y2="213" stroke="#fef08a" stroke-width="3" stroke-dasharray="2 3"/>
          <text x="85" y="235" text-anchor="middle" fill="#fca5a5" font-size="8.5">Nghệ thuật đối xứng Bursa</text>
        </g>
      </svg>`;

    case "mt-bai-3":
      // Bài 3: Chùa tháp Phổ Minh & Ô Quan Chưởng
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky_hist" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1e293b"/>
            <stop offset="100%" stop-color="#0f172a"/>
          </linearGradient>
        </defs>
        <rect width="400" height="280" fill="url(#sky_hist)"/>
        
        <!-- Khung tranh di tích -->
        <rect x="10" y="10" width="380" height="260" rx="8" fill="none" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="4 2"/>

        <!-- Trái: Tháp Phổ Minh (14 tầng thời Trần) -->
        <g transform="translate(30, 25)">
          <text x="65" y="15" text-anchor="middle" fill="#fde047" font-size="10" font-weight="bold">THÁP PHỔ MINH</text>
          <!-- Đế đá hoa sen -->
          <rect x="30" y="200" width="70" height="15" rx="3" fill="#475569"/>
          <!-- Các tầng tháp gạch đỏ son nhạt dần lên ngọn -->
          <rect x="35" y="175" width="60" height="25" fill="#991b1b" stroke="#7f1d1d"/>
          <rect x="38" y="155" width="54" height="20" fill="#b91c1c"/>
          <rect x="41" y="138" width="48" height="17" fill="#dc2626"/>
          <rect x="44" y="123" width="42" height="15" fill="#ef4444"/>
          <rect x="47" y="110" width="36" height="13" fill="#f87171"/>
          <rect x="50" y="99" width="30" height="11" fill="#dc2626"/>
          <rect x="53" y="90" width="24" height="9" fill="#b91c1c"/>
          <rect x="56" y="82" width="18" height="8" fill="#991b1b"/>
          <polygon points="65,65 59,82 71,82" fill="#fbbf24"/>
          <!-- Cây bồ đề chùa -->
          <circle cx="20" cy="180" r="18" fill="#14532d" opacity="0.8"/>
          <text x="65" y="235" text-anchor="middle" fill="#fef08a" font-size="8.5">Nguyễn Sáng (Sơn mài 1962)</text>
        </g>

        <!-- Ngăn cách -->
        <line x1="180" y1="25" x2="180" y2="255" stroke="#334155" stroke-width="1.5"/>

        <!-- Phải: Ô Quan Chưởng (Bùi Xuân Phái) -->
        <g transform="translate(200, 25)">
          <text x="85" y="15" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="bold">Ô QUAN CHƯỞNG</text>
          <!-- Thân cổng vòm gạch cổ -->
          <rect x="15" y="110" width="140" height="95" fill="#78350f" stroke="#451a03" stroke-width="2"/>
          <!-- Cổng vòm giữa lớn -->
          <path d="M 60 205 L 60 150 Q 85 130 110 150 L 110 205 Z" fill="#0f172a"/>
          <!-- Cổng vòm phụ hai bên -->
          <path d="M 25 205 L 25 165 Q 38 152 50 165 L 50 205 Z" fill="#1e293b"/>
          <path d="M 120 205 L 120 165 Q 133 152 145 165 L 145 205 Z" fill="#1e293b"/>
          <!-- Vọng lâu trên mái -->
          <rect x="45" y="70" width="80" height="40" fill="#92400e"/>
          <!-- Mái cong ngói ta thời Nguyễn -->
          <path d="M 35 70 Q 85 55 135 70 L 125 60 Q 85 50 45 60 Z" fill="#b45309"/>
          <!-- Rêu phong tường cổ phố cổ -->
          <path d="M 20 120 Q 35 115 45 125" stroke="#15803d" stroke-width="2" fill="none"/>
          <text x="85" y="235" text-anchor="middle" fill="#fda4af" font-size="8.5">Bùi Xuân Phái (Sơn dầu)</text>
        </g>
      </svg>`;

    case "mt-bai-4":
      // Bài 4: Bộ tem bưu chính Việt Nam 1946
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#0f172a"/>
        <!-- Tem bưu chính phóng to -->
        <g transform="translate(110, 20)">
          <!-- Răng cưa tem bưu chính xung quanh -->
          <rect x="-8" y="-8" width="196" height="246" fill="#f8fafc" rx="4"/>
          <!-- Lỗ đục răng cưa -->
          <circle cx="10" cy="-8" r="4" fill="#0f172a"/><circle cx="35" cy="-8" r="4" fill="#0f172a"/>
          <circle cx="60" cy="-8" r="4" fill="#0f172a"/><circle cx="85" cy="-8" r="4" fill="#0f172a"/>
          <circle cx="110" cy="-8" r="4" fill="#0f172a"/><circle cx="135" cy="-8" r="4" fill="#0f172a"/>
          <circle cx="160" cy="-8" r="4" fill="#0f172a"/>
          <circle cx="-8" cy="20" r="4" fill="#0f172a"/><circle cx="-8" cy="55" r="4" fill="#0f172a"/>
          <circle cx="-8" cy="90" r="4" fill="#0f172a"/><circle cx="-8" cy="125" r="4" fill="#0f172a"/>
          <circle cx="-8" cy="160" r="4" fill="#0f172a"/><circle cx="-8" cy="195" r="4" fill="#0f172a"/>

          <!-- Nền tem màu đỏ son cách mạng -->
          <rect x="0" y="0" width="180" height="230" fill="#b91c1c" stroke="#991b1b" stroke-width="2"/>
          
          <!-- Chữ VIỆT NAM DÂN CHỦ CỘNG HÒA -->
          <text x="90" y="24" text-anchor="middle" fill="#fef08a" font-size="9" font-weight="900" letter-spacing="0.5">VIỆT NAM</text>
          <text x="90" y="36" text-anchor="middle" fill="#ffffff" font-size="7.5" font-weight="bold">DÂN CHỦ CỘNG HÒA</text>
          
          <!-- Khung oval chân dung Bác Hồ -->
          <ellipse cx="90" cy="108" rx="50" ry="60" fill="#fef2f2" stroke="#f59e0b" stroke-width="2"/>
          <!-- Chân dung đồ họa tối giản Bác Hồ -->
          <ellipse cx="90" cy="85" rx="18" ry="24" fill="#fecaca"/>
          <path d="M 75 75 Q 90 60 105 75 Z" fill="#4b5563"/>
          <path d="M 85 105 Q 90 120 95 105 Z" fill="#9ca3af"/>
          <!-- Áo đại nẹp cổ cao -->
          <path d="M 60 145 C 70 120, 110 120, 120 145 Z" fill="#374151"/>
          
          <!-- Chữ BƯU CHÍNH & Giá cước -->
          <text x="90" y="190" text-anchor="middle" fill="#fde047" font-size="11" font-weight="900">BƯU CHÍNH</text>
          <rect x="40" y="198" width="100" height="22" rx="4" fill="#f59e0b"/>
          <text x="90" y="213" text-anchor="middle" fill="#78350f" font-size="11" font-weight="900">1 ĐỒNG</text>
        </g>
        <text x="200" y="265" text-anchor="middle" fill="#cbd5e1" font-size="9.5">Bộ tem Bác Hồ 1946 &bull; Họa sĩ Nguyễn Sáng thiết kế</text>
      </svg>`;

    case "mt-bai-5":
      // Bài 5: Yếu tố dân tộc trong tranh lụa & sơn mài
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#1c120c"/>
        <rect x="10" y="10" width="380" height="260" rx="8" fill="none" stroke="#fbbf24" stroke-width="1.5"/>

        <!-- Trái: Tranh lụa Nguyễn Phan Chánh (Hòa sắc nâu ấm) -->
        <g transform="translate(30, 25)">
          <text x="65" y="15" text-anchor="middle" fill="#fed7aa" font-size="10" font-weight="bold">TRANH LỤA NÂU TRẦM</text>
          <!-- Nền tấm lụa tơ tằm mềm mại -->
          <rect x="10" y="28" width="115" height="175" rx="4" fill="#78350f" stroke="#451a03"/>
          <rect x="15" y="33" width="105" height="165" fill="#9a3412" opacity="0.85"/>
          <!-- Thiếu nữ áo bà ba nâu ngồi may áo -->
          <ellipse cx="65" cy="75" rx="14" ry="18" fill="#ffedd5"/>
          <path d="M 52 70 Q 65 55 78 70 Z" fill="#1c1917"/>
          <path d="M 45 92 C 40 130, 40 160, 45 175 L 85 175 C 90 160, 90 130, 85 92 Z" fill="#431407"/>
          <!-- Đôi bàn tay thoăn thoắt -->
          <circle cx="65" cy="120" r="6" fill="#fed7aa"/>
          <text x="65" y="225" text-anchor="middle" fill="#ffedd5" font-size="8.5">Nguyễn Phan Chánh</text>
        </g>

        <!-- Ngăn cách -->
        <line x1="185" y1="25" x2="185" y2="255" stroke="#78350f" stroke-width="1.5" stroke-dasharray="3 3"/>

        <!-- Phải: Sơn mài Nguyễn Gia Trí (Vàng son vỏ trứng) -->
        <g transform="translate(205, 25)">
          <text x="80" y="15" text-anchor="middle" fill="#fde047" font-size="10" font-weight="bold">SƠN MÀI VÀNG QUỲ</text>
          <!-- Tấm vóc sơn then đen bóng -->
          <rect x="15" y="28" width="130" height="175" rx="4" fill="#0a0a0a" stroke="#d97706" stroke-width="1.5"/>
          <!-- Rặng tre vàng quỳ dát sáng lấp lánh -->
          <path d="M 30 180 Q 50 100 80 40 M 45 180 Q 70 90 110 50" stroke="#f59e0b" stroke-width="3" fill="none"/>
          <!-- Vỏ trứng ghép hình tà áo dài trắng thiếu nữ -->
          <path d="M 90 100 C 80 130, 75 160, 70 190 L 105 190 C 105 160, 105 130, 100 100 Z" fill="#fef08a"/>
          <!-- Điểm xuyết son đỏ truyền thống -->
          <circle cx="95" cy="85" r="9" fill="#fecaca"/>
          <path d="M 85 130 Q 95 125 105 130" stroke="#dc2626" stroke-width="2"/>
          <text x="80" y="225" text-anchor="middle" fill="#fde047" font-size="8.5">Nguyễn Gia Trí &bull; Vỏ trứng dát vàng</text>
        </g>
      </svg>`;

    case "mt-bai-6":
      // Bài 6: Thiết kế logo nhận diện
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#0f172a"/>
        <rect x="10" y="10" width="380" height="260" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="200" y="35" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="900">3 DẠNG CẤU TRÚC LOGO CƠ BẢN</text>

        <!-- Dạng 1: Biểu tượng trừu tượng (Icon) -->
        <g transform="translate(30, 60)">
          <rect width="100" height="140" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
          <circle cx="50" cy="55" r="28" fill="none" stroke="#06b6d4" stroke-width="4"/>
          <polygon points="50,35 68,68 32,68" fill="#38bdf8"/>
          <circle cx="50" cy="58" r="6" fill="#f59e0b"/>
          <text x="50" y="105" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="bold">BIỂU TƯỢNG</text>
          <text x="50" y="122" text-anchor="middle" fill="#94a3b8" font-size="7.5">Hình học cô đọng</text>
        </g>

        <!-- Dạng 2: Kiểu chữ cách điệu (Monogram) -->
        <g transform="translate(150, 60)">
          <rect width="100" height="140" rx="8" fill="#0f172a" stroke="#ec4899" stroke-width="1.5"/>
          <text x="50" y="70" text-anchor="middle" fill="#f43f5e" font-size="44" font-weight="900" font-family="serif">MT</text>
          <text x="50" y="105" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="bold">CHỮ CÁCH ĐIỆU</text>
          <text x="50" y="122" text-anchor="middle" fill="#94a3b8" font-size="7.5">Monogram nghệ thuật</text>
        </g>

        <!-- Dạng 3: Kết hợp Biểu tượng + Tên thương hiệu -->
        <g transform="translate(270, 60)">
          <rect width="100" height="140" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
          <!-- Biểu tượng ngọn cây xanh -->
          <path d="M 50 35 C 35 50, 35 65, 50 72 C 65 65, 65 50, 50 35 Z" fill="#10b981"/>
          <path d="M 50 48 L 50 72" stroke="#ffffff" stroke-width="1.5"/>
          <text x="50" y="92" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="900">ECO-ART</text>
          <text x="50" y="108" text-anchor="middle" fill="#ffffff" font-size="8.5" font-weight="bold">KẾT HỢP</text>
          <text x="50" y="122" text-anchor="middle" fill="#94a3b8" font-size="7.5">Hình + Typography</text>
        </g>

        <text x="200" y="245" text-anchor="middle" fill="#64748b" font-size="8.5">Nguyên lí thiết kế logo: Đơn giản &bull; Dễ nhớ &bull; Ý nghĩa biểu trưng &bull; Co giãn sắc nét</text>
      </svg>`;

    case "mt-bai-7":
      // Bài 7: Không gian trong tranh (Pieter Bruegel & Đường Dần)
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="aerial_view" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#ca8a04"/>
            <stop offset="45%" stop-color="#eab308"/>
            <stop offset="75%" stop-color="#0284c7"/>
            <stop offset="100%" stop-color="#bae6fd"/>
          </linearGradient>
        </defs>
        <rect width="400" height="280" fill="url(#aerial_view)"/>
        
        <!-- Khung tranh luật xa gần -->
        <rect x="8" y="8" width="384" height="264" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.6"/>

        <!-- Hậu cảnh: Biển và đồi xa xanh lơ mờ ảo -->
        <path d="M 0 100 Q 150 70 400 95 L 400 130 L 0 130 Z" fill="#0369a1" opacity="0.7"/>
        <path d="M 100 110 L 120 105 L 115 112 Z" fill="#f8fafc" opacity="0.6"/> <!-- Cánh buồm xa nhỏ xíu -->

        <!-- Trung cảnh: Đồi lúa mì vàng nhạt, người gặt nhỏ -->
        <path d="M 0 130 Q 200 115 400 145 L 400 200 L 0 200 Z" fill="#eab308"/>
        <!-- Người gặt lúa trung cảnh (kích thước nhỏ) -->
        <g transform="translate(180, 140) scale(0.4)">
          <circle cx="20" cy="20" r="8" fill="#78350f"/>
          <rect x="15" y="28" width="10" height="25" fill="#ffffff"/>
        </g>
        <g transform="translate(220, 145) scale(0.4)">
          <circle cx="20" cy="20" r="8" fill="#78350f"/>
          <rect x="15" y="28" width="10" height="25" fill="#ffffff"/>
        </g>

        <!-- Tiền cảnh: Cây lê to đậm, người nông dân ngồi ăn nghỉ ngơi (To & Rõ nét) -->
        <path d="M 0 185 Q 180 180 400 210 L 400 280 L 0 280 Z" fill="#a16207"/>
        <!-- Gốc cây to bên trái tiền cảnh -->
        <path d="M 20 280 L 40 80 Q 45 40 65 30 Q 75 80 50 280 Z" fill="#451a03"/>
        <circle cx="55" cy="55" r="35" fill="#15803d" opacity="0.9"/>
        <!-- Bó lúa mì to tiền cảnh -->
        <path d="M 90 220 L 110 270 L 80 270 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <path d="M 120 215 L 145 270 L 105 270 Z" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
        <!-- Nhóm người nông dân ngồi ăn dưới gốc cây tiền cảnh (Rõ nét) -->
        <ellipse cx="65" cy="235" rx="8" ry="10" fill="#fecaca"/>
        <path d="M 55 245 C 55 235, 75 235, 75 270 L 50 270 Z" fill="#1e3a8a"/>

        <rect x="15" y="15" width="230" height="24" rx="4" fill="#0f172a" opacity="0.8"/>
        <text x="25" y="31" fill="#fef08a" font-size="9" font-weight="bold">Pieter Bruegel &bull; Luật xa gần (Gần to, xa nhỏ - Gần rõ, xa mờ)</text>
      </svg>`;

    case "mt-bai-8":
      // Bài 8: Tranh tĩnh vật chì & màu nước
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#18181b"/>
        <rect x="10" y="10" width="380" height="260" rx="8" fill="#27272a" stroke="#a1a1aa" stroke-width="1"/>

        <!-- Nửa trái: Tĩnh vật chì đánh bóng 3 mảng -->
        <g transform="translate(25, 25)">
          <text x="75" y="15" text-anchor="middle" fill="#e4e4e7" font-size="9.5" font-weight="bold">1. ĐÁNH BÓNG KHỐI CHÌ</text>
          <!-- Mặt bàn chì -->
          <line x1="0" y1="160" x2="150" y2="160" stroke="#71717a" stroke-width="1.5"/>
          <!-- Bóng đổ quả cầu và khối chóp -->
          <ellipse cx="60" cy="165" rx="35" ry="10" fill="#09090b"/>
          <ellipse cx="110" cy="165" rx="25" ry="8" fill="#09090b"/>
          <!-- Khối cầu tròn diễn tả 3 mảng: sáng, trung gian, tối -->
          <circle cx="55" cy="120" r="32" fill="#d4d4d8"/>
          <!-- Mảng tối đậm khối cầu -->
          <path d="M 55 88 A 32 32 0 0 1 82 135 A 28 32 0 0 0 55 88 Z" fill="#3f3f46"/>
          <!-- Điểm sáng nhất (Highlight) -->
          <circle cx="45" cy="105" r="6" fill="#ffffff"/>
          <!-- Khối nón chóp kế bên -->
          <polygon points="110,75 90,158 130,158" fill="#a1a1aa"/>
          <polygon points="110,75 110,158 130,158" fill="#27272a"/>
          <text x="75" y="215" text-anchor="middle" fill="#a1a1aa" font-size="8">Sáng &bull; Trung gian &bull; Tối &bull; Bóng đổ</text>
        </g>

        <!-- Ngăn đôi -->
        <line x1="195" y1="20" x2="195" y2="255" stroke="#52525b" stroke-width="1.5" stroke-dasharray="3 3"/>

        <!-- Nửa phải: Tĩnh vật lọ hoa màu nước -->
        <g transform="translate(215, 25)">
          <text x="80" y="15" text-anchor="middle" fill="#f43f5e" font-size="9.5" font-weight="bold">2. HÒA SẮC MÀU NƯỚC</text>
          <!-- Nền màu nước loang êm dịu -->
          <rect x="10" y="28" width="140" height="175" rx="4" fill="#0284c7" opacity="0.3"/>
          <!-- Mặt bàn gỗ vàng ấm -->
          <path d="M 10 145 L 150 145 L 150 203 L 10 203 Z" fill="#ea580c" opacity="0.4"/>
          <!-- Lọ hoa gốm trắng bóng -->
          <path d="M 65 100 Q 80 95 95 100 L 90 155 Q 80 160 70 155 Z" fill="#f8fafc" stroke="#38bdf8" stroke-width="1.5"/>
          <!-- Cành hoa rực rỡ cắm trong lọ -->
          <circle cx="80" cy="70" r="14" fill="#f43f5e" opacity="0.9"/>
          <circle cx="60" cy="85" r="10" fill="#f59e0b" opacity="0.9"/>
          <circle cx="100" cy="80" r="12" fill="#ec4899" opacity="0.9"/>
          <!-- Quả táo đỏ trên mặt bàn bên cạnh -->
          <circle cx="120" cy="150" r="15" fill="#dc2626"/>
          <ellipse cx="125" cy="162" rx="14" ry="4" fill="#000000" opacity="0.4"/>
          <text x="80" y="215" text-anchor="middle" fill="#fda4af" font-size="8">Tương quan vật và nền hài hòa</text>
        </g>
      </svg>`;

    case "mt-bai-kt1":
      // Kiểm tra giữa kì I: Triển lãm mĩ thuật học đường
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#0f172a"/>
        <rect x="10" y="10" width="380" height="260" rx="8" fill="#1e293b" stroke="#e11d48" stroke-width="1.5"/>
        <text x="200" y="32" text-anchor="middle" fill="#fda4af" font-size="10.5" font-weight="bold">KHÔNG GIAN TRƯNG BÀY SẢN PHẨM HỌC KÌ I</text>

        <!-- Tranh treo tường khu triển lãm -->
        <rect x="35" y="55" width="80" height="65" fill="#334155" stroke="#fbbf24" stroke-width="1.5"/>
        <circle cx="75" cy="85" r="18" fill="#f43f5e"/><text x="75" y="110" text-anchor="middle" fill="#ffffff" font-size="7">Tranh tạo hình</text>

        <rect x="135" y="50" width="90" height="70" fill="#334155" stroke="#fbbf24" stroke-width="1.5"/>
        <rect x="145" y="58" width="70" height="40" fill="#0284c7"/><text x="180" y="110" text-anchor="middle" fill="#ffffff" font-size="7">Tem di tích</text>

        <rect x="245" y="55" width="80" height="65" fill="#334155" stroke="#fbbf24" stroke-width="1.5"/>
        <polygon points="285,65 305,95 265,95" fill="#10b981"/><text x="285" y="110" text-anchor="middle" fill="#ffffff" font-size="7">Thiết kế Logo</text>

        <!-- Bàn trưng bày mô hình đắp nổi phía trước -->
        <polygon points="20,165 380,165 350,230 50,230" fill="#475569" stroke="#64748b"/>
        <!-- Mô hình tượng đất nặn trên bàn -->
        <ellipse cx="120" cy="195" rx="20" ry="12" fill="#78350f"/>
        <circle cx="120" cy="180" r="10" fill="#92400e"/>
        <!-- Túi xách ứng dụng hoa văn -->
        <rect x="200" y="180" width="35" height="30" rx="3" fill="#0369a1"/>
        <path d="M 210 180 Q 217 168 225 180" stroke="#f59e0b" stroke-width="2" fill="none"/>
        <!-- Đèn chiếu rọi spotlight -->
        <polygon points="200,38 75,55 325,55" fill="#fde047" opacity="0.1"/>
        <text x="200" y="250" text-anchor="middle" fill="#94a3b8" font-size="8.5">Trưng bày theo tuyến &bull; Thuyết minh 5 bước tự tin</text>
      </svg>`;

    case "mt-bai-9":
      // Bài 9: Tìm hiểu nguồn sáng trong tranh (Monet)
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="monet_sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fda4af"/>
            <stop offset="40%" stop-color="#fed7aa"/>
            <stop offset="100%" stop-color="#e0e7ff"/>
          </linearGradient>
        </defs>
        <rect width="400" height="280" fill="url(#monet_sky)"/>
        <rect x="10" y="10" width="380" height="260" rx="8" fill="none" stroke="#e11d48" stroke-width="1.5" opacity="0.7"/>

        <!-- Mặt trời mọc hắt ánh sáng nghiêng -->
        <circle cx="340" cy="65" r="28" fill="#fbbf24" opacity="0.9"/>
        <circle cx="340" cy="65" r="45" fill="#fde047" opacity="0.25"/>

        <!-- Cánh đồng tuyết trắng ánh hồng tím -->
        <path d="M 0 160 Q 150 140 400 170 L 400 280 L 0 280 Z" fill="#e0e7ff"/>

        <!-- Đống rơm/cỏ khô lớn của Monet đón ánh sáng -->
        <!-- Bóng đổ nghiêng dài màu tím xanh về phía trái -->
        <ellipse cx="140" cy="225" rx="80" ry="18" fill="#6366f1" opacity="0.45"/>
        <!-- Đống rơm bên đón sáng (vàng cam ấm) -->
        <path d="M 160 135 C 190 140, 240 180, 235 220 L 140 220 Z" fill="#f59e0b"/>
        <!-- Đống rơm bên khuất sáng (nâu tím lạnh) -->
        <path d="M 160 135 C 130 140, 105 180, 110 220 L 160 220 Z" fill="#9a3412"/>
        <path d="M 145 135 C 160 120, 180 120, 190 135 Z" fill="#fef08a"/>

        <!-- Đống rơm nhỏ phía xa -->
        <ellipse cx="270" cy="180" rx="35" ry="8" fill="#6366f1" opacity="0.4"/>
        <path d="M 285 148 C 295 150, 315 170, 310 182 L 275 182 Z" fill="#d97706"/>
        <path d="M 285 148 C 275 150, 260 170, 265 182 L 285 182 Z" fill="#78350f"/>

        <rect x="20" y="20" width="220" height="24" rx="4" fill="#0f172a" opacity="0.7"/>
        <text x="30" y="36" fill="#ffffff" font-size="9" font-weight="bold">Claude Monet &bull; Ánh sáng mặt trời tạo bóng tím</text>
      </svg>`;

    case "mt-bai-10":
      // Bài 10: Thiết kế tạo mẫu trang phục thổ cẩm
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#0f172a"/>
        <rect x="10" y="10" width="380" height="260" rx="8" fill="#1e1b4b" stroke="#a855f7" stroke-width="1.5"/>

        <!-- Ma-nơ-canh thiết kế phom dáng chữ A -->
        <g transform="translate(130, 25)">
          <text x="70" y="15" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="bold">TẠO MẪU TRANG PHỤC THỔ CẨM</text>
          
          <!-- Đầu ma nơ canh -->
          <ellipse cx="70" cy="40" rx="10" ry="14" fill="#cbd5e1"/>
          <!-- Cổ -->
          <rect x="67" y="53" width="6" height="10" fill="#94a3b8"/>
          <!-- Thân trên áo dạ hội đen thanh lịch -->
          <path d="M 50 63 L 90 63 L 85 105 L 55 105 Z" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>
          <!-- Váy chữ A xòe rộng -->
          <path d="M 55 105 L 85 105 L 115 210 L 25 210 Z" fill="#581c87" stroke="#9333ea" stroke-width="2"/>
          
          <!-- Họa tiết hoa văn thổ cẩm quả trám ở viền ngực áo -->
          <rect x="52" y="65" width="36" height="8" fill="#db2777"/>
          <polygon points="56,69 60,65 64,69 60,73" fill="#fef08a"/>
          <polygon points="68,69 72,65 76,69 72,73" fill="#fef08a"/>
          <polygon points="80,69 84,65 88,69 84,73" fill="#fef08a"/>

          <!-- Dải thắt lưng thổ cẩm -->
          <rect x="53" y="102" width="34" height="6" fill="#f59e0b"/>

          <!-- Dải viền chân váy thổ cẩm Tây Bắc rực rỡ -->
          <rect x="27" y="185" width="86" height="22" fill="#be185d"/>
          <!-- Họa tiết zíc zắc đối xứng chân váy -->
          <polyline points="28,198 38,188 48,198 58,188 68,198 78,188 88,198 98,188 108,198" stroke="#fef08a" stroke-width="2.5" fill="none"/>
          <circle cx="48" cy="198" r="2.5" fill="#38bdf8"/>
          <circle cx="68" cy="198" r="2.5" fill="#38bdf8"/>
          <circle cx="88" cy="198" r="2.5" fill="#38bdf8"/>

          <text x="70" y="235" text-anchor="middle" fill="#e9d5ff" font-size="8.5">Ứng dụng hoa văn truyền thống vào thời trang hiện đại</text>
        </g>
      </svg>`;

    case "mt-bai-11":
      // Bài 11: Tạo hình ngôi nhà tái chế từ vật liệu sẵn có
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#14532d"/>
        <rect x="10" y="10" width="380" height="260" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>

        <!-- Bầu trời sinh thái -->
        <rect x="15" y="15" width="370" height="150" fill="#0284c7" opacity="0.4"/>
        <circle cx="330" cy="50" r="20" fill="#fde047"/>

        <!-- Mặt đất sân cỏ xanh -->
        <rect x="15" y="165" width="370" height="100" fill="#15803d"/>

        <!-- Mô hình nhà làm từ bìa carton sóng & que kem -->
        <g transform="translate(120, 70)">
          <!-- Thân nhà bằng bìa carton nâu -->
          <rect x="15" y="45" width="130" height="85" fill="#b45309" stroke="#78350f" stroke-width="2"/>
          <!-- Đường sóng gân carton -->
          <line x1="15" y1="65" x2="145" y2="65" stroke="#92400e" stroke-width="1" stroke-dasharray="3 2"/>
          <line x1="15" y1="85" x2="145" y2="85" stroke="#92400e" stroke-width="1" stroke-dasharray="3 2"/>
          <line x1="15" y1="105" x2="145" y2="105" stroke="#92400e" stroke-width="1" stroke-dasharray="3 2"/>

          <!-- Mái nhà dốc bằng que kem ghép chéo -->
          <polygon points="80,5 0,50 160,50" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
          <!-- Cửa chính bằng que kem gỗ -->
          <rect x="65" y="80" width="30" height="50" fill="#fef08a" stroke="#b45309" stroke-width="2"/>
          <circle cx="90" cy="105" r="2.5" fill="#78350f"/>
          <!-- Cửa sổ tròn gác xép -->
          <circle cx="80" cy="32" r="10" fill="#e0f2fe" stroke="#ffffff" stroke-width="2"/>

          <!-- Hàng rào sân vườn que kem -->
          <rect x="-40" y="110" width="45" height="20" fill="none" stroke="#fef08a" stroke-width="2" stroke-dasharray="8 4"/>
          <rect x="155" y="110" width="45" height="20" fill="none" stroke="#fef08a" stroke-width="2" stroke-dasharray="8 4"/>
        </g>
        <text x="200" y="250" text-anchor="middle" fill="#a7f3d0" font-size="9">Mô hình kiến trúc xanh từ vật liệu bìa carton &amp; que kem</text>
      </svg>`;

    case "mt-bai-12":
      // Bài 12: Tranh cổ động bảo vệ môi trường
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#0f172a"/>
        <!-- Poster tranh cổ động -->
        <g transform="translate(90, 15)">
          <rect width="220" height="250" rx="6" fill="#1e293b" stroke="#e11d48" stroke-width="3"/>
          
          <!-- Băng khẩu hiệu trên cùng -->
          <rect x="10" y="10" width="200" height="32" rx="4" fill="#dc2626"/>
          <text x="110" y="30" text-anchor="middle" fill="#fef08a" font-size="10" font-weight="900" letter-spacing="1">HÃY CỨU ĐẠI DƯƠNG!</text>

          <!-- Hình tượng trung tâm: Bàn tay nâng Trái Đất xanh không rác thải -->
          <circle cx="110" cy="105" r="45" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
          <!-- Lục địa xanh biếc -->
          <path d="M 90 80 Q 115 75 125 90 Q 140 100 125 125 Q 95 135 85 110 Z" fill="#22c55e"/>
          
          <!-- Chú cá heo bơi lội tự do -->
          <path d="M 85 110 Q 110 95 135 110 Q 145 105 150 95 Q 140 115 130 118 Z" fill="#ffffff"/>

          <!-- Đôi bàn tay nâng niu phía dưới -->
          <path d="M 70 170 C 70 145, 95 140, 110 148 C 125 140, 150 145, 150 170 Z" fill="#f59e0b"/>

          <!-- Khẩu hiệu hành động bên dưới -->
          <rect x="15" y="180" width="190" height="55" rx="4" fill="#065f46"/>
          <text x="110" y="200" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="bold">NÓI KHÔNG VỚI RÁC NHỰA</text>
          <text x="110" y="216" text-anchor="middle" fill="#6ee7b7" font-size="8">Chung tay vì hành tinh xanh</text>
          <text x="110" y="228" text-anchor="middle" fill="#fde047" font-size="7.5">&bull; Tương phản mạnh &bull; Thông điệp rõ ràng &bull;</text>
        </g>
      </svg>`;

    case "mt-bai-13":
      // Bài 13: In độc bản Monoprint gia đình
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#18181b"/>
        <rect x="10" y="10" width="380" height="260" rx="8" fill="#27272a" stroke="#ec4899" stroke-width="1.5"/>
        <text x="200" y="32" text-anchor="middle" fill="#f472b6" font-size="10.5" font-weight="bold">KĨ THUẬT IN ĐỘC BẢN MONOPRINT &amp; ĐẢO CHIỀU HÌNH IN</text>

        <!-- Trái: Tấm mica đã vẽ màu trực tiếp -->
        <g transform="translate(30, 48)">
          <rect width="150" height="175" rx="6" fill="#3b82f6" opacity="0.2" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="75" y="20" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="bold">1. TẤM MICA (VẼ MÀU)</text>
          <!-- Mẹ ôm con bên trái -->
          <circle cx="55" cy="70" r="16" fill="#f43f5e"/>
          <circle cx="95" cy="85" r="11" fill="#fbbf24"/>
          <path d="M 40 90 C 40 145, 80 145, 80 90 Z" fill="#e11d48"/>
          <path d="M 85 100 C 85 140, 115 140, 115 100 Z" fill="#f59e0b"/>
          <text x="75" y="160" text-anchor="middle" fill="#60a5fa" font-size="8">Mẹ bên trái &bull; Con bên phải</text>
        </g>

        <!-- Mũi tên in ép chuyển mực -->
        <g transform="translate(187, 120)">
          <polygon points="0,5 15,15 0,25" fill="#f43f5e"/>
          <text x="13" y="0" text-anchor="middle" fill="#f472b6" font-size="7.5" font-weight="bold">Ép giấy</text>
        </g>

        <!-- Phải: Bản in giấy thu được (BỊ ĐẢO CHIỀU) -->
        <g transform="translate(220, 48)">
          <rect width="150" height="175" rx="6" fill="#fdf2f8" stroke="#ec4899" stroke-width="2"/>
          <text x="75" y="20" text-anchor="middle" fill="#be185d" font-size="9" font-weight="bold">2. BẢN IN GIẤY (ĐẢO CHIỀU)</text>
          <!-- Con đảo sang trái, Mẹ đảo sang phải! -->
          <circle cx="55" cy="85" r="11" fill="#fbbf24"/>
          <circle cx="95" cy="70" r="16" fill="#f43f5e"/>
          <path d="M 45 100 C 45 140, 75 140, 75 100 Z" fill="#f59e0b"/>
          <path d="M 80 90 C 80 145, 120 145, 120 90 Z" fill="#e11d48"/>
          <!-- Vệt chất cảm loang màu nước in độc bản -->
          <circle cx="130" cy="130" r="5" fill="#fbcfe8" opacity="0.6"/>
          <text x="75" y="160" text-anchor="middle" fill="#be185d" font-size="8">Con sang trái &bull; Mẹ sang phải</text>
        </g>
        <text x="200" y="250" text-anchor="middle" fill="#a1a1aa" font-size="8.5">Đặc trưng Monoprint: Duy nhất một bản in &bull; Chất cảm nhòe màu độc đáo</text>
      </svg>`;

    case "mt-bai-14":
      // Bài 14: Thiết kế khung ảnh tái chế
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#1c1917"/>
        <rect x="10" y="10" width="380" height="260" rx="8" fill="#292524" stroke="#d97706" stroke-width="1.5"/>

        <!-- Khung ảnh chữ nhật đứng hoàn chỉnh -->
        <g transform="translate(125, 25)">
          <text x="75" y="15" text-anchor="middle" fill="#fde047" font-size="10" font-weight="bold">KHUNG ẢNH BÌA CARTON &amp; VỎ SÒ</text>
          
          <!-- Viền khung ngoài bằng bìa carton nâu -->
          <rect x="5" y="28" width="140" height="175" rx="6" fill="#78350f" stroke="#451a03" stroke-width="2"/>
          
          <!-- Lòng khung lồng ảnh -->
          <rect x="25" y="48" width="100" height="135" fill="#f8fafc" stroke="#d97706" stroke-width="1.5"/>
          <!-- Bức ảnh gia đình hạnh phúc trong khung -->
          <circle cx="65" cy="95" r="14" fill="#f43f5e"/>
          <circle cx="85" cy="98" r="12" fill="#0284c7"/>
          <circle cx="75" cy="120" r="9" fill="#f59e0b"/>
          <path d="M 45 135 C 45 110, 85 110, 85 160 L 45 160 Z" fill="#be123c"/>
          <path d="M 75 135 C 75 115, 105 115, 105 160 L 75 160 Z" fill="#1d4ed8"/>

          <!-- Hạt cúc & vỏ sò đính viền theo nhịp điệu (Trắng - Xanh - Vàng xen kẽ) -->
          <circle cx="15" cy="38" r="4" fill="#fde047"/><circle cx="35" cy="38" r="4" fill="#38bdf8"/>
          <circle cx="55" cy="38" r="4" fill="#ffffff"/><circle cx="75" cy="38" r="4" fill="#fde047"/>
          <circle cx="95" cy="38" r="4" fill="#38bdf8"/><circle cx="115" cy="38" r="4" fill="#ffffff"/>
          <circle cx="135" cy="38" r="4" fill="#fde047"/>

          <circle cx="15" cy="193" r="4" fill="#fde047"/><circle cx="35" cy="193" r="4" fill="#38bdf8"/>
          <circle cx="55" cy="193" r="4" fill="#ffffff"/><circle cx="75" cy="193" r="4" fill="#fde047"/>
          <circle cx="95" cy="193" r="4" fill="#38bdf8"/><circle cx="115" cy="193" r="4" fill="#ffffff"/>
          <circle cx="135" cy="193" r="4" fill="#fde047"/>

          <!-- Chân chống nghiêng 70 độ phía sau -->
          <text x="75" y="225" text-anchor="middle" fill="#d6d3d1" font-size="8.5">Chân đế nghiêng 70° đứng vững &bull; Nhịp điệu trang trí viền</text>
        </g>
      </svg>`;

    case "mt-bai-15":
      // Bài 15: Di sản mĩ thuật Việt Nam thời trung đại (Lý - Trần - Mạc)
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#1c1917"/>
        <rect x="10" y="10" width="380" height="260" rx="8" fill="#292524" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="200" y="32" text-anchor="middle" fill="#fbbf24" font-size="10.5" font-weight="bold">3 DI SẢN ĐIÊU KHẮC TIÊU BIỂU VIỆT NAM TRUNG ĐẠI</text>

        <!-- 1. Phù điêu lá đề phượng thời Lý (Chùa Phật Tích) -->
        <g transform="translate(25, 48)">
          <rect width="105" height="175" rx="6" fill="#1c1917" stroke="#eab308" stroke-width="1"/>
          <!-- Hình lá đề uốn lượn ngọn lửa -->
          <path d="M 52 25 Q 15 70 20 120 Q 52 145 85 120 Q 90 70 52 25 Z" fill="#451a03" stroke="#fde047" stroke-width="1.5"/>
          <!-- Đôi chim phượng uốn lượn bên trong lá đề -->
          <path d="M 35 110 Q 52 80 45 60 Q 60 75 52 105" stroke="#fbbf24" stroke-width="1.5" fill="none"/>
          <text x="52" y="150" text-anchor="middle" fill="#fde047" font-size="8.5" font-weight="bold">LÁ ĐỀ PHƯỢNG</text>
          <text x="52" y="165" text-anchor="middle" fill="#a8a29e" font-size="7.5">Thời Lý &bull; Nét mềm mại</text>
        </g>

        <!-- 2. Tượng hổ đá lăng Trần Thủ Độ (Thời Trần) -->
        <g transform="translate(145, 48)">
          <rect width="110" height="175" rx="6" fill="#1c1917" stroke="#94a3b8" stroke-width="1"/>
          <!-- Khối hổ đá xám cô đọng, cơ bắp căng tràn -->
          <ellipse cx="55" cy="100" rx="36" ry="22" fill="#64748b"/>
          <circle cx="85" cy="85" r="14" fill="#475569"/>
          <path d="M 30 115 L 20 135 L 35 135 L 45 118" fill="#475569"/>
          <path d="M 75 115 L 75 135 L 90 135 L 85 118" fill="#475569"/>
          <!-- Đuôi hổ vắt lưng -->
          <path d="M 22 95 Q 35 75 55 90" stroke="#94a3b8" stroke-width="2.5" fill="none"/>
          <text x="55" y="150" text-anchor="middle" fill="#cbd5e1" font-size="8.5" font-weight="bold">HỔ ĐÁ THỜI TRẦN</text>
          <text x="55" y="165" text-anchor="middle" fill="#a8a29e" font-size="7.5">Hào khí Đông A &bull; Khối mộc</text>
        </g>

        <!-- 3. Tượng Phật bà Quan Âm (Thời Mạc) -->
        <g transform="translate(270, 48)">
          <rect width="105" height="175" rx="6" fill="#1c1917" stroke="#f43f5e" stroke-width="1"/>
          <!-- Vầng hào quang nghìn tay xòe tròn -->
          <circle cx="52" cy="75" r="32" fill="none" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="2 3"/>
          <!-- Thân tượng Phật ngồi tòa sen -->
          <ellipse cx="52" cy="65" rx="10" ry="14" fill="#fde047"/>
          <polygon points="52,80 35,115 70,115" fill="#dc2626"/>
          <!-- Tòa sen -->
          <ellipse cx="52" cy="120" rx="28" ry="8" fill="#e11d48"/>
          <text x="52" y="150" text-anchor="middle" fill="#fda4af" font-size="8.5" font-weight="bold">PHẬT BÀ THỜI MẠC</text>
          <text x="52" y="165" text-anchor="middle" fill="#a8a29e" font-size="7.5">Khuôn mặt đôn hậu</text>
        </g>

        <text x="200" y="250" text-anchor="middle" fill="#a8a29e" font-size="8.5">Di sản điêu khắc trung đại: Tinh hoa văn hóa &amp; niềm tự hào dân tộc</text>
      </svg>`;

    case "mt-bai-16":
      // Bài 16: Gốm hoa nâu & gốm hoa lam trang trí đồ vật
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#18181b"/>
        <rect x="10" y="10" width="380" height="260" rx="8" fill="#27272a" stroke="#0284c7" stroke-width="1.5"/>

        <!-- Trái: Bình gốm hoa nâu thời Lý - Trần -->
        <g transform="translate(30, 25)">
          <text x="65" y="15" text-anchor="middle" fill="#fed7aa" font-size="9.5" font-weight="bold">GỐM HOA NÂU (LÝ - TRẦN)</text>
          <!-- Thân bình gốm cạo men nâu sắt mộc mạc -->
          <ellipse cx="65" cy="50" rx="18" ry="6" fill="#78350f" stroke="#d97706"/>
          <path d="M 47 50 C 35 90, 15 130, 30 170 L 100 170 C 115 130, 95 90, 83 50 Z" fill="#ffedd5" stroke="#92400e" stroke-width="2"/>
          <ellipse cx="65" cy="170" rx="35" ry="8" fill="#78350f"/>
          <!-- Họa tiết hoa sen cạo men nâu đậm -->
          <path d="M 65 100 C 50 120, 50 140, 65 145 C 80 140, 80 120, 65 100 Z" fill="#78350f"/>
          <path d="M 45 130 Q 65 120 85 130" stroke="#92400e" stroke-width="1.5" fill="none"/>
          <text x="65" y="210" text-anchor="middle" fill="#fdba74" font-size="8">Cạo men nâu mộc mạc</text>
        </g>

        <!-- Ngăn cách -->
        <line x1="185" y1="20" x2="185" y2="255" stroke="#52525b" stroke-width="1.5" stroke-dasharray="3 3"/>

        <!-- Phải: Ứng dụng vẽ hoa lam lên chậu cây cảnh -->
        <g transform="translate(205, 25)">
          <text x="80" y="15" text-anchor="middle" fill="#38bdf8" font-size="9.5" font-weight="bold">ỨNG DỤNG TRANG TRÍ CHẬU CÂY</text>
          <!-- Chậu cây gốm sứ trắng vẽ hoa lam -->
          <polygon points="35,115 125,115 110,185 50,185" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
          <!-- Vành miệng chậu -->
          <ellipse cx="80" cy="115" rx="45" ry="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
          <!-- Họa tiết sóng nước thời Lý men lam cobalt -->
          <path d="M 46 145 Q 60 135 70 145 Q 80 135 90 145 Q 100 135 112 145" stroke="#1d4ed8" stroke-width="2.5" fill="none"/>
          <path d="M 52 160 Q 65 150 78 160 Q 90 150 104 160" stroke="#1d4ed8" stroke-width="2" fill="none"/>
          <!-- Cây xanh trồng trong chậu -->
          <circle cx="80" cy="85" r="24" fill="#16a34a"/>
          <circle cx="65" cy="75" r="14" fill="#22c55e"/>
          <circle cx="95" cy="78" r="16" fill="#15803d"/>
          <text x="80" y="210" text-anchor="middle" fill="#7dd3fc" font-size="8">Hoa văn sóng nước cobalt đương đại</text>
        </g>
      </svg>`;

    case "mt-bai-kt2":
      // Kiểm tra cuối năm: Triển lãm tổng kết Portfolio
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#0f172a"/>
        <rect x="10" y="10" width="380" height="260" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="200" y="32" text-anchor="middle" fill="#fde047" font-size="11" font-weight="900">TRIỂN LÃM TỔNG KẾT 8 CHỦ ĐỀ MĨ THUẬT 7</text>

        <!-- 4 Khung trưng bày biểu trưng cho 4 năng lực cốt lõi -->
        <g transform="translate(30, 50)">
          <rect width="75" height="85" rx="6" fill="#334155" stroke="#f43f5e" stroke-width="1.5"/>
          <circle cx="37" cy="38" r="18" fill="#f43f5e"/>
          <text x="37" y="65" text-anchor="middle" fill="#ffffff" font-size="7.5" font-weight="bold">QUAN SÁT</text>
          <text x="37" y="77" text-anchor="middle" fill="#fda4af" font-size="6.5">Thị giác thẩm mĩ</text>
        </g>

        <g transform="translate(115, 50)">
          <rect width="75" height="85" rx="6" fill="#334155" stroke="#a855f7" stroke-width="1.5"/>
          <polygon points="37,20 55,48 20,48" fill="#a855f7"/>
          <text x="37" y="65" text-anchor="middle" fill="#ffffff" font-size="7.5" font-weight="bold">SÁNG TẠO</text>
          <text x="37" y="77" text-anchor="middle" fill="#d8b4fe" font-size="6.5">Thực hành tạo hình</text>
        </g>

        <g transform="translate(200, 50)">
          <rect width="75" height="85" rx="6" fill="#334155" stroke="#38bdf8" stroke-width="1.5"/>
          <rect x="22" y="24" width="30" height="24" rx="3" fill="#0284c7"/>
          <text x="37" y="65" text-anchor="middle" fill="#ffffff" font-size="7.5" font-weight="bold">PHÂN TÍCH</text>
          <text x="37" y="77" text-anchor="middle" fill="#7dd3fc" font-size="6.5">Đánh giá tác phẩm</text>
        </g>

        <g transform="translate(285, 50)">
          <rect width="75" height="85" rx="6" fill="#334155" stroke="#10b981" stroke-width="1.5"/>
          <circle cx="37" cy="36" r="16" fill="#10b981"/>
          <text x="37" y="65" text-anchor="middle" fill="#ffffff" font-size="7.5" font-weight="bold">VẬN DỤNG</text>
          <text x="37" y="77" text-anchor="middle" fill="#6ee7b7" font-size="6.5">Di sản vào đời sống</text>
        </g>

        <!-- Kệ bục vinh danh Portfolio & Bảng vàng Trạng Nguyên -->
        <polygon points="40,165 360,165 330,225 70,225" fill="#475569" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="200" y="195" text-anchor="middle" fill="#fde047" font-size="12" font-weight="900">★ BẢNG VÀNG TRẠNG NGUYÊN MĨ THUẬT 7 ★</text>
        <text x="200" y="212" text-anchor="middle" fill="#ffffff" font-size="8.5">Tự tin thuyết trình &bull; Đa dạng phong cách &bull; Lan tỏa giá trị thẩm mĩ</text>
      </svg>`;

    default:
      return `<svg viewBox="0 0 400 280" class="w-full h-full object-cover rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#1e1b4b"/>
        <circle cx="200" cy="140" r="60" fill="#ec4899" opacity="0.3"/>
        <text x="200" y="145" text-anchor="middle" fill="#fbcfe8" font-size="14" font-weight="bold">MĨ THUẬT LỚP 7</text>
      </svg>`;
  }
}

module.exports = { getArtworkSVG };
