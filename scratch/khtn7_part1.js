// KHTN 7 - Part 1: Bài 1, Chương I (Bài 2, 3, 4) & Chương II (Bài 5, 6, 7)
// Mở đầu & Hóa học (Nguyên tử, Bảng tuần hoàn, Phân tử, Liên kết, Hóa trị)

module.exports = [
  // ==================== BÀI 1 ====================
  {
    id: "bai-1",
    num: "Bài 1",
    chapter: "MỞ ĐẦU",
    branch: "Kĩ năng khoa học",
    branchTag: "KĨ NĂNG",
    branchColor: "bg-blue-600",
    title: "Bài 1. Phương pháp và kĩ năng học tập môn Khoa học tự nhiên",
    pages: "SGK tr. 6–13",
    objective: "Nắm vững quy trình 5 bước tìm hiểu tự nhiên; vận dụng các kĩ năng tiến trình (quan sát, phân loại, liên kết, đo, dự báo); sử dụng thành thạo cổng quang điện, đồng hồ hiện số và viết báo cáo thực hành.",
    mindmap: [
      { title: "5 BƯỚC TÌM HIỂU", desc: "1. Đề xuất vấn đề -> 2. Dự đoán khoa học -> 3. Lập kế hoạch -> 4. Thực hiện -> 5. Báo cáo & thảo luận", color: "#2563eb" },
      { title: "KĨ NĂNG TIẾN TRÌNH", desc: "Quan sát thu thập số liệu; Phân loại đối tượng; Liên kết dữ liệu; Đo lường chính xác; Dự báo định lượng", color: "#059669" },
      { title: "THIẾT BỊ ĐO ĐẠT", desc: "Cổng quang điện hồng ngoại + Đồng hồ hiện số đo thời gian (chế độ A↔B, nút RESET, thang đo 99,99s - 0,01s)", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Phương pháp tìm hiểu tự nhiên (Quy trình 5 bước)",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Nghiên cứu khoa học tự nhiên là quá trình tìm hiểu khám phá các quy luật vận động của thế giới tự nhiên qua 5 bước liên tiếp:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs text-center my-3">
            <div class="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <span class="w-6 h-6 rounded-full bg-blue-600 text-white font-bold inline-flex items-center justify-center mb-1 text-[11px]">1</span>
              <strong class="block text-blue-900 dark:text-blue-300 font-bold">Đề xuất vấn đề</strong>
              <p class="text-gray-600 dark:text-gray-400 mt-1">Quan sát sự vật, hiện tượng và đặt câu hỏi tìm hiểu.</p>
            </div>
            <div class="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800">
              <span class="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold inline-flex items-center justify-center mb-1 text-[11px]">2</span>
              <strong class="block text-indigo-900 dark:text-indigo-300 font-bold">Dự đoán khoa học</strong>
              <p class="text-gray-600 dark:text-gray-400 mt-1">Dựa trên tri thức đã có để suy đoán câu trả lời.</p>
            </div>
            <div class="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
              <span class="w-6 h-6 rounded-full bg-purple-600 text-white font-bold inline-flex items-center justify-center mb-1 text-[11px]">3</span>
              <strong class="block text-purple-900 dark:text-purple-300 font-bold">Lập kế hoạch</strong>
              <p class="text-gray-600 dark:text-gray-400 mt-1">Chọn thực nghiệm, thiết bị; giữ yếu tố ổn định (biến kiểm soát).</p>
            </div>
            <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <span class="w-6 h-6 rounded-full bg-amber-600 text-white font-bold inline-flex items-center justify-center mb-1 text-[11px]">4</span>
              <strong class="block text-amber-900 dark:text-amber-300 font-bold">Thực hiện kế hoạch</strong>
              <p class="text-gray-600 dark:text-gray-400 mt-1">Tiến hành đo đạc, thu thập số liệu; đánh giá giả thuyết.</p>
            </div>
            <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <span class="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold inline-flex items-center justify-center mb-1 text-[11px]">5</span>
              <strong class="block text-emerald-900 dark:text-emerald-300 font-bold">Báo cáo & Thảo luận</strong>
              <p class="text-gray-600 dark:text-gray-400 mt-1">Viết báo cáo, trình bày kết quả và bảo vệ kết luận.</p>
            </div>
          </div>
          <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border text-xs text-gray-700 dark:text-gray-300">
            <strong>Ví dụ điển hình SGK:</strong> Kiểm tra ma sát trượt có phụ thuộc diện tích tiếp xúc không. Sử dụng cùng miếng gỗ, mặt bàn và lực kéo đều bằng lực kế; chỉ thay đổi mặt tiếp xúc (mặt lớn vs mặt nhỏ). Kết quả chứng minh: Lực ma sát trượt <em>không thay đổi đáng kể</em> khi thay đổi diện tích tiếp xúc.
          </div>
        `
      },
      {
        title: "2. Kĩ năng tiến trình học tập môn KHTN",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 dark:text-gray-300">
            <div class="p-3 rounded-lg bg-white dark:bg-gray-800 border">
              <strong class="text-blue-600 dark:text-blue-400 block mb-1">Quan sát & Phân loại:</strong>
              Dùng giác quan và dụng cụ để ghi nhận đặc điểm; nhận diện điểm tương đồng và khác biệt để sắp xếp vào các nhóm theo tiêu chí nhất quán.
            </div>
            <div class="p-3 rounded-lg bg-white dark:bg-gray-800 border">
              <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">Liên kết & Dự báo:</strong>
              Kết nối số liệu đo với kiến thức nền tảng để phát hiện quy luật; đưa ra suy luận định tính hoặc định lượng về hiện tượng có thể xảy ra.
            </div>
            <div class="p-3 rounded-lg bg-white dark:bg-gray-800 border">
              <strong class="text-amber-600 dark:text-amber-400 block mb-1">Đo lường & Sai số:</strong>
              Ước lượng trước khi đo để chọn dụng cụ có Giới hạn đo (GHĐ) và Độ chia nhỏ nhất (ĐCNN) phù hợp; đo ít nhất 3 lần để lấy giá trị trung bình.
            </div>
            <div class="p-3 rounded-lg bg-white dark:bg-gray-800 border">
              <strong class="text-purple-600 dark:text-purple-400 block mb-1">Cổng quang điện & Đồng hồ hiện số:</strong>
              Thiết bị thu/phát hồng ngoại kết nối đồng hồ bấm giây hiện số. Chế độ $A \\leftrightarrow B$ tự động đo thời gian chuyển động giữa hai cổng với độ chính xác tới $0,01\\text{ s}$.
            </div>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-white">
        <div class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-stopwatch-20"></i> Sơ Đồ Thiết Bị Đo Thời Gian Bằng Cổng Quang Điện</span>
          <span class="text-[10px] text-gray-400">SGK KNTT Tr. 6-13</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 700 130" class="w-full min-w-[600px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <line x1="50" y1="90" x2="650" y2="90" stroke="#475569" stroke-width="6"/>
            <!-- Gate A -->
            <rect x="180" y="30" width="20" height="60" fill="#3b82f6" rx="3"/>
            <text x="190" y="20" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">CỔNG A</text>
            <circle cx="190" cy="50" r="4" fill="#ef4444"/>
            <!-- Gate B -->
            <rect x="450" y="30" width="20" height="60" fill="#3b82f6" rx="3"/>
            <text x="460" y="20" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">CỔNG B</text>
            <circle cx="460" cy="50" r="4" fill="#ef4444"/>
            <!-- Cart moving -->
            <rect x="80" y="55" width="55" height="30" fill="#10b981" rx="4"/>
            <circle cx="95" cy="88" r="6" fill="#047857"/>
            <circle cx="120" cy="88" r="6" fill="#047857"/>
            <text x="107" y="73" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Xe thí nghiệm</text>
            <!-- Distance s -->
            <line x1="190" y1="110" x2="460" y2="110" stroke="#f59e0b" stroke-width="2" marker-start="url(#arr-left)" marker-end="url(#arr-right)"/>
            <text x="325" y="125" fill="#fde68a" font-size="10.5" font-weight="bold" text-anchor="middle">Khoảng cách s (Thước đo)</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Bước thứ 2 trong quy trình 5 bước tìm hiểu tự nhiên là bước nào?",
        options: ["Đề xuất vấn đề", "Đưa ra dự đoán khoa học", "Lập kế hoạch kiểm tra", "Viết báo cáo thảo luận"],
        answer: 1,
        explain: "Quy trình gồm: 1. Đề xuất vấn đề -> 2. Đưa ra dự đoán khoa học -> 3. Lập kế hoạch -> 4. Thực hiện kế hoạch -> 5. Viết báo cáo, thảo luận."
      },
      {
        question: "Khi đo thời gian xe chuyển động giữa 2 cổng quang điện A và B bằng đồng hồ hiện số, ta cài đặt đồng hồ ở chế độ nào?",
        options: ["Chế độ A", "Chế độ B", "Chế độ A ↔ B", "Chế độ RESET"],
        answer: 2,
        explain: "Chế độ A ↔ B dùng để đo khoảng thời gian vật di chuyển từ cổng quang điện A đến cổng quang điện B."
      }
    ],
    checklist: [
      "Trình bày đúng 5 bước của phương pháp tìm hiểu tự nhiên.",
      "Phân biệt được kĩ năng quan sát, phân loại, đo lường và dự báo.",
      "Biết cách vận hành cổng quang điện và đồng hồ hiện số ở chế độ A ↔ B.",
      "Viết được cấu trúc một bản báo cáo thực hành khoa học tự nhiên."
    ]
  },

  // ==================== BÀI 2 ====================
  {
    id: "bai-2",
    num: "Bài 2",
    chapter: "CHƯƠNG I: NGUYÊN TỬ & BẢNG TUẦN HOÀN",
    branch: "Hóa học",
    branchTag: "HÓA HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 2. Nguyên tử",
    pages: "SGK tr. 14–18",
    objective: "Mô tả cấu tạo nguyên tử theo mô hình Rutherford – Bohr; phân biệt hạt proton, neutron, electron; hiểu nguyên tử trung hòa điện ($p = e$) và tính khối lượng nguyên tử theo đơn vị amu.",
    mindmap: [
      { title: "HẠT NHÂN (Ở TÂM)", desc: "Gồm proton mang điện tích +1 và neutron không mang điện. Khối lượng tập trung tại hạt nhân.", color: "#dc2626" },
      { title: "VỎ NGUYÊN TỬ", desc: "Gồm các electron mang điện tích -1 quay quanh hạt nhân theo từng lớp: lớp 1 tối đa 2e, lớp 2 tối đa 8e.", color: "#2563eb" },
      { title: "TRUNG HÒA & AMU", desc: "Nguyên tử trung hòa điện: Số p = Số e. Khối lượng nguyên tử m ≈ p + n (tính bằng đơn vị amu).", color: "#059669" }
    ],
    sections: [
      {
        title: "1. Mô hình Rutherford – Bohr và cấu tạo nguyên tử",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Nguyên tử là những hạt vô cùng nhỏ bé cấu tạo nên mọi chất. Nguyên tử có cấu tạo rỗng:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
            <div class="p-3.5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <strong class="text-red-700 dark:text-red-300 text-sm block mb-1">
                <i class="fa-solid fa-circle-dot mr-1"></i> Hạt nhân nguyên tử
              </strong>
              <ul class="text-gray-700 dark:text-gray-300 space-y-1 list-disc pl-4">
                <li>Nằm ở tâm nguyên tử, kích thước rất nhỏ so với toàn bộ nguyên tử.</li>
                <li><strong>Proton (p):</strong> Mang điện tích dương ($+1$).</li>
                <li><strong>Neutron (n):</strong> Không mang điện tích ($0$).</li>
                <li>Số đơn vị điện tích hạt nhân kí hiệu là $Z$ ($Z = \\text{số proton}$).</li>
              </ul>
            </div>
            <div class="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-700 dark:text-blue-300 text-sm block mb-1">
                <i class="fa-solid fa-atom mr-1"></i> Lớp vỏ nguyên tử
              </strong>
              <ul class="text-gray-700 dark:text-gray-300 space-y-1 list-disc pl-4">
                <li>Gồm các <strong>Electron (e)</strong> mang điện tích âm ($-1$).</li>
                <li>Sắp xếp thành từng lớp đồng tâm quanh hạt nhân:
                  <br>• Lớp 1 (trong cùng): Tối đa <strong>2 electron</strong>.
                  <br>• Lớp 2: Tối đa <strong>8 electron</strong>.
                </li>
                <li>Nguyên tử luôn <strong>trung hòa về điện</strong>: $\\text{Số proton} = \\text{Số electron}$.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Khối lượng nguyên tử và đơn vị amu",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Khối lượng nguyên tử được đo bằng đơn vị khối lượng nguyên tử, kí hiệu là <strong>amu</strong> (atomic mass unit):
          </p>
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li>$1\\text{ proton} \\approx 1\\text{ amu}$; $1\\text{ neutron} \\approx 1\\text{ amu}$.</li>
            <li>$1\\text{ electron} \\approx 0,00055\\text{ amu}$ (rất nhỏ bé, có thể bỏ qua).</li>
            <li>Do đó: <strong>Khối lượng nguyên tử gần bằng khối lượng của hạt nhân</strong> (tổng khối lượng các hạt proton và neutron).</li>
            <li><em>Ví dụ:</em> Nguyên tử Aluminium (Nhôm) có 13p, 14n $\\Rightarrow M \\approx 13 + 14 = 27\\text{ amu}$. Nguyên tử Copper (Đồng) có 29p, 36n $\\Rightarrow M \\approx 29 + 36 = 65\\text{ amu}$.</li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-atom"></i> Mô Hình Cấu Tạo Nguyên Tử Carbon (6p, 6n, 6e)</span>
          <span class="text-[10px] text-gray-400">Rutherford – Bohr</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 300 220" class="w-64 h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Shell 2 -->
            <circle cx="150" cy="110" r="85" fill="none" stroke="#475569" stroke-width="1.5" stroke-dasharray="4"/>
            <!-- Shell 1 -->
            <circle cx="150" cy="110" r="48" fill="none" stroke="#64748b" stroke-width="1.5"/>
            <!-- Nucleus -->
            <circle cx="150" cy="110" r="22" fill="#ef4444"/>
            <text x="150" y="108" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">6p + 6n</text>
            <text x="150" y="120" fill="#fde047" font-size="7.5" font-weight="bold" text-anchor="middle">Hạt nhân</text>
            <!-- Shell 1 electrons (2e) -->
            <circle cx="150" cy="62" r="5" fill="#38bdf8"/>
            <circle cx="150" cy="158" r="5" fill="#38bdf8"/>
            <!-- Shell 2 electrons (4e) -->
            <circle cx="65" cy="110" r="5" fill="#38bdf8"/>
            <circle cx="235" cy="110" r="5" fill="#38bdf8"/>
            <circle cx="150" cy="25" r="5" fill="#38bdf8"/>
            <circle cx="150" cy="195" r="5" fill="#38bdf8"/>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Hạt nào sau đây trong nguyên tử mang điện tích dương?",
        options: ["Electron", "Proton", "Neutron", "Hạt nhân không mang điện"],
        answer: 1,
        explain: "Proton mang điện tích dương (+1), electron mang điện tích âm (-1), neutron không mang điện."
      },
      {
        question: "Nguyên tử Sodium (Na) có 11 proton trong hạt nhân. Số electron ở lớp ngoài cùng của nguyên tử Na là bao nhiêu?",
        options: ["1 electron", "2 electron", "8 electron", "11 electron"],
        answer: 0,
        explain: "Na có 11 electron phân bố: lớp 1 có 2e, lớp 2 có 8e, lớp 3 (ngoài cùng) có 1e (11 = 2 + 8 + 1)."
      }
    ],
    checklist: [
      "Mô tả được các thành phần chính của nguyên tử: hạt nhân và vỏ electron.",
      "Ghi nhớ điện tích của proton (+1), electron (-1) và neutron (0).",
      "Vẽ được sơ đồ phân bố electron các lớp của 20 nguyên tố đầu.",
      "Tính được khối lượng nguyên tử xấp xỉ bằng tổng khối lượng hạt nhân (amu)."
    ]
  },

  // ==================== BÀI 3 ====================
  {
    id: "bai-3",
    num: "Bài 3",
    chapter: "CHƯƠNG I: NGUYÊN TỬ & BẢNG TUẦN HOÀN",
    branch: "Hóa học",
    branchTag: "HÓA HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 3. Nguyên tố hoá học",
    pages: "SGK tr. 19–22",
    objective: "Hiểu khái niệm nguyên tố hoá học là tập hợp nguyên tử cùng số proton; đọc và viết đúng tên, kí hiệu hoá học của 20 nguyên tố đầu tiên; nhận biết vai trò của các nguyên tố trong cơ thể người.",
    mindmap: [
      { title: "ĐẶC TRƯNG NGUYÊN TỐ", desc: "Tập hợp các nguyên tử có cùng số proton. Số proton là số hiệu nguyên tử đặc trưng.", color: "#059669" },
      { title: "KÍ HIỆU HÓA HỌC", desc: "Gồm 1 hoặc 2 chữ cái (chữ đầu viết hoa, chữ sau viết thường). Một số theo tiếng Latin (Na, K, Fe).", color: "#2563eb" },
      { title: "20 NGUYÊN TỐ ĐẦU", desc: "H, He, Li, Be, B, C, N, O, F, Ne, Na, Mg, Al, Si, P, S, Cl, Ar, K, Ca.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Khái niệm nguyên tố hoá học và kí hiệu hoá học",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            <strong>Nguyên tố hoá học</strong> là tập hợp những nguyên tử cùng loại, có <strong>cùng số proton</strong> trong hạt nhân.
          </p>
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li>Các nguyên tử của cùng một nguyên tố có thể có số neutron khác nhau, nhưng bắt buộc phải có số proton bằng nhau.</li>
            <li>Hiện nay con người đã biết đến <strong>118 nguyên tố hoá học</strong>.</li>
            <li><strong>Kí hiệu hoá học:</strong> Do IUPAC quy định, lấy 1 hoặc 2 chữ cái trong tên gọi tiếng Anh hoặc Latin của nguyên tố. Chữ cái đầu luôn viết hoa, chữ thứ hai (nếu có) viết thường.
              <br><em>Ví dụ:</em> Hydrogen (H), Oxygen (O), Carbon (C), Iron (Fe - Ferrum), Sodium (Na - Natrium), Potassium (K - Kalium).
            </li>
          </ul>
        `
      },
      {
        title: "2. Bảng 20 nguyên tố hoá học đầu tiên cần thuộc",
        content: `
          <div class="overflow-x-auto my-2">
            <table class="w-full text-xs text-left border-collapse border border-gray-200 dark:border-gray-700">
              <thead>
                <tr class="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200">
                  <th class="p-2 border">Số hiệu (p)</th>
                  <th class="p-2 border">Tên gọi (IUPAC)</th>
                  <th class="p-2 border">Kí hiệu</th>
                  <th class="p-2 border">Số hiệu (p)</th>
                  <th class="p-2 border">Tên gọi (IUPAC)</th>
                  <th class="p-2 border">Kí hiệu</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700 text-gray-700 dark:text-gray-300">
                <tr><td class="p-1.5 border">1</td><td class="p-1.5 border">Hydrogen</td><td class="p-1.5 border font-bold">H</td><td class="p-1.5 border">11</td><td class="p-1.5 border">Sodium</td><td class="p-1.5 border font-bold">Na</td></tr>
                <tr><td class="p-1.5 border">2</td><td class="p-1.5 border">Helium</td><td class="p-1.5 border font-bold">He</td><td class="p-1.5 border">12</td><td class="p-1.5 border">Magnesium</td><td class="p-1.5 border font-bold">Mg</td></tr>
                <tr><td class="p-1.5 border">3</td><td class="p-1.5 border">Lithium</td><td class="p-1.5 border font-bold">Li</td><td class="p-1.5 border">13</td><td class="p-1.5 border">Aluminium</td><td class="p-1.5 border font-bold">Al</td></tr>
                <tr><td class="p-1.5 border">4</td><td class="p-1.5 border">Beryllium</td><td class="p-1.5 border font-bold">Be</td><td class="p-1.5 border">14</td><td class="p-1.5 border">Silicon</td><td class="p-1.5 border font-bold">Si</td></tr>
                <tr><td class="p-1.5 border">5</td><td class="p-1.5 border">Boron</td><td class="p-1.5 border font-bold">B</td><td class="p-1.5 border">15</td><td class="p-1.5 border">Phosphorus</td><td class="p-1.5 border font-bold">P</td></tr>
                <tr><td class="p-1.5 border">6</td><td class="p-1.5 border">Carbon</td><td class="p-1.5 border font-bold">C</td><td class="p-1.5 border">16</td><td class="p-1.5 border">Sulfur</td><td class="p-1.5 border font-bold">S</td></tr>
                <tr><td class="p-1.5 border">7</td><td class="p-1.5 border">Nitrogen</td><td class="p-1.5 border font-bold">N</td><td class="p-1.5 border">17</td><td class="p-1.5 border">Chlorine</td><td class="p-1.5 border font-bold">Cl</td></tr>
                <tr><td class="p-1.5 border">8</td><td class="p-1.5 border">Oxygen</td><td class="p-1.5 border font-bold">O</td><td class="p-1.5 border">18</td><td class="p-1.5 border">Argon</td><td class="p-1.5 border font-bold">Ar</td></tr>
                <tr><td class="p-1.5 border">9</td><td class="p-1.5 border">Fluorine</td><td class="p-1.5 border font-bold">F</td><td class="p-1.5 border">19</td><td class="p-1.5 border">Potassium</td><td class="p-1.5 border font-bold">K</td></tr>
                <tr><td class="p-1.5 border">10</td><td class="p-1.5 border">Neon</td><td class="p-1.5 border font-bold">Ne</td><td class="p-1.5 border">20</td><td class="p-1.5 border">Calcium</td><td class="p-1.5 border font-bold">Ca</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">
            <strong>Vai trò sinh học:</strong> 4 nguyên tố C, H, O, N chiếm khoảng 96% khối lượng cơ thể người. Iodine (I) rất quan trọng cho hoạt động của tuyến giáp; Iron (Fe) cấu tạo huyết cầu tố trong máu.
          </p>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-chart-pie"></i> Thành Phần Khối Lượng Các Nguyên Tố Trong Cơ Thể Người</span>
          <span class="text-[10px] text-gray-400">96% gồm C, H, O, N</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 500 110" class="w-full min-w-[450px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="25" width="280" height="50" rx="8" fill="#0284c7"/>
            <text x="160" y="55" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Oxygen (O) ~ 65%</text>

            <rect x="305" y="25" width="85" height="50" rx="8" fill="#059669"/>
            <text x="347" y="55" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">Carbon ~18%</text>

            <rect x="395" y="25" width="45" height="50" rx="8" fill="#d97706"/>
            <text x="417" y="55" fill="#ffffff" font-size="9.5" font-weight="bold" text-anchor="middle">H ~10%</text>

            <rect x="445" y="25" width="35" height="50" rx="8" fill="#7c3aed"/>
            <text x="462" y="55" fill="#ffffff" font-size="8.5" font-weight="bold" text-anchor="middle">N 3%</text>
            <text x="250" y="98" fill="#94a3b8" font-size="9.5" text-anchor="middle">Còn lại 4% gồm Ca, P, K, S, Na, Cl, Mg, Fe, I...</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Tiêu chí nào sau đây quyết định hai nguyên tử bất kì thuộc cùng một nguyên tố hoá học?",
        options: ["Có cùng số neutron", "Có cùng số electron ngoài cùng", "Có cùng số proton trong hạt nhân", "Có cùng khối lượng nguyên tử"],
        answer: 2,
        explain: "Nguyên tố hoá học là tập hợp các nguyên tử có cùng số proton trong hạt nhân."
      },
      {
        question: "Kí hiệu hoá học của nguyên tố Potassium (Kali) và Sodium (Natri) lần lượt là:",
        options: ["P và S", "Po và So", "K và Na", "Pt và Sd"],
        answer: 2,
        explain: "Potassium có kí hiệu là K (từ tên Latin Kalium), Sodium có kí hiệu là Na (từ tên Latin Natrium)."
      }
    ],
    checklist: [
      "Định nghĩa đúng nguyên tố hoá học là gì.",
      "Đọc tên và viết đúng kí hiệu hoá học của 20 nguyên tố đầu tiên.",
      "Nhận biết được 4 nguyên tố chính cấu tạo cơ thể người (C, H, O, N).",
      "Nêu được vai trò quan trọng của nguyên tố vi lượng Iodine và Iron."
    ]
  },

  // ==================== BÀI 4 ====================
  {
    id: "bai-4",
    num: "Bài 4",
    chapter: "CHƯƠNG I: NGUYÊN TỬ & BẢNG TUẦN HOÀN",
    branch: "Hóa học",
    branchTag: "HÓA HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 4. Sơ lược bảng tuần hoàn các nguyên tố hoá học",
    pages: "SGK tr. 23–31",
    objective: "Hiểu 3 nguyên tắc sắp xếp bảng tuần hoàn; cấu tạo ô nguyên tố, chu kì, nhóm; phân loại và xác định vị trí kim loại, phi kim, khí hiếm trong bảng.",
    mindmap: [
      { title: "NGUYÊN TẮC SẮP XẾP", desc: "Theo chiều tăng dần điện tích hạt nhân (Z). Cùng chu kì có cùng số lớp e; Cùng nhóm có số e ngoài cùng bằng nhau.", color: "#059669" },
      { title: "CẤU TẠO BẢNG TUẦN HOÀN", desc: "118 Ô nguyên tố; 7 Chu kì (chu kì 1-3 nhỏ, 4-7 lớn); 8 Nhóm A và các nhóm B.", color: "#2563eb" },
      { title: "PHÂN LOẠI 3 VÙNG", desc: "Kim loại (bên trái & giữa bảng, Hg thể lỏng); Phi kim (góc trên bên phải); Khí hiếm (nhóm VIIIA, 8e ngoài cùng bền vững).", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Nguyên tắc sắp xếp và cấu tạo bảng tuần hoàn",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Nguyên tắc sắp xếp:</strong>
              <br>1. Xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử ($Z$).
              <br>2. Các nguyên tố có cùng số lớp electron được xếp vào cùng một hàng (chu kì).
              <br>3. Các nguyên tố có tính chất hoá học tương tự nhau được xếp vào cùng một cột (nhóm).
            </li>
            <li><strong>Ô nguyên tố:</strong> Cho biết Số hiệu nguyên tử ($Z = \\text{số proton} = \\text{số electron} = \\text{số thứ tự ô}$), Kí hiệu hoá học, Tên nguyên tố và Khối lượng nguyên tử.</li>
            <li><strong>Chu kì (hàng ngang):</strong> Gồm 7 chu kì. <em>Số thứ tự chu kì = Số lớp electron</em>. (Chu kì 1: 2 nguyên tố, chu kì 2: 8 nguyên tố, chu kì 3: 8 nguyên tố).</li>
            <li><strong>Nhóm (cột dọc):</strong> Các nguyên tố nhóm A có <em>Số electron lớp ngoài cùng = Số thứ tự của nhóm</em>.
              <br>• Nhóm IA: Kim loại kiềm (1e ngoài cùng).
              <br>• Nhóm IIA: Kim loại kiềm thổ (2e ngoài cùng).
              <br>• Nhóm VIIA: Halogen (7e ngoài cùng).
              <br>• Nhóm VIIIA: Khí hiếm (8e ngoài cùng bền vững, riêng He có 2e).
            </li>
          </ul>
        `
      },
      {
        title: "2. Phân loại vị trí các nguyên tố trong bảng tuần hoàn",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-center mb-3">
            <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-700 dark:text-blue-300 block mb-1">KIM LOẠI</strong>
              <p class="text-gray-600 dark:text-gray-400">Chiếm hơn 80% số nguyên tố, tập trung ở góc trái và giữa bảng (hầu hết nhóm IA, IIA, IIIA và các nhóm B). Trừ Thủy ngân (Hg) thể lỏng, đa số ở thể rắn.</p>
            </div>
            <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <strong class="text-amber-700 dark:text-amber-300 block mb-1">PHI KIM</strong>
              <p class="text-gray-600 dark:text-gray-400">Nằm ở góc phía trên bên phải của bảng (nhóm VA, VIA, VIIA và một số nguyên tố nhóm IVA, IIIA, cùng với Hydrogen ở nhóm IA).</p>
            </div>
            <div class="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
              <strong class="text-purple-700 dark:text-purple-300 block mb-1">KHÍ HIẾM</strong>
              <p class="text-gray-600 dark:text-gray-400">Nằm ở cột cuối cùng bên phải (nhóm VIIIA): He, Ne, Ar, Kr, Xe, Rn, Og. Có lớp vỏ ngoài cùng bão hòa bền vững nên rất trơ về mặt hoá học.</p>
            </div>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-table-cells"></i> Cấu Trúc Thông Tin Của 1 Ô Nguyên Tố Trong Bảng Tuần Hoàn</span>
          <span class="text-[10px] text-gray-400">Ví dụ Ô số 6: Carbon</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-center">
          <svg viewBox="0 0 200 200" class="w-48 h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="16" fill="#1e293b" stroke="#10b981" stroke-width="3"/>
            <text x="25" y="38" fill="#38bdf8" font-size="16" font-weight="900">6</text>
            <text x="180" y="35" fill="#94a3b8" font-size="9" text-anchor="end">Số hiệu (Z)</text>
            <text x="100" y="110" fill="#ffffff" font-size="52" font-weight="900" text-anchor="middle">C</text>
            <text x="100" y="145" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">CARBON</text>
            <text x="100" y="175" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">12,011 amu</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Số thứ tự của chu kì trong bảng tuần hoàn cho biết thông tin gì về cấu tạo nguyên tử?",
        options: ["Số proton trong hạt nhân", "Số electron lớp ngoài cùng", "Số lớp electron của nguyên tử", "Khối lượng nguyên tử"],
        answer: 2,
        explain: "Số thứ tự của chu kì bằng số lớp electron trong vỏ nguyên tử của nguyên tố đó."
      },
      {
        question: "Kim loại duy nhất ở thể lỏng trong điều kiện thường là nguyên tố nào?",
        options: ["Aluminium (Nhôm)", "Mercury (Thủy ngân)", "Iron (Sắt)", "Copper (Đồng)"],
        answer: 1,
        explain: "Mercury (Thủy ngân, Hg) là kim loại duy nhất ở thể lỏng ở nhiệt độ phòng."
      }
    ],
    checklist: [
      "Nêu rõ 3 nguyên tắc sắp xếp các nguyên tố trong bảng tuần hoàn.",
      "Tra cứu được ô nguyên tố để biết tên, kí hiệu, số hiệu và khối lượng.",
      "Xác định được số lớp e từ chu kì và số e ngoài cùng từ nhóm A.",
      "Chỉ ra được vị trí các nhóm kim loại kiềm (IA), halogen (VIIA) và khí hiếm (VIIIA)."
    ]
  },

  // ==================== BÀI 5 ====================
  {
    id: "bai-5",
    num: "Bài 5",
    chapter: "CHƯƠNG II: PHÂN TỬ & LIÊN KẾT HÓA HỌC",
    branch: "Hóa học",
    branchTag: "HÓA HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 5. Phân tử, đơn chất, hợp chất",
    pages: "SGK tr. 32–35",
    objective: "Phân biệt đơn chất và hợp chất; nêu khái niệm phân tử; tính khối lượng phân tử (amu) bằng tổng khối lượng các nguyên tử thành phần.",
    mindmap: [
      { title: "ĐƠN CHẤT", desc: "Tạo nên từ 1 nguyên tố hoá học duy nhất. Ví dụ: Cu, Fe, H2, O2, than chì, kim cương.", color: "#059669" },
      { title: "HỢP CHẤT", desc: "Tạo nên từ 2 hay nhiều nguyên tố hoá học liên kết. Ví dụ: H2O, NaCl, CO2, CaCO3, glucose.", color: "#2563eb" },
      { title: "KHỐI LƯỢNG PHÂN TỬ", desc: "Hạt đại diện cho chất. Khối lượng phân tử (amu) = Tổng khối lượng các nguyên tử trong phân tử.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Đơn chất và Hợp chất",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
            <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-700 dark:text-emerald-300 text-sm block mb-1">ĐƠN CHẤT</strong>
              <p class="text-gray-700 dark:text-gray-300">Là chất được tạo nên từ duy nhất <strong>một nguyên tố hoá học</strong>.</p>
              <ul class="text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-4 mt-2">
                <li>Đơn chất kim loại: Đồng (Cu), Sắt (Fe), Nhôm (Al), Vàng (Au)...</li>
                <li>Đơn chất phi kim: Khí Oxygen ($O_2$), Hydrogen ($H_2$), Nitrogen ($N_2$), Than chì ($C$)...</li>
                <li>Một nguyên tố có thể tạo nhiều đơn chất dạng thù hình (vd: Carbon tạo than chì và kim cương).</li>
              </ul>
            </div>
            <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-700 dark:text-blue-300 text-sm block mb-1">HỢP CHẤT</strong>
              <p class="text-gray-700 dark:text-gray-300">Là chất được tạo nên từ <strong>hai hay nhiều nguyên tố hoá học</strong> khác nhau liên kết lại.</p>
              <ul class="text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-4 mt-2">
                <li>Nước ($H_2O$ gồm 2 nguyên tố H và O).</li>
                <li>Muối ăn ($NaCl$ gồm Na và Cl).</li>
                <li>Khí Carbon dioxide ($CO_2$ gồm C và O).</li>
                <li>Đá vôi ($CaCO_3$ gồm Ca, C và O).</li>
                <li>Hợp chất hữu cơ: Glucose ($C_6H_{12}O_6$), Đường saccarose, Protein...</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Phân tử và cách tính khối lượng phân tử",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            <strong>Phân tử</strong> là hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và thể hiện đầy đủ tính chất hoá học của chất đó.
          </p>
          <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-xs text-gray-700 dark:text-gray-300">
            <h5 class="font-bold text-amber-900 dark:text-amber-300 text-sm mb-1.5">Cách tính khối lượng phân tử (amu):</h5>
            <p class="mb-2"><strong>Khối lượng phân tử = Tổng khối lượng của tất cả các nguyên tử có mặt trong phân tử.</strong></p>
            <ul class="space-y-1 list-disc pl-4">
              <li>Phân tử Nước ($H_2O$): $2 \\times 1 + 16 = 18\\text{ amu}$.</li>
              <li>Phân tử Khí Carbon dioxide ($CO_2$): $12 + 2 \\times 16 = 44\\text{ amu}$.</li>
              <li>Phân tử Khí Methane ($CH_4$): $12 + 4 \\times 1 = 16\\text{ amu}$.</li>
              <li>Phân tử Muối ăn ($NaCl$): $23 + 35,5 = 58,5\\text{ amu}$.</li>
            </ul>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-shapes"></i> Mô Hình Hạt: Phân Biệt Đơn Chất (O2) Và Hợp Chất (H2O)</span>
          <span class="text-[10px] text-gray-400">Phân tử học liệu</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-around">
          <svg viewBox="0 0 450 110" class="w-full min-w-[400px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- O2 -->
            <g transform="translate(60, 20)">
              <circle cx="30" cy="35" r="24" fill="#ef4444"/>
              <text x="30" y="40" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">O</text>
              <circle cx="68" cy="35" r="24" fill="#ef4444"/>
              <text x="68" y="40" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">O</text>
              <text x="49" y="82" fill="#fda4af" font-size="11" font-weight="bold" text-anchor="middle">ĐƠN CHẤT (O2)</text>
            </g>
            <!-- H2O -->
            <g transform="translate(260, 20)">
              <circle cx="60" cy="32" r="24" fill="#ef4444"/>
              <text x="60" y="37" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">O</text>
              <circle cx="30" cy="54" r="14" fill="#38bdf8"/>
              <text x="30" y="58" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">H</text>
              <circle cx="90" cy="54" r="14" fill="#38bdf8"/>
              <text x="90" y="58" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">H</text>
              <text x="60" y="82" fill="#7dd3fc" font-size="11" font-weight="bold" text-anchor="middle">HỢP CHẤT (H2O)</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Chất nào sau đây là đơn chất?",
        options: ["Khí Carbon dioxide (CO2)", "Nước cất (H2O)", "Khí Oxygen (O2)", "Muối ăn (NaCl)"],
        answer: 2,
        explain: "Khí Oxygen (O2) chỉ tạo nên từ 1 nguyên tố O nên là đơn chất. Các chất còn lại tạo từ 2 nguyên tố nên là hợp chất."
      },
      {
        question: "Khối lượng phân tử của khí Carbon dioxide (CO2) bằng bao nhiêu? (Biết C = 12 amu, O = 16 amu)",
        options: ["28 amu", "44 amu", "32 amu", "40 amu"],
        answer: 1,
        explain: "Khối lượng phân tử CO2 = 12 + 2 × 16 = 44 amu."
      }
    ],
    checklist: [
      "Phân biệt rõ ràng đơn chất và hợp chất dựa vào thành phần nguyên tố.",
      "Định nghĩa đúng khái niệm phân tử.",
      "Tính toán thành thạo khối lượng phân tử các hợp chất phổ biến theo amu."
    ]
  },

  // ==================== BÀI 6 ====================
  {
    id: "bai-6",
    num: "Bài 6",
    chapter: "CHƯƠNG II: PHÂN TỬ & LIÊN KẾT HÓA HỌC",
    branch: "Hóa học",
    branchTag: "HÓA HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 6. Giới thiệu về liên kết hoá học",
    pages: "SGK tr. 36–39",
    objective: "Hiểu xu hướng đạt cấu hình electron bền vững của khí hiếm; phân biệt cơ chế tạo thành liên kết ion (cho - nhận electron) và liên kết cộng hoá trị (dùng chung electron).",
    mindmap: [
      { title: "MỤC TIÊU LIÊN KẾT", desc: "Nguyên tử tạo liên kết để có 8e ngoài cùng (hoặc 2e như He) bền vững giống khí hiếm.", color: "#059669" },
      { title: "LIÊN KẾT ION", desc: "Kim loại nhường e tạo ion dương (+) + Phi kim nhận e tạo ion âm (-). Hai ion trái dấu hút nhau tĩnh điện. Vd: NaCl, MgO.", color: "#dc2626" },
      { title: "LIÊN KẾT CỘNG HOÁ TRỊ", desc: "Các nguyên tử góp chung 1 hoặc nhiều cặp electron. Vd: H2 (1 cặp), O2 (2 cặp), H2O, NH3, CO2.", color: "#2563eb" }
    ],
    sections: [
      {
        title: "1. Liên kết ion (Cho và nhận electron)",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Nguyên tử kim loại có xu hướng <strong>nhường electron</strong> để trở thành ion dương ($+$). Nguyên tử phi kim có xu hướng <strong>nhận electron</strong> để trở thành ion âm ($-$).
          </p>
          <div class="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 text-xs text-gray-700 dark:text-gray-300 mb-3">
            <strong class="text-rose-900 dark:text-rose-300 font-bold block mb-1">Ví dụ tạo thành phân tử Muối ăn (NaCl):</strong>
            <p>1. Nguyên tử Na ($11e$) nhường $1e$ ở lớp ngoài cùng $\\rightarrow$ tạo ion dương $Na^+$ có $8e$ lớp ngoài bền vững.</p>
            <p>2. Nguyên tử Cl ($17e$) nhận $1e$ đó $\\rightarrow$ tạo ion âm $Cl^-$ có $8e$ lớp ngoài bền vững.</p>
            <p>3. Hai ion trái dấu $Na^+$ và $Cl^-$ hút nhau bởi lực hút tĩnh điện tạo nên liên kết ion trong tinh thể $NaCl$.</p>
            <p class="mt-2 text-gray-600 dark:text-gray-400"><em>Tính chất chung:</em> Hợp chất ion thường ở thể rắn ở điều kiện thường, khó bay hơi, khó nóng chảy; khi tan trong nước tạo dung dịch dẫn điện.</p>
          </div>
        `
      },
      {
        title: "2. Liên kết cộng hoá trị (Dùng chung electron)",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            <strong>Liên kết cộng hoá trị</strong> là liên kết giữa các nguyên tử được hình thành bởi <strong>một hay nhiều cặp electron dùng chung</strong>.
          </p>
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Phân tử $H_2$:</strong> Mỗi nguyên tử H góp $1e$, tạo $1$ cặp electron dùng chung ($H:H$ hay $H-H$), cả hai đạt cấu hình $2e$ bền của He.</li>
            <li><strong>Phân tử $O_2$:</strong> Mỗi nguyên tử O góp $2e$, tạo $2$ cặp electron dùng chung ($O::O$ hay $O=O$), cả hai đạt $8e$ bền.</li>
            <li><strong>Phân tử $H_2O$:</strong> Nguyên tử O góp chung $1$ cặp electron với mỗi nguyên tử H.</li>
            <li><strong>Phân tử $CO_2$:</strong> Nguyên tử C góp chung $2$ cặp electron với mỗi trong hai nguyên tử O ($O=C=O$).</li>
            <li><em>Tính chất chung:</em> Chất cộng hoá trị có thể ở thể khí ($O_2, CO_2$), lỏng ($H_2O$) hoặc rắn (đường); thường có nhiệt độ nóng chảy và nhiệt độ sôi thấp hơn hợp chất ion.</li>
          </ul>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-link"></i> So Sánh Cơ Chế: Liên Kết Ion (NaCl) vs Liên Kết Cộng Hóa Trị (H2)</span>
          <span class="text-[10px] text-gray-400">SGK KNTT Tr. 36-39</span>
        </div>
        <div class="w-full overflow-x-auto py-2 flex justify-around">
          <svg viewBox="0 0 550 110" class="w-full min-w-[500px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <!-- Ion NaCl -->
            <g transform="translate(30, 20)">
              <circle cx="35" cy="35" r="22" fill="#3b82f6"/>
              <text x="35" y="40" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">Na⁺</text>
              <path d="M 62 35 L 88 35" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3" marker-end="url(#arr-right)"/>
              <circle cx="115" cy="35" r="25" fill="#10b981"/>
              <text x="115" y="40" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">Cl⁻</text>
              <text x="75" y="80" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">HÚT TRÁI DẤU (ION)</text>
            </g>
            <!-- Covalent H2 -->
            <g transform="translate(320, 20)">
              <circle cx="40" cy="35" r="25" fill="none" stroke="#38bdf8" stroke-width="2"/>
              <circle cx="70" cy="35" r="25" fill="none" stroke="#38bdf8" stroke-width="2"/>
              <circle cx="55" cy="27" r="3.5" fill="#facc15"/>
              <circle cx="55" cy="43" r="3.5" fill="#facc15"/>
              <text x="25" y="39" fill="#fff" font-size="11" font-weight="bold">H</text>
              <text x="82" y="39" fill="#fff" font-size="11" font-weight="bold">H</text>
              <text x="55" y="80" fill="#7dd3fc" font-size="10" font-weight="bold" text-anchor="middle">DÙNG CHUNG ELECTRON</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Liên kết ion được hình thành do yếu tố nào sau đây?",
        options: [
          "Lực hút tĩnh điện giữa các ion mang điện tích trái dấu",
          "Các cặp electron dùng chung giữa hai nguyên tử",
          "Lực đẩy giữa các hạt nhân nguyên tử",
          "Sự chuyển động hỗn loạn của các electron tự do"
        ],
        answer: 0,
        explain: "Liên kết ion hình thành do lực hút tĩnh điện giữa ion dương (kim loại nhường e) và ion âm (phi kim nhận e)."
      },
      {
        question: "Trong phân tử nước (H2O), liên kết giữa nguyên tử Oxygen và các nguyên tử Hydrogen thuộc loại liên kết nào?",
        options: ["Liên kết kim loại", "Liên kết ion", "Liên kết cộng hoá trị", "Liên kết phi kim"],
        answer: 2,
        explain: "Trong phân tử H2O, nguyên tử O dùng chung 1 cặp electron với mỗi nguyên tử H tạo nên liên kết cộng hoá trị."
      }
    ],
    checklist: [
      "Giải thích được vì sao các nguyên tử có xu hướng tạo liên kết hoá học.",
      "Trình bày cơ chế tạo thành liên kết ion qua ví dụ NaCl hoặc MgO.",
      "Trình bày cơ chế tạo thành liên kết cộng hoá trị qua ví dụ H2, O2, H2O.",
      "So sánh tính chất cơ bản giữa hợp chất ion và chất cộng hoá trị."
    ]
  },

  // ==================== BÀI 7 ====================
  {
    id: "bai-7",
    num: "Bài 7",
    chapter: "CHƯƠNG II: PHÂN TỬ & LIÊN KẾT HÓA HỌC",
    branch: "Hóa học",
    branchTag: "HÓA HỌC",
    branchColor: "bg-emerald-600",
    title: "Bài 7. Hoá trị và công thức hoá học",
    pages: "SGK tr. 40–44",
    objective: "Viết và đọc công thức hoá học; tính % khối lượng nguyên tố; vận dụng quy tắc hoá trị ($x \\cdot a = y \\cdot b$) lập công thức hoá học hợp chất hai nguyên tố.",
    mindmap: [
      { title: "CÔNG THỨC HÓA HỌC", desc: "Kí hiệu nguyên tố kèm chỉ số chân. Vd: H2, NaCl, CaCO3. Cho biết tỉ lệ nguyên tử và khối lượng phân tử.", color: "#059669" },
      { title: "% KHỐI LƯỢNG NGUYÊN TỐ", desc: "%A = (m_A trong phân tử / M_phân tử) × 100%. Xác định độ giàu chất dinh dưỡng hoặc hàm lượng quặng.", color: "#2563eb" },
      { title: "QUY TẮC HOÁ TRỊ", desc: "Hợp chất AxBy với hoá trị a, b: x · a = y · b. Suy ra tỉ lệ x/y = b/a tối giản.", color: "#d97706" }
    ],
    sections: [
      {
        title: "1. Công thức hoá học và tính % khối lượng nguyên tố",
        content: `
          <ul class="text-xs text-gray-700 dark:text-gray-300 space-y-1.5 list-disc pl-4 mb-3">
            <li><strong>Công thức hoá học:</strong> Biểu diễn chất bằng 1 hay nhiều kí hiệu nguyên tố và chỉ số ở chân bên phải (chỉ số 1 không ghi).
              <br>• Đơn chất: $Cu, Fe, He, C, O_2, N_2...$
              <br>• Hợp chất: $H_2O, CO_2, NaCl, CaCO_3...$
            </li>
            <li><strong>Ý nghĩa công thức hoá học:</strong> Cho biết nguyên tố tạo nên chất, số nguyên tử mỗi nguyên tố trong 1 phân tử và tính được khối lượng phân tử.
              <br><em>Ví dụ $CaCO_3$:</em> Gồm 3 nguyên tố Ca, C, O; tỉ lệ số nguyên tử là $1:1:3$; $M = 40 + 12 + 3 \\times 16 = 100\\text{ amu}$.
            </li>
            <li><strong>Công thức tính % khối lượng nguyên tố:</strong>
              $$\\%\\text{ nguyên tố} = \\frac{\\text{Khối lượng của nguyên tố đó trong phân tử}}{M_{\\text{phân tử}}} \\times 100\\%$$
              <em>Ví dụ $KNO_3$ ($M = 39 + 14 + 3 \\times 16 = 101\\text{ amu}$):</em>
              <br>• $\\%K = \\frac{39}{101} \\times 100\\% \\approx 38,6\\%$
              <br>• $\\%N = \\frac{14}{101} \\times 100\\% \\approx 13,9\\%$
              <br>• $\\%O = 100\\% - (38,6\\% + 13,9\\%) \\approx 47,5\\%$
            </li>
          </ul>
        `
      },
      {
        title: "2. Hoá trị và quy tắc hoá trị",
        content: `
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            <strong>Hoá trị</strong> là con số biểu thị khả năng liên kết của nguyên tử nguyên tố này với nguyên tử nguyên tố khác. Quy ước chọn hoá trị của $H$ là I, hoá trị của $O$ là II.
          </p>
          <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-xs text-gray-700 dark:text-gray-300">
            <h5 class="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1.5">Quy tắc hoá trị:</h5>
            <p class="mb-2">Trong hợp chất hai nguyên tố $A_x^a B_y^b$ (với $a, b$ là hoá trị tương ứng của $A$ và $B$):</p>
            <div class="p-2 rounded bg-white dark:bg-gray-800 font-bold text-center text-sm text-rose-600 dark:text-rose-400 border mb-2">
              x · a = y · b &nbsp;&Rightarrow;&nbsp; x / y = b / a (rút gọn tối giản)
            </div>
            <ul class="space-y-1 list-disc pl-4">
              <li><em>Ví dụ 1:</em> Lập CTHH của Sulfur (hoá trị IV) và Oxygen (hoá trị II):
                <br>$x \\times IV = y \\times II \\Rightarrow \\frac{x}{y} = \\frac{II}{IV} = \\frac{1}{2} \\Rightarrow x = 1, y = 2 \\Rightarrow$ CTHH là <strong>$SO_2$</strong>.
              </li>
              <li><em>Ví dụ 2:</em> Lập CTHH của Potassium (I) và Oxygen (II):
                <br>$\\frac{x}{y} = \\frac{II}{I} = \\frac{2}{1} \\Rightarrow$ CTHH là <strong>$K_2O$</strong>.
              </li>
              <li><em>Áp dụng cho nhóm nguyên tử:</em> Trong $H_2SO_4$, nhóm $(SO_4)$ có hoá trị II vì $x \\cdot a = 2 \\times I = 1 \\times b \\Rightarrow b = II$.</li>
            </ul>
          </div>
        `
      }
    ],
    svg: `
      <div class="my-4 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-white">
        <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
          <span><i class="fa-solid fa-calculator"></i> Quy Trình Lập Công Thức Hóa Học Theo Quy Tắc Hóa Trị</span>
          <span class="text-[10px] text-gray-400">AxBy: x · a = y · b</span>
        </div>
        <div class="w-full overflow-x-auto py-2">
          <svg viewBox="0 0 650 110" class="w-full min-w-[550px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="25" width="130" height="60" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="85" y="50" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">BƯỚC 1</text>
            <text x="85" y="70" fill="#f8fafc" font-size="10" text-anchor="middle">Viết dạng AxBy</text>

            <path d="M 150 55 L 180 55" stroke="#60a5fa" stroke-width="2"/>

            <rect x="180" y="25" width="140" height="60" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="250" y="50" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">BƯỚC 2</text>
            <text x="250" y="70" fill="#f8fafc" font-size="10" text-anchor="middle">Áp dụng: x·a = y·b</text>

            <path d="M 320 55 L 350 55" stroke="#60a5fa" stroke-width="2"/>

            <rect x="350" y="25" width="130" height="60" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="415" y="50" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">BƯỚC 3</text>
            <text x="415" y="70" fill="#f8fafc" font-size="10" text-anchor="middle">Tỉ lệ tối giản x/y</text>

            <path d="M 480 55 L 510 55" stroke="#60a5fa" stroke-width="2"/>

            <rect x="510" y="25" width="120" height="60" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
            <text x="570" y="50" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">KẾT LUẬN</text>
            <text x="570" y="70" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Viết CTHH chuẩn</text>
          </svg>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "Biết nguyên tố Aluminium có hoá trị III và Oxygen có hoá trị II. Công thức hoá học chuẩn của hợp chất tạo bởi hai nguyên tố này là:",
        options: ["AlO", "Al2O3", "Al3O2", "Al2O"],
        answer: 1,
        explain: "Theo quy tắc hoá trị: x / y = II / III = 2 / 3 ⇒ Công thức hoá học là Al2O3."
      },
      {
        question: "Trong hợp chất khí Methane (CH4), phần trăm khối lượng của nguyên tố Carbon là bao nhiêu? (C = 12, H = 1)",
        options: ["25%", "50%", "75%", "80%"],
        answer: 2,
        explain: "Khối lượng phân tử CH4 = 12 + 4 = 16 amu. %C = (12 / 16) × 100% = 75%."
      }
    ],
    checklist: [
      "Nêu được ý nghĩa của công thức hoá học.",
      "Tính được phần trăm khối lượng của các nguyên tố trong hợp chất.",
      "Vận dụng quy tắc hoá trị để lập công thức hoá học và tìm hoá trị chưa biết.",
      "Nhớ hoá trị của một số nhóm nguyên tử quen thuộc: OH (I), NO3 (I), SO4 (II), CO3 (II)."
    ]
  }
];
