const fs = require('fs');

// Helper to wrap SVG in a modern, responsive container
function svgWrapper(viewWidth, viewHeight, title, content) {
  return `
    <div class="my-5 p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/40 dark:from-gray-850 dark:to-gray-800 border border-emerald-100 dark:border-emerald-900/40 shadow-sm">
      <div class="flex items-center justify-between mb-3 pb-2 border-b border-gray-100 dark:border-gray-700/60">
        <span class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">
          <i class="fa-solid fa-compass-drafting text-emerald-500"></i> Sơ đồ trực quan bài học
        </span>
        <span class="text-[11px] font-medium text-gray-500 dark:text-gray-400">${title}</span>
      </div>
      <div class="w-full overflow-x-auto py-1">
        <svg viewBox="0 0 ${viewWidth} ${viewHeight}" class="w-full max-w-2xl mx-auto h-auto select-none" style="min-width: 320px;" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#10b981" />
            </marker>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#3b82f6" />
            </marker>
            <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b" />
            </marker>
            <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#8b5cf6" />
            </marker>
            <linearGradient id="grad-emerald" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#10b981" />
              <stop offset="100%" stop-color="#059669" />
            </linearGradient>
            <linearGradient id="grad-blue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#3b82f6" />
              <stop offset="100%" stop-color="#2563eb" />
            </linearGradient>
            <linearGradient id="grad-purple" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#8b5cf6" />
              <stop offset="100%" stop-color="#6d28d9" />
            </linearGradient>
            <linearGradient id="grad-amber" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f59e0b" />
              <stop offset="100%" stop-color="#d97706" />
            </linearGradient>
            <linearGradient id="grad-rose" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f43f5e" />
              <stop offset="100%" stop-color="#e11d48" />
            </linearGradient>
          </defs>
          ${content}
        </svg>
      </div>
    </div>
  `;
}

