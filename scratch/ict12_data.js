module.exports = {
  "1": {
    "num": 1,
    "title": "Quản lí dự án và phần mềm quản lí dự án",
    "badge": "GanttProject Cơ bản",
    "topic": "Chuyên đề 1: Phần mềm quản lí dự án",
    "chapter": 1,
    "summary": "Hiểu bản chất của dự án và quy trình quản lí dự án; làm quen với phần mềm mã nguồn mở GanttProject (.gan), cấu trúc danh sách nhiệm vụ phân cấp WBS và biểu đồ Gantt trực quan qua dự án mẫu Xây dựng video kỉ yếu lớp 12A1.",
    "objectives": [
      "Trình bày được khái niệm dự án, mục tiêu, nguồn lực, thời hạn và các khâu quản lí dự án cốt lõi.",
      "Nhận biết được giao diện, chức năng của danh sách nhiệm vụ và biểu đồ Gantt trong GanttProject.",
      "Thực hiện thành thạo quy trình khởi tạo dự án mới, khai báo thông tin chung và định dạng tệp .gan.",
      "Thiết lập danh sách nhiệm vụ phân cấp WBS (nhiệm vụ lớn, nhiệm vụ con) cho dự án thực tế."
    ],
    "sections": [
      {
        "heading": "1. Khái niệm quản lí dự án và cấu trúc công việc",
        "items": [
          {
            "badge": "Bản chất dự án",
            "title": "Khái niệm dự án và các yếu tố cấu thành",
            "points": [
              "<strong>Dự án (Project):</strong> Là một tập hợp các công việc có mục tiêu cụ thể, tạo ra sản phẩm/dịch vụ duy nhất trong một khoảng thời gian xác định và sử dụng các nguồn lực (nhân lực, kinh phí, thiết bị) bị giới hạn.",
              "<strong>Quản lí dự án (Project Management):</strong> Quá trình lập kế hoạch, phân công công việc, điều phối nguồn lực, giám sát tiến độ thực tế so với kế hoạch, xử lý phát sinh và đánh giá nghiệm thu sản phẩm.",
              "<strong>Dự án xuyên suốt trong SGK:</strong> 'Xây dựng video kỉ yếu lớp 12A1' bao gồm 5 giai đoạn chính: 1. Chuẩn bị kế hoạch -> 2. Viết kịch bản chi tiết -> 3. Thu thập tư liệu ảnh/video -> 4. Biên tập hậu kỳ dựng phim -> 5. Xuất bản và tổ chức buổi công chiếu."
            ]
          },
          {
            "badge": "Phân cấp WBS",
            "title": "Cấu trúc phân rã công việc (Work Breakdown Structure)",
            "points": [
              "<strong>Khái niệm WBS:</strong> Kĩ thuật chia nhỏ một dự án lớn thành các gói công việc (nhiệm vụ cha/Summary Task) và các nhiệm vụ con cụ thể (Subtasks) có thể đo lường và giao việc được.",
              "<strong>Cấp bậc nhiệm vụ:</strong> Trong GanttProject, sử dụng nút <em>Indent</em> (thụt lề sang phải) để biến một nhiệm vụ thành nhiệm vụ con của mục phía trên; dùng <em>Outdent</em> (lùi lề sang trái) để nâng cấp bậc.",
              "<strong>Đặc điểm nhiệm vụ cha:</strong> Thời lượng và ngày bắt đầu/kết thúc của nhiệm vụ cha được phần mềm tự động tính toán từ các nhiệm vụ con bên trong, người dùng không nhập tay."
            ]
          }
        ]
      },
      {
        "heading": "2. Phần mềm GanttProject & Biểu đồ Gantt",
        "items": [
          {
            "badge": "Giao diện GanttProject",
            "title": "Cấu trúc không gian làm việc của GanttProject",
            "points": [
              "<strong>Định dạng tệp:</strong> Tệp dự án của GanttProject có phần mở rộng là <code>.gan</code> (dạng XML mở, lưu toàn bộ cấu trúc công việc, nhân sự và lịch trình).",
              "<strong>Danh sách nhiệm vụ (Task Table):</strong> Nằm ở nửa bên trái, hiển thị các cột: Tên nhiệm vụ (Name), Ngày bắt đầu (Begin date), Ngày kết thúc (End date), Thời lượng (Duration), Tỉ lệ hoàn thành (Progress), Chi phí (Cost).",
              "<strong>Biểu đồ Gantt (Gantt Chart):</strong> Nằm ở nửa bên phải, biểu diễn trực quan các nhiệm vụ dưới dạng các thanh thời gian nằm ngang trên dòng lịch biểu."
            ]
          },
          {
            "badge": "Quy trình khởi tạo",
            "title": "4 bước khởi tạo một dự án mới trên GanttProject",
            "points": [
              "<strong>Bước 1 - Khởi tạo:</strong> Vào <code>Project > New</code>, đặt tên dự án, đơn vị tổ chức, ngày bắt đầu dự án và thiết lập lịch ngày làm việc/ngày nghỉ cuối tuần.",
              "<strong>Bước 2 - Thêm nhiệm vụ:</strong> Nhấn phím <code>Ctrl + T</code> hoặc nút Task mới để nhập lần lượt các đầu việc theo danh mục kịch bản.",
              "<strong>Bước 3 - Phân cấp WBS:</strong> Chọn các nhiệm vụ con và bấm nút <em>Indent</em> để gom nhóm dưới các giai đoạn lớn.",
              "<strong>Bước 4 - Lưu trữ:</strong> Chọn <code>Project > Save</code> lưu tệp <code>.gan</code> vào thư mục làm việc để sẵn sàng thiết lập tiến độ."
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Tệp dự án lưu trữ trong phần mềm GanttProject có phần mở rộng mặc định là gì?",
        "options": [
          ".gan",
          ".gantt",
          ".prj",
          ".mpp"
        ],
        "answer": 0,
        "explain": "GanttProject sử dụng phần mở rộng mặc định là .gan để lưu trữ toàn bộ thông tin nhiệm vụ, nhân sự và tiến độ dự án."
      },
      {
        "q": "Trong GanttProject, thao tác nào biến một nhiệm vụ thành nhiệm vụ con (Subtask) của nhiệm vụ nằm ngay phía trước nó?",
        "options": [
          "Chọn nhiệm vụ và nhấn nút Indent (thụt lề sang phải)",
          "Chọn nhiệm vụ và nhấn nút Outdent (lùi lề sang trái)",
          "Nháy đúp vào tên nhiệm vụ và gõ thêm dấu gạch đầu dòng",
          "Kéo thả nhiệm vụ ra ngoài màn hình Desktop"
        ],
        "answer": 0,
        "explain": "Nút Indent làm thụt lề nhiệm vụ được chọn, biến nó thành nhiệm vụ con của nhiệm vụ cha ngay trên."
      },
      {
        "q": "Đặc điểm nào sau đây là ĐÚNG đối với một nhiệm vụ cha (Summary Task / nhiệm vụ lớn) trong GanttProject?",
        "options": [
          "Thời lượng và ngày bắt đầu/kết thúc được phần mềm tự động tính toán tổng hợp từ các nhiệm vụ con",
          "Người quản trị phải gõ tay thời lượng và ngày kết thúc cho nhiệm vụ cha",
          "Nhiệm vụ cha không thể chứa quá 2 nhiệm vụ con",
          "Nhiệm vụ cha luôn có thời lượng bằng 0 ngày"
        ],
        "answer": 0,
        "explain": "Nhiệm vụ cha tự động tổng hợp thời gian bắt đầu sớm nhất và kết thúc muộn nhất từ toàn bộ các nhiệm vụ con trực thuộc."
      }
    ]
  },
  "2": {
    "num": 2,
    "title": "Thiết lập tiến độ dự án",
    "badge": "Tiến độ & Phụ thuộc",
    "topic": "Chuyên đề 1: Phần mềm quản lí dự án",
    "chapter": 1,
    "summary": "Xác định thời lượng nhiệm vụ, mô hình hóa các mối quan hệ phụ thuộc tiền nhiệm (Predecessors) và thiết lập các mốc quan trọng (Milestone) thời lượng 0 ngày để lịch trình dự án tự động cập nhật nhất quán.",
    "objectives": [
      "Giải thích được ý nghĩa của thời lượng, ngày bắt đầu, ngày kết thúc và vai trò của liên kết phụ thuộc.",
      "Nhận biết và phân biệt khái niệm mốc tiến độ (Milestone) có thời lượng bằng 0.",
      "Thiết lập thành thạo hộp thoại Task Properties: General và tab Predecessors.",
      "Kiểm tra và đánh giá tác động dây chuyền khi một nhiệm vụ tiền nhiệm bị dời lịch."
    ],
    "sections": [
      {
        "heading": "1. Mối quan hệ phụ thuộc & Mốc quan trọng (Milestone)",
        "items": [
          {
            "badge": "Quan hệ tiền nhiệm",
            "title": "Mối quan hệ phụ thuộc giữa các nhiệm vụ trong dự án",
            "points": [
              "<strong>Sự phụ thuộc (Dependency):</strong> Trong thực tế, nhiều nhiệm vụ không thể bắt đầu nếu nhiệm vụ trước đó chưa hoàn thành (ví dụ: phải 'Viết kịch bản xong' thì mới có thể 'Đi quay video').",
              "<strong>Nhiệm vụ tiền nhiệm (Predecessor):</strong> Là nhiệm vụ diễn ra trước và quyết định thời điểm sớm nhất mà nhiệm vụ kế tiếp có thể bắt đầu.",
              "<strong>Kiểu liên kết FS (Finish-to-Start):</strong> Kiểu phổ biến nhất trong GanttProject: Nhiệm vụ B chỉ được bắt đầu khi nhiệm vụ A đã hoàn tất.",
              "<strong>Độ trễ (Lag):</strong> Khoảng thời gian chờ đệm giữa hai nhiệm vụ liên kết (ví dụ: chờ 1 ngày để duyệt kịch bản)."
            ]
          },
          {
            "badge": "Khái niệm Milestone",
            "title": "Mốc sự kiện quan trọng (Milestone) trong quản lí dự án",
            "points": [
              "<strong>Định nghĩa:</strong> Milestone là một sự kiện hoặc điểm kiểm soát then chốt đánh dấu sự hoàn thành của một giai đoạn lớn (ví dụ: 'Hoàn tất kịch bản', 'Kí duyệt nghiệm thu').",
              "<strong>Thời lượng bằng 0:</strong> Milestone không tiêu tốn thời gian thực hiện (Duration = 0 ngày) và không phân bổ nhân công thực hiện công việc.",
              "<strong>Biểu diễn trên biểu đồ Gantt:</strong> Milestone được hiển thị dưới dạng hình thoi đặc biệt (Diamond shape) thay vì thanh chữ nhật nằm ngang."
            ]
          }
        ]
      },
      {
        "heading": "2. Quy trình thiết lập tiến độ trên GanttProject",
        "items": [
          {
            "badge": "Task Properties",
            "title": "Các tham số trong hộp thoại thuộc tính nhiệm vụ",
            "points": [
              "<strong>Trang General (Thông tin chung):</strong> Khai báo Tên nhiệm vụ (Name), Ngày bắt đầu (Earliest begin), Thời lượng (Duration theo ngày) hoặc tích chọn ô <code>Milestone</code>.",
              "<strong>Trang Predecessors (Tiền nhiệm):</strong> Bấm nút <code>Add</code>, chọn mã số (ID) hoặc tên nhiệm vụ tiền nhiệm, chọn kiểu quan hệ (FS, SS, FF, SF) và nhập độ trễ Lag nếu có.",
              "<strong>Cơ chế tự động tính toán:</strong> Khi thiết lập quan hệ tiền nhiệm, phần mềm tự động tính ngày bắt đầu của nhiệm vụ sau dựa trên ngày kết thúc của nhiệm vụ trước."
            ]
          },
          {
            "badge": "Cập nhật nhất quán",
            "title": "Tác động dây chuyền khi điều chỉnh lịch trình",
            "points": [
              "<strong>Tính nhất quán tự động:</strong> Nếu nhiệm vụ A bị dời lùi lại 2 ngày, toàn bộ chuỗi các nhiệm vụ phụ thuộc B, C, D nối sau A sẽ tự động trượt theo mà người dùng không cần tính toán thủ công.",
              "<strong>Tránh lỗi nhập ngày cứng:</strong> Nguyên tắc vàng trong QLDA là không gõ ngày cứng riêng lẻ cho từng việc mà phải mô hình hóa đúng chuỗi liên kết phụ thuộc."
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Trong quản lí dự án, một mốc sự kiện quan trọng (Milestone) có đặc điểm nổi bật nào sau đây?",
        "options": [
          "Có thời lượng bằng 0 ngày và được biểu diễn bằng hình thoi trên biểu đồ Gantt",
          "Có thời lượng bằng đúng 1 tuần và hiển thị bằng thanh màu đỏ",
          "Là nhiệm vụ có kinh phí lớn nhất trong toàn bộ dự án",
          "Là nhiệm vụ bắt buộc phải do người quản trị dự án tự thực hiện"
        ],
        "answer": 0,
        "explain": "Milestone đánh dấu mốc thời điểm kết thúc một giai đoạn nên có thời lượng bằng 0 và được vẽ bằng hình thoi trên Gantt chart."
      },
      {
        "q": "Kiểu quan hệ phụ thuộc nào quy định: 'Nhiệm vụ B chỉ có thể bắt đầu khi nhiệm vụ A đã hoàn thành'?",
        "options": [
          "Finish-to-Start (FS)",
          "Start-to-Start (SS)",
          "Finish-to-Finish (FF)",
          "Start-to-Finish (SF)"
        ],
        "answer": 0,
        "explain": "Finish-to-Start (FS) là quan hệ tiền nhiệm kinh điển: A kết thúc thì B mới được phép bắt đầu."
      },
      {
        "q": "Tại sao người quản lí dự án KHÔNG nên nhập ngày bắt đầu cố định bằng tay cho từng nhiệm vụ riêng lẻ?",
        "options": [
          "Vì khi nhiệm vụ tiền nhiệm bị dời lịch, các nhiệm vụ sau sẽ không thể tự động cập nhật liên hoàn",
          "Vì phần mềm GanttProject sẽ báo lỗi và tự động đóng chương trình",
          "Vì nhập ngày bắt đầu bằng tay sẽ làm tăng gấp đôi kinh phí dự án",
          "Vì biểu đồ Gantt không hỗ trợ hiển thị ngày tháng cụ thể"
        ],
        "answer": 0,
        "explain": "Mô hình hóa bằng quan hệ tiền nhiệm giúp toàn bộ kế hoạch tự động dịch chuyển linh hoạt khi có sự cố phát sinh."
      }
    ]
  },
  "3": {
    "num": 3,
    "title": "Phân bổ nhân lực và kinh phí dự án",
    "badge": "Nguồn lực & Kinh phí",
    "topic": "Chuyên đề 1: Phần mềm quản lí dự án",
    "chapter": 1,
    "summary": "Khai báo danh sách nhân sự (Resources), thiết lập định mức tiền công, gán người vào nhiệm vụ, kiểm soát tỉ lệ phân bổ và nhận diện cảnh báo quá tải (Overload 200%) trên biểu đồ sử dụng nguồn lực.",
    "objectives": [
      "Trình bày được khái niệm nguồn lực, nhân lực, định mức chi phí và tỉ lệ tham gia.",
      "Khai báo hồ sơ thành viên dự án: tên, vai trò, đơn giá ngày công và ngày nghỉ cá nhân.",
      "Phân bổ nhân lực vào từng nhiệm vụ và kiểm soát tổng kinh phí dự toán.",
      "Phát hiện và xử lý hiện tượng xung đột/quá tải nhân sự trên Resource Chart."
    ],
    "sections": [
      {
        "heading": "1. Quản lí nguồn lực nhân sự & Chi phí",
        "items": [
          {
            "badge": "Hồ sơ nhân sự",
            "title": "Thiết lập danh sách Resources trong GanttProject",
            "points": [
              "<strong>Nguồn lực (Resources):</strong> Con người, thiết bị hoặc công cụ cần thiết để hoàn thành công việc. SGK tập trung vào nguồn lực nhân sự trong lớp học (Đạo diễn, Biên kịch, Quay phim, Dựng phim).",
              "<strong>Thông tin nhân sự:</strong> Tên thành viên (Name), Vai trò mặc định (Role), Đơn giá chi phí tiêu chuẩn (Standard rate / tiền công theo ngày/giờ).",
              "<strong>Lịch nghỉ cá nhân (Days off):</strong> Khai báo các ngày nghỉ riêng của từng cá nhân để phần mềm tự động né tránh không giao việc vào ngày đó."
            ]
          },
          {
            "badge": "Tỉ lệ phân bổ",
            "title": "Cơ chế phân bổ công việc và tính toán kinh phí",
            "points": [
              "<strong>Tỉ lệ tham gia (Units / Assignment %):</strong> Mức độ phần trăm thời gian một người dành cho nhiệm vụ (mặc định 100% nghĩa là toàn thời gian trong ngày làm việc).",
              "<strong>Tự động tổng hợp chi phí:</strong> Kinh phí nhiệm vụ = Thời lượng (ngày) × Định mức tiền công × Tỉ lệ phân bổ. Phần mềm tự động cộng dồn thành tổng ngân sách dự án."
            ]
          }
        ]
      },
      {
        "heading": "2. Cảnh báo quá tải & Cân bằng nguồn lực",
        "items": [
          {
            "badge": "Cảnh báo Overload",
            "title": "Nhận diện hiện tượng quá tải công việc (Resource Overload)",
            "points": [
              "<strong>Hiện tượng quá tải:</strong> Xảy ra khi một người được giao đồng thời nhiều nhiệm vụ chồng chéo trong cùng một khoảng thời gian, khiến tổng tỉ lệ tham gia vượt quá 100% (ví dụ 200%).",
              "<strong>Cảnh báo trực quan:</strong> Trên biểu đồ nguồn lực (Resource Chart), thanh thời gian của người bị quá tải sẽ đổi sang màu đỏ kèm chỉ số cảnh báo nổi bật."
            ]
          },
          {
            "badge": "Biện pháp xử lý",
            "title": "Các giải pháp cân bằng và điều phối nguồn lực",
            "points": [
              "<strong>Giải pháp 1 - Giảm tỉ lệ tham gia:</strong> Chia tỉ lệ mỗi nhiệm vụ xuống 50% nếu người đó có thể làm việc bán thời gian cho cả hai việc.",
              "<strong>Giải pháp 2 - Dời lịch trình:</strong> Điều chỉnh nhiệm vụ thứ hai bắt đầu sau khi nhiệm vụ thứ nhất đã hoàn thành.",
              "<strong>Giải pháp 3 - Bổ sung nhân sự:</strong> Giao bớt một nhiệm vụ cho thành viên khác đang rảnh rỗi trong nhóm."
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Hiện tượng một thành viên dự án bị cảnh báo 'Quá tải 200%' trên Resource Chart xảy ra khi nào?",
        "options": [
          "Khi thành viên đó bị giao 2 nhiệm vụ chạy song song trong cùng một ngày với tỉ lệ 100% cho mỗi việc",
          "Khi thành viên đó đi làm vào ngày nghỉ cuối tuần",
          "Khi tiền công của thành viên đó cao gấp đôi so với các thành viên khác",
          "Khi thành viên đó hoàn thành nhiệm vụ trước thời hạn 2 ngày"
        ],
        "answer": 0,
        "explain": "Hai nhiệm vụ diễn ra cùng thời điểm, mỗi nhiệm vụ phân bổ 100% nhân lực sẽ dẫn tới tổng tải 200%, gây quá tải nghiêm trọng."
      },
      {
        "q": "Công thức phần mềm GanttProject sử dụng để tự động tính chi phí nhân công cho một nhiệm vụ là gì?",
        "options": [
          "Chi phí = Thời lượng (ngày) × Đơn giá ngày công × Tỉ lệ phân bổ",
          "Chi phí = Thời lượng (ngày) + Đơn giá ngày công",
          "Chi phí = Tổng số nhiệm vụ con chia cho số lượng thành viên",
          "Chi phí = Số ngày nghỉ cá nhân nhân với 100%"
        ],
        "answer": 0,
        "explain": "Chi phí nhân sự là tích số giữa số ngày làm việc, đơn giá định mức và phần trăm mức độ tham gia."
      },
      {
        "q": "Giải pháp nào sau đây KHÔNG phù hợp để khắc phục tình trạng quá tải nhân sự trong dự án?",
        "options": [
          "Tăng gấp đôi thời lượng của dự án mà không kiểm tra lịch trình",
          "Điều chỉnh tỉ lệ phân bổ mỗi nhiệm vụ xuống mức 50%",
          "Giao bớt một nhiệm vụ cho thành viên khác có năng lực tương đương đang rảnh",
          "Dời ngày bắt đầu của một nhiệm vụ sang thời điểm người đó đã hoàn thành nhiệm vụ trước"
        ],
        "answer": 0,
        "explain": "Tăng gấp đôi thời lượng bừa bãi sẽ làm chậm trễ tiến độ toàn bộ dự án mà không giải quyết gốc rễ xung đột nhân sự."
      }
    ]
  },
  "4": {
    "num": 4,
    "title": "Quản lí tiến độ dự án",
    "badge": "Baseline & Giám sát",
    "topic": "Chuyên đề 1: Phần mềm quản lí dự án",
    "chapter": 1,
    "summary": "Lưu đường cơ sở (Baseline) để làm mốc đối chiếu kế hoạch gốc, cập nhật phần trăm hoàn thành (% Progress) và ngày kết thúc thực tế, so sánh chênh lệch sớm/trễ và điều chỉnh kế hoạch thích ứng.",
    "objectives": [
      "Trình bày được khái niệm đường cơ sở (Baseline) và vai trò làm mốc đối chiếu trong giám sát dự án.",
      "Thực hiện lưu Baseline trong GanttProject sau khi kế hoạch ban đầu được phê duyệt.",
      "Cập nhật tiến độ thực tế (% hoàn thành, ngày hoàn thành thực tế) cho từng đầu việc.",
      "Phân tích độ lệch so với Baseline và thực hiện điều chỉnh kế hoạch tiếp theo hợp lý."
    ],
    "sections": [
      {
        "heading": "1. Đường cơ sở (Baseline) & Theo dõi tiến độ",
        "items": [
          {
            "badge": "Khái niệm Baseline",
            "title": "Vai trò then chốt của đường cơ sở (Baseline)",
            "points": [
              "<strong>Đường cơ sở (Baseline):</strong> Là bản sao chụp 'đóng băng' toàn bộ kế hoạch dự án ban đầu (ngày bắt đầu, ngày kết thúc, thời lượng, chi phí) sau khi được các bên thống nhất phê chuẩn.",
              "<strong>Mục đích sử dụng:</strong> Baseline đóng vai trò là 'thước đo mốc' chuẩn mực cố định để đối chiếu, so sánh và phát hiện xem tiến độ thực tế đang diễn ra nhanh hơn, chậm hơn hay đúng hạn.",
              "<strong>Hiển thị trên biểu đồ Gantt:</strong> GanttProject hiển thị đường cơ sở dưới dạng các thanh mảnh màu xám/vàng nằm ngay bên dưới thanh nhiệm vụ hiện tại."
            ]
          },
          {
            "badge": "Cập nhật % Progress",
            "title": "Cập nhật dữ liệu tiến độ thực tế hàng tuần",
            "points": [
              "<strong>Tỉ lệ hoàn thành (Progress %):</strong> Giá trị từ 0% đến 100% phản ánh mức độ hoàn tất khối lượng công việc của nhiệm vụ.",
              "<strong>Màu sắc thanh tiến độ:</strong> Trên biểu đồ Gantt, phần trăm hoàn thành được thể hiện bằng dải màu đậm lấp đầy dần từ trái sang phải bên trong thanh nhiệm vụ.",
              "<strong>Ghi nhận ngày kết thúc thực tế:</strong> Nếu công việc hoàn thành sớm hơn hoặc muộn hơn kế hoạch, quản trị viên cập nhật lại ngày kết thúc thực tế."
            ]
          }
        ]
      },
      {
        "heading": "2. Điều chỉnh kế hoạch thích ứng",
        "items": [
          {
            "badge": "Tình huống thực tế",
            "title": "Ví dụ điều chỉnh kế hoạch khi hoàn thành sớm/muộn",
            "points": [
              "<strong>Tình huống sách giáo khoa:</strong> Nhiệm vụ 'Thu thập ảnh và video' hoàn thành sớm hơn dự kiến 1 ngày. Nhờ có quan hệ liên kết FS, nhiệm vụ 'Dựng phim hậu kỳ' có thể bắt đầu sớm hơn 1 ngày.",
              "<strong>Thao tác điều chỉnh:</strong> Cập nhật ngày kết thúc của nhiệm vụ thu thập, kiểm tra lại dây chuyền liên kết và đánh giá ảnh hưởng tới mốc hoàn thành toàn dự án.",
              "<strong>Đối chiếu Baseline:</strong> So sánh vị trí thanh mới với thanh Baseline để ghi nhận lí do và làm báo cáo tổng kết tiến độ cho ban giám hiệu/giáo viên."
            ]
          },
          {
            "badge": "Nguyên tắc bảo toàn",
            "title": "Nguyên tắc khi kéo thanh nhiệm vụ trên biểu đồ",
            "points": [
              "<strong>Bảo toàn liên kết:</strong> Khi điều chỉnh kéo dịch chuyển thanh nhiệm vụ trên biểu đồ, luôn kiểm tra để không làm đứt gãy hoặc vi phạm các ràng buộc phụ thuộc đã thiết lập.",
              "<strong>Quản trị thay đổi:</strong> Bất kì sự thay đổi nào ảnh hưởng đến mốc Milestone hoặc tổng ngân sách đều cần được thảo luận và ghi chú rõ nguyên nhân."
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Đường cơ sở (Baseline) trong phần mềm quản lí dự án có vai trò quan trọng nhất là gì?",
        "options": [
          "Lưu lại kế hoạch ban đầu làm mốc chuẩn để đối chiếu và đánh giá tiến độ thực tế sớm hay trễ",
          "Tự động gửi email nhắc nhở từng thành viên khi sắp đến hạn nộp bài",
          "Xóa bỏ toàn bộ các nhiệm vụ con không cần thiết trong dự án",
          "Tự động cấp phát ngân sách bổ sung cho dự án khi bị thiếu tiền"
        ],
        "answer": 0,
        "explain": "Baseline đóng băng kế hoạch ban đầu làm căn cứ chuẩn mực để so sánh độ lệch thời gian và chi phí trong suốt quá trình triển khai."
      },
      {
        "q": "Trên biểu đồ Gantt của GanttProject, tỉ lệ phần trăm hoàn thành (Progress %) của một nhiệm vụ được biểu diễn như thế nào?",
        "options": [
          "Bằng dải màu đậm lấp đầy dần từ trái sang phải bên trong thanh nhiệm vụ",
          "Bằng số lượng hình sao nhấp nháy trên đầu thanh nhiệm vụ",
          "Bằng sự thay đổi kích thước phông chữ của tên nhiệm vụ",
          "Bằng tiếng chuông cảnh báo phát ra từ loa máy tính"
        ],
        "answer": 0,
        "explain": "Dải màu đậm chạy từ trái sang phải bên trong thân thanh thời gian thể hiện trực quan tỉ lệ hoàn tất từ 0% đến 100%."
      },
      {
        "q": "Khi một nhiệm vụ tiền nhiệm hoàn thành sớm hơn 2 ngày so với kế hoạch, người quản trị dự án cần làm gì?",
        "options": [
          "Cập nhật ngày kết thúc thực tế của nhiệm vụ đó và kiểm tra lịch tự động đẩy sớm của các nhiệm vụ phụ thuộc",
          "Xóa nhiệm vụ đó khỏi dự án vì đã xong",
          "Tạo lại một dự án mới hoàn toàn từ đầu",
          "Bắt các thành viên nghỉ ngơi chờ đủ 2 ngày mới được làm việc tiếp"
        ],
        "answer": 0,
        "explain": "Cập nhật ngày hoàn thành thực tế để tận dụng cơ hội đẩy sớm tiến độ của các nhiệm vụ phụ thuộc kế tiếp."
      }
    ]
  },
  "5": {
    "num": 5,
    "title": "Tăng năng suất làm việc với phần mềm quản lí dự án",
    "badge": "Hợp tác & Năng suất",
    "topic": "Chuyên đề 1: Phần mềm quản lí dự án",
    "chapter": 1,
    "summary": "Nâng cao hiệu suất phối hợp nhóm bằng cách gắn liên kết tư liệu chia sẻ đám mây (Web Link Google Drive) vào thuộc tính nhiệm vụ, xuất báo cáo tiến độ và phân tích lợi ích toàn diện của phần mềm QLDA.",
    "objectives": [
      "Sử dụng trường Web Link trong GanttProject để liên kết nhiệm vụ với thư mục lưu trữ chia sẻ trên đám mây.",
      "Tổ chức cấu trúc thư mục tài nguyên dự án trực tuyến khoa học, phân quyền truy cập hợp lý.",
      "Tổng hợp và xuất báo cáo tiến độ dự án dưới dạng trực quan, sơ đồ tư duy hoặc bảng biểu.",
      "Đánh giá các lợi ích cốt lõi của việc ứng dụng phần mềm quản lí dự án trong học tập và công việc."
    ],
    "sections": [
      {
        "heading": "1. Phối hợp nhóm & Liên kết đám mây (Web Link)",
        "items": [
          {
            "badge": "Web Link tích hợp",
            "title": "Gắn liên kết tài nguyên đám mây vào từng nhiệm vụ",
            "points": [
              "<strong>Tập trung hóa tư liệu:</strong> Lưu trữ toàn bộ kịch bản, ảnh thô, video quay và âm thanh trên thư mục chia sẻ Google Drive hoặc OneDrive.",
              "<strong>Tính năng Web Link:</strong> Trong hộp thoại Task Properties, dán đường dẫn liên kết chia sẻ vào trường <code>Web Link</code>. Thành viên chỉ cần nhấp vào biểu tượng liên kết trên GanttProject là mở ngay tệp tư liệu tương ứng.",
              "<strong>Kiểm tra phân quyền:</strong> Đảm bảo đường dẫn chia sẻ được cấp quyền xem/chỉnh sửa cho đúng các thành viên phụ trách nhiệm vụ đó."
            ]
          },
          {
            "badge": "Báo cáo tiến độ",
            "title": "Phương pháp tổng hợp và báo cáo dự án trực quan",
            "points": [
              "<strong>Nội dung báo cáo định kì:</strong> Danh sách công việc đã hoàn thành, công việc đang triển khai, công việc bị chậm trễ, mức độ sử dụng kinh phí và các rủi ro phát sinh.",
              "<strong>Hình thức thể hiện:</strong> Xuất biểu đồ Gantt dạng ảnh PNG/PDF, kết hợp sơ đồ tư duy (Mindmap) hoặc trang trình chiếu thuyết minh để báo cáo trước tập thể lớp."
            ]
          }
        ]
      },
      {
        "heading": "2. Lợi ích của phần mềm QLDA & Vai trò con người",
        "items": [
          {
            "badge": "Lợi ích cốt lõi",
            "title": "Ưu thế vượt trội khi sử dụng phần mềm quản lí dự án",
            "points": [
              "<strong>Cái nhìn toàn cảnh (Bird-eye view):</strong> Thấy rõ toàn bộ lộ trình, thời hạn, người phụ trách và mối liên hệ giữa các công việc mà không bị bỏ sót.",
              "<strong>Tối ưu hóa nguồn lực:</strong> Tránh chồng chéo công việc, hạn chế tình trạng người quá tải người ngồi chơi.",
              "<strong>Ra quyết định dựa trên dữ liệu:</strong> Phát hiện nguy cơ trễ hạn sớm để kịp thời điều chỉnh kế hoạch chủ động."
            ]
          },
          {
            "badge": "Yếu tố con người",
            "title": "Vai trò quyết định của người quản trị dự án",
            "points": [
              "<strong>Phần mềm chỉ là công cụ:</strong> Phần mềm chỉ tính toán dựa trên dữ liệu do con người nhập vào; nếu dữ liệu đầu vào sai thì kết quả dự báo sẽ sai lệch (GIGO - Garbage In, Garbage Out).",
              "<strong>Kĩ năng mềm:</strong> Người quản lí dự án cần thường xuyên trao đổi, khích lệ thành viên, kiểm tra thực tế và giải quyết mâu thuẫn nội bộ."
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Tính năng nào trong GanttProject cho phép thành viên nhấp chuột để mở trực tiếp kịch bản hoặc thư mục ảnh trên Google Drive?",
        "options": [
          "Trường Web Link trong hộp thoại Task Properties",
          "Trường Standard rate trong bảng Resources",
          "Trường Earliest begin trong tab General",
          "Chức năng Export sang tệp âm thanh MP3"
        ],
        "answer": 0,
        "explain": "Trường Web Link cho phép gắn đường dẫn URL của thư mục đám mây vào nhiệm vụ để nhóm truy cập nhanh chóng."
      },
      {
        "q": "Lợi ích lớn nhất của việc áp dụng phần mềm quản lí dự án (như GanttProject) so với việc ghi chép sổ tay truyền thống là gì?",
        "options": [
          "Cung cấp cái nhìn toàn cảnh trực quan, tự động tính toán tiến độ liên hoàn và cảnh báo quá tải nhân sự",
          "Phần mềm sẽ tự động quay phim và tự động dựng video mà không cần con người làm việc",
          "Phần mềm đảm bảo dự án luôn thành công 100% kể cả khi không ai thực hiện công việc",
          "Phần mềm giúp máy tính chạy nhanh gấp đôi và không bị nhiễm virus"
        ],
        "answer": 0,
        "explain": "Phần mềm trực quan hóa dòng thời gian, quan hệ phụ thuộc và kiểm soát tài nguyên tự động, giúp quản trị chuyên nghiệp."
      },
      {
        "q": "Nhận định nào sau đây là ĐÚNG về vai trò của con người khi sử dụng phần mềm quản lí dự án?",
        "options": [
          "Phần mềm chỉ là công cụ hỗ trợ; người quản lí vẫn phải nhập liệu chính xác, theo dõi thực tế và phối hợp nhóm",
          "Chỉ cần cài đặt phần mềm là người quản trị không cần họp nhóm hay trao đổi với các thành viên",
          "Dữ liệu phần mềm tự sinh ra từ internet, con người không cần khảo sát hay chia nhỏ công việc",
          "Người quản lí dự án chỉ cần mua máy tính cấu hình mạnh là dự án tự động hoàn thành đúng hạn"
        ],
        "answer": 0,
        "explain": "Dữ liệu chính xác và sự tương tác kết nối giữa các thành viên con người là yếu tố quyết định thành bại của dự án."
      }
    ]
  },
  "6": {
    "num": 6,
    "title": "Cài đặt và gỡ bỏ phần mềm",
    "badge": "Quản trị Phần mềm",
    "topic": "Chuyên đề 2: Cài đặt, gỡ phần mềm & Bảo vệ dữ liệu",
    "chapter": 2,
    "summary": "Nắm vững nguyên tắc khi nào cần cài đặt, cài lại hoặc gỡ bỏ ứng dụng; thực hành cài và gỡ chuẩn mực trên hệ điều hành Windows (Control Panel / Settings) và thiết bị di động Android / iOS.",
    "objectives": [
      "Xác định đúng các tình huống cần cài đặt, cài lại hoặc gỡ bỏ phần mềm trên máy tính và điện thoại.",
      "Thực hiện thành thạo quy trình cài đặt phần mềm từ nguồn tin cậy trên Windows, Android và iOS.",
      "Thực hiện gỡ bỏ phần mềm sạch sẽ qua Programs and Features hoặc Apps & Features.",
      "Phân biệt giữa việc xóa biểu tượng lối tắt (Shortcut) ngoài màn hình với việc gỡ bỏ phần mềm thực sự."
    ],
    "sections": [
      {
        "heading": "1. Nguyên tắc cài đặt & Gỡ bỏ phần mềm an toàn",
        "items": [
          {
            "badge": "Khi nào cần thao tác?",
            "title": "Các trường hợp cần cài đặt, cài lại hoặc gỡ bỏ ứng dụng",
            "points": [
              "<strong>Cài đặt mới:</strong> Khi có nhu cầu sử dụng công cụ, tính năng mới phục vụ học tập/làm việc.",
              "<strong>Cài lại (Reinstall):</strong> Khi ứng dụng bị lỗi, mất tệp cấu viện thư viện (.dll), xung đột phần mềm hoặc sau khi cài lại hệ điều hành.",
              "<strong>Gỡ bỏ (Uninstall):</strong> Khi phần mềm không còn nhu cầu sử dụng, không tương thích, gây chậm máy hoặc chiếm dụng nhiều dung lượng ổ đĩa.",
              "<strong>Nguyên tắc vàng:</strong> Chỉ tải bộ cài từ website chính thức hoặc kho ứng dụng được kiểm duyệt (Microsoft Store, Google Play, Apple App Store); kiểm tra tính tương thích phiên bản 32-bit / 64-bit."
            ]
          },
          {
            "badge": "Lưu ý dữ liệu",
            "title": "Kiểm tra dữ liệu người dùng trước khi gỡ phần mềm",
            "points": [
              "<strong>Sao lưu dữ liệu cá nhân:</strong> Trước khi gỡ các ứng dụng quản lí tệp, chỉnh sửa video hay kế toán, cần xuất hoặc sao lưu các tệp dự án ra thư mục an toàn.",
              "<strong>Tránh xóa nhầm Shortcut:</strong> Việc kéo biểu tượng icon vào thùng rác Recycle Bin chỉ là xóa lối tắt ngoài màn hình, toàn bộ phần mềm gốc vẫn còn nguyên trong máy."
            ]
          }
        ]
      },
      {
        "heading": "2. Quy trình thao tác trên Windows & Android / iOS",
        "items": [
          {
            "badge": "Windows 10/11",
            "title": "Thao tác cài và gỡ phần mềm trên máy tính Windows",
            "points": [
              "<strong>Cài đặt:</strong> Tải file cài (<code>.exe</code> hoặc <code>.msi</code>), nhấp phải chọn <em>Run as administrator</em>, đọc kĩ các bước Wizard, chọn thư mục cài đặt (mặc định <code>Program Files</code>) và hoàn tất.",
              "<strong>Gỡ bỏ theo SGK:</strong> Mở <code>Control Panel > Programs > Programs and Features</code> (hoặc <code>Settings > Apps > Installed apps</code>), nhấp chọn phần mềm cần gỡ, bấm <code>Uninstall</code> và xác nhận.",
              "<strong>Dọn dẹp tàn dư:</strong> Một số phần mềm hỏi có muốn xóa các tệp lưu tạm (cache/user preferences) hay không, tích chọn để giải phóng triệt để dung lượng."
            ]
          },
          {
            "badge": "Android & iOS",
            "title": "Thao tác quản lí ứng dụng trên thiết bị di động",
            "points": [
              "<strong>Android:</strong> Mở Google Play tìm ứng dụng chính chủ và bấm 'Cài đặt'. Để gỡ: Chạm giữ biểu tượng ứng dụng trên màn hình -> chọn 'Gỡ cài đặt' (Uninstall) hoặc vào Cài đặt > Ứng dụng. Lưu ý: Ứng dụng hệ thống cốt lõi không thể gỡ bỏ.",
              "<strong>iOS:</strong> Tìm trên App Store. Để gỡ: Chạm giữ biểu tượng cho đến khi menu hiện ra, chọn 'Xóa ứng dụng' (Delete App). Lưu ý phân biệt giữa 'Xóa ứng dụng' (gỡ hoàn toàn) và 'Xóa khỏi Màn hình chính' (chỉ ẩn vào Thư viện ứng dụng)."
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Hành động nào sau đây chỉ làm mất lối tắt ngoài màn hình Desktop mà KHÔNG gỡ bỏ được phần mềm khỏi máy tính Windows?",
        "options": [
          "Chọn biểu tượng Icon phần mềm trên Desktop rồi nhấn phím Delete hoặc kéo vào thùng rác Recycle Bin",
          "Vào Control Panel > Programs and Features rồi chọn Uninstall",
          "Vào Windows Settings > Apps > Installed apps rồi chọn Uninstall",
          "Chạy tệp unins000.exe trong thư mục cài đặt của phần mềm"
        ],
        "answer": 0,
        "explain": "Xóa biểu tượng icon trên màn hình chỉ xóa tệp shortcut (.lnk), toàn bộ mã nguồn và tệp chương trình trong ổ đĩa C vẫn nguyên vẹn."
      },
      {
        "q": "Đường dẫn chuẩn trong Control Panel trên Windows 10/11 để xem danh sách và gỡ bỏ phần mềm là gì?",
        "options": [
          "Control Panel → Programs → Programs and Features",
          "Control Panel → Hardware and Sound → Device Manager",
          "Control Panel → Network and Internet → Network Connections",
          "Control Panel → Clock and Region → Date and Time"
        ],
        "answer": 0,
        "explain": "Programs and Features là công cụ quản trị chuẩn mực để liệt kê toàn bộ ứng dụng cài đặt và cung cấp nút Uninstall."
      },
      {
        "q": "Trên hệ điều hành iOS (iPhone/iPad), có sự khác biệt gì giữa tùy chọn 'Xóa ứng dụng' và 'Xóa khỏi Màn hình chính'?",
        "options": [
          "'Xóa ứng dụng' sẽ gỡ bỏ hoàn toàn ứng dụng và dữ liệu khỏi máy; 'Xóa khỏi Màn hình chính' chỉ ẩn biểu tượng vào App Library",
          "Hai tùy chọn này hoàn toàn giống nhau, chỉ khác tên gọi",
          "'Xóa ứng dụng' làm hỏng hệ điều hành; 'Xóa khỏi Màn hình chính' mới là gỡ sạch",
          "'Xóa ứng dụng' yêu cầu phải mang máy đến trung tâm bảo hành Apple"
        ],
        "answer": 0,
        "explain": "Xóa khỏi Màn hình chính chỉ gỡ shortcut trên màn hình chính, ứng dụng vẫn nằm trong App Library và chiếm bộ nhớ máy."
      }
    ]
  },
  "7": {
    "num": 7,
    "title": "Cài đặt hệ điều hành máy tính",
    "badge": "Cài đặt OS",
    "topic": "Chuyên đề 2: Cài đặt, gỡ phần mềm & Bảo vệ dữ liệu",
    "chapter": 2,
    "summary": "Hiểu vai trò điều phối của hệ điều hành, quy trình sao lưu toàn diện trước khi cài, kĩ thuật tạo USB Boot bằng công cụ Rufus với tệp ảnh ISO chuẩn và 5 bước cài đặt hoàn chỉnh hệ điều hành Windows.",
    "objectives": [
      "Giải thích được sự cần thiết và những rủi ro mất dữ liệu khi cài đặt lại hệ điều hành.",
      "Chuẩn bị USB dung lượng phù hợp và tạo USB Boot bằng phần mềm Rufus từ file ISO chuẩn.",
      "Thiết lập máy tính khởi động từ USB thông qua Boot Menu hoặc BIOS/UEFI Setup.",
      "Thực hiện chọn phân vùng ổ đĩa chính xác và hoàn tất các bước thiết lập hệ điều hành sau cài đặt."
    ],
    "sections": [
      {
        "heading": "1. Chuẩn bị cài đặt & Tạo USB Boot",
        "items": [
          {
            "badge": "Công tác chuẩn bị",
            "title": "Những lưu ý an toàn tối quan trọng trước khi cài OS",
            "points": [
              "<strong>Sao lưu dữ liệu tuyệt đối:</strong> Quá trình cài lại hệ điều hành sẽ định dạng (Format) lại phân vùng hệ thống (thường là ổ C). Cần chuyển toàn bộ tệp quan trọng trong thư mục Desktop, Documents, Downloads sang ổ đĩa phụ (D, E) hoặc USB/đám mây.",
              "<strong>Tệp ảnh ISO chuẩn:</strong> Tải tệp ISO hệ điều hành từ trang chủ chính thức của Microsoft để tránh bị chèn mã độc/trojan gián điệp.",
              "<strong>Chuẩn bị phần cứng:</strong> Một chiếc USB dung lượng tối thiểu 8GB (lưu ý: toàn bộ dữ liệu trên USB sẽ bị xóa sạch khi tạo bộ cài)."
            ]
          },
          {
            "badge": "Công cụ Rufus",
            "title": "Kĩ thuật tạo USB cài đặt hệ điều hành với Rufus",
            "points": [
              "<strong>Chọn thiết bị (Device):</strong> Chọn đúng ổ đĩa USB cần tạo bộ cài.",
              "<strong>Chọn nguồn (Boot selection):</strong> Nhấn nút <code>SELECT</code> để trỏ đến tệp ảnh <code>.iso</code> đã tải.",
              "<strong>Kiểu phân vùng (Partition scheme):</strong> Chọn <code>GPT</code> nếu máy tính đời mới chạy chuẩn khởi động <code>UEFI</code>; chọn <code>MBR</code> nếu máy tính đời cũ chạy chuẩn <code>Legacy BIOS</code>.",
              "<strong>Bắt đầu ghi (START):</strong> Xác nhận cảnh báo xóa dữ liệu USB và đợi chương trình ghi hoàn tất."
            ]
          }
        ]
      },
      {
        "heading": "2. Quy trình 5 bước cài đặt Windows tổng quát",
        "items": [
          {
            "badge": "Khởi động Boot Menu",
            "title": "Khởi động máy tính từ USB cài đặt",
            "points": [
              "<strong>Phím tắt Boot Menu:</strong> Khởi động lại máy và nhấn liên tục phím tắt Boot Menu (phổ biến: <code>F12</code>, <code>F11</code>, <code>F9</code>, <code>Esc</code> hoặc <code>F2/Del</code> vào BIOS) tùy theo hãng sản xuất bo mạch chủ.",
              "<strong>Chọn thiết bị khởi động:</strong> Chọn tên dòng USB trong danh sách Boot để máy tính tải trình cài đặt Windows Setup."
            ]
          },
          {
            "badge": "Các bước cài đặt",
            "title": "Trình tự thao tác trong giao diện Windows Setup",
            "points": [
              "<strong>Bước 1 - Ngôn ngữ & Bàn phím:</strong> Chọn ngôn ngữ, định dạng thời gian và kiểu bàn phím (US), bấm <em>Install now</em>.",
              "<strong>Bước 2 - Chọn Custom Install:</strong> Chọn tùy chọn <code>Custom: Install Windows only (advanced)</code> để cài đặt sạch.",
              "<strong>Bước 3 - Chọn phân vùng đích:</strong> Nhận diện đúng phân vùng hệ thống cũ (Drive 0 Partition C:), bấm <em>Format</em> hoặc xóa phân vùng cũ, chọn vùng trống và bấm <em>Next</em>.",
              "<strong>Bước 4 - Tiến trình sao chép tệp:</strong> Trình cài đặt tự động giải nén và sao chép tệp (tuyệt đối không tắt nguồn máy tính, máy sẽ tự khởi động lại).",
              "<strong>Bước 5 - Thiết lập hậu cài đặt:</strong> Đặt tên máy tính, tài khoản người dùng, kết nối Wi-Fi, cập nhật Windows Update và cài đặt trình điều khiển (Driver) còn thiếu."
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Trước khi tiến hành cài đặt lại hệ điều hành Windows cho máy tính, thao tác nào sau đây là BẮT BUỘC để tránh mất mát dữ liệu?",
        "options": [
          "Sao lưu toàn bộ dữ liệu quan trọng ở ổ đĩa hệ thống (ổ C, Desktop, Documents) sang ổ đĩa khác hoặc thiết bị lưu trữ ngoài",
          "Xóa toàn bộ các tệp Word và Excel trên máy tính để máy nhẹ hơn",
          "Tắt kết nối Internet và ngắt toàn bộ bàn phím, chuột",
          "Cắm sạc máy tính liên tục trong 24 giờ trước khi cài"
        ],
        "answer": 0,
        "explain": "Cài lại OS sẽ format phân vùng hệ thống (ổ C), do đó sao lưu dữ liệu cá nhân là bước an toàn bắt buộc."
      },
      {
        "q": "Trong phần mềm Rufus, khi tạo USB cài đặt cho máy tính đời mới sử dụng chuẩn khởi động UEFI, ta cần chọn mục Partition scheme là gì?",
        "options": [
          "GPT",
          "MBR",
          "FAT32",
          "NTFS"
        ],
        "answer": 0,
        "explain": "Chuẩn khởi động UEFI hiện đại đi kèm với sơ đồ phân vùng ổ đĩa GPT; trong khi MBR đi kèm với Legacy BIOS cũ."
      },
      {
        "q": "Trong quá trình cài đặt Windows, tại bước chọn loại cài đặt, tùy chọn nào cho phép người dùng format sạch phân vùng cũ để cài hệ điều hành mới?",
        "options": [
          "Custom: Install Windows only (advanced)",
          "Upgrade: Install Windows and keep files, settings, and applications",
          "Repair your computer",
          "Cancel installation"
        ],
        "answer": 0,
        "explain": "Tùy chọn Custom (Advanced) cho phép quản trị viên toàn quyền quản lý phân vùng, xóa, tạo mới và format để cài sạch hoàn toàn."
      }
    ]
  },
  "8": {
    "num": 8,
    "title": "Bảo đảm an toàn dữ liệu",
    "badge": "An toàn Dữ liệu",
    "topic": "Chuyên đề 2: Cài đặt, gỡ phần mềm & Bảo vệ dữ liệu",
    "chapter": 2,
    "summary": "Nhận diện các mối nguy hiểm đe dọa dữ liệu (hỏng ổ cứng, xóa nhầm, mã độc tống tiền Ransomware), hậu quả nghiêm trọng và các giải pháp phòng vệ đa tầng: quy tắc sao lưu 3-2-1, mã hóa, mật khẩu mạnh và phần mềm bảo mật.",
    "objectives": [
      "Liệt kê các nguyên nhân gây mất mát, hư hỏng dữ liệu và phân tích hậu quả đối với cá nhân/tổ chức.",
      "Hiểu rõ cơ chế lây nhiễm và tác hại của mã độc mã hóa tống tiền (Ransomware).",
      "Trình bày và áp dụng các nguyên tắc phòng vệ dữ liệu đa lớp, đặc biệt là chiến lược sao lưu định kì.",
      "Phân biệt sự khác nhau căn bản giữa tính năng Đồng bộ đám mây (Sync) và Sao lưu dữ liệu (Backup)."
    ],
    "sections": [
      {
        "heading": "1. Mối nguy cơ & Hậu quả mất an toàn dữ liệu",
        "items": [
          {
            "badge": "Mối đe dọa",
            "title": "Các nguyên nhân chính dẫn đến mất mát và hỏng dữ liệu",
            "points": [
              "<strong>Sự cố phần cứng:</strong> Ổ cứng bị sốc cơ học, bad sector, cháy chip nhớ flash, máy tính bị rơi vỡ hoặc ngập nước.",
              "<strong>Lỗi con người:</strong> Thao tác xóa nhầm tệp (Shift + Delete), ghi đè nhầm phiên bản tệp cũ lên tệp mới, format nhầm phân vùng.",
              "<strong>Mã độc & Tấn công mạng:</strong> Virus xóa tệp, phần mềm gián điệp (Spyware) đánh cắp thông tin, và đặc biệt là <em>Ransomware (mã độc tống tiền)</em> mã hóa toàn bộ tệp tài liệu để tống tiền.",
              "<strong>Sự cố môi trường & Lỗi phần mềm:</strong> Mất điện đột ngột khi đang lưu tệp, hệ điều hành bị sập màn hình xanh (BSOD)."
            ]
          },
          {
            "badge": "Hậu quả thực tế",
            "title": "Thiệt hại nghiêm trọng do mất an toàn dữ liệu gây ra",
            "points": [
              "<strong>Đối với cá nhân/học sinh:</strong> Mất bài tập dự án, tài liệu ôn thi, ảnh kỉ niệm không thể lấy lại; lộ lọt thông tin cá nhân, tài khoản mạng xã hội.",
              "<strong>Đối với doanh nghiệp/tổ chức:</strong> Gián đoạn hoạt động sản xuất kinh doanh, tốn chi phí khôi phục khổng lồ, mất uy tín thương hiệu và chịu trách nhiệm pháp lý."
            ]
          }
        ]
      },
      {
        "heading": "2. Chiến lược bảo vệ dữ liệu đa tầng",
        "items": [
          {
            "badge": "Quy tắc 3-2-1",
            "title": "Chiến lược sao lưu dữ liệu kinh điển 3-2-1",
            "points": [
              "<strong>3 bản sao:</strong> Luôn duy trì ít nhất 3 bản sao dữ liệu (1 bản gốc đang làm việc và 2 bản sao lưu dự phòng).",
              "<strong>2 loại phương tiện:</strong> Lưu trữ bản sao trên ít nhất 2 loại phương tiện vật lý khác nhau (ví dụ: ổ cứng máy tính + ổ cứng di động cắm ngoài).",
              "<strong>1 bản sao ngoại vi:</strong> Đặt ít nhất 1 bản sao lưu ở một địa điểm vật lý khác biệt hoàn toàn hoặc trên đám mây (Offsite / Cloud Storage) để phòng ngừa hỏa hoạn, mất cắp thiết bị."
            ]
          },
          {
            "badge": "Sync vs Backup",
            "title": "Phân biệt đồng bộ đám mây (Sync) và sao lưu độc lập (Backup)",
            "points": [
              "<strong>Đồng bộ (Sync):</strong> Tự động cập nhật 2 chiều tức thì giữa máy tính và đám mây. <em>Cảnh báo nguy hiểm:</em> Nếu tệp trên máy tính bị virus xóa hoặc mã hóa, thao tác đó sẽ bị đồng bộ xóa luôn cả tệp trên đám mây!",
              "<strong>Sao lưu (Backup):</strong> Tạo bản sao độc lập, có lưu trữ lịch sử các phiên bản thời gian (Versioning) tách biệt, an toàn tuyệt đối trước sự cố tức thời.",
              "<strong>Các công cụ trong SGK:</strong> File History (Windows), Time Machine (macOS), Rsync (Linux), Veeam Agent, Macrium Reflect và Google Drive."
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Loại mã độc nguy hiểm chuyên xâm nhập vào máy tính, mã hóa toàn bộ tài liệu và đòi tiền chuộc để giải mã được gọi là gì?",
        "options": [
          "Ransomware",
          "Adware",
          "Cookie",
          "Spam email"
        ],
        "answer": 0,
        "explain": "Ransomware là mã độc tống tiền nguy hiểm nhất hiện nay, mã hóa bất đối xứng toàn bộ tệp của nạn nhân."
      },
      {
        "q": "Theo chiến lược sao lưu chuẩn mực 'Quy tắc 3-2-1', con số '1' đại diện cho yêu cầu nào sau đây?",
        "options": [
          "Ít nhất 1 bản sao lưu phải được đặt ở vị trí ngoại vi (khác địa điểm vật lý hoặc trên đám mây)",
          "Chỉ được phép sao lưu đúng 1 tệp duy nhất mỗi ngày",
          "Mỗi gia đình chỉ được sử dụng tối đa 1 chiếc máy tính",
          "Dữ liệu sao lưu chỉ được giữ trong vòng đúng 1 tuần rồi phải xóa"
        ],
        "answer": 0,
        "explain": "Quy tắc 3-2-1: 3 bản sao, trên 2 loại phương tiện khác nhau, trong đó có ít nhất 1 bản lưu ở nơi khác (Offsite/Cloud)."
      },
      {
        "q": "Tại sao tính năng đồng bộ đám mây (Cloud Sync) thông thường KHÔNG THỂ thay thế hoàn toàn cho một bản sao lưu (Backup) chuyên nghiệp?",
        "options": [
          "Vì nếu tệp trên máy tính vô tình bị xóa nhầm hoặc bị virus mã hóa, hành động đó có thể tự động đồng bộ làm hỏng luôn bản trên đám mây",
          "Vì đồng bộ đám mây chỉ dùng được vào ban đêm",
          "Vì dịch vụ đám mây không cho phép chứa các tệp văn bản",
          "Vì tốc độ đồng bộ đám mây luôn chậm hơn USB một triệu lần"
        ],
        "answer": 0,
        "explain": "Đồng bộ hai chiều có thể lập tức đẩy tệp bị hỏng/xóa nhầm lên mây, làm mất luôn dữ liệu dự phòng nếu không có lịch sử phiên bản độc lập."
      }
    ]
  },
  "9": {
    "num": 9,
    "title": "Thực hành bảo vệ dữ liệu",
    "badge": "Thực hành Bảo mật",
    "topic": "Chuyên đề 2: Cài đặt, gỡ phần mềm & Bảo vệ dữ liệu",
    "chapter": 2,
    "summary": "Thực hành thiết lập sao lưu và khôi phục tệp theo thời gian bằng Windows File History, cấu hình đồng bộ bảo vệ thư mục với Google Drive, nén và mã hóa mật khẩu AES bằng 7-Zip, quét sạch mã độc với Windows Defender.",
    "objectives": [
      "Cấu hình tính năng File History trên Windows để sao lưu định kì ra ổ đĩa ngoài và khôi phục tệp phiên bản cũ.",
      "Thiết lập đồng bộ sao lưu thư mục dự án lên Google Drive và nhận diện đúng các trạng thái đồng bộ.",
      "Thực hiện nén và đặt mật khẩu mã hóa mạnh mẽ cho tệp/thư mục bằng tiện ích 7-Zip.",
      "Cập nhật cơ sở dữ liệu và quét virus định kì bảo vệ hệ thống với Microsoft Defender."
    ],
    "sections": [
      {
        "heading": "1. Sao lưu với File History & Google Drive",
        "items": [
          {
            "badge": "File History Windows",
            "title": "Quy trình sao lưu và khôi phục với File History",
            "points": [
              "<strong>Bật File History:</strong> Kết nối ổ cứng ngoài/USB, vào <code>Settings > Update & Security > Backup</code> (hoặc Control Panel > File History), chọn ổ đĩa lưu trữ (Select Drive) và gạt nút <code>On</code>.",
              "<strong>Tần suất sao lưu:</strong> Mặc định phần mềm tự động quét và lưu bản sao mỗi giờ một lần đối với các thư mục được chọn (Desktop, Documents, Pictures).",
              "<strong>Khôi phục dữ liệu (Restore):</strong> Nhấp chọn <em>Restore personal files</em>, duyệt thanh dòng thời gian đến ngày giờ cần lấy lại, chọn tệp/thư mục và bấm nút tròn màu xanh ở giữa để khôi phục nguyên trạng."
            ]
          },
          {
            "badge": "Google Drive Sync",
            "title": "Đồng bộ thư mục dự án lên đám mây Google Drive",
            "points": [
              "<strong>Thiết lập Backup:</strong> Cài ứng dụng Google Drive trên máy tính, mở cài đặt chọn <em>Sync or Backup this folder</em>, trỏ tới thư mục bài học/dự án cần bảo vệ.",
              "<strong>Biểu tượng trạng thái:</strong> Dấu tích xanh (Đã đồng bộ xong an toàn); Hai mũi tên xoay tròn (Đang trong tiến trình đồng bộ tải lên); Dấu chấm than đỏ (Bị lỗi kết nối hoặc xung đột tệp cần kiểm tra)."
            ]
          }
        ]
      },
      {
        "heading": "2. Nén mã hóa 7-Zip & Quét mã độc",
        "items": [
          {
            "badge": "Mã hóa 7-Zip AES",
            "title": "Nén và bảo mật tệp với thuật toán mã hóa 7-Zip",
            "points": [
              "<strong>Thao tác nén:</strong> Nhấp phải vào thư mục tài liệu -> chọn <code>7-Zip > Add to archive...</code>.",
              "<strong>Thiết lập mã hóa (Encryption):</strong> Đặt tên tệp nén (đuôi <code>.7z</code> hoặc <code>.zip</code>), tại mục Encryption nhập mật khẩu mạnh, chọn phương thức mã hóa chuẩn quân sự <code>AES-256</code>.",
              "<strong>Ẩn tên tệp:</strong> Nếu chọn định dạng <code>.7z</code>, có thể tích chọn <em>Encrypt file names</em> để người khác thậm chí không thể nhìn thấy danh sách tên tệp bên trong khi chưa gõ đúng mật khẩu."
            ]
          },
          {
            "badge": "Quét diệt virus",
            "title": "Quét mã độc toàn diện với Windows Security",
            "points": [
              "<strong>Cập nhật mẫu nhận diện:</strong> Mở <code>Windows Security > Virus & threat protection</code>, bấm <em>Check for updates</em> để cập nhật chữ ký mã độc mới nhất.",
              "<strong>Chế độ quét:</strong> Chọn <em>Quick scan</em> (quét nhanh bộ nhớ và thư mục hệ thống); hoặc nhấp phải vào USB/thư mục chọn <em>Scan with Microsoft Defender</em> để kiểm tra trước khi sao chép tệp."
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Trên ứng dụng Google Drive dành cho máy tính, biểu tượng trạng thái 'Vòng tròn hai mũi tên xoay' gắn trên tệp/thư mục biểu thị điều gì?",
        "options": [
          "Tệp hoặc thư mục đang trong quá trình tải lên hoặc đồng bộ dữ liệu",
          "Tệp đã được đồng bộ hoàn tất an toàn 100%",
          "Tệp đã bị xóa vĩnh viễn khỏi đám mây",
          "Tệp bị nhiễm virus nguy hiểm cần cách ly ngay"
        ],
        "answer": 0,
        "explain": "Hai mũi tên xoay tròn là biểu tượng quy ước tệp đang được trao đổi truyền tải giữa máy tính và máy chủ đám mây."
      },
      {
        "q": "Khi nén dữ liệu bằng phần mềm 7-Zip, tùy chọn nào cho phép ẩn hoàn toàn danh sách tên các tệp bên trong kho lưu trữ khi chưa nhập đúng mật khẩu?",
        "options": [
          "Encrypt file names (áp dụng với định dạng .7z)",
          "Compress shared files",
          "Delete files after archiving",
          "Create SFX archive"
        ],
        "answer": 0,
        "explain": "Tính năng Encrypt file names trên định dạng .7z mã hóa cả tiêu đề thư mục, ngăn chặn xem trước cấu trúc tệp khi chưa có pass."
      },
      {
        "q": "Để khôi phục lại một phiên bản cũ của tài liệu Word bị sửa nhầm từ 3 ngày trước bằng File History, thao tác nào là ĐÚNG?",
        "options": [
          "Mở giao diện Restore personal files của File History, duyệt lùi dòng thời gian về 3 ngày trước, chọn tệp và bấm nút Restore",
          "Vào thùng rác Recycle Bin tìm kiếm",
          "Gửi thư khiếu nại tới nhà sản xuất phần mềm Word",
          "Cài lại hệ điều hành Windows từ đầu"
        ],
        "answer": 0,
        "explain": "File History lưu trữ lịch sử theo thời gian, cho phép duyệt lại từng mốc giờ/ngày trong quá khứ để lấy lại tệp nguyên bản."
      }
    ]
  },
  "10": {
    "num": 10,
    "title": "Tính xác suất và chọn số liệu ngẫu nhiên",
    "badge": "Xác suất & Ngẫu nhiên",
    "topic": "Chuyên đề 3: Phân tích dữ liệu với bảng tính",
    "chapter": 3,
    "summary": "Nắm vững công thức xác suất cổ điển P(A) = m(A)/n(A); ứng dụng các hàm đếm tổ hợp PERMUT, COMBIN, COMBINA, phân phối nhị thức BINOM.DIST và tạo mẫu ngẫu nhiên với RAND, RANDBETWEEN trong Excel.",
    "objectives": [
      "Áp dụng công thức xác suất cổ điển để phân tích biến cố và biểu diễn bài toán trong Excel.",
      "Sử dụng thành thạo các hàm toán học: PERMUT, COMBIN, COMBINA, BINOM.DIST.",
      "Tạo dữ liệu mẫu ngẫu nhiên bằng hàm RAND() và RANDBETWEEN().",
      "Kĩ thuật cố định giá trị ngẫu nhiên bằng Paste Special > Values và trích xuất mẫu đại diện bằng VLOOKUP."
    ],
    "sections": [
      {
        "heading": "1. Xác suất cổ điển & Các hàm đếm tổ hợp Excel",
        "items": [
          {
            "badge": "Xác suất cổ điển",
            "title": "Công thức tính xác suất cổ điển P(A) = m(A) / n(A)",
            "points": [
              "<strong>Định nghĩa:</strong> Trong phép thử có số kết quả có thể xảy ra là đồng khả năng, xác suất của biến cố A được tính bằng: <code>P(A) = m(A) / n(A)</code>, trong đó <code>n(A)</code> là tổng số kết quả có thể xảy ra và <code>m(A)</code> là số kết quả thuận lợi cho A.",
              "<strong>Quy trình Excel:</strong> Xác định rõ bài toán -> Sử dụng hàm tổ hợp để tính số cách thuận lợi m và tổng số cách n ở hai ô riêng -> Lấy ô m chia cho ô n để ra xác suất."
            ]
          },
          {
            "badge": "Hàm tổ hợp Excel",
            "title": "Các hàm đếm tổ hợp, chỉnh hợp và phân phối nhị thức",
            "points": [
              "<strong>COMBIN(n, k):</strong> Tính tổ hợp chập k của n phần tử (chọn không xét thứ tự, không lặp lại).",
              "<strong>PERMUT(n, k):</strong> Tính chỉnh hợp chập k của n phần tử (chọn có xét thứ tự vị trí, không lặp).",
              "<strong>COMBINA(n, k):</strong> Tính tổ hợp lặp (các phần tử có thể được chọn lặp lại nhiều lần).",
              "<strong>BINOM.DIST(number_s, trials, probability_s, cumulative):</strong> Tính xác suất phân phối nhị thức; trong đó <em>cumulative = FALSE</em> tính xác suất đúng k lần thành công, <em>TRUE</em> tính xác suất tích lũy từ 0 đến k lần."
            ]
          }
        ]
      },
      {
        "heading": "2. Tạo số ngẫu nhiên & Chọn mẫu dữ liệu",
        "items": [
          {
            "badge": "Hàm ngẫu nhiên",
            "title": "Tạo số liệu ngẫu nhiên với RAND và RANDBETWEEN",
            "points": [
              "<strong>Hàm RAND():</strong> Sinh ra một số thực ngẫu nhiên đồng đều trong nửa khoảng <code>[0; 1)</code>.",
              "<strong>Hàm RANDBETWEEN(bottom, top):</strong> Sinh một số nguyên ngẫu nhiên nằm trong đoạn từ <code>bottom</code> đến <code>top</code> (bao gồm cả hai đầu mút).",
              "<strong>Đặc tính biến động:</strong> Mỗi khi người dùng gõ công thức mới hoặc nhấn phím <code>F9</code>, các hàm ngẫu nhiên sẽ tự động tính toán lại và đổi sang số khác."
            ]
          },
          {
            "badge": "Cố định giá trị",
            "title": "Cố định dữ liệu ngẫu nhiên và trích xuất mẫu ngẫu nhiên",
            "points": [
              "<strong>Cố định giá trị:</strong> Quét chọn vùng số ngẫu nhiên vừa tạo, nhấn <code>Ctrl + C</code>, nhấp phải chọn <code>Paste Special > Values</code> (hoặc bấm biểu tượng số 123) để biến công thức thành giá trị số tĩnh.",
              "<strong>Ứng dụng chọn mẫu:</strong> Dùng RANDBETWEEN(1, N) kết hợp hàm <code>VLOOKUP</code> hoặc <code>INDEX</code> để bốc thăm ngẫu nhiên học sinh trả lời câu hỏi hoặc chọn sản phẩm kiểm định chất lượng."
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Công thức Excel nào sau đây tính số cách chọn ra 3 học sinh từ một nhóm 10 học sinh đi trực nhật (không phân biệt thứ tự)?",
        "options": [
          "=COMBIN(10, 3)",
          "=PERMUT(10, 3)",
          "=RANDBETWEEN(3, 10)",
          "=BINOM.DIST(3, 10, 0.5, FALSE)"
        ],
        "answer": 0,
        "explain": "Chọn 3 người từ 10 người không xét thứ tự là bài toán tổ hợp chập 3 của 10, sử dụng hàm COMBIN(10, 3)."
      },
      {
        "q": "Để sinh ra một số nguyên ngẫu nhiên đại diện cho điểm số bài thi từ 1 đến 10 trong Excel, ta sử dụng công thức nào?",
        "options": [
          "=RANDBETWEEN(1, 10)",
          "=RAND(1, 10)",
          "=COMBIN(10, 1)",
          "=PERMUT(10, 1)"
        ],
        "answer": 0,
        "explain": "Hàm RANDBETWEEN(bottom, top) sinh số nguyên ngẫu nhiên giữa hai cận, ở đây là RANDBETWEEN(1, 10)."
      },
      {
        "q": "Sau khi tạo một cột số ngẫu nhiên bằng hàm RANDBETWEEN, làm thế nào để các số này KHÔNG bị thay đổi mỗi khi bảng tính cập nhật?",
        "options": [
          "Sao chép (Copy) cột đó và dán lại bằng Paste Special > Values",
          "Nhấn phím F9 liên tục 10 lần",
          "Đổi màu phông chữ của cột số sang màu đỏ",
          "Khóa màn hình máy tính lại"
        ],
        "answer": 0,
        "explain": "Paste Special > Values biến các công thức biến động thành dữ liệu số tĩnh cố định vĩnh viễn."
      }
    ]
  },
  "11": {
    "num": 11,
    "title": "Xác định các đặc trưng đo xu thế trung tâm và độ phân tán dữ liệu",
    "badge": "Thống kê Mô tả",
    "topic": "Chuyên đề 3: Phân tích dữ liệu với bảng tính",
    "chapter": 3,
    "summary": "Làm chủ các chỉ số thống kê mô tả xu thế trung tâm (Average, Median, Mode, Quartile) và các thước đo độ phân tán (Range, IQR, Variance, Standard Deviation, CV) để nhận xét chính xác bản chất dữ liệu trong Excel.",
    "objectives": [
      "Phân biệt và tính toán đúng các số đo xu thế trung tâm: AVERAGE, MEDIAN, MODE.SNGL/MODE.MULT, QUARTILE.INC.",
      "Lựa chọn chỉ số đại diện phù hợp khi tập dữ liệu có giá trị ngoại lệ bất thường (Outlier).",
      "Tính toán các số đo độ phân tán: Khoảng biến thiên (Max - Min), Khoảng tứ phân vị (Q3 - Q1), VAR.S/VAR.P, STDEV.S/STDEV.P.",
      "Giải thích ý nghĩa của hệ số biến thiên (CV) khi so sánh mức độ đồng đều của các tập dữ liệu khác thang đo."
    ],
    "sections": [
      {
        "heading": "1. Các đặc trưng đo xu thế trung tâm",
        "items": [
          {
            "badge": "Hàm trung tâm",
            "title": "Bốn chỉ số đo xu thế trung tâm trong Excel",
            "points": [
              "<strong>Trung bình cộng (Mean - <code>AVERAGE</code>):</strong> Tổng các giá trị chia cho số lượng quan sát. Phản ánh mức độ trung bình nhưng rất nhạy cảm và dễ bị méo mó bởi các giá trị ngoại lệ cực đoan (Outlier).",
              "<strong>Trung vị (Median - <code>MEDIAN</code>):</strong> Giá trị nằm chính giữa dãy dữ liệu sau khi đã sắp xếp thứ tự. Rất ổn định, không bị ảnh hưởng bởi các giá trị quá cao hoặc quá thấp bất thường.",
              "<strong>Mốt (Mode - <code>MODE.SNGL</code> / <code>MODE.MULT</code>):</strong> Giá trị có tần số xuất hiện nhiều nhất trong mẫu dữ liệu.",
              "<strong>Tứ phân vị (Quartiles - <code>QUARTILE.INC</code>):</strong> Chia dữ liệu thành 4 phần bằng nhau. Q1 (mốc 25%), Q2 (mốc 50% = Trung vị), Q3 (mốc 75%). Cú pháp: <code>QUARTILE.INC(array, 1)</code> cho Q1."
            ]
          },
          {
            "badge": "Chọn chỉ số",
            "title": "Nguyên tắc chọn chỉ số đại diện cho tập dữ liệu",
            "points": [
              "<strong>Phân bố đối xứng hình chuông:</strong> Sử dụng Trung bình cộng (Mean) kết hợp Độ lệch chuẩn.",
              "<strong>Phân bố lệch hoặc có giá trị ngoại lệ:</strong> Ưu tiên sử dụng Trung vị (Median) và Khoảng tứ phân vị (IQR) để phản ánh trung thực bản chất số đông."
            ]
          }
        ]
      },
      {
        "heading": "2. Các đặc trưng đo độ phân tán dữ liệu",
        "items": [
          {
            "badge": "Thước đo biến thiên",
            "title": "Các chỉ số đo độ phân tán trong bảng tính",
            "points": [
              "<strong>Khoảng biến thiên (Range):</strong> <code>=MAX(vùng) - MIN(vùng)</code>, đo độ trải rộng bao quát giữa giá trị lớn nhất và nhỏ nhất.",
              "<strong>Khoảng tứ phân vị (IQR):</strong> <code>=Q3 - Q1</code>, đo độ trải rộng của 50% số quan sát ở phần giữa dữ liệu, loại bỏ ảnh hưởng của ngoại lệ.",
              "<strong>Phương sai (Variance):</strong> Đo độ lệch bình phương trung bình quanh số trung bình. Hàm <code>VAR.S</code> cho dữ liệu mẫu, <code>VAR.P</code> cho tổng thể.",
              "<strong>Độ lệch chuẩn (Standard Deviation):</strong> Căn bậc hai của phương sai, có cùng đơn vị đo với dữ liệu gốc. Hàm <code>STDEV.S</code> cho mẫu, <code>STDEV.P</code> cho tổng thể."
            ]
          },
          {
            "badge": "Hệ số biến thiên CV",
            "title": "Hệ số biến thiên (Coefficient of Variation - CV)",
            "points": [
              "<strong>Công thức:</strong> <code>CV = (Độ lệch chuẩn / Trung bình cộng) × 100%</code>.",
              "<strong>Ý nghĩa:</strong> Đo lường độ phân tán tương đối (không phụ thuộc vào đơn vị đo). CV càng nhỏ thì tập dữ liệu càng có độ đồng đều và tính ổn định cao."
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Khi một tập dữ liệu khảo sát thu nhập có vài giá trị quá lớn bất thường (ngoại lệ), chỉ số đo xu thế trung tâm nào phản ánh trung thực nhất?",
        "options": [
          "Trung vị (MEDIAN)",
          "Trung bình cộng (AVERAGE)",
          "Giá trị lớn nhất (MAX)",
          "Khoảng biến thiên (RANGE)"
        ],
        "answer": 0,
        "explain": "Trung vị không bị ảnh hưởng bởi các giá trị ngoại lệ cực đoan nên phản ánh chính xác xu thế trung tâm của tập dữ liệu lệch."
      },
      {
        "q": "Công thức tính Khoảng tứ phân vị (Interquartile Range - IQR) trong thống kê là gì?",
        "options": [
          "IQR = Q3 - Q1",
          "IQR = Max - Min",
          "IQR = Q2 - Q1",
          "IQR = Q3 / Q1"
        ],
        "answer": 0,
        "explain": "Khoảng tứ phân vị IQR bằng tứ phân vị thứ ba (Q3) trừ đi tứ phân vị thứ nhất (Q1), đo độ rộng của 50% dữ liệu ở giữa."
      },
      {
        "q": "Để so sánh độ phân tán và mức độ đồng đều giữa điểm thi môn Toán (thang điểm 10) và điểm thi tiếng Anh TOEIC (thang điểm 990), ta nên dùng chỉ số nào?",
        "options": [
          "Hệ số biến thiên CV (CV = STDEV / AVERAGE × 100%)",
          "Khoảng biến thiên Range",
          "Độ lệch chuẩn STDEV đơn thuần",
          "Trung bình cộng AVERAGE"
        ],
        "answer": 0,
        "explain": "Hệ số biến thiên CV triệt tiêu đơn vị đo lường, cho phép so sánh mức độ phân tán tương đối giữa hai thang đo khác biệt hoàn toàn."
      }
    ]
  },
  "12": {
    "num": 12,
    "title": "Mô tả số liệu bằng PivotTable",
    "badge": "PivotTable Nâng cao",
    "topic": "Chuyên đề 3: Phân tích dữ liệu với bảng tính",
    "chapter": 3,
    "summary": "Khai thác công cụ tổng hợp đa chiều PivotTable trong Excel: phân bổ các trường vào 4 vùng (Rows, Columns, Values, Filters), tính tần số/tần suất, đổi phép tổng hợp trong Value Field Settings và kĩ thuật ghép nhóm (Grouping) biến định lượng.",
    "objectives": [
      "Hiểu rõ vai trò và điều kiện dữ liệu đầu vào để tạo bảng tổng hợp PivotTable.",
      "Khai thác thành thạo 4 phân vùng cốt lõi: Rows, Columns, Values và Filters.",
      "Tùy biến phép tính trong Value Field Settings (Count, Sum, Average) và hiển thị tần suất % of Grand Total.",
      "Thực hiện gom nhóm (Group) dữ liệu định lượng thành các khoảng đều nhau theo công thức (Max - Min)/k."
    ],
    "sections": [
      {
        "heading": "1. Khởi tạo & Cấu trúc 4 phân vùng PivotTable",
        "items": [
          {
            "badge": "Cấu trúc 4 vùng",
            "title": "Vai trò của 4 phân vùng trong bảng PivotTable Fields",
            "points": [
              "<strong>Rows (Nhóm hàng):</strong> Kéo các trường dữ liệu phân loại vào đây để tạo các dòng phân nhóm (ví dụ: Giới tính, Tỉnh/Thành phố).",
              "<strong>Columns (Nhóm cột):</strong> Tạo các cột phân loại ngang để lập bảng tổng hợp chéo 2 chiều (ví dụ: Ban thi, Khối ngành).",
              "<strong>Values (Giá trị tổng hợp):</strong> Chứa dữ liệu cần tính toán. Mặc định: trường dạng chữ phần mềm sẽ đếm (Count), trường dạng số phần mềm sẽ cộng tổng (Sum).",
              "<strong>Filters (Bộ lọc toàn bảng):</strong> Đặt các trường cần lọc phạm vi hiển thị cho toàn bộ bảng PivotTable."
            ]
          },
          {
            "badge": "Điều kiện dữ liệu",
            "title": "Quy tắc chuẩn hóa bảng dữ liệu nguồn",
            "points": [
              "<strong>Hàng tiêu đề duy nhất:</strong> Bảng nguồn bắt buộc phải có dòng tiêu đề cột rõ ràng, không được trộn ô (Merge Cells) ở dòng tiêu đề.",
              "<strong>Không ngắt quãng:</strong> Vùng dữ liệu không được chứa hàng hoặc cột trống hoàn toàn làm gián đoạn phạm vi nhận diện bảng."
            ]
          }
        ]
      },
      {
        "heading": "2. Tần số, Tần suất & Kĩ thuật ghép nhóm dữ liệu",
        "items": [
          {
            "badge": "Tần số & Tần suất",
            "title": "Hiển thị đồng thời Tần số và Tần suất (% of Grand Total)",
            "points": [
              "<strong>Tần số (Frequency):</strong> Kéo trường vào vùng Values và chọn hàm <code>Count</code> trong Value Field Settings để đếm số quan sát.",
              "<strong>Tần suất (Relative Frequency %):</strong> Kéo tiếp chính trường đó vào vùng Values lần thứ hai, mở <code>Value Field Settings > tab Show Values As</code>, chọn <code>% of Grand Total</code> để hiển thị tỉ lệ phần trăm.",
              "<strong>Đổi tên nhãn cột:</strong> Đổi tên cột trong ô Custom Name thành 'Số lượng' và 'Tỉ lệ %' cho bảng biểu chuyên nghiệp."
            ]
          },
          {
            "badge": "Ghép nhóm khoảng",
            "title": "Kĩ thuật ghép nhóm (Grouping) các biến số định lượng",
            "points": [
              "<strong>Nhu cầu ghép nhóm:</strong> Với biến số có quá nhiều giá trị rời rạc (như Điểm số, Tuổi tác, Thu nhập), cần gom thành các khoảng (Class Intervals) để bảng cô đọng.",
              "<strong>Độ rộng khoảng (h):</strong> Được tính bằng công thức: <code>h = (Giá trị lớn nhất - Giá trị nhỏ nhất) / Số khoảng k</code>.",
              "<strong>Thao tác trên PivotTable:</strong> Nhấp phải vào một ô giá trị bất kì trong cột cần gom -> chọn <code>Group...</code> -> nhập mốc bắt đầu (Starting at), mốc kết thúc (Ending at) và bước nhảy độ rộng khoảng (By)."
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Trong bảng điều khiển PivotTable Fields của Excel, phân vùng nào dùng để chứa các biến cần thực hiện phép tính đếm (Count) hoặc cộng tổng (Sum)?",
        "options": [
          "Vùng Values",
          "Vùng Rows",
          "Vùng Columns",
          "Vùng Filters"
        ],
        "answer": 0,
        "explain": "Vùng Values là nơi chứa các trường cần áp dụng hàm tổng hợp toán học như Sum, Count, Average, StdDev."
      },
      {
        "q": "Để hiển thị tỉ lệ phần trăm của từng nhóm trên tổng số 100% trong PivotTable, ta thiết lập mục nào trong Value Field Settings?",
        "options": [
          "Mở tab Show Values As và chọn '% of Grand Total'",
          "Đổi hàm Sum thành hàm Count",
          "Gõ thêm ký tự % vào cạnh tên trường",
          "Xóa bỏ cột dòng tiêu đề của bảng dữ liệu gốc"
        ],
        "answer": 0,
        "explain": "Show Values As > % of Grand Total tự động tính toán tỉ lệ phần trăm của từng phần tử so với tổng thể toàn bảng."
      },
      {
        "q": "Nếu muốn chia dãy điểm thi tốt nghiệp từ 10 đến 30 điểm thành 4 khoảng bằng nhau trong PivotTable, độ rộng mỗi khoảng (By) cần nhập là bao nhiêu?",
        "options": [
          "5 điểm",
          "4 điểm",
          "10 điểm",
          "2.5 điểm"
        ],
        "answer": 0,
        "explain": "Độ rộng khoảng h = (Max - Min) / k = (30 - 10) / 4 = 20 / 4 = 5 điểm."
      }
    ]
  },
  "13": {
    "num": 13,
    "title": "Mô tả thống kê bằng biểu đồ",
    "badge": "Biểu đồ Thống kê",
    "topic": "Chuyên đề 3: Phân tích dữ liệu với bảng tính",
    "chapter": 3,
    "summary": "Lựa chọn và vẽ các loại biểu đồ thống kê chuyên nghiệp trong Excel: Biểu đồ cột (Column/Bar), Biểu đồ tròn (Pie), Biểu đồ phân bố tần số (Histogram) và Biểu đồ Pareto kết hợp đường tích lũy 80/20.",
    "objectives": [
      "Lựa chọn loại biểu đồ trực quan hóa phù hợp nhất với bản chất dữ liệu và câu hỏi nghiên cứu.",
      "Tạo và tinh chỉnh biểu đồ cột so sánh số lượng, biểu đồ tròn biểu diễn cơ cấu tỉ lệ phần trăm.",
      "Vẽ biểu đồ Histogram biểu thị dạng phân bố tần số của dữ liệu định lượng liên tục.",
      "Vẽ và diễn giải biểu đồ Pareto để nhận diện nhóm yếu tố then chốt (nguyên lý 80/20)."
    ],
    "sections": [
      {
        "heading": "1. Nguyên tắc lựa chọn biểu đồ thống kê",
        "items": [
          {
            "badge": "Biểu đồ cột & Tròn",
            "title": "Ứng dụng biểu đồ cột (Column) và biểu đồ tròn (Pie)",
            "points": [
              "<strong>Biểu đồ cột (Column / Bar Chart):</strong> Dùng để so sánh đại lượng giữa các nhóm phân loại riêng biệt (ví dụ: so sánh số lượng học sinh đỗ đại học giữa các lớp).",
              "<strong>Biểu đồ tròn (Pie / Doughnut Chart):</strong> Dùng để biểu diễn cơ cấu tỉ lệ các thành phần cấu thành một tổng thể hoàn chỉnh 100% (ví dụ: tỉ lệ xếp loại học lực Giỏi, Khá, Trung bình). Lưu ý: Chỉ nên dùng khi số lượng thành phần ít hơn 6 để tránh rối mắt."
            ]
          },
          {
            "badge": "Histogram & Pareto",
            "title": "Ứng dụng biểu đồ Histogram và biểu đồ Pareto",
            "points": [
              "<strong>Biểu đồ Histogram:</strong> Trực quan hóa hình dạng phân bố tần số của biến định lượng liên tục qua các cột dính sát nhau không có khoảng hở (cho biết phân bố có đối xứng hình chuông, lệch trái hay lệch phải).",
              "<strong>Biểu đồ Pareto:</strong> Kết hợp giữa biểu đồ cột xếp theo thứ tự giảm dần và đường lũy tích phần trăm (Cumulative %), giúp xác định 20% nguyên nhân cốt lõi gây ra 80% vấn đề."
            ]
          }
        ]
      },
      {
        "heading": "2. Quy trình thiết kế & Chuẩn hóa biểu đồ",
        "items": [
          {
            "badge": "Các bước chuẩn hóa",
            "title": "Quy trình thiết kế biểu đồ chuyên nghiệp trên Excel",
            "points": [
              "<strong>Bước 1 - Chuẩn bị bảng số liệu:</strong> Tạo bảng tổng hợp hoặc PivotTable chứa dữ liệu sạch.",
              "<strong>Bước 2 - Chèn biểu đồ:</strong> Chọn vùng dữ liệu -> vào menu <code>Insert > Charts</code> chọn loại biểu đồ tương ứng.",
              "<strong>Bước 3 - Bổ sung các thành phần bắt buộc:</strong> Thêm Tiêu đề biểu đồ (Chart Title), Nhãn trục hoành và trục tung (Axis Titles), Chú giải (Legend) và Nhãn dữ liệu (Data Labels).",
              "<strong>Bước 4 - Tinh chỉnh thẩm mĩ:</strong> Tùy biến màu sắc hài hòa, định dạng số liệu có phân tách hàng nghìn và kiểm tra tính trung thực của trục tung (bắt đầu từ mốc 0 để tránh phóng đại sai lệch)."
            ]
          },
          {
            "badge": "Lỗi cần tránh",
            "title": "Các lỗi sai phổ biến khi vẽ biểu đồ báo cáo",
            "points": [
              "<strong>Lỗi trục tung bị cắt cụt:</strong> Không bắt đầu từ 0 khiến sự chênh lệch nhỏ bị thổi phồng quá mức.",
              "<strong>Lỗi biểu đồ tròn quá nhiều lát cắt:</strong> Khiến nhãn chữ bị đè chồng lên nhau, khó quan sát.",
              "<strong>Lỗi thiếu đơn vị đo lường:</strong> Người đọc không biết số liệu tính bằng triệu đồng, người hay phần trăm."
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Loại biểu đồ nào trong Excel phù hợp nhất để biểu diễn hình dạng phân bố tần số của điểm thi một khối học sinh qua các khoảng liên tiếp?",
        "options": [
          "Histogram",
          "Biểu đồ tròn (Pie chart)",
          "Biểu đồ đường (Line chart)",
          "Biểu đồ tán xạ (Scatter plot)"
        ],
        "answer": 0,
        "explain": "Histogram chuyên dùng để hiển thị phân bố tần số của dữ liệu định lượng liên tục qua các khoảng liên tiếp (bins)."
      },
      {
        "q": "Đặc điểm nhận diện độc đáo của biểu đồ Pareto trong Excel là gì?",
        "options": [
          "Gồm các cột giá trị được sắp xếp giảm dần từ trái sang phải kèm một đường lũy tích phần trăm",
          "Là một hình tròn được chia thành 100 lát cắt nhỏ",
          "Là biểu đồ chỉ vẽ bằng các chấm điểm rời rạc trên mặt phẳng tọa độ",
          "Là biểu đồ có các thanh cột nằm ngang hoàn toàn"
        ],
        "answer": 0,
        "explain": "Biểu đồ Pareto gồm các cột sắp xếp giảm dần kết hợp đường tỉ lệ phần trăm tích lũy theo nguyên lý 80/20."
      },
      {
        "q": "Khi vẽ biểu đồ tròn (Pie Chart) trong báo cáo khoa học, khuyến nghị nào sau đây là chuẩn mực thẩm mĩ?",
        "options": [
          "Chỉ nên dùng khi có tối đa khoảng 5-6 nhóm thành phần và tổng các lát cắt phải bằng đúng 100%",
          "Càng chia thành nhiều lát cắt (trên 30 phần) thì biểu đồ càng chuyên nghiệp",
          "Không cần hiển thị nhãn số liệu hay tỉ lệ phần trăm",
          "Nên sử dụng hiệu ứng 3D xoay nghiêng thật nhiều để làm rối mắt người xem"
        ],
        "answer": 0,
        "explain": "Biểu đồ tròn chỉ tối ưu cho ít lát cắt (dưới 6 phần) để người xem nhận biết ngay cấu trúc cơ cấu tổng thể."
      }
    ]
  },
  "14": {
    "num": 14,
    "title": "Phân tích tương quan",
    "badge": "Tương quan Tuyến tính",
    "topic": "Chuyên đề 3: Phân tích dữ liệu với bảng tính",
    "chapter": 3,
    "summary": "Hiểu bản chất của mối liên hệ tương quan tuyến tính giữa hai đại lượng, vẽ biểu đồ phân tán Scatter Plot, sử dụng hàm CORREL trong Excel để tính hệ số tương quan r và diễn giải mức độ chặt chẽ theo chuẩn thống kê.",
    "objectives": [
      "Giải thích được khái niệm tương quan tuyến tính (đồng biến, nghịch biến hoặc không có tương quan).",
      "Vẽ biểu đồ phân tán điểm (Scatter Plot) để trực quan hóa hình thái phân bố của hai biến định lượng.",
      "Sử dụng thành thạo hàm CORREL(array1, array2) trong Excel để tính hệ số tương quan r.",
      "Phân biệt rạch ròi giữa quan hệ tương quan thống kê (Correlation) và quan hệ nhân quả (Causation)."
    ],
    "sections": [
      {
        "heading": "1. Bản chất tương quan tuyến tính & Hệ số r",
        "items": [
          {
            "badge": "Khái niệm tương quan",
            "title": "Khái niệm mối liên hệ tương quan tuyến tính",
            "points": [
              "<strong>Tương quan tuyến tính (Linear Correlation):</strong> Đo lường mức độ biến thiên đồng thời theo quy luật đường thẳng giữa hai biến định lượng X và Y.",
              "<strong>Tương quan dương (r > 0):</strong> Hai biến biến thiên cùng chiều (X tăng thì Y có xu hướng tăng theo, ví dụ: Chiều cao và Cân nặng).",
              "<strong>Tương quan âm (r < 0):</strong> Hai biến biến thiên ngược chiều (X tăng thì Y có xu hướng giảm xuống, ví dụ: Giá sản phẩm và Số lượng mua).",
              "<strong>Không tương quan (r ≈ 0):</strong> Không có mối quan hệ tuyến tính rõ rệt giữa hai biến."
            ]
          },
          {
            "badge": "Hệ số tương quan r",
            "title": "Đặc điểm và các mức độ của hệ số tương quan r",
            "points": [
              "<strong>Miền giá trị:</strong> Hệ số tương quan Pearson <code>r</code> luôn nằm trong đoạn <code>[-1; 1]</code>.",
              "<strong>Độ lớn |r|:</strong> Thể hiện độ mạnh yếu của liên kết: Từ 0.0 đến 0.3 (rất yếu / không đáng kể); 0.3 đến 0.5 (yếu); 0.5 đến 0.7 (vừa phải); 0.7 đến 0.9 (mạnh); 0.9 đến 1.0 (rất mạnh / hoàn hảo).",
              "<strong>Dấu của r:</strong> Dấu dương thể hiện chiều dốc lên, dấu âm thể hiện chiều dốc xuống."
            ]
          }
        ]
      },
      {
        "heading": "2. Hàm CORREL & Phân biệt tương quan và nhân quả",
        "items": [
          {
            "badge": "Hàm CORREL Excel",
            "title": "Cú pháp và lưu ý khi dùng hàm CORREL trong Excel",
            "points": [
              "<strong>Cú pháp hàm:</strong> <code>=CORREL(array1, array2)</code>.",
              "<strong>Quy tắc dữ liệu ghép cặp:</strong> Hai dãy <code>array1</code> và <code>array2</code> bắt buộc phải có cùng số lượng quan sát và các giá trị trên cùng một hàng phải thuộc về cùng một đối tượng quan sát.",
              "<strong>Kích thước mẫu tối thiểu:</strong> Trong thống kê ứng dụng, mẫu dữ liệu cần tối thiểu từ 5 cặp quan sát trở lên (tốt nhất trên 30 cặp) để hệ số có ý nghĩa thực tiễn."
            ]
          },
          {
            "badge": "Cảnh báo Nhân quả",
            "title": "Tương quan KHÔNG đồng nghĩa với quan hệ nhân quả (Causation)",
            "points": [
              "<strong>Nguyên lý quan trọng:</strong> Hai biến có hệ số tương quan rất cao (ví dụ r = 0.95) chỉ chứng tỏ chúng có xu hướng biến thiên song hành cùng nhau, HOÀN TOÀN KHÔNG CHỨNG MINH biến X là nguyên nhân gây ra biến Y.",
              "<strong>Biến ẩn thứ ba (Lurking variable):</strong> Sự đồng biến có thể do một biến số thứ ba tác động lên cả hai biến (ví dụ: nhiệt độ mùa hè tăng làm tăng cả doanh số bán kem và số ca đuối nước)."
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Hệ số tương quan tuyến tính Pearson r giữa hai biến định lượng luôn nhận giá trị trong đoạn nào?",
        "options": [
          "[-1; 1]",
          "[0; 1]",
          "[-100; 100]",
          "Từ 0 đến vô cùng"
        ],
        "answer": 0,
        "explain": "Hệ số tương quan r luôn nằm trong đoạn [-1; 1], dấu chỉ hướng và trị tuyệt đối chỉ độ mạnh liên kết."
      },
      {
        "q": "Cú pháp hàm Excel nào sau đây dùng để tính hệ số tương quan giữa cột điểm Toán (vùng A2:A30) và cột điểm Hóa (vùng B2:B30)?",
        "options": [
          "=CORREL(A2:A30, B2:B30)",
          "=CORRELATION(A2:A30, B2:B30)",
          "=PEARSON.TEST(A2:A30, B2:B30)",
          "=COVARIANCE(A2:A30, B2:B30)"
        ],
        "answer": 0,
        "explain": "Hàm chuẩn mực trong Excel để tính hệ số tương quan tuyến tính là CORREL(array1, array2)."
      },
      {
        "q": "Nếu hệ số tương quan giữa điểm rèn luyện và số buổi đi học muộn là r = -0.82, ta có thể rút ra kết luận gì?",
        "options": [
          "Có mối quan hệ tương quan nghịch (âm) mức độ mạnh: học sinh càng đi muộn nhiều thì điểm rèn luyện càng có xu hướng giảm thấp",
          "Có mối quan hệ tương quan thuận mức độ yếu",
          "Số buổi đi học muộn không ảnh hưởng gì tới điểm rèn luyện",
          "Đi học muộn là nguyên nhân duy nhất làm máy tính bị chậm"
        ],
        "answer": 0,
        "explain": "r = -0.82 mang dấu âm (nghịch biến) và |r| = 0.82 nằm trong khoảng 0.7 - 0.9 thể hiện liên kết nghịch mạnh mẽ."
      }
    ]
  },
  "15": {
    "num": 15,
    "title": "Kiểm định giả thuyết thống kê",
    "badge": "Kiểm định Giả thuyết",
    "topic": "Chuyên đề 3: Phân tích dữ liệu với bảng tính",
    "chapter": 3,
    "summary": "Hiểu bản chất phương pháp suy diễn thống kê: thiết lập giả thuyết gốc H0 và giả thuyết đối H1, chọn mức ý nghĩa alpha (0.05 / 0.01), sử dụng hàm Z.TEST cho 1 mẫu và T.TEST cho 2 mẫu độc lập, so sánh p-value để ra kết luận khoa học.",
    "objectives": [
      "Trình bày được logic suy luận của kiểm định giả thuyết thống kê, khái niệm H0, H1 và mức ý nghĩa alpha.",
      "Hiểu rõ ý nghĩa của chỉ số p-value và quy tắc bác bỏ giả thuyết gốc H0 (nếu p <= alpha).",
      "Sử dụng thành thạo hàm Z.TEST(array, x, [sigma]) để kiểm định giá trị trung bình của một tổng thể.",
      "Sử dụng thành thạo hàm T.TEST(array1, array2, tails, type) để so sánh giá trị trung bình giữa hai nhóm độc lập."
    ],
    "sections": [
      {
        "heading": "1. Nguyên lý kiểm định giả thuyết & p-value",
        "items": [
          {
            "badge": "Bộ giả thuyết H0/H1",
            "title": "Khái niệm giả thuyết gốc H0 và giả thuyết đối H1",
            "points": [
              "<strong>Giả thuyết gốc (H0 - Null Hypothesis):</strong> Tuyên bố mốc ban đầu ngầm định rằng 'không có sự khác biệt' hoặc 'không có hiệu ứng mới' (ví dụ: H0: Điểm trung bình của học sinh bằng 7.0; hoặc H0: Điểm nam và nữ bằng nhau).",
              "<strong>Giả thuyết đối (H1 - Alternative Hypothesis):</strong> Tuyên bố đối lập cần tìm bằng chứng để chứng minh; có thể là kiểm định hai phía (H1: μ ≠ μ0) hoặc kiểm định một phía (H1: μ > μ0 hoặc μ < μ0).",
              "<strong>Mức ý nghĩa (Alpha - α):</strong> Xác suất chấp nhận rủi ro bác bỏ nhầm H0 khi H0 thực sự đúng (sai lầm loại I). Trong nghiên cứu giáo dục và xã hội thường chọn <code>α = 0.05 (5%)</code> hoặc <code>α = 0.01 (1%)</code>."
            ]
          },
          {
            "badge": "Quy tắc p-value",
            "title": "Ý nghĩa của p-value và quy tắc đưa ra quyết định",
            "points": [
              "<strong>Khái niệm p-value:</strong> Xác suất quan sát được một mẫu dữ liệu có kết quả cực đoan như mẫu hiện tại nếu giả thuyết H0 là đúng.",
              "<strong>Quy tắc vàng:</strong> So sánh giá trị <code>p-value</code> tính được với mức ý nghĩa <code>α</code>:",
              "- <strong>Nếu p-value ≤ α:</strong> Bác bỏ H0, chấp nhận H1 ở mức ý nghĩa α (sự khác biệt có ý nghĩa thống kê).",
              "- <strong>Nếu p-value > α:</strong> Chưa đủ bằng chứng để bác bỏ H0 (không có nghĩa là chứng minh H0 chắc chắn đúng 100%, mà chỉ là dữ liệu mẫu hiện tại chưa đủ sức thuyết phục)."
            ]
          }
        ]
      },
      {
        "heading": "2. Hàm kiểm định Z.TEST và T.TEST trong Excel",
        "items": [
          {
            "badge": "Hàm Z.TEST",
            "title": "Kiểm định trung bình một mẫu với hàm Z.TEST",
            "points": [
              "<strong>Cú pháp:</strong> <code>=Z.TEST(array, x, [sigma])</code>.",
              "<strong>Tham số:</strong> <code>array</code> là vùng dữ liệu mẫu; <code>x</code> là giá trị trung bình giả định theo H0; <code>sigma</code> là độ lệch chuẩn tổng thể (nếu bỏ trống, Excel sẽ tự động dùng độ lệch chuẩn mẫu).",
              "<strong>Xử lý p-value trong SGK:</strong> Với kiểm định hai phía, SGK hướng dẫn tính: <code>p = 2 × MIN(Z.TEST, 1 - Z.TEST)</code> rồi so sánh p với α."
            ]
          },
          {
            "badge": "Hàm T.TEST",
            "title": "So sánh trung bình hai mẫu độc lập với hàm T.TEST",
            "points": [
              "<strong>Cú pháp:</strong> <code>=T.TEST(array1, array2, tails, type)</code>.",
              "<strong>Tham số tails:</strong> Nhập <code>1</code> cho kiểm định một phía (lớn hơn hoặc nhỏ hơn); nhập <code>2</code> cho kiểm định hai phía (khác nhau).",
              "<strong>Tham số type:</strong> Nhập <code>1</code> cho mẫu bắt cặp; <code>2</code> cho hai mẫu độc lập phương sai bằng nhau; <code>3</code> cho hai mẫu độc lập phương sai không bằng nhau (SGK khuyến nghị dùng <em>type = 3</em> cho so sánh hai nhóm học sinh nam/nữ).",
              "<strong>Ví dụ SGK:</strong> So sánh điểm thi giữa 9 bạn Nam và 15 bạn Nữ: <code>=T.TEST(H2:H10, H11:H25, 2, 3)</code>."
            ]
          }
        ]
      }
    ],
    "quiz": [
      {
        "q": "Quy tắc quyết định trong kiểm định giả thuyết thống kê khi so sánh p-value tính được với mức ý nghĩa alpha = 0.05 là gì?",
        "options": [
          "Nếu p-value <= alpha (0.05) thì bác bỏ giả thuyết gốc H0, chấp nhận giả thuyết đối H1",
          "Nếu p-value <= alpha (0.05) thì bắt buộc chấp nhận giả thuyết gốc H0",
          "Nếu p-value > alpha (0.05) thì chứng minh giả thuyết H0 đúng 100%",
          "Nếu p-value bằng 0 thì hủy bỏ toàn bộ cuộc điều tra"
        ],
        "answer": 0,
        "explain": "Quy tắc chuẩn: p <= alpha cho thấy biến cố quan sát được quá khó xảy ra ngẫu nhiên nếu H0 đúng, nên ta bác bỏ H0."
      },
      {
        "q": "Trong hàm T.TEST(array1, array2, tails, type) của Excel, tham số nào sau đây được thiết lập khi thực hiện kiểm định hai phía cho hai nhóm học sinh độc lập có phương sai khác nhau?",
        "options": [
          "tails = 2 và type = 3",
          "tails = 1 và type = 1",
          "tails = 2 và type = 2",
          "tails = 0 và type = 0"
        ],
        "answer": 0,
        "explain": "Kiểm định hai phía chọn tails = 2; hai nhóm độc lập không giả định phương sai bằng nhau chọn type = 3."
      },
      {
        "q": "Khi so sánh điểm trung bình giữa hai nhóm học sinh bằng T.TEST ra kết quả p-value = 0.021, với mức ý nghĩa alpha = 0.05, ta kết luận như thế nào?",
        "options": [
          "Vì p-value (0.021) < 0.05 nên bác bỏ H0; có sự khác biệt có ý nghĩa thống kê về điểm trung bình giữa hai nhóm",
          "Vì p-value (0.021) < 0.05 nên chấp nhận H0; hai nhóm có điểm trung bình giống hệt nhau",
          "Dữ liệu bị lỗi do p-value quá nhỏ, cần xóa hết dữ liệu làm lại",
          "Cả hai nhóm học sinh đều bị đánh trượt bài thi"
        ],
        "answer": 0,
        "explain": "p-value = 0.021 nhỏ hơn alpha = 0.05, đủ bằng chứng thống kê để bác bỏ H0 và khẳng định có sự khác biệt có ý nghĩa."
      }
    ]
  }
};
