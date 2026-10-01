// Data for Trí tuệ nhân tạo (AI) Lớp 10 - Khung 12 tiết học cốt lõi theo Quyết định 2422/QĐ-BGDĐT
// 12 lessons: Tiết 1 đến Tiết 12
// Each lesson has 4 interactive quizzes (total 48 quizzes)

const lessons = [
  // ==========================================
  // CHỦ ĐỀ 1: NHẬP MÔN AI & TƯ DUY LẤY CON NGƯỜI LÀM TRUNG TÂM (TIẾT 1 - 3)
  // ==========================================
  {
    lessonNum: 1,
    id: "tiet-1",
    topicNum: 1,
    topicName: "Chủ đề 1: Nhập môn AI & Tư duy lấy con người làm trung tâm",
    title: "Tiết 1: Tổng quan về Trí tuệ nhân tạo (AI là gì?)",
    tag: "Nhập môn AI",
    objectives: [
      "Hiểu rõ khái niệm Trí tuệ nhân tạo (Artificial Intelligence - AI) – khả năng của máy tính mô phỏng các năng lực trí tuệ của con người như học tập, suy luận, giải quyết vấn đề và tự thích nghi.",
      "Phân biệt rõ ràng giữa AI hẹp (Narrow AI / Weak AI - đang hiện hữu) và AI tổng quát (General AI / Strong AI - viễn tưởng).",
      "Thấu hiểu tư duy lấy con người làm trung tâm (Human-Centered AI): Mục đích tối thượng của AI là phục vụ, hỗ trợ và nâng cao chất lượng cuộc sống con người, không phải thay thế con người.",
      "Nhận diện các ứng dụng AI quen thuộc trong đời sống: Nhận diện khuôn mặt FaceID, thuật toán gợi ý YouTube/TikTok, ô tô tự hành Tesla."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
          <h4 class="font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-brain"></i> AI hẹp (Narrow AI) vs AI tổng quát (AGI)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Narrow AI (AI chuyên biệt):</strong> Được huấn luyện để thực hiện xuất sắc một tác vụ đơn lẻ duy nhất (ví dụ: AlphaGo đánh cờ vây, Siri nghe lệnh giọng nói, Google Dịch). Toàn bộ AI hiện nay đều thuộc nhóm này.</li>
            <li><strong>AGI (Artificial General Intelligence):</strong> Hệ thống AI có trí tuệ toàn diện tương đương hoặc vượt con người trong mọi lĩnh vực trí tuệ. Đây vẫn là mục tiêu nghiên cứu dài hạn trong tương lai.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-hands-holding-child"></i> Tư duy lấy con người làm trung tâm
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>AI là công cụ đồng hành (Co-pilot), trao quyền cho con người sáng tạo và giải phóng sức lao động chân tay lặp lại.</li>
            <li>Con người giữ quyền kiểm soát tối hậu, chịu trách nhiệm pháp lý và đạo đức đối với mọi quyết định do hệ thống AI gợi ý.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Trải nghiệm thử nghiệm phép thử Turing (Turing Test)",
        content: "Tìm hiểu thí nghiệm nổi tiếng của Alan Turing (1950): Một người thẩm vấn trò chuyện qua văn bản với hai đối tượng ẩn danh (1 người thật và 1 cỗ máy AI). Nếu người thẩm vấn không thể phân biệt được đâu là máy, cỗ máy được coi là có trí tuệ."
      },
      {
        title: "Bước 2: Lập danh mục các ứng dụng AI xung quanh em",
        content: "Mở ứng dụng điện thoại -> Liệt kê ít nhất 5 tính năng có ứng dụng AI mà em sử dụng hàng ngày: Bộ lọc ảnh camera, gợi ý từ khóa tìm kiếm Google, tự động phát hiện thư rác trong Gmail, thuật toán For You của TikTok."
      },
      {
        title: "Bước 3: Phân tích vai trò con người trong hệ thống AI",
        content: "Thảo luận nhóm: AI chẩn đoán bệnh qua ảnh chụp X-quang với độ chính xác 98%. Liệu AI có thể thay thế hoàn toàn bác sĩ không? Bác sĩ đóng vai trò gì trong việc xác nhận phác đồ điều trị và chăm sóc tâm lý bệnh nhân?"
      }
    ],
    practice: "Hãy chọn 1 ứng dụng AI mà em yêu thích (ví dụ: Google Maps tìm đường tối ưu hoặc Duolingo học ngoại ngữ) và viết đoạn văn ngắn 100 từ mô tả: AI giúp em giải quyết vấn đề gì và con người đã dạy AI như thế nào.",
    quizzes: [
      {
        question: "Phát biểu nào sau đây định nghĩa chính xác nhất về Trí tuệ nhân tạo (AI)?",
        options: [
          "Một lĩnh vực khoa học máy tính nghiên cứu cách chế tạo máy móc có khả năng mô phỏng các hành vi thông minh và năng lực tư duy của con người",
          "Một loại chip điện tử gắn vào não bộ con người",
          "Một trang web tìm kiếm hình ảnh trên mạng xã hội",
          "Tất cả các loại robot bằng sắt chuyển động được"
        ],
        correct: 0,
        explanation: "AI là ngành khoa học máy tính hướng tới việc xây dựng các hệ thống phần mềm và thiết bị có khả năng thực hiện các tác vụ đòi hỏi trí thông minh con người như học hỏi, suy luận và tự sửa sai."
      },
      {
        question: "Toàn bộ các hệ thống AI đang hoạt động trong thực tế hiện nay (như ChatGPT, FaceID, xe tự lái) đều thuộc phân loại nào?",
        options: [
          "AI hẹp / AI chuyên biệt (Narrow AI / Weak AI)",
          "AI tổng quát (General AI / AGI)",
          "Siêu trí tuệ nhân tạo (Super AI)",
          "Trí tuệ nhân tạo viễn tưởng"
        ],
        correct: 0,
        explanation: "Hiện nay 100% các hệ thống AI đều là Narrow AI – chuyên xử lý rất tốt một tác vụ cụ thể đã được lập trình và huấn luyện dữ liệu, chưa có khả năng tự nhận thức tổng quát như con người."
      },
      {
        question: "Nguyên lý 'Tư duy lấy con người làm trung tâm' (Human-Centered AI) khẳng định điều gì?",
        options: [
          "AI được tạo ra để phục vụ, hỗ trợ con người và con người luôn giữ quyền quyết định, kiểm soát tối thượng",
          "AI sẽ sớm thống trị và thay thế hoàn toàn con người trong xã hội",
          "Con người phải phục tùng mọi quyết định do AI đưa ra",
          "Không cần con người tham gia lập trình hay giám sát AI"
        ],
        correct: 0,
        explanation: "Human-Centered AI coi con người là trung tâm: AI là công cụ khuếch đại năng lực của con người, đảm bảo các giá trị nhân văn, an toàn và hạnh phúc của xã hội."
      },
      {
        question: "Nhà khoa học nào được mệnh danh là 'Cha đẻ của khoa học máy tính và trí tuệ nhân tạo' với phép thử Turing nổi tiếng?",
        options: [
          "Alan Turing",
          "Bill Gates",
          "Steve Jobs",
          "Elon Musk"
        ],
        correct: 0,
        explanation: "Alan Turing (1912-1954) là nhà toán học, logic học người Anh vĩ đại đã đặt nền móng lý thuyết cho máy tính hiện đại và đưa ra phép thử Turing Test để đánh giá trí tuệ máy móc."
      }
    ]
  },
  {
    lessonNum: 2,
    id: "tiet-2",
    topicNum: 1,
    topicName: "Chủ đề 1: Nhập môn AI & Tư duy lấy con người làm trung tâm",
    title: "Tiết 2: Cách AI học: Dữ liệu và Học máy (Machine Learning)",
    tag: "Machine Learning",
    objectives: [
      "Hiểu rõ sự khác biệt cốt lõi giữa Lập trình truyền thống (Dữ liệu + Quy tắc -> Câu trả lời) và Học máy (Dữ liệu + Câu trả lời -> Tự học ra Quy tắc).",
      "Nắm vững vai trò quyết định của Dữ liệu (Data is the new oil): Khối lượng, tính đại diện và chất lượng dữ liệu huấn luyện (Training Data).",
      "Phân biệt 3 phương pháp học máy căn bản: Học có giám sát (Supervised Learning), Học không giám sát (Unsupervised Learning) và Học tăng cường (Reinforcement Learning).",
      "Làm quen với quy trình học máy: Thu thập dữ liệu -> Tiền xử lý -> Huấn luyện mô hình (Training) -> Kiểm thử (Testing/Validation) -> Triển khai."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
          <h4 class="font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-code-compare"></i> Lập trình truyền thống vs Học máy (ML)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Lập trình truyền thống:</strong> Con người gõ từng dòng lệnh logic <code>IF... ELSE...</code> chi tiết để máy tính làm theo từng bước. Nếu gặp trường hợp ngoài quy tắc, chương trình sẽ báo lỗi.</li>
            <li><strong>Học máy (Machine Learning):</strong> Cung cấp hàng triệu ví dụ mẫu kèm đáp án, thuật toán toán học sẽ tự động 'học' và tìm ra mối liên hệ quy luật ẩn sâu bên trong.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap"></i> 3 Phương pháp Học máy kinh điển
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Học có giám sát (Supervised):</strong> Dữ liệu đã được gán nhãn sẵn (Label). Ví dụ: 10,000 ảnh dán nhãn 'Chó' và 'Mèo'.</li>
            <li><strong>Học không giám sát (Unsupervised):</strong> Dữ liệu không có nhãn. Mô hình tự động gom cụm (Clustering) các nhóm khách hàng có thói quen mua sắm giống nhau.</li>
            <li><strong>Học tăng cường (Reinforcement):</strong> Học qua thử và sai (Trial and Error) bằng cơ chế Phần thưởng (Reward) và Phạt (Penalty) như dạy một chú cún con làm xiếc.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Mô phỏng bài toán phân loại email rác",
        content: "Xét hệ thống lọc Spam: Cung cấp 50,000 email thường (nhãn Ham) và 50,000 email lừa đảo (nhãn Spam). Mô hình ML tự phát hiện các từ khóa bất thường ('trúng thưởng', 'chuyển khoản gấp') kèm tần suất xuất hiện."
      },
      {
        title: "Bước 2: Phân chia tập dữ liệu Train / Test",
        content: "Quy tắc chuẩn: Chia tập dữ liệu làm 2 phần: 80% dùng để huấn luyện mô hình (Training Set) và 20% giữ lại độc lập để thi cử kiểm tra độ chính xác (Testing Set)."
      },
      {
        title: "Bước 3: Đánh giá độ chính xác (Accuracy)",
        content: "Cho mô hình làm bài thi với 20% dữ liệu chưa từng thấy. Nếu mô hình đoán đúng 19/20 trường hợp -> Độ chính xác đạt 95%."
      }
    ],
    practice: "Hãy phân loại 3 bài toán sau vào phương pháp học máy tương ứng: 1) Nhận diện biển số xe vi phạm; 2) Robot học cách tự đứng thăng bằng và đi bộ; 3) Phân nhóm khách hàng siêu thị theo sở thích.",
    quizzes: [
      {
        question: "Điểm khác biệt cốt lõi nhất giữa Học máy (Machine Learning) và Lập trình truyền thống là gì?",
        options: [
          "Học máy cho phép hệ thống tự suy luận và rút ra quy luật từ dữ liệu mẫu thay vì con người phải lập trình từng quy tắc cứng",
          "Học máy không cần dùng máy tính để chạy",
          "Học máy chỉ chạy được trên điện thoại thông minh",
          "Lập trình truyền thống luôn có độ chính xác cao hơn học máy"
        ],
        correct: 0,
        explanation: "Trong lập trình truyền thống con người phải viết tường minh mọi quy tắc; còn trong Machine Learning máy tính tự học và khái quát hóa quy luật từ dữ liệu quá khứ."
      },
      {
        question: "Phương pháp học máy nào yêu cầu dữ liệu đầu vào bắt buộc phải được con người dán nhãn sẵn kết quả đúng (Labeled Data)?",
        options: [
          "Học có giám sát (Supervised Learning)",
          "Học không giám sát (Unsupervised Learning)",
          "Học tăng cường (Reinforcement Learning)",
          "Học tự nhiên"
        ],
        correct: 0,
        explanation: "Supervised Learning (Học có giám sát) dựa trên các cặp dữ liệu mẫu (Đầu vào X - Nhãn đáp án Y) để mô hình học cách ánh xạ."
      },
      {
        question: "Thuật toán học cách chơi cờ vua hoặc huấn luyện xe tự lái thông qua cơ chế nhận điểm thưởng (+1) khi đi đúng và bị phạt (-1) khi đi sai là ví dụ điển hình của phương pháp nào?",
        options: [
          "Học tăng cường (Reinforcement Learning)",
          "Học có giám sát",
          "Học không giám sát",
          "Lập trình hướng đối tượng"
        ],
        correct: 0,
        explanation: "Học tăng cường mô phỏng cơ chế thử - sai và tối đa hóa điểm thưởng tích lũy trong môi trường tương tác."
      },
      {
        question: "Tại sao trong học máy người ta luôn phải chia tập dữ liệu thành 2 phần riêng biệt: Tập huấn luyện (Training Set) và Tập kiểm thử (Testing Set)?",
        options: [
          "Để kiểm tra xem mô hình có thực sự hiểu bài và giải quyết được dữ liệu mới hay chỉ học vẹt dữ liệu cũ (chống quá khớp Overfitting)",
          "Để máy tính đỡ bị nóng",
          "Để giảm tiền điện khi chạy máy",
          "Vì luật pháp quy định bắt buộc như vậy"
        ],
        correct: 0,
        explanation: "Giữ lại một phần dữ liệu độc lập (Testing set) giúp đánh giá khách quan khả năng tổng quát hóa (Generalization) của mô hình đối với các dữ liệu hoàn toàn mới trong thực tế."
      }
    ]
  },
  {
    lessonNum: 3,
    id: "tiet-3",
    topicNum: 1,
    topicName: "Chủ đề 1: Nhập môn AI & Tư duy lấy con người làm trung tâm",
    title: "Tiết 3: Đạo đức AI, Quyền riêng tư & Trách nhiệm số",
    tag: "AI Ethics & Safety",
    objectives: [
      "Nhận thức sâu sắc các thách thức đạo đức và pháp lý của AI: Thiên vị thuật toán (Algorithmic Bias), Công nghệ giả mạo hình ảnh/âm thanh Deepfake và Nguy cơ lan truyền tin giả (Disinformation).",
      "Hiểu rõ quyền riêng tư dữ liệu cá nhân (Data Privacy) và các hành vi thu thập dữ liệu trái phép phục vụ huấn luyện AI.",
      "Vấn đề bản quyền tác giả trong kỷ nguyên AI: AI học từ tranh vẽ của họa sĩ có vi phạm bản quyền sở hữu trí tuệ hay không?",
      "Nắm vững 5 nguyên tắc đạo đức cốt lõi khi sử dụng AI trong học đường: Minh bạch, Trung thực, Tôn trọng quyền tác giả, Kiểm chứng thông tin và Bảo vệ dữ liệu cá nhân."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
          <h4 class="font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation"></i> Thiên vị thuật toán (AI Bias)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><em>'Garbage in, Garbage out':</em> AI không tự có định kiến, nhưng nếu dữ liệu huấn luyện trong quá khứ bị thiên lệch về giới tính, chủng tộc thì AI sẽ lặp lại và khuếch đại sự bất công đó.</li>
            <li>Ví dụ: Thuật toán tuyển dụng tự động loại bỏ hồ sơ của phụ nữ vì dữ liệu quá khứ chủ yếu tuyển nam giới.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-masks-theater"></i> Cạm bẫy Deepfake & Giả mạo
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Deepfake:</strong> Dùng mạng nơ-ron sâu hoán đổi khuôn mặt và giọng nói của một người vào video giả mạo với độ chân thực kinh ngạc.</li>
            <li><em>Mối đe dọa:</em> Lừa đảo chuyển tiền mạo danh người thân, bôi nhọ danh dự và thao túng bầu cử chính trị.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Kỹ năng nhận diện video Deepfake lừa đảo",
        content: "Quan sát các dấu hiệu bất thường: Mắt chớp không tự nhiên, khẩu hình miệng không khớp chính xác với âm thanh phát ra, vùng viền khuôn mặt bị nhòe mờ khi quay nghiêng góc."
      },
      {
        title: "Bước 2: Quy tắc 'Không chia sẻ thông tin cá nhân với AI'",
        content: "Tuyệt đối không nhập thông tin nhạy cảm vào các chatbot công cộng: Số căn cước công dân, mật khẩu ngân hàng, địa chỉ nhà riêng hoặc nhật ký đời tư của bản thân và bạn bè."
      },
      {
        title: "Bước 3: Ứng xử có đạo đức trong bài tập học đường",
        content: "Được phép sử dụng AI để gợi ý dàn ý, giải thích khái niệm khó hiểu hoặc chữa lỗi ngữ pháp tiếng Anh; Nhưng nghiêm cấm hành vi sao chép nguyên văn sản phẩm của AI rồi nhận là của mình (đạo văn công nghệ)."
      }
    ],
    practice: "Em nhận được một cuộc gọi video từ một người bạn thân với hình ảnh và giọng nói giống hệt, yêu cầu chuyển gấp 500,000 VNĐ vì đang gặp tai nạn. Hãy nêu quy trình 3 bước xử lý để phòng ngừa bẫy Deepfake.",
    quizzes: [
      {
        question: "Thuật ngữ 'Deepfake' dùng để chỉ hiện tượng công nghệ nào dưới đây?",
        options: [
          "Công nghệ AI sử dụng mạng học sâu để làm giả hình ảnh, video và giọng nói của người thật với độ tinh vi rất khó phân biệt",
          "Một loại trò chơi thực tế ảo khám phá đáy đại dương",
          "Phần mềm dọn dẹp rác bộ nhớ điện thoại",
          "Kỹ thuật đào tạo siêu máy tính tính toán thời tiết"
        ],
        correct: 0,
        explanation: "Deepfake (kết hợp từ Deep Learning và Fake) là công nghệ tổng hợp hình ảnh/âm thanh người bằng AI, tạo ra các video giả mạo sống động như thật."
      },
      {
        question: "Nguyên nhân cốt lõi dẫn đến hiện tượng 'Thiên vị thuật toán' (Algorithmic Bias) trong các mô hình AI là gì?",
        options: [
          "Dữ liệu huấn luyện đưa vào mô hình bị mất cân bằng, mang theo những định kiến và bất công sẵn có của xã hội trong quá khứ",
          "Do máy tính bị nhiễm virus máy tính",
          "Do bàn phím gõ chữ bị kẹt phím",
          "Do tốc độ đường truyền Internet bị chậm"
        ],
        correct: 0,
        explanation: "AI học từ dữ liệu lịch sử của con người; nếu dữ liệu đó bị thiên lệch, không công bằng hoặc thiếu tính đại diện thì mô hình sinh ra sẽ kế thừa sự thiên lệch đó."
      },
      {
        question: "Hành động nào sau đây là vi phạm đạo đức học đường khi sử dụng các công cụ AI (như ChatGPT, Gemini) làm bài tập?",
        options: [
          "Sao chép nguyên văn toàn bộ bài luận do AI sinh ra và nộp cho thầy cô giáo rồi nhận là tác phẩm do chính mình tự viết",
          "Dùng AI để tra cứu các ví dụ minh họa và giải thích thuật ngữ khó hiểu",
          "Nhờ AI kiểm tra lỗi chính tả và cấu trúc ngữ pháp bài văn của mình",
          "Yêu cầu AI gợi ý các góc nhìn đa chiều để mở rộng hiểu biết về đề tài"
        ],
        correct: 0,
        explanation: "Sao chép nguyên văn bài làm của AI và nộp bài giả mạo là hành vi gian lận học thuật (đạo văn), đánh mất cơ hội rèn luyện tư duy phản biện của học sinh."
      },
      {
        question: "Để bảo vệ quyền riêng tư cá nhân khi trò chuyện với các công cụ AI công cộng, bạn tuyệt đối KHÔNG NÊN làm gì?",
        options: [
          "Nhập các dữ liệu cá nhân nhạy cảm như mật khẩu, mã OTP, số căn cước công dân hoặc bí mật gia đình vào hộp chat",
          "Hỏi AI về kiến thức lịch sử Việt Nam",
          "Nhờ AI dịch một đoạn văn tiếng Anh sang tiếng Việt",
          "Hỏi AI về công thức hóa học lớp 10"
        ],
        correct: 0,
        explanation: "Các đoạn hội thoại trên nền tảng AI có thể được lưu trữ và sử dụng lại để huấn luyện các phiên bản sau, do đó nhập thông tin nhạy cảm có nguy cơ bị lộ lọt dữ liệu."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 2: CÁC KỸ THUẬT & LĨNH VỰC CỐT LÕI CỦA AI (TIẾT 4 - 6)
  // ==========================================
  {
    lessonNum: 4,
    id: "tiet-4",
    topicNum: 2,
    topicName: "Chủ đề 2: Các kỹ thuật & Lĩnh vực cốt lõi của AI",
    title: "Tiết 4: Thị giác máy tính (Computer Vision)",
    tag: "Computer Vision",
    objectives: [
      "Hiểu cách máy tính 'nhìn thấy' thế giới thực: Biểu diễn hình ảnh kỹ thuật số dưới dạng ma trận các điểm ảnh (Pixels) với các kênh màu Đỏ - Xanh lá - Xanh dương (RGB).",
      "Nắm vững các bài toán cốt lõi của Thị giác máy tính: Phân loại hình ảnh (Image Classification), Phát hiện vật thể (Object Detection) và Nhận diện khuôn mặt (Facial Recognition).",
      "Làm quen với mạng nơ-ron tích chập (Convolutional Neural Network - CNN) – xương sống của thị giác máy tính hiện đại.",
      "Khám phá các ứng dụng thực tiễn: Xe tự hành phân làn đường, kiểm soát vé vào cổng bằng gương mặt, chẩn đoán khối u trong y tế."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
          <h4 class="font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-eye"></i> Cách máy tính nhìn bức ảnh
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Đối với mắt người: Chúng ta thấy một chú mèo lông vàng đáng yêu.</li>
            <li>Đối với máy tính: Chỉ là một mảng ma trận số 3 chiều khổng lồ kích thước W x H x 3, trong đó mỗi điểm ảnh nhận giá trị độ sáng từ 0 đến 255.</li>
            <li>Nhiệm vụ của Computer Vision: Tìm ra các đường viền mép (Edges), kết cấu (Textures) và hình dáng đặc thù (Shapes) từ ma trận số đó.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-camera"></i> 3 Cấp độ thị giác máy tính
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Classification (Phân loại):</strong> Trả lời câu hỏi 'Đây là con gì?' -> Kết quả: 'Mèo (98%)'.</li>
            <li><strong>Detection (Phát hiện):</strong> Vẽ hộp bao (Bounding Box) xác định vị trí: 'Có 1 con mèo ở tọa độ [x, y, w, h]'.</li>
            <li><strong>Segmentation (Phân vùng):</strong> Tô màu chính xác từng pixel thuộc về đối tượng.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Trải nghiệm công cụ nhận diện vật thể thời gian thực",
        content: "Truy cập các ứng dụng web như Google Lens hoặc YOLO Demo -> Hướng camera điện thoại vào bàn học -> Quan sát AI vẽ các hộp màu nhận diện: Laptop, Sách, Bút, Cốc nước trong tích tắc."
      },
      {
        title: "Bước 2: Tìm hiểu công nghệ FaceID nhận diện khuôn mặt",
        content: "Công nghệ đo đạc khoảng cách giữa hai đồng tử mắt, chiều cao sống mũi, độ sâu xương gò má để tạo ra một chuỗi mã số hình học khuôn mặt độc nhất (Faceprint)."
      },
      {
        title: "Bước 3: Nhận biết giới hạn của thị giác máy tính",
        content: "Thử nghiệm đổi góc chụp, làm mờ ánh sáng hoặc đeo khẩu trang kính râm xem AI có còn nhận diện chuẩn xác hay bị nhầm lẫn."
      }
    ],
    practice: "Chụp 1 bức ảnh bàn học của em. Hãy đóng vai trò là một thuật toán Computer Vision, liệt kê 5 đối tượng trong ảnh, vẽ hộp bao phác thảo xung quanh và ước tính xác suất tin cậy (Confidence score: 0% - 100%).",
    quizzes: [
      {
        question: "Dưới góc nhìn của máy tính, một bức ảnh kỹ thuật số màu thực chất được biểu diễn dưới dạng gì?",
        options: [
          "Một ma trận lưới các con số đại diện cho cường độ sáng của các điểm ảnh (Pixels) theo các kênh màu",
          "Một trang giấy chứa các đoạn thơ văn xuôi",
          "Một tệp bài hát dạng sóng âm thanh",
          "Một sợi dây điện quang học"
        ],
        correct: 0,
        explanation: "Hình ảnh số được máy tính lưu trữ dưới dạng ma trận 2D hoặc 3D chứa các giá trị số từ 0 (đen tuyệt đối) đến 255 (sáng tuyệt đối) cho từng kênh màu RGB."
      },
      {
        question: "Bài toán 'Phát hiện vật thể' (Object Detection) khác bài toán 'Phân loại ảnh' (Classification) ở điểm then chốt nào?",
        options: [
          "Object Detection vừa gọi tên đối tượng vừa xác định chính xác vị trí tọa độ của đối tượng trong bức ảnh bằng hộp bao Bounding Box",
          "Object Detection chỉ nhận diện được màu đen trắng",
          "Object Detection không cần dùng camera",
          "Phân loại ảnh khó hơn phát hiện vật thể gấp 100 lần"
        ],
        correct: 0,
        explanation: "Classification chỉ trả lời 'trong ảnh có gì', còn Object Detection định vị chính xác vị trí và số lượng từng vật thể thông qua các khung hộp bao quanh."
      },
      {
        question: "Kiến trúc mạng nơ-ron nhân tạo nào đóng vai trò là trụ cột thành công vang dội của lĩnh vực Thị giác máy tính hiện đại?",
        options: [
          "Mạng nơ-ron tích chập (Convolutional Neural Network - CNN)",
          "Mạng nơ-ron hồi quy RNN",
          "Bảng tính Excel",
          "Cơ sở dữ liệu SQL"
        ],
        correct: 0,
        explanation: "Mạng CNN với các bộ lọc tích chập (Convolutional Filters) mô phỏng vỏ não thị giác sinh học, có khả năng tự động trích xuất các đặc trưng hình học sắc nét."
      },
      {
        question: "Trong ô tô tự hành thông minh, hệ thống thị giác máy tính đảm nhận nhiệm vụ sống còn nào?",
        options: [
          "Nhận diện vạch kẻ đường, biển báo giao thông, người đi bộ và các phương tiện xung quanh để điều khiển tay lái và phanh an toàn",
          "Tự động bật bài hát karaoke cho tài xế",
          "Tự động rửa kính xe khi trời nắng",
          "Chỉ dùng để chụp ảnh phong cảnh gửi lên mạng"
        ],
        correct: 0,
        explanation: "Thị giác máy tính đóng vai trò là 'đôi mắt thông minh' giúp xe tự lái phân tích không gian giao thông 360 độ theo thời gian thực để ra quyết định xử lý an toàn."
      }
    ]
  },
  {
    lessonNum: 5,
    id: "tiet-5",
    topicNum: 2,
    topicName: "Chủ đề 2: Các kỹ thuật & Lĩnh vực cốt lõi của AI",
    title: "Tiết 5: Xử lý ngôn ngữ tự nhiên (Natural Language Processing - NLP)",
    tag: "NLP & Chatbots",
    objectives: [
      "Hiểu rõ sứ mệnh của Xử lý ngôn ngữ tự nhiên (NLP) – cầu nối giúp máy tính có thể đọc hiểu, giải mã ngữ nghĩa và giao tiếp bằng ngôn ngữ tự nhiên của con người.",
      "Nắm vững các bước tiền xử lý văn bản: Tách từ (Tokenization), loại bỏ từ dừng (Stop words), chuẩn hóa dạng gốc (Stemming/Lemmatization).",
      "Khám phá kỹ thuật nhúng từ (Word Embedding / Word2Vec): Biến ngôn ngữ thành các vector toán học trong không gian nhiều chiều.",
      "Tìm hiểu các ứng dụng kinh điển: Phân tích cảm xúc văn bản (Sentiment Analysis), dịch máy thần kinh (Google Translate) và Trợ lý ảo đàm thoại (Siri, Alexa)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
          <h4 class="font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-comments"></i> Vì sao ngôn ngữ tự nhiên lại khó đối với máy?
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Tính đa nghĩa & ngữ cảnh:</strong> Từ 'đường' có thể là đường đi bộ, hoặc là đường ăn ngọt, hoặc đường huyết y tế.</li>
            <li><strong>Phép nói mỉa mai, ẩn dụ:</strong> 'Hôm nay trời đẹp nhỉ!' khi trời đang mưa bão sấm chớp đòi hỏi sự thấu hiểu ngữ cảnh văn hóa sâu sắc.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-language"></i> Kỹ thuật nhúng từ (Word Embedding)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Biến mỗi từ thành một vector các con số.</li>
            <li>Các từ có nghĩa tương đồng sẽ nằm gần nhau trong không gian: Vector('Vua') - Vector('Đàn ông') + Vector('Phụ nữ') $\approx$ Vector('Nữ hoàng')!</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Thực hành tách từ (Tokenization)",
        content: "Câu văn: 'Học sinh lớp 10 học AI rất hào hứng.' -> Máy tính chia nhỏ thành danh sách các Token: ['Học sinh', 'lớp', '10', 'học', 'AI', 'rất', 'hào hứng']."
      },
      {
        title: "Bước 2: Phân tích cảm xúc bình luận (Sentiment Analysis)",
        content: "Hệ thống AI tự động chấm điểm cảm xúc của đánh giá khách hàng: 'Đồ ăn rất ngon, phục vụ chu đáo' -> Tích cực (+1); 'Giao hàng chậm, thái độ tệ' -> Tiêu cực (-1)."
      },
      {
        title: "Bước 3: Trải nghiệm dịch máy đa ngôn ngữ",
        content: "Dịch đoạn văn thành ngữ tiếng Việt sang tiếng Anh và nhận xét xem AI dịch theo nghĩa đen từng từ (word-by-word) hay đã hiểu trọn vẹn ngữ nghĩa của cả câu."
      }
    ],
    practice: "Thu thập 5 câu nhận xét đánh giá một bộ phim trên mạng. Hãy phân loại cảm xúc của từng câu (Tích cực, Tiêu cực hay Trung tính) và chỉ ra các từ khóa then chốt giúp em đưa ra kết luận.",
    quizzes: [
      {
        question: "Lĩnh vực nghiên cứu nào trong AI chuyên nghiên cứu cách giúp máy tính hiểu, diễn giải và tạo ra ngôn ngữ của con người?",
        options: [
          "Xử lý ngôn ngữ tự nhiên (Natural Language Processing - NLP)",
          "Thị giác máy tính (Computer Vision)",
          "Mạng máy tính viễn thông",
          "Hệ thống cơ khí chế tạo máy"
        ],
        correct: 0,
        explanation: "NLP (Natural Language Processing) là nhánh của AI tập trung vào sự tương tác ngôn ngữ giữa máy tính và con người."
      },
      {
        question: "Thao tác chia nhỏ một đoạn văn bản dài thành các từ hoặc cụm từ đơn vị độc lập trong tiền xử lý NLP được gọi là gì?",
        options: [
          "Tách từ (Tokenization)",
          "Nén dữ liệu (Compression)",
          "Mã hóa BitLocker",
          "Quét virus"
        ],
        correct: 0,
        explanation: "Tokenization là bước phân đoạn văn bản thành các đơn vị ngữ nghĩa nhỏ hơn gọi là Token (từ, từ ghép hoặc cụm ký tự)."
      },
      {
        question: "Ứng dụng nào sau đây KHÔNG PHẢI là ứng dụng thuộc lĩnh vực Xử lý ngôn ngữ tự nhiên (NLP)?",
        options: [
          "Phát hiện người đi bộ băng qua đường qua camera giao thông",
          "Hệ thống dịch máy tự động Google Translate",
          "Trợ lý ảo Siri đàm thoại trả lời câu hỏi của người dùng",
          "Bộ lọc phân loại tự động thư rác Spam trong hòm thư điện tử"
        ],
        correct: 0,
        explanation: "Phát hiện người qua camera giao thông là ứng dụng của Thị giác máy tính (Computer Vision), không thuộc NLP."
      },
      {
        question: "Kỹ thuật 'Phân tích cảm xúc' (Sentiment Analysis) trong NLP thường được các doanh nghiệp dùng để làm gì?",
        options: [
          "Tự động phân loại hàng ngàn đánh giá của khách hàng trên mạng xã hội là Khen (Tích cực) hay Chê (Tiêu cực)",
          "Đo nhịp tim của nhân viên",
          "Tự động tính tiền lương tháng",
          "Vẽ biểu đồ thời tiết nhiệt độ"
        ],
        correct: 0,
        explanation: "Sentiment Analysis quét các bình luận, bài đăng để nhận diện thái độ, cảm xúc và mức độ hài lòng của công chúng về sản phẩm/dịch vụ."
      }
    ]
  },
  {
    lessonNum: 6,
    id: "tiet-6",
    topicNum: 2,
    topicName: "Chủ đề 2: Các kỹ thuật & Lĩnh vực cốt lõi của AI",
    title: "Tiết 6: AI tạo sinh (Generative AI) & Mô hình ngôn ngữ lớn (LLM)",
    tag: "Generative AI & LLMs",
    objectives: [
      "Hiểu rõ bước ngoặt lịch sử của AI tạo sinh (Generative AI) – từ chỗ chỉ biết 'phân tích' sang khả năng 'tự sáng tạo nội dung mới' (Văn bản, Hình ảnh, Âm thanh, Mã code).",
      "Khám phá bản chất của Mô hình ngôn ngữ lớn (Large Language Model - LLM): Được huấn luyện trên khối lượng tri thức khổng lồ toàn cầu, hoạt động theo nguyên lý 'Dự đoán từ tiếp theo có xác suất cao nhất'.",
      "Nhận diện các công cụ GenAI tiêu biểu hiện nay: ChatGPT (OpenAI), Gemini (Google), Claude (Anthropic), Midjourney, Stable Diffusion.",
      "Hiểu hiện tượng 'Ảo giác AI' (AI Hallucination) – khi mô hình tự tin bịa đặt ra những thông tin hoàn toàn sai sự thật một cách trôi chảy."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
          <h4 class="font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-wand-magic-sparkles"></i> AI truyền thống vs GenAI
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>AI phân biệt (Discriminative AI):</strong> Nhìn một bức tranh và trả lời: 'Đây là tranh của Van Gogh'.</li>
            <li><strong>AI tạo sinh (Generative AI):</strong> Nhận yêu cầu và tự vẽ ra một bức tranh hoàn toàn mới mang phong cách Van Gogh!</li>
            <li>Sức mạnh dựa trên kiến trúc mạng Transformer (công bố năm 2017 bởi Google) với cơ chế Tự chú ý (Self-Attention).</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation"></i> Ảo giác AI (Hallucination)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>LLM không phải là công cụ tìm kiếm dữ liệu chân lý; nó là cỗ máy sinh từ thống kê xác suất.</li>
            <li>Khi không đủ dữ liệu, AI có thể tự 'sáng tác' ra những trích dẫn học thuật, sự kiện lịch sử hoặc công thức toán học hoàn toàn không có thật nhưng văn phong cực kỳ thuyết phục.</li>
            <li><em>Khẩu quyết:</em> <strong>Luôn kiểm chứng lại nguồn tin độc lập!</strong></li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Đặt câu hỏi thử thách kiểm tra kiến thức",
        content: "Hỏi mô hình GenAI: 'Hãy tóm tắt tác phẩm Chuyện người con gái Nam Xương của Nguyễn Dữ trong 3 gạch đầu dòng ngắn gọn'."
      },
      {
        title: "Bước 2: Thử nghiệm bẫy ảo giác thông tin",
        content: "Đặt câu hỏi gài bẫy: 'Vua Quang Trung và Nguyễn Huệ đã tranh cãi điều gì trong trận Ngọc Hồi - Đống Đa?' -> Quan sát xem AI có nhận ra Quang Trung và Nguyễn Huệ là cùng một người hay không."
      },
      {
        title: "Bước 3: Khám phá công cụ AI tạo ảnh từ văn bản (Text-to-Image)",
        content: "Nhập mô tả chi tiết: 'Một chú mèo phi hành gia mặc bộ đồ vũ trụ màu cam đang lơ lửng trên sao Hỏa, phong cách tranh sơn dầu, ánh sáng điện ảnh' -> Quan sát sản phẩm thị giác được sinh ra."
      }
    ],
    practice: "Sử dụng một công cụ GenAI (ChatGPT hoặc Gemini) để giải thích định luật II Newton cho một bạn học sinh lớp 6 hiểu bằng một câu chuyện ngụ ngôn hài hước.",
    quizzes: [
      {
        question: "Đặc trưng đột phá lớn nhất của Trí tuệ nhân tạo tạo sinh (Generative AI) so với AI truyền thống là gì?",
        options: [
          "Khả năng tự sáng tạo ra các nội dung hoàn toàn mới (văn bản, tranh ảnh, âm thanh, mã code) dựa trên dữ liệu đã học",
          "Chỉ biết tính toán các phép cộng trừ nhân chia",
          "Chạy không cần pin và điện năng",
          "Có khả năng tự ăn thức ăn như sinh vật sống"
        ],
        correct: 0,
        explanation: "Generative AI vượt qua ranh giới phân loại dữ liệu cũ để tự tạo sinh ra những nội dung mới mẻ, phong phú theo yêu cầu của người dùng."
      },
      {
        question: "Cơ chế hoạt động căn bản bên dưới của các Mô hình ngôn ngữ lớn (LLM như ChatGPT) là gì?",
        options: [
          "Dự đoán từ (hoặc token) tiếp theo có xác suất xuất hiện cao nhất dựa trên ngữ cảnh chuỗi từ đứng trước",
          "Có một người thật ngồi sau màn hình gõ chữ trả lời",
          "Đọc được trực tiếp suy nghĩ trong não người dùng",
          "Tra cứu toàn bộ cuốn từ điển giấy trong tủ sách"
        ],
        correct: 0,
        explanation: "Về bản chất toán học, LLM là mô hình thống kê xác suất dự đoán từ kế tiếp (Next-token prediction) dựa trên mạng nơ-ron Transformer đồ sộ."
      },
      {
        question: "Hiện tượng 'Ảo giác AI' (AI Hallucination) trong các mô hình ngôn ngữ lớn biểu hiện như thế nào?",
        options: [
          "Mô hình đưa ra câu trả lời nghe rất trôi chảy, tự tin nhưng thực chất thông tin bên trong là sai lệch hoặc hoàn toàn bịa đặt",
          "Màn hình máy tính bị chớp nháy màu tím",
          "Mô hình từ chối không chịu nói chuyện với người dùng",
          "Mô hình biến thành hình ảnh con bướm bay"
        ],
        correct: 0,
        explanation: "Hallucination là hiện tượng mô hình AI tạo ra những thông tin nghe rất thuyết phục nhưng sai sự thật do giới hạn suy luận và dữ liệu."
      },
      {
        question: "Để đối phó với hiện tượng ảo giác thông tin của AI khi nghiên cứu học tập, thái độ đúng đắn của học sinh là gì?",
        options: [
          "Luôn giữ tư duy phản biện, đối chiếu và kiểm chứng lại các thông tin quan trọng với sách giáo khoa và các nguồn chính thống uy tín",
          "Tuyệt đối tin tưởng 100% mọi điều AI nói là chân lý",
          "Không bao giờ dùng máy tính nữa",
          "Chỉ tin vào tin đồn trên mạng xã hội"
        ],
        correct: 0,
        explanation: "Học sinh cần có tư duy phản biện (Critical Thinking), coi AI là nguồn tham khảo và luôn kiểm chứng lại với các tài liệu chuẩn mực."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 3: KỸ NGHỆ NHẮC LỆNH & HUẤN LUYỆN AI NO-CODE (TIẾT 7 - 9)
  // ==========================================
  {
    lessonNum: 7,
    id: "tiet-7",
    topicNum: 3,
    topicName: "Chủ đề 3: Kỹ nghệ nhắc lệnh & Huấn luyện AI No-Code",
    title: "Tiết 7: Kỹ thuật Kỹ nghệ nhắc lệnh (Prompt Engineering)",
    tag: "Prompt Engineering",
    objectives: [
      "Hiểu rõ tầm quan trọng sống còn của câu nhắc (Prompt) – chiếc cầu nối ngôn ngữ điều khiển hiệu suất trả lời của AI.",
      "Làm chủ công thức câu lệnh toàn diện chuẩn quốc tế: Cấu trúc R-T-C-F (Role - Task - Context - Format) và các ràng buộc (Constraints).",
      "Áp dụng các kỹ thuật nhắc lệnh nâng cao: Nhắc lệnh một vài ví dụ (Few-Shot Prompting) và Kích hoạt chuỗi tư duy suy luận (Chain-of-Thought - CoT).",
      "Thực hành tối ưu hóa câu nhắc để giải toán, tóm tắt tài liệu học tập và luyện nói tiếng Anh tương tác phản xạ."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
          <h4 class="font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-terminal"></i> Công thức vàng R-T-C-F
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Role (Vai trò):</strong> 'Bạn là một giáo viên chuyên gia Lịch sử Việt Nam...'.</li>
            <li><strong>Task (Nhiệm vụ):</strong> 'Hãy so sánh điểm giống và khác nhau giữa hai cuộc kháng chiến...'.</li>
            <li><strong>Context (Ngữ cảnh):</strong> 'Dành cho học sinh lớp 10 ôn thi học kỳ I...'.</li>
            <li><strong>Format & Constraints:</strong> 'Trình bày dưới dạng bảng so sánh 3 cột, độ dài dưới 300 từ, giọng văn hào hùng'.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-link"></i> Chuỗi tư duy (Chain-of-Thought)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Thêm câu thần chú: <em>'Hãy suy nghĩ và giải thích từng bước một (Think step-by-step) trước khi đưa ra đáp án cuối cùng'</em>.</li>
            <li>Giúp AI giảm tỷ lệ sai sót toán học và suy luận logic từ 50% xuống dưới 10%!</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: So sánh câu lệnh tồi và câu lệnh xuất sắc",
        content: "Câu lệnh tồi: 'Viết về biến đổi khí hậu' -> Kết quả lan man, chung chung. Câu lệnh xuất sắc: Áp dụng công thức R-T-C-F với mục tiêu và giới hạn rõ ràng -> Kết quả sắc bén, đúng trọng tâm."
      },
      {
        title: "Bước 2: Cung cấp mẫu đối chiếu (Few-Shot Prompting)",
        content: "Cung cấp 2 ví dụ mẫu phân loại: 'Ví dụ 1: [Vào] -> [Ra]', 'Ví dụ 2: [Vào] -> [Ra]', sau đó yêu cầu AI làm ví dụ 3 theo đúng khuôn mẫu chuẩn."
      },
      {
        title: "Bước 3: Tinh chỉnh lặp (Iterative Refinement)",
        content: "Đọc câu trả lời -> Đưa ra phản hồi yêu cầu điều chỉnh: 'Tốt lắm, nhưng hãy viết ngắn gọn hơn 50% và nhấn mạnh thêm các giải pháp dành riêng cho học sinh'."
      }
    ],
    practice: "Thiết kế một câu nhắc hoàn chỉnh theo công thức R-T-C-F để biến AI thành một 'Gia sư luyện thi IELTS Speaking' phỏng vấn em về chủ đề 'Sở thích cá nhân'.",
    quizzes: [
      {
        question: "Thuật ngữ 'Prompt Engineering' (Kỹ nghệ nhắc lệnh) chỉ điều gì?",
        options: [
          "Nghệ thuật và kỹ thuật thiết kế, tối ưu hóa các câu lệnh đầu vào để hướng dẫn mô hình AI đưa ra câu trả lời chính xác, chất lượng và phù hợp nhất",
          "Nghề lắp ráp vỏ case máy tính trong nhà máy",
          "Việc sửa chữa dây cáp quang Internet dưới đáy biển",
          "Kỹ thuật gõ 10 ngón trên bàn phím cơ"
        ],
        correct: 0,
        explanation: "Prompt Engineering là kỹ năng giao tiếp và ra lệnh chiến lược cho AI, giúp khai thác tối đa sức mạnh mô hình ngôn ngữ lớn."
      },
      {
        question: "Trong cấu trúc câu nhắc chuẩn R-T-C-F, chữ cái 'R' đại diện cho thành phần nào?",
        options: [
          "Role (Định vị vai trò chuyên môn cho AI hóa thân)",
          "Reset (Khởi động lại máy tính)",
          "Random (Lấy số ngẫu nhiên)",
          "Repeat (Lặp lại 10 lần)"
        ],
        correct: 0,
        explanation: "Role gán cho AI một danh xưng/chuyên môn cụ thể (ví dụ: 'Bạn là chuyên gia kinh tế', 'Bạn là giáo viên Hóa học') giúp AI kích hoạt vùng tri thức chuyên sâu tương ứng."
      },
      {
        question: "Cụm từ thần chú nào sau đây khi thêm vào câu nhắc giúp kích hoạt cơ chế Chuỗi tư duy (Chain-of-Thought), buộc AI giải thích từng bước logic và tránh sai sót toán học?",
        options: [
          "'Hãy suy nghĩ và giải thích từng bước một trước khi kết luận' (Think step by step)",
          "'Hãy trả lời thật nhanh trong 1 giây'",
          "'Không cần suy nghĩ gì cả'",
          "'Hãy đoán bừa một con số ngẫu nhiên'"
        ],
        correct: 0,
        explanation: "Kỹ thuật Chain-of-Thought hướng dẫn mô hình phân rã bài toán phức tạp thành các bước suy luận tuần tự, nâng cao rõ rệt độ chính xác."
      },
      {
        question: "Kỹ thuật 'Few-Shot Prompting' là gì?",
        options: [
          "Cung cấp một vài ví dụ mẫu (cặp câu hỏi - câu trả lời chuẩn) bên trong lời nhắc để AI nắm bắt được phong cách và khuôn mẫu định dạng cần làm theo",
          "Bắn ảnh vào camera",
          "Chỉ được hỏi AI 2 câu trong 1 ngày",
          "Xóa lịch sử trò chuyện"
        ],
        correct: 0,
        explanation: "Few-shot prompting cung cấp 1 vài ví dụ cụ thể làm kim chỉ nam giúp AI hiểu chính xác cấu trúc dữ liệu và giọng văn mà người dùng mong muốn."
      }
    ]
  },
  {
    lessonNum: 8,
    id: "tiet-8",
    topicNum: 3,
    topicName: "Chủ đề 3: Kỹ nghệ nhắc lệnh & Huấn luyện AI No-Code",
    title: "Tiết 8: Thực hành huấn luyện mô hình thị giác với Teachable Machine",
    tag: "Teachable Machine Vision",
    objectives: [
      "Trải nghiệm tự tay huấn luyện một mô hình AI thị giác thực sự mà không cần viết một dòng mã code nào (No-Code AI Platform).",
      "Làm quen với nền tảng Google Teachable Machine: Tạo các lớp phân loại (Classes), thu thập dữ liệu ảnh mẫu qua Webcam máy tính.",
      "Hiểu bản chất của quá trình huấn luyện: Số lượng mẫu (Samples), Kỷ nguyên huấn luyện (Epochs), Kích thước lô (Batch Size) và Tốc độ học (Learning Rate).",
      "Kiểm thử mô hình trực tiếp qua luồng video Webcam và xuất bản mô hình (Export Model dạng TensorFlow.js)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
          <h4 class="font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-shapes"></i> Google Teachable Machine là gì?
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Công cụ giáo dục trực quan trên nền web do Google phát triển giúp bất kỳ ai cũng có thể huấn luyện mô hình học máy nhanh chóng.</li>
            <li>Dựa trên kỹ thuật Học chuyển giao (Transfer Learning): Tận dụng mô hình thị giác MobileNet đồ sộ đã được huấn luyện sẵn, chỉ cần 'học bổ sung' thêm dữ liệu của bạn trong vài giây.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-gears"></i> 3 Bước huấn luyện chuẩn
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>1. Gather (Thu thập dữ liệu):</strong> Tạo Class 1 ('Đeo khẩu trang') và Class 2 ('Không đeo khẩu trang'). Chụp mỗi lớp khoảng 100 ảnh ở nhiều góc độ và khoảng cách khác nhau.</li>
            <li><strong>2. Train (Huấn luyện):</strong> Nhấn nút Train Model và chờ thanh tiến trình chạy hoàn tất.</li>
            <li><strong>3. Preview (Kiểm thử):</strong> Quan sát thanh đo phần trăm xác suất dự đoán biến đổi theo thời gian thực.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Truy cập và khởi tạo dự án Image Project",
        content: "Truy cập <em>teachablemachine.withgoogle.com</em> -> Chọn <strong>Get Started -> Image Project -> Standard image model</strong>."
      },
      {
        title: "Bước 2: Thu thập mẫu ảnh cho 2 nhãn phân loại",
        content: "Đổi tên Class 1 thành 'Cầm bút viết' -> Giữ nút Webcam chụp 80 tấm ảnh; Đổi tên Class 2 thành 'Cầm điện thoại' -> Giữ nút Webcam chụp 80 tấm ảnh với nhiều tư thế khác nhau."
      },
      {
        title: "Bước 3: Huấn luyện và đánh giá mô hình",
        content: "Nhấn nút <strong>Train Model</strong> (không chuyển tab trình duyệt trong lúc huấn luyện) -> Khi xong, bật Preview: Thử cầm bút hoặc điện thoại lên trước camera và quan sát thanh dự đoán của AI đạt trên 90%."
      }
    ],
    practice: "Huấn luyện một mô hình phân loại cử chỉ bàn tay 'Kéo - Búa - Bao' gồm 3 Class với Teachable Machine, chụp tối thiểu 50 ảnh cho mỗi cử chỉ và kiểm tra xem AI có phân biệt được chính xác không.",
    quizzes: [
      {
        question: "Nền tảng Google Teachable Machine hỗ trợ người dùng thực hiện điều gì nổi bật nhất?",
        options: [
          "Huấn luyện các mô hình học máy (nhận diện hình ảnh, âm thanh, tư thế) trực quan ngay trên trình duyệt mà không cần viết mã lập trình (No-Code)",
          "Sửa chữa phần cứng máy tính",
          "Đăng ký tài khoản mạng xã hội",
          "Tải các bản nhạc MP3 lậu"
        ],
        correct: 0,
        explanation: "Teachable Machine là công cụ giáo dục AI trực quan không cần viết mã (No-Code) nổi tiếng của Google giúp học sinh tiếp cận thực hành Machine Learning."
      },
      {
        question: "Để mô hình nhận diện hình ảnh huấn luyện trên Teachable Machine có độ chính xác cao và không bị nhầm lẫn khi đem ra sử dụng thực tế, nguyên tắc thu thập dữ liệu mẫu là gì?",
        options: [
          "Chụp đa dạng các góc nhìn, khoảng cách xa gần, điều kiện ánh sáng khác nhau và hậu cảnh phong phú",
          "Chỉ chụp đúng 1 tấm ảnh duy nhất",
          "Chỉ chụp trong phòng tối om",
          "Che kín ống kính camera lại khi chụp"
        ],
        correct: 0,
        explanation: "Dữ liệu mẫu càng đa dạng về góc máy, biểu cảm, ánh sáng thì mô hình càng học được các đặc trưng cốt lõi tổng quát và bền vững trước môi trường thực tế."
      },
      {
        question: "Kỹ thuật nào cho phép Teachable Machine huấn luyện mô hình nhận diện ảnh mới chỉ trong vòng vài chục giây ngay trên máy tính cá nhân?",
        options: [
          "Học chuyển giao (Transfer Learning)",
          "Học thuộc lòng từ điển",
          "Format ổ đĩa cứng",
          "Tăng tốc độ quạt gió tản nhiệt"
        ],
        correct: 0,
        explanation: "Transfer Learning tái sử dụng các tầng trích xuất đặc trưng của mạng nơ-ron MobileNet khổng lồ đã học sẵn từ hàng triệu ảnh, chỉ cần tinh chỉnh lại tầng phân loại cuối cùng."
      },
      {
        question: "Thuật ngữ 'Epoch' trong quá trình huấn luyện mô hình học máy có nghĩa là gì?",
        options: [
          "Một lượt duyệt qua toàn bộ tập dữ liệu huấn luyện của thuật toán",
          "Thời gian máy tính nghỉ ngơi",
          "Số lượng camera gắn vào máy tính",
          "Dung lượng của tệp ảnh tính bằng Megabyte"
        ],
        correct: 0,
        explanation: "Một Epoch tương ứng với một chu kỳ hoàn chỉnh mà toàn bộ dữ liệu huấn luyện được đưa qua mạng nơ-ron để cập nhật trọng số."
      }
    ]
  },
  {
    lessonNum: 9,
    id: "tiet-9",
    topicNum: 3,
    topicName: "Chủ đề 3: Kỹ nghệ nhắc lệnh & Huấn luyện AI No-Code",
    title: "Tiết 9: Thực hành huấn luyện mô hình âm thanh & tư thế (Pose Project)",
    tag: "Audio & Pose Project",
    objectives: [
      "Khám phá các dạng dữ liệu phi văn bản: Sóng âm thanh biến đổi thành Phổ âm thanh (Spectrogram) và Các điểm mốc khung xương cơ thể (Pose Landmarks).",
      "Thực hành huấn luyện Audio Project trên Teachable Machine: Phân biệt tiếng vỗ tay, tiếng huýt sáo và tiếng ồn nền (Background Noise).",
      "Thực hành huấn luyện Pose Project: Xây dựng hệ thống thị giác thông minh nhận diện tư thế ngồi học đúng / gù lưng sai tư thế.",
      "Hiểu nguyên lý hoạt động của mô hình PoseNet/MediaPipe nhận diện 17 điểm khớp xương chính trên cơ thể người (mắt, mũi, vai, khuỷu tay, đầu gối)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
          <h4 class="font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-person-rays"></i> PoseNet & 17 Điểm neo khớp xương
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Mô hình Pose không phân tích từng pixel màu sắc của da hay quần áo, mà chỉ trích xuất tọa độ (X, Y) của 17 điểm khớp nối khung xương.</li>
            <li>Nhờ vậy, thuật toán chạy cực nhanh trên điện thoại yếu và bảo vệ tối đa quyền riêng tư (không lưu ảnh mặt người dùng).</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-microphone-lines"></i> Nhận diện Âm thanh qua Phổ tần số
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Sóng âm qua Micro được biến đổi Fourier (FFT) thành một bức ảnh nhiệt phổ tần số (Spectrogram).</li>
            <li>Bắt buộc phải thu âm một lớp tiếng ồn xung quanh <strong>Background Noise</strong> (ít nhất 20 giây) để AI biết cách khử tạp âm.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Khởi tạo Pose Project trên Teachable Machine",
        content: "Chọn New Project -> <strong>Pose Project</strong> -> Tạo 2 lớp nhãn: <em>'Ngồi học thẳng lưng (Đúng)'</em> và <em>'Cúi sát mắt gù lưng (Sai)'</em>."
      },
      {
        title: "Bước 2: Thu thập dữ liệu tư thế ngồi qua webcam",
        content: "Ngồi thẳng lưng trước camera, nhấn giữ ghi lại 60 khung hình khung xương -> Ngồi gù lưng, cúi đầu sát bàn ghi lại 60 khung hình khung xương thứ hai."
      },
      {
        title: "Bước 3: Huấn luyện và trải nghiệm ứng dụng cảnh báo",
        content: "Nhấn <strong>Train Model</strong> -> Thử ngồi gù lưng xem thanh cảnh báo màu đỏ nhảy lên 99% -> Ý tưởng mở rộng: Kết nối loa phát chuông báo động nhắc nhở học sinh ngồi thẳng lưng bảo vệ cột sống!"
      }
    ],
    practice: "Thiết kế một kịch bản ứng dụng AI nhận diện âm thanh điều khiển nhà thông minh: Thu âm tiếng 'Bật đèn' (vỗ tay 2 cái) và tiếng ồn môi trường, huấn luyện trên Teachable Machine Audio.",
    quizzes: [
      {
        question: "Mô hình ước lượng tư thế cơ thể (Pose Estimation như PoseNet) trích xuất thông tin gì từ hình ảnh người trước camera?",
        options: [
          "Tọa độ không gian của các điểm mốc khớp xương chính trên cơ thể (mắt, vai, khuỷu tay, hông, đầu gối)",
          "Màu sắc bộ quần áo người đó đang mặc",
          "Số tiền có trong túi của người đó",
          "Cân nặng chính xác tính bằng gram"
        ],
        correct: 0,
        explanation: "PoseNet định vị và theo dõi 17 điểm mốc (keypoints/landmarks) khung xương trên cơ thể để phân tích cử động và tư thế."
      },
      {
        question: "Khi huấn luyện một mô hình nhận diện âm thanh (Audio Model) trên Teachable Machine, lớp dữ liệu bắt buộc đầu tiên phải thu thập là gì?",
        options: [
          "Tiếng ồn môi trường xung quanh (Background Noise)",
          "Tiếng còi xe cứu thương",
          "Một bài hát ca nhạc rock",
          "Tiếng sấm sét"
        ],
        correct: 0,
        explanation: "Background Noise (tiếng ồn nền) là mẫu âm thanh tĩnh bắt buộc để AI phân biệt được đâu là tạp âm môi trường và đâu là âm thanh lệnh mục tiêu."
      },
      {
        question: "Ứng dụng nào sau đây khai thác trực tiếp công nghệ nhận diện tư thế cơ thể (Pose Project)?",
        options: [
          "Ứng dụng cảnh báo học sinh ngồi gù lưng sai tư thế và ứng dụng đếm số lần hít đất/squat khi tập gym",
          "Phần mềm nghe nhạc trực tuyến",
          "Hộp thư điện tử Gmail",
          "Ứng dụng tra cứu từ điển bách khoa toàn thư"
        ],
        correct: 0,
        explanation: "Theo dõi khớp xương PoseNet là nền tảng hoàn hảo để đánh giá tư thế ngồi học chống cong vẹo cột sống và trợ lý thể thao đếm bài tập thể hình."
      },
      {
        question: "Lợi ích lớn về mặt bảo vệ quyền riêng tư cá nhân của mô hình phân tích tư thế PoseNet là gì?",
        options: [
          "Hệ thống chỉ xử lý và truyền đi các tọa độ số của các khớp xương, không cần lưu trữ hay gửi hình ảnh khuôn mặt thực tế lên máy chủ",
          "Tự động xóa lịch sử duyệt web",
          "Đổi mật khẩu máy tính sau mỗi 5 phút",
          "Không cần kết nối điện thoại với sạc pin"
        ],
        correct: 0,
        explanation: "Chỉ lưu trữ tọa độ toán học của các khớp xương ẩn danh giúp bảo mật tuyệt đối hình ảnh nhạy cảm của người dùng."
      }
    ]
  },

  // ==========================================
  // CHỦ ĐỀ 4: THIẾT KẾ HỆ THỐNG AI & DỰ ÁN SỐ VÌ CỘNG ĐỒNG (TIẾT 10 - 12)
  // ==========================================
  {
    lessonNum: 10,
    id: "tiet-10",
    topicNum: 4,
    topicName: "Chủ đề 4: Thiết kế hệ thống AI & Dự án số vì cộng đồng",
    title: "Tiết 10: Thiết kế ứng dụng AI giải quyết vấn đề thực tế",
    tag: "Problem Framing & AI Design",
    objectives: [
      "Nắm vững quy trình thiết kế giải pháp AI lấy con người làm trung tâm gồm 5 giai đoạn: Xác định vấn đề (Problem Framing) -> Thu thập dữ liệu -> Xây dựng mô hình -> Thiết kế giao diện tương tác (UI/UX) -> Đánh giá tác động xã hội.",
      "Biết cách đặt câu hỏi định hướng: 'Vấn đề này có thực sự cần đến AI để giải quyết không, hay chỉ cần một thuật toán điều kiện đơn giản?'.",
      "Phân tích các rủi ro tiềm ẩn (Risk Assessment): Xử lý thế nào khi AI nhận diện sai (False Positive / False Negative)?",
      "Lập kế hoạch thiết kế một sản phẩm AI học đường: Thùng rác thông minh tự động phân loại rác tái chế bằng camera AI."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
          <h4 class="font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-lightbulb"></i> Xác định bài toán (Problem Framing)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Không phải bài toán nào cũng cần AI. AI chỉ thực sự vượt trội khi bài toán có dữ liệu phức tạp, biến thiên khó viết thành quy tắc tĩnh (ví dụ: nhận diện giọng nói, phân loại ảnh).</li>
            <li>Nếu bài toán tính tiền điện theo bậc thang rõ ràng: Chỉ cần viết công thức <code>IF</code>, không cần dùng AI tốn kém!</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-circle-check"></i> Thiết kế phương án dự phòng khi AI sai
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Mọi hệ thống AI đều có xác suất sai số nhất định.</li>
            <li>Hệ thống thông minh luôn có cơ chế: Nếu độ tin cậy < 70%, chuyển quyền quyết định cho con người (Human-in-the-loop) hoặc hiển thị nút cho phép người dùng tự chỉnh sửa.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Chọn một vấn đề nhức nhối trong trường học",
        content: "Ví dụ: 'Nhiều bạn học sinh vứt rác lẫn lộn giữa rác hữu cơ, rác nhựa và pin độc hại tại căng tin trường'."
      },
      {
        title: "Bước 2: Phác thảo giải pháp ứng dụng AI",
        content: "Lắp đặt 1 camera nhỏ trên nắp thùng rác kết nối mô hình nhận diện Teachable Machine phân loại: Nhựa (mở nắp xanh), Hữu cơ (mở nắp vàng), Pin/Kim loại (mở nắp đỏ)."
      },
      {
        title: "Bước 3: Lập kế hoạch dữ liệu và xử lý ngoại lệ",
        content: "Cần thu thập ảnh vỏ hộp sữa bẹp, chai nước khoáng, túi nilon. Xử lý khi gặp vật thể lạ AI chưa từng học: Hệ thống phát âm thanh hỏi lại người dùng để học thêm."
      }
    ],
    practice: "Hãy chọn 1 vấn đề khó khăn trong học tập của bản thân (ví dụ: Quên từ vựng tiếng Anh, lúng túng khi giải bài tập Hóa học) và phác thảo một ý tưởng ứng dụng AI hỗ trợ em khắc phục.",
    quizzes: [
      {
        question: "Bước đầu tiên và quan trọng nhất trong quy trình thiết kế một giải pháp ứng dụng AI là gì?",
        options: [
          "Xác định rõ ràng bài toán thực tế cần giải quyết và thấu hiểu nhu cầu của người sử dụng (Problem Framing)",
          "Đi mua chiếc máy tính đắt tiền nhất thị trường",
          "Viết ngay hàng ngàn dòng code lập trình phức tạp",
          "Đi vay tiền ngân hàng"
        ],
        correct: 0,
        explanation: "Thấu hiểu sâu sắc bản chất vấn đề và nhu cầu con người là bước tiên quyết để định hình giải pháp AI có thực sự hữu ích và khả thi hay không."
      },
      {
        question: "Trường hợp nào sau đây là bài toán KHÔNG CẦN THIẾT và lãng phí khi cố tình sử dụng AI?",
        options: [
          "Tính toán hóa đơn tiền điện sinh hoạt theo biểu giá bậc thang cố định của nhà nước",
          "Nhận diện khuôn mặt học sinh điểm danh tự động",
          "Phân loại hàng nghìn ảnh chụp khối u phổi",
          "Xe ô tô tự nhận diện vật cản trên đường"
        ],
        correct: 0,
        explanation: "Tính hóa đơn bậc thang là công thức toán học logic rõ ràng $100\\%$, chỉ cần các câu lệnh rẽ nhánh thông thường là hoàn hảo, dùng AI vừa tốn kém vừa có rủi ro sai số."
      },
      {
        question: "Cơ chế 'Human-in-the-loop' (Con người tham gia vào vòng lặp quyết định) trong thiết kế hệ thống AI có ý nghĩa gì?",
        options: [
          "Khi AI gặp trường hợp dữ liệu khó có độ tin cậy thấp, hệ thống sẽ chuyển quyền can thiệp cho con người xác nhận để đảm bảo an toàn tuyệt đối",
          "Bắt con người làm việc thay cho máy tính toàn thời gian",
          "Một trò chơi điện tử đuổi bắt",
          "Tắt toàn bộ hệ thống điện lưới"
        ],
        correct: 0,
        explanation: "Human-in-the-loop đảm bảo sự kết hợp giữa tốc độ của AI và trí tuệ, trách nhiệm đạo đức của con người trong các tình huống nhạy cảm."
      },
      {
        question: "Khi thiết kế một sản phẩm AI cho người dùng cuối, yếu tố nào quyết định sự thân thiện và tin tưởng của người sử dụng?",
        options: [
          "Giao diện dễ dùng, có giải thích lý do vì sao AI đưa ra kết quả đó và cho phép người dùng sửa đổi nếu AI đoán sai",
          "Giao diện toàn chữ đen màn hình đen như hacker",
          "Bắt người dùng xem quảng cáo 1 tiếng",
          "Không hiển thị bất kỳ nút bấm nào"
        ],
        correct: 0,
        explanation: "Tính minh bạch (Explainable AI) và khả năng trao quyền kiểm soát cho người dùng tạo nên sự gắn kết và niềm tin vào giải pháp công nghệ."
      }
    ]
  },
  {
    lessonNum: 11,
    id: "tiet-11",
    topicNum: 4,
    topicName: "Chủ đề 4: Thiết kế hệ thống AI & Dự án số vì cộng đồng",
    title: "Tiết 11: Nghề nghiệp tương lai & Kỹ năng số trong kỷ nguyên AI",
    tag: "Future of Work & Skills",
    objectives: [
      "Nhìn nhận toàn diện về tác động sâu rộng của làn sóng AI đối với thị trường lao động toàn cầu: Một số công việc lặp lại sẽ biến mất, nhưng hàng triệu ngành nghề mới đầy sáng tạo sẽ ra đời.",
      "Khám phá các vị trí nghề nghiệp công nghệ hấp dẫn: Kỹ sư Dữ liệu (Data Scientist), Kỹ sư Học máy (ML Engineer), Kỹ sư Kỹ nghệ nhắc lệnh (Prompt Engineer), Chuyên gia Đạo đức AI (AI Ethics Officer).",
      "Nhận diện 4 nhóm kỹ năng vàng không thể bị AI thay thế: Tư duy phản biện (Critical Thinking), Năng lực sáng tạo nguyên bản (Creativity), Trí tuệ cảm xúc & Thấu cảm (Empathy) và Kỹ năng thích ứng linh hoạt (Adaptability).",
      "Xây dựng tâm thế học tập suốt đời (Lifelong Learning) và làm chủ tư duy cộng tác cùng AI (AI-Human Collaboration)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
          <h4 class="font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-briefcase"></i> Các ngành nghề mới bùng nổ cùng AI
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>AI Prompt Engineer:</strong> Chuyên gia thiết kế chuỗi câu lệnh tối ưu hóa hiệu suất của các mô hình GenAI cho doanh nghiệp.</li>
            <li><strong>AI Ethics Specialist:</strong> Giám sát thuật toán chống thiên vị và tuân thủ luật bảo vệ quyền con người.</li>
            <li><strong>Healthcare AI Specialist:</strong> Ứng dụng AI phân tích dữ liệu gien và dược phẩm sinh học.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-user-astronaut"></i> 'AI sẽ không thay thế bạn, nhưng...'
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><em>'AI sẽ không thay thế con người, nhưng người biết sử dụng AI thành thạo sẽ thay thế người không biết dùng AI!'</em></li>
            <li>Kỹ năng cốt lõi của thế hệ học sinh Gen Z: Biết đặt câu hỏi sắc sảo, kiểm chứng thông tin và tận dụng AI như một trợ lý siêu năng suất.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Tự đánh giá năng lực số của bản thân",
        content: "Liệt kê các kỹ năng công nghệ em đã thành thạo: Sử dụng công cụ AI, lập trình cơ bản, tìm kiếm thông tin khoa học, bảo mật mật khẩu tài khoản."
      },
      {
        title: "Bước 2: Tìm hiểu ngành nghề ước mơ của em kết hợp với AI",
        content: "Nếu em muốn làm Bác sĩ: AI hỗ trợ đọc phim MRI; Nếu em muốn làm Họa sĩ/Thiết kế: AI gợi ý ý tưởng moodboard; Nếu em muốn làm Luật sư: AI tra cứu tiền lệ án văn bản."
      },
      {
        title: "Bước 3: Lập kế hoạch rèn luyện 4 kỹ năng không thể bị thay thế",
        content: "Rèn luyện tư duy phản biện qua việc đặt câu hỏi 'Tại sao?', tập giao tiếp thấu cảm chia sẻ với bạn bè và không ngừng cập nhật công nghệ mới."
      }
    ],
    practice: "Hãy chọn 1 nghề nghiệp mà em mong muốn theo đuổi trong tương lai (ví dụ: Kỹ sư nông nghiệp, Giáo viên, Nhà thiết kế thời trang) và viết 3 cách mà AI sẽ thay đổi diện mạo công việc đó trong 10 năm tới.",
    quizzes: [
      {
        question: "Phát biểu nổi tiếng nào phản ánh chính xác nhất về tương lai của thị trường việc làm trong kỷ nguyên Trí tuệ nhân tạo?",
        options: [
          "AI sẽ không thay thế con người, nhưng người biết sử dụng AI sẽ thay thế người không biết sử dụng AI",
          "Tất cả con người sẽ bị thất nghiệp và không còn việc gì để làm",
          "AI sẽ biến mất trong vòng 1 năm tới",
          "Chỉ có các kỹ sư máy tính mới cần học về AI"
        ],
        correct: 0,
        explanation: "AI là công cụ khuếch đại năng suất; người lao động có kỹ năng phối hợp hiệu quả với AI sẽ có lợi thế cạnh tranh vượt trội trong mọi ngành nghề."
      },
      {
        question: "Năng lực nào của con người dưới đây là thế mạnh độc tôn, khó có thể bị AI thay thế hoàn toàn?",
        options: [
          "Trí tuệ cảm xúc, sự thấu cảm sâu sắc giữa người với người và tư duy đạo đức nhân văn",
          "Khả năng ghi nhớ hàng tỷ con số",
          "Tốc độ tính toán các phép nhân ma trận",
          "Khả năng làm việc liên tục 24/7 không cần nghỉ ngơi"
        ],
        correct: 0,
        explanation: "Cảm xúc chân thành, sự thấu cảm tâm lý, tư duy sáng tạo nguyên bản và phán đoán đạo đức là những phẩm chất nhân tính mà máy móc không thể có được."
      },
      {
        question: "Vị trí công việc mới nổi nào chuyên nghiên cứu cách xây dựng và tinh chỉnh các câu lệnh để giao tiếp và khai thác hiệu quả nhất các mô hình AI tạo sinh?",
        options: [
          "Kỹ sư Kỹ nghệ nhắc lệnh (Prompt Engineer)",
          "Thợ sửa ống nước",
          "Người quản kho vật tư",
          "Tài xế lái xe tải"
        ],
        correct: 0,
        explanation: "Prompt Engineer là ngành nghề mới có thu nhập cao chuyên tối ưu hóa cấu trúc câu nhắc cho các hệ sinh thái LLM của doanh nghiệp."
      },
      {
        question: "Để chuẩn bị hành trang tốt nhất bước vào kỷ nguyên số và AI, học sinh THPT cần rèn luyện tâm thế học tập nào?",
        options: [
          "Học tập suốt đời (Lifelong Learning), chủ động rèn luyện tư duy phản biện và tinh thần thích ứng linh hoạt với công nghệ mới",
          "Chỉ học thuộc lòng các câu hỏi để thi tốt nghiệp xong rồi quên hết",
          "Né tránh hoàn toàn không đụng vào máy tính",
          "Phó mặc toàn bộ suy nghĩ cho điện thoại"
        ],
        correct: 0,
        explanation: "Công nghệ AI phát triển theo hàm mũ từng ngày; chỉ có tinh thần học tập suốt đời và năng lực tự học mới giúp chúng ta luôn làm chủ tương lai."
      }
    ]
  },
  {
    lessonNum: 12,
    id: "tiet-12",
    topicNum: 4,
    topicName: "Chủ đề 4: Thiết kế hệ thống AI & Dự án số vì cộng đồng",
    title: "Tiết 12: Dự án Capstone: Xây dựng giải pháp AI vì cộng đồng (AI for Social Good)",
    tag: "Capstone Project",
    objectives: [
      "Vận dụng tổng hợp toàn bộ tri thức và kỹ năng trong 11 tiết học trước để xây dựng một sản phẩm dự án AI hoàn chỉnh phục vụ nhà trường hoặc cộng đồng xã hội.",
      "Triển khai dự án theo nhóm 3-4 học sinh: Lựa chọn 1 trong các chủ đề ý nghĩa (Bảo vệ môi trường, Hỗ trợ người khiếm thị/khuyết tật, Chăm sóc sức khỏe học đường, Bảo tồn di sản văn hóa).",
      "Xây dựng và kiểm thử mô hình AI thực tế (sử dụng Teachable Machine hoặc ứng dụng AI tạo sinh có thiết kế Prompt chuẩn mực).",
      "Thuyết trình báo cáo dự án trước hội đồng lớp học và đánh giá chéo theo chuẩn mực Rubrics 4 miền năng lực của Bộ GD&ĐT."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
          <h4 class="font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-earth-americas"></i> Phong trào 'AI for Social Good'
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Sử dụng sức mạnh công nghệ AI để giải quyết các vấn đề cấp thiết của nhân loại: Giảm phát thải khí nhà kính, cảnh báo thiên tai sạt lở, phát hiện sớm bệnh ung thư, hỗ trợ giao tiếp cho người câm điếc bằng nhận diện ngôn ngữ ký hiệu bàn tay.</li>
            <li>Học sinh lớp 10 hoàn toàn có thể tạo ra các nguyên mẫu (Prototypes) mô hình AI nhỏ nhưng mang ý nghĩa nhân văn to lớn!</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-list-check"></i> Tiêu chí đánh giá Rubrics Bộ GD&ĐT (100 điểm)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>1. Tư duy lấy con người làm trung tâm (25đ):</strong> Tính thiết thực và giải quyết đúng nỗi đau của người dùng mục tiêu.</li>
            <li><strong>2. Đạo đức & An toàn số (25đ):</strong> Tôn trọng bản quyền, dữ liệu không thiên vị và bảo mật danh tính.</li>
            <li><strong>3. Kỹ thuật & Chất lượng mô hình AI (30đ):</strong> Độ chính xác cao, dữ liệu mẫu phong phú và hoạt động ổn định.</li>
            <li><strong>4. Thuyết trình & Hợp tác nhóm (20đ):</strong> Trình bày mạch lạc, tự tin và phối hợp nhóm hiệu quả.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Giai đoạn 1: Họp nhóm hình thành ý tưởng giải pháp",
        content: "Chọn 1 đề tài cụ thể. Ví dụ: 'Ứng dụng AI phân loại lá cây bị sâu bệnh trong vườn trường' hoặc 'Chatbot gia sư ảo giải đáp thắc mắc phương pháp học tập cho học sinh lớp 10'."
      },
      {
        title: "Giai đoạn 2: Thu thập dữ liệu và xây dựng mô hình",
        content: "Chụp 150 ảnh lá khỏe và lá sâu bệnh -> Huấn luyện mô hình Teachable Machine -> Kiểm tra độ chính xác đạt trên 90% -> Viết tài liệu hướng dẫn sử dụng."
      },
      {
        title: "Giai đoạn 3: Báo cáo công chiếu sản phẩm",
        content: "Thiết kế slide thuyết trình 5 phút gồm: Vấn đề gặp phải -> Giải pháp AI -> Trình diễn sản phẩm trực tiếp (Live Demo) -> Bài học đạo đức và định hướng phát triển."
      }
    ],
    practice: "Theo nhóm 3-4 bạn, hoàn thiện hồ sơ dự án Capstone gồm 1 slide thuyết trình và liên kết mô hình AI đã huấn luyện, sẵn sàng cho buổi báo cáo tổng kết môn học.",
    quizzes: [
      {
        question: "Mục đích cốt lõi cao đẹp nhất của phong trào 'AI vì lợi ích cộng đồng' (AI for Social Good) là gì?",
        options: [
          "Ứng dụng sức mạnh trí tuệ nhân tạo để giải quyết các vấn đề xã hội, môi trường, y tế và nâng cao chất lượng cuộc sống con người",
          "Chế tạo vũ khí quân sự tự động",
          "Kiếm thật nhiều tiền bằng mọi thủ đoạn",
          "Chỉ phục vụ cho các tập đoàn đa quốc gia độc quyền"
        ],
        correct: 0,
        explanation: "AI for Social Good hướng công nghệ vào giải quyết các thách thức lớn của nhân loại như biến đổi khí hậu, giáo dục bình đẳng và sức khỏe cộng đồng."
      },
      {
        question: "Khi đánh giá một dự án AI học đường theo khung năng lực của Bộ GD&ĐT, tiêu chí nào thể hiện rõ nét tính nhân văn và an toàn?",
        options: [
          "Dự án tuân thủ nghiêm ngặt các nguyên tắc đạo đức AI, bảo vệ quyền riêng tư cá nhân và không chứa định kiến thiên lệch",
          "Dự án phải dùng máy tính cấu hình mạnh nhất",
          "Mô hình phải có dung lượng nặng nhất có thể",
          "Chỉ cần slide thuyết trình thật dài trên 100 trang"
        ],
        correct: 0,
        explanation: "Đạo đức và an toàn thông tin là một trong 4 miền năng lực cốt lõi được Bộ GD&ĐT đặc biệt nhấn mạnh trong Quyết định 2422/QĐ-BGDĐT."
      },
      {
        question: "Trong buổi báo cáo dự án trước hội đồng lớp học, phần nội dung nào giúp chứng minh tính khả thi và chất lượng thực tế của giải pháp nhất?",
        options: [
          "Phần chạy thử nghiệm trực tiếp sản phẩm (Live Demo) trên các mẫu dữ liệu thực tế tại lớp",
          "Phần đọc thuộc lòng các định nghĩa trong sách",
          "Phần chiếu video ca nhạc giải trí",
          "Phần cảm ơn người thân"
        ],
        correct: 0,
        explanation: "Phần chạy thử nghiệm Live Demo trực quan là bằng chứng thép khẳng định mô hình đã được huấn luyện thành công và hoạt động ổn định trong thực tế."
      },
      {
        question: "Sau khi hoàn thành 12 tiết học chuyên đề Trí tuệ nhân tạo lớp 10, thành quả lớn nhất mà học sinh đạt được là gì?",
        options: [
          "Xây dựng được tư duy số hiện đại, hiểu bản chất cách AI hoạt động, biết sử dụng AI an toàn có đạo đức và tự tin sáng tạo công nghệ phục vụ cuộc sống",
          "Trở thành một lập trình viên siêu đẳng kiếm hàng triệu USD ngay lập tức",
          "Chỉ nhớ được vài câu lệnh đơn giản",
          "Bỏ hết các môn học khác chỉ ngồi nghịch máy tính"
        ],
        correct: 0,
        explanation: "Khóa học 12 tiết trang bị cho học sinh nền tảng tư duy số vững chắc, năng lực đạo đức trách nhiệm và kỹ năng công nghệ cốt lõi của công dân toàn cầu."
      }
    ]
  }
];

module.exports = lessons;
