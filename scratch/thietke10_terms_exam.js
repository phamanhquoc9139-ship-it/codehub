// Bảng tra cứu nhanh, Ghi chú an toàn và Đề thi Trạng Nguyên 25 câu hỏi chuẩn SGK Thiết kế & Công nghệ 10

const quickLookupTable = [
  { topic: "Hệ thống kĩ thuật", keywords: "Đầu vào (vật liệu, năng lượng, thông tin) → Bộ phận xử lí → Đầu ra; Mạch kín có phản hồi (Feedback) tự điều chỉnh" },
  { topic: "Chuỗi CAD / CAM / CNC", keywords: "CAD (Thiết kế 3D) → CAM (Lập trình đường dao G-code) → Máy CNC (Gia công cắt gọt tự động)" },
  { topic: "Bản vẽ xây dựng nhà", keywords: "Mặt bằng (cắt ngang 1,5m, bố trí phòng) – Mặt đứng (hình dáng ngoài) – Mặt cắt (kết cấu tầng, dầm, mái, móng)" },
  { topic: "Quy trình thiết kế kĩ thuật", keywords: "1. Xác định vấn đề → 2. Tổng quan → 3. Tiêu chí → 4. Giải pháp → 5. Nguyên mẫu → 6. Kiểm chứng thử nghiệm → 7. Hồ sơ kĩ thuật (Chu trình lặp)" },
  { topic: "Phương pháp sáng tạo", keywords: "Động não (Brainstorming không chỉ trích) – Sơ đồ tư duy (Mindmap) – 5W1H – Kĩ thuật SCAMPER – Bảng điểm PMI – Rubric" },
  { topic: "Tiêu chí đánh giá", keywords: "Hiệu quả (năng suất, chất lượng) – Độ tin cậy (chính xác, bền) – Kinh tế (chi phí, giá thành) – Môi trường (phát thải)" },
  { topic: "Thiết kế phát triển bền vững", keywords: "Hệ nguyên tắc 6R: Rethink (suy nghĩ lại), Refuse (từ chối), Reduce (giảm thiểu), Reuse (tái sử dụng), Repair (sửa chữa), Recycle (tái chế)" }
];

const editorialNotes = `
  <div class="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs leading-relaxed text-amber-900 dark:text-amber-200">
    <h4 class="font-bold text-sm mb-2 flex items-center gap-2">
      <i class="fa-solid fa-triangle-exclamation text-amber-600"></i> Ghi chú quy chuẩn biên soạn và An toàn lao động kĩ thuật
    </h4>
    <p class="mb-2">
      1. Tài liệu tổng hợp kiến thức cốt lõi chuẩn theo SGK <em>Công nghệ 10 – Thiết kế và Công nghệ (bộ Kết nối tri thức với cuộc sống)</em>, phục vụ trực tiếp cho việc học tập, tra cứu đồ họa và ôn luyện trực tuyến.
    </p>
    <p class="mb-2">
      2. Tài liệu không thay thế các quy chuẩn kĩ thuật quốc gia hiện hành về bản vẽ (TCVN 7285, TCVN 8-24, ISO), sổ tay kĩ sư chế tạo máy hay các quy trình kiểm định chất lượng nước sinh hoạt chính thức của Bộ Y tế.
    </p>
    <p>
      3. <strong>An toàn lao động:</strong> Trong các giờ học thực hành có sử dụng dao cắt, máy cưa, máy khoan, mỏ hàn điện, hóa chất hay nguồn điện cao áp, học sinh bắt buộc phải có sự hướng dẫn giám sát trực tiếp của giáo viên, trang bị đầy đủ kính bảo hộ, găng tay và tuân thủ nghiêm ngặt nội quy xưởng trường. Nước lọc từ mô hình lọc tự chế không được uống trực tiếp nếu chưa qua đun sôi hoặc kiểm nghiệm tiêu chuẩn.
    </p>
  </div>
`;

