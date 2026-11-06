// chebienthucpham9_diagrams.js - Sơ đồ vector SVG trực quan độc bản cho từng bài học (Bài 1 -> Bài 7)

const chebienDiagrams = {
  // SƠ ĐỒ BÀI 1: Năng lượng sinh học (Carbohydrate, Lipid, Protein, Vi chất)
  dinhDuong: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-chart-pie"></i> Sơ đồ Năng lượng sinh học: 3 Nhóm chất sinh năng lượng &amp; Vi chất thiết yếu (Bài 1)
      </div>
      <svg viewBox="0 0 650 200" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="200" rx="12" fill="#ffffff" fill-opacity="0.85" stroke="#fed7aa" stroke-width="1.5"/>
        
        <!-- Cột 1: Carbohydrate (58-70% năng lượng) -->
        <g transform="translate(25, 20)">
          <rect width="185" height="160" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
          <text x="92" y="24" text-anchor="middle" font-size="12" font-weight="900" fill="#a16207">CARBOHYDRATE</text>
          <text x="92" y="40" text-anchor="middle" font-size="9.5" fill="#854d0e">(Tinh bột, đường, chất xơ)</text>
          <circle cx="92" cy="78" r="28" fill="#fef08a" stroke="#eab308" stroke-width="2"/>
          <text x="92" y="76" text-anchor="middle" font-size="14" font-weight="black" fill="#a16207">4</text>
          <text x="92" y="90" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#854d0e">kcal / 1 g</text>
          <text x="92" y="125" text-anchor="middle" font-size="10" font-weight="bold" fill="#713f12">58% – 70% tổng calo</text>
          <text x="92" y="142" text-anchor="middle" font-size="9" fill="#854d0e">Gạo, ngô, khoai, củ, bánh mì</text>
        </g>
        
        <!-- Cột 2: Lipid (18-25% năng lượng) -->
        <g transform="translate(232, 20)">
          <rect width="185" height="160" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
          <text x="92" y="24" text-anchor="middle" font-size="12" font-weight="900" fill="#c2410c">LIPID (CHẤT BÉO)</text>
          <text x="92" y="40" text-anchor="middle" font-size="9.5" fill="#9a3412">(Mỡ động vật, dầu thực vật)</text>
          <circle cx="92" cy="78" r="28" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
          <text x="92" y="76" text-anchor="middle" font-size="14" font-weight="black" fill="#c2410c">9</text>
          <text x="92" y="90" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#9a3412">kcal / 1 g</text>
          <text x="92" y="125" text-anchor="middle" font-size="10" font-weight="bold" fill="#7c2d12">18% – 25% tổng calo</text>
          <text x="92" y="142" text-anchor="middle" font-size="9" fill="#9a3412">Năng lượng đậm đặc • Hoà tan A,D,E,K</text>
        </g>
        
        <!-- Cột 3: Protein (12-14% năng lượng) -->
        <g transform="translate(440, 20)">
          <rect width="185" height="160" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
          <text x="92" y="24" text-anchor="middle" font-size="12" font-weight="900" fill="#15803d">PROTEIN (ĐẠM)</text>
          <text x="92" y="40" text-anchor="middle" font-size="9.5" fill="#166534">(Thịt, cá, trứng, sữa, đậu)</text>
          <circle cx="92" cy="78" r="28" fill="#bbf7d0" stroke="#22c55e" stroke-width="2"/>
          <text x="92" y="76" text-anchor="middle" font-size="14" font-weight="black" fill="#15803d">4</text>
          <text x="92" y="90" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#166534">kcal / 1 g</text>
          <text x="92" y="125" text-anchor="middle" font-size="10" font-weight="bold" fill="#14532d">12% – 14% tổng calo</text>
          <text x="92" y="142" text-anchor="middle" font-size="9" fill="#166534">Kiến tạo tế bào • 9 amino acid thiết yếu</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 2: Các phương pháp bảo quản thực phẩm & Thang đo nhiệt độ (Đặc thù Bài 2)
  baoQuan: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-slate-900 dark:to-sky-950/40 border border-sky-200 dark:border-sky-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-temperature-arrow-down"></i> Sơ đồ Các phương pháp bảo quản thực phẩm &amp; Thang nhiệt độ tối ưu (Bài 2)
      </div>
      <svg viewBox="0 0 650 200" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="200" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#bae6fd" stroke-width="1.5"/>
        
        <!-- Nhóm 1: Đông đá lạnh sâu -->
        <g transform="translate(20, 20)">
          <rect width="140" height="160" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
          <rect x="0" y="0" width="140" height="32" rx="10" fill="#0284c7"/>
          <text x="70" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">ĐÔNG LẠNH SÂU</text>
          <text x="70" y="58" text-anchor="middle" font-size="15" font-weight="black" fill="#0369a1">&lt; 0 °C</text>
          <text x="70" y="74" text-anchor="middle" font-size="9" font-weight="bold" fill="#0c4a6e">(-18 °C chuẩn)</text>
          <line x1="15" y1="85" x2="125" y2="85" stroke="#bae6fd" stroke-width="1"/>
          <text x="70" y="105" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0369a1">Ngăn đông đá</text>
          <text x="70" y="122" text-anchor="middle" font-size="8.5" fill="#334155">• Đóng băng nước</text>
          <text x="70" y="137" text-anchor="middle" font-size="8.5" fill="#334155">• Ngừng vi sinh vật</text>
          <text x="70" y="152" text-anchor="middle" font-size="8.5" fill="#0369a1">Thịt cá hàng tháng</text>
        </g>

        <!-- Nhóm 2: Làm lạnh ngăn mát -->
        <g transform="translate(175, 20)">
          <rect width="140" height="160" rx="10" fill="#ecfeff" stroke="#0891b2" stroke-width="1.5"/>
          <rect x="0" y="0" width="140" height="32" rx="10" fill="#0891b2"/>
          <text x="70" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">BẢO QUẢN MÁT</text>
          <text x="70" y="58" text-anchor="middle" font-size="15" font-weight="black" fill="#0e7490">1 °C – 7 °C</text>
          <text x="70" y="74" text-anchor="middle" font-size="9" font-weight="bold" fill="#155e75">(Ngăn mát tủ lạnh)</text>
          <line x1="15" y1="85" x2="125" y2="85" stroke="#a5f3fc" stroke-width="1"/>
          <text x="70" y="105" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0e7490">Ngăn rau quả / sữa</text>
          <text x="70" y="122" text-anchor="middle" font-size="8.5" fill="#334155">• Chậm phân huỷ</text>
          <text x="70" y="137" text-anchor="middle" font-size="8.5" fill="#334155">• Giữ độ tươi tự nhiên</text>
          <text x="70" y="152" text-anchor="middle" font-size="8.5" fill="#0e7490">Dùng trong 2-7 ngày</text>
        </g>

        <!-- Nhóm 3: Phơi sấy khô rút ẩm -->
        <g transform="translate(330, 20)">
          <rect width="140" height="160" rx="10" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
          <rect x="0" y="0" width="140" height="32" rx="10" fill="#d97706"/>
          <text x="70" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">PHƠI SẤY KHÔ</text>
          <text x="70" y="58" text-anchor="middle" font-size="14" font-weight="black" fill="#b45309">HẠ ĐỘ ẨM</text>
          <text x="70" y="74" text-anchor="middle" font-size="9" font-weight="bold" fill="#78350f">(Rút nước tự do)</text>
          <line x1="15" y1="85" x2="125" y2="85" stroke="#fde68a" stroke-width="1"/>
          <text x="70" y="105" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#b45309">Nắng / Sấy thăng hoa</text>
          <text x="70" y="122" text-anchor="middle" font-size="8.5" fill="#334155">• Vi khuẩn thiếu nước</text>
          <text x="70" y="137" text-anchor="middle" font-size="8.5" fill="#334155">• Bảo quản lâu dài</text>
          <text x="70" y="152" text-anchor="middle" font-size="8.5" fill="#b45309">Ngô, thóc, cá khô, mực</text>
        </g>

        <!-- Nhóm 4: Thanh trùng & Tiệt trùng đóng hộp -->
        <g transform="translate(485, 20)">
          <rect width="145" height="160" rx="10" fill="#fff1f2" stroke="#e11d48" stroke-width="1.5"/>
          <rect x="0" y="0" width="145" height="32" rx="10" fill="#e11d48"/>
          <text x="72" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">NHIỆT &amp; ĐÓNG HỘP</text>
          <text x="72" y="58" text-anchor="middle" font-size="14" font-weight="black" fill="#be123c">&gt; 100 °C</text>
          <text x="72" y="74" text-anchor="middle" font-size="9" font-weight="bold" fill="#881337">(Tiệt trùng chân không)</text>
          <line x1="15" y1="85" x2="130" y2="85" stroke="#fecdd3" stroke-width="1"/>
          <text x="72" y="105" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#be123c">Đóng hộp kín khí</text>
          <text x="72" y="122" text-anchor="middle" font-size="8.5" fill="#334155">• Diệt khuẩn và bào tử</text>
          <text x="72" y="137" text-anchor="middle" font-size="8.5" fill="#334155">• Chống tái xâm nhập</text>
          <text x="72" y="152" text-anchor="middle" font-size="8.5" fill="#be123c">Sữa hộp, cá hộp, pate</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 3: Bản đồ 4 Nghề nghiệp Chế biến thực phẩm (Đặc thù Bài 3)
  ngheNghiep: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-200 dark:border-indigo-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-users-gear"></i> Bản đồ 4 Ngành nghề trọng điểm trong Lĩnh vực Chế biến thực phẩm (Bài 3)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#c7d2fe" stroke-width="1.5"/>

        <!-- Nghề 1: Thợ chế biến thực phẩm -->
        <g transform="translate(18, 18)">
          <rect width="142" height="154" rx="8" fill="#f8fafc" stroke="#475569" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#475569"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">THỢ CHẾ BIẾN</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#334155">Cơ sở sản xuất / Bếp</text>
          <text x="71" y="72" text-anchor="middle" font-size="8.5" fill="#475569">• Sơ chế, cắt thái nguyên liệu</text>
          <text x="71" y="90" text-anchor="middle" font-size="8.5" fill="#475569">• Tẩm ướp &amp; đóng gói</text>
          <text x="71" y="108" text-anchor="middle" font-size="8.5" fill="#475569">• Tuân thủ tiêu chuẩn VSAT</text>
          <rect x="12" y="125" width="118" height="20" rx="4" fill="#e2e8f0"/>
          <text x="71" y="139" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#1e293b">Khéo tay • Chăm chỉ</text>
        </g>

        <!-- Nghề 2: Thợ vận hành máy sản xuất -->
        <g transform="translate(172, 18)">
          <rect width="142" height="154" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#16a34a"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">THỢ VẬN HÀNH MÁY</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">Nhà máy công nghiệp</text>
          <text x="71" y="72" text-anchor="middle" font-size="8.5" fill="#166534">• Điều khiển dây chuyền tự động</text>
          <text x="71" y="90" text-anchor="middle" font-size="8.5" fill="#166534">• Giám sát nhiệt độ &amp; áp suất</text>
          <text x="71" y="108" text-anchor="middle" font-size="8.5" fill="#166534">• Bảo dưỡng &amp; xử lí sự cố</text>
          <rect x="12" y="125" width="118" height="20" rx="4" fill="#bbf7d0"/>
          <text x="71" y="139" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#14532d">Kĩ thuật • Kỉ luật cao</text>
        </g>

        <!-- Nghề 3: Đầu bếp & Bếp trưởng -->
        <g transform="translate(326, 18)">
          <rect width="142" height="154" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#ea580c"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">BẾP TRƯỞNG (CHEF)</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#c2410c">Nhà hàng / Khách sạn</text>
          <text x="71" y="72" text-anchor="middle" font-size="8.5" fill="#9a3412">• Thiết kế thực đơn sáng tạo</text>
          <text x="71" y="90" text-anchor="middle" font-size="8.5" fill="#9a3412">• Trực tiếp chế biến tinh hoa</text>
          <text x="71" y="108" text-anchor="middle" font-size="8.5" fill="#9a3412">• Quản lí chi phí &amp; đội ngũ</text>
          <rect x="12" y="125" width="118" height="20" rx="4" fill="#fed7aa"/>
          <text x="71" y="139" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#7c2d12">Vị giác nhạy • Thẩm mĩ</text>
        </g>

        <!-- Nghề 4: Nhân viên đồ ăn nhanh -->
        <g transform="translate(480, 18)">
          <rect width="150" height="154" rx="8" fill="#fdf4ff" stroke="#a855f7" stroke-width="1.3"/>
          <rect width="150" height="28" rx="8" fill="#a855f7"/>
          <text x="75" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">CHUẨN BỊ FAST FOOD</text>
          <text x="75" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#7e22ce">Chuỗi cửa hàng tiện lợi</text>
          <text x="75" y="72" text-anchor="middle" font-size="8.5" fill="#6b21a8">• Chế biến theo định lượng chuẩn</text>
          <text x="75" y="90" text-anchor="middle" font-size="8.5" fill="#6b21a8">• Chiên nướng bánh nhanh chóng</text>
          <text x="75" y="108" text-anchor="middle" font-size="8.5" fill="#6b21a8">• Phục vụ tại quầy niềm nở</text>
          <rect x="14" y="125" width="122" height="20" rx="4" fill="#f5d0fe"/>
          <text x="75" y="139" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#581c87">Nhanh nhẹn • Giao tiếp tốt</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 4: Tam giác hoạt động nhà bếp & Vùng nhiệt độ an toàn (Đặc thù Bài 4)
  tamGiacBep: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-kitchen-set"></i> Nguyên tắc Tam giác hoạt động nhà bếp &amp; Luồng công việc 1 chiều an toàn (Bài 4)
      </div>
      <svg viewBox="0 0 650 210" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="210" rx="12" fill="#ffffff" fill-opacity="0.85" stroke="#a7f3d0" stroke-width="1.5"/>

        <!-- Đỉnh 1: Tủ lạnh (Lưu trữ) -->
        <g transform="translate(60, 25)">
          <rect width="130" height="75" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
          <text x="65" y="24" text-anchor="middle" font-size="16" fill="#2563eb">❄️</text>
          <text x="65" y="44" text-anchor="middle" font-size="11.5" font-weight="900" fill="#1e40af">1. TỦ LẠNH</text>
          <text x="65" y="62" text-anchor="middle" font-size="9" fill="#1d4ed8">Lưu trữ 1–7°C / &lt;0°C</text>
        </g>

        <!-- Đỉnh 2: Bồn rửa (Sơ chế, làm sạch) -->
        <g transform="translate(260, 115)">
          <rect width="130" height="75" rx="10" fill="#f0fdf4" stroke="#10b981" stroke-width="2"/>
          <text x="65" y="24" text-anchor="middle" font-size="16" fill="#059669">💧</text>
          <text x="65" y="44" text-anchor="middle" font-size="11.5" font-weight="900" fill="#065f46">2. BỒN RỬA</text>
          <text x="65" y="62" text-anchor="middle" font-size="9" fill="#047857">Sơ chế &amp; Vệ sinh</text>
        </g>

        <!-- Đỉnh 3: Bếp nấu (Gia nhiệt) -->
        <g transform="translate(460, 25)">
          <rect width="130" height="75" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
          <text x="65" y="24" text-anchor="middle" font-size="16" fill="#dc2626">🔥</text>
          <text x="65" y="44" text-anchor="middle" font-size="11.5" font-weight="900" fill="#991b1b">3. BẾP NẤU</text>
          <text x="65" y="62" text-anchor="middle" font-size="9" fill="#b91c1c">Gia nhiệt &gt; 70°C tâm</text>
        </g>

        <!-- Đường nối luồng 1 chiều -->
        <path d="M 190 62 L 260 145" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="6,4"/>
        <text x="210" y="112" font-size="10" font-weight="bold" fill="#059669">Bước 1: Lấy đồ</text>

        <path d="M 390 145 L 460 62" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="6,4"/>
        <text x="440" y="125" font-size="10" font-weight="bold" fill="#dc2626">Bước 2: Nấu nướng</text>

        <!-- Thông điệp luồng 1 chiều -->
        <rect x="210" y="15" width="230" height="50" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="325" y="34" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">LUỒNG 1 CHIỀU: THỰC PHẨM</text>
        <text x="325" y="52" text-anchor="middle" font-size="8.5" fill="#475569">Không để đồ chín chạm đồ sống • Tránh lây nhiễm chéo</text>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 5: Quy trình 7 bước tính toán chi phí bữa ăn theo dự án (Đặc thù Bài 5)
  quyTrinhChiPhi: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-slate-900 dark:to-amber-950/40 border border-amber-300 dark:border-amber-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-list-check"></i> Sơ đồ Tiến trình 7 Bước Tính Toán Chi Phí Bữa Ăn Theo Thực Đơn (Bài 5)
      </div>
      <svg viewBox="0 0 650 200" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="200" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#fde047" stroke-width="1.5"/>

        <!-- Hàng trên: Bước 1 -> Bước 4 -->
        <!-- Bước 1 -->
        <g transform="translate(20, 20)">
          <rect width="135" height="65" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="20" cy="20" r="10" fill="#f59e0b"/>
          <text x="20" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">1</text>
          <text x="75" y="23" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">Số người ăn</text>
          <text x="68" y="44" text-anchor="middle" font-size="8.5" fill="#78350f">Xác định khẩu phần &amp; sở thích</text>
        </g>
        <line x1="155" y1="52" x2="180" y2="52" stroke="#d97706" stroke-width="2" marker-end="url(#arrow)"/>

        <!-- Bước 2 -->
        <g transform="translate(180, 20)">
          <rect width="135" height="65" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="20" cy="20" r="10" fill="#f59e0b"/>
          <text x="20" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">2</text>
          <text x="75" y="23" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">Lên thực đơn</text>
          <text x="68" y="44" text-anchor="middle" font-size="8.5" fill="#78350f">Cân đối 4 nhóm dưỡng chất</text>
        </g>
        <line x1="315" y1="52" x2="340" y2="52" stroke="#d97706" stroke-width="2"/>

        <!-- Bước 3 -->
        <g transform="translate(340, 20)">
          <rect width="135" height="65" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="20" cy="20" r="10" fill="#f59e0b"/>
          <text x="20" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">3</text>
          <text x="75" y="23" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">Định lượng</text>
          <text x="68" y="44" text-anchor="middle" font-size="8.5" fill="#78350f">Ước tính khối lượng (g/kg/mớ)</text>
        </g>
        <line x1="475" y1="52" x2="500" y2="52" stroke="#d97706" stroke-width="2"/>

        <!-- Bước 4 -->
        <g transform="translate(500, 20)">
          <rect width="130" height="65" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="20" cy="20" r="10" fill="#f59e0b"/>
          <text x="20" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">4</text>
          <text x="75" y="23" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">Khảo sát giá</text>
          <text x="65" y="44" text-anchor="middle" font-size="8.5" fill="#78350f">Thu thập đơn giá thực tế</text>
        </g>

        <!-- Hàng dưới: Bước 5 <- Bước 6 <- Bước 7 -->
        <!-- Bước 5 -->
        <g transform="translate(40, 110)">
          <rect width="170" height="70" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
          <circle cx="20" cy="20" r="10" fill="#16a34a"/>
          <text x="20" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">5</text>
          <text x="95" y="23" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">Quy đổi &amp; Tính món</text>
          <text x="95" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#166534">Chi phí = (m / 1000) × Giá</text>
        </g>
        <line x1="210" y1="145" x2="245" y2="145" stroke="#16a34a" stroke-width="2"/>

        <!-- Bước 6 -->
        <g transform="translate(245, 110)">
          <rect width="170" height="70" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
          <circle cx="20" cy="20" r="10" fill="#2563eb"/>
          <text x="20" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">6</text>
          <text x="95" y="23" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">Tổng &amp; Bình quân</text>
          <text x="95" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">Suất ăn = Tổng tiền / Số người</text>
        </g>
        <line x1="415" y1="145" x2="450" y2="145" stroke="#2563eb" stroke-width="2"/>

        <!-- Bước 7 -->
        <g transform="translate(450, 110)">
          <rect width="170" height="70" rx="8" fill="#fdf4ff" stroke="#9333ea" stroke-width="1.5"/>
          <circle cx="20" cy="20" r="10" fill="#9333ea"/>
          <text x="20" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">7</text>
          <text x="95" y="23" text-anchor="middle" font-size="10" font-weight="bold" fill="#7e22ce">Đánh giá &amp; Điều chỉnh</text>
          <text x="95" y="44" text-anchor="middle" font-size="8.5" fill="#6b21a8">Tối ưu chi tiêu kinh tế</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 6: 4 Phương pháp chế biến thực phẩm có sử dụng nhiệt (Đặc thù Bài 6)
  cheBienNhiet: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 dark:from-slate-900 dark:to-rose-950/40 border border-rose-200 dark:border-rose-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-fire-burner"></i> Phân loại 4 Nhóm Phương Pháp Chế Biến Thực Phẩm Có Sử Dụng Nhiệt (Bài 6)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#fecdd3" stroke-width="1.5"/>

        <!-- Cột 1: Nước nóng -->
        <g transform="translate(18, 18)">
          <rect width="142" height="154" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#2563eb"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">DÙNG NƯỚC NÓNG</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">Luộc • Canh • Kho</text>
          <text x="71" y="72" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Luộc: Nước sôi ngập</text>
          <text x="71" y="90" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Canh: Phối hợp rau thịt</text>
          <text x="71" y="108" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Kho: Nước ít, đậm vị</text>
          <rect x="12" y="125" width="118" height="20" rx="4" fill="#dbeafe"/>
          <text x="71" y="139" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#1e40af">Thanh ngọt • Dễ tiêu</text>
        </g>

        <!-- Cột 2: Hơi nước nóng -->
        <g transform="translate(172, 18)">
          <rect width="142" height="154" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#16a34a"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">DÙNG HƠI NƯỚC</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">Hấp (Steaming)</text>
          <text x="71" y="72" text-anchor="middle" font-size="8.5" fill="#166534">• Hơi nước nóng bốc lên</text>
          <text x="71" y="90" text-anchor="middle" font-size="8.5" fill="#166534">• Không ngập trong nước</text>
          <text x="71" y="108" text-anchor="middle" font-size="8.5" fill="#166534">• Giữ trọn vẹn vitamin C</text>
          <rect x="12" y="125" width="118" height="20" rx="4" fill="#bbf7d0"/>
          <text x="71" y="139" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#14532d">Bảo tồn vi chất tối đa</text>
        </g>

        <!-- Cột 3: Không khí nóng -->
        <g transform="translate(326, 18)">
          <rect width="142" height="154" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#ea580c"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">KHÔNG KHÍ NÓNG</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#c2410c">Nướng (Baking/Grill)</text>
          <text x="71" y="72" text-anchor="middle" font-size="8.5" fill="#9a3412">• Nhiệt bức xạ 160–220°C</text>
          <text x="71" y="90" text-anchor="middle" font-size="8.5" fill="#9a3412">• Phản ứng Maillard thơm</text>
          <text x="71" y="108" text-anchor="middle" font-size="8.5" fill="#9a3412">• Tránh để cháy than đen</text>
          <rect x="12" y="125" width="118" height="20" rx="4" fill="#fed7aa"/>
          <text x="71" y="139" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#7c2d12">Vỏ vàng thơm rụm</text>
        </g>

        <!-- Cột 4: Chất béo nóng -->
        <g transform="translate(480, 18)">
          <rect width="150" height="154" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="1.3"/>
          <rect width="150" height="28" rx="8" fill="#ca8a04"/>
          <text x="75" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">DÙNG DẦU MỠ NÓNG</text>
          <text x="75" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#a16207">Rán • Rang • Xào</text>
          <text x="75" y="72" text-anchor="middle" font-size="8.5" fill="#854d0e">• Rán: Dầu ngập, vỏ giòn</text>
          <text x="75" y="90" text-anchor="middle" font-size="8.5" fill="#854d0e">• Xào: Lửa lớn, rau giòn</text>
          <text x="75" y="108" text-anchor="middle" font-size="8.5" fill="#854d0e">• Rang: Ít mỡ, săn chắc</text>
          <rect x="14" y="125" width="122" height="20" rx="4" fill="#fef08a"/>
          <text x="75" y="139" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#713f12">Giòn ngậy • Sắc màu đẹp</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 7: Chế biến thực phẩm không sử dụng nhiệt (Đặc thù Bài 7)
  cheBienKhongNhiet: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-teal-950/40 border border-teal-200 dark:border-teal-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-leaf"></i> Phân loại 3 Phương Pháp Chế Biến Thực Phẩm Không Sử Dụng Nhiệt (Bài 7)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#99f6e4" stroke-width="1.5"/>

        <!-- Cột 1: Trộn dầu giấm -->
        <g transform="translate(25, 20)">
          <rect width="180" height="150" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
          <rect width="180" height="30" rx="10" fill="#16a34a"/>
          <text x="90" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">1. TRỘN DẦU GIẤM</text>
          <text x="90" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">Salad tươi mát</text>
          <text x="90" y="74" text-anchor="middle" font-size="8.5" fill="#166534">• Giảm mùi hăng của rau quả</text>
          <text x="90" y="92" text-anchor="middle" font-size="8.5" fill="#166534">• Ngấm vị chua ngọt béo thanh</text>
          <text x="90" y="110" text-anchor="middle" font-size="8.5" fill="#166534">• Trộn trước ăn 5–10 phút</text>
          <rect x="20" y="122" width="140" height="20" rx="4" fill="#bbf7d0"/>
          <text x="90" y="136" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#14532d">Xà lách, cà chua, dưa chuột</text>
        </g>

        <!-- Cột 2: Trộn hỗn hợp nộm/gỏi -->
        <g transform="translate(235, 20)">
          <rect width="180" height="150" rx="10" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
          <rect width="180" height="30" rx="10" fill="#ea580c"/>
          <text x="90" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">2. TRỘN NỘM / GỎI</text>
          <text x="90" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#c2410c">Hài hoà Thực – Động vật</text>
          <text x="90" y="74" text-anchor="middle" font-size="8.5" fill="#9a3412">• Rau củ thái chỉ giòn dai</text>
          <text x="90" y="92" text-anchor="middle" font-size="8.5" fill="#9a3412">• Động vật luộc chín kĩ</text>
          <text x="90" y="110" text-anchor="middle" font-size="8.5" fill="#9a3412">• Nước mắm chua cay mặn ngọt</text>
          <rect x="20" y="122" width="140" height="20" rx="4" fill="#fed7aa"/>
          <text x="90" y="136" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#7c2d12">Nộm ngó sen, tai heo, hoa chuối</text>
        </g>

        <!-- Cột 3: Lên men Lactic muối chua -->
        <g transform="translate(445, 20)">
          <rect width="180" height="150" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
          <rect width="180" height="30" rx="10" fill="#ca8a04"/>
          <text x="90" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">3. LÊN MEN LACTIC</text>
          <text x="90" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#a16207">Muối chua truyền thống</text>
          <text x="90" y="74" text-anchor="middle" font-size="8.5" fill="#854d0e">• Vi khuẩn Lactic chuyển đường</text>
          <text x="90" y="92" text-anchor="middle" font-size="8.5" fill="#854d0e">• Tạo acid lactic ức chế thối</text>
          <text x="90" y="110" text-anchor="middle" font-size="8.5" fill="#854d0e">• Dưa vàng giòn thơm thanh</text>
          <rect x="20" y="122" width="140" height="20" rx="4" fill="#fef08a"/>
          <text x="90" y="136" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#713f12">Dưa cải muối, cà pháo muối</text>
        </g>
      </svg>
    </div>
  `
};

module.exports = chebienDiagrams;
