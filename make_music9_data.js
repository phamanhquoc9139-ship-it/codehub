// Data for Grade 9 Music (Âm nhạc Lớp 9 - Chương trình GDPT 2018)
// 8 Topics, 16 Comprehensive Lessons, 64 Interactive Quizzes

module.exports = [
  // ================= BÀI 1 =================
  {
    num: 1,
    topicNum: 1,
    title: "Bài 1: Hát bài 'Nối vòng tay lớn' và Bài đọc nhạc số 1",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Cảm nhận và thể hiện bài hát 'Nối vòng tay lớn' của nhạc sĩ Trịnh Công Sơn với tinh thần đoàn kết, hào sảng, gắn kết hàng triệu trái tim người Việt; Xướng âm chuẩn xác cao độ, tiết tấu Bài đọc nhạc số 1 giọng Đô trưởng nhịp 2/4.",
    intro: "Mỗi khi giai điệu 'Rừng núi dang tay nối lại biển xa, ta đi vòng tay lớn mãi để nối sơn hà...' cất lên, hàng vạn người lại cùng nắm chặt tay nhau hát vang trong niềm tự hào dân tộc. Bài ca bất hủ của người nhạc sĩ tài hoa Trịnh Công Sơn mang thông điệp gì?",
    sections: [
      {
        title: "1. Tác phẩm 'Nối vòng tay lớn' - Nhạc sĩ Trịnh Công Sơn",
        content: `
          <p class="mb-3">
            <strong>Hoàn cảnh & Ý nghĩa:</strong> Bài hát được nhạc sĩ Trịnh Công Sơn sáng tác năm 1968, thể hiện khát vọng hòa hợp, hàn gắn vết thương chiến tranh và ước mơ một ngày đất nước hoàn toàn thống nhất, Bắc - Nam sum họp một nhà.
          </p>
          <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Cấu trúc & Tính chất:</strong> Bài hát viết ở nhịp 2/4, tiết tấu vừa phải, dứt khoát, mang âm hưởng hành khúc quần chúng rộn rã.</p>
            <p><strong>Hình tượng nghệ thuật:</strong> Hình ảnh 'bàn tay nắm lấy bàn tay', 'vòng tay nối liền từ rừng núi đến biển xa' trở thành biểu tượng thiêng liêng của khối đại đoàn kết toàn dân tộc Việt Nam.</p>
          </div>
        `
      },
      {
        title: "2. Kỹ thuật thể hiện bài hát và Bài đọc nhạc số 1",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800 space-y-1">
              <strong class="text-teal-700 dark:text-teal-300 uppercase block">Kỹ thuật hát tập thể</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Hát với khí thế hào sảng, lấy hơi sâu bằng cơ hoành, phát âm nhả chữ rõ ràng, dứt khoát ở các phách mạnh, thể hiện tinh thần lạc quan, rộng mở.</p>
            </div>
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-1">
              <strong class="text-blue-700 dark:text-blue-300 uppercase block">Bài đọc nhạc số 1 (Giọng Đô trưởng)</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Ôn tập các bậc âm cơ bản C - D - E - F - G - A - B. Tiết tấu nốt đen kết hợp nốt móc đơn nhịp 2/4. Giữ vững phách nhịp gõ tay đều đặn.</p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Hát bài 'Nối vòng tay lớn' kết hợp vỗ tay theo phách nhịp 2/4.",
      "Đọc nhạc Bài đọc nhạc số 1 giọng Đô trưởng kết hợp đánh nhịp 2/4.",
      "Thực hiện hát nối tiếp theo nhóm: Nhóm 1 hát đoạn A, Nhóm 2 hát đoạn B, cả lớp cùng hòa giọng điệp khúc."
    ],
    summary: "'Nối vòng tay lớn' là khúc ca đoàn kết bất hủ của nhạc sĩ Trịnh Công Sơn mang âm hưởng hành khúc hào sảng, kết nối mọi trái tim con người Việt Nam. Bài đọc nhạc số 1 giúp củng cố cao độ chuẩn xác trong giọng Đô trưởng.",
    quizzes: [
      {
        q: "Bài hát nổi tiếng 'Nối vòng tay lớn' là sáng tác của nhạc sĩ nào?",
        options: ["Văn Cao", "Trịnh Công Sơn", "Phạm Tuyên", "Hoàng Việt"],
        correctIndex: 1,
        explain: "Bài hát 'Nối vòng tay lớn' là một trong những kiệt tác để đời của cố nhạc sĩ Trịnh Công Sơn."
      },
      {
        q: "Nội dung tư tưởng cốt lõi của bài hát 'Nối vòng tay lớn' là gì?",
        options: [
          "Khát vọng hòa bình, tình đoàn kết keo sơn của dân tộc và ước mơ non sông nối liền một dải",
          "Kể về một chuyến du lịch biển",
          "Nỗi buồn chia tay bạn bè mùa hạ",
          "Kể chuyện cổ tích ngày xưa"
        ],
        correctIndex: 0,
        explain: "Bài hát ca ngợi tinh thần đại đoàn kết toàn dân tộc, nối liền từ rừng núi đến biển xa."
      },
      {
        q: "Bài hát 'Nối vòng tay lớn' được viết ở số chỉ nhịp nào mang tính chất hành khúc rộn rã?",
        options: ["Nhịp 3/4", "Nhịp 2/4", "Nhịp 6/8", "Nhịp 5/8"],
        correctIndex: 1,
        explain: "Bài hát viết ở nhịp 2/4 dứt khoát, thôi thúc bước chân đồng lòng bước tới."
      },
      {
        q: "Bài đọc nhạc số 1 được viết ở giọng điệu cơ bản nào mà hóa biểu không có dấu thăng hay dấu giáng?",
        options: ["Giọng Pha trưởng", "Giọng Đô trưởng (C major)", "Giọng Son trưởng", "Giọng Rê thứ"],
        correctIndex: 1,
        explain: "Giọng Đô trưởng (C major) là giọng cơ bản nhất, không có bất kỳ dấu thăng hay dấu giáng nào ở hóa biểu."
      }
    ]
  },

  // ================= BÀI 2 =================
  {
    num: 2,
    topicNum: 1,
    title: "Bài 2: Sơ lược về Quãng âm nhạc và Nhạc sĩ Huy Du",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Nắm vững định nghĩa Quãng (Interval), hai yếu tố cấu thành quãng (Số lượng bậc âm và Số lượng cung); Phân biệt quãng giai điệu và quãng hòa âm; Tìm hiểu cuộc đời sự nghiệp của Nhạc sĩ Huy Du và thưởng thức tráng ca 'Đường chúng ta đi'.",
    intro: "Khoảng cách giữa hai nốt nhạc trong âm nhạc được ví như khoảng cách không gian trong hội họa. Khoảng cách đó được đo đếm như thế nào? Cùng tìm hiểu khái niệm Quãng và khám phá tráng ca hào hùng của nhạc sĩ quân đội Huy Du!",
    sections: [
      {
        title: "1. Khái niệm và Phân loại Quãng trong âm nhạc",
        content: `
          <p class="mb-3">
            <strong>Quãng (Interval):</strong> Là khoảng cách về cao độ giữa <strong>hai âm thanh</strong> vang lên lần lượt hoặc cùng một lúc.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-1">
              <strong class="text-emerald-700 dark:text-emerald-300 uppercase block">1. Quãng giai điệu (Melodic Interval)</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Hai nốt nhạc vang lên <strong>lần lượt kế tiếp nhau</strong> theo thời gian (đi lên hoặc đi xuống), tạo thành đường nét giai điệu bài hát.</p>
            </div>
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-1">
              <strong class="text-blue-700 dark:text-blue-300 uppercase block">2. Quãng hòa âm (Harmonic Interval)</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Hai nốt nhạc vang lên <strong>đồng thời cùng một lúc</strong>, được viết chồng thẳng đứng trên khuông nhạc, tạo thành hòa thanh.</p>
            </div>
          </div>
          <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>Tên gọi quãng đơn:</strong> Được xác định bằng số bậc âm bao hàm: Quãng 1 (đồng âm), Quãng 2 (2 bậc), Quãng 3, Quãng 4, Quãng 5, Quãng 6, Quãng 7, Quãng 8 (bát độ). Tính chất quãng gồm: Đúng (Perfect), Trưởng (Major), Thứ (Minor), Tăng (Augmented), Giảm (Diminished).
          </p>
        `
      },
      {
        title: "2. Nhạc sĩ Huy Du và ca khúc 'Đường chúng ta đi'",
        content: `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-2 my-3">
            <p><strong>Nhạc sĩ Huy Du (1926 - 2007):</strong> Đại tá, nguyên Tổng Thư ký Hội Nhạc sĩ Việt Nam, được trao tặng Giải thưởng Hồ Chí Minh về Văn học Nghệ thuật năm 2000. Ông là một trong những cây đại thụ của dòng nhạc cách mạng Việt Nam.</p>
            <p><strong>'Đường chúng ta đi' (Lời thơ: Xuân Sách):</strong> Bản tráng ca bất hủ sáng tác năm 1968 giữa khói lửa kháng chiến. Mở đầu bằng tiếng kèn đồng trầm hùng ngân vang: <em>'Việt Nam! Trên đường chúng ta đi, nghe gió thổi đồng xanh quê mẹ...'</em>, tràn đầy niềm kiêu hãnh và niềm tin tất thắng vào tương lai tươi sáng của dân tộc.</p>
          </div>
        `
      }
    ],
    practice: [
      "Xác định tên các quãng sau: Đô - Mi (Quãng 3), Đô - Sol (Quãng 5), Rê - Fa (Quãng 3), Đô - Đô kế tiếp (Quãng 8).",
      "Lắng nghe trích đoạn ca khúc 'Đường chúng ta đi' và cảm nhận sự phát triển giai điệu từ trữ tình sang hùng tráng.",
      "Kể tên thêm 2 bài hát nổi tiếng khác của nhạc sĩ Huy Du (ví dụ: 'Bế Văn Đàn sống mãi', 'Nổi lửa lên em', 'Anh vẫn hành quân')."
    ],
    summary: "Quãng là khoảng cách cao độ giữa 2 âm thanh (quãng giai điệu phát ra lần lượt, quãng hòa âm phát ra cùng lúc). Nhạc sĩ Huy Du là tác giả của bản tráng ca 'Đường chúng ta đi' hào sảng, ngợi ca khí phách bất khuất của dân tộc Việt Nam.",
    quizzes: [
      {
        q: "Khoảng cách về cao độ giữa hai âm thanh trong âm nhạc được gọi là gì?",
        options: ["Trường độ", "Quãng (Interval)", "Cường độ", "Nhịp phách"],
        correctIndex: 1,
        explain: "Quãng (Interval) là thuật ngữ chỉ khoảng cách cao độ giữa 2 nốt nhạc."
      },
      {
        q: "Quãng mà trong đó hai nốt nhạc vang lên đồng thời cùng một lúc được gọi là gì?",
        options: ["Quãng giai điệu", "Quãng hòa âm", "Quãng đảo", "Quãng ghép"],
        correctIndex: 1,
        explain: "Hai nốt vang lên cùng một lúc tạo thành Quãng hòa âm (Harmonic Interval)."
      },
      {
        q: "Khoảng cách giữa nốt Đô (C) và nốt Sol (G) bao gồm 5 bậc âm (Đô - Rê - Mi - Pha - Sol) là quãng mấy?",
        options: ["Quãng 3", "Quãng 4", "Quãng 5", "Quãng 6"],
        correctIndex: 2,
        explain: "Gồm 5 bậc âm nên đó là Quãng 5 (cụ thể là Quãng 5 đúng, rộng 3,5 cung)."
      },
      {
        q: "Nhạc sĩ Huy Du được Nhà nước trao tặng giải thưởng cao quý nào vì những cống hiến kiệt xuất cho nền âm nhạc nước nhà?",
        options: ["Giải thưởng Nobel Âm nhạc", "Giải thưởng Hồ Chí Minh về Văn học Nghệ thuật", "Giải thưởng Grammy", "Giải thưởng Sao Vàng"],
        correctIndex: 1,
        explain: "Nhạc sĩ Huy Du vinh dự được nhận Giải thưởng Hồ Chí Minh về Văn học Nghệ thuật năm 2000."
      }
    ]
  },

  // ================= BÀI 3 =================
  {
    num: 3,
    topicNum: 2,
    title: "Bài 3: Hát bài 'Bảy sắc cầu vồng' và Khát vọng tuổi trẻ",
    badgeColor: "bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300",
    dotColor: "bg-teal-500",
    time: "45 phút",
    target: "Hát bài 'Bảy sắc cầu vồng' (Nguyễn Văn Chung) với giai điệu trong sáng, bay bổng, tràn đầy ước mơ tươi đẹp của lứa tuổi học trò; Lắng nghe và cảm nhận bài hát kinh điển 'Thời thanh niên sôi nổi' (Nhạc Nga), khơi dậy lý tưởng sống cao đẹp.",
    intro: "Sau cơn mưa rào mùa hạ, chiếc cầu vồng bảy sắc lung linh bắc ngang bầu trời như dệt nên những ước mơ kỳ diệu của tuổi học trò. Cùng hòa mình vào giai điệu ngọt ngào của 'Bảy sắc cầu vồng' và giai điệu sôi nổi của tuổi trẻ!",
    sections: [
      {
        title: "1. Bài hát 'Bảy sắc cầu vồng' - Nhạc sĩ Nguyễn Văn Chung",
        content: `
          <p class="mb-3">
            <strong>Tác giả & Ý tưởng:</strong> Nhạc sĩ Nguyễn Văn Chung sáng tác bài hát với ca từ trong sáng, hình ảnh tươi vui, mượn 7 sắc màu rực rỡ của cầu vồng (Đỏ, Cam, Vàng, Lục, Lam, Chàm, Tím) để vẽ nên thế giới ước mơ và hy vọng của tuổi thơ.
          </p>
          <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800 text-xs text-gray-700 dark:text-gray-300 space-y-1 my-3">
            <p><strong>Tính chất âm nhạc:</strong> Nhịp 4/4 vừa phải, trữ tình, trong sáng. Giai điệu mượt mà, nhiều nốt luyến nhẹ nhàng đòi hỏi người hát phát âm tròn vành, rõ chữ.</p>
          </div>
        `
      },
      {
        title: "2. 'Thời thanh niên sôi nổi' - Bài ca bất hủ của tuổi trẻ",
        content: `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Xuất xứ:</strong> Bài hát Nga nổi tiếng của nhạc sĩ Aleksandra Pakhmutova, lời thơ Lev Oshanin, lời Việt của Phạm Tuyên. Tác phẩm đã truyền cảm hứng cống hiến cho hàng chục triệu thanh niên trên khắp thế giới.</p>
            <p><strong>Thông điệp:</strong> <em>'Lòng ta hằng mong muốn và ước mơ, bàn tay trần ngao du khắp bốn phương... Dù bao gian khó ta chẳng lùi bước!'</em> Thôi thúc thế hệ trẻ sống cống hiến, không ngại dấn thân vì lý tưởng cao đẹp.</p>
          </div>
        `
      }
    ],
    practice: [
      "Hát bài 'Bảy sắc cầu vồng' với sắc thái vui tươi, kết hợp vận động phụ họa nhẹ nhàng.",
      "Luyện hơi thở dài để thể hiện các câu hát ngân dài cuối đoạn điệp khúc.",
      "Chia sẻ cảm xúc sau khi nghe ca khúc 'Thời thanh niên sôi nổi'."
    ],
    summary: "'Bảy sắc cầu vồng' là khúc ca trong sáng, chắp cánh cho những ước mơ tuổi học trò. 'Thời thanh niên sôi nổi' thắp lên ngọn lửa nhiệt huyết, khát vọng cống hiến và lý tưởng sống kiên định của tuổi trẻ.",
    quizzes: [
      {
        q: "Bài hát thiếu nhi tươi vui 'Bảy sắc cầu vồng' do nhạc sĩ nào sáng tác?",
        options: ["Nguyễn Văn Chung", "Phạm Tuyên", "Trần Hoàn", "Văn Cao"],
        correctIndex: 0,
        explain: "Bài hát do nhạc sĩ trẻ Nguyễn Văn Chung sáng tác, rất được lứa tuổi học trò yêu thích."
      },
      {
        q: "Bài hát 'Thời thanh niên sôi nổi' là tác phẩm âm nhạc nổi tiếng của đất nước nào?",
        options: ["Nước Pháp", "Nước Nga", "Nước Ý", "Nước Đức"],
        correctIndex: 1,
        explain: "'Thời thanh niên sôi nổi' (Песня о тревожной молодости) là ca khúc thanh niên kinh điển của Liên Xô / Nga."
      },
      {
        q: "Khi thể hiện bài hát 'Bảy sắc cầu vồng', giọng hát của học sinh cần đạt sắc thái gì?",
        options: [
          "Trầm buồn, bi thương",
          "Trong sáng, vui tươi, bay bổng và đầy ắp ước mơ",
          "Gắt gỏng, giận dữ",
          "Thì thầm không rõ tiếng"
        ],
        correctIndex: 1,
        explain: "Bài hát mang thông điệp tươi sáng về ước mơ nên cần giọng hát vui tươi, hồn nhiên, bay bổng."
      },
      {
        q: "Ý nghĩa cao đẹp mà bài hát 'Thời thanh niên sôi nổi' gửi gắm đến thế hệ trẻ là gì?",
        options: [
          "Sống hưởng thụ, ích kỷ",
          "Nhiệt huyết cống hiến tuổi thanh xuân, sẵn sàng vượt qua thử thách vì Tổ quốc và cộng đồng",
          "Ngại khó khăn, sợ vất vả",
          "Không cần học tập và rèn luyện"
        ],
        correctIndex: 1,
        explain: "Bài hát ngợi ca lý tưởng cao đẹp, lòng quả cảm và khát vọng cống hiến tuổi thanh xuân của thanh niên."
      }
    ]
  },

  // ================= BÀI 4 =================
  {
    num: 4,
    topicNum: 2,
    title: "Bài 4: Nhạc cụ thực hành và Tìm hiểu Kèn Oboe & Kèn Cor",
    badgeColor: "bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300",
    dotColor: "bg-teal-500",
    time: "45 phút",
    target: "Luyện ngón và thổi bài nhạc cụ thực hành trên Sáo Recorder hoặc Kèn phím Melodica; Nhận biết hình dáng, âm sắc độc đáo và vai trò của kèn Oboe (bộ gỗ) và kèn Cor (kèn Pháp - bộ đồng) trong dàn nhạc giao hưởng phương Tây.",
    intro: "Trong dàn nhạc giao hưởng, mỗi loại kèn lại mang một 'tính cách' âm thanh riêng: tiếng Oboe da diết sâu lắng như lời tự tình miền quê, còn tiếng kèn Cor lại trầm hùng, vang vọng như tiếng tù và giữa rừng sâu. Hai loại nhạc cụ này có cấu tạo thế nào?",
    sections: [
      {
        title: "1. Kèn Oboe - Tiếng hát của đồng quê (Bộ gỗ)",
        content: `
          <p class="mb-3">
            <strong>Kèn Oboe:</strong> Là nhạc cụ hơi thuộc <strong>bộ gỗ (Woodwinds)</strong>, sử dụng dăm kép (Double reed).
          </p>
          <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-gray-700 dark:text-gray-300 space-y-1 my-3">
            <p><strong>Âm sắc:</strong> Trong trẻo, hơi nghẹt mũi đặc thù, da diết, mộc mạc và giàu chất thơ trữ tình. Thường được giao diễn tấu những giai điệu buồn thương hoặc cảnh sắc thiên nhiên đồng nội.</p>
            <p><strong>Vai trò đặc biệt:</strong> Kèn Oboe có cao độ cực kỳ ổn định, vì vậy trước mỗi buổi hòa nhạc giao hưởng, người chơi Oboe luôn là người thổi nốt La chuẩn (A = 440 Hz) để toàn bộ dàn nhạc so dây lấy chuẩn!</p>
          </div>
        `
      },
      {
        title: "2. Kèn Cor (French Horn - Kèn Pháp) (Bộ đồng)",
        content: `
          <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Cấu tạo:</strong> Nhạc cụ thuộc <strong>bộ đồng (Brass)</strong>, ống kèn bằng đồng cuộn tròn nhiều vòng dài gần 4 mét, loa kèn loe rộng hướng về phía sau.</p>
            <p><strong>Âm sắc:</strong> Vang xa, ấm áp, quý phái, vừa có thể gầm vang dũng mãnh như tiếng tù và săn bắn, vừa có thể êm ái làm cầu nối hòa quyện giữa bộ gỗ và bộ đồng.</p>
            <p><strong>Cách chơi độc đáo:</strong> Tay phải của nghệ sĩ được đặt khéo léo bên trong loa kèn để điều chỉnh âm sắc và cao độ tinh tế.</p>
          </div>
        `
      }
    ],
    practice: [
      "Thực hành bài luyện ngón Recorder: C - D - E - F - G - A nhịp 2/4.",
      "Lắng nghe trích đoạn độc tấu kèn Oboe và phân biệt âm sắc của Oboe với sáo Flute.",
      "Quan sát tư thế đặt bàn tay phải bên trong loa kèn của nghệ sĩ chơi kèn Cor."
    ],
    summary: "Kèn Oboe (bộ gỗ dăm kép) có âm sắc mộc mạc, tha thiết và giữ nhiệm vụ phát nốt chuẩn A440 cho dàn nhạc so dây. Kèn Cor (bộ đồng ống cuộn tròn) mang âm sắc ấm áp, trầm hùng, kết nối hoàn hảo giữa bộ gỗ và bộ đồng.",
    quizzes: [
      {
        q: "Nhạc cụ nào trong dàn nhạc giao hưởng giữ vai trò thổi nốt chuẩn (A = 440 Hz) để toàn dàn nhạc so dây trước buổi diễn?",
        options: ["Trống định âm (Timpani)", "Kèn Oboe", "Kèn Tuba", "Đàn Tam thập lục"],
        correctIndex: 1,
        explain: "Nhờ có cao độ chuẩn mực và ổn định, kèn Oboe luôn đảm nhận vinh dự thổi nốt La chuẩn cho cả dàn nhạc lấy chuẩn."
      },
      {
        q: "Kèn Oboe thuộc bộ nhạc cụ nào trong dàn nhạc giao hưởng phương Tây?",
        options: ["Bộ dây", "Bộ gỗ (Woodwinds)", "Bộ đồng (Brass)", "Bộ gõ (Percussion)"],
        correctIndex: 1,
        explain: "Kèn Oboe thuộc bộ kèn gỗ sử dụng dăm kép (Double reed)."
      },
      {
        q: "Kèn Cor (French Horn - Kèn Pháp) có đặc điểm cấu tạo ống kèn như thế nào?",
        options: [
          "Ống thẳng tắp dài 50 cm",
          "Ống kim loại bằng đồng cuộn tròn nhiều vòng với loa kèn loe rộng hướng ra sau",
          "Làm hoàn toàn bằng gỗ tre",
          "Không có loa kèn"
        ],
        correctIndex: 1,
        explain: "Kèn Cor có ống đồng cuộn tròn phức tạp dài gần 4 mét, loa kèn hướng về phía sau người biểu diễn."
      },
      {
        q: "Khi biểu diễn kèn Cor, nghệ sĩ đặt bàn tay phải ở vị trí nào để điều chỉnh âm sắc?",
        options: ["Bên trong vành loa kèn", "Cầm trên đỉnh đầu", "Đút vào túi quần", "Đặt lên phím bấm kèn Oboe"],
        correctIndex: 0,
        explain: "Nghệ sĩ kèn Cor luôn cho bàn tay phải vào trong loa kèn để tạo hiệu ứng âm thanh ấm và chỉnh cao độ."
      }
    ]
  },

  // ================= BÀI 5 =================
  {
    num: 5,
    topicNum: 3,
    title: "Bài 5: Hát bài 'Tháng năm học trò' và Các thể loại nhạc đàn",
    badgeColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    dotColor: "bg-blue-500",
    time: "45 phút",
    target: "Thể hiện ca khúc 'Tháng năm học trò' với cảm xúc bồi hồi, lưu luyến mái trường và thầy cô; Nhận biết một số thể loại nhạc đàn (Khí nhạc không lời) phổ biến: Ca khúc không lời (Song without words), Biến tấu (Variation), Rondo và Khúc cảm nghĩ (Impromptu).",
    intro: "Những năm tháng THCS sắp khép lại dưới mái trường thân yêu, để lại trong tim mỗi học trò bao kỷ niệm về bạn bè, thầy cô và hàng ghế đá sân trường. Giai điệu 'Tháng năm học trò' và những bản nhạc không lời mang đến cho chúng ta những suy ngẫm gì?",
    sections: [
      {
        title: "1. Bài hát 'Tháng năm học trò' - Nhạc và lời: Nguyễn Đức Cường",
        content: `
          <p class="mb-3">
            <strong>Cảm xúc bài hát:</strong> Giai điệu nhẹ nhàng, sâu lắng, mang âm hưởng Pop Ballad tuổi học trò. Lời ca gợi nhớ những kỷ niệm thân thương của tuổi học sinh: bảng đen, phấn trắng, tiếng ve kêu gọi hè và giây phút chia tay nghẹn ngào.
          </p>
          <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs text-gray-700 dark:text-gray-300 space-y-1 my-3">
            <p><strong>Yêu cầu thể hiện:</strong> Hát với giọng hát trữ tình, ngân dài tự nhiên, phát âm rõ ràng, nhịp 4/4 vừa phải, thể hiện tình cảm tri ân sâu sắc đến thầy cô và bạn bè.</p>
          </div>
        `
      },
      {
        title: "2. Một số thể loại nhạc đàn (Khí nhạc không lời) phổ biến",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs">
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-indigo-600 block mb-1 uppercase">1. Ca khúc không lời (Song without words)</strong>
              Tác phẩm viết cho nhạc cụ (như Piano) nhưng giai điệu du dương, uyển chuyển như một giọng hát của con người (tiêu biểu: Mendelssohn).
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-purple-600 block mb-1 uppercase">2. Thể loại Biến tấu (Variation)</strong>
              Mở đầu bằng một chủ đề giai điệu ban đầu, sau đó phát triển qua nhiều biến thể phong phú về tiết tấu, nhịp điệu và hòa âm.
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-teal-600 block mb-1 uppercase">3. Thể loại Rondo</strong>
              Có chủ đề chính lặp lại nhiều lần xen kẽ giữa các đoạn chen tương phản (Sơ đồ: A - B - A - C - A).
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-rose-600 block mb-1 uppercase">4. Khúc cảm nghĩ (Impromptu)</strong>
              Tác phẩm khí nhạc ngắn viết theo cảm hứng ngẫu hứng tự nhiên, giàu chất thơ lãng mạn (tiêu biểu: Schubert, Chopin).
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Hát diễn cảm ca khúc 'Tháng năm học trò' kết hợp vỗ tay theo phách nhịp 4/4.",
      "Nghe một bản 'Ca khúc không lời' của Mendelssohn và ghi lại cảm nhận về đường nét giai điệu.",
      "Vẽ sơ đồ cấu trúc của hình thức Rondo (A - B - A - C - A)."
    ],
    summary: "'Tháng năm học trò' là bản tình ca mái trường tha thiết. Nhạc đàn (khí nhạc không lời) gồm nhiều thể loại kinh điển: Ca khúc không lời (du dương như tiếng hát), Biến tấu (nhiều biến thể), Rondo (chủ đề A lặp lại xen kẽ) và Khúc cảm nghĩ Impromptu (ngẫu hứng lãng mạn).",
    quizzes: [
      {
        q: "Thể loại khí nhạc không lời nào mà trong đó chủ đề chính (A) luôn được lặp lại nhiều lần xen kẽ giữa các đoạn chen (B, C)?",
        options: ["Thể loại Rondo (A - B - A - C - A)", "Thể loại Hành khúc", "Thể loại Sonata 3 chương", "Hợp xướng 4 bè"],
        correctIndex: 0,
        explain: "Rondo (tiếng Pháp nghĩa là 'vòng tròn') có cấu trúc chủ đề chính A xuất hiện trở lại luân phiên."
      },
      {
        q: "Tập tác phẩm 'Những ca khúc không lời' (Lieder ohne Worte) viết cho đàn Piano nổi tiếng thế giới là của nhạc sĩ nào?",
        options: ["Felix Mendelssohn", "Ludwig van Beethoven", "Johann Sebastian Bach", "Antonio Vivaldi"],
        correctIndex: 0,
        explain: "Nhạc sĩ lãng mạn người Đức Felix Mendelssohn là tác giả của tập kiệt tác 'Ca khúc không lời' bất hủ."
      },
      {
        q: "Thể loại âm nhạc 'Khúc cảm nghĩ' (Impromptu) mang đặc trưng nghệ thuật nổi bật nào?",
        options: [
          "Bắt buộc viết cho dàn kèn đồng diễu binh",
          "Sáng tác theo cảm hứng ngẫu hứng tự do, giàu chất thơ và cảm xúc lãng mạn tinh tế",
          "Chỉ viết cho nhạc cụ gõ dân gian",
          "Có lời hát kể chuyện sử thi"
        ],
        correctIndex: 1,
        explain: "Impromptu là tác phẩm khí nhạc viết theo nguồn cảm hứng ngẫu hứng tức thì của người nghệ sĩ."
      },
      {
        q: "Ca khúc 'Tháng năm học trò' gợi nhớ đến thời khắc ý nghĩa nào của tuổi học sinh?",
        options: [
          "Ngày đầu tiên đi học mẫu giáo",
          "Kỷ niệm gắn bó bên bạn bè, thầy cô và giờ phút chia tay lưu luyến cuối cấp THCS",
          "Ngày hội thể thao toàn trường",
          "Một chuyến dã ngoại ngoài biển"
        ],
        correctIndex: 1,
        explain: "Bài hát thể hiện tình cảm bồi hồi xúc động trước khoảnh khắc tạm biệt mái trường THCS thân thương."
      }
    ]
  },

  // ================= BÀI 6 =================
  {
    num: 6,
    topicNum: 3,
    title: "Bài 6: Sơ lược về Dịch giọng (Dịch cung) và Bài đọc nhạc số 2",
    badgeColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    dotColor: "bg-blue-500",
    time: "45 phút",
    target: "Hiểu khái niệm, mục đích và nguyên tắc của việc Dịch giọng (Dịch cung - Transposition); Biết cách nâng cao hoặc hạ thấp một bài hát lên giọng mới phù hợp với tầm cử giọng của người hát; Đọc chuẩn xác Bài đọc nhạc số 2 giọng La thứ.",
    intro: "Mỗi người chúng ta sinh ra đều có một tầm cữ giọng (âm vực) tự nhiên khác nhau: có bạn hát nốt cao rất tốt, có bạn lại có giọng trầm ấm. Khi một bài hát quá cao hoặc quá thấp so với giọng của mình, ta phải làm thế nào? Khái niệm Dịch giọng sẽ giải quyết điều đó!",
    sections: [
      {
        title: "1. Khái niệm và Mục đích của Dịch giọng (Transposition)",
        content: `
          <p class="mb-3">
            <strong>Dịch giọng (Dịch cung):</strong> Là việc chuyển đổi toàn bộ cao độ của một bản nhạc (hoặc bài hát) từ <strong>giọng này sang một giọng khác</strong> cao hơn hoặc thấp hơn một khoảng quãng nhất định.
          </p>
          <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Mục đích:</strong> Phù hợp với âm vực của ca sĩ (giọng nam, giọng nữ, giọng thiếu nhi); hoặc thuận lợi cho thế bấm của nhạc cụ diễn tấu.</p>
            <p><strong>Quy tắc bất biến:</strong> Sau khi dịch giọng, <em>mối quan hệ giữa các bậc âm, giai điệu, tiết tấu và tính chất của bài hát hoàn toàn KHÔNG THAY ĐỔI</em>, chỉ có cao độ tuyệt đối là dịch chuyển lên cao hoặc xuống thấp.</p>
          </div>
        `
      },
      {
        title: "2. Cách thức dịch giọng cơ bản và Bài đọc nhạc số 2",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800 space-y-1">
              <strong class="text-indigo-700 dark:text-indigo-300 uppercase block">Cách dịch giọng</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Xác định giọng mới &rarr; Thay đổi hóa biểu tương ứng &rarr; Dịch chuyển tất cả các nốt nhạc lên (hoặc xuống) cùng một khoảng quãng nhất định.</p>
            </div>
            <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 space-y-1">
              <strong class="text-purple-700 dark:text-purple-300 uppercase block">Bài đọc nhạc số 2 (Giọng La thứ)</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Xướng âm giọng La thứ tự nhiên: A - B - C - D - E - F - G - A. Nhịp 3/4 nhịp nhàng, chú ý cao độ nốt La âm chủ trầm lắng.</p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Thực hành dịch một câu nhạc ngắn từ giọng Đô trưởng lên giọng Rê trưởng (dịch lên quãng 2 trưởng - 1 cung).",
      "Xướng âm Bài đọc nhạc số 2 giọng La thứ nhịp 3/4 kết hợp gõ phách.",
      "Giải thích vì sao nút bấm 'Transpose' trên đàn Keyboard điện tử lại rất tiện dụng cho người đệm đàn."
    ],
    summary: "Dịch giọng là chuyển bản nhạc sang giọng mới cao hơn hoặc thấp hơn để phù hợp với giọng người hát, trong khi cấu trúc giai điệu và tính chất bài hát được giữ nguyên vẹn.",
    quizzes: [
      {
        q: "Mục đích chính của việc 'Dịch giọng' (Dịch cung - Transposition) một bài hát là gì?",
        options: [
          "Làm cho bài hát dài ra gấp đôi",
          "Để nâng cao hoặc hạ thấp cao độ cho phù hợp với tầm giọng của người hát hoặc nhạc cụ",
          "Đổi tên tác giả của bài hát",
          "Xóa bỏ hoàn toàn lời bài hát"
        ],
        correctIndex: 1,
        explain: "Dịch giọng giúp điều chỉnh bài hát vừa vặn với cữ giọng tự nhiên của ca sĩ để hát thoải mái nhất."
      },
      {
        q: "Sau khi một bản nhạc được dịch giọng từ Đô trưởng lên Rê trưởng, yếu tố nào của bài hát vẫn được giữ nguyên không thay đổi?",
        options: [
          "Hóa biểu của bài hát",
          "Đường nét giai điệu, tiết tấu và mối quan hệ giữa các bậc âm",
          "Tên gọi nốt nhạc âm chủ",
          "Vị trí nốt nhạc trên khuông nhạc"
        ],
        correctIndex: 1,
        explain: "Quan hệ tương quan giữa các nốt (giai điệu, tiết tấu) hoàn toàn không đổi, chỉ có cao độ dịch chuyển."
      },
      {
        q: "Nếu một bài hát ở giọng Đô trưởng quá thấp, ta dịch lên giọng Son trưởng thì khoảng cách dịch chuyển là quãng mấy?",
        options: ["Quãng 2", "Quãng 3", "Quãng 5 đúng (Đô lên Sol)", "Quãng 8"],
        correctIndex: 2,
        explain: "Từ Đô lên Son là khoảng cách một quãng 5 đúng (C lên G)."
      },
      {
        q: "Bài đọc nhạc số 2 được viết ở giọng La thứ (A minor). Giọng La thứ là giọng thứ song song với giọng trưởng nào?",
        options: ["Son trưởng", "Pha trưởng", "Đô trưởng (C major)", "Rê trưởng"],
        correctIndex: 2,
        explain: "La thứ (Am) và Đô trưởng (C) là cặp giọng song song kinh điển cùng không có dấu hóa ở hóa biểu."
      }
    ]
  },

  // ================= BÀI 7 =================
  {
    num: 7,
    topicNum: 4,
    title: "Bài 7: Hát bài 'Lí ngựa ô' và Làn điệu Dân ca hai miền",
    badgeColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    dotColor: "bg-purple-500",
    time: "45 phút",
    target: "Hát bài 'Lí ngựa ô' (Dân ca Nam Bộ) với tính chất vui tươi, rộn rã, đậm chất mộc mạc phóng khoáng phương Nam; Nghe và so sánh sự khác biệt âm sắc, ngữ điệu giữa 'Lí ngựa ô' Nam Bộ và 'Lí ngựa ô' Trung Bộ (Huế).",
    intro: "Hình ảnh chú ngựa ô kiêu hãnh với 'khớp con ngựa ô, ngựa ô anh khớp, kiệu vàng anh tra...' đã trở thành một trong những giai điệu dân ca sống động và phổ biến nhất Việt Nam. Cùng phiêu lưu vào điệu hát rộn rã của 'Lí ngựa ô'!",
    sections: [
      {
        title: "1. Bài hát 'Lí ngựa ô' (Dân ca Nam Bộ)",
        content: `
          <p class="mb-3">
            <strong>Bối cảnh & Tinh thần:</strong> Làn điệu dân ca miêu tả hình ảnh chàng trai chuẩn bị kiệu vàng, lục lạc đón nàng về dinh trong không khí rộn rã tiếng cười vui của ngày hội lứa đôi.
          </p>
          <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 text-xs text-gray-700 dark:text-gray-300 space-y-1 my-3">
            <p><strong>Tính chất âm nhạc:</strong> Nhịp 2/4 nhanh, sôi nổi, giòn giã. Sử dụng nhiều tiếng đệm lót phương ngữ Nam Bộ đặc sắc: <em>'Khớp con ngựa ô... ngẫu... ơ... lí hà... kiệu vàng anh tra...'</em>.</p>
          </div>
        `
      },
      {
        title: "2. So sánh 'Lí ngựa ô' Nam Bộ và 'Lí ngựa ô' Trung Bộ (Huế)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-1">
              <strong class="text-emerald-700 dark:text-emerald-300 uppercase block">'Lí ngựa ô' Nam Bộ</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Tiết tấu nhanh, rộn ràng, tinh nghịch, phóng khoáng, dứt khoát, mang đậm dấu ấn tính cách bộc trực của người dân sông nước miệt vườn.</p>
            </div>
            <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 space-y-1">
              <strong class="text-amber-700 dark:text-amber-300 uppercase block">'Lí ngựa ô' Trung Bộ (Huế)</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Trầm tĩnh hơn, mang âm hưởng cung đình trang nhã, giai điệu luyến láy tinh tế, có chiều sâu lắng đọng và nét quý phái của đất cố đô.</p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Hát bài 'Lí ngựa ô' Nam Bộ với tốc độ nhanh, rõ lời các từ đệm lót phương ngữ.",
      "Gõ đệm tiết tấu mô phỏng tiếng vó ngựa 'Lộp cộp... lộp cộp...' bằng thanh phách hoặc song loan.",
      "Nghe bản thu 'Lí ngựa ô' Huế và chỉ ra 2 điểm khác biệt về tốc độ và cách luyến láy."
    ],
    summary: "'Lí ngựa ô' Nam Bộ rộn ràng, sôi nổi, phóng khoáng với hình ảnh chú ngựa ô kiệu vàng đưa nàng về dinh. So với làn điệu cùng tên ở Trung Bộ, bản Nam Bộ có nhịp điệu nhanh và tinh nghịch hơn.",
    quizzes: [
      {
        q: "Hình ảnh phương tiện và con vật xuất hiện xuyên suốt trong bài dân ca 'Lí ngựa ô' là gì?",
        options: ["Con trâu kéo cày", "Chú ngựa ô và kiệu vàng kiêu hãnh", "Con thuyền trôi sông", "Đoàn voi rừng"],
        correctIndex: 1,
        explain: "Bài hát khắc họa hình ảnh chú ngựa ô tra kiệu vàng rộn rã trong lễ đón rước."
      },
      {
        q: "Đặc trưng tiết tấu của bài 'Lí ngựa ô' Dân ca Nam Bộ là gì?",
        options: [
          "Chậm rãi, buồn thảm như đưa đám",
          "Nhanh, giòn giã, sôi nổi, hóm hỉnh và phóng khoáng",
          "Không có nhịp phách rõ ràng",
          "Ru ngủ êm dịu"
        ],
        correctIndex: 1,
        explain: "Bản Nam Bộ có tiết tấu rất nhanh, rộn rã như tiếng vó ngựa phi kiệu vàng."
      },
      {
        q: "So với 'Lí ngựa ô' Nam Bộ, bài 'Lí ngựa ô' vùng Trung Bộ (Huế) mang tính chất âm nhạc như thế nào?",
        options: [
          "Trang nhã, luyến láy tinh tế, lắng đọng và mang âm hưởng quý phái cung đình hơn",
          "Hò hét ầm ĩ hơn",
          "Chỉ được hát bằng tiếng nước ngoài",
          "Hoàn toàn giống nhau không khác chút nào"
        ],
        correctIndex: 0,
        explain: "Bản Trung Bộ mang đậm chất Huế: đằm thắm, cung đình, giai điệu uốn lượn tinh xảo hơn."
      },
      {
        q: "Nhạc cụ gõ truyền thống nào rất thích hợp để mô phỏng tiếng vó ngựa lách cách khi đệm bài 'Lí ngựa ô'?",
        options: ["Song loan (Song lang) hoặc Thanh phách", "Kèn đám ma", "Đàn bầu", "Trống sấm"],
        correctIndex: 0,
        explain: "Song loan hoặc thanh phách gõ liên tục tạo âm thanh đanh gọn mô phỏng tiếng vó ngựa rất sinh động."
      }
    ]
  },

  // ================= BÀI 8 =================
  {
    num: 8,
    topicNum: 4,
    title: "Bài 8: Nhã nhạc Cung đình Huế - Di sản Văn hóa Nhân loại",
    badgeColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    dotColor: "bg-purple-500",
    time: "45 phút",
    target: "Hiểu giá trị lịch sử và nghệ thuật của Nhã nhạc Cung đình Huế - Di sản văn hóa phi vật thể đầu tiên của Việt Nam được UNESCO vinh danh (2003); Nhận biết các dàn nhạc cung đình tiêu biểu (Đại nhạc, Tiểu nhạc); Thực hành nhạc cụ bài 'Lí ngựa ô' trên Recorder/Melodica.",
    intro: "Năm 2003, âm nhạc Việt Nam tự hào ghi dấu ấn rực rỡ trên bản đồ văn hóa thế giới khi Nhã nhạc Cung đình triều Nguyễn được UNESCO tôn vinh là 'Kiệt tác di sản truyền khẩu và phi vật thể của nhân loại'. Đỉnh cao của nghệ thuật âm nhạc bác học cung đình xưa có gì đặc sắc?",
    sections: [
      {
        title: "1. Nhã nhạc Cung đình Huế (UNESCO 2003)",
        content: `
          <p class="mb-3">
            <strong>Nhã nhạc (Âm nhạc tao nhã, chuẩn mực):</strong> Là thể loại âm nhạc cung đình chính thống được biểu diễn trong các dịp đại lễ quốc gia của triều đình phong kiến (Triều Nguyễn tại Huế: Lễ tế Giao, Tế Xã Tắc, Lễ Đăng quang, Vạn thọ, Tiếp sứ thần...).
          </p>
          <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Tính chất:</strong> Trang nghiêm, bác học, hoành tráng, biểu dương uy quyền tối thượng của vương triều và cầu chúc mưa thuận gió hòa, quốc thái dân an.</p>
            <p><strong>Hai biên chế dàn nhạc cốt lõi:</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Đại nhạc (Dàn nhạc lớn ngoài trời):</strong> Kèn bóp (kèn dăm), Trống chiến, Trống bồng, Não bạt, Mõ bích. Âm thanh vang rền hùng dũng.</li>
              <li><strong>Tiểu nhạc (Nhạc cung đình trong nhà):</strong> Đàn Tỳ bà, Đàn Nguyệt, Đàn Nhị, Đàn Tam, Sáo trúc, Tam âm la. Âm sắc thanh tao, du dương, êm ái.</li>
            </ul>
          </div>
        `
      },
      {
        title: "2. Thực hành nhạc cụ bài 'Lí ngựa ô'",
        content: `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-1 my-3">
            <p>Thực hành diễn tấu giai điệu bài 'Lí ngựa ô' trên Sáo Recorder hoặc Kèn phím Melodica theo nhịp 2/4. Chú ý các nốt luyến và giữ tốc độ ổn định, không để cuốn nhịp nhanh dần.</p>
          </div>
        `
      }
    ],
    practice: [
      "Xem video một buổi biểu diễn Nhã nhạc Cung đình Huế tại Duyệt Thị Đường (Hoàng thành Huế).",
      "Phân biệt nhạc cụ của dàn Đại nhạc (kèn, trống lớn) và dàn Tiểu nhạc (đàn tỳ bà, sáo, đàn nguyệt).",
      "Thổi bài 'Lí ngựa ô' trên sáo Recorder với hơi thổi dứt khoát, đúng phách."
    ],
    summary: "Nhã nhạc Cung đình Huế là Di sản văn hóa phi vật thể đầu tiên của Việt Nam được UNESCO vinh danh (2003). Nhã nhạc mang tính tao nhã, bác học với hai biên chế tiêu biểu là Đại nhạc (ngoài trời) và Tiểu nhạc (trong cung điện).",
    quizzes: [
      {
        q: "Nhã nhạc Cung đình Huế chính thức được UNESCO công nhận là Kiệt tác di sản phi vật thể của nhân loại vào năm nào?",
        options: ["Năm 1993", "Năm 2003", "Năm 2010", "Năm 2018"],
        correctIndex: 1,
        explain: "Vào tháng 11 năm 2003, Nhã nhạc Cung đình Huế vinh dự trở thành di sản phi vật thể đầu tiên của Việt Nam được UNESCO vinh danh."
      },
      {
        q: "Nhã nhạc dưới triều đại phong kiến nào ở Việt Nam đạt đến đỉnh cao hoàn thiện về quy mô dàn nhạc và bài bản lễ nhạc?",
        options: ["Triều Đinh", "Triều Lý", "Triều Nguyễn (tại kinh đô Huế)", "Triều Trần"],
        correctIndex: 2,
        explain: "Triều Nguyễn (thế kỷ XIX đến đầu thế kỷ XX) tại Huế là thời kỳ Nhã nhạc phát triển hoàn thiện và quy củ nhất."
      },
      {
        q: "Dàn 'Đại nhạc' trong Nhã nhạc Cung đình Huế chủ yếu gồm những nhạc cụ nào?",
        options: [
          "Kèn dăm (kèn bóp), Trống chiến, Não bạt, Trống bồng",
          "Chỉ có đàn Piano và Violin",
          "Đàn Ghita điện và Bộ trống Jazz",
          "Đàn Organ"
        ],
        correctIndex: 0,
        explain: "Đại nhạc biểu diễn ngoài trời sử dụng kèn bóp và hệ thống trống chiến, não bạt tạo âm thanh vang dội."
      },
      {
        q: "Dàn 'Tiểu nhạc' thường biểu diễn trong các yến tiệc cung đình mang âm sắc gì?",
        options: [
          "Gào thét đinh tai nhức óc",
          "Thanh tao, tao nhã, êm ái, du dương với tiếng đàn tỳ bà, đàn nguyệt, sáo trúc",
          "Ầm ĩ như sấm rền",
          "Không phát ra tiếng đàn"
        ],
        correctIndex: 1,
        explain: "Tiểu nhạc gồm các nhạc cụ tơ - trúc (dây kéo, dây gảy, sáo thổi) tạo âm thanh tinh tế, thanh nhã."
      }
    ]
  },

  // ================= BÀI 9 =================
  {
    num: 9,
    topicNum: 5,
    title: "Bài 9: Hát bài 'Ngôi nhà của chúng ta' và Tác phẩm 'Mùa xuân' (Vivaldi)",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Hát bài 'Ngôi nhà của chúng ta' (Hình Phước Liên) với thông điệp bảo vệ Trái đất xanh và môi trường sống hòa bình; Cảm thụ kiệt tác Concerto 'Mùa xuân' (La Primavera) trong bộ liên khúc 'Bốn mùa' (The Four Seasons) của nhà soạn nhạc Antonio Vivaldi.",
    intro: "Trái đất là mái nhà chung xanh tươi của muôn loài. Hãy cùng cất cao tiếng hát bảo vệ hành tinh xanh và đắm chìm vào giai điệu rộn ràng của bản hòa tấu 'Mùa xuân' kinh điển thời kỳ Baroque phương Tây!",
    sections: [
      {
        title: "1. Bài hát 'Ngôi nhà của chúng ta' - Nhạc sĩ Hình Phước Liên",
        content: `
          <p class="mb-3">
            <strong>Thông điệp nhân văn:</strong> Trái đất tròn bao la chính là ngôi nhà chung ấm áp của nhân loại. Bài hát kêu gọi mọi người cùng chung tay gìn giữ màu xanh của rừng cây, biển cả, bầu trời và xây dựng một thế giới hòa bình, không chiến tranh.
          </p>
          <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs text-gray-700 dark:text-gray-300 space-y-1 my-3">
            <p><strong>Tính chất âm nhạc:</strong> Nhịp 2/4 rộn rã, lạc quan. Tiết tấu sôi nổi, giai điệu tươi sáng, lôi cuốn.</p>
          </div>
        `
      },
      {
        title: "2. Kiệt tác Concerto 'Mùa xuân' - Antonio Vivaldi",
        content: `
          <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Antonio Vivaldi (1678 - 1741):</strong> Nhà soạn nhạc vĩ đại người Ý thời kỳ Baroque, được mệnh danh là bậc thầy của đàn Violin.</p>
            <p><strong>Concerto 'Mùa xuân' (La Primavera):</strong> Chương I mở đầu bằng giai điệu rực rỡ của dàn dây chào đón mùa xuân về. Tiếng đàn Violin độc tấu điêu luyện mô phỏng tiếng chim hót líu lo, tiếng suối róc rách tan băng và tiếng sấm chớp của cơn mưa rào đầu xuân.</p>
          </div>
        `
      }
    ],
    practice: [
      "Hát bài 'Ngôi nhà của chúng ta' với khí thế rộn ràng, vui tươi.",
      "Lắng nghe Chương I bản 'Mùa xuân' của Vivaldi và nhận diện đoạn nhạc mô phỏng tiếng chim hót bằng tiếng violin ríu rít.",
      "Vẽ một bức tranh hoặc viết đoạn văn ngắn về vẻ đẹp thiên nhiên được gợi mở qua âm nhạc Vivaldi."
    ],
    summary: "'Ngôi nhà của chúng ta' lan tỏa thông điệp bảo vệ hành tinh xanh. Bản Concerto 'Mùa xuân' của Vivaldi là kiệt tác khí nhạc Baroque miêu tả âm thanh chim muông và sức sống bừng nở của thiên nhiên mùa xuân bằng cây đàn Violin.",
    quizzes: [
      {
        q: "Bài hát 'Ngôi nhà của chúng ta' do nhạc sĩ nào sáng tác?",
        options: ["Hình Phước Liên", "Trịnh Công Sơn", "Phạm Tuyên", "Hoàng Long"],
        correctIndex: 0,
        explain: "Bài hát nổi tiếng về môi trường này do nhạc sĩ Hình Phước Liên sáng tác."
      },
      {
        q: "Bộ tác phẩm liên khúc 4 bản Concerto viết về các mùa trong năm 'Bốn mùa' (The Four Seasons) là của nhạc sĩ nào?",
        options: ["Antonio Vivaldi", "W.A. Mozart", "Ludwig van Beethoven", "Frédéric Chopin"],
        correctIndex: 0,
        explain: "Nhà soạn nhạc người Ý Antonio Vivaldi là tác giả của kiệt tác bất hủ 'Bốn mùa'."
      },
      {
        q: "Trong Chương I bản Concerto 'Mùa xuân' của Vivaldi, nhạc cụ nào độc tấu mô phỏng tiếng chim hót ríu rít?",
        options: ["Đàn Violin (Vĩ cầm)", "Kèn Tuba", "Trống định âm", "Đàn Guitar bass"],
        correctIndex: 0,
        explain: "Cây đàn Violin với các nốt hoa mỹ và kỹ thuật kéo vĩ điêu luyện mô phỏng sinh động tiếng chim hót mùa xuân."
      },
      {
        q: "Thông điệp chính mà bài hát 'Ngôi nhà của chúng ta' gửi gắm đến mọi người là gì?",
        options: [
          "Xây nhà thật to bằng bê tông",
          "Chung tay bảo vệ hành tinh Trái đất xanh tươi và gìn giữ hòa bình cho nhân loại",
          "Chặt phá rừng lấy gỗ",
          "Mua sắm thật nhiều đồ đạc"
        ],
        correctIndex: 1,
        explain: "Bài hát kêu gọi bảo vệ môi trường sống xanh và đoàn kết xây dựng thế giới hòa bình."
      }
    ]
  },

  // ================= BÀI 10 =================
  {
    num: 10,
    topicNum: 5,
    title: "Bài 10: Sơ lược về Hợp âm và Bài đọc nhạc số 3",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Nắm vững định nghĩa Hợp âm (Chord); Hiểu cấu tạo của Hợp âm ba (Triad) gồm Hợp âm 3 Trưởng và Hợp âm 3 Thứ; Đọc chính xác Bài đọc nhạc số 3 giọng Đô trưởng kết hợp gõ phách.",
    intro: "Nếu giai điệu là sợi chỉ đơn lẻ thì hợp âm chính là bức tranh thêu dệt nhiều màu sắc rực rỡ nâng đỡ cho giai điệu ấy. Hợp âm là gì và được cấu tạo theo nguyên tắc nào?",
    sections: [
      {
        title: "1. Khái niệm và Cấu tạo Hợp âm ba (Triad)",
        content: `
          <p class="mb-3">
            <strong>Hợp âm (Chord):</strong> Là sự kết hợp của <strong>từ 3 âm thanh trở lên</strong> vang lên cùng một lúc (hoặc lần lượt rải nốt) theo một quy luật hòa âm nhất định (thường là chồng lên nhau theo các quãng 3).
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-1.5">
              <strong class="text-emerald-700 dark:text-emerald-300 uppercase block">1. Hợp âm ba Trưởng (Major Triad)</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed"><strong>Công thức:</strong> Âm gốc + <em>Quãng 3 trưởng (2 cung)</em> + <em>Quãng 3 thứ (1,5 cung)</em>. Khoảng cách từ âm gốc đến âm 5 là <strong>quãng 5 đúng</strong>.</p>
              <p class="text-emerald-800 dark:text-emerald-300 font-semibold">Ví dụ: Hợp âm Đô trưởng (C): C - E - G (Nghe tươi sáng, rạng rỡ).</p>
            </div>
            <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 space-y-1.5">
              <strong class="text-purple-700 dark:text-purple-300 uppercase block">2. Hợp âm ba Thứ (Minor Triad)</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed"><strong>Công thức:</strong> Âm gốc + <em>Quãng 3 thứ (1,5 cung)</em> + <em>Quãng 3 trưởng (2 cung)</em>. Khoảng cách từ âm gốc đến âm 5 là <strong>quãng 5 đúng</strong>.</p>
              <p class="text-purple-800 dark:text-purple-300 font-semibold">Ví dụ: Hợp âm La thứ (Am): A - C - E (Nghe trầm dịu, sâu lắng).</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Bài đọc nhạc số 3 giọng Đô trưởng",
        content: `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-1 my-3">
            <p>Bài đọc nhạc số 3 viết ở giọng Đô trưởng, nhịp 3/4 nhịp nhàng. Trong bài xuất hiện các bước nhảy âm hình hợp âm Đô trưởng (C - E - G) và Sol 7 át. Giữ vững phách mạnh đầu tiên của nhịp 3/4 khi xướng âm.</p>
          </div>
        `
      }
    ],
    practice: [
      "Xác định cấu tạo nốt của các hợp âm sau: Hợp âm Pha trưởng (F: F - A - C), Hợp âm Rê thứ (Dm: D - F - A), Hợp âm Sol trưởng (G: G - B - D).",
      "Xướng âm Bài đọc nhạc số 3 kết hợp gõ đệm phách 1 (mạnh), phách 2-3 (nhẹ).",
      "Bấm và nghe thử hợp âm C trưởng và Am trên đàn phím điện tử hoặc guitar để so sánh màu sắc âm thanh."
    ],
    summary: "Hợp âm là sự kết hợp từ 3 âm thanh trở lên. Hợp âm ba gồm âm gốc, âm 3 và âm 5. Hợp âm 3 Trưởng (3T + 3t) vang lên tươi sáng; Hợp âm 3 Thứ (3t + 3T) vang lên trầm lắng, êm dịu.",
    quizzes: [
      {
        q: "Theo định nghĩa âm nhạc, hợp âm là sự kết hợp của ít nhất bao nhiêu âm thanh vang lên đồng thời hoặc lần lượt?",
        options: ["1 âm thanh", "2 âm thanh", "Từ 3 âm thanh trở lên", "Chỉ đúng 10 âm thanh"],
        correctIndex: 2,
        explain: "Hợp âm phải có từ 3 âm thanh trở lên được kết hợp theo quy luật hòa âm (thường chồng quãng 3)."
      },
      {
        q: "Hợp âm ba Trưởng (Major Triad) được cấu tạo từ các quãng nào tính từ âm gốc?",
        options: [
          "Quãng 3 trưởng + Quãng 3 thứ (tạo thành quãng 5 đúng)",
          "Quãng 3 thứ + Quãng 3 trưởng",
          "Quãng 3 thứ + Quãng 3 thứ",
          "Quãng 2 + Quãng 4"
        ],
        correctIndex: 0,
        explain: "Hợp âm 3 Trưởng gồm âm gốc + quãng 3 trưởng (2 cung) + quãng 3 thứ (1,5 cung)."
      },
      {
        q: "Hợp âm Đô trưởng (C major) gồm những nốt nhạc nào?",
        options: ["C - E - G (Đô - Mi - Sol)", "C - Eb - G", "A - C - E", "F - A - C"],
        correctIndex: 0,
        explain: "Hợp âm Đô trưởng gồm nốt gốc C, quãng 3 trưởng E và quãng 5 đúng G (C - E - G)."
      },
      {
        q: "Màu sắc cảm xúc thẩm mỹ thường thấy của hợp âm ba Thứ (Minor Triad) là gì?",
        options: [
          "Chói chang, giận dữ",
          "Dịu êm, sâu lắng, trầm buồn và tha thiết",
          "Hỗn loạn, gay gắt",
          "Không có cảm xúc gì"
        ],
        correctIndex: 1,
        explain: "Hợp âm thứ với quãng 3 thứ ở đáy mang màu sắc trầm lắng, mềm mại và giàu cảm xúc trữ tình."
      }
    ]
  },

  // ================= BÀI 11 =================
  {
    num: 11,
    topicNum: 6,
    title: "Bài 11: Hát bài 'Nụ cười' và Bài ca 'Chúng em cần hoà bình'",
    badgeColor: "bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300",
    dotColor: "bg-sky-500",
    time: "45 phút",
    target: "Hát bài 'Nụ cười' (Nhạc Nga) với tinh thần lạc quan, vui tươi, lan tỏa nụ cười và niềm tin yêu cuộc sống; Lắng nghe ca khúc thiếu nhi kinh điển 'Chúng em cần hoà bình' (Hoàng Long - Hoàng Lân), nâng cao ý thức gìn giữ hòa bình thế giới.",
    intro: "'Cho trời sáng lên cùng với bao nụ cười, nụ cười tươi như hoa nở trên môi...'. Nụ cười là món quà kỳ diệu nhất xóa tan mọi khoảng cách, gắn kết con người với con người. Cùng cất cao tiếng hát Nụ cười rạng rỡ và ước mơ hòa bình cho trẻ thơ khắp năm châu!",
    sections: [
      {
        title: "1. Bài hát 'Nụ cười' (Nhạc Nga - Vladimir Shainsky)",
        content: `
          <p class="mb-3">
            <strong>Xuất xứ:</strong> Bài hát trong bộ phim hoạt hình nổi tiếng 'Chú gấu trúc Chút Chít' của Nga do nhạc sĩ V. Shainsky sáng tác, lời Việt của nhạc sĩ Phạm Tuyên.
          </p>
          <div class="p-3.5 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800 text-xs text-gray-700 dark:text-gray-300 space-y-1 my-3">
            <p><strong>Tính chất âm nhạc:</strong> Nhịp 2/4 rộn ràng, giai điệu trong sáng, dễ thuộc, tràn đầy năng lượng tích cực. Đoạn điệp khúc mở rộng âm vực thể hiện niềm hân hoan rực rỡ.</p>
          </div>
        `
      },
      {
        title: "2. Bài hát 'Chúng em cần hoà bình' - Nhạc sĩ Hoàng Long & Hoàng Lân",
        content: `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Thông điệp:</strong> Sáng tác năm 1985 hưởng ứng Năm Quốc tế Hòa bình. Bài hát thay lời trẻ em toàn cầu cất lên tiếng nói phản đối chiến tranh vũ khí hạt nhân, đòi quyền được sống trong bình yên, được cắp sách đến trường và bay cao những ước mơ.</p>
            <p><strong>Giai điệu:</strong> Hào hùng, tha thiết, giàu tính chiến đấu và lòng nhân ái bao la.</p>
          </div>
        `
      }
    ],
    practice: [
      "Hát bài 'Nụ cười' với nét mặt tươi vui rạng rỡ, vỗ tay theo phách nhịp 2/4.",
      "Luyện tập hát đối đáp: Bạn nữ hát câu 1, bạn nam hát câu 2, cả lớp cùng hát vang điệp khúc.",
      "Bày tỏ suy nghĩ về quyền được sống trong hòa bình của trẻ em trên thế giới hiện nay."
    ],
    summary: "'Nụ cười' lan tỏa niềm vui, sự lạc quan yêu đời qua giai điệu trong sáng của âm nhạc Nga. 'Chúng em cần hoà bình' là tiếng nói tha thiết của tuổi thơ Việt Nam và thế giới đòi quyền sống trong hòa bình, không tiếng súng chiến tranh.",
    quizzes: [
      {
        q: "Bài hát thiếu nhi quốc tế quen thuộc 'Nụ cười' do nhạc sĩ người Nga nào sáng tác?",
        options: ["V. Shainsky", "P.I. Tchaikovsky", "D. Shostakovich", "M. Glinka"],
        correctIndex: 0,
        explain: "Bài hát 'Nụ cười' do nhạc sĩ thiếu nhi lừng danh người Nga Vladimir Shainsky sáng tác."
      },
      {
        q: "Nhạc sĩ Việt Nam nào đã đặt lời bài hát 'Nụ cười' sang tiếng Việt rất được thiếu nhi yêu thích?",
        options: ["Nhạc sĩ Phạm Tuyên", "Nhạc sĩ Văn Cao", "Nhạc sĩ Hoàng Vân", "Nhạc sĩ Phong Nhã"],
        correctIndex: 0,
        explain: "Nhạc sĩ Phạm Tuyên đã chuyển lời Việt rất mượt mà, quen thuộc cho nhiều thế hệ học sinh."
      },
      {
        q: "Cặp nhạc sĩ song sinh nổi tiếng nào của Việt Nam là tác giả của bài hát 'Chúng em cần hoà bình'?",
        options: [
          "Hoàng Long và Hoàng Lân",
          "Đỗ Nhuận và Đỗ Hồng Quân",
          "Trịnh Công Sơn và Trịnh Cung",
          "Văn Cao và Văn Ký"
        ],
        correctIndex: 0,
        explain: "Hai nhạc sĩ sinh đôi Hoàng Long và Hoàng Lân đã đồng sáng tác ca khúc bất hủ 'Chúng em cần hoà bình'."
      },
      {
        q: "Thông điệp mạnh mẽ nhất của bài hát 'Chúng em cần hoà bình' là gì?",
        options: [
          "Ước muốn có nhiều đồ chơi điện tử",
          "Phản đối chiến tranh, đòi quyền sống trong hòa bình, tự do và học tập cho trẻ em toàn cầu",
          "Rủ nhau đi cắm trại mùa xuân",
          "Học cách chế tạo máy bay"
        ],
        correctIndex: 1,
        explain: "Tác phẩm là bản tuyên ngôn của trẻ em đòi hòa bình, xua tan bóng đen chiến tranh trên trái đất."
      }
    ]
  },

  // ================= BÀI 12 =================
  {
    num: 12,
    topicNum: 6,
    title: "Bài 12: Nhạc cụ thực hành và Tìm hiểu Đàn Đá & Đàn Đáy",
    badgeColor: "bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300",
    dotColor: "bg-sky-500",
    time: "45 phút",
    target: "Luyện tập bài hòa tấu học đường trên Recorder và Kèn phím Melodica; Khám phá nguồn gốc cổ xưa của Đàn Đá (Lithophone - Bảo vật quốc gia); Tìm hiểu cấu tạo độc nhất vô nhị của cây Đàn Đáy trong nghệ thuật Ca trù Bắc Bộ.",
    intro: "Từ hàng ngàn năm trước, tổ tiên người Việt cổ đã biết gõ vào những thanh đá nguyên thủy để tạo nên âm thanh vang vọng núi rừng; và cách đây hàng trăm năm, cây đàn Đáy với cần đàn dài kỳ lạ đã ra đời dành riêng cho nghệ thuật Ca trù. Hai nhạc cụ độc đáo này có bí mật gì?",
    sections: [
      {
        title: "1. Đàn Đá (Lithophone) - Tiếng vọng ngàn năm",
        content: `
          <p class="mb-3">
            <strong>Đàn Đá:</strong> Là một trong những nhạc cụ cổ xưa nhất của nhân loại, có niên đại hàng ngàn năm trước Công nguyên, được phát hiện nhiều ở vùng Tây Nguyên và Nam Trung Bộ (bộ đàn đá Khánh Sơn, Bác Ái...).
          </p>
          <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-gray-700 dark:text-gray-300 space-y-1 my-3">
            <p><strong>Cấu tạo & Âm sắc:</strong> Gồm các thanh đá tự nhiên có kích thước dài ngắn, dày mỏng khác nhau được đẽo gọt thô sơ. Khi dùng dùi gõ vào, đàn đá phát ra âm thanh thanh thoát, ngân vang như tiếng sấm gầm, tiếng thác đổ, tiếng gió ngàn rộn rã.</p>
          </div>
        `
      },
      {
        title: "2. Đàn Đáy - Cung đàn độc nhất của nghệ thuật Ca trù",
        content: `
          <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Nhạc cụ thuần Việt:</strong> Đàn Đáy là nhạc cụ dây gảy hoàn toàn do người Việt Nam sáng tạo ra, không tìm thấy ở bất kỳ quốc gia nào khác trên thế giới.</p>
            <p><strong>Cấu tạo độc đáo:</strong> Cần đàn dài lê thê (khoảng 1,2 mét) với các phím đàn gắn rất cao; thùng đàn hình thang đáy hở (không có đáy hộp) - vì vậy gọi là 'Đàn Đáy'.</p>
            <p><strong>Âm sắc:</strong> Trầm đục, sâu lắng, ấm áp, kết hợp hoàn hảo cùng giọng hát đào nương và tiếng phách tre trong không gian Ca trù thanh tao.</p>
          </div>
        `
      }
    ],
    practice: [
      "Thực hành hòa tấu bài 'Nụ cười' trên Recorder và Kèn phím Melodica kết hợp phách gõ.",
      "Nghe trích đoạn diễn tấu Đàn Đá và cảm nhận sự ngân vang kỳ diệu của chất liệu đá tự nhiên.",
      "Quan sát hình ảnh cây Đàn Đáy và nhận diện đặc điểm 'thùng đàn hở đáy' độc nhất vô nhị."
    ],
    summary: "Đàn Đá là nhạc cụ gõ cổ xưa hàng ngàn năm tuổi của đồng bào Tây Nguyên. Đàn Đáy là cây đàn thuần Việt với cần dài và thùng đàn không đáy, là linh hồn độc tấu nhạc cụ trong nghệ thuật Ca trù.",
    quizzes: [
      {
        q: "Đàn Đá (Lithophone) được các nhà khảo cổ học đánh giá là loại nhạc cụ có niên đại thế nào?",
        options: [
          "Mới được chế tạo vào thế kỷ 20",
          "Là một trong những nhạc cụ gõ cổ xưa nhất của nhân loại, có từ hàng ngàn năm trước",
          "Được du nhập từ châu Âu thời cận đại",
          "Làm bằng nhựa tổng hợp hiện đại"
        ],
        correctIndex: 1,
        explain: "Đàn đá Việt Nam có niên đại hàng nghìn năm trước, là bảo vật quốc gia minh chứng cho nền văn hóa cổ xưa."
      },
      {
        q: "Điểm độc nhất vô nhị về cấu tạo của cây Đàn Đáy trong âm nhạc dân tộc Việt Nam là gì?",
        options: [
          "Cần đàn rất dài và thùng đàn hình thang hở đáy (không có nắp đáy phía sau)",
          "Đàn làm bằng vàng ròng",
          "Có 100 sợi dây kim loại",
          "Phải dùng dùi sắt gõ vào"
        ],
        correctIndex: 0,
        explain: "Đàn Đáy có cần dài khác thường và thùng đàn rỗng đáy phía sau, tạo nên âm trầm đục đặc trưng."
      },
      {
        q: "Cây Đàn Đáy gắn liền và giữ vai trò nhạc cụ đệm chính duy nhất cho thể loại âm nhạc truyền thống nào?",
        options: ["Hát Chầu văn", "Nghệ thuật Ca trù", "Hát Chèo Bắc Bộ", "Đờn ca tài tử"],
        correctIndex: 1,
        explain: "Trong canh hát Ca trù cổ điển, quan viên đánh trống chầu, đào nương gõ phách và kép đàn chơi Đàn Đáy."
      },
      {
        q: "Âm thanh của Đàn Đá khi được diễn tấu thường gợi cho người nghe cảm giác gì?",
        options: [
          "Tiếng còi xe inh ỏi",
          "Âm thanh ngân vang, thanh thoát, trầm hùng như tiếng thác nước và tiếng vọng đại ngàn Tây Nguyên",
          "Chói tai khó chịu",
          "Không có âm thanh"
        ],
        correctIndex: 1,
        explain: "Âm sắc đàn đá trong trẻo, ngân dài, mô phỏng vẻ đẹp hùng vĩ của núi rừng Tây Nguyên."
      }
    ]
  },

  // ================= BÀI 13 =================
  {
    num: 13,
    topicNum: 7,
    title: "Bài 13: Hát bài 'Donna Donna' và Nhạc sĩ Franz Schubert",
    badgeColor: "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300",
    dotColor: "bg-pink-500",
    time: "45 phút",
    target: "Cảm thụ và hát bài hát quốc tế nổi tiếng 'Donna Donna' (Dân ca Do Thái) với cảm xúc sâu lắng, thấu hiểu khát vọng tự do của muôn loài; Tìm hiểu cuộc đời, sự nghiệp của Nhạc sĩ Franz Peter Schubert và thưởng thức tuyệt phẩm 'Serenade' (Khúc ca chiều).",
    intro: "'Trên cỗ xe một chú bê buồn thiu, đôi mắt chú nhìn theo cánh chim trời tự do...'. Bài hát Donna Donna với giai điệu da diết và khúc Dạ khúc Serenade của Schubert mang đến cho chúng ta những rung cảm nghệ thuật vượt thời gian như thế nào?",
    sections: [
      {
        title: "1. Bài hát 'Donna Donna' - Bản tình ca khát vọng tự do",
        content: `
          <p class="mb-3">
            <strong>Nguồn gốc:</strong> Bài hát dân ca Do Thái do Sholom Secunda sáng tác năm 1940, lời Việt của nhạc sĩ Trần Tiến.
          </p>
          <div class="p-3.5 bg-pink-50 dark:bg-pink-950/40 rounded-xl border border-pink-200 dark:border-pink-800 text-xs text-gray-700 dark:text-gray-300 space-y-1 my-3">
            <p><strong>Hình ảnh ẩn dụ:</strong> Sự đối lập sâu sắc giữa chú bê bị trói trên cỗ xe đưa đến lò mổ và cánh én tự do chao liệng giữa bầu trời xanh lộng gió. Điệp khúc <em>'Donna donna donna...'</em> ngân nga như tiếng gió thì thầm về khát vọng được sống tự do, bình đẳng của muôn loài.</p>
            <p><strong>Tính chất âm nhạc:</strong> Giọng La thứ tha thiết, nhịp 2/4 vừa phải, trữ tình pha chút u sầu man mác.</p>
          </div>
        `
      },
      {
        title: "2. Nhạc sĩ Franz Schubert và khúc nhạc 'Serenade'",
        content: `
          <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Franz Peter Schubert (1797 - 1828):</strong> Thiên tài âm nhạc người Áo thời kỳ Lãng mạn, được mệnh danh là <em>'Ông vua ca khúc'</em> (sáng tác hơn 600 ca khúc nghệ thuật Lied).</p>
            <p><strong>'Serenade' (Khúc ca chiều / Dạ khúc):</strong> Kiệt tác bất hủ viết năm 1828. Giai điệu trên nền đệm phỏng tiếng đàn mandolin/guitar êm ả dưới đêm trăng tĩnh lặng, cất lên lời tỏ tình thiết tha, đượm chút buồn thương lãng mạn.</p>
          </div>
        `
      }
    ],
    practice: [
      "Hát bài 'Donna Donna' với sắc thái êm dịu, chú ý thể hiện độ tương phản giữa đoạn kể chuyện và đoạn điệp khúc.",
      "Lắng nghe khúc 'Serenade' của Schubert và cảm nhận tiếng đàn piano đệm bắt chước tiếng gảy đàn dây dưới ánh trăng.",
      "Kể tên một số ca khúc nghệ thuật khác của Schubert (ví dụ: 'Vua đầm lầy', 'Con cá hồi')."
    ],
    summary: "'Donna Donna' là khúc ca Do Thái cảm động mượn hình tượng chú bê để cất lên khát vọng tự do. Franz Schubert là thiên tài ca khúc Lãng mạn Áo với khúc 'Serenade' ngọt ngào, sâu lắng bất tử với thời gian.",
    quizzes: [
      {
        q: "Bài hát nổi tiếng 'Donna Donna' mượn hình ảnh con vật nào để ẩn dụ cho khát vọng được sống tự do?",
        options: ["Chú chim bồ câu", "Chú bê nhỏ bị trói trên cỗ xe và cánh én tự do", "Con hổ trong rừng", "Đàn kiến cần cù"],
        correctIndex: 1,
        explain: "Hình ảnh chú bê nhìn cánh én tự do bay lượn là ẩn dụ xúc động cho khát vọng sống tự do."
      },
      {
        q: "Nhà soạn nhạc người Áo Franz Schubert được lịch sử âm nhạc thế giới tôn vinh với danh hiệu cao quý nào?",
        options: [
          "Cha đẻ của nhạc Rock",
          "Ông vua ca khúc nghệ thuật (King of Song / Lied)",
          "Người phát minh ra kèn đồng",
          "Nhạc sĩ chuyên viết hành khúc"
        ],
        correctIndex: 1,
        explain: "Schubert sáng tác hơn 600 ca khúc nghệ thuật (Lied) tuyệt mỹ và được tôn vinh là 'Ông vua ca khúc'."
      },
      {
        q: "Khúc nhạc 'Serenade' của Franz Schubert mang ý nghĩa thể loại là gì?",
        options: [
          "Khúc nhạc chiến trận hào hùng",
          "Dạ khúc (Khúc ca chiều êm ả gửi tặng người yêu dưới đêm trăng)",
          "Nhạc đám cưới sôi động",
          "Khúc ca diễu hành quân đội"
        ],
        correctIndex: 1,
        explain: "Serenade (Dạ khúc) là khúc hát tình ca êm dịu dưới màn đêm tĩnh lặng."
      },
      {
        q: "Bài hát 'Donna Donna' được nhạc sĩ Việt Nam nào dịch lời Việt rất truyền cảm?",
        options: ["Nhạc sĩ Văn Cao", "Nhạc sĩ Trần Tiến", "Nhạc sĩ Hoàng Vân", "Nhạc sĩ Trịnh Công Sơn"],
        correctIndex: 1,
        explain: "Nhạc sĩ Trần Tiến đã phổ lời Việt rất thơ mộng và sâu sắc cho bài hát này."
      }
    ]
  },

  // ================= BÀI 14 =================
  {
    num: 14,
    topicNum: 7,
    title: "Bài 14: Các Hợp âm của giọng Đô trưởng & La thứ và Bài đọc nhạc số 4",
    badgeColor: "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300",
    dotColor: "bg-pink-500",
    time: "45 phút",
    target: "Nắm vững hệ thống hợp âm ba chính và phụ của giọng Đô trưởng (C, F, G/G7) và giọng La thứ (Am, Dm, E/E7); Hiểu công năng hòa thanh Chủ - Hạ át - Át; Đọc chuẩn xác Bài đọc nhạc số 4 giọng La thứ.",
    intro: "Đô trưởng và La thứ là cặp giọng nền tảng quen thuộc nhất trong âm nhạc. Khi đệm đàn cho một bài hát ở hai giọng này, chúng ta cần bấm những hợp âm nào để âm thanh nghe thật tự nhiên và trọn vẹn?",
    sections: [
      {
        title: "1. Bảng hợp âm giọng Đô trưởng (C major) và La thứ (A minor)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-2">
              <strong class="text-emerald-700 dark:text-emerald-300 uppercase block">Giọng Đô trưởng (C major)</strong>
              <ul class="space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong>Hợp âm Chủ (I):</strong> C (Đô trưởng: C - E - G)</li>
                <li><strong>Hợp âm Hạ át (IV):</strong> F (Pha trưởng: F - A - C)</li>
                <li><strong>Hợp âm Át (V):</strong> G / G7 (Sol trưởng / Sol 7: G - B - D - F)</li>
                <li><strong>Hợp âm bậc VI:</strong> Am (La thứ - Giọng song song)</li>
                <li><strong>Vòng kết cơ bản:</strong> C - F - G7 - C (I - IV - V7 - I)</li>
              </ul>
            </div>
            <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 space-y-2">
              <strong class="text-purple-700 dark:text-purple-300 uppercase block">Giọng La thứ (A minor)</strong>
              <ul class="space-y-1 text-gray-700 dark:text-gray-300">
                <li><strong>Hợp âm Chủ (I):</strong> Am (La thứ: A - C - E)</li>
                <li><strong>Hợp âm Hạ át (IV):</strong> Dm (Rê thứ: D - F - A)</li>
                <li><strong>Hợp âm Át (V):</strong> E / E7 (Mi trưởng / Mi 7: E - G# - B - D)</li>
                <li><strong>Hợp âm bậc III:</strong> C (Đô trưởng - Giọng song song)</li>
                <li><strong>Vòng kết cơ bản:</strong> Am - Dm - E7 - Am (I - IV - V7 - I)</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Nốt Sol thăng (G#) trong hợp âm E7 của giọng La thứ",
        content: `
          <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed my-2">
            Trong giọng La thứ hòa âm, nốt G được thăng lên thành <strong>G# (bậc VII hòa âm)</strong>, giúp hợp âm át bậc V trở thành <strong>Mi trưởng E (hoặc E7: E - G# - B - D)</strong>. Nốt G# là âm dẫn cách âm chủ A đúng nửa cung, tạo lực hút mạnh mẽ giải quyết trọn vẹn về Am.
          </p>
        `
      }
    ],
    practice: [
      "Bấm chuyển các hợp âm C &rarr; F &rarr; G7 &rarr; C trên đàn Guitar hoặc Keyboard.",
      "Bấm chuyển các hợp âm Am &rarr; Dm &rarr; E7 &rarr; Am theo nhịp 4/4.",
      "Xướng âm Bài đọc nhạc số 4 giọng La thứ, chú ý cao độ nốt Mi và nốt La."
    ],
    summary: "Bộ ba hợp âm chính của Đô trưởng là C (Chủ), F (Hạ át), G7 (Át). Bộ ba hợp âm chính của La thứ là Am (Chủ), Dm (Hạ át), E7 (Át). Hợp âm E7 chứa nốt G# tạo âm dẫn hút về Am.",
    quizzes: [
      {
        q: "Hợp âm hạ át bậc IV trong giọng Đô trưởng là hợp âm nào?",
        options: ["Pha trưởng (F: F - A - C)", "Sol trưởng (G)", "Rê thứ (Dm)", "La thứ (Am)"],
        correctIndex: 0,
        explain: "Bậc IV của Đô trưởng là nốt F, do đó hợp âm bậc IV là Pha trưởng (F - A - C)."
      },
      {
        q: "Hợp âm át bậc V trong giọng La thứ hòa âm (E7) gồm những nốt nhạc nào?",
        options: ["E - G# - B - D", "E - G - B - D", "A - C - E", "C - E - G"],
        correctIndex: 0,
        explain: "Nhờ có nốt G# ở bậc VII hòa âm, hợp âm át bậc V của La thứ là E7 (E - G# - B - D)."
      },
      {
        q: "Hợp âm chủ bậc I của giọng La thứ gồm các nốt nào?",
        options: ["A - C - E", "A - C# - E", "C - E - G", "D - F - A"],
        correctIndex: 0,
        explain: "Hợp âm La thứ (Am) gồm âm gốc A, quãng 3 thứ C và quãng 5 đúng E (A - C - E)."
      },
      {
        q: "Vòng hòa âm cơ bản và chuẩn mực nhất để kết thúc bài hát ở giọng Đô trưởng là vòng nào?",
        options: ["C - F - G7 - C", "C - Am - Dm - Em", "C - D - E - F", "C - B - A - G"],
        correctIndex: 0,
        explain: "Vòng I (C) - IV (F) - V7 (G7) - I (C) là vòng kết bài kinh điển nhất của giọng Đô trưởng."
      }
    ]
  },

  // ================= BÀI 15 =================
  {
    num: 15,
    topicNum: 8,
    title: "Bài 15: Hát bài 'Một thời để nhớ' và Tri ân người thầy",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Thể hiện bài hát 'Một thời để nhớ' với cảm xúc lắng đọng, trân trọng quãng thời gian 4 năm thanh xuân dưới mái trường THCS; Lắng nghe ca khúc cảm động 'Khi tóc thầy bạc trắng' (Trần Đức), bồi đắp truyền thống tôn sư trọng đạo thiêng liêng.",
    intro: "Bốn năm học THCS như một chuyến đò chở đầy ước mơ, tri thức và tình yêu thương của thầy cô. Khi mùa hoa phượng nở đỏ rực sân trường cũng là lúc chúng ta bước vào ngưỡng cửa mới. Khúc ca 'Một thời để nhớ' đọng lại trong tim chúng ta những gì?",
    sections: [
      {
        title: "1. Bài hát 'Một thời để nhớ' - Kỷ niệm tuổi thanh xuân",
        content: `
          <p class="mb-3">
            <strong>Nội dung:</strong> Bài hát là những dòng nhật ký tuổi học trò tha thiết: từng góc sân trường, từng hàng ghế đá, tiếng giảng bài ấm áp của thầy cô và những nụ cười trong sáng của bạn bè.
          </p>
          <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-gray-700 dark:text-gray-300 space-y-1 my-3">
            <p><strong>Tính chất âm nhạc:</strong> Nhịp 4/4 trữ tình, giai điệu mượt mà, sâu lắng. Đoạn điệp khúc vút cao thể hiện lời hứa sẽ mãi ghi nhớ công ơn thầy cô và tình bạn trong sáng tuổi học trò.</p>
          </div>
        `
      },
      {
        title: "2. Ca khúc tri ân 'Khi tóc thầy bạc trắng' - Nhạc sĩ Trần Đức",
        content: `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Hình ảnh xúc động:</strong> <em>'Thầy cô như ngọn nến thắp sáng ước mơ cho đàn em thơ... Khi tóc thầy bạc trắng, chúng em đã lớn khôn rồi...'</em></p>
            <p><strong>Ý nghĩa:</strong> Lời ca giản dị nhưng chạm đến trái tim người nghe, khắc sâu lòng biết ơn vô hạn của học trò đối với những người thầy, người cô đã dành cả cuộc đời thầm lặng chở những chuyến đò tri thức cập bến tương lai.</p>
          </div>
        `
      }
    ],
    practice: [
      "Hát bài 'Một thời để nhớ' với sắc thái xúc động, kết hợp vỗ tay theo nhịp.",
      "Viết vài dòng lưu bút ngắn gửi tặng thầy cô hoặc bạn bè nhân dịp sắp tốt nghiệp THCS.",
      "Lắng nghe ca khúc 'Khi tóc thầy bạc trắng' và chia sẻ một kỷ niệm đáng nhớ về người thầy/cô giáo của em."
    ],
    summary: "'Một thời để nhớ' khắc sâu kỷ niệm đẹp đẽ của 4 năm THCS. 'Khi tóc thầy bạc trắng' là khúc ca tri ân xúc động, bồi đắp truyền thống uống nước nhớ nguồn, tôn sư trọng đạo của học sinh Việt Nam.",
    quizzes: [
      {
        q: "Bài hát tri ân thầy cô nổi tiếng 'Khi tóc thầy bạc trắng' là sáng tác của nhạc sĩ nào?",
        options: ["Trần Đức", "Văn Cao", "Trịnh Công Sơn", "Phạm Tuyên"],
        correctIndex: 0,
        explain: "Bài hát xúc động về nghề giáo này do nhạc sĩ Trần Đức sáng tác."
      },
      {
        q: "Hình ảnh bụi phấn rơi trên bục giảng và mái tóc thầy bạc màu theo thời gian tượng trưng cho điều gì?",
        options: [
          "Sự vất vả, tận tụy và đức hy sinh thầm lặng của người thầy suốt đời vì học sinh thân yêu",
          "Thời tiết mùa đông lạnh giá",
          "Trường học chưa được quét dọn",
          "Tuổi già đến nhanh"
        ],
        correctIndex: 0,
        explain: "Mái tóc bạc phơ vì bụi phấn là biểu tượng thiêng liêng cho sự cống hiến trọn đời của thầy cô giáo."
      },
      {
        q: "Giai điệu của bài hát 'Một thời để nhớ' mang màu sắc cảm xúc chủ đạo nào?",
        options: [
          "Bồi hồi, lưu luyến, sâu lắng và chan chứa tình cảm tri ân tuổi học trò",
          "Hài hước, châm biếm",
          "Sợ hãi, hoang mang",
          "Mạnh mẽ như xung trận"
        ],
        correctIndex: 0,
        explain: "Bài hát thể hiện tình cảm bồi hồi tha thiết trước giờ phút chia tay thời học sinh THCS."
      },
      {
        q: "Hành động nào thể hiện đúng đắn nhất truyền thống 'Tôn sư trọng đạo' của người học trò?",
        options: [
          "Kính trọng, lễ phép, vâng lời và nỗ lực học tập rèn luyện thành người có ích cho xã hội",
          "Chỉ chào thầy cô khi có người lớn nhìn thấy",
          "Quên hết công ơn thầy cô sau khi ra trường",
          "Lười biếng trong giờ học"
        ],
        correctIndex: 0,
        explain: "Lễ phép, chăm ngoan và học tập tốt để không phụ công ơn dạy bảo là sự tri ân cao đẹp nhất gửi tới thầy cô."
      }
    ]
  },

  // ================= BÀI 16 =================
  {
    num: 16,
    topicNum: 8,
    title: "Bài 16: Ôn tập Nhạc cụ tổng kết và Dự án âm nhạc học đường",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Ôn tập tổng kết kỹ năng diễn tấu nhạc cụ giai điệu (Recorder/Melodica) và đệm hòa âm (Guitar/Keyboard); Lập kế hoạch và dàn dựng Dự án âm nhạc học đường: Chương trình biểu diễn nghệ thuật chào tạm biệt mái trường THCS; Tự tin biểu diễn trước tập thể lớp.",
    intro: "Hành trình âm nhạc cấp Trung học cơ sở khép lại bằng một ngày hội âm nhạc rực rỡ do chính các em dàn dựng. Hãy cùng cầm nhạc cụ lên, hòa quyện giai điệu và lời ca để tạo nên một chương trình nghệ thuật đáng nhớ nhất của tuổi học trò!",
    sections: [
      {
        title: "1. Ôn tập tổng kết kỹ năng diễn tấu nhạc cụ",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-1">
              <strong class="text-emerald-700 dark:text-emerald-300 uppercase block">1. Nhạc cụ giai điệu (Recorder / Melodica)</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Ôn tập các thế bấm từ C1 đến D2; kỹ thuật kiểm soát luồng hơi ấm áp, thổi liền tiếng (Legato) và ngắt tiếng (Staccato) sạch sẽ, chính xác nhịp phách.</p>
            </div>
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-1">
              <strong class="text-blue-700 dark:text-blue-300 uppercase block">2. Nhạc cụ hòa âm (Guitar / Keyboard)</strong>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Chuyển đổi thành thạo các vòng hợp âm Đô trưởng (C - F - G7 - C) và La thứ (Am - Dm - E7 - Am) theo các tiết điệu Ballad, March và Valse.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Xây dựng Dự án âm nhạc học đường: 'Mùa hè chia tay'",
        content: `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Các bước dàn dựng chương trình biểu diễn:</strong></p>
            <ol class="list-decimal pl-5 space-y-1">
              <li><strong>Lên kịch bản & Chọn bài hát:</strong> Chọn các ca khúc về thầy cô, mái trường ('Nối vòng tay lớn', 'Bảy sắc cầu vồng', 'Tháng năm học trò', 'Một thời để nhớ').</li>
              <li><strong>Phân công nhiệm vụ:</strong> Người dẫn chương trình (MC), nhóm hát đơn ca, nhóm tốp ca hòa bè, ban nhạc đệm (Guitar, Melodica, Trống gõ cajon).</li>
              <li><strong>Luyện tập tổng duyệt:</strong> Chỉnh sửa lỗi lệch nhịp, cân bằng âm lượng giữa giọng hát và nhạc cụ đệm, rèn luyện phong thái tự tin trước sân khấu.</li>
            </ol>
          </div>
        `
      }
    ],
    practice: [
      "Hòa tấu một liên khúc gồm 2 bài hát học trò quen thuộc cùng ban nhạc của lớp.",
      "Viết lời dẫn ngắn (1 đoạn 4-5 câu) giới thiệu một tiết mục biểu diễn văn nghệ chia tay lớp 9.",
      "Tham gia biểu diễn tự tin trong buổi tổng kết âm nhạc cuối năm học."
    ],
    summary: "Dự án âm nhạc học đường là cơ hội tổng hòa toàn bộ kiến thức thanh nhạc, nhạc lý và nhạc cụ đã học suốt 4 năm THCS, giúp học sinh phát triển năng lực hợp tác, sáng tạo và làm chủ sân khấu trước ngưỡng cửa THPT.",
    quizzes: [
      {
        q: "Bước đầu tiên và quan trọng nhất khi xây dựng một chương trình biểu diễn âm nhạc học đường là gì?",
        options: [
          "Bật nhạc thật to nhảy múa ngay lập tức",
          "Xác định chủ đề chương trình, lên kịch bản và lựa chọn danh sách bài hát phù hợp",
          "Mua trang phục đắt tiền",
          "Giải tán lớp học về nhà"
        ],
        correctIndex: 1,
        explain: "Khâu lên ý tưởng chủ đề và xây dựng kịch bản lựa chọn tiết mục là bước nền tảng quyết định thành công."
      },
      {
        q: "Trong một ban nhạc học đường, vai trò của người chơi nhạc cụ hòa âm (Guitar / Keyboard) là gì?",
        options: [
          "Chơi to nhất để át tiếng người hát",
          "Giữ nhịp phách ổn định và tạo nền tảng hòa thanh nâng đỡ tôn vinh giọng hát",
          "Tự ý đổi bài hát giữa chừng",
          "Chỉ ngồi nhìn người khác chơi"
        ],
        correctIndex: 1,
        explain: "Bè đệm hòa âm giữ vai trò làm nền tảng tiết tấu và màu sắc hòa thanh nâng bước cho giọng ca chính."
      },
      {
        q: "Để có một tiết mục hợp ca thành công trước toàn trường, yếu tố tập thể nào mang tính quyết định?",
        options: [
          "Mỗi người hát một nhịp độ khác nhau",
          "Sự lắng nghe lẫn nhau, đồng đều về nhịp thở, cao độ chuẩn xác và phong thái biểu diễn tự tin",
          "Ai hát to nhất thì người đó thắng",
          "Không cần tập luyện trước khi lên sân khấu"
        ],
        correctIndex: 1,
        explain: "Hợp ca đòi hỏi sự hòa quyện tập thể, cùng lắng nghe và hòa chung một nhịp thở."
      },
      {
        q: "Âm nhạc đã mang lại giá trị to lớn nào cho tâm hồn học sinh suốt 4 năm học Trung học cơ sở?",
        options: [
          "Làm cho học sinh mệt mỏi hơn",
          "Bồi dưỡng tình yêu cái đẹp, nâng cao trí tuệ cảm xúc, giải tỏa căng thẳng và kết nối tình bạn thiêng liêng",
          "Chỉ tốn thời gian vô bổ",
          "Không có tác dụng gì"
        ],
        correctIndex: 1,
        explain: "Âm nhạc giúp hoàn thiện nhân cách, nuôi dưỡng tâm hồn nhân ái và chắp cánh cho những ước mơ cao đẹp của tuổi học trò."
      }
    ]
  }
];
