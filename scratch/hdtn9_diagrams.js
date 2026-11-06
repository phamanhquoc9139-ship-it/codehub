// hdtn9_diagrams.js - 9 sơ đồ động lực học và quy trình chuẩn SVG cho 9 chủ đề HĐTN, HN 9
module.exports = {
  // SƠ ĐỒ 1: QUY TRÌNH 6 BƯỚC PHÒNG CHỐNG BẮT NẠT VÀ LAO ĐỘNG CÔNG ÍCH
  soDoNhaTruong: `
    <svg viewBox="0 0 800 320" class="w-full h-auto max-h-[350px] select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="780" height="300" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>
      <text x="400" y="38" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        QUY TRÌNH 6 BƯỚC TỔ CHỨC HOẠT ĐỘNG PHÒNG CHỐNG BẮT NẠT HỌC ĐƯỜNG
      </text>

      <!-- 6 Steps Pipeline -->
      <!-- Step 1 -->
      <g transform="translate(25, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#6366f1" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#4f46e5"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 1</text>
        <circle cx="57" cy="60" r="20" fill="#e0e7ff" class="dark:fill-indigo-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">💡</text>
        <text x="57" y="96" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#4338ca" class="dark:fill-indigo-300">Chọn hình thức</text>
        <text x="8" y="118" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Diễn đàn lớp</text>
        <text x="8" y="136" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Tiểu phẩm kịch</text>
        <text x="8" y="154" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Tranh/áp phích</text>
        <text x="8" y="172" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Tuyên truyền</text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(150, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#0ea5e9" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#0284c7"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 2</text>
        <circle cx="57" cy="60" r="20" fill="#e0f2fe" class="dark:fill-sky-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">🎯</text>
        <text x="57" y="96" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">Xác định mục tiêu</text>
        <text x="8" y="118" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Đối tượng nghe</text>
        <text x="8" y="136" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Thời gian cụ thể</text>
        <text x="8" y="154" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Địa điểm lớp/sân</text>
        <text x="8" y="172" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Nội dung chính</text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(275, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#10b981" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#059669"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 3</text>
        <circle cx="57" cy="60" r="20" fill="#d1fae5" class="dark:fill-emerald-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">👥</text>
        <text x="57" y="96" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">Phân công việc</text>
        <text x="8" y="118" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Người dẫn MC</text>
        <text x="8" y="136" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Chuẩn bị đạo cụ</text>
        <text x="8" y="154" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Tài liệu, khẩu hiệu</text>
        <text x="8" y="172" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Phần thưởng thi</text>
      </g>

      <!-- Step 4 -->
      <g transform="translate(400, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#d97706"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 4</text>
        <circle cx="57" cy="60" r="20" fill="#fef3c7" class="dark:fill-amber-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">📋</text>
        <text x="57" y="96" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">Dự kiến kịch bản</text>
        <text x="8" y="118" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Giới thiệu mở đầu</text>
        <text x="8" y="136" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Hoạt động chính</text>
        <text x="8" y="154" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Tương tác hỏi đáp</text>
        <text x="8" y="172" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Đúc kết thông điệp</text>
      </g>

      <!-- Step 5 -->
      <g transform="translate(525, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#8b5cf6" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#7c3aed"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 5</text>
        <circle cx="57" cy="60" r="20" fill="#ede9fe" class="dark:fill-purple-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">⚖️</text>
        <text x="57" y="96" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6d28d9" class="dark:fill-purple-300">Nêu tiêu chí đo</text>
        <text x="8" y="118" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Nội dung đầy đủ</text>
        <text x="8" y="136" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Sáng tạo hấp dẫn</text>
        <text x="8" y="154" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Minh họa thực tế</text>
        <text x="8" y="172" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Mức độ tham gia</text>
      </g>

      <!-- Step 6 -->
      <g transform="translate(650, 65)">
        <rect x="0" y="0" width="125" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#ec4899" stroke-width="1.5"/>
        <rect x="0" y="0" width="125" height="28" rx="12" fill="#db2777"/>
        <text x="62" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 6</text>
        <circle cx="62" cy="60" r="20" fill="#fce7f3" class="dark:fill-pink-950/60"/>
        <text x="62" y="66" text-anchor="middle" font-size="15">🚀</text>
        <text x="62" y="96" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#be185d" class="dark:fill-pink-300">Thực hiện &amp; Đánh giá</text>
        <text x="8" y="118" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Tổ chức diễn ra</text>
        <text x="8" y="136" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Lấy ý kiến phản hồi</text>
        <text x="8" y="154" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Cam kết hành động</text>
        <text x="8" y="172" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Rút kinh nghiệm</text>
      </g>
    </svg>
  `,

  // SƠ ĐỒ 2: KHÁM PHÁ BẢN THÂN VÀ KHẢ NĂNG THÍCH NGHI VỚI THAY ĐỔI
  soDoKhamPhaBanThan: `
    <svg viewBox="0 0 800 320" class="w-full h-auto max-h-[350px] select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="780" height="300" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>
      <text x="400" y="38" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        MÔ HÌNH NHẬN DIỆN HÀNH VI GIAO TIẾP &amp; 5 BIỂU HIỆN THÍCH NGHI VỚI THAY ĐỔI
      </text>

      <g transform="translate(30, 60)">
        <!-- Box 1: Hành vi tích cực -->
        <rect x="0" y="0" width="230" height="230" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#10b981" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="30" rx="14" fill="#059669"/>
        <text x="115" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">HÀNH VI TÍCH CỰC (+)</text>
        <circle cx="115" cy="65" r="22" fill="#d1fae5" class="dark:fill-emerald-950/60"/>
        <text x="115" y="71" text-anchor="middle" font-size="16">🤝</text>
        <text x="14" y="105" font-size="10.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">Biểu hiện văn minh:</text>
        <text x="14" y="125" font-size="10" fill="#475569" class="dark:fill-slate-300">• Lắng nghe tôn trọng người khác nói</text>
        <text x="14" y="145" font-size="10" fill="#475569" class="dark:fill-slate-300">• Tuân thủ quy tắc nơi công cộng</text>
        <text x="14" y="165" font-size="10" fill="#475569" class="dark:fill-slate-300">• Giúp đỡ người khó khăn, người già</text>
        <text x="14" y="185" font-size="10" fill="#475569" class="dark:fill-slate-300">• Biết nói lời cảm ơn và xin lỗi chân thành</text>
        <text x="14" y="205" font-size="10" fill="#475569" class="dark:fill-slate-300">• Kiểm soát cảm xúc khi bất đồng</text>
      </g>

      <g transform="translate(285, 60)">
        <!-- Box 2: Hành vi cần điều chỉnh -->
        <rect x="0" y="0" width="230" height="230" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#f43f5e" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="30" rx="14" fill="#e11d48"/>
        <text x="115" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">HÀNH VI CHƯA TÍCH CỰC (-)</text>
        <circle cx="115" cy="65" r="22" fill="#ffe4e6" class="dark:fill-rose-950/60"/>
        <text x="115" y="71" text-anchor="middle" font-size="16">⚠️</text>
        <text x="14" y="105" font-size="10.5" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">Cần loại bỏ ngay:</text>
        <text x="14" y="125" font-size="10" fill="#475569" class="dark:fill-slate-300">• Ngắt lời người khác mà không xin phép</text>
        <text x="14" y="145" font-size="10" fill="#475569" class="dark:fill-slate-300">• Dùng lời nói, cử chỉ làm tổn thương bạn</text>
        <text x="14" y="165" font-size="10" fill="#475569" class="dark:fill-slate-300">• Chen lấn xô đẩy, gây mất trật tự</text>
        <text x="14" y="185" font-size="10" fill="#475569" class="dark:fill-slate-300">• Thờ ơ, không cảm ơn người giúp đỡ</text>
        <text x="14" y="205" font-size="10" fill="#475569" class="dark:fill-slate-300">• Phán xét, chế giễu điểm khác biệt</text>
      </g>

      <g transform="translate(540, 60)">
        <!-- Box 3: 5 Năng lực thích nghi -->
        <rect x="0" y="0" width="230" height="230" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#3b82f6" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="30" rx="14" fill="#2563eb"/>
        <text x="115" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">5 TRỤ CỘT THÍCH NGHI</text>
        <circle cx="115" cy="65" r="22" fill="#dbeafe" class="dark:fill-blue-950/60"/>
        <text x="115" y="71" text-anchor="middle" font-size="16">🌱</text>
        <text x="14" y="105" font-size="10.5" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">Thay đổi môi trường sống/học:</text>
        <text x="14" y="125" font-size="10" fill="#475569" class="dark:fill-slate-300">1. Chấp nhận và nhận diện cảm xúc</text>
        <text x="14" y="145" font-size="10" fill="#475569" class="dark:fill-slate-300">2. Dự đoán tình huống &amp; khó khăn</text>
        <text x="14" y="165" font-size="10" fill="#475569" class="dark:fill-slate-300">3. Chủ động học hỏi điều mới</text>
        <text x="14" y="185" font-size="10" fill="#475569" class="dark:fill-slate-300">4. Từ bỏ định kiến, thói quen cũ</text>
        <text x="14" y="205" font-size="10" fill="#475569" class="dark:fill-slate-300">5. Chủ động hòa nhập, nhờ trợ giúp</text>
      </g>
    </svg>
  `,

  // SƠ ĐỒ 3: QUY TRÌNH 6 BƯỚC ỨNG PHÓ CĂNG THẲNG VÀ ÁP LỰC
  soDoTrachNhiemUngPho: `
    <svg viewBox="0 0 800 320" class="w-full h-auto max-h-[350px] select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="780" height="300" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>
      <text x="400" y="38" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        TIẾN TRÌNH 6 BƯỚC ỨNG PHÓ KHOA HỌC VỚI CĂNG THẲNG &amp; ÁP LỰC HỌC TẬP
      </text>

      <g transform="translate(30, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#ef4444" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#dc2626"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 1</text>
        <circle cx="57" cy="60" r="20" fill="#fee2e2" class="dark:fill-red-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">🔍</text>
        <text x="57" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c" class="dark:fill-red-300">Nhận diện</text>
        <text x="8" y="118" font-size="9" fill="#475569" class="dark:fill-slate-300">• Dấu hiệu căng thẳng</text>
        <text x="8" y="136" font-size="9" fill="#475569" class="dark:fill-slate-300">• Tình huống kích hoạt</text>
        <text x="8" y="154" font-size="9" fill="#475569" class="dark:fill-slate-300">• Nguyên nhân gốc rễ</text>
      </g>

      <g transform="translate(155, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#f97316" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#ea580c"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 2</text>
        <circle cx="57" cy="60" r="20" fill="#ffedd5" class="dark:fill-orange-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">🎯</text>
        <text x="57" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#c2410c" class="dark:fill-orange-300">Phân định</text>
        <text x="8" y="118" font-size="9" fill="#475569" class="dark:fill-slate-300">• Việc trong tầm tay</text>
        <text x="8" y="136" font-size="9" fill="#475569" class="dark:fill-slate-300">• Việc chưa kiểm soát</text>
        <text x="8" y="154" font-size="9" fill="#475569" class="dark:fill-slate-300">• Tập trung ưu tiên</text>
      </g>

      <g transform="translate(280, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#d97706"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 3</text>
        <circle cx="57" cy="60" r="20" fill="#fef3c7" class="dark:fill-amber-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">📑</text>
        <text x="57" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">Lập kế hoạch</text>
        <text x="8" y="118" font-size="9" fill="#475569" class="dark:fill-slate-300">• Chia nhỏ nhiệm vụ</text>
        <text x="8" y="136" font-size="9" fill="#475569" class="dark:fill-slate-300">• Xếp theo thời hạn</text>
        <text x="8" y="154" font-size="9" fill="#475569" class="dark:fill-slate-300">• Chọn cách làm chuẩn</text>
      </g>

      <g transform="translate(405, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#10b981" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#059669"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 4</text>
        <circle cx="57" cy="60" r="20" fill="#d1fae5" class="dark:fill-emerald-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">🧘</text>
        <text x="57" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">Cân bằng</text>
        <text x="8" y="118" font-size="9" fill="#475569" class="dark:fill-slate-300">• Học đi đôi nghỉ ngơi</text>
        <text x="8" y="136" font-size="9" fill="#475569" class="dark:fill-slate-300">• Hít thở sâu nhịp nhàng</text>
        <text x="8" y="154" font-size="9" fill="#475569" class="dark:fill-slate-300">• Nghe nhạc, thể thao</text>
      </g>

      <g transform="translate(530, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#0ea5e9" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#0284c7"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 5</text>
        <circle cx="57" cy="60" r="20" fill="#e0f2fe" class="dark:fill-sky-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">💬</text>
        <text x="57" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">Chia sẻ</text>
        <text x="8" y="118" font-size="9" fill="#475569" class="dark:fill-slate-300">• Tâm sự cùng bố mẹ</text>
        <text x="8" y="136" font-size="9" fill="#475569" class="dark:fill-slate-300">• Bạn thân tin cậy</text>
        <text x="8" y="154" font-size="9" fill="#475569" class="dark:fill-slate-300">• Thầy cô tư vấn tâm lí</text>
      </g>

      <g transform="translate(655, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#8b5cf6" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#7c3aed"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 6</text>
        <circle cx="57" cy="60" r="20" fill="#ede9fe" class="dark:fill-purple-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">📊</text>
        <text x="57" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#6d28d9" class="dark:fill-purple-300">Đánh giá lại</text>
        <text x="8" y="118" font-size="9" fill="#475569" class="dark:fill-slate-300">• Mức độ hồi phục</text>
        <text x="8" y="136" font-size="9" fill="#475569" class="dark:fill-slate-300">• Điều chỉnh kế hoạch</text>
        <text x="8" y="154" font-size="9" fill="#475569" class="dark:fill-slate-300">• Tìm trợ giúp nếu cần</text>
      </g>
    </svg>
  `,

  // SƠ ĐỒ 4: MÔ HÌNH PHÂN BỔ NGÂN SÁCH CÁ NHÂN VÀ TẠO ĐỘNG LỰC
  soDoNganSachCaNhan: `
    <svg viewBox="0 0 800 320" class="w-full h-auto max-h-[350px] select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="780" height="300" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>
      <text x="400" y="38" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        MÔ HÌNH CÂN ĐỐI NGÂN SÁCH HỌC SINH (THU – CHI THIẾT YẾU – SỞ THÍCH – TIẾT KIỆM – CHO/TẶNG)
      </text>

      <g transform="translate(30, 60)">
        <rect x="0" y="0" width="165" height="230" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#0ea5e9" stroke-width="1.5"/>
        <rect x="0" y="0" width="165" height="30" rx="14" fill="#0284c7"/>
        <text x="82" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">1. NGUỒN THU NHẬP</text>
        <circle cx="82" cy="65" r="22" fill="#e0f2fe" class="dark:fill-sky-950/60"/>
        <text x="82" y="71" text-anchor="middle" font-size="16">💵</text>
        <text x="12" y="105" font-size="10.5" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">Các khoản thu có:</text>
        <text x="12" y="125" font-size="10" fill="#475569" class="dark:fill-slate-300">• Tiền tiêu vặt định kì</text>
        <text x="12" y="145" font-size="10" fill="#475569" class="dark:fill-slate-300">• Tiền mừng tuổi / lì xì</text>
        <text x="12" y="165" font-size="10" fill="#475569" class="dark:fill-slate-300">• Học bổng / tiền thưởng</text>
        <text x="12" y="185" font-size="10" fill="#475569" class="dark:fill-slate-300">• Thu nhập phụ việc nhà</text>
      </g>

      <g transform="translate(220, 60)">
        <rect x="0" y="0" width="170" height="230" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#ef4444" stroke-width="1.5"/>
        <rect x="0" y="0" width="170" height="30" rx="14" fill="#dc2626"/>
        <text x="85" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">2. CHI THIẾT YẾU (50%)</text>
        <circle cx="85" cy="65" r="22" fill="#fee2e2" class="dark:fill-red-950/60"/>
        <text x="85" y="71" text-anchor="middle" font-size="16">🍞</text>
        <text x="12" y="105" font-size="10.5" font-weight="bold" fill="#b91c1c" class="dark:fill-red-300">Nhu cầu cơ bản:</text>
        <text x="12" y="125" font-size="10" fill="#475569" class="dark:fill-slate-300">• Bữa sáng &amp; nước uống</text>
        <text x="12" y="145" font-size="10" fill="#475569" class="dark:fill-slate-300">• Đồ dùng học tập, sách vở</text>
        <text x="12" y="165" font-size="10" fill="#475569" class="dark:fill-slate-300">• Xe buýt / đi lại học tập</text>
        <text x="12" y="185" font-size="10" fill="#475569" class="dark:fill-slate-300">• Trang phục, vệ sinh cá nhân</text>
      </g>

      <g transform="translate(415, 60)">
        <rect x="0" y="0" width="170" height="230" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="0" y="0" width="170" height="30" rx="14" fill="#d97706"/>
        <text x="85" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">3. SỞ THÍCH &amp; CHO TẶNG</text>
        <circle cx="85" cy="65" r="22" fill="#fef3c7" class="dark:fill-amber-950/60"/>
        <text x="85" y="71" text-anchor="middle" font-size="16">🎁</text>
        <text x="12" y="105" font-size="10.5" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">Linh hoạt (25-30%):</text>
        <text x="12" y="125" font-size="10" fill="#475569" class="dark:fill-slate-300">• Sách truyện yêu thích</text>
        <text x="12" y="145" font-size="10" fill="#475569" class="dark:fill-slate-300">• Quà sinh nhật bạn bè</text>
        <text x="12" y="165" font-size="10" fill="#475569" class="dark:fill-slate-300">• Quyên góp từ thiện ủng hộ</text>
        <text x="12" y="185" font-size="10" fill="#475569" class="dark:fill-slate-300">• Tham quan, giao lưu lớp</text>
      </g>

      <g transform="translate(610, 60)">
        <rect x="0" y="0" width="165" height="230" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#10b981" stroke-width="1.5"/>
        <rect x="0" y="0" width="165" height="30" rx="14" fill="#059669"/>
        <text x="82" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">4. TIẾT KIỆM (20%)</text>
        <circle cx="82" cy="65" r="22" fill="#d1fae5" class="dark:fill-emerald-950/60"/>
        <text x="82" y="71" text-anchor="middle" font-size="16">🐷</text>
        <text x="12" y="105" font-size="10.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">Tích lũy tương lai:</text>
        <text x="12" y="125" font-size="10" fill="#475569" class="dark:fill-slate-300">• Nuôi heo đất định kì</text>
        <text x="12" y="145" font-size="10" fill="#475569" class="dark:fill-slate-300">• Quỹ dự phòng bất ngờ</text>
        <text x="12" y="165" font-size="10" fill="#475569" class="dark:fill-slate-300">• Mua đồ dùng học tập lớn</text>
        <text x="12" y="185" font-size="10" fill="#475569" class="dark:fill-slate-300">• Chuẩn bị thi chuyển cấp</text>
      </g>
    </svg>
  `,

  // SƠ ĐỒ 5: QUY TRÌNH GIẢI QUYẾT BẤT ĐỒNG & PHÁT TRIỂN KINH TẾ GIA ĐÌNH
  soDoGiaDinh: `
    <svg viewBox="0 0 800 320" class="w-full h-auto max-h-[350px] select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="780" height="300" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>
      <text x="400" y="38" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        TIẾN TRÌNH 4 BƯỚC HÓA GIẢI BẤT ĐỒNG &amp; 4 BƯỚC ĐỀ XUẤT KINH TẾ GIA ĐÌNH
      </text>

      <g transform="translate(30, 60)">
        <rect x="0" y="0" width="355" height="230" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#ec4899" stroke-width="1.5"/>
        <rect x="0" y="0" width="355" height="32" rx="14" fill="#db2777"/>
        <text x="177" y="21" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">A. 4 BƯỚC GIẢI QUYẾT BẤT ĐỒNG GIA ĐÌNH</text>

        <text x="15" y="60" font-size="10.5" font-weight="bold" fill="#be185d" class="dark:fill-pink-300">Bước 1: Tìm hiểu nguyên nhân &amp; Lắng nghe</text>
        <text x="15" y="78" font-size="10" fill="#475569" class="dark:fill-slate-300">Lắng nghe quan điểm của từng thành viên với thái độ bình tĩnh, tôn trọng.</text>

        <text x="15" y="105" font-size="10.5" font-weight="bold" fill="#be185d" class="dark:fill-pink-300">Bước 2: Nhận diện cảm xúc &amp; Nhu cầu</text>
        <text x="15" y="123" font-size="10" fill="#475569" class="dark:fill-slate-300">Thấu hiểu mong muốn thực sự; tránh định kiến, áp đặt hoặc công kích cá nhân.</text>

        <text x="15" y="150" font-size="10.5" font-weight="bold" fill="#be185d" class="dark:fill-pink-300">Bước 3: Đề xuất phương án &amp; Thống nhất</text>
        <text x="15" y="168" font-size="10" fill="#475569" class="dark:fill-slate-300">Cùng bàn bạc giải pháp hài hòa lợi ích chung, đôi bên cùng chấp nhận.</text>

        <text x="15" y="195" font-size="10.5" font-weight="bold" fill="#be185d" class="dark:fill-pink-300">Bước 4: Thực hiện &amp; Trao đổi kết quả</text>
        <text x="15" y="213" font-size="10" fill="#475569" class="dark:fill-slate-300">Tổ chức thực hiện giải pháp, theo dõi và gắn kết tình cảm yêu thương.</text>
      </g>

      <g transform="translate(415, 60)">
        <rect x="0" y="0" width="355" height="230" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#10b981" stroke-width="1.5"/>
        <rect x="0" y="0" width="355" height="32" rx="14" fill="#059669"/>
        <text x="177" y="21" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">B. 4 BƯỚC ĐỀ XUẤT KINH TẾ GIA ĐÌNH</text>

        <text x="15" y="60" font-size="10.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">Bước 1: Tìm hiểu nhu cầu thực tế</text>
        <text x="15" y="78" font-size="10" fill="#475569" class="dark:fill-slate-300">Nắm bắt nhu cầu của thị trường/người dân địa phương (rau sạch, ẩm thực...).</text>

        <text x="15" y="105" font-size="10.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">Bước 2: Phân tích điều kiện gia đình</text>
        <text x="15" y="123" font-size="10" fill="#475569" class="dark:fill-slate-300">Đánh giá nhân lực, thời gian rảnh, vốn tích lũy, mặt bằng và phương tiện.</text>

        <text x="15" y="150" font-size="10.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">Bước 3: Đề xuất mô hình khả thi</text>
        <text x="15" y="168" font-size="10" fill="#475569" class="dark:fill-slate-300">Chọn giải pháp: Sản xuất (trồng trọt, thủ công), Kinh doanh hoặc Dịch vụ.</text>

        <text x="15" y="195" font-size="10.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">Bước 4: Cùng gia đình thảo luận &amp; Quyết định</text>
        <text x="15" y="213" font-size="10" fill="#475569" class="dark:fill-slate-300">Họp gia đình, thống nhất phân công nhiệm vụ và ghi lại quyết định chung.</text>
      </g>
    </svg>
  `,

  // SƠ ĐỒ 6: CHU TRÌNH KHẢO SÁT GIAO TIẾP MẠNG XÃ HỘI & MẠNG LƯỚI CỘNG ĐỒNG
  soDoCongDongMXH: `
    <svg viewBox="0 0 800 320" class="w-full h-auto max-h-[350px] select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="780" height="300" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>
      <text x="400" y="38" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        QUY TRÌNH 6 BƯỚC KHẢO SÁT THỰC TRẠNG GIAO TIẾP MẠNG XÃ HỘI CỦA HỌC SINH
      </text>

      <g transform="translate(25, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#3b82f6" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#2563eb"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 1</text>
        <circle cx="57" cy="60" r="20" fill="#dbeafe" class="dark:fill-blue-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">🎯</text>
        <text x="57" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">Xác định đề tài</text>
        <text x="8" y="118" font-size="9" fill="#475569" class="dark:fill-slate-300">• Mục đích khảo sát</text>
        <text x="8" y="136" font-size="9" fill="#475569" class="dark:fill-slate-300">• Đối tượng: HS khối 9</text>
        <text x="8" y="154" font-size="9" fill="#475569" class="dark:fill-slate-300">• Nội dung hành vi</text>
      </g>

      <g transform="translate(150, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#0ea5e9" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#0284c7"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 2</text>
        <circle cx="57" cy="60" r="20" fill="#e0f2fe" class="dark:fill-sky-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">📋</text>
        <text x="57" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">Lập kế hoạch</text>
        <text x="8" y="118" font-size="9" fill="#475569" class="dark:fill-slate-300">• Mốc thời gian</text>
        <text x="8" y="136" font-size="9" fill="#475569" class="dark:fill-slate-300">• Phương pháp lấy mẫu</text>
        <text x="8" y="154" font-size="9" fill="#475569" class="dark:fill-slate-300">• Phân công nhóm</text>
      </g>

      <g transform="translate(275, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#10b981" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#059669"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 3</text>
        <circle cx="57" cy="60" r="20" fill="#d1fae5" class="dark:fill-emerald-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">📝</text>
        <text x="57" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">Thiết kế công cụ</text>
        <text x="8" y="118" font-size="9" fill="#475569" class="dark:fill-slate-300">• Phiếu hỏi trắc nghiệm</text>
        <text x="8" y="136" font-size="9" fill="#475569" class="dark:fill-slate-300">• Câu hỏi phỏng vấn</text>
        <text x="8" y="154" font-size="9" fill="#475569" class="dark:fill-slate-300">• Bảo mật thông tin</text>
      </g>

      <g transform="translate(400, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#d97706"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 4</text>
        <circle cx="57" cy="60" r="20" fill="#fef3c7" class="dark:fill-amber-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">🤝</text>
        <text x="57" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">Tiến hành thu thập</text>
        <text x="8" y="118" font-size="9" fill="#475569" class="dark:fill-slate-300">• Phát phiếu khảo sát</text>
        <text x="8" y="136" font-size="9" fill="#475569" class="dark:fill-slate-300">• Tôn trọng người dự</text>
        <text x="8" y="154" font-size="9" fill="#475569" class="dark:fill-slate-300">• Không thu thập pass</text>
      </g>

      <g transform="translate(525, 65)">
        <rect x="0" y="0" width="115" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#8b5cf6" stroke-width="1.5"/>
        <rect x="0" y="0" width="115" height="28" rx="12" fill="#7c3aed"/>
        <text x="57" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 5</text>
        <circle cx="57" cy="60" r="20" fill="#ede9fe" class="dark:fill-purple-950/60"/>
        <text x="57" y="66" text-anchor="middle" font-size="15">📈</text>
        <text x="57" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#6d28d9" class="dark:fill-purple-300">Xử lí số liệu</text>
        <text x="8" y="118" font-size="9" fill="#475569" class="dark:fill-slate-300">• Thống kê tỉ lệ %</text>
        <text x="8" y="136" font-size="9" fill="#475569" class="dark:fill-slate-300">• Lập biểu đồ cột/tròn</text>
        <text x="8" y="154" font-size="9" fill="#475569" class="dark:fill-slate-300">• Rút ra nhận xét</text>
      </g>

      <g transform="translate(650, 65)">
        <rect x="0" y="0" width="125" height="215" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#ec4899" stroke-width="1.5"/>
        <rect x="0" y="0" width="125" height="28" rx="12" fill="#db2777"/>
        <text x="62" y="19" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BƯỚC 6</text>
        <circle cx="62" cy="60" r="20" fill="#fce7f3" class="dark:fill-pink-950/60"/>
        <text x="62" y="66" text-anchor="middle" font-size="15">📢</text>
        <text x="62" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#be185d" class="dark:fill-pink-300">Báo cáo &amp; Giải pháp</text>
        <text x="8" y="118" font-size="9" fill="#475569" class="dark:fill-slate-300">• Trình bày trước lớp</text>
        <text x="8" y="136" font-size="9" fill="#475569" class="dark:fill-slate-300">• Cảnh báo rủi ro</text>
        <text x="8" y="154" font-size="9" fill="#475569" class="dark:fill-slate-300">• Thông điệp văn minh</text>
      </g>
    </svg>
  `,

  // SƠ ĐỒ 7: KHẢO SÁT NGUYÊN NHÂN Ô NHIỄM VÀ BẢO VỆ MÔI TRƯỜNG
  soDoMoiTruong: `
    <svg viewBox="0 0 800 320" class="w-full h-auto max-h-[350px] select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="780" height="300" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>
      <text x="400" y="38" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        QUY TRÌNH 7 BƯỚC KHẢO SÁT NGUYÊN NHÂN Ô NHIỄM &amp; KẾ HOẠCH BẢO VỆ MÔI TRƯỜNG
      </text>

      <g transform="translate(25, 65)">
        <rect x="0" y="0" width="100" height="215" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#10b981" stroke-width="1.5"/>
        <rect x="0" y="0" width="100" height="26" rx="10" fill="#059669"/>
        <text x="50" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BƯỚC 1</text>
        <text x="50" y="55" text-anchor="middle" font-size="14">🎯</text>
        <text x="50" y="80" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">Chọn mục đích</text>
        <text x="6" y="105" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Đất, nước, khí</text>
        <text x="6" y="122" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Tiếng ồn</text>
        <text x="6" y="139" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Địa bàn khảo sát</text>
      </g>

      <g transform="translate(133, 65)">
        <rect x="0" y="0" width="100" height="215" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#0ea5e9" stroke-width="1.5"/>
        <rect x="0" y="0" width="100" height="26" rx="10" fill="#0284c7"/>
        <text x="50" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BƯỚC 2</text>
        <text x="50" y="55" text-anchor="middle" font-size="14">🏭</text>
        <text x="50" y="80" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">Mô tả nguồn</text>
        <text x="6" y="105" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Rác thải sinh hoạt</text>
        <text x="6" y="122" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Sản xuất, dịch vụ</text>
        <text x="6" y="139" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Chăn nuôi, xe cộ</text>
      </g>

      <g transform="translate(241, 65)">
        <rect x="0" y="0" width="100" height="215" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="0" y="0" width="100" height="26" rx="10" fill="#d97706"/>
        <text x="50" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BƯỚC 3</text>
        <text x="50" y="55" text-anchor="middle" font-size="14">🔍</text>
        <text x="50" y="80" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">Chọn cách làm</text>
        <text x="6" y="105" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Quan sát thực địa</text>
        <text x="6" y="122" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Phỏng vấn dân cư</text>
        <text x="6" y="139" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Tra cứu tư liệu</text>
      </g>

      <g transform="translate(349, 65)">
        <rect x="0" y="0" width="100" height="215" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#8b5cf6" stroke-width="1.5"/>
        <rect x="0" y="0" width="100" height="26" rx="10" fill="#7c3aed"/>
        <text x="50" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BƯỚC 4</text>
        <text x="50" y="55" text-anchor="middle" font-size="14">📑</text>
        <text x="50" y="80" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#6d28d9" class="dark:fill-purple-300">Thiết kế phiếu</text>
        <text x="6" y="105" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Mức độ mùi hôi</text>
        <text x="6" y="122" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Màu nước, khói bụi</text>
        <text x="6" y="139" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Chuẩn bị máy ảnh</text>
      </g>

      <g transform="translate(457, 65)">
        <rect x="0" y="0" width="100" height="215" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#ec4899" stroke-width="1.5"/>
        <rect x="0" y="0" width="100" height="26" rx="10" fill="#db2777"/>
        <text x="50" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BƯỚC 5</text>
        <text x="50" y="55" text-anchor="middle" font-size="14">🚶</text>
        <text x="50" y="80" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#be185d" class="dark:fill-pink-300">Khảo sát an toàn</text>
        <text x="6" y="105" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Đi theo nhóm</text>
        <text x="6" y="122" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Có người lớn chỉ dẫn</text>
        <text x="6" y="139" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Không chạm rác độc</text>
      </g>

      <g transform="translate(565, 65)">
        <rect x="0" y="0" width="100" height="215" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#3b82f6" stroke-width="1.5"/>
        <rect x="0" y="0" width="100" height="26" rx="10" fill="#2563eb"/>
        <text x="50" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BƯỚC 6</text>
        <text x="50" y="55" text-anchor="middle" font-size="14">📊</text>
        <text x="50" y="80" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">Tổng hợp liệu</text>
        <text x="6" y="105" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Bảng thống kê</text>
        <text x="6" y="122" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Tách quan sát khách</text>
        <text x="6" y="139" font-size="8.5" fill="#475569" class="dark:fill-slate-300">quan với suy đoán</text>
      </g>

      <g transform="translate(673, 65)">
        <rect x="0" y="0" width="102" height="215" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#14b8a6" stroke-width="1.5"/>
        <rect x="0" y="0" width="102" height="26" rx="10" fill="#0d9488"/>
        <text x="51" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">BƯỚC 7</text>
        <text x="51" y="55" text-anchor="middle" font-size="14">📢</text>
        <text x="51" y="80" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">Lập kế hoạch</text>
        <text x="6" y="105" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Tuyên truyền xanh</text>
        <text x="6" y="122" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Đề xuất thùng rác</text>
        <text x="6" y="139" font-size="8.5" fill="#475569" class="dark:fill-slate-300">• Báo cáo sản phẩm</text>
      </g>
    </svg>
  `,

  // SƠ ĐỒ 8: 6 YẾU TỐ TÌM HIỂU THẾ GIỚI NGHỀ NGHIỆP (VÍ DỤ: CẢNH SÁT CỨU HỎA)
  soDoKhamPhaNgheNghiep: `
    <svg viewBox="0 0 800 320" class="w-full h-auto max-h-[350px] select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="780" height="300" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>
      <text x="400" y="38" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        BẢN ĐỒ 6 NHÓM THÔNG TIN TÌM HIỂU NGHỀ (ĐIỂN HÌNH: NGHỀ CẢNH SÁT CỨU HỎA)
      </text>

      <g transform="translate(30, 60)">
        <rect x="0" y="0" width="230" height="110" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#ef4444" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="26" rx="12" fill="#dc2626"/>
        <text x="115" y="18" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">1. TÊN NGHỀ &amp; CÔNG VIỆC CHÍNH</text>
        <text x="12" y="48" font-size="10" font-weight="bold" fill="#b91c1c" class="dark:fill-red-300">• Nghề:</text>
        <text x="50" y="48" font-size="10" fill="#475569" class="dark:fill-slate-300">Cảnh sát PCCC &amp; CNCH</text>
        <text x="12" y="68" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Dập lửa, sơ tán cứu người và tài sản</text>
        <text x="12" y="88" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Tuyên truyền an toàn phòng chống cháy</text>
      </g>

      <g transform="translate(285, 60)">
        <rect x="0" y="0" width="230" height="110" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#f97316" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="26" rx="12" fill="#ea580c"/>
        <text x="115" y="18" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">2. TRANG BỊ &amp; DỤNG CỤ LAO ĐỘNG</text>
        <text x="12" y="48" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Xe chữa cháy chuyên dụng, máy bơm</text>
        <text x="12" y="68" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Vòi rồng, bình bọt/khí CO2, thang cứu hộ</text>
        <text x="12" y="88" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Mặt nạ phòng độc, quần áo chống cháy</text>
      </g>

      <g transform="translate(540, 60)">
        <rect x="0" y="0" width="230" height="110" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#3b82f6" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="26" rx="12" fill="#2563eb"/>
        <text x="115" y="18" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">3. PHẨM CHẤT &amp; NĂNG LỰC</text>
        <text x="12" y="48" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Dũng cảm, bình tĩnh, kiên cường</text>
        <text x="12" y="68" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Sức khỏe dẻo dai, phản xạ cực nhanh</text>
        <text x="12" y="88" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Kĩ năng sơ cứu &amp; phối hợp đồng đội</text>
      </g>

      <g transform="translate(30, 185)">
        <rect x="0" y="0" width="230" height="110" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#f43f5e" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="26" rx="12" fill="#e11d48"/>
        <text x="115" y="18" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">4. NGUY CƠ NGHỀ NGHIỆP</text>
        <text x="12" y="48" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Bỏng lửa, ngạt khói khí độc</text>
        <text x="12" y="68" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Sập đổ công trình, chấn thương</text>
        <text x="12" y="88" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Cần tuân thủ nghiêm quy trình an toàn</text>
      </g>

      <g transform="translate(285, 185)">
        <rect x="0" y="0" width="230" height="110" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#10b981" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="26" rx="12" fill="#059669"/>
        <text x="115" y="18" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">5. CÁCH RÈN LUYỆN BẢN THÂN</text>
        <text x="12" y="48" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Rèn luyện thể lực: chạy bền, bơi lội</text>
        <text x="12" y="68" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Học kĩ năng thoát hiểm, dùng bình cứu hỏa</text>
        <text x="12" y="88" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Tham gia hoạt động tập thể, rèn kỉ luật</text>
      </g>

      <g transform="translate(540, 185)">
        <rect x="0" y="0" width="230" height="110" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#8b5cf6" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="26" rx="12" fill="#7c3aed"/>
        <text x="115" y="18" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">6. NGUỒN TÌM HIỂU TIN CẬY</text>
        <text x="12" y="48" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Cổng thông tin Cục Cảnh sát PCCC</text>
        <text x="12" y="68" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Hỏi trực tiếp các chiến sĩ đang làm nghề</text>
        <text x="12" y="88" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Trải nghiệm thực tế diễn tập trường học</text>
      </g>
    </svg>
  `,

  // SƠ ĐỒ 9: SƠ ĐỒ PHÂN LUỒNG GIÁO DỤC & CON ĐƯỜNG HỌC TẬP SAU THCS
  soDoChonNgheSauTHCS: `
    <svg viewBox="0 0 800 320" class="w-full h-auto max-h-[350px] select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="780" height="300" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>
      <text x="400" y="38" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        BẢN ĐỒ PHÂN LUỒNG &amp; 3 CON ĐƯỜNG HỌC TẬP, PHÁT TRIỂN SAU THCS
      </text>

      <!-- Center Node: Tốt nghiệp THCS -->
      <g transform="translate(290, 60)">
        <rect x="0" y="0" width="220" height="42" rx="10" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
        <text x="110" y="26" text-anchor="middle" font-size="12" font-weight="900" fill="#ffffff">🎓 TỐT NGHIỆP LỚP 9 THCS</text>
      </g>

      <!-- Connection Lines -->
      <path d="M 330 102 L 140 135" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-dasharray="4 2"/>
      <path d="M 400 102 L 400 135" fill="none" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4 2"/>
      <path d="M 470 102 L 660 135" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 2"/>

      <!-- Branch 1: Học tiếp THPT -->
      <g transform="translate(30, 140)">
        <rect x="0" y="0" width="225" height="150" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#6366f1" stroke-width="1.5"/>
        <rect x="0" y="0" width="225" height="28" rx="12" fill="#4f46e5"/>
        <text x="112" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">1. HỌC TIẾP LÊN THPT</text>
        <text x="10" y="48" font-size="9.5" font-weight="bold" fill="#4338ca" class="dark:fill-indigo-300">• Đối tượng phù hợp:</text>
        <text x="10" y="66" font-size="9" fill="#475569" class="dark:fill-slate-300">Học lực Khá, Giỏi; định hướng thi ĐH</text>
        <text x="10" y="86" font-size="9.5" font-weight="bold" fill="#4338ca" class="dark:fill-indigo-300">• Thời gian &amp; Bằng cấp:</text>
        <text x="10" y="104" font-size="9" fill="#475569" class="dark:fill-slate-300">3 năm học (lớp 10, 11, 12) &amp; Bằng tốt nghiệp THPT</text>
        <text x="10" y="124" font-size="9.5" font-weight="bold" fill="#4338ca" class="dark:fill-indigo-300">• Cơ hội tiếp theo:</text>
        <text x="10" y="142" font-size="9" fill="#475569" class="dark:fill-slate-300">Đại học, Cao đẳng, Học nghề chuyên sâu</text>
      </g>

      <!-- Branch 2: Giáo dục nghề nghiệp -->
      <g transform="translate(285, 140)">
        <rect x="0" y="0" width="230" height="150" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#10b981" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="28" rx="12" fill="#059669"/>
        <text x="115" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">2. GIÁO DỤC NGHỀ NGHIỆP</text>
        <text x="10" y="48" font-size="9.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">• Cơ sở đào tạo:</text>
        <text x="10" y="66" font-size="9" fill="#475569" class="dark:fill-slate-300">Trường Trung cấp, Cao đẳng, Trung tâm GDNN</text>
        <text x="10" y="86" font-size="9.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">• Mô hình 9+ (Học nghề + Văn hóa):</text>
        <text x="10" y="104" font-size="9" fill="#475569" class="dark:fill-slate-300">Nhận bằng Trung cấp &amp; Chứng nhận văn hóa phổ thông</text>
        <text x="10" y="124" font-size="9.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">• Cơ hội việc làm:</text>
        <text x="10" y="142" font-size="9" fill="#475569" class="dark:fill-slate-300">Có việc làm sớm ở tuổi 18 hoặc liên thông Cao đẳng/ĐH</text>
      </g>

      <!-- Branch 3: Tham gia lao động -->
      <g transform="translate(545, 140)">
        <rect x="0" y="0" width="225" height="150" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="0" y="0" width="225" height="28" rx="12" fill="#d97706"/>
        <text x="112" y="19" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">3. THAM GIA LAO ĐỘNG</text>
        <text x="10" y="48" font-size="9.5" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">• Điều kiện thực tế:</text>
        <text x="10" y="66" font-size="9" fill="#475569" class="dark:fill-slate-300">Hoàn cảnh gia đình khó khăn, phụ giúp kinh tế</text>
        <text x="10" y="86" font-size="9.5" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">• Hình thức:</text>
        <text x="10" y="104" font-size="9" fill="#475569" class="dark:fill-slate-300">Làm kinh tế gia đình, học việc trực tiếp tại cơ sở SX</text>
        <text x="10" y="124" font-size="9.5" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">• Khuyến nghị phát triển:</text>
        <text x="10" y="142" font-size="9" fill="#475569" class="dark:fill-slate-300">Vừa làm vừa học bổ túc GDTX hoặc các khóa sơ cấp ngắn</text>
      </g>
    </svg>
  `
};
