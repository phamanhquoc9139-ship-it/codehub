// Data for 16 lessons of Grade 5 Music (SGK Kết nối tri thức với cuộc sống - GDPT 2018)
// 8 Topics x 2 Lessons = 16 Lessons, each with 4 quizzes = 64 Quizzes

const lessons = [
  // ================= CHỦ ĐỀ 1: CHÀO NĂM HỌC MỚI =================
  {
    id: "bai-1",
    lessonNum: 1,
    topicNum: 1,
    topicName: "Chủ đề 1: Chào năm học mới",
    tag: "Học hát & Nhạc cụ",
    title: "Bài 1: Học hát bài 'Reo vang bình minh' & Thực hành Nhạc cụ gõ",
    objectives: [
      "Hát đúng giai điệu, lời ca bài 'Reo vang bình minh' (nhạc và lời: Lưu Hữu Phước); thể hiện sắc thái rộn rã, tràn đầy sức sống.",
      "Biết lấy hơi đúng nhịp, phát âm tròn vành rõ chữ, thể hiện niềm hân hoan đón chào ngày mới.",
      "Gõ đệm nhạc cụ thanh phách, tambourine hoặc kẻng tam giác (triangle) theo tiết tấu lời ca.",
      "Cảm nhận vẻ đẹp rực rỡ của thiên nhiên buổi bình minh và niềm vui bước vào năm học cuối cấp Tiểu học."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-sun text-pink-600"></i> Ca khúc bất hủ 'Reo vang bình minh'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát do nhạc sĩ <strong>Lưu Hữu Phước</strong> sáng tác năm 1947, mở đầu bằng bức tranh thiên nhiên rực rỡ nắng mai: <em>'Reo vang reo, ca vang ca, cất tiếng hát vang rừng xanh, vang đồng la bao la...'</em>. Giai điệu thôi thúc, rộn ràng, mang lại năng lượng phấn khởi cho học sinh mỗi sớm mai tới trường.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-music text-pink-500"></i> 1. Cấu trúc và giai điệu
            </h5>
            <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li><strong>Số chỉ nhịp:</strong> Viết ở nhịp 2/4 với tiết tấu nhanh, hoạt bát.</li>
              <li><strong>Hình thức:</strong> Bài gồm 2 đoạn, đoạn 1 miêu tả cảnh bình minh tươi đẹp, đoạn 2 là khúc hoan ca rộn rã của tuổi thơ.</li>
              <li><strong>Kỹ thuật:</strong> Hát ngân đủ phách cuối câu, lấy hơi dứt khoát ở dấu lặng.</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-drum text-pink-500"></i> 2. Hòa tấu nhạc cụ gõ đệm
            </h5>
            <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li><strong>Thanh phách:</strong> Gõ vào các tiếng nhấn: 'Reo' (phách 1), 'ca' (phách 2).</li>
              <li><strong>Song loan:</strong> Điểm nhịp mở đầu mỗi ô nhịp.</li>
              <li><strong>Tambourine:</strong> Lắc rung tay tạo tiếng xập xòe rộn rã ở điệp khúc.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-hand-holding-hand text-pink-500"></i> Hoạt động thanh nhạc & gõ đệm:
        </h5>
        <p class="text-xs">Luyện khởi động giọng theo thang 5 âm: Đô - Rê - Mi - Son - La. Hát kết hợp vận động vỗ tay theo cặp đôi nhịp nhàng.</p>
      </div>
    `,
    summary: "Ca khúc 'Reo vang bình minh' của Lưu Hữu Phước viết ở nhịp 2/4 với sắc thái tươi vui, rộn ràng, miêu tả cảnh bình minh thiên nhiên rực rỡ và tiếng hát trong sáng của tuổi thơ.",
    quizzes: [
      {
        question: "Ai là tác giả sáng tác ca khúc thiếu nhi kinh điển 'Reo vang bình minh'?",
        options: ["Nhạc sĩ Lưu Hữu Phước", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phong Nhã", "Nhạc sĩ Phạm Tuyên"],
        correct: 0,
        explanation: "Bài hát 'Reo vang bình minh' được nhạc sĩ Lưu Hữu Phước sáng tác vào năm 1947."
      },
      {
        question: "Giai điệu và sắc thái bài hát 'Reo vang bình minh' mang tính chất như thế nào?",
        options: [
          "Rộn rã, tươi sáng, vui tươi và tràn đầy sức sống",
          "Buồn rầu, ủ rũ",
          "U uất, trầm lắng",
          "Dồn dập đáng sợ"
        ],
        correct: 0,
        explanation: "Bài hát ngợi ca cảnh bình minh tươi đẹp với nhịp điệu rộn ràng, hoạt bát và đầy lạc quan."
      },
      {
        question: "Bài hát 'Reo vang bình minh' được viết ở số chỉ nhịp nào?",
        options: ["Nhịp 2/4", "Nhịp 3/4", "Nhịp 6/8", "Nhịp 4/4"],
        correct: 0,
        explanation: "Bài hát được viết ở nhịp 2/4 mang tính chất nhịp nhàng, bước đi vui tươi."
      },
      {
        question: "Hình ảnh nào được gợi tả qua câu hát mở đầu 'Reo vang reo, ca vang ca, cất tiếng hát vang rừng xanh'?",
        options: [
          "Bình minh rực rỡ chan hòa ánh nắng và tiếng chim ca",
          "Đêm trăng thanh vắng mùa đông lạnh giá",
          "Cơn bão lũ tràn về miền quê",
          "Hoàng hôn tắt nắng trên đồng cỏ vắng"
        ],
        correct: 0,
        explanation: "Câu hát vẽ nên khung cảnh bình minh tươi đẹp rộn rã tiếng hát của thiên nhiên và tuổi thơ."
      }
    ]
  },

  {
    id: "bai-2",
    lessonNum: 2,
    topicNum: 1,
    topicName: "Chủ đề 1: Chào năm học mới",
    tag: "Lí thuyết & Đọc nhạc",
    title: "Bài 2: Ôn tập 7 nốt nhạc trên Khuông nhạc Khóa Son & Bài đọc nhạc số 1",
    objectives: [
      "Nhận biết và gọi đúng tên, vị trí 7 nốt nhạc (Đô, Rê, Mi, Pha, Son, La, Si) trên khuông nhạc có Khóa Son.",
      "Hiểu ý nghĩa của Khóa Son (bắt đầu từ dòng kẻ số 2 xác định nốt Son).",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 1.",
      "Biết gõ phách hoặc bấm các nốt cơ bản trên kèn phím Melodica / sáo Recorder."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-lines-leaning text-pink-600"></i> Khuông nhạc và Khóa Son
        </h4>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800 text-xs sm:text-sm">
          <ul class="space-y-1.5 list-disc list-inside">
            <li><strong>Khuông nhạc:</strong> Gồm 5 dòng kẻ song song và 4 khe (đếm từ dưới lên trên: dòng 1, dòng 2, dòng 3, dòng 4, dòng 5).</li>
            <li><strong>Khóa Son (G-clef):</strong> Đặt ở đầu khuông nhạc, điểm bắt đầu vẽ từ <strong>dòng kẻ thứ 2</strong>, xác định vị trí nốt <strong>Son</strong>.</li>
            <li><strong>7 nốt nhạc cơ bản:</strong> Đô (dòng kẻ phụ thứ nhất) - Rê (dưới dòng 1) - Mi (dòng 1) - Pha (khe 1) - Son (dòng 2) - La (khe 2) - Si (dòng 3).</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-book-open text-pink-500"></i> Bài đọc nhạc số 1 (Giọng Đô trưởng)
          </h5>
          <p class="text-xs sm:text-sm">
            Bài đọc nhạc số 1 viết ở nhịp 2/4. Các nốt sử dụng gồm: <strong>Đô - Rê - Mi - Pha - Son - La</strong>. Hình nốt gồm: Nốt đen và nốt trắng. Giai điệu trong sáng, nhịp nhàng bước đi của học sinh lớp 5.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-list-check text-pink-500"></i> Thực hành Bài đọc nhạc số 1:
        </h5>
        <p class="text-xs">1. Đọc tên nốt nhạc theo thang âm: Đô - Rê - Mi - Pha - Son - La rồi đọc ngược lại.</p>
        <p class="text-xs">2. Gõ tiết tấu: Đen - Đen | Đen - Đen | Trắng --- ||</p>
        <p class="text-xs">3. Vừa đọc xướng âm vừa làm thủ bộ ký hiệu bàn tay (Curwen Hand Signs).</p>
      </div>
    `,
    summary: "Khuông nhạc gồm 5 dòng và 4 khe tính từ dưới lên. Khóa Son bắt đầu từ dòng kẻ thứ 2 xác định nốt Son. Bài đọc nhạc số 1 củng cố cao độ từ Đô đến La trên nhịp 2/4.",
    quizzes: [
      {
        question: "Khuông nhạc tiêu chuẩn trong âm nhạc gồm có bao nhiêu dòng kẻ và bao nhiêu khe?",
        options: ["5 dòng kẻ và 4 khe", "4 dòng kẻ và 5 khe", "6 dòng kẻ và 5 khe", "3 dòng kẻ và 3 khe"],
        correct: 0,
        explanation: "Khuông nhạc gồm 5 dòng kẻ nằm ngang song song cách đều nhau và tạo thành 4 khe."
      },
      {
        question: "Khóa Son được bắt đầu vẽ từ dòng kẻ thứ mấy của khuông nhạc?",
        options: ["Dòng kẻ thứ 2", "Dòng kẻ thứ 1", "Dòng kẻ thứ 3", "Dòng kẻ thứ 4"],
        correct: 0,
        explanation: "Khóa Son bắt đầu vẽ từ dòng kẻ số 2, dùng để xác định vị trí nốt Son nằm trên dòng kẻ thứ 2."
      },
      {
        question: "Nốt Mi nằm ở vị trí nào trên khuông nhạc có Khóa Son?",
        options: ["Trên dòng kẻ thứ 1", "Nằm ở khe thứ 1", "Trên dòng kẻ thứ 2", "Nằm ở dòng kẻ phụ"],
        correct: 0,
        explanation: "Nốt Mi nằm trực tiếp trên dòng kẻ số 1 (tính từ dưới lên)."
      },
      {
        question: "Nốt Đô (Đô 1) nằm ở vị trí nào đối với khuông nhạc?",
        options: [
          "Nằm trên dòng kẻ phụ thứ nhất phía dưới khuông nhạc",
          "Nằm trên dòng kẻ thứ 5 trên cùng",
          "Nằm ở khe thứ 4",
          "Nằm ở dòng kẻ thứ 3"
        ],
        correct: 0,
        explanation: "Nốt Đô 1 có một đường gạch ngang nhỏ đi qua (dòng kẻ phụ thứ nhất bên dưới khuông nhạc)."
      }
    ]
  },

  // ================= CHỦ ĐỀ 2: TÌNH BẠN BỐN PHƯƠNG =================
  {
    id: "bai-3",
    lessonNum: 3,
    topicNum: 2,
    topicName: "Chủ đề 2: Tình bạn bốn phương",
    tag: "Học hát",
    title: "Bài 3: Học hát bài 'Dàn đồng ca mùa hạ' (Lê Minh Châu - Minh Khôi)",
    objectives: [
      "Hát đúng cao độ, trường độ và sắc thái rộn rã, sinh động của bài hát 'Dàn đồng ca mùa hạ'.",
      "Cảm nhận hình ảnh đàn ve sầu hóa thành một dàn nhạc giao hưởng tuyệt vời của thiên nhiên mùa hạ.",
      "Hát kết hợp gõ đệm theo phách, theo nhịp và vận động phụ họa hồn nhiên.",
      "Tăng cường tinh thần đoàn kết, gắn bó thân ái giữa bạn bè cùng trang lứa."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-users text-pink-600"></i> Ca khúc 'Dàn đồng ca mùa hạ'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát do nhạc sĩ <strong>Lê Minh Châu</strong> phổ nhạc từ lời thơ của <strong>Minh Khôi</strong>. Hình ảnh tiếng ve kêu râm ran dưới vòm lá phượng vĩ được ví như một dàn nhạc giao hưởng sôi nổi đang cùng nhau tấu khúc hoan ca rực rỡ đón hạ về.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-microphone-lines text-pink-500"></i> Kỹ thuật thể hiện ca khúc
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li><strong>Nhịp điệu:</strong> Nhịp 2/4 rộn rã, thể hiện nhịp bước chân nhanh nhẹn, vui tươi.</li>
            <li><strong>Mô phỏng âm thanh:</strong> Thể hiện câu 've ve ve' với âm thanh nảy (staccato), dứt khoát và linh hoạt.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-pink-500"></i> Biểu diễn hòa giọng:
        </h5>
        <p class="text-xs">Tổ 1 hát lời ca chính, Tổ 2 đệm bè mô phỏng tiếng ve 've ve ve' đều đặn theo phách. Đổi vai để rèn luyện thính giác âm nhạc.</p>
      </div>
    `,
    summary: "Bài hát 'Dàn đồng ca mùa hạ' của Lê Minh Châu - Minh Khôi với giai điệu rộn ràng, hình ảnh đàn ve sầu hòa tấu sinh động thể hiện tình bạn trong sáng và niềm vui mùa hè tuổi thơ.",
    quizzes: [
      {
        question: "Ai là tác giả phần nhạc của bài hát 'Dàn đồng ca mùa hạ'?",
        options: ["Nhạc sĩ Lê Minh Châu", "Nhạc sĩ Văn Cao", "Nhạc sĩ Hoàng Vân", "Nhạc sĩ Bùi Đình Thảo"],
        correct: 0,
        explanation: "Nhạc sĩ Lê Minh Châu đã phổ nhạc xuất sắc từ bài thơ của nhà thơ Minh Khôi."
      },
      {
        question: "Trong bài hát, âm thanh nào của thiên nhiên được ví như một 'dàn đồng ca' mùa hạ?",
        options: [
          "Tiếng ve sầu râm ran trên vòm lá phượng vĩ",
          "Tiếng suối chảy róc rách",
          "Tiếng gió rít mùa đông",
          "Tiếng sóng biển vỗ rì rào"
        ],
        correct: 0,
        explanation: "Bài hát ví tiếng ve kêu mùa hè như một dàn nhạc giao hưởng đang tấu khúc đồng ca."
      },
      {
        question: "Khi thể hiện các câu hát có từ mô phỏng tiếng ve 've ve ve', học sinh nên hát với kỹ thuật gì?",
        options: [
          "Hát nảy âm (dứt khoát, linh hoạt và vui tươi)",
          "Hát thật chậm và buồn rầu",
          "Hát gào thét mất nhịp",
          "Hát thì thầm không ai nghe thấy"
        ],
        correct: 0,
        explanation: "Hát nảy âm (staccato) giúp tiếng ve kêu trở nên linh hoạt, sống động và rộn ràng."
      },
      {
        question: "Ý nghĩa của chủ đề 'Tình bạn bốn phương' là gì?",
        options: [
          "Gắn kết tình bạn thân thiết, đoàn kết giữa trẻ em khắp mọi miền",
          "Khuyên học sinh không chơi cùng ai",
          "Tranh cãi so bì hơn thua",
          "Ở yên một chỗ không giao tiếp"
        ],
        correct: 0,
        explanation: "Chủ đề bồi dưỡng tinh thần hòa đồng, thân ái và tình bạn trong sáng không biên giới."
      }
    ]
  },

  {
    id: "bai-4",
    lessonNum: 4,
    topicNum: 2,
    topicName: "Chủ đề 2: Tình bạn bốn phương",
    tag: "Thường thức âm nhạc",
    title: "Bài 4: Tìm hiểu Đàn Piano (Dương cầm) & Vua nhạc cụ phương Tây",
    objectives: [
      "Nắm được nguồn gốc xuất xứ, cấu tạo cơ bản và âm thanh tuyệt diệu của cây Đàn Piano (Dương cầm).",
      "Hiểu vì sao Đàn Piano được tôn vinh là 'Vua của các loại nhạc cụ'.",
      "Phân biệt được Đàn Grand Piano (Đại dương cầm) và Upright Piano (Dương cầm đứng).",
      "Cảm thụ âm thanh phong phú của Đàn Piano qua một số tác phẩm âm nhạc thiếu nhi bất hủ."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-keyboard text-pink-600"></i> Đàn Piano - 'Vua của các nhạc cụ'
          </h4>
          <p class="text-xs sm:text-sm">
            Đàn <strong>Piano</strong> (tiếng Ý: <em>Pianoforte</em> nghĩa là 'êm dịu và mạnh mẽ') do nghệ nhân <strong>Bartolomeo Cristofori</strong> phát minh tại Ý vào khoảng năm 1700. Nhờ dải âm rộng (88 phím), có thể chơi từ cực nhỏ (piano) đến cực to (forte), Piano được tôn vinh là Vua của các nhạc cụ.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-shapes text-pink-500"></i> Cấu tạo và nguyên lí hoạt động
            </h5>
            <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li><strong>Bàn phím:</strong> Chuẩn gồm 88 phím (52 phím trắng và 36 phím đen).</li>
              <li><strong>Cơ chế búa gõ:</strong> Khi nhấn phím, búa bọc nỉ gõ vào dây thép bên trong tạo ra âm thanh ngân vang.</li>
              <li><strong>Bàn đạp (Pedal):</strong> Thường có 2 hoặc 3 pedal để ngân dài hoặc làm mờ âm thanh.</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-layer-group text-pink-500"></i> Hai loại đàn Piano phổ biến
            </h5>
            <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li><strong>Grand Piano (Đại dương cầm):</strong> Dáng nằm ngang hình cánh chim đuôi dài, dùng trong hòa nhạc lớn.</li>
              <li><strong>Upright Piano (Dương cầm đứng):</strong> Dáng hộp chữ nhật đứng gọn gàng, phổ biến trong gia đình và trường học.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-headphones text-pink-500"></i> Nghe và cảm thụ âm sắc:
        </h5>
        <p class="text-xs">Lắng nghe một trích đoạn độc tấu Piano (Fur Elise của Beethoven). Nhận xét âm thanh trầm ở tay trái và bổng ở tay phải của nghệ sĩ.</p>
      </div>
    `,
    summary: "Đàn Piano phát minh tại Ý, gồm 88 phím (52 trắng, 36 đen). Nhờ khả năng diễn cảm phong phú và âm vực rộng lớn, Piano được mệnh danh là Vua của các loại nhạc cụ phương Tây.",
    quizzes: [
      {
        question: "Cây đàn Piano tiêu chuẩn hiện đại có tổng cộng bao nhiêu phím đàn?",
        options: ["88 phím (52 phím trắng, 36 phím đen)", "61 phím", "76 phím", "100 phím"],
        correct: 0,
        explanation: "Bàn phím Piano tiêu chuẩn có đúng 88 phím gồm 52 phím trắng và 36 phím đen xen kẽ."
      },
      {
        question: "Vì sao cây đàn Piano được mệnh danh là 'Vua của các loại nhạc cụ'?",
        options: [
          "Vì có âm vực rộng lớn, có thể chơi hòa âm nhiều bè và sắc thái cực kỳ phong phú",
          "Vì nó là cây đàn đắt tiền nhất",
          "Vì chỉ có vua chúa mới được chơi đàn này",
          "Vì kích thước nó to nhất thế giới"
        ],
        correct: 0,
        explanation: "Piano có âm vực gần như bao trùm toàn bộ dàn nhạc giao hưởng, có thể chơi độc tấu lẫn hòa âm đa tầng."
      },
      {
        question: "Cơ chế phát ra âm thanh của cây đàn Piano thuộc nhóm nhạc cụ nào?",
        options: [
          "Nhạc cụ dây phím gõ (búa gõ vào dây thép khi nhấn phím)",
          "Nhạc cụ hơi thổi bằng miệng",
          "Nhạc cụ màng rung như trống",
          "Nhạc cụ điện tử phát loa"
        ],
        correct: 0,
        explanation: "Khi người chơi nhấn phím, hệ thống đòn bẩy truyền lực cho búa gõ vào dây kim loại căng bên trong thùng đàn."
      },
      {
        question: "Đàn Grand Piano (Đại dương cầm) có hình dáng đặc trưng gì?",
        options: [
          "Nằm ngang với thùng đàn hình cánh chim uốn lượn",
          "Dạng hộp vuông đứng sát tường",
          "Hình tam giác nhỏ cầm tay",
          "Hình tròn như chiếc trống"
        ],
        correct: 0,
        explanation: "Grand Piano có dây đàn căng nằm ngang trên khung gang lớn hình cánh chim, nắp đàn mở hé tạo âm vang tối đa."
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
    title: "Bài 5: Học hát bài 'Khúc ca tạ ơn' / 'Thầy cô cho em mùa xuân'",
    objectives: [
      "Hát đúng giai điệu, lời ca bài hát viết về tình thầy trò thiêng liêng, ấm áp.",
      "Biết thể hiện tình cảm biết ơn, kính yêu đối với các thầy cô giáo đã tận tụy dạy dỗ.",
      "Hát kết hợp vận động múa phụ họa nhẹ nhàng dâng hoa tặng thầy cô.",
      "Bồi dưỡng truyền thống đạo lí 'Tôn sư trọng đạo' tốt đẹp của dân tộc Việt Nam."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-chalkboard-user text-pink-600"></i> Ca ngợi người thầy chở đò tri thức
          </h4>
          <p class="text-xs sm:text-sm">
            Năm học lớp 5 là năm học đánh dấu chặng đường hoàn thành bậc Tiểu học. Những bài hát tri ân thầy cô ở lứa tuổi này luôn dạt dào tình cảm bồi hồi, nhớ về những ngày đầu bỡ ngỡ vào lớp 1 được cô cầm tay uốn từng nét chữ đầu đời.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-microphone text-pink-500"></i> Xử lí hơi thở và sắc thái
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Lấy hơi nhẹ nhàng ở cuối câu thơ, tránh lấy hơi giữa chừng làm đứt ý ca từ.</li>
            <li>Hát với âm lượng êm ái, nhả chữ chân thành và ánh mắt hướng về thầy cô trìu mến.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-flower text-pink-500"></i> Hoạt động văn nghệ 20/11:
        </h5>
        <p class="text-xs">Tập hợp nhóm múa phụ họa với hoa và dải lụa mềm. Tập lời chúc tri ân gửi đến thầy cô giáo nhân dịp kỉ niệm 20/11.</p>
      </div>
    `,
    summary: "Ca khúc tri ân thầy cô giáo với giai điệu ấm áp, tha thiết giúp các em học sinh lớp 5 bày tỏ lòng biết ơn sâu nặng tới những người lái đò thầm lặng suốt 5 năm tiểu học.",
    quizzes: [
      {
        question: "Truyền thống đạo lí tốt đẹp ngàn đời của dân tộc ta đối với người thầy được đúc kết qua câu tục ngữ nào?",
        options: [
          "Tôn sư trọng đạo / Uống nước nhớ nguồn",
          "Ăn bánh trả tiền",
          "Học một biết mười",
          "Gần mực thì đen gần đèn thì rạng"
        ],
        correct: 0,
        explanation: "'Tôn sư trọng đạo' là truyền thống quý báu tôn vinh vị thế cao quý của người thầy giáo trong xã hội Việt Nam."
      },
      {
        question: "Ngày Nhà giáo Việt Nam được tổ chức vào ngày nào hàng năm?",
        options: ["Ngày 20 tháng 11", "Ngày 20 tháng 10", "Ngày 8 tháng 3", "Ngày 1 tháng 6"],
        correct: 0,
        explanation: "Ngày 20/11 là ngày hội tôn vinh các thế hệ thầy cô giáo trên khắp cả nước."
      },
      {
        question: "Khi biểu diễn một bài hát mang tính chất tri ân xúc động, phong cách biểu diễn cần như thế nào?",
        options: [
          "Trang nghiêm, ấm áp, nhả chữ tha thiết và chân thành",
          "Hò hét nhảy múa ồn ào",
          "Cúi gằm mặt xuống đất không nhìn khán giả",
          "Cười cợt đùa giỡn trên sân khấu"
        ],
        correct: 0,
        explanation: "Phong cách ấm áp, chân thành sẽ truyền tải trọn vẹn lòng biết ơn tới thầy cô."
      },
      {
        question: "Để giữ được cột hơi ổn định khi hát những câu dài, học sinh cần làm gì?",
        options: [
          "Lấy hơi sâu vào bụng (cơ hoành) và điều tiết hơi thở từ từ qua thanh quản",
          "Hít thật nông rồi thở phì ra ngay",
          "Nín thở hoàn toàn",
          "Vừa chạy nhảy vừa hát"
        ],
        correct: 0,
        explanation: "Lấy hơi cơ hoành giúp tích trữ lượng hơi dồi dào, hỗ trợ ngân dài các nốt cuối câu."
      }
    ]
  },

  {
    id: "bai-6",
    lessonNum: 6,
    topicNum: 3,
    topicName: "Chủ đề 3: Biết ơn thầy cô",
    tag: "Lí thuyết âm nhạc & Đọc nhạc",
    title: "Bài 6: Khái niệm Nhịp 3/4, Bài đọc nhạc số 2 & Nhạc sĩ Phong Nhã",
    objectives: [
      "Hiểu rõ khái niệm số chỉ nhịp 3/4: có 3 phách trong một ô nhịp, mỗi phách bằng một nốt đen (phách 1 mạnh, phách 2 nhẹ, phách 3 nhẹ).",
      "Cảm nhận nhịp điệu đung đưa, uyển chuyển của điệu Valse trong nhịp 3/4.",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 2 kết hợp gõ nhịp 3/4.",
      "Tìm hiểu cuộc đời và sự nghiệp sáng tác của Nhạc sĩ Phong Nhã - 'Người viết sử Đội bằng âm nhạc'."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-music text-pink-600"></i> Định nghĩa Số chỉ nhịp 3/4
        </h4>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800 text-xs sm:text-sm">
          <ul class="space-y-1.5 list-disc list-inside">
            <li><strong>Số 3 (ở trên):</strong> Cho biết trong mỗi ô nhịp có đúng <strong>3 phách</strong>.</li>
            <li><strong>Số 4 (ở dưới):</strong> Cho biết giá trị độ dài mỗi phách bằng một <strong>nốt đen</strong>.</li>
            <li><strong>Quy luật phách:</strong> Phách 1 là <strong>phách mạnh</strong>, phách 2 là <strong>phách nhẹ</strong>, phách 3 là <strong>phách nhẹ</strong> (Mạnh - nhẹ - nhẹ).</li>
            <li><strong>Đặc trưng:</strong> Tạo cảm giác nhịp nhàng đung đưa như điệu van-xơ (valse).</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-star text-pink-500"></i> Nhạc sĩ Phong Nhã (1924 - 2020)
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Nhạc sĩ Phong Nhã quê ở Hà Nam, được mệnh danh là 'ông vua âm nhạc thiếu nhi'. Ông đã cống hiến trọn đời cho Đội TNTP Hồ Chí Minh với các bài hát bất hủ: <em>Cùng nhau ta đi lên</em> (Đội ca), <em>Ai yêu Bác Hồ Chí Minh hơn thiếu niên nhi đồng, Kim Đồng, Nhanh bước nhanh nhi đồng...</em> Ông được trao tặng Giải thưởng Nhà nước về Văn học - Nghệ thuật (2001).
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-hand text-pink-500"></i> Đánh nhịp 3/4:
        </h5>
        <p class="text-xs">Phách 1: Đánh tay xuống (Mạnh) | Phách 2: Đưa tay sang ngang (Nhẹ) | Phách 3: Hất tay lên cao (Nhẹ). Áp dụng vào Bài đọc nhạc số 2.</p>
      </div>
    `,
    summary: "Nhịp 3/4 có 3 phách trong một ô nhịp, mỗi phách bằng một nốt đen (Mạnh - nhẹ - nhẹ). Nhạc sĩ Phong Nhã là tác giả bài Đội ca và nhiều ca khúc thiếu nhi kinh điển của Việt Nam.",
    quizzes: [
      {
        question: "Trong số chỉ nhịp 3/4, mỗi ô nhịp có bao nhiêu phách và tính chất các phách là gì?",
        options: [
          "Có 3 phách (phách 1 mạnh, phách 2 nhẹ, phách 3 nhẹ)",
          "Có 2 phách (phách 1 mạnh, phách 2 nhẹ)",
          "Có 4 phách (mạnh, nhẹ, mạnh vừa, nhẹ)",
          "Có 3 phách đều mạnh như nhau"
        ],
        correct: 0,
        explanation: "Quy luật cơ bản của nhịp 3/4 là có 3 phách: phách 1 mạnh, phách 2 nhẹ, phách 3 nhẹ."
      },
      {
        question: "Điệu nhảy cổ điển phương Tây nổi tiếng thế giới nào gắn liền với nhịp 3/4 đung đưa nhịp nhàng?",
        options: ["Điệu Valse (Van-xơ)", "Điệu Tango", "Điệu Cha-cha-cha", "Điệu Rock & Roll"],
        correct: 0,
        explanation: "Điệu Valse (van-xơ) trứ danh của nước Áo và châu Âu viết ở nhịp 3/4 với nhịp đung đưa quyến rũ."
      },
      {
        question: "Ai là tác giả sáng tác bài hát 'Cùng nhau ta đi lên' (Bài hát chính thức của Đội TNTP Hồ Chí Minh - Đội ca)?",
        options: ["Nhạc sĩ Phong Nhã", "Nhạc sĩ Văn Cao", "Nhạc sĩ Hoàng Long", "Nhạc sĩ Phạm Tuyên"],
        correct: 0,
        explanation: "Nhạc sĩ Phong Nhã đã sáng tác bài 'Cùng nhau ta đi lên' vào năm 1950, sau đó được chọn làm Đội ca."
      },
      {
        question: "Tên gọi thân thương mà mọi người thường dành tặng cho nhạc sĩ Phong Nhã là gì?",
        options: [
          "'Người viết sử Đội bằng âm nhạc'",
          "'Vua hành khúc giao hưởng'",
          "'Nhạc sĩ của núi rừng Tây Bắc'",
          "'Nghệ sĩ đàn tranh dân gian'"
        ],
        correct: 0,
        explanation: "Các tác phẩm của Phong Nhã gắn liền từng chặng đường lịch sử của tổ chức Đội TNTP Hồ Chí Minh."
      }
    ]
  },

  // ================= CHỦ ĐỀ 4: EM YÊU LÀN ĐIỆU DÂN CA =================
  {
    id: "bai-7",
    lessonNum: 7,
    topicNum: 4,
    topicName: "Chủ đề 4: Em yêu làn điệu dân ca",
    tag: "Học hát & Dân ca",
    title: "Bài 7: Học hát Dân ca Nam Bộ 'Lí dĩa bánh bò' & Làn điệu Lí ngọt ngào",
    objectives: [
      "Hát đúng cao độ, trường độ và sắc thái dí dỏm, duyên dáng của bài dân ca Nam Bộ 'Lí dĩa bánh bò'.",
      "Hiểu nét văn hóa dân dã, chân chất và phóng khoáng của con người vùng đồng bằng sông Cửu Long.",
      "Hát kết hợp gõ đệm song loan, thanh phách và động tác múa mời bánh dân gian.",
      "Yêu quý và tự hào về sự phong phú của kho tàng các điệu Lí dân ca Việt Nam."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-cookie-bite text-pink-600"></i> Dân ca Nam Bộ 'Lí dĩa bánh bò'
          </h4>
          <p class="text-xs sm:text-sm">
            'Lí dĩa bánh bò' là một điệu Lí dí dỏm, mộc mạc của người dân Nam Bộ. Bài hát miêu tả món bánh bò truyền thống thơm ngọt béo ngậy nước cốt dừa, lồng ghép vào đó là sự hiếu khách, hào sảng và tình làng nghĩa xóm tối lửa tắt đèn có nhau.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <strong class="text-pink-700 dark:text-pink-400 block mb-1">Âm hưởng ngũ cung Nam Bộ</strong>
            <p>Giai điệu uyển chuyển với các tiếng luyến láy 'ơ hò', 'là hò' đặc trưng của phương ngữ Nam Bộ, nhịp điệu vui tươi, dí dỏm.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <strong class="text-pink-700 dark:text-pink-400 block mb-1">Cách phát âm lời ca</strong>
            <p>Phát âm mềm mại, giữ đúng ngữ điệu chân chất miền Tây, nụ cười tươi tắn duyên dáng khi thể hiện lời ca.</p>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-cake-candles text-pink-500"></i> Động tác múa dân gian:
        </h5>
        <p class="text-xs">Hai tay giả làm động tác bưng dĩa bánh bò mời khách: đưa tay sang phải rồi sang trái nhịp nhàng, nghiêng đầu duyên dáng theo tiếng hát 'hai tay bưng dĩa bánh bò...'.</p>
      </div>
    `,
    summary: "Dân ca Nam Bộ 'Lí dĩa bánh bò' mang tính chất vui tươi, hóm hỉnh, ca ngợi món ăn truyền thống dân dã và tính cách hào sảng, hiếu khách của người dân phương Nam.",
    quizzes: [
      {
        question: "Bài hát 'Lí dĩa bánh bò' thuộc thể loại dân ca của vùng miền nào ở nước ta?",
        options: ["Dân ca Nam Bộ", "Dân ca Quan họ Bắc Ninh", "Dân ca Hát Xoan Phú Thọ", "Dân ca Tây Bắc"],
        correct: 0,
        explanation: "Bài hát là một làn điệu Lí vô cùng nổi tiếng và đặc sắc của người dân Nam Bộ."
      },
      {
        question: "Tính chất âm nhạc nổi bật của bài 'Lí dĩa bánh bò' là gì?",
        options: [
          "Dí dỏm, vui tươi, hồn nhiên và duyên dáng",
          "Bi thương, sầu thảm",
          "Hùng tráng như xung trận",
          "Lạnh lùng huyền bí"
        ],
        correct: 0,
        explanation: "Bài hát mang nét vui tươi, dí dỏm và chân chất đặc trưng của sông nước miền Tây."
      },
      {
        question: "Từ 'Lí' trong âm nhạc cổ truyền Việt Nam dùng để chỉ điều gì?",
        options: [
          "Những khúc hát dân gian ngắn gọn, mộc mạc bắt nguồn từ đời sống lao động",
          "Tên một loại nhạc cụ gõ",
          "Tên một vị quan thời xưa",
          "Một loại điệu nhảy nước ngoài"
        ],
        correct: 0,
        explanation: "Điệu Lí là thể loại ca khúc dân gian ngắn, dễ thuộc, phản ánh sinh động cuộc sống đời thường."
      },
      {
        question: "Nhạc cụ gõ bằng gỗ có gắn thanh kim loại gõ vào mu thường dùng giữ nhịp trong đờn ca tài tử Nam Bộ là gì?",
        options: ["Song loan", "Trống cơm", "Đàn Đáy", "Thanh la"],
        correct: 0,
        explanation: "Song loan (song lang) là nhạc cụ định âm phách chuẩn mực không thể thiếu trong nghệ thuật Đờn ca tài tử Nam Bộ."
      }
    ]
  },

  {
    id: "bai-8",
    lessonNum: 8,
    topicNum: 4,
    topicName: "Chủ đề 4: Em yêu làn điệu dân ca",
    tag: "Lí thuyết & Thường thức",
    title: "Bài 8: Dấu thăng, Dấu giáng, Bài đọc nhạc số 3 & Giới thiệu Đàn Tranh",
    objectives: [
      "Hiểu rõ khái niệm và công dụng của Dấu thăng (#) làm tăng cao độ lên nửa cung và Dấu giáng (b) làm hạ cao độ xuống nửa cung.",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 3 có chứa dấu hóa.",
      "Tìm hiểu cấu tạo và nét độc đáo của Đàn Tranh (Đàn Thập lục - 16 dây) của Việt Nam.",
      "Yêu mến và trân trọng giá trị văn hóa nhạc cụ truyền thống dân tộc."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-hashtag text-pink-600"></i> Các loại Dấu hóa cơ bản: Dấu thăng và Dấu giáng
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-pink-50/70 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800">
            <strong class="text-pink-800 dark:text-pink-300 block mb-1">1. Dấu thăng (#)</strong>
            <span>Đặt trước nốt nhạc, có tác dụng <strong>nâng cao độ của nốt nhạc lên nửa cung (1/2 cung)</strong>.</span>
          </div>
          <div class="p-3.5 rounded-xl bg-pink-50/70 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800">
            <strong class="text-pink-800 dark:text-pink-300 block mb-1">2. Dấu giáng (b)</strong>
            <span>Đặt trước nốt nhạc, có tác dụng <strong>hạ cao độ của nốt nhạc xuống nửa cung (1/2 cung)</strong>.</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-guitar text-pink-500"></i> Đàn Tranh (Thập lục) - Tiếng đàn thanh thoát
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Đàn Tranh là nhạc cụ dây gảy truyền thống của người Việt. Đàn có thân hộp hình chữ nhật dài uốn cong, truyền thống có <strong>16 dây</strong> (nên gọi là <em>Thập lục</em>, hiện nay có đàn 17, 19, 21 dây). Trên mặt đàn có các con nhạn đỡ dây hình chữ A ngược. Nghệ sĩ đeo móng gảy ở ngón tay phải và dùng tay trái nhấn nhá, rung, luyến tạo âm thanh trong trẻo, róc rách như dòng suối biếc.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-pink-500"></i> Luyện tập Bài đọc nhạc số 3:
        </h5>
        <p class="text-xs">Đọc cao độ có nốt Pha thăng (F#) cao hơn nốt Pha thường 1/2 cung. Kết hợp gõ phách đều đặn giữ nhịp bản nhạc.</p>
      </div>
    `,
    summary: "Dấu thăng (#) làm tăng cao độ 1/2 cung, Dấu giáng (b) làm hạ cao độ 1/2 cung. Đàn Tranh là nhạc cụ gảy dây truyền thống thanh nhã với âm thanh trong trẻo, réo rắt như suối reo.",
    quizzes: [
      {
        question: "Dấu thăng (#) đặt trước một nốt nhạc có tác dụng gì đối với cao độ?",
        options: [
          "Nâng cao độ của nốt nhạc lên nửa cung (1/2 cung)",
          "Hạ cao độ của nốt nhạc xuống nửa cung",
          "Tăng gấp đôi trường độ của nốt",
          "Làm nốt nhạc biến mất không phát ra tiếng"
        ],
        correct: 0,
        explanation: "Dấu thăng nâng cao độ nốt nhạc lên chính xác 1/2 cung."
      },
      {
        question: "Dấu giáng (b) đặt trước một nốt nhạc có chức năng gì?",
        options: [
          "Hạ cao độ của nốt nhạc xuống nửa cung (1/2 cung)",
          "Nâng cao độ của nốt nhạc lên 1 cung",
          "Kéo dài thời gian ngân nốt",
          "Chuyển nốt sang khóa Pha"
        ],
        correct: 0,
        explanation: "Dấu giáng có tác dụng hạ cao độ nốt nhạc xuống nửa cung."
      },
      {
        question: "Đàn Tranh truyền thống của Việt Nam còn có tên gọi khác là gì dựa theo số dây nguyên bản?",
        options: ["Đàn Thập lục (16 dây)", "Độc huyền cầm", "Đàn Tam", "Đàn Tứ"],
        correct: 0,
        explanation: "'Thập lục' nghĩa là 16 dây, phản ánh số lượng dây đàn Tranh cổ truyền thống."
      },
      {
        question: "Bộ phận đỡ dây trên mặt đàn Tranh có thể di chuyển để so dây được gọi là gì?",
        options: ["Con nhạn (ngựa đàn)", "Khóa đàn", "Cần đàn", "Cầu đàn"],
        correct: 0,
        explanation: "Các con nhạn hình chữ V ngược (chữ A) đỡ từng sợi dây đàn trên mặt bảng âm giúp chỉnh độ cao thấp của dây."
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
    title: "Bài 9: Học hát bài 'Mùa xuân em tới trường' & Không khí Tết rộn ràng",
    objectives: [
      "Hát đúng giai điệu và lời ca bài 'Mùa xuân em tới trường'; thể hiện sắc thái rộn rã, tưng bừng.",
      "Cảm nhận vẻ đẹp của đất trời vào xuân, hoa đào hoa mai khoe sắc và niềm vui ngày Tết sum họp.",
      "Hát kết hợp gõ đệm theo tiết tấu nhanh, hoạt bát của ngày xuân.",
      "Gửi gắm ước mơ và quyết tâm phấn đấu học tập tiến bộ trong năm mới."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-seedling text-pink-600"></i> Hát mừng mùa xuân quê hương
          </h4>
          <p class="text-xs sm:text-sm">
            Mùa xuân là mùa của trăm hoa đua nở, mùa của chồi non lộc biếc và không khí Tết cổ truyền ấm áp. Ca khúc mừng xuân với tiết tấu rộn ràng, ca từ trong trẻo mang đến cho các em học sinh niềm hân hoan rạng rỡ khi cắp sách tới trường trong tiết xuân ấm áp.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-microphone-lines text-pink-500"></i> Phong cách biểu diễn ca khúc ngày xuân
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Nụ cười rạng rỡ, ánh mắt long lanh thể hiện niềm vui nhận phong bao lì xì và thêm một tuổi mới.</li>
            <li>Hát dứt khoát ở các nốt móc kép, không kéo lê âm thanh.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-drum text-pink-500"></i> Gõ đệm tiết tấu mùa xuân:
        </h5>
        <p class="text-xs">Sử dụng trống nhỏ và thanh phách gõ mô phỏng tiếng pháo xuân: Cắc - tùng - tùng - cắc - tùng. Cả lớp hát hòa giọng rộn rã.</p>
      </div>
    `,
    summary: "Ca khúc mùa xuân mang giai điệu rộn ràng, tươi sáng, khắc họa bức tranh ngày Tết quê hương sum vầy và niềm vui của tuổi thơ khi bước sang năm mới.",
    quizzes: [
      {
        question: "Không khí chủ đạo của các bài hát viết về mùa xuân tuổi thơ là gì?",
        options: [
          "Rộn ràng, tươi vui, ngập tràn sức sống và niềm hy vọng",
          "U sầu, ảm đạm như đêm đông",
          "Căng thẳng, hồi hộp sợ hãi",
          "Nặng nề, bi thảm"
        ],
        correct: 0,
        explanation: "Mùa xuân luôn gắn liền với niềm vui, sức sống mới và tinh thần lạc quan phơi phới."
      },
      {
        question: "Hai loài hoa đặc trưng biểu tượng cho mùa xuân của hai miền Nam - Bắc nước ta là gì?",
        options: [
          "Hoa đào (miền Bắc) và hoa mai (miền Nam)",
          "Hoa phượng và hoa cúc vàng",
          "Hoa sen và hoa súng",
          "Hoa hồng và hoa cẩm chướng"
        ],
        correct: 0,
        explanation: "Hoa đào sắc hồng của phương Bắc và hoa mai sắc vàng của phương Nam là biểu tượng Tết cổ truyền Việt Nam."
      },
      {
        question: "Khi thể hiện một bài hát mừng xuân có nhịp điệu nhanh, ca sĩ cần chú ý điều gì nhất?",
        options: [
          "Phát âm rõ ràng, nhả chữ dứt khoát, giữ đúng nhịp phách",
          "Hát kéo rê thật chậm để bài hát dài ra",
          "Hát thật to gào thét mất nhịp",
          "Vừa hát vừa nhắm mắt ngủ gật"
        ],
        correct: 0,
        explanation: "Phát âm rõ chữ và dứt khoát giúp bài hát giữ được sự thanh thoát, rộn ràng của không khí xuân."
      },
      {
        question: "Ý nghĩa của phong tục chúc Tết và mừng tuổi (lì xì) đầu năm là gì?",
        options: [
          "Chúc cho ông bà cha mẹ sống lâu, con cháu chăm ngoan, may mắn và hạnh phúc",
          "Để khoe khoang tiền bạc",
          "Để so bì ai được nhiều tiền hơn",
          "Chỉ là một trò chơi giải trí vô nghĩa"
        ],
        correct: 0,
        explanation: "Phong bao lì xì đỏ thắm mang ý nghĩa cầu chúc bình an, may mắn và những điều tốt lành nhất cho năm mới."
      }
    ]
  },

  {
    id: "bai-10",
    lessonNum: 10,
    topicNum: 5,
    topicName: "Chủ đề 5: Mừng xuân mới",
    tag: "Lí thuyết & Thường thức",
    title: "Bài 10: Hình nốt móc kép, Bài đọc nhạc số 4 & Kiệt tác Rondo alla Turca",
    objectives: [
      "Nhận biết hình dáng và hiểu giá trị thời gian của Nốt móc kép (bằng 1/4 nốt đen, 4 nốt móc kép = 1 phách).",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 4 có chứa chùm 4 nốt móc kép.",
      "Tìm hiểu nhà soạn nhạc thiên tài Wolfgang Amadeus Mozart và kiệt tác 'Hành khúc Thổ Nhĩ Kỳ' (Rondo alla Turca).",
      "Cảm thụ giai điệu vui tươi, tinh tế và sự biến tấu tài tình của âm nhạc cổ điển phương Tây."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-bolt text-pink-600"></i> Hình nốt Móc kép trong âm nhạc
        </h4>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800 text-xs sm:text-sm">
          <ul class="space-y-1.5 list-disc list-inside">
            <li><strong>Hình dáng:</strong> Có nốt đặc và đuôi có <strong>2 móc</strong> (hoặc 2 vạch ngang nối liền khi đứng thành nhóm).</li>
            <li><strong>Trường độ:</strong> Có giá trị bằng một nửa nốt móc đơn (1/4 nốt đen).</li>
            <li><strong>Công thức:</strong> <strong>4 nốt móc kép = 1 nốt đen (1 phách)</strong>. Khi đọc tiết tấu: 'Đơn-kép-kép' hoặc 'Tách-tách-tách-tách' trong 1 nhịp vỗ tay.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-crown text-pink-500"></i> W.A. Mozart & 'Hành khúc Thổ Nhĩ Kỳ'
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Nhà soạn nhạc người Áo <strong>Wolfgang Amadeus Mozart</strong> (1756 - 1791) là thần đồng âm nhạc bậc nhất lịch sử. Bản nhạc <em>Rondo alla Turca</em> (chương 3 trong bản Sonate số 11 cho Piano) có tiết tấu nốt móc kép tí tách vui tai, mô phỏng tiếng trống hành quân rộn rã của đội kèn đồng Thổ Nhĩ Kỳ xưa.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-pink-500"></i> Luyện tập Bài đọc nhạc số 4:
        </h5>
        <p class="text-xs">Gõ đều tay theo phách: vỗ tay 1 cái đồng thời đọc gọn 4 nốt móc kép 'Đô-Rê-Mi-Pha' lướt đều và nhẹ nhàng.</p>
      </div>
    `,
    summary: "Nốt móc kép có 2 móc, bằng 1/4 nốt đen (4 nốt móc kép = 1 phách). Bản nhạc Rondo alla Turca của Mozart là kiệt tác piano lừng danh với tiết tấu móc kép rộn ràng.",
    quizzes: [
      {
        question: "Cần bao nhiêu nốt móc kép để có độ dài trường độ tương đương với 1 nốt đen?",
        options: ["4 nốt móc kép", "2 nốt móc kép", "8 nốt móc kép", "16 nốt móc kép"],
        correct: 0,
        explanation: "1 nốt đen = 2 nốt móc đơn = 4 nốt móc kép."
      },
      {
        question: "Dấu hiệu nhận biết đuôi của nốt móc kép trên bản nhạc là gì?",
        options: ["Có 2 móc ở đuôi nốt", "Có 1 móc ở đuôi nốt", "Có 3 móc ở đuôi nốt", "Không có đuôi"],
        correct: 0,
        explanation: "Nốt móc kép có đặc điểm là có 2 nét móc ở đuôi (hoặc 2 vạch kẻ ngang liên kết)."
      },
      {
        question: "Tác phẩm 'Hành khúc Thổ Nhĩ Kỳ' (Rondo alla Turca) do nhà soạn nhạc vĩ đại nào sáng tác?",
        options: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "J.S. Bach", "Frédéric Chopin"],
        correct: 0,
        explanation: "'Rondo alla Turca' là chương 3 bất hủ trong bản Sonate Piano số 11 cung La trưởng của thiên tài Mozart."
      },
      {
        question: "Thần đồng âm nhạc W.A. Mozart sinh ra tại quốc gia nào ở châu Âu?",
        options: ["Nước Áo", "Nước Nga", "Nước Anh", "Nước Tây Ban Nha"],
        correct: 0,
        explanation: "Mozart sinh ra tại thành phố Salzburg, nước Áo."
      }
    ]
  },

  // ================= CHỦ ĐỀ 6: ĐẤT NƯỚC MẾN YÊU =================
  {
    id: "bai-11",
    lessonNum: 11,
    topicNum: 6,
    topicName: "Chủ đề 6: Đất nước mến yêu",
    tag: "Học hát",
    title: "Bài 11: Học hát bài 'Bài ca đất nước Bác Hồ' / 'Em yêu Tổ quốc Việt Nam'",
    objectives: [
      "Hát đúng giai điệu, lời ca bài hát ca ngợi vẻ đẹp non sông gấm vóc và sự đổi mới của Tổ quốc Việt Nam.",
      "Biết thể hiện niềm tự hào dân tộc, tình yêu quê hương đất nước qua từng ca từ hào sảng.",
      "Hát kết hợp gõ đệm theo nhịp hành khúc dứt khoát, bước chân trang nghiêm.",
      "Nâng cao ý thức học tập, rèn luyện để xây dựng đất nước ngày càng giàu đẹp, phồn vinh."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-flag text-pink-600"></i> Ca ngợi Tổ quốc Việt Nam anh hùng
          </h4>
          <p class="text-xs sm:text-sm">
            Tổ quốc Việt Nam ta trải dài từ mũi Cà Mau đến địa đầu Móng Cái với rừng vàng biển bạc, ngàn năm văn hiến. Các ca khúc ngợi ca đất nước mang âm hưởng hào hùng, ca từ tha thiết dâng trào niềm kiêu hãnh của thế hệ măng non được sống dưới bầu trời hòa bình, độc lập.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-mountain-sun text-pink-500"></i> Sắc thái biểu diễn ca khúc
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Tư thế đứng thẳng hiên ngang, khuôn mặt tự hào rạng rỡ.</li>
            <li>Giọng hát vang rền, rõ lời, những nốt ngân cao thể hiện tầm vóc vươn mình của đất nước.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-person-marching text-pink-500"></i> Diễu hành theo nhịp:
        </h5>
        <p class="text-xs">Học sinh chia hàng diễu hành dậm chân tại chỗ theo phách mạnh nhịp 2/4 vừa hát vang điệp khúc ca ngợi Tổ quốc.</p>
      </div>
    `,
    summary: "Ca khúc ngợi ca quê hương đất nước với sắc thái hào hùng, trang trọng khơi dậy trong lòng học sinh lớp 5 niềm tự hào dân tộc và tình yêu sâu sắc với non sông gấm vóc.",
    quizzes: [
      {
        question: "Sắc thái tình cảm chủ đạo khi thể hiện các ca khúc ngợi ca Tổ quốc là gì?",
        options: [
          "Hào hùng, trang trọng, tự hào và tràn đầy nhiệt huyết",
          "Yếu ớt, thì thầm",
          "Buồn bã, đau khổ",
          "Hài hước, trêu chọc"
        ],
        correct: 0,
        explanation: "Các ca khúc viết về Tổ quốc đòi hỏi tinh thần hào hùng, trang nghiêm và sự kiêu hãnh dân tộc."
      },
      {
        question: "Dải đất hình chữ S của đất nước Việt Nam thân yêu trải dài từ đâu đến đâu?",
        options: [
          "Từ địa đầu Móng Cái đến mũi Cà Mau",
          "Từ Hà Nội đến Thành phố Hồ Chí Minh",
          "Từ Huế đến Đà Nẵng",
          "Từ sông Hồng đến sông Tiền"
        ],
        correct: 0,
        explanation: "Lãnh thổ đất liền Việt Nam trải dài từ điểm cực Bắc Lũng Cú / Móng Cái tới cực Nam Mũi Cà Mau."
      },
      {
        question: "Học sinh lớp 5 có thể đóng góp xây dựng đất nước bằng những việc làm thiết thực nào?",
        options: [
          "Chăm ngoan, học giỏi, giữ gìn vệ sinh môi trường, yêu thương bạn bè",
          "Chơi game suốt ngày đêm",
          "Vứt rác bừa bãi ra đường",
          "Lười biếng không làm bài tập"
        ],
        correct: 0,
        explanation: "Tuổi nhỏ làm việc nhỏ, học tập tốt và rèn luyện đạo đức là cách thiết thực nhất để góp phần xây dựng đất nước."
      },
      {
        question: "Nhịp điệu hành khúc thường có đặc điểm tiết tấu như thế nào?",
        options: [
          "Dứt khoát, khỏe khoắn, đều đặn theo nhịp bước chân",
          "Chậm rãi đung đưa như ru ngủ",
          "Tự do không theo phách nhịp nào",
          "Dịu dàng như sóng vỗ đêm trăng"
        ],
        correct: 0,
        explanation: "Hành khúc được viết để đoàn người diễu binh, hành tiến nên có nhịp điệu rất dứt khoát, đều bước và hào sảng."
      }
    ]
  },

  {
    id: "bai-12",
    lessonNum: 12,
    topicNum: 6,
    topicName: "Chủ đề 6: Đất nước mến yêu",
    tag: "Lí thuyết & Thường thức",
    title: "Bài 12: Dấu lặng đơn, Bài đọc nhạc số 5 & Nhạc sĩ Đỗ Nhuận",
    objectives: [
      "Nhận biết hình dáng dấu lặng đơn và hiểu giá trị thời gian nghỉ (bằng nửa phách, tương đương nốt móc đơn).",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 5 có chứa dấu lặng đơn.",
      "Tìm hiểu tiểu sử và sự nghiệp của Nhạc sĩ Đỗ Nhuận - Tổng Thư ký đầu tiên của Hội Nhạc sĩ Việt Nam.",
      "Cảm thụ trích đoạn các tác phẩm nổi tiếng: 'Hành quân xa', 'Giải phóng Điện Biên'."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-pause text-pink-600"></i> Dấu lặng đơn trong âm nhạc
        </h4>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800 text-xs sm:text-sm">
          <ul class="space-y-1.5 list-disc list-inside">
            <li><strong>Hình dáng:</strong> Có hình như một con số 7 nhỏ có móc chấm tròn ở đầu.</li>
            <li><strong>Ý nghĩa:</strong> Biểu thị thời gian tạm ngừng nghỉ phát âm thanh bằng <strong>nửa phách (1/2 phách)</strong>, tương đương trường độ nốt móc đơn.</li>
            <li><strong>Kỹ thuật thể hiện:</strong> Ngắt tiếng dứt khoát, nhấc tay nhẹ nhàng khỏi phím đàn hoặc ngắt hơi khi hát.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-award text-pink-500"></i> Nhạc sĩ Đỗ Nhuận (1922 - 1991)
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Nhạc sĩ Đỗ Nhuận quê ở Hải Dương, là một trong những cây đại thụ của nền âm nhạc cách mạng Việt Nam. Ông là tác giả của các kiệt tác: <em>Du kích sông Thao, Hành quân xa, Chiến thắng Điện Biên, Việt Nam quê hương tôi...</em> và là tác giả vở nhạc kịch (Opera) đầu tiên của Việt Nam - <em>Cô Sao</em>. Ông được truy tặng Giải thưởng Hồ Chí Minh về Văn học - Nghệ thuật đợt 1 (1996).
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-pink-500"></i> Thực hành Bài đọc nhạc số 5:
        </h5>
        <p class="text-xs">Luyện đọc đúng nhịp: khi gặp dấu lặng đơn, ngắt âm thanh dứt khoát đúng nửa phách. Kết hợp gõ phách nhịp nhàng.</p>
      </div>
    `,
    summary: "Dấu lặng đơn biểu thị thời gian nghỉ bằng 1/2 phách. Nhạc sĩ Đỗ Nhuận là nhạc sĩ chiến sĩ kiệt xuất, tác giả bản hùng ca 'Chiến thắng Điện Biên' và vở nhạc kịch đầu tiên 'Cô Sao'.",
    quizzes: [
      {
        question: "Dấu lặng đơn có giá trị thời gian ngừng nghỉ bằng độ dài của nốt nhạc nào?",
        options: ["Nốt móc đơn (1/2 phách)", "Nốt đen (1 phách)", "Nốt trắng (2 phách)", "Nốt tròn (4 phách)"],
        correct: 0,
        explanation: "Dấu lặng đơn tương đương chính xác với trường độ của một nốt móc đơn (1/2 phách)."
      },
      {
        question: "Vở nhạc kịch (Opera) đầu tiên của nền âm nhạc cách mạng Việt Nam do nhạc sĩ Đỗ Nhuận sáng tác có tên là gì?",
        options: ["Cô Sao", "Người tạc tượng", "Bạch Đằng Giang", "Trương Chi"],
        correct: 0,
        explanation: "Vở Opera 'Cô Sao' của nhạc sĩ Đỗ Nhuận công diễn năm 1965 là vở nhạc kịch đầu tiên của Việt Nam."
      },
      {
        question: "Ca khúc hào hùng nào của nhạc sĩ Đỗ Nhuận vang lên rộn rã ăn mừng chiến thắng lừng lẫy năm châu chấn động địa cầu năm 1954?",
        options: ["Chiến thắng Điện Biên", "Tiến quân ca", "Lên đàng", "Hành quân xa"],
        correct: 0,
        explanation: "Bài hát 'Chiến thắng Điện Biên' (Giải phóng Điện Biên) được ông viết ngay trên đường hành quân trong chiến dịch Điện Biên Phủ."
      },
      {
        question: "Nhạc sĩ Đỗ Nhuận từng giữ cương vị trọng trách đầu tiên nào trong giới âm nhạc Việt Nam?",
        options: [
          "Tổng Thư ký đầu tiên của Hội Nhạc sĩ Việt Nam (1957 - 1983)",
          "Hiệu trưởng Nhạc viện Hà Nội",
          "Bộ trưởng Bộ Văn hóa",
          "Giám đốc Nhà hát Lớn Hà Nội"
        ],
        correct: 0,
        explanation: "Nhạc sĩ Đỗ Nhuận là vị Tổng Thư ký đầu tiên của Hội Nhạc sĩ Việt Nam từ khi thành lập năm 1957."
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
    title: "Bài 13: Học hát bài 'Bàn tay mẹ' (Bùi Đình Thảo - Tạ Hữu Yên)",
    objectives: [
      "Hát đúng giai điệu, lời ca của bài hát 'Bàn tay mẹ' (nhạc: Bùi Đình Thảo, thơ: Tạ Hữu Yên).",
      "Cảm nhận sự hy sinh thầm lặng, tình thương yêu bao la của mẹ chăm sóc từng bữa cơm, giấc ngủ cho con.",
      "Hát với sắc thái êm dịu, tình cảm như lời ru tha thiết ngọt ngào.",
      "Biết thương yêu, đỡ đần việc nhà và chăm sóc mẹ hiền."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-hand-holding-heart text-pink-600"></i> Tình mẫu tử thiêng liêng trong 'Bàn tay mẹ'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát do nhạc sĩ <strong>Bùi Đình Thảo</strong> phổ thơ của nhà thơ <strong>Tạ Hữu Yên</strong>. Với những câu hát giản dị: <em>'Bàn tay mẹ vì chúng con, từ tay mẹ con lớn khôn...'</em>, bài hát đã khắc sâu vào tâm khảm bao thế hệ thiếu nhi Việt Nam hình ảnh người mẹ hiền tần tảo sớm hôm.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-microphone text-pink-500"></i> Hướng dẫn kỹ thuật hát bài hát
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Hát nhẹ nhàng, tình cảm ở phần đầu miêu tả đôi bàn tay mẹ nấu cơm, quạt mát trưa hè.</li>
            <li>Đoạn kết ngân dài trìu mến thể hiện lòng biết ơn vô hạn của người con.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-heart text-pink-500"></i> Bày tỏ yêu thương:
        </h5>
        <p class="text-xs">Học sinh tập hát đơn ca kết hợp nhóm bè phụ họa. Về nhà ôm mẹ và hát tặng mẹ bài hát này để bày tỏ lòng hiếu thảo.</p>
      </div>
    `,
    summary: "Ca khúc 'Bàn tay mẹ' của Bùi Đình Thảo - Tạ Hữu Yên mang âm hưởng hát ru ngọt ngào, ca ngợi công ơn trời biển của người mẹ hiền chăm sóc đàn con lớn khôn từng ngày.",
    quizzes: [
      {
        question: "Ai là tác giả sáng tác phần nhạc cho ca khúc bất hủ 'Bàn tay mẹ'?",
        options: ["Nhạc sĩ Bùi Đình Thảo", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phạm Tuyên", "Nhạc sĩ Hoàng Vân"],
        correct: 0,
        explanation: "Nhạc sĩ Bùi Đình Thảo đã phổ nhạc cho bài thơ 'Bàn tay mẹ' của nhà thơ Tạ Hữu Yên."
      },
      {
        question: "Hình ảnh đôi bàn tay mẹ trong bài hát được miêu tả gắn liền với những công việc gì?",
        options: [
          "Nấu cơm cho con ăn, bế con ngủ, quạt mát trưa hè, ủ ấm đêm đông",
          "Lái máy bay trên bầu trời",
          "Chèo thuyền đánh cá ngoài khơi xa",
          "Lái xe buýt đưa đón học sinh"
        ],
        correct: 0,
        explanation: "Đôi bàn tay mẹ tảo tần nấu cơm, quạt mát, ấp ủ con trong từng giấc ngủ êm đềm."
      },
      {
        question: "Giai điệu của ca khúc 'Bàn tay mẹ' mang âm hưởng gần gũi nhất với thể loại âm nhạc nào?",
        options: ["Điệu hát ru con ngọt ngào", "Hành khúc hùng tráng", "Nhạc rock sôi động", "Nhạc nhảy Disco"],
        correct: 0,
        explanation: "Bài hát có giai điệu mượt mà, sâu lắng như những câu hát ru của mẹ bên cánh võng."
      },
      {
        question: "Cách thể hiện tình cảm hiếu thảo thiết thực nhất của học sinh đối với mẹ là gì?",
        options: [
          "Chăm chỉ học giỏi, vâng lời mẹ, tự giác gấp quần áo và giúp mẹ việc nhà",
          "Đòi mẹ mua điện thoại đắt tiền",
          "Lười biếng nằm xem ti vi để mẹ phục vụ",
          "Cãi lời khi mẹ nhắc nhở"
        ],
        correct: 0,
        explanation: "Sự chăm ngoan, hiếu thảo và biết đỡ đần mẹ là món quà quý giá nhất đối với cha mẹ."
      }
    ]
  },

  {
    id: "bai-14",
    lessonNum: 14,
    topicNum: 7,
    topicName: "Chủ đề 7: Gia đình yêu thương",
    tag: "Lí thuyết & Đọc nhạc",
    title: "Bài 14: Dấu nhắc lại, Khung thay đổi & Thực hành Nhạc cụ hòa tấu",
    objectives: [
      "Nhận biết hình dáng và hiểu cách thực hiện của Dấu nhắc lại (Repeat sign) và Khung thay đổi (Khung 1, Khung 2) trong bản nhạc.",
      "Biết cách bỏ qua khung 1 và chuyển thẳng sang khung 2 ở lần hát/đọc thứ hai.",
      "Ứng dụng biểu diễn bài đọc nhạc hoặc giai điệu bài hát có dấu nhắc lại.",
      "Hòa tấu nhạc cụ Recorder / Melodica kết hợp thanh phách, tambourine."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-arrows-rotate text-pink-600"></i> Dấu nhắc lại và Khung thay đổi
        </h4>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-pink-50/70 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800">
            <strong class="text-pink-800 dark:text-pink-300 block mb-1">1. Dấu nhắc lại</strong>
            <span>Gồm 2 vạch đứng kèm hai dấu chấm nhỏ. Dùng để báo hiệu <strong>lặp lại đoạn nhạc nằm giữa hai dấu nhắc lại</strong> (hoặc lặp lại từ đầu bài).</span>
          </div>

          <div class="p-3.5 rounded-xl bg-pink-50/70 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800">
            <strong class="text-pink-800 dark:text-pink-300 block mb-1">2. Khung thay đổi (Khung 1, 2)</strong>
            <span>Khi nhắc lại đoạn nhạc, ở lần 1 hát vào <strong>Khung 1</strong>; đến lần 2, người biểu diễn <strong>bỏ qua khung 1 và chuyển thẳng sang hát vào Khung 2</strong>.</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-guitar text-pink-500"></i> Thực hành hòa tấu nhạc cụ học đường
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Học sinh phối hợp giữa nhạc cụ giai điệu (Recorder thổi các nốt Đô-Rê-Mi-Son-La hoặc Melodica) và nhạc cụ tiết tấu (Thanh phách gõ phách 1, Tambourine lắc phách 2) để tạo nên dàn hòa tấu học đường rộn rã.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-play text-pink-500"></i> Luyện tập quy tắc Khung thay đổi:
        </h5>
        <p class="text-xs">Lần 1: Hát đoạn A -> vào Khung 1 -> quay lại đầu đoạn A. Lần 2: Hát đoạn A -> BỎ QUA KHUNG 1 -> nhảy sang Khung 2 để kết thúc bài hát.</p>
      </div>
    `,
    summary: "Dấu nhắc lại dùng để lặp lại một đoạn nhạc. Khi có hai khung thay đổi, ở lần nhắc lại thứ hai ta bỏ qua khung 1 và nhảy thẳng sang hát ô nhịp ở khung 2.",
    quizzes: [
      {
        question: "Dấu nhắc lại trong bản nhạc dùng để làm gì?",
        options: [
          "Báo hiệu lặp lại đoạn nhạc vừa chơi thêm một lần nữa",
          "Báo hiệu kết thúc hoàn toàn bản nhạc",
          "Yêu cầu chơi nhanh gấp đôi",
          "Yêu cầu đổi sang nhạc cụ khác"
        ],
        correct: 0,
        explanation: "Dấu nhắc lại hướng dẫn người biểu diễn thực hiện lại đoạn nhạc nằm trong phạm vi dấu."
      },
      {
        question: "Khi một bài hát có dấu nhắc lại và 2 khung thay đổi (khung 1, khung 2), ở lần hát thứ hai người biểu diễn thực hiện ra sao?",
        options: [
          "Bỏ qua ô nhịp khung 1 và nhảy thẳng sang hát ô nhịp ở khung 2",
          "Hát lại khung 1 rồi mới hát khung 2",
          "Dừng bài hát ngay trước khung 1",
          "Hát khung 2 trước rồi quay lại khung 1"
        ],
        correct: 0,
        explanation: "Quy tắc: Ở lần 2, người chơi bỏ qua khung 1 và chơi thẳng vào khung 2."
      },
      {
        question: "Dấu hiệu nhận biết của Dấu nhắc lại trên khuông nhạc là gì?",
        options: [
          "Hai vạch nhịp đứng kèm hai dấu chấm tròn nhỏ",
          "Một hình tam giác màu đen",
          "Một chữ cái in hoa",
          "Một hình ngôi sao 5 cánh"
        ],
        correct: 0,
        explanation: "Dấu nhắc lại gồm hai vạch nhịp thẳng đứng kèm hai dấu chấm đặt ở khe 2 và khe 3."
      },
      {
        question: "Lợi ích của việc sử dụng Dấu nhắc lại và Khung thay đổi trong soạn nhạc là gì?",
        options: [
          "Giúp bản nhạc ngắn gọn, tiết kiệm diện tích trang in mà vẫn diễn đạt đủ lời ca lặp lại",
          "Làm cho người xem khó đọc hơn",
          "Bắt buộc người hát phải học thuộc lòng",
          "Để trang trí cho bản nhạc đẹp mắt"
        ],
        correct: 0,
        explanation: "Dấu nhắc lại giúp người chép nhạc không phải viết lại cùng một đoạn giai điệu nhiều lần."
      }
    ]
  },

  // ================= CHỦ ĐỀ 8: TẠM BIỆT MÁI TRƯỜNG TIỂU HỌC =================
  {
    id: "bai-15",
    lessonNum: 15,
    topicNum: 8,
    topicName: "Chủ đề 8: Tạm biệt mái trường tiểu học",
    tag: "Học hát",
    title: "Bài 15: Học hát bài 'Tạm biệt mái trường tiểu học' / 'Mùa hoa phượng nở'",
    objectives: [
      "Hát đúng giai điệu và ca từ bài hát tạm biệt mái trường Tiểu học thân yêu sau 5 năm gắn bó.",
      "Thể hiện sắc thái bồi hồi, xúc động, lưu luyến thầy cô bạn bè xen lẫn niềm tự hào bước lên lớp 6.",
      "Hát kết hợp vận động vẫy tay nhịp nhàng theo giai điệu.",
      "Ghi nhớ những kỉ niệm đẹp đẽ của tuổi thơ dưới mái trường tiểu học dấu yêu."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap text-pink-600"></i> Phút chia tay tuổi thơ tiểu học
          </h4>
          <p class="text-xs sm:text-sm">
            Hoa phượng vĩ nở đỏ rực góc sân trường báo hiệu mùa hè chia tay của học sinh lớp 5. Tạm biệt thầy cô, tạm biệt bàn ghế nhỏ thân quen, tạm biệt các em lớp dưới để tung cánh bay bước vào ngôi trường Trung học cơ sở mới. Giai điệu bài hát lắng đọng, tha thiết, khắc sâu tình thầy trò và tình bạn trong sáng.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-microphone-lines text-pink-500"></i> Cảm xúc và sắc thái bài hát
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Hát với giọng ấm áp, tình cảm lưu luyến ở đoạn 1.</li>
            <li>Đoạn 2 nâng cao âm lượng tươi sáng, dõng dạc niềm tin bước vào bậc học mới.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-users text-pink-500"></i> Biểu diễn lễ bế giảng ra trường:
        </h5>
        <p class="text-xs">Cả khối lớp 5 cùng đứng trên sân khấu khoác vai nhau hát vang ca khúc tạm biệt, tay cầm hoa vẫy chào thầy cô và mái trường thân yêu.</p>
      </div>
    `,
    summary: "Ca khúc tạm biệt mái trường tiểu học chan chứa cảm xúc lưu luyến bồi hồi, khép lại hành trình 5 năm tiểu học và thắp sáng niềm tin bước vào cánh cổng trường THCS.",
    quizzes: [
      {
        question: "Cảm xúc chủ đạo của học sinh lớp 5 khi hát bài tạm biệt mái trường tiểu học là gì?",
        options: [
          "Bồi hồi, lưu luyến, biết ơn thầy cô và tự hào bước vào cấp học mới",
          "Tức giận, khó chịu",
          "Vô cảm, thờ ơ",
          "Chán nản không muốn học tiếp"
        ],
        correct: 0,
        explanation: "Phút chia tay sau 5 năm gắn bó mang lại cảm xúc vừa xúc động, lưu luyến vừa rạng rỡ niềm tin tương lai."
      },
      {
        question: "Loài hoa nào gắn liền với mùa thi và lễ bế giảng chia tay của tuổi học trò?",
        options: ["Hoa phượng vĩ đỏ thắm", "Hoa đào phai", "Hoa mai vàng", "Hoa cúc trắng"],
        correct: 0,
        explanation: "Hoa phượng vĩ nở rực sắc đỏ vào mùa hè là biểu tượng thân thương của mùa chia tay tuổi học trò."
      },
      {
        question: "Sau khi tốt nghiệp lớp 5, các em học sinh sẽ bước lên học bậc học nào tiếp theo?",
        options: [
          "Bậc Trung học cơ sở (THCS - Lớp 6)",
          "Bậc Trung học phổ thông (THPT)",
          "Bậc Đại học",
          "Học lại mầm non"
        ],
        correct: 0,
        explanation: "Hoàn thành chương trình Tiểu học (Lớp 1-5), học sinh sẽ chuyển tiếp lên bậc THCS (Lớp 6-9)."
      },
      {
        question: "Hành trang quý báu nhất mà học sinh nhận được sau 5 năm học tại mái trường tiểu học là gì?",
        options: [
          "Tri thức nền tảng, phẩm chất đạo đức tốt đẹp và tình cảm thầy trò bạn bè sâu sắc",
          "Nhiều trò chơi điện tử",
          "Quần áo giày dép đẹp",
          "Điểm số trên giấy"
        ],
        correct: 0,
        explanation: "Tri thức vững vàng và nhân cách tốt đẹp chính là bệ phóng giúp các em tự tin bước vào cấp 2."
      }
    ]
  },

  {
    id: "bai-16",
    lessonNum: 16,
    topicNum: 8,
    topicName: "Chủ đề 8: Tạm biệt mái trường tiểu học",
    tag: "Tổng kết & Dự án âm nhạc",
    title: "Bài 16: Ôn tập tổng kết 5 năm Tiểu học & Dự án 'Ngày hội âm nhạc Tuổi thần tiên'",
    objectives: [
      "Hệ thống hóa toàn bộ kiến thức nhạc lí cốt lõi đã học trong 5 năm Tiểu học: Khuông nhạc, Khóa Son, 7 nốt nhạc, Nhịp 2/4 và Nhịp 3/4, Dấu thăng, Dấu giáng, Dấu lặng đơn, Dấu nhắc lại, Dấu chấm dôi.",
      "Ôn tập các bài đọc nhạc từ số 1 đến số 5.",
      "Ghi nhớ các danh nhân và nhạc cụ: Nhạc sĩ Phong Nhã, Lưu Hữu Phước, Đỗ Nhuận, Mozart, Beethoven, Đàn Piano, Đàn Tranh, Đàn Bầu.",
      "Tổ chức thành công buổi biểu diễn báo cáo dự án âm nhạc tốt nghiệp bậc Tiểu học."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-list-check text-pink-600"></i> Bảng tổng kết kiến thức cốt lõi Âm nhạc Lớp 5
        </h4>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <strong class="text-pink-600 dark:text-pink-400 block mb-1">1. Nhạc lí trọng tâm Lớp 5</strong>
            <ul class="space-y-1 list-disc list-inside text-xs">
              <li><strong>Số chỉ nhịp 3/4:</strong> Có 3 phách nốt đen trong một ô nhịp (Mạnh - nhẹ - nhẹ).</li>
              <li><strong>Dấu thăng (#):</strong> Tăng cao độ lên 1/2 cung.</li>
              <li><strong>Dấu giáng (b):</strong> Hạ cao độ xuống 1/2 cung.</li>
              <li><strong>Nốt móc kép:</strong> Bằng 1/4 nốt đen (4 móc kép = 1 phách).</li>
              <li><strong>Dấu lặng đơn:</strong> Nghỉ 1/2 phách tương đương nốt móc đơn.</li>
              <li><strong>Dấu nhắc lại & Khung thay đổi:</strong> Nhắc lại đoạn nhạc, lần 2 bỏ khung 1 sang khung 2.</li>
            </ul>
          </div>

          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <strong class="text-pink-600 dark:text-pink-400 block mb-1">2. Tác giả & Nhạc cụ tiêu biểu</strong>
            <ul class="space-y-1 list-disc list-inside text-xs">
              <li><strong>Phong Nhã:</strong> Tác giả bài Đội ca <em>Cùng nhau ta đi lên</em>.</li>
              <li><strong>Đỗ Nhuận:</strong> Tác giả <em>Chiến thắng Điện Biên</em> và Opera <em>Cô Sao</em>.</li>
              <li><strong>Mozart:</strong> Thần đồng âm nhạc Áo với <em>Rondo alla Turca</em>.</li>
              <li><strong>Nhạc cụ:</strong> Đàn Piano (Vua nhạc cụ), Đàn Tranh (Thập lục 16 dây).</li>
            </ul>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-gradient-to-r from-pink-600 to-rose-700 text-white rounded-2xl shadow-md mt-4">
          <h5 class="font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-trophy"></i> Chúc mừng các em hoàn thành xuất sắc bậc Tiểu học!
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed text-white/90">
            Qua 5 năm học âm nhạc tại bậc Tiểu học, các em đã nuôi dưỡng tâm hồn trong sáng, tình yêu thiên nhiên, đất nước và con người. Hãy tự tin mang theo hành trang âm nhạc này bước vào cánh cổng trường Trung học cơ sở nhé!
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-award text-pink-500"></i> Bài kiểm tra toàn khóa học:
        </h5>
        <p class="text-xs">Hãy nhấn vào nút 'Kiểm tra toàn khóa (10 câu)' ở đầu trang để làm bài trắc nghiệm tổng hợp bao quát 8 chủ đề và nhận đánh giá xếp loại.</p>
      </div>
    `,
    summary: "Bài học tổng kết toàn bộ 8 chủ đề chương trình Âm nhạc lớp 5 theo định hướng phát triển phẩm chất và năng lực của GDPT 2018 Kết nối tri thức với cuộc sống.",
    quizzes: [
      {
        question: "Số chỉ nhịp nào có 3 phách trong một ô nhịp và mỗi phách bằng một nốt đen?",
        options: ["Nhịp 3/4", "Nhịp 2/4", "Nhịp 4/4", "Nhịp 6/8"],
        correct: 0,
        explanation: "Nhịp 3/4 có 3 phách nốt đen trong một ô nhịp theo quy luật Mạnh - nhẹ - nhẹ."
      },
      {
        question: "Khi gặp Dấu giáng (b) đặt trước nốt Si, cao độ nốt Si sẽ thay đổi như thế nào?",
        options: [
          "Hạ thấp xuống nửa cung thành nốt Si giáng (Bb)",
          "Nâng cao lên nửa cung thành nốt Si thăng",
          "Giữ nguyên không thay đổi gì",
          "Trở thành nốt Đô"
        ],
        correct: 0,
        explanation: "Dấu giáng hạ cao độ của nốt nhạc xuống 1/2 cung."
      },
      {
        question: "Nhạc cụ nào sau đây được tôn vinh là 'Vua của các loại nhạc cụ' phương Tây với 88 phím đàn?",
        options: ["Đàn Piano (Dương cầm)", "Đàn Guitar", "Đàn Violin (Vĩ cầm)", "Kèn Trumpet"],
        correct: 0,
        explanation: "Đàn Piano với 88 phím đàn và âm vực bao quát rộng lớn được tôn vinh là Vua nhạc cụ."
      },
      {
        question: "Ai là tác giả của bài hát Đội ca 'Cùng nhau ta đi lên' của Đội Thiếu niên Tiền phong Hồ Chí Minh?",
        options: ["Nhạc sĩ Phong Nhã", "Nhạc sĩ Văn Cao", "Nhạc sĩ Lưu Hữu Phước", "Nhạc sĩ Bùi Đình Thảo"],
        correct: 0,
        explanation: "Nhạc sĩ Phong Nhã là tác giả của bài hát chính thức của Đội TNTP Hồ Chí Minh."
      }
    ]
  }
];

module.exports = lessons;
