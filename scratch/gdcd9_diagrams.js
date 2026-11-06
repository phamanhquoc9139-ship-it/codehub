// gdcd9_diagrams.js - 10 Sơ đồ vector SVG độc bản cho 10 bài học GDCD 9

const gdcd9Diagrams = {
  // SƠ ĐỒ BÀI 1: Bậc thang Lí tưởng sống của thanh niên Việt Nam
  soDoLiTuong: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-blue-950/40 border border-blue-200 dark:border-blue-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-stairs"></i> Sơ đồ Bậc Thang Giá Trị: Lí Tưởng Sống Của Thanh Niên Việt Nam (Bài 1)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#bfdbfe" stroke-width="1.5"/>

        <!-- Bậc 1: Tu dưỡng cá nhân -->
        <g transform="translate(20, 110)">
          <rect width="135" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="67" y="22" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1d4ed8">1. TU DƯỠNG</text>
          <text x="67" y="42" text-anchor="middle" font-size="8.5" fill="#1e40af">Học tập tốt, rèn sức khoẻ</text>
        </g>
        <line x1="155" y1="125" x2="175" y2="95" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,3"/>

        <!-- Bậc 2: Đạo đức & Lối sống -->
        <g transform="translate(175, 80)">
          <rect width="135" height="60" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/>
          <text x="67" y="22" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#3730a3">2. ĐẠO ĐỨC</text>
          <text x="67" y="42" text-anchor="middle" font-size="8.5" fill="#312e81">Sống trách nhiệm, kỉ luật</text>
        </g>
        <line x1="310" y1="95" x2="330" y2="65" stroke="#4f46e5" stroke-width="2" stroke-dasharray="3,3"/>

        <!-- Bậc 3: Bản lĩnh công dân -->
        <g transform="translate(330, 50)">
          <rect width="135" height="60" rx="8" fill="#fdf4ff" stroke="#9333ea" stroke-width="1.5"/>
          <text x="67" y="22" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#7e22ce">3. BẢN LĨNH</text>
          <text x="67" y="42" text-anchor="middle" font-size="8.5" fill="#6b21a8">Năng động, làm chủ tri thức</text>
        </g>
        <line x1="465" y1="65" x2="485" y2="35" stroke="#9333ea" stroke-width="2" stroke-dasharray="3,3"/>

        <!-- Bậc 4: Cống hiến Tổ quốc -->
        <g transform="translate(485, 20)">
          <rect width="145" height="65" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
          <text x="72" y="22" text-anchor="middle" font-size="10" font-weight="black" fill="#b91c1c">4. CỐNG HIẾN</text>
          <text x="72" y="40" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#991b1b">Xây dựng &amp; bảo vệ</text>
          <text x="72" y="54" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#991b1b">Tổ quốc Việt Nam XHCN</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 2: Bản chất và Giới hạn của Lòng Khoan Dung
  soDoKhoanDung: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 dark:from-slate-900 dark:to-rose-950/40 border border-rose-200 dark:border-rose-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-rose-900 dark:text-rose-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-heart"></i> Sơ đồ Cấu trúc Phẩm chất: Bản chất &amp; Ranh giới của Lòng Khoan Dung (Bài 2)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#fecdd3" stroke-width="1.5"/>

        <!-- Cột Trái: Biểu hiện của Khoan Dung -->
        <g transform="translate(20, 20)">
          <rect width="285" height="150" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
          <rect width="285" height="30" rx="10" fill="#16a34a"/>
          <text x="142" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">BIỂU HIỆN KHOAN DUNG ĐÚNG ĐẮN</text>
          <text x="20" y="55" font-size="9" fill="#166534">✓ Tha thứ khi người khác biết lỗi và sửa sai</text>
          <text x="20" y="78" font-size="9" fill="#166534">✓ Lắng nghe, tôn trọng sự khác biệt chính đáng</text>
          <text x="20" y="101" font-size="9" fill="#166534">✓ Ứng xử rộng lượng, giúp người lầm lỡ hoà nhập</text>
          <text x="20" y="124" font-size="9" fill="#166534">✓ Không định kiến hẹp hòi, không cố chấp</text>
        </g>

        <!-- Trục đối chiếu ở giữa -->
        <line x1="325" y1="20" x2="325" y2="170" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/>

        <!-- Cột Phải: Không đồng nghĩa với Dung túng -->
        <g transform="translate(345, 20)">
          <rect width="285" height="150" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
          <rect width="285" height="30" rx="10" fill="#dc2626"/>
          <text x="142" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ffffff">RANH GIỚI: KHÔNG PHẢI KHOAN DUNG</text>
          <text x="20" y="55" font-size="9" fill="#991b1b">✗ Bao che, đồng tình với việc làm sai trái</text>
          <text x="20" y="78" font-size="9" fill="#991b1b">✗ Bỏ qua mọi lỗi lầm gây phương hại cộng đồng</text>
          <text x="20" y="101" font-size="9" fill="#991b1b">✗ Thoả hiệp với cái ác, bất công xã hội</text>
          <text x="20" y="124" font-size="9" fill="#991b1b">→ Cần góp ý chân thành và phê phán phù hợp</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 3: 5 Mảng hoạt động cộng đồng
  soDoCongDong: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-emerald-950/40 border border-emerald-200 dark:border-emerald-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-users"></i> Sơ đồ 5 Mảng Hoạt Động Cộng Đồng &amp; Trách Nhiệm Học Sinh (Bài 3)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#a7f3d0" stroke-width="1.5"/>

        <g transform="translate(15, 20)">
          <rect width="115" height="150" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.3"/>
          <circle cx="57" cy="35" r="16" fill="#16a34a"/>
          <text x="57" y="40" text-anchor="middle" font-size="14" fill="#fff">❤️</text>
          <text x="57" y="72" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">Thiện nguyện</text>
          <text x="57" y="90" text-anchor="middle" font-size="8" fill="#166534">Hỗ trợ người nghèo,</text>
          <text x="57" y="105" text-anchor="middle" font-size="8" fill="#166534">hiến máu, áo ấm</text>
        </g>

        <g transform="translate(140, 20)">
          <rect width="115" height="150" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.3"/>
          <circle cx="57" cy="35" r="16" fill="#2563eb"/>
          <text x="57" y="40" text-anchor="middle" font-size="14" fill="#fff">🎖️</text>
          <text x="57" y="72" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">Đền ơn đáp nghĩa</text>
          <text x="57" y="90" text-anchor="middle" font-size="8" fill="#1d4ed8">Thăm gia đình liệt sĩ,</text>
          <text x="57" y="105" text-anchor="middle" font-size="8" fill="#1d4ed8">Mẹ Việt Nam AH</text>
        </g>

        <g transform="translate(265, 20)">
          <rect width="115" height="150" rx="8" fill="#ecfeff" stroke="#0891b2" stroke-width="1.3"/>
          <circle cx="57" cy="35" r="16" fill="#0891b2"/>
          <text x="57" y="40" text-anchor="middle" font-size="14" fill="#fff">🌱</text>
          <text x="57" y="72" text-anchor="middle" font-size="9" font-weight="bold" fill="#0e7490">Môi trường</text>
          <text x="57" y="90" text-anchor="middle" font-size="8" fill="#155e75">Dọn rác khu phố,</text>
          <text x="57" y="105" text-anchor="middle" font-size="8" fill="#155e75">trồng cây xanh</text>
        </g>

        <g transform="translate(390, 20)">
          <rect width="115" height="150" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.3"/>
          <circle cx="57" cy="35" r="16" fill="#ea580c"/>
          <text x="57" y="40" text-anchor="middle" font-size="14" fill="#fff">🚫</text>
          <text x="57" y="72" text-anchor="middle" font-size="9" font-weight="bold" fill="#c2410c">Phòng tệ nạn</text>
          <text x="57" y="90" text-anchor="middle" font-size="8" fill="#9a3412">Tuyên truyền ma tuý,</text>
          <text x="57" y="105" text-anchor="middle" font-size="8" fill="#9a3412">bảo đảm ATGT</text>
        </g>

        <g transform="translate(515, 20)">
          <rect width="120" height="150" rx="8" fill="#fdf4ff" stroke="#9333ea" stroke-width="1.3"/>
          <circle cx="60" cy="35" r="16" fill="#9333ea"/>
          <text x="60" y="40" text-anchor="middle" font-size="14" fill="#fff">🏛️</text>
          <text x="60" y="72" text-anchor="middle" font-size="9" font-weight="bold" fill="#7e22ce">Văn hoá truyền thống</text>
          <text x="60" y="90" text-anchor="middle" font-size="8" fill="#6b21a8">Bảo tồn di tích,</text>
          <text x="60" y="105" text-anchor="middle" font-size="8" fill="#6b21a8">lễ hội dân gian</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 4: Khách quan vs Công bằng
  soDoCongLy: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-200 dark:border-indigo-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-scale-balanced"></i> Cân Công Lí: Phân Biệt Giữa Khách Quan &amp; Công Bằng (Bài 4)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#c7d2fe" stroke-width="1.5"/>

        <!-- Đĩa cân 1: Khách quan -->
        <g transform="translate(25, 20)">
          <rect width="275" height="150" rx="10" fill="#f8fafc" stroke="#3b82f6" stroke-width="1.5"/>
          <rect width="275" height="30" rx="10" fill="#3b82f6"/>
          <text x="137" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">KHÁCH QUAN (Nhận thức đúng đắn)</text>
          <text x="137" y="52" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e40af">Dựa trên chứng cứ &amp; sự thật</text>
          <text x="20" y="76" font-size="9" fill="#334155">• Đánh giá chính xác, trung thực</text>
          <text x="20" y="98" font-size="9" fill="#334155">• Không định kiến, không bị cảm xúc chi phối</text>
          <text x="20" y="120" font-size="9" fill="#334155">• Xem xét đa chiều nhiều khía cạnh</text>
          <text x="20" y="142" font-size="9" font-weight="bold" fill="#2563eb">Hậu quả nếu thiếu: Đưa ra quyết định sai lầm</text>
        </g>

        <!-- Đĩa cân 2: Công bằng -->
        <g transform="translate(350, 20)">
          <rect width="275" height="150" rx="10" fill="#f8fafc" stroke="#d97706" stroke-width="1.5"/>
          <rect width="275" height="30" rx="10" fill="#d97706"/>
          <text x="137" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">CÔNG BẰNG (Hành vi đối xử bình đẳng)</text>
          <text x="137" y="52" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#b45309">Không thiên vị, bình đẳng cơ hội</text>
          <text x="20" y="76" font-size="9" fill="#334155">• Đối xử bình đẳng quyền và nghĩa vụ</text>
          <text x="20" y="98" font-size="9" fill="#334155">• Ưu tiên hỗ trợ người yếu thế tiếp cận cơ hội</text>
          <text x="20" y="120" font-size="9" fill="#334155">• Đánh giá theo cùng tiêu chí chung</text>
          <text x="20" y="142" font-size="9" font-weight="bold" fill="#b45309">Hậu quả nếu thiếu: Bất mãn, mâu thuẫn xung đột</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 5: 3 Trụ cột Bảo vệ Hoà Bình
  soDoHoaBinh: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-slate-900 dark:to-sky-950/40 border border-sky-200 dark:border-sky-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-sky-900 dark:text-sky-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-dove"></i> Sơ đồ 3 Trụ Cột Nền Tảng Của Việc Bảo Vệ Hoà Bình (Bài 5)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#bae6fd" stroke-width="1.5"/>

        <g transform="translate(25, 20)">
          <rect width="180" height="150" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.3"/>
          <text x="90" y="24" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">1. ĐÀM PHÁN HOÀ BÌNH</text>
          <circle cx="90" cy="55" r="18" fill="#0284c7"/>
          <text x="90" y="60" text-anchor="middle" font-size="15" fill="#fff">🤝</text>
          <text x="90" y="95" text-anchor="middle" font-size="8.5" fill="#0369a1">• Giải quyết tranh chấp</text>
          <text x="90" y="112" text-anchor="middle" font-size="8.5" fill="#0369a1">bằng thương lượng</text>
          <text x="90" y="130" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0c4a6e">Tránh dùng bạo lực</text>
        </g>

        <g transform="translate(235, 20)">
          <rect width="180" height="150" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.3"/>
          <text x="90" y="24" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">2. THƯỢNG TÔN LUẬT PHÁP</text>
          <circle cx="90" cy="55" r="18" fill="#16a34a"/>
          <text x="90" y="60" text-anchor="middle" font-size="15" fill="#fff">⚖️</text>
          <text x="90" y="95" text-anchor="middle" font-size="8.5" fill="#166534">• Căn cứ pháp luật quốc tế</text>
          <text x="90" y="112" text-anchor="middle" font-size="8.5" fill="#166534">&amp; Hiến chương LHQ</text>
          <text x="90" y="130" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#14532d">Không thoả hiệp tội ác</text>
        </g>

        <g transform="translate(445, 20)">
          <rect width="180" height="150" rx="8" fill="#fdf4ff" stroke="#9333ea" stroke-width="1.3"/>
          <text x="90" y="24" text-anchor="middle" font-size="10" font-weight="bold" fill="#7e22ce">3. HỢP TÁC HỮU NGHỊ</text>
          <circle cx="90" cy="55" r="18" fill="#9333ea"/>
          <text x="90" y="60" text-anchor="middle" font-size="15" fill="#fff">🌐</text>
          <text x="90" y="95" text-anchor="middle" font-size="8.5" fill="#6b21a8">• Tôn trọng khác biệt</text>
          <text x="90" y="112" text-anchor="middle" font-size="8.5" fill="#6b21a8">văn hoá, dân tộc</text>
          <text x="90" y="130" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#581c87">Chung sống hoà thuận</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 6: Ma trận quản lí thời gian Eisenhower
  soDoThoiGian: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-900 dark:to-purple-950/40 border border-purple-200 dark:border-purple-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-purple-900 dark:text-purple-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-clock"></i> Ma Trận Eisenhower: Phân Loại Ưu Tiên &amp; Quản Lí Thời Gian Hiệu Quả (Bài 6)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#e9d5ff" stroke-width="1.5"/>

        <!-- Ô 1: Khẩn cấp & Quan trọng (LÀM NGAY) -->
        <g transform="translate(25, 20)">
          <rect width="285" height="70" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
          <text x="15" y="22" font-size="9.5" font-weight="bold" fill="#b91c1c">Ô 1: QUAN TRỌNG &amp; KHẨN CẤP (LÀM NGAY)</text>
          <text x="15" y="42" font-size="8.5" fill="#991b1b">• Bài tập sắp đến hạn nộp, ôn thi ngày mai</text>
          <text x="15" y="58" font-size="8.5" fill="#991b1b">• Vấn đề sức khoẻ cấp bách, sự cố đột xuất</text>
        </g>

        <!-- Ô 2: Quan trọng nhưng Không khẩn cấp (LÊN KẾ HOẠCH) -->
        <g transform="translate(340, 20)">
          <rect width="285" height="70" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
          <text x="15" y="22" font-size="9.5" font-weight="bold" fill="#15803d">Ô 2: QUAN TRỌNG, KHÔNG KHẨN (LÊN LỊCH LÀM)</text>
          <text x="15" y="42" font-size="8.5" fill="#166534">• Học ngoại ngữ, đọc sách, tập thể dục</text>
          <text x="15" y="58" font-size="8.5" font-weight="bold" fill="#14532d">→ Ô QUYẾT ĐỊNH THÀNH CÔNG LÂU DÀI</text>
        </g>

        <!-- Ô 3: Khẩn cấp nhưng Không quan trọng (UỶ QUYỀN/HẠN CHẾ) -->
        <g transform="translate(25, 100)">
          <rect width="285" height="70" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
          <text x="15" y="22" font-size="9.5" font-weight="bold" fill="#b45309">Ô 3: KHẨN CẤP, KHÔNG QUAN TRỌNG (GIẢM THIỂU)</text>
          <text x="15" y="42" font-size="8.5" fill="#78350f">• Tin nhắn thông báo mạng xã hội liên tục</text>
          <text x="15" y="58" font-size="8.5" fill="#78350f">• Cuộc gọi nhờ vả việc vặt không cấp bách</text>
        </g>

        <!-- Ô 4: Không khẩn cấp & Không quan trọng (LOẠI BỎ) -->
        <g transform="translate(340, 100)">
          <rect width="285" height="70" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
          <text x="15" y="22" font-size="9.5" font-weight="bold" fill="#475569">Ô 4: KHÔNG KHẨN, KHÔNG QUAN TRỌNG (BỎ)</text>
          <text x="15" y="42" font-size="8.5" fill="#334155">• Lướt TikTok vô bổ thâu đêm, nghiện game</text>
          <text x="15" y="58" font-size="8.5" font-weight="bold" fill="#b91c1c">→ Kẻ thù đánh cắp thời gian hàng đầu</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 7: Quy trình 5 bước thích ứng với thay đổi
  soDoThichUng: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-teal-950/40 border border-teal-200 dark:border-teal-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-teal-900 dark:text-teal-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-shuffle"></i> Quy Trình 5 Bước Chủ Động Thích Ứng Với Thay Đổi Cuộc Sống (Bài 7)
      </div>
      <svg viewBox="0 0 650 180" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="180" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#99f6e4" stroke-width="1.5"/>

        <g transform="translate(15, 20)">
          <rect width="110" height="140" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.3"/>
          <circle cx="55" cy="30" r="14" fill="#16a34a"/>
          <text x="55" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">1</text>
          <text x="55" y="65" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#15803d">CHẤP NHẬN</text>
          <text x="55" y="88" text-anchor="middle" font-size="8" fill="#166534">Thay đổi là tất yếu;</text>
          <text x="55" y="103" text-anchor="middle" font-size="8" fill="#166534">phân biệt điều</text>
          <text x="55" y="118" text-anchor="middle" font-size="8" fill="#166534">có thể kiểm soát</text>
        </g>
        <line x1="125" y1="90" x2="140" y2="90" stroke="#16a34a" stroke-width="2"/>

        <g transform="translate(140, 20)">
          <rect width="110" height="140" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.3"/>
          <circle cx="55" cy="30" r="14" fill="#2563eb"/>
          <text x="55" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">2</text>
          <text x="55" y="65" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e40af">BÌNH TĨNH</text>
          <text x="55" y="88" text-anchor="middle" font-size="8" fill="#1d4ed8">Làm chủ cảm xúc;</text>
          <text x="55" y="103" text-anchor="middle" font-size="8" fill="#1d4ed8">hít thở sâu,</text>
          <text x="55" y="118" text-anchor="middle" font-size="8" fill="#1d4ed8">không vội kết luận</text>
        </g>
        <line x1="250" y1="90" x2="265" y2="90" stroke="#2563eb" stroke-width="2"/>

        <g transform="translate(265, 20)">
          <rect width="110" height="140" rx="8" fill="#fdf4ff" stroke="#9333ea" stroke-width="1.3"/>
          <circle cx="55" cy="30" r="14" fill="#9333ea"/>
          <text x="55" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">3</text>
          <text x="55" y="65" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#7e22ce">TÌM LỰA CHỌN</text>
          <text x="55" y="88" text-anchor="middle" font-size="8" fill="#6b21a8">Nhìn nhận vấn đề;</text>
          <text x="55" y="103" text-anchor="middle" font-size="8" fill="#6b21a8">cân nhắc nhiều</text>
          <text x="55" y="118" text-anchor="middle" font-size="8" fill="#6b21a8">giải pháp tích cực</text>
        </g>
        <line x1="375" y1="90" x2="390" y2="90" stroke="#9333ea" stroke-width="2"/>

        <g transform="translate(390, 20)">
          <rect width="115" height="140" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.3"/>
          <circle cx="57" cy="30" r="14" fill="#d97706"/>
          <text x="57" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">4</text>
          <text x="57" y="65" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#b45309">TÌM HỖ TRỢ</text>
          <text x="57" y="88" text-anchor="middle" font-size="8" fill="#78350f">Chia sẻ gia đình,</text>
          <text x="57" y="103" text-anchor="middle" font-size="8" fill="#78350f">thầy cô, bạn bè</text>
          <text x="57" y="118" text-anchor="middle" font-size="8" fill="#78350f">hoặc chuyên gia</text>
        </g>
        <line x1="505" y1="90" x2="520" y2="90" stroke="#d97706" stroke-width="2"/>

        <g transform="translate(520, 20)">
          <rect width="115" height="140" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.3"/>
          <circle cx="57" cy="30" r="14" fill="#dc2626"/>
          <text x="57" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">5</text>
          <text x="57" y="65" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#b91c1c">HÀNH ĐỘNG</text>
          <text x="57" y="88" text-anchor="middle" font-size="8" fill="#991b1b">Thực hiện hướng đi</text>
          <text x="57" y="103" text-anchor="middle" font-size="8" fill="#991b1b">mới &amp; điều chỉnh</text>
          <text x="57" y="118" text-anchor="middle" font-size="8" fill="#991b1b">phù hợp thực tế</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 8: 4 Trụ cột Tiêu dùng thông minh
  soDoTieuDung: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-amber-950/40 border border-amber-200 dark:border-amber-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-cart-shopping"></i> 4 Nguyên Tắc Cốt Lõi Của Người Tiêu Dùng Thông Minh (Bài 8)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#fed7aa" stroke-width="1.5"/>

        <g transform="translate(18, 18)">
          <rect width="142" height="154" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#2563eb"/>
          <text x="71" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">1. KẾ HOẠCH CHI TIÊU</text>
          <text x="71" y="52" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">Chỉ mua đồ thiết yếu</text>
          <text x="71" y="75" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Tránh bẫy giảm giá ảo</text>
          <text x="71" y="95" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Không mua theo cảm xúc</text>
          <text x="71" y="115" text-anchor="middle" font-size="8.5" fill="#1d4ed8">• Cân đối khả năng chi trả</text>
          <rect x="12" y="128" width="118" height="18" rx="4" fill="#dbeafe"/>
          <text x="71" y="141" text-anchor="middle" font-size="8" font-weight="bold" fill="#1e40af">Tiết kiệm ngân sách</text>
        </g>

        <g transform="translate(172, 18)">
          <rect width="142" height="154" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#16a34a"/>
          <text x="71" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">2. TÌM HIỂU THÔNG TIN</text>
          <text x="71" y="52" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">So sánh chất lượng</text>
          <text x="71" y="75" text-anchor="middle" font-size="8.5" fill="#166534">• Đọc kĩ nhãn mác bao bì</text>
          <text x="71" y="95" text-anchor="middle" font-size="8.5" fill="#166534">• Kiểm tra hạn sử dụng</text>
          <text x="71" y="115" text-anchor="middle" font-size="8.5" fill="#166534">• Rõ nguồn gốc xuất xứ</text>
          <rect x="12" y="128" width="118" height="18" rx="4" fill="#bbf7d0"/>
          <text x="71" y="141" text-anchor="middle" font-size="8" font-weight="bold" fill="#14532d">Tránh hàng giả, kém</text>
        </g>

        <g transform="translate(326, 18)">
          <rect width="142" height="154" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="1.3"/>
          <rect width="142" height="28" rx="8" fill="#ea580c"/>
          <text x="71" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">3. SỬ DỤNG AN TOÀN</text>
          <text x="71" y="52" text-anchor="middle" font-size="9" font-weight="bold" fill="#c2410c">Làm đúng hướng dẫn</text>
          <text x="71" y="75" text-anchor="middle" font-size="8.5" fill="#9a3412">• Đọc kĩ cảnh báo an toàn</text>
          <text x="71" y="95" text-anchor="middle" font-size="8.5" fill="#9a3412">• Giữ gìn độ bền sản phẩm</text>
          <text x="71" y="115" text-anchor="middle" font-size="8.5" fill="#9a3412">• Bảo vệ sức khoẻ bản thân</text>
          <rect x="12" y="128" width="118" height="18" rx="4" fill="#fed7aa"/>
          <text x="71" y="141" text-anchor="middle" font-size="8" font-weight="bold" fill="#7c2d12">Hiệu quả lâu dài</text>
        </g>

        <g transform="translate(480, 18)">
          <rect width="150" height="154" rx="8" fill="#fdf4ff" stroke="#9333ea" stroke-width="1.3"/>
          <rect width="150" height="28" rx="8" fill="#9333ea"/>
          <text x="75" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">4. THANH TOÁN AN TOÀN</text>
          <text x="75" y="52" text-anchor="middle" font-size="9" font-weight="bold" fill="#7e22ce">Kiểm tra &amp; Hoá đơn</text>
          <text x="75" y="75" text-anchor="middle" font-size="8.5" fill="#6b21a8">• Kiểm hàng trước nhận</text>
          <text x="75" y="95" text-anchor="middle" font-size="8.5" fill="#6b21a8">• Bảo mật thông tin thẻ</text>
          <text x="75" y="115" text-anchor="middle" font-size="8.5" fill="#6b21a8">• Giữ chứng từ bảo hành</text>
          <rect x="14" y="128" width="122" height="18" rx="4" fill="#f5d0fe"/>
          <text x="75" y="141" text-anchor="middle" font-size="8" font-weight="bold" fill="#581c87">Bảo vệ quyền lợi</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 9: Cây phân nhánh 4 loại vi phạm pháp luật & 4 trách nhiệm pháp lí
  soDoViPhamPhapLuat: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-red-50 to-rose-50 dark:from-slate-900 dark:to-red-950/40 border border-red-200 dark:border-red-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-red-900 dark:text-red-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-gavel"></i> Cây Phân Nhánh: 4 Loại Vi Phạm Pháp Luật &amp; 4 Trách Nhiệm Pháp Lí (Bài 9)
      </div>
      <svg viewBox="0 0 650 200" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="200" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#fca5a5" stroke-width="1.5"/>

        <!-- Cột 1: Hình sự -->
        <g transform="translate(18, 18)">
          <rect width="142" height="164" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
          <rect width="142" height="28" rx="8" fill="#dc2626"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">VI PHẠM HÌNH SỰ</text>
          <text x="71" y="46" text-anchor="middle" font-size="9" font-weight="black" fill="#b91c1c">(Tội phạm)</text>
          <text x="71" y="66" text-anchor="middle" font-size="8" fill="#991b1b">Hành vi nguy hiểm</text>
          <text x="71" y="80" text-anchor="middle" font-size="8" fill="#991b1b">cao nhất cho xã hội</text>
          <line x1="15" y1="92" x2="127" y2="92" stroke="#fca5a5" stroke-width="1"/>
          <text x="71" y="108" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#b91c1c">Trách nhiệm hình sự:</text>
          <text x="71" y="126" text-anchor="middle" font-size="8" fill="#7f1d1d">• Phạt tù có thời hạn</text>
          <text x="71" y="142" text-anchor="middle" font-size="8" fill="#7f1d1d">• Chung thân, tử hình</text>
          <text x="71" y="156" text-anchor="middle" font-size="8" fill="#7f1d1d">• Cải tạo không giam giữ</text>
        </g>

        <!-- Cột 2: Hành chính -->
        <g transform="translate(172, 18)">
          <rect width="142" height="164" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
          <rect width="142" height="28" rx="8" fill="#d97706"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">VI PHẠM HÀNH CHÍNH</text>
          <text x="71" y="46" text-anchor="middle" font-size="9" font-weight="black" fill="#b45309">(Quy tắc quản lí)</text>
          <text x="71" y="66" text-anchor="middle" font-size="8" fill="#78350f">Xâm phạm trật tự</text>
          <text x="71" y="80" text-anchor="middle" font-size="8" fill="#78350f">quản lí nhà nước</text>
          <line x1="15" y1="92" x2="127" y2="92" stroke="#fde68a" stroke-width="1"/>
          <text x="71" y="108" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#b45309">Trách nhiệm hành chính:</text>
          <text x="71" y="126" text-anchor="middle" font-size="8" fill="#78350f">• Phạt tiền, cảnh cáo</text>
          <text x="71" y="142" text-anchor="middle" font-size="8" fill="#78350f">• Tước bằng lái xe</text>
          <text x="71" y="156" text-anchor="middle" font-size="8" fill="#78350f">• Tịch thu tang vật vi phạm</text>
        </g>

        <!-- Cột 3: Dân sự -->
        <g transform="translate(326, 18)">
          <rect width="142" height="164" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
          <rect width="142" height="28" rx="8" fill="#2563eb"/>
          <text x="71" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">VI PHẠM DÂN SỰ</text>
          <text x="71" y="46" text-anchor="middle" font-size="9" font-weight="black" fill="#1e40af">(Tài sản &amp; Nhân thân)</text>
          <text x="71" y="66" text-anchor="middle" font-size="8" fill="#1d4ed8">Xâm phạm quyền sở hữu,</text>
          <text x="71" y="80" text-anchor="middle" font-size="8" fill="#1d4ed8">hợp đồng, danh dự</text>
          <line x1="15" y1="92" x2="127" y2="92" stroke="#bfdbfe" stroke-width="1"/>
          <text x="71" y="108" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#1e40af">Trách nhiệm dân sự:</text>
          <text x="71" y="126" text-anchor="middle" font-size="8" fill="#1e3a8a">• Bồi thường thiệt hại</text>
          <text x="71" y="142" text-anchor="middle" font-size="8" fill="#1e3a8a">• Buộc xin lỗi, cải chính</text>
          <text x="71" y="156" text-anchor="middle" font-size="8" fill="#1e3a8a">• Tiếp tục thực hiện HĐ</text>
        </g>

        <!-- Cột 4: Kỉ luật -->
        <g transform="translate(480, 18)">
          <rect width="150" height="164" rx="8" fill="#fdf4ff" stroke="#9333ea" stroke-width="1.5"/>
          <rect width="150" height="28" rx="8" fill="#9333ea"/>
          <text x="75" y="18" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ffffff">VI PHẠM KỈ LUẬT</text>
          <text x="75" y="46" text-anchor="middle" font-size="9" font-weight="black" fill="#7e22ce">(Nội quy cơ quan/trường)</text>
          <text x="75" y="66" text-anchor="middle" font-size="8" fill="#6b21a8">Vi phạm quy chế, kỉ luật</text>
          <text x="75" y="80" text-anchor="middle" font-size="8" fill="#6b21a8">lao động, học tập</text>
          <line x1="15" y1="92" x2="135" y2="92" stroke="#f5d0fe" stroke-width="1"/>
          <text x="75" y="108" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#7e22ce">Trách nhiệm kỉ luật:</text>
          <text x="75" y="126" text-anchor="middle" font-size="8" fill="#581c87">• Khiển trách, cảnh cáo</text>
          <text x="75" y="142" text-anchor="middle" font-size="8" fill="#581c87">• Hạ bậc lương</text>
          <text x="75" y="156" text-anchor="middle" font-size="8" fill="#581c87">• Buộc thôi việc / thôi học</text>
        </g>
      </svg>
    </div>
  `,

  // SƠ ĐỒ BÀI 10: Quyền tự do kinh doanh & Nghĩa vụ nộp thuế
  soDoKinhDoanhThue: `
    <div class="my-4 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-emerald-950/40 border border-emerald-200 dark:border-emerald-800 shadow-sm">
      <div class="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-2">
        <i class="fa-solid fa-landmark"></i> Mối Quan Hệ Song Hành: Quyền Tự Do Kinh Doanh &amp; Nghĩa Vụ Nộp Thuế (Bài 10)
      </div>
      <svg viewBox="0 0 650 190" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect width="650" height="190" rx="12" fill="#ffffff" fill-opacity="0.9" stroke="#6ee7b7" stroke-width="1.5"/>

        <!-- Cánh trái: Quyền tự do kinh doanh -->
        <g transform="translate(25, 20)">
          <rect width="280" height="150" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
          <rect width="280" height="30" rx="10" fill="#16a34a"/>
          <text x="140" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">QUYỀN TỰ DO KINH DOANH</text>
          <text x="20" y="55" font-size="9" fill="#166534">• Tự do chọn ngành nghề PL không cấm</text>
          <text x="20" y="78" font-size="9" fill="#166534">• Lựa chọn hình thức tổ chức, quy mô</text>
          <text x="20" y="101" font-size="9" fill="#166534">• Tìm kiếm lợi nhuận chính đáng</text>
          <text x="20" y="124" font-size="9" font-weight="bold" fill="#14532d">Ràng buộc: Tuân thủ quy định &amp; bảo vệ MT</text>
        </g>

        <!-- Cánh phải: Nghĩa vụ nộp thuế -->
        <g transform="translate(345, 20)">
          <rect width="280" height="150" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
          <rect width="280" height="30" rx="10" fill="#2563eb"/>
          <text x="140" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">NGHĨA VỤ NỘP THUẾ</text>
          <text x="20" y="55" font-size="9" fill="#1d4ed8">• Kê khai thuế trung thực, minh bạch</text>
          <text x="20" y="78" font-size="9" fill="#1d4ed8">• Nộp thuế đầy đủ, đúng hạn vào ngân sách</text>
          <text x="20" y="101" font-size="9" fill="#1d4ed8">• Thuế nuôi bộ máy nhà nước, xây BV/trường</text>
          <text x="20" y="124" font-size="9" font-weight="bold" fill="#1e3a8a">Cấm: Trốn thuế, gian lận hoá đơn</text>
        </g>

        <!-- Mũi tên tương hỗ ở giữa -->
        <path d="M 310 95 L 340 95" stroke="#059669" stroke-width="2" marker-end="url(#arrow)"/>
      </svg>
    </div>
  `
};

module.exports = gdcd9Diagrams;
