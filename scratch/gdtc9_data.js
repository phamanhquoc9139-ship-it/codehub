// gdtc9_data.js - Dữ liệu toàn diện 3 Phần & 8 Chủ đề (18 bài học) môn Giáo dục thể chất 9 (Kết nối tri thức)

const partsData = [
  {
    id: 'KTC',
    name: 'Phần I. Kiến thức chung',
    badge: 'Kiến thức chung',
    color: 'emerald',
    topicsCount: '1 Chủ đề',
    desc: 'Sử dụng các yếu tố tự nhiên (Không khí, Nước, Ánh nắng, Địa hình) và dinh dưỡng thể thao để rèn luyện sức khỏe, phát triển thể chất'
  },
  {
    id: 'VDCB',
    name: 'Phần II. Vận động cơ bản',
    badge: 'Vận động cơ bản',
    color: 'blue',
    topicsCount: '4 Chủ đề (9 bài học)',
    desc: 'Chạy cự li ngắn 100m, Nhảy cao kiểu nằm nghiêng (3 bài học chuẩn SGK), Chạy cự li trung bình, Bài tập thể dục nhịp điệu'
  },
  {
    id: 'TTTC',
    name: 'Phần III. Thể thao tự chọn',
    badge: 'Thể thao tự chọn',
    color: 'amber',
    topicsCount: '3 Môn (9 bài học)',
    desc: 'Cầu lông (Đánh cầu cao, đập cầu, bỏ nhỏ), Bóng đá 7 người (Mu giữa, dừng bóng, dẫn bóng mu ngoài), Bóng rổ (Bước thuận, bước chéo, chuyền vai)'
  }
];

