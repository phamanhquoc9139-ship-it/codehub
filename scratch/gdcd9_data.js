// gdcd9_data.js - Dữ liệu 10 bài học Giáo dục công dân 9 (Kết nối tri thức)

const gdcd9Lessons = [
  {
    id: "bai-1",
    number: "Bài 1",
    title: "Sống có lí tưởng",
    sub: "Khái niệm lí tưởng, ý nghĩa, lí tưởng cách mạng của thanh niên Việt Nam và quy trình xác định mục tiêu cuộc đời.",
    duration: "45 phút",
    diagramKey: "soDoLiTuong",
    objectives: "Hiểu được thế nào là lí tưởng sống; phân tích được ý nghĩa của sống có lí tưởng đối với bản thân và đất nước; xác định được lí tưởng sống cao đẹp của thanh niên Việt Nam trong kỉ nguyên mới; xây dựng kế hoạch hành động cụ thể.",
    quote: "Không có lí tưởng, cuộc đời sẽ trôi dạt như con thuyền không la bàn giữa đại dương giông bão.",
    sections: [
      {
        title: "1. Khái niệm Lí tưởng & Sống có lí tưởng",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-2 text-slate-700 dark:text-slate-300">
            <li><strong>Lí tưởng</strong> là mục đích cao đẹp nhất, hoàn thiện nhất mà con người luôn khao khát vươn tới và hướng mọi suy nghĩ, hành vi vào đó.</li>
            <li><strong>Sống có lí tưởng</strong> là biết xác định cho mình mục đích sống cao đẹp, xây dựng kế hoạch rõ ràng và kiên trì, nỗ lực hành động để đạt được mục tiêu, cống hiến cho sự phồn vinh của cộng đồng, Tổ quốc và nhân loại.</li>
          </ul>
        `
      },
      {
        title: "2. Ý nghĩa to lớn của sống có lí tưởng",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
            <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-800 dark:text-blue-300 font-bold block mb-1">Phương hướng &amp; Động lực</strong>
              <p>Lí tưởng đóng vai trò như ngọn hải đăng soi đường, truyền sức mạnh và ý chí quật cường giúp con người vượt qua mọi nghịch cảnh, thất bại tạm thời.</p>
            </div>
            <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <strong class="text-indigo-800 dark:text-indigo-300 font-bold block mb-1">Hoàn thiện nhân cách</strong>
              <p>Thúc đẩy mỗi cá nhân không ngừng học tập, rèn luyện phẩm chất đạo đức, nâng cao năng lực bản thân, được gia đình và xã hội tin yêu, kính trọng.</p>
            </div>
            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-800 dark:text-emerald-300 font-bold block mb-1">Phát triển đất nước</strong>
              <p>Tạo nên sức mạnh đại đoàn kết dân tộc, đưa non sông gấm vóc bước vào kỉ nguyên độc lập, tự chủ, giàu mạnh, văn minh và sánh vai cùng các cường quốc.</p>
            </div>
          </div>
        `
      },
      {
        title: "3. Lí tưởng của thanh niên Việt Nam hiện nay & Trách nhiệm học sinh",
        content: `
          <p class="mb-2 text-xs text-slate-700 dark:text-slate-300"><strong>Lí tưởng cách mạng:</strong> Phấn đấu vì mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội; dân giàu, nước mạnh, dân chủ, công bằng, văn minh; trở thành công dân toàn cầu có bản lĩnh, tri thức và đạo đức trong sáng.</p>
          <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs space-y-1">
            <strong class="text-amber-800 dark:text-amber-300 font-bold block mb-1">Hành động thiết thực của học sinh lớp 9:</strong>
            <p>• Xác định mục tiêu học tập cụ thể, phấn đấu thi đỗ vào trường THPT hoặc hướng nghiệp phù hợp.</p>
            <p>• Rèn luyện thể lực dẻo dai, giữ gìn lối sống lành mạnh, bài trừ thói lười biếng và tệ nạn xã hội.</p>
            <p>• Tích cực tham gia các phong trào Đoàn - Đội, tình nguyện vì cộng đồng, có tinh thần tương thân tương ái.</p>
          </div>
        `
      }
    ],
    practiceList: [
      "Viết bức thư gửi cho chính mình 5 năm sau (năm 20 tuổi) mô tả ước mơ và lí tưởng sống mà em quyết tâm đạt được.",
      "Lập kế hoạch hành động 3 tháng để cải thiện một môn học còn yếu hoặc một kĩ năng mềm còn thiếu.",
      "Thảo luận nhóm về câu nói của Bác Hồ: 'Thanh niên là người chủ tương lai của nước nhà. Nước nhà thịnh hay suy, yếu hay mạnh một phần lớn là do các thanh niên'."
    ],
    quizzes: [
      {
        question: "Khái niệm 'Lí tưởng sống' được định nghĩa đầy đủ và chuẩn xác nhất là gì?",
        options: [
          "Mục đích cao đẹp nhất mà con người hướng tới, lập kế hoạch và quyết tâm phấn đấu cống hiến cho xã hội",
          "Ước muốn kiếm được thật nhiều tiền bằng mọi giá",
          "Chỉ lo cho sự an nhàn, hưởng thụ của riêng cá nhân mình",
          "Lối sống buông thả trôi dạt theo số phận mà không cần mục tiêu"
        ],
        correct: 0,
        explain: "Lí tưởng sống là mục đích cao đẹp định hướng cho mọi hành vi, tạo động lực phấn đấu cống hiến cho cộng đồng và đất nước."
      },
      {
        question: "Lí tưởng sống cốt lõi của thanh niên và thế hệ trẻ Việt Nam trong thời kì hiện nay là gì?",
        options: [
          "Phấn đấu vì độc lập dân tộc gắn liền với chủ nghĩa xã hội, xây dựng đất nước dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
          "Chỉ tìm cách ra nước ngoài định cư",
          "Tránh xa mọi hoạt động tập thể và cộng đồng",
          "Sống dựa dẫm hoàn toàn vào sự chu cấp của gia đình"
        ],
        correct: 0,
        explain: "Lí tưởng cao cả của thanh niên Việt Nam là phấn đấu xây dựng và bảo vệ vững chắc Tổ quốc Việt Nam XHCN giàu mạnh."
      },
      {
        question: "Hành động nào sau đây của học sinh lớp 9 thể hiện rõ nét phẩm chất của người sống có lí tưởng?",
        options: [
          "Xác định rõ mục tiêu học tập, kiên trì tự học, rèn luyện thể chất và tích cực giúp đỡ bạn bè",
          "Bỏ bê học hành để chơi game thâu đêm suốt sáng",
          "Thờ ơ trước các hoạt động phong trào của trường lớp",
          "Ghen tị và nói xấu khi thấy bạn khác đạt điểm cao"
        ],
        correct: 0,
        explain: "Chăm chỉ học tập, rèn luyện đạo đức sức khoẻ và tham gia hoạt động tập thể là biểu hiện cụ thể của sống có mục đích cao đẹp."
      },
      {
        question: "Ý nghĩa của việc sống có lí tưởng đối với sự phát triển của mỗi cá nhân là gì?",
        options: [
          "Tạo phương hướng, động lực vượt qua thử thách và hoàn thiện nhân cách bản thân",
          "Làm cho con người tự mãn và không cần cố gắng nữa",
          "Khiến cuộc sống trở nên nhàm chán và căng thẳng",
          "Không mang lại bất kì giá trị thực tế nào"
        ],
        correct: 0,
        explain: "Lí tưởng sống giúp cá nhân định hướng hành động đúng đắn, có nghị lực vươn lên và hoàn thiện nhân cách cao đẹp."
      }
    ]
  },
  {
    id: "bai-2",
    number: "Bài 2",
    title: "Khoan dung",
    sub: "Khái niệm rộng lòng tha thứ, tôn trọng khác biệt, ý nghĩa nhân văn và phân biệt khoan dung với dung túng việc sai trái.",
    duration: "45 phút",
    diagramKey: "soDoKhoanDung",
    objectives: "Hiểu được thế nào là khoan dung và biểu hiện của lòng khoan dung; phân biệt được khoan dung với dung túng, bao che khuyết điểm; giải thích được ý nghĩa của khoan dung trong cuộc sống; rèn luyện sự rộng lượng, chân thành.",
    quote: "Khoan dung là bông hoa ngát hương toả ra từ tâm hồn cao thượng, xoá tan hận thù và nối lại những nhịp cầu yêu thương.",
    sections: [
      {
        title: "1. Khái niệm & Biểu hiện của Khoan dung",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Khoan dung</strong> là tấm lòng rộng lượng tha thứ cho người khác hoặc bản thân khi họ đã nhận ra lỗi lầm, có thái độ ăn năn hối cải và quyết tâm sửa chữa.</li>
            <li><strong>Biểu hiện:</strong> Biết tha thứ và cho người có lỗi cơ hội sửa sai; biết lắng nghe, tôn trọng sự khác biệt về cá tính, sở thích; không định kiến, hẹp hòi; không cố chấp hay ghi thù chuốc oán.</li>
          </ul>
        `
      },
      {
        title: "2. Ranh giới giữa Khoan dung và Dung túng, Bao che",
        content: `
          <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 text-xs space-y-2">
            <strong class="text-rose-800 dark:text-rose-300 font-bold block mb-1"><i class="fa-solid fa-triangle-exclamation"></i> Khoan dung KHÔNG ĐỒNG NGHĨA với dung túng hay bao che:</strong>
            <p>• <em>Dung túng, bao che:</em> Là nhắm mắt làm ngơ, thoả hiệp hoặc che giấu hành vi vi phạm pháp luật, vô kỉ luật, gây tổn hại cho người khác và xã hội.</p>
            <p>• Người có lòng khoan dung chân chính phải biết phân biệt đúng - sai, kiên quyết phê phán hành vi sai trái nhưng chân thành giúp đỡ người phạm lỗi sửa chữa sai lầm.</p>
          </div>
        `
      },
      {
        title: "3. Ý nghĩa và Cách rèn luyện lòng khoan dung",
        content: `
          <div class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <p>• <strong>Ý nghĩa:</strong> Giúp các mối quan hệ xã hội trở nên lành mạnh, tốt đẹp; giảm bớt căng thẳng xung đột; người được tha thứ có niềm tin làm lại cuộc đời; xã hội tràn ngập tình nhân ái.</p>
            <p>• <strong>Rèn luyện:</strong> Học cách lắng nghe và đặt mình vào hoàn cảnh của người khác (thấu cảm); không chấp vặt những lỗi lầm nhỏ; dũng cảm nhận lỗi và xin lỗi khi bản thân làm sai.</p>
          </div>
        `
      }
    ],
    practiceList: [
      "Kể lại một lần em đã tha thứ cho lỗi lầm của bạn mình và cảm xúc của em sau khi làm điều đó.",
      "Xử lí tình huống: Nếu bạn thân của em trót lấy trộm đồ của bạn khác và kể cho em nghe, em sẽ ứng xử như thế nào cho đúng tinh thần khoan dung?",
      "Thực hành viết một lời xin lỗi chân thành gửi tới một người mà em từng vô tình làm tổn thương."
    ],
    quizzes: [
      {
        question: "Hành vi nào sau đây là biểu hiện chuẩn mực của lòng khoan dung?",
        options: [
          "Tha thứ và động viên bạn khi bạn đã thành thật nhận lỗi và cố gắng sửa đổi",
          "Bao che hành vi quay cóp trong giờ kiểm tra của bạn thân",
          "Ghi sổ đen nhớ mãi lỗi lầm của người khác để chờ cơ hội trả thù",
          "Ép buộc mọi người phải có cùng sở thích và quan điểm giống hệt mình"
        ],
        correct: 0,
        explain: "Khoan dung là rộng lòng tha thứ cho người biết nhận lỗi và sửa sai, giúp họ có cơ hội tiến bộ."
      },
      {
        question: "Khoan dung KHÁC BIỆT hoàn toàn với thái độ nào sau đây?",
        options: [
          "Dung túng, bao che và thoả hiệp với những hành vi sai trái, vi phạm pháp luật",
          "Biết lắng nghe và tôn trọng cá tính của người khác",
          "Sự rộng lượng và nhân ái",
          "Khả năng thấu cảm và sẻ chia"
        ],
        correct: 0,
        explain: "Khoan dung không có nghĩa là nhắm mắt làm ngơ hay bao che cho cái xấu, cái ác gây hại cho cộng đồng."
      },
      {
        question: "Ý nghĩa của lòng khoan dung đối với các mối quan hệ xã hội là gì?",
        options: [
          "Làm cho các mối quan hệ trở nên gắn kết, ấm áp, giảm bớt thù hận và xung đột",
          "Làm cho kẻ xấu tha hồ lấn tới mà không sợ bị trừng phạt",
          "Thể hiện sự nhu nhược và yếu đuối của con người",
          "Không có bất kì tác dụng nào"
        ],
        correct: 0,
        explain: "Khoan dung hoá giải hận thù, tạo môi trường sống nhân văn, gắn kết tình đoàn kết giữa người với người."
      },
      {
        question: "Khi bạn cùng lớp vô tình làm đổ mực làm bẩn chiếc áo đồng phục mới của em nhưng bạn đã hối hận xin lỗi, em nên làm gì?",
        options: [
          "Mỉm cười chấp nhận lời xin lỗi, nhắc bạn cẩn thận hơn và cùng nhau xử lí vết mực",
          "Mắng chửi bạn thậm tệ trước cả lớp",
          "Đòi bạn phải đền ngay một chiếc áo đắt tiền gấp đôi",
          "Cầm lọ mực hắt trả thù lại vào áo bạn"
        ],
        correct: 0,
        explain: "Hành vi tha thứ chân thành, cảm thông trước sự cố vô ý là biểu hiện đẹp đẽ của lòng khoan dung học đường."
      }
    ]
  },
  {
    id: "bai-3",
    number: "Bài 3",
    title: "Tích cực tham gia các hoạt động cộng đồng",
    sub: "5 mảng hoạt động cộng đồng, ý nghĩa cá nhân - xã hội, quy trình lập kế hoạch và tinh thần trách nhiệm của học sinh.",
    duration: "45 phút",
    diagramKey: "soDoCongDong",
    objectives: "Nêu được khái niệm và các hình thức hoạt động cộng đồng; phân tích được ý nghĩa đối với cá nhân và xã hội; tự giác, chủ động tham gia hoạt động cộng đồng phù hợp lứa tuổi; biết lập kế hoạch hoạt động nhóm.",
    quote: "Sống là cho, đâu chỉ nhận riêng mình — mỗi hành động vì cộng đồng thắp sáng một niềm tin yêu cuộc sống.",
    sections: [
      {
        title: "1. Khái niệm & Các hình thức hoạt động cộng đồng",
        content: `
          <p class="mb-2 text-xs text-slate-700 dark:text-slate-300"><strong>Hoạt động cộng đồng</strong> là những hoạt động do cá nhân, tổ chức phát động và triển khai nhằm mang lại lợi ích chung, nâng cao chất lượng đời sống văn hoá, tinh thần và vật chất cho cộng đồng.</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              <strong>• Hoạt động nhân đạo, từ thiện:</strong> Giúp đỡ người tàn tật, trẻ em mồ côi, đồng bào bão lũ, hiến máu tình nguyện.
            </div>
            <div class="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
              <strong>• Đền ơn đáp nghĩa:</strong> Chăm sóc nghĩa trang liệt sĩ, phụng dưỡng Mẹ Việt Nam Anh hùng, thăm hỏi thương binh.
            </div>
            <div class="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800">
              <strong>• Bảo vệ môi trường:</strong> Dọn dẹp rác bờ biển, trồng cây gây rừng, phong trào ngày Chủ nhật xanh.
            </div>
            <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
              <strong>• Giữ gìn bản sắc văn hoá:</strong> Trùng tu di tích lịch sử, bảo tồn lễ hội truyền thống, bài trừ tệ nạn xã hội.
            </div>
          </div>
        `
      },
      {
        title: "2. Ý nghĩa to lớn đối với Cá nhân và Cộng đồng",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Đối với cá nhân:</strong> Mở rộng thế giới quan, rèn luyện kĩ năng giao tiếp, làm việc nhóm, nâng cao tinh thần trách nhiệm, sống vị tha và được mọi người tôn trọng.</li>
            <li><strong>Đối với xã hội:</strong> Kết nối các tầng lớp nhân dân, lan toả năng lượng tích cực, phát huy sức mạnh khối đại đoàn kết, bảo tồn truyền thống nhân ái 'lá lành đùm lá rách'.</li>
          </ul>
        `
      },
      {
        title: "3. Quy trình lập kế hoạch hoạt động cộng đồng của học sinh",
        content: `
          <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
            <p>1. <strong>Xác định chủ đề &amp; mục đích:</strong> Tên hoạt động rõ ràng (ví dụ: 'Áo ấm mùa đông tặng bạn vùng cao').</p>
            <p>2. <strong>Liệt kê công việc &amp; phân công:</strong> Phân công cụ thể theo sở trường của từng thành viên.</p>
            <p>3. <strong>Thời gian, địa điểm &amp; kinh phí:</strong> Lập lộ trình chi tiết và dự trù nguồn lực minh bạch.</p>
            <p>4. <strong>Triển khai &amp; Đánh giá:</strong> Thực hiện kỉ luật, tổng kết bài học kinh nghiệm và báo cáo kết quả.</p>
          </div>
        `
      }
    ],
    practiceList: [
      "Lập kế hoạch một buổi làm sạch khuôn viên trường học hoặc nhà bia tưởng niệm liệt sĩ tại địa phương.",
      "Thu gom sách báo cũ, quần áo không dùng để ủng hộ các bạn học sinh có hoàn cảnh khó khăn.",
      "Viết nhật kí cảm nghĩ sau một lần tham gia hoạt động tình nguyện do Đoàn/Đội phát động."
    ],
    quizzes: [
      {
        question: "Hoạt động nào sau đây thuộc nhóm hoạt động 'Đền ơn đáp nghĩa' trong cộng đồng?",
        options: [
          "Chăm sóc nghĩa trang liệt sĩ và thăm hỏi thương binh, Mẹ Việt Nam Anh hùng",
          "Đi xem phim chiếu rạp cùng gia đình",
          "Mua sắm quần áo thời trang cá nhân",
          "Kinh doanh bán hàng kiếm lợi nhuận"
        ],
        correct: 0,
        explain: "Chăm sóc nghĩa trang và phụng dưỡng Mẹ VNAH thể hiện đạo lí truyền thống 'Uống nước nhớ nguồn' của dân tộc."
      },
      {
        question: "Tham gia các hoạt động cộng đồng đem lại lợi ích lớn nhất nào cho sự phát triển của bản thân học sinh?",
        options: [
          "Mở rộng vốn sống, rèn luyện kĩ năng mềm, nâng cao trách nhiệm xã hội và được mọi người tin yêu",
          "Được miễn tất cả các bài kiểm tra văn hoá",
          "Để được khoe khoang trên mạng xã hội mà không cần làm thật",
          "Để trốn tránh công việc phụ giúp gia đình"
        ],
        correct: 0,
        explain: "Hoạt động cộng đồng giúp học sinh hoàn thiện nhân cách, thấu hiểu cuộc sống và trau dồi kĩ năng làm việc nhóm."
      },
      {
        question: "Khi tham gia một hoạt động bảo vệ môi trường khu dân cư do Đoàn trường phát động, thái độ đúng đắn là gì?",
        options: [
          "Chủ động, tự giác, hoàn thành tốt nhiệm vụ được giao và vận động bạn bè cùng tham gia",
          "Đến điểm danh lấy lệ rồi bỏ về đi chơi điện tử",
          "Đứng nhìn các bạn khác làm việc vất vả",
          "Vứt thêm rác ra đường để các bạn có việc dọn"
        ],
        correct: 0,
        explain: "Tinh thần tự giác, trách nhiệm và đoàn kết là yêu cầu hàng đầu khi tham gia các hoạt động thiện nguyện cộng đồng."
      },
      {
        question: "Bước đầu tiên khi lập kế hoạch tổ chức một hoạt động cộng đồng trong lớp học là gì?",
        options: [
          "Xác định rõ tên hoạt động, mục đích và ý nghĩa mang lại",
          "Thu tiền của các bạn ngay lập tức",
          "Đi liên hoan ăn mừng trước",
          "Chờ đợi giáo viên làm thay toàn bộ"
        ],
        correct: 0,
        explain: "Cần xác định rõ mục đích và ý nghĩa của hoạt động trước khi phân công nhân sự và dự trù kinh phí."
      }
    ]
  },
  {
    id: "bai-4",
    number: "Bài 4",
    title: "Khách quan và công bằng",
    sub: "Khái niệm, phân biệt giữa nhìn nhận đúng sự thật (Khách quan) và đối xử bình đẳng (Công bằng), cách rèn luyện và bảo vệ lẽ phải.",
    duration: "45 phút",
    diagramKey: "soDoCongLy",
    objectives: "Hiểu được khái niệm, biểu hiện và ý nghĩa của khách quan và công bằng; phân biệt được điểm khác nhau giữa hai phẩm chất; đánh giá được các hành vi trong thực tế; rèn luyện tôn trọng sự thật và lẽ phải.",
    quote: "Công bằng là linh hồn của luật pháp, khách quan là đôi mắt sáng soi tỏ chân lí cuộc đời.",
    sections: [
      {
        title: "1. Khái niệm Khách quan & Công bằng",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-2">
            <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-800 dark:text-blue-300 block font-bold mb-1">Khách quan (Về mặt Nhận thức)</strong>
              <p>Là nhìn nhận, phân tích, đánh giá sự vật, hiện tượng, con người một cách <strong>chính xác, trung thực dựa trên chứng cứ và sự thật khách quan</strong>; không định kiến, không bị cảm xúc yêu ghét hay lợi ích cá nhân chi phối.</p>
            </div>
            <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <strong class="text-amber-800 dark:text-amber-300 block font-bold mb-1">Công bằng (Về mặt Hành vi đối xử)</strong>
              <p>Là <strong>đối xử bình đẳng, không thiên vị</strong>, bảo đảm quyền lợi, nghĩa vụ và cơ hội chính đáng cho mọi người; ưu tiên hỗ trợ người yếu thế tiếp cận cơ hội bình đẳng trong xã hội.</p>
            </div>
          </div>
        `
      },
      {
        title: "2. Phân biệt Khách quan và Công bằng",
        content: `
          <div class="overflow-x-auto text-xs">
            <table class="w-full border-collapse border border-slate-200 dark:border-slate-700 text-left">
              <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                <tr><th class="p-2 border">Tiêu chí</th><th class="p-2 border">Khách quan</th><th class="p-2 border">Công bằng</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td class="p-2 border font-bold">Bản chất</td>
                  <td class="p-2 border">Nhìn nhận, xem xét đúng sự thật khách quan.</td>
                  <td class="p-2 border">Thái độ, hành vi phân chia, đối xử bình đẳng.</td>
                </tr>
                <tr>
                  <td class="p-2 border font-bold">Phương thức</td>
                  <td class="p-2 border">Dựa vào chứng cứ, dữ liệu khoa học đã kiểm chứng.</td>
                  <td class="p-2 border">Dựa vào quy chuẩn đạo đức, pháp luật, quyền bình đẳng.</td>
                </tr>
                <tr>
                  <td class="p-2 border font-bold">Hậu quả khi thiếu</td>
                  <td class="p-2 border">Nhận định sai, đưa ra quyết định sai lầm, hàm hồ.</td>
                  <td class="p-2 border">Bất mãn, chia rẽ, bất bình đẳng và xung đột xã hội.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "3. Rèn luyện tính khách quan và công bằng trong học đường",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li>Lắng nghe nhiều phía trước khi đưa ra nhận định; không vội phán xét qua vẻ bề ngoài hoặc lời đồn thổi vô căn cứ.</li>
            <li>Khi chấm điểm, bình bầu cán sự lớp hoặc thi đua, phải đánh giá theo đúng tiêu chí chung, không vì bạn thân mà thiên vị hoặc trù dập người mình không thích.</li>
            <li>Dũng cảm đấu tranh bảo vệ lẽ phải, lên tiếng phê phán sự thiên vị, bất công trong cuộc sống.</li>
          </ul>
        `
      }
    ],
    practiceList: [
      "Xử lí tình huống: Nếu bạn thân của em làm vỡ cửa kính lớp học nhưng có người khác bị nghi oan, em sẽ làm gì để đảm bảo tính khách quan và công bằng?",
      "Nhận diện 3 biểu hiện thiếu khách quan hoặc mất công bằng thường gặp trong môi trường học đường.",
      "Thảo luận về nguyên tắc: Vì sao việc ưu tiên cộng điểm thi cho học sinh vùng sâu vùng xa lại là một chính sách thể hiện sự công bằng xã hội?"
    ],
    quizzes: [
      {
        question: "Biểu hiện nào sau đây thể hiện rõ nét phẩm chất 'Khách quan' trong cuộc sống?",
        options: [
          "Xem xét kĩ lưỡng chứng cứ, sự thật trước khi đưa ra kết luận về một vụ việc",
          "Chỉ nghe lời đồn đại một phía rồi lập tức kết tội người khác",
          "Bênh vực người thân bất chấp người đó làm điều sai trái",
          "Áp đặt suy nghĩ chủ quan của mình cho cả tập thể"
        ],
        correct: 0,
        explain: "Khách quan đòi hỏi nhìn nhận sự việc dựa trên chứng cứ thực tế được xác thực, không thiên lệch định kiến."
      },
      {
        question: "Điểm KHÁC BIỆT cơ bản giữa 'Khách quan' và 'Công bằng' là gì?",
        options: [
          "Khách quan nhấn mạnh cách nhìn nhận đúng sự thật; Công bằng nhấn mạnh cách đối xử bình đẳng không thiên vị",
          "Khách quan chỉ dành cho người lớn; Công bằng chỉ dành cho trẻ em",
          "Khách quan liên quan đến tiền bạc; Công bằng liên quan đến thi cử",
          "Hai khái niệm hoàn toàn trùng khít không có điểm khác biệt"
        ],
        correct: 0,
        explain: "Khách quan thuộc về khía cạnh nhận thức chân lí; Công bằng thuộc về khía cạnh hành vi ứng xử, phân chia quyền lợi."
      },
      {
        question: "Là tổ trưởng chấm điểm thi đua, nếu bạn thân cùng tổ vi phạm kỉ luật nhưng em cố tình giấu đi không ghi sổ, hành vi đó là:",
        options: [
          "Thiếu công bằng và không khách quan do thiên vị cá nhân",
          "Biểu hiện của tình bạn trung thành đáng khen ngợi",
          "Hành động thông minh giúp tổ đạt giải nhất",
          "Biểu hiện của lòng khoan dung cao thượng"
        ],
        correct: 0,
        explain: "Bao che cho bạn thân trong thi đua là hành vi thiên vị, vi phạm tính khách quan và làm mất đi sự công bằng trong tập thể."
      },
      {
        question: "Tại sao chính sách ưu tiên cấp học bổng cho học sinh nghèo vượt khó lại là biểu hiện của sự CÔNG BẰNG?",
        options: [
          "Vì giúp người yếu thế được hỗ trợ để tiếp cận cơ hội học tập bình đẳng như mọi người",
          "Vì nhà nước thừa tiền nên phát bừa",
          "Vì chỉ nhằm lấy lòng các gia đình khó khăn",
          "Vì học sinh nghèo không cần phải học bài"
        ],
        correct: 0,
        explain: "Công bằng thực chất là tạo điều kiện hỗ trợ những đối tượng yếu thế để họ có cơ hội vươn lên bình đẳng trong xã hội."
      }
    ]
  },
  {
    id: "bai-5",
    number: "Bài 5",
    title: "Bảo vệ hoà bình",
    sub: "Khái niệm hoà bình, hậu quả của chiến tranh xung đột, 3 trụ cột gìn giữ hoà bình và trách nhiệm của học sinh với an ninh quốc tế.",
    duration: "45 phút",
    diagramKey: "soDoHoaBinh",
    objectives: "Hiểu được thế nào là hoà bình và bảo vệ hoà bình; phân tích được vì sao nhân loại phải kiên quyết ngăn chặn chiến tranh; nêu được các biện pháp giải quyết xung đột bằng con đường hoà bình; thể hiện thái độ yêu chuộng hoà bình.",
    quote: "Hoà bình không chỉ là sự vắng bóng tiếng súng gầm đạn nổ, mà là sự hiện diện của tình thân ái, công lí và cuộc sống an vui.",
    sections: [
      {
        title: "1. Khái niệm Hoà bình & Bảo vệ hoà bình",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Hoà bình</strong> là tình trạng xã hội không có chiến tranh, xung đột vũ trang; con người được sống trong môi trường an toàn, hạnh phúc, bình đẳng và tự do phát triển.</li>
            <li><strong>Bảo vệ hoà bình</strong> là gìn giữ cuộc sống bình yên ấm no, chủ động ngăn ngừa nguy cơ xung đột vũ trang và giải quyết mọi tranh chấp biên giới, lãnh thổ bằng biện pháp đàm phán hoà bình theo luật pháp quốc tế.</li>
          </ul>
        `
      },
      {
        title: "2. Hậu quả khốc liệt của chiến tranh & Ý nghĩa của hoà bình",
        content: `
          <div class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <div class="p-3 bg-red-50 dark:bg-red-950/40 rounded-xl border border-red-200 dark:border-red-800">
              <strong class="text-red-800 dark:text-red-300 block font-bold mb-1"><i class="fa-solid fa-bomb"></i> Thảm hoạ của chiến tranh:</strong>
              <p>Chiến tranh tước đoạt sinh mạng hàng triệu người dân vô tội, gây thương tật tàn phế, biến làng mạc thành đống tro tàn, huỷ diệt môi trường sinh thái, đẩy hàng triệu phụ nữ và trẻ em vào cảnh di tản tị nạn đói nghèo cùng cực.</p>
            </div>
            <div class="p-3 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800">
              <strong class="text-sky-800 dark:text-sky-300 block font-bold mb-1"><i class="fa-solid fa-seedling"></i> Giá trị thiêng liêng của hoà bình:</strong>
              <p>Hoà bình là tiền đề cốt tử để phát triển kinh tế, thúc đẩy khoa học công nghệ, giáo dục y tế và mở rộng quan hệ bang giao hữu nghị, hợp tác cùng phát triển giữa các dân tộc trên địa cầu.</p>
            </div>
          </div>
        `
      },
      {
        title: "3. Biện pháp bảo vệ hoà bình & Trách nhiệm công dân",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li>Giải quyết tranh chấp bất đồng thông qua thương lượng, đối thoại ngoại giao, tôn trọng Hiến chương Liên Hợp Quốc và luật pháp quốc tế.</li>
            <li>Kiên quyết lên án chiến tranh xâm lược phi nghĩa, chủ nghĩa khủng bố và các mưu toan kích động hận thù sắc tộc, tôn giáo.</li>
            <li>Học sinh cần xây dựng lối sống văn minh, thân thiện, giải quyết mâu thuẫn học đường bằng lời nói hoà nhã; tích cực tham gia các phong trào vì hoà bình.</li>
          </ul>
        `
      }
    ],
    practiceList: [
      "Vẽ tranh hoặc sáng tác một thông điệp ngắn với chủ đề: 'Em yêu hoà bình - Ước mơ cho trẻ em toàn thế giới'.",
      "Thuyết trình về hậu quả của chất độc da cam / dioxin đối với các thế hệ nạn nhân chiến tranh tại Việt Nam.",
      "Đóng vai hoà giải viên giải quyết một tình huống mâu thuẫn, xích mích giữa hai nhóm bạn trong trường."
    ],
    quizzes: [
      {
        question: "Biện pháp văn minh, đúng đắn và phù hợp nhất với pháp luật quốc tế để giải quyết các tranh chấp chủ quyền lãnh thổ giữa các quốc gia là gì?",
        options: [
          "Thương lượng, đàm phán hoà bình dựa trên luật pháp quốc tế và Hiến chương Liên Hợp Quốc",
          "Sử dụng vũ lực quân sự tấn công bất ngờ",
          "Đe doạ huỷ diệt hạt nhân",
          "Cắt đứt toàn bộ quan hệ thương mại và tuyên chiến"
        ],
        correct: 0,
        explain: "Đàm phán hoà bình thượng tôn luật pháp quốc tế là nguyên tắc bất di bất dịch để bảo đảm trật tự an ninh toàn cầu."
      },
      {
        question: "Hành động nào sau đây của học sinh thể hiện tinh thần yêu chuộng và bảo vệ hoà bình?",
        options: [
          "Tôn trọng bạn bè, giải quyết bất đồng bằng đối thoại nhẹ nhàng, không dùng bạo lực học đường",
          "Thành lập băng nhóm để đe doạ các bạn lớp dưới",
          "Kích động bạn bè đánh nhau để quay video đăng mạng",
          "Cổ vũ cho các cuộc xung đột vũ trang đẫm máu"
        ],
        correct: 0,
        explain: "Hoà nhã, tôn trọng bạn bè và bài trừ bạo lực học đường là hành động thiết thực nhất để bảo vệ hoà bình ngay tại trường học."
      },
      {
        question: "Hậu quả tàn khốc nhất mà các cuộc chiến tranh gây ra cho nhân loại là gì?",
        options: [
          "Cướp đi sinh mạng con người, tàn phá nhà cửa công trình, làm gián đoạn sản xuất và huỷ hoại môi trường",
          "Giúp các công ty bán vũ khí có lãi",
          "Giúp con người rèn luyện thể lực tốt hơn",
          "Không để lại hậu quả gì lâu dài"
        ],
        correct: 0,
        explain: "Chiến tranh để lại những mất mát tang thương vô bờ bến về sinh mạng con người và kéo lùi sự phát triển xã hội nhiều thập kỉ."
      },
      {
        question: "Hình ảnh con vật nào sau đây là biểu tượng quốc tế thiêng liêng tượng trưng cho Hoà Bình?",
        options: ["Chim Bồ câu trắng", "Đại bàng lửa", "Hổ vằn", "Sư tử đực"],
        correct: 0,
        explain: "Chim bồ câu trắng ngậm cành ô liu là biểu tượng hoà bình bất diệt được toàn nhân loại tôn vinh."
      }
    ]
  },
  {
    id: "bai-6",
    number: "Bài 6",
    title: "Quản lí thời gian hiệu quả",
    sub: "Khái niệm, ý nghĩa, Ma trận Eisenhower 4 ô, quy trình 5 bước quản lí thời gian và kỉ luật chiến thắng sự trì hoãn.",
    duration: "45 phút",
    diagramKey: "soDoThoiGian",
    objectives: "Nêu được khái niệm và ý nghĩa của quản lí thời gian hiệu quả; áp dụng Ma trận Eisenhower để phân loại thứ tự ưu tiên công việc; xây dựng và thực hiện kỉ luật thời gian biểu cá nhân.",
    quote: "Thời gian là tài sản công bằng duy nhất mà tạo hoá ban tặng cho muôn người; ai biết quản trị thời gian, người đó làm chủ vận mệnh.",
    sections: [
      {
        title: "1. Khái niệm & Ý nghĩa của Quản lí thời gian",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Quản lí thời gian hiệu quả</strong> là kĩ năng phân bổ, sắp xếp và sử dụng thời gian một cách khoa học, hợp lí để hoàn thành các mục tiêu đề ra với năng suất cao nhất mà không bị quá tải.</li>
            <li><strong>Ý nghĩa:</strong> Giúp chủ động làm chủ cuộc sống, hoàn thành công việc đúng hạn, giảm căng thẳng (stress), tạo động lực tự giác và mở ra thời gian quý báu để nghỉ ngơi, chăm sóc bản thân và gia đình.</li>
          </ul>
        `
      },
      {
        title: "2. Ma trận Eisenhower: Phân loại 4 nhóm công việc",
        content: `
          <div class="space-y-2 text-xs">
            <div class="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
              <strong class="text-red-800 dark:text-red-300">Ô 1 (Khẩn cấp &amp; Quan trọng):</strong> Bài kiểm tra ngày mai, sự cố sức khoẻ. $\rightarrow$ <em>Hành động: Phải làm ngay lập tức!</em>
            </div>
            <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-800 dark:text-emerald-300">Ô 2 (Quan trọng nhưng Không khẩn cấp):</strong> Đọc sách, học ngoại ngữ, tập thể thao. $\rightarrow$ <em>Hành động: Lên lịch và kiên trì thực hiện hằng ngày (quyết định thành bại lâu dài)!</em>
            </div>
            <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
              <strong class="text-amber-800 dark:text-amber-300">Ô 3 (Khẩn cấp nhưng Không quan trọng):</strong> Cuộc gọi nhờ vặt, tin nhắn báo thông báo. $\rightarrow$ <em>Hành động: Uỷ quyền hoặc giới hạn thời gian xử lí!</em>
            </div>
            <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <strong class="text-slate-800 dark:text-slate-300">Ô 4 (Không khẩn &amp; Không quan trọng):</strong> Lướt mạng xã hội thâu đêm, chơi game vô độ. $\rightarrow$ <em>Hành động: Kiên quyết cắt bỏ hoặc giới hạn tối đa!</em>
            </div>
          </div>
        `
      },
      {
        title: "3. Quy trình 5 bước quản lí thời gian tối ưu",
        content: `
          <ol class="list-decimal pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Lập danh sách công việc (To-do list):</strong> Liệt kê mọi nhiệm vụ cần làm theo ngày/tuần.</li>
            <li><strong>Xác định thứ tự ưu tiên:</strong> Đánh dấu việc quan trọng cần hoàn thành trước.</li>
            <li><strong>Lập kế hoạch phân bổ thời gian:</strong> Ấn định khung giờ cụ thể và lượng thời gian cần thiết.</li>
            <li><strong>Kỉ luật thực hiện:</strong> Tắt thông báo điện thoại, tránh thói quen trì hoãn ('để mai tính').</li>
            <li><strong>Đánh giá &amp; Điều chỉnh:</strong> Cuối tuần tổng kết những việc đã làm được và rút kinh nghiệm.</li>
          </ol>
        `
      }
    ],
    practiceList: [
      "Thực hành lập Ma trận Eisenhower cho tất cả các việc em cần làm trong ngày Chủ nhật tới.",
      "Áp dụng phương pháp Pomodoro (tập trung học sâu 25 phút, nghỉ ngắn 5 phút) và ghi nhận kết quả.",
      "Xác định 2 'kẻ cắp thời gian' lớn nhất của bản thân trong tuần qua và đề ra giải pháp loại bỏ."
    ],
    quizzes: [
      {
        question: "Theo Ma trận Eisenhower, nhóm công việc 'Quan trọng nhưng Không khẩn cấp' (như rèn luyện thể thao, học ngoại ngữ) nên được xử lí như thế nào?",
        options: [
          "Lên kế hoạch chủ động và kiên trì thực hiện đều đặn vì nó quyết định sự thành công lâu dài",
          "Bỏ qua không cần làm vì không ai thúc ép",
          "Để dồn lại đến năm 60 tuổi mới làm",
          "Chỉ làm khi nào thấy chán chơi game"
        ],
        correct: 0,
        explain: "Ô 2 (Quan trọng không khẩn) tích luỹ năng lực cốt lõi lâu dài, nếu không chủ động lên lịch ta sẽ bị cuốn vào việc gấp gáp."
      },
      {
        question: "Hành động nào sau đây là 'kẻ đánh cắp thời gian' phổ biến nhất làm suy giảm hiệu suất học tập của học sinh?",
        options: [
          "Lướt mạng xã hội vô thức và liên tục bị xao nhãng bởi thông báo điện thoại khi đang ngồi học",
          "Đọc sách giáo khoa chuẩn bị bài trước",
          "Lên thời gian biểu biểu tuần khoa học",
          "Đi ngủ đúng giờ đủ giấc"
        ],
        correct: 0,
        explain: "Mạng xã hội và thông báo ảo liên tục làm gián đoạn sự tập trung sâu của não bộ, gây lãng phí hàng giờ mỗi ngày."
      },
      {
        question: "Phương pháp 'Pomodoro' trong quản lí thời gian hoạt động theo chu kì nào sau đây?",
        options: [
          "Tập trung học cao độ 25 phút, sau đó nghỉ giải lao ngắn 5 phút",
          "Học liên tục 10 tiếng không nghỉ",
          "Ngủ 50 phút, học 5 phút",
          "Vừa học vừa xem phim hoạt hình"
        ],
        correct: 0,
        explain: "Pomodoro chia nhỏ phiên làm việc thành 25 phút tập trung sâu và 5 phút nghỉ ngơi giúp não bộ duy trì sự tỉnh táo tối đa."
      },
      {
        question: "Lợi ích lớn nhất của việc biết quản lí thời gian hiệu quả là gì?",
        options: [
          "Chủ động hoàn thành công việc đúng hạn, giảm bớt căng thẳng và có thời gian phát triển bản thân",
          "Làm cho cuộc sống trở nên cứng nhắc và mất tự do",
          "Để không bao giờ phải làm bất cứ việc nhà nào",
          "Để làm việc suốt ngày đêm không cần ngủ"
        ],
        correct: 0,
        explain: "Quản lí thời gian tốt giúp ta hoàn thành mục tiêu nhanh hơn, bớt căng thẳng và giải phóng thời gian cho cuộc sống riêng."
      }
    ]
  },
  {
    id: "bai-7",
    number: "Bài 7",
    title: "Thích ứng với thay đổi",
    sub: "Các biến cố trong cuộc sống, tâm thế chủ động, quy trình 5 bước thích ứng và Vòng tròn kiểm soát cá nhân.",
    duration: "45 phút",
    diagramKey: "soDoThichUng",
    objectives: "Hiểu được thay đổi là quy luật tất yếu của cuộc sống; phân tích được các biến cố (môi trường, gia đình, sức khoẻ); thực hiện đúng 5 bước thích ứng với thay đổi; rèn luyện bản lĩnh kiên cường, lạc quan.",
    quote: "Không phải loài mạnh nhất hay thông minh nhất sẽ sống sót, mà là loài có khả năng thích ứng tốt nhất với sự đổi thay.",
    sections: [
      {
        title: "1. Sự thay đổi là quy luật tất yếu của cuộc sống",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li>Cuộc sống không bao giờ phẳng lặng; thay đổi có thể đến từ: chuyển trường, chuyển chỗ ở, thay đổi hoàn cảnh kinh tế gia đình, sự cố sức khoẻ, thi cử trượt dốc hoặc biến động công nghệ xã hội.</li>
            <li>Có những thay đổi bất ngờ ngoài ý muốn gây sốc, hoang mang và lo âu; người có bản lĩnh là người biết đón nhận và biến nghịch cảnh thành cơ hội tôi luyện bản thân.</li>
          </ul>
        `
      },
      {
        title: "2. Quy trình 5 bước chủ động Thích ứng với Thay đổi",
        content: `
          <div class="space-y-2 text-xs">
            <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              <strong>Bước 1: Chấp nhận thực tế:</strong> Bình tâm thừa nhận sự việc đã diễn ra; phân biệt rõ điều mình <em>có thể kiểm soát</em> (hành động, suy nghĩ) và điều <em>không thể thay đổi</em> (quá khứ, thời tiết, hành vi người khác).
            </div>
            <div class="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
              <strong>Bước 2: Làm chủ cảm xúc:</strong> Hít thở sâu, giữ bình tĩnh, không vội vàng đưa ra quyết định tiêu cực trong lúc bốc đồng, giận dữ hoặc tuyệt vọng.
            </div>
            <div class="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
              <strong>Bước 3: Nhìn nhận và tìm lựa chọn:</strong> Cân nhắc nhiều hướng đi mới tích cực, nhìn vào cơ hội tiềm ẩn bên trong khó khăn.
            </div>
            <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
              <strong>Bước 4: Tìm kiếm sự trợ giúp:</strong> Chủ động tâm sự, xin lời khuyên từ bố mẹ, thầy cô, chuyên gia tâm lí hoặc người lớn đáng tin cậy.
            </div>
            <div class="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800">
              <strong>Bước 5: Hành động thích nghi:</strong> Bắt tay vào thực hiện kế hoạch mới, kiên nhẫn điều chỉnh cho phù hợp với hoàn cảnh thực tế.
            </div>
          </div>
        `
      }
    ],
    practiceList: [
      "Chia sẻ về một lần em phải chuyển lớp, chuyển trường hoặc gặp biến cố bất ngờ và cách em đã vượt qua.",
      "Vẽ sơ đồ 'Vòng tròn kiểm soát': Liệt kê những điều em có thể tự quyết định và những điều em buộc phải chấp nhận.",
      "Tập kĩ thuật hít thở sâu 4-7-8 để điều hoà nhịp tim và lấy lại bình tĩnh khi gặp chuyện bất như ý."
    ],
    quizzes: [
      {
        question: "Bước đầu tiên mang tính quyết định trong quy trình thích ứng với sự thay đổi bất ngờ là gì?",
        options: [
          "Bình tâm chấp nhận thực tế thay đổi và phân biệt điều mình có thể kiểm soát",
          "Oán hận số phận và đóng cửa phòng khóc lóc",
          "Đổ lỗi hoàn toàn cho những người xung quanh",
          "Lập tức bỏ cuộc không làm gì nữa"
        ],
        correct: 0,
        explain: "Chấp nhận sự thật là tiền đề để não bộ ngưng trạng thái hoảng loạn và bắt đầu tìm kiếm giải pháp giải quyết vấn đề."
      },
      {
        question: "Khi đối mặt với một biến cố bất ngờ (như điểm thi không như mong đợi, chuyển sang nơi ở mới), thái độ nào là tích cực nhất?",
        options: [
          "Giữ bình tĩnh, nhìn nhận điểm yếu để khắc phục và chủ động tìm kiếm sự giúp đỡ từ thầy cô, cha mẹ",
          "Tuyệt vọng nghĩ rằng cuộc đời mình coi như chấm dứt",
          "Giấu giếm điểm số và trốn học",
          "Ghen ghét với những bạn có kết quả tốt"
        ],
        correct: 0,
        explain: "Bình tĩnh, lạc quan và tìm kiếm sự hỗ trợ là cách ứng phó trưởng thành giúp vượt qua khó khăn."
      },
      {
        question: "Điều nào sau đây nằm trong 'Vòng tròn kiểm soát' mà bản thân em HOÀN TOÀN CÓ THỂ quyết định được?",
        options: [
          "Thái độ sống, nỗ lực học tập và hành vi ứng xử của chính bản thân mình",
          "Thời tiết nắng hay mưa ngoài trời",
          "Suy nghĩ và tính cách của người khác",
          "Những chuyện không may đã xảy ra trong quá khứ"
        ],
        correct: 0,
        explain: "Ta không thể kiểm soát được hoàn cảnh bên ngoài, nhưng ta hoàn toàn kiểm soát được thái độ và hành động của chính mình."
      },
      {
        question: "Khả năng thích ứng linh hoạt với thay đổi đem lại ý nghĩa gì cho con người trong thời đại số?",
        options: [
          "Giúp con người vượt qua khủng hoảng, nhanh chóng hoà nhập và nắm bắt cơ hội phát triển mới",
          "Làm cho con người đánh mất cá tính bản thân",
          "Khiến ta trở thành kẻ ba phải không có lập trường",
          "Không đem lại lợi ích gì"
        ],
        correct: 0,
        explain: "Thích ứng là năng lực sinh tồn cốt lõi giúp con người đứng vững và bứt phá trước những đổi thay của thời đại."
      }
    ]
  },
  {
    id: "bai-8",
    number: "Bài 8",
    title: "Tiêu dùng thông minh",
    sub: "Khái niệm tiêu dùng thông minh, 4 nguyên tắc mua sắm, nhận diện cạm bẫy quảng cáo ảo và bảo vệ quyền lợi người tiêu dùng.",
    duration: "45 phút",
    diagramKey: "soDoTieuDung",
    objectives: "Hiểu được thế nào là tiêu dùng thông minh; nhận diện được các cạm bẫy mua sắm bốc đồng; thực hiện đúng 4 quy tắc: lập kế hoạch, tìm hiểu thông tin, sử dụng an toàn và thanh toán bảo mật.",
    quote: "Người tiêu dùng thông thái mua sự cần thiết chứ không mua sự thèm muốn nhất thời.",
    sections: [
      {
        title: "1. Khái niệm & Lợi ích của Tiêu dùng thông minh",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Tiêu dùng thông minh</strong> là phương thức chi tiêu có tính toán, cân nhắc kĩ lưỡng về nhu cầu, chất lượng, giá cả và khả năng tài chính; không bị cuốn theo quảng cáo hay trào lưu nhất thời.</li>
            <li><strong>Lợi ích:</strong> Tiết kiệm tài chính gia đình, mua đúng sản phẩm chất lượng, bảo vệ sức khoẻ, tránh lãng phí và bảo đảm an toàn quyền lợi pháp lí khi giao dịch.</li>
          </ul>
        `
      },
      {
        title: "2. Bốn nguyên tắc vàng của Người tiêu dùng thông minh",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <strong class="text-blue-800 dark:text-blue-300 block mb-1">1. Lập kế hoạch chi tiêu trước</strong>
              <p>Chỉ mua những món đồ thật sự thiết yếu nằm trong danh mục đã lên kế hoạch; kiên quyết nói 'không' với bẫy giảm giá ảo hay mua theo tâm trạng buồn chán.</p>
            </div>
            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <strong class="text-emerald-800 dark:text-emerald-300 block mb-1">2. Tìm hiểu kĩ thông tin hàng hoá</strong>
              <p>So sánh giá cả và chất lượng ở nhiều nơi uy tín; đọc kĩ nhãn mác, thành phần, hạn sử dụng, nhà sản xuất và tem kiểm định chất lượng.</p>
            </div>
            <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <strong class="text-amber-800 dark:text-amber-300 block mb-1">3. Sử dụng an toàn &amp; Bảo quản tốt</strong>
              <p>Đọc kĩ hướng dẫn sử dụng của nhà sản xuất, bảo quản đúng cách để kéo dài tuổi thọ sản phẩm, không dùng thực phẩm quá hạn gây ngộ độc.</p>
            </div>
            <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800">
              <strong class="text-purple-800 dark:text-purple-300 block mb-1">4. Thanh toán an toàn &amp; Giữ hoá đơn</strong>
              <p>Khi mua online phải chọn sàn uy tín, kiểm tra hàng trước khi nhận, không click vào đường link lạ tránh mất tiền tài khoản; luôn giữ hoá đơn chứng từ để khiếu nại bảo hành khi cần.</p>
            </div>
          </div>
        `
      },
      {
        title: "3. Nhận diện các dấu hiệu chi tiêu kém thông minh",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1 text-slate-700 dark:text-slate-300">
            <li>Mua thêm quần áo/đồ dùng mà ở nhà đã có sẵn chỉ vì thấy có mác 'Sale 70%'.</li>
            <li>Ham đồ siêu rẻ không rõ nguồn gốc xuất xứ trôi nổi trên mạng xã hội.</li>
            <li>Đi siêu thị mà không mang danh sách cần mua, tiện tay gom đầy xe hàng.</li>
            <li>Vứt bỏ hoá đơn ngay tại quầy thu ngân mà không kiểm tra lại số tiền thanh toán.</li>
          </ul>
        `
      }
    ],
    practiceList: [
      "Thực hành kiểm tra nhãn mác của 3 món đồ ăn đóng gói trong nhà: Tìm ngày sản xuất, hạn sử dụng và nguồn gốc xuất xứ.",
      "Lập bảng phân loại 'Nhu cầu thiết yếu (Needs)' và 'Mong muốn sở thích (Wants)' cho một khoản tiền tiết kiệm 500.000 VNĐ.",
      "Xử lí tình huống: Nếu mua phải một hộp sữa đã bị chua hỏng dù còn hạn sử dụng, em sẽ thực hiện các bước khiếu nại như thế nào?"
    ],
    quizzes: [
      {
        question: "Hành động nào sau đây là biểu hiện của người tiêu dùng thông minh?",
        options: [
          "Lên danh sách các đồ dùng thật sự cần thiết trước khi đi mua và so sánh chất lượng, giá cả ở nơi uy tín",
          "Mua bất kì thứ gì thấy giảm giá sốc dù ở nhà đã có sẵn",
          "Mua mỹ phẩm trôi nổi không nhãn mác vì giá siêu rẻ",
          "Vứt hoá đơn ngay không kiểm tra hàng hoá"
        ],
        correct: 0,
        explain: "Lên kế hoạch và chọn lọc sản phẩm có nguồn gốc rõ ràng là tiêu chí hàng đầu của người tiêu dùng thông thái."
      },
      {
        question: "Khi mua hàng trực tuyến (online), thao tác nào giúp bảo vệ quyền lợi và an toàn tài chính cho người mua?",
        options: [
          "Lựa chọn gian hàng uy tín, kiểm tra kĩ hàng khi nhận, giữ hoá đơn và không cung cấp mã OTP/thông tin thẻ cho link lạ",
          "Chuyển toàn bộ tiền cọc cho người bán lạ trên mạng không cần hoá đơn",
          "Cung cấp mật khẩu tài khoản ngân hàng để nhận quà khuyến mãi",
          "Nhận bưu phẩm mà không cần kiểm tra xem bên trong có đúng đồ đã đặt hay không"
        ],
        correct: 0,
        explain: "Bảo mật thông tin tài khoản và kiểm tra hàng hoá trước khi thanh toán giúp phòng tránh rủi ro lừa đảo online."
      },
      {
        question: "Sự khác biệt giữa 'Nhu cầu thiết yếu (Needs)' và 'Mong muốn sở thích (Wants)' là gì?",
        options: [
          "Nhu cầu là thứ bắt buộc phải có để duy trì cuộc sống (cơm ăn, áo ấm, sách vở); Mong muốn là thứ có thì vui nhưng thiếu cũng không sao",
          "Nhu cầu là đồ đắt tiền; Mong muốn là đồ rẻ tiền",
          "Nhu cầu là của cha mẹ; Mong muốn là của con cái",
          "Hai khái niệm này hoàn toàn giống nhau"
        ],
        correct: 0,
        explain: "Người tiêu dùng thông minh luôn ưu tiên ngân sách cho nhu cầu thiết yếu trước khi chi tiêu cho những mong muốn xa xỉ."
      },
      {
        question: "Tại sao người mua hàng luôn cần giữ lại hoá đơn thanh toán hoặc chứng từ mua hàng?",
        options: [
          "Là bằng chứng pháp lí quan trọng để khiếu nại, đổi trả hoặc yêu cầu bảo hành sản phẩm khi có sự cố",
          "Để tích luỹ bán ve chai lấy tiền",
          "Để cho đẹp ví tiền",
          "Không có bất kì tác dụng nào"
        ],
        correct: 0,
        explain: "Hoá đơn là căn cứ pháp lí để bảo vệ quyền lợi người tiêu dùng khi sản phẩm bị lỗi hỏng hoặc xảy ra tranh chấp."
      }
    ]
  },
  {
    id: "bai-9",
    number: "Bài 9",
    title: "Vi phạm pháp luật và trách nhiệm pháp lí",
    sub: "4 Dấu hiệu nhận biết, phân loại 4 loại vi phạm pháp luật (Hình sự, Dân sự, Hành chính, Kỉ luật) và 4 trách nhiệm pháp lí tương ứng.",
    duration: "45 phút",
    diagramKey: "soDoViPhamPhapLuat",
    objectives: "Nêu được khái niệm, dấu hiệu của vi phạm pháp luật; phân biệt được 4 loại vi phạm pháp luật và 4 loại trách nhiệm pháp lí; phân tích được các tình huống pháp lí trong đời sống; nâng cao ý thức thượng tôn pháp luật.",
    quote: "Pháp luật là chuẩn mực của sự tự do; tuân thủ pháp luật là bảo vệ chính mình và gìn giữ bình yên cho cộng đồng.",
    sections: [
      {
        title: "1. Khái niệm & 4 Dấu hiệu của Vi phạm pháp luật",
        content: `
          <p class="mb-2 text-xs text-slate-700 dark:text-slate-300"><strong>Vi phạm pháp luật</strong> là hành vi trái pháp luật, có lỗi, do chủ thể có năng lực trách nhiệm pháp lí thực hiện, xâm hại đến các quan hệ xã hội được pháp luật bảo vệ.</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div class="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
              <strong>1. Là hành vi xác định:</strong> Phải là hành vi thực tế của con người (hành động hoặc không hành động), suy nghĩ trong đầu chưa vi phạm.
            </div>
            <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
              <strong>2. Trái pháp luật:</strong> Không làm việc pháp luật bắt buộc, làm điều pháp luật cấm, hoặc vượt quá giới hạn cho phép.
            </div>
            <div class="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
              <strong>3. Có lỗi:</strong> Chủ thể nhận thức được hành vi nhưng vẫn thực hiện do cố ý hoặc vô ý cẩu thả.
            </div>
            <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              <strong>4. Có năng lực TNPL:</strong> Đạt độ tuổi luật định và có khả năng nhận thức, làm chủ hành vi của mình.
            </div>
          </div>
        `
      },
      {
        title: "2. Bốn loại Vi phạm pháp luật & Trách nhiệm pháp lí tương ứng",
        content: `
          <div class="overflow-x-auto text-xs">
            <table class="w-full border-collapse border border-slate-200 dark:border-slate-700 text-left">
              <thead class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                <tr><th class="p-2 border">Loại vi phạm</th><th class="p-2 border">Đặc điểm &amp; Mức độ nguy hiểm</th><th class="p-2 border">Trách nhiệm pháp lí &amp; Chế tài</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td class="p-2 border font-bold text-red-700 dark:text-red-400">Hình sự (Tội phạm)</td>
                  <td class="p-2 border">Hành vi nguy hiểm cao nhất cho xã hội, quy định trong Bộ luật Hình sự (trộm cắp lớn, giết người, buôn ma tuý).</td>
                  <td class="p-2 border font-bold text-red-600">Trách nhiệm hình sự: Tù có thời hạn, chung thân, tử hình, cải tạo không giam giữ do Toà án phán quyết.</td>
                </tr>
                <tr>
                  <td class="p-2 border font-bold text-amber-700 dark:text-amber-400">Hành chính</td>
                  <td class="p-2 border">Xâm phạm trật tự quản lí nhà nước nhưng chưa đến mức là tội phạm (vượt đèn đỏ, lấn chiếm lòng lề đường).</td>
                  <td class="p-2 border font-bold text-amber-600">Trách nhiệm hành chính: Phạt tiền, cảnh cáo, tước quyền sử dụng bằng lái xe, tịch thu tang vật.</td>
                </tr>
                <tr>
                  <td class="p-2 border font-bold text-blue-700 dark:text-blue-400">Dân sự</td>
                  <td class="p-2 border">Xâm phạm quan hệ tài sản hoặc nhân thân phi tài sản (vi phạm hợp đồng vay mượn, tranh chấp đất đai, bôi nhọ danh dự).</td>
                  <td class="p-2 border font-bold text-blue-600">Trách nhiệm dân sự: Buộc bồi thường thiệt hại, công khai xin lỗi cải chính, thực hiện nghĩa vụ hợp đồng.</td>
                </tr>
                <tr>
                  <td class="p-2 border font-bold text-purple-700 dark:text-purple-400">Kỉ luật</td>
                  <td class="p-2 border">Xâm phạm trật tự nội quy trong cơ quan, trường học, doanh nghiệp (đi làm muộn, bỏ ca trực, quay cóp thi cử).</td>
                  <td class="p-2 border font-bold text-purple-600">Trách nhiệm kỉ luật: Khiển trách, cảnh cáo, hạ bậc lương, buộc thôi việc / đình chỉ học tập.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "3. Ý nghĩa của Trách nhiệm pháp lí",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1 text-slate-700 dark:text-slate-300">
            <li>Trừng phạt và ngăn chặn người vi phạm tiếp tục gây hại cho xã hội.</li>
            <li>Giáo dục, răn đe mọi công dân tôn trọng pháp luật và củng cố niềm tin vào công lí.</li>
            <li>Duy trì trật tự an toàn kỉ cương xã hội, bảo vệ quyền lợi hợp pháp của nhân dân.</li>
          </ul>
        `
      }
    ],
    practiceList: [
      "Sử dụng Bộ công cụ nhận diện bên dưới để phân tích 4 tình huống vi phạm pháp luật thực tế.",
      "Phân biệt mức độ nghiêm trọng giữa một vụ vi phạm hành chính (đi xe máy không đội mũ bảo hiểm) và một vụ vi phạm hình sự (đua xe trái phép gây tai nạn chết người).",
      "Thảo luận về nguyên tắc: Vì sao người mắc bệnh tâm thần nặng không bị truy cứu trách nhiệm hình sự?"
    ],
    quizzes: [
      {
        question: "Hành vi điều khiển xe máy vượt đèn đỏ của một người 20 tuổi thuộc loại vi phạm pháp luật nào sau đây?",
        options: [
          "Vi phạm hành chính",
          "Vi phạm hình sự",
          "Vi phạm kỉ luật",
          "Vi phạm đạo đức thuần tuý không liên quan pháp luật"
        ],
        correct: 0,
        explain: "Vượt đèn đỏ xâm phạm quy tắc quản lí nhà nước về trật tự an toàn giao thông nhưng chưa đến mức tội phạm nên là vi phạm hành chính."
      },
      {
        question: "Hành vi lén lút đột nhập vào nhà người khác trộm cắp chiếc xe máy trị giá 40 triệu đồng thuộc loại vi phạm nào?",
        options: [
          "Vi phạm hình sự (Tội phạm trộm cắp tài sản)",
          "Vi phạm kỉ luật học đường",
          "Vi phạm hành chính nhẹ",
          "Tranh chấp dân sự thông thường"
        ],
        correct: 0,
        explain: "Hành vi trộm cắp tài sản có giá trị từ 2 triệu đồng trở lên cấu thành tội phạm hình sự được quy định trong Bộ luật Hình sự."
      },
      {
        question: "Biện pháp nào sau đây là chế tài áp dụng cho 'Trách nhiệm kỉ luật' trong cơ quan hoặc trường học?",
        options: [
          "Khiển trách, cảnh cáo, buộc thôi việc hoặc đình chỉ học tập",
          "Tử hình",
          "Phạt tù 10 năm",
          "Tịch thu bằng lái xe"
        ],
        correct: 0,
        explain: "Trách nhiệm kỉ luật do thủ trưởng cơ quan/nhà trường áp dụng đối với cá nhân vi phạm nội quy, quy chế."
      },
      {
        question: "Dấu hiệu nào sau đây KHÔNG PHẢI là dấu hiệu cấu thành của một hành vi vi phạm pháp luật?",
        options: [
          "Ý nghĩ tiêu cực nảy sinh thoáng qua trong đầu nhưng chưa hề thực hiện ra ngoài đời thực",
          "Hành vi trái quy định của pháp luật",
          "Hành vi có lỗi của người thực hiện",
          "Chủ thể thực hiện có năng lực trách nhiệm pháp lí"
        ],
        correct: 0,
        explain: "Pháp luật chỉ điều chỉnh hành vi thực tế, không xử phạt ý nghĩ trong đầu nếu chưa biểu hiện thành hành động hoặc không hành động cụ thể."
      }
    ]
  },
  {
    id: "bai-10",
    number: "Bài 10",
    title: "Quyền tự do kinh doanh và nghĩa vụ nộp thuế",
    sub: "Nội dung quyền tự do kinh doanh, nghĩa vụ nộp thuế, các sắc thuế phổ biến và trách nhiệm của công dân đối với ngân sách Nhà nước.",
    duration: "45 phút",
    diagramKey: "soDoKinhDoanhThue",
    objectives: "Hiểu được thế nào là quyền tự do kinh doanh và nghĩa vụ nộp thuế; nêu được các ngành nghề cấm và kinh doanh có điều kiện; giải thích được vai trò của thuế với ngân sách quốc gia; tôn trọng pháp luật kinh doanh và thuế.",
    quote: "Kinh doanh chân chính làm giàu cho bản thân, nộp thuế sòng phẳng kiến tạo tương lai đất nước.",
    sections: [
      {
        title: "1. Quyền tự do kinh doanh theo Hiến pháp và Pháp luật",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
            <li><strong>Kinh doanh</strong> là việc thực hiện liên tục một, một số hoặc tất cả công đoạn từ đầu tư, sản xuất đến tiêu thụ sản phẩm hoặc cung ứng dịch vụ nhằm tìm kiếm lợi nhuận chính đáng.</li>
            <li><strong>Quyền tự do kinh doanh:</strong> Mọi công dân có quyền kinh doanh trong những ngành, nghề mà <strong>pháp luật không cấm</strong>; tự do lựa chọn hình thức tổ chức kinh tế (doanh nghiệp tư nhân, công ty TNHH, hộ kinh doanh...), quy mô và ngành hàng.</li>
            <li><strong>Ràng buộc pháp lí:</strong> Không được kinh doanh các ngành nghề cấm (ma tuý, pháo nổ, mại dâm, động vật hoang dã nguy cấp); phải tuân thủ điều kiện đối với ngành kinh doanh có điều kiện (kinh doanh xăng dầu, thuốc chữa bệnh, dịch vụ bảo vệ); bảo đảm an toàn môi trường và quyền lợi người tiêu dùng.</li>
          </ul>
        `
      },
      {
        title: "2. Nghĩa vụ nộp thuế & Vai trò của Thuế",
        content: `
          <div class="space-y-2 text-xs">
            <p>• <strong>Thuế là gì?</strong> Là khoản nộp bắt buộc của các tổ chức, hộ gia đình và cá nhân vào ngân sách Nhà nước theo luật định mà không được hoàn trả trực tiếp.</p>
            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-1">
              <strong class="text-emerald-800 dark:text-emerald-300 font-bold block mb-1">Vai trò cực kì to lớn của Thuế:</strong>
              <p>- Là nguồn thu chủ yếu nuôi bộ máy nhà nước, quốc phòng, an ninh giữ vững chủ quyền.</p>
              <p>- Đầu tư xây dựng cơ sở hạ tầng giao thông, trường học, bệnh viện công lập, cầu đường.</p>
              <p>- Thực hiện các chính sách an sinh xã hội, xoá đói giảm nghèo và điều tiết khoảng cách giàu nghèo.</p>
            </div>
            <p>• <strong>Một số sắc thuế phổ biến:</strong> Thuế Giá trị gia tăng (VAT), Thuế Thu nhập cá nhân (TNCN), Thuế Thu nhập doanh nghiệp (TNDN), Thuế Tiêu thụ đặc biệt (rượu bia, thuốc lá), Thuế Xuất nhập khẩu.</p>
          </div>
        `
      },
      {
        title: "3. Trách nhiệm của công dân và học sinh",
        content: `
          <ul class="list-disc pl-5 text-xs space-y-1 text-slate-700 dark:text-slate-300">
            <li>Tôn trọng quyền tự do kinh doanh của người khác và nghiêm chỉnh chấp hành pháp luật kinh doanh.</li>
            <li>Vận động gia đình và người thân kê khai thuế trung thực, nộp thuế đầy đủ đúng hạn.</li>
            <li>Phê phán và lên án các hành vi trốn thuế, gian lận hoá đơn, buôn bán hàng giả, hàng lậu gây thất thoát ngân sách quốc gia.</li>
          </ul>
        `
      }
    ],
    practiceList: [
      "Tìm hiểu và kể tên 3 ngành nghề mà pháp luật Việt Nam nghiêm cấm kinh doanh dưới mọi hình thức.",
      "Quan sát một hoá đơn thanh toán khi đi siêu thị và chỉ ra dòng thuế Giá trị gia tăng (VAT 8% hoặc 10%).",
      "Thảo luận nhóm: Vì sao hành vi trốn thuế của các nghệ sĩ hoặc doanh nghiệp lớn lại bị xã hội lên án gay gắt?"
    ],
    quizzes: [
      {
        question: "Quyền tự do kinh doanh của công dân theo Hiến pháp và pháp luật Việt Nam được hiểu như thế nào là ĐÚNG?",
        options: [
          "Công dân có quyền kinh doanh bất kì ngành, nghề nào mà pháp luật không cấm và tuân thủ các điều kiện luật định",
          "Công dân được tự do buôn bán bất kì thứ gì kể cả ma tuý và pháo nổ",
          "Kinh doanh không cần phải đăng kí hay nộp bất kì khoản thuế nào",
          "Chỉ có người giàu mới có quyền kinh doanh"
        ],
        correct: 0,
        explain: "Công dân có quyền tự do kinh doanh trong các ngành nghề pháp luật không cấm và phải đăng kí, nộp thuế theo luật định."
      },
      {
        question: "Nguồn thu từ Thuế đóng vai trò trọng yếu như thế nào đối với đất nước?",
        options: [
          "Là nguồn thu ngân sách chính để xây dựng trường học, bệnh viện, đường sá và duy trì an ninh quốc phòng",
          "Chỉ dùng để chia tiền mặt cho cán bộ thuế",
          "Là khoản tiền không có tác dụng thực tế gì cho người dân",
          "Để cho các nước khác vay"
        ],
        correct: 0,
        explain: "Thuế là nguồn thu ngân sách chủ lực xây dựng kết cấu hạ tầng công cộng và phục vụ an sinh toàn xã hội."
      },
      {
        question: "Hành vi nào sau đây là vi phạm nghiêm trọng pháp luật về Thuế?",
        options: [
          "Khai gian dối hạ thấp doanh thu bán hàng thực tế để trốn nộp tiền thuế",
          "Kê khai thuế trung thực và nộp tiền thuế đúng thời hạn",
          "Sử dụng hoá đơn điện tử hợp pháp",
          "Yêu cầu cơ quan thuế giải thích chính sách ưu đãi"
        ],
        correct: 0,
        explain: "Khai man doanh thu, trốn thuế hoặc mua bán hoá đơn khống là hành vi vi phạm pháp luật có thể bị xử lí hình sự."
      },
      {
        question: "Ngành nghề nào sau đây bị pháp luật Việt Nam NGHIÊM CẤM kinh doanh dưới mọi hình thức?",
        options: [
          "Kinh doanh các chất ma tuý, mua bán người, mô bộ phận cơ thể người",
          "Kinh doanh sách giáo khoa và đồ dùng học tập",
          "Kinh doanh quán cà phê giải khát",
          "Kinh doanh dịch vụ sửa chữa máy tính"
        ],
        correct: 0,
        explain: "Ma tuý, buôn bán người, vũ khí quân dụng... là những ngành nghề đặc biệt nguy hiểm bị pháp luật nghiêm cấm tuyệt đối."
      }
    ]
  }
];

module.exports = { gdcd9Lessons };
