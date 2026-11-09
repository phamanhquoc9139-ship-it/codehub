const fs = require('fs');

const reviewArenaData = {
  summaryTable7: [
    { id: 1, name: "Bài 1. Biến ngẫu nhiên rời rạc và các số đặc trưng", core: "Bảng phân bố xác suất pᵢ = P(X = xᵢ), Σ pᵢ = 1; Kì vọng E(X) = Σ xᵢ pᵢ; Phương sai V(X) = Σ xᵢ² pᵢ − [E(X)]²; Độ lệch chuẩn σ(X) = √V(X)", practice: "So sánh các phương án đầu tư chứng khoán, định giá vé trò chơi có thưởng theo kì vọng E(X) và rủi ro σ(X)" },
    { id: 2, name: "Bài 2. Biến ngẫu nhiên có phân bố nhị thức", core: "Chuỗi phép thử Bernoulli độc lập; Công thức Bernoulli P(X = k) = C(n, k) pᵏ (1−p)ⁿ⁻ᵏ; Kì vọng E(X) = np; Phương sai V(X) = np(1−p); σ(X) = √[np(1−p)]", practice: "Dự đoán số câu đúng khi làm trắc nghiệm, kiểm soát tỉ lệ linh kiện lỗi trong lô hàng 200 con chip" },
    { id: 3, name: "Bài 3. Vận dụng hệ BPT bậc nhất hai ẩn (Quy hoạch tuyến tính)", core: "Mô hình LP hai biến x, y; Hàm mục tiêu F(x, y) = Ax + By; Định lí điểm cực biên: Giá trị tối ưu luôn đạt tại ít nhất một đỉnh đa giác lồi miền nghiệm", practice: "Kế hoạch sản xuất hai loại bánh Trung thu thu lợi nhuận tối đa, phương án thuê xe tải chở hàng cứu trợ lũ lụt chi phí thấp nhất" },
    { id: 4, name: "Bài 4. Vận dụng đạo hàm giải quyết bài toán tối ưu", core: "Mô hình hóa một biến f(x) trên miền D; Giải f'(x) = 0 và lập BBT; Tối đa hóa lợi nhuận Π(x) = R(x) − C(x) khi Doanh thu biên bằng Chi phí biên (R' = C')", practice: "Định giá vé xem bóng đá đạt doanh thu kỷ lục, tối ưu thiết kế vỏ lon nước giải khát hình trụ h = 2r tiết kiệm nhôm" },
    { id: 5, name: "Bài 5. Tiền tệ. Lãi suất", core: "Sức mua lạm phát P_t = P(1−g)ᵗ; Lãi suất thực Fisher: r_thực = (1+r)/(1+g) − 1 ≈ r − g; Lãi đơn A = P(1+rt); Lãi kép ghép n kì A = P(1+r/n)ⁿᵗ", practice: "Đánh giá mức độ hao mòn tài sản do lạm phát, sức mạnh kì diệu của lãi kép khi tiết kiệm sớm từ tuổi 20" },
    { id: 6, name: "Bài 6. Tín dụng. Vay nợ", core: "Cơ chế thẻ tín dụng, chu kì miễn lãi 45–55 ngày, tính lãi theo dư nợ thực tế từng ngày; Khoản trả góp đều cuối kì P = V·i / [1 − (1+i)⁻ⁿ]; Điểm tín dụng CIC", practice: "Tránh bẫy trả nợ tối thiểu thẻ tín dụng, lập kế hoạch trả nợ vay ngân hàng mua nhà 1 tỉ đồng an toàn dưới 35% thu nhập" },
    { id: 7, name: "Bài 7. Đầu tư tài chính. Kế hoạch tài chính cá nhân", core: "Giá trị tương lai niên kim A = P[(1+i)ⁿ − 1]/i; Giá trị hiện tại PV = P[1 − (1+i)⁻ⁿ]/i; Hệ thức truy hồi Aₙ = (1+i)Aₙ₋₁ + P; Quy tắc ngân sách 80/10/10", practice: "So sánh trúng số 10 tỉ nhận ngay vs nhận 800 triệu/năm trong 20 năm; lập quỹ tài chính khẩn cấp cho người mới ra trường" }
  ],

  coreFormulaTable: [
    { topic: "Phân bố xác suất rời rạc", formula: "pᵢ = P(X = xᵢ), pᵢ ≥ 0, Σ pᵢ = 1", note: "Tổng xác suất của toàn bộ các giá trị có thể luôn bằng 1" },
    { topic: "Kì vọng toán học (Trung bình)", formula: "E(X) = Σ xᵢ · pᵢ", note: "Giá trị trung bình dài hạn theo nghĩa xác suất" },
    { topic: "Phương sai biến ngẫu nhiên", formula: "V(X) = Σ (xᵢ − E(X))² · pᵢ = Σ xᵢ² · pᵢ − [E(X)]²", note: "Đo mức độ phân tán quanh kì vọng (V(X) ≥ 0)" },
    { topic: "Độ lệch chuẩn", formula: "σ(X) = √V(X)", note: "Có cùng đơn vị đo với biến ngẫu nhiên X (đo lường rủi ro)" },
    { topic: "Công thức Bernoulli", formula: "P(X = k) = C(n, k) · pᵏ · (1 − p)ⁿ⁻ᵏ", note: "Xác suất có đúng k lần thành công trong n lần thử độc lập" },
    { topic: "Số đặc trưng Phân bố nhị thức", formula: "E(X) = n·p; V(X) = n·p·(1 − p); σ(X) = √[np(1−p)]", note: "Áp dụng cho X ~ B(n, p)" },
    { topic: "Quy hoạch tuyến tính (LP)", formula: "F(x, y) = Ax + By", note: "Giá trị tối ưu luôn đạt tại ít nhất một điểm cực biên đa giác" },
    { topic: "Tối ưu hóa lợi nhuận", formula: "Π(x) = R(x) − C(x); Max khi R'(x) = C'(x)", note: "Lợi nhuận cực đại khi Doanh thu biên bằng Chi phí biên" },
    { topic: "Lãi đơn", formula: "I = P·r·t; A = P(1 + r·t)", note: "Tiền lãi luôn tính trên vốn gốc ban đầu P" },
    { topic: "Lãi kép ghép n kì/năm", formula: "A = P · (1 + r / n)ⁿᵗ", note: "Tiền lãi sau mỗi kì được nhập vào vốn để tính lãi kì sau" },
    { topic: "Lạm phát & Sức mua", formula: "P_t = P · (1 − g)ᵗ", note: "Sức mua quy đổi sau t năm với tỉ lệ lạm phát g/năm" },
    { topic: "Lãi suất thực tế Fisher", formula: "r_thực = (1 + r) / (1 + g) − 1 ≈ r − g", note: "Phản ánh mức tăng trưởng thực sự của sức mua sau lạm phát" },
    { topic: "Khoản trả góp đều cuối kì", formula: "P = V · i / [1 − (1 + i)⁻ⁿ]", note: "Khoản tiền cố định trả cuối mỗi kì cho khoản vay V lãi suất i" },
    { topic: "Giá trị hiện tại một khoản tiền", formula: "PV = A / (1 + i)ⁿ = A · (1 + i)⁻ⁿ", note: "Quy đổi khoản tiền A nhận ở kì n về thời điểm hiện tại" },
    { topic: "Giá trị tương lai niên kim (FV)", formula: "A = P · [(1 + i)ⁿ − 1] / i", note: "Gửi số tiền đều P vào cuối mỗi kì trong n kì" },
    { topic: "Giá trị hiện tại niên kim (PV)", formula: "PV = P · [1 − (1 + i)⁻ⁿ] / i", note: "Quy đổi chuỗi tiền đều P nhận trong n kì về hiện tại" },
    { topic: "Hệ thức truy hồi tích lũy", formula: "A₀ = Vốn ban đầu; Aₙ = (1 + i)·Aₙ₋₁ + P", note: "Số dư cuối kì thứ n khi mỗi kì gửi thêm khoản P" }
  ],

  websiteNotes: [
    {
      title: "Nguyên tắc cấu trúc & Phân chia bài học",
      icon: "fa-solid fa-layer-group",
      points: [
        "Giữ nguyên chuẩn xác 3 chuyên đề và 7 bài học cốt lõi theo đúng mục lục SGK người dùng cung cấp.",
        "Các phần bài tập cuối mỗi chuyên đề được chuyển hóa thành các câu hỏi luyện tập và Đấu trường Trạng Nguyên, không tính thành bài học mới làm loãng mục lục.",
        "Đảm bảo sự liên kết logic từ xác suất biến ngẫu nhiên → mô hình tối ưu hóa → ứng dụng tài chính ngân hàng."
      ]
    },
    {
      title: "Lưu ý bài toán Xác suất & Biến ngẫu nhiên",
      icon: "fa-solid fa-dice",
      points: [
        "Người học cần phân biệt rõ ràng giữa biến ngẫu nhiên tổng quát (lập bảng xác suất) và biến ngẫu nhiên có phân bố nhị thức B(n, p).",
        "Khi áp dụng phân bố nhị thức, bắt buộc phải kiểm tra 3 điều kiện: (1) n lần thử cố định; (2) Mỗi lần chỉ có 2 kết quả; (3) Tính độc lập và xác suất p không đổi.",
        "Luôn tận dụng quy tắc biến cố đối với các câu hỏi 'ít nhất một lần': P(X ≥ 1) = 1 − P(X = 0) để tính nhanh."
      ]
    },
    {
      title: "Lưu ý bài toán Tối ưu hóa (LP & Đạo hàm)",
      icon: "fa-solid fa-arrows-to-circle",
      points: [
        "Với bài toán quy hoạch tuyến tính 2 biến: Phải vẽ đúng hệ trục Oxy, gạch bỏ đúng miền vi phạm và giải chính xác tọa độ các giao điểm cực biên.",
        "Với bài toán tối ưu bằng đạo hàm: Phải xác định rõ tập xác định D từ điều kiện thực tế; không chỉ giải f'(x) = 0 mà phải kiểm tra cả giá trị tại các đầu mút biên.",
        "Nếu biến quyết định đòi hỏi là số nguyên (sản lượng x ∈ ℕ), cần so sánh giá trị hàm tại hai số nguyên lân cận của nghiệm tới hạn."
      ]
    },
    {
      title: "Lưu ý bài toán Tài chính & Đơn vị tính toán",
      icon: "fa-solid fa-hand-holding-dollar",
      points: [
        "Thống nhất tuyệt đối đơn vị tiền tệ (triệu đồng, đồng), đơn vị thời gian (năm, quý, tháng) và kì ghép lãi trước khi thay số vào công thức.",
        "Phân biệt rõ ràng giữa lãi suất danh nghĩa năm r và lãi suất mỗi kì i = r/n (ví dụ lãi suất 8,4%/năm thì lãi suất mỗi tháng là i = 0,7% = 0,007).",
        "Phân biệt thời điểm nộp tiền: Nộp vào 'cuối kì' hay 'đầu kì' để nhân thêm thừa số (1 + i) tương ứng trong công thức niên kim; không làm tròn số trung gian."
      ]
    }
  ],

  arena20Questions: [
    {
      id: 1,
      q: "Biến ngẫu nhiên rời rạc X có bảng phân bố xác suất: X nhận giá trị 0 với xác suất 0,1; giá trị 1 với xác suất 0,3; giá trị 2 với xác suất 0,4; giá trị 3 với xác suất 0,2. Kì vọng E(X) bằng:",
      options: ["1,5", "1,7", "2,0", "1,2"],
      answer: 1,
      explain: "E(X) = 0×0,1 + 1×0,3 + 2×0,4 + 3×0,2 = 0 + 0,3 + 0,8 + 0,6 = 1,7."
    },
    {
      id: 2,
      q: "Cho biến ngẫu nhiên rời rạc X có kì vọng E(X) = 4 và E(X²) = 25. Phương sai V(X) của X là:",
      options: ["9", "16", "21", "29"],
      answer: 0,
      explain: "Công thức phương sai: V(X) = E(X²) − [E(X)]² = 25 − 4² = 25 − 16 = 9."
    },
    {
      id: 3,
      q: "Gieo 1 đồng xu cân đối 10 lần độc lập. Gọi X là số lần xuất hiện mặt ngửa. Phân bố xác suất của X là:",
      options: ["X ~ B(10; 0,5)", "X ~ B(5; 0,5)", "X ~ B(10; 0,1)", "X ~ B(2; 0,5)"],
      answer: 0,
      explain: "Đây là chuỗi n = 10 phép thử Bernoulli độc lập, xác suất ra mặt ngửa mỗi lần là p = 0,5, nên X ~ B(10; 0,5)."
    },
    {
      id: 4,
      q: "Một hộp chứa 5 quả bóng đỏ và 3 quả bóng xanh. Người ta rút ngẫu nhiên có hoàn lại 4 lần liên tiếp, mỗi lần 1 quả. Xác suất để rút được đúng 3 quả bóng đỏ là:",
      options: [
        "C(4, 3) × (5/8)³ × (3/8)¹",
        "C(4, 3) × (3/8)³ × (5/8)¹",
        "(5/8)³ × (3/8)¹",
        "C(4, 3) × (5/8)⁴"
      ],
      answer: 0,
      explain: "Vì rút có hoàn lại nên xác suất rút được bóng đỏ mỗi lần cố định p = 5/8. Theo công thức Bernoulli với n = 4, k = 3: P(X = 3) = C(4, 3) × (5/8)³ × (3/8)¹."
    },
    {
      id: 5,
      q: "Cho biến ngẫu nhiên X ~ B(50; 0,4). Kì vọng E(X) và phương sai V(X) của X lần lượt là:",
      options: [
        "E(X) = 20; V(X) = 12",
        "E(X) = 20; V(X) = 8",
        "E(X) = 25; V(X) = 15",
        "E(X) = 20; V(X) = 4"
      ],
      answer: 0,
      explain: "E(X) = n·p = 50 × 0,4 = 20. Phương sai V(X) = n·p·(1 − p) = 50 × 0,4 × 0,6 = 12."
    },
    {
      id: 6,
      q: "Trong bài toán quy hoạch tuyến tính hai biến x, y, giá trị tối ưu của hàm mục tiêu F(x, y) = Ax + By trên miền nghiệm đa giác lồi bị chặn luôn đạt được tại:",
      options: [
        "Tâm của đường tròn nội tiếp đa giác",
        "Gốc tọa độ O(0; 0)",
        "Ít nhất một đỉnh (điểm cực biên) của đa giác miền nghiệm",
        "Trung điểm của cạnh dài nhất"
      ],
      answer: 2,
      explain: "Định lí điểm cực biên khẳng định giá trị lớn nhất hoặc nhỏ nhất của hàm mục tiêu tuyến tính trên miền nghiệm đa giác luôn đạt tại ít nhất một đỉnh cực biên."
    },
    {
      id: 7,
      q: "Hàm mục tiêu F(x, y) = 2x + 5y trên miền đa giác có các đỉnh A(1; 1), B(2; 5), C(4; 3), D(3; 0). Giá trị lớn nhất của F(x, y) là:",
      options: ["7", "29", "23", "6"],
      answer: 1,
      explain: "F(A) = 2(1) + 5(1) = 7; F(B) = 2(2) + 5(5) = 29; F(C) = 2(4) + 5(3) = 23; F(D) = 2(3) + 5(0) = 6. Vậy giá trị lớn nhất là 29 tại đỉnh B."
    },
    {
      id: 8,
      q: "Một doanh nghiệp sản xuất độc quyền có hàm tổng chi phí C(x) = x² + 20x + 100 và hàm giá bán p(x) = 100 − x (với x là sản lượng). Mức sản lượng x để doanh nghiệp đạt lợi nhuận tối đa là:",
      options: ["x = 20", "x = 40", "x = 25", "x = 50"],
      answer: 0,
      explain: "Doanh thu R(x) = x·p(x) = 100x − x². Lợi nhuận Π(x) = R(x) − C(x) = (100x − x²) − (x² + 20x + 100) = −2x² + 80x − 100. Đạo hàm: Π'(x) = −4x + 80 = 0 ⇒ x = 20."
    },
    {
      id: 9,
      q: "Nguyên lí kinh tế học nào sau đây là điều kiện cần để lợi nhuận của một cơ sở sản xuất đạt giá trị cực đại?",
      options: [
        "Doanh thu biên bằng Chi phí biên (R'(x) = C'(x))",
        "Chi phí sản xuất đạt mức tối thiểu",
        "Doanh thu bán hàng đạt mức tối đa",
        "Giá bán sản phẩm bằng 0"
      ],
      answer: 0,
      explain: "Lợi nhuận Π(x) = R(x) − C(x) đạt cực trị khi đạo hàm bằng 0: Π'(x) = 0 ⇔ R'(x) = C'(x) (doanh thu biên bằng chi phí biên)."
    },
    {
      id: 10,
      q: "Bác Ba muốn rào một khu đất hình chữ nhật sát một bờ sông thẳng (bờ sông không cần rào). Bác có sẵn 60 m lưới thép. Diện tích khu đất rào được lớn nhất là:",
      options: ["450 m²", "900 m²", "400 m²", "225 m²"],
      answer: 0,
      explain: "Gọi chiều rộng là x (m), chiều dài là y = 60 − 2x (m) với 0 < x < 30. Diện tích S(x) = x(60 − 2x) = −2x² + 60x. Đạo hàm S'(x) = −4x + 60 = 0 ⇒ x = 15 m ⇒ y = 30 m. Diện tích Max = 15 × 30 = 450 m²."
    },
    {
      id: 11,
      q: "Một người gửi tiết kiệm 200 triệu đồng kì hạn 1 năm với lãi suất 7%/năm theo phương thức lãi đơn. Sau 4 năm, tổng số tiền cả gốc lẫn lãi người đó nhận được là:",
      options: ["256 triệu đồng", "262,16 triệu đồng", "248 triệu đồng", "280 triệu đồng"],
      answer: 0,
      explain: "Lãi đơn: A = P(1 + r·t) = 200 × (1 + 0,07 × 4) = 200 × (1 + 0,28) = 256 triệu đồng."
    },
    {
      id: 12,
      q: "Gửi 100 triệu đồng vào ngân hàng với lãi suất 8%/năm, ghép lãi theo quý (4 lần/năm). Số tiền nhận được sau 2 năm (làm tròn đến triệu đồng) là:",
      options: ["116 triệu đồng", "117 triệu đồng", "119 triệu đồng", "121 triệu đồng"],
      answer: 1,
      explain: "A = P(1 + r/n)ⁿᵗ = 100 × (1 + 0,08/4)⁴ˣ² = 100 × (1 + 0,02)⁸ ≈ 117,17 triệu đồng ≈ 117 triệu đồng."
    },
    {
      id: 13,
      q: "Nếu lãi suất danh nghĩa tiền gửi là 7%/năm và tỉ lệ lạm phát bình quân là 4%/năm, theo công thức Fisher chính xác, lãi suất thực tế bằng:",
      options: ["3,00%", "2,88%", "3,12%", "11,00%"],
      answer: 1,
      explain: "r_thực = (1 + r)/(1 + g) − 1 = (1 + 0,07)/(1 + 0,04) − 1 = 1,07 / 1,04 − 1 ≈ 0,028846 = 2,88%."
    },
    {
      id: 14,
      q: "Công thức tính khoản tiền trả góp cố định P cuối mỗi tháng cho khoản vay ban đầu V, lãi suất tháng i, trong thời gian n tháng là:",
      options: [
        "P = V · i / [1 − (1 + i)⁻ⁿ]",
        "P = V · (1 + i)ⁿ / n",
        "P = V · [1 − (1 + i)⁻ⁿ] / i",
        "P = V · i · (1 + i)ⁿ"
      ],
      answer: 0,
      explain: "Đây là công thức niên kim trả góp đều (Amortization): P = V · i / [1 − (1 + i)⁻ⁿ]."
    },
    {
      id: 15,
      q: "Một người vay 100 triệu đồng mua xe máy trả góp trong 12 tháng với lãi suất 1%/tháng. Số tiền cố định phải trả vào cuối mỗi tháng xấp xỉ là:",
      options: ["8,88 triệu đồng", "8,33 triệu đồng", "9,12 triệu đồng", "9,50 triệu đồng"],
      answer: 0,
      explain: "P = 100 × 0,01 / [1 − (1 + 0,01)⁻¹²] = 1 / [1 − 0,88745] = 1 / 0,11255 ≈ 8,885 triệu đồng."
    },
    {
      id: 16,
      q: "Vào cuối mỗi tháng, một người gửi đều đặn 3 triệu đồng vào tài khoản ngân hàng với lãi suất 0,6%/tháng. Sau đúng 3 năm (36 tháng), tổng số tiền tích lũy được là:",
      options: [
        "A = 3 · [(1 + 0,006)³⁶ − 1] / 0,006",
        "A = 3 · (1 + 0,006)³⁶",
        "A = 3 · 36 · (1 + 0,006)",
        "A = 3 · [1 − (1 + 0,006)⁻³⁶] / 0,006"
      ],
      answer: 0,
      explain: "Giá trị tương lai của niên kim gửi cuối kì: A = P · [(1 + i)ⁿ − 1] / i với P = 3, i = 0,006, n = 36."
    },
    {
      id: 17,
      q: "Giá trị hiện tại PV của một khoản tiền 200 triệu đồng nhận được sau 5 năm nữa với lãi suất chiết khấu 7%/năm là:",
      options: ["142,6 triệu đồng", "135,2 triệu đồng", "150,0 triệu đồng", "160,8 triệu đồng"],
      answer: 0,
      explain: "PV = A / (1 + i)ⁿ = 200 / (1 + 0,07)⁵ = 200 / 1,40255 ≈ 142,6 triệu đồng."
    },
    {
      id: 18,
      q: "Theo quy tắc phân bổ ngân sách tài chính cá nhân 80/10/10 được đề cập trong SGK Toán 12, tỉ lệ 80% thu nhập được dùng cho mục đích nào?",
      options: [
        "Các nhu cầu thiết yếu hàng ngày (ăn ở, sinh hoạt, học tập, trả nợ)",
        "Tiết kiệm và đầu tư dài hạn",
        "Chi tiêu giải trí, du lịch và cà phê",
        "Quỹ từ thiện và giúp đỡ người thân"
      ],
      answer: 0,
      explain: "Trong quy tắc 80/10/10: 80% dành cho chi tiêu thiết yếu, 10% dành cho chi tiêu linh hoạt/phát sinh, 10% dành cho tiết kiệm/tích lũy."
    },
    {
      id: 19,
      q: "Mỗi kì tài khoản có số dư ban đầu A₀, lãi suất mỗi kì i và cuối mỗi kì bổ sung khoản tiền tiết kiệm P. Biểu thức truy hồi biểu diễn số dư Aₙ là:",
      options: [
        "Aₙ = (1 + i) · Aₙ₋₁ + P",
        "Aₙ = Aₙ₋₁ + P · (1 + i)",
        "Aₙ = (Aₙ₋₁ + P) · (1 + i)",
        "Aₙ = Aₙ₋₁ · i + P"
      ],
      answer: 0,
      explain: "Số dư Aₙ₋₁ của kì trước sinh lãi thành (1 + i)Aₙ₋₁, sau đó nộp thêm P vào cuối kì, nên Aₙ = (1 + i)·Aₙ₋₁ + P."
    },
    {
      id: 20,
      q: "Một bạn trẻ muốn nhân đôi số tiền tiết kiệm 50 triệu đồng thành 100 triệu đồng với lãi suất danh nghĩa 9%/năm. Theo quy tắc 72, thời gian cần thiết xấp xỉ khoảng:",
      options: ["8 năm", "6 năm", "10 năm", "12 năm"],
      answer: 0,
      explain: "Quy tắc 72 ước lượng thời gian nhân đôi vốn: t ≈ 72 / (lãi suất %) = 72 / 9 = 8 năm."
    }
  ]
};

fs.writeFileSync('scratch/toan12_review_arena.js', 'module.exports = ' + JSON.stringify(reviewArenaData, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/toan12_review_arena.js with summary table, formula table, website notes, and 20 Arena questions!');
