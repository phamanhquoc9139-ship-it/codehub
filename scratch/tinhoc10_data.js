// scratch/tinhoc10_data.js
// Dữ liệu nội dung chuẩn môn Tin học 10 - SGK Kết nối tri thức với cuộc sống
// Gồm 6 Chủ đề, 34 Bài học chi tiết đầy đủ 2 định hướng ICT & CS

module.exports = {
  topics: [
    {
      num: 1,
      title: "Chủ đề 1 – Máy tính và xã hội tri thức",
      badge: "Máy tính & Xã hội",
      icon: "fa-microchip",
      desc: "Thông tin, dữ liệu, thiết bị thông minh, các kiểu dữ liệu, hệ nhị phân, dữ liệu logic, đa phương tiện và thiết bị số",
      lessons: [1, 2, 3, 4, 5, 6, 7]
    },
    {
      num: 2,
      title: "Chủ đề 2 – Mạng máy tính và Internet",
      badge: "Mạng & Internet",
      icon: "fa-network-wired",
      desc: "Mạng máy tính hiện đại, IoT, điện toán đám mây, an toàn không gian mạng và kĩ năng khai thác tài nguyên Internet",
      lessons: [8, 9, 10]
    },
    {
      num: 3,
      title: "Chủ đề 3 – Đạo đức, pháp luật và văn hoá trong môi trường số",
      badge: "Đạo đức & Bản quyền",
      icon: "fa-scale-balanced",
      desc: "Ứng xử văn hóa số, bảo vệ thông tin cá nhân và nghĩa vụ tôn trọng quyền tác giả, bản quyền phần mềm",
      lessons: [11]
    },
    {
      num: 4,
      title: "Chủ đề 4 – Ứng dụng tin học (Đồ họa máy tính)",
      badge: "Đồ họa Inkscape (ICT)",
      icon: "fa-bezier-curve",
      desc: "Phần mềm thiết kế đồ họa vector Inkscape, quản lí đối tượng, tô màu viền, xử lí đường cong Bézier và văn bản",
      lessons: [12, 13, 14, 15]
    },
    {
      num: 5,
      title: "Chủ đề 5 – Giải quyết vấn đề với sự trợ giúp của máy tính",
      badge: "Lập trình Python (CS)",
      icon: "fa-code",
      desc: "Ngôn ngữ lập trình Python, biến, kiểu dữ liệu, rẽ nhánh, vòng lặp, danh sách, xâu kí tự, hàm, phạm vi và gỡ lỗi",
      lessons: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
    },
    {
      num: 6,
      title: "Chủ đề 6 – Hướng nghiệp với tin học",
      badge: "Định hướng nghề nghiệp",
      icon: "fa-user-tie",
      desc: "Nghề thiết kế đồ họa máy tính và nghề phát triển phần mềm: quy trình, năng lực, cơ hội và đạo đức nghề nghiệp",
      lessons: [33, 34]
    }
  ],

  lessons: {
    // Chủ đề 1: Máy tính và xã hội tri thức
    1: {
      num: 1,
      topic: 1,
      title: "Thông tin và xử lí thông tin",
      orientation: "Chung",
      body: `### 1. Khái niệm thông tin và dữ liệu

- **Thông tin (Information):** Là những hiểu biết của con người về thế giới xung quanh và về chính bản thân mình. Thông tin giúp con người đưa ra các quyết định hành động đúng đắn.
- **Dữ liệu (Data):** Là cách biểu diễn thông tin dưới dạng các kí hiệu, chữ viết, con số, hình ảnh, âm thanh... để có thể lưu trữ, truyền tải và xử lí bằng các phương tiện số.
- **Dữ liệu số trong máy tính:** Máy tính chỉ có thể tiếp nhận, lưu trữ và xử lí dữ liệu số hóa dưới dạng các dãy bit gồm hai kí hiệu 0 và 1.
- **Mối quan hệ giữa thông tin và dữ liệu:** Cùng một thông tin có thể biểu diễn bằng nhiều dạng dữ liệu khác nhau; ngược lại, cùng một dữ liệu có thể đem lại thông tin khác nhau tùy thuộc vào ngữ cảnh và cách diễn giải. Dữ liệu sai lệch hoặc thiếu sót sẽ dẫn đến thông tin sai lệch.

### 2. Quá trình xử lí thông tin của máy tính

- **Quy trình xử lí thông tin cơ bản:** 
  > Tiếp nhận dữ liệu (Input) $\\to$ Xử lí / Biến đổi dữ liệu (Process) $\\to$ Đưa ra kết quả (Output / Storage).
- **Đầu vào (Input):** Thu nhận dữ liệu từ các thiết bị ngoại vi như bàn phím, chuột, máy quét, camera, cảm biến (IoT) hoặc từ mạng Internet.
- **Xử lí (Process):** Bộ vi xử lí (CPU) thực hiện các phép toán số học và logic theo tập lệnh đã được lập trình để biến đổi dữ liệu đầu vào.
- **Đầu ra (Output):** Xuất thông tin ra màn hình, loa, máy in, hoặc lưu vào bộ nhớ thứ cấp (ổ đĩa SSD, HDD, đám mây) để phục vụ cho các quy trình tiếp theo.

### 3. Đơn vị đo dung lượng thông tin

- **Bit (Binary digit):** Đơn vị đo lượng thông tin nhỏ nhất, chỉ nhận một trong hai giá trị là 0 hoặc 1.
- **Byte:** Đơn vị cơ bản đo dung lượng bộ nhớ: $1\\text{ Byte} = 8\\text{ bit}$. Một byte có thể biểu diễn $2^8 = 256$ trạng thái khác nhau.
- **Bội số của Byte:** 
  - $1\\text{ KB (Kilobyte)} = 1024\\text{ Bytes} = 2^{10}\\text{ Bytes}$.
  - $1\\text{ MB (Megabyte)} = 1024\\text{ KB} = 2^{20}\\text{ Bytes}$.
  - $1\\text{ GB (Gigabyte)} = 1024\\text{ MB} = 2^{30}\\text{ Bytes}$.
  - $1\\text{ TB (Terabyte)} = 1024\\text{ GB} = 2^{40}\\text{ Bytes}$.`
    },

    2: {
      num: 2,
      topic: 1,
      title: "Vai trò của thiết bị thông minh và tin học đối với xã hội",
      orientation: "Chung",
      body: `### 1. Thiết bị thông minh trong thời đại số

- **Khái niệm thiết bị thông minh (Smart Devices):** Là các thiết bị điện tử có tích hợp bộ xử lí máy tính, phần mềm, bộ nhớ, các cảm biến môi trường và khả năng kết nối mạng (Wi-Fi, Bluetooth, 4G/5G) để tự động thu thập, xử lí và trao đổi dữ liệu mà không cần con người can thiệp liên tục.
- **Ví dụ điển hình:** Điện thoại thông minh (Smartphone), đồng hồ thông minh (Smartwatch), robot hút bụi tự hành, thiết bị nhà thông minh (Smart Home), xe ô tô tự lái.

### 2. Vai trò của tin học trong các lĩnh vực đời sống

- **Tự động hóa sản xuất:** Các dây chuyền robot công nghiệp, hệ thống quản lí chuỗi cung ứng thông minh nâng cao năng suất và chất lượng sản phẩm.
- **Giao tiếp và cộng đồng:** Mạng xã hội, thư điện tử, cuộc gọi video giúp xóa nhòa khoảng cách địa lí, kết nối cộng đồng toàn cầu tức thì.
- **Giáo dục và y tế:** Học tập trực tuyến (E-learning), bệnh án điện tử, chẩn đoán hình ảnh bằng AI và phẫu thuật nội soi hỗ trợ bởi robot.
- **Chính phủ điện tử và dịch vụ công:** Đăng kí thủ tục hành chính trực tuyến, căn cước công dân số, thanh toán không dùng tiền mặt.

### 3. Những thách thức của xã hội số và trách nhiệm người dùng

- **Thách thức:** Khoảng cách số giữa các vùng miền, nguy cơ nghiện thiết bị số, lộ lọt dữ liệu riêng tư, lừa đảo trực tuyến và tin tức giả mạo (Fake News).
- **Trách nhiệm của công dân số:** Biết chọn lọc và kiểm chứng thông tin, bảo vệ dữ liệu cá nhân, tôn trọng quyền sở hữu trí tuệ và sử dụng công nghệ một cách nhân văn, lành mạnh.`
    },

    3: {
      num: 3,
      topic: 1,
      title: "Một số kiểu dữ liệu và dữ liệu văn bản",
      orientation: "Chung",
      body: `### 1. Khái niệm kiểu dữ liệu

- **Kiểu dữ liệu (Data Type):** Là tập hợp các giá trị mà một đại lượng có thể nhận cùng với các phép toán hợp lệ có thể thực hiện trên các giá trị đó.
- **Các kiểu dữ liệu cơ bản:** Kiểu số nguyên (integer), số thực (float), kiểu logic (boolean), kiểu kí tự và chuỗi văn bản (string).

### 2. Mã hóa dữ liệu văn bản

- **Bản chất lưu trữ văn bản:** Máy tính không lưu trữ trực tiếp hình ảnh chữ cái mà lưu trữ các con số mã hóa (mã kí tự) tương ứng theo một bảng mã chuẩn.
- **Bảng mã ASCII (American Standard Code for Information Interchange):**
  - Sử dụng 7 bit (hoặc 8 bit cho ASCII mở rộng) để mã hóa 128 (hoặc 256) kí tự gồm chữ cái tiếng Anh, chữ số và kí hiệu điều khiển.
  - Không đủ dung lượng để mã hóa các ngôn ngữ có dấu như tiếng Việt, chữ tượng hình tiếng Trung, Nhật, Hàn.
- **Bảng mã Unicode:**
  - Bảng mã quốc tế toàn diện, cung cấp không gian mã đủ lớn để đại diện cho tất cả các kí tự của mọi ngôn ngữ trên thế giới.
  - **Chuẩn mã hóa UTF-8:** Là cách mã hóa Unicode phổ biến nhất hiện nay, sử dụng số byte biến đổi (từ 1 đến 4 byte cho mỗi kí tự), tương thích ngược hoàn hảo với ASCII và tiết kiệm dung lượng lưu trữ.

### 3. Phân biệt mã hóa kí tự và phông chữ

- **Mã kí tự (Character Code):** Xác định định danh trừu tượng của kí tự (ví dụ: chữ 'A' có mã ASCII là 65).
- **Phông chữ (Font):** Tập hợp các hình vẽ đồ họa quy định cách hiển thị hình dáng, kiểu dáng của kí tự trên màn hình hoặc trang in. Nếu chọn sai bảng mã hoặc thiếu phông chữ thì văn bản sẽ bị lỗi hiển thị (vỡ font).`
    },

    4: {
      num: 4,
      topic: 1,
      title: "Hệ nhị phân và dữ liệu số nguyên",
      orientation: "CS",
      body: `### 1. Hệ nhị phân (Binary System)

- **Đặc điểm:** Hệ đếm cơ số 2 chỉ sử dụng hai chữ số là 0 và 1. Giá trị của mỗi chữ số phụ thuộc vào vị trí của nó theo lũy thừa của 2:
  $$(d_n d_{n-1} ... d_1 d_0)_2 = \\sum_{i=0}^n d_i \\cdot 2^i$$
- **Chuyển đổi nhị phân $\\to$ thập phân:** Nhân từng chữ số với lũy thừa cơ số 2 tương ứng rồi cộng lại.
  *(Ví dụ: $1101_2 = 1 \\cdot 2^3 + 1 \\cdot 2^2 + 0 \\cdot 2^1 + 1 \\cdot 2^0 = 8 + 4 + 0 + 1 = 13_{10}$).*
- **Chuyển đổi thập phân $\\to$ nhị phân:** Chia liên tiếp phần nguyên cho 2, ghi lại các số dư, sau đó viết các số dư theo thứ tự ngược lại từ dưới lên trên.

### 2. Các phép toán số học nhị phân

- **Quy tắc cộng nhị phân:**
  - $0 + 0 = 0$
  - $0 + 1 = 1$
  - $1 + 0 = 1$
  - $1 + 1 = 10$ (viết 0, nhớ 1 sang hàng bên trái)
  - $1 + 1 + 1 = 11$ (viết 1, nhớ 1)
- **Quy tắc nhân nhị phân:** Tương tự nhân thập phân nhưng chỉ gồm các phép nhân với 0 và 1, sau đó cộng các tích riêng đã dịch chuyển vị trí.

### 3. Biểu diễn số nguyên có dấu trong máy tính

- **Phương pháp mã bù hai (Two's Complement):**
  - Là phương pháp chuẩn được hầu hết các kiến trúc máy tính hiện đại sử dụng để biểu diễn số nguyên có dấu.
  - **Cách tạo số âm bù 2:** Đảo tất cả các bit của số dương (0 thành 1, 1 thành 0) rồi cộng thêm 1.
  - **Ưu điểm vượt trội:** Phép trừ được thực hiện hoàn toàn giống như phép cộng, và chỉ có một biểu diễn duy nhất cho số 0.
- **Hiện tượng tràn số (Overflow):** Xảy ra khi kết quả tính toán vượt quá giới hạn miền giá trị mà số bit quy định có thể biểu diễn được.`
    },

    5: {
      num: 5,
      topic: 1,
      title: "Dữ liệu lôgic",
      orientation: "CS",
      body: `### 1. Khái niệm kiểu dữ liệu lôgic

- **Mệnh đề logic:** Là câu khẳng định chỉ nhận một trong hai giá trị chân lí: **ĐÚNG (True)** hoặc **SAI (False)**.
- **Biểu diễn trong máy tính:** Trong mạch điện tử và lập trình, giá trị Đúng thường được quy ước tương ứng với bit 1 (hoặc mức điện áp cao), giá trị Sai tương ứng với bit 0 (mức điện áp thấp).

### 2. Các phép toán lôgic cơ bản

- **Phép VÀ (AND):** Kí hiệu $\\land$ hoặc toán tử \`and\`. Kết quả chỉ Đúng khi cả hai đầu vào đều Đúng.
  $$1 \\text{ AND } 1 = 1;\\quad 1 \\text{ AND } 0 = 0;\\quad 0 \\text{ AND } 0 = 0$$
- **Phép HOẶC bao hàm (OR):** Kí hiệu $\\lor$ hoặc toán tử \`or\`. Kết quả Đúng khi có ít nhất một đầu vào Đúng.
  $$1 \\text{ OR } 0 = 1;\\quad 0 \\text{ OR } 1 = 1;\\quad 0 \\text{ OR } 0 = 0$$
- **Phép PHỦ ĐỊNH (NOT):** Kí hiệu $\\neg$ hoặc toán tử \`not\`. Đảo ngược giá trị chân lí: $\\text{NOT } 1 = 0;\\, \\text{NOT } 0 = 1$.
- **Phép HOẶC loại trừ (XOR):** Kí hiệu $\\oplus$. Kết quả Đúng khi hai đầu vào có giá trị khác nhau; kết quả Sai khi hai đầu vào giống nhau:
  $$1 \\oplus 0 = 1;\\quad 0 \\oplus 1 = 1;\\quad 1 \\oplus 1 = 0;\\quad 0 \\oplus 0 = 0$$

### 3. Ứng dụng trong mạch máy tính và điều kiện lập trình

- Các phép toán logic là nền tảng để thiết kế các cổng logic (Logic Gates) cấu thành nên bộ xử lí CPU (bộ số học và logic ALU).
- Trong lập trình, các biểu thức logic được sử dụng để điều khiển các cấu trúc rẽ nhánh (\`if\`) và cấu trúc lặp (\`while\`).`
    },

    6: {
      num: 6,
      topic: 1,
      title: "Dữ liệu âm thanh và hình ảnh",
      orientation: "Chung",
      body: `### 1. Số hóa âm thanh

- **Bản chất âm thanh:** Là sóng cơ học liên tục trong tự nhiên. Để máy tính xử lí được, tín hiệu liên tục phải được số hóa qua hai bước:
  - **Lấy mẫu (Sampling):** Đo biên độ tín hiệu âm thanh tại các khoảng thời gian đều đặn. Tần số lấy mẫu (Sampling Rate, đơn vị Hz) là số lần đo trong một giây (ví dụ: đĩa CD chuẩn lấy mẫu 44.100 Hz).
  - **Lượng tử hóa (Quantization):** Làm tròn giá trị biên độ đo được thành các mức rời rạc và mã hóa bằng các bit nhị phân (độ sâu bit, ví dụ: 16 bit hoặc 24 bit).
- **Công thức ước lượng dung lượng âm thanh không nén:**
  $$\\text{Dung lượng (Byte)} = \\frac{\\text{Thời gian (s)} \\times \\text{Tần số lấy mẫu (Hz)} \\times \\text{Độ sâu bit} \\times \\text{Số kênh}}{8}$$

### 2. Số hóa hình ảnh: Ảnh Raster và Đồ họa Vector

- **Ảnh Raster (Bitmap):**
  - Được cấu tạo từ một lưới các điểm ảnh (Pixel) hình vuông xếp liền nhau.
  - **Độ phân giải:** Số lượng pixel theo chiều ngang $\\times$ chiều dọc (ví dụ: $1920 \\times 1080$).
  - **Độ sâu màu (Color Depth):** Số bit dùng để lưu mã màu cho mỗi pixel (ví dụ: True Color 24 bit gồm 8 bit Đỏ, 8 bit Xanh lá, 8 bit Xanh dương - RGB).
  - *Nhược điểm:* Khi phóng to hình ảnh sẽ bị vỡ hạt, răng cưa. Định dạng phổ biến: JPEG, PNG, BMP.
- **Đồ họa Vector:**
  - Hình ảnh được định nghĩa bằng các công thức toán học (tọa độ điểm, đường thẳng, đường cong Bézier, đa giác, màu tô).
  - *Ưu điểm vượt trội:* Có thể phóng to hay thu nhỏ tùy ý mà hình vẽ vẫn luôn sắc nét, không bị vỡ nét; dung lượng tệp thường nhỏ. Thích hợp cho thiết kế logo, biểu đồ, icon. Định dạng phổ biến: SVG, EPS, AI.

### 3. Nén dữ liệu đa phương tiện

- **Nén không mất dữ liệu (Lossless):** Khôi phục chính xác 100% dữ liệu gốc khi giải nén (ví dụ: ZIP, PNG, FLAC).
- **Nén mất dữ liệu (Lossy):** Loại bỏ bớt một phần thông tin mà mắt người hoặc tai người khó nhận biết để đạt tỉ lệ nén rất cao (ví dụ: JPEG, MP3, MP4).`
    },

    7: {
      num: 7,
      topic: 1,
      title: "Thực hành sử dụng thiết bị số thông dụng",
      orientation: "ICT",
      body: `### 1. Nhận biết và cấu hình thiết bị trợ thủ số cá nhân (PDA/Smartphone/Tablet)

- **Hệ điều hành di động phổ biến:** Android, iOS.
- **Thành phần giao diện cơ bản:** Màn hình chính (Home Screen), khay ứng dụng, thanh trạng thái (Status Bar) hiển thị pin/sóng/thời gian, thanh điều hướng (Back, Home, Recent Apps).
- **Các kết nối không dây:** Wi-Fi, Bluetooth (kết nối tai nghe, đồng hồ, loa), mạng di động 4G/5G, định vị toàn cầu GPS.

### 2. Kĩ năng quản lí tệp và dữ liệu trên thiết bị số

- **Cấu trúc thư mục phân cấp:** Bộ nhớ trong (Internal Storage) và thẻ nhớ ngoài (SD Card) được tổ chức theo mô hình cây thư mục gồm các thư mục gốc, thư mục con và tệp tin.
- **Các thao tác tệp cơ bản:** Xem thông tin tệp, tạo thư mục mới, sao chép (Copy), di chuyển (Move), đổi tên (Rename), chia sẻ (Share) và xóa (Delete).
- **Đồng bộ hóa đám mây (Cloud Sync):** Kết nối tài khoản Google Drive, iCloud, OneDrive để tự động sao lưu danh bạ, ảnh, video và tài liệu học tập.

### 3. An toàn dữ liệu trong thực hành

- Luôn kiểm tra dung lượng bộ nhớ trống trước khi tải tệp lớn.
- Không tùy tiện xóa các tệp hệ thống hoặc dữ liệu người khác khi dùng chung thiết bị.
- Đặt mật khẩu khóa màn hình (mã PIN, vân tay, nhận diện khuôn mặt) để bảo mật thiết bị cá nhân.`
    },

    // Chủ đề 2: Mạng máy tính và Internet
    8: {
      num: 8,
      topic: 2,
      title: "Mạng máy tính trong cuộc sống hiện đại",
      orientation: "Chung",
      body: `### 1. Khái niệm và các thành phần của mạng máy tính

- **Mạng máy tính (Computer Network):** Là tập hợp các thiết bị máy tính được kết nối với nhau bằng các phương tiện truyền dẫn (dây cáp mạng hoặc sóng vô tuyến) để chia sẻ tài nguyên và trao đổi dữ liệu.
- **Các thành phần cốt lõi:**
  - **Thiết bị đầu cuối (End Devices):** Máy tính để bàn, laptop, máy chủ, máy in, điện thoại thông minh, camera an ninh.
  - **Thiết bị kết nối mạng (Network Devices):** Bộ chuyển mạch (Switch - chuyển tiếp gói tin trong mạng nội bộ), Bộ định tuyến (Router - định tuyến đường đi giữa các mạng khác nhau), Điểm truy cập không dây (Access Point).
  - **Giao thức mạng (Protocol):** Bộ quy tắc chuẩn để các thiết bị hiểu và giao tiếp được với nhau, phổ biến nhất là bộ giao thức TCP/IP.

### 2. Phân loại mạng: LAN và WAN

- **Mạng cục bộ (LAN - Local Area Network):** Kết nối các máy tính trong một phạm vi địa lí nhỏ như một phòng học, một tòa nhà hay một cơ quan. Tốc độ truyền cao, độ trễ thấp.
- **Mạng diện rộng (WAN - Wide Area Network):** Kết nối các mạng LAN trên phạm vi địa lí rộng lớn (quốc gia, châu lục hoặc toàn cầu). **Internet** chính là mạng WAN lớn nhất hành tinh.

### 3. Các công nghệ mạng hiện đại: Điện toán đám mây và IoT

- **Điện toán đám mây (Cloud Computing):** Cung cấp tài nguyên tính toán (máy chủ, lưu trữ, cơ sở dữ liệu, phần mềm) theo nhu cầu qua Internet (như Google Drive, AWS, Microsoft Azure).
- **Internet vạn vật (IoT - Internet of Things):** Mạng lưới hàng tỉ thiết bị vật lí được gắn cảm biến và phần mềm để tự động kết nối, chia sẻ dữ liệu qua Internet (như đồng hồ thông minh, nông nghiệp thông minh, xe thông minh).`
    },

    9: {
      num: 9,
      topic: 2,
      title: "An toàn trên không gian mạng",
      orientation: "Chung",
      body: `### 1. Các nguy cơ rủi ro trên không gian mạng

- **Mã độc (Malware):** Gồm virus, sâu máy tính (worm), mã độc tống tiền (ransomware), phần mềm gián điệp (spyware) lây nhiễm qua tệp tải về hoặc USB.
- **Tấn công giả mạo (Phishing):** Kẻ xấu tạo các trang web hoặc gửi email/tin nhắn giả mạo các tổ chức uy tín (ngân hàng, mạng xã hội) nhằm lừa nạn nhân nhập tài khoản và mật khẩu.
- **Bắt nạt qua mạng (Cyberbullying):** Hành vi đe dọa, vu khống, bôi nhọ, xúc phạm danh dự người khác trên các diễn đàn và mạng xã hội.

### 2. Các biện pháp bảo vệ tài khoản và thiết bị

- **Nguyên tắc mật khẩu an toàn:** Dài từ 12 kí tự trở lên, kết hợp chữ hoa, chữ thường, chữ số và kí tự đặc biệt; không dùng thông tin cá nhân dễ đoán; không dùng chung một mật khẩu cho nhiều dịch vụ.
- **Xác thực hai yếu tố (2FA - Two-Factor Authentication):** Bắt buộc kích hoạt để bảo vệ tài khoản bằng lớp bảo mật thứ hai (mã OTP qua SMS hoặc ứng dụng Authenticator).
- **Cập nhật hệ điều hành & phần mềm bảo mật:** Cập nhật thường xuyên các bản vá lỗi bảo mật để ngăn ngừa các lỗ hổng bị khai thác.

### 3. Quy trình xử lí khi gặp sự cố an ninh mạng

- **Bước 1:** Lập tức ngắt kết nối mạng (rút dây mạng hoặc tắt Wi-Fi).
- **Bước 2:** Đổi mật khẩu ngay lập tức từ một thiết bị sạch và an toàn khác.
- **Bước 3:** Chụp ảnh màn hình lưu giữ bằng chứng vi phạm.
- **Bước 4:** Báo cáo sự việc cho phụ huynh, thầy cô giáo hoặc cơ quan chức năng có thẩm quyền.`
    },

    10: {
      num: 10,
      topic: 2,
      title: "Thực hành khai thác tài nguyên trên Internet",
      orientation: "ICT",
      body: `### 1. Kĩ thuật tìm kiếm thông tin nâng cao với Google Search

- **Toán tử ngoặc kép \`"cụm từ"\`:** Tìm kiếm chính xác tuyệt đối cụm từ theo đúng thứ tự các từ.
  *(Ví dụ: \`"định luật bảo toàn động lượng"\`)*.
- **Toán tử loại trừ \`-từ_khóa\`:** Loại bỏ các kết quả chứa từ khóa phía sau dấu trừ.
  *(Ví dụ: \`python -snake\` để tìm ngôn ngữ lập trình Python mà không hiển thị loài trăn/rắn)*.
- **Toán tử tìm trên trang đích \`site:tên_miền\`:** Chỉ tìm kiếm nội dung trên một website cụ thể.
  *(Ví dụ: \`tuyển sinh 2026 site:moet.gov.vn\`)*.
- **Toán tử định dạng tệp \`filetype:định_dạng\`:** Tìm các tệp tài liệu chuyên dụng (pdf, docx, pptx).
  *(Ví dụ: \`giáo trình tin học 10 filetype:pdf\`)*.

### 2. Kĩ năng đánh giá độ tin cậy của thông tin trên mạng

- **Tiêu chí tác giả/tổ chức:** Nguồn tin đến từ cơ quan nhà nước, trường đại học (.edu, .gov) hay một trang blog cá nhân vô danh?
- **Tiêu chí tính cập nhật:** Bài viết được xuất bản hoặc chỉnh sửa gần nhất vào thời gian nào?
- **Tiêu chí bằng chứng:** Bài viết có trích dẫn nguồn số liệu, tài liệu tham khảo rõ ràng hay chỉ là phỏng đoán cảm tính?
- **Kiểm chứng chéo:** So sánh thông tin với ít nhất 2 đến 3 nguồn tin độc lập uy tín khác trước khi tin tưởng và chia sẻ.`
    },

    // Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số
    11: {
      num: 11,
      topic: 3,
      title: "Ứng xử trên môi trường số. Nghĩa vụ tôn trọng bản quyền",
      orientation: "Chung",
      body: `### 1. Văn hóa ứng xử trên mạng (Netiquette)

- **Tôn trọng và lịch sự:** Luôn giữ thái độ nhã nhặn, không dùng từ ngữ thô tục, xúc phạm, phân biệt đối xử hay kích động bạo lực.
- **Dấu chân kĩ thuật số (Digital Footprint):** Mọi hành vi, bài đăng, bình luận, hình ảnh chia sẻ trên Internet đều để lại dấu vết lâu dài và có thể ảnh hưởng trực tiếp đến danh tiếng, học tập và cơ hội nghề nghiệp tương lai.
- **Tôn trọng quyền riêng tư:** Tuyệt đối không đăng tải hình ảnh, ghi âm hoặc thông tin cá nhân của người khác lên mạng khi chưa được sự cho phép rõ ràng.

### 2. Quyền tác giả và nghĩa vụ tôn trọng bản quyền phần mềm

- **Quyền tác giả (Copyright):** Là quyền của tổ chức, cá nhân đối với tác phẩm do mình sáng tạo ra hoặc sở hữu (văn bản, phần mềm, âm nhạc, tranh ảnh, video). Kí hiệu: ©.
- **Hành vi vi phạm bản quyền:** Sử dụng phần mềm bẻ khóa (crack), sao chép tác phẩm của người khác mà không xin phép, tự nhận sản phẩm của người khác là của mình (đạo văn).
- **Giấy phép phần mềm nguồn mở và Creative Commons (CC):**
  - **Phần mềm nguồn mở (Open Source):** Cho phép người dùng tự do xem mã nguồn, sửa đổi và phân phối lại (như Linux, Inkscape, Python).
  - **Giấy phép Creative Commons (CC):** Hệ thống giấy phép linh hoạt giúp tác giả cấp quyền cho cộng đồng sử dụng tác phẩm theo các điều kiện cụ thể (CC-BY: ghi nhận tác giả; CC-NC: phi thương mại...).`
    },

    // Chủ đề 4: Ứng dụng tin học (Đồ họa Inkscape)
    12: {
      num: 12,
      topic: 4,
      title: "Phần mềm thiết kế đồ họa",
      orientation: "ICT",
      body: `### 1. Giới thiệu phần mềm đồ họa vector Inkscape

- **Inkscape là gì?** Là phần mềm thiết kế đồ họa vector mã nguồn mở hoàn toàn miễn phí, chuyên nghiệp, hỗ trợ định dạng chuẩn mở **SVG (Scalable Vector Graphics)**.
- **Các khu vực chính trên giao diện Inkscape:**
  - **Thanh bảng chọn (Menu Bar):** Chứa các trình đơn chức năng chính như File, Edit, Object, Path, Text.
  - **Hộp công cụ (Toolbox):** Nằm dọc mép trái màn hình, chứa các công cụ vẽ hình khối, bút vẽ, chọn đối tượng, văn bản.
  - **Thanh điều khiển thuộc tính (Tool Controls Bar):** Nằm ngang phía trên, thay đổi linh hoạt tùy theo công cụ đang được kích hoạt.
  - **Vùng làm việc và trang vẽ (Canvas & Page Border):** Nơi hiển thị và thao tác vẽ các đối tượng đồ họa.
  - **Bảng màu (Palette) và Thanh trạng thái (Status Bar):** Nằm phía dưới đáy màn hình.

### 2. Các công cụ vẽ hình cơ bản

- **Công cụ chọn (Select Tool - F1 / phím S):** Dùng để chọn, di chuyển, thay đổi kích thước, kéo dãn và xoay các đối tượng.
- **Công cụ hình chữ nhật (Rectangle Tool - F4 / phím R):** Vẽ hình chữ nhật, hình vuông (giữ phím \`Ctrl\` khi kéo chuột), bo tròn góc (kéo chốt tròn).
- **Công cụ hình elip (Ellipse Tool - F5 / phím E):** Vẽ hình elip, hình tròn (giữ \`Ctrl\`), vẽ cung hoặc quạt tròn.
- **Công cụ đa giác và ngôi sao (Stars and Polygons - phím *):** Vẽ đa giác đều hoặc hình sao nhiều cánh với các tham số góc bo, độ xoắn.`
    },

    13: {
      num: 13,
      topic: 4,
      title: "Bổ sung các đối tượng đồ họa",
      orientation: "ICT",
      body: `### 1. Thiết lập màu tô (Fill) và màu viền (Stroke)

- **Hộp thoại Fill and Stroke (\`Ctrl + Shift + F\`):**
  - **Thẻ Fill:** Thiết lập màu bên trong đối tượng (Tô màu đơn sắc Flat color, chuyển màu tuyến tính Linear Gradient, chuyển màu xuyên tâm Radial Gradient, hoặc không tô màu No paint).
  - **Thẻ Stroke paint:** Thiết lập màu cho đường viền bao quanh đối tượng.
  - **Thẻ Stroke style:** Chỉnh độ dày của nét vẽ (Width), kiểu nét (nét liền, nét đứt, chấm chấm), kiểu góc nối và đầu mút.

### 2. Các phép ghép hình trong thực đơn Path (Boolean Operations)

- **Hợp (Union - \`Ctrl + +\`):** Gộp hai hay nhiều đối tượng thành một hình duy nhất bao phủ toàn bộ diện tích của các hình gốc.
- **Hiệu (Difference - \`Ctrl + -\`):** Lấy hình bên dưới trừ đi phần giao nhau với hình bên trên (hình bên trên biến mất).
- **Giao (Intersection - \`Ctrl + *\`):** Chỉ giữ lại phần diện tích chung của các hình được chọn.
- **Hiệu đối xứng (Exclusion - \`Ctrl + ^\`):** Giữ lại toàn bộ phần diện tích của hai hình ngoại trừ phần giao nhau ở giữa.
- **Chia (Division - \`Ctrl + /\`):** Hình bên trên cắt hình bên dưới thành các mảnh rời nhau theo đường viền.`
    },

    14: {
      num: 14,
      topic: 4,
      title: "Làm việc với đối tượng đường và văn bản",
      orientation: "ICT",
      body: `### 1. Vẽ và chỉnh sửa đường cong Bézier

- **Công cụ bút vẽ Bézier (Draw Bezier Curves - Shift + F6 / phím B):**
  - Nhấp chuột từng điểm để vẽ các đoạn thẳng gấp khúc.
  - Nhấp và kéo chuột (drag) để tạo các điểm uốn cong mượt mà.
  - Nhấp đúp chuột hoặc bấm \`Enter\` để kết thúc đường vẽ hở; nhấp vào điểm bắt đầu để khép kín đường vẽ.
- **Công cụ tinh chỉnh nút (Edit paths by nodes - F2 / phím N):**
  - Cho phép chọn, di chuyển các nút neo (Nodes).
  - Thêm nút mới (nhấp đúp trên đường), xóa nút (phím \`Delete\`).
  - Điều chỉnh hai tay nắm tiếp tuyến (Control Handles) để uốn nắn độ cong của đường vẽ.
- **Chuyển hình khối thành đường:** Thực đơn \`Path\` $\\to$ \`Object to Path\` (\`Ctrl + Shift + C\`).

### 2. Chèn và định dạng văn bản trong Inkscape

- **Công cụ văn bản (Text Tool - F8 / phím T):** Nhấp chuột lên trang để gõ chữ tự do hoặc kéo chuột tạo khung chứa văn bản.
- **Định dạng văn bản:** Chọn phông chữ, cỡ chữ, kiểu in đậm/nghiêng, căn lề trái/phải/giữa trên thanh thuộc tính.
- **Hiệu ứng chữ theo đường dẫn (Put on Path):** Chọn đồng thời đối tượng văn bản và một đường cong, vào \`Text\` $\\to$ \`Put on Path\` để uốn lượn dòng chữ theo đường cong mềm mại.`
    },

    15: {
      num: 15,
      topic: 4,
      title: "Hoàn thiện hình ảnh đồ họa",
      orientation: "ICT",
      body: `### 1. Quy trình chuẩn thiết kế sản phẩm đồ họa số

- **Bước 1: Xác định mục tiêu và đối tượng:** Sản phẩm là gì (logo, banner, infographic, poster)? Dành cho ai xem? Thông điệp cần truyền tải là gì?
- **Bước 2: Phác thảo ý tưởng (Sketch):** Vẽ nháp bố cục, cấu trúc các khối chính và vị trí đặt chữ trên giấy.
- **Bước 3: Dựng hình vector trong Inkscape:** Sử dụng các công cụ vẽ khối cơ bản, bút Bézier và các phép ghép Path để vẽ chi tiết.
- **Bước 4: Phối màu và phân cấp thị giác:** Lựa chọn bảng màu hài hòa (tối đa 3-4 màu chủ đạo), đảm bảo độ tương phản cao giữa chữ và nền để dễ đọc.
- **Bước 5: Kiểm tra và tinh chỉnh:** Soát lỗi chính tả, căn lề thẳng hàng (\`Align and Distribute - Ctrl + Shift + A\`), kiểm tra bản quyền các hình ảnh đưa vào.

### 2. Lưu trữ và xuất bản sản phẩm

- **Lưu tệp nguồn SVG (\`Ctrl + S\`):** Luôn giữ tệp nguồn gốc định dạng \`.svg\` để có thể chỉnh sửa lại các lớp (layers) và đối tượng bất kì lúc nào.
- **Xuất ảnh định dạng phổ biến (\`Ctrl + Shift + E\`):** Xuất ra tệp ảnh Raster (\`.png\`) với độ phân giải cao (300 DPI khi in ấn hoặc 96 DPI cho hiển thị trên website) hoặc xuất sang định dạng \`.pdf\`.`
    },

    // Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)
    16: {
      num: 16,
      topic: 5,
      title: "Ngôn ngữ lập trình bậc cao và Python",
      orientation: "CS",
      body: `### 1. Ngôn ngữ lập trình bậc cao

- **Ngôn ngữ máy (Machine Language):** Là ngôn ngữ duy nhất máy tính hiểu trực tiếp, chỉ gồm các chỉ thị nhị phân 0 và 1. Rất khó nhớ và khó viết đối với con người.
- **Ngôn ngữ bậc cao (High-level Language):** Gần gũi với ngôn ngữ tự nhiên của con người (tiếng Anh) và kí hiệu toán học, độc lập với phần cứng máy tính (như C/C++, Java, Python).
- **Chương trình dịch:** Cần trình thông dịch (Interpreter) hoặc trình biên dịch (Compiler) để dịch mã nguồn bậc cao sang mã máy.

### 2. Giới thiệu ngôn ngữ Python

- **Đặc điểm nổi bật:** Cú pháp sáng sủa, ngắn gọn, dễ học, hỗ trợ đa nền tảng (Windows, macOS, Linux) và sở hữu hệ sinh thái thư viện phong phú (AI, Data Science, Web).
- **Môi trường làm việc:** Chế độ gõ lệnh trực tiếp (Interactive Mode) và Chế độ soạn thảo tệp chương trình (Script Mode với phần mở rộng \`.py\`).
- **Quy tắc chú thích:** Dấu thăng \`#\` đánh dấu bắt đầu dòng chú thích; trình thông dịch sẽ bỏ qua không thực thi.

\`\`\`python
# Chương trình Python đầu tiên
print("Xin chào các bạn học sinh lớp 10!")
\`\`\``
    },

    17: {
      num: 17,
      topic: 5,
      title: "Biến và lệnh gán",
      orientation: "CS",
      body: `### 1. Khái niệm biến và quy tắc đặt tên biến

- **Biến (Variable):** Là một vùng nhớ được đặt tên dùng để lưu trữ giá trị trong quá trình thực thi chương trình.
- **Quy tắc đặt tên biến trong Python:**
  - Bắt đầu bằng một chữ cái (a-z, A-Z) hoặc dấu gạch dưới \`_\`.
  - Không được bắt đầu bằng chữ số.
  - Chỉ chứa chữ cái, chữ số và dấu gạch dưới; không chứa khoảng trắng hay kí tự đặc biệt (\`@, #, $, %\`).
  - Không được trùng với các từ khóa định sẵn của Python (\`if, else, for, while, def...\`).
  - Python phân biệt chữ hoa và chữ thường (\`x\` khác \`X\`).

### 2. Lệnh gán và các kiểu dữ liệu cơ sở

- **Lệnh gán:** Cú pháp \`tên_biến = biểu_thức\`. Máy tính tính giá trị vế phải rồi nạp vào biến bên trái.
- **Các kiểu dữ liệu cơ bản:**
  - Số nguyên: \`int\` (ví dụ: \`age = 16\`)
  - Số thực: \`float\` (ví dụ: \`pi = 3.14159\`)
  - Chuỗi kí tự: \`str\` (ví dụ: \`name = "Nguyễn Văn A"\`)
  - Kiểu logic: \`bool\` (nhận giá trị \`True\` hoặc \`False\`)
- **Các phép toán số học:**
  - Cộng \`+\`, trừ \`-\`, nhân \`*\`, chia thực \`/\` (kết quả luôn là float).
  - Chia lấy phần nguyên: \`//\` (ví dụ: \`7 // 2 = 3\`).
  - Chia lấy phần dư: \`%\` (ví dụ: \`7 % 2 = 1\`).
  - Lũy thừa: \`**\` (ví dụ: \`2 ** 3 = 8\`).`
    },

    18: {
      num: 18,
      topic: 5,
      title: "Các lệnh vào ra đơn giản",
      orientation: "CS",
      body: `### 1. Nhập dữ liệu với hàm \`input()\`

- Hàm \`input("Thông báo: ")\` tạm dừng chương trình để nhận dữ liệu gõ từ bàn phím.
- **LƯU Ý CỐT LÕI:** Giá trị hàm \`input()\` trả về **luôn luôn là kiểu chuỗi kí tự (\`str\`)**.
- Muốn tính toán số học, ta bắt buộc phải ép kiểu sang số nguyên bằng \`int()\` hoặc số thực bằng \`float()\`:

\`\`\`python
# Nhập số nguyên n và số thực x
n = int(input("Nhập số nguyên n: "))
x = float(input("Nhập số thực x: "))
print("Tổng n + x =", n + x)
\`\`\`

### 2. Xuất dữ liệu với hàm \`print()\`

- In một hoặc nhiều giá trị phân tách bằng dấu phẩy: \`print(val1, val2, ...)\`.
- Tham số \`sep\`: Kí tự phân cách giữa các đối số (mặc định là khoảng trắng \` \`).
- Tham số \`end\`: Kí tự in ở cuối dòng (mặc định là xuống dòng \`\\n\`).
- Định dạng chuỗi hiện đại với **F-string**: \`print(f"Giá trị là {x:.2f}")\`.`
    },

    19: {
      num: 19,
      topic: 5,
      title: "Câu lệnh rẽ nhánh if",
      orientation: "CS",
      body: `### 1. Các toán tử so sánh và biểu thức điều kiện

- Bằng nhau: \`==\` (phân biệt với \`=\` là phép gán).
- Khác nhau: \`!=\`.
- Lớn hơn: \`>\`, nhỏ hơn: \`<\`, lớn hơn hoặc bằng: \`>=\`, nhỏ hơn hoặc bằng: \`<=\`.
- Kết hợp các điều kiện logic bằng \`and\`, \`or\`, \`not\`.

### 2. Cú pháp các dạng rẽ nhánh

- **Dạng thiếu:**

\`\`\`python
if điều_kiện:
    khối_lệnh_khi_đúng
\`\`\`

- **Dạng đủ:**

\`\`\`python
if điều_kiện:
    khối_lệnh_khi_đúng
else:
    khối_lệnh_khi_sai
\`\`\`

- **Dạng nhiều nhánh (\`elif\`):**

\`\`\`python
diem = float(input("Nhập điểm thi: "))
if diem >= 8.0:
    print("Học lực Giỏi")
elif diem >= 6.5:
    print("Học lực Khá")
elif diem >= 5.0:
    print("Học lực Trung bình")
else:
    print("Học lực Yếu")
\`\`\`

- **QUY TẮC THỤT LỀ (Indentation):** Python bắt buộc thụt lề thống nhất (thường là 4 dấu cách) để xác định khối lệnh thuộc nhánh.`
    },

    20: {
      num: 20,
      topic: 5,
      title: "Câu lệnh lặp for",
      orientation: "CS",
      body: `### 1. Cấu trúc lặp với số lần biết trước

- Câu lệnh \`for\` được dùng để duyệt qua từng phần tử của một tập hợp hoặc thực hiện một khối lệnh với số lần lặp định trước.

### 2. Hàm sinh dãy số \`range()\`

- \`range(n)\`: Tạo dãy số nguyên từ $0$ đến $n - 1$ (gồm $n$ phần tử, **không bao gồm $n$**).
- \`range(start, stop)\`: Tạo dãy số nguyên từ \`start\` đến \`stop - 1\`.
- \`range(start, stop, step)\`: Dãy số từ \`start\` đến trước \`stop\`, mỗi bước nhảy tăng \`step\` đơn vị (có thể lùi với \`step < 0\`).

\`\`\`python
# Tính tổng các số từ 1 đến 100
tong = 0
for i in range(1, 101):
    tong += i
print(f"Tổng S = {tong}")
\`\`\`

### 3. Biến tích lũy trong vòng lặp

- Khởi tạo giá trị ban đầu trước vòng lặp (\`tong = 0\`, \`tich = 1\`, \`dem = 0\`).
- Cập nhật giá trị biến tích lũy sau mỗi lần lặp.`
    },

    21: {
      num: 21,
      topic: 5,
      title: "Câu lệnh lặp while",
      orientation: "CS",
      body: `### 1. Cấu trúc lặp với số lần chưa biết trước

- Câu lệnh \`while\` lặp lại khối lệnh bên trong chừng nào điều kiện lặp vẫn còn mang giá trị \`True\`.
- Điều kiện lặp được kiểm tra trước mỗi vòng lặp; nếu điều kiện mang giá trị \`False\` ngay từ đầu, khối lệnh sẽ không thực hiện lần nào.

\`\`\`python
# Tìm chữ số lớn nhất của số nguyên dương n
n = int(input("Nhập số nguyên dương n: "))
max_d = 0
while n > 0:
    d = n % 10
    if d > max_d:
        max_d = d
    n = n // 10
print(f"Chữ số lớn nhất là: {max_d}")
\`\`\`

### 2. Lỗi vòng lặp vô hạn (Infinite Loop)

- Xảy ra khi điều kiện của \`while\` luôn luôn đúng và không có biến nào thay đổi để đưa điều kiện về \`False\`.
- Cần đảm bảo bên trong thân vòng lặp luôn có câu lệnh cập nhật biến kiểm soát để tiến tới điểm dừng.`
    },

    22: {
      num: 22,
      topic: 5,
      title: "Kiểu dữ liệu danh sách",
      orientation: "CS",
      body: `### 1. Khái niệm kiểu danh sách (List)

- Danh sách là một tập hợp các phần tử có thứ tự và có thể thay đổi được (mutable).
- Được đặt trong cặp dấu ngoặc vuông \`[]\`, các phần tử phân tách bởi dấu phẩy.
- Danh sách rỗng: \`a = []\`.

### 2. Hệ thống chỉ số (Index) và lát cắt (Slicing)

- **Chỉ số dương:** Đếm từ trái sang phải, bắt đầu từ $0$ đến $n - 1$.
- **Chỉ số âm:** Đếm từ phải sang trái, phần tử cuối cùng có chỉ số là $-1$, áp chót là $-2$.
- **Độ dài danh sách:** Dùng hàm \`len(a)\`.
- **Lát cắt \`a[start:stop]\`:** Lấy danh sách con từ vị trí \`start\` đến vị trí trước \`stop\`.

\`\`\`python
a = [10, 20, 30, 40, 50]
print("Phần tử đầu:", a[0])      # 10
print("Phần tử cuối:", a[-1])     # 50
print("Lát cắt a[1:4]:", a[1:4])  # [20, 30, 40]
\`\`\``
    },

    23: {
      num: 23,
      topic: 5,
      title: "Một số lệnh làm việc với dữ liệu danh sách",
      orientation: "CS",
      body: `### 1. Các phương thức thao tác danh sách thông dụng

- \`a.append(x)\`: Thêm phần tử $x$ vào cuối danh sách.
- \`a.insert(i, x)\`: Chèn phần tử $x$ vào vị trí chỉ số $i$.
- \`a.remove(x)\`: Xóa phần tử đầu tiên trong danh sách có giá trị bằng $x$ (báo lỗi \`ValueError\` nếu $x$ không có trong danh sách).
- \`del a[i]\`: Xóa phần tử tại vị trí chỉ số $i$.
- \`a.pop(i)\`: Lấy ra và xóa phần tử tại vị trí $i$ (mặc định lấy phần tử cuối).
- \`a.clear()\`: Xóa toàn bộ các phần tử trong danh sách.
- \`x in a\`: Toán tử kiểm tra sự tồn tại của $x$ trong danh sách (trả về \`True\` hoặc \`False\`).

### 2. Duyệt qua các phần tử của danh sách

- **Duyệt theo giá trị:** \`for x in a:\` (khi chỉ cần xem và xử lí giá trị).
- **Duyệt theo chỉ số:** \`for i in range(len(a)):\` (khi cần cập nhật giá trị \`a[i]\`).`
    },

    24: {
      num: 24,
      topic: 5,
      title: "Xâu kí tự",
      orientation: "CS",
      body: `### 1. Khái niệm và tính chất của xâu kí tự (String)

- Xâu là một dãy tuần tự các kí tự, được đặt trong cặp dấu nháy đơn \`'...\` hoặc nháy kép \`"..."\`. Xâu rỗng: \`""\`.
- **Tính chất bất biến (Immutable):** Không thể thay đổi trực tiếp từng kí tự trong xâu (ví dụ lệnh \`s[0] = 'H'\` sẽ gây lỗi \`TypeError\`). Muốn thay đổi ta phải tạo xâu mới.

### 2. Chỉ số và lát cắt trên xâu

- Tương tự như danh sách, xâu có chỉ số dương từ $0$ đến $\\text{len}(s) - 1$ và chỉ số âm từ $-1$ đến $-\\text{len}(s)$.
- Phép nối xâu bằng toán tử \`+\` và lặp xâu bằng toán tử \`*\`.
- Lấy độ dài xâu bằng hàm \`len(s)\`.

\`\`\`python
s = "Python"
print(s[0])       # 'P'
print(s[-1])      # 'n'
print(s[1:4])     # 'yth'
print(s + " 10")  # 'Python 10'
\`\`\``
    },

    25: {
      num: 25,
      topic: 5,
      title: "Một số lệnh làm việc với xâu kí tự",
      orientation: "CS",
      body: `### 1. Các phương thức tìm kiếm và kiểm tra xâu

- \`sub in s\`: Kiểm tra xâu con \`sub\` có nằm trong xâu \`s\` không.
- \`s.find(sub)\`: Trả về vị trí chỉ số xuất hiện đầu tiên của \`sub\` trong \`s\`; trả về $-1$ nếu không tìm thấy.
- \`s.count(sub)\`: Đếm số lần xuất hiện không chồng lấn của xâu con trong \`s\`.

### 2. Các phương thức biến đổi và tách nối xâu

- \`s.split(sep)\`: Tách xâu thành danh sách các từ dựa trên kí tự phân cách \`sep\` (mặc định tách theo khoảng trắng).
- \`sep.join(list_str)\`: Nối các phần tử của một danh sách chuỗi thành một xâu duy nhất, ngăn cách bởi \`sep\`.
- \`s.replace(old, new)\`: Thay thế tất cả các lần xuất hiện của \`old\` thành \`new\`.
- \`s.upper()\`, \`s.lower()\`: Chuyển xâu thành chữ in hoa hoặc chữ thường.
- \`s.strip()\`: Cắt bỏ các khoảng trắng thừa ở hai đầu xâu.`
    },

    26: {
      num: 26,
      topic: 5,
      title: "Hàm trong Python",
      orientation: "CS",
      body: `### 1. Khái niệm hàm (Function)

- Hàm là một khối lệnh được đặt tên, thực hiện một nhiệm vụ xác định và có thể tái sử dụng nhiều lần ở nhiều nơi trong chương trình.
- **Ý nghĩa:** Chia nhỏ bài toán phức tạp thành các bài toán con, tránh lặp lại mã nguồn, tăng tính mạch lạc và dễ dàng kiểm thử, bảo trì.

### 2. Cú pháp định nghĩa và gọi hàm

\`\`\`python
def ten_ham(tham_so_1, tham_so_2, ...):
    # Khối lệnh thực thi của thân hàm
    return gia_tri_tra_ve
\`\`\`

- Từ khóa \`def\` báo hiệu bắt đầu định nghĩa hàm.
- Lệnh \`return\` dùng để trả kết quả tính toán về cho nơi gọi hàm và lập tức kết thúc việc thực thi hàm. Nếu không có \`return\`, hàm trả về giá trị mặc định là \`None\`.`
    },

    27: {
      num: 27,
      topic: 5,
      title: "Tham số của hàm",
      orientation: "CS",
      body: `### 1. Phân biệt tham số và đối số

- **Tham số (Parameters):** Là các biến được khai báo trong phần định nghĩa hàm, đóng vai trò nhận dữ liệu đầu vào.
- **Đối số (Arguments):** Là các giá trị hoặc biểu thức thực tế được truyền vào khi gọi hàm.

### 2. Truyền tham số và trả về nhiều kết quả

- Khi gọi hàm, số lượng và thứ tự đối số truyền vào phải tương ứng với các tham số đã định nghĩa.
- Một hàm trong Python có thể trả về nhiều giá trị dưới dạng một bộ (tuple):

\`\`\`python
# Hàm tính chu vi và diện tích hình chữ nhật
def tinh_hcn(a, b):
    cv = (a + b) * 2
    dt = a * b
    return cv, dt

c, s = tinh_hcn(5, 3)
print(f"Chu vi: {c}, Diện tích: {s}")
\`\`\``
    },

    28: {
      num: 28,
      topic: 5,
      title: "Phạm vi của biến",
      orientation: "CS",
      body: `### 1. Biến cục bộ (Local Variable)

- Là biến được khai báo và khởi tạo bên trong một thân hàm.
- Biến cục bộ chỉ có giá trị và chỉ có thể truy cập được **bên trong phạm vi của chính hàm đó**. Khi hàm kết thúc, vùng nhớ của biến cục bộ được giải phóng.

### 2. Biến toàn cục (Global Variable)

- Là biến được khai báo ở chương trình chính (bên ngoài tất cả các hàm).
- Biến toàn cục có thể được đọc từ bất kì đâu trong chương trình.
- Nếu muốn thay đổi giá trị của biến toàn cục bên trong một thân hàm, ta phải sử dụng từ khóa \`global\`.

\`\`\`python
x = 10  # Biến toàn cục

def vi_du():
    global x
    y = 5  # Biến cục bộ
    x = x + y

vi_du()
print(x)  # In ra 15
\`\`\``
    },

    29: {
      num: 29,
      topic: 5,
      title: "Nhận biết lỗi chương trình",
      orientation: "CS",
      body: `### 1. Ba loại lỗi chương trình thường gặp

- **Lỗi cú pháp (Syntax Error):**
  - Vi phạm quy tắc ngữ pháp của ngôn ngữ Python (thiếu dấu hai chấm \`:\`, đóng mở ngoặc sai, thụt lề không hợp lệ \`IndentationError\`).
  - Chương trình bị dừng lại và không thể chạy được từ đầu.
- **Lỗi khi chạy (Runtime Error / Exception):**
  - Xảy ra trong quá trình chương trình đang thực thi (chia cho 0 \`ZeroDivisionError\`, truy cập chỉ số vượt quá phạm vi \`IndexError\`, sai kiểu dữ liệu \`TypeError\`, biến chưa khai báo \`NameError\`).
- **Lỗi ngữ nghĩa / Logic (Logic Error):**
  - Chương trình chạy trơn tru không báo lỗi nhưng cho kết quả sai lệch so với yêu cầu do thuật toán sai hoặc viết nhầm công thức.`
    },

    30: {
      num: 30,
      topic: 5,
      title: "Kiểm thử và gỡ lỗi chương trình",
      orientation: "CS",
      body: `### 1. Phương pháp kiểm thử chương trình (Testing)

- Kiểm thử là quá trình chạy chương trình với nhiều bộ dữ liệu thử nghiệm (Test cases) nhằm phát hiện lỗi tiềm ẩn.
- **Các ca kiểm thử cần xây dựng:**
  - Ca kiểm thử thông thường: Dữ liệu phổ biến đại diện.
  - Ca kiểm thử biên (Boundary values): Dữ liệu nhỏ nhất, lớn nhất, số 0, số âm, danh sách rỗng.
  - Ca kiểm thử dị thường: Dữ liệu sai định dạng để kiểm tra tính kiên cố của chương trình.

### 2. Kĩ thuật gỡ lỗi (Debugging)

- Đọc thông báo lỗi (Traceback) để xác định tệp, số dòng và nguyên nhân gây lỗi.
- Sử dụng lệnh \`print()\` để in giá trị các biến trung gian ở từng bước.
- Sử dụng công cụ Debugger trong IDE (như Thonny, VS Code) để đặt điểm dừng (Breakpoint) và chạy từng bước (Step by step).`
    },

    31: {
      num: 31,
      topic: 5,
      title: "Thực hành viết chương trình đơn giản",
      orientation: "CS",
      body: `### 1. Quy trình 5 bước xây dựng chương trình hoàn chỉnh

- **Bước 1: Xác định bài toán (I-P-O):** Nêu rõ dữ liệu đầu vào (Input), kết quả đầu ra (Output) và điều kiện ràng buộc.
- **Bước 2: Thiết kế thuật toán:** Mô tả từng bước xử lí bằng sơ đồ khối hoặc mã giả.
- **Bước 3: Viết mã nguồn (Coding):** Dùng cú pháp Python, đặt tên biến có nghĩa, chia nhỏ module bằng hàm.
- **Bước 4: Kiểm thử và tinh chỉnh:** Chạy thử với các bộ test cases và sửa chữa lỗi.
- **Bước 5: Hoàn thiện tài liệu:** Thêm các dòng chú thích (\`#\`) giải thích giải thuật.

### 2. Ví dụ chương trình giải phương trình bậc hai $ax^2 + bx + c = 0$

\`\`\`python
import math

def giai_pt_bac_hai(a, b, c):
    if a == 0:
        if b == 0:
            return "Vô số nghiệm" if c == 0 else "Vô nghiệm"
        return f"Một nghiệm x = {-c / b:.2f}"
    
    delta = b**2 - 4*a*c
    if delta < 0:
        return "Phương trình vô nghiệm"
    elif delta == 0:
        return f"Nghiệm kép x = {-b / (2*a):.2f}"
    else:
        x1 = (-b + math.sqrt(delta)) / (2*a)
        x2 = (-b - math.sqrt(delta)) / (2*a)
        return f"Hai nghiệm phân biệt: x1 = {x1:.2f}, x2 = {x2:.2f}"

print(giai_pt_bac_hai(1, -5, 6))  # x1 = 3.00, x2 = 2.00
\`\`\``
    },

    32: {
      num: 32,
      topic: 5,
      title: "Ôn tập lập trình Python",
      orientation: "CS",
      body: `### 1. Bản đồ tổng kết các cấu trúc lập trình Python 10

- **Cấu trúc dữ liệu:** \`int, float, bool, str, list\`.
- **Cấu trúc điều khiển:**
  - Tuần tự: Thực hiện từ trên xuống dưới.
  - Rẽ nhánh: \`if - elif - else\`.
  - Lặp: \`for\` (biết trước số lần) và \`while\` (lặp theo điều kiện).
- **Chương trình con (Hàm):** Định nghĩa \`def\`, truyền tham số và trả về kết quả qua \`return\`.

### 2. Kĩ năng tối ưu và phong cách lập trình sạch (Clean Code)

- Đặt tên biến và hàm theo quy ước gợi nhớ (snake_case như \`tong_so_duong\`).
- Tránh viết mã lệnh quá dài trong một khối; tách các khối logic độc lập thành các hàm chuyên biệt.
- Luôn kiểm tra điều kiện biên và lường trước các trường hợp người dùng nhập sai dữ liệu.`
    },

    // Chủ đề 6: Hướng nghiệp với tin học
    33: {
      num: 33,
      topic: 6,
      title: "Nghề thiết kế đồ họa máy tính",
      orientation: "Hướng nghiệp",
      body: `### 1. Đặc điểm nghề nghiệp thiết kế đồ họa (Graphic Designer)

- **Mục tiêu công việc:** Sử dụng các công cụ phần mềm đồ họa số để truyền đạt thông điệp, ý tưởng thị giác thông qua hình ảnh, bố cục, màu sắc và kiểu chữ.
- **Các sản phẩm tiêu biểu:** Nhận diện thương hiệu (Logo, Namecard), ấn phẩm truyền thông (Poster, Banner, Tạp chí), bao bì sản phẩm, giao diện người dùng ứng dụng và web (UI/UX).

### 2. Năng lực và kĩ năng cần có

- **Tư duy thẩm mĩ và thị giác:** Hiểu biết về nguyên lí phối màu, bố cục thị giác, tỉ lệ vàng và typography.
- **Thành thạo công cụ đồ họa:** Nắm vững các phần mềm vector (Inkscape, Adobe Illustrator) và phần mềm xử lí ảnh raster (GIMP, Photoshop).
- **Kĩ năng mềm:** Khả năng giao tiếp lắng nghe khách hàng, tư duy sáng tạo độc lập, làm việc nhóm và tuân thủ thời hạn (deadline).
- **Hồ sơ năng lực (Portfolio):** Bộ sưu tập các dự án thực tế là tiêu chí quan trọng nhất để ứng tuyển việc làm.`
    },

    34: {
      num: 34,
      topic: 6,
      title: "Nghề phát triển phần mềm",
      orientation: "Hướng nghiệp",
      body: `### 1. Đặc điểm nghề nghiệp phát triển phần mềm (Software Developer)

- **Mục tiêu công việc:** Phân tích nhu cầu người dùng, thiết kế kiến trúc, lập trình viết mã, kiểm thử và bảo trì các hệ thống phần mềm, ứng dụng di động, trang web và dịch vụ số.
- **Các vai trò trong một đội ngũ phần mềm:**
  - Phân tích nghiệp vụ (Business Analyst - BA).
  - Lập trình viên Front-end (Giao diện) & Back-end (Xử lí dữ liệu, máy chủ).
  - Kĩ sư kiểm thử chất lượng phần mềm (QA/QC Tester).
  - Kĩ sư vận hành hệ thống (DevOps Engineer) và Quản trị dự án (Project Manager).

### 2. Vòng đời phát triển phần mềm (SDLC)

> Khảo sát yêu cầu $\\to$ Thiết kế hệ thống $\\to$ Lập trình mã nguồn $\\to$ Kiểm thử $\\to$ Triển khai phát hành $\\to$ Bảo trì & Nâng cấp.

### 3. Năng lực cốt lõi và xu hướng tương lai

- Tư duy logic giải quyết vấn đề, tinh thần tự học công nghệ mới liên tục.
- Đạo đức nghề nghiệp: Tôn trọng quyền riêng tư dữ liệu người dùng và đảm bảo an ninh mạng.`
    }
  },

  // Modal 1: Bảng tra cứu thuật ngữ & lệnh Python
  pythonCheatsheet: `### 1. Bảng tra cứu các lệnh và cấu trúc Python cốt lõi

| Lệnh / Cú pháp | Ví dụ minh họa | Ý nghĩa và tác dụng |
|---|---|---|
| \`print()\` | \`print("Xin chào", name)\` | Xuất dữ liệu ra màn hình |
| \`input()\` | \`s = input("Nhập tên: ")\` | Nhận dữ liệu nhập từ bàn phím (luôn trả về xâu str) |
| \`int()\`, \`float()\` | \`n = int(input())\` | Ép kiểu dữ liệu sang số nguyên hoặc số thực |
| \`str()\`, \`bool()\` | \`s = str(100)\` | Chuyển đổi dữ liệu sang dạng chuỗi hoặc logic |
| \`if - elif - else\` | \`if x > 0: print("Dương")\` | Cấu trúc rẽ nhánh có điều kiện |
| \`for ... in range()\` | \`for i in range(1, 10, 2):\` | Vòng lặp với số lần xác định |
| \`while\` | \`while n > 0: n //= 10\` | Vòng lặp với điều kiện dừng |
| \`len()\` | \`len(a)\`, \`len(s)\` | Trả về số phần tử của danh sách hoặc độ dài xâu |
| \`list.append(x)\` | \`a.append(50)\` | Thêm phần tử x vào cuối danh sách |
| \`list.insert(i, x)\` | \`a.insert(0, 99)\` | Chèn phần tử x vào vị trí chỉ số i |
| \`list.remove(x)\` | \`a.remove(10)\` | Xóa phần tử đầu tiên có giá trị x |
| \`list.pop(i)\` | \`val = a.pop()\` | Lấy ra và xóa phần tử tại chỉ số i |
| \`str.split(sep)\` | \`words = s.split()\`, \`s.split(",")\` | Tách xâu thành danh sách các từ |
| \`sep.join(list)\` | \`"-".join(["A", "B", "C"])\` | Nối danh sách các chuỗi thành một xâu |
| \`str.find(sub)\` | \`idx = s.find("abc")\` | Tìm vị trí xâu con (trả về -1 nếu không có) |
| \`def ... return\` | \`def tong(a, b): return a + b\` | Định nghĩa hàm và trả về kết quả |

### 2. Bảng thuật ngữ Tin học & Đồ họa Inkscape

| Thuật ngữ | Ý nghĩa kĩ thuật |
|---|---|
| **Bit / Byte** | Đơn vị lưu trữ dữ liệu nhị phân cơ bản ($1\\text{ Byte} = 8\\text{ bit}$) |
| **ASCII / Unicode** | Chuẩn mã hóa kí tự văn bản (ASCII 7-8 bit; Unicode toàn cầu đa ngôn ngữ) |
| **UTF-8** | Định dạng mã hóa Unicode tối ưu và phổ biến nhất trên Internet |
| **Bù hai (Two's Complement)** | Phương pháp biểu diễn số nguyên có dấu chuẩn trong phần cứng máy tính |
| **LAN / WAN** | Mạng cục bộ phạm vi hẹp / Mạng diện rộng toàn cầu (Internet) |
| **Phishing** | Tấn công lừa đảo người dùng bằng trang web hoặc email giả mạo |
| **2FA** | Xác thực hai yếu tố giúp bảo vệ tài khoản số an toàn |
| **Creative Commons (CC)** | Khung giấy phép bản quyền mở cho tác giả chia sẻ tác phẩm |
| **Raster vs Vector** | Ảnh bitmap lưới pixel (dễ vỡ khi phóng) vs Đồ họa toán học (luôn sắc nét) |
| **Đường cong Bézier** | Đường cong vector mượt mà được điều khiển bằng các điểm neo và tay nắm |
| **Boolean Paths** | Các phép ghép đối tượng vector: Union, Difference, Intersection, Division |`,

  // Modal 2: 10 Sai lầm kinh điển khi học lập trình & Sử dụng mạng
  mistakesCheatsheet: `### 1. Các sai lầm phổ biến khi lập trình Python

- **Sai lầm 1 (Quên ép kiểu hàm \`input()\`):** Quên rằng \`input()\` luôn trả về chuỗi. Viết \`a = input(); b = input(); print(a + b)\` sẽ cho kết quả nối chuỗi \`"5" + "3" = "53"\` thay vì số 8.
- **Sai lầm 2 (Nhầm lẫn giữa \`=\` và \`==\`):** \`=\` là lệnh gán giá trị, còn \`==\` là toán tử so sánh bằng nhau. Viết \`if x = 5:\` sẽ gây lỗi cú pháp \`SyntaxError\`.
- **Sai lầm 3 (Off-by-one trong \`range()\`)**: Vòng lặp \`range(1, 10)\` chỉ chạy từ 1 đến 9, KHÔNG bao gồm 10.
- **Sai lầm 4 (Chỉ số mảng vượt biên - \`IndexError\`):** Danh sách có $n$ phần tử thì chỉ số chỉ chạy từ $0$ đến $n - 1$. Truy cập \`a[n]\` sẽ làm chương trình bị sập ngay lập tức.
- **Sai lầm 5 (Lỗi thụt lề \`IndentationError\`):** Trộn lẫn giữa phím \`Tab\` và dấu cách, hoặc thụt lề không thẳng hàng trong các khối \`if, for, while, def\`.
- **Sai lầm 6 (Vòng lặp \`while\` vô hạn):** Quên cập nhật biến điều kiện bên trong thân vòng lặp \`while\`, khiến máy tính bị treo hoặc tràn bộ nhớ.
- **Sai lầm 7 (Sửa đổi trực tiếp xâu kí tự):** Viết \`s[0] = 'A'\` bị lỗi \`TypeError\` vì xâu trong Python là bất biến. Phải tạo xâu mới.

### 2. Sai lầm nguy hiểm về an toàn mạng & Thiết kế đồ họa

- **Sai lầm 8 (Dùng chung mật khẩu đơn giản):** Sử dụng ngày sinh, số điện thoại hoặc dùng một mật khẩu cho cả Facebook, Email, Ngân hàng khiến nguy cơ mất trắng toàn bộ tài khoản.
- **Sai lầm 9 (Không lưu tệp nguồn đồ họa SVG):** Thiết kế xong chỉ xuất ra file \`.png\` rồi đóng phần mềm mà không lưu file \`.svg\`, dẫn đến khi cần sửa đổi phải làm lại từ đầu.
- **Sai lầm 10 (Vi phạm bản quyền hình ảnh):** Tự ý tải ảnh từ Google Hình ảnh đưa vào sản phẩm thiết kế mà không kiểm tra giấy phép sử dụng, dẫn đến bị khiếu nại bản quyền hoặc kiện tụng.`
};
