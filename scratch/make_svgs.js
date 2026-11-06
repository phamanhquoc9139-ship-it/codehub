const fs = require('fs');

const svgTemplates = {
  // 1. Dinh dưỡng
  'nutrition_roles': `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="110" height="100" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <circle cx="65" cy="42" r="18" fill="#dbeafe"/><text x="65" y="47" text-anchor="middle" font-size="14">⚡</text>
    <text x="65" y="75" text-anchor="middle" font-size="10.5" font-bold fill="#1e40af">1. Năng lượng</text>
    <text x="65" y="92" text-anchor="middle" font-size="8.5" fill="#475569">Vận động thể lực</text>

    <rect x="130" y="10" width="110" height="100" rx="12" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
    <circle cx="185" cy="42" r="18" fill="#dcfce7"/><text x="185" y="47" text-anchor="middle" font-size="14">💪</text>
    <text x="185" y="75" text-anchor="middle" font-size="10.5" font-bold fill="#15803d">2. Xây cơ bắp</text>
    <text x="185" y="92" text-anchor="middle" font-size="8.5" fill="#475569">Phục hồi mô tổn</text>

    <rect x="250" y="10" width="110" height="100" rx="12" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
    <circle cx="305" cy="42" r="18" fill="#fef9c3"/><text x="305" y="47" text-anchor="middle" font-size="14">🛡️</text>
    <text x="305" y="75" text-anchor="middle" font-size="10.5" font-bold fill="#a16207">3. Miễn dịch</text>
    <text x="305" y="92" text-anchor="middle" font-size="8.5" fill="#475569">Điều hòa trao đổi</text>

    <rect x="370" y="10" width="120" height="100" rx="12" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
    <circle cx="430" cy="42" r="18" fill="#fae8ff"/><text x="430" y="47" text-anchor="middle" font-size="14">📈</text>
    <text x="430" y="75" text-anchor="middle" font-size="10.5" font-bold fill="#86198f">4. Phát triển</text>
    <text x="430" y="92" text-anchor="middle" font-size="8.5" fill="#475569">Chiều cao &amp; Thể lực</text>
  </svg>`,

  'nutrition_pyramid': `<svg viewBox="0 0 500 130" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Tháp tỉ lệ năng lượng khẩu phần -->
    <polygon points="250,15 310,48 190,48" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="250" y="38" text-anchor="middle" font-size="9" font-bold fill="#991b1b">Protein (12-14%)</text>
    
    <polygon points="190,52 310,52 345,82 155,82" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="250" y="72" text-anchor="middle" font-size="9.5" font-bold fill="#92400e">Lipid - Chất béo (20-30%)</text>

    <polygon points="155,86 345,86 390,122 110,122" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="250" y="108" text-anchor="middle" font-size="10.5" font-bold fill="#1e40af">Carbohydrate - Tinh bột đường (56-68%)</text>

    <!-- Nhãn phụ 2 bên -->
    <rect x="15" y="40" width="85" height="50" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="57" y="58" text-anchor="middle" font-size="8" font-bold fill="#334155">Bữa ăn:</text>
    <text x="57" y="70" text-anchor="middle" font-size="7.5" fill="#64748b">Sáng: 30%</text>
    <text x="57" y="82" text-anchor="middle" font-size="7.5" fill="#64748b">Trưa: 40-45%</text>

    <rect x="400" y="40" width="85" height="50" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="442" y="58" text-anchor="middle" font-size="8" font-bold fill="#334155">Vitamin &amp; Nước:</text>
    <text x="442" y="70" text-anchor="middle" font-size="7.5" fill="#64748b">1.5 - 2 Lít/ngày</text>
    <text x="442" y="82" text-anchor="middle" font-size="7.5" fill="#64748b">Tối: 25-30%</text>
  </svg>`,

  'hydration_rules': `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="15" width="130" height="80" rx="10" fill="#f0f9ff" stroke="#0ea5e9" stroke-width="1.5"/>
    <text x="90" y="38" text-anchor="middle" font-size="10.5" font-bold fill="#0369a1">TRƯỚC TẬP</text>
    <text x="90" y="58" text-anchor="middle" font-size="9" fill="#0284c7">20 - 30 phút trước</text>
    <text x="90" y="78" text-anchor="middle" font-size="11" font-black fill="#0369a1">150 - 250 ml</text>

    <path d="M 160 55 L 180 55" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr)"/>

    <rect x="185" y="15" width="130" height="80" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
    <text x="250" y="38" text-anchor="middle" font-size="10.5" font-bold fill="#047857">TRONG KHI TẬP</text>
    <text x="250" y="58" text-anchor="middle" font-size="9" fill="#059669">Mỗi 15 - 20 phút</text>
    <text x="250" y="78" text-anchor="middle" font-size="11" font-black fill="#047857">100 - 150 ml</text>

    <path d="M 320 55 L 340 55" stroke="#94a3b8" stroke-width="2"/>

    <rect x="345" y="15" width="130" height="80" rx="10" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
    <text x="410" y="38" text-anchor="middle" font-size="10.5" font-bold fill="#a16207">SAU KHI TẬP</text>
    <text x="410" y="58" text-anchor="middle" font-size="9" fill="#ca8a04">Trong 30 - 45 phút</text>
    <text x="410" y="78" text-anchor="middle" font-size="10" font-black fill="#a16207">Bù theo mồ hôi</text>
  </svg>`,

  'nutrition_sports': `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="15" width="140" height="80" rx="10" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.5"/>
    <text x="90" y="38" text-anchor="middle" font-size="10" font-bold fill="#be185d">MÔN TỐC ĐỘ</text>
    <text x="90" y="56" text-anchor="middle" font-size="8.5" fill="#64748b">100m, Nhảy cao</text>
    <text x="90" y="78" text-anchor="middle" font-size="9.5" font-black fill="#be185d">Ưu tiên Protein + Carbs</text>

    <rect x="180" y="15" width="140" height="80" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
    <text x="250" y="38" text-anchor="middle" font-size="10" font-bold fill="#15803d">MÔN SỨC BỀN</text>
    <text x="250" y="56" text-anchor="middle" font-size="8.5" fill="#64748b">Chạy trung bình, bơi</text>
    <text x="250" y="78" text-anchor="middle" font-size="9.5" font-black fill="#15803d">65-70% Carbohydrate</text>

    <rect x="340" y="15" width="140" height="80" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="410" y="38" text-anchor="middle" font-size="10" font-bold fill="#1d4ed8">MÔN BÓNG PHỐI HỢP</text>
    <text x="410" y="56" text-anchor="middle" font-size="8.5" fill="#64748b">Bóng đá, rổ, cầu lông</text>
    <text x="410" y="78" text-anchor="middle" font-size="9.5" font-black fill="#1d4ed8">Cân đối + Bù điện giải</text>
  </svg>`,

  // 2. Chạy ngắn
  'sprint_start_low': `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="95" x2="480" y2="95" stroke="#94a3b8" stroke-width="2.5"/>
    <!-- Vạch xuất phát -->
    <line x1="80" y1="70" x2="80" y2="105" stroke="#ef4444" stroke-width="3"/>
    <text x="80" y="115" text-anchor="middle" font-size="8" font-bold fill="#ef4444">Vạch xuất phát</text>
    <!-- Giai đoạn 1: Vào chỗ -->
    <circle cx="130" cy="55" r="7" fill="#2563eb"/><line x1="130" y1="62" x2="120" y2="80" stroke="#2563eb" stroke-width="3"/><line x1="120" y1="80" x2="110" y2="95" stroke="#2563eb" stroke-width="2.5"/>
    <text x="130" y="38" text-anchor="middle" font-size="9.5" font-bold fill="#1d4ed8">1. "Vào chỗ!"</text>
    <!-- Giai đoạn 2: Sẵn sàng -->
    <circle cx="250" cy="45" r="7" fill="#f59e0b"/><line x1="250" y1="52" x2="235" y2="70" stroke="#f59e0b" stroke-width="3"/><line x1="235" y1="70" x2="225" y2="95" stroke="#f59e0b" stroke-width="2.5"/>
    <text x="250" y="28" text-anchor="middle" font-size="9.5" font-bold fill="#b45309">2. "Sẵn sàng!" (Mông > Vai)</text>
    <!-- Giai đoạn 3: Rời vạch chạy lao -->
    <circle cx="390" cy="50" r="7" fill="#10b981"/><line x1="390" y1="57" x2="365" y2="75" stroke="#10b981" stroke-width="3"/><line x1="365" y1="75" x2="340" y2="95" stroke="#10b981" stroke-width="2.5"/>
    <text x="390" y="33" text-anchor="middle" font-size="9.5" font-bold fill="#047857">3. "Chạy!" (Lao góc 45°)</text>
  </svg>`,

  'sprint_transition': `<svg viewBox="0 0 500 100" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="80" x2="480" y2="80" stroke="#cbd5e1" stroke-width="2"/>
    <!-- Góc nghiêng nâng dần -->
    <g transform="translate(60, 20)">
      <line x1="0" y1="60" x2="35" y2="15" stroke="#3b82f6" stroke-width="3"/>
      <text x="20" y="75" text-anchor="middle" font-size="9" font-bold fill="#1d4ed8">Nghiêng 45°</text>
      <text x="20" y="0" text-anchor="middle" font-size="8" fill="#64748b">Chạy lao (0-15m)</text>
    </g>
    <path d="M 140 45 L 200 45" stroke="#94a3b8" stroke-dasharray="3,3" stroke-width="1.5"/>
    <g transform="translate(230, 20)">
      <line x1="0" y1="60" x2="20" y2="15" stroke="#10b981" stroke-width="3"/>
      <text x="15" y="75" text-anchor="middle" font-size="9" font-bold fill="#047857">Nâng dần 65°</text>
      <text x="15" y="0" text-anchor="middle" font-size="8" fill="#64748b">Chuyển tiếp</text>
    </g>
    <path d="M 290 45 L 350 45" stroke="#94a3b8" stroke-dasharray="3,3" stroke-width="1.5"/>
    <g transform="translate(390, 20)">
      <line x1="0" y1="60" x2="10" y2="15" stroke="#f59e0b" stroke-width="3"/>
      <text x="10" y="75" text-anchor="middle" font-size="9" font-bold fill="#b45309">Thân ngả 80°-85°</text>
      <text x="10" y="0" text-anchor="middle" font-size="8" fill="#64748b">Chạy giữa quãng</text>
    </g>
  </svg>`,

  'sprint_finish': `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="90" x2="480" y2="90" stroke="#94a3b8" stroke-width="2"/>
    <!-- Vạch đích và dây đích -->
    <line x1="300" y1="20" x2="300" y2="95" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="4,2"/>
    <text x="300" y="105" text-anchor="middle" font-size="8.5" font-bold fill="#ef4444">VẠCH ĐÍCH</text>
    <!-- Vận động viên đánh ngực -->
    <circle cx="295" cy="40" r="7" fill="#2563eb"/>
    <line x1="295" y1="47" x2="285" y2="68" stroke="#2563eb" stroke-width="3.5"/>
    <line x1="285" y1="68" x2="265" y2="90" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="285" y1="68" x2="305" y2="90" stroke="#2563eb" stroke-width="2.5"/>
    <text x="210" y="45" font-size="9.5" font-bold fill="#1d4ed8">Gập thân đánh ngực</text>
    <text x="210" y="60" font-size="8.5" fill="#475569">Không giảm tốc trước đích</text>
    <rect x="360" y="30" width="110" height="45" rx="8" fill="#f0fdf4" stroke="#22c55e"/>
    <text x="415" y="48" text-anchor="middle" font-size="8.5" font-bold fill="#15803d">Sau khi qua đích:</text>
    <text x="415" y="62" text-anchor="middle" font-size="8" fill="#475569">Chạy chậm dần 15-20m</text>
  </svg>`
};

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/svg_templates.json', JSON.stringify(svgTemplates, null, 2), 'utf8');
console.log('SVG templates saved!');
