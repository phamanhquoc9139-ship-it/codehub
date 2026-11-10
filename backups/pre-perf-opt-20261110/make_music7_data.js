// Data for Âm Nhạc 7 (16 Lessons across 8 Topics)
// Bộ sách Kết nối tri thức với cuộc sống (Chương trình GDPT 2018)

const lessons = [
  // CHỦ ĐỀ 1: NGÀY KHAI TRƯỜNG
  {
    id: "bai-1",
    lessonNum: 1,
    topicNum: 1,
    topicName: "Chủ đề 1: Ngày khai trường",
    title: "Bài 1: Học hát Khai trường & Thường thức: Nhạc sĩ Trịnh Công Sơn và Tuổi đời mênh mông",
    tag: "Hát & Tác giả tác phẩm",
    objectives: [
      "Hát đúng giai điệu, lời ca trong sáng, rộn ràng của bài hát Khai trường.",
      "Biết lấy hơi đúng nhịp, phát âm rõ lời và biểu cảm niềm vui ngày tựu trường.",
      "Tìm hiểu cuộc đời, phong cách âm nhạc nhân văn của Nhạc sĩ Trịnh Công Sơn.",
      "Cảm thụ giai điệu hồn nhiên, triết lý yêu thương trong ca khúc thiếu nhi Tuổi đời mênh mông."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Học hát bài hát "Khai trường"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Bài hát <strong>Khai trường</strong> mang tiết tấu tươi vui, rộn ràng như bước chân hân hoan của học sinh trong ngày đầu năm học mới. Giai điệu trong sáng, nhịp điệu dứt khoát diễn tả niềm xúc động khi gặp lại bạn bè, thầy cô và tiếng trống trường giục giã khai giảng.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/50">
            <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-music"></i> Đặc điểm âm nhạc
            </h5>
            <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li>Bài hát viết ở nhịp <strong>2/4</strong>, tốc độ vừa phải, hơi nhanh (Allegretto).</li>
              <li>Sử dụng tiết tấu đảo phách nhẹ tạo cảm giác nảy hạt, nhí nhảnh.</li>
              <li>Lời ca gợi nhắc hình ảnh cờ hoa rực rỡ, khăn quàng đỏ tung bay dưới nắng thu.</li>
            </ul>
          </div>
          <div class="p-4 bg-violet-50 dark:bg-violet-950/40 rounded-xl border border-violet-200 dark:border-violet-800/50">
            <h5 class="font-bold text-violet-800 dark:text-violet-300 mb-2 flex items-center gap-2">
              <i class="fa-solid fa-microphone-lines"></i> Kỹ thuật thể hiện
            </h5>
            <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li>Lấy hơi nhanh ở đầu câu và sau mỗi dấu lặng đơn.</li>
              <li>Mở khẩu hình chữ 'O' và 'A' tròn trịa để âm thanh vang sáng tự nhiên.</li>
              <li>Hát nảy nhẹ ở các tiếng trống trường mô phỏng <em>"Tùng... tùng... tùng..."</em>.</li>
            </ul>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Thường thức âm nhạc: Nhạc sĩ Trịnh Công Sơn và ca khúc "Tuổi đời mênh mông"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Nhạc sĩ Trịnh Công Sơn</strong> (1939 - 2001) quê gốc ở Thừa Thiên Huế, là một trong những tượng đài âm nhạc lớn nhất của tân nhạc Việt Nam thế kỷ XX. Bên cạnh mảng ca khúc phản chiến và tình ca sâu sắc, ông còn để lại những bài ca thiếu nhi bất hủ như <em>Em là hoa hồng nhỏ</em>, <em>Tuổi đời mênh mông</em>, <em>Tiếng ve gọi hè</em>,...
        </p>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
          <h5 class="font-bold text-purple-700 dark:text-purple-300">Ý nghĩa ca khúc "Tuổi đời mênh mông":</h5>
          <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <em>"Mây và tóc em bay trong chiều gió lộng... Nghe cuộc đời cất tiếng gọi mênh mông..."</em>. Bài hát khuyên nhủ thanh thiếu niên mở rộng tâm hồn đón nhận vẻ đẹp kỳ diệu của cuộc sống, sống bao dung, vị tha và nuôi dưỡng những ước mơ tươi đẹp.
          </p>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Bài tập rèn luyện:</h5>
        <ol class="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>Khởi động giọng theo mẫu âm <em>Mi - Mê - Ma - Mô - Mu</em> từ nốt Đô1 đến Son1.</li>
          <li>Hát bài <strong>Khai trường</strong> kết hợp gõ đệm theo tiết tấu lời ca.</li>
          <li>Nêu cảm nhận về triết lý tình yêu thương cuộc sống trong bài hát <em>Tuổi đời mênh mông</em>.</li>
        </ol>
      </div>
    `,
    summary: "Bài 1 mang lại cảm xúc phấn khởi ngày khai giảng qua ca khúc Khai trường, đồng thời giúp học sinh tìm hiểu cuộc đời Nhạc sĩ Trịnh Công Sơn và thông điệp nhân văn trong tác phẩm Tuổi đời mênh mông.",
    quizzes: [
      {
        question: "Bài hát 'Khai trường' được viết ở số chỉ nhịp nào?",
        options: ["Nhịp 3/4", "Nhịp 2/4", "Nhịp 4/4", "Nhịp 6/8"],
        correct: 1,
        explanation: "Bài hát Khai trường được viết ở nhịp 2/4 với nhịp điệu rộn ràng, dứt khoát phù hợp không khí ngày hội khai giảng."
      },
      {
        question: "Nhạc sĩ Trịnh Công Sơn sinh năm bao nhiêu và quê gốc ở tỉnh nào?",
        options: [
          "Sinh năm 1939, quê ở Thừa Thiên Huế",
          "Sinh năm 1945, quê ở Hà Nội",
          "Sinh năm 1930, quê ở Quảng Nam",
          "Sinh năm 1954, quê ở Nam Định"
        ],
        correct: 0,
        explanation: "Nhạc sĩ tài hoa Trịnh Công Sơn sinh ngày 28/2/1939 tại Đắk Lắk nhưng quê gốc làng Minh Hương, huyện Hương Trà, tỉnh Thừa Thiên Huế."
      },
      {
        question: "Ca khúc thiếu nhi nào sau đây KHÔNG PHẢI là sáng tác của nhạc sĩ Trịnh Công Sơn?",
        options: [
          "Em là hoa hồng nhỏ",
          "Tuổi đời mênh mông",
          "Bác Hồ - Người cho em tất cả",
          "Tiếng ve gọi hè"
        ],
        correct: 2,
        explanation: "Bài hát 'Bác Hồ - Người cho em tất cả' do nhạc sĩ Hoàng Long và Hoàng Lân sáng tác, ba bài còn lại đều là sáng tác của Trịnh Công Sơn."
      },
      {
        question: "Khi thể hiện bài hát 'Khai trường', sắc thái tình cảm cần thể hiện là gì?",
        options: [
          "Buồn bã, luyến tiếc mùa hè",
          "Vui tươi, hân hoan, rộn rã và tràn đầy tự tin",
          "Ủ rũ, chậm rãi, trầm mặc",
          "Trang nghiêm như quốc ca"
        ],
        correct: 1,
        explanation: "Bài hát Khai trường cần được hát với giọng vui tươi, nét mặt rạng rỡ và cảm xúc náo nức ngày tựu trường."
      }
    ]
  },

  // BÀI 2
  {
    id: "bai-2",
    lessonNum: 2,
    topicNum: 1,
    topicName: "Chủ đề 1: Ngày khai trường",
    title: "Bài 2: Lí thuyết âm nhạc: Nhịp lấy đà & Đọc nhạc: Bài đọc nhạc số 1",
    tag: "Nhạc lí & Đọc nhạc",
    objectives: [
      "Hiểu rõ khái niệm nhịp lấy đà (ô nhịp thiếu) trong tác phẩm âm nhạc.",
      "Nhận biết vị trí và cách thể hiện nhịp lấy đà khi xướng âm hoặc chỉ huy nhịp.",
      "Đọc đúng cao độ và tiết tấu Bài đọc nhạc số 1 có chứa nhịp lấy đà.",
      "Ứng dụng gõ phách chuẩn xác ngay từ phách lấy đà."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Khái niệm Nhịp lấy đà (Anacrusis / Pickup bar)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Trong âm nhạc, đa số bản nhạc bắt đầu bằng một ô nhịp đầy đủ số phách quy định. Tuy nhiên, có rất nhiều bản nhạc bắt đầu bằng một <strong>ô nhịp không đủ số phách</strong> theo số chỉ nhịp. Ô nhịp đầu tiên đó được gọi là <strong>Nhịp lấy đà</strong> (hoặc <em>ô nhịp thiếu</em>).
        </p>
        <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/60 my-3">
          <h5 class="font-bold text-purple-900 dark:text-purple-200 mb-2">Đặc điểm quy ước của nhịp lấy đà:</h5>
          <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Nhịp lấy đà chỉ chứa các <strong>phách nhẹ</strong> hoặc một phần của phách nhẹ cuối cùng trước khi rơi vào phách mạnh đầu tiên của ô nhịp kế tiếp.</li>
            <li>Ô nhịp cuối cùng của bản nhạc thường bị bớt đi một số phách đúng bằng số phách đã dùng ở nhịp lấy đà (để tổng cộng phách ô đầu và ô cuối tròn bằng một ô nhịp hoàn chỉnh).</li>
            <li>Ví dụ quen thuộc: Bài hát <em>Quốc ca Việt Nam (Tiến quân ca)</em> mở đầu bằng nốt Đô lấy đà trước khi rơi vào tiếng "Đoàn" ở phách mạnh.</li>
          </ul>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Thực hành Bài đọc nhạc số 1
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-3">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Bài đọc nhạc số 1 viết ở giọng Đô trưởng, nhịp 2/4. Ô nhịp đầu tiên là nhịp lấy đà có giá trị bằng 1 nốt móc đơn (nửa phách nhẹ) hoặc 1 nốt đen:
          </p>
          <div class="p-3 bg-purple-50 dark:bg-purple-950/20 rounded font-mono text-xs sm:text-sm text-purple-800 dark:text-purple-300">
            (Son) | Đô - Mi - | Son - - La | Son - Mi - | Rê - - (Son) |<br/>
            (Son) | Đô - Mi - | Son - - La | Son - Rê - | Đô - - |
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            *Lưu ý: Nốt Son trong ngoặc đơn ở đầu bài là nốt lấy đà, phách gõ đầu tiên đập xuống ngay nốt Đô.
          </p>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Thực hành gõ phách:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Tập vung tay lấy đà theo hướng từ dưới lên trên rồi đập mạnh xuống phách 1.</li>
          <li>Đọc chuẩn cao độ Bài đọc nhạc số 1 kết hợp dùng thanh phách đệm nhịp.</li>
        </ol>
      </div>
    `,
    summary: "Nhịp lấy đà là ô nhịp mở đầu không đủ số phách quy định của số chỉ nhịp. Khi hát hoặc đọc nhạc có nhịp lấy đà, cần bắt vào phách nhẹ và dồn trọng âm chuẩn xác vào phách mạnh tiếp theo.",
    quizzes: [
      {
        question: "Ô nhịp đầu tiên của bản nhạc không đủ số phách quy định theo số chỉ nhịp được gọi là gì?",
        options: ["Nhịp đảo phách", "Nhịp lấy đà", "Nhịp đồng âm", "Nhịp bất thường"],
        correct: 1,
        explanation: "Nhịp lấy đà (Anacrusis) là thuật ngữ chỉ ô nhịp mở đầu thiếu phách, chỉ chứa phách nhẹ trước khi bắt vào phách mạnh."
      },
      {
        question: "Khi bắt đầu một bài hát có nhịp lấy đà, phách mạnh đầu tiên sẽ rơi vào đâu?",
        options: [
          "Rơi ngay vào nốt đầu tiên của nhịp lấy đà",
          "Rơi vào nốt đầu tiên của ô nhịp trọn vẹn thứ hai",
          "Không có phách mạnh nào trong toàn bài",
          "Rơi vào nốt cuối cùng của bài hát"
        ],
        correct: 1,
        explanation: "Nốt lấy đà luôn nằm ở phách nhẹ; trọng âm của phách mạnh đầu tiên luôn rơi vào nốt đầu tiên của ô nhịp trọn vẹn ngay sau nó."
      },
      {
        question: "Ca khúc nổi tiếng nào sau đây mở đầu bằng nhịp lấy đà?",
        options: [
          "Tiến quân ca (Quốc ca Việt Nam)",
          "Bụi phấn",
          "Lí cây xanh",
          "Đàn gà con"
        ],
        correct: 0,
        explanation: "Tiến quân ca của Văn Cao mở đầu ở nhịp 2/4 bằng nốt Đô lấy đà một phách nhẹ trước khi vào chữ 'Đoàn' ở phách mạnh."
      },
      {
        question: "Trong Bài đọc nhạc số 1 ở giọng Đô trưởng, nốt nhạc kết thúc của bài thường là nốt gì để tạo cảm giác ổn định hoàn chỉnh?",
        options: ["Nốt Son", "Nốt Đô (âm chủ)", "Nốt Mi", "Nốt Rê"],
        correct: 1,
        explanation: "Các bài đọc nhạc ở giọng Đô trưởng luôn kết thúc ở âm chủ Đô (bậc I) để tạo cảm giác trọn vẹn, ổn định."
      }
    ]
  },

  // CHỦ ĐỀ 2: MÔI TRƯỜNG XANH
  {
    id: "bai-3",
    lessonNum: 3,
    topicNum: 2,
    topicName: "Chủ đề 2: Môi trường xanh",
    title: "Bài 3: Học hát Vì cuộc sống tươi đẹp & Nghe nhạc: Tác phẩm Alouette (Tiếng chim sơn ca)",
    tag: "Hát & Môi trường",
    objectives: [
      "Hát đúng giai điệu, lời ca tha thiết của bài hát Vì cuộc sống tươi đẹp.",
      "Ý thức bảo vệ môi trường, yêu quý thiên nhiên và giữ gìn màu xanh Trái Đất.",
      "Lắng nghe và cảm thụ tác phẩm quốc tế Alouette (Tiếng chim sơn ca).",
      "Thực hành gõ đệm kết hợp vận động cơ thể nhịp nhàng."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Học hát bài hát "Vì cuộc sống tươi đẹp"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Bài hát <strong>Vì cuộc sống tươi đẹp</strong> là lời hiệu triệu trong sáng gửi gắm thông điệp bảo vệ hành tinh xanh. Giai điệu mượt mà, sâu lắng hòa quyện cùng ca từ giàu hình ảnh về rừng xanh, biển biếc và bầu không khí trong lành cần được chung tay gìn giữ.
        </p>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Cảm thụ tác phẩm "Alouette" (Tiếng chim sơn ca)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Alouette</strong> là ca khúc dân ca nổi tiếng của Pháp - Canada (French-Canadian song). Bài hát có giai điệu vui tươi, nhí nhảnh, mô phỏng tiếng hót líu lo của chú chim sơn ca nhỏ đón bình minh trên đồng cỏ xanh rờn. Tác phẩm đã được hòa tấu thành nhiều phiên bản giao hưởng và nhạc trẻ phổ biến trên toàn cầu.
        </p>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Hoạt động trải nghiệm:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Hát bài <em>Vì cuộc sống tươi đẹp</em> kết hợp vỗ tay theo phách mạnh - nhẹ.</li>
          <li>Vẽ một bức tranh hoặc viết khẩu hiệu tuyên truyền bảo vệ nguồn nước và cây xanh trường học.</li>
        </ol>
      </div>
    `,
    summary: "Chủ đề Môi trường xanh khơi dậy tình yêu thiên nhiên qua ca khúc Vì cuộc sống tươi đẹp và khúc ca vui tươi Alouette, rèn luyện kỹ năng cảm thụ giai điệu đa văn hóa.",
    quizzes: [
      {
        question: "Thông điệp chính mà bài hát 'Vì cuộc sống tươi đẹp' gửi gắm tới chúng ta là gì?",
        options: [
          "Bảo vệ môi trường thiên nhiên, giữ cho hành tinh luôn xanh, sạch, đẹp",
          "Kêu gọi khai thác thật nhiều gỗ rừng",
          "Xây dựng thật nhiều nhà máy xả khói",
          "Đi săn bắt động vật quý hiếm"
        ],
        correct: 0,
        explanation: "Bài hát tha thiết kêu gọi mọi người cùng chung tay giữ gìn màu xanh của rừng, sự trong lành của biển và bảo vệ Trái Đất."
      },
      {
        question: "Tác phẩm âm nhạc nổi tiếng 'Alouette' có nguồn gốc từ đâu và mô tả loài vật nào?",
        options: [
          "Dân ca Pháp - Canada, mô tả chim sơn ca",
          "Dân ca Nga, mô tả gấu trắng",
          "Nhạc cổ truyền Việt Nam, mô tả con trâu",
          "Nhạc dân gian Mỹ, mô tả đại bàng"
        ],
        correct: 0,
        explanation: "Alouette là bài dân ca truyền thống Pháp - Canada kể về chú chim sơn ca nhỏ xinh với tiếng hót líu lo."
      },
      {
        question: "Tính chất giai điệu của tác phẩm 'Alouette' là gì?",
        options: [
          "U uất, buồn thương",
          "Vui tươi, rộn rã, nhanh nhẹn và giàu tính tạo hình",
          "Chậm rãi như khúc ru con",
          "Hùng dũng như nhạc duyệt binh"
        ],
        correct: 1,
        explanation: "Alouette nổi bật với tiết tấu rộn ràng, nhịp nhàng và giai điệu líu lo ngập tràn niềm yêu đời."
      },
      {
        question: "Hành động nào của học sinh thể hiện đúng tinh thần của bài hát 'Vì cuộc sống tươi đẹp'?",
        options: [
          "Vứt rác bừa bãi ra sân trường",
          "Trồng cây xanh, tiết kiệm điện nước và phân loại rác thải",
          "Hái hoa, bẻ cành cây non",
          "Lãng phí nguồn nước sạch"
        ],
        correct: 1,
        explanation: "Trồng và chăm sóc cây xanh, giữ gìn vệ sinh và tiết kiệm năng lượng là những hành động thiết thực bảo vệ môi trường."
      }
    ]
  },

  // BÀI 4
  {
    id: "bai-4",
    lessonNum: 4,
    topicNum: 2,
    topicName: "Chủ đề 2: Môi trường xanh",
    title: "Bài 4: Nhạc cụ: Recorder / Kèn phím & Thường thức: Nhạc sĩ Hoàng Việt và 'Nhạc rừng'",
    tag: "Nhạc cụ & Thường thức",
    objectives: [
      "Thực hành thế bấm các nốt Si, La, Son, Đô, Rê trên sáo Recorder hoặc Kèn phím (Melodica).",
      "Thổi đúng trường độ nốt đen, nốt trắng và kiểm soát luồng hơi êm ái.",
      "Tìm hiểu cuộc đời anh dũng và sự nghiệp âm nhạc của Liệt sĩ - Nhạc sĩ Hoàng Việt.",
      "Cảm thụ kiệt tác Nhạc rừng với những thanh âm kỳ diệu của rừng miền Đông Nam Bộ thời kháng chiến."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Thực hành nhạc cụ: Recorder và Kèn phím (Melodica)
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/50">
            <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-1">Sáo dọc (Recorder)</h5>
            <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              Dùng ngón tay cái tay trái bịt lỗ 0 ở mặt sau. Các ngón 1, 2, 3 tay trái bịt lỗ 1, 2, 3 ở mặt trước (tạo nốt Si, La, Son). Thổi luồng hơi ấm, phát âm chữ <em>"Tu"</em> nhẹ nhàng.
            </p>
          </div>
          <div class="p-4 bg-violet-50 dark:bg-violet-950/40 rounded-xl border border-violet-200 dark:border-violet-800/50">
            <h5 class="font-bold text-violet-800 dark:text-violet-300 mb-1">Kèn phím (Melodica)</h5>
            <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              Tay phải dùng các ngón 1 (cái), 2 (trỏ), 3 (giữa) bấm các phím nốt Đô - Rê - Mi - Pha - Son. Thổi hơi đều đặn giúp tiếng kèn không bị rè hoặc hụt hơi.
            </p>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Nhạc sĩ Hoàng Việt và tuyệt phẩm "Nhạc rừng"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Nhạc sĩ Hoàng Việt</strong> (1928 - 1967), quê ở Chợ Lớn (TP. Hồ Chí Minh), là một trong những nhạc sĩ tiêu biểu của dòng nhạc cách mạng Việt Nam và là tác giả bản <em>Giao hưởng Quê hương</em> - bản giao hưởng đầu tiên của nền âm nhạc Việt Nam. Ông được truy tặng <strong>Giải thưởng Hồ Chí Minh về Văn học - Nghệ thuật</strong> (năm 1996).
        </p>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
          <h5 class="font-bold text-purple-700 dark:text-purple-300">Tác phẩm "Nhạc rừng" (sáng tác năm 1953):</h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <em>"Cúc cu! Cúc cu! Chim rừng ca trong nắng... Róc rách! Róc rách! Suối luồn qua khóm trúc..."</em>. Bài hát vẽ nên một dàn đại hợp xướng thiên nhiên rực rỡ, lạc quan của người chiến sĩ giải phóng quân giữa đại ngàn miền Đông Nam Bộ gian khổ mà hào hùng.
          </p>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Thực hành diễn tấu:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Thổi câu mô phỏng tiếng chim cúc cu: <code>Son - Mi | Son - Mi</code> trên kèn phím hoặc recorder.</li>
          <li>Lắng nghe bài hát <em>Nhạc rừng</em> và gõ phách mô phỏng tiếng chim rừng líu lo.</li>
        </ol>
      </div>
    `,
    summary: "Luyện tập Recorder/Kèn phím giúp học sinh làm quen với kỹ thuật thổi hơi và bấm ngón. Tác phẩm Nhạc rừng của liệt sĩ Hoàng Việt là khúc hoan ca bất hủ về tình yêu thiên nhiên và tinh thần lạc quan cách mạng.",
    quizzes: [
      {
        question: "Ai là tác giả của ca khúc bất hủ 'Nhạc rừng'?",
        options: ["Nhạc sĩ Hoàng Việt", "Nhạc sĩ Văn Cao", "Nhạc sĩ Đỗ Nhuận", "Nhạc sĩ Phan Huỳnh Điểu"],
        correct: 0,
        explanation: "Ca khúc Nhạc rừng được nhạc sĩ Hoàng Việt sáng tác năm 1953 tại chiến khu miền Đông Nam Bộ."
      },
      {
        question: "Bản giao hưởng đầu tiên của nền âm nhạc Việt Nam có tên là gì và do ai sáng tác?",
        options: [
          "Giao hưởng số 5 của Beethoven",
          "Giao hưởng Quê hương của Hoàng Việt",
          "Giao hưởng Đất nước của Trọng Bằng",
          "Giao hưởng Mùa xuân của Văn Cao"
        ],
        correct: 1,
        explanation: "Giao hưởng 'Quê hương' (viết năm 1965) của nhạc sĩ Hoàng Việt là bản giao hưởng 4 chương đầu tiên của âm nhạc Việt Nam."
      },
      {
        question: "Khi bắt đầu thổi sáo Recorder, đầu lưỡi cần đánh chữ gì nhẹ nhàng để tách các nốt rõ ràng?",
        options: ["Chữ 'Ka'", "Chữ 'Tu' (hoặc 'Du')", "Chữ 'Ha'", "Chữ 'Ôm'"],
        correct: 1,
        explanation: "Kỹ thuật đánh lưỡi (Tonguing) bằng chữ 'Tu' hoặc 'Du' giúp âm thanh phát ra sạch sẽ, tròn nốt mà không bị xì khè."
      },
      {
        question: "Những âm thanh thiên nhiên nào được nhạc sĩ Hoàng Việt mô phỏng vô cùng sinh động trong bài hát 'Nhạc rừng'?",
        options: [
          "Tiếng sấm sét và mưa đá",
          "Tiếng chim rừng cúc cu và tiếng suối chảy róc rách",
          "Tiếng sóng biển gầm thét",
          "Tiếng còi xe phố thị"
        ],
        correct: 1,
        explanation: "Bài hát mở đầu bằng tiếng chim 'Cúc cu! Cúc cu!' và tiếng suối róc rách luồn qua kẽ đá tạo thành dàn nhạc kỳ diệu của rừng xanh."
      }
    ]
  },

  // CHỦ ĐỀ 3: THẦY CÔ VÀ MÁI TRƯỜNG
  {
    id: "bai-5",
    lessonNum: 5,
    topicNum: 3,
    topicName: "Chủ đề 3: Thầy cô và mái trường",
    title: "Bài 5: Học hát Nhớ ơn thầy cô & Thường thức: Nhạc sĩ Đỗ Nhuận và ca khúc Hành quân xa",
    tag: "Hát & Tri ân thầy cô",
    objectives: [
      "Hát đúng giai điệu tha thiết, ngọt ngào của bài hát Nhớ ơn thầy cô (sáng tác: Nguyễn Ngọc Thiện).",
      "Thể hiện lòng biết ơn sâu nặng, tình cảm kính yêu đối với thầy giáo, cô giáo.",
      "Tìm hiểu tiểu sử và cống hiến vĩ đại của Nhạc sĩ Đỗ Nhuận - Tổng thư ký đầu tiên của Hội Nhạc sĩ Việt Nam.",
      "Cảm thụ tráng ca Hành quân xa - biểu tượng ý chí sắt đá của quân đội ta trong chiến dịch Điện Biên Phủ."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Học hát bài hát "Nhớ ơn thầy cô"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Bài hát <strong>Nhớ ơn thầy cô</strong> của nhạc sĩ <strong>Nguyễn Ngọc Thiện</strong> là một trong những bài ca hay nhất viết về tình thầy trò. Lời ca gợi nhớ về mái trường xưa, bảng đen, phấn trắng và những lời dạy ân cần chắp cánh cho học trò bay vào tương lai tươi sáng.
        </p>
        <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/50 my-3">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            <em>"Về lại trường xưa với bao kỉ niệm, bóng dáng cô thầy vấn vương không rời... Dù mai đi xa con vẫn ghi lòng công ơn thầy cô dạy dỗ bao ngày..."</em>. Hát với chất giọng truyền cảm, dạt dào cảm xúc tri ân.
          </p>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Nhạc sĩ Đỗ Nhuận và ca khúc "Hành quân xa"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Nhạc sĩ Đỗ Nhuận</strong> (1922 - 1991), quê ở Hải Dương, là một trong những bậc tiền bối kiệt xuất của tân nhạc Việt Nam. Ông là tác giả vở nhạc kịch Opera đầu tiên của Việt Nam (<em>Cô Sao</em>) và là Tổng thư ký đầu tiên của Hội Nhạc sĩ Việt Nam. Ông được trao tặng <strong>Giải thưởng Hồ Chí Minh về Văn học - Nghệ thuật</strong> đợt I (năm 1996).
        </p>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
          <h5 class="font-bold text-purple-700 dark:text-purple-300">Ca khúc "Hành quân xa" (1953):</h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <em>"Hành quân xa dẫu qua nhiều gian khổ... Đời chúng ta đâu có giặc là ta cứ đi!"</em>. Khẩu hiệu hành động đanh thép biến thành giai điệu bước chân rầm rập của đoàn quân chiến thắng Điện Biên Phủ "lừng lẫy năm châu, chấn động địa cầu".
          </p>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Thực hành thanh nhạc:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Tập hát bài <em>Nhớ ơn thầy cô</em> kết hợp làm động tác múa phụ họa đơn giản.</li>
          <li>Viết một bức thiệp tri ân ngắn tặng thầy cô giáo nhân ngày Nhà giáo Việt Nam 20/11.</li>
        </ol>
      </div>
    `,
    summary: "Ca khúc Nhớ ơn thầy cô bồi đắp truyền thống Tôn sư trọng đạo cao đẹp. Nhạc sĩ Đỗ Nhuận là cánh chim đầu đàn của nền âm nhạc cách mạng với những tác phẩm trường tồn cùng lịch sử hào hùng của dân tộc.",
    quizzes: [
      {
        question: "Tác giả của bài hát 'Nhớ ơn thầy cô' là nhạc sĩ nào?",
        options: ["Nguyễn Ngọc Thiện", "Trịnh Công Sơn", "Phạm Trọng Cầu", "Hoàng Hiệp"],
        correct: 0,
        explanation: "Bài hát Nhớ ơn thầy cô do nhạc sĩ Nguyễn Ngọc Thiện sáng tác với ca từ chan chứa nghĩa tình thầy trò."
      },
      {
        question: "Nhạc sĩ Đỗ Nhuận từng giữ chức vụ quan trọng nào trong giới văn nghệ thuật Việt Nam?",
        options: [
          "Tổng thư ký đầu tiên của Hội Nhạc sĩ Việt Nam",
          "Bộ trưởng Bộ Giáo dục",
          "Chủ tịch Hội Mỹ thuật",
          "Đạo diễn Hãng phim truyện"
        ],
        correct: 0,
        explanation: "Nhạc sĩ Đỗ Nhuận là Tổng thư ký đầu tiên của Hội Nhạc sĩ Việt Nam từ khi Hội được thành lập vào năm 1957."
      },
      {
        question: "Vở nhạc kịch kịch hát (Opera) đầu tiên của nền âm nhạc Việt Nam do Đỗ Nhuận sáng tác có tên là gì?",
        options: ["Cô Sao", "Hòn Đất", "Người tạc tượng", "Cô Thắm về làng"],
        correct: 0,
        explanation: "Vở nhạc kịch 'Cô Sao' (công diễn năm 1965) của nhạc sĩ Đỗ Nhuận là vở Opera kinh điển đầu tiên của nước ta."
      },
      {
        question: "Câu khẩu hiệu đanh thép được nhạc sĩ Đỗ Nhuận đưa vào ca khúc 'Hành quân xa' là gì?",
        options: [
          "Không có gì quý hơn độc lập tự do",
          "Đời chúng ta đâu có giặc là ta cứ đi",
          "Quyết tử để Tổ quốc quyết sinh",
          "Tất cả cho tiền tuyến"
        ],
        correct: 1,
        explanation: "Câu nói mộc mạc mà hào hùng của đồng đội: 'Đời chúng ta đâu có giặc là ta cứ đi' đã khơi nguồn cảm hứng để Đỗ Nhuận viết nên ca khúc Hành quân xa."
      }
    ]
  },

  // BÀI 6
  {
    id: "bai-6",
    lessonNum: 6,
    topicNum: 3,
    topicName: "Chủ đề 3: Thầy cô và mái trường",
    title: "Bài 6: Lí thuyết âm nhạc: Nhịp 4/4 (Nhịp C) & Đọc nhạc: Bài đọc nhạc số 2",
    tag: "Nhạc lí & Đọc nhạc",
    objectives: [
      "Hiểu rõ định nghĩa, cấu tạo và tính chất các phách trong Nhịp 4/4 (Nhịp C).",
      "Nắm quy luật phân bố phách: Mạnh - Nhẹ - Mạnh vừa - Nhẹ.",
      "Đọc chuẩn xác cao độ và tiết tấu Bài đọc nhạc số 2 ở nhịp 4/4.",
      "Thực hành cách đánh nhịp 4 tay chỉ huy nhịp 4/4 chuẩn nhạc viện."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Khái niệm và cấu tạo của Nhịp 4/4 (Nhịp C)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Nhịp 4/4</strong> (còn được ký hiệu bằng chữ <strong>C</strong> - viết tắt từ chữ <em>Common time</em> trong tiếng Anh) là một trong những số chỉ nhịp thông dụng nhất trong âm nhạc thế giới.
        </p>
        <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/60 my-3">
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Số 4 (ở trên):</strong> Quy định mỗi ô nhịp có <strong>4 phách</strong>.</li>
            <li><strong>Số 4 (ở dưới):</strong> Quy ước mỗi phách có giá trị bằng độ dài của <strong>1 nốt đen</strong>.</li>
            <li><strong>Tính chất các phách trong ô nhịp:</strong>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2 font-mono text-center text-xs sm:text-sm">
                <span class="p-2 bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300 rounded font-bold">Phách 1: MẠNH</span>
                <span class="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">Phách 2: NHẸ</span>
                <span class="p-2 bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 rounded font-semibold">Phách 3: MẠNH VỪA</span>
                <span class="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">Phách 4: NHẸ</span>
              </div>
            </li>
          </ul>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Sơ đồ chỉ huy đánh nhịp 4/4
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>Quy trình vung tay chỉ huy 4 phách:</p>
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
            <div class="p-2 bg-purple-50 dark:bg-purple-950/20 rounded">
              <strong>Phách 1:</strong> Đánh thẳng xuống dưới (Mạnh).
            </div>
            <div class="p-2 bg-purple-50 dark:bg-purple-950/20 rounded">
              <strong>Phách 2:</strong> Đưa tay sang bên trong/trái (Nhẹ).
            </div>
            <div class="p-2 bg-purple-50 dark:bg-purple-950/20 rounded">
              <strong>Phách 3:</strong> Vung tay sang phía ngoài/phải (Mạnh vừa).
            </div>
            <div class="p-2 bg-purple-50 dark:bg-purple-950/20 rounded">
              <strong>Phách 4:</strong> Vung chéo lên trên về vị trí ban đầu (Nhẹ).
            </div>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          3. Thực hành Bài đọc nhạc số 2
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Bài đọc nhạc số 2 ở nhịp 4/4, gồm các nốt đen, nốt trắng và nốt tròn. Chú ý ngân đủ 4 phách ở nốt tròn cuối bài:
          </p>
          <div class="p-3 bg-purple-50 dark:bg-purple-950/20 rounded font-mono text-xs sm:text-sm text-purple-800 dark:text-purple-300">
            | Đô - Rê - Mi - Pha | Son - - - | La - La - Son - - | Pha - Mi - Rê - - |<br/>
            | Đô - Rê - Mi - Pha | Son - - - | La - Son - Pha - Mi | Rê - - - Đô - - - |
          </div>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Bài tập rèn luyện:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Thực hành đánh nhịp 4/4 bằng tay phải theo đúng sơ đồ 4 hướng.</li>
          <li>Xướng âm Bài đọc nhạc số 2 kết hợp gõ đệm phách mạnh - nhẹ - mạnh vừa - nhẹ.</li>
        </ol>
      </div>
    `,
    summary: "Nhịp 4/4 (ký hiệu chữ C) có 4 phách trong ô nhịp, mỗi phách bằng 1 nốt đen. Thứ tự cường độ: Mạnh - Nhẹ - Mạnh vừa - Nhẹ. Đây là số chỉ nhịp nền tảng của nhiều ca khúc hiện đại và hành khúc.",
    quizzes: [
      {
        question: "Chữ cái nào thường được dùng làm ký hiệu thay thế cho số chỉ nhịp 4/4?",
        options: ["Chữ S", "Chữ C", "Chữ M", "Chữ F"],
        correct: 1,
        explanation: "Chữ C (viết tắt từ Common time) là ký hiệu quốc tế tương đương với số chỉ nhịp 4/4."
      },
      {
        question: "Trong một ô nhịp 4/4, cường độ của phách số 3 là gì?",
        options: ["Phách rất mạnh", "Phách nhẹ", "Phách mạnh vừa", "Hoàn toàn im lặng"],
        correct: 2,
        explanation: "Thứ tự phách trong nhịp 4/4: Phách 1 Mạnh, Phách 2 Nhẹ, Phách 3 Mạnh vừa, Phách 4 Nhẹ."
      },
      {
        question: "Một nốt tròn trong nhịp 4/4 có độ dài trường độ ngân bằng mấy phách?",
        options: ["1 phách", "2 phách", "3 phách", "4 phách (trọn một ô nhịp)"],
        correct: 3,
        explanation: "1 nốt tròn = 4 nốt đen. Vì mỗi phách nhịp 4/4 bằng 1 nốt đen nên nốt tròn ngân trọn vẹn 4 phách."
      },
      {
        question: "Khi chỉ huy nhịp 4/4, phách số 1 (phách mạnh nhất) được vung tay theo hướng nào?",
        options: [
          "Đánh thẳng từ trên xuống dưới",
          "Hất ngang sang bên phải",
          "Vòng tròn quanh đầu",
          "Đưa thẳng từ dưới lên trên"
        ],
        correct: 0,
        explanation: "Trong nghệ thuật chỉ huy, phách 1 luôn được đánh dứt khoát theo chiều thẳng đứng từ trên xuống dưới."
      }
    ]
  },

  // CHỦ ĐỀ 4: GIAI ĐIỆU QUÊ HƯƠNG
  {
    id: "bai-7",
    lessonNum: 7,
    topicNum: 4,
    topicName: "Chủ đề 4: Giai điệu quê hương",
    title: "Bài 7: Học hát dân ca Lí cây đa & Kỹ thuật luyến láy dân ca quan họ",
    tag: "Dân ca quan họ",
    objectives: [
      "Hát đúng giai điệu, lời ca rộn ràng, hóm hỉnh của làn điệu dân ca Lí cây đa (Quan họ Bắc Ninh).",
      "Nắm được các tiếng đệm, từ đệm đặc trưng: 'trèo lên', 'rằng', 'ấy mấy', 'tình tính tang'.",
      "Vận dụng kỹ thuật nảy âm, luyến láy mềm mại đặc trưng của dân ca Kinh Bắc.",
      "Biểu diễn kết hợp múa xòe quạt hoặc các động tác dân gian duyên dáng."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Tìm hiểu xuất xứ bài ca "Lí cây đa"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Lí cây đa</strong> là một trong những bài dân ca tiêu biểu và quen thuộc nhất của vùng văn hóa Quan họ Bắc Ninh. Bài hát mượn hình ảnh cây đa, quán dốc, thầy chùa để thể hiện không khí vui tươi, hóm hỉnh của hội làng mùa xuân và tâm trạng náo nức trẩy hội của các chàng trai, cô gái thôn quê.
        </p>
        <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/50 my-3">
          <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-1">Các từ đệm đưa hơi độc đáo</h5>
          <p class="text-sm text-gray-700 dark:text-gray-300">
            <em>"Trèo lên quán dốc (ngồi gốc í à cây đa)... Cho đôi mình gặp (xem hội í à đêm trăng)... Rằng ôi bạn ơi, tình tính tang tang tính tình..."</em>. Những từ đệm này làm tăng tính nhạc, tạo sự uyển chuyển lúng liếng đặc trưng của dân ca.
          </p>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Kỹ thuật hát nảy hạt trong dân ca quan họ
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Để hát đúng chất quan họ, người hát cần thả lỏng quai hàm, rung cơ vòm họng nhẹ nhàng tạo thành tiếng nấc mềm (nảy hạt), mắt nhìn tươi vui, nụ cười duyên dáng để câu hát thêm phần lúng liếng.
        </p>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Thực hành diễn xướng:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Tập luyến láy các tiếng đưa hơi <em>"í à", "ối a", "tình tính tang"</em> thật nuột nà.</li>
          <li>Chia nhóm đối đáp: Nhóm nam hát câu xướng, nhóm nữ hát câu xô hòa giọng.</li>
        </ol>
      </div>
    `,
    summary: "Lí cây đa là viên ngọc quý của kho tàng dân ca Quan họ Bắc Ninh, mang lại không khí trẩy hội mùa xuân rộn rã và giúp học sinh rèn luyện kỹ thuật luyến láy, từ đệm dân gian.",
    quizzes: [
      {
        question: "Bài hát 'Lí cây đa' thuộc thể loại dân ca của vùng miền nào?",
        options: [
          "Dân ca Nam Bộ",
          "Dân ca Quan họ Bắc Ninh",
          "Dân ca H'mông Tây Bắc",
          "Dân ca Bình Trị Thiên"
        ],
        correct: 1,
        explanation: "Lí cây đa là làn điệu dân ca Quan họ Bắc Ninh nổi tiếng gắn liền với lễ hội mùa xuân Kinh Bắc."
      },
      {
        question: "Những từ phụ, từ đệm đưa hơi xuất hiện dày đặc trong bài hát 'Lí cây đa' là gì?",
        options: [
          "Í à, ối bạn ơi, tình tính tang",
          "Dô ta, hò lơ",
          "Ơi dô ơi hò",
          "La la la, chacha"
        ],
        correct: 0,
        explanation: "Các tiếng đệm 'í à', 'ối bạn ơi', 'tình tính tang' là nét đặc trưng truyền thống giúp câu ca thêm ngọt ngào, duyên dáng."
      },
      {
        question: "Không khí lễ hội được miêu tả trong bài hát 'Lí cây đa' mang tính chất gì?",
        options: [
          "U sầu, ảm đạm",
          "Vui tươi, rộn rã, hóm hỉnh và náo nức",
          "Đau thương, mất mát",
          "Căng thẳng, hồi hộp"
        ],
        correct: 1,
        explanation: "Bài hát tràn ngập tiếng cười, sự giao duyên hóm hỉnh và niềm hân hoan của trai gái đi trẩy hội trăng rằm."
      },
      {
        question: "Khi hát dân ca Quan họ, tư thế và nét mặt người hát cần như thế nào?",
        options: [
          "Mặt lạnh lùng nghiêm nghị",
          "Ánh mắt lúng liếng, nụ cười rạng rỡ, cử chỉ duyên dáng thanh lịch",
          "Quay lưng lại phía khán giả",
          "Nhắm nghiền mắt không cử động"
        ],
        correct: 1,
        explanation: "Liền anh liền chị khi hát quan họ luôn giữ nét mặt tươi tắn, ánh mắt giao duyên duyên dáng thể hiện nét đẹp thanh lịch Kinh Bắc."
      }
    ]
  },

  // BÀI 8
  {
    id: "bai-8",
    lessonNum: 8,
    topicNum: 4,
    topicName: "Chủ đề 4: Giai điệu quê hương",
    title: "Bài 8: Thường thức âm nhạc: Hát Xoan Phú Thọ & Thực hành nhạc cụ",
    tag: "Di sản văn hóa",
    objectives: [
      "Hiểu rõ nguồn gốc lịch sử, không gian diễn xướng của Hát Xoan Phú Thọ - Di sản văn hóa phi vật thể của nhân loại.",
      "Biết về tổ chức phường Xoan: Trùm phường, Kép và Đào.",
      "Phân biệt 3 chặng hát Xoan: Hát nghi lễ, Hát quả cách và Hát hội (hát giao duyên).",
      "Thực hành gõ đệm trống con hoặc phách tre theo nhịp điệu bài Xoan cổ."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Hát Xoan Phú Thọ - Di sản văn hóa thế giới
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Hát Xoan</strong> (còn gọi là <em>Khúc môn đình</em> - hát cửa đình) là loại hình dân ca nghi lễ phong tục gắn liền với tín ngưỡng thờ cúng Hùng Vương tại vùng đất cội nguồn Phú Thọ. Năm 2011, Hát Xoan được UNESCO ghi danh là Di sản cần bảo vệ khẩn cấp, và đến năm 2017, với nỗ lực hồi sinh kỳ diệu, Hát Xoan đã chính thức được UNESCO công nhận là <strong>Di sản văn hóa phi vật thể đại diện của nhân loại</strong>.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
          <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/50">
            <h5 class="font-bold text-purple-800 dark:text-purple-300 text-sm mb-1">Cơ cấu phường Xoan</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400">
              Đứng đầu là <strong>Ông Trùm</strong>, nam nghệ nhân gọi là <strong>Kép</strong> (vừa hát vừa đánh trống, gõ phách), nữ nghệ nhân gọi là <strong>Đào</strong> (hát và múa).
            </p>
          </div>
          <div class="p-3 bg-violet-50 dark:bg-violet-950/40 rounded-xl border border-violet-200 dark:border-violet-800/50">
            <h5 class="font-bold text-violet-800 dark:text-violet-300 text-sm mb-1">Nhạc cụ mộc mạc</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400">
              Chỉ sử dụng <strong>Trống nhỏ (trống con)</strong> và các <strong>ống nứa, phách tre</strong> gõ nhịp, âm nhạc tôn vinh vẻ mộc mạc của giọng người.
            </p>
          </div>
          <div class="p-3 bg-fuchsia-50 dark:bg-fuchsia-950/40 rounded-xl border border-fuchsia-200 dark:border-fuchsia-800/50">
            <h5 class="font-bold text-fuchsia-800 dark:text-fuchsia-300 text-sm mb-1">3 Chặng canh Xoan</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400">
              1. <em>Hát Nghi lễ</em> (chúc tụng vua Hùng)<br/>
              2. <em>Hát Quả cách</em> (kể chuyện đồng áng)<br/>
              3. <em>Hát Hội</em> (hát ghẹo, bỏ bộ, xin huê).
            </p>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Thực hành nhạc cụ gõ dân gian
        </h4>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Sử dụng phách tre hoặc gõ mõ theo tiết tấu nhịp nhàng: <code>Tùng (mạnh) - Cắc (nhẹ) - Cắc (nhẹ)</code> tạo không khí lễ hội đình làng linh thiêng mà ấm cúng.
        </p>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Thực hành tìm hiểu di sản:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Xem video clip trình diễn làn điệu Xoan cổ như <em>Mó cá</em> hoặc <em>Bỏ bộ</em>.</li>
          <li>Kể tên 4 phường Xoan cổ nổi tiếng tại thành phố Việt Trì (Phú Thọ): An Thái, Thét, Phù Đức và Kim Đái.</li>
        </ol>
      </div>
    `,
    summary: "Hát Xoan Phú Thọ là di sản văn hóa phi vật thể vô giá của nhân loại gắn liền với thời đại các Vua Hùng, phản ánh sâu sắc đời sống tinh thần, tín ngưỡng phồn thực và tính cộng đồng làng xã Việt Nam.",
    quizzes: [
      {
        question: "Hát Xoan là loại hình nghệ thuật dân ca phong tục gắn liền với tỉnh nào ở Việt Nam?",
        options: ["Tỉnh Phú Thọ", "Tỉnh Bắc Ninh", "Tỉnh Thừa Thiên Huế", "Tỉnh Nam Định"],
        correct: 0,
        explanation: "Hát Xoan là di sản đặc sắc có nguồn gốc từ vùng đất tổ Đền Hùng thuộc tỉnh Phú Thọ."
      },
      {
        question: "Trong một phường Xoan truyền thống, người diễn viên nam và diễn viên nữ được gọi bằng tên gì?",
        options: [
          "Nam gọi là Kép, nữ gọi là Đào",
          "Nam gọi là Liền anh, nữ gọi là Liền chị",
          "Nam gọi là Tráng sĩ, nữ gọi là Nữ tú",
          "Nam gọi là Tài tử, nữ gọi là Mỹ nhân"
        ],
        correct: 0,
        explanation: "Trong nghệ thuật Hát Xoan cổ, nam nghệ nhân gọi là Kép (đảm nhận chơi trống và hát) và nữ nghệ nhân gọi là Đào (hát và múa)."
      },
      {
        question: "Năm 2017, UNESCO đã chính thức công nhận Hát Xoan Phú Thọ ở danh mục nào?",
        options: [
          "Di sản văn hóa phi vật thể đại diện của nhân loại",
          "Di sản thiên nhiên thế giới",
          "Kỳ quan kiến trúc cổ",
          "Ký ức tư liệu thế giới"
        ],
        correct: 0,
        explanation: "Sau thời gian được bảo tồn cấp bách, năm 2017 UNESCO đã đưa Hát Xoan trở thành Di sản văn hóa phi vật thể đại diện của nhân loại."
      },
      {
        question: "Nhạc cụ chính dùng để đệm cho các làn điệu Hát Xoan là gì?",
        options: [
          "Đàn tranh và đàn tỳ bà",
          "Trống nhỏ (trống con) và phách tre",
          "Dàn cồng chiêng Tây Nguyên",
          "Đàn guitar điện"
        ],
        correct: 1,
        explanation: "Hát Xoan giữ nguyên tính cổ sơ mộc mạc, chỉ dùng một chiếc trống con và những thanh phách tre do Kép và Đào tự gõ."
      }
    ]
  },

  // CHỦ ĐỀ 5: CHÀO XUÂN
  {
    id: "bai-9",
    lessonNum: 9,
    topicNum: 5,
    topicName: "Chủ đề 5: Chào xuân",
    title: "Bài 9: Học hát Khúc ca mùa xuân & Thường thức: Nhạc sĩ Văn Cao và ca khúc Làng tôi",
    tag: "Hát & Nhạc sĩ Văn Cao",
    objectives: [
      "Hát đúng giai điệu tươi tắn, nhịp nhàng của bài hát Khúc ca mùa xuân.",
      "Cảm nhận vẻ đẹp hồi sinh của vạn vật và lòng người khi mùa xuân sang.",
      "Hiểu rõ sự nghiệp lỗi lạc của danh nhân âm nhạc - Nhạc sĩ Văn Cao.",
      "Cảm thụ tình cảm quê hương sâu nặng qua tuyệt phẩm Làng tôi (điệu Valse 3/4)."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Học hát bài hát "Khúc ca mùa xuân"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Mùa xuân là mùa của đâm chồi nảy lộc, mùa của tình yêu thương và ước vọng. Bài hát <strong>Khúc ca mùa xuân</strong> mang âm hưởng tươi vui, bay bổng, tái hiện bức tranh muôn hoa khoe sắc thắm và tiếng chim líu lo chào đón năm mới an vui.
        </p>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Nhạc sĩ Văn Cao và kiệt tác "Làng tôi"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Nhạc sĩ Văn Cao</strong> (1923 - 1995), quê ở Nam Định, sinh ra tại Hải Phòng, là một trong những tài năng thiên bẩm lớn nhất của nghệ thuật Việt Nam hiện đại: ông vừa là nhạc sĩ tài ba, vừa là họa sĩ danh tiếng và là một nhà thơ độc đáo. Ông là tác giả của <em>Tiến quân ca</em> (Quốc ca nước Cộng hòa Xã hội Chủ nghĩa Việt Nam) và được truy tặng <strong>Giải thưởng Hồ Chí Minh về Văn học - Nghệ thuật</strong> đợt I (năm 1996).
        </p>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
          <h5 class="font-bold text-purple-700 dark:text-purple-300">Ca khúc "Làng tôi" (sáng tác năm 1947):</h5>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Viết ở nhịp <strong>3/4</strong> du dương như điệu valse, mở đầu với hình ảnh thanh bình: <em>"Làng tôi xanh bóng tre, từng tiếng chuông ban chiều, tiếng chuông nhà thờ rung..."</em>. Khi giặc tràn qua đốt phá, dân làng kiên cường đứng lên đánh giặc và ngày chiến thắng tiếng chuông lại ngân vang khúc ca hòa bình.
          </p>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Thực hành cảm thụ:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Hát giai điệu mở đầu bài <em>Làng tôi</em> kết hợp đung đưa người theo nhịp 3/4.</li>
          <li>Kể tên 3 ca khúc nổi tiếng khác của nhạc sĩ Văn Cao (như: <em>Tiến quân ca, Trường ca Sông Lô, Ca ngợi Hồ Chủ tịch, Ngày mùa</em>).</li>
        </ol>
      </div>
    `,
    summary: "Bài hát Khúc ca mùa xuân đem đến không khí xuân ngập tràn sức sống. Tác phẩm Làng tôi của Văn Cao là đỉnh cao của ca khúc kháng chiến đậm chất trữ tình lãng mạn và tinh thần yêu nước thiết tha.",
    quizzes: [
      {
        question: "Tác phẩm âm nhạc nào của nhạc sĩ Văn Cao được chọn làm Quốc ca chính thức của Việt Nam?",
        options: ["Trường ca Sông Lô", "Tiến quân ca", "Làng tôi", "Ngày mùa"],
        correct: 1,
        explanation: "Bài hát Tiến quân ca do Văn Cao sáng tác cuối năm 1944 đã được Quốc hội khóa I chọn làm Quốc ca của nước ta."
      },
      {
        question: "Ca khúc 'Làng tôi' của nhạc sĩ Văn Cao được viết ở số chỉ nhịp nào mang tính chất đung đưa như điệu Valse?",
        options: ["Nhịp 2/4", "Nhịp 3/4", "Nhịp 4/4", "Nhịp 6/8"],
        correct: 1,
        explanation: "Bài hát Làng tôi được viết ở nhịp 3/4, nhịp điệu nhịp nhàng khoan thai như tiếng chuông nhà thờ ngân nga."
      },
      {
        question: "Bên cạnh tài năng sáng tác âm nhạc xuất chúng, Văn Cao còn là một bậc thầy trong lĩnh vực nghệ thuật nào?",
        options: [
          "Hội họa và Thơ ca",
          "Nghệ thuật xiếc",
          "Kiến trúc cầu đường",
          "Điêu khắc gỗ lũa"
        ],
        correct: 0,
        explanation: "Văn Cao là một nghệ sĩ đa tài hiếm có: ông vừa là nhạc sĩ thiên tài, vừa là họa sĩ tài hoa và nhà thơ cách tân nổi tiếng."
      },
      {
        question: "Hình ảnh nào mở đầu tạo nên nét thanh bình êm ả của làng quê Bắc Bộ trong bài hát 'Làng tôi'?",
        options: [
          "Tiếng còi tàu hỏa rú vang",
          "Làng tôi xanh bóng tre, từng tiếng chuông ban chiều",
          "Tiếng máy cày gầm rú",
          "Đường phố rực rỡ ánh đèn led"
        ],
        correct: 1,
        explanation: "Lời ca mở đầu vẽ nên khung cảnh làng quê êm ả: 'Làng tôi xanh bóng tre, từng tiếng chuông ban chiều, tiếng chuông nhà thờ rung'."
      }
    ]
  },

  // BÀI 10
  {
    id: "bai-10",
    lessonNum: 10,
    topicNum: 5,
    topicName: "Chủ đề 5: Chào xuân",
    title: "Bài 10: Lí thuyết âm nhạc: Quãng 2 và Quãng 3 & Đọc nhạc: Bài đọc nhạc số 3",
    tag: "Nhạc lí & Đọc nhạc",
    objectives: [
      "Hiểu khái niệm quãng, định lượng (số bậc) và định tính (số cung).",
      "Phân biệt Quãng 2 Trưởng (2T = 1 cung) và Quãng 2 Thứ (2t = 1/2 cung).",
      "Phân biệt Quãng 3 Trưởng (3T = 2 cung) và Quãng 3 Thứ (3t = 1,5 cung).",
      "Đọc chuẩn xác cao độ các bước nhảy quãng 3 trong Bài đọc nhạc số 3."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Tìm hiểu Quãng 2 (Second)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Quãng 2</strong> là khoảng cách giữa 2 bậc âm liền kề nhau trên thang âm.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/50">
            <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-1">Quãng 2 Trưởng (2T)</h5>
            <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              Có độ lớn bằng <strong>1 cung</strong>.<br/>
              <em>Ví dụ:</em> Đô - Rê (1 cung), Rê - Mi (1 cung), Pha - Son (1 cung).
            </p>
          </div>
          <div class="p-4 bg-violet-50 dark:bg-violet-950/40 rounded-xl border border-violet-200 dark:border-violet-800/50">
            <h5 class="font-bold text-violet-800 dark:text-violet-300 mb-1">Quãng 2 Thứ (2t)</h5>
            <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              Có độ lớn bằng <strong>nửa cung (1/2 cung)</strong>.<br/>
              <em>Ví dụ:</em> Mi - Pha (1/2 cung), Si - Đô (1/2 cung).
            </p>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Tìm hiểu Quãng 3 (Third)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Quãng 3</strong> gồm khoảng cách giữa 2 nốt nhạc cách nhau 3 bậc âm (bỏ cách 1 nốt ở giữa).
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h5 class="font-bold text-purple-700 dark:text-purple-400 mb-1">Quãng 3 Trưởng (3T)</h5>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              Bao gồm 3 bậc và có độ lớn bằng <strong>2 cung</strong>.<br/>
              <em>Ví dụ:</em> Đô - Mi (2 cung), Pha - La (2 cung), Son - Si (2 cung). Âm thanh sáng sủa, vui tươi.
            </p>
          </div>
          <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h5 class="font-bold text-violet-700 dark:text-violet-400 mb-1">Quãng 3 Thứ (3t)</h5>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              Bao gồm 3 bậc và có độ lớn bằng <strong>1,5 cung (1 cung + 1/2 cung)</strong>.<br/>
              <em>Ví dụ:</em> Rê - Pha (1,5 cung), Mi - Son (1,5 cung), La - Đô (1,5 cung). Âm thanh trầm dịu, sâu lắng.
            </p>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          3. Thực hành Bài đọc nhạc số 3
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Luyện các bước nhảy quãng 3 liên tiếp giúp rèn luyện khả năng ghi nhớ và tái hiện cao độ chuẩn xác:
          </p>
          <div class="p-3 bg-purple-50 dark:bg-purple-950/20 rounded font-mono text-xs sm:text-sm text-purple-800 dark:text-purple-300">
            | Đô - Mi - | Rê - Pha - | Mi - Son - | Pha - - - |<br/>
            | Son - Mi - | Pha - Rê - | Mi - Đô - | Đô - - - |
          </div>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Bài tập tính quãng:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Xác định tính chất (Trưởng hay Thứ) của các quãng sau: Đô - Mi, Mi - Pha, Rê - Pha, Son - Si.</li>
          <li>Đọc Bài đọc nhạc số 3 kết hợp bấm phím trên đàn organ/piano để kiểm tra độ chuẩn.</li>
        </ol>
      </div>
    `,
    summary: "Quãng 2 Trưởng = 1 cung, Quãng 2 Thứ = 1/2 cung. Quãng 3 Trưởng = 2 cung (âm sắc tươi sáng), Quãng 3 Thứ = 1,5 cung (âm sắc êm dịu). Nắm chắc quãng là chìa khóa để nghe và hát chuẩn cao độ.",
    quizzes: [
      {
        question: "Khoảng cách giữa hai nốt Đô và Mi là quãng mấy và có độ lớn mấy cung?",
        options: [
          "Quãng 2 Trưởng, 1 cung",
          "Quãng 3 Trưởng, 2 cung",
          "Quãng 3 Thứ, 1,5 cung",
          "Quãng 4 Đúng, 2,5 cung"
        ],
        correct: 1,
        explanation: "Từ Đô lên Mi gồm 3 bậc (Đô - Rê - Mi) với độ lớn Đô - Rê (1 cung) + Rê - Mi (1 cung) = 2 cung, đây là Quãng 3 Trưởng (3T)."
      },
      {
        question: "Khoảng cách giữa hai nốt Mi và Pha là quãng gì?",
        options: ["Quãng 2 Trưởng", "Quãng 2 Thứ", "Quãng 3 Thứ", "Quãng 1 Đúng"],
        correct: 1,
        explanation: "Mi và Pha là hai bậc liền kề và cách nhau đúng nửa cung (1/2 cung), nên đây là Quãng 2 Thứ (2t)."
      },
      {
        question: "Quãng 3 Thứ (3t) có độ lớn khoảng cách bằng bao nhiêu cung?",
        options: ["1 cung", "1,5 cung (1 cung rưỡi)", "2 cung", "2,5 cung"],
        correct: 1,
        explanation: "Quãng 3 Thứ gồm 3 bậc âm và có khoảng cách bằng 1,5 cung (ví dụ: Rê - Pha, Mi - Son, La - Đô)."
      },
      {
        question: "So với Quãng 3 Trưởng, Quãng 3 Thứ đem lại cảm giác âm thanh như thế nào?",
        options: [
          "Vang dội, chói tai hơn",
          "Dịu dàng, sâu lắng, có phần trầm ấm hoặc man mác buồn",
          "Rộn ràng như tiếng trống trận",
          "Không có gì khác biệt"
        ],
        correct: 1,
        explanation: "Quãng 3 Trưởng (2 cung) tạo cảm giác sáng sủa, rạng rỡ; trong khi Quãng 3 Thứ (1,5 cung) tạo màu sắc êm dịu, kín đáo, đượm buồn."
      }
    ]
  },

  // CHỦ ĐỀ 6: ÂM NHẠC NƯỚC NGOÀI
  {
    id: "bai-11",
    lessonNum: 11,
    topicNum: 6,
    topicName: "Chủ đề 6: Âm nhạc nước ngoài",
    title: "Bài 11: Học hát Đất nước tươi đẹp sao & Kỹ thuật phát âm thanh nhạc phương Tây",
    tag: "Âm nhạc thế giới",
    objectives: [
      "Hát đúng giai điệu, lời ca rạng rỡ của bài hát nước ngoài Đất nước tươi đẹp sao.",
      "Cảm nhận cảnh sắc thiên nhiên hùng vĩ và tình yêu non sông rộng lớn của các dân tộc bạn bè.",
      "Vận dụng kỹ thuật mở rộng khoang miệng và giải phóng cơ hàm khi hát nốt cao.",
      "Hát kết hợp nhịp bước hành tiến nhẹ nhàng."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Học hát bài hát "Đất nước tươi đẹp sao"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Bài hát <strong>Đất nước tươi đẹp sao</strong> (Nhạc nước ngoài - Lời Việt) mang giai điệu khoáng đạt, ngập tràn ánh nắng và tình yêu quê hương đất nước. Giai điệu vút cao thể hiện niềm tự hào trước vẻ đẹp trập trùng của núi non, đồng lúa bao la và những dòng sông êm đềm chảy trôi.
        </p>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Kỹ thuật thanh nhạc giải phóng âm thanh
        </h4>
        <ul class="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li><strong>Hạ thấp thanh quản tự nhiên:</strong> Tưởng tượng như đang chuẩn bị ngáp nhẹ, hàm dưới thả lỏng rơi tự nhiên.</li>
          <li><strong>Tập trung điểm tựa hơi thở:</strong> Ép nhẹ cơ bụng dưới đẩy luồng hơi hướng vào khoang cộng hưởng đầu (Mask resonance).</li>
          <li><strong>Đồng điệu âm lượng:</strong> Không gào thét ở đoạn điệp khúc, giữ cho âm sắc dày dặn và sáng đẹp.</li>
        </ul>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Thực hành thanh nhạc:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Luyện tập bài tập ngáp nhẹ (Yawn-sigh) giúp thả lỏng cổ họng trước khi hát.</li>
          <li>Biểu diễn tốp ca bài hát <em>Đất nước tươi đẹp sao</em> với phong thái tự tin, mắt nhìn xa xăm.</li>
        </ol>
      </div>
    `,
    summary: "Ca khúc Đất nước tươi đẹp sao khơi dậy niềm tự hào và tình yêu quê hương đất nước rộng lớn, giúp học sinh rèn luyện kỹ thuật thanh nhạc cổ điển phương Tây mở khoang âm vang.",
    quizzes: [
      {
        question: "Cảm xúc chủ đạo mà bài hát 'Đất nước tươi đẹp sao' muốn truyền tải là gì?",
        options: [
          "Nỗi cô đơn trước biển cả",
          "Niềm tự hào, tình yêu quê hương và sự say mê trước cảnh đẹp thiên nhiên hùng vĩ",
          "Nỗi buồn xa xứ",
          "Sự giận dữ trước bão tố"
        ],
        correct: 1,
        explanation: "Bài hát ca ngợi vẻ đẹp tráng lệ, thanh bình của non sông và tình yêu thiết tha với mảnh đất quê hương."
      },
      {
        question: "Động tác sinh hoạt tự nhiên nào giúp người học thanh nhạc mở rộng vòm họng mềm tốt nhất?",
        options: ["Hắt hơi thật mạnh", "Động tác ngáp ngủ nhẹ nhàng", "Nhai kẹo cao su", "Nín thở phồng má"],
        correct: 1,
        explanation: "Khi ngáp nhẹ, vòm họng mềm (hàm ếch mềm) được nâng cao tối đa và lưỡi gà hạ thấp, tạo khoang cộng hưởng lý tưởng cho giọng hát."
      },
      {
        question: "Khi thể hiện các câu hát ngân dài ở cuối bài, người hát cần duy trì yếu tố nào?",
        options: [
          "Cột hơi vững chắc ở bụng và mở khẩu hình ổn định",
          "Thở hắt ra ngay lập tức",
          "Nhắm chặt mắt gồng cứng cổ",
          "Hạ thấp đầu cúi nhìn mũi chân"
        ],
        correct: 0,
        explanation: "Giữ cột hơi cơ hoành ổn định và khẩu hình không rung lắc giúp nốt ngân dài đều đặn, không bị run rẩy."
      },
      {
        question: "Hát hợp xướng hoặc tốp ca tác phẩm này đòi hỏi điều gì ở các thành viên trong nhóm?",
        options: [
          "Ai có giọng to nhất thì cố gắng át tiếng cả nhóm",
          "Sự hòa quyện âm sắc, giữ nhịp đều đặn và lắng nghe nhau",
          "Mỗi người hát một tông giọng riêng",
          "Hát lệch nhịp để tạo phong cách khác biệt"
        ],
        correct: 1,
        explanation: "Hát tập thể luôn đòi hỏi sự hòa âm đồng đều, lắng nghe âm lượng của đồng đội để tạo nên tổng thể âm thanh thống nhất."
      }
    ]
  },

  // BÀI 12
  {
    id: "bai-12",
    lessonNum: 12,
    topicNum: 6,
    topicName: "Chủ đề 6: Âm nhạc nước ngoài",
    title: "Bài 12: Thường thức: Nhạc sĩ W.A. Mozart & Đọc nhạc: Bài đọc nhạc số 4",
    tag: "Thần đồng Mozart & Đọc nhạc",
    objectives: [
      "Tìm hiểu cuộc đời thiên tài và cống hiến âm nhạc vĩ đại của Wolfgang Amadeus Mozart.",
      "Cảm thụ tác phẩm kinh điển Eine kleine Nachtmusik (Khúc nhạc đêm nhỏ) và các vở Opera bất hủ.",
      "Đọc đúng cao độ, tiết tấu Bài đọc nhạc số 4 mang phong cách cổ điển.",
      "Rèn luyện kỹ năng gõ nhịp chính xác theo tốc độ cổ điển."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Thần đồng âm nhạc Wolfgang Amadeus Mozart
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Wolfgang Amadeus Mozart</strong> (1756 - 1791) là nhà soạn nhạc thiên tài người Áo, một trong ba trụ cột vĩ đại của <strong>Trường phái Cổ điển Vienna</strong> (cùng với Haydn và Beethoven).
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/50">
            <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-1">Thần đồng hiếm có của nhân loại</h5>
            <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li>Lên 3 tuổi học đàn clavecin, 5 tuổi sáng tác bản nhạc đầu tiên.</li>
              <li>6 tuổi đi lưu diễn khắp các hoàng cung châu Âu cùng cha và chị gái.</li>
              <li>8 tuổi viết bản giao hưởng đầu tay.</li>
            </ul>
          </div>
          <div class="p-4 bg-violet-50 dark:bg-violet-950/40 rounded-xl border border-violet-200 dark:border-violet-800/50">
            <h5 class="font-bold text-violet-800 dark:text-violet-300 mb-1">Di sản nghệ thuật đồ sộ</h5>
            <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li>Hơn 600 tác phẩm thuộc mọi thể loại đỉnh cao (41 bản giao hưởng, 27 concerto piano).</li>
              <li>Các vở Opera bất hủ: <em>Đám cưới Figaro</em>, <em>Cây sáo thần</em>, <em>Don Giovanni</em>.</li>
              <li>Kiệt tác thính phòng: <em>Eine kleine Nachtmusik (Serenade cung Sol trưởng)</em>.</li>
            </ul>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Thực hành Bài đọc nhạc số 4
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Bài đọc nhạc số 4 ở nhịp 2/4, nét giai điệu thanh thoát, linh hoạt mang phong cách cổ điển Vienna trong trẻo:
          </p>
          <div class="p-3 bg-purple-50 dark:bg-purple-950/20 rounded font-mono text-xs sm:text-sm text-purple-800 dark:text-purple-300">
            | Son - - Mi | Đô - - Mi | Son - La - | Son - - - |<br/>
            | Pha - - Rê | Si - - Rê | Pha - Son - | Mi - - - |
          </div>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Thực hành cảm thụ:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Lắng nghe chương 1 tác phẩm <em>Eine kleine Nachtmusik (Khúc nhạc đêm)</em> của Mozart.</li>
          <li>Đọc Bài đọc nhạc số 4 với sắc thái vui tươi, nhẹ nhàng, nảy hạt (staccato nhẹ).</li>
        </ol>
      </div>
    `,
    summary: "W.A. Mozart là thiên tài âm nhạc kiệt xuất với gia tài đồ sộ, giai điệu trong trẻo, lạc quan bất tử. Bài đọc nhạc số 4 giúp học sinh tiếp cận phong cách xướng âm chuẩn mực cổ điển phương Tây.",
    quizzes: [
      {
        question: "Nhà soạn nhạc thiên tài Wolfgang Amadeus Mozart sinh ra tại quốc gia nào?",
        options: ["Nước Đức", "Nước Áo", "Nước Ý", "Nước Nga"],
        correct: 1,
        explanation: "Mozart sinh ra tại thành phố Salzburg, nước Áo vào năm 1756."
      },
      {
        question: "Mozart bắt đầu sáng tác những bản nhạc đầu tiên khi lên mấy tuổi?",
        options: ["3 tuổi", "5 tuổi", "12 tuổi", "18 tuổi"],
        correct: 1,
        explanation: "Được mệnh danh là thần đồng âm nhạc, Mozart đã bắt đầu sáng tác những khúc nhạc ngắn đầu tiên từ khi mới 5 tuổi."
      },
      {
        question: "Tác phẩm nhạc kịch Opera nào sau đây là kiệt tác bất hủ của Mozart?",
        options: [
          "Cây sáo thần (The Magic Flute)",
          "Hồ thiên nga",
          "Kẹp hạt dẻ",
          "Carmen"
        ],
        correct: 0,
        explanation: "'Cây sáo thần' (Die Zauberflöte) là một trong những vở Opera vĩ đại nhất trong sự nghiệp của Mozart sáng tác năm 1791."
      },
      {
        question: "Tác phẩm thính phòng 'Eine kleine Nachtmusik' của Mozart thường được dịch sang tiếng Việt là gì?",
        options: [
          "Bản giao hưởng định mệnh",
          "Khúc nhạc đêm nhỏ (Dạ khúc nhỏ)",
          "Khúc ca mùa xuân",
          "Vũ khúc Tây Ban Nha"
        ],
        correct: 1,
        explanation: "Eine kleine Nachtmusik (Serenade No. 13 for strings in G major) có nghĩa là 'Khúc nhạc đêm nhỏ' hay 'Dạ khúc nhỏ'."
      }
    ]
  },

  // CHỦ ĐỀ 7: GIA ĐÌNH YÊU THƯƠNG
  {
    id: "bai-13",
    lessonNum: 13,
    topicNum: 7,
    topicName: "Chủ đề 7: Gia đình yêu thương",
    title: "Bài 13: Học hát bài hát Chỉ có một trên đời (Nhạc Pháp - Lời: Phạm Tuyên)",
    tag: "Hát & Tình mẫu tử",
    objectives: [
      "Hát đúng giai điệu, lời ca tha thiết, cảm động của bài hát Chỉ có một trên đời.",
      "Cảm nhận và bày tỏ lòng biết ơn sâu sắc đối với công ơn trời biển của người mẹ.",
      "Hát với hơi thở mượt mà, kỹ thuật Legato ngọt ngào và rung cảm chân thành.",
      "Thực hiện biểu diễn đơn ca, song ca hoặc tốp ca tri ân mẹ."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Tìm hiểu bài hát "Chỉ có một trên đời"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Bài hát <strong>Chỉ có một trên đời</strong> được nhạc sĩ <strong>Phạm Tuyên</strong> đặt lời Việt từ một giai điệu dân ca Pháp quen thuộc. Lời ca giản dị nhưng chứa đựng một chân lý thiêng liêng: trên bầu trời có hàng ngàn vì sao, trên mặt đất có muôn ngàn đóa hoa, nhưng mẹ hiền thì chỉ có một trên đời.
        </p>
        <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/50 my-3">
          <p class="text-sm text-gray-700 dark:text-gray-300 italic">
            "Trên trời cao có muôn ngàn ánh sao... Dưới vườn hoa có muôn vàn sắc hương... Nhưng mẹ em chỉ có một trên đời... Chỉ một mà thôi như vầng dương sáng soi..."
          </p>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Yêu cầu biểu cảm và kỹ thuật thể hiện
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>Để truyền tải trọn vẹn cảm xúc của bài hát, học sinh cần:</p>
          <ul class="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            <li>Hát với âm lượng vừa phải, êm ái như một lời tâm sự thì thầm của người con gửi tới mẹ.</li>
            <li>Ngân đủ trường độ ở các nốt trắng cuối câu, không ngắt hơi đột ngột làm hẫng cảm xúc.</li>
            <li>Đặt toàn bộ tình cảm yêu thương, kính trọng người mẹ vào từng lời ca.</li>
          </ul>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Thực hành chia sẻ cảm xúc:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Tập hát bài hát kết hợp phụ họa ngón tay hoặc cầm đóa hoa hồng biểu diễn.</li>
          <li>Kể một kỷ niệm ấm áp nhất của em với mẹ hoặc làm một việc giúp đỡ mẹ sau giờ học.</li>
        </ol>
      </div>
    `,
    summary: "Ca khúc Chỉ có một trên đời nhắc nhở mỗi học sinh về tình mẫu tử thiêng liêng vô bờ bến, giáo dục lòng hiếu thảo và rèn luyện kỹ năng hát biểu cảm trữ tình sâu sắc.",
    quizzes: [
      {
        question: "Ai là người đã đặt lời Việt vô cùng xúc động cho ca khúc 'Chỉ có một trên đời'?",
        options: ["Nhạc sĩ Trịnh Công Sơn", "Nhạc sĩ Phạm Tuyên", "Nhạc sĩ Văn Cao", "Nhạc sĩ Hoàng Vân"],
        correct: 1,
        explanation: "Nhạc sĩ Phạm Tuyên là tác giả phần lời Việt giàu tình cảm cho bài dân ca Pháp này."
      },
      {
        question: "Hình tượng người mẹ trong bài hát được so sánh với điều thiêng liêng nào?",
        options: [
          "Như hạt mưa rơi mùa hạ",
          "Như vầng dương (mặt trời) duy nhất sáng soi sưởi ấm trần gian",
          "Như ngọn gió thoảng qua",
          "Như cánh diều bay lượn"
        ],
        correct: 1,
        explanation: "Bài hát so sánh: vạn vật có thể có muôn ngàn (sao, hoa), nhưng mẹ thì chỉ có một trên đời duy nhất như vầng dương sưởi ấm."
      },
      {
        question: "Sắc thái thể hiện phù hợp nhất cho bài hát 'Chỉ có một trên đời' là gì?",
        options: [
          "Hào hùng, sôi nổi như hành khúc",
          "Thiết tha, ấm áp, sâu lắng và truyền cảm",
          "Hài hước, vui đùa châm biếm",
          "Gắt gỏng, dồn dập"
        ],
        correct: 1,
        explanation: "Bài hát viết về tình mẹ cần được thể hiện bằng giọng hát êm đềm, thiết tha và chất chứa tình cảm yêu thương."
      },
      {
        question: "Ngày lễ quốc tế nào trong năm là dịp tôn vinh công lao to lớn của những người mẹ?",
        options: [
          "Ngày của Mẹ (Mother's Day - Chủ nhật thứ 2 của tháng 5)",
          "Ngày Tết Thiếu nhi 1/6",
          "Ngày Nhà giáo Việt Nam 20/11",
          "Ngày Quốc khánh 2/9"
        ],
        correct: 0,
        explanation: "Ngày của Mẹ (Mother's Day) được tổ chức vào ngày Chủ nhật thứ 2 của tháng 5 hàng năm trên khắp thế giới."
      }
    ]
  },

  // BÀI 14
  {
    id: "bai-14",
    lessonNum: 14,
    topicNum: 7,
    topicName: "Chủ đề 7: Gia đình yêu thương",
    title: "Bài 14: Lí thuyết: Dấu nhắc lại và Khung thay đổi & Thực hành hòa tấu",
    tag: "Nhạc lí & Hòa tấu",
    objectives: [
      "Nhận biết ký hiệu và hiểu tác dụng của Dấu nhắc lại (Dấu hồi) trong bản nhạc.",
      "Nắm vững quy tắc biểu diễn của Khung thay đổi (Khung 1 và Khung 2).",
      "Thực hành đọc bản nhạc có chứa Dấu nhắc lại và Khung thay đổi.",
      "Hòa tấu một đoạn nhạc ngắn kết hợp sáo Recorder, kèn phím Melodica và thanh phách gõ."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Ký hiệu Dấu nhắc lại (Repeat sign)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Dấu nhắc lại</strong> gồm hai vạch nhịp (một vạch đậm và một vạch mảnh) đi kèm hai dấu chấm tròn nhỏ đặt ở khe thứ hai và thứ ba của khuông nhạc.
        </p>
        <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/60 my-3">
          <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Tác dụng:</strong> Dùng để lặp lại một đoạn nhạc hoặc toàn bộ bản nhạc mà không cần phải chép lại nhiều lần, giúp bản nhạc gọn gàng, sáng sủa.</li>
            <li>Nếu có <em>dấu mở</em> và <em>dấu đóng</em>: Người biểu diễn chỉ lặp lại phần nhạc nằm giữa hai dấu đó.</li>
            <li>Nếu chỉ có <em>dấu đóng ở cuối</em>: Người biểu diễn lặp lại từ đầu bản nhạc cho tới vị trí dấu nhắc lại.</li>
          </ul>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Khung thay đổi (First and Second endings)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Khi một đoạn nhạc được lặp lại nhưng phần kết thúc của lần 1 và lần 2 có sự khác nhau, người ta sử dụng <strong>Khung thay đổi</strong> (thường gồm Khung 1 và Khung 2).
        </p>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <h5 class="font-bold text-purple-700 dark:text-purple-300">Quy tắc trình diễn:</h5>
          <ol class="list-decimal list-inside space-y-1">
            <li><strong>Lần 1:</strong> Đọc/hát từ đầu, đi qua <strong>Khung 1</strong> đến dấu nhắc lại thì quay trở lại đầu đoạn.</li>
            <li><strong>Lần 2:</strong> Đọc/hát đoạn nhạc lặp lại, khi đến trước Khung 1 thì <strong>bỏ qua Khung 1</strong> và nhảy thẳng sang <strong>Khung 2</strong> để kết thúc.</li>
          </ol>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          3. Thực hành hòa tấu nhạc cụ
        </h4>
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Chia tổ: Nhóm 1 thổi giai điệu trên Recorder/Melodica; Nhóm 2 gõ song loan / xúc xắc đệm phách; Nhóm 3 gõ trống con giữ nhịp.
        </p>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Bài tập củng cố:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Vẽ sơ đồ khuông nhạc có dấu nhắc lại và khung thay đổi 1, 2.</li>
          <li>Thực hành theo đúng thứ tự diễn tấu: Đoạn A &rarr; Khung 1 &rarr; Quay lại Đoạn A &rarr; Nhảy sang Khung 2 &rarr; Hết bài.</li>
        </ol>
      </div>
    `,
    summary: "Dấu nhắc lại dùng để lặp lại một đoạn nhạc. Khung thay đổi (khung 1, 2) cho phép tạo phần kết khác biệt giữa lần biểu diễn thứ nhất và thứ hai, giúp cấu trúc tác phẩm đa dạng và chặt chẽ.",
    quizzes: [
      {
        question: "Dấu nhắc lại trong bản nhạc có tác dụng gì?",
        options: [
          "Báo hiệu kết thúc vĩnh viễn bản nhạc",
          "Yêu cầu người biểu diễn lặp lại đoạn nhạc nằm trong dấu đó",
          "Tăng tốc độ bài hát lên gấp 3 lần",
          "Hạ thấp toàn bộ cao độ xuống một quãng tám"
        ],
        correct: 1,
        explanation: "Dấu nhắc lại là chỉ dẫn âm nhạc yêu cầu người hát hoặc người chơi đàn lặp lại phần âm nhạc trước đó."
      },
      {
        question: "Khi lặp lại lần thứ hai ở đoạn nhạc có Khung thay đổi, người biểu diễn phải làm gì?",
        options: [
          "Vẫn hát lại Khung 1 như bình thường",
          "Bỏ qua Khung 1 và nhảy thẳng sang diễn tấu Khung 2",
          "Dừng lại không hát tiếp",
          "Chỉ hát Khung 1 mà không hát Khung 2"
        ],
        correct: 1,
        explanation: "Quy tắc bắt buộc: Lần 2 biểu diễn sẽ bỏ qua toàn bộ ô nhịp của Khung 1 và nối thẳng vào Khung 2."
      },
      {
        question: "Dấu nhắc lại gồm những chi tiết nhận diện nào trên khuông nhạc?",
        options: [
          "Một vòng tròn đỏ ở giữa ô nhịp",
          "Hai vạch nhịp (một đậm, một mảnh) đi kèm hai dấu chấm tròn nhỏ",
          "Hình tam giác màu đen",
          "Một mũi tên chỉ sang phải"
        ],
        correct: 1,
        explanation: "Ký hiệu chuẩn gồm vạch đôi (dày - mỏng) và 2 dấu chấm tròn ở khe 2, 3 của khuông nhạc."
      },
      {
        question: "Lợi ích lớn nhất của việc sử dụng Dấu nhắc lại và Khung thay đổi khi soạn nhạc là gì?",
        options: [
          "Làm cho bản nhạc ngắn gọn, tiết kiệm trang giấy và rõ ràng bố cục",
          "Làm cho người đọc bị nhầm lẫn",
          "Bắt buộc nhạc công phải chơi nhanh hơn",
          "Không có lợi ích gì"
        ],
        correct: 0,
        explanation: "Ký hiệu này giúp tổng phổ gọn gàng, mạch lạc, tránh việc phải sao chép lặp đi lặp lại cùng một đoạn nhạc."
      }
    ]
  },

  // CHỦ ĐỀ 8: NHỊP ĐIỆU MÙA HÈ
  {
    id: "bai-15",
    lessonNum: 15,
    topicNum: 8,
    topicName: "Chủ đề 8: Nhịp điệu mùa hè",
    title: "Bài 15: Học hát Tiếng ve gọi hè & Cảm thụ giai điệu mùa hạ",
    tag: "Hát & Mùa hè tuổi thơ",
    objectives: [
      "Hát đúng cao độ, trường độ bài hát Tiếng ve gọi hè (sáng tác: Trịnh Công Sơn).",
      "Thể hiện được sự sôi nổi, tươi vui và háo hức đón chào kỳ nghỉ hè bổ ích.",
      "Hát với tiết tấu nảy nhịp nhàng, biểu cảm rạng rỡ của lứa tuổi học trò.",
      "Tập hòa bè đuổi (canon) đơn giản ở đoạn điệp khúc."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Học hát bài hát "Tiếng ve gọi hè"
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Bài hát <strong>Tiếng ve gọi hè</strong> là một món quà âm nhạc tràn đầy ánh nắng và niềm vui tuổi thơ của cố nhạc sĩ <strong>Trịnh Công Sơn</strong>. Khúc ca mở ra khung cảnh hoa phượng vĩ nở đỏ rực các góc sân trường, những tiếng ve ngân râm ran giục giã các bạn nhỏ gác lại sách vở để hòa mình vào kỳ nghỉ hè sôi động.
        </p>
        <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/50 my-3">
          <p class="text-sm text-gray-700 dark:text-gray-300 italic">
            "Khắp phố phường tiếng ve kêu hè hè hè... Cây phượng hồng thắm hoa đỏ rực rỡ... Vui ve gọi hè, vui ve gọi hè..."
          </p>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Hướng dẫn kỹ năng hát bè đuổi (Canon)
        </h4>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Ở đoạn điệp khúc <em>"Vui ve gọi hè..."</em>, giáo viên có thể chia lớp thành 2 nhóm:
          Nhóm 1 hát trước một ô nhịp, Nhóm 2 hát đuổi theo sau một ô nhịp. Tiếng hát hòa quyện đan xen mô phỏng sinh động những đàn ve râm ran truyền cành dưới tán cây phượng vĩ.
        </p>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Thực hành trên lớp:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Luyện tập hát mẫu âm nảy <em>"Ve ve ve ve hè hè hè"</em> vui nhộn.</li>
          <li>Thực hành hát đuổi bè Canon giữa tổ 1 và tổ 2.</li>
        </ol>
      </div>
    `,
    summary: "Ca khúc Tiếng ve gọi hè mang lại cảm xúc hân hoan rạng rỡ của mùa hè tuổi học trò. Kỹ thuật hát bè đuổi Canon mô phỏng tiếng ve râm ran giúp nâng cao tư duy hòa thanh của học sinh.",
    quizzes: [
      {
        question: "Ai là tác giả của ca khúc thiếu nhi rộn ràng 'Tiếng ve gọi hè'?",
        options: ["Nhạc sĩ Trịnh Công Sơn", "Nhạc sĩ Phạm Tuyên", "Nhạc sĩ Văn Cao", "Nhạc sĩ Phong Nhã"],
        correct: 0,
        explanation: "Bài hát Tiếng ve gọi hè là một sáng tác thiếu nhi rất được yêu thích của nhạc sĩ Trịnh Công Sơn."
      },
      {
        question: "Những hình ảnh biểu tượng nào của mùa hè được nhắc đến trong lời ca?",
        options: [
          "Tiếng ve râm ran và hoa phượng đỏ rực",
          "Tuyết rơi trắng xóa và lò sưởi",
          "Cánh đồng ngập vàng hoa cải mùa đông",
          "Mưa phùn gió bấc rét buốt"
        ],
        correct: 0,
        explanation: "Tiếng ve kêu râm ran và sắc đỏ rực của hoa phượng vĩ là hai tín hiệu đặc trưng nhất báo hiệu mùa hè đã về."
      },
      {
        question: "Hình thức hát mà một bè cất giọng trước, bè sau cất giọng đuổi theo sau một khoảng thời gian cố định gọi là gì?",
        options: ["Hát đồng thanh", "Hát bè Canon (Hát bè đuổi)", "Hát solo một mình", "Hát kịch"],
        correct: 1,
        explanation: "Hát bè Canon (hát bè đuổi) là kỹ thuật thanh nhạc đa thanh trong đó giai điệu của bè chính được bè phụ nhắc lại y hệt nhưng trễ hơn một vài phách hoặc một ô nhịp."
      },
      {
        question: "Tính chất giai điệu của bài hát 'Tiếng ve gọi hè' đem lại cảm xúc gì cho các bạn học sinh?",
        options: [
          "Lo lắng trước kỳ thi",
          "Vui tươi, rộn ràng, háo hức và yêu đời",
          "U uất, mệt mỏi",
          "Buồn rầu, ảm đạm"
        ],
        correct: 1,
        explanation: "Giai điệu tươi vui, nhịp nhàng khơi dậy sự háo hức đón chào kỳ nghỉ hè lý thú sau những tháng ngày học tập nỗ lực."
      }
    ]
  },

  // BÀI 16
  {
    id: "bai-16",
    lessonNum: 16,
    topicNum: 8,
    topicName: "Chủ đề 8: Nhịp điệu mùa hè",
    title: "Bài 16: Ôn tập tổng kết & Dự án âm nhạc: Ngày hội âm nhạc học đường Chào hè",
    tag: "Dự án & Biểu diễn",
    objectives: [
      "Hệ thống hóa toàn diện kiến thức nhạc lí cốt lõi của Âm nhạc 7 (Nhịp lấy đà, Nhịp 4/4, Quãng 2-3, Dấu nhắc lại).",
      "Ôn tập và tự tin trình diễn các tác phẩm thanh nhạc, bài đọc nhạc và nhạc cụ trong năm học.",
      "Lập kế hoạch và phân công chuẩn bị Dự án âm nhạc học đường: 'Ngày hội âm nhạc Chào hè'.",
      "Phát triển kỹ năng giao tiếp, tính chủ động và năng lực thẩm mỹ âm nhạc của bản thân."
    ],
    content: `
      <section class="space-y-4">
        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          1. Tổng kết kiến thức trọng tâm Âm nhạc lớp 7
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/50">
            <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Hệ thống Nhạc lí cơ bản</h5>
            <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li><strong>Nhịp lấy đà:</strong> Ô nhịp thiếu phách mở đầu bản nhạc, chứa phách nhẹ.</li>
              <li><strong>Nhịp 4/4 (Nhịp C):</strong> 4 phách trong ô nhịp (Mạnh - Nhẹ - Mạnh vừa - Nhẹ).</li>
              <li><strong>Quãng 2 và Quãng 3:</strong> 2T (1 cung), 2t (1/2 cung); 3T (2 cung), 3t (1,5 cung).</li>
              <li><strong>Dấu nhắc lại & Khung thay đổi:</strong> Quy tắc lặp lại và phân tách kết thúc 1, 2.</li>
            </ul>
          </div>
          <div class="p-4 bg-violet-50 dark:bg-violet-950/40 rounded-xl border border-violet-200 dark:border-violet-800/50">
            <h5 class="font-bold text-violet-800 dark:text-violet-300 mb-2">Di sản văn hóa & Tác gia</h5>
            <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
              <li><strong>Di sản âm nhạc dân tộc:</strong> Hát Xoan Phú Thọ (UNESCO), Dân ca Quan họ (Lí cây đa).</li>
              <li><strong>Nhạc sĩ Việt Nam:</strong> Trịnh Công Sơn, Hoàng Việt, Đỗ Nhuận, Văn Cao.</li>
              <li><strong>Danh nhân thế giới:</strong> Thần đồng âm nhạc người Áo Wolfgang Amadeus Mozart.</li>
              <li><strong>Nhạc cụ học đường:</strong> Sáo Recorder, kèn phím Melodica, gõ thanh phách.</li>
            </ul>
          </div>
        </div>

        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mt-6">
          <span class="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
          2. Dự án âm nhạc học đường: "Ngày hội âm nhạc Chào hè"
        </h4>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-3">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Học sinh tổ chức chương trình biểu diễn văn nghệ theo các khâu chuẩn bị:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <strong class="text-purple-600 block mb-1">1. Ban nội dung</strong>
              Biên tập danh mục tiết mục: Hát đơn ca, tốp ca, hòa tấu nhạc cụ, kể chuyện âm nhạc về Mozart hoặc Văn Cao.
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <strong class="text-purple-600 block mb-1">2. Ban tổ chức & MC</strong>
              Phân công dẫn chương trình, chuẩn bị sân khấu lớp học, đạo cụ hoa, nón, cờ nhỏ.
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <strong class="text-purple-600 block mb-1">3. Khán giả & Đánh giá</strong>
              Cổ vũ văn minh, bình chọn tiết mục ấn tượng nhất và viết nhật ký cảm xúc sau buổi diễn.
            </div>
          </div>
        </div>
      </section>
    `,
    practice: `
      <div class="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
        <h5 class="font-bold text-purple-800 dark:text-purple-300 mb-2">Nhiệm vụ tổng kết:</h5>
        <ol class="list-decimal list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>Hoàn thành phần thi biểu diễn báo cáo dự án trước lớp.</li>
          <li>Tham gia làm bài kiểm tra trắc nghiệm tổng hợp toàn bộ 8 chủ đề của chương trình Âm nhạc 7.</li>
        </ol>
      </div>
    `,
    summary: "Bài 16 tổng kết toàn bộ hành trình trải nghiệm âm nhạc lớp 7, kết nối lý thuyết với thực hành biểu diễn qua dự án Ngày hội âm nhạc Chào hè, giúp học sinh tự tin, sáng tạo và thấu hiểu giá trị của nghệ thuật âm thanh.",
    quizzes: [
      {
        question: "Số chỉ nhịp 4/4 có thể được ký hiệu bằng chữ cái nào?",
        options: ["Chữ C", "Chữ D", "Chữ A", "Chữ G"],
        correct: 0,
        explanation: "Chữ C là ký hiệu thông dụng tương đương với số chỉ nhịp 4/4."
      },
      {
        question: "Khoảng cách giữa hai nốt Mi và Pha là Quãng mấy?",
        options: ["Quãng 2 Trưởng", "Quãng 2 Thứ (1/2 cung)", "Quãng 3 Thứ", "Quãng 3 Trưởng"],
        correct: 1,
        explanation: "Mi và Pha là hai bậc liền kề có khoảng cách đúng nửa cung (1/2 cung), tức là Quãng 2 Thứ (2t)."
      },
      {
        question: "Di sản âm nhạc dân gian vùng đất tổ Phú Thọ được UNESCO công nhận là gì?",
        options: ["Hát Xoan Phú Thọ", "Dân ca Ví Giặm", "Hát Đờn ca tài tử", "Hát Chèo"],
        correct: 0,
        explanation: "Hát Xoan Phú Thọ là di sản văn hóa phi vật thể của nhân loại gắn liền với tín ngưỡng thờ cúng Hùng Vương."
      },
      {
        question: "Nhạc sĩ nào là tác giả của bản giao hưởng đầu tiên của nền âm nhạc Việt Nam?",
        options: ["Nhạc sĩ Hoàng Việt (Giao hưởng Quê hương)", "Nhạc sĩ Văn Cao", "Nhạc sĩ Trịnh Công Sơn", "Nhạc sĩ Đỗ Nhuận"],
        correct: 0,
        explanation: "Nhạc sĩ liệt sĩ Hoàng Việt là tác giả của bản giao hưởng Quê hương - bản giao hưởng 4 chương đầu tiên của nước ta."
      }
    ]
  }
];

module.exports = lessons;
