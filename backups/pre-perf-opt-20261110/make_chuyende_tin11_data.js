// Data for Chuyên đề học tập Tin học 11 - Định hướng Tin học ứng dụng (Kết nối tri thức với cuộc sống)
// 16 lessons: 15 SGK lessons + 1 Capstone Project
// Each lesson has 4 interactive quizzes (total 64 quizzes)

const lessons = [
  // ==========================================
  // CHUYÊN ĐỀ 1: THỰC HÀNH SỬ DỤNG PHẦN MỀM VẼ TRANG TRÍ (INKSCAPE)
  // ==========================================
  {
    lessonNum: 1,
    id: "bai-1",
    topicNum: 1,
    topicName: "Chuyên đề 1: Phần mềm vẽ trang trí (Inkscape)",
    title: "Bài 1: Giới thiệu phần mềm vẽ trang trí",
    tag: "Đồ họa Vector",
    objectives: [
      "Hiểu rõ bản chất khác biệt giữa đồ họa vector (Vector Graphics) và đồ họa điểm ảnh (Raster/Bitmap).",
      "Nhận diện giao diện chuẩn của Inkscape: Thanh thực đơn, Hộp công cụ (Toolbox), Bảng màu (Color Palette), Vùng vẽ (Canvas) và Vùng điều khiển thuộc tính (Tool Controls Bar).",
      "Thực hiện thành thạo các thao tác tệp cơ bản: Khởi tạo trang vẽ mới, thiết lập kích thước trang chuẩn A4/Custom, lưu tệp định dạng gốc .SVG.",
      "Sử dụng linh hoạt các công cụ điều hướng: Công cụ chọn (Select Tool - F1), phóng to/thu nhỏ (Zoom Tool - Z) và cuộn xoay khung nhìn."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-vector-square"></i> Đồ họa Vector vs Bitmap
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Vector (SVG):</strong> Xây dựng từ các phương trình toán học (điểm, đường cong, vector). Phóng to vô hạn không vỡ hình, dung lượng nhẹ, lý tưởng làm logo, biểu tượng, hoa văn.</li>
            <li><strong>Bitmap/Raster (JPG, PNG):</strong> Cấu thành từ lưới điểm ảnh (pixel). Phóng to bị vỡ hạt (răng cưa), thích hợp lưu ảnh chụp thực tế.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-palette"></i> Không gian làm việc Inkscape
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Toolbox (Bên trái):</strong> Chứa đầy đủ các công cụ vẽ hình khối, đường bút, văn bản.</li>
            <li><strong>Tool Controls Bar (Phía trên):</strong> Hiển thị các thông số chi tiết (tọa độ X, Y, W, H) tương ứng công cụ đang chọn.</li>
            <li><strong>Color Palette (Phía dưới):</strong> Chọn nhanh màu tô cho đối tượng chỉ với 1 cú click chuột.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Khởi động và thiết lập trang vẽ",
        content: "Mở Inkscape -> Chọn menu <strong>File -> Document Properties (Ctrl + Shift + D)</strong> -> Tại thẻ <em>Page</em>, chọn Display units: <strong>mm</strong> hoặc <strong>px</strong> -> Chọn khổ giấy A4, hướng ngang (Landscape)."
      },
      {
        title: "Bước 2: Sử dụng công cụ vẽ cơ bản và bảng màu",
        content: "Chọn công cụ hình chữ nhật (phím <strong>R</strong>), kéo thả một hình trên canvas -> Nhấp chuột trái vào dải màu bên dưới để đổi màu tô <em>(Fill)</em> -> Giữ phím <strong>Shift</strong> và nhấp vào màu để đổi màu đường viền <em>(Stroke)</em>."
      },
      {
        title: "Bước 3: Lưu sản phẩm thiết kế chuẩn đồ họa",
        content: "Vào <strong>File -> Save As (Ctrl + S)</strong> -> Lưu tệp với phần mở rộng chuẩn <strong>.svg</strong> (Inkscape SVG) để giữ nguyên cấu trúc vector có thể biên tập tiếp tục."
      }
    ],
    practice: "Khởi tạo một trang vẽ Inkscape kích thước chuẩn 1920x1080 px. Sử dụng các công cụ hình cơ bản và bảng màu để vẽ phác thảo một lá cờ trang trí với màu nền tự chọn và viền nét sắc nét.",
    quizzes: [
      {
        question: "Ưu điểm cốt lõi lớn nhất của ảnh đồ họa vector (Vector Graphics) so với ảnh Bitmap là gì?",
        options: [
          "Có thể phóng to thu nhỏ tùy ý mà hình ảnh không hề bị vỡ hạt hay giảm chất lượng",
          "Hiển thị màu sắc chân thực hơn ảnh chụp kỹ thuật số từ máy ảnh cơ",
          "Dung lượng tệp luôn luôn lớn hơn tệp ảnh JPEG chất lượng cao",
          "Không thể chỉnh sửa lại các đường nét sau khi đã vẽ xong"
        ],
        correct: 0,
        explanation: "Đồ họa vector được biểu diễn bằng các phương trình toán học mô tả hình học, do đó khi phóng to hay thu nhỏ ở bất kỳ tỉ lệ nào, chất lượng và độ nét của ảnh vẫn được giữ nguyên vẹn."
      },
      {
        question: "Phần mở rộng mặc định của tệp thiết kế đồ họa trong phần mềm Inkscape là gì?",
        options: [
          ".svg",
          ".psd",
          ".bmp",
          ".gif"
        ],
        correct: 0,
        explanation: "Inkscape sử dụng định dạng chuẩn công nghiệp mở SVG (Scalable Vector Graphics) làm định dạng lưu trữ tệp gốc mặc định."
      },
      {
        question: "Trong Inkscape, để đổi màu đường viền (Stroke) của đối tượng bằng bảng màu dưới đáy màn hình, bạn thực hiện thao tác nào?",
        options: [
          "Giữ phím Shift và nhấp chuột trái vào ô màu mong muốn",
          "Nhấp đúp chuột trái vào ô màu",
          "Giữ phím Alt và nhấp chuột phải vào ô màu",
          "Kéo thả ô màu vào chính giữa tâm của hình"
        ],
        correct: 0,
        explanation: "Trong Inkscape: Nhấp chuột trái vào ô màu để gán màu tô (Fill); Giữ phím Shift + nhấp chuột trái vào ô màu để gán màu đường viền (Stroke)."
      },
      {
        question: "Phím tắt để kích hoạt công cụ Chọn và Chuyển dạng đối tượng (Select and Transform Objects) trong Inkscape là gì?",
        options: [
          "F1 (hoặc phím S)",
          "F2 (hoặc phím N)",
          "F6 (hoặc phím B)",
          "Ctrl + Z"
        ],
        correct: 0,
        explanation: "Phím F1 (hoặc S) kích hoạt công cụ Select Tool dùng để chọn, di chuyển, co giãn kích thước và xoay đối tượng."
      }
    ]
  },
  {
    lessonNum: 2,
    id: "bai-2",
    topicNum: 1,
    topicName: "Chuyên đề 1: Phần mềm vẽ trang trí (Inkscape)",
    title: "Bài 2: Làm việc với đối tượng hình khối",
    tag: "Shapes & Geometries",
    objectives: [
      "Sử dụng thành thạo các công cụ hình học cơ bản: Hình chữ nhật/hình vuông (R), Hình elip/hình tròn (E), Hình đa giác/ngôi sao (*).",
      "Hiểu và điều khiển các tay nắm thuộc tính (Handles) để bo tròn góc hình chữ nhật, tạo hình nan quạt (Arc/Chord) từ hình tròn.",
      "Thiết lập chi tiết màu tô và kiểu đường nét trong bảng điều khiển Fill and Stroke (Ctrl + Shift + F).",
      "Áp dụng độ mờ (Opacity) và dải chuyển màu mượt mà (Linear/Radial Gradient) vào tác phẩm trang trí."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-shapes"></i> Công cụ hình học & Tay nắm đặc biệt
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Rectangle (R):</strong> Giữ Ctrl để vẽ hình vuông hoàn hảo. Kéo tay nắm hình tròn ở góc trên bên phải để bo góc mượt mà.</li>
            <li><strong>Circles/Ellipses (E):</strong> Giữ Ctrl để vẽ hình tròn. Kéo tay nắm tròn để tạo góc cắt quạt hoặc cung elip.</li>
            <li><strong>Stars and Polygons (*):</strong> Thay đổi số đỉnh (Corners), tỷ lệ bán kính (Spoke ratio) và góc bo (Rounded) trên Tool Controls Bar.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-fill-drip"></i> Bảng điều khiển Fill & Stroke (Ctrl+Shift+F)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Fill tab:</strong> Không tô (None), Tô đơn sắc (Flat color), Tô chuyển màu tuyến tính (Linear Gradient), Tô xuyên tâm (Radial Gradient).</li>
            <li><strong>Stroke paint & style:</strong> Độ dày nét (Width), kiểu nét đứt (Dashes), kiểu đầu nối bo góc (Join/Cap).</li>
            <li><strong>Blur & Opacity:</strong> Tạo độ nhòe bóng đổ (Blur) và độ trong suốt nghệ thuật.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Vẽ ngôi sao trang trí 5 cánh hoàn hảo",
        content: "Chọn công cụ <strong>Create stars and polygons (*)</strong> -> Trên thanh điều khiển thuộc tính, chọn biểu tượng Ngôi sao, nhập <em>Corners: 5</em>, <em>Spoke ratio: 0.382</em> -> Nhấn giữ chuột và kéo trên trang vẽ để tạo ngôi sao vàng."
      },
      {
        title: "Bước 2: Mở bảng Fill and Stroke và phối dải màu Gradient",
        content: "Nhấn <strong>Ctrl + Shift + F</strong> -> Thẻ Fill chọn biểu tượng <strong>Linear Gradient</strong> -> Chọn công cụ <strong>Create and edit gradients (G)</strong> để kéo định hướng ánh sáng từ vàng kim sang cam đỏ nổi bật."
      },
      {
        title: "Bước 3: Tinh chỉnh đường viền nét và bóng đổ mềm",
        content: "Chuyển sang thẻ <em>Stroke style</em>, đặt độ dày viền 1.5 px -> Chỉnh thanh trượt <em>Blur: 1.0%</em> để tạo độ nổi bật 3D nhẹ nhàng."
      }
    ],
    practice: "Thiết kế một huy hiệu học tập hình tròn có viền bánh răng hoặc hình đa giác 8 cạnh, phối dải màu chuyển tiếp Radial Gradient cùng một ngôi sao vàng rực rỡ ở chính giữa.",
    quizzes: [
      {
        question: "Phím tắt để mở nhanh bảng hội thoại quản lý Màu tô và Đường viền (Fill and Stroke) trong Inkscape là gì?",
        options: [
          "Ctrl + Shift + F",
          "Ctrl + Shift + D",
          "Ctrl + Alt + G",
          "Ctrl + Shift + A"
        ],
        correct: 0,
        explanation: "Tổ hợp phím Ctrl + Shift + F mở bảng thuộc tính Fill and Stroke (Màu tô và Đường nét viền)."
      },
      {
        question: "Khi đang sử dụng công cụ vẽ hình chữ nhật (Rectangle Tool), muốn bo tròn các góc của hình chữ nhật, bạn cần thao tác gì?",
        options: [
          "Kéo tay nắm tròn (Circle Handle) ở góc trên bên phải của hình chữ nhật",
          "Kéo các tay nắm hình vuông ở góc đối diện",
          "Nhấn giữ phím Space và click chuột vào giữa hình",
          "Vào menu Edit -> Round Corner"
        ],
        correct: 0,
        explanation: "Khi chọn công cụ vẽ hình chữ nhật, trên góc trên bên phải của hình sẽ xuất hiện một tay nắm hình tròn; kéo tay nắm này xuống dưới sẽ bo tròn 4 góc của hình chữ nhật."
      },
      {
        question: "Để vẽ được một hình vuông hoặc hình tròn hoàn hảo không bị méo lệch, bạn phải giữ phím nào trong lúc kéo rê chuột?",
        options: [
          "Ctrl",
          "Alt",
          "Tab",
          "Caps Lock"
        ],
        correct: 0,
        explanation: "Trong Inkscape, giữ phím Ctrl khi vẽ hình chữ nhật hoặc elip sẽ khóa tỉ lệ kích thước thành 1:1 (hình vuông hoặc hình tròn đều)."
      },
      {
        question: "Chế độ tô màu chuyển tiếp dạng tỏa tròn từ tâm ra các phía gọi là gì?",
        options: [
          "Radial Gradient",
          "Linear Gradient",
          "Mesh Gradient",
          "Flat color"
        ],
        correct: 0,
        explanation: "Radial Gradient là kiểu tô chuyển màu tỏa tròn từ tâm ra viền ngoài; còn Linear Gradient là tô chuyển tiếp tuyến tính theo một đường thẳng."
      }
    ]
  },
  {
    lessonNum: 3,
    id: "bai-3",
    topicNum: 1,
    topicName: "Chuyên đề 1: Phần mềm vẽ trang trí (Inkscape)",
    title: "Bài 3: Làm việc với đối tượng đường",
    tag: "Paths & Bezier Curves",
    objectives: [
      "Hiểu rõ khái niệm đường nét (Path) trong đồ họa vector gồm các điểm neo (Nodes) và đoạn nối (Segments).",
      "Làm chủ công cụ vẽ đường cong Bezier và đường thẳng (Draw Bezier curves and straight lines - B).",
      "Sử dụng công cụ chỉnh sửa điểm nút (Edit paths by nodes - N / F2) để uốn nắn đường cong tiếp tuyến.",
      "Chuyển đổi đối tượng hình khối thông thường thành đường cong tự do thông qua lệnh Path -> Object to Path (Ctrl + Shift + C)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-bezier-curve"></i> Đường cong Bezier & Các loại điểm neo
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Cusp node (Nút góc):</strong> Hai tay nắm tiếp tuyến độc lập, tạo thành các góc nhọn gấp khúc.</li>
            <li><strong>Smooth node (Nút trơn):</strong> Hai tay nắm luôn nằm trên cùng một đường thẳng đối xứng hướng, tạo đường cong mượt.</li>
            <li><strong>Symmetric node (Nút đối xứng):</strong> Hai tay nắm vừa cùng đường thẳng vừa có độ dài bằng nhau hoàn hảo.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-draw-polygon"></i> Kỹ thuật vẽ bằng bút Bezier (B)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Vẽ đường thẳng:</strong> Nhấp chuột tại điểm đầu, di chuyển rồi nhấp tại điểm kế tiếp.</li>
            <li><strong>Vẽ đường cong:</strong> Nhấp và kéo rê chuột (drag) để mở rộng hai cần điều khiển tiếp tuyến.</li>
            <li><strong>Khép kín đường:</strong> Nhấp chuột vào điểm nút đầu tiên xuất hiện hình vuông màu đỏ để tạo thành hình khép kín có thể tô màu Fill.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Vẽ phác thảo hình chiếc lá bằng bút Bezier",
        content: "Chọn công cụ <strong>Draw Bezier curves (B)</strong> -> Nhấp chuột tạo cuống lá -> Nhấp và kéo chuột tại đỉnh lá để tạo đường cong mềm -> Nhấp trở lại điểm cuống lá để khép kín hình."
      },
      {
        title: "Bước 2: Tinh chỉnh đường cong với Node Tool (N)",
        content: "Chọn công cụ <strong>Edit paths by nodes (N)</strong> -> Nhấp vào mép viền để kéo trực tiếp đường cong uốn lượn tự nhiên, hoặc nhấp vào điểm nút để xoay cần gạt tiếp tuyến."
      },
      {
        title: "Bước 3: Thêm điểm nút mới và chuyển đổi kiểu nút",
        content: "Nhấp đúp chuột lên bất kỳ vị trí nào trên đường nét để thêm điểm neo mới -> Trên thanh Tool Controls Bar, nhấp vào biểu tượng <em>Make selected nodes smooth</em> để làm mượt hoàn hảo."
      }
    ],
    practice: "Sử dụng công cụ Bezier (B) và Node Tool (N) để vẽ một nhành hoa hoặc một quả táo hoàn chỉnh có cuống và lá xanh mượt mà, sau đó tô màu đổ bóng nghệ thuật.",
    quizzes: [
      {
        question: "Phím tắt để kích hoạt công cụ vẽ đường cong Bezier và đường thẳng trong Inkscape là gì?",
        options: [
          "Phím B",
          "Phím N",
          "Phím E",
          "Phím R"
        ],
        correct: 0,
        explanation: "Phím B (Bezier Tool) dùng để vẽ đường thẳng và đường cong Bezier."
      },
      {
        question: "Để biến một hình học chuẩn (như hình chữ nhật, hình tròn) thành đường cong tự do (Path) nhằm can thiệp từng điểm neo, ta dùng lệnh nào?",
        options: [
          "Path -> Object to Path (Ctrl + Shift + C)",
          "Path -> Stroke to Path",
          "Object -> Group",
          "Edit -> Duplicate"
        ],
        correct: 0,
        explanation: "Lệnh Path -> Object to Path (Ctrl + Shift + C) chuyển đổi đối tượng hình dạng cơ bản thành tập hợp các điểm nút đường cong Path."
      },
      {
        question: "Công cụ Node Tool (phím N hoặc F2) có chức năng chính là gì?",
        options: [
          "Chỉnh sửa tọa độ các điểm neo (nodes) và điều khiển độ cong của đường nét",
          "Phóng to và thu nhỏ vùng nhìn canvas",
          "Tô màu nền nhanh cho toàn bộ trang giấy",
          "Xoay toàn bộ bản vẽ một góc 90 độ"
        ],
        correct: 0,
        explanation: "Node Tool (Edit paths by nodes) chuyên dùng để chọn, thêm, bớt, chuyển đổi kiểu điểm nút và uốn nắn độ cong của các đoạn tiếp tuyến."
      },
      {
        question: "Điểm neo loại 'Smooth node' (Nút trơn) có đặc điểm vật lý nào dưới đây?",
        options: [
          "Hai cần gạt tiếp tuyến luôn cùng nằm trên một đường thẳng đối hướng, giúp đường cong đi qua nút mượt mà không bị gãy",
          "Hai cần gạt tiếp tuyến hoàn toàn độc lập tạo thành góc nhọn 90 độ",
          "Điểm neo không có bất kỳ cần gạt tiếp tuyến nào",
          "Khi di chuyển nút trơn thì toàn bộ các nút khác sẽ bị xóa bỏ"
        ],
        correct: 0,
        explanation: "Smooth node đảm bảo tiếp tuyến liên tục xuyên qua điểm neo, làm cho đường cong luôn mượt mà và không có khấc nhọn gãy khúc."
      }
    ]
  },
  {
    lessonNum: 4,
    id: "bai-4",
    topicNum: 1,
    topicName: "Chuyên đề 1: Phần mềm vẽ trang trí (Inkscape)",
    title: "Bài 4: Chỉnh sửa, ghép nối, kết nối các đối tượng đồ họa",
    tag: "Boolean Operations & Align",
    objectives: [
      "Thực hiện thành thạo các phép toán hình học Boolean (Path Operations): Phép hợp (Union), Hiệu (Difference), Giao (Intersection), Loại trừ (Exclusion), Phân chia (Division).",
      "Hiểu rõ thứ tự lớp trên/lớp dưới (Z-Order) ảnh hưởng trực tiếp đến kết quả phép cắt hình Difference.",
      "Sắp xếp, căn lề và phân phối đối tượng chuẩn xác tới từng pixel thông qua bảng Align and Distribute (Ctrl + Shift + A).",
      "Nhóm các đối tượng (Group - Ctrl + G) và rã nhóm (Ungroup - Ctrl + Shift + G) để quản lý bản thiết kế phức tạp."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-object-ungroup"></i> Các phép toán cắt ghép Boolean (Menu Path)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Union (Ctrl + +):</strong> Hợp nhất tất cả các đối tượng được chọn thành một hình khối duy nhất.</li>
            <li><strong>Difference (Ctrl + -):</strong> Lấy đối tượng nằm trên cắt bỏ phần giao nhau khỏi đối tượng nằm dưới (tạo hình trăng khuyết, lỗ khoét).</li>
            <li><strong>Intersection (Ctrl + *):</strong> Giữ lại duy nhất phần chung nhau của các hình.</li>
            <li><strong>Division (Ctrl + /):</strong> Dùng đối tượng trên làm 'dao cắt' đối tượng dưới thành các mảnh rời.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-align-center"></i> Bảng Align & Distribute (Ctrl+Shift+A)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Relative to:</strong> Căn lề so với Last selected (đối tượng chọn sau cùng), First selected, Page (trang giấy), hoặc Biggest item.</li>
            <li><strong>Align buttons:</strong> Căn thẳng mép trái, căn giữa theo chiều dọc/ngang, căn thẳng mép trên/dưới.</li>
            <li><strong>Distribute:</strong> Phân bổ khoảng cách đều nhau giữa các phần tử trang trí.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Tạo hình mặt trăng khuyết bằng phép Difference",
        content: "Vẽ 2 hình tròn màu vàng lồng một phần vào nhau -> Chọn hình tròn thứ hai và nhấn phím <strong>Page Up</strong> để đưa lên trên -> Chọn cả 2 hình -> Vào <strong>Path -> Difference (Ctrl + -)</strong> để tạo hình mặt trăng lưỡi liềm."
      },
      {
        title: "Bước 2: Căn lề các chi tiết đối xứng tuyệt đối",
        content: "Chọn các đối tượng trang trí -> Nhấn <strong>Ctrl + Shift + A</strong> -> Mục <em>Relative to</em> chọn <strong>Page</strong> -> Nhấp biểu tượng <strong>Center on vertical axis</strong> và <strong>Center on horizontal axis</strong>."
      },
      {
        title: "Bước 3: Nhóm khối đối tượng cố định",
        content: "Quét chọn toàn bộ các chi tiết hoàn thiện -> Nhấn <strong>Ctrl + G</strong> để đóng gói nhóm, giúp di chuyển hoặc phóng to thu nhỏ mà không làm xô lệch bố cục."
      }
    ],
    practice: "Vẽ biểu tượng biểu trưng (Logo) hình đám mây trời bằng cách ghép nối 4 hình tròn với 1 hình chữ nhật, sau đó áp dụng lệnh Path -> Union để hợp nhất thành một khối duy nhất.",
    quizzes: [
      {
        question: "Phép toán nào trong menu Path dùng để lấy đối tượng nằm ở lớp trên 'khoét rỗng' hoặc cắt bỏ phần giao nhau khỏi đối tượng nằm ở lớp dưới?",
        options: [
          "Difference (Ctrl + -)",
          "Union (Ctrl + +)",
          "Intersection (Ctrl + *)",
          "Combine (Ctrl + K)"
        ],
        correct: 0,
        explanation: "Phép Path -> Difference (Ctrl + -) sử dụng hình nằm trên như một chiếc khuôn cắt để loại bỏ phần diện tích giao nhau khỏi hình nằm dưới."
      },
      {
        question: "Tổ hợp phím tắt để mở bảng điều khiển Căn lề và Phân phối đối tượng (Align and Distribute) là gì?",
        options: [
          "Ctrl + Shift + A",
          "Ctrl + Shift + F",
          "Ctrl + Shift + D",
          "Ctrl + Alt + L"
        ],
        correct: 0,
        explanation: "Ctrl + Shift + A kích hoạt bảng công cụ Align and Distribute hỗ trợ căn chỉnh tâm, mép và khoảng cách đều giữa các đối tượng."
      },
      {
        question: "Muốn hợp nhất 5 hình đa giác khác nhau đang nằm đè lên nhau thành một khối đối tượng liền mạch duy nhất, ta áp dụng lệnh nào?",
        options: [
          "Path -> Union",
          "Path -> Division",
          "Path -> Break Apart",
          "Path -> Exclusion"
        ],
        correct: 0,
        explanation: "Lệnh Path -> Union (Ctrl + +) kết hợp tất cả các đối tượng được chọn thành một hình khối duy nhất chung đường bao ngoài."
      },
      {
        question: "Để nhóm nhiều đối tượng rời rạc thành một khối thống nhất nhằm tránh thất lạc khi di chuyển, ta dùng phím tắt nào?",
        options: [
          "Ctrl + G",
          "Ctrl + U",
          "Ctrl + Shift + G",
          "Ctrl + D"
        ],
        correct: 0,
        explanation: "Ctrl + G là lệnh Group (nhóm đối tượng). Để rã nhóm thì dùng Ctrl + Shift + G (Ungroup)."
      }
    ]
  },
  {
    lessonNum: 5,
    id: "bai-5",
    topicNum: 1,
    topicName: "Chuyên đề 1: Phần mềm vẽ trang trí (Inkscape)",
    title: "Bài 5: Thiết kế sản phẩm trang trí hoàn chỉnh",
    tag: "Product Design & Export",
    objectives: [
      "Vận dụng tổng hợp các kỹ năng vẽ hình khối, uốn đường nét Bezier, dải màu gradient và cắt ghép Boolean để tạo sản phẩm thực tế.",
      "Thiết kế các ấn phẩm trang trí học đường: Nhãn vở học sinh, Logo câu lạc bộ, Thiệp chúc mừng ngày Nhà giáo Việt Nam 20-11.",
      "Làm việc với công cụ văn bản (Text Tool - T), uốn chữ uốn lượn theo đường dẫn cong (Text -> Put on Path).",
      "Xuất bản sản phẩm đầu ra chuẩn: Tệp SVG cho in ấn chất lượng cao và tệp hình ảnh PNG trong suốt (Transparent Background) qua bảng Export (Ctrl + Shift + E)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-font"></i> Kỹ thuật uốn chữ theo đường dẫn (Put on Path)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Nhập văn bản (T):</strong> Gõ dòng chữ thương hiệu hoặc khẩu hiệu (ví dụ: 'ĐOÀN TNCS HỒ CHÍ MINH').</li>
            <li><strong>Tạo đường cong dẫn:</strong> Vẽ một đường cung tròn hoặc đường lượn sóng Bezier.</li>
            <li><strong>Áp chữ lên đường:</strong> Chọn đồng thời cả chữ và đường dẫn -> Vào menu <em>Text -> Put on Path</em>.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-file-export"></i> Xuất bản ấn phẩm (Ctrl+Shift+E)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Export Document/Page:</strong> Xuất toàn bộ kích thước trang giấy in.</li>
            <li><strong>Export Selection:</strong> Chỉ xuất riêng phần biểu tượng logo đang chọn, nền trong suốt.</li>
            <li><strong>DPI tiêu chuẩn:</strong> Chọn 300 DPI cho ấn phẩm in ấn vật lý (băng rôn, thiệp in); 96 DPI cho hiển thị web.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Thiết kế khung nền nhãn vở học sinh",
        content: "Tạo hình chữ nhật kích thước 85x55 mm -> Bo góc tròn nhẹ 4 mm -> Tô dải màu pastel trang nhã -> Thêm hoa văn trang trí góc bằng các đường lượn sóng."
      },
      {
        title: "Bước 2: Bố trí các trường thông tin nhãn vở",
        content: "Dùng công cụ Text (T) tạo các nhãn: Trường, Lớp, Môn học, Họ và tên, Năm học -> Kẻ các đường chấm chấm ngay ngắn bằng công cụ vẽ nét đứt trong Stroke Style."
      },
      {
        title: "Bước 3: Xuất file hình ảnh chất lượng cao",
        content: "Nhấn <strong>Ctrl + Shift + E</strong> để mở hộp thoại Export -> Chọn định dạng <strong>PNG image (*.png)</strong> -> Đặt độ phân giải <strong>300 dpi</strong> -> Nhấp nút <strong>Export</strong>."
      }
    ],
    practice: "Thiết kế một mẫu Logo hoàn chỉnh cho Câu lạc bộ Tin học của trường em, kết hợp chữ lượn theo hình tròn (Put on Path), biểu tượng chiếc laptop hoặc bánh răng công nghệ và xuất ra tệp PNG nền trong suốt.",
    quizzes: [
      {
        question: "Muốn gắn một đoạn văn bản uốn lượn chạy cong theo một đường tròn hoặc đường cong uốn lượn có sẵn, ta dùng tính năng nào?",
        options: [
          "Text -> Put on Path",
          "Path -> Combine",
          "Object -> Transform",
          "Path -> Stroke to Path"
        ],
        correct: 0,
        explanation: "Lệnh Text -> Put on Path cho phép gắn văn bản uốn theo bất kỳ đường dẫn vector nào."
      },
      {
        question: "Tổ hợp phím tắt để mở hộp thoại xuất tệp đồ họa Export trong Inkscape là gì?",
        options: [
          "Ctrl + Shift + E",
          "Ctrl + Shift + S",
          "Ctrl + E",
          "Alt + Shift + X"
        ],
        correct: 0,
        explanation: "Ctrl + Shift + E mở bảng công cụ Export chuyên xuất bản các định dạng như PNG, PDF, JPG."
      },
      {
        question: "Khi xuất tệp đồ họa để gửi đi in ấn tem nhãn vật lý sắc nét, độ phân giải DPI chuẩn được khuyến nghị là bao nhiêu?",
        options: [
          "300 DPI",
          "72 DPI",
          "96 DPI",
          "150 DPI"
        ],
        correct: 0,
        explanation: "Chuẩn in ấn công nghiệp chất lượng cao yêu cầu độ phân giải tối thiểu 300 DPI để tránh bị nhòe hạt mực."
      },
      {
        question: "Định dạng ảnh nào hỗ trợ nền trong suốt (không có nền trắng đục đằng sau logo)?",
        options: [
          "PNG",
          "JPEG",
          "BMP",
          "GIF không trong suốt"
        ],
        correct: 0,
        explanation: "Định dạng PNG (hỗ trợ kênh màu Alpha) cho phép lưu hình ảnh có nền trong suốt, rất thích hợp chèn logo lên mọi phông nền khác nhau."
      }
    ]
  },

  // ==========================================
  // CHUYÊN ĐỀ 2: THỰC HÀNH SỬ DỤNG PHẦN MỀM LÀM PHIM HOẠT HÌNH
  // ==========================================
  {
    lessonNum: 6,
    id: "bai-6",
    topicNum: 2,
    topicName: "Chuyên đề 2: Phần mềm làm phim hoạt hình (Toontastic)",
    title: "Bài 6: Làm quen với phần mềm làm phim hoạt hình",
    tag: "Animation Pipeline",
    objectives: [
      "Nắm vững quy trình sản xuất một bộ phim hoạt hình hoàn chỉnh: Ý tưởng -> Kịch bản -> Kịch bản phân cảnh (Storyboard) -> Thiết kế nhân vật/bối cảnh -> Diễn hoạt (Animation) -> Hậu kỳ (Âm thanh/Kỹ xảo) -> Xuất bản.",
      "Làm quen với giao diện và nguyên lý hoạt động của phần mềm làm phim hoạt hình 2D/3D trực quan Toontastic 3D.",
      "Hiểu rõ cấu trúc một cốt truyện hoạt hình kinh điển theo cấu trúc 3 hồi (Short Story) hoặc 5 hồi (Classic Story): Đầu câu chuyện (Beginning), Thắt nút/Cao trào (Middle), Mở nút/Kết thúc (End).",
      "Khởi tạo dự án phim hoạt hình đầu tiên, tìm hiểu các thao tác chọn bối cảnh không gian có sẵn."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-clapperboard"></i> 6 Bước sản xuất phim hoạt hình chuẩn
          </h4>
          <ol class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-decimal list-inside">
            <li><strong>Idea & Script:</strong> Xây dựng thông điệp, kịch bản văn học chi tiết từng lời thoại.</li>
            <li><strong>Storyboard:</strong> Vẽ phác thảo các khung cảnh chính (góc quay, vị trí diễn viên).</li>
            <li><strong>Asset Design:</strong> Tạo hình nhân vật, phục trang, đạo cụ và khung cảnh nền.</li>
            <li><strong>Animation:</strong> Diễn hoạt chuyển động cơ thể, bước đi, cử chỉ và biểu cảm.</li>
            <li><strong>Audio & Music:</strong> Lồng tiếng nhân vật, hiệu ứng tiếng động foley và nhạc nền.</li>
            <li><strong>Rendering:</strong> Kết xuất video thành phẩm MP4 độ nét cao.</li>
          </ol>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-film"></i> Cấu trúc hồi kịch bản Toontastic
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Short Story (3 phần):</strong> Beginning (Giới thiệu bối cảnh, nhân vật) -> Middle (Xảy ra xung đột, tình huống thử thách) -> End (Giải quyết vấn đề, bài học rút ra).</li>
            <li><strong>Classic Story (5 phần):</strong> Setup -> Conflict -> Challenge -> Climax -> Resolution. Phù hợp cho cốt truyện dài kịch tính.</li>
            <li><strong>Science Report:</strong> Dành riêng cho thuyết trình đề tài khoa học kỹ thuật.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Khởi động phần mềm và tạo dự án mới",
        content: "Mở Toontastic -> Nhấp vào biểu tượng <strong>dấu cộng (+) to ở chính giữa</strong> để bắt đầu dự án hoạt hình mới."
      },
      {
        title: "Bước 2: Lựa chọn thể loại cấu trúc câu chuyện",
        content: "Chọn cấu trúc <strong>Short Story (3 Parts)</strong> để bắt đầu làm quen với câu chuyện ngắn gồm 3 phân đoạn rõ ràng."
      },
      {
        title: "Bước 3: Chọn bối cảnh cho hồi đầu tiên (Beginning)",
        content: "Nhấp vào phân đoạn <em>Beginning</em> -> Chọn bối cảnh yêu thích từ thư viện (ví dụ: Trường học - School, Rừng xanh - Woods, Trạm vũ trụ - Space)."
      }
    ],
    practice: "Hãy viết kịch bản phân cảnh 3 phần ngắn (khoảng 150 chữ) cho một câu chuyện hoạt hình mang thông điệp bảo vệ môi trường trường học (Nhặt rác bỏ vào thùng).",
    quizzes: [
      {
        question: "Kịch bản phân cảnh (Storyboard) trong quy trình sản xuất phim hoạt hình đóng vai trò quan trọng gì?",
        options: [
          "Mô phỏng trực quan từng cảnh quay bằng chuỗi hình ảnh phác thảo kèm chú thích góc máy và âm thanh",
          "Là văn bản chứa toàn bộ mã nguồn lập trình game của phần mềm",
          "Là danh sách chấm công tính tiền lương của các họa sĩ hoạt hình",
          "Là bản ghi âm giọng nói cuối cùng của diễn viên lồng tiếng"
        ],
        correct: 0,
        explanation: "Storyboard là chuỗi tranh vẽ phác thảo mô tả diễn biến từng cảnh phim, vị trí nhân vật, góc máy và diễn biến cốt truyện trước khi bước vào khâu diễn hoạt thực tế."
      },
      {
        question: "Trong cấu trúc câu chuyện 3 hồi kinh điển (Short Story), thứ tự tuần tự của 3 phân đoạn là gì?",
        options: [
          "Beginning (Mở đầu) -> Middle (Cao trào/Thắt nút) -> End (Kết thúc/Mở nút)",
          "Climax -> Resolution -> Setup",
          "Ending -> Conflict -> Beginning",
          "Intro -> Outro -> Ending"
        ],
        correct: 0,
        explanation: "Cấu trúc 3 phần chuẩn gồm: Beginning (Giới thiệu) -> Middle (Thử thách, xung đột) -> End (Hóa giải vấn đề và kết bài)."
      },
      {
        question: "Giai đoạn nào trong quy trình làm phim đảm nhận việc tạo chuyển động cơ thể, bước đi và biểu cảm cho các nhân vật?",
        options: [
          "Diễn hoạt (Animation)",
          "Viết kịch bản văn học (Scriptwriting)",
          "Thu âm tiếng động (Sound Recording)",
          "Soạn hợp đồng bản quyền"
        ],
        correct: 0,
        explanation: "Animation (Diễn hoạt) là công đoạn biến các hình vẽ nhân vật tĩnh thành các cử động chuyển động sống động trên màn ảnh."
      },
      {
        question: "Phần mềm Toontastic được thiết kế bởi Google hỗ trợ học sinh thực hiện điều gì vượt trội nhất?",
        options: [
          "Kể chuyện hoạt hình 3D tương tác nhanh chóng bằng cách kéo thả diễn hoạt và ghi âm trực tiếp",
          "Lập trình hệ điều hành Windows từ đầu",
          "Thiết kế mạch in vi điện tử công nghiệp",
          "Gõ công thức hóa học hữu cơ"
        ],
        correct: 0,
        explanation: "Toontastic là công cụ trực quan tuyệt vời cho học sinh tự sáng tác câu chuyện hoạt hình, tự điều khiển nhân vật diễn xuất và thu âm giọng nói trực tiếp."
      }
    ]
  },
  {
    lessonNum: 7,
    id: "bai-7",
    topicNum: 2,
    topicName: "Chuyên đề 2: Phần mềm làm phim hoạt hình (Toontastic)",
    title: "Bài 7: Thiết kế nhân vật hoạt hình",
    tag: "Character Design",
    objectives: [
      "Khám phá thư viện nhân vật phong phú trong phần mềm hoạt hình và các đặc trưng tính cách hình thể.",
      "Tùy biến nhân vật có sẵn: Thay đổi màu da, màu áo, phụ kiện và biểu cảm khuôn mặt sinh động.",
      "Sử dụng công cụ cọ vẽ tự do (Draw Your Own) để tự thiết kế nhân vật hoạt hình mang đậm phong cách cá nhân.",
      "Hiểu về cấu trúc khớp xương (Rigging) cơ bản giúp nhân vật có thể cử động linh hoạt tay chân và đầu cổ."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-user-astronaut"></i> Nguyên tắc tạo hình nhân vật (Character Design)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Hình khối tâm lý:</strong> Hình tròn (thân thiện, hiền lành, dễ thương); Hình vuông/chữ nhật (vững chãi, đáng tin cậy, mạnh mẽ); Hình tam giác nhọn (nhanh nhẹn hoặc phản diện, nguy hiểm).</li>
            <li><strong>Bảng màu đặc trưng:</strong> Nhân vật chính diện thường mang gam màu sáng, ấm áp; nhân vật bí ẩn mang màu sẫm lạnh.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-paintbrush"></i> Công cụ 'Draw Your Own'
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Brush & Fill Tool:</strong> Vẽ nét viền và đổ màu mảng da, quần áo.</li>
            <li><strong>Tạo hình 3D tự động:</strong> Phần mềm sẽ tự động đùn khối (extrude) hình vẽ 2D thành nhân vật 3D có chiều sâu thể tích.</li>
            <li><strong>Gán khớp chuyển động:</strong> Hệ thống tự động nhận diện khớp nối để nhân vật có thể đi lại, nhảy nhót.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Chọn nhân vật từ thư viện hoặc tạo mới",
        content: "Tại màn hình chọn diễn viên (Cast), chọn nhân vật có sẵn -> Nhấp vào biểu tượng <strong>cây cọ vẽ (Paintbrush)</strong> để tùy biến màu sắc."
      },
      {
        title: "Bước 2: Tự vẽ nhân vật độc quyền (Draw your own)",
        content: "Nhấp vào ô <strong>Draw Your Own</strong> -> Sử dụng bút vẽ phác thảo đầu, thân, tay chân -> Dùng thùng sơn đổ màu trang phục theo ý muốn."
      },
      {
        title: "Bước 3: Hoàn tất mô hình 3D cho nhân vật",
        content: "Nhấn nút <strong>Next (Mũi tên xanh)</strong> -> Điều chỉnh thanh trượt độ dày khối 3D -> Đặt tên cho nhân vật và nhấn nút V để đưa vào phim trường."
      }
    ],
    practice: "Thiết kế một nhân vật bạn siêu nhân hoặc một chú robot bảo vệ môi trường bằng tính năng 'Draw Your Own', phối màu hài hòa và thử nghiệm chuyển động tay chân của nhân vật.",
    quizzes: [
      {
        question: "Trong nghệ thuật thiết kế nhân vật hoạt hình, hình khối tròn (Circle) thường truyền tải tính cách gì?",
        options: [
          "Thân thiện, dễ thương, hiền lành và ấm áp",
          "Nham hiểm, độc ác và nguy hiểm",
          "Nghiêm khắc, cứng nhắc và lạnh lùng",
          "Khô khan và bí ẩn"
        ],
        correct: 0,
        explanation: "Các đường cong và khối tròn luôn tạo cảm giác mềm mại, vô hại, an toàn và dễ mến (ví dụ: Doremon, Baymax, Pooh)."
      },
      {
        question: "Tính năng 'Draw Your Own' trong Toontastic cho phép học sinh làm gì?",
        options: [
          "Tự vẽ hình nhân vật 2D bằng nét vẽ tay và phần mềm tự động biến đổi thành mô hình 3D cử động được",
          "Chỉ cho phép viết chữ chứ không cho vẽ hình",
          "In trực tiếp bức vẽ ra máy in laser",
          "Sao chép ảnh chụp từ thẻ nhớ mà không cần vẽ"
        ],
        correct: 0,
        explanation: "Tính năng Draw Your Own cho phép người dùng tự do vẽ hình nhân vật bằng tay, sau đó hệ thống tạo khối 3D và tự sinh khung xương chuyển động."
      },
      {
        question: "Để thay đổi màu tóc hoặc trang phục của một nhân vật có sẵn trong danh mục, ta nhấp vào biểu tượng nào?",
        options: [
          "Biểu tượng cây cọ vẽ (Paintbrush)",
          "Biểu tượng thùng rác (Delete)",
          "Biểu tượng ống nhòm",
          "Biểu tượng chìa khóa"
        ],
        correct: 0,
        explanation: "Nhấp vào biểu tượng cây cọ vẽ trên nhân vật sẽ đưa bạn vào màn hình tùy biến màu sắc chi tiết."
      },
      {
        question: "Kỹ thuật gắn các điểm xoay bản lề mô phỏng xương và khớp cho nhân vật trong hoạt hình kỹ thuật số được gọi là gì?",
        options: [
          "Rigging (Khung xương ảo)",
          "Rendering",
          "Keyframing",
          "Storyboarding"
        ],
        correct: 0,
        explanation: "Rigging là quá trình thiết lập hệ thống khung xương và các khớp cử động cho nhân vật đồ họa 2D/3D."
      }
    ]
  },
  {
    lessonNum: 8,
    id: "bai-8",
    topicNum: 2,
    topicName: "Chuyên đề 2: Phần mềm làm phim hoạt hình (Toontastic)",
    title: "Bài 8: Thực hành sản xuất phim hoạt hình",
    tag: "Acting & Directing",
    objectives: [
      "Bố trí sân khấu và vị trí xuất hiện của các diễn viên nhân vật theo đúng kịch bản phân cảnh.",
      "Thực hiện kỹ thuật đạo diễn tương tác: Chạm giữ và di chuyển nhân vật trực tiếp trên màn hình theo thời gian thực.",
      "Kích hoạt các hoạt cảnh cử động đặc thù (Gestures/Actions) của từng nhân vật chỉ bằng 1 cú chạm nhẹ (Tap).",
      "Khám phá các yếu tố tương tác ẩn trong bối cảnh nền sân khấu (Interactive Background Assets)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-person-walking"></i> Điều khiển diễn xuất nhân vật (Puppeteering)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Chạm và kéo (Drag):</strong> Giúp nhân vật bước đi, chạy nhảy, bay lượn trên sân khấu.</li>
            <li><strong>Chạm nhẹ (Tap):</strong> Làm nhân vật vẫy tay, cười lớn, ngạc nhiên, tung cú đấm hoặc biến hình.</li>
            <li><strong>Kẹp hai ngón tay (Pinch to Zoom):</strong> Thu phóng góc máy quay toàn cảnh hoặc cận cảnh kịch tính.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-gamepad"></i> Tương tác với bối cảnh sân khấu
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Nhiều bối cảnh có sẵn các công tắc bí mật: Bấm vào đèn để bật/tắt, bấm vào cửa sổ tàu vũ trụ để mở cửa, bấm vào núi lửa để phun dung nham.</li>
            <li>Đạo cụ đạo diễn: Xe hơi có thể chở nhân vật, tàu ngầm có thể lặn dưới đáy đại dương.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Sắp đặt đội hình xuất phát",
        content: "Kéo các nhân vật vào các vị trí ban đầu phía cánh gà hoặc góc sân khấu theo đúng ý đồ kịch bản."
      },
      {
        title: "Bước 2: Bấm nút ghi hình 'Start' và đếm ngược",
        content: "Nhấn nút đỏ <strong>Start</strong> trên cùng màn hình -> Hệ thống đếm ngược <em>3... 2... 1... Action!</em> -> Bắt đầu quá trình diễn xuất."
      },
      {
        title: "Bước 3: Điều khiển chuyển động và kết thúc cảnh",
        content: "Vừa di chuyển nhân vật vừa diễn hoạt các hành động tương tác phù hợp -> Khi diễn xong cảnh, nhấn nút đỏ hình tròn <strong>Stop</strong> ở góc trên bên phải."
      }
    ],
    practice: "Thực hành ghi lại một cảnh diễn hoạt 20 giây: Một nhân vật đi từ cửa lớp vào bàn học, gặp bạn và vẫy tay chào hỏi vui vẻ.",
    quizzes: [
      {
        question: "Trong phần mềm Toontastic, thao tác nào làm cho nhân vật thực hiện một hành động biểu cảm cụ thể (như cười, nhảy, vẫy tay)?",
        options: [
          "Chạm nhẹ (Tap) vào nhân vật",
          "Kéo rê nhân vật ra khỏi mép màn hình",
          "Lắc mạnh máy tính",
          "Nhấn phím F12"
        ],
        correct: 0,
        explanation: "Chạm nhẹ (Tap) vào nhân vật trong Toontastic sẽ kích hoạt các hoạt cảnh tương tác riêng biệt của nhân vật đó."
      },
      {
        question: "Nút lệnh nào kích hoạt quá trình ghi hình và diễn hoạt thời gian thực của cảnh phim?",
        options: [
          "Nút Start (màu đỏ)",
          "Nút Reset (màu xám)",
          "Nút Back (mũi tên quay lui)",
          "Nút Help (?)"
        ],
        correct: 0,
        explanation: "Nút Start màu đỏ trên thanh công cụ sẽ đếm ngược 3-2-1 và bắt đầu ghi hình toàn bộ chuyển động cùng âm thanh."
      },
      {
        question: "Khi cần di chuyển nhân vật từ vị trí này sang vị trí khác trên sân khấu, thao tác chuẩn là gì?",
        options: [
          "Nhấn giữ chuột/ngón tay vào nhân vật và kéo rê (Drag) đến vị trí mới",
          "Gõ tọa độ X và Y bằng bàn phím số",
          "Bấm đúp chuột 10 lần liên tục",
          "Vào menu File -> Move"
        ],
        correct: 0,
        explanation: "Bạn chỉ cần chạm giữ và kéo rê nhân vật trên màn hình cảm ứng hoặc dùng chuột kéo rê để tạo chuyển động trực quan."
      },
      {
        question: "Khi kết thúc một cảnh diễn xuất hoạt hình, bạn nhấn vào nút nào để lưu cảnh?",
        options: [
          "Nút Stop (hình tròn màu đỏ góc trên bên phải)",
          "Nút Exit thoát ứng dụng",
          "Nút tắt nguồn máy tính",
          "Nhấn phím Spacebar 3 lần"
        ],
        correct: 0,
        explanation: "Nhấn nút Stop màu đỏ để dừng việc ghi hình cảnh hiện tại và chuyển sang bước phối nhạc cảm xúc."
      }
    ]
  },
  {
    lessonNum: 9,
    id: "bai-9",
    topicNum: 2,
    topicName: "Chuyên đề 2: Phần mềm làm phim hoạt hình (Toontastic)",
    title: "Bài 9: Tạo các nguồn dữ liệu khác nhau cho phim hoạt hình",
    tag: "Audio & Assets",
    objectives: [
      "Hiểu tầm quan trọng mang tính quyết định của âm thanh, giọng nói và nhạc nền đối với cảm xúc khán giả.",
      "Kỹ thuật thu âm lồng tiếng (Voice Acting): Điều chỉnh ngữ điệu, âm lượng, tốc độ nói theo tâm trạng nhân vật.",
      "Lựa chọn và phối nhạc nền theo trạng thái cảm xúc (Mood Music): Hồi hộp (Suspenseful), Vui nhộn (Happy), Buồn bã (Melancholy), Hùng tráng (Triumphant).",
      "Khai thác và tích hợp các nguồn ảnh nền tùy chỉnh (Custom Backdrops) do học sinh tự vẽ hoặc chụp thực tế."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-microphone-lines"></i> Nghệ thuật lồng tiếng (Voice Acting)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Khoảng cách micro:</strong> Đặt micro cách miệng 15-20 cm, tránh phả hơi gió tạo tiếng rè 'pop'.</li>
            <li><strong>Hóa thân nhân vật:</strong> Giọng nhân vật nhí nhảnh cần cao giọng, giọng robot cần đều và ngắt nhịp dứt khoát.</li>
            <li><strong>Khớp khẩu hình và chuyển động:</strong> Lời thoại cất lên đồng bộ với hành động nhảy múa hoặc gật đầu của nhân vật.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-music"></i> Nhạc nền theo cảm xúc (Mood Music)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Toontastic tích hợp thanh trượt cảm xúc: <em>Energetic (Năng động)</em>, <em>Spooky (Ma quái/Bí hiểm)</em>, <em>Heartwarming (Ấm áp)</em>.</li>
            <li>Kéo thanh trượt để thử nghiệm cường độ giai điệu sao cho ăn khớp hoàn hảo với diễn biến kịch bản.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Bật cấp quyền Micro và thu âm khi diễn hoạt",
        content: "Khi bắt đầu bấm <em>Start</em>, micro tích hợp sẽ tự động thu âm giọng nói của bạn tương ứng với các hành động của nhân vật trên màn hình."
      },
      {
        title: "Bước 2: Lựa chọn phong cách nhạc nền (Mood Selector)",
        content: "Sau khi bấm Stop, màn hình <em>Pick a Soundtrack</em> xuất hiện -> Nhấp vào các thẻ cảm xúc (Happy, Spooky, Intense, Fun) để nghe thử."
      },
      {
        title: "Bước 3: Cân đối âm lượng nhạc nền và lời thoại",
        content: "Sử dụng thanh gạt âm lượng bên dưới để chỉnh nhạc nền nền nã, tránh lấn át tiếng nói của nhân vật."
      }
    ],
    practice: "Thực hành lồng tiếng cho một đoạn hội thoại giữa 2 nhân vật (ví dụ: Bạn học sinh quên mang vở và được bạn thân cho mượn), sau đó chọn bản nhạc nền mang sắc thái 'Heartwarming/Happy'.",
    quizzes: [
      {
        question: "Yếu tố nào giúp người xem thấu hiểu được tính cách, suy nghĩ và cảm xúc nội tâm của nhân vật hoạt hình một cách trực tiếp nhất?",
        options: [
          "Giọng nói lồng tiếng kết hợp biểu cảm và nhạc nền",
          "Số lượng pixel của màn hình máy tính",
          "Độ phân giải của chuột máy tính",
          "Dung lượng bộ nhớ RAM của điện thoại"
        ],
        correct: 0,
        explanation: "Giọng nói lồng tiếng truyền cảm cùng âm nhạc và hiệu ứng âm thanh là linh hồn tạo nên sức sống và cảm xúc cho phim hoạt hình."
      },
      {
        question: "Nếu một cảnh phim hoạt hình miêu tả cảnh nhân vật đi lạc vào lâu đài cổ hoang vắng lúc nửa đêm, bản nhạc nền nào là phù hợp nhất?",
        options: [
          "Nhạc mang cảm xúc Bí hiểm, hồi hộp (Spooky/Suspenseful)",
          "Nhạc đám cưới sôi động",
          "Nhạc thiếu nhi vui nhộn ăn kem",
          "Nhạc nhảy disco tốc độ nhanh"
        ],
        correct: 0,
        explanation: "Bối cảnh lâu đài cổ hoang vắng cần âm nhạc mang sắc thái bí ẩn, hồi hộp (Spooky) để tạo cảm giác tò mò, kịch tính."
      },
      {
        question: "Trong Toontastic, quá trình thu âm giọng nói của học sinh diễn ra vào thời điểm nào?",
        options: [
          "Diễn ra đồng thời ngay trong lúc học sinh đang bấm Start và điều khiển nhân vật diễn xuất",
          "Phải thu riêng trước 1 tháng rồi gửi qua email",
          "Chỉ được thu âm sau khi đã xuất bản video thành phẩm ra ổ cứng",
          "Phần mềm chỉ có tiếng robot chứ không cho người thật thu âm"
        ],
        correct: 0,
        explanation: "Toontastic ghi âm trực tiếp lời thoại qua micro ngay trong thời gian thực khi bạn đang kéo rê nhân vật trên sân khấu."
      },
      {
        question: "Để lời thoại nhân vật nghe rõ ràng nhất, ta nên điều chỉnh âm lượng nhạc nền như thế nào?",
        options: [
          "Chỉnh nhạc nền ở mức độ vừa phải để tôn lên giọng đọc và không bị lấn át lời thoại",
          "Vặn nhạc nền to tối đa 100% để át hết tiếng nói",
          "Tắt hoàn toàn micro",
          "Chỉ để tiếng còi xe inh ỏi"
        ],
        correct: 0,
        explanation: "Quy tắc phối âm luôn ưu tiên độ rõ của lời thoại (dialogue), nhạc nền cần được tiết chế ở mức vừa phải làm nền tôn cảm xúc."
      }
    ]
  },
  {
    lessonNum: 10,
    id: "bai-10",
    topicNum: 2,
    topicName: "Chuyên đề 2: Phần mềm làm phim hoạt hình (Toontastic)",
    title: "Bài 10: Ra mắt phim hoạt hình của em",
    tag: "Post-production & Showcase",
    objectives: [
      "Hoàn thiện các phân cảnh còn lại của câu chuyện (Beginning, Middle, End) tạo thành mạch phim logic liền mạch.",
      "Thêm tiêu đề đầu phim (Title), tên đạo diễn, họa sĩ tạo hình và danh đề kết thúc (Credits).",
      "Kết xuất (Export) dự án phim ra tệp video chuẩn MP4 lưu trữ vào thư viện thiết bị.",
      "Tổ chức buổi công chiếu phim ngắn trong nhóm/lớp học, trình bày ý tưởng sáng tạo và tiếp thu nhận xét đánh giá."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-award"></i> Danh đề đoàn làm phim (Credits)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Title Screen:</strong> Tên bộ phim ấn tượng, phông chữ phù hợp thể loại (hài hước, phiêu lưu, viễn tưởng).</li>
            <li><strong>Directed by:</strong> Ghi rõ họ tên đạo diễn (học sinh/nhóm tác giả thực hiện).</li>
            <li><strong>Credits:</strong> Tri ân người hướng dẫn, cảm ơn khán giả và thông điệp gửi gắm.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-share-nodes"></i> Xuất bản & Đánh giá Rubrics
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Export Video:</strong> Nhấn nút Finish -> Nhập tên phim -> Chọn Export để máy kết xuất tệp MP4.</li>
            <li><strong>Tiêu chí đánh giá sản phẩm:</strong> Ý tưởng sáng tạo (30%), Diễn xuất mượt mà (30%), Âm thanh lời thoại rõ ràng (25%), Tính thẩm mỹ & hợp tác nhóm (15%).</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Rà soát toàn bộ chuỗi các phân cảnh",
        content: "Xem lại toàn bộ 3 phân đoạn trên thanh Storyboard -> Nếu phân cảnh nào chưa ưng ý có thể nhấp chọn để ghi hình lại (Re-record)."
      },
      {
        title: "Bước 2: Nhấn Finish và đặt tên phim",
        content: "Nhấp vào nút <strong>Finish</strong> màu xanh ở góc trên -> Nhập <em>Title (Tên phim)</em> và <em>Director (Tên đạo diễn)</em>."
      },
      {
        title: "Bước 3: Xuất file video MP4 ra thư viện",
        content: "Nhấn nút <strong>Export</strong> -> Chờ máy tính kết xuất video hoàn chỉnh vào mục Photos/Videos -> Sẵn sàng chiếu trên máy chiếu của lớp."
      }
    ],
    practice: "Hoàn tất việc kết xuất một bộ phim hoạt hình ngắn 3 phân cảnh với chủ đề 'Ước mơ nghề nghiệp tương lai của em', chuẩn bị lời giới thiệu 1 phút trước cả lớp.",
    quizzes: [
      {
        question: "Để hoàn tất toàn bộ các phân cảnh và tiến hành xuất bản bộ phim hoạt hình trong Toontastic, ta nhấn vào nút nào?",
        options: [
          "Nút Finish",
          "Nút Cancel",
          "Nút Delete All",
          "Nút Pause"
        ],
        correct: 0,
        explanation: "Nút Finish màu xanh hoàn tất quy trình sản xuất và đưa bạn đến màn hình nhập tiêu đề và xuất file video."
      },
      {
        question: "Định dạng video thành phẩm phổ biến nhất sau khi xuất bản phim để có thể phát mượt mà trên mọi thiết bị điện thoại, máy tính là gì?",
        options: [
          "MP4",
          "EXE",
          "DOCX",
          "TXT"
        ],
        correct: 0,
        explanation: "Định dạng MP4 là chuẩn video nén kỹ thuật số phổ biến toàn cầu, tương thích hoàn hảo với mọi trình duyệt, TV và điện thoại."
      },
      {
        question: "Mục 'Director' trong phần thông tin mở đầu phim thể hiện điều gì?",
        options: [
          "Tên của đạo diễn / người sáng tạo chính thực hiện bộ phim",
          "Tên của rạp chiếu phim ngoài đời thực",
          "Số hiệu của card màn hình máy tính",
          "Tên hãng sản xuất chuột máy tính"
        ],
        correct: 0,
        explanation: "Director nghĩa là Đạo diễn – người chỉ đạo diễn xuất và định hình toàn bộ phong cách của tác phẩm."
      },
      {
        question: "Khi đánh giá chất lượng một bộ phim hoạt hình học đường, tiêu chí nào thể hiện rõ nhất thông điệp giáo dục?",
        options: [
          "Ý nghĩa cốt truyện và thông điệp nhân văn truyền tải qua kịch bản",
          "Số lượng nhân vật xuất hiện càng nhiều càng tốt",
          "Thời lượng phim bắt buộc phải dài trên 3 tiếng",
          "Phải dùng máy tính cấu hình đắt nhất"
        ],
        correct: 0,
        explanation: "Nội dung câu chuyện sâu sắc, nhân văn và bổ ích là thước đo quan trọng hàng đầu của một sản phẩm hoạt hình học tập."
      }
    ]
  },

  // ==========================================
  // CHUYÊN ĐỀ 3: THỰC HÀNH SỬ DỤNG PHẦN MỀM CHỈNH SỬA ẢNH (GIMP)
  // ==========================================
  {
    lessonNum: 11,
    id: "bai-11",
    topicNum: 3,
    topicName: "Chuyên đề 3: Phần mềm chỉnh sửa ảnh & Ảnh động (GIMP)",
    title: "Bài 11: Thao tác với các lớp ảnh",
    tag: "Layers & Masks",
    objectives: [
      "Hiểu sâu sắc khái niệm lớp ảnh (Layer) – 'linh hồn' của mọi phần mềm xử lý ảnh chuyên nghiệp.",
      "Thực hiện thành thạo các thao tác lớp trong bảng điều khiển Layers (Ctrl + L): Tạo lớp mới, nhân đôi lớp (Duplicate), xóa lớp, đổi tên và sắp xếp thứ tự hiển thị.",
      "Làm chủ độ trong suốt (Opacity) và các chế độ hòa trộn màu (Blend Modes): Normal, Multiply, Screen, Overlay.",
      "Ứng dụng mặt nạ lớp (Layer Mask) để tẩy xóa, hòa trộn các chi tiết hình ảnh mà không phá hủy ảnh gốc."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-layer-group"></i> Bản chất của Lớp ảnh (Layers)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Tưởng tượng mỗi layer như một tấm kính trong suốt xếp chồng lên nhau. Nội dung ở layer trên sẽ che khuất nội dung ở layer dưới cùng vị trí.</li>
            <li>Biểu tượng <strong>Con mắt:</strong> Bật/tắt hiển thị layer trên màn hình.</li>
            <li>Biểu tượng <strong>Khóa:</strong> Khóa layer tránh vô tình chỉnh sửa.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-mask"></i> Mặt nạ lớp (Layer Mask)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Màu Trắng:</strong> Vùng ảnh hiển thị rõ ràng 100%.</li>
            <li><strong>Màu Đen:</strong> Vùng ảnh bị che giấu/trong suốt.</li>
            <li><strong>Màu Xám:</strong> Vùng ảnh mờ ảo nửa kín nửa hở, giúp ghép ảnh mượt mà không lộ mép cắt.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Mở tệp ảnh và bật bảng quản lý Layers",
        content: "Mở GIMP -> Nhấn <strong>Ctrl + O</strong> mở ảnh gốc -> Nếu chưa thấy bảng Layers bên tay phải, nhấn <strong>Ctrl + L</strong>."
      },
      {
        title: "Bước 2: Thêm lớp mới và đổi chế độ hòa trộn",
        content: "Nhấp vào biểu tượng <em>Create a new layer</em> ở đáy bảng Layers -> Đổi tên lớp -> Vẽ chi tiết ánh sáng -> Chọn Mode: <strong>Overlay</strong> hoặc <strong>Screen</strong> để tạo hiệu ứng phát sáng."
      },
      {
        title: "Bước 3: Ghép 2 ảnh mượt mà với Layer Mask",
        content: "Nhấp chuột phải vào layer trên -> Chọn <strong>Add Layer Mask (White)</strong> -> Dùng cọ vẽ mềm màu đen tô lên vùng cần làm mờ chuyển tiếp."
      }
    ],
    practice: "Mở 2 bức ảnh: Một ảnh phong cảnh thiên nhiên và một ảnh chân dung của em. Sử dụng kỹ thuật Layer Mask để ghép bức ảnh chân dung lồng hòa quyện vào phong cảnh nghệ thuật.",
    quizzes: [
      {
        question: "Phím tắt để mở nhanh bảng quản lý Lớp ảnh (Layers Dialog) trong GIMP là gì?",
        options: [
          "Ctrl + L",
          "Ctrl + B",
          "Ctrl + Shift + P",
          "Ctrl + Alt + M"
        ],
        correct: 0,
        explanation: "Ctrl + L là phím tắt mở bảng điều khiển Layers trong GIMP."
      },
      {
        question: "Khi sử dụng mặt nạ lớp (Layer Mask), việc dùng cọ vẽ màu ĐEN tô lên mặt nạ sẽ gây ra hiệu ứng gì?",
        options: [
          "Làm cho vùng ảnh tại vị trí đó trở nên trong suốt (bị ẩn đi)",
          "Làm cho vùng ảnh đó sáng rực lên thành màu trắng",
          "Làm nhân đôi toàn bộ bức ảnh",
          "Tự động xóa vĩnh viễn tệp ảnh khỏi ổ đĩa"
        ],
        correct: 0,
        explanation: "Quy tắc kinh điển của Layer Mask: 'White reveals, Black conceals' (Trắng thì hiện ra, Đen thì che giấu đi thành trong suốt)."
      },
      {
        question: "Chế độ hòa trộn (Blend Mode) nào thường được sử dụng để làm sáng ảnh và lọc bỏ các mảng màu đen?",
        options: [
          "Screen",
          "Multiply",
          "Darken",
          "Color Burn"
        ],
        correct: 0,
        explanation: "Chế độ Screen làm sáng các pixel và triệt tiêu sắc đen, rất hay dùng để ghép hiệu ứng tia lửa, ánh sao hoặc vệt sáng."
      },
      {
        question: "Để tạm thời ẩn một lớp ảnh mà không cần phải xóa nó, ta nhấp vào biểu tượng nào trên dòng của lớp đó?",
        options: [
          "Biểu tượng con mắt (Eye icon)",
          "Biểu tượng chiếc bút chì",
          "Biểu tượng dây xích",
          "Biểu tượng dấu gạch chéo"
        ],
        correct: 0,
        explanation: "Nhấp vào biểu tượng con mắt sẽ ẩn hoặc hiện layer tương ứng."
      }
    ]
  },
  {
    lessonNum: 12,
    id: "bai-12",
    topicNum: 3,
    topicName: "Chuyên đề 3: Phần mềm chỉnh sửa ảnh & Ảnh động (GIMP)",
    title: "Bài 12: Tạo ảnh động",
    tag: "Animated GIF Basics",
    objectives: [
      "Hiểu nguyên lý thị giác lưu ảnh trên võng mạc (Persistence of Vision) tạo nên cảm giác chuyển động từ chuỗi ảnh tĩnh.",
      "Nắm vững cơ chế tạo ảnh động trong GIMP: Mỗi một Lớp ảnh (Layer) đại diện cho một Khung hình (Frame) chuyển động.",
      "Sử dụng công cụ phát thử ảnh động tích hợp trong GIMP (Filters -> Animation -> Playback).",
      "Thực hành xuất bản tệp ảnh động định dạng GIF tiêu chuẩn với tùy chọn 'As Animation'."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-film"></i> Nguyên lý Frame-by-Frame trong GIMP
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Thứ tự phát: GIMP đọc khung hình từ <strong>dưới lên trên</strong> (Bottom layer = Frame 1, Top layer = Final frame).</li>
            <li>Định dạng GIF: Giới hạn tối đa 256 màu, rất tối ưu cho ảnh đồ họa, meme, banner mạng xã hội và sticker vui nhộn.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-play"></i> Xem thử hoạt ảnh (Animation Playback)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Menu: <strong>Filters -> Animation -> Playback...</strong></li>
            <li>Hộp thoại cho phép: Play, Stop, Bước từng frame (Step), điều chỉnh tốc độ phát (Playback speed: 0.5x, 1x, 2x).</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Tạo các lớp đại diện cho từng khung hình",
        content: "Tạo tệp mới 400x400 px -> Vẽ một quả bóng ở vị trí cao trên Layer 1 -> Nhân đôi layer (Duplicate Layer) -> Dùng công cụ Move dịch chuyển quả bóng rơi dần xuống trên Layer 2, Layer 3, Layer 4."
      },
      {
        title: "Bước 2: Xem trước hoạt ảnh chuyển động",
        content: "Vào menu <strong>Filters -> Animation -> Playback...</strong> -> Nhấp nút <strong>Play</strong> để quan sát quả bóng nảy tưng tưng."
      },
      {
        title: "Bước 3: Xuất khẩu tệp ảnh động GIF",
        content: "Vào <strong>File -> Export As (Shift + Ctrl + E)</strong> -> Đặt tên tệp có đuôi <em>.gif</em> -> Tích chọn ô kiểm <strong>As animation</strong> -> Nhấn <strong>Export</strong>."
      }
    ],
    practice: "Tạo một ảnh động GIF đơn giản gồm 4 khung hình mô tả đèn tín hiệu giao thông lần lượt chuyển màu từ Đỏ -> Vàng -> Xanh và xem trước qua công cụ Playback.",
    quizzes: [
      {
        question: "Trong phần mềm GIMP, yếu tố nào đóng vai trò tương ứng là một khung hình (Frame) của ảnh động?",
        options: [
          "Mỗi một Lớp ảnh (Layer)",
          "Mỗi một kênh màu (Channel)",
          "Mỗi một thư mục trong máy tính",
          "Mỗi một lần nhấn phím Enter"
        ],
        correct: 0,
        explanation: "Trong GIMP, cấu trúc ảnh động GIF được xây dựng theo nguyên tắc: mỗi Layer tương ứng với một Frame (khung hình)."
      },
      {
        question: "Thứ tự phát các khung hình ảnh động mặc định trong GIMP diễn ra theo chiều nào?",
        options: [
          "Từ lớp dưới cùng (Bottom layer) lên lớp trên cùng (Top layer)",
          "Từ lớp trên cùng xuống lớp dưới cùng",
          "Ngẫu nhiên không theo quy tắc nào",
          "Chỉ phát duy nhất lớp đang được chọn"
        ],
        correct: 0,
        explanation: "GIMP tuần tự phát các khung hình bắt đầu từ layer đáy (dưới cùng) dần lên đến layer trên cùng."
      },
      {
        question: "Menu nào trong GIMP cung cấp tính năng phát thử (Playback) hoạt cảnh ảnh động trước khi xuất file?",
        options: [
          "Filters -> Animation -> Playback...",
          "Edit -> Preferences",
          "Image -> Mode",
          "View -> Zoom In"
        ],
        correct: 0,
        explanation: "Lệnh Filters -> Animation -> Playback... mở trình phát để bạn kiểm tra chuyển động và tốc độ khung hình."
      },
      {
        question: "Khi lưu hoặc xuất tệp ảnh động GIF từ GIMP, tùy chọn bắt buộc nào phải được tích chọn để ảnh chuyển động được?",
        options: [
          "As animation",
          "Interlace",
          "Save background color",
          "GIF comment only"
        ],
        correct: 0,
        explanation: "Phải tích chọn ô 'As animation' trong hộp thoại Export Image as GIF, nếu không GIMP sẽ gộp tất cả các layer thành một tấm ảnh tĩnh duy nhất."
      }
    ]
  },
  {
    lessonNum: 13,
    id: "bai-13",
    topicNum: 3,
    topicName: "Chuyên đề 3: Phần mềm chỉnh sửa ảnh & Ảnh động (GIMP)",
    title: "Bài 13: Điều chỉnh thời gian trễ và tạo chữ động",
    tag: "Frame Delay & Kinetic Typography",
    objectives: [
      "Hiểu rõ khái niệm thời gian trễ khung hình (Frame Delay tính bằng mili-giây, ms) và tầm ảnh hưởng đến nhịp điệu ảnh động.",
      "Thiết lập thời gian trễ riêng cho từng khung hình bằng cách đổi tên Layer với cú pháp chuẩn: `Tên_Lớp (xxx ms)`.",
      "Phân biệt hai chế độ xử lý khung hình (Frame Disposal): Chế độ thay thế `(replace)` và Chế độ kết hợp chồng đè `(combine)`.",
      "Thiết kế hiệu ứng chữ nhấp nháy hoặc chữ chuyển màu sinh động cho các banner quảng cáo sự kiện."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-stopwatch"></i> Cú pháp đặt tên Layer chuyên nghiệp
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Ví dụ: <code>Frame 1 (500ms) (replace)</code> -> Khung hình dừng lại đúng 0.5 giây rồi xóa hẳn để hiển thị khung hình sau.</li>
            <li>1 giây = 1000 ms. Thời gian trễ càng nhỏ thì chuyển động càng nhanh; thời gian trễ lớn tạo điểm dừng cho mắt đọc chữ.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-code-compare"></i> Replace vs Combine Mode
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>(replace):</strong> Khung hình mới thay thế hoàn toàn khung hình trước (không để lại tàn tích).</li>
            <li><strong>(combine):</strong> Khung hình mới vẽ đè lên khung hình cũ (rất phù hợp với hiệu ứng chữ xuất hiện dần từng từ một mà không cần vẽ lại nền).</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Tạo các khung hình chứa nội dung văn bản tăng dần",
        content: "Tạo layer nền tĩnh -> Tạo Layer 'CHÀO MỪNG' -> Duplicate thêm Layer 'CHÀO MỪNG BẠN' -> Duplicate thêm Layer 'CHÀO MỪNG BẠN ĐẾN VỚI CODEHUB'."
      },
      {
        title: "Bước 2: Cài đặt thời gian dừng đọc cho từng dòng chữ",
        content: "Nhấp đúp chuột vào tên các layer để sửa: Đặt tên <code>Frame 1 (400ms) (combine)</code>, <code>Frame 2 (400ms) (combine)</code> và khung cuối cùng <code>Frame 3 (1500ms) (replace)</code> để người xem đọc kịp câu khẩu hiệu."
      },
      {
        title: "Bước 3: Xuất GIF và kiểm tra nhịp điệu",
        content: "Vào <strong>File -> Export As</strong> -> Chọn GIF -> Mục <em>Frame disposal</em> chọn <em>One frame per layer (replace)</em> -> Xuất tệp."
      }
    ],
    practice: "Tạo một ảnh động banner GIF kích thước 600x150 px với dòng chữ 'HỘI KHỎE PHÙ ĐỔNG 2026' nhấp nháy đổi màu 3 sắc thái (Đỏ, Vàng, Xanh lá) với thời gian trễ mỗi nhịp là 300 ms.",
    quizzes: [
      {
        question: "Cú pháp chuẩn trong tên lớp của GIMP để quy định khung hình dừng lại hiển thị trong 1 giây trước khi chuyển tiếp là gì?",
        options: [
          "(1000ms)",
          "(1s)",
          "(1000m)",
          "[delay=1]"
        ],
        correct: 0,
        explanation: "GIMP nhận diện đơn vị mili-giây đặt trong dấu ngoặc tròn, ví dụ: (1000ms) tương đương đúng 1 giây."
      },
      {
        question: "Chế độ khung hình '(replace)' có ý nghĩa gì đối với chuyển động ảnh động?",
        options: [
          "Khung hình hiện tại sẽ thay thế hoàn toàn khung hình trước đó (xóa sạch khung trước)",
          "Khung hình hiện tại sẽ vẽ đè chồng lên nội dung của khung hình trước",
          "Khung hình sẽ tự động đảo ngược màu sắc",
          "Khung hình sẽ biến thành video YouTube"
        ],
        correct: 0,
        explanation: "Chế độ (replace) sẽ dọn sạch khung hình cũ trước khi hiển thị khung hình mới, tránh hiện tượng bóng ma bị chồng lấn hình."
      },
      {
        question: "1 giây tương đương với bao nhiêu mili-giây (ms)?",
        options: [
          "1000 ms",
          "100 ms",
          "60 ms",
          "10000 ms"
        ],
        correct: 0,
        explanation: "1 giây = 1000 mili-giây (milliseconds)."
      },
      {
        question: "Khi thiết kế ảnh động chữ xuất hiện dần từng chữ một (Typewriter effect) trên nền tranh tĩnh, chế độ xử lý khung hình nào tiện lợi nhất?",
        options: [
          "(combine)",
          "(replace)",
          "(delete)",
          "(blur)"
        ],
        correct: 0,
        explanation: "Chế độ (combine) vẽ đè các nét chữ mới lên nền của các frame trước mà không cần phải sao chép lại toàn bộ phông nền ở mỗi frame."
      }
    ]
  },
  {
    lessonNum: 14,
    id: "bai-14",
    topicNum: 3,
    topicName: "Chuyên đề 3: Phần mềm chỉnh sửa ảnh & Ảnh động (GIMP)",
    title: "Bài 14: Tạo hiệu ứng cho ảnh động",
    tag: "Animation Filters & VFX",
    objectives: [
      "Khám phá sức mạnh tự động hóa của các bộ lọc hoạt ảnh tích hợp sẵn trong menu Filters -> Animation của GIMP.",
      "Sử dụng bộ lọc Blend để tự động tạo các khung hình chuyển màu hoặc biến hình mờ dần (Crossfade / Morphing) mượt mà.",
      "Ứng dụng bộ lọc Burn-In tạo hiệu ứng chữ cháy sáng rực rỡ và Ripple tạo sóng nước dập dềnh cho ảnh động.",
      "Tạo quả địa cầu quay 3D từ ảnh bản đồ phẳng thông qua bộ lọc Spinning Globe."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-wand-magic-sparkles"></i> Các bộ lọc Animation kỳ diệu trong GIMP
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Blend:</strong> Tự động tính toán và sinh ra N khung hình trung gian chuyển tiếp mềm giữa các layer.</li>
            <li><strong>Spinning Globe:</strong> Cuộn một tấm ảnh phẳng thành quả cầu 3D đang tự quay quanh trục với số khung hình tùy chọn.</li>
            <li><strong>Ripples:</strong> Tạo hiệu ứng gợn sóng lan tỏa như giọt nước rơi xuống mặt hồ phẳng.</li>
            <li><strong>Burn-In:</strong> Hiệu ứng chữ bị đốt cháy phát sáng điện ảnh.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-microchip"></i> Tự động hóa sinh Frame
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Bạn chỉ cần vẽ 2 layer khởi đầu và kết thúc, bộ lọc sẽ tự động sinh ra hàng chục layer trung gian chuẩn xác tới từng độ sáng pixel.</li>
            <li>Sau khi chạy bộ lọc, GIMP sẽ tự động mở ra một cửa sổ tệp mới chứa toàn bộ các frame đã được tính toán sẵn thời gian trễ.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Chuẩn bị 2 lớp hình ảnh đối lập",
        content: "Mở 2 ảnh có cùng kích thước, đặt ở 2 layer khác nhau (ví dụ: Layer 1 là cảnh ban ngày, Layer 2 là cảnh hoàng hôn)."
      },
      {
        title: "Bước 2: Chạy bộ lọc biến hình mềm Blend",
        content: "Vào menu <strong>Filters -> Animation -> Blend...</strong> -> Nhập <em>Intermediate frames: 5</em> (số khung hình trung gian) -> Bấm <strong>OK</strong>."
      },
      {
        title: "Bước 3: Thưởng thức và xuất bản",
        content: "Quan sát cửa sổ mới được tạo ra gồm chuỗi frame chuyển mờ ảo diệu -> Vào <strong>Filters -> Animation -> Playback</strong> để xem thử -> Xuất ra file GIF."
      }
    ],
    practice: "Sử dụng bộ lọc Filters -> Animation -> Spinning Globe để biến một tấm ảnh bản đồ thế giới phẳng thành quả địa cầu quay 3D mượt mà gồm 16 khung hình.",
    quizzes: [
      {
        question: "Bộ lọc nào trong menu Filters -> Animation tự động tạo ra các khung hình trung gian hòa tan mờ dần giữa các lớp ảnh?",
        options: [
          "Blend...",
          "Spinning Globe...",
          "Burn-In...",
          "Waves..."
        ],
        correct: 0,
        explanation: "Bộ lọc Blend tự động sinh các khung hình trung gian (In-between frames) tạo hiệu ứng hòa trộn chuyển cảnh mượt mà."
      },
      {
        question: "Bộ lọc 'Spinning Globe' biến một bức tranh phẳng thành hiệu ứng gì?",
        options: [
          "Quả cầu 3D hình địa cầu đang quay tròn quanh trục",
          "Một trang sách đang mở",
          "Một ngọn lửa đang bốc cháy",
          "Một vũng nước đang bốc hơi"
        ],
        correct: 0,
        explanation: "Spinning Globe cuộn tròn ảnh 2D thành hình cầu 3D và tạo chuỗi frame xoay tròn liên tục mô phỏng quả cầu quay."
      },
      {
        question: "Sau khi thực thi một bộ lọc Animation trong GIMP, kết quả thường xuất hiện ở đâu?",
        options: [
          "GIMP tự động tạo ra một cửa sổ hình ảnh mới chứa chuỗi các layer khung hình hoàn chỉnh",
          "Ghi đè trực tiếp và xóa mất tệp ảnh gốc vĩnh viễn",
          "Xuất thẳng ra máy in giấy",
          "Gửi tệp đính kèm qua bưu điện"
        ],
        correct: 0,
        explanation: "GIMP luôn bảo vệ tệp gốc bằng cách sinh kết quả chuỗi frame hoạt ảnh trong một cửa sổ làm việc mới riêng biệt."
      },
      {
        question: "Khi tăng số lượng 'Intermediate frames' (khung hình trung gian) trong bộ lọc Blend lên cao, kết quả sẽ như thế nào?",
        options: [
          "Chuyển động mượt mà hơn nhưng dung lượng tệp GIF sẽ tăng lên tương ứng",
          "Chuyển động sẽ bị giật cục và tối sầm",
          "Tệp ảnh sẽ bị lỗi không mở được",
          "Màu sắc chuyển hết về đen trắng"
        ],
        correct: 0,
        explanation: "Càng nhiều khung hình trung gian thì chuyển tiếp thị giác càng êm và mịn, tuy nhiên dung lượng tệp lưu trữ sẽ nặng hơn."
      }
    ]
  },
  {
    lessonNum: 15,
    id: "bai-15",
    topicNum: 3,
    topicName: "Chuyên đề 3: Phần mềm chỉnh sửa ảnh & Ảnh động (GIMP)",
    title: "Bài 15: Thực hành biên tập ảnh động",
    tag: "Optimization & Final Product",
    objectives: [
      "Vận dụng toàn diện các kỹ năng layer, chữ động, thời gian trễ và bộ lọc để tạo sản phẩm ảnh động hoàn chỉnh phục vụ thực tế.",
      "Tối ưu hóa dung lượng tệp ảnh động GIF thông qua công cụ Optimize (for GIF) giúp tệp nhẹ, tải nhanh trên website học đường.",
      "Biết cách cắt gọt kích thước (Crop Tool) và thu nhỏ kích cỡ tệp ảnh phù hợp tiêu chuẩn hiển thị trang web hoặc mạng xã hội.",
      "Thiết kế trọn gói: Một nhãn dán Sticker biểu cảm học đường hoặc Banner quảng bá Hội thi Tin học trẻ."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-compress"></i> Kỹ thuật tối ưu hóa ảnh động (Optimize for GIF)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Lệnh: <strong>Filters -> Animation -> Optimize (for GIF)</strong>.</li>
            <li>Nguyên lý thông minh: GIMP sẽ quét và chỉ lưu lại những pixel có sự thay đổi giữa các frame liên tiếp; những vùng ảnh tĩnh giống nhau sẽ được cắt bỏ hoặc thay bằng vùng trong suốt.</li>
            <li>Kết quả: Giảm dung lượng tệp từ 40% đến 70% mà mắt thường không nhận thấy sự suy giảm chất lượng.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-cloud-arrow-up"></i> Tiêu chuẩn xuất bản Web & Mạng xã hội
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Dung lượng khuyến nghị cho banner web học đường: Dưới 1MB - 2MB.</li>
            <li>Tùy chọn <em>Loop forever</em>: Đảm bảo ảnh động lặp lại tuần hoàn vô tận không bị dừng sau lần chạy đầu tiên.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Thiết kế chuỗi các khung hình hoàn chỉnh",
        content: "Bố cục banner kích thước 468x60 px hoặc sticker 300x300 px -> Sắp xếp các layer chuyển động logic với thời gian trễ hợp lý."
      },
      {
        title: "Bước 2: Tối ưu dung lượng bằng bộ lọc chuyên dụng",
        content: "Vào menu <strong>Filters -> Animation -> Optimize (for GIF)</strong> -> Hệ thống sẽ tính toán và sinh ra bản nén tối ưu."
      },
      {
        title: "Bước 3: Xuất khẩu sản phẩm cuối cùng",
        content: "Chọn <strong>File -> Export As</strong> -> Chọn <em>GIF image</em> -> Đảm bảo tích chọn <strong>As animation</strong> và <strong>Loop forever</strong> -> Bấm <strong>Export</strong>."
      }
    ],
    practice: "Thiết kế một bộ Sticker động GIF 3 khung hình diễn tả biểu cảm chúc mừng sinh nhật hoặc cổ vũ thi đua học tốt ('Cố lên nhé!', '10 điểm!', 'Xuất sắc!') và tối ưu dung lượng dưới 500 KB.",
    quizzes: [
      {
        question: "Lệnh nào trong GIMP giúp giảm mạnh dung lượng tệp ảnh động GIF bằng cách loại bỏ các pixel trùng lặp giữa các khung hình?",
        options: [
          "Filters -> Animation -> Optimize (for GIF)",
          "Filters -> Blur -> Gaussian Blur",
          "Image -> Duplicate",
          "File -> Revert"
        ],
        correct: 0,
        explanation: "Lệnh Optimize (for GIF) phân tích các frame và chỉ lưu lại các pixel khác biệt, giúp tệp ảnh động nhẹ đi đáng kể."
      },
      {
        question: "Tùy chọn 'Loop forever' trong hộp thoại xuất tệp GIF có ý nghĩa gì?",
        options: [
          "Ảnh động sẽ tự động lặp lại liên tục vô tận khi được phát",
          "Ảnh chỉ chạy một lần duy nhất rồi đứng im mãi mãi",
          "Ảnh sẽ tự động xóa sau 24 giờ",
          "Ảnh chỉ phát khi được nối mạng Internet"
        ],
        correct: 0,
        explanation: "Loop forever đảm bảo ảnh động GIF lặp tuần hoàn liên tục không bao giờ ngừng."
      },
      {
        question: "Đâu là giải pháp hiệu quả nhất để giảm dung lượng của một tệp ảnh động GIF khi tệp quá nặng?",
        options: [
          "Giảm kích thước chiều rộng/cao của ảnh (Resize Canvas) và áp dụng bộ lọc Optimize (for GIF)",
          "Tăng gấp đôi số lượng layer",
          "Đổi tên tệp thành chữ in hoa",
          "Chuyển đổi tệp sang định dạng văn bản DOCX"
        ],
        correct: 0,
        explanation: "Thu nhỏ kích thước điểm ảnh (pixel dimensions) và áp dụng Optimize (for GIF) là 2 cách tối ưu kích cỡ tệp GIF hiệu quả nhất."
      },
      {
        question: "Ứng dụng thực tế phổ biến nhất của ảnh động GIF hiện nay trên Internet là gì?",
        options: [
          "Sticker biểu cảm nhắn tin, meme hài hước và banner quảng cáo trên website",
          "Lưu trữ phim điện ảnh 4K chiếu rạp",
          "Ghi âm giọng hát karaoke",
          "Lưu trữ cơ sở dữ liệu quốc gia"
        ],
        correct: 0,
        explanation: "Ảnh GIF với dung lượng nhẹ và khả năng lặp vô tận là định dạng hoàn hảo cho sticker chat, meme và biểu ngữ banner web."
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
    topicName: "Dự án tổng hợp: Sáng tạo ấn phẩm số học đường",
    title: "Bài 16: Dự án sáng tạo số: Xây dựng bộ nhận diện, Phim hoạt hình giáo dục & Banner động truyền thông",
    tag: "Capstone Project",
    objectives: [
      "Tích hợp liên hoàn chuỗi công cụ đồ họa số: Inkscape (Vẽ vector) + Toontastic (Hoạt hình 3D) + GIMP (Biên tập ảnh động).",
      "Triển khai dự án truyền thông học đường theo nhóm: Lựa chọn chủ đề xã hội (An toàn giao thông, Phòng chống bạo lực học đường, Bảo vệ môi trường xanh, Chuyển đổi số).",
      "Sản xuất trọn gói 3 sản phẩm số: Logo/Sticker vector (Inkscape), Phim hoạt hình ngắn 1 phút (Toontastic), Banner động quảng bá sự kiện (GIMP).",
      "Thuyết trình báo cáo dự án trước hội đồng lớp học và đánh giá chéo theo bảng tiêu chí Rubrics chuyên nghiệp."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-cubes"></i> Bộ sản phẩm bàn giao (Deliverables)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Sản phẩm 1 (Inkscape):</strong> Logo biểu trưng chiến dịch (Vector SVG + PNG trong suốt 300 DPI).</li>
            <li><strong>Sản phẩm 2 (Toontastic):</strong> Phim hoạt hình ngắn 3 hồi kể một tình huống thực tế truyền cảm hứng (Tệp MP4 HD).</li>
            <li><strong>Sản phẩm 3 (GIMP):</strong> Banner GIF động kích thước 728x90 px hoặc 300x250 px quảng bá cho buổi ra mắt phim.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-list-check"></i> Tiêu chuẩn đánh giá Rubrics (100 điểm)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Tính thẩm mỹ & kỹ thuật Inkscape (25đ):</strong> Nét vẽ chuẩn xác, phối màu hài hòa, chữ uốn lượn đúng kỹ thuật.</li>
            <li><strong>Nội dung hoạt hình & diễn hoạt Toontastic (35đ):</strong> Cốt truyện chặt chẽ, diễn xuất tự nhiên, lồng tiếng cảm xúc.</li>
            <li><strong>Kỹ thuật biên tập & tối ưu GIF trong GIMP (20đ):</strong> Chuyển động mượt mà, thời gian trễ hợp lý, tệp nhẹ dưới 1MB.</li>
            <li><strong>Kỹ năng báo cáo & làm việc nhóm (20đ):</strong> Thuyết trình tự tin, phân công nhiệm vụ công bằng, đúng hạn.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Giai đoạn 1: Lập kế hoạch và thiết kế Logo nhận diện (Inkscape)",
        content: "Họp nhóm chọn đề tài -> Phác thảo ý tưởng biểu trưng trên giấy -> Vẽ vector trong Inkscape -> Xuất file SVG gốc và PNG nền trong suốt."
      },
      {
        title: "Giai đoạn 2: Sản xuất phim hoạt hình tuyên truyền (Toontastic)",
        content: "Viết kịch bản chi tiết 3 hồi -> Tạo hình nhân vật bằng công cụ Draw Your Own -> Ghi hình diễn hoạt và lồng tiếng trực tiếp -> Phối nhạc nền cảm xúc -> Xuất video MP4."
      },
      {
        title: "Giai đoạn 3: Biên tập Banner động và Báo cáo tổng kết (GIMP)",
        content: "Mở GIMP, tạo banner động chèn Logo từ Inkscape và các khung hình cắt từ phim hoạt hình -> Áp dụng hiệu ứng chữ nhấp nháy -> Tối ưu hóa dung lượng (Optimize for GIF) -> Trình chiếu báo cáo trước lớp."
      }
    ],
    practice: "Theo nhóm 3-4 học sinh, thực hiện hoàn chỉnh Dự án số học đường theo 3 sản phẩm trên, đóng gói toàn bộ tệp nguồn vào một thư mục chung và chuẩn bị slide thuyết trình 5 phút.",
    quizzes: [
      {
        question: "Dự án học tập tích hợp Tin học ứng dụng lớp 11 kết hợp sức mạnh của 3 công cụ nào?",
        options: [
          "Inkscape (Đồ họa vector), Toontastic (Phim hoạt hình 3D), GIMP (Biên tập ảnh và ảnh động)",
          "Word, Excel, PowerPoint",
          "Pascal, C++, Python",
          "Photoshop bản quyền, 3ds Max, Maya"
        ],
        correct: 0,
        explanation: "Dự án liên hoàn khai thác tối đa năng lực đồ họa vector (Inkscape), diễn hoạt hoạt hình trực quan (Toontastic) và xử lý ảnh động (GIMP)."
      },
      {
        question: "Trong quy trình phối hợp giữa Inkscape và GIMP, định dạng tệp nào là cầu nối lý tưởng nhất để chèn logo từ Inkscape vào ảnh động GIMP mà không bị vệt nền trắng xấu xí?",
        options: [
          "PNG nền trong suốt (Transparent background)",
          "JPEG nén dung lượng thấp",
          "BMP không nén",
          "TXT tài liệu văn bản"
        ],
        correct: 0,
        explanation: "Xuất từ Inkscape sang định dạng PNG có nền trong suốt cho phép đặt logo lên bất kỳ khung nền nào trong GIMP một cách hoàn hảo."
      },
      {
        question: "Bảng tiêu chí đánh giá Rubrics trong dự án học tập mang lại lợi ích gì cho học sinh?",
        options: [
          "Giúp học sinh nắm rõ các mục tiêu chất lượng cần đạt được và tự đánh giá, định hướng sản phẩm của nhóm mình",
          "Chỉ nhằm mục đích trừ điểm học sinh",
          "Thay thế hoàn toàn giáo viên giảng dạy",
          "Không có tác dụng gì trong học tập"
        ],
        correct: 0,
        explanation: "Bảng Rubrics minh bạch hóa các tiêu chí đánh giá, giúp học sinh định hình rõ chất lượng sản phẩm và nâng cao tinh thần tự chủ, hợp tác."
      },
      {
        question: "Yếu tố cốt lõi nào tạo nên sức lan tỏa thành công của một chiến dịch truyền thông học đường số?",
        options: [
          "Thông điệp truyền thông gần gũi, giàu tính nhân văn kết hợp với hình ảnh ấn tượng và câu chuyện hoạt hình truyền cảm hứng",
          "Phải chi thật nhiều tiền quảng cáo trên truyền hình",
          "Chỉ cần làm một tệp văn bản dài 50 trang",
          "Càng nhiều chữ nhỏ li ti càng tốt"
        ],
        correct: 0,
        explanation: "Một thông điệp ý nghĩa, ngắn gọn, xúc động được thể hiện qua các ấn phẩm thị giác đẹp mắt và sinh động luôn là chìa khóa chạm tới trái tim người xem."
      }
    ]
  }
];

module.exports = lessons;
