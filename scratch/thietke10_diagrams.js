// Thư viện sơ đồ kĩ thuật minh họa SVG thuần túy (Pure Valid SVG) cho môn Thiết kế và Công nghệ 10
// Đầy đủ 22 sơ đồ trực quan tương ứng với tất cả 22 bài học SGK Kết nối tri thức

const diagrams = {
  // Bài 1: Mối quan hệ Khoa học - Kĩ thuật - Công nghệ
  sci_tech_eng: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 1: Mối quan hệ tương hỗ hai chiều giữa Khoa học — Kĩ thuật — Công nghệ</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 620 220" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sciGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#1d4ed8"/>
            </linearGradient>
            <linearGradient id="engGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#7c3aed"/>
              <stop offset="100%" stop-color="#6d28d9"/>
            </linearGradient>
            <linearGradient id="techGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#059669"/>
              <stop offset="100%" stop-color="#047857"/>
            </linearGradient>
          </defs>
          <!-- Khối Khoa học (Đỉnh trên) -->
          <rect x="235" y="15" width="150" height="60" rx="12" fill="url(#sciGrad)"/>
          <text x="310" y="40" fill="#ffffff" font-size="13" font-weight="900" text-anchor="middle">KHOA HỌC</text>
          <text x="310" y="58" fill="#dbeafe" font-size="9.5" text-anchor="middle">Quy luật &amp; Tri thức tự nhiên</text>

          <!-- Khối Kĩ thuật (Góc dưới trái) -->
          <rect x="50" y="145" width="150" height="60" rx="12" fill="url(#engGrad)"/>
          <text x="125" y="170" fill="#ffffff" font-size="13" font-weight="900" text-anchor="middle">KĨ THUẬT</text>
          <text x="125" y="188" fill="#ede9fe" font-size="9.5" text-anchor="middle">Ứng dụng giải quyết bài toán</text>

          <!-- Khối Công nghệ (Góc dưới phải) -->
          <rect x="420" y="145" width="150" height="60" rx="12" fill="url(#techGrad)"/>
          <text x="495" y="170" fill="#ffffff" font-size="13" font-weight="900" text-anchor="middle">CÔNG NGHỆ</text>
          <text x="495" y="188" fill="#d1fae5" font-size="9.5" text-anchor="middle">Giải pháp &amp; Phương tiện</text>

          <!-- Mũi tên 2 chiều Khoa học <-> Kĩ thuật -->
          <line x1="245" y1="75" x2="175" y2="140" stroke="#475569" stroke-width="2.5"/>
          <polygon points="170,145 174,136 182,143" fill="#475569"/>
          <polygon points="250,70 246,79 238,72" fill="#475569"/>
          <text x="175" y="100" fill="#2563eb" font-size="8.5" font-weight="bold">Cung cấp nguyên lí</text>

          <!-- Mũi tên 2 chiều Kĩ thuật <-> Công nghệ -->
          <line x1="205" y1="175" x2="415" y2="175" stroke="#475569" stroke-width="2.5"/>
          <polygon points="415,175 407,170 407,180" fill="#475569"/>
          <polygon points="205,175 213,170 213,180" fill="#475569"/>
          <text x="310" y="168" fill="#7c3aed" font-size="8.5" font-weight="bold" text-anchor="middle">Tạo ra &amp; Cải tiến</text>
          <text x="310" y="195" fill="#059669" font-size="8.5" font-weight="bold" text-anchor="middle">Cung cấp công cụ</text>

          <!-- Mũi tên 2 chiều Công nghệ <-> Khoa học -->
          <line x1="445" y1="140" x2="375" y2="75" stroke="#475569" stroke-width="2.5"/>
          <polygon points="370,70 374,79 382,72" fill="#475569"/>
          <polygon points="450,145 446,136 438,143" fill="#475569"/>
          <text x="445" y="100" fill="#059669" font-size="8.5" font-weight="bold">Thiết bị nghiên cứu mới</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 2: Hệ thống kĩ thuật có phản hồi (Mạch kín)
  tech_system: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 2: Cấu trúc Hệ thống kĩ thuật mạch kín có phản hồi (Closed-loop System)</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 620 180" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#3b82f6"/>
              <stop offset="100%" stop-color="#1d4ed8"/>
            </linearGradient>
            <linearGradient id="indigoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#6366f1"/>
              <stop offset="100%" stop-color="#4338ca"/>
            </linearGradient>
            <linearGradient id="greenGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#10b981"/>
              <stop offset="100%" stop-color="#047857"/>
            </linearGradient>
          </defs>
          <rect x="20" y="30" width="130" height="75" rx="12" fill="url(#blueGrad)"/>
          <text x="85" y="60" fill="#ffffff" font-size="13" font-weight="900" text-anchor="middle">ĐẦU VÀO</text>
          <text x="85" y="80" fill="#dbeafe" font-size="10" text-anchor="middle">Vật liệu, Năng lượng, Tin</text>

          <path d="M 155,67 L 200,67" stroke="#475569" stroke-width="3" fill="none"/>
          <polygon points="205,67 195,61 195,73" fill="#475569"/>

          <rect x="210" y="20" width="180" height="95" rx="14" fill="url(#indigoGrad)"/>
          <text x="300" y="55" fill="#ffffff" font-size="14" font-weight="900" text-anchor="middle">BỘ PHẬN XỬ LÍ</text>
          <text x="300" y="75" fill="#e0e7ff" font-size="10" text-anchor="middle">Biến đổi, Lưu trữ, Truyền dẫn</text>
          <text x="300" y="92" fill="#c7d2fe" font-size="9" text-anchor="middle">(Cơ cấu chấp hành + Điều khiển)</text>

          <path d="M 395,67 L 440,67" stroke="#475569" stroke-width="3" fill="none"/>
          <polygon points="445,67 435,61 435,73" fill="#475569"/>

          <rect x="450" y="30" width="140" height="75" rx="12" fill="url(#greenGrad)"/>
          <text x="520" y="60" fill="#ffffff" font-size="13" font-weight="900" text-anchor="middle">ĐẦU RA</text>
          <text x="520" y="80" fill="#d1fae5" font-size="10" text-anchor="middle">Sản phẩm hoàn thiện</text>

          <path d="M 520,105 L 520,150 L 300,150 L 300,120" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="5,4" fill="none"/>
          <polygon points="300,115 295,125 305,125" fill="#f43f5e"/>
          <rect x="360" y="138" width="120" height="22" rx="6" fill="#ffe4e6"/>
          <text x="420" y="153" fill="#e11d48" font-size="10" font-weight="bold" text-anchor="middle">Tín hiệu phản hồi (Feedback)</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 3: Các công nghệ cơ khí chế tạo cốt lõi
  manufacturing_tech: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 3: Phân loại 4 nhóm Công nghệ gia công cơ khí cốt lõi</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 640 180" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Cột 1: Đúc -->
          <rect x="15" y="20" width="140" height="135" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
          <rect x="15" y="20" width="140" height="35" rx="10" fill="#3b82f6"/>
          <text x="85" y="42" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">CÔNG NGHỆ ĐÚC</text>
          <text x="85" y="75" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">Rót kim loại lỏng</text>
          <text x="85" y="95" fill="#475569" font-size="9" text-anchor="middle">• Khuôn cát, khuôn kim loại</text>
          <text x="85" y="112" fill="#475569" font-size="9" text-anchor="middle">• Đúc áp lực, li tâm</text>
          <text x="85" y="135" fill="#059669" font-size="8.5" font-weight="bold" text-anchor="middle">Tạo phôi hình dáng phức tạp</text>

          <!-- Cột 2: Gia công áp lực -->
          <rect x="170" y="20" width="140" height="135" rx="10" fill="#faf5ff" stroke="#8b5cf6" stroke-width="2"/>
          <rect x="170" y="20" width="140" height="35" rx="10" fill="#8b5cf6"/>
          <text x="240" y="42" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">GIA CÔNG ÁP LỰC</text>
          <text x="240" y="75" fill="#6d28d9" font-size="10" font-weight="bold" text-anchor="middle">Biến dạng dẻo</text>
          <text x="240" y="95" fill="#475569" font-size="9" text-anchor="middle">• Rèn tự do, rèn khuôn</text>
          <text x="240" y="112" fill="#475569" font-size="9" text-anchor="middle">• Cán tấm, kéo sợi, dập tấm</text>
          <text x="240" y="135" fill="#059669" font-size="8.5" font-weight="bold" text-anchor="middle">Không tạo phoi phế liệu</text>

          <!-- Cột 3: Cắt gọt -->
          <rect x="325" y="20" width="145" height="135" rx="10" fill="#f0fdf4" stroke="#10b981" stroke-width="2"/>
          <rect x="325" y="20" width="145" height="35" rx="10" fill="#10b981"/>
          <text x="397" y="42" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">GIA CÔNG CẮT GỌT</text>
          <text x="397" y="75" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">Hớt bỏ lớp phoi thừa</text>
          <text x="397" y="95" fill="#475569" font-size="9" text-anchor="middle">• Tiện, phay, bào, mài</text>
          <text x="397" y="112" fill="#475569" font-size="9" text-anchor="middle">• Cắt tia nước, laser, EDM</text>
          <text x="397" y="135" fill="#059669" font-size="8.5" font-weight="bold" text-anchor="middle">Độ chính xác cao nhất</text>

          <!-- Cột 4: Hàn -->
          <rect x="485" y="20" width="140" height="135" rx="10" fill="#fff7ed" stroke="#f97316" stroke-width="2"/>
          <rect x="485" y="20" width="140" height="35" rx="10" fill="#f97316"/>
          <text x="555" y="42" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">CÔNG NGHỆ HÀN</text>
          <text x="555" y="75" fill="#c2410c" font-size="10" font-weight="bold" text-anchor="middle">Nối liền không thể tháo</text>
          <text x="555" y="95" fill="#475569" font-size="9" text-anchor="middle">• Hàn hồ quang, hàn hơi</text>
          <text x="555" y="112" fill="#475569" font-size="9" text-anchor="middle">• Hàn TIG / MIG, hàn điểm</text>
          <text x="555" y="135" fill="#059669" font-size="8.5" font-weight="bold" text-anchor="middle">Liên kết kết cấu thép lớn</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 4: Chuỗi liên hoàn CAD - CAM - CNC
  cad_cam_cnc: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 4: Chuỗi quy trình sản xuất cơ khí số hóa hiện đại CAD → CAM → CNC</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 600 140" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="25" width="120" height="85" rx="12" fill="#0284c7"/>
          <text x="80" y="58" fill="#ffffff" font-size="15" font-weight="900" text-anchor="middle">CAD</text>
          <text x="80" y="78" fill="#e0f2fe" font-size="9.5" text-anchor="middle">Thiết kế 3D</text>
          <text x="80" y="93" fill="#bae6fd" font-size="8.5" text-anchor="middle">AutoCAD, SolidWorks</text>

          <path d="M 145,67 L 175,67" stroke="#0284c7" stroke-width="3" fill="none"/>
          <polygon points="180,67 170,61 170,73" fill="#0284c7"/>

          <rect x="185" y="25" width="120" height="85" rx="12" fill="#6366f1"/>
          <text x="245" y="58" fill="#ffffff" font-size="15" font-weight="900" text-anchor="middle">CAM</text>
          <text x="245" y="78" fill="#e0e7ff" font-size="9.5" text-anchor="middle">Lập trình đường dao</text>
          <text x="245" y="93" fill="#c7d2fe" font-size="8.5" text-anchor="middle">Xuất mã G-code</text>

          <path d="M 310,67 L 340,67" stroke="#6366f1" stroke-width="3" fill="none"/>
          <polygon points="345,67 335,61 335,73" fill="#6366f1"/>

          <rect x="350" y="25" width="120" height="85" rx="12" fill="#8b5cf6"/>
          <text x="410" y="58" fill="#ffffff" font-size="15" font-weight="900" text-anchor="middle">MÁY CNC</text>
          <text x="410" y="78" fill="#ede9fe" font-size="9.5" text-anchor="middle">Gia công tự động</text>
          <text x="410" y="93" fill="#ddd6fe" font-size="8.5" text-anchor="middle">Phay, Tiện, Cắt laser</text>

          <path d="M 475,67 L 500,67" stroke="#8b5cf6" stroke-width="3" fill="none"/>
          <polygon points="505,67 495,61 495,73" fill="#8b5cf6"/>

          <rect x="510" y="25" width="75" height="85" rx="12" fill="#10b981"/>
          <text x="547" y="60" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">CHI TIẾT</text>
          <text x="547" y="78" fill="#d1fae5" font-size="8.5" text-anchor="middle">Độ chính xác</text>
          <text x="547" y="92" fill="#a7f3d0" font-size="8.5" text-anchor="middle">micron</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 5: Ngũ giác tiêu chí đánh giá công nghệ
  tech_evaluation: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 5: Mô hình 5 Tiêu chuẩn cốt lõi đánh giá và lựa chọn công nghệ</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 600 200" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="100" r="45" fill="#4f46e5"/>
          <text x="300" y="95" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">ĐÁNH GIÁ</text>
          <text x="300" y="112" fill="#e0e7ff" font-size="11" font-weight="bold" text-anchor="middle">CÔNG NGHỆ</text>

          <!-- 1. Kĩ thuật (Top) -->
          <rect x="230" y="10" width="140" height="42" rx="8" fill="#2563eb"/>
          <text x="300" y="28" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. HIỆU QUẢ KĨ THUẬT</text>
          <text x="300" y="44" fill="#dbeafe" font-size="8.5" text-anchor="middle">Năng suất, độ chính xác, độ bền</text>
          <line x1="300" y1="52" x2="300" y2="65" stroke="#475569" stroke-width="2"/>

          <!-- 2. Kinh tế (Top right) -->
          <rect x="430" y="55" width="140" height="42" rx="8" fill="#059669"/>
          <text x="500" y="73" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. HIỆU QUẢ KINH TẾ</text>
          <text x="500" y="89" fill="#d1fae5" font-size="8.5" text-anchor="middle">Chi phí đầu tư &amp; giá thành</text>
          <line x1="430" y1="80" x2="340" y2="90" stroke="#475569" stroke-width="2"/>

          <!-- 3. Môi trường (Bottom right) -->
          <rect x="410" y="145" width="145" height="42" rx="8" fill="#16a34a"/>
          <text x="482" y="163" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. TÁC ĐỘNG MÔI TRƯỜNG</text>
          <text x="482" y="179" fill="#dcfce7" font-size="8.5" text-anchor="middle">Phát thải, rác thải &amp; tái chế</text>
          <line x1="410" y1="150" x2="335" y2="125" stroke="#475569" stroke-width="2"/>

          <!-- 4. Con người (Bottom left) -->
          <rect x="50" y="145" width="145" height="42" rx="8" fill="#ea580c"/>
          <text x="122" y="163" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4. AN TOÀN CON NGƯỜI</text>
          <text x="122" y="179" fill="#ffedd5" font-size="8.5" text-anchor="middle">Ergonomics &amp; sức khỏe thợ</text>
          <line x1="195" y1="150" x2="265" y2="125" stroke="#475569" stroke-width="2"/>

          <!-- 5. Xã hội (Top left) -->
          <rect x="30" y="55" width="140" height="42" rx="8" fill="#9333ea"/>
          <text x="100" y="73" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">5. PHÙ HỢP XÃ HỘI</text>
          <text x="100" y="89" fill="#f3e8ff" font-size="8.5" text-anchor="middle">Chính sách &amp; việc làm lao động</text>
          <line x1="170" y1="80" x2="260" y2="90" stroke="#475569" stroke-width="2"/>
        </svg>
      </div>
    </div>
  `,

  // Bài 6: Bốn cuộc cách mạng công nghiệp
  industrial_revolutions: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 6: Lược đồ tiến trình 4 cuộc Cách mạng công nghiệp của nhân loại</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 660 160" class="w-full max-w-2xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Timeline line -->
          <line x1="30" y1="80" x2="630" y2="80" stroke="#cbd5e1" stroke-width="4"/>

          <!-- CMCN 1.0 -->
          <circle cx="90" cy="80" r="16" fill="#3b82f6"/>
          <text x="90" y="85" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1.0</text>
          <rect x="25" y="105" width="130" height="50" rx="8" fill="#eff6ff" stroke="#bfdbfe"/>
          <text x="90" y="122" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">Động cơ hơi nước</text>
          <text x="90" y="137" fill="#64748b" font-size="8.5" text-anchor="middle">Cuối TK XVIII • Cơ giới hóa</text>

          <!-- CMCN 2.0 -->
          <circle cx="250" cy="80" r="16" fill="#6366f1"/>
          <text x="250" y="85" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2.0</text>
          <rect x="185" y="15" width="130" height="50" rx="8" fill="#eef2ff" stroke="#c7d2fe"/>
          <text x="250" y="32" fill="#4338ca" font-size="10" font-weight="bold" text-anchor="middle">Điện năng &amp; Dây chuyền</text>
          <text x="250" y="47" fill="#64748b" font-size="8.5" text-anchor="middle">Cuối TK XIX • Sản xuất lớn</text>

          <!-- CMCN 3.0 -->
          <circle cx="410" cy="80" r="16" fill="#8b5cf6"/>
          <text x="410" y="85" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3.0</text>
          <rect x="345" y="105" width="130" height="50" rx="8" fill="#faf5ff" stroke="#e9d5ff"/>
          <text x="410" y="122" fill="#6b21a8" font-size="10" font-weight="bold" text-anchor="middle">Máy tính &amp; Bán dẫn</text>
          <text x="410" y="137" fill="#64748b" font-size="8.5" text-anchor="middle">Thập niên 1970 • Tự động hóa</text>

          <!-- CMCN 4.0 -->
          <circle cx="570" cy="80" r="16" fill="#ec4899"/>
          <text x="570" y="85" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4.0</text>
          <rect x="505" y="15" width="130" height="50" rx="8" fill="#fdf2f8" stroke="#fbcfe8"/>
          <text x="570" y="32" fill="#9d174d" font-size="10" font-weight="bold" text-anchor="middle">CPS, IoT &amp; Trí tuệ AI</text>
          <text x="570" y="47" fill="#64748b" font-size="8.5" text-anchor="middle">Hiện đại • Hệ thống thực ảo</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 7: Các nhóm ngành nghề kĩ thuật - công nghệ
  engineering_careers: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 7: Cây phân nhánh các nhóm ngành nghề Kĩ thuật &amp; Công nghệ tương lai</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 620 170" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <rect x="235" y="10" width="150" height="40" rx="8" fill="#1e293b"/>
          <text x="310" y="35" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">NGHỀ KĨ THUẬT &amp; CN</text>

          <!-- Rẽ nhánh -->
          <path d="M 310,50 L 310,75 L 85,75 L 85,95" stroke="#94a3b8" stroke-width="2" fill="none"/>
          <path d="M 310,75 L 235,75 L 235,95" stroke="#94a3b8" stroke-width="2" fill="none"/>
          <path d="M 310,75 L 385,75 L 385,95" stroke="#94a3b8" stroke-width="2" fill="none"/>
          <path d="M 310,75 L 535,75 L 535,95" stroke="#94a3b8" stroke-width="2" fill="none"/>

          <!-- Nhóm 1 -->
          <rect x="15" y="95" width="140" height="65" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
          <text x="85" y="115" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">Cơ khí — Chế tạo</text>
          <text x="85" y="132" fill="#475569" font-size="8.5" text-anchor="middle">• Kĩ sư thiết kế máy</text>
          <text x="85" y="147" fill="#475569" font-size="8.5" text-anchor="middle">• Vận hành máy CNC, robot</text>

          <!-- Nhóm 2 -->
          <rect x="165" y="95" width="140" height="65" rx="8" fill="#f5f3ff" stroke="#7c3aed"/>
          <text x="235" y="115" fill="#6d28d9" font-size="11" font-weight="bold" text-anchor="middle">Điện — Điện tử</text>
          <text x="235" y="132" fill="#475569" font-size="8.5" text-anchor="middle">• Kĩ sư tự động hóa, PLC</text>
          <text x="235" y="147" fill="#475569" font-size="8.5" text-anchor="middle">• Thiết kế vi mạch, IoT</text>

          <!-- Nhóm 3 -->
          <rect x="315" y="95" width="140" height="65" rx="8" fill="#f0fdf4" stroke="#16a34a"/>
          <text x="385" y="115" fill="#15803d" font-size="11" font-weight="bold" text-anchor="middle">Xây dựng — Kiến trúc</text>
          <text x="385" y="132" fill="#475569" font-size="8.5" text-anchor="middle">• Kiến trúc sư công trình</text>
          <text x="385" y="147" fill="#475569" font-size="8.5" text-anchor="middle">• Kĩ sư kết cấu, cầu đường</text>

          <!-- Nhóm 4 -->
          <rect x="465" y="95" width="140" height="65" rx="8" fill="#fff7ed" stroke="#ea580c"/>
          <text x="535" y="115" fill="#c2410c" font-size="11" font-weight="bold" text-anchor="middle">Công nghệ thông tin</text>
          <text x="535" y="132" fill="#475569" font-size="8.5" text-anchor="middle">• Lập trình phần mềm</text>
          <text x="535" y="147" fill="#475569" font-size="8.5" text-anchor="middle">• Kĩ sư AI, an ninh mạng</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 8: Khổ giấy và bố trí khung bản vẽ
  paper_sizes_layout: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 8: Tỉ lệ phân chia 5 khổ giấy chính và bố trí Khung tên bản vẽ (TCVN 7285)</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 600 240" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Vỏ khổ A0 -->
          <rect x="30" y="20" width="360" height="200" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>
          <text x="210" y="38" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">Khổ A0 (1189 × 841 mm)</text>

          <!-- Chia thành A1 bên trái -->
          <line x1="210" y1="20" x2="210" y2="220" stroke="#3b82f6" stroke-width="2"/>
          <text x="120" y="125" fill="#1d4ed8" font-size="14" font-weight="900" text-anchor="middle">A1</text>
          <text x="120" y="142" fill="#64748b" font-size="9" text-anchor="middle">841 × 594 mm</text>

          <!-- Bên phải chia A2 ở trên -->
          <line x1="210" y1="120" x2="390" y2="120" stroke="#8b5cf6" stroke-width="2"/>
          <text x="300" y="70" fill="#6d28d9" font-size="13" font-weight="bold" text-anchor="middle">A2</text>
          <text x="300" y="85" fill="#64748b" font-size="8.5" text-anchor="middle">594 × 420 mm</text>

          <!-- Nửa dưới chia A3 -->
          <line x1="300" y1="120" x2="300" y2="220" stroke="#10b981" stroke-width="2"/>
          <text x="255" y="165" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">A3</text>
          <text x="255" y="180" fill="#64748b" font-size="8" text-anchor="middle">420 × 297</text>

          <!-- Góc còn lại A4 -->
          <text x="345" y="165" fill="#ea580c" font-size="12" font-weight="bold" text-anchor="middle">A4</text>
          <text x="345" y="180" fill="#64748b" font-size="8" text-anchor="middle">297 × 210</text>

          <!-- Minh họa khung tên góc dưới phải -->
          <rect x="330" y="195" width="58" height="23" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
          <text x="359" y="210" fill="#854d0e" font-size="7.5" font-weight="bold" text-anchor="middle">Khung tên</text>

          <!-- Bảng chú thích bên phải -->
          <g font-size="10" transform="translate(420, 30)">
            <text x="0" y="20" fill="#0f172a" font-weight="bold">Quy tắc bố trí bản vẽ:</text>
            <text x="0" y="50" fill="#475569">• Mép trái khung: cách 20 mm</text>
            <text x="0" y="70" fill="#475569">  (để đóng gáy tập hồ sơ)</text>
            <text x="0" y="100" fill="#475569">• 3 mép còn lại: cách 10 mm</text>
            <text x="0" y="130" fill="#854d0e" font-weight="bold">• Khung tên bắt buộc đặt ở</text>
            <text x="0" y="150" fill="#854d0e" font-weight="bold">  góc phải phía dưới</text>
            <text x="0" y="180" fill="#2563eb">• Khổ sau = 1/2 diện tích khổ trước</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  // Bài 9: Ba hình chiếu vuông góc theo PPCG1
  orthogonal_projection: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 9: Bố trí và mối quan hệ gióng hàng 3 hình chiếu vuông góc (PPCG1)</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 540 280" class="w-full max-w-lg h-auto" xmlns="http://www.w3.org/2000/svg">
          <rect x="80" y="30" width="160" height="90" rx="8" fill="#ffffff" stroke="#1d4ed8" stroke-width="2"/>
          <path d="M 80,85 L 170,85 L 170,120" stroke="#1d4ed8" stroke-width="2" fill="none"/>
          <text x="160" y="65" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">HÌNH CHIẾU ĐỨNG</text>
          <text x="160" y="110" fill="#64748b" font-size="9" text-anchor="middle">(Chiều Dài &amp; Cao)</text>

          <line x1="240" y1="30" x2="310" y2="30" stroke="#94a3b8" stroke-dasharray="3,3"/>
          <line x1="240" y1="120" x2="310" y2="120" stroke="#94a3b8" stroke-dasharray="3,3"/>
          <text x="275" y="70" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">Cùng Cao</text>

          <rect x="310" y="30" width="110" height="90" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
          <line x1="310" y1="85" x2="420" y2="85" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="365" y="65" fill="#16a34a" font-size="12" font-weight="bold" text-anchor="middle">HC CẠNH</text>
          <text x="365" y="110" fill="#64748b" font-size="9" text-anchor="middle">(Rộng &amp; Cao)</text>

          <line x1="80" y1="120" x2="80" y2="160" stroke="#94a3b8" stroke-dasharray="3,3"/>
          <line x1="240" y1="120" x2="240" y2="160" stroke="#94a3b8" stroke-dasharray="3,3"/>
          <text x="160" y="145" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">Cùng Chiều Dài</text>

          <rect x="80" y="160" width="160" height="90" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
          <line x1="170" y1="160" x2="170" y2="250" stroke="#7c3aed" stroke-width="2"/>
          <text x="160" y="200" fill="#7c3aed" font-size="12" font-weight="bold" text-anchor="middle">HÌNH CHIẾU BẰNG</text>
          <text x="160" y="225" fill="#64748b" font-size="9" text-anchor="middle">(Chiều Dài &amp; Rộng)</text>

          <path d="M 240,205 L 365,205 L 365,120" stroke="#ea580c" stroke-dasharray="3,3" stroke-width="1.5" fill="none"/>
          <text x="345" y="220" fill="#ea580c" font-size="9" font-weight="bold">Cùng Chiều Rộng</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 10: Phân biệt Mặt cắt và Hình cắt
  section_views: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 10: So sánh phân biệt trực quan Mặt cắt (Cross section) và Hình cắt (Sectional view)</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 600 200" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Bên trái: Mặt cắt -->
          <g transform="translate(40, 20)">
            <rect x="0" y="0" width="220" height="150" rx="10" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <text x="110" y="30" fill="#1d4ed8" font-size="13" font-weight="bold" text-anchor="middle">A. MẶT CẮT</text>
            <!-- Hình chữ T bị cắt có gạch gạch -->
            <path d="M 40,55 L 180,55 L 180,95 L 135,95 L 135,135 L 85,135 L 85,95 L 40,95 Z" fill="#e0f2fe" stroke="#1e293b" stroke-width="2"/>
            <!-- Các nét gạch mặt cắt nghiêng 45 độ -->
            <line x1="50" y1="55" x2="90" y2="95" stroke="#0284c7" stroke-width="1.2"/>
            <line x1="70" y1="55" x2="110" y2="95" stroke="#0284c7" stroke-width="1.2"/>
            <line x1="90" y1="55" x2="130" y2="95" stroke="#0284c7" stroke-width="1.2"/>
            <line x1="110" y1="55" x2="150" y2="95" stroke="#0284c7" stroke-width="1.2"/>
            <line x1="130" y1="55" x2="170" y2="95" stroke="#0284c7" stroke-width="1.2"/>
            <line x1="85" y1="95" x2="125" y2="135" stroke="#0284c7" stroke-width="1.2"/>
            <text x="110" y="165" fill="#475569" font-size="9.5" text-anchor="middle">CHỈ VẼ phần tiếp xúc mặt phẳng cắt</text>
          </g>

          <!-- Bên phải: Hình cắt -->
          <g transform="translate(340, 20)">
            <rect x="0" y="0" width="220" height="150" rx="10" fill="#f8fafc" stroke="#16a34a" stroke-width="2"/>
            <text x="110" y="30" fill="#15803d" font-size="13" font-weight="bold" text-anchor="middle">B. HÌNH CẮT</text>
            <!-- Hình chữ T bị cắt -->
            <path d="M 40,55 L 180,55 L 180,95 L 135,95 L 135,135 L 85,135 L 85,95 L 40,95 Z" fill="#dcfce7" stroke="#1e293b" stroke-width="2"/>
            <!-- Nét gạch mặt cắt -->
            <line x1="50" y1="55" x2="90" y2="95" stroke="#16a34a" stroke-width="1.2"/>
            <line x1="70" y1="55" x2="110" y2="95" stroke="#16a34a" stroke-width="1.2"/>
            <line x1="90" y1="55" x2="130" y2="95" stroke="#16a34a" stroke-width="1.2"/>
            <line x1="110" y1="55" x2="150" y2="95" stroke="#16a34a" stroke-width="1.2"/>
            <!-- Các đường bao thấy phía sau -->
            <rect x="25" y="70" width="15" height="40" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
            <rect x="180" y="70" width="15" height="40" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
            <text x="110" y="165" fill="#475569" font-size="9.5" text-anchor="middle">GỒM mặt cắt + ĐƯỜNG BAO THẤY phía sau</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  // Bài 11: So sánh hai loại hình chiếu trục đo
  axonometric_projection: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 11: So sánh thông số Hình chiếu trục đo Vuông góc đều vs Xiên góc cân</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 600 200" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Trục đo vuông góc đều (Trái) -->
          <g transform="translate(40, 20)">
            <rect x="0" y="0" width="230" height="160" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
            <text x="115" y="25" fill="#1e40af" font-size="11.5" font-weight="bold" text-anchor="middle">VUÔNG GÓC ĐỀU (Isometric)</text>
            <!-- 3 trục 120 độ -->
            <line x1="115" y1="95" x2="115" y2="40" stroke="#dc2626" stroke-width="2"/>
            <text x="125" y="45" fill="#dc2626" font-size="10" font-weight="bold">O'Z'</text>
            <line x1="115" y1="95" x2="50" y2="135" stroke="#16a34a" stroke-width="2"/>
            <text x="40" y="140" fill="#16a34a" font-size="10" font-weight="bold">O'X'</text>
            <line x1="115" y1="95" x2="180" y2="135" stroke="#7c3aed" stroke-width="2"/>
            <text x="190" y="140" fill="#7c3aed" font-size="10" font-weight="bold">O'Y'</text>
            <!-- Chú thích -->
            <text x="115" y="85" fill="#475569" font-size="8.5" text-anchor="middle">120°</text>
            <text x="115" y="152" fill="#1e40af" font-size="9" font-weight="bold" text-anchor="middle">Góc = 120° • p = q = r = 1</text>
          </g>

          <!-- Trục đo xiên góc cân (Phải) -->
          <g transform="translate(330, 20)">
            <rect x="0" y="0" width="230" height="160" rx="10" fill="#faf5ff" stroke="#8b5cf6" stroke-width="2"/>
            <text x="115" y="25" fill="#6d28d9" font-size="11.5" font-weight="bold" text-anchor="middle">XIÊN GÓC CÂN (Cabinet)</text>
            <!-- Trục Oz thẳng đứng, Ox nằm ngang vuông góc -->
            <line x1="100" y1="110" x2="100" y2="45" stroke="#dc2626" stroke-width="2"/>
            <text x="110" y="50" fill="#dc2626" font-size="10" font-weight="bold">O'Z'</text>
            <line x1="100" y1="110" x2="185" y2="110" stroke="#16a34a" stroke-width="2"/>
            <text x="195" y="115" fill="#16a34a" font-size="10" font-weight="bold">O'X'</text>
            <line x1="100" y1="110" x2="45" y2="145" stroke="#7c3aed" stroke-width="2"/>
            <text x="35" y="150" fill="#7c3aed" font-size="10" font-weight="bold">O'Y'</text>
            <!-- Góc 90 và 135 -->
            <text x="115" y="100" fill="#475569" font-size="8.5">90°</text>
            <text x="65" y="125" fill="#475569" font-size="8.5">135°</text>
            <text x="115" y="152" fill="#6d28d9" font-size="9" font-weight="bold" text-anchor="middle">p = r = 1 • riêng q = 0,5</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  // Bài 12: Hình chiếu phối cảnh
  perspective_projection: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 12: Nguyên lí Phép chiếu phối cảnh 1 điểm tụ (F) và 2 điểm tụ (F1, F2)</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 600 180" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Đường chân trời t - t -->
          <line x1="30" y1="70" x2="570" y2="70" stroke="#dc2626" stroke-width="2"/>
          <text x="575" y="74" fill="#dc2626" font-size="10" font-weight="bold">t - t</text>
          <text x="300" y="55" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">ĐƯỜNG CHÂN TRỜI (Ngang tầm mắt)</text>

          <!-- Điểm tụ F1 -->
          <circle cx="80" cy="70" r="4" fill="#1d4ed8"/>
          <text x="80" y="90" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">F₁</text>

          <!-- Điểm tụ F2 -->
          <circle cx="520" cy="70" r="4" fill="#1d4ed8"/>
          <text x="520" y="90" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">F₂</text>

          <!-- Ngôi nhà phối cảnh 2 điểm tụ ở giữa -->
          <!-- Cạnh đứng góc nhà -->
          <line x1="300" y1="90" x2="300" y2="160" stroke="#0f172a" stroke-width="3"/>

          <!-- Tia tụ về F1 -->
          <line x1="300" y1="90" x2="80" y2="70" stroke="#94a3b8" stroke-dasharray="3,3"/>
          <line x1="300" y1="160" x2="80" y2="70" stroke="#94a3b8" stroke-dasharray="3,3"/>

          <!-- Tia tụ về F2 -->
          <line x1="300" y1="90" x2="520" y2="70" stroke="#94a3b8" stroke-dasharray="3,3"/>
          <line x1="300" y1="160" x2="520" y2="70" stroke="#94a3b8" stroke-dasharray="3,3"/>

          <!-- Mặt bên trái nhà -->
          <polygon points="300,90 220,96 220,147 300,160" fill="#dbeafe" stroke="#1e293b" stroke-width="2"/>
          <!-- Mặt bên phải nhà -->
          <polygon points="300,90 380,96 380,147 300,160" fill="#e0e7ff" stroke="#1e293b" stroke-width="2"/>

          <!-- Chú thích -->
          <text x="300" y="175" fill="#475569" font-size="9.5" text-anchor="middle">Mô phỏng chân thực hiệu ứng thị giác xa nhỏ — gần lớn của mắt người quan sát</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 13: Quy ước vẽ ren (Ren trục ngoài)
  thread_convention: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 13: Tiêu chuẩn quy ước vẽ ren ngoài (Ren trục thấy)</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 520 180" class="w-full max-w-lg h-auto" xmlns="http://www.w3.org/2000/svg">
          <line x1="60" y1="50" x2="280" y2="50" stroke="#1e293b" stroke-width="2.5"/>
          <line x1="60" y1="110" x2="280" y2="110" stroke="#1e293b" stroke-width="2.5"/>
          <line x1="60" y1="60" x2="280" y2="60" stroke="#64748b" stroke-width="1.2"/>
          <line x1="60" y1="100" x2="280" y2="100" stroke="#64748b" stroke-width="1.2"/>
          <line x1="280" y1="45" x2="280" y2="115" stroke="#1e293b" stroke-width="2.5"/>
          <line x1="60" y1="50" x2="45" y2="60" stroke="#1e293b" stroke-width="2"/>
          <line x1="45" y1="60" x2="45" y2="100" stroke="#1e293b" stroke-width="2"/>
          <line x1="45" y1="100" x2="60" y2="110" stroke="#1e293b" stroke-width="2"/>
          <line x1="20" y1="80" x2="310" y2="80" stroke="#ef4444" stroke-dasharray="8,2,2,2" stroke-width="1"/>

          <text x="170" y="38" fill="#1e293b" font-size="9" font-weight="bold">Đường đỉnh ren (Nét liền đậm)</text>
          <text x="170" y="73" fill="#64748b" font-size="9">Đường chân ren (Nét liền mảnh)</text>
          <text x="280" y="132" fill="#1e293b" font-size="9" font-weight="bold" text-anchor="middle">Đường giới hạn ren</text>

          <circle cx="410" cy="80" r="30" fill="none" stroke="#1e293b" stroke-width="2.5"/>
          <path d="M 430,80 A 20 20 0 1 1 410,60" fill="none" stroke="#64748b" stroke-width="1.5"/>
          <line x1="365" y1="80" x2="455" y2="80" stroke="#ef4444" stroke-dasharray="6,2,2,2" stroke-width="1"/>
          <line x1="410" y1="35" x2="410" y2="125" stroke="#ef4444" stroke-dasharray="6,2,2,2" stroke-width="1"/>
          <text x="410" y="145" fill="#64748b" font-size="9" font-weight="bold" text-anchor="middle">Vòng chân ren hở 1/4 vòng</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 14: Bản vẽ chi tiết và Bản vẽ lắp
  drawing_types: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 14: So sánh thành phần Bản vẽ chi tiết (Detail) và Bản vẽ lắp (Assembly)</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 620 180" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Bản vẽ chi tiết (Trái) -->
          <g transform="translate(20, 15)">
            <rect x="0" y="0" width="270" height="150" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
            <rect x="0" y="0" width="270" height="32" rx="10" fill="#3b82f6"/>
            <text x="135" y="22" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">BẢN VẼ CHI TIẾT (1 chi tiết)</text>
            <text x="15" y="55" fill="#1e40af" font-size="10" font-weight="bold">1. Hình biểu diễn:</text>
            <text x="120" y="55" fill="#475569" font-size="9">Hình chiếu, hình cắt bên trong</text>
            <text x="15" y="78" fill="#1e40af" font-size="10" font-weight="bold">2. Kích thước:</text>
            <text x="120" y="78" fill="#475569" font-size="9">Đầy đủ số liệu gia công chế tạo</text>
            <text x="15" y="101" fill="#1e40af" font-size="10" font-weight="bold">3. Yêu cầu kĩ thuật:</text>
            <text x="120" y="101" fill="#475569" font-size="9">Độ nhám Ra/Rz, dung sai, mạ</text>
            <text x="15" y="124" fill="#1e40af" font-size="10" font-weight="bold">4. Khung tên:</text>
            <text x="120" y="124" fill="#475569" font-size="9">Tên chi tiết, vật liệu (C45, gang)</text>
          </g>

          <!-- Bản vẽ lắp (Phải) -->
          <g transform="translate(330, 15)">
            <rect x="0" y="0" width="270" height="150" rx="10" fill="#fdf4ff" stroke="#c026d3" stroke-width="2"/>
            <rect x="0" y="0" width="270" height="32" rx="10" fill="#c026d3"/>
            <text x="135" y="22" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">BẢN VẼ LẮP (Cụm máy)</text>
            <text x="15" y="55" fill="#86198f" font-size="10" font-weight="bold">1. Hình biểu diễn cụm:</text>
            <text x="135" y="55" fill="#475569" font-size="9">Vị trí tương quan các chi tiết</text>
            <text x="15" y="78" fill="#86198f" font-size="10" font-weight="bold">2. Kích thước chung:</text>
            <text x="135" y="78" fill="#475569" font-size="9">Dài × Rộng × Cao, kích thước ghép</text>
            <text x="15" y="101" fill="#ea580c" font-size="10" font-weight="black">3. BẢNG KÊ CHI TIẾT:</text>
            <text x="135" y="101" fill="#c2410c" font-size="9" font-weight="bold">Số TT, tên, số lượng, vật liệu</text>
            <text x="15" y="124" fill="#86198f" font-size="10" font-weight="bold">4. Khung tên:</text>
            <text x="135" y="124" fill="#475569" font-size="9">Tên cụm sản phẩm, tỉ lệ cụm</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  // Bài 15: Ba bản vẽ kiến trúc ngôi nhà
  building_drawings: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 15: Ba bản vẽ kiến trúc nền tảng trong hồ sơ thiết kế xây dựng ngôi nhà</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 620 170" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- 1. Mặt bằng -->
          <rect x="15" y="20" width="180" height="130" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
          <rect x="15" y="20" width="180" height="32" rx="10" fill="#16a34a"/>
          <text x="105" y="42" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">1. MẶT BẰNG (Floor Plan)</text>
          <text x="105" y="72" fill="#15803d" font-size="9.5" font-weight="bold" text-anchor="middle">Quan trọng nhất</text>
          <text x="105" y="92" fill="#475569" font-size="8.5" text-anchor="middle">• Cắt ngang nhà ở độ cao 1,5m</text>
          <text x="105" y="109" fill="#475569" font-size="8.5" text-anchor="middle">• Phân chia diện tích các phòng</text>
          <text x="105" y="126" fill="#475569" font-size="8.5" text-anchor="middle">• Vị trí cửa đi, cửa sổ, cầu thang</text>

          <!-- 2. Mặt đứng -->
          <rect x="220" y="20" width="180" height="130" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
          <rect x="220" y="20" width="180" height="32" rx="10" fill="#2563eb"/>
          <text x="310" y="42" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">2. MẶT ĐỨNG (Elevation)</text>
          <text x="310" y="72" fill="#1d4ed8" font-size="9.5" font-weight="bold" text-anchor="middle">Ngoại thất bên ngoài</text>
          <text x="310" y="92" fill="#475569" font-size="8.5" text-anchor="middle">• Hình chiếu vuông góc mặt tiền</text>
          <text x="310" y="109" fill="#475569" font-size="8.5" text-anchor="middle">• Vẻ đẹp hình khối kiến trúc</text>
          <text x="310" y="126" fill="#475569" font-size="8.5" text-anchor="middle">• Ban công, mái nhà, màu sơn</text>

          <!-- 3. Mặt cắt -->
          <rect x="425" y="20" width="180" height="130" rx="10" fill="#faf5ff" stroke="#9333ea" stroke-width="2"/>
          <rect x="425" y="20" width="180" height="32" rx="10" fill="#9333ea"/>
          <text x="515" y="42" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">3. MẶT CẮT (Section)</text>
          <text x="515" y="72" fill="#7e22ce" font-size="9.5" font-weight="bold" text-anchor="middle">Kết cấu không gian thẳng đứng</text>
          <text x="515" y="92" fill="#475569" font-size="8.5" text-anchor="middle">• Mặt phẳng thẳng đứng cắt qua</text>
          <text x="515" y="109" fill="#475569" font-size="8.5" text-anchor="middle">• Chiều cao trần, dầm, sàn móng</text>
          <text x="515" y="126" fill="#475569" font-size="8.5" text-anchor="middle">• Kích thước thông thủy phòng</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 16: Quy trình CAD 3D
  cad_workflow: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 16: Chuỗi 4 bước thiết kế mô hình hóa 3D trên phần mềm máy tính (CAD)</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 620 130" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Step 1 -->
          <rect x="15" y="25" width="125" height="75" rx="10" fill="#0284c7"/>
          <text x="77" y="55" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">1. SKETCH 2D</text>
          <text x="77" y="75" fill="#e0f2fe" font-size="8.5" text-anchor="middle">Phác thảo đường nét</text>
          <text x="77" y="88" fill="#bae6fd" font-size="8" text-anchor="middle">Gán ràng buộc hình học</text>

          <path d="M 145,62 L 165,62" stroke="#475569" stroke-width="2.5" fill="none"/>
          <polygon points="170,62 162,57 162,67" fill="#475569"/>

          <!-- Step 2 -->
          <rect x="175" y="25" width="125" height="75" rx="10" fill="#4f46e5"/>
          <text x="237" y="55" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">2. KHỐI 3D SOLID</text>
          <text x="237" y="75" fill="#ede9fe" font-size="8.5" text-anchor="middle">Đùn khối (Extrude)</text>
          <text x="237" y="88" fill="#c7d2fe" font-size="8" text-anchor="middle">Xoay tròn (Revolve)</text>

          <path d="M 305,62 L 325,62" stroke="#475569" stroke-width="2.5" fill="none"/>
          <polygon points="330,62 322,57 322,67" fill="#475569"/>

          <!-- Step 3 -->
          <rect x="335" y="25" width="125" height="75" rx="10" fill="#9333ea"/>
          <text x="397" y="55" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">3. ASSEMBLY</text>
          <text x="397" y="75" fill="#fae8ff" font-size="8.5" text-anchor="middle">Lắp ghép cụm chi tiết</text>
          <text x="397" y="88" fill="#f5d0fe" font-size="8" text-anchor="middle">Kiểm tra va chạm cơ khí</text>

          <path d="M 465,62 L 485,62" stroke="#475569" stroke-width="2.5" fill="none"/>
          <polygon points="490,62 482,57 482,67" fill="#475569"/>

          <!-- Step 4 -->
          <rect x="495" y="25" width="110" height="75" rx="10" fill="#059669"/>
          <text x="550" y="55" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">4. XUẤT 2D</text>
          <text x="550" y="75" fill="#d1fae5" font-size="8.5" text-anchor="middle">Tự động tạo bản vẽ</text>
          <text x="550" y="88" fill="#a7f3d0" font-size="8" text-anchor="middle">Xuất mã G-code CAM</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 17: Cầu nối thiết kế kĩ thuật
  engineering_design_overview: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 17: Bản chất hoạt động Thiết kế kĩ thuật — Biến Ý tưởng &amp; Tri thức thành Sản phẩm</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 600 140" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Đầu vào: Nhu cầu & Vấn đề -->
          <rect x="20" y="25" width="140" height="85" rx="12" fill="#ef4444"/>
          <text x="90" y="55" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">NHU CẦU THỰC TẾ</text>
          <text x="90" y="75" fill="#fee2e2" font-size="9" text-anchor="middle">• Vấn đề cần giải quyết</text>
          <text x="90" y="90" fill="#fecaca" font-size="9" text-anchor="middle">• Tiện nghi con người</text>

          <path d="M 165,67 L 205,67" stroke="#475569" stroke-width="3" fill="none"/>
          <polygon points="210,67 200,61 200,73" fill="#475569"/>

          <!-- Cầu nối: Thiết kế kĩ thuật -->
          <rect x="215" y="15" width="170" height="105" rx="14" fill="#7c3aed"/>
          <text x="300" y="45" fill="#ffffff" font-size="13" font-weight="900" text-anchor="middle">THIẾT KẾ KĨ THUẬT</text>
          <text x="300" y="65" fill="#ede9fe" font-size="9" text-anchor="middle">Vận dụng Toán &amp; Khoa học</text>
          <text x="300" y="82" fill="#ddd6fe" font-size="9" text-anchor="middle">Sáng tạo phương án tối ưu</text>
          <text x="300" y="100" fill="#fef08a" font-size="9" font-weight="bold" text-anchor="middle">Bộ hồ sơ kĩ thuật &amp; Bản vẽ</text>

          <path d="M 390,67 L 430,67" stroke="#475569" stroke-width="3" fill="none"/>
          <polygon points="435,67 425,61 425,73" fill="#475569"/>

          <!-- Đầu ra: Sản phẩm chế tạo -->
          <rect x="440" y="25" width="140" height="85" rx="12" fill="#10b981"/>
          <text x="510" y="55" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">SẢN PHẨM HỮU HÌNH</text>
          <text x="510" y="75" fill="#d1fae5" font-size="9" text-anchor="middle">• Máy móc, thiết bị</text>
          <text x="510" y="90" fill="#a7f3d0" font-size="9" text-anchor="middle">• Công trình kiến trúc</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 18: Chu trình 7 bước thiết kế kĩ thuật với vòng lặp phản hồi
  design_process: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 18: Chu trình 7 bước Thiết kế kĩ thuật (Engineering Design Process)</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 680 160" class="w-full max-w-2xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Step 1 -->
          <rect x="10" y="20" width="80" height="70" rx="8" fill="#3b82f6"/>
          <text x="50" y="45" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">1. XÁC ĐỊNH</text>
          <text x="50" y="60" fill="#ffffff" font-size="9" text-anchor="middle">VẤN ĐỀ</text>

          <!-- Step 2 -->
          <rect x="105" y="20" width="80" height="70" rx="8" fill="#6366f1"/>
          <text x="145" y="45" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">2. TỔNG</text>
          <text x="145" y="60" fill="#ffffff" font-size="9" text-anchor="middle">QUAN</text>

          <!-- Step 3 -->
          <rect x="200" y="20" width="80" height="70" rx="8" fill="#8b5cf6"/>
          <text x="240" y="45" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">3. TIÊU CHÍ</text>
          <text x="240" y="60" fill="#ffffff" font-size="9" text-anchor="middle">YÊU CẦU</text>

          <!-- Step 4 -->
          <rect x="295" y="20" width="85" height="70" rx="8" fill="#ec4899"/>
          <text x="337" y="45" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">4. GIẢI PHÁP</text>
          <text x="337" y="60" fill="#ffffff" font-size="9" text-anchor="middle">ĐỀ XUẤT</text>

          <!-- Step 5 -->
          <rect x="395" y="20" width="85" height="70" rx="8" fill="#f59e0b"/>
          <text x="437" y="45" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">5. NGUYÊN</text>
          <text x="437" y="60" fill="#ffffff" font-size="9" text-anchor="middle">MẪU (Proto)</text>

          <!-- Step 6 -->
          <rect x="495" y="20" width="85" height="70" rx="8" fill="#ef4444"/>
          <text x="537" y="45" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">6. THỬ</text>
          <text x="537" y="60" fill="#ffffff" font-size="9" text-anchor="middle">NGHIỆM</text>

          <!-- Step 7 -->
          <rect x="595" y="20" width="75" height="70" rx="8" fill="#10b981"/>
          <text x="632" y="45" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">7. HỒ SƠ</text>
          <text x="632" y="60" fill="#ffffff" font-size="9" text-anchor="middle">KĨ THUẬT</text>

          <!-- Vòng lặp phản hồi cải tiến từ bước 6 về bước 4 & 5 -->
          <path d="M 537,90 L 537,135 L 337,135 L 337,95" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="4,4" fill="none"/>
          <polygon points="337,90 332,100 342,100" fill="#ef4444"/>
          <rect x="380" y="125" width="130" height="20" rx="5" fill="#fee2e2"/>
          <text x="445" y="139" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">Không đạt: Lặp lại cải tiến</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 19: Các yếu tố ảnh hưởng thiết kế kĩ thuật
  design_influences: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 19: Các yếu tố trọng yếu ảnh hưởng đến thiết kế sản phẩm kĩ thuật</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 600 170" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Nhóm Sản phẩm -->
          <rect x="20" y="20" width="265" height="135" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
          <rect x="20" y="20" width="265" height="30" rx="10" fill="#3b82f6"/>
          <text x="152" y="40" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">YẾU TỐ SẢN PHẨM</text>
          <text x="35" y="70" fill="#1e40af" font-size="9.5" font-weight="bold">• Nhân trắc học (Ergonomics):</text>
          <text x="175" y="70" fill="#475569" font-size="8.5">Vừa vặn tư thế người dùng</text>
          <text x="35" y="90" fill="#1e40af" font-size="9.5" font-weight="bold">• Thẩm mĩ (Aesthetics):</text>
          <text x="175" y="90" fill="#475569" font-size="8.5">Hình khối, màu sắc tỉ lệ vàng</text>
          <text x="35" y="110" fill="#1e40af" font-size="9.5" font-weight="bold">• An toàn &amp; Năng lượng:</text>
          <text x="175" y="110" fill="#475569" font-size="8.5">Cách điện, chống cháy, tiết kiệm</text>
          <text x="35" y="130" fill="#1e40af" font-size="9.5" font-weight="bold">• Vòng đời (LCA):</text>
          <text x="175" y="130" fill="#475569" font-size="8.5">Tái chế, thân thiện môi trường</text>

          <!-- Nhóm Nguồn lực -->
          <rect x="315" y="20" width="265" height="135" rx="10" fill="#faf5ff" stroke="#a855f7" stroke-width="2"/>
          <rect x="315" y="20" width="265" height="30" rx="10" fill="#a855f7"/>
          <text x="447" y="40" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">YẾU TỐ NGUỒN LỰC</text>
          <text x="330" y="70" fill="#7e22ce" font-size="9.5" font-weight="bold">• Tài chính &amp; Chi phí:</text>
          <text x="450" y="70" fill="#475569" font-size="8.5">Ngân sách thiết kế, giá bán</text>
          <text x="330" y="95" fill="#7e22ce" font-size="9.5" font-weight="bold">• Năng lực công nghệ:</text>
          <text x="450" y="95" fill="#475569" font-size="8.5">Trình độ máy móc gia công</text>
          <text x="330" y="120" fill="#7e22ce" font-size="9.5" font-weight="bold">• Nguồn vật liệu:</text>
          <text x="450" y="120" fill="#475569" font-size="8.5">Khả năng cung ứng sẵn có</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 20: Năm nguyên tắc cốt lõi thiết kế kĩ thuật
  design_principles: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 20: Năm nguyên tắc vàng trong Thiết kế kĩ thuật hiện đại</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 640 140" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Nguyên tắc 1 -->
          <rect x="10" y="20" width="115" height="100" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
          <circle cx="67" cy="45" r="14" fill="#2563eb"/>
          <text x="67" y="49" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1</text>
          <text x="67" y="75" fill="#1d4ed8" font-size="10.5" font-weight="bold" text-anchor="middle">ĐƠN GIẢN</text>
          <text x="67" y="92" fill="#475569" font-size="8" text-anchor="middle">Ít chi tiết thừa</text>
          <text x="67" y="105" fill="#475569" font-size="8" text-anchor="middle">Dễ sản xuất, lắp ráp</text>

          <!-- Nguyên tắc 2 -->
          <rect x="135" y="20" width="115" height="100" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
          <circle cx="192" cy="45" r="14" fill="#16a34a"/>
          <text x="192" y="49" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2</text>
          <text x="192" y="75" fill="#15803d" font-size="10.5" font-weight="bold" text-anchor="middle">TIÊU CHUẨN</text>
          <text x="192" y="92" fill="#475569" font-size="8" text-anchor="middle">Dùng linh kiện chuẩn</text>
          <text x="192" y="105" fill="#475569" font-size="8" text-anchor="middle">Dễ thay thế phụ tùng</text>

          <!-- Nguyên tắc 3 -->
          <rect x="260" y="20" width="120" height="100" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
          <circle cx="320" cy="45" r="14" fill="#dc2626"/>
          <text x="320" y="49" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3</text>
          <text x="320" y="75" fill="#b91c1c" font-size="10.5" font-weight="bold" text-anchor="middle">AN TOÀN</text>
          <text x="320" y="92" fill="#475569" font-size="8" text-anchor="middle">Phòng ngừa rủi ro</text>
          <text x="320" y="105" fill="#475569" font-size="8" text-anchor="middle">Bảo vệ tính mạng</text>

          <!-- Nguyên tắc 4 -->
          <rect x="390" y="20" width="115" height="100" rx="10" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
          <circle cx="447" cy="45" r="14" fill="#d97706"/>
          <text x="447" y="49" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4</text>
          <text x="447" y="75" fill="#b45309" font-size="10.5" font-weight="bold" text-anchor="middle">TIẾT KIỆM</text>
          <text x="447" y="92" fill="#475569" font-size="8" text-anchor="middle">Ít tốn nguyên vật liệu</text>
          <text x="447" y="105" fill="#475569" font-size="8" text-anchor="middle">Tiêu thụ ít điện năng</text>

          <!-- Nguyên tắc 5 -->
          <rect x="515" y="20" width="115" height="100" rx="10" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
          <circle cx="572" cy="45" r="14" fill="#7c3aed"/>
          <text x="572" y="49" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">5</text>
          <text x="572" y="75" fill="#6d28d9" font-size="10.5" font-weight="bold" text-anchor="middle">BỀN VỮNG</text>
          <text x="572" y="92" fill="#475569" font-size="8" text-anchor="middle">Tái chế vòng đời</text>
          <text x="572" y="105" fill="#475569" font-size="8" text-anchor="middle">Không gây ô nhiễm</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 21: Phương pháp và công cụ hỗ trợ thiết kế
  design_tools_matrix: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 21: Các phương pháp sáng tạo &amp; Công cụ hỗ trợ ra quyết định thiết kế</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 600 160" class="w-full max-w-xl h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Công cụ 1 -->
          <rect x="20" y="20" width="170" height="120" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
          <text x="105" y="45" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">ĐỘNG NÃO (Brainstorming)</text>
          <text x="105" y="70" fill="#475569" font-size="9" text-anchor="middle">• Phát huy tối đa ý tưởng</text>
          <text x="105" y="90" fill="#475569" font-size="9" text-anchor="middle">• Không chỉ trích ý tưởng lạ</text>
          <text x="105" y="110" fill="#475569" font-size="9" text-anchor="middle">• Kết hợp, phát triển ý tưởng</text>

          <!-- Công cụ 2 -->
          <rect x="215" y="20" width="170" height="120" rx="10" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/>
          <text x="300" y="45" fill="#6d28d9" font-size="12" font-weight="bold" text-anchor="middle">SƠ ĐỒ TƯ DUY (Mindmap)</text>
          <text x="300" y="70" fill="#475569" font-size="9" text-anchor="middle">• Nhánh trung tâm: Vấn đề</text>
          <text x="300" y="90" fill="#475569" font-size="9" text-anchor="middle">• Các nhánh con: Giải pháp</text>
          <text x="300" y="110" fill="#475569" font-size="9" text-anchor="middle">• Kết nối trực quan logic</text>

          <!-- Công cụ 3 -->
          <rect x="410" y="20" width="170" height="120" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
          <text x="495" y="45" fill="#15803d" font-size="12" font-weight="bold" text-anchor="middle">MA TRẬN QUYẾT ĐỊNH</text>
          <text x="495" y="70" fill="#475569" font-size="9" text-anchor="middle">• Lập bảng các tiêu chí</text>
          <text x="495" y="90" fill="#475569" font-size="9" text-anchor="middle">• Gán trọng số điểm cho phương án</text>
          <text x="495" y="110" fill="#475569" font-size="9" text-anchor="middle">• Chọn giải pháp điểm cao nhất</text>
        </svg>
      </div>
    </div>
  `,

  // Bài 22: Mô hình cột lọc nước mini STEM
  water_filter_stem: `
    <div class="my-5 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700 text-center">
      <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">Sơ đồ Bài 22: Cấu tạo các tầng vật liệu lọc trong mô hình Cột lọc nước STEM (Bài 22)</span>
      <div class="flex justify-center overflow-x-auto">
        <svg viewBox="0 0 540 260" class="w-full max-w-lg h-auto" xmlns="http://www.w3.org/2000/svg">
          <!-- Vỏ bình lọc -->
          <path d="M 120,30 L 260,30 L 250,210 L 195,235 L 185,235 L 130,210 Z" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>

          <!-- Lớp 1: Sỏi to trên cùng (chặn rác) -->
          <polygon points="121,35 259,35 257,65 123,65" fill="#a8a29e"/>
          <text x="190" y="52" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">1. Sỏi to (Chặn rác thô)</text>

          <!-- Lớp 2: Cát thạch anh mịn -->
          <polygon points="123,65 257,65 255,100 125,100" fill="#fef08a"/>
          <text x="190" y="86" fill="#854d0e" font-size="10" font-weight="bold" text-anchor="middle">2. Cát mịn (Lọc bùn phù sa)</text>

          <!-- Lớp 3: Than hoạt tính -->
          <polygon points="125,100 255,100 253,145 127,145" fill="#1e293b"/>
          <text x="190" y="126" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">3. Than hoạt tính (Khử mùi/màu/độc)</text>

          <!-- Lớp 4: Sỏi nhỏ -->
          <polygon points="127,145 253,145 251,180 129,180" fill="#cbd5e1"/>
          <text x="190" y="165" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">4. Sỏi nhỏ đỡ vật liệu</text>

          <!-- Lớp 5: Bông gòn lọc mịn -->
          <polygon points="129,180 251,180 250,208 130,208" fill="#ffffff" stroke="#94a3b8" stroke-dasharray="2,2"/>
          <text x="190" y="198" fill="#64748b" font-size="9" font-weight="bold" text-anchor="middle">5. Bông gòn / Vải lọc</text>

          <!-- Dòng nước ra -->
          <line x1="190" y1="235" x2="190" y2="255" stroke="#0284c7" stroke-width="4"/>
          <circle cx="190" cy="258" r="3" fill="#0284c7"/>

          <!-- Chú thích bên phải -->
          <g font-size="10">
            <text x="290" y="55" fill="#334155">➜ Nước thô đầu vào (Nước suối, ao hồ)</text>
            <text x="290" y="90" fill="#854d0e">➜ Lọc giữ hạt huyền phù lơ lửng</text>
            <text x="290" y="130" fill="#0f172a" font-weight="bold">➜ Hấp phụ clo dư &amp; hóa chất hữu cơ</text>
            <text x="290" y="170" fill="#334155">➜ Tạo độ thoáng dòng chảy</text>
            <text x="290" y="240" fill="#0284c7" font-weight="bold">✓ Nước trong sinh hoạt (Đo TDS, pH)</text>
          </g>
        </svg>
      </div>
    </div>
  `
};

module.exports = { diagrams };
