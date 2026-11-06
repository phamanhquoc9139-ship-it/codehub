// KHTN 7 - Part 2: Vật lý (Chương III: Tốc độ, Chương IV: Âm thanh, Chương V: Ánh sáng, Chương VI: Từ)
// Bài 8 đến Bài 20

module.exports = [
  // ==================== BÀI 8 ====================
  {
    id: "bai-8",
    num: "Bài 8",
    chapter: "CHƯƠNG III: TỐC ĐỘ",
    branch: "Vật lý",
    branchTag: "VẬT LÝ",
    branchColor: "bg-blue-600",
    title: "Bài 8. Tốc độ chuyển động",
    pages: "SGK tr. 45–48",
    objective: "Nêu ý nghĩa tốc độ là quãng đường đi trong một đơn vị thời gian; công thức $v = s/t$; quy đổi đơn vị giữa m/s và km/h ($1\\text{ m/s} = 3,6\\text{ km/h}$).",
    mindmap: [
      { title: "Ý NGHĨA TỐC ĐỘ", desc: "Đặc trưng cho mức độ nhanh hay chậm của chuyển động trong một đơn vị thời gian.", color: "#2563eb" },
      { title: "CÔNG THỨC V = S/T", desc: "v = s / t; suy ra s = v · t và t = s / v. Cần thống nhất đơn vị trước khi tính.", color: "#059669" },
      { title: "ĐƠN VỊ ĐO", desc: "m/s hoặc km/h. Quy đổi: 1 m/s = 3,6 km/h; 1 km/h = 1 / 3,6 m/s.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Khái niệm và công thức tính tốc độ",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            <strong>Tốc độ</strong> là đại lượng đặc trưng cho mức độ nhanh hay chậm của chuyển động, được tính bằng <strong>quãng đường đi được trong một đơn vị thời gian</strong>.
          </p>
          <div class="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-xs text-gray-700 dark:text-gray-300 mb-3">
            <div class="text-center font-bold text-sm text-blue-700 dark:text-blue-300 mb-2">
              $$v = \\frac{s}{t} \\quad \\Longleftrightarrow \\quad s = v \\cdot t \\quad \\Longleftrightarrow \\quad t = \\frac{s}{v}$$
            </div>
            <ul class="space-y-1 list-disc pl-4">
              <li>$s$: Quãng đường vật đi được (mét: $\\text{m}$ hoặc kilômét: $\\text{km}$).</li>
              <li>$t$: Thời gian vật đi hết quãng đường đó (giây: $\\text{s}$ hoặc giờ: $\\text{h}$).</li>
              <li>$v$: Tốc độ chuyển động (mét trên giây: $\\text{m/s}$ hoặc kilômét trên giờ: $\\text{km/h}$).</li>
            </ul>
          </div>
        `
      },
      {
        title: "2. Đơn vị đo và quy tắc đổi đơn vị tốc độ",
        content: `
          <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border text-xs text-gray-700 dark:text-gray-300">
            <p class="font-bold text-gray-900 dark:text-white mb-1.5">Quy tắc đổi nhanh giữa m/s và km/h:</p>
            <div class="flex items-center justify-around my-2 text-center">
              <span class="p-2 rounded bg-white dark:bg-gray-700 font-bold border">$1\\text{ m/s} = 3,6\\text{ km/h}$</span>
              <span class="text-gray-400">&harr;</span>
              <span class="p-2 rounded bg-white dark:bg-gray-700 font-bold border">$1\\text{ km/h} = \\frac{1}{3,6}\\text{ m/s}$</span>
            </div>
            <p><em>Ví dụ:</em> Xe ô tô chạy với tốc độ $54\\text{ km/h} = \\frac{54}{3,6} = 15\\text{ m/s}$.</p>
            <p>Người đi bộ với tốc độ $1,5\\text{ m/s} = 1,5 \\times 3,6 = 5,4\\text{ km/h}$.</p>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-white">
        <div class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-gauge-high"></i> Tam Giác Công Thức Tốc Độ (v, s, t)</span>
          <span class="text-[10px] text-gray-400">s = v · t</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 200 130" class="w-48 h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,15 25,115 175,115" fill="#1e293b" stroke="#3b82f6" stroke-width="2.5"/>
            <line x1="55" y1="75" x2="145" y2="75" stroke="#3b82f6" stroke-width="2"/>
            <line x1="100" y1="75" x2="100" y2="115" stroke="#3b82f6" stroke-width="2"/>
            <text x="100" y="55" fill="#38bdf8" font-size="20" font-weight="900" text-anchor="middle">s</text>
            <text x="75" y="102" fill="#34d399" font-size="16" font-weight="900" text-anchor="middle">v</text>
            <text x="125" y="102" fill="#fbbf24" font-size="16" font-weight="900" text-anchor="middle">t</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Một người đi xe máy đi được quãng đường 36 km trong thời gian 0,75 giờ (45 phút). Tốc độ của người đó là bao nhiêu?",
        options: ["27 km/h", "40 km/h", "48 km/h", "54 km/h"],
        answer: 2,
        explain: "Tốc độ v = s / t = 36 / 0,75 = 48 km/h."
      },
      {
        question: "Tốc độ 10 m/s tương đương với bao nhiêu km/h?",
        options: ["36 km/h", "28 km/h", "18 km/h", "72 km/h"],
        answer: 0,
        explain: "1 m/s = 3,6 km/h ⇒ 10 m/s = 10 × 3,6 = 36 km/h."
      }
    ],
    checklist: [
      "Nêu đúng định nghĩa tốc độ chuyển động.",
      "Vận dụng thành thạo các công thức: v = s / t, s = v · t, t = s / v.",
      "Đổi đơn vị chuẩn xác giữa m/s và km/h.",
      "So sánh chuyển động nhanh hay chậm của 2 vật dựa trên tốc độ."
    ]
  },

  // ==================== BÀI 9 ====================
  {
    id: "bai-9",
    num: "Bài 9",
    chapter: "CHƯƠNG III: TỐC ĐỘ",
    branch: "Vật lý",
    branchTag: "VẬT LÝ",
    branchColor: "bg-blue-600",
    title: "Bài 9. Đo tốc độ",
    pages: "SGK tr. 49–52",
    objective: "Nắm vững phương pháp đo tốc độ bằng thước + đồng hồ bấm giây và bằng cổng quang điện + đồng hồ hiện số; hiểu nguyên lý súng bắn tốc độ và thiết bị định vị GPS.",
    mindmap: [
      { title: "ĐO BẰNG ĐỒNG HỒ BẤM GIÂY", desc: "Đo quãng đường s bằng thước; đo thời gian t bằng đồng hồ bấm giây; lặp 3 lần lấy giá trị trung bình; tính v = s / t.", color: "#2563eb" },
      { title: "ĐO BẰNG CỔNG QUANG ĐIỆN", desc: "Xe chắn tia hồng ngoại ở cổng A rồi đến B; đồng hồ hiện số tự động ngắt và hiển thị thời gian chính xác.", color: "#059669" },
      { title: "SÚNG BẮN TỐC ĐỘ & GPS", desc: "Máy bắn tốc độ phát tia laser/radar đo thời gian di chuyển giữa 2 mốc; GPS thu tín hiệu vệ tinh tính v.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Phương pháp đo tốc độ trong phòng thực hành",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Cách 1: Thước đo và đồng hồ bấm giây:</strong>
              <br>• Dùng thước mét đo quãng đường $s$ cố định (ví dụ $0,5\\text{ m}$).
              <br>• Thả xe chuyển động và bấm đồng hồ khi xe đi qua vạch xuất phát, dừng đồng hồ khi xe qua vạch đích.
              <br>• Lặp lại phép đo 3 lần: tính $t_{\\text{tb}} = \\frac{t_1 + t_2 + t_3}{3}$.
              <br>• Tính tốc độ: $v = \\frac{s}{t_{\\text{tb}}}$.
            </li>
            <li><strong>Cách 2: Cổng quang điện và đồng hồ đo thời gian hiện số:</strong>
              <br>• Đo khoảng cách giữa 2 cổng quang điện $A$ và $B$.
              <br>• Cài đặt đồng hồ ở chế độ $A \\leftrightarrow B$. Khi xe qua cổng A, đồng hồ tự động đếm; qua cổng B đồng hồ tự dừng.
              <br>• Ưu điểm: Độ chính xác rất cao, loại bỏ sai số do phản xạ tay người bấm.
            </li>
          </ul>
        `
      },
      {
        title: "2. Thiết bị bắn tốc độ và hệ thống GPS",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 dark:text-gray-300">
            <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-700 dark:text-blue-300 block mb-1">
                <i class="fa-solid fa-camera mr-1"></i> Thiết bị bắn tốc độ CSGT
              </strong>
              Gồm một máy phát và thu sóng ánh sáng (hoặc radar) ghi lại khoảng thời gian xe đi qua hai vị trí đã biết khoảng cách, từ đó máy tính toán tốc độ tức thời và đối chiếu với giới hạn tốc độ của tuyến đường.
            </div>
            <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-700 dark:text-emerald-300 block mb-1">
                <i class="fa-solid fa-satellite mr-1"></i> Thiết bị định vị toàn cầu (GPS)
              </strong>
              Thu nhận tín hiệu từ các vệ tinh bay quanh Trái Đất để xác định tọa độ vị trí của phương tiện tại từng thời điểm, tính ra quãng đường di chuyển và tốc độ chuyển động trên điện thoại, đồng hồ thông minh.
            </div>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-white">
        <div class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-list-check"></i> Quy Trình Đo Tốc Độ Bằng Thước Đo & Đồng Hồ Bấm Giây</span>
          <span class="text-[10px] text-gray-400">SGK Tr. 49-52</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 650 90" class="w-full min-w-[550px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="130" height="50" rx="8" fill="#1e293b" stroke="#3b82f6"/>
            <text x="85" y="42" fill="#60a5fa" font-size="10.5" font-weight="bold" text-anchor="middle">1. Đo quãng đường s</text>
            <text x="85" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Dùng thước mét</text>

            <path d="M 150 45 L 180 45" stroke="#60a5fa" stroke-width="2"/>

            <rect x="180" y="20" width="140" height="50" rx="8" fill="#1e293b" stroke="#3b82f6"/>
            <text x="250" y="42" fill="#60a5fa" font-size="10.5" font-weight="bold" text-anchor="middle">2. Bấm giờ t 3 lần</text>
            <text x="250" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Lấy trung bình t_tb</text>

            <path d="M 320 45 L 350 45" stroke="#60a5fa" stroke-width="2"/>

            <rect x="350" y="20" width="130" height="50" rx="8" fill="#1e293b" stroke="#3b82f6"/>
            <text x="415" y="42" fill="#60a5fa" font-size="10.5" font-weight="bold" text-anchor="middle">3. Tính v = s / t_tb</text>
            <text x="415" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Thống nhất đơn vị</text>

            <path d="M 480 45 L 510 45" stroke="#60a5fa" stroke-width="2"/>

            <rect x="510" y="20" width="120" height="50" rx="8" fill="#1e293b" stroke="#10b981"/>
            <text x="570" y="42" fill="#34d399" font-size="10.5" font-weight="bold" text-anchor="middle">4. Đánh giá</text>
            <text x="570" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Sai số & Nhận xét</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Tại sao trong thí nghiệm đo tốc độ người ta thường đo thời gian ít nhất 3 lần rồi lấy giá trị trung bình?",
        options: [
          "Để làm mất nhiều thời gian hơn",
          "Để giảm thiểu sai số ngẫu nhiên do thao tác bấm giờ của con người",
          "Để tăng quãng đường chuyển động của xe",
          "Vì quy định bắt buộc của phòng thí nghiệm"
        ],
        answer: 1,
        explain: "Thực hiện nhiều lần và lấy giá trị trung bình giúp hạn chế sai số ngẫu nhiên trong quá trình đo đạc."
      },
      {
        question: "Thiết bị 'bắn tốc độ' của lực lượng Cảnh sát giao thông hoạt động dựa trên nguyên lý cơ bản nào?",
        options: [
          "Cân trọng lượng của xe khi đi qua",
          "Đo khoảng thời gian xe chạy qua hai vị trí xác định nhờ cảm biến hoặc sóng phản xạ",
          "Đếm số vòng quay của bánh xe ô tô",
          "Đo lượng xăng tiêu thụ của xe"
        ],
        answer: 1,
        explain: "Máy bắn tốc độ phát sóng và tính toán thời gian xe di chuyển qua khoảng cách xác định để suy ra tốc độ tức thời."
      }
    ],
    checklist: [
      "Mô tả các bước đo tốc độ bằng thước mét và đồng hồ bấm giây.",
      "Hiểu cách thức hoạt động của cổng quang điện kết nối đồng hồ hiện số.",
      "Giải thích được nguyên lý đo tốc độ của súng bắn tốc độ và GPS."
    ]
  },

  // ==================== BÀI 10 ====================
  {
    id: "bai-10",
    num: "Bài 10",
    chapter: "CHƯƠNG III: TỐC ĐỘ",
    branch: "Vật lý",
    branchTag: "VẬT LÝ",
    branchColor: "bg-blue-600",
    title: "Bài 10. Đồ thị quãng đường – thời gian",
    pages: "SGK tr. 53–55",
    objective: "Vẽ và đọc đồ thị quãng đường – thời gian ($s - t$); nhận biết đoạn thẳng nghiêng biểu thị chuyển động đều, đoạn nằm ngang biểu thị vật đứng yên; tính tốc độ từ đồ thị.",
    mindmap: [
      { title: "TRỤC ĐỒ THỊ", desc: "Trục ngang biểu thị thời gian t; trục đứng biểu thị quãng đường s. Gốc tọa độ thường là (0, 0).", color: "#2563eb" },
      { title: "ĐƯỜNG NGHIÊNG", desc: "Biểu thị vật chuyển động với tốc độ không đổi. Độ nghiêng càng dốc thì tốc độ chuyển động càng lớn.", color: "#059669" },
      { title: "ĐƯỜNG NẰM NGANG", desc: "Song song trục thời gian: Quãng đường s không đổi khi thời gian trôi qua ⇒ Vật đang ĐỨNG YÊN (nghỉ).", color: "#dc2626" }
    ],
    sections: [
      {
        title: "1. Cách vẽ và đọc đồ thị quãng đường – thời gian",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Đồ thị quãng đường – thời gian (đồ thị $s - t$) mô tả trực quan mối liên hệ giữa quãng đường đi được và thời gian chuyển động của vật:
          </p>
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Trục hoành (nằm ngang):</strong> Biểu diễn thời gian $t$, chọn tỉ xích phù hợp (giây hoặc giờ).</li>
            <li><strong>Trục tung (thẳng đứng):</strong> Biểu diễn quãng đường $s$, chọn tỉ xích phù hợp (mét hoặc km).</li>
            <li><strong>Đoạn thẳng nghiêng:</strong> Biểu diễn chuyển động đều (quãng đường tăng tỉ lệ thuận với thời gian). Độ dốc càng lớn biểu thị tốc độ càng cao.</li>
            <li><strong>Đoạn thẳng nằm ngang:</strong> Song song với trục thời gian biểu thị <strong>vật đang đứng yên</strong> (quãng đường không đổi theo thời gian).</li>
            <li><strong>Tính tốc độ từ đồ thị:</strong> $v = \\frac{\\Delta s}{\\Delta t} = \\frac{s_2 - s_1}{t_2 - t_1}$.</li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-white">
        <div class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-chart-line"></i> Đồ Thị Quãng Đường - Thời Gian (s - t) Trực Quan</span>
          <span class="text-[10px] text-gray-400">Chuyển động & Dừng nghỉ</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 350 200" class="w-72 h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Axes -->
            <line x1="40" y1="160" x2="320" y2="160" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-right)"/>
            <line x1="40" y1="160" x2="40" y2="20" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-up)"/>
            <text x="320" y="175" fill="#cbd5e1" font-size="10" font-weight="bold">t (s)</text>
            <text x="25" y="25" fill="#cbd5e1" font-size="10" font-weight="bold">s (m)</text>
            <text x="30" y="172" fill="#94a3b8" font-size="10">O</text>
            <!-- Motion curve: (40,160) -> (120,80) -> (200,80) -> (280,30) -->
            <line x1="40" y1="160" x2="120" y2="90" stroke="#34d399" stroke-width="3"/>
            <line x1="120" y1="90" x2="200" y2="90" stroke="#f43f5e" stroke-width="3"/>
            <line x1="200" y1="90" x2="280" y2="40" stroke="#38bdf8" stroke-width="3"/>
            <!-- Points & annotations -->
            <circle cx="120" cy="90" r="4" fill="#fff"/>
            <circle cx="200" cy="90" r="4" fill="#fff"/>
            <text x="75" y="115" fill="#6ee7b7" font-size="9" font-weight="bold">Đi đều v1</text>
            <text x="160" y="80" fill="#fda4af" font-size="9" font-weight="bold" text-anchor="middle">ĐỨNG YÊN</text>
            <text x="255" y="55" fill="#7dd3fc" font-size="9" font-weight="bold">Đi nhanh hơn v2</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Trên đồ thị quãng đường – thời gian, một đoạn đồ thị nằm ngang song song với trục thời gian cho biết điều gì?",
        options: [
          "Vật đang chuyển động với tốc độ không đổi rất lớn",
          "Vật đang đứng yên, không chuyển động",
          "Vật đang chuyển động quay đầu ngược lại",
          "Vật đang rơi tự do"
        ],
        answer: 1,
        explain: "Đoạn nằm ngang biểu thị thời gian t trôi qua nhưng quãng đường s không thay đổi, nghĩa là vật đang đứng yên."
      },
      {
        question: "Từ đồ thị s - t, trong 2 giờ đầu người đó đi được 40 km, sau đó nghỉ 1 giờ, 2 giờ tiếp theo đi được 60 km. Tốc độ trung bình trên cả hành trình 5 giờ là:",
        options: ["20 km/h", "25 km/h", "30 km/h", "50 km/h"],
        answer: 0,
        explain: "Tổng quãng đường s = 40 + 60 = 100 km. Tổng thời gian t = 2 + 1 + 2 = 5 h. Tốc độ trung bình v = 100 / 5 = 20 km/h."
      }
    ],
    checklist: [
      "Vẽ được đồ thị quãng đường – thời gian từ bảng số liệu cho trước.",
      "Xác định được quãng đường vật đi được tại một thời điểm t bất kì từ đồ thị.",
      "Phân biệt được trạng thái chuyển động và đứng yên trên đồ thị s - t."
    ]
  },

  // ==================== BÀI 11 ====================
  {
    id: "bai-11",
    num: "Bài 11",
    chapter: "CHƯƠNG III: TỐC ĐỘ",
    branch: "Vật lý",
    branchTag: "VẬT LÝ",
    branchColor: "bg-blue-600",
    title: "Bài 11. Ảnh hưởng của tốc độ trong an toàn giao thông",
    pages: "SGK tr. 56–59",
    objective: "Hiểu ảnh hưởng của tốc độ đến khoảng cách an toàn và hậu quả va chạm; áp dụng quy tắc 3 giây ước lượng khoảng cách an toàn ($d \\approx v \\times 3\\text{ s}$).",
    mindmap: [
      { title: "TỐC ĐỘ & AN TOÀN", desc: "Tốc độ càng cao thì quãng đường phanh dừng xe càng dài; lực va chạm càng khủng khiếp.", color: "#dc2626" },
      { title: "QUY TẮC 3 GIÂY", desc: "Khoảng cách an toàn tối thiểu: d (m) ≈ v (m/s) × 3s. Giúp người lái đủ thời gian nhận thức và phanh.", color: "#059669" },
      { title: "CÁC YẾU TỐ RỦI RO", desc: "Thời tiết mưa trơn làm giảm độ ma sát lốp; chạy quá tốc độ quy định, lấn làn, không nhường đường.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Ảnh hưởng của tốc độ và khoảng cách dừng xe",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Khoảng cách dừng xe an toàn</strong> gồm hai giai đoạn:
              <br>1. <em>Quãng đường phản ứng:</em> Quãng đường xe tiếp tục chạy từ khi người lái phát hiện chướng ngại vật đến khi đạp phanh (khoảng $0,5 - 1\\text{ s}$).
              <br>2. <em>Quãng đường phanh:</em> Quãng đường xe trượt từ khi phanh có tác dụng đến khi xe dừng hẳn.
            </li>
            <li>Khi chạy với tốc độ cao, cả quãng đường phản ứng và quãng đường phanh đều tăng vọt. Năng lượng va chạm tỉ lệ với bình phương tốc độ ($E \\sim v^2$), gây ra hậu quả thảm khốc nếu xảy ra tai nạn.</li>
            <li>Đường ướt mưa làm giảm ma sát giữa lốp xe và mặt đường, làm quãng đường phanh dài hơn gấp 1,5 đến 2 lần so với đường khô ráo.</li>
          </ul>
        `
      },
      {
        title: "2. Quy tắc 3 giây tính khoảng cách an toàn",
        content: `
          <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-xs text-gray-700 dark:text-gray-300">
            <h5 class="font-bold text-amber-900 dark:text-amber-300 text-sm mb-1">Công thức quy tắc 3 giây:</h5>
            <div class="text-center font-bold text-sm text-rose-600 dark:text-rose-400 my-1">
              $$d\\text{ (m)} \\approx v\\text{ (m/s)} \\times 3\\text{ s}$$
            </div>
            <p><strong>Cách thực hiện:</strong> Khi xe phía trước chạy qua một cột mốc ven đường (cột đèn, biển báo), người lái bắt đầu đếm thầm nhịp 3 giây: <em>"Một giây... hai giây... ba giây"</em>. Nếu xe của mình chưa vượt qua cột mốc đó thì khoảng cách đang giữ là an toàn.</p>
            <p class="mt-1"><em>Ví dụ:</em> Xe chạy trên cao tốc với tốc độ $68\\text{ km/h} \\approx 18,9\\text{ m/s}$.
              <br>Khoảng cách an toàn tối thiểu cần duy trì: $d \\approx 18,9 \\times 3 \\approx 56,7\\text{ m}$.
            </p>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-white">
        <div class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-road"></i> Quy Tắc 3 Giây Và Khoảng Cách An Toàn Trên Đường Cao Tốc</span>
          <span class="text-[10px] text-gray-400">d = v × 3s</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 650 100" class="w-full min-w-[550px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="45" width="610" height="30" fill="#334155"/>
            <line x1="20" y1="60" x2="630" y2="60" stroke="#f8fafc" stroke-width="2" stroke-dasharray="12"/>
            <!-- Car 1 -->
            <rect x="480" y="35" width="60" height="24" rx="4" fill="#38bdf8"/>
            <text x="510" y="51" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">Xe trước</text>
            <!-- Car 2 -->
            <rect x="80" y="35" width="60" height="24" rx="4" fill="#f43f5e"/>
            <text x="110" y="51" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">Xe sau</text>
            <!-- Distance arrow -->
            <line x1="145" y1="20" x2="475" y2="20" stroke="#facc15" stroke-width="2" marker-start="url(#arr-left)" marker-end="url(#arr-right)"/>
            <text x="310" y="15" fill="#fde047" font-size="10.5" font-weight="bold" text-anchor="middle">Khoảng cách an toàn d ≈ v (m/s) × 3s</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Theo quy tắc 3 giây, một ô tô đang chạy với tốc độ 90 km/h (25 m/s) trên đường cao tốc thì cần giữ khoảng cách an toàn với xe phía trước tối thiểu là bao nhiêu mét?",
        options: ["25 m", "50 m", "75 m", "100 m"],
        answer: 2,
        explain: "Khoảng cách an toàn tối thiểu d = v × 3 s = 25 × 3 = 75 m."
      },
      {
        question: "Khi trời mưa to, đường trơn trượt, người lái xe cần điều chỉnh khoảng cách an toàn như thế nào so với điều kiện đường khô ráo?",
        options: [
          "Giảm khoảng cách an toàn để đi nhanh hơn",
          "Tăng khoảng cách an toàn lên ít nhất gấp đôi và giảm tốc độ",
          "Giữ nguyên khoảng cách an toàn không cần thay đổi",
          "Tắt đèn xe để tránh lóa mắt"
        ],
        answer: 1,
        explain: "Đường mưa làm giảm độ ma sát lốp, quãng đường phanh dài hơn nên bắt buộc phải giảm tốc độ và tăng khoảng cách an toàn."
      }
    ],
    checklist: [
      "Giải thích được ảnh hưởng của tốc độ đến sự an toàn khi tham gia giao thông.",
      "Vận dụng quy tắc 3 giây tính toán khoảng cách an toàn.",
      "Chỉ ra các hành vi vi phạm tốc độ nguy hiểm và cách phòng tránh tai nạn."
    ]
  },

  // ==================== BÀI 12 ====================
  {
    id: "bai-12",
    num: "Bài 12",
    chapter: "CHƯƠNG IV: ÂM THANH",
    branch: "Vật lý",
    branchTag: "VẬT LÝ",
    branchColor: "bg-blue-600",
    title: "Bài 12. Sóng âm",
    pages: "SGK tr. 60–63",
    objective: "Nêu khái niệm dao động, nguồn âm và sóng âm; chứng minh sóng âm truyền qua được các chất rắn, lỏng, khí nhưng KHÔNG truyền được trong chân không.",
    mindmap: [
      { title: "DAO ĐỘNG & NGUỒN ÂM", desc: "Dao động: chuyển động qua lại quanh VTCB. Nguồn âm là vật phát ra âm, khi phát âm các vật đều dao động.", color: "#2563eb" },
      { title: "SÓNG ÂM", desc: "Sự lan truyền dao động của nguồn âm trong môi trường. Tai nhận sóng âm làm màng nhĩ dao động.", color: "#059669" },
      { title: "MÔI TRƯỜNG TRUYỀN ÂM", desc: "Truyền được trong RẮN, LỎNG, KHÍ (rắn truyền tốt nhất). Không truyền được trong CHÂN KHÔNG.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Dao động và nguồn âm",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Dao động:</strong> Là chuyển động qua lại quanh một vị trí cân bằng xác định (ví dụ: dây đàn rung, con lắc đung đưa, mặt trống phập phồng).</li>
            <li><strong>Nguồn âm:</strong> Là vật phát ra âm thanh. <em>Mọi vật phát ra âm thanh đều đang dao động</em>. (Chạm nhẹ tay vào thanh âm thoa đang kêu ta cảm nhận rõ độ rung).</li>
          </ul>
        `
      },
      {
        title: "2. Sự truyền sóng âm trong các môi trường",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Sóng âm</strong> là sự lan truyền dao động từ nguồn âm qua các lớp phần tử của môi trường.</li>
            <li><strong>Môi trường truyền âm:</strong>
              <br>• Âm truyền được qua chất <strong>rắn, lỏng, khí</strong>.
              <br>• Tốc độ truyền âm: $v_{\\text{rắn}} > v_{\\text{lỏng}} > v_{\\text{khí}}$. (Người xưa áp tai xuống đất nghe tiếng vó ngựa từ xa).
              <br>• Âm <strong>KHÔNG truyền được trong chân không</strong> (thí nghiệm chuông điện đặt trong bình hút hết không khí thì không nghe thấy tiếng chuông).
            </li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-white">
        <div class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-volume-high"></i> Chuỗi Lan Truyền Sóng Âm Từ Nguồn Đến Màng Nhĩ Tai Người</span>
          <span class="text-[10px] text-gray-400">Chất khí / lỏng / rắn</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 650 90" class="w-full min-w-[550px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="130" height="50" rx="8" fill="#1e293b" stroke="#3b82f6"/>
            <text x="85" y="42" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">NGUỒN ÂM</text>
            <text x="85" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Vật dao động</text>

            <path d="M 150 45 L 200 45" stroke="#60a5fa" stroke-width="2" marker-end="url(#arr-right)"/>

            <rect x="200" y="20" width="230" height="50" rx="8" fill="#1e293b" stroke="#3b82f6"/>
            <text x="315" y="42" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">MÔI TRƯỜNG VẬT CHẤT</text>
            <text x="315" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Không khí dao động nén dãn liên tiếp</text>

            <path d="M 430 45 L 480 45" stroke="#60a5fa" stroke-width="2" marker-end="url(#arr-right)"/>

            <rect x="480" y="20" width="140" height="50" rx="8" fill="#1e293b" stroke="#10b981"/>
            <text x="550" y="42" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">TAI NGƯỜI</text>
            <text x="550" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Màng nhĩ dao động</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Âm thanh KHÔNG THỂ truyền được qua môi trường nào sau đây?",
        options: ["Nước biển", "Khí quyển", "Tấm kim loại", "Môi trường chân không"],
        answer: 3,
        explain: "Sóng âm cần các phần tử vật chất để truyền dao động, do đó không thể truyền qua chân không."
      },
      {
        question: "Khi gảy một dây đàn guitar, âm thanh phát ra là do:",
        options: [
          "Không khí bên trong thùng đàn tự phát ra",
          "Dây đàn dao động làm các lớp không khí xung quanh dao động theo",
          "Ngón tay người đánh đàn phát ra",
          "Gỗ làm đàn tự co dãn"
        ],
        answer: 1,
        explain: "Dây đàn dao động là nguồn âm, làm không khí xung quanh dao động tạo thành sóng âm truyền tới tai."
      }
    ],
    checklist: [
      "Định nghĩa được dao động và nguồn âm.",
      "Nêu được môi trường truyền sóng âm và giải thích vì sao chân không không truyền được âm.",
      "So sánh được tốc độ truyền âm trong chất rắn, lỏng, khí."
    ]
  },

  // ==================== BÀI 13 ====================
  {
    id: "bai-13",
    num: "Bài 13",
    chapter: "CHƯƠNG IV: ÂM THANH",
    branch: "Vật lý",
    branchTag: "VẬT LÝ",
    branchColor: "bg-blue-600",
    title: "Bài 13. Độ to và độ cao của âm",
    pages: "SGK tr. 64–67",
    objective: "Phân biệt độ to (phụ thuộc biên độ dao động) và độ cao (phụ thuộc tần số dao động $f = N/t$, đơn vị Hz); nhận biết hạ âm ($< 20\\text{ Hz}$) và siêu âm ($> 20\\text{ }000\\text{ Hz}$).",
    mindmap: [
      { title: "ĐỘ TO CỦA ÂM", desc: "Phụ thuộc vào BIÊN ĐỘ DAO ĐỘNG. Biên độ càng lớn âm nghe càng TO.", color: "#2563eb" },
      { title: "ĐỘ CAO CỦA ÂM", desc: "Phụ thuộc vào TẦN SỐ DAO ĐỘNG (f = N / t, đơn vị Hz). Tần số càng lớn âm càng CAO (bổng).", color: "#059669" },
      { title: "TAI NGƯỜI NGHE ĐƯỢC", desc: "Từ 20 Hz đến 20 000 Hz. Dưới 20 Hz là HẠ ÂM, trên 20 000 Hz là SIÊU ÂM.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Biên độ dao động và độ to của âm",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            <strong>Biên độ dao động:</strong> Là độ lệch lớn nhất của vật dao động so với vị trí cân bằng.
          </p>
          <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-xs text-gray-700 dark:text-gray-300 mb-3">
            <strong>Mối quan hệ:</strong> Nguồn âm dao động với <em>biên độ càng lớn</em> $\\Rightarrow$ Âm phát ra nghe <em>càng to</em>.
            <br>• Gõ trống mạnh $\\rightarrow$ mặt trống dao động với biên độ lớn $\\rightarrow$ tiếng trống to.
            <br>• Gõ trống nhẹ $\\rightarrow$ mặt trống dao động với biên độ nhỏ $\\rightarrow$ tiếng trống nhỏ.
          </div>
        `
      },
      {
        title: "2. Tần số dao động và độ cao của âm",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            <strong>Tần số ($f$):</strong> Là số dao động mà vật thực hiện được trong <strong>1 giây</strong>. Đơn vị đo là <strong>Hertz (Hz)</strong>.
          </p>
          <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-xs text-gray-700 dark:text-gray-300">
            <div class="text-center font-bold text-sm text-emerald-700 dark:text-emerald-300 mb-1.5">
              $$f = \\frac{N}{t} \\quad \\Longleftrightarrow \\quad N = f \\cdot t$$
            </div>
            <ul class="space-y-1 list-disc pl-4">
              <li>$N$: Tổng số dao động vật thực hiện được.</li>
              <li>$t$: Thời gian thực hiện các dao động đó (tính bằng giây).</li>
              <li><strong>Mối quan hệ:</strong> Nguồn âm dao động <em>càng nhanh (tần số càng lớn)</em> $\\Rightarrow$ Âm phát ra <em>càng cao (bổng)</em>; dao động <em>chậm (tần số nhỏ)</em> $\\Rightarrow$ Âm <em>trầm (thấp)</em>.</li>
              <li><strong>Ngưỡng nghe tai người:</strong> $20\\text{ Hz} - 20\\text{ }000\\text{ Hz}$.
                <br>• Âm có tần số $< 20\\text{ Hz}$ gọi là <strong>hạ âm</strong> (voi, cá voi giao tiếp).
                <br>• Âm có tần số $> 20\\text{ }000\\text{ Hz}$ gọi là <strong>siêu âm</strong> (dơi định vị, máy siêu âm y tế).
              </li>
            </ul>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-white">
        <div class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-wave-square"></i> Đồ Thị Sóng Âm: Biên Độ (Độ To) & Tần Số (Độ Cao)</span>
          <span class="text-[10px] text-gray-400">Biên độ vs Tần số</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-around">
          <svg viewBox="0 0 500 120" class="w-full min-w-[450px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Low pitch, large amplitude -->
            <g transform="translate(20, 10)">
              <line x1="0" y1="50" x2="200" y2="50" stroke="#475569" stroke-width="1.5"/>
              <path d="M 0 50 Q 50 10 100 50 T 200 50" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
              <line x1="50" y1="50" x2="50" y2="10" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="2"/>
              <text x="55" y="35" fill="#f43f5e" font-size="9" font-weight="bold">Biên độ lớn (To)</text>
              <text x="100" y="85" fill="#bae6fd" font-size="10" font-weight="bold" text-anchor="middle">ÂM TRẦM (Tần số thấp)</text>
            </g>
            <!-- High pitch, small amplitude -->
            <g transform="translate(280, 10)">
              <line x1="0" y1="50" x2="200" y2="50" stroke="#475569" stroke-width="1.5"/>
              <path d="M 0 50 Q 25 30 50 50 T 100 50 T 150 50 T 200 50" fill="none" stroke="#34d399" stroke-width="2.5"/>
              <text x="100" y="85" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">ÂM BỔNG (Tần số cao)</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Cánh của một con ong mật vỗ được 3300 lần trong thời gian 10 giây. Tần số dao động của cánh ong là bao nhiêu?",
        options: ["33 Hz", "330 Hz", "3300 Hz", "33 000 Hz"],
        answer: 1,
        explain: "Tần số f = N / t = 3300 / 10 = 330 Hz."
      },
      {
        question: "Đặc tính nào của âm thanh phụ thuộc trực tiếp vào biên độ dao động của nguồn âm?",
        options: ["Độ cao của âm", "Độ to của âm", "Vận tốc truyền âm", "Tần số của âm"],
        answer: 1,
        explain: "Độ to của âm phụ thuộc vào biên độ dao động của nguồn âm. Âm càng to khi biên độ dao động càng lớn."
      }
    ],
    checklist: [
      "Phân biệt được biên độ dao động và tần số dao động.",
      "Vận dụng công thức f = N / t tính tần số âm.",
      "Nêu được giới hạn nghe của tai người, khái niệm hạ âm và siêu âm."
    ]
  },

  // ==================== BÀI 14 ====================
  {
    id: "bai-14",
    num: "Bài 14",
    chapter: "CHƯƠNG IV: ÂM THANH",
    branch: "Vật lý",
    branchTag: "VẬT LÝ",
    branchColor: "bg-blue-600",
    title: "Bài 14. Phản xạ âm và chống ô nhiễm tiếng ồn",
    pages: "SGK tr. 68–71",
    objective: "Nêu hiện tượng phản xạ âm và tiếng vang (khi âm phản xạ đến sau âm trực tiếp > 1/15 s); phân biệt vật phản xạ âm tốt và kém; đề xuất 3 biện pháp chống ô nhiễm tiếng ồn.",
    mindmap: [
      { title: "PHẢN XẠ ÂM & TIẾNG VANG", desc: "Âm dội lại khi gặp mặt chắn. Nghe được tiếng vang khi âm phản xạ đến tai trễ hơn âm trực tiếp > 1/15 giây.", color: "#2563eb" },
      { title: "VẬT LIỆU PHẢN XẠ ÂM", desc: "Cứng, nhẵn bóng: Phản xạ âm tốt (tường bê tông, kính, đá). Mềm, xốp, gồ ghề: Hấp thụ âm tốt, tiêu âm (mút xốp, rèm nhung).", color: "#059669" },
      { title: "CHỐNG Ô NHIỄM TIẾNG ỒN", desc: "3 Hướng: 1. Giảm tại nguồn; 2. Ngăn chặn trên đường truyền (trồng cây xanh, tường cách âm); 3. Bảo vệ tai (bịt tai).", color: "#dc2626" }
    ],
    sections: [
      {
        title: "1. Sự phản xạ âm và tiếng vang",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Sự phản xạ âm:</strong> Khi sóng âm gặp mặt chắn bị dội ngược trở lại.</li>
            <li><strong>Tiếng vang:</strong> Là âm phản xạ nghe được cách âm trực tiếp một khoảng thời gian <strong>ít nhất là $\\frac{1}{15}\\text{ giây}$</strong>.
              <br>• Ở phòng rộng không có đồ đạc, nói to nghe thấy tiếng vang do âm dội từ tường về trễ hơn $1/15\\text{ s}$.
              <br>• Ở phòng hẹp, âm phản xạ về gần như trùng với âm trực tiếp giúp ta nghe âm to hơn nhưng không có tiếng vang.
            </li>
            <li><strong>Vật liệu phản xạ âm tốt:</strong> Bề mặt cứng, phẳng, nhẵn bóng (tường gạch, kim loại, gương kính).</li>
            <li><strong>Vật liệu hấp thụ âm (tiêu âm):</strong> Bề mặt mềm, xốp, sần sùi (tấm mút xốp tổ ong, rèm nhung, đệm mút cao su).</li>
            <li><em>Ứng dụng:</em> Tàu thuyền phát xung siêu âm xuống đáy biển, đo thời gian khứ hồi để tính độ sâu của biển: $h = \\frac{v \\cdot t}{2}$.</li>
          </ul>
        `
      },
      {
        title: "2. Chống ô nhiễm tiếng ồn",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            <strong>Ô nhiễm tiếng ồn</strong> xảy ra khi tiếng ồn to, kéo dài ảnh hưởng tiêu cực đến sức khỏe, giấc ngủ và sinh hoạt của con người.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-center mb-3">
            <div class="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-700 dark:text-blue-300 block mb-1">1. Giảm tại nguồn</strong>
              <p class="text-gray-600 dark:text-gray-400">Lắp ống giảm thanh xe máy, cấm bóp còi xe gần bệnh viện/trường học.</p>
            </div>
            <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-700 dark:text-emerald-300 block mb-1">2. Chặn đường truyền</strong>
              <p class="text-gray-600 dark:text-gray-400">Trồng nhiều cây xanh tán rộng lá dày để tán xạ âm; lắp cửa kính cách âm, tường xốp.</p>
            </div>
            <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <strong class="text-amber-700 dark:text-amber-300 block mb-1">3. Bảo vệ tai</strong>
              <p class="text-gray-600 dark:text-gray-400">Đeo chụp tai chống ồn, nút bịt tai khi làm việc trong xưởng máy, công trường.</p>
            </div>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-white">
        <div class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-water"></i> Ứng Dụng Sóng Siêu Âm Đo Độ Sâu Của Đáy Biển</span>
          <span class="text-[10px] text-gray-400">h = (v · t) / 2</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 400 130" class="w-72 h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <line x1="20" y1="30" x2="380" y2="30" stroke="#0284c7" stroke-width="2"/>
            <!-- Ship -->
            <polygon points="170,18 230,18 220,32 180,32" fill="#e2e8f0"/>
            <!-- Sea floor -->
            <path d="M 20 120 Q 100 105 200 120 T 380 115" stroke="#92400e" stroke-width="4" fill="none"/>
            <text x="200" y="128" fill="#d97706" font-size="8.5" text-anchor="middle">Đáy biển</text>
            <!-- Sound ray down & up -->
            <line x1="195" y1="32" x2="195" y2="115" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3" marker-end="url(#arr-down)"/>
            <line x1="205" y1="115" x2="205" y2="32" stroke="#34d399" stroke-width="2" stroke-dasharray="3" marker-end="url(#arr-up)"/>
            <text x="235" y="70" fill="#facc15" font-size="10" font-weight="bold">h = (v · t) / 2</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Để nghe được tiếng vang thì âm phản xạ phải đến tai sau âm trực tiếp một khoảng thời gian tối thiểu là bao nhiêu?",
        options: ["1/5 giây", "1/10 giây", "1/15 giây", "1/60 giây"],
        answer: 2,
        explain: "Quy ước sinh lí tai người cần độ trễ tối thiểu 1/15 giây để phân biệt được âm phản xạ thành tiếng vang riêng biệt."
      },
      {
        question: "Biện pháp nào sau đây giúp ngăn chặn sự lan truyền tiếng ồn trên đường truyền?",
        options: [
          "Lắp ống giảm thanh vào pô xe máy",
          "Trồng nhiều cây xanh xung quanh nhà và lắp rèm cửa dày",
          "Dùng nút bịt tai khi ngủ",
          "Cấm bóp còi xe vào ban đêm"
        ],
        answer: 1,
        explain: "Trồng cây xanh và lắp rèm dày giúp hấp thụ và tán xạ sóng âm trên đường truyền, giảm lượng âm đến tai."
      }
    ],
    checklist: [
      "Hiểu điều kiện để có tiếng vang (độ trễ > 1/15 s).",
      "Kể tên vật liệu phản xạ âm tốt và vật liệu tiêu âm.",
      "Đề xuất được 3 hướng biện pháp giảm ô nhiễm tiếng ồn trong đời sống."
    ]
  },

  // ==================== BÀI 15 ====================
  {
    id: "bai-15",
    num: "Bài 15",
    chapter: "CHƯƠNG V: ÁNH SÁNG",
    branch: "Vật lý",
    branchTag: "VẬT LÝ",
    branchColor: "bg-blue-600",
    title: "Bài 15. Năng lượng ánh sáng, tia sáng, vùng tối",
    pages: "SGK tr. 72–77",
    objective: "Nhận biết ánh sáng là một dạng năng lượng; biểu diễn chùm sáng và tia sáng bằng đường thẳng có mũi tên; giải thích hiện tượng tạo bóng tối, bóng nửa tối và nhật thực.",
    mindmap: [
      { title: "NĂNG LƯỢNG ÁNH SÁNG", desc: "Quang năng chuyển thành điện năng (pin quang điện), nhiệt năng (bình nước nóng). Cần cho sự sống.", color: "#2563eb" },
      { title: "TIA SÁNG & CHÙM SÁNG", desc: "Tia sáng: Đường thẳng có mũi tên chỉ chiều truyền. Chùm sáng gồm nhiều tia: Song song, hội tụ, phân kì.", color: "#059669" },
      { title: "VÙNG TỐI & NHẬT THỰC", desc: "Vật cản tạo bóng tối và bóng nửa tối. Nhật thực xảy ra khi Mặt Trăng nằm giữa Mặt Trời và Trái Đất.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Ánh sáng và năng lượng ánh sáng",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li>Ánh sáng là một dạng <strong>năng lượng (quang năng)</strong>.</li>
            <li>Ánh sáng mặt trời chuyển hóa thành điện năng qua tấm <em>pin mặt trời</em>; chuyển thành nhiệt năng qua bình nước nóng năng lượng mặt trời.</li>
            <li>Ánh sáng là nguồn sống của Trái Đất, cung cấp năng lượng cho thực vật quang hợp nuôi sống toàn bộ sinh giới.</li>
          </ul>
        `
      },
      {
        title: "2. Tia sáng, chùm sáng và vùng tối (Nhật thực)",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Tia sáng:</strong> Là đường thẳng có mũi tên chỉ chiều truyền của ánh sáng.</li>
            <li><strong>Ba loại chùm sáng:</strong> Chùm sáng song song, chùm sáng hội tụ và chùm sáng phân kì.</li>
            <li><strong>Vùng tối và vùng nửa tối:</strong>
              <br>• Phía sau vật cản sáng có vùng không nhận được ánh sáng từ nguồn gọi là <strong>vùng tối hoàn toàn</strong> (bóng tối).
              <br>• Vùng chỉ nhận được một phần ánh sáng gọi là <strong>vùng nửa tối</strong>.
            </li>
            <li><strong>Hiện tượng Nhật thực:</strong> Khi Mặt Trăng nằm giữa Mặt Trời và Trái Đất chắn ánh sáng Mặt Trời. Người đứng ở vùng bóng tối thấy nhật thực toàn phần; ở vùng bóng nửa tối thấy nhật thực một phần.</li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-white">
        <div class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-moon"></i> Hiện Tượng Nhật Thực: Mặt Trăng Chắn Ánh Sáng Mặt Trời Chiếu Xuống Trái Đất</span>
          <span class="text-[10px] text-gray-400">Bóng tối & Bóng nửa tối</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 500 120" class="w-full min-w-[450px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Sun -->
            <circle cx="50" cy="60" r="35" fill="#f59e0b"/>
            <text x="50" y="65" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">Mặt Trời</text>
            <!-- Moon -->
            <circle cx="250" cy="60" r="14" fill="#64748b"/>
            <text x="250" y="40" fill="#cbd5e1" font-size="9" text-anchor="middle">Mặt Trăng</text>
            <!-- Earth -->
            <circle cx="430" cy="60" r="28" fill="#0284c7"/>
            <text x="430" y="65" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">Trái Đất</text>
            <!-- Shadow cone -->
            <polygon points="250,46 430,55 430,65 250,74" fill="#000" fill-opacity="0.6"/>
            <polygon points="50,25 250,46 430,40 50,95 250,74 430,80" fill="#fde047" fill-opacity="0.1"/>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Hiện tượng Nhật thực xảy ra khi vị trí tương đối giữa Mặt Trời, Mặt Trăng và Trái Đất như thế nào?",
        options: [
          "Trái Đất nằm giữa Mặt Trời và Mặt Trăng",
          "Mặt Trăng nằm giữa Mặt Trời và Trái Đất",
          "Mặt Trời nằm giữa Trái Đất và Mặt Trăng",
          "Mặt Trăng đi vào vùng tối của Trái Đất"
        ],
        answer: 1,
        explain: "Nhật thực xảy ra khi Mặt Trăng nằm giữa Mặt Trời và Trái Đất, đổ bóng tối lên bề mặt Trái Đất."
      },
      {
        question: "Quy ước biểu diễn một tia sáng trong quang học là:",
        options: [
          "Một đường cong uốn lượn có mũi tên",
          "Một đường thẳng có mũi tên chỉ chiều truyền của ánh sáng",
          "Một hình chữ nhật hẹp",
          "Một vòng tròn đồng tâm"
        ],
        answer: 1,
        explain: "Tia sáng được quy ước vẽ bằng một đường thẳng có mũi tên chỉ chiều truyền của ánh sáng."
      }
    ],
    checklist: [
      "Nhận biết được ánh sáng là một dạng năng lượng.",
      "Vẽ được tia sáng và phân biệt 3 loại chùm sáng (song song, hội tụ, phân kì).",
      "Giải thích được sự hình thành bóng tối, bóng nửa tối và hiện tượng nhật thực."
    ]
  },

  // ==================== BÀI 16 ====================
  {
    id: "bai-16",
    num: "Bài 16",
    chapter: "CHƯƠNG V: ÁNH SÁNG",
    branch: "Vật lý",
    branchTag: "VẬT LÝ",
    branchColor: "bg-blue-600",
    title: "Bài 16. Sự phản xạ ánh sáng",
    pages: "SGK tr. 78–81",
    objective: "Nắm vững định luật phản xạ ánh sáng ($i' = i$); phân biệt phản xạ gương (bề mặt nhẵn bóng) và phản xạ khuếch tán (bề mặt gồ ghề); vẽ hình phản xạ ánh sáng chuẩn.",
    mindmap: [
      { title: "ĐỊNH LUẬT PHẢN XẠ", desc: "1. Tia phản xạ nằm trong mặt phẳng tới; 2. Góc phản xạ bằng góc tới: i' = i.", color: "#2563eb" },
      { title: "CÁC YẾU TỐ QUANG HỌC", desc: "Tia tới SI, điểm tới I, pháp tuyến IN vuông góc mặt gương, tia phản xạ IR, góc tới i, góc phản xạ i'.", color: "#059669" },
      { title: "PHÂN LOẠI PHẢN XẠ", desc: "Phản xạ gương (mặt phẳng bóng, tạo ảnh rõ nét) vs Phản xạ khuếch tán (mặt gồ ghề, tia tán xạ nhiều hướng).", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Định luật phản xạ ánh sáng",
        content: `
          <div class="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-xs text-gray-700 dark:text-gray-300 mb-3">
            <h5 class="font-bold text-blue-900 dark:text-blue-300 text-sm mb-2">Nội dung định luật:</h5>
            <ol class="space-y-1.5 list-decimal pl-4">
              <li>Tia phản xạ ($IR$) nằm trong <strong>mặt phẳng tới</strong> (mặt phẳng tạo bởi tia tới $SI$ và pháp tuyến $IN$ của gương tại điểm tới $I$).</li>
              <li><strong>Góc phản xạ bằng góc tới:</strong>
                <div class="text-center font-bold text-base text-rose-600 dark:text-rose-400 my-1">$$i' = i$$</div>
              </li>
            </ol>
            <p class="text-gray-600 dark:text-gray-400 mt-2">
              *Lưu ý:* Góc tới $i$ là góc hợp bởi tia tới $SI$ và <em>pháp tuyến $IN$</em> (không phải góc hợp bởi tia tới với mặt gương).
            </p>
          </div>
        `
      },
      {
        title: "2. Phản xạ gương và Phản xạ khuếch tán",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 dark:text-gray-300">
            <div class="p-3 rounded-lg bg-white dark:bg-gray-800 border">
              <strong class="text-blue-600 dark:text-blue-400 block mb-1">Phản xạ gương:</strong>
              Xảy ra trên bề mặt nhẵn bóng (mặt gương phẳng, mặt nước phẳng lặng). Chùm tia tới song song phản xạ lại thành chùm tia phản xạ song song, cho hình ảnh soi rõ nét.
            </div>
            <div class="p-3 rounded-lg bg-white dark:bg-gray-800 border">
              <strong class="text-amber-600 dark:text-amber-400 block mb-1">Phản xạ khuếch tán:</strong>
              Xảy ra trên bề mặt gồ ghề thô ráp (tờ giấy, mặt tường gai). Chùm tia tới song song bị hắt ra theo nhiều phương khác nhau, không tạo được ảnh rõ nét.
            </div>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-white">
        <div class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-arrows-split-up-and-left"></i> Sơ Đồ Định Luật Phản Xạ Ánh Sáng: Góc Phản Xạ Bằng Góc Tới (i' = i)</span>
          <span class="text-[10px] text-gray-400">i' = i</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 350 180" class="w-72 h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Mirror -->
            <line x1="30" y1="140" x2="320" y2="140" stroke="#94a3b8" stroke-width="4"/>
            <line x1="40" y1="140" x2="30" y2="152" stroke="#64748b" stroke-width="1.5"/>
            <line x1="80" y1="140" x2="70" y2="152" stroke="#64748b" stroke-width="1.5"/>
            <line x1="120" y1="140" x2="110" y2="152" stroke="#64748b" stroke-width="1.5"/>
            <line x1="160" y1="140" x2="150" y2="152" stroke="#64748b" stroke-width="1.5"/>
            <line x1="200" y1="140" x2="190" y2="152" stroke="#64748b" stroke-width="1.5"/>
            <line x1="240" y1="140" x2="230" y2="152" stroke="#64748b" stroke-width="1.5"/>
            <line x1="280" y1="140" x2="270" y2="152" stroke="#64748b" stroke-width="1.5"/>
            <text x="310" y="160" fill="#94a3b8" font-size="9">Gương phẳng</text>
            <!-- Normal line IN -->
            <line x1="175" y1="140" x2="175" y2="20" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4"/>
            <text x="175" y="15" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">N</text>
            <!-- Point of incidence I -->
            <circle cx="175" cy="140" r="3" fill="#fff"/>
            <text x="175" y="155" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">I</text>
            <!-- Incident ray SI -->
            <line x1="75" y1="40" x2="175" y2="140" stroke="#facc15" stroke-width="2.5" marker-end="url(#arr-yellow)"/>
            <text x="65" y="35" fill="#facc15" font-size="11" font-weight="bold">S</text>
            <!-- Reflected ray IR -->
            <line x1="175" y1="140" x2="275" y2="40" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arr-blue)"/>
            <text x="280" y="35" fill="#38bdf8" font-size="11" font-weight="bold">R</text>
            <!-- Angles i and i' -->
            <path d="M 175 110 A 30 30 0 0 0 155 120" fill="none" stroke="#facc15" stroke-width="1.5"/>
            <text x="155" y="105" fill="#facc15" font-size="10" font-weight="bold">i</text>
            <path d="M 175 110 A 30 30 0 0 1 195 120" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="195" y="105" fill="#38bdf8" font-size="10" font-weight="bold">i'</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Chiếu một tia sáng tới bề mặt gương phẳng với góc tới i = 40°. Góc phản xạ i' có giá trị bằng bao nhiêu?",
        options: ["20°", "40°", "50°", "80°"],
        answer: 1,
        explain: "Theo định luật phản xạ ánh sáng, góc phản xạ luôn bằng góc tới: i' = i = 40°."
      },
      {
        question: "Tia sáng tới hợp với mặt gương phẳng một góc 30°. Hỏi góc tới i bằng bao nhiêu độ?",
        options: ["30°", "60°", "90°", "120°"],
        answer: 1,
        explain: "Pháp tuyến vuông góc với mặt gương (90°). Góc tới i = 90° - 30° = 60°."
      }
    ],
    checklist: [
      "Phát biểu chính xác 2 nội dung của định luật phản xạ ánh sáng.",
      "Vẽ được hình biểu diễn tia tới, pháp tuyến, tia phản xạ và xác định đúng góc i, i'.",
      "Phân biệt được phản xạ gương và phản xạ khuếch tán."
    ]
  },

  // ==================== BÀI 17 ====================
  {
    id: "bai-17",
    num: "Bài 17",
    chapter: "CHƯƠNG V: ÁNH SÁNG",
    branch: "Vật lý",
    branchTag: "VẬT LÝ",
    branchColor: "bg-blue-600",
    title: "Bài 17. Ảnh của vật qua gương phẳng",
    pages: "SGK tr. 82–85",
    objective: "Nêu tính chất ảnh tạo bởi gương phẳng (ảnh ảo, bằng vật, đối xứng qua gương); phương pháp dựng ảnh điểm và vật sáng; giải thích chữ viết ngược trên xe cứu thương.",
    mindmap: [
      { title: "TÍNH CHẤT ẢNH", desc: "Ảnh ảo (không hứng được trên màn chắn); Độ lớn ảnh bằng vật; Khoảng cách từ ảnh tới gương bằng khoảng cách từ vật tới gương.", color: "#2563eb" },
      { title: "TÍNH ĐỐI XỨNG", desc: "Vật và ảnh đối xứng nhau qua mặt phẳng gương. Chữ hiện qua gương bị đảo trái - phải.", color: "#059669" },
      { title: "DỰNG ẢNH VẬT SÁNG", desc: "Lấy điểm đối xứng vuông góc qua gương phẳng hoặc kéo dài các tia phản xạ cắt nhau tại ảnh ảo.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Tính chất của ảnh tạo bởi gương phẳng",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li>Ảnh tạo bởi gương phẳng là <strong>ảnh ảo</strong>, không hứng được trên màn chắn.</li>
            <li><strong>Độ lớn của ảnh bằng độ lớn của vật</strong> ($A'B' = AB$).</li>
            <li>Khoảng cách từ một điểm của vật đến gương phẳng bằng khoảng cách từ ảnh của điểm đó đến gương phẳng. Nói cách khác: <strong>Ảnh và vật đối xứng nhau qua mặt phẳng gương</strong>.</li>
            <li>Hiện tượng đảo chiều trái – phải: Ảnh qua gương phẳng đổi ngược chiều trái - phải so với vật thực. Vì vậy chữ "AMBULANCE" ở đầu xe cứu thương được dán ngược để người lái xe phía trước nhìn qua gương chiếu hậu sẽ đọc xuôi chữ.</li>
          </ul>
        `
      },
      {
        title: "2. Cách dựng ảnh của một vật qua gương phẳng",
        content: `
          <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border text-xs text-gray-700 dark:text-gray-300">
            <p class="font-bold text-gray-900 dark:text-white mb-1">Quy tắc dựng ảnh đối xứng:</p>
            <ol class="space-y-1 list-decimal pl-4">
              <li>Từ các điểm mút của vật (ví dụ $A$ và $B$), kẻ đường vuông góc với mặt phẳng gương.</li>
              <li>Kéo dài về phía sau gương một đoạn bằng đúng khoảng cách từ điểm đó tới gương, ta xác định được ảnh $A'$ và $B'$.</li>
              <li>Nối các điểm $A'B'$ bằng nét đứt (vì là ảnh ảo) để được ảnh của vật.</li>
            </ol>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-white">
        <div class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-arrows-left-right"></i> Dựng Ảnh Ảo A'B' Của Vật AB Đối Xứng Qua Gương Phẳng</span>
          <span class="text-[10px] text-gray-400">Ảnh ảo đối xứng</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 350 150" class="w-72 h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Mirror line vertical -->
            <line x1="175" y1="15" x2="175" y2="135" stroke="#94a3b8" stroke-width="3"/>
            <text x="175" y="10" fill="#94a3b8" font-size="9" text-anchor="middle">Mặt gương</text>
            <!-- Real object AB -->
            <line x1="90" y1="40" x2="90" y2="110" stroke="#38bdf8" stroke-width="3" marker-start="url(#arr-up)"/>
            <text x="80" y="35" fill="#38bdf8" font-size="11" font-weight="bold">A</text>
            <text x="80" y="115" fill="#38bdf8" font-size="11" font-weight="bold">B</text>
            <text x="85" y="75" fill="#fff" font-size="9" text-anchor="end">Vật thật</text>
            <!-- Distance d -->
            <line x1="90" y1="75" x2="175" y2="75" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2"/>
            <line x1="175" y1="75" x2="260" y2="75" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2"/>
            <!-- Virtual image A'B' (dashed) -->
            <line x1="260" y1="40" x2="260" y2="110" stroke="#f43f5e" stroke-width="3" stroke-dasharray="4"/>
            <text x="270" y="35" fill="#f43f5e" font-size="11" font-weight="bold">A'</text>
            <text x="270" y="115" fill="#f43f5e" font-size="11" font-weight="bold">B'</text>
            <text x="265" y="75" fill="#fda4af" font-size="9">Ảnh ảo (d = d')</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Một người đứng cách mặt gương phẳng một khoảng 1,5 mét. Khoảng cách từ người đó đến ảnh của mình tạo bởi gương phẳng là:",
        options: ["1,5 mét", "2,0 mét", "3,0 mét", "0,75 mét"],
        answer: 2,
        explain: "Khoảng cách từ người tới gương là 1,5 m ⇒ từ gương tới ảnh là 1,5 m ⇒ khoảng cách từ người tới ảnh = 1,5 + 1,5 = 3,0 m."
      },
      {
        question: "Đặc điểm nào sau đây KHÔNG PHẢI là tính chất của ảnh tạo bởi gương phẳng?",
        options: [
          "Là ảnh ảo, không hứng được trên màn chắn",
          "Ảnh lớn hơn vật nhiều lần",
          "Độ lớn của ảnh bằng đúng độ lớn của vật",
          "Ảnh và vật đối xứng nhau qua mặt phẳng gương"
        ],
        answer: 1,
        explain: "Ảnh trong gương phẳng có độ lớn bằng vật, không lớn hơn hay nhỏ hơn."
      }
    ],
    checklist: [
      "Nêu được 3 tính chất của ảnh tạo bởi gương phẳng.",
      "Dựng được ảnh của một điểm sáng và một đoạn thẳng qua gương phẳng.",
      "Giải thích được vì sao chữ trên đầu xe cứu thương lại viết ngược."
    ]
  },

  // ==================== BÀI 18 ====================
  {
    id: "bai-18",
    num: "Bài 18",
    chapter: "CHƯƠNG VI: TỪ",
    branch: "Vật lý",
    branchTag: "VẬT LÝ",
    branchColor: "bg-blue-600",
    title: "Bài 18. Nam châm",
    pages: "SGK tr. 86–89",
    objective: "Nắm vững tính chất của nam châm (hút sắt/vật liệu có tính từ, có 2 cực Bắc N và Nam S); quy tắc tương tác giữa 2 cực nam châm (cùng tên đẩy nhau, khác tên hút nhau).",
    mindmap: [
      { title: "TÍNH CHẤT TỪ", desc: "Hút sắt và hợp kim sắt (thép, niken, coban). Không hút đồng, nhôm, gỗ, nhựa. Lực hút mạnh nhất ở 2 cực.", color: "#2563eb" },
      { title: "HAI CỰC NAM CHÂM", desc: "Cực Bắc (N - North, thường sơn đỏ) và Cực Nam (S - South, thường sơn xanh). Khi để tự do luôn chỉ hướng Bắc - Nam.", color: "#dc2626" },
      { title: "TƯƠNG TÁC TỪ", desc: "Cùng cực đẩy nhau (N đẩy N, S đẩy S); Khác cực hút nhau (N hút S).", color: "#059669" }
    ],
    sections: [
      {
        title: "1. Tính chất của nam châm và các cực từ",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Tính chất từ:</strong> Nam châm có khả năng hút được các vật bằng sắt, thép, niken, coban (vật liệu có tính từ). Nam châm không hút các vật bằng đồng, nhôm, gỗ, cao su.</li>
            <li><strong>Hai cực của nam châm:</strong> Ở hai đầu của thanh nam châm, lực hút tác dụng lên các vật có tính từ là mạnh nhất, gọi là <strong>cực từ</strong>:
              <br>• Cực chỉ về hướng Bắc địa lí gọi là <strong>cực Bắc</strong> (kí hiệu chữ <strong>N</strong> - North, thường sơn đỏ).
              <br>• Cực chỉ về hướng Nam địa lí gọi là <strong>cực Nam</strong> (kí hiệu chữ <strong>S</strong> - South, thường sơn xanh hoặc trắng).
            </li>
          </ul>
        `
      },
      {
        title: "2. Tương tác giữa hai nam châm",
        content: `
          <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-xs text-gray-700 dark:text-gray-300">
            <h5 class="font-bold text-amber-900 dark:text-amber-300 text-sm mb-1.5">Quy tắc tương tác từ:</h5>
            <ul class="space-y-1 list-disc pl-4">
              <li>Khi đưa hai cực của hai nam châm lại gần nhau:
                <br>• Các cực <strong>cùng tên thì ĐẨY nhau</strong> ($N$ đẩy $N$, $S$ đẩy $S$).
                <br>• Các cực <strong>khác tên thì HÚT nhau</strong> ($N$ hút $S$).
              </li>
              <li><em>Ứng dụng:</em> Chế tạo la bàn định hướng, làm đệm từ trường trong tàu cao tốc Maglev, phân loại phế liệu kim loại sắt.</li>
            </ul>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-white">
        <div class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-magnet"></i> Tương Tác Giữa Hai Nam Châm: Khác Cực Hút Nhau & Cùng Cực Đẩy Nhau</span>
          <span class="text-[10px] text-gray-400">N (Bắc) - S (Nam)</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-around">
          <svg viewBox="0 0 500 110" class="w-full min-w-[450px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- N attracts S -->
            <g transform="translate(30, 20)">
              <rect x="0" y="15" width="45" height="30" fill="#ef4444" rx="2"/>
              <text x="22" y="35" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">N</text>
              <rect x="45" y="15" width="45" height="30" fill="#3b82f6" rx="2"/>
              <text x="67" y="35" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">S</text>

              <path d="M 98 30 L 118 30" stroke="#facc15" stroke-width="2" marker-start="url(#arr-left)" marker-end="url(#arr-right)"/>

              <rect x="125" y="15" width="45" height="30" fill="#ef4444" rx="2"/>
              <text x="147" y="35" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">N</text>
              <rect x="170" y="15" width="45" height="30" fill="#3b82f6" rx="2"/>
              <text x="192" y="35" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">S</text>
              <text x="108" y="70" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">KHÁC CỰC: HÚT NHAU</text>
            </g>
            <!-- S repels S -->
            <g transform="translate(280, 20)">
              <rect x="0" y="15" width="45" height="30" fill="#ef4444" rx="2"/>
              <text x="22" y="35" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">N</text>
              <rect x="45" y="15" width="45" height="30" fill="#3b82f6" rx="2"/>
              <text x="67" y="35" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">S</text>

              <path d="M 118 30 L 98 30" stroke="#f43f5e" stroke-width="2"/>

              <rect x="125" y="15" width="45" height="30" fill="#3b82f6" rx="2"/>
              <text x="147" y="35" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">S</text>
              <rect x="170" y="15" width="45" height="30" fill="#ef4444" rx="2"/>
              <text x="192" y="35" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">N</text>
              <text x="108" y="70" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">CÙNG CỰC: ĐẨY NHAU</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Nam châm vĩnh cửu có thể hút được vật làm bằng vật liệu nào sau đây?",
        options: ["Cái thìa nhôm", "Cái đinh sắt", "Đồng xu bằng đồng", "Thước nhựa"],
        answer: 1,
        explain: "Nam châm chỉ tác dụng lực từ hút các vật liệu từ tính như sắt, thép, niken, coban."
      },
      {
        question: "Đưa cực Bắc (N) của một thanh nam châm lại gần cực Bắc (N) của một kim nam châm thử thì hiện tượng gì sẽ xảy ra?",
        options: [
          "Hai cực hút chặt lấy nhau",
          "Hai cực đẩy nhau ra xa",
          "Kim nam châm đứng yên không có tương tác",
          "Kim nam châm bị khử từ"
        ],
        answer: 1,
        explain: "Theo quy tắc tương tác từ: Hai cực cùng tên (cùng là cực Bắc N) sẽ đẩy nhau."
      }
    ],
    checklist: [
      "Nhận biết được các vật liệu có tính từ bị nam châm hút.",
      "Xác định được cực Bắc (N) và cực Nam (S) của nam châm.",
      "Phát biểu đúng quy tắc tương tác giữa hai cực của hai nam châm."
    ]
  },

  // ==================== BÀI 19 ====================
  {
    id: "bai-19",
    num: "Bài 19",
    chapter: "CHƯƠNG VI: TỪ",
    branch: "Vật lý",
    branchTag: "VẬT LÝ",
    branchColor: "bg-blue-600",
    title: "Bài 19. Từ trường",
    pages: "SGK tr. 90–95",
    objective: "Nêu khái niệm từ trường; thí nghiệm Oersted phát hiện dòng điện tạo từ trường; hình dạng từ phổ và quy ước chiều đường sức từ (ra Bắc vào Nam); từ trường Trái Đất và cách dùng la bàn.",
    mindmap: [
      { title: "TỪ TRƯỜNG & OERSTED", desc: "Không gian quanh nam châm hoặc dòng điện có từ trường. Dùng kim nam châm để nhận biết lực từ tác dụng.", color: "#2563eb" },
      { title: "ĐƯỜNG SỨC TỪ (N -> S)", desc: "Từ phổ rắc mạt sắt. Đường sức từ bên ngoài nam châm có chiều quy ước: ĐI RA TỪ CỰC BẮC (N), ĐI VÀO CỰC NAM (S).", color: "#059669" },
      { title: "TỪ TRƯỜNG TRÁI ĐẤT & LA BÀN", desc: "Trái Đất là một nam châm khổng lồ. Cực từ Trái Đất định hướng kim la bàn luôn nằm theo hướng Bắc - Nam.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Từ trường và thí nghiệm Oersted",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Từ trường:</strong> Là vùng không gian bao quanh nam châm hoặc dây dẫn mang dòng điện, nơi mà các vật có tính từ hoặc kim nam châm đặt trong đó sẽ chịu tác dụng của <strong>lực từ</strong>.</li>
            <li><strong>Thí nghiệm Oersted (1820):</strong> Đặt một dây dẫn kim loại song song với một kim nam châm đang nằm yên. Khi đóng khóa K cho dòng điện chạy qua dây dẫn, kim nam châm lập tức bị lệch góc $\\rightarrow$ Chứng minh <strong>dòng điện sinh ra từ trường</strong> xung quanh nó.</li>
          </ul>
        `
      },
      {
        title: "2. Từ phổ, đường sức từ và La bàn",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Từ phổ:</strong> Hình ảnh trực quan của các mạt sắt sắp xếp xung quanh nam châm. Nơi nào các đường mạt sắt dày hơn thì từ trường ở đó mạnh hơn (ở hai đầu cực).</li>
            <li><strong>Đường sức từ:</strong> Là những đường cong vẽ trong từ trường. Chiều quy ước của đường sức từ ở bên ngoài thanh nam châm là: <strong>Đi ra từ cực Bắc (N) và đi vào cực Nam (S)</strong> ("Vào Nam ra Bắc").</li>
            <li><strong>Từ trường Trái Đất & La bàn:</strong> Trái Đất hoạt động như một nam châm khổng lồ. Cực Bắc địa từ nằm gần cực Nam địa lí; cực Nam địa từ nằm gần cực Bắc địa lí. Kim la bàn định hướng theo từ trường Trái Đất, giúp xác định phương hướng.</li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-white">
        <div class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-compass"></i> Đường Sức Từ Bên Ngoài Thanh Nam Châm: Đi Ra Cực Bắc (N), Đi Vào Cực Nam (S)</span>
          <span class="text-[10px] text-gray-400">Quy tắc N → S</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 450 140" class="w-80 h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Magnet -->
            <rect x="150" y="55" width="75" height="30" fill="#ef4444"/>
            <text x="187" y="75" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">N</text>
            <rect x="225" y="55" width="75" height="30" fill="#3b82f6"/>
            <text x="262" y="75" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">S</text>
            <!-- Field lines -->
            <path d="M 150 70 C 80 10, 370 10, 300 70" fill="none" stroke="#38bdf8" stroke-width="1.8" marker-mid="url(#arr-right)"/>
            <path d="M 150 70 C 80 130, 370 130, 300 70" fill="none" stroke="#38bdf8" stroke-width="1.8"/>
            <text x="225" y="28" fill="#7dd3fc" font-size="10" font-weight="bold" text-anchor="middle">&rarr; Chiều đường sức từ &rarr;</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Quy ước chiều của đường sức từ ở bên ngoài thanh nam châm là:",
        options: [
          "Đi ra từ cực Nam, đi vào cực Bắc",
          "Đi ra từ cực Bắc, đi vào cực Nam",
          "Luôn hướng từ tâm nam châm tỏa đều ra xung quanh",
          "Không có chiều xác định"
        ],
        answer: 1,
        explain: "Quy ước quốc tế: Bên ngoài nam châm, đường sức từ đi ra từ cực Bắc (N) và đi vào cực Nam (S)."
      },
      {
        question: "Thí nghiệm của nhà bác học Oersted đã chứng minh được điều quan trọng nào?",
        options: [
          "Dòng điện có khả năng sinh ra từ trường xung quanh nó",
          "Nam châm có thể tự biến mất từ tính",
          "Ánh sáng truyền đi theo đường cong",
          "Chân không có khả năng dẫn điện"
        ],
        answer: 0,
        explain: "Thí nghiệm Oersted (1820) phát hiện dòng điện làm lệch kim nam châm, chứng minh mối liên hệ giữa điện và từ."
      }
    ],
    checklist: [
      "Nêu được khái niệm từ trường và cách nhận biết bằng kim nam châm.",
      "Mô tả thí nghiệm Oersted chứng minh dòng điện sinh ra từ trường.",
      "Vẽ được hình dạng từ phổ và xác định chiều đường sức từ ra Bắc vào Nam.",
      "Sử dụng được la bàn để xác định các phương hướng địa lí."
    ]
  },

  // ==================== BÀI 20 ====================
  {
    id: "bai-20",
    num: "Bài 20",
    chapter: "CHƯƠNG VI: TỪ",
    branch: "Vật lý",
    branchTag: "VẬT LÝ",
    branchColor: "bg-blue-600",
    title: "Bài 20. Chế tạo nam châm điện đơn giản",
    pages: "SGK tr. 96–98",
    objective: "Cấu tạo nam châm điện gồm cuộn dây quấn quanh lõi sắt non; hiểu vai trò của lõi sắt non làm tăng từ trường; điều khiển lực từ bằng cường độ dòng điện; ứng dụng cần cẩu điện, chuông điện.",
    mindmap: [
      { title: "CẤU TẠO NAM CHÂM ĐIỆN", desc: "Gồm cuộn dây dẫn có dòng điện quấn quanh lõi sắt non. Lõi sắt non giúp tăng lực từ trường lên gấp nhiều lần.", color: "#2563eb" },
      { title: "ĐẶC ĐIỂM NỔI BẬT", desc: "Chỉ có từ tính khi có dòng điện; ngắt điện thì mất ngay từ tính. Tăng số pin hoặc số vòng dây làm lực từ mạnh hơn.", color: "#059669" },
      { title: "ỨNG DỤNG THỰC TẾ", desc: "Cần cẩu dọn phế liệu sắt, rơle đóng ngắt tự động, chuông điện, động cơ điện, máy phát điện.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Cấu tạo và nguyên lý hoạt động của nam châm điện",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Cấu tạo:</strong> Một cuộn dây đồng có bọc lớp cách điện được quấn đều quanh một <strong>lõi sắt non</strong> (như chiếc đinh sắt lớn), hai đầu dây nối với nguồn điện (pin) qua một công tắc.</li>
            <li><strong>Nguyên lý:</strong> Khi đóng công tắc, dòng điện chạy qua cuộn dây sinh ra từ trường. Lõi sắt non bị nhiễm từ làm <em>từ trường được tăng cường mạnh mẽ</em>, có thể hút nhiều ghim sắt.</li>
            <li><strong>Ưu điểm vượt trội so với nam châm vĩnh cửu:</strong>
              <br>• Dễ dàng tắt/bật từ tính tức thì chỉ bằng việc đóng/ngắt công tắc điện.
              <br>• Có thể điều chỉnh lực hút mạnh hay yếu bằng cách tăng giảm số pin (dòng điện) hoặc số vòng dây quấn.
              <br>• Có thể đảo chiều cực từ bằng cách đảo chiều cực nguồn điện.
            </li>
          </ul>
        `
      },
      {
        title: "2. Ứng dụng: Chuông điện và Cần cẩu điện",
        content: `
          <div class="p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border text-xs text-gray-700 dark:text-gray-300">
            <strong class="text-blue-600 dark:text-blue-400 block mb-1">Chu trình hoạt động tự động của chuông điện:</strong>
            <p>1. Nhấn nút chuông $\\rightarrow$ Mạch kín, cuộn dây có điện trở thành nam châm điện.</p>
            <p>2. Nam châm điện hút miếng sắt gắn đầu búa $\\rightarrow$ Đầu búa gõ vào chuông phát ra tiếng "Keng".</p>
            <p>3. Khi đầu búa bị hút tới, tiếp điểm hở mạch $\\rightarrow$ Mất dòng điện $\\rightarrow$ Nam châm điện mất từ tính.</p>
            <p>4. Thanh đàn hồi kéo búa trở về vị trí cũ $\\rightarrow$ Tiếp điểm đóng lại $\\rightarrow$ Chu trình lặp lại liên tục làm búa gõ chuông liên hồi.</p>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-white">
        <div class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-bolt"></i> Cấu Tạo Nam Châm Điện Đơn Giản Dùng Pin & Đinh Sắt</span>
          <span class="text-[10px] text-gray-400">Cuộn dây + Lõi sắt non</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 380 130" class="w-72 h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Iron nail core -->
            <rect x="80" y="55" width="220" height="18" rx="3" fill="#64748b"/>
            <polygon points="300,50 320,64 300,78" fill="#475569"/>
            <!-- Coil copper wire -->
            <path d="M 110 50 Q 115 40 120 50 L 120 78 Q 115 88 110 78 Z" fill="#f59e0b"/>
            <path d="M 140 50 Q 145 40 150 50 L 150 78 Q 145 88 140 78 Z" fill="#f59e0b"/>
            <path d="M 170 50 Q 175 40 180 50 L 180 78 Q 175 88 170 78 Z" fill="#f59e0b"/>
            <path d="M 200 50 Q 205 40 210 50 L 210 78 Q 205 88 200 78 Z" fill="#f59e0b"/>
            <path d="M 230 50 Q 235 40 240 50 L 240 78 Q 235 88 230 78 Z" fill="#f59e0b"/>
            <path d="M 260 50 Q 265 40 270 50 L 270 78 Q 265 88 260 78 Z" fill="#f59e0b"/>
            <!-- Attracted paperclips -->
            <circle cx="325" cy="80" r="6" fill="none" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="335" cy="95" r="6" fill="none" stroke="#94a3b8" stroke-width="2"/>
            <text x="190" y="30" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Cuộn dây đồng bọc men cách điện</text>
            <text x="190" y="110" fill="#cbd5e1" font-size="9" text-anchor="middle">Lõi đinh sắt non</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Muốn làm tăng lực từ của một nam châm điện, ta có thể áp dụng biện pháp nào sau đây?",
        options: [
          "Giảm số vòng dây quấn quanh lõi sắt",
          "Tăng cường độ dòng điện chạy qua cuộn dây (tăng số pin)",
          "Rút lõi sắt non ra khỏi cuộn dây",
          "Sử dụng dây dẫn không có vỏ bọc cách điện"
        ],
        answer: 1,
        explain: "Lực từ của nam châm điện tăng lên khi tăng cường độ dòng điện chạy qua cuộn dây hoặc tăng số vòng dây quấn."
      },
      {
        question: "Tại sao lõi của nam châm điện lại làm bằng sắt non mà không làm bằng thép?",
        options: [
          "Vì sắt non rẻ tiền hơn thép",
          "Vì sắt non nhiễm từ nhanh và mất từ tính gần như ngay lập tức khi ngắt điện",
          "Vì thép không thể bị nhiễm từ",
          "Vì sắt non dẫn điện tốt hơn thép"
        ],
        answer: 1,
        explain: "Sắt non nhiễm từ mạnh và mất từ tính ngay khi ngắt dòng điện, đáp ứng tính chất đóng/ngắt linh hoạt của nam châm điện."
      }
    ],
    checklist: [
      "Mô tả được các bộ phận cấu tạo của một nam châm điện đơn giản.",
      "Giải thích được nguyên lý tăng cường từ trường của lõi sắt non.",
      "Tự chế tạo được một nam châm điện đơn giản bằng pin, đinh sắt và dây đồng.",
      "Giải thích được nguyên lý tự động của chuông điện và cần cẩu phế liệu."
    ]
  }
];
