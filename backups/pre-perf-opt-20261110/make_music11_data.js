// Data for Grade 11 Music (Âm nhạc Lớp 11 - Chương trình GDPT 2018)
// 8 Topics, 16 Comprehensive Lessons, 64 Interactive Quizzes

module.exports = [
  // ================= BÀI 1 =================
  {
    num: 1,
    topicNum: 1,
    title: "Bài 1: Giọng Pha trưởng (F major) và Thang âm một dấu giáng",
    badgeColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300",
    dotColor: "bg-indigo-500",
    time: "45 phút",
    target: "Nắm vững định nghĩa và công thức cấu tạo giọng Pha trưởng (F major); Nhận biết vị trí của dấu Si giáng (Bb) trên khuông nhạc (hóa biểu một dấu giáng); Đọc chuẩn xác cao độ và tiết tấu bài đọc nhạc số 1 giọng Pha trưởng.",
    intro: "Trong âm nhạc, giọng Pha trưởng mang âm sắc tươi sáng, trong trẻo, thường được các nhạc sĩ sử dụng để diễn tả vẻ đẹp thanh bình của thiên nhiên, tình yêu quê hương và niềm hân hoan đón chào mùa xuân. Giọng Pha trưởng được cấu tạo như thế nào?",
    sections: [
      {
        title: "1. Khái niệm và Cấu tạo thang âm giọng Pha trưởng",
        content: `
          <p class="mb-3">
            <strong>Giọng Pha trưởng (F major):</strong> Là giọng trưởng có âm chủ là nốt <strong>Pha (F)</strong>. Hóa biểu của giọng Pha trưởng có duy nhất <strong>một dấu giáng</strong> là <strong>Si giáng (Bb)</strong>, được đặt tại dòng kẻ thứ 3 trên khóa Sol.
          </p>
          <div class="p-4 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800 my-3">
            <h5 class="font-bold text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm uppercase mb-2 flex items-center gap-1.5">
              <i class="fa-solid fa-list-ol"></i> Thang âm Pha trưởng (F - G - A - Bb - C - D - E - F)
            </h5>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-gray-700 dark:text-gray-300">
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc I (Âm chủ):</strong> F (Pha)</div>
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc II:</strong> G (Sol)</div>
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc III:</strong> A (La)</div>
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc IV:</strong> Bb (Si giáng)</div>
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc V (Âm át):</strong> C (Đô)</div>
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc VI:</strong> D (Rê)</div>
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc VII (Âm dẫn):</strong> E (Mi)</div>
              <div class="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"><strong>Bậc VIII:</strong> F (Pha)</div>
            </div>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
            Quan sát công thức cung của giọng trưởng: <em>1C - 1C - 1/2C - 1C - 1C - 1C - 1/2C</em>. Vì giữa nốt A và B nguyên thủy là 1 cung, nên nốt B phải hạ xuống nửa cung thành <strong>Bb</strong> để khoảng cách A - Bb đúng bằng 1/2 cung (nửa cung).
          </p>
        `
      },
      {
        title: "2. Hóa biểu và Cách đọc nốt Si giáng (Bb)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-music"></i> Hóa biểu một dấu giáng
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Dấu giáng Si (b) nằm ở dòng kẻ thứ ba trên khóa Sol ngay sau khóa nhạc. Nó có hiệu lực làm hạ tất cả các nốt Si trong suốt bản nhạc xuống nửa cung (trừ khi có dấu hoàn - Natural sign).
              </p>
            </div>
            <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
              <h5 class="font-bold text-purple-700 dark:text-purple-300 text-xs sm:text-sm uppercase mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-headphones"></i> Cảm nhận thính giác
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Nốt Bb tạo ra cảm giác êm dịu, mềm mại hơn so với nốt B bình. Khi đọc nhạc, học sinh xướng âm cao độ nốt Bb thấp hơn nốt B nửa cung, hướng sức hút mạnh mẽ giải quyết về nốt A (bậc III).
              </p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Luyện đọc thang âm Pha trưởng đi lên và đi xuống kết hợp gõ phách nhịp 2/4.",
      "Thực hành xướng âm Bài đọc nhạc số 1 (giọng Pha trưởng) với tốc độ vừa phải (Moderato), chú ý cao độ nốt Si giáng.",
      "Tìm kiếm và liệt kê 3 ca khúc thiếu nhi hoặc quê hương quen thuộc được viết ở giọng Pha trưởng."
    ],
    summary: "Giọng Pha trưởng (F major) có âm chủ là nốt F (Pha), hóa biểu gồm 1 dấu giáng duy nhất là Si giáng (Bb) ở dòng kẻ thứ 3 khóa Sol. Công thức thang âm: F - G - A - Bb - C - D - E - F.",
    quizzes: [
      {
        q: "Hóa biểu của giọng Pha trưởng (F major) có bao nhiêu dấu hóa và là dấu gì?",
        options: ["1 dấu thăng (Fa thăng)", "1 dấu giáng (Si giáng)", "2 dấu giáng (Si giáng, Mi giáng)", "Không có dấu hóa nào"],
        correctIndex: 1,
        explain: "Giọng Pha trưởng có hóa biểu gồm đúng 1 dấu giáng duy nhất là Si giáng (Bb) nằm ở dòng kẻ thứ 3 khóa Sol."
      },
      {
        q: "Âm chủ (bậc I) của giọng Pha trưởng là nốt nhạc nào?",
        options: ["Nốt Đô (C)", "Nốt Sol (G)", "Nốt Pha (F)", "Nốt La (A)"],
        correctIndex: 2,
        explain: "Tên giọng trưởng lấy theo tên âm chủ. Vì vậy âm chủ bậc I của giọng Pha trưởng chính là nốt Pha (F)."
      },
      {
        q: "Trong thang âm giọng Pha trưởng, khoảng cách cao độ giữa bậc III (A) và bậc IV (Bb) bằng bao nhiêu?",
        options: ["1 cung", "1/2 cung (nửa cung)", "1 cung rưỡi", "2 cung"],
        correctIndex: 1,
        explain: "Theo công thức thang âm giọng trưởng, khoảng cách giữa bậc III và bậc IV luôn là nửa cung (A lên Bb là nửa cung)."
      },
      {
        q: "Nốt dẫn (bậc VII) có xu hướng hút mạnh về âm chủ Pha trong giọng Pha trưởng là nốt nào?",
        options: ["Nốt Mi (E)", "Nốt Rê (D)", "Nốt Si giáng (Bb)", "Nốt Sol (G)"],
        correctIndex: 0,
        explain: "Bậc VII của giọng Pha trưởng là nốt Mi (E), cách âm chủ F đúng nửa cung và đóng vai trò âm dẫn hút về âm chủ F."
      }
    ]
  },

  // ================= BÀI 2 =================
  {
    num: 2,
    topicNum: 1,
    title: "Bài 2: Kỹ thuật hát luyến âm (Slur / Portamento) và Bài hát giọng Pha trưởng",
    badgeColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300",
    dotColor: "bg-indigo-500",
    time: "45 phút",
    target: "Hiểu bản chất và ký hiệu của kỹ thuật hát luyến âm (Slur/Portamento); Thực hiện hát luyến mượt mà qua hai hoặc nhiều cao độ trong cùng một nguyên âm; Thể hiện ca khúc giọng Pha trưởng với sắc thái trữ tình, ngân vang.",
    intro: "Luyến âm là một trong những nét đặc trưng quyến rũ nhất của ca hát, đặc biệt trong âm nhạc truyền thống Việt Nam và các bản tình ca lãng mạn. Làm sao để luyến từ nốt thấp lên nốt cao êm ái mà không bị giật cục?",
    sections: [
      {
        title: "1. Khái niệm và Ký hiệu kỹ thuật hát luyến âm (Slur)",
        content: `
          <p class="mb-3">
            <strong>Hát luyến âm (Slur):</strong> Là kỹ thuật nối liền hai hay nhiều nốt nhạc có cao độ khác nhau trong <em>cùng một từ / một âm tiết</em>. Luồng hơi phát thanh được duy trì liên tục và mượt mà trong khi dây thanh đới và khẩu hình chuyển dịch linh hoạt.
          </p>
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 my-3">
            <h5 class="font-bold text-gray-800 dark:text-gray-200 text-xs sm:text-sm mb-1.5 flex items-center gap-1.5">
              <i class="fa-solid fa-bezier-curve text-indigo-500"></i> Phân biệt Dấu luyến (Slur) và Dấu nối (Tie)
            </h5>
            <ul class="text-xs text-gray-600 dark:text-gray-300 space-y-1.5">
              <li><strong>Dấu nối (Tie):</strong> Nối 2 hoặc nhiều nốt nhạc <em>cùng cao độ</em>, có tác dụng cộng gộp trường độ các nốt lại với nhau.</li>
              <li><strong>Dấu luyến (Slur):</strong> Nối các nốt nhạc <em>khác cao độ</em>, yêu cầu người hát luyến chuyển êm ái từ nốt này sang nốt khác mà không ngắt hơi hay đổi âm tiết.</li>
            </ul>
          </div>
        `
      },
      {
        title: "2. Kỹ thuật điều tiết hơi thở khi luyến âm",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h5 class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-arrow-trend-up"></i> Luyến đi lên (Ascending Slur)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Tăng dần áp lực hơi thở từ cơ hoành, mở rộng khoang họng mềm, không dùng cơ cổ bóp nghẹt thanh quản. Giữ vị trí âm thanh cao ở vòm hàm ếch cứng.
              </p>
            </div>
            <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
              <h5 class="font-bold text-rose-700 dark:text-rose-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-arrow-trend-down"></i> Luyến đi xuống (Descending Slur)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Vẫn giữ độ căng hơi thở ổn định, không để tụt cao độ hay tắt ngấm âm lượng đột ngột; âm sắc giữa các nốt phải đồng nhất, tinh tế.
              </p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Luyện thanh mẫu âm luyến quãng 3 và quãng 5 trên nguyên âm 'A - O' giọng Pha trưởng.",
      "Thực hành hát ca khúc 'Dâng Người tiếng hát mùa xuân' hoặc 'Mùa xuân nho nhỏ' với kỹ thuật luyến âm mượt mà.",
      "Tự thu âm giọng hát một câu luyến âm và tự đánh giá độ liền mạch của âm thanh."
    ],
    summary: "Dấu luyến (Slur) liên kết các nốt khác cao độ trong cùng một từ ngữ. Khi hát luyến âm, cần giữ hơi thở cơ hoành liên tục, mở khoang họng mềm mại để âm thanh chuyển dịch êm dịu, không giật phách.",
    quizzes: [
      {
        q: "Điểm khác biệt cơ bản nhất giữa Dấu luyến (Slur) và Dấu nối (Tie) trong âm nhạc là gì?",
        options: [
          "Dấu nối liên kết các nốt cùng cao độ; dấu luyến liên kết các nốt khác cao độ",
          "Dấu luyến dùng cho nhạc cụ; dấu nối dùng cho thanh nhạc",
          "Dấu nối chỉ xuất hiện ở nhịp 2/4; dấu luyến chỉ có ở nhịp 3/4",
          "Dấu luyến làm ngắt tiếng; dấu nối làm nảy tiếng"
        ],
        correctIndex: 0,
        explain: "Dấu nối (Tie) cộng gộp độ dài các nốt cùng cao độ, còn dấu luyến (Slur) nối các nốt khác cao độ hát liền trong một âm tiết."
      },
      {
        q: "Khi thực hiện kỹ thuật hát luyến âm đi lên từ nốt thấp đến nốt cao, ca sĩ cần chú ý điều gì?",
        options: [
          "Gồng cứng cơ cổ để kéo nốt nhạc lên cao",
          "Tăng nhẹ áp lực hơi cơ hoành và mở rộng khoang họng tự nhiên, không siết thanh quản",
          "Ngắt hơi ở giữa để lấy đà bật nốt cao",
          "Đổi sang một nguyên âm hoàn toàn khác"
        ],
        correctIndex: 1,
        explain: "Luyến đi lên đòi hỏi áp lực hơi thở từ cơ hoành ổn định và khoang họng mở tự nhiên, tránh dùng lực thắt nghẹt cổ họng."
      },
      {
        q: "Kỹ thuật lướt êm ái qua các cao độ trung gian giữa 2 nốt nhạc trong thanh nhạc cổ điển còn được gọi là gì?",
        options: ["Staccato", "Portamento", "Vibrato", "Falsetto"],
        correctIndex: 1,
        explain: "Portamento là thuật ngữ thanh nhạc chỉ kỹ thuật lướt êm dịu liên tục từ cao độ này sang cao độ khác."
      },
      {
        q: "Trong cùng một ô nhịp, nếu có 3 nốt nhạc khác cao độ được bọc dưới một dấu vòng cung, người hát phải thể hiện thế nào?",
        options: [
          "Hát ngắt từng nốt một cách dứt khoát",
          "Chỉ hát nốt đầu tiên và im lặng ở 2 nốt sau",
          "Hát cả 3 nốt nhạc liền mạch trong cùng một hơi thở và một âm tiết từ ngữ",
          "Vỗ tay 3 tiếng theo tiết tấu"
        ],
        correctIndex: 2,
        explain: "Dấu luyến trên 3 nốt khác cao độ yêu cầu người hát diễn tấu liền mạch cả 3 nốt trong cùng một âm tiết duy nhất."
      }
    ]
  },

  // ================= BÀI 3 =================
  {
    num: 3,
    topicNum: 2,
    title: "Bài 3: Sơ lược về Âm nhạc thính phòng phương Tây (Chamber Music)",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Hiểu khái niệm, bối cảnh lịch sử và đặc điểm thẩm mỹ của Âm nhạc thính phòng; Nhận biết các hình thức biên chế thính phòng phổ biến (Độc tấu, Tam tấu, Tứ tấu, Ngũ tấu); Cảm thụ vẻ đẹp tinh tế, đối thoại bình đẳng giữa các bè nhạc cụ.",
    intro: "Âm nhạc thính phòng (Chamber Music) khởi nguồn từ những buổi hòa nhạc ấm cúng trong phòng khách của giới quý tộc châu Âu. Khác với dàn nhạc giao hưởng hàng trăm người hùng tráng, vẻ đẹp của nhạc thính phòng nằm ở đâu?",
    sections: [
      {
        title: "1. Khái niệm và Bối cảnh lịch sử của Âm nhạc thính phòng",
        content: `
          <p class="mb-3">
            <strong>Âm nhạc thính phòng (tiếng Anh: Chamber Music, tiếng Pháp: Musique de chambre):</strong> Là thể loại khí nhạc hoặc thanh nhạc được sáng tác cho một <strong>nhóm nhỏ nhạc cụ</strong> biểu diễn trong không gian vừa và nhỏ (phòng hòa nhạc, thính phòng).
          </p>
          <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 my-3 text-xs text-gray-700 dark:text-gray-300 space-y-2">
            <p><strong>Nguồn gốc:</strong> Xuất hiện từ thời kỳ Baroque và phát triển rực rỡ đến đỉnh cao vào thời kỳ Cổ điển (thế kỷ XVIII) và Lãng mạn (thế kỷ XIX) với các tác phẩm bất hủ của Haydn, Mozart, Beethoven, Schubert, Brahms.</p>
            <p><strong>Đặc trưng độc đáo:</strong> Mỗi bè nhạc cụ chỉ do <em>một nghệ sĩ đảm nhận</em> (không có sự nhân đôi bè như trong dàn nhạc giao hưởng). Không cần người chỉ huy (nhạc trưởng); các nghệ sĩ giao tiếp, giữ nhịp và hòa bè hoàn toàn bằng ánh mắt, hơi thở và ngôn ngữ cơ thể.</p>
          </div>
        `
      },
      {
        title: "2. Các hình thức biên chế thính phòng tiêu biểu",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-3">
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <div class="font-bold text-amber-600 dark:text-amber-400 mb-1 uppercase">Độc tấu (Solo / Sonata)</div>
              <p class="text-gray-600 dark:text-gray-300">1 nhạc cụ độc tấu (như Piano) hoặc 1 nhạc cụ (Violin, Cello, Flute) có Piano đệm hòa âm.</p>
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <div class="font-bold text-amber-600 dark:text-amber-400 mb-1 uppercase">Tam tấu (Trio)</div>
              <p class="text-gray-600 dark:text-gray-300">Biên chế 3 nhạc cụ. Phổ biến nhất là <em>Piano Trio</em> (gồm Piano, Violin và Cello) hoặc Tam tấu đàn dây.</p>
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <div class="font-bold text-amber-600 dark:text-amber-400 mb-1 uppercase">Tứ tấu (Quartet)</div>
              <p class="text-gray-600 dark:text-gray-300">Hình thức hoàn mỹ nhất: <em>Tứ tấu đàn dây (String Quartet)</em> gồm 2 Violin, 1 Viola, 1 Cello.</p>
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <div class="font-bold text-amber-600 dark:text-amber-400 mb-1 uppercase">Ngũ tấu (Quintet)</div>
              <p class="text-gray-600 dark:text-gray-300">5 nhạc cụ: Piano Quintet (Piano + Tứ tấu dây) hoặc Ngũ tấu kèn gỗ (Flute, Oboe, Clarinet, Bassoon, Horn).</p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Nghe trích đoạn một bản Piano Trio (Tam tấu Piano) và nhận diện âm sắc của từng nhạc cụ khi đối thoại.",
      "So sánh sự khác nhau về quy mô không gian và số lượng nhạc công giữa Nhạc thính phòng và Nhạc giao hưởng.",
      "Thảo luận nhóm: Vì sao các nghệ sĩ nhạc thính phòng không cần nhạc trưởng chỉ huy mà vẫn diễn tấu ăn khớp tuyệt đối?"
    ],
    summary: "Âm nhạc thính phòng (Chamber Music) viết cho nhóm nhỏ nhạc cụ diễn tấu trong không gian ấm cúng. Mỗi bè do một nhạc công đảm nhận, đòi hỏi sự thấu hiểu và đối thoại âm thanh tinh tế giữa các nghệ sĩ mà không cần nhạc trưởng.",
    quizzes: [
      {
        q: "Âm nhạc thính phòng (Chamber Music) ban đầu được biểu diễn chủ yếu ở không gian nào?",
        options: [
          "Sân vận động ngoài trời quy mô lớn",
          "Phòng hòa nhạc vừa và nhỏ trong tư gia hoặc cung điện quý tộc",
          "Quảng trường trung tâm thành phố",
          "Sân khấu nhạc kịch có hàng ngàn khán giả"
        ],
        correctIndex: 1,
        explain: "Từ 'Chamber' bắt nguồn từ căn phòng (phòng khách quý tộc), nơi các nhóm nhạc cụ nhỏ diễn tấu trong không gian thân mật, ấm cúng."
      },
      {
        q: "Đặc điểm nổi bật về việc phân chia bè trong một nhóm nhạc thính phòng là gì?",
        options: [
          "Mỗi bè nhạc cụ do một nghệ sĩ duy nhất đảm nhiệm",
          "Có ít nhất 10 nghệ sĩ chơi cùng một bè giai điệu",
          "Luôn bắt buộc phải có một nhạc trưởng đứng chỉ huy trước mặt",
          "Tất cả các nhạc cụ đều chơi cùng một cao độ đồng âm"
        ],
        correctIndex: 0,
        explain: "Khác với dàn nhạc giao hưởng có bè hàng chục cây Violin, trong nhạc thính phòng mỗi bè chỉ do một nhạc công diễn tấu độc lập."
      },
      {
        q: "Biên chế 'Piano Trio' (Tam tấu Piano) cổ điển tiêu chuẩn gồm những nhạc cụ nào?",
        options: [
          "3 cây đàn Piano",
          "Đàn Piano, Đàn Violin và Đàn Cello",
          "Đàn Piano, Kèn Trumpet và Trống",
          "Đàn Guitar, Đàn Mandolin và Đàn Piano"
        ],
        correctIndex: 1,
        explain: "Biên chế Tam tấu Piano kinh điển chuẩn mực gồm đàn Piano, Violin (vĩ cầm) và Cello (trung cầm)."
      },
      {
        q: "Yếu tố nào giúp các nghệ sĩ trong ban nhạc thính phòng đồng điệu nhịp phách mà không cần nhạc trưởng?",
        options: [
          "Sử dụng máy đập nhịp điện tử phát loa",
          "Giao tiếp qua ánh mắt, hơi thở lấy đà và ngôn ngữ cử chỉ cơ thể của bè trưởng",
          "Mỗi người nhìn đồng hồ bấm giờ riêng",
          "Người đánh trống gõ dùi liên tục để giữ nhịp"
        ],
        correctIndex: 1,
        explain: "Nghệ sĩ thính phòng liên kết tinh tế qua ánh mắt, cử chỉ đầu cần đàn và hơi thở đồng điệu của người lĩnh xướng (thường là Violin 1)."
      }
    ]
  },

  // ================= BÀI 4 =================
  {
    num: 4,
    topicNum: 2,
    title: "Bài 4: Tứ tấu đàn dây và Kiệt tác của W.A. Mozart & Joseph Haydn",
    badgeColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    dotColor: "bg-amber-500",
    time: "45 phút",
    target: "Nắm vững cấu trúc biên chế của Tứ tấu đàn dây (String Quartet); Hiểu được công lao của Joseph Haydn - 'Người cha của Tứ tấu dây'; Thưởng thức và phân tích Chương I bản Serenade 'Eine kleine Nachtmusik' (K.525) của W.A. Mozart.",
    intro: "Tứ tấu đàn dây được nhà đại văn hào Goethe ví von như 'cuộc trò chuyện thông thái giữa bốn người lịch thiệp'. Bốn cây đàn họ vĩ cầm đã kết hợp như thế nào để tạo nên một kiệt tác hòa âm mẫu mực?",
    sections: [
      {
        title: "1. Cấu trúc biên chế chuẩn mực của Tứ tấu đàn dây (String Quartet)",
        content: `
          <p class="mb-3">
            Tứ tấu đàn dây là hình thức khí nhạc thính phòng quan trọng và cao quý nhất của nền âm nhạc cổ điển phương Tây, bao gồm 4 nhạc cụ thuộc họ dây kéo vĩ:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-3">
            <div class="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 text-xs">
              <strong class="text-rose-700 dark:text-rose-300 block mb-1">Violin 1 (Bè 1)</strong>
              Âm vực cao nhất, thường đảm nhận giai điệu chính, dẫn dắt và điều tiết tốc độ toàn ban nhạc.
            </div>
            <div class="p-3 bg-pink-50 dark:bg-pink-950/40 rounded-xl border border-pink-200 dark:border-pink-800 text-xs">
              <strong class="text-pink-700 dark:text-pink-300 block mb-1">Violin 2 (Bè 2)</strong>
              Âm vực cao, đi bè hòa âm quãng 3, quãng 6 hoặc đối đáp giai điệu phụ họa với Violin 1.
            </div>
            <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 text-xs">
              <strong class="text-purple-700 dark:text-purple-300 block mb-1">Viola (Bè Trung)</strong>
              Kích thước lớn hơn Violin, âm sắc trầm ấm, đầy đặn, nối kết giữa âm cao và âm trầm.
            </div>
            <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
              <strong class="text-blue-700 dark:text-blue-300 block mb-1">Cello (Bè Trầm)</strong>
              Âm vực trầm sâu thẳm, giữ vai trò nền móng hòa thanh (Bass line) và thỉnh thoảng có những câu solo ngọt ngào.
            </div>
          </div>
        `
      },
      {
        title: "2. Đóng góp của Haydn và Kiệt tác của Mozart",
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-gray-900 dark:text-white mb-1">Joseph Haydn (1732 - 1809) - "Cha đẻ của Tứ tấu dây"</h5>
              <p class="text-xs text-gray-600 dark:text-gray-300">
                Haydn đã sáng tác 68 bản tứ tấu đàn dây, đặt nền móng hoàn chỉnh cho cấu trúc liên khúc 4 chương (Nhanh - Chậm - Menuet/Scherzo - Nhanh) và biến tứ tấu từ thể loại đệm đơn giản thành nghệ thuật đối thoại phức điệu đỉnh cao.
              </p>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-gray-900 dark:text-white mb-1">W.A. Mozart và kiệt tác "Eine kleine Nachtmusik" (K.525)</h5>
              <p class="text-xs text-gray-600 dark:text-gray-300">
                Bản Serenade số 13 cho dàn dây (Một khúc nhạc đêm nhỏ) viết năm 1787. Chương I (Allegro) mở đầu bằng chủ đề âm hình rải hợp âm Sol trưởng vang dội, dứt khoát, sau đó chuyển sang giai điệu ngọt ngào, tinh tế, mẫu mực cho hình thức Sonata Cổ điển.
              </p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Lắng nghe Chương I bản 'Eine kleine Nachtmusik' của Mozart và gõ phách đếm nhịp nhịp nhàng.",
      "Vẽ sơ đồ vị trí ngồi của 4 nghệ sĩ trong một buổi diễn Tứ tấu đàn dây (từ trái qua phải).",
      "Viết đoạn cảm nhận ngắn (5-7 dòng) về sự hòa quyện âm sắc giữa Violin, Viola và Cello."
    ],
    summary: "Tứ tấu đàn dây (String Quartet) gồm 2 Violin, 1 Viola và 1 Cello. Joseph Haydn là người đặt nền móng mẫu mực cho thể loại này, và W.A. Mozart đã đưa nó lên tầm nghệ thuật thính phòng tuyệt mỹ với những giai điệu trong sáng, thanh thoát.",
    quizzes: [
      {
        q: "Biên chế của một ban Tứ tấu đàn dây tiêu chuẩn gồm những nhạc cụ nào?",
        options: [
          "1 Violin, 1 Viola, 1 Cello, 1 Contrabass",
          "2 Violin, 1 Viola, 1 Cello",
          "1 Violin, 1 Guitar, 1 Cello, 1 Piano",
          "4 cây đàn Violin"
        ],
        correctIndex: 1,
        explain: "Tứ tấu đàn dây tiêu chuẩn gồm đúng 4 cây đàn: 2 Violin (Violin 1 và Violin 2), 1 Viola và 1 Cello."
      },
      {
        q: "Nhà soạn nhạc người Áo nào được mệnh danh là 'Cha đẻ của Tứ tấu dây' và 'Cha đẻ của Giao hưởng'?",
        options: ["W.A. Mozart", "Joseph Haydn", "Ludwig van Beethoven", "Johann Sebastian Bach"],
        correctIndex: 1,
        explain: "Joseph Haydn có công định hình cấu trúc 4 chương hoàn chỉnh cho cả thể loại Tứ tấu dây và Giao hưởng."
      },
      {
        q: "Nhạc cụ nào trong Tứ tấu dây đảm nhận phần âm thanh trầm nhất, làm bệ đỡ hòa âm cho toàn ban?",
        options: ["Violin 1", "Viola", "Cello (Trung cầm)", "Violin 2"],
        correctIndex: 2,
        explain: "Cello có âm vực trầm nhất trong tứ tấu dây, tạo nền bass vững chắc cho các bè phía trên thăng hoa."
      },
      {
        q: "Bản Serenade nổi tiếng 'Eine kleine Nachtmusik' (K.525) của Mozart mang nghĩa tiếng Việt là gì?",
        options: ["Bản giao hưởng số 5", "Một khúc nhạc đêm nhỏ", "Khúc ca đồng quê", "Vũ khúc Tây Ban Nha"],
        correctIndex: 1,
        explain: "Trong tiếng Đức, 'Eine kleine Nachtmusik' có nghĩa là 'Một khúc nhạc đêm nhỏ' (A Little Night Music)."
      }
    ]
  },

  // ================= BÀI 5 =================
  {
    num: 5,
    topicNum: 3,
    title: "Bài 5: Hệ thống các Hợp âm của giọng Pha trưởng",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Xác định chính xác cấu tạo các hợp âm ba chính và phụ trên các bậc của giọng Pha trưởng; Nắm vững công thức hợp âm bậc I (F), bậc IV (Bb), bậc V (C / C7); Ứng dụng vòng hòa âm cơ bản để đệm các bài hát giọng Pha trưởng.",
    intro: "Một giai điệu du dương sẽ trở nên lung linh và đầy đặn hơn bội phần khi được nâng đỡ bởi các chùm hợp âm hòa thanh. Các hợp âm trong giọng Pha trưởng được xây dựng từ những nốt nhạc nào?",
    sections: [
      {
        title: "1. Các hợp âm ba trên các bậc âm giọng Pha trưởng",
        content: `
          <p class="mb-3">
            Xây dựng hợp âm ba (Triad) bằng cách chồng 2 quãng 3 liên tiếp từ các bậc âm tự nhiên của thang âm Pha trưởng (F - G - A - Bb - C - D - E):
          </p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <thead class="bg-emerald-100 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 uppercase font-bold">
                <tr>
                  <th class="p-2.5">Bậc âm</th>
                  <th class="p-2.5">Tên hợp âm</th>
                  <th class="p-2.5">Cấu tạo nốt</th>
                  <th class="p-2.5">Tính chất</th>
                  <th class="p-2.5">Vai trò</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                <tr>
                  <td class="p-2.5 font-bold">I</td>
                  <td class="p-2.5 font-bold text-emerald-600">F (Pha trưởng)</td>
                  <td class="p-2.5">F - A - C</td>
                  <td class="p-2.5">Hợp âm 3 Trưởng</td>
                  <td class="p-2.5 font-semibold text-emerald-700 dark:text-emerald-300">Chủ (T)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">II</td>
                  <td class="p-2.5">Gm (Sol thứ)</td>
                  <td class="p-2.5">G - Bb - D</td>
                  <td class="p-2.5">Hợp âm 3 Thứ</td>
                  <td class="p-2.5 text-gray-500">Bậc phụ</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">III</td>
                  <td class="p-2.5">Am (La thứ)</td>
                  <td class="p-2.5">A - C - E</td>
                  <td class="p-2.5">Hợp âm 3 Thứ</td>
                  <td class="p-2.5 text-gray-500">Bậc phụ</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">IV</td>
                  <td class="p-2.5 font-bold text-blue-600">Bb (Si giáng trưởng)</td>
                  <td class="p-2.5">Bb - D - F</td>
                  <td class="p-2.5">Hợp âm 3 Trưởng</td>
                  <td class="p-2.5 font-semibold text-blue-700 dark:text-blue-300">Hạ át (S)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">V</td>
                  <td class="p-2.5 font-bold text-purple-600">C / C7 (Đô trưởng / 7 át)</td>
                  <td class="p-2.5">C - E - G (- Bb)</td>
                  <td class="p-2.5">Trưởng / Bảy át</td>
                  <td class="p-2.5 font-semibold text-purple-700 dark:text-purple-300">Át (D)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">VI</td>
                  <td class="p-2.5 font-bold text-amber-600">Dm (Rê thứ)</td>
                  <td class="p-2.5">D - F - A</td>
                  <td class="p-2.5">Hợp âm 3 Thứ</td>
                  <td class="p-2.5 text-amber-700 dark:text-amber-300">Giọng song song</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "2. Các vòng hòa âm phổ biến trong giọng Pha trưởng",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs text-gray-700 dark:text-gray-300">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 uppercase mb-1">Vòng hòa âm cơ bản: F - Bb - C - F (I - IV - V - I)</h5>
              <p class="leading-relaxed">Khẳng định chủ âm F, chuyển động sang hạ át Bb mở rộng không gian, đẩy lên đỉnh điểm kịch tính ở át C và giải quyết trọn vẹn về F.</p>
            </div>
            <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
              <h5 class="font-bold text-purple-700 dark:text-purple-300 uppercase mb-1">Vòng Pop hiện đại: F - C - Dm - Bb (I - V - VI - IV)</h5>
              <p class="leading-relaxed">Vòng hòa âm kinh điển của hàng ngàn bản hit nhạc trẻ thế giới và Việt Nam, mang màu sắc tươi trẻ pha chút bâng khuâng lãng mạn.</p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Bấm và chuyển đổi các hợp âm F, Bb, C, Dm trên phím đàn Keyboard hoặc cần đàn Guitar.",
      "Ghép vòng hòa âm F - Bb - C7 - F theo tiết tấu nhịp 4/4 nhịp nhàng.",
      "Đặt hợp âm cho một câu hát mở đầu ca khúc giọng Pha trưởng."
    ],
    summary: "Ba hợp âm chính của giọng Pha trưởng là F (bậc I - Chủ), Bb (bậc IV - Hạ át) và C/C7 (bậc V - Át). Hợp âm bậc VI là Dm (Rê thứ) chính là hợp âm chủ của giọng thứ song song.",
    quizzes: [
      {
        q: "Hợp âm chủ bậc I của giọng Pha trưởng gồm các nốt nhạc nào?",
        options: ["F - A - C", "F - Ab - C", "F - Bb - D", "C - E - G"],
        correctIndex: 0,
        explain: "Hợp âm F trưởng gồm âm gốc F, quãng 3 trưởng nốt A và quãng 5 đúng nốt C (F - A - C)."
      },
      {
        q: "Hợp âm hạ át bậc IV trong giọng Pha trưởng là hợp âm gì?",
        options: ["B trưởng (B)", "Si giáng trưởng (Bb)", "Sol thứ (Gm)", "Đô trưởng (C)"],
        correctIndex: 1,
        explain: "Bậc IV của giọng Pha trưởng là nốt Bb, do đó hợp âm bậc IV là Si giáng trưởng (Bb - D - F)."
      },
      {
        q: "Hợp âm bảy át (V7) của giọng Pha trưởng gồm 4 nốt nhạc nào?",
        options: ["C - E - G - Bb", "C - E - G - B", "G - B - D - F", "F - A - C - Eb"],
        correctIndex: 0,
        explain: "Hợp âm 7 át xây dựng trên bậc V (nốt C), gồm nốt C - E - G chồng thêm quãng 7 thứ nốt Bb."
      },
      {
        q: "Hợp âm bậc VI của giọng Pha trưởng là Dm (Rê thứ). Hợp âm này có mối liên hệ gì đặc biệt?",
        options: [
          "Là hợp âm át của giọng",
          "Là hợp âm chủ của giọng thứ song song (Rê thứ)",
          "Là hợp âm nghịch không được sử dụng",
          "Là hợp âm giảm chỉ dùng trong kết bài"
        ],
        correctIndex: 1,
        explain: "Rê thứ (Dm) là giọng thứ song song với Pha trưởng (cùng hóa biểu 1 dấu giáng Bb)."
      }
    ]
  },

  // ================= BÀI 6 =================
  {
    num: 6,
    topicNum: 3,
    title: "Bài 6: Thực hành nhạc cụ giai điệu và Hòa âm giọng Pha trưởng",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Thực hành bấm thế ngón nốt Si giáng (Bb) trên Sáo Recorder hoặc Kèn phím Melodica; Bấm chuẩn xác thế bấm hợp âm F, Bb, C trên Guitar và Keyboard; Diễn tấu bài hòa tấu giọng Pha trưởng kết hợp nhịp nhàng giữa bè giai điệu và bè đệm.",
    intro: "Biến lý thuyết thành âm thanh thực tế qua đôi bàn tay là trải nghiệm tuyệt vời nhất trong học tập âm nhạc. Hãy cùng cầm nhạc cụ lên để chinh phục thế bấm nốt Si giáng và những hợp âm giọng Pha trưởng!",
    sections: [
      {
        title: "1. Thế bấm nốt Si giáng (Bb) trên Sáo Recorder và Kèn phím Melodica",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800 space-y-1.5">
              <h5 class="font-bold text-teal-700 dark:text-teal-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-wand-magic-sparkles"></i> Sáo Recorder Soprano (Hệ Baroque)
              </h5>
              <p class="text-gray-600 dark:text-gray-300">
                <strong>Thế bấm nốt Bb:</strong> Tay trái bấm ngón cái (lỗ 0 phía sau), ngón trỏ (lỗ 1), ngón áp út (lỗ 3 - mở ngón giữa lỗ 2). Tay phải bấm ngón trỏ (lỗ 4).
              </p>
              <p class="text-teal-800 dark:text-teal-300 italic">Mẹo: Luồng hơi thổi nhẹ nhàng, êm ái để nốt Bb không bị xé tiếng.</p>
            </div>
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-1.5">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-keyboard"></i> Kèn phím Melodica / Keyboard
              </h5>
              <p class="text-gray-600 dark:text-gray-300">
                <strong>Phím nốt Bb:</strong> Là phím đen ngoài cùng bên phải trong cụm 3 phím đen (F# - G# - Bb). Dùng ngón số 3 (ngón giữa) hoặc ngón số 4 để ấn phím.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Kỹ thuật đệm đàn Guitar & Keyboard cho giọng Pha trưởng",
        content: `
          <div class="space-y-3 text-xs text-gray-700 dark:text-gray-300">
            <p><strong>Thế bấm chặn (Barre Chords) trên Guitar:</strong> Hợp âm F (chặn toàn bộ ngăn 1) và Bb (chặn ngăn 1 dây 5 hoặc thế ngăn 6). Đối với học sinh mới bắt đầu, có thể sử dụng thế bấm F rút gọn (Fmaj7/C hoặc bấm 4 dây dưới) để dễ chuyển ngón.</p>
            <p><strong>Mẫu tiết tấu đệm Ballad nhịp 4/4:</strong> Bass - 3 - 2 - 3 - 1 - 3 - 2 - 3. Giữ đều nhịp chân và chuyển hợp âm đúng phách 1 của mỗi ô nhịp.</p>
          </div>
        `
      }
    ],
    practice: [
      "Thực hành thổi thang âm Pha trưởng trên sáo Recorder từ F1 lên F2.",
      "Luyện tập chuyển ngón Guitar giữa 3 hợp âm F - Bb - C liên tục trong 1 phút không vấp.",
      "Hòa tấu nhóm: Nhóm 1 thổi giai điệu bài học, Nhóm 2 đệm hòa thanh Guitar/Keyboard, Nhóm 3 gõ trống Cajon/phách tam âm."
    ],
    summary: "Thế bấm nốt Bb trên Recorder Baroque đòi hỏi kỹ thuật bấm chéo ngón (lỗ 0, 1, 3, 4). Trên đàn phím, Bb là phím đen thứ 3 trong cụm 3 phím đen. Hòa tấu nhóm đòi hỏi sự ăn khớp giữa bè giai điệu và bè hòa âm đệm.",
    quizzes: [
      {
        q: "Trên bàn phím đàn Piano / Melodica, nốt Si giáng (Bb) nằm ở vị trí nào?",
        options: [
          "Phím trắng nằm giữa phím E và F",
          "Phím đen ngoài cùng bên phải trong cụm 3 phím đen",
          "Phím đen bên trái trong cụm 2 phím đen",
          "Phím trắng đầu tiên bên trái đàn"
        ],
        correctIndex: 1,
        explain: "Cụm 3 phím đen gồm F#, G# và Bb. Nốt Bb chính là phím đen thứ ba (ngoài cùng bên phải cụm này)."
      },
      {
        q: "Khi bấm nốt Si giáng (Bb) trên sáo Recorder soprano hệ Baroque, ngón giữa tay trái (lỗ số 2) ở trạng thái nào?",
        options: ["Bấm kín lỗ số 2", "Mở ngón giữa (không bấm lỗ số 2)", "Bấm nửa lỗ", "Bịt lỗ thoát âm"],
        correctIndex: 1,
        explain: "Thế bấm Bb trên Recorder là thế bấm phân nhánh: bấm lỗ 0, 1, 3, 4 và mở ngón giữa ở lỗ số 2."
      },
      {
        q: "Khi chơi hợp âm F trưởng trên đàn Guitar, ngón trỏ của tay trái thực hiện kỹ thuật gì?",
        options: [
          "Chỉ bấm dây số 6",
          "Chặn (Barre) toàn bộ các dây ở ngăn 1 (hoặc bấm dây 1 và dây 2)",
          "Bấm ở ngăn số 5",
          "Không chạm vào bất kỳ dây nào"
        ],
        correctIndex: 1,
        explain: "Hợp âm F trưởng nguyên bản trên Guitar là hợp âm chặn (Barre chord) ngăn 1 bằng ngón trỏ."
      },
      {
        q: "Trong một tiết mục hòa tấu học đường, bè đệm nhạc cụ giữ vai trò cốt lõi nào?",
        options: [
          "Chơi to hơn bè giai điệu để lấn át người thổi sáo",
          "Giữ nhịp phách ổn định và tạo nền tảng màu sắc hòa âm nâng đỡ bè giai điệu",
          "Tự do đổi nhịp theo cảm hứng cá nhân",
          "Chỉ đánh một nốt duy nhất suốt cả bài"
        ],
        correctIndex: 1,
        explain: "Bè đệm có vai trò giữ nhịp điệu chính xác và làm nền hòa thanh nâng đỡ, tôn vinh bè giai điệu chính."
      }
    ]
  },

  // ================= BÀI 7 =================
  {
    num: 7,
    topicNum: 4,
    title: "Bài 7: Giọng Rê thứ (D minor) và Mối quan hệ song song với Pha trưởng",
    badgeColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    dotColor: "bg-purple-500",
    time: "45 phút",
    target: "Hiểu khái niệm giọng thứ tự nhiên, giọng thứ hòa âm và giọng thứ giai điệu; Nắm vững mối quan hệ song song giữa Pha trưởng (F major) và Rê thứ (D minor); Xướng âm chính xác nốt C thăng (C#) trong thang âm Rê thứ hòa âm.",
    intro: "Nếu như giọng Pha trưởng mang vẻ rạng rỡ của ánh nắng ban mai, thì giọng Rê thứ song song lại mang vẻ đẹp trầm tư, lắng đọng, da diết như một chiều thu man mác. Điểm chung và nét khác biệt giữa hai giọng này là gì?",
    sections: [
      {
        title: "1. Mối quan hệ giữa Giọng Pha trưởng và Giọng Rê thứ",
        content: `
          <p class="mb-3">
            <strong>Giọng song song (Relative Keys):</strong> Là một cặp gồm một giọng trưởng và một giọng thứ có <strong>chung hóa biểu</strong> (cùng số lượng và tên dấu hóa) nhưng khác nhau về <strong>âm chủ</strong> và tính chất âm nhạc.
          </p>
          <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 my-3 text-xs text-gray-700 dark:text-gray-300 space-y-2">
            <p><strong>Cặp giọng song song:</strong> <strong>Pha trưởng (F major)</strong> và <strong>Rê thứ (D minor)</strong> đều có chung hóa biểu là <strong>1 dấu Si giáng (Bb)</strong>.</p>
            <p><strong>Quy tắc tìm âm chủ:</strong> Âm chủ của giọng thứ song song luôn nằm ở <em>quãng 3 thứ (1 cung rưỡi)</em> phía dưới âm chủ của giọng trưởng. Từ nốt F đi xuống 1,5 cung chính là nốt D.</p>
          </div>
        `
      },
      {
        title: "2. Ba dạng thang âm của giọng Rê thứ (D minor)",
        content: `
          <div class="space-y-3 text-xs">
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">1. Rê thứ tự nhiên (Natural Minor):</strong>
              D - E - F - G - A - Bb - C - D (Hoàn toàn đúng theo hóa biểu một dấu Si giáng).
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-purple-600 dark:text-purple-400 block mb-1">2. Rê thứ hòa âm (Harmonic Minor) - Dùng phổ biến nhất:</strong>
              D - E - F - G - A - Bb - <strong>C#</strong> - D. Bậc VII được nâng cao nửa cung bằng dấu thăng bất thường (C#), tạo lực hút cực mạnh về âm chủ D và tạo quãng 2 tăng (Bb - C# = 1,5 cung).
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-rose-600 dark:text-rose-400 block mb-1">3. Rê thứ giai điệu (Melodic Minor):</strong>
              Khi đi lên nâng cao bậc VI và VII: D - E - F - G - A - <strong>B bình</strong> - <strong>C#</strong> - D. Khi đi xuống trở về như thứ tự nhiên: D - <strong>C bình</strong> - <strong>Bb</strong> - A - G - F - E - D.
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Xướng âm so sánh thang âm Pha trưởng và Rê thứ hòa âm để cảm nhận sự khác biệt màu sắc âm nhạc.",
      "Tập đọc nhạc Bài đọc nhạc số 3 giọng Rê thứ, chú ý cao độ nốt C# (Đô thăng).",
      "Xác định các nốt nhạc tạo nên quãng 2 tăng (Augmented second) trong giọng Rê thứ hòa âm."
    ],
    summary: "Pha trưởng và Rê thứ là hai giọng song song có chung hóa biểu 1 dấu Si giáng (Bb). Trong giọng Rê thứ hòa âm, bậc VII (nốt Đô) được thăng lên thành C# để tạo âm dẫn mạnh mẽ giải quyết về âm chủ D.",
    quizzes: [
      {
        q: "Giọng thứ song song với giọng Pha trưởng (F major) là giọng nào?",
        options: ["Giọng La thứ (Am)", "Giọng Rê thứ (Dm)", "Giọng Mi thứ (Em)", "Giọng Si thứ (Bm)"],
        correctIndex: 1,
        explain: "Giọng thứ song song nằm dưới âm chủ giọng trưởng một quãng 3 thứ (F xuống 1,5 cung là D). Đó là giọng Rê thứ (Dm)."
      },
      {
        q: "Đặc điểm cấu tạo thang âm của giọng Rê thứ hòa âm (D harmonic minor) là gì?",
        options: [
          "Bậc VII được nâng cao nửa cung (C biến thành C#)",
          "Bậc III được hạ thấp nửa cung",
          "Bỏ bớt dấu Si giáng ở hóa biểu",
          "Tất cả các nốt đều thăng lên một cung"
        ],
        correctIndex: 0,
        explain: "Giọng thứ hòa âm luôn nâng cao bậc VII lên nửa cung để tạo âm dẫn. Trong giọng Rê thứ, nốt C trở thành C#."
      },
      {
        q: "Khoảng cách cao độ giữa nốt Si giáng (Bb) và Đô thăng (C#) trong thang âm Rê thứ hòa âm là quãng gì?",
        options: ["Quãng 2 trưởng (1 cung)", "Quãng 2 tăng (1 cung rưỡi)", "Quãng 3 trưởng (2 cung)", "Quãng 1 đúng"],
        correctIndex: 1,
        explain: "Bb lên C# gồm quãng 2 chữ cái (B lên C) nhưng độ rộng 1,5 cung, do đó là quãng 2 tăng (Augmented 2nd)."
      },
      {
        q: "Hai giọng có cùng một hóa biểu nhưng khác nhau về âm chủ và tính chất được gọi là gì?",
        options: ["Hai giọng cùng tên", "Hai giọng song song", "Hai giọng đồng âm", "Hai giọng chuyển cung"],
        correctIndex: 1,
        explain: "Đó là định nghĩa chuẩn của cặp Giọng song song (Relative keys), ví dụ C trưởng - A thứ, F trưởng - D thứ."
      }
    ]
  },

  // ================= BÀI 8 =================
  {
    num: 8,
    topicNum: 4,
    title: "Bài 8: Dân ca ba miền và Nghệ thuật diễn xướng dân gian",
    badgeColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    dotColor: "bg-purple-500",
    time: "45 phút",
    target: "Nhận biết đặc trưng phong cách âm nhạc dân ca 3 miền Bắc - Trung - Nam; Tìm hiểu thang năm âm (Pentatonic Scale) mang đậm hồn cốt âm nhạc Việt Nam; Thể hiện bài hát dân ca 'Lí quạ kêu' (Dân ca Nam Bộ) với đúng ngữ điệu và tinh thần lạc quan.",
    intro: "Dọc theo dải đất hình chữ S, mỗi vùng miền lại mang một làn điệu dân ca riêng biệt: miền Bắc tha thiết trữ tình, miền Trung da diết trầm mặc, miền Nam phóng khoáng nghĩa tình. Điều gì tạo nên linh hồn của âm nhạc dân gian Việt Nam?",
    sections: [
      {
        title: "1. Thang âm ngũ cung (Thang 5 âm) trong dân ca Việt Nam",
        content: `
          <p class="mb-3">
            Khác với hệ thống 7 âm (Di Harmonic) của phương Tây, âm nhạc truyền thống Việt Nam và phương Đông chủ yếu sử dụng <strong>thang năm âm (Ngũ cung - Pentatonic)</strong> không có các quãng nửa cung (không có hút gắt), mang lại cảm giác mộc mạc, gần gũi với thiên nhiên:
          </p>
          <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>5 bậc âm ngũ cung cơ bản:</strong> Hò - Xự - Xang - Xê - Cống (tương ứng gần đúng với Rê - Mi - Sol - La - Đô).</p>
            <p><strong>Điệu thức:</strong> Điệu Bắc (vui tươi, trong sáng), Điệu Nam (buồn, sâu lắng, trữ tình với các âm rung, mổ, vuốt đặc thù).</p>
          </div>
        `
      },
      {
        title: "2. Đặc trưng dân ca Nam Bộ và điệu 'Lí quạ kêu'",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-1.5">
              <h5 class="font-bold text-emerald-700 dark:text-emerald-300 uppercase">Phong cách Dân ca Nam Bộ</h5>
              <p class="text-gray-600 dark:text-gray-300">
                Gắn liền với cuộc sống sông nước mênh mông, tính cách người Nam Bộ chân chất, cởi mở, bộc trực. Các thể loại tiêu biểu: Hò (hò sông nước, hò cấy), Nói thơ, Đờn ca tài tử và đặc biệt là hệ thống hàng trăm điệu <strong>Lí</strong>.
              </p>
            </div>
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-1.5">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 uppercase">Bài 'Lí quạ kêu'</h5>
              <p class="text-gray-600 dark:text-gray-300">
                Giai điệu rộn ràng, hóm hỉnh, mượn hình ảnh tiếng quạ kêu và sinh hoạt đời thường để gửi gắm tiếng cười vui tươi, lạc quan yêu đời của người lao động miệt vườn phương Nam.
              </p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Hát đúng ngữ điệu và phát âm chuẩn các từ đệm phương ngữ Nam Bộ trong bài 'Lí quạ kêu'.",
      "Luyện xướng âm 5 nốt của thang âm ngũ cung Rê - Mi - Sol - La - Đô.",
      "Sưu tầm và kể tên 5 điệu Lí Nam Bộ nổi tiếng mà em biết (ví dụ: Lí cây bông, Lí ngựa ô, Lí chim quyên...)."
    ],
    summary: "Dân ca Việt Nam dựa trên nền tảng thang âm ngũ cung (Hò - Xự - Xang - Xê - Cống). Dân ca Nam Bộ nổi bật với các điệu Lí vui tươi, mộc mạc, thể hiện tâm hồn phóng khoáng, lạc quan yêu đời của người dân phương Nam.",
    quizzes: [
      {
        q: "Thang âm đặc trưng cấu tạo nên phần lớn làn điệu dân ca truyền thống Việt Nam là thang âm gì?",
        options: ["Thang âm 12 nửa cung (Cromatic)", "Thang âm ngũ cung (Thang 5 âm)", "Thang âm toàn cung (Whole tone)", "Thang âm 8 bậc"],
        correctIndex: 1,
        explain: "Thang âm ngũ cung (5 âm: Hò - Xự - Xang - Xê - Cống) là nền tảng cốt lõi của dân ca truyền thống Việt Nam."
      },
      {
        q: "Bài hát 'Lí quạ kêu' thuộc vùng dân ca nào của nước ta?",
        options: ["Dân ca quan họ Bắc Ninh", "Dân ca Nam Bộ", "Dân ca ví giặm Nghệ Tĩnh", "Dân ca Tây Nguyên"],
        correctIndex: 1,
        explain: "'Lí quạ kêu' là làn điệu dân ca dí dỏm, mộc mạc đặc trưng của vùng đồng bằng sông Cửu Long (Nam Bộ)."
      },
      {
        q: "Trong các điệu Lí dân ca Nam Bộ, từ 'Lí' thường gắn liền với nội dung gì?",
        options: [
          "Tên con vật, cây trái, nghề nghiệp hoặc sinh hoạt thường ngày",
          "Tên các triều đại lịch sử",
          "Tên các vị anh hùng thần thoại",
          "Tên các vì sao trên bầu trời"
        ],
        correctIndex: 0,
        explain: "Các điệu Lí Nam Bộ thường gắn với đời thường mộc mạc: Lí ngựa ô, Lí cây bông, Lí con sáo, Lí kéo chài, Lí quạ kêu..."
      },
      {
        q: "Điệu thức Nam trong âm nhạc truyền thống Việt Nam thường gợi lên cảm xúc thẩm mỹ nào?",
        options: [
          "Trang nghiêm, hào hùng xung trận",
          "Dịu buồn, sâu lắng, tha thiết, trữ tình",
          "Sợ hãi, rùng rợn, giật gân",
          "Hài hước, châm biếm sâu cay"
        ],
        correctIndex: 1,
        explain: "Hơi Nam (điệu Nam) với các nốt rung, nhấn đặc trưng thường diễn tả nỗi buồn thương, hoài niệm, sâu lắng."
      }
    ]
  },

  // ================= BÀI 9 =================
  {
    num: 9,
    topicNum: 5,
    title: "Bài 9: Hệ thống các Hợp âm của giọng Rê thứ",
    badgeColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    dotColor: "bg-blue-500",
    time: "45 phút",
    target: "Nhận biết và cấu tạo các hợp âm ba trên các bậc âm giọng Rê thứ; Giải thích vì sao hợp âm át bậc V trong giọng thứ hòa âm lại là hợp âm Trưởng (A / A7); Thực hành chuỗi hòa âm kinh điển Dm - Gm - A7 - Dm.",
    intro: "Màu sắc huyền bí, da diết và giàu kịch tính của giọng Rê thứ đến từ sự tương phản giữa hợp âm chủ thứ (Dm) và hợp âm át trưởng (A/A7). Cấu trúc hòa âm này được hình thành như thế nào?",
    sections: [
      {
        title: "1. Bảng hợp âm ba trên các bậc âm giọng Rê thứ hòa âm",
        content: `
          <p class="mb-3">
            Sử dụng các nốt của thang âm Rê thứ hòa âm (D - E - F - G - A - Bb - C#):
          </p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-xs text-left border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <thead class="bg-blue-100 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 uppercase font-bold">
                <tr>
                  <th class="p-2.5">Bậc âm</th>
                  <th class="p-2.5">Tên hợp âm</th>
                  <th class="p-2.5">Cấu tạo nốt</th>
                  <th class="p-2.5">Tính chất</th>
                  <th class="p-2.5">Chức năng</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                <tr>
                  <td class="p-2.5 font-bold">I</td>
                  <td class="p-2.5 font-bold text-blue-600">Dm (Rê thứ)</td>
                  <td class="p-2.5">D - F - A</td>
                  <td class="p-2.5">Hợp âm 3 Thứ</td>
                  <td class="p-2.5 font-semibold text-blue-700 dark:text-blue-300">Chủ (t)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">II</td>
                  <td class="p-2.5">E dim (Mi giảm)</td>
                  <td class="p-2.5">E - G - Bb</td>
                  <td class="p-2.5">Hợp âm 3 Giảm</td>
                  <td class="p-2.5 text-gray-500">Bậc phụ</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">III</td>
                  <td class="p-2.5 font-bold text-emerald-600">F (Pha trưởng)</td>
                  <td class="p-2.5">F - A - C</td>
                  <td class="p-2.5">Hợp âm 3 Trưởng</td>
                  <td class="p-2.5 text-emerald-700 dark:text-emerald-300">Giọng song song</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">IV</td>
                  <td class="p-2.5 font-bold text-teal-600">Gm (Sol thứ)</td>
                  <td class="p-2.5">G - Bb - D</td>
                  <td class="p-2.5">Hợp âm 3 Thứ</td>
                  <td class="p-2.5 font-semibold text-teal-700 dark:text-teal-300">Hạ át (s)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">V</td>
                  <td class="p-2.5 font-bold text-rose-600">A / A7 (La trưởng / La 7 át)</td>
                  <td class="p-2.5">A - <strong>C#</strong> - E (- G)</td>
                  <td class="p-2.5">Hợp âm Trưởng / 7 át</td>
                  <td class="p-2.5 font-semibold text-rose-700 dark:text-rose-300">Át (D)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold">VI</td>
                  <td class="p-2.5 font-bold text-purple-600">Bb (Si giáng trưởng)</td>
                  <td class="p-2.5">Bb - D - F</td>
                  <td class="p-2.5">Hợp âm 3 Trưởng</td>
                  <td class="p-2.5 text-purple-700 dark:text-purple-300">Bậc phụ</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "2. Vai trò sống còn của hợp âm át Trưởng (A / A7) trong giọng thứ",
        content: `
          <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 text-xs text-gray-700 dark:text-gray-300 leading-relaxed space-y-2 my-3">
            <p><strong>Tại sao dùng A7 thay vì Am?</strong> Trong giọng thứ tự nhiên, hợp âm bậc V là Am (A - C - E). Hợp âm Am nghe mờ nhạt, thiếu lực hút về Dm. Nhưng trong giọng thứ hòa âm, nốt C được thăng lên thành C# (A - C# - E = A trưởng). Nốt C# là âm dẫn cách âm chủ D chỉ nửa cung, tạo nên sức căng hòa thanh mãnh liệt buộc phải hút về nốt D của Dm.</p>
            <p><strong>Công thức kết bài kinh điển:</strong> A7 &rarr; Dm (Át 7 về Chủ).</p>
          </div>
        `
      }
    ],
    practice: [
      "Bấm thế tay các hợp âm Dm, Gm, A, A7, Bb trên đàn Guitar hoặc phím đàn Keyboard.",
      "Chơi vòng hòa âm Dm - Gm - A7 - Dm theo nhịp điệu Slow Rock 6/8 hoặc Valse 3/4.",
      "Tập nghe và phân biệt cảm giác giải quyết khi chuyển từ Am về Dm so với từ A7 về Dm."
    ],
    summary: "Hệ thống hợp âm giọng Rê thứ gồm Dm (bậc I - Chủ), Gm (bậc IV - Hạ át), A/A7 (bậc V - Át) và Bb (bậc VI). Nhờ có nốt C# trong thang âm thứ hòa âm, hợp âm át bậc V mang tính chất Trưởng (A/A7), tạo lực hút mạnh mẽ giải quyết về Dm.",
    quizzes: [
      {
        q: "Hợp âm chủ bậc I của giọng Rê thứ gồm những nốt nhạc nào?",
        options: ["D - F - A", "D - F# - A", "D - G - B", "A - C - E"],
        correctIndex: 0,
        explain: "Hợp âm Dm (Rê thứ) gồm âm gốc D, quãng 3 thứ nốt F và quãng 5 đúng nốt A (D - F - A)."
      },
      {
        q: "Trong giọng Rê thứ hòa âm, hợp âm bậc V là hợp âm gì?",
        options: ["La thứ (Am)", "La trưởng hoặc La 7 át (A / A7)", "Sol trưởng (G)", "Đô trưởng (C)"],
        correctIndex: 1,
        explain: "Nhờ nốt C# nâng cao ở bậc VII, hợp âm bậc V trở thành La trưởng (A - C# - E) hoặc La 7 át (A - C# - E - G)."
      },
      {
        q: "Hợp âm hạ át bậc IV trong giọng Rê thứ là hợp âm nào?",
        options: ["Sol trưởng (G)", "Sol thứ (Gm)", "Pha trưởng (F)", "Si giáng trưởng (Bb)"],
        correctIndex: 1,
        explain: "Bậc IV của giọng Rê thứ là nốt G, hợp âm bậc IV tương ứng là Sol thứ Gm (G - Bb - D)."
      },
      {
        q: "Vòng hòa âm cơ bản và chuẩn mực nhất để kết bài ở giọng Rê thứ là vòng nào?",
        options: ["Dm - Bb - C - F", "Dm - Gm - A7 - Dm", "Dm - Em - F - G", "Dm - Am - Dm - C"],
        correctIndex: 1,
        explain: "Vòng Dm (Chủ) - Gm (Hạ át) - A7 (Át) - Dm (Chủ) là vòng hòa thanh kinh điển hoàn mỹ của giọng Rê thứ."
      }
    ]
  },

  // ================= BÀI 10 =================
  {
    num: 10,
    topicNum: 5,
    title: "Bài 10: Kỹ thuật diễn tấu rải ngón (Arpeggio) và Đệm đàn phím điện tử",
    badgeColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    dotColor: "bg-blue-500",
    time: "45 phút",
    target: "Hiểu khái niệm và kỹ thuật rải ngón (Arpeggio) trên đàn Guitar và Keyboard; Phân biệt 3 khớp ngón cơ bản trên đàn phím (Non-legato, Legato, Staccato); Ứng dụng mẫu đệm Arpeggio để đệm hát một ca khúc trữ tình ở giọng Rê thứ.",
    intro: "Thay vì đánh đồng loạt tất cả các nốt hợp âm cùng một lúc (hợp âm khối Block Chord), người nghệ sĩ đàn rải từng nốt nối tiếp nhau mềm mại như tiếng suối róc rách. Kỹ thuật đó gọi là gì?",
    sections: [
      {
        title: "1. Kỹ thuật rải ngón (Arpeggio - Hợp âm rải)",
        content: `
          <p class="mb-3">
            <strong>Arpeggio (bắt nguồn từ tiếng Ý 'arpeggiare' nghĩa là chơi như đàn hạc - Harp):</strong> Là kỹ thuật diễn tấu các nốt của một hợp âm một cách <em>lần lượt kế tiếp nhau</em> (đi lên hoặc đi xuống) thay vì vang lên đồng thời.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <strong class="text-amber-700 dark:text-amber-300 block mb-1">Trên đàn Guitar:</strong>
              Ngón cái (p) gảy nốt Bass (dây 4, 5 hoặc 6). Các ngón trỏ (i), giữa (m), áp út (a) lần lượt móc nhẹ các dây 3, 2, 1 tạo thành chuỗi âm thanh lượn sóng êm dịu.
            </div>
            <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <strong class="text-indigo-700 dark:text-indigo-300 block mb-1">Trên đàn Keyboard / Piano:</strong>
              Các ngón tay (1 - 2 - 3 - 5) lần lượt ấn nốt âm gốc, âm 3, âm 5 và âm bát độ theo làn sóng dâng trào liền lạc.
            </div>
          </div>
        `
      },
      {
        title: "2. Ba kỹ thuật chạm phím cơ bản trên đàn phím điện tử",
        content: `
          <div class="space-y-2.5 text-xs text-gray-700 dark:text-gray-300">
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/40 rounded-lg border border-gray-200 dark:border-gray-700">
              <strong>1. Non-legato (Không liền tiếng):</strong> Nhấc ngón dứt khoát trước khi ấn phím tiếp theo, giữa các nốt có khoảng ngắt ngắn nhưng không nảy. Thích hợp khi mới bắt đầu luyện ngón độc lập.
            </div>
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/40 rounded-lg border border-gray-200 dark:border-gray-700">
              <strong>2. Legato (Liền tiếng):</strong> Ngón tay vừa nhấc lên thì ngón kế tiếp đã chạm xuống, âm thanh gối đầu mượt mà, không có khoảng lặng.
            </div>
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/40 rounded-lg border border-gray-200 dark:border-gray-700">
              <strong>3. Staccato (Nảy tiếng):</strong> Chạm phím cực nhanh và bật cổ tay nảy lên như chạm vào vật nóng, âm thanh ngắt ngắn và vang bật sắc nét.
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Luyện tập mẫu rải ngón Arpeggio hợp âm Dm trên Guitar: p - i - m - a - m - i (nhịp 6/8).",
      "Thực hành 3 kỹ thuật Non-legato, Legato và Staccato trên thang âm Rê thứ hòa âm bằng đàn Keyboard.",
      "Đệm mẫu rải Arpeggio cho bạn hát một câu dân ca Nam Bộ hoặc ca khúc mùa thu trữ tình."
    ],
    summary: "Arpeggio là kỹ thuật rải các nốt hợp âm nối tiếp nhau. Trên đàn phím điện tử, 3 kỹ thuật tiếp xúc phím cốt lõi là Non-legato (ngắt nhẹ), Legato (liền mượt) và Staccato (nảy bật dứt khoát).",
    quizzes: [
      {
        q: "Thuật ngữ Arpeggio trong âm nhạc có nguồn gốc từ việc mô phỏng cách diễn tấu của nhạc cụ nào?",
        options: ["Đàn Hạc (Harp)", "Đàn Trống (Drum)", "Kèn Trombone", "Sáo Flute"],
        correctIndex: 0,
        explain: "Arpeggio bắt nguồn từ 'arpa' (đàn hạc), diễn tả cách gảy từng sợi dây đàn hạc rải rác nối tiếp nhau."
      },
      {
        q: "Kỹ thuật diễn tấu mà âm thanh các nốt được nối tiếp nhau êm dịu, không hề có khoảng lặng ngắt quãng gọi là gì?",
        options: ["Staccato", "Non-legato", "Legato", "Pizzicato"],
        correctIndex: 2,
        explain: "Legato nghĩa là diễn tấu liền mạch, mượt mà giữa các nốt nhạc."
      },
      {
        q: "Khi chơi kỹ thuật Staccato trên đàn phím điện tử, bàn tay người chơi cần thực hiện thế nào?",
        options: [
          "Giữ chặt phím đàn thật lâu không thả ra",
          "Chạm phím nhanh, dứt khoát và bật cổ tay lên ngay lập tức để nốt nhạc nảy ngắn",
          "Dùng cả lòng bàn tay đập mạnh xuống phím",
          "Vuốt ngón tay từ phím này sang phím khác"
        ],
        correctIndex: 1,
        explain: "Staccato đòi hỏi sự nhanh nhẹn, dứt khoát, bật nảy ngón tay ngay sau khi phát âm."
      },
      {
        q: "Kỹ thuật rải ngón Arpeggio thường mang lại hiệu ứng cảm xúc âm nhạc gì cho người nghe?",
        options: [
          "Cảm giác êm ả, bồng bềnh, lượn sóng và đầy chất thơ lãng mạn",
          "Cảm giác hỗn loạn, đáng sợ",
          "Cảm giác giật cục, chói tai",
          "Không tạo ra bất kỳ cảm xúc nào"
        ],
        correctIndex: 0,
        explain: "Arpeggio tạo nên những làn sóng âm thanh mềm mại, uyển chuyển, rất phù hợp cho ca khúc trữ tình."
      }
    ]
  },

  // ================= BÀI 11 =================
  {
    num: 11,
    topicNum: 6,
    title: "Bài 11: Sơ lược Lịch sử âm nhạc hiện đại Việt Nam qua các thời kỳ",
    badgeColor: "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300",
    dotColor: "bg-pink-500",
    time: "45 phút",
    target: "Nắm được các mốc thời gian và thành tựu then chốt của Tân nhạc Việt Nam từ thập niên 1930 đến nay; Nhận biết đóng góp của các thế hệ nhạc sĩ tiền bối trong kháng chiến và xây dựng đất nước; Khơi dậy lòng tự hào về dòng chảy âm nhạc cách mạng Việt Nam.",
    intro: "Âm nhạc hiện đại Việt Nam (Tân nhạc) đã trải qua gần một thế kỷ đồng hành cùng thăng trầm của lịch sử dân tộc, từ những bản tình ca tiền chiến lãng mạn đến những giai điệu hào sảng nơi chiến hào chống giặc. Dòng chảy lịch sử ấy diễn ra như thế nào?",
    sections: [
      {
        title: "1. Ba giai đoạn phát triển lịch sử Tân nhạc Việt Nam thế kỷ XX",
        content: `
          <div class="space-y-3 my-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
              <h5 class="font-bold text-rose-700 dark:text-rose-300 uppercase mb-1">Giai đoạn 1: Khởi xướng phong trào Tân nhạc (1930 - 1945)</h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Tiếp thu hệ thống ký âm và nhạc lý phương Tây, kết hợp với hồn cốt điệu thức dân gian Việt Nam. Xuất hiện các ca khúc lãng mạn tiền chiến trữ tình sâu sắc của Đặng Thế Phong (Giọt mưa thu, Con thuyền không bến), Văn Cao (Thiên thai, Suối mơ), Đoàn Chuẩn - Từ Linh... và các ca khúc yêu nước khơi dậy lòng tự hào dân tộc của Lưu Hữu Phước.
              </p>
            </div>
            <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <h5 class="font-bold text-amber-700 dark:text-amber-300 uppercase mb-1">Giai đoạn 2: Âm nhạc hai cuộc kháng chiến cứu quốc (1945 - 1975)</h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Giai đoạn rực rỡ của ca khúc Cách mạng (Nhạc đỏ). Âm nhạc trở thành vũ khí sắc bén cổ vũ toàn quân, toàn dân: Tiến quân ca, Trường ca sông Lô (Văn Cao); Giải phóng Điện Biên (Đỗ Nhuận); Hò kéo pháo (Hoàng Vân); Tình ca (Hoàng Việt); Bài ca hy vọng (Văn Ký); Năm anh em trên một chiếc xe tăng (Doãn Nho)...
              </p>
            </div>
            <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h5 class="font-bold text-indigo-700 dark:text-indigo-300 uppercase mb-1">Giai đoạn 3: Âm nhạc thống nhất & Đổi mới (1975 đến nay)</h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Đề tài phong phú về tình yêu đôi lứa, quê hương hòa bình và công cuộc xây dựng đất nước. Sự bùng nổ của âm nhạc đại chúng (V-Pop, Rock, Jazz Việt) với các tên tuổi tiêu biểu: Trịnh Công Sơn, Phạm Minh Tuấn, Trần Tiến, Thanh Tùng, Dương Thụ, Phó Đức Phương, Nguyễn Cường...
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Giá trị nhân văn và bản sắc dân tộc",
        content: `
          <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
            Dù tiếp thu bất kỳ trào lưu âm nhạc thế giới nào, những tác phẩm sống mãi trong lòng công chúng Việt Nam luôn là những tác phẩm thấm đượm chất liệu âm nhạc dân gian, ca từ giàu chất thơ và phản ánh chân thực số phận, tình cảm của con người Việt Nam.
          </p>
        `
      }
    ],
    practice: [
      "Nghe và nhận diện một ca khúc thuộc giai đoạn âm nhạc kháng chiến chống Pháp hoặc chống Mỹ.",
      "Thực hiện bài thuyết trình ngắn (3 phút) về một nhạc sĩ tiền bối mà em kính trọng nhất.",
      "Kể tên 3 bài hát nổi tiếng viết về Bác Hồ hoặc tình yêu quê hương đất nước sau năm 1975."
    ],
    summary: "Lịch sử âm nhạc hiện đại Việt Nam phát triển qua 3 mốc chính: Tân nhạc thời kỳ đầu (1930-1945), Âm nhạc cách mạng kháng chiến (1945-1975) và Âm nhạc Đổi mới đương đại (1975 đến nay), luôn hòa quyện giữa tinh hoa phương Tây và tâm hồn dân tộc.",
    quizzes: [
      {
        q: "Phong trào Tân nhạc Việt Nam chính thức bắt đầu hình thành vào khoảng thập niên nào?",
        options: ["Thập niên 1910", "Thập niên 1930", "Thập niên 1950", "Thập niên 1970"],
        correctIndex: 1,
        explain: "Phong trào Tân nhạc Việt Nam bắt đầu nở rộ từ những năm cuối thập niên 1930."
      },
      {
        q: "Tác phẩm nào của nhạc sĩ Văn Cao sau này đã vinh dự được chọn làm Quốc ca nước CHXHCN Việt Nam?",
        options: ["Làng tôi", "Tiến quân ca", "Ngày mùa", "Trường ca sông Lô"],
        correctIndex: 1,
        explain: "'Tiến quân ca' được nhạc sĩ Văn Cao sáng tác cuối năm 1944 và được Quốc hội khóa I chọn làm Quốc ca Việt Nam."
      },
      {
        q: "Dòng nhạc cách mạng hào hùng, phục vụ hai cuộc kháng chiến cứu quốc (1945 - 1975) thường được gọi thân quen là gì?",
        options: ["Nhạc vàng", "Nhạc đỏ", "Nhạc Rock", "Nhạc Jazz"],
        correctIndex: 1,
        explain: "Thuật ngữ 'Nhạc đỏ' chỉ dòng âm nhạc cách mạng, ngợi ca tinh thần chiến đấu và tình yêu quê hương đất nước."
      },
      {
        q: "Nhạc sĩ nào nổi tiếng với những tình khúc tiền chiến bất hủ 'Con thuyền không bến' và 'Giọt mưa thu'?",
        options: ["Đặng Thế Phong", "Lưu Hữu Phước", "Hoàng Việt", "Đỗ Nhuận"],
        correctIndex: 0,
        explain: "Đặng Thế Phong (1918 - 1942) là tài năng đoản mệnh kiệt xuất của dòng nhạc lãng mạn tiền chiến Việt Nam."
      }
    ]
  },

  // ================= BÀI 12 =================
  {
    num: 12,
    topicNum: 6,
    title: "Bài 12: Thể loại Trường ca và Kiệt tác 'Trường ca sông Lô' của Văn Cao",
    badgeColor: "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300",
    dotColor: "bg-pink-500",
    time: "45 phút",
    target: "Hiểu đặc trưng kết cấu và quy mô nghệ thuật của thể loại Trường ca trong âm nhạc; Phân tích giá trị lịch sử và nghệ thuật của tác phẩm 'Trường ca sông Lô' (Văn Cao); Cảm nhận tính sử thi hùng tráng kết hợp trữ tình sâu lắng trong kiệt tác đỉnh cao của âm nhạc Việt Nam.",
    intro: "Mùa thu đông năm 1947, quân và dân ta đã làm nên chiến thắng Sông Lô lịch sử đánh tan cuộc tấn công của thực dân Pháp lên chiến khu Việt Bắc. Tận mắt chứng kiến dòng sông Lô oai hùng, nhạc sĩ Văn Cao đã viết nên kiệt tác trường ca vĩ đại nhất như thế nào?",
    sections: [
      {
        title: "1. Đặc điểm của thể loại Trường ca trong âm nhạc",
        content: `
          <p class="mb-3">
            <strong>Trường ca (Epic Song / Suite):</strong> Là tác phẩm thanh nhạc có <strong>quy mô lớn</strong>, cấu trúc gồm nhiều đoạn/chương nhạc liên kết chặt chẽ với nhau, phản ánh những sự kiện lịch sử trọng đại, bức tranh thiên nhiên kỳ vĩ hoặc những tư tưởng mang tính sử thi anh hùng ca.
          </p>
          <div class="p-3 bg-pink-50 dark:bg-pink-950/40 rounded-xl border border-pink-200 dark:border-pink-800 text-xs text-gray-700 dark:text-gray-300 space-y-1.5 my-3">
            <p><strong>Cấu trúc biến hóa:</strong> Thay đổi nhịp điệu (2/4, 3/4, 4/4), thay đổi tốc độ (chậm rãi, dồn dập, lắng đọng), thay đổi tính chất âm nhạc từ trữ tình, miêu tả sang tráng ca hào sảng.</p>
            <p><strong>Trường ca tiêu biểu Việt Nam:</strong> <em>Trường ca sông Lô</em> (Văn Cao), <em>Người Hà Nội</em> (Nguyễn Đình Thi), <em>Sông Lô chiều dân quân</em> (Đỗ Nhuận), <em>Du kích sông Thao</em> (Đỗ Nhuận), <em>Hòn vọng phu</em> (Lê Thương)...</p>
          </div>
        `
      },
      {
        title: "2. Phân tích kiệt tác 'Trường ca sông Lô' (1947) của Văn Cao",
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>Nhạc sĩ Phạm Duy từng ca ngợi: <em>'Trường ca sông Lô là một kỳ quan của âm nhạc Việt Nam, tác phẩm vượt ra khỏi khuôn khổ thông thường để trở thành một bản giao hưởng bằng thanh nhạc.'</em></p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-2 text-xs">
              <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <strong class="text-blue-600 block mb-1">Đoạn 1: Bức tranh dòng sông</strong>
                <em>'Sông Lô, sóng ngàn Việt Bắc bãi dài ngô lau núi rừng âm u...'</em> Giai điệu trầm hùng, mênh mang vẽ nên vẻ đẹp thiên nhiên hùng vĩ của chiến khu.
              </div>
              <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <strong class="text-rose-600 block mb-1">Đoạn 2: Chiến trận oai hùng</strong>
                Tiết tấu chuyển nhanh, dồn dập, mô phỏng tiếng súng pháo rền vang, dòng nước cuộn sóng nhấn chìm tàu giặc Pháp trong lửa đạn.
              </div>
              <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <strong class="text-emerald-600 block mb-1">Đoạn 3: Khúc khải hoàn</strong>
                Giai điệu vui tươi, rộn rã đón đoàn quân chiến thắng trở về, niềm tin tất thắng vào tương lai tươi sáng của dân tộc.
              </div>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Nghe trọn vẹn tác phẩm 'Trường ca sông Lô' và ghi chép lại các đoạn chuyển đổi tính chất âm nhạc.",
      "Tập hát trích đoạn mở đầu bản trường ca với cao độ chuẩn xác và hơi thở hào sảng.",
      "Thảo luận: Nghệ thuật miêu tả hình tượng sông nước trong 'Trường ca sông Lô' có gì độc đáo?"
    ],
    summary: "Trường ca là tác phẩm thanh nhạc quy mô lớn mang tính sử thi. 'Trường ca sông Lô' (1947) của nhạc sĩ Văn Cao là đỉnh cao chói lọi của âm nhạc kháng chiến, kết hợp nhuần nhuyễn giữa vẻ đẹp hùng vĩ của thiên nhiên Việt Bắc và chiến công oanh liệt của quân dân ta.",
    quizzes: [
      {
        q: "Tác phẩm 'Trường ca sông Lô' được nhạc sĩ Văn Cao sáng tác gắn liền với sự kiện lịch sử nào?",
        options: [
          "Chiến thắng Điện Biên Phủ 1954",
          "Chiến thắng Việt Bắc thu đông 1947 trên dòng sông Lô",
          "Cách mạng Tháng Tám 1945",
          "Chiến dịch Hồ Chí Minh 1975"
        ],
        correctIndex: 1,
        explain: "Tác phẩm ra đời ngay sau chiến thắng vang dội của bộ đội ta đánh chìm đoàn tàu chiến Pháp trên sông Lô năm 1947."
      },
      {
        q: "Đặc điểm nổi bật của thể loại Trường ca trong âm nhạc là gì?",
        options: [
          "Quy mô tác phẩm lớn, nhiều đoạn/chương nhạc mang tính sử thi, biến đổi phong phú về nhịp điệu và cảm xúc",
          "Chỉ gồm 2 câu nhạc ngắn lặp đi lặp lại",
          "Tác phẩm không có lời hát",
          "Chỉ được diễn tấu bởi một nhạc cụ gõ duy nhất"
        ],
        correctIndex: 0,
        explain: "Trường ca là tác phẩm thanh nhạc đồ sộ, nhiều chương đoạn, thể hiện bức tranh lịch sử mang tầm sử thi."
      },
      {
        q: "Câu hát mở đầu bất hủ của kiệt tác 'Trường ca sông Lô' là câu nào?",
        options: [
          "Đoàn quân Việt Nam đi, chung lòng cứu quốc...",
          "Sông Lô, sóng ngàn Việt Bắc bãi dài ngô lau núi rừng âm u...",
          "Hà Nội cháy, khói son rợp trời...",
          "Rừng cọ đồi chè, đồng xanh ngào ngạt..."
        ],
        correctIndex: 1,
        explain: "Câu mở đầu nổi tiếng: 'Sông Lô, sóng ngàn Việt Bắc bãi dài ngô lau núi rừng âm u...'."
      },
      {
        q: "Tại sao giới nghiên cứu âm nhạc lại ví 'Trường ca sông Lô' như một bản 'giao hưởng thanh nhạc'?",
        options: [
          "Vì bài hát quá ngắn chỉ hát trong 30 giây",
          "Vì sự phong phú về bố cục, giai điệu nhiều tầng lớp, tương phản màu sắc và tính tư tưởng triết lý sâu sắc",
          "Vì bài hát do nhạc sĩ người nước ngoài hòa âm",
          "Vì bài hát không có giai điệu rõ ràng"
        ],
        correctIndex: 1,
        explain: "Tác phẩm sở hữu cấu trúc nhiều phần tương phản kịch tính, phát triển chủ đề phức điệu mẫu mực như một bản giao hưởng."
      }
    ]
  },

  // ================= BÀI 13 =================
  {
    num: 13,
    topicNum: 7,
    title: "Bài 13: Kỹ thuật hát bè hòa âm và Hát đuổi (Canon)",
    badgeColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300",
    dotColor: "bg-cyan-500",
    time: "45 phút",
    target: "Hiểu bản chất của kỹ thuật hát bè hòa âm (2 bè, 3 bè) và hát đuổi (Canon); Rèn luyện kỹ năng giữ vững cao độ của bè mình trong khi lắng nghe bè bạn; Cảm nhận sự hòa quyện âm thanh phong phú khi nhiều bè kết hợp.",
    intro: "Một giọng hát đơn lẻ có thể rất hay, nhưng khi nhiều giọng hát cất lên với các tầng cao độ khác nhau hòa quyện lại, âm thanh sẽ trở nên lộng lẫy và thiêng liêng lạ kỳ. Làm thế nào để không bị 'hút' sang bè của bạn khi hát bè?",
    sections: [
      {
        title: "1. Kỹ thuật hát bè hòa âm (Harmony Singing)",
        content: `
          <p class="mb-3">
            <strong>Hát bè (Vocal Harmony):</strong> Là hình thức thể hiện bài hát có từ 2 bè trở lên cùng vang lên một lúc. Mỗi bè đi theo một đường nét giai điệu khác nhau nhưng khi kết hợp lại tạo thành những chùm hòa âm (thường là quãng 3, quãng 6 hoặc hợp âm ba) hoàn mỹ.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-cyan-50 dark:bg-cyan-950/40 rounded-xl border border-cyan-200 dark:border-cyan-800">
              <h5 class="font-bold text-cyan-700 dark:text-cyan-300 uppercase mb-1">Bè chính (Melody / Soprano)</h5>
              <p class="text-gray-600 dark:text-gray-300">Đảm nhận giai điệu gốc của bài hát, dẫn dắt câu chuyện âm nhạc và lời ca rõ ràng nhất.</p>
            </div>
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 uppercase mb-1">Bè hòa âm (Harmony / Alto / Tenor)</h5>
              <p class="text-gray-600 dark:text-gray-300">Đi song song phía dưới hoặc phía trên bè chính (thường cách quãng 3), làm dày âm thanh và tạo chiều sâu không gian.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Kỹ thuật hát đuổi (Canon)",
        content: `
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300 space-y-2 my-3">
            <p><strong>Khái niệm Canon:</strong> Là hình thức nhiều bè cùng hát <em>chung một giai điệu duy nhất</em>, nhưng các bè xuất phát <em>lệch thời gian nhau</em> (bè 2 vào sau bè 1 khoảng 1 hoặc 2 ô nhịp). Sự chồng chéo các câu nhạc tạo nên hiệu ứng sóng cuộn đuổi nhau kỳ ảo.</p>
            <p><strong>Bí quyết thực hành:</strong> Mỗi người phải tập trung tuyệt đối vào nhịp phách của bè mình, đồng thời mở tai lắng nghe bè đối phương để điều chỉnh âm lượng cân bằng, không bè nào lấn át bè nào.</p>
          </div>
        `
      }
    ],
    practice: [
      "Thực hành hát đuổi Canon 2 bè một bài hát thiếu nhi quen thuộc (như 'Đội kèn tí hon' hoặc 'Frère Jacques').",
      "Luyện tập bài xướng âm 2 bè: Bè 1 hát F - G - A - F, Bè 2 hát D - E - F - D (hòa âm quãng 3).",
      "Chia nhóm 4 người thử nghiệm hát bè hòa âm một đoạn điệp khúc ca khúc tuổi học trò."
    ],
    summary: "Hát bè hòa âm kết hợp các bè khác cao độ tạo nên chùm hòa âm phong phú. Hát đuổi (Canon) là kỹ thuật các bè hát cùng một giai điệu nhưng vào lệch nhau về thời gian, đòi hỏi khả năng giữ cao độ và nhịp phách vững vàng.",
    quizzes: [
      {
        q: "Kỹ thuật hát đuổi (Canon) trong âm nhạc có đặc trưng cốt lõi nào?",
        options: [
          "Các bè hát các giai điệu hoàn toàn khác nhau cùng một lúc",
          "Các bè cùng hát chung một giai điệu nhưng bắt đầu lệch thời gian nhau (bè sau vào sau bè trước)",
          "Chỉ một người hát còn cả lớp im lặng",
          "Hát thật to và nhanh dần đều về cuối"
        ],
        correctIndex: 1,
        explain: "Canon là hình thức phức điệu mô phỏng: các bè hát cùng một bài nhưng vào sau nhau một khoảng thời gian."
      },
      {
        q: "Khoảng cách quãng phổ biến và êm dịu nhất thường được dùng để phối bè hòa âm 2 bè là quãng nào?",
        options: ["Quãng 2 (nửa cung)", "Quãng 3 và Quãng 6", "Quãng 7 (nghịch)", "Quãng 1 (đồng âm)"],
        correctIndex: 1,
        explain: "Quãng 3 và quãng 6 là các quãng thuận không hoàn toàn, tạo cảm giác hòa quyện êm ái và đầy đặn nhất khi hát bè."
      },
      {
        q: "Yếu tố quan trọng nhất giúp một ca sĩ không bị 'lạc giọng' hay bị bè bạn 'hút' mất giai điệu khi hát hợp ca là gì?",
        options: [
          "Hát to hết cỡ để át tiếng bè bên cạnh",
          "Bịt cả hai tai lại không nghe gì",
          "Nắm vững chắc cao độ và nhịp phách bè mình, đồng thời biết lắng nghe điều tiết âm lượng chung",
          "Nhìn sang miệng bạn bên cạnh để bắt chước"
        ],
        correctIndex: 2,
        explain: "Người hát bè giỏi phải làm chủ vững vàng bè của mình và có đôi tai nhạy bén lắng nghe tổng thể."
      },
      {
        q: "Hình thức hợp xướng 4 bè hỗn hợp truyền thống trong âm nhạc cổ điển viết tắt là SATB gồm những giọng nào?",
        options: [
          "Soprano (Nữ cao), Alto (Nữ trầm), Tenor (Nam cao), Bass (Nam trầm)",
          "Solo, Accordion, Tambourine, Bass",
          "Short, Average, Tall, Big",
          "Sonata, Aria, Trio, Ballad"
        ],
        correctIndex: 0,
        explain: "SATB đại diện cho 4 bè cơ bản: Soprano (Nữ cao), Alto (Nữ trầm), Tenor (Nam cao), Bass (Nam trầm)."
      }
    ]
  },

  // ================= BÀI 14 =================
  {
    num: 14,
    topicNum: 7,
    title: "Bài 14: Nghệ thuật chỉ huy âm nhạc (Conducting) và Sơ đồ đánh nhịp",
    badgeColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300",
    dotColor: "bg-cyan-500",
    time: "45 phút",
    target: "Hiểu vai trò của người chỉ huy (Nhạc trưởng / Conductor) đối với dàn hợp xướng và dàn nhạc; Thực hiện chuẩn xác tư thế chỉ huy và sơ đồ đánh nhịp 2/4, 3/4, 4/4; Làm chủ kỹ thuật lấy đà (Anacrusis), giữ nhịp, xử lý cường độ to/nhỏ và kết bài.",
    intro: "Một dàn nhạc có thể quy tụ cả trăm nghệ sĩ tài năng xuất chúng, nhưng nếu không có cây đũa chỉ huy của nhạc trưởng, dàn nhạc sẽ trở thành mớ âm thanh hỗn độn. Bàn tay của người chỉ huy mang lại sức mạnh gì?",
    sections: [
      {
        title: "1. Vai trò của người chỉ huy âm nhạc (Conductor)",
        content: `
          <p class="mb-3">
            <strong>Người chỉ huy (Conductor / Nhạc trưởng):</strong> Là "linh hồn", là người truyền lửa và thống nhất tư duy nghệ thuật của toàn bộ dàn hợp xướng hoặc dàn nhạc. Người chỉ huy không tạo ra âm thanh trực tiếp nhưng điều khiển:
          </p>
          <ul class="text-xs text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1 my-2">
            <li><strong>Tốc độ (Tempo) & Nhịp phách:</strong> Giữ tốc độ ổn định, thúc đẩy nhanh (Accelerando) hoặc chậm lại (Ritardando).</li>
            <li><strong>Cường độ & Sắc thái:</strong> Điều tiết âm lượng to (Forte), nhỏ (Piano), tăng dần (Crescendo), giảm dần (Decrescendo).</li>
            <li><strong>Sự cân bằng giữa các bè:</strong> Nhắc nhở bè đệm chơi nhỏ lại để bè chính cất lên rõ ràng.</li>
            <li><strong>Bắt nhịp & Ngắt bài:</strong> Đưa ra hiệu lệnh vào bè chuẩn xác từng tích tắc.</li>
          </ul>
        `
      },
      {
        title: "2. Sơ đồ các động tác đánh nhịp cơ bản",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3 text-xs">
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">Nhịp 2/4 (2 phách)</strong>
              Phách 1 đánh thẳng xuống (phách mạnh). Phách 2 hất chéo lên trên về vị trí ban đầu (phách nhẹ).
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-purple-600 dark:text-purple-400 block mb-1">Nhịp 3/4 (3 phách)</strong>
              Phách 1 xuống (mạnh). Phách 2 sang ngang bên phải (nhẹ). Phách 3 hất chéo lên trên về vị trí xuất phát (nhẹ).
            </div>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <strong class="text-teal-600 dark:text-teal-400 block mb-1">Nhịp 4/4 (4 phách)</strong>
              Phách 1 xuống (mạnh). Phách 2 sang trái (nhẹ). Phách 3 sang phải (mạnh vừa). Phách 4 hất lên trên (nhẹ).
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Đứng đúng tư thế chỉ huy: lưng thẳng, hai tay giơ ngang ngực, bàn tay thả lỏng mềm mại.",
      "Luyện tập thuần thục sơ đồ đánh nhịp 2/4 và 4/4 theo tiếng máy đập nhịp Metronome (tốc độ 80 bpm).",
      "Thực hành động tác lấy đà (hít vào - giơ tay) và báo hiệu kết bài (nắm nhẹ tay) cho một nhóm bạn cùng hát."
    ],
    summary: "Người chỉ huy điều tiết tốc độ, nhịp phách, cường độ và sự hòa quyện của toàn dàn nhạc/hợp xướng. Nắm vững sơ đồ đánh nhịp 2/4, 3/4, 4/4 và động tác lấy đà là kỹ năng nền tảng của nghệ thuật chỉ huy.",
    quizzes: [
      {
        q: "Trong sơ đồ đánh nhịp của người chỉ huy, phách mạnh đầu tiên của mỗi ô nhịp luôn đi theo hướng nào?",
        options: ["Hất lên trên đỉnh đầu", "Đánh thẳng từ trên xuống dưới", "Chỉ sang bên trái", "Xoay vòng tròn"],
        correctIndex: 1,
        explain: "Phách 1 (phách mạnh nhất) trong tất cả các sơ đồ chỉ huy luôn luôn là động tác rơi thẳng dứt khoát từ trên xuống."
      },
      {
        q: "Động tác 'lấy đà' (Anacrusis / Preparation) của người chỉ huy trước khi bắt đầu bài hát có ý nghĩa gì?",
        options: [
          "Để tập thể dục khởi động cơ tay",
          "Báo hiệu trước cho dàn nhạc/hợp xướng chuẩn bị hơi thở, nhịp độ và sắc thái để cùng cất tiếng đồng thanh phách đầu tiên",
          "Nhắc khán giả giữ im lặng",
          "Kêu gọi vỗ tay tán thưởng"
        ],
        correctIndex: 1,
        explain: "Động tác lấy đà chuẩn xác giúp toàn bộ ca sĩ hít thở cùng một lúc và vào nhịp chuẩn xác tuyệt đối."
      },
      {
        q: "Trong sơ đồ nhịp 4/4, phách số 2 di chuyển theo hướng nào sau phách 1 đánh xuống?",
        options: ["Di chuyển sang bên trái (vào trong)", "Di chuyển sang bên phải (ra ngoài)", "Hất thẳng lên trời", "Đánh thụt lùi ra sau"],
        correctIndex: 0,
        explain: "Quy chuẩn chỉ huy nhịp 4/4 của tay phải: Phách 1 xuống, Phách 2 sang trái, Phách 3 sang phải, Phách 4 lên."
      },
      {
        q: "Bàn tay trái của người chỉ huy thường ưu tiên thể hiện điều gì nhiều nhất khi tay phải đang giữ nhịp?",
        options: [
          "Cầm bản nhạc đọc lời",
          "Báo hiệu sắc thái biểu cảm, to/nhỏ (Dynamics) và nhắc nhở thời điểm vào bè của từng nhóm",
          "Đút vào túi áo cho lịch sự",
          "Lặp lại y hệt 100% động tác tay phải"
        ],
        correctIndex: 1,
        explain: "Tay phải chủ yếu giữ nhịp độ và phách, trong khi tay trái là bàn tay biểu cảm điều tiết sắc thái to nhỏ và đón bè."
      }
    ]
  },

  // ================= BÀI 15 =================
  {
    num: 15,
    topicNum: 8,
    title: "Bài 15: Âm nhạc với sự hình thành nhân cách và Trị liệu âm nhạc (Music Therapy)",
    badgeColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300",
    dotColor: "bg-orange-500",
    time: "45 phút",
    target: "Hiểu tác động sâu sắc của sóng âm và giai điệu tới não bộ, tâm lý và cảm xúc con người; Nhận thức vai trò của âm nhạc trong giáo dục thẩm mỹ và hoàn thiện nhân cách; Khám phá ngành khoa học hiện đại: Liệu pháp trị liệu âm nhạc (Music Therapy).",
    intro: "Từ hàng ngàn năm trước, nhà triết học Hy Lạp cổ đại Plato đã viết: 'Âm nhạc đem lại linh hồn cho vũ trụ, đôi cánh cho tâm trí và sự sống cho mọi thứ'. Khoa học hiện đại đã chứng minh âm nhạc chữa lành tâm hồn con người như thế nào?",
    sections: [
      {
        title: "1. Tác động của âm nhạc đối với não bộ và sự phát triển nhân cách",
        content: `
          <p class="mb-3">
            Nghiên cứu khoa học thần kinh chỉ ra rằng, khi nghe hoặc chơi nhạc, <strong>toàn bộ các vùng não bộ</strong> (thị giác, thính giác, vận động, cảm xúc và tư duy logic) đều được kích hoạt đồng thời như một buổi 'đại tập dượt thần kinh':
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 space-y-1">
              <h5 class="font-bold text-rose-700 dark:text-rose-300 uppercase">Phát triển trí tuệ cảm xúc (EQ)</h5>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Giúp học sinh nuôi dưỡng lòng trắc ẩn, sự đồng cảm sâu sắc với tha nhân, biết rung động trước cái đẹp và bài trừ những hành vi bạo lực, thô lỗ trong cuộc sống.
              </p>
            </div>
            <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 space-y-1">
              <h5 class="font-bold text-purple-700 dark:text-purple-300 uppercase">Rèn luyện tính kỷ luật & Tập trung</h5>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Học một nhạc cụ đòi hỏi sự kiên trì luyện tập hàng tháng, hàng năm. Tác phong này giúp hình thành tính kiên nhẫn, tính tổ chức và khả năng tập trung cao độ trong mọi công việc.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Liệu pháp trị liệu âm nhạc (Music Therapy) trong y học hiện đại",
        content: `
          <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-gray-700 dark:text-gray-300 space-y-2 my-3">
            <p><strong>Khái niệm Trị liệu âm nhạc:</strong> Là phương pháp y khoa sử dụng các can thiệp âm nhạc có chủ đích (nghe nhạc chuyên sâu, sáng tác, chơi nhạc cụ, hát) do các chuyên gia trị liệu được cấp chứng chỉ thực hiện.</p>
            <p><strong>Ứng dụng lâm sàng:</strong> Giảm hormone cortisol (hormone căng thẳng), kích thích sản sinh dopamine và endorphin (hormone hạnh phúc); hỗ trợ phục hồi sau đột quỵ, điều trị chứng mất ngủ, trầm cảm học đường và hỗ trợ can thiệp cho trẻ tự kỷ.</p>
          </div>
        `
      }
    ],
    practice: [
      "Thực hành trải nghiệm 'Nghe nhạc tĩnh tâm': Nghe 5 phút bản Nocturne của Chopin và ghi lại trạng thái thư giãn của cơ thể.",
      "Thiết lập một danh sách bài hát (Playlist) cá nhân phục vụ cho việc học tập trung và giảm bớt âu lo trước kỳ thi.",
      "Chia sẻ cảm nghĩ về một ca khúc từng giúp em vượt qua nỗi buồn hoặc biến cố trong cuộc sống."
    ],
    summary: "Âm nhạc kích hoạt toàn bộ mạng lưới nơ-ron não bộ, nâng cao trí tuệ cảm xúc và bồi đắp nhân cách nhân văn. Ngành Trị liệu âm nhạc (Music Therapy) ứng dụng sức mạnh giai điệu để giảm stress, điều hòa tâm lý và phục hồi sức khỏe con người.",
    quizzes: [
      {
        q: "Hoạt động nào sau đây kích hoạt đồng thời gần như tất cả các vùng chức năng của não bộ cùng một lúc?",
        options: [
          "Chơi và diễn tấu một loại nhạc cụ",
          "Ngủ một giấc thật sâu",
          "Xem màn hình điện thoại thụ động",
          "Nhìn vào một bức tường trắng"
        ],
        correctIndex: 0,
        explain: "Khoa học thần kinh chứng minh việc chơi nhạc cụ kết hợp vận động ngón tay, mắt đọc nốt, tai nghe cao độ và cảm xúc."
      },
      {
        q: "Ngành Trị liệu âm nhạc (Music Therapy) trong y tế có mục đích chính là gì?",
        options: [
          "Bắt buộc bệnh nhân phải trở thành ca sĩ chuyên nghiệp",
          "Sử dụng âm nhạc một cách có chủ đích khoa học để giảm căng thẳng, phục hồi tâm lý và chức năng thể chất",
          "Bán đĩa nhạc kiếm lợi nhuận thương mại",
          "Thay thế hoàn toàn thức ăn và nước uống"
        ],
        correctIndex: 1,
        explain: "Trị liệu âm nhạc là ngành khoa học ứng dụng giai điệu và âm thanh để nâng đỡ thể chất và tâm lý người bệnh."
      },
      {
        q: "Chất dẫn truyền thần kinh nào được não bộ tiết ra khi nghe một bản nhạc yêu thích, mang lại cảm giác hân hoan, hạnh phúc?",
        options: ["Adrenaline", "Dopamine và Endorphin", "Melanin", "Cholesterol"],
        correctIndex: 1,
        explain: "Âm nhạc kích thích mạnh mẽ việc giải phóng Dopamine - chất hóa học tạo cảm xúc hưng phấn và hạnh phúc."
      },
      {
        q: "Việc học tập và biểu diễn âm nhạc tập thể (như hợp xướng, dàn nhạc) giúp học sinh rèn luyện kỹ năng xã hội nào?",
        options: [
          "Tính ích kỷ, chỉ quan tâm đến cá nhân mình",
          "Tinh thần đồng đội, sự nhường nhịn, lắng nghe và hợp tác cùng phát triển",
          "Thói quen thích tranh cãi với bạn bè",
          "Sự lười biếng, ỷ lại vào người khác"
        ],
        correctIndex: 1,
        explain: "Diễn tấu tập thể dạy cho học sinh biết nhường nhịn bè bạn, lắng nghe người khác để cùng tạo nên âm thanh hài hòa."
      }
    ]
  },

  // ================= BÀI 16 =================
  {
    num: 16,
    topicNum: 8,
    title: "Bài 16: Đổi mới sáng tạo trong âm nhạc và Bản quyền nghệ thuật số",
    badgeColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300",
    dotColor: "bg-orange-500",
    time: "45 phút",
    target: "Nắm vững các xu hướng kết hợp giữa âm nhạc truyền thống dân tộc với các phong cách đương đại (World Music, Folk Pop); Hiểu tầm quan trọng của việc bảo vệ bản quyền tác phẩm âm nhạc trên không gian mạng; Xây dựng ý thức tôn trọng chất xám nghệ sĩ của công dân số văn minh.",
    intro: "Trong kỷ nguyên số hóa và trí tuệ nhân tạo, âm nhạc Việt Nam đang vươn mình ra biển lớn với những tác phẩm kết hợp nhạc cụ dân tộc độc đáo với nhạc điện tử hiện đại. Làm sao để vừa đổi mới sáng tạo, vừa giữ trọn vẹn bản quyền và danh dự của người làm nghệ thuật?",
    sections: [
      {
        title: "1. Xu hướng kết hợp giữa Âm nhạc truyền thống và Đương đại (World Music)",
        content: `
          <p class="mb-3">
            Một trong những dòng chảy rực rỡ nhất của âm nhạc Việt Nam thế kỷ XXI là sự giao thoa giữa <strong>chất liệu dân ca, nhạc cụ cổ truyền (Đàn bầu, Đàn tranh, Khèn, Sáo trúc)</strong> với <strong>phong cách hiện đại (Pop, Electronic, Hip-hop, R&B)</strong>:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs text-gray-700 dark:text-gray-300">
            <div class="p-3.5 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800 space-y-1">
              <strong class="text-orange-700 dark:text-orange-300 uppercase block">Thành tựu tiêu biểu</strong>
              <p class="leading-relaxed">Những dự án đình đám của Hoàng Thùy Linh, Hòa Minzy, Đen Vâu, DTAP... mang tiếng cồng chiêng, điệu chèo, quan họ và lời ru vào âm hưởng EDM bùng nổ, tạo nên sức hút khổng lồ với giới trẻ toàn cầu.</p>
            </div>
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-1">
              <strong class="text-blue-700 dark:text-blue-300 uppercase block">Ý nghĩa văn hóa</strong>
              <p class="leading-relaxed">Giúp di sản âm nhạc cha ông không bị lãng quên trong bảo tàng mà tiếp tục 'sống' mãnh liệt, hòa nhập nhưng không hòa tan trong dòng chảy toàn cầu hóa.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Bản quyền âm nhạc và Hành xử văn minh trên không gian số",
        content: `
          <div class="space-y-2.5 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            <p><strong>Luật Sở hữu trí tuệ:</strong> Bài hát, bản hòa âm, bản ghi âm là tài sản trí tuệ được pháp luật bảo vệ. Hành vi vi phạm bao gồm: Tự ý cover thương mại, dùng nhạc nền video mà không xin phép/trả tiền tác quyền, đạo nhạc (Plagiarism), hoặc phát hành lậu.</p>
            <p><strong>Hành vi của người dùng văn minh:</strong> Nghe nhạc trên các nền tảng có bản quyền chính thức (Spotify, Apple Music, YouTube Music, Zing MP3...); ghi rõ nguồn tác giả/nhạc sĩ khi sử dụng; lên án các hành vi ăn cắp bản quyền trí tuệ.</p>
          </div>
        `
      }
    ],
    practice: [
      "Nghe và phân tích một bài hát đương đại Việt Nam có sử dụng nhạc cụ dân tộc (ví dụ: 'Để Mị nói cho mà nghe', 'Thị Mầu'...).",
      "Thảo luận về vấn đề: Ứng dụng trí tuệ nhân tạo (AI Music Generator) trong sáng tác nhạc và quyền tác giả thuộc về ai?",
      "Xây dựng cam kết cá nhân về việc tôn trọng bản quyền âm nhạc trên mạng xã hội."
    ],
    summary: "Đổi mới sáng tạo âm nhạc kết hợp giữa di sản dân tộc và công nghệ số là con đường đưa âm nhạc Việt Nam hội nhập thế giới. Tôn trọng bản quyền tác giả và ủng hộ âm nhạc có bản quyền là trách nhiệm đạo đức của mỗi công dân trong xã hội số.",
    quizzes: [
      {
        q: "Xu hướng âm nhạc kết hợp giữa nhạc cụ, làn điệu dân gian truyền thống với các phong cách nhạc điện tử hiện đại thường được gọi là gì?",
        options: ["Nhạc Baroque", "World Music / Folk Pop đương đại", "Nhạc Cổ điển Vienna", "Nhạc Thính phòng thế kỷ 18"],
        correctIndex: 1,
        explain: "World Music / Folk Pop đương đại là xu hướng giao thoa giữa bản sắc truyền thống bản địa và âm hưởng hiện đại."
      },
      {
        q: "Hành vi nào sau đây vi phạm nghiêm trọng Luật Sở hữu trí tuệ trong lĩnh vực âm nhạc?",
        options: [
          "Nghe nhạc qua tài khoản có đăng ký trả phí trên nền tảng chính thống",
          "Tự ý tải nhạc của người khác về lồng vào video quảng cáo kiếm tiền mà không xin phép tác giả",
          "Mua đĩa CD gốc có chữ ký của nghệ sĩ",
          "Chia sẻ bài hát chính thức từ kênh YouTube của tác giả về trang cá nhân kèm ghi nguồn"
        ],
        correctIndex: 1,
        explain: "Sử dụng tác phẩm của tác giả vì mục đích thương mại mà chưa có sự đồng ý hoặc trả phí tác quyền là hành vi xâm phạm bản quyền."
      },
      {
        q: "Tổ chức nào tại Việt Nam hiện nay đại diện tập thể quản lý và thu tiền tác quyền âm nhạc cho hàng ngàn nhạc sĩ?",
        options: [
          "VCPMC (Trung tâm Bảo vệ Quyền tác giả Âm nhạc Việt Nam)",
          "Bộ Giao thông Vận tải",
          "Hiệp hội Du lịch",
          "Liên đoàn Bóng đá"
        ],
        correctIndex: 0,
        explain: "VCPMC (Vietnam Center for Protection of Music Copyright) là cơ quan bảo vệ quyền tác giả âm nhạc hàng đầu tại Việt Nam."
      },
      {
        q: "Để xây dựng nền văn hóa âm nhạc lành mạnh và bền vững, thái độ đúng đắn nhất của học sinh là gì?",
        options: [
          "Tìm mọi cách tải nhạc lậu miễn phí",
          "Tôn trọng công sức lao động của nghệ sĩ, ủng hộ các sản phẩm có bản quyền và ứng xử văn minh trên mạng xã hội",
          "Tẩy chay tất cả các tác phẩm âm nhạc truyền thống",
          "Chỉ nghe nhạc sao chép không rõ nguồn gốc"
        ],
        correctIndex: 1,
        explain: "Tôn trọng chất xám, công sức của nghệ sĩ và sử dụng sản phẩm có bản quyền là biểu hiện của người thưởng thức văn minh."
      }
    ]
  }
];
