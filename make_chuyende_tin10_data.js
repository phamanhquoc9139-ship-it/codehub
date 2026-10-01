// make_chuyende_tin10_data.js
// 14 Detailed Lessons & 56 Quizzes for Chuyên đề học tập Tin học 10 - Định hướng Tin học ứng dụng (KNTT - GDPT 2018)

const lessons = [
  // ==========================================
  // CHUYÊN ĐỀ 1: THỰC HÀNH LÀM VIỆC VỚI CÁC TỆP VĂN BẢN (MS WORD NÂNG CAO)
  // ==========================================
  {
    id: "bai-1",
    lessonNum: 1,
    topicNum: 1,
    topicName: "Chuyên đề 1: Làm việc với tệp văn bản",
    tag: "Định dạng & Cấu trúc",
    title: "Bài 1: Lập dàn ý và định dạng văn bản nâng cao với Styles, Multilevel List & Headings",
    objectives: [
      "Hiểu rõ tầm quan trọng của việc tổ chức cấu trúc phân cấp thông tin trong tài liệu dài.",
      "Tạo lập và áp dụng thành thạo các kiểu định dạng có sẵn (Heading 1, 2, 3) và định nghĩa Styles mới.",
      "Thiết lập danh sách phân cấp tự động (Multilevel List) gắn liền với hệ thống Headings.",
      "Chuẩn hóa thể thức văn bản hành chính theo quy định nhà nước (Nghị định 30/2020/NĐ-CP)."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-layer-group text-blue-600"></i> Tầm quan trọng của Styles trong văn bản chuyên nghiệp
          </h4>
          <p>
            Khi soạn thảo tài liệu nhiều trang (báo cáo dự án, khóa luận, đề tài nghiên cứu), việc định dạng thủ công từng đoạn tiêu đề sẽ tốn thời gian và dễ sai lệch. <strong>Styles</strong> là tập hợp các thiết lập định dạng (phông chữ, cỡ chữ, màu sắc, khoảng cách đoạn) được đặt tên và lưu lại để áp dụng đồng loạt.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-list-ol text-blue-500"></i> 1. Hệ thống phân cấp Headings
            </h5>
            <ul class="text-xs sm:text-sm space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>Heading 1:</strong> Tiêu đề mức cao nhất (Chương, Phần, Mục lớn).</li>
              <li><strong>Heading 2:</strong> Tiêu đề cấp 2 (Mục con thuộc Heading 1).</li>
              <li><strong>Heading 3:</strong> Tiêu đề cấp 3 (Tiểu mục nhỏ hơn).</li>
              <li><strong>Normal:</strong> Nội dung văn bản thông thường.</li>
            </ul>
            <p class="text-xs text-blue-600 dark:text-blue-400 mt-2 font-semibold">
              Mẹo: Nhấn <code>Ctrl + Alt + 1</code> (Heading 1), <code>Ctrl + Alt + 2</code> (Heading 2) để gán nhanh!
            </p>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-sitemap text-indigo-500"></i> 2. Liên kết Multilevel List với Headings
            </h5>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              Để đánh số tự động dạng 1., 1.1, 1.1.1:
            </p>
            <ol class="text-xs space-y-1 list-decimal pl-4 text-gray-600 dark:text-gray-300">
              <li>Vào tab <strong>Home &rarr; Multilevel List &rarr; Define New Multilevel List</strong>.</li>
              <li>Chọn từng cấp độ (Level 1, 2, 3), bấm <em>More &gt;&gt;</em>.</li>
              <li>Tại mục <strong>Link level to style</strong>, chọn tương ứng <em>Heading 1</em>, <em>Heading 2</em>...</li>
              <li>Số thứ tự sẽ tự động cập nhật khi bạn thêm hoặc xóa bớt đề mục!</li>
            </ol>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-2 text-sm flex items-center gap-2">
            <i class="fa-solid fa-scale-balanced text-amber-500"></i> Chuẩn văn bản hành chính Việt Nam (Nghị định 30/2020/NĐ-CP)
          </h5>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div class="p-2.5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <span class="text-gray-500 block text-[11px]">Khổ giấy</span>
              <strong class="text-gray-900 dark:text-white">A4 (210 x 297mm)</strong>
            </div>
            <div class="p-2.5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <span class="text-gray-500 block text-[11px]">Phông chữ</span>
              <strong class="text-gray-900 dark:text-white">Times New Roman</strong>
            </div>
            <div class="p-2.5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <span class="text-gray-500 block text-[11px]">Cỡ chữ nội dung</span>
              <strong class="text-gray-900 dark:text-white">13pt - 14pt</strong>
            </div>
            <div class="p-2.5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <span class="text-gray-500 block text-[11px]">Canh lề (T/B/L/R)</span>
              <strong class="text-gray-900 dark:text-white">20-25 / 20-25 / 30-35 / 15-20 mm</strong>
            </div>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 border border-blue-200/80 dark:border-blue-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-laptop-code"></i> Thực hành bài tập 1: Xây dựng đề cương báo cáo số
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Yêu cầu:</strong> Mở tệp Word mới, thiết lập khổ giấy A4, lề chuẩn (Trên 2cm, Dưới 2cm, Trái 3cm, Phải 2cm). Tạo đề cương báo cáo 3 cấp độ:</p>
          <ul class="list-disc pl-4 space-y-1 font-mono text-xs text-blue-700 dark:text-blue-300">
            <li>1. TỔNG QUAN VỀ TRÍ TUỆ NHÂN TẠO (Heading 1)</li>
            <li>1.1. Lịch sử hình thành và phát triển (Heading 2)</li>
            <li>1.1.1. Giai đoạn sơ khai thập niên 1950 (Heading 3)</li>
            <li>1.2. Các ứng dụng tiêu biểu trong đời sống (Heading 2)</li>
          </ul>
        </div>
      </div>
    `,
    summary: "Việc sử dụng Heading Styles kết hợp Multilevel List là nền tảng cốt lõi giúp văn bản có cấu trúc phân cấp mạch lạc, tự động cập nhật số thứ tự và sẵn sàng tạo mục lục tự động.",
    quizzes: [
      {
        question: "Lợi ích lớn nhất của việc sử dụng các Heading Styles (Heading 1, 2, 3) thay vì định dạng thủ công là gì?",
        options: [
          "Giúp tài liệu có cấu trúc phân cấp rõ ràng, dễ dàng đồng bộ định dạng và tạo mục lục tự động",
          "Làm cho dung lượng tệp tin Word nhẹ đi một nửa",
          "Tự động chuyển đổi tài liệu sang ngôn ngữ tiếng Anh",
          "Giúp văn bản không bị ai sao chép được"
        ],
        correct: 0,
        explanation: "Heading Styles tạo cấu trúc logic phân cấp cho tài liệu, phục vụ điều hướng (Navigation Pane) và sinh mục lục tự động."
      },
      {
        question: "Phím tắt chuẩn trong Microsoft Word để gán nhanh style 'Heading 1' cho một đoạn văn bản là gì?",
        options: ["Ctrl + Alt + 1", "Ctrl + Shift + H", "Alt + Shift + 1", "Ctrl + 1"],
        correct: 0,
        explanation: "Tổ hợp phím tắt Ctrl + Alt + 1 gán Heading 1, Ctrl + Alt + 2 gán Heading 2, Ctrl + Alt + 3 gán Heading 3."
      },
      {
        question: "Theo quy chuẩn thể thức văn bản hành chính Việt Nam (Nghị định 30/2020/NĐ-CP), lề trái trang giấy A4 cần đặt kích thước bao nhiêu?",
        options: [
          "Từ 30 mm đến 35 mm (3.0 - 3.5 cm) để chừa gáy đóng tập",
          "Từ 10 mm đến 15 mm",
          "Đúng 5 mm",
          "Từ 45 mm đến 50 mm"
        ],
        correct: 0,
        explanation: "Lề trái luôn rộng nhất (30-35mm) để chừa mép gáy cho việc đóng bìa kẹp tài liệu mà không che mất chữ."
      },
      {
        question: "Để đánh số thứ tự phân cấp tự động liên kết chặt chẽ với các mức Heading, ta chọn công cụ nào trên Ribbon?",
        options: ["Multilevel List (trong nhóm Paragraph)", "Numbering đơn cấp", "Bullets hình tròn", "Strikethrough"],
        correct: 0,
        explanation: "Multilevel List (danh sách đa cấp) cho phép liên kết từng Level với từng Style Heading tương ứng."
      }
    ]
  },

  {
    id: "bai-2",
    lessonNum: 2,
    topicNum: 1,
    topicName: "Chuyên đề 1: Làm việc với tệp văn bản",
    tag: "Đồ họa & Trình bày",
    title: "Bài 2: Trình bày văn bản chuyên nghiệp với hình ảnh, bố cục nâng cao & Wrap Text",
    objectives: [
      "Chèn và tối ưu hóa hình ảnh: Cắt xén (Crop), chỉnh tông màu, hiệu ứng mỹ thuật (Artistic Effects).",
      "Làm chủ 6 chế độ bao quanh văn bản (Wrap Text) để bố trí hình ảnh hài hòa bên cạnh chữ.",
      "Tạo chú thích tự động (Caption) cho hình ảnh và thiết lập liên kết chéo (Cross-reference).",
      "Giảm dung lượng tài liệu chứa nhiều ảnh bằng tính năng nén ảnh (Compress Pictures)."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-image text-blue-600"></i> Xử lý và bố cục hình ảnh trong văn bản số
          </h4>
          <p>
            Hình ảnh minh họa trực quan giúp tài liệu trở nên sinh động và truyền tải thông điệp nhanh gấp 60.000 lần so với chữ viết thuần túy. Tuy nhiên, nếu không nắm vững kỹ thuật <strong>Wrap Text</strong> và căn lề, tài liệu sẽ bị vỡ khung hoặc nhảy dòng lộn xộn.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-border-all text-blue-500"></i> Các chế độ Wrap Text (Bao quanh chữ)
            </h5>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>In Line with Text:</strong> Ảnh coi như 1 ký tự trong dòng (mặc định, dễ kiểm soát dòng).</li>
              <li><strong>Square:</strong> Chữ bao quanh ảnh tạo thành khung chữ nhật vuông vắn.</li>
              <li><strong>Tight:</strong> Chữ ôm sát theo đường viền thực tế của đối tượng ảnh.</li>
              <li><strong>Top and Bottom:</strong> Chữ tách rời phía trên và phía dưới ảnh, hai bên để trống.</li>
              <li><strong>Behind / In Front of Text:</strong> Ảnh nằm chìm dưới nền hoặc nổi đè lên chữ.</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-quote-right text-indigo-500"></i> Đánh số chú thích ảnh tự động (Caption)
            </h5>
            <ol class="text-xs space-y-1 list-decimal pl-4 text-gray-600 dark:text-gray-300">
              <li>Nhấp chuột phải vào ảnh &rarr; chọn <strong>Insert Caption...</strong></li>
              <li>Tại mục <em>Label</em>, chọn <strong>Hình</strong> hoặc tạo nhãn mới <em>Hình ảnh</em>.</li>
              <li>Nhập nội dung chú thích (ví dụ: <em>Hình 1.1: Sơ đồ kiến trúc vi xử lý</em>).</li>
              <li>Lợi ích: Số thứ tự hình tự động nhảy khi bạn chèn thêm hình ảnh ở giữa tài liệu!</li>
            </ol>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 border border-blue-200/80 dark:border-blue-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-wand-magic-sparkles"></i> Thực hành bài tập 2: Thiết kế trang báo công nghệ
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Chèn 1 bức ảnh minh họa sản phẩm công nghệ vào đoạn văn giới thiệu. Đặt chế độ <strong>Square</strong>, chỉnh ảnh nằm ở góc phải trên. Áp dụng hiệu ứng viền <em>Simple Frame White</em>, chèn Caption tự động <em>Hình 1: Thiết bị thông minh</em> và căn giữa chú thích dưới ảnh.</p>
        </div>
      </div>
    `,
    summary: "Nắm vững Wrap Text giúp kiểm soát hoàn toàn vị trí tương đối giữa hình ảnh và văn bản; tính năng Insert Caption giúp quản lý danh mục hình ảnh khoa học và tự động.",
    quizzes: [
      {
        question: "Chế độ Wrap Text nào cho phép các dòng chữ bao quanh sát đường viền tự nhiên của một hình ảnh đã xóa phông?",
        options: ["Tight", "In Line with Text", "Top and Bottom", "Behind Text"],
        correct: 0,
        explanation: "Chế độ 'Tight' giúp chữ lượn sát theo viền đối tượng, tạo bố cục mềm mại và nghệ thuật."
      },
      {
        question: "Khi nhấp chuột phải vào ảnh và chọn 'Insert Caption', mục đích chính là gì?",
        options: [
          "Tạo chú thích tự động có đánh số thứ tự cho hình ảnh để dễ quản lý và lập danh mục",
          "Xóa nền của bức ảnh",
          "Nén ảnh để gửi qua email",
          "Khóa tài liệu không cho chỉnh sửa ảnh"
        ],
        correct: 0,
        explanation: "Insert Caption giúp tự động đánh số Hình 1, Hình 2... và cho phép sinh Table of Figures (danh mục hình)."
      },
      {
        question: "Để giảm dung lượng tệp tin Word chứa hàng chục bức ảnh dung lượng cao, ta sử dụng tính năng nào?",
        options: [
          "Picture Format &rarr; Compress Pictures",
          "Review &rarr; Translate",
          "Insert &rarr; Bookmark",
          "Home &rarr; Replace"
        ],
        correct: 0,
        explanation: "Compress Pictures giảm độ phân giải của các ảnh trong tài liệu xuống mức vừa đủ xem/in ấn, làm tệp tin nhẹ đi nhiều lần."
      },
      {
        question: "Muốn đặt ảnh chìm xuống phía dưới để dòng chữ hiển thị nổi rõ ràng bên trên bề mặt ảnh, ta chọn kiểu Wrap Text nào?",
        options: ["Behind Text", "In Front of Text", "Through", "Square"],
        correct: 0,
        explanation: "'Behind Text' đẩy ảnh xuống lớp dưới cùng, lớp chữ sẽ nằm đè lên trên ảnh (tương tự như hình mờ watermark)."
      }
    ]
  },

  {
    id: "bai-3",
    lessonNum: 3,
    topicNum: 1,
    topicName: "Chuyên đề 1: Làm việc với tệp văn bản",
    tag: "Đồ họa thông tin",
    title: "Bài 3: Trình bày văn bản với hình khối (Shapes), SmartArt và hộp văn bản (Text Box)",
    objectives: [
      "Vẽ và tùy biến các hình khối (Shapes) để thiết kế sơ đồ khối, lưu đồ thuật toán chuyên nghiệp.",
      "Sử dụng đồ họa thông minh SmartArt để trực quan hóa quy trình, phân cấp tổ chức và ma trận dữ liệu.",
      "Thiết kế hộp văn bản (Text Box) dạng Callout / Pull Quote để làm nổi bật các điểm nhấn quan trọng.",
      "Sử dụng thành thạo các thao tác: Căn gióng lề (Align), Phân phối khoảng cách đều (Distribute) và Nhóm đối tượng (Group)."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-diagram-project text-blue-600"></i> Đồ họa thông tin trong tài liệu kỹ thuật
          </h4>
          <p>
            Các tài liệu kỹ thuật, kế hoạch kinh doanh hoặc báo cáo dự án thường cần thể hiện các quy trình phức tạp. <strong>SmartArt</strong> và <strong>Shapes</strong> cho phép học sinh biến đổi những đoạn văn dài dòng thành các sơ đồ trực quan dễ hiểu chỉ trong vài thao tác.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-shapes text-blue-500"></i> 1. SmartArt Graphics
            </h5>
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Các nhóm sơ đồ SmartArt thông dụng:</p>
            <ul class="text-xs space-y-1 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>List / Process:</strong> Danh sách, quy trình từng bước tuần tự.</li>
              <li><strong>Cycle:</strong> Chu trình lặp lại khép kín (ví dụ chu trình phát triển phần mềm).</li>
              <li><strong>Hierarchy:</strong> Sơ đồ tổ chức phân cấp cây, sơ đồ lớp đối tượng.</li>
              <li><strong>Relationship / Matrix:</strong> Mối quan hệ tương hỗ, ma trận SWOT.</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-object-group text-indigo-500"></i> 2. Kỹ thuật căn chỉnh và Group
            </h5>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li>Giữ phím <code>Shift</code> và click lần lượt vào các hình để chọn nhiều hình cùng lúc.</li>
              <li>Vào <strong>Shape Format &rarr; Align</strong> để gióng thẳng hàng: <em>Align Left, Align Center, Align Top</em>.</li>
              <li>Chọn <em>Distribute Horizontally / Vertically</em> để chia đều khoảng cách giữa các khối.</li>
              <li>Bấm <strong>Group (Ctrl + G)</strong> để liên kết thành 1 khối duy nhất không bị xô lệch khi di chuyển.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 border border-blue-200/80 dark:border-blue-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-pen-nib"></i> Thực hành bài tập 3: Vẽ sơ đồ cấu trúc máy tính điện tử
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Sử dụng SmartArt dạng <strong>Hierarchy</strong> hoặc tự vẽ bằng các khối <strong>Rounded Rectangle</strong> kết nối bằng mũi tên để thiết kế sơ đồ luồng dữ liệu giữa: <em>Thiết bị vào (Input) &rarr; CPU (ALU + CU) &rarr; Bộ nhớ trong/ngoài &rarr; Thiết bị ra (Output)</em>. Tiến hành Group toàn bộ sơ đồ lại.</p>
        </div>
      </div>
    `,
    summary: "SmartArt giúp chuyển tải thông tin dưới dạng sơ đồ logic thông minh; thao tác Align, Distribute và Group là kỹ năng sống còn để bản vẽ luôn ngay ngắn và không bị xô lệch bố cục.",
    quizzes: [
      {
        question: "Muốn mô tả một chu trình khép kín lặp lại theo thời gian (ví dụ chu kỳ xử lý thông tin), nhóm SmartArt nào phù hợp nhất?",
        options: ["Cycle", "Hierarchy", "Pyramid", "Matrix"],
        correct: 0,
        explanation: "Nhóm 'Cycle' biểu diễn các quy trình lặp đi lặp lại thành một vòng tuần hoàn khép kín."
      },
      {
        question: "Phím tắt chuẩn trong Word để nhóm nhiều hình vẽ (Shapes) rời rạc thành một đối tượng duy nhất là gì?",
        options: ["Ctrl + G", "Ctrl + B", "Ctrl + K", "Ctrl + Shift + N"],
        correct: 0,
        explanation: "Tổ hợp Ctrl + G (Group) nhóm các hình đã chọn lại với nhau để di chuyển hoặc phóng to thu nhỏ đồng thời."
      },
      {
        question: "Để chọn đồng thời nhiều hình khối nằm phân tán trên trang văn bản, ta giữ phím nào trong khi nhấp chuột?",
        options: ["Phím Shift (hoặc Ctrl)", "Phím Alt", "Phím Tab", "Phím Caps Lock"],
        correct: 0,
        explanation: "Giữ Shift hoặc Ctrl cho phép nhấp chuột chọn liên tiếp nhiều đối tượng đồ họa khác nhau."
      },
      {
        question: "Tính năng 'Distribute Horizontally' trong menu Align có tác dụng gì?",
        options: [
          "Tự động chia đều khoảng cách nằm ngang giữa các đối tượng được chọn",
          "Xoay hình nằm ngang 90 độ",
          "Kéo dài hình theo chiều ngang",
          "Lật ngược hình từ trái qua phải"
        ],
        correct: 0,
        explanation: "Distribute Horizontally phân bố khoảng cách giữa các mép đối tượng theo chiều ngang đều tăm tắp."
      }
    ]
  },

  {
    id: "bai-4",
    lessonNum: 4,
    topicNum: 1,
    topicName: "Chuyên đề 1: Làm việc với tệp văn bản",
    tag: "Mục lục & Xuất bản",
    title: "Bài 4: Phân vùng tài liệu (Sections), tạo Mục lục tự động (TOC) & Xuất bản tài liệu",
    objectives: [
      "Phân biệt ngắt trang (Page Break) và ngắt phân vùng (Section Break: Next Page, Continuous).",
      "Thiết lập đánh số trang khác nhau: Bìa không có số, lời mở đầu (I, II, III), nội dung chính (1, 2, 3...).",
      "Khởi tạo và tùy biến Bảng mục lục tự động (Table of Contents) dựa trên các Styles Heading.",
      "Kiểm tra tính toàn vẹn (Inspect Document) và xuất bản sang định dạng chuẩn PDF chống chỉnh sửa."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-book text-blue-600"></i> Section Break: Chìa khóa quản trị tài liệu dài
          </h4>
          <p>
            Một sai lầm phổ biến là dùng phím <code>Enter</code> nhiều lần để sang trang hoặc chỉ dùng Page Break thông thường. Muốn trang bìa không có số trang, trang mục lục đánh số la mã (i, ii), trang nội dung đánh số tự nhiên (1, 2, 3) hoặc muốn một trang nằm ngang (Landscape) xen kẽ giữa các trang dọc (Portrait), bạn <strong>bắt buộc phải sử dụng Section Break</strong>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-scissors text-blue-500"></i> Các bước ngắt Section và gỡ liên kết
            </h5>
            <ol class="text-xs space-y-1.5 list-decimal pl-4 text-gray-600 dark:text-gray-300">
              <li>Đặt con trỏ ở đầu trang muốn tách phân vùng mới.</li>
              <li>Chọn <strong>Layout &rarr; Breaks &rarr; Section Breaks &rarr; Next Page</strong>.</li>
              <li>Nhấp đúp vào Header/Footer của phân vùng mới, nhấp tắt nút <strong>Link to Previous</strong> (Liên kết với phân vùng trước).</li>
              <li>Vào <strong>Page Number &rarr; Format Page Numbers... &rarr; Start at: 1</strong>.</li>
            </ol>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-list text-indigo-500"></i> Tạo Bảng mục lục tự động (TOC)
            </h5>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li>Đặt con trỏ tại vị trí trang dành cho Mục lục.</li>
              <li>Chọn tab <strong>References &rarr; Table of Contents</strong> &rarr; chọn kiểu mẫu có sẵn (Automatic Table 1/2).</li>
              <li>Khi chỉnh sửa tài liệu, nhấp vào mục lục và bấm <strong>Update Table &rarr; Update entire table</strong> để đồng bộ lại tên mục và số trang.</li>
              <li>Nhấn <code>Ctrl + Click</code> vào bất kỳ đề mục nào trong mục lục để nhảy ngay tới trang đó!</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 border border-blue-200/80 dark:border-blue-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-file-pdf"></i> Thực hành bài tập 4: Đóng gói và xuất bản Báo cáo nghiên cứu
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Tạo tài liệu gồm 3 Section: Section 1 (Trang bìa - không số trang), Section 2 (Trang Lời mở đầu & Mục lục - số trang i, ii), Section 3 (Nội dung chính - đánh số từ 1, 2, 3...). Chèn bảng mục lục tự động ở Section 2. Cuối cùng vào <strong>File &rarr; Export &rarr; Create PDF/XPS Document</strong> để xuất bản tệp PDF hoàn chỉnh.</p>
        </div>
      </div>
    `,
    summary: "Section Break phá vỡ ràng buộc Header/Footer giữa các trang; Table of Contents tự động tiết kiệm hàng giờ căn chỉnh số trang thủ công khi chỉnh sửa văn bản.",
    quizzes: [
      {
        question: "Muốn một trang bảng biểu nằm ngang (Landscape) nằm xen kẽ giữa các trang văn bản nằm dọc (Portrait), ta cần chèn gì trước và sau trang đó?",
        options: ["Section Break (Next Page)", "Page Break (Ctrl + Enter)", "Line Break (Shift + Enter)", "Column Break"],
        correct: 0,
        explanation: "Chỉ có Section Break mới cho phép thay đổi hướng giấy (Orientation), lề trang (Margins) và số trang độc lập giữa các vùng."
      },
      {
        question: "Thao tác then chốt nào giúp trang Header/Footer của phân vùng mới không bị lặp lại nội dung của phân vùng trước?",
        options: [
          "Bấm tắt nút 'Link to Previous' trên thanh công cụ Header & Footer",
          "Xóa toàn bộ chữ ở phân vùng trước",
          "Nhấn phím F5 trên bàn phím",
          "Khóa tài liệu bằng mật khẩu"
        ],
        correct: 0,
        explanation: "Nút 'Link to Previous' mặc định bật liên kết; phải bấm tắt nó đi để ngắt sự kế thừa Header/Footer."
      },
      {
        question: "Khi bạn vừa sửa tên một đề mục trong bài viết, làm thế nào để Bảng mục lục tự động cập nhật tên mới?",
        options: [
          "Nhấp chuột phải vào Mục lục &rarr; chọn 'Update Field' &rarr; chọn 'Update entire table'",
          "Xóa mục lục cũ đi và tự gõ lại bằng tay",
          "Lưu tệp và khởi động lại máy tính",
          "Nhấn Ctrl + Z liên tục"
        ],
        correct: 0,
        explanation: "Tính năng Update Field &rarr; Update entire table sẽ rà quét lại toàn bộ tài liệu và cập nhật cả số trang lẫn tiêu đề mới."
      },
      {
        question: "Tại sao khi xuất bản báo cáo chính thức gửi cho đối tác hoặc in ấn, định dạng PDF lại được ưu tiên hàng đầu?",
        options: [
          "Giữ nguyên 100% định dạng phông chữ, bố cục ảnh trên mọi thiết bị và hệ điều hành",
          "Làm cho văn bản tự động có nhạc nền",
          "Cho phép chỉnh sửa chữ dễ dàng hơn Word",
          "Tự động dịch sang tiếng nước ngoài"
        ],
        correct: 0,
        explanation: "Định dạng PDF (Portable Document Format) đảm bảo văn bản hiển thị y hệt trên mọi máy tính, máy in mà không bị lỗi phông."
      }
    ]
  },

  // ==========================================
  // CHUYÊN ĐỀ 2: THỰC HÀNH SỬ DỤNG PHẦN MỀM BẢNG TÍNH (MS EXCEL NÂNG CAO)
  // ==========================================
  {
    id: "bai-5",
    lessonNum: 5,
    topicNum: 2,
    topicName: "Chuyên đề 2: Phần mềm bảng tính",
    tag: "Chuẩn hóa & Bảng thông minh",
    title: "Bài 5: Tạo lập dữ liệu ban đầu, chuẩn hóa kiểu dữ liệu & Định dạng bảng (Format as Table)",
    objectives: [
      "Nắm vững các kiểu dữ liệu cốt lõi trong Excel: Number, Text, Date/Time, Boolean.",
      "Xử lý triệt để lỗi định dạng ngày tháng (dd/mm/yyyy vs mm/dd/yyyy) và lỗi số lưu dạng văn bản.",
      "Sử dụng công cụ điền tự động thông minh: AutoFill và Flash Fill (Ctrl + E).",
      "Chuyển đổi dải ô thành Bảng dữ liệu thông minh (Format as Table) và khai thác tính năng tự động tính toán."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-table-cells text-blue-600"></i> Nền tảng dữ liệu sạch trong phân tích kinh doanh
          </h4>
          <p>
            Quy tắc vàng của tin học: <em>"Garbage in, Garbage out"</em> (Dữ liệu đầu vào rác thì kết quả tính toán sẽ sai). Trước khi viết công thức phức tạp, người làm dữ liệu phải biết chuẩn hóa cấu trúc bảng, nhận diện đúng kiểu số, kiểu ngày tháng và áp dụng <strong>Excel Table</strong>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-wand-magic text-blue-500"></i> Phép màu Flash Fill (Ctrl + E)
            </h5>
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">
              Tính năng AI nhận diện mẫu quy luật để tách hoặc gộp dữ liệu tức thì:
            </p>
            <ul class="text-xs space-y-1 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>Tách họ và tên:</strong> Nhập mẫu họ tên của dòng đầu, xuống dòng bấm <code>Ctrl + E</code>, Excel tự động điền toàn bộ cột còn lại.</li>
              <li><strong>Tạo email:</strong> Ghép mã nhân viên với tên miền công ty tự động.</li>
              <li><strong>Chuẩn hóa số điện thoại:</strong> Thêm mã vùng quốc tế hoặc dấu chấm phân cách.</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-table text-indigo-500"></i> Sức mạnh của Format as Table
            </h5>
            <ul class="text-xs space-y-1 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li>Phím tắt chuyển thành bảng: <code>Ctrl + T</code>.</li>
              <li><strong>Tự động mở rộng:</strong> Khi gõ thêm dữ liệu ở dòng cuối, bảng tự động mở rộng vùng và kế thừa công thức.</li>
              <li><strong>Calculated Columns:</strong> Chỉ cần gõ công thức ở 1 ô, toàn bộ cột tự động điền kết quả ngay lập tức!</li>
              <li><strong>Total Row:</strong> Dòng tổng cộng tích hợp sẵn menu chọn hàm SUM, AVERAGE, COUNT...</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 border border-blue-200/80 dark:border-blue-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-calculator"></i> Thực hành bài tập 5: Chuẩn hóa sổ theo dõi bán hàng
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Nhập danh sách 10 khách hàng gồm: <em>Họ và tên đầy đủ, Ngày mua hàng, Số lượng, Đơn giá</em>. Sử dụng <strong>Flash Fill (Ctrl + E)</strong> để tách riêng cột <em>Tên khách hàng</em>. Chuyển bảng sang định dạng <strong>Table Style Medium 2 (Ctrl + T)</strong>, thêm cột <em>Thành tiền = [@Số lượng] * [@Đơn giá]</em> và bật <em>Total Row</em> tính tổng doanh thu.</p>
        </div>
      </div>
    `,
    summary: "Chuẩn hóa dữ liệu ngay từ đầu giúp triệt tiêu các lỗi sai định dạng; Format as Table (Ctrl + T) tự động hóa công thức và mở rộng phạm vi dữ liệu linh hoạt.",
    quizzes: [
      {
        question: "Phím tắt thần thánh trong Excel để kích hoạt tính năng Flash Fill (tự động nhận diện quy luật điền dữ liệu) là gì?",
        options: ["Ctrl + E", "Ctrl + D", "Ctrl + R", "Ctrl + F"],
        correct: 0,
        explanation: "Ctrl + E kích hoạt Flash Fill giúp trích xuất tên, tách số điện thoại hoặc gộp dữ liệu cực nhanh."
      },
      {
        question: "Khi bạn nhập dữ liệu số vào một ô nhưng thấy số đó tự động canh sát LỀ TRÁI của ô, điều đó có ý nghĩa gì?",
        options: [
          "Excel đang hiểu dữ liệu đó là kiểu Văn bản (Text) chứ không phải kiểu Số (Number)",
          "Excel đang báo lỗi tràn bộ nhớ",
          "Số đó có giá trị quá lớn",
          "Ô tính đó bị khóa không cho sửa"
        ],
        correct: 0,
        explanation: "Quy tắc mặc định của Excel: Dữ liệu số canh lề PHẢI, dữ liệu văn bản (Text) canh lề TRÁI."
      },
      {
        question: "Phím tắt nào dùng để chuyển đổi nhanh một vùng ô dữ liệu thành Bảng thông minh (Format as Table)?",
        options: ["Ctrl + T (hoặc Ctrl + L)", "Ctrl + B", "Ctrl + Shift + T", "Alt + T"],
        correct: 0,
        explanation: "Ctrl + T (Table) mở hộp thoại Create Table để biến dải ô thành bảng thông minh."
      },
      {
        question: "Lợi ích nổi bật nhất của cột tính toán (Calculated Column) trong Excel Table là gì?",
        options: [
          "Tự động áp dụng công thức cho toàn bộ các ô trong cột và tự động điền khi thêm dòng mới",
          "Tự động xóa các ô bị lỗi",
          "Tự động in tài liệu ra máy in",
          "Không cho phép người khác nhìn thấy kết quả"
        ],
        correct: 0,
        explanation: "Trong Excel Table, khi bạn viết công thức ở 1 ô thì toàn bộ cột lập tức kế thừa công thức tương ứng."
      }
    ]
  },

  {
    id: "bai-6",
    lessonNum: 6,
    topicNum: 2,
    topicName: "Chuyên đề 2: Phần mềm bảng tính",
    tag: "Biểu mẫu & Hộp kiểm",
    title: "Bài 6: Thiết kế biểu mẫu khách hàng với Data Validation và Hộp kiểm (Check Box)",
    objectives: [
      "Áp dụng quy tắc kiểm tra hợp lệ dữ liệu (Data Validation) để ngăn chặn nhập sai thông tin.",
      "Tạo danh sách lựa chọn thả xuống (Drop-down List) chuyên nghiệp.",
      "Kích hoạt thẻ Developer và chèn điều khiển biểu mẫu: Hộp kiểm (Check Box).",
      "Liên kết trạng thái hộp kiểm (TRUE/FALSE) với ô tính để tự động tính tiền dịch vụ cộng thêm."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-list-check text-blue-600"></i> Tự động hóa và chống nhập sai bằng Biểu mẫu số
          </h4>
          <p>
            Khi nhiều người cùng nhập liệu vào một bảng tính, nguy cơ gõ sai chính tả (ví dụ: "Hà Nội", "ha noi", "HN") là rất cao, khiến các hàm thống kê bị sai lệch. <strong>Data Validation</strong> tạo ra chiếc phễu lọc chặn đứng sai sót ngay tại thời điểm gõ phím.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-caret-down text-blue-500"></i> Tạo Drop-down List bằng Data Validation
            </h5>
            <ol class="text-xs space-y-1.5 list-decimal pl-4 text-gray-600 dark:text-gray-300">
              <li>Chọn vùng ô muốn tạo danh sách lựa chọn.</li>
              <li>Vào tab <strong>Data &rarr; Data Validation</strong>.</li>
              <li>Tại mục <em>Allow</em>, chọn <strong>List</strong>.</li>
              <li>Tại ô <em>Source</em>: Quét chọn dải ô chứa danh mục hoặc gõ trực tiếp các giá trị ngăn cách bởi dấu phẩy (ví dụ: <em>Tiền mặt, Chuyển khoản, Thẻ tín dụng</em>).</li>
              <li>Người dùng chỉ có thể bấm mũi tên chọn mục hợp lệ!</li>
            </ol>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-square-check text-indigo-500"></i> Hộp kiểm (Check Box Form Control)
            </h5>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li>Bật tab <strong>Developer</strong> (File &rarr; Options &rarr; Customize Ribbon &rarr; tích chọn Developer).</li>
              <li>Vào <strong>Insert &rarr; Form Controls &rarr; Check Box</strong>, vẽ lên ô tính.</li>
              <li>Nhấp chuột phải vào hộp kiểm &rarr; <strong>Format Control... &rarr; Cell link</strong> &rarr; trỏ tới 1 ô (ví dụ ô E5).</li>
              <li>Khi tích chọn: Ô E5 trả về giá trị <code>TRUE</code>; khi bỏ tích: Trả về <code>FALSE</code>.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 border border-blue-200/80 dark:border-blue-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-receipt"></i> Thực hành bài tập 6: Thiết kế phiếu đặt hàng thông minh
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Thiết kế phiếu đặt mua máy tính: Cột <em>Hình thức thanh toán</em> dùng Dropdown List (Trả thẳng, Trả góp 0%, Thẻ visa). Tạo 2 Hộp kiểm lựa chọn dịch vụ gia tăng: <em>[ ] Giao hàng hỏa tốc (50.000đ)</em> và <em>[ ] Gói bảo hành vàng 1 năm (200.000đ)</em>. Khi người dùng tích chọn hộp kiểm nào, tổng tiền sẽ tự động cộng thêm phí dịch vụ tương ứng!</p>
        </div>
      </div>
    `,
    summary: "Data Validation đảm bảo tính chuẩn xác và đồng nhất của dữ liệu; Check Box mang lại trải nghiệm tương tác trực quan như các ứng dụng web chuyên nghiệp.",
    quizzes: [
      {
        question: "Muốn giới hạn người dùng chỉ được phép chọn một giá trị có sẵn từ danh sách thả xuống, ta chọn mục nào trong hộp thoại Data Validation?",
        options: ["Allow: List", "Allow: Any value", "Allow: Date", "Allow: Text length"],
        correct: 0,
        explanation: "Chọn 'Allow: List' và cung cấp vùng dữ liệu Source để tạo trình đơn thả xuống (Dropdown)."
      },
      {
        question: "Thẻ (Tab) nào trên thanh Ribbon mặc định bị ẩn đi và cần kích hoạt để sử dụng các Form Controls như Check Box, Button?",
        options: ["Developer", "Formulas", "View", "Add-ins"],
        correct: 0,
        explanation: "Tab Developer chứa các công cụ phát triển, Macro VBA và Form Controls mặc định bị ẩn trong Excel."
      },
      {
        question: "Khi một Hộp kiểm (Check Box) được liên kết (Cell link) với ô A1, nếu người dùng TÍCH CHỌN vào hộp kiểm thì ô A1 sẽ có giá trị gì?",
        options: ["TRUE", "FALSE", "1", "YES"],
        correct: 0,
        explanation: "Hộp kiểm Form Control trả về giá trị logic TRUE khi được chọn và FALSE khi bỏ chọn."
      },
      {
        question: "Tính năng nào của Data Validation cho phép hiển thị một thông báo hướng dẫn màu vàng ngay khi người dùng bấm chuột vào ô tính?",
        options: ["Input Message", "Error Alert", "Clear All", "Settings"],
        correct: 0,
        explanation: "Thẻ 'Input Message' hiển thị ghi chú hướng dẫn nhắc người dùng nhập đúng định dạng khi kích hoạt ô."
      }
    ]
  },

  {
    id: "bai-7",
    lessonNum: 7,
    topicNum: 2,
    topicName: "Chuyên đề 2: Phần mềm bảng tính",
    tag: "Hàm logic & Thống kê",
    title: "Bài 7: Xây dựng dự toán kinh phí với các hàm điều kiện (IF, AND, OR, SUMIF, COUNTIF)",
    objectives: [
      "Hiểu và vận dụng thành thạo cấu trúc hàm logic IF đơn và hàm IF lồng nhau.",
      "Kết hợp hàm IF với các điều kiện phức hợp AND, OR trong kinh doanh và tính toán thuế, hoa hồng.",
      "Thực hiện thống kê lọc dữ liệu theo điều kiện bằng các hàm SUMIF, COUNTIF, AVERAGEIF.",
      "Áp dụng định dạng có điều kiện (Conditional Formatting) để trực quan hóa cảnh báo vượt ngân sách."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-code-branch text-blue-600"></i> Hàm logic: Bộ não ra quyết định trong Excel
          </h4>
          <p>
            Trong mọi bài toán quản lý tài chính, kinh doanh hay dự toán ngân sách, các chính sách ưu đãi, chiết khấu và xếp loại luôn phụ thuộc vào điều kiện cụ thể. Các hàm <code>IF</code>, <code>AND</code>, <code>OR</code> và nhóm hàm <code>*IF</code> giúp tự động hóa việc đưa ra quyết định mà không cần làm thủ công.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-code text-blue-500"></i> Cú pháp hàm IF, AND, OR
            </h5>
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded font-mono text-xs text-blue-700 dark:text-blue-300 space-y-2">
              <p><strong>IF(logical_test, value_if_true, value_if_false)</strong></p>
              <p>Ví dụ chiết khấu 10% nếu mua từ 10 sản phẩm trở lên:</p>
              <p><code>=IF(C2 &gt;= 10, D2 * 0.1, 0)</code></p>
              <p>Ví dụ điều kiện kép (Vừa mua &gt;= 10 sản phẩm VÀ thanh toán tiền mặt):</p>
              <p><code>=IF(AND(C2 &gt;= 10, E2 = "Tiền mặt"), 0.15, 0.05)</code></p>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-chart-pie text-indigo-500"></i> Hàm thống kê có điều kiện
            </h5>
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded font-mono text-xs text-indigo-700 dark:text-indigo-300 space-y-2">
              <p><strong>SUMIF(range, criteria, [sum_range])</strong>: Tính tổng ô thỏa mãn điều kiện.</p>
              <p>Ví dụ tổng doanh thu mặt hàng "Laptop":</p>
              <p><code>=SUMIF(B2:B50, "Laptop", F2:F50)</code></p>
              <p><strong>COUNTIF(range, criteria)</strong>: Đếm số ô thỏa mãn tiêu chí.</p>
              <p>Ví dụ đếm số đơn hàng có giá trị &gt; 1 triệu:</p>
              <p><code>=COUNTIF(F2:F50, "&gt;1000000")</code></p>
            </div>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 border border-blue-200/80 dark:border-blue-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-coins"></i> Thực hành bài tập 7: Bảng dự toán kinh phí Hội trại thanh niên
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Lập bảng dự toán các khoản chi tiêu hội trại. Cột <em>Tình trạng ngân sách</em> dùng hàm IF: Nếu chi thực tế vượt chi dự toán &gt; 10%, hiển thị "Cảnh báo vượt chi", ngược lại hiển thị "Hợp lệ". Sử dụng <strong>Conditional Formatting</strong> để tự động tô màu nền đỏ cho các dòng cảnh báo. Tính tổng số tiền đã chi cho hạng mục "Ẩm thực" bằng hàm <strong>SUMIF</strong>.</p>
        </div>
      </div>
    `,
    summary: "Hàm IF kết hợp AND/OR giải quyết các bài toán phân nhánh logic phức tạp; SUMIF và COUNTIF cung cấp cái nhìn thống kê nhanh chóng theo từng nhóm đối tượng cụ thể.",
    quizzes: [
      {
        question: "Công thức nào sau đây tính tổng tiền ở cột F (F2:F100) cho các hóa đơn có trạng thái ở cột D (D2:D100) là 'Đã thanh toán'?",
        options: [
          "=SUMIF(D2:D100, \"Đã thanh toán\", F2:F100)",
          "=COUNTIF(D2:D100, \"Đã thanh toán\", F2:F100)",
          "=SUM(D2:D100 = \"Đã thanh toán\")",
          "=IF(D2:D100 = \"Đã thanh toán\", SUM(F2:F100))"
        ],
        correct: 0,
        explanation: "Cú pháp chuẩn của SUMIF là: SUMIF(vùng điều kiện, điều kiện, vùng tính tổng)."
      },
      {
        question: "Muốn kiểm tra đồng thời cả 2 điều kiện: Điểm trung bình >= 8.0 VÀ không có môn nào dưới 6.5, ta lồng ghép hàm logic nào trong hàm IF?",
        options: ["Hàm AND", "Hàm OR", "Hàm NOT", "Hàm COUNT"],
        correct: 0,
        explanation: "Hàm AND trả về TRUE chỉ khi TẤT CẢ các điều kiện thành phần bên trong đều thỏa mãn."
      },
      {
        question: "Công thức '=COUNTIF(C2:C50, \">=500\")' thực hiện nhiệm vụ gì?",
        options: [
          "Đếm số lượng các ô trong dải C2:C50 có giá trị lớn hơn hoặc bằng 500",
          "Tính tổng giá trị các ô lớn hơn hoặc bằng 500",
          "Tìm giá trị lớn nhất trong dải ô",
          "Kiểm tra xem ô C2 có lớn hơn 500 hay không"
        ],
        correct: 0,
        explanation: "Hàm COUNTIF đếm số lượng phần tử thỏa mãn một biểu thức so sánh."
      },
      {
        question: "Công cụ nào trong Excel tự động đổi màu chữ thành màu ĐỎ nổi bật khi một con số có giá trị âm hoặc vượt định mức?",
        options: ["Conditional Formatting", "Format Cells thông thường", "AutoCorrect", "Data Validation"],
        correct: 0,
        explanation: "Conditional Formatting (định dạng theo điều kiện) tự động đổi màu sắc dựa theo giá trị thực tế của ô."
      }
    ]
  },

  {
    id: "bai-8",
    lessonNum: 8,
    topicNum: 2,
    topicName: "Chuyên đề 2: Phần mềm bảng tính",
    tag: "Tra cứu & Báo giá",
    title: "Bài 8: Tra cứu dữ liệu tự động với hàm tìm kiếm (VLOOKUP, HLOOKUP, XLOOKUP) & Hoàn thiện bảng tính",
    objectives: [
      "Hiểu rõ nguyên lý hoạt động của hàm tìm kiếm theo cột dọc VLOOKUP và theo hàng ngang HLOOKUP.",
      "Nắm vững đối số tìm kiếm chính xác (0 / FALSE) và tìm kiếm gần đúng (1 / TRUE).",
      "Tiếp cận hàm tra cứu thế hệ mới XLOOKUP khắc phục hoàn toàn nhược điểm tìm kiếm ngược của VLOOKUP.",
      "Nhận diện và xử trị các lỗi thường gặp trong Excel: #N/A, #REF!, #VALUE!, #NAME?."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-magnifying-glass text-blue-600"></i> Hàm tra cứu dữ liệu: Cầu nối giữa các bảng
          </h4>
          <p>
            Trong thực tế, bạn thường có một bảng danh mục gốc (Bảng giá sản phẩm, Thông tin nhân viên) và một bảng giao dịch hàng ngày. Thay vì phải dò tay từng mã hàng để chép tên và giá, các hàm tra cứu <strong>VLOOKUP</strong> và <strong>XLOOKUP</strong> sẽ tự động điền thông tin chỉ trong tích tắc.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-arrow-down-wide-short text-blue-500"></i> Cú pháp kinh điển VLOOKUP
            </h5>
            <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded font-mono text-xs text-blue-700 dark:text-blue-300 space-y-2">
              <p><strong>VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])</strong></p>
              <ul class="text-xs space-y-1 list-disc pl-4 text-gray-600 dark:text-gray-400">
                <li><em>lookup_value:</em> Giá trị đem đi tìm (Mã hàng).</li>
                <li><em>table_array:</em> Bảng dò tìm (Cần khóa cố định bằng phím F4: <code>$A$2:$D$50</code>).</li>
                <li><em>col_index_num:</em> Số thứ tự cột muốn lấy dữ liệu trả về (1, 2, 3...).</li>
                <li><em>range_lookup:</em> <strong>0</strong> (tìm chính xác tuyệt đối).</li>
              </ul>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-bolt text-indigo-500"></i> Hiện đại hóa với XLOOKUP
            </h5>
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">
              Ưu điểm vượt trội của hàm XLOOKUP:
            </p>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li>Tra cứu linh hoạt cả bên trái lẫn bên phải (không bắt buộc cột tìm kiếm phải nằm ở đầu tiên như VLOOKUP).</li>
              <li>Mặc định là tìm kiếm chính xác tuyệt đối.</li>
              <li>Tích hợp sẵn thông báo nếu không tìm thấy (thay thế hàm IFERROR).</li>
              <li>Cú pháp: <code>=XLOOKUP(A2, DanhMuc[Mã], DanhMuc[Đơn giá], "Không thấy")</code>.</li>
            </ul>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
          <h5 class="font-bold text-gray-900 dark:text-white mb-1 text-sm">Các lỗi tra cứu thường gặp:</h5>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            <strong>#N/A</strong> (Not Available - Không tìm thấy mã); <strong>#REF!</strong> (Vùng tham chiếu bị xóa); <strong>#VALUE!</strong> (Sai kiểu dữ liệu khi cộng trừ nhân chia).
          </p>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 border border-blue-200/80 dark:border-blue-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-file-invoice-dollar"></i> Thực hành bài tập 8: Lập bảng hóa đơn bán lẻ tự động
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Tạo Bảng 1 là <em>Bảng giá linh kiện máy tính</em> (gồm Mã SP, Tên sản phẩm, Đơn vị tính, Đơn giá). Tạo Bảng 2 là <em>Hóa đơn bán lẻ</em>: Khi người dùng gõ hoặc chọn Mã SP (ví dụ "RAM16G"), cột <em>Tên sản phẩm</em> và <em>Đơn giá</em> tự động hiển thị bằng hàm <strong>VLOOKUP</strong> hoặc <strong>XLOOKUP</strong>. Bọc ngoài bằng hàm <code>IFERROR(..., "")</code> để bảng tính luôn sạch đẹp khi chưa nhập mã.</p>
        </div>
      </div>
    `,
    summary: "VLOOKUP và XLOOKUP liên kết các bảng dữ liệu độc lập thành hệ thống quản lý thông tin liền mạch; sử dụng tham chiếu tuyệt đối ($) là chìa khóa để sao chép công thức không bị lỗi.",
    quizzes: [
      {
        question: "Đối số thứ 4 trong hàm VLOOKUP nên đặt giá trị là bao nhiêu khi bạn cần tìm kiếm mã hàng hóa chính xác tuyệt đối 100%?",
        options: ["0 (hoặc FALSE)", "1 (hoặc TRUE)", "2", "Bỏ trống"],
        correct: 0,
        explanation: "Tham số 0 hoặc FALSE bắt buộc Excel phải tìm chính xác từng ký tự của mã hàng."
      },
      {
        question: "Tại sao khi viết công thức VLOOKUP, vùng bảng tra cứu (table_array) thường phải được khóa bằng dấu $ (ví dụ $A$2:$D$20)?",
        options: [
          "Để khi sao chép công thức xuống các ô bên dưới, vùng bảng tra cứu không bị trượt đi",
          "Để giấu công thức không cho người khác nhìn thấy",
          "Để đổi đơn vị tiền tệ sang Đô la Mỹ",
          "Để tăng tốc độ mở tệp Excel"
        ],
        correct: 0,
        explanation: "Phím F4 tạo địa chỉ tuyệt đối ($A$2:$D$20) cố định bảng tra cứu khi kéo fill công thức."
      },
      {
        question: "Lỗi '#N/A' xuất hiện trong ô chứa công thức VLOOKUP cảnh báo điều gì?",
        options: [
          "Không tìm thấy giá trị cần tìm (lookup_value) trong cột đầu tiên của bảng tra cứu",
          "Chia cho số 0",
          "Gõ sai tên hàm",
          "Số quá dài không vừa độ rộng cột"
        ],
        correct: 0,
        explanation: "#N/A là viết tắt của 'Not Available' - Excel không tìm thấy mã tương ứng trong bảng nguồn."
      },
      {
        question: "Ưu điểm nổi bật nhất của hàm XLOOKUP so với hàm VLOOKUP truyền thống là gì?",
        options: [
          "Có thể tra cứu lấy dữ liệu ở cột nằm bên trái cột chứa mã tìm kiếm một cách tự nhiên",
          "Chỉ hoạt động được trên điện thoại",
          "Bắt buộc bảng phải được sắp xếp theo thứ tự A-Z",
          "Không cần truyền bất kỳ tham số nào"
        ],
        correct: 0,
        explanation: "VLOOKUP chỉ tìm được từ trái qua phải, còn XLOOKUP tìm được hai chiều cả trái lẫn phải."
      }
    ]
  },

  {
    id: "bai-9",
    lessonNum: 9,
    topicNum: 2,
    topicName: "Chuyên đề 2: Phần mềm bảng tính",
    tag: "PivotTable & Trực quan hóa",
    title: "Bài 9: Tổng hợp số liệu với PivotTable, trực quan hóa biểu đồ (Charts) & Đóng gói sản phẩm bảng tính",
    objectives: [
      "Khởi tạo bảng tổng hợp động PivotTable để tổng hợp hàng ngàn dòng dữ liệu chỉ với thao tác kéo thả.",
      "Lựa chọn và xây dựng các loại biểu đồ chuẩn mực (Column, Line, Pie, Bar) trực quan hóa số liệu.",
      "Tùy biến nhãn dữ liệu (Data Labels), chú giải (Legend) và tiêu đề biểu đồ.",
      "Bảo vệ công thức tính toán (Protect Sheet) và thiết lập trang in (Page Setup) đóng gói sản phẩm."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-chart-column text-blue-600"></i> PivotTable: Vũ khí tối thượng của chuyên viên phân tích
          </h4>
          <p>
            Khi cơ sở dữ liệu có hàng chục nghìn dòng giao dịch, việc viết hàm thống kê thủ công sẽ mất nhiều ngày. <strong>PivotTable</strong> là công cụ trích xuất báo cáo đa chiều mạnh mẽ nhất trong Excel, cho phép tổng hợp doanh số theo từng nhân viên, từng vùng miền hay từng tháng chỉ trong 30 giây kéo thả chuột.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-arrows-split-up-and-left text-blue-500"></i> Bốn vùng cấu trúc PivotTable
            </h5>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>Filters:</strong> Lọc báo cáo theo tiêu chí toàn cục (ví dụ lọc theo Năm).</li>
              <li><strong>Columns:</strong> Tiêu đề cột nằm ngang (ví dụ các Quý trong năm).</li>
              <li><strong>Rows:</strong> Tiêu đề dòng dọc (ví dụ Danh sách Tên Nhân viên).</li>
              <li><strong>Values:</strong> Dữ liệu cần tính toán (Doanh thu &rarr; Sum, Đơn hàng &rarr; Count).</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-chart-pie text-indigo-500"></i> Nguyên tắc chọn dạng biểu đồ
            </h5>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>Biểu đồ Cột (Column / Bar):</strong> So sánh độ lớn giữa các đối tượng độc lập.</li>
              <li><strong>Biểu đồ Đường (Line):</strong> Theo dõi xu hướng tăng giảm theo dòng thời gian (Tháng, Năm).</li>
              <li><strong>Biểu đồ Tròn (Pie):</strong> Thể hiện cơ cấu tỷ trọng phần trăm (Tổng = 100%, dưới 6 thành phần).</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 border border-blue-200/80 dark:border-blue-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-chart-area"></i> Thực hành bài tập 9: Báo cáo phân tích doanh thu quý
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Từ bảng dữ liệu bán hàng 50 dòng, tạo 1 <strong>PivotTable</strong> thống kê tổng doanh thu theo từng <em>Nhân viên bán hàng</em> và từng <em>Nhóm mặt hàng</em>. Vẽ biểu đồ <strong>PivotChart dạng Cột nhóm (Clustered Column)</strong> kèm nhãn số liệu (Data Labels). Thiết lập bảo vệ bảng tính với mật khẩu (Protect Sheet) chỉ cho phép người dùng chọn ô không chứa công thức.</p>
        </div>
      </div>
    `,
    summary: "PivotTable biến dữ liệu thô thành thông tin phân tích giá trị; biểu đồ trực quan hóa dữ liệu giúp người ra quyết định nắm bắt bản chất vấn đề nhanh chóng.",
    quizzes: [
      {
        question: "Muốn thể hiện cơ cấu tỷ trọng thị phần của 4 hãng điện thoại thông minh (tổng cộng bằng 100%), biểu đồ nào là lựa chọn tối ưu?",
        options: ["Biểu đồ Tròn (Pie Chart)", "Biểu đồ Đường (Line Chart)", "Biểu đồ Phân tán (Scatter Chart)", "Biểu đồ Radar"],
        correct: 0,
        explanation: "Biểu đồ tròn (Pie Chart) trực quan hóa cơ cấu tỷ lệ phần trăm của một tổng thể một cách rõ ràng nhất."
      },
      {
        question: "Trong khung thiết kế PivotTable Fields, trường dữ liệu số tiền cần tính tổng (Doanh thu) phải được kéo vào vùng nào?",
        options: ["Vùng Values", "Vùng Rows", "Vùng Columns", "Vùng Filters"],
        correct: 0,
        explanation: "Vùng Values tiếp nhận các trường dữ liệu cần thực hiện các phép toán thống kê như Sum, Count, Average."
      },
      {
        question: "Khi dữ liệu ở bảng gốc thay đổi, làm thế nào để số liệu trên PivotTable được cập nhật mới nhất?",
        options: [
          "Nhấp chuột phải vào PivotTable &rarr; chọn Refresh",
          "Phải xóa PivotTable đi tạo lại từ đầu",
          "Lưu tệp dưới tên mới",
          "Tự động cập nhật không cần làm gì"
        ],
        correct: 0,
        explanation: "PivotTable lưu bộ đệm (Pivot Cache) nên khi bảng gốc sửa đổi, bạn cần nhấp 'Refresh' để làm mới số liệu."
      },
      {
        question: "Tính năng 'Protect Sheet' trong thẻ Review có công dụng gì?",
        options: [
          "Khóa các ô chứa công thức và định dạng, ngăn chặn người khác chỉnh sửa vô ý",
          "Mã hóa tệp tin chống virus",
          "Tự động gửi tệp qua email",
          "Tự động tính thuế thu nhập cá nhân"
        ],
        correct: 0,
        explanation: "Protect Sheet khóa bảo vệ cấu trúc bảng tính và các công thức nhạy cảm khỏi bị sửa đổi hoặc xóa nhầm."
      }
    ]
  },

  // ==========================================
  // CHUYÊN ĐỀ 3: THỰC HÀNH SỬ DỤNG PHẦN MỀM TRÌNH CHIẾU (MS POWERPOINT NÂNG CAO)
  // ==========================================
  {
    id: "bai-10",
    lessonNum: 10,
    topicNum: 3,
    topicName: "Chuyên đề 3: Phần mềm trình chiếu",
    tag: "Ý tưởng & Slide Master",
    title: "Bài 10: Xây dựng ý tưởng, bố cục và thiết kế Slide chuyên nghiệp với Slide Master",
    objectives: [
      "Làm chủ các nguyên tắc thiết kế thuyết trình hiện đại: Quy tắc 6x6, tỷ lệ phối màu 60-30-10, tương phản thị giác.",
      "Khai thác công cụ Slide Master để đồng bộ hóa phông chữ, biểu trưng (Logo), tiêu đề và bảng màu cho toàn bộ bài giảng.",
      "Tạo lập các bố cục slide (Layouts) tùy biến phục vụ đa dạng nhu cầu trình bày.",
      "Tránh các sai lầm kinh điển: Slide quá nhiều chữ, dùng phông chữ hoa mỹ khó đọc, màu sắc lòe loẹt."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-paintbrush text-blue-600"></i> Tư duy thiết kế bài trình chiếu hiện đại
          </h4>
          <p>
            Bài thuyết trình không phải là cuốn sách để người nghe đọc từng chữ, mà là công cụ hỗ trợ người thuyết trình truyền tải cảm hứng và ý tưởng cốt lõi. Một slide chuyên nghiệp phải đảm bảo người xem nắm bắt được thông điệp chính chỉ trong <strong>vòng 3 giây</strong> đầu tiên.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-ruler-combined text-blue-500"></i> Bộ quy tắc thiết kế vàng
            </h5>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>Quy tắc 6 x 6:</strong> Tối đa 6 dòng trên 1 slide, mỗi dòng không quá 6 từ.</li>
              <li><strong>Quy tắc phối màu 60 - 30 - 10:</strong> 60% màu nền chủ đạo, 30% màu nội dung thứ cấp, 10% màu nhấn mạnh (Accent) thu hút thị giác.</li>
              <li><strong>Phông chữ không chân (Sans-Serif):</strong> Ưu tiên Arial, Segoe UI, Roboto, Montserrat để chữ hiển thị sắc nét trên máy chiếu.</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-crown text-indigo-500"></i> Sức mạnh của Slide Master
            </h5>
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">
              Vào <strong>View &rarr; Slide Master</strong>:
            </p>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li>Slide trên cùng (Master slide lớn): Đặt logo trường học, chọn phông chữ và đổi màu nền ở đây thì <strong>toàn bộ 100 slide bên dưới sẽ tự động thay đổi theo</strong>!</li>
              <li>Không bao giờ phải mất công copy/paste logo hay chỉnh từng slide riêng lẻ.</li>
              <li>Bấm <strong>Close Master View</strong> để quay trở lại chế độ soạn thảo bình thường.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 border border-blue-200/80 dark:border-blue-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-palette"></i> Thực hành bài tập 10: Xây dựng Template mẫu thương hiệu
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Mở PowerPoint, vào <strong>View &rarr; Slide Master</strong>. Thiết lập bảng màu chủ đạo (Xanh dương đậm và Cam nhấn). Đặt Logo câu lạc bộ ở góc trên bên phải của Master Slide. Định dạng phông chữ tiêu đề là <em>Montserrat ExtraBold</em>, nội dung là <em>Segoe UI</em>. Thoát Slide Master và tạo 4 slide nội dung minh chứng tính đồng bộ tự động.</p>
        </div>
      </div>
    `,
    summary: "Slide Master là bộ khung xương sống tạo dựng phong cách nhất quán cho toàn bộ bài thuyết trình; tuân thủ quy tắc 6x6 và phối màu giúp bài trình chiếu đạt chuẩn thẩm mỹ cao.",
    quizzes: [
      {
        question: "Muốn chèn logo trường học vào một vị trí duy nhất để tự động xuất hiện ở tất cả các slide trong bài trình chiếu, ta vào chế độ nào?",
        options: ["View &rarr; Slide Master", "Insert &rarr; Pictures", "Home &rarr; New Slide", "Review &rarr; Show Comments"],
        correct: 0,
        explanation: "Slide Master là slide mẹ quản lý định dạng chung, chèn logo vào slide mẹ sẽ tự động nhân bản sang mọi slide con."
      },
      {
        question: "Theo quy tắc phối màu 60 - 30 - 10 trong thiết kế thị giác, 10% tỷ lệ màu sắc dành cho thành phần nào?",
        options: [
          "Màu nhấn mạnh (Accent color) tạo sự thu hút vào thông điệp quan trọng nhất",
          "Màu nền của toàn bộ slide",
          "Màu của đường viền trang",
          "Màu của số thứ tự trang"
        ],
        correct: 0,
        explanation: "10% là màu sắc nổi bật nhất (ví dụ màu cam hoặc vàng tươi) dùng làm điểm nhấn đắt giá cho thông điệp cốt lõi."
      },
      {
        question: "Tại sao khi trình chiếu trên màn hình máy chiếu lớn, các phông chữ không chân (Sans-Serif như Arial, Segoe UI) lại được khuyến nghị hơn phông có chân (Serif như Times New Roman)?",
        options: [
          "Dễ đọc từ xa, nét chữ rõ ràng và không bị nhòe nét khi chiếu ở cự ly lớn",
          "Chỉ có phông Sans-Serif mới gõ được dấu tiếng Việt",
          "Làm cho slide chạy nhanh hơn",
          "Tiết kiệm điện năng của máy chiếu"
        ],
        correct: 0,
        explanation: "Phông không chân có độ dày nét đều đặn, không có phần râu mảnh ở đuôi chữ nên nhìn từ xa rất rõ và không bị mỏi mắt."
      },
      {
        question: "Quy tắc 6 x 6 trong thiết kế nội dung slide khuyến cáo điều gì?",
        options: [
          "Không nên quá 6 dòng chữ trên 1 slide và mỗi dòng không quá 6 từ",
          "Bài thuyết trình chỉ được phép có đúng 6 slide",
          "Mỗi slide chỉ được thuyết trình trong 6 giây",
          "Mỗi slide phải có đúng 6 bức ảnh"
        ],
        correct: 0,
        explanation: "Quy tắc 6x6 giúp giới hạn dung lượng chữ, tránh biến slide thành một văn bản đọc chép dày đặc."
      }
    ]
  },

  {
    id: "bai-11",
    lessonNum: 11,
    topicNum: 3,
    topicName: "Chuyên đề 3: Phần mềm trình chiếu",
    tag: "Đa phương tiện & Hiệu ứng",
    title: "Bài 11: Ứng dụng truyền thông đa phương tiện: Âm thanh, Video và Hiệu ứng chuyển động (Animations & Transitions)",
    objectives: [
      "Chèn và biên tập đa phương tiện trực tiếp: Cắt video (Trim Video), làm mờ âm thanh (Fade In/Out), phát nền liên tục.",
      "Khai thác hiệu ứng chuyển trang biến hình thông minh (Morph Transition) tạo chuyển động điện ảnh mượt mà.",
      "Làm chủ 4 nhóm hiệu ứng đối tượng Animations: Entrance, Emphasis, Exit, Motion Paths.",
      "Quản lý nhịp độ và thời gian chuyển động qua bảng điều khiển Animation Pane (Start On Click, With Previous, Delay)."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-film text-blue-600"></i> Đa phương tiện và nghệ thuật tạo chuyển động
          </h4>
          <p>
            Chuyển động có chủ đích giúp dẫn dắt ánh nhìn của người xem theo đúng mạch diễn giải. Tuy nhiên, việc lạm dụng hiệu ứng lòe loẹt bay nhảy hỗn loạn sẽ gây phản tác dụng. Công cụ <strong>Morph Transition</strong> và quản lý hoạt ảnh chuyên sâu với <strong>Animation Pane</strong> mang đến đẳng cấp điện ảnh cho bài trình bày.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-wand-magic-sparkles text-blue-500"></i> Hiệu ứng biến hình Morph siêu việt
            </h5>
            <ol class="text-xs space-y-1.5 list-decimal pl-4 text-gray-600 dark:text-gray-300">
              <li>Thiết kế Slide 1 với các đối tượng hình ảnh, chữ viết.</li>
              <li>Nhân bản slide: Nhấp chuột phải vào Slide 1 &rarr; chọn <strong>Duplicate Slide</strong> thành Slide 2.</li>
              <li>Trên Slide 2: Di chuyển vị trí, phóng to, thu nhỏ hoặc đổi góc xoay của các đối tượng.</li>
              <li>Tại Slide 2: Vào <strong>Transitions &rarr; chọn Morph</strong>.</li>
              <li>Khi trình chiếu, PowerPoint sẽ tự động tạo chuyển động biến đổi siêu mượt mà không cần gắn Animation phức tạp!</li>
            </ol>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-sliders text-indigo-500"></i> Bảng điều khiển Animation Pane
            </h5>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>Entrance (Màu xanh):</strong> Xuất hiện đối tượng lên slide.</li>
              <li><strong>Emphasis (Màu vàng):</strong> Nhấn mạnh, phóng to hoặc đổi màu đối tượng đang hiển thị.</li>
              <li><strong>Exit (Màu đỏ):</strong> Biến mất đối tượng khỏi slide.</li>
              <li><strong>Start:</strong> <em>On Click</em> (khi nhấp chuột), <em>With Previous</em> (đồng thời với hiệu ứng trước), <em>After Previous</em> (chạy nối tiếp).</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 border border-blue-200/80 dark:border-blue-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-play"></i> Thực hành bài tập 11: Tạo slide giới thiệu sản phẩm phong cách Apple
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Tạo 2 slide áp dụng <strong>Morph Transition</strong>: Slide 1 hình ảnh chiếc đồng hồ thông minh nằm nhỏ ở góc kèm thông số cơ bản; Slide 2 chiếc đồng hồ phóng to tràn viền ở chính giữa kèm các tính năng chi tiết. Chèn một đoạn nhạc nền không lời ngắn, đặt chế độ <em>Play in Background</em> và <em>Fade In 1 giây</em>.</p>
        </div>
      </div>
    `,
    summary: "Morph Transition cách mạng hóa chuyển động trong PowerPoint; kết hợp khéo léo âm thanh nền và Animation Pane tạo nên những thước phim thuyết trình lôi cuốn.",
    quizzes: [
      {
        question: "Hiệu ứng chuyển trang (Transition) nào trong PowerPoint có khả năng tự động nhận diện các đối tượng trùng tên ở 2 slide liên tiếp để tạo hoạt ảnh biến hình mượt mà?",
        options: ["Morph", "Fade", "Push", "Zoom"],
        correct: 0,
        explanation: "Morph là hiệu ứng chuyển trang hiện đại bậc nhất của PowerPoint giúp chuyển động hình dáng, vị trí đối tượng trơn tru."
      },
      {
        question: "Trong hệ thống hiệu ứng đối tượng (Animations), nhóm màu XANH LÁ CÂY đại diện cho kiểu hoạt ảnh nào?",
        options: [
          "Entrance (Hiệu ứng xuất hiện)",
          "Emphasis (Hiệu ứng nhấn mạnh)",
          "Exit (Hiệu ứng biến mất)",
          "Motion Paths (Hiệu ứng đường chuyển động)"
        ],
        correct: 0,
        explanation: "Màu xanh lá là Entrance (xuất hiện), màu vàng là Emphasis (nhấn mạnh), màu đỏ là Exit (biến mất)."
      },
      {
        question: "Nếu muốn một hiệu ứng tự động chạy ngay sau khi hiệu ứng phía trước vừa kết thúc mà không cần người dùng bấm chuột, ta chọn thiết lập Start nào?",
        options: ["After Previous", "On Click", "With Previous", "Delay"],
        correct: 0,
        explanation: "'After Previous' tự động kích hoạt hiệu ứng nối tiếp ngay khi hiệu ứng liền trước chạy xong."
      },
      {
        question: "Để một tệp âm thanh chèn vào slide có thể phát liên tục xuyên suốt qua nhiều slide mà không bị ngắt giữa chừng, ta chọn thiết lập nào trong thẻ Audio Format / Playback?",
        options: ["Play in Background (Play Across Slides)", "Loop until Stopped", "Hide During Show", "Trim Audio"],
        correct: 0,
        explanation: "'Play in Background' tự động cấu hình âm thanh phát nền liên tục xuyên suốt toàn bộ các slide của bài thuyết trình."
      }
    ]
  },

  {
    id: "bai-12",
    lessonNum: 12,
    topicNum: 3,
    topicName: "Chuyên đề 3: Phần mềm trình chiếu",
    tag: "Tương tác & Trò chơi",
    title: "Bài 12: Thiết kế trò chơi tương tác và liên kết điều hướng thông minh (Hyperlink & Trigger)",
    objectives: [
      "Sử dụng Hyperlink để liên kết nội bộ giữa các slide tạo menu điều hướng phi tuyến tính.",
      "Tạo nút tác vụ thông minh (Action Buttons) để quay về trang chủ, chuyển tiếp slide kế hoặc thoát bài trình chiếu.",
      "Làm chủ kỹ thuật Trigger (Cò kích hoạt) để chỉ khi nhấp đúng vào đối tượng chỉ định thì hoạt ảnh mới chạy.",
      "Thiết kế trò chơi học tập tương tác: Trắc nghiệm lật mảnh ghép, Vòng quay kỳ diệu, Hộp quà bí mật."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-gamepad text-blue-600"></i> Gamification: Biến bài thuyết trình thành ứng dụng tương tác
          </h4>
          <p>
            Trình chiếu truyền thống diễn ra một chiều tuần tự từ slide 1 đến slide cuối cùng. Với <strong>Hyperlink</strong> và <strong>Trigger</strong>, PowerPoint có thể biến thành một ứng dụng học tập tương tác đa chiều hoặc trò chơi giáo dục lôi cuốn (Game-based Learning).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-link text-blue-500"></i> Hyperlink và Action Buttons
            </h5>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li>Chọn đối tượng hình khối hoặc chữ &rarr; bấm <code>Ctrl + K</code>.</li>
              <li>Chọn <strong>Place in This Document</strong> để nhảy trực tiếp tới Slide mong muốn (Slide Mục lục, Slide Đáp án...).</li>
              <li>Vào <strong>Insert &rarr; Shapes &rarr; Action Buttons</strong> để chèn các nút điều hướng tiêu chuẩn (Home, Next, Back, End).</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-bullseye text-indigo-500"></i> Kỹ thuật Trigger (Cò kích hoạt)
            </h5>
            <ol class="text-xs space-y-1.5 list-decimal pl-4 text-gray-600 dark:text-gray-300">
              <li>Vào <strong>Home &rarr; Select &rarr; Selection Pane</strong> để đặt tên gợi nhớ cho các đối tượng (ví dụ: <em>HopQua_1, HopQua_2</em>).</li>
              <li>Gán hiệu ứng biến mất (Disappear/Fade Out) cho mảnh ghép che bức tranh.</li>
              <li>Tại tab <em>Animations</em>, bấm nút <strong>Trigger &rarr; On Click of &rarr; chọn chính mảnh ghép đó</strong>!</li>
              <li>Khi trình chiếu: Người chơi bấm vào ô nào, ô đó tự động biến mất để lộ bức tranh bí mật phía sau.</li>
            </ol>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 border border-blue-200/80 dark:border-blue-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-puzzle-piece"></i> Thực hành bài tập 12: Thiết kế Game 'Ai là triệu phú'
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Thiết kế 1 câu hỏi trắc nghiệm gồm 4 đáp án A, B, C, D (vẽ bằng Rounded Rectangle). Áp dụng <strong>Trigger</strong>: Nếu bấm vào đáp án sai, ô đó đổi màu đỏ và rung lắc; Nếu bấm vào đáp án đúng, ô đó đổi màu xanh lá cây kèm âm thanh tiếng vỗ tay giòn giã (Applaud Sound).</p>
        </div>
      </div>
    `,
    summary: "Trigger kết nối trực tiếp hành động nhấp chuột với phản hồi thị giác; giúp bài giảng trở nên cuốn hút và nâng cao mức độ tham gia tương tác của người học.",
    quizzes: [
      {
        question: "Phím tắt chuẩn để mở nhanh hộp thoại chèn liên kết Hyperlink trong bộ ứng dụng văn phòng là gì?",
        options: ["Ctrl + K", "Ctrl + H", "Ctrl + L", "Ctrl + J"],
        correct: 0,
        explanation: "Ctrl + K là phím tắt tiêu chuẩn toàn cầu để tạo siêu liên kết (Hyperlink) trong Word, Excel, PowerPoint."
      },
      {
        question: "Tính năng 'Trigger' trong menu Animations có tác dụng gì đặc biệt?",
        options: [
          "Chỉ kích hoạt hiệu ứng chuyển động khi người dùng nhấp chuột đúng vào một đối tượng được chỉ định",
          "Tự động tăng tốc độ máy tính",
          "Chuyển đổi bài thuyết trình thành video",
          "Tự động dịch lời thoại bài giảng"
        ],
        correct: 0,
        explanation: "Trigger đóng vai trò như 'cò súng' - chỉ khi người dùng click trúng đối tượng chỉ định thì hoạt ảnh mới được phóng ra."
      },
      {
        question: "Công cụ nào giúp người dùng đặt tên rõ ràng cho từng hình vẽ trên slide để không bị nhầm lẫn khi cài đặt Trigger?",
        options: ["Selection Pane (trong nhóm Editing)", "Animation Pane", "Slide Sorter", "Master View"],
        correct: 0,
        explanation: "Selection Pane liệt kê tên của mọi đối tượng trên slide (Rectangle 1, TextBox 2...) và cho phép đổi tên tùy thích."
      },
      {
        question: "Khi thiết kế một trò chơi lật mở mảnh ghép, hiệu ứng nào thường được gán cho mảnh ghép che bức tranh bí mật?",
        options: [
          "Hiệu ứng biến mất (Exit Animation như Disappear, Fade Out)",
          "Hiệu ứng xuất hiện (Entrance)",
          "Hiệu ứng chuyển trang Slide Transition",
          "Hiệu ứng lặp lại vô tận"
        ],
        correct: 0,
        explanation: "Hiệu ứng Exit làm mảnh ghép che phủ biến mất khi người dùng nhấp chuột, làm lộ ra nội dung ẩn bên dưới."
      }
    ]
  },

  {
    id: "bai-13",
    lessonNum: 13,
    topicNum: 3,
    topicName: "Chuyên đề 3: Phần mềm trình chiếu",
    tag: "Trình diễn & Đóng gói",
    title: "Bài 13: Kỹ thuật trình diễn chuyên nghiệp, ghi hình thuyết trình & Xuất bản sản phẩm truyền thông",
    objectives: [
      "Sử dụng thành thạo chế độ hai màn hình Presenter View: Xem trước slide kế tiếp, quản lý đồng hồ đếm ngược và đọc ghi chú bí mật.",
      "Làm chủ các công cụ hỗ trợ trực tiếp khi nói: Bút laser ảo (Laser Pointer), Bút vẽ đánh dấu (Pen, Highlighter).",
      "Ghi hình bài giảng điện tử (Record Slide Show) đồng bộ khuôn mặt webcam và giọng nói thuyết minh.",
      "Xuất bản đa kênh: Video Full HD (.mp4), Tài liệu in phân phát (.pdf) và Chế độ trình chiếu tự động (.ppsx)."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-chalkboard-user text-blue-600"></i> Kỹ năng làm chủ sân khấu và xuất bản sản phẩm số
          </h4>
          <p>
            Một bài thuyết trình dù thiết kế đẹp đến đâu cũng sẽ thất bại nếu người thuyết trình lúng túng khi kết nối máy chiếu, quên nội dung nói hoặc quá giờ quy định. Chế độ <strong>Presenter View</strong> cùng các kỹ thuật ghi hình và đóng gói bài giảng điện tử là vũ khí bí mật giúp bạn làm chủ hoàn toàn buổi báo cáo.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-desktop text-blue-500"></i> Chế độ Presenter View (Hai màn hình)
            </h5>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>Màn hình máy chiếu (khán giả xem):</strong> Chỉ thấy slide phóng to toàn màn hình sắc nét.</li>
              <li><strong>Màn hình laptop của bạn:</strong> Thấy slide hiện tại, slide kế tiếp, đồng hồ bấm giờ chạy thực tế và toàn bộ ghi chú (Notes) của bạn!</li>
              <li>Phím tắt điều khiển: Nhấn <code>B</code> để màn hình chuyển Đen (Black screen), nhấn <code>W</code> để chuyển Trắng (White screen) khi muốn khán giả tập trung vào lời nói của bạn.</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h5 class="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
              <i class="fa-solid fa-video text-indigo-500"></i> Ghi hình và Xuất bản đa định dạng
            </h5>
            <ul class="text-xs space-y-1.5 list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li><strong>Record Slide Show:</strong> Ghi âm giọng nói kết hợp khung hình camera góc slide, xuất thành video bài giảng trực tuyến E-learning.</li>
              <li><strong>Export to Video (.mp4):</strong> Chuyển toàn bộ slide thành video Full HD 1080p sẵn sàng tải lên YouTube hoặc gửi đối tác.</li>
              <li><strong>PowerPoint Show (.ppsx):</strong> Khi người nhận nhấp đúp vào tệp, bài thuyết trình tự động mở full màn hình trình chiếu ngay lập tức mà không hiện cửa sổ chỉnh sửa.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 border border-blue-200/80 dark:border-blue-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-circle-play"></i> Thực hành bài tập 13: Ghi hình bài giảng E-Learning
        </h4>
        <div class="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <p>Mở bài trình chiếu 3 slide đã thiết kế. Soạn nội dung kịch bản vào phần <strong>Notes</strong>. Bấm nút <strong>Record</strong> ở góc trên bên phải, bật micro và webcam để ghi âm thuyết minh cho từng slide (mỗi slide nói 30-45 giây). Cuối cùng vào <strong>File &rarr; Export &rarr; Create a Video</strong> để xuất bản thành tệp video định dạng MP4 chất lượng cao.</p>
        </div>
      </div>
    `,
    summary: "Presenter View giúp người thuyết trình luôn tự tin kiểm soát thời gian và kịch bản; tính năng xuất bản Video và PPSX biến slide thành sản phẩm số tiện ích.",
    quizzes: [
      {
        question: "Trong khi đang trình chiếu, muốn màn hình máy chiếu tạm thời chuyển sang MÀU ĐEN hoàn toàn để thu hút sự chú ý của người nghe vào bạn, ta nhấn phím nào?",
        options: ["Phím B (Black)", "Phím W (White)", "Phím Esc", "Phím Enter"],
        correct: 0,
        explanation: "Phím B (Black) làm màn hình chuyển màu đen; phím W (White) chuyển màu trắng; nhấn lại lần nữa để quay về slide."
      },
      {
        question: "Lợi thế lớn nhất của chế độ Presenter View khi kết nối laptop với máy chiếu là gì?",
        options: [
          "Người thuyết trình nhìn thấy slide tiếp theo, đồng hồ bấm giờ và đọc được ghi chú bí mật mà khán giả không thấy",
          "Tự động dịch lời nói sang tiếng nước ngoài",
          "Máy chiếu tự động phát sáng gấp đôi",
          "Không cần dùng đến chuột hay bàn phím"
        ],
        correct: 0,
        explanation: "Presenter View hiển thị bảng điều khiển chuyên nghiệp dành riêng cho diễn giả trên màn hình máy tính cá nhân."
      },
      {
        question: "Tệp tin PowerPoint được lưu với phần mở rộng '.ppsx' (PowerPoint Show) có đặc tính gì khi người dùng mở ra?",
        options: [
          "Tự động chạy thẳng vào chế độ toàn màn hình trình chiếu mà không hiển thị giao diện soạn thảo",
          "Bắt buộc phải nhập mật khẩu mới xem được",
          "Chỉ nghe được âm thanh không xem được hình",
          "Tự động xóa sau 24 giờ"
        ],
        correct: 0,
        explanation: "Định dạng .ppsx là dạng đóng gói trình diễn, mở ra là chạy ngay không lộ giao diện chỉnh sửa slide."
      },
      {
        question: "Để vẽ hoặc dùng bút dạ quang đánh dấu trực tiếp lên các điểm số liệu quan trọng trên slide trong lúc đang nói, ta dùng tổ hợp phím nào?",
        options: [
          "Ctrl + P (Bút vẽ Pen) hoặc Ctrl + I (Bút dạ quang Highlighter)",
          "Ctrl + A",
          "Ctrl + S",
          "Ctrl + Z"
        ],
        correct: 0,
        explanation: "Ctrl + P chuyển con trỏ chuột thành chiếc bút vẽ (Pen) để bạn khoanh tròn hoặc gạch chân trực tiếp lên màn hình."
      }
    ]
  },

  // ==========================================
  // DỰ ÁN HỌC TẬP TỔNG HỢP:
  // ==========================================
  {
    id: "bai-14",
    lessonNum: 14,
    topicNum: 4,
    topicName: "Dự án tổng hợp: Kỹ năng số",
    tag: "Dự án số tích hợp",
    title: "Bài 14: Dự án tích hợp: Xây dựng bộ ấn phẩm số và quản lí chiến dịch sự kiện học đường",
    objectives: [
      "Tích hợp liên hoàn bộ ba công cụ tin học văn phòng: Microsoft Word, Microsoft Excel, Microsoft PowerPoint.",
      "Thiết kế Bản kế hoạch tổ chức sự kiện chuyên nghiệp trên Word (Sections, mục lục tự động, hình ảnh Wrap Text).",
      "Lập Dự toán kinh phí và quản lí khách mời trên Excel (Data Validation, hàm VLOOKUP, SUMIF, PivotTable).",
      "Thiết kế Slide Pitching báo cáo dự án trên PowerPoint (Slide Master, Morph, Trigger tương tác, video).",
      "Bồi dưỡng tư duy làm việc nhóm, năng lực giải quyết vấn đề và kỹ năng chuyển đổi số thực tiễn."
    ],
    content: `
      <div class="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2 mb-2">
            <i class="fa-solid fa-briefcase text-blue-600"></i> Bài toán thực tế: Chuyển đổi số trong sự kiện học đường
          </h4>
          <p>
            Trong kỷ nguyên số, không một công việc nào chỉ sử dụng đơn lẻ một phần mềm. Một dự án thực tế đòi hỏi sự phối hợp nhịp nhàng giữa văn bản hành chính (Word), phân tích dữ liệu tài chính (Excel) và truyền thông thuyết phục (PowerPoint). Dự án tổng hợp này là bài kiểm tra toàn diện năng lực Tin học ứng dụng của học sinh lớp 10.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="p-3.5 bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-700 rounded-xl shadow-sm">
            <div class="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 font-bold flex items-center justify-center text-sm mb-2">
              <i class="fa-solid fa-file-word"></i>
            </div>
            <h5 class="font-bold text-xs text-gray-900 dark:text-white mb-1">1. Ấn phẩm Word</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400">
              Kế hoạch chi tiết tổ chức sự kiện "Ngày hội STEM & Sáng tạo số": Có trang bìa chuẩn, mục lục tự động, sơ đồ phân công nhiệm vụ bằng SmartArt và ảnh minh họa lồng chữ nghệ thuật.
            </p>
          </div>

          <div class="p-3.5 bg-white dark:bg-gray-800 border border-emerald-200 dark:border-gray-700 rounded-xl shadow-sm">
            <div class="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 font-bold flex items-center justify-center text-sm mb-2">
              <i class="fa-solid fa-file-excel"></i>
            </div>
            <h5 class="font-bold text-xs text-gray-900 dark:text-white mb-1">2. Sổ kế toán Excel</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400">
              Dự toán thu chi sự kiện: Danh mục nhà cung cấp tra cứu tự động bằng VLOOKUP/XLOOKUP, hộp kiểm CheckBox lựa chọn trang thiết bị và PivotTable phân tích cơ cấu chi phí.
            </p>
          </div>

          <div class="p-3.5 bg-white dark:bg-gray-800 border border-orange-200 dark:border-gray-700 rounded-xl shadow-sm">
            <div class="w-9 h-9 rounded-lg bg-orange-100 dark:bg-orange-950 text-orange-600 font-bold flex items-center justify-center text-sm mb-2">
              <i class="fa-solid fa-file-powerpoint"></i>
            </div>
            <h5 class="font-bold text-xs text-gray-900 dark:text-white mb-1">3. Slide PowerPoint</h5>
            <p class="text-xs text-gray-600 dark:text-gray-400">
              Bài thuyết trình pitching kêu gọi tài trợ: Thiết kế chuẩn thương hiệu với Slide Master, hiệu ứng Morph điện ảnh, trò chơi hỏi đáp có Trigger và liên kết điều hướng Hyperlink.
            </p>
          </div>
        </div>
      </div>
    `,
    practice: `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 border border-blue-200/80 dark:border-blue-800/40">
        <h4 class="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-trophy"></i> Tiêu chí đánh giá sản phẩm Rubrics (Thang điểm 10)
        </h4>
        <div class="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
          <p><strong>Tiêu chí 1 (3 điểm) - File Word:</strong> Đúng thể thức văn bản hành chính, mục lục tự động chuẩn xác, sơ đồ SmartArt rõ ràng.</p>
          <p><strong>Tiêu chí 2 (3 điểm) - File Excel:</strong> Sử dụng đúng các hàm tính toán (VLOOKUP, SUMIF, IF), dữ liệu sạch, có biểu đồ phân tích trực quan.</p>
          <p><strong>Tiêu chí 3 (3 điểm) - File PowerPoint:</strong> Thiết kế Slide Master chuyên nghiệp, chuyển động Morph mượt mà, có trò chơi tương tác bằng Trigger.</p>
          <p><strong>Tiêu chí 4 (1 điểm) - Kỹ năng mềm:</strong> Phong thái tự tin khi thuyết trình, bảo vệ dự án trước hội đồng phản biện.</p>
        </div>
      </div>
    `,
    summary: "Dự án tích hợp gắn kết tri thức tin học với thực tiễn đời sống; rèn luyện bộ kỹ năng số văn phòng toàn diện, mở ra hành trang vững chắc cho nghề nghiệp tương lai.",
    quizzes: [
      {
        question: "Trong quy trình phối hợp làm việc giữa Word, Excel và PowerPoint, thao tác nào cho phép nhúng bảng tính Excel vào slide PowerPoint mà khi sửa đổi ở Excel thì slide tự động cập nhật số liệu mới?",
        options: [
          "Sao chép bảng Excel &rarr; Tại PowerPoint chọn Paste Special &rarr; Paste Link",
          "Chụp ảnh màn hình dán vào slide",
          "Gõ lại các số liệu bằng tay",
          "Lưu bảng tính thành ảnh PNG"
        ],
        correct: 0,
        explanation: "Tính năng 'Paste Link' tạo sợi dây liên kết động giữa file nguồn Excel và file đích PowerPoint/Word."
      },
      {
        question: "Kỹ năng số văn phòng nào sau đây đóng vai trò then chốt nhất trong việc quản lý và dự toán kinh phí cho một dự án?",
        options: [
          "Sử dụng thành thạo các hàm tính toán, hàm logic và hàm tra cứu dữ liệu trong bảng tính Excel",
          "Vẽ tranh hoạt hình bằng phần mềm Paint",
          "Biết cách chơi các trò chơi điện tử",
          "Cài đặt lại hệ điều hành Windows"
        ],
        correct: 0,
        explanation: "Bảng tính Excel với các hàm tính toán và quản trị dữ liệu là công cụ số 1 trong công tác tài chính, dự toán."
      },
      {
        question: "Để bài thuyết trình báo cáo dự án trước hội đồng giám khảo đạt hiệu quả thuyết phục cao nhất, nhóm dự án nên chú trọng điều gì?",
        options: [
          "Slide cô đọng hình ảnh trực quan, số liệu minh chứng rõ ràng và phong thái diễn đạt tự tin",
          "Đọc nguyên văn toàn bộ kế hoạch từ văn bản Word dày đặc",
          "Bật nhạc thật to át tiếng người nói",
          "Nói càng nhanh càng tốt để về sớm"
        ],
        correct: 0,
        explanation: "Thuyết trình hiệu quả cần sự cô đọng, minh chứng bằng hình ảnh và dữ liệu thuyết phục kết hợp phong thái đĩnh đạc."
      },
      {
        question: "Ý nghĩa lớn nhất của việc học môn Chuyên đề Tin học 10 (Định hướng Tin học ứng dụng) là gì?",
        options: [
          "Trang bị kỹ năng giải quyết các bài toán thực tiễn trong công việc và học tập bằng các phần mềm công nghệ phổ biến",
          "Chỉ để vượt qua bài thi học kỳ",
          "Học thuộc lòng các định nghĩa lý thuyết suông",
          "Để trở thành lập trình viên hệ điều hành chuyên nghiệp"
        ],
        correct: 0,
        explanation: "Tin học ứng dụng (ICT) lấy thực hành và vận dụng công cụ số vào giải quyết bài toán đời sống làm mục tiêu trọng tâm."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lessons;
}
