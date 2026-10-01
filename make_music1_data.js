// make_music1_data.js
// 16 Detailed Lessons with 64 Interactive Quizzes for Âm Nhạc Lớp 1 (SGK Kết nối tri thức với cuộc sống - GDPT 2018)

const lessons = [
  // ==========================================
  // CHỦ ĐỀ 1: ÂM THANH KÌ DIỆU
  // ==========================================
  {
    id: "bai-1",
    lessonNum: 1,
    topicNum: 1,
    topicName: "Chủ đề 1: Âm thanh kì diệu",
    tag: "Học hát & Khám phá",
    title: "Bài 1: Học hát bài 'Vào rừng hoa' (Việt Anh) & Khám phá âm thanh To - Nhỏ",
    objectives: [
      "Hát đúng giai điệu, lời ca hồn nhiên, trong sáng của bài hát Vào rừng hoa (nhạc và lời: Việt Anh).",
      "Khám phá và nhận biết được các âm thanh kì diệu trong tự nhiên và cuộc sống quanh em.",
      "Phân biệt được hai sắc thái âm thanh cơ bản: Âm thanh To (mạnh) và Âm thanh Nhỏ (khẽ).",
      "Thực hành gõ đệm theo nhịp và bước chân nhịp nhàng như đi dạo chơi trong rừng hoa."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-tree text-sky-600"></i> Giới thiệu bài hát "Vào rừng hoa"
          </h4>
          <p>
            Bài hát <strong>"Vào rừng hoa"</strong> do tác giả <strong>Việt Anh</strong> sáng tác mở đầu chương trình Âm nhạc 1. Giai điệu rộn ràng, vui tươi vẽ nên khung cảnh các bạn nhỏ nắm tay nhau bước vào khu rừng ngập tràn sắc hoa đua nở và tiếng chim ca ríu rít.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-music text-sky-500"></i> Lời ca trong sáng của bài hát
            </h5>
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-serif italic text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1.5 leading-relaxed">
              <p>Cầm tay nhau, cùng đi chơi, đi khắp nơi hái hoa tươi.</p>
              <p>Vào đây chơi, rừng hoa tươi, chim líu lo hót vang lừng.</p>
              <p>Cầm đóa hoa, cùng dâng tặng, cô giáo hiền mến thương nhiều!</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-volume-high text-sky-500"></i> Khám phá Âm thanh To - Nhỏ
            </h5>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              Trong tự nhiên, có âm thanh vang dội mạnh mẽ nhưng cũng có âm thanh thì thầm êm ái:
            </p>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>Âm thanh To:</strong> Tiếng sấm nổ đùng đoàng, tiếng trống trường vang tùng tùng, tiếng còi tàu hỏa tu tu.</li>
              <li><strong>Âm thanh Nhỏ:</strong> Tiếng suối róc rách, tiếng lá rơi xào xạc, tiếng gió thổi rì rào, tiếng mẹ thì thầm ru bé ngủ.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-gamepad"></i> Trò chơi âm nhạc: "Gió to - Gió nhỏ"
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Khi cô hô "Gió nhỏ":</strong> Cả lớp làm tiếng "Vu... vu..." thật khẽ và đung đưa tay nhẹ nhàng.</p>
          <p><strong>Khi cô hô "Gió to":</strong> Cả lớp làm tiếng "Ào... ào..." thật to và giơ cao hai tay lắc mạnh.</p>
          <p>Trò chơi giúp các em phản xạ nhanh nhạy với cường độ âm thanh trong cuộc sống.</p>
        </div>
      </div>
    `,
    summary: "Bài hát 'Vào rừng hoa' của Việt Anh tươi vui, trong sáng; các em bước đầu làm quen với thế giới âm thanh và biết phân biệt âm thanh To (mạnh) và âm thanh Nhỏ (khẽ).",
    quizzes: [
      {
        question: "Bài hát 'Vào rừng hoa' là sáng tác của tác giả nào?",
        options: ["Tác giả Việt Anh", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phạm Tuyên", "Nhạc sĩ Bùi Đình Thảo"],
        correct: 0,
        explanation: "Bài hát 'Vào rừng hoa' được sáng tác bởi tác giả Việt Anh với giai điệu rộn ràng, hồn nhiên."
      },
      {
        question: "Các bạn nhỏ trong bài hát vào rừng hoa để làm gì?",
        options: ["Hái hoa tươi mang về tặng cô giáo hiền", "Đi tìm chú gấu đen", "Đi hái nấm độc", "Đi chặt cành cây"],
        correct: 0,
        explanation: "Lời ca viết: 'Cầm đóa hoa, cùng dâng tặng, cô giáo hiền mến thương nhiều!'."
      },
      {
        question: "Âm thanh nào sau đây là ví dụ về âm thanh To trong cuộc sống?",
        options: [
          "Tiếng sấm sét nổ đùng đoàng trên trời",
          "Tiếng chiếc lá khô rơi nhẹ trên sân",
          "Tiếng đồng hồ đeo tay tích tắc",
          "Tiếng gió thoảng nhẹ qua rèm cửa"
        ],
        correct: 0,
        explanation: "Tiếng sấm sét vang rền là âm thanh có cường độ to và mạnh mẽ nhất."
      },
      {
        question: "Khi hát bài 'Vào rừng hoa', nét mặt và cử chỉ của em nên thể hiện như thế nào?",
        options: ["Vui tươi, rạng rỡ, mỉm cười và nhún chân nhịp nhàng", "Cúi gằm mặt xuống đất", "Nhắm tịt hai mắt lại", "Khóc nhè và giận dỗi"],
        correct: 0,
        explanation: "Tính chất bài hát rất tươi vui, yêu đời nên nét mặt cần rạng rỡ, vui tươi."
      }
    ]
  },

  {
    id: "bai-2",
    lessonNum: 2,
    topicNum: 1,
    topicName: "Chủ đề 1: Âm thanh kì diệu",
    tag: "Đọc nhạc & Ký hiệu bàn tay",
    title: "Bài 2: Đọc nhạc: Bậc thang Đô - Rê - Mi theo ký hiệu bàn tay",
    objectives: [
      "Nhận biết được 3 nốt nhạc đầu tiên của bậc thang âm thanh: Đô, Rê, Mi.",
      "Đọc đúng cao độ từ thấp lên cao: Đô &rarr; Rê &rarr; Mi và từ cao xuống thấp: Mi &rarr; Rê &rarr; Đô.",
      "Thực hiện thành thạo và chính xác ký hiệu bàn tay (Hand Signs) cho các nốt Đô, Rê, Mi.",
      "Cảm nhận sự biến đổi cao độ như những bậc thang bước chân lên xuống."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-stairs text-sky-600"></i> Bậc thang âm thanh: Đô - Rê - Mi
          </h4>
          <p>
            Các nốt nhạc cũng giống như các bậc thang nhà em. Nốt ở bậc thấp nhất là <strong>Đô</strong>, bước lên một bậc là <strong>Rê</strong>, và bước lên bậc cao hơn là <strong>Mi</strong>.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="p-4 bg-white dark:bg-gray-800 border border-sky-200 dark:border-gray-700 rounded-xl text-center shadow-sm">
            <div class="w-12 h-12 mx-auto rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 font-bold flex items-center justify-center text-lg mb-2">
              Đô
            </div>
            <h5 class="font-bold text-sm text-gray-900 dark:text-white mb-1">Nốt Đô (Bậc 1)</h5>
            <p class="text-xs text-gray-500 dark:text-gray-400">Cao độ trầm nhất. Hai bàn tay nắm lại, úp xuống đặt trước bụng.</p>
          </div>

          <div class="p-4 bg-white dark:bg-gray-800 border border-sky-200 dark:border-gray-700 rounded-xl text-center shadow-sm">
            <div class="w-12 h-12 mx-auto rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 font-bold flex items-center justify-center text-lg mb-2">
              Rê
            </div>
            <h5 class="font-bold text-sm text-gray-900 dark:text-white mb-1">Nốt Rê (Bậc 2)</h5>
            <p class="text-xs text-gray-500 dark:text-gray-400">Cao độ ở giữa. Hai bàn tay mở thẳng, nghiêng chếch góc 45 độ lên cao.</p>
          </div>

          <div class="p-4 bg-white dark:bg-gray-800 border border-sky-200 dark:border-gray-700 rounded-xl text-center shadow-sm">
            <div class="w-12 h-12 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 font-bold flex items-center justify-center text-lg mb-2">
              Mi
            </div>
            <h5 class="font-bold text-sm text-gray-900 dark:text-white mb-1">Nốt Mi (Bậc 3)</h5>
            <p class="text-xs text-gray-500 dark:text-gray-400">Cao độ cao nhất trong ba nốt. Hai bàn tay mở phẳng song song trước ngực.</p>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-hand"></i> Luyện tập đọc nốt theo bậc thang âm thanh
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Bước lên cầu thang:</strong> Đọc to và vang "Đô - Rê - Mi" (tay nâng dần từ bụng lên ngực).</p>
          <p><strong>Bước xuống cầu thang:</strong> Đọc êm và hạ giọng "Mi - Rê - Đô" (tay hạ dần từ ngực xuống bụng).</p>
          <p><strong>Trò chơi "Bấm chuông gọi nốt":</strong> Một bạn làm ký hiệu tay, bạn đối diện đọc vang tên nốt tương ứng.</p>
        </div>
      </div>
    `,
    summary: "Ba nốt nhạc Đô - Rê - Mi là nền tảng đầu tiên; việc thực hiện ký hiệu bàn tay giúp học sinh ghi nhớ hình tượng cao độ từ trầm đến bổng một cách trực quan sinh động.",
    quizzes: [
      {
        question: "Trong 3 nốt Đô, Rê, Mi, nốt nhạc nào ở bậc thấp (trầm) nhất?",
        options: ["Nốt Đô", "Nốt Rê", "Nốt Mi", "Cả ba nốt cao bằng nhau"],
        correct: 0,
        explanation: "Nốt Đô ở bậc thấp nhất trong chuỗi 3 nốt Đô - Rê - Mi."
      },
      {
        question: "Khi bước lên bậc thang từ thấp lên cao, thứ tự các nốt nhạc được đọc là gì?",
        options: ["Đô - Rê - Mi", "Mi - Rê - Đô", "Rê - Mi - Đô", "Đô - Mi - Rê"],
        correct: 0,
        explanation: "Thứ tự cao độ đi lên chính xác là: Đô &rarr; Rê &rarr; Mi."
      },
      {
        question: "Ký hiệu bàn tay cho nốt Mi được thực hiện như thế nào?",
        options: [
          "Hai bàn tay duỗi phẳng đặt song song trước ngực",
          "Nắm chặt bàn tay để sát bụng",
          "Giơ hai tay lên trời hình chữ V",
          "Chắp hai tay lại cầu nguyện"
        ],
        correct: 0,
        explanation: "Ký hiệu nốt Mi là hai bàn tay mở phẳng song song đặt ngang trước ngực."
      },
      {
        question: "Khi thực hiện chuỗi nốt 'Mi - Rê - Đô', độ cao âm thanh thay đổi như thế nào?",
        options: ["Hạ dần từ cao xuống thấp", "Tăng dần từ thấp lên cao", "Không thay đổi gì cả", "Lúc to lúc nhỏ"],
        correct: 0,
        explanation: "Mi cao nhất, hạ xuống Rê, rồi hạ xuống Đô thấp nhất (chiều cao độ đi xuống)."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 2: VIỆT NAM YÊU THƯƠNG
  // ==========================================
  {
    id: "bai-3",
    lessonNum: 3,
    topicNum: 2,
    topicName: "Chủ đề 2: Việt Nam yêu thương",
    tag: "Học hát & Nhạc cụ",
    title: "Bài 3: Học hát bài 'Tổ quốc ta' & Thực hành gõ đệm Trống con",
    objectives: [
      "Hát đúng giai điệu, lời ca tha thiết, tự hào của bài hát Tổ quốc ta.",
      "Biết tình cảm yêu thương, tự hào về non sông gấm vóc đất nước Việt Nam tươi đẹp.",
      "Làm quen hình dáng và âm thanh rộn rã của nhạc cụ gõ Trống con.",
      "Thực hành cầm dùi gõ đệm Trống con theo phách nhịp nhàng cho bài hát."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-flag text-sky-600"></i> Bài hát "Tổ quốc ta"
          </h4>
          <p>
            Bài hát <strong>"Tổ quốc ta"</strong> bồi đắp trong tâm hồn trong trắng của học sinh lớp 1 tình yêu quê hương đất nước, yêu ngọn cờ đỏ sao vàng tung bay phấp phới trong nắng sớm mai.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-music text-sky-500"></i> Lời ca bài hát đầy tự hào
            </h5>
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1.5 leading-relaxed">
              <p>Việt Nam đất nước tươi đẹp, ngàn năm sáng ngời trang sử vàng.</p>
              <p>Cờ sao lấp lánh tung bay, em yêu Tổ quốc Việt Nam muôn đời!</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-drum text-sky-500"></i> Làm quen Nhạc cụ Trống con
            </h5>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              Trống con là nhạc cụ gõ bằng da quen thuộc trong trường tiểu học:
            </p>
            <ul class="text-xs space-y-1 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>Cấu tạo:</strong> Thân trống bằng gỗ hình ống, hai mặt bọc bằng da mỏng, có dây đeo và 2 chiếc dùi gỗ nhỏ.</li>
              <li><strong>Âm thanh:</strong> Tùng... tùng... cắc... vang rộn rã, giòn giã.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-drumstick-bite"></i> Thực hành gõ Trống con theo nhịp
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Gõ mặt trống (Tùng):</strong> Dùi gõ vào chính giữa mặt da trống tạo âm vang trầm rộn ràng.</p>
          <p><strong>Gõ vành trống (Cắc):</strong> Dùi gõ nghiêng vào mép vành gỗ tạo âm thanh giòn đanh dứt khoát.</p>
          <p>Tiết tấu tập gõ: <em>Tùng (phách 1) - Cắc (phách 2) - Tùng tùng (phách 3, 4)</em>.</p>
        </div>
      </div>
    `,
    summary: "Bài hát 'Tổ quốc ta' khơi dậy niềm tự hào dân tộc; nhạc cụ Trống con với âm thanh rộn rã giúp các em làm quen với nhịp điệu hành quân vui tươi.",
    quizzes: [
      {
        question: "Nội dung bài hát 'Tổ quốc ta' giáo dục các em học sinh điều gì?",
        options: [
          "Tình yêu quê hương, đất nước và niềm tự hào về Tổ quốc Việt Nam",
          "Tình cảm yêu thích các trò chơi điện tử",
          "Cách chăm sóc các loài cá biển",
          "Cách nấu các món ăn ngon"
        ],
        correct: 0,
        explanation: "Bài hát giáo dục lòng yêu nước, niềm tự hào với lá cờ đỏ sao vàng thiêng liêng của Tổ quốc."
      },
      {
        question: "Mặt của chiếc Trống con được bọc bằng chất liệu gì?",
        options: ["Bằng da (màng da)", "Bằng giấy báo", "Bằng kính thủy tinh", "Bằng lá chuối khô"],
        correct: 0,
        explanation: "Mặt trống thường được bọc bằng da trâu hoặc da bò mỏng để khi gõ phát ra âm thanh vang dội."
      },
      {
        question: "Khi gõ dùi vào chính giữa mặt trống da, âm thanh phát ra thường là gì?",
        options: ["Tiếng 'Tùng'", "Tiếng 'Keng'", "Tiếng 'Leng keng'", "Tiếng 'Rì rào'"],
        correct: 0,
        explanation: "Tiếng trống gõ vào giữa mặt da tạo ra âm vang trầm ấm đặc trưng: 'Tùng'."
      },
      {
        question: "Khi hát bài hát ca ngợi quê hương đất nước, tư thế đứng hát của em nên thế nào?",
        options: [
          "Đứng thẳng người trang nghiêm, ánh mắt tự hào, tươi tắn",
          "Ngồi bắt chéo chân cúi đầu",
          "Nghiêng ngả người qua lại",
          "Chạy nhảy xô đẩy bạn"
        ],
        correct: 0,
        explanation: "Hát về Tổ quốc cần tư thế đứng nghiêm trang, đĩnh đạc và khuôn mặt sáng ngời tự hào."
      }
    ]
  },

  {
    id: "bai-4",
    lessonNum: 4,
    topicNum: 2,
    topicName: "Chủ đề 2: Việt Nam yêu thương",
    tag: "Nghe nhạc & Nhạc lí",
    title: "Bài 4: Nghe nhạc: Bài hát 'Quốc ca' (Văn Cao) & Phân biệt âm thanh Cao - Thấp",
    objectives: [
      "Lắng nghe giai điệu hào hùng, trang nghiêm của bài Tiến quân ca (Quốc ca Việt Nam do nhạc sĩ Văn Cao sáng tác).",
      "Biết tư thế nghiêm trang, mắt hướng về cờ Tổ quốc khi thực hiện nghi lễ Chào cờ và hát Quốc ca.",
      "Nhận biết và phân biệt được thuộc tính âm thanh: Âm thanh Cao (bổng) và Âm thanh Thấp (trầm).",
      "Bồi dưỡng ý thức công dân nhỏ tuổi, lòng tôn kính quốc kỳ và lãnh tụ."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-landmark text-sky-600"></i> Bài Quốc ca thiêng liêng của dân tộc
          </h4>
          <p>
            Bài hát <strong>"Tiến quân ca"</strong> được nhạc sĩ <strong>Văn Cao</strong> sáng tác năm 1944. Đây là bài <strong>Quốc ca</strong> chính thức của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam, vang lên đầy tự hào trong mỗi buổi lễ Chào cờ sáng thứ Hai đầu tuần.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-person-military-pointing text-sky-500"></i> Nghi thức khi nghe Quốc ca chào cờ:
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
            <li>Đứng thẳng người ở tư thế Nghiêm, hai tay thả xuôi thẳng theo chỉ quần.</li>
            <li>Mắt nhìn thẳng trang nghiêm hướng lên lá cờ đỏ sao vàng thiêng liêng.</li>
            <li>Không nói chuyện riêng, không cười đùa, không đội mũ nón.</li>
            <li>Hát vang lời bài hát hào hùng, dõng dạc và đúng nhịp điệu.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-arrows-up-down text-sky-500"></i> Phân biệt Âm thanh Cao - Thấp
          </h5>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div class="p-3 bg-sky-50 dark:bg-gray-900 rounded-lg">
              <strong class="text-sky-700 dark:text-sky-300">Âm thanh Cao (Bổng):</strong>
              <p class="text-gray-600 dark:text-gray-400 mt-1">Tiếng chim hót líu lo, tiếng sáo trúc vút cao, tiếng trẻ thơ reo vui.</p>
            </div>
            <div class="p-3 bg-blue-50 dark:bg-gray-900 rounded-lg">
              <strong class="text-blue-700 dark:text-blue-300">Âm thanh Thấp (Trầm):</strong>
              <p class="text-gray-600 dark:text-gray-400 mt-1">Tiếng bò rống ùm bò, tiếng trống đại gầm rung rinh, tiếng sấm ầm ì đằng xa.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-person-circle-check"></i> Rèn luyện tư thế chào cờ chuẩn mực
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Cả lớp cùng thực hành: Khi nghe hiệu lệnh <em>"Nghiêm! Chào cờ - Chào!"</em>, tất cả đứng nghiêm, ngẩng cao đầu hướng mắt nhìn cờ và lắng nghe giai điệu Quốc ca hào hùng.</p>
        </div>
      </div>
    `,
    summary: "Quốc ca là bài ca thiêng liêng của Tổ quốc đòi hỏi thái độ tôn nghiêm chuẩn mực; học sinh nhận biết sự khác biệt giữa âm thanh Cao (bổng) và Thấp (trầm).",
    quizzes: [
      {
        question: "Ai là tác giả sáng tác bài hát 'Tiến quân ca' (Quốc ca Việt Nam)?",
        options: ["Nhạc sĩ Văn Cao", "Nhạc sĩ Phạm Tuyên", "Nhạc sĩ Hoàng Vân", "Nhạc sĩ Bùi Đình Thảo"],
        correct: 0,
        explanation: "Nhạc sĩ Văn Cao sáng tác bài Tiến quân ca vào năm 1944."
      },
      {
        question: "Khi thực hiện nghi lễ Chào cờ và hát Quốc ca, em cần có tư thế như thế nào?",
        options: [
          "Đứng thẳng người nghiêm trang, mắt hướng nhìn cờ đỏ sao vàng",
          "Vừa đứng vừa quay sang nói chuyện với bạn",
          "Ngồi thụp xuống bãi cỏ",
          "Chạy nhảy khắp sân trường"
        ],
        correct: 0,
        explanation: "Nghi lễ chào cờ đòi hỏi sự trang nghiêm, tư thế đứng thẳng người, tôn trọng Quốc kỳ và Quốc ca."
      },
      {
        question: "Âm thanh nào sau đây mang tính chất Cao (bổng)?",
        options: ["Tiếng chim hót líu lo trên cành cao", "Tiếng sấm sét ầm ì dưới đất", "Tiếng bò rống trầm đục", "Tiếng máy khoan đường"],
        correct: 0,
        explanation: "Tiếng chim hót nhỏ nhắn, lảnh lót trên cành là âm thanh cao bổng trong trẻo."
      },
      {
        question: "Âm thanh nào sau đây mang tính chất Thấp (trầm)?",
        options: ["Tiếng gõ trống cái to 'Thùng... thùng...'", "Tiếng sáo trúc véo von", "Tiếng chuông gió leng keng", "Tiếng dế mèn rỉ rả"],
        correct: 0,
        explanation: "Tiếng trống cái có kích thước khổng lồ phát ra âm trầm thấp và vang rền xa."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 3: MÁI TRƯỜNG THÂN YÊU
  // ==========================================
  {
    id: "bai-5",
    lessonNum: 5,
    topicNum: 3,
    topicName: "Chủ đề 3: Mái trường thân yêu",
    tag: "Học hát & Vận động",
    title: "Bài 5: Học hát bài 'Lớp Một thân yêu' & Vận động nhịp nhàng",
    objectives: [
      "Hát đúng giai điệu, lời ca rộn ràng, háo hức của bài hát Lớp Một thân yêu.",
      "Cảm nhận niềm hân hoan, bỡ ngỡ đầy thích thú của những ngày đầu tiên cắp sách vào lớp 1.",
      "Biết kết hợp vỗ tay theo phách hoặc nhún chân nhịp nhàng theo bước đi.",
      "Yêu quý mái trường, thầy cô giáo và hòa đồng với bạn bè cùng lớp."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-school text-sky-600"></i> Khúc ca ngày đầu vào lớp 1
          </h4>
          <p>
            Rời trường mầm non bước vào lớp 1 là một bước ngoặt kì diệu của tuổi thơ. Bài hát <strong>"Lớp Một thân yêu"</strong> diễn tả trọn vẹn cảm xúc háo hức, tươi vui khi các em được ngồi dưới mái trường tiểu học thân thương.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-music text-sky-500"></i> Lời ca tươi vui rộn rã
          </h5>
          <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1.5 leading-relaxed">
            <p>Kìa tiếng trống trường giục giã bước chân em tới trường.</p>
            <p>Chào lớp Một thân thương, chào bạn bè muôn phương.</p>
            <p>Học từng con chữ nhỏ, học từng phép tính ngoan,</p>
            <p>Em yêu trường em lắm, lớp Một của em ơi!</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-1 text-sm">Cách lấy hơi khi hát:</h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Hít thở tự nhiên bằng mũi và miệng ở chỗ ngắt câu, phát âm tròn tiếng, môi cười tươi tắn khi hát.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-person-walking"></i> Vừa hát vừa làm động tác mang cặp đến trường
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Động tác 1:</strong> Hai tay nắm nhẹ hai quai ba lô trước ngực, nhún chân bước đều theo nhịp trống trường.</p>
          <p><strong>Động tác 2:</strong> Đến câu "Chào bạn bè muôn phương", một tay vẫy chào sang bạn bên cạnh thật vui vẻ.</p>
        </div>
      </div>
    `,
    summary: "Ca khúc 'Lớp Một thân yêu' chan chứa tình cảm gắn bó với lớp học đầu đời; rèn luyện phong thái tự tin và kỹ năng hòa nhịp cùng tập thể.",
    quizzes: [
      {
        question: "Âm thanh quen thuộc nào giục giã các bạn nhỏ bước chân tới trường mỗi ngày?",
        options: ["Tiếng trống trường", "Tiếng còi xe máy", "Tiếng chuông báo thức điện thoại", "Tiếng còi cứu hỏa"],
        correct: 0,
        explanation: "Tiếng trống trường 'Tùng... tùng... tùng...' là âm thanh thiêng liêng giục giã học sinh đến lớp."
      },
      {
        question: "Cảm xúc chung của các bạn học sinh khi cất tiếng hát bài 'Lớp Một thân yêu' là gì?",
        options: ["Hân hoan, rộn ràng, háo hức và yêu quý trường lớp", "Buồn bã, khóc lóc", "Chán nản không muốn học", "Lo sợ bị phạt"],
        correct: 0,
        explanation: "Bước vào lớp 1 với bạn bè và thầy cô mới mang lại niềm vui sướng và háo hức vô bờ."
      },
      {
        question: "Các em học sinh lớp 1 học những điều bổ ích nào trong lời bài hát?",
        options: ["Học từng con chữ nhỏ, học từng phép tính ngoan", "Học cách chơi game", "Học cách xem hoạt hình suốt ngày", "Học cách ngủ trưa thật lâu"],
        correct: 0,
        explanation: "Lời ca viết: 'Học từng con chữ nhỏ, học từng phép tính ngoan'."
      },
      {
        question: "Động tác vẫy tay chào bạn bè thể hiện tinh thần gì?",
        options: ["Thân thiện, đoàn kết và cởi mở với bạn bè", "Hung hăng, xua đuổi bạn", "Không quan tâm đến ai", "Kiêu căng, tự phụ"],
        correct: 0,
        explanation: "Nụ cười và cái vẫy tay chào thể hiện tình bạn thân thiết, gắn bó trong lớp học."
      }
    ]
  },

  {
    id: "bai-6",
    lessonNum: 6,
    topicNum: 3,
    topicName: "Chủ đề 3: Mái trường thân yêu",
    tag: "Đọc nhạc & Nghe nhạc",
    title: "Bài 6: Đọc nhạc: 'Ban nhạc Đô - Rê - Mi' & Nghe nhạc: 'Những bông hoa những bài ca'",
    objectives: [
      "Thực hành đọc nhạc thành thạo chuỗi nốt Đô - Rê - Mi với hình tiết tấu đơn giản.",
      "Phối hợp đóng vai thành 'Ban nhạc Đô - Rê - Mi' vừa đọc nốt vừa làm ký hiệu bàn tay.",
      "Lắng nghe ca khúc thiếu nhi kinh điển 'Những bông hoa những bài ca' của nhạc sĩ Hoàng Long.",
      "Hiểu ý nghĩa ngày Nhà giáo Việt Nam 20/11 và thể hiện lòng kính trọng, biết ơn thầy cô giáo."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-users-viewfinder text-sky-600"></i> Ban nhạc Đô - Rê - Mi
          </h4>
          <p>
            Ba nốt nhạc thân thương Đô, Rê, Mi nay cùng phối hợp tạo thành một ban nhạc tí hon:
            <strong>Bạn Đô</strong> gõ phách trầm, <strong>Bạn Rê</strong> nhịp nhàng ở giữa, <strong>Bạn Mi</strong> cất cao giọng hát lảnh lót.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-gift text-sky-500"></i> Nghe nhạc: "Những bông hoa những bài ca" (Hoàng Long)
          </h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Ca khúc quen thuộc với câu hát: <em>"Bao đóa hoa phong lan đẹp, từng cánh bướm dập dờn vờn bay... kính dâng thầy cô một bài ca chan chứa bao tình..."</em>. Bài hát là đóa hoa tươi thắm nhất mà học sinh cả nước kính dâng lên các thầy cô giáo nhân dịp ngày 20/11.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-music"></i> Biểu diễn Ban nhạc Đô - Rê - Mi
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Chia lớp làm 3 nhóm nốt nhạc:</p>
          <p><strong>Nhóm Đô:</strong> Hát nốt Đô kết hợp nắm tay đặt ở bụng.</p>
          <p><strong>Nhóm Rê:</strong> Hát nốt Rê kết hợp tay nghiêng chếch.</p>
          <p><strong>Nhóm Mi:</strong> Hát nốt Mi kết hợp tay phẳng trước ngực.</p>
          <p>Cùng hòa vang chuỗi giai điệu: <em>Đô - Rê - Mi - Rê - Đô</em>!</p>
        </div>
      </div>
    `,
    summary: "Ban nhạc Đô - Rê - Mi giúp học sinh phối hợp tập thể qua đọc nhạc; tác phẩm 'Những bông hoa những bài ca' bồi đắp truyền thống Tôn sư trọng đạo cao đẹp.",
    quizzes: [
      {
        question: "Ca khúc 'Những bông hoa những bài ca' do nhạc sĩ nào sáng tác?",
        options: ["Nhạc sĩ Hoàng Long", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phong Nhã", "Nhạc sĩ Hoàng Vân"],
        correct: 0,
        explanation: "Bài hát là sáng tác nổi tiếng của nhạc sĩ Hoàng Long dành tặng các thầy cô giáo."
      },
      {
        question: "Bài hát 'Những bông hoa những bài ca' thường được hát vang trong dịp lễ kỷ niệm nào?",
        options: [
          "Ngày Nhà giáo Việt Nam 20/11",
          "Tết Trung thu rằm tháng Tám",
          "Ngày Quốc tế Thiếu nhi 1/6",
          "Tết Nguyên Đán đầu năm"
        ],
        correct: 0,
        explanation: "Đây là bài hát truyền thống tri ân thầy cô giáo trong ngày 20/11 hàng năm."
      },
      {
        question: "Món quà tinh thần ý nghĩa nhất mà các bạn học sinh trong bài hát dâng tặng thầy cô là gì?",
        options: [
          "Những bông hoa tươi thắm và những lời ca chan chứa tình yêu thương",
          "Một chiếc xe hơi đắt tiền",
          "Một trò chơi điện tử",
          "Một chiếc tivi màn hình lớn"
        ],
        correct: 0,
        explanation: "Đóa hoa điểm tốt và lời ca tiếng hát kính yêu là món quà quý giá nhất dành cho thầy cô."
      },
      {
        question: "Trong Ban nhạc Đô - Rê - Mi, nốt Mi có cao độ như thế nào so với nốt Đô?",
        options: ["Cao hơn nốt Đô 2 bậc", "Thấp hơn nốt Đô", "Cao bằng nốt Đô", "Không thể so sánh được"],
        correct: 0,
        explanation: "Nốt Mi đứng ở bậc 3, cao hơn nốt Đô (bậc 1) hai bậc âm thanh."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 4: VÒNG TAY BÈ BẠN
  // ==========================================
  {
    id: "bai-7",
    lessonNum: 7,
    topicNum: 4,
    topicName: "Chủ đề 4: Vòng tay bè bạn",
    tag: "Học hát & Gõ phách",
    title: "Bài 7: Học hát bài 'Chào người bạn mới đến' (Lương Bằng Vinh) & Gõ đệm phách",
    objectives: [
      "Hát đúng giai điệu, lời ca nồng nhiệt, ấm áp của bài hát Chào người bạn mới đến.",
      "Hình thành thái độ cởi mở, thân thiện chào đón những người bạn mới chuyển đến trường hoặc đến lớp.",
      "Thực hành gõ đệm bằng thanh phách hoặc vỗ tay theo phách đều đặn.",
      "Mở rộng vòng tay đoàn kết, gắn bó cùng bạn bè trong học tập và vui chơi."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-handshake text-sky-600"></i> Bài hát gắn kết tình bạn
          </h4>
          <p>
            Nhạc sĩ <strong>Lương Bằng Vinh</strong> đã sáng tác bài hát <strong>"Chào người bạn mới đến"</strong> với nhịp điệu rộn ràng, vui tươi như một tràng pháo tay giòn giã chào đón bạn mới hòa nhập vào ngôi nhà chung của lớp học.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-music text-sky-500"></i> Lời ca nồng ấm bài hát
          </h5>
          <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1.5 leading-relaxed">
            <p>Chào người bạn mới đến, góp thêm một niềm vui!</p>
            <p>Chào nụ cười rạng rỡ, trên môi bạn môi tôi.</p>
            <p>Nào cùng cầm tay nhau, hát lên câu chào mừng,</p>
            <p>Một vòng tay thân ái, nối tình bạn muôn nơi!</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-1 text-sm">Gõ đệm theo phách:</h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Dùng thanh phách gõ đều vào từng phách: <em>Chào (gõ) người (gõ) bạn (gõ) mới (gõ) đến (gõ)...</em>
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-circle-nodes"></i> Trò chơi: Vòng tròn kết bạn
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Cả lớp đứng thành vòng tròn lớn nắm tay nhau đi vòng quanh. Một bạn đứng giữa đóng vai người bạn mới.</p>
          <p>Khi bài hát kết thúc ở câu "nối tình bạn muôn nơi", bạn ở giữa sẽ chạy đến bắt tay một bạn trong vòng tròn để cùng đổi vai.</p>
        </div>
      </div>
    `,
    summary: "Ca khúc 'Chào người bạn mới đến' của Lương Bằng Vinh giáo dục tinh thần hiếu khách, chan hòa, sẵn sàng giúp đỡ bạn mới để lớp học luôn ngập tràn tiếng cười.",
    quizzes: [
      {
        question: "Ai là tác giả sáng tác bài hát 'Chào người bạn mới đến'?",
        options: ["Nhạc sĩ Lương Bằng Vinh", "Nhạc sĩ Văn Cao", "Nhạc sĩ Hoàng Hà", "Nhạc sĩ Tô Đông Hải"],
        correct: 0,
        explanation: "Bài hát 'Chào người bạn mới đến' do nhạc sĩ Lương Bằng Vinh sáng tác."
      },
      {
        question: "Khi có một bạn học sinh mới chuyển đến lớp, em nên cư xử như thế nào?",
        options: [
          "Mỉm cười niềm nở, cởi mở chào đón và sẵn sàng giúp đỡ bạn",
          "Xa lánh, không thèm nói chuyện",
          "Trêu chọc làm bạn khóc",
          "Giấu đồ dùng học tập của bạn"
        ],
        correct: 0,
        explanation: "Thái độ thân thiện, chào đón và nhiệt tình giúp đỡ bạn mới là phẩm chất đáng quý của học sinh ngoan."
      },
      {
        question: "Trong bài hát, sự xuất hiện của người bạn mới đem lại điều gì cho lớp học?",
        options: ["Góp thêm một niềm vui", "Góp thêm nỗi lo lắng", "Làm cho lớp thêm ồn ào", "Không đem lại điều gì"],
        correct: 0,
        explanation: "Lời bài hát viết: 'Chào người bạn mới đến, góp thêm một niềm vui!'."
      },
      {
        question: "Hình ảnh 'Một vòng tay thân ái' tượng trưng cho điều gì?",
        options: [
          "Tình đoàn kết, yêu thương gắn bó của bè bạn",
          "Một chiếc vòng đeo tay bằng bạc",
          "Một chiếc phao cứu sinh",
          "Một sợi dây thừng"
        ],
        correct: 0,
        explanation: "Vòng tay thân ái tượng trưng cho sự đoàn kết, sẻ chia và gắn kết tình bạn bè."
      }
    ]
  },

  {
    id: "bai-8",
    lessonNum: 8,
    topicNum: 4,
    topicName: "Chủ đề 4: Vòng tay bè bạn",
    tag: "Thường thức & Nghe nhạc",
    title: "Bài 8: Khám phá Trống cái trường học & Nghe nhạc: 'Vũ khúc thiên nga' (Tchaikovsky)",
    objectives: [
      "Nhận biết hình dáng to lớn, cấu tạo và âm thanh vang rền của chiếc Trống cái trong trường tiểu học.",
      "Phân biệt sự khác nhau giữa chiếc Trống con cầm tay và chiếc Trống cái đặt trên giá gỗ.",
      "Lắng nghe và cảm thụ giai điệu kỳ ảo, thanh khiết của trích đoạn 'Vũ khúc thiên nga' (nhà soạn nhạc vĩ đại Tchaikovsky).",
      "Ôn tập và đánh giá tổng kết kiến thức âm nhạc học kì I."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Trống cái -->
          <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
            <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2 text-sm sm:text-base">
              <i class="fa-solid fa-drum text-sky-600"></i> Chiếc Trống cái trường học
            </h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              Trống cái là chiếc trống lớn thường đặt trang trọng trên giá gỗ trước cửa văn phòng hoặc sảnh trường học.
            </p>
            <ul class="text-xs space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
              <li><strong>Hình dáng:</strong> Thân phình to bằng gỗ mít, hai mặt căng da trâu dày chắc chắn.</li>
              <li><strong>Dùi trống:</strong> Dài và to bằng gỗ, đầu bọc vải tròn êm.</li>
              <li><strong>Âm thanh:</strong> Tùng! Tùng! Tùng! trầm vang dội khắp mọi ngóc ngách sân trường.</li>
            </ul>
          </div>

          <!-- Nghe nhạc Vũ khúc thiên nga -->
          <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
            <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2 text-sm sm:text-base">
              <i class="fa-solid fa-feather-pointed text-blue-600"></i> Vũ khúc thiên nga (Tchaikovsky)
            </h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              Kiệt tác ba-lê thế giới của nhà soạn nhạc thiên tài người Nga <strong>P. I. Tchaikovsky</strong>.
            </p>
            <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
              Giai điệu réo rắt của dàn nhạc giao hưởng mô tả đàn thiên nga trắng muốt xinh đẹp đang sải cánh lượn bay và khiêu vũ trên mặt hồ nước phẳng lặng như gương.
            </p>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-music"></i> Cảm thụ giai điệu thiên nga khiêu vũ
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Khi giai điệu 'Vũ khúc thiên nga' cất lên, các em nhón chân nhẹ nhàng, hai tay dang ngang uốn lượn như đôi cánh thiên nga mềm mại đang lướt trên sóng nước.</p>
        </div>
      </div>
    `,
    summary: "Chiếc Trống cái là biểu tượng thân quen của trường học; tác phẩm 'Vũ khúc thiên nga' của Tchaikovsky mở rộng thế giới cảm thụ âm nhạc cổ điển phương Tây cho các em.",
    quizzes: [
      {
        question: "So với chiếc Trống con, chiếc Trống cái của trường học có điểm gì khác biệt?",
        options: [
          "Kích thước to lớn hơn nhiều và âm thanh phát ra trầm vang rền xa hơn",
          "Kích thước nhỏ hơn",
          "Được làm bằng kim loại",
          "Chỉ dùng để thổi bằng miệng"
        ],
        correct: 0,
        explanation: "Trống cái có kích thước rất lớn, thân gỗ mít dày và tiếng trống trầm vang dội khắp trường."
      },
      {
        question: "Tác phẩm múa ba-lê kinh điển 'Vũ khúc thiên nga' do nhà soạn nhạc vĩ đại nào sáng tác?",
        options: ["P. I. Tchaikovsky (Nga)", "L. V. Beethoven (Đức)", "W. A. Mozart (Áo)", "J. S. Bach (Đức)"],
        correct: 0,
        explanation: "Vũ khúc thiên nga (Hồ thiên nga) là kiệt tác bất hủ của nhà soạn nhạc người Nga Tchaikovsky."
      },
      {
        question: "Giai điệu của tác phẩm 'Vũ khúc thiên nga' gợi tả hình ảnh gì tuyệt đẹp?",
        options: [
          "Đàn thiên nga trắng muốt xinh đẹp đang bơi lội và khiêu vũ trên mặt hồ",
          "Đàn sư tử săn mồi trong rừng rậm",
          "Một cơn bão tố sấm sét dữ dội",
          "Một đàn voi đang chạy đua"
        ],
        correct: 0,
        explanation: "Tác phẩm miêu tả vẻ đẹp thanh tao, duyên dáng của bầy thiên nga trên mặt hồ thơ mộng."
      },
      {
        question: "Khi thầy cô hiệu trưởng đánh 3 hồi trống cái vào ngày Khai giảng năm học mới, điều đó báo hiệu điều gì?",
        options: [
          "Năm học mới chính thức bắt đầu với bao niềm vui và quyết tâm",
          "Giờ tan học về nhà",
          "Giờ ra chơi đã hết",
          "Chuẩn bị nghỉ hè"
        ],
        correct: 0,
        explanation: "Tiếng trống khai trường rộn rã khai màn cho một năm học mới đầy hứa hẹn."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 5: NHỊP ĐIỆU MÙA XUÂN
  // ==========================================
  {
    id: "bai-9",
    lessonNum: 9,
    topicNum: 5,
    topicName: "Chủ đề 5: Nhịp điệu mùa xuân",
    tag: "Học hát & Đồng dao",
    title: "Bài 9: Học hát bài đồng dao 'Xúc xắc xúc xẻ' & Phân biệt âm thanh Dài - Ngắn",
    objectives: [
      "Hát đúng giai điệu, lời ca rộn ràng, hóm hỉnh của bài đồng dao chúc Tết Xúc xắc xúc xẻ.",
      "Cảm nhận không khí vui tươi, ấm cúng và phong tục chúc Tết may mắn đầu xuân của dân tộc.",
      "Nhận biết và phân biệt được đặc tính thời gian của âm thanh: Âm thanh Dài (ngân) và Âm thanh Ngắn (dứt khoát).",
      "Thực hành gõ ống bương hoặc thanh phách mô phỏng tiếng lắc xâu tiền đồng rủng rỉnh ngày Tết."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-coins text-sky-600"></i> Bài đồng dao chúc Tết cổ truyền
          </h4>
          <p>
            <strong>"Xúc xắc xúc xẻ"</strong> là bài đồng dao dân gian quen thuộc từ bao đời của trẻ thơ Việt Nam trong ngày Tết Nguyên Đán. Ngày xưa, trẻ em cầm ống bương đựng tiền đồng vừa lắc kêu rủng rỉnh vừa hát chúc phúc cho mọi nhà.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-music text-sky-500"></i> Lời bài đồng dao vui nhộn
            </h5>
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1.5 leading-relaxed">
              <p>Xúc xắc xúc xẻ, năm mới năm me.</p>
              <p>Nhà nào còn đèn, mở cửa cho chúng tôi vào!</p>
              <p>Bước lên giường cao, thấy đôi rồng ấp.</p>
              <p>Bước xuống giường thấp, thấy đôi rồng chầu.</p>
              <p>Chúc cho gia chủ: Phúc lộc dồi dào, an khang thịnh vượng!</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-stopwatch text-sky-500"></i> Phân biệt Âm thanh Dài - Ngắn
            </h5>
            <ul class="text-xs space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <strong class="text-sky-700 dark:text-sky-300">Âm thanh Dài (ngân vang):</strong> Tiếng chuông chùa ngân nga (Boong... g...), tiếng còi tàu hỏa kéo dài (Tu... u... u...).
              </li>
              <li>
                <strong class="text-blue-700 dark:text-blue-300">Âm thanh Ngắn (dứt khoát):</strong> Tiếng vỗ tay (Bốp!), tiếng thanh phách gõ (Cốc!), tiếng giọt nước nhỏ (Tách!).
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-hands-clapping"></i> Vừa đọc đồng dao vừa lắc ống xúc xắc
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Tự chế tạo ống xúc xắc bằng chai nhựa nhỏ đựng các hạt đỗ xanh hoặc hạt gạo.</p>
          <p>Cứ mỗi từ phát ra, lắc một tiếng: <em>Xúc (lắc) xắc (lắc) xúc (lắc) xẻ (lắc)...</em> tạo nên không khí tưng bừng ngày xuân.</p>
        </div>
      </div>
    `,
    summary: "Đồng dao 'Xúc xắc xúc xẻ' mang đậm bản sắc Tết cổ truyền; học sinh phân biệt được âm thanh Dài (kéo dài, ngân vang) và âm thanh Ngắn (gọn gàng, dứt khoát).",
    quizzes: [
      {
        question: "Bài đồng dao 'Xúc xắc xúc xẻ' thường được các bạn nhỏ hát vang vào dịp nào?",
        options: ["Dịp Tết Nguyên Đán đầu năm mới", "Dịp Tết Trung thu", "Dịp nghỉ hè", "Dịp ngày hội thể thao"],
        correct: 0,
        explanation: "Bài đồng dao Xúc xắc xúc xẻ là khúc ca chúc phúc đầu xuân năm mới truyền thống của trẻ em Việt Nam."
      },
      {
        question: "Âm thanh nào sau đây là ví dụ về âm thanh Dài (kéo dài, ngân vang)?",
        options: [
          "Tiếng chuông đại hồng chung ngân nga 'Boong... g...'",
          "Tiếng vỗ tay 'Bốp!'",
          "Tiếng giọt nước rơi 'Tách!'",
          "Tiếng gõ thanh phách 'Cốc!'"
        ],
        correct: 0,
        explanation: "Tiếng chuông đồng ngân vang rất lâu trong không gian nên là âm thanh dài."
      },
      {
        question: "Âm thanh nào sau đây là ví dụ về âm thanh Ngắn (dứt khoát)?",
        options: [
          "Tiếng thanh phách gõ dứt khoát 'Cốc!'",
          "Tiếng còi tàu hỏa kéo dài 'Tu... u...'",
          "Tiếng còi báo động ngân dài",
          "Tiếng ngân nga của đàn violin"
        ],
        correct: 0,
        explanation: "Tiếng gõ thanh phách phát ra và tắt ngay lập tức, là âm thanh ngắn dứt khoát."
      },
      {
        question: "Lời chúc tốt đẹp nào được gửi gắm trong bài đồng dao ngày Tết?",
        options: [
          "Chúc gia chủ phúc lộc dồi dào, an khang thịnh vượng",
          "Chúc cho trời đổ mưa bão",
          "Chúc mọi người ngủ cả ngày",
          "Chúc không ai ra khỏi nhà"
        ],
        correct: 0,
        explanation: "Lời chúc năm mới gửi gắm mong ước phúc lộc, sức khỏe và thịnh vượng cho mọi gia đình."
      }
    ]
  },

  {
    id: "bai-10",
    lessonNum: 10,
    topicNum: 5,
    topicName: "Chủ đề 5: Nhịp điệu mùa xuân",
    tag: "Đọc nhạc & Thường thức",
    title: "Bài 10: Đọc nhạc: 'Những người bạn của Đô - Rê - Mi' & Thường thức: Thần đồng Mozart",
    objectives: [
      "Thực hành đọc nhạc nhịp nhàng kết hợp ký hiệu bàn tay cho 3 nốt Đô - Rê - Mi.",
      "Lắng nghe câu chuyện hấp dẫn về tuổi thơ kỳ diệu của Thần đồng âm nhạc thế giới W. A. Mozart.",
      "Khơi gợi niềm say mê rèn luyện năng khiếu nghệ thuật và tính chăm chỉ trong học tập.",
      "Thực hành nhận diện giai điệu bài đọc nhạc qua trò chơi âm nhạc tương tác."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-child-reaching text-sky-600"></i> Thần đồng âm nhạc W. A. Mozart (Mô-da)
          </h4>
          <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>Wolfgang Amadeus Mozart</strong> sinh năm 1756 tại nước Áo xinh đẹp. Ngay từ năm <strong>3 tuổi</strong>, cậu bé Mozart đã biết chơi đàn phím; đến năm <strong>5 tuổi</strong>, cậu đã tự sáng tác nên những bản nhạc đầu tiên khiến các bậc vua chúa châu Âu vô cùng kinh ngạc và thán phục.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-music text-sky-500"></i> Giai điệu mùa xuân của Đô - Rê - Mi
          </h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2">
            Cùng luyện tập đọc nốt theo mẫu câu nhịp nhàng đón xuân:
          </p>
          <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg text-center font-bold text-sky-600 dark:text-sky-400 text-sm tracking-widest">
            ĐÔ - RÊ - MI - MI | MI - RÊ - ĐÔ - ĐÔ ||
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-brain"></i> Luyện tập phản xạ đọc nhạc
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Giáo viên vỗ tay 1 tiếng &rarr; Đọc ĐÔ (làm ký hiệu nắm tay).</p>
          <p>Giáo viên vỗ tay 2 tiếng &rarr; Đọc RÊ (làm ký hiệu tay nghiêng).</p>
          <p>Giáo viên vỗ tay 3 tiếng &rarr; Đọc MI (làm ký hiệu tay phẳng).</p>
        </div>
      </div>
    `,
    summary: "Nhạc sĩ thiên tài Mozart là tấm gương sáng ngời về niềm say mê âm nhạc từ thuở bé; việc luyện đọc nốt Đô - Rê - Mi rèn luyện tai nghe và tư duy nhạy bén.",
    quizzes: [
      {
        question: "Cậu bé Mozart (Mô-da) biết chơi đàn từ khi mấy tuổi?",
        options: ["Từ năm 3 tuổi", "Từ năm 10 tuổi", "Từ năm 18 tuổi", "Từ năm 25 tuổi"],
        correct: 0,
        explanation: "Từ lúc 3 tuổi, Mozart đã bộc lộ tài năng kỳ diệu khi say sưa chơi đàn phím."
      },
      {
        question: "Mozart là nhạc sĩ thiên tài nổi tiếng của quốc gia nào?",
        options: ["Nước Áo", "Nước Anh", "Nước Mỹ", "Nước Nhật Bản"],
        correct: 0,
        explanation: "Mozart sinh ra tại thành phố Salzburg thuộc đất nước Áo cổ kính."
      },
      {
        question: "Trong mẫu luyện đọc: 'Đô - Rê - Mi - Mi', nốt nhạc nào được nhắc lại 2 lần?",
        options: ["Nốt Mi", "Nốt Đô", "Nốt Rê", "Nốt Son"],
        correct: 0,
        explanation: "Mẫu câu đọc kết thúc bằng 2 nốt Mi liên tiếp: Đô - Rê - Mi - Mi."
      },
      {
        question: "Câu chuyện tuổi thơ của Mozart khuyên các em học sinh điều gì?",
        options: [
          "Chăm chỉ học tập, nuôi dưỡng niềm đam mê và phát triển năng khiếu",
          "Chỉ cần có tài năng không cần luyện tập gì",
          "Bỏ học để đi chơi",
          "Không cần nghe lời cha mẹ"
        ],
        correct: 0,
        explanation: "Dù là thần đồng, Mozart vẫn miệt mài luyện tập đàn mỗi ngày để trở thành nhà soạn nhạc vĩ đại."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 6: VỀ MIỀN DÂN CA
  // ==========================================
  {
    id: "bai-11",
    lessonNum: 11,
    topicNum: 6,
    topicName: "Chủ đề 6: Về miền dân ca",
    tag: "Học hát & Dân ca",
    title: "Bài 11: Học hát Dân ca Cống Khao 'Gà gáy' & Mô phỏng tiếng gà gáy sáng",
    objectives: [
      "Hát đúng giai điệu và lời ca trong sáng, rộn ràng của bài hát dân ca Cống Khao Gà gáy.",
      "Biết đây là một làn điệu dân ca độc đáo của đồng bào dân tộc Cống Khao sinh sống ở vùng núi Tây Bắc.",
      "Biết mô phỏng tiếng gà trống gáy vang báo hiệu một ngày mới rực rỡ nắng vàng bắt đầu.",
      "Yêu quý bản sắc văn hóa đa dạng của các dân tộc anh em trên đất nước Việt Nam."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-mountain-sun text-sky-600"></i> Làn điệu Dân ca Cống Khao
          </h4>
          <p>
            Bài hát <strong>"Gà gáy"</strong> là bài dân ca rất nổi tiếng của người <strong>Cống Khao</strong> (Tây Bắc). Giai điệu mộc mạc, tươi tắn như bức tranh buổi sớm mai trên bản làng vùng cao, khi chú gà trống cất tiếng gáy đánh thức muôn loài thức giấc đi nương đi rẫy.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-music text-sky-500"></i> Lời ca mộc mạc của bài dân ca
          </h5>
          <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1.5 leading-relaxed">
            <p>Con gà gáy le té le te sáng rồi ai ơi!</p>
            <p>Gà gáy râm ran khắp chốn bờ tre.</p>
            <p>Nắng sáng lên rồi, dậy lên nương thôi ai ơi!</p>
            <p>Rừng núi thức giấc, muôn chim hòa ca!</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-1 text-sm">Hướng dẫn cách hát luyến nhẹ:</h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Hát mềm giọng ở cụm từ "le té le te", thể hiện nét vui tươi, dí dỏm như bước chạy lon ton của chú gà trống choai.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-crow"></i> Động tác mô phỏng "Chú gà trống gáy sáng"
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Động tác 1:</strong> Hai tay khum cong đặt dưới nách, vỗ nhẹ mô phỏng gà đập cánh phành phạch.</p>
          <p><strong>Động tác 2:</strong> Kiễng hai gót chân, ngửa nhẹ cổ cất tiếng gáy vang: <em>Ò... ó... o... o!</em></p>
        </div>
      </div>
    `,
    summary: "Dân ca Cống Khao 'Gà gáy' mang đậm âm hưởng núi rừng Tây Bắc trong lành; giúp học sinh cảm nhận vẻ đẹp lao động và thiên nhiên đất nước.",
    quizzes: [
      {
        question: "Bài hát 'Gà gáy' là làn điệu dân ca của đồng bào dân tộc nào?",
        options: ["Dân tộc Cống Khao", "Dân tộc Kinh", "Dân tộc Chăm", "Dân tộc Khmer"],
        correct: 0,
        explanation: "Bài hát 'Gà gáy' là làn điệu dân ca đặc sắc của người dân tộc Cống Khao vùng Tây Bắc."
      },
      {
        question: "Trong bài hát, tiếng gà gáy báo hiệu thời khắc nào trong ngày?",
        options: ["Trời đã rạng sáng, một ngày mới bắt đầu", "Đêm khuya thanh vắng", "Buổi trưa nắng gắt", "Buổi hoàng hôn chiều tà"],
        correct: 0,
        explanation: "Lời ca viết: 'Con gà gáy le té le te sáng rồi ai ơi! Nắng sáng lên rồi, dậy lên nương thôi ai ơi!'."
      },
      {
        question: "Hình ảnh bà con bản làng lên nương rẫy thể hiện đức tính tốt đẹp nào?",
        options: ["Cần cù, chăm chỉ lao động sản xuất", "Lười biếng chỉ thích ngủ nướng", "Sợ ánh nắng mặt trời", "Không thích làm việc"],
        correct: 0,
        explanation: "Hình ảnh người nông dân dậy sớm lên nương rẫy thể hiện sự cần cù, chăm chỉ và yêu lao động."
      },
      {
        question: "Giai điệu của bài dân ca 'Gà gáy' mang tính chất như thế nào?",
        options: ["Vui tươi, rộn ràng, khỏe khoắn", "U uất, buồn thảm", "Đáng sợ, rùng rợn", "Buồn ngủ, chậm rì"],
        correct: 0,
        explanation: "Tiếng gà gáy sáng mở đầu ngày mới tràn đầy sức sống và tinh thần lạc quan, vui tươi."
      }
    ]
  },

  {
    id: "bai-12",
    lessonNum: 12,
    topicNum: 6,
    topicName: "Chủ đề 6: Về miền dân ca",
    tag: "Nhạc cụ & Nghe nhạc",
    title: "Bài 12: Nhạc cụ Thanh phách & Nghe nhạc: Dân ca Nam Bộ 'Lí cây bông'",
    objectives: [
      "Nhận biết và sử dụng thành thạo nhạc cụ gõ Thanh phách đúng tư thế.",
      "Lắng nghe câu chuyện cảm động 'Câu chuyện về thanh phách' từ thời xưa.",
      "Thưởng thức làn điệu dân ca Nam Bộ mượt mà, duyên dáng 'Lí cây bông' (Bông xanh bông trắng rồi lại vàng bông...).",
      "Cảm nhận sự phong phú của các làn điệu dân ca ba miền Bắc - Trung - Nam."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Thanh phách -->
          <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
            <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2 text-sm sm:text-base">
              <i class="fa-solid fa-bars text-sky-600"></i> Nhạc cụ gõ Thanh phách
            </h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              Thanh phách gồm 2 thanh tre (hoặc gỗ) mộc mạc gắn liền với những câu hát dân ca của người Việt.
            </p>
            <ul class="text-xs space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
              <li><strong>Cách cầm:</strong> Tay trái cầm một thanh ngửa lên, tay phải cầm thanh kia gõ xuống.</li>
              <li><strong>Tác dụng:</strong> Điểm nhịp, giữ phách vững vàng cho các câu hát dân ca.</li>
            </ul>
          </div>

          <!-- Dân ca Lí cây bông -->
          <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
            <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2 text-sm sm:text-base">
              <i class="fa-solid fa-seedling text-blue-600"></i> Dân ca Nam Bộ: "Lí cây bông"
            </h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              Giai điệu ngọt ngào đằm thắm của miền Tây sông nước Cửu Long:
            </p>
            <p class="p-2 bg-white dark:bg-gray-900 rounded font-serif italic text-xs text-gray-800 dark:text-gray-200">
              "Bông xanh bông trắng rồi lại vàng bông ơi bạn ơi! Bông lê cho bằng bông lựu ơi bạn ơi..."
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Ca ngợi vẻ đẹp rực rỡ sắc màu của hoa trái phương Nam trù phú.
            </p>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-music"></i> Gõ thanh phách đệm câu hát dân ca
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Tập gõ thanh phách vào các tiếng rơi phách mạnh:</p>
          <p class="italic text-sky-700 dark:text-sky-300 font-medium">"Con gà gáy <strong>le</strong> (gõ) té le <strong>te</strong> (gõ) sáng rồi ai <strong>ơi</strong> (gõ)!"</p>
        </div>
      </div>
    `,
    summary: "Thanh phách là nhạc cụ dân tộc giản dị mà hiệu quả để giữ nhịp; dân ca 'Lí cây bông' đưa các em đến với vẻ đẹp ngọt ngào của miền quê Nam Bộ.",
    quizzes: [
      {
        question: "Nhạc cụ Thanh phách thường được làm từ chất liệu tự nhiên nào?",
        options: ["Bằng tre hoặc gỗ cứng", "Bằng kim loại nhôm", "Bằng thủy tinh", "Bằng nhựa mềm"],
        correct: 0,
        explanation: "Thanh phách thường được tiện từ thân tre già hoặc các loại gỗ cứng để âm thanh giòn và đanh."
      },
      {
        question: "Bài hát 'Lí cây bông' thuộc dòng dân ca của vùng miền nào trên đất nước ta?",
        options: ["Dân ca Nam Bộ", "Dân ca Quan họ Bắc Ninh", "Dân ca Tây Nguyên", "Dân ca Duyên hải miền Trung"],
        correct: 0,
        explanation: "'Lí cây bông' là một trong những làn điệu Lí nổi tiếng nhất của vùng đất Nam Bộ."
      },
      {
        question: "Các màu sắc của hoa được nhắc đến trong bài dân ca 'Lí cây bông' là những màu nào?",
        options: ["Bông xanh, bông trắng, vàng bông", "Bông đen, bông tím", "Bông xám, bông nâu", "Bông bạc, bông đồng"],
        correct: 0,
        explanation: "Lời bài hát có câu: 'Bông xanh bông trắng rồi lại vàng bông ơi bạn ơi!'."
      },
      {
        question: "Vai trò chính của chiếc Thanh phách khi hát dân ca là gì?",
        options: [
          "Giữ nhịp phách đều đặn giúp người hát không bị chệch nhịp",
          "Tự động thổi ra tiếng gió",
          "Làm cho sân khấu sáng rực lên",
          "Thay thế ca sĩ hát"
        ],
        correct: 0,
        explanation: "Thanh phách gõ điểm nhịp giúp định hình và duy trì tốc độ ổn định cho bài hát."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 7: GIA ĐÌNH
  // ==========================================
  {
    id: "bai-13",
    lessonNum: 13,
    topicNum: 7,
    topicName: "Chủ đề 7: Gia đình",
    tag: "Học hát & Tình cảm",
    title: "Bài 13: Học hát bài 'Cây gia đình' & Cảm nhận tình yêu thương tổ ấm",
    objectives: [
      "Hát đúng giai điệu, lời ca tha thiết, ấm áp của bài hát Cây gia đình.",
      "Hiểu hình ảnh ẩn dụ 'Cây gia đình': Ông bà là gốc rễ, cha mẹ là cành cây, con cái là hoa thơm quả ngọt.",
      "Biết yêu thương, kính trọng ông bà, cha mẹ và hòa thuận với anh chị em trong nhà.",
      "Thực hành hát kết hợp đặt tay lên ngực và mỉm cười biểu cảm tình cảm gia đình."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-house-chimney-heart text-sky-600"></i> Bài hát ý nghĩa "Cây gia đình"
          </h4>
          <p>
            Gia đình là cái nôi êm ấm nuôi dưỡng mỗi chúng ta khôn lớn. Bài hát <strong>"Cây gia đình"</strong> ví ngôi nhà ấm cúng như một cái cây xanh tốt, nơi mọi thành viên cùng đùm bọc, chở che và trao nhau tình yêu thương ngọt ngào.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-music text-sky-500"></i> Lời ca đong đầy yêu thương
          </h5>
          <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1.5 leading-relaxed">
            <p>Ông bà là gốc rễ sâu, cha mẹ là cành lá xanh tươi.</p>
            <p>Chúng em là hoa là quả, lớn lên trong tình thương bao la.</p>
            <p>Cùng chung một cây gia đình, suốt đời yêu thương chở che nhau!</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-1 text-sm">Gợi ý cách biểu diễn:</h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Hát với giọng ấm áp, chậm rãi vừa phải. Ở câu kết, hai tay mở rộng rồi ôm nhẹ trước ngực biểu thị cái ôm gia đình ấm êm.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-camera"></i> Hoạt động "Bức tranh gia đình em"
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Mỗi bạn nhỏ vẽ một bức tranh về các thành viên trong gia đình mình, vừa giơ tranh vừa cùng cả lớp cất cao tiếng hát 'Cây gia đình'.</p>
        </div>
      </div>
    `,
    summary: "Ca khúc 'Cây gia đình' nhắc nhở các em về công ơn sinh thành dưỡng dục của ông bà, cha mẹ; giáo dục lòng hiếu thảo và sự gắn kết bền chặt giữa người thân.",
    quizzes: [
      {
        question: "Trong bài hát 'Cây gia đình', hình ảnh ông bà được ví như bộ phận nào của cây?",
        options: ["Gốc rễ vững chãi", "Bông hoa rực rỡ", "Trái ngọt chín mọng", "Hạt mầm nhỏ"],
        correct: 0,
        explanation: "Lời ca ví: 'Ông bà là gốc rễ sâu, cha mẹ là cành lá xanh tươi'."
      },
      {
        question: "Các bạn nhỏ (con cái) được so sánh với hình ảnh nào trong cây gia đình?",
        options: ["Hoa thơm và quả ngọt", "Gốc cây khô cằn", "Chiếc gai nhọn", "Cơn bão táp"],
        correct: 0,
        explanation: "Con cái là kết tinh tình yêu thương, được ví như những bông hoa thơm và quả ngọt lành."
      },
      {
        question: "Hành động nào thể hiện em là một người con ngoan trong gia đình?",
        options: [
          "Biết vâng lời cha mẹ, lễ phép với ông bà và chăm chỉ học tập",
          "Tranh giành đồ chơi và cãi nhau với anh chị em",
          "Vòi vĩnh đòi mua đồ chơi liên tục",
          "Bỏ bữa không chịu ăn cơm"
        ],
        correct: 0,
        explanation: "Lễ phép, vâng lời và chăm ngoan là cách tốt nhất để đền đáp tình yêu của gia đình."
      },
      {
        question: "Tình cảm chung mà các thành viên trong gia đình dành cho nhau là gì?",
        options: ["Yêu thương, chở che và đùm bọc suốt đời", "Lạnh nhạt, thờ ơ", "Ghen ghét, đố kị", "Tranh cãi suốt ngày"],
        correct: 0,
        explanation: "Gia đình là tổ ấm thiêng liêng, nơi mọi người luôn yêu thương và chở che cho nhau."
      }
    ]
  },

  {
    id: "bai-14",
    lessonNum: 14,
    topicNum: 7,
    topicName: "Chủ đề 7: Gia đình",
    tag: "Đọc nhạc & Nghe nhạc",
    title: "Bài 14: Đọc nhạc: 'Hát cùng Đô - Rê - Mi - Pha - Son' & Nghe nhạc: 'Con chim vành khuyên'",
    objectives: [
      "Làm quen và đọc đúng cao độ mở rộng của 5 nốt nhạc: Đô - Rê - Mi - Pha - Son.",
      "Thực hiện ký hiệu bàn tay cho nốt Pha (ngón tay cái chúc xuống) và nốt Son (lòng bàn tay hướng vào người).",
      "Lắng nghe ca khúc thiếu nhi kinh điển 'Con chim vành khuyên' của nhạc sĩ Hoàng Vân.",
      "Học tập đức tính lễ phép, ngoan ngoãn 'gặp ai cũng chào' của chú chim vành khuyên nhỏ."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-music text-sky-600"></i> Năm nốt nhạc: Đô - Rê - Mi - Pha - Son
          </h4>
          <p>
            Các em bước thêm hai nấc thang mới để hoàn thiện chuỗi 5 nốt nhạc: <strong>Nốt Pha</strong> và <strong>Nốt Son</strong>.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
          <div class="p-2.5 bg-white dark:bg-gray-800 border border-sky-200 dark:border-gray-700 rounded-lg">
            <span class="font-bold text-sky-600 block text-sm">Đô</span>
            <span class="text-[10px] text-gray-500">Nắm tay úp</span>
          </div>
          <div class="p-2.5 bg-white dark:bg-gray-800 border border-sky-200 dark:border-gray-700 rounded-lg">
            <span class="font-bold text-blue-600 block text-sm">Rê</span>
            <span class="text-[10px] text-gray-500">Tay nghiêng</span>
          </div>
          <div class="p-2.5 bg-white dark:bg-gray-800 border border-sky-200 dark:border-gray-700 rounded-lg">
            <span class="font-bold text-indigo-600 block text-sm">Mi</span>
            <span class="text-[10px] text-gray-500">Tay phẳng</span>
          </div>
          <div class="p-2.5 bg-white dark:bg-gray-800 border border-sky-200 dark:border-gray-700 rounded-lg">
            <span class="font-bold text-purple-600 block text-sm">Pha</span>
            <span class="text-[10px] text-gray-500">Ngón cái chúc</span>
          </div>
          <div class="p-2.5 bg-white dark:bg-gray-800 border border-sky-200 dark:border-gray-700 rounded-lg">
            <span class="font-bold text-pink-600 block text-sm">Son</span>
            <span class="text-[10px] text-gray-500">Tay hướng vào</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-dove text-sky-500"></i> Nghe nhạc: "Con chim vành khuyên" (Hoàng Vân)
          </h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <em>"Có con chim vành khuyên nhỏ, dáng trông thật ngoan ngoãn quá, gọi dạ bảo vâng lễ phép nhất nhà..."</em>. Bài hát dạy các em bài học sâu sắc về sự lễ phép: khoanh tay chào ông bà, chào thầy cô, chào anh chị mỗi khi gặp gỡ.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-hand-peace"></i> Luyện tập chuỗi 5 nốt nhạc
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Luyện đọc đi lên:</strong> Đô - Rê - Mi - Pha - Son.</p>
          <p><strong>Luyện đọc đi xuống:</strong> Son - Pha - Mi - Rê - Đô.</p>
          <p>Vừa đọc nốt vừa thực hiện động tác khoanh tay cúi đầu chào như chú chim vành khuyên ngoan ngoãn.</p>
        </div>
      </div>
    `,
    summary: "Chuỗi 5 nốt Đô - Rê - Mi - Pha - Son mở rộng tầm cao độ; bài hát 'Con chim vành khuyên' rèn luyện đức tính lễ phép, vâng lời của học sinh tiểu học.",
    quizzes: [
      {
        question: "Ai là tác giả sáng tác ca khúc thiếu nhi 'Con chim vành khuyên'?",
        options: ["Nhạc sĩ Hoàng Vân", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phong Nhã", "Nhạc sĩ Bùi Đình Thảo"],
        correct: 0,
        explanation: "Bài hát 'Con chim vành khuyên' là sáng tác kinh điển của nhạc sĩ Hoàng Vân."
      },
      {
        question: "Chú chim vành khuyên trong bài hát có đức tính gì đáng khen ngợi nhất?",
        options: [
          "Rất ngoan ngoãn, lễ phép, gọi dạ bảo vâng và gặp ai cũng chào",
          "Bay nhanh nhất khu rừng",
          "Có bộ lông sặc sỡ nhất",
          "Hay ngủ nướng trên cành cây"
        ],
        correct: 0,
        explanation: "Lời ca khen ngợi: 'Có con chim vành khuyên nhỏ, dáng trông thật ngoan ngoãn quá, gọi dạ bảo vâng lễ phép nhất nhà'."
      },
      {
        question: "Khi gặp người lớn tuổi (ông bà, cha mẹ, thầy cô), học sinh cần làm gì?",
        options: [
          "Khoanh hai tay trước ngực và lễ phép cất tiếng chào",
          "Lờ đi giả vờ như không nhìn thấy",
          "Bỏ chạy đi chỗ khác",
          "Nói to quát mắng"
        ],
        correct: 0,
        explanation: "Khoanh tay cúi đầu chào là nét đẹp văn hóa lễ phép đầu tiên mà học sinh lớp 1 cần rèn luyện."
      },
      {
        question: "Trong 5 nốt Đô, Rê, Mi, Pha, Son, nốt nào có vị trí cao độ cao nhất?",
        options: ["Nốt Son", "Nốt Pha", "Nốt Mi", "Nốt Đô"],
        correct: 0,
        explanation: "Trong chuỗi 5 nốt Đô &rarr; Rê &rarr; Mi &rarr; Pha &rarr; Son, nốt Son là nốt cao nhất."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 8: VUI ĐÓN HÈ
  // ==========================================
  {
    id: "bai-15",
    lessonNum: 15,
    topicNum: 8,
    topicName: "Chủ đề 8: Vui đón hè",
    tag: "Học hát & Nhạc cụ",
    title: "Bài 15: Học hát bài 'Ngôi sao lấp lánh' (Twinkle Twinkle Little Star) & Nhạc cụ Triangle",
    objectives: [
      "Hát đúng giai điệu và lời Việt trong sáng, êm dịu của bài hát thiếu nhi quốc tế Ngôi sao lấp lánh.",
      "Làm quen hình dáng và âm thanh kim loại leng keng trong vắt của nhạc cụ Trai-en-gô (Triangle).",
      "Thực hành gõ đệm Triangle vào đúng các điểm ngân của câu hát.",
      "Tưởng tượng bầu trời đêm mùa hè ngập tràn những vì sao lấp lánh ước mơ tuổi thơ."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-star text-sky-600"></i> Ca khúc thiếu nhi bất hủ toàn cầu
          </h4>
          <p>
            Bài hát <strong>"Ngôi sao lấp lánh"</strong> (phỏng dịch từ giai điệu quốc tế <em>Twinkle, Twinkle, Little Star</em>) là một trong những giai điệu êm dịu nhất mà trẻ em khắp năm châu đều yêu thích. Giai điệu nhẹ nhàng như ánh sao lung linh trên bầu trời đêm mùa hè thanh bình.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-music text-sky-500"></i> Lời ca trong trẻo bài hát
            </h5>
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-200 space-y-1.5 leading-relaxed">
              <p>Ngôi sao nhỏ lung linh sáng ngời, lấp lánh soi trên bầu trời cao.</p>
              <p>Tựa viên kim cương lấp lánh, sáng soi cho đêm hè êm đềm.</p>
              <p>Ngôi sao nhỏ lung linh sáng ngời, đưa em vào giấc ngủ thần tiên!</p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-play text-sky-500"></i> Nhạc cụ Triangle (Thanh tam giác)
            </h4>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              Thanh kim loại uốn hình tam giác hở một góc, gõ bằng dùi sắt nhỏ:
            </p>
            <p class="text-xs text-sky-700 dark:text-sky-300 font-semibold">
              Âm thanh: Leng keng trong trẻo, ngân dài như ánh sáng lấp lánh của những vì sao đêm.
            </p>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-wand-magic-sparkles"></i> Hòa tấu Triangle đệm bài hát
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Hát êm dịu, đến cuối mỗi câu hát gõ Triangle một tiếng ngân vang:</p>
          <p class="italic text-sky-700 dark:text-sky-300 font-medium">"Ngôi sao nhỏ lung linh sáng <strong>ngời</strong>... (Keng!) / Lấp lánh soi trên bầu trời <strong>cao</strong>... (Keng!)"</p>
        </div>
      </div>
    `,
    summary: "Ca khúc 'Ngôi sao lấp lánh' và tiếng chuông kim loại Triangle đưa các em vào giấc mơ mùa hè tuyệt đẹp với những ước vọng trong sáng của tuổi thơ.",
    quizzes: [
      {
        question: "Bài hát 'Ngôi sao lấp lánh' có tên tiếng Anh gốc nổi tiếng toàn cầu là gì?",
        options: ["Twinkle, Twinkle, Little Star", "Jingle Bells", "Happy New Year", "Silent Night"],
        correct: 0,
        explanation: "Bài hát gốc tiếng Anh là 'Twinkle, Twinkle, Little Star' được dịch sang hàng trăm ngôn ngữ trên thế giới."
      },
      {
        question: "Nhạc cụ Trai-en-gô (Triangle) có hình dạng hình học gì?",
        options: ["Hình tam giác", "Hình tròn", "Hình vuông", "Hình chữ nhật"],
        correct: 0,
        explanation: "Triangle trong tiếng Anh nghĩa là hình tam giác, nhạc cụ được uốn thành hình tam giác kim loại."
      },
      {
        question: "Âm thanh của nhạc cụ Triangle mô phỏng rất giống với hiện tượng nào trong bài hát?",
        options: [
          "Ánh sáng lung linh lấp lánh của các vì sao đêm",
          "Tiếng mưa rào sấm chớp dữ dội",
          "Tiếng bước chân voi đi",
          "Tiếng gió gầm rú"
        ],
        correct: 0,
        explanation: "Tiếng kim loại leng keng ngân vang trong vắt tựa như ánh sáng lấp lánh của vì sao trên bầu trời đêm."
      },
      {
        question: "Trong bài hát, ngôi sao nhỏ được so sánh đẹp tựa như vật gì?",
        options: ["Viên kim cương lấp lánh", "Một quả bóng tròn", "Một chiếc bánh kem", "Một ngọn nến"],
        correct: 0,
        explanation: "Lời ca viết: 'Tựa viên kim cương lấp lánh, sáng soi cho đêm hè êm đềm'."
      }
    ]
  },

  {
    id: "bai-16",
    lessonNum: 16,
    topicNum: 8,
    topicName: "Chủ đề 8: Vui đón hè",
    tag: "Tổng kết & Dự án",
    title: "Bài 16: Ôn tập tổng kết cuối năm Lớp 1 & Dự án: 'Ngày hội âm nhạc Tuổi thần tiên'",
    objectives: [
      "Hệ thống hóa toàn bộ các bài hát, bài đọc nhạc và nhạc cụ đã học trong chương trình Lớp 1.",
      "Tự tin bước lên sân khấu biểu diễn đơn ca, song ca hoặc hòa tấu nhạc cụ trước thầy cô và bạn bè.",
      "Tham gia sôi nổi vào Dự án âm nhạc 'Ngày hội âm nhạc Tuổi thần tiên' chào đón mùa hè.",
      "Đánh giá sự tiến bộ vượt bậc về cảm thụ âm nhạc, sẵn sàng tự tin bước lên Lớp 2."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-trophy text-sky-600"></i> Chúc mừng các em hoàn thành Lớp 1!
          </h4>
          <p>
            Trải qua 8 chủ đề kỳ diệu của năm học đầu tiên, các em đã biết hát hay, đúng nhịp, nhận diện các bậc thang âm thanh, biểu diễn nhạc cụ gõ và cảm nhận tình yêu gia đình, thầy cô, quê hương đất nước.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 text-sm flex items-center gap-2">
              <i class="fa-solid fa-music text-sky-500"></i> Các bài hát yêu thích cả năm:
            </h5>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li>Vào rừng hoa (Việt Anh)</li>
              <li>Tổ quốc ta</li>
              <li>Lớp Một thân yêu</li>
              <li>Chào người bạn mới đến (Lương Bằng Vinh)</li>
              <li>Xúc xắc xúc xẻ (Đồng dao)</li>
              <li>Gà gáy (Dân ca Cống Khao)</li>
              <li>Cây gia đình</li>
              <li>Ngôi sao lấp lánh (Twinkle Star)</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 text-sm flex items-center gap-2">
              <i class="fa-solid fa-guitar text-blue-500"></i> Kỹ năng nhạc lí & Nhạc cụ:
            </h5>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>Các nốt nhạc:</strong> Đô - Rê - Mi - Pha - Son</li>
              <li><strong>Ký hiệu bàn tay:</strong> Hand Signs Curwen</li>
              <li><strong>Nhạc cụ gõ:</strong> Trống con, Trống cái, Thanh phách, Triangle</li>
              <li><strong>Sắc thái:</strong> To - Nhỏ, Cao - Thấp, Dài - Ngắn</li>
              <li><strong>Thường thức:</strong> Tiến quân ca (Văn Cao), Thần đồng Mozart, Tchaikovsky</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-gray-800 dark:to-gray-800/80 border border-sky-200/80 dark:border-sky-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-star"></i> Sân khấu "Ngày hội âm nhạc Tuổi thần tiên"
        </h4>
        <div class="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Tiết mục 1:</strong> Màn đồng ca toàn trường bài 'Lớp Một thân yêu' và 'Ngôi sao lấp lánh'.</p>
          <p><strong>Tiết mục 2:</strong> Dàn nhạc gõ nhí: Hòa tấu Trống con, Thanh phách và Triangle đệm cho bài đồng dao 'Xúc xắc xúc xẻ'.</p>
          <p><strong>Tiết mục 3:</strong> Trình diễn ký hiệu bàn tay 5 nốt Đô - Rê - Mi - Pha - Son.</p>
        </div>
      </div>
    `,
    summary: "Năm học Âm nhạc Lớp 1 đã khép lại thành công rực rỡ; các em đã có những trải nghiệm âm nhạc đầu đời tươi đẹp, sẵn sàng tự tin bước vào Lớp 2.",
    quizzes: [
      {
        question: "Chương trình sách giáo khoa Âm nhạc 1 Kết nối tri thức gồm tất cả bao nhiêu chủ đề?",
        options: ["8 chủ đề", "4 chủ đề", "6 chủ đề", "12 chủ đề"],
        correct: 0,
        explanation: "Chương trình Âm nhạc 1 được cấu trúc chuẩn mực thành 8 chủ đề học tập sinh động."
      },
      {
        question: "Các nhạc cụ gõ cơ bản mà các em đã được học và thực hành trong Lớp 1 là gì?",
        options: [
          "Trống con, Trống cái, Thanh phách và Triangle (Trai-en-gô)",
          "Đàn Piano, Đàn Organ, Đàn Guitar điện",
          "Kèn Trumpet, Kèn Saxophone",
          "Bộ trống jazz 5 chiếc"
        ],
        correct: 0,
        explanation: "Học sinh lớp 1 làm quen với các nhạc cụ gõ mộc mạc: Trống con, Trống cái, Thanh phách và Triangle."
      },
      {
        question: "Ba cặp sắc thái đối lập của âm thanh mà các em đã khám phá trong năm học là gì?",
        options: [
          "To - Nhỏ, Cao - Thấp, Dài - Ngắn",
          "Nóng - Lạnh, Nhanh - Chậm, Sáng - Tối",
          "Đỏ - Vàng, Xanh - Trắng, Đen - Nâu",
          "Vui - Buồn, Yêu - Ghét, Cười - Khóc"
        ],
        correct: 0,
        explanation: "3 thuộc tính vật lí cơ bản của âm thanh đã học là: To - Nhỏ (cường độ), Cao - Thấp (cao độ), Dài - Ngắn (trường độ)."
      },
      {
        question: "Sau khi hoàn thành chương trình Âm nhạc 1, các em sẽ tiếp tục lên học lớp nào?",
        options: ["Lớp 2", "Lớp 3", "Lớp 5", "Lớp 6"],
        correct: 0,
        explanation: "Hoàn thành xuất sắc lớp 1, các em sẽ hân hoan bước lên lớp 2 với nhiều kiến thức âm nhạc thú vị tiếp theo."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lessons;
}
