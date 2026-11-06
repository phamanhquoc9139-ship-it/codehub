// Thư viện sơ đồ kĩ thuật minh họa SVG thuần túy (Pure Valid SVG) cho môn Công nghệ Trồng trọt 10

const diagrams = {
  // Sơ đồ 1: Bốn thành phần của đất trồng
  soil_components: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ 1: Bốn thành phần cấu tạo cơ bản của đất trồng</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 600 240" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="solidGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#d97706"/>
              <stop offset="100%" stop-color="#b45309"/>
            </linearGradient>
            <linearGradient id="waterGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#0369a1"/>
            </linearGradient>
            <linearGradient id="airGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#0d9488"/>
              <stop offset="100%" stop-color="#0f766e"/>
            </linearGradient>
            <linearGradient id="bioGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#16a34a"/>
              <stop offset="100%" stop-color="#15803d"/>
            </linearGradient>
          </defs>
          <!-- Box 1: Phần rắn -->
          <rect x="20" y="30" width="125" height="180" rx="16" fill="url(#solidGrad)" opacity="0.95"/>
          <text x="82" y="65" fill="#ffffff" font-size="14" font-weight="900" text-anchor="middle">PHẦN RẮN</text>
          <text x="82" y="90" fill="#fef3c7" font-size="11" font-weight="bold" text-anchor="middle">~50% Thể tích đất</text>
          <line x1="35" y1="105" x2="130" y2="105" stroke="#ffffff" stroke-width="1" stroke-dasharray="2,2"/>
          <text x="82" y="130" fill="#ffffff" font-size="11" text-anchor="middle">• Vô cơ (~95%)</text>
          <text x="82" y="150" fill="#ffffff" font-size="11" text-anchor="middle">• Hữu cơ (&lt;5%)</text>
          <text x="82" y="185" fill="#fef3c7" font-size="10" text-anchor="middle">Giữ cây &amp; khoáng</text>

          <!-- Box 2: Dung dịch đất -->
          <rect x="165" y="30" width="125" height="180" rx="16" fill="url(#waterGrad)" opacity="0.95"/>
          <text x="227" y="65" fill="#ffffff" font-size="14" font-weight="900" text-anchor="middle">DUNG DỊCH</text>
          <text x="227" y="90" fill="#e0f2fe" font-size="11" font-weight="bold" text-anchor="middle">~25% Thể tích đất</text>
          <line x1="180" y1="105" x2="275" y2="105" stroke="#ffffff" stroke-width="1" stroke-dasharray="2,2"/>
          <text x="227" y="130" fill="#ffffff" font-size="11" text-anchor="middle">• Nước tự do</text>
          <text x="227" y="150" fill="#ffffff" font-size="11" text-anchor="middle">• Khoáng hòa tan</text>
          <text x="227" y="185" fill="#e0f2fe" font-size="10" text-anchor="middle">Cung cấp dinh dưỡng</text>

          <!-- Box 3: Không khí đất -->
          <rect x="310" y="30" width="125" height="180" rx="16" fill="url(#airGrad)" opacity="0.95"/>
          <text x="372" y="65" fill="#ffffff" font-size="14" font-weight="900" text-anchor="middle">KHÔNG KHÍ</text>
          <text x="372" y="90" fill="#ccfbf1" font-size="11" font-weight="bold" text-anchor="middle">~25% Thể tích đất</text>
          <line x1="325" y1="105" x2="420" y2="105" stroke="#ffffff" stroke-width="1" stroke-dasharray="2,2"/>
          <text x="372" y="130" fill="#ffffff" font-size="11" text-anchor="middle">• Khí Oxygen (O2)</text>
          <text x="372" y="150" fill="#ffffff" font-size="11" text-anchor="middle">• Khí CO2, N2, hơi</text>
          <text x="372" y="185" fill="#ccfbf1" font-size="10" text-anchor="middle">Hô hấp của rễ cây</text>

          <!-- Box 4: Sinh vật đất -->
          <rect x="455" y="30" width="125" height="180" rx="16" fill="url(#bioGrad)" opacity="0.95"/>
          <text x="517" y="65" fill="#ffffff" font-size="14" font-weight="900" text-anchor="middle">SINH VẬT</text>
          <text x="517" y="90" fill="#dcfce7" font-size="11" font-weight="bold" text-anchor="middle">Hệ sinh thái đất</text>
          <line x1="470" y1="105" x2="565" y2="105" stroke="#ffffff" stroke-width="1" stroke-dasharray="2,2"/>
          <text x="517" y="130" fill="#ffffff" font-size="11" text-anchor="middle">• Vi sinh vật, nấm</text>
          <text x="517" y="150" fill="#ffffff" font-size="11" text-anchor="middle">• Giun đất, côn trùng</text>
          <text x="517" y="185" fill="#dcfce7" font-size="10" text-anchor="middle">Tạo mùn, tơi xốp</text>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 2: Cấu tạo hạt keo đất và khả năng hấp phụ cation
  soil_colloid: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ 2: Cấu tạo hạt keo âm và cơ chế hấp phụ trao đổi Cation (K+, Ca2+, Mg2+, NH4+)</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 540 260" class="w-full max-w-lg h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Vòng ngoài: Dung dịch đất -->
          <rect x="10" y="10" width="520" height="240" rx="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="35" y="35" fill="#64748b" font-size="11" font-weight="bold">Dung dịch đất (Soil Solution)</text>
          
          <!-- Hạt keo âm -->
          <!-- Vòng ngoài cùng: Lớp ion khuếch tán trao đổi -->
          <circle cx="270" cy="130" r="105" fill="#f1f5f9" stroke="#94a3b8" stroke-dasharray="4,4" stroke-width="2"/>
          <!-- Vòng thứ hai: Lớp ion bất động bù trừ -->
          <circle cx="270" cy="130" r="75" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
          <!-- Vòng thứ ba: Lớp ion quyết định điện thế âm -->
          <circle cx="270" cy="130" r="50" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/>
          <!-- Nhân keo -->
          <circle cx="270" cy="130" r="30" fill="#78350f"/>
          <text x="270" y="134" fill="#ffffff" font-size="11" font-weight="900" text-anchor="middle">NHÂN</text>

          <!-- Dấu âm trên lớp quyết định điện thế -->
          <text x="270" y="93" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">-</text>
          <text x="270" y="174" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">-</text>
          <text x="230" y="135" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">-</text>
          <text x="310" y="135" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">-</text>

          <!-- Các cation hấp phụ trên lớp bù trừ & khuếch tán -->
          <g font-size="11" font-weight="bold">
            <rect x="250" y="35" width="40" height="22" rx="6" fill="#0284c7"/>
            <text x="270" y="50" fill="#ffffff" text-anchor="middle">K⁺</text>

            <rect x="365" y="119" width="46" height="22" rx="6" fill="#059669"/>
            <text x="388" y="134" fill="#ffffff" text-anchor="middle">Ca²⁺</text>

            <rect x="247" y="205" width="46" height="22" rx="6" fill="#0d9488"/>
            <text x="270" y="220" fill="#ffffff" text-anchor="middle">Mg²⁺</text>

            <rect x="125" y="119" width="52" height="22" rx="6" fill="#7c3aed"/>
            <text x="151" y="134" fill="#ffffff" text-anchor="middle">NH₄⁺</text>
          </g>

          <!-- Mũi tên trao đổi thuận nghịch -->
          <text x="440" y="70" fill="#0284c7" font-size="11" font-weight="bold">⇄ Trao đổi ion</text>
          <text x="440" y="88" fill="#64748b" font-size="10">với rễ cây hút khoáng</text>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 3: Kĩ thuật Ghép cành và Ghép mắt chữ T
  grafting_techniques: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ 3: So sánh kĩ thuật Ghép đoạn cành và Ghép mắt chữ T</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 620 220" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Cột 1: Ghép đoạn cành -->
          <rect x="15" y="15" width="285" height="190" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="157" y="42" fill="#7c3aed" font-size="13" font-weight="bold" text-anchor="middle">A. GHÉP ĐOẠN CÀNH</text>
          <path d="M 80,180 L 80,110 L 95,95 L 95,180 Z" fill="#b45309"/>
          <text x="88" y="150" fill="#ffffff" font-size="9" text-anchor="middle">Gốc ghép</text>
          <!-- Cành ghép vát -->
          <path d="M 120,60 L 120,110 L 105,125 L 105,75 Z" fill="#16a34a"/>
          <text x="112" y="85" fill="#ffffff" font-size="9" text-anchor="middle">Cành</text>
          <!-- Mũi tên áp khít -->
          <path d="M 140,110 L 165,110" stroke="#7c3aed" stroke-width="2" marker-end="url(#arrow)"/>
          <rect x="180" y="70" width="105" height="110" rx="10" fill="#f5f3ff" stroke="#c4b5fd"/>
          <text x="232" y="95" fill="#5b21b6" font-size="10" font-weight="bold" text-anchor="middle">Quy chuẩn:</text>
          <text x="232" y="115" fill="#475569" font-size="9" text-anchor="middle">• Gốc cách đất 10-15cm</text>
          <text x="232" y="130" fill="#475569" font-size="9" text-anchor="middle">• Vát cành dài 1,5-2cm</text>
          <text x="232" y="145" fill="#475569" font-size="9" text-anchor="middle">• Áp khít tầng sinh mô</text>
          <text x="232" y="160" fill="#475569" font-size="9" text-anchor="middle">• Kiểm tra: 30-35 ngày</text>

          <!-- Cột 2: Ghép chữ T -->
          <rect x="320" y="15" width="285" height="190" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="462" y="42" fill="#0d9488" font-size="13" font-weight="bold" text-anchor="middle">B. GHÉP MẮT CHỮ T</text>
          <!-- Thân gốc rạch chữ T -->
          <rect x="365" y="70" width="30" height="110" rx="4" fill="#b45309"/>
          <!-- Rạch ngang 1cm, dọc 2cm -->
          <line x1="372" y1="100" x2="388" y2="100" stroke="#fef3c7" stroke-width="2.5"/>
          <line x1="380" y1="100" x2="380" y2="135" stroke="#fef3c7" stroke-width="2.5"/>
          <!-- Mắt ghép hình thoi -->
          <polygon points="425,100 435,115 425,130 415,115" fill="#16a34a"/>
          <circle cx="425" cy="115" r="3" fill="#facc15"/>
          <rect x="470" y="70" width="120" height="110" rx="10" fill="#f0fdfa" stroke="#99f6e4"/>
          <text x="530" y="95" fill="#115e59" font-size="10" font-weight="bold" text-anchor="middle">Quy chuẩn:</text>
          <text x="530" y="115" fill="#475569" font-size="9" text-anchor="middle">• Vị trí cách đất 15-20cm</text>
          <text x="530" y="130" fill="#475569" font-size="9" text-anchor="middle">• Chữ T: ngang 1, dọc 2cm</text>
          <text x="530" y="145" fill="#475569" font-size="9" text-anchor="middle">• Mắt thoi: 1,5-2cm</text>
          <text x="530" y="160" fill="#475569" font-size="9" text-anchor="middle">• Kiểm tra: 15-20 ngày</text>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 4: Hệ thống Thủy canh hồi lưu NFT & Khí canh
  soilless_systems: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ 4: Cấu tạo hệ thống Thủy canh hồi lưu (NFT) và Khí canh (Aeroponics)</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 600 230" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Bể chứa dung dịch -->
          <rect x="40" y="140" width="130" height="70" rx="10" fill="#0284c7" opacity="0.85"/>
          <text x="105" y="175" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">BỂ DUNG DỊCH</text>
          <text x="105" y="195" fill="#e0f2fe" font-size="9" text-anchor="middle">Kiểm soát pH &amp; EC</text>

          <!-- Ống bơm lên máng NFT -->
          <path d="M 140,140 L 140,55 L 240,40" stroke="#0369a1" stroke-width="4" fill="none"/>
          <polygon points="245,39 235,34 235,44" fill="#0369a1"/>

          <!-- Máng dốc NFT -->
          <path d="M 230,45 L 540,75 L 535,95 L 225,65 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
          <text x="380" y="62" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">Máng nghiêng màng mỏng dinh dưỡng (NFT)</text>

          <!-- 3 Rọ cây trên máng -->
          <g fill="#16a34a">
            <!-- Cây 1 -->
            <rect x="280" y="30" width="24" height="25" rx="4" fill="#475569"/>
            <path d="M 292,30 Q 275,10 260,15 Q 285,18 292,30 Q 305,5 320,12 Q 300,18 292,30 Z"/>
            <!-- Cây 2 -->
            <rect x="375" y="40" width="24" height="25" rx="4" fill="#475569"/>
            <path d="M 387,40 Q 370,20 355,25 Q 380,28 387,40 Q 400,15 415,22 Q 395,28 387,40 Z"/>
            <!-- Cây 3 -->
            <rect x="470" y="50" width="24" height="25" rx="4" fill="#475569"/>
            <path d="M 482,50 Q 465,30 450,35 Q 475,38 482,50 Q 495,25 510,32 Q 490,38 482,50 Z"/>
          </g>

          <!-- Ống hồi lưu về bể -->
          <path d="M 535,95 L 535,175 L 175,175" stroke="#0ea5e9" stroke-width="3" stroke-dasharray="4,3" fill="none"/>
          <text x="355" y="195" fill="#0284c7" font-size="10" font-weight="bold" text-anchor="middle">⮌ Dòng dung dịch tuần hoàn thu hồi về bể</text>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 5: Mô hình Nông nghiệp tuần hoàn không rác thải
  circular_agriculture: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ 5: Chu trình Nông nghiệp tuần hoàn khép kín từ phụ phẩm trồng trọt</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 580 200" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Vòng 1: Ruộng lúa / Cây trồng -->
          <circle cx="80" cy="100" r="55" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
          <text x="80" y="95" fill="#854d0e" font-size="11" font-weight="bold" text-anchor="middle">RUỘNG LÚA</text>
          <text x="80" y="115" fill="#713f12" font-size="9" text-anchor="middle">Thu hoạch thóc</text>

          <!-- Mũi tên 1: Rơm rạ -->
          <path d="M 140,80 L 190,55" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrow)"/>
          <text x="165" y="60" fill="#15803d" font-size="9" font-weight="bold">Rơm rạ</text>

          <!-- Mũi tên 2: Thân ngô -->
          <path d="M 140,120 L 190,145" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow)"/>
          <text x="165" y="145" fill="#0369a1" font-size="9" font-weight="bold">Phụ phẩm</text>

          <!-- Nhánh 1: Trồng nấm rơm -->
          <rect x="200" y="25" width="130" height="55" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
          <text x="265" y="47" fill="#14532d" font-size="11" font-weight="bold" text-anchor="middle">1. TRỒNG NẤM RƠM</text>
          <text x="265" y="65" fill="#166534" font-size="9" text-anchor="middle">Thực phẩm dinh dưỡng</text>

          <!-- Nhánh 2: Ủ chua thức ăn -->
          <rect x="200" y="120" width="130" height="55" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
          <text x="265" y="142" fill="#0c4a6e" font-size="11" font-weight="bold" text-anchor="middle">2. Ủ CHUA THỨC ĂN</text>
          <text x="265" y="160" fill="#0369a1" font-size="9" text-anchor="middle">Dự trữ cho trâu bò</text>

          <!-- Mũi tên dồn vào phân ủ -->
          <path d="M 335,55 L 390,85" stroke="#16a34a" stroke-width="2"/>
          <text x="375" y="65" fill="#475569" font-size="8">Bã thải nấm</text>

          <path d="M 335,145 L 390,115" stroke="#0284c7" stroke-width="2"/>
          <text x="375" y="145" fill="#475569" font-size="8">Chất thải chăn nuôi</text>

          <!-- Khối 3: Ủ phân hữu cơ vi sinh -->
          <rect x="400" y="70" width="150" height="65" rx="12" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
          <text x="475" y="95" fill="#9a3412" font-size="11" font-weight="bold" text-anchor="middle">Ủ PHÂN HỮU CƠ</text>
          <text x="475" y="112" fill="#c2410c" font-size="9" text-anchor="middle">Bổ sung vi sinh (45 ngày)</text>
          <text x="475" y="125" fill="#7c2d12" font-size="8">↺ Trả lại phì nhiêu cho đất</text>
        </svg>
      </div>
    </div>
  `
};

module.exports = { diagrams };