const trangNguyenExamQuestions = [
  {
    q: "Nhận định nào sau đây diễn tả chính xác bản chất của hoạt động Kĩ thuật (Engineering)?",
    options: ["Ứng dụng các nguyên lí khoa học để thiết kế, chế tạo, vận hành máy móc và hệ thống giải quyết vấn đề thực tiễn", "Tìm kiếm và giải thích các hiện tượng kì bí trong vũ trụ", "Sáng tác các tác phẩm điêu khắc nghệ thuật", "Viết sách lịch sử xã hội"],
    ans: 0,
    exp: "Kĩ thuật là cầu nối ứng dụng các định luật khoa học tự nhiên vào thực tiễn để kiến tạo nên máy móc, công trình phục vụ con người."
  },
  {
    q: "Hệ thống kĩ thuật mạch kín (Closed-loop system) khác biệt bản chất với hệ thống mạch hở ở phần tử nào?",
    options: ["Có mạch phản hồi (Feedback) đưa tín hiệu đầu ra về bộ điều khiển để tự động điều chỉnh", "Không sử dụng năng lượng điện", "Có bộ phận xử lí phức tạp gấp 10 lần", "Không bao giờ có sản phẩm đầu ra"],
    ans: 0,
    exp: "Tín hiệu phản hồi (Feedback) giúp hệ thống tự so sánh đầu ra với giá trị đặt để tự động sửa sai số."
  },
  {
    q: "Phương pháp gia công cơ khí nào sau đây dùng ngoại lực làm kim loại biến dạng dẻo để tạo hình dạng mong muốn?",
    options: ["Gia công áp lực (rèn, dập, cán, kéo)", "Gia công cắt gọt (tiện, phay, bào)", "Công nghệ đúc kim loại", "Hàn hồ quang điện"],
    ans: 0,
    exp: "Gia công áp lực dựa vào tính dẻo của kim loại dưới tác dụng của búa rèn, trục cán hoặc máy dập thủy lực."
  },
  {
    q: "Trong chuỗi công nghệ sản xuất cơ khí số hóa hiện đại, phần mềm CAM đóng vai trò là khâu nào?",
    options: ["Chuyển đổi mô hình thiết kế 3D thành quy trình công nghệ và mã lệnh điều khiển đường dao (G-code)", "Vẽ phác thảo ý tưởng ban đầu", "Trực tiếp cắt gọt phôi thép", "Đóng gói sản phẩm xuất xưởng"],
    ans: 0,
    exp: "CAM (Computer-Aided Manufacturing) lập trình đường chạy dao tối ưu và tạo tệp mã G-code để nạp vào máy CNC."
  },
  {
    q: "Công nghệ In 3D (Sản xuất đắp lớp - Additive Manufacturing) có ưu thế vượt trội nhất trong trường hợp nào?",
    options: ["Chế tạo nguyên mẫu thử nghiệm nhanh, sản phẩm đơn chiếc có hình học rỗng phức tạp", "Sản xuất hàng loạt 10 triệu chiếc ốc vít giá rẻ", "Cán phẳng các tấm thép dày làm vỏ tàu thủy", "Đúc các khối gang nặng hàng chục tấn"],
    ans: 0,
    exp: "In 3D không cần khuôn đắt tiền, in trực tiếp từ tệp số nên tối ưu cho sản phẩm đơn chiếc và mô hình thử nghiệm."
  },
  {
    q: "Cuộc Cách mạng công nghiệp lần thứ ba (bắt đầu từ những năm 1970) có đặc trưng công nghệ bản lề là gì?",
    options: ["Sự bùng nổ của bóng bán dẫn, máy tính điện tử, Internet và tự động hóa bằng PLC", "Động cơ hơi nước và máy dệt", "Điện năng và dây chuyền lắp ráp hàng loạt", "Trí tuệ nhân tạo tổng hợp"],
    ans: 0,
    exp: "CMCN lần 3 gắn liền với cuộc cách mạng kĩ thuật số, máy vi tính và tự động hóa dây chuyền bằng bộ điều khiển PLC."
  },
  {
    q: "Khi ghi kích thước trên bản vẽ kĩ thuật theo tiêu chuẩn TCVN, con số kích thước ghi trên bản vẽ thể hiện:",
    options: ["Kích thước thật của vật thể (không phụ thuộc vào tỉ lệ thu nhỏ hay phóng to)", "Kích thước đo được bằng thước kẻ trên giấy", "Kích thước đã nhân đôi", "Kích thước sau khi trừ dung sai"],
    ans: 0,
    exp: "Quy tắc bất di bất dịch của vẽ kĩ thuật: con số kích thước luôn ghi đúng kích thước thực của chi tiết khi chế tạo."
  },
  {
    q: "Theo tiêu chuẩn TCVN, loại nét vẽ nào sau đây được quy ước vẽ đường bao khuất và cạnh khuất của chi tiết?",
    options: ["Nét đứt mảnh", "Nét liền đậm", "Nét liền mảnh", "Nét gạch chấm mảnh"],
    ans: 0,
    exp: "Nét đứt mảnh gồm các đoạn gạch ngắn đều nhau chuyên biểu diễn các đường cạnh bị che khuất tầm nhìn."
  },
  {
    q: "Trong Phương pháp chiếu góc thứ nhất (PPCG1), hình chiếu bằng được bố trí ở vị trí nào so với hình chiếu đứng?",
    options: ["Nằm ngay ở phía dưới hình chiếu đứng", "Nằm ở phía trên hình chiếu đứng", "Nằm ở bên phải hình chiếu đứng", "Nằm ở bên trái hình chiếu đứng"],
    ans: 0,
    exp: "PPCG1 quy ước: Hướng chiếu từ trên xuống thì hình chiếu bằng được mở xoay đặt ở ngay dưới hình chiếu đứng."
  },
  {
    q: "Mối quan hệ gióng hàng hình học bắt buộc giữa Hình chiếu đứng và Hình chiếu cạnh trong PPCG1 là:",
    options: ["Có cùng chiều cao (gióng hàng theo phương nằm ngang)", "Có cùng chiều dài", "Có cùng diện tích", "Có cùng góc nghiêng"],
    ans: 0,
    exp: "Hình chiếu đứng và hình chiếu cạnh cùng thể hiện độ cao của vật thể nên các đường gióng ngang nối liền nhau."
  },
  {
    q: "Mặt cắt chập là mặt cắt có đặc điểm quy ước biểu diễn như thế nào?",
    options: ["Vẽ trực tiếp ngay trên hình chiếu tương ứng, đường bao vẽ bằng nét liền mảnh", "Vẽ ở ngoài hình chiếu bằng nét liền đậm", "Vẽ ở một tờ giấy khác", "Không bao giờ được gạch gạch vật liệu"],
    ans: 0,
    exp: "Mặt cắt chập được vẽ chồng ngay lên hình chiếu tại vị trí cắt, đường bao nét liền mảnh để không lẫn với đường bao thấy."
  },
  {
    q: "Trong hình chiếu trục đo vuông góc đều (Isometric), góc giữa các trục đo và hệ số biến dạng quy ước lần lượt là:",
    options: ["Ba góc trục đo đều bằng 120° và p = q = r = 1", "Các góc bằng 90° và p = 1, q = 0,5", "Góc 90° và hai góc 135°", "Ba góc đều bằng 60°"],
    ans: 0,
    exp: "Hình chiếu trục đo vuông góc đều có 3 trục đối xứng tạo góc 120° và quy ước không rút ngắn chiều nào (p = q = r = 1)."
  },
  {
    q: "Đặc điểm nhận diện của Hình chiếu phối cảnh một điểm tụ là:",
    options: ["Mặt tranh song song một mặt vật thể, các đường song song vuông góc mặt tranh hội tụ về 1 điểm trên đường chân trời", "Có hai điểm tụ nằm ở hai phía", "Không có điểm tụ nào", "Các tia chiếu luôn song song với nhau"],
    ans: 0,
    exp: "Phối cảnh 1 điểm tụ áp dụng khi nhìn trực diện một mặt của công trình, chiều sâu hội tụ về 1 điểm F duy nhất."
  },
  {
    q: "Theo tiêu chuẩn TCVN, đường chân ren nhìn thấy của ren trục trên hình chiếu vuông góc với trục ren được vẽ như thế nào?",
    options: ["Vẽ hở khoảng 1/4 vòng tròn (vẽ 3/4 vòng) bằng nét liền mảnh", "Vẽ kín toàn bộ vòng tròn bằng nét liền đậm", "Vẽ bằng nét gạch chấm đậm", "Không được vẽ chân ren"],
    ans: 0,
    exp: "Chân ren vẽ bằng nét mảnh và hở 1/4 cung tròn ở góc phần tư trên bên phải để phân biệt với vòng đỉnh ren kín."
  },
  {
    q: "Nội dung nào sau đây bắt buộc phải có trên Bản vẽ lắp mà KHÔNG có trên Bản vẽ chi tiết đơn?",
    options: ["Bảng kê danh mục chi tiết (số thứ tự, tên chi tiết, số lượng, vật liệu)", "Khung tên bản vẽ", "Đường kích thước", "Kí hiệu dung sai"],
    ans: 0,
    exp: "Bảng kê chi tiết là bảng thống kê vật tư linh kiện cấu tạo nên cụm lắp ráp trên bản vẽ lắp."
  },
  {
    q: "Trong hồ sơ bản vẽ kiến trúc nhà ở, bản vẽ nào là hình cắt bằng nằm ngang qua các phòng ở độ cao cửa sổ thể hiện công năng phòng?",
    options: ["Bản vẽ Mặt bằng", "Bản vẽ Mặt đứng", "Bản vẽ Mặt cắt dọc", "Bản vẽ phối cảnh mái"],
    ans: 0,
    exp: "Bản vẽ Mặt bằng là bản vẽ quan trọng nhất, cắt ngang tầm cửa sổ để thể hiện lối đi lại và bố trí nội thất."
  },
  {
    q: "Trong phần mềm thiết kế đồ họa AutoCAD, lệnh nào sau đây dùng để bo tròn một góc nhọn bằng một cung bán kính R?",
    options: ["Lệnh FILLET", "Lệnh CHAMFER", "Lệnh TRIM", "Lệnh OFFSET"],
    ans: 0,
    exp: "Lệnh FILLET bo tròn góc với bán kính R cài đặt; trong khi CHAMFER vát phẳng góc nhọn."
  },
  {
    q: "Bước thứ năm trong Quy trình chuẩn 7 bước thiết kế kĩ thuật là bước nào?",
    options: ["Xây dựng nguyên mẫu (Prototype)", "Xác định vấn đề", "Đề xuất giải pháp", "Lập hồ sơ kĩ thuật"],
    ans: 0,
    exp: "Quy trình: 1. Vấn đề -> 2. Tổng quan -> 3. Yêu cầu -> 4. Giải pháp -> 5. Nguyên mẫu -> 6. Kiểm chứng -> 7. Hồ sơ."
  },
  {
    q: "Ngành khoa học 'Nhân trắc học' (Ergonomics) trong thiết kế sản phẩm công nghiệp nghiên cứu điều gì?",
    options: ["Sự phù hợp giữa kích thước, tư thế chuyển động cơ thể người với sản phẩm để mang lại sự thoải mái, an toàn", "Nghiên cứu cấu tạo bộ xương hóa thạch", "Nghiên cứu giá bán của sản phẩm", "Nghiên cứu màu sắc bao bì carton"],
    ans: 0,
    exp: "Ergonomics nghiên cứu nhân trắc cơ thể người để thiết kế bàn ghế, tay cầm, nút bấm vừa vặn, chống mỏi cơ xương khớp."
  },
  {
    q: "Theo quy ước an toàn lao động quốc tế trên máy móc công nghiệp, nút bấm màu ĐỎ thường dùng cho chức năng nào?",
    options: ["Nút dừng máy khẩn cấp (Emergency Stop), báo nguy hiểm", "Nút bật nguồn chạy thử", "Nút tăng tốc độ", "Nút mở đèn chiếu sáng"],
    ans: 0,
    exp: "Màu đỏ luôn quy ước cho tình trạng dừng khẩn cấp để mắt người định vị và thao tác dứt khoát khi có sự cố."
  },
  {
    q: "Nguyên tắc thiết kế 'Đơn giản hóa' (KISS) mang lại lợi ích kĩ thuật cốt lõi là:",
    options: ["Giảm chi phí gia công chế tạo, giảm chi tiết thừa giúp sản phẩm bền bỉ, dễ lắp ráp và ít hỏng hóc", "Làm cho sản phẩm trông thô kệch", "Tăng khối lượng máy lên gấp đôi", "Làm cho sản phẩm khó sử dụng hơn"],
    ans: 0,
    exp: "Đơn giản hóa loại bỏ các chi tiết thừa thãi, giúp hạ giá thành, tăng độ tin cậy và giúp người dùng dễ sửa chữa."
  },
  {
    q: "Quy tắc vàng quan trọng nhất bắt buộc phải tuân thủ trong giai đoạn Động não (Brainstorming) tập hợp ý tưởng là gì?",
    options: ["Tuyệt đối không chỉ trích, phán xét hoặc bác bỏ bất kì ý tưởng nào của các thành viên trong nhóm", "Phải lập tức loại bỏ ngay các ý tưởng lạ lùng", "Chỉ chọn duy nhất ý tưởng của nhóm trưởng", "Không cho ai phát biểu"],
    ans: 0,
    exp: "Tôn trọng mọi ý tưởng và hoãn phán xét giúp các thành viên cởi mở tư duy, kích thích sáng tạo đột phá."
  },
  {
    q: "Chữ cái 'S' trong kĩ thuật tư duy sáng tạo SCAMPER gợi ý hành động nào?",
    options: ["Substitute (Thay thế vật liệu, linh kiện khác)", "Stop (Dừng lại)", "Sleep (Đi ngủ)", "Sell (Bán tháo)"],
    ans: 0,
    exp: "Substitute là câu hỏi gợi mở: Có thể thay thế vật liệu kim loại bằng nhựa/carbon, hay thay thế cơ cấu này bằng cơ cấu khác không?"
  },
  {
    q: "Trong mô hình cột lọc nước mini STEM (Bài 22), lớp vật liệu Than hoạt tính đóng vai trò chính là gì?",
    options: ["Hấp phụ màu, khử mùi tanh hôi, clo dư và các độc tố hữu cơ hòa tan", "Làm tăng vị ngọt của nước", "Lọc các cành cây to", "Tạo bọt xà phòng"],
    ans: 0,
    exp: "Than hoạt tính vi xốp hấp phụ hóa học cực mạnh các phân tử gây màu, mùi tanh và hóa chất độc hại trong nước."
  },
  {
    q: "Cảnh báo an toàn quan trọng nhất trong SGK Công nghệ 10 về nước sau khi lọc qua mô hình lọc tự chế ở lớp học là:",
    options: ["Tuyệt đối không được uống trực tiếp vì chưa loại trừ hết vi khuẩn, virus siêu vi gây bệnh", "Có thể uống trực tiếp thoải mái", "Sạch hơn nước cất y tế", "Chỉ dùng để ngâm tay"],
    ans: 0,
    exp: "Cột lọc cơ học đơn giản không diệt được mầm bệnh vi sinh vật; muốn uống phải đun sôi hoặc qua màng lọc RO và kiểm định chuẩn y tế."
  }
];

module.exports = { quickLookupTable, editorialNotes, trangNguyenExamQuestions };
