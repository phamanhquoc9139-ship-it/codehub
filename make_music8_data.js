// Data for Âm Nhạc 8 (16 Lessons across 8 Topics)
// Bộ sách Kết nối tri thức với cuộc sống (Chương trình GDPT 2018)

const lessons = [
  // CHỦ ĐỀ 1: CHÀO NĂM HỌC MỚI
  {
    id: "bai-1",
    lessonNum: 1,
    topicNum: 1,
    topicName: "Chủ đề 1: Chào năm học mới",
    title: "Bài 1: Học hát Chào năm học mới & Nghe nhạc Bay lên nhé nụ cười",
    tag: "Hát & Cảm thụ",
    objectives: [
      "Hát đúng cao độ, trường độ bài hát Chào năm học mới (nhạc & lời: Phạm Tuyên).",
      "Thể hiện được tính chất vui tươi, phấn khởi, rộn ràng của ngày tựu trường.",
      "Cảm thụ giai điệu, thông điệp tích cực của ca khúc thiếu nhi hiện đại Bay lên nhé nụ cười.",
      "Thực hành gõ đệm theo phách, theo nhịp và hát kết hợp vận động cơ thể (body percussion)."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Tìm hiểu tác giả và hoàn cảnh ra đời bài hát "Chào năm học mới"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Bài hát <strong>Chào năm học mới</strong> do nhạc sĩ <strong>Phạm Tuyên</strong> sáng tác. Ông là một trong những nhạc sĩ tiêu biểu của nền âm nhạc Việt Nam hiện đại với rất nhiều tác phẩm bất hủ viết cho tuổi thơ như <em>Chiếc đèn ông sao</em>, <em>Như có Bác trong ngày đại thắng</em>, <em>Tiến lên đoàn viên</em>.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div class="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/50">
            <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-music"></i> Đặc điểm giai điệu & Nhịp điệu
            </h5>
            <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li>Bài hát được viết ở nhịp <strong>2/4</strong>, tốc độ vừa phải, hơi nhanh (Allegretto).</li>
              <li>Giai điệu trong sáng, tiết tấu rộn ràng như tiếng trống trường giục giã.</li>
              <li>Cấu trúc gồm 2 đoạn đơn với tính chất phát triển liền mạch, tươi sáng.</li>
            </ul>
          </div>
          <div class="p-4 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800/50">
            <h5 class="font-bold text-orange-800 dark:text-orange-300 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-heart"></i> Thông điệp & Cảm xúc
            </h5>
            <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li>Khắc họa niềm hân hoan của học sinh gặp lại bạn bè, thầy cô sau kỳ nghỉ hè.</li>
              <li>Khơi dậy tinh thần quyết tâm thi đua học tốt trong năm học mới.</li>
              <li>Lời ca giản dị, gần gũi, giàu hình tượng thơ ngây tuổi học trò.</li>
            </ul>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. Kỹ thuật thanh nhạc và hướng dẫn luyện tập
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-3">
          <p class="text-gray-700 dark:text-gray-300">
            Để thể hiện trọn vẹn tinh thần bài hát, học sinh cần lưu ý các yêu cầu kỹ thuật thanh nhạc sau:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <span class="font-bold text-amber-600 dark:text-amber-400 block mb-1">1. Lấy hơi (Inhale)</span>
              Lấy hơi nhanh bằng cả mũi và miệng ở đầu câu hát hoặc chỗ có dấu lặng, giữ hơi ở cơ hoành để câu hát không bị đứt đoạn.
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <span class="font-bold text-amber-600 dark:text-amber-400 block mb-1">2. Khẩu hình & Phát âm</span>
              Mở rộng vòm họng mềm, phát âm tròn vành rõ chữ, các nguyên âm 'a', 'o', 'e' cần sáng rõ, không bị bẹt hay nghẹt mũi.
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <span class="font-bold text-amber-600 dark:text-amber-400 block mb-1">3. Tiết tấu nảy hạt (Staccato nhẹ)</span>
              Ở những tiếng trống trường tượng thanh, hát nảy nhẹ tạo cảm giác vui tươi, rộn rã bước chân tới lớp.
            </div>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          3. Cảm thụ tác phẩm "Bay lên nhé nụ cười"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Tác phẩm <strong>Bay lên nhé nụ cười</strong> mang phong cách pop trẻ trung, ca từ gửi gắm niềm tin yêu cuộc sống, lan tỏa năng lượng tích cực cho thanh thiếu niên. Khi nghe nhạc, học sinh cảm nhận sự phong phú của hòa âm hiện đại và kết hợp động tác lắc lư theo nhịp điệu.
        </p>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Bài tập thực hành:</h5>
        <ol class="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>Luyện thanh khởi động giọng với mẫu âm <em>Mô - Ma - Mê - Mi</em> theo thang âm 5 bậc Đô - Rê - Mi - Pha - Son.</li>
          <li>Hát bài <strong>Chào năm học mới</strong> kết hợp gõ đệm theo phách (Phách 1 mạnh - Phách 2 nhẹ).</li>
          <li>Thực hiện bộ gõ cơ thể (Body Percussion): Vỗ đùi (phách 1) - Vỗ tay (phách 2) nhịp nhàng theo giai điệu bài hát.</li>
        </ol>
      </div>
    `,
    summary: "Bài 1 giúp học sinh làm quen với tác phẩm Chào năm học mới của nhạc sĩ Phạm Tuyên, rèn luyện kỹ thuật lấy hơi cơ hoành, mở khẩu hình chuẩn xác và cảm thụ giai điệu hiện đại trong bài hát Bay lên nhé nụ cười.",
    quizzes: [
      {
        question: "Bài hát 'Chào năm học mới' do nhạc sĩ nào sáng tác?",
        options: ["Phạm Tuyên", "Trịnh Công Sơn", "Hoàng Vân", "Phan Huỳnh Điểu"],
        correct: 0,
        explanation: "Bài hát Chào năm học mới là sáng tác nổi tiếng của nhạc sĩ Phạm Tuyên dành tặng các bạn học sinh nhân ngày tựu trường."
      },
      {
        question: "Bài hát 'Chào năm học mới' được viết ở số chỉ nhịp nào?",
        options: ["Nhịp 3/4", "Nhịp 2/4", "Nhịp 4/4", "Nhịp 6/8"],
        correct: 1,
        explanation: "Bài hát được viết ở nhịp 2/4, gồm 2 phách trong mỗi ô nhịp (phách 1 mạnh, phách 2 nhẹ), tạo cảm giác rộn ràng, dứt khoát."
      },
      {
        question: "Khi lấy hơi trong ca hát, học sinh nên hít thở như thế nào để giữ hơi tốt nhất?",
        options: [
          "Nâng vai thật cao và phình ngực trên",
          "Hít sâu bằng mũi và miệng, giữ hơi căng vùng cơ hoành và bụng dưới",
          "Thở gấp và chỉ thở bằng miệng",
          "Nín thở thật lâu trước khi hát"
        ],
        correct: 1,
        explanation: "Kỹ thuật lấy hơi cơ hoành (hít sâu, bụng phình ra nhẹ nhàng, không nhấc vai) giúp người hát có cột hơi ổn định, hát dài không đuối sức."
      },
      {
        question: "Thông điệp chính mà tác phẩm 'Bay lên nhé nụ cười' muốn lan tỏa tới các bạn học sinh là gì?",
        options: [
          "Sự hoài niệm về những kỷ niệm đã qua",
          "Tinh thần lạc quan, niềm tin yêu cuộc sống và sự gắn kết bạn bè",
          "Nỗi buồn man mác của mùa thu",
          "Sự nghiêm khắc trong rèn luyện thể chất"
        ],
        correct: 1,
        explanation: "Bài hát lan tỏa nụ cười, năng lượng tích cực, sự sẻ chia và niềm hy vọng vào tương lai tươi sáng của thế hệ trẻ."
      }
    ]
  },

  // BÀI 2
  {
    id: "bai-2",
    lessonNum: 2,
    topicNum: 1,
    topicName: "Chủ đề 1: Chào năm học mới",
    title: "Bài 2: Lí thuyết âm nhạc: Gam trưởng, Giọng trưởng, Giọng Đô trưởng & Đọc nhạc số 1",
    tag: "Nhạc lí & Đọc nhạc",
    objectives: [
      "Hiểu rõ định nghĩa gam, gam trưởng và cấu trúc các cung/nửa cung trong thang âm trưởng.",
      "Nhận biết giọng Đô trưởng (C major) và vị trí nốt chủ âm (âm bậc I).",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 1 ở giọng Đô trưởng.",
      "Ứng dụng gõ phách chỉ huy nhịp 2/4 khi đọc nhạc."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Khái niệm Gam (Scale) và Gam trưởng (Major Scale)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Gam</strong> là hệ thống gồm 7 bậc âm được sắp xếp liền bậc từ thấp lên cao (đi lên) hoặc từ cao xuống thấp (đi xuống), bắt đầu từ âm chủ (bậc I) và kết thúc bằng âm chủ ở quãng 8 cao hơn.
        </p>
        <div class="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/60 my-3">
          <h5 class="font-bold text-amber-900 dark:text-amber-200 mb-2">Công thức cấu tạo của Gam trưởng tự nhiên:</h5>
          <div class="flex items-center justify-between text-center overflow-x-auto py-2 font-mono text-sm sm:text-base">
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">I</span>
            <span class="text-amber-600 font-bold">&rarr; 1C &rarr;</span>
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">II</span>
            <span class="text-amber-600 font-bold">&rarr; 1C &rarr;</span>
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">III</span>
            <span class="text-red-500 font-bold">&rarr; 1/2C &rarr;</span>
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">IV</span>
            <span class="text-amber-600 font-bold">&rarr; 1C &rarr;</span>
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">V</span>
            <span class="text-amber-600 font-bold">&rarr; 1C &rarr;</span>
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">VI</span>
            <span class="text-amber-600 font-bold">&rarr; 1C &rarr;</span>
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">VII</span>
            <span class="text-red-500 font-bold">&rarr; 1/2C &rarr;</span>
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">(I)</span>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center">
            Quy luật ghi nhớ: <strong>1 - 1 - 1/2 - 1 - 1 - 1 - 1/2</strong> (Nửa cung nằm giữa bậc III - IV và bậc VII - I).
          </p>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. Giọng Đô trưởng (C major)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Khi các bậc âm của gam trưởng được xây dựng bắt đầu từ nốt <strong>Đô (C)</strong>, ta có <strong>Gam Đô trưởng</strong>. Các nốt nhạc gồm:
          <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-amber-600 dark:text-amber-400 font-bold">C - D - E - F - G - A - B - C</code>.
        </p>
        <ul class="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 ml-2">
          <li><strong>Âm chủ (Tonic):</strong> Nốt Đô (C) là bậc I, đóng vai trò hạt nhân ổn định nhất.</li>
          <li><strong>Hóa biểu (Key signature):</strong> Giọng Đô trưởng <em>không có dấu thăng (#) hay dấu giáng (b)</em> ở đầu khuông nhạc.</li>
          <li><strong>Màu sắc âm nhạc:</strong> Trong sáng, tươi vui, trang nghiêm và rõ ràng.</li>
        </ul>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          3. Thực hành Bài đọc nhạc số 1
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Bài đọc nhạc số 1 viết ở giọng Đô trưởng, nhịp 2/4. Gồm các nốt Đô, Rê, Mi, Pha, Son, La với hình nốt đen, nốt trắng và móc đơn.
          </p>
          <div class="p-3 bg-amber-50 dark:bg-amber-950/20 rounded font-mono text-xs sm:text-sm text-amber-800 dark:text-amber-300">
            Câu 1: | Son - Mi - Pha | Son - - - | La - La - Đô | Son - - - |<br/>
            Câu 2: | Pha - Pha - La | Mi - Mi - Son | Rê - Mi - Rê | Đô - - - |
          </div>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Hoạt động luyện tập:</h5>
        <ol class="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>Đọc thang âm Đô trưởng đi lên và đi xuống kết hợp ký hiệu bàn tay (Curwen Hand Signs).</li>
          <li>Gõ phách nhịp 2/4 theo nhịp gõ của máy đập nhịp (Metronome tốc độ 72-80 bpm).</li>
          <li>Đọc chuẩn cao độ Bài đọc nhạc số 1 và ghép lời ca tự sáng tác ngắn về trường lớp.</li>
        </ol>
      </div>
    `,
    summary: "Gam trưởng có công thức 1 - 1 - 1/2 - 1 - 1 - 1 - 1/2. Giọng Đô trưởng lấy nốt Đô làm âm chủ bậc I và không có dấu thăng giáng ở hóa biểu. Bài đọc nhạc số 1 rèn luyện kỹ năng đọc xướng âm chuẩn xác.",
    quizzes: [
      {
        question: "Trong gam trưởng tự nhiên, hai khoảng cách nửa cung (1/2 cung) nằm ở giữa các bậc âm nào?",
        options: [
          "Bậc I - II và bậc IV - V",
          "Bậc III - IV và bậc VII - I (VIII)",
          "Bậc II - III và bậc V - VI",
          "Bậc IV - V và bậc VI - VII"
        ],
        correct: 1,
        explanation: "Công thức chuẩn của gam trưởng tự nhiên có các khoảng nửa cung nằm tại bậc III - IV và bậc VII - I."
      },
      {
        question: "Giọng Đô trưởng (C major) có bao nhiêu dấu thăng (#) hoặc dấu giáng (b) ở hóa biểu?",
        options: ["1 dấu thăng", "1 dấu giáng", "Không có dấu thăng giáng nào", "2 dấu thăng"],
        correct: 2,
        explanation: "Giọng Đô trưởng (C major) là giọng trưởng cơ bản chuẩn mực, không có bất kỳ dấu hóa biểu nào."
      },
      {
        question: "Âm chủ (bậc I) của giọng Đô trưởng là nốt nào?",
        options: ["Nốt La (A)", "Nốt Son (G)", "Nốt Đô (C)", "Nốt Pha (F)"],
        correct: 2,
        explanation: "Tên của giọng đi kèm tên âm chủ; do đó giọng Đô trưởng có âm chủ bậc I chính là nốt Đô (C)."
      },
      {
        question: "Khi gặp nhịp 2/4, giá trị trường độ của một phách bằng hình nốt nào?",
        options: ["Nốt trắng", "Nốt đen", "Nốt móc đơn", "Nốt tròn"],
        correct: 1,
        explanation: "Số chỉ nhịp 2/4 có số 4 ở dưới quy ước mỗi phách tương đương giá trị của 1 nốt đen."
      }
    ]
  },

  // CHỦ ĐỀ 2: TÔI YÊU VIỆT NAM
  {
    id: "bai-3",
    lessonNum: 3,
    topicNum: 2,
    topicName: "Chủ đề 2: Tôi yêu Việt Nam",
    title: "Bài 3: Học hát bài hát Việt Nam ơi & Nghe nhạc Ngàn ước mơ Việt Nam",
    tag: "Hát & Tự hào dân tộc",
    objectives: [
      "Hát đúng giai điệu, lời ca và nhịp độ hào hùng của ca khúc Việt Nam ơi.",
      "Cảm nhận và truyền tải tình yêu quê hương, lòng tự hào về non sông gấm vóc.",
      "Nghe và cảm nhận cấu trúc phát triển bài hát Ngàn ước mơ Việt Nam.",
      "Thực hiện biểu diễn nhóm kết hợp vũ đạo cổ động hoặc dàn dựng tốp ca."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Giới thiệu bài hát "Việt Nam ơi"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Bài hát <strong>Việt Nam ơi</strong> (sáng tác bởi Minh Beta) ra đời với giai điệu trẻ trung, sôi nổi và tràn đầy lòng kiêu hãnh. Tác phẩm nhanh chóng trở thành một bài ca cổ động quen thuộc được hàng triệu người hâm mộ vang lên trong các sự kiện thể thao, lễ hội và phong trào thanh niên cả nước.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div class="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/50">
            <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-1">Cấu trúc bài hát</h5>
            <p class="text-sm text-gray-700 dark:text-gray-300">
              Bài hát chia làm 2 đoạn rõ rệt: Đoạn A trầm ấm, thiết tha kể về vẻ đẹp bình dị của đất nước; Đoạn B (Điệp khúc) dâng trào, cao trào với giai điệu rực lửa, khẳng định sức mạnh đoàn kết.
            </p>
          </div>
          <div class="p-4 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800/50">
            <h5 class="font-bold text-orange-800 dark:text-orange-300 mb-1">Phong cách thể hiện</h5>
            <p class="text-sm text-gray-700 dark:text-gray-300">
              Hát với hơi thở vững vàng, dồn nén cảm xúc từ tốn ở đoạn đầu và bung tỏa năng lượng hào hùng ở đoạn điệp khúc <em>"Việt Nam hỡi, Việt Nam ơi, tự hào hát mãi lên Việt Nam ơi..."</em>.
            </p>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. Hướng dẫn kỹ năng biểu diễn tập thể
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-3">
          <ul class="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Lĩnh xướng & Đồng ca:</strong> Một học sinh hát solo đoạn 1 tạo sự lắng đọng, sau đó cả tập thể đồng thanh hòa giọng đoạn điệp khúc.</li>
            <li><strong>Vũ đạo cổ động:</strong> Động tác đặt tay lên ngực trái (nơi trái tim), vung tay lên cao hướng về phía trước thể hiện niềm tin và khát vọng vươn mình.</li>
            <li><strong>Nhịp trống hào hùng:</strong> Đệm trống lắc (Tambourine) hoặc trống trường theo tiết tấu dồn dập ở các ô nhịp chuyển đoạn.</li>
          </ul>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Thực hành trên lớp:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Khởi động giọng bằng các âm vang 'No - Na' lên nốt cao trong đoạn điệp khúc.</li>
          <li>Chia tổ nhóm biểu diễn đối đáp: Nhóm 1 hát đoạn khởi đầu, nhóm 2 tiếp nối và cả lớp đồng ca điệp khúc.</li>
        </ol>
      </div>
    `,
    summary: "Ca khúc Việt Nam ơi hun đúc tinh thần tự tôn dân tộc, kết nối mọi con tim yêu nước thông qua tiết tấu hiện đại, giai điệu hào sảng và thông điệp đoàn kết xây dựng đất nước.",
    quizzes: [
      {
        question: "Ca khúc 'Việt Nam ơi' mang tính chất và màu sắc âm nhạc như thế nào?",
        options: [
          "Trầm buồn, u uất và chậm rãi",
          "Hào hùng, sôi nổi, tự hào và tràn đầy nhiệt huyết",
          "Hài hước, châm biếm và nhẹ nhàng",
          "Dịu êm, ru ngủ và huyền bí"
        ],
        correct: 1,
        explanation: "Bài hát được sáng tác với giai điệu trẻ trung, sôi động và hào hùng, khơi dậy niềm kiêu hãnh của người Việt Nam."
      },
      {
        question: "Cấu trúc thông thường của bài hát gồm 2 phần là:",
        options: [
          "Đoạn kể chuyện bình dị (Phiên khúc) và Đoạn cao trào bùng nổ (Điệp khúc)",
          "Chỉ gồm 1 câu duy nhất lặp đi lặp lại",
          "Đoạn dạo đầu và đoạn kết thúc không có lời",
          "Phần ngâm thơ và phần hợp xướng không nhạc đệm"
        ],
        correct: 0,
        explanation: "Bài hát xây dựng từ đoạn A (phiên khúc) trữ tình dẫn dắt sang đoạn B (điệp khúc) dâng trào cảm xúc mãnh liệt."
      },
      {
        question: "Để thể hiện tốt đoạn điệp khúc cao trào trong bài hát, người hát cần kỹ thuật gì?",
        options: [
          "Hát thì thào thật nhỏ",
          "Hít một hơi thật sâu ở cơ hoành, mở rộng vòm họng và giữ cột hơi chắc khỏe",
          "Gào to hết cỡ làm vỡ giọng",
          "Hát ngắt quãng từng từ rời rạc"
        ],
        correct: 1,
        explanation: "Để hát nốt cao vang và đẹp mà không bị đau họng, cần có cột hơi cơ hoành vững vàng và mở vòm họng tròn trịa."
      },
      {
        question: "Hoạt động nào phù hợp nhất khi biểu diễn bài hát 'Việt Nam ơi' trong lễ hội trường học?",
        options: [
          "Ngồi yên một chỗ nhắm mắt",
          "Hát kết hợp múa cổ động, cờ Tổ quốc và động tác tay dứt khoát",
          "Chỉ chơi đàn không hát lời",
          "Hát bè giọng trầm thì thầm"
        ],
        correct: 1,
        explanation: "Biểu diễn tốp ca kết hợp múa cổ động và vẫy cờ đỏ sao vàng làm tăng tối đa hiệu ứng hào hùng của tác phẩm."
      }
    ]
  },

  // BÀI 4
  {
    id: "bai-4",
    lessonNum: 4,
    topicNum: 2,
    topicName: "Chủ đề 2: Tôi yêu Việt Nam",
    title: "Bài 4: Thường thức âm nhạc: Dân ca Quan họ Bắc Ninh & Thực hành Nhạc cụ",
    tag: "Di sản & Nhạc cụ",
    objectives: [
      "Hiểu rõ nguồn gốc, giá trị văn hóa và đặc trưng của Dân ca Quan họ Bắc Ninh - Di sản phi vật thể nhân loại.",
      "Biết về lề lối ca hát, trang phục truyền thống của liền anh, liền chị quan họ.",
      "Phân biệt các chặng hát quan họ: Giọng lề lối, giọng vặt và giọng giã bạn.",
      "Thực hành bấm ngón và thổi bài bản đơn giản trên Recorder hoặc Kèn phím (Melodica)."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Dân ca Quan họ Bắc Ninh - Di sản văn hóa thế giới
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Dân ca Quan họ Bắc Ninh</strong> là một hình thức nghệ thuật dân gian đặc sắc của vùng văn hóa Kinh Bắc (nay thuộc tỉnh Bắc Ninh và Bắc Giang). Năm 2009, Quan họ Bắc Ninh đã được <strong>UNESCO</strong> vinh danh là <em>Di sản văn hóa phi vật thể đại diện của nhân loại</em>.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
          <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/50">
            <h5 class="font-bold text-amber-800 dark:text-amber-300 text-sm mb-1">Chủ thể biểu diễn</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400">
              Các <strong>Liền anh</strong> (mặc áo the, khăn xếp, cầm ô lục soạn) và <strong>Liền chị</strong> (mặc áo tứ thân mớ ba mớ bảy, nón quai thao).
            </p>
          </div>
          <div class="p-3 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800/50">
            <h5 class="font-bold text-orange-800 dark:text-orange-300 text-sm mb-1">Kỹ thuật ca hát đỉnh cao</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400">
              Đạt đến chuẩn mực 4 tiêu chí khắt khe: <strong>Vang - Rền - Nền - Nảy</strong>. Giọng hát nảy hạt tinh tế, luyến láy mượt mà.
            </p>
          </div>
          <div class="p-3 bg-yellow-50 dark:bg-yellow-950/40 rounded-xl border border-yellow-200 dark:border-yellow-800/50">
            <h5 class="font-bold text-yellow-800 dark:text-yellow-300 text-sm mb-1">3 Chặng canh hát</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400">
              1. <em>Hát lề lối</em> (nghiêm cẩn, trang trọng)<br/>
              2. <em>Hát vặt</em> (phong phú, đa dạng bài)<br/>
              3. <em>Hát giã bạn</em> (lưu luyến, bịn rịn chia tay).
            </p>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. Thực hành Nhạc cụ: Recorder & Kèn phím (Melodica)
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Luyện tập thổi câu dân ca mộc mạc hoặc các nốt cơ bản của thang âm Đô trưởng:
          </p>
          <ul class="list-disc list-inside text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li><strong>Recorder (Sáo dọc):</strong> Đặt ngón tay kín các lỗ bấm, thổi luồng hơi êm dịu, không thổi quá mạnh làm méo nốt.</li>
            <li><strong>Kèn phím (Melodica):</strong> Tay phải bấm phím đàn, kết hợp thổi hơi đều đặn từ ống ngậm để âm thanh vang sáng và ngân dài chuẩn nốt.</li>
          </ul>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Thực hành và trải nghiệm:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Lắng nghe và phân tích bài hát dân ca quan họ mẫu mực như <em>Khách đến chơi nhà</em>, <em>Cò lả</em> hoặc <em>Người ơi người ở đừng về</em>.</li>
          <li>Tập nhận biết các tiêu chí kỹ thuật <strong>Vang - Rền - Nền - Nảy</strong> qua clip nghệ nhân biểu diễn.</li>
          <li>Thổi nét giai điệu 4 ô nhịp trên kèn phím / sáo recorder.</li>
        </ol>
      </div>
    `,
    summary: "Dân ca Quan họ Bắc Ninh là đỉnh cao nghệ thuật ca hát dân gian Việt Nam với kỹ thuật Vang - Rền - Nền - Nảy và văn hóa ứng xử thanh lịch. Kết hợp thực hành sáo Recorder hoặc kèn phím giúp học sinh phát triển tư duy nhạc cụ.",
    quizzes: [
      {
        question: "Dân ca Quan họ Bắc Ninh được UNESCO công nhận là Di sản văn hóa phi vật thể của nhân loại vào năm nào?",
        options: ["2005", "2009", "2015", "2020"],
        correct: 1,
        explanation: "Vào ngày 30 tháng 9 năm 2009, UNESCO đã chính thức ghi danh Dân ca Quan họ Bắc Ninh vào danh sách Di sản văn hóa phi vật thể đại diện của nhân loại."
      },
      {
        question: "Bốn tiêu chuẩn khắt khe trong kỹ thuật ca hát của nghệ nhân Quan họ là gì?",
        options: [
          "Nhanh - Mạnh - Cao - Rõ",
          "Vang - Rền - Nền - Nảy",
          "Trầm - Bổng - Êm - Nhẹ",
          "To - Rõ - Ngắn - Dài"
        ],
        correct: 1,
        explanation: "Bốn kỹ thuật cốt lõi tạo nên bản sắc độc nhất vô nhị của lối hát Quan họ truyền thống là Vang - Rền - Nền - Nảy."
      },
      {
        question: "Chặng cuối cùng của một canh hát quan họ thâu đêm thể hiện sự lưu luyến lúc chia tay gọi là gì?",
        options: ["Hát lề lối", "Hát đón bạn", "Hát vặt", "Hát giã bạn"],
        correct: 3,
        explanation: "Hát giã bạn là chặng kết thúc một canh hát quan họ với những bài ca đầy lưu luyến như 'Người ơi người ở đừng về'."
      },
      {
        question: "Trang phục truyền thống tiêu biểu của liền chị trong hội hát quan họ gồm:",
        options: [
          "Áo dài cách tân hiện đại",
          "Áo tứ thân mớ ba mớ bảy, khăn mỏ quạ, nón quai thao",
          "Váy đầm xòe phương Tây",
          "Trang phục thổ cẩm Tây Nguyên"
        ],
        correct: 1,
        explanation: "Các liền chị quan họ luôn duyên dáng trong bộ áo mớ ba mớ bảy, đầu đội nón thúng quai thao và chít khăn mỏ quạ đen nhánh."
      }
    ]
  },

  // CHỦ ĐỀ 3: HÒA CA
  {
    id: "bai-5",
    lessonNum: 5,
    topicNum: 3,
    topicName: "Chủ đề 3: Hòa ca",
    title: "Bài 5: Học hát Ngàn ước mơ Việt Nam & Thường thức: Thể loại Hợp xướng",
    tag: "Hát & Hợp xướng",
    objectives: [
      "Hát đúng cao độ, sắc thái truyền cảm của ca khúc Ngàn ước mơ Việt Nam.",
      "Hiểu bản chất, quy mô và đặc điểm của nghệ thuật Hợp xướng (Choir / Choral music).",
      "Phân biệt 4 nhóm giọng chính trong hợp xướng: Soprano, Alto, Tenor, Bass (SATB).",
      "Trải nghiệm cảm giác hát bè đuổi (Canon) hoặc bè phụ đơn giản trong lớp học."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Học hát "Ngàn ước mơ Việt Nam"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Ca khúc <strong>Ngàn ước mơ Việt Nam</strong> (sáng tác: Nguyễn Hồng Thuận) ngợi ca ý chí kiên cường, tấm lòng nhân ái và ước mơ vươn cao của thế hệ trẻ Việt Nam. Tác phẩm mang phong cách ballad trữ tình với giai điệu mượt mà, sâu lắng.
        </p>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. Tìm hiểu thể loại Hợp xướng (Choir)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Hợp xướng</strong> là hình thức biểu diễn thanh nhạc nhiều bè (đa thanh), do một tập thể lớn người biểu diễn cùng với dàn nhạc đệm hoặc không có nhạc đệm (gọi là <em>A cappella</em>). Hợp xướng đòi hỏi sự chính xác tuyệt đối về cao độ, tính hòa hợp âm sắc và sự chỉ huy thống nhất của nhạc trưởng.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-3">
          <div class="p-3 bg-pink-50 dark:bg-pink-950/40 rounded-xl border border-pink-200 dark:border-pink-800/50">
            <span class="text-xs font-bold uppercase tracking-wider text-pink-700 dark:text-pink-300 block">Nữ cao</span>
            <h5 class="font-bold text-base text-gray-900 dark:text-white">Soprano</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Âm sắc trong sáng, bay bổng, phụ trách giai điệu cao nhất.</p>
          </div>
          <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/50">
            <span class="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 block">Nữ trầm</span>
            <h5 class="font-bold text-base text-gray-900 dark:text-white">Alto (Contralto)</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Âm sắc dày dặn, ấm áp, đi bè trung và bè nền cho nữ cao.</p>
          </div>
          <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800/50">
            <span class="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 block">Nam cao</span>
            <h5 class="font-bold text-base text-gray-900 dark:text-white">Tenor</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Âm sắc hào sảng, vang rền, tạo độ mở và màu sắc rực rỡ.</p>
          </div>
          <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800/50">
            <span class="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 block">Nam trầm</span>
            <h5 class="font-bold text-base text-gray-900 dark:text-white">Bass</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Âm sắc sâu thẳm, nặng chắc, giữ vai trò làm nền móng hòa âm.</p>
          </div>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Thực hành thanh nhạc:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Chia lớp thành 2 nhóm: Nhóm 1 hát giai điệu chính bài <em>Ngàn ước mơ Việt Nam</em>, Nhóm 2 ngâm nga phụ họa (Humming / Vang âm 'U' hoặc 'A').</li>
          <li>Tập lắng nghe âm thanh của bè bạn bên cạnh để hòa tan giọng hát của mình vào tổng thể, không hát lấn át.</li>
        </ol>
      </div>
    `,
    summary: "Hợp xướng là loại hình âm nhạc đỉnh cao của nghệ thuật ca hát nhiều bè với 4 nhóm giọng chuẩn SATB (Soprano, Alto, Tenor, Bass). Ca khúc Ngàn ước mơ Việt Nam là tác phẩm giàu ý nghĩa giáo dục khát vọng tương lai.",
    quizzes: [
      {
        question: "Hình thức hợp xướng biểu diễn hoàn toàn không có nhạc cụ đệm được gọi là gì?",
        options: ["Hát đồng ca", "Hát A cappella", "Hát bè Canon", "Hát Aria"],
        correct: 1,
        explanation: "A cappella là thuật ngữ âm nhạc chỉ việc hát hợp xướng hoặc tốp ca hoàn toàn bằng giọng người mà không dùng nhạc cụ đệm."
      },
      {
        question: "Trong dàn hợp xướng hỗn hợp (SATB), giọng nữ cao được gọi bằng thuật ngữ nào?",
        options: ["Alto", "Soprano", "Tenor", "Bass"],
        correct: 1,
        explanation: "Soprano là giọng nữ cao; Alto là giọng nữ trầm; Tenor là giọng nam cao; Bass là giọng nam trầm."
      },
      {
        question: "Ai là người giữ vai trò chỉ đạo nhịp điệu, biểu cảm và sự cân bằng âm lượng của các bè trong dàn hợp xướng?",
        options: ["Nghệ sĩ solo", "Chỉ huy hợp xướng (Nhạc trưởng)", "Nhạc công chơi trống", "Khán giả"],
        correct: 1,
        explanation: "Nhạc trưởng / Chỉ huy hợp xướng (Conductor) điều phối toàn bộ thời gian, tốc độ, nhịp điệu và sắc thái biểu diễn của các bè."
      },
      {
        question: "Yếu tố quan trọng nhất khi hát hợp xướng là gì?",
        options: [
          "Cố gắng hát to hơn tất cả các bạn khác",
          "Sự hòa quyện âm sắc, giữ đúng cao độ bè mình và lắng nghe sự đồng điệu với toàn đội",
          "Chỉ chú ý vào micro cá nhân",
          "Hát lệch nhịp để tạo sự chú ý"
        ],
        correct: 1,
        explanation: "Hát hợp xướng đòi hỏi tinh thần tập thể tối cao: hòa quyện âm sắc, đúng cao độ bè mình đảm nhiệm và lắng nghe các bè khác."
      }
    ]
  },

  // BÀI 6
  {
    id: "bai-6",
    lessonNum: 6,
    topicNum: 3,
    topicName: "Chủ đề 3: Hòa ca",
    title: "Bài 6: Lí thuyết âm nhạc: Nhịp 3/8 & Đọc nhạc: Bài đọc nhạc số 2",
    tag: "Nhạc lí & Đọc nhạc",
    objectives: [
      "Hiểu rõ ý nghĩa, cấu tạo và tính chất của số chỉ nhịp 3/8.",
      "So sánh sự khác nhau và giống nhau giữa nhịp 3/8 và nhịp 3/4.",
      "Đọc đúng cao độ và tiết tấu nhịp 3/8 trong Bài đọc nhạc số 2.",
      "Thực hành gõ đệm phách mạnh - nhẹ - nhẹ chuẩn xác theo nhịp điệu nhịp 3/8."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Khái niệm và cấu tạo của Nhịp 3/8
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Nhịp 3/8</strong> là nhịp đơn có 3 phách trong mỗi ô nhịp.
        </p>
        <div class="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/60 my-3">
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Số 3 (ở trên):</strong> Cho biết mỗi ô nhịp có <strong>3 phách</strong>.</li>
            <li><strong>Số 8 (ở dưới):</strong> Quy ước mỗi phách có giá trị bằng độ dài của <strong>1 nốt móc đơn</strong> (vì 1 nốt tròn chia 8 bằng 1 móc đơn).</li>
            <li><strong>Tính chất phách:</strong> Phách 1 là <strong>phách mạnh</strong>, phách 2 và phách 3 là <strong>phách nhẹ</strong>.</li>
          </ul>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. So sánh Nhịp 3/8 và Nhịp 3/4
        </h4>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead class="bg-gray-100 dark:bg-gray-800 font-bold text-gray-700 dark:text-gray-200">
              <tr>
                <th class="p-3 border-b">Đặc điểm</th>
                <th class="p-3 border-b">Nhịp 3/4</th>
                <th class="p-3 border-b">Nhịp 3/8</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700 text-gray-600 dark:text-gray-300">
              <tr>
                <td class="p-3 font-semibold">Số phách trong ô nhịp</td>
                <td class="p-3">3 phách</td>
                <td class="p-3">3 phách</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold">Giá trị mỗi phách</td>
                <td class="p-3">1 nốt đen</td>
                <td class="p-3">1 nốt móc đơn</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold">Cảm giác tốc độ</td>
                <td class="p-3">Khoan thai, dập dềnh điệu Valse</td>
                <td class="p-3">Nhanh, nhẹ nhàng, thanh thoát</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          3. Thực hành Bài đọc nhạc số 2
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Bài đọc nhạc số 2 ở nhịp 3/8, gồm các nốt móc đơn và nốt đen. Gõ phách 1 nhấn mạnh, phách 2 và 3 lướt nhẹ nhàng:
          </p>
          <div class="p-3 bg-amber-50 dark:bg-amber-950/20 rounded font-mono text-xs sm:text-sm text-amber-800 dark:text-amber-300">
            | Đô Mi Son | La - Son | Pha - Mi | Rê - - |<br/>
            | Đô Mi Son | La - Đô | Son - Mi | Đô - - |
          </div>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Bài tập rèn luyện:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Gõ tiết tấu nhịp 3/8 theo hình tam giác: Đánh xuống (phách 1 mạnh) &rarr; Đưa sang phải (phách 2 nhẹ) &rarr; Đưa lên trên (phách 3 nhẹ).</li>
          <li>Đọc Bài đọc nhạc số 2 kết hợp gõ đệm thanh phách.</li>
        </ol>
      </div>
    `,
    summary: "Nhịp 3/8 có 3 phách trong mỗi ô nhịp, mỗi phách có giá trị bằng một nốt móc đơn. Nhịp 3/8 thường mang lại cảm giác nhẹ nhàng, uyển chuyển và nhanh hơn nhịp 3/4.",
    quizzes: [
      {
        question: "Trong số chỉ nhịp 3/8, số 8 ở dưới biểu thị điều gì?",
        options: [
          "Mỗi ô nhịp có 8 phách",
          "Giá trị của một phách bằng một nốt móc đơn",
          "Mỗi ô nhịp có 8 nốt đen",
          "Tốc độ của bài hát là 80 bpm"
        ],
        correct: 1,
        explanation: "Số 8 ở mẫu số quy ước đơn vị độ dài của mỗi phách tương đương 1/8 nốt tròn, tức là 1 nốt móc đơn."
      },
      {
        question: "Sự phân bố phách mạnh - nhẹ trong một ô nhịp 3/8 diễn ra như thế nào?",
        options: [
          "Mạnh - Mạnh - Nhẹ",
          "Mạnh - Nhẹ - Nhẹ",
          "Nhẹ - Mạnh - Nhẹ",
          "Nhẹ - Nhẹ - Nhẹ"
        ],
        correct: 1,
        explanation: "Các nhịp có 3 phách (như 3/4, 3/8) đều tuân theo trật tự: Phách 1 Mạnh, Phách 2 Nhẹ, Phách 3 Nhẹ."
      },
      {
        question: "Một nốt đen chấm dôi trong nhịp 3/8 có độ dài tương đương mấy phách?",
        options: ["1 phách", "2 phách", "3 phách (trọn một ô nhịp)", "4 phách"],
        correct: 2,
        explanation: "1 nốt đen chấm dôi = 3 nốt móc đơn. Do mỗi phách là 1 nốt móc đơn nên nốt đen chấm dôi ngân dài đúng 3 phách."
      },
      {
        question: "Điểm khác biệt căn bản nhất giữa nhịp 3/4 và nhịp 3/8 là gì?",
        options: [
          "Nhịp 3/4 có 4 phách còn 3/8 có 8 phách",
          "Nhịp 3/4 lấy nốt đen làm đơn vị phách, còn nhịp 3/8 lấy nốt móc đơn làm đơn vị phách",
          "Nhịp 3/4 dành cho nhạc buồn, 3/8 dành cho nhạc vui",
          "Không có gì khác biệt"
        ],
        correct: 1,
        explanation: "Điểm cốt lõi là giá trị đơn vị phách: nhịp 3/4 lấy nốt đen (1/4 nốt tròn), nhịp 3/8 lấy nốt móc đơn (1/8 nốt tròn)."
      }
    ]
  },

  // CHỦ ĐỀ 4: BIỂN ĐẢO QUÊ HƯƠNG
  {
    id: "bai-7",
    lessonNum: 7,
    topicNum: 4,
    topicName: "Chủ đề 4: Biển đảo quê hương",
    title: "Bài 7: Học hát Nơi ấy Trường Sa & Nghe nhạc Nơi đảo xa",
    tag: "Hát & Tình yêu biển đảo",
    objectives: [
      "Hát đúng cao độ, trường độ bài hát Nơi ấy Trường Sa (nhạc & lời: Kim Long).",
      "Thể hiện tình cảm tha thiết, lòng tri ân sâu sắc với các chiến sĩ hải quân bảo vệ chủ quyền Tổ quốc.",
      "Cảm thụ giai điệu da diết, thiêng liêng của tuyệt phẩm Nơi đảo xa (sáng tác: Thế Song).",
      "Rèn luyện kỹ thuật hát ngân dài và luyến nốt mượt mà."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Học hát bài hát "Nơi ấy Trường Sa"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Quần đảo Trường Sa và Hoàng Sa là những phần máu thịt thiêng liêng không thể tách rời của Tổ quốc Việt Nam. Bài hát <strong>Nơi ấy Trường Sa</strong> (nhạc và lời: Kim Long) vẽ nên khung cảnh biển trời sóng vỗ hiên ngang, nơi những người lính đảo ngày đêm chắc tay súng giữ vững chủ quyền biển đảo quê hương.
        </p>
        <div class="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/50 my-3">
          <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Đặc điểm tác phẩm</h5>
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Giai điệu lúc tha thiết sâu lắng gợi nỗi nhớ đất liền, lúc dạt dào mạnh mẽ như những con sóng ngàn khơi. Lời ca đong đầy tình cảm hậu phương gửi gắm tới các anh nơi hải đảo xa xôi.
          </p>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. Cảm thụ ca khúc bất hủ "Nơi đảo xa"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Tác phẩm <strong>Nơi đảo xa</strong> của cố nhạc sĩ <strong>Thế Song</strong> là một trong những tượng đài âm nhạc về đề tài người lính biển. <em>"Nơi anh đến là biển xa, nơi anh tới ngoài đảo xa... Vượt trùng khơi gửi cánh hoa tươi về anh..."</em>. Giai điệu mượt mà mang âm hưởng dân ca đồng bằng Bắc Bộ, kết hợp hài hòa chất tự sự và hào sảng lãng mạn cách mạng.
        </p>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Hoạt động trải nghiệm:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Tập luyện kỹ thuật luyến 2 nốt trong bài hát <em>Nơi ấy Trường Sa</em> để tạo chất sóng sánh của biển cả.</li>
          <li>Thảo luận nhóm: Chia sẻ cảm nghĩ về tinh thần lạc quan, kiên cường của các chiến sĩ Hải quân Nhân dân Việt Nam nơi đầu sóng ngọn gió.</li>
        </ol>
      </div>
    `,
    summary: "Chủ đề Biển đảo bồi đắp lòng yêu nước và ý thức chủ quyền thiêng liêng qua hai tác phẩm Nơi ấy Trường Sa và Nơi đảo xa, rèn luyện kỹ năng biểu cảm trữ tình và hòa nhịp cùng hơi thở thời đại.",
    quizzes: [
      {
        question: "Tác giả của tuyệt phẩm âm nhạc 'Nơi đảo xa' là nhạc sĩ nào?",
        options: ["Thế Song", "Phạm Minh Tuấn", "Trần Long Ẩn", "Văn Cao"],
        correct: 0,
        explanation: "Ca khúc Nơi đảo xa là sáng tác để đời của nhạc sĩ Thế Song sau chuyến đi thực tế đầy cảm xúc tại vùng biển đảo Quảng Ninh năm 1979."
      },
      {
        question: "Cảm xúc chủ đạo toát lên từ hai ca khúc về Trường Sa và biển đảo là gì?",
        options: [
          "Sự hoang mang, sợ hãi trước bão tố",
          "Tình yêu quê hương biển đảo, lòng tri ân và niềm tin tưởng sâu sắc vào người lính hải quân",
          "Nỗi cô đơn tuyệt vọng giữa đại dương",
          "Sự hờ hững với thiên nhiên"
        ],
        correct: 1,
        explanation: "Các tác phẩm ngợi ca vẻ đẹp hùng vĩ của biển trời Tổ quốc và sự kiên trung, bất khuất của những người lính gìn giữ bình yên non sông."
      },
      {
        question: "Để thể hiện tốt tính chất 'sóng vỗ dập dềnh' trong câu hát, người hát cần áp dụng kỹ thuật nào?",
        options: [
          "Hát ngắt giọng khô khan",
          "Hát luyến láy mềm mại (Legato) và điều tiết hơi thở lúc to lúc nhỏ (Crescendo/Decrescendo)",
          "Thét thật to từng tiếng một",
          "Hát không lấy hơi"
        ],
        correct: 1,
        explanation: "Hát liền tiếng (Legato) kết hợp xử lý sắc thái to nhỏ uyển chuyển mô phỏng trọn vẹn từng đợt sóng biển dạt dào."
      },
      {
        question: "Hai quần đảo thiêng liêng ở Biển Đông là biểu tượng chủ quyền bất khả xâm phạm của Việt Nam là gì?",
        options: ["Côn Đảo và Phú Quốc", "Hoàng Sa và Trường Sa", "Cát Bà và Cô Tô", "Lý Sơn và Phú Quý"],
        correct: 1,
        explanation: "Hoàng Sa và Trường Sa là hai quần đảo thiêng liêng gắn liền với lịch sử ngàn đời và chủ quyền bất khả xâm phạm của dân tộc Việt Nam."
      }
    ]
  },

  // BÀI 8
  {
    id: "bai-8",
    lessonNum: 8,
    topicNum: 4,
    topicName: "Chủ đề 4: Biển đảo quê hương",
    title: "Bài 8: Thường thức âm nhạc: Đàn Guitar và Đàn Ukulele & Thực hành nhạc cụ",
    tag: "Nhạc cụ phương Tây",
    objectives: [
      "Nhận biết nguồn gốc, hình dáng và cấu tạo của Đàn Guitar (Guitar cổ điển và Guitar Acoustic).",
      "Tìm hiểu nguồn gốc vùng Hawaii và đặc điểm của Đàn Ukulele.",
      "So sánh sự khác nhau về số dây, kích thước và âm sắc giữa Guitar (6 dây) và Ukulele (4 dây).",
      "Luyện tập các thế bấm hợp âm cơ bản (C, Am) hoặc bấm nốt đơn giản trên nhạc cụ."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Tìm hiểu Đàn Guitar (Tây Ban Cầm)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Guitar</strong> là nhạc cụ có dây xuất xứ lâu đời từ Tây Ban Nha và phổ biến rộng rãi khắp thế giới. Đàn guitar tiêu chuẩn có <strong>6 dây</strong>, điều chỉnh cao độ từ trầm đến bổng theo thứ tự: <strong>E - A - D - G - B - E</strong> (Mì - Là - Rê - Son - Si - Mí).
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div class="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/50">
            <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-1">Guitar Cổ điển (Classical Guitar)</h5>
            <p class="text-sm text-gray-700 dark:text-gray-300">
              Sử dụng <strong>dây nylon</strong>, cần đàn to bản, âm sắc tròn trịa, ấm áp, thích hợp chơi nhạc cổ điển, độc tấu hòa tấu thính phòng.
            </p>
          </div>
          <div class="p-4 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800/50">
            <h5 class="font-bold text-orange-800 dark:text-orange-300 mb-1">Guitar Acoustic (Dây kim loại)</h5>
            <p class="text-sm text-gray-700 dark:text-gray-300">
              Sử dụng <strong>dây sắt/kim loại</strong>, thùng đàn lớn, âm sắc vang sáng, đanh thép, rất được ưa chuộng để đệm hát nhạc trẻ, Pop, Rock.
            </p>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. Tìm hiểu Đàn Ukulele (Đàn Hawaii)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Ukulele</strong> là nhạc cụ dây nhỏ gọn có nguồn gốc từ quần đảo Hawaii (Mỹ). Đàn thường chỉ có <strong>4 dây</strong>, dây làm bằng chất liệu nylon mềm mại, điều chỉnh các nốt: <strong>G - C - E - A</strong> (Son - Đô - Mi - La). Âm sắc của Ukulele trong trẻo, vui nhộn, tươi mát như làn gió biển mùa hè.
        </p>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          3. So sánh Đàn Guitar và Đàn Ukulele
        </h4>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead class="bg-gray-100 dark:bg-gray-800 font-bold text-gray-700 dark:text-gray-200">
              <tr>
                <th class="p-3 border-b">Tiêu chí</th>
                <th class="p-3 border-b">Đàn Guitar</th>
                <th class="p-3 border-b">Đàn Ukulele</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700 text-gray-600 dark:text-gray-300">
              <tr>
                <td class="p-3 font-semibold">Số dây đàn</td>
                <td class="p-3">6 dây</td>
                <td class="p-3">4 dây</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold">Kích thước</td>
                <td class="p-3">Lớn, chiều dài khoảng 1 mét</td>
                <td class="p-3">Nhỏ gọn (khoảng 50 - 65 cm), dễ mang theo</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold">Âm sắc & Tính chất</td>
                <td class="p-3">Dải âm rộng, trầm hùng đến thanh thoát</td>
                <td class="p-3">Cao, tươi vui, ngộ nghĩnh, bay bổng</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Thực hành nhận diện và bấm phím:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Nhận diện tư thế ôm đàn và cách cầm miếng gảy (Pick) hoặc gảy bằng ngón tay cái và ngón trỏ.</li>
          <li>Tập bấm hợp âm Đô trưởng (C) trên đàn Ukulele: Dùng ngón áp út bấm vào ngăn 3 của dây số 1 (dây A).</li>
        </ol>
      </div>
    `,
    summary: "Đàn Guitar có 6 dây với âm vực phong phú, trong khi Đàn Ukulele có 4 dây nhỏ gọn, âm sắc rộn rã đặc trưng của quần đảo Hawaii. Cả hai đều là những nhạc cụ đệm hát tuyệt vời trong sinh hoạt học đường.",
    quizzes: [
      {
        question: "Đàn Guitar tiêu chuẩn gồm có bao nhiêu dây đàn?",
        options: ["4 dây", "5 dây", "6 dây", "8 dây"],
        correct: 2,
        explanation: "Cây đàn guitar tiêu chuẩn có 6 dây (được lên dây theo thứ tự E - A - D - G - B - E)."
      },
      {
        question: "Đàn Ukulele có nguồn gốc xuất xứ từ địa danh nổi tiếng nào?",
        options: ["Quần đảo Hawaii (Mỹ)", "Tây Ban Nha", "Ý", "Brazil"],
        correct: 0,
        explanation: "Ukulele là cây đàn dây 4 dây đặc trưng gắn liền với văn hóa âm nhạc Hawaii rực rỡ nắng gió."
      },
      {
        question: "Loại đàn guitar nào sử dụng dây kim loại cho âm thanh đanh thép, vang sáng, thường dùng trong nhạc Pop và đệm hát trẻ trung?",
        options: ["Guitar cổ điển (Classic)", "Guitar Acoustic", "Đàn Đáy", "Đàn Bầu"],
        correct: 1,
        explanation: "Guitar Acoustic dùng dây sắt/kim loại tạo âm vang to, sắc bén, rất phù hợp với phong cách đệm hát hiện đại."
      },
      {
        question: "Đàn Ukulele có mấy dây đàn và dây đàn thường làm bằng chất liệu gì?",
        options: [
          "6 dây làm bằng thép cứng",
          "4 dây làm bằng nylon mềm mại",
          "8 dây làm bằng tơ tằm",
          "3 dây làm bằng đồng thau"
        ],
        correct: 1,
        explanation: "Ukulele gồm 4 dây, thường làm từ sợi nylon tổng hợp mềm mại giúp người mới học bấm không bị đau tay."
      }
    ]
  },

  // CHỦ ĐỀ 5: CHÀO XUÂN
  {
    id: "bai-9",
    lessonNum: 9,
    topicNum: 5,
    topicName: "Chủ đề 5: Chào xuân",
    title: "Bài 9: Học hát bài hát ngày xuân & Thường thức: Nhạc sĩ Trần Hoàn và 'Một mùa xuân nho nhỏ'",
    tag: "Hát & Tác giả tác phẩm",
    objectives: [
      "Hát với cảm xúc tươi vui, rộn ràng sắc xuân của các bài ca chào đón mùa xuân mới.",
      "Tìm hiểu cuộc đời và sự nghiệp cống hiến to lớn của Nhạc sĩ Trần Hoàn.",
      "Cảm thụ tuyệt phẩm Một mùa xuân nho nhỏ (phổ thơ Thanh Hải).",
      "Hiểu ý nghĩa triết lý nhân sinh: Sống cống hiến âm thầm một mùa xuân nho nhỏ cho cuộc đời chung."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Cuộc đời và phong cách âm nhạc của Nhạc sĩ Trần Hoàn
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Nhạc sĩ Trần Hoàn</strong> (1928 - 2003), quê ở Quảng Trị, là một trong những cây đại thụ của nền âm nhạc cách mạng Việt Nam. Ông từng đảm nhiệm chức vụ Bộ trưởng Bộ Văn hóa - Thông tin và được trao tặng <strong>Giải thưởng Hồ Chí Minh về Văn học - Nghệ thuật</strong> (năm 2000).
        </p>
        <div class="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/50 my-3">
          <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Các tác phẩm tiêu biểu:</h5>
          <p class="text-sm text-gray-700 dark:text-gray-300">
            <em>Sơn nữ ca</em>, <em>Lời Bác dặn trước lúc đi xa</em>, <em>Giữa Mạc Tư Khoa nghe câu hò Nghệ Tĩnh</em>, <em>Thăm Bến Nhà Rồng</em>, <em>Một mùa xuân nho nhỏ</em>,... mộc mạc, thấm đượm chất liệu dân ca miền Trung chân chất nghĩa tình.
          </p>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. Tuyệt phẩm "Một mùa xuân nho nhỏ" (Thơ: Thanh Hải)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Tác phẩm được nhạc sĩ Trần Hoàn phổ nhạc từ bài thơ cùng tên của nhà thơ <strong>Thanh Hải</strong> viết trên giường bệnh vào tháng 11 năm 1980 - chỉ một tháng trước khi nhà thơ qua đời.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h5 class="font-bold text-amber-600 dark:text-amber-400 mb-1">Cảnh sắc thiên nhiên mùa xuân</h5>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              <em>"Mọc giữa dòng sông xanh, một bông hoa tím biếc. Ơi con chim chiền chiện, hót chi mà vang trời..."</em>. Bức tranh mùa xuân xứ Huế hữu tình, thanh khiết và đong đầy sức sống.
            </p>
          </div>
          <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h5 class="font-bold text-orange-600 dark:text-orange-400 mb-1">Khát vọng hiến dâng cao đẹp</h5>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              <em>"Một mùa xuân nho nhỏ, lặng lẽ dâng cho đời, dù là tuổi hai mươi, dù là khi tóc bạc..."</em>. Bài ca là ước nguyện khiêm nhường nhưng vô cùng cao đẹp về lối sống cống hiến cho quê hương.
            </p>
          </div>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Thực hành cảm thụ:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Lắng nghe trọn vẹn ca khúc <em>Một mùa xuân nho nhỏ</em> qua giọng hát của NSND Thu Hiền hoặc NSND Thái Bảo.</li>
          <li>Viết một đoạn văn ngắn 5-7 câu nêu cảm nghĩ về câu hát <em>"Một mùa xuân nho nhỏ, lặng lẽ dâng cho đời"</em>.</li>
        </ol>
      </div>
    `,
    summary: "Nhạc sĩ Trần Hoàn để lại gia tài âm nhạc đồ sộ đậm chất dân ca sâu lắng. Tác phẩm Một mùa xuân nho nhỏ là bản hòa ca bất tử về tình yêu cuộc sống và khát vọng cống hiến trọn vẹn cho đời.",
    quizzes: [
      {
        question: "Ca khúc 'Một mùa xuân nho nhỏ' của nhạc sĩ Trần Hoàn được phổ nhạc từ bài thơ của nhà thơ nào?",
        options: ["Tố Hữu", "Thanh Hải", "Xuân Diệu", "Huy Cận"],
        correct: 1,
        explanation: "Bài hát được nhạc sĩ Trần Hoàn phổ nhạc từ bài thơ xúc động của nhà thơ xứ Huế Thanh Hải sáng tác năm 1980."
      },
      {
        question: "Nhạc sĩ Trần Hoàn được Nhà nước trao tặng giải thưởng cao quý nào về văn học nghệ thuật?",
        options: [
          "Giải thưởng Hồ Chí Minh về Văn học - Nghệ thuật",
          "Giải thưởng Grammy Quốc tế",
          "Huân chương Nobel Hòa bình",
          "Huy chương bạc thể thao"
        ],
        correct: 0,
        explanation: "Năm 2000, Nhạc sĩ Trần Hoàn vinh dự được nhận Giải thưởng Hồ Chí Minh - giải thưởng vinh quang bậc nhất dành cho các văn nghệ sĩ Việt Nam."
      },
      {
        question: "Hình ảnh biểu tượng 'Một mùa xuân nho nhỏ' trong bài hát thể hiện điều gì?",
        options: [
          "Một bông hoa nhỏ trong chậu cảnh",
          "Mỗi con người hãy sống như một mùa xuân bé nhỏ, khiêm nhường cống hiến phần tốt đẹp nhất của mình cho xã hội",
          "Một kỳ nghỉ tết ngắn ngủi",
          "Một đứa trẻ chào đời vào mùa xuân"
        ],
        correct: 1,
        explanation: "Đó là ước nguyện sống có ích, hòa cái 'tôi' cá nhân nhỏ bé vào mùa xuân lớn lao bất tận của non sông đất nước."
      },
      {
        question: "Âm hưởng dân ca của vùng miền nào được thể hiện rõ nét nhất trong các sáng tác của nhạc sĩ Trần Hoàn?",
        options: [
          "Dân ca Nam Bộ",
          "Dân ca miền Trung (Bình Trị Thiên, xứ Huế)",
          "Dân ca Tây Bắc",
          "Dân ca Tây Nguyên"
        ],
        correct: 1,
        explanation: "Các sáng tác của Trần Hoàn mang đậm dấu ấn hò khoan, ca Huế và nét ngọt ngào, sâu nặng ân tình của miền Trung ruột thịt."
      }
    ]
  },

  // BÀI 10
  {
    id: "bai-10",
    lessonNum: 10,
    topicNum: 5,
    topicName: "Chủ đề 5: Chào xuân",
    title: "Bài 10: Lí thuyết: Dấu hóa (Dấu hóa theo khóa & Dấu hóa bất thường) & Đọc nhạc số 3",
    tag: "Nhạc lí & Đọc nhạc",
    objectives: [
      "Hiểu rõ khái niệm và công dụng của dấu hóa trong âm nhạc.",
      "Phân biệt 3 loại dấu hóa chính: Dấu thăng (#), Dấu giáng (b), Dấu bình (nốt tự nhiên).",
      "Phân biệt Dấu hóa theo khóa (hóa biểu) và Dấu hóa bất thường (xuất hiện trong ô nhịp).",
      "Đọc chuẩn xác cao độ Bài đọc nhạc số 3 có chứa dấu hóa bất thường."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Khái niệm và các loại Dấu hóa cơ bản
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Dấu hóa</strong> là ký hiệu dùng để làm thay đổi (tăng hoặc giảm) cao độ của các nốt nhạc tự nhiên lên hoặc xuống một khoảng cách nhất định (thường là nửa cung).
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
          <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/50 text-center">
            <span class="text-2xl font-black text-amber-700 dark:text-amber-400 block mb-1">♯</span>
            <h5 class="font-bold text-gray-900 dark:text-white">Dấu thăng (Sharp)</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Nâng cao độ nốt nhạc lên <strong>nửa cung (1/2 cung)</strong>.</p>
          </div>
          <div class="p-3 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800/50 text-center">
            <span class="text-2xl font-black text-orange-700 dark:text-orange-400 block mb-1">♭</span>
            <h5 class="font-bold text-gray-900 dark:text-white">Dấu giáng (Flat)</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Hạ cao độ nốt nhạc xuống <strong>nửa cung (1/2 cung)</strong>.</p>
          </div>
          <div class="p-3 bg-yellow-50 dark:bg-yellow-950/40 rounded-xl border border-yellow-200 dark:border-yellow-800/50 text-center">
            <span class="text-2xl font-black text-yellow-700 dark:text-yellow-400 block mb-1">♮</span>
            <h5 class="font-bold text-gray-900 dark:text-white">Dấu bình (Natural)</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Hủy bỏ tác dụng của dấu thăng hoặc dấu giáng, trả lại cao độ tự nhiên.</p>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. Dấu hóa theo khóa và Dấu hóa bất thường
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h5 class="font-bold text-amber-700 dark:text-amber-300 mb-1 flex items-center gap-2">
              <i class="fa-solid fa-key"></i> Dấu hóa theo khóa (Hóa biểu)
            </h5>
            <ul class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li>Đặt ở ngay đầu khuông nhạc (sau khóa nhạc).</li>
              <li>Có hiệu lực cho <strong>tất cả các nốt cùng tên</strong> trong toàn bộ bản nhạc (ở mọi quãng tám), trừ khi có dấu bình hủy bỏ.</li>
            </ul>
          </div>
          <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h5 class="font-bold text-orange-700 dark:text-orange-300 mb-1 flex items-center gap-2">
              <i class="fa-solid fa-bolt"></i> Dấu hóa bất thường (Accidental)
            </h5>
            <ul class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li>Được đặt ngay phía trước một nốt nhạc cụ thể nào đó.</li>
              <li>Chỉ có hiệu lực cho nốt nhạc đó và các nốt cùng tên <strong>trong phạm vi 1 ô nhịp đó</strong>, sang ô nhịp sau tự động hết hiệu lực.</li>
            </ul>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          3. Thực hành Bài đọc nhạc số 3
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Luyện đọc cao độ có nốt Son thăng (G#) hoặc Pha thăng (F#) bất thường giúp tai nghe cảm nhận được sự chuyển biến màu sắc hòa âm tinh tế.
          </p>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Bài tập củng cố:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Vẽ chính xác ký hiệu dấu thăng, dấu giáng, dấu bình trên khuông nhạc 5 dòng kẻ.</li>
          <li>Quan sát một bản nhạc có sẵn và khoanh tròn: màu đỏ cho dấu hóa theo khóa, màu xanh cho dấu hóa bất thường.</li>
        </ol>
      </div>
    `,
    summary: "Dấu thăng (#) nâng nửa cung, Dấu giáng (b) hạ nửa cung, Dấu bình (n) hoàn nguyên cao độ tự nhiên. Dấu hóa theo khóa có hiệu lực toàn bản nhạc, dấu hóa bất thường chỉ có giá trị trong một ô nhịp.",
    quizzes: [
      {
        question: "Dấu thăng (♯) có tác dụng gì đối với nốt nhạc đứng sau nó?",
        options: [
          "Hạ thấp cao độ nốt nhạc xuống nửa cung",
          "Nâng cao độ nốt nhạc lên nửa cung",
          "Giữ nguyên cao độ nốt nhạc",
          "Kéo dài trường độ gấp đôi"
        ],
        correct: 1,
        explanation: "Dấu thăng có tác dụng làm tăng (nâng) cao độ của nốt nhạc lên một khoảng cách bằng nửa cung."
      },
      {
        question: "Dấu hóa bất thường (đặt trước một nốt nhạc trong bản nhạc) có phạm vi hiệu lực như thế nào?",
        options: [
          "Có hiệu lực cho toàn bộ bản nhạc từ đầu đến cuối",
          "Chỉ có hiệu lực trong phạm vi ô nhịp chứa nó",
          "Có hiệu lực trong 5 ô nhịp liên tiếp",
          "Chỉ có hiệu lực cho nốt nhạc ở ô nhịp tiếp theo"
        ],
        correct: 1,
        explanation: "Dấu hóa bất thường chỉ duy trì tác dụng với các nốt cùng tên trong cùng một ô nhịp, khi qua vạch nhịp sẽ tự động vô hiệu hóa."
      },
      {
        question: "Dấu hóa nào có tác dụng hủy bỏ hiệu lực của dấu thăng hoặc dấu giáng?",
        options: ["Dấu lặng", "Dấu bình (♮)", "Dấu chấm dôi", "Dấu luyến"],
        correct: 1,
        explanation: "Dấu bình (Natural) làm mất tác dụng của dấu thăng hoặc dấu giáng trước đó, đưa nốt nhạc trở về cao độ tự nhiên nguyên bản."
      },
      {
        question: "Dấu hóa theo khóa (hóa biểu) được đặt ở vị trí nào trên khuông nhạc?",
        options: [
          "Ở cuối mỗi dòng nhạc",
          "Ở đầu khuông nhạc, ngay sau khóa nhạc",
          "Ở chính giữa ô nhịp thứ hai",
          "Dưới chân nốt nhạc cuối cùng"
        ],
        correct: 1,
        explanation: "Hóa biểu luôn được ghi ngay sau khóa nhạc ở đầu mỗi khuông nhạc và tác động đến mọi nốt cùng tên trong toàn bài."
      }
    ]
  },

  // CHỦ ĐỀ 6: ÂM NHẠC NƯỚC NGOÀI
  {
    id: "bai-11",
    lessonNum: 11,
    topicNum: 6,
    topicName: "Chủ đề 6: Âm nhạc nước ngoài",
    title: "Bài 11: Học hát bài hát Hát lên cho ngày mai",
    tag: "Âm nhạc thế giới",
    objectives: [
      "Hát đúng cao độ, trường độ và nhịp điệu của ca khúc quốc tế Hát lên cho ngày mai.",
      "Cảm nhận vẻ đẹp rộng mở, thông điệp hòa bình và tình hữu nghị bạn bè năm châu.",
      "Hát với hơi thở vững vàng, tư thế đàng hoàng, phát âm chuẩn xác ca từ tiếng Việt.",
      "Luyện tập thể hiện sắc thái phong phú từ êm dịu (p) đến bừng sáng mạnh mẽ (f)."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Giới thiệu ca khúc "Hát lên cho ngày mai"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Hát lên cho ngày mai</strong> là bài hát nước ngoài được đặt lời Việt mang đậm khát vọng của tuổi trẻ về một thế giới hòa bình, không còn chiến tranh, nghèo đói và dịch bệnh. Giai điệu bài hát mang phong cách thánh ca - hợp xướng trang nghiêm, giai điệu đẹp và trong trẻo.
        </p>
        <div class="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/50 my-3">
          <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-1">Ý nghĩa nhân văn cao cả</h5>
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Tiếng hát kết nối các dân tộc, màu da, văn hóa khác nhau thành một đại gia đình nhân loại gắn kết và đầy tình bác ái.
          </p>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. Kỹ thuật thể hiện ca khúc phong cách phương Tây
        </h4>
        <ul class="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li><strong>Hát legato mềm mại:</strong> Giữ trường độ nốt đầy đặn, không giật cục, liên kết các âm tiết như dòng chảy êm ả.</li>
          <li><strong>Mở rộng vòm họng kiểu thanh nhạc cổ điển:</strong> Nâng hàm ếch mềm phía sau để âm thanh có độ vang vọng tự nhiên.</li>
          <li><strong>Phối hợp sắc thái:</strong> Đoạn đầu hát nhẹ nhàng (Piano - <em>p</em>), đoạn sau mở toang âm lượng đạt tới sắc thái mạnh mẽ (Forte - <em>f</em>).</li>
        </ul>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Thực hành thanh nhạc:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Luyện thang âm nguyên cung và bán cung theo nguyên âm <em>Ah</em>.</li>
          <li>Tập hát kết hợp cử chỉ vươn tay sang hai bên thể hiện tình bạn hữu nghị quốc tế.</li>
        </ol>
      </div>
    `,
    summary: "Ca khúc Hát lên cho ngày mai mở rộng tầm nhìn âm nhạc thế giới cho học sinh, lan tỏa khát vọng hòa bình và rèn luyện kỹ thuật hát liền giọng legato phong cách cổ điển phương Tây.",
    quizzes: [
      {
        question: "Thông điệp chính của ca khúc 'Hát lên cho ngày mai' hướng tới điều gì?",
        options: [
          "Tình cảm gia đình ấm cúng",
          "Khát vọng hòa bình, tình hữu nghị và niềm tin vào tương lai tươi sáng của nhân loại",
          "Tình yêu thiên nhiên hoang dã",
          "Sự cạnh tranh trong học tập"
        ],
        correct: 1,
        explanation: "Bài hát là lời hiệu triệu thanh thiếu niên toàn cầu cùng cất cao tiếng hát vì hòa bình, bác ái và tương lai ngày mai."
      },
      {
        question: "Kỹ thuật hát liên kết các nốt mượt mà, không đứt đoạn trong âm nhạc được gọi là gì?",
        options: ["Staccato (Hát nảy)", "Legato (Hát liền tiếng)", "Marcato (Hát nhấn)", "Glissando (Vuốt nốt)"],
        correct: 1,
        explanation: "Legato là thuật ngữ chỉ cách hát liền tiếng, êm ái, chuyển đổi giữa các nốt một cách trôi chảy và mượt mà."
      },
      {
        question: "Ký hiệu âm nhạc 'Forte' viết tắt là 'f' chỉ sắc thái âm thanh như thế nào?",
        options: ["Hát rất nhỏ", "Hát vừa phải", "Hát to, mạnh mẽ", "Hát nhanh dần"],
        correct: 2,
        explanation: "Ký hiệu 'f' (Forte) nghĩa là hát to, mạnh; ngược lại với 'p' (Piano) nghĩa là hát nhỏ, êm."
      },
      {
        question: "Khi thể hiện các tác phẩm thanh nhạc phương Tây trang nghiêm, người hát cần duy trì tư thế như thế nào?",
        options: [
          "Ngồi gù lưng cúi mặt xuống bàn",
          "Đứng thẳng, vai thả lỏng tự nhiên, ngực mở rộng, hai chân vững chãi",
          "Vừa đi lại nhảy nhót tự do",
          "Bắt chéo chân nằm ngửa"
        ],
        correct: 1,
        explanation: "Tư thế đứng thẳng thắn, ngực mở và vai thả lỏng giúp luồng khí lưu thông thông suốt từ phổi lên vòm họng."
      }
    ]
  },

  // BÀI 12
  {
    id: "bai-12",
    lessonNum: 12,
    topicNum: 6,
    topicName: "Chủ đề 6: Âm nhạc nước ngoài",
    title: "Bài 12: Lí thuyết âm nhạc: Gam thứ, Giọng thứ, Giọng La thứ & Đọc nhạc số 4",
    tag: "Nhạc lí & Đọc nhạc",
    objectives: [
      "Hiểu định nghĩa gam thứ tự nhiên và nắm chắc công thức cung/nửa cung trong thang âm thứ.",
      "Nhận biết Giọng La thứ (A minor) - giọng thứ cơ bản không có dấu hóa ở hóa biểu.",
      "So sánh sự đối lập về màu sắc cảm xúc giữa Giọng trưởng (vui tươi, sáng sủa) và Giọng thứ (trầm lắng, da diết).",
      "Đọc chuẩn xác cao độ và tiết tấu Bài đọc nhạc số 4 ở giọng La thứ."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Gam thứ (Minor Scale) và công thức cấu tạo
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Gam thứ tự nhiên</strong> là hệ thống 7 bậc âm được sắp xếp liền bậc bắt đầu từ âm chủ bậc I đến âm chủ quãng 8 với trật tự cung và nửa cung cố định.
        </p>
        <div class="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/60 my-3">
          <h5 class="font-bold text-amber-900 dark:text-amber-200 mb-2">Công thức Gam thứ tự nhiên:</h5>
          <div class="flex items-center justify-between text-center overflow-x-auto py-2 font-mono text-sm sm:text-base">
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">I</span>
            <span class="text-amber-600 font-bold">&rarr; 1C &rarr;</span>
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">II</span>
            <span class="text-red-500 font-bold">&rarr; 1/2C &rarr;</span>
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">III</span>
            <span class="text-amber-600 font-bold">&rarr; 1C &rarr;</span>
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">IV</span>
            <span class="text-amber-600 font-bold">&rarr; 1C &rarr;</span>
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">V</span>
            <span class="text-red-500 font-bold">&rarr; 1/2C &rarr;</span>
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">VI</span>
            <span class="text-amber-600 font-bold">&rarr; 1C &rarr;</span>
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">VII</span>
            <span class="text-amber-600 font-bold">&rarr; 1C &rarr;</span>
            <span class="px-2 py-1 bg-white dark:bg-gray-800 rounded shadow-sm border font-bold">(I)</span>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center">
            Quy luật: <strong>1 - 1/2 - 1 - 1 - 1/2 - 1 - 1</strong> (Nửa cung nằm giữa bậc II - III và bậc V - VI).
          </p>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. Giọng La thứ (A minor)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Khi gam thứ tự nhiên có âm chủ là nốt <strong>La (A)</strong>, ta gọi đó là <strong>Giọng La thứ</strong>.
          Các nốt: <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-amber-600 dark:text-amber-400 font-bold">A - B - C - D - E - F - G - A</code>.
        </p>
        <ul class="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li><strong>Âm chủ:</strong> Nốt La (A).</li>
          <li><strong>Hóa biểu:</strong> Không có dấu thăng (#) hay dấu giáng (b) nào (tương tự như giọng Đô trưởng). Vì thế Giọng Đô trưởng và Giọng La thứ được gọi là <strong>Cặp giọng song song</strong>.</li>
          <li><strong>Tính chất cảm xúc:</strong> Kín đáo, dịu dàng, u hoài hoặc da diết sâu lắng.</li>
        </ul>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          3. Thực hành Bài đọc nhạc số 4
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Bài đọc nhạc số 4 viết ở giọng La thứ, nhịp 3/4. Giai điệu trầm ấm, kết thúc tại nốt La tạo cảm giác ổn định, trọn vẹn:
          </p>
          <div class="p-3 bg-amber-50 dark:bg-amber-950/20 rounded font-mono text-xs sm:text-sm text-amber-800 dark:text-amber-300">
            | La - Đô Mi | Rê - Pha - | Mi - Son Si | La - - - |
          </div>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Luyện tập nhạc lí:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>So sánh bảng công thức cung của Gam Trưởng (1 - 1 - 1/2...) và Gam Thứ (1 - 1/2 - 1...).</li>
          <li>Xướng âm Bài đọc nhạc số 4 theo đúng nhịp gõ 3/4 (Mạnh - Nhẹ - Nhẹ).</li>
        </ol>
      </div>
    `,
    summary: "Gam thứ tự nhiên có cấu trúc 1 - 1/2 - 1 - 1 - 1/2 - 1 - 1. Giọng La thứ có âm chủ là nốt La và không có hóa biểu. Cặp giọng Đô trưởng và La thứ là hai giọng song song có chung hóa biểu.",
    quizzes: [
      {
        question: "Khoảng cách nửa cung (1/2 cung) trong gam thứ tự nhiên nằm ở giữa các bậc âm nào?",
        options: [
          "Bậc I - II và bậc IV - V",
          "Bậc II - III và bậc V - VI",
          "Bậc III - IV và bậc VII - I",
          "Bậc IV - V và bậc VI - VII"
        ],
        correct: 1,
        explanation: "Trong thang âm thứ tự nhiên, hai khoảng cách 1/2 cung luôn nằm giữa bậc II - III và bậc V - VI."
      },
      {
        question: "Cặp giọng nào sau đây là Cặp giọng song song (có chung hóa biểu không có dấu thăng giáng)?",
        options: [
          "Son trưởng và Rê thứ",
          "Đô trưởng và La thứ",
          "Pha trưởng và Rê trưởng",
          "La trưởng và Mi thứ"
        ],
        correct: 1,
        explanation: "Giọng Đô trưởng (C major) và Giọng La thứ (A minor) có cùng một hóa biểu (không có dấu hóa) nên là cặp giọng song song."
      },
      {
        question: "Màu sắc cảm xúc đặc trưng của các tác phẩm âm nhạc viết ở Giọng thứ thường là gì?",
        options: [
          "Hùng tráng, rộn rã, chói lòa",
          "Trầm lắng, dịu êm, u uất hoặc da diết suy tư",
          "Hài hước, cười cợt",
          "Kịch tính, chói gắt"
        ],
        correct: 1,
        explanation: "Các giọng thứ (minor key) thường mang tính chất biểu cảm nội tâm, trữ tình, man mác buồn hoặc sâu lắng."
      },
      {
        question: "Âm chủ (bậc I) của giọng La thứ là nốt nhạc nào?",
        options: ["Nốt Đô", "Nốt La", "Nốt Mi", "Nốt Pha"],
        correct: 1,
        explanation: "Âm chủ của Giọng La thứ chính là nốt La (A), nốt bắt đầu và kết thúc định hình tính chất của giọng."
      }
    ]
  },

  // CHỦ ĐỀ 7: GIAI ĐIỆU QUÊ HƯƠNG
  {
    id: "bai-13",
    lessonNum: 13,
    topicNum: 7,
    topicName: "Chủ đề 7: Giai điệu quê hương",
    title: "Bài 13: Học hát bài hát Soi bóng bên hồ",
    tag: "Hát & Dân ca cách điệu",
    objectives: [
      "Hát đúng giai điệu duyên dáng, mượt mà của ca khúc Soi bóng bên hồ.",
      "Thể hiện tình yêu cảnh sắc thiên nhiên non nước thanh bình của làng quê Việt Nam.",
      "Nắm vững kỹ thuật luyến láy mang âm hưởng ca trù / dân ca đồng bằng Bắc Bộ.",
      "Thực hiện hát kết hợp vận động phụ họa nhẹ nhàng theo làn điệu."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Vẻ đẹp bài hát "Soi bóng bên hồ"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Bài hát <strong>Soi bóng bên hồ</strong> mở ra một không gian làng quê êm đềm với mặt hồ phẳng lặng như gương soi bóng rặng tre xanh, mái đình cổ kính và cánh cò bay lả dập dờn. Tác phẩm mang âm hưởng dân ca đồng bằng Bắc Bộ, kết hợp hài hòa giữa nét cổ kính truyền thống và sự mới mẻ của ca khúc hiện đại.
        </p>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. Hướng dẫn kỹ thuật luyến láy dân gian
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-3">
          <ul class="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Kỹ thuật nảy âm (nấc nhẹ):</strong> Nhả chữ mềm, không dùng lực cơ cổ quá mạnh, giữ hơi ở bụng để tạo độ ngân rung tự nhiên.</li>
            <li><strong>Luyến hai và ba nốt:</strong> Trong bài có những chỗ luyến từ nốt thấp lên cao rồi rơi nhẹ xuống, cần giữ khẩu hình ổn định để không bị phô.</li>
            <li><strong>Sắc thái thanh thoát:</strong> Hát với tâm thế an nhiên, thư thái, tưởng tượng như đang ngắm nhìn mặt nước hồ thu trong vắt.</li>
          </ul>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Thực hành trên lớp:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Luyện tập hát những nốt có dấu luyến trong bài bằng nguyên âm <em>Ơi - À - Ơi</em>.</li>
          <li>Biểu diễn theo hình thức tốp ca kết hợp múa xòe quạt hoặc nón lá dân gian.</li>
        </ol>
      </div>
    `,
    summary: "Soi bóng bên hồ là bài hát trữ tình mang âm hưởng dân ca Bắc Bộ mộc mạc, giúp học sinh phát triển kỹ năng luyến láy tinh tế và bồi đắp tình cảm yêu mến cảnh sắc thanh bình của quê hương.",
    quizzes: [
      {
        question: "Bài hát 'Soi bóng bên hồ' mang đậm âm hưởng dân ca của vùng miền nào?",
        options: [
          "Dân ca Tây Nguyên",
          "Dân ca đồng bằng Bắc Bộ",
          "Dân ca Khmer Nam Bộ",
          "Hò sông nước miền Tây"
        ],
        correct: 1,
        explanation: "Giai điệu bài hát ngọt ngào, mềm mại, mang đậm dấu ấn và màu sắc giai điệu dân ca đồng bằng Bắc Bộ."
      },
      {
        question: "Cảnh sắc thiên nhiên được khắc họa chủ yếu trong ca khúc là gì?",
        options: [
          "Cảnh phố thị ồn ào với những tòa nhà chọc trời",
          "Cảnh làng quê yên bình bên mặt hồ trong xanh, bóng tre nghiêng soi",
          "Cảnh sa mạc khô cằn nắng gió",
          "Cảnh biển đêm sóng vỗ gầm thét"
        ],
        correct: 1,
        explanation: "Bài hát tái hiện bức tranh làng quê thanh bình, tĩnh lặng và thơ mộng bên bờ hồ xanh biếc."
      },
      {
        question: "Khi thể hiện các câu hát có luyến âm trong ca khúc dân gian, học sinh cần chú ý điều gì?",
        options: [
          "Hát thật to và ngắt gãy từng nốt",
          "Chuyển hơi mềm mại, không đổi khẩu hình đột ngột để âm thanh liền mạch, nuột nà",
          "Bỏ qua các nốt luyến để hát cho nhanh",
          "Chỉ đọc lời mà không ngân cao độ"
        ],
        correct: 1,
        explanation: "Luyến âm đòi hỏi sự mềm mại của cơ vòm họng và luồng hơi trơn tru để các nốt nhạc hòa nhập liên tục."
      },
      {
        question: "Đạo cụ biểu diễn nào rất phù hợp khi phụ họa cho bài hát 'Soi bóng bên hồ'?",
        options: ["Gậy bóng chày", "Nón lá hoặc quạt nan truyền thống", "Kính râm hiphop", "Găng tay đấm bốc"],
        correct: 1,
        explanation: "Nón lá và quạt giấy truyền thống là những đạo cụ múa dân gian tôn thêm nét duyên dáng, thanh thoát của ca khúc."
      }
    ]
  },

  // BÀI 14
  {
    id: "bai-14",
    lessonNum: 14,
    topicNum: 7,
    topicName: "Chủ đề 7: Giai điệu quê hương",
    title: "Bài 14: Thường thức: Đàn Nguyệt và Đàn Tính & Thực hành nhạc cụ",
    tag: "Nhạc cụ cổ truyền",
    objectives: [
      "Hiểu rõ cấu tạo, nguồn gốc và âm sắc của Đàn Nguyệt (Đàn Kìm).",
      "Khám phá Đàn Tính (Tính tẩu) - nhạc cụ linh hồn trong hát Then của đồng bào dân tộc Tày, Nùng, Thái.",
      "Phân biệt đặc trưng âm thanh và môi trường diễn xướng của hai loại nhạc cụ cổ truyền độc đáo.",
      "Thực hành gõ đệm tiết tấu hoặc diễn tấu nét hoa mỹ trên nhạc cụ gõ dân tộc."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Tìm hiểu Đàn Nguyệt (Đàn Kìm)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Đàn Nguyệt</strong> (miền Nam gọi là <strong>Đàn Kìm</strong>) là nhạc cụ dây gảy truyền thống vô cùng quan trọng của người Việt. Mặt đàn tròn như vầng trăng rằm nên có tên gọi là "Nguyệt".
        </p>
        <div class="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/50 my-3 space-y-2">
          <ul class="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li><strong>Cấu tạo:</strong> Thùng đàn hình tròn dẹt, cần đàn dài có gắn các phím bấm rất cao, đàn có <strong>2 dây</strong> bằng tơ hoặc nilon.</li>
            <li><strong>Kỹ thuật ngón:</strong> Nhờ phím đàn gắn rất cao nên ngón tay có thể nhấn, vuốt, rung, tạo nên những nốt luyến láy mềm mại, bi ai hoặc linh hoạt kỳ diệu.</li>
            <li><strong>Vai trò:</strong> Là linh hồn trong <strong>Hát Văn (Chầu văn)</strong>, Đờn ca tài tử Nam Bộ, Cải lương và dàn nhạc Bát âm truyền thống.</li>
          </ul>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. Tìm hiểu Đàn Tính (Tính tẩu)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Đàn Tính</strong> (tiếng Tày gọi là <em>Tính tẩu</em>, nghĩa là đàn làm từ quả bầu) là nhạc cụ dây gảy gắn liền với đời sống tâm linh và văn hóa của đồng bào các dân tộc <strong>Tày, Nùng, Thái</strong> ở miền núi phía Bắc Việt Nam.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h5 class="font-bold text-amber-700 dark:text-amber-400 mb-1">Cấu tạo mộc mạc từ thiên nhiên</h5>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              Thùng đàn làm bằng <strong>nửa quả bầu khô</strong> gọt phẳng, mặt đàn bịt bằng gỗ cây ngô đồng, cần đàn bằng gỗ dẻo dai dài gần 1 mét, đàn có 2 hoặc 3 dây.
            </p>
          </div>
          <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h5 class="font-bold text-orange-700 dark:text-orange-400 mb-1">Gắn liền với Di sản Hát Then</h5>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              Tiếng đàn Tính giòn giã hòa cùng tiếng chùm xóc nhạc (chùm chuông) lúc trầm bổng, lúc réo rắt như tiếng suối ngàn, đưa đường dẫn lối trong các nghi lễ Then cầu an, cầu mùa.
            </p>
          </div>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Trải nghiệm âm sắc:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Nghe một trích đoạn Hát Chầu Văn (Đàn Nguyệt biểu diễn) và một trích đoạn Hát Then (Đàn Tính biểu diễn).</li>
          <li>Mô tả sự khác biệt về màu sắc âm thanh giữa độ nhấn rung sâu của Đàn Nguyệt và sự trong trẻo, mộc mạc của Đàn Tính.</li>
        </ol>
      </div>
    `,
    summary: "Đàn Nguyệt với phím cao độc đáo là biểu tượng của âm nhạc dân gian Kinh Bắc và Đờn ca tài tử. Đàn Tính với thùng đàn quả bầu là nhạc cụ chủ chốt trong di sản văn hóa Hát Then của đồng bào Tày, Nùng.",
    quizzes: [
      {
        question: "Đàn Nguyệt có hình dáng thùng đàn giống hình gì và có mấy dây đàn?",
        options: [
          "Thùng đàn hình quả lê dẹt, có 4 dây",
          "Thùng đàn tròn như mặt trăng rằm, có 2 dây",
          "Thùng đàn hình chữ nhật, có 16 dây",
          "Thùng đàn hình thoi, có 1 dây duy nhất"
        ],
        correct: 1,
        explanation: "Đàn Nguyệt có hộp cộng hưởng hình tròn xoe như mặt trăng rằm và lắp 2 dây đàn."
      },
      {
        question: "Thùng cộng hưởng của cây Đàn Tính (Tính tẩu) trong văn hóa người Tày, Nùng được làm từ nguyên liệu gì?",
        options: [
          "Nửa quả bầu khô gọt phẳng",
          "Ống nứa già",
          "Kim loại nhôm đúc",
          "Gỗ sồi nguyên khối nhập khẩu"
        ],
        correct: 0,
        explanation: "Thùng đàn Tính được làm khéo léo từ nửa quả bầu già phơi khô, tạo nên âm sắc mộc mạc đặc trưng của núi rừng."
      },
      {
        question: "Cây Đàn Nguyệt giữ vai trò là nhạc cụ chủ đạo trong thể loại âm nhạc tâm linh truyền thống nào?",
        options: ["Hát Then", "Hát Văn (Chầu văn)", "Hát Xoan", "Nhã nhạc cung đình Huế"],
        correct: 1,
        explanation: "Đàn Nguyệt với kỹ thuật nhấn vuốt điêu luyện là nhạc cụ dẫn dắt không thể thiếu trong các buổi hát Văn/Chầu văn."
      },
      {
        question: "Nghệ thuật trình diễn nào sử dụng Đàn Tính đã được UNESCO công nhận là Di sản văn hóa phi vật thể của nhân loại năm 2019?",
        options: [
          "Thực hành Then của người Tày, Nùng, Thái",
          "Múa xòe Thái",
          "Hát Quan họ Bắc Ninh",
          "Ca trù"
        ],
        correct: 0,
        explanation: "Năm 2019, UNESCO đã ghi danh Thực hành Then của người Tày, Nùng, Thái ở Việt Nam là Di sản văn hóa phi vật thể của nhân loại."
      }
    ]
  },

  // CHỦ ĐỀ 8: NHỊP ĐIỆU MÙA HÈ
  {
    id: "bai-15",
    lessonNum: 15,
    topicNum: 8,
    topicName: "Chủ đề 8: Nhịp điệu mùa hè",
    title: "Bài 15: Học hát Xôn xao mùa hè & Thường thức: Nhạc sĩ Frédéric Chopin",
    tag: "Hát & Tác gia thế giới",
    objectives: [
      "Hát đúng giai điệu tươi sáng, tốc độ nhanh rộn rã của bài hát Xôn xao mùa hè.",
      "Tìm hiểu cuộc đời và di sản nghệ thuật vĩ đại của nhà soạn nhạc Ba Lan Frédéric Chopin.",
      "Hiểu vì sao Chopin được mệnh danh là 'Nhà thơ của cây đàn piano' (Poet of the Piano).",
      "Lắng nghe và cảm thụ các tác phẩm kinh điển: Nocturne (Khúc nhạc đêm), Polonaise hoặc Waltz."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Học hát bài hát "Xôn xao mùa hè"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Bài hát <strong>Xôn xao mùa hè</strong> khắc họa âm vang rộn ràng của tiếng ve kêu, sắc đỏ rực của hoa phượng vĩ và niềm hân hoan của học sinh đón chào kỳ nghỉ hè sau một năm nỗ lực học tập chăm chỉ. Giai điệu nhảy múa, nhịp điệu nhanh đòi hỏi người hát nhả chữ dứt khoát và tươi vui.
        </p>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. Frédéric Chopin - "Nhà thơ của cây đàn piano"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Frédéric Chopin</strong> (1810 - 1849) là nhà soạn nhạc và nghệ sĩ dương cầm thiên tài người Ba Lan, một trong những đại diện xuất sắc nhất của <strong>Chủ nghĩa Lãng mạn</strong> trong âm nhạc cổ điển phương Tây.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div class="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/50">
            <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-1">Đặc điểm sự nghiệp</h5>
            <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li>Hầu như toàn bộ tác phẩm của ông đều viết cho cây đàn piano (độc tấu, hòa tấu).</li>
              <li>Âm nhạc của ông giàu chất thơ, tinh tế, bay bổng nhưng chất chứa nỗi niềm nhớ thương quê hương Ba Lan da diết.</li>
              <li>Trái tim của ông sau khi qua đời được di nguyện đưa về yên nghỉ tại quê nhà Warsaw (Ba Lan).</li>
            </ul>
          </div>
          <div class="p-4 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800/50">
            <h5 class="font-bold text-orange-800 dark:text-orange-300 mb-1">Các thể loại âm nhạc đỉnh cao</h5>
            <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li><strong>Nocturne (Dạ khúc):</strong> Giai điệu mộng mơ, êm dịu như đêm trăng huyền ảo (tiêu biểu: <em>Nocturne Op.9 No.2</em>).</li>
              <li><strong>Polonaise & Mazurka:</strong> Điệu nhảy truyền thống Ba Lan hùng dũng, thể hiện tinh thần yêu nước quật cường.</li>
              <li><strong>Waltz & Étude:</strong> Các khúc luyện điêu luyện và điệu valse quý phái.</li>
            </ul>
          </div>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Thực hành cảm thụ:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Hát bài <em>Xôn xao mùa hè</em> kết hợp gõ đệm phách bằng song loan hoặc xúc xắc (maracas).</li>
          <li>Nhắm mắt lắng nghe tuyệt phẩm <em>Nocturne in E-flat major, Op.9 No.2</em> của Chopin và nêu cảm nhận về sự dịu dàng của giai điệu.</li>
        </ol>
      </div>
    `,
    summary: "Xôn xao mùa hè mang lại không khí vui tươi rạng rỡ của tuổi học trò. Nhà soạn nhạc Ba Lan Frédéric Chopin - 'Nhà thơ của cây đàn piano' đã bất tử hóa tình yêu quê hương qua những bản Nocturne và Polonaise tuyệt mỹ.",
    quizzes: [
      {
        question: "Nhà soạn nhạc Frédéric Chopin là thiên tài âm nhạc đến từ quốc gia nào?",
        options: ["Nước Pháp", "Nước Ba Lan", "Nước Đức", "Nước Nga"],
        correct: 1,
        explanation: "Chopin sinh ra tại Ba Lan, dù sau này sống và hoạt động tại Paris nhưng tâm hồn ông luôn hướng về đất mẹ Ba Lan."
      },
      {
        question: "Frédéric Chopin được thế giới trân trọng tôn vinh bằng danh xưng nghệ thuật nào?",
        options: [
          "Vua của nhạc kịch Opera",
          "Nhà thơ của cây đàn piano (Poet of the Piano)",
          "Người khổng lồ của nhạc giao hưởng",
          "Ông hoàng khiêu vũ Valse"
        ],
        correct: 1,
        explanation: "Nhờ phong cách sáng tác tinh tế, giàu nhạc tính và lãng mạn vô song cho cây đàn piano, ông được mệnh danh là 'Nhà thơ của cây đàn piano'."
      },
      {
        question: "Thể loại 'Nocturne' nổi tiếng trong âm nhạc của Chopin dịch sang tiếng Việt có nghĩa là gì?",
        options: ["Hành khúc chiến thắng", "Dạ khúc (Khúc nhạc đêm)", "Vũ khúc cung đình", "Khúc tưởng niệm"],
        correct: 1,
        explanation: "Nocturne bắt nguồn từ tiếng Pháp có nghĩa là 'Dạ khúc' hay 'Bản nhạc đêm', mang tính chất mơ màng, trữ tình, huyền ảo."
      },
      {
        question: "Cây đàn nào là nhạc cụ chủ chốt trong hầu hết tất cả các sáng tác của Frédéric Chopin?",
        options: ["Đàn Violon", "Đàn Đáy", "Đàn Piano (Dương cầm)", "Đàn Organ nhà thờ"],
        correct: 2,
        explanation: "Gần như toàn bộ gia tài sáng tác của Chopin đều gắn chặt với cây đàn piano, nâng tầm kỹ thuật và biểu cảm của nhạc cụ này lên đỉnh cao thế giới."
      }
    ]
  },

  // BÀI 16
  {
    id: "bai-16",
    lessonNum: 16,
    topicNum: 8,
    topicName: "Chủ đề 8: Nhịp điệu mùa hè",
    title: "Bài 16: Ôn tập & Dự án âm nhạc: Ngày hội âm nhạc học đường Chào hè",
    tag: "Dự án & Biểu diễn",
    objectives: [
      "Hệ thống hóa toàn bộ kiến thức nhạc lí cốt lõi đã học trong chương trình Âm nhạc 8 (Gam trưởng/thứ, nhịp 3/8, dấu hóa).",
      "Ôn tập và trình diễn thành thục các bài hát, bài đọc nhạc tiêu biểu.",
      "Lập kế hoạch và phân công chuẩn bị Dự án âm nhạc: 'Ngày hội âm nhạc học đường Chào hè'.",
      "Hình thành kỹ năng làm việc nhóm, kỹ năng thuyết trình và tự tin thể hiện tài năng nghệ thuật."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          1. Tổng kết kiến thức trọng tâm Âm nhạc lớp 8
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div class="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/50">
            <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Hệ thống Nhạc lí & Thang âm</h5>
            <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li><strong>Gam trưởng & Giọng Đô trưởng:</strong> Công thức 1 - 1 - 1/2 - 1 - 1 - 1 - 1/2, không dấu hóa biểu.</li>
              <li><strong>Gam thứ & Giọng La thứ:</strong> Công thức 1 - 1/2 - 1 - 1 - 1/2 - 1 - 1, giọng song song với Đô trưởng.</li>
              <li><strong>Nhịp 3/8:</strong> Nhịp 3 phách, mỗi phách 1 móc đơn (Mạnh - Nhẹ - Nhẹ).</li>
              <li><strong>Dấu hóa:</strong> Thăng (#), Giáng (b), Bình (n); Dấu theo khóa và Dấu bất thường.</li>
            </ul>
          </div>
          <div class="p-4 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800/50">
            <h5 class="font-bold text-orange-800 dark:text-orange-300 mb-2">Thường thức âm nhạc & Nhạc cụ</h5>
            <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li><strong>Di sản dân gian:</strong> Quan họ Bắc Ninh (Vang - Rền - Nền - Nảy), Đàn Nguyệt, Đàn Tính (Hát Then).</li>
              <li><strong>Nhạc cụ phương Tây:</strong> Guitar (6 dây), Ukulele (4 dây), thể loại Hợp xướng (SATB).</li>
              <li><strong>Tác gia tiêu biểu:</strong> Nhạc sĩ Trần Hoàn (Việt Nam) và Nhạc sĩ Frédéric Chopin (Ba Lan).</li>
            </ul>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
          2. Hướng dẫn xây dựng Dự án "Ngày hội âm nhạc học đường Chào hè"
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-3">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Các tổ nhóm thực hiện xây dựng một chương trình biểu diễn văn nghệ mini kéo dài 10-15 phút theo các bước:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs sm:text-sm">
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <strong class="text-amber-600 block mb-1">Bước 1: Lên ý tưởng</strong>
              Chọn chủ đề (Tri ân thầy cô, Tình bạn tuổi học trò, Tình yêu biển đảo hoặc Âm vang mùa hè).
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <strong class="text-amber-600 block mb-1">Bước 2: Phân công</strong>
              Chia nhóm: MC dẫn chương trình, Hát đơn ca/tốp ca, Đội nhạc cụ (Recorder/Ukulele), Đội múa phụ họa.
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <strong class="text-amber-600 block mb-1">Bước 3: Luyện tập</strong>
              Tập khớp tiết mục, chỉnh sửa nhịp phách, trang phục và đạo cụ phù hợp với từng bài hát.
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <strong class="text-amber-600 block mb-1">Bước 4: Công diễn</strong>
              Biểu diễn báo cáo trước lớp, chấm điểm đồng đẳng và chia sẻ cảm nghĩ, kỷ niệm năm học.
            </div>
          </div>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
        <h5 class="font-bold text-amber-800 dark:text-amber-300 mb-2">Nhiệm vụ dự án học tập:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Mỗi nhóm hoàn thiện bản kế hoạch biểu diễn (Poster giới thiệu và danh sách tiết mục).</li>
          <li>Tham gia làm bài kiểm tra trắc nghiệm tổng hợp toàn bộ 8 chủ đề của chương trình Âm nhạc 8.</li>
        </ol>
      </div>
    `,
    summary: "Bài 16 đúc kết toàn diện hành trình học tập Âm nhạc lớp 8, tạo sân chơi biểu diễn nghệ thuật năng động qua dự án Ngày hội âm nhạc Chào hè, giúp học sinh phát huy tối đa tính sáng tạo và gắn kết bạn bè.",
    quizzes: [
      {
        question: "Cặp giọng Đô trưởng (C major) và La thứ (A minor) có mối quan hệ gì trong âm nhạc?",
        options: [
          "Là hai giọng cùng tên",
          "Là cặp giọng song song (có cùng hóa biểu)",
          "Là hai giọng hoàn toàn đối lập không có liên quan",
          "Là hai giọng chỉ dùng cho nhạc jazz"
        ],
        correct: 1,
        explanation: "Hai giọng có cùng hóa biểu nhưng khác nhau về âm chủ (Đô trưởng và La thứ đều không có dấu hóa biểu) được gọi là cặp giọng song song."
      },
      {
        question: "Bước đầu tiên và quan trọng nhất khi tổ chức một dự án âm nhạc học đường là gì?",
        options: [
          "May trang phục biểu diễn đắt tiền",
          "Xác định chủ đề, mục tiêu và lên kịch bản chương trình",
          "Mua thật nhiều loa đài công suất lớn",
          "Tự ý biểu diễn không cần tập dượt"
        ],
        correct: 1,
        explanation: "Việc xác định rõ chủ đề, thông điệp và kịch bản chương trình là nền tảng cốt lõi giúp dự án đi đúng hướng và thành công."
      },
      {
        question: "Để đánh giá một tiết mục biểu diễn âm nhạc học tập thành công, yếu tố nào cần được ưu tiên?",
        options: [
          "Kỹ thuật chính xác, sự tự tin, cảm xúc chân thành và tinh thần hợp tác đoàn kết",
          "Chỉ cần trang phục thật lộng lẫy",
          "Bật nhạc nền thật to để che tiếng hát",
          "Biểu diễn càng lâu càng tốt"
        ],
        correct: 0,
        explanation: "Sự chuẩn xác về giai điệu nhịp phách, sự tự tin, cảm xúc tự nhiên và tinh thần đồng đội là các tiêu chí đánh giá giá trị giáo dục âm nhạc."
      },
      {
        question: "Sau khi hoàn thành chương trình Âm nhạc 8, học sinh đạt được những năng lực cốt lõi nào?",
        options: [
          "Chỉ biết đọc nốt nhạc trên giấy",
          "Năng lực thể hiện âm nhạc (hát, nhạc cụ), Cảm thụ & Hiểu biết âm nhạc, và Ứng dụng sáng tạo âm nhạc",
          "Trở thành ca sĩ chuyên nghiệp ngay lập tức",
          "Chỉ nghe mà không biết phân tích bài hát"
        ],
        correct: 1,
        explanation: "Chương trình GDPT 2018 môn Âm nhạc hướng tới 3 thành phần năng lực then chốt: Thể hiện âm nhạc, Cảm thụ & Hiểu biết, và Ứng dụng - Sáng tạo."
      }
    ]
  }
];

module.exports = lessons;
