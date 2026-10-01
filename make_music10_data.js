// Data for Grade 10 Music (Âm nhạc Lớp 10 - Chương trình GDPT 2018)
// 8 Topics, 16 Comprehensive Lessons, 64 Interactive Quizzes

module.exports = [
  // ================= BÀI 1 =================
  {
    num: 1,
    topicNum: 1,
    title: "Bài 1: Hát và Kỹ thuật phát thanh cơ bản",
    badgeColor: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300",
    dotColor: "bg-rose-500",
    time: "45 phút",
    target: "Nắm vững tư thế ca hát chuẩn mực và cơ chế hô hấp thở bụng (cơ hoành); Phân biệt và thực hiện được kỹ thuật hát liền tiếng (Legato) và hát nảy tiếng (Staccato); Mở rộng âm vực qua các mẫu luyện thanh âm A, O, U, I.",
    intro: "Giọng hát là nhạc cụ tự nhiên kỳ diệu nhất mà tạo hóa ban tặng cho con người. Làm thế nào để điều khiển hơi thở và khẩu hình để có một giọng hát vang, sáng, truyền cảm và không bị khản tiếng?",
    sections: [
      {
        title: "1. Tư thế ca hát và Kỹ thuật hơi thở cơ hoành (Thở bụng)",
        content: `
          <p class="mb-3">
            Hơi thở là "nguồn sống", là động lực tạo nên cột âm thanh khi ca hát. Người hát chuyên nghiệp sử dụng kỹ thuật hô hấp ngực - bụng (chủ yếu là <strong>cơ hoành</strong>):
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-4 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
              <h5 class="font-bold text-rose-700 dark:text-rose-300 text-xs sm:text-sm uppercase mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-person-standing"></i> Tư thế hát chuẩn
              </h5>
              <ul class="text-xs text-gray-600 dark:text-gray-300 space-y-1 leading-relaxed">
                <li><strong>Đứng hát:</strong> Hai chân rộng bằng vai, trọng tâm cơ thể vững vàng, lưng thẳng tự nhiên, hai vai buông lỏng thả lỏng, ngực hơi ưỡn, đầu ngay ngắn không ngửa hay cúi gập.</li>
                <li><strong>Ngồi hát:</strong> Ngồi ngay ngắn ở 1/2 phía trước mặt ghế, hai bàn chân đặt phẳng trên sàn, lưng không tựa vào thành ghế để giải phóng cơ hoành.</li>
              </ul>
            </div>
            <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
              <h5 class="font-bold text-purple-700 dark:text-purple-300 text-xs sm:text-sm uppercase mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-wind"></i> 3 pha của hơi thở thanh nhạc
              </h5>
              <ul class="text-xs text-gray-600 dark:text-gray-300 space-y-1 leading-relaxed">
                <li><strong>1. Lấy hơi (Hít vào):</strong> Hít sâu nhẹ nhàng bằng cả mũi và miệng, hạ cơ hoành xuống làm phình nhẹ vùng bụng dưới và mạng sườn; không nhấc vai.</li>
                <li><strong>2. Nén hơi (Giữ hơi):</strong> Giữ luồng khí ổn định trong tích tắc để chuẩn bị bật âm thanh.</li>
                <li><strong>3. Đẩy hơi (Thở ra - phát âm):</strong> Điều tiết luồng hơi thoát ra từ từ, đều đặn theo từng cao độ của nốt nhạc.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Kỹ thuật hát liền tiếng (Legato) và Hát nảy tiếng (Staccato)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-wave-square"></i> Hát liền tiếng (Legato)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Các âm thanh được nối tiếp nhau một cách êm ái, mượt mà, liên tục không có khoảng lặng ngắt quãng. Cần duy trì áp lực hơi thở đều đặn và chuyển khẩu hình nguyên âm mềm mại. Thường dùng trong các ca khúc trữ tình, êm dịu, da diết.
              </p>
            </div>
            <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <h5 class="font-bold text-amber-700 dark:text-amber-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-ellipsis"></i> Hát nảy tiếng (Staccato)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Mỗi âm thanh được phát ra sắc gọn, dứt khoát, bật nảy và ngắt rời nhau bởi sự co bóp linh hoạt, đàn hồi của cơ bụng. Thường dùng trong các bài hát vui tươi, dí dỏm, hoạt bát, hành khúc khẩn trương.
              </p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Thực hiện bài tập hít thở cơ hoành: Hít vào sâu đếm thầm 4 nhịp (bụng phình ra), nén hơi 4 nhịp, và thở ra xì nhẹ chữ 'S' đều đặn trong 16 nhịp.",
      "Luyện thanh mẫu âm nguyên âm 'Ma - Me - Mi - Mo - Mu' theo thang âm 5 bậc từ Đô đến Sol và ngược lại.",
      "Áp dụng kỹ thuật Legato để thể hiện câu hát đầu tiên của bài hát 'Mùa thu ngày khai trường' và Staccato trong điệp khúc bài hát sinh hoạt tập thể."
    ],
    summary: "Ca hát chuẩn mực đòi hỏi tư thế ngay ngắn, thả lỏng và kiểm soát hơi thở bụng (cơ hoành). Kỹ thuật Legato tạo nên giai điệu mượt mà, êm ái; kỹ thuật Staccato tạo nên âm thanh sắc gọn, nảy vui tươi.",
    quizzes: [
      {
        q: "Khi lấy hơi đúng kỹ thuật trong ca hát (hô hấp cơ hoành), bộ phận nào trên cơ thể sẽ chuyển động phình nhẹ ra ngoài?",
        options: ["Hai bên bả vai nhấc cao lên", "Vùng bụng dưới và hai bên mạng sườn", "Lồng ngực co thắt lại", "Cổ rụt lại"],
        correctIndex: 1,
        explain: "Khi cơ hoành hạ xuống để hút không khí vào đáy phổi, vùng bụng và mạng sườn sẽ nở rộng nhẹ nhàng mà vai không bị nhấc lên."
      },
      {
        q: "Kỹ thuật thanh nhạc nào đòi hỏi các âm thanh được phát ra liền mạch, êm ái, mượt mà nối tiếp nhau không bị đứt đoạn?",
        options: ["Staccato", "Legato", "Falsetto", "Vibrato"],
        correctIndex: 1,
        explain: "Legato trong thuật ngữ âm nhạc tiếng Ý có nghĩa là 'liền tiếng', biểu diễn các nốt nhạc nối kết êm dịu."
      },
      {
        q: "Đặc điểm cơ bản của kỹ thuật hát nảy tiếng (Staccato) là gì?",
        options: ["Hát thật to và ngân thật dài", "Các âm thanh phát ra sắc gọn, dứt khoát, nảy và ngắt rời nhau", "Hát thì thầm không ra tiếng", "Hát thật nhanh không thở"],
        correctIndex: 1,
        explain: "Staccato là kỹ thuật hát nảy âm, các nốt được hát gọn gàng và ngắt rời nhau nhờ phản xạ cơ bụng đàn hồi."
      },
      {
        q: "Để có giọng hát vang sáng và âm sắc tròn trịa, khẩu hình miệng của người hát cần như thế nào?",
        options: ["Mím chặt hai môi", "Mở rộng vòm họng tự nhiên như khi ngáp ngủ, hàm dưới thả lỏng", "Nghiến răng thật chặt", "Chỉ mở hé đầu môi"],
        correctIndex: 1,
        explain: "Cảm giác mở vòm họng như khi chuẩn bị ngáp giúp tạo khoang cộng minh rỗng lớn, làm âm thanh phát ra vang và dày dặn."
      }
    ]
  },

  // ================= BÀI 2 =================
  {
    num: 2,
    topicNum: 1,
    title: "Bài 2: Ôn tập Quãng và Thang âm (Gam) - Giọng cơ bản",
    badgeColor: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300",
    dotColor: "bg-rose-500",
    time: "45 phút",
    target: "Xác định chính xác số cung và nửa cung của các quãng cơ bản (Quãng 1 đến Quãng 8); Nắm vững cấu tạo công thức gam Trưởng tự nhiên và gam Thứ tự nhiên; Đọc chuẩn cao độ và tiết tấu bài tập đọc nhạc giọng C-dur và a-moll.",
    intro: "Mọi giai điệu âm nhạc lay động lòng người đều được dệt nên từ những bước nhảy của các quãng âm và cấu trúc hài hòa của các gam điệu. Quãng âm và gam vận hành như thế nào?",
    sections: [
      {
        title: "1. Khái niệm và Phân loại Quãng âm (Intervals)",
        content: `
          <p class="mb-3">
            <strong>Quãng âm:</strong> Là khoảng cách về cao độ giữa hai âm thanh. Âm thấp gọi là <em>âm gốc</em>, âm cao gọi là <em>âm ngọn</em>.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <h5 class="font-bold text-rose-600 dark:text-rose-400 mb-1">Quãng giai điệu vs Quãng hòa thanh</h5>
              <p class="text-gray-600 dark:text-gray-300">
                - <strong>Quãng giai điệu:</strong> Hai âm vang lên lần lượt trước sau (tạo nên đường nét giai điệu).<br>
                - <strong>Quãng hòa thanh:</strong> Hai âm vang lên cùng một lúc (tạo nên màu sắc hòa âm).
              </p>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <h5 class="font-bold text-blue-600 dark:text-blue-400 mb-1">Tính chất độ lớn của quãng</h5>
              <p class="text-gray-600 dark:text-gray-300">
                - Gồm <strong>Độ lớn số lượng</strong> (số bậc: quãng 2, 3, 4, 5...) và <strong>Độ lớn chất lượng</strong> (số cung: Đúng, Trưởng, Thứ, Tăng, Giảm).<br>
                - Các quãng Đúng: 1Đ (0 cung), 4Đ (2,5 cung), 5Đ (3,5 cung), 8Đ (6 cung).<br>
                - Các quãng Trưởng / Thứ: Quãng 2, 3, 6, 7.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Cấu tạo Gam Trưởng tự nhiên và Gam Thứ tự nhiên",
        content: `
          <div class="overflow-x-auto my-3">
            <table class="min-w-full text-xs text-left border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 uppercase font-semibold">
                <tr>
                  <th class="p-2.5 border-b border-gray-200 dark:border-gray-700">Loại Gam</th>
                  <th class="p-2.5 border-b border-gray-200 dark:border-gray-700">Công thức khoảng cách cung & nửa cung</th>
                  <th class="p-2.5 border-b border-gray-200 dark:border-gray-700">Ví dụ giọng cơ bản (Không dấu hóa)</th>
                  <th class="p-2.5 border-b border-gray-200 dark:border-gray-700">Tính chất cảm xúc</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700 text-gray-600 dark:text-gray-300">
                <tr>
                  <td class="p-2.5 font-bold text-blue-600 dark:text-blue-400">Gam Trưởng (Major)</td>
                  <td class="p-2.5 font-mono">1 - 1 - 1/2 - 1 - 1 - 1 - 1/2</td>
                  <td class="p-2.5">Đô trưởng (C-dur): C - D - E - F - G - A - B - C</td>
                  <td class="p-2.5">Tươi sáng, khỏe khoắn, tự tin, rực rỡ.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-rose-600 dark:text-rose-400">Gam Thứ (Minor)</td>
                  <td class="p-2.5 font-mono">1 - 1/2 - 1 - 1 - 1/2 - 1 - 1</td>
                  <td class="p-2.5">La thứ (a-moll): A - B - C - D - E - F - G - A</td>
                  <td class="p-2.5">Trầm lắng, trữ tình, mềm mại, sâu sắc.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practice: [
      "Xác định độ lớn số lượng và chất lượng của các quãng sau: Đô - Mi (3T), Đô - Sol (5Đ), Rê - Fa (3t), Đô - Đô đố (8Đ).",
      "Đọc thang âm Đô trưởng (C-dur) kết hợp ký hiệu bàn tay (phương pháp Kodály) từ nốt Đô thấp lên Đô cao.",
      "Đọc chuẩn cao độ và gõ phách tiết tấu bài Tập đọc nhạc số 1 viết ở nhịp 2/4 giọng Đô trưởng."
    ],
    summary: "Quãng âm đo khoảng cách cao độ gồm quãng giai điệu và hòa thanh; chia thành quãng Đúng (1, 4, 5, 8) và quãng Trưởng/Thứ (2, 3, 6, 7). Gam Trưởng (1-1-1/2-1-1-1-1/2) mang màu sắc tươi sáng; Gam Thứ (1-1/2-1-1-1/2-1-1) mang màu sắc êm dịu, sâu lắng.",
    quizzes: [
      {
        q: "Khoảng cách cao độ giữa nốt Đô (C) và nốt Mi (E) gồm 2 cung nguyên là quãng gì?",
        options: ["Quãng 3 thứ (3t)", "Quãng 3 Trưởng (3T)", "Quãng 4 đúng (4Đ)", "Quãng 2 Trưởng (2T)"],
        correctIndex: 1,
        explain: "Quãng 3 chứa 2 cung nguyên là Quãng 3 Trưởng (3T); nếu chỉ chứa 1,5 cung (như Rê - Fa) thì là Quãng 3 thứ (3t)."
      },
      {
        q: "Công thức khoảng cách cung và nửa cung của Gam Trưởng tự nhiên là gì?",
        options: ["1 - 1 - 1/2 - 1 - 1 - 1 - 1/2", "1 - 1/2 - 1 - 1 - 1/2 - 1 - 1", "1 - 1 - 1 - 1/2 - 1 - 1 - 1/2", "1/2 - 1 - 1 - 1 - 1/2 - 1 - 1"],
        correctIndex: 0,
        explain: "Công thức chuẩn của Gam Trưởng tự nhiên: Cung - Cung - Nửa cung - Cung - Cung - Cung - Nửa cung (nửa cung ở bậc III-IV và VII-I)."
      },
      {
        q: "Cặp giọng nào sau đây là hai giọng song song (cùng chung hóa biểu không có dấu thăng, dấu giáng nào)?",
        options: ["Đô trưởng (C-dur) và La thứ (a-moll)", "Đô trưởng và Đô thứ", "Sol trưởng và Mi thứ", "Pha trưởng và Rê thứ"],
        correctIndex: 0,
        explain: "Giọng Đô trưởng (C-dur) và La thứ (a-moll) có chung hóa biểu là không có dấu thăng hay dấu giáng nào ở đầu khuông nhạc."
      },
      {
        q: "Quãng nào sau đây được gọi là 'Quãng đồng âm' (hai nốt có cùng cao độ tuyệt đối)?",
        options: ["Quãng 8 đúng", "Quãng 1 đúng", "Quãng 5 đúng", "Quãng 4 đúng"],
        correctIndex: 1,
        explain: "Quãng 1 đúng (Prime) có độ lớn 0 cung, gồm hai âm thanh phát ra cùng cao độ giống hệt nhau."
      }
    ]
  },

  // ================= BÀI 3 =================
  {
    num: 3,
    topicNum: 2,
    title: "Bài 3: Thời kỳ Cổ điển và các bậc thầy âm nhạc (Haydn, Mozart, Beethoven)",
    badgeColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    dotColor: "bg-purple-500",
    time: "45 phút",
    target: "Nắm được bối cảnh lịch sử và đặc điểm thẩm mỹ của trường phái Cổ điển Viên (Áo); Hiểu được cuộc đời, phong cách sáng tác và các tác phẩm bất hủ của J. Haydn, W.A. Mozart và L.V. Beethoven; Cảm thụ giai điệu Giao hưởng số 5 và Giao hưởng số 40.",
    intro: "Thành phố Vienna (Áo) thế kỷ XVIII là cái nôi sản sinh ra 3 vĩ nhân làm thay đổi vĩnh viễn dòng chảy âm nhạc nhân loại: 'Người cha giao hưởng' Haydn, 'Thần đồng âm nhạc' Mozart và 'Nhà soạn nhạc khiếm thính vĩ đại' Beethoven.",
    sections: [
      {
        title: "1. Trường phái Cổ điển Viên và Joseph Haydn (1732 - 1809)",
        content: `
          <p class="mb-3">
            <strong>Thời kỳ Cổ điển (khoảng 1750 - 1820):</strong> Đề cao tính cân đối, hài hòa, sự khúc chiết về cấu trúc và vẻ đẹp trí tuệ mẫu mực. Trung tâm hội tụ là thủ đô Vienna (Cổ điển Viên).
          </p>
          <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 space-y-2">
            <h5 class="font-bold text-purple-700 dark:text-purple-300 text-xs sm:text-sm uppercase flex items-center gap-1.5">
              <i class="fa-solid fa-crown"></i> Joseph Haydn - "Người cha của Giao hưởng và Tứ tấu dây"
            </h5>
            <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Nhà soạn nhạc người Áo đã định hình nên cấu trúc mẫu mực của bản Giao hưởng 4 chương và thể loại Tứ tấu đàn dây (String Quartet). Ông để lại gia tài khổng lồ gồm 106 bản giao hưởng (tiêu biểu: Giao hưởng Đồng hồ, Giao hưởng Giật mình) với âm hưởng lạc quan, trong sáng, hóm hỉnh.
            </p>
          </div>
        `
      },
      {
        title: "2. Wolfgang Amadeus Mozart (1756 - 1791) & Ludwig van Beethoven (1770 - 1827)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1">
                W.A. Mozart - "Thần đồng âm nhạc nước Áo"
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Biết chơi đàn lúc 3 tuổi, bắt đầu sáng tác lúc 5 tuổi. Âm nhạc của Mozart trong trẻo tuyệt đối, thanh thoát, giàu tính trữ tình thiên tài. Tác phẩm đỉnh cao: 41 bản giao hưởng (Giao hưởng số 40 Sol thứ, Giao hưởng số 41 Jupiter), Khúc nhạc đêm thanh vắng (Eine kleine Nachtmusik), Nhạc kịch Cây sáo thần (The Magic Flute), Bản Khúc cầu hồn (Requiem).
              </p>
            </div>
            <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
              <h5 class="font-bold text-rose-700 dark:text-rose-300 text-xs sm:text-sm uppercase mb-1">
                L.V. Beethoven - "Người khổng lồ vượt lên số phận"
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Nhà soạn nhạc người Đức, cầu nối vĩ đại từ Cổ điển sang Lãng mạn. Dù bị điếc hoàn toàn từ tuổi 30, ông vẫn sáng tác bằng trí tưởng tượng siêu phàm. Tác phẩm tiêu biểu: 9 bản giao hưởng bất hủ (Giao hưởng số 3 Anh hùng ca, Giao hưởng số 5 Định mệnh, Giao hưởng số 9 Khải hoàn ca chứa khúc Hát mừng niềm vui - Ode to Joy), Sonata Ánh trăng (Moonlight Sonata).
              </p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Lắng nghe 4 nốt nhạc mở đầu đầy uy lực 'Ta-ta-ta-Tùm' của Bản Giao hưởng số 5 (Định mệnh) của Beethoven và mô tả cảm xúc cảm nhận được.",
      "Tìm hiểu câu chuyện cảm động đằng sau sự ra đời của Bản Sonata Ánh trăng (Moonlight Sonata) của Beethoven.",
      "Thảo luận: Bài học về nghị lực phi thường của Beethoven khi bị mất thính giác nhưng vẫn sáng tác nên kiệt tác Giao hưởng số 9 để lại cho thế hệ trẻ."
    ],
    summary: "Thời kỳ Cổ điển Viên đạt đỉnh cao với Haydn (hoàn thiện giao hưởng), Mozart (giai điệu thanh khiết, thiên tài bẩm sinh) và Beethoven (âm nhạc kịch tính, bi tráng, vượt lên bi kịch điếc để phụng sự nhân loại).",
    quizzes: [
      {
        q: "Bốn nốt nhạc mở đầu nổi tiếng 'Ta-ta-ta-Tùm' được mệnh danh là 'Tiếng gõ cửa của định mệnh' thuộc kiệt tác giao hưởng nào?",
        options: ["Giao hưởng số 40 của Mozart", "Giao hưởng số 5 của Beethoven", "Giao hưởng Giật mình của Haydn", "Giao hưởng Hồ thiên nga của Tchaikovsky"],
        correctIndex: 1,
        explain: "Bản Giao hưởng số 5 giọng Đô thứ của Beethoven mở đầu bằng mô-típ định mệnh nổi tiếng nhất lịch sử âm nhạc thế giới."
      },
      {
        q: "Nhạc sĩ thiên tài nào được mệnh danh là 'Thần đồng âm nhạc', biết chơi đàn từ năm 3 tuổi và sáng tác nhạc lúc mới 5 tuổi?",
        options: ["J.S. Bach", "W.A. Mozart", "F. Chopin", "F. Schubert"],
        correctIndex: 1,
        explain: "Wolfgang Amadeus Mozart sinh ra tại Salzburg (Áo), bộc lộ tài năng âm nhạc phi thường từ thuở ấu thơ."
      },
      {
        q: "Khúc ca 'Hát mừng niềm vui' (Ode to Joy) - hiện nay là bài ca chính thức của Liên minh châu Âu (EU) nằm trong chương cuối của bản giao hưởng nào?",
        options: ["Giao hưởng số 9 của Beethoven", "Giao hưởng số 3 Anh hùng ca", "Giao hưởng Jupiter của Mozart", "Giao hưởng Đồng hồ của Haydn"],
        correctIndex: 0,
        explain: "Chương 4 bản Giao hưởng số 9 (Choral) của Beethoven sử dụng dàn hợp xướng đồ sộ thể hiện khúc ca 'Ode to Joy' ca ngợi tình anh em nhân loại."
      },
      {
        q: "Thành phố nào tại châu Âu được coi là cái nôi, trung tâm hội tụ của trường phái âm nhạc Cổ điển thế kỷ XVIII?",
        options: ["Paris (Pháp)", "Vienna (Áo)", "London (Anh)", "Rome (Ý)"],
        correctIndex: 1,
        explain: "Thủ đô Vienna (Áo) là trung tâm văn hóa âm nhạc rực rỡ nhất thời kỳ Cổ điển, nơi làm việc của cả Haydn, Mozart và Beethoven."
      }
    ]
  },

  // ================= BÀI 4 =================
  {
    num: 4,
    topicNum: 2,
    title: "Bài 4: Các thể loại khí nhạc cổ điển (Sonata, Giao hưởng & Concerto)",
    badgeColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    dotColor: "bg-purple-500",
    time: "45 phút",
    target: "Phân biệt được cấu trúc của các thể loại khí nhạc lớn: Liên khúc Sonata, Giao hưởng (Symphony) và Concerto; Nhận diện được 4 bộ nhạc cụ chính trong Dàn nhạc giao hưởng tiêu chuẩn.",
    intro: "Khi bước vào một nhà hát opera sang trọng, hàng trăm nhạc công với đàn vĩ cầm, kèn đồng, sáo gỗ và trống định âm cùng hòa tấu nên những giai điệu đồ sộ. Dàn nhạc giao hưởng được tổ chức như thế nào?",
    sections: [
      {
        title: "1. Các thể loại khí nhạc cổ điển đỉnh cao",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <h5 class="font-bold text-blue-600 dark:text-blue-400 text-xs sm:text-sm mb-1">1. Sonata (Xô-nát)</h5>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Tác phẩm khí nhạc nhiều chương (thường gồm 3-4 chương) viết cho 1 nhạc cụ độc tấu (như Piano Sonata) hoặc độc tấu kèm đệm (Violin Sonata). Cấu trúc chương 1 luôn viết ở hình thức Sonata-allegro gồm: Trình bày - Phát triển - Tái hiện.
              </p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <h5 class="font-bold text-purple-600 dark:text-purple-400 text-xs sm:text-sm mb-1">2. Giao hưởng (Symphony)</h5>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Bản 'Sonata viết cho toàn bộ dàn nhạc giao hưởng' đồ sộ, thường có 4 chương tương phản về tốc độ và tính chất: Chương 1 nhanh kịch tính, Chương 2 chậm trữ tình, Chương 3 vui nhộn (Menuet/Scherzo), Chương 4 chung cuộc tưng bừng.
              </p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <h5 class="font-bold text-rose-600 dark:text-rose-400 text-xs sm:text-sm mb-1">3. Concerto (Hòa tấu)</h5>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Tác phẩm thường gồm 3 chương viết cho một hoặc vài nhạc cụ độc tấu (Soloist: Piano, Violin, Cello) đối thoại, phô diễn kỹ thuật điêu luyện cùng dàn nhạc giao hưởng phụ họa.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Bốn bộ nhạc cụ chính trong Dàn nhạc giao hưởng (Orchestra)",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
              <span class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm block mb-1">1. Bộ Dây (Strings - Chiếm số lượng đông nhất)</span>
              <p class="text-gray-600 dark:text-gray-300">Violon 1, Violon 2, Viola (Vĩ cầm trầm), Cello (Trung cầm), Contrabass (Đại vĩ cầm). Âm sắc ấm áp, giàu cảm xúc, làm nền giai điệu chính.</p>
            </div>
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs">
              <span class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm block mb-1">2. Bộ Gỗ (Woodwinds - Kèn gỗ)</span>
              <p class="text-gray-600 dark:text-gray-300">Flute (Sáo ngang), Piccolo, Oboe, Clarinet, Bassoon. Âm sắc trong trẻo, réo rắt, linh hoạt, gợi tả thiên nhiên.</p>
            </div>
            <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs">
              <span class="font-bold text-amber-700 dark:text-amber-300 text-xs sm:text-sm block mb-1">3. Bộ Đồng (Brass - Kèn đồng)</span>
              <p class="text-gray-600 dark:text-gray-300">French Horn (Kèn săn), Trumpet (Kèn lệnh), Trombone, Tuba. Âm lượng hùng dũng, uy nghiêm, tạo cao trào bùng nổ.</p>
            </div>
            <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 text-xs">
              <span class="font-bold text-rose-700 dark:text-rose-300 text-xs sm:text-sm block mb-1">4. Bộ Gõ (Percussion)</span>
              <p class="text-gray-600 dark:text-gray-300">Timpani (Trống định âm có cao độ), Snare drum (Trống lẫy), Bass drum (Trống cái), Cymbals (Chũm chọe), Triangle, Xylophone. Giữ nhịp và tạo hiệu ứng kịch tính.</p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Xem một video biểu diễn hòa tấu Dàn nhạc giao hưởng Quốc gia Việt Nam và chỉ ra vị trí đứng của Chỉ huy dàn nhạc (Conductor) cùng 4 bộ nhạc cụ.",
      "Nghe đoạn trích Piano Concerto số 21 của Mozart và nhận biết lúc nào cây đàn Piano cất tiếng độc tấu và lúc nào dàn nhạc hòa tấu chung.",
      "Vẽ sơ đồ bố trí các nhóm nhạc cụ trên sân khấu của một dàn nhạc giao hưởng tiêu chuẩn."
    ],
    summary: "Sonata viết cho 1-2 nhạc cụ; Giao hưởng (Symphony) là tác phẩm khí nhạc đồ sộ 4 chương cho dàn nhạc lớn; Concerto là sự đối thoại giữa nhạc cụ độc tấu và dàn nhạc. Dàn nhạc giao hưởng gồm 4 bộ: Dây (Strings), Gỗ (Woodwinds), Đồng (Brass), Gõ (Percussion).",
    quizzes: [
      {
        q: "Thể loại tác phẩm khí nhạc nào thường có 3 chương, được viết cho MỘT nhạc cụ độc tấu biểu diễn cùng DÀN NHẠC GIAO HƯỞNG phụ họa?",
        options: ["Concerto", "Giao hưởng (Symphony)", "Nhạc kịch Opera", "Tứ tấu dây"],
        correctIndex: 0,
        explain: "Concerto là thể loại hòa tấu làm nổi bật kỹ năng điêu luyện của nhạc cụ độc tấu (như Piano Concerto, Violin Concerto) đối thoại cùng dàn nhạc."
      },
      {
        q: "Trong dàn nhạc giao hưởng tiêu chuẩn, bộ nhạc cụ nào chiếm số lượng nghệ sĩ biểu diễn đông đảo nhất (thường chiếm hơn 60% dàn nhạc)?",
        options: ["Bộ Đồng", "Bộ Gõ", "Bộ Dây (Strings)", "Bộ Gỗ"],
        correctIndex: 2,
        explain: "Bộ Dây (Violin I, Violin II, Viola, Cello, Contrabass) là xương sống âm thanh và chiếm số lượng đông nhất trong dàn nhạc giao hưởng."
      },
      {
        q: "Nhạc cụ nào sau đây thuộc Bộ Gõ có định âm (có thể chỉnh được cao độ nốt nhạc chính xác) trong dàn nhạc giao hưởng?",
        options: ["Trống định âm (Timpani)", "Chũm chọe (Cymbals)", "Kẻng tam giác (Triangle)", "Trống lắc tay Tambourine"],
        correctIndex: 0,
        explain: "Trống Timpani có bàn đạp pedal điều chỉnh độ căng của mặt trống, cho phép thay đổi cao độ nốt nhạc chính xác theo bản nhạc."
      },
      {
        q: "Người đứng ở vị trí trung tâm sân khấu, sử dụng đũa chỉ huy và thủ pháp tay để điều khiển nhịp độ, sắc thái của toàn bộ dàn nhạc được gọi là gì?",
        options: ["Biên kịch", "Chỉ huy dàn nhạc (Conductor)", "Đạo diễn sân khấu", "Kỹ sư âm thanh"],
        correctIndex: 1,
        explain: "Nhạc trưởng / Chỉ huy dàn nhạc (Conductor) là linh hồn dẫn dắt hàng trăm nhạc công hợp nhất thành một khối hòa âm hoàn hảo."
      }
    ]
  },

  // ================= BÀI 5 =================
  {
    num: 5,
    topicNum: 3,
    title: "Bài 5: Dân ca và Nghệ thuật ca xướng truyền thống Bắc Bộ & Trung Bộ",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Nhận biết các thể loại âm nhạc dân gian đặc sắc của miền Bắc và miền Trung: Dân ca Quan họ Bắc Ninh, Hát Xoan Phú Thọ, Ca trù và Nhã nhạc cung đình Huế; Nắm được đặc trưng lề lối biểu diễn và giá trị văn hóa di sản được UNESCO vinh danh.",
    intro: "Trải qua hàng nghìn năm dựng nước và giữ nước, cha ông ta đã để lại một kho tàng âm nhạc truyền thống vô giá với những làn điệu Quan họ mượt mà hay tiếng đàn đáy trầm đục của nghệ thuật Ca trù.",
    sections: [
      {
        title: "1. Dân ca Quan họ Bắc Ninh và Hát Xoan Phú Thọ",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h5 class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm uppercase mb-1">
                <i class="fa-solid fa-fan"></i> Dân ca Quan họ Bắc Ninh
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Được UNESCO ghi danh là <em>Di sản văn hóa phi vật thể đại diện của nhân loại</em> (2009). Đặc trưng bởi hình thức hát đối đáp giao duyên giữa liền anh (khăn xếp áo khúc) và liền chị (nón quai thao áo tứ thân). Kỹ thuật hát đòi hỏi 4 tiêu chuẩn vàng: <strong>Nền - Rền - Vang - Nẩy</strong>.
              </p>
            </div>
            <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800">
              <h5 class="font-bold text-teal-700 dark:text-teal-300 text-xs sm:text-sm uppercase mb-1">
                <i class="fa-solid fa-leaf"></i> Hát Xoan Phú Thọ
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Gắn liền với thời đại Hùng Vương dựng nước, hát vào dịp đầu xuân tại các cửa đình làng cầu chúc mưa thuận gió hòa, mùa màng bội thu. Gồm 3 chặng hát: Hát nghi lễ cúng thần, Hát quả cách và Hát hội giao duyên.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Nghệ thuật Ca trù và Nhã nhạc cung đình Huế",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <h5 class="font-bold text-amber-700 dark:text-amber-300 text-xs sm:text-sm uppercase mb-1">
                Nghệ thuật Ca trù (Hát ả đào)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Thể loại hát thính phòng bác học độc đáo của miền Bắc. Biên chế biểu diễn mẫu mực gồm 3 thành viên: <em>Đào nương</em> (vừa hát vừa gõ Phách), <em>Kép đàn</em> (gảy Đàn Đáy 3 dây tiếng trầm ấm) và <em>Quan viên</em> (cầm Trống chầu chấm điểm khen chê bằng tiếng 'Chát - Tom').
              </p>
            </div>
            <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h5 class="font-bold text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm uppercase mb-1">
                Nhã nhạc cung đình Huế
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Âm nhạc chính thống đỉnh cao triều Nguyễn, được biểu diễn trong các đại lễ cung đình, tế lễ Nam Giao, thiết triều. Dàn nhạc gồm Đại nhạc (trống lớn, kèn kén) và Tiểu nhạc (nhạc cụ dây, sáo, phách tam âm) thể hiện sự trang nghiêm, uy linh và thái bình thịnh trị.
              </p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Tập hát đúng ngữ điệu và luyến láy bài dân ca Quan họ Bắc Ninh 'Hoa thơm bướm lượn' hoặc 'Cò lả'.",
      "Lắng nghe âm thanh độc đáo của cỗ phách và tiếng trống chầu trong một canh hát Ca trù cổ truyền.",
      "Tìm hiểu vì sao Nhã nhạc cung đình Huế lại là Di sản văn hóa phi vật thể đầu tiên của Việt Nam được UNESCO công nhận (2003)."
    ],
    summary: "Bắc Bộ và Trung Bộ sở hữu kho tàng âm nhạc di sản thế giới: Quan họ Bắc Ninh (kỹ thuật Nền - Rền - Vang - Nẩy), Hát Xoan (thời Hùng Vương), Ca trù (Đào nương, Đàn đáy, Trống chầu) và Nhã nhạc cung đình Huế (âm nhạc bác học triều đình).",
    quizzes: [
      {
        q: "Bốn tiêu chuẩn vàng về kỹ thuật phát âm, nhả chữ trong nghệ thuật hát Dân ca Quan họ Bắc Ninh là gì?",
        options: ["Nhanh - Mạnh - To - Rõ", "Nền - Rền - Vang - Nẩy", "Cao - Thấp - Ngắn - Dài", "Trầm - Bổng - Êm - Nhẹ"],
        correctIndex: 1,
        explain: "Nền (giọng hát chắc chắn), Rền (rung giọng mượt mà), Vang (âm thanh tỏa sáng) và Nẩy (nhả chữ sắc sảo) là 4 kỹ thuật cốt lõi của Quan họ."
      },
      {
        q: "Nhạc cụ nào có cần đàn rất dài, thân đàn hình chữ nhật đáy rỗng, lắp 3 dây tơ độc đáo chỉ xuất hiện duy nhất trong nghệ thuật Ca trù?",
        options: ["Đàn Bầu", "Đàn Đáy", "Đàn Tranh", "Đàn Nhị"],
        correctIndex: 1,
        explain: "Đàn Đáy là nhạc cụ thuần Việt với cần dài hơn 1 mét, âm thanh trầm đục lắng đọng, dành riêng cho Kép đàn trong biểu diễn Ca trù."
      },
      {
        q: "Di sản âm nhạc đầu tiên của Việt Nam được UNESCO vinh danh là Di sản văn hóa phi vật thể của nhân loại vào năm 2003 là gì?",
        options: ["Dân ca Quan họ Bắc Ninh", "Nhã nhạc cung đình Huế", "Đờn ca tài tử Nam Bộ", "Hát Xoan Phú Thọ"],
        correctIndex: 1,
        explain: "Nhã nhạc cung đình Huế được UNESCO công nhận vào tháng 11/2003, mở đầu cho các di sản âm nhạc Việt Nam vươn tầm quốc tế."
      },
      {
        q: "Người cầm Trống chầu trong canh hát Ca trù (thường là bậc văn nhân, tri âm am hiểu thơ ca) được gọi là gì?",
        options: ["Đào nương", "Kép đàn", "Quan viên", "Nhạc công"],
        correctIndex: 2,
        explain: "Quan viên ngồi vị trí thính giả danh dự, cầm roi chầu gõ vào trống chầu (tiếng 'Tom' khen ngợi, tiếng 'Chát' nhắc nhở) để thưởng thức và chấm thưởng đào nương."
      }
    ]
  },

  // ================= BÀI 6 =================
  {
    num: 6,
    topicNum: 3,
    title: "Bài 6: Dân ca Nam Bộ và Âm nhạc cồng chiêng Tây Nguyên",
    badgeColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
    time: "45 phút",
    target: "Hiểu được nét phóng khoáng, tình cảm của các điệu Hò, điệu Lý Nam Bộ; Nắm vững nguồn gốc nghệ thuật Đờn ca tài tử và Cải lương; Khám phá Không gian văn hóa Cồng chiêng Tây Nguyên và vai trò của cồng chiêng trong đời sống tâm linh mẫu hệ.",
    intro: "Từ tiếng mái chèo khua sóng nước trên sông Cửu Long cất lên điệu Hò mênh mang, đến tiếng cồng tiếng chiêng ngân vang giữa đại ngàn Tây Nguyên hùng vĩ, âm nhạc phương Nam mang vẻ đẹp tâm hồn như thế nào?",
    sections: [
      {
        title: "1. Âm nhạc dân gian Nam Bộ: Hò, Lý và Đờn ca tài tử",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h5 class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm uppercase mb-1">
                Điệu Hò và Điệu Lý Nam Bộ
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                - <strong>Hò:</strong> Gắn liền với lao động sông nước hoặc trên đồng ruộng (Hò sông Mã, Hò Đồng Tháp); gồm phần <em>Xướng</em> (người hò dạo đầu bằng câu thơ lục bát) và phần <em>Xô</em> (tập thể hò đáp phụ họa).<br>
                - <strong>Lý:</strong> Bài ca ngắn, giai điệu mộc mạc, tha thiết, thường lấy tên theo chủ đề cây cỏ, con vật (Lý cây bông, Lý con sáo, Lý ngựa ô).
              </p>
            </div>
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1">
                Đờn ca tài tử Nam Bộ & Dạ cổ hoài lang
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Di sản văn hóa phi vật thể của UNESCO (2013). Được khai sinh từ cuối thế kỷ XIX, chơi bằng dàn nhạc ngũ tuyệt (Kìm, Cò, Tranh, Tỳ bà, Tam hoặc Guitar phím lõm). Bài ca bất hủ <em>Dạ cổ hoài lang</em> của cố nhạc sĩ Cao Văn Lầu là tiền đề phát triển nên bản Vọng cổ và sân khấu Cải lương rực rỡ.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Không gian văn hóa Cồng chiêng Tây Nguyên",
        content: `
          <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 space-y-2">
            <h5 class="font-bold text-amber-800 dark:text-amber-300 text-xs sm:text-sm uppercase flex items-center gap-1.5">
              <i class="fa-solid fa-mountain"></i> Kiệt tác di sản truyền khẩu Tây Nguyên (UNESCO 2005)
            </h5>
            <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
              Trải rộng qua 5 tỉnh: Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông, Lâm Đồng gắn liền với các dân tộc Ba Na, Gia Rai, Ê Đê, M'Nông, Cơ Ho.
            </p>
            <ul class="list-disc pl-5 text-xs text-gray-600 dark:text-gray-300 space-y-1">
              <li><strong>Phân biệt Cồng và Chiêng:</strong> <em>Cồng</em> là loại có núm ở giữa tạo âm thanh trầm vang tròn; <em>Chiêng</em> là loại phẳng không có núm tạo âm thanh vang xa, sắc bén.</li>
              <li><strong>Ý nghĩa tâm linh:</strong> Người Tây Nguyên quan niệm mỗi chiếc cồng chiêng đều có một vị thần (Yàng) trú ngụ. Càng cổ thì thần càng mạnh. Cồng chiêng gắn với vòng đời người từ lễ Thổi tai lúc sơ sinh, lễ Đâm trâu, lễ Mừng lúa mới đến lễ Bỏ mả (Tỉ bỏ ma).</li>
            </ul>
          </div>
        `
      }
    ],
    practice: [
      "Hát đúng giai điệu vui tươi, tình cảm của bài dân ca Nam Bộ 'Lý cây bông'.",
      "Nghe bản thu âm 'Dạ cổ hoài lang' và chia sẻ cảm xúc về nỗi lòng người vợ ngóng trông chồng nơi phương xa.",
      "Tìm hiểu hình ảnh cây đàn Guitar phím lõm (cung bậc được khoét sâu đặc trưng) và vai trò của nó trong dàn nhạc Đờn ca tài tử."
    ],
    summary: "Âm nhạc Nam Bộ đặc sắc với điệu Hò mênh mang sông nước, điệu Lý ngọt ngào và Đờn ca tài tử tài hoa. Cồng chiêng Tây Nguyên là kiệt tác di sản thế giới gắn liền với đời sống tâm linh, nghi lễ cúng thần Yàng của đồng bào các dân tộc đại ngàn.",
    quizzes: [
      {
        q: "Bài ca bất hủ nào của nhạc sĩ Cao Văn Lầu sáng tác năm 1919 được coi là 'bài ca vua', cội nguồn khai sinh ra bản Vọng cổ và nghệ thuật Cải lương Nam Bộ?",
        options: ["Dạ cổ hoài lang", "Lý cây bông", "Hò Đồng Tháp", "Lưu thủy hành vân"],
        correctIndex: 0,
        explain: "Bản 'Dạ cổ hoài lang' (Đêm khuya nghe tiếng trống nhớ chồng) là kiệt tác đặt nền móng cho sân khấu Vọng cổ và Cải lương Nam Bộ."
      },
      {
        q: "Điểm khác biệt cơ bản về cấu tạo hình dáng bên ngoài giữa chiếc Cồng và chiếc Chiêng của đồng bào Tây Nguyên là gì?",
        options: ["Cồng làm bằng gỗ, Chiêng làm bằng đồng", "Cồng có núm tròn ở giữa mặt, còn Chiêng thì mặt phẳng không có núm", "Cồng hình vuông, Chiêng hình tròn", "Chiêng to gấp 10 lần Cồng"],
        correctIndex: 1,
        explain: "Cồng là nhạc khí bằng hợp kim đồng có núm lồi ở giữa; Chiêng cũng bằng hợp kim đồng nhưng mặt phẳng trơn không có núm."
      },
      {
        q: "Cây đàn phương Tây nào khi du nhập vào Việt Nam đã được các nghệ nhân tài tử Nam Bộ khoét sâu các ngăn phím để tạo độ rung, nhấn luyến láy cung bậc ngũ cung?",
        options: ["Đàn Piano", "Đàn Guitar (Guitar phím lõm)", "Đàn Violin", "Kèn Saxophone"],
        correctIndex: 1,
        explain: "Cây đàn Guitar phím lõm (Lục huyền cầm) là sáng tạo độc đáo của người Việt giúp nhấn nhá các thang âm Oán, Nam, Bắc trong ca tài tử."
      },
      {
        q: "Không gian văn hóa Cồng chiêng Tây Nguyên trải rộng trên địa bàn của bao nhiêu tỉnh ở vùng Tây Nguyên nước ta?",
        options: ["3 tỉnh", "5 tỉnh (Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông, Lâm Đồng)", "7 tỉnh", "Toàn bộ 63 tỉnh"],
        correctIndex: 1,
        explain: "Không gian văn hóa cồng chiêng trải rộng khắp 5 tỉnh Tây Nguyên của các cộng đồng dân tộc Ba Na, Ê Đê, Gia Rai, M'Nông, Cơ Ho."
      }
    ]
  },

  // ================= BÀI 7 =================
  {
    num: 7,
    topicNum: 4,
    title: "Bài 7: Hệ thống các Giọng cùng tên và Giọng song song",
    badgeColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    dotColor: "bg-blue-500",
    time: "45 phút",
    target: "Phân biệt bản chất của Giọng song song (Parallel Keys / Relative Keys) và Giọng cùng tên (Tonic Keys); Nắm vững Vòng tròn bậc 5 (Circle of Fifths); Nhận diện hóa biểu các giọng có từ 1 đến 4 dấu thăng (#) hoặc dấu giáng (b).",
    intro: "Tại sao bản nhạc có hóa biểu 1 dấu Fa thăng lại có thể là bài hát giọng Sol trưởng rất vui tươi, nhưng cũng có thể là giọng Mi thứ rất trầm buồn? Bí mật nằm ở mối quan hệ giữa các giọng điệu.",
    sections: [
      {
        title: "1. Giọng song song (Relative Keys)",
        content: `
          <div class="p-4 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-2">
            <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase flex items-center gap-1.5">
              <i class="fa-solid fa-arrows-left-right"></i> Định nghĩa và Quy tắc tìm giọng song song
            </h5>
            <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Hai giọng song song:</strong> Là một giọng Trưởng và một giọng Thứ có <strong>cùng chung hóa biểu</strong> (cùng số lượng dấu thăng hoặc dấu giáng ở đầu khuông nhạc) nhưng có <strong>âm chủ khác nhau</strong>.
            </p>
            <div class="p-3 bg-white dark:bg-gray-800 rounded-lg text-xs space-y-1">
              <p>📌 <strong>Quy tắc quãng 3 thứ (1,5 cung):</strong></p>
              <p>- Muốn tìm giọng Thứ song song: Lấy âm chủ giọng Trưởng <em>hạ xuống một quãng 3 thứ</em> (1,5 cung). Ví dụ: Đô (C) hạ 1,5 cung &rarr; La (A) &rarr; Giọng song song là <strong>La thứ (a-moll)</strong>.</p>
              <p>- Muốn tìm giọng Trưởng song song: Lấy âm chủ giọng Thứ <em>nâng lên một quãng 3 thứ</em>. Ví dụ: Mi (E) nâng 1,5 cung &rarr; Sol (G) &rarr; Giọng song song là <strong>Sol trưởng (G-dur)</strong>.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Giọng cùng tên (Parallel Keys) và Bảng hóa biểu thông dụng",
        content: `
          <p class="mb-2"><strong>Hai giọng cùng tên:</strong> Là một giọng Trưởng và một giọng Thứ có <strong>cùng chung nốt âm chủ</strong> nhưng có <strong>hóa biểu hoàn toàn khác nhau</strong>. Ví dụ: Đô trưởng (0 dấu) và Đô thứ (3 dấu giáng Si, Mi, La).</p>
          <div class="overflow-x-auto my-3">
            <table class="min-w-full text-xs text-left border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 uppercase font-semibold">
                <tr>
                  <th class="p-2 border-b border-gray-200 dark:border-gray-700">Hóa biểu</th>
                  <th class="p-2 border-b border-gray-200 dark:border-gray-700">Tên các dấu hóa</th>
                  <th class="p-2 border-b border-gray-200 dark:border-gray-700">Giọng Trưởng song song</th>
                  <th class="p-2 border-b border-gray-200 dark:border-gray-700">Giọng Thứ song song</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700 text-gray-600 dark:text-gray-300">
                <tr>
                  <td class="p-2 font-bold">Không dấu hóa</td>
                  <td class="p-2">-</td>
                  <td class="p-2 text-blue-600 dark:text-blue-400 font-bold">Đô trưởng (C-dur)</td>
                  <td class="p-2 text-rose-600 dark:text-rose-400 font-bold">La thứ (a-moll)</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold">1 dấu Thăng (#)</td>
                  <td class="p-2">Fa#</td>
                  <td class="p-2 text-blue-600 dark:text-blue-400 font-bold">Sol trưởng (G-dur)</td>
                  <td class="p-2 text-rose-600 dark:text-rose-400 font-bold">Mi thứ (e-moll)</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold">2 dấu Thăng (##)</td>
                  <td class="p-2">Fa#, Đô#</td>
                  <td class="p-2 text-blue-600 dark:text-blue-400 font-bold">Rê trưởng (D-dur)</td>
                  <td class="p-2 text-rose-600 dark:text-rose-400 font-bold">Si thứ (h-moll)</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold">1 dấu Giáng (b)</td>
                  <td class="p-2">Sib</td>
                  <td class="p-2 text-blue-600 dark:text-blue-400 font-bold">Pha trưởng (F-dur)</td>
                  <td class="p-2 text-rose-600 dark:text-rose-400 font-bold">Rê thứ (d-moll)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practice: [
      "Tìm giọng thứ song song của giọng Pha trưởng (F-dur - có 1 dấu giáng Sib) bằng cách hạ âm chủ Pha xuống 1,5 cung.",
      "Quan sát hóa biểu của một bản nhạc có 1 dấu thăng Fa# và nốt kết thúc bài là nốt Mi để xác định bài hát viết ở giọng gì.",
      "Thực hành đọc nhạc một đoạn trích giọng Sol trưởng (G-dur) với cao độ nốt Fa được nâng cao nửa cung (Fa thăng)."
    ],
    summary: "Giọng song song có cùng hóa biểu, âm chủ cách nhau quãng 3 thứ (Trưởng cao hơn Thứ 1,5 cung). Giọng cùng tên có cùng âm chủ nhưng khác hóa biểu. Hóa biểu xác định hệ thống các nốt cần nâng (#) hoặc hạ (b) trong toàn bộ tác phẩm.",
    quizzes: [
      {
        q: "Hai giọng được gọi là 'Giọng song song' khi thỏa mãn điều kiện nào sau đây?",
        options: ["Cùng âm chủ nhưng khác hóa biểu", "Có cùng hóa biểu (dấu hóa ở đầu khuông nhạc) nhưng khác âm chủ", "Có cùng tốc độ nhịp điệu", "Cùng do một tác giả sáng tác"],
        correctIndex: 1,
        explain: "Giọng song song dùng chung một hóa biểu ở đầu khuông nhạc, trong đó âm chủ giọng Trưởng cao hơn âm chủ giọng Thứ 1,5 cung (quãng 3 thứ)."
      },
      {
        q: "Nếu một bản nhạc có hóa biểu gồm DUY NHẤT MỘT DẤU THĂNG (Fa#), bản nhạc đó có thể được viết ở giọng nào?",
        options: ["Đô trưởng hoặc La thứ", "Sol trưởng hoặc Mi thứ", "Pha trưởng hoặc Rê thứ", "Rê trưởng hoặc Si thứ"],
        correctIndex: 1,
        explain: "Hóa biểu có 1 dấu thăng (Fa#) thuộc về cặp giọng song song Sol trưởng (G-dur) và Mi thứ (e-moll)."
      },
      {
        q: "Muốn tìm âm chủ của giọng Thứ song song từ một giọng Trưởng đã biết, ta làm như thế nào?",
        options: ["Lấy âm chủ giọng Trưởng hạ xuống một quãng 3 thứ (1,5 cung)", "Lấy âm chủ giọng Trưởng tăng lên một quãng 5 đúng", "Hạ xuống một nửa cung", "Tăng lên một quãng 8"],
        correctIndex: 0,
        explain: "Âm chủ giọng thứ song song luôn nằm ở bậc VI của giọng trưởng, tức là thấp hơn âm chủ giọng trưởng một quãng 3 thứ (1,5 cung)."
      },
      {
        q: "Cặp giọng Đô trưởng (C-dur) và Đô thứ (c-moll) có cùng âm chủ là nốt Đô nhưng khác hóa biểu, được gọi là gì?",
        options: ["Hai giọng song song", "Hai giọng cùng tên", "Hai giọng hòa thanh", "Hai giọng giai điệu"],
        correctIndex: 1,
        explain: "Các giọng có cùng nốt âm chủ (Tonic) nhưng mang hai thể thức Trưởng và Thứ khác nhau được gọi là hai giọng cùng tên."
      }
    ]
  },

  // ================= BÀI 8 =================
  {
    num: 8,
    topicNum: 4,
    title: "Bài 8: Hợp âm ba (Triad) và Hợp âm bảy (Seventh Chord)",
    badgeColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    dotColor: "bg-blue-500",
    time: "45 phút",
    target: "Nắm vững khái niệm hợp âm và cấu tạo Hợp âm 3 (Trưởng, Thứ, Tăng, Giảm); Hiểu cấu trúc Hợp âm 7 át (Dominant 7th); Nắm được 3 công năng hòa thanh trụ cột T - S - D (Chủ - Hạ át - Át) dùng trong đệm hát ca khúc.",
    intro: "Một nốt đơn độc chỉ là một chấm âm thanh, nhưng khi 3 hoặc 4 nốt vang lên cùng lúc, một không gian hòa âm đầy màu sắc sẽ mở ra. Hợp âm được cấu tạo theo quy luật toán học nào?",
    sections: [
      {
        title: "1. Cấu tạo của Hợp âm ba (Triad)",
        content: `
          <p class="mb-3">
            <strong>Hợp âm:</strong> Là sự kết hợp của từ 3 âm thanh trở lên vang lên cùng lúc (hoặc nối tiếp nhau) theo trật tự <strong>quãng 3</strong> xếp chồng lên nhau. Các âm từ dưới lên gồm: <em>Âm gốc (bậc 1)</em>, <em>Âm ba (bậc 3)</em>, <em>Âm năm (bậc 5)</em>.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <span class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm block mb-1">1. Hợp âm 3 Trưởng (Major Triad - Ký hiệu: C, G, F)</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Cấu tạo: <strong>Quãng 3 Trưởng + Quãng 3 thứ</strong> (khoảng cách 1-5 là quãng 5 đúng). Ví dụ hợp âm Đô trưởng: Đô - Mi (3T) - Sol (3t). Âm vang tươi sáng, ổn định.</p>
            </div>
            <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
              <span class="font-bold text-rose-700 dark:text-rose-300 text-xs sm:text-sm block mb-1">2. Hợp âm 3 Thứ (Minor Triad - Ký hiệu: Am, Em, Dm)</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Cấu tạo: <strong>Quãng 3 thứ + Quãng 3 Trưởng</strong> (khoảng cách 1-5 là quãng 5 đúng). Ví dụ hợp âm La thứ: La - Đô (3t) - Mi (3T). Âm vang dịu dàng, u hoài.</p>
            </div>
            <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <span class="font-bold text-amber-700 dark:text-amber-300 text-xs sm:text-sm block mb-1">3. Hợp âm 3 Tăng (Augmented - Ký hiệu: Caug)</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Cấu tạo: <strong>Quãng 3 Trưởng + Quãng 3 Trưởng</strong> (khoảng cách 1-5 là 5 tăng). Âm hưởng căng thẳng, bỡ ngỡ, huyền ảo.</p>
            </div>
            <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
              <span class="font-bold text-purple-700 dark:text-purple-300 text-xs sm:text-sm block mb-1">4. Hợp âm 3 Giảm (Diminished - Ký hiệu: Bdim)</span>
              <p class="text-xs text-gray-600 dark:text-gray-300">Cấu tạo: <strong>Quãng 3 thứ + Quãng 3 thứ</strong> (khoảng cách 1-5 là 5 giảm). Âm hưởng thắt lại, hồi hộp, kịch tính.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Hợp âm 7 át (Dominant 7th) và 3 công năng hòa thanh chính T - S - D",
        content: `
          <div class="space-y-3 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs text-gray-700 dark:text-gray-300">
              <strong>Hợp âm 7 át (Ký hiệu: G7, C7):</strong> Xây dựng trên bậc V của điệu thức. Gồm <em>Hợp âm 3 Trưởng + Quãng 7 thứ</em> (Ví dụ Sol 7: Sol - Si - Rê - Fa). Có sức hút mãnh liệt giải quyết về hợp âm chủ (I).
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs space-y-1">
              <strong class="text-blue-600 dark:text-blue-400 block mb-1">Bộ ba công năng hòa thanh trụ cột (Vòng hòa thanh vàng):</strong>
              <p>1. <strong>T (Tonic - Chủ):</strong> Hợp âm bậc I (ổn định, điểm khởi đầu và kết thúc bản nhạc).</p>
              <p>2. <strong>S (Subdominant - Hạ át):</strong> Hợp âm bậc IV (mở rộng không gian âm nhạc, chuyển động rời xa chủ âm).</p>
              <p>3. <strong>D (Dominant - Át):</strong> Hợp âm bậc V (căng thẳng đỉnh điểm, tạo lực hút tất yếu trở về giải quyết ở hợp âm Chủ I).</p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Xếp 3 nốt nhạc tạo thành hợp âm Đô trưởng (C: C - E - G) và La thứ (Am: A - C - E) trên phím đàn phím hoặc đàn Guitar.",
      "Xác định 3 hợp âm chính T - S - D của giọng Đô trưởng: bậc I (C), bậc IV (F), bậc V (G hoặc G7).",
      "Thực hành bấm chuyển đổi vòng hòa thanh kinh điển C - Am - F - G trên đàn đệm hát."
    ],
    summary: "Hợp âm gồm từ 3 nốt xếp theo quãng 3. Hợp âm 3 Trưởng (3T + 3t) vang tươi sáng; 3 Thứ (3t + 3T) vang trầm lắng. Hợp âm 7 át (bậc V) tạo sức căng giải quyết về Chủ âm. Ba công năng cốt lõi T (bậc I) - S (bậc IV) - D (bậc V) là nền tảng của mọi bài hát đệm.",
    quizzes: [
      {
        q: "Cấu tạo của một Hợp âm 3 Trưởng (Major Triad, ví dụ hợp âm Đô trưởng C) gồm các quãng nào xếp chồng lên nhau?",
        options: ["Quãng 3 Trưởng ở dưới + Quãng 3 thứ ở trên", "Quãng 3 thứ ở dưới + Quãng 3 Trưởng ở trên", "Hai quãng 3 Trưởng", "Hai quãng 3 thứ"],
        correctIndex: 0,
        explain: "Hợp âm 3 Trưởng gồm âm gốc đến âm ba là quãng 3 Trưởng (2 cung), âm ba đến âm năm là quãng 3 thứ (1,5 cung)."
      },
      {
        q: "Hợp âm 7 át (Dominant 7th, ví dụ Sol 7 - G7) được xây dựng trên bậc mấy của thang âm giọng điệu?",
        options: ["Bậc I (Âm chủ)", "Bậc IV (Hạ át)", "Bậc V (Âm át)", "Bậc VII (Âm dẫn)"],
        correctIndex: 2,
        explain: "Hợp âm 7 át được xây dựng trên bậc V (Dominant) của thang âm, có sức căng tự nhiên giải quyết về hợp âm chủ bậc I."
      },
      {
        q: "Trong giọng Đô trưởng (C-dur), ba hợp âm trụ cột đóng vai trò Chủ (T), Hạ át (S) và Át (D) lần lượt là những hợp âm nào?",
        options: ["C - Dm - Em", "C - F - G (hoặc G7)", "Am - Dm - Em", "F - G - Am"],
        correctIndex: 1,
        explain: "Ở giọng Đô trưởng: Bậc I là C (Chủ - T), Bậc IV là F (Hạ át - S), Bậc V là G hoặc G7 (Át - D)."
      },
      {
        q: "Hợp âm La thứ (Am) gồm 3 nốt nhạc nào sau đây?",
        options: ["La - Đô - Mi (A - C - E)", "La - Đô thăng - Mi (A - C# - E)", "Đô - Mi - Sol (C - E - G)", "Rê - Pha - La (D - F - A)"],
        correctIndex: 0,
        explain: "Hợp âm La thứ (Am) gồm nốt gốc La (A), nốt ba Đô (C, cách 1,5 cung) và nốt năm Mi (E, cách 2 cung)."
      }
    ]
  },

  // ================= BÀI 9 =================
  {
    num: 9,
    topicNum: 5,
    title: "Bài 9: Nhạc cụ giai điệu (Sáo Recorder & Kèn phím Melodica)",
    badgeColor: "bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300",
    dotColor: "bg-teal-500",
    time: "45 phút",
    target: "Nắm vững cấu tạo, tư thế cầm và kỹ thuật bấm nốt trên sáo Recorder Soprano (hệ thống bấm Baroque / German); Nắm vững kỹ thuật ngậm thổi và bấm phím kèn Melodica; Diễn tấu chuẩn xác bài tập giai điệu đơn giản.",
    intro: "Sáo Recorder và kèn Melodica là hai nhạc cụ giai điệu giáo dục được đưa vào chương trình phổ thông thế giới nhờ tính tiện lợi, dễ học, âm thanh trong trẻo và rèn luyện cảm âm xuất sắc.",
    sections: [
      {
        title: "1. Kỹ thuật diễn tấu Sáo Recorder Soprano",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800 text-xs">
              <h5 class="font-bold text-teal-700 dark:text-teal-300 text-xs sm:text-sm uppercase mb-1">
                Tư thế bấm lỗ sáo Recorder
              </h5>
              <ul class="text-gray-600 dark:text-gray-300 space-y-1">
                <li><strong>Tay trái đặt ở phía trên:</strong> Ngón cái bịt lỗ số 0 (phía sau), ngón trỏ, giữa, áp út bịt các lỗ 1, 2, 3 phía trước.</li>
                <li><strong>Tay phải đặt ở phía dưới:</strong> Ngón cái đỡ thân sáo phía sau, các ngón trỏ, giữa, áp út, út bịt các lỗ 4, 5, 6, 7.</li>
                <li>Dùng phần đệm thịt mềm của đầu ngón tay bịt kín lỗ sáo, không dùng móng tay để tránh xì hơi làm lạc nốt.</li>
              </ul>
            </div>
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1">
                Kỹ thuật đánh lưỡi (Tonguing)
              </h5>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Khi bắt đầu thổi mỗi nốt nhạc, dùng đầu lưỡi phát âm nhẹ chữ <strong>'Tu'</strong> hoặc <strong>'Du'</strong> để luồng hơi bắt đầu gọn gàng, trong trẻo. Luồng hơi thổi vừa phải, êm dịu, không thổi quá mạnh làm vỡ tiếng kêu chói tai.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Kỹ thuật diễn tấu Kèn phím (Melodica)",
        content: `
          <p class="mb-2 text-xs text-gray-700 dark:text-gray-300">
            <strong>Kèn phím (Melodica / Pianica):</strong> Kết hợp độc đáo giữa bàn phím đàn Piano và lưỡi gà thổi bằng hơi.
          </p>
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs space-y-1.5 text-gray-600 dark:text-gray-300">
            <p>1. <strong>Tư thế:</strong> Cầm ống ngậm bằng môi (không cắn răng), tay trái giữ dây đai lưng kèn (khi đứng) hoặc đặt kèn trên bàn dùng ống thổi mềm dài (khi ngồi).</p>
            <p>2. <strong>Nguyên lý:</strong> Muốn nốt nhạc vang lên, người chơi phải <em>vừa nhấn ngón tay xuống phím đàn vừa thổi luồng hơi đều vào ống</em>. Nhả ngón tay hoặc ngừng thổi thì âm thanh dứt.</p>
          </div>
        `
      }
    ],
    practice: [
      "Thực hành thổi nốt Si (B), La (A), Sol (G) trên sáo Recorder bằng các ngón tay trái kết hợp kỹ thuật đánh lưỡi 'Tu'.",
      "Thổi bài hát thiếu nhi 'Kìa con bướm vàng' (Frère Jacques) gồm các nốt C - D - E - C trên sáo Recorder hoặc Melodica.",
      "Vệ sinh và bảo quản ống sáo Recorder bằng que lau khô sau mỗi buổi tập luyện."
    ],
    summary: "Sáo Recorder đòi hỏi bịt kín lỗ bằng phần đệm ngón tay và đánh lưỡi 'Tu' nhẹ nhàng. Kèn Melodica kết hợp bấm ngón tay phím đàn piano với kiểm soát luồng hơi thở đều đặn để biểu diễn giai điệu.",
    quizzes: [
      {
        q: "Trên cây sáo Recorder Soprano, tay nào của người chơi theo quy chuẩn quốc tế bắt buộc phải đặt ở PHÍA TRÊN (gần ống ngậm)?",
        options: ["Tay phải", "Tay trái", "Tay nào cũng được", "Cả hai tay cầm cùng lúc"],
        correctIndex: 1,
        explain: "Quy chuẩn quốc tế sáo Recorder: Tay trái luôn đặt phía trên bịt lỗ 0, 1, 2, 3; tay phải đặt phía dưới bịt lỗ 4, 5, 6, 7."
      },
      {
        q: "Kỹ thuật dùng đầu lưỡi phát âm nhẹ chữ 'Tu' hoặc 'Du' khi bắt đầu thổi từng nốt sáo Recorder được gọi là kỹ thuật gì?",
        options: ["Kỹ thuật rung ngón", "Kỹ thuật đánh lưỡi (Tonguing)", "Kỹ thuật vuốt hơi", "Kỹ thuật nấc cụt"],
        correctIndex: 1,
        explain: "Đánh lưỡi (Tonguing) tạo khởi đầu âm thanh rõ ràng, dứt khoát và kiểm soát luồng khí tinh tế khi diễn tấu nhạc cụ hơi."
      },
      {
        q: "Nguyên nhân phổ biến nhất khiến sáo Recorder phát ra tiếng rít chói tai hoặc không ra đúng cao độ nốt nhạc là gì?",
        options: ["Do ngón tay không bịt kín hoàn toàn lỗ sáo hoặc luồng hơi thổi quá mạnh", "Do sáo làm bằng nhựa", "Do không cắn mạnh vào ống ngậm", "Do đứng hát"],
        correctIndex: 0,
        explain: "Hở lỗ sáo dù chỉ một khe nhỏ hoặc thổi hơi quá mạnh với áp suất cao sẽ lập tức khiến âm thanh bị xì và rít cao chói tai."
      },
      {
        q: "Nhạc cụ kèn phím (Melodica) phát ra âm thanh nhờ nguyên lý kết hợp nào?",
        options: ["Gõ dùi lên mặt phím", "Vừa bấm phím đàn vừa thổi hơi làm rung các lá đồng (lưỡi gà) bên trong", "Cắm điện và vặn volume", "Kéo vĩ như đàn violin"],
        correctIndex: 1,
        explain: "Melodica là nhạc khí lưỡi gà tự do, phím đàn mở van khí để luồng hơi thổi làm rung lá đồng tương ứng phát ra nốt nhạc."
      }
    ]
  },

  // ================= BÀI 10 =================
  {
    num: 10,
    topicNum: 5,
    title: "Bài 10: Nhạc cụ hòa âm (Guitar / Phím điện tử Keyboard)",
    badgeColor: "bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300",
    dotColor: "bg-teal-500",
    time: "45 phút",
    target: "Bấm đúng thế tay các hợp âm cơ bản trên đàn Guitar (C, Am, Em, G, Dm) hoặc Keyboard; Thực hành các điệu đệm hát thông dụng: Điệu Valse (nhịp 3/4), Ballad / Pop (nhịp 4/4); Phối hợp giữa đệm đàn và giữ nhịp cho giọng hát.",
    intro: "Cây đàn Guitar mộc mạc bên ánh lửa trại hay tiếng đàn Keyboard hiện đại có thể tự mình tạo nên cả một dàn nhạc thu nhỏ nhờ khả năng chơi hòa âm và tiết điệu phong phú.",
    sections: [
      {
        title: "1. Bấm hợp âm cơ bản trên đàn Guitar thùng (Acoustic / Classic)",
        content: `
          <p class="mb-3">
            Đàn Guitar có 6 dây (từ dây 1 bé nhất phía dưới đến dây 6 to nhất phía trên: <strong>Mi - Si - Sol - Rê - La - Mi</strong> / E - B - G - D - A - E):
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <h5 class="font-bold text-teal-700 dark:text-teal-300 text-xs sm:text-sm mb-1">Nguyên tắc bấm ngón tay trái</h5>
              <ul class="text-gray-600 dark:text-gray-300 space-y-1">
                <li>Quy ước ngón: 1 (Ngón trỏ), 2 (Ngón giữa), 3 (Ngón áp út), 4 (Ngón út).</li>
                <li>Ngón tay vuông góc với mặt phím, bấm sát vào thanh phím kim loại (Fret) để âm thanh tròn tiếng, không bị rè (buzz).</li>
                <li>Ngón tay cái tì nhẹ ở giữa phía sau cần đàn làm điểm tựa.</li>
              </ul>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm mb-1">Các hợp âm nhập môn</h5>
              <div class="space-y-1 text-gray-700 dark:text-gray-300 font-mono">
                <div>- <strong>C (Đô trưởng):</strong> Ngón 1 dây 2 ngăn 1, ngón 2 dây 4 ngăn 2, ngón 3 dây 5 ngăn 3.</div>
                <div>- <strong>Am (La thứ):</strong> Ngón 1 dây 2 ngăn 1, ngón 2 dây 4 ngăn 2, ngón 3 dây 3 ngăn 2.</div>
                <div>- <strong>Em (Mi thứ):</strong> Ngón 2 dây 5 ngăn 2, ngón 3 dây 4 ngăn 2.</div>
              </div>
            </div>
          </div>
        `
      },
      {
        title: "2. Các tiết điệu đệm hát cơ bản (Strumming & Picking)",
        content: `
          <div class="space-y-3 my-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <strong class="text-amber-700 dark:text-amber-400 block mb-1">Điệu Valse (Nhịp 3/4 - Nhịp vanh nhún nhảy):</strong>
              <p class="text-gray-600 dark:text-gray-300">Công thức tay phải: <strong>BASS - Chát - Chát</strong> (Phách 1 gảy nốt trầm Bass, phách 2 và 3 móc đồng thời 3 dây dưới Chát - Chát). Rất hợp cho các bài hát vui tươi, nhịp nhàng.</p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <strong class="text-blue-700 dark:text-blue-400 block mb-1">Điệu Ballad / Slow Rock (Nhịp 4/4 - Trữ tình nhẹ nhàng):</strong>
              <p class="text-gray-600 dark:text-gray-300">Công thức rải ngón phổ biến: <strong>BASS - 3 - 2 - 3 - 1 - 3 - 2 - 3</strong> (Ngón cái gảy dây Bass, các ngón trỏ, giữa, áp út gảy dây 3, 2, 1 nối tiếp êm dịu).</p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Luyện tập chuyển đổi luân phiên giữa 2 thế bấm hợp âm Đô trưởng (C) và La thứ (Am) trên cần đàn Guitar.",
      "Gảy đệm điệu Valse (BASS - Chát - Chát) trên nhịp 3/4 theo vòng hợp âm C - Am - F - G.",
      "Sử dụng đàn Keyboard điện tử chọn tiết điệu (Style) Ballad tempo 75 và thực hành bấm hợp âm tay trái đệm cho bạn hát."
    ],
    summary: "Đàn Guitar và Keyboard là nhạc cụ hòa âm đệm hát thông dụng. Nắm vững cách bấm hợp âm vuông góc không rè tiếng và thuần thục các tiết điệu Valse (3/4), Ballad (4/4) giúp tạo nền hòa thanh sinh động cho ca khúc.",
    quizzes: [
      {
        q: "Dây đàn số 1 (dây nhỏ nhất, nằm ở vị trí thấp nhất) trên cây đàn Guitar tiêu chuẩn phát ra cao độ của nốt nhạc nào khi gảy dây buông?",
        options: ["Nốt Đô (C)", "Nốt Mi cao (E)", "Nốt La (A)", "Nốt Sol (G)"],
        correctIndex: 1,
        explain: "Quy chuẩn dây buông Guitar từ dây 6 đến dây 1: Mì - Là - Rê - Sol - Si - Mí (dây 1 là nốt Mi cao E4)."
      },
      {
        q: "Tiết điệu đệm hát nào có công thức nhịp điệu đặc trưng là 'BASS - Chát - Chát' được chơi ở nhịp 3/4 (một phách mạnh và hai phách nhẹ)?",
        options: ["Điệu Valse (Van-xơ)", "Điệu Disco", "Điệu Cha-cha-cha", "Điệu March (Hành khúc)"],
        correctIndex: 0,
        explain: "Điệu Valse viết ở nhịp 3/4, đặc trưng bởi phách 1 nhấn nốt trầm Bass, phách 2 và 3 đệm nhẹ Chát - Chát tạo cảm giác đung đưa khiêu vũ."
      },
      {
        q: "Khi bấm các ngăn phím đàn Guitar bằng các ngón tay trái, kỹ thuật nào giúp âm thanh phát ra trong trẻo và không bị rè tiếng (buzz)?",
        options: ["Đặt ngón tay nằm bẹp đè lên các dây bên cạnh", "Ngón tay bấm vuông góc với mặt phím và sát về phía thanh kim loại của ngăn phím", "Bấm thật lỏng lẻo", "Dùng móng tay bấm vào dây"],
        correctIndex: 1,
        explain: "Bấm đầu ngón tay vuông góc giúp không chạm vào dây lân cận và bấm sát phím kim loại sẽ tốn ít lực mà tiếng đàn tròn trịa nhất."
      },
      {
        q: "Trên đàn Keyboard điện tử, cụm phím đen được bố trí xen kẽ theo quy luật lặp lại nào trên suốt chiều dài bàn phím?",
        options: ["Cụm 1 phím đen rồi đến 1 phím trắng", "Cụm 2 phím đen xen kẽ cụm 3 phím đen", "Cụm 4 phím đen liên tiếp", "Không theo quy luật nào"],
        correctIndex: 1,
        explain: "Phím đen trên đàn phím Piano/Keyboard luôn được sắp xếp theo chu kỳ lặp: Cụm 2 phím đen (nốt Đô nằm ngay trước nốt đen đầu) và Cụm 3 phím đen."
      }
    ]
  },

  // ================= BÀI 11 =================
  {
    num: 11,
    topicNum: 6,
    title: "Bài 11: Âm nhạc thời kỳ Lãng mạn (Chopin, Tchaikovsky, Schubert)",
    badgeColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    dotColor: "bg-purple-500",
    time: "45 phút",
    target: "Hiểu được tinh thần tự do, giàu cảm xúc cá nhân của âm nhạc thời kỳ Lãng mạn (thế kỷ XIX); Nắm vững tiểu sử và đóng góp của Frédéric Chopin, Pyotr Ilyich Tchaikovsky, Franz Schubert; Cảm thụ nét đẹp thơ mộng của thể loại Dạ khúc (Nocturne) và Nhạc múa Ba-lê.",
    intro: "Rời xa sự khuôn phép mực thước của thời kỳ Cổ điển, âm nhạc thế kỷ XIX bùng nổ những khát khao tự do, tình yêu say đắm và lòng yêu nước nồng nàn. Đó là kỷ nguyên huy hoàng của chủ nghĩa Lãng mạn.",
    sections: [
      {
        title: "1. Đặc điểm thời kỳ Lãng mạn và 'Nhà thơ của cây đàn Piano' Chopin",
        content: `
          <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 space-y-2">
            <h5 class="font-bold text-purple-700 dark:text-purple-300 text-xs sm:text-sm uppercase flex items-center gap-1.5">
              <i class="fa-solid fa-feather"></i> Frédéric Chopin (1810 - 1849) - Niềm tự hào Ba Lan
            </h5>
            <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
              Toàn bộ sự nghiệp vĩ đại của Chopin hầu như chỉ dành trọn vẹn cho cây đàn <strong>Piano</strong>. Âm nhạc của ông chứa chan nỗi nhớ quê hương Ba Lan da diết, tinh tế và thơ mộng tột bậc.
            </p>
            <ul class="list-disc pl-5 text-xs text-gray-600 dark:text-gray-300 space-y-1">
              <li><strong>Dạ khúc (Nocturne):</strong> Khúc nhạc đêm trữ tình, lãng đãng, êm đềm với giai điệu như lời tâm tình thì thầm (tiêu biểu: <em>Nocturne Op. 9 No. 2</em>).</li>
              <li><strong>Điệu múa dân tộc Ba Lan:</strong> Nâng tầm các điệu vũ Ba Lan thành kiệt tác âm nhạc thính phòng qua các bản <em>Polonaise</em> (vũ khúc quý tộc oai nghiêm) và <em>Mazurka</em> (điệu múa dân gian vui tươi).</li>
            </ul>
          </div>
        `
      },
      {
        title: "2. Franz Schubert (Đức) & Pyotr Ilyich Tchaikovsky (Nga)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1">
                Franz Schubert - Ông vua ca khúc nghệ thuật (Lied)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Nhà soạn nhạc người Áo đã nâng thể loại ca khúc thính phòng lên đỉnh cao nghệ thuật đỉnh cao với hơn 600 bài hát. Giai điệu gắn liền với lời thơ sâu lắng của Goethe. Tác phẩm tiêu biểu: <em>Bản Serenade (Khúc ca ban chiều)</em>, <em>Ave Maria</em>, Giao hưởng Dở dang (Unfinished Symphony).
              </p>
            </div>
            <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
              <h5 class="font-bold text-rose-700 dark:text-rose-300 text-xs sm:text-sm uppercase mb-1">
                P.I. Tchaikovsky - Đại thụ âm nhạc Nga
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Đưa âm nhạc giao hưởng và kịch múa Ba-lê (Ballet) của Nga chinh phục toàn thế giới. Âm nhạc nồng nàn cảm xúc, giai điệu đẹp mê đắm. Các vở vũ kịch kinh điển sống mãi: <em>Hồ thiên nga (Swan Lake)</em>, <em>Kẹp hạt dẻ (The Nutcracker)</em>, <em>Người đẹp ngủ trong rừng</em> và Bản Piano Concerto số 1.
              </p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Thưởng thức giai điệu du dương của bản Dạ khúc Nocturne Op. 9 No. 2 của Chopin và viết vài dòng cảm nhận tâm trạng của bản thân.",
      "Nghe đoạn nhạc 'Điệu vũ đàn thiên nga' trong vở vũ kịch Hồ Thiên Nga của Tchaikovsky và nhận biết âm sắc của kèn Oboe và bộ Dây.",
      "Thảo luận: Vai trò của tình yêu quê hương đất nước trong các tác phẩm âm nhạc của Frédéric Chopin."
    ],
    summary: "Thời kỳ Lãng mạn (thế kỷ XIX) tôn vinh cảm xúc cá nhân tự do. Chopin là bậc thầy vĩ đại của cây đàn Piano với thể loại Dạ khúc (Nocturne); Schubert bất hủ với ca khúc nghệ thuật Serenade; Tchaikovsky đưa kịch múa Ba-lê (Hồ thiên nga) lên tầm đỉnh cao nhân loại.",
    quizzes: [
      {
        q: "Nhà soạn nhạc vĩ đại người Ba Lan nào được mệnh danh là 'Nhà thơ của cây đàn Piano' với các bản Dạ khúc (Nocturne) tuyệt mỹ?",
        options: ["Frédéric Chopin", "W.A. Mozart", "J.S. Bach", "L.V. Beethoven"],
        correctIndex: 0,
        explain: "Chopin dành gần như trọn đời cống hiến cho cây đàn piano với phong cách trữ tình sâu lắng, tinh tế hàng đầu thế giới."
      },
      {
        q: "Vở kịch múa Ba-lê (Ballet) nổi tiếng thế giới 'Hồ thiên nga' (Swan Lake) là kiệt tác của nhà soạn nhạc nào?",
        options: ["P.I. Tchaikovsky (Nga)", "F. Schubert (Áo)", "J. Haydn (Áo)", "G. Verdi (Ý)"],
        correctIndex: 0,
        explain: "Tác phẩm kịch múa kinh điển 'Hồ thiên nga' do nhà soạn nhạc người Nga Pyotr Ilyich Tchaikovsky sáng tác năm 1876."
      },
      {
        q: "Thể loại âm nhạc nào có tên gọi mang ý nghĩa là 'Khúc nhạc đêm', miêu tả cảnh đêm êm đềm, huyền bí và những nỗi niềm tâm sự u hoài?",
        options: ["Hành khúc (March)", "Dạ khúc (Nocturne)", "Vũ khúc Valse", "Tấu khúc Overture"],
        correctIndex: 1,
        explain: "Nocturne (Dạ khúc) là thể loại tiểu phẩm âm nhạc thính phòng gợi tả không gian tĩnh lặng và cảm xúc thơ mộng của đêm tối."
      },
      {
        q: "Tác phẩm ca khúc nghệ thuật 'Khúc ca ban chiều' (Serenade) trữ tình da diết được sáng tác bởi nhạc sĩ nào?",
        options: ["Franz Schubert", "F. Chopin", "L.V. Beethoven", "W.A. Mozart"],
        correctIndex: 0,
        explain: "Bản 'Serenade' bất hủ là một trong những ca khúc nghệ thuật (Lied) nổi tiếng nhất của nhạc sĩ người Áo Franz Schubert."
      }
    ]
  },

  // ================= BÀI 12 =================
  {
    num: 12,
    topicNum: 6,
    title: "Bài 12: Nghệ thuật Nhạc kịch Opera và Hợp xướng",
    badgeColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    dotColor: "bg-purple-500",
    time: "45 phút",
    target: "Hiểu được khái niệm, nguồn gốc và cấu trúc của thể loại kịch hát thính phòng Opera; Phân biệt các thành phần cốt lõi: Aria, Recitative, Overture, Chorus; Nhận biết 4 loại giọng hát thính phòng cơ bản (Soprano, Alto, Tenor, Bass).",
    intro: "Một tác phẩm nghệ thuật đỉnh cao kết hợp hoàn hảo giữa ca kịch, thi ca, diễn xuất, phục trang sân khấu hoành tráng và dàn nhạc giao hưởng phụ họa trực tiếp - đó chính là Nhạc kịch Opera.",
    sections: [
      {
        title: "1. Khái niệm và Các thành phần cấu tạo nên một vở Opera",
        content: `
          <p class="mb-3">
            <strong>Nhạc kịch Opera:</strong> Ra đời tại nước Ý vào khoảng năm 1600. Đây là loại hình nghệ thuật sân khấu tổng hợp mà toàn bộ lời thoại và kịch bản đều được các diễn viên thể hiện bằng giọng hát thanh nhạc bác học (Bel Canto) cùng dàn nhạc giao hưởng.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <strong class="text-rose-600 dark:text-rose-400 block mb-1">Khúc dạo đầu (Overture):</strong>
              <p class="text-gray-600 dark:text-gray-300">Tác phẩm khí nhạc do dàn nhạc giao hưởng biểu diễn trước khi mở màn sân khấu, giới thiệu các chủ đề âm nhạc chính của vở kịch.</p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <strong class="text-blue-600 dark:text-blue-400 block mb-1">Khúc ca cá nhân (Aria):</strong>
              <p class="text-gray-600 dark:text-gray-300">Đoạn hát độc tấu của nhân vật chính, có giai điệu hoàn chỉnh, đẹp đẽ, là nơi ca sĩ phô diễn kỹ thuật điêu luyện và bộc lộ nội tâm giằng xé sâu sắc.</p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <strong class="text-amber-600 dark:text-amber-400 block mb-1">Khúc hát nói (Recitative):</strong>
              <p class="text-gray-600 dark:text-gray-300">Hình thức hát tự do theo tiết tấu đối thoại lời nói thông thường, giúp dẫn dắt câu chuyện kịch tiến triển mau lẹ.</p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <strong class="text-purple-600 dark:text-purple-400 block mb-1">Hợp xướng (Chorus):</strong>
              <p class="text-gray-600 dark:text-gray-300">Đoạn hát tập thể đồ sộ đóng vai trò quần chúng nhân dân, quân sĩ trong vở diễn, tạo nên không khí hoành tráng tráng lệ.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Phân loại các giọng hát thính phòng tiêu chuẩn (Voice Types)",
        content: `
          <div class="overflow-x-auto my-3">
            <table class="min-w-full text-xs text-left border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 uppercase font-semibold">
                <tr>
                  <th class="p-2 border-b border-gray-200 dark:border-gray-700">Tên loại giọng</th>
                  <th class="p-2 border-b border-gray-200 dark:border-gray-700">Giới tính & Âm vực</th>
                  <th class="p-2 border-b border-gray-200 dark:border-gray-700">Đặc tính âm sắc</th>
                  <th class="p-2 border-b border-gray-200 dark:border-gray-700">Vai diễn thường đóng</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700 text-gray-600 dark:text-gray-300">
                <tr>
                  <td class="p-2 font-bold text-rose-600 dark:text-rose-400">Soprano</td>
                  <td class="p-2">Nữ cao</td>
                  <td class="p-2">Trong trẻo, thanh thoát, bay bổng, âm vực cao nhất.</td>
                  <td class="p-2">Nữ nhân vật chính, công chúa, thiếu nữ thánh thiện.</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-amber-600 dark:text-amber-400">Alto (Contralto)</td>
                  <td class="p-2">Nữ trầm / Nữ trung</td>
                  <td class="p-2">Dày dặn, ấm áp, sâu lắng, huyền bí.</td>
                  <td class="p-2">Người mẹ, bà chúa phù thủy, phụ nữ từng trải.</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-blue-600 dark:text-blue-400">Tenor</td>
                  <td class="p-2">Nam cao</td>
                  <td class="p-2">Sáng rực rỡ, hào sảng, âm vang kiêu hãnh.</td>
                  <td class="p-2">Hoàng tử, anh hùng dũng cảm, người tình lãng mạn.</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-purple-600 dark:text-purple-400">Bass</td>
                  <td class="p-2">Nam trầm</td>
                  <td class="p-2">Trầm đục, uy nghiêm, nặng chịch, âm vực thấp nhất.</td>
                  <td class="p-2">Nhà vua, đại giáo hoàng, kẻ phản diện ác độc.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practice: [
      "Lắng nghe trích đoạn Aria nổi tiếng 'Habanera' trong vở kịch kịch Carmen của nhạc sĩ Georges Bizet và nhận biết chất giọng Nữ trung Mezzo-soprano đầy quyến rũ.",
      "Nghe bản Aria 'Nessun Dorma' trong vở kịch Turandot do danh ca nam cao Luciano Pavarotti thể hiện và cảm nhận cao trào nốt Si cao (B4).",
      "Thảo luận nhóm: Sự khác biệt cơ bản giữa Nhạc kịch phương Tây Opera và nghệ thuật Cải lương hoặc Hát Tuồng truyền thống của Việt Nam."
    ],
    summary: "Opera là nghệ thuật nhạc kịch bác học ra đời tại Ý. Cấu trúc gồm Overture (dạo đầu), Aria (độc tấu nội tâm), Recitative (hát nói dẫn chuyện) và Chorus (hợp xướng). Bốn chất giọng thính phòng trụ cột: Nữ cao (Soprano), Nữ trầm (Alto), Nam cao (Tenor), Nam trầm (Bass).",
    quizzes: [
      {
        q: "Trong vở nhạc kịch Opera, đoạn hát độc tấu của nhân vật chính có giai điệu hoàn chỉnh nhằm bộc lộ chiều sâu tâm trạng được gọi là gì?",
        options: ["Aria", "Overture", "Recitative", "Chorus"],
        correctIndex: 0,
        explain: "Aria là khúc ca độc xướng hoàn chỉnh, là điểm sáng thăng hoa cảm xúc và kỹ thuật thanh nhạc đỉnh cao của nhân vật trong vở Opera."
      },
      {
        q: "Loại giọng hát nào sau đây là giọng NỮ có âm vực cao nhất, âm sắc trong trẻo, bay bổng chuyên đóng vai nữ chính?",
        options: ["Soprano", "Alto", "Tenor", "Bass"],
        correctIndex: 0,
        explain: "Soprano là giọng nữ cao, âm vực cao nhất trong hệ thống phân loại giọng hát thanh nhạc thính phòng phương Tây."
      },
      {
        q: "Chất giọng NAM TRẦM có âm vực thấp nhất, âm thanh trầm ấm, vang nặng và uy quyền được gọi là gì?",
        options: ["Tenor", "Baritone", "Bass", "Countertenor"],
        correctIndex: 2,
        explain: "Bass (giọng nam trầm) có âm vực thấp nhất, thường đảm nhận các vai nhà vua, thầy tu hoặc nhân vật phản diện uy nghiêm."
      },
      {
        q: "Quốc gia nào ở châu Âu được coi là quê hương khai sinh ra thể loại nghệ thuật Nhạc kịch Opera vào khoảng năm 1600?",
        options: ["Nước Ý (Italy)", "Nước Nga", "Nước Anh", "Nước Đức"],
        correctIndex: 0,
        explain: "Opera ra đời tại thành phố Florence (nước Ý) vào khoảng năm 1600 bởi nhóm văn nhân Camerata nhằm phục hưng kịch cổ đại Hy Lạp."
      }
    ]
  },

  // ================= BÀI 13 =================
  {
    num: 13,
    topicNum: 7,
    title: "Bài 13: Các dòng nhạc đại chúng (Pop, Rock, Jazz, R&B, EDM, Hip-hop)",
    badgeColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300",
    dotColor: "bg-indigo-500",
    time: "45 phút",
    target: "Nhận biết nguồn gốc, đặc trưng tiết tấu và nhạc cụ tiêu biểu của các dòng nhạc đại chúng (Popular Music): Pop, Rock, Jazz, R&B, EDM, Hip-hop; Phân tích xu hướng kết hợp âm nhạc truyền thống dân tộc với âm nhạc điện tử trong đời sống âm nhạc trẻ Việt Nam.",
    intro: "Mở ứng dụng Spotify hay YouTube Music, chúng ta bắt gặp hàng ngàn bản nhạc thuộc đủ thể loại từ giai điệu Pop bắt tai, tiết tấu sôi động của EDM đến những câu vần điệu điêu luyện của Hip-hop. Các dòng nhạc này xuất phát từ đâu?",
    sections: [
      {
        title: "1. Các dòng nhạc đại chúng tiêu biểu trên thế giới",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <strong class="text-rose-600 dark:text-rose-400 block mb-1">Pop Music (Nhạc Pop)</strong>
              <p class="text-gray-600 dark:text-gray-300">Giai điệu dễ nhớ, ca từ gần gũi, cấu trúc Verse - Chorus (Điệp khúc) chuẩn mực, tính đại chúng cao, cập nhật xu hướng nghe nhìn hiện đại.</p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <strong class="text-blue-600 dark:text-blue-400 block mb-1">Rock Music (Nhạc Rock)</strong>
              <p class="text-gray-600 dark:text-gray-300">Khởi nguồn từ thập niên 1950, đặc trưng bởi âm thanh khuếch đại uy lực của Guitar điện tử (Overdrive/Distortion), Bass điện và tiếng trống dồn dập, thể hiện cá tính mạnh mẽ.</p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <strong class="text-amber-600 dark:text-amber-400 block mb-1">Jazz & R&B</strong>
              <p class="text-gray-600 dark:text-gray-300">Bắt nguồn từ văn hóa người Mỹ gốc Phi, đặc trưng bởi nghệ thuật ngẫu hứng (Improvisation), tiết tấu đảo phách (Syncopation) và hòa âm phức điệu nhiều màu sắc cảm xúc.</p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <strong class="text-purple-600 dark:text-purple-400 block mb-1">Hip-hop & Rap</strong>
              <p class="text-gray-600 dark:text-gray-300">Ra đời tại khu phố Bronx (New York thập niên 1970). Nghệ thuật nói có vần điệu (Rapping) trên nền nhạc đệm nhịp nhàng (Beats), lồng ghép thông điệp xã hội sâu sắc.</p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <strong class="text-teal-600 dark:text-teal-400 block mb-1">EDM (Electronic Dance Music)</strong>
              <p class="text-gray-600 dark:text-gray-300">Âm nhạc khiêu vũ điện tử tạo ra từ bộ tổng hợp âm Synthesizer và máy tính. Tiết tấu dồn dập (House, Trance, Dubstep), cấu trúc cao trào Drop bùng nổ năng lượng.</p>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">World Music (Giao thoa)</strong>
              <p class="text-gray-600 dark:text-gray-300">Xu hướng kết hợp chất liệu nhạc cụ dân tộc cổ truyền (như đàn Tranh, sáo Trúc, đàn Bầu) với hòa âm phối khí hiện đại (Pop/EDM) rất thịnh hành tại Việt Nam.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Làn sóng âm nhạc hiện đại kết hợp bản sắc dân tộc tại Việt Nam",
        content: `
          <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs text-gray-700 dark:text-gray-300 space-y-1">
            <h5 class="font-bold text-emerald-800 dark:text-emerald-300 mb-1">Dấu ấn sáng tạo của nghệ sĩ trẻ Việt Nam:</h5>
            <p>Các tác phẩm âm nhạc đương đại Việt Nam như <em>Để Mị nói cho mà nghe</em>, <em>Nấu ăn cho em</em>, <em>Bắc Kim Thang</em>, <em>À lôi</em>... đã kết hợp nhuần nhuyễn giữa giai điệu dân gian, nhạc cụ dân tộc và tiết tấu hiện đại (Hip-hop, Trap, EDM), mang lại sức sống mới cho âm nhạc truyền thống và thu hút bạn bè quốc tế.</p>
          </div>
        `
      }
    ],
    practice: [
      "Chọn một bài hát yêu thích trong điện thoại của em, phân tích xem bài hát đó thuộc thể loại âm nhạc nào và cấu trúc bài hát gồm mấy phần.",
      "Tìm kiếm một bài hát V-Pop đương đại có sử dụng nhạc cụ dân tộc Việt Nam (như sáo trúc, đàn tranh) và nhận xét hiệu quả biểu cảm.",
      "Thảo luận: Tại sao thể loại Rap/Hip-hop lại có sức hút mạnh mẽ đối với giới trẻ học sinh hiện nay?"
    ],
    summary: "Các dòng nhạc đại chúng (Pop, Rock, Jazz, R&B, Hip-hop, EDM) phản ánh hơi thở đời sống hiện đại. Xu hướng giao thoa giữa chất liệu âm nhạc truyền thống dân tộc và công nghệ hòa âm phối khí đương đại đang là con đường đưa âm nhạc Việt Nam vươn tầm thế giới.",
    quizzes: [
      {
        q: "Dòng nhạc nào có đặc trưng nổi bật là sử dụng âm thanh khuếch đại điện tử của đàn Guitar điện tử (Distortion/Overdrive) kết hợp với dàn trống dồn dập, mạnh mẽ?",
        options: ["Nhạc Pop", "Nhạc Cổ điển", "Nhạc Rock", "Nhạc Thính phòng"],
        correctIndex: 2,
        explain: "Nhạc Rock đặc trưng bởi sức mạnh âm thanh của Guitar điện tử khuếch đại công suất lớn và tiết tấu trống dồn dập, nổi loạn."
      },
      {
        q: "Yếu tố nghệ thuật nào được coi là linh hồn, đặc trưng sáng tạo quan trọng bậc nhất của thể loại âm nhạc Jazz?",
        options: ["Học thuộc lòng từng nốt nhạc", "Nghệ thuật ngẫu hứng (Improvisation) của nhạc công trên nền hòa âm", "Chỉ dùng đàn tranh", "Không có người hát"],
        correctIndex: 1,
        explain: "Ngẫu hứng (Improvisation) là trái tim của nhạc Jazz, cho phép nghệ sĩ biểu diễn tự do sáng tạo giai điệu ngay trên sân khấu."
      },
      {
        q: "Viết tắt EDM trong âm nhạc đại chúng đương đại có nghĩa là gì?",
        options: ["Electronic Dance Music (Âm nhạc khiêu vũ điện tử)", "Easy Digital Music", "European Drum Music", "Electric Drum Machine"],
        correctIndex: 0,
        explain: "EDM là viết tắt của Electronic Dance Music, thể loại âm nhạc điện tử sôi động chuyên phục vụ các lễ hội âm nhạc và vũ trường."
      },
      {
        q: "Hình thức biểu diễn đọc hoặc nói các ca từ có vần điệu, nhịp phách dứt khoát trên nền nhạc đệm (Beats) trong văn hóa Hip-hop được gọi là gì?",
        options: ["Hát Opera", "Hát Yodel", "Rapping (Đọc Rap)", "Hát Xoan"],
        correctIndex: 2,
        explain: "Rapping (hát Rap) là nghệ thuật ngôn từ vần điệu đặc trưng của văn hóa Hip-hop, truyền tải suy nghĩ và cảm xúc cá tính."
      }
    ]
  },

  // ================= BÀI 14 =================
  {
    num: 14,
    topicNum: 7,
    title: "Bài 14: Công nghệ âm nhạc và Phòng thu kỹ thuật số (DAW & MIDI)",
    badgeColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300",
    dotColor: "bg-indigo-500",
    time: "45 phút",
    target: "Hiểu được vai trò của công nghệ số trong quy trình sản xuất âm nhạc hiện đại; Nắm được khái niệm giao thức MIDI; Tìm hiểu các phần mềm trạm làm việc âm thanh số (DAW); Nắm vững 5 bước sản xuất một bản nhạc hoàn chỉnh.",
    intro: "Một nhà sản xuất âm nhạc (Producer) ngày nay có thể ngồi ngay tại phòng ngủ với chiếc máy tính xách tay và một bộ tai nghe kiểm âm để tạo ra một bản hit đạt triệu lượt nghe. Công nghệ âm nhạc số vận hành như thế nào?",
    sections: [
      {
        title: "1. Khái niệm MIDI và Trạm làm việc âm thanh số (DAW)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1">
                <i class="fa-solid fa-microchip"></i> Chuẩn giao thức MIDI
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong>MIDI (Musical Instrument Digital Interface):</strong> Không phải là tệp âm thanh thực tế mà là giao thức truyền thông dữ liệu kỹ thuật số ghi lại các thông số: <em>nốt nhạc nào được bấm, độ dài nốt, lực gõ mạnh nhẹ (Velocity)</em>. Cho phép một bàn phím MIDI Keyboard điều khiển hàng ngàn tiếng nhạc cụ ảo (Virtual Instruments).
              </p>
            </div>
            <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h5 class="font-bold text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm uppercase mb-1">
                <i class="fa-solid fa-sliders"></i> Phần mềm trạm làm việc âm thanh số (DAW)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong>DAW (Digital Audio Workstation):</strong> Phần mềm trung tâm của phòng thu chuyên nghiệp, tích hợp máy thu âm đa kênh (Multi-track), chỉnh sửa sóng âm, mixer và hiệu ứng âm thanh (EQ, Reverb, Delay). Tiêu biểu: <em>FL Studio, Logic Pro, Ableton Live, Cubase, GarageBand</em>.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Quy trình 5 bước sản xuất bài hát chuyên nghiệp (Music Production)",
        content: `
          <div class="space-y-2 my-3">
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-lg border border-gray-200 dark:border-gray-700 text-xs flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold shrink-0">Bước 1</span>
              <span><strong>Thu âm (Recording / Tracking):</strong> Thu nhận tín hiệu giọng hát (Vocal) qua micro và nhạc cụ mộc qua Audio Interface vào máy tính.</span>
            </div>
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-lg border border-gray-200 dark:border-gray-700 text-xs flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold shrink-0">Bước 2</span>
              <span><strong>Hòa âm phối khí (Arranging):</strong> Xây dựng beat trống, chèn các nhạc cụ đệm (bass, guitar, piano, synth) định hình phong cách ca khúc.</span>
            </div>
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-lg border border-gray-200 dark:border-gray-700 text-xs flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 font-bold shrink-0">Bước 3</span>
              <span><strong>Biên tập (Editing):</strong> Cắt gọt tạp âm, chỉnh sửa độ chuẩn xác cao độ (Tuning pitch qua Auto-tune / Melodyne) và căn nhịp (Time alignment).</span>
            </div>
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-lg border border-gray-200 dark:border-gray-700 text-xs flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 font-bold shrink-0">Bước 4</span>
              <span><strong>Trộn âm (Mixing):</strong> Cân bằng âm lượng giữa các nhạc cụ và giọng hát, phân chia không gian trái/phải (Panning), thêm hiệu ứng vang không gian Reverb.</span>
            </div>
            <div class="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-lg border border-gray-200 dark:border-gray-700 text-xs flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-bold shrink-0">Bước 5</span>
              <span><strong>Hoàn chỉnh âm bản (Mastering):</strong> Xử lý giai đoạn cuối để bài hát đạt độ to chuẩn công nghiệp (LUFS), âm thanh tối ưu khi phát trên mọi thiết bị (tai nghe, loa xe hơi, smartphone).</span>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Trải nghiệm tạo một đoạn tiết tấu nhịp điệu (Beat) đơn giản trên phần mềm trực tuyến Soundtrap hoặc GarageBand.",
      "Tìm hiểu chức năng của thiết bị Audio Interface (Soundcard thu âm) đóng vai trò chuyển đổi tín hiệu tương tự Analog sang tín hiệu số Digital.",
      "Thảo luận: Việc lạm dụng công nghệ chỉnh phô Auto-Tune có làm giảm đi giá trị giọng hát thực thụ của ca sĩ hay không?"
    ],
    summary: "Công nghệ âm nhạc số giải phóng sức sáng tạo thông qua chuẩn giao tiếp MIDI và phần mềm trạm làm việc DAW (FL Studio, Logic Pro). Quy trình sản xuất bài hát hoàn chỉnh gồm 5 bước bài bản: Thu âm -> Hòa âm phối khí -> Biên tập -> Trộn âm (Mixing) -> Hoàn chỉnh âm bản (Mastering).",
    quizzes: [
      {
        q: "Thuật ngữ DAW (Digital Audio Workstation) trong sản xuất âm nhạc dùng để chỉ điều gì?",
        options: ["Một loại micro thu âm", "Phần mềm máy tính chuyên dụng dùng để thu âm, biên tập, hòa âm phối khí và xử lý âm thanh", "Một loại đàn guitar điện", "Bản hợp đồng biểu diễn"],
        correctIndex: 1,
        explain: "DAW là trạm làm việc âm thanh số (như FL Studio, Logic Pro, Cubase) nơi toàn bộ quá trình sản xuất bài hát diễn ra trên máy tính."
      },
      {
        q: "Chuẩn giao thức kết nối số MIDI (Musical Instrument Digital Interface) thực chất truyền tải thông tin gì giữa các thiết bị?",
        options: ["Sóng âm thanh thực tế dạng sóng MP3", "Dữ liệu lệnh điều khiển nốt nhạc (nốt nào, độ dài, lực bấm mạnh nhẹ)", "Lời bài hát viết bằng tiếng Anh", "Hình ảnh video sân khấu"],
        correctIndex: 1,
        explain: "MIDI chỉ truyền dữ liệu sự kiện biểu diễn (nốt bấm, vận tốc lực bấm, thời gian) chứ không truyền file âm thanh trực tiếp."
      },
      {
        q: "Công đoạn nào trong quy trình sản xuất âm thanh có nhiệm vụ cân bằng âm lượng, chia không gian âm thanh (Panning) và thêm hiệu ứng vang Reverb cho tất cả các track nhạc cụ và vocal?",
        options: ["Mixing (Trộn âm)", "Mastering", "Thu âm thô", "Ký âm"],
        correctIndex: 0,
        explain: "Mixing (Trộn âm) là nghệ thuật phối hợp, cân bằng hàng chục track nhạc cụ và giọng hát riêng lẻ thành một bản phối hài hòa, rõ nét."
      },
      {
        q: "Công đoạn cuối cùng trong quy trình sản xuất âm nhạc nhằm tối ưu hóa âm lượng tổng thể đạt chuẩn và đồng nhất chất lượng phát trên mọi thiết bị là gì?",
        options: ["Recording", "Mastering", "Arranging", "Tracking"],
        correctIndex: 1,
        explain: "Mastering là bước đánh bóng âm thanh cuối cùng trước khi phân phối bài hát lên các nền tảng phát nhạc trực tuyến (Apple Music, Spotify)."
      }
    ]
  },

  // ================= BÀI 15 =================
  {
    num: 15,
    topicNum: 8,
    title: "Bài 15: Các nhóm ngành nghề trong lĩnh vực âm nhạc",
    badgeColor: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300",
    dotColor: "bg-rose-500",
    time: "45 phút",
    target: "Mô tả được các nhóm ngành nghề chuyên môn trong ngành công nghiệp âm nhạc; Phân biệt vai trò của nhạc sĩ sáng tác, nhạc sĩ hòa âm phối khí, kỹ sư âm thanh và ca sĩ; Định hướng lộ trình học tập và phát triển năng khiếu âm nhạc của bản thân.",
    intro: "Ngành âm nhạc không chỉ có ánh đèn sân khấu lung linh của ca sĩ. Đằng sau một bản hit thành công là cả một đội ngũ chuyên gia âm nhạc tài năng với nhiều vị trí nghề nghiệp đa dạng.",
    sections: [
      {
        title: "1. Ba nhóm nghề chính trong ngành công nghiệp âm nhạc",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <h5 class="font-bold text-rose-600 dark:text-rose-400 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-microphone-lines"></i> 1. Nhóm Biểu diễn
              </h5>
              <ul class="text-gray-600 dark:text-gray-300 space-y-1">
                <li><strong>Ca sĩ (Vocalist):</strong> Hát đơn ca, song ca hoặc nhóm nhạc, truyền tải cảm xúc ca khúc tới khán giả.</li>
                <li><strong>Nhạc công (Instrumentalist):</strong> Chơi thành thạo một hoặc nhiều nhạc cụ trong dàn nhạc hoặc ban nhạc phòng thu.</li>
                <li><strong>Chỉ huy dàn nhạc (Conductor):</strong> Nhạc trưởng lãnh đạo dàn nhạc giao hưởng, hợp xướng.</li>
              </ul>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <h5 class="font-bold text-blue-600 dark:text-blue-400 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-pen-nib"></i> 2. Nhóm Sáng tạo & Kỹ thuật
              </h5>
              <ul class="text-gray-600 dark:text-gray-300 space-y-1">
                <li><strong>Nhạc sĩ sáng tác (Composer/Songwriter):</strong> Tạo nên giai điệu và ca từ của bài hát hoặc khí nhạc.</li>
                <li><strong>Sản xuất âm nhạc (Music Producer):</strong> Lên ý tưởng phối khí, chọn beat, định hình phong cách ca khúc.</li>
                <li><strong>Kỹ sư âm thanh (Sound Engineer):</strong> Phụ trách kỹ thuật thu âm, cân chỉnh âm thanh sân khấu trực tiếp và phòng thu.</li>
              </ul>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 text-xs">
              <h5 class="font-bold text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-chalkboard-user"></i> 3. Nhóm Giáo dục & Kinh doanh
              </h5>
              <ul class="text-gray-600 dark:text-gray-300 space-y-1">
                <li><strong>Giảng viên âm nhạc:</strong> Dạy nhạc tại trường phổ thông, học viện âm nhạc hoặc trung tâm nghệ thuật.</li>
                <li><strong>Trị liệu âm nhạc (Music Therapist):</strong> Dùng âm nhạc phục hồi sức khỏe tâm lý cho bệnh nhân.</li>
                <li><strong>Quản lý nghệ sĩ & Tổ chức sự kiện:</strong> Lập kế hoạch biểu diễn, quản lý truyền thông bản quyền.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Phẩm chất và Cơ sở đào tạo âm nhạc uy tín tại Việt Nam",
        content: `
          <div class="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2 text-xs text-gray-700 dark:text-gray-300">
            <p><strong>Phẩm chất then chốt:</strong> Năng khiếu cảm thụ âm nhạc, niềm say mê kiên trì rèn luyện ngón đàn giọng hát, tư duy sáng tạo nghệ thuật và khả năng hợp tác làm việc nhóm.</p>
            <p><strong>Các cái nôi đào tạo âm nhạc hàng đầu:</strong> Học viện Âm nhạc Quốc gia Việt Nam (Hà Nội), Nhạc viện Thành phố Hồ Chí Minh, Học viện Âm nhạc Huế, Đại học Sư phạm Nghệ thuật Trung ương.</p>
          </div>
        `
      }
    ],
    practice: [
      "Lập bảng kế hoạch cá nhân: Đánh giá khả năng âm nhạc của bản thân (thích hát, chơi đàn hay phối nhạc trên máy tính).",
      "Tìm hiểu thông tin tuyển sinh của Nhạc viện TP.HCM hoặc Học viện Âm nhạc Quốc gia Việt Nam cho chuyên ngành mà em yêu thích.",
      "Phỏng vấn một giáo viên âm nhạc về những niềm vui và thử thách trong công việc giảng dạy nghệ thuật."
    ],
    summary: "Ngành âm nhạc bao gồm nhóm nghề Biểu diễn (ca sĩ, nhạc công), Sáng tạo & Kỹ thuật (nhạc sĩ sáng tác, producer, kỹ sư âm thanh) và Giáo dục - Quản lý. Đòi hỏi năng khiếu, sự khổ luyện bền bỉ và tình yêu nghệ thuật chân chính.",
    quizzes: [
      {
        q: "Người đóng vai trò định hình phong cách, lựa chọn bản phối khí, hòa âm và chỉ đạo toàn bộ quá trình làm nên sản phẩm âm nhạc được gọi là gì?",
        options: ["Giám đốc sản xuất âm nhạc (Music Producer)", "Họa sĩ thiết kế", "Người bán vé", "Biên đạo múa"],
        correctIndex: 0,
        explain: "Music Producer (Nhà sản xuất âm nhạc) là kiến trúc sư trưởng đứng sau định hình màu sắc và chất lượng của tác phẩm âm nhạc."
      },
      {
        q: "Chuyên ngành nào ứng dụng âm nhạc như một công cụ trị liệu tâm lý khoa học giúp giảm căng thẳng, hỗ trợ phục hồi sức khỏe tinh thần cho con người?",
        options: ["Âm nhạc trị liệu (Music Therapy)", "Nhạc kịch thính phòng", "Nhạc quảng cáo", "Âm nhạc diễu hành"],
        correctIndex: 0,
        explain: "Music Therapy (Trị liệu âm nhạc) là ngành kết hợp giữa nghệ thuật âm nhạc và y khoa tâm lý học để chăm sóc sức khỏe con người."
      },
      {
        q: "Cơ sở đào tạo âm nhạc chuyên nghiệp lâu đời và danh giá bậc nhất miền Bắc nước ta là trường nào?",
        options: ["Học viện Âm nhạc Quốc gia Việt Nam", "Đại học Bách Khoa", "Đại học Xây dựng", "Đại học Ngoại thương"],
        correctIndex: 0,
        explain: "Học viện Âm nhạc Quốc gia Việt Nam (tiền thân là Trường Âm nhạc Việt Nam thành lập năm 1956) là cái nôi đào tạo âm nhạc hàng đầu."
      },
      {
        q: "Kỹ năng nào sau đây là yếu tố sống còn bắt buộc đối với một người muốn theo đuổi con đường biểu diễn nhạc cụ hoặc thanh nhạc chuyên nghiệp?",
        options: ["Học thuộc lòng từ vựng tiếng Pháp", "Sự kiên trì, khổ luyện tập đàn/luyện thanh đều đặn mỗi ngày suốt nhiều năm", "Tập thể hình nâng tạ nặng", "Biết bơi lội giỏi"],
        correctIndex: 1,
        explain: "Nghệ thuật âm nhạc đòi hỏi sự khổ luyện cơ bắp ngón tay và dây thanh quản bền bỉ hàng nghìn giờ mới đạt tới trình độ điêu luyện."
      }
    ]
  },

  // ================= BÀI 16 =================
  {
    num: 16,
    topicNum: 8,
    title: "Bài 16: Bản quyền âm nhạc và Đạo đức nghề nghiệp nghệ sĩ",
    badgeColor: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300",
    dotColor: "bg-rose-500",
    time: "45 phút",
    target: "Nắm vững các khái niệm cơ bản về quyền tác giả (Copyright) và quyền liên quan trong lĩnh vực âm nhạc; Nhận diện các hành vi vi phạm bản quyền và đạo nhạc (Plagiarism); Nâng cao ý thức tôn trọng chất xám nghệ thuật và ứng xử văn minh trong môi trường số.",
    intro: "Một bản nhạc hay là kết tinh từ mồ hôi, nước mắt và chất xám của người nghệ sĩ. Làm thế nào để pháp luật bảo vệ quyền lợi của tác giả và người nghe nhạc văn minh cần hành xử như thế nào?",
    sections: [
      {
        title: "1. Quyền tác giả và Quyền liên quan trong Âm nhạc",
        content: `
          <p class="mb-3">
            Theo Luật Sở hữu trí tuệ Việt Nam, tác phẩm âm nhạc được bảo hộ quyền sở hữu trí tuệ bao gồm hai nhóm quyền cốt lõi:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1">
                Quyền nhân thân (Moral Rights)
              </h5>
              <ul class="text-gray-600 dark:text-gray-300 space-y-1">
                <li>Đứng tên tác giả trên tác phẩm, được nêu tên khi tác phẩm được công bố, phổ biến.</li>
                <li>Bảo vệ sự toàn vẹn của tác phẩm, không cho người khác xuyên tạc, sửa đổi làm phương hại đến danh dự và uy tín của tác giả.</li>
                <li>Quyền này tồn tại vĩnh viễn, không thể mua bán hay chuyển nhượng.</li>
              </ul>
            </div>
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs">
              <h5 class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm uppercase mb-1">
                Quyền tài sản (Economic Rights)
              </h5>
              <ul class="text-gray-600 dark:text-gray-300 space-y-1">
                <li>Quyền làm tác phẩm phái sinh (bản phối mới, bản dịch lời).</li>
                <li>Quyền biểu diễn tác phẩm trước công chúng.</li>
                <li>Quyền sao chép, phát hành bản ghi âm, phân phối trên Internet hoặc thu phí bản quyền phát sóng (Royalty).</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Hành vi đạo nhạc (Plagiarism) và Trách nhiệm của công dân số",
        content: `
          <div class="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 space-y-2 text-xs text-gray-700 dark:text-gray-300">
            <h5 class="font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-scale-balanced"></i> Đạo nhạc và Xâm phạm bản quyền âm nhạc
            </h5>
            <p><strong>Đạo nhạc (Plagiarism):</strong> Là hành vi sao chép giai điệu, tiết tấu hoặc ca từ của tác phẩm khác một cách cố ý mà không xin phép tác giả gốc và mạo nhận là của mình sáng tác.</p>
            <p><strong>Hành vi ứng xử văn minh của học sinh:</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Sử dụng nhạc có bản quyền trên các nền tảng trả phí hợp pháp (Spotify, Apple Music, Zing MP3).</li>
              <li>Khi làm video học tập, dựng phim ngắn đăng lên YouTube/TikTok, luôn ghi rõ nguồn tác giả và sử dụng các thư viện nhạc miễn phí bản quyền (Royalty-free music).</li>
              <li>Ủng hộ các nghệ sĩ chân chính, kiên quyết nói không với hành vi tải nhạc lậu hoặc phát tán tác phẩm trái phép.</li>
            </ul>
          </div>
        `
      }
    ],
    practice: [
      "Tìm hiểu thông tin về Trung tâm Bảo vệ Quyền tác giả Âm nhạc Việt Nam (VCPMC) và vai trò của tổ chức này đối với các nhạc sĩ.",
      "Tìm kiếm một trường hợp tranh chấp bản quyền âm nhạc nổi tiếng tại Việt Nam hoặc thế giới và phân tích góc nhìn pháp lý.",
      "Cam kết thực hiện lối sống văn minh: Không sử dụng các trang web chia sẻ nhạc lậu vi phạm bản quyền."
    ],
    summary: "Bản quyền âm nhạc gồm quyền nhân thân (đứng tên tác giả vĩnh viễn) và quyền tài sản (khai thác thương mại). Học sinh cần tôn trọng chất xám của nghệ sĩ, không đạo nhạc và nghe nhạc có bản quyền trên các nền tảng chính thống.",
    quizzes: [
      {
        q: "Theo Luật Sở hữu trí tuệ, quyền nào của tác giả bài hát KHÔNG THỂ chuyển nhượng, bán đứt cho người khác và được bảo hộ vô thời hạn?",
        options: ["Quyền nhân thân (quyền đứng tên và bảo vệ sự toàn vẹn tác phẩm)", "Quyền tài sản bán đĩa nhạc", "Quyền thu tiền nhạc chuông", "Quyền biểu diễn thương mại"],
        correctIndex: 0,
        explain: "Quyền nhân thân (như quyền đứng tên tác giả) gắn liền với danh dự của người sáng tạo và được pháp luật bảo hộ vĩnh viễn, không thể mua bán."
      },
      {
        q: "Hành vi một người tự ý sao chép giai điệu đặc trưng của một ca khúc nước ngoài để làm thành bài hát của mình rồi tuyên bố do mình tự sáng tác bị coi là gì?",
        options: ["Đạo nhạc (Plagiarism)", "Hát cover hợp pháp", "Hòa âm phối khí mới", "Luyện thanh nhạc"],
        correctIndex: 0,
        explain: "Đạo nhạc là hành vi đánh cắp chất xám, sao chép giai điệu tác phẩm của người khác mà không xin phép và không ghi công tác giả gốc."
      },
      {
        q: "Tổ chức nào tại Việt Nam đại diện cho hàng ngàn nhạc sĩ thực hiện việc thu và phân phối tiền tác quyền âm nhạc khi bài hát được biểu diễn, phát sóng?",
        options: ["VCPMC (Trung tâm Bảo vệ Quyền tác giả Âm nhạc Việt Nam)", "Bộ Công an", "Hội Chữ thập đỏ", "Ủy ban Thể dục thể thao"],
        correctIndex: 0,
        explain: "VCPMC (Vietnam Center for Protection of Music Copyright) là tổ chức đại diện tập thể quản lý và thu phí bản quyền âm nhạc hợp pháp tại Việt Nam."
      },
      {
        q: "Khi học sinh sử dụng một bản nhạc làm nhạc nền cho video bài tập thuyết trình đăng tải công khai lên mạng xã hội, hành động nào sau đây là văn minh và đúng luật nhất?",
        options: ["Xóa tên tác giả gốc để nhận là mình sáng tác", "Ghi rõ tên tác giả, tên bài hát và sử dụng nhạc có bản quyền cho phép dùng phi thương mại", "Tuyên bố bài hát này do mình tự làm", "Không cần quan tâm bản quyền"],
        correctIndex: 1,
        explain: "Tôn trọng quyền tác giả bằng cách ghi rõ tên bài hát, tên nhạc sĩ và tuân thủ các quy định bản quyền là văn hóa số của công dân văn minh."
      }
    ]
  }
];
