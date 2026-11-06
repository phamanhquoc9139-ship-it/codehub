// scratch/van10_diagrams.js
// 10 Sơ đồ Vector SVG trực quan cho 9 Bài học Ngữ Văn 10 + 1 Sơ đồ Tổng quan Hệ thống Thể loại & Kĩ năng

const diagrams = {
  1: `
  <svg viewBox="0 0 820 310" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="v1-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#e11d48" />
        <stop offset="100%" stop-color="#d97706" />
      </linearGradient>
    </defs>
    <rect width="820" height="310" rx="18" fill="#fff1f2" class="dark:fill-slate-900" />
    <rect x="16" y="14" width="788" height="38" rx="10" fill="url(#v1-grad)" />
    <text x="410" y="38" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="800">BÀI 1: CẤU TRÚC TRUYỆN KỂ &amp; 3 MẠCH TỰ SỰ TIÊU BIỂU</text>

    <!-- Core Narrative Elements -->
    <g transform="translate(24, 68)">
      <rect width="235" height="222" rx="14" fill="#ffffff" stroke="#fecdd3" stroke-width="2" />
      <rect x="0" y="0" width="235" height="32" rx="14" fill="#ffe4e6" />
      <text x="117" y="21" text-anchor="middle" fill="#be123c" font-size="12" font-weight="800">HẠT NHÂN TRI THỨC TỰ SỰ</text>
      <rect x="14" y="44" width="207" height="36" rx="8" fill="#fff1f2" stroke="#fda4af" />
      <text x="117" y="60" text-anchor="middle" fill="#9f1239" font-size="11" font-weight="700">1. Cốt truyện &amp; Sự kiện</text>
      <text x="117" y="73" text-anchor="middle" fill="#64748b" font-size="9.5">Chuỗi sự kiện tạo bước ngoặt</text>

      <rect x="14" y="88" width="207" height="36" rx="8" fill="#fff1f2" stroke="#fda4af" />
      <text x="117" y="104" text-anchor="middle" fill="#9f1239" font-size="11" font-weight="700">2. Người kể chuyện &amp; Lời kể</text>
      <text x="117" y="117" text-anchor="middle" fill="#64748b" font-size="9.5">Vai kể dẫn dắt ≠ Tác giả ngoài đời</text>

      <rect x="14" y="132" width="207" height="36" rx="8" fill="#fff1f2" stroke="#fda4af" />
      <text x="117" y="148" text-anchor="middle" fill="#9f1239" font-size="11" font-weight="700">3. Nhân vật văn học</text>
      <text x="117" y="161" text-anchor="middle" fill="#64748b" font-size="9.5">Ngoại hình, hành động, lời nói, nội tâm</text>

      <rect x="14" y="176" width="207" height="36" rx="8" fill="#fef3c7" stroke="#fcd34d" />
      <text x="117" y="192" text-anchor="middle" fill="#92400e" font-size="11" font-weight="700">4. Từ Hán Việt &amp; Nghị luận truyện</text>
      <text x="117" y="205" text-anchor="middle" fill="#78350f" font-size="9.5">Đúng nghĩa, đúng sắc thái &amp; dẫn chứng</text>
    </g>

    <!-- 3 Texts Comparison -->
    <g transform="translate(278, 68)">
      <!-- VB 1 -->
      <rect x="0" y="0" width="166" height="222" rx="14" fill="#ffffff" stroke="#fde68a" stroke-width="2" />
      <rect x="0" y="0" width="166" height="34" rx="14" fill="#fef3c7" />
      <text x="83" y="21" text-anchor="middle" fill="#b45309" font-size="11.5" font-weight="800">THẦN THOẠI VIỆT NAM</text>
      <text x="83" y="54" text-anchor="middle" fill="#1e293b" font-size="10.5" font-weight="700">Thần Trụ Trời • Sét • Gió</text>
      <text x="12" y="78" fill="#475569" font-size="9.5">• Không gian: Vũ trụ hỗn mang</text>
      <text x="12" y="98" fill="#475569" font-size="9.5">• Thời gian: Cổ sơ, phiếm chỉ</text>
      <text x="12" y="118" fill="#475569" font-size="9.5">• Nhân vật: Thần khổng lồ</text>
      <text x="12" y="138" fill="#475569" font-size="9.5">• Mục đích: Giải thích tự nhiên</text>
      <rect x="10" y="158" width="146" height="50" rx="8" fill="#fffbeb" />
      <text x="83" y="177" text-anchor="middle" fill="#b45309" font-size="9.5" font-weight="700">Thần thoại suy nguyên</text>
      <text x="83" y="193" text-anchor="middle" fill="#64748b" font-size="9">Tư duy hồn nhiên cổ xưa</text>

      <!-- VB 2 -->
      <rect x="178" y="0" width="166" height="222" rx="14" fill="#ffffff" stroke="#a7f3d0" stroke-width="2" />
      <rect x="178" y="0" width="166" height="34" rx="14" fill="#d1fae5" />
      <text x="261" y="21" text-anchor="middle" fill="#047857" font-size="11.5" font-weight="800">TRUYỆN TRUYỀN KÌ</text>
      <text x="261" y="54" text-anchor="middle" fill="#1e293b" font-size="10.5" font-weight="700">Tản Viên từ Phán sự lục</text>
      <text x="190" y="78" fill="#475569" font-size="9.5">• Nhân vật: Ngô Tử Văn</text>
      <text x="190" y="98" fill="#475569" font-size="9.5">• Hành động: Đốt đền tà thần</text>
      <text x="190" y="118" fill="#475569" font-size="9.5">• Kì ảo: Minh ti, Diêm Vương</text>
      <text x="190" y="138" fill="#475569" font-size="9.5">• Kết quả: Nhậm chức Phán sự</text>
      <rect x="188" y="158" width="146" height="50" rx="8" fill="#ecfdf5" />
      <text x="261" y="177" text-anchor="middle" fill="#047857" font-size="9.5" font-weight="700">Chính nghĩa thắng gian tà</text>
      <text x="261" y="193" text-anchor="middle" fill="#64748b" font-size="9">Khí phách kẻ sĩ cương trực</text>

      <!-- VB 3 -->
      <rect x="356" y="0" width="162" height="222" rx="14" fill="#ffffff" stroke="#c7d2fe" stroke-width="2" />
      <rect x="356" y="0" width="162" height="34" rx="14" fill="#e0e7ff" />
      <text x="437" y="21" text-anchor="middle" fill="#4338ca" font-size="11.5" font-weight="800">TRUYỆN NGẮN HIỆN ĐẠI</text>
      <text x="437" y="54" text-anchor="middle" fill="#1e293b" font-size="10.5" font-weight="700">Chữ người tử tù</text>
      <text x="368" y="78" fill="#475569" font-size="9.5">• Nhân vật: Huấn Cao – Quản ngục</text>
      <text x="368" y="98" fill="#475569" font-size="9.5">• Tình huống: Gặp gỡ trong ngục</text>
      <text x="368" y="118" fill="#475569" font-size="9.5">• Đỉnh điểm: Cảnh cho chữ</text>
      <text x="368" y="138" fill="#475569" font-size="9.5">• Nghệ thuật: Đối lập sáng – tối</text>
      <rect x="366" y="158" width="142" height="50" rx="8" fill="#eef2ff" />
      <text x="437" y="177" text-anchor="middle" fill="#4338ca" font-size="9.5" font-weight="700">Cái Đẹp &amp; Thiên lương</text>
      <text x="437" y="193" text-anchor="middle" fill="#64748b" font-size="9">Chiến thắng chốn bùn nhơ</text>
    </g>
  </svg>`,

  2: `
  <svg viewBox="0 0 820 310" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="820" height="310" rx="18" fill="#f0fdf4" class="dark:fill-slate-900" />
    <rect x="16" y="14" width="788" height="38" rx="10" fill="#059669" />
    <text x="410" y="38" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="800">BÀI 2: THẾ GIỚI THƠ CA – TỪ HAI-CƯ, ĐƯỜNG LUẬT ĐẾN THƠ MỚI</text>

    <!-- Left Circle/Hub: Poetic Elements -->
    <g transform="translate(24, 68)">
      <rect width="240" height="222" rx="14" fill="#ffffff" stroke="#a7f3d0" stroke-width="2" />
      <rect width="240" height="32" rx="14" fill="#d1fae5" />
      <text x="120" y="21" text-anchor="middle" fill="#065f46" font-size="12" font-weight="800">CẤU TRÚC THẨM MĨ BÀI THƠ</text>
      <text x="16" y="54" fill="#047857" font-size="10.5" font-weight="700">1. Chủ thể trữ tình:</text>
      <text x="16" y="70" fill="#475569" font-size="9.5">Người trực tiếp bộc lộ cảm xúc</text>
      <text x="16" y="94" fill="#047857" font-size="10.5" font-weight="700">2. Hình ảnh &amp; Từ ngữ:</text>
      <text x="16" y="110" fill="#475569" font-size="9.5">Gợi cảm giác thị giác &amp; biểu tượng</text>
      <text x="16" y="134" fill="#047857" font-size="10.5" font-weight="700">3. Vần – Nhịp – Nhạc điệu:</text>
      <text x="16" y="150" fill="#475569" font-size="9.5">Cộng hưởng âm thanh &amp; bằng – trắc</text>
      <text x="16" y="174" fill="#047857" font-size="10.5" font-weight="700">4. Thi luật, Thể thơ &amp; Phép đối:</text>
      <text x="16" y="190" fill="#475569" font-size="9.5">Quy tắc niêm, luật, đối xứng hài hoà</text>
      <text x="16" y="210" fill="#b45309" font-size="9.5" font-weight="700">★ Tiếng Việt: Sửa lỗi dùng từ &amp; trật tự từ</text>
    </g>

    <!-- Right: 4 Reading Pillars -->
    <g transform="translate(280, 68)">
      <rect x="0" y="0" width="250" height="104" rx="12" fill="#ffffff" stroke="#bae6fd" stroke-width="2" />
      <text x="14" y="24" fill="#0284c7" font-size="11.5" font-weight="800">1. Thơ Hai-cư Nhật Bản (Basho, Chiyo, Issa)</text>
      <text x="14" y="44" fill="#475569" font-size="9.5">• Tối giản (5-7-5 âm tiết gốc), có quý ngữ chỉ mùa</text>
      <text x="14" y="62" fill="#475569" font-size="9.5">• Ghi lại khoảnh khắc thực tại: Cánh quạ chiều thu,</text>
      <text x="14" y="78" fill="#475569" font-size="9.5">  hoa triêu nhan vương dây gầu, ốc nhỏ trèo núi Fuji</text>
      <text x="14" y="94" fill="#0369a1" font-size="9" font-weight="700">→ Vẻ đẹp khoảng lặng &amp; tinh thần Thiền</text>

      <rect x="266" y="0" width="250" height="104" rx="12" fill="#ffffff" stroke="#fed7aa" stroke-width="2" />
      <text x="280" y="24" fill="#c2410c" font-size="11.5" font-weight="800">2. Thu hứng – Đỗ Phủ (Đường luật)</text>
      <text x="280" y="44" fill="#475569" font-size="9.5">• Thất ngôn bát cú: Đề – Thực – Luận – Kết</text>
      <text x="280" y="62" fill="#475569" font-size="9.5">• Cảnh thu hùng vĩ, dữ dội (rừng phong, sóng vọt,</text>
      <text x="280" y="78" fill="#475569" font-size="9.5">  mây đùn) đối xứng với tình thu (lệ cúc, con thuyền)</text>
      <text x="280" y="94" fill="#9a3412" font-size="9" font-weight="700">→ Nỗi nhớ quê &amp; tấm lòng ưu thời mẫn thế</text>

      <rect x="0" y="118" width="250" height="104" rx="12" fill="#ffffff" stroke="#fbcfe8" stroke-width="2" />
      <text x="14" y="142" fill="#be185d" font-size="11.5" font-weight="800">3. Mùa xuân chín – Hàn Mặc Tử (Thơ mới)</text>
      <text x="14" y="162" fill="#475569" font-size="9.5">• Bức tranh xuân ửng nắng, cỏ xanh, tiếng hát vắt vẻo</text>
      <text x="14" y="180" fill="#475569" font-size="9.5">• Chuyển đổi cảm giác tinh tế, nhịp thơ biến hoá</text>
      <text x="14" y="198" fill="#9d174d" font-size="9" font-weight="700">→ Độ viên mãn của xuân &amp; niềm bâng khuâng nhớ quê</text>

      <rect x="266" y="118" width="250" height="104" rx="12" fill="#ffffff" stroke="#ddd6fe" stroke-width="2" />
      <text x="280" y="142" fill="#6d28d9" font-size="11.5" font-weight="800">4. Bản hoà âm ngôn từ trong Tiếng thu</text>
      <text x="280" y="162" fill="#475569" font-size="9.5">• Chu Văn Sơn phê bình thơ Lưu Trọng Lư</text>
      <text x="280" y="180" fill="#475569" font-size="9.5">• Hoà điệu: Tiếng thu cảnh vật = Tiếng lòng = Tiếng thơ</text>
      <text x="280" y="198" fill="#5b21b6" font-size="9" font-weight="700">→ Hình thức âm thanh mang trọn linh hồn cảm xúc</text>
    </g>
  </svg>`,

  3: `
  <svg viewBox="0 0 820 310" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="820" height="310" rx="18" fill="#eff6ff" class="dark:fill-slate-900" />
    <rect x="16" y="14" width="788" height="38" rx="10" fill="#2563eb" />
    <text x="410" y="38" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="800">BÀI 3: CẤU TRÚC LẬP LUẬN THUYẾT PHỤC TRONG VĂN NGHỊ LUẬN</text>

    <!-- Left Pyramid: Argumentation Architecture -->
    <g transform="translate(24, 68)">
      <rect width="340" height="222" rx="14" fill="#ffffff" stroke="#bfdbfe" stroke-width="2" />
      <text x="170" y="24" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="800">MÔ HÌNH HÌNH THÁP NGHỊ LUẬN</text>

      <!-- Top: Luận đề -->
      <rect x="85" y="36" width="170" height="36" rx="8" fill="#1d4ed8" />
      <text x="170" y="54" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="800">LUẬN ĐỀ TRUNG TÂM</text>
      <text x="170" y="66" text-anchor="middle" fill="#dbeafe" font-size="8.5">Vấn đề / Tư tưởng bao quát</text>

      <!-- Middle: Luận điểm -->
      <rect x="20" y="88" width="94" height="42" rx="8" fill="#dbeafe" stroke="#60a5fa" />
      <text x="67" y="106" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="700">Luận điểm 1</text>
      <text x="67" y="120" text-anchor="middle" fill="#475569" font-size="8.5">Giải thích / Nguyên nhân</text>

      <rect x="123" y="88" width="94" height="42" rx="8" fill="#dbeafe" stroke="#60a5fa" />
      <text x="170" y="106" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="700">Luận điểm 2</text>
      <text x="170" y="120" text-anchor="middle" fill="#475569" font-size="8.5">Phân tích / Vai trò</text>

      <rect x="226" y="88" width="94" height="42" rx="8" fill="#dbeafe" stroke="#60a5fa" />
      <text x="273" y="106" text-anchor="middle" fill="#1e40af" font-size="10" font-weight="700">Luận điểm 3</text>
      <text x="273" y="120" text-anchor="middle" fill="#475569" font-size="8.5">Bàn luận / Giải pháp</text>

      <!-- Bottom: Lí lẽ & Bằng chứng -->
      <rect x="20" y="144" width="300" height="34" rx="8" fill="#eff6ff" stroke="#93c5fd" />
      <text x="170" y="160" text-anchor="middle" fill="#1e3a8a" font-size="10.5" font-weight="700">LÍ LẼ (Phân tích logic) + BẰNG CHỨNG (Xác thực, tiêu biểu)</text>
      <text x="170" y="172" text-anchor="middle" fill="#64748b" font-size="8.5">+ Yếu tố biểu cảm &amp; tự sự hỗ trợ thuyết phục</text>

      <!-- Mạch lạc & Liên kết -->
      <rect x="20" y="186" width="300" height="26" rx="6" fill="#fef3c7" stroke="#fcd34d" />
      <text x="170" y="203" text-anchor="middle" fill="#92400e" font-size="9.5" font-weight="700">Mạch lạc (Logic ý) + Liên kết (Phép lặp, thế, nối, đồng nghĩa)</text>
    </g>

    <!-- Right: 3 Reading Texts -->
    <g transform="translate(380, 68)">
      <rect x="0" y="0" width="416" height="68" rx="12" fill="#ffffff" stroke="#fde68a" stroke-width="2" />
      <text x="14" y="22" fill="#b45309" font-size="11.5" font-weight="800">1. Hiền tài là nguyên khí của quốc gia (Thân Nhân Trung)</text>
      <text x="14" y="41" fill="#475569" font-size="9.5">• Luận đề: Hiền tài quyết định sự thịnh – suy của vận nước</text>
      <text x="14" y="57" fill="#475569" font-size="9.5">• Khắc bia tiến sĩ để tôn vinh người hiền &amp; răn dạy kẻ ác, khích lệ muôn đời</text>

      <rect x="0" y="77" width="416" height="68" rx="12" fill="#ffffff" stroke="#fbcfe8" stroke-width="2" />
      <text x="14" y="99" fill="#be185d" font-size="11.5" font-weight="800">2. Yêu và đồng cảm (Phong Tử Khải)</text>
      <text x="14" y="118" fill="#475569" font-size="9.5">• Từ câu chuyện cậu bé 5 tuổi thương hoa cỏ đến triết lí thẩm mĩ &amp; nhân sinh</text>
      <text x="14" y="134" fill="#475569" font-size="9.5">• Đồng cảm hồn nhiên với vạn vật là cội nguồn của cái Đẹp và lòng nhân ái</text>

      <rect x="0" y="154" width="416" height="68" rx="12" fill="#ffffff" stroke="#c7d2fe" stroke-width="2" />
      <text x="14" y="176" fill="#4338ca" font-size="11.5" font-weight="800">3. Chữ bầu lên nhà thơ (Lê Đạt)</text>
      <text x="14" y="195" fill="#475569" font-size="9.5">• Phân biệt 'chữ tiêu dùng' trong văn xuôi và 'chữ đa nghĩa' trong thơ ca</text>
      <text x="14" y="211" fill="#475569" font-size="9.5">• Nhà thơ là 'phu chữ' khổ luyện; chính chữ nghĩa định hình tầm vóc thi nhân</text>
    </g>
  </svg>`,

  4: `
  <svg viewBox="0 0 820 310" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="820" height="310" rx="18" fill="#fffbeb" class="dark:fill-slate-900" />
    <rect x="16" y="14" width="788" height="38" rx="10" fill="#d97706" />
    <text x="410" y="38" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="800">BÀI 4: SỨC SỐNG CỦA SỬ THI &amp; QUY TRÌNH BÁO CÁO NGHIÊN CỨU</text>

    <!-- Left: Epic Characteristics -->
    <g transform="translate(24, 68)">
      <rect width="250" height="222" rx="14" fill="#ffffff" stroke="#fcd34d" stroke-width="2" />
      <rect width="250" height="32" rx="14" fill="#fef3c7" />
      <text x="125" y="21" text-anchor="middle" fill="#92400e" font-size="11.5" font-weight="800">ĐẶC TRƯNG THỂ LOẠI SỬ THI</text>
      <text x="14" y="54" fill="#b45309" font-size="10.5" font-weight="700">• Đề tài &amp; Cốt truyện:</text>
      <text x="14" y="70" fill="#475569" font-size="9.5">Biến cố trọng đại của cả cộng đồng</text>
      <text x="14" y="94" fill="#b45309" font-size="10.5" font-weight="700">• Người anh hùng sử thi:</text>
      <text x="14" y="110" fill="#475569" font-size="9.5">Kết tinh sức mạnh, danh dự tập thể</text>
      <text x="14" y="134" fill="#b45309" font-size="10.5" font-weight="700">• Không gian &amp; Thời gian:</text>
      <text x="14" y="150" fill="#475569" font-size="9.5">Kì vĩ vũ trụ – Quá khứ thiêng liêng</text>
      <text x="14" y="174" fill="#b45309" font-size="10.5" font-weight="700">• Nghệ thuật lời văn:</text>
      <text x="14" y="190" fill="#475569" font-size="9.5">So sánh trùng điệp, phóng đại, trang trọng</text>
      <text x="14" y="212" fill="#047857" font-size="9.5" font-weight="700">★ Tiếng Việt: Trích dẫn “...”, Cước chú, [...]</text>
    </g>

    <!-- Right: 2 Epics Comparison -->
    <g transform="translate(290, 68)">
      <rect x="0" y="0" width="245" height="222" rx="14" fill="#ffffff" stroke="#fed7aa" stroke-width="2" />
      <rect x="0" y="0" width="245" height="32" rx="14" fill="#ffedd5" />
      <text x="122" y="21" text-anchor="middle" fill="#c2410c" font-size="11.5" font-weight="800">HÉC-TO TỪ BIỆT ĂNG-ĐRÔ-MÁC</text>
      <text x="122" y="48" text-anchor="middle" fill="#64748b" font-size="9.5" font-style="italic">(Sử thi I-li-át – Hô-me-rơ, Hy Lạp)</text>
      <text x="12" y="72" fill="#334155" font-size="9.5">• Bối cảnh: Cổng thành Xkê (Tơ-roa)</text>
      <text x="12" y="92" fill="#334155" font-size="9.5">• Giằng co: Tình thương vợ con sâu nặng</text>
      <text x="12" y="108" fill="#334155" font-size="9.5">  ↔ Bổn phận bảo vệ thành bang</text>
      <text x="12" y="128" fill="#334155" font-size="9.5">• Chi tiết đắt giá: Tháo mũ đồng bế con</text>
      <rect x="12" y="150" width="221" height="58" rx="8" fill="#fff7ed" />
      <text x="122" y="170" text-anchor="middle" fill="#9a3412" font-size="10" font-weight="700">Vẻ đẹp bi tráng &amp; Nhân văn</text>
      <text x="122" y="188" text-anchor="middle" fill="#64748b" font-size="9">Ý thức danh dự anh hùng cổ đại</text>

      <rect x="260" y="0" width="245" height="222" rx="14" fill="#ffffff" stroke="#fde68a" stroke-width="2" />
      <rect x="260" y="0" width="245" height="32" rx="14" fill="#fef3c7" />
      <text x="382" y="21" text-anchor="middle" fill="#b45309" font-size="11.5" font-weight="800">ĐĂM SĂN ĐI BẮT NỮ THẦN MẶT TRỜI</text>
      <text x="382" y="48" text-anchor="middle" fill="#64748b" font-size="9.5" font-style="italic">(Sử thi Đăm Săn – Dân tộc Ê-đê)</text>
      <text x="272" y="72" fill="#334155" font-size="9.5">• Hành trình: Vượt rừng đến nhà Mặt Trời</text>
      <text x="272" y="92" fill="#334155" font-size="9.5">• Khát vọng: Cầu hôn Nữ Thần Mặt Trời,</text>
      <text x="272" y="108" fill="#334155" font-size="9.5">  khẳng định uy danh tù trưởng anh hùng</text>
      <text x="272" y="128" fill="#334155" font-size="9.5">• Kết cục: Chìm ở rừng sáp đen → Tái sinh</text>
      <rect x="272" y="150" width="221" height="58" rx="8" fill="#fffbeb" />
      <text x="382" y="170" text-anchor="middle" fill="#b45309" font-size="10" font-weight="700">Khát vọng chinh phục &amp; Giới hạn</text>
      <text x="382" y="188" text-anchor="middle" fill="#64748b" font-size="9">Tôn trọng quy luật tự nhiên – cộng đồng</text>
    </g>
  </svg>`,

  5: `
  <svg viewBox="0 0 820 310" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="820" height="310" rx="18" fill="#fdf2f8" class="dark:fill-slate-900" />
    <rect x="16" y="14" width="788" height="38" rx="10" fill="#be185d" />
    <text x="410" y="38" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="800">BÀI 5: TÍCH TRÒ SÂN KHẤU DÂN GIAN – CHÈO, TUỒNG &amp; MÚA RỐI NƯỚC</text>

    <!-- 3 Columns for 3 Traditional Performing Arts -->
    <g transform="translate(24, 68)">
      <!-- Chèo -->
      <rect x="0" y="0" width="248" height="222" rx="14" fill="#ffffff" stroke="#fbcfe8" stroke-width="2" />
      <rect x="0" y="0" width="248" height="34" rx="14" fill="#fce7f3" />
      <text x="124" y="22" text-anchor="middle" fill="#be185d" font-size="12" font-weight="800">1. CHÈO CỔ (Xúy Vân giả dại)</text>
      <text x="14" y="54" fill="#334155" font-size="9.5">• <tspan font-weight="700">Không gian:</tspan> Sân đình đồng bằng Bắc Bộ</text>
      <text x="14" y="74" fill="#334155" font-size="9.5">• <tspan font-weight="700">Đặc trưng:</tspan> Tổng hợp hát – múa – nói – nhạc</text>
      <text x="14" y="94" fill="#334155" font-size="9.5">• <tspan font-weight="700">Vai diễn:</tspan> Đào lệch Xúy Vân (vở Kim Nham)</text>
      <text x="14" y="114" fill="#334155" font-size="9.5">• <tspan font-weight="700">Làn điệu:</tspan> Quá giang, gà rừng, hát ngược</text>
      <rect x="14" y="136" width="220" height="72" rx="8" fill="#fdf2f8" />
      <text x="124" y="156" text-anchor="middle" fill="#9d174d" font-size="10" font-weight="700">Bi kịch nội tâm người phụ nữ</text>
      <text x="124" y="174" text-anchor="middle" fill="#475569" font-size="9">Lời thoại “nửa tỉnh nửa điên” ẩn chứa</text>
      <text x="124" y="190" text-anchor="middle" fill="#475569" font-size="9">khát vọng hạnh phúc gia đình</text>

      <!-- Tuồng -->
      <rect x="262" y="0" width="248" height="222" rx="14" fill="#ffffff" stroke="#fed7aa" stroke-width="2" />
      <rect x="262" y="0" width="248" height="34" rx="14" fill="#ffedd5" />
      <text x="386" y="22" text-anchor="middle" fill="#c2410c" font-size="12" font-weight="800">2. TUỒNG ĐỒ (Huyện đường)</text>
      <text x="276" y="54" fill="#334155" font-size="9.5">• <tspan font-weight="700">Tác phẩm:</tspan> Nghêu, Sò, Ốc, Hến</text>
      <text x="276" y="74" fill="#334155" font-size="9.5">• <tspan font-weight="700">Đặc trưng:</tspan> Ước lệ, cách điệu hoá trang</text>
      <text x="276" y="94" fill="#334155" font-size="9.5">• <tspan font-weight="700">Nhân vật:</tspan> Tri huyện, Đề lại, Lý trưởng, Thị Hến</text>
      <text x="276" y="114" fill="#334155" font-size="9.5">• <tspan font-weight="700">Thủ pháp:</tspan> Tự xưng danh bóc trần bản chất</text>
      <rect x="276" y="136" width="220" height="72" rx="8" fill="#fff7ed" />
      <text x="386" y="156" text-anchor="middle" fill="#9a3412" font-size="10" font-weight="700">Tiếng cười trào phúng sâu cay</text>
      <text x="386" y="174" text-anchor="middle" fill="#475569" font-size="9">Đả kích quan lại tham nhũng, háo sắc</text>
      <text x="386" y="190" text-anchor="middle" fill="#475569" font-size="9">(Đối sánh với Tuồng pho: Sơn Hậu)</text>

      <!-- Múa rối nước -->
      <rect x="524" y="0" width="248" height="222" rx="14" fill="#ffffff" stroke="#bae6fd" stroke-width="2" />
      <rect x="524" y="0" width="248" height="34" rx="14" fill="#e0f2fe" />
      <text x="648" y="22" text-anchor="middle" fill="#0369a1" font-size="12" font-weight="800">3. MÚA RỐI NƯỚC VIỆT NAM</text>
      <text x="538" y="54" fill="#334155" font-size="9.5">• <tspan font-weight="700">Thể loại đọc:</tspan> Văn bản thông tin văn hoá</text>
      <text x="538" y="74" fill="#334155" font-size="9.5">• <tspan font-weight="700">Sân khấu:</tspan> Mặt nước, thuỷ đình, buồng trò</text>
      <text x="538" y="94" fill="#334155" font-size="9.5">• <tspan font-weight="700">Chất liệu:</tspan> Gỗ sung, sơn ta, máy sào/dây</text>
      <text x="538" y="114" fill="#334155" font-size="9.5">• <tspan font-weight="700">Nhân vật:</tspan> Chú Tễu &amp; tích trò nhà nông</text>
      <rect x="538" y="136" width="220" height="72" rx="8" fill="#f0f9ff" />
      <text x="648" y="156" text-anchor="middle" fill="#0369a1" font-size="10" font-weight="700">Hiện đại soi bóng tiền nhân</text>
      <text x="648" y="174" text-anchor="middle" fill="#475569" font-size="9">Viết &amp; Thuyết trình báo cáo nghiên cứu</text>
      <text x="648" y="190" text-anchor="middle" fill="#475569" font-size="9">về văn hoá truyền thống Việt Nam</text>
    </g>
  </svg>`,

  6: `
  <svg viewBox="0 0 820 310" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="820" height="310" rx="18" fill="#fefce8" class="dark:fill-slate-900" />
    <rect x="16" y="14" width="788" height="38" rx="10" fill="#b45309" />
    <text x="410" y="38" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="800">BÀI 6: NGUYỄN TRÃI – “DÀNH CÒN ĐỂ TRỢ DÂN NÀY” (TƯ TƯỞNG &amp; THI CA)</text>

    <!-- Center Core: Tư tưởng Nhân Nghĩa -->
    <g transform="translate(24, 68)">
      <rect width="240" height="222" rx="14" fill="#ffffff" stroke="#fde047" stroke-width="2" />
      <rect width="240" height="34" rx="14" fill="#fef08a" />
      <text x="120" y="22" text-anchor="middle" fill="#854d0e" font-size="11.5" font-weight="800">HẠT NHÂN TƯ TƯỞNG ỨC TRAI</text>
      <circle cx="120" cy="88" r="38" fill="#fef9c3" stroke="#eab308" stroke-width="2" />
      <text x="120" y="84" text-anchor="middle" fill="#a16207" font-size="11" font-weight="800">NHÂN NGHĨA</text>
      <text x="120" y="99" text-anchor="middle" fill="#713f12" font-size="9" font-weight="700">Yên dân • Trừ bạo</text>
      <text x="14" y="146" fill="#334155" font-size="9.5">• Độc lập tự chủ: Văn hiến, lãnh thổ,</text>
      <text x="14" y="162" fill="#334155" font-size="9.5">  phong tục, lịch sử, hào kiệt</text>
      <text x="14" y="182" fill="#334155" font-size="9.5">• Khát vọng thái bình muôn đời</text>
      <text x="14" y="202" fill="#b45309" font-size="9.5" font-weight="700">• Tâm hồn giao hoà thiên nhiên</text>
    </g>

    <!-- Right: 3 Masterpieces -->
    <g transform="translate(280, 68)">
      <rect x="0" y="0" width="516" height="72" rx="12" fill="#ffffff" stroke="#fca5a5" stroke-width="2" />
      <text x="14" y="22" fill="#b91c1c" font-size="11.5" font-weight="800">1. Bình Ngô đại cáo (Thể Cáo chữ Hán – Văn biền ngẫu)</text>
      <text x="14" y="41" fill="#475569" font-size="9.5">• Bố cục 4 phần: Luận đề chính nghĩa → Cáo trạng tội ác giặc Minh → Khởi nghĩa Lam Sơn toàn thắng → Tuyên ngôn thái bình</text>
      <text x="14" y="58" fill="#991b1b" font-size="9.5" font-weight="700">→ “Thiên cổ hùng văn” – Bản Tuyên ngôn Độc lập thứ hai của dân tộc Việt Nam</text>

      <rect x="0" y="79" width="252" height="143" rx="12" fill="#ffffff" stroke="#86efac" stroke-width="2" />
      <text x="14" y="101" fill="#15803d" font-size="11.5" font-weight="800">2. Bảo kính cảnh giới – Bài 43</text>
      <text x="14" y="119" fill="#64748b" font-size="9" font-style="italic">(Quốc âm thi tập – Thơ Nôm Đường luật)</text>
      <text x="14" y="139" fill="#334155" font-size="9.5">• Thể thất ngôn xen lục ngôn (câu 1 &amp; 8)</text>
      <text x="14" y="157" fill="#334155" font-size="9.5">• Cảnh hè: Hoè lục đùn đùn, lựu phun đỏ,</text>
      <text x="14" y="173" fill="#334155" font-size="9.5">  chợ cá lao xao, tiếng ve dắng dỏi</text>
      <text x="14" y="193" fill="#166534" font-size="9.5" font-weight="700">• Kết: Ước đàn Ngu cầm → Dân giàu đủ</text>

      <rect x="264" y="79" width="252" height="143" rx="12" fill="#ffffff" stroke="#93c5fd" stroke-width="2" />
      <text x="278" y="101" fill="#1d4ed8" font-size="11.5" font-weight="800">3. Dục Thuý sơn (Núi Dục Thuý)</text>
      <text x="278" y="119" fill="#64748b" font-size="9" font-style="italic">(Ức Trai thi tập – Thơ chữ Hán ngũ ngôn)</text>
      <text x="278" y="139" fill="#334155" font-size="9.5">• Vẻ đẹp thần tiên: Núi như đoá sen nổi,</text>
      <text x="278" y="157" fill="#334155" font-size="9.5">  bóng tháp như trâm ngọc xanh cài tóc</text>
      <text x="278" y="173" fill="#334155" font-size="9.5">• Hoài niệm bia đá Trương Hán Siêu</text>
      <text x="278" y="193" fill="#1e40af" font-size="9.5" font-weight="700">• Đọc thêm: Ngôn chí 3 &amp; Bạch Đằng hải khẩu</text>
    </g>
  </svg>`,

  7: `
  <svg viewBox="0 0 820 310" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="820" height="310" rx="18" fill="#f5f3ff" class="dark:fill-slate-900" />
    <rect x="16" y="14" width="788" height="38" rx="10" fill="#6d28d9" />
    <text x="410" y="38" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="800">BÀI 7: QUYỀN NĂNG CỦA NGƯỜI KỂ CHUYỆN – NGÔI KỂ &amp; ĐIỂM NHÌN</text>

    <!-- Narrator Powers Comparison -->
    <g transform="translate(24, 68)">
      <!-- Ngôi thứ ba toàn tri -->
      <rect x="0" y="0" width="248" height="222" rx="14" fill="#ffffff" stroke="#c4b5fd" stroke-width="2" />
      <rect x="0" y="0" width="248" height="34" rx="14" fill="#ede9fe" />
      <text x="124" y="22" text-anchor="middle" fill="#5b21b6" font-size="11.5" font-weight="800">1. NGÔI THỨ BA TOÀN TRI</text>
      <text x="124" y="48" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="700">Người cầm quyền khôi phục uy quyền</text>
      <text x="124" y="63" text-anchor="middle" fill="#64748b" font-size="9" font-style="italic">(Vích-to Huy-gô – Những người khốn khổ)</text>
      <text x="14" y="86" fill="#334155" font-size="9.5">• Người kể giấu mình, thấu suốt nội tâm</text>
      <text x="14" y="104" fill="#334155" font-size="9.5">• Đối cực: Gia-ve (luật pháp vô cảm) ↔</text>
      <text x="14" y="120" fill="#334155" font-size="9.5">  Giăng Van-giăng (tình thương thánh thiện)</text>
      <text x="14" y="140" fill="#334155" font-size="9.5">• Bình luận trực tiếp đầy xúc động</text>
      <rect x="14" y="158" width="220" height="50" rx="8" fill="#f5f3ff" />
      <text x="124" y="178" text-anchor="middle" fill="#6d28d9" font-size="9.5" font-weight="700">Đảo chiều uy quyền</text>
      <text x="124" y="194" text-anchor="middle" fill="#475569" font-size="9">Tình thương chiến thắng bạo quyền</text>

      <!-- Ngôi thứ ba hạn tri / Điểm nhìn bên trong -->
      <rect x="262" y="0" width="248" height="222" rx="14" fill="#ffffff" stroke="#a7f3d0" stroke-width="2" />
      <rect x="262" y="0" width="248" height="34" rx="14" fill="#d1fae5" />
      <text x="386" y="22" text-anchor="middle" fill="#047857" font-size="11.5" font-weight="800">2. ĐIỂM NHÌN NHÂN VẬT (NGÔI 3)</text>
      <text x="386" y="48" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="700">Dưới bóng hoàng lan</text>
      <text x="386" y="63" text-anchor="middle" fill="#64748b" font-size="9" font-style="italic">(Thạch Lam – Truyện ngắn trữ tình)</text>
      <text x="276" y="86" fill="#334155" font-size="9.5">• Điểm nhìn đặt sát tâm hồn nhân vật Thanh</text>
      <text x="276" y="104" fill="#334155" font-size="9.5">• Không gian: Khu vườn quê, bóng hoàng lan</text>
      <text x="276" y="120" fill="#334155" font-size="9.5">• Tình bà cháu hiền từ &amp; tình cảm với Nga</text>
      <text x="276" y="140" fill="#334155" font-size="9.5">• Nhịp kể chậm rãi, tinh tế cảm giác</text>
      <rect x="276" y="158" width="220" height="50" rx="8" fill="#ecfdf5" />
      <text x="386" y="178" text-anchor="middle" fill="#047857" font-size="9.5" font-weight="700">Truyện không có cốt truyện gay cấn</text>
      <text x="386" y="194" text-anchor="middle" fill="#475569" font-size="9">Làm bừng sáng vẻ đẹp bình yên nội tâm</text>

      <!-- Ngôi thứ nhất -->
      <rect x="524" y="0" width="248" height="222" rx="14" fill="#ffffff" stroke="#fecdd3" stroke-width="2" />
      <rect x="524" y="0" width="248" height="34" rx="14" fill="#ffe4e6" />
      <text x="648" y="22" text-anchor="middle" fill="#be123c" font-size="11.5" font-weight="800">3. NGÔI THỨ NHẤT (XƯNG “TÔI”)</text>
      <text x="648" y="48" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="700">Một chuyện đùa nho nhỏ</text>
      <text x="648" y="63" text-anchor="middle" fill="#64748b" font-size="9" font-style="italic">(An-tôn Sê-khốp – Truyện ngắn Nga)</text>
      <text x="538" y="86" fill="#334155" font-size="9.5">• Nhân vật “tôi” kể lại trò đùa trượt tuyết</text>
      <text x="538" y="104" fill="#334155" font-size="9.5">• Câu nói “Tôi yêu em” lẫn trong tiếng gió</text>
      <text x="538" y="120" fill="#334155" font-size="9.5">• Na-đi-a vượt nỗi sợ để tìm lời yêu thương</text>
      <text x="538" y="140" fill="#334155" font-size="9.5">• Tiếng Việt: Biện pháp Chêm xen &amp; Liệt kê</text>
      <rect x="538" y="158" width="220" height="50" rx="8" fill="#fff1f2" />
      <text x="648" y="178" text-anchor="middle" fill="#be123c" font-size="9.5" font-weight="700">Từ bông đùa sang trầm tư day dứt</text>
      <text x="648" y="194" text-anchor="middle" fill="#475569" font-size="9">Quyền năng của lời nói &amp; kí ức</text>
    </g>
  </svg>`,

  8: `
  <svg viewBox="0 0 820 310" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="820" height="310" rx="18" fill="#f0f9ff" class="dark:fill-slate-900" />
    <rect x="16" y="14" width="788" height="38" rx="10" fill="#0284c7" />
    <text x="410" y="38" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="800">BÀI 8: THẾ GIỚI ĐA DẠNG CỦA THÔNG TIN &amp; PHƯƠNG TIỆN PHI NGÔN NGỮ</text>

    <!-- Left: Informational Text Core -->
    <g transform="translate(24, 68)">
      <rect width="250" height="222" rx="14" fill="#ffffff" stroke="#bae6fd" stroke-width="2" />
      <rect width="250" height="32" rx="14" fill="#e0f2fe" />
      <text x="125" y="21" text-anchor="middle" fill="#0369a1" font-size="11.5" font-weight="800">CẤU TRÚC VĂN BẢN THÔNG TIN</text>
      <text x="14" y="54" fill="#0284c7" font-size="10.5" font-weight="700">1. Dữ kiện vs Ý kiến:</text>
      <text x="14" y="70" fill="#475569" font-size="9.5">Dữ kiện kiểm chứng được ≠ Đánh giá</text>
      <text x="14" y="94" fill="#0284c7" font-size="10.5" font-weight="700">2. Văn bản thông tin tổng hợp:</text>
      <text x="14" y="110" fill="#475569" font-size="9.5">Thuyết minh + Miêu tả, Tự sự, Biểu cảm</text>
      <text x="14" y="134" fill="#0284c7" font-size="10.5" font-weight="700">3. Phương tiện phi ngôn ngữ:</text>
      <text x="14" y="150" fill="#475569" font-size="9.5">Ảnh, bản đồ, biểu đồ, bảng số liệu</text>
      <text x="14" y="174" fill="#0284c7" font-size="10.5" font-weight="700">4. Sản phẩm Viết &amp; Thảo luận:</text>
      <text x="14" y="190" fill="#475569" font-size="9.5">Nội quy / Hướng dẫn nơi công cộng</text>
      <text x="14" y="210" fill="#047857" font-size="9.5" font-weight="700">★ Rõ ràng – Khả thi – Chuẩn mực</text>
    </g>

    <!-- Right: 3 Texts -->
    <g transform="translate(290, 68)">
      <rect x="0" y="0" width="506" height="68" rx="12" fill="#ffffff" stroke="#c7d2fe" stroke-width="2" />
      <text x="14" y="22" fill="#4338ca" font-size="11.5" font-weight="800">1. Sự sống và cái chết (Trịnh Xuân Thuận – Khoa học phổ thông)</text>
      <text x="14" y="41" fill="#475569" font-size="9.5">• Lịch sử 3,8 tỉ năm sự sống trên Trái Đất; phân biệt vật vô sinh và sinh vật sống (ADN, tiến hoá)</text>
      <text x="14" y="57" fill="#475569" font-size="9.5">• Các đợt tuyệt chủng mở đường cho đa dạng sinh học mới → Kết hợp số liệu khoa học &amp; suy tưởng</text>

      <rect x="0" y="77" width="506" height="68" rx="12" fill="#ffffff" stroke="#fde68a" stroke-width="2" />
      <text x="14" y="99" fill="#b45309" font-size="11.5" font-weight="800">2. Nghệ thuật truyền thống của người Việt (Nguyễn Văn Huyên – Khảo cứu)</text>
      <text x="14" y="118" fill="#475569" font-size="9.5">• Khảo sát hệ thống: Kiến trúc (chùa Một Cột, đình làng), Điêu khắc (tượng chùa Tây Phương), Đúc đồng, Sơn mài</text>
      <text x="14" y="134" fill="#475569" font-size="9.5">• Làm nổi bật tâm thức tôn giáo và khiếu thẩm mĩ tinh tế, hài hoà tự nhiên của dân tộc Việt</text>

      <rect x="0" y="154" width="506" height="68" rx="12" fill="#ffffff" stroke="#a7f3d0" stroke-width="2" />
      <text x="14" y="176" fill="#047857" font-size="11.5" font-weight="800">3. Phục hồi tầng ozone: Thành công hiếm hoi của nỗ lực toàn cầu (Lê My – Bản tin)</text>
      <text x="14" y="195" fill="#475569" font-size="9.5">• Nghị định thư Montreal (1987) loại bỏ 99% chất gây hại; tầng ozone dự kiến phục hồi vào 2040 – 2066</text>
      <text x="14" y="211" fill="#475569" font-size="9.5">• Sử dụng đồ thị diện tích lỗ thủng ozone của NASA &amp; báo cáo LHQ → Minh chứng hợp tác quốc tế</text>
    </g>
  </svg>`,

  9: `
  <svg viewBox="0 0 820 310" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="820" height="310" rx="18" fill="#f0fdf4" class="dark:fill-slate-900" />
    <rect x="16" y="14" width="788" height="38" rx="10" fill="#0d9488" />
    <text x="410" y="38" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="800">BÀI 9: HÀNH TRANG CUỘC SỐNG – SƠ ĐỒ TRỰC QUAN &amp; BÀI LUẬN VỀ BẢN THÂN</text>

    <!-- Left: 4 Types of Charts/Diagrams -->
    <g transform="translate(24, 68)">
      <rect width="340" height="222" rx="14" fill="#ffffff" stroke="#99f6e4" stroke-width="2" />
      <rect width="340" height="32" rx="14" fill="#ccfbf1" />
      <text x="170" y="21" text-anchor="middle" fill="#0f766e" font-size="11.5" font-weight="800">4 LOẠI BIỂU ĐỒ / SƠ ĐỒ TRỌNG TÂM</text>

      <rect x="14" y="42" width="150" height="78" rx="10" fill="#f0fdfa" stroke="#5eead4" />
      <text x="89" y="62" text-anchor="middle" fill="#0f766e" font-size="10.5" font-weight="700">1. Biểu đồ Tròn</text>
      <text x="89" y="80" text-anchor="middle" fill="#475569" font-size="9">Biểu thị cơ cấu, tỉ lệ %</text>
      <text x="89" y="96" text-anchor="middle" fill="#475569" font-size="9">các phần trong tổng thể</text>

      <rect x="176" y="42" width="150" height="78" rx="10" fill="#f0fdfa" stroke="#5eead4" />
      <text x="251" y="62" text-anchor="middle" fill="#0f766e" font-size="10.5" font-weight="700">2. Sơ đồ Venn</text>
      <text x="251" y="80" text-anchor="middle" fill="#475569" font-size="9">Vòng tròn giao nhau:</text>
      <text x="251" y="96" text-anchor="middle" fill="#475569" font-size="9">Điểm giống &amp; khác nhau</text>

      <rect x="14" y="130" width="150" height="78" rx="10" fill="#f0fdfa" stroke="#5eead4" />
      <text x="89" y="150" text-anchor="middle" fill="#0f766e" font-size="10.5" font-weight="700">3. Biểu đồ Thời gian</text>
      <text x="89" y="168" text-anchor="middle" fill="#475569" font-size="9">Trục niên biểu (Timeline)</text>
      <text x="89" y="184" text-anchor="middle" fill="#475569" font-size="9">diễn biến theo mốc năm</text>

      <rect x="176" y="130" width="150" height="78" rx="10" fill="#f0fdfa" stroke="#5eead4" />
      <text x="251" y="150" text-anchor="middle" fill="#0f766e" font-size="10.5" font-weight="700">4. Sơ đồ Cây</text>
      <text x="251" y="168" text-anchor="middle" fill="#475569" font-size="9">Cấu trúc phân cấp thứ bậc</text>
      <text x="251" y="184" text-anchor="middle" fill="#475569" font-size="9">hoặc nguyên nhân – hệ quả</text>
    </g>

    <!-- Right: Texts & Personal Essay Flow -->
    <g transform="translate(380, 68)">
      <rect x="0" y="0" width="416" height="128" rx="14" fill="#ffffff" stroke="#bae6fd" stroke-width="2" />
      <text x="14" y="22" fill="#0369a1" font-size="11.5" font-weight="800">MẠCH ĐỌC SUY NGẪM VỀ CON NGƯỜI &amp; LỰA CHỌN</text>
      <text x="14" y="44" fill="#334155" font-size="9.5">• <tspan font-weight="700">Về chính chúng ta (Carlo Rovelli):</tspan> Con người là một phần của tự nhiên vũ trụ → Khiêm nhường &amp; bảo vệ hành tinh xanh.</text>
      <text x="14" y="68" fill="#334155" font-size="9.5">• <tspan font-weight="700">Con đường không chọn (Robert Frost):</tspan> Ẩn dụ hai lối rẽ trong rừng thu → Mỗi lựa chọn đều định hình số phận và để lại suy tư.</text>
      <text x="14" y="92" fill="#334155" font-size="9.5">• <tspan font-weight="700">Một đời như kẻ tìm đường (Phan Văn Trường):</tspan> Thái độ sống tận tâm, học hỏi là “chiếc la bàn” dẫn lối.</text>
      <text x="14" y="114" fill="#047857" font-size="9.5" font-weight="700">• Thực hành đọc: Nhật kí “Mãi mãi tuổi hai mươi” (Nguyễn Văn Thạc)</text>

      <!-- Personal Essay Flow -->
      <rect x="0" y="138" width="416" height="84" rx="14" fill="#fef3c7" stroke="#fcd34d" stroke-width="2" />
      <text x="208" y="158" text-anchor="middle" fill="#92400e" font-size="11.5" font-weight="800">QUY TRÌNH VIẾT BÀI LUẬN VỀ BẢN THÂN</text>
      <text x="208" y="178" text-anchor="middle" fill="#78350f" font-size="10" font-weight="700">Trải nghiệm có thật → Suy ngẫm &amp; Thay đổi nhận thức → Giá trị sống &amp; Hướng đi</text>
      <text x="208" y="198" text-anchor="middle" fill="#64748b" font-size="9">(Chân thành, sâu sắc, không phải bản khai lí lịch hay danh sách thành tích)</text>
    </g>
  </svg>`,

  shared: `
  <svg viewBox="0 0 820 260" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="820" height="260" rx="18" fill="#fff1f2" class="dark:fill-slate-900" />
    <rect x="16" y="14" width="788" height="36" rx="10" fill="#be123c" />
    <text x="410" y="37" text-anchor="middle" fill="#ffffff" font-size="13.5" font-weight="800">TRỤC PHƯƠNG PHÁP HỌC TẬP XUYÊN SUỐT NGỮ VĂN 10 (TẬP 1 &amp; TẬP 2)</text>

    <!-- 3 Pillars: Đọc - Viết - Nói & Nghe -->
    <g transform="translate(24, 64)">
      <rect x="0" y="0" width="248" height="178" rx="14" fill="#ffffff" stroke="#fda4af" stroke-width="2" />
      <rect x="0" y="0" width="248" height="30" rx="14" fill="#ffe4e6" />
      <text x="124" y="20" text-anchor="middle" fill="#be123c" font-size="11.5" font-weight="800">1. ĐỌC HIỂU THEO ĐẶC TRƯNG THỂ LOẠI</text>
      <text x="14" y="48" fill="#334155" font-size="9.5">1. Xác định thể loại, bối cảnh, tình huống</text>
      <text x="14" y="68" fill="#334155" font-size="9.5">2. Nhận diện chủ đề / luận đề &amp; thông điệp</text>
      <text x="14" y="88" fill="#334155" font-size="9.5">3. Khảo sát bằng chứng nghệ thuật ngôn từ</text>
      <text x="14" y="108" fill="#334155" font-size="9.5">4. Giải thích <tspan font-weight="700" fill="#be123c">tác dụng</tspan> của hình thức nghệ thuật</text>
      <text x="14" y="128" fill="#334155" font-size="9.5">5. Kết nối lịch sử – văn hoá &amp; bản thân</text>
      <text x="14" y="156" fill="#047857" font-size="9" font-weight="700">✓ Bám sát văn bản, không suy diễn tuỳ tiện</text>

      <rect x="262" y="0" width="248" height="178" rx="14" fill="#ffffff" stroke="#fde68a" stroke-width="2" />
      <rect x="262" y="0" width="248" height="30" rx="14" fill="#fef3c7" />
      <text x="386" y="20" text-anchor="middle" fill="#b45309" font-size="11.5" font-weight="800">2. VIẾT NGHỊ LUẬN &amp; NGHIÊN CỨU</text>
      <text x="276" y="48" fill="#334155" font-size="9.5">• Đoạn lập luận: Luận điểm → Lí lẽ →</text>
      <text x="276" y="64" fill="#334155" font-size="9.5">  Bằng chứng → Phân tích → Kết nối</text>
      <text x="276" y="86" fill="#334155" font-size="9.5">• Nghị luận văn học (Truyện, Thơ, Nhân vật)</text>
      <text x="276" y="106" fill="#334155" font-size="9.5">• Nghị luận xã hội &amp; Bài luận về bản thân</text>
      <text x="276" y="126" fill="#334155" font-size="9.5">• Báo cáo nghiên cứu &amp; Nội quy công cộng</text>
      <text x="276" y="156" fill="#b45309" font-size="9" font-weight="700">✓ Trích dẫn minh bạch, chống đạo văn</text>

      <rect x="524" y="0" width="248" height="178" rx="14" fill="#ffffff" stroke="#bae6fd" stroke-width="2" />
      <rect x="524" y="0" width="248" height="30" rx="14" fill="#e0f2fe" />
      <text x="648" y="20" text-anchor="middle" fill="#0369a1" font-size="11.5" font-weight="800">3. NÓI, NGHE &amp; TRAO ĐỔI HỌC THUẬT</text>
      <text x="538" y="48" fill="#334155" font-size="9.5">• Người nói: Nêu rõ luận điểm, bằng chứng,</text>
      <text x="538" y="64" fill="#334155" font-size="9.5">  dùng từ chuyển tiếp &amp; slide/biểu đồ hợp lí</text>
      <text x="538" y="86" fill="#334155" font-size="9.5">• Người nghe: Ghi chép ý chính, đặt câu hỏi</text>
      <text x="538" y="106" fill="#334155" font-size="9.5">  vào nội dung/bằng chứng, không công kích</text>
      <text x="538" y="126" fill="#334155" font-size="9.5">• Tôn trọng góc nhìn khác biệt có căn cứ</text>
      <text x="538" y="156" fill="#0369a1" font-size="9" font-weight="700">✓ Đối thoại văn minh, cầu thị &amp; sâu sắc</text>
    </g>
  </svg>`
};

module.exports = diagrams;
