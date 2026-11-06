// Dữ liệu chuẩn xác môn Âm nhạc Lớp 9 - SGK Kết nối tri thức với cuộc sống
// 8 Chủ đề, 16 Bài học đầy đủ 6 mạch nội dung

module.exports = [
  {
    topicId: 1,
    topicTitle: "Chủ đề 1: Nối vòng tay lớn",
    topicDesc: "Hát và đọc nhạc; Lí thuyết về quãng; Chân dung nhạc sĩ Huy Du và ca khúc bất hủ 'Đường chúng ta đi'.",
    color: "emerald",
    icon: "fa-handshake",
    lessons: [
      {
        id: "bai-1",
        num: 1,
        title: "Bài 1 — Hát bài 'Nối vòng tay lớn'; Đọc nhạc số 1",
        time: "45 phút",
        target: "Hát đúng cao độ, trường độ, sắc thái và lời ca bài 'Nối vòng tay lớn' (Trịnh Công Sơn) với tinh thần hòa hợp, đoàn kết hào sảng. Nắm vững quy trình 4 bước đọc nhạc, ôn gam Đô trưởng và trục gam, xướng âm chuẩn xác Bài đọc nhạc số 1.",
        intro: "Mỗi khi câu hát 'Rừng núi dang tay nối lại biển xa, ta đi vòng tay lớn mãi để nối sơn hà...' vang lên, triệu triệu trái tim người Việt Nam lại cùng chung một nhịp đập tự hào, thắt chặt tình đoàn kết dân tộc.",
        sections: [
          {
            title: "1. Học hát: 'Nối vòng tay lớn' — Nhạc sĩ Trịnh Công Sơn",
            icon: "fa-microphone-lines",
            content: `
              <p class="mb-3">
                <strong>Tác giả & Ý nghĩa:</strong> Bài hát do nhạc sĩ Trịnh Công Sơn sáng tác năm 1968 với giai điệu vừa phải, thôi thúc; nội dung thể hiện sâu sắc tình yêu quê hương đất nước, mong muốn hòa hợp dân tộc, đoàn kết muôn người và cùng chung tay dựng xây cuộc sống hòa bình, non sông thống nhất.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
                <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-1.5">
                  <strong class="text-emerald-800 dark:text-emerald-300 font-bold block"><i class="fa-solid fa-layer-group"></i> Cấu trúc hình thức (3 đoạn):</strong>
                  <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                    <li><strong>Đoạn 1:</strong> Giai điệu hào sảng, khoáng đạt mở đầu lời kêu gọi nối liền rừng núi với biển xa.</li>
                    <li><strong>Đoạn 2:</strong> Chuyển biến giai điệu dồn dập, gắn kết bước chân từ đồng hoang qua phố thị.</li>
                    <li><strong>Đoạn 3:</strong> Nhắc lại giai điệu đoạn 1, khẳng định niềm tin và khí thế non sông liền một dải.</li>
                  </ul>
                </div>
                <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800 space-y-1.5">
                  <strong class="text-teal-800 dark:text-teal-300 font-bold block"><i class="fa-solid fa-users"></i> Hình thức biểu diễn học đường:</strong>
                  <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                    <li>Rèn luyện hát đúng cao độ, trường độ, sắc thái nhịp nhàng, rõ lời ca.</li>
                    <li>Hình thức biểu diễn phong phú: Trình bày hòa giọng cả lớp, lĩnh xướng – hòa giọng theo nhóm.</li>
                    <li>Kết hợp gõ đệm phách, nhạc cụ gõ phụ họa và các động tác vận động cơ thể (body percussion) sôi nổi.</li>
                  </ul>
                </div>
              </div>
            `
          },
          {
            title: "2. Đọc nhạc: Bài đọc nhạc số 1 (Giọng Đô trưởng)",
            icon: "fa-music",
            content: `
              <p class="mb-3">
                <strong>Ôn tập Gam & Trục gam:</strong> Bài đọc nhạc được viết ở giọng Đô trưởng nhịp 2/4. Học sinh ôn tập thang âm Đô trưởng (C - D - E - F - G - A - B) và trục gam (Đô - Mi - Son - Đô) để định hình chuẩn xác cao độ nền.
              </p>
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                <strong class="text-slate-900 dark:text-white font-bold block text-sm"><i class="fa-solid fa-list-ol text-emerald-600"></i> Quy trình 4 bước học bài đọc nhạc chuẩn SGK:</strong>
                <ol class="list-decimal pl-5 space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <li><strong>Bước 1:</strong> Đọc gam và trục gam Đô trưởng theo chiều đi lên và đi xuống để làm quen cao độ.</li>
                  <li><strong>Bước 2:</strong> Luyện tập âm hình tiết tấu (nốt đen, nốt móc đơn, nốt trắng) bằng gõ phách tay hoặc thanh phách.</li>
                  <li><strong>Bước 3:</strong> Đọc vỡ từng nét nhạc ngắn, nối kết các nét nhạc và ghép toàn bộ bài đọc nhạc.</li>
                  <li><strong>Bước 4:</strong> Đọc nhạc hoàn chỉnh kết hợp gõ phách hoặc đánh nhịp 2/4; có thể ghép lời ca để luyện kết hợp đọc và hát, chú ý giữ đều phách, không làm thay đổi trường độ khi hát lời.</li>
                </ol>
              </div>
            `
          }
        ],
        practice: [
          "Hát bài 'Nối vòng tay lớn' kết hợp vỗ tay theo phách và chia nhóm lĩnh xướng – hòa giọng.",
          "Xướng âm Bài đọc nhạc số 1 đúng tên nốt, cao độ, trường độ và đánh nhịp 2/4 đều đặn.",
          "Ghép lời ca vào giai điệu Bài đọc nhạc số 1, giữ phách ổn định và ngân đủ trường độ nốt trắng ở cuối câu."
        ],
        summary: "Bài 1 giúp học sinh cảm nhận thông điệp hòa hợp, đoàn kết thiêng liêng qua bài hát 'Nối vòng tay lớn' (Trịnh Công Sơn) với hình thức 3 đoạn rõ rệt; đồng thời rèn luyện phương pháp đọc nhạc 4 bước chuẩn khoa học trên thang âm Đô trưởng.",
        quiz: [
          {
            q: "Bài hát 'Nối vòng tay lớn' do nhạc sĩ nào sáng tác?",
            opts: ["Văn Cao", "Trịnh Công Sơn", "Phạm Tuyên", "Hoàng Vân"],
            ans: 1,
            explain: "'Nối vòng tay lớn' là tác phẩm nổi tiếng được nhạc sĩ Trịnh Công Sơn sáng tác năm 1968."
          },
          {
            q: "Hình thức cấu trúc của bài hát 'Nối vòng tay lớn' gồm mấy đoạn?",
            opts: ["2 đoạn", "3 đoạn (đoạn 3 nhắc lại giai điệu đoạn 1)", "4 đoạn biến tấu", "1 đoạn liên tục"],
            ans: 1,
            explain: "Bài hát gồm 3 đoạn: đoạn 1, đoạn 2 và đoạn 3 nhắc lại giai điệu của đoạn 1."
          },
          {
            q: "Bước đầu tiên trong quy trình học một bài đọc nhạc theo SGK là gì?",
            opts: ["Ghép lời ca ngay", "Đọc gam và trục gam", "Đánh nhịp toàn bài", "Luyện gõ tiết tấu đảo phách"],
            ans: 1,
            explain: "Quy trình chuẩn: Đọc gam/trục gam → Luyện tiết tấu → Đọc từng nét nhạc rồi ghép bài → Đọc kết hợp gõ phách/đánh nhịp."
          },
          {
            q: "Khi ghép lời ca vào bài đọc nhạc, điều quan trọng nhất cần lưu ý là gì?",
            opts: ["Thay đổi tốc độ bài cho nhanh hơn", "Giữ đều phách, không làm thay đổi trường độ của các nốt", "Bỏ qua các phách mạnh", "Chỉ đọc nốt không cần giữ nhịp"],
            ans: 1,
            explain: "Khi ghép lời ca, học sinh phải giữ đều phách, không làm biến dạng trường độ các nốt nhạc."
          }
        ]
      },
      {
        id: "bai-2",
        num: 2,
        title: "Bài 2 — Sơ lược về quãng; Nhạc sĩ Huy Du và bài 'Đường chúng ta đi'",
        time: "45 phút",
        target: "Hiểu khái niệm quãng, phân biệt quãng giai điệu và quãng hòa thanh, âm gốc và âm ngọn. Nắm vững hai yếu tố xác định quãng (độ lớn số lượng và độ lớn chất lượng). Tìm hiểu cuộc đời sự nghiệp nhạc sĩ Huy Du và cảm thụ ca khúc 'Đường chúng ta đi'.",
        intro: "Trong thế giới âm thanh kì diệu, các nốt nhạc kết hợp với nhau theo khoảng cách cao độ tạo nên những hòa âm tuyệt đẹp. Đó chính là khái niệm quãng trong lí thuyết âm nhạc.",
        sections: [
          {
            title: "1. Lí thuyết âm nhạc: Khái niệm và cách gọi tên Quãng",
            icon: "fa-ruler-horizontal",
            content: `
              <p class="mb-3">
                <strong>Khái niệm quãng:</strong> Quãng là khoảng cách về cao độ giữa hai âm thanh trong âm nhạc.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
                <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-1.5">
                  <strong class="text-blue-800 dark:text-blue-300 font-bold block"><i class="fa-solid fa-arrows-left-right"></i> Phân loại theo cách phát âm:</strong>
                  <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                    <li><strong>Quãng giai điệu:</strong> Hai âm vang lên <em>lần lượt</em> nối tiếp nhau. Quãng đi lên đọc từ dưới lên; quãng đi xuống đọc từ trên xuống.</li>
                    <li><strong>Quãng hòa thanh:</strong> Hai âm vang lên <em>cùng một lúc</em>. Âm thấp bên dưới gọi là <strong>âm gốc</strong>, âm cao bên trên gọi là <strong>âm ngọn</strong>. Luôn đọc từ dưới lên.</li>
                  </ul>
                </div>
                <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800 space-y-1.5">
                  <strong class="text-indigo-800 dark:text-indigo-300 font-bold block"><i class="fa-solid fa-scale-balanced"></i> Hai yếu tố xác định một quãng:</strong>
                  <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                    <li><strong>Độ lớn số lượng:</strong> Căn cứ vào số bậc âm có trong quãng, tạo nên tên gọi: quãng 1, quãng 2, quãng 3, quãng 4, quãng 5, quãng 6, quãng 7, quãng 8.</li>
                    <li><strong>Độ lớn chất lượng:</strong> Căn cứ vào số cung và nửa cung chứa trong quãng. Tên chất lượng gồm: <em>Trưởng (T), Thứ (t), Đúng (Đ), Tăng, Giảm</em>.</li>
                  </ul>
                </div>
              </div>
              <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-950 dark:text-amber-200 space-y-1">
                <strong>Ví dụ đối chiếu trong SGK:</strong>
                <p>• <strong>Đô – Mi:</strong> Có 3 bậc âm (Đô, Rê, Mi), chứa 2 cung &rarr; Quãng 3 trưởng (3T).</p>
                <p>• <strong>Mi – Son:</strong> Có 3 bậc âm (Mi, Pha, Son), chứa 1,5 cung (1 cung + 1/2 cung) &rarr; Quãng 3 thứ (3t).</p>
                <p class="font-semibold text-rose-600 dark:text-rose-400">&rArr; Ghi nhớ: Chỉ đếm số bậc âm (độ lớn số lượng) là chưa đủ để gọi tên chính xác một quãng!</p>
              </div>
            `
          },
          {
            title: "2. Thường thức âm nhạc: Nhạc sĩ Huy Du và 'Đường chúng ta đi'",
            icon: "fa-user-pen",
            content: `
              <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-2 mb-3">
                <p><strong>Tiểu sử & Sự nghiệp Nhạc sĩ Huy Du (1926 – 2007):</strong> Quê quán ở Bắc Ninh. Ông là nhạc sĩ tiêu biểu có nhiều đóng góp lớn lao trong nền tân nhạc Việt Nam với các sáng tác xuất sắc trong hai cuộc kháng chiến chống Pháp, chống Mỹ và sau ngày thống nhất đất nước. Tác phẩm của ông luôn ngời sáng khí thế hào hùng, tinh thần chiến đấu quả cảm hòa quyện cùng chất trữ tình sâu lắng.</p>
                <p><strong>Vinh danh:</strong> Nhạc sĩ Huy Du vinh dự được Đảng và Nhà nước trao tặng <strong>Giải thưởng Hồ Chí Minh về Văn học – Nghệ thuật (năm 2000)</strong>.</p>
              </div>
              <div class="p-3.5 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/50 text-xs space-y-2">
                <strong class="text-rose-800 dark:text-rose-300 font-bold block text-sm"><i class="fa-solid fa-flag"></i> Ca khúc 'Đường chúng ta đi' (1968, thơ Xuân Sách):</strong>
                <p class="text-slate-700 dark:text-slate-300">Tác phẩm được viết theo hình thức 3 đoạn nghệ thuật tương phản rõ rệt:</p>
                <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                  <li><strong>Đoạn 1:</strong> Gợi lên hình ảnh đất nước thân thương, trải dài gấm vóc và niềm tin sắt son.</li>
                  <li><strong>Đoạn 2:</strong> Tiết tấu dồn dập, nhịp bước quân hành thôi thúc xốc tới chiến trường.</li>
                  <li><strong>Đoạn 3:</strong> Âm hưởng hoành tráng, ngân vang như lời hiệu triệu toàn dân tiến về ngày toàn thắng rực rỡ.</li>
                </ul>
              </div>
            `
          }
        ],
        practice: [
          "Xác định độ lớn số lượng và chất lượng của các cặp âm: Đô - Sol (quãng 5Đ), Đô - Mi (quãng 3T), Rê - Fa (quãng 3t).",
          "Nghe đàn và phân biệt khi nào là quãng giai điệu (vang lần lượt), khi nào là quãng hòa thanh (vang đồng thời).",
          "Nghe ca khúc 'Đường chúng ta đi' và chia sẻ cảm nhận về sự thay đổi tính chất âm nhạc qua 3 đoạn."
        ],
        summary: "Quãng được xác định bằng 2 yếu tố: độ lớn số lượng (số bậc) và độ lớn chất lượng (số cung). Nhạc sĩ Huy Du (Giải thưởng Hồ Chí Minh 2000) với ca khúc 'Đường chúng ta đi' là biểu tượng của tinh thần quật cường và niềm tin chiến thắng của dân tộc.",
        quiz: [
          {
            q: "Quãng hòa thanh là gì?",
            opts: ["Hai âm vang lên lần lượt nối tiếp", "Hai âm vang lên cùng một lúc", "Ba âm kết hợp ngẫu nhiên", "Khoảng cách giữa hai phách nhạc"],
            ans: 1,
            explain: "Hai âm vang lên lần lượt tạo quãng giai điệu; hai âm vang lên cùng lúc tạo quãng hòa thanh."
          },
          {
            q: "Trong quãng hòa thanh, âm nằm ở vị trí thấp hơn được gọi là gì?",
            opts: ["Âm ngọn", "Âm gốc", "Âm chủ", "Âm đệm"],
            ans: 1,
            explain: "Âm thấp bên dưới gọi là âm gốc, âm cao bên trên gọi là âm ngọn; đọc từ dưới lên."
          },
          {
            q: "Quãng Đô – Mi gồm bao nhiêu bậc âm và bao nhiêu cung?",
            opts: ["3 bậc âm và 1,5 cung (3 thứ)", "3 bậc âm và 2 cung (3 trưởng)", "2 bậc âm và 1 cung (2 trưởng)", "4 bậc âm và 2,5 cung (4 đúng)"],
            ans: 1,
            explain: "Đô – Mi có 3 bậc âm (Đô-Rê-Mi), chứa 2 cung trọn vẹn nên là quãng 3 trưởng."
          },
          {
            q: "Bài hát 'Đường chúng ta đi' của nhạc sĩ Huy Du phổ thơ của ai và sáng tác năm nào?",
            opts: ["Thơ Chính Hữu (1975)", "Thơ Xuân Sách (1968)", "Thơ Tố Hữu (1972)", "Thơ Quang Dũng (1954)"],
            ans: 1,
            explain: "'Đường chúng ta đi' được nhạc sĩ Huy Du sáng tác năm 1968, phổ thơ của nhà thơ Xuân Sách."
          }
        ]
      }
    ]
  },
  {
    topicId: 2,
    topicTitle: "Chủ đề 2: Khát vọng tuổi trẻ",
    topicDesc: "Hát bè bài 'Bảy sắc cầu vồng'; Nghe ca khúc 'Thời thanh niên sôi nổi'; Luyện nhạc cụ và Thường thức Kèn Oboe & Kèn Cor.",
    color: "blue",
    icon: "fa-rainbow",
    lessons: [
      {
        id: "bai-3",
        num: 3,
        title: "Bài 3 — Hát 'Bảy sắc cầu vồng'; Nghe 'Thời thanh niên sôi nổi'",
        time: "45 phút",
        target: "Hát đúng cao độ, trường độ bài 'Bảy sắc cầu vồng' (Hoàng Vân - Như Mai), thực hành kỹ thuật hát hai bè hòa quyện. Cảm thụ vẻ đẹp hào hùng, nhiệt huyết tuổi trẻ qua tác phẩm Nga 'Thời thanh niên sôi nổi' (Pakhmutova - Phạm Tuyên).",
        intro: "Cầu vồng bảy sắc sau cơn mưa tượng trưng cho vẻ đẹp tinh khôi của tình bạn và ước mơ tuổi trẻ vươn tới tương lai rạng ngời.",
        sections: [
          {
            title: "1. Học hát & Luyện hát bè: 'Bảy sắc cầu vồng'",
            icon: "fa-microphone",
            content: `
              <p class="mb-3">
                <strong>Tác giả & Ý nghĩa:</strong> Ca khúc do nhạc sĩ Hoàng Vân sáng tác, phỏng thơ Như Mai. Giai điệu tươi vui, trong sáng, ngập tràn sức sống thanh xuân; lời ca ca ngợi tình bạn hồn nhiên, tinh thần đoàn kết, khát vọng tuổi trẻ và tình yêu quê hương đất nước.
              </p>
              <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs space-y-2 mb-3">
                <strong class="text-blue-800 dark:text-blue-300 font-bold block"><i class="fa-solid fa-shapes"></i> Bố cục bài hát:</strong>
                <p>Bài hát gồm <strong>hai câu/đoạn chính</strong> và <strong>phần kết</strong>. Điểm độc đáo là phần kết khéo léo gắn liền tên các nốt nhạc (Đô, Rê, Mi, Pha, Son, La, Si) với hình ảnh dải cầu vồng rực rỡ. Khi thể hiện, học sinh cần chuyển tiếp rõ ràng từ phần chính sang câu kết.</p>
              </div>
              <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800 text-xs space-y-2">
                <strong class="text-indigo-800 dark:text-indigo-300 font-bold block"><i class="fa-solid fa-people-group"></i> Kỹ thuật hát hai bè hòa quyện:</strong>
                <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Từng nhóm học sinh phải tập giữ thật ổn định tuyến giai điệu thuộc bè của mình.</li>
                  <li>Lắng nghe bè bạn bên cạnh để điều chỉnh âm lượng cân đối, giúp các giai điệu vang lên đồng thời mà không bị lấn át hay chênh phô.</li>
                </ul>
              </div>
            `
          },
          {
            title: "2. Nghe nhạc: 'Thời thanh niên sôi nổi' (Nhạc Nga)",
            icon: "fa-headphones",
            content: `
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                <p><strong>Xuất xứ tác phẩm:</strong> Ca khúc Nga bất hủ của nữ nhạc sĩ tài danh Aleksandra Pakhmutova, lời Việt do nhạc sĩ Phạm Tuyên chuyển ngữ.</p>
                <p><strong>Đặc điểm âm nhạc:</strong> Giai điệu khỏe khoắn, dồn dập, mang khí thế hành khúc bừng bừng nhiệt huyết; thể hiện lý tưởng cao đẹp, lòng dũng cảm và khát vọng cống hiến hết mình của thế hệ trẻ cho quê hương.</p>
                <p><strong>Hoạt động cảm thụ:</strong> Luyện tập nhận biết sự thay đổi âm hình tiết tấu giữa các đoạn, gõ đệm phách hoặc vận động theo nhịp điệu hùng tráng của tác phẩm.</p>
              </div>
            `
          }
        ],
        practice: [
          "Chia lớp thành hai nhóm luyện tập hát hai bè bài 'Bảy sắc cầu vồng' ở phần kết.",
          "Hát kết hợp gõ đệm phách bằng thanh phách hoặc vỗ tay theo nhịp.",
          "Lắng nghe 'Thời thanh niên sôi nổi' và biểu diễn động tác hành tiến khỏe khoắn theo nhịp điệu bài hát."
        ],
        summary: "'Bảy sắc cầu vồng' (Hoàng Vân) rèn luyện kĩ năng hát hai bè giữ vững cao độ độc lập. 'Thời thanh niên sôi nổi' (Pakhmutova - Phạm Tuyên) truyền cảm hứng mạnh mẽ về nhiệt huyết cống hiến của tuổi trẻ.",
        quiz: [
          {
            q: "Bài hát 'Bảy sắc cầu vồng' do nhạc sĩ nào sáng tác phần âm nhạc?",
            opts: ["Phạm Tuyên", "Hoàng Vân", "Phan Huỳnh Điểu", "Trần Hoàn"],
            ans: 1,
            explain: "'Bảy sắc cầu vồng' do nhạc sĩ Hoàng Vân phổ nhạc, phỏng theo lời thơ của Như Mai."
          },
          {
            q: "Phần kết của bài hát 'Bảy sắc cầu vồng' có điểm đặc biệt gì?",
            opts: ["Chuyển sang điệu hò dân ca", "Gắn tên các nốt nhạc với hình ảnh dải cầu vồng", "Chỉ có nhạc cụ đệm không có lời", "Hát ngâm thơ tự do"],
            ans: 1,
            explain: "Phần kết bài hát lồng ghép tên các nốt nhạc Đô, Rê, Mi, Pha, Son, La, Si tương ứng với 7 sắc màu cầu vồng."
          },
          {
            q: "Khi thực hành hát bè, yêu cầu quan trọng nhất đối với mỗi nhóm là gì?",
            opts: ["Hát thật to để át bè còn lại", "Giữ vững giai điệu bè mình và lắng nghe phối hợp với bè bạn", "Mỗi bạn hát một tốc độ khác nhau", "Không cần đệm nhịp"],
            ans: 1,
            explain: "Khi hát bè, cần giữ ổn định bè của mình, nghe bè còn lại để hai giai điệu hòa quyện, không lấn át nhau."
          },
          {
            q: "Bài hát 'Thời thanh niên sôi nổi' là tác phẩm của nhạc sĩ nước nào, ai viết lời Việt?",
            opts: ["Nhạc Pháp, lời Văn Cao", "Nhạc Nga (Pakhmutova), lời Việt Phạm Tuyên", "Nhạc Đức (Beethoven), lời Lưu Hữu Phước", "Nhạc Ý (Vivaldi), lời Trịnh Công Sơn"],
            ans: 1,
            explain: "Bài hát của nữ nhạc sĩ Nga Pakhmutova, được nhạc sĩ Phạm Tuyên đặt lời Việt."
          }
        ]
      },
      {
        id: "bai-4",
        num: 4,
        title: "Bài 4 — Recorder hoặc kèn phím; Kèn Oboe và kèn Cor",
        time: "45 phút",
        target: "Thực hành nhạc cụ recorder (thế bấm Đô 1, Pha 1) hoặc kèn phím (gam La thứ). Nhận biết cấu tạo, cách phát âm và âm sắc đặc trưng của kèn Oboe (bộ gỗ dăm kép) và kèn Cor (bộ đồng, French horn).",
        intro: "Dàn nhạc giao hưởng phương Tây sở hữu muôn vàn màu âm huyền ảo, trong đó tiếng kèn Oboe ngọt ngào cùng tiếng kèn Cor kiêu hãnh giữ vai trò đặc biệt quan trọng.",
        sections: [
          {
            title: "1. Luyện tập Nhạc cụ: Recorder hoặc Kèn phím",
            icon: "fa-guitar",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 text-xs">
                <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-1.5">
                  <strong class="text-emerald-800 dark:text-emerald-300 font-bold block"><i class="fa-solid fa-wand-magic-sparkles"></i> Lựa chọn 1: Kèn Recorder:</strong>
                  <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                    <li>Ôn lại thế bấm nốt <strong>Đô 1</strong> và nốt <strong>Pha 1</strong>.</li>
                    <li>Luyện kiểm soát cột hơi ổn định, ngón tay bịt kín các lỗ bấm.</li>
                    <li>Thực hành trích đoạn giai điệu bài dân ca Anh nổi tiếng: <em>'Chiếc cầu Luân Đôn' (London Bridge)</em>.</li>
                  </ul>
                </div>
                <div class="p-3.5 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800 space-y-1.5">
                  <strong class="text-sky-800 dark:text-sky-300 font-bold block"><i class="fa-solid fa-keyboard"></i> Lựa chọn 2: Kèn phím (Melodica):</strong>
                  <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                    <li>Luyện ngón trên thang âm giọng <strong>La thứ</strong>.</li>
                    <li>Rèn luyện tư thế cầm kèn, thế bấm ngón tay phải và phối hợp điều hòa hơi thổi.</li>
                    <li>Thực hành trích đoạn giai điệu: <em>'Vui đến trường' (Happy School)</em>.</li>
                  </ul>
                </div>
              </div>
            `
          },
          {
            title: "2. Thường thức âm nhạc: Kèn Oboe và Kèn Cor",
            icon: "fa-bullhorn",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
                <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 space-y-2">
                  <strong class="text-amber-800 dark:text-amber-300 font-bold text-sm block"><i class="fa-solid fa-music"></i> Kèn Oboe (Bộ kèn gỗ):</strong>
                  <p class="text-slate-700 dark:text-slate-300"><strong>Cấu tạo & Phát âm:</strong> Thuộc bộ kèn gỗ của dàn nhạc giao hưởng, phát âm bằng <em>dăm kép</em> (hai mảnh sậy mỏng ép sát nhau).</p>
                  <p class="text-slate-700 dark:text-slate-300"><strong>Âm sắc:</strong> Trong trẻo, vang xa, ngọt ngào, giàu tính ca xướng trữ tình. <em>Đặc biệt: Oboe thường được dùng thổi nốt mẫu (La 440Hz) để toàn bộ dàn nhạc giao hưởng so dây chỉnh âm trước buổi diễn.</em></p>
                  <p class="text-slate-700 dark:text-slate-300"><strong>Kèn Oboe alto (Cor Anh):</strong> Có kích thước lớn hơn, ống loe hình quả lê, âm thanh trầm ấm, đượm nét u hoài, nhung nhớ.</p>
                </div>
                <div class="p-3.5 bg-orange-50 dark:bg-orange-950/40 rounded-xl border border-orange-200 dark:border-orange-800 space-y-2">
                  <strong class="text-orange-800 dark:text-orange-300 font-bold text-sm block"><i class="fa-solid fa-fan"></i> Kèn Cor (French Horn - Bộ đồng):</strong>
                  <p class="text-slate-700 dark:text-slate-300"><strong>Cấu tạo & Phát âm:</strong> Thuộc bộ kèn đồng, thân kèn uốn thành vòng tròn phức tạp, loa kèn loe rộng; người chơi thổi qua <em>búp kèn hình nón</em> và đặt một bàn tay trong loa kèn để điều chỉnh âm sắc.</p>
                  <p class="text-slate-700 dark:text-slate-300"><strong>Âm sắc:</strong> Vừa mang vẻ hùng tráng, vang dội của kèn đồng, vừa mềm mại, mượt mà, sâu lắng; có thể diễn tấu giai điệu chính vô cùng truyền cảm.</p>
                </div>
              </div>
            `
          }
        ],
        practice: [
          "Thực hành trích đoạn 'Chiếc cầu Luân Đôn' trên recorder hoặc 'Vui đến trường' trên kèn phím với nhịp độ ổn định.",
          "Nghe các đoạn trích hòa tấu và phân biệt đâu là tiếng kèn Oboe (thanh mảnh, ngọt ngào), đâu là tiếng kèn Cor (vang ấm, sâu lắng).",
          "Thảo luận vì sao kèn Oboe thường được chọn phát âm mẫu chuẩn để cả dàn nhạc giao hưởng chỉnh âm."
        ],
        summary: "Kèn Oboe (bộ gỗ, dăm kép, âm mẫu dàn nhạc) mang vẻ đẹp ngọt ngào, bay bổng. Kèn Cor (French horn, bộ đồng, búp kèn) kết hợp giữa âm lượng hào sảng và chất âm trữ tình ấm áp.",
        quiz: [
          {
            q: "Kèn Oboe phát ra âm thanh nhờ bộ phận nào?",
            opts: ["Búp kèn kim loại", "Dăm kép (hai lá sậy mỏng)", "Dây tơ kéo căng", "Màng da gõ"],
            ans: 1,
            explain: "Oboe thuộc bộ gỗ và phát âm bằng dăm kép ép sát nhau khi luồng hơi thổi qua."
          },
          {
            q: "Nhạc cụ nào thường được chọn để thổi nốt mẫu cho toàn bộ dàn nhạc giao hưởng so dây chỉnh âm?",
            opts: ["Trống định âm", "Kèn Oboe", "Đàn Piano", "Đàn Cello"],
            ans: 1,
            explain: "Oboe có âm sắc trong trẻo, ổn định và xuyên thấu nên luôn được dùng phát nốt mẫu La (440Hz) chỉnh âm."
          },
          {
            q: "Kèn Cor (French horn) thuộc bộ nhạc cụ nào trong dàn nhạc giao hưởng?",
            opts: ["Bộ dây", "Bộ kèn đồng", "Bộ gõ", "Bộ kèn gỗ dăm đơn"],
            ans: 1,
            explain: "Kèn Cor thuộc bộ kèn đồng, ống kèn cuộn tròn bằng kim loại và người chơi thổi qua búp kèn."
          },
          {
            q: "Tác phẩm thực hành cho kèn recorder trong Bài 4 là trích đoạn bài nào?",
            opts: ["Tháng năm học trò", "Chiếc cầu Luân Đôn (dân ca Anh)", "Happy School", "Bảy sắc cầu vồng"],
            ans: 1,
            explain: "Trong SGK Bài 4, học sinh luyện recorder trích đoạn bài dân ca Anh 'Chiếc cầu Luân Đôn'."
          }
        ]
      }
    ]
  },
  {
    topicId: 3,
    topicTitle: "Chủ đề 3: Kỉ niệm dưới mái trường",
    topicDesc: "Hát bài 'Tháng năm học trò'; Các thể loại nhạc đàn (Sonata, Giao hưởng, Waltz); Kĩ thuật Dịch giọng và Bài đọc nhạc số 2.",
    color: "amber",
    icon: "fa-school",
    lessons: [
      {
        id: "bai-5",
        num: 5,
        title: "Bài 5 — Hát 'Tháng năm học trò'; Một số thể loại nhạc đàn",
        time: "45 phút",
        target: "Hát bài 'Tháng năm học trò' (Nguyễn Đức Trung) với cảm xúc trong sáng, bồi hồi nhớ về mái trường và thầy cô. Phân biệt các thể loại nhạc đàn tiêu biểu: Bài ca không lời, Điệu Waltz, Sonata và Giao hưởng.",
        intro: "Những năm tháng cắp sách tới trường dưới tán phượng hồng là quãng thời gian tươi đẹp nhất của tuổi hoa niên được khắc ghi qua từng nốt nhạc tha thiết.",
        sections: [
          {
            title: "1. Học hát: 'Tháng năm học trò' — Nhạc sĩ Nguyễn Đức Trung",
            icon: "fa-chalkboard-user",
            content: `
              <p class="mb-3">
                <strong>Nội dung & Cảm xúc:</strong> Ca khúc do nhạc sĩ Nguyễn Đức Trung sáng tác với giai điệu vui tươi, trong trẻo, dạt dào tình cảm; lời ca gửi gắm tình yêu thương bạn bè, lòng tri ân thầy cô và những kỉ niệm gắn bó thiêng liêng dưới mái trường mến yêu.
              </p>
              <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs space-y-2">
                <p><strong>Cấu trúc bài hát:</strong> Gồm <strong>2 đoạn</strong> tương phản nhẹ nhàng về cảm xúc:</p>
                <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                  <li><strong>Đoạn 1:</strong> Tự sự, hồi tưởng những ngày đầu bỡ ngỡ bước vào cổng trường thân quen.</li>
                  <li><strong>Đoạn 2:</strong> Cao trào bay bổng, ngân vang lời hứa và khát vọng bay cao bay xa của tuổi học trò.</li>
                </ul>
                <p class="pt-1">Luyện hát đúng cao độ, trường độ, biểu diễn kết hợp lĩnh xướng – hòa giọng và vận động phụ họa phù hợp.</p>
              </div>
            `
          },
          {
            title: "2. Thường thức âm nhạc: Một số thể loại nhạc đàn (Khí nhạc)",
            icon: "fa-compact-disc",
            content: `
              <p class="mb-3">
                <strong>Khái niệm Nhạc đàn:</strong> Là âm nhạc được sáng tác chuyên biệt cho nhạc cụ biểu diễn, không sử dụng lời ca, biểu đạt tư tưởng và hình tượng qua âm sắc, tiết tấu và giai điệu thuần khiết.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                  <strong class="text-emerald-700 dark:text-emerald-400 font-bold block">1. Bài ca không lời (Song without words):</strong>
                  <p class="text-slate-700 dark:text-slate-300">Tác phẩm quy mô nhỏ viết cho một nhạc cụ độc tấu (như piano, violin), có giai điệu du dương gần gũi với một ca khúc truyền cảm.</p>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                  <strong class="text-blue-700 dark:text-blue-400 font-bold block">2. Điệu Waltz (Van-xơ):</strong>
                  <p class="text-slate-700 dark:text-slate-300">Bắt nguồn từ điệu nhảy dân gian châu Âu, viết ở nhịp 3/4 hoặc 3/8 uyển chuyển, nhịp nhàng, mang không khí dạ hội quý phái lãng mạn.</p>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                  <strong class="text-indigo-700 dark:text-indigo-400 font-bold block">3. Bản Sonata (Xô-nát):</strong>
                  <p class="text-slate-700 dark:text-slate-300">Thể loại khí nhạc cổ điển có quy mô lớn, thường gồm <strong>3 hoặc 4 chương</strong> với cấu trúc chặt chẽ; viết cho một nhạc cụ độc tấu hoặc kết hợp nhóm nhạc cụ.</p>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                  <strong class="text-purple-700 dark:text-purple-400 font-bold block">4. Bản Giao hưởng (Symphony):</strong>
                  <p class="text-slate-700 dark:text-slate-300">Đỉnh cao của nghệ thuật khí nhạc với quy mô đồ sộ viết cho toàn thể dàn nhạc giao hưởng; thường gồm <strong>4 chương</strong> liên kết chặt chẽ về tư tưởng và nghệ thuật.</p>
                </div>
              </div>
            `
          }
        ],
        practice: [
          "Hát 'Tháng năm học trò' kết hợp vỗ tay đệm phách và biểu diễn nhóm theo hình thức lĩnh xướng – hòa giọng.",
          "Nghe một trích đoạn Giao hưởng của Beethoven hoặc Mozart và xác định nhịp điệu của các chương nhạc.",
          "Sưu tầm và chia sẻ với bạn bè một bản nhạc Bài ca không lời hoặc điệu Waltz mà em yêu thích."
        ],
        summary: "Nhạc đàn (khí nhạc) là nghệ thuật âm thanh phong phú từ Bài ca không lời, điệu Waltz đến quy mô đồ sộ của Sonata (3-4 chương) và Giao hưởng (4 chương dàn nhạc).",
        quiz: [
          {
            q: "Bài hát 'Tháng năm học trò' do nhạc sĩ nào sáng tác và gồm mấy đoạn?",
            opts: ["Nguyễn Đức Trung (2 đoạn)", "Trịnh Công Sơn (3 đoạn)", "Hoàng Vân (2 đoạn)", "Huy Du (3 đoạn)"],
            ans: 0,
            explain: "Bài hát 'Tháng năm học trò' do nhạc sĩ Nguyễn Đức Trung sáng tác, có cấu trúc gồm 2 đoạn."
          },
          {
            q: "Nhạc đàn (khí nhạc) được định nghĩa là gì?",
            opts: ["Âm nhạc có lời ca hợp xướng", "Âm nhạc viết riêng cho nhạc cụ biểu diễn, không dựa vào lời hát", "Nhạc kịch dân gian ngâm thơ", "Nhạc lễ hội chỉ có tiếng trống"],
            ans: 1,
            explain: "Nhạc đàn là âm nhạc viết cho nhạc cụ biểu diễn thuần khiết không sử dụng lời hát."
          },
          {
            q: "Bản Giao hưởng (Symphony) thường gồm bao nhiêu chương nhạc?",
            opts: ["1 chương duy nhất", "2 chương", "4 chương", "8 chương"],
            ans: 2,
            explain: "Bản giao hưởng cổ điển viết cho dàn nhạc giao hưởng thường gồm 4 chương với đặc tính tương phản liên kết nội dung."
          },
          {
            q: "Điệu nhảy Waltz (Van-xơ) có nguồn gốc từ đâu và thường viết ở loại nhịp nào?",
            opts: ["Châu Phi, nhịp 2/4", "Châu Âu, nhịp 3/4 hoặc 3/8", "Châu Á, nhịp 4/4", "Châu Mỹ, nhịp 6/8"],
            ans: 1,
            explain: "Waltz bắt nguồn từ điệu nhảy dân gian châu Âu với nhịp 3/4 hoặc 3/8 uyển chuyển, dập dềnh."
          }
        ]
      },
      {
        id: "bai-6",
        num: 6,
        title: "Bài 6 — Sơ lược về dịch giọng; Đọc nhạc số 2",
        time: "45 phút",
        target: "Hiểu bản chất của kĩ thuật Dịch giọng trong âm nhạc. Nắm vững quy tắc dịch giọng theo quãng để chọn tông phù hợp với giọng hát hoặc nhạc cụ. Xướng âm chuẩn xác Bài đọc nhạc số 2 giọng La thứ.",
        intro: "Giọng hát của mỗi người có tầm cất tiếng khác nhau (âm vực). Để ai cũng có thể hát thoải mái, người ta sử dụng kĩ thuật dịch giọng.",
        sections: [
          {
            title: "1. Lí thuyết âm nhạc: Sơ lược về Dịch giọng (Dịch cung)",
            icon: "fa-sliders",
            content: `
              <p class="mb-3">
                <strong>Khái niệm Dịch giọng:</strong> Dịch giọng là việc nâng lên hoặc hạ thấp cao độ của toàn bộ bản nhạc so với bản gốc theo một quãng nhất định để phù hợp với tầm giọng của người hát hoặc khả năng diễn tấu của nhạc cụ.
              </p>
              <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs space-y-2 mb-3">
                <strong class="text-amber-800 dark:text-amber-300 font-bold block"><i class="fa-solid fa-code-compare"></i> Quy luật bất biến khi dịch giọng:</strong>
                <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                  <li><strong>Yếu tố thay đổi:</strong> Tên gọi nốt nhạc và hóa biểu (dấu thăng/dấu giáng ở đầu khuông nhạc) sẽ thay đổi theo giọng mới.</li>
                  <li><strong>Yếu tố giữ nguyên:</strong> Quan hệ khoảng cách cao độ (quãng) và trường độ (tiết tấu, nhịp điệu) giữa các âm hoàn toàn được giữ nguyên vẹn.</li>
                </ul>
              </div>
              <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs space-y-1.5">
                <strong class="text-blue-800 dark:text-blue-300 font-bold block"><i class="fa-solid fa-calculator"></i> Ví dụ minh họa trong SGK:</strong>
                <p>Dịch câu hát mở đầu bài <em>'Bảy sắc cầu vồng'</em> từ giọng <strong>Đô trưởng (C major)</strong> nâng lên một quãng 2 trưởng (1 cung) sang giọng <strong>Rê trưởng (D major - hóa biểu có 2 dấu thăng: Pha thăng, Đô thăng)</strong>.</p>
                <p>Nốt Đô gốc &rarr; biến thành nốt Rê; nốt Mi gốc &rarr; biến thành Pha thăng; giai điệu nâng bổng lên nhưng bài hát nghe vẫn chuẩn xác.</p>
              </div>
            `
          },
          {
            title: "2. Đọc nhạc: Bài đọc nhạc số 2 (Giọng La thứ)",
            icon: "fa-music",
            content: `
              <p class="mb-3">
                <strong>Thang âm La thứ tự nhiên:</strong> Luyện đọc gam La thứ (A - B - C - D - E - F - G - A) và trục gam (La - Đô - Mi - La) với sắc thái trầm tĩnh, êm ả đặc trưng của điệu tính thứ.
              </p>
              <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                <strong class="text-slate-900 dark:text-white font-bold block"><i class="fa-solid fa-check-double text-emerald-600"></i> Yêu cầu thực hành:</strong>
                <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Luyện tiết tấu kết hợp nốt đen, móc đơn và móc kép.</li>
                  <li>Xướng âm đúng cao độ các bước nhảy quãng trong giọng La thứ.</li>
                  <li>Đọc kết hợp gõ phách, đánh nhịp hoặc ghép lời ca êm dịu theo đúng điệu tính.</li>
                </ul>
              </div>
            `
          }
        ],
        practice: [
          "Thực hành nâng một câu nhạc ngắn giọng Đô trưởng lên quãng 2 trưởng sang Rê trưởng.",
          "Xướng âm Bài đọc nhạc số 2 giọng La thứ kết hợp gõ đệm phách.",
          "So sánh cảm giác khi hát một bài ở giọng gốc quá trầm hoặc quá cao với khi đã dịch giọng vừa vặn."
        ],
        summary: "Dịch giọng là nâng hoặc hạ cao độ toàn bài theo một quãng nhất định. Khi dịch giọng: tên nốt và hóa biểu thay đổi; quan hệ cao độ, trường độ giữa các âm được giữ nguyên.",
        quiz: [
          {
            q: "Mục đích chính của việc dịch giọng trong biểu diễn âm nhạc là gì?",
            opts: ["Làm bài hát dài hơn", "Phù hợp với tầm cất giọng của người hát hoặc khả năng diễn tấu nhạc cụ", "Xóa bỏ hết hóa biểu", "Thay đổi nhịp điệu bài hát"],
            ans: 1,
            explain: "Dịch giọng nhằm nâng/hạ cao độ để bài hát vừa vặn với tầm cất giọng của người hát hoặc nhạc cụ."
          },
          {
            q: "Khi tiến hành dịch giọng một bản nhạc, yếu tố nào sau đây KHÔNG THAY ĐỔI?",
            opts: ["Tên gọi các nốt nhạc", "Hóa biểu đầu khuông nhạc", "Quan hệ cao độ và trường độ giữa các âm", "Vị trí nốt trên khuông nhạc"],
            ans: 2,
            explain: "Khi dịch giọng, tên nốt và hóa biểu thay đổi, nhưng quan hệ cao độ và trường độ giữa các âm luôn giữ nguyên."
          },
          {
            q: "Khi dịch bài hát từ giọng Đô trưởng lên quãng 2 (1 cung), bài hát sẽ chuyển sang giọng nào?",
            opts: ["Mi thứ", "Rê trưởng", "Fa trưởng", "Sol trưởng"],
            ans: 1,
            explain: "Nâng từ Đô (C) lên 1 cung (quãng 2 trưởng) sẽ sang nốt Rê (D), tức giọng Rê trưởng."
          },
          {
            q: "Bài đọc nhạc số 2 trong Chủ đề 3 được viết ở giọng gì?",
            opts: ["Đô trưởng", "La thứ", "Son trưởng", "Mi thứ"],
            ans: 1,
            explain: "Bài đọc nhạc số 2 được xây dựng trên thang âm giọng La thứ tự nhiên."
          }
        ]
      }
    ]
  },
  {
    topicId: 4,
    topicTitle: "Chủ đề 4: Giai điệu quê hương",
    topicDesc: "Hát bài 'Lí ngựa ô' Nam Bộ và Nghe 'Lí ngựa ô' Trung Bộ; Nhã nhạc Cung đình Huế (UNESCO); Luyện nốt Si giáng (Bb).",
    color: "rose",
    icon: "fa-landmark",
    lessons: [
      {
        id: "bai-7",
        num: 7,
        title: "Bài 7 — Hát 'Lí ngựa ô' (dân ca Nam Bộ); Nghe dân ca Trung Bộ",
        time: "45 phút",
        target: "Hát đúng sắc thái dí dỏm, rộn ràng bài 'Lí ngựa ô' Nam Bộ. Lắng nghe và so sánh sự khác biệt về phong cách vùng miền giữa hai dị bản 'Lí ngựa ô' Nam Bộ và Trung Bộ.",
        intro: "Điệu Lí là làn điệu dân ca mộc mạc gắn liền với đời sống tâm hồn của người dân lao động Việt Nam từ bao đời nay.",
        sections: [
          {
            title: "1. Học hát: 'Lí ngựa ô' — Dân ca Nam Bộ",
            icon: "fa-music",
            content: `
              <p class="mb-3">
                <strong>Đặc điểm nghệ thuật:</strong> 'Lí ngựa ô' Nam Bộ có nhịp điệu rộn ràng, giai điệu tươi vui, hồn nhiên, dí dỏm; toát lên tính cách phóng khoáng, mộc mạc và chân thành của con người phương Nam.
              </p>
              <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 text-xs space-y-2">
                <p><strong>Cấu trúc:</strong> Hình thức gồm <strong>3 câu hát</strong> ngắn gọn, giàu hình ảnh miêu tả chú ngựa phi nhanh với chuông rung đĩnh đạc.</p>
                <p><strong>Kỹ thuật thể hiện:</strong> Hát rõ lời, giữ nhịp đều, nhấn phách nảy vui tươi, phối hợp hát nối tiếp và hòa giọng cả lớp.</p>
              </div>
            `
          },
          {
            title: "2. Nghe nhạc: 'Lí ngựa ô' — Dân ca Trung Bộ & So sánh hai dị bản",
            icon: "fa-headphones",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 text-xs">
                <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 space-y-2">
                  <strong class="text-amber-800 dark:text-amber-300 font-bold block"><i class="fa-solid fa-map-location-dot"></i> Bản Hát: 'Lí ngựa ô' Nam Bộ:</strong>
                  <p class="text-slate-700 dark:text-slate-300">Nhịp điệu dồn dập, tiết tấu rộn rã, thể hiện sự mộc mạc, hào sảng, vui tươi lạc quan.</p>
                </div>
                <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 space-y-2">
                  <strong class="text-purple-800 dark:text-purple-300 font-bold block"><i class="fa-solid fa-map-location-dot"></i> Bản Nghe: 'Lí ngựa ô' Trung Bộ:</strong>
                  <p class="text-slate-700 dark:text-slate-300">Giai điệu duyên dáng, mềm mại, luyến láy mang đậm âm hưởng và ngữ điệu dịu ngọt miền Trung; gửi gắm tình yêu quê hương và tình cảm lứa đôi kín đáo.</p>
                </div>
              </div>
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
                <strong>Bài học sư phạm:</strong> Hai bài hát cùng tên nhưng mang sắc thái vùng miền khác nhau. Khi nghe và so sánh, cần chú ý nhịp điệu, đường nét giai điệu và cách thể hiện cảm xúc; không đồng nhất hai dị bản âm nhạc này.
              </div>
            `
          }
        ],
        practice: [
          "Hát 'Lí ngựa ô' Nam Bộ kết hợp gõ tiết tấu bằng thanh phách hoặc gõ đệm nhạc cụ dân tộc.",
          "Lắng nghe 'Lí ngựa ô' Trung Bộ và phân tích sự khác nhau về chất luyến láy giữa hai miền.",
          "Chia nhóm thi đua biểu diễn hát đối đáp 'Lí ngựa ô' Nam Bộ sôi nổi."
        ],
        summary: "Hai dị bản 'Lí ngựa ô' phản ánh nét đẹp đa dạng của văn hóa dân gian: Nam Bộ sôi nổi, mộc mạc; Trung Bộ mềm mại, đằm thắm trữ tình.",
        quiz: [
          {
            q: "Bản hát 'Lí ngựa ô' trong chương trình Bài 7 thuộc vùng miền nào?",
            opts: ["Dân ca Bắc Bộ", "Dân ca Nam Bộ", "Dân ca Tây Nguyên", "Dân ca Tây Bắc"],
            ans: 1,
            explain: "Bản học hát là 'Lí ngựa ô' dân ca Nam Bộ, mang nhịp điệu rộn ràng, dí dỏm."
          },
          {
            q: "Điểm khác biệt nổi bật của bản nghe 'Lí ngựa ô' Trung Bộ so với Nam Bộ là gì?",
            opts: ["Giai điệu duyên dáng, mềm mại, đậm âm hưởng và ngữ điệu Trung Bộ", "Nhịp điệu dồn dập hơn hẳn", "Không có lời hát mà chỉ có kèn thổi", "Chỉ hát bằng tiếng nước ngoài"],
            ans: 0,
            explain: "'Lí ngựa ô' Trung Bộ mang nét duyên dáng, luyến láy mềm mại đặc trưng ngữ điệu miền Trung."
          },
          {
            q: "Hình thức cấu trúc của bản hát 'Lí ngựa ô' Nam Bộ gồm mấy câu?",
            opts: ["2 câu", "3 câu", "5 câu", "7 câu"],
            ans: 1,
            explain: "Bản hát 'Lí ngựa ô' Nam Bộ trong SGK có hình thức gồm 3 câu hát."
          },
          {
            q: "Thái độ đúng đắn khi tìm hiểu các dị bản dân ca cùng tên ở các vùng miền là gì?",
            opts: ["Coi một bản là đúng còn bản kia là sai", "Trân trọng nét độc đáo, sắc thái riêng của từng vùng miền, không đồng nhất dị bản", "Chỉ nghe bản nhạc hiện đại", "Bỏ qua dân ca truyền thống"],
            ans: 1,
            explain: "Cần tôn trọng sắc thái riêng của từng vùng miền, không đồng nhất hai dị bản âm nhạc."
          }
        ]
      },
      {
        id: "bai-8",
        num: 8,
        title: "Bài 8 — Nhã nhạc Cung đình Huế; Nốt Si giáng trên Recorder/Kèn phím",
        time: "45 phút",
        target: "Hiểu nguồn gốc, biên chế Đại nhạc - Tiểu nhạc và giá trị Di sản phi vật thể nhân loại của Nhã nhạc Cung đình Huế (UNESCO). Nắm vững thế bấm và thực hành nốt Si giáng (Bb) trên recorder hoặc kèn phím.",
        intro: "Âm vang Nhã nhạc Cung đình Huế bên dòng sông Hương thơ mộng là kết tinh đỉnh cao của nền âm nhạc bác học cổ truyền Việt Nam.",
        sections: [
          {
            title: "1. Thường thức âm nhạc: Nhã nhạc Cung đình Huế",
            icon: "fa-crown",
            content: `
              <p class="mb-3">
                <strong>Lịch sử & Định danh:</strong> 'Nhã nhạc' có nghĩa là âm nhạc tao nhã, chuẩn mực; ở nước ta có từ thế kỉ XV (thời Hậu Lê) và phát triển rực rỡ đạt tới đỉnh cao nghệ thuật dưới triều Nguyễn (thế kỉ XIX). Được sử dụng trong các đại lễ, nghi thức trang trọng của triều đình nên được gọi là <em>Nhã nhạc Cung đình Huế</em>.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
                <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 space-y-1.5">
                  <strong class="text-amber-800 dark:text-amber-300 font-bold block"><i class="fa-solid fa-drum"></i> 1. Dàn Đại nhạc:</strong>
                  <p class="text-slate-700 dark:text-slate-300">Âm lượng lớn, vang vọng uy nghi; dùng trong các đại lễ trang trọng bậc nhất triều đình: Lễ tế Nam Giao, tế Miếu, Lễ Đại triều. Nhạc cụ gồm: trống lớn, kèn và các nhạc cụ gõ, hơi uy lực.</p>
                </div>
                <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-1.5">
                  <strong class="text-emerald-800 dark:text-emerald-300 font-bold block"><i class="fa-solid fa-guitar"></i> 2. Dàn Tiểu nhạc:</strong>
                  <p class="text-slate-700 dark:text-slate-300">Âm sắc tao nhã, vui tươi, thanh thoát; dùng trong các yến tiệc cung đình, lễ mừng. Nhạc cụ gồm: đàn tì bà, đàn nguyệt, sáo trúc, trống bản, não bạt, sênh tiền; tiêu biểu có bài tiểu nhạc <em>'Lưu thủy – Kim tiền'</em>.</p>
                </div>
              </div>
              <div class="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-900/50 text-xs text-rose-950 dark:text-rose-200">
                <strong>Vinh danh quốc tế:</strong> Năm 2003, Nhã nhạc Cung đình Huế chính thức được <strong>UNESCO ghi danh là Di sản văn hóa phi vật thể đại diện của nhân loại</strong> (danh sách 2008). Thế hệ trẻ có trách nhiệm tự hào, bảo tồn và phát huy giá trị di sản.
              </div>
            `
          },
          {
            title: "2. Luyện tập Nhạc cụ: Nốt Si giáng (Bb)",
            icon: "fa-music",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 text-xs">
                <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-1.5">
                  <strong class="text-blue-800 dark:text-blue-300 font-bold block"><i class="fa-solid fa-circle-dot"></i> Trên kèn Recorder:</strong>
                  <p class="text-slate-700 dark:text-slate-300">Thế bấm nốt <strong>Si giáng (Bb)</strong>: Tay trái bịt kín các lỗ 0, 1, 3 (mở lỗ 2); tay phải ngón trỏ bấm kín <strong>lỗ số 4</strong>.</p>
                  <p class="text-slate-600 dark:text-slate-400">Quan sát kỹ sơ đồ lỗ bấm trên nhạc cụ để bịt thật kín, giữ hơi thổi êm nhẹ, không bị xì hơi.</p>
                </div>
                <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800 space-y-1.5">
                  <strong class="text-indigo-800 dark:text-indigo-300 font-bold block"><i class="fa-solid fa-keyboard"></i> Trên Kèn phím:</strong>
                  <p class="text-slate-700 dark:text-slate-300">Xác định phím đen Si giáng (phím đen nằm giữa phím La và Si trắng).</p>
                  <p class="text-slate-700 dark:text-slate-300">Thực hành diễn tấu trích đoạn bài: <em>'Cùng múa vui'</em> với sắc thái linh hoạt, vui tươi rộn rã.</p>
                </div>
              </div>
            `
          }
        ],
        practice: [
          "Luyện tập thế bấm nốt Si giáng (Bb) trên recorder hoặc kèn phím theo sơ đồ SGK.",
          "Thực hành thổi bài 'Cùng múa vui' đúng cao độ các nốt Si giáng, giữ nhịp ổn định.",
          "Lắng nghe bản tiểu nhạc 'Lưu thủy – Kim tiền' của Nhã nhạc Cung đình Huế và liệt kê các nhạc cụ gõ, dây xuất hiện."
        ],
        summary: "Nhã nhạc Cung đình Huế (UNESCO vinh danh) gồm 2 dàn nhạc chính: Đại nhạc (nghi lễ uy nghiêm) và Tiểu nhạc (yến tiệc tao nhã). Nốt Si giáng (Bb) làm phong phú màu sắc âm thanh trên nhạc cụ học đường.",
        quiz: [
          {
            q: "Nhã nhạc Cung đình Huế phát triển tới đỉnh cao nghệ thuật dưới triều đại nào?",
            opts: ["Triều Lý", "Triều Trần", "Triều Hậu Lê", "Triều Nguyễn (thế kỉ XIX)"],
            ans: 3,
            explain: "Nhã nhạc phát triển đến đỉnh cao nghệ thuật dưới triều Nguyễn vào thế kỉ XIX tại kinh đô Huế."
          },
          {
            q: "Dàn Tiểu nhạc trong Nhã nhạc Cung đình Huế thường được sử dụng trong dịp nào?",
            opts: ["Lễ tế Nam Giao uy nghiêm", "Yến tiệc cung đình, lễ mừng tao nhã", "Chỉ dùng khi hành quân đánh trận", "Tế lễ ngoài đồng ruộng"],
            ans: 1,
            explain: "Tiểu nhạc có âm lượng vừa phải, thanh nhã dùng trong yến tiệc và các dịp vui cung đình."
          },
          {
            q: "Bản nhạc nào sau đây thuộc dàn Tiểu nhạc Cung đình Huế được giới thiệu trong SGK?",
            opts: ["Lưu thủy – Kim tiền", "Tiến quân ca", "Đường chúng ta đi", "Chiếc cầu Luân Đôn"],
            ans: 0,
            explain: "'Lưu thủy – Kim tiền' là bản tiểu nhạc cung đình mẫu mực nổi tiếng."
          },
          {
            q: "Trên kèn recorder, khi bấm nốt Si giáng (Bb), ngón trỏ tay phải bấm lỗ số mấy?",
            opts: ["Lỗ số 1", "Lỗ số 2", "Lỗ số 4", "Lỗ số 7"],
            ans: 2,
            explain: "Khi bấm thế Si giáng trên recorder, ngón trỏ tay phải phụ trách bấm kín lỗ số 4."
          }
        ]
      }
    ]
  },
  {
    topicId: 5,
    topicTitle: "Chủ đề 5: Trái Đất xanh",
    topicDesc: "Hát 'Ngôi nhà của chúng ta'; Nghe bản Concerto 'Mùa xuân' (Vivaldi); Khái niệm Hợp âm ba và Bài đọc nhạc số 3.",
    color: "teal",
    icon: "fa-earth-americas",
    lessons: [
      {
        id: "bai-9",
        num: 9,
        title: "Bài 9 — Hát 'Ngôi nhà của chúng ta'; Nghe 'Mùa xuân'",
        time: "45 phút",
        target: "Hát bài 'Ngôi nhà của chúng ta' (Hình Phước Liên) với tình yêu thương thiên nhiên, bảo vệ hành tinh xanh. Cảm thụ bản concerto 'Mùa xuân' (Le quattro stagioni) của nhà soạn nhạc Antonio Vivaldi.",
        intro: "Trái Đất là mái nhà chung chan hòa ánh nắng, nơi vạn vật cùng chung sống trong tình thân ái và khúc ca tươi thắm của mùa xuân.",
        sections: [
          {
            title: "1. Học hát: 'Ngôi nhà của chúng ta' — Nhạc sĩ Hình Phước Liên",
            icon: "fa-leaf",
            content: `
              <p class="mb-3">
                <strong>Nội dung & Thông điệp:</strong> Tác phẩm do nhạc sĩ Hình Phước Liên sáng tác, ca ngợi Trái Đất như ngôi nhà chung ấm áp của nhân loại, nơi có thiên nhiên tươi đẹp, cỏ cây hoa lá và tình người chan chứa; kêu gọi mọi người cùng chung tay giữ gìn sự hòa thuận và hành tinh xanh.
              </p>
              <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800 text-xs space-y-2">
                <p><strong>Yêu cầu nghệ thuật:</strong> Luyện hát đúng cao độ, trường độ, sắc thái tươi vui trong sáng.</p>
                <p><strong>Hình thức trình diễn:</strong> Trình bày đơn ca, song ca, tốp ca hoặc lĩnh xướng – hòa giọng; kết hợp vận động cơ thể nhịp nhàng theo âm hình tiết tấu bài hát.</p>
              </div>
            `
          },
          {
            title: "2. Nghe nhạc: Bản Concerto 'Mùa xuân' — Antonio Vivaldi",
            icon: "fa-violin",
            content: `
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                <p><strong>Tác giả & Xuất xứ:</strong> Antonio Vivaldi (1678 – 1741) là nhà soạn nhạc vĩ đại người Ý thời kỳ Baroque. <em>'Mùa xuân' (La Primavera)</em> là bản concerto đầu tiên nằm trong bộ tổ khúc 4 bản concerto lừng danh mang tên <strong>'Bốn mùa' (Le quattro stagioni)</strong>, xuất bản lần đầu năm 1725 tại Amsterdam.</p>
                <p><strong>Biên chế biểu diễn:</strong> Viết cho đàn violin độc tấu và dàn nhạc dây giao hưởng.</p>
                <p><strong>Hình tượng âm nhạc:</strong> Giai điệu trong sáng, dạt dào sức sống, gợi tả khung cảnh mùa xuân rực rỡ với tiếng chim hót líu lo, dòng suối róc rách và những cơn gió xuân mơn man hoa cỏ.</p>
              </div>
            `
          }
        ],
        practice: [
          "Luyện hát bài 'Ngôi nhà của chúng ta' kết hợp vận động cơ thể theo nhịp 2/4.",
          "Lắng nghe chương 1 bản Concerto 'Mùa xuân' của Vivaldi và chỉ ra đoạn nhạc miêu tả tiếng chim hót của đàn violin.",
          "Vẽ tranh hoặc viết một đoạn văn ngắn chia sẻ cảm xúc về màu xanh Trái Đất sau khi học bài."
        ],
        summary: "Bài hát 'Ngôi nhà của chúng ta' giáo dục ý thức bảo vệ môi trường sống. Bản concerto 'Mùa xuân' (Vivaldi, 1725) là kiệt tác khí nhạc đỉnh cao viết cho violin miêu tả thiên nhiên rực rỡ.",
        quiz: [
          {
            q: "Bài hát 'Ngôi nhà của chúng ta' do nhạc sĩ nào sáng tác?",
            opts: ["Hình Phước Liên", "Hoàng Long", "Phạm Trọng Cầu", "Nguyễn Văn Hiên"],
            ans: 0,
            explain: "'Ngôi nhà của chúng ta' là sáng tác nổi tiếng của nhạc sĩ Hình Phước Liên."
          },
          {
            q: "Bản concerto 'Mùa xuân' nằm trong bộ tác phẩm nổi tiếng nào của Antonio Vivaldi?",
            opts: ["Bài ca thiên nga", "Bốn mùa (Le quattro stagioni, 1725)", "Đường chúng ta đi", "Khúc nhạc chiều"],
            ans: 1,
            explain: "'Mùa xuân' là bản concerto số 1 trong bộ tổ khúc 'Bốn mùa' xuất bản năm 1725 của Vivaldi."
          },
          {
            q: "Nhạc cụ nào giữ vai trò độc tấu chính trong bản Concerto 'Mùa xuân' của Vivaldi?",
            opts: ["Đàn Piano", "Đàn Violin", "Kèn Oboe", "Kèn Cor"],
            ans: 1,
            explain: "Tác phẩm được Vivaldi viết cho đàn violin độc tấu kết hợp cùng dàn nhạc dây."
          },
          {
            q: "Thông điệp chính của bài hát 'Ngôi nhà của chúng ta' là gì?",
            opts: ["Xây dựng nhà cao tầng kiên cố", "Bảo vệ Trái Đất - ngôi nhà chung của nhân loại và sống hòa thuận với thiên nhiên", "Tập trung đi du lịch khám phá", "Mua sắm đồ dùng đắt tiền"],
            ans: 1,
            explain: "Bài hát ca ngợi Trái Đất là mái nhà chung tươi đẹp, nhắc nhở chúng ta sống hòa thuận và bảo vệ môi trường."
          }
        ]
      },
      {
        id: "bai-10",
        num: 10,
        title: "Bài 10 — Sơ lược về hợp âm; Đọc nhạc số 3",
        time: "45 phút",
        target: "Nắm vững định nghĩa Hợp âm và cấu tạo Hợp âm ba (âm 1, 3, 5). Phân biệt cấu trúc quãng của Hợp âm ba trưởng và Hợp âm ba thứ. Xướng âm Bài đọc nhạc số 3 ('Hành khúc' của Zoltán Kodály) và thực hành đọc hai bè, ba bè.",
        intro: "Nếu giai điệu là đường nét của bức tranh âm nhạc thì hợp âm chính là màu sắc lung linh tô điểm cho bức tranh ấy trở nên sống động và có chiều sâu.",
        sections: [
          {
            title: "1. Lí thuyết âm nhạc: Sơ lược về Hợp âm và Hợp âm ba",
            icon: "fa-cubes-stacked",
            content: `
              <p class="mb-3">
                <strong>Định nghĩa Hợp âm:</strong> Hợp âm là sự kết hợp đồng thời từ <strong>ba âm trở lên</strong> được sắp xếp theo một quy luật nhất định; trong đó cách xếp chồng theo các quãng 3 là phổ biến và căn bản nhất.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
                <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-1.5">
                  <strong class="text-blue-800 dark:text-blue-300 font-bold block"><i class="fa-solid fa-layer-group"></i> Cấu tạo Hợp âm ba:</strong>
                  <p class="text-slate-700 dark:text-slate-300">Gồm 3 âm xếp chồng theo các quãng 3. Tính từ dưới lên trên:</p>
                  <ul class="list-disc pl-4 space-y-0.5 text-slate-700 dark:text-slate-300">
                    <li>Âm dưới cùng: <strong>Âm 1 (Âm gốc)</strong> &rarr; Tên hợp âm gọi theo âm 1.</li>
                    <li>Âm ở giữa: <strong>Âm 3</strong> (tạo quãng 3 với âm 1).</li>
                    <li>Âm trên cùng: <strong>Âm 5</strong> (tạo quãng 5 với âm 1).</li>
                  </ul>
                </div>
                <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800 space-y-1.5">
                  <strong class="text-indigo-800 dark:text-indigo-300 font-bold block"><i class="fa-solid fa-code-compare"></i> Phân loại Hợp âm ba Trưởng & Thứ:</strong>
                  <p>• <strong>Hợp âm ba trưởng:</strong> Quãng 3 dưới là <em>3 trưởng (2 cung)</em>, quãng 3 trên là <em>3 thứ (1,5 cung)</em>. Kí hiệu chữ in hoa (vd: <strong>C</strong>).</p>
                  <p>• <strong>Hợp âm ba thứ:</strong> Quãng 3 dưới là <em>3 thứ (1,5 cung)</em>, quãng 3 trên là <em>3 trưởng (2 cung)</em>. Kí hiệu chữ in hoa kèm chữ m nhỏ (vd: <strong>Am</strong>).</p>
                </div>
              </div>
              <div class="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
                <strong>Phân biệt cơ bản:</strong> Khi diễn tấu hợp âm, các âm phải ngân vang <em>đồng thời cùng một lúc</em>, khác với giai điệu là các nốt vang lên lần lượt nối tiếp.
              </div>
            `
          },
          {
            title: "2. Đọc nhạc: Bài đọc nhạc số 3 ('Hành khúc' — Zoltán Kodály)",
            icon: "fa-music",
            content: `
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                <p><strong>Xuất xứ:</strong> Bài 'Hành khúc' của nhà sư phạm, nhạc sĩ Hungary lừng danh Zoltán Kodály, được chuyển giọng từ bản gốc Fa trưởng sang giọng Đô trưởng để phù hợp tầm xướng âm lứa tuổi học sinh.</p>
                <p><strong>Quy trình luyện tập:</strong> Ôn gam Đô trưởng, luyện tiết tấu nhịp 2/4, đọc riêng biệt từng bè cho vững vàng rồi tiến hành ghép hai bè hòa âm.</p>
                <p><strong>Hoạt động mở rộng:</strong> Sách có hoạt động đọc hợp xướng ba bè theo các hợp âm Đô trưởng (C), Fa trưởng (F), Son trưởng (G) để cảm nhận trọn vẹn sự hòa quyện của các hợp âm ba.</p>
              </div>
            `
          }
        ],
        practice: [
          "Xác định các nốt cấu thành hợp âm Đô trưởng: Đô (âm 1) - Mi (âm 3) - Son (âm 5).",
          "Chia 3 nhóm xướng âm đồng thời 3 nốt Đô - Mi - Son để tạo hợp âm C vang rền.",
          "Thực hành đọc nhạc hai bè Bài đọc nhạc số 3 ('Hành khúc' của Kodály) kết hợp gõ phách."
        ],
        summary: "Hợp âm ba gồm âm 1, 3, 5 xếp theo quãng 3. Hợp âm ba trưởng (quãng 3 dưới 2 cung, trên 1,5 cung) mang màu sắc tươi sáng; hợp âm ba thứ (dưới 1,5 cung, trên 2 cung) đượm màu êm dịu.",
        quiz: [
          {
            q: "Hợp âm được định nghĩa là sự kết hợp đồng thời của bao nhiêu âm thanh trở lên?",
            opts: ["Hai âm", "Từ ba âm trở lên sắp xếp theo quy luật", "Một âm duy nhất ngân dài", "Bốn âm bất kì"],
            ans: 1,
            explain: "Hợp âm là sự kết hợp đồng thời từ ba âm trở lên được sắp xếp theo quy luật (phổ biến nhất là quãng 3)."
          },
          {
            q: "Tính từ dưới lên trên, các âm trong Hợp âm ba được gọi tên là gì?",
            opts: ["Âm 1, âm 2, âm 3", "Âm 1, âm 3, âm 5", "Âm gốc, âm ngọn, âm đuôi", "Âm trầm, âm bổng, âm trung"],
            ans: 1,
            explain: "Tính từ dưới lên, hợp âm ba gồm có âm 1 (âm gốc), âm 3 và âm 5."
          },
          {
            q: "Cấu tạo các quãng 3 của một Hợp âm ba trưởng lần lượt là:",
            opts: ["Quãng 3 dưới 1,5 cung, quãng 3 trên 2 cung", "Quãng 3 dưới 2 cung (3T), quãng 3 trên 1,5 cung (3t)", "Cả hai quãng đều 2 cung", "Cả hai quãng đều 1,5 cung"],
            ans: 1,
            explain: "Hợp âm ba trưởng có quãng 3 dưới là 3 trưởng (2 cung) và quãng 3 trên là 3 thứ (1,5 cung)."
          },
          {
            q: "Bài đọc nhạc số 3 'Hành khúc' là tác phẩm của nhà soạn nhạc nào?",
            opts: ["Zoltán Kodály (Hungary)", "Antonio Vivaldi (Ý)", "Franz Schubert (Áo)", "P. I. Tchaikovsky (Nga)"],
            ans: 0,
            explain: "Bài đọc nhạc số 3 trích từ tác phẩm 'Hành khúc' của nhạc sĩ Zoltán Kodály."
          }
        ]
      }
    ]
  },
  {
    topicId: 6,
    topicTitle: "Chủ đề 6: Tiếng hát hoà bình",
    topicDesc: "Hát bài 'Nụ cười' (Nhạc Nga); Nghe ca khúc 'Chúng em cần hoà bình'; Nhạc cụ Pha thăng (F#); Thường thức Đàn Đá & Đàn Đáy.",
    color: "cyan",
    icon: "fa-dove",
    lessons: [
      {
        id: "bai-11",
        num: 11,
        title: "Bài 11 — Hát 'Nụ cười'; Nghe 'Chúng em cần hoà bình'",
        time: "45 phút",
        target: "Hát bài 'Nụ cười' (V. Shainsky - Phạm Tuyên) vui tươi, lạc quan với niềm tin yêu cuộc sống. Cảm thụ bài hát thiếu nhi bất hủ 'Chúng em cần hoà bình' (Hoàng Long - Hoàng Lân) với khát vọng thế giới không còn chiến tranh.",
        intro: "Tiếng cười rạng rỡ và tiếng hát trong trẻo của tuổi thơ là thông điệp hòa bình mạnh mẽ nhất gửi gắm đến toàn thể nhân loại.",
        sections: [
          {
            title: "1. Học hát: 'Nụ cười' — Nhạc sĩ V. Shainsky (Lời Việt: Phạm Tuyên)",
            icon: "fa-face-smile",
            content: `
              <p class="mb-3">
                <strong>Xuất xứ & Ý nghĩa:</strong> Ca khúc Nga thiếu nhi nổi tiếng do nhạc sĩ V. Shainsky sáng tác, nhạc sĩ Phạm Tuyên viết lời Việt. Giai điệu bài hát vui tươi, trong sáng, rạng rỡ niềm lạc quan; lời ca ví nụ cười như ánh cầu vồng bừng sáng xua tan mây mù, đem lại niềm vui và sự ấm áp cho mọi người xung quanh.
              </p>
              <div class="p-3.5 bg-cyan-50 dark:bg-cyan-950/40 rounded-xl border border-cyan-200 dark:border-cyan-800 text-xs space-y-2">
                <p><strong>Cấu trúc bài hát:</strong> Gồm <strong>2 đoạn</strong>:</p>
                <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                  <li><strong>Đoạn 1:</strong> Giai điệu nhẹ nhàng, rủ rỉ kể về sức mạnh diệu kỳ của một nụ cười nở trên môi.</li>
                  <li><strong>Đoạn 2:</strong> Điệp khúc ngân vang, nhịp nhàng sôi nổi, giục giã mọi người cùng cất cao tiếng hát.</li>
                </ul>
                <p class="pt-1">Luyện hát đúng sắc thái, có thể chia nhóm hát nối tiếp hoặc hòa giọng, kết hợp gõ đệm phách và vận động phụ họa vui nhộn.</p>
              </div>
            `
          },
          {
            title: "2. Nghe nhạc: 'Chúng em cần hoà bình' — Hoàng Long & Hoàng Lân",
            icon: "fa-dove",
            content: `
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                <p><strong>Hoàn cảnh ra đời:</strong> Được hai nhạc sĩ song sinh Hoàng Long và Hoàng Lân sáng tác vào năm 1984 nhằm hưởng ứng phong trào đấu tranh vì hòa bình của thiếu nhi toàn thế giới.</p>
                <p><strong>Đặc điểm âm nhạc:</strong> Giai điệu khỏe khoắn, trong sáng, rộn ràng khí thế; thể hiện ước mơ chân thành của trẻ thơ được sống trong tình thương yêu, mái trường hòa bình và Trái Đất không còn bóng mây chiến tranh nổ súng.</p>
                <p><strong>Hoạt động:</strong> Nhận biết sự thay đổi tính chất âm nhạc, thể hiện cảm xúc bằng vận động nhịp nhàng hoặc gõ đệm phù hợp với tiết tấu hành khúc.</p>
              </div>
            `
          }
        ],
        practice: [
          "Hát bài 'Nụ cười' kết hợp múa phụ họa hoặc biểu diễn đôi bạn vui vẻ.",
          "Lắng nghe 'Chúng em cần hoà bình' và gõ đệm theo âm hình tiết tấu hành tiến.",
          "Cùng bạn bè thảo luận về những hành động nhỏ giúp lan tỏa hòa bình và tình yêu thương trong lớp học."
        ],
        summary: "Ca khúc 'Nụ cười' (Shainsky - Phạm Tuyên) mang lại niềm vui tươi lạc quan; bài hát 'Chúng em cần hoà bình' (Hoàng Long - Hoàng Lân, 1984) gửi gắm thông điệp nhân văn sâu sắc về một thế giới bình yên.",
        quiz: [
          {
            q: "Tác phẩm 'Nụ cười' là ca khúc thiếu nhi của nhạc sĩ nước nào, ai viết lời Việt?",
            opts: ["Nhạc Nga (V. Shainsky), lời Việt Phạm Tuyên", "Nhạc Pháp, lời Hoàng Long", "Nhạc Đức, lời Văn Cao", "Nhạc Ý, lời Trịnh Công Sơn"],
            ans: 0,
            explain: "'Nụ cười' do nhạc sĩ Nga V. Shainsky sáng tác, nhạc sĩ Phạm Tuyên đặt lời Việt thân thuộc."
          },
          {
            q: "Hình thức cấu trúc của bài hát 'Nụ cười' gồm mấy đoạn?",
            opts: ["1 đoạn", "2 đoạn (phiên khúc và điệp khúc)", "4 đoạn biến tấu", "3 đoạn phức hợp"],
            ans: 1,
            explain: "Bài hát gồm 2 đoạn: đoạn 1 dẫn dắt nhẹ nhàng và đoạn 2 điệp khúc rộn ràng."
          },
          {
            q: "Bài hát 'Chúng em cần hoà bình' được nhạc sĩ Hoàng Long và Hoàng Lân sáng tác vào năm nào?",
            opts: ["1968", "1975", "1984", "2000"],
            ans: 2,
            explain: "Tác phẩm được sáng tác năm 1984 để hưởng ứng phong trào hòa bình quốc tế của thiếu nhi."
          },
          {
            q: "Nội dung chính được gửi gắm qua bài hát 'Chúng em cần hoà bình' là gì?",
            opts: ["Ước mơ được đi chơi xa", "Khát vọng được sống trong hòa bình, hạnh phúc và không còn chiến tranh", "Cổ vũ các cuộc thi tài năng", "Miêu tả cảnh biển đảo quê hương"],
            ans: 1,
            explain: "Bài hát thể hiện khát vọng sâu sắc của thiếu nhi mong muốn hành tinh luôn bình yên, không còn bom đạn chiến tranh."
          }
        ]
      },
      {
        id: "bai-12",
        num: 12,
        title: "Bài 12 — Pha thăng trên nhạc cụ; Đàn Đá và Đàn Đáy",
        time: "45 phút",
        target: "Thực hành nốt Pha thăng (F#) trên recorder hoặc kèn phím. Nhận biết cấu tạo, chất liệu, cách kích âm và âm sắc độc đáo của hai nhạc cụ dân tộc cổ truyền đặc sắc: Đàn Đá và Đàn Đáy.",
        intro: "Từ tiếng gõ ngàn năm của đá núi Tây Nguyên đến tiếng tơ trầm đục sâu lắng của cây Đàn Đáy trong hát ca trù, âm nhạc truyền thống Việt Nam sở hữu kho tàng nhạc khí vô giá.",
        sections: [
          {
            title: "1. Luyện tập Nhạc cụ: Nốt Pha thăng (F#)",
            icon: "fa-guitar",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 text-xs">
                <div class="p-3.5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800 space-y-1.5">
                  <strong class="text-teal-800 dark:text-teal-300 font-bold block"><i class="fa-solid fa-circle-dot"></i> Trên kèn Recorder:</strong>
                  <p class="text-slate-700 dark:text-slate-300">Thế bấm nốt <strong>Pha thăng (F#)</strong> theo chuẩn SGK:</p>
                  <ul class="list-disc pl-4 space-y-0.5 text-slate-700 dark:text-slate-300">
                    <li>Tay trái: Bấm kín các lỗ 0, 1, 2, 3.</li>
                    <li>Tay phải: Ngón giữa bấm lỗ 5, ngón áp út bấm lỗ 6 (mở lỗ 4).</li>
                  </ul>
                  <p class="text-slate-700 dark:text-slate-300 pt-1">Thực hành trích đoạn giai điệu: <em>'Donna Donna'</em>.</p>
                </div>
                <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-1.5">
                  <strong class="text-blue-800 dark:text-blue-300 font-bold block"><i class="fa-solid fa-keyboard"></i> Trên Kèn phím:</strong>
                  <p class="text-slate-700 dark:text-slate-300">Bấm phím đen Pha thăng (F#) nằm giữa phím Pha và Son trắng.</p>
                  <p class="text-slate-700 dark:text-slate-300">Luyện tập hợp âm và hòa tấu trích đoạn bài ca vui nhộn: <em>'Deck the Halls'</em>.</p>
                  <p class="text-slate-600 dark:text-slate-400">Rèn luyện bấm ngón chuẩn xác, giữ vững nhịp chung khi hòa tấu cùng bạn bè.</p>
                </div>
              </div>
            `
          },
          {
            title: "2. Thường thức âm nhạc: Đàn Đá và Đàn Đáy",
            icon: "fa-drum",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
                <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 space-y-2">
                  <strong class="text-amber-800 dark:text-amber-300 font-bold text-sm block"><i class="fa-solid fa-mountain"></i> Đàn Đá (Nhạc cụ cổ xưa):</strong>
                  <p class="text-slate-700 dark:text-slate-300"><strong>Cấu tạo:</strong> Gồm tập hợp các thanh đá tự nhiên có kích thước dài/ngắn, dày/mỏng khác nhau: <em>thanh dài dày cho âm trầm, thanh ngắn mỏng cho âm cao</em>.</p>
                  <p class="text-slate-700 dark:text-slate-300"><strong>Cách phát âm:</strong> Người chơi dùng búa gỗ gõ trực tiếp vào bề mặt thanh đá.</p>
                  <p class="text-slate-700 dark:text-slate-300"><strong>Âm sắc & Môi trường:</strong> Âm thanh trong sáng, ngân vang rộn rã như tiếng suối ngàn; thường gắn bó mật thiết trong các dịp lễ hội của đồng bào các dân tộc Tây Nguyên.</p>
                </div>
                <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 space-y-2">
                  <strong class="text-rose-800 dark:text-rose-300 font-bold text-sm block"><i class="fa-solid fa-guitar"></i> Đàn Đáy (Nhạc cụ truyền thống người Việt):</strong>
                  <p class="text-slate-700 dark:text-slate-300"><strong>Cấu tạo:</strong> Thùng đàn bằng gỗ hình thang cân, cần đàn rất dài, có <strong>ba dây tơ</strong>.</p>
                  <p class="text-slate-700 dark:text-slate-300"><strong>Cách phát âm:</strong> Người diễn tấu dùng que hoặc miếng gảy bằng tre/nhựa để gảy dây.</p>
                  <p class="text-slate-700 dark:text-slate-300"><strong>Âm sắc & Vai trò:</strong> Âm sắc ấm áp, hơi đục, có độ nhấn nhá sâu lắng; giữ vai trò độc tôn chuyên đệm hát cho nghệ thuật Ca trù, ngâm thơ cùng phách và trống chầu.</p>
                </div>
              </div>
            `
          }
        ],
        practice: [
          "Luyện tập thế bấm Pha thăng (F#) trên recorder và thổi trích đoạn 'Donna Donna'.",
          "So sánh điểm khác biệt căn bản giữa Đàn Đá (bộ gõ tự thân vang) và Đàn Đáy (nhạc cụ dây gảy).",
          "Nghe một trích đoạn Hát ca trù và nhận diện âm thanh đệm độc đáo của cây Đàn Đáy."
        ],
        summary: "Đàn Đá (gõ bằng búa gỗ, vang vọng núi rừng Tây Nguyên) và Đàn Đáy (thùng hình thang cân, 3 dây tơ, đệm Ca trù) minh chứng cho sự đa dạng và giàu bản sắc của nhạc cụ dân tộc Việt Nam.",
        quiz: [
          {
            q: "Để tạo ra âm thanh trên Đàn Đá, người biểu diễn sử dụng dụng cụ gì?",
            opts: ["Cung vĩ kéo", "Búa gỗ gõ vào các thanh đá", "Móng gảy dây", "Ống thổi hơi"],
            ans: 1,
            explain: "Người chơi dùng búa bằng gỗ gõ trực tiếp lên bề mặt các thanh đá có kích thước khác nhau."
          },
          {
            q: "Đặc điểm cấu tạo nổi bật của cây Đàn Đáy là gì?",
            opts: ["Thùng đàn hình tròn, có 2 dây", "Thùng gỗ hình thang cân, cần đàn dài, có 3 dây tơ", "Thùng đàn hình bầu dục, có 16 dây kim loại", "Gồm nhiều thanh đá xếp thành hàng"],
            ans: 1,
            explain: "Đàn Đáy có thùng gỗ hình thang cân độc đáo, cần đàn rất dài và căng 3 dây tơ."
          },
          {
            q: "Đàn Đáy giữ vai trò chủ đạo trong loại hình nghệ thuật diễn xướng dân gian nào?",
            opts: ["Hát Then Tây Bắc", "Hát Ca trù", "Hát Đờn ca tài tử", "Dân ca Quan họ"],
            ans: 1,
            explain: "Đàn Đáy là nhạc cụ đệm hát chủ đạo, không thể thay thế trong nghệ thuật hát Ca trù truyền thống."
          },
          {
            q: "Trên kèn recorder, khi bấm nốt Pha thăng (F#), tay phải sử dụng các ngón nào?",
            opts: ["Chỉ bấm ngón cái", "Ngón giữa bấm lỗ 5, ngón áp út bấm lỗ 6", "Bấm hết tất cả các ngón", "Không bấm lỗ nào"],
            ans: 1,
            explain: "Theo thế bấm chuẩn SGK: tay trái bấm kín lỗ 0,1,2,3; tay phải dùng ngón giữa bấm lỗ 5 và ngón áp út bấm lỗ 6."
          }
        ]
      }
    ]
  },
  {
    topicId: 7,
    topicTitle: "Chủ đề 7: Âm nhạc nước ngoài",
    topicDesc: "Hát bài 'Donna Donna'; Nhạc sĩ Franz Schubert và khúc nhạc 'Serenade'; Các hợp âm của giọng Đô trưởng, La thứ và Đọc nhạc số 4.",
    color: "purple",
    icon: "fa-globe",
    lessons: [
      {
        id: "bai-13",
        num: 13,
        title: "Bài 13 — Hát 'Donna Donna'; Nhạc sĩ Franz Peter Schubert và 'Serenade'",
        time: "45 phút",
        target: "Hát bài 'Donna Donna' (lời Việt: Phạm Trọng Cầu) với giai điệu tha thiết, đượm chút bùi ngùi hoài niệm. Tìm hiểu cuộc đời sự nghiệp của danh nhân âm nhạc Áo Franz Schubert và thưởng thức tuyệt phẩm 'Serenade' (Khúc nhạc chiều).",
        intro: "Âm nhạc lãng mạn phương Tây thế kỉ XIX đã chạm tới những cung bậc cảm xúc tinh tế và sâu lắng nhất trong trái tim con người.",
        sections: [
          {
            title: "1. Học hát: 'Donna Donna' (Lời Việt: Phạm Trọng Cầu)",
            icon: "fa-music",
            content: `
              <p class="mb-3">
                <strong>Đặc điểm tác phẩm:</strong> Ca khúc quốc tế nổi tiếng có giai điệu tha thiết, trữ tình, mang mác nỗi buồn hoài niệm tuổi thơ và khát vọng tự do. Bản hát học trong SGK có lời Việt do nhạc sĩ tài hoa Phạm Trọng Cầu chuyển ngữ đầy chất thơ.
              </p>
              <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 text-xs space-y-2">
                <p><strong>Cấu trúc:</strong> Hình thức gồm <strong>3 đoạn</strong>:</p>
                <ul class="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                  <li><strong>Đoạn 1:</strong> Giai điệu trầm buồn, tự sự kể về hình ảnh chú bê con ngơ ngác trên đường đi.</li>
                  <li><strong>Đoạn 2:</strong> Điệp khúc 'Donna Donna' rộn ràng hơn, bộc lộ khát vọng bay lượn như cánh én tự do.</li>
                  <li><strong>Đoạn 3:</strong> Trở lại với giai điệu bùi ngùi sâu lắng, để lại dư âm suy ngẫm cho người nghe.</li>
                </ul>
                <p class="pt-1">Luyện hát đúng sắc thái, chia nhóm hát nối tiếp, hòa giọng kết hợp vỗ phách hoặc gõ đệm nhẹ nhàng.</p>
              </div>
            `
          },
          {
            title: "2. Thường thức âm nhạc: Franz Schubert và tuyệt phẩm 'Serenade'",
            icon: "fa-feather",
            content: `
              <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-2 mb-3">
                <p><strong>Danh nhân Franz Peter Schubert (1797 – 1828):</strong> Nhạc sĩ thiên tài người Áo, đại diện tiêu biểu và sớm nhất của trường phái âm nhạc lãng mạn Tây Âu thế kỉ XIX. Dù cuộc đời ngắn ngủi, ông đã để lại gia tài đồ sộ với <strong>hơn 600 ca khúc nghệ thuật (Lied)</strong>, nhiều bản giao hưởng và sonata xuất sắc. Âm nhạc của Schubert ngập tràn chất trữ tình, giai điệu ngọt ngào, trong trẻo, mang đậm tính ca xướng tự nhiên.</p>
              </div>
              <div class="p-3.5 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/50 text-xs space-y-2">
                <strong class="text-rose-800 dark:text-rose-300 font-bold block text-sm"><i class="fa-solid fa-moon"></i> Tuyệt tác 'Serenade' (Dạ khúc / Khúc nhạc chiều):</strong>
                <p class="text-slate-700 dark:text-slate-300">Là khúc nhạc thứ 4 trong tập ca khúc di cảo nổi tiếng mang tên <em>'Bài ca thiên nga' (Schwanengesang)</em> của Schubert, được sáng tác để làm quà tặng sinh nhật một thiếu nữ trẻ. Ở Việt Nam, tác phẩm quen thuộc với tên gọi <strong>'Khúc nhạc chiều'</strong>.</p>
                <p class="text-slate-700 dark:text-slate-300">Giai điệu du dương, thơ mộng, đắm say lòng người như lời tâm tình dịu dàng trong đêm trăng thanh bình.</p>
              </div>
            `
          }
        ],
        practice: [
          "Hát bài 'Donna Donna' đúng sắc thái 3 đoạn và kết hợp gõ đệm theo nhịp đều.",
          "Nghe 'Serenade' của Schubert và nêu cảm nhận về tính chất trữ tình, trong sáng của giai điệu.",
          "Tìm hiểu thêm về ý nghĩa tên gọi tập ca khúc 'Bài ca thiên nga' của nhạc sĩ Schubert."
        ],
        summary: "Schubert (Áo, hơn 600 ca khúc) là đỉnh cao của trường phái lãng mạn. Tuyệt tác 'Serenade' (Khúc nhạc chiều nằm trong tập 'Bài ca thiên nga') thể hiện giai điệu thơ mộng bất hủ.",
        quiz: [
          {
            q: "Nhạc sĩ Franz Peter Schubert là đại diện tiêu biểu của trường phái âm nhạc nào?",
            opts: ["Trường phái Âm nhạc Lãng mạn Tây Âu (nước Áo)", "Trường phái Cổ điển Vienna", "Trường phái Ấn tượng Pháp", "Trường phái Hiện đại"],
            ans: 0,
            explain: "Schubert (1797–1828, người Áo) là đại diện tiêu biểu sớm nhất của trường phái âm nhạc lãng mạn Tây Âu."
          },
          {
            q: "Trong sự nghiệp sáng tác, nhạc sĩ Schubert nổi bật nhất với thể loại âm nhạc nào?",
            opts: ["Nhạc kịch Opera cung đình", "Hơn 600 ca khúc nghệ thuật giàu chất trữ tình", "Chỉ sáng tác thánh ca nhà thờ", "Các bài hát dân ca Châu Phi"],
            ans: 1,
            explain: "Schubert được tôn vinh là 'ông vua ca khúc' với hơn 600 ca khúc nghệ thuật tràn đầy chất trữ tình."
          },
          {
            q: "Bản nhạc 'Serenade' (Khúc nhạc chiều) là tác phẩm thứ mấy trong tập 'Bài ca thiên nga' của Schubert?",
            opts: ["Khúc nhạc thứ nhất", "Khúc nhạc thứ tư", "Khúc nhạc thứ bảy", "Khúc nhạc thứ mười"],
            ans: 1,
            explain: "'Serenade' là khúc nhạc thứ tư nằm trong tập ca khúc nổi tiếng 'Bài ca thiên nga' (Schwanengesang)."
          },
          {
            q: "Bài hát 'Donna Donna' được học trong SGK có cấu trúc gồm mấy đoạn?",
            opts: ["1 đoạn", "2 đoạn", "3 đoạn", "4 đoạn"],
            ans: 2,
            explain: "Bài hát 'Donna Donna' có hình thức 3 đoạn rõ ràng, lời Việt của nhạc sĩ Phạm Trọng Cầu."
          }
        ]
      },
      {
        id: "bai-14",
        num: 14,
        title: "Bài 14 — Hợp âm của Đô trưởng và La thứ; Đọc nhạc số 4",
        time: "45 phút",
        target: "Xác định các hợp âm ba quan trọng xây dựng trên các bậc I, IV, V của giọng Đô trưởng (C, F, G) và giọng La thứ (Am, Dm, Em). Xướng âm chuẩn xác Bài đọc nhạc số 4 (trích tác phẩm của P. I. Tchaikovsky).",
        intro: "Các bậc âm chính I, IV, V được ví như những trụ cột vững chãi tạo nên ngôi nhà hòa âm trong một giọng điệu âm nhạc.",
        sections: [
          {
            title: "1. Lí thuyết âm nhạc: Hợp âm ba trên các bậc của giọng Đô trưởng và La thứ",
            icon: "fa-bars-staggered",
            content: `
              <p class="mb-3">
                Trên mỗi bậc âm của một thang âm (gam), ta có thể thiết lập một hợp âm ba bằng cách xếp thêm hai âm cách nhau các quãng 3. Trong đó, các hợp âm thành lập trên <strong>bậc I (chủ âm), bậc IV (hạ át âm) và bậc V (át âm)</strong> là những hợp âm rường cột quan trọng nhất:
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
                <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 space-y-2">
                  <strong class="text-blue-800 dark:text-blue-300 font-bold block text-sm"><i class="fa-solid fa-music"></i> 1. Các hợp âm chính của giọng Đô trưởng:</strong>
                  <ul class="list-disc pl-4 space-y-1.5 text-slate-700 dark:text-slate-300">
                    <li><strong>Bậc I: Hợp âm Đô trưởng (kí hiệu: C)</strong> &rarr; Gồm các nốt: <em>Đô - Mi - Son</em>.</li>
                    <li><strong>Bậc IV: Hợp âm Fa trưởng (kí hiệu: F)</strong> &rarr; Gồm các nốt: <em>Fa - La - Đô</em>.</li>
                    <li><strong>Bậc V: Hợp âm Son trưởng (kí hiệu: G)</strong> &rarr; Gồm các nốt: <em>Son - Si - Rê</em>.</li>
                  </ul>
                </div>
                <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800 space-y-2">
                  <strong class="text-indigo-800 dark:text-indigo-300 font-bold block text-sm"><i class="fa-solid fa-music"></i> 2. Các hợp âm chính của giọng La thứ:</strong>
                  <ul class="list-disc pl-4 space-y-1.5 text-slate-700 dark:text-slate-300">
                    <li><strong>Bậc I: Hợp âm La thứ (kí hiệu: Am)</strong> &rarr; Gồm các nốt: <em>La - Đô - Mi</em>.</li>
                    <li><strong>Bậc IV: Hợp âm Rê thứ (kí hiệu: Dm)</strong> &rarr; Gồm các nốt: <em>Rê - Fa - La</em>.</li>
                    <li><strong>Bậc V: Hợp âm Mi thứ (kí hiệu: Em)</strong> &rarr; Gồm các nốt: <em>Mi - Son - Si</em>.</li>
                  </ul>
                </div>
              </div>
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
                <strong>Ứng dụng:</strong> Đọc tên nốt từng hợp âm, chia nhóm hòa giọng ba âm cùng lúc hoặc bấm phím hòa tấu trên kèn phím/guitar/piano để đệm cho bài hát.
              </div>
            `
          },
          {
            title: "2. Đọc nhạc: Bài đọc nhạc số 4 ('Bài hát cổ nước Pháp' — P. I. Tchaikovsky)",
            icon: "fa-music",
            content: `
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                <p><strong>Xuất xứ tác phẩm:</strong> Trích từ tuyệt phẩm <em>'Bài hát cổ nước Pháp' (Old French Song)</em> nằm trong tập nhạc thiếu nhi bất hủ của đại danh hào âm nhạc Nga Pyotr Ilyich Tchaikovsky.</p>
                <p><strong>Giọng điệu & Tính chất:</strong> Viết ở giọng La thứ, tốc độ chậm rãi, giai điệu man mác trữ tình, trang nhã, giàu cảm xúc hoài niệm cổ kính phương Tây.</p>
                <p><strong>Yêu cầu luyện tập:</strong> Ôn thang âm La thứ, luyện đọc chuẩn cao độ và trường độ, kết hợp đánh nhịp hoặc gõ phách đều đặn.</p>
              </div>
            `
          }
        ],
        practice: [
          "Bấm và hòa tấu trên kèn phím/piano bộ 3 hợp âm C - F - G và bộ 3 hợp âm Am - Dm - Em.",
          "Xướng âm Bài đọc nhạc số 4 giọng La thứ với tốc độ chậm, giàu tình cảm.",
          "Xác định xem câu kết của Bài đọc nhạc số 4 dừng lại ở nốt nhạc nào (nốt La - âm chủ)."
        ],
        summary: "Các hợp âm ba trụ cột trên bậc I, IV, V: Giọng Đô trưởng gồm C, F, G; Giọng La thứ gồm Am, Dm, Em. Bài đọc nhạc số 4 (Tchaikovsky) mang vẻ đẹp cổ điển, trầm lắng của thang âm La thứ.",
        quiz: [
          {
            q: "Các hợp âm ba quan trọng nhất xây dựng trên bậc I, IV, V của giọng Đô trưởng là gì?",
            opts: ["Am, Dm, Em", "C (Đô trưởng), F (Fa trưởng), G (Son trưởng)", "D, E, F", "C, Dm, Em"],
            ans: 1,
            explain: "Trên bậc I, IV, V của giọng Đô trưởng lần lượt là các hợp âm ba C, F và G."
          },
          {
            q: "Hợp âm La thứ (kí hiệu Am) gồm có những nốt nhạc nào cấu thành?",
            opts: ["Đô - Mi - Son", "La - Đô - Mi", "Rê - Fa - La", "Mi - Son - Si"],
            ans: 1,
            explain: "Hợp âm La thứ gồm âm 1 là La, âm 3 là Đô và âm 5 là Mi (La - Đô - Mi)."
          },
          {
            q: "Bài đọc nhạc số 4 được trích từ tác phẩm nào của nhà soạn nhạc P. I. Tchaikovsky?",
            opts: ["Hồ thiên nga", "Bài hát cổ nước Pháp (Old French Song)", "Kẹp hạt dẻ", "Người đẹp ngủ trong rừng"],
            ans: 1,
            explain: "Bài đọc nhạc số 4 trích từ khúc nhạc 'Bài hát cổ nước Pháp' giọng La thứ của Tchaikovsky."
          },
          {
            q: "Kí hiệu Dm và Em lần lượt đại diện cho các hợp âm nào?",
            opts: ["Đô thứ và Fa thứ", "Rê thứ và Mi thứ", "Rê trưởng và Mi trưởng", "Son thứ và La thứ"],
            ans: 1,
            explain: "Dm là Rê thứ (bậc IV giọng La thứ), Em là Mi thứ (bậc V giọng La thứ)."
          }
        ]
      }
    ]
  },
  {
    topicId: 8,
    topicTitle: "Chủ đề 8: Một thời để nhớ",
    topicDesc: "Hát bài 'Một thời để nhớ'; Nghe 'Khi tóc thầy bạc trắng'; Luyện tập hòa tấu nhạc cụ tổng kết và Trình diễn cuối chủ đề.",
    color: "pink",
    icon: "fa-graduation-cap",
    lessons: [
      {
        id: "bai-15",
        num: 15,
        title: "Bài 15 — Hát 'Một thời để nhớ'; Nghe 'Khi tóc thầy bạc trắng'",
        time: "45 phút",
        target: "Hát bài 'Một thời để nhớ' (Nguyễn Văn Hiên) với giai điệu trong trẻo, lưu luyến kỉ niệm tuổi học trò. Cảm thụ sâu sắc lòng biết ơn thầy cô qua ca khúc 'Khi tóc thầy bạc trắng' (Trần Đức).",
        intro: "Tiếng trống trường khép lại năm học cuối cấp mở ra bao nỗi niềm bâng khuâng, nhớ thương thầy cô, bạn bè và mái trường thân yêu một thời niên thiếu.",
        sections: [
          {
            title: "1. Học hát: 'Một thời để nhớ' — Nhạc sĩ Nguyễn Văn Hiên",
            icon: "fa-book-open-reader",
            content: `
              <p class="mb-3">
                <strong>Nội dung & Nghệ thuật:</strong> Ca khúc do nhạc sĩ Nguyễn Văn Hiên sáng tác với giai điệu trong trẻo, tha thiết; lời ca như một lời tự tình ngọt ngào về tình bạn, mái trường, thầy cô kính yêu và những kỉ niệm không bao giờ phai nhạt của tuổi học trò trước giờ phút chia tay.
              </p>
              <div class="p-3.5 bg-pink-50 dark:bg-pink-950/40 rounded-xl border border-pink-200 dark:border-pink-800 text-xs space-y-2">
                <p><strong>Cấu trúc bài hát:</strong> Có hình thức <strong>3 đoạn</strong>, trong đó đoạn cuối nhắc lại giai điệu của phần đầu tạo cảm giác ngân vang, lắng đọng.</p>
                <p><strong>Yêu cầu luyện tập:</strong> Hát đúng cao độ, trường độ, sắc thái; có thể trình bày hát nối tiếp, hòa giọng, tập hát bè ở điệp khúc, kết hợp vỗ phách hoặc vận động phụ họa nhẹ nhàng.</p>
              </div>
            `
          },
          {
            title: "2. Nghe nhạc: 'Khi tóc thầy bạc trắng' — Nhạc sĩ Trần Đức",
            icon: "fa-chalkboard-user",
            content: `
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                <p><strong>Tác giả & Cảm xúc:</strong> Ca khúc xúc động do nhạc sĩ Trần Đức sáng tác, viết ở nhịp 4/4; giai điệu trữ tình, trong sáng, tha thiết.</p>
                <p><strong>Nội dung:</strong> Khắc họa hình ảnh người thầy tận tụy sớm hôm bên trang giáo án, bụi phấn trắng rơi làm tóc thầy bạc theo năm tháng; thể hiện tấm lòng tri ân sâu nặng và sự kính trọng vô bờ bến của bao thế hệ học trò đối với người thầy kính mến.</p>
                <p><strong>Hoạt động cảm thụ:</strong> Lắng nghe giai điệu đằm thắm, đánh nhịp 4/4 và chia sẻ những kỉ niệm xúc động nhất về thầy cô giáo của mình.</p>
              </div>
            `
          }
        ],
        practice: [
          "Luyện hát bài 'Một thời để nhớ' kết hợp chia nhóm hát nối tiếp và hòa giọng cả lớp.",
          "Nghe ca khúc 'Khi tóc thầy bạc trắng' và thực hành đánh nhịp 4/4 theo giai điệu bài hát.",
          "Viết một lời tri ân gửi tặng thầy cô nhân dịp bế giảng năm học lớp 9."
        ],
        summary: "'Một thời để nhớ' (Nguyễn Văn Hiên, 3 đoạn) đong đầy kỉ niệm bâng khuâng tuổi học trò. 'Khi tóc thầy bạc trắng' (Trần Đức) là khúc ca tri ân bất hủ ngợi ca công ơn người thầy.",
        quiz: [
          {
            q: "Bài hát 'Một thời để nhớ' do nhạc sĩ nào sáng tác?",
            opts: ["Nguyễn Văn Hiên", "Trần Đức", "Hoàng Long", "Phạm Tuyên"],
            ans: 0,
            explain: "'Một thời để nhớ' là sáng tác giàu cảm xúc tuổi học trò của nhạc sĩ Nguyễn Văn Hiên."
          },
          {
            q: "Hình thức cấu trúc bài hát 'Một thời để nhớ' gồm mấy đoạn?",
            opts: ["1 đoạn", "2 đoạn", "3 đoạn (đoạn cuối nhắc lại phần đầu)", "5 đoạn hợp xướng"],
            ans: 2,
            explain: "Bài hát có cấu trúc 3 đoạn, đoạn cuối nhắc lại giai điệu của phần đầu bài hát."
          },
          {
            q: "Ca khúc 'Khi tóc thầy bạc trắng' của nhạc sĩ Trần Đức được viết ở loại nhịp nào?",
            opts: ["Nhịp 2/4", "Nhịp 3/4", "Nhịp 4/4", "Nhịp 6/8"],
            ans: 2,
            explain: "Ca khúc 'Khi tóc thầy bạc trắng' được viết ở nhịp 4/4 trữ tình, tha thiết."
          },
          {
            q: "Hình ảnh trung tâm được tôn vinh sâu sắc trong ca khúc 'Khi tóc thầy bạc trắng' là gì?",
            opts: ["Cánh diều bay trong gió", "Bụi phấn rơi làm tóc thầy bạc trắng theo năm tháng vì đàn em thơ", "Tiếng ve kêu mùa hạ", "Dòng sông quê hương"],
            ans: 1,
            explain: "Hình ảnh bụi phấn rơi làm bạc tóc thầy biểu trưng cho sự hy sinh, tận tụy trọn đời vì sự nghiệp giáo dục."
          }
        ]
      },
      {
        id: "bai-16",
        num: 16,
        title: "Bài 16 — Luyện Recorder/Kèn phím; Trình diễn tổng kết cuối khóa",
        time: "45 phút",
        target: "Hoàn thiện kĩ năng diễn tấu nhạc cụ recorder hoặc kèn phím (nốt Pha thăng F# và Si giáng Bb). Tham gia hòa tấu và trình diễn báo cáo âm nhạc tổng kết chủ đề chia tay mái trường.",
        intro: "Những nốt nhạc cuối cùng của cấp Trung học cơ sở vang lên cũng là lúc các em tự tin thể hiện thành quả học tập âm nhạc và tỏa sáng trên sân khấu học đường.",
        sections: [
          {
            title: "1. Luyện tập nhạc cụ tổng kết: Trích đoạn 'Tháng năm học trò'",
            icon: "fa-music",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 text-xs">
                <div class="p-3.5 bg-pink-50 dark:bg-pink-950/40 rounded-xl border border-pink-200 dark:border-pink-800 space-y-1.5">
                  <strong class="text-pink-800 dark:text-pink-300 font-bold block"><i class="fa-solid fa-circle-dot"></i> Trên kèn Recorder:</strong>
                  <p class="text-slate-700 dark:text-slate-300">Ôn tập các thế bấm có dấu hóa thăng và giáng: <strong>Pha thăng (F#)</strong> và <strong>Si giáng (Bb)</strong>.</p>
                  <p class="text-slate-700 dark:text-slate-300">Thực hiện thổi các mẫu âm thang âm và luyện tấu trích đoạn bài: <em>'Tháng năm học trò'</em>.</p>
                  <p class="text-slate-600 dark:text-slate-400">Kiểm soát luồng hơi nhẹ nhàng, điều hòa cột hơi và ngón bấm dứt khoát.</p>
                </div>
                <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 space-y-1.5">
                  <strong class="text-purple-800 dark:text-purple-300 font-bold block"><i class="fa-solid fa-keyboard"></i> Trên Kèn phím (Melodica):</strong>
                  <p class="text-slate-700 dark:text-slate-300">Ôn luyện các phím đen F# và Bb, kết hợp tiết tấu nhịp nhàng.</p>
                  <p class="text-slate-700 dark:text-slate-300">Thực hành hòa tấu trích đoạn bài: <em>'Tháng năm học trò'</em> cùng các nhạc cụ gõ đệm.</p>
                  <p class="text-slate-600 dark:text-slate-400">Chú ý phối hợp nhịp nhàng giữa các bè và cân bằng âm lượng tổng thể.</p>
                </div>
              </div>
            `
          },
          {
            title: "2. Hoạt động Vận dụng & Biểu diễn báo cáo tổng kết học đường",
            icon: "fa-masks-theater",
            content: `
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-3">
                <strong class="text-slate-900 dark:text-white font-bold block text-sm"><i class="fa-solid fa-star text-amber-500"></i> Các hình thức biểu diễn tổng kết cuối khóa:</strong>
                <ul class="list-disc pl-4 space-y-1.5 text-slate-700 dark:text-slate-300">
                  <li><strong>Hát bè tập thể:</strong> Trình diễn bài hát <em>'Một thời để nhớ'</em> theo hình thức hát hai bè hòa quyện, thể hiện tình cảm gắn kết bạn bè.</li>
                  <li><strong>Hòa tấu nhạc cụ:</strong> Ghép dàn nhạc cụ học đường (recorder, kèn phím, thanh phách, trống lục lạc) biểu diễn tác phẩm <em>'Tháng năm học trò'</em>.</li>
                  <li><strong>Chương trình văn nghệ:</strong> Tổ chức buổi biểu diễn âm nhạc chủ đề <em>'Chia tay mái trường - Tiếp bước tương lai'</em>, tự tin cất cao tiếng hát trước thầy cô và gia đình.</li>
                </ul>
              </div>
            `
          }
        ],
        practice: [
          "Luyện tập thành thục trích đoạn 'Tháng năm học trò' trên nhạc cụ cá nhân.",
          "Phối hợp hòa tấu giữa nhóm thổi recorder/kèn phím và nhóm nhạc cụ gõ đệm.",
          "Tham gia biểu diễn bài hát 'Một thời để nhớ' trong buổi tổng kết âm nhạc cuối năm của lớp."
        ],
        summary: "Bài 16 tổng kết toàn bộ kĩ năng biểu diễn âm nhạc lớp 9: làm chủ nhạc cụ học đường (F#, Bb), hát bè hòa quyện và tự tin tham gia biểu diễn văn nghệ chia tay mái trường.",
        quiz: [
          {
            q: "Hai nốt nhạc có dấu hóa được ôn luyện kĩ thuật nâng cao trên nhạc cụ ở Bài 16 là:",
            opts: ["Đô thăng (C#) và Rê giáng (Db)", "Pha thăng (F#) và Si giáng (Bb)", "Sol thăng (G#) và La giáng (Ab)", "Mi thăng (E#) và Si thăng (B#)"],
            ans: 1,
            explain: "Bài 16 ôn luyện và hoàn thiện thế bấm hai nốt nhạc quan trọng: Pha thăng (F#) và Si giáng (Bb)."
          },
          {
            q: "Tác phẩm thực hành hòa tấu nhạc cụ trong Bài 16 là trích đoạn bài hát nào?",
            opts: ["Tháng năm học trò", "Nối vòng tay lớn", "Bảy sắc cầu vồng", "Lí ngựa ô"],
            ans: 0,
            explain: "Học sinh thực hành hòa tấu trích đoạn ca khúc 'Tháng năm học trò' trên recorder hoặc kèn phím."
          },
          {
            q: "Hoạt động vận dụng chính được tổ chức ở cuối Chủ đề 8 là gì?",
            opts: ["Thi viết văn luận", "Trình diễn chương trình văn nghệ chủ đề chia tay mái trường", "Tập thể dục nhịp điệu", "Vẽ tranh phong cảnh"],
            ans: 1,
            explain: "Chủ đề 8 khép lại bằng chương trình biểu diễn âm nhạc tổng kết chia tay mái trường lớp 9."
          },
          {
            q: "Yêu cầu quan trọng nhất khi chơi hòa tấu nhiều nhạc cụ cùng nhau là gì?",
            opts: ["Ai thổi nhanh nhất người đó thắng", "Nghe phần của bạn và giữ nhịp chung, cân bằng âm lượng", "Thổi thật to để lấn át nhóm khác", "Chỉ nhìn vào bản nhạc của mình"],
            ans: 1,
            explain: "Khi chơi hòa tấu, cần nghe phần của bạn, giữ nhịp độ ổn định và cân bằng âm lượng giữa các bè."
          }
        ]
      }
    ]
  }
];
