// Part 1: Chuong I (Vẽ kĩ thuật) & Chuong II (Cơ khí) - Bai 1 den Bai 10
// Bo sach Ket noi tri thuc voi cuoc song (GDPT 2018)

const chapters = [
  {
    num: "I",
    id: "chuong-1",
    title: "Chương I: Vẽ kĩ thuật",
    desc: "Tiêu chuẩn trình bày bản vẽ, hình chiếu vuông góc, bản vẽ chi tiết, bản vẽ lắp và bản vẽ nhà.",
    icon: "fa-compass-drafting",
    badgeColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    gradient: "from-blue-600 via-indigo-700 to-slate-900",
    lessonNums: [1, 2, 3, 4, 5]
  },
  {
    num: "II",
    id: "chuong-2",
    title: "Chương II: Cơ khí",
    desc: "Vật liệu cơ khí, truyền và biến đổi chuyển động, gia công cơ khí bằng tay, ngành nghề và dự án gia công.",
    icon: "fa-gears",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    gradient: "from-amber-600 via-orange-700 to-slate-900",
    lessonNums: [6, 7, 8, 9, 10]
  },
  {
    num: "III",
    id: "chuong-3",
    title: "Chương III: An toàn điện",
    desc: "Nguyên nhân tai nạn điện, các biện pháp an toàn khi sử dụng và sửa chữa, quy trình sơ cứu tai nạn điện.",
    icon: "fa-bolt",
    badgeColor: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300",
    gradient: "from-red-600 via-rose-700 to-slate-900",
    lessonNums: [11, 12, 13]
  },
  {
    num: "IV",
    id: "chuong-4",
    title: "Chương IV: Kĩ thuật điện",
    desc: "Cấu trúc mạch điện, cảm biến và mô đun cảm biến, lắp ráp mạch điều khiển tự động, ngành nghề kĩ thuật điện.",
    icon: "fa-microchip",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    gradient: "from-emerald-600 via-teal-700 to-slate-900",
    lessonNums: [14, 15, 16, 17]
  },
  {
    num: "V",
    id: "chuong-5",
    title: "Chương V: Thiết kế kĩ thuật",
    desc: "Vai trò của thiết kế kĩ thuật, các bước cơ bản trong quy trình thiết kế, dự án thiết kế hệ thống tưới cây tự động.",
    icon: "fa-lightbulb",
    badgeColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    gradient: "from-purple-600 via-indigo-700 to-slate-900",
    lessonNums: [18, 19, 20]
  }
];

