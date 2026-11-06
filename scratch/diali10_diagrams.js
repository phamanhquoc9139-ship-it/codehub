// Thư viện sơ đồ kĩ thuật minh họa SVG thuần túy (Pure Valid SVG) cho môn Địa lí 10
// Chuẩn SGK Kết nối tri thức với cuộc sống

const diagrams = {
  // Sơ đồ 1: Cấu tạo các lớp vỏ Trái Đất
  earth_structure: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ: Cấu trúc phân tầng Vỏ Trái Đất (Vỏ lục địa &amp; Vỏ đại dương)</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 600 200" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Vỏ lục địa (Dày bên trái) -->
          <polygon points="40,60 320,60 320,150 40,150" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
          <text x="180" y="50" fill="#b45309" font-size="12" font-weight="bold" text-anchor="middle">VỎ LỤC ĐỊA (Dày 35 – 70 km)</text>
          
          <!-- Tầng trầm tích lục địa -->
          <rect x="42" y="62" width="276" height="25" fill="#fef08a"/>
          <text x="180" y="78" fill="#854d0e" font-size="9.5" text-anchor="middle">Tầng đá trầm tích</text>

          <!-- Tầng đá granit -->
          <rect x="42" y="88" width="276" height="35" fill="#fed7aa"/>
          <text x="180" y="110" fill="#9a3412" font-size="10.5" font-weight="bold" text-anchor="middle">Tầng đá Granit (Đặc trưng lục địa)</text>

          <!-- Tầng đá badan dưới cùng -->
          <rect x="42" y="124" width="276" height="24" fill="#cbd5e1"/>
          <text x="180" y="140" fill="#334155" font-size="9.5" text-anchor="middle">Tầng đá Badan</text>

          <!-- Biển & Vỏ đại dương bên phải -->
          <!-- Nước biển -->
          <polygon points="320,60 560,60 560,85 320,85" fill="#38bdf8"/>
          <text x="440" y="75" fill="#0369a1" font-size="11" font-weight="bold" text-anchor="middle">ĐẠI DƯƠNG (Nước biển)</text>

          <!-- Vỏ đại dương -->
          <polygon points="320,85 560,85 560,150 320,150" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
          <text x="440" y="105" fill="#0f172a" font-size="11.5" font-weight="bold" text-anchor="middle">VỎ ĐẠI DƯƠNG (5 – 10 km)</text>
          <text x="440" y="123" fill="#ffffff" font-size="9" text-anchor="middle">Trầm tích mỏng + Tầng Badan</text>
          <text x="440" y="138" fill="#f1f5f9" font-size="8.5" text-anchor="middle">(Không có tầng Granit)</text>

          <!-- Lớp Manti trên ở đáy -->
          <rect x="40" y="152" width="520" height="35" rx="6" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5"/>
          <text x="300" y="174" fill="#991b1b" font-size="11.5" font-weight="bold" text-anchor="middle">TẦNG TRÊN CỦA MANTI (QUÁNH DẺO ASTHENOSPHERE)</text>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 2: Chuyển động quanh Mặt Trời & Các mùa
  earth_revolution_seasons: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ: Bốn vị trí thiên văn chính của Trái Đất trong chuyển động quanh Mặt Trời</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 620 220" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Mặt Trời trung tâm -->
          <circle cx="310" cy="110" r="28" fill="#f59e0b"/>
          <text x="310" y="115" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">MẶT TRỜI</text>

          <!-- Quỹ đạo elip nét đứt -->
          <ellipse cx="310" cy="110" rx="260" ry="85" fill="none" stroke="#94a3b8" stroke-dasharray="5,5" stroke-width="1.5"/>

          <!-- 1. Hạ chí (22/6) bên trái -->
          <circle cx="50" cy="110" r="18" fill="#3b82f6"/>
          <line x1="43" y1="90" x2="57" y2="130" stroke="#ef4444" stroke-width="2"/>
          <text x="50" y="75" fill="#1d4ed8" font-size="10" font-weight="bold" text-anchor="middle">HẠ CHÍ (22/6)</text>
          <text x="50" y="145" fill="#64748b" font-size="8.5" text-anchor="middle">Bắc bán cầu ngả về MT</text>
          <text x="50" y="157" fill="#dc2626" font-size="8" font-weight="bold" text-anchor="middle">Ngày dài nhất ở Bắc</text>

          <!-- 2. Đông chí (22/12) bên phải -->
          <circle cx="570" cy="110" r="18" fill="#3b82f6"/>
          <line x1="563" y1="90" x2="577" y2="130" stroke="#ef4444" stroke-width="2"/>
          <text x="570" y="75" fill="#1d4ed8" font-size="10" font-weight="bold" text-anchor="middle">ĐÔNG CHÍ (22/12)</text>
          <text x="570" y="145" fill="#64748b" font-size="8.5" text-anchor="middle">Nam bán cầu ngả về MT</text>
          <text x="570" y="157" fill="#dc2626" font-size="8" font-weight="bold" text-anchor="middle">Đêm dài nhất ở Bắc</text>

          <!-- 3. Xuân phân (21/3) ở dưới -->
          <circle cx="310" cy="195" r="16" fill="#3b82f6"/>
          <text x="310" y="180" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle">XUÂN PHÂN (21/3)</text>
          <text x="310" y="215" fill="#64748b" font-size="8" text-anchor="middle">MT chiếu vuông góc Xích đạo • Ngày = Đêm</text>

          <!-- 4. Thu phân (23/9) ở trên -->
          <circle cx="310" cy="25" r="16" fill="#3b82f6"/>
          <text x="310" y="15" fill="#b45309" font-size="10" font-weight="bold" text-anchor="middle">THU PHÂN (23/9)</text>
          <text x="310" y="52" fill="#64748b" font-size="8" text-anchor="middle">MT chiếu vuông góc Xích đạo • Ngày = Đêm</text>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 3: Các đai khí áp và đới gió trên Trái Đất
  pressure_wind_belts: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ: Hệ thống 7 Đai khí áp xen kẽ và các Đới gió chính trên hành tinh</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 580 240" class="w-full max-w-lg h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Cực Bắc: Áp cao Cực -->
          <rect x="190" y="10" width="200" height="20" rx="6" fill="#3b82f6"/>
          <text x="290" y="24" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">ÁP CAO CỰC BẮC (90°B)</text>

          <!-- Gió Đông cực Bắc -->
          <path d="M 270,35 L 240,55" stroke="#2563eb" stroke-width="2"/>
          <polygon points="236,58 244,52 246,60" fill="#2563eb"/>
          <text x="210" y="47" fill="#1e40af" font-size="8.5">Gió Đông cực</text>

          <!-- Áp thấp Ôn đới Bắc -->
          <rect x="170" y="60" width="240" height="20" rx="6" fill="#ef4444"/>
          <text x="290" y="74" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">ÁP THẤP ÔN ĐỚI BẮC (60°B)</text>

          <!-- Gió Tây ôn đới Bắc -->
          <path d="M 310,105 L 340,85" stroke="#ea580c" stroke-width="2"/>
          <polygon points="344,82 336,88 334,80" fill="#ea580c"/>
          <text x="350" y="98" fill="#c2410c" font-size="8.5">Gió Tây ôn đới</text>

          <!-- Áp cao Cận chí tuyến Bắc -->
          <rect x="150" y="110" width="280" height="20" rx="6" fill="#3b82f6"/>
          <text x="290" y="124" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">ÁP CAO CẬN CHÍ TUYẾN BẮC (30°B)</text>

          <!-- Gió Mậu dịch Bắc -->
          <path d="M 270,135 L 240,155" stroke="#16a34a" stroke-width="2"/>
          <polygon points="236,158 244,152 246,160" fill="#16a34a"/>
          <text x="200" y="148" fill="#15803d" font-size="8.5">Gió Tín phong (ĐB)</text>

          <!-- Áp thấp Xích đạo trung tâm -->
          <rect x="130" y="160" width="320" height="24" rx="6" fill="#dc2626"/>
          <text x="290" y="176" fill="#ffffff" font-size="11" font-weight="black" text-anchor="middle">ÁP THẤP XÍCH ĐẠO (0° — MƯA RẤT LỚN)</text>

          <!-- Phía Nam bán cầu thu nhỏ biểu trưng -->
          <rect x="150" y="190" width="280" height="18" rx="6" fill="#3b82f6"/>
          <text x="290" y="203" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">ÁP CAO CẬN CHÍ TUYẾN NAM (30°N)</text>
          <rect x="170" y="215" width="240" height="18" rx="6" fill="#ef4444"/>
          <text x="290" y="228" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">ÁP THẤP ÔN ĐỚI NAM (60°N)</text>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 4: Vòng tuần hoàn nước trên Trái Đất
  water_cycle: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ: Vòng tuần hoàn lớn của Nước trong Thủy quyển</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 600 200" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Đại dương bên phải -->
          <rect x="420" y="130" width="160" height="60" fill="#38bdf8" rx="8"/>
          <text x="500" y="165" fill="#0369a1" font-size="12" font-weight="bold" text-anchor="middle">ĐẠI DƯƠNG</text>

          <!-- Bốc hơi từ đại dương -->
          <path d="M 500,125 L 500,60" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="4,4"/>
          <polygon points="500,55 495,65 505,65" fill="#0284c7"/>
          <text x="525" y="90" fill="#0284c7" font-size="9" font-weight="bold">Bốc hơi</text>

          <!-- Đám mây ngưng tụ -->
          <ellipse cx="380" cy="45" rx="45" ry="20" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
          <text x="380" y="49" fill="#475569" font-size="10" font-weight="bold" text-anchor="middle">Mây ngưng tụ</text>

          <!-- Mây di chuyển vào đất liền -->
          <line x1="330" y1="45" x2="250" y2="45" stroke="#64748b" stroke-width="2"/>
          <polygon points="245,45 253,40 253,50" fill="#64748b"/>
          <text x="290" y="38" fill="#64748b" font-size="8.5" text-anchor="middle">Gió đưa mây</text>

          <!-- Mây mưa trên núi -->
          <ellipse cx="190" cy="45" rx="45" ry="20" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
          <!-- Hạt mưa rơi -->
          <line x1="180" y1="70" x2="175" y2="90" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="2,2"/>
          <line x1="195" y1="70" x2="190" y2="90" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="2,2"/>
          <text x="190" y="105" fill="#0369a1" font-size="9" font-weight="bold" text-anchor="middle">Mưa rơi</text>

          <!-- Núi và Đất liền bên trái -->
          <polygon points="40,190 150,110 260,190" fill="#a7f3d0" stroke="#059669" stroke-width="2"/>
          <text x="150" y="150" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle">LỤC ĐỊA</text>

          <!-- Dòng chảy mặt (Sông ngòi) đổ ra biển -->
          <path d="M 220,165 Q 320,145 415,160" stroke="#0284c7" stroke-width="3" fill="none"/>
          <polygon points="420,160 410,155 412,165" fill="#0284c7"/>
          <text x="320" y="145" fill="#0284c7" font-size="9" font-weight="bold" text-anchor="middle">Dòng chảy sông ngòi</text>

          <!-- Thấm xuống nước ngầm -->
          <path d="M 150,165 L 150,185 L 420,185" stroke="#9333ea" stroke-width="2" stroke-dasharray="3,3" fill="none"/>
          <text x="270" y="195" fill="#7e22ce" font-size="8.5">Dòng chảy ngầm</text>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 5: Mô hình ba dạng tháp dân số
  population_pyramids: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ: Ba dạng Tháp dân số tiêu biểu trên thế giới</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 620 170" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- 1. Dạng mở rộng (Trẻ) -->
          <g transform="translate(30, 10)">
            <rect x="0" y="0" width="165" height="145" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
            <text x="82" y="22" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">1. THÁP TRẺ (Mở rộng)</text>
            <!-- Hình tháp: Đáy rất rộng, thu hẹp nhanh -->
            <polygon points="82,40 100,65 125,100 145,130 20,130 40,100 65,65" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.5"/>
            <text x="82" y="140" fill="#1e40af" font-size="8.5" text-anchor="middle">Đáy rộng • Trẻ em đông</text>
          </g>

          <!-- 2. Dạng ổn định (Chuông) -->
          <g transform="translate(225, 10)">
            <rect x="0" y="0" width="165" height="145" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
            <text x="82" y="22" fill="#15803d" font-size="11" font-weight="bold" text-anchor="middle">2. THÁP ỔN ĐỊNH</text>
            <!-- Hình tháp: Gần như đứng thẳng -->
            <polygon points="82,40 110,65 115,100 115,130 50,130 50,100 55,65" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
            <text x="82" y="140" fill="#166534" font-size="8.5" text-anchor="middle">Sinh giảm • Dân số ổn định</text>
          </g>

          <!-- 3. Dạng thu hẹp (Già) -->
          <g transform="translate(420, 10)">
            <rect x="0" y="0" width="165" height="145" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
            <text x="82" y="22" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">3. THÁP GIÀ (Thu hẹp)</text>
            <!-- Hình tháp: Đáy hẹp, phình ở giữa và trên -->
            <polygon points="82,40 115,65 125,95 95,130 70,130 40,95 50,65" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
            <text x="82" y="140" fill="#991b1b" font-size="8.5" text-anchor="middle">Đáy hẹp • Người già đông</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 6: Ba trụ cột phát triển bền vững
  sustainable_pillars: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ: Mô hình ba trụ cột giao thoa cấu thành Phát triển bền vững</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 540 210" class="w-full max-w-lg h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Vòng tròn 1: Kinh tế (Xanh dương) -->
          <circle cx="210" cy="85" r="65" fill="#3b82f6" fill-opacity="0.4" stroke="#2563eb" stroke-width="2.5"/>
          <text x="180" y="70" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">KINH TẾ</text>
          <text x="180" y="86" fill="#1e3a8a" font-size="8.5" text-anchor="middle">Tăng trưởng GDP</text>

          <!-- Vòng tròn 2: Xã hội (Cam đỏ) -->
          <circle cx="330" cy="85" r="65" fill="#f97316" fill-opacity="0.4" stroke="#ea580c" stroke-width="2.5"/>
          <text x="360" y="70" fill="#9a3412" font-size="12" font-weight="bold" text-anchor="middle">XÃ HỘI</text>
          <text x="360" y="86" fill="#7c2d12" font-size="8.5" text-anchor="middle">Công bằng &amp; Việc làm</text>

          <!-- Vòng tròn 3: Môi trường (Xanh lá ở dưới) -->
          <circle cx="270" cy="140" r="65" fill="#10b981" fill-opacity="0.4" stroke="#059669" stroke-width="2.5"/>
          <text x="270" y="175" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">MÔI TRƯỜNG</text>
          <text x="270" y="190" fill="#064e3b" font-size="8.5" text-anchor="middle">Bảo tồn sinh thái</text>

          <!-- Tâm giao thoa: Phát triển bền vững -->
          <circle cx="270" cy="100" r="24" fill="#047857"/>
          <text x="270" y="97" fill="#ffffff" font-size="8.5" font-weight="black" text-anchor="middle">BỀN VỮNG</text>
          <text x="270" y="108" fill="#d1fae5" font-size="7.5" font-weight="bold" text-anchor="middle">SUSTAINABLE</text>
        </svg>
      </div>
    </div>
  `
};

module.exports = { diagrams };
