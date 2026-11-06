// trongcayanqua9_diagrams.js - 8 Sơ đồ vector SVG độc bản cho 8 bài học Công nghệ 9 Trồng cây ăn quả

const trongCayDiagrams = {
  // SƠ ĐỒ BÀI 1: Cấu tạo thực vật học cây ăn quả (Rễ, Thân cành, Hoa)
  cautaoCay: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-slate-900 dark:to-emerald-950/40 border border-emerald-200 dark:border-emerald-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-tree"></i> Sơ đồ Cấu tạo thực vật học cây ăn quả: Hệ rễ, Phân cấp cành &amp; Cấu trúc hoa (Bài 1)
      </div>
      <svg viewBox="0 0 650 200" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="200" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#bbf7d0" stroke-width="1.5"/>

        <!-- Nhóm 1: Hệ Rễ (Cọc vs Chùm) -->
        <g transform="translate(20, 20)">
          <rect width="180" height="160" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.3"/>
          <rect width="180" height="28" rx="8" fill="#16a34a"/>
          <text x="90" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">HỆ RỄ CÂY ĂN QUẢ</text>
          <text x="90" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">Rễ cọc vs Rễ chùm</text>
          <text x="90" y="70" text-anchor="middle" font-size="8.5" fill="#166534">• Rễ chính: Đâm sâu giữ cây vững</text>
          <text x="90" y="88" text-anchor="middle" font-size="8.5" fill="#166534">• Rễ bên/rễ tơ: Ăn nông 0–50 cm</text>
          <text x="90" y="106" text-anchor="middle" font-size="8.5" fill="#166534">• Hút nước &amp; chất dinh dưỡng</text>
          <rect x="15" y="122" width="150" height="26" rx="4" fill="#dcfce7"/>
          <text x="90" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#14532d">Chiết/giâm: ít có rễ cọc sâu</text>
        </g>

        <!-- Nhóm 2: Thân cành các cấp -->
        <g transform="translate(235, 20)">
          <rect width="180" height="160" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="1.3"/>
          <rect width="180" height="28" rx="8" fill="#ca8a04"/>
          <text x="90" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">PHÂN CẤP THÂN CÀNH</text>
          <text x="90" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#a16207">Thân chính $\rightarrow$ Cấp 1, 2, 3</text>
          <text x="90" y="70" text-anchor="middle" font-size="8.5" fill="#854d0e">• Cành cấp 1: Tạo khung tán chính</text>
          <text x="90" y="88" text-anchor="middle" font-size="8.5" fill="#854d0e">• Cành cấp 2, 3: Cành mang quả</text>
          <text x="90" y="106" text-anchor="middle" font-size="8.5" fill="#854d0e">• Cành vượt: Mọc thẳng, tỉa bỏ</text>
          <rect x="15" y="122" width="150" height="26" rx="4" fill="#fef08a"/>
          <text x="90" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#713f12">Tỉa tạo tán đón nắng, ngừa sâu</text>
        </g>

        <!-- Nhóm 3: Cấu tạo Hoa & Thụ phấn -->
        <g transform="translate(450, 20)">
          <rect width="180" height="160" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.3"/>
          <rect width="180" height="28" rx="8" fill="#ea580c"/>
          <text x="90" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">ĐẶC ĐIỂM HOA &amp; ĐẬU QUẢ</text>
          <text x="90" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#c2410c">Hoa đực • Hoa cái • Lưỡng tính</text>
          <text x="90" y="70" text-anchor="middle" font-size="8.5" fill="#9a3412">• Hoa đực: Nhị phát triển mang phấn</text>
          <text x="90" y="88" text-anchor="middle" font-size="8.5" fill="#9a3412">• Hoa cái: Nhụy bầu noãn tạo quả</text>
          <text x="90" y="106" text-anchor="middle" font-size="8.5" fill="#9a3412">• Lưỡng tính: Tự hoặc chéo thụ phấn</text>
          <rect x="15" y="122" width="150" height="26" rx="4" fill="#fed7aa"/>
          <text x="90" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#7c2d12">Côn trùng &amp; Gió nhẹ hỗ trợ</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 2: 3 Kĩ thuật nhân giống vô tính (Giâm cành, Chiết cành, Ghép mắt nhỏ có gỗ)
  nhanGiong: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-900 dark:to-teal-950/40 border border-teal-200 dark:border-teal-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-code-branch"></i> Quy trình 3 Phương pháp nhân giống vô tính cây ăn quả (Bài 2)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#99f6e4" stroke-width="1.5"/>

        <!-- Cột 1: Giâm cành -->
        <g transform="translate(18, 18)">
          <rect width="185" height="154" rx="8" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.3"/>
          <rect width="185" height="28" rx="8" fill="#0d9488"/>
          <text x="92" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">1. GIÂM CÀNH</text>
          <text x="92" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f766e">Tách cành cắm vào giá thể</text>
          <text x="92" y="70" text-anchor="middle" font-size="8.5" fill="#115e59">• Chọn cành bánh tẻ 2–4 lá</text>
          <text x="92" y="88" text-anchor="middle" font-size="8.5" fill="#115e59">• Nhúng thuốc kích rễ 1–2 cm</text>
          <text x="92" y="106" text-anchor="middle" font-size="8.5" fill="#115e59">• Cắm nghiêng 3–5 cm, tưới ẩm</text>
          <rect x="15" y="122" width="155" height="22" rx="4" fill="#ccfbf1"/>
          <text x="92" y="137" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#134e4a">Hệ số nhân cao • Đơn giản</text>
        </g>

        <!-- Cột 2: Chiết cành -->
        <g transform="translate(232, 18)">
          <rect width="185" height="154" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.3"/>
          <rect width="185" height="28" rx="8" fill="#d97706"/>
          <text x="92" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">2. CHIẾT CÀNH</text>
          <text x="92" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">Kích rễ trên cây mẹ</text>
          <text x="92" y="70" text-anchor="middle" font-size="8.5" fill="#78350f">• Khoanh vỏ cạo sạch 3–5 cm</text>
          <text x="92" y="88" text-anchor="middle" font-size="8.5" fill="#78350f">• Bôi kích rễ, bó bầu đất mùn</text>
          <text x="92" y="106" text-anchor="middle" font-size="8.5" fill="#78350f">• Bọc nylon buộc chặt 2 đầu</text>
          <rect x="15" y="122" width="155" height="22" rx="4" fill="#fef3c7"/>
          <text x="92" y="137" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#78350f">Cây con khoẻ • Sớm cho quả</text>
        </g>

        <!-- Cột 3: Ghép mắt nhỏ có gỗ -->
        <g transform="translate(446, 18)">
          <rect width="185" height="154" rx="8" fill="#fdf4ff" stroke="#9333ea" stroke-width="1.3"/>
          <rect width="185" height="28" rx="8" fill="#9333ea"/>
          <text x="92" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">3. GHÉP MẮT NHỎ CÓ GỖ</text>
          <text x="92" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#7e22ce">Kết hợp mắt ghép &amp; gốc ghép</text>
          <text x="92" y="70" text-anchor="middle" font-size="8.5" fill="#6b21a8">• Cắt mắt ghép 1,5–2 cm có gỗ</text>
          <text x="92" y="88" text-anchor="middle" font-size="8.5" fill="#6b21a8">• Mở miệng gốc ghép cao 15–20 cm</text>
          <text x="92" y="106" text-anchor="middle" font-size="8.5" fill="#6b21a8">• Áp chặt, quấn dây, cắt ngọn</text>
          <rect x="15" y="122" width="155" height="22" rx="4" fill="#fae8ff"/>
          <text x="92" y="137" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#581c87">Bộ rễ khoẻ • Chống chịu tốt</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 3: Kĩ thuật trồng & chăm sóc cây ăn quả có múi (Cam, bưởi, quýt, chanh)
  cayCoMui: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-amber-950/40 border border-amber-200 dark:border-amber-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-lemon"></i> Kĩ thuật Canh tác &amp; Phòng trừ Dịch hại Cây Ăn Quả Có Múi (Bài 3)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#fed7aa" stroke-width="1.5"/>

        <!-- Cột 1: Ngoại cảnh đặc trưng -->
        <g transform="translate(18, 18)">
          <rect width="142" height="154" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#ea580c"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">YÊU CẦU NGOẠI CẢNH</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#c2410c">Thích hợp 23–29 °C</text>
          <text x="71" y="70" text-anchor="middle" font-size="8.5" fill="#9a3412">• Sáng tán xạ 10–15k lux</text>
          <text x="71" y="88" text-anchor="middle" font-size="8.5" fill="#9a3412">• Mưa 900–1200 mm/năm</text>
          <text x="71" y="106" text-anchor="middle" font-size="8.5" fill="#9a3412">• Đất thoát nước, pH 5,5–6,4</text>
          <rect x="12" y="124" width="118" height="20" rx="4" fill="#fed7aa"/>
          <text x="71" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#7c2d12">Rễ bên ăn nông 10–30 cm</text>
        </g>

        <!-- Cột 2: Bón phân & Tưới tiêu -->
        <g transform="translate(172, 18)">
          <rect width="142" height="154" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#16a34a"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">DINH DƯỠNG &amp; NƯỚC</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">4 Đợt bón trong năm</text>
          <text x="71" y="70" text-anchor="middle" font-size="8.5" fill="#166534">• Sau thu hoạch: Hữu cơ + N-K</text>
          <text x="71" y="88" text-anchor="middle" font-size="8.5" fill="#166534">• Đầu hoa: Bón nuôi hoa</text>
          <text x="71" y="106" text-anchor="middle" font-size="8.5" fill="#166534">• Nuôi quả: Bón đạm + kali</text>
          <rect x="12" y="124" width="118" height="20" rx="4" fill="#bbf7d0"/>
          <text x="71" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#14532d">Bón theo hình chiếu tán</text>
        </g>

        <!-- Cột 3: Tỉa cành tạo tán -->
        <g transform="translate(326, 18)">
          <rect width="142" height="154" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#2563eb"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">TẠO HÌNH TÁN CÂY</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">Năm 1, 2, 3 định hình</text>
          <text x="71" y="70" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Năm 1: Bấm ngọn 80 cm</text>
          <text x="71" y="88" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Năm 2: Giữ 3–5 cành cấp 1</text>
          <text x="71" y="106" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Cắt bỏ cành tăm, cành vượt</text>
          <rect x="12" y="124" width="118" height="20" rx="4" fill="#dbeafe"/>
          <text x="71" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#1e40af">Thông thoáng, ít bệnh</text>
        </g>

        <!-- Cột 4: Bệnh nguy hiểm -->
        <g transform="translate(480, 18)">
          <rect width="150" height="154" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.3"/>
          <rect width="150" height="28" rx="8" fill="#dc2626"/>
          <text x="75" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">SÂU BỆNH TRỌNG TÂM</text>
          <text x="75" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#991b1b">Vàng lá Greening &amp; Loét</text>
          <text x="75" y="70" text-anchor="middle" font-size="8.5" fill="#b91c1c">• Greening: Rầy chổng cánh</text>
          <text x="75" y="88" text-anchor="middle" font-size="8.5" fill="#b91c1c">• Sâu vẽ bùa hại lộc non</text>
          <text x="75" y="106" text-anchor="middle" font-size="8.5" fill="#b91c1c">• Ghẻ lồi, loét vi khuẩn</text>
          <rect x="14" y="124" width="122" height="20" rx="4" fill="#fee2e2"/>
          <text x="75" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#991b1b">Trồng giống sạch bệnh</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 4: Kĩ thuật trồng và chăm sóc cây nhãn
  cayNhan: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-slate-900 dark:to-amber-950/40 border border-amber-300 dark:border-amber-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-seedling"></i> Quy trình Kĩ thuật Canh tác &amp; Điều khiển Ra hoa Cây Nhãn (Bài 4)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#fde047" stroke-width="1.5"/>

        <!-- Cột 1: Ngoại cảnh & Sinh học -->
        <g transform="translate(18, 18)">
          <rect width="142" height="154" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#d97706"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">ĐẶC ĐIỂM SINH HỌC</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">21–27 °C • Ưa sáng</text>
          <text x="71" y="70" text-anchor="middle" font-size="8.5" fill="#78350f">• Lá kép lông chim so le</text>
          <text x="71" y="88" text-anchor="middle" font-size="8.5" fill="#78350f">• Hoa thành chùm đầu cành</text>
          <text x="71" y="106" text-anchor="middle" font-size="8.5" fill="#78350f">• Rễ tơ dưới hình chiếu tán</text>
          <rect x="12" y="124" width="118" height="20" rx="4" fill="#fef3c7"/>
          <text x="71" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#78350f">Cần lạnh để hoá mầm</text>
        </g>

        <!-- Cột 2: Điều khiển ra hoa -->
        <g transform="translate(172, 18)">
          <rect width="142" height="154" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#2563eb"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">ĐIỀU KHIỂN RA HOA</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">Khoanh vỏ tháng 12</text>
          <text x="71" y="70" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Vết khoanh 0,3–0,5 cm</text>
          <text x="71" y="88" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Hạn chế nước tháng 11–12</text>
          <text x="71" y="106" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Có thể dùng KClO3 (SGK)</text>
          <rect x="12" y="124" width="118" height="20" rx="4" fill="#dbeafe"/>
          <text x="71" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#1e40af">Tích tụ dưỡng chất ngọn</text>
        </g>

        <!-- Cột 3: Trồng & Bón phân -->
        <g transform="translate(326, 18)">
          <rect width="142" height="154" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#16a34a"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">QUY TRÌNH CHĂM SÓC</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">Khoảng cách 6–7 m</text>
          <text x="71" y="70" text-anchor="middle" font-size="8.5" fill="#166534">• Mật độ ~ 280 cây/ha</text>
          <text x="71" y="88" text-anchor="middle" font-size="8.5" fill="#166534">• Bón rãnh sâu 15–20 cm</text>
          <text x="71" y="106" text-anchor="middle" font-size="8.5" fill="#166534">• Cắt chồi cấp 1 ở 0,8–1 m</text>
          <rect x="12" y="124" width="118" height="20" rx="4" fill="#bbf7d0"/>
          <text x="71" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#14532d">Tưới giữ ẩm sau bón</text>
        </g>

        <!-- Cột 4: Bọ xít & Chổi rồng -->
        <g transform="translate(480, 18)">
          <rect width="150" height="154" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.3"/>
          <rect width="150" height="28" rx="8" fill="#dc2626"/>
          <text x="75" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">PHÒNG TRỪ DỊCH HẠI</text>
          <text x="75" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#991b1b">Bọ xít nâu &amp; Chổi rồng</text>
          <text x="75" y="70" text-anchor="middle" font-size="8.5" fill="#b91c1c">• Bọ xít chích rụng hoa/quả</text>
          <text x="75" y="88" text-anchor="middle" font-size="8.5" fill="#b91c1c">• Bệnh chổi rồng: ngọn dị hình</text>
          <text x="75" y="106" text-anchor="middle" font-size="8.5" fill="#b91c1c">• Sâu đục quả &amp; đục thân</text>
          <rect x="14" y="124" width="122" height="20" rx="4" fill="#fee2e2"/>
          <text x="75" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#991b1b">Quét vôi, cắt chồi bệnh</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 5: Kĩ thuật trồng và chăm sóc cây xoài
  cayXoai: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-slate-900 dark:to-yellow-950/40 border border-yellow-300 dark:border-yellow-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-yellow-900 dark:text-yellow-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-sun"></i> Kĩ thuật Canh tác &amp; Điều hòa Sinh trưởng Cây Xoài (Bài 5)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#fde047" stroke-width="1.5"/>

        <!-- Cột 1: Ngoại cảnh xoài -->
        <g transform="translate(18, 18)">
          <rect width="142" height="154" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#ca8a04"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">ĐẶC ĐIỂM XOÀI</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#a16207">24–27 °C • Chịu nóng</text>
          <text x="71" y="70" text-anchor="middle" font-size="8.5" fill="#854d0e">• Tán rộng, rễ cọc sâu</text>
          <text x="71" y="88" text-anchor="middle" font-size="8.5" fill="#854d0e">• Ưa ánh sáng trực tiếp</text>
          <text x="71" y="106" text-anchor="middle" font-size="8.5" fill="#854d0e">• Tránh gió bão gãy rụng</text>
          <rect x="12" y="124" width="118" height="20" rx="4" fill="#fef08a"/>
          <text x="71" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#713f12">Lên liếp vùng trũng</text>
        </g>

        <!-- Cột 2: Bấm ngọn tạo tán -->
        <g transform="translate(172, 18)">
          <rect width="142" height="154" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#2563eb"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">TẠO TÁN THẤP</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">Bấm ngọn 1–1,2 m</text>
          <text x="71" y="70" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Giữ thân chính 0,6–0,8 m</text>
          <text x="71" y="88" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Nuôi 2–3 cành cấp 1 đều</text>
          <text x="71" y="106" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Cắt tỉa sau thu hoạch</text>
          <rect x="12" y="124" width="118" height="20" rx="4" fill="#dbeafe"/>
          <text x="71" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#1e40af">Thu hái tiện lợi</text>
        </g>

        <!-- Cột 3: Xử lí ra hoa -->
        <g transform="translate(326, 18)">
          <rect width="142" height="154" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#16a34a"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">ĐIỀU HÒA RA HOA</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">Paclobutrazol + KNO3</text>
          <text x="71" y="70" text-anchor="middle" font-size="8.5" fill="#166534">• Sau thu hoạch 45 ngày</text>
          <text x="71" y="88" text-anchor="middle" font-size="8.5" fill="#166534">• Tưới Paclo quanh tán</text>
          <text x="71" y="106" text-anchor="middle" font-size="8.5" fill="#166534">• Phun KNO3 kích bung hoa</text>
          <rect x="12" y="124" width="118" height="20" rx="4" fill="#bbf7d0"/>
          <text x="71" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#14532d">Tăng tỉ lệ đậu quả</text>
        </g>

        <!-- Cột 4: Bệnh thán thư & ruồi -->
        <g transform="translate(480, 18)">
          <rect width="150" height="154" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.3"/>
          <rect width="150" height="28" rx="8" fill="#dc2626"/>
          <text x="75" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">PHÒNG TRỪ DỊCH HẠI</text>
          <text x="75" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#991b1b">Thán thư &amp; Ruồi đục</text>
          <text x="75" y="70" text-anchor="middle" font-size="8.5" fill="#b91c1c">• Thán thư đốm đen lá/hoa</text>
          <text x="75" y="88" text-anchor="middle" font-size="8.5" fill="#b91c1c">• Ruồi đục làm thối quả</text>
          <text x="75" y="106" text-anchor="middle" font-size="8.5" fill="#b91c1c">• Bọ trĩ làm sần vỏ quả</text>
          <rect x="14" y="124" width="122" height="20" rx="4" fill="#fee2e2"/>
          <text x="75" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#991b1b">Bao bọc quả &amp; Bẫy ruồi</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 6: Kĩ thuật trồng và chăm sóc cây sầu riêng
  caySauRieng: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-lime-50 to-emerald-50 dark:from-slate-900 dark:to-lime-950/40 border border-lime-300 dark:border-lime-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-lime-900 dark:text-lime-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-cubes-stacked"></i> Kĩ thuật Tán Tháp Nhiều Tầng &amp; Chống Thối Rễ Cây Sầu Riêng (Bài 6)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#bef264" stroke-width="1.5"/>

        <!-- Cột 1: Ngoại cảnh khắt khe -->
        <g transform="translate(18, 18)">
          <rect width="142" height="154" rx="8" fill="#f7fee7" stroke="#65a30d" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#65a30d"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">NGOẠI CẢNH SẦU RIÊNG</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#4d7c0f">24–30 °C • Ẩm 75–80%</text>
          <text x="71" y="70" text-anchor="middle" font-size="8.5" fill="#3f6212">• Cần nhiều nước tưới</text>
          <text x="71" y="88" text-anchor="middle" font-size="8.5" fill="#3f6212">• Đất bắt buộc thoát nước</text>
          <text x="71" y="106" text-anchor="middle" font-size="8.5" fill="#3f6212">• Ngập úng gây thối rễ chết</text>
          <rect x="12" y="124" width="118" height="20" rx="4" fill="#ecfccb"/>
          <text x="71" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#365314">Lên liếp, đắp mô cao</text>
        </g>

        <!-- Cột 2: Tạo tán tháp nhiều tầng -->
        <g transform="translate(172, 18)">
          <rect width="142" height="154" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#16a34a"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">TÁN THÁP NHIỀU TẦNG</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">Tầng đầu cách đất ~ 1m</text>
          <text x="71" y="70" text-anchor="middle" font-size="8.5" fill="#166534">• Mỗi tầng 3–4 cành cấp 1</text>
          <text x="71" y="88" text-anchor="middle" font-size="8.5" fill="#166534">• Các tầng cách 0,4–0,6 m</text>
          <text x="71" y="106" text-anchor="middle" font-size="8.5" fill="#166534">• Cành mọc ngang đón sáng</text>
          <rect x="12" y="124" width="118" height="20" rx="4" fill="#bbf7d0"/>
          <text x="71" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#14532d">Khung tán vững chịu quả</text>
        </g>

        <!-- Cột 3: Ra hoa & Thụ phấn -->
        <g transform="translate(326, 18)">
          <rect width="142" height="154" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#2563eb"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">HOA NỞ &amp; THỤ PHẤN</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">Hoa nở ban đêm</text>
          <text x="71" y="70" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Mọc trên thân, cành lớn</text>
          <text x="71" y="88" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Tạo khô hạn kích mầm hoa</text>
          <text x="71" y="106" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Thụ phấn bổ sung ban đêm</text>
          <rect x="12" y="124" width="118" height="20" rx="4" fill="#dbeafe"/>
          <text x="71" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#1e40af">Quả tròn đều, đủ hộc</text>
        </g>

        <!-- Cột 4: Xì mủ Phytophthora -->
        <g transform="translate(480, 18)">
          <rect width="150" height="154" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.3"/>
          <rect width="150" height="28" rx="8" fill="#dc2626"/>
          <text x="75" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">BỆNH XÌ MỦ NGUY HIỂM</text>
          <text x="75" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#991b1b">Nấm Phytophthora</text>
          <text x="75" y="70" text-anchor="middle" font-size="8.5" fill="#b91c1c">• Thối rễ, xì mủ thân cành</text>
          <text x="75" y="88" text-anchor="middle" font-size="8.5" fill="#b91c1c">• Thối quả khi mưa nhiều</text>
          <text x="75" y="106" text-anchor="middle" font-size="8.5" fill="#b91c1c">• Sâu đục quả &amp; đục thân</text>
          <rect x="14" y="124" width="122" height="20" rx="4" fill="#fee2e2"/>
          <text x="75" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#991b1b">Rãnh thoát nước, quét thuốc</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 7: Kĩ thuật trồng và chăm sóc cây chuối
  cayChuoi: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-emerald-950/40 border border-emerald-300 dark:border-emerald-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-leaf"></i> Kĩ thuật Canh tác &amp; Phòng chống Đổ ngã Vườn Chuối (Bài 7)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#6ee7b7" stroke-width="1.5"/>

        <!-- Cột 1: Cấu tạo cây chuối -->
        <g transform="translate(18, 18)">
          <rect width="142" height="154" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#16a34a"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">ĐẶC ĐIỂM HÌNH THÁI</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">Thân củ &amp; Thân giả</text>
          <text x="71" y="70" text-anchor="middle" font-size="8.5" fill="#166534">• Rễ chùm phát triển nông</text>
          <text x="71" y="88" text-anchor="middle" font-size="8.5" fill="#166534">• Thân thật là củ ngầm</text>
          <text x="71" y="106" text-anchor="middle" font-size="8.5" fill="#166534">• Thân giả do bẹ lá xếp lại</text>
          <rect x="12" y="124" width="118" height="20" rx="4" fill="#bbf7d0"/>
          <text x="71" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#14532d">Dễ bị gió quật đổ</text>
        </g>

        <!-- Cột 2: Mật độ & Hố trồng -->
        <g transform="translate(172, 18)">
          <rect width="142" height="154" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#ca8a04"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">MẬT ĐỘ &amp; TRỒNG</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#a16207">2.000–2.500 cây/ha</text>
          <text x="71" y="70" text-anchor="middle" font-size="8.5" fill="#854d0e">• Tiêu: 2 × 2–2,5 m</text>
          <text x="71" y="88" text-anchor="middle" font-size="8.5" fill="#854d0e">• Tây: 2 × 2–2,8 m</text>
          <text x="71" y="106" text-anchor="middle" font-size="8.5" fill="#854d0e">• Hố 40 × 40 × 40 cm</text>
          <rect x="12" y="124" width="118" height="20" rx="4" fill="#fef08a"/>
          <text x="71" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#713f12">Lấp đất cao hơn bầu 5cm</text>
        </g>

        <!-- Cột 3: Chăm sóc & Chống đổ -->
        <g transform="translate(326, 18)">
          <rect width="142" height="154" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#2563eb"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">CHĂM BUỒNG &amp; CỌC</text>
          <text x="71" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">Chống đổ buồng chuối</text>
          <text x="71" y="70" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• 1–2 cọc chống cuống buồng</text>
          <text x="71" y="88" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Cắt lá già &lt; 50% quang hợp</text>
          <text x="71" y="106" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Bao buồng quả bằng nilon</text>
          <rect x="12" y="124" width="118" height="20" rx="4" fill="#dbeafe"/>
          <text x="71" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#1e40af">Nuôi quả lớn đồng đều</text>
        </g>

        <!-- Cột 4: Bệnh Sigatoka & Héo vàng -->
        <g transform="translate(480, 18)">
          <rect width="150" height="154" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.3"/>
          <rect width="150" height="28" rx="8" fill="#dc2626"/>
          <text x="75" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">BỆNH HẠI NGUY HIỂM</text>
          <text x="75" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="#991b1b">Sigatoka &amp; Chùn đọt</text>
          <text x="75" y="70" text-anchor="middle" font-size="8.5" fill="#b91c1c">• Đốm lá Sigatoka nâu</text>
          <text x="75" y="88" text-anchor="middle" font-size="8.5" fill="#b91c1c">• Chùn đọt virus BBTV</text>
          <text x="75" y="106" text-anchor="middle" font-size="8.5" fill="#b91c1c">• Héo vàng Fusarium</text>
          <rect x="14" y="124" width="122" height="20" rx="4" fill="#fee2e2"/>
          <text x="75" y="138" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#991b1b">Tiêu huỷ cây bệnh nặng</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 8: Dự án trồng cây ăn quả & Công thức kinh tế (Bài 8)
  duAnKinhTe: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-950/40 border border-emerald-300 dark:border-emerald-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-calculator"></i> Sơ đồ 5 Bước Dự Án &amp; Công Thức Tính Toán Hiệu Quả Kinh Tế (Bài 8)
      </div>
      <svg viewBox="0 0 650 200" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="200" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#86efac" stroke-width="1.5"/>

        <!-- Hàng 1: 5 bước tiến trình dự án -->
        <g transform="translate(15, 15)">
          <rect width="115" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.3"/>
          <text x="57" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">Bước 1: Khảo sát</text>
          <text x="57" y="42" text-anchor="middle" font-size="8" fill="#166534">Chọn giống &amp; giá cả</text>
        </g>
        <line x1="130" y1="45" x2="145" y2="45" stroke="#16a34a" stroke-width="2"/>

        <g transform="translate(145, 15)">
          <rect width="115" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.3"/>
          <text x="57" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">Bước 2: Chọn cây</text>
          <text x="57" y="42" text-anchor="middle" font-size="8" fill="#166534">Dụng cụ &amp; nguồn lực</text>
        </g>
        <line x1="260" y1="45" x2="275" y2="45" stroke="#16a34a" stroke-width="2"/>

        <g transform="translate(275, 15)">
          <rect width="115" height="60" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.3"/>
          <text x="57" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">Bước 3: Dự tính</text>
          <text x="57" y="42" text-anchor="middle" font-size="8" fill="#78350f">Chi phí &amp; Nguồn thu</text>
        </g>
        <line x1="390" y1="45" x2="405" y2="45" stroke="#d97706" stroke-width="2"/>

        <g transform="translate(405, 15)">
          <rect width="115" height="60" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.3"/>
          <text x="57" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">Bước 4: Tính lãi</text>
          <text x="57" y="42" text-anchor="middle" font-size="8" fill="#1d4ed8">Áp dụng công thức</text>
        </g>
        <line x1="520" y1="45" x2="535" y2="45" stroke="#2563eb" stroke-width="2"/>

        <g transform="translate(535, 15)">
          <rect width="100" height="60" rx="8" fill="#fdf4ff" stroke="#9333ea" stroke-width="1.3"/>
          <text x="50" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#7e22ce">Bước 5: Trồng</text>
          <text x="50" y="42" text-anchor="middle" font-size="8" fill="#6b21a8">Thực hành &amp; chăm</text>
        </g>

        <!-- Hàng 2: Công thức tính lãi thuần kinh tế -->
        <!-- Công thức 1: Cây hằng năm -->
        <g transform="translate(30, 95)">
          <rect width="280" height="85" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="1.3"/>
          <text x="140" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">1. CÂY ĂN QUẢ HẰNG NĂM</text>
          <text x="140" y="46" text-anchor="middle" font-size="13" font-weight="black" fill="#059669">C₁ = B₁ − A₁</text>
          <text x="140" y="66" text-anchor="middle" font-size="8.5" fill="#475569">A₁: Tổng chi phí • B₁: Tổng nguồn thu • C₁: Lãi thuần</text>
        </g>

        <!-- Công thức 2: Cây lâu năm (3 năm đầu kinh doanh) -->
        <g transform="translate(340, 95)">
          <rect width="280" height="85" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="1.3"/>
          <text x="140" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">2. CÂY ĂN QUẢ LÂU NĂM (3 NĂM ĐẦU KD)</text>
          <text x="140" y="46" text-anchor="middle" font-size="13" font-weight="black" fill="#2563eb">D = C₂ − (A₂ + B₂)</text>
          <text x="140" y="66" text-anchor="middle" font-size="8.5" fill="#475569">A₂: Phí KTCB • B₂: Phí 3 năm KD • C₂: Thu 3 năm KD</text>
        </g>
      </svg>
    </div>
  `
};

module.exports = trongCayDiagrams;
