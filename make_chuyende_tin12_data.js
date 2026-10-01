// Data for Chuyên đề học tập Tin học 12 - Định hướng Tin học ứng dụng (Kết nối tri thức với cuộc sống)
// 16 lessons: 15 SGK lessons + 1 Capstone Project
// Each lesson has 4 interactive quizzes (total 64 quizzes)

const lessons = [
  // ==========================================
  // CHUYÊN ĐỀ 1: THỰC HÀNH SỬ DỤNG PHẦN MỀM QUẢN LÝ DỰ ÁN (GANTTPROJECT)
  // ==========================================
  {
    lessonNum: 1,
    id: "bai-1",
    topicNum: 1,
    topicName: "Chuyên đề 1: Phần mềm quản lý dự án (GanttProject)",
    title: "Bài 1: Quản lí dự án và phần mềm quản lí dự án",
    tag: "Project Management Basics",
    objectives: [
      "Hiểu rõ khái niệm dự án, các đặc trưng cơ bản (tính tạm thời, mục tiêu duy nhất, giới hạn nguồn lực) và vòng đời dự án (Khởi động -> Lập kế hoạch -> Thực thi -> Giám sát -> Đóng dự án).",
      "Nắm vững vai trò then chốt của công tác Quản lý dự án (Project Management) và tam giác ràng buộc (Phạm vi - Thời gian - Chi phí).",
      "Làm quen với giao diện chuẩn của phần mềm quản lý dự án GanttProject: Biểu đồ Gantt, Danh sách công việc, Thanh thực đơn và Bảng thuộc tính dự án.",
      "Thực hiện thành thạo thao tác khởi tạo dự án mới, thiết lập lịch làm việc (Weekend, ngày nghỉ lễ) và lưu tệp dự án định dạng .gan."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-diagram-project"></i> Tam giác vàng Quản trị dự án
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Phạm vi (Scope):</strong> Toàn bộ khối lượng công việc và sản phẩm cần bàn giao.</li>
            <li><strong>Thời gian (Time):</strong> Hạn chót hoàn thành và tiến độ từng giai đoạn.</li>
            <li><strong>Chi phí/Ngân sách (Cost):</strong> Kinh phí và nguồn lực tài chính, con người.</li>
            <li><em>Nguyên tắc:</em> Thay đổi một đỉnh tam giác sẽ tác động trực tiếp đến hai đỉnh còn lại và chất lượng (Quality).</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-chart-gantt"></i> Không gian làm việc GanttProject
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Task Table (Bên trái):</strong> Bảng nhập danh mục công việc, ngày bắt đầu, ngày kết thúc và thời lượng.</li>
            <li><strong>Gantt Chart (Bên phải):</strong> Biểu đồ thanh ngang trực quan hóa tiến độ theo dòng thời gian (Timeline).</li>
            <li><strong>Resource Chart:</strong> Biểu đồ theo dõi phân bổ nhân sự và tải công việc.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Khởi động phần mềm và tạo dự án mới",
        content: "Mở GanttProject -> Chọn menu <strong>Project -> New</strong> -> Nhập tên dự án (ví dụ: 'Xây dựng Website Kỷ yếu lớp 12A1'), tên tổ chức và mô tả mục tiêu dự án."
      },
      {
        title: "Bước 2: Cài đặt lịch làm việc và ngày nghỉ",
        content: "Trong cửa sổ thiết lập dự án -> Chọn thẻ <strong>Calendar</strong> -> Đánh dấu các ngày nghỉ cuối tuần (Saturday, Sunday) hoặc bỏ tích thứ Bảy nếu có làm việc -> Thêm các ngày nghỉ lễ quốc gia."
      },
      {
        title: "Bước 3: Lưu dự án định dạng chuẩn",
        content: "Vào <strong>Project -> Save As (Ctrl + S)</strong> -> Chọn thư mục lưu trữ và lưu tệp dưới dạng <strong>.gan</strong> (GanttProject File) để dễ dàng cập nhật tiến độ sau này."
      }
    ],
    practice: "Khởi tạo một tệp dự án GanttProject mới cho kế hoạch 'Tổ chức Giải bóng đá học sinh THPT' với thời gian bắt đầu từ thứ Hai tuần tới, thiết lập ngày làm việc từ thứ Hai đến thứ Sáu.",
    quizzes: [
      {
        question: "Đặc điểm cơ bản nào sau đây phân biệt một 'Dự án' (Project) với một hoạt động vận hành thường nhật (Operations)?",
        options: [
          "Dự án có tính chất tạm thời, có thời điểm bắt đầu và kết thúc xác định nhằm tạo ra một sản phẩm/kết quả duy nhất",
          "Dự án là công việc lặp đi lặp lại hàng ngày không bao giờ kết thúc",
          "Dự án không bao giờ bị giới hạn bởi ngân sách tài chính",
          "Dự án chỉ được thực hiện bởi một người duy nhất"
        ],
        correct: 0,
        explanation: "Dự án mang tính tạm thời (có điểm khởi đầu và kết thúc rõ ràng) và tạo ra sản phẩm/kết quả độc nhất vô nhị trong giới hạn nguồn lực cho phép."
      },
      {
        question: "Tam giác quản lý dự án truyền thống (Project Management Triangle) gồm 3 yếu tố ràng buộc cốt lõi nào?",
        options: [
          "Phạm vi (Scope), Thời gian (Time) và Chi phí (Cost)",
          "Phần cứng, Phần mềm và Mạng máy tính",
          "Đạo đức, Pháp luật và Văn hóa",
          "Bàn phím, Màn hình và Con chuột"
        ],
        correct: 0,
        explanation: "Tam giác ràng buộc kinh điển của quản trị dự án gồm 3 đỉnh: Phạm vi (Scope), Thời gian (Time) và Chi phí/Ngân sách (Cost)."
      },
      {
        question: "Phần mở rộng mặc định của tệp lưu trữ dự án trong phần mềm GanttProject là gì?",
        options: [
          ".gan",
          ".xlsx",
          ".mpp",
          ".docx"
        ],
        correct: 0,
        explanation: "GanttProject sử dụng định dạng tệp có đuôi mở rộng là .gan để lưu trữ toàn bộ cấu trúc công việc, lịch trình và tài nguyên."
      },
      {
        question: "Biểu đồ Gantt (Gantt Chart) biểu diễn tiến độ công việc dưới dạng trực quan nào?",
        options: [
          "Các thanh ngang nằm dọc theo trục thời gian",
          "Biểu đồ hình quạt tròn chia phần trăm",
          "Bảng chữ cái xếp theo thứ tự từ điển",
          "Biểu đồ hình mạng nhện"
        ],
        correct: 0,
        explanation: "Biểu đồ Gantt biểu diễn các nhiệm vụ dưới dạng những thanh ngang (bars) trải dài theo trục thời gian từ ngày bắt đầu đến ngày kết thúc."
      }
    ]
  },
  {
    lessonNum: 2,
    id: "bai-2",
    topicNum: 1,
    topicName: "Chuyên đề 1: Phần mềm quản lý dự án (GanttProject)",
    title: "Bài 2: Thiết lập tiến độ dự án",
    tag: "WBS & Predecessors",
    objectives: [
      "Xây dựng cơ cấu phân chia công việc WBS (Work Breakdown Structure) từ mục tiêu lớn xuống các gói công việc chi tiết.",
      "Tạo nhiệm vụ (Task), phân cấp nhiệm vụ mẹ (Summary Task) và nhiệm vụ con bằng công cụ Thụt lề (Indent - Ctrl+H / Outdent - Ctrl+Shift+H).",
      "Thiết lập thời lượng công việc (Duration), thời điểm mốc quan trọng (Milestone) thời lượng bằng 0.",
      "Thiết lập các mối quan hệ phụ thuộc công việc (Task Predecessors): Finish-to-Start (FS), Start-to-Start (SS), Finish-to-Finish (FF)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-sitemap"></i> Cấu trúc WBS & Phân cấp nhiệm vụ
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Summary Task (Nhiệm vụ cha):</strong> Đại diện cho một giai đoạn, tự động tính tổng thời lượng từ các nhiệm vụ con bên dưới.</li>
            <li><strong>Sub-task (Nhiệm vụ con):</strong> Các công việc cụ thể trực tiếp được thực thi.</li>
            <li><strong>Milestone (Cột mốc):</strong> Đánh dấu sự kiện hoàn thành một giai đoạn lớn (thời lượng = 0 ngày, ký hiệu hình thoi).</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-link"></i> Mối quan hệ phụ thuộc (Predecessors)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Finish-to-Start (FS):</strong> Phổ biến nhất. Công việc B chỉ được bắt đầu khi công việc A đã hoàn thành xong.</li>
            <li><strong>Start-to-Start (SS):</strong> Công việc B bắt đầu đồng thời khi công việc A bắt đầu.</li>
            <li><strong>Finish-to-Finish (FF):</strong> Công việc B chỉ kết thúc khi công việc A kết thúc.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Tạo danh sách nhiệm vụ WBS",
        content: "Nhấn <strong>Ctrl + T</strong> để thêm nhiệm vụ mới -> Gõ tên: <em>1. Khảo sát yêu cầu</em>, <em>2. Thiết kế giao diện</em>, <em>3. Lập trình tính năng</em>, <em>4. Nghiệm thu bàn giao</em>."
      },
      {
        title: "Bước 2: Phân cấp nhiệm vụ và thiết lập Milestone",
        content: "Chọn nhiệm vụ con, nhấn biểu tượng <strong>Indent (mũi tên sang phải)</strong> để lùi vào trong nhiệm vụ cha -> Nhấp đúp vào nhiệm vụ 'Nghiệm thu', tích chọn ô <strong>Milestone</strong> để biến thành cột mốc thời lượng 0 ngày."
      },
      {
        title: "Bước 3: Liên kết mối quan hệ phụ thuộc tiến độ",
        content: "Nhấp đúp vào nhiệm vụ B -> Chọn thẻ <strong>Predecessors</strong> -> Thêm nhiệm vụ A -> Chọn kiểu liên kết <strong>Finish-to-Start (FS)</strong> -> Quan sát mũi tên nối liền 2 thanh ngang trên biểu đồ Gantt."
      }
    ],
    practice: "Thiết lập tiến độ chi tiết cho giai đoạn 'Thiết kế ấn phẩm kỷ yếu' gồm 3 nhiệm vụ: 'Thu thập ảnh kỷ yếu (3 ngày)', 'Thiết kế bố cục Photoshop (5 ngày, sau khi có ảnh)', 'In ấn duyệt mẫu (1 ngày)'.",
    quizzes: [
      {
        question: "Cột mốc (Milestone) trong quản lý dự án có đặc trưng kỹ thuật nào sau đây?",
        options: [
          "Có thời lượng bằng 0 ngày, đánh dấu sự hoàn thành của một giai đoạn hay sự kiện then chốt",
          "Là nhiệm vụ tốn nhiều ngân sách tài chính nhất",
          "Phải kéo dài ít nhất 30 ngày làm việc",
          "Là nhiệm vụ bắt buộc phải làm lại nhiều lần"
        ],
        correct: 0,
        explanation: "Milestone là sự kiện quan trọng đánh dấu hoàn thành một mốc then chốt, không tiêu tốn thời gian thực thi nên thời lượng quy ước bằng 0 ngày (thường ký hiệu hình thoi đen)."
      },
      {
        question: "Mối quan hệ phụ thuộc Finish-to-Start (FS) giữa hai công việc A và B có ý nghĩa là gì?",
        options: [
          "Công việc B chỉ có thể bắt đầu sau khi công việc A đã hoàn thành xong",
          "Công việc B phải bắt đầu trước khi công việc A bắt đầu",
          "Công việc B và A bắt buộc phải kết thúc cùng một thời điểm",
          "Công việc B bắt đầu thì công việc A bị hủy bỏ"
        ],
        correct: 0,
        explanation: "Finish-to-Start (FS) là mối quan hệ kinh điển: Công việc đi sau (B) chỉ có thể khởi động khi công việc tiền nhiệm (A) đã hoàn tất hoàn toàn."
      },
      {
        question: "Trong GanttProject, phím tắt để tạo nhanh một nhiệm vụ mới (Task) là gì?",
        options: [
          "Ctrl + T",
          "Ctrl + N",
          "Ctrl + M",
          "Ctrl + D"
        ],
        correct: 0,
        explanation: "Tổ hợp phím Ctrl + T dùng để tạo mới một Task trong bảng danh sách công việc của GanttProject."
      },
      {
        question: "Để biến một nhiệm vụ thông thường thành nhiệm vụ con trực thuộc một nhiệm vụ cha (Summary Task), ta thực hiện thao tác nào?",
        options: [
          "Chọn nhiệm vụ và bấm biểu tượng Indent (Thụt lề sang phải)",
          "Bấm Delete xóa nhiệm vụ",
          "Nhấp chuột phải chọn Convert to PDF",
          "Đổi tên nhiệm vụ thành chữ in hoa"
        ],
        correct: 0,
        explanation: "Thao tác Indent (Thụt dòng) biến nhiệm vụ đang chọn thành nhiệm vụ con trực thuộc nhiệm vụ đứng ngay phía trên nó."
      }
    ]
  },
  {
    lessonNum: 3,
    id: "bai-3",
    topicNum: 1,
    topicName: "Chuyên đề 1: Phần mềm quản lý dự án (GanttProject)",
    title: "Bài 3: Phân bổ nhân lực và kinh phí dự án",
    tag: "Human Resources & Budgeting",
    objectives: [
      "Quản lý danh sách nguồn lực con người (Human Resources): Thêm nhân sự, định danh vai trò (Project Manager, Designer, Developer, Tester), địa chỉ liên hệ và chi phí định mức theo ngày/giờ.",
      "Gán nguồn lực (Resource Assignment) cho từng công việc cụ thể và phân chia tỷ lệ tham gia (Workload 0% - 100%).",
      "Theo dõi biểu đồ tải nguồn lực (Resource Chart) để phát hiện và ngăn chặn tình trạng phân bổ quá tải (Over-allocated / Conflict).",
      "Tính toán dự toán kinh phí tổng thể dự án dựa trên định mức lương và thời lượng công việc."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-users-gear"></i> Quản lý Nguồn lực (Resources)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Tạo nguồn lực (Ctrl+H trong tab Resources):</strong> Khai báo họ tên, vai trò mặc định, số điện thoại/email.</li>
            <li><strong>Định mức chi phí (Cost/Rate):</strong> Mức thù lao chi trả cho 1 ngày công làm việc của nhân sự.</li>
            <li><strong>Điều phối linh hoạt:</strong> Một công việc có thể phân công cho nhiều thành viên phối hợp cùng làm.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation"></i> Cảnh báo Quá tải (Over-allocation)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Xảy ra khi một người bị gán cho 2 hoặc nhiều công việc chạy song song cùng một thời điểm với tổng tỷ lệ > 100%.</li>
            <li>Trên biểu đồ Resource Chart, thanh trạng thái của nhân sự sẽ chuyển sang <strong>Màu đỏ cảnh báo</strong>.</li>
            <li><em>Giải pháp:</em> San bằng tải (Resource Leveling), dời lịch công việc hoặc bổ sung thêm nhân sự hỗ trợ.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Khai báo hồ sơ nhân sự dự án",
        content: "Chuyển sang thẻ <strong>Resources</strong> trên menu chính -> Nhấn biểu tượng <em>New Resource</em> -> Nhập tên: 'Nguyễn Văn A', Role: 'Developer', Standard rate: '500,000 VND/ngày'."
      },
      {
        title: "Bước 2: Gán nhân sự vào nhiệm vụ",
        content: "Quay về thẻ Gantt -> Nhấp đúp vào nhiệm vụ 'Lập trình tính năng' -> Chọn thẻ <strong>Resources</strong> -> Thêm 'Nguyễn Văn A' với tỷ lệ <em>Coordinator / 100%</em>."
      },
      {
        title: "Bước 3: Kiểm tra xung đột trên biểu đồ Resource Chart",
        content: "Mở biểu đồ <strong>Resource Chart</strong> -> Rà soát các dải màu hiển thị tải công việc -> Đảm bảo không có nhân sự nào bị thanh màu đỏ báo quá tải."
      }
    ],
    practice: "Tạo 3 nhân sự: 'Trưởng ban (Quản lý)', 'Biên tập viên (Nội dung)' và 'Họa sĩ (Thiết kế)'. Gán phân công họ vào các công việc tương ứng trong dự án làm kỷ yếu lớp và kiểm tra tải công việc.",
    quizzes: [
      {
        question: "Hiện tượng một nhân sự bị phân công làm nhiều công việc diễn ra đồng thời trong cùng một ngày với tổng tải vượt quá 100% khả năng được gọi là gì?",
        options: [
          "Quá tải nguồn lực (Resource Over-allocation)",
          "Đường găng dự án (Critical Path)",
          "Cột mốc dự án (Milestone)",
          "Thụt lề công việc (Indent Task)"
        ],
        correct: 0,
        explanation: "Khi tổng thời gian hay công suất được giao trong một ngày vượt quá 100% định mức của nhân sự, phần mềm sẽ báo động hiện tượng quá tải (Over-allocation) bằng màu đỏ."
      },
      {
        question: "Khi phát hiện một thành viên trong nhóm bị quá tải công việc trên biểu đồ nguồn lực, biện pháp khắc phục hợp lý nhất là gì?",
        options: [
          "Điều chỉnh lại lịch trình, dời ngày thực hiện hoặc phân bổ thêm người khác cùng hỗ trợ (San bằng nguồn lực)",
          "Xóa bỏ hoàn toàn dự án",
          "Kéo dài giờ làm việc của nhân sự đó lên 24 giờ mỗi ngày",
          "Tắt phần mềm máy tính đi"
        ],
        correct: 0,
        explanation: "Kỹ thuật San bằng nguồn lực (Resource Leveling) yêu cầu người quản lý đàm phán kéo giãn tiến độ hoặc bổ sung người làm thay thế để tránh quá tải."
      },
      {
        question: "Trong GanttProject, mục 'Standard Rate' khi thiết lập hồ sơ nhân sự dùng để quy định thông số nào?",
        options: [
          "Đơn giá thù lao/tiền công chi trả cho nhân sự theo đơn vị thời gian",
          "Tốc độ gõ bàn phím của nhân sự",
          "Điểm trung bình học tập của nhân sự",
          "Số lượng máy tính cá nhân sở hữu"
        ],
        correct: 0,
        explanation: "Standard Rate là đơn giá chi phí nhân công theo ngày/giờ dùng để phần mềm nhân với thời lượng ra tổng kinh phí nhân sự của dự án."
      },
      {
        question: "Biểu đồ nào trong GanttProject giúp quan sát trực quan khối lượng công việc được giao cho từng thành viên theo từng ngày?",
        options: [
          "Biểu đồ nguồn lực (Resource Chart)",
          "Biểu đồ hình tròn Pie Chart",
          "Biểu đồ phân tán Scatter Plot",
          "Biểu đồ nến chứng khoán"
        ],
        correct: 0,
        explanation: "Resource Chart hiển thị trực quan mức độ bận rộn và tải công việc của từng thành viên qua các vạch màu thời gian."
      }
    ]
  },
  {
    lessonNum: 4,
    id: "bai-4",
    topicNum: 1,
    topicName: "Chuyên đề 1: Phần mềm quản lý dự án (GanttProject)",
    title: "Bài 4: Quản lí tiến độ dự án",
    tag: "Progress Tracking & Critical Path",
    objectives: [
      "Hiểu rõ khái niệm và tầm quan trọng sống còn của Đường găng (Critical Path Method - CPM) – chuỗi các công việc quyết định ngày kết thúc dự án.",
      "Cập nhật tỷ lệ phần trăm hoàn thành (% Progress: 0% - 100%) của từng nhiệm vụ trong quá trình dự án đang diễn ra.",
      "Thiết lập và so sánh với Kế hoạch cơ sở (Baseline) để phát hiện kịp thời các sai lệch tiến độ chậm trễ.",
      "Áp dụng các biện pháp đẩy nhanh tiến độ dự án khi bị trễ hạn: Fast-tracking (Làm việc song song) và Crashing (Tăng cường thêm nguồn lực)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-route"></i> Đường găng (Critical Path) là gì?
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Là chuỗi các công việc liên hoàn dài nhất từ đầu đến cuối dự án, không có bất kỳ thời gian dự trữ (Total Slack = 0).</li>
            <li>Bất kỳ một công việc nào trên đường găng bị chậm 1 ngày, thì toàn bộ ngày kết thúc của cả dự án sẽ <strong>bị trễ đúng 1 ngày</strong>.</li>
            <li>Trên GanttProject, các công việc găng được làm nổi bật để người quản lý tập trung tối đa nguồn lực giám sát.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-clock-rotate-left"></i> Kế hoạch cơ sở (Baseline)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Là bản sao lưu kế hoạch ban đầu được cấp trên phê duyệt.</li>
            <li>Dùng làm 'thước đo chuẩn' đối chiếu với tiến độ thực tế (Actual Progress) xem dự án đang chạy nhanh hơn hay chậm hơn kế hoạch.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Lưu Kế hoạch cơ sở (Manage Baselines)",
        content: "Vào menu <strong>Project -> Baselines -> Manage Baselines</strong> -> Nhấn <em>Create New Baseline</em> -> Đặt tên: 'Kế hoạch ban đầu được duyệt'."
      },
      {
        title: "Bước 2: Cập nhật tỷ lệ hoàn thành thực tế",
        content: "Nhấp đúp vào nhiệm vụ đang thực hiện -> Điều chỉnh thanh trượt <strong>Progress</strong> (ví dụ: đạt 75%) -> Thanh nhiệm vụ sẽ xuất hiện phần ruột đậm màu thể hiện tiến độ."
      },
      {
        title: "Bước 3: Hiển thị đường găng trên biểu đồ Gantt",
        content: "Nhấp vào biểu tượng <strong>Show Critical Path</strong> trên thanh công cụ -> Quan sát các công việc găng chuyển sang màu đỏ rực để ưu tiên nguồn lực theo dõi sát sao."
      }
    ],
    practice: "Mô phỏng tình huống: Nhiệm vụ 'Thu thập ảnh kỷ yếu' bị trễ 2 ngày so với kế hoạch ban đầu. Hãy cập nhật tiến độ, quan sát đường găng và ghi nhận ngày kết thúc dự án bị lùi lại như thế nào.",
    quizzes: [
      {
        question: "Đường găng (Critical Path) trong quản trị tiến độ dự án có đặc tính cốt lõi nào?",
        options: [
          "Bao gồm các công việc không có thời gian dự trữ; nếu bất kỳ công việc nào trên đường găng bị chậm thì toàn bộ dự án sẽ bị trễ hạn tương ứng",
          "Chỉ gồm các công việc nhẹ nhàng nhất không cần phân công ai",
          "Là đường đi ngắn nhất để hủy bỏ dự án",
          "Là các công việc có thể làm lúc nào cũng được tùy ý"
        ],
        correct: 0,
        explanation: "Đường găng là chuỗi công việc dài nhất xuyên suốt dự án và có tổng thời gian dự trữ bằng 0; chậm một mắt xích trên đường găng là chậm cả dự án."
      },
      {
        question: "Kế hoạch cơ sở (Baseline) trong phần mềm quản lý dự án đóng vai trò gì?",
        options: [
          "Lưu lại cột mốc kế hoạch đã được phê duyệt làm cơ sở đối chiếu và so sánh sai lệch với tiến độ thực tế",
          "Là tệp virus phá hủy máy tính",
          "Là bản nháp bỏ đi không có giá trị",
          "Là danh bạ số điện thoại của khách hàng"
        ],
        correct: 0,
        explanation: "Baseline là ảnh chụp kế hoạch chuẩn ban đầu để làm căn cứ đánh giá dự án đang hoàn thành trước, đúng hạn hay bị trễ hạn."
      },
      {
        question: "Phương pháp 'Fast-tracking' để rút ngắn tiến độ khi dự án bị trễ hạn là gì?",
        options: [
          "Cho phép các công việc vốn diễn ra tuần tự được thực hiện song song đồng thời cùng nhau",
          "Bắt nhân sự làm việc không được ngủ",
          "Bỏ qua khâu kiểm tra chất lượng hoàn toàn",
          "Hủy bỏ hợp đồng với khách hàng"
        ],
        correct: 0,
        explanation: "Fast-tracking là kỹ thuật nén tiến độ bằng cách thực hiện gối đầu hoặc song song các công việc vốn dĩ làm tuần tự theo trình tự FS."
      },
      {
        question: "Khi một nhiệm vụ đã hoàn thành 100% khối lượng công việc, thanh biểu diễn của nó trên biểu đồ Gantt sẽ có biểu hiện gì?",
        options: [
          "Toàn bộ thanh ngang được tô kín đậm màu sắc thể hiện tiến độ 100%",
          "Thanh ngang tự động biến mất hoàn toàn khỏi màn hình",
          "Phần mềm sẽ tự động phát ra tiếng chuông báo động",
          "Thanh ngang chuyển thành màu trắng trong suốt"
        ],
        correct: 0,
        explanation: "Khi cập nhật Progress = 100%, thanh nhiệm vụ trên biểu đồ Gantt được tô đặc kín thể hiện nhiệm vụ đã hoàn tất trọn vẹn."
      }
    ]
  },
  {
    lessonNum: 5,
    id: "bai-5",
    topicNum: 1,
    topicName: "Chuyên đề 1: Phần mềm quản lý dự án (GanttProject)",
    title: "Bài 5: Tăng năng suất làm việc với phần mềm quản lí dự án",
    tag: "Productivity & Reporting",
    objectives: [
      "Khai thác các tính năng tìm kiếm, bộ lọc nâng cao (Filters) và sắp xếp nhiệm vụ theo nhiều tiêu chí (theo người phụ trách, theo mức độ ưu tiên, theo tiến độ).",
      "Tùy biến cột hiển thị trong bảng công việc: Thêm cột Chi phí (Cost), Mã số phân cấp WBS Code, Thời gian bắt đầu sớm nhất (Early Start).",
      "Xuất báo cáo dự án chuyên nghiệp ra nhiều định dạng chuẩn quốc tế: Tệp báo cáo PDF in ấn, hình ảnh PNG chèn vào slide thuyết trình, bảng tính CSV/Excel và định dạng tương thích Microsoft Project (.mpx / .mpp).",
      "Ứng dụng làm việc nhóm cộng tác chia sẻ tệp dự án qua nền tảng đám mây (Google Drive, WebDAV)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-file-export"></i> Xuất bản Báo cáo đa định dạng
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>PDF Report:</strong> Báo cáo toàn diện gồm trang bìa, cây phân cấp WBS, danh sách nhiệm vụ và hình ảnh biểu đồ Gantt sắc nét.</li>
            <li><strong>Raster Image (PNG/JPG):</strong> Chụp toàn bộ hoặc một khoảng thời gian của biểu đồ tiến độ để dán vào bài thuyết trình báo cáo.</li>
            <li><strong>CSV Spreadsheet:</strong> Xuất số liệu sang Excel để tính toán thống kê tài chính nâng cao.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-cloud-arrow-up"></i> Cộng tác Đám mây & Đồng bộ
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Hỗ trợ mở và lưu trực tiếp tệp dự án lên máy chủ WebDAV hoặc kho lưu trữ điện toán đám mây.</li>
            <li>Giúp cả ban cán sự và các nhóm trưởng luôn truy cập được phiên bản kế hoạch mới nhất theo thời gian thực.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Tùy biến bảng dữ liệu công việc",
        content: "Nhấp chuột phải vào thanh tiêu đề bảng Task -> Chọn <strong>Manage columns</strong> -> Tích chọn thêm các cột <em>Cost</em> (Kinh phí) và <em>Predecessors</em> (Nhiệm vụ trước)."
      },
      {
        title: "Bước 2: Sử dụng bộ lọc công việc theo nhân sự",
        content: "Nhấp vào biểu tượng <strong>Filter</strong> -> Chọn lọc ra những nhiệm vụ do thành viên 'Nguyễn Văn A' phụ trách để theo dõi tiến độ công việc riêng của cá nhân."
      },
      {
        title: "Bước 3: Xuất báo cáo dự án ra tệp PDF chuẩn",
        content: "Chọn menu <strong>Project -> Export (Ctrl + E)</strong> -> Chọn <strong>PDF report</strong> -> Tùy chỉnh khổ giấy A4 ngang -> Nhấn <em>Export</em> để in nộp cho giáo viên hướng dẫn."
      }
    ],
    practice: "Xuất bản báo cáo tổng kết dự án 'Website Kỷ yếu lớp' ra 2 định dạng: 1 tệp PDF hoàn chỉnh và 1 tệp hình ảnh PNG biểu đồ Gantt để đính kèm vào báo cáo tổng kết môn học.",
    quizzes: [
      {
        question: "Phần mềm GanttProject hỗ trợ xuất báo cáo dự án ra những định dạng phổ biến nào sau đây?",
        options: [
          "PDF, hình ảnh PNG, bảng tính CSV và định dạng Microsoft Project",
          "Chỉ xuất được duy nhất tệp âm thanh MP3",
          "Chỉ xuất được tệp video TikTok",
          "Không cho phép xuất dữ liệu ra ngoài"
        ],
        correct: 0,
        explanation: "GanttProject có tính năng xuất phong phú: Tệp PDF báo cáo đầy đủ, ảnh PNG biểu đồ Gantt, file dữ liệu CSV và tệp trao đổi với Microsoft Project."
      },
      {
        question: "Tổ hợp phím tắt để mở hộp thoại xuất khẩu dữ liệu (Export) trong GanttProject là gì?",
        options: [
          "Project -> Export (Ctrl + E)",
          "Ctrl + Alt + Del",
          "Ctrl + P",
          "Shift + F10"
        ],
        correct: 0,
        explanation: "Ctrl + E (hoặc Project -> Export) kích hoạt trình thuật sĩ hướng dẫn xuất khẩu dự án ra nhiều định dạng."
      },
      {
        question: "Tính năng nào giúp người quản lý nhanh chóng xem riêng danh sách các công việc được giao cho một nhân sự cụ thể?",
        options: [
          "Sử dụng bộ lọc (Filter) theo trường Nguồn lực phân công (Assigned Resource)",
          "Xóa bỏ hết tên của các nhân sự khác",
          "Tắt màn hình máy tính",
          "Khởi tạo lại dự án mới từ đầu"
        ],
        correct: 0,
        explanation: "Bộ lọc (Filter) cho phép hiển thị có chọn lọc các nhiệm vụ thỏa mãn điều kiện nhất định (ví dụ: lọc theo nhân sự, theo công việc trễ hạn)."
      },
      {
        question: "Lợi ích nổi bật nhất của việc lưu trữ và chia sẻ tệp kế hoạch dự án trên dịch vụ đám mây là gì?",
        options: [
          "Tất cả các thành viên trong nhóm luôn xem và cập nhật được phiên bản tiến độ mới nhất ở mọi nơi",
          "Không cần kết nối Internet vẫn gửi được file cho bạn bè",
          "Tự động làm hộ hết mọi bài tập trên lớp",
          "Giúp máy tính chạy nhanh gấp 100 lần"
        ],
        correct: 0,
        explanation: "Lưu trữ đám mây giúp đồng bộ hóa dữ liệu thời gian thực, đảm bảo tất cả thành viên trong ban dự án đều nắm bắt chính xác tiến độ chung."
      }
    ]
  },

  // ==========================================
  // CHUYÊN ĐỀ 2: THỰC HÀNH CÀI ĐẶT, GỠ BỎ PHẦN MỀM VÀ BẢO VỆ DỮ LIỆU
  // ==========================================
  {
    lessonNum: 6,
    id: "bai-6",
    topicNum: 2,
    topicName: "Chuyên đề 2: Cài đặt, gỡ bỏ phần mềm & Bảo vệ dữ liệu",
    title: "Bài 6: Cài đặt và gỡ bỏ phần mềm",
    tag: "Software Management",
    objectives: [
      "Phân biệt các hình thức phân phối phần mềm: Phần mềm cài đặt truyền thống (.exe, .msi), phần mềm di động (Portable), phần mềm từ kho ứng dụng (Microsoft Store) và trình quản lý gói (winget).",
      "Thực hiện quy trình cài đặt phần mềm an toàn: Kiểm tra nguồn gốc tải uy tín, kiểm tra mã băm SHA-256 chống giả mạo, đọc kỹ các tùy chọn chèn phần mềm rác (Adware/Bloatware).",
      "Gỡ bỏ phần mềm chuẩn tắc qua Windows Settings / Control Panel và sử dụng công cụ chuyên dụng gỡ tận gốc khóa Registry dư thừa.",
      "Kiểm tra và quản lý các phần mềm khởi động cùng hệ điều hành (Startup apps) trong Task Manager để tối ưu tốc độ máy."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-box-archive"></i> Các dạng phần mềm trên Windows
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Installer (.exe, .msi):</strong> Ghi tệp vào Program Files, tạo Registry, phím tắt Start Menu và mục gỡ cài đặt.</li>
            <li><strong>Portable:</strong> Chạy trực tiếp từ thư mục hoặc USB mà không cần cài đặt, không ghi vào hệ thống Registry.</li>
            <li><strong>Winget (Windows Package Manager):</strong> Cài đặt phần mềm nhanh chóng bằng lệnh dòng lệnh trong PowerShell (ví dụ: <code>winget install GIMP.GIMP</code>).</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-trash-can"></i> Gỡ bỏ phần mềm sạch sẽ
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><em>Không được:</em> Xóa trực tiếp thư mục trong Program Files (gây lỗi Registry và rác hệ thống).</li>
            <li><em>Cách chuẩn:</em> Vào <strong>Settings -> Apps -> Installed apps -> Uninstall</strong>.</li>
            <li><em>Quản lý Startup:</em> Mở Task Manager (Ctrl+Shift+Esc) -> Thẻ <strong>Startup apps</strong> -> Disable các ứng dụng không cần thiết để máy khởi động nhanh.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Tải và cài đặt phần mềm từ nguồn chính thức",
        content: "Truy cập trang chủ chính thức (ví dụ: 7-zip.org) -> Tải bản cài đặt 64-bit .msi -> Quét virus trước khi mở -> Nhấn Next và đọc kỹ thỏa thuận sử dụng."
      },
      {
        title: "Bước 2: Gỡ bỏ phần mềm đúng quy trình kỹ thuật",
        content: "Nhấn <strong>Windows + I</strong> mở Settings -> Vào mục <strong>Apps -> Installed apps</strong> -> Tìm phần mềm cần gỡ -> Nhấn dấu 3 chấm chọn <strong>Uninstall</strong> và làm theo hướng dẫn."
      },
      {
        title: "Bước 3: Vô hiệu hóa ứng dụng chạy ngầm khởi động",
        content: "Nhấn <strong>Ctrl + Shift + Esc</strong> mở Task Manager -> Chọn thẻ <strong>Startup apps</strong> -> Nhấp chuột phải vào ứng dụng nặng (ví dụ: Spotify, Game launcher) -> Chọn <strong>Disable</strong>."
      }
    ],
    practice: "Thực hành sử dụng công cụ dòng lệnh Winget trong PowerShell để kiểm tra phiên bản và cập nhật các phần mềm trên máy tính: `winget list` và `winget upgrade`.",
    quizzes: [
      {
        question: "Hành động nào sau đây là SAI LẦM và không nên làm khi muốn gỡ bỏ một phần mềm đã cài đặt trên máy tính Windows?",
        options: [
          "Vào ổ đĩa C:\\Program Files và bấm phím Delete xóa trực tiếp thư mục chứa phần mềm",
          "Vào Settings -> Apps -> Installed apps và chọn Uninstall",
          "Vào Control Panel -> Programs and Features -> Uninstall a program",
          "Sử dụng trình gỡ cài đặt chuyên dụng (Revo Uninstaller)"
        ],
        correct: 0,
        explanation: "Xóa trực tiếp thư mục chỉ xóa các tệp thực thi cục bộ nhưng để lại rất nhiều tệp cấu hình, khóa Registry rác và liên kết hỏng gây lỗi hệ điều hành."
      },
      {
        question: "Phần mềm dạng 'Portable' có ưu điểm nổi bật nào so với phần mềm cài đặt truyền thống?",
        options: [
          "Có thể sao chép vào USB và chạy trực tiếp trên bất kỳ máy tính nào mà không cần qua các bước cài đặt ghi vào hệ thống",
          "Bắt buộc phải có đĩa CD bản quyền mới mở được",
          "Không bao giờ bị lỗi phần mềm",
          "Chỉ chạy được trên máy chủ siêu máy tính"
        ],
        correct: 0,
        explanation: "Phần mềm Portable đóng gói toàn bộ thư viện chạy trong một thư mục duy nhất, cắm USB là mở dùng ngay mà không làm thay đổi hệ thống máy trạm."
      },
      {
        question: "Công cụ dòng lệnh quản lý gói phần mềm chính thức được tích hợp sẵn trên Windows 10/11 hiện đại là gì?",
        options: [
          "winget",
          "pip",
          "npm",
          "brew"
        ],
        correct: 0,
        explanation: "Winget (Windows Package Manager) là trình quản lý gói chính thức của Microsoft hỗ trợ tìm kiếm, cài đặt và cập nhật phần mềm qua dòng lệnh."
      },
      {
        question: "Để tắt bớt các chương trình tự động chạy ngầm cùng lúc khi vừa bật máy tính gây chậm máy, ta truy cập vào mục nào trong Task Manager?",
        options: [
          "Startup apps",
          "Performance",
          "Processes",
          "Users"
        ],
        correct: 0,
        explanation: "Thẻ Startup apps trong Task Manager liệt kê toàn bộ các ứng dụng khởi động cùng Windows và cho phép người dùng Disable để tăng tốc boot máy."
      }
    ]
  },
  {
    lessonNum: 7,
    id: "bai-7",
    topicNum: 2,
    topicName: "Chuyên đề 2: Cài đặt, gỡ bỏ phần mềm & Bảo vệ dữ liệu",
    title: "Bài 7: Cài đặt hệ điều hành máy tính",
    tag: "OS Installation & BIOS/UEFI",
    objectives: [
      "Hiểu rõ vai trò nền tảng của Hệ điều hành (Operating System) trong việc quản lý tài nguyên phần cứng và cung cấp môi trường chạy ứng dụng.",
      "Phân biệt hai chuẩn giao tiếp khởi động: BIOS cũ (Legacy/MBR) và chuẩn hiện đại UEFI (GPT) bảo mật Secure Boot.",
      "Thực hành tạo ổ USB cài đặt hệ điều hành khởi động (Bootable USB) bằng phần mềm Rufus hoặc Media Creation Tool.",
      "Nắm vững các bước cài đặt hệ điều hành Windows 11 / Ubuntu Linux: Thiết lập thứ tự Boot trong BIOS/UEFI, phân vùng ổ đĩa, cài đặt Driver và kích hoạt hệ thống."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-microchip"></i> BIOS/MBR vs UEFI/GPT
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Legacy BIOS (MBR):</strong> Chuẩn cũ thập niên 1980, giới hạn ổ đĩa tối đa 2TB và tối đa 4 phân vùng chính (Primary partitions).</li>
            <li><strong>UEFI (GPT):</strong> Chuẩn hiện đại, khởi động siêu nhanh, hỗ trợ ổ đĩa dung lượng khổng lồ (> 2TB), tích hợp tính năng Secure Boot chống mã độc khởi động Rootkit.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-brands fa-usb"></i> Công cụ tạo USB Boot Rufus
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Yêu cầu: USB dung lượng tối thiểu 8GB (dữ liệu trên USB sẽ bị xóa sạch khi format).</li>
            <li>Tệp ảnh đĩa <strong>.ISO</strong> chính thức tải từ Microsoft.</li>
            <li>Partition scheme: Chọn <strong>GPT</strong>; Target system: <strong>UEFI (non CSM)</strong>.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Tạo USB cài đặt hệ điều hành với Rufus",
        content: "Cắm USB 8GB -> Mở phần mềm Rufus -> Mục <em>Boot selection</em> chọn tệp Windows 11 ISO -> Partition scheme chọn <strong>GPT</strong> -> Bấm <strong>START</strong> để tạo USB Boot."
      },
      {
        title: "Bước 2: Truy cập BIOS/UEFI và chọn Boot USB",
        content: "Cắm USB vào máy cần cài -> Bật nguồn và nhấn liên tục phím Boot Menu (thường là <strong>F12</strong>, <strong>F2</strong>, <strong>Delete</strong> hoặc <strong>Esc</strong> tùy theo hãng bo mạch chủ) -> Chọn khởi động từ USB chuẩn UEFI."
      },
      {
        title: "Bước 3: Phân vùng ổ đĩa và tiến hành cài đặt",
        content: "Chọn ngôn ngữ và bàn phím -> Chọn <em>Custom: Install Windows only (advanced)</em> -> Phân chia phân vùng hệ thống (ổ C) tối thiểu 64GB -> Bấm Next và chờ máy tính tự động cài đặt và khởi động lại."
      }
    ],
    practice: "Hãy tra cứu phím tắt truy cập BIOS và Boot Menu của 3 hãng máy tính phổ biến (Dell, HP, Asus, Lenovo) và ghi chép lại bảng hướng dẫn thực hành cho lớp.",
    quizzes: [
      {
        question: "Chuẩn giao diện khởi động máy tính hiện đại thay thế cho chuẩn BIOS cũ, hỗ trợ ổ đĩa chuẩn phân vùng GPT trên 2TB và tính năng Secure Boot là gì?",
        options: [
          "UEFI",
          "DOS",
          "NTFS",
          "FAT32"
        ],
        correct: 0,
        explanation: "UEFI (Unified Extensible Firmware Interface) là chuẩn firmware hiện đại thay thế BIOS truyền thống, tương thích định dạng ổ đĩa GPT và tăng tốc độ khởi động."
      },
      {
        question: "Phần mềm miễn phí phổ biến nào thường được dùng để ghi tệp ảnh ISO hệ điều hành ra USB tạo ổ USB Boot cài đặt máy tính?",
        options: [
          "Rufus",
          "VLC Player",
          "MS Word",
          "Excel"
        ],
        correct: 0,
        explanation: "Rufus là công cụ mã nguồn mở nhỏ gọn, mạnh mẽ chuyên dùng để tạo USB khởi động (Bootable USB) từ các tệp ISO."
      },
      {
        question: "Khi cài đặt mới hệ điều hành Windows bằng tùy chọn 'Custom: Install Windows only', điều gì sẽ xảy ra với phân vùng ổ đĩa được chọn làm ổ hệ thống (ổ C) nếu ta nhấn 'Format'?",
        options: [
          "Toàn bộ dữ liệu cũ trên phân vùng đó sẽ bị xóa sạch để sẵn sàng ghi hệ điều hành mới",
          "Dữ liệu được tự động gửi lên email cá nhân",
          "Máy tính sẽ bị khóa vĩnh viễn",
          "Màn hình máy tính biến thành màu đen trắng"
        ],
        correct: 0,
        explanation: "Lệnh Format sẽ định dạng và xóa toàn bộ dữ liệu trên phân vùng đó, do vậy người dùng phải sao lưu các tài liệu quan trọng trước khi cài win."
      },
      {
        question: "Để máy tính ưu tiên khởi động từ USB cài đặt thay vì khởi động thẳng vào ổ cứng có sẵn, ta phải can thiệp vào cài đặt nào?",
        options: [
          "Thứ tự khởi động (Boot Order / Boot Priority) trong màn hình BIOS/UEFI",
          "Độ phân giải màn hình trong Display Settings",
          "Mức âm lượng của loa",
          "Phần mềm Paint"
        ],
        correct: 0,
        explanation: "Phải chỉnh Boot Priority đưa thiết bị USB Storage lên vị trí đầu tiên hoặc nhấn phím Boot Menu để chỉ định khởi động từ USB."
      }
    ]
  },
  {
    lessonNum: 8,
    id: "bai-8",
    topicNum: 2,
    topicName: "Chuyên đề 2: Cài đặt, gỡ bỏ phần mềm & Bảo vệ dữ liệu",
    title: "Bài 8: Bảo đảm an toàn dữ liệu",
    tag: "Data Security & 3-2-1 Rule",
    objectives: [
      "Nhận diện các hiểm họa đe dọa dữ liệu số: Sự cố hỏng hóc phần cứng (ổ cứng hỏng, sốc điện), lỗi do người dùng (xóa nhầm, ghi đè), thảm họa thiên tai và phần mềm độc hại (Virus, Ransomware).",
      "Hiểu rõ bản chất nguy hiểm của mã độc tống tiền (Ransomware) – mã hóa tệp dữ liệu đòi tiền chuộc.",
      "Làm chủ nguyên tắc sao lưu vàng 3-2-1 kinh điển trong an toàn thông tin chuyên nghiệp.",
      "Phân biệt 3 chiến lược sao lưu: Sao lưu đầy đủ (Full Backup), Sao lưu vi sai (Differential Backup) và Sao lưu gia tăng (Incremental Backup)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-shield-halved"></i> Quy tắc vàng Sao lưu 3-2-1
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>3:</strong> Duy trì ít nhất 3 bản sao của dữ liệu (1 bản gốc đang dùng + 2 bản sao lưu dự phòng).</li>
            <li><strong>2:</strong> Lưu trữ trên ít nhất 2 loại phương tiện vật lý khác nhau (ví dụ: 1 trên Ổ cứng gắn ngoài + 1 trên Đám mây Cloud).</li>
            <li><strong>1:</strong> Giữ ít nhất 1 bản sao lưu ở một địa điểm vật lý khác (Off-site / Cloud) để phòng ngừa hỏa hoạn, mất trộm máy tính.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-database"></i> 3 Chiến lược sao lưu dữ liệu
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Full Backup:</strong> Sao chép toàn bộ mọi dữ liệu. Dung lượng lớn, thời gian lâu nhưng khôi phục nhanh nhất.</li>
            <li><strong>Incremental Backup:</strong> Chỉ sao lưu những tệp mới hoặc có thay đổi so với lần sao lưu gần nhất. Nhanh và tiết kiệm dung lượng nhất.</li>
            <li><strong>Differential Backup:</strong> Sao lưu toàn bộ những thay đổi tính từ lần Full Backup gần nhất.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Phân loại dữ liệu theo mức độ quan trọng",
        content: "Phân chia tài liệu thành các nhóm: Tối quan trọng (ảnh kỷ niệm gia đình, đề tài nghiên cứu), Quan trọng (tài liệu học tập) và Bình thường (phim ảnh giải trí có thể tải lại)."
      },
      {
        title: "Bước 2: Thiết lập lịch trình sao lưu tự động",
        content: "Lập lịch sao lưu tự động định kỳ: Full Backup vào Chủ Nhật hàng tuần và Incremental Backup vào mỗi tối cuối ngày làm việc."
      },
      {
        title: "Bước 3: Kiểm thử khả năng phục hồi dữ liệu",
        content: "Định kỳ 3-6 tháng, thực hiện thử nghiệm khôi phục một vài tệp từ bản sao lưu để đảm bảo dữ liệu lưu trữ không bị hư hỏng tệp khi có sự cố xảy ra."
      }
    ],
    practice: "Hãy xây dựng một bản kế hoạch sao lưu dữ liệu cá nhân theo nguyên tắc 3-2-1 cho bài thuyết trình và các hình ảnh kỷ niệm của em trong năm học lớp 12.",
    quizzes: [
      {
        question: "Quy tắc sao lưu dữ liệu vàng '3-2-1' chuẩn quốc tế quy định điều gì?",
        options: [
          "Giữ 3 bản sao dữ liệu, trên 2 loại phương tiện lưu trữ khác nhau, và ít nhất 1 bản lưu ở địa điểm khác (hoặc đám mây)",
          "Sao lưu 3 lần mỗi ngày, dùng 2 chiếc máy tính và 1 đường dây mạng",
          "Chỉ cần 3 người cùng biết 1 mật khẩu",
          "Đổi máy tính 3 năm 1 lần, mua 2 ổ cứng và 1 con chuột"
        ],
        correct: 0,
        explanation: "Quy tắc 3-2-1: 3 bản copy dữ liệu, 2 phương tiện vật lý khác nhau, 1 bản lưu tách biệt tại vị trí địa lý khác (Off-site/Cloud) để phòng ngừa rủi ro hỏa hoạn, mất mát."
      },
      {
        question: "Chiến lược sao lưu nào chỉ sao chép lại những dữ liệu mới được thêm vào hoặc đã sửa đổi tính từ lần sao lưu gần đây nhất?",
        options: [
          "Sao lưu gia tăng (Incremental Backup)",
          "Sao lưu toàn phần (Full Backup)",
          "Sao lưu thủ công bằng tay",
          "Sao lưu vi sai (Differential Backup)"
        ],
        correct: 0,
        explanation: "Incremental Backup chỉ ghi lại các thay đổi mới so với mốc sao lưu kế trước, giúp tiết kiệm dung lượng lưu trữ và thực hiện nhanh nhất."
      },
      {
        question: "Loại mã độc nguy hiểm nào xâm nhập vào máy tính, bí mật mã hóa toàn bộ dữ liệu người dùng rồi hiển thị thông báo đòi tiền chuộc để giải mã?",
        options: [
          "Ransomware (Mã độc tống tiền)",
          "Adware (Phần mềm quảng cáo)",
          "Spyware (Phần mềm gián điệp)",
          "Spam email"
        ],
        correct: 0,
        explanation: "Ransomware là phần mềm độc hại mã hóa dữ liệu người dùng bằng thuật toán mã hóa mạnh và tống tiền chuộc để chuộc chìa khóa giải mã."
      },
      {
        question: "Tại sao việc chỉ sao lưu dữ liệu vào một phân vùng khác (ví dụ từ ổ C sang ổ D) trên cùng một ổ đĩa cứng vật lý chưa đảm bảo an toàn tuyệt đối?",
        options: [
          "Vì nếu ổ đĩa cứng đó bị hỏng hóc cơ học hoặc chập điện thì toàn bộ các phân vùng C và D đều sẽ mất sạch dữ liệu cùng lúc",
          "Vì làm như vậy máy tính sẽ bị hết dung lượng RAM",
          "Vì phân vùng D không cho phép lưu tệp",
          "Vì ổ D luôn tự động xóa dữ liệu sau 1 tuần"
        ],
        correct: 0,
        explanation: "Hai phân vùng nằm chung trên 1 ổ cứng vật lý; khi ổ cứng hỏng cơ, cháy mạch thì tất cả các phân vùng trên đó đều bị phá hủy."
      }
    ]
  },
  {
    lessonNum: 9,
    id: "bai-9",
    topicNum: 2,
    topicName: "Chuyên đề 2: Cài đặt, gỡ bỏ phần mềm & Bảo vệ dữ liệu",
    title: "Bài 9: Thực hành bảo vệ dữ liệu",
    tag: "BitLocker & File History",
    objectives: [
      "Thực hành sử dụng tính năng sao lưu phiên bản tệp lịch sử File History trong hệ điều hành Windows.",
      "Khai thác công cụ tạo điểm phục hồi hệ thống (System Restore Point) để nhanh chóng cứu nguy khi máy tính bị lỗi driver hoặc xung đột phần mềm.",
      "Mã hóa toàn bộ ổ đĩa di động USB và ổ đĩa hệ thống bằng công cụ bảo mật cấp chính phủ Windows BitLocker Drive Encryption.",
      "Đặt mật khẩu bảo vệ tập tin tài liệu nhạy cảm (Office Document Protection) và nén mã hóa tập tin với 7-Zip (chuẩn AES-256)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-lock"></i> Mã hóa bảo vệ dữ liệu BitLocker
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Tích hợp sẵn trên Windows Pro/Enterprise. Sử dụng thuật toán mã hóa tối tân <strong>AES-128/256 bit</strong>.</li>
            <li>Khi USB bị thất lạc hoặc rơi vào tay kẻ gian, kẻ trộm không thể đọc được dữ liệu nếu không có mật khẩu hoặc Khóa khôi phục 48 chữ số (Recovery Key).</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-clock-rotate-left"></i> File History & Restore Point
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>File History:</strong> Tự động sao lưu các phiên bản tài liệu (Documents, Desktop) sang ổ cứng ngoài, cho phép quay ngược thời gian lấy lại phiên bản tệp cũ đã bị sửa đè.</li>
            <li><strong>System Restore:</strong> Đóng băng trạng thái registry và hệ thống trước khi cài đặt phần mềm mới.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Bật mã hóa USB với BitLocker To Go",
        content: "Cắm USB -> Mở File Explorer -> Nhấp chuột phải vào biểu tượng ổ đĩa USB -> Chọn <strong>Turn on BitLocker</strong> -> Nhập mật khẩu bảo vệ mạnh -> Lưu tệp <em>Recovery Key</em> vào tài khoản Microsoft hoặc in ra giấy -> Bấm <strong>Start Encrypting</strong>."
      },
      {
        title: "Bước 2: Nén và đặt mật khẩu bảo mật AES-256 với 7-Zip",
        content: "Chọn thư mục tài liệu cần bảo mật -> Nhấp chuột phải chọn <strong>7-Zip -> Add to archive...</strong> -> Mục <em>Encryption</em> nhập mật khẩu và chọn phương thức mã hóa <strong>AES-256</strong> -> Tích chọn <strong>Encrypt file names</strong> (khóa cả tên tệp)."
      },
      {
        title: "Bước 3: Tạo điểm phục hồi System Restore Point",
        content: "Gõ <em>Create a restore point</em> trong thanh tìm kiếm Windows -> Thẻ <em>System Protection</em> nhấp nút <strong>Create</strong> -> Đặt tên: 'Trước khi cài đặt phần mềm mới' -> Bấm Create."
      }
    ],
    practice: "Thực hành nén một thư mục chứa thông tin học tập của em bằng 7-Zip, đặt mật khẩu phức tạp gồm chữ hoa, chữ thường, số và ký tự đặc biệt, sau đó giải nén thử nghiệm.",
    quizzes: [
      {
        question: "Công nghệ mã hóa ổ đĩa tích hợp sẵn trong hệ điều hành Windows giúp ngăn chặn kẻ gian đọc cắp dữ liệu khi đánh cắp ổ cứng/USB là gì?",
        options: [
          "BitLocker",
          "Windows Defender",
          "Disk Cleanup",
          "DirectX"
        ],
        correct: 0,
        explanation: "BitLocker là tính năng mã hóa toàn bộ ổ đĩa của Microsoft giúp bảo vệ toàn vẹn dữ liệu khỏi hành vi truy cập trái phép khi mất cắp thiết bị vật lý."
      },
      {
        question: "Khi mã hóa tệp nén bằng phần mềm 7-Zip, thuật toán mã hóa tiêu chuẩn quân đội, an toàn và bảo mật hàng đầu hiện nay là gì?",
        options: [
          "AES-256",
          "MD5",
          "Base64",
          "ASCII"
        ],
        correct: 0,
        explanation: "Thuật toán AES-256 (Advanced Encryption Standard 256-bit) là tiêu chuẩn mã hóa đối xứng cực kỳ an toàn, bất khả xâm phạm trước các cuộc tấn công giải mã brute-force hiện nay."
      },
      {
        question: "Chuỗi ký tự đặc biệt gồm 48 chữ số dùng để mở khóa ổ đĩa BitLocker khi người dùng vô tình quên mật khẩu được gọi là gì?",
        options: [
          "Khóa khôi phục (Recovery Key)",
          "Mã số định danh học sinh",
          "Số seri của chuột máy tính",
          "Mã bưu chính quốc gia"
        ],
        correct: 0,
        explanation: "Recovery Key (Khóa khôi phục) gồm 48 chữ số do BitLocker tự động sinh ra khi thiết lập mã hóa, là cứu cánh duy nhất khi quên mật khẩu."
      },
      {
        question: "Tính năng System Restore trên Windows cho phép người dùng làm gì?",
        options: [
          "Khôi phục trạng thái cài đặt hệ thống và tệp tin hệ điều hành về thời điểm trước đó khi xảy ra sự cố lỗi driver hay virus",
          "Tự động tăng dung lượng ổ cứng gấp đôi",
          "Xóa sạch vĩnh viễn toàn bộ bài tập về nhà",
          "Nâng cấp màn hình thành màn hình cảm ứng"
        ],
        correct: 0,
        explanation: "System Restore đưa cấu hình máy tính quay ngược về mốc thời gian lưu trước đó (Restore Point) để sửa các lỗi hỏng hóc hệ thống mà không làm mất tài liệu cá nhân."
      }
    ]
  },

  // ==========================================
  // CHUYÊN ĐỀ 3: THỰC HÀNH PHÂN TÍCH DỮ LIỆU VỚI PHẦN MỀM BẢNG TÍNH (EXCEL NÂNG CAO)
  // ==========================================
  {
    lessonNum: 10,
    id: "bai-10",
    topicNum: 3,
    topicName: "Chuyên đề 3: Phân tích dữ liệu với phần mềm bảng tính",
    title: "Bài 10: Tính xác suất và chọn số liệu ngẫu nhiên",
    tag: "Probability & Sampling",
    objectives: [
      "Hiểu rõ vai trò của phương pháp chọn mẫu ngẫu nhiên (Random Sampling) trong nghiên cứu khảo sát thị trường và thống kê khoa học.",
      "Sử dụng thành thạo các hàm sinh số ngẫu nhiên trong Excel: RAND(), RANDBETWEEN(bottom, top) và hàm mảng động RANDARRAY().",
      "Tính toán xác suất biến cố ngẫu nhiên bằng hàm PROB() và các phân phối xác suất kinh điển: Phân phối nhị thức BINOM.DIST(), Phân phối chuẩn NORM.DIST().",
      "Thực hành trích chọn mẫu ngẫu nhiên không trùng lặp từ tập dữ liệu dân số / danh sách học sinh."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-dice"></i> Các hàm sinh số ngẫu nhiên
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><code>=RAND()</code>: Trả về số thực ngẫu nhiên đồng đều trong khoảng [0, 1).</li>
            <li><code>=RANDBETWEEN(a, b)</code>: Trả về số nguyên ngẫu nhiên từ a đến b.</li>
            <li><code>=RANDARRAY(rows, cols, min, max, integer)</code>: Sinh ma trận số ngẫu nhiên chỉ bằng 1 công thức mảng động.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-chart-line"></i> Phân phối xác suất chuẩn
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><code>=BINOM.DIST(x, trials, p, cumulative)</code>: Xác suất đạt x lần thành công trong n phép thử độc lập.</li>
            <li><code>=NORM.DIST(x, mean, standard_dev, cumulative)</code>: Hàm phân phối xác suất phân phối chuẩn hình chuông Gauss.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Sinh số báo danh ngẫu nhiên",
        content: "Trong cột phụ A, nhập công thức <code>=RAND()</code> và kéo xuống cho toàn bộ danh sách 500 học sinh."
      },
      {
        title: "Bước 2: Cố định giá trị ngẫu nhiên tránh tự động nhảy",
        content: "Chọn cột số ngẫu nhiên vừa tạo -> Nhấn <strong>Ctrl + C</strong> -> Nhấp chuột phải chọn <strong>Paste Special -> Values (123)</strong> để cố định giá trị tĩnh."
      },
      {
        title: "Bước 3: Trích chọn 30 mẫu ngẫu nhiên",
        content: "Sắp xếp danh sách theo cột số ngẫu nhiên từ bé đến lớn -> Chọn ra 30 học sinh đầu tiên để mời tham gia khảo sát mẫu đại diện."
      }
    ],
    practice: "Giả sử tung một đồng xu cân đối 10 lần. Hãy sử dụng hàm =BINOM.DIST() trong Excel để tính xác suất xuất hiện chính xác 6 lần mặt ngửa.",
    quizzes: [
      {
        question: "Hàm nào trong Excel trả về một số nguyên ngẫu nhiên nằm trong khoảng từ giá trị nhỏ nhất đến giá trị lớn nhất do người dùng chỉ định?",
        options: [
          "=RANDBETWEEN(bottom, top)",
          "=RAND()",
          "=ROUND(number, num_digits)",
          "=INT(number)"
        ],
        correct: 0,
        explanation: "Hàm =RANDBETWEEN(bottom, top) sinh ra số nguyên ngẫu nhiên nằm giữa 2 cận bottom và top (bao gồm cả 2 cận)."
      },
      {
        question: "Đặc điểm đáng chú ý của các hàm ngẫu nhiên như RAND() và RANDBETWEEN() trong Excel là gì?",
        options: [
          "Là các hàm Volatile (dễ biến đổi), sẽ tự động tính toán lại và đổi sang số ngẫu nhiên mới mỗi khi bảng tính có bất kỳ thay đổi nào",
          "Số sinh ra không bao giờ thay đổi được nữa",
          "Chỉ chạy được vào buổi sáng",
          "Luôn luôn trả về giá trị số âm"
        ],
        correct: 0,
        explanation: "Hàm RAND là hàm Volatile, mỗi khi nhấn F9 hoặc sửa bất kỳ ô nào trong trang tính, Excel sẽ tự động sinh lại các giá trị ngẫu nhiên mới."
      },
      {
        question: "Muốn cố định các giá trị ngẫu nhiên vừa sinh ra để chúng không bị thay đổi mỗi khi tính toán, thao tác chuẩn là gì?",
        options: [
          "Sao chép (Copy) và dán đè lại bằng tùy chọn Paste Special -> Values",
          "Đổi màu chữ sang màu đỏ",
          "Lưu tệp dưới dạng hình ảnh JPG",
          "Xóa ô công thức"
        ],
        correct: 0,
        explanation: "Sao chép và Paste Values sẽ biến công thức động thành các giá trị số tĩnh bất biến."
      },
      {
        question: "Hàm nào dùng để tính xác suất trong phân phối xác suất nhị thức (Binomial Distribution) trong Excel?",
        options: [
          "=BINOM.DIST()",
          "=NORM.DIST()",
          "=POISSON.DIST()",
          "=CHISQ.DIST()"
        ],
        correct: 0,
        explanation: "=BINOM.DIST() tính xác suất trong phép thử nhị thức Bernoulli với số lần thử và xác suất thành công cho trước."
      }
    ]
  },
  {
    lessonNum: 11,
    id: "bai-11",
    topicNum: 3,
    topicName: "Chuyên đề 3: Phân tích dữ liệu với phần mềm bảng tính",
    title: "Bài 11: Xác định các đặc trưng đo xu thế trung tâm và độ phân tán dữ liệu",
    tag: "Descriptive Statistics",
    objectives: [
      "Hiểu rõ ý nghĩa kinh tế - xã hội của các số đặc trưng đo xu thế trung tâm: Số trung bình (Mean), Trung vị (Median) và Yếu vị (Mode).",
      "Nắm vững các số đặc trưng đo mức độ phân tán, độ biến thiên của dữ liệu: Khoảng biến thiên (Range), Phương sai (Variance), Độ lệch chuẩn (Standard Deviation) và Khoảng tứ phân vị (IQR).",
      "Sử dụng thành thạo các hàm thống kê chuẩn xác trong Excel: =AVERAGE(), =MEDIAN(), =MODE.SNGL(), =STDEV.S(), =VAR.S(), =QUARTILE.INC().",
      "Nhận biết khi nào nên sử dụng Số trung vị thay cho Số trung bình khi tập dữ liệu bị lệch mạnh hoặc xuất hiện giá trị dị biệt (Outliers)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-bullseye"></i> Đo xu thế trung tâm (Central Tendency)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Trung bình <code>=AVERAGE()</code>:</strong> Tổng chia số lượng. Dễ bị méo mó khi có giá trị cực lớn hoặc cực nhỏ đột biến.</li>
            <li><strong>Trung vị <code>=MEDIAN()</code>:</strong> Giá trị nằm chính giữa tập dữ liệu đã sắp xếp. Rất bền vững trước các giá trị ngoại lai dị biệt.</li>
            <li><strong>Yếu vị <code>=MODE.SNGL()</code>:</strong> Giá trị có tần số xuất hiện nhiều nhất.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-arrows-split-up-and-left"></i> Đo độ phân tán (Dispersion)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Độ lệch chuẩn mẫu <code>=STDEV.S()</code>:</strong> Đo mức độ dao động chênh lệch của các quan sát xung quanh giá trị trung bình.</li>
            <li><strong>Phương sai mẫu <code>=VAR.S()</code>:</strong> Bình phương của độ lệch chuẩn.</li>
            <li><strong>Tứ phân vị <code>=QUARTILE.INC(array, quart)</code>:</strong> Q1 (25%), Q2 (Trung vị 50%), Q3 (75%).</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Nhập bảng dữ liệu điểm thi học kỳ",
        content: "Nhập danh sách điểm môn Tin học của 45 học sinh trong lớp tại cột B từ ô B2 đến B46."
      },
      {
        title: "Bước 2: Tính toán các chỉ số xu thế trung tâm",
        content: "Tại các ô tính tương ứng: Điểm trung bình = <code>=AVERAGE(B2:B46)</code>; Điểm trung vị = <code>=MEDIAN(B2:B46)</code>; Điểm xuất hiện nhiều nhất = <code>=MODE.SNGL(B2:B46)</code>."
      },
      {
        title: "Bước 3: Đánh giá độ đồng đều bằng độ lệch chuẩn",
        content: "Tính độ lệch chuẩn = <code>=STDEV.S(B2:B46)</code>. Nếu độ lệch chuẩn nhỏ (< 1.0) nghĩa là học lực của lớp rất đồng đều; nếu độ lệch chuẩn lớn (> 2.5) nghĩa là có sự phân hóa mạnh giữa học sinh giỏi và học sinh yếu."
      }
    ],
    practice: "Cho tập số liệu về thu nhập của 10 hộ gia đình (triệu đồng/tháng): 8, 9, 10, 10, 11, 12, 12, 14, 15, 200. Hãy tính Số trung bình và Trung vị trên Excel, nhận xét sự khác biệt do giá trị ngoại vi 200 gây ra.",
    quizzes: [
      {
        question: "Trong trường hợp tập dữ liệu thu nhập xuất hiện một vài giá trị cực lớn đột biến (giá trị ngoại lai Outliers), đại lượng đo xu thế trung tâm nào phản ánh mức độ thu nhập phổ quát khách quan hơn?",
        options: [
          "Số trung vị (Median)",
          "Số trung bình cộng (Mean)",
          "Giá trị lớn nhất (Max)",
          "Phương sai (Variance)"
        ],
        correct: 0,
        explanation: "Số trung vị (Median) nằm ở chính giữa chuỗi số đã sắp xếp nên không hề bị ảnh hưởng méo mó bởi các giá trị ngoại lai dị biệt như số trung bình."
      },
      {
        question: "Hàm nào trong Excel dùng để tính độ lệch chuẩn của một tập dữ liệu mẫu (Sample Standard Deviation)?",
        options: [
          "=STDEV.S()",
          "=STDEV.P()",
          "=VAR.S()",
          "=AVERAGE()"
        ],
        correct: 0,
        explanation: "Hàm =STDEV.S() (Standard Deviation Sample) tính độ lệch chuẩn cho tập mẫu nghiên cứu (chia cho n - 1)."
      },
      {
        question: "Đại lượng đo tần số xuất hiện nhiều lần nhất trong một tập dữ liệu được gọi là gì?",
        options: [
          "Yếu vị (Mode)",
          "Trung bình (Mean)",
          "Trung vị (Median)",
          "Độ phân tán (Range)"
        ],
        correct: 0,
        explanation: "Yếu vị (Mode) là giá trị có số lần xuất hiện lặp lại nhiều nhất trong tập hợp dữ liệu."
      },
      {
        question: "Nếu độ lệch chuẩn của điểm số lớp A nhỏ hơn rất nhiều so với lớp B, ta có thể kết luận điều gì về học lực của hai lớp?",
        options: [
          "Học lực của học sinh lớp A đồng đều hơn, ít bị chênh lệch phân hóa hơn lớp B",
          "Tất cả học sinh lớp A đều bị điểm kém",
          "Lớp B có số lượng học sinh ít hơn lớp A",
          "Không thể rút ra kết luận gì"
        ],
        correct: 0,
        explanation: "Độ lệch chuẩn càng nhỏ chứng tỏ các giá trị càng tập trung sít sao quanh điểm trung bình, tức là năng lực học tập rất đồng đều."
      }
    ]
  },
  {
    lessonNum: 12,
    id: "bai-12",
    topicNum: 3,
    topicName: "Chuyên đề 3: Phân tích dữ liệu với phần mềm bảng tính",
    title: "Bài 12: Mô tả số liệu bằng PivotTable",
    tag: "PivotTable & Slicers",
    objectives: [
      "Hiểu rõ sức mạnh tổng hợp dữ liệu đa chiều, gom nhóm và tính toán tức thì của công cụ PivotTable trong Excel.",
      "Làm chủ 4 vùng cấu trúc căn bản của PivotTable: Filters (Bộ lọc trang), Columns (Cột), Rows (Dòng) và Values (Vùng tính toán tổng hợp).",
      "Thực hiện gom nhóm dữ liệu tự động (Grouping): Nhóm trường ngày tháng theo Tháng/Quý/Năm, nhóm trường số liệu theo các dải khoảng giá trị.",
      "Tạo trường tính toán mới (Calculated Field) và tích hợp các công cụ lọc trực quan hiện đại: Slicer và Timeline."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-table-cells"></i> 4 Vùng kéo thả PivotTable
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Rows:</strong> Các trường thông tin phân loại theo từng hàng (ví dụ: Tên sản phẩm, Tên chi nhánh).</li>
            <li><strong>Columns:</strong> Các trường phân loại dàn theo từng cột (ví dụ: Quý 1, Quý 2).</li>
            <li><strong>Values:</strong> Các giá trị tính toán (Sum doanh số, Count số lượng, Average giá).</li>
            <li><strong>Filters:</strong> Lọc dữ liệu hiển thị toàn bảng.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-filter"></i> Slicer & Timeline trực quan
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Slicer:</strong> Các nút bấm đồ họa cho phép lọc nhanh danh mục chỉ với 1 cú click chuột.</li>
            <li><strong>Timeline:</strong> Thanh trượt điều khiển mốc thời gian lọc dữ liệu theo Ngày/Tháng/Năm cực kỳ sinh động cho báo cáo quản trị Dashboard.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Khởi tạo bảng PivotTable",
        content: "Đặt con trỏ vào bảng dữ liệu bán hàng -> Vào menu <strong>Insert -> PivotTable</strong> -> Chọn vị trí xuất ở trang tính mới (New Worksheet) -> Nhấn <strong>OK</strong>."
      },
      {
        title: "Bước 2: Bố trí cấu trúc phân tích đa chiều",
        content: "Kéo trường 'Khu vực' vào ô <em>Rows</em> -> Kéo trường 'Loại mặt hàng' vào ô <em>Columns</em> -> Kéo trường 'Doanh thu' vào ô <em>Values</em> (tự động tính Sum of Doanh thu)."
      },
      {
        title: "Bước 3: Chèn công cụ lọc Slicer",
        content: "Chọn bảng PivotTable -> Menu <strong>PivotTable Analyze -> Insert Slicer</strong> -> Chọn trường 'Nhân viên bán hàng' -> Nhấp vào các nút tên nhân viên để xem ngay kết quả doanh số tương ứng."
      }
    ],
    practice: "Cho tệp dữ liệu 200 giao dịch bán hàng gồm: Ngày, Nhân viên, Mặt hàng, Số lượng, Đơn giá. Hãy dùng PivotTable để tổng hợp: Doanh thu theo từng Mặt hàng trong từng Tháng và lọc theo Slicer Nhân viên.",
    quizzes: [
      {
        question: "Công cụ nào trong Excel cho phép người dùng tổng hợp, phân tích, xoay chiều và nhóm dữ liệu từ một bảng lớn một cách tự động và linh hoạt mà không cần gõ công thức?",
        options: [
          "PivotTable",
          "WordArt",
          "Spelling Checker",
          "Track Changes"
        ],
        correct: 0,
        explanation: "PivotTable là công cụ mạnh mẽ bậc nhất của Excel chuyên dùng để tổng hợp, báo cáo và phân tích dữ liệu đa chiều nhanh chóng."
      },
      {
        question: "Trong giao diện thiết kế PivotTable, vùng nào dùng để chứa các trường số liệu cần tính tổng, đếm hoặc tính trung bình?",
        options: [
          "Values",
          "Rows",
          "Columns",
          "Filters"
        ],
        correct: 0,
        explanation: "Vùng Values là nơi chứa các trường định lượng để áp dụng các phép toán hàm tổng hợp như SUM, COUNT, AVERAGE."
      },
      {
        question: "Công cụ 'Slicer' được tích hợp trong PivotTable có công dụng chính là gì?",
        options: [
          "Tạo ra các nút bấm giao diện trực quan hỗ trợ lọc dữ liệu nhanh chóng và đẹp mắt",
          "Tự động gửi email cho khách hàng",
          "Chuyển bảng tính thành một tệp MP4",
          "Format lại ổ đĩa cứng"
        ],
        correct: 0,
        explanation: "Slicer cung cấp các nút bấm đồ họa thân thiện giúp lọc dữ liệu PivotTable tức thì với thao tác một chạm."
      },
      {
        question: "Khi dữ liệu ở bảng gốc ban đầu bị thay đổi hoặc bổ sung thêm dòng mới, để bảng PivotTable cập nhật số liệu mới nhất ta cần làm gì?",
        options: [
          "Nhấp chuột phải vào bảng PivotTable và chọn Refresh (Làm mới)",
          "Phải xóa phần mềm Excel và cài lại",
          "Tự gõ tay lại toàn bộ dữ liệu",
          "Tắt máy tính đi bật lại"
        ],
        correct: 0,
        explanation: "Chỉ cần nhấp chuột phải chọn Refresh (hoặc phím tắt Alt + F5) để PivotTable đồng bộ cập nhật ngay số liệu mới."
      }
    ]
  },
  {
    lessonNum: 13,
    id: "bai-13",
    topicNum: 3,
    topicName: "Chuyên đề 3: Phân tích dữ liệu với phần mềm bảng tính",
    title: "Bài 13: Mô tả thống kê bằng biểu đồ",
    tag: "Statistical Charts",
    objectives: [
      "Lựa chọn và xây dựng đúng dạng biểu đồ phù hợp với bản chất từng bài toán phân tích số liệu thống kê.",
      "Vẽ biểu đồ phân bố tần số Histogram để quan sát hình dạng phân phối (đối xứng, lệch trái, lệch phải) và xác định độ rộng khoảng (Bin width).",
      "Vẽ biểu đồ hộp và râu (Box and Whisker / Box Plot) để trực quan hóa 5 số tóm tắt: Min, Q1, Median, Q3, Max và phát hiện trực tiếp các điểm ngoại lai (Outliers).",
      "Vẽ biểu đồ phân tán (Scatter Plot) để khảo sát trực quan mối quan hệ xu hướng đồng biến / nghịch biến giữa hai biến số liên tục."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-chart-simple"></i> Biểu đồ Histogram
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Chia dữ liệu liên tục thành các khoảng đều nhau (Bins). Chiều cao mỗi cột đại diện cho số lượng phần tử (tần số) rơi vào khoảng đó.</li>
            <li>Giúp đánh giá nhanh dữ liệu có tuân theo quy luật phân phối chuẩn (hình chuông cân đối) hay không.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-box"></i> Biểu đồ Box & Whisker (Hộp và Râu)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Hộp ở giữa biểu diễn khoảng tứ phân vị IQR (từ Q1 đến Q3, chứa 50% dữ liệu lõi). Đường gạch ngang giữa hộp là Trung vị.</li>
            <li>Hai sợi râu vươn ra Min và Max. Các điểm chấm nằm ngoài râu là các giá trị dị biệt <strong>Outliers</strong> cần được kiểm tra xử lý.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Vẽ biểu đồ phân bố tần số Histogram",
        content: "Chọn cột dữ liệu cân nặng học sinh -> Vào menu <strong>Insert -> Statistical Chart -> Histogram</strong> -> Nhấp đúp chuột vào trục hoành để chỉnh <em>Bin width</em> (độ rộng khoảng) hoặc <em>Number of bins</em>."
      },
      {
        title: "Bước 2: Vẽ biểu đồ Box and Whisker phát hiện ngoại lai",
        content: "Chọn dữ liệu điểm số các lớp -> Vào <strong>Insert -> Statistical Chart -> Box and Whisker</strong> -> Quan sát các điểm chấm nhỏ tách rời nằm ngoài râu để định vị các bài thi có điểm số bất thường."
      },
      {
        title: "Bước 3: Tinh chỉnh thẩm mỹ biểu đồ chuẩn báo cáo",
        content: "Thêm tiêu đề biểu đồ rõ ràng, gắn nhãn trục tọa độ (Axis Titles), hiển thị giá trị số liệu (Data Labels) và chọn bảng màu nhã nhặn."
      }
    ],
    practice: "Thu thập số liệu chiều cao của các bạn trong tổ. Sử dụng Excel vẽ 1 biểu đồ Histogram và 1 biểu đồ Box Plot, chỉ ra các giá trị Q1, Median, Q3 trên biểu đồ.",
    quizzes: [
      {
        question: "Biểu đồ nào trong Excel chuyên dùng để phân nhóm dữ liệu liên tục thành các khoảng (bins) và hiển thị tần số xuất hiện của các khoảng đó?",
        options: [
          "Histogram",
          "Pie Chart",
          "Line Chart",
          "Radar Chart"
        ],
        correct: 0,
        explanation: "Biểu đồ Histogram (biểu đồ tần số) chia tập dữ liệu thành các khoảng liên tiếp và vẽ các cột biểu diễn tần số của từng khoảng."
      },
      {
        question: "Biểu đồ Hộp và Râu (Box and Whisker) hiển thị trực quan 5 số tóm tắt thống kê nào?",
        options: [
          "Giá trị nhỏ nhất (Min), Tứ phân vị thứ nhất (Q1), Trung vị (Median), Tứ phân vị thứ ba (Q3) và Giá trị lớn nhất (Max)",
          "Trung bình cộng, Tổng số, Tỷ lệ phần trăm, Căn bậc hai và Lũy thừa",
          "Họ tên, Ngày sinh, Quê quán, Lớp học và Trường học",
          "Xác suất, Sai số, Biến độc lập, Biến phụ thuộc và Hằng số"
        ],
        correct: 0,
        explanation: "Biểu đồ Box Plot tóm tắt dữ liệu qua 5 giá trị then chốt: Min, Q1, Median (Q2), Q3, Max và đánh dấu các điểm ngoại lai Outliers."
      },
      {
        question: "Trên biểu đồ Box and Whisker, các điểm chấm tròn nằm tách rời hẳn ra phía ngoài hai đầu râu đại diện cho yếu tố gì?",
        options: [
          "Các giá trị dị biệt / ngoại lai (Outliers)",
          "Các giá trị bị lỗi chính tả",
          "Tên của người vẽ biểu đồ",
          "Mức điểm số bắt buộc phải xóa bỏ"
        ],
        correct: 0,
        explanation: "Các điểm nằm ngoài giới hạn râu (vượt quá 1.5 lần khoảng IQR) là các giá trị ngoại lai (Outliers) có giá trị cực đoan bất thường."
      },
      {
        question: "Dạng biểu đồ nào lý tưởng nhất để nghiên cứu mối quan hệ tương quan đồng biến hay nghịch biến giữa 2 biến số định lượng (ví dụ: Chi phí quảng cáo và Doanh thu bán hàng)?",
        options: [
          "Biểu đồ phân tán (Scatter Plot)",
          "Biểu đồ hình tròn 3D",
          "Biểu đồ bánh Donut",
          "Biểu đồ hình phễu Funnel"
        ],
        correct: 0,
        explanation: "Biểu đồ Scatter Plot chấm các tọa độ (X, Y) thể hiện trực quan chiều hướng và độ phân tán của mối liên hệ tương quan giữa 2 biến số."
      }
    ]
  },
  {
    lessonNum: 14,
    id: "bai-14",
    topicNum: 3,
    topicName: "Chuyên đề 3: Phân tích dữ liệu với phần mềm bảng tính",
    title: "Bài 14: Phân tích tương quan",
    tag: "Correlation & Regression",
    objectives: [
      "Hiểu rõ bản chất ý nghĩa của Phân tích tương quan (Correlation Analysis) và Hệ số tương quan Pearson (r).",
      "Đánh giá độ mạnh - yếu và chiều hướng của mối quan hệ qua giá trị hệ số r: Dao động từ -1 (tương quan nghịch tuyệt đối) đến +1 (tương quan thuận tuyệt đối); r = 0 (không có tương quan tuyến tính).",
      "Tính hệ số tương quan trong Excel bằng hàm =CORREL(array1, array2) và sinh Ma trận tương quan (Correlation Matrix) với công cụ Data Analysis Toolpak.",
      "Xây dựng đường xu hướng (Trendline), phương trình hồi quy tuyến tính y = ax + b và hệ số xác định R-squared (R²)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-arrow-trend-up"></i> Hệ số tương quan Pearson (r)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>r > 0: Tương quan thuận.</strong> Biến X tăng thì biến Y có xu hướng tăng theo (ví dụ: Giờ ôn tập và Điểm thi).</li>
            <li><strong>r < 0: Tương quan nghịch.</strong> Biến X tăng thì biến Y giảm (ví dụ: Giá bán tăng thì Số lượng mua giảm).</li>
            <li><strong>|r| >= 0.7:</strong> Mối tương quan tuyến tính rất mạnh; 0.3 <= |r| < 0.7: Tương quan vừa; |r| < 0.3: Tương quan yếu.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-chart-line"></i> Đường xu hướng & Hệ số R²
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Trendline (Đường hồi quy):</strong> Đường thẳng tối ưu xấp xỉ vị trí các điểm số liệu trên biểu đồ Scatter.</li>
            <li><strong>Hệ số R² (R-squared):</strong> Đo lường tỷ lệ phần trăm sự biến thiên của Y được giải thích bởi mô hình toán học hồi quy tuyến tính của X.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Tính hệ số tương quan bằng hàm CORREL",
        content: "Có cột X (Nhiệt độ ngày) và cột Y (Số que kem bán được) -> Nhập công thức: <code>=CORREL(A2:A30, B2:B30)</code> -> Nhận giá trị r = 0.88 (tương quan thuận rất mạnh)."
      },
      {
        title: "Bước 2: Vẽ biểu đồ Scatter Plot kèm đường Trendline",
        content: "Chọn 2 cột X và Y -> Chèn biểu đồ Scatter -> Nhấp vào dấu cộng xanh góc biểu đồ -> Tích chọn <strong>Trendline</strong>."
      },
      {
        title: "Bước 3: Hiển thị phương trình toán học và R²",
        content: "Nhấp đúp chuột vào đường Trendline -> Thẻ Format Trendline, tích chọn 2 ô kiểm: <strong>Display Equation on chart</strong> và <strong>Display R-squared value on chart</strong>."
      }
    ],
    practice: "Cho bảng số liệu điểm môn Toán (X) và môn Tin học (Y) của 20 học sinh. Hãy tính hệ số tương quan Pearson trên Excel và vẽ đường hồi quy kèm phương trình toán học.",
    quizzes: [
      {
        question: "Hàm nào trong Excel dùng để tính toán hệ số tương quan Pearson giữa hai tập số liệu?",
        options: [
          "=CORREL(array1, array2)",
          "=PEARSON.TEST()",
          "=COVARIANCE()",
          "=RELATION()"
        ],
        correct: 0,
        explanation: "Hàm =CORREL(array1, array2) trả về hệ số tương quan Pearson chuẩn xác giữa 2 mảng biến số."
      },
      {
        question: "Hệ số tương quan Pearson r luôn nhận giá trị nằm trong khoảng giới hạn toán học nào?",
        options: [
          "Từ -1 đến +1",
          "Từ 0 đến 100",
          "Từ âm vô cùng đến dương vô cùng",
          "Chỉ nhận giá trị 0 hoặc 1"
        ],
        correct: 0,
        explanation: "Hệ số tương quan r luôn luôn thỏa mãn -1 <= r <= +1. Giá trị âm thể hiện tương quan nghịch, giá trị dương thể hiện tương quan thuận."
      },
      {
        question: "Nếu kết quả tính toán hệ số tương quan giữa Chi tiêu quảng cáo và Doanh số bán buôn ra r = 0.92, ta rút ra kết luận gì?",
        options: [
          "Tồn tại mối quan hệ tương quan thuận rất mạnh; khi chi phí quảng cáo tăng thì doanh thu cũng tăng theo rất rõ rệt",
          "Quảng cáo không có tác dụng gì đối với doanh thu",
          "Hai biến số có quan hệ tương quan nghịch",
          "Số liệu tính toán bị sai lỗi công thức"
        ],
        correct: 0,
        explanation: "Hệ số r = 0.92 là mức rất cao (gần sát +1), khẳng định mối quan hệ tương quan thuận tuyến tính cực kỳ chặt chẽ giữa 2 đại lượng."
      },
      {
        question: "Lưu ý quan trọng hàng đầu trong khoa học phân tích dữ liệu: 'Tương quan (Correlation) không đồng nghĩa với... '?",
        options: [
          "Quan hệ nhân quả (Causation)",
          "Toán học",
          "Đồ họa",
          "Bảng tính Excel"
        ],
        correct: 0,
        explanation: "Quy tắc kinh điển trong thống kê: 'Correlation does not imply causation' – hai biến biến thiên cùng chiều chưa chắc biến này đã là nguyên nhân sinh ra biến kia."
      }
    ]
  },
  {
    lessonNum: 15,
    id: "bai-15",
    topicNum: 3,
    topicName: "Chuyên đề 3: Phân tích dữ liệu với phần mềm bảng tính",
    title: "Bài 15: Kiểm định giả thuyết thống kê",
    tag: "Hypothesis Testing & T-Test",
    objectives: [
      "Hiểu rõ tư duy khoa học của Kiểm định giả thuyết thống kê: Giả thuyết không H₀ (Null Hypothesis) và Giả thuyết đối H₁ (Alternative Hypothesis).",
      "Nắm vững ý nghĩa giá trị xác suất P-value và mức ý nghĩa thống kê α (Alpha, thường chọn chuẩn 0.05 tức độ tin cậy 95%).",
      "Nguyên tắc ra quyết định khoa học: Nếu P-value < α (0.05) thì Bác bỏ H₀ (có sự khác biệt có ý nghĩa thống kê); Nếu P-value >= α thì Chưa đủ bằng chứng bác bỏ H₀.",
      "Thực hiện kiểm định T-Test (so sánh điểm trung bình 2 nhóm) bằng hàm =T.TEST() và Phân tích phương sai ANOVA một yếu tố bằng Data Analysis Toolpak."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-scale-balanced"></i> Quy tắc vàng P-value & Alpha (0.05)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>H₀:</strong> Giả định không có sự khác biệt (ví dụ: Phương pháp dạy mới và cũ có kết quả ngang nhau).</li>
            <li><strong>H₁:</strong> Có sự khác biệt đáng kể về mặt thống kê.</li>
            <li><strong>P-value < 0.05:</strong> 'Bác bỏ H₀'. Sự khác biệt là có thật do phương pháp mới, không phải do may rủi ngẫu nhiên!</li>
            <li><strong>P-value >= 0.05:</strong> 'Chấp nhận H₀'. Chưa đủ bằng chứng khẳng định phương pháp mới hiệu quả hơn.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-flask-vial"></i> Cú pháp hàm T.TEST trong Excel
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><code>=T.TEST(array1, array2, tails, type)</code></li>
            <li><strong>tails:</strong> 1 (kiểm định 1 phía) hoặc 2 (kiểm định 2 phía).</li>
            <li><strong>type:</strong> 1 (mẫu bắt cặp Paired - trước và sau can thiệp), 2 (hai mẫu độc lập có phương sai bằng nhau), 3 (hai mẫu độc lập có phương sai khác nhau).</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Thiết lập giả thuyết nghiên cứu thực nghiệm",
        content: "Đặt H₀: Điểm thi trung bình của lớp ứng dụng phương pháp học tập kết hợp (Blended Learning) không khác biệt so với lớp học truyền thống."
      },
      {
        title: "Bước 2: Sử dụng hàm T.TEST tính toán P-value",
        content: "Nhập công thức: <code>=T.TEST(A2:A31, B2:B31, 2, 2)</code> -> Excel trả về giá trị P-value = 0.012."
      },
      {
        title: "Bước 3: Biện luận và kết luận thống kê",
        content: "Vì P-value = 0.012 < 0.05 (mức ý nghĩa 5%), ta bác bỏ giả thuyết H₀. Kết luận: Phương pháp học tập kết hợp thực sự mang lại kết quả học tập vượt trội có ý nghĩa thống kê."
      }
    ],
    practice: "Một công ty thử nghiệm thuốc tăng trưởng cây trồng trên 2 luống rau: Luống A dùng thuốc và Luống B dùng nước thường. Thu thập số liệu chiều cao cây sau 2 tuần và dùng hàm T.TEST kiểm định xem thuốc có thực sự hiệu quả không.",
    quizzes: [
      {
        question: "Trong kiểm định giả thuyết thống kê, nếu giá trị xác suất P-value tính được nhỏ hơn mức ý nghĩa chuẩn α = 0.05 (P-value < 0.05), ta đưa ra quyết định gì?",
        options: [
          "Bác bỏ giả thuyết không H₀ và chấp nhận giả thuyết đối H₁ (sự khác biệt có ý nghĩa thống kê)",
          "Chấp nhận giả thuyết không H₀ (không có sự khác biệt)",
          "Không thể đưa ra kết luận gì",
          "Số liệu bị tính sai và phải xóa hết"
        ],
        correct: 0,
        explanation: "Khi P-value < 0.05, xác suất xảy ra do ngẫu nhiên rất thấp (< 5%), do đó ta có đủ bằng chứng khoa học để bác bỏ H₀ và khẳng định có sự khác biệt có ý nghĩa thống kê."
      },
      {
        question: "Hàm nào trong Excel dùng để thực hiện phép kiểm định giả thuyết T-Student so sánh điểm trung bình giữa hai tập mẫu?",
        options: [
          "=T.TEST()",
          "=Z.TEST()",
          "=CHISQ.TEST()",
          "=F.TEST()"
        ],
        correct: 0,
        explanation: "Hàm =T.TEST() tính toán giá trị xác suất P-value của phép kiểm định T-Student giữa hai tập mẫu."
      },
      {
        question: "Trong cú pháp =T.TEST(array1, array2, tails, type), tham số 'type = 1' được dùng cho tình huống khảo sát nào?",
        options: [
          "Mẫu bắt cặp (Paired t-test), ví dụ đo lường trên cùng một nhóm đối tượng trước và sau khi can thiệp điều trị",
          "Hai nhóm hoàn toàn độc lập và xa lạ với nhau",
          "Khảo sát toàn bộ dân số thế giới",
          "Chỉ dành cho các con số âm"
        ],
        correct: 0,
        explanation: "Type = 1 áp dụng cho kiểm định mẫu cặp (Paired Two Sample for Means), rất phổ biến trong các thí nghiệm trước - sau (Pre-test & Post-test)."
      },
      {
        question: "Khi cần so sánh giá trị trung bình của từ 3 nhóm độc lập trở lên (ví dụ so sánh hiệu quả của 3 phương pháp giảng dạy khác nhau), phương pháp thống kê nào được sử dụng thay thế cho T-Test?",
        options: [
          "Phân tích phương sai một yếu tố (One-way ANOVA)",
          "Hàm SUMIF",
          "Hàm COUNT",
          "Chức năng Sort A-Z"
        ],
        correct: 0,
        explanation: "Phép phân tích phương sai ANOVA (Analysis of Variance) được thiết kế chuyên biệt để so sánh trung bình giữa nhiều nhóm (>= 3 nhóm) đồng thời nhằm tránh lạm phát sai số loại I."
      }
    ]
  },

  // ==========================================
  // DỰ ÁN HỌC TẬP TỔNG HỢP: CAPSTONE PROJECT (BÀI 16)
  // ==========================================
  {
    lessonNum: 16,
    id: "bai-16",
    topicNum: 4,
    topicName: "Dự án tổng hợp: Quản trị dự án & Phân tích số liệu",
    title: "Bài 16: Dự án phân tích dữ liệu và quản trị dự án số: Lập kế hoạch kinh doanh & Phân tích thị trường",
    tag: "Capstone Project",
    objectives: [
      "Tích hợp liên hoàn toàn bộ kiến thức Chuyên đề Tin học 12: Quản lý tiến độ và nhân sự bằng phần mềm GanttProject + Phân tích số liệu và mô hình thống kê chuyên sâu trên Excel.",
      "Thực hiện dự án khởi nghiệp học đường số: Khảo sát thị trường nhu cầu của học sinh (Lấy mẫu ngẫu nhiên, Descriptive Stats, Tương quan Correl, PivotTable).",
      "Lập kế hoạch triển khai chiến dịch kinh doanh trên GanttProject: Xây dựng cơ cấu WBS, phân bổ nguồn lực, kinh phí và kiểm soát đường găng Critical Path.",
      "Biên tập báo cáo khoa học số, xuất báo cáo PDF và bảo vệ dự án trước hội đồng lớp học."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-briefcase"></i> Bộ hồ sơ dự án tích hợp bàn giao
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Tệp 1 (GanttProject .gan & PDF):</strong> Bảng tiến độ WBS chi tiết ít nhất 15 công việc, có phân cấp cha con, mốc Milestone, phân bổ ngân sách nhân sự và hiển thị rõ Đường găng.</li>
            <li><strong>Tệp 2 (Excel Analytics .xlsx):</strong> Bảng xử lý số liệu khảo sát thị trường: Thống kê mô tả (Mean, Median, Stdev), PivotTable phân loại đa chiều có Slicer, Biểu đồ Box Plot/Histogram và Phân tích tương quan.</li>
            <li><strong>Tệp 3 (Báo cáo tổng kết PDF):</strong> Thuyết minh dự án khởi nghiệp học đường và phương án bảo vệ dữ liệu 3-2-1.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-clipboard-check"></i> Tiêu chí đánh giá Rubrics (100 điểm)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Kỹ năng lập tiến độ GanttProject (30đ):</strong> Cấu trúc logic, liên kết FS/SS chuẩn, phân bổ nhân sự không bị quá tải.</li>
            <li><strong>Kỹ năng phân tích số liệu Excel (35đ):</strong> Vận dụng đúng các hàm thống kê, PivotTable linh hoạt, biểu đồ chuẩn xác và lập luận tương quan logic.</li>
            <li><strong>Phương án an toàn & bảo vệ dữ liệu (15đ):</strong> Tuân thủ quy tắc 3-2-1, mã hóa tệp dữ liệu mật.</li>
            <li><strong>Thuyết trình & Làm việc nhóm (20đ):</strong> Báo cáo tự tin, slide chuyên nghiệp, phân công công bằng.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Giai đoạn 1: Khảo sát thị trường & Phân tích số liệu (Excel)",
        content: "Thiết kế phiếu khảo sát online -> Thu thập 100 phản hồi -> Dùng Excel tính toán xu thế trung tâm, vẽ biểu đồ Histogram mức giá sẵn sàng chi trả, phân tích tương quan giữa thu nhập và chi tiêu -> Rút ra kết luận kinh doanh."
      },
      {
        title: "Giai đoạn 2: Lập kế hoạch triển khai chiến dịch (GanttProject)",
        content: "Mở GanttProject -> Khởi tạo dự án -> Lập danh mục WBS 4 giai đoạn: Chuẩn bị, Sản xuất mẫu, Marketing quảng bá, Bán hàng và Tổng kết -> Phân công nhiệm vụ cho từng thành viên -> Kiểm soát đường găng."
      },
      {
        title: "Giai đoạn 3: Đóng gói bảo mật hồ sơ & Báo cáo tổng kết",
        content: "Xuất báo cáo PDF từ GanttProject -> Nén toàn bộ tệp nguồn dự án vào 1 tệp mã hóa AES-256 bằng 7-Zip -> Thuyết trình báo cáo trước giáo viên và cả lớp."
      }
    ],
    practice: "Thực hiện theo nhóm 3-5 học sinh: Lựa chọn một ý tưởng kinh doanh thực tế (ví dụ: 'Kinh doanh trà sữa/ấn phẩm handmade gây quỹ từ thiện'), triển khai toàn diện bộ hồ sơ dự án số theo đúng 3 giai đoạn trên.",
    quizzes: [
      {
        question: "Dự án học tập định hướng Tin học ứng dụng lớp 12 tích hợp sự kết hợp kỹ năng của hai mảng công nghệ chuyên sâu nào?",
        options: [
          "Quản trị dự án số (GanttProject) và Phân tích dữ liệu thống kê kinh doanh (Excel Analytics)",
          "Lập trình game 3D Unity và đồ họa Photoshop",
          "Viết code vi mạch Arduino và hàn mạch điện tử",
          "Soạn thảo văn bản Word và lướt web giải trí"
        ],
        correct: 0,
        explanation: "Dự án kết hợp chặt chẽ giữa năng lực quản trị tiến độ, nguồn lực, chi phí (GanttProject) và năng lực khai phá dữ liệu định lượng khoa học (Excel)."
      },
      {
        question: "Tại sao trong báo cáo nghiên cứu khả thi kinh doanh, phần phân tích dữ liệu khảo sát khách hàng lại đóng vai trò quyết định?",
        options: [
          "Cung cấp các bằng chứng số liệu khách quan, khoa học chứng minh nhu cầu có thật của thị trường thay vì chỉ dựa vào cảm tính mơ hồ",
          "Chỉ để cho báo cáo có thêm nhiều trang giấy",
          "Để máy in chạy lâu hơn",
          "Bắt buộc phải có để điền vào cho đủ chỗ trống"
        ],
        correct: 0,
        explanation: "Phân tích dữ liệu định lượng giúp nhà quản trị đưa ra các quyết định kinh doanh dựa trên sự thật (Data-driven decisions), giảm thiểu tối đa rủi ro thất bại."
      },
      {
        question: "Khi một công việc nằm trên Đường găng (Critical Path) của dự án bị chậm trễ tiến độ, người quản lý nhóm cần hành động như thế nào?",
        options: [
          "Ưu tiên điều động ngay thêm nguồn lực hỗ trợ hoặc áp dụng kỹ thuật Fast-tracking để bù lại thời gian bị trễ, nhằm cứu vãn hạn chót của toàn bộ dự án",
          "Kệ mặc công việc và đi về nhà",
          "Đổ lỗi cho các thành viên khác",
          "Xóa bỏ đường găng đi"
        ],
        correct: 0,
        explanation: "Công việc trên đường găng quyết định ngày về đích của cả dự án; chậm đường găng là chậm toàn bộ dự án, do đó người quản trị phải can thiệp tức thì bằng điều phối nguồn lực."
      },
      {
        question: "Lợi ích thiết thực nhất mà học sinh đạt được sau khi hoàn thành khóa học Chuyên đề Tin học 12 (Tin học ứng dụng) là gì?",
        options: [
          "Trang bị trọn vẹn bộ kỹ năng số chuyên nghiệp: Quản trị dự án khoa học, làm chủ hệ thống máy tính an toàn và tư duy phân tích dữ liệu phục vụ đại học và nghề nghiệp tương lai",
          "Chỉ biết chơi trò chơi điện tử",
          "Chỉ nhớ được phím tắt mà không biết làm gì",
          "Trở thành thợ sửa xe máy"
        ],
        correct: 0,
        explanation: "Khóa học trang bị bộ năng lực số cốt lõi của công dân toàn cầu trong kỷ nguyên kinh tế số: Quản trị dự án (PM), An toàn hệ thống (IT Support/Security) và Phân tích số liệu (Data Analysis)."
      }
    ]
  }
];

module.exports = lessons;
