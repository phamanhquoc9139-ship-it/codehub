const amnhac9Diagrams = {
  // Sơ đồ 1: Cấu tạo và độ lớn của Quãng (Bài 2)
  quang: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-ruler-horizontal"></i> Sơ đồ trực quan: Cấu tạo Quãng 3 Trưởng (2 cung) vs Quãng 3 Thứ (1.5 cung)
      </div>
      <svg viewBox="0 0 620 180" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <!-- Background -->
        <rect width="620" height="180" rx="12" fill="#ffffff" fill-opacity="0.7" stroke="#a7f3d0" stroke-width="1.5"/>
        
        <!-- Quãng 3 Trưởng: Đô - Mi -->
        <g transform="translate(30, 25)">
          <rect width="260" height="130" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
          <text x="130" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">QUÃNG 3 TRƯỞNG (3T) = 2 CUNG</text>
          
          <!-- Node Đô -->
          <circle cx="50" cy="70" r="16" fill="#059669"/>
          <text x="50" y="75" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Đô</text>
          
          <!-- Step 1 Cung -->
          <line x1="72" y1="70" x2="128" y2="70" stroke="#059669" stroke-width="2.5" stroke-dasharray="3,3"/>
          <text x="100" y="62" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">1 cung</text>
          
          <!-- Node Rê -->
          <circle cx="130" cy="70" r="13" fill="#6ee7b7" stroke="#059669"/>
          <text x="130" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="#064e3b">Rê</text>
          
          <!-- Step 1 Cung -->
          <line x1="148" y1="70" x2="208" y2="70" stroke="#059669" stroke-width="2.5" stroke-dasharray="3,3"/>
          <text x="180" y="62" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">1 cung</text>
          
          <!-- Node Mi -->
          <circle cx="210" cy="70" r="16" fill="#059669"/>
          <text x="210" y="75" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Mi</text>
          
          <!-- Bracket bottom -->
          <path d="M 50 96 C 50 112, 210 112, 210 96" fill="none" stroke="#047857" stroke-width="2"/>
          <text x="130" y="122" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">Khoảng cách: 2 cung (Sáng sủa, rực rỡ)</text>
        </g>
        
        <!-- Quãng 3 Thứ: Mi - Son -->
        <g transform="translate(330, 25)">
          <rect width="260" height="130" rx="8" fill="#f0fdf4" stroke="#0d9488" stroke-width="1.5"/>
          <text x="130" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#134e4a">QUÃNG 3 THỨ (3t) = 1.5 CUNG</text>
          
          <!-- Node Mi -->
          <circle cx="50" cy="70" r="16" fill="#0d9488"/>
          <text x="50" y="75" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Mi</text>
          
          <!-- Step 0.5 Cung -->
          <line x1="72" y1="70" x2="128" y2="70" stroke="#0d9488" stroke-width="2.5" stroke-dasharray="3,3"/>
          <text x="100" y="62" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">½ cung</text>
          
          <!-- Node Fa -->
          <circle cx="130" cy="70" r="13" fill="#99f6e4" stroke="#0d9488"/>
          <text x="130" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="#115e59">Fa</text>
          
          <!-- Step 1 Cung -->
          <line x1="148" y1="70" x2="208" y2="70" stroke="#0d9488" stroke-width="2.5" stroke-dasharray="3,3"/>
          <text x="180" y="62" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">1 cung</text>
          
          <!-- Node Sol -->
          <circle cx="210" cy="70" r="16" fill="#0d9488"/>
          <text x="210" y="75" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Sol</text>
          
          <!-- Bracket bottom -->
          <path d="M 50 96 C 50 112, 210 112, 210 96" fill="none" stroke="#115e59" stroke-width="2"/>
          <text x="130" y="122" text-anchor="middle" font-size="11" font-weight="bold" fill="#134e4a">Khoảng cách: 1.5 cung (Dịu dàng, u buồn)</text>
        </g>
      </svg>
    </div>
  `,

  // Sơ đồ 2: So sánh Kèn Oboe & Kèn Cor (Bài 4)
  oboeCor: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-guitar"></i> Phân biệt Khí nhạc: Kèn Oboe (Bộ gỗ) vs Kèn Cor / French Horn (Bộ đồng)
      </div>
      <svg viewBox="0 0 620 190" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="620" height="190" rx="12" fill="#ffffff" fill-opacity="0.8" stroke="#fde68a" stroke-width="1.5"/>
        
        <!-- Oboe Box -->
        <g transform="translate(25, 20)">
          <rect width="270" height="150" rx="8" fill="#fefce8" stroke="#d97706" stroke-width="1.5"/>
          <text x="135" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">KÈN OBOE (Bộ Gỗ - Woodwind)</text>
          
          <!-- Drawing Oboe -->
          <!-- Dăm kép -->
          <line x1="40" y1="45" x2="60" y2="45" stroke="#92400e" stroke-width="2"/>
          <!-- Thân kèn -->
          <polygon points="60,42 220,38 230,34 235,56 220,52 60,48" fill="#292524" stroke="#78716c"/>
          <!-- Phím bấm kim loại -->
          <circle cx="85" cy="45" r="3" fill="#cbd5e1"/>
          <circle cx="110" cy="45" r="3" fill="#cbd5e1"/>
          <circle cx="135" cy="45" r="3" fill="#cbd5e1"/>
          <circle cx="160" cy="45" r="3" fill="#cbd5e1"/>
          <circle cx="185" cy="45" r="3" fill="#cbd5e1"/>
          <!-- Loa kèn nở nhẹ -->
          <path d="M 220 38 Q 235 34 240 32 L 240 58 Q 235 56 220 52 Z" fill="#1c1917" stroke="#a8a29e"/>
          
          <text x="135" y="80" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">• Miệng thổi: Dăm kép bằng sậy (Double reed)</text>
          <text x="135" y="98" text-anchor="middle" font-size="10.5" fill="#451a03">• Âm sắc: Hơi đượm buồn, thanh tao, biểu cảm sâu</text>
          <text x="135" y="116" text-anchor="middle" font-size="10" fill="#78350f">• Vai trò: Thổi nốt La (A4 440Hz) lấy mẫu chuẩn cho cả dàn nhạc</text>
          <rect x="25" y="126" width="220" height="18" rx="4" fill="#fef3c7"/>
          <text x="135" y="139" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#b45309">Dàn nhạc Giao hưởng phương Tây</text>
        </g>
        
        <!-- Cor Box -->
        <g transform="translate(325, 20)">
          <rect width="270" height="150" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="135" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">KÈN COR (Bộ Đồng - Brass)</text>
          
          <!-- Drawing French Horn cuộn tròn -->
          <!-- Búp kèn hình nón -->
          <polygon points="45,43 55,41 55,49 45,47" fill="#fbbf24" stroke="#d97706"/>
          <!-- Ống kim loại xoắn -->
          <circle cx="120" cy="45" r="22" fill="none" stroke="#d97706" stroke-width="4"/>
          <circle cx="120" cy="45" r="14" fill="none" stroke="#f59e0b" stroke-width="3"/>
          <!-- 3 Van bấm ngón -->
          <rect x="105" y="24" width="4" height="8" fill="#78716c"/>
          <rect x="113" y="24" width="4" height="8" fill="#78716c"/>
          <rect x="121" y="24" width="4" height="8" fill="#78716c"/>
          <!-- Miệng loa kèn xoè rộng lớn -->
          <path d="M 142 45 Q 185 45 220 22 L 220 68 Q 185 45 142 45 Z" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
          
          <text x="135" y="80" text-anchor="middle" font-size="11" font-weight="bold" fill="#d97706">• Miệng thổi: Búp kèn kim loại hình nón</text>
          <text x="135" y="98" text-anchor="middle" font-size="10.5" fill="#451a03">• Âm sắc: Hùng tráng, ấm áp, vang xa, kì vĩ</text>
          <text x="135" y="116" text-anchor="middle" font-size="10" fill="#78350f">• Kĩ thuật đặc trưng: Tay phải đưa vào miệng loa điều chỉnh âm</text>
          <rect x="25" y="126" width="220" height="18" rx="4" fill="#fef3c7"/>
          <text x="135" y="139" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#b45309">Cầu nối âm hưởng giữa Bộ Gỗ và Bộ Đồng</text>
        </g>
      </svg>
    </div>
  `,

  // Sơ đồ 3: Dịch giọng (Bài 6)
  dichGiong: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-950/40 dark:to-indigo-950/30 border border-sky-200 dark:border-sky-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-arrows-split-up-and-left"></i> Minh hoạ quy trình: Dịch giọng từ Đô trưởng lên Rê trưởng (Nâng Quãng 2 Trưởng)
      </div>
      <svg viewBox="0 0 620 170" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="620" height="170" rx="12" fill="#ffffff" fill-opacity="0.85" stroke="#bae6fd" stroke-width="1.5"/>
        
        <!-- Giọng gốc C Major -->
        <g transform="translate(30, 25)">
          <rect width="240" height="120" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
          <text x="120" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">GIỌNG GỐC: ĐÔ TRƯỞNG (C)</text>
          <text x="120" y="42" text-anchor="middle" font-size="10" fill="#0284c7">Không có dấu hoá ở hoá biểu</text>
          
          <g transform="translate(30, 55)">
            <circle cx="20" cy="15" r="14" fill="#38bdf8"/>
            <text x="20" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Đô</text>
            <text x="50" y="19" font-size="12" fill="#0284c7">→</text>
            <circle cx="80" cy="15" r="14" fill="#38bdf8"/>
            <text x="80" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Mi</text>
            <text x="110" y="19" font-size="12" fill="#0284c7">→</text>
            <circle cx="140" cy="15" r="14" fill="#38bdf8"/>
            <text x="140" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Sol</text>
          </g>
          <text x="120" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0c4a6e">Âm chủ: C (Đô)</text>
        </g>
        
        <!-- Mũi tên nâng quãng 2T -->
        <g transform="translate(285, 65)">
          <path d="M 0 20 L 40 20 M 30 10 L 40 20 L 30 30" fill="none" stroke="#4f46e5" stroke-width="3"/>
          <text x="20" y="6" text-anchor="middle" font-size="10" font-weight="bold" fill="#4f46e5">+ 1 Cung</text>
          <text x="20" y="42" text-anchor="middle" font-size="9" fill="#6366f1">(Nâng Quãng 2T)</text>
        </g>
        
        <!-- Giọng mới D Major -->
        <g transform="translate(350, 25)">
          <rect width="240" height="120" rx="8" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
          <text x="120" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#3730a3">GIỌNG MỚI: RÊ TRƯỞNG (D)</text>
          <text x="120" y="42" text-anchor="middle" font-size="10" fill="#4f46e5">Có 2 dấu thăng: Pha thăng (#) & Đô thăng (#)</text>
          
          <g transform="translate(30, 55)">
            <circle cx="20" cy="15" r="14" fill="#6366f1"/>
            <text x="20" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Rê</text>
            <text x="50" y="19" font-size="12" fill="#4f46e5">→</text>
            <circle cx="80" cy="15" r="14" fill="#6366f1"/>
            <text x="80" y="19" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Fa#</text>
            <text x="110" y="19" font-size="12" fill="#4f46e5">→</text>
            <circle cx="140" cy="15" r="14" fill="#6366f1"/>
            <text x="140" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">La</text>
          </g>
          <text x="120" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#312e81">Âm chủ: D (Rê)</text>
        </g>
      </svg>
    </div>
  `,

  // Sơ đồ 4: Nhã nhạc Cung đình Huế (Bài 8)
  nhaNhac: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/40 dark:to-pink-950/30 border border-purple-200 dark:border-purple-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-landmark"></i> Cơ cấu hai dàn nhạc trong Nhã nhạc Cung đình Huế (Di sản UNESCO 2003)
      </div>
      <svg viewBox="0 0 620 170" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="620" height="170" rx="12" fill="#ffffff" fill-opacity="0.85" stroke="#e9d5ff" stroke-width="1.5"/>
        
        <!-- Đại nhạc -->
        <g transform="translate(25, 20)">
          <rect width="270" height="130" rx="8" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
          <text x="135" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#6b21a8">ĐẠI NHẠC (Dàn nhạc lớn ngoài sân đình)</text>
          
          <rect x="15" y="38" width="240" height="30" rx="6" fill="#f3e8ff"/>
          <text x="135" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#7e22ce">Âm lượng lớn • Khí thế uy nghiêm</text>
          
          <text x="135" y="90" text-anchor="middle" font-size="10.5" fill="#581c87">• Trống chiến (nhạc cụ chỉ huy giữ nhịp)</text>
          <text x="135" y="108" text-anchor="middle" font-size="10.5" fill="#581c87">• Kèn bóp (kèn dăm), Xập xoã (chũm choẹ)</text>
          <text x="135" y="126" text-anchor="middle" font-size="10.5" fill="#581c87">• Tam âm la, mõ búp sen</text>
        </g>
        
        <!-- Tiểu nhạc -->
        <g transform="translate(325, 20)">
          <rect width="270" height="130" rx="8" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
          <text x="135" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#86198f">TIỂU NHẠC (Dàn nhạc thanh tao trong điện)</text>
          
          <rect x="15" y="38" width="240" height="30" rx="6" fill="#fae8ff"/>
          <text x="135" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#a21caf">Âm sắc thanh thoát • Du dương tao nhã</text>
          
          <text x="135" y="90" text-anchor="middle" font-size="10.5" fill="#701a75">• Đàn Tỳ bà, Đàn Nguyệt, Đàn Tam, Đàn Nhị</text>
          <text x="135" y="108" text-anchor="middle" font-size="10.5" fill="#701a75">• Ống Tiêu (sáo sậy)</text>
          <text x="135" y="126" text-anchor="middle" font-size="10.5" fill="#701a75">• Trống bản nhỏ & Phách tiền (sinh tiền)</text>
        </g>
      </svg>
    </div>
  `,

  // Sơ đồ 5: Cấu tạo Hợp âm ba (Bài 10 & 14)
  hopAmBa: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/40 dark:to-green-950/30 border border-emerald-200 dark:border-emerald-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-layer-group"></i> Sơ đồ Cấu tạo Hợp âm ba: Hợp âm Đô trưởng (C) vs La thứ (Am)
      </div>
      <svg viewBox="0 0 620 180" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="620" height="180" rx="12" fill="#ffffff" fill-opacity="0.85" stroke="#a7f3d0" stroke-width="1.5"/>
        
        <!-- C Major Chord -->
        <g transform="translate(30, 20)">
          <rect width="260" height="140" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
          <text x="130" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">HỢP ÂM C (ĐÔ TRƯỞNG)</text>
          
          <!-- Chord stack -->
          <g transform="translate(40, 35)">
            <!-- Âm 5: Sol -->
            <circle cx="30" cy="15" r="12" fill="#16a34a"/>
            <text x="30" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#fff">Sol</text>
            <text x="50" y="19" font-size="10" fill="#166534">← Âm 5 (quãng 5 đúng so với âm gốc)</text>
            
            <text x="30" y="36" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">↑ 3t (1.5c)</text>
            
            <!-- Âm 3: Mi -->
            <circle cx="30" cy="52" r="12" fill="#22c55e"/>
            <text x="30" y="56" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#fff">Mi</text>
            <text x="50" y="56" font-size="10" fill="#166534">← Âm 3 (xác định tính chất Trưởng)</text>
            
            <text x="30" y="73" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">↑ 3T (2c)</text>
            
            <!-- Âm 1: Đô -->
            <circle cx="30" cy="89" r="12" fill="#15803d"/>
            <text x="30" y="93" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#fff">Đô</text>
            <text x="50" y="93" font-size="10" fill="#166534">← Âm 1 (Âm gốc / Root note)</text>
          </g>
          <text x="130" y="132" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#14532d">Công thức: Quãng 3 Trưởng + Quãng 3 Thứ</text>
        </g>
        
        <!-- A minor Chord -->
        <g transform="translate(330, 20)">
          <rect width="260" height="140" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
          <text x="130" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">HỢP ÂM Am (LA THỨ)</text>
          
          <!-- Chord stack -->
          <g transform="translate(40, 35)">
            <!-- Âm 5: Mi -->
            <circle cx="30" cy="15" r="12" fill="#059669"/>
            <text x="30" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#fff">Mi</text>
            <text x="50" y="19" font-size="10" fill="#064e3b">← Âm 5 (quãng 5 đúng so với âm gốc)</text>
            
            <text x="30" y="36" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">↑ 3T (2c)</text>
            
            <!-- Âm 3: Đô -->
            <circle cx="30" cy="52" r="12" fill="#34d399"/>
            <text x="30" y="56" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#fff">Đô</text>
            <text x="50" y="56" font-size="10" fill="#064e3b">← Âm 3 (xác định tính chất Thứ)</text>
            
            <text x="30" y="73" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">↑ 3t (1.5c)</text>
            
            <!-- Âm 1: La -->
            <circle cx="30" cy="89" r="12" fill="#065f46"/>
            <text x="30" y="93" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#fff">La</text>
            <text x="50" y="93" font-size="10" fill="#064e3b">← Âm 1 (Âm gốc / Root note)</text>
          </g>
          <text x="130" y="132" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#022c22">Công thức: Quãng 3 Thứ + Quãng 3 Trưởng</text>
        </g>
      </svg>
    </div>
  `,

  // Sơ đồ 6: Đàn Đá & Đàn Đáy (Bài 12)
  danDaDanDay: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-stone-50 to-amber-50 dark:from-stone-950/40 dark:to-amber-950/30 border border-stone-200 dark:border-stone-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-gem"></i> Nhạc cụ Dân tộc độc đáo: Đàn Đá (Tây Nguyên) & Đàn Đáy (Ca trù Bắc Bộ)
      </div>
      <svg viewBox="0 0 620 180" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="620" height="180" rx="12" fill="#ffffff" fill-opacity="0.85" stroke="#d6d3d1" stroke-width="1.5"/>
        
        <!-- Đàn Đá Box -->
        <g transform="translate(25, 20)">
          <rect width="270" height="140" rx="8" fill="#f5f5f4" stroke="#78716c" stroke-width="1.5"/>
          <text x="135" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#44403c">ĐÀN ĐÁ (Tây Nguyên)</text>
          
          <!-- Drawing Lithophone Bars -->
          <g transform="translate(45, 35)">
            <rect x="0" y="0" width="180" height="7" rx="3" fill="#a8a29e"/>
            <rect x="15" y="11" width="150" height="7" rx="3" fill="#78716c"/>
            <rect x="30" y="22" width="120" height="7" rx="3" fill="#57534e"/>
            <rect x="45" y="33" width="90" height="7" rx="3" fill="#44403c"/>
            <!-- Búa gõ -->
            <line x1="140" y1="20" x2="175" y2="40" stroke="#b45309" stroke-width="2.5"/>
            <circle cx="140" cy="20" r="4.5" fill="#78350f"/>
          </g>
          
          <text x="135" y="98" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#292524">• Nguồn gốc: Cổ xưa hàng ngàn năm, vùng đất đỏ</text>
          <text x="135" y="114" text-anchor="middle" font-size="10" fill="#57534e">• Chất liệu: Thanh đá tự nhiên (đá nham thạch/đá phiến)</text>
          <text x="135" y="130" text-anchor="middle" font-size="10" fill="#57534e">• Âm sắc: Vang rền, trong trẻo, vọng tiếng ngàn xưa</text>
        </g>
        
        <!-- Đàn Đáy Box -->
        <g transform="translate(325, 20)">
          <rect width="270" height="140" rx="8" fill="#fafaf9" stroke="#b45309" stroke-width="1.5"/>
          <text x="135" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#78350f">ĐÀN ĐÁY (Vô đề cầm - Bắc Bộ)</text>
          
          <!-- Drawing Đàn Đáy: Cần cực dài, thùng hình thang cân -->
          <g transform="translate(50, 32)">
            <!-- Cần đàn rất dài -->
            <rect x="20" y="10" width="120" height="4" fill="#78350f" rx="1"/>
            <!-- Thùng đàn hình thang cân -->
            <polygon points="140,0 170,5 170,25 140,30" fill="#b45309" stroke="#78350f"/>
            <!-- 3 dây tơ -->
            <line x1="20" y1="11" x2="165" y2="12" stroke="#fde68a" stroke-width="1"/>
            <line x1="20" y1="12" x2="165" y2="15" stroke="#fde68a" stroke-width="1"/>
            <line x1="20" y1="13" x2="165" y2="18" stroke="#fde68a" stroke-width="1"/>
          </g>
          
          <text x="135" y="98" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#451a03">• Nhạc cụ thuần Việt: Độc nhất vô nhị chỉ có ở Việt Nam</text>
          <text x="135" y="114" text-anchor="middle" font-size="10" fill="#78350f">• Đặc trưng: Cần đàn rất dài, thùng hình thang, 3 dây tơ</text>
          <text x="135" y="130" text-anchor="middle" font-size="10" fill="#78350f">• Vai trò: Nhạc cụ đệm không thể thiếu trong Nghệ thuật Ca trù</text>
        </g>
      </svg>
    </div>
  `,

  // Sơ đồ 7: Thế bấm Nốt Si giáng (Bb) và Pha thăng (F#) trên Recorder & Kèn phím (Bài 8 & 12)
  theBamBbFsharp: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/40 dark:to-cyan-950/30 border border-teal-200 dark:border-teal-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-hand"></i> Kĩ thuật Nhạc cụ Lớp 9: Thế bấm Nốt Si giáng (Bb) & Pha thăng (F#)
      </div>
      <svg viewBox="0 0 620 180" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="620" height="180" rx="12" fill="#ffffff" fill-opacity="0.85" stroke="#99f6e4" stroke-width="1.5"/>
        
        <!-- Nốt Si giáng (Bb) -->
        <g transform="translate(30, 20)">
          <rect width="260" height="140" rx="8" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
          <text x="130" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f766e">NỐT SI GIÁNG (Bb / B-flat)</text>
          
          <g transform="translate(25, 40)">
            <text x="0" y="18" font-size="11" font-weight="bold" fill="#134e4a">Recorder:</text>
            <!-- 0 (ngón cái sau): Bịt -->
            <circle cx="75" cy="14" r="6" fill="#0d9488"/>
            <text x="75" y="32" text-anchor="middle" font-size="8" fill="#0f766e">0</text>
            <!-- 1: Bịt -->
            <circle cx="100" cy="14" r="6" fill="#0d9488"/>
            <text x="100" y="32" text-anchor="middle" font-size="8" fill="#0f766e">1</text>
            <!-- 2: Mở -->
            <circle cx="125" cy="14" r="6" fill="#fff" stroke="#0d9488" stroke-width="1.5"/>
            <text x="125" y="32" text-anchor="middle" font-size="8" fill="#0f766e">2</text>
            <!-- 3: Bịt -->
            <circle cx="150" cy="14" r="6" fill="#0d9488"/>
            <text x="150" y="32" text-anchor="middle" font-size="8" fill="#0f766e">3</text>
            <!-- 4: Bịt -->
            <circle cx="175" cy="14" r="6" fill="#0d9488"/>
            <text x="175" y="32" text-anchor="middle" font-size="8" fill="#0f766e">4</text>
          </g>
          
          <rect x="20" y="90" width="220" height="36" rx="6" fill="#ccfbf1"/>
          <text x="130" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#115e59">Kèn phím (Melodica):</text>
          <text x="130" y="120" text-anchor="middle" font-size="10" fill="#042f2e">Bấm phím đen nằm giữa nốt La (A) và nốt Si (B)</text>
        </g>
        
        <!-- Nốt Pha thăng (F#) -->
        <g transform="translate(330, 20)">
          <rect width="260" height="140" rx="8" fill="#ecfeff" stroke="#0891b2" stroke-width="1.5"/>
          <text x="130" y="24" text-anchor="middle" font-size="13" font-weight="bold" fill="#0e7490">NỐT PHA THĂNG (F# / F-sharp)</text>
          
          <g transform="translate(25, 40)">
            <text x="0" y="18" font-size="11" font-weight="bold" fill="#164e63">Recorder:</text>
            <!-- 0: Bịt -->
            <circle cx="70" cy="14" r="6" fill="#0891b2"/>
            <text x="70" y="32" text-anchor="middle" font-size="8" fill="#155e75">0</text>
            <!-- 1, 2, 3: Bịt -->
            <circle cx="92" cy="14" r="6" fill="#0891b2"/>
            <text x="92" y="32" text-anchor="middle" font-size="8" fill="#155e75">1</text>
            <circle cx="114" cy="14" r="6" fill="#0891b2"/>
            <text x="114" y="32" text-anchor="middle" font-size="8" fill="#155e75">2</text>
            <circle cx="136" cy="14" r="6" fill="#0891b2"/>
            <text x="136" y="32" text-anchor="middle" font-size="8" fill="#155e75">3</text>
            <!-- 4: Mở -->
            <circle cx="158" cy="14" r="6" fill="#fff" stroke="#0891b2" stroke-width="1.5"/>
            <text x="158" y="32" text-anchor="middle" font-size="8" fill="#155e75">4</text>
            <!-- 5, 6: Bịt -->
            <circle cx="180" cy="14" r="6" fill="#0891b2"/>
            <text x="180" y="32" text-anchor="middle" font-size="8" fill="#155e75">5</text>
            <circle cx="202" cy="14" r="6" fill="#0891b2"/>
            <text x="202" y="32" text-anchor="middle" font-size="8" fill="#155e75">6</text>
          </g>
          
          <rect x="20" y="90" width="220" height="36" rx="6" fill="#cffafe"/>
          <text x="130" y="105" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#155e75">Kèn phím (Melodica):</text>
          <text x="130" y="120" text-anchor="middle" font-size="10" fill="#083344">Bấm phím đen đầu tiên trong cụm 3 phím đen (giữa Fa và Sol)</text>
        </g>
      </svg>
    </div>
  `
};

module.exports = amnhac9Diagrams;
