// Data for 16 lessons of Grade 3 Music (SGK Kết nối tri thức với cuộc sống - GDPT 2018)
// 8 Topics x 2 Lessons = 16 Lessons, each with 4 quizzes = 64 Quizzes

const lessons = [
  // ================= CHỦ ĐỀ 1: CHÀO NĂM HỌC MỚI =================
  {
    id: "bai-1",
    lessonNum: 1,
    topicNum: 1,
    topicName: "Chủ đề 1: Chào năm học mới",
    tag: "Học hát & Nhạc cụ",
    title: "Bài 1: Học hát bài 'Bài ca đi học' & Thực hành Nhạc cụ gõ",
    objectives: [
      "Hát đúng giai điệu, lời ca bài 'Bài ca đi học' (nhạc và lời: Phan Trần Bảng); thể hiện tính chất vui tươi, hồn nhiên, rộn ràng khi bước vào năm học mới.",
      "Biết lấy hơi đúng nhịp, phát âm tròn vành rõ chữ, nhả chữ tự nhiên.",
      "Thực hành gõ đệm thanh phách, song loan theo phách của nhịp 2/4.",
      "Bồi dưỡng niềm vui đến trường, tình cảm gắn bó với thầy cô và bạn bè lớp 3."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
          <h4 class="font-bold text-red-900 dark:text-red-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-school text-red-600"></i> Ca khúc 'Bài ca đi học'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát do nhạc sĩ <strong>Phan Trần Bảng</strong> sáng tác, mở đầu bằng âm thanh rộn rã: <em>'Bình minh dâng lên ánh trên giọt sương long lanh / Đàn bướm phơi phới lượn trên cành hoa rung rinh...'</em>. Giai điệu mượt mà, rộn rã bước chân học trò cắp sách tới trường trong nắng sớm bình minh.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-microphone-lines text-red-500"></i> 1. Cấu trúc bài hát
            </h5>
            <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li><strong>Số chỉ nhịp:</strong> Nhịp 2/4 với tiết tấu vui tươi, nhịp nhàng.</li>
              <li><strong>Hình thức:</strong> Bài hát gồm 2 đoạn đơn giản, cao độ vừa vặn với giọng hát tuổi thơ lớp 3.</li>
              <li><strong>Lưu ý kỹ thuật:</strong> Lấy hơi nhẹ nhàng ở cuối mỗi câu, giữ nụ cười tươi khi hát.</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-drum text-red-500"></i> 2. Gõ đệm nhạc cụ
            </h5>
            <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li><strong>Thanh phách:</strong> Gõ vào các tiếng phách mạnh và phách nhẹ đều tay.</li>
              <li><strong>Song loan:</strong> Điểm nhịp mở đầu mỗi câu hát tạo tiếng 'cốc' giòn giã.</li>
              <li><strong>Vỗ tay:</strong> Vỗ tay theo nhịp bước chân đi học tung tăng.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-red-500"></i> Khởi động giọng & Thực hành:
        </h5>
        <p class="text-xs">Luyện thanh theo mẫu âm: Đô - Rê - Mi - Son - Mi - Rê - Đô (La la la la la la la). Hát kết hợp vỗ tay theo phách nhịp 2/4.</p>
      </div>
    `,
    summary: "Ca khúc 'Bài ca đi học' của Phan Trần Bảng viết ở nhịp 2/4 với tính chất vui tươi, trong sáng, ngợi ca niềm vui cắp sách tới trường đón ánh bình minh rạng rỡ của tuổi thơ.",
    quizzes: [
      {
        question: "Ai là tác giả sáng tác ca khúc thiếu nhi 'Bài ca đi học'?",
        options: ["Nhạc sĩ Phan Trần Bảng", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phong Nhã", "Nhạc sĩ Hoàng Vân"],
        correct: 0,
        explanation: "Bài hát 'Bài ca đi học' là một sáng tác nổi tiếng của nhạc sĩ Phan Trần Bảng."
      },
      {
        question: "Sắc thái tình cảm chủ đạo của bài hát 'Bài ca đi học' là gì?",
        options: [
          "Vui tươi, hồn nhiên, rộn ràng và trong sáng",
          "Buồn rầu, ủ rũ",
          "Căng thẳng, hồi hộp",
          "Hùng hổ giận dữ"
        ],
        correct: 0,
        explanation: "Bài hát thể hiện niềm vui hân hoan bước vào năm học mới với giai điệu tươi sáng."
      },
      {
        question: "Bài hát 'Bài ca đi học' được viết ở số chỉ nhịp nào?",
        options: ["Nhịp 2/4", "Nhịp 3/4", "Nhịp 4/4", "Nhịp 6/8"],
        correct: 0,
        explanation: "Bài hát được viết ở nhịp 2/4 mang tính chất nhịp nhàng, bước đi vui tươi."
      },
      {
        question: "Hình ảnh thiên nhiên nào xuất hiện ngay trong câu hát mở đầu của bài hát?",
        options: [
          "Bình minh dâng lên ánh trên giọt sương long lanh",
          "Cơn mưa rào đêm tối",
          "Ánh trăng rằm mùa thu",
          "Cơn gió đông lạnh giá"
        ],
        correct: 0,
        explanation: "Lời ca mở đầu: 'Bình minh dâng lên ánh trên giọt sương long lanh, đàn bướm phơi phới lượn trên cành hoa rung rinh'."
      }
    ]
  },

  {
    id: "bai-2",
    lessonNum: 2,
    topicNum: 1,
    topicName: "Chủ đề 1: Chào năm học mới",
    tag: "Lí thuyết & Đọc nhạc",
    title: "Bài 2: Nốt đen, Nốt trắng & Bài đọc nhạc số 1 (Đô - Rê - Mi)",
    objectives: [
      "Nhận biết hình dáng nốt đen (1 phách) và nốt trắng (2 phách).",
      "Hiểu mối quan hệ trường độ: 1 nốt trắng = 2 nốt đen.",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 1 với 3 nốt: Đô - Rê - Mi.",
      "Làm quen với ký hiệu bàn tay (Curwen Hand Signs) nốt Đô, Rê, Mi."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-shapes text-red-600"></i> Nốt đen và Nốt trắng
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
            <strong class="text-red-800 dark:text-red-300 block mb-1">1. Nốt đen (Quarter note)</strong>
            <span>Đầu nốt đặc màu đen, có thân nốt thẳng đứng. Có giá trị trường độ bằng <strong>1 phách</strong> (đếm 1 tiếng vỗ tay).</span>
          </div>
          <div class="p-3.5 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
            <strong class="text-red-800 dark:text-red-300 block mb-1">2. Nốt trắng (Half note)</strong>
            <span>Đầu nốt rỗng màu trắng, có thân nốt thẳng đứng. Có giá trị trường độ bằng <strong>2 phách</strong> (1 nốt trắng = 2 nốt đen).</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-book-open text-red-500"></i> Bài đọc nhạc số 1 (Đô - Rê - Mi)
          </h5>
          <p class="text-xs sm:text-sm">
            Bài đọc nhạc số 1 gồm 3 âm cơ bản đi liền bậc: <strong>Đô - Rê - Mi</strong>. Giai điệu mộc mạc, nhịp nhàng giúp các em học sinh bước đầu làm quen với việc đọc xướng âm cao độ kết hợp gõ phách.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-list-check text-red-500"></i> Thực hành Bài đọc nhạc số 1:
        </h5>
        <p class="text-xs">1. Đọc tên nốt nhạc theo thang âm: Đô - Rê - Mi rồi đọc ngược lại: Mi - Rê - Đô.</p>
        <p class="text-xs">2. Gõ tiết tấu: Đen - Đen | Đen - Đen | Trắng --- ||</p>
        <p class="text-xs">3. Vừa đọc xướng âm vừa làm ký hiệu bàn tay: Đô (nắm tay), Rê (bàn tay nghiêng), Mi (bàn tay nằm ngang).</p>
      </div>
    `,
    summary: "Nốt đen bằng 1 phách, Nốt trắng bằng 2 phách (1 nốt trắng = 2 nốt đen). Bài đọc nhạc số 1 rèn luyện 3 cao độ đầu tiên: Đô, Rê, Mi trên nhịp 2/4.",
    quizzes: [
      {
        question: "Một nốt trắng có giá trị trường độ bằng bao nhiêu nốt đen?",
        options: ["2 nốt đen", "4 nốt đen", "1 nốt đen", "3 nốt đen"],
        correct: 0,
        explanation: "1 nốt trắng có độ dài bằng 2 phách, tương đương với 2 nốt đen (mỗi nốt 1 phách)."
      },
      {
        question: "Nốt đen có giá trị trường độ bằng bao nhiêu phách?",
        options: ["1 phách", "2 phách", "4 phách", "1/2 phách"],
        correct: 0,
        explanation: "Nốt đen là đơn vị đo trường độ cơ bản có giá trị bằng 1 phách."
      },
      {
        question: "Đặc điểm hình dáng bên ngoài của nốt đen là gì?",
        options: [
          "Đầu nốt đặc ruột màu đen và có thân nốt",
          "Đầu nốt rỗng màu trắng không có thân",
          "Có móc ở đuôi",
          "Hình tam giác"
        ],
        correct: 0,
        explanation: "Nốt đen có đầu nốt tô kín màu đen và có một thân thẳng đứng."
      },
      {
        question: "Bài đọc nhạc số 1 sử dụng 3 nốt nhạc nào theo thứ tự cao độ tăng dần?",
        options: ["Đô - Rê - Mi", "Mi - Rê - Đô", "Son - La - Si", "Đô - Mi - Son"],
        correct: 0,
        explanation: "3 nốt nhạc cơ bản ban đầu là Đô, Rê, Mi đi liền bậc từ thấp lên cao."
      }
    ]
  },

  // ================= CHỦ ĐỀ 2: KHÚC HÁT ĐỒNG DAO =================
  {
    id: "bai-3",
    lessonNum: 3,
    topicNum: 2,
    topicName: "Chủ đề 2: Khúc hát đồng dao",
    tag: "Học hát & Trò chơi",
    title: "Bài 3: Học hát bài 'Tập tầm vông' (Lê Hữu Lộc) & Trò chơi dân gian",
    objectives: [
      "Hát đúng giai điệu và lời ca bài hát 'Tập tầm vông' (nhạc: Lê Hữu Lộc, lời: Đồng dao cổ).",
      "Biết thể hiện sắc thái vui tươi, dí dỏm, ngây thơ của khúc hát đồng dao thiếu nhi.",
      "Hát kết hợp trò chơi dân gian đoán đồ vật giấu trong tay.",
      "Gìn giữ và yêu mến các trò chơi và bài ca đồng dao truyền thống của dân tộc."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
          <h4 class="font-bold text-red-900 dark:text-red-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-gamepad text-red-600"></i> Bài hát đồng dao 'Tập tầm vông'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát do nhạc sĩ <strong>Lê Hữu Lộc</strong> phổ nhạc từ bài đồng dao dân gian quen thuộc: <em>'Tập tầm vông tay không tay có / Tập tầm vó tay có tay không...'</em>. Đây là bài ca gắn liền với trò chơi đoán tay giấu đồ vật vô cùng hào hứng của tuổi thơ Việt Nam.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <strong class="text-red-700 dark:text-red-400 block mb-1">Giai điệu dí dỏm</strong>
            <p>Nhịp điệu nhanh nhẹn, lời ca có vần điệu rộn ràng, dễ thuộc, thích hợp cho các hoạt động sinh hoạt tập thể lớp học.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <strong class="text-red-700 dark:text-red-400 block mb-1">Cách chơi trò chơi</strong>
            <p>Một bạn giấu viên sỏi nhỏ trong một bàn tay, nắm chặt hai tay và xoay tròn theo nhịp hát. Câu cuối cùng, bạn đối diện chỉ vào tay đoán có vật.</p>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-dice text-red-500"></i> Hát kết hợp chơi trò chơi theo cặp:
        </h5>
        <p class="text-xs">Hai bạn ngồi đối diện nhau, vừa hát vừa vung tay theo phách: 'Tập tầm vông tay không tay có...'. Đến tiếng 'nào' cuối cùng thì xòe tay ra kiểm tra kết quả.</p>
      </div>
    `,
    summary: "Bài hát 'Tập tầm vông' phổ nhạc từ lời đồng dao cổ với giai điệu dí dỏm, vui tươi, kết hợp trò chơi dân gian đoán tay mang lại tiếng cười rộn rã cho tuổi thơ.",
    quizzes: [
      {
        question: "Ai là tác giả phổ nhạc bài hát thiếu nhi 'Tập tầm vông'?",
        options: ["Nhạc sĩ Lê Hữu Lộc", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phong Nhã", "Nhạc sĩ Phạm Tuyên"],
        correct: 0,
        explanation: "Nhạc sĩ Lê Hữu Lộc đã phổ nhạc cho bài đồng dao cổ 'Tập tầm vông'."
      },
      {
        question: "Lời ca của bài hát 'Tập tầm vông' có nguồn gốc từ đâu?",
        options: [
          "Lời đồng dao dân gian truyền miệng của trẻ em Việt Nam",
          "Bài thơ dịch nước ngoài",
          "Một câu chuyện cổ tích Grimm",
          "Một bài hát rock"
        ],
        correct: 0,
        explanation: "'Tập tầm vông' là bài đồng dao dân gian quen thuộc được lưu truyền qua nhiều thế hệ tuổi thơ."
      },
      {
        question: "Trò chơi dân gian gắn liền với bài hát 'Tập tầm vông' là trò chơi gì?",
        options: [
          "Trò chơi giấu đồ vật trong lòng bàn tay để bạn đoán 'tay không - tay có'",
          "Trò chơi nhảy dây",
          "Trò chơi kéo co",
          "Trò chơi trốn tìm"
        ],
        correct: 0,
        explanation: "Người chơi nắm tay giấu một vật nhỏ và quay vòng theo nhịp hát để người đối diện đoán xem vật ở tay nào."
      },
      {
        question: "Tính chất âm nhạc của các bài hát đồng dao trẻ em thường là gì?",
        options: [
          "Vui tươi, dí dỏm, nhịp nhàng và giàu nhạc điệu",
          "Trầm buồn, bi thảm",
          "Căng thẳng, ghê sợ",
          "Chậm chạp, u uất"
        ],
        correct: 0,
        explanation: "Đồng dao luôn mộc mạc, dí dỏm, có nhịp vần vui tai phù hợp với tâm hồn trẻ thơ."
      }
    ]
  },

  {
    id: "bai-4",
    lessonNum: 4,
    topicNum: 2,
    topicName: "Chủ đề 2: Khúc hát đồng dao",
    tag: "Lí thuyết & Thường thức",
    title: "Bài 4: Nốt móc đơn, Bài đọc nhạc số 2 & Giới thiệu Trống nhỏ, Triangle",
    objectives: [
      "Nhận biết hình nốt móc đơn và hiểu giá trị trường độ (bằng 1/2 nốt đen, 2 nốt móc đơn = 1 phách).",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 2 (Đô - Rê - Mi - Son).",
      "Tìm hiểu hình dáng và âm thanh của Trống nhỏ và Kẻng tam giác (Triangle).",
      "Thực hành gõ đệm nhạc cụ phối hợp theo tiết tấu nốt móc đơn."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-shapes text-red-600"></i> Nốt móc đơn trong âm nhạc
        </h4>
        <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs sm:text-sm">
          <ul class="space-y-1.5 list-disc list-inside">
            <li><strong>Hình dáng:</strong> Có đầu nốt đen, thân nốt thẳng và có <strong>1 móc</strong> ở đuôi nốt (hoặc 1 vạch nối khi đứng thành cặp).</li>
            <li><strong>Trường độ:</strong> Có giá trị bằng một nửa nốt đen (1/2 phách).</li>
            <li><strong>Quy tắc:</strong> <strong>2 nốt móc đơn = 1 nốt đen (1 phách)</strong>. Khi đọc tiết tấu: 'Đơn - đơn' trong 1 nhịp vỗ tay.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-drum text-red-500"></i> Giới thiệu Trống nhỏ và Triangle
          </h5>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-lg bg-red-50/50 dark:bg-red-950/30 border border-red-100 dark:border-red-900">
              <strong>Trống nhỏ:</strong> Mặt trống bịt bằng da hoặc màng nhựa dẻo, dùng dùi gỗ gõ vào tâm mặt trống tạo tiếng 'tùng' vang trầm hoặc gõ vành tạo tiếng 'cắc' đanh gọn.
            </div>
            <div class="p-3 rounded-lg bg-red-50/50 dark:bg-red-950/30 border border-red-100 dark:border-red-900">
              <strong>Triangle (Kẻng tam giác):</strong> Làm bằng thanh thép uốn thành hình tam giác hở một góc, dùng dùi kim loại gõ tạo âm thanh trong trẻo, lanh lảnh ngân vang.
            </div>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-red-500"></i> Thực hành Bài đọc nhạc số 2:
        </h5>
        <p class="text-xs">Đọc cao độ 4 nốt: Đô - Rê - Mi - Son. Tiết tấu: 'Đơn - đơn - Đen | Đơn - đơn - Đen | Trắng --- ||' kết hợp gõ đệm trống nhỏ và triangle.</p>
      </div>
    `,
    summary: "Nốt móc đơn có 1 móc ở đuôi, bằng 1/2 nốt đen (2 nốt móc đơn = 1 nốt đen). Trống nhỏ và kẻng tam giác (Triangle) là hai nhạc cụ gõ học đường quen thuộc tạo âm thanh sống động.",
    quizzes: [
      {
        question: "Cần bao nhiêu nốt móc đơn để có độ dài trường độ tương đương với 1 nốt đen?",
        options: ["2 nốt móc đơn", "4 nốt móc đơn", "1 nốt móc đơn", "3 nốt móc đơn"],
        correct: 0,
        explanation: "1 nốt đen (1 phách) = 2 nốt móc đơn (mỗi nốt 1/2 phách)."
      },
      {
        question: "Hình nốt móc đơn có đặc điểm nhận biết gì ở đuôi nốt?",
        options: ["Có 1 móc ở đuôi nốt", "Có 2 móc ở đuôi nốt", "Không có móc", "Có hình ngôi sao"],
        correct: 0,
        explanation: "Nốt móc đơn có đúng 1 nét móc nhỏ cong ở đuôi nốt."
      },
      {
        question: "Nhạc cụ gõ Triangle được làm bằng chất liệu gì và có hình dạng gì?",
        options: [
          "Bằng kim loại (thép) uốn hình tam giác",
          "Bằng gỗ hình tròn",
          "Bằng gốm sứ hình vuông",
          "Bằng nhựa dẻo hình chữ nhật"
        ],
        correct: 0,
        explanation: "Triangle là thanh kim loại hình tam giác hở góc, gõ bằng dùi sắt tạo tiếng leng keng trong trẻo."
      },
      {
        question: "Bài đọc nhạc số 2 trong chương trình Lớp 3 gồm có những nốt nhạc nào?",
        options: ["Đô - Rê - Mi - Son", "Đô - Rê - Mi - Pha", "Son - La - Si", "Đô - Mi - Son - Đố"],
        correct: 0,
        explanation: "Bài đọc nhạc số 2 giới thiệu thêm nốt Son đi liền với 3 nốt Đô, Rê, Mi."
      }
    ]
  },

  // ================= CHỦ ĐỀ 3: MÁI TRƯỜNG MẾN YÊU =================
  {
    id: "bai-5",
    lessonNum: 5,
    topicNum: 3,
    topicName: "Chủ đề 3: Mái trường mến yêu",
    tag: "Học hát",
    title: "Bài 5: Học hát bài 'Em yêu trường em' (Hoàng Vân)",
    objectives: [
      "Hát đúng giai điệu và ca từ bài hát 'Em yêu trường em' (nhạc và lời: Hoàng Vân).",
      "Thể hiện tình cảm gắn bó, yêu quý mái trường, thầy cô giáo và bạn bè thân thương.",
      "Hát với sắc thái vui tươi, rộn ràng, nhịp nhàng theo phách 2/4.",
      "Biết giữ gìn trường lớp xanh, sạch, đẹp và thi đua học tập tốt."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
          <h4 class="font-bold text-red-900 dark:text-red-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-chalkboard-user text-red-600"></i> Ca khúc 'Em yêu trường em'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát do nhạc sĩ <strong>Hoàng Vân</strong> sáng tác, khắc họa bức tranh mái trường rộn rã: <em>'Em yêu trường em, với bao bạn thân và cô giáo hiền, như yêu quê hương cắp sách đến trường trong muôn vàn yêu thương...'</em>. Từng nốt nhạc reo vui như chim ríu rít dưới tán bàng xanh mát.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-microphone text-red-500"></i> Hướng dẫn biểu diễn ca khúc
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Hát dõng dạc, vui tươi, thể hiện rõ các danh từ: 'trang sách hồng', 'bút mực', 'cờ sao bay tung bay'.</li>
            <li>Hát ngân đủ phách cuối câu, lấy hơi dứt khoát không ngắt quãng giữa từ.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-users text-red-500"></i> Biểu diễn tập thể:
        </h5>
        <p class="text-xs">Cả lớp đứng thẳng tự nhiên, nhún chân theo phách mạnh nhịp 2/4 và hòa giọng đồng thanh vui tươi.</p>
      </div>
    `,
    summary: "Ca khúc 'Em yêu trường em' của nhạc sĩ Hoàng Vân với giai điệu rộn ràng, hồn nhiên, bồi đắp tình yêu sâu sắc đối với mái trường, thầy cô và bạn bè thân thương.",
    quizzes: [
      {
        question: "Ai là tác giả sáng tác ca khúc học đường kinh điển 'Em yêu trường em'?",
        options: ["Nhạc sĩ Hoàng Vân", "Nhạc sĩ Văn Cao", "Nhạc sĩ Bùi Đình Thảo", "Nhạc sĩ Phong Nhã"],
        correct: 0,
        explanation: "Bài hát 'Em yêu trường em' là một trong những sáng tác nổi tiếng nhất của nhạc sĩ Hoàng Vân viết cho lứa tuổi thiếu nhi."
      },
      {
        question: "Trong bài hát, tình yêu mái trường được tác giả so sánh gắn liền với điều gì?",
        options: [
          "Như yêu quê hương cắp sách đến trường trong muôn vàn yêu thương",
          "Như đi dạo chơi trong công viên",
          "Như ngắm nhìn bầu trời đêm",
          "Như những chuyến du lịch xa xôi"
        ],
        correct: 0,
        explanation: "Lời ca so sánh: 'Em yêu trường em với bao bạn thân và cô giáo hiền, như yêu quê hương cắp sách đến trường trong muôn vàn yêu thương'."
      },
      {
        question: "Sắc thái tình cảm chủ đạo khi thể hiện bài hát 'Em yêu trường em' là gì?",
        options: [
          "Vui tươi, náo nức, tự hào và tràn đầy yêu thương",
          "Ủ rũ buồn thảm",
          "Căng thẳng đáng sợ",
          "Lạnh lùng xa cách"
        ],
        correct: 0,
        explanation: "Bài hát thể hiện niềm vui tươi sáng và tình cảm thân thiết gắn bó với trường lớp."
      },
      {
        question: "Để mái trường luôn sạch đẹp, học sinh lớp 3 cần thực hiện hành động nào?",
        options: [
          "Vứt rác đúng nơi quy định, chăm sóc bồn hoa cây cảnh và giữ gìn bàn ghế",
          "Vẽ bậy lên tường lớp học",
          "Bẻ cành cây sân trường",
          "Vứt rác bừa bãi ra sân"
        ],
        correct: 0,
        explanation: "Giữ gìn vệ sinh chung và chăm sóc cây xanh giúp trường học luôn xanh, sạch, đẹp."
      }
    ]
  },

  {
    id: "bai-6",
    lessonNum: 6,
    topicNum: 3,
    topicName: "Chủ đề 3: Mái trường mến yêu",
    tag: "Lí thuyết & Đọc nhạc",
    title: "Bài 6: Ký hiệu bàn tay Curwen, Bài đọc nhạc số 3 & Nhạc sĩ Phan Huỳnh Điểu",
    objectives: [
      "Thực hiện chuẩn xác 5 ký hiệu bàn tay (Curwen Hand Signs) cho 5 nốt nhạc: Đô, Rê, Mi, Son, La.",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 3.",
      "Tìm hiểu tiểu sử và các ca khúc thiếu nhi bất hủ của Nhạc sĩ Phan Huỳnh Điểu (Đội kèn tí hon, Nhớ ơn Bác...).",
      "Cảm thụ âm điệu vui tươi, dí dỏm trong âm nhạc của Phan Huỳnh Điểu."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-hand text-red-600"></i> Ký hiệu bàn tay (Curwen Hand Signs)
        </h4>
        <p class="text-xs sm:text-sm">
          Ký hiệu bàn tay giúp học sinh trực quan hóa cao độ âm thanh từ thấp lên cao thông qua vị trí bàn tay trước ngực:
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs text-center">
          <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
            <strong class="text-red-700 dark:text-red-300 block mb-1">Nốt Đô</strong>
            <span>Nắm chặt nắm tay, đặt ngang thắt lưng</span>
          </div>
          <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
            <strong class="text-red-700 dark:text-red-300 block mb-1">Nốt Rê</strong>
            <span>Bàn tay khép nghiêng hướng lên trên</span>
          </div>
          <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
            <strong class="text-red-700 dark:text-red-300 block mb-1">Nốt Mi</strong>
            <span>Bàn tay duỗi thẳng nằm ngang ngực</span>
          </div>
          <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
            <strong class="text-red-700 dark:text-red-300 block mb-1">Nốt Son</strong>
            <span>Lòng bàn tay dựng đứng hướng về mặt</span>
          </div>
          <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
            <strong class="text-red-700 dark:text-red-300 block mb-1">Nốt La</strong>
            <span>Bàn tay thả lỏng khum cong hướng xuống</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-star text-red-500"></i> Nhạc sĩ Phan Huỳnh Điểu (1924 - 2015)
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Nhạc sĩ Phan Huỳnh Điểu quê ở Đà Nẵng, là một trong những nhạc sĩ tài hoa bậc nhất của Việt Nam. Ông có rất nhiều sáng tác thiếu nhi dí dỏm, đáng yêu như: <em>Đội kèn tí hon (Tè tò te...), Nhớ ơn Bác, Những con quạ đen...</em> Ông được trao tặng Giải thưởng Hồ Chí Minh về Văn học - Nghệ thuật năm 2000.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-red-500"></i> Thực hành Bài đọc nhạc số 3:
        </h5>
        <p class="text-xs">Đọc cao độ 5 nốt: Đô - Rê - Mi - Son - La. Học sinh vừa đọc xướng âm vừa làm ký hiệu bàn tay tương ứng theo nhịp phách.</p>
      </div>
    `,
    summary: "Ký hiệu bàn tay Curwen giúp ghi nhớ cao độ Đô - Rê - Mi - Son - La trực quan. Nhạc sĩ Phan Huỳnh Điểu là tác giả ca khúc thiếu nhi dí dỏm nổi tiếng 'Đội kèn tí hon'.",
    quizzes: [
      {
        question: "Trong ký hiệu bàn tay Curwen, nốt Đô được biểu thị bằng động tác nào?",
        options: [
          "Nắm chặt nắm tay, đặt ngang tầm thắt lưng",
          "Xòe bàn tay lên cao ngang trán",
          "Chỉ một ngón tay lên trời",
          "Bắt chéo hai tay trước ngực"
        ],
        correct: 0,
        explanation: "Nốt Đô (âm thấp nhất trong nhóm) được thể hiện bằng nắm tay khép đặt ngang tầm thắt lưng."
      },
      {
        question: "Ai là tác giả của ca khúc thiếu nhi vui nhộn 'Đội kèn tí hon' (Te tò te đây là tiếng kèn te...)?",
        options: ["Nhạc sĩ Phan Huỳnh Điểu", "Nhạc sĩ Văn Cao", "Nhạc sĩ Bùi Đình Thảo", "Nhạc sĩ Phong Nhã"],
        correct: 0,
        explanation: "Bài hát 'Đội kèn tí hon' là sáng tác ngộ nghĩnh, đáng yêu của nhạc sĩ Phan Huỳnh Điểu."
      },
      {
        question: "Quê hương của nhạc sĩ Phan Huỳnh Điểu ở thành phố nào ở miền Trung?",
        options: ["Đà Nẵng", "Huế", "Nha Trang", "Quy Nhơn"],
        correct: 0,
        explanation: "Nhạc sĩ Phan Huỳnh Điểu sinh ra và lớn lên tại thành phố biển Đà Nẵng."
      },
      {
        question: "Lợi ích của việc đọc nhạc kết hợp ký hiệu bàn tay là gì?",
        options: [
          "Giúp cảm nhận cao độ âm thanh trực quan và rèn luyện trí nhớ âm nhạc",
          "Để múa cho đẹp mắt",
          "Để che mặt khi hát",
          "Không có tác dụng gì"
        ],
        correct: 0,
        explanation: "Ký hiệu bàn tay giúp học sinh ghi nhớ độ cao thấp của từng nốt nhạc một cách trực quan, sinh động."
      }
    ]
  },

  // ================= CHỦ ĐỀ 4: EM YÊU DÂN CA =================
  {
    id: "bai-7",
    lessonNum: 7,
    topicNum: 4,
    topicName: "Chủ đề 4: Em yêu dân ca",
    tag: "Học hát & Dân ca",
    title: "Bài 7: Học hát Dân ca Thái 'Xòe hoa' (Lời mới: Phan Duy)",
    objectives: [
      "Hát đúng giai điệu, lời ca bài Dân ca Thái 'Xòe hoa' (lời mới: Phan Duy).",
      "Cảm nhận không khí vui tươi, rộn ràng của đồng bào dân tộc Thái trong đêm hội xòe hoa mừng bản làng no ấm.",
      "Hát kết hợp gõ đệm thanh phách và động tác múa xòe quạt Thái duyên dáng.",
      "Yêu quý và tôn trọng bản sắc văn hóa các dân tộc anh em trên dải đất Việt Nam."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
          <h4 class="font-bold text-red-900 dark:text-red-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-fan text-red-600"></i> Điệu múa Xòe hoa của người Thái
          </h4>
          <p class="text-xs sm:text-sm">
            Múa Xòe là nét văn hóa truyền thống đặc sắc của đồng bào dân tộc Thái ở vùng núi Tây Bắc (đã được UNESCO công nhận là Di sản văn hóa phi vật thể của nhân loại). Bài hát <em>'Xòe hoa'</em> rộn rã tiếng cồng chiêng, tiếng trống thôi thúc trai bản gái mường cùng nắm tay nhau kết thành vòng xòe lớn bên ánh lửa bập bùng.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <strong class="text-red-700 dark:text-red-400 block mb-1">Giai điệu rộn rã Tây Bắc</strong>
            <p>Nhịp điệu dứt khoát, rộn ràng, thể hiện bước chân xòe vòng quanh đống lửa với lời ca mời gọi: 'Bùng bong bính bong...'</p>
          </div>
          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <strong class="text-red-700 dark:text-red-400 block mb-1">Động tác múa Xòe quạt</strong>
            <p>Tay cầm chiếc quạt hoa xòe nhẹ, chân bước nhún theo nhịp 2/4: bước sang phải nhún, bước sang trái nhún đều đặn.</p>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-hands-holding-circle text-red-500"></i> Hát kết hợp múa xòe vòng:
        </h5>
        <p class="text-xs">Cả lớp nắm tay nhau thành vòng tròn lớn, vừa hát vừa bước nhịp nhàng theo chiều kim đồng hồ quanh lớp học.</p>
      </div>
    `,
    summary: "Dân ca Thái 'Xòe hoa' mang âm hưởng rộn rã của núi rừng Tây Bắc, miêu tả đêm hội xòe hoa tưng bừng gắn kết cộng đồng buôn bản.",
    quizzes: [
      {
        question: "Bài hát 'Xòe hoa' là làn điệu dân ca của dân tộc nào ở Việt Nam?",
        options: ["Dân tộc Thái (Tây Bắc)", "Dân tộc Kinh", "Dân tộc Chăm", "Dân tộc Khơ-me"],
        correct: 0,
        explanation: "Bài hát 'Xòe hoa' là điệu dân ca nổi tiếng của đồng bào dân tộc Thái ở vùng núi Tây Bắc."
      },
      {
        question: "Nghệ thuật Múa Xòe của người Thái đã được tổ chức quốc tế nào vinh danh là Di sản văn hóa phi vật thể của nhân loại?",
        options: ["UNESCO", "WHO", "UNICEF", "FIFA"],
        correct: 0,
        explanation: "Nghệ thuật Xòe Thái được UNESCO ghi danh là Di sản văn hóa phi vật thể đại diện của nhân loại vào năm 2021."
      },
      {
        question: "Từ tượng thanh nào trong bài hát 'Xòe hoa' mô phỏng tiếng cồng chiêng, tiếng trống rộn rã?",
        options: ["Bùng bong bính bong", "Tùng cắc tùng cắc", "Tình tính tang", "Róc rách róc rách"],
        correct: 0,
        explanation: "Tiếng đệm 'Bùng bong bính bong màng nghe tiếng trống vang lừng' mô phỏng tiếng cồng trống ngày hội."
      },
      {
        question: "Đạo cụ biểu diễn quen thuộc nhất thường đi liền với điệu múa Xòe Thái là gì?",
        options: ["Chiếc quạt hoa hoặc chiếc khăn piêu", "Cây đàn guitar", "Thanh kiếm", "Cái ô đen"],
        correct: 0,
        explanation: "Xòe quạt và Xòe khăn là hai hình thức múa Xòe phổ biến và duyên dáng nhất của các cô gái Thái."
      }
    ]
  },

  {
    id: "bai-8",
    lessonNum: 8,
    topicNum: 4,
    topicName: "Chủ đề 4: Em yêu dân ca",
    tag: "Lí thuyết & Thường thức",
    title: "Bài 8: Phách mạnh - phách nhẹ trong nhịp 2/4 & Giới thiệu Đàn Nhị (Đàn Cò)",
    objectives: [
      "Hiểu rõ khái niệm Phách mạnh và Phách nhẹ trong số chỉ nhịp 2/4.",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 4 có gõ phân biệt phách mạnh (gõ mạnh) và phách nhẹ (gõ nhẹ).",
      "Tìm hiểu cấu tạo và âm thanh réo rắt của cây Đàn Nhị (Đàn Cò) - nhạc cụ dây kéo bằng vĩ của Việt Nam.",
      "Tự hào về nét độc đáo của dàn nhạc cổ truyền dân tộc."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-music text-red-600"></i> Phách mạnh và Phách nhẹ trong nhịp 2/4
        </h4>
        <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs sm:text-sm">
          <ul class="space-y-1.5 list-disc list-inside">
            <li>Trong mỗi ô nhịp 2/4 có đúng 2 phách:</li>
            <li><strong>Phách 1 là PHÁCH MẠNH:</strong> Mang trọng âm của ô nhịp (khi gõ ta nhấn tay mạnh dứt khoát).</li>
            <li><strong>Phách 2 là PHÁCH NHẸ:</strong> Không mang trọng âm (khi gõ ta chạm nhẹ tay).</li>
            <li><strong>Quy luật:</strong> Mạnh - Nhẹ | Mạnh - Nhẹ | Mạnh - Nhẹ lặp lại đều đặn suốt bản nhạc.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-guitar text-red-500"></i> Đàn Nhị (Đàn Cò) - Tiếng đàn réo rắt
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Đàn Nhị có <strong>2 dây</strong> (chữ 'Nhị' là hai), ở miền Nam còn gọi là <strong>Đàn Cò</strong> (do cần đàn uốn cong như cổ con cò). Thùng đàn nhỏ bọc da trăn, dây đàn mắc song song trên cần. Người chơi dùng một cây cung vĩ luồn vào giữa 2 dây để kéo miết, tạo ra âm thanh réo rắt, có thể mô phỏng tiếng chim hót, tiếng ngựa hí hay nỗi niềm tâm sự sâu lắng trong nghệ thuật Chèo, Tuồng, Cải lương.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-list-check text-red-500"></i> Thực hành Bài đọc nhạc số 4:
        </h5>
        <p class="text-xs">Đọc tên nốt nhạc kết hợp gõ phách: phách 1 gõ thanh phách mạnh xuống mặt bàn, phách 2 vỗ nhẹ hai thanh phách vào nhau.</p>
      </div>
    `,
    summary: "Trong nhịp 2/4, phách 1 là phách mạnh, phách 2 là phách nhẹ. Đàn Nhị (Đàn Cò) có 2 dây, chơi bằng cung vĩ kéo, giữ vai trò trụ cột trong nền âm nhạc cổ truyền Việt Nam.",
    quizzes: [
      {
        question: "Trong nhịp 2/4, phách thứ nhất mang tính chất gì?",
        options: ["Phách mạnh", "Phách nhẹ", "Phách im lặng", "Không có tính chất gì"],
        correct: 0,
        explanation: "Phách 1 trong ô nhịp 2/4 luôn luôn là phách mạnh."
      },
      {
        question: "Cây Đàn Nhị của dân tộc ta có bao nhiêu dây đàn?",
        options: ["2 dây đàn", "1 dây đàn", "4 dây đàn", "16 dây đàn"],
        correct: 0,
        explanation: "'Nhị' nghĩa là hai, Đàn Nhị có đúng 2 dây mắc song song dọc theo cần đàn."
      },
      {
        question: "Ở miền Nam, Đàn Nhị còn được gọi bằng tên gọi dân dã nào?",
        options: ["Đàn Cò", "Đàn Kìm", "Đàn Bầu", "Đàn Sến"],
        correct: 0,
        explanation: "Người dân miền Nam thường gọi đàn Nhị là Đàn Cò vì cần đàn thon dài như cổ cò."
      },
      {
        question: "Bộ phận dùng để kéo cọ sát vào dây đàn Nhị phát ra âm thanh gọi là gì?",
        options: ["Cây cung vĩ (cần vĩ)", "Móng gảy", "Dùi gỗ", "Dây cáp"],
        correct: 0,
        explanation: "Cây cung vĩ có căng lông đuôi ngựa luồn giữa hai dây đàn để kéo miết phát ra âm thanh."
      }
    ]
  },

  // ================= CHỦ ĐỀ 5: MỪNG XUÂN MỚI =================
  {
    id: "bai-9",
    lessonNum: 9,
    topicNum: 5,
    topicName: "Chủ đề 5: Mừng xuân mới",
    tag: "Học hát",
    title: "Bài 9: Học hát bài 'Cùng múa hát dưới trăng' (Hoàng Lân)",
    objectives: [
      "Hát đúng giai điệu và ca từ bài hát 'Cùng múa hát dưới trăng' (nhạc và lời: Hoàng Lân).",
      "Cảm nhận khung cảnh đêm trăng rừng thơ mộng với muôn loài thú cùng nắm tay nhau nhảy múa hòa bình.",
      "Hát với sắc thái vui tươi, nhịp nhàng đung đưa theo nhịp 3/8.",
      "Bồi dưỡng tình yêu thiên nhiên, loài vật và tinh thần đoàn kết thân ái."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
          <h4 class="font-bold text-red-900 dark:text-red-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-moon text-red-600"></i> Ca khúc 'Cùng múa hát dưới trăng'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát do nhạc sĩ <strong>Hoàng Lân</strong> sáng tác. Khung cảnh đêm rằm mùa xuân khu rừng chan hòa ánh trăng sáng tỏ: chú thỏ trắng, đàn hươu nai, bác sóc nâu cùng nhau nắm tay nhảy múa reo cười: <em>'Mặt trăng mới lên tỏa sáng khu rừng, thỏ mẹ thỏ con nắm tay cùng múa...'</em>. Giai điệu mượt mà, bay bổng như một câu chuyện cổ tích thần tiên.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-microphone text-red-500"></i> Sắc thái thể hiện ca khúc
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Hát êm dịu, nhịp nhàng đung đưa người sang hai bên theo nhịp điệu nhịp 3.</li>
            <li>Phát âm tròn tiếng các tên loài vật: 'thỏ mẹ', 'thỏ con', 'hươu nai', 'sóc'.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-paw text-red-500"></i> Múa thú rừng dưới trăng:
        </h5>
        <p class="text-xs">Các bạn học sinh đeo mặt nạ thú (thỏ, nai, sóc) cùng nắm tay nhau kết thành vòng tròn nhảy chân sáo nhẹ nhàng quanh lớp học.</p>
      </div>
    `,
    summary: "Ca khúc 'Cùng múa hát dưới trăng' của nhạc sĩ Hoàng Lân mang giai điệu êm ái, thơ mộng, khắc họa tình bạn đoàn kết thân thương của muôn loài muông thú dưới ánh trăng xuân.",
    quizzes: [
      {
        question: "Ai là tác giả sáng tác ca khúc thiếu nhi 'Cùng múa hát dưới trăng'?",
        options: ["Nhạc sĩ Hoàng Lân", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phong Nhã", "Nhạc sĩ Bùi Đình Thảo"],
        correct: 0,
        explanation: "Bài hát 'Cùng múa hát dưới trăng' là một sáng tác nổi tiếng của nhạc sĩ Hoàng Lân."
      },
      {
        question: "Những con vật nào xuất hiện cùng nhau nhảy múa dưới ánh trăng trong bài hát?",
        options: [
          "Thỏ mẹ, thỏ con, hươu nai và sóc",
          "Hổ, báo, sư tử",
          "Cá heo và rùa biển",
          "Đại bàng và chim ưng"
        ],
        correct: 0,
        explanation: "Lời ca kể về thỏ, hươu nai và sóc cùng hòa giọng nhảy múa vui tươi dưới trăng."
      },
      {
        question: "Giai điệu của bài hát 'Cùng múa hát dưới trăng' mang tính chất như thế nào?",
        options: [
          "Êm dịu, nhịp nhàng đung đưa, trong sáng và bay bổng",
          "Hùng hổ giận dữ",
          "U sầu bi thảm",
          "Căng thẳng đáng sợ"
        ],
        correct: 0,
        explanation: "Giai điệu bài hát rất êm ả, đung đưa nhịp nhàng như khúc hát thần tiên."
      },
      {
        question: "Thông điệp tốt đẹp mà bài hát gửi gắm đến các bạn học sinh là gì?",
        options: [
          "Yêu thương thiên nhiên muông thú và sống chan hòa, đoàn kết thân ái bên nhau",
          "Khuyên mọi người tranh giành đồ chơi",
          "Không chơi cùng ai",
          "Săn bắt động vật hoang dã"
        ],
        correct: 0,
        explanation: "Bài hát ca ngợi tình bạn trong sáng, đoàn kết và tình yêu thiên nhiên động vật."
      }
    ]
  },

  {
    id: "bai-10",
    lessonNum: 10,
    topicNum: 5,
    topicName: "Chủ đề 5: Mừng xuân mới",
    tag: "Lí thuyết & Đọc nhạc",
    title: "Bài 10: Dấu lặng đen & Bài đọc nhạc số 5",
    objectives: [
      "Hiểu rõ công dụng của Dấu lặng đen trong bản nhạc: dùng để ngừng phát âm thanh trong thời gian 1 phách.",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 5 kết hợp nốt đen, nốt trắng và dấu lặng đen.",
      "Gõ phách chính xác: giữ im lặng không gõ vào phách có dấu lặng.",
      "Rèn luyện kỹ năng cảm nhận khoảng ngừng nghỉ trong âm nhạc."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-pause text-red-600"></i> Ý nghĩa của Dấu lặng đen
        </h4>
        <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs sm:text-sm">
          <ul class="space-y-1.5 list-disc list-inside">
            <li>Trong âm nhạc, khoảng im lặng cũng quan trọng như âm thanh. Dấu lặng dùng để ghi lại khoảng im lặng đó.</li>
            <li><strong>Dấu lặng đen:</strong> Có giá trị thời gian nghỉ đúng bằng <strong>1 nốt đen (1 phách)</strong>.</li>
            <li>Khi hát hoặc đọc nhạc gặp dấu lặng đen, ta ngừng phát ra âm thanh trong 1 phách nhưng vẫn đếm thầm nhịp trong đầu.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-music text-red-500"></i> Bài đọc nhạc số 5
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Bài đọc nhạc số 5 viết ở nhịp 2/4. Các nốt gồm: <strong>Đô - Rê - Mi - Son - La</strong>. Có sự xuất hiện của dấu lặng đen ở cuối câu nhạc giúp tạo điểm ngắt câu rõ ràng, mạch lạc.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-hand-holding-hand text-red-500"></i> Luyện đọc Bài đọc nhạc số 5:
        </h5>
        <p class="text-xs">Đọc xướng âm theo tiết tấu: Đen - Đen | Đen - (Lặng) | Đen - Đen | Trắng --- || Khi đến dấu lặng, mở nhẹ hai lòng bàn tay sang hai bên.</p>
      </div>
    `,
    summary: "Dấu lặng đen biểu thị thời gian tạm ngừng nghỉ âm thanh bằng 1 phách nốt đen. Bài đọc nhạc số 5 rèn luyện phản xạ ngắt tiếng chuẩn xác theo dấu lặng.",
    quizzes: [
      {
        question: "Dấu lặng đen có tác dụng gì trong bản nhạc?",
        options: [
          "Yêu cầu tạm ngừng phát âm thanh trong thời gian bằng 1 phách",
          "Yêu cầu hát to hết sức",
          "Làm tăng tốc độ bài hát lên gấp đôi",
          "Yêu cầu đổi sang bài hát khác"
        ],
        correct: 0,
        explanation: "Dấu lặng đen biểu thị khoảng thời gian tạm ngừng nghỉ phát âm thanh bằng độ dài 1 nốt đen (1 phách)."
      },
      {
        question: "Thời gian ngừng nghỉ của Dấu lặng đen tương đương với độ dài của nốt nhạc nào?",
        options: ["Nốt đen (1 phách)", "Nốt trắng (2 phách)", "Nốt tròn (4 phách)", "Nốt móc đơn (1/2 phách)"],
        correct: 0,
        explanation: "Dấu lặng đen có giá trị trường độ bằng đúng 1 nốt đen."
      },
      {
        question: "Khi đọc nhạc gặp dấu lặng đen, người đọc nên làm gì?",
        options: [
          "Giữ im lặng trong 1 nhịp đếm phách trong đầu",
          "Hét to tên nốt lặng",
          "Đọc nhanh nốt tiếp theo không cần dừng",
          "Gấp sách lại không đọc nữa"
        ],
        correct: 0,
        explanation: "Cần giữ im lặng chuẩn xác 1 phách nhưng nhịp đếm phách trong đầu vẫn tiếp tục duy trì đều đặn."
      },
      {
        question: "Bài đọc nhạc số 5 sử dụng các nốt nhạc nào sau đây?",
        options: ["Đô - Rê - Mi - Son - La", "Đô - Mi - Son - Đố", "La - Si - Đô", "Rê - Pha - La"],
        correct: 0,
        explanation: "Bài đọc nhạc số 5 củng cố 5 âm: Đô, Rê, Mi, Son, La."
      }
    ]
  },

  // ================= CHỦ ĐỀ 6: ĐỘNG VẬT DỄ THƯƠNG =================
  {
    id: "bai-11",
    lessonNum: 11,
    topicNum: 6,
    topicName: "Chủ đề 6: Động vật dễ thương",
    tag: "Học hát",
    title: "Bài 11: Học hát bài 'Chị ong nâu và em bé' (Tân Huyền)",
    objectives: [
      "Hát đúng giai điệu và ca từ bài hát 'Chị ong nâu và em bé' (nhạc và lời: Tân Huyền).",
      "Thể hiện tính chất vui tươi, nhí nhảnh, yêu đời của chị ong nâu chăm chỉ tìm hoa hút mật.",
      "Noi gương đức tính cần cù, chăm chỉ học hành và phụ giúp việc nhà của chị ong nâu.",
      "Hát kết hợp gõ đệm nhạc cụ tambourine, maracas sôi nổi."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
          <h4 class="font-bold text-red-900 dark:text-red-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-bug text-red-600"></i> Ca khúc 'Chị ong nâu và em bé'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát do nhạc sĩ <strong>Tân Huyền</strong> sáng tác, khắc họa hình ảnh chị ong nâu xinh xắn đập cánh bay lượn từ sáng sớm: <em>'Chị ong nâu nâu nâu nâu, chị bay đi đâu đi đâu? Chú gà trống mới gáy, ông mặt trời mới dậy...'</em>. Bài hát giáo dục các em nhỏ đức tính chăm chỉ, vâng lời cha mẹ và luôn vui vẻ làm việc có ích cho đời.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-microphone text-red-500"></i> Phong cách thể hiện bài hát
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Hát dứt khoát các tiếng 'nâu nâu nâu nâu', 'đi đâu đi đâu' nhí nhảnh, hoạt bát.</li>
            <li>Hai tay vẫy nhẹ sang hai bên mô phỏng cánh ong nâu cần mẫn bay tìm mật hoa.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-hands-clapping text-red-500"></i> Thực hành múa phụ họa:
        </h5>
        <p class="text-xs">Đứng nhún chân nhịp nhàng, hai bàn tay khẽ đặt sau lưng xòe nhẹ cánh ong, nghiêng đầu cười tươi biểu diễn trước lớp.</p>
      </div>
    `,
    summary: "Bài hát 'Chị ong nâu và em bé' của nhạc sĩ Tân Huyền mang tính chất vui tươi, nhí nhảnh, ca ngợi tấm gương chăm chỉ làm việc và vâng lời cha mẹ của chú ong nâu bé nhỏ.",
    quizzes: [
      {
        question: "Ai là tác giả sáng tác ca khúc thiếu nhi quen thuộc 'Chị ong nâu và em bé'?",
        options: ["Nhạc sĩ Tân Huyền", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phong Nhã", "Nhạc sĩ Bùi Đình Thảo"],
        correct: 0,
        explanation: "Bài hát 'Chị ong nâu và em bé' là sáng tác trứ danh của nhạc sĩ Tân Huyền."
      },
      {
        question: "Đức tính đáng quý nào của chị ong nâu được bài hát ca ngợi để các em nhỏ noi gương?",
        options: [
          "Chăm chỉ, cần cù làm việc và ngoan ngoãn vâng lời cha mẹ",
          "Lười biếng ngủ nướng cả ngày",
          "Hay giận dỗi mè nheo",
          "Bỏ nhà đi chơi"
        ],
        correct: 0,
        explanation: "Chị ong nâu thức dậy từ sớm cùng chú gà trống để đi tìm mật làm đẹp cho đời theo lời mẹ dặn."
      },
      {
        question: "Sắc thái tình cảm chủ đạo của bài hát 'Chị ong nâu và em bé' là gì?",
        options: [
          "Nhí nhảnh, vui tươi, hồn nhiên và hoạt bát",
          "Buồn rầu, ủ rũ",
          "Hùng tráng như trận đánh",
          "Lạnh lùng huyền bí"
        ],
        correct: 0,
        explanation: "Bài hát mang nhịp điệu rất nhí nhảnh, vui tươi và đáng yêu của tuổi thơ."
      },
      {
        question: "Khi gà trống gáy và ông mặt trời thức dậy, chị ong nâu đã làm gì?",
        options: [
          "Bay đi khắp nơi tìm mật hoa làm mật ngọt",
          "Ở trong tổ ngủ tiếp",
          "Ngồi xem ti vi",
          "Đi chơi cùng bạn bè suốt ngày"
        ],
        correct: 0,
        explanation: "Lời ca: 'Chú gà trống mới gáy, ông mặt trời mới dậy mà trên những cành hoa em đã thấy chị bay'."
      }
    ]
  },

  {
    id: "bai-12",
    lessonNum: 12,
    topicNum: 6,
    topicName: "Chủ đề 6: Động vật dễ thương",
    tag: "Lí thuyết & Thường thức",
    title: "Bài 12: Thuộc tính âm thanh Cao - Thấp, Dài - Ngắn & Cây Sáo trúc",
    objectives: [
      "Phân biệt được âm thanh Cao (bổng) và Thấp (trầm); âm thanh Dài (ngân lâu) và Ngắn (ngắt nhanh).",
      "Ứng dụng nhận biết cao độ các nốt: nốt Đô thấp hơn nốt Son, nốt La cao hơn nốt Mi.",
      "Tìm hiểu nguồn gốc, chất liệu tre nứa và âm thanh vi vút trong trẻo của cây Sáo trúc Việt Nam.",
      "Cảm thụ âm thanh đồng quê yên ả qua tiếng sáo mục đồng chăn trâu."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-wave-square text-red-600"></i> Âm thanh Cao - Thấp và Dài - Ngắn
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
            <strong class="text-red-800 dark:text-red-300 block mb-1">1. Cao - Thấp (Cao độ)</strong>
            <span>Ví dụ: Tiếng chim hót véo von là âm thanh CAO; tiếng gầm của chú gấu hay tiếng bò rống là âm thanh THẤP. Nốt Son cao hơn nốt Đô.</span>
          </div>
          <div class="p-3.5 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
            <strong class="text-red-800 dark:text-red-300 block mb-1">2. Dài - Ngắn (Trường độ)</strong>
            <span>Ví dụ: Tiếng còi tàu hỏa kéo dài 'Tuuuuuu' là âm thanh DÀI; tiếng giọt nước rơi 'tách' là âm thanh NGẮN. Nốt trắng dài hơn nốt đen.</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-wind text-red-500"></i> Cây Sáo trúc dân tộc Việt Nam
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Sáo trúc là nhạc cụ hơi thổi bằng miệng làm từ thân cây trúc hoặc nứa rỗng ruột. Thân sáo có khoét 1 lỗ thổi và 6 lỗ bấm ngón tay. Âm thanh sáo trúc thanh thoát, vi vu, gợi nhớ hình ảnh chú bé mục đồng thổi sáo ngồi trên lưng trâu giữa cánh đồng lúa chín vàng bao la.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-headphones text-red-500"></i> Trò chơi thính giác âm nhạc:
        </h5>
        <p class="text-xs">Giáo viên đánh phím đàn: học sinh đứng lên nếu nghe âm thanh Cao, ngồi xuống nếu nghe âm thanh Thấp; giang tay nếu âm thanh Dài, vỗ tay 1 cái nếu âm thanh Ngắn.</p>
      </div>
    `,
    summary: "Âm thanh có tính chất Cao - Thấp và Dài - Ngắn. Cây Sáo trúc làm từ tre nứa mang âm thanh vi vu trong trẻo biểu tượng cho vẻ đẹp làng quê Việt Nam.",
    quizzes: [
      {
        question: "Âm thanh tiếng chim hót véo von trên cành cây thuộc loại âm thanh nào?",
        options: ["Âm thanh Cao (bổng)", "Âm thanh Thấp (trầm)", "Âm thanh không có cao độ", "Âm thanh im lặng"],
        correct: 0,
        explanation: "Tiếng chim hót lảnh lót có tần số dao động nhanh, tạo nên âm thanh cao (bổng)."
      },
      {
        question: "Cây Sáo trúc của dân tộc ta được làm từ chất liệu thiên nhiên nào?",
        options: ["Thân cây tre hoặc cây nứa", "Kim loại sắt thép", "Đá hoa cương", "Thủy tinh"],
        correct: 0,
        explanation: "Sáo trúc truyền thống được chế tác từ những ống trúc hoặc ống nứa dẻo dai rỗng ruột."
      },
      {
        question: "Hình ảnh quen thuộc nào trong tranh dân gian Đông Hồ gắn liền với cây sáo trúc?",
        options: [
          "Chú bé mục đồng ngồi trên lưng trâu thổi sáo",
          "Người đánh cá trên thuyền",
          "Đoàn quân diễu binh",
          "Em bé đi chăn cừu"
        ],
        correct: 0,
        explanation: "Hình ảnh chú bé mục đồng thanh thản ngồi trên lưng trâu thổi sáo trúc là biểu tượng bất hủ của đồng quê Việt Nam."
      },
      {
        question: "Nốt trắng có trường độ Dài hơn nốt nào sau đây?",
        options: ["Nốt đen", "Nốt tròn", "Không dài hơn nốt nào", "Bằng nốt tròn"],
        correct: 0,
        explanation: "Nốt trắng (2 phách) dài hơn nốt đen (1 phách) và nốt móc đơn (1/2 phách)."
      }
    ]
  },

  // ================= CHỦ ĐỀ 7: GIA ĐÌNH THÂN THƯƠNG =================
  {
    id: "bai-13",
    lessonNum: 13,
    topicNum: 7,
    topicName: "Chủ đề 7: Gia đình thân thương",
    tag: "Học hát",
    title: "Bài 13: Học hát bài 'Ngày đầu tiên đi học' (Nguyễn Ngọc Thiện - Viễn Phương)",
    objectives: [
      "Hát đúng giai điệu, lời ca bài hát 'Ngày đầu tiên đi học' (nhạc: Nguyễn Ngọc Thiện, thơ: Viễn Phương).",
      "Cảm nhận nỗi xúc động bồi hồi của ngày đầu tiên cắp sách tới trường có mẹ dắt tay từng bước và cô giáo vỗ về.",
      "Hát với sắc thái tha thiết, ngọt ngào, ấm áp tình mẫu tử và tình thầy trò.",
      "Ghi nhớ công ơn sinh thành, dưỡng dục của cha mẹ và sự dìu dắt ân cần của cô giáo."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
          <h4 class="font-bold text-red-900 dark:text-red-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-heart text-red-600"></i> Ca khúc 'Ngày đầu tiên đi học'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát do nhạc sĩ <strong>Nguyễn Ngọc Thiện</strong> phổ nhạc từ bài thơ của nhà thơ <strong>Viễn Phương</strong>: <em>'Ngày đầu tiên đi học, mẹ dắt tay đến trường, em vừa đi vừa khóc, mẹ dỗ dành yêu thương... Ngày đầu như thế đó, cô giáo như mẹ hiền...'</em>. Giai điệu trữ tình, da diết như lời kể tâm tình khắc sâu kỉ niệm tuổi thơ của mỗi con người.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-microphone text-red-500"></i> Xử lí sắc thái ca khúc
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Hát nhỏ nhẹ, ấm áp, nhả chữ nghẹn ngào xúc động ở câu 'em vừa đi vừa khóc'.</li>
            <li>Đoạn sau hát dạt dào niềm vui: 'Bây giờ cứ ngỡ ngàng, cô giáo là cô tiên'.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-hand-holding-heart text-red-500"></i> Biểu diễn tình cảm:
        </h5>
        <p class="text-xs">Hát đơn ca hoặc song ca cùng bạn. Thể hiện nét mặt dịu dàng, trìu mến gửi gắm lòng biết ơn mẹ và cô giáo hiền.</p>
      </div>
    `,
    summary: "Ca khúc 'Ngày đầu tiên đi học' của Nguyễn Ngọc Thiện - Viễn Phương với âm hưởng thiết tha ngọt ngào ca ngợi tình yêu thương của mẹ và cô giáo dìu dắt đàn em bước vào ngưỡng cửa tri thức.",
    quizzes: [
      {
        question: "Ai là tác giả phần nhạc của bài hát bất hủ 'Ngày đầu tiên đi học'?",
        options: ["Nhạc sĩ Nguyễn Ngọc Thiện", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phong Nhã", "Nhạc sĩ Hoàng Vân"],
        correct: 0,
        explanation: "Bài hát 'Ngày đầu tiên đi học' do nhạc sĩ Nguyễn Ngọc Thiện phổ nhạc từ lời thơ của Viễn Phương."
      },
      {
        question: "Hình ảnh người cô giáo trong bài hát được so sánh đẹp như nhân vật nào?",
        options: [
          "Cô giáo như mẹ hiền / Cô giáo là cô tiên",
          "Cô giáo như chị gái",
          "Cô giáo như bà tiên",
          "Cô giáo như đóa hoa hồng"
        ],
        correct: 0,
        explanation: "Lời ca so sánh xúc động: 'Ngày đầu như thế đó, cô giáo như mẹ hiền... Bây giờ cứ ngỡ ngàng, cô giáo là cô tiên'."
      },
      {
        question: "Tâm trạng của bạn nhỏ trong ngày đầu tiên được mẹ dắt tới trường là gì?",
        options: [
          "Vừa đi vừa khóc vì bỡ ngỡ nhưng được mẹ và cô ân cần vỗ về",
          "Cười nói tự tin không sợ gì",
          "Chạy trốn không chịu vào lớp",
          "Không có cảm xúc gì"
        ],
        correct: 0,
        explanation: "Ngày đầu tiên rời vòng tay mẹ bước vào lớp học, bạn nhỏ bỡ ngỡ vừa đi vừa khóc trong sự âu yếm của mẹ."
      },
      {
        question: "Giai điệu của ca khúc 'Ngày đầu tiên đi học' mang tính chất như thế nào?",
        options: [
          "Thiết tha, êm dịu, ngọt ngào và dạt dào cảm xúc",
          "Vui nhộn nhảy nhót",
          "Hành khúc xung trận dồn dập",
          "Nặng nề, bi thảm"
        ],
        correct: 0,
        explanation: "Bài hát có giai điệu êm ả, tha thiết và gợi nhắc kỉ niệm tuổi thơ thân thương của mỗi con người."
      }
    ]
  },

  {
    id: "bai-14",
    lessonNum: 14,
    topicNum: 7,
    topicName: "Chủ đề 7: Gia đình thân thương",
    tag: "Lí thuyết & Thường thức",
    title: "Bài 14: Dấu nhắc lại & Tìm hiểu cây Đàn Guitar",
    objectives: [
      "Nhận biết hình dáng dấu nhắc lại và hiểu cách thực hiện: hát/chơi lặp lại đoạn nhạc thêm một lần.",
      "Tìm hiểu nguồn gốc xuất xứ, cấu tạo 6 dây và âm thanh mộc mạc, gần gũi của cây Đàn Guitar.",
      "Phân biệt giữa Đàn Guitar cổ điển (Classic) và Đàn Guitar Acoustic / Điện.",
      "Cảm thụ âm thanh ấm áp của tiếng đàn guitar khi đệm hát các ca khúc gia đình."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-arrows-rotate text-red-600"></i> Dấu nhắc lại cơ bản
        </h4>
        <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs sm:text-sm">
          <ul class="space-y-1.5 list-disc list-inside">
            <li><strong>Hình dáng:</strong> Gồm hai vạch nhịp đứng kèm hai dấu chấm nhỏ ở khe thứ hai và khe thứ ba.</li>
            <li><strong>Chức năng:</strong> Báo hiệu cho người hát hoặc người chơi đàn <strong>lặp lại đoạn nhạc vừa trình diễn</strong> thêm một lần nữa.</li>
            <li>Giúp bản nhạc ngắn gọn, tiết kiệm trang in mà vẫn diễn tả đủ lời 1 và lời 2 của bài hát.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-guitar text-red-500"></i> Đàn Guitar (Tây Ban Cầm)
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Đàn Guitar có nguồn gốc từ đất nước <strong>Tây Ban Nha</strong>. Thùng đàn làm bằng gỗ có eo thắt hình số 8, cần đàn có các phím ngăn cao độ. Đàn chuẩn có <strong>6 dây</strong> bằng nilon hoặc kim loại. Đàn guitar rất tiện lợi, dễ mang theo khi đi dã ngoại, cắm trại, có thể dùng đệm hát hoặc chơi độc tấu những bản nhạc cổ điển tuyệt đẹp.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-headphones text-red-500"></i> Nghe và cảm thụ tiếng đàn Guitar:
        </h5>
        <p class="text-xs">Lắng nghe giáo viên hoặc nghệ sĩ gảy đàn Guitar đệm bài hát 'Ngày đầu tiên đi học'. Cảm nhận âm thanh mộc mạc, ấm áp của 6 dây đàn.</p>
      </div>
    `,
    summary: "Dấu nhắc lại dùng để lặp lại đoạn nhạc. Đàn Guitar có nguồn gốc từ Tây Ban Nha, gồm 6 dây, là nhạc cụ đệm hát và độc tấu phổ biến bậc nhất thế giới.",
    quizzes: [
      {
        question: "Dấu nhắc lại trong bản nhạc hướng dẫn người biểu diễn thực hiện điều gì?",
        options: [
          "Lặp lại đoạn nhạc vừa chơi thêm một lần nữa",
          "Kết thúc bài hát ngay lập tức",
          "Dừng lại không chơi nữa",
          "Đổi sang bài hát khác"
        ],
        correct: 0,
        explanation: "Dấu nhắc lại báo hiệu thực hiện lại đoạn nhạc nằm trong phạm vi dấu lặp."
      },
      {
        question: "Cây đàn Guitar tiêu chuẩn thông thường có bao nhiêu dây đàn?",
        options: ["6 dây đàn", "4 dây đàn", "2 dây đàn", "8 dây đàn"],
        correct: 0,
        explanation: "Cây đàn Guitar tiêu chuẩn có đúng 6 dây đàn với các cao độ: Mì - Là - Rê - Son - Si - Mí (E-A-D-G-B-E)."
      },
      {
        question: "Cây đàn Guitar có nguồn gốc xuất xứ nổi tiếng từ quốc gia nào ở châu Âu?",
        options: ["Tây Ban Nha", "Nước Nga", "Nước Đức", "Nước Pháp"],
        correct: 0,
        explanation: "Tây Ban Nha là cái nôi nổi tiếng sản sinh và phát triển rực rỡ nghệ thuật đàn Guitar cổ điển."
      },
      {
        question: "Thùng đàn của cây Guitar mộc thường có hình dáng đặc trưng gì?",
        options: [
          "Thùng gỗ có eo thắt uốn lượn như hình số 8",
          "Hình tròn xoe như mặt trăng",
          "Hình tam giác nhọn",
          "Hình hộp vuông đứng"
        ],
        correct: 0,
        explanation: "Thùng đàn guitar có hai phần phình to và phần eo thắt lại ở giữa tựa như hình số 8."
      }
    ]
  },

  // ================= CHỦ ĐỀ 8: VUI ĐÓN HÈ SANG =================
  {
    id: "bai-15",
    lessonNum: 15,
    topicNum: 8,
    topicName: "Chủ đề 8: Vui đón hè sang",
    tag: "Học hát",
    title: "Bài 15: Học hát bài 'Mùa hè đến' (Nguyễn Thị Nhung)",
    objectives: [
      "Hát đúng giai điệu và ca từ bài hát 'Mùa hè đến' (nhạc và lời: Nguyễn Thị Nhung).",
      "Thể hiện sắc thái rộn rã, tưng bừng đón chào mùa hè rực rỡ hoa phượng đỏ và tiếng ve kêu.",
      "Hát kết hợp gõ đệm thanh phách, tambourine và vận động phụ họa vui nhộn.",
      "Nuôi dưỡng tinh thần lạc quan, yêu đời và chuẩn bị tâm thế bước vào kỳ nghỉ hè an toàn."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
          <h4 class="font-bold text-red-900 dark:text-red-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-sun text-red-600"></i> Ca khúc 'Mùa hè đến'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát do nhạc sĩ <strong>Nguyễn Thị Nhung</strong> sáng tác: <em>'Mùa hè đến, chim hót vui, bướm vờn hoa lượn bay trong nắng... Mùa hè đến, em hát vang, đón mùa hè sang...'</em>. Giai điệu tươi vui, nhịp nhàng bước chân tung tăng của tuổi thơ đón chào mùa hè rực rỡ hoa phượng vĩ.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-microphone text-red-500"></i> Phong cách biểu diễn ca khúc mùa hè
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Hát vui tươi, nhí nhảnh, miệng cười rạng rỡ đón chào kỳ nghỉ hè.</li>
            <li>Hai tay vung nhẹ nhịp nhàng, chân nhún đều theo nhịp 2/4.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-hands-clapping text-red-500"></i> Hát hòa giọng tập thể:
        </h5>
        <p class="text-xs">Cả lớp cùng đứng dậy vỗ tay theo phách, hòa giọng đồng thanh câu điệp khúc 'Mùa hè đến, em hát vang' rộn rã.</p>
      </div>
    `,
    summary: "Bài hát 'Mùa hè đến' của nhạc sĩ Nguyễn Thị Nhung mang tính chất tươi vui, trong sáng, diễn tả niềm vui sướng hân hoan của các bạn nhỏ khi đón chào mùa hè rực rỡ ánh nắng mai.",
    quizzes: [
      {
        question: "Ai là tác giả sáng tác ca khúc thiếu nhi 'Mùa hè đến'?",
        options: ["Nhạc sĩ Nguyễn Thị Nhung", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phong Nhã", "Nhạc sĩ Hoàng Vân"],
        correct: 0,
        explanation: "Bài hát 'Mùa hè đến' là một sáng tác tươi vui của nhạc sĩ Nguyễn Thị Nhung."
      },
      {
        question: "Cảnh vật thiên nhiên nào được nhắc đến trong bài hát 'Mùa hè đến'?",
        options: [
          "Chim hót vui, bướm vờn hoa lượn bay trong nắng ấm",
          "Tuyết rơi trắng xóa mùa đông",
          "Cơn bão tố mịt mù",
          "Lá rụng đầy đường mùa thu"
        ],
        correct: 0,
        explanation: "Lời ca miêu tả cảnh thiên nhiên rộn rã: 'Chim hót vui, bướm vờn hoa lượn bay trong nắng'."
      },
      {
        question: "Sắc thái tình cảm chủ đạo khi thể hiện bài hát 'Mùa hè đến' là gì?",
        options: [
          "Vui tươi, rộn ràng, hồn nhiên và náo nức",
          "U sầu, buồn rầu",
          "Ảm đạm, nặng nề",
          "Căng thẳng, hồi hộp"
        ],
        correct: 0,
        explanation: "Bài hát tràn đầy năng lượng tươi vui, náo nức chào đón kỳ nghỉ hè bổ ích."
      },
      {
        question: "Sau khi hoàn thành năm học lớp 3, các em học sinh sẽ chuẩn bị bước lên lớp mấy?",
        options: ["Lớp 4", "Lớp 5", "Lớp 6", "Lớp 2"],
        correct: 0,
        explanation: "Hoàn thành năm học lớp 3, học sinh sẽ tự tin bước lên năm học Lớp 4."
      }
    ]
  },

  {
    id: "bai-16",
    lessonNum: 16,
    topicNum: 8,
    topicName: "Chủ đề 8: Vui đón hè sang",
    tag: "Tổng kết & Dự án âm nhạc",
    title: "Bài 16: Ôn tập tổng kết cuối năm Lớp 3 & Dự án 'Ngày hội âm nhạc Tuổi thơ'",
    objectives: [
      "Hệ thống hóa toàn bộ kiến thức nhạc lí cốt lõi đã học trong năm học Lớp 3: Nốt đen, nốt trắng, nốt móc đơn, nhịp 2/4 (phách mạnh, phách nhẹ), Dấu lặng đen, Dấu nhắc lại, Ký hiệu bàn tay Curwen Đô - Rê - Mi - Son - La.",
      "Ôn tập 5 bài đọc nhạc và các bài hát học đường tiêu biểu.",
      "Ghi nhớ các nhạc cụ và nhạc sĩ lớn: Sáo trúc, Đàn Nhị, Đàn Guitar, Trống nhỏ, Triangle, Nhạc sĩ Phan Trần Bảng, Hoàng Vân, Phan Huỳnh Điểu, Tân Huyền.",
      "Tổ chức thành công buổi biểu diễn báo cáo dự án âm nhạc kết thúc năm học lớp 3."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-list-check text-red-600"></i> Bảng tổng hợp kiến thức cốt lõi Âm nhạc Lớp 3
        </h4>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <strong class="text-red-600 dark:text-red-400 block mb-1">1. Nhạc lí trọng tâm Lớp 3</strong>
            <ul class="space-y-1 list-disc list-inside text-xs">
              <li><strong>Hình nốt:</strong> Nốt trắng (2p), nốt đen (1p), nốt móc đơn (1/2p).</li>
              <li><strong>Nhịp 2/4:</strong> Có 2 phách trong một ô nhịp (phách 1 mạnh, phách 2 nhẹ).</li>
              <li><strong>Dấu lặng đen:</strong> Ngừng nghỉ 1 phách nốt đen.</li>
              <li><strong>Dấu nhắc lại:</strong> Lặp lại đoạn nhạc.</li>
              <li><strong>Curwen Hand Signs:</strong> Đô, Rê, Mi, Son, La.</li>
            </ul>
          </div>

          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <strong class="text-red-600 dark:text-red-400 block mb-1">2. Tác giả & Nhạc cụ tiêu biểu</strong>
            <ul class="space-y-1 list-disc list-inside text-xs">
              <li><strong>Phan Trần Bảng:</strong> Ca khúc <em>Bài ca đi học</em>.</li>
              <li><strong>Hoàng Vân:</strong> Ca khúc <em>Em yêu trường em</em>.</li>
              <li><strong>Phan Huỳnh Điểu:</strong> Ca khúc <em>Đội kèn tí hon</em>.</li>
              <li><strong>Nhạc cụ:</strong> Sáo trúc, Đàn Nhị (Đàn Cò), Đàn Guitar (6 dây).</li>
            </ul>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-2xl shadow-md mt-4">
          <h5 class="font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-award"></i> Chúc mừng các em hoàn thành xuất sắc chương trình Âm nhạc 3!
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed text-white/90">
            Qua 8 chủ đề và 16 bài học, các em đã rèn luyện kỹ năng thanh nhạc, cảm thụ nhịp phách, làm quen các nhạc cụ dân tộc và thế giới để tự tin bước lên lớp 4 với nhiều kiến thức bổ ích mới!
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-trophy text-red-500"></i> Bài tập ôn luyện toàn khóa:
        </h5>
        <p class="text-xs">Hãy nhấn vào nút 'Kiểm tra toàn khóa (10 câu)' ở đầu trang để làm bài thi trắc nghiệm tổng hợp bao quát toàn bộ 8 chủ đề chương trình Âm nhạc 3.</p>
      </div>
    `,
    summary: "Bài học tổng kết toàn bộ 8 chủ đề chương trình Âm nhạc lớp 3 theo định hướng phát triển phẩm chất và năng lực của GDPT 2018 Kết nối tri thức với cuộc sống.",
    quizzes: [
      {
        question: "Một nốt trắng có giá trị trường độ bằng bao nhiêu nốt đen?",
        options: ["2 nốt đen", "4 nốt đen", "1 nốt đen", "3 nốt đen"],
        correct: 0,
        explanation: "1 nốt trắng (2 phách) = 2 nốt đen (mỗi nốt 1 phách)."
      },
      {
        question: "Cây Đàn Nhị (Đàn Cò) của dân tộc ta có bao nhiêu dây đàn?",
        options: ["2 dây đàn", "4 dây đàn", "6 dây đàn", "1 dây đàn"],
        correct: 0,
        explanation: "Đàn Nhị có đúng 2 dây mắc song song trên cần đàn."
      },
      {
        question: "Cây đàn Guitar cổ điển tiêu chuẩn có bao nhiêu dây đàn?",
        options: ["6 dây đàn", "4 dây đàn", "2 dây đàn", "8 dây đàn"],
        correct: 0,
        explanation: "Đàn Guitar có 6 dây đàn căng trên mặt cần có phím bấm."
      },
      {
        question: "Trong nhịp 2/4, quan hệ giữa phách 1 và phách 2 là gì?",
        options: [
          "Phách 1 là phách mạnh, phách 2 là phách nhẹ",
          "Cả 2 phách đều nhẹ",
          "Phách 1 nhẹ, phách 2 mạnh",
          "Cả 2 phách đều im lặng"
        ],
        correct: 0,
        explanation: "Quy luật cơ bản của nhịp 2/4 là phách 1 mạnh, phách 2 nhẹ."
      }
    ]
  }
];

module.exports = lessons;