const lessonsPart1 = [
  // BÀI 1
  {
    id: "bai-1",
    lessonNum: 1,
    chapterNum: "I",
    chapterName: "Chương I: Vẽ kĩ thuật",
    title: "Bài 1: Một số tiêu chuẩn trình bày bản vẽ kĩ thuật",
    tag: "Tiêu chuẩn bản vẽ",
    objectives: [
      "Hiểu khái niệm bản vẽ kĩ thuật và vai trò của các tiêu chuẩn kĩ thuật (TCVN và ISO).",
      "Nhận biết các khổ giấy chính thuộc dãy A (A0, A1, A2, A3, A4) và quy cách bố trí khung vẽ, khung tên.",
      "Phân biệt và áp dụng đúng 3 loại tỉ lệ: nguyên hình (1:1), thu nhỏ (1:n), phóng to (n:1).",
      "Sử dụng đúng 4 loại nét vẽ cơ bản: nét liền đậm, nét liền mảnh, nét đứt mảnh, nét gạch dài - chấm - mảnh.",
      "Ghi đúng quy cách đường kích thước, đường gióng, con số kích thước và kí hiệu phi (Ø), R."
    ],
    svgIllustration: `<svg viewBox="0 0 500 130" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Minh họa 4 loại nét vẽ cơ bản & Kích thước -->
      <rect x="15" y="10" width="470" height="110" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">4 LOẠI NÉT VẼ CƠ BẢN TRÊN BẢN VẼ KĨ THUẬT</text>
      <!-- Nét liền đậm -->
      <line x1="30" y1="46" x2="220" y2="46" stroke="#0f172a" stroke-width="3.5"/>
      <text x="235" y="50" font-size="10.5" font-weight="bold" fill="#0f172a">Nét liền đậm (Đường bao thấy, cạnh thấy)</text>
      <!-- Nét đứt mảnh -->
      <line x1="30" y1="68" x2="220" y2="68" stroke="#64748b" stroke-width="1.8" stroke-dasharray="6,3"/>
      <text x="235" y="72" font-size="10.5" font-weight="bold" fill="#475569">Nét đứt mảnh (Đường bao khuất, cạnh khuất)</text>
      <!-- Nét gạch dài chấm mảnh -->
      <line x1="30" y1="90" x2="220" y2="90" stroke="#0284c7" stroke-width="1.8" stroke-dasharray="14,3,3,3"/>
      <text x="235" y="94" font-size="10.5" font-weight="bold" fill="#0284c7">Nét gạch dài - chấm - mảnh (Đường tâm, trục đối xứng)</text>
      <!-- Nét liền mảnh -->
      <line x1="30" y1="110" x2="220" y2="110" stroke="#ef4444" stroke-width="1.5"/>
      <text x="235" y="114" font-size="10.5" font-weight="bold" fill="#dc2626">Nét liền mảnh (Đường gióng, đường kích thước)</text>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-shapes text-blue-600"></i>
            1. Khái niệm và các khổ giấy chính
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-file-lines"></i> Hình 1.1: Quan hệ phân chia kích thước các khổ giấy chính dãy A (TCVN 7285:2003)
      </div>
      <svg viewBox="0 0 540 160" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="15" width="500" height="130" fill="#f8fafc" stroke="#3b82f6" stroke-width="2" rx="6"/>
        <text x="35" y="35" font-size="11" font-weight="900" fill="#1d4ed8">A0 (1189 × 841 mm)</text>
        <line x1="270" y1="15" x2="270" y2="145" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,2"/>
        <rect x="25" y="45" width="240" height="95" fill="#eff6ff" stroke="#60a5fa" stroke-width="1.5" rx="4"/>
        <text x="145" y="95" text-anchor="middle" font-size="13" font-weight="bold" fill="#2563eb">A1 (841 × 594 mm)</text>
        
        <line x1="270" y1="80" x2="520" y2="80" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,2"/>
        <rect x="275" y="20" width="240" height="55" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5" rx="4"/>
        <text x="395" y="52" text-anchor="middle" font-size="12" font-weight="bold" fill="#4338ca">A2 (594 × 420 mm)</text>

        <line x1="395" y1="80" x2="395" y2="145" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,2"/>
        <rect x="275" y="85" width="115" height="55" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5" rx="4"/>
        <text x="332" y="117" text-anchor="middle" font-size="11" font-weight="bold" fill="#a21caf">A3 (420×297)</text>

        <rect x="400" y="85" width="115" height="55" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="4"/>
        <text x="457" y="117" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">A4 (297×210)</text>
      </svg>
      <div class="text-[10px] text-gray-500 text-center mt-1">Mỗi khổ giấy tiếp theo bằng một nửa khổ giấy liền trước chia đôi theo cạnh dài</div>
    </div>
  
          <p>• <strong>Bản vẽ kĩ thuật:</strong> Là phương tiện thông tin kĩ thuật trình bày hình dạng, kết cấu, kích thước và yêu cầu kĩ thuật của sản phẩm bằng hình vẽ và kí hiệu quy ước theo tiêu chuẩn thống nhất (TCVN, ISO).</p>
          <p class="mt-1">• <strong>Khổ giấy chính dãy A:</strong></p>
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 my-2 text-center text-xs font-semibold">
            <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-blue-900"><strong>A0</strong><br><span class="text-gray-500">1189 × 841 mm</span></div>
            <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-blue-900"><strong>A1</strong><br><span class="text-gray-500">841 × 594 mm</span></div>
            <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-blue-900"><strong>A2</strong><br><span class="text-gray-500">594 × 420 mm</span></div>
            <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-blue-900"><strong>A3</strong><br><span class="text-gray-500">420 × 297 mm</span></div>
            <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400"><strong>A4 (Chuẩn)</strong><br><span>297 × 210 mm</span></div>
          </div>
          <p>• <strong>Khung tên:</strong> Bố trí ở góc dưới cùng bên phải của bản vẽ, ghi tên gọi sản phẩm, người vẽ, người duyệt, vật liệu chế tạo, tỉ lệ và kí hiệu bản vẽ.</p>
        </div>

        <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-ruler-combined text-indigo-600"></i>
            2. Tỉ lệ và quy cách ghi kích thước
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-pen-nib"></i> Hình 1.2: Các loại nét vẽ kĩ thuật tiêu chuẩn thường dùng
      </div>
      <svg viewBox="0 0 540 130" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="20" x2="210" y2="20" stroke="#1e293b" stroke-width="3.5"/>
        <text x="230" y="24" font-size="11" font-weight="bold" fill="#1e293b">Nét liền đậm (0.5 mm):</text>
        <text x="380" y="24" font-size="10.5" fill="#64748b">Đường bao thấy, cạnh thấy</text>

        <line x1="30" y1="50" x2="210" y2="50" stroke="#475569" stroke-width="1.5" stroke-dasharray="6,3"/>
        <text x="230" y="54" font-size="11" font-weight="bold" fill="#1e293b">Nét đứt mảnh (0.25 mm):</text>
        <text x="380" y="54" font-size="10.5" fill="#64748b">Đường bao khuất, cạnh khuất</text>

        <line x1="30" y1="80" x2="210" y2="80" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="14,3,2,3"/>
        <text x="230" y="84" font-size="11" font-weight="bold" fill="#0284c7">Nét gạch chấm mảnh:</text>
        <text x="380" y="84" font-size="10.5" fill="#64748b">Đường tâm, trục đối xứng</text>

        <line x1="30" y1="110" x2="210" y2="110" stroke="#94a3b8" stroke-width="1.2"/>
        <text x="230" y="114" font-size="11" font-weight="bold" fill="#64748b">Nét liền mảnh:</text>
        <text x="380" y="114" font-size="10.5" fill="#64748b">Đường gióng, đường kích thước</text>
      </svg>
    </div>
  
          <p>• <strong>Tỉ lệ:</strong> Tỉ số giữa kích thước đo được trên hình biểu diễn và kích thước thực tế tương ứng của vật thể:</p>
          <p class="pl-4">• <em>Tỉ lệ nguyên hình:</em> <code>1:1</code>.</p>
          <p class="pl-4">• <em>Tỉ lệ thu nhỏ:</em> <code>1:2, 1:5, 1:10...</code></p>
          <p class="pl-4">• <em>Tỉ lệ phóng to:</em> <code>2:1, 5:1, 10:1...</code></p>
          <p class="mt-1 font-medium text-amber-700 dark:text-amber-400">⚠️ <em>Lưu ý cốt lõi:</em> Con số ghi trên bản vẽ LUÔN LUÔN là kích thước thực tế của vật thể (không bị phụ thuộc vào tỉ lệ bản vẽ phóng to hay thu nhỏ).</p>
          <p class="mt-1">• <strong>Ghi kích thước:</strong> Đơn vị đo chiều dài trên bản vẽ cơ khí mặc định là <strong>milimét (mm)</strong> (không ghi đơn vị sau con số). Đường kính hình tròn kí hiệu là <strong>Ø</strong>, bán kính cung tròn kí hiệu là <strong>R</strong>.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Kích thước tiêu chuẩn của khổ giấy A4 theo TCVN là bao nhiêu?",
        options: ["(Recommended) 297 × 210 mm", "420 × 297 mm", "594 × 420 mm", "841 × 594 mm"],
        ans: 0,
        expl: "Khổ giấy A4 có kích thước tiêu chuẩn là 297 × 210 mm."
      },
      {
        q: "Loại nét vẽ nào dùng để thể hiện đường bao thấy và cạnh thấy của vật thể?",
        options: ["(Recommended) Nét liền đậm", "Nét đứt mảnh", "Nét liền mảnh", "Nét gạch dài - chấm - mảnh"],
        ans: 0,
        expl: "Nét liền đậm (bề rộng khoảng 0,5 - 0,7 mm) được quy chuẩn vẽ đường bao thấy, cạnh thấy."
      },
      {
        q: "Khi bản vẽ vẽ theo tỉ lệ 1:2, nếu con số kích thước ghi trên bản vẽ là 50 thì kích thước thực tế của chi tiết là:",
        options: ["(Recommended) 50 mm", "25 mm", "100 mm", "20 mm"],
        ans: 0,
        expl: "Con số kích thước ghi trên bản vẽ luôn biểu thị kích thước thực của vật thể, không phụ thuộc vào tỉ lệ."
      },
      {
        q: "Kí hiệu chữ 'R' và dấu 'Ø' trước con số kích thước lần lượt biểu thị:",
        options: ["(Recommended) Bán kính và Đường kính", "Đường kính và Bán kính", "Chiều cao và Chiều dài", "Khối lượng và Thể tích"],
        ans: 0,
        expl: "Theo quy ước bản vẽ kĩ thuật: R là Bán kính (Radius), Ø là Đường kính (Diameter)."
      }
    ]
  },

  // BÀI 2
  {
    id: "bai-2",
    lessonNum: 2,
    chapterNum: "I",
    chapterName: "Chương I: Vẽ kĩ thuật",
    title: "Bài 2: Hình chiếu vuông góc",
    tag: "Hình chiếu 2D & 3D",
    objectives: [
      "Hiểu bản chất phương pháp chiếu vuông góc (tia chiếu vuông góc với mặt phẳng chiếu).",
      "Nhận biết 3 mặt phẳng chiếu chính: mặt đứng (P1), mặt bằng (P2), mặt cạnh (P3).",
      "Xác định đúng hướng chiếu và vị trí tương quan của 3 hình chiếu: hình chiếu đứng, hình chiếu bằng, hình chiếu cạnh.",
      "Đọc và vẽ được hình chiếu vuông góc của các khối hình học đơn giản (khối hộp, hình lăng trụ, hình trụ, hình nón, hình cầu)."
    ],
    svgIllustration: `<svg viewBox="0 0 500 130" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="110" rx="12" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#7e22ce">VỊ TRÍ 3 HÌNH CHIẾU VUÔNG GÓC TRÊN BẢN VẼ</text>
      <!-- Hướng chiếu -->
      <g transform="translate(40, 42)" text-anchor="middle" font-size="11" font-weight="bold">
        <!-- Đứng -->
        <rect x="0" y="0" width="115" height="60" rx="8" fill="#dbeafe" stroke="#3b82f6"/>
        <text x="57" y="24" fill="#1e40af">HÌNH CHIẾU ĐỨNG</text>
        <text x="57" y="44" font-size="10" fill="#2563eb">Nhìn từ trước (Dài × Cao)</text>

        <!-- Cạnh -->
        <rect x="145" y="0" width="120" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b"/>
        <text x="205" y="24" fill="#92400e">HÌNH CHIẾU CẠNH</text>
        <text x="205" y="44" font-size="10" fill="#b45309">Bên phải hình đứng</text>

        <!-- Bằng -->
        <rect x="295" y="0" width="125" height="60" rx="8" fill="#ecfdf5" stroke="#10b981"/>
        <text x="357" y="24" fill="#065f46">HÌNH CHIẾU BẰNG</text>
        <text x="357" y="44" font-size="10" fill="#047857">Ở dưới hình đứng</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-cube text-purple-600"></i>
            1. Ba mặt phẳng chiếu và hướng chiếu
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-cube"></i> Hình 2.1: Hệ thống 3 mặt phẳng chiếu vuông góc trong không gian
      </div>
      <svg viewBox="0 0 540 160" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="120,20 320,20 320,110 120,110" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        <text x="220" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">Mặt đứng P1 (Hình chiếu đứng)</text>
        <polygon points="120,110 320,110 240,155 40,155" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
        <text x="180" y="135" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">Mặt bằng P2 (Hình chiếu bằng)</text>
        <polygon points="320,20 420,50 420,140 320,110" fill="#faf5ff" stroke="#a855f7" stroke-width="2"/>
        <text x="375" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#7e22ce" transform="rotate(18, 375, 85)">Mặt cạnh P3 (HC cạnh)</text>
        
        <path d="M 60,65 L 115,65" stroke="#ef4444" stroke-width="2"/>
        <text x="80" y="55" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">Từ trước</text>
        <path d="M 220,160 L 220,120" stroke="#ef4444" stroke-width="2"/>
        <text x="220" y="160" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">Từ trên</text>
        <path d="M 455,95 L 425,95" stroke="#ef4444" stroke-width="2"/>
        <text x="465" y="98" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">Từ trái</text>
      </svg>
      <div class="text-[10px] text-gray-500 text-center mt-1">Mở MP bằng P2 xuống dưới 90°, mở MP cạnh P3 sang phải 90° để đưa về cùng một mặt phẳng bản vẽ</div>
    </div>
  
          <p>• <strong>Mặt phẳng chiếu đứng (P1):</strong> Đặt thẳng đứng chính diện. Hướng chiếu <strong>từ trước tới</strong> tạo ra <em>Hình chiếu đứng</em> (thể hiện Chiều dài và Chiều cao).</p>
          <p class="mt-1">• <strong>Mặt phẳng chiếu bằng (P2):</strong> Đặt nằm ngang dưới đáy. Hướng chiếu <strong>từ trên xuống</strong> tạo ra <em>Hình chiếu bằng</em> (thể hiện Chiều dài và Chiều rộng).</p>
          <p class="mt-1">• <strong>Mặt phẳng chiếu cạnh (P3):</strong> Đặt thẳng đứng ở bên phải. Hướng chiếu <strong>từ trái sang</strong> tạo ra <em>Hình chiếu cạnh</em> (thể hiện Chiều rộng và Chiều cao).</p>
        </div>

        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-arrows-split-up-and-left text-blue-600"></i>
            2. Vị trí tương quan giữa các hình chiếu
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-table-cells"></i> Hình 2.2: Bố cục vị trí 3 hình chiếu trên mặt phẳng bản vẽ
      </div>
      <svg viewBox="0 0 540 140" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <!-- Vị trí Hình chiếu đứng -->
        <g transform="translate(60, 15)">
          <rect width="160" height="50" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
          <text x="80" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">HÌNH CHIẾU ĐỨNG</text>
          <text x="80" y="42" text-anchor="middle" font-size="9" fill="#64748b">(Góc trên bên trái)</text>
        </g>
        <!-- Vị trí Hình chiếu bằng -->
        <g transform="translate(60, 75)">
          <rect width="160" height="50" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
          <text x="80" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">HÌNH CHIẾU BẰNG</text>
          <text x="80" y="42" text-anchor="middle" font-size="9" fill="#64748b">(Ở ngay dưới HC đứng)</text>
        </g>
        <!-- Vị trí Hình chiếu cạnh -->
        <g transform="translate(260, 15)">
          <rect width="160" height="50" rx="6" fill="#faf5ff" stroke="#a855f7" stroke-width="2"/>
          <text x="80" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#7e22ce">HÌNH CHIẾU CẠNH</text>
          <text x="80" y="42" text-anchor="middle" font-size="9" fill="#64748b">(Ở ngay bên phải HC đứng)</text>
        </g>
        <!-- Đường gióng kết nối -->
        <line x1="140" y1="65" x2="140" y2="75" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
        <line x1="220" y1="40" x2="260" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
        <text x="470" y="65" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">Gióng thẳng hàng</text>
        <text x="470" y="80" text-anchor="middle" font-size="9" fill="#64748b">Dài bằng nhau</text>
        <text x="470" y="93" text-anchor="middle" font-size="9" fill="#64748b">Cao bằng nhau</text>
      </svg>
    </div>
  
          <p>• Khi trải các mặt phẳng chiếu lên cùng một mặt phẳng bản vẽ:</p>
          <p class="pl-4 font-semibold text-blue-800 dark:text-blue-300">• <strong>Hình chiếu bằng</strong> luôn đặt ở <em>phía dưới</em> hình chiếu đứng (thẳng hàng dọc chiều dài).</p>
          <p class="pl-4 font-semibold text-amber-800 dark:text-amber-300">• <strong>Hình chiếu cạnh</strong> luôn đặt ở <em>bên phải</em> hình chiếu đứng (thẳng hàng ngang chiều cao).</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Hình chiếu bằng thu được từ hướng chiếu nào và được đặt ở vị trí nào trên bản vẽ?",
        options: ["(Recommended) Hướng chiếu từ trên xuống – Đặt ở phía dưới hình chiếu đứng", "Hướng chiếu từ trước tới – Đặt ở giữa", "Hướng chiếu từ trái sang – Đặt bên phải hình đứng", "Hướng chiếu từ phải sang – Đặt bên trái hình đứng"],
        ans: 0,
        expl: "Hình chiếu bằng nhìn từ trên xuống và theo quy ước luôn nằm ngay dưới hình chiếu đứng."
      },
      {
        q: "Hình chiếu đứng phản ánh được hai kích thước nào của vật thể?",
        options: ["(Recommended) Chiều dài và Chiều cao", "Chiều dài và Chiều rộng", "Chiều rộng và Chiều cao", "Thể tích và Khối lượng"],
        ans: 0,
        expl: "Hình chiếu đứng nhìn từ trước nên biểu thị chiều dài và chiều cao của vật thể."
      },
      {
        q: "Hình chiếu của hình cầu trên tất cả các mặt phẳng chiếu đều là hình gì?",
        options: ["(Recommended) Hình tròn có đường kính bằng đường kính hình cầu", "Hình tam giác", "Hình chữ nhật", "Hình elip"],
        ans: 0,
        expl: "Khối cầu đối xứng hoàn hảo qua tâm nên nhìn từ mọi hướng đều cho hình chiếu là hình tròn."
      },
      {
        q: "Khi vẽ hình chiếu vuông góc, đường bao khuất bên trong vật thể phải được vẽ bằng nét gì?",
        options: ["(Recommended) Nét đứt mảnh", "Nét liền đậm", "Nét gạch dài chấm mảnh", "Nét liền mảnh"],
        ans: 0,
        expl: "Quy chuẩn vẽ kĩ thuật bắt buộc các cạnh và đường bao bị che khuất phải vẽ bằng nét đứt mảnh."
      }
    ]
  },

  // BÀI 3
  {
    id: "bai-3",
    lessonNum: 3,
    chapterNum: "I",
    chapterName: "Chương I: Vẽ kĩ thuật",
    title: "Bài 3: Bản vẽ chi tiết",
    tag: "Bản vẽ chế tạo",
    objectives: [
      "Hiểu rõ công dụng của bản vẽ chi tiết trong quy trình gia công, chế tạo và kiểm tra một chi tiết đơn lẻ.",
      "Nắm vững 4 nội dung chính của bản vẽ chi tiết: Hình biểu diễn, Kích thước, Yêu cầu kĩ thuật, Khung tên.",
      "Hiểu khái niệm và công dụng của hình cắt (thể hiện cấu tạo rỗng/khuất bên trong vật thể).",
      "Đọc thành thạo bản vẽ chi tiết theo đúng trình tự chuẩn 4 bước."
    ],
    svgIllustration: `<svg viewBox="0 0 500 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="105" rx="12" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
      <text x="250" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">TRÌNH TỰ ĐỌC BẢN VẼ CHI TIẾT (4 BƯỚC CHUẨN)</text>
      <!-- 4 Bước -->
      <g transform="translate(25, 42)" text-anchor="middle" font-size="11" font-weight="bold">
        <rect x="0" y="0" width="105" height="58" rx="8" fill="#dcfce7" stroke="#16a34a"/>
        <text x="52" y="24" fill="#166534">1. KHUNG TÊN</text>
        <text x="52" y="42" font-size="9.5" fill="#15803d">Tên, VL, tỉ lệ</text>

        <rect x="115" y="0" width="105" height="58" rx="8" fill="#dcfce7" stroke="#16a34a"/>
        <text x="167" y="24" fill="#166534">2. HÌNH BIỂU DIỄN</text>
        <text x="167" y="42" font-size="9.5" fill="#15803d">Hình chiếu, cắt</text>

        <rect x="230" y="0" width="105" height="58" rx="8" fill="#dcfce7" stroke="#16a34a"/>
        <text x="282" y="24" fill="#166534">3. KÍCH THƯỚC</text>
        <text x="282" y="42" font-size="9.5" fill="#15803d">Chung &amp; chi tiết</text>

        <rect x="345" y="0" width="105" height="58" rx="8" fill="#dcfce7" stroke="#16a34a"/>
        <text x="397" y="24" fill="#166534">4. YÊU CẦU KT</text>
        <text x="397" y="42" font-size="9.5" fill="#15803d">Gia công, xử lí</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-file-lines text-emerald-600"></i>
            1. Nội dung và vai trò của bản vẽ chi tiết
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-list-check"></i> Hình 3.1: 4 Nội dung chính cấu thành Bản vẽ chi tiết
      </div>
      <svg viewBox="0 0 540 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 12)">
          <rect width="115" height="95" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <circle cx="57" cy="22" r="12" fill="#3b82f6"/>
          <text x="57" y="26" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">1</text>
          <text x="57" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">KHUNG TÊN</text>
          <text x="57" y="68" text-anchor="middle" font-size="8.5" fill="#64748b">Tên chi tiết</text>
          <text x="57" y="80" text-anchor="middle" font-size="8.5" fill="#64748b">Vật liệu, tỉ lệ</text>
        </g>
        <g transform="translate(145, 12)">
          <rect width="115" height="95" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
          <circle cx="57" cy="22" r="12" fill="#10b981"/>
          <text x="57" y="26" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">2</text>
          <text x="57" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">HÌNH BIỂU DIỄN</text>
          <text x="57" y="68" text-anchor="middle" font-size="8.5" fill="#64748b">Hình chiếu</text>
          <text x="57" y="80" text-anchor="middle" font-size="8.5" fill="#64748b">Hình cắt, mặt cắt</text>
        </g>
        <g transform="translate(275, 12)">
          <rect width="115" height="95" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="57" cy="22" r="12" fill="#f59e0b"/>
          <text x="57" y="26" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">3</text>
          <text x="57" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">KÍCH THƯỚC</text>
          <text x="57" y="68" text-anchor="middle" font-size="8.5" fill="#64748b">Kích thước chung</text>
          <text x="57" y="80" text-anchor="middle" font-size="8.5" fill="#64748b">Kích thước phần tử</text>
        </g>
        <g transform="translate(405, 12)">
          <rect width="115" height="95" rx="8" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
          <circle cx="57" cy="22" r="12" fill="#d946ef"/>
          <text x="57" y="26" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">4</text>
          <text x="57" y="52" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#86198f">YÊU CẦU KĨ THUẬT</text>
          <text x="57" y="68" text-anchor="middle" font-size="8.5" fill="#64748b">Gia công, mạ</text>
          <text x="57" y="80" text-anchor="middle" font-size="8.5" fill="#64748b">Nhiệt luyện</text>
        </g>
      </svg>
    </div>
  
          <p>• <strong>Vai trò:</strong> Dùng làm tài liệu chỉ dẫn trực tiếp cho công nhân chế tạo và nhân viên kĩ thuật kiểm tra một chi tiết máy.</p>
          <p class="mt-1">• <strong>Bản vẽ chi tiết gồm 4 nội dung:</strong></p>
          <p class="pl-4">1. <em>Khung tên:</em> Tên gọi chi tiết, vật liệu (thép, gang, nhôm...), tỉ lệ vẽ, đơn vị thiết kế.</p>
          <p class="pl-4">2. <em>Hình biểu diễn:</em> Các hình chiếu vuông góc, hình cắt để thể hiện rõ hình dạng bên ngoài và cấu tạo bên trong.</p>
          <p class="pl-4">3. <em>Kích thước:</em> Gồm kích thước chung (chiều dài, rộng, cao tổng thể) và kích thước từng phần của chi tiết.</p>
          <p class="pl-4">4. <em>Yêu cầu kĩ thuật:</em> Chỉ dẫn gia công (làm tù cạnh, vát mép), xử lí bề mặt (mạ kẽm, tôi cứng, sơn chống rỉ).</p>
        </div>

        <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800">
          <h4 class="font-bold text-teal-900 dark:text-teal-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-list-ol text-teal-600"></i>
            2. Trình tự đọc bản vẽ chi tiết
          </h4>
          <p>• Đọc đúng 4 bước theo thứ tự: <strong>Khung tên &rarr; Hình biểu diễn &rarr; Kích thước &rarr; Yêu cầu kĩ thuật</strong>.</p>
          <p class="mt-1">• <em>Hình cắt:</em> Dùng mặt phẳng tưởng tượng cắt vật thể làm đôi, bỏ phần trước, chiếu phần còn lại lên mặt phẳng chiếu. Đường gạch gạch nghiêng 45° biểu thị phần tiếp xúc trực tiếp với mặt phẳng cắt.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Bản vẽ chi tiết bao gồm mấy nội dung chính?",
        options: ["(Recommended) 4 nội dung (Khung tên, Hình biểu diễn, Kích thước, Yêu cầu kĩ thuật)", "3 nội dung", "5 nội dung", "2 nội dung"],
        ans: 0,
        expl: "Bản vẽ chi tiết gồm 4 thành phần thiết yếu: Khung tên, Hình biểu diễn, Kích thước và Yêu cầu kĩ thuật."
      },
      {
        q: "Trình tự đọc bản vẽ chi tiết đúng quy chuẩn là:",
        options: ["(Recommended) Khung tên → Hình biểu diễn → Kích thước → Yêu cầu kĩ thuật", "Hình biểu diễn → Kích thước → Khung tên → Yêu cầu kĩ thuật", "Kích thước → Khung tên → Hình biểu diễn → Yêu cầu kĩ thuật", "Yêu cầu kĩ thuật → Khung tên → Hình biểu diễn → Kích thước"],
        ans: 0,
        expl: "Đọc khung tên trước để nắm thông tin tổng quát, sau đó đến hình biểu diễn, kích thước và yêu cầu gia công."
      },
      {
        q: "Công dụng chính của Hình cắt trên bản vẽ kĩ thuật là gì?",
        options: ["(Recommended) Biểu diễn rõ ràng hình dạng, kết cấu bị che khuất bên trong vật thể", "Làm cho bản vẽ đẹp mắt hơn", "Giảm bớt kích thước cần ghi", "Thay thế cho khung tên"],
        ans: 0,
        expl: "Hình cắt giúp quan sát trực tiếp các lỗ, hốc, rãnh rỗng bên trong chi tiết mà không cần dùng quá nhiều nét đứt."
      },
      {
        q: "Mục 'Yêu cầu kĩ thuật' trên bản vẽ chi tiết thường ghi nội dung nào?",
        options: ["(Recommended) Chỉ dẫn gia công (vát mép, làm tù cạnh) và xử lí bề mặt (mạ, sơn, nhiệt luyện)", "Tên người vẽ và người kiểm tra", "Số lượng chi tiết cần mua", "Giá tiền của sản phẩm"],
        ans: 0,
        expl: "Yêu cầu kĩ thuật cung cấp thông số về độ nhám, độ cứng, xử lí bề mặt và gia công cơ khí."
      }
    ]
  },

  // BÀI 4
  {
    id: "bai-4",
    lessonNum: 4,
    chapterNum: "I",
    chapterName: "Chương I: Vẽ kĩ thuật",
    title: "Bài 4: Bản vẽ lắp",
    tag: "Bản vẽ lắp ráp",
    objectives: [
      "Hiểu rõ vai trò của bản vẽ lắp trong lắp ráp, vận hành, bảo dưỡng và sửa chữa sản phẩm gồm nhiều chi tiết.",
      "Nhận biết các thành phần của bản vẽ lắp: Hình biểu diễn, Kích thước, Bảng kê, Khung tên.",
      "Hiểu công dụng của Bảng kê: liệt kê số thứ tự, tên chi tiết, số lượng, vật liệu.",
      "Đọc bản vẽ lắp theo đúng trình tự 6 bước chuẩn khoa học."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="100" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="250" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">BẢNG KÊ TRÊN BẢN VẼ LẮP (ĐẶC TRƯNG PHÂN BIỆT VỚI BẢN VẼ CHI TIẾT)</text>
      <!-- Minh họa Bảng kê -->
      <g transform="translate(40, 42)" font-size="11" text-anchor="middle">
        <rect x="0" y="0" width="420" height="24" fill="#dbeafe" stroke="#3b82f6"/>
        <text x="30" y="16" font-weight="bold" fill="#1e40af">STT</text>
        <text x="140" y="16" font-weight="bold" fill="#1e40af">Tên gọi chi tiết</text>
        <text x="260" y="16" font-weight="bold" fill="#1e40af">Số lượng</text>
        <text x="350" y="16" font-weight="bold" fill="#1e40af">Vật liệu</text>
        
        <rect x="0" y="24" width="420" height="24" fill="#fff" stroke="#93c5fd"/>
        <text x="30" y="40" fill="#334155">1</text>
        <text x="140" y="40" fill="#334155">Quai nắm</text>
        <text x="260" y="40" fill="#334155">01</text>
        <text x="350" y="40" fill="#334155">Thép C45</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-wrench text-blue-600"></i>
            1. Nội dung và công dụng của bản vẽ lắp
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-amber-600 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-table-list"></i> Hình 4.1: Mẫu Bảng kê chi tiết trên Bản vẽ lắp ráp
      </div>
      <svg viewBox="0 0 540 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="10" width="500" height="95" fill="#fff" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="20" y="10" width="500" height="24" fill="#f1f5f9"/>
        <line x1="70" y1="10" x2="70" y2="105" stroke="#94a3b8"/>
        <line x1="270" y1="10" x2="270" y2="105" stroke="#94a3b8"/>
        <line x1="340" y1="10" x2="340" y2="105" stroke="#94a3b8"/>
        <line x1="430" y1="10" x2="430" y2="105" stroke="#94a3b8"/>

        <text x="45" y="26" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#334155">STT</text>
        <text x="170" y="26" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#334155">TÊN CHI TIẾT</text>
        <text x="305" y="26" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#334155">SL</text>
        <text x="385" y="26" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#334155">VẬT LIỆU</text>
        <text x="475" y="26" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#334155">GHI CHÚ</text>

        <line x1="20" y1="34" x2="520" y2="34" stroke="#cbd5e1"/>
        <text x="45" y="48" text-anchor="middle" font-size="9.5" fill="#475569">1</text>
        <text x="80" y="48" font-size="9.5" fill="#1e293b">Thân van</text>
        <text x="305" y="48" text-anchor="middle" font-size="9.5" fill="#475569">1</text>
        <text x="385" y="48" text-anchor="middle" font-size="9.5" fill="#475569">Gang xám</text>
        <text x="475" y="48" text-anchor="middle" font-size="9.5" fill="#64748b">Đúc</text>

        <line x1="20" y1="58" x2="520" y2="58" stroke="#cbd5e1"/>
        <text x="45" y="72" text-anchor="middle" font-size="9.5" fill="#475569">2</text>
        <text x="80" y="72" font-size="9.5" fill="#1e293b">Trục van</text>
        <text x="305" y="72" text-anchor="middle" font-size="9.5" fill="#475569">1</text>
        <text x="385" y="72" text-anchor="middle" font-size="9.5" fill="#475569">Thép C45</text>
        <text x="475" y="72" text-anchor="middle" font-size="9.5" fill="#64748b">Tiện</text>

        <line x1="20" y1="82" x2="520" y2="82" stroke="#cbd5e1"/>
        <text x="45" y="96" text-anchor="middle" font-size="9.5" fill="#475569">3</text>
        <text x="80" y="96" font-size="9.5" fill="#1e293b">Tay quay điều khiển</text>
        <text x="305" y="96" text-anchor="middle" font-size="9.5" fill="#475569">1</text>
        <text x="385" y="96" text-anchor="middle" font-size="9.5" fill="#475569">Thép</text>
        <text x="475" y="96" text-anchor="middle" font-size="9.5" fill="#64748b">Hàn</text>
      </svg>
    </div>
  
          <p>• <strong>Bản vẽ lắp:</strong> Diễn tả hình dạng, kết cấu của một sản phẩm hoàn chỉnh gồm nhiều chi tiết lắp ghép lại với nhau và vị trí tương quan giữa các chi tiết đó.</p>
          <p class="mt-1">• <strong>Bốn nội dung chính:</strong></p>
          <p class="pl-4">1. <em>Hình biểu diễn:</em> Thể hiện vị trí, quan hệ lắp ráp giữa các chi tiết.</p>
          <p class="pl-4">2. <em>Kích thước:</em> Kích thước chung toàn bộ sản phẩm, kích thước lắp ghép, kích thước khoảng cách giữa các trục.</p>
          <p class="pl-4 font-semibold text-blue-800 dark:text-blue-300">3. <em>Bảng kê (Điểm đặc trưng nhất):</em> Đặt ngay phía trên khung tên, ghi rõ STT, tên gọi chi tiết, số lượng, vật liệu.</p>
          <p class="pl-4">4. <em>Khung tên:</em> Tên sản phẩm, tỉ lệ, đơn vị thiết kế.</p>
        </div>

        <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-diagram-project text-indigo-600"></i>
            2. Trình tự đọc bản vẽ lắp
          </h4>
          <p>• Trình tự đọc chuẩn: <strong>Khung tên &rarr; Bảng kê &rarr; Hình biểu diễn &rarr; Kích thước &rarr; Phân tích chi tiết &rarr; Tổng hợp (nguyên lí hoạt động &amp; tháo lắp)</strong>.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Thành phần nào có trên Bản vẽ lắp mà KHÔNG có trên Bản vẽ chi tiết?",
        options: ["(Recommended) Bảng kê", "Khung tên", "Hình biểu diễn", "Con số kích thước"],
        ans: 0,
        expl: "Bảng kê là nội dung đặc trưng duy nhất của bản vẽ lắp dùng để liệt kê số lượng và tên chi tiết cấu thành."
      },
      {
        q: "Bảng kê trên bản vẽ lắp thường được đặt ở vị trí nào?",
        options: ["(Recommended) Ngay phía trên khung tên", "Góc trên bên trái bản vẽ", "Chính giữa bản vẽ", "Bên ngoài khung bản vẽ"],
        ans: 0,
        expl: "Theo tiêu chuẩn, bảng kê được đặt nằm liền kề ngay phía trên khung tên."
      },
      {
        q: "Mục đích quan trọng nhất của bản vẽ lắp trong sản xuất là gì?",
        options: ["(Recommended) Dùng để lắp ráp, kiểm tra và bảo dưỡng toàn bộ cụm sản phẩm", "Dùng để nấu chảy kim loại", "Dùng để chế tạo chi tiết đơn lẻ", "Dùng để tính tiền sản phẩm"],
        ans: 0,
        expl: "Bản vẽ lắp phục vụ cho việc lắp ráp các chi tiết thành cụm máy và theo dõi quy trình tháo lắp."
      },
      {
        q: "Kích thước ghi trên bản vẽ lắp chủ yếu là các kích thước nào?",
        options: ["(Recommended) Kích thước chung của sản phẩm và kích thước lắp ghép giữa các chi tiết", "Kích thước gia công từng góc vát của từng chi tiết", "Kích thước của nhà xưởng sản xuất", "Kích thước khổ giấy vẽ"],
        ans: 0,
        expl: "Bản vẽ lắp ghi kích thước bao tổng thể và kích thước quan hệ lắp ghép (dung sai, đường kính khớp nối)."
      }
    ]
  },

  // BÀI 5
  {
    id: "bai-5",
    lessonNum: 5,
    chapterNum: "I",
    chapterName: "Chương I: Vẽ kĩ thuật",
    title: "Bài 5: Bản vẽ nhà",
    tag: "Bản vẽ xây dựng",
    objectives: [
      "Hiểu khái niệm và công dụng của bản vẽ nhà trong thi công và xây dựng công trình.",
      "Nắm vững 3 hình biểu diễn cơ bản của bản vẽ nhà: Mặt bằng, Mặt đứng, Mặt cắt.",
      "Hiểu rõ Mặt bằng là hình biểu diễn quan trọng nhất (thể hiện vị trí, kích thước phòng, cửa, tường).",
      "Đọc được các kí hiệu quy ước kiến trúc (cửa đi, cửa sổ, cầu thang) và đọc bản vẽ nhà theo đúng trình tự."
    ],
    svgIllustration: `<svg viewBox="0 0 500 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="105" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">3 HÌNH BIỂU DIỄN CHÍNH TRÊN BẢN VẼ NHÀ</text>
      <!-- 3 Box -->
      <g transform="translate(30, 40)" text-anchor="middle" font-size="11" font-weight="bold">
        <rect x="0" y="0" width="135" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b"/>
        <text x="67" y="22" fill="#92400e">MẶT BẰNG (Quan trọng nhất)</text>
        <text x="67" y="42" font-size="10" font-weight="normal" fill="#78350f">Cắt ngang nhà (vị trí phòng, cửa)</text>

        <rect x="155" y="0" width="135" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b"/>
        <text x="222" y="22" fill="#92400e">MẶT ĐỨNG</text>
        <text x="222" y="42" font-size="10" font-weight="normal" fill="#78350f">Nhìn từ ngoài (hình dáng, chiều cao)</text>

        <rect x="310" y="0" width="130" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b"/>
        <text x="375" y="22" fill="#92400e">MẶT CẮT</text>
        <text x="375" y="42" font-size="10" font-weight="normal" fill="#78350f">Cắt đứng dọc (kết cấu tầng, mái)</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-house text-amber-600"></i>
            1. Các hình biểu diễn chính của bản vẽ nhà
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-house"></i> Hình 5.1: 3 Hình biểu diễn chủ yếu của Bản vẽ nhà
      </div>
      <svg viewBox="0 0 540 130" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 10)">
          <rect width="150" height="105" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="75" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">1. MẶT BẰNG</text>
          <rect x="25" y="35" width="100" height="55" fill="#fff" stroke="#93c5fd" stroke-width="1.2"/>
          <line x1="75" y1="35" x2="75" y2="90" stroke="#93c5fd"/>
          <text x="50" y="65" text-anchor="middle" font-size="8" fill="#64748b">Phòng khách</text>
          <text x="100" y="65" text-anchor="middle" font-size="8" fill="#64748b">Bếp ăn</text>
          <text x="75" y="100" text-anchor="middle" font-size="8" font-weight="bold" fill="#2563eb">Hình cắt nằm ngang quan trọng nhất</text>
        </g>
        <g transform="translate(195, 10)">
          <rect width="150" height="105" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
          <text x="75" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">2. MẶT ĐỨNG</text>
          <polygon points="25,55 75,35 125,55" fill="#fee2e2" stroke="#ef4444"/>
          <rect x="35" y="55" width="80" height="35" fill="#fff" stroke="#6ee7b7"/>
          <rect x="65" y="66" width="20" height="24" fill="#fef3c7" stroke="#f59e0b"/>
          <text x="75" y="100" text-anchor="middle" font-size="8" font-weight="bold" fill="#059669">Hình chiếu ngoài mặt tiền</text>
        </g>
        <g transform="translate(370, 10)">
          <rect width="150" height="105" rx="8" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
          <text x="75" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#7e22ce">3. MẶT CẮT</text>
          <line x1="30" y1="38" x2="120" y2="38" stroke="#a855f7" stroke-width="2"/>
          <line x1="30" y1="65" x2="120" y2="65" stroke="#a855f7" stroke-width="2"/>
          <line x1="30" y1="90" x2="120" y2="90" stroke="#a855f7" stroke-width="2"/>
          <text x="75" y="54" text-anchor="middle" font-size="8" fill="#64748b">Tầng 2 (h = 3.6m)</text>
          <text x="75" y="80" text-anchor="middle" font-size="8" fill="#64748b">Tầng 1 (h = 3.9m)</text>
          <text x="75" y="100" text-anchor="middle" font-size="8" font-weight="bold" fill="#9333ea">Cắt dọc theo chiều cao</text>
        </g>
      </svg>
    </div>
  
          <p>• <strong>Bản vẽ nhà:</strong> Là bản vẽ xây dựng trình bày hình dạng, kích thước và kết cấu không gian của ngôi nhà phục vụ thi công xây dựng.</p>
          <p class="mt-1">• <strong>Ba hình biểu diễn chính:</strong></p>
          <p class="pl-4 font-semibold text-amber-800 dark:text-amber-300">1. <em>Mặt bằng (Hình quan trọng nhất):</em> Là hình cắt bằng của ngôi nhà được tạo bởi mặt phẳng nằm ngang tưởng tượng đi qua các cửa sổ. Cho thấy bố trí các phòng, diện tích, vị trí cửa đi, cửa sổ, cầu thang và tường ngăn.</p>
          <p class="pl-4">2. <em>Mặt đứng:</em> Là hình chiếu vuông góc nhìn từ bên ngoài vào mặt tiền hoặc mặt bên ngôi nhà, cho thấy vẻ đẹp kiến trúc, cửa, ban công và chiều cao tổng thể.</p>
          <p class="pl-4">3. <em>Mặt cắt:</em> Là hình cắt đứng tạo bởi mặt phẳng cắt tưởng tượng vuông góc với mặt đất, thể hiện chiều cao các tầng, độ dày sàn bê tông, cấu tạo móng và mái nhà.</p>
        </div>

        <div class="p-3.5 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-list-check text-orange-600"></i>
            2. Trình tự đọc bản vẽ nhà
          </h4>
          <p>• Trình tự đọc chuẩn: <strong>Khung tên &rarr; Hình biểu diễn &rarr; Kích thước &rarr; Các bộ phận ngôi nhà</strong>.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Hình biểu diễn nào là quan trọng nhất trong một bản vẽ nhà?",
        options: ["(Recommended) Mặt bằng", "Mặt đứng", "Mặt cắt", "Khung tên"],
        ans: 0,
        expl: "Mặt bằng là hình biểu diễn quan trọng nhất vì nó thể hiện rõ vị trí, kích thước các phòng, lối đi và bố trí nội thất."
      },
      {
        q: "Mặt đứng của ngôi nhà là hình biểu diễn thu được bằng cách:",
        options: ["(Recommended) Chiếu vuông góc từ phía trước (hoặc bên hông) vào mặt ngoài của ngôi nhà", "Cắt ngang qua cửa sổ", "Cắt dọc từ mái xuống móng", "Chiếu từ trên trời xuống mái"],
        ans: 0,
        expl: "Mặt đứng thể hiện hình dáng kiến trúc bên ngoài của mặt tiền hoặc các mặt cạnh ngôi nhà."
      },
      {
        q: "Mặt bằng ngôi nhà thực chất là một:",
        options: ["(Recommended) Hình cắt bằng tưởng tượng đi ngang qua các cửa sổ", "Hình chiếu cạnh", "Hình chiếu đứng", "Hình phối cảnh 3D"],
        ans: 0,
        expl: "Mặt bằng là hình cắt ngang qua tường và cửa sổ để nhìn thấy toàn bộ không gian sàn bên trong."
      },
      {
        q: "Trình tự đọc bản vẽ nhà theo tiêu chuẩn là:",
        options: ["(Recommended) Khung tên → Hình biểu diễn → Kích thước → Các bộ phận", "Hình biểu diễn → Khung tên → Kích thước → Các bộ phận", "Kích thước → Hình biểu diễn → Khung tên → Các bộ phận", "Các bộ phận → Kích thước → Hình biểu diễn → Khung tên"],
        ans: 0,
        expl: "Trình tự chuẩn gồm 4 bước: Khung tên -> Hình biểu diễn -> Kích thước -> Các bộ phận."
      }
    ]
  },

  // BÀI 6
  {
    id: "bai-6",
    lessonNum: 6,
    chapterNum: "II",
    chapterName: "Chương II: Cơ khí",
    title: "Bài 6: Vật liệu cơ khí",
    tag: "Vật liệu kim loại & Phi kim",
    objectives: [
      "Phân loại được các vật liệu cơ khí thông dụng: Kim loại (kim loại đen, kim loại màu) và Phi kim (chất dẻo, cao su).",
      "Nắm vững đặc tính của kim loại đen: Gang (cứng, giòn, dễ đúc) và Thép (bền, dẻo, dễ rèn dập).",
      "Nhận biết vật liệu phi kim: Chất dẻo nhiệt, chất dẻo nhiệt rắn và tính đàn hồi giảm chấn của cao su.",
      "Hiểu 4 nhóm tính chất của vật liệu: Cơ học, vật lí, hóa học, công nghệ để chọn vật liệu phù hợp."
    ],
    svgIllustration: `<svg viewBox="0 0 500 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="105" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">SƠ ĐỒ PHÂN LOẠI VẬT LIỆU CƠ KHÍ THÔNG DỤNG</text>
      <!-- Kim loại & Phi kim -->
      <g transform="translate(30, 40)" text-anchor="middle" font-size="11" font-weight="bold">
        <rect x="0" y="0" width="205" height="60" rx="8" fill="#dbeafe" stroke="#2563eb"/>
        <text x="102" y="22" fill="#1e40af">1. VẬT LIỆU KIM LOẠI</text>
        <text x="102" y="38" font-size="10" font-weight="normal" fill="#1e3a8a">• Kim loại đen: Gang, Thép</text>
        <text x="102" y="52" font-size="10" font-weight="normal" fill="#1e3a8a">• Kim loại màu: Nhôm, Đồng...</text>

        <rect x="235" y="0" width="205" height="60" rx="8" fill="#ecfdf5" stroke="#059669"/>
        <text x="337" y="22" fill="#065f46">2. VẬT LIỆU PHI KIM</text>
        <text x="337" y="38" font-size="10" font-weight="normal" fill="#047857">• Chất dẻo: Nhiệt dẻo &amp; Nhiệt rắn</text>
        <text x="337" y="52" font-size="10" font-weight="normal" fill="#047857">• Cao su: Tự nhiên &amp; Nhân tạo</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-cubes text-blue-600"></i>
            1. Vật liệu kim loại: Kim loại đen và Kim loại màu
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-amber-600 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-sitemap"></i> Hình 6.1: Sơ đồ phân loại tổng quát Vật liệu Cơ khí
      </div>
      <svg viewBox="0 0 540 135" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="180" y="10" width="180" height="28" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="270" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#f8fafc">VẬT LIỆU CƠ KHÍ</text>

        <path d="M 220 38 L 130 60" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="40" y="60" width="180" height="65" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
        <text x="130" y="78" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">1. KIM LOẠI</text>
        <text x="50" y="95" font-size="9" fill="#334155">• Kim loại đen: Thép (C&le;2.14%), Gang</text>
        <text x="50" y="112" font-size="9" fill="#334155">• Kim loại màu: Đồng, Nhôm &amp; hợp kim</text>

        <path d="M 320 38 L 410 60" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="320" y="60" width="180" height="65" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="1.2"/>
        <text x="410" y="78" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b91c1c">2. PHI KIM LOẠI</text>
        <text x="330" y="95" font-size="9" fill="#334155">• Chất dẻo: Nhiệt dẻo &amp; Nhiệt rắn</text>
        <text x="330" y="112" font-size="9" fill="#334155">• Cao su: Đàn hồi, giảm chấn tốt</text>
      </svg>
    </div>
  
          <p>• <strong>Kim loại đen (thành phần chủ yếu là Sắt và Carbon):</strong></p>
          <p class="pl-4">• <em>Thép (tỉ lệ C &le; 2,14%):</em> Độ bền cơ học cao, độ dẻo tốt, dễ gia công áp lực (rèn, cán, dập); dùng làm khung xe, dao kéo, cốt thép xây dựng.</p>
          <p class="pl-4">• <em>Gang (tỉ lệ C &gt; 2,14%):</em> Rất cứng nhưng giòn, chịu nén tốt, tính đúc cao; dùng đúc thân máy, vỏ động cơ, nắp hố ga, chảo gang.</p>
          <p class="mt-1">• <strong>Kim loại màu (nhôm, đồng và hợp kim):</strong> Dẫn điện, dẫn nhiệt rất tốt, chống ăn mòn hóa học cao, nhẹ; dùng làm lõi dây dẫn điện (đồng), vỏ máy bay, nồi soong (nhôm).</p>
        </div>

        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-shield-cat text-emerald-600"></i>
            2. Vật liệu phi kim loại: Chất dẻo và Cao su
          </h4>
          <p>• <strong>Chất dẻo nhiệt dẻo:</strong> Nóng chảy khi đun nóng và đông cứng khi nguội, có thể tái sinh nhiều lần (nhựa PVC, PE, PP); dùng làm vỏ bút, can nhựa, chai lọ.</p>
          <p class="mt-1">• <strong>Chất dẻo nhiệt rắn:</strong> Sau khi đã đóng rắn định hình dưới nhiệt độ sẽ không bị nóng chảy lại mà bị cháy thành than (nhựa Bakelite, Epoxy); dùng làm tay cầm chảo, ổ cắm điện chịu nhiệt.</p>
          <p class="mt-1">• <strong>Cao su:</strong> Tính đàn hồi cực lớn, giảm chấn động tốt, cách điện cách nhiệt; dùng làm lốp xe, dây đai truyền động, đệm chống rung.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Căn cứ vào tỉ lệ phần trăm nguyên tố Carbon (C), kim loại đen được phân chia thành:",
        options: ["(Recommended) Thép (C ≤ 2,14%) và Gang (C > 2,14%)", "Đồng và Nhôm", "Chất dẻo và Cao su", "Kim loại màu và Kim loại đen"],
        ans: 0,
        expl: "Hợp kim Fe-C có hàm lượng C ≤ 2,14% là Thép; hàm lượng C > 2,14% là Gang."
      },
      {
        q: "Đặc tính nổi bật nhất của Gang so với Thép là:",
        options: ["(Recommended) Cứng và giòn hơn, tính đúc tốt", "Dẻo dai hơn, dễ uốn", "Dẫn điện tốt hơn đồng", "Nhẹ hơn nhôm"],
        ans: 0,
        expl: "Gang có tính đúc chảy lỏng rất tốt, độ cứng cao nhưng giòn, chịu va đập kém hơn thép."
      },
      {
        q: "Loại chất dẻo có khả năng nóng chảy khi nung nóng và có thể tái chế tạo hình lại nhiều lần gọi là:",
        options: ["(Recommended) Chất dẻo nhiệt (nhiệt dẻo)", "Chất dẻo nhiệt rắn", "Cao su tự nhiên", "Gốm sứ"],
        ans: 0,
        expl: "Chất dẻo nhiệt (như PE, PP, PVC) có thể làm mềm khi gia nhiệt để tái sinh tạo hình lại."
      },
      {
        q: "Vật liệu nào sau đây là Kim loại màu?",
        options: ["(Recommended) Đồng và Nhôm", "Gang xám", "Thép không gỉ", "Sắt nguyên chất"],
        ans: 0,
        expl: "Kim loại màu là kim loại không chứa sắt làm thành phần nền, tiêu biểu là Đồng, Nhôm, Chì, Thiếc."
      }
    ]
  },

  // BÀI 7
  {
    id: "bai-7",
    lessonNum: 7,
    chapterNum: "II",
    chapterName: "Chương II: Cơ khí",
    title: "Bài 7: Truyền và biến đổi chuyển động",
    tag: "Cơ cấu truyền động",
    objectives: [
      "Hiểu lí do tại sao cần truyền và biến đổi chuyển động trong máy móc cơ khí.",
      "Nắm vững nguyên lí và công thức tính tỉ số truyền của Bộ truyền đai: i = n1/n2 = D2/D1.",
      "Nắm vững nguyên lí và công thức tính tỉ số truyền của Bộ truyền bánh răng và xích: i = n1/n2 = z2/z1.",
      "Phân tích cơ cấu biến đổi chuyển động: Tay quay - con trượt (quay thành tịnh tiến) và Cam - cần tịnh tiến."
    ],
    svgIllustration: `<svg viewBox="0 0 500 130" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="110" rx="12" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#c2410c">CÔNG THỨC TỈ SỐ TRUYỀN ĐỘNG TRONG CƠ KHÍ</text>
      <!-- Truyền đai & Bánh răng -->
      <g transform="translate(30, 40)" text-anchor="middle" font-size="11" font-weight="bold">
        <rect x="0" y="0" width="205" height="65" rx="8" fill="#ffedd5" stroke="#f97316"/>
        <text x="102" y="22" fill="#9a3412">1. BỘ TRUYỀN ĐAI (MA SÁT)</text>
        <text x="102" y="42" font-size="13" font-family="monospace" fill="#c2410c">i = n₁ / n₂ = D₂ / D₁</text>
        <text x="102" y="58" font-size="10" font-weight="normal" fill="#7c2d12">D₁, D₂: đường kính bánh xe (mm)</text>

        <rect x="235" y="0" width="205" height="65" rx="8" fill="#fef3c7" stroke="#eab308"/>
        <text x="337" y="22" fill="#854d0e">2. BÁNH RĂNG / XÍCH (ĂN KHỚP)</text>
        <text x="337" y="42" font-size="13" font-family="monospace" fill="#a16207">i = n₁ / n₂ = z₂ / z₁</text>
        <text x="337" y="58" font-size="10" font-weight="normal" fill="#713f12">z₁, z₂: số răng bánh xe</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-arrows-rotate text-orange-600"></i>
            1. Truyền chuyển động: Bộ truyền đai, Bánh răng và Xích
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-arrows-spin"></i> Hình 7.1: Bộ truyền động đai và cơ cấu tay quay - con trượt
      </div>
      <svg viewBox="0 0 540 130" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 10)">
          <rect width="240" height="110" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="120" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">1. Truyền động đai</text>
          <circle cx="60" cy="58" r="26" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="60" y="62" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1d4ed8">D1</text>
          <circle cx="170" cy="58" r="16" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="170" y="62" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1d4ed8">D2</text>
          <path d="M 60 32 L 170 42 A 16 16 0 0 1 170 74 L 60 84 A 26 26 0 0 1 60 32" fill="none" stroke="#475569" stroke-width="2.5"/>
          <text x="120" y="100" text-anchor="middle" font-size="9" font-mono font-bold fill="#0284c7">i = n1/n2 = D2/D1</text>
        </g>
        <g transform="translate(280, 10)">
          <rect width="245" height="110" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="122" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">2. Tay quay - con trượt</text>
          <circle cx="50" cy="62" r="5" fill="#059669"/>
          <line x1="50" y1="62" x2="85" y2="40" stroke="#059669" stroke-width="3.5"/>
          <circle cx="85" cy="40" r="3.5" fill="#10b981"/>
          <line x1="85" y1="40" x2="165" y2="62" stroke="#f59e0b" stroke-width="2.5"/>
          <circle cx="165" cy="62" r="3.5" fill="#d97706"/>
          <rect x="150" y="52" width="32" height="20" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" rx="3"/>
          <path d="M 195 62 L 225 62" stroke="#dc2626" stroke-width="1.5"/>
          <text x="122" y="100" text-anchor="middle" font-size="8.5" fill="#475569">Biến quay tròn thành tịnh tiến</text>
        </g>
      </svg>
    </div>
  
          <p>• <strong>Bộ truyền đai:</strong> Truyền động nhờ lực ma sát giữa dây đai và bánh đai. Công thức tỉ số truyền:</p>
          <div class="p-2 my-1 bg-white dark:bg-gray-800 rounded text-center font-mono font-bold text-orange-700 dark:text-orange-300">
            i = n₁ / n₂ = D₂ / D₁ ⇒ n₂ = n₁ × (D₁ / D₂)
          </div>
          <p>Trong đó: n₁, n₂ là tốc độ quay (vòng/phút); D₁, D₂ là đường kính bánh dẫn và bánh bị dẫn. Đai mắc thẳng giữ nguyên chiều quay; đai mắc chéo làm đổi chiều quay.</p>
          <p class="mt-1">• <strong>Bộ truyền bánh răng và đĩa xích:</strong> Truyền động nhờ sự ăn khớp dứt khoát không trượt:</p>
          <div class="p-2 my-1 bg-white dark:bg-gray-800 rounded text-center font-mono font-bold text-amber-700 dark:text-amber-300">
            i = n₁ / n₂ = z₂ / z₁ ⇒ n₂ = n₁ × (z₁ / z₂)
          </div>
          <p>Trong đó z₁, z₂ là số răng của bánh dẫn và bánh bị dẫn. Hai bánh răng ăn khớp ngoài luôn quay ngược chiều nhau.</p>
        </div>

        <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-shuffle text-amber-600"></i>
            2. Biến đổi chuyển động
          </h4>
          <p>• <strong>Cơ cấu tay quay – con trượt:</strong> Biến chuyển động quay tròn của tay quay thành chuyển động tịnh tiến qua lại của pít-tông/con trượt (ứng dụng trong động cơ ô tô, xe máy, máy khâu, máy nén khí).</p>
          <p class="mt-1">• <strong>Cơ cấu cam – cần tịnh tiến:</strong> Đĩa cam quay điều khiển cần chuyển động nâng lên hạ xuống theo quy luật (ứng dụng trong đóng mở van xupap động cơ).</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Bộ truyền động đai có bánh dẫn đường kính D1 = 100 mm quay với tốc độ n1 = 600 vòng/phút. Bánh bị dẫn có đường kính D2 = 200 mm. Tốc độ quay n2 của bánh bị dẫn là:",
        options: ["(Recommended) 300 vòng/phút", "1200 vòng/phút", "600 vòng/phút", "150 vòng/phút"],
        ans: 0,
        expl: "Áp dụng công thức: n2 = n1 × (D1 / D2) = 600 × (100 / 200) = 300 vòng/phút."
      },
      {
        q: "Cặp bánh răng ăn khớp ngoài có số răng z1 = 20 răng, z2 = 40 răng. Chiều quay và tốc độ của bánh bị dẫn (z2) so với bánh dẫn (z1) là:",
        options: ["(Recommended) Quay ngược chiều và quay chậm hơn 2 lần", "Quay cùng chiều và nhanh hơn 2 lần", "Quay ngược chiều và nhanh hơn 2 lần", "Quay cùng chiều và chậm hơn 2 lần"],
        ans: 0,
        expl: "Hai bánh răng ăn khớp ngoài quay ngược chiều nhau; z2 gấp đôi z1 nên quay chậm hơn một nửa."
      },
      {
        q: "Cơ cấu nào dùng để biến chuyển động quay tròn thành chuyển động tịnh tiến qua lại trong động cơ xe máy?",
        options: ["(Recommended) Cơ cấu tay quay – con trượt", "Cơ cấu truyền động đai", "Bộ truyền bánh răng", "Bộ truyền xích đĩa"],
        ans: 0,
        expl: "Tay quay - con trượt (trục khuỷu - thanh truyền - pít-tông) biến đổi chuyển động tịnh tiến của pít-tông thành chuyển động quay của trục khuỷu."
      },
      {
        q: "Tại sao trong các cỗ máy móc công nghiệp, người ta cần sử dụng các bộ truyền chuyển động?",
        options: ["(Recommended) Vì động cơ thường đặt cách xa bộ phận công tác và có tốc độ quay quá lớn cần giảm tốc", "Để máy chạy kêu to hơn", "Để tốn nhiều nhiên liệu hơn", "Để máy móc nặng hơn"],
        ans: 0,
        expl: "Động cơ thường quay rất nhanh ở vị trí cố định, bộ truyền giúp truyền lực đến bộ phận công tác và giảm tốc độ cho phù hợp."
      }
    ]
  },

  // BÀI 8
  {
    id: "bai-8",
    lessonNum: 8,
    chapterNum: "II",
    chapterName: "Chương II: Cơ khí",
    title: "Bài 8: Gia công cơ khí bằng tay",
    tag: "Kĩ thuật nguội",
    objectives: [
      "Nhận biết và sử dụng đúng các dụng cụ gia công kim loại bằng tay: cưa tay, đục, dũa, búa, ê tô, mũi vạch, thước cặp.",
      "Nắm vững các thao tác kĩ thuật cơ bản: vạch dấu, cưa kim loại, đục kim loại và dũa kim loại.",
      "Hiểu rõ quy trình gia công khái quát 5 bước.",
      "Tuyệt đối tuân thủ các quy tắc an toàn lao động cơ khí (đeo kính bảo hộ, kẹp chặt phôi, không thổi phoi bằng miệng)."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="100" rx="12" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">CÁC DỤNG CỤ GIA CÔNG CƠ KHÍ BẰNG TAY (NGHỀ NGUỘI)</text>
      <!-- 4 Dụng cụ -->
      <g transform="translate(30, 40)" text-anchor="middle" font-size="11" font-weight="bold">
        <rect x="0" y="0" width="95" height="55" rx="8" fill="#f1f5f9" stroke="#94a3b8"/>
        <text x="47" y="22" fill="#1e293b">1. CƯA TAY</text>
        <text x="47" y="40" font-size="9.5" font-weight="normal" fill="#475569">Cắt bỏ lượng dư</text>

        <rect x="115" y="0" width="95" height="55" rx="8" fill="#f1f5f9" stroke="#94a3b8"/>
        <text x="162" y="22" fill="#1e293b">2. ĐỤC KIM LOẠI</text>
        <text x="162" y="40" font-size="9.5" font-weight="normal" fill="#475569">Bóc tách lớp dày</text>

        <rect x="230" y="0" width="95" height="55" rx="8" fill="#f1f5f9" stroke="#94a3b8"/>
        <text x="277" y="22" fill="#1e293b">3. DŨA</text>
        <text x="277" y="40" font-size="9.5" font-weight="normal" fill="#475569">Tạo phẳng, nhẵn</text>

        <rect x="345" y="0" width="95" height="55" rx="8" fill="#f1f5f9" stroke="#94a3b8"/>
        <text x="392" y="22" fill="#1e293b">4. THƯỚC CẶP</text>
        <text x="392" y="40" font-size="9.5" font-weight="normal" fill="#475569">Đo chính xác cao</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 class="font-bold text-slate-900 dark:text-slate-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-screwdriver-wrench text-slate-600"></i>
            1. Các thao tác gia công cơ bản
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-teal-600 dark:text-teal-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-wrench"></i> Hình 8.1: Thao tác sử dụng dụng cụ gia công cầm tay cơ bản
      </div>
      <svg viewBox="0 0 540 115" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 10)">
          <rect width="155" height="95" rx="6" fill="#fff" stroke="#cbd5e1"/>
          <text x="77" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">1. CƯA TAY</text>
          <path d="M 25 65 L 25 38 L 125 38 L 125 65" fill="none" stroke="#475569" stroke-width="2.5"/>
          <line x1="25" y1="60" x2="125" y2="60" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,1"/>
          <rect x="125" y="42" width="14" height="26" fill="#d97706" rx="2"/>
          <text x="77" y="78" text-anchor="middle" font-size="8" fill="#64748b">Lắp răng hướng về trước</text>
          <text x="77" y="89" text-anchor="middle" font-size="7.5" fill="#94a3b8">Đẩy ấn lực, kéo nhẹ tay</text>
        </g>
        <g transform="translate(190, 10)">
          <rect width="155" height="95" rx="6" fill="#fff" stroke="#cbd5e1"/>
          <text x="77" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">2. DŨA KIM LOẠI</text>
          <rect x="25" y="45" width="80" height="7" fill="#94a3b8" stroke="#475569"/>
          <rect x="105" y="42" width="30" height="13" fill="#b45309" rx="3"/>
          <text x="77" y="72" text-anchor="middle" font-size="8" fill="#64748b">Dũa dẹt, tam giác, tròn</text>
          <text x="77" y="85" text-anchor="middle" font-size="7.5" fill="#94a3b8">Tạo mặt phẳng nhẵn mịn</text>
        </g>
        <g transform="translate(365, 10)">
          <rect width="160" height="95" rx="6" fill="#fff" stroke="#cbd5e1"/>
          <text x="80" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">3. THƯỚC CẶP</text>
          <rect x="20" y="40" width="120" height="10" fill="#e2e8f0" stroke="#64748b"/>
          <path d="M 30 40 L 30 68 L 36 68 L 36 40" fill="#94a3b8"/>
          <path d="M 60 40 L 60 68 L 66 68 L 66 40" fill="#3b82f6"/>
          <text x="80" y="72" text-anchor="middle" font-size="8" fill="#64748b">Đo ngoài, đo trong, đo sâu</text>
          <text x="80" y="85" text-anchor="middle" font-size="7.5" fill="#94a3b8">Độ chính xác tới 0.1 mm</text>
        </g>
      </svg>
    </div>
  
          <p>• <strong>Cưa kim loại:</strong> Lắp lưỡi cưa hướng mũi răng về phía trước; khi đẩy cưa đi thì ấn lực cắt kim loại, khi kéo cưa về thì thả lỏng lực.</p>
          <p class="mt-1">• <strong>Đục kim loại:</strong> Dùng búa gõ dứt khoát vào đuôi đục để hớt bỏ các lớp kim loại thừa trên bề mặt phôi.</p>
          <p class="mt-1">• <strong>Dũa kim loại:</strong> Làm nhẵn bề mặt, làm phẳng và đạt kích thước theo bản vẽ (dũa dẹt, dũa tròn, dũa tam giác).</p>
          <p class="mt-1">• <strong>Đo kích thước bằng thước cặp:</strong> Dùng đo đường kính ngoài, đường kính lỗ trong và độ sâu của lỗ với độ chính xác đến 0,1 mm hoặc 0,05 mm.</p>
        </div>

        <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation text-rose-600"></i>
            2. Quy tắc an toàn lao động bắt buộc
          </h4>
          <p>• <strong>Bảo hộ:</strong> Bắt buộc đeo kính bảo hộ khi cưa, đục để tránh phoi kim loại bắn vào mắt.</p>
          <p class="mt-1">• <strong>Thao tác:</strong> Kẹp chặt phôi bằng ê tô; không dùng búa có cán bị lỏng hoặc nứt mẻ; dũa phải có cán gỗ chắc chắn.</p>
          <p class="mt-1 font-semibold text-rose-800 dark:text-rose-300">• Tuyệt đối không dùng miệng thổi mạt phoi kim loại hoặc dùng tay gạt trực tiếp (dùng chổi lông mềm quét dọn).</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Khi cưa kim loại bằng cưa tay, thao tác lực ấn của hai tay diễn ra như thế nào?",
        options: ["(Recommended) Ấn lực khi đẩy cưa đi và thả lỏng khi kéo cưa về", "Ấn lực khi kéo về và thả lỏng khi đẩy đi", "Ấn lực mạnh cả hai chiều đi và về", "Không cần ấn lực"],
        ans: 0,
        expl: "Răng cưa hướng về phía trước nên chỉ ấn lực cắt ở hành trình đẩy đi."
      },
      {
        q: "Để làm nhẵn và phẳng bề mặt kim loại sau khi cưa hoặc đục, ta dùng dụng cụ nào?",
        options: ["(Recommended) Dũa", "Cưa sắt", "Búa", "Mũi đột"],
        ans: 0,
        expl: "Dũa là dụng cụ hớt bỏ lớp mỏng kim loại để đạt độ nhẵn bóng và kích thước chính xác."
      },
      {
        q: "Hành động nào sau đây là CẤM KỊ vì vi phạm an toàn khi gia công nguội?",
        options: ["(Recommended) Dùng miệng thổi phoi kim loại hoặc dùng tay trần gạt mạt sắt", "Đeo kính bảo hộ lao động", "Kẹp chặt phôi trên ê tô", "Dùng chổi quét dọn bàn nguội"],
        ans: 0,
        expl: "Dùng miệng thổi phoi kim loại rất nguy hiểm vì phoi sắc nhọn sẽ bay thẳng vào mắt gây tổn thương giác mạc."
      },
      {
        q: "Thước cặp cơ khí có thể dùng để đo các loại kích thước nào?",
        options: ["(Recommended) Kích thước ngoài, kích thước lỗ trong và độ sâu lỗ", "Chỉ đo được chiều dài bên ngoài", "Chỉ đo được góc nghiêng", "Chỉ đo được nhiệt độ"],
        ans: 0,
        expl: "Thước cặp tích hợp mỏ đo ngoài, mỏ đo trong và thanh đo độ sâu rất linh hoạt."
      }
    ]
  },

  // BÀI 9
  {
    id: "bai-9",
    lessonNum: 9,
    chapterNum: "II",
    chapterName: "Chương II: Cơ khí",
    title: "Bài 9: Ngành nghề trong lĩnh vực cơ khí",
    tag: "Định hướng nghề nghiệp",
    objectives: [
      "Nhận biết các ngành nghề phổ biến trong lĩnh vực cơ khí: Kĩ sư cơ khí, Kĩ thuật viên cơ khí, Thợ cơ khí.",
      "Hiểu rõ đặc điểm công việc và môi trường làm việc của ngành cơ khí chế tạo máy.",
      "Xác định các phẩm chất và năng lực cần có: tư duy không gian, tính cẩn thận, chính xác, kỉ luật an toàn.",
      "Tự liên hệ sở thích, năng lực bản thân để định hướng nghề nghiệp tương lai."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="100" rx="12" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#15803d">CÁC VỊ TRÍ NGHỀ NGHIỆP TRONG LĨNH VỰC CƠ KHÍ</text>
      <!-- 3 Ngành nghề -->
      <g transform="translate(30, 40)" text-anchor="middle" font-size="11" font-weight="bold">
        <rect x="0" y="0" width="135" height="55" rx="8" fill="#dcfce7" stroke="#16a34a"/>
        <text x="67" y="22" fill="#166534">KĨ SƯ CƠ KHÍ</text>
        <text x="67" y="40" font-size="9.5" font-weight="normal" fill="#15803d">Thiết kế, nghiên cứu</text>

        <rect x="155" y="0" width="135" height="55" rx="8" fill="#dcfce7" stroke="#16a34a"/>
        <text x="222" y="22" fill="#166534">KĨ THUẬT VIÊN</text>
        <text x="222" y="40" font-size="9.5" font-weight="normal" fill="#15803d">Giám sát, vận hành</text>

        <rect x="310" y="0" width="130" height="55" rx="8" fill="#dcfce7" stroke="#16a34a"/>
        <text x="375" y="22" fill="#166534">THỢ CƠ KHÍ</text>
        <text x="375" y="40" font-size="9.5" font-weight="normal" fill="#15803d">Gia công, bảo dưỡng</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-user-gear text-emerald-600"></i>
            1. Các vị trí nghề nghiệp tiêu biểu
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-user-gear"></i> Hình 9.1: Các vị trí việc làm trọng yếu trong ngành Cơ khí chế tạo
      </div>
      <svg viewBox="0 0 540 100" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 12)">
          <rect width="115" height="75" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1d4ed8">KĨ SƯ CƠ KHÍ</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Thiết kế máy,</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">lập quy trình CN</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">ĐH/Cao đẳng</text>
        </g>
        <g transform="translate(145, 12)">
          <rect width="115" height="75" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#047857">THỢ GIA CÔNG</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Tiện, Phay, Bào,</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">vận hành máy CNC</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">Trung cấp nghề</text>
        </g>
        <g transform="translate(275, 12)">
          <rect width="115" height="75" rx="6" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#b45309">THỢ HÀN</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Hàn điện, hàn hơi,</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">kết cấu kim loại</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">Chứng chỉ nghề</text>
        </g>
        <g transform="translate(405, 12)">
          <rect width="115" height="75" rx="6" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#86198f">LẮP RÁP &amp; SỬA CHỮA</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Bảo dưỡng động cơ,</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">thiết bị tự động</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">Thợ kĩ thuật</text>
        </g>
      </svg>
    </div>
  
          <p>• <strong>Kĩ sư cơ khí:</strong> Tốt nghiệp đại học chuyên ngành; làm nhiệm vụ thiết kế máy móc, lập quy trình công nghệ chế tạo, tính toán độ bền và quản lí dự án cơ khí.</p>
          <p class="mt-1">• <strong>Kĩ thuật viên cơ khí:</strong> Tốt nghiệp cao đẳng/trung cấp; hỗ trợ kĩ sư giám sát dây chuyền, lắp đặt thiết bị, bảo trì và lập trình máy gia công CNC.</p>
          <p class="mt-1">• <strong>Thợ cơ khí (Thợ tiện, thợ phay, thợ hàn, thợ nguội):</strong> Trực tiếp vận hành máy cắt gọt kim loại, gia công, lắp ráp và sửa chữa các chi tiết máy.</p>
        </div>

        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-award text-blue-600"></i>
            2. Yêu cầu phẩm chất và năng lực
          </h4>
          <p>• Tư duy không gian tốt, đọc hiểu bản vẽ kĩ thuật thành thạo.</p>
          <p class="mt-1">• Tính cẩn thận, chính xác đến từng milimét; có sức khỏe tốt, bàn tay khéo léo.</p>
          <p class="mt-1">• Tinh thần kỉ luật lao động nghiêm ngặt và ý thức chấp hành an toàn tuyệt đối.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Người làm công việc thiết kế các bộ phận máy móc và mô phỏng trên phần mềm máy tính thường là:",
        options: ["(Recommended) Kĩ sư cơ khí", "Thợ gò hàn", "Thợ rèn thủ công", "Nhân viên bán hàng"],
        ans: 0,
        expl: "Kĩ sư cơ khí chịu trách nhiệm nghiên cứu, thiết kế và tính toán kĩ thuật cho sản phẩm."
      },
      {
        q: "Phẩm chất quan trọng hàng đầu của người làm việc trong ngành cơ khí chế tạo là gì?",
        options: ["(Recommended) Tính cẩn thận, tỉ mỉ, kiên nhẫn và tuân thủ an toàn", "Nói năng lưu loát", "Có tài năng âm nhạc", "Biết vẽ tranh nghệ thuật"],
        ans: 0,
        expl: "Cơ khí đòi hỏi độ chính xác cao đến từng phần trăm milimét nên sự cẩn thận và an toàn là tối quan trọng."
      },
      {
        q: "Vị trí thợ cơ khí tiện - phay CNC chủ yếu thực hiện nhiệm vụ gì?",
        options: ["(Recommended) Trực tiếp vận hành máy móc để cắt gọt tạo hình chi tiết máy", "Thiết kế toàn bộ nhà máy", "Viết sách hướng dẫn", "Kiểm toán tài chính"],
        ans: 0,
        expl: "Thợ tiện, phay là những người trực tiếp gia công phôi kim loại thành chi tiết hoàn chỉnh."
      },
      {
        q: "Môi trường làm việc của ngành cơ khí thường gắn liền với địa điểm nào?",
        options: ["(Recommended) Nhà máy chế tạo, xưởng gia công cơ khí, phòng nghiên cứu thiết kế", "Bệnh viện", "Sân khấu kịch", "Khu du lịch sinh thái"],
        ans: 0,
        expl: "Môi trường cơ khí chủ yếu là các phân xưởng sản xuất, nhà máy lắp ráp công nghiệp."
      }
    ]
  },

  // BÀI 10
  {
    id: "bai-10",
    lessonNum: 10,
    chapterNum: "II",
    chapterName: "Chương II: Cơ khí",
    title: "Bài 10: Dự án: Gia công chi tiết bằng dụng cụ cầm tay",
    tag: "Dự án thực hành",
    objectives: [
      "Vận dụng tổng hợp các kiến thức đã học để gia công một sản phẩm đơn giản (như chiếc móc khóa kim loại).",
      "Thực hiện thành thạo quy trình 6 bước: Đọc bản vẽ &rarr; Chuẩn bị &rarr; Vạch dấu &rarr; Cưa &rarr; Dũa &rarr; Hoàn thiện.",
      "Đánh giá sản phẩm theo các tiêu chí: đúng kích thước, độ phẳng nhẵn bề mặt, an toàn khi sử dụng.",
      "Rèn luyện tính kiên nhẫn, tác phong công nghiệp và ý thức thu dọn vệ sinh nơi làm việc."
    ],
    svgIllustration: `<svg viewBox="0 0 500 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="470" height="100" rx="12" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
      <text x="250" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#be123c">QUY TRÌNH THỰC HIỆN DỰ ÁN GIA CÔNG CHI TIẾT BẰNG TAY</text>
      <!-- 6 Bước tròn -->
      <g transform="translate(30, 42)" text-anchor="middle" font-size="10.5" font-weight="bold">
        <circle cx="25" cy="25" r="20" fill="#fecdd3"/><text x="25" y="29" fill="#9f1239">1. Vẽ</text>
        <line x1="45" y1="25" x2="65" y2="25" stroke="#f43f5e" stroke-width="2"/>
        <circle cx="95" cy="25" r="20" fill="#fecdd3"/><text x="95" y="29" fill="#9f1239">2. Phôi</text>
        <line x1="115" y1="25" x2="135" y2="25" stroke="#f43f5e" stroke-width="2"/>
        <circle cx="165" cy="25" r="20" fill="#fecdd3"/><text x="165" y="29" fill="#9f1239">3. Dấu</text>
        <line x1="185" y1="25" x2="205" y2="25" stroke="#f43f5e" stroke-width="2"/>
        <circle cx="235" cy="25" r="20" fill="#fecdd3"/><text x="235" y="29" fill="#9f1239">4. Cưa</text>
        <line x1="255" y1="25" x2="275" y2="25" stroke="#f43f5e" stroke-width="2"/>
        <circle cx="305" cy="25" r="20" fill="#fecdd3"/><text x="305" y="29" fill="#9f1239">5. Dũa</text>
        <line x1="325" y1="25" x2="345" y2="25" stroke="#f43f5e" stroke-width="2"/>
        <circle cx="375" cy="25" r="20" fill="#10b981"/><text x="375" y="29" fill="#fff">6. Xong</text>
      </g>
    </svg>`,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-list-ol text-rose-600"></i>
            1. Các bước thực hiện dự án gia công móc khóa
          </h4>

    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-list-ol"></i> Hình 10.1: Quy trình 5 bước gia công sản phẩm móc khóa kim loại
      </div>
      <svg viewBox="0 0 540 85" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 10)">
          <rect width="95" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
          <text x="47" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">Bước 1</text>
          <text x="47" y="38" text-anchor="middle" font-size="8.5" fill="#334155">Đọc bản vẽ &amp;</text>
          <text x="47" y="50" text-anchor="middle" font-size="8.5" fill="#334155">chuẩn bị phôi</text>
        </g>
        <path d="M 108 40 L 118 40" stroke="#94a3b8" stroke-width="2"/>
        <g transform="translate(120, 10)">
          <rect width="90" height="60" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
          <text x="45" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">Bước 2</text>
          <text x="45" y="38" text-anchor="middle" font-size="8.5" fill="#334155">Vạch dấu</text>
          <text x="45" y="50" text-anchor="middle" font-size="8.5" fill="#334155">lên phôi nhôm</text>
        </g>
        <path d="M 213 40 L 223 40" stroke="#94a3b8" stroke-width="2"/>
        <g transform="translate(225, 10)">
          <rect width="90" height="60" rx="6" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.2"/>
          <text x="45" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">Bước 3</text>
          <text x="45" y="38" text-anchor="middle" font-size="8.5" fill="#334155">Cưa cắt</text>
          <text x="45" y="50" text-anchor="middle" font-size="8.5" fill="#334155">theo đường dấu</text>
        </g>
        <path d="M 318 40 L 328 40" stroke="#94a3b8" stroke-width="2"/>
        <g transform="translate(330, 10)">
          <rect width="90" height="60" rx="6" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.2"/>
          <text x="45" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#86198f">Bước 4</text>
          <text x="45" y="38" text-anchor="middle" font-size="8.5" fill="#334155">Dũa các cạnh</text>
          <text x="45" y="50" text-anchor="middle" font-size="8.5" fill="#334155">&amp; khoan lỗ treo</text>
        </g>
        <path d="M 423 40 L 433 40" stroke="#94a3b8" stroke-width="2"/>
        <g transform="translate(435, 10)">
          <rect width="95" height="60" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.2"/>
          <text x="47" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a">Bước 5</text>
          <text x="47" y="38" text-anchor="middle" font-size="8.5" fill="#334155">Đánh bóng &amp;</text>
          <text x="47" y="50" text-anchor="middle" font-size="8.5" fill="#334155">kiểm tra kích thước</text>
        </g>
      </svg>
    </div>
  
          <p>• <strong>Bước 1:</strong> Đọc và phân tích bản vẽ chi tiết chiếc móc khóa (kích thước bao, các cạnh vát mép, lỗ treo chìa khóa).</p>
          <p class="mt-1">• <strong>Bước 2:</strong> Chọn phôi kim loại phù hợp (thanh nhôm hoặc phôi thép phẳng) và kiểm tra lượng dư gia công.</p>
          <p class="mt-1">• <strong>Bước 3:</strong> Vạch dấu ranh giới gia công lên mặt phôi bằng mũi vạch và thước lá.</p>
          <p class="mt-1">• <strong>Bước 4:</strong> Kẹp chặt phôi trên ê tô, cưa bỏ các phần kim loại thừa theo sát đường vạch dấu (cách vạch 0,5 - 1 mm).</p>
          <p class="mt-1">• <strong>Bước 5:</strong> Dũa phẳng các mặt, vát mép làm tù cạnh sắc nhọn để đảm bảo không đứt tay khi cầm nắm.</p>
          <p class="mt-1">• <strong>Bước 6:</strong> Đánh bóng bề mặt bằng giấy nhám và kiểm tra kích thước bằng thước cặp.</p>
        </div>

        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-square-poll-vertical text-emerald-600"></i>
            2. Tiêu chí đánh giá sản phẩm dự án
          </h4>
          <p>• <strong>Kích thước:</strong> Đúng dung sai kích thước yêu cầu ghi trên bản vẽ.</p>
          <p class="mt-1">• <strong>Bề mặt:</strong> Nhẵn phẳng, các cạnh sắc nhọn được vê tròn an toàn, không có ba via.</p>
          <p class="mt-1">• <strong>Quy trình:</strong> Thao tác đúng kĩ thuật, giữ an toàn và dọn sạch phoi kim loại sau giờ thực hành.</p>
        </div>
      </div>
    `,
    quizzes: [
      {
        q: "Trong quy trình gia công chi tiết bằng dụng cụ cầm tay, bước 'Vạch dấu' có tác dụng gì?",
        options: ["(Recommended) Xác định ranh giới phần kim loại cần hớt bỏ và vị trí các bề mặt", "Làm cho bề mặt sáng bóng", "Để cắt đứt chi tiết làm đôi", "Đo độ cứng của kim loại"],
        ans: 0,
        expl: "Vạch dấu là thao tác vẽ trực tiếp các đường ranh giới gia công lên phôi để dẫn hướng cho cưa và dũa."
      },
      {
        q: "Khi cưa cắt bỏ lượng dư theo đường vạch dấu, vị trí mạch cưa chuẩn là:",
        options: ["(Recommended) Cách đường vạch dấu khoảng 0,5 – 1 mm về phía phần kim loại thừa", "Cưa đè trực tiếp làm mất vạch dấu", "Cưa sâu vào phần chi tiết sử dụng", "Cưa cách xa 10 cm"],
        ans: 0,
        expl: "Mạch cưa phải chừa lại khoảng 0,5 - 1 mm để thao tác dũa hoàn thiện đạt đúng kích thước danh nghĩa."
      },
      {
        q: "Tại sao sau khi gia công cắt gọt, bắt buộc phải làm tù (vát mép) các cạnh của chiếc móc khóa?",
        options: ["(Recommended) Để loại bỏ ba via sắc nhọn, bảo đảm an toàn không gây xước đứt tay người dùng", "Để làm cho móc khóa nhẹ hơn", "Để tiết kiệm sơn", "Để dễ vỡ hơn"],
        ans: 0,
        expl: "Cạnh kim loại sau khi cưa dũa rất sắc, vát mép làm tù cạnh đảm bảo an toàn thẩm mĩ."
      },
      {
        q: "Sau khi hoàn thành giờ gia công nguội, rác phoi kim loại cần được xử lí như thế nào?",
        options: ["(Recommended) Dùng chổi lông quét dọn sạch sẽ và thu gom vào thùng chứa phoi quy định", "Thổi bay xuống sàn nhà", "Bỏ vào túi áo", "Để nguyên trên bàn cho bạn sau dọn"],
        ans: 0,
        expl: "Phoi kim loại sắc nhọn phải được quét dọn bằng chổi cẩn thận và gom vào thùng chuyên dụng."
      }
    ]
  }
];

module.exports = { chapters, lessonsPart1 };
