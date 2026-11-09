const fs = require('fs');
const path = require('path');

const diagramSVGs = {
  "1": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950 p-4 border border-cyan-500/30 shadow-lg">
    <text x="450" y="32" text-anchor="middle" fill="#cffafe" font-size="16" font-weight="bold" letter-spacing="1">TIẾN TRÌNH LỊCH SỬ PHÁT TRIỂN CỦA VẬT LÍ HỌC</text>
    
    <!-- Timeline Line -->
    <line x1="60" y1="180" x2="840" y2="180" stroke="#0891b2" stroke-width="4"/>
    
    <!-- Milestone 1: Cổ đại -->
    <g transform="translate(100, 180)">
      <circle cx="0" cy="0" r="16" fill="#0e7490" stroke="#22d3ee" stroke-width="3"/>
      <text x="0" y="5" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">I</text>
      <!-- Top box -->
      <rect x="-80" y="-120" width="160" height="90" rx="10" fill="#1e293b" stroke="#0891b2" stroke-width="1.5"/>
      <text x="0" y="-95" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">TRƯỚC THẾ KỈ XVII</text>
      <text x="0" y="-75" text-anchor="middle" fill="#cbd5e1" font-size="11">Triết học tự nhiên</text>
      <text x="0" y="-55" text-anchor="middle" fill="#94a3b8" font-size="10">Aristotle: Suy đoán cảm tính</text>
      <text x="0" y="-40" text-anchor="middle" fill="#f87171" font-size="10">"Vật nặng rơi nhanh hơn"</text>
    </g>

    <!-- Milestone 2: Thực nghiệm Galilei -->
    <g transform="translate(320, 180)">
      <circle cx="0" cy="0" r="16" fill="#0891b2" stroke="#67e8f9" stroke-width="3"/>
      <text x="0" y="5" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">II</text>
      <!-- Bottom box -->
      <rect x="-85" y="35" width="170" height="95" rx="10" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
      <text x="0" y="60" text-anchor="middle" fill="#22d3ee" font-size="12" font-weight="bold">THẾ KỈ XVII (GALILEI)</text>
      <text x="0" y="80" text-anchor="middle" fill="#cbd5e1" font-size="11">Vật lí thực nghiệm ra đời</text>
      <text x="0" y="100" text-anchor="middle" fill="#a7f3d0" font-size="10">Rơi tự do như nhau</text>
      <text x="0" y="115" text-anchor="middle" fill="#94a3b8" font-size="10">Kiểm chứng bằng thí nghiệm</text>
    </g>

    <!-- Milestone 3: Cơ học cổ điển Newton & Maxwell -->
    <g transform="translate(560, 180)">
      <circle cx="0" cy="0" r="16" fill="#0e7490" stroke="#22d3ee" stroke-width="3"/>
      <text x="0" y="5" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">III</text>
      <!-- Top box -->
      <rect x="-90" y="-120" width="180" height="95" rx="10" fill="#1e293b" stroke="#0891b2" stroke-width="1.5"/>
      <text x="0" y="-95" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">TK XVII - CUỐI TK XIX</text>
      <text x="0" y="-75" text-anchor="middle" fill="#fcd34d" font-size="11">Cơ học cổ điển Newton</text>
      <text x="0" y="-55" text-anchor="middle" fill="#cbd5e1" font-size="10">Định luật vạn vật hấp dẫn</text>
      <text x="0" y="-40" text-anchor="middle" fill="#a5b4fc" font-size="10">Maxwell: Sóng điện từ</text>
    </g>

    <!-- Milestone 4: Kỉ nguyên Vật lí hiện đại -->
    <g transform="translate(780, 180)">
      <circle cx="0" cy="0" r="18" fill="#0284c7" stroke="#38bdf8" stroke-width="3"/>
      <text x="0" y="6" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">IV</text>
      <!-- Bottom box -->
      <rect x="-95" y="35" width="190" height="95" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="0" y="60" text-anchor="middle" fill="#67e8f9" font-size="12" font-weight="bold">ĐẦU TK XX - HIỆN NAY</text>
      <text x="0" y="80" text-anchor="middle" fill="#f472b6" font-size="11">Planck (1900): Thuyết lượng tử</text>
      <text x="0" y="100" text-anchor="middle" fill="#fcd34d" font-size="11">Einstein (1905): E = mc²</text>
      <text x="0" y="118" text-anchor="middle" fill="#94a3b8" font-size="10">Bán dẫn, hạt nhân, nano</text>
    </g>

    <!-- Bottom summary note -->
    <text x="450" y="340" text-anchor="middle" fill="#94a3b8" font-size="12">Thực nghiệm là tiêu chuẩn chân lí • Lí thuyết khái quát quy luật và dự đoán hiện tượng mới</text>
  </svg>`,

  "2": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950 p-4 border border-cyan-500/30 shadow-lg">
    <text x="450" y="30" text-anchor="middle" fill="#cffafe" font-size="16" font-weight="bold" letter-spacing="1">CÁC LĨNH VỰC NGHIÊN CỨU MŨI NHỌN CỦA VẬT LÍ HIỆN ĐẠI</text>
    
    <!-- Central Hub -->
    <circle cx="450" cy="180" r="55" fill="#0891b2" stroke="#22d3ee" stroke-width="3"/>
    <text x="450" y="175" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">VẬT LÍ</text>
    <text x="450" y="195" text-anchor="middle" fill="#cffafe" font-size="12" font-weight="bold">HIỆN ĐẠI</text>

    <!-- Branch 1: Thiên văn & Viễn thám (Top Left) -->
    <g transform="translate(180, 80)">
      <rect x="-100" y="-35" width="200" height="70" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="0" y="-10" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">VẬT LÍ THIÊN VĂN</text>
      <text x="0" y="12" text-anchor="middle" fill="#cbd5e1" font-size="10">Vũ trụ học & Viễn thám vệ tinh</text>
      <line x1="100" y1="15" x2="220" y2="70" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="3,3"/>
    </g>

    <!-- Branch 2: Hạt cơ bản & Hạt nhân (Top Right) -->
    <g transform="translate(720, 80)">
      <rect x="-100" y="-35" width="200" height="70" rx="10" fill="#1e293b" stroke="#818cf8" stroke-width="1.5"/>
      <text x="0" y="-10" text-anchor="middle" fill="#818cf8" font-size="12" font-weight="bold">HẠT CƠ BẢN & HẠT NHÂN</text>
      <text x="0" y="12" text-anchor="middle" fill="#cbd5e1" font-size="10">Máy gia tốc LHC, Higgs, điện hạt nhân</text>
      <line x1="-100" y1="15" x2="-220" y2="70" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="3,3"/>
    </g>

    <!-- Branch 3: Vật liệu Nano (Left Center) -->
    <g transform="translate(140, 200)">
      <rect x="-90" y="-35" width="180" height="70" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
      <text x="0" y="-10" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">CÔNG NGHỆ NANO</text>
      <text x="0" y="12" text-anchor="middle" fill="#cbd5e1" font-size="10">Quy mô 1-100 nm, hạt lượng tử</text>
      <line x1="90" y1="0" x2="255" y2="-10" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="3,3"/>
    </g>

    <!-- Branch 4: Vật lí Laser (Right Center) -->
    <g transform="translate(760, 200)">
      <rect x="-90" y="-35" width="180" height="70" rx="10" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
      <text x="0" y="-10" text-anchor="middle" fill="#fb7185" font-size="12" font-weight="bold">VẬT LÍ LASER</text>
      <text x="0" y="12" text-anchor="middle" fill="#cbd5e1" font-size="10">Bức xạ kích thích, đơn sắc định hướng</text>
      <line x1="-90" y1="0" x2="-255" y2="-10" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="3,3"/>
    </g>

    <!-- Branch 5: Vật lí Bán dẫn (Bottom Left) -->
    <g transform="translate(240, 305)">
      <rect x="-90" y="-30" width="180" height="60" rx="10" fill="#1e293b" stroke="#fcd34d" stroke-width="1.5"/>
      <text x="0" y="-8" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="bold">VẬT LÍ BÁN DẪN</text>
      <text x="0" y="12" text-anchor="middle" fill="#cbd5e1" font-size="10">Diode, Transistor, Vi mạch, Pin mặt trời</text>
      <line x1="70" y1="-30" x2="160" y2="-75" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="3,3"/>
    </g>

    <!-- Branch 6: Vật lí Y sinh (Bottom Right) -->
    <g transform="translate(660, 305)">
      <rect x="-90" y="-30" width="180" height="60" rx="10" fill="#1e293b" stroke="#c084fc" stroke-width="1.5"/>
      <text x="0" y="-8" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold">VẬT LÍ Y SINH</text>
      <text x="0" y="12" text-anchor="middle" fill="#cbd5e1" font-size="10">Chụp MRI, CT scan, Xạ trị, PCR</text>
      <line x1="-70" y1="-30" x2="-160" y2="-75" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="3,3"/>
    </g>
  </svg>`,

  "3": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950 p-4 border border-cyan-500/30 shadow-lg">
    <text x="450" y="30" text-anchor="middle" fill="#cffafe" font-size="16" font-weight="bold" letter-spacing="1">ỨNG DỤNG ĐA NGÀNH CỦA VẬT LÍ TRONG ĐỜI SỐNG & CÔNG NGHỆ</text>
    
    <g transform="translate(60, 60)">
      <!-- Card 1: Quốc phòng & Không gian -->
      <rect x="0" y="0" width="240" height="115" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="20" y="30" fill="#38bdf8" font-size="13" font-weight="bold">🚀 QUÂN SỰ & HÀNG KHÔNG</text>
      <text x="20" y="55" fill="#cbd5e1" font-size="11">• Khí động học chất lưu, phản lực</text>
      <text x="20" y="75" fill="#cbd5e1" font-size="11">• Radar vi ba, tên lửa tự hành</text>
      <text x="20" y="95" fill="#94a3b8" font-size="10">• Dẫn đường quán tính và vệ tinh</text>

      <!-- Card 2: Năng lượng hạt nhân -->
      <rect x="270" y="0" width="240" height="115" rx="12" fill="#1e293b" stroke="#fcd34d" stroke-width="1.5"/>
      <text x="290" y="30" fill="#fcd34d" font-size="13" font-weight="bold">⚡ NĂNG LƯỢNG HẠT NHÂN</text>
      <text x="290" y="55" fill="#cbd5e1" font-size="11">• Phản ứng phân hạch ²³⁵U</text>
      <text x="290" y="75" fill="#cbd5e1" font-size="11">• Nhiệt năng quay turbine hơi nước</text>
      <text x="290" y="95" fill="#94a3b8" font-size="10">• Kiểm soát an toàn và chất thải</text>

      <!-- Card 3: Viễn thông & Cáp quang -->
      <rect x="540" y="0" width="240" height="115" rx="12" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
      <text x="560" y="30" fill="#34d399" font-size="13" font-weight="bold">📡 THÔNG TIN & CÁP QUANG</text>
      <text x="560" y="55" fill="#cbd5e1" font-size="11">• Sóng điện từ không dây 5G/vệ tinh</text>
      <text x="560" y="75" fill="#cbd5e1" font-size="11">• Phản xạ toàn phần trong sợi quang</text>
      <text x="560" y="95" fill="#94a3b8" font-size="10">• Tốc độ truyền dẫn terabit/giây</text>

      <!-- Card 4: Cơ điện tử & Tự động hóa -->
      <rect x="0" y="135" width="240" height="115" rx="12" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
      <text x="20" y="165" fill="#c084fc" font-size="13" font-weight="bold">🤖 TỰ ĐỘNG HÓA & ROBOT</text>
      <text x="20" y="190" fill="#cbd5e1" font-size="11">• Cảm biến quang - điện - cơ</text>
      <text x="20" y="210" fill="#cbd5e1" font-size="11">• Động cơ servo và hệ thống PLC</text>
      <text x="20" y="230" fill="#94a3b8" font-size="10">• Dây chuyền sản xuất thông minh</text>

      <!-- Card 5: Khí tượng & Thủy văn -->
      <rect x="270" y="135" width="240" height="115" rx="12" fill="#1e293b" stroke="#22d3ee" stroke-width="1.5"/>
      <text x="290" y="165" fill="#22d3ee" font-size="13" font-weight="bold">🌪️ KHÍ TƯỢNG THỦY VĂN</text>
      <text x="290" y="190" fill="#cbd5e1" font-size="11">• Phương trình Navier-Stokes chất lưu</text>
      <text x="290" y="210" fill="#cbd5e1" font-size="11">• Mô phỏng bão nhiệt đới, lũ quét</text>
      <text x="290" y="230" fill="#94a3b8" font-size="10">• Dự báo triều cường và thời tiết</text>

      <!-- Card 6: Vật lí tài chính (Econophysics) -->
      <rect x="540" y="135" width="240" height="115" rx="12" fill="#1e293b" stroke="#fb7185" stroke-width="1.5"/>
      <text x="560" y="165" fill="#fb7185" font-size="13" font-weight="bold">📈 VẬT LÍ TÀI CHÍNH</text>
      <text x="560" y="190" fill="#cbd5e1" font-size="11">• Mô hình chuyển động Brown</text>
      <text x="560" y="210" fill="#cbd5e1" font-size="11">• Phương trình khuếch tán Black-Scholes</text>
      <text x="560" y="230" fill="#94a3b8" font-size="10">• Định giá quyền chọn & rủi ro</text>
    </g>

    <text x="450" y="335" text-anchor="middle" fill="#94a3b8" font-size="12">Vật lí là nền tảng tri thức cho kĩ thuật, công nghệ và phát triển kinh tế bền vững</text>
  </svg>`,

  "4": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950 p-4 border border-cyan-500/30 shadow-lg">
    <text x="450" y="28" text-anchor="middle" fill="#cffafe" font-size="16" font-weight="bold" letter-spacing="1">PHƯƠNG PHÁP XÁC ĐỊNH SAO BẮC CỰC TỪ GẤU LỚN & THIÊN HẬU</text>
    
    <!-- Central Polaris (Sao Bắc Cực) -->
    <g transform="translate(450, 150)">
      <!-- Glow effect -->
      <circle cx="0" cy="0" r="14" fill="#38bdf8" fill-opacity="0.2"/>
      <circle cx="0" cy="0" r="7" fill="#ffffff" stroke="#38bdf8" stroke-width="2"/>
      <!-- Crosshairs -->
      <line x1="-12" y1="0" x2="12" y2="0" stroke="#fcd34d" stroke-width="1.5"/>
      <line x1="0" y1="-12" x2="0" y2="12" stroke="#fcd34d" stroke-width="1.5"/>
      <text x="0" y="-18" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="bold">SAO BẮC CỰC (POLARIS)</text>
      <text x="0" y="24" text-anchor="middle" fill="#94a3b8" font-size="10">Hướng Bắc địa lí (Bất động)</text>
    </g>

    <!-- Ursa Major (Chòm Gấu Lớn) Left -->
    <g transform="translate(180, 220)">
      <!-- 7 Stars -->
      <!-- Dipper Handle: Alkaid, Mizar, Alioth -->
      <circle cx="-100" cy="50" r="3.5" fill="#ffffff"/>
      <circle cx="-60" cy="30" r="3.5" fill="#ffffff"/>
      <circle cx="-20" cy="20" r="3.5" fill="#ffffff"/>
      <!-- Dipper Bowl: Megrez, Phecda, Merak, Dubhe -->
      <circle cx="20" cy="15" r="3.5" fill="#ffffff"/>
      <circle cx="15" cy="55" r="3.5" fill="#ffffff"/>
      <circle cx="65" cy="50" r="4.5" fill="#38bdf8"/>
      <text x="75" y="65" fill="#cbd5e1" font-size="10">Merak</text>
      <circle cx="70" cy="10" r="5" fill="#38bdf8"/>
      <text x="80" y="5" fill="#cbd5e1" font-size="10">Dubhe</text>

      <!-- Connecting Lines -->
      <path d="M -100 50 L -60 30 L -20 20 L 20 15 L 70 10 L 65 50 L 15 55 L 20 15" fill="none" stroke="#64748b" stroke-width="1.5"/>

      <!-- 5x Extension Line from Merak through Dubhe -->
      <line x1="70" y1="10" x2="270" y2="-70" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4,4"/>
      <text x="140" y="-40" fill="#fcd34d" font-size="11" font-weight="bold">Kéo dài gấp 5 lần</text>

      <text x="0" y="90" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">CHÒM GẤU LỚN (Ursa Major)</text>
      <text x="0" y="105" text-anchor="middle" fill="#94a3b8" font-size="10">Hình chiếc Gầu Sòng (7 sao chính)</text>
    </g>

    <!-- Cassiopeia (Chòm Thiên Hậu) Right -->
    <g transform="translate(700, 100)">
      <!-- 5 Stars W shape -->
      <circle cx="-60" cy="20" r="3.5" fill="#ffffff"/>
      <circle cx="-30" cy="60" r="3.5" fill="#ffffff"/>
      <circle cx="0" cy="30" r="4" fill="#38bdf8"/>
      <text x="10" y="25" fill="#cbd5e1" font-size="10">γ</text>
      <circle cx="35" cy="70" r="4" fill="#38bdf8"/>
      <text x="45" y="65" fill="#cbd5e1" font-size="10">δ</text>
      <circle cx="65" cy="35" r="3.5" fill="#ffffff"/>

      <!-- Connecting Lines W -->
      <path d="M -60 20 L -30 60 L 0 30 L 35 70 L 65 35" fill="none" stroke="#64748b" stroke-width="1.5"/>

      <!-- 7x Perpendicular line -->
      <line x1="17" y1="50" x2="-250" y2="50" stroke="#ec4899" stroke-width="2.5" stroke-dasharray="4,4"/>
      <text x="-120" y="40" fill="#f472b6" font-size="11" font-weight="bold">Kéo dài vuông góc ≈ 7 lần</text>

      <text x="0" y="110" text-anchor="middle" fill="#f472b6" font-size="13" font-weight="bold">CHÒM THIÊN HẬU (Cassiopeia)</text>
      <text x="0" y="125" text-anchor="middle" fill="#94a3b8" font-size="10">Hình chữ W hoặc chữ M (5 sao)</text>
    </g>

    <!-- Compass Direction Legend -->
    <text x="450" y="335" text-anchor="middle" fill="#cbd5e1" font-size="12">Nhìn thẳng Sao Bắc Cực: Trước mặt là BẮC • Sau lưng là NAM • Bên phải là ĐÔNG • Bên trái là TÂY</text>
  </svg>`,

  "5": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950 p-4 border border-cyan-500/30 shadow-lg">
    <text x="450" y="28" text-anchor="middle" fill="#cffafe" font-size="16" font-weight="bold" letter-spacing="1">CHUYỂN ĐỘNG BIỂU KIẾN MẶT TRỜI & CÁC PHA MẶT TRĂNG</text>
    
    <!-- Left: Sun Path by Season -->
    <g transform="translate(60, 50)">
      <rect x="0" y="0" width="360" height="250" rx="14" fill="#0f172a" stroke="#0891b2" stroke-width="1.5"/>
      <text x="180" y="26" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">QUỸ ĐẠO MẶT TRỜI THEO MÙA</text>
      <!-- Horizon line -->
      <line x1="30" y1="180" x2="330" y2="180" stroke="#64748b" stroke-width="2"/>
      <text x="35" y="195" fill="#38bdf8" font-size="11">ĐÔNG</text>
      <text x="325" y="195" text-anchor="end" fill="#f59e0b" font-size="11">TÂY</text>
      <circle cx="180" cy="180" r="4" fill="#ffffff"/>
      <text x="180" y="195" text-anchor="middle" fill="#94a3b8" font-size="10">Người quan sát</text>

      <!-- Summer Path (High) -->
      <path d="M 40 180 Q 180 50 320 180" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
      <text x="180" y="65" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="bold">Hạ chí (Lên cao nhất, ngày dài)</text>

      <!-- Equinox Path (Mid) -->
      <path d="M 60 180 Q 180 95 300 180" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="180" y="110" text-anchor="middle" fill="#6ee7b7" font-size="10">Xuân phân / Thu phân (Ngày = Đêm)</text>

      <!-- Winter Path (Low) -->
      <path d="M 80 180 Q 180 140 280 180" fill="none" stroke="#38bdf8" stroke-width="2"/>
      <text x="180" y="155" text-anchor="middle" fill="#7dd3fc" font-size="10">Đông chí (Ở thấp, ngày ngắn)</text>

      <text x="180" y="230" text-anchor="middle" fill="#94a3b8" font-size="10">Mọc Đông lặn Tây do Trái Đất tự quay từ Tây sang Đông</text>
    </g>

    <!-- Right: Moon Phases Cycle -->
    <g transform="translate(460, 50)">
      <rect x="0" y="0" width="380" height="250" rx="14" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>
      <text x="190" y="26" text-anchor="middle" fill="#c084fc" font-size="13" font-weight="bold">CHU KÌ PHA MẶT TRĂNG (29,5 NGÀY)</text>

      <!-- Central Earth -->
      <circle cx="190" cy="130" r="22" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="190" y="134" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="bold">Trái Đất</text>

      <!-- 8 Moon Positions around Earth -->
      <!-- New Moon (Right towards Sun rays) -->
      <circle cx="300" cy="130" r="11" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
      <text x="300" y="155" text-anchor="middle" fill="#cbd5e1" font-size="9">Trăng non</text>

      <!-- Waxing Crescent (Top Right) -->
      <circle cx="270" cy="65" r="11" fill="#334155"/>
      <path d="M 270 54 A 11 11 0 0 1 270 76 A 8 11 0 0 0 270 54" fill="#fcd34d"/>

      <!-- First Quarter (Top) -->
      <circle cx="190" cy="45" r="11" fill="#334155"/>
      <path d="M 190 34 A 11 11 0 0 1 190 56 Z" fill="#fcd34d"/>
      <text x="190" y="28" text-anchor="middle" fill="#cbd5e1" font-size="9">Bán nguyệt đầu</text>

      <!-- Full Moon (Left) -->
      <circle cx="80" cy="130" r="11" fill="#fcd34d"/>
      <text x="80" y="155" text-anchor="middle" fill="#fcd34d" font-size="9" font-weight="bold">Trăng tròn (Rằm)</text>

      <!-- Third Quarter (Bottom) -->
      <circle cx="190" cy="215" r="11" fill="#334155"/>
      <path d="M 190 204 A 11 11 0 0 0 190 226 Z" fill="#fcd34d"/>
      <text x="190" y="238" text-anchor="middle" fill="#cbd5e1" font-size="9">Bán nguyệt cuối</text>

      <!-- Sun rays from Right -->
      <line x1="365" y1="90" x2="335" y2="90" stroke="#f59e0b" stroke-width="2"/>
      <line x1="365" y1="130" x2="335" y2="130" stroke="#f59e0b" stroke-width="2"/>
      <line x1="365" y1="170" x2="335" y2="170" stroke="#f59e0b" stroke-width="2"/>
      <text x="350" y="75" fill="#fcd34d" font-size="10">Tia nắng</text>
    </g>

    <text x="450" y="335" text-anchor="middle" fill="#94a3b8" font-size="12">Pha Mặt Trăng biến đổi do góc nhìn nửa được chiếu sáng • Không phải do bóng Trái Đất che khuất</text>
  </svg>`,

  "6": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950 p-4 border border-cyan-500/30 shadow-lg">
    <text x="450" y="28" text-anchor="middle" fill="#cffafe" font-size="16" font-weight="bold" letter-spacing="1">CƠ CHẾ NHẬT THỰC, NGUYỆT THỰC VÀ THỦY TRIỀU</text>
    
    <!-- Top Half: Solar & Lunar Eclipse Schematics -->
    <g transform="translate(60, 45)">
      <rect x="0" y="0" width="780" height="135" rx="12" fill="#0f172a" stroke="#0891b2" stroke-width="1.5"/>
      
      <!-- Solar Eclipse Block -->
      <g transform="translate(40, 20)">
        <text x="150" y="15" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">NHẬT THỰC (Mặt Trăng ở giữa)</text>
        <circle cx="40" cy="55" r="24" fill="#f59e0b"/>
        <text x="40" y="60" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="bold">M.Trời</text>

        <circle cx="160" cy="55" r="8" fill="#64748b"/>
        <text x="160" y="75" text-anchor="middle" fill="#cbd5e1" font-size="9">M.Trăng</text>

        <circle cx="260" cy="55" r="16" fill="#0284c7"/>
        <text x="260" y="60" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="bold">T.Đất</text>

        <!-- Shadow Cone -->
        <polygon points="160,47 260,53 260,57 160,63" fill="#000000" fill-opacity="0.6"/>
        <text x="200" y="95" text-anchor="middle" fill="#94a3b8" font-size="9">Vùng bóng tối (Umbra)</text>
      </g>

      <!-- Lunar Eclipse Block -->
      <g transform="translate(430, 20)">
        <text x="150" y="15" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">NGUYỆT THỰC (Trái Đất ở giữa)</text>
        <circle cx="40" cy="55" r="24" fill="#f59e0b"/>
        <text x="40" y="60" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="bold">M.Trời</text>

        <circle cx="150" cy="55" r="16" fill="#0284c7"/>
        <text x="150" y="60" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="bold">T.Đất</text>

        <circle cx="260" cy="55" r="8" fill="#f87171"/>
        <text x="260" y="75" text-anchor="middle" fill="#fca5a5" font-size="9">Trăng máu</text>

        <!-- Earth Shadow Cone -->
        <polygon points="150,39 270,49 270,61 150,71" fill="#000000" fill-opacity="0.6"/>
        <text x="200" y="95" text-anchor="middle" fill="#94a3b8" font-size="9">Mặt Trăng đi vào bóng Trái Đất</text>
      </g>
    </g>

    <!-- Bottom Half: Tide Mechanics (Spring vs Neap) -->
    <g transform="translate(60, 195)">
      <rect x="0" y="0" width="780" height="120" rx="12" fill="#0f172a" stroke="#0891b2" stroke-width="1.5"/>

      <!-- Spring Tide (Triều Cường) -->
      <g transform="translate(50, 20)">
        <text x="140" y="15" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">TRIỀU CƯỜNG (Spring Tide - Thẳng hàng)</text>
        <circle cx="30" cy="55" r="18" fill="#f59e0b"/>
        <text x="30" y="59" text-anchor="middle" fill="#ffffff" font-size="8">M.Trời</text>

        <!-- Stretched Earth Ocean Bulge -->
        <ellipse cx="140" cy="55" rx="22" ry="14" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
        <circle cx="140" cy="55" r="13" fill="#0f172a"/>
        <text x="140" y="58" text-anchor="middle" fill="#ffffff" font-size="8">T.Đất</text>

        <circle cx="230" cy="55" r="7" fill="#cbd5e1"/>
        <text x="230" y="72" text-anchor="middle" fill="#94a3b8" font-size="8">M.Trăng</text>
        <text x="140" y="90" text-anchor="middle" fill="#67e8f9" font-size="9">Lực hút cộng hưởng • Nước dâng cao nhất</text>
      </g>

      <!-- Neap Tide (Triều Kém) -->
      <g transform="translate(440, 20)">
        <text x="140" y="15" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="bold">TRIỀU KÉM (Neap Tide - Vuông góc)</text>
        <circle cx="30" cy="55" r="18" fill="#f59e0b"/>
        <text x="30" y="59" text-anchor="middle" fill="#ffffff" font-size="8">M.Trời</text>

        <!-- Vertical Bulge -->
        <ellipse cx="140" cy="55" rx="14" ry="20" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
        <circle cx="140" cy="55" r="13" fill="#0f172a"/>
        <text x="140" y="58" text-anchor="middle" fill="#ffffff" font-size="8">T.Đất</text>

        <circle cx="140" cy="10" r="7" fill="#cbd5e1"/>
        <text x="160" y="12" fill="#94a3b8" font-size="8">M.Trăng</text>
        <text x="140" y="90" text-anchor="middle" fill="#fcd34d" font-size="9">Lực hút triệt tiêu một phần • Biên độ nhỏ nhất</text>
      </g>
    </g>

    <text x="450" y="340" text-anchor="middle" fill="#94a3b8" font-size="11">Mặt phẳng quỹ đạo Mặt Trăng nghiêng 5° nên không xảy ra nhật thực/nguyệt thực hàng tháng</text>
  </svg>`,

  "7": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950 p-4 border border-cyan-500/30 shadow-lg">
    <text x="450" y="28" text-anchor="middle" fill="#cffafe" font-size="16" font-weight="bold" letter-spacing="1">HIỆU ỨNG NHÀ KÍNH, BIẾN ĐỔI KHÍ HẬU & PHÁT TRIỂN BỀN VỮNG</text>
    
    <!-- Left Box: Greenhouse Effect Mechanism -->
    <g transform="translate(60, 50)">
      <rect x="0" y="0" width="370" height="250" rx="14" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="185" y="26" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="bold">CƠ CHẾ HIỆU ỨNG NHÀ KÍNH</text>
      
      <!-- Ground -->
      <rect x="20" y="200" width="330" height="25" fill="#166534" rx="4"/>
      <text x="185" y="217" text-anchor="middle" fill="#dcfce7" font-size="11">Bề mặt Trái Đất (Đất & Đại dương)</text>

      <!-- Atmosphere Layer -->
      <path d="M 20 100 Q 185 85 350 100" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4" fill="none"/>
      <text x="185" y="80" text-anchor="middle" fill="#7dd3fc" font-size="11">Lớp khí quyển (CO₂, CH₄, H₂O)</text>

      <!-- Solar Influx -->
      <path d="M 50 35 L 90 200" stroke="#f59e0b" stroke-width="3"/>
      <text x="45" y="65" fill="#fcd34d" font-size="10">Bức xạ Mặt Trời sóng ngắn</text>

      <!-- Infrared Trapped -->
      <path d="M 120 200 L 150 100 L 180 200 L 210 100 L 240 200" stroke="#f43f5e" stroke-width="2" fill="none"/>
      <text x="210" y="140" fill="#fb7185" font-size="10">Bức xạ nhiệt hồng ngoại bị giữ lại</text>

      <text x="185" y="240" text-anchor="middle" fill="#94a3b8" font-size="10">Tăng CO₂ do hóa thạch làm tăng giữ nhiệt ⇒ Nóng lên toàn cầu</text>
    </g>

    <!-- Right Box: Sustainable Development & 3R -->
    <g transform="translate(460, 50)">
      <rect x="0" y="0" width="380" height="250" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
      <text x="190" y="26" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">PHÁT TRIỂN BỀN VỮNG & NGUYÊN TẮC 3R</text>

      <!-- 3 Pillars Triangle -->
      <rect x="25" y="45" width="330" height="50" rx="8" fill="#1e1b4b" stroke="#38bdf8" stroke-width="1"/>
      <text x="40" y="65" fill="#38bdf8" font-size="11" font-weight="bold">3 TRỤ CỘT BỀN VỮNG:</text>
      <text x="40" y="83" fill="#cbd5e1" font-size="10">Kinh tế phát triển • Xã hội công bằng • Môi trường bảo tồn</text>

      <!-- 3R Model -->
      <rect x="25" y="105" width="330" height="120" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="1"/>
      <text x="40" y="125" fill="#6ee7b7" font-size="11" font-weight="bold">MÔ HÌNH HÀNH ĐỘNG 3R:</text>
      <text x="40" y="145" fill="#ffffff" font-size="11">1. REDUCE (Giảm thiểu): <tspan fill="#a7f3d0">Hạn chế phát sinh rác thải nhựa</tspan></text>
      <text x="40" y="170" fill="#ffffff" font-size="11">2. REUSE (Tái sử dụng): <tspan fill="#a7f3d0">Sử dụng nhiều lần đồ dùng</tspan></text>
      <text x="40" y="195" fill="#ffffff" font-size="11">3. RECYCLE (Tái chế): <tspan fill="#a7f3d0">Thu gom xử lí nguyên liệu mới</tspan></text>
      <text x="40" y="215" fill="#fcd34d" font-size="10">Mục tiêu quốc gia: Phát thải ròng Net Zero vào năm 2050</text>
    </g>

    <text x="450" y="335" text-anchor="middle" fill="#94a3b8" font-size="11">Hiệu ứng nhà kính tự nhiên giữ ấm Trái Đất • Hiệu ứng nhà kính nhân tạo tăng cao đe dọa sự sống</text>
  </svg>`,

  "8": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950 p-4 border border-cyan-500/30 shadow-lg">
    <text x="450" y="28" text-anchor="middle" fill="#cffafe" font-size="16" font-weight="bold" letter-spacing="1">ĐỊNH LUẬT NHIỆT ĐỘNG II & SỬ DỤNG NĂNG LƯỢNG HIỆU QUẢ</text>
    
    <!-- Heat Pump / AC Principle Left -->
    <g transform="translate(60, 50)">
      <rect x="0" y="0" width="370" height="250" rx="14" fill="#0f172a" stroke="#0891b2" stroke-width="1.5"/>
      <text x="185" y="26" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">VẬT LÍ MÁY LÀM LẠNH (ĐỊNH LUẬT II)</text>

      <!-- Cold Source (Room) -->
      <rect x="25" y="45" width="130" height="60" rx="8" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1"/>
      <text x="90" y="70" text-anchor="middle" fill="#7dd3fc" font-size="11" font-weight="bold">NGUỒN LẠNH</text>
      <text x="90" y="90" text-anchor="middle" fill="#cbd5e1" font-size="10">Trong phòng T₁</text>

      <!-- Compressor Engine -->
      <circle cx="185" cy="140" r="32" fill="#0f766e" stroke="#2dd4bf" stroke-width="2"/>
      <text x="185" y="137" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="bold">MÁY NÉN</text>
      <text x="185" y="152" text-anchor="middle" fill="#ccfbf1" font-size="9">Nhận công A</text>

      <!-- Hot Source (Outside) -->
      <rect x="215" y="45" width="130" height="60" rx="8" fill="#7f1d1d" stroke="#f87171" stroke-width="1"/>
      <text x="280" y="70" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="bold">NGUỒN NÓNG</text>
      <text x="280" y="90" text-anchor="middle" fill="#cbd5e1" font-size="10">Ngoài trời T₂</text>

      <!-- Arrows -->
      <path d="M 90 105 L 90 140 L 153 140" stroke="#38bdf8" stroke-width="2.5" fill="none"/>
      <text x="110" y="130" fill="#38bdf8" font-size="10">Hút Q₁</text>
      <path d="M 217 140 L 280 140 L 280 105" stroke="#f43f5e" stroke-width="2.5" fill="none"/>
      <text x="235" y="130" fill="#f43f5e" font-size="10">Thải Q₂</text>

      <rect x="25" y="185" width="320" height="50" rx="8" fill="#1e1b4b"/>
      <text x="35" y="205" fill="#fcd34d" font-size="10" font-weight="bold">Quy luật: Q₂ = Q₁ + A</text>
      <text x="35" y="222" fill="#cbd5e1" font-size="9">Nhiệt không tự truyền từ lạnh sang nóng • Phải tốn điện A</text>
    </g>

    <!-- Energy Efficiency Solutions Right -->
    <g transform="translate(460, 50)">
      <rect x="0" y="0" width="380" height="250" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
      <text x="190" y="26" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">GIẢI PHÁP TIẾT KIỆM NĂNG LƯỢNG</text>

      <g transform="translate(25, 45)">
        <rect x="0" y="0" width="330" height="50" rx="8" fill="#1e293b"/>
        <text x="15" y="22" fill="#38bdf8" font-size="11" font-weight="bold">1. Điều hòa nhiệt độ hợp lí:</text>
        <text x="15" y="40" fill="#cbd5e1" font-size="10">Cài đặt 26°C - 28°C kết hợp quạt, vệ sinh màng lọc định kì</text>
      </g>

      <g transform="translate(25, 105)">
        <rect x="0" y="0" width="330" height="50" rx="8" fill="#1e293b"/>
        <text x="15" y="22" fill="#fcd34d" font-size="11" font-weight="bold">2. Tối ưu hóa động cơ & lốp xe:</text>
        <text x="15" y="40" fill="#cbd5e1" font-size="10">Bảo dưỡng tản nhiệt, giữ áp suất lốp chuẩn giảm ma sát lăn</text>
      </g>

      <g transform="translate(25, 165)">
        <rect x="0" y="0" width="330" height="55" rx="8" fill="#1e293b"/>
        <text x="15" y="22" fill="#34d399" font-size="11" font-weight="bold">3. Kiến trúc cách nhiệt thông minh:</text>
        <text x="15" y="40" fill="#cbd5e1" font-size="10">Dán phim cách nhiệt, che bóng hướng Tây, tận dụng gió trời</text>
      </g>
    </g>

    <text x="450" y="335" text-anchor="middle" fill="#94a3b8" font-size="11">Hiệu quả năng lượng là cung cấp dịch vụ như mong muốn với mức tiêu hao năng lượng thấp nhất</text>
  </svg>`,

  "9": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950 p-4 border border-cyan-500/30 shadow-lg">
    <text x="450" y="28" text-anchor="middle" fill="#cffafe" font-size="16" font-weight="bold" letter-spacing="1">CƠ CHẾ MƯA ACID & SỰ SUY GIẢM TẦNG OZONE DO KHÍ CFC</text>
    
    <!-- Acid Rain Mechanism Left -->
    <g transform="translate(60, 50)">
      <rect x="0" y="0" width="370" height="250" rx="14" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5"/>
      <text x="185" y="26" text-anchor="middle" fill="#fb7185" font-size="13" font-weight="bold">CƠ CHẾ HÌNH THÀNH MƯA ACID</text>

      <!-- Smoke from Factory -->
      <rect x="40" y="180" width="60" height="45" fill="#475569"/>
      <line x1="60" y1="180" x2="60" y2="150" stroke="#64748b" stroke-width="12"/>
      <text x="70" y="130" fill="#fca5a5" font-size="10">Khí SO₂, NOₓ</text>

      <!-- Cloud with Acid -->
      <ellipse cx="230" cy="90" rx="60" ry="25" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="230" y="85" text-anchor="middle" fill="#fecdd3" font-size="10" font-weight="bold">Mây mang H₂SO₄, HNO₃</text>
      <text x="230" y="100" text-anchor="middle" fill="#fca5a5" font-size="9">SO₂ + H₂O + O₂ → Acid</text>

      <!-- Acid Rain Drops -->
      <path d="M 190 125 L 180 155 M 220 125 L 210 155 M 250 125 L 240 155 M 280 125 L 270 155" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4,4"/>

      <!-- Forest damaged -->
      <rect x="150" y="195" width="200" height="30" fill="#713f12" rx="4"/>
      <text x="250" y="215" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="bold">Mưa Acid (pH &lt; 5,6) chua hóa đất</text>

      <text x="185" y="240" text-anchor="middle" fill="#94a3b8" font-size="10">Hủy diệt sinh vật phù du, ăn mòn kim loại & đá vôi</text>
    </g>

    <!-- Ozone Layer Depletion Right -->
    <g transform="translate(460, 50)">
      <rect x="0" y="0" width="380" height="250" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="190" y="26" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">SỰ PHÁ HỦY TẦNG OZONE (O₃)</text>

      <!-- Ozone Layer Bar -->
      <rect x="30" y="60" width="320" height="40" rx="6" fill="#0369a1" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="190" y="85" text-anchor="middle" fill="#e0f2fe" font-size="12" font-weight="bold">TẦNG BÌNH LƯU: OZONE (O₃) CHẮN TIA UV</text>

      <!-- CFC chain reaction box -->
      <rect x="30" y="120" width="320" height="85" rx="8" fill="#1e1b4b"/>
      <text x="45" y="140" fill="#fcd34d" font-size="11" font-weight="bold">Phản ứng dây chuyền xúc tác Clo:</text>
      <text x="45" y="160" fill="#cbd5e1" font-size="10">1. Tia UV bẻ gãy CFC giải phóng gốc Clo: <tspan fill="#f87171">Cl•</tspan></text>
      <text x="45" y="180" fill="#cbd5e1" font-size="10">2. <tspan fill="#f87171">Cl• + O₃ → ClO• + O₂</tspan> (Phá hủy Ozone)</text>
      <text x="45" y="198" fill="#a7f3d0" font-size="9">Mỗi nguyên tử Clo phá hủy tới 100.000 phân tử Ozone</text>

      <text x="190" y="235" text-anchor="middle" fill="#67e8f9" font-size="10">Nghị định thư Montreal (1987) đã cấm hoàn toàn chất CFC</text>
    </g>

    <text x="450" y="335" text-anchor="middle" fill="#94a3b8" font-size="11">Hiểu bản chất hóa lí của chất ô nhiễm là cơ sở để thiết kế công nghệ xử lí và phục hồi sinh quyển</text>
  </svg>`,

  "10": `<svg viewBox="0 0 900 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950 p-4 border border-cyan-500/30 shadow-lg">
    <text x="450" y="28" text-anchor="middle" fill="#cffafe" font-size="16" font-weight="bold" letter-spacing="1">CÔNG NGHỆ NĂNG LƯỢNG TÁI TẠO & MÔ HÌNH TURBINE GIÓ STEM</text>
    
    <!-- Solar PV Principle Left -->
    <g transform="translate(60, 50)">
      <rect x="0" y="0" width="360" height="250" rx="14" fill="#0f172a" stroke="#0891b2" stroke-width="1.5"/>
      <text x="180" y="26" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">PIN QUANG ĐIỆN (SOLAR PV)</text>

      <!-- Solar Panel -->
      <polygon points="60,90 260,90 280,150 40,150" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
      <!-- Grid lines -->
      <line x1="110" y1="90" x2="100" y2="150" stroke="#93c5fd" stroke-width="1"/>
      <line x1="160" y1="90" x2="160" y2="150" stroke="#93c5fd" stroke-width="1"/>
      <line x1="210" y1="90" x2="220" y2="150" stroke="#93c5fd" stroke-width="1"/>
      <line x1="50" y1="120" x2="270" y2="120" stroke="#93c5fd" stroke-width="1"/>

      <!-- Sun Rays -->
      <path d="M 120 45 L 140 85 M 160 45 L 170 85 M 200 45 L 195 85" stroke="#f59e0b" stroke-width="2"/>
      <text x="160" y="40" text-anchor="middle" fill="#fcd34d" font-size="10">Photon ánh sáng</text>

      <!-- Explanation Box -->
      <rect x="25" y="170" width="310" height="65" rx="8" fill="#1e1b4b"/>
      <text x="35" y="190" fill="#38bdf8" font-size="10" font-weight="bold">Hiệu ứng quang điện trong:</text>
      <text x="35" y="208" fill="#cbd5e1" font-size="10">Photon đập vào bán dẫn giải phóng electron - lỗ trống</text>
      <text x="35" y="224" fill="#a7f3d0" font-size="9">Tạo ra dòng điện một chiều (DC) trực tiếp không qua cơ năng</text>
    </g>

    <!-- Wind Turbine STEM Model Right -->
    <g transform="translate(460, 50)">
      <rect x="0" y="0" width="380" height="250" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
      <text x="190" y="26" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">MÔ HÌNH TURBINE GIÓ STEM</text>

      <!-- Tower -->
      <line x1="120" y1="110" x2="120" y2="210" stroke="#94a3b8" stroke-width="6"/>
      <rect x="95" y="210" width="50" height="12" fill="#64748b" rx="2"/>

      <!-- Nacelle / DC Motor Generator -->
      <rect x="105" y="98" width="35" height="22" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
      <circle cx="105" cy="109" r="6" fill="#f59e0b"/>

      <!-- Rotor Blades -->
      <g transform="translate(105, 109)">
        <path d="M 0 0 L -45 -35 Q -30 -10 0 0" fill="#38bdf8" stroke="#ffffff" stroke-width="1"/>
        <path d="M 0 0 L 10 55 Q 0 35 0 0" fill="#38bdf8" stroke="#ffffff" stroke-width="1"/>
        <path d="M 0 0 L 50 -25 Q 30 -5 0 0" fill="#38bdf8" stroke="#ffffff" stroke-width="1"/>
      </g>

      <!-- LED Light connected -->
      <line x1="140" y1="109" x2="220" y2="109" stroke="#fcd34d" stroke-width="1.5" stroke-dasharray="3,3"/>
      <circle cx="230" cy="109" r="8" fill="#f59e0b"/>
      <text x="245" y="113" fill="#fcd34d" font-size="10" font-weight="bold">Đèn LED sáng</text>

      <!-- Explanation Box -->
      <rect x="165" y="145" width="200" height="85" rx="8" fill="#064e3b"/>
      <text x="175" y="165" fill="#6ee7b7" font-size="10" font-weight="bold">Quy trình STEM 5 bước:</text>
      <text x="175" y="182" fill="#ffffff" font-size="9">• Gió tạo lực nâng khí động</text>
      <text x="175" y="198" fill="#ffffff" font-size="9">• Quay trục mô-tơ phát điện</text>
      <text x="175" y="214" fill="#fcd34d" font-size="9">• Cảm ứng điện từ thắp sáng LED</text>
    </g>

    <text x="450" y="335" text-anchor="middle" fill="#94a3b8" font-size="11">Năng lượng tái tạo sạch vô tận • Công suất gió tỉ lệ với lập phương vận tốc gió P ∝ v³</text>
  </svg>`
};

const outputPath = path.join(__dirname, 'cd_vatly10_svgs.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(diagramSVGs, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/cd_vatly10_svgs.js with 10 SVGs.');