// Generate custom diagrams for all 55 lessons
function generateDiagram(id, lessonTitle) {
  switch (id) {
    case 1:
      return svgWrapper(600, 190, 'Các lĩnh vực KHTN & Vật sống vs Không sống', `
        <rect x="220" y="10" width="160" height="36" rx="10" fill="url(#grad-emerald)"/>
        <text x="300" y="33" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">KHOA HỌC TỰ NHIÊN</text>
        <path d="M 300 46 L 70 80 M 300 46 L 180 80 M 300 46 L 300 80 M 300 46 L 420 80 M 300 46 L 530 80" stroke="#10b981" stroke-width="2" stroke-dasharray="4,4"/>
        <rect x="20" y="80" width="100" height="42" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
        <text x="70" y="98" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle">Sinh học</text>
        <text x="70" y="112" fill="#047857" font-size="9" text-anchor="middle">Vật sống & sự sống</text>
        <rect x="135" y="80" width="95" height="42" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="182" y="98" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Hóa học</text>
        <text x="182" y="112" fill="#1d4ed8" font-size="9" text-anchor="middle">Chất & biến đổi</text>
        <rect x="245" y="80" width="110" height="42" rx="8" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
        <text x="300" y="98" fill="#5b21b6" font-size="11" font-weight="bold" text-anchor="middle">Vật lí học</text>
        <text x="300" y="112" fill="#6d28d9" font-size="9" text-anchor="middle">Lực & Năng lượng</text>
        <rect x="370" y="80" width="105" height="42" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="422" y="98" fill="#92400e" font-size="11" font-weight="bold" text-anchor="middle">KH Trái Đất</text>
        <text x="422" y="112" fill="#b45309" font-size="9" text-anchor="middle">Khí quyển & Địa cầu</text>
        <rect x="490" y="80" width="95" height="42" rx="8" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.5"/>
        <text x="537" y="98" fill="#9d174d" font-size="11" font-weight="bold" text-anchor="middle">Thiên văn</text>
        <text x="537" y="112" fill="#be185d" font-size="9" text-anchor="middle">Vũ trụ & Thiên thể</text>
        <rect x="80" y="142" width="200" height="36" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="180" y="160" fill="#14532d" font-size="11" font-weight="bold" text-anchor="middle">VẬT SỐNG (Trao đổi chất, lớn lên)</text>
        <text x="180" y="172" fill="#15803d" font-size="9" text-anchor="middle">Ví dụ: Con người, thực vật, voi...</text>
        <rect x="320" y="142" width="200" height="36" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="420" y="160" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">VẬT KHÔNG SỐNG (Không sinh sản)</text>
        <text x="420" y="172" fill="#64748b" font-size="9" text-anchor="middle">Ví dụ: Bàn, ghế, ngọn núi, nước...</text>
      `);

    case 2:
      return svgWrapper(600, 150, 'Các kí hiệu cảnh báo nguy hiểm trong phòng thực hành', `
        <g transform="translate(30, 20)">
          <polygon points="35,5 5,60 65,60" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
          <text x="35" y="45" font-size="22" font-weight="bold" fill="#b45309" text-anchor="middle">🔥</text>
          <text x="35" y="80" font-size="10" font-weight="bold" fill="#78350f" text-anchor="middle">Chất dễ cháy</text>
        </g>
        <g transform="translate(150, 20)">
          <polygon points="35,5 5,60 65,60" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
          <text x="35" y="45" font-size="20" font-weight="bold" fill="#991b1b" text-anchor="middle">☠</text>
          <text x="35" y="80" font-size="10" font-weight="bold" fill="#7f1d1d" text-anchor="middle">Chất độc hại</text>
        </g>
        <g transform="translate(270, 20)">
          <polygon points="35,5 5,60 65,60" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
          <text x="35" y="45" font-size="20" font-weight="bold" fill="#854d0e" text-anchor="middle">🧪</text>
          <text x="35" y="80" font-size="10" font-weight="bold" fill="#713f12" text-anchor="middle">Chất ăn mòn</text>
        </g>
        <g transform="translate(390, 20)">
          <polygon points="35,5 5,60 65,60" fill="#fef08a" stroke="#eab308" stroke-width="2"/>
          <text x="35" y="45" font-size="22" font-weight="bold" fill="#a16207" text-anchor="middle">⚡</text>
          <text x="35" y="80" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">Điện nguy hiểm</text>
        </g>
        <g transform="translate(500, 20)">
          <polygon points="35,5 5,60 65,60" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
          <text x="35" y="45" font-size="20" font-weight="bold" fill="#0369a1" text-anchor="middle">☣</text>
          <text x="35" y="80" font-size="10" font-weight="bold" fill="#075985" text-anchor="middle">Nguy hiểm sinh học</text>
        </g>
        <rect x="80" y="110" width="440" height="28" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1"/>
        <text x="300" y="128" fill="#166534" font-size="10" font-weight="bold" text-anchor="middle">Quy tắc vàng: Tuyệt đối không nếm, không ngửi trực tiếp, chỉ làm khi có giáo viên hướng dẫn!</text>
      `);

    case 3:
      return svgWrapper(550, 140, 'Cấu tạo & Nguyên lí tạo ảnh ảo phóng to của kính lúp (3x – 20x)', `
        <ellipse cx="140" cy="65" rx="35" ry="50" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
        <rect x="135" y="115" width="10" height="20" fill="#64748b"/>
        <path d="M 140 135 L 140 145" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
        <text x="140" y="30" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Thấu kính hội tụ</text>
        <circle cx="50" cy="65" r="8" fill="#f59e0b"/>
        <text x="50" y="90" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">Vật nhỏ (gân lá)</text>
        <path d="M 58 65 L 105 65" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-amber)"/>
        <circle cx="280" cy="65" r="28" fill="#dbeafe" stroke="#2563eb" stroke-dasharray="3,3"/>
        <text x="280" y="70" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">Ảnh ảo phóng to</text>
        <text x="280" y="110" font-size="10" fill="#3b82f6" text-anchor="middle">Phóng đại 3 – 20 lần</text>
        <path d="M 175 65 L 245 65" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
        <rect x="360" y="45" width="160" height="50" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
        <text x="440" y="65" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">⚠ CẢNH BÁO:</text>
        <text x="440" y="82" font-size="9" fill="#b91c1c" text-anchor="middle">Tuyệt đối KHÔNG nhìn</text>
        <text x="440" y="94" font-size="9" fill="#b91c1c" text-anchor="middle">Mặt Trời qua kính lúp!</text>
      `);

    case 4:
      return svgWrapper(600, 180, 'Cấu tạo các bộ phận chính của kính hiển vi quang học', `
        <rect x="50" y="20" width="130" height="32" rx="6" fill="#dbeafe" stroke="#2563eb"/>
        <text x="115" y="40" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Thị kính (10x)</text>
        <path d="M 115 52 L 115 80" stroke="#64748b" stroke-width="3"/>
        <rect x="50" y="80" width="130" height="32" rx="6" fill="#dcfce7" stroke="#16a34a"/>
        <text x="115" y="100" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Vật kính (10x, 40x)</text>
        <path d="M 115 112 L 115 130" stroke="#64748b" stroke-width="3"/>
        <rect x="40" y="130" width="150" height="24" rx="4" fill="#334155"/>
        <text x="115" y="146" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Bàn kính & Kẹp tiêu bản</text>
        <g transform="translate(240, 20)">
          <rect x="0" y="0" width="330" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="165" y="25" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">ĐỘ PHÓNG ĐẠI TOÀN BỘ</text>
          <text x="165" y="46" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">= Độ phóng đại Thị kính × Độ phóng đại Vật kính</text>
        </g>
        <g transform="translate(240, 95)">
          <rect x="0" y="0" width="160" height="55" rx="8" fill="#f8fafc" stroke="#94a3b8"/>
          <text x="80" y="22" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">Ốc to (Chỉnh thô)</text>
          <text x="80" y="40" font-size="9" fill="#64748b" text-anchor="middle">Nâng/hạ nhanh để tìm ảnh</text>
        </g>
        <g transform="translate(410, 95)">
          <rect x="0" y="0" width="160" height="55" rx="8" fill="#f8fafc" stroke="#94a3b8"/>
          <text x="80" y="22" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">Ốc nhỏ (Chỉnh tinh)</text>
          <text x="80" y="40" font-size="9" fill="#64748b" text-anchor="middle">Chỉnh ảnh đạt độ sắc nét</text>
        </g>
      `);

    case 5:
      return svgWrapper(600, 150, 'Quy trình đo độ dài & Đo thể tích vật rắn bằng bình chia độ', `
        <g transform="translate(20, 20)">
          <rect x="0" y="0" width="260" height="40" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
          <line x1="20" y1="0" x2="20" y2="25" stroke="#854d0e" stroke-width="1.5"/>
          <text x="20" y="35" font-size="9" fill="#713f12" text-anchor="middle">0</text>
          <line x1="70" y1="0" x2="70" y2="20" stroke="#854d0e"/>
          <line x1="120" y1="0" x2="120" y2="25" stroke="#854d0e" stroke-width="1.5"/>
          <text x="120" y="35" font-size="9" fill="#713f12" text-anchor="middle">5 cm</text>
          <line x1="170" y1="0" x2="170" y2="20" stroke="#854d0e"/>
          <line x1="220" y1="0" x2="220" y2="25" stroke="#854d0e" stroke-width="1.5"/>
          <text x="220" y="35" font-size="9" fill="#713f12" text-anchor="middle">10 cm</text>
          <text x="130" y="65" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">Mắt nhìn vuông góc cạnh thước</text>
        </g>
        <g transform="translate(320, 15)">
          <rect x="0" y="0" width="45" height="100" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
          <rect x="2" y="50" width="41" height="48" fill="#38bdf8" opacity="0.6"/>
          <text x="22" y="115" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">V₁ (Nước)</text>
          <path d="M 60 50 L 85 50" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow-blue)"/>
          <rect x="100" y="0" width="45" height="100" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
          <rect x="102" y="25" width="41" height="73" fill="#38bdf8" opacity="0.6"/>
          <circle cx="122" cy="65" r="12" fill="#64748b"/>
          <text x="122" y="115" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">V₂ (Thêm sỏi)</text>
          <rect x="165" y="25" width="100" height="50" rx="6" fill="#ecfdf5" stroke="#10b981"/>
          <text x="215" y="45" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">V vật rắn</text>
          <text x="215" y="62" font-size="11" font-weight="bold" fill="#059669" text-anchor="middle">= V₂ − V₁</text>
        </g>
      `);

    case 6:
      return svgWrapper(550, 130, 'Các đơn vị đo khối lượng & Thao tác trừ bì (TARE) cân điện tử', `
        <g transform="translate(20, 20)">
          <rect x="0" y="0" width="100" height="45" rx="8" fill="#dcfce7" stroke="#16a34a"/>
          <text x="50" y="22" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">1 TẤN</text>
          <text x="50" y="38" font-size="10" fill="#166534" text-anchor="middle">= 1 000 kg</text>
        </g>
        <path d="M 125 42 L 150 42" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow)"/>
        <g transform="translate(160, 20)">
          <rect x="0" y="0" width="100" height="45" rx="8" fill="#dcfce7" stroke="#16a34a"/>
          <text x="50" y="22" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">1 KILÔGAM</text>
          <text x="50" y="38" font-size="10" fill="#166534" text-anchor="middle">= 1 000 g</text>
        </g>
        <path d="M 265 42 L 290 42" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow)"/>
        <g transform="translate(300, 20)">
          <rect x="0" y="0" width="100" height="45" rx="8" fill="#dcfce7" stroke="#16a34a"/>
          <text x="50" y="22" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">1 GAM</text>
          <text x="50" y="38" font-size="10" fill="#166534" text-anchor="middle">= 1 000 mg</text>
        </g>
        <rect x="50" y="85" width="450" height="32" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
        <text x="275" y="105" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Nút TARE trên cân điện tử: Trừ khối lượng cốc chứa → Đưa hiển thị về 0</text>
      `);

    case 7:
      return svgWrapper(550, 130, 'Phân biệt Thời điểm và Khoảng thời gian (Giây s, Phút min, Giờ h)', `
        <line x1="40" y1="50" x2="500" y2="50" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)"/>
        <circle cx="100" cy="50" r="6" fill="#10b981"/>
        <text x="100" y="30" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">Thời điểm Bắt đầu</text>
        <text x="100" y="70" font-size="10" font-mono fill="#64748b" text-anchor="middle">t₁ = 7h00</text>
        <circle cx="400" cy="50" r="6" fill="#ef4444"/>
        <text x="400" y="30" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">Thời điểm Kết thúc</text>
        <text x="400" y="70" font-size="10" font-mono fill="#64748b" text-anchor="middle">t₂ = 7h45</text>
        <path d="M 110 40 Q 250 10 390 40" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <rect x="150" y="85" width="250" height="30" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
        <text x="275" y="104" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Khoảng thời gian: Δt = t₂ − t₁ = 45 phút</text>
      `);

    case 8:
      return svgWrapper(550, 130, 'Thang nhiệt độ Celsius và công thức đổi sang Fahrenheit (°F)', `
        <g transform="translate(60, 20)">
          <rect x="0" y="0" width="120" height="40" rx="8" fill="#e0f2fe" stroke="#0284c7"/>
          <text x="60" y="20" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">0 °C (32 °F)</text>
          <text x="60" y="34" font-size="9" fill="#0284c7" text-anchor="middle">Nước đá đang tan</text>
        </g>
        <path d="M 190 40 L 250 40" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow-blue)"/>
        <g transform="translate(260, 20)">
          <rect x="0" y="0" width="120" height="40" rx="8" fill="#fee2e2" stroke="#dc2626"/>
          <text x="60" y="20" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">100 °C (212 °F)</text>
          <text x="60" y="34" font-size="9" fill="#dc2626" text-anchor="middle">Nước đang sôi</text>
        </g>
        <rect x="80" y="80" width="380" height="32" rx="6" fill="#fdf4ff" stroke="#c084fc"/>
        <text x="270" y="100" font-size="11" font-weight="bold" fill="#7e22ce" text-anchor="middle">Công thức đổi đơn vị: t(°F) = 1,8 × t(°C) + 32</text>
      `);

    case 9:
      return svgWrapper(550, 130, 'Phân biệt Vật thể (Tự nhiên, Nhân tạo) và Chất tạo nên vật thể', `
        <rect x="40" y="20" width="200" height="45" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="140" y="38" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">VẬT THỂ</text>
        <text x="140" y="54" font-size="9" fill="#2563eb" text-anchor="middle">Tự nhiên (cây, đá) &bull; Nhân tạo (bàn, cốc)</text>
        <path d="M 245 42 L 295 42" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
        <rect x="305" y="20" width="200" height="45" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
        <text x="405" y="38" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">CHẤT TẠO THÀNH</text>
        <text x="405" y="54" font-size="9" fill="#059669" text-anchor="middle">Gỗ, sắt, thủy tinh, nước, đường...</text>
        <rect x="60" y="85" width="420" height="30" rx="6" fill="#fef9c3" stroke="#ca8a04"/>
        <text x="270" y="104" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">Tính chất vật lí (không tạo chất mới) vs Tính chất hóa học (tạo chất mới: cháy, gỉ)</text>
      `);

    case 10:
      return svgWrapper(600, 150, 'Sơ đồ chuyển thể giữa 3 thể Rắn, Lỏng và Khí', `
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="110" height="55" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
          <text x="55" y="28" font-size="13" font-weight="bold" fill="#991b1b" text-anchor="middle">THỂ RẮN</text>
          <text x="55" y="44" font-size="9" fill="#b91c1c" text-anchor="middle">Hình dạng & V xác định</text>
        </g>
        <path d="M 145 55 L 235 55" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-amber)"/>
        <text x="190" y="48" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">Nóng chảy</text>
        <path d="M 235 90 L 145 90" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow-blue)"/>
        <text x="190" y="105" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">Đông đặc</text>
        <g transform="translate(245, 45)">
          <rect x="0" y="0" width="110" height="55" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
          <text x="55" y="28" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">THỂ LỎNG</text>
          <text x="55" y="44" font-size="9" fill="#0284c7" text-anchor="middle">Chảy được, khó nén</text>
        </g>
        <path d="M 360 55 L 450 55" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-amber)"/>
        <text x="405" y="48" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">Hoá hơi</text>
        <path d="M 450 90 L 360 90" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow-blue)"/>
        <text x="405" y="105" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">Ngưng tụ</text>
        <g transform="translate(460, 45)">
          <rect x="0" y="0" width="110" height="55" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
          <text x="55" y="28" font-size="13" font-weight="bold" fill="#14532d" text-anchor="middle">THỂ KHÍ</text>
          <text x="55" y="44" font-size="9" fill="#166534" text-anchor="middle">Lan toả, rất dễ nén</text>
        </g>
        <text x="300" y="135" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">Với nước nguyên chất: Nóng chảy & Đông đặc ở 0 °C &bull; Sôi ở 100 °C (áp suất chuẩn)</text>
      `);

    case 11:
      return svgWrapper(580, 160, 'Thành phần không khí theo thể tích & Vai trò của Oxygen', `
        <g transform="translate(100, 75)">
          <circle cx="0" cy="0" r="55" fill="#3b82f6"/>
          <path d="M 0 0 L 55 0 A 55 55 0 0 1 -20 51 Z" fill="#10b981"/>
          <path d="M 0 0 L -20 51 A 55 55 0 0 1 -30 46 Z" fill="#f59e0b"/>
        </g>
        <g transform="translate(200, 30)">
          <rect x="0" y="5" width="15" height="15" fill="#3b82f6" rx="3"/>
          <text x="25" y="17" font-size="11" font-weight="bold" fill="#1e3a8a">Nitrogen (≈ 78%)</text>
          <rect x="0" y="35" width="15" height="15" fill="#10b981" rx="3"/>
          <text x="25" y="47" font-size="11" font-weight="bold" fill="#065f46">Oxygen (≈ 21%): Cần cho hô hấp & duy trì cháy</text>
          <rect x="0" y="65" width="15" height="15" fill="#f59e0b" rx="3"/>
          <text x="25" y="77" font-size="11" font-weight="bold" fill="#92400e">CO₂, hơi nước & khí khác (≈ 1%)</text>
        </g>
        <rect x="40" y="125" width="500" height="25" rx="5" fill="#f0fdf4" stroke="#16a34a"/>
        <text x="290" y="142" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">Thí nghiệm nến úp cốc: Nước dâng lên chiếm khoảng 1/5 thể tích chứng minh tỉ lệ Oxygen</text>
      `);

    case 12:
      return svgWrapper(600, 140, '6 Nhóm vật liệu thông dụng và nguyên tắc 3R', `
        <g transform="translate(15, 15)">
          <rect x="0" y="0" width="85" height="50" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="42" y="24" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">KIM LOẠI</text>
          <text x="42" y="40" font-size="8" fill="#2563eb" text-anchor="middle">Dẫn điện, nhiệt</text>
        </g>
        <g transform="translate(110, 15)">
          <rect x="0" y="0" width="85" height="50" rx="6" fill="#ecfdf5" stroke="#10b981"/>
          <text x="42" y="24" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">NHỰA</text>
          <text x="42" y="40" font-size="8" fill="#059669" text-anchor="middle">Nhẹ, cách điện</text>
        </g>
        <g transform="translate(205, 15)">
          <rect x="0" y="0" width="85" height="50" rx="6" fill="#f0f9ff" stroke="#0ea5e9"/>
          <text x="42" y="24" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">THỦY TINH</text>
          <text x="42" y="40" font-size="8" fill="#0284c7" text-anchor="middle">Trong suốt, giòn</text>
        </g>
        <g transform="translate(300, 15)">
          <rect x="0" y="0" width="85" height="50" rx="6" fill="#fef3c7" stroke="#d97706"/>
          <text x="42" y="24" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">GỐM SỨ</text>
          <text x="42" y="40" font-size="8" fill="#b45309" text-anchor="middle">Cứng, chịu nhiệt</text>
        </g>
        <g transform="translate(395, 15)">
          <rect x="0" y="0" width="85" height="50" rx="6" fill="#fef2f2" stroke="#ef4444"/>
          <text x="42" y="24" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">CAO SU</text>
          <text x="42" y="40" font-size="8" fill="#dc2626" text-anchor="middle">Đàn hồi, bền</text>
        </g>
        <g transform="translate(490, 15)">
          <rect x="0" y="0" width="95" height="50" rx="6" fill="#fef9c3" stroke="#ca8a04"/>
          <text x="47" y="24" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">GỖ TỰ NHIÊN</text>
          <text x="47" y="40" font-size="8" fill="#a16207" text-anchor="middle">Chịu lực, dễ tạo hình</text>
        </g>
        <rect x="60" y="80" width="480" height="35" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
        <text x="300" y="102" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">Nguyên tắc 3R: Reduce (Giảm thiểu) &bull; Reuse (Tái sử dụng) &bull; Recycle (Tái chế)</text>
      `);

    case 13:
      return svgWrapper(580, 130, 'Chuỗi chế biến nguyên liệu thành sản phẩm', `
        <g transform="translate(30, 25)">
          <rect x="0" y="0" width="130" height="45" rx="8" fill="#fef3c7" stroke="#d97706"/>
          <text x="65" y="22" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">QUẶNG SẮT</text>
          <text x="65" y="36" font-size="8" fill="#b45309" text-anchor="middle">(Nguyên liệu tự nhiên)</text>
        </g>
        <path d="M 165 47 L 210 47" stroke="#d97706" stroke-width="2" marker-end="url(#arrow-amber)"/>
        <g transform="translate(220, 25)">
          <rect x="0" y="0" width="120" height="45" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="60" y="22" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">LÒ CAO (GANG)</text>
          <text x="60" y="36" font-size="8" fill="#2563eb" text-anchor="middle">(Sản phẩm trung gian)</text>
        </g>
        <path d="M 345 47 L 390 47" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
        <g transform="translate(400, 25)">
          <rect x="0" y="0" width="140" height="45" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="70" y="22" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">LUYỆN THÉP</text>
          <text x="70" y="36" font-size="8" fill="#059669" text-anchor="middle">(Vật liệu xây dựng, máy móc)</text>
        </g>
        <text x="290" y="105" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">Đá vôi + Đất sét + Cát → Nung tạo clinker → Chế biến thành xi măng</text>
      `);

    case 14:
      return svgWrapper(550, 130, 'Phân loại 3 thể nhiên liệu và nguyên tắc an toàn phòng cháy', `
        <g transform="translate(30, 20)">
          <rect x="0" y="0" width="130" height="50" rx="8" fill="#fef3c7" stroke="#d97706"/>
          <text x="65" y="22" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">NHIÊN LIỆU RẮN</text>
          <text x="65" y="40" font-size="9" fill="#b45309" text-anchor="middle">Than đá, than bùn, củi gỗ</text>
        </g>
        <g transform="translate(200, 20)">
          <rect x="0" y="0" width="130" height="50" rx="8" fill="#fee2e2" stroke="#dc2626"/>
          <text x="65" y="22" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">NHIÊN LIỆU LỎNG</text>
          <text x="65" y="40" font-size="9" fill="#b91c1c" text-anchor="middle">Xăng, dầu hoả, cồn</text>
        </g>
        <g transform="translate(370, 20)">
          <rect x="0" y="0" width="140" height="50" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="70" y="22" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">NHIÊN LIỆU KHÍ</text>
          <text x="70" y="40" font-size="9" fill="#2563eb" text-anchor="middle">Khí gas (LPG), khí thiên nhiên</text>
        </g>
        <rect x="40" y="85" width="470" height="30" rx="6" fill="#fef2f2" stroke="#ef4444"/>
        <text x="275" y="104" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Lưu ý an toàn: Đám cháy xăng dầu TUYỆT ĐỐI KHÔNG dùng nước dập (dầu nổi làm lan cháy)</text>
      `);

    case 15:
      return svgWrapper(600, 160, '4 Nhóm chất dinh dưỡng thiết yếu trong tháp dinh dưỡng', `
        <g transform="translate(20, 20)">
          <rect x="0" y="0" width="125" height="70" rx="8" fill="#fef3c7" stroke="#d97706"/>
          <text x="62" y="24" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">Carbohydrate</text>
          <text x="62" y="42" font-size="9" fill="#b45309" text-anchor="middle">(Đường, tinh bột)</text>
          <text x="62" y="58" font-size="9" fill="#78350f" text-anchor="middle">Cung cấp năng lượng</text>
        </g>
        <g transform="translate(160, 20)">
          <rect x="0" y="0" width="125" height="70" rx="8" fill="#fee2e2" stroke="#dc2626"/>
          <text x="62" y="24" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">Protein (Đạm)</text>
          <text x="62" y="42" font-size="9" fill="#b91c1c" text-anchor="middle">(Thịt, cá, trứng, sữa)</text>
          <text x="62" y="58" font-size="9" fill="#7f1d1d" text-anchor="middle">Xây dựng cơ thể</text>
        </g>
        <g transform="translate(300, 20)">
          <rect x="0" y="0" width="125" height="70" rx="8" fill="#fef9c3" stroke="#ca8a04"/>
          <text x="62" y="24" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">Lipid (Chất béo)</text>
          <text x="62" y="42" font-size="9" fill="#a16207" text-anchor="middle">(Dầu, mỡ, bơ, lạc)</text>
          <text x="62" y="58" font-size="9" fill="#713f12" text-anchor="middle">Dự trữ năng lượng</text>
        </g>
        <g transform="translate(440, 20)">
          <rect x="0" y="0" width="135" height="70" rx="8" fill="#dcfce7" stroke="#16a34a"/>
          <text x="67" y="24" font-size="11" font-weight="bold" fill="#14532d" text-anchor="middle">Vitamin & Khoáng</text>
          <text x="67" y="42" font-size="9" fill="#15803d" text-anchor="middle">(Rau xanh, hoa quả)</text>
          <text x="67" y="58" font-size="9" fill="#166534" text-anchor="middle">Bảo vệ & Chuyển hóa</text>
        </g>
        <rect x="40" y="110" width="520" height="30" rx="6" fill="#f8fafc" stroke="#64748b"/>
        <text x="300" y="129" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Vitamin A, D, E, K tan trong dầu &bull; Vitamin B, C tan trong nước &bull; Cần ăn uống cân đối đủ chất</text>
      `);

    case 16:
      return svgWrapper(580, 150, 'So sánh trực quan Dung dịch vs Huyền phù vs Nhũ tương', `
        <g transform="translate(30, 20)">
          <rect x="0" y="0" width="150" height="85" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="75" y="25" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">DUNG DỊCH</text>
          <text x="75" y="45" font-size="9" fill="#2563eb" text-anchor="middle">Hỗn hợp đồng nhất</text>
          <text x="75" y="60" font-size="9" fill="#3b82f6" text-anchor="middle">Chất tan phân bố đều</text>
          <text x="75" y="75" font-size="9" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Ví dụ: Nước đường, nước muối</text>
        </g>
        <g transform="translate(210, 20)">
          <rect x="0" y="0" width="150" height="85" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="75" y="25" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">HUYỀN PHÙ</text>
          <text x="75" y="45" font-size="9" fill="#b45309" text-anchor="middle">Hạt RẮN lơ lửng</text>
          <text x="75" y="60" font-size="9" fill="#d97706" text-anchor="middle">Để yên sẽ bị lắng cặn</text>
          <text x="75" y="75" font-size="9" font-weight="bold" fill="#78350f" text-anchor="middle">Ví dụ: Nước phù sa, bột sắn</text>
        </g>
        <g transform="translate(390, 20)">
          <rect x="0" y="0" width="150" height="85" rx="8" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.5"/>
          <text x="75" y="25" font-size="11" font-weight="bold" fill="#9d174d" text-anchor="middle">NHŨ TƯƠNG</text>
          <text x="75" y="45" font-size="9" fill="#be185d" text-anchor="middle">Giọt LỎNG phân tán</text>
          <text x="75" y="60" font-size="9" fill="#db2777" text-anchor="middle">trong chất lỏng khác</text>
          <text x="75" y="75" font-size="9" font-weight="bold" fill="#831843" text-anchor="middle">Ví dụ: Dầu lắc nước, sữa</text>
        </g>
        <text x="290" y="130" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">Nhãn "Lắc đều trước khi dùng" thường dành cho huyền phù và nhũ tương</text>
      `);

    case 17:
      return svgWrapper(600, 150, '4 Phương pháp tách chất dựa trên tính chất vật lí', `
        <g transform="translate(10, 20)">
          <rect x="0" y="0" width="130" height="80" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="65" y="25" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">1. LẮNG GẠN</text>
          <text x="65" y="45" font-size="9" fill="#2563eb" text-anchor="middle">Để hạt nặng lắng</text>
          <text x="65" y="60" font-size="9" fill="#3b82f6" text-anchor="middle">Gạn lớp nước trên</text>
        </g>
        <g transform="translate(155, 20)">
          <rect x="0" y="0" width="130" height="80" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="65" y="25" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">2. LỌC PHỄU</text>
          <text x="65" y="45" font-size="9" fill="#059669" text-anchor="middle">Dùng giấy lọc giữ</text>
          <text x="65" y="60" font-size="9" fill="#047857" text-anchor="middle">hạt rắn không tan</text>
        </g>
        <g transform="translate(300, 20)">
          <rect x="0" y="0" width="130" height="80" rx="8" fill="#fffbeb" stroke="#f59e0b"/>
          <text x="65" y="25" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">3. CÔ CẠN</text>
          <text x="65" y="45" font-size="9" fill="#b45309" text-anchor="middle">Đun bay hơi dung môi</text>
          <text x="65" y="60" font-size="9" fill="#d97706" text-anchor="middle">Thu chất rắn (Muối)</text>
        </g>
        <g transform="translate(445, 20)">
          <rect x="0" y="0" width="130" height="80" rx="8" fill="#fdf4ff" stroke="#c084fc"/>
          <text x="65" y="25" font-size="11" font-weight="bold" fill="#7e22ce" text-anchor="middle">4. CHIẾT</text>
          <text x="65" y="45" font-size="9" fill="#9333ea" text-anchor="middle">Tách 2 chất lỏng</text>
          <text x="65" y="60" font-size="9" fill="#a855f7" text-anchor="middle">không tan (Dầu & Nước)</text>
        </g>
        <rect x="30" y="115" width="540" height="25" rx="5" fill="#f1f5f9" stroke="#94a3b8"/>
        <text x="300" y="132" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Tách muối lẫn cát: Hòa nước muối → Lọc giữ cát → Cô cạn nước lọc thu muối tinh khiết</text>
      `);

    case 18:
      return svgWrapper(550, 140, 'Đa dạng hình dạng tế bào phù hợp với chức năng sống', `
        <g transform="translate(30, 20)">
          <ellipse cx="40" cy="40" rx="35" ry="12" fill="#fee2e2" stroke="#dc2626"/>
          <circle cx="40" cy="40" r="4" fill="#991b1b"/>
          <text x="40" y="75" font-size="10" font-weight="bold" fill="#7f1d1d" text-anchor="middle">Tế bào cơ (thon dài)</text>
        </g>
        <g transform="translate(160, 20)">
          <polygon points="40,10 60,35 50,65 30,65 20,35" fill="#eff6ff" stroke="#2563eb"/>
          <circle cx="40" cy="40" r="5" fill="#1d4ed8"/>
          <text x="40" y="75" font-size="10" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Tế bào biểu bì (khít)</text>
        </g>
        <g transform="translate(290, 20)">
          <path d="M 40 40 L 10 20 M 40 40 L 70 20 M 40 40 L 40 70 M 40 40 L 15 55" stroke="#8b5cf6" stroke-width="2"/>
          <circle cx="40" cy="40" r="12" fill="#ede9fe" stroke="#8b5cf6"/>
          <circle cx="40" cy="40" r="4" fill="#6d28d9"/>
          <text x="40" y="75" font-size="10" font-weight="bold" fill="#5b21b6" text-anchor="middle">Tế bào thần kinh</text>
        </g>
        <g transform="translate(420, 20)">
          <circle cx="40" cy="40" r="22" fill="#fee2e2" stroke="#e11d48"/>
          <ellipse cx="40" cy="40" rx="14" ry="7" fill="#f43f5e" opacity="0.4"/>
          <text x="40" y="75" font-size="10" font-weight="bold" fill="#881337" text-anchor="middle">Hồng cầu đĩa lõm</text>
        </g>
        <text x="275" y="120" font-size="10" font-weight="bold" fill="#10b981" text-anchor="middle">Mọi sinh vật đều cấu tạo từ tế bào &bull; Tế bào thực hiện trao đổi chất, lớn lên và sinh sản</text>
      `);

    case 19:
      return svgWrapper(580, 140, 'So sánh tế bào Nhân sơ vs Nhân thực & Thực vật vs Động vật', `
        <g transform="translate(30, 20)">
          <rect x="0" y="0" width="230" height="65" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="115" y="24" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">TẾ BÀO NHÂN SƠ (Vi khuẩn)</text>
          <text x="115" y="42" font-size="9" fill="#2563eb" text-anchor="middle">• Chưa có màng nhân (chỉ có vùng nhân)</text>
          <text x="115" y="55" font-size="9" fill="#2563eb" text-anchor="middle">• Không có các bào quan có màng bao bọc</text>
        </g>
        <g transform="translate(310, 20)">
          <rect x="0" y="0" width="240" height="65" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="120" y="24" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">TẾ BÀO NHÂN THỰC (TV & ĐV)</text>
          <text x="120" y="42" font-size="9" fill="#059669" text-anchor="middle">• Nhân hoàn chỉnh có màng nhân bao bọc</text>
          <text x="120" y="55" font-size="9" fill="#059669" text-anchor="middle">• Có ti thể; Thực vật có thêm lục lạp & thành tế bào</text>
        </g>
        <text x="290" y="115" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">Thực vật quang hợp được nhờ có lục lạp chứa chất diệp lục hấp thu năng lượng ánh sáng</text>
      `);

    case 20:
      return svgWrapper(550, 140, 'Mô hình phân chia tế bào liên tiếp (N = a × 2ⁿ)', `
        <g transform="translate(30, 40)">
          <circle cx="25" cy="25" r="20" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
          <circle cx="25" cy="25" r="6" fill="#15803d"/>
          <text x="25" y="65" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">1 Tế bào</text>
        </g>
        <path d="M 90 65 L 140 65" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow)"/>
        <text x="115" y="55" font-size="9" fill="#15803d" text-anchor="middle">Lần 1</text>
        <g transform="translate(150, 40)">
          <circle cx="20" cy="15" r="14" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
          <circle cx="20" cy="15" r="4" fill="#15803d"/>
          <circle cx="20" cy="45" r="14" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
          <circle cx="20" cy="45" r="4" fill="#15803d"/>
          <text x="20" y="75" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">2 Tế bào</text>
        </g>
        <path d="M 200 65 L 250 65" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow)"/>
        <text x="225" y="55" font-size="9" fill="#15803d" text-anchor="middle">Lần 2</text>
        <g transform="translate(260, 40)">
          <circle cx="15" cy="15" r="10" fill="#dcfce7" stroke="#16a34a"/>
          <circle cx="35" cy="15" r="10" fill="#dcfce7" stroke="#16a34a"/>
          <circle cx="15" cy="40" r="10" fill="#dcfce7" stroke="#16a34a"/>
          <circle cx="35" cy="40" r="10" fill="#dcfce7" stroke="#16a34a"/>
          <text x="25" y="65" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">4 Tế bào</text>
        </g>
        <path d="M 320 65 L 370 65" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow)"/>
        <g transform="translate(380, 25)">
          <rect x="0" y="0" width="145" height="70" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="72" y="25" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">CÔNG THỨC</text>
          <text x="72" y="45" font-size="13" font-weight="bold" fill="#2563eb" text-anchor="middle">N = a × 2ⁿ</text>
          <text x="72" y="60" font-size="9" fill="#1d4ed8" text-anchor="middle">(n lần phân chia)</text>
        </g>
        <text x="275" y="125" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">Ý nghĩa: Giúp cơ thể lớn lên, thay thế tế bào già chết và làm lành vết thương</text>
      `);

    case 21:
      return svgWrapper(600, 140, 'Quy trình 4 bước làm tiêu bản tế bào biểu bì vảy hành tây', `
        <g transform="translate(10, 20)">
          <rect x="0" y="0" width="130" height="60" rx="8" fill="#fdf4ff" stroke="#c084fc"/>
          <text x="65" y="22" font-size="10" font-weight="bold" fill="#7e22ce" text-anchor="middle">1. TÁCH BIỂU BÌ</text>
          <text x="65" y="38" font-size="8.5" fill="#9333ea" text-anchor="middle">Cắt ô 7-8 mm ở mặt trong,</text>
          <text x="65" y="50" font-size="8.5" fill="#9333ea" text-anchor="middle">lột màng thật mỏng</text>
        </g>
        <path d="M 145 50 L 160 50" stroke="#a855f7" stroke-width="2" marker-end="url(#arrow)"/>
        <g transform="translate(165, 20)">
          <rect x="0" y="0" width="125" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="62" y="22" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">2. ĐẶT LÊN LAM</text>
          <text x="62" y="38" font-size="8.5" fill="#2563eb" text-anchor="middle">Nhỏ sẵn giọt nước cất,</text>
          <text x="62" y="50" font-size="8.5" fill="#2563eb" text-anchor="middle">trải phẳng lớp biểu bì</text>
        </g>
        <path d="M 295 50 L 310 50" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
        <g transform="translate(315, 20)">
          <rect x="0" y="0" width="125" height="60" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="62" y="22" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">3. ĐẬY LAMEN</text>
          <text x="62" y="38" font-size="8.5" fill="#059669" text-anchor="middle">Hạ lamen nghiêng 45°</text>
          <text x="62" y="50" font-size="8.5" fill="#059669" text-anchor="middle">để tránh bọt khí</text>
        </g>
        <path d="M 445 50 L 460 50" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
        <g transform="translate(465, 20)">
          <rect x="0" y="0" width="120" height="60" rx="8" fill="#fffbeb" stroke="#f59e0b"/>
          <text x="60" y="22" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">4. QUAN SÁT</text>
          <text x="60" y="38" font-size="8.5" fill="#b45309" text-anchor="middle">Thấm nước thừa,</text>
          <text x="60" y="50" font-size="8.5" fill="#b45309" text-anchor="middle">soi vật kính 10x → 40x</text>
        </g>
        <text x="300" y="115" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Tế bào biểu bì hành: hình đa giác chữ nhật xếp sát nhau, có thành cellulose và nhân rõ</text>
      `);

    case 22:
      return svgWrapper(550, 130, 'So sánh Cơ thể đơn bào vs Cơ thể đa bào', `
        <g transform="translate(30, 20)">
          <rect x="0" y="0" width="220" height="60" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
          <text x="110" y="25" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">CƠ THỂ ĐƠN BÀO</text>
          <text x="110" y="44" font-size="9" fill="#059669" text-anchor="middle">Toàn bộ cơ thể chỉ gồm 1 tế bào duy nhất</text>
          <text x="110" y="56" font-size="9" font-bold fill="#047857" text-anchor="middle">Ví dụ: Vi khuẩn, trùng roi, trùng giày, nấm men</text>
        </g>
        <g transform="translate(290, 20)">
          <rect x="0" y="0" width="230" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="115" y="25" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">CƠ THỂ ĐA BÀO</text>
          <text x="115" y="44" font-size="9" fill="#2563eb" text-anchor="middle">Gồm vô số tế bào phân hóa chuyên môn</text>
          <text x="115" y="56" font-size="9" font-bold fill="#1d4ed8" text-anchor="middle">Ví dụ: Con người, cây xanh, cá, chim, thú</text>
        </g>
        <text x="275" y="110" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">7 Dấu hiệu sự sống: Dinh dưỡng, Hô hấp, Bài tiết, Cảm ứng, Vận động, Sinh trưởng, Sinh sản</text>
      `);

    case 23:
      return svgWrapper(580, 130, '5 Cấp tổ chức của cơ thể đa bào: Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể', `
        <g transform="translate(10, 25)">
          <rect x="0" y="0" width="85" height="45" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="42" y="24" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">TẾ BÀO</text>
          <text x="42" y="38" font-size="8.5" fill="#2563eb" text-anchor="middle">Tế bào cơ</text>
        </g>
        <path d="M 100 47 L 120 47" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
        <g transform="translate(125, 25)">
          <rect x="0" y="0" width="85" height="45" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="42" y="24" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">MÔ</text>
          <text x="42" y="38" font-size="8.5" fill="#059669" text-anchor="middle">Mô cơ dạ dày</text>
        </g>
        <path d="M 215 47 L 235 47" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
        <g transform="translate(240, 25)">
          <rect x="0" y="0" width="95" height="45" rx="8" fill="#fef3c7" stroke="#d97706"/>
          <text x="47" y="24" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">CƠ QUAN</text>
          <text x="47" y="38" font-size="8.5" fill="#b45309" text-anchor="middle">Dạ dày, Tim, Gan</text>
        </g>
        <path d="M 340 47 L 360 47" stroke="#d97706" stroke-width="2" marker-end="url(#arrow-amber)"/>
        <g transform="translate(365, 25)">
          <rect x="0" y="0" width="100" height="45" rx="8" fill="#fdf4ff" stroke="#c084fc"/>
          <text x="50" y="24" font-size="11" font-weight="bold" fill="#7e22ce" text-anchor="middle">HỆ CƠ QUAN</text>
          <text x="50" y="38" font-size="8.5" fill="#9333ea" text-anchor="middle">Hệ tiêu hóa</text>
        </g>
        <path d="M 470 47 L 490 47" stroke="#a855f7" stroke-width="2" marker-end="url(#arrow-purple)"/>
        <g transform="translate(495, 25)">
          <rect x="0" y="0" width="75" height="45" rx="8" fill="#fee2e2" stroke="#dc2626"/>
          <text x="37" y="24" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">CƠ THỂ</text>
          <text x="37" y="38" font-size="8.5" fill="#b91c1c" text-anchor="middle">Con người</text>
        </g>
        <text x="290" y="105" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">Ở thực vật: Hệ rễ & Hệ chồi (Thân, Lá, Hoa, Quả) liên kết tạo thành cơ thể hoàn chỉnh</text>
      `);

    case 24:
      return svgWrapper(560, 130, 'Các cơ quan thực vật & Hệ cơ quan động vật đa bào', `
        <g transform="translate(30, 20)">
          <rect x="0" y="0" width="230" height="60" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="115" y="24" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">CÁC CƠ QUAN THỰC VẬT</text>
          <text x="115" y="42" font-size="9" fill="#047857" text-anchor="middle">• Cơ quan sinh dưỡng: Rễ, Thân, Lá</text>
          <text x="115" y="54" font-size="9" fill="#047857" text-anchor="middle">• Cơ quan sinh sản: Hoa, Quả, Hạt</text>
        </g>
        <g transform="translate(290, 20)">
          <rect x="0" y="0" width="240" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="120" y="24" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">HỆ CƠ QUAN ĐỘNG VẬT (NGƯỜI)</text>
          <text x="120" y="42" font-size="9" fill="#2563eb" text-anchor="middle">• Hệ vận động, Hệ tiêu hóa, Hệ tuần hoàn</text>
          <text x="120" y="54" font-size="9" fill="#2563eb" text-anchor="middle">• Hệ hô hấp, Hệ bài tiết, Hệ thần kinh</text>
        </g>
        <text x="280" y="110" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Mỗi hệ cơ quan đảm nhận một chức năng nhưng phối hợp nhịp nhàng tạo cơ thể thống nhất</text>
      `);

    case 25:
      return svgWrapper(600, 140, '7 Bậc phân loại từ lớn đến nhỏ và hệ thống 5 giới', `
        <g transform="translate(10, 20)">
          <rect x="0" y="0" width="75" height="40" rx="6" fill="#10b981"/>
          <text x="37" y="25" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">GIỚI</text>
        </g>
        <path d="M 90 40 L 105 40" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
        <g transform="translate(110, 20)">
          <rect x="0" y="0" width="75" height="40" rx="6" fill="#059669"/>
          <text x="37" y="25" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">NGÀNH</text>
        </g>
        <path d="M 190 40 L 205 40" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
        <g transform="translate(210, 20)">
          <rect x="0" y="0" width="65" height="40" rx="6" fill="#047857"/>
          <text x="32" y="25" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">LỚP</text>
        </g>
        <path d="M 280 40 L 295 40" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
        <g transform="translate(300, 20)">
          <rect x="0" y="0" width="60" height="40" rx="6" fill="#065f46"/>
          <text x="30" y="25" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">BỘ</text>
        </g>
        <path d="M 365 40 L 380 40" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
        <g transform="translate(385, 20)">
          <rect x="0" y="0" width="55" height="40" rx="6" fill="#047857"/>
          <text x="27" y="25" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">HỌ</text>
        </g>
        <path d="M 445 40 L 460 40" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
        <g transform="translate(465, 20)">
          <rect x="0" y="0" width="55" height="40" rx="6" fill="#059669"/>
          <text x="27" y="25" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">CHI</text>
        </g>
        <path d="M 525 40 L 540 40" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
        <g transform="translate(545, 20)">
          <rect x="0" y="0" width="50" height="40" rx="6" fill="#10b981"/>
          <text x="25" y="25" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">LOÀI</text>
        </g>
        <rect x="40" y="85" width="520" height="32" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
        <text x="300" y="105" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Tên khoa học quốc tế = Tên chi (viết hoa chữ đầu) + Tên loài (viết thường). Ví dụ: Panthera leo (Sư tử)</text>
      `);

    case 26:
      return svgWrapper(600, 160, 'Sơ đồ Khóa lưỡng phân phân loại động vật theo cặp đặc điểm đối lập', `
        <rect x="230" y="10" width="140" height="30" rx="6" fill="#10b981"/>
        <text x="300" y="29" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">6 LOÀI ĐỘNG VẬT</text>
        <path d="M 270 40 L 150 70 M 330 40 L 450 70" stroke="#10b981" stroke-width="2"/>
        <g transform="translate(80, 70)">
          <rect x="0" y="0" width="140" height="26" rx="5" fill="#fef3c7" stroke="#d97706"/>
          <text x="70" y="17" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">Không chân</text>
          <path d="M 40 26 L 20 45 M 100 26 L 120 45" stroke="#d97706" stroke-width="1.5"/>
          <rect x="-10" y="45" width="60" height="22" rx="4" fill="#fef9c3"/>
          <text x="20" y="59" font-size="9" font-weight="bold" fill="#713f12" text-anchor="middle">Cá rô (vảy)</text>
          <rect x="90" y="45" width="65" height="22" rx="4" fill="#fef9c3"/>
          <text x="122" y="59" font-size="9" font-weight="bold" fill="#713f12" text-anchor="middle">Lươn (da trần)</text>
        </g>
        <g transform="translate(360, 70)">
          <rect x="0" y="0" width="180" height="26" rx="5" fill="#ecfdf5" stroke="#10b981"/>
          <text x="90" y="17" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">Có chân (Phân tiếp theo cánh / số chân)</text>
          <path d="M 50 26 L 30 45 M 130 26 L 150 45" stroke="#10b981" stroke-width="1.5"/>
          <rect x="0" y="45" width="75" height="22" rx="4" fill="#d1fae5"/>
          <text x="37" y="59" font-size="8.5" font-weight="bold" fill="#047857" text-anchor="middle">Có cánh (Chuồn chuồn)</text>
          <rect x="110" y="45" width="85" height="22" rx="4" fill="#d1fae5"/>
          <text x="152" y="59" font-size="8.5" font-weight="bold" fill="#047857" text-anchor="middle">Không cánh (Cua, Nhện)</text>
        </g>
        <text x="300" y="150" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">Nguyên tắc: Mỗi bước chia đôi tập hợp thành 2 nhánh theo 1 cặp đặc điểm đối lập rõ ràng</text>
      `);

    case 27:
      return svgWrapper(550, 140, 'Cấu tạo tế bào nhân sơ điển hình của vi khuẩn', `
        <g transform="translate(50, 20)">
          <ellipse cx="140" cy="50" rx="100" ry="40" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
          <ellipse cx="140" cy="50" rx="85" ry="30" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
          <ellipse cx="140" cy="50" rx="70" ry="22" fill="#a7f3d0"/>
          <path d="M 120 45 Q 140 35 155 50 Q 140 60 120 45" stroke="#7c3aed" stroke-width="3" fill="none"/>
          <text x="140" y="53" font-size="9" font-weight="bold" fill="#6d28d9" text-anchor="middle">Vùng nhân (DNA)</text>
          <path d="M 240 50 Q 280 20 310 50 T 360 40" fill="none" stroke="#059669" stroke-width="2.5"/>
          <text x="320" y="30" font-size="10" font-weight="bold" fill="#065f46">Roi bơi</text>
        </g>
        <g transform="translate(390, 40)">
          <text x="0" y="15" font-size="10" font-weight="bold" fill="#047857">• Vỏ nhầy & Thành tế bào</text>
          <text x="0" y="30" font-size="10" font-weight="bold" fill="#059669">• Màng tế bào & Tế bào chất</text>
          <text x="0" y="45" font-size="10" font-weight="bold" fill="#6d28d9">• Vùng nhân (chưa có màng nhân)</text>
        </g>
        <text x="275" y="125" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">Vai trò: Phân giải xác hữu cơ, lên men làm sữa chua, dưa muối &bull; Một số gây bệnh (tả, lao)</text>
      `);

    case 28:
      return svgWrapper(600, 140, 'Quy trình lên men lactic làm sữa chua an toàn', `
        <g transform="translate(15, 20)">
          <rect x="0" y="0" width="120" height="55" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="60" y="22" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">1. PHA SỮA</text>
          <text x="60" y="38" font-size="8.5" fill="#2563eb" text-anchor="middle">Nước ấm ≈ 50 °C</text>
          <text x="60" y="49" font-size="8.5" fill="#2563eb" text-anchor="middle">+ Sữa đặc, khuấy đều</text>
        </g>
        <path d="M 140 47 L 160 47" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
        <g transform="translate(165, 20)">
          <rect x="0" y="0" width="120" height="55" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="60" y="22" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">2. TRỘN MEN</text>
          <text x="60" y="38" font-size="8.5" fill="#059669" text-anchor="middle">Thêm sữa chua giống</text>
          <text x="60" y="49" font-size="8.5" fill="#059669" text-anchor="middle">(vi khuẩn Lactobacillus)</text>
        </g>
        <path d="M 290 47 L 310 47" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
        <g transform="translate(315, 20)">
          <rect x="0" y="0" width="125" height="55" rx="8" fill="#fffbeb" stroke="#f59e0b"/>
          <text x="62" y="22" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">3. Ủ ẤM</text>
          <text x="62" y="38" font-size="8.5" fill="#b45309" text-anchor="middle">Ủ trong thùng xốp</text>
          <text x="62" y="49" font-size="8.5" fill="#b45309" text-anchor="middle">ấm 10 – 12 giờ</text>
        </g>
        <path d="M 445 47 L 465 47" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-amber)"/>
        <g transform="translate(470, 20)">
          <rect x="0" y="0" width="115" height="55" rx="8" fill="#fdf4ff" stroke="#c084fc"/>
          <text x="57" y="22" font-size="10" font-weight="bold" fill="#7e22ce" text-anchor="middle">4. BẢO QUẢN</text>
          <text x="57" y="38" font-size="8.5" fill="#9333ea" text-anchor="middle">Để ngăn mát tủ lạnh</text>
          <text x="57" y="49" font-size="8.5" fill="#9333ea" text-anchor="middle">làm chậm lên men</text>
        </g>
        <text x="300" y="110" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">Vi khuẩn lên men chuyển hóa đường thành acid lactic làm sữa chua đông sánh mịn</text>
      `);

    case 29:
      return svgWrapper(550, 140, 'Cấu tạo hạt virus: Chưa có cấu trúc tế bào, ký sinh nội bào', `
        <g transform="translate(60, 20)">
          <polygon points="50,10 75,25 75,55 50,70 25,55 25,25" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
          <path d="M 45 35 Q 55 40 45 45" stroke="#ef4444" stroke-width="2" fill="none"/>
          <line x1="50" y1="70" x2="50" y2="90" stroke="#3b82f6" stroke-width="3"/>
          <path d="M 50 90 L 30 110 M 50 90 L 70 110 M 50 90 L 20 95 M 50 90 L 80 95" stroke="#2563eb" stroke-width="1.5"/>
          <text x="50" y="125" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Thực khuẩn thể (Phage)</text>
        </g>
        <g transform="translate(230, 20)">
          <circle cx="50" cy="50" r="35" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
          <circle cx="50" cy="50" r="22" fill="#fecaca"/>
          <circle cx="15" cy="50" r="4" fill="#b91c1c"/>
          <circle cx="85" cy="50" r="4" fill="#b91c1c"/>
          <circle cx="50" cy="15" r="4" fill="#b91c1c"/>
          <circle cx="50" cy="85" r="4" fill="#b91c1c"/>
          <text x="50" y="54" font-size="8" font-weight="bold" fill="#7f1d1d" text-anchor="middle">RNA/DNA</text>
          <text x="50" y="110" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Virus có gai vỏ ngoài</text>
        </g>
        <g transform="translate(370, 30)">
          <rect x="0" y="0" width="160" height="70" rx="8" fill="#fef2f2" stroke="#ef4444"/>
          <text x="80" y="20" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">ĐẶC ĐIỂM CỐT LÕI</text>
          <text x="80" y="38" font-size="9" fill="#b91c1c" text-anchor="middle">• Chưa có cấu tạo tế bào</text>
          <text x="80" y="50" font-size="9" fill="#b91c1c" text-anchor="middle">• Ký sinh nội bào bắt buộc</text>
          <text x="80" y="62" font-size="9" fill="#b91c1c" text-anchor="middle">• Kháng sinh KHÔNG diệt được</text>
        </g>
      `);

    case 30:
      return svgWrapper(580, 140, '3 Đại diện nguyên sinh vật & Con đường truyền bệnh sốt rét', `
        <g transform="translate(20, 20)">
          <rect x="0" y="0" width="110" height="55" rx="6" fill="#ecfdf5" stroke="#10b981"/>
          <text x="55" y="22" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">Trùng roi xanh</text>
          <text x="55" y="38" font-size="8.5" fill="#047857" text-anchor="middle">Di chuyển bằng roi</text>
          <text x="55" y="48" font-size="8.5" fill="#047857" text-anchor="middle">Có lục lạp quang hợp</text>
        </g>
        <g transform="translate(145, 20)">
          <rect x="0" y="0" width="110" height="55" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="55" y="22" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Trùng giày</text>
          <text x="55" y="38" font-size="8.5" fill="#2563eb" text-anchor="middle">Lông bơi quanh thân</text>
          <text x="55" y="48" font-size="8.5" fill="#2563eb" text-anchor="middle">Hình giống chiếc giày</text>
        </g>
        <g transform="translate(270, 20)">
          <rect x="0" y="0" width="110" height="55" rx="6" fill="#fdf4ff" stroke="#c084fc"/>
          <text x="55" y="22" font-size="10" font-weight="bold" fill="#7e22ce" text-anchor="middle">Trùng biến hình</text>
          <text x="55" y="38" font-size="8.5" fill="#9333ea" text-anchor="middle">Tạo chân giả</text>
          <text x="55" y="48" font-size="8.5" fill="#9333ea" text-anchor="middle">bắt mồi & di chuyển</text>
        </g>
        <g transform="translate(395, 20)">
          <rect x="0" y="0" width="165" height="55" rx="6" fill="#fee2e2" stroke="#ef4444"/>
          <text x="82" y="18" font-size="9.5" font-weight="bold" fill="#991b1b" text-anchor="middle">BỆNH SỐT RÉT</text>
          <text x="82" y="34" font-size="8" fill="#b91c1c" text-anchor="middle">Người bệnh → Muỗi Anopheles</text>
          <text x="82" y="46" font-size="8" fill="#b91c1c" text-anchor="middle">→ Truyền Plasmodium sang người lành</text>
        </g>
        <text x="290" y="110" font-size="10" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Phòng sốt rét: Ngủ màn, diệt bọ gậy, tránh muỗi đốt &bull; Phòng kiết lị: Ăn chín uống sôi</text>
      `);

    case 31:
      return svgWrapper(550, 130, 'Kỹ năng thực hành: Dùng sợi bông cố định trùng giày bơi nhanh', `
        <g transform="translate(60, 20)">
          <rect x="0" y="0" width="180" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="90" y="24" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">LAM KÍNH & SỢI BÔNG</text>
          <text x="90" y="42" font-size="8.5" fill="#2563eb" text-anchor="middle">Đặt vài sợi bông mỏng</text>
          <text x="90" y="54" font-size="8.5" fill="#2563eb" text-anchor="middle">dưới lamen cản trở bơi nhanh</text>
        </g>
        <path d="M 255 50 L 305 50" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
        <g transform="translate(320, 20)">
          <rect x="0" y="0" width="180" height="60" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="90" y="24" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">QUAN SÁT RÕ NÉT</text>
          <text x="90" y="42" font-size="8.5" fill="#059669" text-anchor="middle">Thấy rõ rãnh miệng, không bào</text>
          <text x="90" y="54" font-size="8.5" fill="#059669" text-anchor="middle">và hoạt động đập của lông bơi</text>
        </g>
        <text x="275" y="110" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Trùng roi xanh có roi bơi và điểm mắt &bull; Trùng giày có lông bơi quanh thân</text>
      `);

    case 32:
      return svgWrapper(550, 150, 'Cấu tạo giải phẫu của nấm đảm (Nấm ăn)', `
        <g transform="translate(80, 20)">
          <path d="M 10 40 Q 50 5 90 40 Z" fill="#b45309" stroke="#78350f" stroke-width="2"/>
          <text x="50" y="30" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Mũ nấm</text>
          <path d="M 20 40 L 80 40" stroke="#fef3c7" stroke-width="3"/>
          <text x="120" y="42" font-size="9" fill="#92400e">← Phiến nấm (chứa bào tử)</text>
          <rect x="42" y="42" width="16" height="60" fill="#fef3c7" stroke="#b45309"/>
          <ellipse cx="50" cy="65" rx="14" ry="4" fill="#d97706"/>
          <text x="110" y="67" font-size="9" fill="#92400e">← Vòng cuống</text>
          <ellipse cx="50" cy="102" rx="16" ry="7" fill="#92400e"/>
          <text x="110" y="104" font-size="9" fill="#92400e">← Bao gốc nấm</text>
          <path d="M 50 105 L 35 125 M 50 105 L 65 125 M 50 105 L 50 128" stroke="#78350f" stroke-width="1.5"/>
          <text x="110" y="125" font-size="9" fill="#78350f">← Sợi nấm (hút dưỡng chất)</text>
        </g>
        <g transform="translate(320, 30)">
          <rect x="0" y="0" width="200" height="75" rx="8" fill="#fef2f2" stroke="#ef4444"/>
          <text x="100" y="22" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">CẢNH BÁO NẤM ĐỘC</text>
          <text x="100" y="40" font-size="8.5" fill="#b91c1c" text-anchor="middle">• Tuyệt đối không tự ý hái nấm lạ</text>
          <text x="100" y="52" font-size="8.5" fill="#b91c1c" text-anchor="middle">• Nấm độc có thể màu trắng, thơm</text>
          <text x="100" y="64" font-size="8.5" fill="#b91c1c" text-anchor="middle">• Cắt bỏ mốc không hết độc tố</text>
        </g>
      `);

    case 33:
      return svgWrapper(550, 130, 'Cấu tạo nấm mốc dạng sợi và túi bào tử sinh sản', `
        <g transform="translate(50, 20)">
          <path d="M 30 70 L 60 20 M 60 70 L 80 25 M 100 70 L 110 30" stroke="#059669" stroke-width="2"/>
          <circle cx="60" cy="18" r="10" fill="#10b981"/>
          <circle cx="80" cy="23" r="8" fill="#10b981"/>
          <circle cx="110" cy="28" r="9" fill="#10b981"/>
          <text x="70" y="90" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">Túi bào tử & Sợi mốc</text>
        </g>
        <g transform="translate(260, 20)">
          <rect x="0" y="0" width="240" height="60" rx="8" fill="#fef2f2" stroke="#ef4444"/>
          <text x="120" y="22" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">TÁC HẠI & PHÒNG NGỪA</text>
          <text x="120" y="38" font-size="8.5" fill="#b91c1c" text-anchor="middle">• Làm mốc thiu bánh mì, quả, ngô gạo</text>
          <text x="120" y="50" font-size="8.5" fill="#b91c1c" text-anchor="middle">• Chứa độc tố vi nấm (Aflatoxin gây ung thư)</text>
        </g>
        <text x="275" y="110" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Bảo quản thực phẩm nơi khô ráo, thoáng mát hoặc bảo quản lạnh để ngăn nấm mốc</text>
      `);

    case 34:
    case 35:
      return svgWrapper(600, 140, 'Khóa phân loại 4 ngành Thực vật theo Mạch dẫn, Hạt và Quả', `
        <g transform="translate(10, 20)">
          <rect x="0" y="0" width="130" height="65" rx="6" fill="#ecfdf5" stroke="#10b981"/>
          <text x="65" y="20" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">1. NGÀNH RÊU</text>
          <text x="65" y="36" font-size="8" fill="#047857" text-anchor="middle">• Chưa có mạch dẫn</text>
          <text x="65" y="48" font-size="8" fill="#047857" text-anchor="middle">• Rễ giả, sinh sản bào tử</text>
        </g>
        <path d="M 145 52 L 155 52" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
        <g transform="translate(160, 20)">
          <rect x="0" y="0" width="130" height="65" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="65" y="20" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">2. DƯƠNG XỈ</text>
          <text x="65" y="36" font-size="8" fill="#2563eb" text-anchor="middle">• Đã có mạch dẫn</text>
          <text x="65" y="48" font-size="8" fill="#2563eb" text-anchor="middle">• Lá non cuộn, bào tử</text>
        </g>
        <path d="M 295 52 L 305 52" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
        <g transform="translate(310, 20)">
          <rect x="0" y="0" width="130" height="65" rx="6" fill="#fffbeb" stroke="#f59e0b"/>
          <text x="65" y="20" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">3. HẠT TRẦN</text>
          <text x="65" y="36" font-size="8" fill="#b45309" text-anchor="middle">• Có hạt nằm lộ</text>
          <text x="65" y="48" font-size="8" fill="#b45309" text-anchor="middle">• Cơ quan sinh sản: Nón</text>
        </g>
        <path d="M 445 52 L 455 52" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-amber)"/>
        <g transform="translate(460, 20)">
          <rect x="0" y="0" width="130" height="65" rx="6" fill="#fdf4ff" stroke="#c084fc"/>
          <text x="65" y="20" font-size="10" font-weight="bold" fill="#7e22ce" text-anchor="middle">4. HẠT KÍN</text>
          <text x="65" y="36" font-size="8" fill="#9333ea" text-anchor="middle">• Có hoa, quả thật</text>
          <text x="65" y="48" font-size="8" fill="#9333ea" text-anchor="middle">• Hạt bọc trong quả (lúa, đậu)</text>
        </g>
        <text x="300" y="115" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Thực vật quang hợp hấp thu CO₂ và nhả O₂, giúp cân bằng khí quyển và chống xói mòn đất</text>
      `);

    case 36:
      return svgWrapper(600, 150, 'Phân chia 2 nhóm Động vật chính: Không xương sống vs Có xương sống', `
        <g transform="translate(20, 20)">
          <rect x="0" y="0" width="260" height="90" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
          <text x="130" y="24" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">ĐỘNG VẬT KHÔNG XƯƠNG SỐNG</text>
          <text x="130" y="44" font-size="9.5" fill="#b45309" text-anchor="middle">• Ruột khoang: Thủy tức, sứa, hải quỳ</text>
          <text x="130" y="60" font-size="9.5" fill="#b45309" text-anchor="middle">• Giun: Giun dẹp, giun tròn, giun đốt</text>
          <text x="130" y="76" font-size="9.5" fill="#b45309" text-anchor="middle">• Thân mềm (trai, ốc, mực) & Chân khớp (tôm, cua, nhện)</text>
        </g>
        <g transform="translate(310, 20)">
          <rect x="0" y="0" width="270" height="90" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
          <text x="135" y="24" font-size="12" font-weight="bold" fill="#065f46" text-anchor="middle">ĐỘNG VẬT CÓ XƯƠNG SỐNG</text>
          <text x="135" y="44" font-size="9.5" fill="#047857" text-anchor="middle">• Lớp Cá: Hô hấp bằng mang, bơi vây</text>
          <text x="135" y="60" font-size="9.5" fill="#047857" text-anchor="middle">• Lưỡng cư (ếch, cóc) & Bò sát (rùa, thằn lằn, cá sấu)</text>
          <text x="135" y="76" font-size="9.5" fill="#047857" text-anchor="middle">• Chim (lông vũ, cánh) & Thú (lông mao, đẻ con, nuôi sữa)</text>
        </g>
        <text x="300" y="132" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Lưu ý: Cá voi và dơi thuộc lớp Thú &bull; Tôm, cua có vỏ cứng nhưng KHÔNG CÓ xương sống</text>
      `);

    case 37:
    case 38:
    case 39:
      return svgWrapper(580, 140, 'Mạng lưới thức ăn trong hệ sinh thái & Bảo tồn đa dạng sinh học', `
        <g transform="translate(20, 20)">
          <rect x="0" y="0" width="100" height="40" rx="6" fill="#dcfce7" stroke="#16a34a"/>
          <text x="50" y="25" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">Cây xanh (Rau)</text>
        </g>
        <path d="M 125 40 L 155 40" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow)"/>
        <g transform="translate(160, 20)">
          <rect x="0" y="0" width="90" height="40" rx="6" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="45" y="25" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Sâu ăn lá</text>
        </g>
        <path d="M 255 40 L 285 40" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
        <g transform="translate(290, 20)">
          <rect x="0" y="0" width="100" height="40" rx="6" fill="#fef3c7" stroke="#d97706"/>
          <text x="50" y="25" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">Chim sâu</text>
        </g>
        <path d="M 395 40 L 425 40" stroke="#d97706" stroke-width="2" marker-end="url(#arrow-amber)"/>
        <g transform="translate(430, 20)">
          <rect x="0" y="0" width="110" height="40" rx="6" fill="#fee2e2" stroke="#dc2626"/>
          <text x="55" y="25" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Diều hâu (Ăn thịt)</text>
        </g>
        <rect x="40" y="80" width="500" height="35" rx="6" fill="#ecfdf5" stroke="#10b981"/>
        <text x="290" y="102" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">Bảo vệ đa dạng sinh học: Trồng rừng, không săn bắt mua bán thú hoang dã, bảo vệ nơi sống</text>
      `);

    case 40:
      return svgWrapper(550, 130, 'Tác dụng của lực: Đổi hướng, Đổi tốc độ và Làm biến dạng', `
        <g transform="translate(30, 20)">
          <rect x="0" y="0" width="140" height="50" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="70" y="22" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">THAY ĐỔI TỐC ĐỘ</text>
          <text x="70" y="38" font-size="9" fill="#2563eb" text-anchor="middle">Nhanh lên, chậm đi, dừng lại</text>
        </g>
        <g transform="translate(200, 20)">
          <rect x="0" y="0" width="140" height="50" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="70" y="22" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">ĐỔI HƯỚNG</text>
          <text x="70" y="38" font-size="9" fill="#059669" text-anchor="middle">Bóng đập tường bay chệch</text>
        </g>
        <g transform="translate(370, 20)">
          <rect x="0" y="0" width="140" height="50" rx="8" fill="#fffbeb" stroke="#f59e0b"/>
          <text x="70" y="22" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">BIẾN DẠNG</text>
          <text x="70" y="38" font-size="9" fill="#d97706" text-anchor="middle">Nén lò xo, bóp quả bóng</text>
        </g>
        <rect x="50" y="85" width="450" height="30" rx="6" fill="#f8fafc" stroke="#64748b"/>
        <text x="275" y="104" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Phân loại: Lực tiếp xúc (chạm nhau) vs Lực không tiếp xúc (lực hút nam châm, trọng lực)</text>
      `);

    case 41:
      return svgWrapper(550, 130, '4 Yếu tố biểu diễn vectơ lực bằng mũi tên (Niutơn N)', `
        <line x1="80" y1="50" x2="380" y2="50" stroke="#ef4444" stroke-width="4" marker-end="url(#arrow)"/>
        <circle cx="80" cy="50" r="6" fill="#b91c1c"/>
        <text x="80" y="75" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">1. Điểm đặt (gốc)</text>
        <text x="230" y="38" font-size="10" font-weight="bold" fill="#ef4444" text-anchor="middle">2. Phương & Chiều</text>
        <text x="230" y="75" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">3. Độ lớn (Chiều dài theo tỉ xích)</text>
        <rect x="420" y="25" width="100" height="50" rx="6" fill="#fef3c7" stroke="#d97706"/>
        <text x="470" y="45" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">Tỉ xích quy ước</text>
        <text x="470" y="60" font-size="9" fill="#b45309" text-anchor="middle">1 cm ứng với 10 N</text>
        <text x="275" y="110" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">Đo độ lớn của lực bằng Lực kế &bull; Đơn vị đo lực là Niutơn (kí hiệu: N)</text>
      `);

    case 42:
      return svgWrapper(550, 130, 'Độ dãn của lò xo tỉ lệ thuận với khối lượng vật treo', `
        <g transform="translate(40, 20)">
          <rect x="0" y="0" width="130" height="55" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="65" y="24" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Treo quả cân 100 g</text>
          <text x="65" y="42" font-size="12" font-bold fill="#2563eb" text-anchor="middle">Δl = 2 cm</text>
        </g>
        <path d="M 180 47 L 220 47" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
        <g transform="translate(230, 20)">
          <rect x="0" y="0" width="130" height="55" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="65" y="24" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">Treo quả cân 200 g</text>
          <text x="65" y="42" font-size="12" font-bold fill="#059669" text-anchor="middle">Δl = 4 cm (gấp đôi)</text>
        </g>
        <g transform="translate(390, 20)">
          <rect x="0" y="0" width="130" height="55" rx="8" fill="#fef3c7" stroke="#d97706"/>
          <text x="65" y="24" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">ĐỊNH LUẬT TỈ LỆ</text>
          <text x="65" y="42" font-size="11" font-bold fill="#b45309" text-anchor="middle">Δl₂ / Δl₁ = m₂ / m₁</text>
        </g>
        <text x="275" y="105" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">Độ dãn: Δl = l − l₀ (với l₀ là chiều dài tự nhiên, l là chiều dài khi treo quả cân)</text>
      `);

    case 43:
      return svgWrapper(580, 140, 'Mối quan hệ giữa Khối lượng m và Trọng lượng P (P ≈ 10m)', `
        <g transform="translate(30, 20)">
          <circle cx="50" cy="40" r="30" fill="#3b82f6"/>
          <text x="50" y="38" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">TRÁI ĐẤT</text>
          <text x="50" y="52" font-size="9" fill="#bfdbfe" text-anchor="middle">g ≈ 9,8 N/kg</text>
          <text x="50" y="85" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Vật 1 kg = 9,8 N</text>
        </g>
        <g transform="translate(200, 20)">
          <circle cx="50" cy="40" r="18" fill="#94a3b8"/>
          <text x="50" y="38" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">MẶT TRĂNG</text>
          <text x="50" y="50" font-size="8" fill="#e2e8f0" text-anchor="middle">g ≈ 1,7 N/kg</text>
          <text x="50" y="85" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">Vật 1 kg = 1,7 N</text>
        </g>
        <g transform="translate(370, 20)">
          <circle cx="50" cy="40" r="24" fill="#ef4444"/>
          <text x="50" y="38" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">HỎA TINH</text>
          <text x="50" y="50" font-size="8" fill="#fecaca" text-anchor="middle">g ≈ 3,6 N/kg</text>
          <text x="50" y="85" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">Vật 1 kg = 3,6 N</text>
        </g>
        <text x="290" y="125" font-size="10" font-weight="bold" fill="#10b981" text-anchor="middle">Gần mặt đất: P ≈ 10 × m (với m tính theo kg, P tính theo N). Khối lượng không đổi khắp vũ trụ!</text>
      `);

    case 44:
      return svgWrapper(550, 130, 'Phân biệt Ma sát nghỉ, Ma sát trượt & Cách giảm ma sát', `
        <g transform="translate(40, 20)">
          <rect x="0" y="0" width="140" height="50" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="70" y="22" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">MA SÁT NGHỈ</text>
          <text x="70" y="38" font-size="9" fill="#2563eb" text-anchor="middle">Giữ vật không trượt khi đẩy nhẹ</text>
        </g>
        <g transform="translate(205, 20)">
          <rect x="0" y="0" width="140" height="50" rx="8" fill="#fffbeb" stroke="#f59e0b"/>
          <text x="70" y="22" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">MA SÁT TRƯỢT</text>
          <text x="70" y="38" font-size="9" fill="#d97706" text-anchor="middle">Xuất hiện khi vật trượt trên mặt</text>
        </g>
        <g transform="translate(370, 20)">
          <rect x="0" y="0" width="140" height="50" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="70" y="22" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">GIẢM MA SÁT CÓ HẠI</text>
          <text x="70" y="38" font-size="9" fill="#059669" text-anchor="middle">Tra dầu mỡ, dùng ổ bi</text>
        </g>
        <text x="275" y="105" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Ma sát có lợi giúp bàn chân bước đi không bị trượt ngã, xe phanh lại an toàn</text>
      `);

    case 45:
      return svgWrapper(550, 130, 'Hình dạng thuôn khí động học & thủy động học giúp giảm lực cản', `
        <g transform="translate(60, 25)">
          <ellipse cx="80" cy="35" rx="55" ry="20" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
          <polygon points="135,35 160,20 160,50" fill="#38bdf8"/>
          <path d="M 10 20 Q 80 5 150 20" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
          <path d="M 10 50 Q 80 65 150 50" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="80" y="39" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">Dạng thuôn cá / tàu ngầm</text>
          <text x="80" y="70" font-size="9" fill="#0284c7" text-anchor="middle">Lực cản chất lỏng rất nhỏ</text>
        </g>
        <g transform="translate(320, 25)">
          <rect x="60" y="15" width="12" height="50" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
          <path d="M 10 25 L 55 25" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow)"/>
          <path d="M 10 40 L 55 40" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow)"/>
          <path d="M 10 55 L 55 55" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="120" y="35" font-size="10" font-weight="bold" fill="#991b1b">Mặt cản phẳng rộng</text>
          <text x="120" y="50" font-size="9" fill="#b91c1c">Lực cản rất lớn!</text>
        </g>
        <text x="275" y="110" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Ứng dụng: Vận động viên đạp xe cúi người, thiết kế mũi tàu thuyền hình thoi để lướt nước</text>
      `);

    case 46:
      return svgWrapper(550, 130, 'Hai phương thức truyền năng lượng giữa các vật (Đơn vị: Joule J)', `
        <g transform="translate(40, 20)">
          <rect x="0" y="0" width="200" height="55" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
          <text x="100" y="24" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">TRUYỀN QUA TÁC DỤNG LỰC</text>
          <text x="100" y="42" font-size="9" fill="#047857" text-anchor="middle">Gió thổi làm quay cánh quạt tua-bin</text>
        </g>
        <g transform="translate(290, 20)">
          <rect x="0" y="0" width="200" height="55" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
          <text x="100" y="24" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">TRUYỀN QUA TRUYỀN NHIỆT</text>
          <text x="100" y="42" font-size="9" fill="#991b1b" text-anchor="middle">Ngọn lửa truyền nhiệt làm sôi nước</text>
        </g>
        <rect x="60" y="85" width="410" height="28" rx="6" fill="#f8fafc" stroke="#94a3b8"/>
        <text x="265" y="103" font-size="10" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Quy đổi đơn vị: 1 kJ = 1 000 J &bull; Năng lượng đặc trưng cho khả năng tác dụng lực</text>
      `);

    case 47:
      return svgWrapper(600, 140, 'Hệ thống các dạng năng lượng trong tự nhiên (Đơn vị: Joule J)', `
        <g transform="translate(15, 20)">
          <rect x="0" y="0" width="85" height="40" rx="6" fill="#dbeafe" stroke="#2563eb"/>
          <text x="42" y="25" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">ĐỘNG NĂNG</text>
        </g>
        <g transform="translate(110, 20)">
          <rect x="0" y="0" width="85" height="40" rx="6" fill="#ede9fe" stroke="#7c3aed"/>
          <text x="42" y="25" font-size="10" font-weight="bold" fill="#5b21b6" text-anchor="middle">THẾ NĂNG</text>
        </g>
        <g transform="translate(205, 20)">
          <rect x="0" y="0" width="85" height="40" rx="6" fill="#fef3c7" stroke="#d97706"/>
          <text x="42" y="25" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">HÓA NĂNG</text>
        </g>
        <g transform="translate(300, 20)">
          <rect x="0" y="0" width="85" height="40" rx="6" fill="#fef08a" stroke="#ca8a04"/>
          <text x="42" y="25" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">QUANG NĂNG</text>
        </g>
        <g transform="translate(395, 20)">
          <rect x="0" y="0" width="90" height="40" rx="6" fill="#fee2e2" stroke="#dc2626"/>
          <text x="45" y="25" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">NHIỆT NĂNG</text>
        </g>
        <g transform="translate(495, 20)">
          <rect x="0" y="0" width="85" height="40" rx="6" fill="#ecfdf5" stroke="#10b981"/>
          <text x="42" y="25" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">ĐIỆN NĂNG</text>
        </g>
        <rect x="60" y="80" width="480" height="30" rx="6" fill="#f8fafc" stroke="#94a3b8"/>
        <text x="300" y="99" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Định luật bảo toàn: Năng lượng không tự sinh ra hoặc mất đi, chỉ biến đổi hoặc truyền giữa các vật</text>
      `);

    case 48:
      return svgWrapper(580, 140, 'Chuỗi chuyển hóa năng lượng & Định luật bảo toàn năng lượng', `
        <g transform="translate(15, 20)">
          <rect x="0" y="0" width="105" height="50" rx="8" fill="#fef3c7" stroke="#d97706"/>
          <text x="52" y="22" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">HÓA NĂNG</text>
          <text x="52" y="38" font-size="8.5" fill="#b45309" text-anchor="middle">(Pin / Thức ăn)</text>
        </g>
        <path d="M 125 45 L 155 45" stroke="#d97706" stroke-width="2" marker-end="url(#arrow-amber)"/>
        <g transform="translate(160, 20)">
          <rect x="0" y="0" width="105" height="50" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="52" y="22" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">ĐIỆN NĂNG</text>
          <text x="52" y="38" font-size="8.5" fill="#2563eb" text-anchor="middle">(Dòng điện)</text>
        </g>
        <path d="M 270 45 L 300 45" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
        <g transform="translate(305, 20)">
          <rect x="0" y="0" width="115" height="50" rx="8" fill="#ecfdf5" stroke="#10b981"/>
          <text x="57" y="22" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">QUANG NĂNG</text>
          <text x="57" y="38" font-size="8.5" fill="#059669" text-anchor="middle">(Bóng đèn sáng)</text>
        </g>
        <path d="M 362 70 L 362 90 L 440 90" stroke="#f43f5e" stroke-width="2"/>
        <g transform="translate(445, 65)">
          <rect x="0" y="0" width="115" height="45" rx="8" fill="#fff1f2" stroke="#f43f5e"/>
          <text x="57" y="20" font-size="10" font-weight="bold" fill="#9f1239" text-anchor="middle">+ NHIỆT NĂNG</text>
          <text x="57" y="35" font-size="8.5" fill="#be123c" text-anchor="middle">(Làm nóng bóng đèn)</text>
        </g>
        <text x="200" y="115" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Năng lượng không tự sinh ra hay mất đi, chỉ biến đổi từ dạng này sang dạng khác</text>
      `);

    case 49:
      return svgWrapper(550, 130, 'Sơ đồ dòng năng lượng: Đầu vào = Hữu ích + Hao phí', `
        <g transform="translate(20, 20)">
          <rect x="0" y="0" width="130" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
          <text x="65" y="25" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">ĐIỆN NĂNG VÀO</text>
          <text x="65" y="45" font-size="13" font-weight="bold" fill="#2563eb" text-anchor="middle">100 J (100%)</text>
        </g>
        <path d="M 160 40 L 250 25" stroke="#10b981" stroke-width="4" marker-end="url(#arrow)"/>
        <g transform="translate(260, 5)">
          <rect x="0" y="0" width="180" height="35" rx="6" fill="#ecfdf5" stroke="#10b981"/>
          <text x="90" y="22" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">HỮU ÍCH: Ánh sáng (80 J)</text>
        </g>
        <path d="M 160 55 L 250 70" stroke="#f43f5e" stroke-width="2"/>
        <g transform="translate(260, 50)">
          <rect x="0" y="0" width="180" height="35" rx="6" fill="#fff1f2" stroke="#f43f5e"/>
          <text x="90" y="22" font-size="10" font-weight="bold" fill="#9f1239" text-anchor="middle">HAO PHÍ: Nhiệt tỏa ra (20 J)</text>
        </g>
        <text x="275" y="115" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">Đèn LED cho hiệu suất quang năng cao hơn rất nhiều so với đèn sợi đốt tỏa nhiều nhiệt</text>
      `);

    case 50:
      return svgWrapper(550, 130, 'Phân loại nguồn năng lượng tái tạo và không tái tạo', `
        <g transform="translate(30, 20)">
          <rect x="0" y="0" width="220" height="60" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
          <text x="110" y="25" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">NĂNG LƯỢNG TÁI TẠO</text>
          <text x="110" y="45" font-size="9.5" fill="#047857" text-anchor="middle">Mặt Trời, Gió, Nước, Địa nhiệt, Sinh khối</text>
        </g>
        <g transform="translate(290, 20)">
          <rect x="0" y="0" width="230" height="60" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
          <text x="115" y="25" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">KHÔNG TÁI TẠO (HỮU HẠN)</text>
          <text x="115" y="45" font-size="9.5" fill="#b91c1c" text-anchor="middle">Nhiên liệu hóa thạch: Than đá, Dầu mỏ, Khí gas</text>
        </g>
        <text x="275" y="110" font-size="10" font-weight="bold" fill="#0f766e" text-anchor="middle">Phát triển năng lượng sạch giúp giảm phát thải khí nhà kính và bảo vệ khí hậu Trái Đất</text>
      `);

    case 51:
      return svgWrapper(580, 140, 'Bài toán so sánh kinh tế & năng lượng SGK giữa đèn sợi đốt và đèn LED', `
        <g transform="translate(30, 20)">
          <rect x="0" y="0" width="230" height="70" rx="8" fill="#fee2e2" stroke="#ef4444"/>
          <text x="115" y="22" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">ĐÈN SỢI ĐỐT (0,075 kWh/h)</text>
          <text x="115" y="42" font-size="9.5" fill="#b91c1c" text-anchor="middle">1 năm dùng hết: 328,5 kWh</text>
          <text x="115" y="58" font-size="10" font-weight="bold" fill="#7f1d1d" text-anchor="middle">Chi phí: 517.750 đồng/năm</text>
        </g>
        <g transform="translate(300, 20)">
          <rect x="0" y="0" width="230" height="70" rx="8" fill="#dcfce7" stroke="#16a34a"/>
          <text x="115" y="22" font-size="11" font-weight="bold" fill="#14532d" text-anchor="middle">ĐÈN COMPACT/LED (0,020 kWh/h)</text>
          <text x="115" y="42" font-size="9.5" fill="#15803d" text-anchor="middle">1 năm dùng hết: 87,6 kWh</text>
          <text x="115" y="58" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">Chi phí: 171.400 đồng/năm</text>
        </g>
        <rect x="80" y="105" width="400" height="25" rx="5" fill="#f0fdf4" stroke="#10b981"/>
        <text x="280" y="122" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">Tiết kiệm được 346.350 đồng/bóng/năm &bull; Tắt thiết bị khi không sử dụng</text>
      `);

    case 52:
      return svgWrapper(560, 140, 'Mô hình chuyển động tự quay của Trái Đất tạo ngày và đêm', `
        <g transform="translate(40, 60)">
          <circle cx="0" cy="0" r="30" fill="#f59e0b"/>
          <text x="0" y="5" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">MẶT TRỜI</text>
        </g>
        <path d="M 80 60 L 160 60" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4,4" marker-end="url(#arrow-amber)"/>
        <g transform="translate(240, 60)">
          <path d="M 0 -35 A 35 35 0 0 1 0 35 Z" fill="#60a5fa"/>
          <path d="M 0 -35 A 35 35 0 0 0 0 35 Z" fill="#1e293b"/>
          <line x1="-15" y1="-50" x2="15" y2="50" stroke="#f8fafc" stroke-width="2"/>
          <text x="0" y="-55" font-size="8" fill="#e2e8f0" text-anchor="middle">Trục nghiêng</text>
        </g>
        <g transform="translate(350, 30)">
          <rect x="0" y="0" width="180" height="65" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="90" y="22" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">NGUYÊN NHÂN NGÀY ĐÊM</text>
          <text x="90" y="40" font-size="9" fill="#2563eb" text-anchor="middle">• Trái Đất dạng hình cầu</text>
          <text x="90" y="55" font-size="9" fill="#2563eb" text-anchor="middle">• Tự quay Tây → Đông (24h)</text>
        </g>
        <text x="280" y="125" font-size="10" font-weight="bold" fill="#475569" text-anchor="middle">Mặt Trời mọc hướng Đông lặn hướng Tây là chuyển động nhìn thấy biểu kiến do Trái Đất tự quay</text>
      `);

    case 53:
      return svgWrapper(600, 150, 'Chu kì 8 pha của Mặt Trăng nhìn thấy từ Trái Đất (Chu kì 29,5 ngày)', `
        <g transform="translate(10, 30)">
          <circle cx="25" cy="25" r="16" fill="#334155"/>
          <text x="25" y="55" font-size="8.5" font-weight="bold" fill="#475569" text-anchor="middle">Không trăng</text>
        </g>
        <g transform="translate(85, 30)">
          <circle cx="25" cy="25" r="16" fill="#334155"/>
          <path d="M 25 9 A 16 16 0 0 1 25 41 A 10 16 0 0 0 25 9 Z" fill="#fef08a"/>
          <text x="25" y="55" font-size="8.5" font-weight="bold" fill="#854d0e" text-anchor="middle">Lưỡi liềm đầu</text>
        </g>
        <g transform="translate(160, 30)">
          <circle cx="25" cy="25" r="16" fill="#334155"/>
          <path d="M 25 9 A 16 16 0 0 1 25 41 Z" fill="#fef08a"/>
          <text x="25" y="55" font-size="8.5" font-weight="bold" fill="#854d0e" text-anchor="middle">Bán nguyệt đầu</text>
        </g>
        <g transform="translate(235, 30)">
          <circle cx="25" cy="25" r="16" fill="#fef08a"/>
          <path d="M 25 9 A 16 16 0 0 0 25 41 A 8 16 0 0 0 25 9 Z" fill="#334155"/>
          <text x="25" y="55" font-size="8.5" font-weight="bold" fill="#854d0e" text-anchor="middle">Khuyết đầu</text>
        </g>
        <g transform="translate(310, 30)">
          <circle cx="25" cy="25" r="16" fill="#fef08a" stroke="#ca8a04"/>
          <text x="25" y="55" font-size="8.5" font-weight="bold" fill="#854d0e" text-anchor="middle">Trăng tròn</text>
        </g>
        <g transform="translate(385, 30)">
          <circle cx="25" cy="25" r="16" fill="#fef08a"/>
          <path d="M 25 9 A 16 16 0 0 1 25 41 A 8 16 0 0 1 25 9 Z" fill="#334155"/>
          <text x="25" y="55" font-size="8.5" font-weight="bold" fill="#854d0e" text-anchor="middle">Khuyết cuối</text>
        </g>
        <g transform="translate(460, 30)">
          <circle cx="25" cy="25" r="16" fill="#334155"/>
          <path d="M 25 9 A 16 16 0 0 0 25 41 Z" fill="#fef08a"/>
          <text x="25" y="55" font-size="8.5" font-weight="bold" fill="#854d0e" text-anchor="middle">Bán nguyệt cuối</text>
        </g>
        <g transform="translate(535, 30)">
          <circle cx="25" cy="25" r="16" fill="#334155"/>
          <path d="M 25 9 A 16 16 0 0 0 25 41 A 10 16 0 0 1 25 9 Z" fill="#fef08a"/>
          <text x="25" y="55" font-size="8.5" font-weight="bold" fill="#854d0e" text-anchor="middle">Lưỡi liềm cuối</text>
        </g>
        <text x="300" y="125" font-size="10" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Bản chất: Mặt Trăng không tự phát sáng, các pha là do góc nhìn phần được chiếu sáng thay đổi</text>
      `);

    case 54:
      return svgWrapper(600, 150, 'Thứ tự 8 hành tinh Hệ Mặt Trời theo khoảng cách đơn vị thiên văn AU', `
        <circle cx="20" cy="55" r="30" fill="#f59e0b"/>
        <text x="20" y="59" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Mặt Trời</text>
        <g transform="translate(80, 55)">
          <circle cx="0" cy="0" r="7" fill="#94a3b8"/>
          <text x="0" y="20" font-size="8" font-weight="bold" fill="#475569" text-anchor="middle">Thủy (0.39)</text>
        </g>
        <g transform="translate(130, 55)">
          <circle cx="0" cy="0" r="10" fill="#fbbf24"/>
          <text x="0" y="24" font-size="8" font-weight="bold" fill="#b45309" text-anchor="middle">Kim (0.72)</text>
        </g>
        <g transform="translate(190, 55)">
          <circle cx="0" cy="0" r="11" fill="#3b82f6"/>
          <text x="0" y="25" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">Trái Đất (1)</text>
        </g>
        <g transform="translate(250, 55)">
          <circle cx="0" cy="0" r="8" fill="#ef4444"/>
          <text x="0" y="22" font-size="8" font-weight="bold" fill="#991b1b" text-anchor="middle">Hỏa (1.52)</text>
        </g>
        <line x1="285" y1="20" x2="285" y2="90" stroke="#94a3b8" stroke-dasharray="2,3" stroke-width="2"/>
        <g transform="translate(330, 55)">
          <circle cx="0" cy="0" r="22" fill="#d97706"/>
          <text x="0" y="34" font-size="8" font-weight="bold" fill="#78350f" text-anchor="middle">Mộc (5.2)</text>
        </g>
        <g transform="translate(405, 55)">
          <circle cx="0" cy="0" r="17" fill="#eab308"/>
          <ellipse cx="0" cy="0" rx="24" ry="5" fill="none" stroke="#ca8a04" stroke-width="2"/>
          <text x="0" y="30" font-size="8" font-weight="bold" fill="#854d0e" text-anchor="middle">Thổ (9.54)</text>
        </g>
        <g transform="translate(475, 55)">
          <circle cx="0" cy="0" r="13" fill="#06b6d4"/>
          <text x="0" y="26" font-size="8" font-weight="bold" fill="#0e7490" text-anchor="middle">Thiên Vương (19.2)</text>
        </g>
        <g transform="translate(545, 55)">
          <circle cx="0" cy="0" r="12" fill="#2563eb"/>
          <text x="0" y="26" font-size="8" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Hải Vương (30.1)</text>
        </g>
        <text x="300" y="125" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">1 AU ≈ 150 triệu km &bull; Vòng trong: đá kim loại &bull; Vòng ngoài: hành tinh khí khổng lồ</text>
      `);

    case 55:
      return svgWrapper(580, 150, 'Cấu trúc đĩa xoắn ốc của Ngân Hà (Milky Way) và vị trí Hệ Mặt Trời', `
        <g transform="translate(180, 65)">
          <ellipse cx="0" cy="0" rx="130" ry="40" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
          <circle cx="0" cy="0" r="16" fill="#fef08a" opacity="0.9"/>
          <text x="0" y="3" font-size="8" font-weight="bold" fill="#854d0e" text-anchor="middle">Tâm Ngân Hà</text>
          <path d="M 0 0 Q 60 25 110 5" fill="none" stroke="#a855f7" stroke-width="2"/>
          <path d="M 0 0 Q -60 -25 -110 -5" fill="none" stroke="#a855f7" stroke-width="2"/>
          <circle cx="70" cy="12" r="5" fill="#f59e0b"/>
          <text x="70" y="28" font-size="8" font-weight="bold" fill="#fbbf24" text-anchor="middle">Hệ Mặt Trời</text>
        </g>
        <g transform="translate(360, 25)">
          <rect x="0" y="0" width="200" height="75" rx="8" fill="#f5f3ff" stroke="#8b5cf6"/>
          <text x="100" y="22" font-size="10" font-weight="bold" fill="#5b21b6" text-anchor="middle">THÔNG SỐ THIÊN VĂN</text>
          <text x="100" y="38" font-size="8.5" fill="#6d28d9" text-anchor="middle">• Đường kính ≈ 100 000 năm á.s</text>
          <text x="100" y="50" font-size="8.5" fill="#6d28d9" text-anchor="middle">• Hệ Mặt Trời cách tâm ≈ 26 000 năm á.s</text>
          <text x="100" y="64" font-size="8.5" fill="#6d28d9" text-anchor="middle">• 1 năm ánh sáng ≈ 9,5 nghìn tỉ km</text>
        </g>
        <text x="290" y="130" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Thứ bậc không gian: Trái Đất → Hệ Mặt Trời → Ngân Hà → Vũ trụ</text>
      `);

    default:
      // Clean, custom styled diagram without any raw LaTeX strings
      return svgWrapper(550, 110, `Sơ đồ khái niệm: ${lessonTitle}`, `
        <rect x="20" y="15" width="220" height="45" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
        <text x="130" y="34" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">KIẾN THỨC TRỌNG TÂM</text>
        <text x="130" y="48" font-size="9" fill="#047857" text-anchor="middle">Khái niệm &amp; Quy luật tự nhiên</text>

        <path d="M 250 37 L 295 37" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>

        <rect x="305" y="15" width="220" height="45" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="415" y="34" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">ỨNG DỤNG &amp; VẬN DỤNG</text>
        <text x="415" y="48" font-size="9" fill="#1d4ed8" text-anchor="middle">Thực hành &amp; Đời sống hàng ngày</text>

        <rect x="50" y="70" width="450" height="26" rx="5" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="275" y="87" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">SGK Kết nối tri thức: Quan sát hiện tượng → Tiến hành đo đạc → Rút ra kết luận khoa học</text>
      `);
  }
}

module.exports = { generateDiagram };
