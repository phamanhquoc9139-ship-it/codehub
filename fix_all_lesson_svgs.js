const fs = require('fs');

function getDistinctLessonSVG(num) {
  // Lesson 1: Một số thể loại mĩ thuật
  if (num === 1) {
    return `
      <g transform="translate(40, 15)">
        <rect x="0" y="10" width="140" height="70" rx="8" fill="#fff" stroke="#c026d3" stroke-width="2"/>
        <text x="70" y="35" text-anchor="middle" font-size="11" font-weight="bold" fill="#86198f">HỘI HOẠ (2D)</text>
        <text x="70" y="52" text-anchor="middle" font-size="9" fill="#6b7280">Mặt phẳng • Nét, màu sắc</text>
        <text x="70" y="66" text-anchor="middle" font-size="8" fill="#9333ea">Sơn mài, sơn dầu, lụa</text>

        <path d="M150,45 L175,45" stroke="#c026d3" stroke-width="2"/>

        <rect x="185" y="5" width="160" height="80" rx="10" fill="#fae8ff" stroke="#86198f" stroke-width="2.5"/>
        <text x="265" y="30" text-anchor="middle" font-size="12" font-weight="black" fill="#86198f">ĐIÊU KHẮC (3D)</text>
        <text x="265" y="48" text-anchor="middle" font-size="9" fill="#374151">Khối trong không gian ba chiều</text>
        <text x="265" y="64" text-anchor="middle" font-size="9" font-weight="bold" fill="#c026d3">Tượng tròn &amp; Phù điêu</text>

        <path d="M355,45 L380,45" stroke="#c026d3" stroke-width="2"/>

        <rect x="390" y="10" width="150" height="70" rx="8" fill="#fff" stroke="#c026d3" stroke-width="2"/>
        <text x="465" y="35" text-anchor="middle" font-size="11" font-weight="bold" fill="#86198f">MĨ THUẬT ỨNG DỤNG</text>
        <text x="465" y="52" text-anchor="middle" font-size="9" fill="#6b7280">Gắn vẻ đẹp với công năng</text>
        <text x="465" y="66" text-anchor="middle" font-size="8" fill="#9333ea">Đồ hoạ, thời trang, đồ dùng</text>
      </g>
    `;
  }

  // Lesson 2: Xây dựng ý tưởng sáng tác theo chủ đề
  if (num === 2) {
    return `
      <g transform="translate(30, 18)">
        <rect x="0" y="10" width="90" height="55" rx="6" fill="#fff" stroke="#db2777" stroke-width="2"/>
        <text x="45" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#9d174d">CHỦ ĐỀ</text>
        <text x="45" y="48" text-anchor="middle" font-size="8" fill="#6b7280">Đề tài định hướng</text>

        <path d="M95,37 L115,37" stroke="#db2777" stroke-width="2"/>

        <rect x="120" y="10" width="100" height="55" rx="6" fill="#fff" stroke="#db2777" stroke-width="2"/>
        <text x="170" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#9d174d">Ý TƯỞNG</text>
        <text x="170" y="48" text-anchor="middle" font-size="8" fill="#6b7280">Tìm tư liệu &amp; hình</text>

        <path d="M225,37 L245,37" stroke="#db2777" stroke-width="2"/>

        <rect x="250" y="5" width="115" height="65" rx="8" fill="#fce7f3" stroke="#be185d" stroke-width="2.5"/>
        <text x="307" y="28" text-anchor="middle" font-size="10" font-weight="black" fill="#9d174d">PHÁC BỐ CỤC</text>
        <text x="307" y="44" text-anchor="middle" font-size="8" fill="#374151">Mảng chính - Mảng phụ</text>
        <text x="307" y="58" text-anchor="middle" font-size="8" fill="#be185d">Tương quan không gian</text>

        <path d="M370,37 L390,37" stroke="#db2777" stroke-width="2"/>

        <rect x="395" y="10" width="85" height="55" rx="6" fill="#fff" stroke="#db2777" stroke-width="2"/>
        <text x="437" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#9d174d">TÔ MÀU</text>
        <text x="437" y="48" text-anchor="middle" font-size="8" fill="#6b7280">Hình chính &amp; nền</text>

        <path d="M485,37 L505,37" stroke="#db2777" stroke-width="2"/>

        <rect x="510" y="10" width="80" height="55" rx="6" fill="#db2777"/>
        <text x="550" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">HOÀN THIỆN</text>
        <text x="550" y="48" text-anchor="middle" font-size="8" fill="#fdf2f8">Đặt tên tranh</text>
      </g>
    `;
  }

  // Lesson 3: Tạo hình ngôi nhà (Bùi Xuân Phái & In độc bản)
  if (num === 3) {
    return `
      <g transform="translate(50, 15)">
        <polygon points="30,30 60,10 90,30 90,75 30,75" fill="#fcd34d" stroke="#b45309" stroke-width="2"/>
        <polygon points="85,35 115,15 145,35 145,75 85,75" fill="#f87171" stroke="#991b1b" stroke-width="2"/>
        <polygon points="140,25 170,5 200,25 200,75 140,75" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>
        <text x="115" y="90" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">Mái ngói rêu phong Bùi Xuân Phái</text>
        
        <path d="M215,45 L255,45" stroke="#ea580c" stroke-width="2.5"/>

        <rect x="270" y="8" width="250" height="72" rx="10" fill="#fff" stroke="#ea580c" stroke-width="2"/>
        <text x="395" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#ea580c">QUY TRÌNH IN ĐỘC BẢN (MONOPRINT)</text>
        <text x="395" y="48" text-anchor="middle" font-size="9" fill="#4b5563">1. Vẽ mica → 2. Tô màu → 3. Miết giấy → 4. Tách bản</text>
        <text x="395" y="65" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">Hình trên giấy lật ngược đối xứng trái – phải</text>
      </g>
    `;
  }

  // Lesson 4: Thiết kế quà lưu niệm (Mô hình nhà bằng bìa)
  if (num === 4) {
    return `
      <g transform="translate(50, 15)">
        <rect x="10" y="10" width="160" height="70" rx="8" fill="#fff" stroke="#d97706" stroke-width="2"/>
        <text x="90" y="32" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">BẢN VẼ KHAI TRIỂN</text>
        <text x="90" y="50" text-anchor="middle" font-size="9" fill="#4b5563">Đáy • Vách tường • Ô cửa sổ</text>
        <text x="90" y="66" text-anchor="middle" font-size="9" font-weight="bold" fill="#d97706">Chừa mép dán &amp; khía nếp gập</text>

        <path d="M180,45 L215,45" stroke="#d97706" stroke-width="2.5"/>

        <g transform="translate(230, 15)">
          <polygon points="50,5 20,30 80,30" fill="#f97316" stroke="#c2410c" stroke-width="2"/>
          <rect x="25" y="30" width="50" height="40" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
          <rect x="42" y="45" width="16" height="25" fill="#b45309"/>
        </g>

        <rect x="330" y="10" width="190" height="70" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
        <text x="425" y="32" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">MÔ HÌNH NHÀ 3D</text>
        <text x="425" y="50" text-anchor="middle" font-size="9" fill="#4b5563">Gia cố khớp nối • Đế đứng vững</text>
        <text x="425" y="66" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">Thẩm mĩ &amp; Công năng quà lưu niệm</text>
      </g>
    `;
  }

  // Lesson 5: Tạo hình hoạt động học đường (Giấy bồi đắp nổi)
  if (num === 5) {
    return `
      <g transform="translate(50, 15)">
        <rect x="10" y="10" width="160" height="70" rx="8" fill="#fff" stroke="#9333ea" stroke-width="2"/>
        <text x="90" y="32" text-anchor="middle" font-size="11" font-weight="bold" fill="#7e22ce">TẠO HÌNH DÁNG NGƯỜI</text>
        <text x="90" y="50" text-anchor="middle" font-size="9" fill="#4b5563">Đường trục thân • Tay chân vận động</text>
        <text x="90" y="66" text-anchor="middle" font-size="9" font-weight="bold" fill="#9333ea">Dáng ngồi, cúi, chạy, kéo co</text>

        <path d="M180,45 L215,45" stroke="#9333ea" stroke-width="2.5"/>

        <rect x="225" y="8" width="280" height="74" rx="10" fill="#faf5ff" stroke="#7e22ce" stroke-width="2"/>
        <text x="365" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#7e22ce">KĨ THUẬT ĐẮP NỔI BỘT GIẤY BỒI</text>
        <text x="365" y="48" text-anchor="middle" font-size="9" fill="#374151">Giấy ngâm nhuyễn → Trộn màu &amp; keo → Đắp mảng nổi 3D</text>
        <text x="365" y="65" text-anchor="middle" font-size="9" font-weight="bold" fill="#a855f7">Tạo chất cảm bề mặt nổi gồ ghề độc đáo</text>
      </g>
    `;
  }

  // Lesson 6: Thiết kế đồ chơi (Bi lắc bóng đá bằng hộp)
  if (num === 6) {
    return `
      <g transform="translate(50, 15)">
        <rect x="20" y="10" width="180" height="65" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
        <line x1="20" y1="42" x2="200" y2="42" stroke="#86efac" stroke-width="1.5"/>
        <circle cx="110" cy="42" r="14" fill="none" stroke="#86efac" stroke-width="1.5"/>
        <rect x="20" y="26" width="14" height="32" fill="none" stroke="#15803d" stroke-width="1.5"/>
        <rect x="186" y="26" width="14" height="32" fill="none" stroke="#15803d" stroke-width="1.5"/>
        <text x="110" y="90" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">Sân bóng đá bằng hộp giấy carton</text>

        <path d="M215,42 L250,42" stroke="#16a34a" stroke-width="2.5"/>

        <rect x="260" y="8" width="250" height="70" rx="8" fill="#fff" stroke="#16a34a" stroke-width="2"/>
        <text x="385" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">CƠ CHẾ ĐIỀU KHIỂN BẰNG QUE</text>
        <text x="385" y="48" text-anchor="middle" font-size="9" fill="#4b5563">Que gỗ tròn xuyên qua thành hộp xoay cầu thủ</text>
        <text x="385" y="64" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">An toàn • Không sắc nhọn • Vận hành trơn tru</text>
      </g>
    `;
  }

  // Lesson 7: MĨ THUẬT THẾ GIỚI THỜI KÌ TIỀN SỬ
  if (num === 7) {
    return `
      <g transform="translate(50, 15)">
        <!-- Prehistoric Cave Painting & World Relics -->
        <rect x="10" y="8" width="220" height="74" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
        <text x="120" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">BÍCH HOẠ HANG ĐỘNG THẾ GIỚI</text>
        <text x="120" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Bhimbetka (Ấn Độ) • Cueva de las Manos</text>
        <text x="120" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#ca8a04">Vẽ muông thú, săn bắn, dấu bàn tay (40 000 TCN)</text>

        <path d="M240,45 L270,45" stroke="#ca8a04" stroke-width="2.5"/>

        <!-- Venus of Willendorf & Mammoth statue -->
        <rect x="280" y="8" width="230" height="74" rx="8" fill="#fff" stroke="#ca8a04" stroke-width="2"/>
        <text x="395" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">TƯỢNG ĐÁ &amp; NGÀ VOI TIỀN SỬ</text>
        <text x="395" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Vệ Nữ Willendorf (Áo, 25 000 TCN) • Voi ma mút</text>
        <text x="395" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#b45309">Khối tròn căng tràn biểu trưng phồn thực</text>
      </g>
    `;
  }

  // Lesson 8: MĨ THUẬT VIỆT NAM THỜI KÌ TIỀN SỬ
  if (num === 8) {
    return `
      <g transform="translate(50, 15)">
        <!-- Stone axe & Dong Noi horned face -->
        <g transform="translate(30, 10)">
          <circle cx="45" cy="30" r="22" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
          <!-- Horned face curve -->
          <path d="M33,22 Q45,8 57,22 M45,26 L45,38" stroke="#9a3412" stroke-width="2.5" fill="none"/>
          <text x="45" y="66" text-anchor="middle" font-size="9" font-weight="bold" fill="#7c2d12">Hang Đồng Nội</text>
          <text x="45" y="78" text-anchor="middle" font-size="8" fill="#9a3412">Mặt người có sừng</text>
        </g>

        <path d="M130,45 L165,45" stroke="#ea580c" stroke-width="2.5"/>

        <rect x="175" y="8" width="340" height="74" rx="10" fill="#fff7ed" stroke="#c2410c" stroke-width="2"/>
        <text x="345" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#9a3412">VĂN HOÁ TIỀN SỬ VIỆT NAM (10 000 - 300 000 TCN)</text>
        <text x="345" y="46" text-anchor="middle" font-size="9" fill="#431407">• Tràng An (300 000 TCN): Rìu đá ghè đẽo thô sơ</text>
        <text x="345" y="60" text-anchor="middle" font-size="9" fill="#431407">• Hoà Bình (10 000 TCN): Khắc vách hang, chày &amp; bàn nghiền</text>
        <text x="345" y="74" text-anchor="middle" font-size="9" fill="#431407">• Bắc Sơn (8 000 TCN): Mài lưỡi rìu đá &amp; trang sức vỏ sò</text>
      </g>
    `;
  }

  // Lesson 9: Trò chơi dân gian (Nguyên lí cân bằng)
  if (num === 9) {
    return `
      <g transform="translate(50, 15)">
        <rect x="10" y="8" width="220" height="74" rx="8" fill="#fdf4ff" stroke="#a21caf" stroke-width="2"/>
        <text x="120" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#701a75">CÂN BẰNG ĐỐI XỨNG</text>
        <text x="120" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Hai bên trục có khối lượng thị giác bằng nhau</text>
        <text x="120" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#a21caf">Cảm giác trang nghiêm, tĩnh tại, chuẩn mực</text>

        <path d="M240,45 L270,45" stroke="#a21caf" stroke-width="2.5"/>

        <rect x="280" y="8" width="230" height="74" rx="8" fill="#fff" stroke="#a21caf" stroke-width="2"/>
        <text x="395" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#701a75">CÂN BẰNG BẤT ĐỐI XỨNG (BÙ TRỪ)</text>
        <text x="395" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Mảng lớn màu trầm ↔ Điểm nhấn nhỏ rực rỡ</text>
        <text x="395" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#a21caf">Bức "Bác Hồ với thiếu nhi" (Huy Oánh)</text>
      </g>
    `;
  }

  // Lesson 10: Thiết kế thiệp chúc mừng (Pop-Up)
  if (num === 10) {
    return `
      <g transform="translate(50, 15)">
        <rect x="10" y="8" width="200" height="74" rx="8" fill="#fff" stroke="#ec4899" stroke-width="2"/>
        <text x="110" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#be185d">CƠ CHẾ THIỆP NỔI POP-UP</text>
        <text x="110" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Rạch mộng nâng ở sống gập đôi</text>
        <text x="110" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#ec4899">Mở thiệp: hình nhân vật tự nhô đứng</text>

        <path d="M220,45 L250,45" stroke="#ec4899" stroke-width="2.5"/>

        <rect x="260" y="8" width="250" height="74" rx="8" fill="#fdf2f8" stroke="#be185d" stroke-width="2"/>
        <text x="385" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">NGUYÊN LÍ THIẾT KẾ ĐỒ HOẠ</text>
        <text x="385" y="46" text-anchor="middle" font-size="9" fill="#374151">• Tỉ lệ: Cân đối giữa diện tích hình và chữ</text>
        <text x="385" y="62" text-anchor="middle" font-size="9" font-weight="bold" fill="#be185d">• Không để trang trí che lấp lời chúc</text>
      </g>
    `;
  }

  // Lesson 11: HOÀ SẮC TRONG TRANH LỄ HỘI (Nguyễn Gia Trí)
  if (num === 11) {
    return `
      <g transform="translate(50, 15)">
        <rect x="10" y="8" width="220" height="74" rx="8" fill="#fff1f2" stroke="#e11d48" stroke-width="2"/>
        <text x="120" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#9f1239">NGHỆ THUẬT HOÀ SẮC (HARMONY)</text>
        <text x="120" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Gam màu chủ đạo chi phối toàn bộ tranh</text>
        <text x="120" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#e11d48">Gam nóng rực rỡ gợi không khí tưng bừng</text>

        <path d="M240,45 L270,45" stroke="#e11d48" stroke-width="2.5"/>

        <rect x="280" y="8" width="230" height="74" rx="8" fill="#fff" stroke="#e11d48" stroke-width="2"/>
        <text x="395" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#9f1239">"LỄ HỘI ĐẦU NĂM" (NGUYỄN GIA TRÍ)</text>
        <text x="395" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Sơn mài: Quỳ vàng lấp lánh • Son đỏ tưng bừng</text>
        <text x="395" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#be123c">Then đen sâu thẳm &amp; Vỏ trứng trắng muốt</text>
      </g>
    `;
  }

  // Lesson 12: MÀU SẮC LỄ HỘI TRONG THIẾT KẾ LỊCH TREO TƯỜNG (Cờ ngũ sắc)
  if (num === 12) {
    return `
      <g transform="translate(50, 12)">
        <!-- 5 flags -->
        <g transform="translate(20, 5)">
          <polygon points="10,10 35,22 10,34" fill="#16a34a"/>
          <polygon points="40,10 65,22 40,34" fill="#dc2626"/>
          <polygon points="70,10 95,22 70,34" fill="#eab308"/>
          <polygon points="100,10 125,22 100,34" fill="#f8fafc" stroke="#94a3b8"/>
          <polygon points="130,10 155,22 130,34" fill="#2563eb"/>
          <text x="85" y="55" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">CỜ NGŨ SẮC: Mộc • Hoả • Thổ • Kim • Thuỷ</text>
        </g>

        <path d="M200,40 L230,40" stroke="#16a34a" stroke-width="2"/>

        <rect x="240" y="5" width="270" height="74" rx="8" fill="#fff" stroke="#16a34a" stroke-width="2"/>
        <text x="375" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">BỐ CỤC LỊCH TREO TƯỜNG</text>
        <text x="375" y="44" text-anchor="middle" font-size="9" fill="#4b5563">• 2/3 Diện tích: Tranh minh hoạ lễ hội sắc màu</text>
        <text x="375" y="58" text-anchor="middle" font-size="9" fill="#4b5563">• 1/3 Diện tích: Block số ngày tháng rõ ràng</text>
        <text x="375" y="70" text-anchor="middle" font-size="8" font-weight="bold" fill="#16a34a">Cân bằng giữa thẩm mĩ nghệ thuật &amp; công năng</text>
      </g>
    `;
  }

  // Lesson 13: Cuộc sống thường ngày (Mai Trung Thứ)
  if (num === 13) {
    return `
      <g transform="translate(50, 15)">
        <rect x="10" y="8" width="220" height="74" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="2"/>
        <text x="120" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">TRANH LỤA MAI TRUNG THỨ</text>
        <text x="120" y="46" text-anchor="middle" font-size="9" fill="#4b5563">"Viết bài" (1956) • "Niềm vui sống II" (1963)</text>
        <text x="120" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#e11d48">Nét mềm mại, gam màu trong trẻo, dịu ngọt</text>

        <path d="M240,45 L270,45" stroke="#f43f5e" stroke-width="2.5"/>

        <rect x="280" y="8" width="230" height="74" rx="8" fill="#fff" stroke="#f43f5e" stroke-width="2"/>
        <text x="395" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">MÔ HÌNH HỌC SINH ĐỌC SÁCH</text>
        <text x="395" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Khung ghế que kem gỗ • Hình bìa cắt tỉa</text>
        <text x="395" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#fb7185">Tôn vinh vẻ đẹp bình dị của đời sống</text>
      </g>
    `;
  }

  // Lesson 14: Thiết kế thời gian biểu (Biểu tượng Icons)
  if (num === 14) {
    return `
      <g transform="translate(40, 15)">
        <rect x="10" y="8" width="230" height="74" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
        <text x="125" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">BIỂU TƯỢNG TRỰC QUAN (ICONS)</text>
        <text x="125" y="46" text-anchor="middle" font-size="9" fill="#4b5563">Giản lược, cách điệu cao độ từ vật thể thật</text>
        <text x="125" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#0284c7">Truyền tải thông điệp nhanh chóng, tức thì</text>

        <path d="M250,45 L280,45" stroke="#0284c7" stroke-width="2.5"/>

        <rect x="290" y="8" width="240" height="74" rx="8" fill="#fff" stroke="#0284c7" stroke-width="2"/>
        <text x="410" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">THỜI GIAN BIỂU CÁ NHÂN</text>
        <text x="410" y="46" text-anchor="middle" font-size="9" fill="#374151">🛌 Ngủ • ⏰ Dậy • 🏃 Thể thao • 📖 Học bài</text>
        <text x="410" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#0284c7">Sắp xếp khoa học quỹ thời gian 24 giờ</text>
      </g>
    `;
  }

  // Lesson 15: MĨ THUẬT THẾ GIỚI THỜI KÌ CỔ ĐẠI (Kim tự tháp Ai Cập & Hy Lạp)
  if (num === 15) {
    return `
      <g transform="translate(50, 15)">
        <!-- Pyramid -->
        <g transform="translate(30, 8)">
          <polygon points="50,10 10,65 90,65" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
          <polygon points="50,10 90,65 110,50" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
          <text x="60" y="80" text-anchor="middle" font-size="9" font-weight="bold" fill="#854d0e">Kim tự tháp Ai Cập</text>
        </g>

        <path d="M165,45 L200,45" stroke="#ca8a04" stroke-width="2.5"/>

        <!-- Greek Parthenon & Classical Art -->
        <rect x="210" y="8" width="300" height="74" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
        <text x="360" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">VĂN MINH CỔ ĐẠI THẾ GIỚI</text>
        <text x="360" y="46" text-anchor="middle" font-size="9" fill="#4b5563">• Ai Cập bên sông Nin: Khối chóp kim tự tháp vĩ đại</text>
        <text x="360" y="60" text-anchor="middle" font-size="9" fill="#4b5563">• Hy Lạp - La Mã: Thức cột đền Athena Parthenon</text>
        <text x="360" y="74" text-anchor="middle" font-size="8" font-weight="bold" fill="#b45309">Chuẩn mực về tỉ lệ, hình khối cô đọng trang nghiêm</text>
      </g>
    `;
  }

  // Lesson 16: MĨ THUẬT VIỆT NAM THỜI KÌ CỔ ĐẠI (Trống đồng Đông Sơn & Áo dài)
  if (num === 16) {
    return `
      <g transform="translate(50, 15)">
        <!-- Dong Son Bronze Drum -->
        <g transform="translate(20, 5)">
          <ellipse cx="60" cy="18" rx="46" ry="12" fill="#6ee7b7" stroke="#065f46" stroke-width="2"/>
          <path d="M14,18 Q10,38 25,52 L25,62 Q10,72 10,72 L110,72 Q110,72 95,62 L95,52 Q110,38 106,18" fill="#a7f3d0" stroke="#065f46" stroke-width="2"/>
          <text x="60" y="22" text-anchor="middle" font-size="8" font-weight="black" fill="#064e3b">★ MẶT TRỜI 14 TIA</text>
          <text x="60" y="84" text-anchor="middle" font-size="9" font-weight="bold" fill="#065f46">Trống đồng Đông Sơn</text>
        </g>

        <path d="M145,45 L180,45" stroke="#059669" stroke-width="2.5"/>

        <rect x="190" y="8" width="320" height="74" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
        <text x="350" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">ĐỈNH CAO KIM KHÍ &amp; THỜI TRANG DI SẢN</text>
        <text x="350" y="46" text-anchor="middle" font-size="9" fill="#065f46">• Hoa văn chim Lạc bay ngược chiều kim đồng hồ</text>
        <text x="350" y="60" text-anchor="middle" font-size="9" fill="#065f46">• Sa Huỳnh (đèn gốm hình thú) &amp; Óc Eo (bình gốm cổ)</text>
        <text x="350" y="74" text-anchor="middle" font-size="8" font-weight="bold" fill="#047857">• 4 Bước trang trí hoa văn di sản lên tà áo dài</text>
      </g>
    `;
  }

  return '';
}