const topicsData = [
  // CHỦ ĐỀ 0 (Phần I): Sử dụng yếu tố tự nhiên và dinh dưỡng
  {
    id: 'topic-ktc',
    partId: 'KTC',
    number: 'Kiến Thức Chung',
    title: 'Sử dụng yếu tố tự nhiên và dinh dưỡng để rèn luyện sức khỏe',
    sub: 'Tận dụng không khí trong lành, nước mát, ánh nắng mặt trời, địa hình tập luyện và dinh dưỡng theo 4 mục tiêu vận động thể thao.',
    duration: '2 Tiết lý thuyết & Thực hành tự rèn luyện',
    diagramKey: 'soDoDinhDuongYeuTo',
    objectives: [
      'Hiểu rõ cơ chế và phương pháp tắm không khí, tắm nước mát/lạnh và tắm nắng an toàn.',
      'Vận dụng linh hoạt các điều kiện địa hình (đường bằng, dốc, nước nông, chướng ngại) để nâng cao tố chất vận động.',
      'Nắm vững tỉ lệ phân bổ dinh dưỡng hợp lí theo 4 nhóm vận động: Tốc độ, Sức bền, Sức mạnh và Môn bóng phối hợp.'
    ],
    lessons: [
      {
        id: 'bai-ktc-1',
          lessonTitle: '1. Không khí & Tắm không khí',
        content: `
          <div class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Tắm không khí</strong> là hoạt động để cơ thể tiếp xúc với không khí ngoài trời trong lành trong điều kiện phù hợp, kết hợp vận động nhẹ và hít thở sâu.</p>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Thời gian:</strong> Thực hiện vào buổi sáng sớm, khoảng 15–30 phút mỗi ngày tùy thể trạng.</li>
              <li><strong>Hình thức:</strong> Ngồi thư giãn, đi bộ nhẹ nhàng, hít thở sâu, mặc trang phục thoáng mát.</li>
              <li><strong>Lưu ý an toàn:</strong> Tránh gió lùa mạnh, sương muối hoặc rét buốt khắc nghiệt; không tập khi đang ốm sốt.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'bai-ktc-2',
          lessonTitle: '2. Nước lạnh & Rèn luyện thích ứng',
        content: `
          <div class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p>Tiếp xúc với nước mát/lạnh kích thích tuần hoàn máu dưới da, tăng cường miễn dịch nhưng phải làm quen từ từ:</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Hạ nhiệt độ nước từ từ, bắt đầu từ 1–2 phút rồi mới tăng dần thời gian nếu cơ thể thích nghi.</li>
              <li>Sau khi tắm, lau khô người ngay bằng khăn bông mềm, mặc ấm và tránh ngồi quạt gió mạnh.</li>
              <li><strong>Cảnh báo an toàn:</strong> Tuyệt đối không tắm nước lạnh ngay khi cơ thể còn mồ hôi và nóng bừng sau vận động nặng; dừng ngay nếu thấy rét run, nổi da gà.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'bai-ktc-3',
          lessonTitle: '3. Ánh nắng mặt trời & Tổng hợp Vitamin D',
        content: `
          <div class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p>Ánh nắng kích hoạt tiền vitamin D dưới da chuyển hóa thành Vitamin D3, hỗ trợ hấp thu Canxi và Phốt pho giúp xương chắc khỏe:</p>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Khung giờ gợi ý:</strong> Mùa hè khoảng 6:30–7:30; Mùa đông khoảng 7:00–9:00 (tránh nắng gắt sau 10:00).</li>
              <li>Thời lượng: Bắt đầu 5–10 phút, tăng dần lên 15–30 phút/ngày tùy điều kiện thời tiết.</li>
              <li>Đội mũ che mặt và gáy, đeo kính râm bảo vệ mắt, uống đủ nước trước và sau khi phơi nắng.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'bai-ktc-4',
          lessonTitle: '4. Nước và địa hình trong rèn luyện thể chất',
        content: `
          <div class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Vận động trong nước:</strong> Bơi nhanh cự li ngắn rèn sức mạnh tốc độ; bơi vừa sức rèn sức bền; chạy/bật nhảy trong nước nông tạo lực cản rèn cơ bắp chân.</li>
              <li><strong>Địa hình đường bằng:</strong> Thuận lợi rèn tốc độ tối đa hoặc chạy bền nhịp nhàng.</li>
              <li><strong>Địa hình dốc:</strong> Chạy lên dốc tăng sức mạnh cơ đùi và mông; chạy xuống dốc rèn kiểm soát bước và tần số chân (cần thận trọng tránh chấn thương gối).</li>
              <li><strong>Địa hình tự nhiên có chướng ngại:</strong> Rèn luyện phản xạ, khả năng giữ thăng bằng và xử lí tình huống linh hoạt.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'bai-ktc-5',
          lessonTitle: '5. Dinh dưỡng theo 4 mục tiêu vận động',
        content: `
          <div class="overflow-x-auto my-2">
            <table class="w-full text-xs text-left border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                <tr>
                  <th class="p-2.5 border-b border-slate-200 dark:border-slate-700">Mục tiêu vận động</th>
                  <th class="p-2.5 border-b border-slate-200 dark:border-slate-700">Định hướng dinh dưỡng SGK</th>
                  <th class="p-2.5 border-b border-slate-200 dark:border-slate-700">Thực phẩm ưu tiên</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td class="p-2.5 font-bold text-rose-700 dark:text-rose-400">Tốc độ (100m)</td>
                  <td class="p-2.5">Carbohydrate ~58% tổng năng lượng, đồ dễ tiêu</td>
                  <td class="p-2.5">Cơm, yến mạch, chuối, thịt nạc, vitamin C &amp; phốt pho</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-blue-700 dark:text-blue-400">Sức bền (Chạy dài)</td>
                  <td class="p-2.5">Năng lượng bền, Lipid lành mạnh ~30% tổng năng lượng</td>
                  <td class="p-2.5">Dầu thực vật, các loại hạt, vitamin nhóm B, C; tránh mỡ xấu</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-emerald-700 dark:text-emerald-400">Sức mạnh (Bật nhảy)</td>
                  <td class="p-2.5">Protein > 2 g/kg cân nặng (>18% tổng năng lượng)</td>
                  <td class="p-2.5">Ức gà, trứng, cá, đậu đỗ, khoáng chất: Kali, Natri, Magie, Sắt</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-amber-700 dark:text-amber-400">Môn bóng phối hợp</td>
                  <td class="p-2.5">Phối hợp Nhanh – Mạnh – Bền; ăn cân đối, bù nước</td>
                  <td class="p-2.5">Đa dạng nhóm chất, rau củ quả tươi, uống nước từng ngụm nhỏ</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    quiz: [
      {
        question: "Thời gian tắm không khí vào buổi sáng được SGK gợi ý là bao nhiêu?",
        q: "Thời gian tắm không khí vào buổi sáng được SGK gợi ý là bao nhiêu?",
        options: [
          "5–10 phút",
          "15–30 phút mỗi ngày trong điều kiện thoáng đãng, sạch sẽ",
          "Khoảng 1–2 tiếng dưới ánh nắng gắt",
          "3–5 phút"
        ],
        answer: 1,
        correct: 1,
        explain: "Sách gợi ý thực hiện tắm không khí vào buổi sáng khoảng 15–30 phút mỗi ngày tùy thể trạng và điều kiện thời tiết."
      },
      {
        question: "Khi bắt đầu rèn luyện thích ứng với nước lạnh, thời gian tiếp xúc ban đầu nên là bao lâu?",
        q: "Khi bắt đầu rèn luyện thích ứng với nước lạnh, thời gian tiếp xúc ban đầu nên là bao lâu?",
        options: [
          "Khoảng 1–2 phút, sau đó tăng dần khi cơ thể đã quen",
          "Khoảng 30 phút liên tục",
          "Ít nhất 45 phút trong nước đá",
          "Không giới hạn thời gian"
        ],
        answer: 0,
        correct: 0,
        explain: "Người mới bắt đầu có thể thực hiện thời gian ngắn khoảng 1–2 phút, sau đó tăng dần nếu cơ thể thích nghi, không cố kéo dài."
      },
      {
        question: "Để cơ thể tổng hợp vitamin D tốt nhất vào mùa hè, khung giờ phơi nắng phù hợp là:",
        q: "Để cơ thể tổng hợp vitamin D tốt nhất vào mùa hè, khung giờ phơi nắng phù hợp là:",
        options: [
          "Khoảng 11:00 – 13:00",
          "Khoảng 6:30 – 7:30 sáng",
          "Khoảng 13:00 – 15:00",
          "Sau 17:00 chiều"
        ],
        answer: 1,
        correct: 1,
        explain: "Vào mùa hè, ánh nắng buổi sáng sớm khoảng 6:30–7:30 dịu mát, chứa tia UVB có lợi tổng hợp vitamin D mà không gây bỏng rát da."
      },
      {
        question: "Đối với vận động viên tập luyện môn tốc độ cự li ngắn, chất dinh dưỡng nào chiếm khoảng 58% năng lượng?",
        q: "Đối với vận động viên tập luyện môn tốc độ cự li ngắn, chất dinh dưỡng nào chiếm khoảng 58% năng lượng?",
        options: [
          "Lipid (chất béo)",
          "Carbohydrate (đường bột)",
          "Protein (chất đạm)",
          "Chất xơ thô"
        ],
        answer: 1,
        correct: 1,
        explain: "Carbohydrate là nguồn năng lượng chính giải phóng nhanh tức thì, chiếm khoảng 58% tổng năng lượng khẩu phần cho các môn tốc độ ngắn."
      }
    ]
  },

  // CHỦ ĐỀ 1 (Phần II): Chạy cự li ngắn 100m
  {
    id: 'topic-chay-100m',
    partId: 'VDCB',
    number: 'Chủ đề 1',
    title: 'Chạy cự li ngắn 100 m',
    sub: 'Hệ thống hóa toàn bộ kĩ thuật: Xuất phát thấp, Chạy lao sau xuất phát, Chạy giữa quãng và Kĩ thuật về đích an toàn.',
    duration: '6 Tiết',
    diagramKey: 'soDoChayNgan100m',
    objectives: [
      'Thực hiện thành thục tư thế xuất phát thấp bằng bàn đạp và phản xạ cực nhanh với hiệu lệnh.',
      'Phát lực đạp sau mạnh mẽ, chuyển tiếp nhịp nhàng sang chạy lao tăng dần độ dài và tần số bước.',
      'Duy trì tốc độ cao giữa quãng, phối hợp tay chân tự nhiên và đánh ngực/vai chạm đích an toàn.'
    ],
    lessons: [
      {
        id: 'bai-chay-100m-1',
          lessonTitle: 'Bài 1. Củng cố kĩ thuật xuất phát thấp và chạy lao sau xuất phát',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Trình tự 5 bước xuất phát thấp:</strong></p>
            <ol class="list-decimal pl-5 space-y-1.5">
              <li><strong>Vào chỗ:</strong> Đặt 2 tay sau vạch xuất phát, khoảng cách rộng bằng vai; chân thuận đặt ở bàn đạp trước, chân kia ở bàn đạp sau; đầu gối chân sau chạm đất.</li>
              <li><strong>Sẵn sàng:</strong> Nâng hông từ từ cao hơn vai khoảng 10–20 cm; dồn trọng tâm về phía trước lên hai tay và chân trước; mắt nhìn về trước 1–2m, tập trung nghe lệnh.</li>
              <li><strong>Rời bàn đạp:</strong> Khi nghe tiếng súng/còi, hai tay rời đất nhanh chóng, hai chân đạp mạnh vào bàn đạp (đặc biệt là chân trước) phóng người về phía trước.</li>
              <li><strong>Chạy lao (15–25m đầu):</strong> Thân người ban đầu ngả nhiều về trước; bước chạy đầu tiên ngắn, tần số cực nhanh, đạp sau tích cực.</li>
              <li><strong>Chuyển tiếp:</strong> Tăng dần độ dài bước và nâng dần thân người chuyển mượt mà sang chạy giữa quãng.</li>
            </ol>
            <div class="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 text-xs">
              <strong class="text-rose-800 dark:text-rose-300">Lỗi thường gặp:</strong> Chống tay quá xa vạch; nâng hông quá cao hoặc quá thấp; nhảy bật lên cao thay vì lao người về trước; bước đầu quá dài làm khựng tốc độ.
            </div>
          </div>
        `
      },
      {
        id: 'bai-chay-100m-2',
          lessonTitle: 'Bài 2. Củng cố kĩ thuật chạy giữa quãng và về đích',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>1. Kĩ thuật chạy giữa quãng (Duy trì tốc độ cao):</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Thân người hơi ngả về trước (khoảng 10–15°), mắt nhìn thẳng phía trước.</li>
              <li>Phối hợp tối ưu giữa tần số bước chân và độ dài bước; đạp sau nhanh, mạnh và dứt khoát.</li>
              <li>Tay đánh so le với chân: khuỷu tay gập vuông góc, đánh tự nhiên trước sau, vai thả lỏng không gồng cứng.</li>
            </ul>
            <p><strong>2. Kĩ thuật về đích:</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Tiếp tục duy trì tốc độ tối đa qua vạch đích, tuyệt đối không giảm tốc trước đích.</li>
              <li>Ở bước cuối cùng, chủ động gập thân về trước đánh ngực chạm dây đích, hoặc xoay vai chạm đích.</li>
              <li><strong>An toàn:</strong> Sau khi qua đích, tiếp tục chạy theo quán tính và giảm tốc độ từ từ; không nhảy vồ đích và không dừng lại đột ngột.</li>
            </ul>
          </div>
        `
      }
    ],
    quiz: [
      {
        question: "Ở lệnh 'Sẵn sàng' của kĩ thuật xuất phát thấp, hông của người chạy ở vị trí nào?",
        q: "Ở lệnh 'Sẵn sàng' của kĩ thuật xuất phát thấp, hông của người chạy ở vị trí nào?",
        options: [
          "Hạ thấp sát mặt đất",
          "Nâng cao hơn vai, trọng tâm dồn về trước",
          "Ngang bằng với gót chân",
          "Kéo lùi hết cỡ về phía sau"
        ],
        answer: 1,
        correct: 1,
        explain: "Khi có lệnh 'Sẵn sàng', người chạy nâng hông cao hơn vai, dồn trọng tâm về trước để chuẩn bị đạp lao."
      },
      {
        question: "Đặc điểm của những bước chạy đầu tiên trong giai đoạn chạy lao là gì?",
        q: "Đặc điểm của những bước chạy đầu tiên trong giai đoạn chạy lao là gì?",
        options: [
          "Bước thật dài và thân dựng đứng ngay",
          "Bước ngắn, mạnh, tần số nhanh, thân người ngả về trước",
          "Chạy chậm để thăm dò đối thủ",
          "Nhảy lò cò một chân"
        ],
        answer: 1,
        correct: 1,
        explain: "Chạy lao với bước đầu ngắn, mạnh; sau đó tăng dần độ dài và tần số bước, thân người nâng lên từ từ."
      },
      {
        question: "Khi về đích cự li ngắn 100m, hành vi nào sau đây là SAI kĩ thuật và nguy hiểm?",
        q: "Khi về đích cự li ngắn 100m, hành vi nào sau đây là SAI kĩ thuật và nguy hiểm?",
        options: [
          "Duy trì tốc độ cao chạy qua đích",
          "Gập thân đánh ngực chạm dây đích",
          "Nhảy vồ lên không chạm đích hoặc dừng đột ngột ngay trên vạch",
          "Giảm tốc từ từ sau khi đã vượt qua đích"
        ],
        answer: 2,
        correct: 2,
        explain: "Tuyệt đối không nhảy vồ đích vì rất dễ ngã chấn thương, và không dừng đột ngột ngay vạch đích."
      },
      {
        question: "Khoảng cách cự li của giai đoạn chạy lao sau xuất phát thường kéo dài bao nhiêu mét?",
        q: "Khoảng cách cự li của giai đoạn chạy lao sau xuất phát thường kéo dài bao nhiêu mét?",
        options: [
          "Chỉ 2–3 mét",
          "Khoảng 15–25 mét (đến khi thân người nâng lên bình thường)",
          "Toàn bộ 100 mét",
          "Khoảng 80 mét"
        ],
        answer: 1,
        correct: 1,
        explain: "Giai đoạn chạy lao thường kéo dài khoảng 15–25m, sau đó người chạy chuyển dần sang chạy giữa quãng."
      }
    ]
  },

  // CHỦ ĐỀ 2 (Phần II): Nhảy cao kiểu nằm nghiêng
  {
    id: 'topic-nhay-cao',
    partId: 'VDCB',
    number: 'Chủ đề 2',
    title: 'Nhảy cao kiểu nằm nghiêng',
    sub: 'Hoàn thiện 4 giai đoạn kĩ thuật liên tục: Chạy đà góc 30–40°, Giậm nhảy uy lực, Qua xà tư thế nằm nghiêng và Tiếp đất an toàn.',
    duration: '6 Tiết',
    diagramKey: 'soDoNhayCaoNamNghieng',
    objectives: [
      'Xác định chuẩn xác góc chạy đà 30–40° và nhịp bước đà ổn định (đặc biệt là 3 bước cuối).',
      'Thực hiện động tác giậm nhảy nhanh, mạnh bằng cả bàn chân kết hợp đá lăng và đánh tay hỗ trợ.',
      'Tạo tư thế nằm nghiêng song song với xà trên không và tiếp đất an toàn bằng chân giậm khuỵu gối.'
    ],
    lessons: [
      {
        id: 'bai-nhay-cao-1',
          lessonTitle: 'Bài 1. Kĩ thuật giậm nhảy và chạy đà kết hợp giậm nhảy',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>1. Chạy đà:</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Góc chạy đà:</strong> Hướng chếch so với xà một góc khoảng 30° – 40°. Người giậm chân phải thường chạy đà từ phía bên phải xà nhìn vào (và ngược lại).</li>
              <li>Số bước đà thường từ 6–9 bước; nhịp đà tăng dần đều, giữ tốc độ có kiểm soát.</li>
              <li><strong>3 bước đà cuối:</strong> Bước thứ 3 từ cuối dài hơn, hạ thấp trọng tâm chuẩn bị đặt chân giậm.</li>
            </ul>
            <p><strong>2. Giậm nhảy:</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Đặt chân giậm nhanh, chắc chắn, cách xà khoảng 60–80cm; tiếp xúc từ gót rồi chuyển nhanh lên cả bàn chân.</li>
              <li>Chân lăng đá mạnh lên cao theo hướng xà; hai tay cùng đánh mạnh lên trên hỗ trợ nâng thân.</li>
              <li>Thân hơi ngả ra xa xà ở thời điểm giậm nhảy để tạo góc bay tối ưu.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'bai-nhay-cao-2',
        lessonTitle: 'Bài 2. Kĩ thuật trên không và rơi xuống cát (đệm)',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>1. Giai đoạn trên không (Tư thế nằm nghiêng):</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Sau khi rời đất, thân người nghiêng ra xa xà; chân lăng duỗi thẳng qua xà trước.</li>
              <li>Xoay thân để ngực và bụng ở tư thế nằm nghiêng song song với thanh xà.</li>
              <li>Nhanh chóng co chân giậm sát thân, phối hợp tay để không làm rơi xà.</li>
            </ul>
            <p><strong>2. Giai đoạn tiếp đất an toàn:</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Sau khi qua xà, chủ động xoay người đưa chân giậm nhảy xuống tiếp đất trước.</li>
              <li>Khuỵu gối chân giậm để giảm chấn động; dùng hai tay chống phụ giữ thăng bằng.</li>
              <li><strong>An toàn:</strong> Tuyệt đối không chống tay cứng đờ hoặc rơi ngửa lưng; chỉ tập luyện khi đệm mút hoặc hố cát đạt tiêu chuẩn an toàn.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'bai-nhay-cao-3',
        lessonTitle: 'Bài 3. Phối hợp các giai đoạn kĩ thuật nhảy cao kiểu nằm nghiêng',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>1. Mục tiêu phối hợp liên hoàn 4 giai đoạn:</strong></p>
            <p>Liên kết nhuần nhuyễn toàn bộ 4 giai đoạn kĩ thuật: <em>Chạy đà → Giậm nhảy → Trên không nằm nghiêng → Tiếp đất bằng chân giậm</em> thành một chuỗi động tác nhịp nhàng, liên tục và tự tin.</p>
            
            <p><strong>2. Trình tự phối hợp hoàn chỉnh:</strong></p>
            <ol class="list-decimal pl-5 space-y-1.5">
              <li><strong>Chạy đà chuẩn nhịp (6–9 bước):</strong> Chạy theo hướng chếch 30°–40°, tăng tốc đều; ở 3 bước cuối (đặc biệt bước thứ ba từ cuối), sải bước dài hơn và chủ động hạ thấp trọng tâm để tích luỹ lực giậm nhảy.</li>
              <li><strong>Chuyển tiếp sang giậm nhảy cực nhanh:</strong> Đặt nhanh và chắc chắn chân giậm vào vị trí cách xà 60–80cm (chân giậm đặt bằng gót rồi chuyển sang cả bàn); không khựng đà; phối hợp đá mạnh chân lăng và hai tay vung lên cao để nâng trọng tâm cơ thể.</li>
              <li><strong>Bay trên không qua xà:</strong> Thân người xoay sang tư thế nằm nghiêng song song với xà; chân lăng duỗi thẳng lướt qua xà trước, nhanh chóng co chân giậm sát thân, hai tay và thân người khéo léo né tránh chạm xà.</li>
              <li><strong>Rơi xuống tiếp đất an toàn:</strong> Sau khi cơ thể vượt qua xà, chủ động xoay người đưa chân giậm xuống chạm đệm/cát trước; gập khớp gối sâu để giảm chấn động (hoãn xung); hai tay chống phụ giữ thăng bằng.</li>
            </ol>

            <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs space-y-1">
              <strong class="text-indigo-900 dark:text-indigo-300 font-bold block mb-1">
                <i class="fa-solid fa-list-check"></i> Tiêu chí đánh giá hoàn thành kĩ thuật:
              </strong>
              <p>✔ Chạy đà ổn định, đúng góc độ (30°–40°), không bị đổi chân giậm.</p>
              <p>✔ Giậm nhảy dứt khoát, nâng người bay lên cao thay vì lao người vào xà.</p>
              <p>✔ Tư thế qua xà nằm nghiêng rõ nét, phối hợp thu chân giậm khéo léo không rơi xà.</p>
              <p>✔ Tiếp đất êm ái bằng chân giậm vào giữa khu vực đệm mút/hố cát an toàn.</p>
            </div>

            <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs">
              <strong class="text-amber-800 dark:text-amber-300 font-bold block mb-1">
                <i class="fa-solid fa-triangle-exclamation"></i> Lỗi thường gặp khi phối hợp &amp; Cách khắc phục:
              </strong>
              <p>• <em>Giảm tốc độ ở những bước cuối:</em> Do tâm lí sợ va xà → Khắc phục: Tập chạy đà giậm nhảy qua xà chun mềm hoặc dây thun ở độ cao thấp nhiều lần.</p>
              <p>• <em>Lao người vào xà (tụt xà):</em> Do điểm giậm nhảy quá gần xà hoặc góc giậm nhảy hướng vào xà → Khắc phục: Đặt mốc giậm nhảy cách xà chuẩn 60–80cm và hơi ngả thân ra xa xà khi giậm.</p>
              <p>• <em>Chân giậm hoặc mông quệt xà:</em> Do co chân giậm chậm hoặc chưa xoay nghiêng người hoàn toàn → Khắc phục: Tập động tác co chân giậm mô phỏng trên cạn.</p>
            </div>
          </div>
        `
      }
    ],
    quiz: [
      {
        question: "Góc chạy đà chuẩn mực trong kĩ thuật nhảy cao kiểu nằm nghiêng là bao nhiêu độ?",
        q: "Góc chạy đà chuẩn mực trong kĩ thuật nhảy cao kiểu nằm nghiêng là bao nhiêu độ?",
        options: [
          "Góc vuông 90°",
          "Khoảng 30° – 40°",
          "Góc tù 120°",
          "Khoảng 70° – 80°"
        ],
        answer: 1,
        correct: 1,
        explain: "Góc chạy đà của nhảy cao kiểu nằm nghiêng trong SGK khoảng 30°–40° so với thanh xà."
      },
      {
        question: "Người có chân thuận giậm nhảy là chân phải thì hướng chạy đà sẽ từ phía nào vào xà?",
        q: "Người có chân thuận giậm nhảy là chân phải thì hướng chạy đà sẽ từ phía nào vào xà?",
        options: [
          "Từ phía bên trái",
          "Từ phía bên phải nhìn vào xà",
          "Chạy thẳng trực diện giữa xà",
          "Đứng tại chỗ không cần chạy đà"
        ],
        answer: 1,
        correct: 1,
        explain: "Người giậm chân phải thường chạy đà từ phía bên phải nhìn vào xà để chân lăng (chân trái) vung lên phía xà trước."
      },
      {
        question: "Khi qua xà, thân người của vận động viên ở tư thế nào?",
        q: "Khi qua xà, thân người của vận động viên ở tư thế nào?",
        options: [
          "Nằm ngửa lưng chạm xà",
          "Nằm nghiêng song song với mặt xà",
          "Gập bụng chữ V",
          "Đứng thẳng hai chân qua xà"
        ],
        answer: 1,
        correct: 1,
        explain: "Ở giai đoạn trên không, thân người xoay để ở tư thế nằm nghiêng khi vượt xà."
      },
      {
        question: "Bộ phận nào tiếp xúc mặt đệm/cát đầu tiên khi rơi xuống tiếp đất?",
        q: "Bộ phận nào tiếp xúc mặt đệm/cát đầu tiên khi rơi xuống tiếp đất?",
        options: [
          "Chân lăng",
          "Chân giậm nhảy (khuỵu gối hoãn xung)",
          "Hai bàn tay chống thẳng",
          "Lưng và gáy"
        ],
        answer: 1,
        correct: 1,
        explain: "Tiếp đất chủ động bằng chân giậm nhảy, khuỵu gối để giảm chấn động và bảo vệ cơ thể."
      }
    ]
  },

  // CHỦ ĐỀ 3 (Phần II): Chạy cự li trung bình
  {
    id: 'topic-chay-trung-binh',
    partId: 'VDCB',
    number: 'Chủ đề 3',
    title: 'Chạy cự li trung bình',
    sub: 'Rèn luyện sức bền thể lực, kĩ thuật xuất phát cao, phân bổ nhịp thở, kĩ thuật ôm cua đường cong và phương pháp vượt ngưỡng "cực điểm".',
    duration: '6 Tiết',
    diagramKey: 'soDoChayTrungBinh',
    objectives: [
      'Thực hiện thành thạo kĩ thuật xuất phát cao và phân phối sức bền đều đặn suốt toàn bộ cự li.',
      'Phối hợp nhịp thở sâu nhịp nhàng (2 bước hít - 2 bước thở) và chạy ôm cua đường cong an toàn.',
      'Nhận biết và có kĩ năng vượt qua hiện tượng "cực điểm" để tiếp tục hoàn thành cự li chạy bền.'
    ],
    lessons: [
      {
        id: 'bai-chay-tb-1',
          lessonTitle: 'Bài 1. Củng cố xuất phát và tăng tốc sau xuất phát',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Xuất phát cao trong chạy trung bình:</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Tư thế:</strong> Chân thuận đặt sát sau vạch xuất phát; chân kia đặt sau cách khoảng một bàn chân; gối hơi khuỵu, trọng tâm dồn lên chân trước.</li>
              <li>Thân người hơi ngả về trước, hai tay co tự nhiên ngang hông; mắt nhìn trước 3–5m.</li>
              <li>Khi có lệnh, đạp chân xuất phát và tăng tốc có kiểm soát; nhanh chóng nhập vào đường chạy chung.</li>
              <li><strong>Lưu ý:</strong> Không bung hết sức ngay đầu cự li để tránh kiệt sức ở nửa sau đường chạy.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'bai-chay-tb-2',
          lessonTitle: 'Bài 2. Củng cố chạy giữa quãng, vượt "cực điểm" và về đích',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>1. Kĩ thuật chạy giữa quãng &amp; đường cong:</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Giữ tốc độ ổn định phù hợp với năng lực bản thân; bước chạy nhịp nhàng, thả lỏng vai.</li>
              <li><strong>Nhịp thở:</strong> Hít sâu bằng mũi và thở ra bằng miệng đều đặn theo nhịp 2 bước hít – 2 bước thở (hoặc 3 bước hít – 3 bước thở).</li>
              <li><strong>Khi chạy đường cong:</strong> Thân người hơi nghiêng vào phía trong tâm vòng cua; tay phải đánh rộng hơn tay trái để giữ thăng bằng.</li>
            </ul>
            <p><strong>2. Vượt qua hiện tượng "Cực điểm" (Dead Point):</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Dấu hiệu: Cảm giác tức ngực, khó thở, chân tay nặng nề do nhu cầu oxy tăng cao đột ngột.</li>
              <li>Cách xử lí: Giữ bình tĩnh, không dừng lại, giảm nhẹ tốc độ bước, chủ động hít thật sâu và thở mạnh ra. Sau một đoạn ngắn cơ thể sẽ đạt trạng thái cân bằng mới ("Điểm hồi phục" – Second Wind).</li>
            </ul>
            <p><strong>3. Về đích:</strong> Tăng tốc ở 50–100m cuối cự li; chạy qua vạch đích rồi đi bộ chậm thả lỏng, hít thở sâu, tuyệt đối không ngồi thụp xuống ngay.</p>
          </div>
        `
      }
    ],
    quiz: [
      {
        question: "Kĩ thuật xuất phát nào được sử dụng bắt buộc trong chạy cự li trung bình?",
        q: "Kĩ thuật xuất phát nào được sử dụng bắt buộc trong chạy cự li trung bình?",
        options: [
          "Xuất phát thấp dùng bàn đạp",
          "Xuất phát cao (đứng chân trước chân sau)",
          "Ngồi xuất phát",
          "Nằm xuất phát"
        ],
        answer: 1,
        correct: 1,
        explain: "Chạy cự li trung bình và dài sử dụng kĩ thuật xuất phát cao (không dùng bàn đạp)."
      },
      {
        question: "Nhịp thở khoa học và phổ biến nhất khi chạy cự li trung bình là:",
        q: "Nhịp thở khoa học và phổ biến nhất khi chạy cự li trung bình là:",
        options: [
          "Nín thở suốt cự li chạy",
          "2 bước hít vào – 2 bước thở ra (hoặc 3 hít – 3 thở)",
          "Thở dồn dập 10 nhịp mỗi giây",
          "Chỉ thở ra mà không hít vào"
        ],
        answer: 1,
        correct: 1,
        explain: "Phối hợp nhịp thở đều đặn 2 bước hít - 2 bước thở giúp cơ bắp nhận đủ oxy và duy trì sức bền."
      },
      {
        question: "Hiện tượng sinh lí nào thường xuất hiện ở giữa cự li chạy bền làm người chạy tức ngực, khó thở tạm thời?",
        q: "Hiện tượng sinh lí nào thường xuất hiện ở giữa cự li chạy bền làm người chạy tức ngực, khó thở tạm thời?",
        options: [
          "Hiện tượng chuột rút toàn thân",
          "Hiện tượng 'cực điểm' (Dead point)",
          "Hiện tượng tụt huyết áp tức thì",
          "Hiện tượng say nắng"
        ],
        answer: 1,
        correct: 1,
        explain: "Hiện tượng 'cực điểm' xuất hiện do thiếu oxy tạm thời; khi vượt qua sẽ đến điểm hồi phục (Second wind)."
      },
      {
        question: "Sau khi vượt qua vạch đích của cự li chạy trung bình, hành động đúng đắn nhất là:",
        q: "Sau khi vượt qua vạch đích của cự li chạy trung bình, hành động đúng đắn nhất là:",
        options: [
          "Ngồi bệt ngay xuống đất hoặc nằm ngửa ra sân",
          "Tiếp tục đi bộ chậm, thả lỏng tay chân, hít sâu thở đều",
          "Uống ngay 1 chai nước đá lạnh buốt",
          "Bỏ về nhà ngay lập tức"
        ],
        answer: 1,
        correct: 1,
        explain: "Cần đi bộ thả lỏng để nhịp tim và huyết áp hạ dần từ từ; dừng đột ngột rất nguy hiểm cho hệ tuần hoàn."
      }
    ]
  },

  // CHỦ ĐỀ 4 (Phần II): Bài tập thể dục nhịp điệu
  {
    id: 'topic-the-duc',
    partId: 'VDCB',
    number: 'Chủ đề 4',
    title: 'Bài tập thể dục nhịp điệu',
    sub: 'Học chuỗi 8 động tác liên hoàn theo nhịp 8 đếm kết hợp âm nhạc, rèn luyện tư thế đẹp, tính nhịp điệu và sự dẻo dai khéo léo.',
    duration: '4 Tiết',
    diagramKey: 'soDoTheDucNhipDieu',
    objectives: [
      'Thuộc và thực hiện đúng kĩ thuật chuỗi 8 động tác thể dục nhịp điệu.',
      'Khớp đúng động tác theo nhịp đếm 2 × 8 và bắt đúng phách nhạc sôi nổi.',
      'Thể hiện sự tự tin, động tác dứt khoát, thanh thoát và tiếp đất êm ái an toàn.'
    ],
    lessons: [
      {
        id: 'bai-the-duc-1',
          lessonTitle: 'Bài 1. Bài thể dục nhịp điệu (phần 1: Động tác 1 đến 4)',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <ol class="list-decimal pl-5 space-y-1.5">
              <li><strong>Động tác 1 - Giậm chân tại chỗ:</strong> Bước luân phiên tại chỗ theo nhịp; tay đánh tự nhiên trước sau; thân người thẳng, vai thả lỏng.</li>
              <li><strong>Động tác 2 - Thu chân – tay cao:</strong> Bước chân sang bên, chân kia thu về chụm; hai tay đưa lên cao tạo hình chữ V hoặc cạnh đầu; thực hiện đổi bên nhịp nhàng.</li>
              <li><strong>Động tác 3 - Bật tách chụm:</strong> Bật hai chân tách rộng bằng vai rồi bật chụm lại; tay mở ngang hoặc nâng chữ V; tiếp đất bằng nửa trước bàn chân, khuỵu nhẹ gối.</li>
              <li><strong>Động tác 4 - Vặn mình:</strong> Bước chéo chân, nâng nhẹ gối và xoay thân trên có kiểm soát; tay phối hợp xoay theo hướng thân; đổi bên đối xứng.</li>
            </ol>
          </div>
        `
      },
      {
        id: 'bai-the-duc-2',
          lessonTitle: 'Bài 2. Bài thể dục nhịp điệu (phần 2: Động tác 5 đến 8 & Ghép nhạc)',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <ol start="5" class="list-decimal pl-5 space-y-1.5">
              <li><strong>Động tác 5 - Đặt gót:</strong> Đưa gót một chân ra phía trước, chân trụ khuỵu nhẹ; tay phối hợp nâng hạ nhịp nhàng, sau đó đổi chân.</li>
              <li><strong>Động tác 6 - Bước đuổi:</strong> Bước chếch sang bên, chân kia bước đuổi theo thu về; tay đưa ra trước theo nhịp; đổi bên.</li>
              <li><strong>Động tác 7 - Đẩy hông:</strong> Bước sang ngang rộng hơn vai, đẩy hông sang bên; tay giữ hoặc chuyển vị trí nhịp nhàng theo chuyển động hông.</li>
              <li><strong>Động tác 8 - Bật nhảy:</strong> Bước chéo chân tạo đà; bật thẳng người lên với hai tay mở chữ V; tiếp đất nhẹ nhàng bằng nửa trước bàn chân và khuỵu gối.</li>
            </ol>
            <p><strong>Cách học chuỗi &amp; ghép nhạc:</strong> Luyện từng cụm 2 × 8 nhịp; ghép liên hoàn phần 1 và phần 2; khi đã thuộc động tác mới mở nhạc nhịp vừa phải để tập theo phách.</p>
          </div>
        `
      }
    ],
    quiz: [
      {
        question: "Động tác thứ 3 của bài thể dục nhịp điệu lớp 9 là động tác nào?",
        q: "Động tác thứ 3 của bài thể dục nhịp điệu lớp 9 là động tác nào?",
        options: [
          "Giậm chân tại chỗ",
          "Bật tách chụm",
          "Đặt gót",
          "Đẩy hông"
        ],
        answer: 1,
        correct: 1,
        explain: "Động tác 3 trong phần 1 là 'Bật tách chụm'."
      },
      {
        question: "Khi thực hiện các động tác bật nhảy trong thể dục nhịp điệu, yêu cầu tiếp đất an toàn là gì?",
        q: "Khi thực hiện các động tác bật nhảy trong thể dục nhịp điệu, yêu cầu tiếp đất an toàn là gì?",
        options: [
          "Tiếp đất mạnh bằng cả gót chân với khớp gối thẳng đơ",
          "Tiếp đất nhẹ nhàng bằng nửa trước bàn chân, gối hơi khuỵu để hoãn xung",
          "Ngã lăn ra sàn",
          "Tiếp đất bằng đầu gối"
        ],
        answer: 1,
        correct: 1,
        explain: "Tiếp đất nhẹ nhàng bằng nửa trước bàn chân và hơi khuỵu gối giúp bảo vệ khớp gối và cột sống."
      },
      {
        question: "Mỗi động tác thể dục nhịp điệu thường được tập luyện theo chu kì đếm nhịp nào?",
        q: "Mỗi động tác thể dục nhịp điệu thường được tập luyện theo chu kì đếm nhịp nào?",
        options: [
          "Nhịp 1–2",
          "Nhịp 8 (cụm 2 × 8 nhịp)",
          "Nhịp 5",
          "Nhịp 10"
        ],
        answer: 1,
        correct: 1,
        explain: "Động tác thể dục nhịp điệu được xây dựng theo cụm 2x8 nhịp (1-2-3-4-5-6-7-8) phối hợp cùng âm nhạc."
      },
      {
        question: "Động tác thứ 5 mở đầu cho phần 2 của bài thể dục nhịp điệu là gì?",
        q: "Động tác thứ 5 mở đầu cho phần 2 của bài thể dục nhịp điệu là gì?",
        options: [
          "Đặt gót",
          "Bước đuổi",
          "Đẩy hông",
          "Bật nhảy"
        ],
        answer: 0,
        correct: 0,
        explain: "Động tác 5 là động tác 'Đặt gót' mở đầu cho phần 2."
      }
    ]
  },

  // CHỦ ĐỀ 5 (Phần III): Cầu lông
  {
    id: 'topic-cau-long',
    partId: 'TTTC',
    number: 'Chủ đề 5',
    title: 'Môn Cầu lông',
    sub: 'Hoàn thiện kĩ thuật Bật nhảy đánh cầu cao tay bên phải, Bật nhảy đập cầu thuận tay (Smash) và Kĩ thuật bỏ nhỏ sát lưới.',
    duration: '6 Tiết',
    diagramKey: 'soDoCauLong',
    objectives: [
      'Thực hiện chuẩn xác động tác bật nhảy đánh cầu cao tay và đập cầu thuận tay uy lực.',
      'Làm chủ kĩ thuật gài cầu bỏ nhỏ thuận tay và trái tay sát lưới đánh lừa đối phương.',
      'Hiểu và tuân thủ các quy tắc luật thi đấu cầu lông cơ bản và bảo đảm an toàn trên sân.'
    ],
    lessons: [
      {
        id: 'bai-cau-long-1',
          lessonTitle: 'Bài 1. Bật nhảy đánh cầu cao tay bên phải',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Kĩ thuật thực hiện:</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Tư thế chuẩn bị:</strong> Chân trái trước, chân phải sau; trọng tâm hơi dồn về chân trước, tay cầm vợt trước ngực, mắt theo dõi quỹ đạo cầu.</li>
              <li><strong>Bật nhảy:</strong> Chuyển trọng lượng về chân phải, khuỵu gối đạp mạnh bật lên cao; khi trên không xoay hông và vai về trước, duỗi tay cầm vợt lên cao.</li>
              <li><strong>Đánh cầu:</strong> Tiếp xúc cầu ở điểm cao nhất phía trước trán; dùng lực phối hợp thân người và cánh tay đưa cầu bổng sâu về cuối sân đối phương.</li>
              <li><strong>Tiếp đất:</strong> Rơi xuống lần lượt chân trái rồi chân phải, nhanh chóng thu vợt về tư thế sẵn sàng.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'bai-cau-long-2',
          lessonTitle: 'Bài 2. Bật nhảy đập cầu thuận tay (Smash)',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Kĩ thuật đập cầu tấn công:</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Chuẩn bị và bật nhảy tương tự như đánh cầu cao tay nhưng cần bật cao và chủ động hơn.</li>
              <li>Khi ở trên không, ưỡn thân vừa phải, xoay nhanh hông và vai về trước; duỗi tay tối đa.</li>
              <li><strong>Gập cổ tay nhanh:</strong> Điểm tiếp xúc cầu ở vị trí cao nhất có thể phía trước trán; mặt vợt hơi úp xuống để quả cầu bay cắm dốc thẳng sang sân đối thủ với tốc độ cao.</li>
              <li>Tiếp đất có kiểm soát, khuỵu gối giảm chấn và hồi phục vị trí trung tâm sân.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'bai-cau-long-3',
          lessonTitle: 'Bài 3. Kĩ thuật bỏ nhỏ (Drop shot) & Luật thi đấu',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>1. Kĩ thuật bỏ nhỏ thuận tay và trái tay:</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Bỏ nhỏ thuận tay:</strong> Bước chân phải lên chếch trước sang phải; duỗi tay đưa vợt đón cầu; dùng lực cổ tay chạm nhẹ vào cầu làm cầu vừa qua mép lưới rồi rơi cắm sát lưới đối phương.</li>
              <li><strong>Bỏ nhỏ trái tay:</strong> Bước chân tương tự; xoay cổ tay sang trái, lòng bàn tay hướng úp xuống, chạm nhẹ điều khiển cầu ngắn qua lưới.</li>
            </ul>
            <p><strong>2. Luật cơ bản:</strong> Lỗi chạm lưới, cầu ra ngoài sân, cầu chạm trần nhà hoặc cơ thể, một bên đánh cầu hai lần liên tiếp.</p>
          </div>
        `
      }
    ],
    quiz: [
      {
        question: "Cú đánh tấn công uy lực nhất đưa quả cầu bay cắm dốc sang sân đối phương gọi là gì?",
        q: "Cú đánh tấn công uy lực nhất đưa quả cầu bay cắm dốc sang sân đối phương gọi là gì?",
        options: [
          "Bỏ nhỏ sát lưới",
          "Bật nhảy đập cầu thuận tay (Smash)",
          "Phát cầu lao",
          "Hất cầu phòng thủ"
        ],
        answer: 1,
        correct: 1,
        explain: "Bật nhảy đập cầu thuận tay (Smash) là kĩ thuật tấn công uy lực nhất trong cầu lông."
      },
      {
        question: "Điểm mấu chốt để quả cầu bay cắm dốc xuống khi đập cầu là gì?",
        q: "Điểm mấu chốt để quả cầu bay cắm dốc xuống khi đập cầu là gì?",
        options: [
          "Mặt vợt ngửa lên trời",
          "Tiếp xúc cầu ở điểm cao nhất phía trước, gập nhanh cổ tay và mặt vợt hơi úp",
          "Đánh cầu khi cầu đã rơi xuống ngang thắt lưng",
          "Nhắm mắt vung vợt thật mạnh"
        ],
        answer: 1,
        correct: 1,
        explain: "Gập nhanh cổ tay và mặt vợt hơi úp giúp tạo góc đánh dốc cắm cầu hiểm hóc."
      },
      {
        question: "Kĩ thuật bỏ nhỏ (Drop shot) đạt yêu cầu chất lượng khi quả cầu bay như thế nào?",
        q: "Kĩ thuật bỏ nhỏ (Drop shot) đạt yêu cầu chất lượng khi quả cầu bay như thế nào?",
        options: [
          "Bay bổng thật cao về cuối sân",
          "Bay là là sát mép lưới và rơi cắm sát lưới bên sân đối phương",
          "Bay thẳng ra ngoài đường biên dọc",
          "Mắc luôn vào giữa lưới"
        ],
        answer: 1,
        correct: 1,
        explain: "Quả cầu bỏ nhỏ chuẩn xác phải lướt sát mép trên của lưới và rơi ngay khu vực sát lưới đối phương."
      },
      {
        question: "Tình huống nào sau đây được coi là phạm luật trong thi đấu cầu lông?",
        q: "Tình huống nào sau đây được coi là phạm luật trong thi đấu cầu lông?",
        options: [
          "Vợt của vận động viên chạm vào lưới khi cầu đang bay trong cuộc",
          "Cầu chạm vạch giới hạn của sân",
          "Đánh cầu bằng phần mu của vợt",
          "Phát cầu chéo sân hợp lệ"
        ],
        answer: 0,
        correct: 0,
        explain: "Chạm vợt hoặc cơ thể vào lưới khi cầu đang trong cuộc là lỗi chạm lưới."
      }
    ]
  },

  // CHỦ ĐỀ 6 (Phần III): Bóng đá 7 người
  {
    id: 'topic-bong-da',
    partId: 'TTTC',
    number: 'Chủ đề 6',
    title: 'Môn Bóng đá 7 người',
    sub: 'Kĩ thuật Đá bóng bằng mu giữa bàn chân, Ném biên tại chỗ, Dừng bóng bổng mu giữa và Dẫn bóng bằng mu ngoài.',
    duration: '6 Tiết',
    diagramKey: 'soDoBongDa7Nguoi',
    objectives: [
      'Thực hiện chuẩn xác động tác đá bóng bằng mu giữa bàn chân và ném biên đúng luật bóng đá 7 người.',
      'Khống chế và dừng bóng bổng êm ái bằng mu giữa giảm lực.',
      'Dẫn bóng tốc độ bằng mu ngoài bàn chân kết hợp quan sát và đổi hướng linh hoạt.'
    ],
    lessons: [
      {
        id: 'bai-bong-da-1',
          lessonTitle: 'Bài 1. Đá bóng bằng mu giữa bàn chân và tại chỗ ném biên',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>1. Đá bóng bằng mu giữa bàn chân:</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Chân trụ:</strong> Đặt cạnh bóng cách khoảng 10–15cm, mũi chân hướng về mục tiêu sút; gối hơi khuỵu nhẹ.</li>
              <li><strong>Chân đá:</strong> Vung chân từ sau ra trước; mũi chân duỗi thẳng chúc xuống, cổ chân khóa cứng; mu giữa tiếp xúc vào tâm sau của bóng.</li>
              <li>Chân đá tiếp tục đưa theo đà ra trước để tạo lực căng và giữ thăng bằng.</li>
            </ul>
            <p><strong>2. Ném biên tại chỗ đúng luật:</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Mặt hướng vào sân; hai chân giữ tiếp xúc mặt đất ở ngoài hoặc trên đường biên.</li>
              <li>Cầm bóng bằng hai tay, đưa bóng từ sau qua đầu và ném vào sân bằng một động tác liên tục.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'bai-bong-da-2',
          lessonTitle: 'Bài 2. Dừng bóng bổng bằng mu giữa bàn chân',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Kĩ thuật khống chế bóng bổng:</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Phán đoán chính xác điểm rơi của bóng; di chuyển đón bóng trong tư thế thăng bằng.</li>
              <li>Chân đón bóng nâng lên, gối hơi co, cổ chân thả lỏng vừa phải để đón bóng bằng mu giữa.</li>
              <li><strong>Hoãn xung giảm lực:</strong> Ngay khi bóng vừa chạm vào mu bàn chân, chủ động hạ chân và rút nhẹ về sau theo đà rơi của bóng.</li>
              <li>Bóng sẽ rơi êm sát tầm chân, thuận lợi để thực hiện đường chuyền, dẫn bóng hoặc dứt điểm tiếp theo.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'bai-bong-da-3',
          lessonTitle: 'Bài 3. Dẫn bóng bằng mu ngoài bàn chân',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Kĩ thuật dẫn bóng mu ngoài:</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Vị trí tiếp xúc: Phần mu ngoài bàn chân (từ phía ngón út đến cạnh ngoài cổ chân).</li>
              <li>Mũi chân hơi chúc xuống và khép nhẹ vào trong; mỗi lần chạm đẩy bóng đi khoảng 0,5–1m tùy tốc độ chạy.</li>
              <li>Luân phiên hai chân nhịp nhàng; vừa dẫn bóng vừa ngẩng đầu quan sát đồng đội và đối thủ.</li>
              <li><strong>Ưu điểm:</strong> Rất thuận lợi để che chắn bóng và đổi hướng bóng đột ngột khi bị đối phương áp sát.</li>
            </ul>
          </div>
        `
      }
    ],
    quiz: [
      {
        question: "Vị trí đặt chân trụ chuẩn xác khi sút bóng bằng mu giữa bàn chân là:",
        q: "Vị trí đặt chân trụ chuẩn xác khi sút bóng bằng mu giữa bàn chân là:",
        options: [
          "Đặt cách bóng 1 mét về phía trước",
          "Đặt ngang cạnh bóng, cách bóng khoảng 10–15 cm, mũi chân hướng đá",
          "Đặt giẫm lên trên quả bóng",
          "Đặt tít ra sau bóng 2 mét"
        ],
        answer: 1,
        correct: 1,
        explain: "Chân trụ đặt cạnh bóng khoảng 10–15cm, hướng mũi chân về hướng đá giúp phát lực chuẩn và giữ thăng bằng."
      },
      {
        question: "Theo luật bóng đá, khi thực hiện quả ném biên tại chỗ, cầu thủ phải đảm bảo:",
        q: "Theo luật bóng đá, khi thực hiện quả ném biên tại chỗ, cầu thủ phải đảm bảo:",
        options: [
          "Nhảy bật lên cao ném bằng 1 tay",
          "Hai chân tiếp xúc mặt đất (trên hoặc ngoài vạch biên), cầm bóng hai tay đưa qua đầu ném vào sân",
          "Đá bóng vào sân thay vì ném",
          "Ném bóng trực tiếp vào lưới đối phương để ghi bàn"
        ],
        answer: 1,
        correct: 1,
        explain: "Luật quy định hai chân phải chạm đất, bóng được cầm bằng hai tay và ném từ sau qua đầu vào sân."
      },
      {
        question: "Động tác quan trọng nhất để bóng bổng rơi êm sát chân khi dừng bóng bằng mu giữa là:",
        q: "Động tác quan trọng nhất để bóng bổng rơi êm sát chân khi dừng bóng bằng mu giữa là:",
        options: [
          "Gồng cứng chân đá ngược bóng lên trời",
          "Hạ chân và rút nhẹ chân ra sau đúng thời điểm tiếp xúc để hoãn xung giảm lực",
          "Nhảy tránh né quả bóng",
          "Dùng tay bắt bóng"
        ],
        answer: 1,
        correct: 1,
        explain: "Hạ chân rút về sau theo đà rơi của bóng giúp triệt tiêu xung lực, làm bóng rơi êm sát chân."
      },
      {
        question: "Khoảng cách cự li đối phương phải đứng cách điểm đá phạt trực tiếp trong sân 7 người tối thiểu là bao nhiêu mét?",
        q: "Khoảng cách cự li đối phương phải đứng cách điểm đá phạt trực tiếp trong sân 7 người tối thiểu là bao nhiêu mét?",
        options: [
          "3 mét",
          "Tối thiểu 6 mét theo luật sân 7 người",
          "9,15 mét (của sân 11 người)",
          "15 mét"
        ],
        answer: 1,
        correct: 1,
        explain: "Theo nội dung sách về sân 7 người, khoảng cách đối phương khi làm hàng rào đá phạt tối thiểu là 6m."
      }
    ]
  },

  // CHỦ ĐỀ 7 (Phần III): Bóng rổ
  {
    id: 'topic-bong-ro',
    partId: 'TTTC',
    number: 'Chủ đề 7',
    title: 'Môn Bóng rổ',
    sub: 'Kĩ thuật Tại chỗ và dẫn bóng đột phá bước thuận, Đột phá bước chéo (Cross-step) và Chuyền bóng một tay trên vai.',
    duration: '6 Tiết',
    diagramKey: 'soDoBongRo',
    objectives: [
      'Thực hiện đúng nhịp chân và bóng trong kĩ thuật đột phá bước thuận không phạm luật chạy bước.',
      'Làm chủ kĩ thuật đột phá bước chéo qua thân hạ thấp trọng tâm vượt qua hậu vệ đối phương.',
      'Thực hiện đường chuyền bóng một tay trên vai xa, căng, chuẩn xác phát động tấn công nhanh.'
    ],
    lessons: [
      {
        id: 'bai-bong-ro-1',
          lessonTitle: 'Bài 1. Tại chỗ và dẫn bóng đột phá bước thuận',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Kĩ thuật đột phá bước thuận (Ví dụ sang phải):</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li><strong>Tư thế chuẩn bị:</strong> Chân rộng bằng vai, gối khuỵu, thân hơi ngả trước, hai tay ôm bóng trước ngực.</li>
              <li><strong>Chân trụ &amp; Bước chân:</strong> Chân trái làm trụ; chân phải bước nhanh chếch về trước sang phải.</li>
              <li><strong>Quy tắc đập bóng:</strong> Chuyển thân theo hướng bước; bóng phải rời tay đập xuống sàn TRƯỚC KHI chân trụ (chân trái) nhấc lên khỏi mặt đất để tránh lỗi chạy bước (traveling).</li>
              <li>Đón bóng nảy lên và tiếp tục dẫn bóng tấn công hoặc phối hợp lên rổ hai bước.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'bai-bong-ro-2',
          lessonTitle: 'Bài 2. Đột phá bước chéo (Cross-step Drive)',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Kĩ thuật đột phá bước chéo (Ví dụ sang phải):</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Chân phải làm trụ vững chắc.</li>
              <li>Chân trái bước chéo nhanh qua thân sang phía trước bên phải; hạ thấp trọng tâm cơ thể.</li>
              <li>Dùng vai và lưng che chắn bóng; đập bóng xuống sân bằng tay phải ngay khi chân trái tiếp đất.</li>
              <li>Chân phải theo sau sau khi bóng rời tay; tiếp tục kiểm soát bóng đột phá qua đối thủ.</li>
              <li><strong>Lưu ý:</strong> Bước chéo tạo lợi thế che chắn bóng cực kì hiệu quả khi bị đối phương áp sát kèm chặt.</li>
            </ul>
          </div>
        `
      },
      {
        id: 'bai-bong-ro-3',
          lessonTitle: 'Bài 3. Tại chỗ chuyền bóng một tay trên vai & Luật bóng ngoài biên',
        content: `
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <p><strong>1. Kĩ thuật chuyền bóng 1 tay trên vai (Baseball Pass):</strong></p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Đưa bóng lên trên vai phải; trọng lượng chuyển về chân phải, thân xoay nhẹ sang phải sau.</li>
              <li>Đạp chân phải, chuyển trọng lượng sang trái và xoay thân mạnh mẽ về trước.</li>
              <li>Tay phải duỗi thẳng từ sau ra trước-lên; cổ tay gập, các ngón tay miết bóng khi bóng rời tay tạo đường bóng căng chuẩn.</li>
              <li>Chân phải bước lên một bước theo đà để giữ thăng bằng.</li>
            </ul>
            <p><strong>2. Luật bóng ngoài biên:</strong> Bóng chạm người/vật ngoài đường biên hoặc chạm sàn ngoài sân thì tính là bóng ngoài; quyền phát bóng thuộc về đội đối phương.</p>
          </div>
        `
      }
    ],
    quiz: [
      {
        question: "Quy tắc nhịp đập bóng bắt buộc khi thực hiện đột phá bước thuận trong bóng rổ là:",
        q: "Quy tắc nhịp đập bóng bắt buộc khi thực hiện đột phá bước thuận trong bóng rổ là:",
        options: [
          "Nhấc chân trụ chạy 3 bước rồi mới đập bóng",
          "Bóng phải rời tay đập xuống sân trước khi chân trụ rời khỏi mặt đất",
          "Chân trụ bước 2 lần liên tiếp",
          "Ôm bóng nhảy lò cò"
        ],
        answer: 1,
        correct: 1,
        explain: "Luật bóng rổ quy định bóng phải rời tay tiếp xúc mặt sàn trước khi chân trụ nhấc lên để không phạm lỗi chạy bước."
      },
      {
        question: "Ưu thế lớn nhất của kĩ thuật đột phá bước chéo (Cross-step) so với bước thuận là:",
        q: "Ưu thế lớn nhất của kĩ thuật đột phá bước chéo (Cross-step) so với bước thuận là:",
        options: [
          "Dùng vai và thân người che chắn bóng hiệu quả trước sự áp sát của đối thủ",
          "Không cần đập bóng xuống sân",
          "Được phép ôm bóng chạy qua nửa sân",
          "Làm quả bóng bay thẳng vào rổ"
        ],
        answer: 0,
        correct: 0,
        explain: "Bước chéo đưa thân và vai chắn giữa quả bóng và đối phương, bảo vệ bóng an toàn khi đột phá."
      },
      {
        question: "Động tác chuyền bóng một tay trên vai thường được sử dụng hiệu quả nhất khi nào?",
        q: "Động tác chuyền bóng một tay trên vai thường được sử dụng hiệu quả nhất khi nào?",
        options: [
          "Chuyền cự li cực ngắn 30 cm",
          "Chuyền cự li trung bình và xa, phát động phản công nhanh sang sân đối phương",
          "Khi đang bị đối phương ôm chặt lấy bóng",
          "Chỉ dùng khi chuẩn bị ném phạt"
        ],
        answer: 1,
        correct: 1,
        explain: "Chuyền một tay trên vai tận dụng lực xoay thân và cổ tay tạo đường chuyền dài nhanh, chuẩn xác."
      },
      {
        question: "Theo luật bóng rổ, tình huống nào xác định bóng đã ra ngoài biên?",
        q: "Theo luật bóng rổ, tình huống nào xác định bóng đã ra ngoài biên?",
        options: [
          "Bóng chạm vào người hoặc sàn nằm ngoài đường biên giới hạn của sân",
          "Bóng bay trên không phía trên đường biên nhưng chưa chạm sàn",
          "Cầu thủ đứng trong sân với tay chạm bóng trên không",
          "Bóng nảy vào bảng rổ bật lại trong sân"
        ],
        answer: 0,
        correct: 0,
        explain: "Bóng chạm vào người, vật ngoài sân hoặc chạm mặt sàn ngoài đường biên thì tính là bóng ngoài biên."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { partsData, topicsData };
}
