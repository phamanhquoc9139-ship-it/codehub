// congnghe9_diagrams.js - Sơ đồ vector SVG trực quan Công nghệ 9

const congnghe9Diagrams = {
  // Sơ đồ 1: Cơ cấu hệ thống giáo dục quốc dân & Phân luồng sau THCS (Bài 2)
  giaoDucPhanLuong: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/30 border border-indigo-200 dark:border-indigo-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-sitemap"></i> Sơ đồ trực quan: Cơ cấu Hệ thống Giáo dục Quốc dân &amp; 3 Hướng Phân luồng sau THCS
      </div>
      <svg viewBox="0 0 650 240" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="240" rx="12" fill="#ffffff" fill-opacity="0.85" stroke="#c7d2fe" stroke-width="1.5"/>
        
        <!-- Nấc thang cơ sở: Tốt nghiệp THCS -->
        <g transform="translate(20, 95)">
          <rect width="135" height="50" rx="8" fill="#4f46e5" stroke="#3730a3"/>
          <text x="67" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">TỐT NGHIỆP THCS</text>
          <text x="67" y="40" text-anchor="middle" font-size="9.5" fill="#e0e7ff">(Hoàn thành Lớp 9)</text>
        </g>
        
        <!-- Mũi tên phân luồng 3 nhánh -->
        <path d="M 155 120 L 195 120 M 195 120 L 220 50 M 195 120 L 220 120 M 195 120 L 220 190" fill="none" stroke="#6366f1" stroke-width="2.5"/>
        
        <!-- Nhánh 1: Trung học phổ thông (THPT) -->
        <g transform="translate(225, 25)">
          <rect width="210" height="50" rx="8" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
          <text x="105" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#312e81">1. HỌC THPT (Lớp 10–12)</text>
          <text x="105" y="38" text-anchor="middle" font-size="9.5" fill="#4338ca">Học tập văn hóa, chọn môn theo định hướng</text>
        </g>
        
        <!-- Nhánh 2: Mô hình 9+ & Giáo dục nghề nghiệp -->
        <g transform="translate(225, 95)">
          <rect width="210" height="50" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
          <text x="105" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">2. MÔ HÌNH 9+ (HỌC NGHỀ)</text>
          <text x="105" y="38" text-anchor="middle" font-size="9.5" fill="#047857">Học GDTX cấp THPT + Nghề Trung cấp (2–3 năm)</text>
        </g>
        
        <!-- Nhánh 3: Giáo dục thường xuyên / Sơ cấp -->
        <g transform="translate(225, 165)">
          <rect width="210" height="50" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
          <text x="105" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">3. GDTX &amp; HỌC SƠ CẤP NGHỀ</text>
          <text x="105" y="38" text-anchor="middle" font-size="9.5" fill="#b45309">Sơ cấp (3–11 tháng) hoặc tham gia lao động</text>
        </g>
        
        <!-- Mũi tên dẫn lên bậc học cao hơn -->
        <path d="M 435 50 L 465 50 M 435 120 L 465 120" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3,3"/>
        
        <!-- Khối Đích: Cao đẳng & Đại học -->
        <g transform="translate(470, 45)">
          <rect width="165" height="150" rx="8" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
          <text x="82" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">BẬC HỌC CAO HƠN</text>
          <line x1="15" y1="34" x2="150" y2="34" stroke="#cbd5e1"/>
          
          <rect x="15" y="42" width="135" height="26" rx="4" fill="#dbeafe"/>
          <text x="82" y="59" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">ĐẠI HỌC (3–5 năm)</text>
          
          <rect x="15" y="74" width="135" height="26" rx="4" fill="#ccfbf1"/>
          <text x="82" y="91" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">CAO ĐẲNG (2–3 năm)</text>
          
          <rect x="15" y="106" width="135" height="32" rx="4" fill="#f1f5f9"/>
          <text x="82" y="120" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#334155">THẠC SĨ (1–2 năm)</text>
          <text x="82" y="132" text-anchor="middle" font-size="8.5" fill="#64748b">TIẾN SĨ (3–4 năm)</text>
        </g>
      </svg>
    </div>
  `,

  // Sơ đồ 2: Mật mã Holland RIASEC 6 nhóm tính cách (Bài 4)
  hollandRIASEC: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-shapes"></i> Mô hình Lục giác Mật mã Holland (RIASEC — 6 Nhóm Tính cách &amp; Nghề nghiệp)
      </div>
      <svg viewBox="0 0 650 260" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="260" rx="12" fill="#ffffff" fill-opacity="0.85" stroke="#fed7aa" stroke-width="1.5"/>
        
        <!-- Nhóm R: Kĩ thuật (Realistic) -->
        <g transform="translate(20, 20)">
          <rect width="190" height="100" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
          <text x="95" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#991b1b">R • KĨ THUẬT (Realistic)</text>
          <text x="95" y="42" text-anchor="middle" font-size="9.5" fill="#7f1d1d">• Thực tế, độc lập, khéo léo</text>
          <text x="95" y="58" text-anchor="middle" font-size="9.5" fill="#7f1d1d">• Thích máy móc, công cụ, lắp ráp</text>
          <rect x="15" y="72" width="160" height="20" rx="4" fill="#fee2e2"/>
          <text x="95" y="85" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">Cơ khí, Điện tử, Xây dựng, Lái máy</text>
        </g>
        
        <!-- Nhóm I: Nghiên cứu (Investigative) -->
        <g transform="translate(230, 20)">
          <rect width="190" height="100" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="95" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1e40af">I • NGHIÊN CỨU (Investigative)</text>
          <text x="95" y="42" text-anchor="middle" font-size="9.5" fill="#1e3a8a">• Thích khám phá, tư duy logic</text>
          <text x="95" y="58" text-anchor="middle" font-size="9.5" fill="#1e3a8a">• Phân tích dữ liệu, tổng hợp</text>
          <rect x="15" y="72" width="160" height="20" rx="4" fill="#dbeafe"/>
          <text x="95" y="85" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">Lập trình viên, Nhà khoa học, Kĩ sư</text>
        </g>
        
        <!-- Nhóm A: Nghệ thuật (Artistic) -->
        <g transform="translate(440, 20)">
          <rect width="190" height="100" rx="8" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
          <text x="95" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#6b21a8">A • NGHỆ THUẬT (Artistic)</text>
          <text x="95" y="42" text-anchor="middle" font-size="9.5" fill="#581c87">• Giàu tưởng tượng, sáng tạo tự do</text>
          <text x="95" y="58" text-anchor="middle" font-size="9.5" fill="#581c87">• Yêu cái đẹp, hình ảnh, âm thanh</text>
          <rect x="15" y="72" width="160" height="20" rx="4" fill="#f3e8ff"/>
          <text x="95" y="85" text-anchor="middle" font-size="9" font-weight="bold" fill="#7e22ce">Thiết kế đồ họa, Kiến trúc sư, UI/UX</text>
        </g>
        
        <!-- Nhóm S: Xã hội (Social) -->
        <g transform="translate(20, 140)">
          <rect width="190" height="100" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
          <text x="95" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#15803d">S • XÃ HỘI (Social)</text>
          <text x="95" y="42" text-anchor="middle" font-size="9.5" fill="#14532d">• Thích giúp đỡ, chia sẻ, lắng nghe</text>
          <text x="95" y="58" text-anchor="middle" font-size="9.5" fill="#14532d">• Giao tiếp, hoạt động cộng đồng</text>
          <rect x="15" y="72" width="160" height="20" rx="4" fill="#dcfce7"/>
          <text x="95" y="85" text-anchor="middle" font-size="9" font-weight="bold" fill="#16a34a">Giáo viên công nghệ, Chăm sóc KH</text>
        </g>
        
        <!-- Nhóm E: Quản lí (Enterprising) -->
        <g transform="translate(230, 140)">
          <rect width="190" height="100" rx="8" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
          <text x="95" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#c2410c">E • QUẢN LÍ (Enterprising)</text>
          <text x="95" y="42" text-anchor="middle" font-size="9.5" fill="#7c2d12">• Quyết đoán, dám chịu trách nhiệm</text>
          <text x="95" y="58" text-anchor="middle" font-size="9.5" fill="#7c2d12">• Thuyết phục, thích đặt mục tiêu cao</text>
          <rect x="15" y="72" width="160" height="20" rx="4" fill="#ffedd5"/>
          <text x="95" y="85" text-anchor="middle" font-size="9" font-weight="bold" fill="#ea580c">Quản trị dự án CNTT, Giám đốc KD</text>
        </g>
        
        <!-- Nhóm C: Nghiệp vụ (Conventional) -->
        <g transform="translate(440, 140)">
          <rect width="190" height="100" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
          <text x="95" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#334155">C • NGHIỆP VỤ (Conventional)</text>
          <text x="95" y="42" text-anchor="middle" font-size="9.5" fill="#1e293b">• Tỉ mỉ, cẩn thận, đáng tin cậy</text>
          <text x="95" y="58" text-anchor="middle" font-size="9.5" fill="#1e293b">• Tuân thủ quy trình, thích số liệu</text>
          <rect x="15" y="72" width="160" height="20" rx="4" fill="#e2e8f0"/>
          <text x="95" y="85" text-anchor="middle" font-size="9" font-weight="bold" fill="#475569">Quản trị CSDL, Kế toán, Kiểm thử phần mềm</text>
        </g>
      </svg>
    </div>
  `,

  // Sơ đồ 3: Cây nghề nghiệp (Bài 4)
  cayNgheNghiep: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-tree"></i> Lí thuyết Cây Nghề Nghiệp: Bắt đầu từ GỐC RỄ để gặt hái QUẢ NGỌT
      </div>
      <svg viewBox="0 0 650 250" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="250" rx="12" fill="#ffffff" fill-opacity="0.85" stroke="#a7f3d0" stroke-width="1.5"/>
        
        <!-- Quả ngọt (Tán cây - Phía trên) -->
        <g transform="translate(140, 15)">
          <path d="M 50 70 C 10 70, 0 30, 40 10 C 70 -10, 140 -10, 180 10 C 220 0, 260 30, 240 60 C 270 90, 230 110, 190 100 C 160 120, 80 120, 50 100 Z" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
          <text x="135" y="25" text-anchor="middle" font-size="12" font-weight="900" fill="#15803d">QUẢ NGỌT (ĐIỀU MONG MUỐN)</text>
          
          <!-- Các quả ngọt -->
          <circle cx="55" cy="55" r="18" fill="#f87171"/>
          <text x="55" y="58" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#fff">Thu nhập cao</text>
          
          <circle cx="110" cy="80" r="18" fill="#fb923c"/>
          <text x="110" y="83" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#fff">Việc làm tốt</text>
          
          <circle cx="165" cy="52" r="18" fill="#eab308"/>
          <text x="165" y="55" text-anchor="middle" font-size="8" font-weight="bold" fill="#fff">Môi trường</text>
          
          <circle cx="215" cy="78" r="18" fill="#a855f7"/>
          <text x="215" y="81" text-anchor="middle" font-size="8" font-weight="bold" fill="#fff">Được tôn trọng</text>
        </g>
        
        <!-- Thân cây -->
        <path d="M 260 115 L 260 170 C 255 178, 245 185, 235 190 L 290 190 C 280 185, 270 178, 268 170 L 268 115 Z" fill="#b45309"/>
        
        <!-- Bộ Gốc Rễ (Nền tảng vững chắc - Phía dưới) -->
        <g transform="translate(40, 175)">
          <rect width="570" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
          <text x="285" y="20" text-anchor="middle" font-size="12" font-weight="900" fill="#78350f">GỐC RỄ BẢN THÂN (CĂN CỨ QUYẾT ĐỊNH CỐT LÕI)</text>
          
          <g transform="translate(15, 28)">
            <rect x="0" y="0" width="125" height="24" rx="4" fill="#fbbf24"/>
            <text x="62" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">1. NĂNG LỰC / GIỎI</text>
            
            <rect x="140" y="0" width="125" height="24" rx="4" fill="#fbbf24"/>
            <text x="202" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">2. SỞ THÍCH / ĐAM MÊ</text>
            
            <rect x="280" y="0" width="125" height="24" rx="4" fill="#fbbf24"/>
            <text x="342" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">3. CÁ TÍNH PHÙ HỢP</text>
            
            <rect x="420" y="0" width="120" height="24" rx="4" fill="#fbbf24"/>
            <text x="480" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">4. GIÁ TRỊ NGHỀ</text>
          </g>
        </g>
      </svg>
    </div>
  `,

  // Sơ đồ 4: Triết lí Ikigai 4 vòng tròn (Bài 4)
  ikigai: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/40 dark:to-pink-950/30 border border-rose-200 dark:border-rose-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-bullseye"></i> Triết lí Ikigai: 4 Câu hỏi giao thoa tìm nghề lí tưởng và ý nghĩa cuộc đời
      </div>
      <svg viewBox="0 0 650 250" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="250" rx="12" fill="#ffffff" fill-opacity="0.85" stroke="#fecdd3" stroke-width="1.5"/>
        
        <!-- Vòng 1: Điều bạn THÍCH (Trái) -->
        <circle cx="160" cy="125" r="75" fill="#f43f5e" fill-opacity="0.15" stroke="#e11d48" stroke-width="2"/>
        <text x="130" y="80" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#be123c">ĐIỀU BẠN</text>
        <text x="130" y="95" text-anchor="middle" font-size="11" font-weight="900" fill="#9f1239">THÍCH</text>
        
        <!-- Vòng 2: Điều bạn GIỎI (Trên) -->
        <circle cx="250" cy="90" r="75" fill="#3b82f6" fill-opacity="0.15" stroke="#2563eb" stroke-width="2"/>
        <text x="250" y="45" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">ĐIỀU BẠN</text>
        <text x="250" y="60" text-anchor="middle" font-size="11" font-weight="900" fill="#1e40af">GIỎI</text>
        
        <!-- Vòng 3: Xã hội CẦN (Phải) -->
        <circle cx="340" cy="125" r="75" fill="#10b981" fill-opacity="0.15" stroke="#059669" stroke-width="2"/>
        <text x="370" y="80" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">XÃ HỘI</text>
        <text x="370" y="95" text-anchor="middle" font-size="11" font-weight="900" fill="#065f46">CẦN</text>
        
        <!-- Vòng 4: Được TRẢ CÔNG (Dưới) -->
        <circle cx="250" cy="160" r="75" fill="#f59e0b" fill-opacity="0.15" stroke="#d97706" stroke-width="2"/>
        <text x="250" y="210" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b45309">ĐƯỢC</text>
        <text x="250" y="225" text-anchor="middle" font-size="11" font-weight="900" fill="#92400e">TRẢ CÔNG</text>
        
        <!-- Điểm giao thoa Tâm điểm: IKIGAI -->
        <circle cx="250" cy="125" r="26" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
        <text x="250" y="129" text-anchor="middle" font-size="10" font-weight="900" fill="#78350f">IKIGAI</text>
        
        <!-- Bảng chú giải 4 vùng giao thoa bên phải -->
        <g transform="translate(440, 25)">
          <rect width="190" height="200" rx="8" fill="#fff1f2" stroke="#fda4af"/>
          <text x="95" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#9f1239">4 VÙNG GIAO THOA</text>
          <line x1="15" y1="32" x2="175" y2="32" stroke="#fecdd3"/>
          
          <text x="15" y="55" font-size="10" font-weight="bold" fill="#be123c">• Đam mê (Passion):</text>
          <text x="25" y="70" font-size="9" fill="#4c0519">Giao giữa Thích &amp; Giỏi</text>
          
          <text x="15" y="95" font-size="10" font-weight="bold" fill="#1d4ed8">• Chuyên môn (Profession):</text>
          <text x="25" y="110" font-size="9" fill="#172554">Giao giữa Giỏi &amp; Có tiền</text>
          
          <text x="15" y="135" font-size="10" font-weight="bold" fill="#b45309">• Sự nghiệp (Vocation):</text>
          <text x="25" y="150" font-size="9" fill="#451a03">Giao giữa Có tiền &amp; Xã hội cần</text>
          
          <text x="15" y="175" font-size="10" font-weight="bold" fill="#047857">• Sứ mệnh (Mission):</text>
          <text x="25" y="190" font-size="9" fill="#022c22">Giao giữa Thích &amp; Xã hội cần</text>
        </g>
      </svg>
    </div>
  `
};

module.exports = congnghe9Diagrams;
