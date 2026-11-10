// Data for 16 lessons of Grade 4 Music (SGK Kết nối tri thức với cuộc sống - GDPT 2018)
// 8 Topics x 2 Lessons = 16 Lessons, each with 4 quizzes = 64 Quizzes

const lessons = [
  // ================= CHỦ ĐỀ 1: RỘN RÀNG NGÀY MỚI =================
  {
    id: "bai-1",
    lessonNum: 1,
    topicNum: 1,
    topicName: "Chủ đề 1: Rộn ràng ngày mới",
    tag: "Học hát & Nhạc cụ",
    title: "Bài 1: Học hát bài 'Khúc ca rộn ràng' & Thực hành Nhạc cụ gõ",
    objectives: [
      "Hát đúng giai điệu, lời ca bài 'Khúc ca rộn ràng'; thể hiện sắc thái vui tươi, trong sáng và rộn rã đón chào ngày mới.",
      "Biết lấy hơi đúng nhịp, phát âm rõ ràng, nhả chữ tròn vành khi hát.",
      "Gõ đệm thanh phách, tambourine hoặc maracas theo tiết tấu lời ca.",
      "Bồi dưỡng tình yêu thiên nhiên, niềm vui cắp sách tới trường cùng bạn bè."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800">
          <h4 class="font-bold text-lime-900 dark:text-lime-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-sun text-lime-600"></i> Ca khúc 'Khúc ca rộn ràng'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát mở đầu bằng âm thanh tươi vui, rộn rã của tiếng chim hót véo von đón ánh bình minh chan hòa. Giai điệu mượt mà, lời ca hồn nhiên, trong trẻo như bước chân tung tăng của các bạn nhỏ lớp 4 trên con đường làng rợp bóng cây xanh.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-music text-lime-500"></i> 1. Cấu trúc bài hát
            </h5>
            <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li><strong>Số chỉ nhịp:</strong> Nhịp 2/4 với tiết tấu nhanh nhẹn, nhịp nhàng.</li>
              <li><strong>Hình thức:</strong> Bài gồm 2 đoạn ngắn, cao độ vừa tầm cất giọng học sinh tiểu học.</li>
              <li><strong>Lưu ý:</strong> Ngắt hơi đúng chỗ ở cuối mỗi vế câu, giữ nụ cười tươi khi hát.</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-drum text-lime-500"></i> 2. Nhạc cụ gõ đệm
            </h5>
            <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li><strong>Thanh phách:</strong> Gõ đệm đều đặn theo phách 1 (mạnh) và phách 2 (nhẹ).</li>
              <li><strong>Tambourine:</strong> Lắc rung tay tạo âm thanh xập xòe rộn ràng ở đoạn điệp khúc.</li>
              <li><strong>Maracas:</strong> Lắc theo tiết tấu nốt móc đơn đều tay.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-microphone text-lime-500"></i> Khởi động giọng & Thực hành:
        </h5>
        <p class="text-xs">Luyện thanh theo mẫu âm: La - La - La - La - La (Đô - Mi - Son - Mi - Đô). Hát kết hợp vỗ tay theo phách nhịp 2/4.</p>
      </div>
    `,
    summary: "Bài hát 'Khúc ca rộn ràng' viết ở nhịp 2/4 với sắc thái tươi vui, trong sáng, ngợi ca thiên nhiên buổi sớm mai và niềm vui đến trường của học sinh lớp 4.",
    quizzes: [
      {
        question: "Bài hát 'Khúc ca rộn ràng' được viết ở số chỉ nhịp nào?",
        options: ["Nhịp 2/4", "Nhịp 3/4", "Nhịp 4/4", "Nhịp 6/8"],
        correct: 0,
        explanation: "Bài hát được viết ở nhịp 2/4 mang tính chất nhịp nhàng, bước đi vui tươi."
      },
      {
        question: "Sắc thái tình cảm chủ đạo của bài hát 'Khúc ca rộn ràng' là gì?",
        options: [
          "Tươi vui, rộn ràng, hồn nhiên và tràn đầy sức sống",
          "Buồn bã, sầu lắng",
          "U uất, trầm ngâm",
          "Hùng tráng như trận mạc"
        ],
        correct: 0,
        explanation: "Bài hát ngợi ca buổi sớm mai tươi đẹp với giai điệu rộn ràng, vui tươi của tuổi thơ."
      },
      {
        question: "Khi gõ đệm theo phách của nhịp 2/4, người học cần gõ như thế nào?",
        options: [
          "Gõ đều đặn vào phách 1 (mạnh) và phách 2 (nhẹ) của mỗi ô nhịp",
          "Chỉ gõ duy nhất vào nốt cuối bài",
          "Gõ tùy thích không theo nhịp điệu",
          "Chỉ gõ khi kết thúc bài hát"
        ],
        correct: 0,
        explanation: "Gõ theo phách là giữ nhịp đều đặn theo từng phách trong ô nhịp (phách 1 mạnh, phách 2 nhẹ)."
      },
      {
        question: "Nhạc cụ gõ cầm tay có quả bầu bên trong chứa hạt khô lắc tạo âm thanh lạo xạo có tên là gì?",
        options: ["Maracas", "Thanh phách", "Song loan", "Trống cơm"],
        correct: 0,
        explanation: "Maracas (chuông lắc hạt) là nhạc cụ gõ phổ biến tạo âm thanh rộn rã khi lắc."
      }
    ]
  },

  {
    id: "bai-2",
    lessonNum: 2,
    topicNum: 1,
    topicName: "Chủ đề 1: Rộn ràng ngày mới",
    tag: "Lí thuyết & Đọc nhạc",
    title: "Bài 2: Các hình nốt nhạc cơ bản & Bài đọc nhạc số 1",
    objectives: [
      "Nhận biết hình dáng và hiểu mối quan hệ trường độ giữa các hình nốt: Nốt tròn, Nốt trắng, Nốt đen và Nốt móc đơn.",
      "Nhớ quy tắc: 1 nốt tròn = 2 nốt trắng = 4 nốt đen = 8 nốt móc đơn.",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 1 (Đô - Rê - Mi - Pha - Son).",
      "Biết gõ phách hoặc bấm các nốt cơ bản trên kèn phím Melodica / sáo Recorder."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-shapes text-lime-600"></i> Các hình nốt nhạc cơ bản
        </h4>
        <p class="text-xs sm:text-sm">
          Hình nốt nhạc dùng để ghi lại độ dài ngắn (trường độ) của âm thanh. Dưới đây là 4 hình nốt nhạc quen thuộc nhất:
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm text-center">
          <div class="p-3.5 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800">
            <strong class="text-lime-800 dark:text-lime-300 block mb-1">Nốt tròn</strong>
            <span class="text-xs text-gray-600 dark:text-gray-400">Có giá trị bằng <strong>4 phách</strong></span>
          </div>
          <div class="p-3.5 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800">
            <strong class="text-lime-800 dark:text-lime-300 block mb-1">Nốt trắng</strong>
            <span class="text-xs text-gray-600 dark:text-gray-400">Có giá trị bằng <strong>2 phách</strong></span>
          </div>
          <div class="p-3.5 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800">
            <strong class="text-lime-800 dark:text-lime-300 block mb-1">Nốt đen</strong>
            <span class="text-xs text-gray-600 dark:text-gray-400">Có giá trị bằng <strong>1 phách</strong></span>
          </div>
          <div class="p-3.5 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800">
            <strong class="text-lime-800 dark:text-lime-300 block mb-1">Nốt móc đơn</strong>
            <span class="text-xs text-gray-600 dark:text-gray-400">Có giá trị bằng <strong>1/2 phách</strong></span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-book-open text-lime-500"></i> Bài đọc nhạc số 1 (Giọng Đô trưởng)
          </h5>
          <p class="text-xs sm:text-sm">
            Bài đọc nhạc số 1 viết ở nhịp 2/4. Các nốt sử dụng gồm: <strong>Đô - Rê - Mi - Pha - Son</strong>. Hình nốt gồm: Nốt đen và nốt trắng. Giai điệu đi lên từng bậc thang âm trong sáng.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-list-check text-lime-500"></i> Thực hành Bài đọc nhạc số 1:
        </h5>
        <p class="text-xs">1. Đọc tên nốt nhạc theo thang âm: Đô - Rê - Mi - Pha - Son rồi đọc ngược lại.</p>
        <p class="text-xs">2. Gõ tiết tấu: Đen - Đen | Đen - Đen | Trắng --- ||</p>
        <p class="text-xs">3. Ghép cao độ và giữ đều nhịp 2/4 theo tiếng gõ phách.</p>
      </div>
    `,
    summary: "Các hình nốt cơ bản: Nốt tròn (4 phách), Nốt trắng (2 phách), Nốt đen (1 phách), Nốt móc đơn (1/2 phách). Bài đọc nhạc số 1 rèn luyện cao độ Đô - Rê - Mi - Pha - Son trên nhịp 2/4.",
    quizzes: [
      {
        question: "Một nốt tròn có giá trị trường độ bằng bao nhiêu nốt trắng?",
        options: ["2 nốt trắng", "4 nốt trắng", "1 nốt trắng", "8 nốt trắng"],
        correct: 0,
        explanation: "1 nốt tròn (4 phách) = 2 nốt trắng (mỗi nốt 2 phách)."
      },
      {
        question: "Một nốt đen có giá trị trường độ bằng bao nhiêu nốt móc đơn?",
        options: ["2 nốt móc đơn", "4 nốt móc đơn", "1 nốt móc đơn", "3 nốt móc đơn"],
        correct: 0,
        explanation: "1 nốt đen (1 phách) = 2 nốt móc đơn (mỗi nốt 1/2 phách)."
      },
      {
        question: "Hình nốt nào có đầu nốt rỗng màu trắng và có một thân gậy thẳng đứng?",
        options: ["Nốt trắng", "Nốt tròn", "Nốt đen", "Nốt móc đơn"],
        correct: 0,
        explanation: "Nốt trắng có đầu nốt rỗng ruột và có thân nốt thẳng đứng."
      },
      {
        question: "Bài đọc nhạc số 1 trong chương trình Lớp 4 sử dụng các nốt nhạc nào?",
        options: ["Đô - Rê - Mi - Pha - Son", "La - Si - Đố", "Son - La - Si", "Mi - Son - La"],
        correct: 0,
        explanation: "Bài đọc nhạc số 1 gồm 5 nốt cơ bản ban đầu: Đô, Rê, Mi, Pha, Son."
      }
    ]
  },

  // ================= CHỦ ĐỀ 2: GIAI ĐIỆU QUÊ HƯƠNG =================
  {
    id: "bai-3",
    lessonNum: 3,
    topicNum: 2,
    topicName: "Chủ đề 2: Giai điệu quê hương",
    tag: "Học hát & Dân ca",
    title: "Bài 3: Học hát Dân ca Đồng bằng Bắc Bộ 'Cò lả' & Làn điệu mượt mà",
    objectives: [
      "Hát đúng giai điệu, lời ca bài Dân ca Đồng bằng Bắc Bộ 'Cò lả'; thể hiện tính chất êm ả, mượt mà và duyên dáng.",
      "Biết thể hiện các tiếng đệm luyến láy đặc trưng: 'con cò bay lả lả bay la', 'tình tính tang...'.",
      "Hát kết hợp gõ đệm thanh phách và động tác múa cánh cò bay nhẹ nhàng.",
      "Yêu mến vẻ đẹp thanh bình của làng quê Việt Nam và làn điệu dân ca truyền thống."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800">
          <h4 class="font-bold text-lime-900 dark:text-lime-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-dove text-lime-600"></i> Xuất xứ bài Dân ca 'Cò lả'
          </h4>
          <p class="text-xs sm:text-sm">
            'Cò lả' là một trong những làn điệu dân ca tiêu biểu nhất của vùng Đồng bằng Bắc Bộ. Bài hát bắt nguồn từ câu ca dao cổ: <em>'Con cò bay lả bay la / Bay từ cửa phủ bay ra cánh đồng'</em>. Giai điệu êm ả, thanh thoát, vẽ nên bức tranh đồng quê thanh bình với cánh cò trắng chao liệng trên sóng lúa dập dờn.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-feather text-lime-500"></i> Đặc trưng luyến láy
            </h5>
            <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li>Có các tiếng đệm quen thuộc: 'tình tính tang', 'tang tính tình'.</li>
              <li>Hát luyến mềm mại ở các tiếng 'lả', 'la', 'phủ', 'ra' để tạo chất dân ca đậm đà.</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-hands text-lime-500"></i> Động tác múa phụ họa
            </h5>
            <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li>Hai tay mở rộng sang hai bên, uốn mềm mại như cánh cò chao liệng.</li>
              <li>Nhún chân nhẹ nhàng theo nhịp phách đung đưa êm đềm.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-lime-500"></i> Luyện tập hát múa cánh cò:
        </h5>
        <p class="text-xs">Tổ 1 hát lời ca chính, Tổ 2 làm động tác múa cánh cò bay lượn quanh sân khấu. Kết hợp gõ thanh phách giữ nhịp.</p>
      </div>
    `,
    summary: "Dân ca Đồng bằng Bắc Bộ 'Cò lả' mang giai điệu êm ả, trữ tình, ngợi ca cảnh sắc làng quê thanh bình và cuộc sống lao động lạc quan của người nông dân Việt Nam.",
    quizzes: [
      {
        question: "Bài hát 'Cò lả' thuộc thể loại dân ca của vùng miền nào ở nước ta?",
        options: ["Dân ca Đồng bằng Bắc Bộ", "Dân ca Nam Bộ", "Dân ca Tây Nguyên", "Dân ca Tây Bắc"],
        correct: 0,
        explanation: "'Cò lả' là làn điệu dân ca cổ truyền nổi tiếng bậc nhất của vùng châu thổ sông Hồng (Đồng bằng Bắc Bộ)."
      },
      {
        question: "Hình ảnh nào được khắc họa nổi bật trong bài hát 'Cò lả'?",
        options: [
          "Cánh cò trắng bay lả bay la trên đồng lúa xanh",
          "Con thuyền trôi giữa biển bão giông",
          "Đoàn xe lửa chạy qua đèo",
          "Đàn voi rừng Tây Nguyên"
        ],
        correct: 0,
        explanation: "Bài hát gợi tả hình ảnh cánh cò trắng chao liệng thanh bình trên cánh đồng lúa chín."
      },
      {
        question: "Từ ngữ nào xuất hiện lặp lại như một tiếng đệm rộn rã trong bài hát 'Cò lả'?",
        options: ["Tình tính tang, tang tính tình", "Ơ hò là hò", "Hò dô ta nào", "Lí lơ thơ lơ"],
        correct: 0,
        explanation: "Câu đệm 'Tình tính tang là tang tính tình' là nét đặc trưng rất vui tai và duyên dáng của bài 'Cò lả'."
      },
      {
        question: "Sắc thái khi thể hiện bài dân ca 'Cò lả' cần như thế nào?",
        options: [
          "Mượt mà, êm ái, duyên dáng và khoan thai",
          "Hùng hổ, dồn dập",
          "Gắt gỏng, giận dữ",
          "Buồn rầu, than vãn"
        ],
        correct: 0,
        explanation: "Làn điệu dân ca Bắc Bộ cần sự mềm mại, luyến láy êm ái và thanh thoát."
      }
    ]
  },

  {
    id: "bai-4",
    lessonNum: 4,
    topicNum: 2,
    topicName: "Chủ đề 2: Giai điệu quê hương",
    tag: "Lí thuyết & Thường thức",
    title: "Bài 4: Nhịp 2/4, Bài đọc nhạc số 2 & Giới thiệu Đàn Nguyệt (Đàn Kìm)",
    objectives: [
      "Hiểu rõ khái niệm Ô nhịp, Vạch nhịp và Số chỉ nhịp 2/4 (mỗi ô nhịp có 2 phách, mỗi phách bằng một nốt đen).",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 2.",
      "Tìm hiểu hình dáng đặc trưng mặt tròn như vầng trăng và âm thanh ấm áp của cây Đàn Nguyệt (Đàn Kìm).",
      "Tự hào về các nhạc cụ truyền thống trong dàn nhạc cung đình, hát văn và đờn ca tài tử."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-sliders text-lime-600"></i> Ô nhịp, Vạch nhịp và Nhịp 2/4
        </h4>
        <div class="p-4 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800 text-xs sm:text-sm">
          <ul class="space-y-1.5 list-disc list-inside">
            <li><strong>Vạch nhịp:</strong> Đường kẻ thẳng đứng cắt ngang qua 5 dòng kẻ khuông nhạc.</li>
            <li><strong>Ô nhịp:</strong> Khoảng cách nằm giữa 2 vạch nhịp liền nhau.</li>
            <li><strong>Nhịp 2/4:</strong> Mỗi ô nhịp có đúng <strong>2 phách</strong>, mỗi phách bằng một <strong>nốt đen</strong> (Phách 1 mạnh, phách 2 nhẹ).</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-moon text-lime-500"></i> Đàn Nguyệt (Đàn Kìm) - Vầng trăng âm nhạc
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Đàn Nguyệt có thùng đàn hình tròn dẹt như mặt trăng rằm (chữ 'Nguyệt' là mặt trăng), ở miền Nam còn gọi là <strong>Đàn Kìm</strong>. Đàn có <strong>2 dây</strong> bằng tơ hoặc cước, cần đàn dài có gắn các phím bấm cao. Âm thanh đàn Nguyệt rất vang, trong sáng, có khả năng nhấn nhá luyến láy phong phú, giữ vai trò lĩnh xướng trong dàn Chầu văn, Hát chèo và Đờn ca tài tử Nam Bộ.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-lime-500"></i> Luyện tập Bài đọc nhạc số 2:
        </h5>
        <p class="text-xs">Đọc tên nốt và gõ phách: gõ tay xuống ở phách 1 (mạnh), nhấc nhẹ tay lên ở phách 2 (nhẹ) theo đúng quy luật nhịp 2/4.</p>
      </div>
    `,
    summary: "Ô nhịp là khoảng cách giữa 2 vạch nhịp. Nhịp 2/4 có 2 phách trong một ô nhịp (phách 1 mạnh, phách 2 nhẹ). Đàn Nguyệt (Đàn Kìm) có thùng đàn tròn như mặt trăng, có 2 dây và âm thanh vang sáng đĩnh đạc.",
    quizzes: [
      {
        question: "Khoảng cách giữa hai vạch nhịp thẳng đứng trên khuông nhạc được gọi là gì?",
        options: ["Ô nhịp", "Khóa nhạc", "Dấu lặng", "Dấu nối"],
        correct: 0,
        explanation: "Ô nhịp là khoảng cách giữa hai vạch nhịp liền nhau trên bản nhạc."
      },
      {
        question: "Trong số chỉ nhịp 2/4, phách thứ nhất mang tính chất gì?",
        options: ["Phách mạnh", "Phách nhẹ", "Phách im lặng", "Không có tính chất gì"],
        correct: 0,
        explanation: "Phách 1 trong nhịp 2/4 luôn là phách mạnh (mang trọng âm của ô nhịp)."
      },
      {
        question: "Cây Đàn Nguyệt của dân tộc ta có thùng đàn hình gì đặc trưng?",
        options: [
          "Hình tròn dẹt như mặt trăng rằm",
          "Hình quả lê bổ đôi",
          "Hình hộp chữ nhật dài",
          "Hình tam giác"
        ],
        correct: 0,
        explanation: "Đàn Nguyệt có thùng đàn hình tròn như mặt trăng nên được gọi là Đàn Nguyệt (Nguyệt cầm)."
      },
      {
        question: "Ở miền Nam Việt Nam, cây Đàn Nguyệt còn được gọi bằng tên thân thuộc nào?",
        options: ["Đàn Kìm", "Đàn Bầu", "Đàn Đáy", "Đàn Nhị"],
        correct: 0,
        explanation: "Người dân Nam Bộ thường gọi cây đàn Nguyệt là cây Đàn Kìm."
      }
    ]
  },

  // ================= CHỦ ĐỀ 3: BIẾT ƠN THẦY CÔ =================
  {
    id: "bai-5",
    lessonNum: 5,
    topicNum: 3,
    topicName: "Chủ đề 3: Biết ơn thầy cô",
    tag: "Học hát",
    title: "Bài 5: Học hát bài 'Bụi phấn' (Vũ Hoàng - Lê Văn Lộc)",
    objectives: [
      "Hát đúng giai điệu và ca từ bài hát 'Bụi phấn' (nhạc và lời: Vũ Hoàng - Lê Văn Lộc).",
      "Thể hiện tình cảm xúc động, sự kính yêu và lòng biết ơn sâu sắc đối với người thầy.",
      "Hát kết hợp vận động vung tay nhịp nhàng theo giai điệu tha thiết.",
      "Khắc sâu truyền thống 'Tôn sư trọng đạo' và lòng tri ân công lao dạy dỗ của thầy cô."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800">
          <h4 class="font-bold text-lime-900 dark:text-lime-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-chalkboard-user text-lime-600"></i> Ca khúc bất hủ 'Bụi phấn'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát được hai nhạc sĩ <strong>Vũ Hoàng</strong> và <strong>Lê Văn Lộc</strong> sáng tác năm 1982. Với hình ảnh hạt bụi phấn trắng vương trên bục giảng làm bạc thêm mái tóc thầy, bài hát đã trở thành khúc ca tri ân quen thuộc và xúc động nhất của bao thế hệ học trò Việt Nam mỗi dịp 20/11.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-microphone text-lime-500"></i> Hướng dẫn kỹ thuật thanh nhạc
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Hát nhẹ nhàng, tình cảm ở phần đầu: 'Khi thầy viết bảng, bụi phấn rơi rơi...'.</li>
            <li>Đoạn điệp khúc hát dâng trào cảm xúc tha thiết: 'Mai sau lớn nên người, làm sao có thể nào quên...'.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-heart text-lime-500"></i> Biểu diễn tập thể tri ân 20/11:
        </h5>
        <p class="text-xs">Cả lớp cùng hát hòa giọng, hai bạn học sinh đại diện cầm hoa tươi bước lên tặng thầy cô giáo trong tiếng nhạc du dương.</p>
      </div>
    `,
    summary: "Ca khúc 'Bụi phấn' của Vũ Hoàng - Lê Văn Lộc với giai điệu tha thiết, hình ảnh hạt bụi phấn trắng rơi trên mái tóc thầy cô ca ngợi tấm lòng tận tụy của người thầy suốt đời vì học sinh thân yêu.",
    quizzes: [
      {
        question: "Hai tác giả sáng tác ca khúc bất hủ 'Bụi phấn' là ai?",
        options: ["Vũ Hoàng và Lê Văn Lộc", "Văn Cao và Hoàng Việt", "Phong Nhã và Phạm Tuyên", "Lưu Hữu Phước và Đỗ Nhuận"],
        correct: 0,
        explanation: "Bài hát 'Bụi phấn' do hai nhạc sĩ Vũ Hoàng và Lê Văn Lộc đồng sáng tác vào năm 1982."
      },
      {
        question: "Hình ảnh nào trong bài hát gợi tả sự hy sinh thầm lặng của người thầy giáo?",
        options: [
          "Bụi phấn rơi rơi vương trên bục giảng và làm tóc thầy bạc phơ",
          "Con đò chở khách qua sông lớn",
          "Ngọn hải đăng giữa biển đêm",
          "Cây bàng rụng lá mùa đông"
        ],
        correct: 0,
        explanation: "Lời ca xúc động: 'Có hạt bụi nào rơi trên bục giảng, có hạt bụi nào vương trên tóc thầy... Bao giờ cho con quên'."
      },
      {
        question: "Sắc thái tình cảm cần thể hiện khi hát bài 'Bụi phấn' là gì?",
        options: [
          "Tha thiết, ấm áp, sâu lắng và đầy lòng biết ơn",
          "Vui nhộn nhí nhảnh",
          "Hùng hổ sôi nổi",
          "Lạnh lùng xa cách"
        ],
        correct: 0,
        explanation: "Bài hát cần sự lắng đọng, truyền cảm và bày tỏ trọn vẹn sự kính yêu đối với thầy cô."
      },
      {
        question: "Lời thề hứa của người học trò trong bài hát 'Bụi phấn' là gì?",
        options: [
          "'Mai sau lớn nên người, làm sao có thể nào quên ơn thầy'",
          "Sẽ trở thành người giàu có nhất",
          "Sẽ đi du lịch vòng quanh thế giới",
          "Không bao giờ quay lại trường xưa"
        ],
        correct: 0,
        explanation: "Dù mai sau khôn lớn bay xa, người học trò vẫn mãi khắc ghi công ơn dạy dỗ của người thầy."
      }
    ]
  },

  {
    id: "bai-6",
    lessonNum: 6,
    topicNum: 3,
    topicName: "Chủ đề 3: Biết ơn thầy cô",
    tag: "Lí thuyết & Thường thức",
    title: "Bài 6: Khóa Son và Tên 7 nốt nhạc, Nhạc sĩ Bùi Đình Thảo",
    objectives: [
      "Nắm vững cách nhận biết và gọi tên 7 nốt nhạc cơ bản: Đô, Rê, Mi, Pha, Son, La, Si trên khuông nhạc có Khóa Son.",
      "Đọc đúng cao độ thang âm từ Đô lên Si.",
      "Tìm hiểu cuộc đời và sự nghiệp sáng tác của Nhạc sĩ Bùi Đình Thảo - tác giả ca khúc 'Đi học', 'Bàn tay mẹ'.",
      "Cảm thụ âm điệu ngọt ngào, đậm chất dân ca miền đồng quê Bắc Bộ trong âm nhạc của Bùi Đình Thảo."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-lines-leaning text-lime-600"></i> Vị trí 7 nốt nhạc trên Khóa Son
        </h4>
        <div class="p-4 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800 text-xs sm:text-sm">
          <ul class="space-y-1 list-disc list-inside">
            <li><strong>Đô (C):</strong> Nằm trên dòng kẻ phụ thứ nhất bên dưới khuông nhạc.</li>
            <li><strong>Rê (D):</strong> Nằm sát dưới dòng kẻ thứ nhất.</li>
            <li><strong>Mi (E):</strong> Nằm ngay trên dòng kẻ thứ nhất.</li>
            <li><strong>Pha (F):</strong> Nằm ở khe thứ nhất.</li>
            <li><strong>Son (G):</strong> Nằm ngay trên dòng kẻ thứ hai (nơi Khóa Son bắt đầu vẽ).</li>
            <li><strong>La (A):</strong> Nằm ở khe thứ hai.</li>
            <li><strong>Si (B):</strong> Nằm ngay trên dòng kẻ thứ ba.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-child text-lime-500"></i> Nhạc sĩ Bùi Đình Thảo (1931 - 1997)
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Nhạc sĩ Bùi Đình Thảo quê ở Hà Nam, là người nhạc sĩ cả đời gắn bó với đồng quê và thế giới tâm hồn trẻ thơ. Các ca khúc bất hủ của ông: <em>Đi học (thơ Minh Chính), Bàn tay mẹ (thơ Tạ Hữu Yên), Em nghĩ về Trái Đất, Tiếng hát những đêm trăng...</em> Âm nhạc của ông mang đậm âm hưởng dân ca đồng bằng Bắc Bộ, ngọt ngào, trong sáng như dòng sữa mẹ.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-lime-500"></i> Luyện tập thang 7 âm:
        </h5>
        <p class="text-xs">Đọc xướng âm từ Đô lên Si rồi đọc ngược lại từ Si về Đô: Đô - Rê - Mi - Pha - Son - La - Si - (Đố). Giữ hơi thở đều đặn và tròn tiếng.</p>
      </div>
    `,
    summary: "7 nốt nhạc cơ bản sắp xếp theo cao độ tăng dần: Đô, Rê, Mi, Pha, Son, La, Si. Nhạc sĩ Bùi Đình Thảo là tác giả của các ca khúc thiếu nhi kinh điển như 'Đi học', 'Bàn tay mẹ'.",
    quizzes: [
      {
        question: "Nốt Pha nằm ở vị trí nào trên khuông nhạc có Khóa Son?",
        options: ["Nằm ở khe thứ nhất", "Nằm trên dòng kẻ thứ nhất", "Nằm trên dòng kẻ thứ hai", "Nằm ở khe thứ hai"],
        correct: 0,
        explanation: "Nốt Pha (F) nằm ở vị trí khe thứ nhất (khoảng cách giữa dòng kẻ 1 và dòng kẻ 2)."
      },
      {
        question: "Nốt Si nằm ở vị trí nào trên khuông nhạc có Khóa Son?",
        options: ["Nằm trên dòng kẻ thứ 3", "Nằm ở khe thứ 2", "Nằm trên dòng kẻ thứ 2", "Nằm ở khe thứ 3"],
        correct: 0,
        explanation: "Nốt Si (B) nằm ngay chính giữa dòng kẻ số 3 của khuông nhạc."
      },
      {
        question: "Ai là tác giả sáng tác ca khúc thiếu nhi 'Đi học' (Hôm qua em tới trường, mẹ dắt tay từng bước...)?",
        options: ["Nhạc sĩ Bùi Đình Thảo (thơ Minh Chính)", "Nhạc sĩ Văn Cao", "Nhạc sĩ Lưu Hữu Phước", "Nhạc sĩ Phong Nhã"],
        correct: 0,
        explanation: "Bài hát 'Đi học' do nhạc sĩ Bùi Đình Thảo phổ nhạc từ bài thơ của nhà thơ liệt sĩ Minh Chính."
      },
      {
        question: "Đặc điểm nổi bật trong phong cách sáng tác của nhạc sĩ Bùi Đình Thảo là gì?",
        options: [
          "Mang đậm âm hưởng dân ca Bắc Bộ ngọt ngào, bình dị và trong sáng",
          "Nhịp điệu rock mạnh bạo",
          "Hành khúc quân đội dồn dập",
          "Nhạc kịch phương Tây phức tạp"
        ],
        correct: 0,
        explanation: "Âm nhạc Bùi Đình Thảo thấm đượm chất dân ca đồng bằng châu thổ sông Hồng với giai điệu êm dịu, mộc mạc."
      }
    ]
  },

  // ================= CHỦ ĐỀ 4: ƯỚC MƠ TUỔI THƠ =================
  {
    id: "bai-7",
    lessonNum: 7,
    topicNum: 4,
    topicName: "Chủ đề 4: Ước mơ tuổi thơ",
    tag: "Học hát",
    title: "Bài 7: Học hát bài 'Bay cao tiếng hát ước mơ' (Nguyễn Nam)",
    objectives: [
      "Hát đúng giai điệu, lời ca bài 'Bay cao tiếng hát ước mơ' (nhạc và lời: Nguyễn Nam).",
      "Thể hiện sắc thái bay bổng, rạng rỡ và niềm tin vào tương lai tươi sáng của tuổi thơ.",
      "Hát kết hợp gõ đệm thanh phách và các động tác cơ thể (body percussion).",
      "Nuôi dưỡng những ước mơ cao đẹp và ý chí phấn đấu vươn lên trong cuộc sống."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800">
          <h4 class="font-bold text-lime-900 dark:text-lime-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-paper-plane text-lime-600"></i> Ca khúc 'Bay cao tiếng hát ước mơ'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát do nhạc sĩ <strong>Nguyễn Nam</strong> sáng tác, vẽ nên bầu trời rộng lớn đầy ánh nắng và những cánh chim bồ câu trắng mang theo ước mơ hòa bình của trẻ thơ. Giai điệu vút cao, bay bổng, khích lệ các em học sinh tự tin chắp cánh cho những hoài bão tuổi thơ.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-microphone text-lime-500"></i> Kỹ thuật lấy hơi và nhả chữ
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Lấy hơi sâu ở cơ hoành để chuẩn bị cho những nốt ngân cao ở câu điệp khúc.</li>
            <li>Phát âm mở rộng khẩu hình chữ 'bay', 'cao', 'hát' để âm vang sáng và thanh thoát.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-hands-clapping text-lime-500"></i> Vận động phụ họa ước mơ:
        </h5>
        <p class="text-xs">Hai tay đưa lên cao vẫy nhẹ sang hai bên mô phỏng cánh chim bay lượn trên bầu trời xanh hòa bình.</p>
      </div>
    `,
    summary: "Ca khúc 'Bay cao tiếng hát ước mơ' của nhạc sĩ Nguyễn Nam mang giai điệu bay bổng, tươi sáng, truyền cảm hứng về những khát vọng và ước mơ đẹp đẽ của tuổi thơ.",
    quizzes: [
      {
        question: "Ai là tác giả sáng tác ca khúc 'Bay cao tiếng hát ước mơ'?",
        options: ["Nhạc sĩ Nguyễn Nam", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phạm Tuyên", "Nhạc sĩ Hoàng Vân"],
        correct: 0,
        explanation: "Bài hát 'Bay cao tiếng hát ước mơ' là một sáng tác nổi tiếng của nhạc sĩ Nguyễn Nam."
      },
      {
        question: "Hình ảnh nào được gắn liền với tiếng hát ước mơ trong bài hát?",
        options: [
          "Cánh chim bồ câu bay liệng trên bầu trời xanh hòa bình",
          "Cơn mưa rào đêm tối",
          "Chiếc xe ô tô chạy nhanh",
          "Đoàn tàu hỏa băng qua núi"
        ],
        correct: 0,
        explanation: "Cánh chim bồ câu trắng chao liệng tượng trưng cho ước mơ hòa bình và tự do của tuổi thơ."
      },
      {
        question: "Tính chất âm nhạc của bài 'Bay cao tiếng hát ước mơ' như thế nào?",
        options: [
          "Bay bổng, rạng rỡ, lạc quan và tràn ngập niềm hy vọng",
          "Ủ rũ, buồn thảm",
          "Căng thẳng, hồi hộp",
          "Nặng nề, chậm chạp"
        ],
        correct: 0,
        explanation: "Giai điệu bài hát rất bay bổng, tràn ngập năng lượng tích cực và hy vọng."
      },
      {
        question: "Để biến những ước mơ tuổi thơ thành hiện thực, học sinh cần làm gì?",
        options: [
          "Chăm chỉ học tập, rèn luyện kỹ năng và kiên trì theo đuổi mục tiêu",
          "Chỉ ngồi ước mà không chịu học bài",
          "Bỏ cuộc ngay khi gặp khó khăn",
          "Chờ đợi may mắn từ người khác"
        ],
        correct: 0,
        explanation: "Chăm chỉ tích lũy tri thức và rèn luyện đạo đức là chìa khóa hiện thực hóa ước mơ."
      }
    ]
  },

  {
    id: "bai-8",
    lessonNum: 8,
    topicNum: 4,
    topicName: "Chủ đề 4: Ước mơ tuổi thơ",
    tag: "Lí thuyết & Đọc nhạc",
    title: "Bài 8: Dấu lặng đen, Bài đọc nhạc số 3 & Body Percussion",
    objectives: [
      "Nhận biết hình dáng dấu lặng đen và hiểu giá trị thời gian nghỉ (bằng 1 phách nốt đen).",
      "Đọc đúng cao độ và ngắt tiếng chuẩn xác tại vị trí có dấu lặng đen trong Bài đọc nhạc số 3.",
      "Thực hành gõ cơ thể (Body Percussion) kết hợp vỗ tay, vỗ đùi, dậm chân theo tiết tấu.",
      "Tăng cường khả năng phối hợp vận động và cảm giác nhịp điệu."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-pause text-lime-600"></i> Dấu lặng đen trong âm nhạc
        </h4>
        <div class="p-4 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800 text-xs sm:text-sm">
          <ul class="space-y-1.5 list-disc list-inside">
            <li><strong>Hình dáng:</strong> Giống hình tia chớp nhỏ uốn lượn có nét ngoặc phía dưới.</li>
            <li><strong>Ý nghĩa:</strong> Dùng để biểu thị thời gian tạm ngừng nghỉ phát âm thanh bằng <strong>đúng 1 phách</strong> (tương đương độ dài nốt đen).</li>
            <li><strong>Cách thực hiện:</strong> Khi gặp dấu lặng đen, ta giữ im lặng trong 1 nhịp gõ phách.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-hands text-lime-500"></i> Gõ cơ thể (Body Percussion)
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Học sinh sử dụng chính cơ thể mình làm nhạc cụ: vỗ tay (Clap), búng ngón tay (Snap), vỗ hai đùi (Patting), hoặc dậm chân (Stomp). Sự phối hợp này tạo nên dàn tiết tấu vô cùng rộn rã và sinh động.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-lime-500"></i> Luyện tập Bài đọc nhạc số 3:
        </h5>
        <p class="text-xs">Đọc tên nốt nhạc theo nhịp: Đen - Đen | Đen - (Lặng) | Đen - Đen | Trắng --- || Khi gặp dấu lặng, mở hai bàn tay ra phía trước.</p>
      </div>
    `,
    summary: "Dấu lặng đen biểu thị thời gian ngừng nghỉ bằng 1 phách (nốt đen). Body Percussion biến các bộ phận cơ thể thành nhạc cụ gõ tiết tấu thú vị và rèn luyện phản xạ nhịp điệu.",
    quizzes: [
      {
        question: "Dấu lặng đen có thời gian ngừng nghỉ tương đương với độ dài của nốt nhạc nào?",
        options: ["Nốt đen (1 phách)", "Nốt trắng (2 phách)", "Nốt tròn (4 phách)", "Nốt móc đơn (1/2 phách)"],
        correct: 0,
        explanation: "Dấu lặng đen có giá trị nghỉ bằng đúng 1 phách (bằng độ dài nốt đen)."
      },
      {
        question: "Khi đọc nhạc hoặc hát gặp dấu lặng đen, người biểu diễn phải làm gì?",
        options: [
          "Ngừng phát ra âm thanh trong đúng 1 phách",
          "Hát to gấp đôi bình thường",
          "Hát ngân dài 4 phách",
          "Hát luyến sang nốt khác"
        ],
        correct: 0,
        explanation: "Dấu lặng là dấu hiệu yêu cầu tạm ngừng phát âm thanh trong khoảng thời gian quy định."
      },
      {
        question: "Hình thức biểu diễn âm nhạc dùng vỗ tay, búng tay, dậm chân tạo tiết tấu gọi là gì?",
        options: ["Body Percussion (Gõ cơ thể)", "A cappella", "Độc tấu kèn", "Nhạc giao hưởng"],
        correct: 0,
        explanation: "Body Percussion là nghệ thuật dùng chính các động tác cơ thể để tạo thành tiết tấu âm nhạc."
      },
      {
        question: "Lợi ích của việc luyện tập gõ cơ thể (Body Percussion) trong giờ học âm nhạc là gì?",
        options: [
          "Giúp cơ thể linh hoạt, rèn luyện cảm giác nhịp phách và tạo không khí học tập sôi nổi",
          "Để làm đau tay và chân",
          "Làm cho lớp học ồn ào mất trật tự",
          "Không có lợi ích gì"
        ],
        correct: 0,
        explanation: "Gõ cơ thể giúp học sinh rèn luyện khả năng cảm thụ nhịp phách và phối hợp vận động nhịp nhàng."
      }
    ]
  },

  // ================= CHỦ ĐỀ 5: MÙA XUÂN QUÊ HƯƠNG =================
  {
    id: "bai-9",
    lessonNum: 9,
    topicNum: 5,
    topicName: "Chủ đề 5: Mùa xuân quê hương",
    tag: "Học hát",
    title: "Bài 9: Học hát bài 'Mùa xuân của em' & Chồi non lộc biếc",
    objectives: [
      "Hát đúng giai điệu và ca từ bài hát 'Mùa xuân của em'; thể hiện tính chất tươi vui, rộn ràng đón xuân.",
      "Cảm nhận vẻ đẹp mùa xuân quê hương đất nước với hoa mai hoa đào đua nở, đàn én chao nghiêng.",
      "Hát kết hợp gõ đệm nhạc cụ thanh phách và múa phụ họa nhịp nhàng.",
      "Bày tỏ ước mơ một năm mới bình an, chăm ngoan và học giỏi."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800">
          <h4 class="font-bold text-lime-900 dark:text-lime-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-seedling text-lime-600"></i> Khúc ca đón mừng mùa xuân
          </h4>
          <p class="text-xs sm:text-sm">
            Mùa xuân mang đến chồi non xanh biếc, muôn hoa khoe sắc và những nụ cười rạng rỡ của trẻ thơ khi đón Tết cùng gia đình. Bài hát vẽ nên bức tranh xuân thanh bình, ấm áp và căng tràn sức sống tuổi thơ.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-microphone text-lime-500"></i> Kỹ thuật thể hiện bài hát xuân
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Khuôn mặt tươi cười rạng rỡ, ánh mắt long lanh thể hiện niềm vui ngày Tết.</li>
            <li>Hát ngắt nhịp nhàng ở các tiếng nốt đen, ngân dài vừa vặn ở nốt trắng cuối câu.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-hand-holding-hand text-lime-500"></i> Hát hòa giọng chào xuân:
        </h5>
        <p class="text-xs">Chia lớp làm hai nhóm: Nhóm 1 hát lời ca, Nhóm 2 gõ đệm thanh phách và tambourine theo tiết tấu nhịp nhàng.</p>
      </div>
    `,
    summary: "Ca khúc 'Mùa xuân của em' mang giai điệu rộn ràng, tươi sáng, khắc họa bức tranh mùa xuân đất nước muôn hoa khoe sắc và niềm vui đón Tết của tuổi thơ.",
    quizzes: [
      {
        question: "Cảm xúc chủ đạo của các bài hát viết về mùa xuân tuổi thơ là gì?",
        options: [
          "Tươi vui, rộn ràng, rạng rỡ và tràn đầy niềm hy vọng",
          "Buồn rầu, ủ rũ",
          "U tối, sợ hãi",
          "Căng thẳng, giận dữ"
        ],
        correct: 0,
        explanation: "Mùa xuân là mùa của khởi đầu mới, ngập tràn niềm vui, tiếng cười và niềm tin yêu cuộc sống."
      },
      {
        question: "Loài chim nào là sứ giả báo hiệu mùa xuân về trên bầu trời quê hương?",
        options: ["Chim én (chim nhạn)", "Chim cú mèo", "Chim kền kền", "Chim cánh cụt"],
        correct: 0,
        explanation: "Đàn chim én bay lượn trên bầu trời xanh là tín hiệu báo mùa xuân ấm áp đã về."
      },
      {
        question: "Khi thể hiện một ca khúc mùa xuân, ca sĩ nhí cần giữ thần thái biểu cảm ra sao?",
        options: [
          "Khuôn mặt tươi cười, rạng rỡ và ánh mắt long lanh",
          "Mặt buồn rười rượi",
          "Cúi đầu nhìn xuống đất",
          "Mặt cau có khó chịu"
        ],
        correct: 0,
        explanation: "Thần thái rạng rỡ, tươi cười sẽ truyền tải được trọn vẹn không khí hân hoan của ngày xuân."
      },
      {
        question: "Ý nghĩa của ngày Tết Nguyên đán đối với gia đình Việt Nam là gì?",
        options: [
          "Dịp đoàn viên sum họp gia đình, thăm hỏi chúc Tết ông bà cha mẹ",
          "Chỉ để ngủ cả ngày",
          "Để chơi game cả tuần không cần giao tiếp",
          "Chỉ để đòi hỏi nhiều quà đắt tiền"
        ],
        correct: 0,
        explanation: "Tết cổ truyền là dịp thiêng liêng để các thành viên trong gia đình sum họp, bày tỏ lòng hiếu thảo."
      }
    ]
  },

  {
    id: "bai-10",
    lessonNum: 10,
    topicNum: 5,
    topicName: "Chủ đề 5: Mùa xuân quê hương",
    tag: "Lí thuyết & Đọc nhạc",
    title: "Bài 10: Nốt trắng chấm dôi, Bài đọc nhạc số 4 & Hòa tấu dàn nhạc",
    objectives: [
      "Hiểu rõ khái niệm và giá trị thời gian của Nốt trắng chấm dôi (bằng 1 nốt trắng + 1 nốt đen = 3 phách).",
      "Đọc đúng cao độ và ngân đủ 3 phách đối với nốt trắng chấm dôi trong Bài đọc nhạc số 4.",
      "Tìm hiểu sơ lược về hình thức biểu diễn Hòa tấu dàn nhạc (nhiều nhạc cụ cùng phối hợp trình diễn).",
      "Rèn luyện kỹ năng lắng nghe và phối hợp ăn ý giữa các nhạc cụ học đường."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-circle-dot text-lime-600"></i> Nốt trắng chấm dôi
        </h4>
        <div class="p-4 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800 text-xs sm:text-sm">
          <ul class="space-y-1.5 list-disc list-inside">
            <li><strong>Cấu tạo:</strong> Gồm một nốt trắng có một <strong>dấu chấm nhỏ</strong> đặt ngay bên cạnh phải đầu nốt.</li>
            <li><strong>Công thức tính:</strong> Dấu chấm dôi làm tăng thêm nửa trường độ của nốt trắng (thêm 1 phách).</li>
            <li><strong>Giá trị:</strong> <strong>1 nốt trắng chấm dôi = 2 phách + 1 phách = 3 phách</strong>.</li>
            <li><strong>Ứng dụng:</strong> Thường dùng ngân tròn ô nhịp trong các bản nhạc viết ở nhịp 3/4.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-users-viewfinder text-lime-500"></i> Hòa tấu dàn nhạc
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Hòa tấu là hình thức nhiều nhạc cụ thuộc các họ khác nhau (dây, hơi, gõ, phím) cùng kết hợp biểu diễn một tác phẩm âm nhạc dưới sự chỉ huy của nhạc trưởng, tạo nên bức tranh âm thanh đa tầng, phong phú.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-lime-500"></i> Luyện tập Bài đọc nhạc số 4:
        </h5>
        <p class="text-xs">Đọc cao độ Bài đọc nhạc số 4 kết hợp đếm phách nốt trắng chấm dôi: 'Đô 2 3 - Rê 2 3' ngân đều đặn đủ 3 phách không ngắt hơi sớm.</p>
      </div>
    `,
    summary: "Nốt trắng chấm dôi có giá trị bằng 3 phách (2 + 1 phách). Hòa tấu dàn nhạc là sự phối hợp biểu diễn nhịp nhàng giữa nhiều loại nhạc cụ khác nhau.",
    quizzes: [
      {
        question: "Một nốt trắng chấm dôi có độ dài trường độ bằng bao nhiêu phách?",
        options: ["3 phách", "2 phách", "4 phách", "1 phách"],
        correct: 0,
        explanation: "Nốt trắng = 2 phách, dấu chấm dôi = 1 phách. Tổng cộng = 2 + 1 = 3 phách."
      },
      {
        question: "Dấu chấm dôi đặt bên cạnh nốt nhạc có chức năng gì?",
        options: [
          "Làm tăng thêm một nửa (1/2) giá trị trường độ của nốt nhạc đứng trước",
          "Làm tăng gấp đôi tốc độ",
          "Làm giảm đi một nửa trường độ",
          "Không làm thay đổi gì"
        ],
        correct: 0,
        explanation: "Dấu chấm dôi luôn làm kéo dài thêm chính xác 1/2 giá trị trường độ của nốt nhạc đứng trước nó."
      },
      {
        question: "Hình thức biểu diễn có nhiều loại nhạc cụ cùng tham gia diễn tấu chung một bản nhạc gọi là gì?",
        options: ["Hòa tấu", "Độc tấu", "Đơn ca", "Hát A cappella"],
        correct: 0,
        explanation: "Hòa tấu (ensemble) là sự kết hợp nhiều nhạc cụ cùng chơi chung một tác phẩm."
      },
      {
        question: "Người đứng trước dàn nhạc giao hưởng dùng gậy chỉ huy để điều khiển tốc độ và sắc thái gọi là gì?",
        options: ["Nhạc trưởng (Chỉ huy dàn nhạc)", "Ca sĩ chính", "Nghệ sĩ đàn piano", "Biên đạo múa"],
        correct: 0,
        explanation: "Nhạc trưởng (conductor) là người chỉ huy toàn bộ dàn nhạc, giữ nhịp và phối hợp âm lượng."
      }
    ]
  },

  // ================= CHỦ ĐỀ 6: TÌNH BẠN TUỔI THƠ =================
  {
    id: "bai-11",
    lessonNum: 11,
    topicNum: 6,
    topicName: "Chủ đề 6: Tình bạn tuổi thơ",
    tag: "Học hát",
    title: "Bài 11: Học hát bài 'Khăn quàng thắm mãi vai em' (Ngô Ngọc Báu)",
    objectives: [
      "Hát đúng giai điệu và ca từ bài hát 'Khăn quàng thắm mãi vai em' (nhạc và lời: Ngô Ngọc Báu).",
      "Thể hiện niềm tự hào của người đội viên TNTP Hồ Chí Minh khi mang trên vai chiếc khăn quàng đỏ thắm.",
      "Hát với nhịp điệu rộn ràng, dõng dạc, bước chân đều đặn như hành tiến dưới cờ Đội.",
      "Phấn đấu học tập và rèn luyện xứng danh Cháu ngoan Bác Hồ."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800">
          <h4 class="font-bold text-lime-900 dark:text-lime-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-flag text-lime-600"></i> Ca khúc 'Khăn quàng thắm mãi vai em'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát do nhạc sĩ <strong>Ngô Ngọc Báu</strong> sáng tác. Chiếc khăn quàng đỏ như một phần của lá cờ Tổ quốc thắm đượm máu đào của các anh hùng liệt sĩ, luôn nhắc nhở người đội viên lớp 4 chăm chỉ học tập, rèn luyện đạo đức để trở thành công dân có ích cho đất nước mai sau.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-person-marching text-lime-500"></i> Sắc thái thể hiện bài hát
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Hát dõng dạc, tươi sáng, tư thế đứng trang nghiêm tay đeo khăn quàng đỏ ngay ngắn.</li>
            <li>Nhịp bước chân hành tiến dứt khoát theo nhịp 2/4.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-user-check text-lime-500"></i> Thực hành nghi thức Đội:
        </h5>
        <p class="text-xs">Học sinh đứng thẳng chào kiểu Đội viên (tay phải giơ lên trán) và hát vang câu kết 'Khăn quàng đỏ thắm trên vai em' đầy tự hào.</p>
      </div>
    `,
    summary: "Bài hát 'Khăn quàng thắm mãi vai em' của Ngô Ngọc Báu mang tính chất vui tươi, khỏe khoắn, khơi dậy niềm tự hào và ý thức trách nhiệm của người đội viên Đội TNTP Hồ Chí Minh.",
    quizzes: [
      {
        question: "Ai là tác giả sáng tác bài hát 'Khăn quàng thắm mãi vai em'?",
        options: ["Nhạc sĩ Ngô Ngọc Báu", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phong Nhã", "Nhạc sĩ Phạm Tuyên"],
        correct: 0,
        explanation: "Bài hát 'Khăn quàng thắm mãi vai em' là sáng tác xuất sắc của nhạc sĩ Ngô Ngọc Báu."
      },
      {
        question: "Chiếc khăn quàng đỏ của Đội viên TNTP Hồ Chí Minh có ý nghĩa thiêng liêng là gì?",
        options: [
          "Là một phần của lá cờ Tổ quốc, nhuộm đỏ máu của các anh hùng liệt sĩ",
          "Chỉ là chiếc khăn để giữ ấm cổ",
          "Chỉ là đồng phục bình thường",
          "Để làm đẹp khi chụp ảnh"
        ],
        correct: 0,
        explanation: "Khăn quàng đỏ là biểu tượng thiêng liêng tượng trưng cho một phần của lá cờ Tổ quốc."
      },
      {
        question: "Tính chất âm nhạc của bài hát 'Khăn quàng thắm mãi vai em' là gì?",
        options: [
          "Rộn ràng, khỏe khoắn, tự hào và tràn đầy nhiệt huyết",
          "Ủ rũ, sầu bi",
          "Chậm chạp, ru ngủ",
          "Căng thẳng, đáng sợ"
        ],
        correct: 0,
        explanation: "Bài hát mang nhịp điệu hành tiến tươi vui, khỏe khoắn của tuổi trẻ măng non."
      },
      {
        question: "Đội viên Đội TNTP Hồ Chí Minh thường thắt khăn quàng đỏ trên trang phục nào?",
        options: [
          "Áo đồng phục học sinh hoặc áo Đội ngay ngắn trên cổ áo",
          "Buộc ở cổ tay",
          "Buộc ở thắt lưng",
          "Cất trong cặp sách không đeo"
        ],
        correct: 0,
        explanation: "Khăn quàng đỏ được thắt ngay ngắn, phẳng phiu trên cổ áo đồng phục của người đội viên."
      }
    ]
  },

  {
    id: "bai-12",
    lessonNum: 12,
    topicNum: 6,
    topicName: "Chủ đề 6: Tình bạn tuổi thơ",
    tag: "Lí thuyết & Thường thức",
    title: "Bài 12: Dấu nối, Dấu luyến, Bài đọc nhạc số 5 & Nhạc sĩ Hoàng Vân",
    objectives: [
      "Phân biệt chính xác giữa Dấu nối (nối các nốt CÙNG cao độ) và Dấu luyến (nối các nốt KHÁC cao độ).",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 5 có chứa dấu luyến.",
      "Tìm hiểu cuộc đời và các ca khúc thiếu nhi tiêu biểu của Nhạc sĩ Hoàng Vân (Em yêu trường em, Mùa hoa phượng nở, Hò kéo pháo...).",
      "Cảm thụ giai điệu trong sáng, thân thương gắn bó với mái trường tuổi thơ."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-bezier-curve text-lime-600"></i> Phân biệt Dấu nối và Dấu luyến
        </h4>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-lime-50/70 dark:bg-lime-950/30 border border-lime-200 dark:border-lime-800">
            <strong class="text-lime-800 dark:text-lime-300 block mb-1">1. Dấu nối (Tie)</strong>
            <span>Đường cong nối liền <strong>hai nốt nhạc CÙNG CAO ĐỘ</strong>. Ngân liền hơi bằng tổng trường độ của 2 nốt đó (ví dụ: Nốt đen nối nốt đen = ngân 2 phách).</span>
          </div>

          <div class="p-3.5 rounded-xl bg-lime-50/70 dark:bg-lime-950/30 border border-lime-200 dark:border-lime-800">
            <strong class="text-lime-800 dark:text-lime-300 block mb-1">2. Dấu luyến (Slur)</strong>
            <span>Đường cong nối liền <strong>hai hay nhiều nốt nhạc KHÁC CAO ĐỘ</strong>. Người hát lướt êm dịu từ nốt này sang nốt kia trên cùng một ca từ.</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-school text-lime-500"></i> Nhạc sĩ Hoàng Vân (1930 - 2018)
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Nhạc sĩ Hoàng Vân sinh tại Hà Nội, là một trong những tên tuổi lớn của nền âm nhạc cách mạng Việt Nam. Ông đã viết nhiều ca khúc thiếu nhi được yêu thích qua bao thế hệ: <em>Em yêu trường em, Mùa hoa phượng nở, Ca ngợi Tổ quốc, Con chim vành khuyên...</em> Ông được Nhà nước trao tặng Giải thưởng Hồ Chí Minh về Văn học - Nghệ thuật (2000).
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-lime-500"></i> Luyện tập Bài đọc nhạc số 5:
        </h5>
        <p class="text-xs">Đọc xướng âm có dấu luyến: lướt mềm mại từ nốt Son lên nốt Đố trên một hơi thở liền mạch. Gõ phách đều tay.</p>
      </div>
    `,
    summary: "Dấu nối dùng cho các nốt cùng cao độ, Dấu luyến dùng cho các nốt khác cao độ. Nhạc sĩ Hoàng Vân là tác giả ca khúc trường học bất hủ 'Em yêu trường em'.",
    quizzes: [
      {
        question: "Dấu nối trong bản nhạc được dùng để liên kết các nốt nhạc có đặc điểm gì?",
        options: [
          "Các nốt nhạc CÙNG cao độ",
          "Các nốt nhạc KHÁC cao độ",
          "Chỉ dùng cho nốt tròn",
          "Chỉ dùng cho nốt móc kép"
        ],
        correct: 0,
        explanation: "Dấu nối nối các nốt cùng cao độ để cộng dồn giá trị trường độ của chúng."
      },
      {
        question: "Dấu luyến dùng để liên kết các nốt nhạc như thế nào?",
        options: [
          "Các nốt nhạc KHÁC cao độ để hát lướt êm tai",
          "Các nốt cùng cao độ",
          "Chỉ dùng ở đầu khuông nhạc",
          "Yêu cầu dừng hẳn bản nhạc"
        ],
        correct: 0,
        explanation: "Dấu luyến liên kết các nốt khác cao độ trên cùng một âm tiết ca từ."
      },
      {
        question: "Ai là tác giả của ca khúc học đường thân thuộc 'Em yêu trường em' (Em yêu trường em với bao bạn thân và cô giáo hiền...)?",
        options: ["Nhạc sĩ Hoàng Vân", "Nhạc sĩ Văn Cao", "Nhạc sĩ Bùi Đình Thảo", "Nhạc sĩ Phong Nhã"],
        correct: 0,
        explanation: "Bài hát 'Em yêu trường em' là một trong những sáng tác nổi tiếng nhất viết về mái trường của nhạc sĩ Hoàng Vân."
      },
      {
        question: "Ngoài các ca khúc thiếu nhi, nhạc sĩ Hoàng Vân còn nổi tiếng với bản tráng ca Điện Biên nào?",
        options: ["Hò kéo pháo", "Tiến quân ca", "Lên đàng", "Chiến thắng Điện Biên"],
        correct: 0,
        explanation: "'Hò kéo pháo' là tráng ca bất hủ của Hoàng Vân ra đời ngay trên chiến trường Điện Biên Phủ năm 1954."
      }
    ]
  },

  // ================= CHỦ ĐỀ 7: GIA ĐÌNH YÊU THƯƠNG =================
  {
    id: "bai-13",
    lessonNum: 13,
    topicNum: 7,
    topicName: "Chủ đề 7: Gia đình yêu thương",
    tag: "Học hát",
    title: "Bài 13: Học hát bài 'Cho con' (Phạm Trọng Cầu - Tuấn Dũng)",
    objectives: [
      "Hát đúng giai điệu, lời ca của bài hát 'Cho con' (nhạc: Phạm Trọng Cầu, thơ: Tuấn Dũng).",
      "Cảm nhận tình cảm ấm áp, sự chở che và bến đỗ bình yên của gia đình (Ba là cánh chim, mẹ là nhành hoa).",
      "Biết thể hiện sắc thái tình cảm êm dịu, ấm áp và dạt dào yêu thương.",
      "Hiếu thảo, vâng lời ông bà cha mẹ và biết trân trọng mái ấm gia đình."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800">
          <h4 class="font-bold text-lime-900 dark:text-lime-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-house-chimney-heart text-lime-600"></i> Ca khúc gia đình 'Cho con'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát do nhạc sĩ <strong>Phạm Trọng Cầu</strong> phổ nhạc từ bài thơ của nhà thơ <strong>Tuấn Dũng</strong>. Hình ảnh giản dị mà thiêng liêng: <em>'Ba sẽ là cánh chim đưa con bay thật xa / Mẹ sẽ là cành hoa cho con cài lên ngực...'</em> đã trở thành khúc ca gia đình bất hủ sưởi ấm tâm hồn bao thế hệ trẻ thơ.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-microphone text-lime-500"></i> Hướng dẫn kỹ thuật hát
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Hát nhẹ nhàng, tình cảm, hơi thở êm dịu như lời tâm tình cha mẹ dành cho con.</li>
            <li>Đoạn kết ngân dài đầy trìu mến: 'Ba mẹ là quê hương'.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-heart text-lime-500"></i> Hát tặng cha mẹ:
        </h5>
        <p class="text-xs">Học sinh tập hát đơn ca hoặc song ca cùng bạn. Về nhà hát tặng cha mẹ trong bữa cơm sum họp gia đình.</p>
      </div>
    `,
    summary: "Ca khúc 'Cho con' của Phạm Trọng Cầu - Tuấn Dũng mang giai điệu êm ái, ca ngợi tình yêu thương bao la của cha mẹ và giá trị thiêng liêng của mái ấm gia đình.",
    quizzes: [
      {
        question: "Ai là tác giả phần nhạc của ca khúc gia đình nổi tiếng 'Cho con'?",
        options: ["Nhạc sĩ Phạm Trọng Cầu", "Nhạc sĩ Văn Cao", "Nhạc sĩ Bùi Đình Thảo", "Nhạc sĩ Trịnh Công Sơn"],
        correct: 0,
        explanation: "Bài hát 'Cho con' do nhạc sĩ tài hoa Phạm Trọng Cầu phổ nhạc từ thơ Tuấn Dũng."
      },
      {
        question: "Hình tượng người cha và người mẹ được ví von như thế nào trong bài hát 'Cho con'?",
        options: [
          "Ba là cánh chim đưa con bay xa, mẹ là nhành hoa cho con cài lên ngực",
          "Ba là ngọn núi, mẹ là dòng sông",
          "Ba là cây xanh, mẹ là ánh nắng",
          "Ba là ngọn gió, mẹ là đám mây"
        ],
        correct: 0,
        explanation: "Lời thơ mộc mạc: 'Ba sẽ là cánh chim đưa con bay thật xa / Mẹ sẽ là cành hoa cho con cài lên ngực'."
      },
      {
        question: "Câu hát kết thúc đầy ý nghĩa khẳng định điều gì về mái ấm gia đình?",
        options: [
          "'Ba mẹ là quê hương'",
          "'Ba mẹ là thầy cô'",
          "'Ba mẹ là bạn bè'",
          "'Ba mẹ là bầu trời'"
        ],
        correct: 0,
        explanation: "Câu kết bài hát khẳng định: 'Vì con là con ba, con của ba rất ngoan / Vì con là con mẹ, con của mẹ rất hiền / Ba mẹ là quê hương'."
      },
      {
        question: "Bổn phận của con cái trong gia đình để cha mẹ luôn vui lòng là gì?",
        options: [
          "Vâng lời, chăm ngoan học giỏi, hiếu thảo và phụ giúp việc nhà",
          "Lười biếng đòi hỏi tiền bạc",
          "Cãi lời cha mẹ khi được khuyên bảo",
          "Bỏ bê việc học đi chơi"
        ],
        correct: 0,
        explanation: "Hiếu thảo, vâng lời và chăm ngoan là cách tốt nhất để đền đáp công ơn cha mẹ."
      }
    ]
  },

  {
    id: "bai-14",
    lessonNum: 14,
    topicNum: 7,
    topicName: "Chủ đề 7: Gia đình yêu thương",
    tag: "Lí thuyết & Nhạc cụ",
    title: "Bài 14: Dấu nhắc lại & Thực hành Nhạc cụ Recorder / Melodica",
    objectives: [
      "Nhận biết hình dáng dấu nhắc lại (gồm 2 vạch đứng kèm 2 chấm nhỏ) và hiểu quy tắc lặp lại đoạn nhạc.",
      "Biết thực hiện lặp lại đoạn nhạc chính xác khi gặp dấu nhắc lại trong bản nhạc.",
      "Thực hành thổi giai điệu đơn giản trên sáo Recorder hoặc bấm phím kèn Melodica.",
      "Rèn luyện kỹ năng kết hợp giữa giai điệu nhạc cụ và gõ đệm thanh phách."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-arrows-rotate text-lime-600"></i> Dấu nhắc lại trong bản nhạc
        </h4>
        <div class="p-4 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800 text-xs sm:text-sm">
          <ul class="space-y-1.5 list-disc list-inside">
            <li><strong>Hình dáng:</strong> Gồm hai vạch thẳng đứng (một vạch đậm, một vạch thanh) kèm hai dấu chấm tròn nhỏ đặt ở khe thứ hai và khe thứ ba.</li>
            <li><strong>Quy tắc:</strong> Khi hát hoặc chơi nhạc đến dấu nhắc lại, người biểu diễn quay lại từ đầu (hoặc quay lại vị trí dấu nhắc lại mở đầu) để thực hiện đoạn nhạc thêm một lần nữa.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-guitar text-lime-500"></i> Thực hành Nhạc cụ học đường (Recorder / Melodica)
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li><strong>Sáo Recorder:</strong> Thổi nhẹ nhàng (phát âm 'tu'), bịt kín các lỗ bấm nốt Đô, Rê, Mi, Son, La bằng thịt ngón tay.</li>
            <li><strong>Kèn phím Melodica:</strong> Ngồi thẳng lưng, ngậm ống thổi nhẹ nhàng, các ngón tay khum tròn tự nhiên bấm phím đàn.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-play text-lime-500"></i> Luyện tập đoạn nhạc có dấu nhắc lại:
        </h5>
        <p class="text-xs">Chơi câu nhạc: Đô - Rê - Mi - Son ||: La - Son - Mi - Đô :|| Thực hiện lặp lại câu sau đúng 2 lần theo dấu nhắc lại.</p>
      </div>
    `,
    summary: "Dấu nhắc lại dùng để báo hiệu diễn tấu lặp lại một đoạn nhạc. Luyện tập nhạc cụ Recorder / Melodica giúp học sinh phát triển thính giác âm nhạc và sự khéo léo của đôi bàn tay.",
    quizzes: [
      {
        question: "Dấu nhắc lại trong bản nhạc có chức năng gì?",
        options: [
          "Báo hiệu lặp lại đoạn nhạc vừa chơi thêm một lần nữa",
          "Báo hiệu ngừng hẳn bài hát",
          "Yêu cầu đổi sang nhạc cụ khác",
          "Tăng gấp đôi âm lượng"
        ],
        correct: 0,
        explanation: "Dấu nhắc lại dùng để lặp lại một đoạn nhạc mà không cần phải chép lại lần thứ hai."
      },
      {
        question: "Dấu nhắc lại trên khuông nhạc có đặc điểm nhận biết gì?",
        options: [
          "Hai vạch nhịp đứng kèm hai dấu chấm tròn nhỏ",
          "Một hình ngôi sao 5 cánh",
          "Một hình tam giác màu đỏ",
          "Một dấu gạch chéo"
        ],
        correct: 0,
        explanation: "Dấu nhắc lại gồm hai vạch nhịp thẳng đứng kèm hai dấu chấm tròn đặt ở khe 2 và khe 3."
      },
      {
        question: "Khi thổi sáo Recorder để âm thanh không bị xì hoặc rít, người chơi cần chú ý điều gì?",
        options: [
          "Dùng phần thịt đầu ngón tay bịt thật kín các lỗ bấm và thổi hơi nhẹ nhàng",
          "Thổi thật mạnh hết sức lực",
          "Để hở các lỗ ngón tay",
          "Cắn chặt đầu sáo bằng răng"
        ],
        correct: 0,
        explanation: "Bịt kín các lỗ bấm và thổi luồng hơi nhẹ, đều đặn sẽ giúp âm thanh phát ra trong trẻo."
      },
      {
        question: "Kèn phím Melodica phát ra âm thanh nhờ nguyên lí kết hợp giữa yếu tố nào?",
        options: [
          "Luồng hơi thổi từ miệng và việc nhấn các phím đàn bằng tay",
          "Dùng búa gõ vào dây thép",
          "Kéo dây vĩ như violin",
          "Chỉ cần cắm điện không cần thổi"
        ],
        correct: 0,
        explanation: "Melodica là nhạc cụ hơi có bàn phím: người chơi thổi hơi qua ống ngậm đồng thời nhấn các phím đàn."
      }
    ]
  },

  // ================= CHỦ ĐỀ 8: VUI HÈ CHÀO ĐÓN =================
  {
    id: "bai-15",
    lessonNum: 15,
    topicNum: 8,
    topicName: "Chủ đề 8: Vui hè chào đón",
    tag: "Học hát",
    title: "Bài 15: Học hát bài 'Khúc ca mùa hè' / 'Ve sầu và kiến'",
    objectives: [
      "Hát đúng giai điệu, lời ca bài hát chào đón mùa hè rộn rã nắng vàng và tiếng ve ngân.",
      "Thể hiện nhịp điệu hoạt bát, vui tươi, hồn nhiên trước thềm kỳ nghỉ hè bổ ích.",
      "Hát kết hợp gõ đệm nhạc cụ thanh phách, tambourine hoặc vận động cơ thể sôi nổi.",
      "Lên kế hoạch một kỳ nghỉ hè vui tươi, an toàn, lành mạnh và bổ ích."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800">
          <h4 class="font-bold text-lime-900 dark:text-lime-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-sun text-lime-600"></i> Hát vang khúc ca mùa hè tuổi thơ
          </h4>
          <p class="text-xs sm:text-sm">
            Mùa hè về mang theo hoa phượng nở đỏ rực, tiếng ve râm ran và những chuyến du lịch cùng gia đình, về quê thăm ông bà, tắm biển mát rượi. Các bài hát về mùa hè luôn tràn đầy năng lượng tươi trẻ, thúc giục các bạn nhỏ vui chơi, khám phá thiên nhiên tươi đẹp.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-music text-lime-500"></i> Phong cách biểu diễn mùa hè
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Hát đồng thanh tròn tiếng, nhịp bước chân nhanh nhẹn, hoạt bát.</li>
            <li>Động tác tay vươn cao đón ánh nắng rực rỡ và tiếng ve ngân rộn ràng.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-hands-clapping text-lime-500"></i> Biểu diễn tập thể chào hè:
        </h5>
        <p class="text-xs">Tổ 1 hát lĩnh xướng, cả lớp hòa giọng câu điệp khúc rộn ràng kết hợp vỗ tay theo phách nhịp 2/4.</p>
      </div>
    `,
    summary: "Ca khúc mùa hè rộn ràng khép lại năm học lớp 4, khích lệ các em học sinh bước vào kỳ nghỉ hè an toàn, bổ ích và tràn ngập niềm vui bên gia đình và bạn bè.",
    quizzes: [
      {
        question: "Biểu tượng quen thuộc của mùa hè học trò là những hình ảnh thiên nhiên nào?",
        options: [
          "Hoa phượng vĩ đỏ rực và tiếng ve sầu ngân vang",
          "Cành hoa đào phai",
          "Cơn gió bấc mùa đông",
          "Lá vàng rơi rụng mùa thu"
        ],
        correct: 0,
        explanation: "Hoa phượng vĩ nở đỏ thắm và tiếng ve kêu rộn rã là biểu tượng đặc trưng nhất của mùa hè tuổi học trò."
      },
      {
        question: "Sắc thái chủ đạo khi thể hiện các ca khúc chào hè là gì?",
        options: [
          "Rộn ràng, vui tươi, sôi nổi và tràn ngập niềm hào hứng",
          "U uất, buồn bã",
          "Ảm đạm như mưa phùn",
          "Lạnh lùng, sợ hãi"
        ],
        correct: 0,
        explanation: "Bài hát mùa hè luôn mang lại năng lượng vui vẻ, hào hứng chào đón kỳ nghỉ thú vị."
      },
      {
        question: "Để kỳ nghỉ hè an toàn và lành mạnh, học sinh cần tuyệt đối tránh điều gì?",
        options: [
          "Tự ý rủ nhau đi tắm sông, suối, ao hồ sâu mà không có người lớn đi cùng",
          "Đọc sách báo mở mang kiến thức",
          "Tập luyện thể dục thể thao nâng cao sức khỏe",
          "Giúp đỡ cha mẹ làm việc nhà"
        ],
        correct: 0,
        explanation: "Tự ý đi bơi ở vùng nước sâu rất nguy hiểm, dễ dẫn đến đuối nước thương tâm."
      },
      {
        question: "Sau khi hoàn thành năm học lớp 4, các em học sinh sẽ chuẩn bị bước lên lớp mấy?",
        options: [
          "Lớp 5 (năm học cuối cấp Tiểu học)",
          "Lớp 6 (cấp THCS)",
          "Lớp 10 (cấp THPT)",
          "Học lại lớp 3"
        ],
        correct: 0,
        explanation: "Hoàn thành lớp 4, học sinh sẽ bước vào năm học lớp 5 - năm học kết thúc bậc Tiểu học."
      }
    ]
  },

  {
    id: "bai-16",
    lessonNum: 16,
    topicNum: 8,
    topicName: "Chủ đề 8: Vui hè chào đón",
    tag: "Tổng kết & Dự án âm nhạc",
    title: "Bài 16: Ôn tập tổng kết cuối năm Lớp 4 & Dự án 'Ngày hội âm nhạc Tuổi hồng'",
    objectives: [
      "Hệ thống hóa toàn bộ kiến thức nhạc lí cốt lõi đã học trong năm học Lớp 4: Các hình nốt (tròn, trắng, đen, móc đơn), Nhịp 2/4, Vị trí 7 nốt trên Khóa Son, Dấu lặng đen, Nốt trắng chấm dôi, Dấu nối, Dấu luyến, Dấu nhắc lại.",
      "Ôn tập 5 bài đọc nhạc và các làn điệu dân ca, ca khúc học đường tiêu biểu.",
      "Ghi nhớ các nhạc cụ và nhạc sĩ lớn: Đàn Nguyệt (Đàn Kìm), Sáo Recorder, Kèn Melodica, Nhạc sĩ Bùi Đình Thảo, Vũ Hoàng, Hoàng Vân, Ngô Ngọc Báu.",
      "Tổ chức thành công buổi biểu diễn báo cáo dự án âm nhạc kết thúc năm học lớp 4."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-list-check text-lime-600"></i> Bảng tổng hợp kiến thức cốt lõi Âm nhạc Lớp 4
        </h4>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <strong class="text-lime-600 dark:text-lime-400 block mb-1">1. Nhạc lí trọng tâm Lớp 4</strong>
            <ul class="space-y-1 list-disc list-inside text-xs">
              <li><strong>Hình nốt:</strong> Nốt tròn (4p), nốt trắng (2p), nốt đen (1p), nốt móc đơn (1/2p).</li>
              <li><strong>Nhịp 2/4:</strong> Có 2 phách nốt đen trong một ô nhịp (phách 1 mạnh, phách 2 nhẹ).</li>
              <li><strong>Dấu lặng đen:</strong> Nghỉ bằng 1 phách nốt đen.</li>
              <li><strong>Nốt trắng chấm dôi:</strong> Ngân dài 3 phách (2 + 1 phách).</li>
              <li><strong>Dấu nối & Dấu luyến:</strong> Dấu nối (cùng cao độ), Dấu luyến (khác cao độ).</li>
              <li><strong>Dấu nhắc lại:</strong> Báo hiệu lặp lại đoạn nhạc.</li>
            </ul>
          </div>

          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <strong class="text-lime-600 dark:text-lime-400 block mb-1">2. Tác giả & Nhạc cụ tiêu biểu</strong>
            <ul class="space-y-1 list-disc list-inside text-xs">
              <li><strong>Vũ Hoàng - Lê Văn Lộc:</strong> Ca khúc bất hủ <em>Bụi phấn</em>.</li>
              <li><strong>Bùi Đình Thảo:</strong> Nhạc sĩ của đồng quê với <em>Đi học, Bàn tay mẹ</em>.</li>
              <li><strong>Hoàng Vân:</strong> Ca khúc trường học <em>Em yêu trường em</em>.</li>
              <li><strong>Nhạc cụ:</strong> Đàn Nguyệt (Đàn Kìm), Sáo Recorder, Kèn Melodica.</li>
            </ul>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-gradient-to-r from-lime-600 to-green-700 text-white rounded-2xl shadow-md mt-4">
          <h5 class="font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-award"></i> Chúc mừng các em hoàn thành xuất sắc chương trình Âm nhạc 4!
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed text-white/90">
            Qua 8 chủ đề và 16 bài học, các em đã rèn luyện kỹ năng thanh nhạc, cảm thụ nhịp phách, làm quen nhạc cụ học đường và bồi đắp tâm hồn trong sáng để tự tin bước lên lớp 5 - năm học kết thúc bậc Tiểu học.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-trophy text-lime-500"></i> Bài tập ôn luyện toàn khóa:
        </h5>
        <p class="text-xs">Hãy nhấn vào nút 'Kiểm tra toàn khóa (10 câu)' ở đầu trang để làm bài thi trắc nghiệm tổng hợp bao quát toàn bộ 8 chủ đề chương trình Âm nhạc 4.</p>
      </div>
    `,
    summary: "Bài học tổng kết toàn bộ 8 chủ đề chương trình Âm nhạc lớp 4 theo định hướng phát triển phẩm chất và năng lực của GDPT 2018 Kết nối tri thức với cuộc sống.",
    quizzes: [
      {
        question: "Một nốt tròn có giá trị trường độ bằng bao nhiêu nốt đen?",
        options: ["4 nốt đen", "2 nốt đen", "8 nốt đen", "1 nốt đen"],
        correct: 0,
        explanation: "1 nốt tròn (4 phách) = 4 nốt đen (mỗi nốt 1 phách)."
      },
      {
        question: "Cây Đàn Nguyệt của dân tộc ta có bao nhiêu dây đàn?",
        options: ["2 dây đàn", "1 dây đàn", "4 dây đàn", "16 dây đàn"],
        correct: 0,
        explanation: "Đàn Nguyệt là nhạc cụ dây gảy có đúng 2 dây mắc trên cần đàn dài."
      },
      {
        question: "Ca khúc 'Bụi phấn' thường được các thế hệ học trò hát vang tri ân thầy cô giáo vào dịp lễ nào?",
        options: [
          "Ngày Nhà giáo Việt Nam 20 tháng 11",
          "Ngày Quốc tế Thiếu nhi 1 tháng 6",
          "Tết Trung thu",
          "Tết Nguyên đán"
        ],
        correct: 0,
        explanation: "Bài hát 'Bụi phấn' là ca khúc truyền thống xúc động nhất trong ngày 20/11 hàng năm."
      },
      {
        question: "Đặc điểm khác biệt giữa Dấu nối và Dấu luyến là gì?",
        options: [
          "Dấu nối liên kết các nốt CÙNG cao độ, còn Dấu luyến liên kết các nốt KHÁC cao độ",
          "Dấu nối có màu đen còn dấu luyến màu trắng",
          "Dấu nối chỉ dùng cho sáo trúc",
          "Hai dấu hoàn toàn giống nhau không có khác biệt gì"
        ],
        correct: 0,
        explanation: "Dấu nối dùng cho các nốt cùng cao độ, còn dấu luyến dùng để lướt êm qua các nốt khác cao độ."
      }
    ]
  }
];

module.exports = lessons;
