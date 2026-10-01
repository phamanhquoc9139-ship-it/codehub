// Data for 16 lessons of Grade 6 Music (SGK Kết nối tri thức với cuộc sống - GDPT 2018)
// 8 Topics x 2 Lessons = 16 Lessons, each with 4 quizzes = 64 Quizzes

const lessons = [
  // ================= CHỦ ĐỀ 1: TUỔI HỌC TRÒ =================
  {
    id: "bai-1",
    lessonNum: 1,
    topicNum: 1,
    topicName: "Chủ đề 1: Tuổi học trò",
    tag: "Học hát & Nhạc cụ",
    title: "Bài 1: Học hát bài 'Con đường học trò' & Thực hành Nhạc cụ",
    objectives: [
      "Hát đúng giai điệu, lời ca bài 'Con đường học trò' (nhạc và lời: Nguyễn Lữ); biết thể hiện sắc thái vui tươi, hồn nhiên.",
      "Biết hát kết hợp vỗ tay hoặc gõ đệm theo phách, theo nhịp 2/4.",
      "Làm quen với nhạc cụ gõ (thanh phách, song loan, triangle) hoặc bấm các nốt cơ bản trên sáo Recorder / kèn phím Melodica.",
      "Bồi dưỡng tình yêu trường lớp, bạn bè và niềm vui hân hoan khi bước vào năm học đầu tiên cấp Trung học cơ sở."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
          <h4 class="font-bold text-cyan-900 dark:text-cyan-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-music text-cyan-600"></i> Giới thiệu bài hát 'Con đường học trò'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát do nhạc sĩ <strong>Nguyễn Lữ</strong> sáng tác, mang tính chất tươi vui, trong sáng, gợi tả hình ảnh con đường quen thuộc rộn rã tiếng cười vui của tuổi học trò cắp sách tới trường dưới tán lá xanh mát.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-microphone-lines text-cyan-500"></i> 1. Cấu trúc và giai điệu
            </h5>
            <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li><strong>Số chỉ nhịp:</strong> Viết ở nhịp 2/4 với nhịp điệu rộn ràng, bước chân vui tươi.</li>
              <li><strong>Hình thức:</strong> Bài hát gồm 2 đoạn đơn giản, giai điệu mềm mại, cao độ vừa tầm cất giọng học sinh lớp 6.</li>
              <li><strong>Lưu ý kỹ thuật:</strong> Lấy hơi ở cuối mỗi câu hát, phát âm tròn vành rõ chữ ở những ca từ luyến nốt.</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-drum text-cyan-500"></i> 2. Thực hành Nhạc cụ gõ
            </h5>
            <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li><strong>Thanh phách:</strong> Gõ vào phách 1 (mạnh) và phách 2 (nhẹ) để giữ đều nhịp.</li>
              <li><strong>Triangle (Kẻng tam giác):</strong> Gõ điểm xuyết tạo âm thanh trong trẻo, ngân vang ở đầu câu.</li>
              <li><strong>Trống nhỏ / Tambourine:</strong> Lắc rung hoặc đệm tiết tấu đơn - đơn - đen.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-3">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-guitar text-cyan-500"></i> Hoạt động thực hành trên lớp:
        </h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div class="p-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <strong>Hát xướng âm:</strong> Luyện khởi động giọng theo mẫu âm: Mi - Mê - Ma - Mô - Mu từ thấp lên cao (Đô - Rê - Mi - Pha - Son).
          </div>
          <div class="p-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <strong>Hòa tấu gõ:</strong> Chia nhóm: Nhóm 1 hát lời, Nhóm 2 gõ thanh phách theo phách, Nhóm 3 vỗ tay theo tiết tấu lời ca.
          </div>
        </div>
      </div>
    `,
    summary: "Bài hát 'Con đường học trò' của nhạc sĩ Nguyễn Lữ viết ở nhịp 2/4 với sắc thái tươi vui, trong sáng. Học sinh cần hát đúng nhịp, lấy hơi đúng chỗ và kết hợp nhịp nhàng với nhạc cụ gõ đệm.",
    quizzes: [
      {
        question: "Tác giả của bài hát 'Con đường học trò' trong chương trình Âm nhạc 6 là ai?",
        options: ["Nhạc sĩ Nguyễn Lữ", "Nhạc sĩ Văn Cao", "Nhạc sĩ Trịnh Công Sơn", "Nhạc sĩ Phạm Tuyên"],
        correct: 0,
        explanation: "Bài hát 'Con đường học trò' là một sáng tác nổi tiếng viết cho lứa tuổi học sinh của nhạc sĩ Nguyễn Lữ."
      },
      {
        question: "Bài hát 'Con đường học trò' được viết ở số chỉ nhịp nào?",
        options: ["Nhịp 3/4", "Nhịp 2/4", "Nhịp 4/4", "Nhịp 6/8"],
        correct: 1,
        explanation: "Bài hát được viết ở nhịp 2/4 mang tính chất rộn ràng, đều đặn như nhịp bước chân học trò cắp sách tới trường."
      },
      {
        question: "Khi hát kết hợp nhạc cụ gõ đệm theo phách của nhịp 2/4, người học cần gõ như thế nào?",
        options: [
          "Gõ đều đặn vào phách 1 (mạnh) và phách 2 (nhẹ) của mỗi ô nhịp",
          "Chỉ gõ duy nhất vào nốt cuối cùng của bài hát",
          "Gõ tự do không cần theo tốc độ bản nhạc",
          "Chỉ gõ khi có đoạn nhạc dạo đầu"
        ],
        correct: 0,
        explanation: "Gõ đệm theo phách là giữ nhịp đều đặn theo từng phách của ô nhịp (phách 1 mạnh, phách 2 nhẹ)."
      },
      {
        question: "Nhạc cụ gõ kim loại hình tam giác thường dùng trong dàn gõ học đường có tên là gì?",
        options: ["Triangle", "Maracas", "Song loan", "Trống cơm"],
        correct: 0,
        explanation: "Triangle (kẻng tam giác) là nhạc cụ gõ bằng thép tạo âm thanh trong trẻo lanh lảnh bằng dùi kim loại."
      }
    ]
  },

  {
    id: "bai-2",
    lessonNum: 2,
    topicNum: 1,
    topicName: "Chủ đề 1: Tuổi học trò",
    tag: "Lí thuyết âm nhạc & Đọc nhạc",
    title: "Bài 2: Các thuộc tính của âm thanh có tính nhạc & Bài đọc nhạc số 1",
    objectives: [
      "Nhận biết và phân biệt được 4 thuộc tính cơ bản của âm thanh có tính nhạc: Cao độ, Trường độ, Cường độ và Âm sắc.",
      "Hiểu ý nghĩa của từng thuộc tính trong việc tạo nên một tác phẩm âm nhạc truyền cảm.",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 1 giọng Đô trưởng.",
      "Biết thể hiện Bài đọc nhạc số 1 kết hợp đánh nhịp 2/4 hoặc gõ phách."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-wave-square text-cyan-600"></i> Bốn thuộc tính cơ bản của âm thanh có tính nhạc
        </h4>
        <p class="text-xs sm:text-sm">
          Âm thanh trong tự nhiên rất đa dạng, nhưng âm thanh được chọn lọc để tạo thành âm nhạc có 4 thuộc tính cơ bản sau:
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-cyan-50/70 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800">
            <strong class="text-cyan-800 dark:text-cyan-300 block mb-1">1. Cao độ (Pitch)</strong>
            <span>Độ trầm bổng, cao thấp của âm thanh (ví dụ: nốt Đô trầm hơn nốt Son, nốt Đố bổng hơn nốt Mi).</span>
          </div>
          <div class="p-3.5 rounded-xl bg-cyan-50/70 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800">
            <strong class="text-cyan-800 dark:text-cyan-300 block mb-1">2. Trường độ (Duration)</strong>
            <span>Độ dài ngắn, ngân lâu hay ngắt nhanh của âm thanh (thể hiện qua các hình nốt: tròn, trắng, đen, móc đơn...).</span>
          </div>
          <div class="p-3.5 rounded-xl bg-cyan-50/70 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800">
            <strong class="text-cyan-800 dark:text-cyan-300 block mb-1">3. Cường độ (Intensity)</strong>
            <span>Độ mạnh nhẹ, to nhỏ của âm thanh (thể hiện qua các sắc thái: piano - nhỏ, forte - mạnh, crescendo...).</span>
          </div>
          <div class="p-3.5 rounded-xl bg-cyan-50/70 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800">
            <strong class="text-cyan-800 dark:text-cyan-300 block mb-1">4. Âm sắc (Timbre)</strong>
            <span>Màu sắc đặc trưng riêng biệt của giọng hát hay nhạc cụ (giúp ta phân biệt tiếng đàn bầu với tiếng piano, giọng nam với giọng nữ).</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-book-open text-cyan-500"></i> Bài đọc nhạc số 1 (Giọng Đô trưởng)
          </h5>
          <p class="text-xs sm:text-sm">
            Bài đọc nhạc số 1 viết ở nhịp 2/4. Các nốt sử dụng gồm: <strong>Đô - Rê - Mi - Pha - Son</strong>. Hình nốt chủ yếu: Nốt đen và nốt trắng. Giai điệu mượt mà, thang âm đi lên và đi xuống từng bước liền bậc.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-list-check text-cyan-500"></i> Thực hành Bài đọc nhạc số 1:
        </h5>
        <p class="text-xs">1. Đọc tên nốt nhạc theo thang âm: Đô - Rê - Mi - Pha - Son rồi đọc ngược lại: Son - Pha - Mi - Rê - Đô.</p>
        <p class="text-xs">2. Gõ tiết tấu: Đen - Đen | Đen - Đen | Trắng --- | Đen - Đen ||</p>
        <p class="text-xs">3. Ghép cao độ và gõ phách nhịp 2/4 theo tay chỉ của giáo viên.</p>
      </div>
    `,
    summary: "Âm thanh có tính nhạc gồm 4 thuộc tính cơ bản: Cao độ (trầm/bổng), Trường độ (dài/ngắn), Cường độ (to/nhỏ) và Âm sắc (sắc thái riêng biệt). Bài đọc nhạc số 1 củng cố cao độ Đô - Rê - Mi - Pha - Son trên nhịp 2/4.",
    quizzes: [
      {
        question: "Bốn thuộc tính cơ bản của âm thanh có tính nhạc là gì?",
        options: [
          "Cao độ, Trường độ, Cường độ, Âm sắc",
          "Khuông nhạc, Khóa Son, Số chỉ nhịp, Vạch nhịp",
          "Đô, Rê, Mi, Pha",
          "Nốt tròn, Nốt trắng, Nốt đen, Nốt móc"
        ],
        correct: 0,
        explanation: "Âm thanh có tính nhạc được tạo nên bởi 4 thuộc tính vật lí và nghệ thuật: Cao độ, Trường độ, Cường độ và Âm sắc."
      },
      {
        question: "Thuộc tính nào giúp ta phân biệt được âm thanh của cây đàn Guitar với cây đàn Piano dù cùng chơi một nốt Đô?",
        options: ["Âm sắc", "Cao độ", "Cường độ", "Trường độ"],
        correct: 0,
        explanation: "Âm sắc (timbre) chính là màu sắc âm thanh riêng biệt của từng giọng hát hoặc từng nhạc cụ khác nhau."
      },
      {
        question: "Độ ngân dài hay ngắn của một âm thanh được gọi là thuộc tính gì?",
        options: ["Trường độ", "Cao độ", "Cường độ", "Âm hưởng"],
        correct: 0,
        explanation: "Trường độ (duration) là độ dài hay ngắn của âm thanh trong thời gian."
      },
      {
        question: "Bài đọc nhạc số 1 trong SGK Âm nhạc 6 sử dụng các nốt nhạc nào sau đây?",
        options: ["Đô - Rê - Mi - Pha - Son", "La - Si - Đố - Rế", "Son - La - Si", "Đô - Mi - Son - Đố"],
        correct: 0,
        explanation: "Bài đọc nhạc số 1 gồm 5 âm cơ bản ban đầu: Đô, Rê, Mi, Pha, Son trong thang âm Đô trưởng."
      }
    ]
  },

  // ================= CHỦ ĐỀ 2: CUỘC SỐNG TƯƠI ĐẸP =================
  {
    id: "bai-3",
    lessonNum: 3,
    topicNum: 2,
    topicName: "Chủ đề 2: Cuộc sống tươi đẹp",
    tag: "Học hát",
    title: "Bài 3: Học hát bài 'Đời sống không già vì triết học' / 'Trẻ em hôm nay, thế giới ngày mai'",
    objectives: [
      "Hát đúng giai điệu và ca từ bài hát thể hiện tình yêu cuộc sống, niềm tin vào tương lai tươi sáng.",
      "Biết lấy hơi đúng nhịp, phát âm rõ ràng, nhả chữ nhẹ nhàng ở những nốt cao.",
      "Hát kết hợp gõ đệm hoặc vận động cơ thể (body percussion) nhịp nhàng.",
      "Nuôi dưỡng tâm hồn yêu thiên nhiên, trân trọng cuộc sống thanh bình quanh ta."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800">
          <h4 class="font-bold text-teal-900 dark:text-teal-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-sun text-teal-600"></i> Ca ngợi cuộc sống tươi đẹp
          </h4>
          <p class="text-xs sm:text-sm">
            Âm nhạc luôn đồng hành cùng cuộc sống con người, mang lại niềm vui, niềm hy vọng và tiếp thêm năng lượng sống tích cực. Các ca khúc viết về cuộc sống tươi đẹp thường có giai điệu rộn ràng, lời ca chan chứa tình yêu thương và khát vọng hòa bình.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-music text-teal-500"></i> Hướng dẫn kỹ thuật biểu diễn ca khúc
          </h5>
          <ul class="text-xs sm:text-sm space-y-2 list-disc list-inside">
            <li><strong>Tư thế hát:</strong> Lưng thẳng tự nhiên, thả lỏng vai, mắt nhìn thẳng, khuôn mặt rạng rỡ tươi cười.</li>
            <li><strong>Khẩu hình:</strong> Mở rộng vòm miệng theo chiều dọc ở các âm 'a', 'o', gom môi nhẹ ở âm 'u', 'i' để âm vang thanh thoát.</li>
            <li><strong>Lấy hơi:</strong> Hít sâu bằng mũi và miệng cùng lúc vào vùng bụng (cơ hoành), tránh nhô cao hai vai.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-hands-clapping text-teal-500"></i> Động tác cơ thể (Body Percussion):
        </h5>
        <p class="text-xs">Phách 1: Vỗ tay (Clap) | Phách 2: Búng ngón tay (Snap) hoặc gõ đùi (Patting).</p>
        <p class="text-xs">Thực hành theo cặp: bạn nam hát lĩnh xướng, bạn nữ hát hòa giọng câu điệp khúc.</p>
      </div>
    `,
    summary: "Học sinh luyện tập tư thế hát chuẩn, mở rộng khẩu hình, giữ hơi thở cơ hoành và thể hiện ca khúc ngợi ca cuộc sống tươi đẹp bằng tình cảm hồn nhiên, rạng rỡ.",
    quizzes: [
      {
        question: "Tư thế đúng khi biểu diễn bài hát ở tư thế đứng là gì?",
        options: [
          "Đứng thẳng tự nhiên, hai chân mở rộng bằng vai, thả lỏng vai và ngực",
          "Đứng bắt chéo chân và nghiêng đầu về một bên",
          "Cúi gập lưng và nhún nhảy liên tục",
          "Gồng cứng hai vai và ngửa cổ ra sau"
        ],
        correct: 0,
        explanation: "Đứng thẳng tự nhiên, thả lỏng cơ thể giúp luồng hơi lưu thông dễ dàng từ phổi qua thanh quản."
      },
      {
        question: "Kỹ thuật lấy hơi chuẩn trong thanh nhạc là lấy hơi vào đâu?",
        options: [
          "Lấy hơi sâu vào bụng (cơ hoành hạ xuống), không nhấc vai",
          "Hít nông vào ngực trên và nhấc cao hai vai",
          "Nín thở không lấy hơi trong suốt câu hát",
          "Chỉ lấy hơi bằng miệng không dùng mũi"
        ],
        correct: 0,
        explanation: "Lấy hơi cơ hoành (bụng phình nhẹ khi hít vào) giúp giữ được lượng hơi dồi dào và điều tiết cột hơi ổn định."
      },
      {
        question: "Hình thức gõ đệm sử dụng chính các bộ phận trên cơ thể (vỗ tay, búng tay, dậm chân...) gọi là gì?",
        options: ["Body Percussion (Gõ cơ thể)", "A cappella", "Hợp xướng", "Độc tấu"],
        correct: 0,
        explanation: "Body percussion là nghệ thuật tạo âm thanh và tiết tấu bằng chính cơ thể người như vỗ tay, búng tay, dậm chân..."
      },
      {
        question: "Để âm thanh vang sáng và tròn tiếng khi hát, ca sĩ cần chú ý điều gì nhất?",
        options: [
          "Mở rộng khẩu hình vòm miệng tự nhiên và phát âm rõ chữ",
          "Khép chặt miệng và chỉ phát âm trong cổ họng",
          "Hát thật to hét hết sức lực",
          "Bịt một bên tai lại khi hát"
        ],
        correct: 0,
        explanation: "Mở rộng khẩu hình khoang miệng tạo khoảng vang, giúp âm thanh tròn vành, rõ chữ và vang xa."
      }
    ]
  },

  {
    id: "bai-4",
    lessonNum: 4,
    topicNum: 2,
    topicName: "Chủ đề 2: Cuộc sống tươi đẹp",
    tag: "Thường thức âm nhạc",
    title: "Bài 4: Nhạc sĩ Văn Cao và bài hát 'Tiến quân ca' (Quốc ca Việt Nam)",
    objectives: [
      "Nắm được tiểu sử ngắn gọn và sự nghiệp âm nhạc đồ sộ của nhạc sĩ Văn Cao - một trong những cây đại thụ của nền âm nhạc Việt Nam.",
      "Hiểu hoàn cảnh ra đời và ý nghĩa lịch sử thiêng liêng của ca khúc 'Tiến quân ca'.",
      "Thể hiện thái độ tôn nghiêm, tự hào dân tộc khi lắng nghe và hát Quốc ca.",
      "Luyện tập gõ tiết tấu hành khúc hào hùng của bài hát."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-gradient-to-r from-red-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/60 border border-red-200 dark:border-red-900/40">
          <h4 class="font-bold text-red-900 dark:text-red-300 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-flag text-red-600"></i> Nhạc sĩ Văn Cao (1923 - 1995)
          </h4>
          <p class="text-xs sm:text-sm">
            Nhạc sĩ <strong>Văn Cao</strong> sinh tại Hải Phòng, quê gốc Nam Định. Ông là một nghệ sĩ đa tài: nhạc sĩ, thi sĩ và họa sĩ. Ông được Nhà nước trao tặng <strong>Giải thưởng Hồ Chí Minh về Văn học - Nghệ thuật</strong> (đợt 1, 1996) và Huân chương Sao Vàng.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-star text-amber-500"></i> Hoàn cảnh ra đời bài 'Tiến quân ca'
            </h5>
            <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li>Sáng tác vào <strong>mùa đông năm 1944</strong> tại một căn gác nhỏ ở phố Bát Đàn (Hà Nội).</li>
              <li>Bài hát cổ vũ tinh thần chiến đấu của Đội Việt Nam Tuyên truyền Giải phóng quân.</li>
              <li>Ngày 19/8/1945, bài hát vang lên rực lửa tại Quảng trường Cách mạng Tháng Tám.</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-landmark text-amber-500"></i> Trở thành Quốc ca thiêng liêng
            </h5>
            <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li>Ngày 2/9/1945, bài hát chính thức cất lên trong Lễ Tuyên ngôn Độc lập tại Quảng trường Ba Đình.</li>
              <li>Năm 1946, Quốc hội khóa I đã chính thức chọn 'Tiến quân ca' làm <strong>Quốc ca của nước Việt Nam Dân chủ Cộng hòa</strong> (nay là CHXHCN Việt Nam).</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-person-military-pointing text-red-500"></i> Nghi thức chào cờ và hát Quốc ca:
        </h5>
        <p class="text-xs">Khi chào cờ và hát Quốc ca, học sinh phải đứng nghiêm trang, hướng mắt về phía Quốc kỳ, hát to, dõng dạc, đúng nhịp hành khúc dứt khoát.</p>
      </div>
    `,
    summary: "Nhạc sĩ Văn Cao sáng tác bài 'Tiến quân ca' vào cuối năm 1944. Bài hát đã được Quốc hội khóa I chọn làm Quốc ca của nước Việt Nam, mang ý nghĩa lịch sử thiêng liêng biểu tượng cho non sông đất nước.",
    quizzes: [
      {
        question: "Bài hát 'Tiến quân ca' (Quốc ca Việt Nam) do nhạc sĩ nào sáng tác?",
        options: ["Nhạc sĩ Văn Cao", "Nhạc sĩ Lưu Hữu Phước", "Nhạc sĩ Đỗ Nhuận", "Nhạc sĩ Hoàng Việt"],
        correct: 0,
        explanation: "Bài hát 'Tiến quân ca' là kiệt tác bất hủ của nhạc sĩ tài hoa Văn Cao."
      },
      {
        question: "Bài hát 'Tiến quân ca' được nhạc sĩ Văn Cao sáng tác vào năm nào?",
        options: ["Năm 1944", "Năm 1945", "Năm 1954", "Năm 1975"],
        correct: 0,
        explanation: "Nhạc sĩ Văn Cao sáng tác 'Tiến quân ca' vào mùa đông năm 1944 tại Hà Nội."
      },
      {
        question: "Cơ quan nhà nước nào đã chính thức phê chuẩn 'Tiến quân ca' làm Quốc ca của nước ta vào năm 1946?",
        options: ["Quốc hội khóa I", "Bộ Văn hóa", "Hội đồng Bộ trưởng", "Ủy ban Nhân dân thành phố Hà Nội"],
        correct: 0,
        explanation: "Kỳ họp thứ nhất Quốc hội khóa I (tháng 3/1946) đã chính thức quyết định chọn bài Tiến quân ca làm Quốc ca Việt Nam."
      },
      {
        question: "Tác phong chuẩn mực của công dân khi cử hành Quốc ca là gì?",
        options: [
          "Đứng nghiêm trang, mắt hướng về Quốc kỳ, hát to dõng dạc",
          "Ngồi nói chuyện và dùng điện thoại",
          "Vỗ tay cười đùa nhảy múa",
          "Quay lưng lại sân khấu chào cờ"
        ],
        correct: 0,
        explanation: "Hát Quốc ca là biểu hiện của lòng yêu nước và niềm tự hào dân tộc, đòi hỏi sự nghiêm trang tuyệt đối."
      }
    ]
  },

  // ================= CHỦ ĐỀ 3: NHỚ ƠN THẦY CÔ =================
  {
    id: "bai-5",
    lessonNum: 5,
    topicNum: 3,
    topicName: "Chủ đề 3: Nhớ ơn thầy cô",
    tag: "Học hát",
    title: "Bài 5: Học hát bài 'Thầy cô là tất cả' & Tình cảm tri ân mái trường",
    objectives: [
      "Hát đúng giai điệu và ca từ bài hát 'Thầy cô là tất cả' (nhạc: Bùi Anh Tú, lời: Nguyễn Trọng Sửu).",
      "Biết thể hiện sắc thái tình cảm tha thiết, ấm áp của ca khúc viết về nghề giáo.",
      "Thực hiện hát kết hợp vận động phụ họa nhẹ nhàng theo nhịp điệu.",
      "Biết ơn công lao dạy dỗ tận tụy của các thầy cô giáo."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-chalkboard-user text-purple-600"></i> Ca khúc 'Thầy cô là tất cả'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát là sự phối hợp nhịp nhàng giữa giai điệu mượt mà của nhạc sĩ <strong>Bùi Anh Tú</strong> và lời thơ giàu hình ảnh của nhà thơ <strong>Nguyễn Trọng Sửu</strong>. Từng câu hát ví thầy cô như ánh bình minh, như dòng sông xanh chở nặng phù sa nâng bước đàn em.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <strong class="text-purple-700 dark:text-purple-400 block mb-1">Cấu trúc tác phẩm</strong>
            <p>Bài hát viết ở nhịp vừa phải, giai điệu tha thiết, có những quãng nhảy âm êm dịu tạo cảm giác sâu lắng, bồi hồi.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <strong class="text-purple-700 dark:text-purple-400 block mb-1">Phương pháp luyện tập</strong>
            <p>Hát ngân đủ các phách cuối câu, giữ hơi thở mềm mại, kết hợp vung tay nhẹ nhàng theo phách để biểu diễn truyền cảm.</p>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-sparkles text-purple-500"></i> Biểu diễn tập thể chào mừng 20/11:
        </h5>
        <p class="text-xs">Đội hình chia 2 nhóm: nhóm lĩnh xướng lời 1, cả lớp hòa giọng điệp khúc. Kết hợp 2 học sinh múa phụ họa dâng hoa tặng thầy cô.</p>
      </div>
    `,
    summary: "Ca khúc 'Thầy cô là tất cả' của Bùi Anh Tú - Nguyễn Trọng Sửu với tính chất ấm áp, tha thiết giúp các em học sinh bày tỏ lòng biết ơn sâu sắc tới những người thầy, người cô kính yêu.",
    quizzes: [
      {
        question: "Ai là nhạc sĩ sáng tác phần nhạc cho bài hát 'Thầy cô là tất cả'?",
        options: ["Nhạc sĩ Bùi Anh Tú", "Nhạc sĩ Hoàng Long", "Nhạc sĩ Trịnh Công Sơn", "Nhạc sĩ Phong Nhã"],
        correct: 0,
        explanation: "Bài hát 'Thầy cô là tất cả' do nhạc sĩ Bùi Anh Tú phổ nhạc theo lời thơ của Nguyễn Trọng Sửu."
      },
      {
        question: "Ca khúc 'Thầy cô là tất cả' mang tính chất và sắc thái tình cảm gì?",
        options: [
          "Ấm áp, tha thiết, giàu cảm xúc tri ân",
          "Hùng tráng, dồn dập như hành quân",
          "Vui nhộn, nghịch ngợm, hài hước",
          "Buồn bã, bi thương"
        ],
        correct: 0,
        explanation: "Bài hát mang giai điệu êm dịu, ấm áp và chứa chan tình cảm kính yêu, biết ơn người thầy."
      },
      {
        question: "Ngày truyền thống tôn vinh các thầy cô giáo tại Việt Nam là ngày nào?",
        options: ["Ngày 20 tháng 11", "Ngày 8 tháng 3", "Ngày 26 tháng 3", "Ngày 1 tháng 6"],
        correct: 0,
        explanation: "Ngày 20/11 hàng năm là Ngày Nhà giáo Việt Nam, dịp để các thế hệ học trò tri ân thầy cô giáo."
      },
      {
        question: "Khi hát một ca khúc có tính chất tha thiết, người hát cần thể hiện âm lượng và hơi thở ra sao?",
        options: [
          "Hơi thở mềm mại, nhả chữ ấm áp, âm lượng vừa phải",
          "Gào to hết cỡ để lấn át nhạc nền",
          "Hát thì thào không ra tiếng",
          "Ngắt hơi đột ngột ở giữa các từ"
        ],
        correct: 0,
        explanation: "Hơi thở nhẹ nhàng và nhả chữ ấm áp giúp truyền tải trọn vẹn chất trữ tình của bài hát."
      }
    ]
  },

  {
    id: "bai-6",
    lessonNum: 6,
    topicNum: 3,
    topicName: "Chủ đề 3: Nhớ ơn thầy cô",
    tag: "Lí thuyết âm nhạc & Đọc nhạc",
    title: "Bài 6: Các kí hiệu ghi nhạc bằng chữ cái Latin & Bài đọc nhạc số 2",
    objectives: [
      "Nhớ tên 7 nốt nhạc cơ bản và hệ thống kí hiệu tương ứng bằng 7 chữ cái in hoa Latin (C, D, E, F, G, A, B).",
      "Nắm vững vị trí các nốt nhạc trên khuông nhạc có Khóa Son.",
      "Đọc đúng cao độ và trường độ Bài đọc nhạc số 2.",
      "Tìm hiểu sơ lược các hình thức biểu diễn hát: Đơn ca, Song ca, Tam ca, Tốp ca và Hợp xướng."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-font text-purple-600"></i> Kí hiệu 7 nốt nhạc bằng chữ cái Latin
        </h4>
        <p class="text-xs sm:text-sm">
          Trong âm nhạc quốc tế cũng như trên các bản phổ ghi hợp âm, 7 nốt nhạc cơ bản được kí hiệu bằng 7 chữ cái in hoa như sau:
        </p>

        <!-- Latin Note Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-center border-collapse border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
            <thead class="bg-purple-100 dark:bg-purple-950/70 text-purple-900 dark:text-purple-200 font-bold">
              <tr>
                <th class="p-2 border border-gray-200 dark:border-gray-700">Tên nốt tiếng Pháp / Ý</th>
                <th class="p-2 border border-gray-200 dark:border-gray-700">Đô</th>
                <th class="p-2 border border-gray-200 dark:border-gray-700">Rê</th>
                <th class="p-2 border border-gray-200 dark:border-gray-700">Mi</th>
                <th class="p-2 border border-gray-200 dark:border-gray-700">Pha</th>
                <th class="p-2 border border-gray-200 dark:border-gray-700">Son</th>
                <th class="p-2 border border-gray-200 dark:border-gray-700">La</th>
                <th class="p-2 border border-gray-200 dark:border-gray-700">Si</th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800">
              <tr class="font-extrabold text-purple-600 dark:text-purple-400 text-base">
                <td class="p-2 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-300">Kí hiệu chữ cái Latin</td>
                <td class="p-2 border border-gray-200 dark:border-gray-700">C</td>
                <td class="p-2 border border-gray-200 dark:border-gray-700">D</td>
                <td class="p-2 border border-gray-200 dark:border-gray-700">E</td>
                <td class="p-2 border border-gray-200 dark:border-gray-700">F</td>
                <td class="p-2 border border-gray-200 dark:border-gray-700">G</td>
                <td class="p-2 border border-gray-200 dark:border-gray-700">A</td>
                <td class="p-2 border border-gray-200 dark:border-gray-700">B</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 mt-4">
          <h5 class="font-bold text-purple-900 dark:text-purple-300 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-users text-purple-500"></i> Các hình thức biểu diễn hát
          </h5>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div class="p-2 rounded bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900">
              <strong>Đơn ca:</strong> 1 người hát
            </div>
            <div class="p-2 rounded bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900">
              <strong>Song ca:</strong> 2 người hát
            </div>
            <div class="p-2 rounded bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900">
              <strong>Tam ca:</strong> 3 người hát
            </div>
            <div class="p-2 rounded bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900">
              <strong>Hợp xướng:</strong> Dàn đông người chia bè
            </div>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-purple-500"></i> Bài đọc nhạc số 2:
        </h5>
        <p class="text-xs">Đọc cao độ từ Đô lên La: C - D - E - F - G - A. Luyện tập gõ phách nhịp 2/4 theo mẫu tiết tấu: nốt đen, nốt móc đơn, nốt trắng.</p>
      </div>
    `,
    summary: "Hệ thống 7 chữ cái Latin kí hiệu 7 nốt nhạc cơ bản: C (Đô), D (Rê), E (Mi), F (Pha), G (Son), A (La), B (Si). Các hình thức hát phong phú gồm đơn ca, song ca, tam ca, tốp ca và hợp xướng.",
    quizzes: [
      {
        question: "Chữ cái Latin 'G' tương ứng với nốt nhạc nào trong hệ thống âm nhạc?",
        options: ["Nốt Son", "Nốt Đô", "Nốt Mi", "Nốt La"],
        correct: 0,
        explanation: "Chữ cái G kí hiệu nốt Son (C = Đô, D = Rê, E = Mi, F = Pha, G = Son, A = La, B = Si)."
      },
      {
        question: "Nốt La được quy ước kí hiệu bằng chữ cái Latin nào?",
        options: ["A", "C", "F", "E"],
        correct: 0,
        explanation: "Nốt La được kí hiệu bằng chữ A."
      },
      {
        question: "Hình thức biểu diễn có đúng 2 người cùng hát chung một ca khúc được gọi là gì?",
        options: ["Song ca", "Đơn ca", "Tam ca", "Hợp xướng"],
        correct: 0,
        explanation: "Song ca (duet) là hình thức biểu diễn do 2 ca sĩ kết hợp biểu diễn."
      },
      {
        question: "Dàn hợp xướng có đặc điểm biểu diễn nổi bật nhất là gì?",
        options: [
          "Số lượng người hát đông và chia làm nhiều bè âm thanh khác nhau",
          "Chỉ gồm 1 người vừa hát vừa gảy đàn guitar",
          "Chỉ hát thì thầm không có nhạc đệm",
          "Không cần người nhạc trưởng chỉ huy"
        ],
        correct: 0,
        explanation: "Hợp xướng là một tập thể đông người cùng hòa giọng, được phân chia thành nhiều bè (soprano, alto, tenor, bass) tạo không gian âm thanh đa tầng."
      }
    ]
  },

  // ================= CHỦ ĐỀ 4: NHỮNG GIAI ĐIỆU QUÊ HƯƠNG =================
  {
    id: "bai-7",
    lessonNum: 7,
    topicNum: 4,
    topicName: "Chủ đề 4: Những giai điệu quê hương",
    tag: "Học hát & Dân ca",
    title: "Bài 7: Học hát dân ca Tây Nguyên 'Đi cắt lúa' (Dân ca Hrê)",
    objectives: [
      "Hát đúng cao độ, trường độ và sắc thái rộn ràng, khỏe khoắn của bài hát 'Đi cắt lúa' (Dân ca Hrê - Tây Nguyên).",
      "Hiểu nét đẹp trong lao động sản xuất và niềm vui mùa lúa chín của đồng bào Tây Nguyên.",
      "Hát kết hợp gõ đệm tiết tấu cồng chiêng hoặc vận động phụ họa mang phong cách Tây Nguyên.",
      "Bồi dưỡng tình yêu và sự trân trọng đối với di sản văn hóa các dân tộc anh em."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-mountain-sun text-amber-600"></i> Xuất xứ bài dân ca 'Đi cắt lúa'
          </h4>
          <p class="text-xs sm:text-sm">
            'Đi cắt lúa' là bài dân ca đặc sắc của <strong>dân tộc Hrê</strong> sinh sống chủ yếu ở vùng núi rừng miền Trung - Tây Nguyên (Quảng Ngãi, Bình Định). Bài hát mô tả cảnh bà con buôn làng cùng nhau lên rẫy gặt lúa vàng trong tiếng chim hót véo von và ánh nắng sớm chan hòa.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <strong class="text-amber-700 dark:text-amber-400 block mb-1">Đặc trưng giai điệu</strong>
            <p>Giai điệu mang âm hưởng thang 5 âm (ngũ cung) đặc trưng của núi rừng đại ngàn, nhịp điệu dứt khoát, rộn rã bước chân đi rẫy.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <strong class="text-amber-700 dark:text-amber-400 block mb-1">Cách thể hiện lời ca</strong>
            <p>Phát âm khỏe khoắn, vui tươi, thể hiện rõ các tiếng đệm như 'ơ', 'ơi' tha thiết vút cao giữa không gian núi đồi.</p>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-fire text-amber-500"></i> Mô phỏng tiếng cồng chiêng:
        </h5>
        <p class="text-xs">Sử dụng trống nhỏ và thanh phách gõ theo mô hình tiết tấu chiêng: Tùng - cách - Tùng - cách (mạnh - nhẹ - mạnh - nhẹ) giúp bài hát đậm chất sử thi Tây Nguyên.</p>
      </div>
    `,
    summary: "Dân ca Hrê 'Đi cắt lúa' mang âm hưởng ngũ cung rộn ràng, khắc họa bức tranh ngày mùa bội thu trên nương rẫy Tây Nguyên với tinh thần lạc quan, yêu đời.",
    quizzes: [
      {
        question: "Bài hát 'Đi cắt lúa' là làn điệu dân ca của dân tộc nào ở Việt Nam?",
        options: ["Dân tộc Hrê", "Dân tộc Tày", "Dân tộc Thái", "Dân tộc Kinh"],
        correct: 0,
        explanation: "Bài 'Đi cắt lúa' là bài dân ca nổi tiếng của đồng bào dân tộc Hrê ở vùng rừng núi miền Trung - Tây Nguyên."
      },
      {
        question: "Nội dung chính của bài dân ca 'Đi cắt lúa' phản ánh điều gì?",
        options: [
          "Niềm vui hân hoan của buôn làng khi lên nương rẫy thu hoạch lúa vàng",
          "Cảnh ra khơi đánh cá lúc bình minh",
          "Nỗi nhớ nhà của người lính biên cương",
          "Lễ hội đua thuyền trên sông mùa nước nổi"
        ],
        correct: 0,
        explanation: "Bài hát thể hiện không khí tưng bừng, hăng say lao động và niềm vui no ấm khi thu hoạch lúa rẫy."
      },
      {
        question: "Âm hưởng âm nhạc của các bài dân ca Tây Nguyên thường mang tính chất gì?",
        options: [
          "Khỏe khoắn, mộc mạc, phóng khoáng như núi rừng đại ngàn",
          "Buồn rầu, ủ rũ, chậm chạp",
          "Rung giật gắt gỏng của nhạc rock phương Tây",
          "Yểu điệu, u sầu, huyền bí"
        ],
        correct: 0,
        explanation: "Dân ca Tây Nguyên gắn liền với núi rừng đại ngàn nên luôn tràn đầy sinh lực, phóng khoáng và khỏe khoắn."
      },
      {
        question: "Nhạc cụ gõ bằng đồng truyền thống nổi tiếng thế giới của đồng bào Tây Nguyên là gì?",
        options: ["Cồng chiêng", "Đàn Đáy", "Đàn Nhị", "Kèn đám ma"],
        correct: 0,
        explanation: "Không gian văn hóa Cồng chiêng Tây Nguyên là Kiệt tác Di sản phi vật thể của nhân loại được UNESCO vinh danh."
      }
    ]
  },

  {
    id: "bai-8",
    lessonNum: 8,
    topicNum: 4,
    topicName: "Chủ đề 4: Những giai điệu quê hương",
    tag: "Lí thuyết & Thường thức",
    title: "Bài 8: Khái niệm Nhịp 2/4, Bài đọc nhạc số 3 & Giới thiệu Đàn Bầu",
    objectives: [
      "Hiểu rõ khái niệm số chỉ nhịp 2/4: ý nghĩa của số 2 ở trên và số 4 ở dưới, cấu trúc phách mạnh - nhẹ.",
      "Đọc đúng cao độ, trường độ Bài đọc nhạc số 3 kết hợp gõ nhịp 2/4.",
      "Tìm hiểu cấu tạo đặc biệt và âm thanh độc nhất vô nhị của cây Đàn Bầu (Độc huyền cầm) Việt Nam.",
      "Tự hào về nét độc đáo của nền nhạc cụ truyền thống dân tộc Việt Nam trên trường quốc tế."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-music text-amber-600"></i> Định nghĩa số chỉ nhịp 2/4
        </h4>
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs sm:text-sm">
          <ul class="space-y-1.5 list-disc list-inside">
            <li><strong>Số 2 (ở trên):</strong> Cho biết trong mỗi ô nhịp có đúng <strong>2 phách</strong>.</li>
            <li><strong>Số 4 (ở dưới):</strong> Cho biết giá trị độ dài của mỗi phách bằng một <strong>nốt đen</strong> (lấy nốt tròn chia 4).</li>
            <li><strong>Tính chất phách:</strong> Phách thứ nhất là <strong>phách mạnh</strong>, phách thứ hai là <strong>phách nhẹ</strong>.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-guitar text-amber-500"></i> Đàn Bầu - Cây đàn một dây kỳ diệu
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Đàn Bầu (còn gọi là <strong>Độc huyền cầm</strong>) chỉ có duy nhất một dây nhưng phát ra âm thanh âm bồi (harmonic) vô cùng ngọt ngào, sâu lắng như tiếng lòng người mẹ. Cần đàn uốn lượn bằng sừng trâu giúp nghệ sĩ có thể nhấn, vuốt, luyến láy mô phỏng thanh điệu tiếng nói người Việt (sắc, huyền, hỏi, ngã, nặng).
          </p>
          <div class="mt-2 text-xs italic text-gray-500 dark:text-gray-400">
            "Đàn bầu ai gảy nấy nghe / Làm thân con gái chớ nghe đàn bầu" (Ca dao xưa).
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-hand text-amber-500"></i> Cách gõ nhịp 2/4:
        </h5>
        <p class="text-xs">Phách 1 (mạnh): Đánh tay xuống dứt khoát. Phách 2 (nhẹ): Hất nhẹ tay lên.</p>
        <p class="text-xs">Áp dụng vừa đọc Bài đọc nhạc số 3 vừa gõ nhịp 2/4 chuẩn xác tốc độ.</p>
      </div>
    `,
    summary: "Nhịp 2/4 có 2 phách trong một ô nhịp, mỗi phách bằng một nốt đen (phách 1 mạnh, phách 2 nhẹ). Đàn Bầu là nhạc cụ dân tộc độc đáo bậc nhất thế giới chỉ có một dây gảy âm bồi và uốn cần tạo cao độ mềm mại.",
    quizzes: [
      {
        question: "Trong số chỉ nhịp 2/4, số 2 ở trên biểu thị điều gì?",
        options: [
          "Mỗi ô nhịp có 2 phách",
          "Mỗi ô nhịp có 4 phách",
          "Mỗi phách bằng 2 nốt tròn",
          "Bản nhạc chỉ được chơi trong 2 phút"
        ],
        correct: 0,
        explanation: "Số phía trên của số chỉ nhịp luôn cho biết số lượng phách có trong một ô nhịp."
      },
      {
        question: "Trong nhịp 2/4, quan hệ giữa phách 1 và phách 2 là gì?",
        options: [
          "Phách 1 mạnh, phách 2 nhẹ",
          "Cả hai phách đều mạnh",
          "Phách 1 nhẹ, phách 2 mạnh",
          "Cả hai phách đều im lặng không gõ"
        ],
        correct: 0,
        explanation: "Quy luật cơ bản của nhịp 2/4 là phách thứ nhất mang trọng âm (phách mạnh) và phách thứ hai là phách nhẹ."
      },
      {
        question: "Đàn Bầu của Việt Nam còn có tên gọi chữ Hán là gì?",
        options: ["Độc huyền cầm", "Nhị huyền cầm", "Tỳ bà", "Tranh huyền cầm"],
        correct: 0,
        explanation: "'Độc' nghĩa là một, 'huyền' là dây, 'cầm' là đàn. Độc huyền cầm nghĩa là cây đàn chỉ có một dây."
      },
      {
        question: "Bộ phận nào của cây Đàn Bầu giúp nghệ sĩ có thể uốn lượn tạo ra các nốt nhạc cao thấp khác nhau?",
        options: [
          "Cần đàn (vòi đàn) làm bằng sừng hoặc gỗ dẻo",
          "Hộp cộng hưởng",
          "Khóa lên dây",
          "Quả bầu khô"
        ],
        correct: 0,
        explanation: "Cần đàn linh hoạt cho phép người chơi uốn tới trước hoặc kéo lùi ra sau để thay đổi độ căng của dây, tạo nên cao độ âm thanh phong phú."
      }
    ]
  },

  // ================= CHỦ ĐỀ 5: BÁC HỒ KÍNH YÊU =================
  {
    id: "bai-9",
    lessonNum: 9,
    topicNum: 5,
    topicName: "Chủ đề 5: Bác Hồ kính yêu",
    tag: "Học hát",
    title: "Bài 9: Học hát bài 'Bác Hồ - Thầy giáo trẻ' / 'Ai yêu Bác Hồ Chí Minh hơn thiếu niên nhi đồng'",
    objectives: [
      "Hát đúng giai điệu và ca từ bài hát thể hiện lòng kính yêu vô hạn đối với Chủ tịch Hồ Chí Minh.",
      "Biết thể hiện sắc thái tình cảm tha thiết, trang trọng và đầy tự hào.",
      "Tìm hiểu hình ảnh người thanh niên Nguyễn Tất Thành khi làm thầy giáo dạy học tại trường Dục Thanh (Phan Thiết).",
      "Noi gương học tập và rèn luyện theo 5 điều Bác Hồ dạy."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
          <h4 class="font-bold text-red-900 dark:text-red-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-heart text-red-600"></i> Hình tượng Bác Hồ trong âm nhạc thiếu nhi
          </h4>
          <p class="text-xs sm:text-sm">
            Chủ tịch Hồ Chí Minh luôn dành tình yêu thương bao la, săn sóc ân cần cho các cháu thiếu niên, nhi đồng. Hình ảnh Bác Hồ kính yêu đã trở thành nguồn cảm hứng vô tận cho nhiều thế hệ nhạc sĩ sáng tác những ca khúc đi cùng năm tháng như: <em>Ai yêu Bác Hồ Chí Minh hơn thiếu niên nhi đồng</em> (Phong Nhã), <em>Bác Hồ - Thầy giáo trẻ</em> (Nguyễn Đăng Nước)...
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-school-flag text-red-500"></i> Bác Hồ thời trẻ tại trường Dục Thanh
          </h5>
          <p class="text-xs sm:text-sm">
            Trước khi lên tàu ra đi tìm đường cứu nước năm 1911, người thanh niên yêu nước Nguyễn Tất Thành (thầy giáo Nguyễn Tất Thành) đã từng có thời gian dạy học, truyền thụ kiến thức văn hóa và khơi dậy tinh thần yêu nước cho học trò nghèo tại trường Dục Thanh ở thành phố Phan Thiết (Bình Thuận).
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-microphone text-red-500"></i> Luyện tập sắc thái bài hát:
        </h5>
        <p class="text-xs">Hát mở đầu với giọng êm dịu, tình cảm; đoạn điệp khúc nâng cao âm lượng hào sảng, ánh mắt tự hào bày tỏ lòng biết ơn Bác kính yêu.</p>
      </div>
    `,
    summary: "Ca khúc viết về Bác Hồ giúp học sinh lớp 6 cảm nhận được tấm gương đạo đức vĩ đại và tình thương yêu bao la của Người dành cho thế hệ măng non đất nước.",
    quizzes: [
      {
        question: "Ai là tác giả của ca khúc thiếu nhi kinh điển 'Ai yêu Bác Hồ Chí Minh hơn thiếu niên nhi đồng'?",
        options: ["Nhạc sĩ Phong Nhã", "Nhạc sĩ Văn Cao", "Nhạc sĩ Hoàng Vân", "Nhạc sĩ Phạm Tuyên"],
        correct: 0,
        explanation: "Nhạc sĩ Phong Nhã - 'ông vua của âm nhạc thiếu nhi' - đã sáng tác bài hát bất hủ này vào cuối năm 1945."
      },
      {
        question: "Thời thanh niên, thầy giáo Nguyễn Tất Thành (Bác Hồ) từng dạy học tại mái trường nào ở miền Trung?",
        options: ["Trường Dục Thanh (Phan Thiết)", "Trường Quốc học Huế", "Trường Bưởi (Hà Nội)", "Trường Khải Định"],
        correct: 0,
        explanation: "Thầy giáo Nguyễn Tất Thành dạy học tại trường Dục Thanh (Phan Thiết, Bình Thuận) vào năm 1910 trước khi vào Sài Gòn ra đi tìm đường cứu nước."
      },
      {
        question: "Khi thể hiện các bài hát ngợi ca Bác Hồ, sắc thái tình cảm cần thể hiện là gì?",
        options: [
          "Trang nghiêm, tha thiết, kính trọng và dạt dào niềm tự hào",
          "Nổi loạn, ồn ào và vội vã",
          "Hài hước, châm biếm",
          "Lạnh lùng, xa cách"
        ],
        correct: 0,
        explanation: "Bài hát về Bác đòi hỏi sự kính cẩn, chân thành và dạt dào lòng biết ơn sâu sắc."
      },
      {
        question: "Trong 5 điều Bác Hồ dạy thiếu niên nhi đồng, điều thứ nhất là gì?",
        options: [
          "Yêu Tổ quốc, yêu đồng bào",
          "Học tập tốt, lao động tốt",
          "Đoàn kết tốt, kỷ luật tốt",
          "Giữ gìn vệ sinh thật tốt"
        ],
        correct: 0,
        explanation: "Điều 1 trong 5 điều Bác Hồ dạy là: 'Yêu Tổ quốc, yêu đồng bào'."
      }
    ]
  },

  {
    id: "bai-10",
    lessonNum: 10,
    topicNum: 5,
    topicName: "Chủ đề 5: Bác Hồ kính yêu",
    tag: "Lí thuyết & Thường thức",
    title: "Bài 10: Các loại Dấu lặng, Bài đọc nhạc số 4 & Nhạc sĩ Lưu Hữu Phước",
    objectives: [
      "Nhận biết hình dáng và hiểu giá trị thời gian ngắt tiếng của các loại dấu lặng: Lặng tròn, Lặng trắng, Lặng đen, Lặng đơn.",
      "Đọc đúng cao độ và ngắt tiếng chuẩn xác tại các vị trí dấu lặng trong Bài đọc nhạc số 4.",
      "Nắm được những nét chính về cuộc đời và sự nghiệp sáng tác của Giáo sư, Nhạc sĩ Lưu Hữu Phước.",
      "Cảm thụ tráng ca 'Lên đàng' sục sôi khí thế cách mạng của tuổi trẻ."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-pause text-red-600"></i> Các loại Dấu lặng trong âm nhạc
        </h4>
        <p class="text-xs sm:text-sm">
          Dấu lặng dùng để biểu thị thời gian tạm ngừng nghỉ phát âm thanh trong bản nhạc. Mỗi hình nốt đều có một dấu lặng tương ứng có cùng độ dài thời gian:
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm text-center">
          <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <span class="font-bold block text-red-600 dark:text-red-400">Dấu lặng tròn</span>
            <span class="text-xs text-gray-500">Nghỉ bằng 4 phách (nốt tròn)</span>
          </div>
          <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <span class="font-bold block text-red-600 dark:text-red-400">Dấu lặng trắng</span>
            <span class="text-xs text-gray-500">Nghỉ bằng 2 phách (nốt trắng)</span>
          </div>
          <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <span class="font-bold block text-red-600 dark:text-red-400">Dấu lặng đen</span>
            <span class="text-xs text-gray-500">Nghỉ bằng 1 phách (nốt đen)</span>
          </div>
          <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <span class="font-bold block text-red-600 dark:text-red-400">Dấu lặng đơn</span>
            <span class="text-xs text-gray-500">Nghỉ bằng 1/2 phách (nốt móc đơn)</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-user-tie text-red-500"></i> Nhạc sĩ Lưu Hữu Phước (1921 - 1989)
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed">
            Nhạc sĩ Lưu Hữu Phước quê ở Cần Thơ, là một trong những đại diện tiêu biểu nhất của thể loại hành khúc cách mạng Việt Nam. Các tác phẩm nổi tiếng: <em>Lên đàng, Tiếng gọi thanh niên, Bạch Đằng Giang, Ca ngợi Hồ Chủ tịch, Tiến về Sài Gòn...</em> Ông được truy tặng Giải thưởng Hồ Chí Minh về Văn học - Nghệ thuật (1996).
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-red-500"></i> Thực hành Bài đọc nhạc số 4:
        </h5>
        <p class="text-xs">Đọc nhạc kết hợp gõ phách: khi gặp dấu lặng đen, ta mở bàn tay ra và giữ im lặng đúng 1 phách trong đầu không phát ra âm thanh.</p>
      </div>
    `,
    summary: "Dấu lặng biểu thị thời gian nghỉ âm thanh. Nhạc sĩ Lưu Hữu Phước là ngọn cờ đầu của dòng hành khúc yêu nước với những ca khúc thôi thúc thanh niên lên đường cứu nước như 'Lên đàng'.",
    quizzes: [
      {
        question: "Dấu lặng đen có giá trị thời gian ngắt tiếng bằng độ dài của nốt nhạc nào?",
        options: ["Nốt đen (1 phách)", "Nốt trắng (2 phách)", "Nốt tròn (4 phách)", "Nốt móc đơn (1/2 phách)"],
        correct: 0,
        explanation: "Dấu lặng đen biểu thị thời gian nghỉ tương đương chính xác với giá trị trường độ của 1 nốt đen."
      },
      {
        question: "Dấu lặng nào có thời gian nghỉ dài nhất trong các loại dấu lặng dưới đây?",
        options: ["Dấu lặng tròn", "Dấu lặng trắng", "Dấu lặng đen", "Dấu lặng đơn"],
        correct: 0,
        explanation: "Dấu lặng tròn có giá trị nghỉ bằng 4 phách (tương đương nốt tròn), là dấu lặng có giá trị lớn nhất trong nhóm này."
      },
      {
        question: "Ca khúc cách mạng sục sôi 'Lên đàng' do nhạc sĩ nào sáng tác?",
        options: ["Nhạc sĩ Lưu Hữu Phước", "Nhạc sĩ Văn Cao", "Nhạc sĩ Đỗ Nhuận", "Nhạc sĩ Hoàng Việt"],
        correct: 0,
        explanation: "'Lên đàng' là hành khúc rực lửa cổ vũ thế hệ học sinh sinh viên lên đường đấu tranh của nhạc sĩ Lưu Hữu Phước."
      },
      {
        question: "Quê hương của nhạc sĩ Lưu Hữu Phước ở tỉnh/thành phố nào ở miền Nam?",
        options: ["Cần Thơ", "Hà Nội", "Hải Phòng", "Nam Định"],
        correct: 0,
        explanation: "Nhạc sĩ Lưu Hữu Phước sinh ra tại Ô Môn, thành phố Cần Thơ bên bờ sông Hậu hiền hòa."
      }
    ]
  },

  // ================= CHỦ ĐỀ 6: HÒA BÌNH VÀ HỮU NGHỊ =================
  {
    id: "bai-11",
    lessonNum: 11,
    topicNum: 6,
    topicName: "Chủ đề 6: Hòa bình và hữu nghị",
    tag: "Học hát",
    title: "Bài 11: Học hát bài 'Nụ cười' (Nhạc Nga, Lời Việt: Phạm Tuyên)",
    objectives: [
      "Hát đúng giai điệu, tiết tấu và ca từ bài hát 'Nụ cười' (Nhạc: V. Shainsky, Lời Việt: Phạm Tuyên).",
      "Biết thể hiện tính chất rộn ràng, lạc quan, truyền cảm hứng về nụ cười gắn kết tình bạn toàn cầu.",
      "Hát kết hợp vận động phụ họa, vỗ tay theo phách hoặc gõ đệm nhạc cụ gõ.",
      "Mở rộng tình hữu nghị, đoàn kết với bạn bè năm châu bốn biển vì một thế giới hòa bình."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800">
          <h4 class="font-bold text-sky-900 dark:text-sky-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-face-smile text-sky-600"></i> Xuất xứ bài hát 'Nụ cười'
          </h4>
          <p class="text-xs sm:text-sm">
            'Nụ cười' là ca khúc thiếu nhi lừng danh của nước Nga do nhạc sĩ <strong>V. Shainsky</strong> sáng tác trong bộ phim hoạt hình Chú cá sấu Gena. Nhạc sĩ <strong>Phạm Tuyên</strong> đã viết lời Việt trong sáng, gần gũi với tuổi thơ Việt Nam: <em>'Cho trời sáng lên cùng với bao nụ cười...'</em>
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-dove text-sky-500"></i> Thông điệp hòa bình nhân loại
          </h5>
          <p class="text-xs sm:text-sm">
            Bài hát khẳng định nụ cười xua tan giông bão, nối vòng tay bè bạn khắp năm châu. Giai điệu rộn ràng, dễ thuộc, dễ hát, rất thích hợp cho các hoạt động sinh hoạt tập thể, giao lưu quốc tế của đội thiếu niên.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-users-viewfinder text-sky-500"></i> Hát nối tiếp và hòa giọng:
        </h5>
        <p class="text-xs">Tổ 1 hát câu 1, Tổ 2 hát câu 2, Tổ 3 hát câu 3; đến điệp khúc 'Để làn mây không bay thành bão giông...' cả lớp đứng lên vung tay hòa giọng đồng thanh rộn rã.</p>
      </div>
    `,
    summary: "Bài hát 'Nụ cười' (Nhạc Nga, lời Việt Phạm Tuyên) mang giai điệu vui tươi, gửi gắm thông điệp hòa bình, thắp sáng tình thân ái hữu nghị giữa trẻ em trên khắp hành tinh.",
    quizzes: [
      {
        question: "Ai là tác giả viết lời Việt cho ca khúc thiếu nhi Nga nổi tiếng 'Nụ cười'?",
        options: ["Nhạc sĩ Phạm Tuyên", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phong Nhã", "Nhạc sĩ Huy Du"],
        correct: 0,
        explanation: "Nhạc sĩ Phạm Tuyên đã viết lời Việt xuất sắc cho bài hát này, được nhiều thế hệ thiếu nhi Việt Nam yêu thích."
      },
      {
        question: "Bài hát 'Nụ cười' có nguồn gốc xuất xứ từ nền âm nhạc của quốc gia nào?",
        options: ["Nước Nga", "Nước Pháp", "Nước Ý", "Nước Đức"],
        correct: 0,
        explanation: "Ca khúc 'Nụ cười' (Ulybka) là một bài hát thiếu nhi kinh điển của nước Nga do V. Shainsky sáng tác."
      },
      {
        question: "Thông điệp cao đẹp mà bài hát 'Nụ cười' gửi gắm tới mọi người là gì?",
        options: [
          "Nụ cười đem lại niềm vui, xua tan giông bão và kết nối tình hữu nghị hòa bình",
          "Khuyên mọi người nên ở một mình không kết bạn",
          "Kêu gọi các cuộc tranh đua thắng thua",
          "Nhắc nhở học sinh thức khuya học bài"
        ],
        correct: 0,
        explanation: "Bài hát khẳng định sức mạnh kì diệu của nụ cười trong việc xóa bỏ khoảng cách và mang lại bình yên cho nhân loại."
      },
      {
        question: "Giai điệu của bài hát 'Nụ cười' mang tính chất như thế nào?",
        options: [
          "Trong sáng, vui tươi, hồn nhiên và tràn đầy niềm lạc quan",
          "Bi thương, sầu thảm",
          "Dồn dập đáng sợ",
          "Ru ngủ chậm rãi"
        ],
        correct: 0,
        explanation: "Giai điệu bài hát rất rộn ràng, hồn nhiên và mang lại năng lượng vui tươi phấn khởi."
      }
    ]
  },

  {
    id: "bai-12",
    lessonNum: 12,
    topicNum: 6,
    topicName: "Chủ đề 6: Hòa bình và hữu nghị",
    tag: "Thường thức âm nhạc",
    title: "Bài 12: Nhạc sĩ thiên tài Ludwig van Beethoven & Bản giao hưởng số 5",
    objectives: [
      "Nắm được tiểu sử, cuộc đời đầy nghị lực phi thường và sự nghiệp sáng tác vĩ đại của nhà soạn nhạc Ludwig van Beethoven.",
      "Hiểu nét đặc sắc của mô-típ 'Định mệnh gõ cửa' trong Bản giao hưởng số 5 Đô thứ nổi tiếng thế giới.",
      "Cảm phục tinh thần vượt lên nghịch cảnh khi bị điếc hoàn toàn nhưng vẫn cống hiến những kiệt tác đỉnh cao cho nhân loại.",
      "Bước đầu biết thưởng thức và cảm thụ vẻ đẹp của âm nhạc giao hưởng cổ điển phương Tây."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800/60 border border-amber-200 dark:border-amber-900/40">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-crown text-amber-600"></i> Ludwig van Beethoven (1770 - 1827)
          </h4>
          <p class="text-xs sm:text-sm">
            <strong>Ludwig van Beethoven</strong> sinh tại Bonn (nước Đức), là một trong những nhà soạn nhạc vĩ đại nhất trong lịch sử nhân loại, người đặt cầu nối giữa trường phái <em>Cổ điển Vienna</em> và thời kỳ <em>Lãng mạn</em>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-hand-fist text-amber-500"></i> Nghị lực vượt qua số phận
            </h5>
            <p class="text-xs sm:text-sm leading-relaxed">
              Từ năm 30 tuổi, tai ông bắt đầu kém dần và sau đó bị điếc hoàn toàn. Dù không thể nghe được âm thanh bằng tai thể xác, với trí tưởng tượng âm nhạc phi thường, ông vẫn sáng tác nên những bản giao hưởng bất hủ như Giao hưởng số 5, Giao hưởng số 9 (Khúc hoan ca).
            </p>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-compact-disc text-amber-500"></i> Giao hưởng số 5 (Định mệnh)
            </h5>
            <p class="text-xs sm:text-sm leading-relaxed">
              Tác phẩm mở đầu bằng 4 nốt nhạc kinh điển: <em>'Tèn ten ten tén!'</em>. Beethoven từng giải thích: <em>'Định mệnh gõ cửa như thế đó!'</em>. Bản giao hưởng mô tả cuộc chiến đấu kiên cường của con người chống lại nghịch cảnh để vươn tới chiến thắng rực rỡ.
            </p>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-headphones text-amber-500"></i> Nghe và cảm thụ âm nhạc:
        </h5>
        <p class="text-xs">Lắng nghe chương 1 Bản giao hưởng số 5. Gõ lại mô-típ tiết tấu mở đầu: Đơn - đơn - đơn - Trắng (ngắt dứt khoát và mạnh mẽ).</p>
      </div>
    `,
    summary: "Beethoven là nhà soạn nhạc thiên tài người Đức. Dù bị điếc hoàn toàn, ông vẫn kiên cường vượt qua nghịch cảnh để sáng tác nên những kiệt tác giao hưởng bất hủ như Giao hưởng số 5 (Định mệnh) và số 9 (Niềm vui).",
    quizzes: [
      {
        question: "Nhà soạn nhạc thiên tài Ludwig van Beethoven sinh ra tại quốc gia nào?",
        options: ["Nước Đức", "Nước Nga", "Nước Pháp", "Nước Ý"],
        correct: 0,
        explanation: "Ludwig van Beethoven sinh ra tại thành phố Bonn, nước Đức."
      },
      {
        question: "Biến cố sức khỏe lớn nhất trong cuộc đời của Beethoven khi ông đang ở đỉnh cao sự nghiệp là gì?",
        options: ["Bị điếc hoàn toàn", "Bị mù hai mắt", "Bị gãy tay phải", "Mất trí nhớ"],
        correct: 0,
        explanation: "Beethoven bị suy giảm thính lực từ năm 30 tuổi và sau đó điếc hoàn toàn, nhưng ông vẫn sáng tác bằng tâm hồn và trí óc thiên tài."
      },
      {
        question: "Mô-típ 4 nốt nhạc mở đầu đầy kịch tính của Bản giao hưởng số 5 của Beethoven tượng trưng cho điều gì?",
        options: [
          "'Định mệnh gõ cửa' - cuộc đấu tranh của con người vượt lên số phận",
          "Tiếng suối reo trong rừng vắng",
          "Tiếng sấm sét mùa hè",
          "Tiếng chuông nhà thờ ban mai"
        ],
        correct: 0,
        explanation: "Beethoven từng nói về 4 nốt nhạc mở đầu: 'Định mệnh gõ cửa như thế đó!', tượng trưng cho thách thức của số phận."
      },
      {
        question: "Bản giao hưởng số 9 nổi tiếng của Beethoven có chương cuối phổ thơ Friedrich Schiller ca ngợi điều gì?",
        options: [
          "Niềm vui và tình bác ái nhân loại (Khúc hoan ca - Ode to Joy)",
          "Nỗi đau chiến tranh tàn phá",
          "Sự cô đơn của mùa đông lạnh giá",
          "Cảnh săn bắn trong hoàng gia"
        ],
        correct: 0,
        explanation: "Chương 4 Giao hưởng số 9 là 'Ode to Joy' (Khúc hoan ca), tôn vinh tình anh em đại đồng và niềm vui gắn kết nhân loại."
      }
    ]
  },

  // ================= CHỦ ĐỀ 7: GIA ĐÌNH THƯƠNG YÊU =================
  {
    id: "bai-13",
    lessonNum: 13,
    topicNum: 7,
    topicName: "Chủ đề 7: Gia đình thương yêu",
    tag: "Học hát",
    title: "Bài 13: Học hát bài 'Chỉ có một trên đời' & Tình mẫu tử thiêng liêng",
    objectives: [
      "Hát đúng giai điệu, lời ca của bài hát 'Chỉ có một trên đời' (Nhạc: Trương Quang Lục).",
      "Thể hiện được tình cảm yêu thương, sự kính trọng và lòng biết ơn vô bờ bến đối với mẹ hiền.",
      "Biết ngân dài đúng số phách, lấy hơi sâu nhẹ nhàng để giọng hát mượt mà, sâu lắng.",
      "Gắn kết tình cảm gia đình, hiếu thảo với ông bà, cha mẹ."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-heart text-pink-600"></i> Ca khúc 'Chỉ có một trên đời'
          </h4>
          <p class="text-xs sm:text-sm">
            Bài hát do nhạc sĩ <strong>Trương Quang Lục</strong> sáng tác dựa trên ý thơ nước ngoài. Với ca từ mộc mạc mà lay động lòng người: bầu trời có muôn vàn vì sao, đồng cỏ có vạn đoá hoa, nhưng mẹ hiền yêu quý thì trên đời chỉ có một mà thôi.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-microphone-lines text-pink-500"></i> Lưu ý xử lí giọng hát
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li><strong>Nhịp điệu:</strong> Nhịp nhàng, êm ả như lời ru ngọt ngào của mẹ bên cánh võng trưa hè.</li>
            <li><strong>Sắc thái:</strong> Hát nhỏ nhẹ, lắng đọng ở phần mở đầu, dâng trào cảm xúc ở câu kết: 'Riêng mặt trời chỉ có một mà thôi / Và mẹ em chỉ có một trên đời'.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-pink-500"></i> Hoạt động bày tỏ yêu thương:
        </h5>
        <p class="text-xs">Học sinh tập biểu diễn hát đơn ca kết hợp nhóm bè phụ họa. Về nhà hát tặng mẹ nhân dịp Ngày của Mẹ hoặc ngày Quốc tế Phụ nữ 8/3.</p>
      </div>
    `,
    summary: "Ca khúc 'Chỉ có một trên đời' của nhạc sĩ Trương Quang Lục với giai điệu êm ái như tiếng hát ru ca ngợi tình mẫu tử thiêng liêng và lòng biết ơn vô hạn đối với mẹ hiền.",
    quizzes: [
      {
        question: "Ai là tác giả sáng tác ca khúc thiếu nhi 'Chỉ có một trên đời'?",
        options: ["Nhạc sĩ Trương Quang Lục", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phạm Tuyên", "Nhạc sĩ Trịnh Công Sơn"],
        correct: 0,
        explanation: "Bài hát 'Chỉ có một trên đời' do nhạc sĩ Trương Quang Lục sáng tác dựa theo lời thơ dịch."
      },
      {
        question: "Hình tượng nào được so sánh với người mẹ trong lời ca của bài hát?",
        options: [
          "Mặt trời soi sáng ấm áp chỉ có một trên đời",
          "Cơn gió mùa đông lạnh lẽo",
          "Đám mây đen kịt",
          "Giọt mưa rào thoáng qua"
        ],
        correct: 0,
        explanation: "Lời ca ví von: 'Bao vì sao ngời sáng ban đêm / Riêng mặt trời chỉ có một mà thôi / Và mẹ em chỉ có một trên đời'."
      },
      {
        question: "Giai điệu của bài hát 'Chỉ có một trên đời' mang âm hưởng gần gũi với thể loại nào?",
        options: ["Điệu hát ru êm đềm", "Hành khúc hành quân", "Nhạc nhảy Disco", "Nhạc kịch thính phòng"],
        correct: 0,
        explanation: "Bài hát có nhịp điệu đung đưa êm ái, gợi nhớ giai điệu ngọt ngào của những khúc hát ru của mẹ."
      },
      {
        question: "Học sinh nên thể hiện tình cảm đối với cha mẹ qua những hành động cụ thể nào?",
        options: [
          "Chăm chỉ học tập, vâng lời, đỡ đần việc nhà và bày tỏ lòng hiếu thảo",
          "Đòi hỏi mua nhiều đồ chơi đắt tiền",
          "Không nói chuyện với cha mẹ",
          "Bỏ học đi chơi điện tử"
        ],
        correct: 0,
        explanation: "Chăm ngoan, học giỏi và biết giúp đỡ cha mẹ là món quà ý nghĩa nhất của người con hiếu thảo."
      }
    ]
  },

  {
    id: "bai-14",
    lessonNum: 14,
    topicNum: 7,
    topicName: "Chủ đề 7: Gia đình thương yêu",
    tag: "Lí thuyết âm nhạc & Đọc nhạc",
    title: "Bài 14: Dấu nối, Dấu luyến, Dấu chấm dôi & Bài đọc nhạc số 5",
    objectives: [
      "Phân biệt rõ ràng định nghĩa và cách thể hiện của Dấu nối, Dấu luyến và Dấu chấm dôi trong bản nhạc.",
      "Biết cách tính giá trị thời gian ngân dài khi xuất hiện Dấu chấm dôi.",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 5 có chứa nốt chấm dôi và dấu luyến.",
      "Ứng dụng biểu diễn bài đọc nhạc bằng gõ phách hoặc sáo Recorder / Melodica."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-shapes text-pink-600"></i> Các kí hiệu âm nhạc bổ trợ quan trọng
        </h4>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-pink-50/70 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800">
            <strong class="text-pink-800 dark:text-pink-300 block mb-1">1. Dấu nối (Tie)</strong>
            <span>Đường cong nối liền <strong>hai hay nhiều nốt nhạc CÙNG CAO ĐỘ</strong>. Người hát ngân liền tiếng bằng tổng trường độ các nốt đó, không ngắt hơi.</span>
          </div>

          <div class="p-3.5 rounded-xl bg-pink-50/70 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800">
            <strong class="text-pink-800 dark:text-pink-300 block mb-1">2. Dấu luyến (Slur)</strong>
            <span>Đường cong nối liền <strong>hai hay nhiều nốt nhạc KHÁC CAO ĐỘ</strong>. Người hát lướt mềm mại từ nốt này sang nốt kia trên cùng một ca từ.</span>
          </div>

          <div class="p-3.5 rounded-xl bg-pink-50/70 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800">
            <strong class="text-pink-800 dark:text-pink-300 block mb-1">3. Dấu chấm dôi (Dot)</strong>
            <span>Dấu chấm nhỏ đặt bên phải nốt nhạc, có tác dụng <strong>làm tăng thêm một nửa (1/2) giá trị trường độ</strong> của nốt đứng trước nó.</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm mt-3">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-calculator text-pink-500"></i> Công thức tính nốt có Dấu chấm dôi:
          </h5>
          <ul class="text-xs sm:text-sm space-y-1 list-disc list-inside">
            <li><strong>Nốt trắng chấm dôi:</strong> = 1 nốt trắng + 1 nốt đen = <strong>3 phách</strong>.</li>
            <li><strong>Nốt đen chấm dôi:</strong> = 1 nốt đen + 1 nốt móc đơn = <strong>1 phách rưỡi (1.5 phách)</strong>.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-music text-pink-500"></i> Luyện tập Bài đọc nhạc số 5:
        </h5>
        <p class="text-xs">Bài đọc nhạc số 5 viết ở nhịp 2/4 có tiết tấu nốt đen chấm dôi đi liền nốt móc đơn: Đọc nhịp phách 'Đen - đơn | Đen - Đen' thật chắc nhịp.</p>
      </div>
    `,
    summary: "Dấu nối dùng cho các nốt cùng cao độ, Dấu luyến dùng cho các nốt khác cao độ. Dấu chấm dôi làm tăng thêm nửa trường độ của nốt đứng trước nó (Nốt trắng chấm dôi = 3 phách; Nốt đen chấm dôi = 1.5 phách).",
    quizzes: [
      {
        question: "Dấu nối có chức năng gì trong bản nhạc?",
        options: [
          "Nối các nốt có CÙNG cao độ lại với nhau và cộng dồn trường độ",
          "Nối các nốt khác cao độ để hát luyến từ",
          "Làm tăng gấp đôi tốc độ bài hát",
          "Yêu cầu người hát ngừng hẳn không hát nữa"
        ],
        correct: 0,
        explanation: "Dấu nối liên kết 2 hay nhiều nốt có cùng cao độ, người biểu diễn ngân liền mạch bằng tổng thời gian các nốt."
      },
      {
        question: "Dấu chấm dôi đặt bên phải một nốt nhạc làm tăng thêm bao nhiêu độ dài trường độ?",
        options: [
          "Tăng thêm một nửa (1/2) giá trị của nốt đó",
          "Tăng gấp đôi giá trị của nốt đó",
          "Tăng thêm 3 phách",
          "Không làm thay đổi giá trị gì"
        ],
        correct: 0,
        explanation: "Quy tắc cơ bản: Dấu chấm dôi kéo dài thêm chính xác 1/2 giá trị trường độ của nốt nhạc đứng trước."
      },
      {
        question: "Một nốt trắng chấm dôi (nốt trắng có chấm dôi bên cạnh) có độ dài bằng bao nhiêu phách trong nhịp 2/4?",
        options: ["3 phách", "2 phách", "4 phách", "1 phách"],
        correct: 0,
        explanation: "Nốt trắng = 2 phách. Chấm dôi = 1/2 nốt trắng = 1 phách. Tổng cộng = 2 + 1 = 3 phách."
      },
      {
        question: "Điểm khác biệt căn bản giữa Dấu luyến và Dấu nối là gì?",
        options: [
          "Dấu luyến nối các nốt KHÁC cao độ, còn Dấu nối nối các nốt CÙNG cao độ",
          "Dấu luyến chỉ dùng cho kèn đồng",
          "Dấu nối có màu đen còn dấu luyến màu đỏ",
          "Hai dấu hoàn toàn giống nhau không có gì khác biệt"
        ],
        correct: 0,
        explanation: "Dấu nối liên kết các nốt cùng cao độ, còn dấu luyến dùng để lướt êm qua các nốt khác cao độ trên cùng một âm tiết ca từ."
      }
    ]
  },

  // ================= CHỦ ĐỀ 8: MÙA HÈ QUÊ HƯƠNG =================
  {
    id: "bai-15",
    lessonNum: 15,
    topicNum: 8,
    topicName: "Chủ đề 8: Mùa hè quê hương",
    tag: "Học hát",
    title: "Bài 15: Học hát bài 'Mùa hè ước mong' / 'Em yêu mùa hè quê em'",
    objectives: [
      "Hát đúng giai điệu, lời ca bài hát thể hiện niềm hân hoan đón chào mùa hè rực rỡ nắng vàng và tiếng ve ngân.",
      "Biết thể hiện nhịp điệu rộn ràng, ánh mắt vui tươi, tự tin khi trình bày trước tập thể.",
      "Hát kết hợp gõ đệm nhạc cụ hoặc nhảy dân vũ đơn giản theo nhóm.",
      "Lên kế hoạch một kỳ nghỉ hè bổ ích, an toàn, lành mạnh và ý nghĩa."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-200 text-sm mb-1 flex items-center gap-2">
            <i class="fa-solid fa-sun text-amber-600"></i> Âm hưởng mùa hè tuổi thơ
          </h4>
          <p class="text-xs sm:text-sm">
            Mùa hè là mùa của hoa phượng vĩ đỏ rực góc sân trường, mùa của tiếng ve ngân rộn rã gọi hè và những chuyến về quê thăm ông bà, tắm biển mát rượi. Các bài hát về mùa hè luôn tràn đầy sức sống tươi trẻ, khát khao khám phá thế giới rộng lớn của tuổi thơ.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h5 class="font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-music text-amber-500"></i> Kỹ năng biểu diễn tập thể
          </h5>
          <ul class="text-xs sm:text-sm space-y-1.5 list-disc list-inside">
            <li>Hát đồng thanh tròn tiếng, không ngắt quãng giữa các từ có dấu luyến.</li>
            <li>Động tác tay mở rộng đón ánh nắng mai, nhún chân nhịp nhàng theo phách mạnh nhịp 2/4.</li>
          </ul>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-guitar text-amber-500"></i> Dự án biểu diễn báo cáo cuối năm:
        </h5>
        <p class="text-xs">Các tổ chuẩn bị một tiết mục văn nghệ tự chọn: Tổ 1 hát múa bài Mùa hè ước mong, Tổ 2 hòa tấu Recorder / Melodica, Tổ 3 gõ đệm thanh phách và trống nhỏ.</p>
      </div>
    `,
    summary: "Bài hát về mùa hè khép lại năm học đầu tiên của cấp THCS với nhiều kỉ niệm đẹp, khích lệ các em học sinh bước vào kỳ nghỉ hè an toàn, bổ ích và đầy niềm vui.",
    quizzes: [
      {
        question: "Hình ảnh thiên nhiên nào thường gắn liền với các ca khúc viết về mùa hè học trò?",
        options: [
          "Hoa phượng đỏ và tiếng ve ngân rộn rã",
          "Cành đào phai đón Tết",
          "Cơn gió bấc lạnh buốt mùa đông",
          "Cánh đồng tuyết trắng xóa"
        ],
        correct: 0,
        explanation: "Hoa phượng vĩ đỏ thắm và tiếng ve kêu râm ran là biểu tượng quen thuộc của mùa hè học đường."
      },
      {
        question: "Sắc thái chủ đạo của các bài hát viết về mùa hè thiếu nhi là gì?",
        options: [
          "Rộn ràng, vui tươi, tràn đầy sức sống và hy vọng",
          "U uất, buồn bã",
          "Nghiêm trang lạnh lùng",
          "Ảm đạm như đêm tối"
        ],
        correct: 0,
        explanation: "Âm nhạc chào hè luôn rực rỡ, náo nức và lan tỏa năng lượng tích cực của tuổi trẻ."
      },
      {
        question: "Biểu diễn hợp xướng hoặc đồng ca cần sự phối hợp quan trọng nhất nào giữa các thành viên?",
        options: [
          "Sự hòa quyện về âm thanh, đúng nhịp phách và đều đặn theo sự chỉ huy",
          "Mỗi người hát một tông giọng và một tốc độ tùy thích",
          "Một người cố hát thật to để át tất cả các bạn khác",
          "Tự ý chạy quanh sân khấu khi đang hát"
        ],
        correct: 0,
        explanation: "Hát tập thể đòi hỏi tinh thần đồng đội cao, biết lắng nghe nhau để hòa quyện âm thanh."
      },
      {
        question: "Để kỳ nghỉ hè thực sự bổ ích và ý nghĩa, học sinh nên làm gì?",
        options: [
          "Tham gia thể thao, rèn luyện kỹ năng sống, đọc sách và giúp đỡ gia đình",
          "Thức thâu đêm chơi game suốt cả mùa hè",
          "Đi tắm sông suối sâu nguy hiểm một mình",
          "Ở lì trong phòng đóng kín cửa không giao tiếp với ai"
        ],
        correct: 0,
        explanation: "Kỳ nghỉ hè là cơ hội tuyệt vời để rèn luyện thể chất, đọc sách mở mang tri thức và phụ giúp cha mẹ."
      }
    ]
  },

  {
    id: "bai-16",
    lessonNum: 16,
    topicNum: 8,
    topicName: "Chủ đề 8: Mùa hè quê hương",
    tag: "Tổng kết & Dự án âm nhạc",
    title: "Bài 16: Ôn tập tổng kết cuối năm & Dự án âm nhạc 'Ngày hội âm nhạc tuổi thơ'",
    objectives: [
      "Hệ thống hóa toàn bộ kiến thức nhạc lí cốt lõi đã học trong chương trình Âm nhạc 6: Thuộc tính âm thanh, Kí hiệu Latin C-D-E-F-G-A-B, Nhịp 2/4, Dấu lặng, Dấu nối, Dấu luyến, Dấu chấm dôi.",
      "Ôn tập 5 bài đọc nhạc và các làn điệu dân ca, ca khúc học đường tiêu biểu.",
      "Nhớ lại các danh nhân âm nhạc: Văn Cao, Lưu Hữu Phước, Beethoven và kiệt tác Đàn Bầu, Cồng chiêng Tây Nguyên.",
      "Tổ chức thành công buổi biểu diễn báo cáo dự án âm nhạc kết thúc năm học lớp 6."
    ],
    content: `
      <div class="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm mb-1 flex items-center gap-2">
          <i class="fa-solid fa-list-check text-cyan-600"></i> Bảng tổng hợp kiến thức cốt lõi Âm nhạc Lớp 6
        </h4>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <strong class="text-cyan-600 dark:text-cyan-400 block mb-1">1. Lí thuyết âm nhạc trọng tâm</strong>
            <ul class="space-y-1 list-disc list-inside text-xs">
              <li><strong>4 thuộc tính âm thanh:</strong> Cao độ, Trường độ, Cường độ, Âm sắc.</li>
              <li><strong>Kí hiệu nốt Latin:</strong> C (Đô), D (Rê), E (Mi), F (Pha), G (Son), A (La), B (Si).</li>
              <li><strong>Nhịp 2/4:</strong> Có 2 phách nốt đen trong một ô nhịp (phách 1 mạnh, phách 2 nhẹ).</li>
              <li><strong>Dấu lặng:</strong> Lặng tròn (4p), lặng trắng (2p), lặng đen (1p), lặng đơn (1/2p).</li>
              <li><strong>Dấu chấm dôi:</strong> Làm tăng 1/2 giá trị trường độ nốt nhạc đứng trước.</li>
            </ul>
          </div>

          <div class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <strong class="text-cyan-600 dark:text-cyan-400 block mb-1">2. Tác giả & Tác phẩm tiêu biểu</strong>
            <ul class="space-y-1 list-disc list-inside text-xs">
              <li><strong>Văn Cao:</strong> Kiệt tác <em>Tiến quân ca</em> (Quốc ca Việt Nam sáng tác 1944).</li>
              <li><strong>Lưu Hữu Phước:</strong> Hành khúc <em>Lên đàng</em> đầy nhiệt huyết thanh niên.</li>
              <li><strong>Beethoven:</strong> Thiên tài âm nhạc cổ điển với <em>Giao hưởng số 5</em> (Định mệnh).</li>
              <li><strong>Nhạc cụ truyền thống:</strong> Đàn Bầu (Độc huyền cầm), Cồng chiêng Tây Nguyên.</li>
            </ul>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-700 text-white rounded-2xl shadow-md mt-4">
          <h5 class="font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-award"></i> Chúc mừng các em hoàn thành xuất sắc chương trình Âm nhạc 6!
          </h5>
          <p class="text-xs sm:text-sm leading-relaxed text-white/90">
            Qua 8 chủ đề và 16 bài học, các em đã trang bị cho mình nền tảng nhạc lí vững vàng, đôi tai biết lắng nghe và cảm thụ cái đẹp, rèn luyện kỹ năng thanh nhạc và nhạc cụ học đường để tự tin bước tiếp vào chương trình Âm nhạc 7.
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-xs sm:text-sm space-y-2">
        <h5 class="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <i class="fa-solid fa-trophy text-cyan-500"></i> Bài tập ôn luyện toàn khóa:
        </h5>
        <p class="text-xs">Hãy nhấn vào nút 'Kiểm tra toàn khóa (10 câu)' ở đầu trang hoặc góc phải màn hình để làm bài thi trắc nghiệm tổng hợp và đánh giá kết quả đạt được.</p>
      </div>
    `,
    summary: "Bài học tổng kết toàn bộ 8 chủ đề chương trình Âm nhạc lớp 6 theo định hướng phát triển phẩm chất và năng lực của GDPT 2018 Kết nối tri thức với cuộc sống.",
    quizzes: [
      {
        question: "Một nốt tròn có giá trị trường độ bằng bao nhiêu nốt đen?",
        options: ["4 nốt đen", "2 nốt đen", "8 nốt đen", "1 nốt đen"],
        correct: 0,
        explanation: "1 nốt tròn = 2 nốt trắng = 4 nốt đen = 8 nốt móc đơn."
      },
      {
        question: "Cặp nốt nào sau đây có khoảng cách cao độ bằng một nửa cung (1/2 cung)?",
        options: ["Mi - Pha và Si - Đô", "Đô - Rê", "Rê - Mi", "Pha - Son"],
        correct: 0,
        explanation: "Trong 7 âm cơ bản tự nhiên, hai khoảng cách nửa cung là giữa Mi - Pha (E - F) và Si - Đô (B - C)."
      },
      {
        question: "Nhạc cụ nào sau đây là nhạc cụ truyền thống của dân tộc Việt Nam chỉ có một dây duy nhất?",
        options: ["Đàn Bầu", "Đàn Nhị", "Đàn Tranh", "Đàn Tam"],
        correct: 0,
        explanation: "Đàn Bầu (Độc huyền cầm) là nhạc cụ một dây đặc sắc của dân tộc Việt Nam."
      },
      {
        question: "Ai là tác giả của bản giao hưởng số 5 Đô thứ 'Định mệnh'?",
        options: ["Ludwig van Beethoven", "W.A. Mozart", "J.S. Bach", "Franz Schubert"],
        correct: 0,
        explanation: "Bản giao hưởng số 5 'Định mệnh' là kiệt tác bất hủ của nhà soạn nhạc Ludwig van Beethoven."
      }
    ]
  }
];

module.exports = lessons;
