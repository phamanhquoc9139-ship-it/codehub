// scratch/nguvan11_svgs.js
// 9 Sơ đồ SVG tư duy trực quan cho 9 bài học Ngữ văn 11

const nguvan11_svgs = {
  1: {
    note: "Sơ đồ hệ thống tự sự: Phân biệt Câu chuyện (Story) vs Truyện kể (Plot), Người kể chuyện (Ngôi 1 / Ngôi 3) và Sự chuyển dịch Điểm nhìn trần thuật.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#fff1f2" class="dark:fill-rose-950/40 border border-rose-200 dark:border-rose-900/60" />
      <text x="380" y="28" text-anchor="middle" font-weight="bold" font-size="13" fill="#9f1239" class="dark:fill-rose-300">SƠ ĐỒ TRẦN THUẬT: CÂU CHUYỆN, TRUYỆN KỂ & ĐIỂM NHÌN</text>

      <g transform="translate(30, 45)">
        <rect width="210" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#f43f5e" stroke-width="1.5" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#be123c">CÂU CHUYỆN (Story)</text>
        <text x="15" y="48" font-size="10" fill="#9f1239">• Chuỗi nhân vật, biến cố thực tế</text>
        <text x="15" y="68" font-size="10" fill="#9f1239">• Diễn ra theo thời gian tự nhiên</text>
        <text x="15" y="88" font-size="10" fill="#9f1239">• Trật tự nhân - quả đời sống</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#be123c">Chất liệu hiện thực ban đầu</text>
      </g>

      <g transform="translate(270, 45)">
        <rect width="220" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#e11d48" stroke-width="1.5" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#9f1239">TRUYỆN KỂ (Plot/Discourse)</text>
        <text x="15" y="48" font-size="10" fill="#be123c">• Cách dàn dựng, sắp xếp của nhà văn</text>
        <text x="15" y="68" font-size="10" fill="#be123c">• Đảo trật tự, hồi tưởng, đồng hiện</text>
        <text x="15" y="88" font-size="10" fill="#be123c">• Lựa chọn chi tiết dồn nén, đắt giá</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#e11d48">Sáng tạo nghệ thuật của tác giả</text>
      </g>

      <g transform="translate(520, 45)">
        <rect width="210" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#be123c" stroke-width="1.5" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#881337">ĐIỂM NHÌN TRẦN THUẬT</text>
        <text x="15" y="48" font-size="10" fill="#9f1239">• Người kể ngôi 1 (tôi) vs ngôi 3</text>
        <text x="15" y="68" font-size="10" fill="#9f1239">• Điểm nhìn bên ngoài (khách quan)</text>
        <text x="15" y="88" font-size="10" fill="#9f1239">• Điểm nhìn bên trong (tâm lí)</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#881337">Chuyển dịch điểm nhìn đa chiều</text>
      </g>
    </svg>`
  },

  2: {
    note: "Sơ đồ Cấu tứ & Hình ảnh thơ: Chủ thể trữ tình → Tứ thơ trung tâm → Mạch vận động cảm xúc → Biểu tượng thẩm mĩ.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/40 border border-blue-200 dark:border-blue-900/60" />
      <text x="380" y="28" text-anchor="middle" font-weight="bold" font-size="13" fill="#1e40af" class="dark:fill-blue-300">SƠ ĐỒ CẤU TỨ & HÌNH TƯỢNG TRONG THƠ TRỮ TÌNH</text>

      <g transform="translate(30, 45)">
        <rect width="210" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#3b82f6" stroke-width="1.5" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">1. CHỦ THỂ TRỮ TÌNH</text>
        <text x="15" y="48" font-size="10" fill="#1e40af">• Người phát ngôn trong thơ</text>
        <text x="15" y="68" font-size="10" fill="#1e40af">• Cái tôi thi sĩ rung động thẩm mĩ</text>
        <text x="15" y="88" font-size="10" fill="#1e40af">• Gắn với hoàn cảnh sáng tác cụ thể</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#1d4ed8">Điểm tựa khơi nguồn cảm hứng</text>
      </g>

      <g transform="translate(270, 45)">
        <rect width="220" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#2563eb" stroke-width="1.5" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#1e40af">2. CẤU TỨ (TỨ THƠ)</text>
        <text x="15" y="48" font-size="10" fill="#1d4ed8">• Phát hiện cốt lõi chi phối bài thơ</text>
        <text x="15" y="68" font-size="10" fill="#1d4ed8">• Mạch vận động cảm xúc logic</text>
        <text x="15" y="88" font-size="10" fill="#1d4ed8">• Tạo nhịp điệu và liên kết chỉnh thể</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#2563eb">Linh hồn của tác phẩm thơ</text>
      </g>

      <g transform="translate(520, 45)">
        <rect width="210" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#1d4ed8" stroke-width="1.5" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#1e3a8a">3. HÌNH ẢNH & BIỂU TƯỢNG</text>
        <text x="15" y="48" font-size="10" fill="#1e40af">• Tái hiện cảnh vật, con người</text>
        <text x="15" y="68" font-size="10" fill="#1e40af">• Gợi liên tưởng vượt nghĩa thực</text>
        <text x="15" y="88" font-size="10" fill="#1e40af">• Phá vỡ quy tắc ngôn ngữ tạo ấn tượng</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#1e3a8a">Sức gợi mở triết lí nhân sinh</text>
      </g>
    </svg>`
  },

  3: {
    note: "Kim tự tháp lập luận: Luận đề bao trùm → Hệ thống luận điểm → Lí lẽ biện chứng → Bằng chứng xác thực + Các yếu tố bổ trợ.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f0fdf4" class="dark:fill-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60" />
      <text x="380" y="28" text-anchor="middle" font-weight="bold" font-size="13" fill="#065f46" class="dark:fill-emerald-300">CẤU TRÚC & LẬP LUẬN TRONG VĂN BẢN NGHỊ LUẬN</text>

      <g transform="translate(40, 45)">
        <!-- Level 1: Luận đề -->
        <rect x="180" y="0" width="320" height="32" rx="6" fill="#10b981" />
        <text x="340" y="21" text-anchor="middle" font-weight="bold" font-size="11" fill="#ffffff">LUẬN ĐỀ (Vấn đề trung tâm bao trùm toàn bài)</text>

        <!-- Level 2: Luận điểm -->
        <rect x="70" y="42" width="250" height="32" rx="6" fill="#059669" />
        <text x="195" y="63" text-anchor="middle" font-weight="bold" font-size="11" fill="#ffffff">Luận điểm 1 (Khía cạnh A)</text>

        <rect x="360" y="42" width="250" height="32" rx="6" fill="#059669" />
        <text x="485" y="63" text-anchor="middle" font-weight="bold" font-size="11" fill="#ffffff">Luận điểm 2 (Khía cạnh B)</text>

        <!-- Level 3: Lí lẽ & Bằng chứng -->
        <rect x="10" y="84" width="310" height="42" rx="6" fill="#ffffff" class="dark:fill-slate-900" stroke="#047857" />
        <text x="165" y="102" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Lí lẽ logic + Bằng chứng thực tế 1</text>
        <text x="165" y="118" text-anchor="middle" font-size="9" fill="#065f46">Dữ liệu xác thực, nhân chứng khách quan</text>

        <rect x="360" y="84" width="310" height="42" rx="6" fill="#ffffff" class="dark:fill-slate-900" stroke="#047857" />
        <text x="515" y="102" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Lí lẽ logic + Bằng chứng thực tế 2</text>
        <text x="515" y="118" text-anchor="middle" font-size="9" fill="#065f46">Thuyết minh, miêu tả, biểu cảm hỗ trợ</text>
      </g>
    </svg>`
  },

  4: {
    note: "Sơ đồ giao thoa nghệ thuật: Sự kết hợp giữa Cốt truyện tự sự dân gian và Men say cảm xúc trữ tình.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#faf5ff" class="dark:fill-purple-950/40 border border-purple-200 dark:border-purple-900/60" />
      <text x="380" y="28" text-anchor="middle" font-weight="bold" font-size="13" fill="#6b21a8" class="dark:fill-purple-300">SỰ GIAO THOA GIỮA TỰ SỰ & TRỮ TÌNH TRONG THƠ</text>

      <g transform="translate(35, 45)">
        <rect width="320" height="125" rx="10" fill="#ffffff" class="dark:fill-slate-900" stroke="#a855f7" stroke-width="1.5" />
        <text x="160" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#7e22ce">YẾU TỐ TỰ SỰ (Nền tảng sự kiện)</text>
        <text x="15" y="48" font-size="10" fill="#6b21a8">• Cốt truyện, chuỗi sự việc nối tiếp</text>
        <text x="15" y="68" font-size="10" fill="#6b21a8">• Nhân vật có số phận, hành động cụ thể</text>
        <text x="15" y="88" font-size="10" fill="#6b21a8">• Lời kể, lời đối thoại sinh động</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#7e22ce">Tạo hoàn cảnh khách quan chân thực</text>
      </g>

      <g transform="translate(405, 45)">
        <rect width="320" height="125" rx="10" fill="#ffffff" class="dark:fill-slate-900" stroke="#9333ea" stroke-width="1.5" />
        <text x="160" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#7e22ce">YẾU TỐ TRỮ TÌNH (Linh hồn thi ca)</text>
        <text x="15" y="48" font-size="10" fill="#6b21a8">• Cảm xúc thương nhớ, xót xa, gắn bó</text>
        <text x="15" y="68" font-size="10" fill="#6b21a8">• Nhịp điệu thơ, hình ảnh ẩn dụ biểu tượng</text>
        <text x="15" y="88" font-size="10" fill="#6b21a8">• Tiếng nói khát vọng tình yêu tự do</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#9333ea">Nâng đỡ cảm xúc, chạm tới trái tim</text>
      </g>
    </svg>`
  },

  5: {
    note: "Sơ đồ Xung đột Bi kịch: Mâu thuẫn xã hội đối kháng $\\leftrightarrow$ Giằng xé nội tâm $\\rightarrow$ Lựa chọn định mệnh $\\rightarrow$ Thanh lọc tâm hồn (Catharsis).",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#fffbeb" class="dark:fill-amber-950/40 border border-amber-200 dark:border-amber-900/60" />
      <text x="380" y="28" text-anchor="middle" font-weight="bold" font-size="13" fill="#92400e" class="dark:fill-amber-300">CƠ CHẾ XUNG ĐỘT & HIỆU ỨNG THANH LỌC TRONG BI KỊCH</text>

      <g transform="translate(30, 45)">
        <rect width="210" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#f59e0b" stroke-width="1.5" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#b45309">1. XUNG ĐỘT BÊN NGOÀI</text>
        <text x="15" y="48" font-size="10" fill="#92400e">• Các thế lực xã hội đối đầu gay gắt</text>
        <text x="15" y="68" font-size="10" fill="#92400e">• Khát vọng cao cả vs Thực tại tàn nhẫn</text>
        <text x="15" y="88" font-size="10" fill="#92400e">• Nghệ sĩ vs Quần chúng đói khổ</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#b45309">Bế tắc không thể dung hòa</text>
      </g>

      <g transform="translate(270, 45)">
        <rect width="220" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#d97706" stroke-width="1.5" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#b45309">2. XUNG ĐỘT NỘI TÂM</text>
        <text x="15" y="48" font-size="10" fill="#92400e">• Giằng xé giữa Sống hay Không sống</text>
        <text x="15" y="68" font-size="10" fill="#92400e">• Bổn phận đạo đức vs Nỗi sợ bất định</text>
        <text x="15" y="88" font-size="10" fill="#92400e">• Lựa chọn dấn thân và trả giá sinh mệnh</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#d97706">Chiều sâu nhân cách bi kịch</text>
      </g>

      <g transform="translate(520, 45)">
        <rect width="210" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#b45309" stroke-width="1.5" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#78350f">3. THANH LỌC (CATHARSIS)</text>
        <text x="15" y="48" font-size="10" fill="#92400e">• Cái chết bi tráng của nhân vật</text>
        <text x="15" y="68" font-size="10" fill="#92400e">• Đánh thức niềm xót thương sâu sắc</text>
        <text x="15" y="88" font-size="10" fill="#92400e">• Bừng tỉnh nhận thức thẩm mĩ</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#78350f">Hướng thiện & nâng cao tâm hồn</text>
      </g>
    </svg>`
  },

  6: {
    note: "Sơ đồ Tiếp biến văn hóa Nguyễn Du: Tiếp nhận cốt truyện Trung Hoa $\\rightarrow$ Việt hóa thể lục bát Nôm $\\rightarrow$ Cảm hứng nhân đạo sâu sắc $\\rightarrow$ Kiệt tác Truyện Kiều.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#fff1f2" class="dark:fill-rose-950/40 border border-rose-200 dark:border-rose-900/60" />
      <text x="380" y="28" text-anchor="middle" font-weight="bold" font-size="13" fill="#be123c" class="dark:fill-rose-300">NGUYỄN DU: TIẾP BIẾN VĂN HÓA & ĐỈNH CAO SÁNG TẠO NGHỆ THUẬT</text>

      <g transform="translate(30, 45)">
        <rect width="210" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#f43f5e" stroke-width="1.5" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#be123c">1. TIẾP NHẬN CHẤT LIỆU</text>
        <text x="15" y="48" font-size="10" fill="#9f1239">• Cốt truyện Kim Vân Kiều truyện</text>
        <text x="15" y="68" font-size="10" fill="#9f1239">• Thi liệu Đường luật, điển tích Trung Hoa</text>
        <text x="15" y="88" font-size="10" fill="#9f1239">• Không sao chép máy móc</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#be123c">Nền tảng tư liệu ban đầu</text>
      </g>

      <g transform="translate(270, 45)">
        <rect width="220" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#e11d48" stroke-width="1.5" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#9f1239">2. VIỆT HÓA THẦN KÌ</text>
        <text x="15" y="48" font-size="10" fill="#be123c">• Chuyển từ văn xuôi sang THƠ LỤC BÁT</text>
        <text x="15" y="68" font-size="10" fill="#be123c">• Sử dụng Chữ Nôm tinh hoa dân tộc</text>
        <text x="15" y="88" font-size="10" fill="#be123c">• Ngôn ngữ ca dao, thành ngữ mượt mà</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#e11d48">Khẳng định bản sắc văn hóa Việt</text>
      </g>

      <g transform="translate(520, 45)">
        <rect width="210" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#be123c" stroke-width="1.5" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#881337">3. CẢM HỨNG NHÂN ĐẠO</text>
        <text x="15" y="48" font-size="10" fill="#9f1239">• 'Trông thấy mà đau đớn lòng'</text>
        <text x="15" y="68" font-size="10" fill="#9f1239">• Xót thương thân phận phụ nữ tài hoa</text>
        <text x="15" y="88" font-size="10" fill="#9f1239">• Miêu tả nội tâm bậc thầy qua độc thoại</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#881337">Kiệt tác thế giới vượt thời gian</text>
      </g>
    </svg>`
  },

  7: {
    note: "Tam giác nghệ thuật Kí: Ghi chép hiện thực xác thực $\\leftrightarrow$ Trí tưởng tượng liên tưởng $\\leftrightarrow$ Cái tôi tác giả tài hoa uyên bác.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f0fdfa" class="dark:fill-teal-950/40 border border-teal-200 dark:border-teal-900/60" />
      <text x="380" y="28" text-anchor="middle" font-weight="bold" font-size="13" fill="#115e59" class="dark:fill-teal-300">TAM GIÁC NGHỆ THUẬT CỦA THỂ LOẠI KÍ (BÚT KÍ, TÙY BÚT)</text>

      <g transform="translate(30, 45)">
        <rect width="210" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#14b8a6" stroke-width="1.5" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#0f766e">1. GHI CHÉP HIỆN THỰC</text>
        <text x="15" y="48" font-size="10" fill="#115e59">• Sự kiện, con người có thật ngoài đời</text>
        <text x="15" y="68" font-size="10" fill="#115e59">• Tư liệu lịch sử, địa lí, văn hóa xác tín</text>
        <text x="15" y="88" font-size="10" fill="#115e59">• Trải nghiệm mắt thấy tai nghe</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#0f766e">Nền tảng chân thực khách quan</text>
      </g>

      <g transform="translate(270, 45)">
        <rect width="220" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#0d9488" stroke-width="1.5" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#115e59">2. TƯỞNG TƯỢNG & LIÊN TƯỞNG</text>
        <text x="15" y="48" font-size="10" fill="#0f766e">• So sánh dòng sông với cô gái Di-gan</text>
        <text x="15" y="68" font-size="10" fill="#0f766e">• Bay bổng, kết nối quá khứ - hiện tại</text>
        <text x="15" y="88" font-size="10" fill="#0f766e">• Thổi hồn sinh thể sống vào thiên nhiên</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#0d9488">Tạo chất thơ và chiều sâu thẩm mĩ</text>
      </g>

      <g transform="translate(520, 45)">
        <rect width="210" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#0f766e" stroke-width="1.5" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#134e4a">3. CÁI TÔI TÁC GIẢ</text>
        <text x="15" y="48" font-size="10" fill="#115e59">• Lăng kính cảm xúc chủ quan độc đáo</text>
        <text x="15" y="68" font-size="10" fill="#115e59">• Vốn văn hóa uyên bác, tài hoa</text>
        <text x="15" y="88" font-size="10" fill="#115e59">• Giọng điệu thiết tha, đắm say</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#134e4a">Dấu ấn phong cách cá nhân</text>
      </g>
    </svg>`
  },

  8: {
    note: "Cấu trúc Văn bản Thông tin: Nhan đề, đề mục phân cấp, mạch lạc logic kết hợp phương tiện phi ngôn ngữ (ảnh, bảng, đồ thị).",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f0f9ff" class="dark:fill-sky-950/40 border border-sky-200 dark:border-sky-900/60" />
      <text x="380" y="28" text-anchor="middle" font-weight="bold" font-size="13" fill="#0369a1" class="dark:fill-sky-300">CẤU TRÚC VĂN BẢN THÔNG TIN & PHƯƠNG TIỆN PHI NGÔN NGỮ</text>

      <g transform="translate(30, 45)">
        <rect width="210" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#0ea5e9" stroke-width="1.5" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#0284c7">1. HÌNH THỨC & BỐ CỤC</text>
        <text x="15" y="48" font-size="10" fill="#0369a1">• Nhan đề nêu rõ chủ đề cốt lõi</text>
        <text x="15" y="68" font-size="10" fill="#0369a1">• Đề mục phân cấp rõ ràng (H1, H2, H3)</text>
        <text x="15" y="88" font-size="10" fill="#0369a1">• Chữ in đậm nhấn mạnh từ khóa</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#0284c7">Định hướng tiếp nhận nhanh chóng</text>
      </g>

      <g transform="translate(270, 45)">
        <rect width="220" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#0284c7" stroke-width="1.5" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#0369a1">2. TRÌNH BÀY DỮ LIỆU</text>
        <text x="15" y="48" font-size="10" fill="#0284c7">• Theo dòng thời gian lịch sử</text>
        <text x="15" y="68" font-size="10" fill="#0284c7">• Theo quan hệ Nguyên nhân - Hệ quả</text>
        <text x="15" y="88" font-size="10" fill="#0284c7">• Theo cấu trúc Vấn đề - Giải pháp</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#0284c7">Mạch lạc, liên kết, phi mâu thuẫn</text>
      </g>

      <g transform="translate(520, 45)">
        <rect width="210" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#0369a1" stroke-width="1.5" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#075985">3. PHƯƠNG TIỆN PHI NGÔN NGỮ</text>
        <text x="15" y="48" font-size="10" fill="#0369a1">• Hình ảnh tư liệu, bản đồ, sơ đồ</text>
        <text x="15" y="68" font-size="10" fill="#0369a1">• Bảng số liệu thống kê chuẩn xác</text>
        <text x="15" y="88" font-size="10" fill="#0369a1">• Ghi rõ nguồn và chú thích đơn vị</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#075985">Trực quan hóa thông tin khoa học</text>
      </g>
    </svg>`
  },

  9: {
    note: "Sơ đồ Đa chủ đề: Bản lĩnh ngất ngưởng cá nhân $\\leftrightarrow$ Lòng yêu nước xả thân vì dân tộc $\\leftrightarrow$ Trách nhiệm công dân trong thời đại mới.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#fefce8" class="dark:fill-yellow-950/40 border border-yellow-200 dark:border-yellow-900/60" />
      <text x="380" y="28" text-anchor="middle" font-weight="bold" font-size="13" fill="#854d0e" class="dark:fill-yellow-300">LỰA CHỌN & HÀNH ĐỘNG: BẢN LĨNH CÁ NHÂN & TRÁCH NHIỆM DÂN TỘC</text>

      <g transform="translate(30, 45)">
        <rect width="210" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#eab308" stroke-width="1.5" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#a16207">1. BẢN LĨNH NGẤT NGƯỞNG</text>
        <text x="15" y="48" font-size="10" fill="#854d0e">• Nguyễn Công Trứ tự tin tài năng</text>
        <text x="15" y="68" font-size="10" fill="#854d0e">• Vượt lên định kiến thế tục hẹp hòi</text>
        <text x="15" y="88" font-size="10" fill="#854d0e">• Sống trung thực, tự do, khẳng định mình</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#a16207">Ý thức cá nhân tích cực</text>
      </g>

      <g transform="translate(270, 45)">
        <rect width="220" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#ca8a04" stroke-width="1.5" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#854d0e">2. XẢ THÂN VÌ NGHĨA LỚN</text>
        <text x="15" y="48" font-size="10" fill="#a16207">• Nghĩa sĩ Cần Giuộc áo vải chân đất</text>
        <text x="15" y="68" font-size="10" fill="#a16207">• Đạp rào xông vào đồn giặc Pháp</text>
        <text x="15" y="88" font-size="10" fill="#a16207">• Coi cái chết nhẹ tựa lông hồng</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#ca8a04">Tượng đài bất tử của non sông</text>
      </g>

      <g transform="translate(520, 45)">
        <rect width="210" height="125" rx="8" fill="#ffffff" class="dark:fill-slate-900" stroke="#a16207" stroke-width="1.5" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#713f12">3. HÀNH ĐỘNG HÔM NAY</text>
        <text x="15" y="48" font-size="10" fill="#854d0e">• Einstein: Cá nhân cống hiến cộng đồng</text>
        <text x="15" y="68" font-size="10" fill="#854d0e">• Giản Tư Trung: 'Làm việc là làm người'</text>
        <text x="15" y="88" font-size="10" fill="#854d0e">• Trách nhiệm công dân trong thời đại số</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#713f12">Sống tử tế & Khát vọng cống hiến</text>
      </g>
    </svg>`
  }
};

module.exports = nguvan11_svgs;
