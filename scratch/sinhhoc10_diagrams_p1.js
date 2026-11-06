// scratch/generate_sinhhoc10_diagrams.js
const fs = require('fs');

const diagrams = {
  1: `<svg viewBox="0 0 760 280" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bioG1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#059669"/>
        <stop offset="100%" stop-color="#0d9488"/>
      </linearGradient>
    </defs>
    <rect width="760" height="280" rx="16" fill="#f0fdf4" class="dark:fill-slate-900"/>
    <text x="380" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="#065f46">SƠ ĐỒ HỆ SINH THÁI NGHIÊN CỨU &amp; ỨNG DỤNG SINH HỌC HIỆN ĐẠI</text>
    <!-- Center Core -->
    <circle cx="380" cy="145" r="52" fill="url(#bioG1)" stroke="#a7f3d0" stroke-width="4"/>
    <text x="380" y="138" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">SINH HỌC 10</text>
    <text x="380" y="154" text-anchor="middle" font-size="10" font-weight="600" fill="#d1fae5">Cơ bản &amp; Ứng dụng</text>
    <!-- 4 Branches -->
    <line x1="328" y1="120" x2="195" y2="80" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4 3"/>
    <line x1="328" y1="170" x2="195" y2="210" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4 3"/>
    <line x1="432" y1="120" x2="565" y2="80" stroke="#0d9488" stroke-width="2.5" stroke-dasharray="4 3"/>
    <line x1="432" y1="170" x2="565" y2="210" stroke="#0d9488" stroke-width="2.5" stroke-dasharray="4 3"/>
    <!-- Box 1: Y duoc & Phap y -->
    <rect x="25" y="45" width="175" height="68" rx="12" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
    <text x="112" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="#047857">1. Y – DƯỢC &amp; PHÁP Y</text>
    <text x="112" y="85" text-anchor="middle" font-size="9.5" fill="#334155">Giải trình tự hệ gene, thuốc đích</text>
    <text x="112" y="100" text-anchor="middle" font-size="9.5" fill="#059669" font-weight="700">Dấu vân tay DNA nhận diện</text>
    <!-- Box 2: Nong lam ngu nghiep -->
    <rect x="25" y="175" width="175" height="68" rx="12" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
    <text x="112" y="198" text-anchor="middle" font-size="11" font-weight="800" fill="#047857">2. NÔNG – LÂM – NGƯ</text>
    <text x="112" y="215" text-anchor="middle" font-size="9.5" fill="#334155">Giống năng suất, chống chịu cao</text>
    <text x="112" y="230" text-anchor="middle" font-size="9.5" fill="#059669" font-weight="700">Nuôi cấy mô &amp; Công nghệ gene</text>
    <!-- Box 3: Thuc pham & Moi truong -->
    <rect x="560" y="45" width="175" height="68" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
    <text x="647" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="#0f766e">3. THỰC PHẨM &amp; MÔI TRƯỜNG</text>
    <text x="647" y="85" text-anchor="middle" font-size="9.5" fill="#334155">Chế biến lên men, xử lí ô nhiễm</text>
    <text x="647" y="100" text-anchor="middle" font-size="9.5" fill="#0d9488" font-weight="700">Nhiên liệu &amp; Phỏng sinh học</text>
    <!-- Box 4: Dao duc & Ben vung -->
    <rect x="560" y="175" width="175" height="68" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
    <text x="647" y="198" text-anchor="middle" font-size="11" font-weight="800" fill="#0f766e">4. ĐẠO ĐỨC &amp; BỀN VỮNG</text>
    <text x="647" y="215" text-anchor="middle" font-size="9.5" fill="#334155">Bảo tồn đa dạng, an toàn GMO</text>
    <text x="647" y="230" text-anchor="middle" font-size="9.5" fill="#b45309" font-weight="700">Đạo đức sinh học (Bioethics)</text>
    <!-- Bottom Bar -->
    <rect x="210" y="238" width="340" height="28" rx="8" fill="#d1fae5" stroke="#34d399"/>
    <text x="380" y="256" text-anchor="middle" font-size="10.5" font-weight="700" fill="#065f46">Liên ngành: Tin sinh học (AI) • Hoá sinh • Vật lí sinh học • Y sinh</text>
  </svg>`,

  2: `<svg viewBox="0 0 760 270" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="270" rx="16" fill="#f0fdfa" class="dark:fill-slate-900"/>
    <text x="380" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="#0f766e">TIẾN TRÌNH NGHIÊN CỨU KHOA HỌC TRONG SINH HỌC (6 BƯỚC &amp; VÒNG PHẢN HỒI)</text>
    <!-- 6 Steps Boxes -->
    <g transform="translate(18, 52)">
      <rect x="0" y="0" width="105" height="76" rx="10" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
      <circle cx="20" cy="20" r="11" fill="#0d9488"/><text x="20" y="24" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">1</text>
      <text x="62" y="24" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0f766e">QUAN SÁT</text>
      <text x="52" y="45" text-anchor="middle" font-size="9" fill="#334155">Thu thập dữ liệu</text>
      <text x="52" y="60" text-anchor="middle" font-size="9" fill="#0d9488" font-weight="600">Định tính / Định lượng</text>
    </g>
    <text x="131" y="94" font-size="16" font-weight="900" fill="#0d9488">→</text>
    <g transform="translate(142, 52)">
      <rect x="0" y="0" width="105" height="76" rx="10" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
      <circle cx="20" cy="20" r="11" fill="#0d9488"/><text x="20" y="24" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">2</text>
      <text x="64" y="24" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0f766e">ĐẶT CÂU HỎI</text>
      <text x="52" y="45" text-anchor="middle" font-size="9" fill="#334155">Nêu vấn đề cần</text>
      <text x="52" y="60" text-anchor="middle" font-size="9" fill="#0d9488" font-weight="600">giải thích khoa học</text>
    </g>
    <text x="255" y="94" font-size="16" font-weight="900" fill="#0d9488">→</text>
    <g transform="translate(266, 52)">
      <rect x="0" y="0" width="110" height="76" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="2.5"/>
      <circle cx="20" cy="20" r="11" fill="#059669"/><text x="20" y="24" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">3</text>
      <text x="66" y="24" text-anchor="middle" font-size="10.5" font-weight="800" fill="#065f46">GIẢ THUYẾT</text>
      <text x="55" y="45" text-anchor="middle" font-size="9" fill="#334155">Giải thích giả định</text>
      <text x="55" y="60" text-anchor="middle" font-size="9" fill="#059669" font-weight="700">Kiểm chứng được</text>
    </g>
    <text x="384" y="94" font-size="16" font-weight="900" fill="#059669">→</text>
    <g transform="translate(395, 52)">
      <rect x="0" y="0" width="105" height="76" rx="10" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
      <circle cx="20" cy="20" r="11" fill="#0d9488"/><text x="20" y="24" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">4</text>
      <text x="62" y="24" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0f766e">DỰ ĐOÁN</text>
      <text x="52" y="45" text-anchor="middle" font-size="9" fill="#334155">Suy luận hệ quả</text>
      <text x="52" y="60" text-anchor="middle" font-size="9" fill="#0d9488" font-weight="600">“Nếu... thì...”</text>
    </g>
    <text x="508" y="94" font-size="16" font-weight="900" fill="#0d9488">→</text>
    <g transform="translate(519, 52)">
      <rect x="0" y="0" width="108" height="76" rx="10" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <circle cx="20" cy="20" r="11" fill="#0284c7"/><text x="20" y="24" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">5</text>
      <text x="64" y="24" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0369a1">THỰC NGHIỆM</text>
      <text x="54" y="45" text-anchor="middle" font-size="9" fill="#334155">Lô đối chứng &amp;</text>
      <text x="54" y="60" text-anchor="middle" font-size="9" fill="#0284c7" font-weight="700">Lô thí nghiệm</text>
    </g>
    <text x="634" y="94" font-size="16" font-weight="900" fill="#0284c7">→</text>
    <g transform="translate(644, 52)">
      <rect x="0" y="0" width="98" height="76" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <circle cx="18" cy="20" r="11" fill="#d97706"/><text x="18" y="24" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">6</text>
      <text x="58" y="24" text-anchor="middle" font-size="10.5" font-weight="800" fill="#b45309">KẾT LUẬN</text>
      <text x="49" y="45" text-anchor="middle" font-size="9" fill="#334155">Xử lí số liệu</text>
      <text x="49" y="60" text-anchor="middle" font-size="9" fill="#b45309" font-weight="700">Đúng / Bác bỏ</text>
    </g>
    <!-- Feedback Loop -->
    <path d="M 693 130 L 693 175 L 320 175 L 320 132" fill="none" stroke="#e11d48" stroke-width="2" stroke-dasharray="5 3"/>
    <polygon points="320,130 315,140 325,140" fill="#e11d48"/>
    <rect x="375" y="162" width="265" height="24" rx="6" fill="#ffe4e6" stroke="#f43f5e"/>
    <text x="507" y="178" text-anchor="middle" font-size="9.5" font-weight="700" fill="#be123c">Nếu không khớp dự đoán → Điều chỉnh / Đề xuất giả thuyết mới</text>
    <!-- Bottom Variables Bar -->
    <rect x="40" y="205" width="680" height="46" rx="10" fill="#ffffff" stroke="#94a3b8"/>
    <text x="380" y="224" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0f172a">KIỂM SOÁT BIẾN SỐ TRONG THỰC NGHIỆM SINH HỌC</text>
    <text x="380" y="241" text-anchor="middle" font-size="10" fill="#334155">• Biến độc lập (chủ động thay đổi)   • Biến phụ thuộc (chỉ tiêu đo đạc)   • Biến kiểm soát (giữ cố định giữa lô TN &amp; Đối chứng)</text>
  </svg>`,

  3: `<svg viewBox="0 0 760 275" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="275" rx="16" fill="#f0fdf4" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#065f46">THỨ BẬC CÁC CẤP ĐỘ TỔ CHỨC CỦA THẾ GIỚI SỐNG (TỪ THẤP ĐẾN CAO)</text>
    <!-- Row 1: Sub-cellular to Organism -->
    <g font-size="10" font-weight="700" text-anchor="middle">
      <rect x="20" y="48" width="84" height="46" rx="8" fill="#e2e8f0" stroke="#64748b"/>
      <text x="62" y="68" fill="#334155">1. Phân tử</text><text x="62" y="83" font-size="8.5" fill="#64748b">DNA, Protein</text>
      <text x="113" y="75" font-size="13" fill="#059669">→</text>
      <rect x="122" y="48" width="84" height="46" rx="8" fill="#e2e8f0" stroke="#64748b"/>
      <text x="164" y="68" fill="#334155">2. Bào quan</text><text x="164" y="83" font-size="8.5" fill="#64748b">Ti thể, Lục lạp</text>
      <text x="215" y="75" font-size="13" fill="#059669">→</text>
      <rect x="224" y="44" width="96" height="54" rx="10" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>
      <text x="272" y="65" fill="#065f46" font-weight="800">3. TẾ BÀO ★</text><text x="272" y="82" font-size="8.5" fill="#047857">Đơn vị cơ bản</text>
      <text x="329" y="75" font-size="13" fill="#059669">→</text>
      <rect x="338" y="48" width="76" height="46" rx="8" fill="#ffffff" stroke="#10b981"/>
      <text x="376" y="68" fill="#065f46">4. Mô</text><text x="376" y="83" font-size="8.5" fill="#64748b">Mô thần kinh</text>
      <text x="423" y="75" font-size="13" fill="#059669">→</text>
      <rect x="432" y="48" width="84" height="46" rx="8" fill="#ffffff" stroke="#10b981"/>
      <text x="474" y="68" fill="#065f46">5. Cơ quan</text><text x="474" y="83" font-size="8.5" fill="#64748b">Tim, Não, Lá</text>
      <text x="525" y="75" font-size="13" fill="#059669">→</text>
      <rect x="534" y="48" width="92" height="46" rx="8" fill="#ffffff" stroke="#10b981"/>
      <text x="580" y="68" fill="#065f46">6. Hệ cơ quan</text><text x="580" y="83" font-size="8.5" fill="#64748b">Hệ tuần hoàn</text>
      <text x="635" y="75" font-size="13" fill="#059669">→</text>
      <rect x="644" y="44" width="96" height="54" rx="10" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>
      <text x="692" y="65" fill="#065f46" font-weight="800">7. CƠ THỂ ★</text><text x="692" y="82" font-size="8.5" fill="#047857">Cá thể độc lập</text>
    </g>
    <!-- Row 2: Supra-organismal Levels -->
    <g font-size="10.5" font-weight="700" text-anchor="middle">
      <rect x="55" y="122" width="145" height="56" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="2.5"/>
      <text x="127" y="144" fill="#0f766e" font-weight="800">8. QUẦN THỂ ★</text>
      <text x="127" y="162" font-size="9" fill="#115e59">Cá thể cùng loài, sinh sản</text>
      <text x="215" y="154" font-size="15" fill="#0d9488">→</text>
      <rect x="230" y="122" width="145" height="56" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="2.5"/>
      <text x="302" y="144" fill="#0f766e" font-weight="800">9. QUẦN XÃ ★</text>
      <text x="302" y="162" font-size="9" fill="#115e59">Các quần thể khác loài</text>
      <text x="390" y="154" font-size="15" fill="#0d9488">→</text>
      <rect x="405" y="122" width="150" height="56" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
      <text x="480" y="144" fill="#0369a1" font-weight="800">10. HỆ SINH THÁI ★</text>
      <text x="480" y="162" font-size="9" fill="#075985">Quần xã + Sinh cảnh vô sinh</text>
      <text x="570" y="154" font-size="15" fill="#0284c7">→</text>
      <rect x="585" y="122" width="130" height="56" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <text x="650" y="144" fill="#b45309" font-weight="800">11. SINH QUYỂN</text>
      <text x="650" y="162" font-size="9" fill="#92400e">Toàn bộ Trái Đất sống</text>
    </g>
    <!-- 3 Core Principles -->
    <rect x="30" y="198" width="700" height="58" rx="12" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
    <text x="380" y="218" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">3 ĐẶC ĐIỂM CHUNG CỐT LÕI CỦA CÁC CẤP ĐỘ TỔ CHỨC SỐNG (★ = Cấp độ cơ bản)</text>
    <text x="155" y="240" text-anchor="middle" font-size="9.5" font-weight="700" fill="#047857">① Nguyên tắc thứ bậc (Đặc tính nổi trội)</text>
    <text x="395" y="240" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0f766e">② Hệ thống mở &amp; Tự điều chỉnh (Nội môi)</text>
    <text x="615" y="240" text-anchor="middle" font-size="9.5" font-weight="700" fill="#b45309">③ Liên tục tiến hoá (Thích nghi &amp; Đa dạng)</text>
  </svg>`,

  4: `<svg viewBox="0 0 760 265" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="265" rx="16" fill="#f0f9ff" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#0369a1">CẤU TRÚC PHÂN CỰC CỦA PHÂN TỬ NƯỚC (H₂O) &amp; MẠNG LƯỚI LIÊN KẾT HYDROGEN</text>
    <!-- Left Box: Elements -->
    <rect x="22" y="46" width="215" height="198" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="130" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">NGUYÊN TỐ TRONG TẾ BÀO</text>
    <rect x="36" y="80" width="186" height="68" rx="8" fill="#e0f2fe"/>
    <text x="129" y="98" text-anchor="middle" font-size="10" font-weight="800" fill="#075985">Đại lượng (≥ 0,01% khối lượng khô)</text>
    <text x="129" y="116" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0284c7">C, H, O, N (96%), P, S, Ca, K, Mg</text>
    <text x="129" y="134" text-anchor="middle" font-size="9" fill="#334155">Cấu tạo đại phân tử hữu cơ (Khung C)</text>
    <rect x="36" y="158" width="186" height="72" rx="8" fill="#fef3c7"/>
    <text x="129" y="176" text-anchor="middle" font-size="10" font-weight="800" fill="#92400e">Vi lượng (&lt; 0,01% khối lượng khô)</text>
    <text x="129" y="194" text-anchor="middle" font-size="10.5" font-weight="700" fill="#d97706">Fe, I, Zn, Cu, Mn, Mo, Co</text>
    <text x="129" y="212" text-anchor="middle" font-size="9" fill="#334155">Hoạt hoá Enzyme, Hormone, Hemoglobin</text>
    <!-- Center: H2O Polarity & H-bond -->
    <rect x="252" y="46" width="265" height="198" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="384" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">TÍNH PHÂN CỰC &amp; LIÊN KẾT HYDROGEN</text>
    <!-- Central H2O -->
    <line x1="350" y1="135" x2="318" y2="168" stroke="#334155" stroke-width="5"/>
    <line x1="350" y1="135" x2="382" y2="168" stroke="#334155" stroke-width="5"/>
    <circle cx="350" cy="130" r="24" fill="#ef4444"/>
    <text x="350" y="134" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">O (δ⁻)</text>
    <circle cx="315" cy="172" r="15" fill="#3b82f6"/>
    <text x="315" y="176" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">H(δ⁺)</text>
    <circle cx="385" cy="172" r="15" fill="#3b82f6"/>
    <text x="385" y="176" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">H(δ⁺)</text>
    <!-- Neighbor H2O connected by H-bond -->
    <line x1="385" y1="172" x2="445" y2="145" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="4 3"/>
    <circle cx="462" cy="138" r="20" fill="#ef4444"/>
    <text x="462" y="142" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">O (δ⁻)</text>
    <circle cx="488" cy="168" r="12" fill="#3b82f6"/><text x="488" y="172" text-anchor="middle" font-size="9" fill="#fff">H</text>
    <circle cx="448" cy="175" r="12" fill="#3b82f6"/><text x="448" y="179" text-anchor="middle" font-size="9" fill="#fff">H</text>
    <text x="384" y="212" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">––– Liên kết cộng hoá trị phân cực (104,5°)</text>
    <text x="384" y="228" text-anchor="middle" font-size="9.5" font-weight="700" fill="#e11d48">- - - Liên kết Hydrogen giữa các phân tử H₂O</text>
    <!-- Right Box: Roles of Water -->
    <rect x="532" y="46" width="206" height="198" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
    <text x="635" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="#0f766e">VAI TRÒ SINH HỌC CỦA NƯỚC</text>
    <text x="546" y="96" font-size="10" fill="#334155">💧 <tspan font-weight="700" fill="#0f766e">Dung môi:</tspan> Hoà tan ion &amp; chất phân cực</text>
    <text x="546" y="124" font-size="10" fill="#334155">⚗️ <tspan font-weight="700" fill="#0f766e">Phản ứng:</tspan> Nguyên liệu thuỷ phân, quang hợp</text>
    <text x="546" y="152" font-size="10" fill="#334155">🌡️ <tspan font-weight="700" fill="#0f766e">Điều hoà nhiệt:</tspan> Nhiệt dung riêng cao</text>
    <text x="546" y="180" font-size="10" fill="#334155">🌱 <tspan font-weight="700" fill="#0f766e">Cấu trúc:</tspan> Duy trì sức trương tế bào</text>
    <text x="546" y="208" font-size="10" fill="#334155">🚚 <tspan font-weight="700" fill="#0f766e">Vận chuyển:</tspan> Máu, nhựa mạch gỗ/rây</text>
  </svg>`,

  5: `<svg viewBox="0 0 760 275" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="275" rx="16" fill="#f8fafc" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#0f766e">BỐN NHÓM ĐẠI PHÂN TỬ SINH HỌC CỐT LÕI TRONG TẾ BÀO</text>
    <!-- 1. Carbohydrate -->
    <rect x="16" y="45" width="172" height="212" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
    <rect x="16" y="45" width="172" height="32" rx="10" fill="#fef3c7"/>
    <text x="102" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#b45309">1. CARBOHYDRATE</text>
    <!-- Hexose rings -->
    <polygon points="52,102 66,94 80,102 80,118 66,126 52,118" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
    <line x1="80" y1="110" x2="96" y2="110" stroke="#d97706" stroke-width="2.5"/>
    <polygon points="96,102 110,94 124,102 124,118 110,126 96,118" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
    <line x1="124" y1="110" x2="140" y2="110" stroke="#d97706" stroke-width="2.5"/>
    <polygon points="140,102 154,94 168,102 168,118 154,126 140,118" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
    <text x="102" y="146" text-anchor="middle" font-size="9.5" font-weight="700" fill="#b45309">Liên kết Glycosidic</text>
    <text x="102" y="168" text-anchor="middle" font-size="9" fill="#334155">• Đơn: Glucose, Fructose</text>
    <text x="102" y="186" text-anchor="middle" font-size="9" fill="#334155">• Đôi: Sucrose, Lactose</text>
    <text x="102" y="204" text-anchor="middle" font-size="9" fill="#334155">• Đa: Tinh bột, Glycogen,</text>
    <text x="102" y="220" text-anchor="middle" font-size="9" fill="#047857" font-weight="700">Cellulose, Chitin (Cấu trúc)</text>
    <text x="102" y="242" text-anchor="middle" font-size="9" fill="#b45309" font-weight="700">→ Năng lượng &amp; Cấu trúc</text>

    <!-- 2. Lipid -->
    <rect x="202" y="45" width="172" height="212" rx="12" fill="#ffffff" stroke="#eab308" stroke-width="2"/>
    <rect x="202" y="45" width="172" height="32" rx="10" fill="#fef9c3"/>
    <text x="288" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#a16207">2. LIPID (KỊ NƯỚC)</text>
    <!-- Phospholipid bilayer icon -->
    <circle cx="255" cy="96" r="8" fill="#0284c7"/><line x1="252" y1="104" x2="250" y2="124" stroke="#ca8a04" stroke-width="2"/><line x1="258" y1="104" x2="262" y2="122" stroke="#ca8a04" stroke-width="2"/>
    <circle cx="278" cy="96" r="8" fill="#0284c7"/><line x1="275" y1="104" x2="275" y2="124" stroke="#ca8a04" stroke-width="2"/><line x1="281" y1="104" x2="283" y2="124" stroke="#ca8a04" stroke-width="2"/>
    <circle cx="301" cy="96" r="8" fill="#0284c7"/><line x1="298" y1="104" x2="298" y2="124" stroke="#ca8a04" stroke-width="2"/><line x1="304" y1="104" x2="306" y2="124" stroke="#ca8a04" stroke-width="2"/>
    <circle cx="324" cy="96" r="8" fill="#0284c7"/><line x1="321" y1="104" x2="321" y2="124" stroke="#ca8a04" stroke-width="2"/><line x1="327" y1="104" x2="329" y2="124" stroke="#ca8a04" stroke-width="2"/>
    <text x="288" y="146" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">Đầu ưa nước / Đuôi kị nước</text>
    <text x="288" y="168" text-anchor="middle" font-size="9" fill="#334155">• Mỡ (no) / Dầu (không no)</text>
    <text x="288" y="186" text-anchor="middle" font-size="9" fill="#334155">• Phospholipid: Màng kép</text>
    <text x="288" y="204" text-anchor="middle" font-size="9" fill="#334155">• Steroid: Cholesterol,</text>
    <text x="288" y="220" text-anchor="middle" font-size="9" fill="#047857" font-weight="700">Hormone, Vitamin A,D,E,K</text>
    <text x="288" y="242" text-anchor="middle" font-size="9" fill="#a16207" font-weight="700">→ Dự trữ &amp; Màng tế bào</text>

    <!-- 3. Protein -->
    <rect x="388" y="45" width="172" height="212" rx="12" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
    <rect x="388" y="45" width="172" height="32" rx="10" fill="#d1fae5"/>
    <text x="474" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">3. PROTEIN (4 BẬC)</text>
    <path d="M 418 112 Q 435 88, 452 112 T 486 112 T 520 112" fill="none" stroke="#059669" stroke-width="3.5"/>
    <circle cx="422" cy="110" r="5" fill="#10b981"/><circle cx="452" cy="112" r="5" fill="#10b981"/><circle cx="486" cy="112" r="5" fill="#10b981"/><circle cx="518" cy="112" r="5" fill="#10b981"/>
    <text x="474" y="146" text-anchor="middle" font-size="9.5" font-weight="700" fill="#065f46">20 Amino acid (LK Peptide)</text>
    <text x="474" y="168" text-anchor="middle" font-size="9" fill="#334155">• Bậc 1: Trình tự amino acid</text>
    <text x="474" y="186" text-anchor="middle" font-size="9" fill="#334155">• Bậc 2: Xoắn α / Gấp nếp β</text>
    <text x="474" y="204" text-anchor="middle" font-size="9" fill="#334155">• Bậc 3 &amp; 4: Cấu hình 3D</text>
    <text x="474" y="220" text-anchor="middle" font-size="9" fill="#e11d48" font-weight="700">Nhiệt/pH cao → Biến tính</text>
    <text x="474" y="242" text-anchor="middle" font-size="9" fill="#065f46" font-weight="700">→ Enzyme, Kháng thể, Kênh</text>

    <!-- 4. Nucleic Acid -->
    <rect x="574" y="45" width="172" height="212" rx="12" fill="#ffffff" stroke="#6366f1" stroke-width="2"/>
    <rect x="574" y="45" width="172" height="32" rx="10" fill="#e0e7ff"/>
    <text x="660" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#4338ca">4. NUCLEIC ACID</text>
    <path d="M 615 94 C 635 125, 665 94, 685 125 C 695 132, 705 100, 712 96" fill="none" stroke="#4f46e5" stroke-width="3"/>
    <path d="M 615 125 C 635 94, 665 125, 685 94 C 695 88, 705 120, 712 124" fill="none" stroke="#06b6d4" stroke-width="3"/>
    <text x="660" y="146" text-anchor="middle" font-size="9.5" font-weight="700" fill="#4338ca">Đơn phân: Nucleotide</text>
    <text x="660" y="168" text-anchor="middle" font-size="9" fill="#334155">• DNA: Xoắn kép 2 mạch</text>
    <text x="660" y="186" text-anchor="middle" font-size="9" fill="#4338ca" font-weight="700">NTBS: A=T (2H), G≡C (3H)</text>
    <text x="660" y="204" text-anchor="middle" font-size="9" fill="#334155">• RNA: 1 mạch (A, U, G, C)</text>
    <text x="660" y="220" text-anchor="middle" font-size="9" fill="#0d9488" font-weight="700">mRNA, tRNA, rRNA</text>
    <text x="660" y="242" text-anchor="middle" font-size="9" fill="#4338ca" font-weight="700">→ Lưu giữ &amp; Truyền thông tin</text>
  </svg>`,

  6: `<svg viewBox="0 0 760 260" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="260" rx="16" fill="#f0fdf4" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#065f46">THỰC HÀNH ĐỊNH TÍNH: 4 PHẢN ỨNG MÀU NHẬN BIẾT ĐẠI PHÂN TỬ SINH HỌC</text>
    <!-- Tube 1: Tinh bot -->
    <g transform="translate(28, 46)">
      <rect x="0" y="0" width="162" height="192" rx="12" fill="#ffffff" stroke="#3b82f6" stroke-width="2"/>
      <text x="81" y="22" text-anchor="middle" font-size="11" font-weight="800" fill="#1d4ed8">1. NHẬN BIẾT TINH BỘT</text>
      <rect x="64" y="38" width="34" height="82" rx="15" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
      <path d="M 66 72 L 96 72 L 96 105 A 15 15 0 0 1 66 105 Z" fill="#1e3a8a"/>
      <text x="81" y="140" text-anchor="middle" font-size="9.5" font-weight="700" fill="#334155">Thuốc thử: Lugol (Iodine)</text>
      <text x="81" y="158" text-anchor="middle" font-size="10" font-weight="800" fill="#1e3a8a">Màu XANH TÍM / ĐEN</text>
      <text x="81" y="176" text-anchor="middle" font-size="8.5" fill="#64748b">Iodine cài vào vòng xoắn amylose</text>
    </g>
    <!-- Tube 2: Duong khu -->
    <g transform="translate(212, 46)">
      <rect x="0" y="0" width="162" height="192" rx="12" fill="#ffffff" stroke="#ea580c" stroke-width="2"/>
      <text x="81" y="22" text-anchor="middle" font-size="11" font-weight="800" fill="#c2410c">2. ĐƯỜNG KHỬ (GLUCOSE)</text>
      <rect x="64" y="38" width="34" height="82" rx="15" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
      <path d="M 66 72 L 96 72 L 96 105 A 15 15 0 0 1 66 105 Z" fill="#dc2626"/>
      <text x="81" y="140" text-anchor="middle" font-size="9.5" font-weight="700" fill="#334155">Benedict + Đun cách thuỷ</text>
      <text x="81" y="158" text-anchor="middle" font-size="10" font-weight="800" fill="#dc2626">TỦA ĐỎ GẠCH (Cu₂O↓)</text>
      <text x="81" y="176" text-anchor="middle" font-size="8.5" fill="#64748b">Khử Cu²⁺ (xanh lam) → Cu₂O</text>
    </g>
    <!-- Tube 3: Protein -->
    <g transform="translate(396, 46)">
      <rect x="0" y="0" width="162" height="192" rx="12" fill="#ffffff" stroke="#9333ea" stroke-width="2"/>
      <text x="81" y="22" text-anchor="middle" font-size="11" font-weight="800" fill="#7e22ce">3. NHẬN BIẾT PROTEIN</text>
      <rect x="64" y="38" width="34" height="82" rx="15" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
      <path d="M 66 72 L 96 72 L 96 105 A 15 15 0 0 1 66 105 Z" fill="#9333ea"/>
      <text x="81" y="140" text-anchor="middle" font-size="9.5" font-weight="700" fill="#334155">Biuret (NaOH + CuSO₄)</text>
      <text x="81" y="158" text-anchor="middle" font-size="10" font-weight="800" fill="#7e22ce">Màu TÍM ĐẶC TRƯNG</text>
      <text x="81" y="176" text-anchor="middle" font-size="8.5" fill="#64748b">Phức Cu²⁺ với liên kết peptide</text>
    </g>
    <!-- Tube 4: Lipid -->
    <g transform="translate(580, 46)">
      <rect x="0" y="0" width="154" height="192" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
      <text x="77" y="22" text-anchor="middle" font-size="11" font-weight="800" fill="#0f766e">4. NHẬN BIẾT LIPID</text>
      <rect x="60" y="38" width="34" height="82" rx="15" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
      <path d="M 62 72 L 92 72 L 92 105 A 15 15 0 0 1 62 105 Z" fill="#cbd5e1"/>
      <circle cx="72" cy="85" r="3" fill="#fff"/><circle cx="82" cy="92" r="3.5" fill="#fff"/><circle cx="75" cy="98" r="2.5" fill="#fff"/>
      <text x="77" y="140" text-anchor="middle" font-size="9.5" font-weight="700" fill="#334155">Hoà Ethanol + Thêm nước</text>
      <text x="77" y="158" text-anchor="middle" font-size="10" font-weight="800" fill="#0f766e">NHŨ TƯƠNG TRẮNG ĐỤC</text>
      <text x="77" y="176" text-anchor="middle" font-size="8.5" fill="#64748b">Không tan trong nước, tạo nhũ</text>
    </g>
  </svg>`,

  7: `<svg viewBox="0 0 760 270" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="270" rx="16" fill="#f0fdf4" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#065f46">SƠ ĐỒ CẤU TRÚC TẾ BÀO NHÂN SƠ (VI KHUẨN ĐIỂN HÌNH)</text>
    <!-- Capsule (Vo nhay) -->
    <rect x="175" y="68" width="320" height="136" rx="68" fill="#a7f3d0" stroke="#059669" stroke-width="3"/>
    <!-- Cell Wall (Thanh peptidoglycan) -->
    <rect x="187" y="80" width="296" height="112" rx="56" fill="#fde68a" stroke="#d97706" stroke-width="2.5"/>
    <!-- Plasma Membrane (Mang sinh chat) -->
    <rect x="198" y="91" width="274" height="90" rx="45" fill="#ecfdf5" stroke="#0284c7" stroke-width="2"/>
    <!-- Nucleoid (Vung nhan DNA vong) -->
    <path d="M 255 135 C 275 105, 315 165, 345 125 C 375 95, 390 165, 340 150 C 300 135, 270 165, 255 135 Z" fill="none" stroke="#dc2626" stroke-width="3"/>
    <!-- Plasmid -->
    <circle cx="422" cy="136" r="16" fill="none" stroke="#7c3aed" stroke-width="3"/>
    <!-- Ribosomes 70S -->
    <circle cx="230" cy="120" r="3.5" fill="#0369a1"/><circle cx="242" cy="152" r="3.5" fill="#0369a1"/><circle cx="385" cy="112" r="3.5" fill="#0369a1"/><circle cx="395" cy="158" r="3.5" fill="#0369a1"/><circle cx="445" cy="122" r="3.5" fill="#0369a1"/>
    <!-- Flagellum (Roi) -->
    <path d="M 495 136 Q 555 95, 605 138 T 715 128" fill="none" stroke="#047857" stroke-width="4"/>
    <!-- Pili (Long bam) -->
    <line x1="220" y1="68" x2="210" y2="50" stroke="#059669" stroke-width="2"/><line x1="270" y1="68" x2="268" y2="48" stroke="#059669" stroke-width="2"/><line x1="330" y1="68" x2="332" y2="48" stroke="#059669" stroke-width="2"/><line x1="390" y1="68" x2="398" y2="48" stroke="#059669" stroke-width="2"/>
    <line x1="230" y1="204" x2="222" y2="222" stroke="#059669" stroke-width="2"/><line x1="310" y1="204" x2="310" y2="224" stroke="#059669" stroke-width="2"/><line x1="380" y1="204" x2="386" y2="224" stroke="#059669" stroke-width="2"/>
    <!-- Labels -->
    <text x="90" y="75" text-anchor="middle" font-size="10" font-weight="800" fill="#047857">1. Vỏ nhầy (Bảo vệ/Bám)</text>
    <line x1="152" y1="72" x2="182" y2="82" stroke="#047857" stroke-width="1.5"/>
    <text x="88" y="112" text-anchor="middle" font-size="10" font-weight="800" fill="#b45309">2. Thành Peptidoglycan</text>
    <line x1="150" y1="110" x2="188" y2="110" stroke="#b45309" stroke-width="1.5"/>
    <text x="88" y="148" text-anchor="middle" font-size="10" font-weight="800" fill="#0369a1">3. Màng sinh chất</text>
    <line x1="142" y1="145" x2="198" y2="140" stroke="#0369a1" stroke-width="1.5"/>
    <text x="88" y="185" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">4. Ribosome 70S (Dịch mã)</text>
    <line x1="156" y1="182" x2="238" y2="154" stroke="#1e40af" stroke-width="1.5"/>
    <text x="315" y="246" text-anchor="middle" font-size="10.5" font-weight="800" fill="#dc2626">5. Vùng nhân (DNA vòng kép, không màng nhân)</text>
    <line x1="315" y1="232" x2="315" y2="155" stroke="#dc2626" stroke-width="1.5"/>
    <text x="530" y="232" text-anchor="middle" font-size="10" font-weight="800" fill="#7c3aed">6. Plasmid (DNA vòng nhỏ)</text>
    <line x1="485" y1="220" x2="432" y2="150" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="635" y="92" text-anchor="middle" font-size="10.5" font-weight="800" fill="#065f46">7. Roi / Tiên mao (Di chuyển)</text>
    <text x="455" y="45" text-anchor="middle" font-size="10" font-weight="800" fill="#059669">8. Lông / Nhung mao (Bám &amp; Tiếp hợp)</text>
  </svg>`,

  8: `<svg viewBox="0 0 760 280" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="280" rx="16" fill="#f0fdfa" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#0f766e">TẾ BÀO NHÂN THỰC: HỆ THỐNG NỘI MÀNG &amp; BÀO QUAN CHUYỂN HOÁ NĂNG LƯỢNG</text>
    <!-- Pathway Box Top: Endomembrane system -->
    <rect x="20" y="44" width="720" height="102" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
    <text x="380" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="#0f766e">CON ĐƯỜNG TỔNG HỢP &amp; VẬN CHUYỂN PROTEIN TIẾT (HỆ THỐNG NỘI MÀNG)</text>
    <g font-size="9.5" font-weight="700" text-anchor="middle">
      <rect x="35" y="76" width="110" height="54" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
      <text x="90" y="96" fill="#5b21b6">1. NHÂN TẾ BÀO</text><text x="90" y="114" font-size="8.5" fill="#4c1d95">DNA → Phiên mã mRNA</text>
      <text x="156" y="106" font-size="14" fill="#0d9488">→</text>
      <rect x="168" y="76" width="132" height="54" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <text x="234" y="96" fill="#0369a1">2. LƯỚI NỘI CHẤT HẠT</text><text x="234" y="114" font-size="8.5" fill="#075985">Ribosome tổng hợp/gấp cuộn</text>
      <text x="311" y="106" font-size="14" fill="#0d9488">→</text>
      <rect x="322" y="76" width="98" height="54" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="371" y="96" fill="#b45309">3. TÚI VẬN CHUYỂN</text><text x="371" y="114" font-size="8.5" fill="#92400e">Đưa đến bộ máy Golgi</text>
      <text x="431" y="106" font-size="14" fill="#0d9488">→</text>
      <rect x="442" y="76" width="130" height="54" rx="8" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
      <text x="507" y="96" fill="#be185d">4. BỘ MÁY GOLGI</text><text x="507" y="114" font-size="8.5" fill="#9d174d">Hoàn thiện, gắn nhãn, đóng gói</text>
      <text x="583" y="106" font-size="14" fill="#0d9488">→</text>
      <rect x="595" y="76" width="130" height="54" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
      <text x="660" y="96" fill="#065f46">5. TÚI TIẾT / MÀNG</text><text x="660" y="114" font-size="8.5" fill="#047857">Xuất bào hoặc tạo Lysosome</text>
    </g>
    <!-- Bottom Row: Mitochondria vs Chloroplast vs Plant/Animal diff -->
    <rect x="20" y="160" width="230" height="104" rx="12" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
    <text x="135" y="180" text-anchor="middle" font-size="11" font-weight="800" fill="#be123c">TI THỂ (HÔ HẤP TẾ BÀO)</text>
    <ellipse cx="72" cy="218" rx="36" ry="22" fill="#ffe4e6" stroke="#e11d48" stroke-width="2"/>
    <path d="M 45 218 Q 55 202, 62 218 T 78 218 T 96 218" fill="none" stroke="#be123c" stroke-width="2"/>
    <text x="168" y="205" text-anchor="middle" font-size="9" fill="#334155">• Màng kép, trong gấp mào</text>
    <text x="168" y="222" text-anchor="middle" font-size="9" fill="#334155">• Chất nền có DNA &amp; Ribosome</text>
    <text x="168" y="239" text-anchor="middle" font-size="9.5" font-weight="700" fill="#be123c">→ Tạo năng lượng ATP</text>

    <rect x="265" y="160" width="230" height="104" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
    <text x="380" y="180" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">LỤC LẠP (QUANG HỢP)</text>
    <ellipse cx="315" cy="218" rx="36" ry="22" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
    <rect x="298" y="208" width="14" height="6" rx="2" fill="#15803d"/><rect x="298" y="216" width="14" height="6" rx="2" fill="#15803d"/>
    <rect x="318" y="210" width="14" height="6" rx="2" fill="#15803d"/><rect x="318" y="218" width="14" height="6" rx="2" fill="#15803d"/>
    <text x="415" y="205" text-anchor="middle" font-size="9" fill="#334155">• Màng kép trơn, Thylakoid</text>
    <text x="415" y="222" text-anchor="middle" font-size="9" fill="#334155">• Chứa Diệp lục &amp; Stroma</text>
    <text x="415" y="239" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803d">→ Chuyển quang năng → Hoá năng</text>

    <rect x="510" y="160" width="230" height="104" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="625" y="180" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">PHÂN BIỆT THỰC VẬT – ĐỘNG VẬT</text>
    <text x="625" y="203" text-anchor="middle" font-size="9.5" fill="#15803d" font-weight="700">🌿 Thực vật: Thành Cellulose, Lục lạp,</text>
    <text x="625" y="218" text-anchor="middle" font-size="9" fill="#334155">Không bào trung tâm lớn, Cầu sinh chất</text>
    <text x="625" y="236" text-anchor="middle" font-size="9.5" fill="#0369a1" font-weight="700">🐾 Động vật: Không thành, có Trung thể,</text>
    <text x="625" y="251" text-anchor="middle" font-size="9" fill="#334155">Lysosome rõ, Chất nền ngoại bào (ECM)</text>
  </svg>`,

  9: `<svg viewBox="0 0 760 255" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="255" rx="16" fill="#f0fdf4" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#065f46">THỰC HÀNH: QUY TRÌNH LÀM TIÊU BẢN &amp; QUAN SÁT TẾ BÀO DƯỚI KÍNH HIỂN VI</text>
    <!-- Step 1: Cover slip 45 deg -->
    <rect x="24" y="46" width="225" height="188" rx="12" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
    <text x="136" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="#0f766e">1. KĨ THUẬT ĐẬY LAMEN 45°</text>
    <rect x="52" y="145" width="168" height="14" rx="3" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
    <ellipse cx="136" cy="142" rx="22" ry="6" fill="#38bdf8"/>
    <line x1="115" y1="142" x2="165" y2="95" stroke="#0f766e" stroke-width="3"/>
    <path d="M 145 142 A 28 28 0 0 0 136 122" fill="none" stroke="#e11d48" stroke-width="1.5"/>
    <text x="156" y="132" font-size="10" font-weight="800" fill="#e11d48">45°</text>
    <text x="136" y="182" text-anchor="middle" font-size="9.5" fill="#334155">Hạ từ từ lá kính (lamen) nghiêng 45°</text>
    <text x="136" y="198" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0f766e">→ Tránh tạo bọt khí trong tiêu bản</text>
    <text x="136" y="216" text-anchor="middle" font-size="9" fill="#64748b">Quan sát vật kính 10× trước → 40× sau</text>
    <!-- Step 2: Plant Onion Epidermis -->
    <rect x="268" y="46" width="225" height="188" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
    <text x="380" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">2. BIỂU BÌ VẢY HÀNH (THỰC VẬT)</text>
    <g stroke="#15803d" stroke-width="2.5" fill="#dcfce7">
      <polygon points="295,90 365,90 375,125 305,125"/>
      <polygon points="365,90 445,90 455,125 375,125"/>
      <polygon points="305,125 375,125 385,160 315,160"/>
      <polygon points="375,125 455,125 465,160 385,160"/>
    </g>
    <circle cx="335" cy="108" r="6" fill="#b45309"/><circle cx="410" cy="108" r="6" fill="#b45309"/>
    <circle cx="345" cy="142" r="6" fill="#b45309"/><circle cx="420" cy="142" r="6" fill="#b45309"/>
    <text x="380" y="182" text-anchor="middle" font-size="9.5" fill="#334155">• Nhuộm: Dung dịch Iodine (Lugol)</text>
    <text x="380" y="198" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803d">• Hình đa giác dài xếp sát nhau</text>
    <text x="380" y="216" text-anchor="middle" font-size="9" fill="#64748b">Nhìn rõ: Thành cellulose, Nhân, Tế bào chất</text>
    <!-- Step 3: Animal Cheek Cell -->
    <rect x="512" y="46" width="225" height="188" rx="12" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
    <text x="624" y="68" text-anchor="middle" font-size="11" font-weight="800" fill="#1d4ed8">3. NIÊM MẠC MIỆNG (ĐỘNG VẬT)</text>
    <ellipse cx="585" cy="118" rx="34" ry="24" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <circle cx="585" cy="118" r="8" fill="#1e40af"/>
    <ellipse cx="662" cy="136" rx="32" ry="22" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <circle cx="662" cy="136" r="8" fill="#1e40af"/>
    <text x="624" y="182" text-anchor="middle" font-size="9.5" fill="#334155">• Nhuộm: Xanh Methylene + NaCl 0,9%</text>
    <text x="624" y="198" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1d4ed8">• Hình tròn/bầu dục mềm mại, rời rạc</text>
    <text x="624" y="216" text-anchor="middle" font-size="9" fill="#64748b">Không có thành tế bào; Nhân rõ ở trung tâm</text>
  </svg>`,

  10: `<svg viewBox="0 0 760 280" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="280" rx="16" fill="#f0f9ff" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#0369a1">CÁC PHƯƠNG THỨC VẬN CHUYỂN QUA MÀNG &amp; 3 MÔI TRƯỜNG THẨM THẤU</text>
    <!-- Top Section: Transport Mechanisms -->
    <rect x="20" y="42" width="720" height="114" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <!-- Membrane bar -->
    <rect x="35" y="88" width="690" height="24" rx="4" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
    <text x="380" y="104" text-anchor="middle" font-size="9.5" font-weight="800" fill="#92400e">LỚP KÉP PHOSPHOLIPID (MÀNG SINH CHẤT KHẢM ĐỘNG – THẤM CHỌN LỌC)</text>
    <!-- 1. Simple diffusion -->
    <text x="110" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#059669">1. Khuếch tán đơn giản</text>
    <text x="110" y="75" text-anchor="middle" font-size="8.5" fill="#334155">O₂, CO₂, phân tử kị nước nhỏ</text>
    <line x1="110" y1="78" x2="110" y2="128" stroke="#059669" stroke-width="2.5"/><polygon points="110,132 105,123 115,123" fill="#059669"/>
    <text x="110" y="145" text-anchor="middle" font-size="8.5" font-weight="700" fill="#059669">Xuôi chiều nồng độ (0 ATP)</text>
    <!-- 2. Facilitated diffusion -->
    <rect x="268" y="82" width="24" height="36" rx="6" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
    <text x="280" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#0284c7">2. Khuếch tán tăng cường</text>
    <text x="280" y="75" text-anchor="middle" font-size="8.5" fill="#334155">Ion, Glucose, H₂O (Aquaporin)</text>
    <line x1="280" y1="78" x2="280" y2="128" stroke="#0284c7" stroke-width="2.5"/><polygon points="280,132 275,123 285,123" fill="#0284c7"/>
    <text x="280" y="145" text-anchor="middle" font-size="8.5" font-weight="700" fill="#0284c7">Qua Kênh / Chất tải (0 ATP)</text>
    <!-- 3. Active transport -->
    <rect x="458" y="82" width="28" height="36" rx="6" fill="#f43f5e" stroke="#be123c" stroke-width="1.5"/>
    <text x="472" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#e11d48">3. Vận chuyển chủ động</text>
    <text x="472" y="75" text-anchor="middle" font-size="8.5" fill="#334155">Bơm Na⁺–K⁺, hấp thu khoáng</text>
    <line x1="472" y1="128" x2="472" y2="78" stroke="#e11d48" stroke-width="2.5"/><polygon points="472,74 467,83 477,83" fill="#e11d48"/>
    <text x="472" y="145" text-anchor="middle" font-size="8.5" font-weight="800" fill="#e11d48">Ngược gradient + CẦN ATP ⚡</text>
    <!-- 4. Endo/Exocytosis -->
    <text x="640" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#7c3aed">4. Nhập bào &amp; Xuất bào</text>
    <text x="640" y="75" text-anchor="middle" font-size="8.5" fill="#334155">Thực bào, Ẩm bào, Túi tiết</text>
    <circle cx="640" cy="122" r="10" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2"/>
    <text x="640" y="145" text-anchor="middle" font-size="8.5" font-weight="800" fill="#7c3aed">Biến dạng màng + CẦN ATP ⚡</text>

    <!-- Bottom Section: 3 Osmotic Environments -->
    <g transform="translate(20, 168)" font-size="9.5" text-anchor="middle">
      <rect x="0" y="0" width="230" height="96" rx="10" fill="#ffffff" stroke="#ef4444" stroke-width="1.8"/>
      <text x="115" y="20" font-weight="800" fill="#dc2626">MÔI TRƯỜNG ƯU TRƯƠNG (C_ngoài &gt; C_trong)</text>
      <text x="115" y="40" fill="#334155">Nước đi ra ngoài → Tế bào mất nước</text>
      <text x="115" y="60" font-weight="700" fill="#dc2626">• Hồng cầu: Co rúm / Nhăn nheo</text>
      <text x="115" y="78" font-weight="700" fill="#b45309">• Thực vật: Co nguyên sinh (Tách màng)</text>

      <rect x="245" y="0" width="230" height="96" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.8"/>
      <text x="360" y="20" font-weight="800" fill="#059669">MÔI TRƯỜNG ĐẲNG TRƯƠNG (C_ngoài = C_trong)</text>
      <text x="360" y="40" fill="#334155">Nước ra và vào tế bào cân bằng nhau</text>
      <text x="360" y="60" font-weight="700" fill="#059669">• Hồng cầu: Hình đĩa lõm 2 mặt bình thường</text>
      <text x="360" y="78" font-weight="700" fill="#059669">• Thực vật: Trạng thái bình thường</text>

      <rect x="490" y="0" width="230" height="96" rx="10" fill="#ffffff" stroke="#0284c7" stroke-width="1.8"/>
      <text x="605" y="20" font-weight="800" fill="#0284c7">MÔI TRƯỜNG NHƯỢC TRƯƠNG (C_ngoài &lt; C_trong)</text>
      <text x="605" y="40" fill="#334155">Nước thẩm thấu đi vào trong tế bào</text>
      <text x="605" y="60" font-weight="700" fill="#e11d48">• Hồng cầu: Căng phồng → Vỡ (Tan máu)</text>
      <text x="605" y="78" font-weight="700" fill="#0284c7">• Thực vật: Trương nước (Thành giữ không vỡ)</text>
    </g>
  </svg>`,

  11: `<svg viewBox="0 0 760 255" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="255" rx="16" fill="#fdf4ff" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#86198f">THÍ NGHIỆM CO VÀ PHẢN CO NGUYÊN SINH Ở TẾ BÀO BIỂU BÌ LÁ THÀI LÀI TÍA</text>
    <!-- State 1: Normal -->
    <g transform="translate(22, 46)">
      <rect x="0" y="0" width="215" height="190" rx="12" fill="#ffffff" stroke="#a21caf" stroke-width="2"/>
      <text x="107" y="22" text-anchor="middle" font-size="10.5" font-weight="800" fill="#86198f">1. TẾ BÀO BÌNH THƯỜNG</text>
      <polygon points="45,45 170,45 180,115 35,115" fill="#f5d0fe" stroke="#15803d" stroke-width="4"/>
      <ellipse cx="107" cy="80" rx="55" ry="26" fill="#d946ef" opacity="0.75"/>
      <text x="107" y="84" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">Không bào tím đầy</text>
      <text x="107" y="138" text-anchor="middle" font-size="9.5" fill="#334155">Màng sinh chất áp sát thành</text>
      <text x="107" y="156" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803d">• Khí khổng: MỞ (Đủ sức trương)</text>
      <text x="107" y="174" text-anchor="middle" font-size="8.5" fill="#64748b">Môi trường nước cất ban đầu</text>
    </g>
    <!-- Arrow 1 -->
    <text x="258" y="125" text-anchor="middle" font-size="9.5" font-weight="800" fill="#dc2626">+ NaCl</text>
    <text x="258" y="142" text-anchor="middle" font-size="18" font-weight="900" fill="#dc2626">→</text>
    <text x="258" y="156" text-anchor="middle" font-size="8.5" fill="#dc2626">(Ưu trương)</text>
    <!-- State 2: Plasmolysis -->
    <g transform="translate(280, 46)">
      <rect x="0" y="0" width="215" height="190" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="2.5"/>
      <text x="107" y="22" text-anchor="middle" font-size="10.5" font-weight="800" fill="#dc2626">2. CO NGUYÊN SINH</text>
      <polygon points="45,45 170,45 180,115 35,115" fill="#f8fafc" stroke="#15803d" stroke-width="4"/>
      <ellipse cx="107" cy="80" rx="28" ry="16" fill="#a21caf"/>
      <text x="107" y="83" text-anchor="middle" font-size="8.5" font-weight="700" fill="#fff">Co tròn</text>
      <text x="107" y="138" text-anchor="middle" font-size="9.5" fill="#334155">Nước thoát ra → Màng tách khỏi thành</text>
      <text x="107" y="156" text-anchor="middle" font-size="9.5" font-weight="700" fill="#dc2626">• Khí khổng: ĐÓNG (Mất sức trương)</text>
      <text x="107" y="174" text-anchor="middle" font-size="8.5" fill="#64748b">Màu tím đậm tập trung ở giữa</text>
    </g>
    <!-- Arrow 2 -->
    <text x="516" y="125" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0284c7">+ H₂O cất</text>
    <text x="516" y="142" text-anchor="middle" font-size="18" font-weight="900" fill="#0284c7">→</text>
    <text x="516" y="156" text-anchor="middle" font-size="8.5" fill="#0284c7">(Nhược trương)</text>
    <!-- State 3: Deplasmolysis -->
    <g transform="translate(536, 46)">
      <rect x="0" y="0" width="202" height="190" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <text x="101" y="22" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0369a1">3. PHẢN CO NGUYÊN SINH</text>
      <polygon points="40,45 162,45 172,115 30,115" fill="#f5d0fe" stroke="#15803d" stroke-width="4"/>
      <ellipse cx="101" cy="80" rx="52" ry="25" fill="#d946ef" opacity="0.75"/>
      <text x="101" y="84" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">Trương nước lại</text>
      <text x="101" y="138" text-anchor="middle" font-size="9.5" fill="#334155">Nước thẩm thấu ngược vào tế bào</text>
      <text x="101" y="156" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">• Khí khổng: MỞ TRỞ LẠI</text>
      <text x="101" y="174" text-anchor="middle" font-size="8.5" fill="#e11d48">Nếu tế bào chết → Không phản co</text>
    </g>
  </svg>`,

  12: `<svg viewBox="0 0 760 270" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="270" rx="16" fill="#f0fdfa" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#0f766e">4 KIỂU TRUYỀN TIN GIỮA CÁC TẾ BÀO &amp; 3 GIAI ĐOẠN TRUYỀN TIN TẾ BÀO</text>
    <!-- Top: 4 Modes of Cell Signaling -->
    <g transform="translate(20, 42)" font-size="9.5" text-anchor="middle">
      <rect x="0" y="0" width="170" height="68" rx="10" fill="#ffffff" stroke="#0d9488" stroke-width="1.8"/>
      <text x="85" y="20" font-weight="800" fill="#0f766e">1. Truyền tin trực tiếp</text>
      <text x="85" y="38" fill="#334155">Qua cầu sinh chất (TV) /</text>
      <text x="85" y="53" fill="#0d9488" font-weight="700">Mối nối hở (ĐV) / Tiếp xúc màng</text>

      <rect x="183" y="0" width="170" height="68" rx="10" fill="#ffffff" stroke="#0284c7" stroke-width="1.8"/>
      <text x="268" y="20" font-weight="800" fill="#0369a1">2. Truyền tin cận tiết</text>
      <text x="268" y="38" fill="#334155">Khuếch tán dịch ngoại bào</text>
      <text x="268" y="53" fill="#0284c7" font-weight="700">Đến các tế bào đích lân cận</text>

      <rect x="366" y="0" width="170" height="68" rx="10" fill="#ffffff" stroke="#7c3aed" stroke-width="1.8"/>
      <text x="451" y="20" font-weight="800" fill="#6d28d9">3. Truyền tin qua Synapse</text>
      <text x="451" y="38" fill="#334155">Chất dẫn truyền thần kinh</text>
      <text x="451" y="53" fill="#7c3aed" font-weight="700">Qua khe synapse thần kinh – cơ</text>

      <rect x="549" y="0" width="171" height="68" rx="10" fill="#ffffff" stroke="#e11d48" stroke-width="1.8"/>
      <text x="634" y="20" font-weight="800" fill="#be123c">4. Truyền tin nội tiết (Xa)</text>
      <text x="634" y="38" fill="#334155">Hormone theo đường máu</text>
      <text x="634" y="53" fill="#e11d48" font-weight="700">Đến tế bào đích ở xa trong cơ thể</text>
    </g>
    <!-- Bottom: 3 Stages of Signal Transduction -->
    <rect x="20" y="124" width="720" height="128" rx="14" fill="#ffffff" stroke="#059669" stroke-width="2"/>
    <text x="380" y="146" text-anchor="middle" font-size="11.5" font-weight="800" fill="#065f46">3 GIAI ĐOẠN QUÁ TRÌNH TRUYỀN TIN TẾ BÀO</text>
    <!-- Stage 1 -->
    <rect x="40" y="160" width="195" height="76" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="137" y="180" text-anchor="middle" font-size="10.5" font-weight="800" fill="#047857">GIAI ĐOẠN 1: TIẾP NHẬN</text>
    <text x="137" y="198" text-anchor="middle" font-size="9" fill="#334155">Phân tử tín hiệu gắn đặc hiệu vào</text>
    <text x="137" y="213" text-anchor="middle" font-size="9" font-weight="700" fill="#065f46">Thụ thể màng (ưa nước) hoặc</text>
    <text x="137" y="227" text-anchor="middle" font-size="9" font-weight="700" fill="#065f46">Thụ thể nội bào (Steroid kị nước)</text>
    <text x="255" y="204" font-size="18" font-weight="900" fill="#059669">→</text>
    <!-- Stage 2 -->
    <rect x="275" y="160" width="210" height="76" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
    <text x="380" y="180" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0369a1">GIAI ĐOẠN 2: TRUYỀN TÍN HIỆU</text>
    <text x="380" y="198" text-anchor="middle" font-size="9" fill="#334155">Thụ thể biến đổi cấu hình → Chuỗi</text>
    <text x="380" y="213" text-anchor="middle" font-size="9" font-weight="700" fill="#0369a1">phosphoryl hoá &amp; chất truyền tin thứ 2</text>
    <text x="380" y="227" text-anchor="middle" font-size="9" font-weight="700" fill="#e11d48">(cAMP, Ca²⁺) → KHUẾCH ĐẠI TÍN HIỆU</text>
    <text x="505" y="204" font-size="18" font-weight="900" fill="#0284c7">→</text>
    <!-- Stage 3 -->
    <rect x="525" y="160" width="195" height="76" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <text x="622" y="180" text-anchor="middle" font-size="10.5" font-weight="800" fill="#b45309">GIAI ĐOẠN 3: ĐÁP ỨNG</text>
    <text x="622" y="198" text-anchor="middle" font-size="9" fill="#334155">Khởi động đáp ứng tế bào đích:</text>
    <text x="622" y="213" text-anchor="middle" font-size="9" font-weight="700" fill="#b45309">• Phiên mã biểu hiện gene trong nhân</text>
    <text x="622" y="227" text-anchor="middle" font-size="9" font-weight="700" fill="#b45309">• Hoạt hoá enzyme / Phân chia / Co cơ</text>
  </svg>`,

  13: `<svg viewBox="0 0 760 275" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="760" height="275" rx="16" fill="#fffbeb" class="dark:fill-slate-900"/>
    <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="#b45309">CHU TRÌNH ĐỒNG TIỀN NĂNG LƯỢNG ATP &amp; CƠ CHẾ XÚC TÁC – ĐIỀU HOÀ ENZYME</text>
    <!-- Left Box: ATP - ADP Cycle -->
    <rect x="20" y="44" width="340" height="212" rx="12" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
    <text x="190" y="66" text-anchor="middle" font-size="11" font-weight="800" fill="#b45309">1. CHU TRÌNH NĂNG LƯỢNG ATP ⇄ ADP</text>
    <rect x="125" y="80" width="130" height="36" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <text x="190" y="96" text-anchor="middle" font-size="10.5" font-weight="800" fill="#b45309">ATP (3 nhóm P)</text>
    <text x="190" y="110" text-anchor="middle" font-size="8.5" fill="#92400e">Adenine + Ribose + P~P~P</text>
    <!-- Arrows -->
    <path d="M 260 98 Q 315 135, 260 172" fill="none" stroke="#dc2626" stroke-width="2.5"/>
    <polygon points="258,172 267,166 265,176" fill="#dc2626"/>
    <text x="305" y="132" text-anchor="middle" font-size="8.5" font-weight="800" fill="#dc2626">Thuỷ phân</text>
    <text x="305" y="145" text-anchor="middle" font-size="8" fill="#334155">Cung cấp NL cho</text>
    <text x="305" y="157" text-anchor="middle" font-size="8" font-weight="700" fill="#dc2626">Đồng hoá, Bơm, Co cơ</text>

    <path d="M 120 172 Q 65 135, 120 98" fill="none" stroke="#059669" stroke-width="2.5"/>
    <polygon points="122,98 113,104 115,94" fill="#059669"/>
    <text x="72" y="132" text-anchor="middle" font-size="8.5" font-weight="800" fill="#059669">Tổng hợp</text>
    <text x="72" y="145" text-anchor="middle" font-size="8" fill="#334155">Năng lượng từ</text>
    <text x="72" y="157" text-anchor="middle" font-size="8" font-weight="700" fill="#059669">Dị hoá (Hô hấp/QH)</text>

    <rect x="125" y="160" width="130" height="34" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
    <text x="190" y="181" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0369a1">ADP + Pᵢ + Năng lượng</text>
    <text x="190" y="218" text-anchor="middle" font-size="9" fill="#334155">Liên kết cao năng P~P ngoài cùng dễ đứt</text>
    <text x="190" y="236" text-anchor="middle" font-size="9" font-weight="700" fill="#b45309">ATP không dùng dự trữ dài hạn, tái tạo liên tục</text>

    <!-- Right Box: Enzyme & Feedback Inhibition -->
    <rect x="378" y="44" width="362" height="212" rx="12" fill="#ffffff" stroke="#059669" stroke-width="2"/>
    <text x="559" y="66" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">2. CƠ CHẾ XÚC TÁC ENZYME &amp; ỨC CHẾ NGƯỢC</text>
    <rect x="394" y="80" width="330" height="58" rx="8" fill="#ecfdf5" stroke="#10b981"/>
    <text x="559" y="100" text-anchor="middle" font-size="10" font-weight="800" fill="#047857">E (Trung tâm hoạt động) + Cơ chất (S) ⇄ Phức hợp E–S → E + Sản phẩm (P)</text>
    <text x="559" y="118" text-anchor="middle" font-size="9" fill="#334155">Giảm năng lượng hoạt hoá E_a • Đặc hiệu cao • Nhiệt/pH quá cao gây biến tính</text>
    <!-- Feedback Inhibition Diagram -->
    <text x="559" y="158" text-anchor="middle" font-size="10" font-weight="800" fill="#be123c">ĐIỀU HOÀ CHUYỂN HOÁ BẰNG ỨC CHẾ NGƯỢC (FEEDBACK INHIBITION)</text>
    <g font-size="9.5" font-weight="700" text-anchor="middle">
      <rect x="398" y="170" width="66" height="32" rx="6" fill="#e0f2fe" stroke="#0284c7"/><text x="431" y="190" fill="#0369a1">Chất đầu A</text>
      <text x="482" y="182" font-size="8.5" fill="#059669">E₁</text><text x="482" y="194" font-size="13" fill="#059669">→</text>
      <rect x="500" y="170" width="54" height="32" rx="6" fill="#f1f5f9" stroke="#64748b"/><text x="527" y="190" fill="#334155">Chất B</text>
      <text x="570" y="182" font-size="8.5" fill="#059669">E₂</text><text x="570" y="194" font-size="13" fill="#059669">→</text>
      <rect x="586" y="170" width="54" height="32" rx="6" fill="#f1f5f9" stroke="#64748b"/><text x="613" y="190" fill="#334155">Chất C</text>
      <text x="655" y="182" font-size="8.5" fill="#059669">E₃</text><text x="655" y="194" font-size="13" fill="#059669">→</text>
      <rect x="670" y="170" width="56" height="32" rx="6" fill="#ffe4e6" stroke="#e11d48"/><text x="698" y="190" fill="#be123c">Đích P</text>
    </g>
    <path d="M 698 202 L 698 232 L 482 232 L 482 200" fill="none" stroke="#e11d48" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="590" y="246" text-anchor="middle" font-size="8.5" font-weight="700" fill="#be123c">Khi sản phẩm P dư thừa → Quay lại ức chế dị lập thể Enzyme E₁</text>
  </svg>`
};

module.exports = diagrams;
