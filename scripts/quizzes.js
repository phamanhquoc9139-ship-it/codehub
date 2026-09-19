const quizzesData = {
    // -----------------------------------------
    // TIỂU HỌC
    // -----------------------------------------
    "grade_3": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 3",
        questions: [
            {
                id: 1,
                question: "Bộ phận nào của máy tính giúp em nhìn thấy chữ và hình ảnh?",
                options: ["Bàn phím", "Chuột", "Màn hình", "Thùng máy"],
                correctAnswer: 2,
                explanation: "Màn hình giống như chiếc ti vi, giúp hiển thị thông tin để em nhìn thấy."
            },
            {
                id: 2,
                question: "Để gõ chữ vào máy tính, em sử dụng thiết bị nào?",
                options: ["Loa", "Bàn phím", "Màn hình", "Chuột"],
                correctAnswer: 1,
                explanation: "Bàn phím chứa các phím chữ và số giúp em nhập thông tin vào máy tính."
            },
            {
                id: 3,
                question: "Internet giống như cái gì?",
                options: ["Một cái tivi", "Một cuốn sổ", "Một thư viện khổng lồ", "Một cái máy tính"],
                correctAnswer: 2,
                explanation: "Internet giống như một thư viện khổng lồ chứa hàng tỷ thông tin, video và bài viết."
            }
        ]
    },
    "grade_4": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 4",
        questions: [
            {
                id: 1,
                question: "Phần mềm nào sau đây KHÔNG dùng để soạn thảo văn bản hoặc trình chiếu?",
                options: ["Microsoft Word", "Microsoft PowerPoint", "Tux Paint", "Màn hình máy tính"],
                correctAnswer: 3,
                explanation: "Màn hình máy tính là phần cứng, không phải phần mềm."
            },
            {
                id: 2,
                question: "Để tìm kiếm thông tin trên Internet, em cần dùng gì?",
                options: ["Từ khóa (Keyword)", "Mật khẩu", "Chuột", "Bàn phím"],
                correctAnswer: 0,
                explanation: "Sử dụng 'Từ khóa' giúp công cụ tìm kiếm hiểu được em đang muốn tìm gì trên mạng."
            },
            {
                id: 3,
                question: "Em tự tạo ra một bức tranh trên máy tính, bức tranh đó thuộc quyền gì?",
                options: ["Bản quyền của em", "Của nhà trường", "Của phần mềm", "Không của ai cả"],
                correctAnswer: 0,
                explanation: "Sản phẩm em tự sáng tạo ra sẽ thuộc Bản quyền tác giả (Copyright) của em."
            }
        ]
    },
    "grade_5": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 5",
        questions: [
            {
                id: 1,
                question: "Trong Scratch, khối lệnh 'Lặp lại 10 lần' dùng để làm gì?",
                options: ["Xóa nhân vật", "Làm nhân vật biến mất", "Thực hiện một việc 10 lần", "Đổi hình nền"],
                correctAnswer: 2,
                explanation: "Cấu trúc lặp giúp máy tính tự động thực hiện lại một chuỗi lệnh nhiều lần để tiết kiệm công sức."
            },
            {
                id: 2,
                question: "Trong phần mềm Word, phím BACKSPACE có tác dụng gì?",
                options: ["Bôi đen chữ", "Lên dòng", "Xóa ký tự ngay bên phải con trỏ", "Xóa ký tự ngay bên trái con trỏ"],
                correctAnswer: 3,
                explanation: "Backspace xóa lùi (bên trái), trong khi Delete xóa tiến (bên phải)."
            },
            {
                id: 3,
                question: "Máy tính không thể tự làm công việc nào sau đây?",
                options: ["Lưu trữ hình ảnh", "Tự nghĩ ra một câu chuyện cổ tích", "Tô màu văn bản", "Phát một đoạn nhạc"],
                correctAnswer: 1,
                explanation: "Máy tính chỉ thực hiện các lệnh do con người lập trình, không có tính sáng tạo cảm xúc."
            }
        ]
    },

    // -----------------------------------------
    // THCS
    // -----------------------------------------
    "grade_6": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 6",
        questions: [
            {
                id: 1,
                question: "Dữ liệu (Data) là gì?",
                options: ["Ý nghĩa của thông tin", "Là các con số, văn bản, hình ảnh... được lưu trữ", "Là máy tính", "Là CPU"],
                correctAnswer: 1,
                explanation: "Dữ liệu là hình thức ban đầu, dạng vật lý của thông tin, ví dụ: 25, 'Hà Nội', video."
            },
            {
                id: 2,
                question: "Thiết bị nào sau đây là bộ nhớ ngoài?",
                options: ["RAM", "ROM", "Ổ cứng (HDD/SSD)", "CPU"],
                correctAnswer: 2,
                explanation: "Ổ cứng, USB, thẻ nhớ là bộ nhớ ngoài, giúp lưu trữ lâu dài kể cả khi tắt máy."
            },
            {
                id: 3,
                question: "Phần mềm độc hại (Malware) lây lan chủ yếu qua đâu?",
                options: ["Ổ cắm điện", "Màn hình", "Mạng Internet và USB", "Bàn phím"],
                correctAnswer: 2,
                explanation: "Virus và mã độc phát tán thông qua việc click vào link lạ trên mạng hoặc cắm USB bị nhiễm."
            }
        ]
    },
    "grade_7": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 7",
        questions: [
            {
                id: 1,
                question: "Trong MS Excel, công thức nào sau đây để tính Tổng các ô từ A1 đến A5?",
                options: ["=MAX(A1:A5)", "=SUM(A1:A5)", "=AVERAGE(A1:A5)", "=MIN(A1:A5)"],
                correctAnswer: 1,
                explanation: "Hàm SUM được sử dụng để tính tổng các giá trị trong một dải ô."
            },
            {
                id: 2,
                question: "Kí tự nào luôn bắt đầu trong một công thức Excel?",
                options: ["Dấu cộng (+)", "Dấu bằng (=)", "Dấu sao (*)", "Dấu ngoặc ()"],
                correctAnswer: 1,
                explanation: "Excel nhận diện một ô chứa công thức (thay vì văn bản thường) nhờ dấu '=' ở đầu."
            },
            {
                id: 3,
                question: "Quyền tác giả phần mềm (Copyright) bảo hiểm cho việc gì?",
                options: ["Chữa máy tính hỏng", "Chép lậu game miễn phí", "Bảo vệ tài sản trí tuệ của người tạo ra phần mềm", "Cài đặt ứng dụng dọn rác"],
                correctAnswer: 2,
                explanation: "Bản quyền nhằm ngăn chặn việc ăn cắp và sao chép phần mềm khi chưa có sự cho phép."
            }
        ]
    },
    "grade_8": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 8",
        questions: [
            {
                id: 1,
                question: "Thuật toán tìm kiếm tuần tự (Linear Search) hoạt động thế nào?",
                options: ["Chia đôi danh sách liên tục", "Tìm ngẫu nhiên", "Kiểm tra từng phần tử từ đầu đến cuối", "Sắp xếp trước rồi mới tìm"],
                correctAnswer: 2,
                explanation: "Tuần tự nghĩa là duyệt từ phần tử đầu tiên đến phần tử cuối cùng để tìm ra đối sánh."
            },
            {
                id: 2,
                question: "Khi nào nên dùng tìm kiếm nhị phân (Binary Search)?",
                options: ["Luôn luôn", "Khi danh sách đã được SẮP XẾP", "Khi danh sách trống", "Khi danh sách chưa được sắp xếp"],
                correctAnswer: 1,
                explanation: "Binary Search chỉ hoạt động khi mảng đã được sắp xếp (ví dụ: chia đôi từ điển để tìm chữ)."
            },
            {
                id: 3,
                question: "Hành vi nào vi phạm đạo đức số?",
                options: ["Tham gia học trực tuyến", "Cài phần mềm diệt Virus", "Đăng ảnh chế giễu bạn cùng lớp lên Facebook", "Tra cứu Wikipedia"],
                correctAnswer: 2,
                explanation: "Bắt nạt trên không gian mạng (Cyberbullying) là hành vi thiếu văn hóa và vi phạm chuẩn mực."
            }
        ]
    },
    "grade_9": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 9",
        questions: [
            {
                id: 1,
                question: "Mạng LAN là gì?",
                options: ["Mạng di động 5G", "Mạng diện rộng toàn thế giới", "Mạng cục bộ (trong một tòa nhà, phòng máy)", "Mạng cáp quang biển"],
                correctAnswer: 2,
                explanation: "LAN (Local Area Network) là mạng kết nối các máy tính trong phạm vi hẹp."
            },
            {
                id: 2,
                question: "Internet kết nối thiết bị với nhau chủ yếu bằng giao thức nào?",
                options: ["TCP/IP", "USB", "HDMI", "Bluetooth"],
                correctAnswer: 0,
                explanation: "TCP/IP là bộ quy tắc chuẩn giúp các hệ thống khác nhau có thể truyền nhận dữ liệu trên Internet."
            },
            {
                id: 3,
                question: "Lợi ích của việc nén tệp (Zip/Rar)?",
                options: ["Làm tệp đẹp hơn", "Giảm dung lượng tệp và dễ dàng gửi qua mail", "Thay đổi định dạng video", "Diệt virus"],
                correctAnswer: 1,
                explanation: "Nén tệp giúp gộp nhiều tệp lại và thu nhỏ kích thước bộ nhớ chúng chiếm dụng."
            }
        ]
    },

    // -----------------------------------------
    // THPT
    // -----------------------------------------
        "grade_10": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 10 (Kết Nối Tri Thức)",
        questions: [
            {
                id: 1,
                question: "Trong biểu diễn dữ liệu số nhị phân, kết quả của phép cộng nhị phân 101(2) + 011(2) là bao nhiêu?",
                options: ["110(2)", "1000(2)", "111(2)", "1001(2)"],
                correctAnswer: 1,
                explanation: "101(2) tương ứng với 5 ở hệ thập phân, 011(2) tương ứng với 3. 5 + 3 = 8, và 8 đổi sang nhị phân là 1000(2)."
            },
            {
                id: 2,
                question: "Hành vi nào sau đây vi phạm bản quyền và quy định pháp luật về an toàn thông tin trên môi trường số?",
                options: [
                    "Sử dụng phần mềm mã nguồn mở miễn phí theo giấy phép GNU GPL",
                    "Trích dẫn bài viết khoa học có ghi rõ họ tên tác giả và nguồn gốc tài liệu",
                    "Tải phần mềm bẻ khóa (crack) từ các trang web lậu và chia sẻ lên mạng xã hội",
                    "Đặt mật khẩu tài khoản gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt"
                ],
                correctAnswer: 2,
                explanation: "Sử dụng và phân tán phần mềm bẻ khóa (crack) là hành vi xâm phạm quyền tác giả và tiềm ẩn nguy cơ lây nhiễm mã độc cao."
            },
            {
                id: 3,
                question: "Đặc điểm nổi bật nhất của ảnh đồ họa vectơ (Vector) so với ảnh điểm ảnh (Raster) trong phần mềm Inkscape là gì?",
                options: [
                    "Được cấu tạo từ ma trận các điểm ảnh (Pixel)",
                    "Khi phóng to tùy ý hình ảnh không bao giờ bị vỡ hạt hay giảm độ sắc nét",
                    "Dung lượng file luôn lớn hơn rất nhiều so với file ảnh raster",
                    "Không thể chỉnh sửa được màu sắc và đường nét sau khi vẽ"
                ],
                correctAnswer: 1,
                explanation: "Đồ họa vectơ được tính toán dựa trên các công thức toán học và đối tượng hình học, cho phép thu phóng vô hạn mà không suy giảm chất lượng hiển thị."
            },
            {
                id: 4,
                question: "Trong ngôn ngữ lập trình Python, đoạn mã sau in ra kết quả gì?\n\na = [10, 20, 30, 40]\nprint(a[1] + a[-1])",
                options: ["40", "50", "60", "30"],
                correctAnswer: 2,
                explanation: "Trong Python, chỉ số đánh từ 0 nên a[1] = 20, và a[-1] là phần tử cuối cùng a[-1] = 40. Tổng 20 + 40 = 60."
            },
            {
                id: 5,
                question: "Điều kiện tiên quyết bắt buộc để áp dụng thuật toán tìm kiếm nhị phân (Binary Search) trên một danh sách là gì?",
                options: [
                    "Danh sách phải có số lượng phần tử là số chẵn",
                    "Danh sách đã được sắp xếp theo một thứ tự xác định (tăng dần hoặc giảm dần)",
                    "Các phần tử trong danh sách bắt buộc phải là số nguyên dương",
                    "Danh sách phải chứa không quá 100 phần tử"
                ],
                correctAnswer: 1,
                explanation: "Thuật toán tìm kiếm nhị phân chia đôi phạm vi tìm kiếm ở mỗi bước nên bắt buộc danh sách dữ liệu phải được sắp xếp trước."
            }
        ]
    },
        "grade_11": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 11 (KNTT - ICT)",
        questions: [
            {
                id: 1,
                question: "Vì sao các hệ thống phần mềm cần phải thiết kế và sử dụng Cơ sở dữ liệu (Database) thay vì lưu trữ tệp rời rạc?",
                options: [
                    "Để máy tính tiêu tốn ít điện năng hơn",
                    "Để lưu trữ dữ liệu có cấu trúc, tránh dư thừa dữ liệu, đảm bảo tính nhất quán và toàn vẹn",
                    "Để hiển thị đồ họa 3D đẹp hơn trên màn hình",
                    "Để tăng tốc độ kết nối cáp quang Internet"
                ],
                correctAnswer: 1,
                explanation: "CSDL giúp chuẩn hóa dữ liệu, loại bỏ trùng lặp dư thừa, đảm bảo tính toàn vẹn và cho phép nhiều người dùng truy xuất đồng thời an toàn."
            },
            {
                id: 2,
                question: "Khóa chính (Primary Key) trong một bảng CSDL quan hệ có đặc điểm quan trọng nào sau đây?",
                options: [
                    "Các giá trị trong cột khóa chính có thể trùng lặp nhau",
                    "Bắt buộc phải là kiểu dữ liệu văn bản dài (TEXT)",
                    "Định danh duy nhất mỗi bản ghi (dòng dữ liệu) trong bảng và giá trị không được để trống (NOT NULL)",
                    "Chỉ được phép chứa tối đa 1 ký tự duy nhất"
                ],
                correctAnswer: 2,
                explanation: "Khóa chính đóng vai trò nhận diện duy nhất từng bản ghi trong bảng và không bao giờ được phép mang giá trị rỗng (NULL)."
            },
            {
                id: 3,
                question: "Nghề Quản trị Cơ sở dữ liệu (Database Administrator - DBA) chịu trách nhiệm chính về công việc gì?",
                options: [
                    "Cài đặt hệ điều hành và sửa chữa phần cứng máy in văn phòng",
                    "Cấu hình và bấm dây cáp mạng LAN cho trường học",
                    "Thiết kế, cấp quyền bảo mật, theo dõi hiệu năng, sao lưu (Backup) và phục hồi (Restore) hệ thống CSDL",
                    "Vẽ minh họa banner và thiết kế logo thương hiệu cho website"
                ],
                correctAnswer: 2,
                explanation: "DBA chịu trách nhiệm đảm bảo hệ thống CSDL vận hành liên tục, an toàn dữ liệu tuyệt đối, hiệu năng truy vấn tối ưu và có phương án phục hồi sau sự cố."
            },
            {
                id: 4,
                question: "Trong ngôn ngữ SQL, câu lệnh nào sau đây được sử dụng để truy xuất và lấy dữ liệu từ một hoặc nhiều bảng?",
                options: [
                    "INSERT INTO",
                    "SELECT",
                    "UPDATE",
                    "DELETE"
                ],
                correctAnswer: 1,
                explanation: "Câu lệnh SELECT (thường kết hợp với FROM, WHERE, JOIN...) là cú pháp chuẩn để lọc và truy xuất các bản ghi từ các bảng trong CSDL quan hệ."
            },
            {
                id: 5,
                question: "Trong kỹ thuật xử lý hình ảnh và video (GIMP, VideoPad), một đoạn ảnh động GIF hoặc clip hoạt hình được cấu thành từ yếu tố nào?",
                options: [
                    "Chuỗi liên tiếp nhiều khung hình tĩnh (layers/frames) được hiển thị nối tiếp nhau theo trục thời gian",
                    "Chỉ một bức ảnh tĩnh duy nhất được phóng to kích thước liên tục",
                    "Một tập tin văn bản mã hóa không chứa hình ảnh",
                    "Một file nhạc nền MP3 không cần hình ảnh hiển thị"
                ],
                correctAnswer: 0,
                explanation: "Ảnh động và hoạt hình thực chất là sự nối tiếp của các khung hình tĩnh (frame) phát với tần số đủ nhanh theo thời gian để tạo ra ảo giác chuyển động liên tục cho mắt người xem."
            }
        ]
    },
    "grade_12": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Tin Học 12 (ICT)",
        questions: [
            {
                id: 1,
                question: "Trong kết nối mạng máy tính và Internet, thiết bị nào thường đóng vai trò cấp phát địa chỉ IP động cho các thiết bị trong mạng?",
                options: ["Switch", "Access Point", "Router (Bộ định tuyến)", "Modem quang"],
                correctAnswer: 2,
                explanation: "Router thường được tích hợp dịch vụ DHCP để cấp phát IP động tự động cho các thiết bị."
            },
            {
                id: 2,
                question: "Theo định hướng ICT, khi tạo trang web bằng Google Sites, thao tác nào cho phép nhúng video từ YouTube?",
                options: ["Sử dụng tính năng 'Bộ chia'", "Chèn 'Khối nội dung'", "Vào tab Chèn -> chọn 'YouTube' hoặc 'Nhúng'", "Vào cài đặt xuất bản trang web"],
                correctAnswer: 2,
                explanation: "Google Sites có sẵn công cụ YouTube và công cụ Nhúng (Embed) trong tab Chèn để chèn video."
            },
            {
                id: 3,
                question: "Tính nhân văn trong không gian mạng KHÔNG bao gồm hành vi nào dưới đây?",
                options: ["Tôn trọng sự khác biệt", "Bắt nạt qua mạng (Cyberbullying)", "Lan tỏa những điều tích cực", "Sử dụng ngôn từ lịch sự"],
                correctAnswer: 1,
                explanation: "Bắt nạt trực tuyến là hành vi xấu, đi ngược lại giá trị đạo đức và tính nhân văn số."
            }
        ]
    },
    // -----------------------------------------
    // ACTIVITIES & EXTRA COURSES
    // -----------------------------------------
    "python_basics": {
        title: "Bài Kiểm Tra Trắc Nghiệm: Python Cơ Bản",
        questions: [
            {
                id: 1,
                question: "Để in chữ 'Hello World' ra màn hình console trong Python, em dùng lệnh gì?",
                options: ["echo 'Hello World'", "console.log('Hello World')", "print('Hello World')", "printf('Hello World')"],
                correctAnswer: 2,
                explanation: "Hàm print() là hàm tiêu chuẩn trong Python để xuất đầu ra."
            },
            {
                id: 2,
                question: "Kiểu dữ liệu của x = 10.5 là gì?",
                options: ["int", "float", "str", "bool"],
                correctAnswer: 1,
                explanation: "Số có dấu thập phân (10.5) thuộc kiểu số thực (float)."
            },
            {
                id: 3,
                question: "Ký hiệu nào dùng để viết chú thích (Comment) trong Python?",
                options: ["//", "/* ... */", "<!-- -->", "#"],
                correctAnswer: 3,
                explanation: "Python sử dụng dấu thăng (#) cho các chú thích trên từng dòng."
            }
        ]
    },
    "hdtnhn_10": {
        title: "Bài Kiểm Tra Trắc Nghiệm: HĐTN & HN 10 (Kết Nối Tri Thức)",
        questions: [
            {
                id: 1,
                question: "Hành động nào sau đây thể hiện rõ nhất ý thức phát huy truyền thống nhà trường và thực hiện nghiêm túc nội quy?",
                options: [
                    "Chỉ thực hiện nội quy khi có giám thị hoặc thầy cô nhắc nhở trực tiếp",
                    "Chủ động đi học đúng giờ, mặc đúng đồng phục, tích cực tham gia các phong trào Đoàn và giữ gìn danh dự nhà trường",
                    "Đến lớp chỉ chú ý học cá nhân, không quan tâm đến các hoạt động tập thể hay truyền thống của trường",
                    "Chỉ tham gia các hoạt động ngoại khóa có trao thưởng tiền mặt"
                ],
                correctAnswer: 1,
                explanation: "Tự giác chấp hành nội quy, tích cực học tập, tham gia phong trào tập thể và tự hào gìn giữ danh dự trường là biểu hiện cốt lõi của việc phát huy truyền thống nhà trường."
            },
            {
                id: 2,
                question: "Khi nhận kết quả kiểm tra không như mong đợi, biểu hiện nào thể hiện tư duy điều chỉnh theo hướng tích cực?",
                options: [
                    "Chán nản, cho rằng bản thân không có năng khiếu và quyết định bỏ học môn đó",
                    "Đổ lỗi cho đề thi quá khó hoặc thầy cô chấm khắt khe",
                    "Bình tĩnh xem lại các câu làm sai để nhận diện lỗ hổng kiến thức và lập kế hoạch ôn tập, hỏi lại thầy cô",
                    "Giấu giếm kết quả với gia đình để không bị mắng"
                ],
                correctAnswer: 2,
                explanation: "Tư duy tích cực (Growth Mindset) xem thất bại tạm thời là cơ hội học hỏi, chủ động phân tích nguyên nhân và tìm giải pháp cải thiện."
            },
            {
                id: 3,
                question: "Nguyên tắc cơ bản và hiệu quả trong việc lập kế hoạch tài chính cá nhân dành cho học sinh THPT là gì?",
                options: [
                    "Có bao nhiêu chi tiêu hết bấy nhiêu để tận hưởng cuộc sống",
                    "Phân bổ nguồn tiền hợp lý (ví dụ: Thiết yếu - Sở thích - Tiết kiệm) và phân biệt rõ giữa nhu cầu 'Cần' và mong muốn 'Muốn'",
                    "Vay mượn bạn bè để mua sắm các món đồ theo xu hướng thời trang",
                    "Chỉ tiết kiệm khi nào có số tiền thật lớn"
                ],
                correctAnswer: 1,
                explanation: "Quản lý tài chính cá nhân khoa học bắt đầu từ việc kiểm soát các khoản chi, ưu tiên nhu cầu thiết yếu và duy trì thói quen tiết kiệm đều đặn."
            },
            {
                id: 4,
                question: "Để thể hiện sự tự tin và thân thiện trong giao tiếp với thầy cô và bạn bè tại trường THPT, học sinh nên làm gì?",
                options: [
                    "Tránh giao tiếp bằng mắt và nói lí nhí khi trao đổi",
                    "Nói thật to, ngắt lời người khác để thể hiện sự nổi trội",
                    "Giao tiếp bằng ánh mắt chân thành, nụ cười hòa nhã, nói năng mạch lạc và tôn trọng sự khác biệt của mọi người",
                    "Chỉ giao tiếp với các bạn học giỏi trong lớp"
                ],
                correctAnswer: 2,
                explanation: "Giao tiếp tự tin và thân thiện đòi hỏi thái độ cởi mở, lắng nghe tôn trọng, ánh mắt ấm áp và phong thái lịch thiệp."
            },
            {
                id: 5,
                question: "Theo mô hình hướng nghiệp tam giác bền vững, một nghề nghiệp lý tưởng được lựa chọn dựa trên sự giao thoa của 3 yếu tố nào?",
                options: [
                    "Sở thích của bạn thân - Ý kiến người quen - Xu hướng mạng xã hội",
                    "Đam mê/sở thích cá nhân - Năng lực/sở trường bản thân - Nhu cầu thực tế của xã hội/thị trường lao động",
                    "Mức lương khởi điểm cao - Công việc nhàn hạ - Gần nhà",
                    "Truyền thống nghề nghiệp của gia đình mà không cần xét năng lực bản thân"
                ],
                correctAnswer: 1,
                explanation: "Chọn nghề bền vững phải dựa trên sự kết hợp hài hòa giữa điều em thích (Đam mê), điều em làm tốt (Năng lực) và điều xã hội cần (Cơ hội việc làm)."
            }
        ]
    },
    "hdtnhn_11": {
        title: "Bài Kiểm Tra Trắc Nghiệm: HĐTN & HN 11 (Kết Nối Tri Thức)",
        questions: [
            {
                id: 1,
                question: "Hành vi nào sau đây thể hiện việc làm chủ và kiểm soát tốt các mối quan hệ trên mạng xã hội?",
                options: [
                    "Bình luận công kích hoặc lập nhóm để giải quyết mâu thuẫn trực tuyến",
                    "Áp dụng quy tắc 'Think before you post', giữ bí mật thông tin cá nhân và giải quyết bất đồng bằng đối thoại trực tiếp",
                    "Chia sẻ ngay mọi cảm xúc bực bội, tức giận lên trang cá nhân",
                    "Chấp nhận kết bạn với tất cả mọi người mà không cần xác minh danh tính"
                ],
                correctAnswer: 1,
                explanation: "Làm chủ mối quan hệ trên mạng xã hội đòi hỏi kỹ năng bảo vệ quyền riêng tư, suy nghĩ chín chắn trước khi đăng tải và đối thoại văn minh khi có bất đồng."
            },
            {
                id: 2,
                question: "Để xây dựng và phát triển mối quan hệ tốt đẹp với thầy cô giáo, học sinh cần có thái độ và hành động nào?",
                options: [
                    "Chỉ chào hỏi khi thầy cô là giáo viên chủ nhiệm hoặc dạy lớp mình",
                    "Kính trọng, lễ phép, chủ động trao đổi bài học và chân thành lắng nghe lời chỉ bảo",
                    "E ngại, tránh né tiếp xúc với thầy cô ngoài giờ lên lớp",
                    "Chỉ nghe lời khi được thầy cô khen thưởng"
                ],
                correctAnswer: 1,
                explanation: "Sự tôn trọng, cởi mở, cầu thị và lắng nghe chân thành là nền tảng cốt lõi tạo nên mối quan hệ tốt đẹp, ý nghĩa giữa học sinh và thầy cô giáo."
            },
            {
                id: 3,
                question: "Khi đối mặt với sự thay đổi (như môi trường học mới, phương pháp học mới), cách điều chỉnh bản thân tích cực nhất là gì?",
                options: [
                    "Than phiền và mong mọi thứ quay lại như cũ",
                    "Giữ nguyên phương pháp cũ dù không còn hiệu quả",
                    "Chủ động tìm hiểu, rèn luyện tư duy mở (Growth Mindset) và lập kế hoạch thích nghi từng bước",
                    "Buông xuôi và phó mặc cho hoàn cảnh"
                ],
                correctAnswer: 2,
                explanation: "Tư duy mở và tinh thần chủ động giúp bản thân nhanh chóng thích ứng với những thay đổi và biến thách thức thành cơ hội phát triển."
            },
            {
                id: 4,
                question: "Phương pháp hiệu quả nhất để hóa giải mâu thuẫn, bất đồng quan điểm giữa học sinh và cha mẹ là gì?",
                options: [
                    "Tranh cãi gay gắt để bảo vệ quan điểm đến cùng",
                    "Chiến tranh lạnh, im lặng và không giao tiếp",
                    "Bình tĩnh lắng nghe góc nhìn của cha mẹ, thấu hiểu sự lo lắng và đối thoại chân thành, logic",
                    "Rời khỏi nhà để phản đối"
                ],
                correctAnswer: 2,
                explanation: "Lắng nghe tích cực, thấu hiểu khoảng cách thế hệ và chọn thời điểm thích hợp để đối thoại cởi mở là chìa khóa giải quyết xung đột gia đình."
            },
            {
                id: 5,
                question: "Trong việc chọn nghề và định hướng học tập ở năm lớp 11, yếu tố nào quan trọng hàng đầu?",
                options: [
                    "Chỉ chọn nghề theo trào lưu của bạn bè xung quanh",
                    "Chọn ngành có điểm chuẩn thấp nhất để dễ đỗ",
                    "Đối chiếu năng lực, sở trường, phẩm chất cá nhân với yêu cầu thực tế của nghề và xu hướng thị trường lao động",
                    "Để đến kỳ thi tốt nghiệp lớp 12 mới bắt đầu tìm hiểu"
                ],
                correctAnswer: 2,
                explanation: "Sự phù hợp giữa phẩm chất, năng lực cá nhân với yêu cầu nghề nghiệp và xu thế thị trường là yếu tố quyết định thành công lâu dài."
            }
        ]
    },
    "hdtnhn_12": {
        title: "Bài Kiểm Tra Trắc Nghiệm: HĐTN & HN 12 (Kết Nối Tri Thức)",
        questions: [
            {
                id: 1,
                question: "Để nuôi dưỡng và mở rộng các mối quan hệ tốt đẹp với thầy cô giáo và bạn bè trong năm học lớp 12, học sinh cần thể hiện hành vi nào sau đây?",
                options: [
                    "Chỉ tập trung học tập cá nhân, hạn chế giao tiếp để tránh mất thời gian",
                    "Chân thành tri ân thầy cô, chủ động giúp đỡ bạn bè cùng tiến bộ và tích cực hợp tác trong các hoạt động tập thể",
                    "Chỉ thân thiện với những bạn có điểm số cao hơn mình",
                    "Tranh luận gay gắt trên mạng xã hội để thể hiện cái tôi cá nhân"
                ],
                correctAnswer: 1,
                explanation: "Sự chân thành, lòng biết ơn đối với thầy cô và tinh thần tương trợ, hợp tác học tập cùng bạn bè là nền tảng cốt lõi phát triển các mối quan hệ tích cực."
            },
            {
                id: 2,
                question: "Biểu hiện nào sau đây thể hiện rõ nhất sự trưởng thành và phẩm chất ý chí của một thanh niên tuổi 18?",
                options: [
                    "Dễ dàng nản lòng và từ bỏ mục tiêu khi kết quả thi thử ban đầu chưa tốt",
                    "Phụ thuộc hoàn toàn vào quyết định và sự nhắc nhở của cha mẹ",
                    "Có tính kiên định, tự chủ kiểm soát thói quen xấu, có trách nhiệm với lời nói và hành động của bản thân",
                    "Luôn làm theo ý kiến của đám đông dù nhận thấy có điểm chưa đúng"
                ],
                correctAnswer: 2,
                explanation: "Người trưởng thành có năng lực tự chủ, kiên định vượt qua thử thách và dám chịu trách nhiệm hoàn toàn về cuộc sống của chính mình."
            },
            {
                id: 3,
                question: "Theo quy tắc quản lý tài chính cá nhân 50/30/20, phần 50% thu nhập hoặc tiền tiêu vặt nên được ưu tiên phân bổ cho khoản mục nào?",
                options: [
                    "Nhu cầu thiết yếu (ăn uống, đi lại, đồ dùng học tập, sách vở cơ bản)",
                    "Sở thích cá nhân, mua sắm đồ công nghệ giải trí",
                    "Tiết kiệm đầu tư mạo hiểm",
                    "Đi du lịch cùng bạn bè"
                ],
                correctAnswer: 0,
                explanation: "Quy tắc 50/30/20 quy định 50% dành cho các nhu cầu thiết yếu duy trì cuộc sống và học tập, 30% cho mong muốn cá nhân và 20% dành cho tích lũy tiết kiệm."
            },
            {
                id: 4,
                question: "Khi gia đình gặp khó khăn về tài chính hoặc người thân đau ốm, người con tuổi 18 nên thể hiện trách nhiệm bằng cách nào?",
                options: [
                    "Phàn nàn vì mức chi tiêu cá nhân bị cắt giảm",
                    "Chủ động chia sẻ việc nhà, chăm sóc người thân ốm đau và cùng bàn bạc tiết kiệm chi tiêu hợp lý",
                    "Tránh mặt khỏi gia đình để không bị ảnh hưởng tâm lý thi cử",
                    "Yêu cầu cha mẹ vay mượn tiền để duy trì mức sống cũ"
                ],
                correctAnswer: 1,
                explanation: "Chủ động san sẻ gánh nặng, chăm sóc chu đáo người thân và cùng gia đình vượt qua biến cố là trách nhiệm đạo đức cao đẹp của người con trưởng thành."
            },
            {
                id: 5,
                question: "Để chuẩn bị tâm lý và kỹ năng thích ứng tốt nhất khi bước vào môi trường học tập hoặc làm việc mới sau tốt nghiệp THPT (Đại học, Cao đẳng hoặc Nơi làm việc), học sinh cần làm gì?",
                options: [
                    "Chỉ đợi đến ngày nhập học mới bắt đầu tìm hiểu về trường và phương pháp học",
                    "Lo lắng quá mức và ngại giao tiếp với bạn bè, giảng viên mới",
                    "Chủ động rèn luyện kỹ năng sống tự lập, nâng cao năng lực tự học, tìm hiểu quy chế đào tạo và xây dựng tư duy cầu tiến",
                    "Duy trì phương pháp học thụ động như ở bậc phổ thông"
                ],
                correctAnswer: 2,
                explanation: "Sự chủ động trang bị kỹ năng sống tự lập, năng lực tự nghiên cứu và tâm thế mở sẵn sàng học hỏi là chìa khóa vàng giúp tân sinh viên/người đi làm nhanh chóng hòa nhập và thành công."
            }
        ]
    }
};
