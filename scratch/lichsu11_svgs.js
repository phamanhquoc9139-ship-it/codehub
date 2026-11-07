// 13 Sơ đồ tư duy trực quan SVG cho 13 bài Lịch sử 11
// Chuẩn XML 100%, tuyệt đối không dùng thẻ HTML lồng trong SVG

const lichsu11Svgs = {
  1: {
    note: "Sơ đồ 4 Tiền đề bùng nổ Cách mạng tư sản: Kinh tế, Chính trị, Xã hội, Tư tưởng hướng tới xác lập Nhà nước dân chủ tư sản.",
    svg: `<svg viewBox="0 0 800 200" class="w-full max-w-3xl h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow-ls1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706" />
        </marker>
      </defs>
      <!-- 4 Tiền đề -->
      <rect x="20" y="20" width="160" height="70" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" />
      <text x="100" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">1. TIỀN ĐỀ KINH TẾ</text>
      <text x="100" y="65" text-anchor="middle" font-size="10" fill="#92400e">Kinh tế TBCN lớn mạnh</text>
      <text x="100" y="78" text-anchor="middle" font-size="9" fill="#78350f">Công trường, than, sắt</text>

      <rect x="200" y="20" width="160" height="70" rx="12" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5" />
      <text x="280" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#c2410c">2. TIỀN ĐỀ CHÍNH TRỊ</text>
      <text x="280" y="65" text-anchor="middle" font-size="10" fill="#9a3412">Quân chủ chuyên chế</text>
      <text x="280" y="78" text-anchor="middle" font-size="9" fill="#7c2d12">Ách thống trị thực dân</text>

      <rect x="380" y="20" width="160" height="70" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" />
      <text x="460" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">3. TIỀN ĐỀ XÃ HỘI</text>
      <text x="460" y="65" text-anchor="middle" font-size="10" fill="#991b1b">Mâu thuẫn giai cấp sâu sắc</text>
      <text x="460" y="78" text-anchor="middle" font-size="9" fill="#7f1d1d">Tư sản, nông dân, bình dân</text>

      <rect x="560" y="20" width="220" height="70" rx="12" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5" />
      <text x="670" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#4338ca">4. TIỀN ĐỀ TƯ TƯỞNG</text>
      <text x="670" y="65" text-anchor="middle" font-size="10" fill="#3730a3">Triết học Khai sáng Pháp</text>
      <text x="670" y="78" text-anchor="middle" font-size="9" fill="#312e81">Montesquieu • Voltaire • Rousseau</text>

      <!-- Đường kết nối xuống trung tâm -->
      <path d="M 100 90 L 100 125 L 300 125" fill="none" stroke="#d97706" stroke-width="1.5" marker-end="url(#arrow-ls1)" />
      <path d="M 280 90 L 280 120" fill="none" stroke="#d97706" stroke-width="1.5" marker-end="url(#arrow-ls1)" />
      <path d="M 460 90 L 460 120" fill="none" stroke="#d97706" stroke-width="1.5" marker-end="url(#arrow-ls1)" />
      <path d="M 670 90 L 670 125 L 500 125" fill="none" stroke="#d97706" stroke-width="1.5" marker-end="url(#arrow-ls1)" />

      <!-- Khối Trung tâm: Cách mạng tư sản -->
      <rect x="230" y="125" width="340" height="60" rx="14" fill="#d97706" stroke="#b45309" stroke-width="2" />
      <text x="400" y="150" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">CÁCH MẠNG TƯ SẢN BÙNG NỔ &amp; THẮNG LỢI</text>
      <text x="400" y="170" text-anchor="middle" font-size="10.5" fill="#fef3c7">Nhiệm vụ Dân tộc (Độc lập/Thống nhất) + Dân chủ (Xóa bỏ chuyên chế)</text>
    </svg>`
  },

  2: {
    note: "Sơ đồ Chuyển biến của CNTB: Tự do cạnh tranh -> Độc quyền (Đế quốc chủ nghĩa) -> Chủ nghĩa tư bản hiện đại (Tiềm năng & Thách thức).",
    svg: `<svg viewBox="0 0 800 200" class="w-full max-w-3xl h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow-ls2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#b45309" />
        </marker>
      </defs>
      <!-- Giai đoạn 1 -->
      <rect x="20" y="30" width="220" height="140" rx="14" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" />
      <text x="130" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">1. TỰ DO CẠNH TRANH</text>
      <text x="130" y="80" text-anchor="middle" font-size="10" fill="#92400e">• Cách mạng công nghiệp (1760)</text>
      <text x="130" y="100" text-anchor="middle" font-size="10" fill="#92400e">• Máy móc thay thế thủ công</text>
      <text x="130" y="120" text-anchor="middle" font-size="10" fill="#92400e">• Xác lập ở châu Âu &amp; Bắc Mỹ</text>
      <text x="130" y="145" text-anchor="middle" font-size="9" font-weight="bold" fill="#78350f">Mốc hoàn thành: Đầu thập niên 1870</text>

      <path d="M 240 100 L 285 100" fill="none" stroke="#b45309" stroke-width="2" marker-end="url(#arrow-ls2)" />

      <!-- Giai đoạn 2 -->
      <rect x="290" y="30" width="230" height="140" rx="14" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5" />
      <text x="405" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="#c2410c">2. GIAI ĐOẠN ĐỘC QUYỀN</text>
      <text x="405" y="80" text-anchor="middle" font-size="10" fill="#9a3412">• Cuối TK XIX – đầu TK XX</text>
      <text x="405" y="100" text-anchor="middle" font-size="10" fill="#9a3412">• Xâm lược thuộc địa vũ bão</text>
      <text x="405" y="120" text-anchor="middle" font-size="10" fill="#9a3412">• Các-ten, Xanh-đi-ca, Tơ-rớt</text>
      <text x="405" y="145" text-anchor="middle" font-size="9" font-weight="bold" fill="#7c2d12">Anh: Đế quốc Mặt Trời không lặn</text>

      <path d="M 520 100 L 565 100" fill="none" stroke="#b45309" stroke-width="2" marker-end="url(#arrow-ls2)" />

      <!-- Giai đoạn 3 -->
      <rect x="570" y="30" width="210" height="140" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
      <text x="675" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">3. CNTB HIỆN ĐẠI</text>
      <text x="675" y="80" text-anchor="middle" font-size="10" fill="#065f46">• Sau Chiến tranh thế giới II</text>
      <text x="675" y="100" text-anchor="middle" font-size="10" fill="#065f46">• Độc quyền tư nhân + Nhà nước</text>
      <text x="675" y="120" text-anchor="middle" font-size="10" fill="#065f46">• Nhóm G7 &amp; Công nghệ cao</text>
      <text x="675" y="145" text-anchor="middle" font-size="9" font-weight="bold" fill="#064e3b">Bất bình đẳng: Occupy Wall Street</text>
    </svg>`
  },

  3: {
    note: "Sơ đồ Tiến trình thành lập Liên bang Xô viết: Từ Cách mạng tháng 10/1917 -> Hiệp ước 30-12-1922 với 4 nước sáng lập -> Hiến pháp 1924.",
    svg: `<svg viewBox="0 0 800 200" class="w-full max-w-3xl h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow-ls3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#b91c1c" />
        </marker>
      </defs>
      <!-- Bước 1 -->
      <rect x="20" y="40" width="220" height="120" rx="14" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" />
      <text x="130" y="68" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">CÁCH MẠNG THÁNG MƯỜI</text>
      <text x="130" y="90" text-anchor="middle" font-size="10" fill="#991b1b">• 25-10-1917 (7-11-1917)</text>
      <text x="130" y="110" text-anchor="middle" font-size="10" fill="#991b1b">• Lê-nin tuyên bố lập CQ Xô viết</text>
      <text x="130" y="130" text-anchor="middle" font-size="9" fill="#7f1d1d">• Chống thù trong giặc ngoài (1918-1921)</text>

      <path d="M 240 100 L 275 100" fill="none" stroke="#b91c1c" stroke-width="2" marker-end="url(#arrow-ls3)" />

      <!-- Bước 2: Đại hội thành lập -->
      <rect x="280" y="25" width="260" height="150" rx="14" fill="#fef2f2" stroke="#dc2626" stroke-width="2" />
      <text x="410" y="55" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">THÀNH LẬP LIÊN XÔ (USSR)</text>
      <text x="410" y="75" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">Ngày 30-12-1922 tại Mát-xcơ-va</text>
      <line x1="300" y1="85" x2="520" y2="85" stroke="#fca5a5" stroke-width="1" />
      <text x="410" y="103" text-anchor="middle" font-size="10" fill="#7f1d1d">4 Nước Cộng hòa Sáng lập:</text>
      <text x="410" y="120" text-anchor="middle" font-size="9.5" fill="#991b1b">1. Nga • 2. U-crai-na</text>
      <text x="410" y="136" text-anchor="middle" font-size="9.5" fill="#991b1b">3. Bê-lô-rút-xi-a • 4. Ngoại Cáp-ca-dơ</text>
      <text x="410" y="155" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">Nguyên tắc: Bình đẳng &amp; Tự nguyện</text>

      <path d="M 540 100 L 575 100" fill="none" stroke="#b91c1c" stroke-width="2" marker-end="url(#arrow-ls3)" />

      <!-- Bước 3 -->
      <rect x="580" y="40" width="200" height="120" rx="14" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" />
      <text x="680" y="68" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">HIẾN PHÁP ĐẦU TIÊN</text>
      <text x="680" y="90" text-anchor="middle" font-size="10" fill="#991b1b">• Thông qua: Tháng 1-1924</text>
      <text x="680" y="110" text-anchor="middle" font-size="10" fill="#991b1b">• Hoàn tất tổ chức nhà nước</text>
      <text x="680" y="130" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#7f1d1d">• Đến 1940: 15 nước cộng hòa</text>
    </svg>`
  },

  4: {
    note: "Sơ đồ Phát triển của CNXH: Mở rộng liên lục địa sau 1945 -> Khủng hoảng sụp đổ 1989-1991 -> Đổi mới & Cải cách mở cửa rực rỡ.",
    svg: `<svg viewBox="0 0 800 210" class="w-full max-w-3xl h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Cột 1: Mở rộng sau 1945 -->
      <rect x="20" y="25" width="230" height="160" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" />
      <text x="135" y="52" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">MỞ RỘNG LIÊN LỤC ĐỊA</text>
      <text x="135" y="75" text-anchor="middle" font-size="10" fill="#1e40af">• Đông Âu (1944–1949): 8 nước</text>
      <text x="135" y="95" text-anchor="middle" font-size="10" fill="#1e40af">• Trung Quốc: 1-10-1949</text>
      <text x="135" y="115" text-anchor="middle" font-size="10" fill="#1e40af">• Việt Nam (1954 - 1975)</text>
      <text x="135" y="135" text-anchor="middle" font-size="10" fill="#1e40af">• Lào: 12-1975</text>
      <text x="135" y="155" text-anchor="middle" font-size="10" fill="#1e40af">• Cu-ba: 1959 / 1961</text>

      <!-- Cột 2: Khủng hoảng -->
      <rect x="275" y="25" width="240" height="160" rx="14" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5" />
      <text x="395" y="52" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">KHỦNG HOẢNG &amp; SỤP ĐỔ</text>
      <text x="395" y="75" text-anchor="middle" font-size="10" fill="#991b1b">• Thập niên 1980: Trì trệ kinh tế</text>
      <text x="395" y="95" text-anchor="middle" font-size="10" fill="#991b1b">• 1989: Bức tường Béc-lin sụp</text>
      <text x="395" y="115" text-anchor="middle" font-size="10" fill="#991b1b">• Đông Âu tan rã (1989–1990)</text>
      <text x="395" y="135" text-anchor="middle" font-size="10" font-weight="bold" fill="#7f1d1d">• 12-1991: Liên Xô giải thể</text>
      <text x="395" y="155" text-anchor="middle" font-size="9" fill="#991b1b">Nguyên nhân: Giáo điều, cải tổ sai lầm</text>

      <!-- Cột 3: Đổi mới và Phát triển -->
      <rect x="540" y="25" width="240" height="160" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
      <text x="660" y="52" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">KIÊN ĐỊNH &amp; ĐỔI MỚI</text>
      <text x="660" y="75" text-anchor="middle" font-size="10" fill="#065f46">• Trung Quốc (12-1978): Cải cách mở cửa</text>
      <text x="660" y="95" text-anchor="middle" font-size="10" fill="#065f46">• GDP TQ vượt lên thứ 2 thế giới</text>
      <text x="660" y="115" text-anchor="middle" font-size="10" fill="#065f46">• Việt Nam (1986): Đổi mới toàn diện</text>
      <text x="660" y="135" text-anchor="middle" font-size="10" fill="#065f46">• Lào (1986) &amp; Cu-ba cập nhật mô hình</text>
      <text x="660" y="155" text-anchor="middle" font-size="9" font-weight="bold" fill="#064e3b">Chứng minh sức sống của CNXH</text>
    </svg>`
  },

  5: {
    note: "Sơ đồ Quá trình Thực dân xâm lược Đông Nam Á & Chính sách cai trị Chia để trị cùng cải cách duy nhất của Xiêm.",
    svg: `<svg viewBox="0 0 800 200" class="w-full max-w-3xl h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Nhánh Hải đảo -->
      <rect x="20" y="25" width="230" height="150" rx="14" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" />
      <text x="135" y="52" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">ĐÔNG NAM Á HẢI ĐẢO</text>
      <text x="135" y="75" text-anchor="middle" font-size="10" fill="#92400e">• 1511: Bồ Đào Nha chiếm Ma-lắc-ca</text>
      <text x="135" y="95" text-anchor="middle" font-size="10" fill="#92400e">• Giữa TK XVI: TBN chiếm Phi-lip-pin</text>
      <text x="135" y="115" text-anchor="middle" font-size="10" fill="#92400e">• Cuối TK XVI: Hà Lan chiếm In-đô</text>
      <text x="135" y="135" text-anchor="middle" font-size="10" fill="#92400e">• Đầu TK XX: Anh chiếm Mã Lai, Bru-nây</text>
      <text x="135" y="155" text-anchor="middle" font-size="9" font-weight="bold" fill="#78350f">Kéo dài gần 4 thế kỉ</text>

      <!-- Nhánh Lục địa -->
      <rect x="280" y="25" width="240" height="150" rx="14" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5" />
      <text x="400" y="52" text-anchor="middle" font-size="12" font-weight="bold" fill="#c2410c">ĐÔNG NAM Á LỤC ĐỊA</text>
      <text x="400" y="75" text-anchor="middle" font-size="10" fill="#9a3412">• Xâm lược muộn hơn: Từ thế kỉ XIX</text>
      <text x="400" y="95" text-anchor="middle" font-size="10" fill="#9a3412">• Anh chiếm Miến Điện (1824–1885)</text>
      <text x="400" y="115" text-anchor="middle" font-size="10" fill="#9a3412">• Pháp chiếm 3 nước Đông Dương</text>
      <text x="400" y="135" text-anchor="middle" font-size="10" fill="#9a3412">  (Việt Nam - Lào - Cam-pu-chia)</text>
      <text x="400" y="155" text-anchor="middle" font-size="9" font-weight="bold" fill="#7c2d12">Chính sách: 'Chia để trị' &amp; ngu dân</text>

      <!-- Nhánh Ngoại lệ Xiêm -->
      <rect x="550" y="25" width="230" height="150" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
      <text x="665" y="52" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">XIÊM (NGOẠI LỆ DUY NHẤT)</text>
      <text x="665" y="75" text-anchor="middle" font-size="10" fill="#065f46">• Ra-ma IV (1851): Mở cửa giao thương</text>
      <text x="665" y="95" text-anchor="middle" font-size="10" fill="#065f46">• Ra-ma V (1868): Đại cải cách toàn diện</text>
      <text x="665" y="115" text-anchor="middle" font-size="10" fill="#065f46">• Kinh tế, đường sắt, nội các phương Tây</text>
      <text x="665" y="135" text-anchor="middle" font-size="10" fill="#065f46">• Ngoại giao khôn khéo làm vùng đệm</text>
      <text x="665" y="155" text-anchor="middle" font-size="9" font-weight="bold" fill="#064e3b">Giữ vững nền độc lập</text>
    </svg>`
  },

  6: {
    note: "Sơ đồ 3 Giai đoạn giành độc lập dân tộc ở Đông Nam Á & Tiến trình Tái thiết, Công nghiệp hóa cùng sự ra đời của ASEAN (1967).",
    svg: `<svg viewBox="0 0 800 200" class="w-full max-w-3xl h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Giai đoạn 1 -->
      <rect x="20" y="30" width="220" height="140" rx="14" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" />
      <text x="130" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">GIAI ĐOẠN 1 (Cuối XIX–1920)</text>
      <text x="130" y="80" text-anchor="middle" font-size="10" fill="#92400e">• Phong trào yêu nước phong kiến suy thoái</text>
      <text x="130" y="100" text-anchor="middle" font-size="10" fill="#92400e">• Chuyển biến sang xu hướng tư sản</text>
      <text x="130" y="120" text-anchor="middle" font-size="10" fill="#92400e">• Cách mạng Phi-lip-pin (1896–1898)</text>
      <text x="130" y="145" text-anchor="middle" font-size="9" font-weight="bold" fill="#78350f">Khai sinh nền cộng hòa đầu tiên</text>

      <!-- Giai đoạn 2 -->
      <rect x="270" y="30" width="230" height="140" rx="14" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" />
      <text x="385" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">GIAI ĐOẠN 2 (1920–1945)</text>
      <text x="385" y="80" text-anchor="middle" font-size="10" fill="#991b1b">• Giai cấp vô sản bước lên vũ đài</text>
      <text x="385" y="100" text-anchor="middle" font-size="10" fill="#991b1b">• Các Đảng Cộng sản ra đời</text>
      <text x="385" y="120" text-anchor="middle" font-size="10" fill="#991b1b">• In-đô (1920), Việt Nam (1930)...</text>
      <text x="385" y="145" text-anchor="middle" font-size="9" font-weight="bold" fill="#7f1d1d">Năm 1945: In-đô, VN, Lào độc lập</text>

      <!-- Giai đoạn 3 -->
      <rect x="530" y="30" width="250" height="140" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
      <text x="655" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">GIAI ĐOẠN 3 (1945–1975 / 1984)</text>
      <text x="655" y="80" text-anchor="middle" font-size="10" fill="#065f46">• Hoàn thành giành độc lập dân tộc</text>
      <text x="655" y="100" text-anchor="middle" font-size="10" fill="#065f46">• Thành lập ASEAN (8-8-1967 tại Băng Cốc)</text>
      <text x="655" y="120" text-anchor="middle" font-size="10" fill="#065f46">• Chuyển đổi chiến lược kinh tế:</text>
      <text x="655" y="145" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#064e3b">Thay thế nhập khẩu -> Hướng xuất khẩu</text>
    </svg>`
  },

  7: {
    note: "Sơ đồ Đỉnh cao các cuộc kháng chiến bảo vệ Tổ quốc tiêu biểu: Bạch Đằng (938) -> Như Nguyệt (1077) -> Ba lần kháng chiến Mông Nguyên -> Rạch Gầm & Đống Đa.",
    svg: `<svg viewBox="0 0 800 200" class="w-full max-w-3xl h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Kháng chiến 1 -->
      <rect x="20" y="30" width="170" height="140" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" />
      <text x="105" y="58" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1d4ed8">BẠCH ĐẰNG 938</text>
      <text x="105" y="80" text-anchor="middle" font-size="10" fill="#1e40af">• Ngô Quyền</text>
      <text x="105" y="100" text-anchor="middle" font-size="10" fill="#1e40af">• Đánh tan quân Nam Hán</text>
      <text x="105" y="120" text-anchor="middle" font-size="9.5" fill="#1e3a8a">• Bố trí bãi cọc ngầm</text>
      <text x="105" y="145" text-anchor="middle" font-size="9" font-weight="bold" fill="#172554">Chấm dứt 1000 năm Bắc thuộc</text>

      <!-- Kháng chiến 2 -->
      <rect x="210" y="30" width="180" height="140" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" />
      <text x="300" y="58" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#b45309">NHƯ NGUYỆT 1077</text>
      <text x="300" y="80" text-anchor="middle" font-size="10" fill="#92400e">• Lý Thường Kiệt</text>
      <text x="300" y="100" text-anchor="middle" font-size="10" fill="#92400e">• Đánh tan quân Tống</text>
      <text x="300" y="120" text-anchor="middle" font-size="9.5" fill="#78350f">• 'Tiên phát chế nhân'</text>
      <text x="300" y="145" text-anchor="middle" font-size="9" font-weight="bold" fill="#451a03">Bài thơ Nam quốc sơn hà</text>

      <!-- Kháng chiến 3 -->
      <rect x="410" y="30" width="180" height="140" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" />
      <text x="500" y="58" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#b91c1c">MÔNG - NGUYÊN</text>
      <text x="500" y="80" text-anchor="middle" font-size="10" fill="#991b1b">• 1258, 1285, 1287–1288</text>
      <text x="500" y="100" text-anchor="middle" font-size="10" fill="#991b1b">• Trần Hưng Đạo</text>
      <text x="500" y="120" text-anchor="middle" font-size="9.5" fill="#7f1d1d">• Kế sách 'Vườn không nhà trống'</text>
      <text x="500" y="145" text-anchor="middle" font-size="9" font-weight="bold" fill="#450a0a">Hội nghị Diên Hồng 'Đánh!'</text>

      <!-- Kháng chiến 4 -->
      <rect x="610" y="30" width="170" height="140" rx="12" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5" />
      <text x="695" y="58" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#c2410c">QUANG TRUNG</text>
      <text x="695" y="80" text-anchor="middle" font-size="10" fill="#9a3412">• Rạch Gầm 1785 (Xiêm)</text>
      <text x="695" y="100" text-anchor="middle" font-size="10" fill="#9a3412">• Đống Đa 1789 (Thanh)</text>
      <text x="695" y="120" text-anchor="middle" font-size="9.5" fill="#7c2d12">• Hành quân thần tốc</text>
      <text x="695" y="145" text-anchor="middle" font-size="9" font-weight="bold" fill="#431407">Đại phá 29 vạn quân Thanh</text>
    </svg>`
  },

  8: {
    note: "Sơ đồ Cuộc khởi nghĩa Lam Sơn (1418–1427) & Phong trào nông dân Tây Sơn (1771–1789): Nghệ thuật chiến tranh nhân dân bảo vệ Tổ quốc.",
    svg: `<svg viewBox="0 0 800 200" class="w-full max-w-3xl h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Cột Lam Sơn -->
      <rect x="20" y="25" width="365" height="150" rx="14" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" />
      <text x="202" y="52" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">KHỞI NGHĨA LAM SƠN (1418–1427)</text>
      <text x="202" y="75" text-anchor="middle" font-size="10" fill="#92400e">• 1416: Hội thề Lũng Nhai (Lê Lợi, Nguyễn Trãi, Lê Lai)</text>
      <text x="202" y="95" text-anchor="middle" font-size="10" fill="#92400e">• 1424: Kế Nguyễn Chích chuyển quân vào Nghệ An</text>
      <text x="202" y="115" text-anchor="middle" font-size="10" fill="#92400e">• 1426: Chiến thắng Tốt Động – Chúc Động vang dội</text>
      <text x="202" y="135" text-anchor="middle" font-size="10" fill="#92400e">• 1427: Chém Liễu Thăng ở Chi Lăng, hạ thành Xương Giang</text>
      <text x="202" y="155" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#78350f">12-1427: Hội thề Đông Quan giải phóng đất nước</text>

      <!-- Cột Tây Sơn -->
      <rect x="415" y="25" width="365" height="150" rx="14" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" />
      <text x="597" y="52" text-anchor="middle" font-size="13" font-weight="bold" fill="#b91c1c">PHONG TRÀO TÂY SƠN (1771–1789)</text>
      <text x="597" y="75" text-anchor="middle" font-size="10" fill="#991b1b">• 1771: Ba anh em dựng cờ khởi nghĩa ở Tây Sơn thượng đạo</text>
      <text x="597" y="95" text-anchor="middle" font-size="10" fill="#991b1b">• 1777 &amp; 1786: Lật đổ chúa Nguyễn &amp; chúa Trịnh, thống nhất bờ cõi</text>
      <text x="597" y="115" text-anchor="middle" font-size="10" fill="#991b1b">• 1785: Nguyễn Huệ đại phá 5 vạn quân Xiêm ở Rạch Gầm – Xoài Mút</text>
      <text x="597" y="135" text-anchor="middle" font-size="10" fill="#991b1b">• 1789: Quang Trung đại phá 29 vạn quân Thanh tại Ngọc Hồi – Đống Đa</text>
      <text x="597" y="155" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#7f1d1d">Nghệ thuật tác chiến thần tốc bất ngờ</text>
    </svg>`
  },

  9: {
    note: "Sơ đồ Các lĩnh vực cải cách của Hồ Quý Ly (Triều Hồ, 1400–1407): Hạn điền, hạn nô, tiền giấy, quân sự và văn hóa chữ Nôm.",
    svg: `<svg viewBox="0 0 800 200" class="w-full max-w-3xl h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Trung tâm -->
      <circle cx="400" cy="100" r="55" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" />
      <text x="400" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">CẢI CÁCH</text>
      <text x="400" y="112" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">HỒ QUÝ LY</text>
      <text x="400" y="128" text-anchor="middle" font-size="9" fill="#92400e">(1400–1407)</text>

      <!-- 4 Nhánh -->
      <rect x="30" y="25" width="220" height="65" rx="10" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5" />
      <text x="140" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#c2410c">1. KINH TẾ – XÃ HỘI</text>
      <text x="140" y="65" text-anchor="middle" font-size="9.5" fill="#9a3412">• Hạn điền: Tối đa 10 mẫu/thứ dân</text>
      <text x="140" y="78" text-anchor="middle" font-size="9.5" fill="#9a3412">• Hạn nô: Quy định số gia nô sở hữu</text>

      <rect x="550" y="25" width="220" height="65" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" />
      <text x="660" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">2. TÀI CHÍNH – TIỀN TỆ</text>
      <text x="660" y="65" text-anchor="middle" font-size="9.5" fill="#991b1b">• Tiền giấy Thông bảo hội sao (1396)</text>
      <text x="660" y="78" text-anchor="middle" font-size="9.5" fill="#991b1b">• Thu hồi tiền đồng đúc vũ khí</text>

      <rect x="30" y="115" width="220" height="65" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" />
      <text x="140" y="138" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">3. QUÂN SỰ – QUỐC PHÒNG</text>
      <text x="140" y="155" text-anchor="middle" font-size="9.5" fill="#1e40af">• Thành Tây Đô, thành Đa Bang</text>
      <text x="140" y="168" text-anchor="middle" font-size="9.5" fill="#1e40af">• Súng thần cơ, thuyền chiến Cổ Lâu</text>

      <rect x="550" y="115" width="220" height="65" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
      <text x="660" y="138" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">4. VĂN HÓA – GIÁO DỤC</text>
      <text x="660" y="155" text-anchor="middle" font-size="9.5" fill="#065f46">• Đề cao chữ Nôm (dịch Kinh Thư)</text>
      <text x="660" y="168" text-anchor="middle" font-size="9.5" fill="#065f46">• Bắt sư dưới 50 tuổi hoàn tục</text>

      <!-- Nối line -->
      <line x1="250" y1="60" x2="350" y2="85" stroke="#d97706" stroke-width="1.5" />
      <line x1="550" y1="60" x2="450" y2="85" stroke="#d97706" stroke-width="1.5" />
      <line x1="250" y1="145" x2="350" y2="115" stroke="#d97706" stroke-width="1.5" />
      <line x1="550" y1="145" x2="450" y2="115" stroke="#d97706" stroke-width="1.5" />
    </svg>`
  },

  10: {
    note: "Sơ đồ Bộ máy nhà nước thời vua Lê Thánh Tông (thế kỉ XV): Hoàng đế nắm toàn quyền -> Lục Bộ, Lục Tự, Lục Khoa -> 13 Thừa tuyên quản trị bởi Tam ty.",
    svg: `<svg viewBox="0 0 800 210" class="w-full max-w-3xl h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Cấp 1: Hoàng đế -->
      <rect x="280" y="15" width="240" height="40" rx="10" fill="#b91c1c" stroke="#991b1b" stroke-width="1.5" />
      <text x="400" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">HOÀNG ĐẾ (Trực tiếp điều hành)</text>

      <!-- Đường nối cấp 1 -> cấp 2 -->
      <line x1="400" y1="55" x2="400" y2="75" stroke="#b45309" stroke-width="1.5" />

      <!-- Cấp 2: Lục Bộ và Giám sát -->
      <rect x="50" y="75" width="220" height="50" rx="10" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5" />
      <text x="160" y="96" text-anchor="middle" font-size="11" font-weight="bold" fill="#c2410c">LỤC TỰ</text>
      <text x="160" y="112" text-anchor="middle" font-size="9" fill="#9a3412">Các cơ quan hành chính hỗ trợ</text>

      <rect x="290" y="75" width="220" height="50" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" />
      <text x="400" y="96" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">LỤC BỘ</text>
      <text x="400" y="112" text-anchor="middle" font-size="9.5" fill="#92400e">Lại • Hộ • Lễ • Binh • Hình • Công</text>

      <rect x="530" y="75" width="220" height="50" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" />
      <text x="640" y="96" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">LỤC KHOA</text>
      <text x="640" y="112" text-anchor="middle" font-size="9" fill="#991b1b">Giám sát &amp; Thanh tra Lục Bộ</text>

      <line x1="400" y1="125" x2="400" y2="145" stroke="#b45309" stroke-width="1.5" />

      <!-- Cấp 3: 13 Thừa tuyên -->
      <rect x="180" y="145" width="440" height="52" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
      <text x="400" y="167" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">13 THỪA TUYÊN (Địa phương)</text>
      <text x="400" y="184" text-anchor="middle" font-size="10" fill="#065f46">Quản trị độc lập bởi TAM TY: Đô ty (Quân sự) • Thừa ty (Dân sự) • Hiến ty (Thanh tra)</text>
    </svg>`
  },

  11: {
    note: "Sơ đồ Cải cách hành chính của vua Minh Mạng (1820–1841): Thành lập Nội các, Cơ mật viện, xóa bỏ 2 Thành và chia thành 30 tỉnh cùng phủ Thừa Thiên.",
    svg: `<svg viewBox="0 0 800 200" class="w-full max-w-3xl h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Khối Trung ương -->
      <rect x="20" y="25" width="365" height="150" rx="14" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" />
      <text x="202" y="52" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#b45309">CẢI CÁCH TRUNG ƯƠNG</text>
      <text x="202" y="75" text-anchor="middle" font-size="10" fill="#92400e">• 1829: Lập Nội các (xử lí, lưu trữ công văn)</text>
      <text x="202" y="95" text-anchor="middle" font-size="10" fill="#92400e">• 1834: Lập Cơ mật viện (tư vấn quân sự tối cao)</text>
      <text x="202" y="115" text-anchor="middle" font-size="10" fill="#92400e">• Hoàn thiện Lục Bộ, Đô sát viện giám sát</text>
      <text x="202" y="135" text-anchor="middle" font-size="10" fill="#92400e">• Siết chặt chế độ Hồi tỵ chống tiêu cực</text>
      <text x="202" y="155" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#78350f">Vua nắm tuyệt đối quyền lực tối cao</text>

      <!-- Khối Địa phương -->
      <rect x="415" y="25" width="365" height="150" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
      <text x="597" y="52" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#047857">CẢI CÁCH ĐỊA PHƯƠNG</text>
      <text x="597" y="75" text-anchor="middle" font-size="10" fill="#065f46">• Xóa bỏ Bắc Thành (1831) &amp; Gia Định Thành (1832)</text>
      <text x="597" y="95" text-anchor="middle" font-size="10" fill="#065f46">• Chia cả nước thành 30 TỈNH &amp; 1 PHỦ THỪA THIÊN</text>
      <text x="597" y="115" text-anchor="middle" font-size="10" fill="#065f46">• Tổng đốc (quản 2 tỉnh) / Tuần phủ đứng đầu</text>
      <text x="597" y="135" text-anchor="middle" font-size="10" fill="#065f46">• Dưới tỉnh là Phủ -> Huyện / Châu -> Tổng -> Xã</text>
      <text x="597" y="155" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#064e3b">Hoàn thành thống nhất hành chính toàn quốc</text>
    </svg>`
  },

  12: {
    note: "Sơ đồ Vị trí chiến lược & Tiềm năng Biển Đông: Huyết mạch hàng hải quốc tế, nguồn tài nguyên biển trù phú và 2 quần đảo Hoàng Sa, Trường Sa.",
    svg: `<svg viewBox="0 0 800 200" class="w-full max-w-3xl h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Cột 1: Vị trí và Giao thông -->
      <rect x="20" y="25" width="240" height="150" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" />
      <text x="140" y="52" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">VỊ TRÍ &amp; GIAO THÔNG</text>
      <text x="140" y="75" text-anchor="middle" font-size="10" fill="#1e40af">• Diện tích ~3,5 triệu km²</text>
      <text x="140" y="95" text-anchor="middle" font-size="10" fill="#1e40af">• Lớn thứ 4 thế giới, biển tương đối kín</text>
      <text x="140" y="115" text-anchor="middle" font-size="10" fill="#1e40af">• Eo biển Ma-lắc-ca: Yết hầu hàng hải</text>
      <text x="140" y="135" text-anchor="middle" font-size="10" fill="#1e40af">• 5/10 tuyến đường biển quốc tế lớn nhất</text>
      <text x="140" y="155" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#172554">Nối Thái Bình Dương &amp; Ấn Độ Dương</text>

      <!-- Cột 2: Nguồn Tài nguyên -->
      <rect x="280" y="25" width="240" height="150" rx="14" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5" />
      <text x="400" y="52" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">NGUỒN TÀI NGUYÊN</text>
      <text x="400" y="75" text-anchor="middle" font-size="10" fill="#166534">• Sinh vật biển: Hơn 12.000 loài</text>
      <text x="400" y="95" text-anchor="middle" font-size="10" fill="#166534">• ~2.040 loài cá, 350 loài san hô</text>
      <text x="400" y="115" text-anchor="middle" font-size="10" fill="#166534">• 1 trong 5 bồn trũng dầu khí lớn</text>
      <text x="400" y="135" text-anchor="middle" font-size="10" fill="#166534">• Sa khoáng titan, cát, muối biển</text>
      <text x="400" y="155" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#14532d">Tiềm năng kinh tế biển khổng lồ</text>

      <!-- Cột 3: Quần đảo -->
      <rect x="540" y="25" width="240" height="150" rx="14" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" />
      <text x="660" y="52" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">HOÀNG SA &amp; TRƯỜNG SA</text>
      <text x="660" y="75" text-anchor="middle" font-size="10" fill="#92400e">• Hoàng Sa: Hơn 37 đảo, đá, bãi cạn</text>
      <text x="660" y="95" text-anchor="middle" font-size="10" fill="#92400e">• Trường Sa: Hơn 100 đảo, bãi san hô</text>
      <text x="660" y="115" text-anchor="middle" font-size="10" fill="#92400e">• 8 cụm: Song Tử, Nam Yết, Sinh Tồn...</text>
      <text x="660" y="135" text-anchor="middle" font-size="10" fill="#92400e">• Ba Bình (lớn nhất), Song Tử Tây (cao nhất)</text>
      <text x="660" y="155" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#78350f">Vị trí an ninh quốc phòng tiền tiêu</text>
    </svg>`
  },

  13: {
    note: "Sơ đồ Quá trình Xác lập & Thực thi chủ quyền Hoàng Sa - Trường Sa của Việt Nam: Từ chúa Nguyễn, nhà Nguyễn -> Thời Pháp thuộc, San Francisco 1951 -> Nước CHXHCN Việt Nam & UNCLOS 1982.",
    svg: `<svg viewBox="0 0 800 200" class="w-full max-w-3xl h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Giai đoạn 1 -->
      <rect x="20" y="30" width="230" height="140" rx="14" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" />
      <text x="135" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">TRƯỚC NĂM 1884</text>
      <text x="135" y="80" text-anchor="middle" font-size="10" fill="#92400e">• Chúa Nguyễn: Lập đội Hoàng Sa, Bắc Hải</text>
      <text x="135" y="100" text-anchor="middle" font-size="10" fill="#92400e">• Triều Nguyễn: Đo vẽ bản đồ, cắm mốc</text>
      <text x="135" y="120" text-anchor="middle" font-size="10" fill="#92400e">• 'Đại Nam nhất thống toàn đồ' (1838)</text>
      <text x="135" y="145" text-anchor="middle" font-size="9" font-weight="bold" fill="#78350f">Xác lập chủ quyền thực tế, hòa bình</text>

      <!-- Giai đoạn 2 -->
      <rect x="275" y="30" width="245" height="140" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" />
      <text x="397" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">GIAI ĐOẠN 1884–1975</text>
      <text x="397" y="80" text-anchor="middle" font-size="10" fill="#1e40af">• Pháp đại diện đối ngoại khẳng định CQ</text>
      <text x="397" y="100" text-anchor="middle" font-size="10" fill="#1e40af">• Xây cột mốc, hải đăng, trạm khí tượng</text>
      <text x="397" y="120" text-anchor="middle" font-size="10" fill="#1e40af">• 9-1951: Tuyên bố tại San Francisco</text>
      <text x="397" y="145" text-anchor="middle" font-size="9" font-weight="bold" fill="#172554">51 quốc gia tham dự không phản đối</text>

      <!-- Giai đoạn 3 -->
      <rect x="545" y="30" width="235" height="140" rx="14" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" />
      <text x="662" y="58" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">TỪ 1975 ĐẾN NAY</text>
      <text x="662" y="80" text-anchor="middle" font-size="10" fill="#991b1b">• 1982: Lập huyện Hoàng Sa &amp; Trường Sa</text>
      <text x="662" y="100" text-anchor="middle" font-size="10" fill="#991b1b">• 3-1988: Vòng tròn bất tử Gạc Ma</text>
      <text x="662" y="120" text-anchor="middle" font-size="10" fill="#991b1b">• Tuân thủ UNCLOS 1982, kí DOC 2002</text>
      <text x="662" y="145" text-anchor="middle" font-size="9" font-weight="bold" fill="#7f1d1d">Giải quyết hòa bình trên luật pháp QT</text>
    </svg>`
  }
};

module.exports = lichsu11Svgs;
