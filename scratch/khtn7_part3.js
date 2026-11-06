// KHTN 7 - Part 3: Sinh học (Chương VII: Trao đổi chất & Chuyển hóa năng lượng)
// Bài 21 đến Bài 32

module.exports = [
  // ==================== BÀI 21 ====================
  {
    id: "bai-21",
    num: "Bài 21",
    chapter: "CHƯƠNG VII: TRAO ĐỔI CHẤT & CHUYỂN HOÁ NĂNG LƯỢNG",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 21. Khái quát trao đổi chất và chuyển hoá năng lượng",
    pages: "SGK tr. 99–100",
    objective: "Nêu khái niệm trao đổi chất và chuyển hoá năng lượng; hiểu mối quan hệ hai chiều gắn bó mật thiết; vai trò duy trì sự sống, sinh trưởng, phát triển của sinh vật.",
    mindmap: [
      { title: "TRAO ĐỔI CHẤT", desc: "Lấy chất từ môi trường -> Biến đổi thành chất sống của tế bào -> Thải chất bã ra ngoài môi trường.", color: "#059669" },
      { title: "CHUYỂN HÓA NĂNG LƯỢNG", desc: "Biến đổi từ dạng này sang dạng khác: Quang năng -> Hóa năng (chất hữu cơ) -> Cơ năng, Nhiệt năng.", color: "#2563eb" },
      { title: "VAI TRÒ SỐNG CÒN", desc: "Duy trì sự sống, xây dựng tế bào, sinh trưởng, sinh sản và cung cấp năng lượng cho mọi hoạt động.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Khái niệm và mối quan hệ giữa TĐC và CHNL",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Trao đổi chất:</strong> Là quá trình cơ thể sinh vật lấy các chất từ môi trường ngoài (nước, thức ăn, oxygen, $CO_2$), biến đổi chúng thành các chất cần thiết cho tế bào và thải các chất bã, chất cặn bã ra môi trường ngoài.</li>
            <li><strong>Chuyển hoá năng lượng:</strong> Là sự biến đổi năng lượng từ dạng này sang dạng khác trong tế bào (ví dụ: quang năng của ánh sáng mặt trời thành hoá năng tích trữ trong liên kết phân tử đường; hoá năng thành nhiệt năng giữ ấm và cơ năng cho cơ bắp co giãn).</li>
            <li><strong>Mối liên hệ:</strong> Trao đổi chất và chuyển hoá năng lượng là hai mặt của một quá trình thống nhất, luôn diễn ra đồng thời. Nếu quá trình này ngừng lại thì sinh vật sẽ chết.</li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-arrows-spin"></i> Sơ Đồ Trao Đổi Chất & Chuyển Hóa Năng Lượng Giữa Sinh Vật Và Môi Trường</span>
          <span class="text-[10px] text-gray-400">Sinh học 7</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 450 110" class="w-full min-w-[400px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="25" width="100" height="60" rx="8" fill="#1e293b" stroke="#3b82f6"/>
            <text x="70" y="50" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="middle">MÔI TRƯỜNG</text>
            <text x="70" y="68" fill="#94a3b8" font-size="8.5" text-anchor="middle">O2, Nước, Khoáng</text>

            <path d="M 120 45 L 170 45" stroke="#34d399" stroke-width="2" marker-end="url(#arr-right)"/>
            <text x="145" y="38" fill="#34d399" font-size="8.5" font-weight="bold" text-anchor="middle">Lấy vào</text>

            <rect x="170" y="15" width="120" height="80" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
            <text x="230" y="45" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">CƠ THỂ SINH VẬT</text>
            <text x="230" y="65" fill="#fde047" font-size="9" text-anchor="middle">Tế bào biến đổi chất</text>
            <text x="230" y="80" fill="#fde047" font-size="9" text-anchor="middle">& Tích lũy ATP</text>

            <path d="M 290 65 L 340 65" stroke="#f43f5e" stroke-width="2" marker-end="url(#arr-right)"/>
            <text x="315" y="58" fill="#f43f5e" font-size="8.5" font-weight="bold" text-anchor="middle">Thải ra</text>

            <rect x="340" y="25" width="100" height="60" rx="8" fill="#1e293b" stroke="#f43f5e"/>
            <text x="390" y="50" fill="#fda4af" font-size="10" font-weight="bold" text-anchor="middle">CHẤT THẢI</text>
            <text x="390" y="68" fill="#94a3b8" font-size="8.5" text-anchor="middle">CO2, Phân, Nước tiểu</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Dấu hiệu nào sau đây chứng tỏ quá trình trao đổi chất và chuyển hoá năng lượng đang diễn ra trong cơ thể người?",
        options: [
          "Cơ thể thở ra khí CO2, tiết mồ hôi và tim đập bơm máu",
          "Tóc và móng tay không bao giờ mọc dài thêm",
          "Nhiệt độ cơ thể hạ xuống bằng 0 độ C",
          "Cơ thể ngừng tiêu thụ thức ăn và nước uống"
        ],
        answer: 0,
        explain: "Hít thở, tuần hoàn, bài tiết và duy trì thân nhiệt là những biểu hiện rõ nét của trao đổi chất và chuyển hóa năng lượng."
      },
      {
        question: "Khi chúng ta vận động mạnh (như chạy bộ), hiện tượng nào sau đây diễn ra do nhu cầu năng lượng tăng cao?",
        options: [
          "Nhịp tim và nhịp thở đập chậm lại",
          "Cơ thể nóng lên, toát nhiều mồ hôi, nhịp thở và nhịp tim tăng nhanh",
          "Cơ thể ngừng hô hấp",
          "Thân nhiệt tụt sâu"
        ],
        answer: 1,
        explain: "Khi vận động cơ bắp cần nhiều ATP, tế bào tăng cường hô hấp nên nhịp tim, nhịp thở tăng để cung cấp O2 và thải nhiệt qua mồ hôi."
      }
    ],
    checklist: [
      "Nêu được khái niệm trao đổi chất và chuyển hoá năng lượng.",
      "Chứng minh được mối quan hệ mật thiết giữa TĐC và CHNL.",
      "Giải thích được các hiện tượng sinh lý khi cơ thể vận động mạnh."
    ]
  },

  // ==================== BÀI 22 ====================
  {
    id: "bai-22",
    num: "Bài 22",
    chapter: "CHƯƠNG VII: TRAO ĐỔI CHẤT & CHUYỂN HOÁ NĂNG LƯỢNG",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 22. Quang hợp ở thực vật",
    pages: "SGK tr. 101–103",
    objective: "Nắm vững phương trình quang hợp chữ và hoá học; cơ quan thực hiện (lá, lục lạp có diệp lục); giải thích sự biến đổi vật chất (nước + CO2 -> glucose + O2) và năng lượng (quang năng -> hoá năng).",
    mindmap: [
      { title: "NƠI QUANG HỢP", desc: "Diễn ra chủ yếu ở lá, trong bào quan lục lạp chứa chất diệp lục có khả năng hấp thụ ánh sáng mặt trời.", color: "#059669" },
      { title: "PHƯƠNG TRÌNH QUANG HỢP", desc: "Nước + Carbon dioxide —(Ánh sáng, Diệp lục)→ Glucose + Oxygen. 6CO2 + 6H2O -> C6H12O6 + 6O2.", color: "#2563eb" },
      { title: "BIẾN ĐỔI NĂNG LƯỢNG", desc: "Quang năng được diệp lục hấp thu -> chuyển hóa thành Hóa năng tích trữ trong liên kết chất hữu cơ.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Khái niệm và phương trình quang hợp",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            <strong>Quang hợp</strong> là quá trình lá cây sử dụng nước và khí carbon dioxide, nhờ năng lượng ánh sáng mặt trời được chất diệp lục hấp thu để tổng hợp nên chất hữu cơ (glucose, tinh bột) và giải phóng khí oxygen ra môi trường.
          </p>
          <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-xs text-gray-700 dark:text-gray-300 mb-3">
            <h5 class="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1.5">Phương trình quang hợp:</h5>
            <div class="p-2 rounded bg-white dark:bg-gray-800 font-bold text-center text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 border mb-2">
              Nước + Carbon dioxide &nbsp;—(Ánh sáng, Diệp lục)&rarr;&nbsp; Glucose + Oxygen
            </div>
            <div class="text-center font-mono text-xs text-gray-600 dark:text-gray-400">
              $$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow[\\text{diệp lục}]{\\text{ánh sáng}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$
            </div>
          </div>
        `
      },
      {
        title: "2. Đặc điểm cấu tạo lá phù hợp chức năng quang hợp",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Phiến lá:</strong> Bản mỏng, diện tích bề mặt rộng giúp hấp thu tối đa ánh sáng mặt trời.</li>
            <li><strong>Gân lá:</strong> Có mạch gỗ dẫn nước và muối khoáng từ rễ lên; mạch rây vận chuyển chất hữu cơ từ lá đi nuôi cơ thể.</li>
            <li><strong>Khí khổng:</strong> Nằm ở lớp biểu bì lá (nhiều ở mặt dưới), có khả năng đóng mở để trao đổi khí ($CO_2, O_2$) và thoát hơi nước.</li>
            <li><strong>Lục lạp:</strong> Bào quan chứa chất diệp lục màu xanh lục, thực hiện biến đổi quang năng thành hoá năng.</li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-leaf"></i> Sơ Đồ Cơ Chế Quang Hợp Của Cây Xanh Trong Tự Nhiên</span>
          <span class="text-[10px] text-gray-400">CO2 + H2O &rarr; Đường + O2</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 450 120" class="w-full min-w-[400px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(180, 20)">
              <!-- Leaf -->
              <path d="M 0 40 C 20 -10, 70 -10, 90 40 C 70 90, 20 90, 0 40 Z" fill="#15803d" stroke="#22c55e" stroke-width="2"/>
              <line x1="10" y1="40" x2="80" y2="40" stroke="#86efac" stroke-width="2"/>
              <text x="45" y="44" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">Lá xanh</text>
            </g>
            <!-- Inputs -->
            <text x="60" y="35" fill="#facc15" font-size="10" font-weight="bold">Ánh sáng Mặt Trời &rarr;</text>
            <text x="70" y="65" fill="#38bdf8" font-size="10" font-weight="bold">CO2 không khí &rarr;</text>
            <text x="70" y="95" fill="#60a5fa" font-size="10" font-weight="bold">Nước (H2O) từ rễ &rarr;</text>
            <!-- Outputs -->
            <text x="310" y="45" fill="#34d399" font-size="10" font-weight="bold">&rarr; Khí Oxygen (O2)</text>
            <text x="310" y="85" fill="#fbbf24" font-size="10" font-weight="bold">&rarr; Tinh bột / Glucose</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Nguyên liệu đầu vào của quá trình quang hợp ở thực vật gồm những chất nào?",
        options: [
          "Khí oxygen và chất hữu cơ",
          "Nước và khí carbon dioxide",
          "Chất khoáng và khí nitrogen",
          "Nước và khí oxygen"
        ],
        answer: 1,
        explain: "Quang hợp sử dụng nguyên liệu là Nước (rễ hút từ đất) và khí Carbon dioxide (khuếch tán qua khí khổng)."
      },
      {
        question: "Bào quan nào trong tế bào thực vật là nơi trực tiếp thực hiện quá trình quang hợp?",
        options: ["Ti thể", "Không bào", "Lục lạp", "Nhân tế bào"],
        answer: 2,
        explain: "Lục lạp chứa chất diệp lục có khả năng hấp thụ quang năng và thực hiện phản ứng quang hợp."
      }
    ],
    checklist: [
      "Viết đúng phương trình quang hợp dạng chữ và dạng hóa học.",
      "Chỉ ra được vai trò của lục lạp và chất diệp lục.",
      "Mô tả các đặc điểm cấu tạo của lá thích nghi với chức năng quang hợp."
    ]
  },

  // ==================== BÀI 23 ====================
  {
    id: "bai-23",
    num: "Bài 23",
    chapter: "CHƯƠNG VII: TRAO ĐỔI CHẤT & CHUYỂN HOÁ NĂNG LƯỢNG",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 23. Một số yếu tố ảnh hưởng đến quang hợp",
    pages: "SGK tr. 104–107",
    objective: "Phân tích ảnh hưởng của ánh sáng, nước, hàm lượng CO2, nhiệt độ đến quang hợp; liên hệ biện pháp kĩ thuật canh tác nông nghiệp tăng năng suất cây trồng.",
    mindmap: [
      { title: "ÁNH SÁNG & NƯỚC", desc: "Cường độ ánh sáng tăng giúp quang hợp tăng đến điểm bão hòa (cây ưa sáng vs ưa bóng). Thiếu nước khí khổng đóng, quang hợp giảm.", color: "#059669" },
      { title: "CO2 & NHIỆT ĐỘ", desc: "Tăng nồng độ CO2 tăng quang hợp đến giới hạn. Nhiệt độ thích hợp nhất từ 25°C đến 35°C (dưới 10°C hoặc trên 40°C quang hợp ngừng).", color: "#2563eb" },
      { title: "ỨNG DỤNG CANH TÁC", desc: "Bố trí mật độ hợp lí, trồng đúng thời vụ, tưới tiêu tiêu chuẩn, bón phân cân đối, bảo vệ cây xanh.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Các yếu tố môi trường ảnh hưởng đến quang hợp",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Ánh sáng:</strong> Tăng cường độ ánh sáng làm tăng cường độ quang hợp đến điểm bão hoà ánh sáng. Phân biệt <em>cây ưa sáng</em> (lúa, ngô, phi lao) cần nhiều ánh sáng và <em>cây ưa bóng</em> (lá lốt, gừng, phong lan) sống dưới tán cây khác.</li>
            <li><strong>Nước:</strong> Vừa là nguyên liệu trực tiếp của quang hợp, vừa điều tiết sự đóng mở của khí khổng. Thiếu nước $\\rightarrow$ khí khổng đóng lại $\\rightarrow$ $CO_2$ không vào được lá $\\rightarrow$ quang hợp ngưng trệ.</li>
            <li><strong>Nồng độ $CO_2$:</strong> Nồng độ $CO_2$ tự nhiên khoảng $0,03\\%$. Tăng nồng độ $CO_2$ làm tăng hiệu quả quang hợp, nhưng nếu quá cao ($> 0,2\\%$) cây sẽ bị ngộ độc.</li>
            <li><strong>Nhiệt độ:</strong> Đa số cây quang hợp thuận lợi nhất ở nhiệt độ từ <strong>$25^\\circ\\text{C} - 35^\\circ\\text{C}$</strong>. Nhiệt độ quá thấp ($< 10^\\circ\\text{C}$) hoặc quá cao ($> 40^\\circ\\text{C}$) làm enzym bị biến tính, quang hợp suy giảm mạnh hoặc ngừng hẳn.</li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-seedling"></i> 4 Yếu Tố Môi Trường Tác Động Quyết Định Cường Độ Quang Hợp</span>
          <span class="text-[10px] text-gray-400">Ánh sáng, Nước, CO2, Nhiệt độ</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 650 90" class="w-full min-w-[550px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="130" height="50" rx="8" fill="#1e293b" stroke="#facc15"/>
            <text x="85" y="42" fill="#fde047" font-size="10.5" font-weight="bold" text-anchor="middle">ÁNH SÁNG</text>
            <text x="85" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Ưa sáng vs Ưa bóng</text>

            <rect x="180" y="20" width="130" height="50" rx="8" fill="#1e293b" stroke="#38bdf8"/>
            <text x="245" y="42" fill="#7dd3fc" font-size="10.5" font-weight="bold" text-anchor="middle">NƯỚC</text>
            <text x="245" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Nguyên liệu & Khí khổng</text>

            <rect x="340" y="20" width="130" height="50" rx="8" fill="#1e293b" stroke="#34d399"/>
            <text x="405" y="42" fill="#6ee7b7" font-size="10.5" font-weight="bold" text-anchor="middle">HÀM LƯỢNG CO2</text>
            <text x="405" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">0,03% &rarr; giới hạn</text>

            <rect x="500" y="20" width="130" height="50" rx="8" fill="#1e293b" stroke="#f43f5e"/>
            <text x="565" y="42" fill="#fda4af" font-size="10.5" font-weight="bold" text-anchor="middle">NHIỆT ĐỘ</text>
            <text x="565" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Thuận lợi 25 - 35°C</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Nhiệt độ môi trường thuận lợi nhất cho quá trình quang hợp của đa số loài cây xanh là:",
        options: ["0°C đến 10°C", "15°C đến 20°C", "25°C đến 35°C", "45°C đến 55°C"],
        answer: 2,
        explain: "Khoảng nhiệt độ từ 25°C đến 35°C là tối ưu nhất cho hoạt động của các enzyme quang hợp trong lục lạp."
      },
      {
        question: "Cây nào sau đây thuộc nhóm cây ưa bóng, thường được trồng xen canh dưới tán cây ăn quả lớn?",
        options: ["Cây lúa nước", "Cây ngô (bắp)", "Cây lá lốt", "Cây mía"],
        answer: 2,
        explain: "Lá lốt là cây ưa bóng, có phiến lá mỏng, bản to, lục lạp lớn để thích nghi với điều kiện ánh sáng yếu dưới tán rừng."
      }
    ],
    checklist: [
      "Phân tích được ảnh hưởng của 4 yếu tố chính đến quang hợp.",
      "Phân biệt được cây ưa sáng và cây ưa bóng trong thực tế.",
      "Vận dụng kiến thức giải thích các biện pháp trồng xen canh, thắp đèn cho thanh long."
    ]
  },

  // ==================== BÀI 24 ====================
  {
    id: "bai-24",
    num: "Bài 24",
    chapter: "CHƯƠNG VII: TRAO ĐỔI CHẤT & CHUYỂN HOÁ NĂNG LƯỢNG",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 24. Thực hành: Chứng minh quang hợp ở cây xanh",
    pages: "SGK tr. 108–110",
    objective: "Tiến hành thí nghiệm chứng minh quang hợp tạo ra tinh bột (dùng cồn 90° tẩy diệp lục, thử dung dịch iodine hóa xanh tím); thí nghiệm chứng minh giải phóng khí oxygen (que đóm tàn đỏ bùng cháy).",
    mindmap: [
      { title: "TN 1: TẠO TINH BỘT", desc: "Bịt băng giấy đen một phần lá -> chiếu sáng -> đun cách thủy cồn 90° tẩy diệp lục -> nhỏ iodine -> phần chiếu sáng hóa XANH TÍM.", color: "#059669" },
      { title: "TN 2: GIẢI PHÓNG O2", desc: "Đặt cành rong đuôi chó trong cốc nước chiếu sáng -> thu bọt khí ở đáy ống nghiệm -> que đóm tàn đỏ BÙNG CHÁY.", color: "#2563eb" },
      { title: "QUY TẮC AN TOÀN", desc: "Cồn 90° rất dễ cháy nên BẮT BUỘC ĐUN CÁCH THỦY, tuyệt đối không đun cồn trực tiếp trên ngọn lửa.", color: "#dc2626" }
    ],
    sections: [
      {
        title: "1. Thí nghiệm 1: Chứng minh quang hợp tạo ra tinh bột",
        content: `
          <ol class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-decimal pl-4 mb-3">
            <li>Để chậu cây khoai lang trong bóng tối 2 ngày để tiêu bớt lượng tinh bột có sẵn trong lá.</li>
            <li>Dùng băng giấy đen bịt kín một phần ở cả 2 mặt của chiếc lá; đem chậu cây ra chiếu sáng từ 4 đến 6 giờ.</li>
            <li>Ngắt chiếc lá đó, bỏ băng giấy đen. Cho lá vào ống nghiệm chứa <strong>cồn 90°</strong> và <strong>đun cách thủy</strong> trong cốc nước sôi để tẩy sạch chất diệp lục.</li>
            <li>Rửa sạch lá trong nước ấm, trải ra đĩa petri và nhỏ vài giọt <strong>dung dịch iodine</strong> lên khắp bề mặt lá.</li>
            <li><strong>Hiện tượng & Kết luận:</strong> Phần lá được chiếu sáng chuyển sang màu <strong>xanh tím</strong> (chứng tỏ có tinh bột tạo thành nhờ quang hợp). Phần lá bị bịt giấy đen không đổi màu.</li>
          </ol>
        `
      },
      {
        title: "2. Thí nghiệm 2: Chứng minh quang hợp giải phóng khí oxygen",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li>Lấy hai cốc nước, cho vào mỗi cốc một cành rong đuôi chó; úp phễu thuỷ tinh và ống nghiệm chứa đầy nước lên trên cành rong.</li>
            <li>Cốc A đặt ngoài ánh sáng mặt trời; cốc B để trong bóng tối (đối chứng).</li>
            <li>Sau 6 giờ, quan sát thấy ống nghiệm ở cốc A xuất hiện nhiều bọt khí đẩy nước xuống.</li>
            <li>Lấy ống nghiệm ra và đưa que đóm còn tàn đỏ vào miệng ống: <strong>Que đóm bùng cháy sáng</strong> $\\rightarrow$ Chứng minh chất khí sinh ra chính là <strong>khí Oxygen ($O_2$)</strong>.</li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-flask"></i> Thí Nghiệm Nhỏ Dung Dịch Iodine Phát Hiện Tinh Bột Trên Lá</span>
          <span class="text-[10px] text-gray-400">Xanh tím = có tinh bột</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 350 110" class="w-72 h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Leaf shape -->
            <path d="M 40 55 C 80 15, 220 15, 300 55 C 220 95, 80 95, 40 55 Z" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
            <!-- Covered middle part -->
            <rect x="140" y="30" width="60" height="50" fill="#fef08a" stroke="#ca8a04"/>
            <text x="170" y="58" fill="#854d0e" font-size="8.5" font-weight="bold" text-anchor="middle">Bị che đen</text>
            <text x="170" y="70" fill="#854d0e" font-size="7.5" text-anchor="middle">(Không đổi màu)</text>
            <!-- Exposed parts turn dark purple -->
            <path d="M 40 55 C 70 25, 110 25, 140 35 L 140 75 C 110 85, 70 85, 40 55 Z" fill="#4338ca"/>
            <path d="M 200 35 C 230 25, 270 25, 300 55 C 270 85, 230 85, 200 75 Z" fill="#4338ca"/>
            <text x="85" y="58" fill="#fff" font-size="8.5" font-weight="bold" text-anchor="middle">Hóa xanh tím</text>
            <text x="250" y="58" fill="#fff" font-size="8.5" font-weight="bold" text-anchor="middle">Hóa xanh tím</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Thuốc thử hoá học đặc trưng nào được dùng để nhận biết sự có mặt của tinh bột trong thí nghiệm quang hợp?",
        options: ["Nước vôi trong", "Dung dịch Iodine", "Cồn 90 độ", "Dung dịch muối ăn"],
        answer: 1,
        explain: "Dung dịch Iodine tác dụng với tinh bột tạo thành hợp chất có màu xanh tím đặc trưng."
      },
      {
        question: "Tại sao khi tẩy chất diệp lục trong lá bằng cồn 90°, bắt buộc phải đun cách thuỷ mà không được đun cồn trực tiếp?",
        options: [
          "Để cồn không bị bay hơi mất",
          "Vì cồn 90° rất dễ bắt lửa gây cháy nổ nguy hiểm",
          "Để lá cây không bị nát",
          "Vì đun trực tiếp lá sẽ không chín"
        ],
        answer: 1,
        explain: "Cồn 90° là dung môi hữu cơ cực kì dễ bắt lửa bốc cháy, đun trực tiếp trên ngọn lửa đèn cồn rất nguy hiểm."
      }
    ],
    checklist: [
      "Giải thích được mục đích từng bước trong thí nghiệm chứng minh tạo tinh bột.",
      "Mô tả được thí nghiệm thu khí oxygen bằng cành rong đuôi chó.",
      "Tuân thủ nghiêm ngặt quy tắc an toàn phòng thí nghiệm khi đun cồn."
    ]
  },

  // ==================== BÀI 25 ====================
  {
    id: "bai-25",
    num: "Bài 25",
    chapter: "CHƯƠNG VII: TRAO ĐỔI CHẤT & CHUYỂN HOÁ NĂNG LƯỢNG",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 25. Hô hấp tế bào",
    pages: "SGK tr. 111–112",
    objective: "Nêu bản chất hô hấp tế bào là phân giải glucose giải phóng năng lượng ATP; phương trình hô hấp tế bào; cơ quan thực hiện (ti thể); so sánh hô hấp tế bào với quang hợp.",
    mindmap: [
      { title: "BẢN CHẤT HÔ HẤP", desc: "Phân giải chất hữu cơ (glucose) nhờ oxygen tạo CO2, H2O và giải phóng năng lượng tích lũy trong phân tử ATP.", color: "#059669" },
      { title: "BÀO QUAN TI THỂ", desc: "Diễn ra chủ yếu ở bào quan ti thể (nhà máy năng lượng của tế bào sinh vật nhân thực).", color: "#2563eb" },
      { title: "MỐI QUAN HỆ ĐỐI LẬP", desc: "Quang hợp: Tích lũy chất hữu cơ & quang năng. Hô hấp: Phân giải chất hữu cơ & giải phóng ATP.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Khái niệm và phương trình hô hấp tế bào",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            <strong>Hô hấp tế bào</strong> là quá trình phân giải chất hữu cơ (chủ yếu là glucose) với sự tham gia của khí oxygen, tạo ra khí carbon dioxide, nước và giải phóng năng lượng cung cấp cho các hoạt động sống của tế bào (phần lớn tích luỹ trong phân tử <strong>ATP</strong>).
          </p>
          <div class="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 text-xs text-gray-700 dark:text-gray-300 mb-3">
            <h5 class="font-bold text-purple-900 dark:text-purple-300 text-sm mb-1.5">Phương trình hô hấp tế bào:</h5>
            <div class="p-2 rounded bg-white dark:bg-gray-800 font-bold text-center text-xs sm:text-sm text-purple-700 dark:text-purple-300 border mb-2">
              Glucose + Oxygen &nbsp;&rarr;&nbsp; Carbon dioxide + Nước + Năng lượng (ATP + Nhiệt)
            </div>
            <div class="text-center font-mono text-xs text-gray-600 dark:text-gray-400">
              $$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\xrightarrow{\\text{ti thể}} 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{Năng lượng (ATP)}$$
            </div>
          </div>
        `
      },
      {
        title: "2. Mối quan hệ giữa Quang hợp và Hô hấp tế bào",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li>Quang hợp và hô hấp tế bào có chiều biến đổi trái ngược nhau nhưng phụ thuộc chặt chẽ vào nhau:
              <br>• <strong>Quang hợp:</strong> Tổng hợp chất hữu cơ, hấp thụ năng lượng (quang năng $\\rightarrow$ hoá năng). Sản phẩm của quang hợp (glucose, $O_2$) là nguyên liệu cho hô hấp.
              <br>• <strong>Hô hấp:</strong> Phân giải chất hữu cơ, giải phóng năng lượng hoá năng thành ATP. Sản phẩm của hô hấp ($CO_2, H_2O$) lại là nguyên liệu cho quang hợp.
            </li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-arrows-spin"></i> Chu Trình Gắn Kết Đối Lập: Quang Hợp (Lục Lạp) & Hô Hấp Tế Bào (Ti Thể)</span>
          <span class="text-[10px] text-gray-400">ATP & Năng lượng</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-around">
          <svg viewBox="0 0 500 120" class="w-full min-w-[450px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="25" width="130" height="70" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
            <text x="95" y="55" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">LỤC LẠP</text>
            <text x="95" y="75" fill="#6ee7b7" font-size="9.5" text-anchor="middle">Quang hợp tạo Glucose</text>

            <path d="M 165 45 C 230 20, 270 20, 335 45" fill="none" stroke="#facc15" stroke-width="2" marker-end="url(#arr-right)"/>
            <text x="250" y="25" fill="#fde047" font-size="9.5" font-weight="bold" text-anchor="middle">Chất hữu cơ + O2 &rarr;</text>

            <rect x="340" y="25" width="130" height="70" rx="10" fill="#4c1d95" stroke="#a855f7" stroke-width="2"/>
            <text x="405" y="55" fill="#e9d5ff" font-size="12" font-weight="bold" text-anchor="middle">TI THỂ</text>
            <text x="405" y="75" fill="#c084fc" font-size="9.5" text-anchor="middle">Hô hấp giải phóng ATP</text>

            <path d="M 335 75 C 270 100, 230 100, 165 75" fill="none" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr-left)"/>
            <text x="250" y="105" fill="#7dd3fc" font-size="9.5" font-weight="bold" text-anchor="middle">&larr; CO2 + H2O</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Bào quan nào trong tế bào được mệnh danh là 'nhà máy năng lượng' vì là nơi diễn ra hô hấp tế bào?",
        options: ["Nhân tế bào", "Lục lạp", "Ti thể", "Không bào"],
        answer: 2,
        explain: "Ti thể là bào quan chủ yếu diễn ra quá trình phân giải chất hữu cơ tạo năng lượng ATP cho tế bào."
      },
      {
        question: "Dạng năng lượng chủ yếu được tế bào tích lũy và sử dụng trực tiếp cho các hoạt động sống từ quá trình hô hấp là:",
        options: ["Quang năng", "Hóa năng trong phân tử ATP", "Điện năng", "Nhiệt năng thuần túy"],
        answer: 1,
        explain: "ATP (Adenosine triphosphate) là đồng tiền năng lượng của tế bào, tích luỹ hoá năng để cung cấp cho mọi hoạt động sống."
      }
    ],
    checklist: [
      "Viết đúng phương trình hô hấp tế bào dạng chữ.",
      "Chỉ ra được vai trò của ti thể và năng lượng ATP.",
      "So sánh được sự giống và khác nhau giữa quang hợp và hô hấp tế bào."
    ]
  },

  // ==================== BÀI 26 ====================
  {
    id: "bai-26",
    num: "Bài 26",
    chapter: "CHƯƠNG VII: TRAO ĐỔI CHẤT & CHUYỂN HOÁ NĂNG LƯỢNG",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 26. Một số yếu tố ảnh hưởng đến hô hấp tế bào",
    pages: "SGK tr. 113–115",
    objective: "Nêu các yếu tố ảnh hưởng đến hô hấp tế bào (nhiệt độ, độ ẩm/nước, hàm lượng O2, CO2); ứng dụng trong bảo quản nông sản và an toàn phòng tránh ngạt khí.",
    mindmap: [
      { title: "CÁC YẾU TỐ ẢNH HƯỞNG", desc: "Nước tăng -> hô hấp tăng; O2 là nguyên liệu (O2 < 5% hô hấp giảm); CO2 ức chế (3-5%); Nhiệt độ tối ưu 30-35°C.", color: "#059669" },
      { title: "BẢO QUẢN NÔNG SẢN", desc: "Làm giảm cường độ hô hấp mà không làm chết tế bào: Phơi khô hạt, bảo quản lạnh rau quả, phòng hút chân không/bơm CO2.", color: "#2563eb" },
      { title: "AN TOÀN LAO ĐỘNG", desc: "Hầm kín, giếng sâu có CO2 cao gây ngạt thở; tuyệt đối không vào phòng kín chưa được thông gió an toàn.", color: "#dc2626" }
    ],
    sections: [
      {
        title: "1. Các yếu tố ảnh hưởng đến hô hấp tế bào",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Nước (Độ ẩm):</strong> Nước là môi trường cho các phản ứng hoá học. Hạt khô có hàm lượng nước thấp ($10 - 12\\%$) thì hô hấp rất yếu; khi hạt hút ẩm, hô hấp tăng vọt.</li>
            <li><strong>Hàm lượng Oxygen:</strong> Oxygen là nguyên liệu trực tiếp. Nồng độ $O_2$ trong không khí giảm xuống dưới $5\\%$ thì hô hấp hiếu khí suy giảm mạnh.</li>
            <li><strong>Hàm lượng Carbon dioxide:</strong> $CO_2$ là sản phẩm thải ra. Nếu nồng độ $CO_2$ môi trường tăng lên ($3 - 5\\%$) sẽ ức chế quá trình hô hấp tế bào.</li>
            <li><strong>Nhiệt độ:</strong> Quá trình hô hấp cần enzyme xúc tác. Nhiệt độ thích hợp nhất khoảng $30^\\circ\\text{C} - 35^\\circ\\text{C}$. Nhiệt độ quá cao ($> 40^\\circ\\text{C}$) hoặc quá lạnh làm giảm hô hấp.</li>
          </ul>
        `
      },
      {
        title: "2. Ứng dụng bảo quản nông sản và an toàn phòng ngạt",
        content: `
          <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-xs text-gray-700 dark:text-gray-300">
            <h5 class="font-bold text-amber-900 dark:text-amber-300 text-sm mb-1.5">Nguyên tắc bảo quản nông sản:</h5>
            <p class="mb-2">Mục tiêu là <strong>hạ thấp cường độ hô hấp xuống mức tối thiểu</strong> để tránh tiêu hao chất hữu cơ và tránh nảy mầm, nhưng không làm chết tế bào nông sản:</p>
            <ul class="space-y-1 list-disc pl-4">
              <li><strong>Bảo quản khô:</strong> Phơi/sấy khô thóc, ngô, đậu đỗ trước khi cho vào kho chum, bao bì kín.</li>
              <li><strong>Bảo quản lạnh:</strong> Để rau, hoa quả tươi trong tủ lạnh (ngăn mát $2 - 8^\\circ\\text{C}$).</li>
              <li><strong>Bảo quản trong điều kiện nồng độ $CO_2$ cao:</strong> Bơm $CO_2$ vào kho kín để ức chế hô hấp.</li>
            </ul>
            <p class="mt-2 text-rose-600 dark:text-rose-400 font-bold">
              *Cảnh báo an toàn:* Các hầm ủ nông sản kín, giếng sâu lâu ngày tích tụ nhiều khí $CO_2$ và thiếu $O_2$. Tuyệt đối không được xuống hầm/giếng kín khi chưa thông gió hoặc chưa thắp đèn thử nghiệm kiểm tra an toàn!
            </p>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-box-archive"></i> 3 Phương Pháp Bảo Quản Nông Sản Dựa Trên Ức Chế Hô Hấp</span>
          <span class="text-[10px] text-gray-400">Khô - Lạnh - Nồng độ khí</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 650 90" class="w-full min-w-[550px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="20" width="170" height="50" rx="8" fill="#1e293b" stroke="#f59e0b"/>
            <text x="115" y="42" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">1. BẢO QUẢN KHÔ</text>
            <text x="115" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Phơi khô hạt thóc, đậu đỗ</text>

            <rect x="240" y="20" width="170" height="50" rx="8" fill="#1e293b" stroke="#38bdf8"/>
            <text x="325" y="42" fill="#7dd3fc" font-size="11" font-weight="bold" text-anchor="middle">2. BẢO QUẢN LẠNH</text>
            <text x="325" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Kho lạnh rau, củ, quả tươi</text>

            <rect x="450" y="20" width="170" height="50" rx="8" fill="#1e293b" stroke="#34d399"/>
            <text x="535" y="42" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">3. ĐIỀU KHIỂN KHÍ CO2</text>
            <text x="535" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Ức chế nồng độ cao trong kho</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Biện pháp bảo quản hạt thóc, ngô, đậu đỗ phổ biến nhất của người nông dân sau khi thu hoạch là:",
        options: [
          "Ngâm hạt vào nước ấm",
          "Phơi khô hoặc sấy khô hạt để giảm hàm lượng nước",
          "Bọc kín hạt tươi trong túi nylon ẩm",
          "Luộc chín hạt rồi cất vào kho"
        ],
        answer: 1,
        explain: "Phơi sấy khô hạt làm giảm hàm lượng nước, đưa cường độ hô hấp về mức tối thiểu giúp hạt không bị thối mốc hay nảy mầm."
      },
      {
        question: "Tại sao không nên để nhiều hoa tươi và cây cảnh trong phòng ngủ đóng kín cửa vào ban đêm?",
        options: [
          "Vì cây sẽ thải ra nhiều khí oxygen làm mất ngủ",
          "Vì ban đêm cây không quang hợp mà chỉ hô hấp, hút O2 và thải nhiều khí CO2 gây ngạt thở",
          "Vì hoa tỏa nhiệt làm phòng quá nóng",
          "Vì cây hút hết ánh sáng trong phòng"
        ],
        answer: 1,
        explain: "Ban đêm không có ánh sáng, cây xanh ngừng quang hợp mà chỉ hô hấp lấy O2 và thải CO2, gây ngạt thở cho người trong phòng kín."
      }
    ],
    checklist: [
      "Nêu được 4 yếu tố môi trường tác động đến cường độ hô hấp tế bào.",
      "Giải thích được cơ sở khoa học của các biện pháp bảo quản nông sản.",
      "Nắm vững các quy tắc an toàn phòng chống ngạt khí tại hầm kín và giếng sâu."
    ]
  },

  // ==================== BÀI 27 ====================
  {
    id: "bai-27",
    num: "Bài 27",
    chapter: "CHƯƠNG VII: TRAO ĐỔI CHẤT & CHUYỂN HOÁ NĂNG LƯỢNG",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 27. Thực hành: Hô hấp ở thực vật",
    pages: "SGK tr. 116–117",
    objective: "Tiến hành thí nghiệm chứng minh hạt đang nảy mầm thải ra khí carbon dioxide ($CO_2$) làm đục nước vôi trong; giải thích vai trò của nước ấm kích thích nảy mầm.",
    mindmap: [
      { title: "CHUẨN BỊ MẪU HẠT", desc: "Hạt đỗ mẩy ngâm nước ấm 40°C trong 2 giờ -> ủ ẩm 30-35°C cho nứt nanh nảy mầm mạnh.", color: "#059669" },
      { title: "THÍ NGHIỆM ĐỐI CHỨNG", desc: "Chuông A (hạt nảy mầm + cốc nước vôi trong) vs Chuông B (đối chứng: chỉ có cốc nước vôi trong).", color: "#2563eb" },
      { title: "KẾT QUẢ KẾT TỦA", desc: "Nước vôi trong ở chuông A bị VẨN ĐỤC do phản ứng tạo kết tủa CaCO3: CO2 + Ca(OH)2 -> CaCO3 + H2O.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Các bước tiến hành thí nghiệm chứng minh hạt hô hấp thải CO2",
        content: `
          <ol class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-decimal pl-4 mb-3">
            <li>Chọn các hạt đậu xanh hoặc đậu tương chắc mẩy, ngâm vào nước ấm khoảng $40^\\circ\\text{C}$ trong 2 giờ, sau đó ủ trong khăn ẩm ở nhiệt độ phòng để hạt bắt đầu nảy mầm (nứt nanh).</li>
            <li>Đặt đĩa chứa hạt đang nảy mầm cùng một cốc đựng <strong>nước vôi trong</strong> ($Ca(OH)_2$) vào trong chuông thuỷ tinh A, đậy kín nắp.</li>
            <li>Ở chuông thuỷ tinh B (đối chứng), chỉ đặt một cốc đựng nước vôi trong tương tự nhưng không có hạt nảy mầm, đậy kín nắp.</li>
            <li>Đặt hai chuông thí nghiệm ở nhiệt độ phòng trong khoảng 1 đến 2 giờ rồi quan sát.</li>
          </ol>
        `
      },
      {
        title: "2. Hiện tượng và giải thích",
        content: `
          <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-xs text-gray-700 dark:text-gray-300">
            <p><strong>Hiện tượng:</strong> Cốc nước vôi trong ở chuông A xuất hiện <strong>lớp váng vẩn đục màu trắng</strong> trên bề mặt; trong khi cốc nước vôi trong ở chuông B vẫn trong suốt.</p>
            <p class="mt-1.5"><strong>Giải thích:</strong> Hạt đang nảy mầm hô hấp tế bào rất mạnh mẽ, hấp thu $O_2$ và thải ra một lượng lớn khí $CO_2$. Khí $CO_2$ phản ứng với dung dịch nước vôi trong tạo ra kết tủa trắng Calcium carbonate ($CaCO_3$):</p>
            <div class="text-center font-mono text-xs text-emerald-800 dark:text-emerald-300 font-bold my-1">
              $$\\text{CO}_2 + \\text{Ca(OH)}_2 \\rightarrow \\text{CaCO}_3 \\downarrow + \\text{H}_2\\text{O}$$
            </div>
            <p><strong>Kết luận:</strong> Quá trình hô hấp ở thực vật thải ra khí carbon dioxide.</p>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-seedling"></i> Thí Nghiệm Hạt Nảy Mầm Thải Khí CO2 Làm Vẩn Đục Nước Vôi Trong</span>
          <span class="text-[10px] text-gray-400">Chuông A vs Chuông B</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-around">
          <svg viewBox="0 0 450 120" class="w-full min-w-[400px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Bell jar A -->
            <g transform="translate(60, 10)">
              <path d="M 10 90 L 10 40 C 10 10, 110 10, 110 40 L 110 90 Z" fill="none" stroke="#38bdf8" stroke-width="2"/>
              <!-- Seeds plate -->
              <rect x="20" y="70" width="35" height="15" fill="#f59e0b" rx="2"/>
              <text x="37" y="66" fill="#fde68a" font-size="8" text-anchor="middle">Hạt mầm</text>
              <!-- Beaker lime water (cloudy) -->
              <rect x="65" y="60" width="35" height="25" fill="#cbd5e1" stroke="#94a3b8"/>
              <text x="82" y="76" fill="#475569" font-size="7.5" font-weight="bold" text-anchor="middle">Vẩn đục</text>
              <text x="60" y="105" fill="#6ee7b7" font-size="9.5" font-weight="bold" text-anchor="middle">Chuông A (Có hạt)</text>
            </g>
            <!-- Bell jar B -->
            <g transform="translate(260, 10)">
              <path d="M 10 90 L 10 40 C 10 10, 110 10, 110 40 L 110 90 Z" fill="none" stroke="#64748b" stroke-width="2"/>
              <!-- Beaker lime water (clear) -->
              <rect x="42" y="60" width="35" height="25" fill="#e0f2fe" stroke="#94a3b8"/>
              <text x="60" y="76" fill="#0284c7" font-size="7.5" font-weight="bold" text-anchor="middle">Trong suốt</text>
              <text x="60" y="105" fill="#94a3b8" font-size="9.5" font-weight="bold" text-anchor="middle">Chuông B (Đối chứng)</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Chất khí nào do hạt nảy mầm thải ra đã làm đục dung dịch nước vôi trong Ca(OH)2?",
        options: ["Khí Oxygen (O2)", "Khí Carbon dioxide (CO2)", "Khí Nitrogen (N2)", "Khí Hydrogen (H2)"],
        answer: 1,
        explain: "Khí CO2 thải ra từ hô hấp phản ứng với Ca(OH)2 tạo kết tủa trắng CaCO3 làm vẩn đục nước vôi trong."
      },
      {
        question: "Vai trò của chuông thuỷ tinh B (chỉ có cốc nước vôi trong mà không có hạt mầm) là gì?",
        options: [
          "Để trang trí cho đẹp phòng thí nghiệm",
          "Làm đối chứng để chứng minh không khí bình thường không làm đục nước vôi nhanh như khi có hạt mầm",
          "Để hạt mầm ở chuông A mọc nhanh hơn",
          "Để dự phòng nếu chuông A bị vỡ"
        ],
        answer: 1,
        explain: "Chuông B là mẫu đối chứng khoa học để khẳng định hiện tượng vẩn đục ở chuông A là do hạt nảy mầm gây ra."
      }
    ],
    checklist: [
      "Trình bày được các bước chuẩn bị hạt nảy mầm và thiết lập thí nghiệm.",
      "Viết đúng phương trình phản ứng tạo kết tủa CaCO3 giữa CO2 và Ca(OH)2.",
      "Giải thích được ý nghĩa của chuông thí nghiệm đối chứng."
    ]
  },

  // ==================== BÀI 28 ====================
  {
    id: "bai-28",
    num: "Bài 28",
    chapter: "CHƯƠNG VII: TRAO ĐỔI CHẤT & CHUYỂN HOÁ NĂNG LƯỢNG",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 28. Trao đổi khí ở sinh vật",
    pages: "SGK tr. 118–121",
    objective: "Nêu cơ chế khuếch tán trao đổi khí; cấu tạo khí khổng ở lá cây; các cơ quan trao đổi khí ở động vật (da, ống khí, mang, phổi); đường dẫn khí ở người và phòng tránh ngạt khí.",
    mindmap: [
      { title: "CƠ CHẾ KHUẾCH TÁN", desc: "Khí O2 và CO2 di chuyển từ nơi có nồng độ cao sang nơi có nồng độ thấp qua bề mặt trao đổi ẩm ướt.", color: "#059669" },
      { title: "KHÍ KHỔNG Ở LÁ", desc: "2 Tế bào hình hạt đậu, thành trong dày, thành ngoài mỏng. Trương nước -> khe mở; mất nước -> khe đóng.", color: "#2563eb" },
      { title: "CƠ QUAN Ở ĐỘNG VẬT", desc: "Qua bề mặt da (giun đất); hệ thống ống khí (côn trùng); qua mang (cá); qua phổi (chim, thú, người).", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Cơ chế trao đổi khí và cấu tạo khí khổng ở thực vật",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Cơ chế:</strong> Khí $O_2$ và $CO_2$ trao đổi giữa cơ thể và môi trường chủ yếu theo cơ chế <strong>khuếch tán</strong> (từ nơi nồng độ cao đến nơi nồng độ thấp).</li>
            <li><strong>Khí khổng:</strong>
              <br>• Gồm 2 tế bào hình hạt đậu úp vào nhau. Đặc điểm: <em>thành trong (phía khe) dày, thành ngoài mỏng</em>.
              <br>• Khi no nước (trương nước): Thành ngoài dãn nhiều kéo thành trong cong theo $\\rightarrow$ <strong>khe khí khổng mở rộng</strong> $\\rightarrow$ khí khuếch tán và hơi nước thoát ra.
              <br>• Khi thiếu nước: Tế bào xẹp xuống, thành trong duỗi thẳng $\\rightarrow$ <strong>khe khí khổng đóng lại</strong>.
            </li>
          </ul>
        `
      },
      {
        title: "2. Trao đổi khí ở động vật và hệ hô hấp ở người",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 dark:text-gray-300 mb-3">
            <div class="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-700 dark:text-blue-300 block mb-1">Các cơ quan trao đổi khí ở động vật:</strong>
              <ul class="space-y-1 list-disc pl-4">
                <li>Qua bề mặt da ẩm ướt: Giun đất, ếch nhái.</li>
                <li>Qua hệ thống ống khí: Côn trùng (châu chấu, dế).</li>
                <li>Qua mang: Cá, tôm, cua sống trong nước.</li>
                <li>Qua phổi: Bò sát, chim, thú và con người.</li>
              </ul>
            </div>
            <div class="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-700 dark:text-emerald-300 block mb-1">Đường dẫn khí ở người:</strong>
              <p>Mũi $\\rightarrow$ Hầu $\\rightarrow$ Thanh quản $\\rightarrow$ Khí quản $\\rightarrow$ Phế quản $\\rightarrow$ <strong>Phế nang (phổi)</strong>.</p>
              <p class="mt-1">Tại phế nang, $O_2$ từ phế nang khuếch tán vào máu đến tế bào; $CO_2$ từ máu khuếch tán vào phế nang để thở ra ngoài.</p>
            </div>
          </div>
          <p class="text-xs text-rose-600 dark:text-rose-400 font-bold">
            *Cảnh báo an toàn:* Tuyệt đối không sưởi ấm bằng cách đốt than củi trong phòng ngủ đóng kín cửa vì khí $CO$ và $CO_2$ sinh ra sẽ chiếm chỗ $O_2$ gây ngộ độc và tử vong ngạt thở!
          </p>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-lungs"></i> Cơ Chế Đóng Mở Của Khí Khổng Ở Lá Cây</span>
          <span class="text-[10px] text-gray-400">Trương nước (mở) vs Mất nước (đóng)</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-around">
          <svg viewBox="0 0 450 120" class="w-full min-w-[400px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Stoma open -->
            <g transform="translate(60, 20)">
              <path d="M 30 10 C 10 25, 10 55, 30 70 C 15 55, 15 25, 30 10 Z" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
              <path d="M 50 10 C 70 25, 70 55, 50 70 C 65 55, 65 25, 50 10 Z" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
              <ellipse cx="40" cy="40" rx="6" ry="16" fill="#0f172a"/>
              <text x="40" y="95" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">KHÍ KHỔNG MỞ</text>
              <text x="40" y="108" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Tế bào no nước)</text>
            </g>
            <!-- Stoma closed -->
            <g transform="translate(260, 20)">
              <path d="M 35 10 C 20 25, 20 55, 35 70 C 28 55, 28 25, 35 10 Z" fill="#86efac" stroke="#15803d" stroke-width="2"/>
              <path d="M 45 10 C 60 25, 60 55, 45 70 C 52 55, 52 25, 45 10 Z" fill="#86efac" stroke="#15803d" stroke-width="2"/>
              <line x1="40" y1="12" x2="40" y2="68" stroke="#0f172a" stroke-width="1.5"/>
              <text x="40" y="95" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">KHÍ KHỔNG ĐÓNG</text>
              <text x="40" y="108" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Tế bào mất nước)</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Khí O2 và CO2 được trao đổi qua bề mặt các cơ quan hô hấp của sinh vật chủ yếu theo cơ chế nào?",
        options: ["Vận chuyển chủ động cần bơm", "Khuếch tán từ nơi nồng độ cao đến nơi nồng độ thấp", "Thẩm thấu qua màng bọc", "Lực kéo cơ học"],
        answer: 1,
        explain: "Trao đổi khí ở sinh vật tuân theo cơ chế khuếch tán thụ động từ nơi có phân áp/nồng độ cao sang nơi thấp."
      },
      {
        question: "Cơ quan trao đổi khí của loài giun đất là:",
        options: ["Hệ thống ống khí", "Toàn bộ bề mặt da ẩm ướt", "Hai lá phổi", "Các khe mang"],
        answer: 1,
        explain: "Giun đất trao đổi khí trực tiếp qua bề mặt da luôn được giữ ẩm bởi chất nhầy."
      }
    ],
    checklist: [
      "Mô tả cơ chế đóng mở của khí khổng dựa trên cấu tạo thành tế bào hạt đậu.",
      "Kể tên 4 cơ quan trao đổi khí chính ở động vật.",
      "Vẽ sơ đồ đường đi của không khí trong hệ hô hấp người từ mũi đến phế nang."
    ]
  },

  // ==================== BÀI 29 ====================
  {
    id: "bai-29",
    num: "Bài 29",
    chapter: "CHƯƠNG VII: TRAO ĐỔI CHẤT & CHUYỂN HOÁ NĂNG LƯỢNG",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 29. Vai trò của nước và chất dinh dưỡng đối với sinh vật",
    pages: "SGK tr. 122–126",
    objective: "Nêu tính phân cực và vai trò của nước (dung môi, điều hoà nhiệt, vận chuyển); vai trò của khoáng chất ở thực vật (N, P, K); các nhóm dinh dưỡng ở động vật (protein, carbohydrate, lipid, vitamin, khoáng).",
    mindmap: [
      { title: "TÍNH PHÂN CỰC CỦA NƯỚC", desc: "H2O có điện tích phân bố không đều (O tích điện âm nhẹ, H tích điện dương nhẹ) -> hút chất phân cực, hòa tan nhiều chất.", color: "#059669" },
      { title: "VAI TRÒ CỦA NƯỚC", desc: "Chiếm 70-90% khối lượng; dung môi hòa tan; môi trường phản ứng; vận chuyển chất; điều hòa thân nhiệt.", color: "#2563eb" },
      { title: "CHẤT DINH DƯỠNG", desc: "Thực vật: N, P, K và vi lượng. Động vật: Protein (xây tế bào), Carbohydrate (năng lượng), Lipid, Vitamin, Khoáng.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Tính chất và vai trò của nước đối với cơ thể sống",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Tính phân cực của phân tử nước ($H_2O$):</strong> Do nguyên tử Oxygen hút electron mạnh hơn nguyên tử Hydrogen, làm đầu Oxygen tích điện âm nhẹ, đầu Hydrogen tích điện dương nhẹ. Nhờ đó, nước dễ dàng hút các phân tử phân cực khác và trở thành <strong>dung môi hoà tan tuyệt vời</strong> cho hầu hết các chất.</li>
            <li><strong>Vai trò sống còn của nước:</strong>
              <br>• Là thành phần cấu tạo chủ yếu của tế bào và cơ thể sinh vật (chiếm $70 - 90\\%$ khối lượng).
              <br>• Là dung môi hòa tan và môi trường diễn ra mọi phản ứng hoá học, trao đổi chất.
              <br>• Vận chuyển các chất dinh dưỡng, hormone và đào thải chất độc hại.
              <br>• Điều hòa thân nhiệt cho cơ thể (nhờ nhiệt dung riêng cao và sự thoát mồ hôi/hơi nước).
            </li>
          </ul>
        `
      },
      {
        title: "2. Vai trò của chất dinh dưỡng ở thực vật và động vật",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 dark:text-gray-300 mb-3">
            <div class="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-700 dark:text-emerald-300 block mb-1">Dinh dưỡng khoáng ở thực vật:</strong>
              <ul class="space-y-1 list-disc pl-4">
                <li><strong>Nitrogen (N):</strong> Cấu tạo protein, chất diệp lục; thiếu N lá bị vàng, cây còi cọc.</li>
                <li><strong>Phosphorus (P):</strong> Kích thích ra rễ, ra hoa, đậu quả.</li>
                <li><strong>Potassium (K):</strong> Điều tiết đóng mở khí khổng, tăng sức chống rét/sâu bệnh.</li>
                <li><em>Vi khuẩn nốt sần họ Đậu:</em> Cố định $N_2$ tự do từ không khí thành đạm cho cây.</li>
              </ul>
            </div>
            <div class="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-700 dark:text-blue-300 block mb-1">Dinh dưỡng ở động vật và người:</strong>
              <ul class="space-y-1 list-disc pl-4">
                <li><strong>Carbohydrate (đường, tinh bột):</strong> Nguồn cung cấp năng lượng chủ yếu.</li>
                <li><strong>Protein (thịt, cá, trứng, đậu):</strong> Xây dựng cấu trúc tế bào, mô cơ.</li>
                <li><strong>Lipid (chất béo):</strong> Dự trữ năng lượng, cách nhiệt, hấp thu vitamin A, D, E, K.</li>
                <li><strong>Vitamin & Khoáng chất:</strong> Điều hoà trao đổi chất (thiếu Vitamin A gây quáng gà, thiếu Canxi gây còi xương).</li>
              </ul>
            </div>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-droplet"></i> Tính Phân Cực Của Phân Tử Nước (H2O) & Các Vai Trò Cốt Lõi</span>
          <span class="text-[10px] text-gray-400">Dung môi sự sống</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-around">
          <svg viewBox="0 0 450 110" class="w-full min-w-[400px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(60, 15)">
              <circle cx="50" cy="35" r="25" fill="#ef4444"/>
              <text x="50" y="32" fill="#fff" font-size="14" font-weight="bold" text-anchor="middle">O</text>
              <text x="50" y="45" fill="#fecaca" font-size="8.5" text-anchor="middle">(&delta;-)</text>
              <circle cx="20" cy="55" r="14" fill="#38bdf8"/>
              <text x="20" y="59" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">H &delta;+</text>
              <circle cx="80" cy="55" r="14" fill="#38bdf8"/>
              <text x="80" y="59" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">H &delta;+</text>
              <text x="50" y="85" fill="#7dd3fc" font-size="9.5" font-weight="bold" text-anchor="middle">Phân cực điện tích</text>
            </g>
            <g transform="translate(200, 20)">
              <rect x="0" y="0" width="220" height="70" rx="8" fill="#1e293b" stroke="#3b82f6"/>
              <text x="15" y="22" fill="#60a5fa" font-size="10" font-weight="bold">&bull; Dung môi hòa tan phần lớn các chất</text>
              <text x="15" y="40" fill="#60a5fa" font-size="10" font-weight="bold">&bull; Môi trường phản ứng sinh hóa</text>
              <text x="15" y="58" fill="#60a5fa" font-size="10" font-weight="bold">&bull; Vận chuyển chất &amp; Điều hòa nhiệt</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Nguyên nhân chủ yếu làm cho phân tử nước có tính phân cực là gì?",
        options: [
          "Vì nước có thể tồn tại ở cả 3 thể rắn, lỏng, khí",
          "Vì nguyên tử Oxygen hút electron mạnh hơn nguyên tử Hydrogen, làm điện tích phân bố không đều",
          "Vì nước có khối lượng phân tử là 18 amu",
          "Vì nước có chứa nhiều khoáng chất"
        ],
        answer: 1,
        explain: "Độ âm điện của Oxygen lớn hơn Hydrogen kéo đôi electron lệch về phía O, tạo cực âm ở O và cực dương ở H."
      },
      {
        question: "Cây xanh bị thiếu nguyên tố khoáng nào sau đây thì lá sẽ bị vàng úa, sinh trưởng còi cọc do không tổng hợp được chất diệp lục?",
        options: ["Nitrogen (Đạm)", "Calcium (Canxi)", "Sulfur (Lưu huỳnh)", "Silicon"],
        answer: 0,
        explain: "Nitrogen là thành phần cấu tạo bắt buộc của protein và chất diệp lục; thiếu đạm lá cây bị vàng và chậm lớn."
      }
    ],
    checklist: [
      "Giải thích được tính phân cực của phân tử nước.",
      "Nêu được 4 vai trò chính của nước đối với sự sống.",
      "Phân biệt chức năng của 4 nhóm chất dinh dưỡng chính ở người."
    ]
  },

  // ==================== BÀI 30 ====================
  {
    id: "bai-30",
    num: "Bài 30",
    chapter: "CHƯƠNG VII: TRAO ĐỔI CHẤT & CHUYỂN HOÁ NĂNG LƯỢNG",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 30. Trao đổi nước và chất dinh dưỡng ở thực vật",
    pages: "SGK tr. 127–130",
    objective: "Mô tả con đường hấp thụ nước và khoáng qua lông hút của rễ; phân biệt dòng mạch gỗ (đi lên từ rễ) và dòng mạch rây (từ lá đi xuống cơ quan dự trữ); vai trò thoát hơi nước.",
    mindmap: [
      { title: "HẤP THỤ Ở RỄ", desc: "Nước và muối khoáng hòa tan được tế bào lông hút của rễ hấp thụ theo cơ chế thẩm thấu và khuếch tán.", color: "#059669" },
      { title: "MẠCH GỖ (ĐI LÊN)", desc: "Vận chuyển nước và khoáng hòa tan từ rễ -> thân -> lá nhờ lực đẩy rễ, lực mao dẫn và lực kéo thoát hơi nước.", color: "#2563eb" },
      { title: "MẠCH RÂY (ĐI ĐẾN ĐÍCH)", desc: "Vận chuyển chất hữu cơ (sucrose) tổng hợp từ lá đến các cơ quan sử dụng hoặc dự trữ (thân, rễ, củ, quả).", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Con đường hấp thụ và vận chuyển nước, khoáng ở thực vật",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Hấp thụ ở rễ:</strong> Nước và chất khoáng hoà tan trong đất được các <strong>tế bào lông hút</strong> ở rễ cây hấp thụ vào bên trong, đi qua các lớp tế bào vỏ rễ rồi vào mạch gỗ của rễ.</li>
            <li><strong>Dòng mạch gỗ (Dòng đi lên):</strong>
              <br>• Cấu tạo từ các tế bào chết (quản bào và mạch rây hoá gỗ).
              <br>• Vận chuyển <em>nước và muối khoáng</em> một chiều từ rễ lên thân và toả ra khắp các lá.
              <br>• Động lực vận chuyển gồm: Lực đẩy của rễ (áp suất rễ), Lực liên kết mao dẫn trong mạch gỗ, và đặc biệt là <strong>Lực hút do thoát hơi nước ở lá</strong> (động lực chính).
            </li>
            <li><strong>Dòng mạch rây (Dòng vận chuyển chất hữu cơ):</strong>
              <br>• Cấu tạo từ các tế bào sống (ống rây và tế bào kèm).
              <br>• Vận chuyển <em>chất hữu cơ</em> tổng hợp ở lá đến các cơ quan cần sử dụng hoặc dự trữ (rễ, thân củ, củ, hạt, quả).
            </li>
          </ul>
        `
      },
      {
        title: "2. Vai trò của quá trình thoát hơi nước ở lá",
        content: `
          <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-xs text-gray-700 dark:text-gray-300">
            <h5 class="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1.5">3 Vai trò to lớn của thoát hơi nước:</h5>
            <ol class="space-y-1 list-decimal pl-4">
              <li><strong>Tạo lực kéo:</strong> Là động lực chính hút dòng nước và muối khoáng từ rễ lên đến đỉnh các ngọn cây cao hàng chục mét.</li>
              <li><strong>Làm mát bề mặt lá:</strong> Giúp hạ nhiệt độ của lá cây trong những ngày hè nắng gắt, bảo vệ các tế bào và enzyme khỏi bị tổn hại vì nhiệt.</li>
              <li><strong>Tạo điều kiện cho quang hợp:</strong> Khí khổng mở để thoát hơi nước đồng thời tạo đường cho khí $CO_2$ từ không khí khuếch tán vào lá phục vụ quang hợp.</li>
            </ol>
            <p class="mt-2 text-gray-600 dark:text-gray-400">
              *Ứng dụng trồng trọt:* Khi bứng chuyển cây giống đi trồng nơi khác, người ta thường <em>tỉa bớt cành và lá</em> để hạn chế sự thoát hơi nước, tránh cho cây con bị mất nước chết héo.
            </p>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-tree"></i> Hai Con Đường Vận Chuyển Trong Thân Cây: Mạch Gỗ & Mạch Rây</span>
          <span class="text-[10px] text-gray-400">Dòng đi lên vs Dòng đi xuống</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 450 140" class="w-full min-w-[400px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Stem cylinder -->
            <rect x="180" y="10" width="90" height="120" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
            <!-- Xylem (water up) -->
            <rect x="195" y="15" width="25" height="110" fill="#0284c7" rx="3"/>
            <path d="M 207 115 L 207 25" stroke="#fff" stroke-width="2" marker-end="url(#arr-up)"/>
            <text x="140" y="65" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">MẠCH GỖ</text>
            <text x="140" y="80" fill="#bae6fd" font-size="8.5" text-anchor="middle">&uarr; Nước & Khoáng</text>
            <!-- Phloem (sugar down) -->
            <rect x="230" y="15" width="25" height="110" fill="#d97706" rx="3"/>
            <path d="M 242 25 L 242 115" stroke="#fff" stroke-width="2" marker-end="url(#arr-down)"/>
            <text x="310" y="65" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">MẠCH RÂY</text>
            <text x="310" y="80" fill="#fde68a" font-size="8.5" text-anchor="middle">&darr; Chất hữu cơ</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Dòng mạch gỗ trong thân cây có chức năng vận chuyển chất gì và theo chiều nào?",
        options: [
          "Vận chuyển chất hữu cơ từ lá xuống rễ",
          "Vận chuyển nước và muối khoáng một chiều từ rễ lên lá",
          "Vận chuyển khí oxygen từ không khí vào đất",
          "Vận chuyển chất thải ra rễ"
        ],
        answer: 1,
        explain: "Mạch gỗ gồm các tế bào chết chuyên trách vận chuyển nước và muối khoáng hòa tan từ rễ lên thân lá."
      },
      {
        question: "Tại sao khi đem cây non đi trồng ở nơi khác, người ta thường ngắt bớt một số cành lá?",
        options: [
          "Để cho cây nhẹ dễ vận chuyển hơn",
          "Để giảm thiểu sự thoát hơi nước của cây khi rễ mới chưa kịp phục hồi hút nước",
          "Để cây mọc hoa nhanh hơn",
          "Để cây không bị sâu bọ tấn công"
        ],
        answer: 1,
        explain: "Tỉa bớt lá làm giảm diện tích thoát hơi nước, giúp cây non giữ nước không bị héo chết khi rễ chưa bám đất mới."
      }
    ],
    checklist: [
      "Vẽ sơ đồ con đường nước đi từ lông hút của rễ vào mạch gỗ lên lá.",
      "Phân biệt rõ cấu tạo và chiều vận chuyển của mạch gỗ và mạch rây.",
      "Trình bày 3 vai trò sinh học của quá trình thoát hơi nước ở lá cây."
    ]
  },

  // ==================== BÀI 31 ====================
  {
    id: "bai-31",
    num: "Bài 31",
    chapter: "CHƯƠNG VII: TRAO ĐỔI CHẤT & CHUYỂN HOÁ NĂNG LƯỢNG",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 31. Trao đổi nước và chất dinh dưỡng ở động vật",
    pages: "SGK tr. 131–135",
    objective: "Trình tự biến đổi thức ăn trong ống tiêu hoá; con đường hấp thụ nước và bài tiết nước tiểu qua thận; sơ đồ 2 vòng tuần hoàn máu ở người (vòng nhỏ qua phổi và vòng lớn qua các cơ quan).",
    mindmap: [
      { title: "ỐNG TIÊU HOÁ", desc: "Miệng (nhai, enzyme) -> Thực quản -> Dạ dày -> Ruột non (hấp thụ chính vào máu) -> Ruột già (hút nước) -> Hậu môn.", color: "#059669" },
      { title: "2 VÒNG TUẦN HOÀN", desc: "Vòng nhỏ: Tim -> Phổi (thải CO2, nhận O2) -> Tim. Vòng lớn: Tim -> Cơ quan (cung cấp O2/dinh dưỡng) -> Tim.", color: "#2563eb" },
      { title: "BÀI TIẾT Ở THẬN", desc: "Thận lọc máu tạo nước tiểu -> Niệu quản -> Bàng quang (bóng đái) -> Niệu đạo thải ra ngoài.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Quá trình tiêu hoá và hấp thụ chất dinh dưỡng",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Trình tự biến đổi thức ăn trong ống tiêu hoá người:</strong>
              <br>• <strong>Khoang miệng:</strong> Răng cắn xé nghiền nhỏ, lưỡi đảo trộn thức ăn với nước bọt chứa enzyme amylase biến đổi một phần tinh bột chín.
              <br>• <strong>Dạ dày:</strong> Co bóp nhào trộn thức ăn với dịch vị dạ dày có $HCl$ và enzyme pepsin phân giải một phần protein.
              <br>• <strong>Ruột non:</strong> Nơi tiêu hoá hoá học triệt để nhất nhờ dịch tụy, dịch mật và dịch ruột; các chất dinh dưỡng đơn giản được các lông ruột <strong>hấp thụ trực tiếp vào mạch máu và mạch bạch huyết</strong>.
              <br>• <strong>Ruột già:</strong> Hấp thụ lại phần lớn lượng nước, cô đặc bã thức ăn thành phân.
              <br>• <strong>Trực tràng & Hậu môn:</strong> Đào thải phân ra ngoài cơ thể.
            </li>
          </ul>
        `
      },
      {
        title: "2. Hệ tuần hoàn máu và Hai vòng tuần hoàn ở người",
        content: `
          <div class="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 text-xs text-gray-700 dark:text-gray-300 mb-3">
            <h5 class="font-bold text-rose-900 dark:text-rose-300 text-sm mb-1.5">Sơ đồ 2 vòng tuần hoàn máu:</h5>
            <p><strong>1. Vòng tuần hoàn nhỏ (Vòng phổi):</strong>
              <br>Tâm thất phải $\\rightarrow$ Động mạch phổi $\\rightarrow$ Mao mạch phổi (thải $CO_2$, nhận $O_2$ biến máu đỏ thẫm thành đỏ tươi) $\\rightarrow$ Tĩnh mạch phổi $\\rightarrow$ Tâm nhĩ trái.
            </p>
            <p class="mt-2"><strong>2. Vòng tuần hoàn lớn (Vòng cơ thể):</strong>
              <br>Tâm thất trái $\\rightarrow$ Động mạch chủ $\\rightarrow$ Mao mạch các cơ quan (giao $O_2$ và chất dinh dưỡng cho tế bào, nhận $CO_2$ và chất cặn bã biến máu đỏ tươi thành đỏ thẫm) $\\rightarrow$ Tĩnh mạch chủ $\\rightarrow$ Tâm nhĩ phải.
            </p>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-heart-pulse"></i> Sơ Đồ Hai Vòng Tuần Hoàn Máu Ở Cơ Thể Người</span>
          <span class="text-[10px] text-gray-400">Vòng nhỏ (phổi) vs Vòng lớn (cơ quan)</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 450 140" class="w-full min-w-[400px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Lungs at top -->
            <rect x="175" y="10" width="100" height="25" rx="5" fill="#0284c7"/>
            <text x="225" y="27" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">MAO MẠCH PHỔI</text>
            <!-- Heart in middle -->
            <rect x="185" y="55" width="80" height="35" rx="6" fill="#e11d48"/>
            <text x="225" y="77" fill="#fff" font-size="12" font-weight="900" text-anchor="middle">TRÁI TIM</text>
            <!-- Organs at bottom -->
            <rect x="165" y="105" width="120" height="25" rx="5" fill="#059669"/>
            <text x="225" y="122" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">CÁC CƠ QUAN TẾ BÀO</text>
            <!-- Pulmonary circulation paths -->
            <path d="M 195 55 L 195 35" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr-up)"/>
            <path d="M 255 35 L 255 55" stroke="#f43f5e" stroke-width="2" marker-end="url(#arr-down)"/>
            <text x="135" y="45" fill="#7dd3fc" font-size="8.5" text-anchor="middle">Vòng nhỏ (phổi)</text>
            <!-- Systemic circulation paths -->
            <path d="M 255 90 L 255 105" stroke="#f43f5e" stroke-width="2" marker-end="url(#arr-down)"/>
            <path d="M 195 105 L 195 90" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr-up)"/>
            <text x="315" y="100" fill="#fda4af" font-size="8.5" text-anchor="middle">Vòng lớn (cơ thể)</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Cơ quan nào trong ống tiêu hoá của người đóng vai trò hấp thụ chủ yếu các chất dinh dưỡng vào máu?",
        options: ["Khoang miệng", "Dạ dày", "Ruột non", "Ruột già"],
        answer: 2,
        explain: "Ruột non có diện tích bề mặt tiếp xúc khổng lồ nhờ hàng triệu nếp gấp và lông ruột, là nơi hấp thụ phần lớn chất dinh dưỡng."
      },
      {
        question: "Trong vòng tuần hoàn lớn, máu giàu khí oxygen từ tâm thất trái được bơm vào mạch máu nào đầu tiên để đi nuôi các cơ quan?",
        options: ["Động mạch phổi", "Tĩnh mạch phổi", "Động mạch chủ", "Tĩnh mạch chủ"],
        answer: 2,
        explain: "Máu đỏ tươi giàu O2 từ tâm thất trái được tống vào động mạch chủ để chia nhánh đi tới các tế bào toàn cơ thể."
      }
    ],
    checklist: [
      "Kể tên theo thứ tự các cơ quan trong ống tiêu hóa của người.",
      "Vẽ sơ đồ và mô tả đường đi của máu trong 2 vòng tuần hoàn.",
      "Nêu chức năng của thận, niệu quản, bàng quang trong bài tiết nước tiểu."
    ]
  },

  // ==================== BÀI 32 ====================
  {
    id: "bai-32",
    num: "Bài 32",
    chapter: "CHƯƠNG VII: TRAO ĐỔI CHẤT & CHUYỂN HOÁ NĂNG LƯỢNG",
    branch: "Sinh học",
    branchTag: "SINH HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 32. Thực hành: Chứng minh thân vận chuyển nước và lá thoát hơi nước",
    pages: "SGK tr. 136–137",
    objective: "Thực hiện thí nghiệm cắm cuống cần tây/hoa trắng vào nước pha màu để chứng minh thân vận chuyển nước qua mạch gỗ; thí nghiệm trùm túi nylon vào cành có lá để chứng minh lá thoát hơi nước.",
    mindmap: [
      { title: "TN 1: THÂN VẬN CHUYỂN", desc: "Cắm cuống cần tây/hoa cúc trắng vào cốc nước màu đỏ -> sau 30-60 phút cánh hoa hóa đỏ, cắt ngang cuống thấy bó mạch gỗ nhuộm đỏ.", color: "#059669" },
      { title: "TN 2: LÁ THOÁT HƠI NƯỚC", desc: "Cây A (còn nguyên lá) vs Cây B (ngắt hết lá) trùm túi nylon trong suốt đặt ngoài sáng -> Túi cây A đọng nhiều giọt nước.", color: "#2563eb" },
      { title: "KỸ NĂNG THỰC HÀNH", desc: "Sử dụng dao lam cắt lát mỏng ngang thân; quan sát bằng kính lúp; buộc kín miệng túi nylon quanh gốc cuống lá.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Thí nghiệm chứng minh thân vận chuyển nước",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Tiến hành:</strong> Cắt một cành hoa cúc trắng (hoặc cuống cần tây), cắm vào cốc nước có pha mực đỏ hoặc dung dịch phẩm màu tím; đặt nơi thoáng mát trong khoảng 30 đến 60 phút.</li>
            <li><strong>Hiện tượng quan sát:</strong>
              <br>• Cánh hoa màu trắng dần chuyển sang màu đỏ.
              <br>• Dùng dao lam cắt lát ngang cuống cần tây, soi dưới kính lúp thấy các <strong>chấm tròn của bó mạch gỗ bị nhuộm màu đỏ</strong>.
            </li>
            <li><strong>Kết luận:</strong> Thân và cuống lá có các mạch gỗ làm nhiệm vụ vận chuyển nước và chất tan từ dưới lên trên.</li>
          </ul>
        `
      },
      {
        title: "2. Thí nghiệm chứng minh lá thoát hơi nước",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Tiến hành:</strong> Chuẩn bị 2 cành cây cùng loại; cành A giữ nguyên toàn bộ lá, cành B ngắt bỏ toàn bộ lá (đối chứng). Dùng túi nylon trong suốt trùm kín cả cành và buộc chặt miệng túi; đặt 2 cành cây ngoài trời nắng khoảng 30 phút.</li>
            <li><strong>Hiện tượng quan sát:</strong>
              <br>• Ở túi nylon trùm cành A (còn lá): Thành trong của túi nylon bị mờ sương và <strong>xuất hiện rất nhiều giọt nước ngưng tụ</strong> đọng lại.
              <br>• Ở túi nylon trùm cành B (bỏ lá): Thành túi vẫn trong suốt, hầu như không có giọt nước nào ngưng tụ.
            </li>
            <li><strong>Kết luận:</strong> Quá trình thoát hơi nước của cây xanh diễn ra chủ yếu qua bề mặt các lá cây.</li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-droplet"></i> Thí Nghiệm Trùm Túi Nylon Chứng Minh Lá Thoát Hơi Nước</span>
          <span class="text-[10px] text-gray-400">Cành có lá (nhiều giọt nước) vs Cành ngắt lá</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-around">
          <svg viewBox="0 0 450 120" class="w-full min-w-[400px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Branch A with leaves -->
            <g transform="translate(60, 10)">
              <rect x="20" y="80" width="40" height="30" fill="#94a3b8" rx="2"/>
              <line x1="40" y1="80" x2="40" y2="20" stroke="#15803d" stroke-width="3"/>
              <circle cx="30" cy="40" r="10" fill="#22c55e"/>
              <circle cx="50" cy="50" r="10" fill="#22c55e"/>
              <circle cx="35" cy="65" r="10" fill="#22c55e"/>
              <!-- Nylon bag -->
              <path d="M 15 20 C 15 5, 65 5, 65 20 L 60 78 L 20 78 Z" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3"/>
              <!-- Water drops -->
              <circle cx="28" cy="25" r="2" fill="#38bdf8"/>
              <circle cx="45" cy="30" r="2" fill="#38bdf8"/>
              <circle cx="55" cy="45" r="2.5" fill="#38bdf8"/>
              <circle cx="30" cy="55" r="2" fill="#38bdf8"/>
              <text x="40" y="105" fill="#7dd3fc" font-size="9" font-weight="bold" text-anchor="middle">Cành A (Nhiều giọt nước)</text>
            </g>
            <!-- Branch B without leaves -->
            <g transform="translate(260, 10)">
              <rect x="20" y="80" width="40" height="30" fill="#94a3b8" rx="2"/>
              <line x1="40" y1="80" x2="40" y2="20" stroke="#78350f" stroke-width="3"/>
              <!-- Nylon bag empty -->
              <path d="M 15 20 C 15 5, 65 5, 65 20 L 60 78 L 20 78 Z" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3"/>
              <text x="40" y="105" fill="#94a3b8" font-size="9" font-weight="bold" text-anchor="middle">Cành B (Không có nước)</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Khi cắt ngang cuống lá cần tây đã cắm trong cốc nước màu đỏ, phần nào của cuống bị nhuộm màu?",
        options: [
          "Toàn bộ phần vỏ ngoài",
          "Các bó mạch gỗ dẫn nước",
          "Chỉ có phần lõi xốp ở giữa",
          "Không có phần nào bị nhuộm màu"
        ],
        answer: 1,
        explain: "Nước màu được các mạch gỗ hút và vận chuyển lên trên, nên chỉ các bó mạch gỗ bị nhuộm màu đỏ."
      },
      {
        question: "Tại sao trong thí nghiệm chứng minh lá thoát hơi nước, người ta lại dùng túi nylon trong suốt mà không dùng túi nylon màu đen?",
        options: [
          "Để ánh sáng mặt trời chiếu vào giúp lá quang hợp và dễ quan sát các giọt nước đọng bên trong",
          "Vì túi nylon trong suốt rẻ tiền hơn",
          "Vì túi nylon đen không giữ được hơi nước",
          "Để lá cây không bị nóng"
        ],
        answer: 0,
        explain: "Túi trong suốt cho ánh sáng đi qua giúp cây duy trì hoạt động trao đổi chất và người làm thí nghiệm dễ quan sát giọt nước ngưng tụ."
      }
    ],
    checklist: [
      "Thực hiện thành công thí nghiệm cắm cành hoa vào nước màu chứng minh mạch gỗ.",
      "Thiết lập đúng thí nghiệm đối chứng chứng minh lá thoát hơi nước bằng túi nylon.",
      "Viết báo cáo ghi nhận hiện tượng và kết luận khoa học."
    ]
  }
];
