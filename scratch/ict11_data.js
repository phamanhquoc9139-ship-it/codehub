// Data for 15 lessons of Chuyên đề Tin học 11 ICT (Định hướng Tin học ứng dụng)
module.exports = {
  1: {
    num: 1,
    title: "Giới thiệu phần mềm vẽ trang trí (Inkscape)",
    badge: "Đồ họa Vector",
    topic: "Chuyên đề 1: Thực hành sử dụng phần mềm vẽ trang trí",
    chapter: 1,
    summary: "Làm quen với đồ họa vector trong Inkscape; phân biệt vector và bitmap raster; làm chủ các công cụ chọn, biến đổi Transform (Ctrl+Shift+M), nhân bản đối tượng (Ctrl+D) và quy trình 4 bước thiết kế sản phẩm số.",
    objectives: [
      "Phân biệt bản chất của đồ họa vector (SVG) và đồ họa raster bitmap (PNG/JPEG).",
      "Nắm vững giao diện Inkscape: Hộp công cụ, Thanh điều khiển, Fill & Stroke, Transform.",
      "Thực hiện thành thạo các thao tác chọn, di chuyển, biến đổi kích thước, xoay và nhân bản (Ctrl+D).",
      "Vận dụng quy trình lặp biến đổi đều để vẽ mặt đồng hồ kim hoàn chỉnh."
    ],
    sections: [
      {
        heading: "1. Bản chất đồ họa Vector & Giao diện làm việc Inkscape",
        items: [
          {
            badge: "Vector vs Bitmap",
            title: "Đồ họa Vector và ưu thế vượt trội trong thiết kế",
            points: [
              "<strong>Đồ họa Vector:</strong> Được tạo thành từ các đối tượng hình học và đường nét (Path) mô tả bằng các phương trình toán học. Khi phóng to thu nhỏ ở bất kì kích thước nào, đường nét vẫn sắc sảo tuyệt đối, không bị vỡ hạt.",
              "<strong>Đồ họa Raster (Bitmap):</strong> Được cấu tạo từ ma trận các điểm ảnh (Pixel); thích hợp cho ảnh chụp nhiều sắc thái màu, nhưng khi phóng lớn quá mức sẽ bị hiện tượng răng cưa, nhòe vỡ hạt.",
              "<strong>Định dạng tệp:</strong> Sản phẩm vector trong Inkscape được lưu mặc định ở định dạng chuẩn mở <code>.SVG</code> (Scalable Vector Graphics), dễ dàng xuất sang tệp ảnh <code>.PNG</code> để đăng tải trên website."
            ]
          },
          {
            badge: "Không gian làm việc",
            title: "Các thành phần giao diện chính của Inkscape",
            points: [
              "<strong>Vùng làm việc (Canvas):</strong> Không gian trung tâm để phác thảo và sắp đặt các đối tượng hình học.",
              "<strong>Hộp công cụ (Toolbox):</strong> Nằm ở cột bên trái, chứa các công cụ: Select (F1), vẽ hình khối (chữ nhật, elip, sao), vẽ đường (Pencil, Bezier Pen), Text.",
              "<strong>Thanh điều khiển thuộc tính (Tool Controls Bar):</strong> Nằm ở mép trên, tự động thay đổi các thông số chi tiết tương ứng với công cụ đang được chọn.",
              "<strong>Bảng Fill and Stroke & Transform:</strong> Mở bảng Fill and Stroke (<code>Ctrl + Shift + F</code>) để chỉnh màu tô và viền; mở Transform (<code>Ctrl + Shift + M</code>) để dịch chuyển, co giãn, xoay góc chính xác bằng số."
            ]
          }
        ]
      },
      {
        heading: "2. Thao tác chọn, biến đổi, nhân bản & Quy trình 4 bước",
        items: [
          {
            badge: "Biến đổi đối tượng",
            title: "Kĩ thuật nhân bản (Ctrl+D) và lặp biến đổi đều",
            points: [
              "<strong>Công cụ Select (F1):</strong> Nháy chuột lần 1 để hiện 8 mũi tên đổi kích thước (giữ <code>Ctrl</code> để giữ nguyên tỉ lệ hình); nháy chuột lần 2 để hiện các mũi tên xoay tròn và tâm quay (+).",
              "<strong>Nhân bản (Duplicate: Ctrl + D):</strong> Tạo một bản sao nằm đè khít ngay trên đối tượng gốc (nhanh hơn nhiều so với thao tác Copy - Paste truyền thống).",
              "<strong>Kĩ thuật vẽ mặt đồng hồ:</strong> Một vòng tròn có 360°, chia cho 60 phút = 6° giữa hai vạch phút. Tạo 1 vạch phút -> Đặt tâm quay trùng tâm mặt đồng hồ -> Nhấn <code>Ctrl + D</code> nhân bản -> Vào bảng Transform -> Rotate góc 6° -> Lặp lại thao tác để có 60 vạch đều tăm tắp."
            ]
          },
          {
            badge: "Quy trình thiết kế",
            title: "Quy trình 4 bước tạo sản phẩm trang trí số",
            points: [
              "<strong>Bước 1 (Xác định sản phẩm):</strong> Phác thảo ý tưởng các thành phần chính của sản phẩm (bưu thiếp, logo, huy hiệu).",
              "<strong>Bước 2 (Phân rã hình học):</strong> Chia sản phẩm thành các hình khối đơn giản; chọn công cụ vẽ thích hợp cho từng phần.",
              "<strong>Bước 3 (Thao tác chi tiết):</strong> Chọn, sắp xếp thứ tự lớp, biến đổi kích thước, nhân bản và phối màu sắc hài hòa.",
              "<strong>Bước 4 (Lưu và xuất bản):</strong> Luôn lưu tệp gốc <code>.SVG</code> để chỉnh sửa tiếp khi cần; xuất tệp ảnh <code>.PNG</code> với độ phân giải cao phục vụ in ấn."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Điểm khác biệt cơ bản nhất giữa đồ họa vector (SVG) và đồ họa bitmap (raster) là gì?",
        options: [
          "Đồ họa vector có dung lượng tệp luôn nặng hơn bitmap gấp 100 lần",
          "Đồ họa vector được mô tả bằng phương trình toán học nên khi phóng to thu nhỏ không bị vỡ hạt, còn bitmap tạo từ điểm ảnh nên dễ bị vỡ khi phóng lớn",
          "Đồ họa vector chỉ vẽ được màu đen trắng",
          "Đồ họa bitmap không thể mở được trên trình duyệt web"
        ],
        answer: 1,
        explain: "Vector lưu trữ tọa độ và công thức toán học của các đường nét nên bảo toàn độ sắc nét tuyệt đối ở mọi kích thước phóng to thu nhỏ."
      },
      {
        q: "Trong Inkscape, phím tắt nào được sử dụng để nhân bản (Duplicate) nhanh một đối tượng đang chọn?",
        options: [
          "Ctrl + C",
          "Ctrl + D",
          "Ctrl + Shift + D",
          "Ctrl + J"
        ],
        answer: 1,
        explain: "Phím tắt Ctrl + D (Duplicate) tạo một bản sao nằm trùng khít lên đối tượng gốc, giúp nhân bản đối tượng nhanh chóng."
      },
      {
        q: "Để vẽ mặt đồng hồ có 60 vạch phút cách đều nhau xung quanh một tâm tròn, góc xoay cần áp dụng trong bảng Transform cho mỗi bước nhân bản là bao nhiêu độ?",
        options: [
          "3°",
          "6° (vì 360° / 60 phút = 6°)",
          "12°",
          "30°"
        ],
        answer: 1,
        explain: "Một vòng tròn khép kín là 360°. Chia đều cho 60 vạch phút ta được góc xoay mỗi bước là 360° / 60 = 6°."
      }
    ]
  },

  2: {
    num: 2,
    title: "Làm việc với đối tượng hình khối",
    badge: "Đồ họa Vector",
    topic: "Chuyên đề 1: Thực hành sử dụng phần mềm vẽ trang trí",
    chapter: 1,
    summary: "Thành thạo các công cụ hình khối cơ bản (Rectangle, Circle/Arc, Star/Polygon, 3D Box, Spiral); phân tích và tạo dựng các công trình phức tạp như Tháp Rùa bằng phương pháp phân rã hình học, Group/Ungroup và xếp lớp đối tượng.",
    objectives: [
      "Sử dụng thành thạo các thông số hình khối có sẵn (góc bo, góc Start/End của cung tròn, số đỉnh ngôi sao).",
      "Nắm vững kĩ thuật phân rã đối tượng phức tạp thành các hình học cơ bản.",
      "Sử dụng thành thạo lệnh Group (Ctrl+G) và Ungroup (Ctrl+Shift+G) để quản lí khối hình.",
      "Dựng hoàn chỉnh biểu tượng Tháp Rùa cổ kính từ các hình khối hình học chuẩn tỉ lệ."
    ],
    sections: [
      {
        heading: "1. Khai thác các công cụ hình khối có sẵn trong Inkscape",
        items: [
          {
            badge: "Hình khối cơ bản",
            title: "Thuộc tính điều khiển của Rectangle và Circle/Arc",
            points: [
              "<strong>Rectangle (F4):</strong> Vẽ hình chữ nhật; nhấn giữ <code>Ctrl</code> để vẽ hình vuông hoàn hảo. Kéo nút tròn ở góc để bo tròn góc chữ nhật theo bán kính Rx, Ry.",
              "<strong>Circle/Ellipse/Arc (F5):</strong> Vẽ hình elip; nhấn giữ <code>Ctrl</code> để vẽ hình tròn. Trên thanh điều khiển, hai thông số <code>Start</code> và <code>End</code> quy định góc bắt đầu và kết thúc của cung tròn (0° đến 360°). Khi Start = End tạo hình tròn kín; khi khác nhau tạo hình cánh quạt (Slice) hoặc cung hở (Arc).",
              "<strong>Star/Polygon (*):</strong> Vẽ đa giác đều hoặc hình ngôi sao; tùy chỉnh thông số <code>Corners</code> (số đỉnh, số cạnh), <code>Spoke ratio</code> (tỉ lệ lõm của cánh sao) và <code>Rounded</code> (độ bo tròn đầu cánh sao)."
            ]
          },
          {
            badge: "Hình khối nâng cao",
            title: "Hình hộp 3D Box và Đường xoắn ốc Spiral",
            points: [
              "<strong>3D Box (Shift + F4):</strong> Vẽ khối hộp ba chiều với các mặt hiển thị phối cảnh chiều sâu tự động theo các điểm tụ phối cảnh (Vanishing points).",
              "<strong>Spiral (F9):</strong> Vẽ đường xoắn ốc đều; tùy biến thông số <code>Turns</code> (số vòng xoắn), <code>Divergence</code> (độ mở rộng của vòng xoắn) và <code>Inner radius</code> (bán kính trong cùng).",
              "<strong>Tái lập thuộc tính:</strong> Luôn quan sát thanh Tool Controls để nhập chính xác số đo kích thước (Width, Height tính bằng mm/px)."
            ]
          }
        ]
      },
      {
        heading: "2. Dựng hình phức tạp từ hình cơ bản & Dự án Tháp Rùa",
        items: [
          {
            badge: "Dựng hình Tháp Rùa",
            title: "Phương pháp phân rã hình học công trình kiến trúc",
            points: [
              "<strong>Phân tích kết cấu Tháp Rùa:</strong> Gồm 3 tầng tháp thu nhỏ dần lên trên. Thân các tầng là các hình chữ nhật; cửa vòm là hình chữ nhật kết hợp cung tròn bán nguyệt; lan can gồm các thanh đứng mảnh được nhân bản đều; mái tháp uốn cong bằng tam giác và hình thang.",
              "<strong>Căn chỉnh hàng lối (Align and Distribute: Ctrl+Shift+A):</strong> Căn tâm các tầng tháp thẳng hàng dọc (Center on vertical axis), đảm bảo khoảng cách giữa các thanh lan can giãn cách đều tăm tắp.",
              "<strong>Nhân bản bộ phận lặp lại:</strong> Chỉ cần vẽ chuẩn 1 cửa vòm hoặc 1 thanh lan can, sau đó dùng <code>Ctrl + D</code> nhân bản và sắp xếp để đảm bảo tính đồng dạng tuyệt đối."
            ]
          },
          {
            badge: "Quản lí nhóm & Lớp",
            title: "Tổ chức đối tượng bằng Group và Xếp lớp",
            points: [
              "<strong>Group (Ctrl + G):</strong> Gom các hình khối nhỏ (mái, thân, cửa) thành một khối thống nhất để di chuyển không bị rời rạc; khi cần sửa chi tiết bên trong thì dùng <strong>Ungroup (Ctrl + Shift + G)</strong>.",
              "<strong>Thứ tự lớp trước - sau:</strong> Dùng phím <code>Page Up</code> (nâng lên 1 lớp), <code>Page Down</code> (hạ xuống 1 lớp), <code>Home</code> (lên lớp trên cùng), <code>End</code> (xuống đáy) để các bộ phận che khuất nhau tự nhiên.",
              "<strong>Kiểm tra tỉ lệ:</strong> So sánh tỉ lệ chiều cao giữa các tầng tháp với nguyên mẫu thực tế để tác phẩm có sự cân đối, hài hòa."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Trong Inkscape, để vẽ một hình vuông hoàn hảo hoặc một hình tròn hoàn hảo, bạn cần nhấn giữ phím nào trong khi kéo chuột?",
        options: [
          "Phím Shift",
          "Phím Ctrl",
          "Phím Alt",
          "Phím Tab"
        ],
        answer: 1,
        explain: "Nhấn giữ phím Ctrl trong khi vẽ hình chữ nhật hoặc elip sẽ khóa tỉ lệ kích thước 1:1, tạo ra hình vuông hoặc hình tròn hoàn hảo."
      },
      {
        q: "Phím tắt nào sau đây dùng để nhóm (Group) nhiều đối tượng hình khối đang chọn thành một khối thống nhất?",
        options: [
          "Ctrl + G",
          "Ctrl + Shift + G",
          "Ctrl + U",
          "Ctrl + K"
        ],
        answer: 0,
        explain: "Ctrl + G là phím tắt của lệnh Group; còn Ctrl + Shift + G là phím tắt của lệnh Ungroup (rã nhóm)."
      },
      {
        q: "Khi vẽ hình bằng công cụ Circle/Arc, thông số nào quyết định hình vẽ là một đường tròn kín hay là một cung tròn khuyết góc?",
        options: [
          "Thông số Width và Height",
          "Thông số Start và End trên thanh điều khiển",
          "Độ phân giải DPI",
          "Màu sắc của viền Stroke"
        ],
        answer: 1,
        explain: "Hai thông số Start và End xác định góc bắt đầu và kết thúc của cung tròn trên vòng tròn 360 độ; khi Start khác End sẽ tạo ra cung tròn hở hoặc hình cánh quạt."
      }
    ]
  },

  3: {
    num: 3,
    title: "Làm việc với đối tượng đường",
    badge: "Đồ họa Vector",
    topic: "Chuyên đề 1: Thực hành sử dụng phần mềm vẽ trang trí",
    chapter: 1,
    summary: "Làm chủ các công cụ vẽ đường chuyên nghiệp Pencil, Calligraphy và Bezier Pen; tinh chỉnh điểm neo (Node) và tay nắm tiếp tuyến bằng Node tool; phối màu tô Fill và viền Stroke với hiệu ứng chuyển sắc Gradient.",
    objectives: [
      "Phân biệt đặc điểm và ứng dụng của Pencil (vẽ tự do), Calligraphy (thư pháp) và Bezier Pen (điểm neo).",
      "Sử dụng thành thạo Bezier Pen: nháy chuột tạo đoạn thẳng, kéo chuột tạo đoạn cong trơn.",
      "Sử dụng Node Tool (F2) để thêm, bớt, chuyển đổi kiểu điểm neo và uốn nắn tay nắm tiếp tuyến.",
      "Tùy biến bảng màu chuyển sắc Gradient (Linear / Radial) tạo chiều sâu ánh sáng cho bản vẽ."
    ],
    sections: [
      {
        heading: "1. Các công cụ vẽ đường và Kĩ thuật Bezier Pen",
        items: [
          {
            badge: "Bộ công cụ vẽ đường",
            title: "So sánh Pencil, Calligraphy và Bezier Pen",
            points: [
              "<strong>Pencil (F6 - Freehand):</strong> Vẽ các nét vẽ phác thảo tự do bằng cách nhấn giữ và rê chuột trên mặt bàn vẽ.",
              "<strong>Calligraphy (Ctrl + F6):</strong> Tạo nét bút có độ dày thay đổi linh hoạt theo góc nghiêng và tốc độ rê bút, mang phong cách thư pháp nghệ thuật.",
              "<strong>Bezier Pen (Shift + F6 - Paths):</strong> Công cụ tạo hình vector chuẩn mực và chính xác nhất; vẽ các đường cong và đường thẳng dựa trên hệ thống các điểm neo (Anchor Points) và tay nắm định hướng."
            ]
          },
          {
            badge: "Kĩ thuật Bezier Pen",
            title: "Quy tắc nháy và kéo khi vẽ bằng Bezier Pen",
            points: [
              "<strong>Tạo góc nhọn / đoạn thẳng:</strong> Chỉ cần nháy chuột (Click) tại điểm đầu và điểm tiếp theo rồi buông tay.",
              "<strong>Tạo đường cong trơn mềm:</strong> Nhấn giữ chuột tại điểm neo và kéo rê (Click and Drag) để kéo ra hai tay nắm tiếp tuyến điều khiển hướng cong và độ phồng của đường lượn.",
              "<strong>Đóng kín đường bao (Closed Path):</strong> Đưa con trỏ chuột quay trở về nháy trúng vào điểm neo đầu tiên (khi điểm này chuyển sang màu đỏ) để tạo thành một hình khép kín có thể tô màu Fill."
            ]
          }
        ]
      },
      {
        heading: "2. Chỉnh sửa Node và Màu chuyển sắc Gradient",
        items: [
          {
            badge: "Node Tool",
            title: "Tinh chỉnh điểm neo bằng Node Tool (F2)",
            points: [
              "<strong>Node Tool:</strong> Cho phép bấm vào từng điểm neo để di chuyển vị trí, hoặc kéo trực tiếp lên thân đường cong để uốn lượn.",
              "<strong>Các loại điểm neo:</strong> <code>Cusp Node</code> (điểm góc nhọn - hai tay nắm độc lập), <code>Smooth Node</code> (điểm cong trơn - hai tay nắm thẳng hàng đối xứng), <code>Symmetric Node</code> (điểm đối xứng hoàn hảo).",
              "<strong>Thêm/Xóa điểm neo:</strong> Nháy đúp chuột lên đường cong để chèn thêm điểm neo mới; chọn điểm neo và nhấn phím <code>Delete</code> để xóa bớt điểm neo thừa giúp đường cong mượt mà hơn."
            ]
          },
          {
            badge: "Fill & Stroke",
            title: "Màu tô, đường viền và Chuyển sắc Gradient",
            points: [
              "<strong>Fill (Màu tô) & Stroke (Đường viền):</strong> Bật bảng <code>Ctrl + Shift + F</code>; Fill là màu bên trong, Stroke là màu viền bao quanh (chỉnh độ dày viền trong thẻ <em>Stroke style</em>).",
              "<strong>Chuyển sắc tuyến tính (Linear Gradient):</strong> Màu sắc chuyển dần đều từ màu này sang màu khác theo một đường thẳng; dùng công cụ Gradient (F7) để kéo đổi hướng chuyển màu.",
              "<strong>Điểm chốt màu (Gradient Stops):</strong> Mỗi điểm chốt trên thanh màu có thể gán một màu sắc và độ mờ đục (Opacity) riêng, tạo hiệu ứng phản chiếu ánh sáng và khối tròn sống động cho cánh hoa, rặng núi."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Thao tác chuẩn xác để vẽ một đường cong trơn mềm mại bằng công cụ Bezier Pen trong Inkscape là gì?",
        options: [
          "Chỉ nháy chuột rồi buông tay ra ngay",
          "Nhấn giữ chuột trái và kéo rê để tạo ra hai tay nắm điều khiển hướng cong",
          "Nhấn giữ phím Spacebar và lắc chuột",
          "Gõ tọa độ vào bàn phím"
        ],
        answer: 1,
        explain: "Khi dùng Bezier Pen, nháy chuột tạo đoạn thẳng góc nhọn; nhấn giữ và kéo rê chuột sẽ kéo ra các tay nắm tiếp tuyến để uốn cong đường nét."
      },
      {
        q: "Công cụ nào trong Inkscape cho phép người dùng bấm chọn từng điểm neo (Node) và tay nắm để tinh chỉnh uốn nắn đường cong sau khi vẽ?",
        options: [
          "Select Tool (F1)",
          "Node Tool (F2)",
          "Zoom Tool (F3)",
          "Eraser Tool (Shift + E)"
        ],
        answer: 1,
        explain: "Node Tool (phím F2) là công cụ chuyên biệt để điều khiển các điểm neo và tay nắm tiếp tuyến của đường Path."
      },
      {
        q: "Muốn tạo hiệu ứng bóng đổ và độ sâu ánh sáng từ màu đậm sang màu nhạt dần cho cánh hoa, bạn sử dụng chế độ tô màu nào trong bảng Fill and Stroke?",
        options: [
          "Flat color (Màu đơn sắc)",
          "Linear Gradient (Màu chuyển sắc tuyến tính)",
          "No paint (Không tô màu)",
          "Mesh color (Màu lưới đan)"
        ],
        answer: 1,
        explain: "Linear Gradient tạo dải màu biến thiên mượt mà giữa các điểm chốt màu (Stops), tạo hiệu ứng ánh sáng khối chân thực."
      }
    ]
  },

  4: {
    num: 4,
    title: "Chỉnh sửa, ghép nối, kết nối các đối tượng đồ họa",
    badge: "Đồ họa Vector",
    topic: "Chuyên đề 1: Thực hành sử dụng phần mềm vẽ trang trí",
    chapter: 1,
    summary: "Làm chủ 6 phép toán hình học Boolean trong menu Path (Union, Difference, Intersection, Exclusion, Division, Combine); phân biệt rạch ròi giữa Union và Group; kết hợp hình vector với ảnh nền bitmap để tạo tranh minh họa hoàn chỉnh.",
    objectives: [
      "Thực hiện thành thạo các phép toán Boole trên đường Path: Union, Difference, Intersection...",
      "Phân biệt bản chất giữa phép hợp hình học (Union) và phép nhóm đối tượng (Group).",
      "Biết cách chuyển hình khối có sẵn thành đường cong tự do bằng lệnh Object to Path (Ctrl+Shift+C).",
      "Kết hợp đồ họa vector với ảnh chụp bitmap nền hoàng hôn tạo tác phẩm cành cây và đàn chim nghệ thuật."
    ],
    sections: [
      {
        heading: "1. Các phép toán hình học Boole trên đường Path",
        items: [
          {
            badge: "Các phép Boole",
            title: "Chi tiết 6 phép toán biến đổi hình học trong Menu Path",
            points: [
              "<strong>1. Union (Hợp - Ctrl + +):</strong> Hợp nhất tất cả các vùng hình đang chọn thành một hình duy nhất liền mạch, xóa bỏ toàn bộ các đường ranh giới giao nhau bên trong.",
              "<strong>2. Difference (Hiệu - Ctrl + -):</strong> Lấy hình nằm dưới trừ đi phần bị hình nằm trên che lấp (dùng hình trên như chiếc khuôn đục lỗ hình dưới).",
              "<strong>3. Intersection (Giao - Ctrl + *):</strong> Chỉ giữ lại phần diện tích chung chồng lấp lên nhau giữa các hình; phần ngoài bị xóa hết.",
              "<strong>4. Exclusion (Loại trừ - Ctrl + ^):</strong> Giữ lại các phần riêng lẻ của các hình, khoét rỗng phần diện tích giao nhau ở giữa.",
              "<strong>5. Division (Chia cắt - Ctrl + /):</strong> Dùng đường hoặc hình nằm trên để cắt hình nằm dưới thành các mảnh rời nhau.",
              "<strong>6. Combine (Tổng hợp - Ctrl + K):</strong> Kết hợp nhiều đường Path rời rạc thành một đối tượng đường chung duy nhất."
            ]
          },
          {
            badge: "Phân biệt cốt lõi",
            title: "Phân biệt bản chất giữa Union và Group",
            points: [
              "<strong>Phép Union:</strong> Hòa tan vĩnh viễn các hình khối thành MỘT ĐỐI TƯỢNG ĐƯỜNG MỚI duy nhất; không thể dùng lệnh Ungroup để tách lại các hình cũ (chỉ có thể Undo Ctrl+Z).",
              "<strong>Phép Group:</strong> Chỉ gom tạm thời nhiều đối tượng lại với nhau để di chuyển cùng lúc; từng đối tượng bên trong vẫn giữ nguyên vẹn thuộc tính ban đầu và có thể dùng <strong>Ungroup</strong> để tách ra bất kì lúc nào.",
              "<strong>Yêu cầu Object to Path:</strong> Trước khi thực hiện các phép Boole trên hình chữ nhật, hình tròn, cần chuyển chúng thành đường bằng lệnh <code>Path -> Object to Path (Ctrl + Shift + C)</code>."
            ]
          }
        ]
      },
      {
        heading: "2. Bố cục không gian, xếp lớp và phối hợp ảnh Bitmap",
        items: [
          {
            badge: "Phối hợp Bitmap",
            title: "Nhập và quản lí ảnh chụp Bitmap làm nền",
            points: [
              "<strong>Nhập ảnh (File -> Import):</strong> Chèn một bức ảnh chụp phong cảnh hoàng hôn (định dạng JPG/PNG) vào bản vẽ Inkscape để làm khung cảnh nền.",
              "<strong>Đưa xuống lớp đáy cùng (Lower to Bottom: phím End):</strong> Bấm phím <code>End</code> để đẩy ảnh chụp bitmap xuống lớp dưới cùng nhất, giúp các chi tiết vector (cành cây, cánh hoa, đàn chim) nổi rõ ở lớp phía trên.",
              "<strong>Khóa lớp (Lock Layer):</strong> Khóa đối tượng ảnh nền lại để khi thao tác chuột vẽ các chi tiết vector phía trên không bị vô tình kéo xê dịch ảnh nền."
            ]
          },
          {
            badge: "Tác phẩm thực hành",
            title: "Vẽ cành cây và đàn chim bay trên nền hoàng hôn",
            points: [
              "<strong>Vẽ cành hoa:</strong> Vẽ từng cánh hoa bằng elip -> Nhân bản xoay tròn 5 cánh -> Phép Union nối liền các cánh -> Chèn nhụy tròn màu vàng ở giữa.",
              "<strong>Vẽ đàn chim:</strong> Dùng Bezier Pen vẽ dáng cánh chim đang sải cánh -> Dùng phép Union biến thành một hình bóng đen (Silhouette) -> Nhân bản và thu nhỏ kích thước để tạo cảm giác đàn chim bay xa xăm.",
              "<strong>Cân đối thị giác:</strong> Phân bổ cành hoa ở góc trên bên trái, đàn chim bay chếch về góc trên bên phải hướng về vầng mặt trời."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Lệnh nào trong menu Path của Inkscape có tác dụng hợp nhất nhiều hình khối đang chọn thành một hình duy nhất liền mạch và xóa bỏ các đường giao nhau bên trong?",
        options: [
          "Group (Ctrl + G)",
          "Union (Ctrl + +)",
          "Difference (Ctrl + -)",
          "Intersection (Ctrl + *)"
        ],
        answer: 1,
        explain: "Lệnh Union (Hợp) biến các vùng hình học giao nhau thành một đối tượng vector duy nhất, xóa bỏ toàn bộ ranh giới chồng lấn bên trong."
      },
      {
        q: "Để tạo hình trăng lưỡi liềm bằng cách dùng một hình tròn nằm trên đục khoét bớt một phần của hình tròn nằm dưới, bạn sử dụng lệnh nào?",
        options: [
          "Path -> Union",
          "Path -> Difference (Ctrl + -)",
          "Path -> Combine",
          "Object -> Group"
        ],
        answer: 1,
        explain: "Lệnh Difference (Hiệu) lấy hình nằm dưới trừ đi phần diện tích bị hình nằm trên đè lên, tạo ra hình trăng khuyết hoàn hảo."
      },
      {
        q: "Khi chèn một bức ảnh chụp phong cảnh hoàng hôn vào làm nền cho bản vẽ vector, bạn nhấn phím nào để đưa ảnh nền xuống lớp dưới cùng của trang vẽ?",
        options: [
          "Phím Home",
          "Phím End (Lower to Bottom)",
          "Phím Page Up",
          "Phím Delete"
        ],
        answer: 1,
        explain: "Phím End (Lower to Bottom) lập tức đẩy đối tượng được chọn xuống tầng hiển thị dưới cùng của tất cả các lớp."
      }
    ]
  },

  5: {
    num: 5,
    title: "Thiết kế sản phẩm trang trí hoàn chỉnh",
    badge: "Đồ họa Vector",
    topic: "Chuyên đề 1: Thực hành sử dụng phần mềm vẽ trang trí",
    chapter: 1,
    summary: "Thực hiện dự án thiết kế sản phẩm đồ họa trang trí hoàn chỉnh (Bưu thiếp quảng bá du lịch Hồ Gươm - Tháp Rùa); làm chủ kĩ thuật tạo bóng nước phản chiếu, mặt nạ khuôn cắt và quy chuẩn kiểm tra xuất bản in ấn.",
    objectives: [
      "Nắm vững quy trình 5 bước thiết kế một ấn phẩm đồ họa quảng bá du lịch chuyên nghiệp.",
      "Thực hiện kĩ thuật tạo bóng phản chiếu mặt nước bằng thao tác lật dọc, co dẹp và chỉnh Opacity.",
      "Ứng dụng hình Tháp Rùa đã Union làm khuôn cắt (Clipping Path) xử lí chồng lấn bóng nước.",
      "Rà soát độ tương phản, lỗi chính tả, tỉ lệ và xuất bản sản phẩm hoàn thiện dạng SVG và PNG."
    ],
    sections: [
      {
        heading: "1. Quy trình 5 bước thiết kế ấn phẩm đồ họa du lịch",
        items: [
          {
            badge: "Quy trình dự án",
            title: "5 Bước thiết kế từ ý tưởng đến thành phẩm",
            points: [
              "<strong>Bước 1 (Xác định mục tiêu):</strong> Chọn danh lam thắng cảnh (Hồ Gươm - Tháp Rùa Hà Nội) và nhóm công chúng mục tiêu (du khách trong và ngoài nước).",
              "<strong>Bước 2 (Chọn loại hình & Thông điệp):</strong> Thiết kế bưu thiếp du lịch (Postcard khổ chuẩn 10x15cm) với thông điệp chào mừng: <em>'Hà Nội - Thành phố vì hòa bình'</em>.",
              "<strong>Bước 3 (Phác thảo bố cục thị giác):</strong> Bố trí vùng trung tâm là Tháp Rùa soi bóng Hồ Gươm, góc trên là cành liễu rủ mềm mại, góc dưới là thông điệp chữ trang trọng và tem bưu chính.",
              "<strong>Bước 4 (Thiết kế chi tiết):</strong> Sử dụng hình khối, Bezier Pen, Gradient và các phép Boole đã học ở các bài trước để vẽ từng chi tiết.",
              "<strong>Bước 5 (Đánh giá và xuất bản):</strong> Kiểm tra lỗi chính tả, căn chỉnh độ tương phản màu, xuất tệp <code>SVG</code> và <code>PNG</code> chất lượng cao."
            ]
          },
          {
            badge: "Kĩ thuật đồ họa cao cấp",
            title: "Kĩ thuật tạo bóng nước phản chiếu chân thực",
            points: [
              "<strong>Nhân bản & Lật dọc:</strong> Chọn toàn bộ khối hình Tháp Rùa -> Nhấn <code>Ctrl + D</code> nhân bản -> Bấm phím <code>V</code> (Flip Vertically) để lật ngược hình theo phương thẳng đứng.",
              "<strong>Biến dạng bóng nước:</strong> Kéo dẹp chiều cao của hình lật ngược xuống khoảng 60-70% để mô phỏng góc nhìn nghiêng của mặt nước; đặt sát chân tháp thực.",
              "<strong>Độ mờ đục (Opacity 50%):</strong> Trong bảng Fill and Stroke, hạ thanh trượt <code>Opacity</code> xuống còn 40-50% để bóng tháp trở nên trong suốt mờ ảo trên làn nước hồ xanh biếc.",
              "<strong>Xử lí chồng lấn bóng nước:</strong> Nếu phần bóng gồm nhiều hình khối xếp đè lên nhau khiến vùng giao nhau bị đậm màu bất thường, hãy áp dụng phép <strong>Union</strong> cho khối bóng trước khi giảm Opacity để bóng nước mịn màng đồng nhất."
            ]
          }
        ]
      },
      {
        heading: "2. Hoàn thiện typography và Kiểm thử chất lượng ấn phẩm",
        items: [
          {
            badge: "Chữ nghệ thuật",
            title: "Thiết kế chữ tiêu đề (Typography) trên bưu thiếp",
            points: [
              "<strong>Công cụ Text (F8):</strong> Gõ tiêu đề <em>'HÀ NỘI NGHÌN NĂM VĂN HIẾN'</em>; chọn phông chữ thanh lịch, có chân hoặc không chân hỗ trợ Unicode tiếng Việt đầy đủ.",
              "<strong>Tạo khối viền cho chữ:</strong> Gán màu tô Fill màu vàng kim và Stroke viền ngoài màu nâu sẫm để chữ nổi bật trên nền trời chiều hoàng hôn mà không bị chìm.",
              "<strong>Khoảng cách dòng & chữ:</strong> Điều chỉnh khoảng cách giãn chữ (Letter spacing) thoáng đãng, trang nhã, tạo cảm giác thanh bình cho bưu thiếp."
            ]
          },
          {
            badge: "Kiểm thử nghiệm thu",
            title: "Checklist đánh giá chất lượng sản phẩm Chuyên đề 1",
            points: [
              "<strong>Tính thẩm mĩ & hài hòa:</strong> Bảng màu phối hợp hài hòa, có điểm nhấn chính phụ rõ ràng; không dùng quá nhiều màu tương phản chói gắt.",
              "<strong>Độ chính xác kĩ thuật:</strong> Các đường viền ghép nối khít khao, không bị hở khe trắng vô duyên; các điểm neo được nắn vuốt trơn tru không gãy khúc.",
              "<strong>Xuất file đa dụng:</strong> Lưu tệp làm việc <code>BưuThiep_HoGuom.svg</code> để bảo toàn các lớp; xuất tệp <code>BưuThiep_HoGuom.png</code> với độ phân giải 300 DPI sẵn sàng in ấn gửi tặng du khách."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Để tạo bóng phản chiếu của Tháp Rùa xuống mặt nước hồ trong Inkscape, thao tác biến đổi đầu tiên cần thực hiện sau khi nhân bản (Ctrl+D) là gì?",
        options: [
          "Xóa bỏ hình tháp",
          "Lật ngược hình theo phương thẳng đứng (Flip Vertically - phím V) và kéo dẹp chiều cao",
          "Xoay hình 90 độ sang phải",
          "Tô màu đen toàn bộ hình tháp"
        ],
        answer: 1,
        explain: "Lật dọc đối tượng (phím V) và co bớt chiều cao xuống sát đáy công trình thực là bước cơ bản để mô phỏng hình ảnh phản chiếu trên mặt nước."
      },
      {
        q: "Tại sao khi tạo bóng nước gồm nhiều đối tượng hình khối chồng lấn nhau, ta nên áp dụng phép 'Union' trước khi giảm thanh trượt Opacity xuống 50%?",
        options: [
          "Để máy tính không bị quá tải bộ nhớ",
          "Để các phần diện tích chồng lấn không bị cộng dồn độ đục khiến bóng nước xuất hiện các vệt đậm loang lổ không đều",
          "Bắt buộc theo luật bản quyền phần mềm",
          "Để chuyển hình ảnh thành văn bản"
        ],
        answer: 1,
        explain: "Nếu không Union, khi giảm Opacity thì những chỗ các hình đè lên nhau sẽ có độ đục gấp đôi, làm bóng nước bị sọc đậm nhạt loang lổ mất thẩm mỹ."
      },
      {
        q: "Độ phân giải DPI tối ưu khi xuất bản bưu thiếp từ Inkscape ra tệp ảnh PNG để in ấn trên giấy ảnh sắc nét là bao nhiêu?",
        options: [
          "72 DPI",
          "150 DPI",
          "300 DPI",
          "1000 DPI"
        ],
        answer: 2,
        explain: "Chuẩn in ấn đồ họa chuyên nghiệp luôn khuyến nghị độ phân giải từ 300 DPI trở lên để các chi tiết in ra giấy sắc nét, không bị nhòe vỡ."
      }
    ]
  },

  6: {
    num: 6,
    title: "Làm quen với phần mềm làm phim hoạt hình (Toontastic 3D)",
    badge: "Phim hoạt hình 3D",
    topic: "Chuyên đề 2: Thực hành sử dụng phần mềm làm phim hoạt hình",
    chapter: 2,
    summary: "Khám phá thế giới làm phim hoạt hình 3D với Toontastic; nắm vững 3 cấu trúc cốt truyện kinh điển (Short Story, Classic Story, Science Report); làm chủ quy trình 6 bước từ chọn bối cảnh, nhân vật, diễn hoạt đến thu âm lời thoại.",
    objectives: [
      "Hiểu rõ các thành tố cốt lõi của một bộ phim hoạt hình (cốt truyện, nhân vật, bối cảnh, âm thanh).",
      "Phân biệt và lựa chọn đúng 3 mẫu cấu trúc kể chuyện trong Toontastic 3D.",
      "Thực hiện thành thạo quy trình 6 bước tạo lập một hoạt cảnh (Scene) hoàn chỉnh.",
      "Điều khiển nhân vật chuyển động, cử động miệng khớp với lời thoại thu âm trực tiếp."
    ],
    sections: [
      {
        heading: "1. Cấu trúc câu chuyện và Nguồn tư liệu trong Toontastic 3D",
        items: [
          {
            badge: "Cấu trúc cốt truyện",
            title: "3 Mẫu cấu trúc câu chuyện kinh điển",
            points: [
              "<strong>1. Short Story (3 Cảnh):</strong> Cấu trúc ngắn gọn gồm: <em>Beginning</em> (Mở đầu/Giới thiệu) -> <em>Middle</em> (Diễn biến thử thách) -> <em>End</em> (Kết thúc). Thích hợp cho phim ngắn thông điệp nhanh.",
              "<strong>2. Classic Story (5 Cảnh):</strong> Cấu trúc kinh điển kịch tính gồm: <em>Setup</em> (Thiết lập bối cảnh) -> <em>Conflict</em> (Xung đột nảy sinh) -> <em>Challenge</em> (Đối đầu khó khăn) -> <em>Climax</em> (Cao trào giải quyết) -> <em>Resolution</em> (Hồi kết viên mãn).",
              "<strong>3. Science Report (5 Cảnh):</strong> Cấu trúc báo cáo khoa học gồm: <em>Question</em> (Câu hỏi nghiên cứu) -> <em>Hypothesis</em> (Giả thuyết) -> <em>Experiment</em> (Thực nghiệm) -> <em>Data</em> (Phân tích số liệu) -> <em>Conclusion</em> (Kết luận)."
            ]
          },
          {
            badge: "Thành tố phim",
            title: "Bối cảnh, Nhân vật và Biểu cảm hoạt hình",
            points: [
              "<strong>Bối cảnh (Environment):</strong> Không gian diễn ra cảnh quay (phòng thí nghiệm khoa học, rừng rậm bí ẩn, không gian vũ trụ, trường học...). Có thể chọn mẫu dựng sẵn hoặc tự vẽ tay.",
              "<strong>Nhân vật (Characters):</strong> Có thể chọn nhân vật 3D trong thư viện, tự vẽ nhân vật mới, hoặc chụp khuôn mặt người thật gắn vào nhân vật.",
              "<strong>Cơ chế diễn hoạt:</strong> Nhân vật có khớp cử động linh hoạt: chạm nhẹ vào người để mở khẩu hình miệng nói chuyện; kéo rê để di chuyển; vuốt cử chỉ riêng để nhân vật nhảy, giơ tay chào hoặc vỗ cánh."
            ]
          }
        ]
      },
      {
        heading: "2. Quy trình 6 bước sản xuất hoạt cảnh cơ bản",
        items: [
          {
            badge: "Quy trình làm phim",
            title: "6 Bước tạo lập một cảnh quay trong Toontastic",
            points: [
              "<strong>Bước 1 (Chọn cấu trúc):</strong> Bấm dấu (+) để tạo dự án mới -> Chọn 1 trong 3 mẫu câu chuyện phù hợp ý tưởng kịch bản.",
              "<strong>Bước 2 (Chọn cảnh & Bối cảnh):</strong> Nhấp vào cảnh cần dàn dựng -> Chọn bối cảnh không gian thích hợp trong thư viện.",
              "<strong>Bước 3 (Thêm nhân vật):</strong> Chọn các nhân vật sẽ tham gia diễn xuất trong cảnh; sắp xếp đặt nhân vật vào vị trí xuất phát ban đầu.",
              "<strong>Bước 4 (Bắt đầu ghi hình - Start):</strong> Bấm nút <strong>Start</strong> (đồng hồ đếm ngược 3-2-1) -> Dùng các ngón tay di chuyển nhân vật diễn xuất trên màn hình đồng thời nói lời thoại thu âm trực tiếp qua micro.",
              "<strong>Bước 5 (Chọn nhạc nền - Mood):</strong> Kết thúc ghi hình -> Chọn bản nhạc nền thể hiện cảm xúc của cảnh (vui nhộn, kịch tính, bí ẩn, xúc động).",
              "<strong>Bước 6 (Xem lại & Xuất phim):</strong> Phát lại toàn bộ chuỗi các cảnh quay -> Bấm <strong>Finish</strong> -> Nhập tên phim, tên đạo diễn và xuất tệp video."
            ]
          },
          {
            badge: "Lưu ý kĩ thuật",
            title: "Môi trường cài đặt và Kĩ năng diễn hoạt",
            points: [
              "<strong>Môi trường phần mềm:</strong> Trong nhà trường, Toontastic 3D có thể chạy trực tiếp trên máy tính bảng hoặc máy tính thông qua phần mềm giả lập Android (BlueStacks).",
              "<strong>Diễn hoạt phối hợp:</strong> Nếu cảnh có 2 nhân vật đối thoại, nên phối hợp hai bạn cùng điều khiển màn hình cảm ứng để nhân vật cử động tự nhiên, không bị đơ cứng."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Cấu trúc kể chuyện 'Classic Story' (Câu chuyện kinh điển) trong Toontastic 3D bao gồm mấy cảnh quay?",
        options: [
          "3 cảnh",
          "5 cảnh (Setup, Conflict, Challenge, Climax, Resolution)",
          "7 cảnh",
          "10 cảnh"
        ],
        answer: 1,
        explain: "Classic Story gồm 5 cảnh theo trình tự kịch tính chuẩn: Thiết lập bối cảnh -> Xung đột -> Thử thách -> Cao trào -> Hồi kết."
      },
      {
        q: "Làm thế nào để nhân vật hoạt hình trong Toontastic 3D cử động khẩu hình miệng như đang nói chuyện trong lúc ghi hình?",
        options: [
          "Phải lập trình mã nguồn bằng Python",
          "Chạm ngón tay vào nhân vật trong lúc nói vào micro",
          "Nhấn phím F12 trên bàn phím",
          "Vẽ thêm 10 bức ảnh miệng khác nhau"
        ],
        answer: 1,
        explain: "Khi chạm vào nhân vật trong lúc ứng dụng đang ghi âm giọng nói qua micro, nhân vật sẽ tự động cử động miệng khớp với âm thanh phát ra."
      },
      {
        q: "Sau khi bấm nút dừng ghi hình một cảnh quay trong Toontastic, bước tiếp theo ứng dụng yêu cầu người làm phim chọn là gì?",
        options: [
          "Xóa bỏ cảnh quay đó",
          "Chọn tâm trạng nhạc nền (Mood music) phù hợp với cảm xúc của cảnh",
          "Nhập số thẻ ngân hàng để thanh toán",
          "Tắt máy tính khởi động lại"
        ],
        answer: 1,
        explain: "Ngay sau khi quay xong cảnh, Toontastic chuyển sang màn hình chọn nhạc nền với các cung bậc cảm xúc (Hào hứng, Bí ẩn, Buồn rầu, Vui vẻ...)."
      }
    ]
  },

  7: {
    num: 7,
    title: "Thiết kế nhân vật hoạt hình",
    badge: "Phim hoạt hình 3D",
    topic: "Chuyên đề 2: Thực hành sử dụng phần mềm làm phim hoạt hình",
    chapter: 2,
    summary: "Làm chủ 2 phương thức sáng tạo nhân vật trong Toontastic 3D: tùy biến nhân vật có sẵn và tự vẽ nhân vật 3D mới hoàn toàn; định hình tính cách, trang phục và điều khiển cử động đặc trưng của nhân vật trong phim.",
    objectives: [
      "Thực hiện thành thạo việc chỉnh sửa trang phục, màu sắc cho nhân vật có sẵn trong thư viện.",
      "Sử dụng công cụ cọ vẽ để tự phác thảo nhân vật 2D/3D độc đáo từ trí tưởng tượng.",
      "Ứng dụng tính năng gắn ảnh khuôn mặt người thật vào mô hình nhân vật hoạt hình.",
      "Sắp đặt vị trí ban đầu và hướng di chuyển nhân vật hợp lí, tránh che khuất nhau."
    ],
    sections: [
      {
        heading: "1. Hai phương pháp tạo hình nhân vật trong Toontastic",
        items: [
          {
            badge: "Chỉnh sửa mẫu có sẵn",
            title: "Phương pháp 1: Tùy biến nhân vật trong thư viện",
            points: [
              "<strong>Chọn nhân vật mẫu:</strong> Trong màn hình lựa chọn nhân vật, nhấp vào biểu tượng chiếc cọ vẽ trên góc nhân vật muốn tùy chỉnh.",
              "<strong>Đổi màu sắc & Chi tiết:</strong> Sử dụng công cụ thùng sơn (Fill) và bảng màu để thay đổi màu da, màu tóc, màu áo quần và phụ kiện cho nhân vật.",
              "<strong>Ưu điểm:</strong> Nhân vật có sẵn bộ khung xương cử động 3D rất chuẩn xác, các khớp tay chân bước đi mượt mà tự nhiên."
            ]
          },
          {
            badge: "Vẽ mới hoàn toàn",
            title: "Phương pháp 2: Tự vẽ nhân vật mới (Draw Your Own)",
            points: [
              "<strong>Khởi tạo vẽ mới:</strong> Nhấn vào ô <strong>Draw Your Own</strong> có hình trang giấy trắng và bút vẽ.",
              "<strong>Phác thảo hình thể 2D:</strong> Dùng cọ vẽ viền nét ngoài của nhân vật (đầu, mình, tay, chân); phần mềm sẽ tự động 'bơm căng' hình vẽ 2D thành một mô hình khối 3D phồng dày sinh động.",
              "<strong>Tô màu chi tiết:</strong> Chọn màu tô các mảng trang phục, vẽ mắt, mũi, miệng biểu cảm cho nhân vật.",
              "<strong>Đặt tên & Lưu trữ:</strong> Đặt tên định danh cho nhân vật (ví dụ: <em>Thám tử Bo</em>, <em>Bác học Tí Hon</em>) để nhân vật tự động lưu vào danh mục sử dụng cho tất cả các cảnh quay sau này."
            ]
          }
        ]
      },
      {
        heading: "2. Gắn khuôn mặt người thật & Kĩ thuật điều khiển diễn xuất",
        items: [
          {
            badge: "Khuôn mặt người thật",
            title: "Tính năng biến ảnh chân dung thành nhân vật hoạt hình",
            points: [
              "<strong>Chụp ảnh trực tiếp:</strong> Sử dụng camera của thiết bị để chụp chân dung của bạn học hoặc bản thân trong khung hình quả trứng.",
              "<strong>Ghép vào nhân vật:</strong> Ảnh chụp khuôn mặt sẽ được gắn chặt vào phần đầu của mô hình hoạt hình 3D; nhân vật vừa mang dáng dấp hoạt hình vừa có biểu cảm của người thật ngoài đời, tạo tiếng cười hào hứng cho khán giả."
            ]
          },
          {
            badge: "Kĩ năng diễn xuất",
            title: "Quy tắc bố trí sân khấu và góc di chuyển",
            points: [
              "<strong>Bố trí vị trí xuất phát:</strong> Đặt các nhân vật ở hai phía cánh gà hoặc đứng đối diện nhau; tránh đặt hai nhân vật đứng trùng khít lên nhau gây rối mắt.",
              "<strong>Quy tắc người nói - người nghe:</strong> Khi nhân vật A nói thì người điều khiển nhân vật A chạm nhẹ để miệng cử động, nhân vật B đứng yên chú ý lắng nghe; tránh để cả 2 nhân vật cùng hoa chân múa tay làm phân tán người xem.",
              "<strong>Cử chỉ đặc trưng:</strong> Tận dụng các cử chỉ riêng biệt của từng nhân vật (ví dụ: robot giơ tay quét tia laser, chim vỗ cánh bay lên không trung, chú hề nhảy lộn nhào)."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Khi bạn tự vẽ một nhân vật mới bằng công cụ 'Draw Your Own' trong Toontastic 3D, phần mềm sẽ xử lí hình vẽ 2D phẳng của bạn như thế nào?",
        options: [
          "Bắt buộc xóa đi và yêu cầu vẽ lại",
          "Tự động 'bơm phồng' hình vẽ phẳng 2D thành một mô hình khối 3D sinh động có độ dày",
          "Chuyển hình vẽ thành một tệp văn bản Word",
          "Đổi toàn bộ màu sắc sang màu xám"
        ],
        answer: 1,
        explain: "Toontastic có thuật toán độc đáo tự động biến hình phác thảo 2D viền kín thành mô hình hoạt hình 3D phồng dày chuyển động được."
      },
      {
        q: "Tính năng chụp ảnh chân dung gắn vào nhân vật hoạt hình trong Toontastic mang lại tác dụng gì?",
        options: [
          "Tự động gửi thông tin cá nhân lên mạng xã hội",
          "Biến khuôn mặt của chính người dùng hoặc bạn bè thành mặt của nhân vật trong phim, tăng tính gần gũi và hài hước",
          "Làm cho video có dung lượng nhẹ hơn",
          "Tắt tiếng micro thu âm"
        ],
        answer: 1,
        explain: "Tính năng này cho phép người làm phim đưa hình ảnh của chính mình hoặc bạn bè vào làm nhân vật chính trong bộ phim hoạt hình."
      },
      {
        q: "Nguyên tắc dàn dựng vị trí nhân vật nào sau đây là ĐÚNG để cảnh quay không bị rối mắt?",
        options: [
          "Xếp tất cả các nhân vật đứng đè lên nhau ở giữa màn hình",
          "Bố trí nhân vật ở các vị trí đối diện hợp lí, nhân vật nào nói thì cử động miệng, nhân vật nghe thì đứng yên lắng nghe",
          "Cho tất cả các nhân vật liên tục chạy nhảy loạn xạ khắp màn hình",
          "Không cho nhân vật xuất hiện trong cảnh quay"
        ],
        answer: 1,
        explain: "Cần sắp xếp nhân vật có khoảng cách rõ ràng, phân định người nói - người nghe để khán giả tập trung theo dõi diễn biến mạch truyện."
      }
    ]
  },

  8: {
    num: 8,
    title: "Thực hành sản xuất phim hoạt hình",
    badge: "Phim hoạt hình 3D",
    topic: "Chuyên đề 2: Thực hành sử dụng phần mềm làm phim hoạt hình",
    chapter: 2,
    summary: "Hiện thực hóa dự án làm phim 'Bí ẩn chuột Mori mất tích'; chuyển hóa ý tưởng thành kịch bản phân cảnh chi tiết; phối hợp nhóm điều khiển diễn hoạt, thu lời thoại truyền cảm và lắp ráp hoàn chỉnh bộ phim.",
    objectives: [
      "Xây dựng kịch bản phân cảnh chi tiết (địa điểm, nhân vật, hành động, lời thoại, nhạc nền).",
      "Phân công vai diễn và phối hợp nhóm nhịp nhàng trong quá trình ghi hình hoạt cảnh.",
      "Thực hiện trọn vẹn dự án phim điều tra trinh thám học đường 'Bí ẩn chuột Mori mất tích'.",
      "Rà soát tổng thể bộ phim để phát hiện đoạn thoại vấp, nhịp diễn sai và hoàn thiện sản phẩm."
    ],
    sections: [
      {
        heading: "1. Xây dựng kịch bản phân cảnh (Storyboard)",
        items: [
          {
            badge: "Kịch bản phân cảnh",
            title: "Tầm quan trọng và Cấu trúc kịch bản phân cảnh",
            points: [
              "<strong>Vai trò của kịch bản phân cảnh:</strong> Là kim chỉ nam giúp cả nhóm thống nhất hành động; tránh việc vừa bấm quay vừa nghĩ lời thoại gây lúng túng, nói vấp hoặc thiếu cảnh.",
              "<strong>Cấu trúc bảng phân cảnh chuẩn:</strong>",
              "• <em>Số thứ tự cảnh:</em> Cảnh 1, Cảnh 2, Cảnh 3...",
              "• <em>Bối cảnh (Location):</em> Phòng thí nghiệm trường, Sân trường, Phòng bảo vệ camera...",
              "• <em>Nhân vật (Cast):</em> Thầy giáo, Bạn Nam, Bạn Hoa, Bác bảo vệ...",
              "• <em>Hành động diễn xuất:</em> Nam chạy hớt hải vào phòng, Thầy giáo cúi nhìn lồng chuột trống rỗng...",
              "• <em>Lời thoại / Tiếng động:</em> Ghi rõ từng câu thoại của nhân vật và âm thanh phụ trợ.",
              "• <em>Nhạc nền & Chuyển cảnh:</em> Nhạc hồi hộp, nhạc vui tươi, thời điểm kết thúc cảnh."
            ]
          },
          {
            badge: "Dự án mẫu",
            title: "Mạch truyện 'Bí ẩn chuột Mori mất tích'",
            points: [
              "<strong>Cảnh 1 (Thiết lập - Setup):</strong> Giờ thực hành sinh học, Nam và Hoa phát hiện chú chuột bạch Mori nuôi thí nghiệm trong lồng bỗng dưng biến mất bí ẩn.",
              "<strong>Cảnh 2 (Xung đột - Conflict):</strong> Thầy giáo và cả nhóm họp bàn khẩn cấp, phát hiện dấu vết mẩu phô mai vương vãi trên sàn dẫn ra hành lang.",
              "<strong>Cảnh 3 (Thử thách - Challenge):</strong> Nhóm đến phòng điều hành camera an ninh trường, tua lại băng ghi hình ban đêm để tìm tung tích kẻ lạ mặt.",
              "<strong>Cảnh 4 (Cao trào - Climax):</strong> Lần theo manh mối đến góc kho thực phẩm, bắt quả tang một chú mèo hoang đang vờn chú chuột Mori.",
              "<strong>Cảnh 5 (Hồi kết - Resolution):</strong> Cả nhóm giải cứu thành công chú chuột Mori an toàn, thầy trò thở phào nhẹ nhõm trong niềm vui chung."
            ]
          }
        ]
      },
      {
        heading: "2. Ghi hình thực tế và Hoàn thiện bộ phim",
        items: [
          {
            badge: "Kĩ năng quay phim",
            title: "Phối hợp diễn xuất nhóm trên màn hình cảm ứng",
            points: [
              "<strong>Phân vai rõ ràng:</strong> Một bạn đóng vai Thầy giáo, một bạn đóng vai Nam, một bạn đóng vai Hoa. Luyện đọc lời thoại khớp kịch bản trước khi bấm nút Start.",
              "<strong>Di chuyển camera ảo:</strong> Dùng hai ngón tay kéo chụm/mở rộng màn hình để phóng to cận cảnh khuôn mặt nhân vật (Zoom In) lúc ngạc nhiên, hoặc thu nhỏ góc rộng toàn cảnh (Zoom Out).",
              "<strong>Giữ nhịp độ vừa phải:</strong> Không nói quá nhanh; diễn biến câu chuyện từ tốn để người xem kịp thấu hiểu cảm xúc và tình tiết điều tra."
            ]
          },
          {
            badge: "Kiểm tra chất lượng",
            title: "Hậu kì và Sửa chữa cảnh quay bị lỗi",
            points: [
              "<strong>Kiểm tra âm thanh:</strong> Nghe lại xem giọng nói có bị lẫn tiếng ồn bên ngoài hay không; nhạc nền có quá to lấn át lời thoại hay không.",
              "<strong>Quay lại cảnh lỗi:</strong> Nếu một cảnh bị vấp thoại hoặc nhân vật bay ra ngoài màn hình, nhấp vào biểu tượng chỉnh sửa của riêng cảnh đó để bấm quay lại mà không mất các cảnh khác.",
              "<strong>Xuất phim hoàn chỉnh:</strong> Nhập tiêu đề phim <em>'BÍ ẨN CHUỘT MORI'</em>, danh sách thành viên đoàn làm phim -> Xuất video lưu vào bộ nhớ máy."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Lợi ích lớn nhất của việc lập kịch bản phân cảnh chi tiết trước khi bấm máy quay hoạt hình trong Toontastic là gì?",
        options: [
          "Làm cho video tự động tăng độ phân giải lên 4K",
          "Giúp các thành viên trong nhóm thống nhất lời thoại, diễn xuất nhịp nhàng, tránh quay đi quay lại nhiều lần do nói vấp hoặc thiếu cảnh",
          "Không cần sử dụng micro thu âm nữa",
          "Rút ngắn thời gian xuất phim xuống còn 1 giây"
        ],
        answer: 1,
        explain: "Kịch bản phân cảnh là bản thiết kế chi tiết giúp cả nhóm nắm chắc nhiệm vụ, chuẩn bị lời thoại chu đáo trước khi bấm máy ghi hình."
      },
      {
        q: "Trong quá trình quay một cảnh phim hoạt hình Toontastic, thao tác nào cho phép bạn phóng to khung hình cận cảnh (Zoom In) vào nhân vật?",
        options: [
          "Dùng hai ngón tay mở rộng trên màn hình cảm ứng",
          "Lắc mạnh máy tính bảng",
          "Nhấn phím F1 trên bàn phím",
          "Đổi tên nhân vật"
        ],
        answer: 0,
        explain: "Thao tác cảm ứng đa điểm mở rộng 2 ngón tay (Pinch to Zoom) giúp phóng to cận cảnh camera ảo vào hành động của nhân vật."
      },
      {
        q: "Nếu sau khi quay xong 5 cảnh, bạn phát hiện chỉ có riêng Cảnh số 2 bị đọc sai lời thoại, bạn xử lí như thế nào?",
        options: [
          "Bắt buộc phải xóa toàn bộ dự án và quay lại từ Cảnh 1",
          "Chỉ cần chọn riêng Cảnh số 2 và nhấn nút quay lại cảnh đó mà không ảnh hưởng tới các cảnh khác",
          "Không thể chỉnh sửa được nữa",
          "Chuyển sang làm bài trên giấy"
        ],
        answer: 1,
        explain: "Toontastic quản lí phim theo từng hoạt cảnh độc lập; người làm phim có thể chọn quay lại bất kì cảnh nào bị lỗi mà giữ nguyên các cảnh còn lại."
      }
    ]
  },

  9: {
    num: 9,
    title: "Tạo các nguồn dữ liệu khác nhau cho phim hoạt hình",
    badge: "Biên tập Video",
    topic: "Chuyên đề 2: Thực hành sử dụng phần mềm làm phim hoạt hình",
    chapter: 2,
    summary: "Làm phong phú tư liệu phim bằng cách kết hợp Toontastic 3D với phần mềm biên tập video VideoPad; xử lí ảnh chụp thực tế, áp dụng hiệu ứng camera ban đêm Black and White, chèn phụ đề và âm thanh kịch tính.",
    objectives: [
      "Biết cách thu thập và chuẩn bị các nguồn tư liệu đa dạng (ảnh chụp, camera, âm thanh, đồ họa).",
      "Sử dụng phần mềm VideoPad để ghép nối video hoạt hình với các đoạn clip phóng sự bên ngoài.",
      "Ứng dụng hiệu ứng chuyển màu Black and White mô phỏng hình ảnh trích xuất từ camera an ninh ban đêm.",
      "Chèn phụ đề (Subtitles), tiêu đề mở đầu và chuyển cảnh mượt mà cho bộ phim."
    ],
    sections: [
      {
        heading: "1. Thu thập và Xử lí tư liệu đa phương tiện",
        items: [
          {
            badge: "Nguồn dữ liệu phong phú",
            title: "Các thành phần dữ liệu bổ trợ cho phim hoạt hình",
            points: [
              "<strong>Tư liệu thực tế:</strong> Ảnh chụp quang cảnh trường học thật, ảnh chụp lồng thí nghiệm thực tế, ảnh bảng nội quy phòng học.",
              "<strong>Dữ liệu giả lập camera giám sát:</strong> Để tăng tính chân thực cho cảnh điều tra camera trường học, nhóm tự chụp ảnh hành lang ban đêm hoặc trích xuất đoạn phim ngắn từ điện thoại.",
              "<strong>Hiệu ứng màu đen trắng (Black and White):</strong> Trong VideoPad, áp dụng hiệu ứng màu <em>Black and White</em> kết hợp với hiệu ứng đường quét (Scanlines) để biến clip chụp ban ngày thành clip camera hồng ngoại ban đêm bí ẩn.",
              "<strong>Bản quyền tư liệu:</strong> Đảm bảo tất cả hình ảnh, đoạn nhạc hiệu ứng (Sound Effects) lấy trên mạng đều là nguồn miễn phí bản quyền (Royalty-free) hoặc tự ghi âm."
            ]
          },
          {
            badge: "Ghép nối tư liệu",
            title: "Biên tập đa nguồn trên phần mềm VideoPad",
            points: [
              "<strong>Nhập tư liệu vào VideoPad:</strong> Vào <strong>Add Files</strong> để nạp: Clip hoạt hình xuất từ Toontastic, bộ ảnh chụp hiện trường, các tệp âm thanh tiếng chuông báo động, tiếng bước chân.",
              "<strong>Sắp xếp dòng thời gian (Timeline):</strong> Kéo thả các tệp xuống rãnh <em>Video Track</em> và <em>Audio Track</em> theo đúng trình tự câu chuyện.",
              "<strong>Thời lượng hiển thị ảnh tĩnh:</strong> Khi chèn ảnh chụp tư liệu vào giữa phim, cài đặt thời lượng dừng của ảnh khoảng 3 đến 5 giây để khán giả kịp quan sát chi tiết chứng cứ."
            ]
          }
        ]
      },
      {
        heading: "2. Chèn phụ đề, Tiêu đề mở đầu và Hiệu ứng chuyển cảnh",
        items: [
          {
            badge: "Phụ đề & Tiêu đề",
            title: "Thêm Text tiêu đề và Phụ đề thuyết minh",
            points: [
              "<strong>Tiêu đề mở đầu (Title Card):</strong> Tạo trang bìa giới thiệu phim: <em>'CHUYÊN ÁN: BÍ ẨN CHUỘT MORI - TẬP 1'</em> với phông chữ ấn tượng trên nền đen huyền bí.",
              "<strong>Phụ đề (Subtitles):</strong> Sử dụng công cụ chèn chữ của VideoPad để thêm phụ đề lời thoại bên dưới màn hình, giúp người xem dễ theo dõi nội dung ngay cả khi xem không bật loa.",
              "<strong>Phối hợp nhạc nền & Tiếng động:</strong> Đặt tiếng nhạc nền hồi hộp ở rãnh Audio 1; chèn tiếng 'Meo meo' và tiếng chuột kêu 'Chít chít' ở rãnh Audio 2 tại đúng thời điểm phát hiện thủ phạm."
            ]
          },
          {
            badge: "Chuyển cảnh Transition",
            title: "Áp dụng hiệu ứng chuyển tiếp giữa các phân đoạn",
            points: [
              "<strong>Hiệu ứng chuyển cảnh (Transitions):</strong> Nhấp vào biểu tượng hình dấu thập giữa hai đoạn clip trên dòng thời gian để chọn hiệu ứng: <code>Fade</code> (mờ dần), <code>Dissolve</code> (hòa tan), <code>Wipe</code> (gạt hình).",
              "<strong>Thời lượng chuyển cảnh:</strong> Đặt thời gian chuyển cảnh ngắn gọn (khoảng 0.5 đến 1 giây) để mạch phim diễn ra tự nhiên, không bị gián đoạn cảm xúc hồi hộp của khán giả."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Để biến một bức ảnh chụp hành lang trường học thành hình ảnh trích xuất từ camera an ninh ban đêm trong VideoPad, bạn áp dụng hiệu ứng hình ảnh nào?",
        options: [
          "Hiệu ứng Cartoon (Hoạt hình hóa)",
          "Hiệu ứng Black and White (Đen trắng)",
          "Hiệu ứng Neon Glow (Phát sáng)",
          "Hiệu ứng Fisheye (Mắt cá)"
        ],
        answer: 1,
        explain: "Hiệu ứng Black and White chuyển đổi hình ảnh sang gam màu đơn sắc đen trắng, rất phù hợp để mô phỏng hình ảnh quay từ camera hồng ngoại ban đêm."
      },
      {
        q: "Khi chèn một bức ảnh chụp tĩnh vào dòng thời gian của phần mềm biên tập video, thời lượng hiển thị hợp lí cho bức ảnh để khán giả kịp đọc thông tin là khoảng bao lâu?",
        options: [
          "0.1 giây",
          "3 đến 5 giây",
          "60 giây",
          "10 phút"
        ],
        answer: 1,
        explain: "Khoảng thời gian từ 3 đến 5 giây là thời lượng vàng vừa đủ để mắt người xem tiếp nhận trọn vẹn thông tin trên một bức ảnh tĩnh mà không gây sốt ruột."
      },
      {
        q: "Lợi ích của việc kết hợp Toontastic 3D với một phần mềm biên tập video chuyên dụng như VideoPad là gì?",
        options: [
          "Làm cho video không thể xem được trên điện thoại",
          "Cho phép ghép nối thêm các ảnh chụp thực tế, video ngoại cảnh, chèn phụ đề chữ, nhạc nền phụ trợ và hiệu ứng chuyển cảnh chuyên nghiệp",
          "Bắt buộc xóa bỏ các nhân vật hoạt hình cũ",
          "Tự động tăng giá vé vào rạp chiếu phim"
        ],
        answer: 1,
        explain: "Sự kết hợp đa phần mềm giúp mở rộng nguồn tư liệu, bổ sung ảnh chụp thực tế, phụ đề và hiệu ứng âm thanh phong phú mà phần mềm làm phim đơn lẻ không có."
      }
    ]
  },

  10: {
    num: 10,
    title: "Hoàn thiện phim hoạt hình từ các nguồn dữ liệu khác nhau",
    badge: "Công chiếu Phim",
    topic: "Chuyên đề 2: Thực hành sử dụng phần mềm làm phim hoạt hình",
    chapter: 2,
    summary: "Tổng duyệt chất lượng tác phẩm phim hoạt hình hoàn chỉnh; xuất bản tệp video độ phân giải cao; tổ chức buổi công chiếu báo cáo trước lớp và đánh giá sản phẩm theo bộ tiêu chí chuyên môn.",
    objectives: [
      "Thực hiện quy trình tổng duyệt chất lượng phim (âm thanh, hình ảnh, nhịp độ diễn xuất, nguồn gốc tư liệu).",
      "Xuất bản bộ phim hoàn chỉnh ra tệp video chuẩn định dạng MP4 chất lượng cao.",
      "Xây dựng bài thuyết trình ngắn giới thiệu chủ đề, thông điệp và quá trình sản xuất phim.",
      "Tổ chức công chiếu tại lớp học và tiếp nhận phản hồi đánh giá theo rubric tiêu chuẩn."
    ],
    sections: [
      {
        heading: "1. Tổng duyệt kĩ thuật và Xuất bản video hoàn thiện",
        items: [
          {
            badge: "Tổng duyệt kĩ thuật",
            title: "Checklist kiểm tra chất lượng phim trước khi xuất bản",
            points: [
              "<strong>1. Tính mạch lạc của câu chuyện:</strong> Mạch truyện có giải quyết trọn vẹn nút thắt bí ẩn ban đầu không? Lời thoại của các nhân vật có tự nhiên, dễ hiểu không?",
              "<strong>2. Cân đối âm lượng (Audio Mixing):</strong> Giọng lồng tiếng thoại nhân vật phải to rõ, trong trẻo; nhạc nền chỉ mở mức 20-30% để không lấn át lời thoại.",
              "<strong>3. Tỉ lệ khung hình & Độ nét:</strong> Toàn bộ các cảnh quay và ảnh chèn thêm phải có cùng tỉ lệ màn ảnh ngang 16:9, không bị viền đen dày hai bên.",
              "<strong>4. Thời lượng phim:</strong> Tổng thời lượng toàn bộ tác phẩm dao động từ 2 đến 4 phút, vừa vặn duy trì sự tập trung chú ý của khán giả trong buổi chiếu."
            ]
          },
          {
            badge: "Xuất bản Video",
            title: "Quy trình xuất tệp video chuẩn phát sóng",
            points: [
              "<strong>Thao tác xuất file trong VideoPad:</strong> Chọn <strong>Export Video</strong> -> Chọn <em>Video File</em> -> Chọn định dạng <code>.MP4</code>.",
              "<strong>Độ phân giải:</strong> Chọn <code>Full HD 1080p</code> (1920x1080) và tốc độ khung hình <code>30 fps</code> để hình ảnh chuyển động mượt mà khi chiếu lên máy chiếu lớp học.",
              "<strong>Lưu trữ an toàn:</strong> Đặt tên tệp chuẩn hóa (ví dụ: <code>PhimHoatHinh_Nhom1_BiAnChuotMori.mp4</code>) và lưu trữ trên Google Drive hoặc USB dự phòng."
            ]
          }
        ]
      },
      {
        heading: "2. Tổ chức công chiếu và Đánh giá sản phẩm",
        items: [
          {
            badge: "Kế hoạch công chiếu",
            title: "Tổ chức buổi ra mắt phim hoạt hình tại lớp học",
            points: [
              "<strong>Khai mạc & Giới thiệu (1 phút):</strong> Đại diện nhóm giới thiệu tên phim, thể loại, thông điệp giáo dục và phân công nhiệm vụ của từng thành viên trong đoàn làm phim.",
              "<strong>Trình chiếu tác phẩm (3 phút):</strong> Phát video cho cả lớp thưởng thức trên màn chiếu lớn, âm thanh khuếch đại rõ ràng.",
              "<strong>Hỏi đáp & Lắng nghe phản hồi (2 phút):</strong> Trả lời các câu hỏi thắc mắc của thầy cô và các nhóm bạn về cách dựng cảnh, cách tạo nhân vật hoặc kĩ thuật lồng tiếng."
            ]
          },
          {
            badge: "Tiêu chí đánh giá",
            title: "Bộ tiêu chí chấm điểm sản phẩm phim hoạt hình",
            points: [
              "<strong>Tiêu chí 1 (Nội dung câu chuyện - 30%):</strong> Cốt truyện sáng tạo, lôi cuốn, thông điệp giáo dục ý nghĩa.",
              "<strong>Tiêu chí 2 (Kĩ thuật diễn xuất & Bối cảnh - 25%):</strong> Nhân vật chuyển động mượt mà, biểu cảm sinh động, bối cảnh phù hợp.",
              "<strong>Tiêu chí 3 (Âm thanh & Lồng tiếng - 25%):</strong> Giọng đọc truyền cảm, khớp khẩu hình, nhạc nền đẩy cao cảm xúc.",
              "<strong>Tiêu chí 4 (Kĩ năng kết hợp đa phần mềm - 20%):</strong> Vận dụng thành thạo Toontastic, VideoPad, xử lí ảnh và phụ đề thẩm mỹ."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Khi tổng duyệt âm thanh của bộ phim trước khi xuất bản, tỉ lệ âm lượng nào sau đây là chuẩn mực nhất?",
        options: [
          "Bật nhạc nền thật to 100% để át hết tiếng nhân vật",
          "Giọng lồng tiếng của nhân vật to rõ ràng (100%), nhạc nền chỉnh vừa phải (20-30%) để tạo cảm xúc mà không lấn át lời thoại",
          "Tắt hoàn toàn mọi âm thanh trong phim",
          "Chỉ bật tiếng nhạc, không cho nhân vật nói"
        ],
        answer: 1,
        explain: "Quy chuẩn phối âm phim luôn đặt giọng thoại của nhân vật là âm thanh chính (Foreground), còn nhạc nền là âm thanh phụ (Background) mức nhỏ 20-30%."
      },
      {
        q: "Định dạng tệp video nào sau đây là phổ biến và tương thích tốt nhất để trình chiếu trên máy chiếu và mọi thiết bị điện tử hiện nay?",
        options: [
          ".MP4 (mã hóa H.264)",
          ".TXT",
          ".BMP",
          ".WAV"
        ],
        answer: 0,
        explain: "Tệp video định dạng .MP4 nén tốt, chất lượng hình ảnh cao và tương thích với hầu hết tất cả máy chiếu, tivi, điện thoại và máy tính."
      },
      {
        q: "Trong buổi công chiếu ra mắt phim tại lớp học, đại diện nhóm làm phim nên mở đầu bài thuyết trình bằng nội dung gì?",
        options: [
          "Đọc toàn bộ mã nguồn của phần mềm",
          "Giới thiệu ngắn gọn tên phim, chủ đề, thông điệp cốt lõi và các thành viên tham gia sản xuất",
          "Yêu cầu mọi người không được xem phim",
          "Bật phim lên ngay mà không nói lời nào"
        ],
        answer: 1,
        explain: "Một lời giới thiệu mở đầu trang trọng, ngắn gọn về tên phim, thông điệp và ê-kíp sản xuất giúp khán giả chuẩn bị tâm thế hào hứng đón nhận bộ phim."
      }
    ]
  },

  11: {
    num: 11,
    title: "Thao tác với các lớp ảnh (GIMP)",
    badge: "Biên tập ảnh GIMP",
    topic: "Chuyên đề 3: Thực hành sử dụng phần mềm chỉnh sửa ảnh",
    chapter: 3,
    summary: "Làm quen với phần mềm đồ họa chỉnh sửa ảnh GIMP; quản lí hệ thống lớp ảnh (Layers), thứ tự hiển thị, độ trong suốt Opacity và làm chủ kĩ thuật Mặt nạ lớp (Layer Mask) để tách vật thể khỏi nền không phá hủy dữ liệu gốc.",
    objectives: [
      "Hiểu rõ vai trò của các lớp ảnh (Layers) trong việc tạo dựng khung hình cho ảnh động GIF.",
      "Sử dụng lệnh Open as Layers để mở chuỗi ảnh vào cùng một tệp làm việc.",
      "Nắm vững nguyên lí hoạt động của Mặt nạ lớp (Layer Mask: Trắng hiện, Đen che, Xám mờ).",
      "Sử dụng công cụ chọn vùng (Free Select) kết hợp Layer Mask để tách xe ô tô khỏi nền hoàn hảo."
    ],
    sections: [
      {
        heading: "1. Quản lí hệ thống lớp ảnh (Layers) trong GIMP",
        items: [
          {
            badge: "Khái niệm Lớp ảnh",
            title: "Bản chất của các lớp ảnh (Layers) trong GIMP",
            points: [
              "<strong>Lớp ảnh là gì:</strong> Hãy tưởng tượng các lớp ảnh như những tấm phim nhựa trong suốt xếp chồng lên nhau. Vùng nào có hình vẽ sẽ che khuất lớp bên dưới; vùng trong suốt sẽ để lộ hình ảnh của lớp đáy.",
              "<strong>Mở nhiều ảnh thành các lớp:</strong> Vào <strong>File -> Open as Layers... (Ctrl + Alt + O)</strong> -> Chọn cùng lúc nhiều tệp ảnh; mỗi tệp sẽ tự động trở thành một lớp độc lập trong cùng một dự án.",
              "<strong>Hộp thoại Layers:</strong> Nằm ở cột bên phải, hiển thị danh sách các lớp từ trên xuống dưới theo thứ tự hiển thị thực tế."
            ]
          },
          {
            badge: "Thao tác trên Layer",
            title: "Các lệnh điều khiển lớp thông dụng",
            points: [
              "<strong>Biểu tượng Con mắt:</strong> Nhấp vào con mắt cạnh tên lớp để Bật/Tắt chế độ hiển thị của lớp đó (rất tiện khi muốn quan sát riêng từng khung hình).",
              "<strong>Độ mờ đục (Opacity):</strong> Kéo thanh trượt Opacity từ 100% xuống thấp hơn để làm lớp ảnh trở nên trong suốt mờ ảo.",
              "<strong>Thứ tự lớp:</strong> Dùng nút mũi tên Lên/Xuống ở đáy hộp thoại Layers để thay đổi thứ tự lớp; lớp ở trên cùng sẽ hiển thị đè lên các lớp dưới.",
              "<strong>Nhân bản & Xóa lớp:</strong> Nút <em>Duplicate Layer</em> nhân đôi lớp đang chọn; nút <em>Delete Layer</em> xóa bỏ lớp."
            ]
          }
        ]
      },
      {
        heading: "2. Kĩ thuật Mặt nạ lớp (Layer Mask) tách vật thể đỉnh cao",
        items: [
          {
            badge: "Nguyên lí Layer Mask",
            title: "Quy tắc màu sắc của Mặt nạ lớp (Layer Mask)",
            points: [
              "<strong>Tại sao dùng Layer Mask thay vì xóa trực tiếp:</strong> Dùng cục tẩy Eraser xóa nền sẽ làm mất vĩnh viễn điểm ảnh gốc (phá hủy dữ liệu). Mặt nạ lớp chỉ tạm thời che giấu vùng ảnh, có thể tô lại để lấy lại bất kì lúc nào mà không sợ hỏng ảnh.",
              "<strong>Thêm mặt nạ:</strong> Chuột phải vào lớp ảnh -> Chọn <strong>Add Layer Mask...</strong> -> Chọn <em>White (full opacity)</em>.",
              "<strong>Quy tắc 3 sắc thái trên mặt nạ:</strong>",
              "• <strong>MÀU TRẮNG:</strong> Hiển thị đầy đủ 100% điểm ảnh của lớp.",
              "• <strong>MÀU ĐEN:</strong> Che giấu hoàn toàn (biến vùng ảnh đó thành trong suốt).",
              "• <strong>MÀU XÁM:</strong> Hiển thị nửa mờ nửa rõ tùy theo độ sáng của màu xám."
            ]
          },
          {
            badge: "Tách nền vật thể",
            title: "Quy trình tách chiếc xe ô tô khỏi nền",
            points: [
              "<strong>Bước 1:</strong> Dùng công cụ chọn tự do <strong>Free Select Tool (phím F)</strong> khoanh vùng tỉ mỉ xung quanh đường viền chiếc xe ô tô.",
              "<strong>Bước 2:</strong> Đảo ngược vùng chọn bằng lệnh <strong>Select -> Invert (Ctrl + I)</strong> để vùng chọn bao quanh toàn bộ phần phông nền bên ngoài xe.",
              "<strong>Bước 3:</strong> Nhấp chọn vào ô mặt nạ (Layer Mask) -> Dùng cọ vẽ hoặc thùng sơn tô <strong>MÀU ĐEN</strong> vào vùng chọn.",
              "<strong>Kết quả:</strong> Toàn bộ phông nền biến mất tức thì, chỉ còn lại chiếc xe ô tô nổi bật trên nền caro trong suốt, sẵn sàng đưa vào làm hoạt cảnh chuyển động."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Lệnh nào trong menu File của GIMP cho phép mở cùng lúc nhiều tệp ảnh khác nhau thành các lớp (Layers) riêng biệt trong cùng một trang làm việc?",
        options: [
          "File -> Open",
          "File -> Open as Layers (Ctrl + Alt + O)",
          "File -> Import",
          "File -> New"
        ],
        answer: 1,
        explain: "Lệnh Open as Layers giúp nạp trực tiếp danh sách nhiều tệp ảnh vào một dự án, mỗi ảnh đóng vai trò là một Layer độc lập."
      },
      {
        q: "Quy tắc màu sắc hiển thị trên Mặt nạ lớp (Layer Mask) trong GIMP được định nghĩa như thế nào?",
        options: [
          "Màu đỏ là hiện, màu xanh là che",
          "Màu Trắng là hiển thị đầy đủ, màu Đen là che giấu (trong suốt), màu Xám là hiển thị mờ ảo",
          "Màu vàng là làm mờ, màu tím là xóa vĩnh viễn",
          "Không có quy tắc nào"
        ],
        answer: 1,
        explain: "Quy tắc kinh điển của Layer Mask: White reveals (Trắng hiện), Black conceals (Đen che), Gray reveals partially (Xám mờ)."
      },
      {
        q: "Ưu điểm vượt trội của việc tách nền vật thể bằng Layer Mask so với việc dùng cục tẩy (Eraser) xóa trực tiếp là gì?",
        options: [
          "Layer Mask làm cho tệp ảnh có dung lượng bằng 0",
          "Layer Mask không phá hủy điểm ảnh gốc; nếu lỡ che nhầm chi tiết thì chỉ cần dùng cọ trắng tô lại là phục hồi nguyên vẹn",
          "Layer Mask tự động vẽ thêm bánh xe cho ô tô",
          "Layer Mask bắt buộc phải trả tiền bản quyền"
        ],
        answer: 1,
        explain: "Kĩ thuật Non-destructive editing (chỉnh sửa không phá hủy) với Layer Mask cho phép phục hồi vùng ảnh bị che bất kì lúc nào chỉ bằng cách đổi màu cọ sang màu trắng."
      }
    ]
  },

  12: {
    num: 12,
    title: "Tạo ảnh động (GIMP)",
    badge: "Biên tập ảnh GIMP",
    topic: "Chuyên đề 3: Thực hành sử dụng phần mềm chỉnh sửa ảnh",
    chapter: 3,
    summary: "Hiểu rõ nguyên lí thị giác lưu ảnh tạo nên ảnh động; đặc điểm bảng màu 256 màu của định dạng GIF; thực hành quy trình 6 bước biến chuỗi ảnh tĩnh thành ảnh động GIF sống động bằng công cụ Animation Playback và Export As.",
    objectives: [
      "Nắm vững nguyên lí tạo ảnh động từ chuỗi khung hình (Frames) thay đổi liên tục.",
      "Hiểu rõ đặc tính giới hạn bảng màu (tối đa 256 màu) của tệp ảnh định dạng GIF.",
      "Sử dụng công cụ Filters -> Animation -> Playback để xem trước tốc độ chuyển động.",
      "Xuất bản tệp ảnh động .GIF hoàn chỉnh với tùy chọn 'As animation' và chế độ lặp (Loop)."
    ],
    sections: [
      {
        heading: "1. Nguyên lí tạo ảnh động & Đặc tính định dạng GIF",
        items: [
          {
            badge: "Nguyên lí thị giác",
            title: "Hiện tượng lưu ảnh trên võng mạc và Khung hình (Frame)",
            points: [
              "<strong>Nguyên lí tạo chuyển động:</strong> Mắt người có hiện tượng lưu ảnh trong khoảng 1/10 giây. Khi các hình ảnh tĩnh có sự thay đổi nhỏ được trình chiếu liên tục với tốc độ cao, não bộ sẽ kết nối chúng lại thành một chuyển động liền mạch duy nhất.",
              "<strong>Khung hình (Frame):</strong> Trong GIMP, mỗi một Layer (lớp ảnh) sẽ đóng vai trò tương ứng là một khung hình trong chuỗi ảnh động.",
              "<strong>Chiều chuyển động:</strong> Mặc định GIMP sẽ đọc và hiển thị các khung hình theo thứ tự từ lớp dưới đáy (Bottom layer) chạy dần lên lớp trên cùng (Top layer)."
            ]
          },
          {
            badge: "Đặc tính GIF",
            title: "Ưu và nhược điểm của định dạng ảnh GIF",
            points: [
              "<strong>Định dạng GIF (Graphics Interchange Format):</strong> Là định dạng tệp hình ảnh nén không mất dữ liệu, hỗ trợ ảnh động và vùng trong suốt đơn giản.",
              "<strong>Giới hạn bảng màu 256 màu:</strong> Bảng màu của GIF chỉ chứa tối đa 256 màu (8-bit palette). Do đó, GIF cực kì phù hợp cho hình vẽ đồ họa, biểu tượng logo, sơ đồ chuyển động hoặc ảnh hoạt hình ít màu.",
              "<strong>Hạn chế:</strong> Không thích hợp cho ảnh chụp phong cảnh thực tế có hàng triệu sắc thái màu phức tạp (sẽ bị hiện tượng dải màu bệt hoặc chấm hạt hạt)."
            ]
          }
        ]
      },
      {
        heading: "2. Quy trình 6 bước tạo ảnh động GIF từ ảnh tĩnh",
        items: [
          {
            badge: "Quy trình tạo GIF",
            title: "6 Bước thực hành tạo tệp GIF trong GIMP",
            points: [
              "<strong>Bước 1 (Chuẩn bị ảnh):</strong> Chuẩn bị chuỗi các bức ảnh tĩnh có cùng kích thước, cùng góc máy, thể hiện từng bước dịch chuyển nhỏ của nhân vật/xe cộ.",
              "<strong>Bước 2 (Nạp các lớp):</strong> Vào <strong>File -> Open as Layers...</strong> để đưa các ảnh vào thành từng lớp riêng biệt.",
              "<strong>Bước 3 (Sắp xếp thứ tự):</strong> Kéo thả các lớp trong hộp thoại Layers sao cho khung hình đầu tiên nằm ở dưới cùng và khung hình cuối cùng nằm ở trên cùng.",
              "<strong>Bước 4 (Cài đặt thời gian trễ):</strong> Đổi tên từng lớp kèm theo thông số thời gian trễ theo cú pháp của GIMP, ví dụ: <code>Khung1 (100ms)</code>.",
              "<strong>Bước 5 (Xem trước chuyển động):</strong> Vào menu <strong>Filters -> Animation -> Playback...</strong> -> Bấm nút Play để xem trước nhịp độ chuyển động và kiểm tra các lỗi giật hình.",
              "<strong>Bước 6 (Xuất bản tệp GIF):</strong> Vào <strong>File -> Export As...</strong> -> Đổi đuôi tệp thành <code>.gif</code> -> Nhấn Export -> Bảng tùy chọn xuất hiện, bắt buộc tích chọn <strong>As animation</strong> và <strong>Loop forever</strong> -> Nhấn Export hoàn tất."
            ]
          },
          {
            badge: "Lưu ý xuất bản",
            title: "Cấu hình hộp thoại Export Image as GIF",
            points: [
              "<strong>As animation:</strong> Nếu quên không tích chọn ô này, GIMP sẽ nén tất cả các lớp thành một bức ảnh tĩnh đơn lẻ duy nhất và mất hoàn toàn tính năng chuyển động.",
              "<strong>Loop forever:</strong> Giúp bức ảnh động tự động phát lặp đi lặp lại vô tận khi nhúng lên trang web hoặc gửi qua tin nhắn.",
              "<strong>Frame disposal:</strong> Chọn <em>One frame per layer (replace)</em> để khung hình mới thay thế hoàn toàn khung hình cũ, tránh hiện tượng bóng ma đè hình."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Định dạng tệp ảnh động GIF hỗ trợ tối đa bao nhiêu màu sắc trong bảng màu của nó?",
        options: [
          "16 màu",
          "256 màu (8-bit)",
          "16.7 triệu màu",
          "Không giới hạn số màu"
        ],
        answer: 1,
        explain: "Định dạng GIF bị giới hạn kĩ thuật ở bảng màu tối đa 256 màu, do đó thích hợp nhất với hình đồ họa đơn giản, sơ đồ hoặc hoạt hình."
      },
      {
        q: "Lệnh nào trong GIMP cho phép bạn mở một cửa sổ nhỏ để chạy thử (Play) xem trước chuyển động và tốc độ của ảnh động trước khi xuất bản?",
        options: [
          "Filters -> Animation -> Playback",
          "File -> Print Preview",
          "Image -> Scale Image",
          "Tools -> Zoom"
        ],
        answer: 0,
        explain: "Filters -> Animation -> Playback là công cụ xem trước ảnh động trong GIMP, có nút Play, Pause, Step và thanh trượt tốc độ."
      },
      {
        q: "Tùy chọn bắt buộc nào trong hộp thoại Export Image as GIF phải được đánh dấu kiểm để tệp xuất ra là ảnh động thay vì ảnh tĩnh?",
        options: [
          "Interlace",
          "As animation",
          "GIF comment",
          "Save color profile"
        ],
        answer: 1,
        explain: "Tùy chọn 'As animation' báo cho GIMP biết phải xuất các Layer thành các khung hình chuyển động liên tiếp của tệp GIF."
      }
    ]
  },

  13: {
    num: 13,
    title: "Điều chỉnh thời gian trễ và tạo chữ động",
    badge: "Biên tập ảnh GIMP",
    topic: "Chuyên đề 3: Thực hành sử dụng phần mềm chỉnh sửa ảnh",
    chapter: 3,
    summary: "Làm chủ kĩ thuật điều khiển nhịp độ thời gian trễ (Delay) tính bằng mili giây; tạo thông điệp chữ chạy (Marquee text) nghệ thuật và ứng dụng lệnh Merge Down để phối hợp chữ vào ảnh động.",
    objectives: [
      "Hiểu rõ đơn vị đo thời gian trễ (mili giây - ms) và tác động của nó tới tốc độ ảnh động.",
      "Biết 2 cách điều chỉnh thời gian trễ: cài đặt riêng từng lớp qua tên lớp và cài đặt đồng loạt khi xuất.",
      "Sử dụng công cụ Text Tool tạo chuỗi lớp chữ chạy ngang qua màn hình.",
      "Ứng dụng lệnh Layer -> Merge Down để gắn kết chữ vào khung hình nền."
    ],
    sections: [
      {
        heading: "1. Kĩ thuật điều khiển thời gian trễ (Frame Delay)",
        items: [
          {
            badge: "Thời gian trễ",
            title: "Khái niệm và Quy đổi thời gian trễ (Delay)",
            points: [
              "<strong>Đơn vị tính:</strong> Thời gian trễ giữa các khung hình trong ảnh động được tính bằng <strong>mili giây (ms)</strong>. Quy đổi: <code>1000 ms = 1 giây</code>; <code>100 ms = 0.1 giây</code>.",
              "<strong>Tác động đến tốc độ:</strong> Số mili giây càng LỚN thì khung hình dừng lại càng LÂU (chuyển động chậm); số mili giây càng NHỎ thì khung hình lướt qua càng NHANH (chuyển động nhanh).",
              "<strong>Chuẩn mượt mà:</strong> Đối với hoạt hình chuyển động xe chạy, người đi, độ trễ thường đặt từ 80ms đến 120ms; đối với khung hình chữ thông điệp cần người xem đọc kĩ thì đặt từ 1000ms đến 2000ms (1 - 2 giây)."
            ]
          },
          {
            badge: "2 Phương pháp cài đặt",
            title: "Hai cách thiết lập thời gian trễ trong GIMP",
            points: [
              "<strong>Cách 1 (Cài đặt riêng biệt từng khung):</strong> Nháy đúp vào tên từng lớp trong hộp thoại Layers và gõ thời gian mong muốn vào trong cặp dấu ngoặc đơn ở cuối tên lớp. Ví dụ: <code>Khung_Chinh (1500ms)</code>, <code>Khung_Phu (100ms)</code>. Rất thích hợp khi muốn dừng lâu ở khung thông điệp chính.",
              "<strong>Cách 2 (Cài đặt đồng loạt khi xuất):</strong> Trong hộp thoại Export GIF, gõ số mili giây vào ô <em>'Delay between frames where unspecified'</em> (ví dụ: 100 milliseconds) và tích chọn <em>'Use delay entered above for all frames'</em> để áp dụng đồng đều cho toàn bài."
            ]
          }
        ]
      },
      {
        heading: "2. Quy trình thiết kế chữ chạy nghệ thuật (Animated Text)",
        items: [
          {
            badge: "Chữ chạy",
            title: "Thiết kế chữ 'Chúc Mừng Năm Mới' lướt ngang màn hình",
            points: [
              "<strong>Bước 1 (Tạo nền):</strong> Tạo ảnh mới có kích thước dải băng banner (ví dụ: 800 x 200 px), tô màu nền trang nhã.",
              "<strong>Bước 2 (Viết chữ):</strong> Dùng công cụ <strong>Text Tool (phím T)</strong> gõ dòng chữ <em>'CHÚC MỪNG NĂM MỚI 2026'</em>, chọn phông chữ in đậm to rõ, màu đỏ hoặc vàng kim rực rỡ.",
              "<strong>Bước 3 (Nhân bản & Dịch chuyển vị trí):</strong> Nhân bản lớp chữ thành nhiều lớp. Ở mỗi lớp, dùng công cụ Move (phím M) dịch chuyển vị trí dòng chữ dịch sang trái một khoảng đều đặn (mô phỏng chữ đang lướt từ phải qua trái).",
              "<strong>Bước 4 (Gộp vào nền - Merge Down):</strong> Nếu có ảnh nền phức tạp, chọn lớp chữ ở trên rồi vào <code>Layer -> Merge Down</code> để gộp chữ dính chặt vào lớp nền tương ứng của khung hình đó.",
              "<strong>Bước 5 (Kiểm tra & Xuất bản):</strong> Dùng Animation Playback để kiểm tra tốc độ chạy chữ; chữ phải chạy với tốc độ vừa phải để mắt người kịp đọc hết nội dung thông điệp."
            ]
          },
          {
            badge: "Hiệu ứng chữ xuất hiện",
            title: "Biến thể chữ xuất hiện từng từ (Typewriter effect)",
            points: [
              "<strong>Kĩ thuật gõ máy chữ:</strong> Khung 1 chứa chữ 'CHÚC' -> Khung 2 chứa chữ 'CHÚC MỪNG' -> Khung 3 chứa chữ 'CHÚC MỪNG NĂM' -> Khung 4 chứa 'CHÚC MỪNG NĂM MỚI'.",
              "<strong>Tạo điểm nhấn:</strong> Đặt độ trễ của khung cuối cùng dài hơn (2000ms) để thông điệp trọn vẹn dừng lại vài giây trước khi vòng lặp quay trở lại từ đầu."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Trong GIMP, 1 giây hiển thị của một khung hình ảnh động tương ứng với bao nhiêu mili giây (ms)?",
        options: [
          "10 ms",
          "100 ms",
          "1000 ms",
          "10000 ms"
        ],
        answer: 2,
        explain: "Quy đổi chuẩn thời gian quốc tế: 1 giây (second) bằng đúng 1000 mili giây (milliseconds - ms)."
      },
      {
        q: "Để quy định riêng cho một lớp ảnh có tên 'Lop_ThongDiep' sẽ dừng lại hiển thị trong đúng 2 giây trước khi chuyển sang khung khác, bạn đổi tên lớp đó như thế nào?",
        options: [
          "Lop_ThongDiep (2s)",
          "Lop_ThongDiep (2000ms)",
          "Lop_ThongDiep [2000]",
          "Lop_ThongDiep = 2000"
        ],
        answer: 1,
        explain: "Quy tắc đặt tên nhận diện thời gian trễ của GIMP là đặt số mili giây kèm chữ 'ms' bên trong cặp dấu ngoặc đơn, ví dụ: (2000ms)."
      },
      {
        q: "Lệnh nào trong menu Layer của GIMP dùng để gộp lớp chữ đang chọn dính liền xuống lớp ảnh nằm ngay phía dưới nó?",
        options: [
          "Layer -> Delete Layer",
          "Layer -> Merge Down",
          "Layer -> New Layer",
          "Layer -> Scale Layer"
        ],
        answer: 1,
        explain: "Lệnh Merge Down hòa trộn lớp hiện tại gắn chặt vào lớp nằm liền kề bên dưới nó thành một lớp duy nhất."
      }
    ]
  },

  14: {
    num: 14,
    title: "Tạo hiệu ứng cho ảnh động",
    badge: "Biên tập ảnh GIMP",
    topic: "Chuyên đề 3: Thực hành sử dụng phần mềm chỉnh sửa ảnh",
    chapter: 3,
    summary: "Khám phá kho hiệu ứng chuyển động có sẵn trong Filters -> Animation (Blend, Burn-In, Rippling, Spinning Globe, Waves); thực hành kĩ thuật tạo hiệu ứng tùy chỉnh: mô phỏng hạt mưa rơi bằng Noise và Linear Motion Blur.",
    objectives: [
      "Nhận biết và ứng dụng các bộ lọc hoạt hình có sẵn (Blend, Burn-In, Waves, Spinning Globe).",
      "Nắm vững quy trình tự tạo hiệu ứng thời tiết tùy chỉnh bằng các bộ lọc đồ họa.",
      "Sử dụng bộ lọc Noise và Linear Motion Blur (Length=90, Angle=-40) để tạo vệt mưa rơi chân thực.",
      "Tối ưu hóa số lượng khung hình để tệp ảnh động đạt chất lượng cao mà dung lượng gọn nhẹ."
    ],
    sections: [
      {
        heading: "1. Các hiệu ứng hoạt hình có sẵn trong Menu Animation",
        items: [
          {
            badge: "Bộ lọc Animation",
            title: "Khám phá 5 hiệu ứng tích hợp sẵn trong GIMP",
            points: [
              "<strong>1. Blend:</strong> Tự động chèn thêm các khung hình trung gian hòa tan mờ dần giữa các lớp ảnh, tạo chuyển tiếp mượt mà như hiệu ứng hòa tan cross-dissolve trong điện ảnh.",
              "<strong>2. Burn-In:</strong> Tạo hiệu ứng chữ hoặc logo phát sáng rực lửa như được đốt cháy khắc dần lên bề mặt nền đen.",
              "<strong>3. Rippling:</strong> Tạo hiệu ứng mặt nước gợn sóng lăn tăn biến dạng hình ảnh.",
              "<strong>4. Spinning Globe:</strong> Cuộn bức ảnh phẳng 2D thành một quả cầu 3D xoay tròn liên tục trong không gian (rất thích hợp vẽ quả địa cầu).",
              "<strong>5. Waves:</strong> Tạo sóng lượn dập dềnh cho lá cờ hoặc mặt biển nhấp nhô."
            ]
          },
          {
            badge: "Lưu ý sử dụng",
            title: "Nguyên tắc thử nghiệm trên bản sao dự phòng",
            points: [
              "<strong>Sinh ra nhiều lớp tự động:</strong> Khi bấm chạy một bộ lọc Animation, GIMP sẽ tự động tính toán và nhân bản ra một tệp ảnh mới chứa hàng chục lớp trung gian.",
              "<strong>Luôn giữ tệp gốc:</strong> Hãy lưu tệp thiết kế gốc <code>.xcf</code> trước khi áp dụng hiệu ứng; nếu không ưng ý có thể đóng cửa sổ hiệu ứng và làm lại với các thông số khác.",
              "<strong>Tránh lạm dụng:</strong> Hiệu ứng phải phục vụ cho câu chuyện và thông điệp; không chèn quá nhiều hiệu ứng hỗn loạn gây nhức mắt người xem."
            ]
          }
        ]
      },
      {
        heading: "2. Quy trình tự tạo hiệu ứng tùy chỉnh: Mô phỏng Mưa rơi",
        items: [
          {
            badge: "Tự tạo hiệu ứng Mưa",
            title: "5 Bước tạo vệt mưa rơi trên đường phố trong GIMP",
            points: [
              "<strong>Bước 1 (Mở ảnh & Tạo lớp mưa):</strong> Mở bức ảnh xe ô tô chạy trên phố -> Thêm một lớp mới đặt tên là <code>HieuUngMua_1</code>, tô màu đen đặc cho toàn lớp.",
              "<strong>Bước 2 (Tạo hạt nhiễu trắng):</strong> Vào <strong>Filters -> Noise -> Hurl (hoặc CIE lch Noise)</strong> để tạo các hạt bụi trắng li ti phân bố ngẫu nhiên trên nền đen.",
              "<strong>Bước 3 (Kéo vệt mưa chuyển động):</strong> Vào <strong>Filters -> Blur -> Linear Motion Blur...</strong> -> Thiết lập thông số: <code>Length = 90</code> (độ dài hạt mưa) và <code>Angle = -40°</code> (góc nghiêng của hạt mưa theo hướng gió thổi) -> Các hạt bụi sẽ bị kéo giãn thành những vệt mưa xéo chân thực.",
              "<strong>Bước 4 (Trộn hòa màng trong suốt):</strong> Chuyển chế độ hòa trộn (Mode) của lớp mưa sang <strong>Screen</strong> (hoặc dùng Color to Alpha lọc bỏ màu đen), chỉ giữ lại những vệt mưa trắng xóa bay trên nền ảnh phố.",
              "<strong>Bước 5 (Tạo nhiều khung mưa & Xuất GIF):</strong> Tạo thêm 2-3 lớp mưa với góc xê dịch nhẹ để các hạt mưa rơi so le nhau -> Xem trước bằng Animation Playback -> Xuất tệp ảnh động GIF sinh động."
            ]
          },
          {
            badge: "Mở rộng sáng tạo",
            title: "Các hiệu ứng thời tiết tùy biến khác",
            points: [
              "<strong>Tạo tuyết rơi:</strong> Dùng bộ lọc Noise hạt to hơn, làm nhòe nhẹ bằng Gaussian Blur và cho tuyết rơi thẳng đứng (Angle = 90°).",
              "<strong>Tạo sương mù / Khói:</strong> Dùng <em>Filters -> Render -> Noise -> Solid Noise</em> kết hợp giảm Opacity và làm mờ mịn để tạo khói bốc lên mờ ảo."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Bộ lọc (Filter) nào sau đây trong GIMP có sẵn tính năng cuộn bức ảnh 2D thành một quả cầu 3D tự động xoay tròn liên tục?",
        options: [
          "Filters -> Animation -> Spinning Globe",
          "Filters -> Animation -> Rippling",
          "Filters -> Blur -> Gaussian Blur",
          "Filters -> Distorts -> Mosaic"
        ],
        answer: 0,
        explain: "Bộ lọc Filters -> Animation -> Spinning Globe biến một bức ảnh thành mô hình quả cầu 3D quay tròn quanh trục."
      },
      {
        q: "Khi tự tạo hiệu ứng vệt mưa rơi trong GIMP theo ví dụ sách giáo khoa, bộ lọc làm nhòe chuyển động nào được sử dụng để kéo các hạt bụi thành hạt mưa nghiêng?",
        options: [
          "Filters -> Blur -> Pixelize",
          "Filters -> Blur -> Linear Motion Blur (với Length = 90, Angle = -40)",
          "Filters -> Blur -> Circular Motion Blur",
          "Filters -> Enhance -> Sharpen"
        ],
        answer: 1,
        explain: "Linear Motion Blur kéo giãn các điểm hạt theo một đường thẳng có chiều dài (Length) và góc nghiêng (Angle), tạo vệt mưa bay theo chiều gió."
      },
      {
        q: "Để lọc bỏ màu nền đen của lớp hiệu ứng hạt mưa chỉ giữ lại các vệt mưa màu trắng hòa vào ảnh phong cảnh bên dưới, ta chuyển chế độ hòa trộn (Mode) của lớp sang:",
        options: [
          "Multiply",
          "Screen (hoặc dùng Color to Alpha)",
          "Darken only",
          "Difference"
        ],
        answer: 1,
        explain: "Chế độ hòa trộn Screen lọc bỏ hoàn toàn các điểm ảnh màu đen và giữ lại tối đa các chi tiết màu sáng (vệt mưa trắng)."
      }
    ]
  },

  15: {
    num: 15,
    title: "Thực hành biên tập ảnh động",
    badge: "Biên tập ảnh GIMP",
    topic: "Chuyên đề 3: Thực hành sử dụng phần mềm chỉnh sửa ảnh",
    chapter: 3,
    summary: "Tổng hợp toàn diện kĩ năng biên tập ảnh động qua dự án 'Chuyển động xe ô tô vượt chướng ngại vật'; làm chủ kĩ thuật căn chỉnh màu sắc Colors Levels, tinh chỉnh thời gian trễ và rà soát nghiệm thu theo checklist chất lượng.",
    objectives: [
      "Thực hiện thành thạo các thao tác biên tập nâng cao trên tệp GIF (thêm bớt lớp, đảo thứ tự, chỉnh màu Levels).",
      "Hoàn thiện trọn vẹn dự án mô phỏng chiếc xe ô tô chuyển động trên đường phố kèm hiệu ứng thời tiết.",
      "Nắm vững bảng Checklist 5 tiêu chuẩn đánh giá chất lượng một sản phẩm ảnh động GIF.",
      "Tối ưu hóa dung lượng tệp và kiểm tra tính tương thích khi phát sóng trên trang web học tập."
    ],
    sections: [
      {
        heading: "1. Kĩ thuật biên tập chuyên sâu trên tệp ảnh GIF",
        items: [
          {
            badge: "Biên tập nâng cao",
            title: "Các công cụ biên tập tinh chỉnh khung hình trong GIMP",
            points: [
              "<strong>Mở lại tệp GIF để biên tập:</strong> Dùng <em>File -> Open as Layers</em> mở tệp GIF đã xuất; GIMP sẽ tự động bóc tách từng khung hình và nhận diện thời gian trễ ghi trong tên lớp.",
              "<strong>Chỉnh màu sắc bằng Levels (Colors -> Levels):</strong> Điều chỉnh thanh trượt Input Levels để tăng độ tương phản, làm sáng bầu trời hoặc chỉnh riêng từng kênh màu (Red, Green, Blue) tạo tông màu phim điện ảnh cổ điển.",
              "<strong>Cắt xén khung hình (Crop Tool):</strong> Cắt bỏ viền thừa xung quanh toàn bộ các khung hình để ảnh động tập trung vào nhân vật chính và giảm dung lượng tệp.",
              "<strong>Tỉ lệ khung hình (Image -> Scale Image):</strong> Thu nhỏ kích thước ảnh xuống chuẩn web (ví dụ: chiều ngang 600px - 800px) giúp tệp tải nhanh mượt mà."
            ]
          },
          {
            badge: "Dự án Ô tô",
            title: "Quy trình 7 bước dự án 'Chuyển động xe ô tô trên phố'",
            points: [
              "<strong>Bước 1 (Chuẩn bị lớp):</strong> Mở ảnh nền đường phố và ảnh xe ô tô thành các lớp riêng.",
              "<strong>Bước 2 (Tách nền xe):</strong> Dùng Free Select khoanh xe ô tô, tạo Layer Mask màu đen để xóa sạch phông nền xung quanh xe.",
              "<strong>Bước 3 (Tạo chuỗi trạng thái di chuyển):</strong> Nhân bản lớp xe thành 5-7 lớp. Ở mỗi lớp, dùng công cụ Move di chuyển chiếc xe nhích dần từ trái sang phải màn hình.",
              "<strong>Bước 4 (Xuất bản GIF lần 1):</strong> Xuất file với tùy chọn <em>As animation</em> để kiểm tra khung hình ban đầu.",
              "<strong>Bước 5 (Điều chỉnh độ trễ):</strong> Mở lại tệp GIF, đổi tên các lớp để gán thời gian trễ thích hợp (xe chạy nhanh 80ms, xe dừng lại đèn đỏ 1200ms).",
              "<strong>Bước 6 (Tích hợp hiệu ứng mưa/bụi):</strong> Ghép thêm lớp hiệu ứng mưa rơi bằng Linear Motion Blur đã học ở Bài 14.",
              "<strong>Bước 7 (Xuất bản hoàn thiện):</strong> Xuất lại tệp GIF hoàn chỉnh, kiểm tra tính lặp mượt mà không bị khựng."
            ]
          }
        ]
      },
      {
        heading: "2. Checklist chất lượng ảnh động và Tổng kết 3 chuyên đề",
        items: [
          {
            badge: "Checklist chất lượng",
            title: "5 Tiêu chuẩn vàng đánh giá chất lượng ảnh động GIF",
            points: [
              "<strong>1. Kích thước & Tọa độ đồng nhất:</strong> Tất cả các khung hình phải có cùng kích thước pixel; vật thể chuyển động theo quỹ đạo êm ái, không bị nhảy giật vị trí.",
              "<strong>2. Nhịp điệu thời gian trễ (Timing):</strong> Tốc độ chuyển động tự nhiên; các khung hình chứa thông điệp hoặc điểm nhấn phải có đủ thời gian dừng (1-2s) để người xem kịp đọc.",
              "<strong>3. Tách nền sạch sẽ:</strong> Đường biên của vật thể (xe ô tô) được cắt gọt tinh tế, không dính viền trắng thừa hoặc lem nhem phông nền cũ.",
              "<strong>4. Hiệu ứng hài hòa:</strong> Hiệu ứng thời tiết (mưa, sương mù) làm tăng tính chân thực của câu chuyện, không che khuất đối tượng chuyển động chính.",
              "<strong>5. Thiết lập xuất bản đúng chuẩn:</strong> Bắt buộc bật <strong>As animation</strong>, chọn <strong>Loop forever</strong>, dung lượng tệp tối ưu dưới 5MB để tải nhanh trên website."
            ]
          },
          {
            badge: "Tổng kết 3 chuyên đề",
            title: "Hành trình sáng tạo sản phẩm số Tin học 11 ICT",
            points: [
              "<strong>Chuyên đề 1 (Inkscape):</strong> Làm chủ đồ họa vector, thiết kế logo, biểu tượng, bưu thiếp quảng bá du lịch.",
              "<strong>Chuyên đề 2 (Toontastic 3D + VideoPad):</strong> Sáng tạo hoạt hình 3D, kịch bản phân cảnh, lồng tiếng và công chiếu phim.",
              "<strong>Chuyên đề 3 (GIMP):</strong> Quản lí lớp ảnh, mặt nạ Layer Mask, biên tập ảnh động GIF và hiệu ứng thời tiết đa dạng.",
              "<strong>Năng lực đạt được:</strong> Thành thạo kĩ năng số, tư duy thiết kế thẩm mỹ, làm việc nhóm và giải quyết vấn đề sáng tạo trong cuộc sống."
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        q: "Công cụ nào trong menu Colors của GIMP thường được dùng để cân chỉnh độ tương phản, tăng cường độ sáng tối và chỉnh màu sắc từng kênh cho khung hình ảnh động?",
        options: [
          "Colors -> Levels",
          "Colors -> Invert",
          "Colors -> Desaturate",
          "Colors -> Threshold"
        ],
        answer: 0,
        explain: "Hộp thoại Colors -> Levels là công cụ mạnh mẽ điều chỉnh độ sáng, tối, tương phản thông qua biểu đồ histogram và thanh trượt Input Levels."
      },
      {
        q: "Trong dự án mô phỏng xe ô tô chuyển động dừng chờ đèn đỏ, khung hình xe dừng trước vạch đèn đỏ nên được đặt thời gian trễ khoảng bao nhiêu?",
        options: [
          "50 mili giây",
          "80 mili giây",
          "1500 đến 2000 mili giây (1.5 - 2 giây)",
          "0.01 giây"
        ],
        answer: 2,
        explain: "Khung hình xe dừng đèn đỏ cần thời gian dừng lâu hơn hẳn (khoảng 1.5 đến 2 giây = 1500-2000ms) để người xem cảm nhận rõ ràng trạng thái xe đang đứng chờ."
      },
      {
        q: "Tiêu chí nào sau đây KHÔNG PHẢI là tiêu chuẩn chất lượng của một tệp ảnh động GIF chuyên nghiệp?",
        options: [
          "Chuyển động mượt mà, tốc độ vừa phải, khung thông điệp đủ thời gian đọc",
          "Vật thể được tách nền sạch sẽ, không bị viền lem luốc",
          "Bắt buộc dung lượng tệp phải nặng trên 100 Megabytes",
          "Tệp được thiết lập As animation và tự động lặp lại Loop forever"
        ],
        answer: 2,
        explain: "Ảnh động GIF chuyên nghiệp dùng cho web cần dung lượng nhẹ gọn (thường dưới vài MB) để tải nhanh; tệp quá nặng trên 100MB là biểu hiện chưa tối ưu kích thước."
      }
    ]
  }
};
