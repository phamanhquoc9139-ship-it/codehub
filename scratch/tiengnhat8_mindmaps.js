// tiengnhat8_mindmaps.js
// Vector SVG Concept Mindmaps cho Tiếng Nhật 8 (Bài 1 đến Bài 13)
// Bộ sách Kết nối tri thức với cuộc sống (GDPT 2018)

function getMindmapSVG(lessonId) {
  switch (lessonId) {
    case 'bai-1':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#180e14" stroke="#f43f5e" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#9f1239" stroke="#fb7185" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 1: 休みの日</text>
        <text x="135" y="105" text-anchor="middle" fill="#fecdd3" font-size="10" font-weight="700">Hoạt động ngày nghỉ</text>
        <text x="135" y="128" text-anchor="middle" fill="#fff1f2" font-size="8.5">Vたり、Vたりする &bull; Vるのが好き</text>
        <text x="135" y="148" text-anchor="middle" fill="#fda4af" font-size="8.5">Kanji: 覚・前・大・特・考</text>

        <path d="M 245 75 L 320 40" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#2d121f" stroke="#be123c" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#be123c"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fecdd3" font-size="11" font-weight="800">LIỆT KÊ TIÊU BIỂU (Vたり、Vたりする)</text>
          <text x="48" y="38" fill="#fda4af" font-size="9">Động từ thể た + り: Liệt kê vài hành động ngẫu nhiên không theo thứ tự cố định.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#2d121f" stroke="#f43f5e" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f43f5e"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fecdd3" font-size="11" font-weight="800">DANH TỪ HÓA SỞ THÍCH (Vるのが好き)</text>
          <text x="48" y="38" fill="#fda4af" font-size="9">V(thể từ điển) + の + が好きです (thích làm hành động gì; liệt kê N: NとかNとか).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#2d121f" stroke="#e11d48" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#e11d48"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fecdd3" font-size="11" font-weight="800">VĂN HÓA ĐỌC SÁCH (読書習慣)</text>
          <text x="48" y="38" fill="#fda4af" font-size="9">Phong trào Asadoku (朝読書) - 10 phút đọc sách buổi sáng đầu ngày tại trường Nhật.</text>
        </g>
      </svg>`;

    case 'bai-2':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#0ea5e9" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 2: イベントの計画</text>
        <text x="135" y="105" text-anchor="middle" fill="#bae6fd" font-size="10" font-weight="700">Kế hoạch sự kiện</text>
        <text x="135" y="128" text-anchor="middle" fill="#e0f2fe" font-size="8.5">～がいいと思う &bull; ～にしよう</text>
        <text x="135" y="148" text-anchor="middle" fill="#7dd3fc" font-size="8.5">Kanji: 主・黒・白・黄・色</text>

        <path d="M 245 75 L 320 40" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0284c7"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">ĐỀ XUẤT Ý KIẾN (～がいいと思います)</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Đưa ra phương án bản thân thấy phù hợp; と思います thể hiện quan điểm lịch sự.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0ea5e9" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0ea5e9"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">CHỐT QUYẾT ĐỊNH &amp; GIẢI THÍCH LÝ DO</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Nにしましょう (quyết định chọn N); ～し、～ですから (nêu nhiều lý do bổ trợ).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0369a1" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0369a1"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">LỄ HỘI VĂN HÓA TRƯỜNG HỌC (文化祭)</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Bunkasai: Sự kiện thường niên mùa thu, học sinh làm kịch, gian hàng, ca múa nhạc.</text>
        </g>
      </svg>`;

    case 'bai-3':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#141824" stroke="#8b5cf6" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#5b21b6" stroke="#a78bfa" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 3: イベントのじゅんび</text>
        <text x="135" y="105" text-anchor="middle" fill="#ddd6fe" font-size="10" font-weight="700">Chuẩn bị sự kiện</text>
        <text x="135" y="128" text-anchor="middle" fill="#ede9fe" font-size="8.5">もうVましたか &bull; まだVていません</text>
        <text x="135" y="148" text-anchor="middle" fill="#c4b5fd" font-size="8.5">Kanji: 正・細・早・起</text>

        <path d="M 245 75 L 320 40" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#2e1065" stroke="#7c3aed" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#7c3aed"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#ddd6fe" font-size="11" font-weight="800">TIẾN ĐỘ CÔNG VIỆC (もう &bull; まだ)</text>
          <text x="48" y="38" fill="#c4b5fd" font-size="9">もうVましたか (đã làm chưa?) >< いいえ、まだVていません (vẫn chưa làm).</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#2e1065" stroke="#8b5cf6" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#8b5cf6"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#ddd6fe" font-size="11" font-weight="800">YÊU CẦU LỊCH SỰ (Vてください)</text>
          <text x="48" y="38" fill="#c4b5fd" font-size="9">Phân công việc: 字を大きく書いてください (hãy viết chữ to), 机を並べてください.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#2e1065" stroke="#6d28d9" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#6d28d9"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#ddd6fe" font-size="11" font-weight="800">ÂM NHẠC HỌC ĐƯỜNG (日本の学校における音楽)</text>
          <text x="48" y="38" fill="#c4b5fd" font-size="9">Hội thi hợp xướng Gasshōkon (合唱コンクール) rèn luyện tinh thần hòa nhập tập thể.</text>
        </g>
      </svg>`;

    case 'bai-4':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#1c1917" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#b45309" stroke="#fcd34d" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 4: プレゼント</text>
        <text x="135" y="105" text-anchor="middle" fill="#fef3c7" font-size="10" font-weight="700">Món quà &amp; Mong muốn</text>
        <text x="135" y="128" text-anchor="middle" fill="#fffbeb" font-size="8.5">Nをくれました &bull; Nがほしい</text>
        <text x="135" y="148" text-anchor="middle" fill="#fde68a" font-size="8.5">Kanji: 新・自・転・車・百</text>

        <path d="M 245 75 L 320 40" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#292524" stroke="#d97706" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#d97706"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fef3c7" font-size="11" font-weight="800">NGƯỜI KHÁC TẶNG MÌNH (Nがくれました)</text>
          <text x="48" y="38" fill="#fde68a" font-size="9">Ai đó tặng cho tôi / người phe tôi món quà: 父が新しい時計をくれました.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#292524" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f59e0b"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fef3c7" font-size="11" font-weight="800">MUỐN CÓ ĐỒ VẬT (Nがほしい / のがほしい)</text>
          <text x="48" y="38" fill="#fde68a" font-size="9">Bày tỏ sở hữu: どんなNがほしいですか; dùng の thay thế danh từ: かっこいいのがほしい.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#292524" stroke="#b45309" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#b45309"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fef3c7" font-size="11" font-weight="800">VĂN HÓA BIẾU QUÀ (お中元・お歳暮)</text>
          <text x="48" y="38" fill="#fde68a" font-size="9">Ochūgen (giữa năm) &amp; Oseibo (cuối năm) tri ân thầy cô, ân nhân; tương tự quà Tết Việt Nam.</text>
        </g>
      </svg>`;

    case 'bai-5':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#047857" stroke="#34d399" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 5: 道あんない</text>
        <text x="135" y="105" text-anchor="middle" fill="#d1fae5" font-size="10" font-weight="700">Chỉ đường giao thông</text>
        <text x="135" y="128" text-anchor="middle" fill="#ecfdf5" font-size="8.5">Vてください &bull; ～から</text>
        <text x="135" y="148" text-anchor="middle" fill="#6ee7b7" font-size="8.5">Kanji: 左・右・歩・屋・駅</text>

        <path d="M 245 75 L 320 40" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#064e3b" stroke="#059669" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#059669"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#d1fae5" font-size="11" font-weight="800">CHỈ DẪN LỘ TRÌNH TỪNG BƯỚC</text>
          <text x="48" y="38" fill="#a7f3d0" font-size="9">1つ目の交差点を左に曲がってください; まっすぐ行ってください (đi thẳng).</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#10b981"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#d1fae5" font-size="11" font-weight="800">NÊU LÝ DO AN TOÀN (～から)</text>
          <text x="48" y="38" fill="#a7f3d0" font-size="9">車がたくさん通りますから、歩道を歩いてください (Vì nhiều xe nên hãy đi trên vỉa hè).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#064e3b" stroke="#047857" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#047857"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#d1fae5" font-size="11" font-weight="800">LỐI ĐI XÚC GIÁC (点字ブロック)</text>
          <text x="48" y="38" fill="#a7f3d0" font-size="9">Phát minh nhân văn của Nhật năm 1965 cho người khiếm thị; không đứng chắn lối đi.</text>
        </g>
      </svg>`;

    case 'bai-6':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#1c1917" stroke="#e11d48" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#9f1239" stroke="#fb7185" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 6: 観光地</text>
        <text x="135" y="105" text-anchor="middle" fill="#fecdd3" font-size="10" font-weight="700">Điểm đến &amp; Ẩm thực</text>
        <text x="135" y="128" text-anchor="middle" fill="#fff1f2" font-size="8.5">Vたことがある &bull; Vてみたい</text>
        <text x="135" y="148" text-anchor="middle" fill="#fda4af" font-size="8.5">Kanji: 観・光・場・肉・苦</text>

        <path d="M 245 75 L 320 40" stroke="#e11d48" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#e11d48" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#e11d48" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#2d121f" stroke="#be123c" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#be123c"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fecdd3" font-size="11" font-weight="800">KINH NGHIỆM TỪNG TRẢI (Vたことがあります)</text>
          <text x="48" y="38" fill="#fda4af" font-size="9">Xác nhận việc từng làm trong đời: 日本のお城へ行ったことがあります.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#2d121f" stroke="#e11d48" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#e11d48"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fecdd3" font-size="11" font-weight="800">ƯỚC MUỐN THỬ NGHIỆM (Vてみたいです)</text>
          <text x="48" y="38" fill="#fda4af" font-size="9">Mong muốn thử trải nghiệm mới: ブンチャーを食べてみたいです (muốn thử ăn bún chả).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#2d121f" stroke="#9f1239" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#9f1239"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fecdd3" font-size="11" font-weight="800">THÀNH QUÁCH NHẬT BẢN (日本のお城)</text>
          <text x="48" y="38" fill="#fda4af" font-size="9">Lâu đài Hạc trắng Himeji, thành Osaka; kiến trúc Tenshukaku và hào nước phòng ngự.</text>
        </g>
      </svg>`;

    case 'bai-7':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0f172a" stroke="#d97706" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#b45309" stroke="#fbbf24" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 7: 観光客への注意</text>
        <text x="135" y="105" text-anchor="middle" fill="#fef3c7" font-size="10" font-weight="700">Nội quy &amp; Trích dẫn</text>
        <text x="135" y="128" text-anchor="middle" fill="#fffbeb" font-size="8.5">Vないでください &bull; 「…」と言いました</text>
        <text x="135" y="148" text-anchor="middle" fill="#fde68a" font-size="8.5">Kanji: 分・半・意・品・注</text>

        <path d="M 245 75 L 320 40" stroke="#d97706" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#d97706" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#d97706" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#b45309" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#b45309"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fef3c7" font-size="11" font-weight="800">YÊU CẦU LỊCH SỰ KHÔNG LÀM GÌ</text>
          <text x="48" y="38" fill="#fde68a" font-size="9">V(thể ない) + でください: それにさわらないでください (xin đừng chạm tay vào đó).</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#d97706" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#d97706"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fef3c7" font-size="11" font-weight="800">TRÍCH DẪN THÔNG BÁO (「…」と言いました)</text>
          <text x="48" y="38" fill="#fde68a" font-size="9">Truyền đạt lại lời nói: 係の人は「セールをしています」と言いました.</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#92400e" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#92400e"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fef3c7" font-size="11" font-weight="800">CHUYẾN ĐI HỌC TẬP (修学旅行)</text>
          <text x="48" y="38" fill="#fde68a" font-size="9">Hoạt động du lịch học tập truyền thống của học sinh Nhật; rèn ý thức kỷ luật tập thể.</text>
        </g>
      </svg>`;

    case 'bai-8':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0c1a2e" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 8: 天気よほう</text>
        <text x="135" y="105" text-anchor="middle" fill="#bae6fd" font-size="10" font-weight="700">Dự báo thời tiết</text>
        <text x="135" y="128" text-anchor="middle" fill="#e0f2fe" font-size="8.5">～でしょう &bull; ～はじめます</text>
        <text x="135" y="148" text-anchor="middle" fill="#7dd3fc" font-size="8.5">Kanji: 降・雪・以・京・急</text>

        <path d="M 245 75 L 320 40" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0284c7"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">DỰ ĐOÁN THỜI TIẾT KHÁCH QUAN (～でしょう)</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Căn cứ theo bản tin thời tiết (xuống giọng cuối câu): 明日は朝から晴れるでしょう.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#38bdf8"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">HIỆN TƯỢNG BẮT ĐẦU (V-stem + はじめます)</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Khoảnh khắc bắt đầu chuyển biến: 雨が降りはじめます (mưa bắt đầu rơi).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#0369a1" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0369a1"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#bae6fd" font-size="11" font-weight="800">DIỄN TẬP PHÒNG CHỐNG THIÊN TAI (防災訓練)</text>
          <text x="48" y="38" fill="#cbd5e1" font-size="9">Huấn luyện phản xạ sơ tán an toàn O-Ka-Shi-Mo trước động đất, bão lũ tại trường học.</text>
        </g>
      </svg>`;

    case 'bai-9':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#1e1b18" stroke="#f97316" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#c2410c" stroke="#fdba74" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 9: 気こうの変化</text>
        <text x="135" y="105" text-anchor="middle" fill="#ffedd5" font-size="10" font-weight="700">Khí hậu &amp; Mùa trong năm</text>
        <text x="135" y="128" text-anchor="middle" fill="#fff7ed" font-size="8.5">～く／になる &bull; ～やすい</text>
        <text x="135" y="148" text-anchor="middle" fill="#fed7aa" font-size="8.5">Kanji: 温・同・季・涼・住</text>

        <path d="M 245 75 L 320 40" stroke="#f97316" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#f97316" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#f97316" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#292524" stroke="#ea580c" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#ea580c"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#ffedd5" font-size="11" font-weight="800">BIẾN ĐỔI TRẠNG THÁI (～く／になります)</text>
          <text x="48" y="38" fill="#fed7aa" font-size="9">Tính từ đuôi い bỏ い + くなります (暖かくなります); Tính từ な/N + になります.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#292524" stroke="#f97316" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#f97316"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#ffedd5" font-size="11" font-weight="800">ĐẶC ĐIỂM DỄ CHỊU (V-stem + やすい)</text>
          <text x="48" y="38" fill="#fed7aa" font-size="9">過ごしやすい (dễ chịu để sinh hoạt); phó từ 少しずつ (từng chút một, chuyển mùa từ từ).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#292524" stroke="#c2410c" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#c2410c"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#ffedd5" font-size="11" font-weight="800">NGẮM LÁ ĐỎ MÙA THU (紅葉・もみじ)</text>
          <text x="48" y="38" fill="#fed7aa" font-size="9">Tập quán Momijigari: Thưởng ngoạn rừng phong chuyển màu rực rỡ từ bắc xuống nam.</text>
        </g>
      </svg>`;

    case 'bai-10':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#1e131d" stroke="#ec4899" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#9d174d" stroke="#f472b6" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 10: 校そく</text>
        <text x="135" y="105" text-anchor="middle" fill="#fce7f3" font-size="10" font-weight="700">Nội quy trường học</text>
        <text x="135" y="128" text-anchor="middle" fill="#fdf2f8" font-size="8.5">～なければならない &bull; ～てはいけない</text>
        <text x="135" y="148" text-anchor="middle" fill="#fbcfe8" font-size="8.5">Kanji: 持・守・走・図</text>

        <path d="M 245 75 L 320 40" stroke="#ec4899" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#ec4899" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#ec4899" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#311326" stroke="#db2777" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#db2777"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#fce7f3" font-size="11" font-weight="800">NGHĨA VỤ BẮT BUỘC (Vなければなりません)</text>
          <text x="48" y="38" fill="#fbcfe8" font-size="9">Thể ない bỏ い + ければなりません: 赤いスカーフをつけなければなりません.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#311326" stroke="#ec4899" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#ec4899"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#fce7f3" font-size="11" font-weight="800">CẤM ĐOÁN NGHIÊM NGẶT (Vてはいけません)</text>
          <text x="48" y="38" fill="#fbcfe8" font-size="9">Thể て + はいけません: 授業中に携帯を使ってはいけません (không dùng điện thoại).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#311326" stroke="#be185d" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#be185d"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#fce7f3" font-size="11" font-weight="800">TRỰC NHẬT TRƯỜNG LỚP (日直 - NITCHOKU)</text>
          <text x="48" y="38" fill="#fbcfe8" font-size="9">Ban cán sự luân phiên hằng ngày: ghi sổ đầu bài, hô chào Kiritsu, chia cơm trưa.</text>
        </g>
      </svg>`;

    case 'bai-11':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#1e1b29" stroke="#6366f1" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#4338ca" stroke="#818cf8" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 11: あやまる</text>
        <text x="135" y="105" text-anchor="middle" fill="#e0e7ff" font-size="10" font-weight="700">Xin lỗi &amp; Nêu lý do</text>
        <text x="135" y="128" text-anchor="middle" fill="#eef2ff" font-size="8.5">Vてすみません &bull; Vてしまう</text>
        <text x="135" y="148" text-anchor="middle" fill="#a5b4fc" font-size="8.5">Kanji: 遅・困・落・業・社</text>

        <path d="M 245 75 L 320 40" stroke="#6366f1" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#6366f1" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#6366f1" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#2e2552" stroke="#4f46e5" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#4f46e5"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#e0e7ff" font-size="11" font-weight="800">TẠ LỖI TRỰC TIẾP (Vて、すみません)</text>
          <text x="48" y="38" fill="#c7d2fe" font-size="9">Nêu hành động sơ suất bằng thể て rồi xin lỗi: 遅くなって、すみません.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#2e2552" stroke="#6366f1" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#6366f1"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#e0e7ff" font-size="11" font-weight="800">NGUYÊN NHÂN &amp; TIẾC NUỐI (Vてしまいました)</text>
          <text x="48" y="38" fill="#c7d2fe" font-size="9">ねぼうして、遅くなりました (vì ngủ quên); 宿題を忘れてしまいました (lỡ quên bài tập).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#2e2552" stroke="#4338ca" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#4338ca"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#e0e7ff" font-size="11" font-weight="800">ĐA NGHĨA CỦA TỪ 「すみません」</text>
          <text x="48" y="38" fill="#c7d2fe" font-size="9">Vừa là xin lỗi (I'm sorry), vừa là cảm ơn làm phiền (Thank you) và gọi phục vụ (Excuse me).</text>
        </g>
      </svg>`;

    case 'bai-12':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#062e24" stroke="#14b8a6" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#0f766e" stroke="#2dd4bf" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 12: アドバイス</text>
        <text x="135" y="105" text-anchor="middle" fill="#ccfbf1" font-size="10" font-weight="700">Quan tâm &amp; Lời khuyên</text>
        <text x="135" y="128" text-anchor="middle" fill="#f0fdfa" font-size="8.5">～そうです &bull; Vたほうがいい</text>
        <text x="135" y="148" text-anchor="middle" fill="#5eead4" font-size="8.5">Kanji: 背・薬・重・後・年</text>

        <path d="M 245 75 L 320 40" stroke="#14b8a6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#14b8a6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#14b8a6" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#042f2e" stroke="#0d9488" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0d9488"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#ccfbf1" font-size="11" font-weight="800">VẺ NGOÀI QUAN SÁT (～そうです)</text>
          <text x="48" y="38" fill="#99f6e4" font-size="9">Nhận định trực tiếp: ぐあいが悪そうですね (trông có vẻ không khỏe), 重そう (trông nặng).</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#042f2e" stroke="#14b8a6" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#14b8a6"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#ccfbf1" font-size="11" font-weight="800">LỜI KHUYÊN NÊN &amp; KHÔNG NÊN</text>
          <text x="48" y="38" fill="#99f6e4" font-size="9">V(thể た) + ほうがいい (早くねたほうがいい) >< V(thể ない) + ほうがいい (không nên làm).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#042f2e" stroke="#0f766e" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#0f766e"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#ccfbf1" font-size="11" font-weight="800">TUỔI THỌ TRUNG BÌNH (日本人の平均寿命)</text>
          <text x="48" y="38" fill="#99f6e4" font-size="9">Bí quyết sống thọ: chế độ ăn Washoku thanh đạm, thói quen đi bộ và y tế dự phòng.</text>
        </g>
      </svg>`;

    case 'bai-13':
      return `
      <svg viewBox="0 0 840 210" class="w-full h-auto font-sans select-none drop-shadow" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="210" rx="14" fill="#0c1e33" stroke="#3b82f6" stroke-width="1.5"/>
        <rect x="25" y="45" width="220" height="120" rx="12" fill="#1d4ed8" stroke="#60a5fa" stroke-width="2"/>
        <text x="135" y="80" text-anchor="middle" fill="#fff" font-size="13" font-weight="900" letter-spacing="1">BÀI 13: おすすめの場所</text>
        <text x="135" y="105" text-anchor="middle" fill="#dbeafe" font-size="10" font-weight="700">Điểm đến đề xuất</text>
        <text x="135" y="128" text-anchor="middle" fill="#eff6ff" font-size="8.5">N1はN2が... &bull; Thể khả năng</text>
        <text x="135" y="148" text-anchor="middle" fill="#93c5fd" font-size="8.5">Kanji: 旅・美・建・鳥・村</text>

        <path d="M 245 75 L 320 40" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 105 L 320 105" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 245 135 L 320 170" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,3"/>

        <g transform="translate(320, 20)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#2563eb" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#2563eb"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">1</text>
          <text x="48" y="21" fill="#dbeafe" font-size="11" font-weight="800">ĐẶC TRƯNG TIÊU BIỂU (N1はN2が[Tính từ])</text>
          <text x="48" y="38" fill="#bfdbfe" font-size="9">ニンビンは自然が豊かです (Ninh Bình thiên nhiên phong phú), 海がとてもきれいです.</text>
        </g>
        <g transform="translate(320, 81)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#38bdf8"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">2</text>
          <text x="48" y="21" fill="#dbeafe" font-size="11" font-weight="800">THỂ KHẢ NĂNG &amp; GỢI Ý ĐIỂM ĐẾN</text>
          <text x="48" y="38" fill="#bfdbfe" font-size="9">食べられる (có thể ăn), 泳げる; ～なら、～がおすすめ (nếu muốn... thì... là gợi ý tốt nhất).</text>
        </g>
        <g transform="translate(320, 142)">
          <rect width="495" height="48" rx="8" fill="#1e293b" stroke="#1d4ed8" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="12" fill="#1d4ed8"/>
          <text x="24" y="28" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">3</text>
          <text x="48" y="21" fill="#dbeafe" font-size="11" font-weight="800">THIÊN NHIÊN HOKKAIDO (北海道)</text>
          <text x="48" y="38" fill="#bfdbfe" font-size="9">Hòn đảo lớn phía Bắc: cánh đồng hoa Furano, suối nước nóng, lễ hội băng tuyết Sapporo.</text>
        </g>
      </svg>`;

    default:
      return '';
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getMindmapSVG };
}
