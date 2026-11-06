// Vector SVG Concept Mindmaps for Ngữ Văn 7 (10 bài học)

function getMindmapSVG(lessonId) {
  switch (lessonId) {
    case 'bai-1':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#fb7185" stroke-width="1.5"/>
        <!-- Core Node -->
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#be123c" stroke="#f43f5e" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 1: BẦU TRỜI TUỔI THƠ</text>
        <text x="135" y="105" text-anchor="middle" fill="#fecdd3" font-size="10" font-weight="700">Thế giới hình tượng &amp; Lòng trắc ẩn</text>
        <text x="135" y="128" text-anchor="middle" fill="#ffe4e6" font-size="8.5">Bầy chim chìa vôi &bull; Đi lấy mật</text>
        <text x="135" y="148" text-anchor="middle" fill="#fda4af" font-size="8.5">Ngàn sao làm việc &bull; Ngôi nhà trên cây</text>

        <!-- Connectors -->
        <path d="M 245 75 L 320 40" stroke="#fb7185" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#fb7185" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#fb7185" stroke-width="2" stroke-dasharray="3,3"/>

        <!-- Branch 1 -->
        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#e11d48" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#e11d48"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fda4af" font-size="11" font-weight="800">ĐỀ TÀI, CHI TIẾT &amp; NHÂN VẬT</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Chi tiết bầy chim non cất cánh giữa bình minh nước ngập tượng trưng cho sức sống kỳ diệu.</text>
        </g>

        <!-- Branch 2 -->
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f43f5e"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fda4af" font-size="11" font-weight="800">TIẾNG VIỆT: MỞ RỘNG CÂU BẰNG CỤM TỪ</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Chủ ngữ, Vị ngữ, Trạng ngữ mở rộng thành Cụm danh từ, Cụm động từ, Cụm tính từ chính phụ.</text>
        </g>

        <!-- Branch 3 -->
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#be123c" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#be123c"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fda4af" font-size="11" font-weight="800">KĨ NĂNG: TÓM TẮT VĂN BẢN</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Rút gọn chuỗi sự việc cốt lõi, trung thành với bản gốc, diễn đạt bằng lời văn súc tích riêng.</text>
        </g>
      </svg>`;

    case 'bai-2':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#b45309" stroke="#f59e0b" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 2: KHÚC NHẠC TÂM HỒN</text>
        <text x="135" y="105" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700">Thơ 4/5 chữ &amp; Cảm xúc hoài niệm</text>
        <text x="135" y="128" text-anchor="middle" fill="#fef3c7" font-size="8.5">Đồng dao mùa xuân &bull; Gặp lá cơm nếp</text>
        <text x="135" y="148" text-anchor="middle" fill="#fde68a" font-size="8.5">Trở gió &bull; Chiều sông Thương</text>

        <path d="M 245 75 L 320 40" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#d97706" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#d97706"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fde68a" font-size="11" font-weight="800">ĐẶC TRƯNG THƠ 4 CHỮ &amp; 5 CHỮ</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Nhịp 2/2 hoặc 2/3, 3/2 biến hóa; gieo vần chân linh hoạt, hình ảnh thơ giàu nhạc điệu.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f59e0b"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fde68a" font-size="11" font-weight="800">NÓI GIẢM NÓI TRÁNH</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">'Anh không về nữa / Ở lại Trường Sơn' làm nhẹ nỗi đau bi thương, tôn vinh đức hi sinh cao cả.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#b45309" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#b45309"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fde68a" font-size="11" font-weight="800">SÁNG TÁC THƠ &amp; BIỂU CẢM</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Tập làm thơ 4/5 chữ, viết đoạn văn ghi lại rung động thẩm mĩ và liên hệ bài học nhân sinh.</text>
        </g>
      </svg>`;

    case 'bai-3':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#065f46" stroke="#10b981" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 3: CỘI NGUỒN YÊU THƯƠNG</text>
        <text x="135" y="105" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="700">Tình cảm gia đình &amp; Tình thầy trò</text>
        <text x="135" y="128" text-anchor="middle" fill="#d1fae5" font-size="8.5">Vừa nhắm mắt vừa mở cửa sổ</text>
        <text x="135" y="148" text-anchor="middle" fill="#a7f3d0" font-size="8.5">Người thầy đầu tiên &bull; Quê hương</text>

        <path d="M 245 75 L 320 40" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#059669" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#059669"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#a7f3d0" font-size="11" font-weight="800">ĐỔI NGÔI KỂ TRẦN THUẬT</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Kết hợp ngôi thứ nhất và thứ ba tạo góc nhìn đa chiều, khắc họa sâu sắc hình tượng thầy Đuy-sen.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#10b981"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#a7f3d0" font-size="11" font-weight="800">SỐ TỪ VÀ PHÓ TỪ</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Số từ chỉ số lượng/thứ tự; Phó từ bổ trợ thời gian (đã, đang), mức độ (rất), tiếp diễn (vẫn)...</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#047857" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#047857"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#a7f3d0" font-size="11" font-weight="800">PHÂN TÍCH ĐẶC ĐIỂM NHÂN VẬT</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Dựa trên cử chỉ, lời nói, hành động, mối quan hệ; không đồng nhất nhân vật với người thật ngoài đời.</text>
        </g>
      </svg>`;

    case 'bai-4':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#1d4ed8" stroke="#3b82f6" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 4: GIAI ĐIỆU ĐẤT NƯỚC</text>
        <text x="135" y="105" text-anchor="middle" fill="#bfdbfe" font-size="10" font-weight="700">Tình yêu non sông &amp; Khát vọng cống hiến</text>
        <text x="135" y="128" text-anchor="middle" fill="#dbeafe" font-size="8.5">Mùa xuân nho nhỏ &bull; Gò Me</text>
        <text x="135" y="148" text-anchor="middle" fill="#93c5fd" font-size="8.5">Đường núi &bull; Chiều biên giới</text>

        <path d="M 245 75 L 320 40" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#2563eb" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#2563eb"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#bfdbfe" font-size="11" font-weight="800">CẢM XÚC THƠ &amp; KHÁT VỌNG DÂNG HIẾN</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Từ rung động trước cảnh sắc mùa xuân đến nguyện ước hòa mình vào cuộc đời chung của dân tộc.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#3b82f6"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#bfdbfe" font-size="11" font-weight="800">NGỮ CẢNH &amp; TỪ LÁY GỢI CẢM</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Nghĩa của từ phải đặt trong mạch câu văn; từ láy (lặng lẽ, nho nhỏ) gợi sắc thái khiêm nhường.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#1d4ed8" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#1d4ed8"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#bfdbfe" font-size="11" font-weight="800">VĂN BIỂU CẢM &amp; THIỆN NGUYỆN</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Bộc lộ cảm xúc chân thành về người/sự việc; đề xuất hoạt động cộng đồng thiết thực, nhân văn.</text>
        </g>
      </svg>`;

    case 'bai-5':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#7e22ce" stroke="#a855f7" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 5: MÀU SẮC TRĂM MIỀN</text>
        <text x="135" y="105" text-anchor="middle" fill="#e9d5ff" font-size="10" font-weight="700">Tùy bút, Tản văn &amp; Văn hóa bản địa</text>
        <text x="135" y="128" text-anchor="middle" fill="#f3e8ff" font-size="8.5">Tháng Giêng mơ về trăng non rét ngọt</text>
        <text x="135" y="148" text-anchor="middle" fill="#d8b4fe" font-size="8.5">Chuyện cơm hến &bull; Hội lồng tồng</text>

        <path d="M 245 75 L 320 40" stroke="#a855f7" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#a855f7" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#a855f7" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#9333ea" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#9333ea"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#e9d5ff" font-size="11" font-weight="800">CÁI TÔI TÙY BÚT &amp; TẢN VĂN</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Cái tôi uyên bác, giàu suy tưởng của Vũ Bằng và Hoàng Phủ Ngọc Tường gắn liền ẩm thực, phong tục.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#a855f7"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#e9d5ff" font-size="11" font-weight="800">TỪ NGỮ ĐỊA PHƯƠNG (PHƯƠNG NGỮ)</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Tạo sắc thái văn hóa chân thực, phân biệt với chuẩn mực toàn dân dùng trong văn bản hành chính.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#7e22ce" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#7e22ce"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#e9d5ff" font-size="11" font-weight="800">VĂN BẢN TƯỜNG TRÌNH</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Tuân thủ nghiêm ngặt thể thức hành chính, báo cáo diễn biến sự việc trung thực, có thể kiểm chứng.</text>
        </g>
      </svg>`;

    case 'bai-6':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#b45309" stroke="#f59e0b" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 6: BÀI HỌC CUỘC SỐNG</text>
        <text x="135" y="105" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="700">Ngụ ngôn, Tục ngữ &amp; Đạo lí</text>
        <text x="135" y="128" text-anchor="middle" fill="#fef3c7" font-size="8.5">Đẽo cày giữa đường &bull; Ếch ngồi đáy giếng</text>
        <text x="135" y="148" text-anchor="middle" fill="#fde68a" font-size="8.5">Con hổ có nghĩa &bull; Tục ngữ Việt Nam</text>

        <path d="M 245 75 L 320 40" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#d97706" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#d97706"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fde68a" font-size="11" font-weight="800">TRUYỆN NGỤ NGÔN &amp; TỤC NGỮ</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Đúc kết bài học về sự kiên định, lòng khiêm tốn, tránh thói ba phải, tự cao tự đại nông cạn.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f59e0b"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fde68a" font-size="11" font-weight="800">THÀNH NGỮ &amp; PHÉP NÓI QUÁ</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Hiểu nghĩa biểu trưng của cụm cố định; nói quá để tăng sức gợi cảm, phân biệt với nói khoác lác.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#b45309" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#b45309"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fde68a" font-size="11" font-weight="800">NGHỊ LUẬN TÁN THÀNH</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Trình bày lí lẽ xác đáng, dẫn chứng thực tế chứng minh cho một quan điểm đạo lí đúng đắn.</text>
        </g>
      </svg>`;

    case 'bai-7':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#0e7490" stroke="#06b6d4" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 7: THẾ GIỚI VIỄN TƯỞNG</text>
        <text x="135" y="105" text-anchor="middle" fill="#a5f3fc" font-size="10" font-weight="700">Trí tưởng tượng &amp; Logic khoa học</text>
        <text x="135" y="128" text-anchor="middle" fill="#cffafe" font-size="8.5">Hai vạn dặm dưới biển &bull; Thiên Mã</text>
        <text x="135" y="148" text-anchor="middle" fill="#67e8f9" font-size="8.5">Dấu ấn Hồ Khanh &bull; Chiếc đũa thần</text>

        <path d="M 245 75 L 320 40" stroke="#06b6d4" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#06b6d4" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#06b6d4" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0891b2" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0891b2"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#a5f3fc" font-size="11" font-weight="800">TRUYỆN KHOA HỌC VIỄN TƯỞNG</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Dựa trên giả thuyết khoa học, dự báo công nghệ tương lai; tình huống phiêu lưu kịch tính hợp logic.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#06b6d4"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#a5f3fc" font-size="11" font-weight="800">MẠCH LẠC, LIÊN KẾT &amp; DẤU CHẤM LỬNG</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Thống nhất chủ đề và phương tiện liên kết hình thức; dấu (…) biểu thị liệt kê dở dang hoặc ngập ngừng.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0e7490" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0e7490"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#a5f3fc" font-size="11" font-weight="800">KỂ SỰ VIỆC THỰC LỊCH SỬ</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Kể lại sự việc có thật liên quan nhân vật/sự kiện lịch sử dựa trên nguồn tin xác thực, không bịa đặt.</text>
        </g>
      </svg>`;

    case 'bai-8':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#14b8a6" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#0f766e" stroke="#14b8a6" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 8: TRẢI NGHIỆM ĐỂ LỚN</text>
        <text x="135" y="105" text-anchor="middle" fill="#99f6e4" font-size="10" font-weight="700">Tự chủ, Văn hóa đọc &amp; Bản sắc</text>
        <text x="135" y="128" text-anchor="middle" fill="#ccfbf1" font-size="8.5">Bản đồ dẫn đường &bull; Hãy cầm lấy và đọc</text>
        <text x="135" y="148" text-anchor="middle" fill="#5eead4" font-size="8.5">Nói với con &bull; Câu chuyện về con đường</text>

        <path d="M 245 75 L 320 40" stroke="#14b8a6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#14b8a6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#14b8a6" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0d9488" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0d9488"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#99f6e4" font-size="11" font-weight="800">NGHỊ LUẬN VỀ ĐỜI SỐNG</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Hệ thống luận điểm, lí lẽ chặt chẽ và bằng chứng thuyết phục về giá trị của sách và trải nghiệm.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#14b8a6" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#14b8a6"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#99f6e4" font-size="11" font-weight="800">CÁC PHÉP LIÊN KẾT &amp; THUẬT NGỮ</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Vận dụng phép lặp, phép thế, phép nối; tra cứu và giải nghĩa chính xác thuật ngữ khoa học.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0f766e" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0f766e"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#99f6e4" font-size="11" font-weight="800">NGHỊ LUẬN PHẢN ĐỐI QUAN ĐIỂM SAI</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Chỉ ra tính chất phiến diện, tác hại của hành vi sai lệch bằng lí lẽ sắc bén và dẫn chứng cụ thể.</text>
        </g>
      </svg>`;

    case 'bai-9':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#0369a1" stroke="#0284c7" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 9: HÒA ĐIỆU VỚI TỰ NHIÊN</text>
        <text x="135" y="105" text-anchor="middle" fill="#bae6fd" font-size="10" font-weight="700">Khí hậu, Môi trường &amp; Luật lệ</text>
        <text x="135" y="128" text-anchor="middle" fill="#e0f2fe" font-size="8.5">Thủy tiên tháng Một &bull; Lễ rửa làng</text>
        <text x="135" y="148" text-anchor="middle" fill="#7dd3fc" font-size="8.5">Bản tin hoa anh đào &bull; Sống thân thiện</text>

        <path d="M 245 75 L 320 40" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0284c7"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">CÁCH TRIỂN KHAI DỮ KIỆN THÔNG TIN</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Trình bày theo trật tự thời gian hoặc quan hệ nhân quả (biến đổi khí hậu -> hiện tượng thời tiết cực đoan).</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#38bdf8"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">CƯỚC CHÚ &amp; YẾU TỐ HÁN VIỆT</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Tra cứu cước chú chân trang; tách ghép yếu tố Hán Việt (thủy = nước, tiên = trước...) đúng văn cảnh.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0369a1" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0369a1"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">THUYẾT MINH LUẬT LỆ TRÒ CHƠI</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Trình bày rõ mục tiêu, số người, dụng cụ, các bước thực hiện, điều kiện thắng thua và lưu ý an toàn.</text>
        </g>
      </svg>`;

    case 'bai-10':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#be123c" stroke="#f43f5e" stroke-width="2"/>
        <text x="135" y="78" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 10: TRANG SÁCH &amp; CUỘC SỐNG</text>
        <text x="135" y="100" text-anchor="middle" fill="#fecdd3" font-size="10" font-weight="700">Dự án đọc sách &amp; Phân tích nhân vật</text>
        <text x="135" y="122" text-anchor="middle" fill="#ffe4e6" font-size="8.5">7 Bước dự án đọc khoa học</text>
        <text x="135" y="142" text-anchor="middle" fill="#fda4af" font-size="8.5">Sản phẩm sáng tạo &bull; Ngày hội sách</text>

        <path d="M 245 75 L 320 40" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#e11d48" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#e11d48"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fda4af" font-size="11" font-weight="800">QUY TRÌNH 7 BƯỚC DỰ ÁN ĐỌC</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Chọn sách &rarr; Lập kế hoạch &rarr; Đọc chủ động &rarr; Chọn sản phẩm &rarr; Tạo sản phẩm &rarr; Ngày hội &rarr; Đánh giá.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f43f5e"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fda4af" font-size="11" font-weight="800">LÍ LẼ, BẰNG CHỨNG &amp; TRÍCH DẪN</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Trích dẫn trực tiếp/gián tiếp chính xác, gắn kết chặt chẽ với luận điểm phân tích của người viết.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#be123c" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#be123c"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fda4af" font-size="11" font-weight="800">BÀI VĂN PHÂN TÍCH NHÂN VẬT</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Đánh giá ngoại hình, hành động, ngôn ngữ, nội tâm và tư tưởng thẩm mĩ nhà văn gửi gắm.</text>
        </g>
      </svg>`;

    default:
      return '';
  }
}

module.exports = { getMindmapSVG };
