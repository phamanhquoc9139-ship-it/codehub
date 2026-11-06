// khtn9_data_physics.js - Phần 1: Mở đầu & Vật lí (Bài 1 đến Bài 17)
module.exports = [
  {
    id: 1,
    title: "Nhận biết một số dụng cụ, hóa chất. Thuyết trình một vấn đề khoa học",
    chapter: "BÀI MỞ ĐẦU",
    branch: "Mở đầu",
    icon: "fa-flask-vial",
    summary: "Quy tắc an toàn trong phòng thí nghiệm, nhận diện dụng cụ quang - điện - hóa - sinh và 5 bước thuyết trình vấn đề khoa học.",
    keyPoints: [
      "Dụng cụ quang học (kính lúp, kính hiển vi): đặt mẫu đúng vị trí, chỉnh ánh sáng và tiêu cự từ phóng đại thấp trước.",
      "Dụng cụ điện (ampe kế, vôn kế, biến trở): ampe kế mắc nối tiếp, vôn kế mắc song song, chọn thang đo phù hợp và mắc đúng cực (+ / -).",
      "Dụng cụ hóa học & sinh học: ống nghiệm, pipette, đũa thủy tinh, lam kính, lamen; không dùng miệng hút hóa chất.",
      "An toàn hóa chất: Đọc nhãn, nhận biết ký hiệu nguy hiểm, không nếm ngửi, đun nghiêng miệng ống nghiệm ra xa người.",
      "5 bước thuyết trình khoa học: 1. Xác định câu hỏi -> 2. Thu thập dữ liệu đáng tin cậy -> 3. Chọn bằng chứng và lập luận -> 4. Thiết kế poster/slide -> 5. Trình bày mạch lạc, đối thoại khoa học."
    ],
    formula: "5\\text{ bước thuyết trình}: \\text{Câu hỏi} \\to \\text{Thu thập tin} \\to \\text{Chọn bằng chứng} \\to \\text{Báo cáo/Slide} \\to \\text{Thuyết trình}",
    experiment: "Nhận biết nhãn cảnh báo nguy hiểm trên chai lọ hóa chất (dễ cháy, ăn mòn, độc hại, kích ứng) và thao tác cầm ống nghiệm bằng kẹp gỗ đúng góc 45-60° khi đun nóng.",
    quiz: {
      q: "Khi mắc vôn kế và ampe kế vào mạch điện để đo hiệu điện thế và cường độ dòng điện qua bóng đèn, cách mắc nào sau đây là đúng quy tắc an toàn?",
      options: [
        "Vôn kế mắc nối tiếp, ampe kế mắc song song với bóng đèn",
        "Ampe kế mắc nối tiếp, vôn kế mắc song song với bóng đèn",
        "Cả ampe kế và vôn kế đều mắc song song với bóng đèn",
        "Cả ampe kế và vôn kế đều mắc nối tiếp với bóng đèn"
      ],
      ans: 1,
      expl: "Ampe kế có điện trở rất nhỏ nên bắt buộc phải mắc nối tiếp với tải để đo dòng điện. Vôn kế có điện trở rất lớn nên phải mắc song song giữa hai đầu thiết bị cần đo hiệu điện thế."
    }
  },
  {
    id: 2,
    title: "Động năng. Thế năng",
    chapter: "CHƯƠNG I. NĂNG LƯỢNG CƠ HỌC",
    branch: "Vật lí",
    icon: "fa-person-running",
    summary: "Khái niệm năng lượng do chuyển động (động năng) và năng lượng do vị trí trong trọng trường (thế năng).",
    keyPoints: [
      "Vật có khả năng sinh công thì có năng lượng. Vật đứng yên so với mốc chọn thì động năng Wđ = 0.",
      "Động năng phụ thuộc vào khối lượng và tốc độ của vật: Wđ = 1/2 m v² (J). Tốc độ tăng gấp đôi thì động năng tăng gấp 4 lần.",
      "Thế năng trọng trường là năng lượng vật có do độ cao so với mốc thế năng: Wt = mgh = P.h (J).",
      "Chọn mặt đất làm mốc thế năng: nâng vật lên càng cao thì thế năng càng lớn; vật ở dưới mốc có thế năng âm.",
      "Vận dụng: Dòng nước trên cao ở hồ thủy điện có thế năng lớn; khi đổ xuống làm quay turbine phát điện."
    ],
    formula: "W_đ = \\frac{1}{2}mv^2; \\quad W_t = mgh = P \\cdot h \\quad (g \\approx 10\\text{ N/kg})",
    experiment: "Thí nghiệm va chạm: thả quả cầu thép lăn từ máng nghiêng ở các độ cao khác nhau va chạm vào khối gỗ trên mặt bàn nằm ngang để quan sát quãng đường dịch chuyển của khối gỗ.",
    quiz: {
      q: "Một ô tô có khối lượng 1 tấn đang chạy với tốc độ 20 m/s (72 km/h). Động năng của ô tô này bằng bao nhiêu?",
      options: [
        "10.000 J",
        "20.000 J",
        "200.000 J",
        "400.000 J"
      ],
      ans: 2,
      expl: "Đổi 1 tấn = 1000 kg. Áp dụng công thức Wđ = 1/2 m v² = 0.5 * 1000 * 20² = 500 * 400 = 200.000 J = 200 kJ."
    }
  },
  {
    id: 3,
    title: "Cơ năng",
    chapter: "CHƯƠNG I. NĂNG LƯỢNG CƠ HỌC",
    branch: "Vật lí",
    icon: "fa-arrows-spin",
    summary: "Tổng động năng và thế năng của vật, sự chuyển hóa qua lại và định luật bảo toàn cơ năng trong trọng trường.",
    keyPoints: [
      "Cơ năng bằng tổng động năng và thế năng: W = Wđ + Wt.",
      "Khi vật chuyển động chỉ chịu tác dụng của trọng lực (bỏ qua lực cản không khí), cơ năng được bảo toàn: W = Wđ + Wt = const.",
      "Vật rơi tự do: độ cao giảm -> thế năng giảm -> tốc độ tăng -> động năng tăng. Thế năng chuyển hóa thành động năng.",
      "Vật ném thẳng đứng lên cao: động năng chuyển hóa thành thế năng; tại đỉnh quỹ đạo động năng bằng 0, thế năng cực đại.",
      "Khi có ma sát / lực cản: cơ năng không bảo toàn mà một phần chuyển hóa thành nhiệt năng và âm thanh."
    ],
    formula: "W = W_đ + W_t = \\frac{1}{2}mv^2 + mgh = \\text{hằng số} \\quad (\\text{khi không có ma sát})",
    experiment: "Thí nghiệm con lắc đơn / con lắc Maxwell: quan sát sự tăng giảm tuần hoàn giữa độ cao (thế năng) và tốc độ quay (động năng) của đĩa kim loại.",
    quiz: {
      q: "Khi một quả bóng được ném thẳng đứng từ mặt đất lên cao, trong suốt quá trình bay lên (bỏ qua sức cản không khí) thì:",
      options: [
        "Động năng tăng, thế năng giảm",
        "Động năng chuyển hóa dần thành thế năng, tổng cơ năng không đổi",
        "Cả động năng và thế năng đều tăng liên tục",
        "Cơ năng giảm dần do độ cao tăng"
      ],
      ans: 1,
      expl: "Khi bay lên, tốc độ giảm nên động năng giảm; độ cao tăng nên thế năng tăng. Do bỏ qua lực cản, động năng đã chuyển hóa hoàn toàn sang thế năng và cơ năng được bảo toàn."
    }
  },
  {
    id: 4,
    title: "Công và công suất",
    chapter: "CHƯƠNG I. NĂNG LƯỢNG CƠ HỌC",
    branch: "Vật lí",
    icon: "fa-bolt-lightning",
    summary: "Điều kiện sinh công cơ học, công thức tính công khi lực hợp góc α, ý nghĩa vật lí của công suất.",
    keyPoints: [
      "Lực sinh công khi tác dụng lên vật làm vật dịch chuyển. Nếu lực cùng hướng chuyển động: A = F.s (J).",
      "Nếu lực hợp với hướng chuyển động góc α: A = F.s.cosα. Lực vuông góc phương chuyển động không sinh công (A = 0). Lực ngược hướng sinh công cản (A < 0).",
      "Công suất đặc trưng cho tốc độ thực hiện công: P = A / t, đơn vị Watt (W). 1 W = 1 J/s.",
      "Mối liên hệ giữa công suất và tốc độ chuyển động đều: P = F.v.",
      "Vận dụng: Động cơ máy nâng có công suất lớn giúp nâng cùng khối lượng hàng lên cao trong thời gian ngắn hơn."
    ],
    formula: "A = F \\cdot s \\cdot \\cos\\alpha; \\quad \\mathcal{P} = \\frac{A}{t} = F \\cdot v \\quad (1\\text{ kW} = 1000\\text{ W})",
    experiment: "Đo công và công suất của học sinh khi chạy bước lên cầu thang gác bằng cách dùng thước dây đo độ cao h và đồng hồ bấm giây đo thời gian t (P = mgh / t).",
    quiz: {
      q: "Một cần cẩu nâng một kiện hàng nặng 500 kg lên cao 6 mét trong thời gian 15 giây. Lấy g = 10 N/kg. Công suất trung bình của cần cẩu là:",
      options: [
        "1.500 W",
        "2.000 W",
        "3.000 W",
        "30.000 W"
      ],
      ans: 1,
      expl: "Lực nâng tối thiểu F = P = mg = 500 * 10 = 5000 N. Công nâng A = F * h = 5000 * 6 = 30.000 J. Công suất P = A / t = 30.000 / 15 = 2.000 W."
    }
  },
  {
    id: 5,
    title: "Khúc xạ ánh sáng",
    chapter: "CHƯƠNG II. ÁNH SÁNG",
    branch: "Vật lí",
    icon: "fa-wand-magic-sparkles",
    summary: "Hiện tượng khúc xạ ánh sáng, định luật khúc xạ ánh sáng và chiết suất của môi trường.",
    keyPoints: [
      "Khúc xạ là hiện tượng tia sáng bị đổi hướng truyền (gãy khúc) khi truyền xiên góc qua mặt phân cách giữa hai môi trường trong suốt.",
      "Tia khúc xạ nằm trong mặt phẳng tới (tạo bởi tia tới và pháp tuyến tại điểm tới), ở phía bên kia pháp tuyến so với tia tới.",
      "Khi truyền từ môi trường chiết quang kém sang môi trường chiết quang hơn (n1 < n2 như từ không khí vào nước), góc khúc xạ nhỏ hơn góc tới (r < i).",
      "Định luật khúc xạ ánh sáng: n1.sin(i) = n2.sin(r). Chiết suất tuyệt đối n = c / v (c = 3.10^8 m/s).",
      "Chiếu tia sáng vuông góc với mặt phân cách (i = 0°): tia sáng truyền thẳng không bị khúc xạ (r = 0°)."
    ],
    formula: "n_1 \\sin i = n_2 \\sin r; \\quad n = \\frac{c}{v} \\ge 1",
    experiment: "Dùng hộp quang học có gắn bảng đo góc tròn, chiếu chùm sáng hẹp laze từ không khí vào khối bán trụ thủy tinh để quan sát và đo các cặp góc tới i và góc khúc xạ r.",
    quiz: {
      q: "Chiếu một tia sáng từ không khí vào nước với góc tới i = 45°. Biết chiết suất của nước n = 4/3 và không khí n = 1. Góc khúc xạ r xấp xỉ bằng:",
      options: [
        "60°",
        "45°",
        "32°",
        "90°"
      ],
      ans: 2,
      expl: "Áp dụng định luật khúc xạ: 1 * sin 45° = (4/3) * sin r => sin r = (3/4) * (√2/2) ≈ 0.5303 => r ≈ 32° (nhỏ hơn góc tới 45°)."
    }
  },
  {
    id: 6,
    title: "Phản xạ toàn phần",
    chapter: "CHƯƠNG II. ÁNH SÁNG",
    branch: "Vật lí",
    icon: "fa-shield-halved",
    summary: "Điều kiện xảy ra hiện tượng phản xạ toàn phần và các ứng dụng đột phá trong viễn thông, y học.",
    keyPoints: [
      "Phản xạ toàn phần là hiện tượng toàn bộ tia sáng tới bị phản xạ trở lại môi trường trong suốt ban đầu tại mặt phân cách.",
      "Hai điều kiện bắt buộc để có phản xạ toàn phần: 1. Ánh sáng truyền từ môi trường chiết quang hơn sang môi trường chiết quang kém (n1 > n2); 2. Góc tới lớn hơn hoặc bằng góc giới hạn phản xạ toàn phần (i >= i_gh).",
      "Công thức tính góc giới hạn: sin(i_gh) = n2 / n1.",
      "Với góc tới i < i_gh: vẫn xảy ra hiện tượng khúc xạ (và một phần phản xạ yếu).",
      "Ứng dụng: Cáp quang truyền dữ liệu internet tốc độ cao, ống nội soi quang học trong y tế, giải thích ảo ảnh vũng nước trên đường nhựa vào buổi trưa nắng gắt."
    ],
    formula: "\\sin i_{gh} = \\frac{n_2}{n_1} \\quad (n_1 > n_2); \\quad \\text{Điều kiện}: i \\ge i_{gh}",
    experiment: "Chiếu tia sáng từ đáy khối bán trụ thủy tinh (n1 ≈ 1.5) ra không khí (n2 = 1). Tăng dần góc tới i; khi i đạt xấp xỉ 42°, tia khúc xạ đi là là mặt phân cách; vượt quá 42° thì tia khúc xạ biến mất hoàn toàn.",
    quiz: {
      q: "Chiếu tia sáng từ thủy tinh (n = 1.5) sang không khí (n = 1). Góc giới hạn phản xạ toàn phần i_gh bằng:",
      options: [
        "30°",
        "41.8°",
        "48.6°",
        "60°"
      ],
      ans: 1,
      expl: "sin(i_gh) = n2 / n1 = 1 / 1.5 = 2/3 ≈ 0.6667 => i_gh ≈ 41.8°. Khi góc tới i ≥ 41.8° sẽ xảy ra phản xạ toàn phần."
    }
  },
  {
    id: 7,
    title: "Lăng kính",
    chapter: "CHƯƠNG II. ÁNH SÁNG",
    branch: "Vật lí",
    icon: "fa-shapes",
    summary: "Đặc điểm cấu tạo của lăng kính, hiện tượng tán sắc ánh sáng trắng và cơ chế tạo màu sắc của vật thể.",
    keyPoints: [
      "Lăng kính là khối chất trong suốt, đồng tính, thường có dạng lăng trụ tam giác. Hai mặt bên là mặt khúc xạ, giao tuyến là cạnh, mặt đối diện là đáy.",
      "Khi tia sáng đơn sắc đi qua lăng kính, nó bị khúc xạ hai lần ở hai mặt bên và tia ló luôn bị lệch về phía đáy lăng kính.",
      "Tán sắc ánh sáng: Khi chiếu chùm ánh sáng trắng qua lăng kính, chùm sáng bị tách thành dải màu biến đổi liên tục từ Đỏ đến Tím (Đỏ, Da cam, Vàng, Lục, Lam, Chàm, Tím).",
      "Trong dải tán sắc: Tia Đỏ bị lệch ít nhất, tia Tím bị lệch nhiều nhất (do chiết suất của thủy tinh đối với ánh sáng tím lớn hơn ánh sáng đỏ).",
      "Màu sắc vật: Vật có màu nào vì nó phản xạ/tán xạ ánh sáng màu đó vào mắt ta và hấp thụ các màu khác. Vật màu đen hấp thụ gần như toàn bộ ánh sáng."
    ],
    formula: "\\text{Thứ tự góc lệch}: D_{đỏ} < D_{cam} < D_{vàng} < D_{lục} < D_{lam} < D_{chàm} < D_{tím}",
    experiment: "Thí nghiệm Newton: Dùng lăng kính thủy tinh phân tích chùm ánh sáng Mặt Trời thành dải 7 sắc cầu vồng hứng trên màn chắn, sau đó dùng lăng kính thứ hai ghép ngược để tổng hợp lại thành ánh sáng trắng.",
    quiz: {
      q: "Khi một chùm ánh sáng trắng đi qua lăng kính thủy tinh, thành phần đơn sắc nào bị lệch nhiều nhất về phía đáy lăng kính?",
      options: [
        "Ánh sáng đỏ",
        "Ánh sáng vàng",
        "Ánh sáng lục",
        "Ánh sáng tím"
      ],
      ans: 3,
      expl: "Trong hiện tượng tán sắc ánh sáng qua lăng kính, ánh sáng tím có chiết suất lớn nhất nên bị lệch nhiều nhất; ánh sáng đỏ có chiết suất nhỏ nhất nên bị lệch ít nhất."
    }
  },
  {
    id: 8,
    title: "Thấu kính",
    chapter: "CHƯƠNG II. ÁNH SÁNG",
    branch: "Vật lí",
    icon: "fa-circle-dot",
    summary: "Phân loại thấu kính hội tụ và phân kì, các trục - quang tâm - tiêu điểm và tính chất ảnh tạo bởi thấu kính.",
    keyPoints: [
      "Thấu kính hội tụ (rìa mỏng): Chùm tia tới song song với trục chính cho chùm tia ló hội tụ tại tiêu điểm thật F'.",
      "Thấu kính phân kì (rìa dày): Chùm tia tới song song cho chùm tia ló phân kì loe rộng, có đường kéo dài đi qua tiêu điểm ảo F'.",
      "Ba tia sáng đặc biệt để dựng ảnh: 1. Tia qua quang tâm O truyền thẳng; 2. Tia song song trục chính cho tia ló đi qua F' (hoặc đường kéo dài qua F'); 3. Tia đi qua F cho tia ló song song trục chính.",
      "Ảnh qua thấu kính hội tụ: Ngoài 2f cho ảnh thật, ngược chiều, nhỏ hơn vật; tại 2f ảnh thật bằng vật; từ f đến 2f ảnh thật lớn hơn vật; trong khoảng f cho ảnh ảo cùng chiều lớn hơn vật.",
      "Ảnh qua thấu kính phân kì: Mọi vị trí vật thật luôn cho ảnh ảo, cùng chiều, nhỏ hơn vật và nằm trong khoảng tiêu cự."
    ],
    formula: "\\frac{1}{f} = \\frac{1}{d} + \\frac{1}{d'} \\quad (d' > 0\\text{: ảnh thật}, d' < 0\\text{: ảnh ảo})",
    experiment: "Bố trí giá quang học gồm nguồn sáng chữ F, thấu kính hội tụ và màn hứng. Dịch chuyển vật ở các khoảng cách d > 2f, f < d < 2f và d < f để quan sát đặc điểm ảnh trên màn.",
    quiz: {
      q: "Đặt một vật sáng vuông góc với trục chính của thấu kính hội tụ có tiêu cự f = 10 cm tại vị trí cách thấu kính d = 15 cm. Ảnh thu được có tính chất gì?",
      options: [
        "Ảnh thật, ngược chiều và nhỏ hơn vật",
        "Ảnh thật, ngược chiều và lớn hơn vật",
        "Ảnh ảo, cùng chiều và lớn hơn vật",
        "Ảnh ảo, cùng chiều và nhỏ hơn vật"
      ],
      ans: 1,
      expl: "Vị trí vật d = 15 cm nằm trong khoảng giữa f (10 cm) và 2f (20 cm). Qua thấu kính hội tụ, vật nằm trong khoảng f < d < 2f sẽ cho ảnh thật, ngược chiều và lớn hơn vật."
    }
  },
  {
    id: 9,
    title: "Thực hành đo tiêu cự thấu kính hội tụ",
    chapter: "CHƯƠNG II. ÁNH SÁNG",
    branch: "Vật lí",
    icon: "fa-ruler-combined",
    summary: "Phương pháp xác định tiêu cự thấu kính hội tụ bằng cách tìm vị trí ảnh thật rõ nét bằng vật trên màn chắn.",
    keyPoints: [
      "Cơ sở lí thuyết: Khi vật cách thấu kính d = 2f, thấu kính sẽ cho ảnh thật rõ nét trên màn ở khoảng cách d' = 2f và có kích thước đúng bằng vật (A'B' = AB).",
      "Khoảng cách giữa vật và màn khi đó là L = d + d' = 2f + 2f = 4f -> Công thức tính tiêu cự: f ≈ L / 4.",
      "Dụng cụ: Giá quang học thẳng, nguồn sáng (đèn LED chữ F hoặc 1), thấu kính hội tụ cần đo, màn hứng ảnh mờ có thước đo mi-li-mét.",
      "Các bước tiến hành: 1. Lắp thấu kính ở giữa vật và màn; 2. Dịch chuyển đồng thời vật và màn sao cho trên màn xuất hiện ảnh rõ nét; 3. Đo kích thước ảnh và điều chỉnh đến khi ảnh bằng vật; 4. Đọc khoảng cách L giữa vật và màn rồi tính f = L / 4.",
      "Lưu ý an toàn & sai số: Thực hiện phép đo 3-5 lần, tính giá trị trung bình f_tb và sai số của phép đo; không nhìn trực tiếp vào chùm tia LED công suất lớn."
    ],
    formula: "d = d' = 2f \\implies L = d + d' = 4f \\implies f = \\frac{L}{4}",
    experiment: "Thực hành đo trực tiếp tiêu cự của thấu kính hội tụ mỏng trên băng ghế quang học học sinh, kiểm tra đối chiếu kết quả với phương pháp đo Bessel.",
    quiz: {
      q: "Trong bài thực hành đo tiêu cự của thấu kính hội tụ, khi thu được ảnh thật trên màn có kích thước bằng vật, người ta đo được khoảng cách từ vật đến màn là 48 cm. Tiêu cự của thấu kính đó là:",
      options: [
        "48 cm",
        "24 cm",
        "16 cm",
        "12 cm"
      ],
      ans: 3,
      expl: "Khi ảnh thật bằng vật thì khoảng cách từ vật đến màn là L = 4f. Suy ra tiêu cự f = L / 4 = 48 / 4 = 12 cm."
    }
  },
  {
    id: 10,
    title: "Kính lúp. Bài tập thấu kính",
    chapter: "CHƯƠNG II. ÁNH SÁNG",
    branch: "Vật lí",
    icon: "fa-magnifying-glass-plus",
    summary: "Cấu tạo kính lúp, số bội giác của kính lúp và phương pháp giải bài tập hình học thấu kính.",
    keyPoints: [
      "Kính lúp là thấu kính hội tụ có tiêu cự ngắn (vài cm), dùng để quan sát các vật nhỏ.",
      "Nguyên tắc sử dụng: Đặt vật trong khoảng tiêu cự của kính lúp (d < f) để thu được ảnh ảo, cùng chiều và lớn hơn vật rất nhiều.",
      "Số bội giác của kính lúp ghi trên vành kính (2x, 3x, 5x, 10x): G = 25 / f (trong đó f tính bằng đơn vị cm, 25 cm là khoảng cực cận quy ước của mắt thường).",
      "Kính lúp có số bội giác càng lớn thì tiêu cự càng ngắn và cho ảnh càng lớn.",
      "Phương pháp giải bài tập thấu kính: Dựng đúng 2 tia sáng đặc biệt, sử dụng các cặp tam giác đồng dạng (OAB đồng dạng OA'B', F'OI đồng dạng F'A'B') để thiết lập tỉ lệ khoảng cách và kích thước ảnh."
    ],
    formula: "G = \\frac{25}{f\\text{ (cm)}}; \\quad \\frac{A'B'}{AB} = \\frac{d'}{d}",
    experiment: "Dùng kính lúp cầm tay có số bội giác 5x (tiêu cự f = 5 cm) để soi các đường vân tay, sợi vải cotton và mạch in điện tử để quan sát độ phóng đại của ảnh ảo.",
    quiz: {
      q: "Trên vành của một chiếc kính lúp cầm tay có ghi ký hiệu 5x. Tiêu cự của kính lúp này là:",
      options: [
        "25 cm",
        "10 cm",
        "5 cm",
        "2 cm"
      ],
      ans: 2,
      expl: "Áp dụng công thức số bội giác kính lúp G = 25 / f => f = 25 / G = 25 / 5 = 5 cm."
    }
  },
  {
    id: 11,
    title: "Điện trở. Định luật Ohm",
    chapter: "CHƯƠNG III. ĐIỆN",
    branch: "Vật lí",
    icon: "fa-microchip",
    summary: "Khái niệm điện trở dây dẫn, định luật Ohm và công thức tính điện trở phụ thuộc vào chiều dài, tiết diện, vật liệu.",
    keyPoints: [
      "Điện trở biểu thị mức độ cản trở dòng điện của dây dẫn, ký hiệu là R, đơn vị là Ohm (Ω).",
      "Định luật Ohm: Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây: I = U / R.",
      "Đồ thị biểu diễn mối quan hệ U theo I của một vật dẫn ở nhiệt độ xác định là một đường thẳng đi qua gốc tọa độ O; độ dốc của đồ thị chính là điện trở R.",
      "Điện trở của dây dẫn đồng chất, tiết diện đều: R = ρ.(l / S), trong đó ρ là điện trở suất (Ω.m), l là chiều dài (m), S là tiết diện (m²).",
      "Dây dẫn càng dài thì R càng lớn; tiết diện càng lớn thì R càng nhỏ. Đồng và nhôm có điện trở suất nhỏ nên dùng làm dây dẫn điện."
    ],
    formula: "I = \\frac{U}{R}; \\quad U = I \\cdot R; \\quad R = \\rho \\frac{\\ell}{S}",
    experiment: "Mắc mạch điện gồm nguồn điện một chiều thay đổi được, ampe kế mắc nối tiếp với điện trở mẫu R, vôn kế mắc song song giữa hai đầu R; đo I tương ứng với các giá trị U = 1V, 2V, 3V, 4V để vẽ đồ thị I-U.",
    quiz: {
      q: "Đặt vào hai đầu một dây dẫn điện trở R = 20 Ω một hiệu điện thế U = 12 V. Cường độ dòng điện chạy qua dây dẫn là:",
      options: [
        "0.6 A",
        "1.67 A",
        "2.4 A",
        "240 A"
      ],
      ans: 0,
      expl: "Áp dụng định luật Ohm: I = U / R = 12 / 20 = 0.6 A."
    }
  },
  {
    id: 12,
    title: "Đoạn mạch nối tiếp, song song",
    chapter: "CHƯƠNG III. ĐIỆN",
    branch: "Vật lí",
    icon: "fa-network-wired",
    summary: "Đặc điểm cường độ dòng điện, hiệu điện thế và điện trở tương đương của đoạn mạch mắc nối tiếp và song song.",
    keyPoints: [
      "Đoạn mạch nối tiếp: I = I1 = I2; U = U1 + U2; R_tđ = R1 + R2. Hiệu điện thế tỉ lệ thuận với điện trở: U1 / U2 = R1 / R2.",
      "Đoạn mạch song song: U = U1 = U2; I = I1 + I2; 1/R_tđ = 1/R1 + 1/R2. Với hai điện trở mắc song song: R_tđ = (R1.R2) / (R1 + R2).",
      "Điện trở tương đương của đoạn mạch song song luôn nhỏ hơn điện trở của từng nhánh thành phần.",
      "Vận dụng thực tế: Mạng điện gia đình luôn mắc các thiết bị song song để nhận cùng hiệu điện thế định mức (220V) và khi tắt 1 thiết bị thì các thiết bị khác vẫn hoạt động bình thường.",
      "Quy tắc an toàn: Không nối trực tiếp hai cực của nguồn điện mà không qua điện trở tải vì sẽ gây đoản mạch (ngắn mạch), làm nóng chảy dây dẫn và phát hỏa."
    ],
    formula: "\\text{Nối tiếp: } R_{tđ} = R_1 + R_2; \\quad \\text{Song song: } R_{tđ} = \\frac{R_1 R_2}{R_1 + R_2}",
    experiment: "Mắc hai điện trở R1 = 10 Ω và R2 = 15 Ω thành mạch song song với nguồn 6V; dùng ampe kế đo cường độ dòng điện ở mạch chính I và hai nhánh I1, I2 để kiểm nghiệm hệ thức I = I1 + I2.",
    quiz: {
      q: "Hai điện trở R1 = 6 Ω và R2 = 12 Ω được mắc song song vào nguồn điện có hiệu điện thế U = 12 V. Điện trở tương đương của đoạn mạch và cường độ dòng điện mạch chính là:",
      options: [
        "R_tđ = 18 Ω; I = 0.67 A",
        "R_tđ = 4 Ω; I = 3 A",
        "R_tđ = 8 Ω; I = 1.5 A",
        "R_tđ = 72 Ω; I = 6 A"
      ],
      ans: 1,
      expl: "Điện trở tương đương của mạch song song: R_tđ = (R1 * R2) / (R1 + R2) = (6 * 12) / (6 + 12) = 72 / 18 = 4 Ω. Cường độ dòng điện mạch chính: I = U / R_tđ = 12 / 4 = 3 A."
    }
  },
  {
    id: 13,
    title: "Năng lượng của dòng điện và công suất điện",
    chapter: "CHƯƠNG III. ĐIỆN",
    branch: "Vật lí",
    icon: "fa-plug-circle-bolt",
    summary: "Công của dòng điện (điện năng tiêu thụ), công suất điện định mức và các biện pháp sử dụng điện an toàn, tiết kiệm.",
    keyPoints: [
      "Điện năng tiêu thụ của đoạn mạch bằng công của lực điện trường thực hiện: A = U.I.t = P.t (J).",
      "Công suất điện đặc trưng cho tốc độ tiêu thụ điện năng: P = U.I. Đối với đoạn mạch có điện trở thuần R: P = I².R = U² / R.",
      "Đơn vị đo điện năng trong thực tế là kilowatt giờ (kWh): 1 kWh = 1 số điện = 1000 W x 3600 s = 3.600.000 J (3,6.10^6 J).",
      "Số đếm của công tơ điện gia đình cho biết lượng điện năng đã tiêu thụ tính theo đơn vị kWh.",
      "An toàn điện: Sử dụng aptomat (cầu dao tự động) chống rò, nối đất vỏ kim loại cho bình nóng lạnh/máy giặt, ngắt nguồn trước khi thay lắp, không chạm vào dây trần."
    ],
    formula: "A = UIt = \\mathcal{P}t; \\quad \\mathcal{P} = UI = I^2 R = \\frac{U^2}{R}; \\quad 1\\text{ kWh} = 3{,}6 \\times 10^6\\text{ J}",
    experiment: "Đọc số liệu định mức trên bóng đèn LED (12W - 220V) và tính toán điện năng bóng đèn tiêu thụ trong 1 tháng (30 ngày, mỗi ngày thắp sáng 5 giờ) và tính tiền điện tương ứng.",
    quiz: {
      q: "Một ấm điện công suất 1000 W hoạt động bình thường trong thời gian 30 phút mỗi ngày. Điện năng ấm điện tiêu thụ trong 30 ngày là:",
      options: [
        "15 kWh",
        "30 kWh",
        "45 kWh",
        "900 kWh"
      ],
      ans: 0,
      expl: "Thời gian ấm hoạt động mỗi ngày: t = 30 phút = 0.5 giờ. Điện năng mỗi ngày: A_ngày = P * t = 1 kW * 0.5 h = 0.5 kWh. Điện năng trong 30 ngày: A_tháng = 0.5 * 30 = 15 kWh (tương đương 15 số điện)."
    }
  },
  {
    id: 14,
    title: "Cảm ứng điện từ. Nguyên tắc tạo ra dòng điện xoay chiều",
    chapter: "CHƯƠNG IV. ĐIỆN TỪ",
    branch: "Vật lí",
    icon: "fa-rotate",
    summary: "Hiện tượng cảm ứng điện từ Faraday, điều kiện xuất hiện dòng điện cảm ứng và nguyên tắc cấu tạo máy phát điện xoay chiều.",
    keyPoints: [
      "Khi số đường sức từ xuyên qua tiết diện S của cuộn dây dẫn kín biến thiên (tăng lên hoặc giảm đi), trong cuộn dây xuất hiện dòng điện cảm ứng.",
      "Cách làm biến thiên từ thông: Đưa thanh nam châm lại gần hoặc ra xa cuộn dây; quay nam châm trước cuộn dây; hoặc làm cuộn dây quay trong từ trường.",
      "Tốc độ biến thiên số đường sức từ càng nhanh thì cường độ dòng điện cảm ứng sinh ra càng lớn.",
      "Dòng điện xoay chiều (AC) là dòng điện có chiều và cường độ luân phiên biến thiên theo thời gian.",
      "Máy phát điện xoay chiều gồm hai bộ phận chính: Nam châm tạo ra từ trường và cuộn dây dẫn tạo ra dòng điện. Một bộ phận đứng yên (stato), bộ phận còn lại quay (roto)."
    ],
    formula: "\\text{Cơ năng quay (Turbine)} \\xrightarrow{\\text{Cảm ứng điện từ}} \\text{Điện năng xoay chiều (AC)}",
    experiment: "Nối hai đầu một cuộn dây đồng có nhiều vòng vào hai cực của một điện kế nhạy G (hoặc hai đèn LED mắc song song ngược cực). Đưa cực Bắc của thanh nam châm di chuyển nhanh vào lòng cuộn dây, quan sát kim điện kế lệch sang một phía.",
    quiz: {
      q: "Trường hợp nào sau đây KHÔNG xuất hiện dòng điện cảm ứng trong cuộn dây dẫn kín?",
      options: [
        "Đưa một cực của thanh nam châm lại gần cuộn dây",
        "Kéo thanh nam châm ra xa cuộn dây",
        "Để thanh nam châm đứng yên hoàn toàn trong lòng cuộn dây",
        "Cho cuộn dây quay đều trong từ trường của một nam châm chữ U"
      ],
      ans: 2,
      expl: "Điều kiện tiên quyết để xuất hiện dòng điện cảm ứng là số đường sức từ xuyên qua tiết diện cuộn dây phải biến thiên (tăng hoặc giảm). Khi nam châm đứng yên, số đường sức từ không đổi nên dòng cảm ứng bằng 0."
    }
  },
  {
    id: 15,
    title: "Tác dụng của dòng điện xoay chiều",
    chapter: "CHƯƠNG IV. ĐIỆN TỪ",
    branch: "Vật lí",
    icon: "fa-plug",
    summary: "Các tác dụng nhiệt, quang, từ và sinh lí của dòng điện xoay chiều, so sánh với dòng một chiều và an toàn điện lưới.",
    keyPoints: [
      "Tác dụng nhiệt: Dòng điện xoay chiều đi qua vật dẫn tỏa nhiệt theo định luật Joule-Lenz. Ứng dụng trong bàn là, ấm siêu tốc, bếp từ, máy nước nóng.",
      "Tác dụng quang: Làm phát sáng bóng đèn dây tóc, đèn huỳnh quang, đèn LED.",
      "Tác dụng từ: Dòng xoay chiều chạy qua cuộn dây tạo ra từ trường biến thiên; lực từ đổi chiều tuần hoàn theo dòng điện. Ứng dụng trong động cơ điện xoay chiều, máy biến áp.",
      "Tác dụng sinh lí: Dòng điện xoay chiều có thể gây co giật cơ, làm tê liệt hô hấp, ngừng tim. Mạng điện sinh hoạt 220V rất nguy hiểm đến tính mạng con người.",
      "Lưu ý an toàn: Không bao giờ tự ý chạm vào dây điện hở, không dùng thiết bị điện khi tay ướt, lắp đặt cầu chì và aptomat chống rò trong nhà."
    ],
    formula: "Q = I^2 R t \\quad (\\text{Tác dụng nhiệt của dòng điện xoay chiều})",
    experiment: "Dùng một nam châm điện nối với nguồn điện xoay chiều hạ áp 12V; đưa một lá thép mỏng lại gần đầu nam châm điện, cảm nhận lá thép bị hút nhả rung động liên tục với tần số cao do từ trường đổi chiều.",
    quiz: {
      q: "Khi dòng điện xoay chiều chạy qua dây tóc bóng đèn sợi đốt, tác dụng chủ yếu được ứng dụng để thắp sáng là:",
      options: [
        "Tác dụng từ và tác dụng sinh lí",
        "Tác dụng nhiệt (làm nóng dây tóc đến phát sáng) và tác dụng quang",
        "Tác dụng hóa học và tác dụng từ",
        "Tác dụng sinh lí và tác dụng hóa học"
      ],
      ans: 1,
      expl: "Dòng điện chạy qua dây tóc bóng đèn có điện trở lớn làm dây tóc nóng đỏ tới nhiệt độ cao (khoảng 2500°C) và phát ra ánh sáng. Đây là sự kết hợp của tác dụng nhiệt và tác dụng phát quang."
    }
  },
  {
    id: 16,
    title: "Vòng năng lượng trên Trái Đất. Năng lượng hóa thạch",
    chapter: "CHƯƠNG V. NĂNG LƯỢNG VỚI CUỘC SỐNG",
    branch: "Vật lí",
    icon: "fa-sun",
    summary: "Mặt Trời - nguồn năng lượng sơ cấp chi phối Trái Đất, nguồn gốc nhiên liệu hóa thạch và hệ lụy phát thải khí nhà kính.",
    keyPoints: [
      "Mặt Trời là nguồn cung cấp năng lượng chủ yếu cho bề mặt Trái Đất: sưởi ấm khí quyển, tạo ra gió, thúc đẩy vòng tuần hoàn nước và duy trì quang hợp ở thực vật.",
      "Nhiên liệu hóa thạch (than đá, dầu mỏ, khí tự nhiên) được tạo thành từ tàn tích sinh vật bị chôn vùi dưới lòng đất hàng trăm triệu năm trước.",
      "Nhiên liệu hóa thạch là tài nguyên không tái tạo trên thang thời gian con người, trữ lượng có hạn và đang cạn kiệt nhanh chóng.",
      "Việc đốt nhiên liệu hóa thạch sinh ra lượng lớn CO2 gây hiệu ứng nhà kính làm Trái Đất nóng lên, kèm theo các khí độc hại SO2, NOx gây mưa acid và ô nhiễm không khí.",
      "Giải pháp cấp bách: Tiết kiệm năng lượng, nâng cao hiệu suất thiết bị và chuyển dịch sang năng lượng sạch phát thải thấp."
    ],
    formula: "\\text{Quang năng Mặt Trời} \\xrightarrow{\\text{Quang hợp}} \\text{Hóa năng sinh khối} \\xrightarrow{\\text{Địa chất triệu năm}} \\text{Nhiên liệu hóa thạch}",
    experiment: "Mô hình hiệu ứng nhà kính: Đặt hai nhiệt kế giống nhau, một chiếc để ngoài trời và một chiếc đặt trong hộp kính trong suốt đậy kín; chiếu đèn sợi đốt công suất lớn và đo độ chênh nhiệt độ sau 20 phút.",
    quiz: {
      q: "Nguồn năng lượng nào sau đây KHÔNG PHẢI là nhiên liệu hóa thạch?",
      options: [
        "Than đá khai thác từ mỏ hầm lò",
        "Dầu mỏ thô khai thác ngoài thềm lục địa",
        "Khí thiên nhiên hóa lỏng (LNG)",
        "Nhiên liệu sinh học cồn ethanol sinh học sản xuất từ sắn"
      ],
      ans: 3,
      expl: "Cồn ethanol sinh học được sản xuất bằng cách lên men tinh bột cây trồng (sắn, ngô), thuộc nhóm năng lượng sinh khối tái tạo, không phải là nhiên liệu hóa thạch chôn vùi hàng triệu năm."
    }
  },
  {
    id: 17,
    title: "Một số dạng năng lượng tái tạo",
    chapter: "CHƯƠNG V. NĂNG LƯỢNG VỚI CUỘC SỐNG",
    branch: "Vật lí",
    icon: "fa-leaf",
    summary: "Đặc điểm, ưu nhược điểm của năng lượng mặt trời, năng lượng gió, thủy điện, sinh khối, địa nhiệt và năng lượng đại dương.",
    keyPoints: [
      "Năng lượng tái tạo là năng lượng từ các nguồn thiên nhiên liên tục được bổ sung tự nhiên trong thời gian ngắn: quang năng, gió, nước, địa nhiệt, sinh khối.",
      "Năng lượng mặt trời: Pin quang điện (quang năng -> điện năng) và máy nước nóng năng lượng mặt trời (quang năng -> nhiệt năng). Ưu điểm: sạch, vô tận; Nhược điểm: phụ thuộc thời tiết và ngày đêm.",
      "Năng lượng gió: Turbine gió biến động năng của gió thành điện năng. Cần diện tích rộng, có thể gây tiếng ồn và ảnh hưởng đường bay của chim.",
      "Thủy điện: Thế năng của nước trong hồ chứa -> động năng quay turbine -> điện năng. Tiềm năng lớn nhưng cần chú ý tác động sinh thái và dòng chảy hạ lưu.",
      "Phối hợp đa dạng nguồn năng lượng tái tạo kết hợp lưới điện thông minh và hệ thống lưu trữ pin tích năng là xu hướng tương lai."
    ],
    formula: "\\text{Năng lượng tái tạo} = \\text{Mặt trời} + \\text{Gió} + \\text{Thủy điện} + \\text{Sinh khối} + \\text{Địa nhiệt}",
    experiment: "Chế tạo mô hình chong chóng gió mini gắn vào motor điện một chiều nhỏ; dùng quạt bàn thổi gió làm quay chong chóng và quan sát đèn LED gắn vào motor phát sáng.",
    quiz: {
      q: "Thiết bị nào sau đây chuyển hóa trực tiếp quang năng của Mặt Trời thành điện năng?",
      options: [
        "Bình đun nước nóng năng lượng mặt trời",
        "Pin mặt trời (Pin quang điện)",
        "Gương cầu hội tụ nhiệt mặt trời",
        "Turbine phát điện chạy bằng hơi nước"
      ],
      ans: 1,
      expl: "Pin mặt trời (solar cell) hoạt động dựa trên hiệu ứng quang điện trong chất bán dẫn, chuyển đổi trực tiếp năng lượng ánh sáng thành năng lượng điện."
    }
  }
];
