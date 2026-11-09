// Data for 15 lessons of Chuyên đề Tin học ứng dụng 10 (ICT)
module.exports = {
  1: {
    num: 1,
    title: "Lập dàn ý và định dạng với các công cụ nâng cao",
    badge: "Word nâng cao",
    topic: "Chuyên đề 1: Thực hành làm việc với các tệp văn bản",
    chapter: 1,
    summary: "Nắm vững phong cách trình bày văn bản chuyên nghiệp, quản lí hệ thống phân cấp Styles (Heading 1/2/3, Title, Normal) và điều hướng, sắp xếp cấu trúc tài liệu bằng Navigation Pane.",
    objectives: [
      "Hiểu rõ vai trò của sự nhất quán trong định dạng văn bản chuyên nghiệp.",
      "Biết cách áp dụng, tùy chỉnh (Modify) và tạo mới các Style theo cấp bậc.",
      "Sử dụng thành thạo Navigation Pane để xem nhanh, di chuyển và sắp xếp lại các mục trong tài liệu.",
      "Xây dựng dàn ý chuẩn cho sản phẩm 'Cẩm nang du lịch' trong dự án xuyên suốt."
    ],
    sections: [
      {
        heading: "1. Phong cách trình bày văn bản và quản lí hệ thống Styles",
        items: [
          {
            badge: "Tính nhất quán",
            title: "Tầm quan trọng của Styles trong văn bản dài",
            points: [
              "<strong>Văn bản chuyên nghiệp:</strong> Cần đảm bảo tính khoa học, thẩm mỹ và sự nhất quán giữa các thành phần cùng cấp để người đọc dễ theo dõi cấu trúc nội dung.",
              "<strong>Khái niệm Style:</strong> Là tập hợp các thuộc tính định dạng được thiết lập sẵn (phông chữ, cỡ chữ, màu sắc, kiểu chữ, căn lề, khoảng cách đoạn line/paragraph spacing).",
              "<strong>Các kiểu Style chuẩn:</strong> <code>Title</code> (tiêu đề chính tài liệu), <code>Subtitle</code> (tiêu đề phụ), <code>Heading 1</code> (chương, phần chính), <code>Heading 2, Heading 3</code> (tiểu mục cấp con), <code>Normal</code> (đoạn văn bản thông thường).",
              "<strong>Tự động cập nhật đồng bộ:</strong> Khi chỉnh sửa thuộc tính của một Style (Modify Style), toàn bộ các đoạn văn bản đang sử dụng Style đó sẽ được cập nhật tự động tức thì trên toàn bộ tài liệu."
            ]
          },
          {
            badge: "Thao tác Styles",
            title: "Quy trình áp dụng và tùy chỉnh Style",
            points: [
              "<strong>Áp dụng:</strong> Chọn đoạn văn bản cần định dạng -> Trong thẻ <strong>Home</strong>, nhóm <strong>Styles</strong>, chọn kiểu tương ứng (Heading 1, 2, 3...).",
              "<strong>Chỉnh sửa (Modify):</strong> Nháy chuột phải vào mẫu Style trong thanh Styles -> Chọn <strong>Modify...</strong> -> Điều chỉnh phông chữ hỗ trợ tiếng Việt có dấu (Unicode như Arial, Times New Roman, Calibri), cỡ chữ, màu sắc, căn lề -> Nhấn OK.",
              "<strong>Tạo Style mới:</strong> Nháy mở hộp thoại Styles (Alt+Ctrl+Shift+S) -> Chọn biểu tượng <em>New Style</em> -> Đặt tên và thiết lập các thuộc tính mong muốn.",
              "<strong>Ưu điểm vượt trội:</strong> Giúp văn bản có phân cấp rõ ràng, là điều kiện tiên quyết để tạo mục lục tự động và điều hướng văn bản dễ dàng."
            ]
          }
        ]
      },
      {
        heading: "2. Điều hướng cấu trúc bằng Navigation Pane & Vận dụng dự án",
        items: [
          {
            badge: "Công cụ Navigation",
            title: "Khai thác ngăn điều hướng Navigation Pane",
            points: [
              "<strong>Bật ngăn điều hướng:</strong> Vào thẻ <strong>View</strong> -> Nhóm <strong>Show</strong> -> Tích chọn ô <strong>Navigation Pane</strong> (hoặc nhấn phím tắt <code>Ctrl + F</code>).",
              "<strong>Hiển thị phân cấp:</strong> Ngăn bên trái hiển thị cây cấu trúc tiêu đề (Headings) của toàn bộ tài liệu theo đúng cấp độ thụt dòng.",
              "<strong>Chuyển nhanh trang:</strong> Nháy chuột vào bất kì tiêu đề nào trong Navigation Pane để lập tức nhảy con trỏ tới phần nội dung đó.",
              "<strong>Sắp xếp lại bố cục cực nhanh:</strong> Kéo thả tiêu đề trong Navigation Pane để di chuyển toàn bộ phần nội dung thuộc tiêu đề đó đến vị trí mới mà không cần cắt/dán thủ công.",
              "<strong>Kiểm soát lỗi phân cấp:</strong> Giúp phát hiện ngay tiêu đề nào bị sai cấp hoặc quên chưa gán Heading."
            ]
          },
          {
            badge: "Dự án Cẩm nang",
            title: "Xây dựng dàn ý cẩm nang du lịch nhóm",
            points: [
              "<strong>Lựa chọn địa danh:</strong> Nhóm thảo luận chọn một địa danh du lịch tại Việt Nam (Sa Pa, Đà Nẵng, Phú Quốc, Hà Giang...) và phân công nhiệm vụ thu thập tư liệu.",
              "<strong>Cấu trúc chuẩn của cẩm nang:</strong> Gồm Tiêu đề (Title), Giới thiệu chung, Danh lam thắng cảnh (Heading 1/2), Ẩm thực đặc sản, Lịch trình gợi ý và Thông tin liên hệ hữu ích.",
              "<strong>Quy trình thực hiện:</strong> Xác định đối tượng độc giả -> Phác thảo cấu trúc -> Gán Styles đúng cấp -> Mở Navigation Pane rà soát bố cục -> Lưu tệp với tên chuẩn hóa theo quy định."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Lợi ích lớn nhất của việc sử dụng các Style (Heading 1, Heading 2...) thay vì định dạng thủ công từng dòng tiêu đề là gì?",
        options: [
          "Giúp văn bản có dung lượng nhẹ hơn một nửa",
          "Tự động cập nhật đồng bộ toàn bộ tài liệu khi sửa Style và tạo được mục lục tự động",
          "Chống được sao chép và chỉnh sửa từ người khác",
          "Bắt buộc phần mềm phải in ra hai mặt giấy"
        ],
        answer: 1,
        explain: "Khi sử dụng Styles, mọi thay đổi trong thiết lập Style sẽ lập tức đồng bộ toàn văn bản, đồng thời tạo cơ sở dữ liệu phân cấp để Word trích xuất mục lục tự động và hiển thị trên Navigation Pane."
      },
      {
        q: "Để hiển thị ngăn điều hướng Navigation Pane trong Microsoft Word, người dùng thao tác như thế nào?",
        options: [
          "Vào thẻ Insert -> Chọn Navigation",
          "Vào thẻ View -> Nhóm Show -> Tích chọn Navigation Pane (hoặc Ctrl+F)",
          "Vào thẻ Layout -> Chọn Margins",
          "Vào thẻ Review -> Chọn Track Changes"
        ],
        answer: 1,
        explain: "Vào thẻ View -> tích chọn Navigation Pane trong nhóm Show (hoặc nhấn Ctrl + F và chọn tab Headings) để mở ngăn điều hướng cấu trúc tài liệu."
      },
      {
        q: "Trong Navigation Pane, bạn có thể thực hiện thao tác nào sau đây đối với các tiêu đề mục?",
        options: [
          "Kéo thả tiêu đề để di chuyển toàn bộ nội dung của mục đó đến vị trí khác",
          "Đổi màu toàn bộ hình ảnh trong tài liệu",
          "Chuyển đổi văn bản thành tệp âm thanh MP3",
          "Gửi email tài liệu tự động tới khách hàng"
        ],
        answer: 0,
        explain: "Navigation Pane cho phép người dùng kéo thả trực tiếp các tiêu đề mục để hoán đổi vị trí và tái cấu trúc nội dung tài liệu cực kì nhanh chóng mà không cần bôi đen cắt dán."
      }
    ]
  },

  2: {
    num: 2,
    title: "Trình bày văn bản với định dạng ảnh nâng cao",
    badge: "Word nâng cao",
    topic: "Chuyên đề 1: Thực hành làm việc với các tệp văn bản",
    chapter: 1,
    summary: "Làm chủ các công cụ biên tập ảnh Picture Format và 7 chế độ bố cục Wrap Text nhằm trình bày tài liệu du lịch trực quan, chuyên nghiệp, không bị trôi văn bản hay che lấp nội dung.",
    objectives: [
      "Thực hiện thành thạo các thao tác chèn, cắt xén (Crop), đổi kích thước và áp dụng Picture Styles.",
      "Phân biệt và vận dụng đúng 7 chế độ Wrap Text (In Line, Square, Tight, Behind Text, In Front of Text...).",
      "Biết cách khóa vị trí và kiểm soát sự tương tác giữa hình ảnh và dòng văn bản.",
      "Trình bày các trang giới thiệu danh lam thắng cảnh trong Cẩm nang du lịch đảm bảo tính thẩm mỹ cao."
    ],
    sections: [
      {
        heading: "1. Công cụ định dạng ảnh chuyên nghiệp (Picture Format)",
        items: [
          {
            badge: "Chèn & Chỉnh sửa",
            title: "Các tính năng cơ bản trong Picture Format",
            points: [
              "<strong>Chèn ảnh:</strong> Vào <strong>Insert</strong> -> <strong>Pictures</strong> -> Chọn <em>This Device</em> (ảnh từ máy tính) hoặc <em>Stock Images / Online Pictures</em>.",
              "<strong>Picture Styles:</strong> Khung mẫu tạo sẵn đường viền mềm, đổ bóng, phản chiếu gương, góc lượn tròn hoặc khung 3D giúp ảnh hòa quyện tự nhiên với trang sách.",
              "<strong>Hiệu chỉnh màu sắc & hiệu ứng:</strong> <code>Corrections</code> (chỉnh độ sáng/tương phản/độ nét), <code>Color</code> (đổi tông màu, độ bão hòa, tạo ảnh đơn sắc), <code>Artistic Effects</code> (hiệu ứng tranh vẽ, phác thảo).",
              "<strong>Cắt xén (Crop):</strong> Loại bỏ chi tiết thừa quanh ảnh, hoặc cắt theo hình khối đặc biệt (<em>Crop to Shape</em>) như hình oval, hình trái tim, ngôi sao."
            ]
          },
          {
            badge: "Kích thước & Tỉ lệ",
            title: "Quy tắc kiểm soát kích thước và chất lượng ảnh",
            points: [
              "<strong>Giữ nguyên tỉ lệ khung hình:</strong> Luôn kéo thả tại 4 nút tròn ở 4 góc của ảnh để phóng to/thu nhỏ, tránh kéo nút ở cạnh bên làm ảnh bị méo mó, biến dạng nhân vật và cảnh vật.",
              "<strong>Độ phân giải phù hợp:</strong> Chọn ảnh rõ nét, không bị vỡ hạt (pixelated) khi xem ở chế độ 100% hoặc khi in ra giấy.",
              "<strong>Ghi chú nguồn ảnh (Caption):</strong> Chuột phải vào ảnh -> Chọn <strong>Insert Caption...</strong> để gắn nhãn chú thích (ví dụ: <em>Hình 1. Toàn cảnh thung lũng Mường Hoa</em>) và trích dẫn nguồn tác giả/bản quyền hợp pháp."
            ]
          }
        ]
      },
      {
        heading: "2. Làm chủ 7 chế độ Wrap Text và bố cục trang cẩm nang",
        items: [
          {
            badge: "Wrap Text",
            title: "Phân biệt chi tiết 7 kiểu tương tác Ảnh - Văn bản",
            points: [
              "<strong>1. In Line with Text:</strong> Ảnh nằm trên cùng dòng với chữ như một kí tự lớn; di chuyển theo dòng chữ, phù hợp với biểu tượng nhỏ hoặc ảnh sơ đồ đơn dòng.",
              "<strong>2. Square:</strong> Văn bản bao bọc vuông vắn xung quanh khung chữ nhật của ảnh; kiểu thông dụng nhất trong báo chí và cẩm nang.",
              "<strong>3. Tight:</strong> Chữ bao sát theo đường bao thực tế của đối tượng trong ảnh (không bao theo khung chữ nhật ngoài).",
              "<strong>4. Through:</strong> Chữ lấp đầy cả các khoảng trống bên trong đường bao của đối tượng hình ảnh.",
              "<strong>5. Top and Bottom:</strong> Chữ chỉ xuất hiện ở phía trên và phía dưới bức ảnh, hai bên sườn ảnh để trống hoàn toàn.",
              "<strong>6. Behind Text:</strong> Ảnh chìm ra phía sau nền chữ (dùng làm ảnh nền mờ trang sách, cần chỉnh màu ảnh thật nhạt để chữ nổi rõ).",
              "<strong>7. In Front of Text:</strong> Ảnh nổi lên trên mặt chữ (sẽ che khuất chữ bên dưới nếu không di chuyển hợp lí)."
            ]
          },
          {
            badge: "Vận dụng cẩm nang",
            title: "Bố cục hình ảnh du lịch chuyên nghiệp",
            points: [
              "<strong>Không để ảnh trôi tự do:</strong> Kiểm tra tùy chọn <em>Fix position on page</em> hoặc neo ảnh (Anchor) để khi bổ sung thêm đoạn văn, ảnh không bị nhảy sang trang khác.",
              "<strong>Cân đối thị giác:</strong> Tránh đặt quá nhiều ảnh trên một trang; xếp ảnh so le trái - phải giữa các đoạn để tạo nhịp điệu sinh động cho cẩm nang.",
              "<strong>Kiểm tra chế độ xem in:</strong> Vào <strong>File -> Print</strong> để xem trước bản in, đảm bảo không có hình ảnh nào bị tràn mép giấy hoặc đè lên tiêu đề trang."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Kiểu bố cục Wrap Text nào khiến dòng chữ chạy bao bọc vuông vắn xung quanh khung chữ nhật của bức ảnh?",
        options: [
          "In Line with Text",
          "Square",
          "Behind Text",
          "Top and Bottom"
        ],
        answer: 1,
        explain: "Chế độ Square làm cho văn bản bao bọc xung quanh khung chữ nhật của ảnh, giúp đoạn văn thẳng thớm, đẹp mắt."
      },
      {
        q: "Khi muốn sử dụng một bức ảnh phong cảnh làm hình nền mờ phía sau các đoạn văn bản giới thiệu, bạn phải chọn kiểu Wrap Text nào?",
        options: [
          "Tight",
          "In Front of Text",
          "Behind Text",
          "Through"
        ],
        answer: 2,
        explain: "Behind Text đặt ảnh nằm chìm hoàn toàn ở lớp phía sau văn bản, rất phù hợp để làm ảnh nền trang sách hoặc watermark."
      },
      {
        q: "Thao tác chuẩn xác để thay đổi kích thước ảnh mà KHÔNG làm méo mó tỉ lệ hình ảnh là gì?",
        options: [
          "Kéo các nút điều khiển ở cạnh bên trái hoặc cạnh phải",
          "Kéo các nút điều khiển ở 4 góc của ảnh",
          "Nhấn phím Enter liên tục trên bàn phím",
          "Cắt xén ảnh sang định dạng GIF"
        ],
        answer: 1,
        explain: "Kéo các nút tròn ở 4 góc của bức ảnh giúp tỉ lệ chiều rộng và chiều cao luôn được bảo toàn đồng dạng, tránh làm biến dạng hình thể."
      }
    ]
  },

  3: {
    num: 3,
    title: "Trình bày văn bản với hình khối và hộp văn bản",
    badge: "Word nâng cao",
    topic: "Chuyên đề 1: Thực hành làm việc với các tệp văn bản",
    chapter: 1,
    summary: "Khai thác sức mạnh của Shapes, Text Box, WordArt và kĩ thuật xếp lớp (Arrange / Bring to Front) để thiết kế trang bìa, nhãn ghi chú và các chuyên mục ẩm thực ấn tượng kiểu tạp chí hiện đại.",
    objectives: [
      "Sử dụng thành thạo các công cụ chèn và định dạng Shapes (Shape Fill, Outline, Effects).",
      "Sử dụng Text Box để đặt các đoạn chữ độc lập, tùy biến hướng chữ (Text Direction) và căn lề.",
      "Làm chủ kĩ thuật quản lí thứ tự lớp đối tượng (Bring Forward, Send Backward, Selection Pane).",
      "Thiết kế trang giới thiệu Ẩm thực & Đặc sản du lịch độc đáo trong Cẩm nang."
    ],
    sections: [
      {
        heading: "1. Thiết kế với Shapes, Text Box và hiệu ứng mỹ thuật",
        items: [
          {
            badge: "Hình khối & Hộp chữ",
            title: "Vai trò của Shapes và Text Box trong dàn trang",
            points: [
              "<strong>Shapes (Hình khối):</strong> Tạo khung viền trang trí, dải băng tóm tắt (ribbon), mũi tên chỉ dẫn, ngôi sao đánh giá chất lượng hoặc hộp điểm nhấn thông tin.",
              "<strong>Text Box (Hộp văn bản):</strong> Vùng chứa chữ độc lập với dòng chảy văn bản chính, có thể đặt ở bất kì vị trí nào trên trang; rất hữu ích để làm trích dẫn nổi bật (callout), mẹo du lịch hoặc nhãn giá.",
              "<strong>Shape Styles:</strong> Chọn bảng màu phối sẵn hoặc tự do tùy chỉnh: <code>Shape Fill</code> (màu nền đặc, dải màu gradient, hoa văn pattern hoặc lồng ảnh vào hình), <code>Shape Outline</code> (màu viền, độ dày viền weight, nét đứt dashes).",
              "<strong>Shape Effects:</strong> Tạo chiều sâu với hiệu ứng đổ bóng (Shadow), phát sáng (Glow), viền mềm (Soft Edges), vát cạnh (Bevel) và phối cảnh không gian 3D."
            ]
          },
          {
            badge: "Định dạng chữ độc lập",
            title: "Tùy biến chữ trong Text Box & WordArt",
            points: [
              "<strong>Text Direction:</strong> Đổi hướng xoay chữ ngang, xoay dọc 90 độ hoặc 270 độ để tạo nhãn gáy sách hoặc đề mục bên lề trang.",
              "<strong>Align Text:</strong> Căn lề chữ lên mép trên (Top), ở giữa (Middle) hoặc xuống mép đáy (Bottom) của khung hộp văn bản.",
              "<strong>WordArt:</strong> Kiểu chữ nghệ thuật tạo khối viền và bóng bẩy cho tiêu đề lớn của cẩm nang hoặc tên món ăn đặc sản.",
              "<strong>Trong suốt hóa Text Box:</strong> Đặt <em>Shape Fill = No Fill</em> và <em>Shape Outline = No Outline</em> khi muốn chữ hiển thị trực tiếp đè lên ảnh nền mà không có khung viền vuông che lấp."
            ]
          }
        ]
      },
      {
        heading: "2. Kĩ thuật xếp lớp, căn lề và nhóm đối tượng",
        items: [
          {
            badge: "Quản lí lớp",
            title: "Trật tự lớp hiển thị (Arrange & Selection Pane)",
            points: [
              "<strong>Nguyên lí xếp lớp (Layering):</strong> Đối tượng chèn sau mặc định sẽ nằm đè lên đối tượng chèn trước. Khi thiết kế trang bìa hay poster, cần điều chỉnh trật tự trước - sau hợp lí.",
              "<strong>Bring Forward / Bring to Front:</strong> Đưa đối tượng được chọn tiến lên một lớp hoặc lên lớp trên cùng nhất.",
              "<strong>Send Backward / Send to Back:</strong> Đưa đối tượng lùi xuống một lớp hoặc xuống lớp dưới cùng (nằm sau mọi đối tượng khác).",
              "<strong>Selection Pane:</strong> Bật ngăn quản lí lớp để nhìn thấy danh sách toàn bộ các ảnh, hình khối, hộp văn bản; có thể ẩn/hiện từng đối tượng hoặc đổi tên để quản lí dễ dàng."
            ]
          },
          {
            badge: "Căn lề & Nhóm",
            title: "Căn chỉnh hàng lối (Align) và Nhóm (Group)",
            points: [
              "<strong>Align (Căn chỉnh đối tượng):</strong> Giúp các hình khối thẳng hàng nhau tăm tắp (Align Left, Align Center, Align Top...) hoặc giãn cách đều nhau (Distribute Horizontally / Vertically).",
              "<strong>Group (Nhóm đối tượng):</strong> Giữ phím Shift chọn nhiều đối tượng (ví dụ: ảnh món ăn + hộp nhãn giá + hình ngôi sao) -> Chuột phải chọn <strong>Group</strong> -> Biến thành một khối thống nhất.",
              "<strong>Lợi ích của Group:</strong> Khi di chuyển hoặc đổi kích thước, toàn bộ nhóm đối tượng sẽ đi cùng nhau, không lo bị xô lệch vị trí ban đầu."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Khi muốn một hộp văn bản (Text Box) hiển thị chữ trực tiếp đè lên ảnh mà không có khung viền và màu nền che khuất ảnh, bạn cần thiết lập như thế nào?",
        options: [
          "Xóa bỏ hộp văn bản và gõ chữ vào thanh trạng thái",
          "Chọn Shape Fill = No Fill và Shape Outline = No Outline",
          "Đổi phông chữ sang định dạng Webdings",
          "Giảm cỡ chữ xuống 1 pt"
        ],
        answer: 1,
        explain: "Thiết lập Shape Fill = No Fill (không màu nền) và Shape Outline = No Outline (không đường viền) giúp hộp văn bản trở nên trong suốt, chỉ hiển thị phần chữ nổi trên ảnh nền."
      },
      {
        q: "Lệnh nào sau đây dùng để đưa một hình khối đang bị che khuất lên vị trí trên cùng của tất cả các lớp đối tượng?",
        options: [
          "Send to Back",
          "Bring to Front",
          "Align Left",
          "Rotate 90"
        ],
        answer: 1,
        explain: "Lệnh Bring to Front (trong nhóm lệnh Arrange) sẽ lập tức đưa đối tượng được chọn lên tầng hiển thị cao nhất, không bị bất kì đối tượng nào che khuất."
      },
      {
        q: "Thao tác 'Group' (Nhóm các đối tượng) mang lại tiện ích chính nào khi thiết kế tài liệu?",
        options: [
          "Tự động dịch văn bản sang tiếng Anh",
          "Kết hợp nhiều hình ảnh, hình khối thành một thể thống nhất để di chuyển và thay đổi kích thước mà không bị lệch bố cục",
          "Tự động tính toán tổng số tiền trong hóa đơn",
          "Chuyển tệp văn bản thành một đoạn clip ngắn"
        ],
        answer: 1,
        explain: "Lệnh Group gắn kết các hình khối, ảnh và nhãn chữ lại với nhau, giúp người dùng dễ dàng di chuyển cả cụm mà không lo từng chi tiết nhỏ bị xô lệch."
      }
    ]
  },

  4: {
    num: 4,
    title: "Tạo mục lục và xuất bản văn bản",
    badge: "Word nâng cao",
    topic: "Chuyên đề 1: Thực hành làm việc với các tệp văn bản",
    chapter: 1,
    summary: "Xây dựng mục lục tự động dựa trên cây phân cấp Heading, cập nhật số trang linh hoạt và xuất bản tài liệu hoàn chỉnh sang định dạng PDF chuẩn mực để in ấn hoặc phát hành điện tử.",
    objectives: [
      "Hiểu rõ nguyên tắc hoạt động của tính năng Table of Contents tự động trong Microsoft Word.",
      "Thực hiện chèn, tùy chỉnh số cấp hiển thị, kí tự dẫn (Tab Leader) và cập nhật (Update Table) mục lục.",
      "Khắc phục các sự cố thường gặp: thiếu mục, thừa mục hoặc sai số trang trong mục lục.",
      "Rà soát tổng thể và xuất bản tệp 'Cẩm nang du lịch' sang định dạng chuẩn PDF chất lượng cao."
    ],
    sections: [
      {
        heading: "1. Tạo và quản lí mục lục tự động (Table of Contents)",
        items: [
          {
            badge: "Nguyên lí & Chèn",
            title: "Quy trình thiết lập mục lục tự động",
            points: [
              "<strong>Cơ sở trích xuất:</strong> Word tự động quét toàn bộ tài liệu để tìm kiếm các đoạn văn bản đã được gán các cấp <code>Heading 1, Heading 2, Heading 3...</code> để đưa vào mục lục.",
              "<strong>Bước thực hiện:</strong> Đặt con trỏ soạn thảo tại vị trí muốn đặt mục lục (thường sau trang bìa hoặc trang lời giới thiệu) -> Vào thẻ <strong>References</strong> -> Chọn <strong>Table of Contents</strong> -> Chọn mẫu mục lục tự động (<em>Automatic Table 1</em> hoặc <em>2</em>).",
              "<strong>Tùy chỉnh nâng cao (Custom Table of Contents):</strong> Chọn hiển thị hoặc ẩn số trang (Show page numbers), căn số trang sát lề phải (Right align page numbers), chọn kiểu kí tự dẫn nối giữa mục và trang (Tab leader: dấu chấm ..., nét gạch --- hoặc nét liền ___).",
              "<strong>Số cấp hiển thị (Show levels):</strong> Mặc định hiển thị 3 cấp (Heading 1-3); có thể tăng lên 4-5 cấp hoặc giảm xuống 2 cấp tùy theo độ dài của cẩm nang."
            ]
          },
          {
            badge: "Cập nhật & Sửa lỗi",
            title: "Cập nhật mục lục và xử lí lỗi thường gặp",
            points: [
              "<strong>Lệnh Update Table:</strong> Khi thêm/xóa nội dung hoặc chỉnh sửa câu chữ tiêu đề, chuột phải vào mục lục -> Chọn <strong>Update Field</strong> (hoặc phím <code>F9</code>).",
              "<strong>2 Tùy chọn cập nhật:</strong> <code>Update page numbers only</code> (chỉ cập nhật lại số trang khi văn bản bị dồn trang), <code>Update entire table</code> (cập nhật toàn bộ cả tên tiêu đề lẫn số trang).",
              "<strong>Xử lí lỗi thiếu mục:</strong> Do đoạn tiêu đề đó chưa được gán Heading (vẫn là Normal) -> Chọn đoạn văn đó, gán lại Heading 1/2/3 tương ứng rồi nhấn Update Table.",
              "<strong>Xử lí lỗi thừa đoạn văn trong mục lục:</strong> Do người dùng vô tình gán Heading cho cả một đoạn văn bản dài -> Bôi đen đoạn văn đó, gán lại thành kiểu <em>Normal</em> -> Cập nhật lại mục lục."
            ]
          }
        ]
      },
      {
        heading: "2. Kiểm tra tổng thể và xuất bản tệp PDF chuẩn",
        items: [
          {
            badge: "Rà soát tài liệu",
            title: "Quy chuẩn kiểm tra trước khi phát hành",
            points: [
              "<strong>Chính tả & ngữ pháp:</strong> Đọc lại toàn bộ nội dung, đảm bảo không có lỗi gõ tiếng Việt (sai dấu, dính chữ), tên địa danh phải viết hoa trang trọng.",
              "<strong>Bố cục & ngắt trang:</strong> Tránh để tiêu đề nằm cô đơn ở dòng cuối trang trong khi nội dung nhảy sang trang sau (lỗi Orphan/Widow); dùng ngắt trang chủ động (<strong>Page Break: Ctrl + Enter</strong>).",
              "<strong>Liên kết mục lục điện tử:</strong> Trong tệp PDF, mục lục tự động cho phép người đọc nháy chuột vào tên mục để nhảy tức thì đến trang tương ứng."
            ]
          },
          {
            badge: "Xuất file PDF",
            title: "Ưu điểm của định dạng PDF và thao tác xuất bản",
            points: [
              "<strong>Tại sao chọn PDF (Portable Document Format):</strong> Giữ nguyên vẹn 100% phông chữ, định dạng, vị trí ảnh và bố cục trang trên mọi thiết bị và hệ điều hành (Windows, macOS, smartphone), ngăn chặn người xem vô tình sửa đổi nội dung.",
              "<strong>Thao tác xuất tệp:</strong> Vào <strong>File</strong> -> Chọn <strong>Export</strong> -> <strong>Create PDF/XPS Document</strong> (hoặc dùng <em>Save As</em> rồi chọn đuôi .pdf).",
              "<strong>Nghiệm thu Chuyên đề 1:</strong> Sản phẩm 'Cẩm nang du lịch' hoàn thiện dạng PDF có trang bìa mỹ thuật, hệ thống tiêu đề chuẩn, hình ảnh minh họa sắc nét và mục lục tương tác mượt mà."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Điều kiện tiên quyết để Microsoft Word có thể tạo được mục lục tự động là gì?",
        options: [
          "Văn bản phải được lưu dưới định dạng .txt",
          "Các tiêu đề mục trong tài liệu phải được áp dụng đúng các kiểu Style như Heading 1, Heading 2...",
          "Tài liệu phải chứa ít nhất 10 bức ảnh màu",
          "Phải cài đặt phần mềm Adobe Acrobat Pro trước khi gõ chữ"
        ],
        answer: 1,
        explain: "Tính năng Table of Contents tự động dựa hoàn toàn vào các đoạn văn bản được đánh dấu bằng các kiểu Heading (Heading 1, 2, 3...) để trích xuất thành danh mục."
      },
      {
        q: "Sau khi viết thêm nội dung khiến các đề mục bị đẩy sang các trang tiếp theo, bạn cần làm gì để mục lục hiển thị đúng số trang mới?",
        options: [
          "Xóa mục lục cũ đi và tự gõ lại toàn bộ bằng tay",
          "Chuột phải vào mục lục -> Chọn Update Field (hoặc F9) -> Chọn Update page numbers only hoặc Update entire table",
          "Đổi phông chữ của toàn bộ tài liệu sang Times New Roman",
          "Nhấn tổ hợp phím Ctrl + Z liên tục 10 lần"
        ],
        answer: 1,
        explain: "Chỉ cần nhấn F9 hoặc chọn Update Table để Word tự động dò quét lại và cập nhật chính xác số trang mới nhất của từng mục."
      },
      {
        q: "Lợi ích nổi bật nhất khi xuất bản Cẩm nang du lịch ra định dạng tệp PDF là gì?",
        options: [
          "Giúp giảm số trang của cẩm nang xuống còn 1 trang duy nhất",
          "Bảo toàn nguyên vẹn bố cục, phông chữ, vị trí ảnh trên mọi máy tính và thiết bị đọc mà không bị lỗi nhảy dòng",
          "Tự động phát âm thanh thuyết minh địa danh",
          "Cho phép người đọc tùy ý xóa bỏ các điều khoản dịch vụ"
        ],
        answer: 1,
        explain: "Định dạng PDF khóa cứng bố cục hiển thị chuẩn xác, giúp người đọc dù mở trên điện thoại hay máy tính khác loại đều nhìn thấy trang in nguyên vẹn như thiết kế."
      }
    ]
  },

  5: {
    num: 5,
    title: "Tạo dữ liệu ban đầu với công cụ định dạng bảng",
    badge: "Excel chuyên sâu",
    topic: "Chuyên đề 2: Thực hành sử dụng phần mềm bảng tính",
    chapter: 2,
    summary: "Xây dựng cơ sở dữ liệu nguồn chuẩn hóa bằng công cụ Format as Table trong Excel; tận dụng Total Row tự động, nút lọc Filter và khả năng tự co giãn bảng để quản lí bảng giá dịch vụ du lịch.",
    objectives: [
      "Hiểu rõ ưu thế của bảng có cấu trúc (Excel Table) so với vùng dữ liệu ô thông thường.",
      "Sử dụng thành thạo công cụ Format as Table, đặt tên bảng và cấu hình Table Design.",
      "Khai thác hàng tổng cộng (Total Row) với các hàm SUM, AVERAGE, COUNT, MAX, MIN.",
      "Thiết lập bảng dữ liệu giá gốc dịch vụ (phòng khách sạn, xe du lịch, vé tham quan) cho dự án."
    ],
    sections: [
      {
        heading: "1. Khởi tạo và thiết lập bảng thông minh (Format as Table)",
        items: [
          {
            badge: "Format as Table",
            title: "Ưu thế vượt trội của bảng Excel Table",
            points: [
              "<strong>Vùng ô thông thường vs Bảng cấu trúc:</strong> Vùng ô rời rạc không tự mở rộng và khó quản lí công thức; trong khi <em>Format as Table</em> biến vùng dữ liệu thành đối tượng bảng thông minh có tên riêng.",
              "<strong>Cách tạo:</strong> Chọn vùng dữ liệu (hoặc đứng ở 1 ô trong vùng) -> Vào thẻ <strong>Home</strong> -> Chọn <strong>Format as Table</strong> -> Chọn mẫu giao diện -> Tích chọn <em>My table has headers</em> nếu dữ liệu đã có dòng tiêu đề cột.",
              "<strong>Đặt tên bảng (Table Name):</strong> Trong thẻ ngữ cảnh <strong>Table Design</strong>, đặt tên bảng ngắn gọn, không dấu, không dấu cách (ví dụ: <code>BangGiaPhong</code>, <code>BangXe</code>) để sử dụng trong công thức tham chiếu cấu trúc.",
              "<strong>Tự động co giãn:</strong> Khi gõ thêm hàng mới ở cuối bảng hoặc chèn thêm cột, bảng sẽ tự động mở rộng phạm vi và tự sao chép định dạng cũng như công thức cho hàng mới."
            ]
          },
          {
            badge: "Table Design",
            title: "Các tùy chọn hiển thị trong Table Design",
            points: [
              "<strong>Header Row:</strong> Bật/tắt hàng tiêu đề của bảng.",
              "<strong>Banded Rows / Banded Columns:</strong> Tô màu xen kẽ các hàng/cột giúp mắt người đọc dễ theo dõi số liệu trên bảng lớn mà không bị nhìn nhầm dòng.",
              "<strong>First Column / Last Column:</strong> In đậm cột đầu tiên (chứa mã dịch vụ) hoặc cột cuối cùng (chứa thành tiền).",
              "<strong>Filter Button:</strong> Tự động tích hợp nút lọc/sắp xếp mũi tên ở mỗi tiêu đề cột để lọc nhanh số liệu theo điều kiện."
            ]
          }
        ]
      },
      {
        heading: "2. Khai thác Total Row & Chuẩn bị dữ liệu báo giá dự án",
        items: [
          {
            badge: "Total Row",
            title: "Hàng tổng hợp dữ liệu tự động (Total Row)",
            points: [
              "<strong>Bật Total Row:</strong> Tích chọn ô <strong>Total Row</strong> trong thẻ Table Design; một hàng mới sẽ xuất hiện ở đáy bảng.",
              "<strong>Công thức tích hợp sẵn:</strong> Nháy vào ô ở hàng Total, menu thả xuống cung cấp các phép tính nhanh: <code>Sum</code> (tổng cộng), <code>Average</code> (trung bình), <code>Count</code> (đếm số dòng), <code>Max</code> (giá cao nhất), <code>Min</code> (giá thấp nhất).",
              "<strong>Dùng hàm SUBTOTAL ngầm định:</strong> Phép tính trong Total Row tự động bỏ qua các hàng bị ẩn khi dùng bộ lọc (Filter), cho kết quả tức thời theo phần dữ liệu đang hiển thị."
            ]
          },
          {
            badge: "Dữ liệu dự án",
            title: "Xây dựng bảng giá gốc dịch vụ du lịch",
            points: [
              "<strong>Nguyên tắc nhập liệu chuẩn:</strong> Mỗi cột chỉ chứa một kiểu dữ liệu đồng nhất (Cột Mã: Text; Cột Tên dịch vụ: Text; Cột Đơn giá: Number định dạng tiền tệ; Cột Đơn vị tính: Text).",
              "<strong>Các bảng giá cần tạo trong Sheet Nguồn:</strong> Bảng giá phòng (Phòng đơn, Phòng đôi, Phòng gia đình, Suite); Bảng giá phương tiện (Xe 16 chỗ, 29 chỗ, 45 chỗ); Bảng giá dịch vụ cộng thêm (Hướng dẫn viên, vé thắng cảnh, bảo hiểm).",
              "<strong>Tra cứu số liệu thực tế:</strong> Khảo sát giá thị trường thực tế của địa danh đã chọn để nhập số liệu chân thực, giúp dự toán tài chính sát thực tế."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Điểm tiện ích đặc biệt khi nhập thêm dữ liệu vào ngay bên dưới một bảng đã định dạng bằng 'Format as Table' là gì?",
        options: [
          "Bảng sẽ tự động khóa lại không cho nhập thêm",
          "Bảng tự động mở rộng kích thước để ôm trọn dòng mới, đồng thời tự áp dụng định dạng và công thức",
          "Toàn bộ dữ liệu cũ sẽ bị xóa hết",
          "Phần mềm sẽ tự động đóng lại"
        ],
        answer: 1,
        explain: "Excel Table có tính năng tự mở rộng thông minh (auto-expand), khi người dùng gõ thêm dòng sát đáy bảng, bảng sẽ tự động nhận diện và nới rộng phạm vi tính toán."
      },
      {
        q: "Tính năng 'Total Row' trong Table Design của Excel cung cấp khả năng nào sau đây?",
        options: [
          "Chỉ cho phép cộng tổng tiền thủ công bằng máy tính cầm tay",
          "Thêm một hàng tổng kết ở cuối bảng và cho phép chọn nhanh các hàm thống kê như Sum, Average, Count, Max, Min qua menu thả xuống",
          "Tự động gửi hóa đơn cho ngân hàng",
          "Xóa bỏ các số âm trong bảng"
        ],
        answer: 1,
        explain: "Hàng Total Row tích hợp menu danh sách các phép tính thông dụng (Sum, Average, Count, Max, Min...) giúp tổng hợp số liệu cực kì nhanh và chuẩn xác."
      },
      {
        q: "Để công thức tra cứu sau này dễ hiểu và dễ viết, bước đặt tên bảng (Table Name) nên tuân thủ quy tắc nào?",
        options: [
          "Đặt tên thật dài có dấu cách và kí tự đặc biệt như @, #, $",
          "Đặt tên ngắn gọn, có ý nghĩa gợi nhớ nội dung, không dấu cách và không dấu tiếng Việt (ví dụ: BangGiaPhong)",
          "Bắt buộc phải đặt tên là Table1 cho tất cả các bảng",
          "Để trống không cần đặt tên"
        ],
        answer: 1,
        explain: "Tên bảng trong Excel không được chứa dấu cách hoặc kí tự đặc biệt; đặt tên gợi nhớ như BangGiaPhong, BangDichVu giúp viết công thức tham chiếu sáng sủa, dễ đọc."
      }
    ]
  },

  6: {
    num: 6,
    title: "Tạo biểu mẫu khách hàng với hộp kiểm",
    badge: "Excel chuyên sâu",
    topic: "Chuyên đề 2: Thực hành sử dụng phần mềm bảng tính",
    chapter: 2,
    summary: "Ứng dụng điều khiển Form Controls (Check Box) để xây dựng phiếu đăng kí tour tương tác chuyên nghiệp; kết nối ô liên kết Cell link (TRUE/FALSE) làm đầu vào cho các hàm tính toán dự toán tự động.",
    objectives: [
      "Kích hoạt thẻ Developer trên thanh Ribbon của Microsoft Excel.",
      "Chèn và định dạng hộp kiểm (Check Box - Form Controls), chỉnh sửa nhãn hiển thị.",
      "Thiết lập thuộc tính Cell link để gắn kết trạng thái hộp kiểm với ô dữ liệu (TRUE / FALSE).",
      "Thiết kế giao diện biểu mẫu khảo sát nhu cầu khách hàng cho tour du lịch."
    ],
    sections: [
      {
        heading: "1. Kích hoạt Developer và chèn Hộp kiểm (Check Box)",
        items: [
          {
            badge: "Thẻ Developer",
            title: "Mở thẻ Developer trong thanh công cụ Excel",
            points: [
              "<strong>Vị trí thẻ Developer:</strong> Mặc định thẻ này bị ẩn trong Excel. Để mở: Vào <strong>File</strong> -> <strong>Options</strong> -> Chọn mục <strong>Customize Ribbon</strong> -> Trong cột bên phải, tích chọn ô <strong>Developer</strong> -> Nhấn OK.",
              "<strong>Nhóm Controls:</strong> Thẻ Developer cung cấp nút lệnh <strong>Insert</strong> chứa 2 nhóm: <em>Form Controls</em> (điều khiển biểu mẫu đơn giản, dễ dùng) và <em>ActiveX Controls</em>.",
              "<strong>Chọn Check Box:</strong> Nhấp vào biểu tượng <strong>Check Box (Form Control)</strong> -> Con trỏ chuột chuyển thành hình dấu thập (+) -> Nháy chuột vào vị trí trên trang tính để vẽ hộp kiểm.",
              "<strong>Chỉnh sửa nhãn (Edit Text):</strong> Chuột phải vào hộp kiểm -> Chọn <em>Edit Text</em> -> Xóa tên mặc định và gõ nhãn dịch vụ rõ ràng (ví dụ: <em>Thuê hướng dẫn viên suốt tuyến</em>, <em>Bảo hiểm du lịch nâng cao</em>)."
            ]
          },
          {
            badge: "Thao tác điều khiển",
            title: "Căn chỉnh và cố định vị trí hộp kiểm",
            points: [
              "<strong>Chọn hộp kiểm:</strong> Giữ phím <code>Ctrl</code> và nháy chuột trái vào hộp kiểm (hoặc nháy chuột phải) để chọn đối tượng mà không làm thay đổi trạng thái tích chọn.",
              "<strong>Di chuyển và đổi kích thước:</strong> Kéo các nút biên để co giãn khung bao, di chuyển hộp kiểm nằm gọn gàng ngay ngắn bên trong ô tính tương ứng.",
              "<strong>Nhân bản hàng loạt:</strong> Sau khi định dạng chuẩn một hộp kiểm, có thể sao chép (Ctrl+C, Ctrl+V) hoặc kéo nút điền để tạo nhanh hộp kiểm cho các dịch vụ khác."
            ]
          }
        ]
      },
      {
        heading: "2. Thiết lập ô liên kết (Cell link) & Thiết kế biểu mẫu",
        items: [
          {
            badge: "Cell link",
            title: "Cấu hình thuộc tính Format Control",
            points: [
              "<strong>Mở bảng Format Control:</strong> Nháy chuột phải vào hộp kiểm -> Chọn <strong>Format Control...</strong> -> Chọn thẻ <strong>Control</strong>.",
              "<strong>3 Trạng thái giá trị (Value):</strong> <code>Unchecked</code> (mặc định không tích), <code>Checked</code> (mặc định được tích chọn), <code>Mixed</code> (trạng thái ba chiều/không xác định).",
              "<strong>Ô liên kết (Cell link):</strong> Nhấp vào ô nhập <em>Cell link</em> -> Chọn một ô tính trên bảng tính (ví dụ: ô <code>E10</code>) -> Nhấn OK.",
              "<strong>Cơ chế truyền giá trị nhị phân:</strong> Khi người dùng tích chọn hộp kiểm, ô liên kết tự động nhận giá trị <code>TRUE</code>; khi bỏ tích, ô liên kết lập tức chuyển thành <code>FALSE</code>."
            ]
          },
          {
            badge: "Biểu mẫu dự án",
            title: "Xây dựng Sheet Biểu mẫu khách hàng",
            points: [
              "<strong>Thông tin hành chính:</strong> Họ tên khách hàng, Số điện thoại, Email, Địa chỉ, Số lượng người lớn, Số lượng trẻ em, Ngày khởi hành dự kiến.",
              "<strong>Khu vực chọn dịch vụ tương tác:</strong> Bố trí danh sách các dịch vụ kèm theo hộp kiểm tương ứng (Hạng phòng, phương tiện xe, hướng dẫn viên, gói ăn uống, vé thắng cảnh).",
              "<strong>Ẩn ô liên kết thẩm mỹ:</strong> Có thể bố trí các ô chứa TRUE/FALSE ở cột phụ rồi ẩn cột đó đi, hoặc chỉnh màu chữ trùng màu nền để biểu mẫu trông gọn gàng, chuyên nghiệp."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Để hiển thị thẻ 'Developer' trên thanh Ribbon trong Excel, bạn cần thực hiện thao tác nào?",
        options: [
          "File -> Options -> Customize Ribbon -> Tích chọn Developer -> OK",
          "Gõ từ khóa 'DEVELOPER' vào ô A1",
          "Nhấn phím F1 trên bàn phím",
          "Vào thẻ Home -> Chọn Format as Table"
        ],
        answer: 0,
        explain: "Thẻ Developer được kích hoạt thông qua File -> Options -> Customize Ribbon và đánh dấu kiểm vào ô Developer trong cột Main Tabs."
      },
      {
        q: "Khi một Check Box (Form Control) được tích chọn (Checked), ô tính được gán trong thuộc tính 'Cell link' sẽ hiển thị giá trị gì?",
        options: [
          "0",
          "TRUE",
          "FALSE",
          "#N/A"
        ],
        answer: 1,
        explain: "Khi hộp kiểm ở trạng thái tích chọn, ô liên kết nhận giá trị logic TRUE; khi bỏ tích chọn, ô nhận giá trị FALSE."
      },
      {
        q: "Làm thế nào để chọn một hộp kiểm trên trang tính để di chuyển hoặc chỉnh sửa mà KHÔNG làm thay đổi dấu tích chọn của nó?",
        options: [
          "Nháy đúp chuột thật nhanh",
          "Giữ phím Ctrl rồi nháy chuột trái vào hộp kiểm (hoặc nháy chuột phải)",
          "Nhấn phím Esc ba lần",
          "Xóa cột chứa hộp kiểm đó"
        ],
        answer: 1,
        explain: "Nhấn giữ phím Ctrl khi nháy chuột trái (hoặc chuột phải trực tiếp) cho phép chọn khung đối tượng hộp kiểm để di chuyển hoặc chỉnh sửa kích thước an toàn."
      }
    ]
  },

  7: {
    num: 7,
    title: "Xây dựng dự toán với hàm điều kiện",
    badge: "Excel chuyên sâu",
    topic: "Chuyên đề 2: Thực hành sử dụng phần mềm bảng tính",
    chapter: 2,
    summary: "Vận dụng hàm điều kiện IF để xử lí linh hoạt các hạng mục chi phí; tự động kích hoạt tính tiền khi khách tick chọn dịch vụ (TRUE/FALSE) và phân loại quy mô đoàn tour du lịch.",
    objectives: [
      "Nắm vững cú pháp, nguyên lí hoạt động và các tham số của hàm điều kiện IF.",
      "Kết hợp giá trị logic TRUE/FALSE từ ô liên kết hộp kiểm để tính phí dịch vụ.",
      "Sử dụng thành thạo địa chỉ tương đối, tuyệt đối ($) và tham chiếu liên kết giữa các Sheet.",
      "Lập bảng tính dự toán chi phí chi tiết theo từng khách hàng trong dự án."
    ],
    sections: [
      {
        heading: "1. Cú pháp và nguyên lí làm việc của hàm điều kiện IF",
        items: [
          {
            badge: "Cú pháp hàm",
            title: "Cấu trúc hàm IF chuẩn mực",
            points: [
              "<strong>Cú pháp chuẩn:</strong> <code>=IF(Logical_test, Value_if_true, Value_if_false)</code>",
              "<strong>Tham số 1 (Logical_test):</strong> Biểu thức so sánh logic trả về kết quả Đúng (TRUE) hoặc Sai (FALSE), ví dụ: <code>B2>30</code>, <code>E10=TRUE</code>.",
              "<strong>Tham số 2 (Value_if_true):</strong> Giá trị hoặc phép tính được thực hiện và trả về nếu biểu thức điều kiện Đúng.",
              "<strong>Tham số 3 (Value_if_false):</strong> Giá trị hoặc phép tính được thực hiện và trả về nếu biểu thức điều kiện Sai.",
              "<strong>Dấu phân cách đối số:</strong> Tùy theo thiết lập vùng (Region) của máy tính, dấu phân cách giữa các đối số có thể là dấu phẩy <code>,</code> hoặc dấu chấm phẩy <code>;</code>."
            ]
          },
          {
            badge: "Toán tử so sánh",
            title: "Các toán tử logic thông dụng trong IF",
            points: [
              "<strong>Toán tử so sánh:</strong> <code>=</code> (bằng), <code>&gt;</code> (lớn hơn), <code>&lt;</code> (nhỏ hơn), <code>&gt;=</code> (lớn hơn hoặc bằng), <code>&lt;=</code> (nhỏ hơn hoặc bằng), <code>&lt;&gt;</code> (khác nhau).",
              "<strong>Xử lí chuỗi văn bản:</strong> Khi trả về kết quả là chữ, bắt buộc phải đặt trong cặp dấu ngoặc kép, ví dụ: <code>=IF(B2&gt;=50, \"Đoàn lớn\", \"Đoàn nhỏ\")</code>.",
              "<strong>Hàm IF lồng nhau (Nested IF):</strong> Khi có từ 3 trường hợp trở lên, có thể đặt một hàm IF khác vào vị trí của <em>Value_if_false</em> để xét tiếp điều kiện phụ."
            ]
          }
        ]
      },
      {
        heading: "2. Xây dựng dự toán chi phí tour du lịch",
        items: [
          {
            badge: "Tính tiền theo Hộp kiểm",
            title: "Công thức tính chi phí phụ thuộc lựa chọn khách hàng",
            points: [
              "<strong>Liên kết trạng thái hộp kiểm:</strong> Ô liên kết <code>E10</code> nhận giá trị TRUE khi khách chọn thuê hướng dẫn viên. Công thức tính chi phí: <code>=IF(E10=TRUE, SoNgay * DonGiaHDV, 0)</code>.",
              "<strong>Rút gọn logic:</strong> Vì bản thân <code>E10</code> đã mang giá trị logic TRUE/FALSE nên có thể viết ngắn gọn: <code>=IF(E10, SoNgay * DonGiaHDV, 0)</code>.",
              "<strong>Chi phí phòng theo số lượng:</strong> <code>=SoPhong * SoDem * DonGiaPhong</code> kết hợp với điều kiện phụ thu nếu có yêu cầu dịch vụ đặc biệt."
            ]
          },
          {
            badge: "Kĩ năng công thức",
            title: "Địa chỉ tuyệt đối và tham chiếu giữa các Sheet",
            points: [
              "<strong>Cố định địa chỉ ô ($):</strong> Sử dụng phím <code>F4</code> để cố định ô đơn giá (ví dụ: <code>$C$5</code>) khi sao chép công thức tính cho nhiều khách hàng dọc theo cột.",
              "<strong>Tham chiếu khác Sheet:</strong> Cú pháp <code>'Tên Sheet'!Tên Ô</code> (ví dụ: <code>'BieuMau'!E10 * 'GiaGoc'!$D$5</code>) giúp tách biệt rõ ràng giữa trang nhập liệu và trang dự toán tài chính.",
              "<strong>Kiểm thử công thức:</strong> Tích chọn hoặc bỏ tích các hộp kiểm trên biểu mẫu và quan sát xem bảng dự toán có tự động cập nhật số tiền nhảy đúng hay không."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Công thức nào sau đây sử dụng đúng cú pháp hàm IF để tính phụ phí hướng dẫn viên: nếu ô E10 là TRUE thì lấy số ngày (ô C2) nhân với đơn giá 500.000đ, ngược lại bằng 0đ?",
        options: [
          "=IF(E10=TRUE; C2*500000; 0)",
          "=IF(E10; 0; C2*500000)",
          "=IF(C2*500000; E10=TRUE)",
          "=SUM(E10; C2; 500000)"
        ],
        answer: 0,
        explain: "Cú pháp chuẩn của hàm IF là =IF(điều_kiện; giá_trị_nếu_đúng; giá_trị_nếu_sai). Nếu E10=TRUE thì thực hiện phép nhân C2*500000, nếu sai trả về 0."
      },
      {
        q: "Trong Excel, khi bạn muốn cố định ô đơn giá $D$5 để khi kéo sao chép công thức xuống dưới ô này không bị trượt thành D6, D7..., bạn sử dụng phím tắt nào?",
        options: [
          "F2",
          "F4",
          "F7",
          "F12"
        ],
        answer: 1,
        explain: "Phím F4 dùng để chuyển đổi nhanh giữa các kiểu địa chỉ tương đối, tuyệt đối ($D$5), khóa dòng hoặc khóa cột."
      },
      {
        q: "Khi tham chiếu đến ô A1 nằm ở trang tính có tên là 'BangGia', cách viết nào sau đây là đúng chuẩn trong Excel?",
        options: [
          "BangGia?A1",
          "'BangGia'!A1",
          "[BangGia]#A1",
          "BangGia->A1"
        ],
        answer: 1,
        explain: "Trong Excel, tham chiếu liên trang tính có cú pháp 'Tên Sheet'!Tên Ô, ví dụ 'BangGia'!A1."
      }
    ]
  },

  8: {
    num: 8,
    title: "Hoàn thiện dự toán với hàm tìm kiếm",
    badge: "Excel chuyên sâu",
    topic: "Chuyên đề 2: Thực hành sử dụng phần mềm bảng tính",
    chapter: 2,
    summary: "Làm chủ hai hàm tìm kiếm dữ liệu tự động cực kì mạnh mẽ: VLOOKUP (theo chiều dọc) và HLOOKUP (theo chiều ngang) để tra cứu chính xác đơn giá phòng, xe và dịch vụ từ bảng giá gốc.",
    objectives: [
      "Nắm vững cú pháp, ý nghĩa 4 đối số và quy tắc tra cứu của hàm VLOOKUP.",
      "Hiểu rõ sự khác biệt giữa VLOOKUP (tra theo cột) và HLOOKUP (tra theo hàng).",
      "Khắc phục các lỗi tìm kiếm phổ biến trong Excel (#N/A, khoảng trắng thừa, sai kiểu dữ liệu).",
      "Tự động hóa hoàn toàn việc trích xuất đơn giá vào bảng dự toán tour du lịch."
    ],
    sections: [
      {
        heading: "1. Hàm tìm kiếm theo chiều dọc VLOOKUP",
        items: [
          {
            badge: "Cú pháp VLOOKUP",
            title: "Cấu trúc 4 tham số của VLOOKUP",
            points: [
              "<strong>Cú pháp chuẩn:</strong> <code>=VLOOKUP(Lookup_value, Table_array, Col_index_num, [Range_lookup])</code>",
              "<strong>1. Lookup_value (Giá trị cần tìm):</strong> Mã hoặc tên dịch vụ cần tra cứu (ví dụ: ô <code>B3</code> chứa chữ \"Phòng đơn\").",
              "<strong>2. Table_array (Bảng tìm kiếm):</strong> Vùng dữ liệu chứa bảng giá gốc (ví dụ: <code>'BangGia'!$A$3:$D$10</code>). Bắt buộc phải khóa tuyệt đối bằng dấu <code>$</code> để không bị xô lệch khi kéo công thức.",
              "<strong>3. Col_index_num (Số thứ tự cột lấy dữ liệu):</strong> Số nguyên chỉ vị trí cột cần lấy giá trị về, tính từ trái sang phải trong bảng tìm kiếm (cột đầu tiên là 1, cột tiếp theo là 2...).",
              "<strong>4. Range_lookup (Kiểu tìm kiếm):</strong> Chọn <code>FALSE</code> (hoặc số <code>0</code>) để tìm kiếm chính xác tuyệt đối; chọn <code>TRUE</code> (hoặc số <code>1</code>) để tìm kiếm tương đối trong bảng số đã sắp xếp tăng dần."
            ]
          },
          {
            badge: "Quy tắc vàng",
            title: "2 Quy tắc sống còn khi sử dụng VLOOKUP",
            points: [
              "<strong>Quy tắc 1 (Cột tìm kiếm phải là cột đầu tiên):</strong> Cột chứa giá trị cần tìm (Mã hoặc Tên) BẮT BUỘC phải nằm ở vị trí cột đầu tiên bên trái nhất (cột 1) của vùng <em>Table_array</em>. VLOOKUP không thể tra cứu ngược về bên trái.",
              "<strong>Quy tắc 2 (Số thứ tự cột tính trong vùng tìm):</strong> <em>Col_index_num</em> là thứ tự cột tính trong phạm vi vùng chọn bảng, không phải là thứ tự chữ cái của cột trên trang tính Excel.",
              "<strong>Xử lí lỗi #N/A:</strong> Thường do sai chính tả, có khoảng trắng thừa vô tình ở đầu/cuối chuỗi chữ, hoặc giá trị tìm kiếm hoàn toàn không tồn tại trong bảng gốc."
            ]
          }
        ]
      },
      {
        heading: "2. Hàm HLOOKUP và Hoàn thiện dự toán tự động",
        items: [
          {
            badge: "HLOOKUP",
            title: "So sánh VLOOKUP và HLOOKUP",
            points: [
              "<strong>HLOOKUP (Horizontal Lookup):</strong> Tìm kiếm theo chiều ngang. Cú pháp: <code>=HLOOKUP(Lookup_value, Table_array, Row_index_num, [Range_lookup])</code>.",
              "<strong>Cơ chế tìm kiếm:</strong> HLOOKUP dò tìm giá trị ở hàng đầu tiên (hàng trên cùng) của bảng, sau đó gióng thẳng xuống hàng thứ <em>Row_index_num</em> để lấy dữ liệu về.",
              "<strong>Khi nào dùng hàm nào:</strong> Nếu bảng giá bố trí dạng cột dọc (tiêu đề ở trên, dữ liệu chạy xuống dưới) -> Dùng <strong>VLOOKUP</strong>. Nếu bảng giá bố trí dạng hàng ngang (tiêu đề ở cột trái, dữ liệu trải dài sang phải) -> Dùng <strong>HLOOKUP</strong>."
            ]
          },
          {
            badge: "Hoàn thiện dự án",
            title: "Tra đơn giá tự động cho chương trình du lịch",
            points: [
              "<strong>Công thức thực tế dự án:</strong> <code>=VLOOKUP(C4, 'GiaGoc'!$A$3:$C$8, 3, FALSE)</code> để tự động lấy đơn giá khi người dùng chọn loại phòng ở ô C4.",
              "<strong>Tính tổng chi phí dự toán:</strong> Kết hợp giữa số lượng khách, số ngày đêm, đơn giá phòng tra cứu được và các khoản phụ thu dịch vụ tùy chọn.",
              "<strong>Kiểm thử độ nhạy:</strong> Đổi tên khách sạn từ danh sách thả xuống, kiểm tra xem đơn giá và tổng dự toán có lập tức nhảy tương ứng theo bảng giá hay không."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Trong hàm VLOOKUP, tham số thứ 4 (Range_lookup) nên đặt là gì khi bạn cần tra cứu chính xác tuyệt đối mã phòng hoặc tên dịch vụ du lịch?",
        options: [
          "TRUE (hoặc số 1)",
          "FALSE (hoặc số 0)",
          "\"ALL\"",
          "Để trống"
        ],
        answer: 1,
        explain: "Khi cần tra cứu chính xác tuyệt đối (khớp từng kí tự của mã phòng hoặc tên dịch vụ), đối số thứ 4 bắt buộc phải là FALSE hoặc 0."
      },
      {
        q: "Điều kiện bắt buộc về mặt cấu trúc bảng dữ liệu đối với tham số Table_array trong hàm VLOOKUP là gì?",
        options: [
          "Cột chứa giá trị cần tìm kiếm phải là cột đầu tiên bên trái nhất của vùng bảng chọn",
          "Bảng phải có đúng 10 hàng và 5 cột",
          "Tất cả các ô trong bảng đều phải chứa số thực",
          "Bảng phải được tô màu vàng"
        ],
        answer: 0,
        explain: "VLOOKUP tìm kiếm theo chiều dọc từ trên xuống dưới trên cột đầu tiên bên trái nhất của vùng dữ liệu tra cứu."
      },
      {
        q: "Khi bảng giá gốc của khách sạn được bố trí với các loại phòng nằm trải dài theo hàng ngang (hàng 1) và đơn giá tương ứng nằm ở hàng 2, bạn nên sử dụng hàm tìm kiếm nào?",
        options: [
          "VLOOKUP",
          "HLOOKUP",
          "COUNTIF",
          "AVERAGE"
        ],
        answer: 1,
        explain: "HLOOKUP (Horizontal Lookup) chuyên dùng để tra cứu trên bảng dữ liệu được bố trí theo các hàng ngang."
      }
    ]
  },

  9: {
    num: 9,
    title: "Thực hành tổng hợp và thống kê số liệu để quyết định báo giá",
    badge: "Excel chuyên sâu",
    topic: "Chuyên đề 2: Thực hành sử dụng phần mềm bảng tính",
    chapter: 2,
    summary: "Tổng hợp toàn bộ giá gốc, xác định tỉ lệ lợi nhuận kì vọng (biên lợi nhuận), tính toán doanh thu mục tiêu và đưa ra mức báo giá trọn gói cạnh tranh cho từng du khách.",
    objectives: [
      "Tổng hợp toàn bộ các khoản mục chi phí cấu thành nên tour du lịch.",
      "Phân biệt rõ ràng giữa Giá vốn (Chi phí), Doanh thu và Lợi nhuận trong kinh doanh du lịch.",
      "Ứng dụng công thức tính toán giá bán dựa trên tỉ lệ phần trăm lợi nhuận mong muốn.",
      "Đưa ra quyết định báo giá tour trọn gói hợp lí, có tính cạnh tranh cao tại Hội chợ du lịch."
    ],
    sections: [
      {
        heading: "1. Tổng hợp và phân tích cơ cấu chi phí tour",
        items: [
          {
            badge: "Cơ cấu giá vốn",
            title: "Các khoản mục chi phí cấu thành giá tour",
            points: [
              "<strong>1. Chi phí lưu trú:</strong> Tiền thuê phòng khách sạn, resort theo số đêm và số lượng khách thực tế.",
              "<strong>2. Chi phí di chuyển:</strong> Thuê xe ô tô du lịch đưa đón suốt tuyến, tiền vé máy bay, vé tàu hỏa, vé phà biển.",
              "<strong>3. Chi phí ăn uống & dịch vụ:</strong> Suất ăn chính, ăn phụ, nước uống trên xe, bảo hiểm du lịch, hướng dẫn viên.",
              "<strong>4. Chi phí vé tham quan & trải nghiệm:</strong> Vé vào cổng các danh lam thắng cảnh, vé cáp treo, thuyền kayak, trải nghiệm văn hóa bản địa.",
              "<strong>Tổng chi phí gốc (Giá vốn tour):</strong> Sử dụng hàm <code>SUM</code> hoặc Total Row để cộng toàn bộ các khoản chi phí trên."
            ]
          },
          {
            badge: "Công thức tài chính",
            title: "Phân biệt Chi phí, Doanh thu và Lợi nhuận",
            points: [
              "<strong>Giá vốn (Cost):</strong> Toàn bộ số tiền thực tế mà công ty du lịch phải trả cho các nhà cung cấp dịch vụ (khách sạn, xe, nhà hàng...).",
              "<strong>Lợi nhuận mục tiêu (Profit):</strong> Khoản tiền chênh lệch công ty thu được sau khi đã trừ hết chi phí vốn; thường tính theo tỉ lệ phần trăm (ví dụ: 15% - 25% giá vốn).",
              "<strong>Doanh thu dự kiến (Revenue):</strong> Toàn bộ số tiền thu về từ khách hàng: <code>Doanh thu = Giá vốn + Lợi nhuận</code>.",
              "<strong>Tránh nhầm lẫn cơ bản:</strong> Doanh thu không phải là số tiền lãi công ty bỏ túi; không được coi toàn bộ số tiền khách trả là lợi nhuận."
            ]
          }
        ]
      },
      {
        heading: "2. Phương pháp định giá và ra quyết định báo giá",
        items: [
          {
            badge: "Công thức định giá",
            title: "Xác định giá bán trên mỗi đầu khách",
            points: [
              "<strong>Cách 1 (Tính theo tỉ lệ trên giá vốn):</strong> <code>Giá báo giá = Giá vốn * (1 + % Lợi nhuận kì vọng)</code>.",
              "<strong>Cách 2 (Định giá theo khách):</strong> Lấy tổng doanh thu của toàn đoàn chia cho tổng số lượng khách để ra giá tour cho một người: <code>=TongDoanhThu / SoKhach</code>.",
              "<strong>Chính sách giá linh hoạt:</strong> Phân biệt giá tour người lớn (100% giá) và giá tour trẻ em (thường tính 50% hoặc 75% giá tùy theo độ tuổi và quy định phòng nghỉ)."
            ]
          },
          {
            badge: "Chiến lược kinh doanh",
            title: "Ra quyết định báo giá tại Hội chợ du lịch Ba miền",
            points: [
              "<strong>Khảo sát đối thủ cạnh tranh:</strong> Tham khảo mức giá của các công ty du lịch khác cùng tuyến điểm để định giá hợp lí (không quá cao làm mất khách, không quá thấp dẫn đến lỗ vốn).",
              "<strong>Chính sách kích cầu:</strong> Đưa ra các gói ưu đãi: giảm giá 5% cho khách đăng kí sớm, tặng kèm voucher trải nghiệm đặc sản địa phương.",
              "<strong>Làm tròn số tiền:</strong> Sử dụng hàm <code>ROUND</code> để làm tròn giá bán đến hàng nghìn đồng (ví dụ: 2.450.000đ thay vì số lẻ 2.449.682đ) để bảng báo giá rõ ràng, chuyên nghiệp."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Công thức nào sau đây thể hiện đúng mối quan hệ tài chính cơ bản trong kinh doanh tour du lịch?",
        options: [
          "Lợi nhuận = Doanh thu + Chi phí",
          "Doanh thu = Chi phí giá vốn + Lợi nhuận mục tiêu",
          "Chi phí = Doanh thu * Lợi nhuận",
          "Doanh thu = Lợi nhuận - Chi phí"
        ],
        answer: 1,
        explain: "Doanh thu là tổng số tiền thu từ khách hàng, bao gồm toàn bộ chi phí giá vốn bỏ ra cộng với khoản lợi nhuận mong muốn của doanh nghiệp."
      },
      {
        q: "Nếu tổng chi phí giá vốn của một tour du lịch cho 1 khách là 2.000.000đ và công ty muốn đạt tỉ lệ lợi nhuận là 20% trên giá vốn, mức giá báo cho khách hàng là bao nhiêu?",
        options: [
          "2.200.000đ",
          "2.400.000đ",
          "2.600.000đ",
          "3.000.000đ"
        ],
        answer: 1,
        explain: "Giá bán = Giá vốn * (1 + 20%) = 2.000.000 * 1.2 = 2.400.000đ (trong đó tiền lãi lợi nhuận là 400.000đ)."
      },
      {
        q: "Khi tính toán giá báo cho khách hàng, tại sao người làm bảng tính nên sử dụng hàm ROUND để làm tròn số?",
        options: [
          "Để máy tính chạy nhanh hơn gấp 10 lần",
          "Để mức giá hiển thị chẵn, đẹp mắt, thuận tiện cho việc giao dịch và in ấn báo giá (ví dụ: làm tròn đến hàng nghìn đồng)",
          "Bắt buộc theo chuẩn bảo mật của ngân hàng",
          "Để che giấu số liệu thật với kế toán"
        ],
        answer: 1,
        explain: "Hàm ROUND giúp làm tròn các con số lẻ thập phân thành các mệnh giá tiền tệ chẵn và chuyên nghiệp (ví dụ: hàng nghìn đồng)."
      }
    ]
  },

  10: {
    num: 10,
    title: "Tạo và xuất báo giá với hàm thời gian",
    badge: "Excel chuyên sâu",
    topic: "Chuyên đề 2: Thực hành sử dụng phần mềm bảng tính",
    chapter: 2,
    summary: "Sử dụng các hàm thời gian NOW và TODAY để tự động hóa ngày lập báo giá và tính thời hạn hiệu lực của bảng giá; hoàn thiện biểu mẫu báo giá chuyên nghiệp sẵn sàng gửi khách hàng.",
    objectives: [
      "Hiểu rõ cú pháp và sự khác biệt giữa hai hàm thời gian NOW() và TODAY().",
      "Thực hiện các phép toán cộng trừ ngày tháng để xác định thời hạn hiệu lực của báo giá.",
      "Thiết kế biểu mẫu Báo giá chính thức hoàn chỉnh liên kết dữ liệu tự động từ các Sheet trước.",
      "Xuất bảng báo giá ra tệp PDF hoặc in ấn gửi khách hàng tại Hội chợ du lịch."
    ],
    sections: [
      {
        heading: "1. Khai thác hàm thời gian hệ thống NOW và TODAY",
        items: [
          {
            badge: "Hàm thời gian",
            title: "Cú pháp và đặc tính của NOW() và TODAY()",
            points: [
              "<strong>Hàm TODAY():</strong> Cú pháp <code>=TODAY()</code>. Không có đối số trong ngoặc; trả về ngày, tháng, năm hiện tại theo đồng hồ của hệ thống máy tính.",
              "<strong>Hàm NOW():</strong> Cú pháp <code>=NOW()</code>. Không có đối số; trả về cả ngày, tháng, năm kèm theo giờ, phút hiện tại của hệ thống.",
              "<strong>Đặc tính biến động (Volatile):</strong> Giá trị của NOW() và TODAY() sẽ tự động cập nhật lại mỗi khi bảng tính được tính toán lại, hoặc mỗi lần mở lại tệp Excel.",
              "<strong>Định dạng hiển thị:</strong> Vào thẻ <strong>Home</strong> -> Nhóm <em>Number</em> -> Chọn <strong>Short Date</strong> (dd/mm/yyyy) hoặc tùy chỉnh trong <em>Custom Format</em> để hiển thị chuẩn tiếng Việt (ví dụ: <code>\"Ngày \" dd \" tháng \" mm \" năm \" yyyy</code>)."
            ]
          },
          {
            badge: "Phép toán ngày",
            title: "Cộng trừ thời gian và tính thời hạn báo giá",
            points: [
              "<strong>Bản chất lưu trữ ngày trong Excel:</strong> Excel lưu trữ ngày tháng dưới dạng các số nguyên liên tiếp bắt đầu từ ngày 1/1/1900 (coi là số 1).",
              "<strong>Cộng số ngày vào ngày hiện tại:</strong> Để quy định báo giá có hiệu lực trong vòng 7 ngày kể từ ngày phát hành, công thức tính ngày hết hạn: <code>=TODAY() + 7</code>.",
              "<strong>Tính khoảng cách số ngày:</strong> Lấy <code>Ngày kết thúc tour - Ngày khởi hành</code> để tự động ra tổng số ngày của chuyến du lịch."
            ]
          }
        ]
      },
      {
        heading: "2. Hoàn thiện và xuất bản biểu mẫu báo giá chính thức",
        items: [
          {
            badge: "Mẫu Báo giá",
            title: "Cấu trúc một bản báo giá du lịch chuyên nghiệp",
            points: [
              "<strong>Phần đầu (Header):</strong> Logo và tên thương hiệu công ty du lịch, Địa chỉ, Hotline, Email, Số hiệu báo giá (Mã báo giá), Ngày phát hành (dùng <code>=TODAY()</code>).",
              "<strong>Thông tin khách hàng:</strong> Họ tên người đại diện, Tên cơ quan/đoàn thể, Số lượng khách, Tuyến điểm du lịch, Thời gian khởi hành dự kiến.",
              "<strong>Bảng chi tiết dịch vụ:</strong> Tên các gói dịch vụ, số lượng, đơn vị tính, đơn giá, thành tiền (được liên kết tự động bằng công thức từ Sheet Dự toán).",
              "<strong>Phần kết & Điều khoản:</strong> Ngày hết hạn báo giá, Quy định hủy đổi tour, Thông tin tài khoản ngân hàng thanh toán và chữ kí xác nhận của người lập biểu."
            ]
          },
          {
            badge: "Xuất bản",
            title: "Kiểm tra liên kết và xuất bản báo giá",
            points: [
              "<strong>Kiểm tra dòng chảy dữ liệu:</strong> Thử thay đổi số lượng người ở Sheet Biểu mẫu -> Kiểm tra Sheet Dự toán nhảy số tiền -> Kiểm tra Sheet Báo giá tự động cập nhật đúng tổng tiền cuối cùng.",
              "<strong>Thiết lập vùng in (Print Area):</strong> Bôi đen mẫu báo giá -> Thẻ <strong>Page Layout</strong> -> Chọn <strong>Print Area -> Set Print Area</strong> để khi in không bị thừa các ô trống bên cạnh.",
              "<strong>Xuất tệp PDF báo giá:</strong> Xuất sang tệp PDF có tên chuẩn hóa (ví dụ: <code>BaoGia_TourSapa_DoanAnhNam.pdf</code>) để gửi trực tiếp qua email/zalo cho khách hàng."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Hàm nào sau đây trong Excel trả về ngày, tháng, năm hiện tại của hệ thống máy tính mà KHÔNG bao gồm giờ phút?",
        options: [
          "NOW()",
          "TODAY()",
          "DATE()",
          "DAY()"
        ],
        answer: 1,
        explain: "Hàm TODAY() trả về ngày tháng năm hiện tại; trong khi hàm NOW() trả về cả ngày tháng năm kèm theo giờ phút hiện tại."
      },
      {
        q: "Để thiết lập ngày hết hạn của một bản báo giá du lịch là 5 ngày sau ngày phát hành báo giá hôm nay, bạn sử dụng công thức nào?",
        options: [
          "=TODAY() + 5",
          "=NOW() * 5",
          "=DATE(5)",
          "=DAY() + 5"
        ],
        answer: 0,
        explain: "Vì Excel quản lí ngày tháng dưới dạng các số nguyên liên tiếp, nên cộng thêm 5 vào hàm TODAY() sẽ cho ra ngày chính xác sau đó 5 ngày."
      },
      {
        q: "Thao tác 'Set Print Area' trong thẻ Page Layout mang lại tác dụng gì khi in bảng báo giá?",
        options: [
          "Tự động tăng giá tour lên gấp đôi",
          "Chỉ định chính xác vùng bảng tính được phép in ra giấy hoặc xuất PDF, tránh in thừa các cột phụ hay vùng dữ liệu nháp",
          "Đổi màu toàn bộ trang tính sang màu đen trắng",
          "Gửi lệnh in trực tiếp đến tất cả máy in trong mạng LAN"
        ],
        answer: 1,
        explain: "Set Print Area đóng khung vùng dữ liệu cần in, giúp văn bản xuất ra giấy hoặc PDF luôn gọn gàng, không bị dính các cột nháp bên ngoài."
      }
    ]
  },

  11: {
    num: 11,
    title: "Kiểm thử, hoàn thiện và đóng gói sản phẩm",
    badge: "Excel chuyên sâu",
    topic: "Chuyên đề 2: Thực hành sử dụng phần mềm bảng tính",
    chapter: 2,
    summary: "Thực hiện quy trình kiểm thử toàn diện chương trình bảng tính bằng nhiều kịch bản dữ liệu, thiết lập bảo vệ trang tính (Protect Sheet), ẩn công thức và đóng gói bàn giao sản phẩm.",
    objectives: [
      "Xây dựng các kịch bản kiểm thử (Test Cases) từ bình thường đến đặc biệt và biên giới hạn.",
      "Phát hiện và sửa chữa các lỗi công thức thường gặp (#N/A, #VALUE!, #REF!, lỗi vòng lặp Circular).",
      "Sử dụng tính năng Protect Sheet để khóa các ô chứa công thức và ẩn Sheet dữ liệu nguồn.",
      "Đóng gói hoàn chỉnh chương trình bảng tính tính toán và báo giá tour du lịch."
    ],
    sections: [
      {
        heading: "1. Phương pháp kiểm thử chương trình bảng tính (Testing)",
        items: [
          {
            badge: "Kịch bản kiểm thử",
            title: "Các bộ dữ liệu kiểm thử (Test Cases)",
            points: [
              "<strong>1. Dữ liệu chuẩn (Normal Cases):</strong> Nhập các thông tin tour thông thường (đoàn 15 người, 3 ngày 2 đêm, chọn dịch vụ cơ bản), so sánh kết quả tính của Excel với phép tính tay để xác nhận độ chính xác.",
              "<strong>2. Dữ liệu đặc biệt (Edge Cases):</strong> Thử chọn tất cả các dịch vụ cộng thêm; thử không chọn dịch vụ nào; thử số lượng khách là 1 người hoặc đoàn đông 100 người.",
              "<strong>3. Dữ liệu bất thường (Invalid Cases):</strong> Nhập số lượng khách là số âm, số 0, hoặc gõ chữ vào ô nhập số lượng để kiểm tra xem bảng tính có cảnh báo lỗi hay không.",
              "<strong>Rà soát liên kết:</strong> Kiểm tra xem khi đổi loại phòng hay đổi tuyến tour, các ô VLOOKUP và IF có cập nhật đúng giá và tổng tiền hay không."
            ]
          },
          {
            badge: "Sửa lỗi công thức",
            title: "Nhận diện và xử lí các mã lỗi phổ biến trong Excel",
            points: [
              "<strong>Lỗi #N/A (Not Available):</strong> Do hàm VLOOKUP không tìm thấy giá trị trong cột đầu tiên của bảng tìm kiếm; kiểm tra lại khoảng trắng thừa hoặc lỗi chính tả.",
              "<strong>Lỗi #VALUE!:</strong> Sai kiểu dữ liệu, ví dụ lấy một ô chứa chữ đem nhân với một số tiền; cần kiểm tra lại định dạng ô.",
              "<strong>Lỗi #REF! (Reference):</strong> Ô tham chiếu bị xóa mất hoặc công thức bị kéo tràn ra ngoài giới hạn bảng tính.",
              "<strong>Lỗi Circular Reference (Vòng lặp):</strong> Khi công thức trong một ô lại tham chiếu đến chính ô đó (ví dụ ô C5 lại có công thức chứa C5), cần sửa lại phạm vi phép tính."
            ]
          }
        ]
      },
      {
        heading: "2. Hoàn thiện, bảo vệ và đóng gói sản phẩm",
        items: [
          {
            badge: "Protect Sheet",
            title: "Khóa ô công thức và bảo vệ bảng tính",
            points: [
              "<strong>Mục đích bảo vệ:</strong> Người sử dụng chỉ được phép nhập liệu vào các ô cho phép (tên khách, số người, tích chọn hộp kiểm); các ô chứa công thức tính toán và đơn giá gốc phải được khóa lại để tránh bị vô tình xóa hoặc sửa sai.",
              "<strong>Bước 1 (Mở khóa ô nhập liệu):</strong> Chọn các ô nhập liệu -> Chuột phải chọn <em>Format Cells</em> -> Thẻ <strong>Protection</strong> -> Bỏ tích chọn ô <strong>Locked</strong>.",
              "<strong>Bước 2 (Khóa và ẩn công thức):</strong> Chọn các ô chứa công thức -> Format Cells -> Protection -> Tích chọn cả <em>Locked</em> và <em>Hidden</em> (để ẩn dòng công thức trên thanh Formula bar).",
              "<strong>Bước 3 (Bật Protect Sheet):</strong> Vào thẻ <strong>Review</strong> -> Chọn <strong>Protect Sheet</strong> -> Đặt mật khẩu quản trị (nếu cần) -> Nhấn OK."
            ]
          },
          {
            badge: "Đóng gói bàn giao",
            title: "Quy chuẩn đóng gói sản phẩm Chuyên đề 2",
            points: [
              "<strong>Ẩn trang tính nguồn:</strong> Chuột phải vào tên sheet <code>GiaGoc</code> -> Chọn <strong>Hide</strong> để người dùng chỉ nhìn thấy Sheet Biểu mẫu và Sheet Báo giá.",
              "<strong>Viết tài liệu hướng dẫn:</strong> Tạo một Sheet có tên <code>HuongDan</code> tóm tắt quy trình 3 bước sử dụng phần mềm bảng tính báo giá cho nhân viên mới.",
              "<strong>Lưu trữ an toàn:</strong> Lưu phiên bản hoàn chỉnh với tên gọi chuẩn mực (ví dụ: <code>CT_BaoGiaDuLich_KNTT_v1.0.xlsx</code>), sao lưu một bản gốc dự phòng chưa khóa mật khẩu."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Lỗi #N/A xuất hiện trong ô tính chứa hàm VLOOKUP thường xuất phát từ nguyên nhân nào?",
        options: [
          "Do máy tính bị mất kết nối mạng Internet",
          "Do giá trị cần tìm không tồn tại trong cột đầu tiên của bảng tìm kiếm, hoặc do có khoảng trắng thừa",
          "Do ô tính chưa được định dạng màu xanh",
          "Do người dùng gõ sai tên hàm SUM"
        ],
        answer: 1,
        explain: "Lỗi #N/A (No value Available) thông báo giá trị tìm kiếm không khớp với bất kì giá trị nào trong cột đầu tiên của vùng bảng tra cứu."
      },
      {
        q: "Để cho phép người dùng nhập dữ liệu vào ô A1 nhưng KHÔNG cho phép sửa công thức ở ô B1 khi bật chế độ Protect Sheet, bạn phải làm gì?",
        options: [
          "Bỏ dấu tích 'Locked' ở ô A1, giữ nguyên dấu tích 'Locked' ở ô B1 trước khi bật Protect Sheet",
          "Khóa tất cả các ô trên trang tính",
          "Xóa bỏ ô B1",
          "Đổi tên trang tính thành 'Locked'"
        ],
        answer: 0,
        explain: "Mặc định mọi ô đều bị Locked. Cần mở khóa (bỏ Locked) cho các ô cho phép nhập liệu (ô A1), sau đó bật Protect Sheet thì các ô còn lại (ô B1) sẽ được bảo vệ tuyệt đối."
      },
      {
        q: "Thao tác ẩn trang tính dữ liệu nguồn (Hide Sheet) mang lại lợi ích gì trong việc đóng gói sản phẩm phần mềm bảng tính?",
        options: [
          "Xóa vĩnh viễn dữ liệu gốc để tiết kiệm bộ nhớ",
          "Giúp giao diện làm việc gọn gàng, người dùng tập trung vào biểu mẫu nhập liệu và báo giá, tránh vô tình can thiệp vào bảng giá gốc",
          "Tự động xuất tệp sang định dạng video",
          "Tăng tốc độ gõ phím của người dùng"
        ],
        answer: 1,
        explain: "Ẩn các sheet dữ liệu nền giúp giao diện bảng tính sạch sẽ, trực quan và bảo vệ cấu trúc dữ liệu gốc không bị tác động sai lệch."
      }
    ]
  },

  12: {
    num: 12,
    title: "Xây dựng ý tưởng, cấu trúc bài trình chiếu",
    badge: "PowerPoint đa phương tiện",
    topic: "Chuyên đề 3: Thực hành sử dụng phần mềm trình chiếu",
    chapter: 3,
    summary: "Nắm vững nguyên lí thiết kế bài thuyết trình du lịch lôi cuốn; làm chủ công cụ thiết kế mẫu chính Slide Master để chuẩn hóa toàn bộ phông chữ, màu sắc, bố cục và logo thương hiệu.",
    objectives: [
      "Xây dựng mạch nội dung (Storytelling) hấp dẫn cho bài thuyết trình quảng bá du lịch.",
      "Hiểu rõ bản chất và cơ chế kế thừa định dạng của công cụ Slide Master.",
      "Thiết lập định dạng đồng bộ (phông chữ tiếng Việt, bảng màu Theme, chân trang Footer, Logo) trên Slide Master.",
      "Tạo lập bộ khung slide thuyết trình chuẩn bị cho Hội chợ du lịch Ba miền."
    ],
    sections: [
      {
        heading: "1. Xây dựng ý tưởng và kịch bản mạch kể chuyện (Storytelling)",
        items: [
          {
            badge: "Mạch nội dung",
            title: "Cấu trúc 6 phần của một bài thuyết trình du lịch",
            points: [
              "<strong>1. Slide mở đầu (Hook & Title):</strong> Tên thương hiệu công ty du lịch, thông điệp chủ đề (Slogan) ấn tượng, hình ảnh đại diện tuyệt đẹp của địa danh.",
              "<strong>2. Giới thiệu tổng quan:</strong> Vị trí địa lí, vẻ đẹp thiên nhiên hoang sơ hoặc bề dày lịch sử, văn hóa độc đáo của vùng đất.",
              "<strong>3. Điểm đến nổi bật & Trải nghiệm:</strong> 3-4 danh lam thắng cảnh tiêu biểu kèm các hoạt động trải nghiệm hấp dẫn (leo núi, lặn biển, khám phá ẩm thực).",
              "<strong>4. Lịch trình tour & Dịch vụ:</strong> Lịch trình tóm tắt các ngày, khách sạn lưu trú, phương tiện di chuyển, phong cách phục vụ chu đáo.",
              "<strong>5. Báo giá & Chính sách ưu đãi:</strong> Bảng giá tour trọn gói công khai, các gói khuyến mãi đặc biệt dành riêng cho khách tại hội chợ.",
              "<strong>6. Kết thúc & Kêu gọi hành động (Call to Action):</strong> Thông tin liên hệ (Hotline, Fanpage, Gian hàng hội chợ), lời mời trải nghiệm và lời cảm ơn."
            ]
          },
          {
            badge: "Nguyên tắc thiết kế",
            title: "Các quy chuẩn vàng trong thiết kế Slide",
            points: [
              "<strong>Quy tắc một ý chính:</strong> Mỗi slide chỉ tập trung làm nổi bật một thông điệp cốt lõi; không nhồi nhét quá nhiều chữ khiến người xem mệt mỏi.",
              "<strong>Tỉ lệ chữ và hình ảnh:</strong> Hình ảnh đóng vai trò truyền cảm hứng cảm xúc; chữ chỉ là các từ khóa (keywords) cô đọng hỗ trợ bài nói.",
              "<strong>Độ tương phản màu sắc:</strong> Chữ màu tối trên nền sáng (hoặc chữ màu sáng trên nền ảnh tối) để người ngồi xa dưới hội trường vẫn đọc rõ."
            ]
          }
        ]
      },
      {
        heading: "2. Chuẩn hóa giao diện bằng công cụ Slide Master",
        items: [
          {
            badge: "Slide Master",
            title: "Bản chất và sức mạnh của Slide Master",
            points: [
              "<strong>Slide Master là gì:</strong> Là slide mẹ nằm ở vị trí cao nhất trong cây sơ đồ giao diện, kiểm soát toàn bộ các thuộc tính thiết kế chung (phông chữ, màu sắc, nền background, vị trí khung chữ) cho tất cả các slide con trong bài.",
              "<strong>Cơ chế kế thừa:</strong> Khi chỉnh sửa trên Slide Master mẹ, tất cả các slide con kế thừa sẽ tự động thay đổi theo. Nếu chỉnh sửa ở một Slide Layout con cụ thể, chỉ các slide áp dụng layout đó mới thay đổi.",
              "<strong>Mở chế độ Master:</strong> Vào thẻ <strong>View</strong> -> Nhóm <em>Master Views</em> -> Chọn <strong>Slide Master</strong>.",
              "<strong>Thoát chế độ Master:</strong> Sau khi hoàn tất chỉnh sửa, vào thẻ <em>Slide Master</em> -> Chọn <strong>Close Master View</strong> để quay về chế độ soạn thảo nội dung thông thường."
            ]
          },
          {
            badge: "Chuẩn hóa thương hiệu",
            title: "Các thành phần chuẩn hóa trên Slide Master",
            points: [
              "<strong>Phông chữ chuẩn:</strong> Chọn cặp phông đồng bộ (Heading font cho tiêu đề, Body font cho nội dung) hỗ trợ tiếng Việt đầy đủ (như Montserrat, Be Vietnam Pro, Arial, Calibri).",
              "<strong>Chèn Logo nhận diện:</strong> Chèn logo công ty du lịch vào góc trên hoặc góc dưới của Slide Master mẹ; logo sẽ tự động xuất hiện ở vị trí trang trọng trên tất cả các trang.",
              "<strong>Chân trang (Footer):</strong> Thiết lập số trang tự động (<em>Slide Number</em>), tên bài thuyết trình và thông tin bản quyền công ty tại chân trang."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Lợi ích lớn nhất của việc thiết lập phông chữ, màu sắc và logo trên Slide Master trong PowerPoint là gì?",
        options: [
          "Làm cho dung lượng tệp PowerPoint giảm xuống 0 KB",
          "Tự động áp dụng đồng bộ cho tất cả các slide trong bài thuyết trình mà không cần phải chỉnh sửa thủ công từng trang",
          "Tự động dịch nội dung slide sang 10 thứ tiếng",
          "Ngăn không cho người khác mở bài thuyết trình"
        ],
        answer: 1,
        explain: "Slide Master là trang chiếu chính quy định định dạng chung; mọi thiết lập trên Master sẽ tự động áp dụng đồng bộ xuống toàn bộ các slide con trong bài trình chiếu."
      },
      {
        q: "Để truy cập vào chế độ chỉnh sửa Slide Master trong PowerPoint, bạn thao tác như thế nào?",
        options: [
          "Vào thẻ Insert -> Chọn SmartArt",
          "Vào thẻ View -> Nhóm Master Views -> Chọn Slide Master",
          "Vào thẻ Transitions -> Chọn Fade",
          "Vào thẻ File -> Chọn Print"
        ],
        answer: 1,
        explain: "Vào thẻ View -> nhóm Master Views -> chọn nút Slide Master để mở không gian thiết kế trang chiếu chính."
      },
      {
        q: "Quy tắc thiết kế slide thuyết trình nào sau đây là ĐÚNG ĐẮN để thu hút khán giả?",
        options: [
          "Chép toàn bộ nội dung trong sách giáo khoa lên slide thành các đoạn văn dài đặc chữ",
          "Mỗi slide chỉ tập trung vào một thông điệp chính, dùng từ khóa ngắn gọn kết hợp với hình ảnh minh họa chất lượng cao",
          "Sử dụng 10 phông chữ khác nhau và 8 màu chữ sặc sỡ trên một trang",
          "Không chèn bất kì hình ảnh nào vào bài thuyết trình"
        ],
        answer: 1,
        explain: "Slide thuyết trình cần cô đọng, mỗi trang chỉ chuyển tải một thông điệp chính với từ khóa đắt giá và hình ảnh ấn tượng bổ trợ cho lời thuyết minh."
      }
    ]
  },

  13: {
    num: 13,
    title: "Tạo ấn tượng với minh họa bằng video",
    badge: "PowerPoint đa phương tiện",
    topic: "Chuyên đề 3: Thực hành sử dụng phần mềm trình chiếu",
    chapter: 3,
    summary: "Làm chủ kĩ thuật chèn, biên tập cắt xén thời lượng video (Trim Video), cấu hình chế độ phát tự động/nhấp chuột và phối hợp âm thanh hoàn hảo để trình chiếu tại hội chợ du lịch.",
    objectives: [
      "Chèn video từ tệp máy tính hoặc liên kết trực tuyến vào slide PowerPoint.",
      "Sử dụng các công cụ Video Format để tạo khung viền, hiệu ứng thẩm mỹ cho khung phát video.",
      "Sử dụng công cụ Playback để cắt thời lượng (Trim Video) và chọn cách thức khởi chạy video.",
      "Tích hợp video quảng bá danh lam thắng cảnh vào bài thuyết trình truyền thông."
    ],
    sections: [
      {
        heading: "1. Chèn và định dạng khung hình video (Video Format)",
        items: [
          {
            badge: "Chèn Video",
            title: "Phương thức chèn video vào Slide",
            points: [
              "<strong>Chèn từ máy tính (Video on My PC):</strong> Vào thẻ <strong>Insert</strong> -> Nhóm <em>Media</em> -> Chọn <strong>Video -> This Device...</strong> -> Chọn tệp video (định dạng tối ưu nhất là <code>.mp4</code> mã hóa H.264).",
              "<strong>Chèn video trực tuyến (Online Video):</strong> Dán đường dẫn từ YouTube hoặc Vimeo; tuy nhiên khi thuyết trình tại hội trường đòi hỏi phải có đường truyền Internet ổn định.",
              "<strong>Poster Frame (Ảnh bìa video):</strong> Chọn ảnh đại diện đẹp nhất xuất hiện trên khung video trước khi video được bấm phát, tránh hiện khung hình đen mờ ban đầu."
            ]
          },
          {
            badge: "Video Format",
            title: "Tùy biến thẩm mỹ cho khung phát video",
            points: [
              "<strong>Video Styles:</strong> Khung mẫu bo tròn góc, viền kim loại, tạo bóng đổ nhẹ hoặc khung nghiêng 3D giúp video hòa hợp với phong cách chung của slide.",
              "<strong>Video Shape:</strong> Lồng khung video phát bên trong một hình khối Shapes đặc biệt (ví dụ: phát video bên trong khung hình tròn hoặc khung bo góc).",
              "<strong>Cân đối kích thước:</strong> Bố trí video chiếm khoảng 1/2 đến 2/3 diện tích slide, phần diện tích còn lại dành cho tiêu đề và các gạch đầu dòng ghi chú ngắn."
            ]
          }
        ]
      },
      {
        heading: "2. Điều khiển trình chiếu video chuyên nghiệp (Playback)",
        items: [
          {
            badge: "Playback Options",
            title: "Cấu hình phát video trong thẻ Playback",
            points: [
              "<strong>Cắt thời lượng (Trim Video):</strong> Nháy chọn <strong>Trim Video</strong> -> Kéo thanh trượt màu xanh (Start Time) và thanh trượt màu đỏ (End Time) để chỉ phát đoạn phim đắt giá nhất (khoảng 30 giây - 1 phút), loại bỏ phần mở đầu hoặc kết thúc rườm rà.",
              "<strong>Chế độ bắt đầu (Start):</strong>",
              "• <code>In Click Sequence:</code> Video phát theo thứ tự nhấp chuột tiếp theo trong bài.",
              "• <code>Automatically:</code> Video tự động phát ngay khi chuyển đến trang slide đó (rất phù hợp cho gian hàng triển lãm tự động).",
              "• <code>When Clicked On:</code> Video chỉ phát khi người thuyết trình dùng chuột bấm trực tiếp vào khung video.",
              "<strong>Play Full Screen:</strong> Tự động phóng to video toàn màn hình khi phát.",
              "<strong>Loop until Stopped:</strong> Video tự động phát lặp đi lặp lại liên tục cho đến khi chuyển slide khác."
            ]
          },
          {
            badge: "Kiểm soát âm thanh",
            title: "Xử lí âm thanh video và lưu trữ đóng gói",
            points: [
              "<strong>Âm lượng video (Volume):</strong> Đặt ở mức <em>Medium</em> hoặc <em>Low</em> để âm thanh nền của clip không lấn át tiếng nói của người thuyết trình; có thể chọn <em>Mute</em> nếu chỉ lấy hình ảnh minh họa.",
              "<strong>Hiệu ứng Fade In / Fade Out:</strong> Làm âm thanh và hình ảnh của video xuất hiện từ từ và nhỏ dần khi kết thúc, tránh gây giật mình cho khán giả.",
              "<strong>Lưu ý đóng gói:</strong> Luôn chép tệp video vào cùng một thư mục chứa tệp PowerPoint để tránh hiện tượng mất liên kết video khi mang bài sang máy tính khác thuyết trình."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Công cụ nào trong thẻ Playback của PowerPoint cho phép bạn cắt ngắn đoạn video để chỉ phát đoạn phim ấn tượng nhất từ giây thứ 10 đến giây thứ 40?",
        options: [
          "Crop",
          "Trim Video",
          "Fade Out",
          "Video Effects"
        ],
        answer: 1,
        explain: "Tính năng Trim Video cho phép người dùng kéo chọn mốc thời gian bắt đầu (Start Time) và kết thúc (End Time) để cắt gọn độ dài video trực tiếp trong PowerPoint."
      },
      {
        q: "Khi muốn video quảng bá du lịch tự động phát ngay lập tức khi người thuyết trình bấm chuyển sang slide đó, bạn cần thiết lập tùy chọn 'Start' là gì?",
        options: [
          "When Clicked On",
          "Automatically",
          "Never",
          "Manual"
        ],
        answer: 1,
        explain: "Tùy chọn Start: Automatically giúp video tự động chạy ngay khi slide vừa xuất hiện trên màn hình trình chiếu mà không cần người dùng phải bấm chuột thêm."
      },
      {
        q: "Để tránh sự cố video không phát được khi mang bài thuyết trình PowerPoint sang máy tính ở hội chợ triển lãm, giải pháp an toàn nhất là gì?",
        options: [
          "Xóa video đi trước khi đi",
          "Lưu tệp video trong cùng một thư mục với tệp bài thuyết trình PowerPoint và sao chép toàn bộ thư mục đó đi",
          "Đổi đuôi tệp PowerPoint thành .txt",
          "Chỉ sử dụng hình vẽ đen trắng"
        ],
        answer: 1,
        explain: "Lưu tệp video và tệp PowerPoint trong cùng một thư mục giúp đường dẫn tương đối luôn được bảo toàn nguyên vẹn trên bất kì máy tính nào."
      }
    ]
  },

  14: {
    num: 14,
    title: "Thu hút khách hàng với trò chơi tương tác",
    badge: "PowerPoint đa phương tiện",
    topic: "Chuyên đề 3: Thực hành sử dụng phần mềm trình chiếu",
    chapter: 3,
    summary: "Làm chủ kĩ thuật hiệu ứng nâng cao và cơ chế Trigger (cò kích hoạt) để xây dựng trò chơi tương tác 'Vòng quay may mắn' hoặc 'Hộp quà bí mật' thu hút đông đảo du khách ghé thăm gian hàng.",
    objectives: [
      "Hiểu rõ bản chất của Trigger trong việc điều khiển hiệu ứng hoạt hình Animation.",
      "Sử dụng Animation Pane để sắp xếp thứ tự, thời lượng (Duration) và độ trễ (Delay).",
      "Thiết lập Trigger liên kết giữa nút bấm (Button/Shape) và hành vi xuất hiện/biến mất của hộp quà.",
      "Xây dựng hoàn chỉnh trò chơi đố vui tương tác nhận quà cho gian hàng du lịch."
    ],
    sections: [
      {
        heading: "1. Bản chất của Trigger và Quản lí Animation Pane",
        items: [
          {
            badge: "Khái niệm Trigger",
            title: "Cơ chế hoạt động của Trigger (Cò kích hoạt)",
            points: [
              "<strong>Hiệu ứng thông thường:</strong> Hoạt động tuần tự từ trên xuống dưới mỗi khi bấm chuột bất kì trên màn hình.",
              "<strong>Hiệu ứng có Trigger:</strong> Chỉ được kích hoạt khi người dùng nhấp chuột CHÍNH XÁC vào một đối tượng cụ thể (nút bấm, ngôi sao, hộp quà, câu hỏi) được chỉ định trước.",
              "<strong>Ứng dụng đột phá:</strong> Giúp tạo nên các ứng dụng tương tác đa phương tiện: trò chơi lật mở ô chữ, chọn gói quà may mắn, bảng câu hỏi trắc nghiệm tương tác trực tiếp trên slide."
            ]
          },
          {
            badge: "Animation Pane",
            title: "Điều khiển thời gian và thứ tự trong Animation Pane",
            points: [
              "<strong>Bật ngăn Animation Pane:</strong> Thẻ <strong>Animations</strong> -> Chọn nút <strong>Animation Pane</strong>; danh sách toàn bộ các hiệu ứng trên slide sẽ hiển thị ở cột bên phải.",
              "<strong>4 Nhóm hiệu ứng:</strong> <code>Entrance</code> (xuất hiện - màu xanh), <code>Emphasis</code> (nhấn mạnh - màu vàng), <code>Exit</code> (biến mất - màu đỏ), <code>Motion Paths</code> (chuyển động theo đường dẫn).",
              "<strong>Thông số thời gian:</strong> <code>Duration</code> (tốc độ chạy hiệu ứng nhanh hay chậm), <code>Delay</code> (thời gian chờ trễ trước khi bắt đầu chạy)."
            ]
          }
        ]
      },
      {
        heading: "2. Quy trình thiết kế trò chơi tương tác chọn quà may mắn",
        items: [
          {
            badge: "Thiết kế trò chơi",
            title: "Quy trình 5 bước cài đặt Trigger trò chơi",
            points: [
              "<strong>Bước 1 (Vẽ các đối tượng):</strong> Chèn các hình hộp quà (đối tượng che phủ) và các nhãn ghi tên phần thưởng (voucher giảm giá 20%, nón du lịch, quà đặc sản) đặt nằm lót bên dưới hộp quà.",
              "<strong>Bước 2 (Đặt tên đối tượng):</strong> Bật <em>Selection Pane</em> (thẻ Home -> Select -> Selection Pane) để đổi tên các hình vẽ thành <code>HopQua1</code>, <code>HopQua2</code>, <code>NutBam1</code> giúp nhận diện chính xác khi gán Trigger.",
              "<strong>Bước 3 (Thêm hiệu ứng biến mất):</strong> Chọn hình <code>HopQua1</code> -> Thêm hiệu ứng <strong>Exit (Disappear / Fade / Fly Out)</strong>.",
              "<strong>Bước 4 (Gán Trigger):</strong> Trong thẻ Animations, nhấp nút <strong>Trigger -> On Click of... -> Chọn đối tượng HopQua1</strong> (hoặc nút bấm tương ứng). Khi trình chiếu, chỉ khi nhấp trúng HopQua1 thì nó mới biến mất để lộ phần thưởng bên dưới.",
              "<strong>Bước 5 (Chạy thử & Tinh chỉnh):</strong> Chạy thử chế độ Slide Show (F5), kiểm tra nhấp chuột vào từng hộp quà độc lập, đảm bảo không bị lộ đáp án và hiệu ứng chạy mượt mà."
            ]
          },
          {
            badge: "Trải nghiệm gian hàng",
            title: "Vận dụng trò chơi thu hút khách tại hội chợ",
            points: [
              "<strong>Đố vui tìm hiểu văn hóa:</strong> Thiết kế các câu hỏi trắc nghiệm về danh lam thắng cảnh và phong tục địa phương; nhấp vào đáp án đúng hiện hoa chúc mừng, nhấp đáp án sai hiện âm thanh thử lại.",
              "<strong>Luật chơi đơn giản:</strong> Quy định rõ ràng, thao tác trực tiếp trên màn hình cảm ứng hoặc chuột máy tính giúp du khách hào hứng tương tác.",
              "<strong>Hiệu ứng vừa phải:</strong> Tránh lạm dụng quá nhiều hiệu ứng bay lượn rườm rà làm phân tán sự chú ý và làm chậm tốc độ xử lí của bài trình chiếu."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Trong phần mềm PowerPoint, tính năng 'Trigger' được hiểu chính xác là gì?",
        options: [
          "Một loại virus làm hỏng bài thuyết trình",
          "Một thiết lập gắn hiệu ứng hoạt hình với một đối tượng cụ thể, sao cho hiệu ứng chỉ xảy ra khi người dùng nhấp chuột trúng đối tượng đó",
          "Công cụ tự động vẽ biểu đồ hình tròn",
          "Hiệu ứng chuyển tiếp giữa hai trang chiếu"
        ],
        answer: 1,
        explain: "Trigger (cò kích hoạt) là tính năng cho phép gắn một hiệu ứng Animation với một đối tượng bấm cụ thể, tạo khả năng tương tác phi tuyến tính trên slide."
      },
      {
        q: "Công cụ nào trong PowerPoint giúp bạn đổi tên các hình khối, ảnh và nút bấm (ví dụ: HopQua1, NutBam) để dễ dàng nhận diện khi thiết lập Trigger?",
        options: [
          "Navigation Pane",
          "Selection Pane",
          "Animation Pane",
          "Review Pane"
        ],
        answer: 1,
        explain: "Ngăn Selection Pane (thẻ Home -> Select -> Selection Pane) liệt kê danh sách tên của tất cả các đối tượng trên slide và cho phép đổi tên quản lí cực kì thuận tiện."
      },
      {
        q: "Khi thiết kế trò chơi mở hộp quà bí mật, hiệu ứng nào sau đây nên được áp dụng cho nắp hộp quà để khi người chơi nhấp chuột vào thì nắp hộp mở ra làm lộ phần thưởng?",
        options: [
          "Hiệu ứng xuất hiện (Entrance)",
          "Hiệu ứng biến mất (Exit)",
          "Hiệu ứng đổi màu chữ (Font Color)",
          "Hiệu ứng chuyển trang (Transition)"
        ],
        answer: 1,
        explain: "Sử dụng hiệu ứng Exit (biến mất hoặc bay ra ngoài) gán Trigger cho nắp hộp quà sẽ khiến nắp hộp biến mất khi được bấm vào, làm lộ ra phần thưởng nằm ở lớp phía sau."
      }
    ]
  },

  15: {
    num: 15,
    title: "Hoàn thiện và xuất bản sản phẩm truyền thông",
    badge: "PowerPoint đa phương tiện",
    topic: "Chuyên đề 3: Thực hành sử dụng phần mềm trình chiếu",
    chapter: 3,
    summary: "Thực hành thu âm lời thuyết minh truyền cảm đồng bộ cho từng slide, rà soát tổng thể và xuất bản bài trình chiếu thành video độ phân giải cao (Full HD) để phát sóng tại Hội chợ du lịch.",
    objectives: [
      "Thực hiện ghi âm lời giới thiệu thuyết minh trực tiếp trên từng slide trình chiếu.",
      "Kiểm tra và đồng bộ hóa lời thuyết minh với nhịp độ xuất hiện của các hiệu ứng.",
      "Rà soát tổng thể bài trình chiếu (chính tả, bản quyền tư liệu, thời lượng).",
      "Xuất bản toàn bộ bài trình chiếu thành tệp video định dạng MP4 chất lượng cao."
    ],
    sections: [
      {
        heading: "1. Kĩ thuật ghi âm lời thuyết minh đồng bộ trên Slide",
        items: [
          {
            badge: "Ghi âm thuyết minh",
            title: "Phương thức thu âm lời giới thiệu (Record Audio / Slide Show)",
            points: [
              "<strong>Ghi âm từng slide riêng lẻ:</strong> Vào thẻ <strong>Insert</strong> -> Nhóm <em>Media</em> -> <strong>Audio -> Record Audio...</strong> -> Nhấn nút tròn màu đỏ để bắt đầu nói, nhấn nút vuông để dừng -> Biểu tượng chiếc loa xuất hiện trên slide.",
              "<strong>Ưu điểm của âm thanh từng slide:</strong> Đoạn thu âm của mỗi trang là đối tượng độc lập; nếu nói vấp hoặc sai ở slide nào, bạn chỉ cần xóa và thu lại đúng slide đó mà không hề ảnh hưởng đến các slide khác.",
              "<strong>Ghi âm toàn bài (Record Slide Show):</strong> Vào thẻ <strong>Slide Show</strong> -> Chọn <strong>Record</strong> -> Cho phép người thuyết trình vừa bấm chuyển slide, vừa nói thuyết minh để ghi lại cả lời nói lẫn nhịp thời gian chuyển trang thực tế.",
              "<strong>Yêu cầu chất lượng âm thanh:</strong> Sử dụng micro thu âm rõ ràng, không gian yên tĩnh không có tạp âm; giọng đọc truyền cảm, phát âm chuẩn, tốc độ vừa phải."
            ]
          },
          {
            badge: "Đồng bộ âm thanh",
            title: "Đồng bộ lời nói với nhịp xuất hiện hiệu ứng",
            points: [
              "<strong>Khớp nhịp trình diễn:</strong> Khi thu âm toàn bài, lời thuyết minh nhắc đến địa danh hay món ăn nào thì bấm chuột cho hình ảnh/chữ tương ứng xuất hiện đúng lúc.",
              "<strong>Ẩn biểu tượng loa khi chiếu:</strong> Chọn biểu tượng loa trên slide -> Thẻ <strong>Playback</strong> -> Tích chọn ô <em>Hide During Show</em> để biểu tượng chiếc loa không hiển thị trên màn hình chiếu.",
              "<strong>Tự động phát âm thanh:</strong> Đặt tùy chọn <em>Start: Automatically</em> để lời thuyết minh cất lên ngay khi slide được lật mở."
            ]
          }
        ]
      },
      {
        heading: "2. Xuất bản bài trình chiếu thành video chất lượng cao (MP4)",
        items: [
          {
            badge: "Rà soát tổng thể",
            title: "Bảng kiểm tra trước khi xuất bản video",
            points: [
              "<strong>Soát lỗi chính tả & thương hiệu:</strong> Kiểm tra tên công ty, thông tin giá tour, số điện thoại hotline, địa chỉ fanpage trên slide.",
              "<strong>Kiểm tra hiệu ứng & video:</strong> Chạy thử toàn bộ bài ở chế độ trình chiếu (F5) từ đầu đến cuối; kiểm tra các video nhúng phát mượt mà, âm lượng cân đối.",
              "<strong>Tính toán thời lượng:</strong> Đảm bảo toàn bộ bài trình chiếu tự động chạy trong khoảng 3 đến 5 phút, vừa vặn thu hút khách tham quan dừng chân theo dõi tại hội chợ."
            ]
          },
          {
            badge: "Xuất Video MP4",
            title: "Quy trình xuất tệp video từ PowerPoint",
            points: [
              "<strong>Bước thực hiện:</strong> Vào <strong>File</strong> -> Chọn <strong>Export</strong> -> Chọn <strong>Create a Video</strong>.",
              "<strong>Chọn chất lượng video:</strong> Chọn <code>Full HD (1080p)</code> để hình ảnh sắc nét khi chiếu trên tivi màn hình lớn tại gian hàng (hoặc <em>HD 720p</em> nếu muốn tệp nhẹ hơn).",
              "<strong>Tùy chọn thời gian:</strong> Chọn <em>Use Recorded Timings and Narrations</em> để video phát đúng theo nhịp lật trang và lời thuyết minh đã thu âm.",
              "<strong>Hoàn tất đóng gói:</strong> Nhấn nút <strong>Create Video</strong> -> Đặt tên tệp (ví dụ: <code>QuangBaDuLich_TayBac_KNTT.mp4</code>) -> Chờ thanh tiến trình ở đáy màn hình chạy xong để nhận tệp video hoàn chỉnh.",
              "<strong>Tổng kết dự án 3 chuyên đề:</strong> Bàn giao bộ 3 sản phẩm: Cẩm nang Word (PDF) + Bảng tính dự toán & báo giá Excel (XLSX/PDF) + Video trình chiếu quảng bá (MP4) sẵn sàng tỏa sáng tại Hội chợ du lịch Ba miền."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Ưu điểm nổi bật của việc ghi âm lời thuyết minh bằng tính năng Record Audio riêng trên từng slide là gì?",
        options: [
          "Tự động dịch giọng nói thành tiếng Pháp",
          "Nếu nói sai ở slide nào thì chỉ cần thu âm lại đúng slide đó mà không làm ảnh hưởng đến các slide khác",
          "Giọng nói được tự động chỉnh sửa thành giọng ca sĩ chuyên nghiệp",
          "Bắt buộc slide phải in ra giấy trước khi nghe"
        ],
        answer: 1,
        explain: "Âm thanh trên mỗi slide là đối tượng riêng biệt; điều này giúp việc sửa chữa, thu âm lại từng đoạn cực kì linh hoạt mà không cần thu lại từ đầu."
      },
      {
        q: "Để xuất bản toàn bộ bài trình chiếu PowerPoint thành một tệp video hoàn chỉnh, bạn sử dụng lệnh nào trong phần mềm?",
        options: [
          "File -> Save As -> Chọn định dạng .txt",
          "File -> Export -> Create a Video",
          "Insert -> SmartArt",
          "Review -> Translate"
        ],
        answer: 1,
        explain: "Lệnh File -> Export -> Create a Video cho phép chuyển đổi toàn bộ slide, hiệu ứng hoạt hình và âm thanh thuyết minh thành một tệp video chuẩn định dạng MP4."
      },
      {
        q: "Khi xuất video từ PowerPoint, tùy chọn 'Use Recorded Timings and Narrations' có ý nghĩa gì?",
        options: [
          "Bỏ qua toàn bộ âm thanh và chỉ xuất ra ảnh tĩnh",
          "Sử dụng chính xác thời gian chuyển trang và lời thuyết minh đã được ghi âm trong bài để tạo video",
          "Tự động đặt mỗi slide xuất hiện đúng 5 giây",
          "Tăng tốc độ video lên gấp 4 lần"
        ],
        answer: 1,
        explain: "Tùy chọn này đảm bảo video đầu ra sẽ giữ nguyên vẹn nhịp độ lật trang và toàn bộ lời bình thuyết minh mà người dùng đã thu âm."
      }
    ]
  }
};
