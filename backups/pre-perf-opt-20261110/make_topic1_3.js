// Lessons 1 to 6: Topic 1 (AI), Topic 2 (Computer Networks), Topic 3 (Digital Ethics)
module.exports = [
  // ================= BÀI 1 =================
  {
    num: 1,
    topicNum: 1,
    title: "Bài 1: Làm quen với Trí tuệ nhân tạo",
    badgeColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    dotColor: "bg-blue-500",
    time: "45 phút",
    target: "Hiểu được khái niệm cơ bản về Trí tuệ nhân tạo (AI); Nắm vững lịch sử phát triển và phép thử Turing; Nhận biết 4 đặc trưng cốt lõi của AI; Phân biệt được AI hẹp (Narrow AI) và AI tổng quát (AGI).",
    intro: "Mỗi ngày chúng ta đều tiếp xúc với các tính năng nhận diện khuôn mặt mở khóa điện thoại, trợ lý ảo Siri hay gợi ý video trên TikTok. Liệu các hệ thống này có thực sự 'thông minh' như con người?",
    sections: [
      {
        title: "1. Khái niệm và Lịch sử hình thành Trí tuệ nhân tạo",
        content: `
          <p class="mb-3">
            <strong>Trí tuệ nhân tạo (Artificial Intelligence - AI):</strong> Là một ngành khoa học và kỹ thuật thuộc lĩnh vực Khoa học máy tính, nghiên cứu việc xây dựng các máy móc và hệ thống có khả năng mô phỏng các quá trình trí tuệ của con người như: học tập, suy luận logic, nhận thức và tự hoàn thiện.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-4 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-user-graduate"></i> Phép thử Turing (Turing Test - 1950)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Nhà toán học người Anh Alan Turing đề xuất phép thử: Một người thẩm định giấu mặt đặt câu hỏi văn bản cho cả con người và máy tính. Nếu người thẩm định không thể phân biệt được câu trả lời nào là của máy và câu nào là của người, máy tính đó được coi là có trí tuệ.
              </p>
            </div>
            <div class="p-4 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h5 class="font-bold text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm uppercase mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-flag-checkered"></i> Hội thảo Dartmouth (1956)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Thuật ngữ "Artificial Intelligence" chính thức được nhà khoa học máy tính John McCarthy đưa ra tại Hội thảo Dartmouth (Mỹ) năm 1956, đánh dấu sự ra đời chính thức của ngành nghiên cứu AI trên toàn cầu.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Bốn đặc trưng cốt lõi của Trí tuệ nhân tạo",
        content: `
          <p class="mb-3">Hệ thống AI hiện đại thể hiện trí thông minh qua 4 năng lực đặc trưng sau:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <div class="font-bold text-blue-600 dark:text-blue-400 text-xs sm:text-sm flex items-center gap-2 mb-1">
                <i class="fa-solid fa-brain"></i> 1. Khả năng học (Learning)
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-300">
                Tự động rút ra tri thức, quy luật từ dữ liệu lớn (Big Data) mà không cần con người lập trình cứng từng bước (Machine Learning, Deep Learning).
              </p>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <div class="font-bold text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-center gap-2 mb-1">
                <i class="fa-solid fa-diagram-project"></i> 2. Khả năng suy luận (Reasoning)
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-300">
                Áp dụng các quy tắc logic và tri thức đã học để rút ra kết luận mới, lập kế hoạch hành động hoặc đưa ra phán đoán chính xác.
              </p>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <div class="font-bold text-amber-600 dark:text-amber-400 text-xs sm:text-sm flex items-center gap-2 mb-1">
                <i class="fa-solid fa-eye"></i> 3. Khả năng nhận thức (Perception)
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-300">
                Thu thập và diễn giải tín hiệu từ thế giới thực qua cảm biến, camera, microphone (thị giác máy tính, nhận dạng giọng nói).
              </p>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <div class="font-bold text-purple-600 dark:text-purple-400 text-xs sm:text-sm flex items-center gap-2 mb-1">
                <i class="fa-solid fa-gears"></i> 4. Giải quyết vấn đề (Problem Solving)
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-300">
                Tìm kiếm đường đi tối ưu, nước cờ chiến thắng trong không gian trạng thái phức tạp (ví dụ: cờ vua Stockfish, AlphaGo).
              </p>
            </div>
          </div>
        `
      },
      {
        title: "3. Phân loại Trí tuệ nhân tạo",
        content: `
          <div class="overflow-x-auto my-3">
            <table class="min-w-full text-xs text-left border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 uppercase font-semibold">
                <tr>
                  <th class="p-2.5 border-b border-gray-200 dark:border-gray-700">Loại AI</th>
                  <th class="p-2.5 border-b border-gray-200 dark:border-gray-700">Đặc điểm cốt lõi</th>
                  <th class="p-2.5 border-b border-gray-200 dark:border-gray-700">Ví dụ tiêu biểu</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700 text-gray-600 dark:text-gray-300">
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/40">
                  <td class="p-2.5 font-bold text-blue-600 dark:text-blue-400">AI hẹp (Narrow AI / Weak AI)</td>
                  <td class="p-2.5">Chuyên giải quyết một nhiệm vụ cụ thể xuất sắc, không thể tự chuyển đổi tri thức sang nhiệm vụ khác ngoài phạm vi huấn luyện.</td>
                  <td class="p-2.5">Siri, Google Dịch, FaceID, phần mềm chơi cờ AlphaGo. (Toàn bộ AI hiện nay đều thuộc loại này)</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/40">
                  <td class="p-2.5 font-bold text-indigo-600 dark:text-indigo-400">AI tổng quát (General AI / AGI)</td>
                  <td class="p-2.5">Có trí tuệ ngang tầm con người, khả năng tự học hỏi, thích ứng linh hoạt và giải quyết mọi tác vụ trí óc.</td>
                  <td class="p-2.5">Đang trong giai đoạn nghiên cứu lý thuyết, chưa xuất hiện trên thực tế.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practice: [
      "Trải nghiệm trò chơi nhận diện hình vẽ Quick, Draw! của Google và phân tích cách mạng nơ-ron AI nhận diện nét vẽ.",
      "Đặt 3 câu hỏi logic bằng tiếng Việt cho trợ lý AI (ChatGPT / Gemini) và đánh giá độ chính xác của câu trả lời.",
      "Thảo luận nhóm: Phân tích vì sao nhận diện khuôn mặt FaceID trên điện thoại lại thuộc nhóm AI hẹp (Narrow AI)."
    ],
    summary: "Trí tuệ nhân tạo (AI) là ngành khoa học máy tính mô phỏng trí tuệ con người. AI có 4 đặc trưng cốt lõi: Khả năng học, Suy luận, Nhận thức và Giải quyết vấn đề. Toàn bộ các hệ thống AI ứng dụng ngày nay đều thuộc nhóm AI hẹp (Narrow AI).",
    quizzes: [
      {
        q: "Thuật ngữ 'Trí tuệ nhân tạo' (Artificial Intelligence) chính thức được đưa ra tại hội thảo nào và vào năm nào?",
        options: ["Hội thảo Dartmouth năm 1956", "Hội thảo Turing năm 1950", "Hội thảo Cambridge năm 1960", "Hội thảo Silicon năm 1975"],
        correctIndex: 0,
        explain: "John McCarthy chính thức đề xuất thuật ngữ 'Artificial Intelligence' tại Hội thảo Dartmouth (Mỹ) vào năm 1956."
      },
      {
        q: "Phép thử Turing (Turing Test) được đề xuất nhằm mục đích gì?",
        options: ["Đo tốc độ xử lý của vi xử lý CPU", "Xác định xem máy tính có trí thông minh tương đương con người hay không", "Kiểm tra độ bảo mật của mạng Internet", "Đánh giá dung lượng bộ nhớ RAM"],
        correctIndex: 1,
        explain: "Phép thử Turing đánh giá khả năng mô phỏng hành vi trí tuệ của máy tính thông qua trò chơi giao tiếp văn bản giấu mặt."
      },
      {
        q: "Hệ thống AI hiện nay như ChatGPT, phần mềm cờ vua Stockfish thuộc loại AI nào?",
        options: ["AI tổng quát (AGI)", "Siêu trí tuệ nhân tạo (Super AI)", "AI hẹp (Narrow AI)", "AI cảm xúc"],
        correctIndex: 2,
        explain: "Toàn bộ các ứng dụng AI hiện nay đều là AI hẹp (Narrow AI), chỉ tập trung thực hiện xuất sắc một tác vụ cụ thể đã được huấn luyện."
      },
      {
        q: "Đặc trưng nào của AI giúp hệ thống tự động trích xuất tri thức và tiến bộ hơn qua dữ liệu mà không cần lập trình lại từng câu lệnh?",
        options: ["Khả năng lưu trữ", "Khả năng học (Learning)", "Khả năng in ấn", "Khả năng làm mát phần cứng"],
        correctIndex: 1,
        explain: "Khả năng học (Machine Learning) cho phép AI phân tích tập dữ liệu lớn và tự cải thiện hiệu suất giải quyết vấn đề."
      }
    ]
  },

  // ================= BÀI 2 =================
  {
    num: 2,
    topicNum: 1,
    title: "Bài 2: Trí tuệ nhân tạo trong khoa học và đời sống",
    badgeColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    dotColor: "bg-blue-500",
    time: "45 phút",
    target: "Trình bày được các lĩnh vực ứng dụng tiêu biểu của AI trong đời sống và nghiên cứu khoa học; Nhận thức được các nguy cơ, thách thức về đạo đức, an toàn thông tin và quyền riêng tư do AI mang lại.",
    intro: "Từ chẩn đoán khối u trong y tế đến xe tự hành điều hướng trên phố đông, AI đang thay đổi thế giới như thế nào và con người cần chuẩn bị gì trước làn sóng công nghệ này?",
    sections: [
      {
        title: "1. Các lĩnh vực ứng dụng đột phá của AI",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-comments"></i> Xử lý ngôn ngữ tự nhiên (NLP)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Giúp máy tính hiểu, dịch thuật và sinh văn bản tự nhiên như con người. Tiêu biểu: mô hình ngôn ngữ lớn (LLM) ChatGPT, Claude, Google Translate, trợ lý ảo giọng nói Siri/Google Assistant.
              </p>
            </div>
            <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h5 class="font-bold text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-camera"></i> Thị giác máy tính (Computer Vision)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Phân tích hình ảnh, video để nhận diện đối tượng, khuôn mặt, biển số xe; chẩn đoán phim X-quang, MRI trong y tế với độ chính xác ngang chuyên gia y khoa.
              </p>
            </div>
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h5 class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-car"></i> Phương tiện tự hành & Robot thông minh
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Xe tự lái (Tesla, Waymo) xử lý dữ liệu từ camera và radar thời gian thực để tự bẻ lái, phanh an toàn. Robot công nghiệp thông minh tự động hóa chuỗi cung ứng logistics.
              </p>
            </div>
            <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <h5 class="font-bold text-amber-700 dark:text-amber-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-flask"></i> Nghiên cứu khoa học & Dự báo
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Hệ thống AlphaFold của DeepMind giải mã cấu trúc 3D của hơn 200 triệu protein, thúc đẩy chế tạo thuốc chữa bệnh hiểm nghèo và dự báo thời tiết siêu máy tính.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Cảnh báo mặt trái và vấn đề đạo đức của AI",
        content: `
          <div class="p-4 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/50 space-y-2">
            <h5 class="font-bold text-rose-700 dark:text-rose-300 text-xs sm:text-sm flex items-center gap-1.5">
              <i class="fa-solid fa-triangle-exclamation"></i> Những thách thức nghiêm trọng cần kiểm soát
            </h5>
            <ul class="list-disc pl-5 text-xs text-gray-700 dark:text-gray-300 space-y-1.5">
              <li><strong>Thông tin sai lệch & Deepfake:</strong> Video, giọng nói giả mạo tinh vi dùng để lừa đảo tài chính hoặc phá hoại danh dự cá nhân.</li>
              <li><strong>Xâm phạm quyền riêng tư:</strong> Thu thập dữ liệu cá nhân khổng lồ không qua xin phép để huấn luyện các mô hình AI.</li>
              <li><strong>Định kiến dữ liệu (Bias):</strong> Nếu dữ liệu đầu vào chứa sự thiên vị chủng tộc, giới tính, mô hình AI sẽ đưa ra các phán đoán phân biệt đối xử.</li>
              <li><strong>Tác động đến việc làm:</strong> Nguy cơ tự động hóa làm thay đổi thị trường lao động, đe dọa các công việc văn phòng lặp đi lặp lại.</li>
            </ul>
          </div>
        `
      }
    ],
    practice: [
      "Tìm hiểu và trình bày trước lớp về ứng dụng giải mã cấu trúc protein của hệ thống AlphaFold trong y học.",
      "Tìm kiếm một video phân tích công nghệ Deepfake và thảo luận 3 dấu hiệu nhận biết video giả mạo.",
      "Viết đoạn văn ngắn (100 từ) nêu quan điểm về trách nhiệm của học sinh khi sử dụng AI hỗ trợ học tập."
    ],
    summary: "AI đang ứng dụng mạnh mẽ trong Xử lý ngôn ngữ tự nhiên, Thị giác máy tính, Xe tự hành và Khoa học sức khỏe. Đi kèm cơ hội là các nguy cơ: lừa đảo Deepfake, định kiến dữ liệu, mất quyền riêng tư và xáo trộn thị trường việc làm.",
    quizzes: [
      {
        q: "Lĩnh vực nào của AI chuyên nghiên cứu khả năng hiểu, phân tích và sinh ra tiếng nói, chữ viết của con người?",
        options: ["Thị giác máy tính (Computer Vision)", "Xử lý ngôn ngữ tự nhiên (NLP)", "Robot học", "Mạng nơ-ron tích chập"],
        correctIndex: 1,
        explain: "NLP (Natural Language Processing) là nhánh của AI giúp máy tính tương tác bằng ngôn ngữ tự nhiên của con người."
      },
      {
        q: "Hệ thống AI AlphaFold của Google DeepMind đã đạt được thành tựu đột phá nào trong y sinh học?",
        options: ["Chế tạo chip bán dẫn 2nm", "Dự đoán cấu trúc 3D của gần như toàn bộ các protein đã biết", "Lập kỷ lục tốc độ xe tự hành", "Dịch thuật hơn 500 ngôn ngữ cổ đại"],
        correctIndex: 1,
        explain: "AlphaFold giải quyết bài toán gấp cuộn protein kéo dài 50 năm, dự đoán chính xác cấu trúc không gian 3D của hàng trăm triệu protein."
      },
      {
        q: "Công nghệ Deepfake tạo ra hình ảnh, video và giọng nói giả mạo chân thực tiềm ẩn nguy cơ lớn nhất nào?",
        options: ["Làm tăng nhiệt độ CPU", "Lừa đảo chiếm đoạt tài sản và phát tán tin giả vu khống", "Hỏng thẻ nhớ máy quay", "Mất kết nối Wi-Fi"],
        correctIndex: 1,
        explain: "Deepfake bị kẻ xấu lợi dụng để tạo video mạo danh người thân mượn tiền hoặc phát tán thông tin sai lệch gây bất ổn xã hội."
      },
      {
        q: "Khi dữ liệu huấn luyện AI bị thiên lệch (thiếu khách quan), hệ thống AI sẽ dẫn đến hiện tượng gì?",
        options: ["AI bị nhiễm virus", "Kết quả phán đoán có định kiến và phân biệt đối xử (AI Bias)", "Tốc độ mạng bị giảm 50%", "Màn hình máy tính bị chớp nháy"],
        correctIndex: 1,
        explain: "AI Bias (định kiến thuật toán) xảy ra khi dữ liệu đầu vào chứa các thiên vị lịch sử, khiến kết quả đầu ra của AI mất tính công bằng."
      }
    ]
  },

  // ================= BÀI 3 =================
  {
    num: 3,
    topicNum: 2,
    title: "Bài 3: Một số thiết bị mạng thông dụng",
    badgeColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300",
    dotColor: "bg-cyan-500",
    time: "45 phút",
    target: "Nhận biết và phân biệt được chức năng của các thiết bị mạng cốt lõi: Switch, Router, Access Point (AP), Modem; Phân biệt môi trường truyền dẫn có dây (cáp xoắn, cáp quang) và không dây.",
    intro: "Khi đến trường học hay văn phòng, làm sao hàng trăm thiết bị máy tính, điện thoại có thể cùng kết nối và truyền dữ liệu cho nhau với tốc độ cao?",
    sections: [
      {
        title: "1. Các thiết bị kết nối mạng cục bộ (LAN) và Internet",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-cyan-50 dark:bg-cyan-950/40 rounded-xl border border-cyan-200 dark:border-cyan-800">
              <h5 class="font-bold text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-arrows-split-up-and-left"></i> Bộ chuyển mạch (Switch)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Kết nối các máy tính trong cùng một mạng LAN có dây. Switch hoạt động ở tầng Liên kết dữ liệu (Data Link), lưu giữ <strong>bảng địa chỉ MAC</strong> để chuyển tiếp khung dữ liệu chính xác đến cổng đích, tránh xung đột đường truyền.
              </p>
            </div>
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-route"></i> Bộ định tuyến (Router)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Kết nối hai hay nhiều mạng khác nhau (như mạng LAN gia đình với mạng Internet toàn cầu). Router hoạt động ở tầng Mạng (Network), đọc <strong>địa chỉ IP</strong> đích để tìm đường truyền tối ưu nhất cho gói tin.
              </p>
            </div>
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h5 class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-wifi"></i> Điểm truy cập không dây (Access Point - AP)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Chuyển đổi tín hiệu mạng có dây từ Switch thành sóng vô tuyến điện từ (Wi-Fi) để các thiết bị di động (laptop, smartphone, máy tính bảng) kết nối vào mạng LAN nội bộ.
              </p>
            </div>
            <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
              <h5 class="font-bold text-purple-700 dark:text-purple-300 text-xs sm:text-sm uppercase mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-satellite-dish"></i> Modem (Modulator - Demodulator)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Thực hiện chuyển đổi qua lại giữa tín hiệu tương tự (Analog từ đường cáp quang, cáp đồng trục của nhà mạng ISP) và tín hiệu số (Digital) mà máy tính hiểu được. Thiết bị gia đình hiện nay thường tích hợp Modem + Router + Wi-Fi trong 1 hộp thiết bị.
              </p>
            </div>
          </div>
        `
      },
      {
        title: "2. Môi trường truyền dẫn mạng thông dụng",
        content: `
          <div class="overflow-x-auto my-3">
            <table class="min-w-full text-xs text-left border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 uppercase font-semibold">
                <tr>
                  <th class="p-2.5 border-b border-gray-200 dark:border-gray-700">Môi trường truyền dẫn</th>
                  <th class="p-2.5 border-b border-gray-200 dark:border-gray-700">Đặc điểm kỹ thuật</th>
                  <th class="p-2.5 border-b border-gray-200 dark:border-gray-700">Ứng dụng tiêu biểu</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700 text-gray-600 dark:text-gray-300">
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/40">
                  <td class="p-2.5 font-bold text-cyan-600 dark:text-cyan-400">Cáp mạng xoắn đôi (Twisted Pair - UTP/STP)</td>
                  <td class="p-2.5">Gồm 8 sợi dây đồng xoắn từng đôi một để giảm nhiễu, bấm đầu chuẩn RJ45. Khoảng cách tối đa 100m, tốc độ chuẩn Cat5e (1 Gbps), Cat6 (10 Gbps).</td>
                  <td class="p-2.5">Nối từ Switch tới PC trong phòng máy trường học, văn phòng.</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/40">
                  <td class="p-2.5 font-bold text-indigo-600 dark:text-indigo-400">Cáp quang (Fiber Optic)</td>
                  <td class="p-2.5">Lõi bằng sợi thủy tinh siêu mỏng, truyền dữ liệu bằng xung ánh sáng theo nguyên lý phản xạ toàn phần. Băng thông cực lớn, không bị nhiễu điện từ, khoảng cách truyền hàng chục km.</td>
                  <td class="p-2.5">Đường truyền Internet nhà mạng ISP, trục chính liên tỉnh, cáp quang biển quốc tế.</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/40">
                  <td class="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">Sóng không dây (Wi-Fi, 4G/5G)</td>
                  <td class="p-2.5">Sóng điện từ tần số 2.4 GHz, 5 GHz hoặc 6 GHz. Tiện lợi, linh hoạt, nhưng dễ bị suy giảm tín hiệu khi gặp vật cản (tường dày) và nhiễu sóng.</td>
                  <td class="p-2.5">Mạng không dây gia đình, quán cà phê, mạng di động công cộng.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practice: [
      "Quan sát hệ thống mạng phòng thực hành Tin học của trường và vẽ lại sơ đồ kết nối giữa Router, Switch và các máy con.",
      "Quan sát một đoạn dây cáp mạng chuẩn RJ45 và đọc tên chuẩn in trên vỏ dây (Cat5e hoặc Cat6).",
      "Phân tích sự khác biệt giữa thiết bị Modem và Router trong việc kết nối Internet tại hộ gia đình."
    ],
    summary: "Switch dùng để kết nối các máy trong cùng mạng LAN dựa vào địa chỉ MAC. Router định tuyến gói tin giữa các mạng khác nhau dựa vào địa chỉ IP. Access Point phát sóng Wi-Fi. Cáp xoắn đôi Cat5e/Cat6 dùng cho cự ly ngắn dưới 100m, cáp quang dùng cho đường truyền băng thông lớn cự ly xa.",
    quizzes: [
      {
        q: "Thiết bị nào có chức năng chuyển tiếp dữ liệu giữa các máy tính trong cùng một mạng LAN dựa trên bảng địa chỉ MAC?",
        options: ["Bộ lặp (Repeater)", "Bộ chuyển mạch (Switch)", "Bộ định tuyến (Router)", "Modem"],
        correctIndex: 1,
        explain: "Switch quản lý bảng địa chỉ MAC để gửi trực tiếp khung dữ liệu đến đúng cổng của máy tính nhận."
      },
      {
        q: "Thiết bị mạng nào đóng vai trò kết nối mạng LAN nội bộ với mạng Internet toàn cầu bằng cách phân tích địa chỉ IP?",
        options: ["Switch", "Access Point", "Bộ định tuyến (Router)", "Hub"],
        correctIndex: 2,
        explain: "Router định tuyến các gói tin giữa các mạng độc lập với nhau dựa trên địa chỉ IP đích."
      },
      {
        q: "Khoảng cách truyền dữ liệu tối đa đảm bảo tín hiệu ổn định của cáp xoắn đôi đồng chuẩn Cat5e/Cat6 là bao nhiêu?",
        options: ["10 mét", "100 mét", "1000 mét", "Không giới hạn"],
        correctIndex: 1,
        explain: "Theo tiêu chuẩn mạng Ethernet IEEE 802.3, chiều dài tối đa của đoạn cáp xoắn đôi UTP/STP là 100 mét."
      },
      {
        q: "Ưu điểm vượt trội nhất của cáp quang (Fiber Optic) so với cáp xoắn đôi bằng đồng là gì?",
        options: ["Dễ uốn gập và rẻ hơn dây đồng", "Truyền bằng xung ánh sáng nên tốc độ cực cao, cự ly xa và không bị nhiễu điện từ", "Dùng được mà không cần bấm đầu cáp", "Cung cấp nguồn điện trực tiếp cho máy tính"],
        correctIndex: 1,
        explain: "Cáp quang truyền dữ liệu bằng xung ánh sáng qua sợi thủy tinh, đạt băng thông hàng chục Gbps và miễn nhiễm với nhiễu sóng điện từ."
      }
    ]
  },

  // ================= BÀI 4 =================
  {
    num: 4,
    topicNum: 2,
    title: "Bài 4: Giao thức mạng và địa chỉ IP",
    badgeColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300",
    dotColor: "bg-cyan-500",
    time: "45 phút",
    target: "Hiểu được vai trò của bộ giao thức TCP/IP; Nắm vững cấu trúc địa chỉ IPv4, Subnet mask, Default Gateway, DNS; Phân biệt được địa chỉ IP tĩnh và IP động (DHCP); Sử dụng được lệnh `ipconfig` và `ping` trên dòng lệnh cmd.",
    intro: "Mỗi ngôi nhà đều cần một số nhà để nhận bưu phẩm, vậy trên mạng Internet, làm sao gói tin biết được máy tính nào đang gửi yêu cầu và gửi dữ liệu về đâu?",
    sections: [
      {
        title: "1. Bộ giao thức truyền thông TCP/IP",
        content: `
          <p class="mb-3">
            <strong>Giao thức mạng (Network Protocol):</strong> Là tập hợp các quy tắc chuẩn hóa quy định định dạng dữ liệu, phương thức truyền, kiểm tra lỗi và đồng bộ hóa truyền thông giữa các thiết bị. Bộ giao thức thống trị mạng toàn cầu là <strong>TCP/IP</strong> gồm 4 tầng:
          </p>
          <div class="space-y-2 my-3">
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-3">
              <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold text-xs">Tầng 4</span>
              <div>
                <strong class="text-xs sm:text-sm text-gray-900 dark:text-white">Tầng Ứng dụng (Application):</strong>
                <span class="text-xs text-gray-600 dark:text-gray-300"> Giao tiếp trực tiếp với phần mềm người dùng. Tiêu biểu: HTTP/HTTPS (truy cập web), FTP (truyền tệp), SMTP/POP3 (email), DNS (phân giải tên miền).</span>
              </div>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-3">
              <span class="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold text-xs">Tầng 3</span>
              <div>
                <strong class="text-xs sm:text-sm text-gray-900 dark:text-white">Tầng Giao vận (Transport):</strong>
                <span class="text-xs text-gray-600 dark:text-gray-300"> Kiểm soát truyền dữ liệu đầu cuối. <strong>TCP</strong> (tin cậy, có xác nhận bắt tay 3 bước) và <strong>UDP</strong> (tốc độ cao, chấp nhận mất gói nhẹ như livestream, voice call).</span>
              </div>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-3">
              <span class="px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 font-bold text-xs">Tầng 2</span>
              <div>
                <strong class="text-xs sm:text-sm text-gray-900 dark:text-white">Tầng Mạng (Internet / Network):</strong>
                <span class="text-xs text-gray-600 dark:text-gray-300"> Chịu trách nhiệm đánh địa chỉ logic (IP) và tìm đường đi (Routing) cho gói tin qua giao thức IP (IPv4, IPv6).</span>
              </div>
            </div>
            <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-3">
              <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-bold text-xs">Tầng 1</span>
              <div>
                <strong class="text-xs sm:text-sm text-gray-900 dark:text-white">Tầng Giao tiếp mạng (Network Interface):</strong>
                <span class="text-xs text-gray-600 dark:text-gray-300"> Điều khiển phần cứng card mạng NIC, đóng gói khung Frame kèm địa chỉ MAC và truyền tín hiệu vật lý qua dây hoặc sóng vô tuyến.</span>
              </div>
            </div>
          </div>
        `
      },
      {
        title: "2. Cấu trúc địa chỉ IP và các thông số mạng cốt lõi",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-network-wired"></i> Địa chỉ IPv4
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Độ dài <strong>32 bit</strong>, chia thành 4 octet (mỗi octet 8 bit có giá trị từ 0 đến 255) cách nhau bởi dấu chấm. Ví dụ: <code>192.168.1.15</code>.<br>
                - Dải địa chỉ riêng (Private IP dùng trong LAN): <code>192.168.x.x</code>, <code>10.x.x.x</code>, <code>172.16.x.x</code>.
              </p>
            </div>
            <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h5 class="font-bold text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm uppercase mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-globe"></i> Địa chỉ IPv6
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Được phát triển nhằm giải quyết triệt để sự cạn kiệt của IPv4. Độ dài <strong>128 bit</strong>, biểu diễn bằng 8 nhóm số thập lục phân (Hexadecimal) cách nhau dấu hai chấm <code>:</code>. Ví dụ: <code>2001:0db8:85a3::8a2e:0370:7334</code>.
              </p>
            </div>
          </div>
          <div class="p-3.5 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 text-xs space-y-1.5">
            <div><strong>Subnet Mask (Mặt nạ mạng con):</strong> Xác định phần nào trong địa chỉ IP là định danh mạng (Network ID) và phần nào là định danh máy trạm (Host ID). Ví dụ phổ biến: <code>255.255.255.0</code>.</div>
            <div><strong>Default Gateway:</strong> Địa chỉ IP cổng thoát của Router trong mạng LAN để gửi các gói tin ra ngoài Internet. Thường là <code>192.168.1.1</code>.</div>
            <div><strong>DNS Server (Hệ thống phân giải tên miền):</strong> "Danh bạ Internet" biên dịch tên miền dễ nhớ (như <code>google.com</code>) thành địa chỉ IP máy chủ (như <code>142.250.190.46</code>). DNS thông dụng: Google <code>8.8.8.8</code>, Cloudflare <code>1.1.1.1</code>.</div>
          </div>
        `
      },
      {
        title: "3. Các lệnh kiểm tra cấu hình mạng trên Windows",
        content: `
          <div class="space-y-3 my-3">
            <div class="bg-gray-900 text-gray-100 p-3.5 rounded-xl font-mono text-xs">
              <div class="text-emerald-400 font-bold mb-1"># 1. Xem toàn bộ thông số mạng (IP, Subnet, Gateway, MAC):</div>
              <p class="text-white">C:\> ipconfig /all</p>
              <div class="text-emerald-400 font-bold mt-3 mb-1"># 2. Kiểm tra độ trễ và mất gói tin tới máy chủ khác:</div>
              <p class="text-white">C:\> ping 8.8.8.8</p>
              <p class="text-white">C:\> ping google.com</p>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Mở cửa sổ Command Prompt (cmd) trên Windows, chạy lệnh `ipconfig` và ghi chép lại địa chỉ IPv4, Subnet Mask và Default Gateway của máy tính.",
      "Thực hiện lệnh `ping 8.8.8.8` và đọc các thông số kết quả: thời gian phản hồi (Time/ms), số gói gửi/nhận và tỉ lệ mất gói (Loss).",
      "Thử ngắt kết nối dây mạng và chạy lại lệnh `ping`, quan sát thông báo lỗi Request timed out hoặc Destination host unreachable."
    ],
    summary: "TCP/IP là bộ giao thức nền tảng của Internet. Địa chỉ IPv4 gồm 32 bit, chia 4 octet. Default Gateway là cổng ra ngoài của Router. DNS giúp chuyển đổi tên miền sang địa chỉ IP. Lệnh ipconfig dùng xem thông số mạng, lệnh ping dùng kiểm tra kết nối thông mạng.",
    quizzes: [
      {
        q: "Địa chỉ IPv4 có độ dài bao nhiêu bit và được chia thành bao nhiêu octet (nhóm số thập phân)?",
        options: ["16 bit chia 2 octet", "32 bit chia 4 octet", "64 bit chia 8 octet", "128 bit chia 16 octet"],
        correctIndex: 1,
        explain: "Địa chỉ IPv4 gồm đúng 32 bit nhị phân, biểu diễn bằng 4 octet thập phân từ 0 đến 255 ngăn cách nhau bởi dấu chấm."
      },
      {
        q: "Dịch vụ mạng nào có chức năng chuyển đổi tên miền dễ nhớ (ví dụ: dantri.com.vn) thành địa chỉ IP dạng số của máy chủ?",
        options: ["DHCP", "DNS (Domain Name System)", "FTP", "HTTP"],
        correctIndex: 1,
        explain: "DNS (Domain Name System) hoạt động như danh bạ điện thoại của Internet, chuyển tên miền sang địa chỉ IP để trình duyệt kết nối."
      },
      {
        q: "Địa chỉ nào sau đây thuộc dải địa chỉ IP riêng (Private IP) chuyên dùng trong mạng nội bộ gia đình và trường học?",
        options: ["8.8.8.8", "192.168.1.10", "1.1.1.1", "142.250.71.46"],
        correctIndex: 1,
        explain: "Dải 192.168.0.0 đến 192.168.255.255 là dải Private IP chuẩn Class C được bảo lưu riêng cho các mạng LAN nội bộ."
      },
      {
        q: "Lệnh nào trên cửa sổ Command Prompt (cmd) của Windows được dùng để gửi các gói tin ICMP nhằm kiểm tra kết nối thông suốt giữa hai thiết bị?",
        options: ["dir", "ping", "format", "exit"],
        correctIndex: 1,
        explain: "Lệnh 'ping' gửi các gói tin Echo Request đến địa chỉ đích và đo thời gian nhận phản hồi để xác định kết nối mạng còn hoạt động hay không."
      }
    ]
  },

  // ================= BÀI 5 =================
  {
    num: 5,
    topicNum: 2,
    title: "Bài 5: Thực hành chia sẻ tài nguyên mạng",
    badgeColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300",
    dotColor: "bg-cyan-500",
    time: "45 phút",
    target: "Thực hiện thành thạo các bước bật tính năng chia sẻ mạng trên Windows; Thiết lập chia sẻ thư mục và máy in trong mạng LAN; Cài đặt quyền truy cập an toàn (Read / Write); Khắc phục các lỗi chặn tường lửa phổ biến.",
    intro: "Trong phòng máy tính của lớp hoặc văn phòng, thay vì phải cắm USB qua từng máy để sao chép tài liệu, làm thế nào để chia sẻ ngay một thư mục dùng chung qua mạng LAN?",
    sections: [
      {
        title: "1. Bật tính năng dò tìm mạng và chia sẻ trên Windows",
        content: `
          <div class="p-3.5 bg-cyan-50 dark:bg-cyan-950/40 rounded-xl border border-cyan-200 dark:border-cyan-800 space-y-2">
            <h5 class="font-bold text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm flex items-center gap-1.5">
              <i class="fa-solid fa-sliders"></i> Bước chuẩn bị trong Advanced sharing settings
            </h5>
            <ol class="list-decimal pl-5 text-xs text-gray-700 dark:text-gray-300 space-y-1">
              <li>Mở <strong>Settings</strong> &rarr; <strong>Network & Internet</strong> &rarr; <strong>Advanced network settings</strong> &rarr; <strong>Advanced sharing settings</strong> (hoặc qua Control Panel).</li>
              <li>Tại mục <strong>Private network</strong>: Chuyển <em>Network discovery</em> sang <strong>ON</strong> và bật <em>File and printer sharing</em> sang <strong>ON</strong>.</li>
              <li>Tại mục <strong>All networks</strong>: Tùy chọn tắt <em>Password protected sharing</em> nếu muốn các máy trong phòng thực hành truy cập trực tiếp không cần nhập mật khẩu tài khoản Windows.</li>
            </ol>
          </div>
        `
      },
      {
        title: "2. Quy trình chia sẻ thư mục và phân quyền truy cập",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-blue-600 dark:text-blue-400 text-xs sm:text-sm mb-1.5">
                <i class="fa-solid fa-folder-plus"></i> Các bước thiết lập chia sẻ
              </h5>
              <ol class="list-decimal pl-4 text-xs text-gray-600 dark:text-gray-300 space-y-1">
                <li>Nhấp chuột phải vào thư mục cần chia sẻ &rarr; Chọn <strong>Properties</strong>.</li>
                <li>Chọn thẻ <strong>Sharing</strong> &rarr; Bấm nút <strong>Advanced Sharing</strong>.</li>
                <li>Tích chọn <strong>Share this folder</strong> &rarr; Đặt tên chia sẻ (Share name).</li>
                <li>Nhấn nút <strong>Permissions</strong> để thiết lập quyền truy cập cho nhóm <em>Everyone</em>.</li>
              </ol>
            </div>
            <div class="p-3.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
              <h5 class="font-bold text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm mb-1.5">
                <i class="fa-solid fa-key"></i> Các mức phân quyền truy cập
              </h5>
              <ul class="list-disc pl-4 text-xs text-gray-600 dark:text-gray-300 space-y-1">
                <li><strong>Read (Chỉ đọc):</strong> Người dùng từ xa chỉ có thể xem và sao chép tệp về máy mình, không thể sửa đổi hoặc xóa tệp gốc.</li>
                <li><strong>Change (Thay đổi):</strong> Cho phép xem, sao chép, chỉnh sửa nội dung và xóa các tệp tin trong thư mục chia sẻ.</li>
                <li><strong>Full Control (Toàn quyền):</strong> Toàn quyền bao gồm cả việc thay đổi phân quyền bảo mật của thư mục.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "3. Truy cập thư mục chia sẻ từ máy tính khác",
        content: `
          <p class="mb-2">Trên máy tính khách trong cùng mạng LAN:</p>
          <div class="p-3 bg-gray-900 text-gray-100 rounded-xl font-mono text-xs space-y-1">
            <p>1. Nhấn tổ hợp phím <strong>Windows + R</strong> để mở hộp thoại Run.</p>
            <p>2. Nhập đường dẫn UNC: <code>\\\\&lt;Địa_chỉ_IP_máy_chủ&gt;</code> (Ví dụ: <code>\\\\192.168.1.15</code>)</p>
            <p>3. Hoặc mở File Explorer &rarr; Nhập <code>\\\\Tên-Máy-Chủ</code> trên thanh địa chỉ.</p>
          </div>
        `
      }
    ],
    practice: [
      "Tạo một thư mục mang tên 'TaiLieuLop12' trên ổ đĩa D của máy tính mình và cấu hình chia sẻ quyền Read cho mọi người trong phòng máy.",
      "Dùng máy tính bên cạnh, nhấn phím Windows + R và nhập địa chỉ IP của máy tính thứ nhất để truy cập thư mục 'TaiLieuLop12'.",
      "Thử tạo một tệp tin mới trong thư mục khi chỉ được cấp quyền Read để kiểm tra thông báo từ chối truy cập Access Denied."
    ],
    summary: "Chia sẻ tài nguyên trong mạng LAN giúp trao đổi tệp tin và dùng chung máy in nhanh chóng. Cần bật Network Discovery và File Sharing trong Settings, phân quyền hợp lý (Read để an toàn, Change khi cần làm việc nhóm) và truy cập qua đường dẫn UNC \\\\IP.",
    quizzes: [
      {
        q: "Để truy cập vào thư mục được chia sẻ của máy tính có IP là 192.168.1.50 qua hộp thoại Run (Windows + R), cú pháp đường dẫn UNC nào sau đây là đúng?",
        options: ["http://192.168.1.50", "\\\\192.168.1.50", "ftp://192.168.1.50", "ip:192.168.1.50"],
        correctIndex: 1,
        explain: "Hệ điều hành Windows sử dụng quy ước đặt tên đường dẫn mạng UNC (Universal Naming Convention) bắt đầu bằng hai dấu gạch chéo ngược \\\\."
      },
      {
        q: "Nếu muốn người dùng khác chỉ được xem và tải tài liệu về máy mà không thể xóa hay sửa đổi tệp trong thư mục chia sẻ, bạn cần gán quyền nào?",
        options: ["Full Control", "Read", "Write Only", "Change"],
        correctIndex: 1,
        explain: "Quyền Read (Chỉ đọc) ngăn chặn việc ghi đè, sửa đổi hoặc xóa bỏ các tệp tin trong thư mục chia sẻ."
      },
      {
        q: "Nếu máy tính khách báo lỗi không thể tìm thấy máy chủ chia sẻ dù cả hai đều cắm dây mạng, nguyên nhân phổ biến nhất là gì?",
        options: ["Máy chủ bị hỏng chuột", "Tính năng Network Discovery trên máy chủ đang bị tắt hoặc bị Tường lửa chặn", "Máy khách chưa cài Word", "Bàn phím bị kẹt phím Space"],
        correctIndex: 1,
        explain: "Tắt Network Discovery hoặc bị tường lửa Windows Defender Firewall chặn sẽ khiến các máy tính không thể 'nhìn thấy' nhau trong mạng LAN."
      },
      {
        q: "Lợi ích lớn nhất của việc chia sẻ máy in (Printer Sharing) trong văn phòng qua mạng LAN là gì?",
        options: ["Làm cho máy in in nhanh gấp 10 lần", "Nhiều máy tính có thể in ấn chung qua một máy in duy nhất mà không cần mua riêng cho từng người", "Máy in không bao giờ bị hết mực", "Không cần cắm nguồn điện cho máy in"],
        correctIndex: 1,
        explain: "Chia sẻ máy in giúp tiết kiệm chi phí đầu tư thiết bị phần cứng, cho phép toàn bộ nhân viên trong phòng dùng chung một máy in mạng."
      }
    ]
  },

  // ================= BÀI 6 =================
  {
    num: 6,
    topicNum: 3,
    title: "Bài 6: Giao tiếp và ứng xử trong môi trường số",
    badgeColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300",
    dotColor: "bg-purple-500",
    time: "45 phút",
    target: "Rèn luyện văn hóa giao tiếp và chuẩn mực đạo đức trên mạng (Netiquette); Nắm vững các điều khoản cốt lõi của Luật An ninh mạng Việt Nam; Nhận diện các hành vi lừa đảo trực tuyến (Phishing) và biết cách bảo vệ danh tính số cá nhân.",
    intro: "Không gian mạng là thế giới ảo nhưng mọi hành vi, lời nói và chia sẻ đều để lại 'dấu chân số' (digital footprint) gắn liền với trách nhiệm pháp lý thực sự của mỗi công dân.",
    sections: [
      {
        title: "1. Văn hóa giao tiếp trên mạng (Netiquette)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="p-3.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
              <h5 class="font-bold text-purple-700 dark:text-purple-300 text-xs sm:text-sm uppercase mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-heart"></i> Nguyên tắc ứng xử văn minh
              </h5>
              <ul class="list-disc pl-4 text-xs text-gray-600 dark:text-gray-300 space-y-1">
                <li>Tôn trọng người khác: Luôn nhớ phía sau màn hình là một con người bằng xương bằng thịt có cảm xúc và nhân phẩm.</li>
                <li>Tránh viết hoa toàn bộ (CAPS LOCK) vì trong văn hóa mạng, hành động này bị coi là đang la hét, quát tháo thô lỗ.</li>
                <li>Không tham gia hoặc cổ vũ các hành vi bạo lực mạng (Cyberbullying), xúc phạm danh dự hay tung tin đồn vô căn cứ.</li>
              </ul>
            </div>
            <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <h5 class="font-bold text-blue-700 dark:text-blue-300 text-xs sm:text-sm uppercase mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-copyright"></i> Tôn trọng bản quyền số
              </h5>
              <ul class="list-disc pl-4 text-xs text-gray-600 dark:text-gray-300 space-y-1">
                <li>Luôn ghi rõ nguồn tác giả khi trích dẫn bài viết, tranh ảnh, video hoặc mã nguồn học tập.</li>
                <li>Không sử dụng, bẻ khóa (crack) phần mềm có bản quyền trái phép; ưu tiên phần mềm mã nguồn mở có giấy phép phù hợp (GPL, MIT).</li>
                <li>Tuân thủ Luật Sở hữu trí tuệ về tác phẩm số.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. Nhận diện các hình thức tấn công lừa đảo và bảo vệ danh tính số",
        content: `
          <div class="space-y-3 my-3">
            <div class="p-3.5 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/50">
              <h5 class="font-bold text-rose-700 dark:text-rose-300 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-fish-fins"></i> Lừa đảo mạo danh (Phishing)
              </h5>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Kẻ gian gửi tin nhắn hoặc email giả mạo ngân hàng, trường học, mạng xã hội kèm đường link giả (ví dụ: <code>faceb00k-login.com</code>) để dụ nạn nhân nhập tài khoản, mật khẩu hoặc mã OTP ngân hàng.
              </p>
            </div>
            <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h5 class="font-bold text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-shield-halved"></i> Các biện pháp tự bảo vệ danh tính số
              </h5>
              <ul class="list-disc pl-4 text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>Mật khẩu mạnh:</strong> Tối thiểu 12 ký tự gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt (ví dụ: <code>Kntt@12#TinHoc</code>).</li>
                <li><strong>Xác thực hai yếu tố (2FA / MFA):</strong> Bật xác thực qua ứng dụng tạo mã OTP (Google Authenticator) để bảo vệ tài khoản ngay cả khi lộ mật khẩu.</li>
                <li><strong>Cẩn trọng với thông tin cá nhân:</strong> Không đăng tải CCCD, vé máy bay có mã QR, địa chỉ nhà riêng lên mạng xã hội.</li>
              </ul>
            </div>
          </div>
        `
      }
    ],
    practice: [
      "Kiểm tra mức độ an toàn mật khẩu hiện tại của em trên các công cụ kiểm tra độ mạnh mật khẩu và đổi sang mật khẩu mạnh hơn.",
      "Kích hoạt tính năng xác thực hai yếu tố (2FA) cho tài khoản Google hoặc tài khoản mạng xã hội của em.",
      "Đóng vai xử lý tình huống: Nhận được tin nhắn từ tài khoản Facebook của bạn thân nhờ chuyển tiền gấp, em sẽ thực hiện các bước xác minh nào trước khi đưa ra quyết định?"
    ],
    summary: "Ứng xử trên không gian số đòi hỏi văn hóa Netiquette, tôn trọng bản quyền số và tuân thủ Luật An ninh mạng. Cần luôn cảnh giác trước các thủ đoạn lừa đảo Phishing, bảo vệ tài khoản bằng mật khẩu mạnh và xác thực hai bước 2FA.",
    quizzes: [
      {
        q: "Hành động nào sau đây là vi phạm văn hóa giao tiếp và ứng xử trên không gian mạng (Netiquette)?",
        options: ["Cảm ơn người khác khi nhận được câu trả lời hữu ích", "Viết hoa TOÀN BỘ VĂN BẢN (CAPS LOCK) trong thảo luận nhóm", "Trích dẫn nguồn tác giả khi dùng ảnh minh họa", "Gửi email có lời chào và chữ ký lịch sự"],
        correctIndex: 1,
        explain: "Viết toàn bộ bằng chữ hoa (ALL CAPS) trong giao tiếp mạng được hiểu là hành vi quát tháo, kích động, gây khó chịu cho người đọc."
      },
      {
        q: "Hình thức tấn công mạng nào mà kẻ lừa đảo tạo website hoặc email giả mạo hệt như thật nhằm đánh cắp thông tin đăng nhập và mã OTP của người dùng?",
        options: ["Tấn công DDoS", "Tấn công Phishing (Lừa đảo mạo danh)", "Tấn công Brute Force", "Nhiễm virus Trojan"],
        correctIndex: 1,
        explain: "Phishing là thủ đoạn giả danh các tổ chức uy tín (ngân hàng, Facebook, Zalo) nhằm lừa nạn nhân tự tay điền mật khẩu và mã OTP."
      },
      {
        q: "Biện pháp bảo mật nào hiệu quả nhất để ngăn chặn kẻ xấu chiếm quyền tài khoản ngay cả khi mật khẩu của bạn đã vô tình bị lộ?",
        options: ["Tắt màn hình máy tính khi không dùng", "Bật xác thực hai yếu tố (2FA - Two-Factor Authentication)", "Cài thêm nhiều phần mềm nghe nhạc", "Đổi tên người dùng tài khoản"],
        correctIndex: 1,
        explain: "Với xác thực 2FA, kẻ xấu dù biết mật khẩu vẫn không thể đăng nhập vì thiếu mã xác nhận gửi riêng về điện thoại của bạn."
      },
      {
        q: "Theo Luật An ninh mạng Việt Nam, hành vi nào sau đây bị nghiêm cấm trên không gian mạng?",
        options: ["Tham gia các khóa học lập trình trực tuyến", "Phát tán thông tin sai sự thật, vu khống, xuyên tạc làm nhục danh dự người khác", "Tìm kiếm tài liệu học tập trên Google", "Gửi bài tập cho giáo viên qua email"],
        correctIndex: 1,
        explain: "Luật An ninh mạng nghiêm cấm hành vi phát tán thông tin giả mạo, vu khống, xúc phạm danh dự nhân phẩm cá nhân và tổ chức."
      }
    ]
  }
];
