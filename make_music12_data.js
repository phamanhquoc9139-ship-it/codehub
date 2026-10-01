// Data for Grade 12 Music (Âm nhạc Lớp 12 - Chương trình GDPT 2018)
// 8 Topics, 16 Comprehensive Lessons, 64 Interactive Quizzes

module.exports = [
  // ================= BÀI 1 =================
  {
    num: 1,
    topicNum: 1,
    title: "Bài 1: Quãng ghép và Cách xác định tên gọi quãng ghép",
    badgeColor: "bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300",
    dotColor: "bg-sky-500",
    time: "45 phút",
    target: "Nắm vững định nghĩa Quãng ghép (Compound Intervals); Thuộc lòng công thức chuyển đổi giữa quãng đơn và quãng ghép (Quãng ghép = Quãng đơn + 7); Xác định nhanh tên gọi và tính chất thuận/nghịch của các quãng 9, 10, 11, 12, 13.",
    intro: "Trong các năm học trước, chúng ta đã làm quen với các quãng đơn nằm trong phạm vi một quãng 8 đúng. Khi khoảng cách giữa hai âm thanh vượt ra ngoài một quãng 8 (quãng bát độ), chúng ta gọi tên và xác định tính chất của chúng như thế nào?",
    sections: [
      {
        title: "1. Khái niệm và Công thức xác định Quãng ghép",
        content: `
          <p class="mb-3">
            <strong>Quãng ghép (Compound Interval):</strong> Là quãng có độ rộng <strong>lớn hơn một quãng 8 đúng</strong> (lớn hơn 6 cung), được hình thành bằng cách cộng thêm một hoặc nhiều quãng 8 vào một quãng đơn.
          </p>
          <div class="p-3.5 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800 my-3 text-xs text-gray-700 dark:text-gray-300 space-y-2">
            <h5 class="font-bold text-sky-700 dark:text-sky-300 uppercase flex items-center gap-1.5">
              <i class="fa-solid fa-calculator"></i> Công thức quy đổi nhanh
            </h5>
            <div class="p-2.5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-center text-sm font-bold text-sky-600 dark:text-sky-400">
              Tên Quãng ghép = Tên Quãng đơn tương ứng + 7
            </div>
            <p>Ngược lại: <em>Tên Quãng đơn = Tên Quãng ghép - 7</em>.</p>
          </div>
        `
      },
      {
        title: "2. Bảng đối chiếu các Quãng ghép phổ biến",
        content: `
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <thead class="bg-sky-100 dark:bg-sky-900/60 text-sky-900 dark:text-sky-200 uppercase font-bold">
                <tr>
                  <th class="p-2.5">Quãng ghép</th>
                  <th class="p-2.5">Cấu tạo</th>
                  <th class="p-2.5">Quãng đơn gốc</th>
                  <th class="p-2.5">Ví dụ nốt</th>
                  <th class="p-2.5">Tính chất</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                <tr>
                  <td class="p-2.5 font-bold text-sky-600">Quãng 9 (Ninth)</td>
                  <td class="p-2.5">Quãng 8 + Quãng 2</td>
                  <td class="p-2.5">Quãng 2</td>
                  <td class="p-2.5">C1 - D2</td>
                  <td class="p-2.5">Nghịch (giống quãng 2)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-sky-600">Quãng 10 (Tenth)</td>
                  <td class="p-2.5">Quãng 8 + Quãng 3</td>
                  <td class="p-2.5">Quãng 3</td>
                  <td class="p-2.5">C1 - E2</td>
                  <td class="p-2.5">Thuận không hoàn toàn</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-sky-600">Quãng 11 (Eleventh)</td>
                  <td class="p-2.5">Quãng 8 + Quãng 4</td>
                  <td class="p-2.5">Quãng 4</td>
                  <td class="p-2.5">C1 - F2</td>
                  <td class="p-2.5">Thuận hoàn toàn</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-sky-600">Quãng 12 (Twelfth)</td>
                  <td class="p-2.5">Quãng 8 + Quãng 5</td>
                  <td class="p-2.5">Quãng 5</td>
                  <td class="p-2.5">C1 - G2</td>
                  <td class="p-2.5">Thuận hoàn toàn</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-sky-600">Quãng 13 (Thirteenth)</td>
                  <td class="p-2.5">Quãng 8 + Quãng 6</td>
                  <td class="p-2.5">Quãng 6</td>
                  <td class="p-2.5">C1 - A2</td>
                  <td class="p-2.5">Thuận không hoàn toàn</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400 italic">
            Ghi nhớ: Tính chất thuận hay nghịch của quãng ghép hoàn toàn phụ thuộc vào tính chất của quãng đơn tương ứng.
          </p>
        `
      }
    ],
    practice: [
      "Xác định quãng đơn tương ứng của các quãng ghép sau: Quãng 9 thứ, Quãng 10 trưởng, Quãng 11 đúng, Quãng 12 đúng.",
      "Tìm khoảng cách quãng ghép giữa nốt Đô 1 (C1) và nốt Sol 2 (G2).",
      "Thực hành nghe và xướng âm quãng 9 trưởng (C1 - D2) trên đàn Piano / Keyboard."
    ],
    summary: "Quãng ghép là quãng lớn hơn quãng 8 đúng. Công thức tính: Tên Quãng ghép = Tên Quãng đơn + 7. Tính chất thuận hay nghịch của quãng ghép giống hệt tính chất của quãng đơn tương ứng.",
    quizzes: [
      {
        q: "Quãng nào sau đây được phân loại là Quãng ghép (Compound Interval)?",
        options: ["Quãng 5 đúng", "Quãng 7 thứ", "Quãng 8 đúng", "Quãng 9 trưởng"],
        correctIndex: 3,
        explain: "Quãng ghép là quãng rộng hơn quãng 8 đúng. Quãng 9 rộng hơn quãng 8 nên là quãng ghép."
      },
      {
        q: "Theo quy tắc chuyển đổi, Quãng 10 tương ứng với quãng đơn nào được cộng thêm một quãng 8?",
        options: ["Quãng 2", "Quãng 3", "Quãng 4", "Quãng 5"],
        correctIndex: 1,
        explain: "Áp dụng công thức: Quãng đơn = Quãng ghép - 7 = 10 - 7 = 3 (Quãng 3)."
      },
      {
        q: "Khoảng cách giữa nốt Đô 1 (C1) và nốt Sol 2 (G2) là quãng gì?",
        options: ["Quãng 10 trưởng", "Quãng 11 đúng", "Quãng 12 đúng", "Quãng 13 trưởng"],
        correctIndex: 2,
        explain: "Từ C1 lên C2 là quãng 8, từ C2 lên G2 là quãng 5 đúng. Quãng ghép = 5 + 7 = 12 đúng."
      },
      {
        q: "Tính chất thuận hay nghịch của một quãng ghép được quy định bởi yếu tố nào?",
        options: [
          "Bởi độ to nhỏ của âm thanh",
          "Giống hệt tính chất thuận/nghịch của quãng đơn tương ứng với nó",
          "Tất cả các quãng ghép đều là quãng nghịch",
          "Do nhạc cụ phát ra âm thanh quyết định"
        ],
        correctIndex: 1,
        explain: "Tính chất thuận/nghịch của quãng ghép phụ thuộc hoàn toàn vào quãng đơn gốc (ví dụ quãng 10 thuận vì quãng 3 thuận)."
      }
    ]
  },

  // ================= BÀI 2 =================
  {
    num: 2,
    topicNum: 1,
    title: "Bài 2: Thể loại Hành khúc và Ca khúc thanh niên cách mạng",
    badgeColor: "bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300",
    dotColor: "bg-sky-500",
    time: "45 phút",
    target: "Nắm vững đặc trưng nhịp điệu, tốc độ và tinh thần của thể loại Hành khúc (Marching music); Phân tích giá trị âm nhạc và ý nghĩa lịch sử của bài 'Hành khúc Thanh niên Cộng sản Hồ Chí Minh'; Thể hiện bài hát với khí thế hào hùng, bước đi dứt khoát.",
    intro: "Mỗi khi tiếng kèn đồng vang lên theo nhịp bước chân rầm rập của đoàn người diễu binh, chúng ta lại cảm nhận được sức mạnh đoàn kết vĩ đại của dân tộc. Thể loại âm nhạc nào tạo nên sức lay động mạnh mẽ ấy?",
    sections: [
      {
        title: "1. Đặc trưng của thể loại Hành khúc (March)",
        content: `
          <p class="mb-3">
            <strong>Hành khúc (tiếng Pháp: Marche, tiếng Anh: March):</strong> Là thể loại âm nhạc được sáng tác để phục vụ cho các cuộc hành quân, diễu binh của quân đội hoặc những cuộc tuần hành, mít tinh tập thể của quần chúng nhân dân.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800 space-y-1">
              <strong class="text-sky-700 dark:text-sky-300 uppercase block">Nhịp phách & Tiết tấu</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Thường viết ở <strong>nhịp 2/4</strong> (hoặc 4/4, 2/2) mô phỏng chính xác nhịp bước chân: <em>'Một - Hai, Một - Hai'</em> (Chân trái - Chân phải). Sử dụng nhiều tiết tấu chấm dôi, đảo phách và chùm ba tạo sự thôi thúc, giục giã.
              </p>
            </div>
            <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800 space-y-1">
              <strong class="text-indigo-700 dark:text-indigo-300 uppercase block">Giai điệu & Tính chất</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Giai điệu khỏe khoắn, dứt khoát, thường sử dụng các bước nhảy quãng 4 đúng, quãng 5 đúng hoặc hợp âm rải nguyên âm. Tính chất hào hùng, lạc quan, khơi gợi lòng yêu nước và ý chí chiến đấu kiên cường.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. 'Hành khúc Thanh niên Cộng sản Hồ Chí Minh' (Nhạc sĩ Văn Dung)",
        content: `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-2 my-3">
            <p><strong>Hoàn cảnh ra đời:</strong> Được nhạc sĩ Văn Dung sáng tác năm 1970 nhân dịp kỷ niệm 40 năm thành lập Đoàn TNCS Hồ Chí Minh. Bài hát đã trở thành bài ca truyền thống bất hủ của lớp lớp thế hệ thanh niên Việt Nam.</p>
            <p><strong>Cấu trúc & Cảm xúc:</strong> Viết ở giọng Son trưởng, nhịp 2/4. Mở đầu bằng lời kêu gọi sôi nổi: <em>'Tiến bước dưới quân kỳ sáng ngời, vinh quang thay thanh niên thế hệ Hồ Chí Minh...'</em>, thể hiện khát vọng cống hiến tuổi trẻ xây dựng và bảo vệ Tổ quốc.</p>
          </div>
        `
      }
    ],
    practice: [
      "Hát bài 'Hành khúc Thanh niên Cộng sản Hồ Chí Minh' kết hợp giậm chân tại chỗ theo nhịp 2/4.",
      "Gõ phách tiết tấu hành khúc đặc trưng (tiết tấu nốt móc đơn chấm dôi và móc kép).",
      "Kể tên 3 bài hành khúc nổi tiếng khác của Việt Nam (ví dụ: 'Tiến quân ca', 'Giải phóng Điện Biên', 'Bác đang cùng chúng cháu hành quân')."
    ],
    summary: "Hành khúc là thể loại âm nhạc có nhịp điệu 2/4 khỏe khoắn, dứt khoát, thôi thúc bước chân diễu hành. Bài hát 'Hành khúc Thanh niên Cộng sản Hồ Chí Minh' của Văn Dung là biểu tượng rực rỡ cho lý tưởng cống hiến của tuổi trẻ Việt Nam.",
    quizzes: [
      {
        q: "Thể loại Hành khúc (Marching song) thường được viết ở số chỉ nhịp nào phổ biến nhất?",
        options: ["Nhịp 3/4", "Nhịp 2/4 (hoặc 4/4)", "Nhịp 6/8", "Nhịp 5/4"],
        correctIndex: 1,
        explain: "Nhịp 2/4 tương ứng với nhịp hai bước chân 'Trái - Phải' đều đặn của người diễu hành."
      },
      {
        q: "Tác giả của bài hát 'Hành khúc Thanh niên Cộng sản Hồ Chí Minh' là nhạc sĩ nào?",
        options: ["Văn Cao", "Hoàng Vân", "Văn Dung", "Lưu Hữu Phước"],
        correctIndex: 2,
        explain: "Bài hát nổi tiếng này do nhạc sĩ Văn Dung sáng tác năm 1970."
      },
      {
        q: "Âm hình tiết tấu nào sau đây thường xuyên xuất hiện tạo nên sự thôi thúc, dứt khoát trong các bản hành khúc?",
        options: [
          "Tiết tấu nốt móc đơn chấm dôi nối tiếp nốt móc kép (Dotted rhythm)",
          "Nốt tròn ngân dài 4 phách liên tục",
          "Nốt lặng đen kéo dài",
          "Tiết tấu chậm rãi của điệu ru con"
        ],
        correctIndex: 0,
        explain: "Tiết tấu chấm dôi giật (Dotted rhythm: móc đơn chấm dôi + móc kép) là đặc trưng giục giã bước chân của hành khúc."
      },
      {
        q: "Bài hát 'Hành khúc Thanh niên Cộng sản Hồ Chí Minh' thể hiện nội dung tư tưởng gì?",
        options: [
          "Nỗi buồn chia tay mùa hạ",
          "Khí thế sôi nổi, niềm tự hào và khát vọng cống hiến xây dựng đất nước của tuổi trẻ",
          "Cảnh sắc tĩnh lặng đêm trăng",
          "Lời than thở về sự vất vả"
        ],
        correctIndex: 1,
        explain: "Bài hát ca ngợi truyền thống vẻ vang và tinh thần xung kích tình nguyện của thế hệ thanh niên Việt Nam."
      }
    ]
  },

  // ================= BÀI 3 =================
  {
    num: 3,
    topicNum: 2,
    title: "Bài 3: Giọng Son trưởng (G major) và Thang âm một dấu thăng",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Nắm vững định nghĩa và công thức cấu tạo giọng Son trưởng (G major); Nhận biết vị trí của dấu Fa thăng (F#) trên dòng 5 khóa Sol (hóa biểu 1 dấu thăng); Đọc chuẩn xác bài đọc nhạc số 1 giọng Son trưởng kết hợp gõ phách.",
    intro: "Bên cạnh các giọng có dấu giáng đã học ở lớp 11 (Pha trưởng, Rê thứ), hệ thống các giọng có dấu thăng mang lại màu sắc tươi vui, ấm áp và lấp lánh như ánh bình minh. Giọng Son trưởng có một dấu thăng được cấu tạo như thế nào?",
    sections: [
      {
        title: "1. Cấu tạo thang âm giọng Son trưởng (G major)",
        content: `
          <p class="mb-3">
            <strong>Giọng Son trưởng (G major):</strong> Là giọng trưởng có âm chủ là nốt <strong>Son (G)</strong>. Hóa biểu của giọng Son trưởng có duy nhất <strong>một dấu thăng</strong> là <strong>Fa thăng (F#)</strong>, được đặt tại dòng kẻ thứ 5 trên khóa Sol.
          </p>
          <div class="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 my-3">
            <h5 class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm uppercase mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-arrow-up-right-dots"></i> Thang âm Son trưởng (G - A - B - C - D - E - F# - G)
            </h5>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-gray-700 dark:text-gray-300">
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc I (Âm chủ):</strong> G (Son)</div>
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc II:</strong> A (La)</div>
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc III:</strong> B (Si)</div>
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc IV:</strong> C (Đô)</div>
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc V (Âm át):</strong> D (Rê)</div>
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc VI:</strong> E (Mi)</div>
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc VII (Âm dẫn):</strong> F# (Fa thăng)</div>
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc VIII:</strong> G (Son)</div>
            </div>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
            Khoảng cách giữa bậc VII (F#) và bậc VIII (G) đúng bằng <strong>nửa cung</strong>, tạo thành âm dẫn hướng sức hút mạnh mẽ về âm chủ Son.
          </p>
        `
      },
      {
        title: "2. Hóa biểu dấu thăng và Vị trí nốt Fa thăng (F#)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-1">
              <strong class="text-blue-700 dark:text-blue-300 uppercase block">Vị trí dấu F# trên khóa Sol</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Dấu thăng (#) đầu tiên luôn nằm ở <strong>dòng kẻ thứ năm</strong> trên khóa Sol. Nó nâng cao tất cả các nốt Fa trong bản nhạc lên nửa cung.</p>
            </div>
            <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 space-y-1">
              <strong class="text-purple-700 dark:text-purple-300 uppercase block">Vị trí nốt F# trên bàn phím</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Là phím đen đầu tiên bên trái trong cụm 3 phím đen (nằm ngay sát bên phải phím trắng nốt Fa).</p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Đọc thang âm Son trưởng đi lên và đi xuống, chú ý cao độ nốt Fa thăng.",
      "Thực hành xướng âm Bài đọc nhạc số 1 giọng Son trưởng nhịp 2/4.",
      "Tìm vị trí nốt F# trên đàn phím điện tử Keyboard và đàn Guitar."
    ],
    summary: "Giọng Son trưởng (G major) có âm chủ là nốt G (Son), hóa biểu gồm đúng 1 dấu thăng là Fa thăng (F#) ở dòng 5 khóa Sol. Thang âm: G - A - B - C - D - E - F# - G.",
    quizzes: [
      {
        q: "Hóa biểu của giọng Son trưởng (G major) có bao nhiêu dấu hóa và là dấu gì?",
        options: ["1 dấu giáng (Si giáng)", "1 dấu thăng (Fa thăng)", "2 dấu thăng (Fa thăng, Đô thăng)", "Không có dấu hóa"],
        correctIndex: 1,
        explain: "Giọng Son trưởng có hóa biểu gồm đúng 1 dấu thăng duy nhất là Fa thăng (F#) nằm ở dòng 5 khóa Sol."
      },
      {
        q: "Âm chủ (bậc I) của giọng Son trưởng là nốt nhạc nào?",
        options: ["Nốt Đô (C)", "Nốt Pha (F)", "Nốt Son (G)", "Nốt Rê (D)"],
        correctIndex: 2,
        explain: "Âm chủ bậc I chính là nốt Son (G), nốt bắt đầu và kết thúc của thang âm."
      },
      {
        q: "Nốt âm dẫn (bậc VII) trong giọng Son trưởng là nốt nào?",
        options: ["Nốt Fa bình (F)", "Nốt Fa thăng (F#)", "Nốt Mi (E)", "Nốt Đô (C)"],
        correctIndex: 1,
        explain: "Bậc VII của giọng Son trưởng là nốt Fa thăng (F#), cách âm chủ G đúng nửa cung."
      },
      {
        q: "Trên khóa Sol, dấu Fa thăng (#) của hóa biểu được viết ở vị trí nào?",
        options: ["Khe thứ 1", "Dòng kẻ thứ 2", "Khe thứ 3", "Dòng kẻ thứ 5"],
        correctIndex: 3,
        explain: "Dấu Fa thăng ở hóa biểu khóa Sol luôn được đặt tại dòng kẻ thứ 5 trên cùng của khuông nhạc."
      }
    ]
  },

  // ================= BÀI 4 =================
  {
    num: 4,
    topicNum: 2,
    title: "Bài 4: Sơ lược về các thể loại nhạc nhẹ phổ biến",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Nhận biết khái niệm và đặc trưng thẩm mỹ của các dòng nhạc nhẹ (Pop, Rock, Jazz, Blues, R&B); Phân biệt nhạc cụ tiêu biểu của ban nhạc nhẹ (Trống Drum set, Bass, Guitar điện, Keyboard); Nhận định đúng đắn về vai trò của nhạc nhẹ trong đời sống tinh thần giới trẻ.",
    intro: "Nhạc nhẹ (Popular Music) gắn liền với hơi thở nhịp sống hiện đại, có mặt khắp nơi từ quán cà phê, tai nghe điện thoại đến các đại nhạc hội hàng vạn khán giả. Những dòng nhạc Pop, Rock, Jazz bắt nguồn từ đâu và mang những nét cá tính nào?",
    sections: [
      {
        title: "1. Khái niệm và Đặc trưng các dòng nhạc nhẹ tiêu biểu",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-3 text-xs">
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-pink-600 block mb-1 uppercase">1. Nhạc Pop (Popular Music)</strong>
              Giai điệu dễ nhớ, ca từ gần gũi, cấu trúc rõ ràng (Verse - Chorus). Đặc biệt là thể loại <em>Pop Ballad</em> trữ tình êm dịu, chiếm trọn trái tim người nghe Việt Nam.
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-red-600 block mb-1 uppercase">2. Nhạc Rock</strong>
              Mạnh mẽ, bùng nổ, tiết tấu dồn dập nhấn vào phách chẵn (phách 2 và 4). Sử dụng guitar điện với hiệu ứng Distortion, tiếng trống uy lực và giọng hát gào thét nội lực.
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-amber-600 block mb-1 uppercase">3. Nhạc Jazz & Blues</strong>
              Bắt nguồn từ cộng đồng người Mỹ gốc Phi. Đặc trưng bởi kỹ thuật ngẫu hứng (Improvisation), tiết tấu đảo phách (Syncopation) và hòa âm chùm hợp âm 7, 9 phức tạp, tinh tế.
            </div>
          </div>
        `
      },
      {
        title: "2. Biên chế ban nhạc nhẹ tiêu biểu (Combo Band)",
        content: `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Bộ gõ & Giữ nhịp:</strong> Bộ trống jazz (Drum kit) - trái tim giữ nhịp điệu của cả ban nhạc.</p>
            <p><strong>Bè trầm (Bass line):</strong> Đàn Guitar Bass (4 hoặc 5 dây) - gắn kết giữa nhịp trống và hòa thanh.</p>
            <p><strong>Hòa âm & Giai điệu:</strong> Đàn Guitar điện (Lead / Rhythm guitar) và Đàn Keyboard / Synthesizer.</p>
          </div>
        `
      }
    ],
    practice: [
      "Nghe 3 trích đoạn âm nhạc và nhận diện chính xác thể loại: Pop, Rock hay Jazz.",
      "Gõ tiết tấu đảo phách (Syncopation) đặc trưng của phong cách Jazz/Blues.",
      "Thảo luận nhóm: Nhạc nhẹ tác động như thế nào đến phong cách sống và gu thẩm mỹ của học sinh THPT hiện nay?"
    ],
    summary: "Nhạc nhẹ gồm nhiều dòng phong phú: Pop (dễ nghe, truyền cảm), Rock (bùng nổ, mạnh mẽ), Jazz & Blues (ngẫu hứng, giàu cảm xúc). Ban nhạc nhẹ cơ bản gồm Trống, Bass, Guitar điện và Keyboard.",
    quizzes: [
      {
        q: "Dòng nhạc nào có đặc trưng nổi bật nhất là tính chất 'ngẫu hứng' (Improvisation) trong lúc biểu diễn?",
        options: ["Nhạc Cổ điển thế kỷ 18", "Nhạc Jazz", "Hành khúc quân đội", "Nhạc Chèo"],
        correctIndex: 1,
        explain: "Kỹ thuật ngẫu hứng (Improvisation) thăng hoa tại chỗ là linh hồn bất tử của nghệ thuật nhạc Jazz."
      },
      {
        q: "Nhạc cụ nào trong ban nhạc nhẹ được ví như 'trái tim' giữ nhịp phách ổn định cho toàn bộ ban nhạc?",
        options: ["Bộ trống dàn (Drum kit)", "Kèn Saxophone", "Đàn Tam thập lục", "Đàn Ukulele"],
        correctIndex: 0,
        explain: "Bộ trống (Drum kit) giữ vai trò xương sống điều khiển nhịp phách và tốc độ của toàn ban nhạc."
      },
      {
        q: "Đặc trưng âm thanh nổi bật nhất của dòng nhạc Rock là gì?",
        options: [
          "Tiếng đàn Guitar điện sử dụng hiệu ứng méo tiếng (Distortion) mạnh mẽ, tiếng trống dồn dập",
          "Chỉ sử dụng tiếng huýt sáo nhẹ nhàng",
          "Không có bất kỳ nhạc cụ gõ nào",
          "Chỉ hát thì thầm không micro"
        ],
        correctIndex: 0,
        explain: "Tiếng guitar điện gằn (Distortion) và tiếng trống bốc lửa tạo nên thương hiệu đặc trưng của Rock."
      },
      {
        q: "Thuật ngữ 'Pop' trong âm nhạc bắt nguồn từ từ ngữ tiếng Anh nào?",
        options: ["Popular (Đại chúng, phổ biến)", "Population (Dân số)", "Pollution (Ô nhiễm)", "Poetry (Thơ ca)"],
        correctIndex: 0,
        explain: "Pop là viết tắt của 'Popular Music' - âm nhạc đại chúng dành cho số đông công chúng."
      }
    ]
  },

  // ================= BÀI 5 =================
  {
    num: 5,
    topicNum: 3,
    title: "Bài 5: Giọng Mi thứ (E minor) và Mối quan hệ song song với Son trưởng",
    badgeColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    dotColor: "bg-purple-500",
    time: "45 phút",
    target: "Nắm vững mối quan hệ song song giữa Son trưởng (G major) và Mi thứ (E minor); Phân tích thang âm Mi thứ tự nhiên và Mi thứ hòa âm có nốt Rê thăng (D#); Xướng âm chính xác Bài đọc nhạc số 2 giọng Mi thứ.",
    intro: "Mỗi giọng trưởng tươi sáng luôn có một người bạn song hành là một giọng thứ sâu lắng, ngọt ngào cùng chung một mái nhà hóa biểu. Giọng Mi thứ song song với Son trưởng có cấu tạo ra sao?",
    sections: [
      {
        title: "1. Cặp giọng song song Son trưởng và Mi thứ",
        content: `
          <p class="mb-3">
            <strong>Giọng Mi thứ (E minor):</strong> Là giọng thứ song song của <strong>Son trưởng (G major)</strong>. Cả hai giọng đều có <strong>chung hóa biểu là 1 dấu Fa thăng (F#)</strong> ở dòng kẻ thứ 5 khóa Sol.
          </p>
          <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Xác định âm chủ:</strong> Từ âm chủ Son (G) lùi xuống một quãng 3 thứ (1,5 cung) ta được nốt Mi (E). Ngược lại, từ Mi (E) tiến lên 1,5 cung ta được nốt Son (G).</p>
            <p><strong>Tính chất:</strong> Nếu Son trưởng vui tươi, khoáng đạt thì Mi thứ lại trầm ấm, sâu lắng, tha thiết và giàu nỗi niềm suy tư.</p>
          </div>
        `
      },
      {
        title: "2. Thang âm giọng Mi thứ hòa âm (Harmonic Minor)",
        content: `
          <div class="space-y-3 text-xs">
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-purple-600 dark:text-purple-400 block mb-1">Mi thứ tự nhiên:</strong>
              E - F# - G - A - B - C - D - E. (Tuân theo đúng hóa biểu 1 dấu Fa thăng).
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-rose-600 dark:text-rose-400 block mb-1">Mi thứ hòa âm (sử dụng phổ biến nhất):</strong>
              E - F# - G - A - B - C - <strong>D#</strong> - E. Bậc VII được nâng cao nửa cung bằng dấu thăng bất thường (D#), cách âm chủ E nửa cung, tạo lực hút mạnh về nốt Mi.
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Xướng âm thang âm Mi thứ hòa âm đi lên và đi xuống, chú ý nốt D# (Rê thăng).",
      "Tập đọc nhạc Bài đọc nhạc số 2 giọng Mi thứ kết hợp gõ phách nhịp 3/4.",
      "Xác định quãng 2 tăng (C - D# = 1,5 cung) trong giọng Mi thứ hòa âm."
    ],
    summary: "Son trưởng và Mi thứ là hai giọng song song có chung hóa biểu 1 dấu Fa thăng (F#). Trong giọng Mi thứ hòa âm, bậc VII được thăng lên thành D# để tạo âm dẫn mạnh giải quyết về âm chủ E.",
    quizzes: [
      {
        q: "Giọng thứ song song với giọng Son trưởng (G major) là giọng nào?",
        options: ["Giọng Rê thứ (Dm)", "Giọng La thứ (Am)", "Giọng Mi thứ (Em)", "Giọng Si thứ (Bm)"],
        correctIndex: 2,
        explain: "Giọng thứ song song nằm dưới âm chủ G một quãng 3 thứ (G xuống 1,5 cung là E). Đó là giọng Mi thứ (Em)."
      },
      {
        q: "Hóa biểu của giọng Mi thứ (E minor) có dấu hóa gì?",
        options: ["1 dấu Si giáng (Bb)", "1 dấu Fa thăng (F#)", "2 dấu thăng (F#, C#)", "Không có dấu hóa"],
        correctIndex: 1,
        explain: "Vì là giọng song song với Son trưởng nên Mi thứ cũng có đúng 1 dấu Fa thăng (F#) ở hóa biểu."
      },
      {
        q: "Trong thang âm giọng Mi thứ hòa âm, nốt nhạc nào được nâng cao nửa cung bằng dấu thăng bất thường?",
        options: ["Nốt Đô (C)", "Nốt Rê (D biến thành D#)", "Nốt Sol (G)", "Nốt La (A)"],
        correctIndex: 1,
        explain: "Bậc VII của giọng Mi thứ là nốt D, trong thang âm thứ hòa âm được nâng lên thành D#."
      },
      {
        q: "Khoảng cách cao độ giữa nốt Đô (C) và nốt Rê thăng (D#) trong giọng Mi thứ hòa âm là quãng gì?",
        options: ["Quãng 2 trưởng", "Quãng 2 tăng (1 cung rưỡi)", "Quãng 3 thứ", "Quãng 1 đúng"],
        correctIndex: 1,
        explain: "C lên D# là quãng 2 chữ cái nhưng có độ rộng 1,5 cung, do đó là quãng 2 tăng (Augmented 2nd)."
      }
    ]
  },

  // ================= BÀI 6 =================
  {
    num: 6,
    topicNum: 3,
    title: "Bài 6: Ca khúc nước ngoài và Nghệ thuật hát ca khúc thính phòng",
    badgeColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    dotColor: "bg-purple-500",
    time: "45 phút",
    target: "Cảm thụ vẻ đẹp giai điệu và ca từ của ca khúc nước ngoài nổi tiếng 'Chiều hải cảng' (Nhạc Nga); Nắm vững kỹ thuật thanh nhạc thính phòng: Mở rộng vòm họng, dựng vị trí âm thanh cao, ngân rung tự nhiên (Vibrato); Hát truyền cảm với sắc thái êm ả, hoài niệm.",
    intro: "Những bài ca nước Nga trữ tình, da diết đã in sâu vào ký ức của biết bao thế hệ người yêu nhạc Việt Nam. Bài hát 'Chiều hải cảng' mang đến cho chúng ta bức tranh hoàng hôn trên biển êm đềm và tình cảm người thủy thủ sâu lắng như thế nào?",
    sections: [
      {
        title: "1. Tác phẩm 'Chiều hải cảng' (Nhạc Nga)",
        content: `
          <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800 text-xs text-gray-700 dark:text-gray-300 space-y-2 my-3">
            <p><strong>Tác giả:</strong> Nhạc của V. Solovyov-Sedoy, lời của A. Churkin, lời Việt của nhạc sĩ Trung Kiên.</p>
            <p><strong>Nội dung:</strong> Khắc họa không gian biển cả bao la lúc hoàng hôn buông xuống, cánh hải âu lượn sóng và tâm tư người chiến sĩ hải quân trước giờ tàu nhổ neo ra khơi bảo vệ Tổ quốc. Giai điệu trữ tình ở giọng Mi thứ kết hợp nhịp 3/4 bồng bềnh như sóng nước dạt dào.</p>
          </div>
        `
      },
      {
        title: "2. Kỹ thuật thể hiện ca khúc mang phong cách thính phòng",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 space-y-1">
              <strong class="text-rose-700 dark:text-rose-300 uppercase block">Dựng vị trí âm thanh (Vocal Placement)</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Mở rộng vòm họng mềm (như động tác ngáp ngủ nhẹ), hướng âm thanh tập trung vào xoang trán và hàm ếch cứng (Mask) để âm thanh tròn trịa, vang xa và không bị bẹt tiếng.</p>
            </div>
            <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800 space-y-1">
              <strong class="text-teal-700 dark:text-teal-300 uppercase block">Điều tiết hơi thở & Độ rung (Vibrato)</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Các nốt ngân dài cuối câu cần giữ hơi thở cơ hoành vững vàng, tạo độ rung ngân tự nhiên êm ái, diễn tả nỗi nhớ nhung da diết của người lính biển.</p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Luyện thanh mẫu âm mở rộng vòm họng 'Mi - Mê - Ma - Mô - Mu' giọng Mi thứ.",
      "Hát bài 'Chiều hải cảng' với sắc thái êm đềm, đung đưa theo nhịp 3/4.",
      "Tìm nghe và so sánh bản hát tiếng Nga gốc với bản lời Việt của NSND Trung Kiên."
    ],
    summary: "'Chiều hải cảng' là ca khúc trữ tình Nga kinh điển viết ở nhịp 3/4 bồng bềnh, giọng Mi thứ tha thiết. Kỹ thuật hát thính phòng đòi hỏi mở rộng khoang họng mềm, vị trí âm thanh cao và điều tiết hơi thở cơ hoành mượt mà.",
    quizzes: [
      {
        q: "Bài hát nổi tiếng 'Chiều hải cảng' có xuất xứ từ nền âm nhạc nước nào?",
        options: ["Âm nhạc Pháp", "Âm nhạc Nga", "Âm nhạc Ý", "Âm nhạc Đức"],
        correctIndex: 1,
        explain: "'Chiều hải cảng' là bản tình ca kinh điển của nền âm nhạc Nga (Liên Xô trước đây)."
      },
      {
        q: "Nhịp điệu bồng bềnh như sóng nước dạt dào trong bài 'Chiều hải cảng' được viết ở số chỉ nhịp nào?",
        options: ["Nhịp 2/4", "Nhịp 3/4", "Nhịp 4/4", "Nhịp 2/2"],
        correctIndex: 1,
        explain: "Bài hát được viết ở nhịp 3/4 (3 phách: 1 mạnh, 2 nhẹ) nhịp nhàng như con tàu lướt sóng."
      },
      {
        q: "Khi thực hiện kỹ thuật mở khẩu hình hát thính phòng, người hát nên làm động tác gì để vòm họng mềm nâng lên?",
        options: [
          "Bĩu môi về phía trước",
          "Mô phỏng trạng thái chuẩn bị ngáp ngủ tự nhiên",
          "Nghiến chặt hai hàm răng",
          "Hóp chặt cổ họng lại"
        ],
        correctIndex: 1,
        explain: "Động tác ngáp ngủ tự nhiên giúp nâng vòm hàm ếch mềm lên cao, tạo khoang cộng hưởng lớn cho giọng hát."
      },
      {
        q: "Hiện tượng giọng hát có độ gợn sóng ngân rung tinh tế, tự nhiên ở các nốt ngân dài trong thanh nhạc gọi là gì?",
        options: ["Staccato", "Vibrato", "Falsetto", "Crescendo"],
        correctIndex: 1,
        explain: "Vibrato là độ rung tự nhiên của cột hơi và dây thanh đới khi giọng hát được thả lỏng chuẩn mực."
      }
    ]
  },

  // ================= BÀI 7 =================
  {
    num: 7,
    topicNum: 4,
    title: "Bài 7: Hệ thống các Hợp âm của giọng Son trưởng và Mi thứ",
    badgeColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    dotColor: "bg-blue-500",
    time: "45 phút",
    target: "Xác định chính xác các hợp âm ba trên các bậc âm của giọng Son trưởng (G, C, D/D7, Em) và Mi thứ (Em, Am, B/B7, C); Nắm vững vai trò của hợp âm át 7 (D7 trong G, B7 trong Em); Thực hành nối tiếp các vòng hòa âm phổ biến.",
    intro: "Hòa âm là chiếc chìa khóa vạn năng tạo nên màu sắc cảm xúc cho bài hát. Làm thế nào để phối hợp các hợp âm giọng Son trưởng và Mi thứ một cách hài hòa và logic?",
    sections: [
      {
        title: "1. Bảng hợp âm chính và phụ của giọng Son trưởng & Mi thứ",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-2">
              <strong class="text-emerald-700 dark:text-emerald-300 uppercase block">Giọng Son trưởng (G major)</strong>
              <ul class="space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong>Hợp âm Chủ (I):</strong> G (Son trưởng: G - B - D)</li>
                <li><strong>Hợp âm Hạ át (IV):</strong> C (Đô trưởng: C - E - G)</li>
                <li><strong>Hợp âm Át (V):</strong> D / D7 (Rê trưởng / 7 át: D - F# - A - C)</li>
                <li><strong>Hợp âm bậc VI:</strong> Em (Mi thứ - Giọng song song)</li>
                <li><strong>Vòng kết:</strong> G - C - D7 - G (I - IV - V7 - I)</li>
              </ul>
            </div>
            <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 space-y-2">
              <strong class="text-purple-700 dark:text-purple-300 uppercase block">Giọng Mi thứ (E minor)</strong>
              <ul class="space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong>Hợp âm Chủ (I):</strong> Em (Mi thứ: E - G - B)</li>
                <li><strong>Hợp âm Hạ át (IV):</strong> Am (La thứ: A - C - E)</li>
                <li><strong>Hợp âm Át (V):</strong> B / B7 (Si trưởng / 7 át: B - D# - F# - A)</li>
                <li><strong>Hợp âm bậc VI:</strong> C (Đô trưởng: C - E - G)</li>
                <li><strong>Vòng kết:</strong> Em - Am - B7 - Em (I - IV - V7 - I)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Quy tắc chuyển hợp âm và giải quyết hợp âm 7 át",
        content: `
          <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed my-2">
            Hợp âm 7 át (D7 trong Son trưởng, B7 trong Mi thứ) chứa quãng 5 giảm (Tritone) mang tính chất rất căng thẳng, luôn có xu hướng bắt buộc phải <strong>giải quyết về hợp âm chủ</strong> (D7 về G, B7 về Em) để mang lại cảm giác thỏa mãn, ổn định và trọn vẹn.
          </p>
        `
      }
    ],
    practice: [
      "Bấm và chuyển đổi các cặp hợp âm: G &rarr; C &rarr; D7 &rarr; G trên đàn Guitar hoặc Keyboard.",
      "Bấm và chuyển đổi chuỗi hợp âm: Em &rarr; Am &rarr; B7 &rarr; Em.",
      "Đặt hợp âm cho một câu hát quen thuộc ở giọng Son trưởng."
    ],
    summary: "Giọng Son trưởng có bộ ba hợp âm chính là G (Chủ), C (Hạ át), D7 (Át). Giọng Mi thứ có bộ ba hợp âm chính là Em (Chủ), Am (Hạ át), B7 (Át). Hợp âm 7 át luôn giải quyết về hợp âm chủ để kết bài.",
    quizzes: [
      {
        q: "Hợp âm chủ bậc I của giọng Son trưởng gồm các nốt nhạc nào?",
        options: ["G - B - D", "G - Bb - D", "C - E - G", "D - F# - A"],
        correctIndex: 0,
        explain: "Hợp âm Son trưởng (G) gồm âm gốc G, quãng 3 trưởng nốt B và quãng 5 đúng nốt D (G - B - D)."
      },
      {
        q: "Hợp âm át bảy (V7) của giọng Son trưởng là hợp âm nào?",
        options: ["Đô 7 (C7)", "Rê 7 át (D7)", "La 7 (A7)", "Mi 7 (E7)"],
        correctIndex: 1,
        explain: "Bậc V của Son trưởng là nốt D, hợp âm 7 át tương ứng là D7 (D - F# - A - C)."
      },
      {
        q: "Hợp âm hạ át bậc IV trong giọng Mi thứ là hợp âm gì?",
        options: ["Si thứ (Bm)", "La thứ (Am)", "Son trưởng (G)", "Đô trưởng (C)"],
        correctIndex: 1,
        explain: "Bậc IV của giọng Mi thứ là nốt A, hợp âm bậc IV là La thứ Am (A - C - E)."
      },
      {
        q: "Hợp âm át bậc V trong giọng Mi thứ hòa âm (B7) có chứa nốt thăng bất thường nào?",
        options: ["Nốt Fa thăng (F#)", "Nốt Rê thăng (D#)", "Nốt Sol thăng (G#)", "Nốt Đô thăng (C#)"],
        correctIndex: 1,
        explain: "Hợp âm B7 gồm B - D# - F# - A, trong đó nốt D# là bậc VII hòa âm được nâng cao."
      }
    ]
  },

  // ================= BÀI 8 =================
  {
    num: 8,
    topicNum: 4,
    title: "Bài 8: Thực hành nhạc cụ giai điệu và Hòa âm giọng Son trưởng",
    badgeColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    dotColor: "bg-blue-500",
    time: "45 phút",
    target: "Thực hành bấm chuẩn xác thế ngón nốt Fa thăng (F#) trên Sáo Recorder hoặc Kèn phím Melodica; Bấm thành thạo thế bấm hợp âm G, C, D7, Em trên Guitar và Keyboard; Diễn tấu bài hòa tấu học đường giọng Son trưởng.",
    intro: "Cầm nhạc cụ lên và lắng nghe từng âm thanh do chính mình tạo ra là niềm hứng khởi lớn lao. Cùng làm chủ thế bấm nốt Fa thăng và những hợp âm Son trưởng rộn ràng trên nhạc cụ của em!",
    sections: [
      {
        title: "1. Thế bấm nốt Fa thăng (F#) trên Recorder & Keyboard",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800 space-y-1">
              <strong class="text-teal-700 dark:text-teal-300 uppercase block">Sáo Recorder Soprano (Hệ Baroque)</strong>
              <p class="text-gray-600 dark:text-gray-300"><strong>Nốt F#1:</strong> Tay trái bấm kín lỗ 0 (ngón cái phía sau), lỗ 1, 2, 3. Tay phải bấm lỗ 5, 6 và mở ngón trỏ ở lỗ số 4. Luồng hơi thổi ấm áp, đều đặn.</p>
            </div>
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-1">
              <strong class="text-blue-700 dark:text-blue-300 uppercase block">Kèn phím Melodica / Keyboard</strong>
              <p class="text-gray-600 dark:text-gray-300"><strong>Nốt F#:</strong> Phím đen đầu tiên bên trái trong cụm 3 phím đen (ngay sau phím trắng F). Dùng ngón số 2 hoặc ngón số 3 ấn phím.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Thế bấm hợp âm G, C, D7 trên đàn Guitar",
        content: `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Hợp âm G trưởng:</strong> Ngón trỏ ngăn 2 dây 5, ngón giữa ngăn 3 dây 6, ngón áp út (hoặc út) ngăn 3 dây 1.</p>
            <p><strong>Hợp âm C trưởng:</strong> Ngón trỏ ngăn 1 dây 2, ngón giữa ngăn 2 dây 4, ngón áp út ngăn 3 dây 5.</p>
            <p><strong>Hợp âm D7:</strong> Ngón trỏ ngăn 1 dây 2, ngón giữa ngăn 2 dây 3, ngón áp út ngăn 2 dây 1 (gảy từ dây 4 trở xuống).</p>
          </div>
        `
      }
    ],
    practice: [
      "Thực hành thổi thang âm Son trưởng trên Sáo Recorder từ G1 lên G2.",
      "Chuyển ngón đàn Guitar giữa các hợp âm G - Em - C - D7 theo nhịp Disco hoặc March 2/4.",
      "Hòa tấu lớp học: Bè 1 sáo Recorder thổi giai điệu 'Hành khúc Thanh niên', Bè 2 đệm hòa âm Guitar/Keyboard."
    ],
    summary: "Thế bấm F# trên Recorder đòi hỏi mở ngón trỏ tay phải ở lỗ 4. Trên Guitar, thế bấm G, C, D7 là những thế bấm dây buông cơ bản và êm dịu nhất để đệm các bài hát giọng Son trưởng.",
    quizzes: [
      {
        q: "Trên bàn phím đàn Piano / Melodica, nốt Fa thăng (F#) nằm ở vị trí nào?",
        options: [
          "Phím đen đầu tiên bên trái trong cụm 3 phím đen",
          "Phím đen bên phải trong cụm 2 phím đen",
          "Phím trắng nằm giữa B và C",
          "Phím đen ngoài cùng bên phải cụm 3 phím đen"
        ],
        correctIndex: 0,
        explain: "Cụm 3 phím đen gồm F#, G#, Bb. Nốt F# chính là phím đen đầu tiên bên trái."
      },
      {
        q: "Khi bấm hợp âm Son trưởng (G) cơ bản trên đàn Guitar, ngón giữa tay trái bấm ở đâu?",
        options: ["Ngăn 1 dây 1", "Ngăn 3 dây 6 (dây bass trầm nhất)", "Ngăn 2 dây 3", "Ngăn 5 dây 4"],
        correctIndex: 1,
        explain: "Ngón giữa bấm nốt Sol (G) ở ngăn 3 dây số 6 làm nốt bass chính của hợp âm."
      },
      {
        q: "Khi bấm nốt Fa thăng (F#) trên sáo Recorder soprano hệ Baroque, ngón trỏ tay phải (lỗ số 4) ở trạng thái nào?",
        options: ["Bấm kín lỗ số 4", "Mở ngón trỏ (không bấm lỗ số 4)", "Bịt nửa lỗ", "Dán băng dính"],
        correctIndex: 1,
        explain: "Thế bấm F# trên Recorder hệ Baroque yêu cầu mở ngón trỏ ở lỗ số 4 (bấm lỗ 0, 1, 2, 3 và 5, 6)."
      },
      {
        q: "Tiết điệu đệm nào phù hợp nhất khi đệm đàn Guitar cho bài hát thể loại Hành khúc nhịp 2/4?",
        options: ["Tiết điệu Valse 3/4", "Tiết điệu March / Disco 2/4 sôi nổi, dứt khoát", "Tiết điệu Slow Rock 6/8", "Tiết điệu Bolero"],
        correctIndex: 1,
        explain: "Điệu March (hành khúc) hoặc Disco 2/4 dứt khoát, rộn ràng là lựa chọn hoàn hảo cho bài hành khúc."
      }
    ]
  },

  // ================= BÀI 9 =================
  {
    num: 9,
    topicNum: 5,
    title: "Bài 9: Nghệ thuật Sân khấu Chèo và Tuồng truyền thống",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Hiểu nguồn gốc, không gian diễn xướng và đặc trưng âm nhạc của nghệ thuật Chèo đồng bằng Bắc Bộ; Nhận biết tính bác học, ước lệ tượng trưng và nghệ thuật mặt nạ của nghệ thuật Tuồng (Hát Bội); Tự hào về di sản sân khấu cổ truyền của cha ông.",
    intro: "Trước khi có điện ảnh và truyền hình, sân đình làng quê Việt Nam từng rộn ràng trong tiếng trống chèo 'Tùng... cheng... tùng... cheng...' và những đêm tuồng bi tráng hào hùng. Hai bộ môn nghệ thuật sân khấu đỉnh cao này có nét độc đáo gì?",
    sections: [
      {
        title: "1. Nghệ thuật Sân khấu Chèo đồng bằng Bắc Bộ",
        content: `
          <p class="mb-3">
            <strong>Chèo:</strong> Là loại hình sân khấu ca kịch dân gian truyền thống phát triển rực rỡ ở vùng đồng bằng Bắc Bộ, gắn liền với hội hè và đời sống tinh thần của cư dân nông nghiệp lúa nước.
          </p>
          <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Đặc trưng nghệ thuật:</strong> Kết hợp nhuần nhuyễn giữa <em>Hát - Múa - Diễn - Nhạc</em>. Lời hát giàu chất thơ dân gian, trữ tình, đằm thắm (các điệu Đào liễu, Lới lơ, Quân tử vu dịch...).</p>
            <p><strong>Nhân vật Hề chèo:</strong> Linh hồn tạo nên tiếng cười trào lộng, hóm hỉnh, đả kích thói hư tật xấu của quan lại phong kiến và bênh vực người dân lương thiện.</p>
            <p><strong>Dàn nhạc chèo:</strong> Trống chèo (nhạc cụ chỉ huy), Đàn nguyệt, Đàn nhị, Sáo trúc, Tiêu, Não bạt.</p>
          </div>
        `
      },
      {
        title: "2. Nghệ thuật Tuồng (Hát Bội / Luận tuồng)",
        content: `
          <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Đặc trưng nghệ thuật:</strong> Là thể loại sân khấu cổ điển mang tính bác học, cung đình, đề cao đạo lý trung - quân - ái - quốc. Tính ước lệ tượng trưng cực kỳ cao (cưỡi ngựa chỉ bằng cây roi ngựa, chèo thuyền bằng mái chèo gỗ).</p>
            <p><strong>Nghệ thuật vẽ mặt nạ (Hóa trang):</strong> Màu sắc mặt nạ thể hiện tính cách nhân vật: Mặt đỏ (trung nghĩa, anh hùng như Quan Công), Mặt trắng (thư sinh nho nhã hoặc gian manh), Mặt rằn ri (nóng nảy dũng mãnh), Mặt đen (ngay thẳng, bộc trực).</p>
            <p><strong>Âm nhạc Tuồng:</strong> Dàn nhạc kèn chiến (Kèn bóp/Kèn dăm), Trống chiến, Nhị, Thanh la với các làn điệu nói lối, điệu Nam (buồn thương), điệu Khách (hào hùng).</p>
          </div>
        `
      }
    ],
    practice: [
      "Nghe trích đoạn làn điệu Chèo 'Đào liễu' và nhận diện âm sắc của tiếng đàn Nguyệt, tiếng trống Chèo.",
      "Quan sát các mẫu vẽ mặt nạ Tuồng và giải thích ý nghĩa tính cách qua màu sắc mặt.",
      "Thử thể hiện một cử chỉ ước lệ của Tuồng (động tác vuốt râu hoặc cưỡi ngựa)."
    ],
    summary: "Chèo là sân khấu dân gian Bắc Bộ trữ tình, hóm hỉnh với nhân vật Hề chèo. Tuồng là sân khấu kinh điển bác học, mang tính ước lệ cao, nổi tiếng với nghệ thuật vẽ mặt nạ biểu trưng tính cách và âm nhạc kèn trống hùng tráng.",
    quizzes: [
      {
        q: "Nhân vật nào trong sân khấu Chèo truyền thống giữ vai trò tạo tiếng cười đả kích phong kiến và đối thoại trực tiếp với khán giả?",
        options: ["Vai Đào thương", "Nhân vật Hề chèo", "Vai Kép chính", "Quan huyện"],
        correctIndex: 1,
        explain: "Hề chèo (Hề áo ngắn, Hề gậy) là linh hồn trào lộng, đem lại tiếng cười sảng khoái và phê phán thói xấu xã hội."
      },
      {
        q: "Trong nghệ thuật hóa trang mặt nạ Tuồng, khuôn mặt sơn màu Đỏ tượng trưng cho kiểu nhân vật nào?",
        options: [
          "Kẻ phản bội, tiểu nhân gian xảo",
          "Người anh hùng trung quân ái quốc, tận tụy, nghĩa khí",
          "Kẻ độc ác, nham hiểm",
          "Người lười biếng, tham lam"
        ],
        correctIndex: 1,
        explain: "Mặt đỏ trong nghệ thuật Tuồng biểu trưng cho tính cách trung liệt, nghĩa khí (như Quan Vân Trường)."
      },
      {
        q: "Nhạc cụ nào giữ vai trò chỉ huy nhịp điệu và phối hợp diễn xuất của diễn viên trên sân khấu Chèo?",
        options: ["Đàn Bầu", "Trống Chèo (Trống đế)", "Đàn Tranh", "Kèn Tây"],
        correctIndex: 1,
        explain: "Tiếng trống Chèo (trống đế) là nhạc cụ lĩnh xướng, chỉ huy mọi bước đi, điệu múa và câu hát của diễn viên."
      },
      {
        q: "Nghệ thuật sân khấu Tuồng mang đặc trưng thẩm mỹ nổi bật nào sau đây?",
        options: [
          "Tính tả thực 100% như đời sống hằng ngày",
          "Tính ước lệ, tượng trưng và cách điệu nghệ thuật cao độ",
          "Không sử dụng bất kỳ âm nhạc nào",
          "Chỉ biểu diễn rối trong nước"
        ],
        correctIndex: 1,
        explain: "Tuồng mang tính ước lệ tượng trưng sâu sắc: chiếc roi ngựa tượng trưng cho con tuấn mã, động tác chèo tượng trưng con thuyền vượt sóng."
      }
    ]
  },

  // ================= BÀI 10 =================
  {
    num: 10,
    topicNum: 5,
    title: "Bài 10: Nghệ thuật Đờn ca tài tử và Sân khấu Cải lương Nam Bộ",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Nắm vững nguồn gốc và giá trị Di sản văn hóa phi vật thể đại diện của nhân loại Đờn ca tài tử Nam Bộ; Hiểu quá trình hình thành Sân khấu Cải lương từ Đờn ca tài tử; Phân tích giá trị kiệt tác 'Dạ cổ hoài lang' và cấu trúc câu ca vọng cổ.",
    intro: "'Từ là từ phu tướng, báu kiếm sắc phán lên đàng...'. Câu ca Dạ cổ hoài lang của cố nhạc sĩ Cao Văn Lầu đã làm rung động hàng triệu trái tim người Việt qua hơn một thế kỷ. Cội nguồn của nghệ thuật Cải lương và Đờn ca tài tử phương Nam bắt đầu từ đâu?",
    sections: [
      {
        title: "1. Di sản Đờn ca tài tử Nam Bộ (UNESCO 2013)",
        content: `
          <p class="mb-3">
            <strong>Đờn ca tài tử:</strong> Là loại hình nghệ thuật dân gian đặc trưng của vùng đất Nam Bộ, ra đời cuối thế kỷ XIX, kết hợp tinh hoa giữa Nhã nhạc cung đình Huế và dân ca phương Nam.
          </p>
          <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Ý nghĩa chữ 'Tài tử':</strong> Người chơi nhạc là những tài tử - tri âm tri kỷ chơi đàn hát vì niềm đam mê nghệ thuật thanh tao, ngẫu hứng, không mang tính thương mại biểu diễn lấy tiền.</p>
            <p><strong>Dàn nhạc:</strong> Bộ ngũ tuyệt gồm Đàn Kìm (đàn Nguyệt), Đàn Tranh, Đàn Cò (đàn Nhị), Đàn Tỳ bà, Đàn Tam (sau này có thêm Đàn Ghita phím lõm độc đáo).</p>
          </div>
        `
      },
      {
        title: "2. Sự phát triển lên Sân khấu Cải lương và bản 'Dạ cổ hoài lang'",
        content: `
          <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Cải cách để tiến bộ:</strong> 'Cải cách hát ca theo tiến bộ - Lương truyền tuồng tích sánh văn minh'. Đầu thế kỷ XX, từ ca ra bộ, người Nam Bộ đã sáng tạo nên <strong>Sân khấu Cải lương</strong> - kịch hát hiện đại có cảnh trí, kịch bản hoàn chỉnh.</p>
            <p><strong>'Dạ cổ hoài lang' (Đêm nghe tiếng trống nhớ chồng - 1919):</strong> Kiệt tác bất hủ của nhạc sĩ Cao Văn Lầu viết tại Bạc Liêu theo nhịp 2, là tiền thân phát triển rực rỡ thành bản <strong>Vọng cổ</strong> (nhịp 4, nhịp 8, nhịp 16, nhịp 32, nhịp 64) - linh hồn của toàn bộ nghệ thuật Cải lương Nam Bộ.</p>
          </div>
        `
      }
    ],
    practice: [
      "Nghe trọn vẹn bản 'Dạ cổ hoài lang' (nhịp đôi) và một trích đoạn Vọng cổ nhịp 32 để thấy sự phát triển của giai điệu.",
      "Tìm hiểu cấu tạo đặc biệt của cây đàn 'Ghita phím lõm' (cần đàn khoét sâu giữa các ngăn để nhấn nhá âm rung đặc thù).",
      "Kể tên một số vở cải lương kinh điển mà em biết (ví dụ: 'Bên cầu dệt lụa', 'Tiếng trống Mê Linh', 'Tô Ánh Nguyệt')."
    ],
    summary: "Đờn ca tài tử Nam Bộ là Di sản văn hóa phi vật thể của nhân loại. Bản 'Dạ cổ hoài lang' (1919) của Cao Văn Lầu là nguồn cội phát triển thành bản Vọng cổ - cốt lõi tạo nên sức sống mãnh liệt của sân khấu Cải lương Nam Bộ.",
    quizzes: [
      {
        q: "Bản 'Dạ cổ hoài lang' do nhạc sĩ Cao Văn Lầu sáng tác năm 1919 tại địa phương nào?",
        options: ["Bạc Liêu", "Cần Thơ", "Sài Gòn - Chợ Lớn", "Tiền Giang"],
        correctIndex: 0,
        explain: "Bản 'Dạ cổ hoài lang' ra đời tại Bạc Liêu vào đêm rằm tháng Tám năm Kỷ Mùi 1919."
      },
      {
        q: "Cây đàn phương Tây nào khi du nhập vào Nam Bộ đã được người nghệ nhân khoét lõm cần đàn để chơi đờn ca tài tử?",
        options: ["Đàn Piano", "Đàn Guitar (Ghita phím lõm)", "Đàn Violin", "Kèn Trombone"],
        correctIndex: 1,
        explain: "Cây guitar phím lõm (khoét sâu ngăn đàn) giúp tạo nên những ngón nhấn, vuốt, rung đặc trưng cho hơi Nam, hơi Oán."
      },
      {
        q: "Thể loại ca khúc cốt lõi, được ví như 'linh hồn' không thể thiếu trong bất kỳ vở cải lương Nam Bộ nào là gì?",
        options: ["Hát dặm", "Bài Ca vọng cổ", "Hò đối đáp Quan họ", "Hát văn"],
        correctIndex: 1,
        explain: "Vọng cổ (phát triển từ Dạ cổ hoài lang) là bài ca cốt tủy tạo nên danh tiếng và linh hồn cho Cải lương."
      },
      {
        q: "Đờn ca tài tử Nam Bộ chính thức được UNESCO công nhận là Di sản văn hóa phi vật thể đại diện của nhân loại vào năm nào?",
        options: ["Năm 1999", "Năm 2005", "Năm 2013", "Năm 2020"],
        correctIndex: 2,
        explain: "Vào tháng 12 năm 2013, UNESCO đã chính thức vinh danh Đờn ca tài tử Nam Bộ của Việt Nam."
      }
    ]
  },

  // ================= BÀI 11 =================
  {
    num: 11,
    topicNum: 6,
    title: "Bài 11: Khí nhạc Việt Nam và Tác phẩm 'Kể chuyện ngày mùa'",
    badgeColor: "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300",
    dotColor: "bg-pink-500",
    time: "45 phút",
    target: "Hiểu bước phát triển của khí nhạc chuyên nghiệp Việt Nam thế kỷ XX; Thưởng thức và phân tích tác phẩm khí nhạc kinh điển 'Kể chuyện ngày mùa' của nhạc sĩ Trọng Bằng; Cảm nhận không khí ngày mùa rộn rã, no ấm nơi làng quê Việt Nam qua ngôn ngữ dàn nhạc.",
    intro: "Bên cạnh kho tàng ca khúc thanh nhạc đồ sộ, các nhạc sĩ Việt Nam đã sáng tạo nên những bản khí nhạc và giao hưởng tuyệt mỹ kết hợp nhạc cụ phương Tây với điệu thức dân gian. Bức tranh ngày mùa được vẽ nên bằng âm thanh khí nhạc như thế nào?",
    sections: [
      {
        title: "1. Khí nhạc chuyên nghiệp Việt Nam thế kỷ XX",
        content: `
          <p class="mb-3">
            Từ thập niên 1950 - 1960, các nhạc sĩ Việt Nam được đào tạo bài bản tại các nhạc viện hàng đầu thế giới đã bắt đầu sáng tác các tác phẩm khí nhạc không lời quy mô lớn (Giao hưởng, Concerto, Giao hưởng thơ, Tứ tấu dây).
          </p>
          <div class="p-3.5 bg-pink-50 dark:bg-pink-950/40 rounded-xl border border-pink-200 dark:border-pink-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Tác phẩm tiêu biểu:</strong> Giao hưởng <em>'Quê hương'</em> (Hoàng Việt - bản giao hưởng 4 chương đầu tiên của Việt Nam), Giao hưởng thơ <em>'Người về đem tới niềm vui'</em> (Trọng Bằng), Concerto cho violin và dàn nhạc <em>'Bài ca không lời'</em> (Doãn Nho)...</p>
          </div>
        `
      },
      {
        title: "2. Tác phẩm 'Kể chuyện ngày mùa' của nhạc sĩ Trọng Bằng",
        content: `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Nghệ thuật miêu tả:</strong> Tác phẩm khắc họa bức tranh mùa gặt bội thu trên đồng quê Bắc Bộ. Giai điệu tươi vui, nhí nhảnh, giàu chất thơ dân gian mộc mạc.</p>
            <p><strong>Phối khí dàn nhạc:</strong> Tiếng kèn gỗ (Oboe, Flute) và bộ dây gợi lên tiếng chim ca líu lo, tiếng lúa chín vàng dập dờn trong gió; tiếng gõ giòn giã mô phỏng bước chân gánh lúa trĩu hạt và tiếng cười giòn tan của bà con nông dân.</p>
          </div>
        `
      }
    ],
    practice: [
      "Nghe trọn vẹn tác phẩm 'Kể chuyện ngày mùa' và viết lại các hình ảnh đồng quê mà em tưởng tượng được.",
      "Nhận diện âm sắc của sáo Flute và kèn Oboe khi thể hiện chủ đề ngày mùa.",
      "Tìm hiểu thêm về thân thế và sự nghiệp của Giáo sư, Nhạc sĩ Trọng Bằng (Giải thưởng Hồ Chí Minh về VHNT)."
    ],
    summary: "Khí nhạc Việt Nam khẳng định tầm vóc nghệ thuật bác học đỉnh cao. 'Kể chuyện ngày mùa' của nhạc sĩ Trọng Bằng là kiệt tác khí nhạc giàu hình ảnh, tái hiện sinh động không khí gặt hái rộn ràng và niềm hạnh phúc ấm no của người nông dân.",
    quizzes: [
      {
        q: "Tác phẩm khí nhạc nổi tiếng 'Kể chuyện ngày mùa' là sáng tác của nhạc sĩ nào?",
        options: ["Hoàng Việt", "Trọng Bằng", "Doãn Nho", "Đỗ Nhuận"],
        correctIndex: 1,
        explain: "Tác phẩm do Giáo sư, Nhạc sĩ Trọng Bằng sáng tác, thể hiện vẻ đẹp thanh bình tươi sáng của đồng quê."
      },
      {
        q: "Bản giao hưởng 4 chương đầu tiên của nền âm nhạc Việt Nam có tên là gì và do ai sáng tác?",
        options: [
          "Giao hưởng 'Quê hương' của nhạc sĩ Hoàng Việt",
          "Giao hưởng 'Sông Hồng' của Văn Cao",
          "Giao hưởng 'Mùa xuân' của Trọng Bằng",
          "Giao hưởng 'Điện Biên' của Đỗ Nhuận"
        ],
        correctIndex: 0,
        explain: "Bản giao hưởng 'Quê hương' viết năm 1965 của nhạc sĩ Hoàng Việt là bản giao hưởng 4 chương đầu tiên của nước ta."
      },
      {
        q: "Âm hưởng chủ đạo của tác phẩm 'Kể chuyện ngày mùa' gợi lên điều gì?",
        options: [
          "Cơn bão lũ kinh hoàng trên biển",
          "Không khí rộn ràng, vui tươi, phấn khởi và ấm no của mùa lúa chín bội thu",
          "Chiến trận ác liệt nơi chiến hào",
          "Nỗi cô đơn giữa rừng sâu đêm đông"
        ],
        correctIndex: 1,
        explain: "Tác phẩm mang âm hưởng rộn rã, hân hoan, phác họa cảnh thu hoạch lúa tưng bừng của làng quê Việt Nam."
      },
      {
        q: "Nhạc cụ thuộc bộ nào trong dàn nhạc giao hưởng thường được dùng để mô phỏng tiếng chim hót líu lo và tiếng gió lướt qua cánh đồng?",
        options: ["Bộ gõ (Trống sấm)", "Bộ gỗ (Sáo Flute, Kèn Oboe, Piccolo)", "Bộ kèn đồng (Tuba)", "Đàn Piano đập mạnh"],
        correctIndex: 1,
        explain: "Bộ gỗ (Woodwinds) với âm sắc thanh thoát, trong trẻo thường được dùng mô phỏng thiên nhiên, chim muông."
      }
    ]
  },

  // ================= BÀI 12 =================
  {
    num: 12,
    topicNum: 6,
    title: "Bài 12: Kỹ thuật hát nốt hoa mỹ và Hát lướt nhanh (Riff & Run)",
    badgeColor: "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300",
    dotColor: "bg-pink-500",
    time: "45 phút",
    target: "Hiểu bản chất và ký hiệu các nốt hoa mỹ (Grace notes: Acciaccatura, Appoggiatura); Nắm vững kỹ thuật chạy nốt lướt nhanh (Riff & Run / Melisma) trong nhạc Pop và R&B hiện đại; Rèn luyện sự linh hoạt, mềm dẻo của thanh đới khi đổi cao độ nhanh.",
    intro: "Trong các bản hit của các ca sĩ Pop và R&B hàng đầu (như Mariah Carey, Whitney Houston, hay các ca sĩ trẻ Việt Nam), người nghe thường mê mẩn trước những câu chạy nốt lắt léo, hoa mỹ chỉ trong một cái chớp mắt. Kỹ thuật ấy là gì?",
    sections: [
      {
        title: "1. Nốt hoa mỹ trong âm nhạc (Grace Notes)",
        content: `
          <p class="mb-3">
            <strong>Nốt hoa mỹ (Nốt thêu / Nốt lướt):</strong> Là những nốt nhạc phụ có kích thước nhỏ hơn nốt chính, dùng để trang trí, làm duyên dáng và tăng tính biểu cảm cho nốt nhạc chính đứng ngay sau nó.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-pink-50 dark:bg-pink-950/40 rounded-xl border border-pink-200 dark:border-pink-800 space-y-1">
              <strong class="text-pink-700 dark:text-pink-300 uppercase block">Nốt hoa mỹ ngắn (Acciaccatura)</strong>
              <p class="text-gray-600 dark:text-gray-300">Có một gạch chéo nhỏ ở đuôi nốt. Được hát hoặc bấm phím cực nhanh, lướt qua chớp nhoáng trước phách hoặc ngay đầu phách của nốt chính.</p>
            </div>
            <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 space-y-1">
              <strong class="text-purple-700 dark:text-purple-300 uppercase block">Nốt hoa mỹ dài (Appoggiatura)</strong>
              <p class="text-gray-600 dark:text-gray-300">Không có gạch chéo. Chiếm một nửa (hoặc 2/3) giá trị trường độ của nốt chính, tạo cảm giác nén hơi và giải quyết êm dịu.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Kỹ thuật hát lướt nhanh (Vocal Riff & Run / Melisma)",
        content: `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Khái niệm:</strong> Là kỹ thuật hát một chuỗi gồm nhiều nốt nhạc khác cao độ (thường là 4 đến 10 nốt chạy nhanh) chỉ trên <em>một nguyên âm duy nhất</em> (ví dụ: 'Oh...', 'Yeah...', 'Ah...').</p>
            <p><strong>Bí quyết luyện tập:</strong> Tập từ tốc độ chậm (Adagio) để mỗi nốt nhạc đều chuẩn xác về cao độ ('sạch nốt'), sau đó mới tăng dần tốc độ nhanh dần (Allegro). Dây thanh quản phải hoàn toàn thả lỏng, không được gồng ép cơ cổ.</p>
          </div>
        `
      }
    ],
    practice: [
      "Luyện tập mẫu âm chạy nốt ngũ cung 5 nốt (Đô - Rê - Mi - Sol - La) trên nguyên âm 'Ah' với tốc độ nhanh dần.",
      "Tìm và phân tích một câu hát có sử dụng kỹ thuật Riff & Run trong một ca khúc V-Pop mà em yêu thích.",
      "Thực hành hát nốt hoa mỹ ngắn (Acciaccatura) trên một câu ca khúc trữ tình."
    ],
    summary: "Nốt hoa mỹ (Grace note) trang trí làm duyên cho nốt nhạc chính. Kỹ thuật Riff & Run (Melisma) trong nhạc Pop/R&B đòi hỏi thanh đới linh hoạt, luyện tập từ chậm đến nhanh để đạt độ chính xác từng cao độ.",
    quizzes: [
      {
        q: "Ký hiệu nốt nhạc nhỏ có một đường gạch chéo ở đuôi nốt đứng trước một nốt chính là nốt gì?",
        options: ["Nốt hoa mỹ ngắn (Acciaccatura)", "Nốt lặng tròn", "Dấu thăng kép", "Dấu mắt ngỗng"],
        correctIndex: 0,
        explain: "Nốt có gạch chéo nhỏ ở đuôi là nốt hoa mỹ ngắn (Acciaccatura), diễn tấu lướt cực nhanh vào nốt chính."
      },
      {
        q: "Kỹ thuật 'Riff & Run' (Melisma) trong thanh nhạc hiện đại có đặc điểm cốt lõi nào?",
        options: [
          "Mỗi từ ngữ chỉ hát đúng duy nhất một nốt nhạc",
          "Hát một chuỗi nhiều nốt nhạc khác cao độ chạy lướt nhanh trên cùng một nguyên âm duy nhất",
          "Hát bằng cách hét thật to không theo giai điệu",
          "Không phát ra âm thanh nào"
        ],
        correctIndex: 1,
        explain: "Melisma / Run là kỹ thuật hát một chuỗi nhiều nốt chạy lướt nhanh trên cùng một âm tiết lời hát."
      },
      {
        q: "Để luyện tập kỹ thuật chạy nốt (Run) đạt hiệu quả cao và không bị 'phô nốt', người học cần tuân thủ nguyên tắc nào?",
        options: [
          "Cố gắng hát thật nhanh ngay từ lần đầu tiên",
          "Luyện tập từ tốc độ chậm rãi để định hình chính xác từng cao độ, sau đó mới tăng dần tốc độ",
          "Uống nước đá lạnh trước khi hát",
          "Gồng cứng cơ họng để giữ nốt"
        ],
        correctIndex: 1,
        explain: "Quy tắc vàng của thanh nhạc: Phải tập chậm từng nốt thật sạch cao độ trước khi tăng tốc độ lướt nhanh."
      },
      {
        q: "Kỹ thuật Riff & Run phát triển rực rỡ và trở thành phong cách đặc trưng nhất trong các dòng nhạc nào?",
        options: ["R&B, Soul và Pop hiện đại", "Hành khúc diễu binh", "Nhạc tiền chiến", "Hát ru cổ truyền"],
        correctIndex: 0,
        explain: "R&B, Soul và Gospel là cái nôi phát triển đỉnh cao của kỹ thuật thanh nhạc Riff & Run điêu luyện."
      }
    ]
  },

  // ================= BÀI 13 =================
  {
    num: 13,
    topicNum: 7,
    title: "Bài 13: Phần mềm chép nhạc và Ký âm kỹ thuật số (MuseScore)",
    badgeColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300",
    dotColor: "bg-cyan-500",
    time: "45 phút",
    target: "Làm quen với giao diện và tính năng của phần mềm chép nhạc chuyên nghiệp mã nguồn mở MuseScore; Nhập nốt nhạc bằng bàn phím máy tính hoặc đàn MIDI; Soạn thảo lời ca, ký hiệu hợp âm, phối bè và xuất bản nhạc chuẩn quốc tế định dạng PDF / MIDI / MP3.",
    intro: "Thời kỳ người nhạc sĩ phải cầm bút chấm mực nắn nót từng nốt nhạc trên giấy kẻ ô đã qua. Ngày nay, chỉ với chiếc máy tính và phần mềm MuseScore, bất kỳ ai cũng có thể in ra những tổng phổ tác phẩm âm nhạc chuẩn mực như sách in. Phần mềm này hoạt động ra sao?",
    sections: [
      {
        title: "1. Giới thiệu phần mềm MuseScore",
        content: `
          <p class="mb-3">
            <strong>MuseScore:</strong> Là phần mềm chép nhạc (Notation software) chuyên nghiệp, mã nguồn mở và hoàn toàn <strong>miễn phí</strong>, hỗ trợ đa nền tảng (Windows, macOS, Linux).
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-cyan-50 dark:bg-cyan-950/40 rounded-xl border border-cyan-200 dark:border-cyan-800 space-y-1">
              <strong class="text-cyan-700 dark:text-cyan-300 uppercase block">Ưu điểm vượt trội</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Giao diện tiếng Việt trực quan, thư viện âm thanh mô phỏng (SoundFont) chất lượng cao, phát lại bản nhạc để nghe thử ngay lập tức, tự động căn chỉnh khoảng cách nốt nhạc thẩm mỹ.</p>
            </div>
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-1">
              <strong class="text-blue-700 dark:text-blue-300 uppercase block">Các định dạng xuất file</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Xuất file in ấn (PDF, PNG), file trao đổi dữ liệu nhạc (MusicXML, MIDI) và file âm thanh thực (MP3, WAV, FLAC).</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Quy trình 4 bước nhập nốt cơ bản trong MuseScore",
        content: `
          <div class="space-y-2 text-xs text-gray-700 dark:text-gray-300 my-2">
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/40 rounded-lg border border-gray-200 dark:border-gray-700">
              <strong>Bước 1: Khởi tạo tác phẩm:</strong> Chọn tên bài, nhạc sĩ, khóa nhạc, số chỉ nhịp (2/4, 4/4), hóa biểu (Son trưởng, Pha trưởng) và tốc độ (Tempo).
            </div>
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/40 rounded-lg border border-gray-200 dark:border-gray-700">
              <strong>Bước 2: Bật chế độ nhập nốt:</strong> Nhấn phím tắt <strong>N</strong> trên bàn phím máy tính để kích hoạt biểu tượng cây bút nhập nốt.
            </div>
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/40 rounded-lg border border-gray-200 dark:border-gray-700">
              <strong>Bước 3: Chọn trường độ và gõ cao độ:</strong> Phím số 4 (móc đơn), 5 (nốt đen), 6 (nốt trắng), 7 (nốt tròn). Gõ các chữ cái tiếng Anh C, D, E, F, G, A, B tương ứng với Đô, Rê, Mi, Pha, Son, La, Si.
            </div>
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/40 rounded-lg border border-gray-200 dark:border-gray-700">
              <strong>Bước 4: Nhập lời ca (Lyrics):</strong> Chọn nốt nhạc và nhấn tổ hợp phím <strong>Ctrl + L</strong>, gõ từng từ rồi nhấn phím Spacebar để tự động nhảy sang nốt kế tiếp.
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Mở phần mềm MuseScore, tạo một văn bản bài hát mới ở giọng Son trưởng, nhịp 2/4.",
      "Nhập 4 ô nhịp đầu tiên của Bài đọc nhạc số 1 bằng bàn phím máy tính (phím N, phím số 5, các chữ cái C, D, E, F, G).",
      "Gắn lời ca cho 4 ô nhịp bằng phím tắt Ctrl + L và xuất file ra định dạng PDF."
    ],
    summary: "MuseScore là phần mềm ký âm mã nguồn mở mạnh mẽ, miễn phí. Phím N dùng để bật chế độ nhập nốt; các phím số (4, 5, 6, 7) chọn trường độ; các phím chữ (C, D, E, F, G, A, B) nhập cao độ; phím Ctrl + L để nhập lời ca.",
    quizzes: [
      {
        q: "Trong phần mềm chép nhạc MuseScore, phím tắt nào trên bàn phím dùng để bật/tắt chế độ nhập nốt nhạc?",
        options: ["Phím cách (Spacebar)", "Phím N", "Phím Enter", "Phím Shift"],
        correctIndex: 1,
        explain: "Phím 'N' (Note input) là phím tắt mặc định để kích hoạt chế độ ghi chép nốt nhạc trong MuseScore."
      },
      {
        q: "Để chọn trường độ nốt Đen trong MuseScore, em nhấn phím số nào trên bàn phím máy tính?",
        options: ["Phím số 3", "Phím số 4", "Phím số 5", "Phím số 6"],
        correctIndex: 2,
        explain: "Trong MuseScore: phím 4 là móc đơn, phím 5 là nốt đen, phím 6 là nốt trắng, phím 7 là nốt tròn."
      },
      {
        q: "Tổ hợp phím tắt nào được sử dụng để nhập lời ca (Lyrics) bên dưới nốt nhạc trong MuseScore?",
        options: ["Ctrl + L", "Ctrl + S", "Ctrl + P", "Ctrl + Z"],
        correctIndex: 0,
        explain: "Tổ hợp phím Ctrl + L (viết tắt của Lyrics) mở ô nhập lời ca phía dưới nốt nhạc đã chọn."
      },
      {
        q: "Định dạng tệp nào sau đây cho phép xuất bản nhạc dưới dạng tài liệu in ấn chất lượng cao đẹp mắt nhất?",
        options: [".TXT", ".PDF", ".MP3", ".BAT"],
        correctIndex: 1,
        explain: "Định dạng PDF (Portable Document Format) giữ nguyên vẹn độ sắc nét của nốt nhạc để in ấn tổng phổ."
      }
    ]
  },

  // ================= BÀI 14 =================
  {
    num: 14,
    topicNum: 7,
    title: "Bài 14: Thu âm, Xử lý âm thanh (Audacity) và Hòa âm tự động (JJazzLab)",
    badgeColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300",
    dotColor: "bg-cyan-500",
    time: "45 phút",
    target: "Sử dụng phần mềm Audacity để thu âm giọng hát qua micro, cắt dán track, khử tạp âm (Noise Reduction) và thêm hiệu ứng Reverb/Echo; Ứng dụng phần mềm JJazzLab nhập vòng hợp âm để tự động tạo nhạc đệm (Backing track) phong phú.",
    intro: "Một bản thu âm hay không chỉ phụ thuộc vào giọng hát mộc mạc mà còn cần bàn tay biên tập âm thanh khéo léo để loại bỏ tạp âm và tạo độ vang ấm. Các phần mềm miễn phí như Audacity và JJazzLab giúp chúng ta trở thành nhà sản xuất âm nhạc tại nhà như thế nào?",
    sections: [
      {
        title: "1. Thu âm và Xử lý âm thanh chuyên nghiệp với Audacity",
        content: `
          <p class="mb-3">
            <strong>Audacity:</strong> Là phần mềm biên tập âm thanh đa rãnh (Multi-track audio editor) miễn phí phổ biến nhất thế giới.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-1">
              <strong class="text-blue-700 dark:text-blue-300 uppercase block">Quy trình thu âm cơ bản</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Cắm micro và tai nghe. Nhấn nút <strong>Record (chấm tròn đỏ)</strong> để thu âm. Nhấn <strong>Stop (hình vuông đen)</strong> để kết thúc. Nhấn <strong>Play (tam giác xanh)</strong> để nghe lại.</p>
            </div>
            <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800 space-y-1">
              <strong class="text-teal-700 dark:text-teal-300 uppercase block">Hai kỹ thuật xử lý then chốt</strong>
              <ul class="text-gray-600 dark:text-gray-300 space-y-1">
                <li><strong>1. Khử ồn (Noise Reduction):</strong> Chọn một đoạn âm thanh im lặng chỉ có tiếng quạt/tiếng xì &rarr; Bấm <em>Get Noise Profile</em> &rarr; Chọn toàn bộ bản thu &rarr; Bấm <em>OK</em> để xóa sạch tạp âm nền.</li>
                <li><strong>2. Hiệu ứng Reverb (Độ vang):</strong> Tạo không gian âm thanh ấm cúng như đang hát trong phòng hòa nhạc lớn.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Tạo nhạc đệm tự động với phần mềm JJazzLab",
        content: `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>JJazzLab:</strong> Là phần mềm tạo nhạc đệm tự động (Automatic backing track generator) thông minh. Người dùng chỉ cần:</p>
            <ol class="list-decimal pl-5 space-y-1">
              <li>Chọn một điệu nhạc (Style) như Pop Ballad, Bossa Nova, Rock, Valse...</li>
              <li>Gõ tên các hợp âm của bài hát vào từng ô nhịp (ví dụ: G | C | D7 | G).</li>
              <li>Nhấn Play: Phần mềm sẽ tự động chỉ huy dàn nhạc ảo sinh ra tiếng Trống, Bass, Piano và Guitar đệm hát hoàn hảo theo thời gian thực!</li>
            </ol>
          </div>
        `
      }
    ],
    practice: [
      "Sử dụng Audacity thu âm một câu hát mộc, áp dụng bộ lọc Noise Reduction để khử tiếng xì nền.",
      "Thêm hiệu ứng Reverb cho giọng hát và xuất file âm thanh hoàn chỉnh định dạng MP3.",
      "Tạo một bài nhạc đệm 8 ô nhịp trên JJazzLab với vòng hợp âm G - C - D7 - G điệu Pop Ballad."
    ],
    summary: "Audacity là công cụ thu âm, cắt ghép và xử lý hiệu ứng âm thanh (khử ồn Noise Reduction, tạo vang Reverb). JJazzLab tự động tạo nhạc đệm đa nhạc cụ dựa trên chuỗi hợp âm và phong cách âm nhạc do người dùng thiết lập.",
    quizzes: [
      {
        q: "Nút bấm nào trên thanh điều khiển của Audacity dùng để bắt đầu quá trình ghi âm từ micro?",
        options: ["Nút tam giác xanh (Play)", "Nút hai vạch dọc (Pause)", "Nút hình tròn màu đỏ (Record)", "Nút hình vuông màu đen (Stop)"],
        correctIndex: 2,
        explain: "Nút tròn màu đỏ là biểu tượng chuẩn quốc tế cho chức năng ghi âm (Record)."
      },
      {
        q: "Công cụ 'Noise Reduction' (Khử nhiễu/Khử ồn) trong Audacity có công dụng gì?",
        options: [
          "Làm cho âm thanh to hơn gấp đôi",
          "Loại bỏ tiếng xì nền, tiếng quạt gió hoặc tạp âm môi trường mà vẫn giữ nguyên giọng hát",
          "Đổi giọng nam thành giọng nữ",
          "Xóa toàn bộ bản ghi âm"
        ],
        correctIndex: 1,
        explain: "Noise Reduction giúp phân tích và loại bỏ các tạp âm tĩnh (tiếng xì, rè, quạt máy) để bản thu trong trẻo hơn."
      },
      {
        q: "Hiệu ứng âm thanh nào sau đây tạo cảm giác âm thanh có độ vang vọng, ấm áp như đang trình diễn trong phòng hòa nhạc lớn?",
        options: ["Reverb (Vang vọng)", "Mute (Tắt tiếng)", "Distortion (Méo tiếng gắt)", "Pitch shift"],
        correctIndex: 0,
        explain: "Reverb mô phỏng sự phản xạ của sóng âm trong không gian phòng kín, giúp giọng hát vang và mềm mại."
      },
      {
        q: "Phần mềm JJazzLab hoạt động dựa trên cơ chế nào để tạo ra bản nhạc đệm?",
        options: [
          "Bắt buộc người dùng phải tự đánh từng nốt trống",
          "Tự động sinh ra các bè nhạc cụ (Bass, Drum, Piano, Guitar) dựa trên vòng hợp âm và điệu nhạc do người dùng nhập vào",
          "Tải ngẫu nhiên một bài hát trên mạng về máy",
          "Vẽ tranh minh họa bài hát"
        ],
        correctIndex: 1,
        explain: "JJazzLab tự động hòa âm phối khí đa bè nhạc cụ dựa trên chuỗi hợp âm và style người dùng chọn."
      }
    ]
  },

  // ================= BÀI 15 =================
  {
    num: 15,
    topicNum: 8,
    title: "Bài 15: Các ngành nghề âm nhạc thời đại công nghệ số 4.0",
    badgeColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300",
    dotColor: "bg-orange-500",
    time: "45 phút",
    target: "Khám phá bức tranh thị trường lao động đa dạng trong ngành công nghiệp âm nhạc hiện đại; Nhận biết vai trò, yêu cầu chuyên môn của các nghề mới: Nhà sản xuất âm nhạc (Music Producer), Kỹ sư âm thanh (Audio/Mastering Engineer), Thiết kế âm thanh (Sound Designer game/phim); Định hướng sở thích và năng khiếu bản thân.",
    intro: "Nhiều người lầm tưởng học âm nhạc chỉ có hai con đường: làm ca sĩ nổi tiếng hoặc làm giáo viên dạy nhạc. Nhưng trong thế kỷ 21, ngành công nghiệp âm nhạc số trị giá hàng chục tỷ đô la đang mở ra những cơ hội nghề nghiệp vô cùng hấp dẫn nào?",
    sections: [
      {
        title: "1. Các nhóm ngành nghề mới trong công nghiệp âm nhạc số",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs">
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-orange-600 block mb-1 uppercase">1. Nhà sản xuất âm nhạc (Music Producer)</strong>
              Là 'tổng công trình sư' định hình toàn bộ phong cách bài hát, từ lên ý tưởng, chọn ca sĩ, hòa âm phối khí (Beat making), điều khiển phòng thu đến hoàn thiện sản phẩm thương mại.
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-blue-600 block mb-1 uppercase">2. Kỹ sư hòa âm & Làm chủ âm thanh (Mixing & Mastering Engineer)</strong>
              Chuyên gia kỹ thuật xử lý cân bằng tần số EQ, không gian Stereo/Surround, nén dải động (Compression) để bài hát đạt chất lượng âm thanh hoàn mỹ nhất trên mọi thiết bị phát loa.
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-purple-600 block mb-1 uppercase">3. Thiết kế âm thanh trò chơi & điện ảnh (Sound Designer)</strong>
              Sáng tạo hiệu ứng âm thanh kỹ thuật số (tiếng va chạm vũ khí, quái vật, phép thuật, tiếng bước chân, không gian giả tưởng) cho các tựa game và phim bom tấn Hollywood.
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-emerald-600 block mb-1 uppercase">4. Quản lý nghệ sĩ & Tiếp thị âm nhạc (Music Manager / Marketer)</strong>
              Xây dựng thương hiệu cá nhân cho nghệ sĩ, phân phối bài hát lên các nền tảng số (Spotify, TikTok, Apple Music), truyền thông và tổ chức tour lưu diễn.
            </div>
          </div>
        `
      },
      {
        title: "2. Kỹ năng cần có của người làm âm nhạc thời đại 4.0",
        content: `
          <ul class="text-xs text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1 my-2">
            <li><strong>Kiến thức nhạc lý nền tảng:</strong> Thẩm âm tốt, nắm chắc hòa âm, tiết tấu và giai điệu.</li>
            <li><strong>Làm chủ công nghệ số:</strong> Thành thạo các phần mềm DAW, plugin hiệu ứng và thiết bị phần cứng phòng thu.</li>
            <li><strong>Tư duy sáng tạo & Khả năng làm việc nhóm:</strong> Biết hợp tác với đạo diễn, nhạc sĩ, ca sĩ và ekip truyền thông.</li>
          </ul>
        `
      }
    ],
    practice: [
      "Tìm hiểu thông tin về một Music Producer nổi tiếng của Việt Nam (ví dụ: Touliver, Masew, DTAP, SlimV) và phong cách âm nhạc của họ.",
      "Tự đánh giá năng khiếu và sự phù hợp của bản thân đối với các vị trí nghề nghiệp âm nhạc số.",
      "Lập kế hoạch rèn luyện các kỹ năng công nghệ âm nhạc cần thiết trong mùa hè sau lớp 12."
    ],
    summary: "Ngành công nghiệp âm nhạc thời 4.0 mở ra nhiều nghề nghiệp triển vọng: Music Producer, Mixing/Mastering Engineer, Sound Designer game/phim, Music Marketer. Thành công đòi hỏi sự kết hợp giữa tài năng âm nhạc và kỹ năng làm chủ công nghệ số.",
    quizzes: [
      {
        q: "Vị trí nào trong ngành âm nhạc chịu trách nhiệm toàn diện từ khâu lên ý tưởng, phối khí, định hình phong cách đến hoàn thiện sản phẩm âm nhạc cuối cùng?",
        options: ["Kỹ thuật viên ánh sáng", "Nhà sản xuất âm nhạc (Music Producer)", "Nhân viên bán vé", "Bảo vệ nhà hát"],
        correctIndex: 1,
        explain: "Music Producer là linh hồn đứng sau thành công của tác phẩm, điều phối mọi khâu sản xuất âm nhạc."
      },
      {
        q: "Nghề 'Sound Designer' (Thiết kế âm thanh) có nhiệm vụ cốt lõi là gì?",
        options: [
          "May trang phục biểu diễn cho ca sĩ",
          "Sáng tạo các hiệu ứng âm thanh kỹ thuật số (tiếng nổ, quái vật, môi trường giả tưởng) cho phim ảnh và trò chơi điện tử (game)",
          "Bán loa đài ở siêu thị",
          "Vẽ tranh cổ động"
        ],
        correctIndex: 1,
        explain: "Sound Designer tạo ra các âm thanh phi thực tế hoặc hiệu ứng môi trường chân thực cho game và điện ảnh."
      },
      {
        q: "Công đoạn 'Mastering' trong sản xuất âm nhạc có ý nghĩa kỹ thuật gì?",
        options: [
          "Dạy ca sĩ tập phát âm",
          "Xử lý hoàn thiện khâu cuối cùng để âm lượng và tần số bài hát đạt chuẩn cân bằng cao nhất trên mọi hệ thống loa và nền tảng số",
          "In bìa đĩa CD",
          "Viết hợp đồng biểu diễn"
        ],
        correctIndex: 1,
        explain: "Mastering là bước tối ưu hóa âm thanh cuối cùng trước khi phân phối bài hát ra thị trường toàn cầu."
      },
      {
        q: "Để theo đuổi nghề sản xuất âm nhạc trong thời đại số, yếu tố nào sau đây là quan trọng nhất?",
        options: [
          "Chỉ cần có nhiều tiền mua đồ đắt tiền",
          "Sự kết hợp giữa tư duy cảm thụ âm nhạc, kiến thức hòa âm và kỹ năng thành thạo phần mềm công nghệ âm thanh",
          "Chỉ cần biết hát thật to",
          "Không cần học nhạc lý"
        ],
        correctIndex: 1,
        explain: "Người làm nhạc hiện đại cần kiến thức âm nhạc vững chắc đi đôi với kỹ năng làm chủ công nghệ số chuyên sâu."
      }
    ]
  },

  // ================= BÀI 16 =================
  {
    num: 16,
    topicNum: 8,
    title: "Bài 16: Trí tuệ nhân tạo (AI) trong âm nhạc và Đạo đức sáng tạo nghệ thuật",
    badgeColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300",
    dotColor: "bg-orange-500",
    time: "45 phút",
    target: "Tìm hiểu các ứng dụng đột phá của Trí tuệ nhân tạo (AI) trong sáng tác và sản xuất âm nhạc (AI Music Generation, Voice Cloning, Stem Separation); Phân tích những thách thức pháp lý và đạo đức về quyền tác giả của tác phẩm do AI tạo ra; Khẳng định giá trị nhân văn không thể thay thế của cảm xúc con người trong nghệ thuật.",
    intro: "Hiện nay, chỉ với một câu lệnh văn bản (Prompt), các công cụ AI có thể tự động sáng tác ra một bài hát hoàn chỉnh trong 30 giây. Liệu Trí tuệ nhân tạo có thể thay thế hoàn toàn người nhạc sĩ? Đâu là ranh giới giữa hỗ trợ sáng tạo và đạo nhái trong kỷ nguyên AI?",
    sections: [
      {
        title: "1. Ứng dụng đột phá của AI trong âm nhạc hiện đại",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-3 text-xs">
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-sky-600 block mb-1 uppercase">1. Tách track âm thanh (Stem Separation)</strong>
              AI (như Spleeter, Moises) sử dụng mạng nơ-ron học sâu để tách riêng giọng hát (Vocal), trống (Drums), bass, piano từ một bài hát mp3 hỗn hợp với độ sạch đáng kinh ngạc.
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-purple-600 block mb-1 uppercase">2. Tái tạo giọng hát (AI Voice Cloning)</strong>
              Mô phỏng âm sắc của một ca sĩ cụ thể qua dữ liệu giọng nói học được, cho phép thử nghiệm bè mẫu mà không cần ca sĩ có mặt tại phòng thu.
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-pink-600 block mb-1 uppercase">3. Tạo nhạc nền tự động (Generative Music)</strong>
              Các công cụ như Suno, Udio tạo nhạc nền nhanh chóng cho video, podcast, giúp tiết kiệm thời gian và kinh phí sản xuất ban đầu.
            </div>
          </div>
        `
      },
      {
        title: "2. Thách thức đạo đức bản quyền và Giá trị nhân văn của nghệ thuật",
        content: `
          <div class="space-y-2.5 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            <p><strong>Tranh chấp bản quyền dữ liệu đào tạo:</strong> Các mô hình AI được đào tạo trên hàng triệu bài hát của các nhạc sĩ trong quá khứ mà không xin phép hay trả phí tác quyền. Đây là vấn đề pháp lý gay gắt nhất toàn cầu hiện nay.</p>
            <p><strong>Cảm xúc chân thật không thể thay thế:</strong> AI có thể lắp ghép thuật toán các nốt nhạc một cách hoàn hảo, nhưng AI <em>không có trái tim, không biết đau đớn, không biết yêu thương và không có trải nghiệm cuộc sống</em>. Tác phẩm âm nhạc vĩ đại sống mãi với thời gian luôn là sự rung động sâu thẳm từ tâm hồn của con người.</p>
          </div>
        `
      }
    ],
    practice: [
      "Trải nghiệm một công cụ AI tách beat nhạc (như Moises hoặc LALAL.AI) để xem cách AI nhận diện từng dải tần nhạc cụ.",
      "Thảo luận về đề tài: 'Một bài hát do AI sáng tác 100% có xứng đáng nhận giải thưởng âm nhạc danh giá (như Grammy hay Cống hiến) hay không? Vì sao?'",
      "Viết bài thu hoạch ngắn (1 trang) tổng kết hành trình học tập môn Âm nhạc suốt 3 năm THPT và những giá trị nghệ thuật đọng lại trong tâm hồn em."
    ],
    summary: "AI là công cụ trợ lực mạnh mẽ giúp tối ưu hóa quy trình sản xuất âm nhạc. Tuy nhiên, cảm xúc chân thành, tư tưởng nhân văn và trải nghiệm sống của con người là linh hồn bất tử của nghệ thuật mà không một cỗ máy thông minh nào có thể thay thế.",
    quizzes: [
      {
        q: "Công nghệ AI 'Stem Separation' trong âm nhạc có khả năng thực hiện nhiệm vụ gì?",
        options: [
          "Tự động hát thay ca sĩ trên sân khấu trực tiếp",
          "Tách riêng biệt các dải âm thanh (như Vocal, Drum, Bass, Piano) từ một file âm thanh hỗn hợp đã trộn sẵn",
          "In ra đĩa than",
          "Thay thế micro thu âm"
        ],
        correctIndex: 1,
        explain: "Stem separation sử dụng thuật toán AI để bóc tách từng bè nhạc cụ riêng biệt từ một bản thu tổng thể."
      },
      {
        q: "Vấn đề pháp lý và đạo đức gây tranh cãi lớn nhất hiện nay về các mô hình AI tạo nhạc là gì?",
        options: [
          "Máy tính tiêu tốn quá nhiều điện",
          "AI được huấn luyện trên hàng triệu tác phẩm của các nhạc sĩ mà không xin phép và không trả tiền tác quyền",
          "Âm thanh AI phát ra quá to",
          "AI chỉ chơi được nhạc cổ điển"
        ],
        correctIndex: 1,
        explain: "Việc sử dụng chất xám của nghệ sĩ để huấn luyện dữ liệu AI mà không có sự đồng ý đang là tâm điểm tranh chấp bản quyền toàn cầu."
      },
      {
        q: "Yếu tố cốt lõi nào khiến tác phẩm do con người sáng tạo luôn vượt trội và không thể bị AI thay thế hoàn toàn?",
        options: [
          "Tốc độ gõ nốt của con người nhanh hơn máy tính",
          "Trái tim biết yêu thương, sự rung cảm chân thật trước nỗi đau, niềm vui và những trải nghiệm sống sâu sắc của con người",
          "Con người không bao giờ mắc lỗi sai",
          "Con người có thể làm việc 24/7 không cần ngủ"
        ],
        correctIndex: 1,
        explain: "Nghệ thuật là tiếng nói của tâm hồn và trải nghiệm sống chân thật - điều mà thuật toán máy móc không bao giờ sở hữu."
      },
      {
        q: "Thái độ đúng đắn và văn minh nhất của học sinh đối với làn sóng công nghệ AI trong âm nhạc là gì?",
        options: [
          "Tẩy chay hoàn toàn tất cả công nghệ máy tính",
          "Coi AI là công cụ hỗ trợ sáng tạo đắc lực, đồng thời rèn luyện thẩm mỹ âm nhạc cá nhân và tôn trọng bản quyền của con người",
          "Để AI làm thay toàn bộ và bản thân không cần học tập gì nữa",
          "Lấy tác phẩm AI tạo ra đem đi đăng ký bản quyền cá nhân lừa dối công chúng"
        ],
        correctIndex: 1,
        explain: "Sử dụng AI như một công cụ hỗ trợ thông minh trong khi không ngừng trau dồi năng lực sáng tạo của chính mình là thái độ chuẩn mực."
      }
    ]
  }
];
