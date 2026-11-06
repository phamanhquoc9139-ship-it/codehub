// Module: mithuat7_illustrations.js
// Cung cấp dữ liệu ảnh minh họa, tác phẩm di sản, kĩ thuật và phân tích thị giác cho 18 bài học Mĩ Thuật 7

const lessonIllustrations = {
  "mt-bai-1": {
    badge: "Kiệt tác tạo hình thời kì Phục Hưng & Cổ đại",
    title: "Bức họa 'Quý bà và con chồn' & Tượng 'David'",
    artist: "Leonardo da Vinci (khoảng 1489–1491) & Michelangelo (1501–1504)",
    medium: "Sơn dầu trên gỗ óc chó (54 × 39 cm) & Điêu khắc đá cẩm thạch (cao 5,17 m)",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Leonardo_da_Vinci_-_Lady_with_an_Ermine_%28Czartoryski_Museum%29.jpg/600px-Leonardo_da_Vinci_-_Lady_with_an_Ermine_%28Czartoryski_Museum%29.jpg",
    altImgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/%27David%27_by_Michelangelo_Fir_JBU005_retouched.jpg/600px-%27David%27_by_Michelangelo_Fir_JBU005_retouched.jpg",
    analysis: [
      "<strong>Kĩ thuật vờn sáng tối (Chiaroscuro):</strong> Da Vinci sử dụng chuyển sắc độ êm ái làm nổi bật gương mặt thanh tú của nàng Cecilia Gallerani từ nền tối huyền bí.",
      "<strong>Tư thế xoay mình (Contrapposto):</strong> Nhân vật quay đầu nhìn về một phía tạo cảm giác chuyển động sống động, tự nhiên.",
      "<strong>Ý nghĩa biểu trưng:</strong> Con chồn trắng trên tay biểu tượng cho đức tính thuần khiết, quý phái thời Phục Hưng.",
      "<strong>Tượng David (Michelangelo):</strong> Đỉnh cao điêu khắc giải phẫu học cơ thể người, thể hiện sức mạnh nội tâm và sự tự tin của con người trước số phận."
    ],
    svgDiagramTitle: "Sơ Đồ Phân Tích Hình Khối & Sáng Tối Điêu Khắc"
  },

  "mt-bai-2": {
    badge: "Mĩ thuật ứng dụng trung đại phương Đông & Hồi giáo",
    title: "Gốm men Syria (TK XIV) & Thảm dệt Ottoman Thổ Nhĩ Kỳ (TK XVI)",
    artist: "Nghệ nhân gốm Damascus & Nghệ nhân dệt hoàng gia Bursa",
    medium: "Gốm phủ men lam ngọc & Sợi len dệt tay thủ công",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ottoman_prayer_rug_Bursa_16th_century_Pergamon_Museum.jpg/600px-Ottoman_prayer_rug_Bursa_16th_century_Pergamon_Museum.jpg",
    analysis: [
      "<strong>Nguyên lí lặp lại & nhịp điệu:</strong> Các họa tiết hoa lá cách điệu (arabesque) được nhắc lại liên hoàn quanh viền thảm tạo cảm giác vô tận.",
      "<strong>Tính đối xứng trục:</strong> Thảm cầu nguyện Ottoman có vòm nhọn trung tâm cân bằng đối xứng tuyệt đối.",
      "<strong>Ứng dụng đời sống:</strong> Hoa văn cổ đại trung đại là nguồn cảm hứng bất tận để thiết kế các sản phẩm đương đại như túi xách, khăn lụa, đồ gốm sứ gia dụng."
    ]
  },

  "mt-bai-3": {
    badge: "Di tích lịch sử trong hội họa & điêu khắc Việt Nam",
    title: "Tranh 'Chùa tháp Phổ Minh' & 'Ô Quan Chưởng'",
    artist: "Họa sĩ Nguyễn Sáng (Sơn mài 1962) & Bùi Xuân Phái (Sơn dầu)",
    medium: "Sơn mài truyền thống & Sơn dầu trên toan",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Pho_Minh_pagoda_tower.jpg/600px-Pho_Minh_pagoda_tower.jpg",
    analysis: [
      "<strong>Chùa tháp Phổ Minh (Nguyễn Sáng):</strong> Khai thác chất liệu sơn mài với màu then, đỏ son và vàng quỳ, tôn vinh ngọn tháp gạch 14 tầng thời Trần cổ kính giữa vườn chùa xanh mướt.",
      "<strong>Ô Quan Chưởng (Bùi Xuân Phái):</strong> Bút pháp sơn dầu dày dặn, những vệt cọ thô mộc và đường viền đậm nét khắc họa rêu phong cổ kính của cửa ô duy nhất còn lại của kinh thành Thăng Long.",
      "<strong>Kĩ thuật đắp nổi đất nặn:</strong> Tạo hình từ mảng tường chính dày đến các chi tiết cửa vòm, mái ngói cong và bóng đổ cây cối."
    ]
  },

  "mt-bai-4": {
    badge: "Đồ họa ứng dụng & Truyền thông bưu chính",
    title: "Bộ tem bưu chính đầu tiên của nước Việt Nam Dân chủ Cộng hòa (1946)",
    artist: "Họa sĩ Nguyễn Sáng thiết kế",
    medium: "Đồ họa khắc in kẽm (In offset bưu chính)",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Oquanchuong_hanoi.jpg/600px-Oquanchuong_hanoi.jpg",
    analysis: [
      "<strong>Chân dung Chủ tịch Hồ Chí Minh:</strong> Nét vẽ cô đọng, cương nghị nhưng nhân hậu, thể hiện khí phách độc lập của nhà nước non trẻ.",
      "<strong>Cấu trúc 4 thành phần tem:</strong> Tên quốc gia (VIỆT NAM DÂN CHỦ CỘNG HÒA), Giá cước (BƯU CHÍNH), Hình ảnh trọng tâm và Viền răng cưa phân tách.",
      "<strong>Màu sắc tối giản:</strong> In đơn sắc hoặc 2 màu tương phản mạnh giúp nhận diện rõ nét ở kích thước nhỏ (khoảng 26 × 32 mm)."
    ]
  },

  "mt-bai-5": {
    badge: "Bản sắc văn hóa dân tộc trong mĩ thuật hiện đại Việt Nam",
    title: "Tranh lụa 'Sau giờ trực chiến' & Sơn mài 'Thiếu nữ trong vườn'",
    artist: "Danh họa Nguyễn Phan Chánh & Danh họa Nguyễn Gia Trí",
    medium: "Tranh lụa rửa truyền thống & Sơn mài lộng lẫy (vàng, bạc, vỏ trứng)",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Dam_cuoi_chuot.jpg/600px-Dam_cuoi_chuot.jpg",
    analysis: [
      "<strong>Chất liệu lụa (Nguyễn Phan Chánh):</strong> Kĩ thuật nhuộm màu nước và rửa lụa nhiều lần tạo nên sắc độ nâu trầm êm dịu, thấm sâu vào từng thớ sợi tơ tằm thanh khiết.",
      "<strong>Chất liệu sơn mài (Nguyễn Gia Trí):</strong> Vận dụng nhựa cây sơn ta, màu then, vỏ trứng nghiền nhỏ và dát vàng bạc lấp lánh, đưa sơn mài từ mĩ nghệ truyền thống thành đỉnh cao hội họa thế giới.",
      "<strong>Khắc gỗ (Vũ Giáng Hương):</strong> Nét khắc dứt khoát, mộc mạc diễn tả tình mẫu tử và đời sống đồng bào miền núi chân thực, ấm áp."
    ]
  },

  "mt-bai-6": {
    badge: "Thiết kế nhận diện thương hiệu & Đồ họa logo",
    title: "Cấu trúc thiết kế Logo hiện đại: Biểu tượng (Icon) & Kiểu chữ (Typography)",
    artist: "Quy chuẩn thiết kế đồ họa ứng dụng quốc tế",
    medium: "Đồ họa vector kĩ thuật số",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pieter_Bruegel_the_Elder_-_The_Corn_Harvest_%28August%29_-_Google_Art_Project.jpg/800px-Pieter_Bruegel_the_Elder_-_The_Corn_Harvest_%28August%29_-_Google_Art_Project.jpg",
    analysis: [
      "<strong>Tính đơn giản (Simplicity):</strong> Đường nét tối giản giúp mắt người xem nhận biết và ghi nhớ trong vòng 3 giây đầu tiên.",
      "<strong>Khả năng co giãn (Scalability):</strong> Giữ nguyên độ sắc nét từ kích thước nhỏ trên danh thiếp/avatar (16px) đến biển hiệu khổng lồ trên tòa nhà.",
      "<strong>Màu sắc mang tính thông điệp:</strong> Xanh lá cây (môi trường, tươi mới), Đỏ/Cam (năng lượng, nhiệt huyết), Xanh dương (tin cậy, trí tuệ)."
    ]
  },

  "mt-bai-7": {
    badge: "Quy luật không gian hội họa phương Tây & phương Đông",
    title: "Tranh 'Những người thu hoạch' & 'Câu cá mùa thu'",
    artist: "Pieter Bruegel the Elder (1565) & Đường Dần - Đường Bá Hổ (nhà Minh)",
    medium: "Sơn dầu trên gỗ sồi (119 × 162 cm) & Tranh thủy mặc trên trục cuốn lụa",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pieter_Bruegel_the_Elder_-_The_Corn_Harvest_%28August%29_-_Google_Art_Project.jpg/800px-Pieter_Bruegel_the_Elder_-_The_Corn_Harvest_%28August%29_-_Google_Art_Project.jpg",
    analysis: [
      "<strong>Phối cảnh không khí (Aerial perspective):</strong> Pieter Bruegel diễn tả tiền cảnh lúa mì vàng rực, chi tiết rõ nét; hậu cảnh đồi núi chuyển dần sang sắc xanh lơ mờ ảo.",
      "<strong>Luật xa gần tuyến tính:</strong> Người ở tiền cảnh to, người gặt lúa phía xa nhỏ dần theo tỉ lệ hình học.",
      "<strong>Không gian đa điểm nhìn (Thủy mặc):</strong> Đường Dần sử dụng lối vẽ 'Tam viễn' (cao viễn, thâm viễn, bình viễn) tạo khoảng trống sương khói bồng bềnh."
    ]
  },

  "mt-bai-8": {
    badge: "Mĩ thuật tạo hình cơ bản & Nghiên cứu hình khối",
    title: "Phương pháp diễn tả tranh tĩnh vật: Chì khối 3 mảng & Hòa sắc màu nước",
    artist: "Quy trình thực hành hội họa viện hàn lâm",
    medium: "Chì than trên giấy canson & Màu nước trong suốt",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Claude_Monet_-_Meules%2C_effet_de_neige%2C_le_matin_%281891%29.jpg/800px-Claude_Monet_-_Meules%2C_effet_de_neige%2C_le_matin_%281891%29.jpg",
    analysis: [
      "<strong>Phân chia 3 mảng sáng tối cơ bản:</strong> Mảng sáng (đón nhận ánh sáng trực tiếp) → Mảng trung gian (nửa sáng nửa tối) → Mảng tối đậm (khuất sáng có phản quang).",
      "<strong>Bóng đổ (Cast shadow):</strong> Đậm nhất ở sát chân vật thể và nhạt dần về phía xa, giúp gắn chặt đồ vật lên mặt bàn phẳng.",
      "<strong>Tương quan vật - nền:</strong> Vật sáng đặt trên nền tối để bật hình; vật tối đặt trên nền sáng để định hình chu vi rõ ràng."
    ]
  },

  "mt-bai-kt1": {
    badge: "Không gian trưng bày nghệ thuật học đường",
    title: "Trưng bày & Đánh giá sản phẩm mĩ thuật học kì I",
    artist: "Tập thể học sinh lớp 7 thực hiện",
    medium: "Tổng hợp các chất liệu: Đất nặn, tem bưu chính, tranh tĩnh vật chì/màu, logo",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Pho_Minh_pagoda_tower.jpg/600px-Pho_Minh_pagoda_tower.jpg",
    analysis: [
      "<strong>Phân khu chức năng:</strong> Khu vực Tạo hình (tranh vẽ, đắp nổi) tách biệt khoa học với khu vực Ứng dụng (tem, logo, mô hình).",
      "<strong>Ánh sáng trưng bày:</strong> Chiếu sáng đều, tránh lóa mắt người xem, tôn vinh sắc độ và chất cảm bề mặt sản phẩm.",
      "<strong>Cấu trúc thuyết minh 5 bước:</strong> Ý tưởng sáng tạo → Ngôn ngữ tạo hình (nét, màu, bố cục) → Chất liệu sử dụng → Cảm nhận thẩm mĩ → Hướng điều chỉnh phát triển."
    ]
  },

  "mt-bai-9": {
    badge: "Nghiên cứu ánh sáng trong hội họa Ấn tượng & Sơn mài",
    title: "Kiệt tác 'Đồng cỏ khô trên tuyết' & 'Qua bản cũ'",
    artist: "Claude Monet (1891) & Họa sĩ Lê Quốc Lộc (Sơn mài)",
    medium: "Sơn dầu trên toan (65 × 100 cm) & Sơn mài truyền thống",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Claude_Monet_-_Meules%2C_effet_de_neige%2C_le_matin_%281891%29.jpg/800px-Claude_Monet_-_Meules%2C_effet_de_neige%2C_le_matin_%281891%29.jpg",
    analysis: [
      "<strong>Ánh sáng biến ảo của trường phái Ấn tượng:</strong> Monet không pha sẵn màu đen mà dùng màu bổ túc (tím, xanh lam, cam) để diễn tả ánh mặt trời ban mai hắt lên tuyết trắng.",
      "<strong>Nguồn sáng trực tiếp & gián tiếp:</strong> Ánh sáng tạo bóng đổ nghiêng dài trên mặt đất phản ánh chính xác thời khắc trong ngày.",
      "<strong>Ánh sáng trong tranh sơn mài (Lê Quốc Lộc):</strong> Ánh sáng ngầm tỏa ra từ những lớp vàng, bạc dát lộng lẫy dưới màng sơn then trong vắt, tái hiện vẻ đẹp hùng vĩ của núi rừng Tây Bắc."
    ]
  },

  "mt-bai-10": {
    badge: "Thiết kế thời trang & Khai thác hoa văn dân tộc",
    title: "Tạo mẫu trang phục hiện đại ứng dụng họa tiết thổ cẩm",
    artist: "Thiết kế đồ họa thời trang ứng dụng",
    medium: "Bản vẽ phác thảo màu trên giấy vẽ kĩ thuật",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ottoman_prayer_rug_Bursa_16th_century_Pergamon_Museum.jpg/600px-Ottoman_prayer_rug_Bursa_16th_century_Pergamon_Museum.jpg",
    analysis: [
      "<strong>Phom dáng trang phục (Silhouette):</strong> Cân đối tỉ lệ cơ thể người (khoảng 7–8 đầu), lựa chọn phom chữ A, suông hoặc ôm tôn dáng.",
      "<strong>Ứng dụng hoa văn thổ cẩm:</strong> Đặt họa tiết hình học (hình quả trám, zíc zắc, hoa sen cách điệu) ở cổ áo, gấu váy hoặc thắt lưng làm điểm nhấn duyên dáng.",
      "<strong>Hài hòa màu sắc:</strong> Phối màu tương phản giữa nền vải hiện đại với sắc màu rực rỡ truyền thống của thổ cẩm Tây Bắc, Tây Nguyên."
    ]
  },

  "mt-bai-11": {
    badge: "Mĩ thuật tạo hình không gian 3 chiều & Tái chế xanh",
    title: "Mô hình kiến trúc ngôi nhà thân thiện môi trường từ vật liệu tái chế",
    artist: "Sáng tạo thực hành thủ công học sinh",
    medium: "Bìa carton sóng, que kem, vỏ hộp giấy, cành khô, màu acrylic",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg/600px-Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg",
    analysis: [
      "<strong>Kết cấu chịu lực:</strong> Dựng khung tường chính chắc chắn, dán keo theo góc vuông để mô hình đứng vững trên mặt đế.",
      "<strong>Tỉ lệ kiến trúc:</strong> Cửa ra vào, cửa sổ, ban công được tính toán tỉ lệ cân đối so với chiều cao thân nhà và mái ngói.",
      "<strong>Cảnh quan sinh thái:</strong> Bổ sung sân vườn, cây xanh từ cành khô và sỏi đá tự nhiên, lan tỏa thông điệp sống xanh bền vững."
    ]
  },

  "mt-bai-12": {
    badge: "Đồ họa truyền thông cổ động & Tuyên truyền xã hội",
    title: "Tranh cổ động: 'Bảo vệ môi trường biển - Chung tay giảm rác thải nhựa'",
    artist: "Thiết kế đồ họa cổ động tuyên truyền",
    medium: "Đồ họa số kết hợp vẽ màu bột gouache / poster",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Oquanchuong_hanoi.jpg/600px-Oquanchuong_hanoi.jpg",
    analysis: [
      "<strong>Hình tượng thị giác cô đọng:</strong> Bàn tay nâng niu Trái Đất xanh hoặc hình ảnh sinh vật biển mắc kẹt trong túi nilon gây xúc động mạnh mẽ.",
      "<strong>Khẩu hiệu (Slogan) đanh thép:</strong> Chữ in hoa không chân, ngắn gọn, dễ đọc từ khoảng cách xa 10–15 mét.",
      "<strong>Độ tương phản màu sắc cao:</strong> Sử dụng cặp màu tương phản đỏ - xanh lá hoặc vàng - tím để kích thích thị giác và kêu gọi hành động quyết liệt."
    ]
  },

  "mt-bai-13": {
    badge: "Đề tài tình cảm gia đình & Nghệ thuật in đồ họa",
    title: "Kĩ thuật In độc bản Monoprint: Bức tranh 'Bà cháu' & 'Hai chị em'",
    artist: "Họa sĩ Lê Mai Khanh & Pierre-Auguste Renoir (1881)",
    medium: "In độc bản trên mica/thủy tinh & Sơn dầu trên toan",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg/600px-Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg",
    analysis: [
      "<strong>Kĩ thuật in độc bản (Monoprint):</strong> Vẽ màu trực tiếp lên tấm kính hoặc mica nhẵn bóng khi màu còn ẩm ướt, ép giấy lên xoa đều để hút màu sang.",
      "<strong>Hiện tượng đảo chiều không gian:</strong> Bản in thu được trên giấy sẽ bị lật ngược trái – phải so với hình vẽ ban đầu trên tấm mica (cần lưu ý khi có chữ viết).",
      "<strong>Biểu cảm ấm áp:</strong> Màu sắc tươi sáng, nét vẽ mềm mại diễn tả tình cảm gia đình thiêng liêng, gắn bó giữa các thế hệ."
    ]
  },

  "mt-bai-14": {
    badge: "Mĩ thuật ứng dụng đời sống & Sáng tạo thủ công",
    title: "Thiết kế khung ảnh kỉ niệm từ bìa carton & phụ liệu thiên nhiên",
    artist: "Sáng tạo mĩ thuật ứng dụng học đường",
    medium: "Bìa carton, hạt cúc, vỏ sò, dây thừng cói, keo nến",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/La_de_chim_phuong_thoi_Ly.jpg/600px-La_de_chim_phuong_thoi_Ly.jpg",
    analysis: [
      "<strong>Nguyên lí nhịp điệu trang trí:</strong> Sắp xếp các hạt cúc, vỏ sò hoặc họa tiết viền theo quy luật xen kẽ to – nhỏ, sáng – tối nối tiếp nhau.",
      "<strong>Kích thước lòng khung:</strong> Lòng khung ảnh được khoét vừa khít với kích cỡ ảnh tiêu chuẩn (ví dụ 10 × 15 cm hoặc 13 × 18 cm).",
      "<strong>Chân đế chịu lực:</strong> Thiết kế chân chống chữ A phía sau có góc nghiêng khoảng 70–75 độ giúp khung đứng vững vàng trên bàn học."
    ]
  },

  "mt-bai-15": {
    badge: "Di sản điêu khắc cổ Việt Nam thời Lý - Trần - Mạc",
    title: "Phù điêu lá đề phượng thời Lý, Hổ đá lăng Trần Thủ Độ & Phật bà thời Mạc",
    artist: "Nghệ nhân điêu khắc đá & gỗ truyền thống Việt Nam",
    medium: "Đá sa thạch, đá xanh nguyên khối & Gỗ phủ sơn son thếp vàng",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/La_de_chim_phuong_thoi_Ly.jpg/600px-La_de_chim_phuong_thoi_Ly.jpg",
    analysis: [
      "<strong>Lá đề chim phượng thời Lý (Chùa Phật Tích):</strong> Đường nét uốn lượn nhịp nhàng, mềm mại như ngọn lửa thiêng, thể hiện sự phát triển rực rỡ của Phật giáo Đại Việt.",
      "<strong>Tượng hổ đá thời Trần (Lăng Trần Thủ Độ):</strong> Khối hình mộc mạc, cô đọng, cơ bắp căng tràn sức sống thể hiện tinh thần thượng võ và hào khí Đông A bất diệt.",
      "<strong>Tượng Phật bà Quan Âm thời Mạc:</strong> Khuôn mặt đôn hậu, đoan trang, hàng nghìn cánh tay xòe rộng như vầng hào quang chở che nhân loại."
    ]
  },

  "mt-bai-16": {
    badge: "Bảo tồn giá trị truyền thống trong đời sống đương đại",
    title: "Gốm hoa nâu thời Lý - Trần, Gốm hoa lam thời Lê & Ứng dụng trang trí",
    artist: "Nghệ nhân gốm cổ Thăng Long - Bát Tràng",
    medium: "Gốm nung men tro, men ngọc, men lam vẽ dưới men",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Gom_hoa_nau_thoi_Ly.jpg/600px-Gom_hoa_nau_thoi_Ly.jpg",
    analysis: [
      "<strong>Gốm hoa nâu (Lý - Trần):</strong> Kĩ thuật cạo men để lộ xương gốm hoặc vẽ men màu nâu sắt mộc mạc hình hoa sen, chim muông, võ sĩ chiến đấu.",
      "<strong>Gốm hoa lam (Thời Lê):</strong> Nét vẽ phóng khoáng bằng màu xanh cobalt dưới lớp men trắng trong suốt, đạt độ tinh xảo đỉnh cao.",
      "<strong>Ứng dụng trang trí đồ vật:</strong> Đưa hoa văn sóng nước, hoa sen di sản lên chậu cây gốm sứ, bình hoa, ốp điện thoại làm giàu thêm giá trị văn hóa đương đại."
    ]
  },

  "mt-bai-kt2": {
    badge: "Đánh giá năng lực mĩ thuật toàn diện cuối năm học",
    title: "Không gian Triển lãm & Trưng bày tổng kết 8 Chủ đề Mĩ Thuật 7",
    artist: "Tập thể học sinh lớp 7",
    medium: "Hội họa, Điêu khắc, In ấn, Đồ họa ứng dụng và Mô hình thủ công",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Leonardo_da_Vinci_-_Lady_with_an_Ermine_%28Czartoryski_Museum%29.jpg/600px-Leonardo_da_Vinci_-_Lady_with_an_Ermine_%28Czartoryski_Museum%29.jpg",
    analysis: [
      "<strong>Đánh giá 4 phẩm chất năng lực:</strong> Quan sát thị giác → Sáng tạo và thực hành thẩm mĩ → Phân tích, đánh giá tác phẩm → Vận dụng di sản vào đời sống.",
      "<strong>Giao lưu học tập:</strong> Học sinh đóng vai hướng dẫn viên nghệ thuật (docent), tự tin thuyết trình về thông điệp và hành trình sáng tạo của sản phẩm.",
      "<strong>Tôn trọng sự đa dạng:</strong> Đánh giá không dựa trên một 'mẫu đúng' duy nhất mà trân trọng cá tính, ý tưởng độc đáo và sự tiến bộ của từng cá nhân."
    ]
  }
};

module.exports = { lessonIllustrations };