// Now let's update build_full_mithuat6_page.js by replacing generateLessonArtSVG implementation!
let code = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/build_full_mithuat6_page.js', 'utf8');

const oldFnStart = code.indexOf('function generateLessonArtSVG(lesson) {');
const oldFnEnd = code.indexOf('// 30 Question Exam for Trạng Nguyên Mĩ Thuật 6');

const newFn = `function generateLessonArtSVG(lesson) {
  const num = lesson.num;
  const palettes = [
    { bg: '#fdf4ff', stroke: '#c026d3', fill: '#fae8ff', text: '#86198f' },
    { bg: '#fff1f2', stroke: '#e11d48', fill: '#ffe4e6', text: '#9f1239' },
    { bg: '#fff7ed', stroke: '#ea580c', fill: '#ffedd5', text: '#9a3412' },
    { bg: '#fefce8', stroke: '#ca8a04', fill: '#fef9c3', text: '#854d0e' },
    { bg: '#f0fdf4', stroke: '#16a34a', fill: '#dcfce7', text: '#166534' },
    { bg: '#ecfeff', stroke: '#0891b2', fill: '#cffafe', text: '#155e75' },
    { bg: '#eff6ff', stroke: '#2563eb', fill: '#dbeafe', text: '#1e40af' },
    { bg: '#faf5ff', stroke: '#9333ea', fill: '#f3e8ff', text: '#6b21a8' }
  ];
  const p = palettes[(num - 1) % palettes.length];
  
  ${getDistinctLessonSVG.toString()}
  const graphic = getDistinctLessonSVG(num);

  return \`
  <div class="my-6 p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-\${p.fill.replace('#','')} dark:from-slate-800/80 dark:to-slate-900/80 border border-slate-200 dark:border-slate-700 shadow-sm">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full" style="background-color: \${p.stroke}"></span>
        <span class="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">Sơ Đồ Tư Duy Nghệ Thuật</span>
      </div>
      <span class="text-xs px-2.5 py-0.5 rounded-full font-bold" style="background-color: \${p.fill}; color: \${p.text};">
        Bài \${num} • Mĩ Thuật 6
      </span>
    </div>
    <div class="w-full overflow-x-auto py-1">
      <svg class="mx-auto w-full max-w-2xl h-auto" viewBox="0 0 640 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        \${graphic}
      </svg>
    </div>
  </div>\`;
}\n\n`;

code = code.substring(0, oldFnStart) + newFn + code.substring(oldFnEnd);
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/build_full_mithuat6_page.js', code, 'utf8');
console.log('Successfully updated generateLessonArtSVG with 16 distinct lesson SVGs!');
