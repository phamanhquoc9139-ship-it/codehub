module.exports = {
  summaryTable: [
  {
    "bai": 1,
    "name": "Hệ phương trình bậc nhất ba ẩn",
    "cd": "Chuyên đề 1",
    "concept": "Dạng tổng quát ax + by + cz = d, nghiệm là bộ ba (x₀, y₀, z₀). Phương pháp khử Gauss đưa về hệ tam giác bậc thang.",
    "formula": "a₁x + b₁y + c₁z = d₁, b'₂y + c'₂z = d'₂, c''₃z = d''₃",
    "app": "Giải tích đa biến, xác định giao điểm của 3 mặt phẳng trong không gian Oxyz."
  },
  {
    "bai": 2,
    "name": "Ứng dụng của hệ phương trình bậc nhất ba ẩn",
    "cd": "Chuyên đề 1",
    "concept": "Mô hình hóa 4 bước các mối quan hệ cân bằng tuyến tính trong kinh tế, kĩ thuật và tự nhiên.",
    "formula": "KCL: Σ I_vào = Σ I_ra; KVL: Σ IR = Σ E; Cân bằng cung cầu Q_D = Q_S",
    "app": "Cân đối danh mục đầu tư, tính dòng điện mạch Kirchhoff, pha trộn quặng/dung dịch."
  },
  {
    "bai": 3,
    "name": "Phương pháp quy nạp toán học",
    "cd": "Chuyên đề 2",
    "concept": "Nguyên lí quy nạp 2 bước: Bước cơ sở (P(p) đúng) và Bước quy nạp (P(k) đúng ⇒ P(k+1) đúng).",
    "formula": "1 + 2 + ... + n = n(n+1)/2; 1 + 3 + ... + (2n-1) = n²; S_n = (n-2)180°",
    "app": "Chứng minh đẳng thức đại số, tính chia hết, đánh giá thuật toán đệ quy trong tin học."
  },
  {
    "bai": 4,
    "name": "Nhị thức Newton",
    "cd": "Chuyên đề 2",
    "concept": "Khai triển lũy thừa bậc n của nhị thức (a+b)ⁿ liên kết tam giác Pascal và các hệ số tổ hợp.",
    "formula": "(a+b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ; T(k+1) = C(n,k) aⁿ⁻ᵏ bᵏ; Σ C(n,k) = 2ⁿ",
    "app": "Tìm hệ số xᵐ, tính xấp xỉ số học, phân bố xác suất nhị thức trong kiểm thử chất lượng."
  },
  {
    "bai": 5,
    "name": "Elip",
    "cd": "Chuyên đề 3",
    "concept": "Tập hợp điểm có tổng khoảng cách tới 2 tiêu điểm không đổi: MF₁ + MF₂ = 2a (2a > 2c).",
    "formula": "x²/a² + y²/b² = 1 (b² = a² - c²); Tâm sai e = c/a < 1; Chuẩn x = ±a/e",
    "app": "Định luật Kepler về quỹ đạo hành tinh, phòng thì thầm âm học, máy tán sỏi thận."
  },
  {
    "bai": 6,
    "name": "Hypebol",
    "cd": "Chuyên đề 3",
    "concept": "Tập hợp điểm có giá trị tuyệt đối hiệu khoảng cách tới 2 tiêu điểm không đổi: |MF₁ - MF₂| = 2a.",
    "formula": "x²/a² - y²/b² = 1 (c² = a² + b²); Tiệm cận y = ±(b/a)x; Tâm sai e = c/a > 1",
    "app": "Hệ thống định vị vô tuyến vi sai LORAN, tháp tản nhiệt làm mát nhà máy điện."
  },
  {
    "bai": 7,
    "name": "Parabol",
    "cd": "Chuyên đề 3",
    "concept": "Tập hợp điểm cách đều tiêu điểm và đường chuẩn: MF = d(M, Δ). Tâm sai e = 1.",
    "formula": "y² = 2px (p > 0); Tiêu điểm F(p/2; 0); Đường chuẩn Δ: x = -p/2",
    "app": "Chảo thu sóng vệ tinh parabol, đèn pha ô tô, kết cấu cáp chủ cầu treo chịu lực."
  },
  {
    "bai": 8,
    "name": "Sự thống nhất giữa ba đường conic",
    "cd": "Chuyên đề 3",
    "concept": "Giao tuyến mặt nón tròn xoay & định nghĩa thống nhất MF / d(M, Δ) = e cho cả 3 đường.",
    "formula": "Elip (0 < e < 1); Parabol (e = 1); Hypebol (e > 1); Vận tốc v = √(2GM/p)",
    "app": "Phân loại chuyển động thiên thể liên sao ('Oumuamua), quang học kính thiên văn Cassegrain."
  }
],
  formulaTable: [
  {
    "name": "Phương trình bậc nhất ba ẩn",
    "formula": "ax + by + cz = d",
    "unit": "a² + b² + c² ≠ 0",
    "note": "Mỗi nghiệm là bộ ba (x₀, y₀, z₀); biểu diễn mặt phẳng trong Oxyz."
  },
  {
    "name": "Tam giác Pascal (Quy tắc cộng)",
    "formula": "C(n+1, k) = C(n, k-1) + C(n, k)",
    "unit": "0 ≤ k ≤ n+1",
    "note": "Số ở giữa bằng tổng hai số liền kề ngay phía trên."
  },
  {
    "name": "Khai triển Nhị thức Newton",
    "formula": "(a + b)ⁿ = Σ_{k=0}ⁿ C_nᵏ aⁿ⁻ᵏ bᵏ",
    "unit": "n ∈ ℕ*",
    "note": "Có đúng n + 1 hạng tử; tổng số mũ của a và b trong mỗi hạng tử luôn bằng n."
  },
  {
    "name": "Số hạng tổng quát thứ k + 1",
    "formula": "T_{k+1} = C_nᵏ aⁿ⁻ᵏ bᵏ",
    "unit": "0 ≤ k ≤ n",
    "note": "Dùng để xác định hệ số của xᵐ bằng cách giải phương trình số mũ."
  },
  {
    "name": "Tổng các hệ số tổ hợp",
    "formula": "Σ_{k=0}ⁿ C_nᵏ = 2ⁿ",
    "unit": "n ∈ ℕ*",
    "note": "Thay a = b = 1 vào khai triển (a+b)ⁿ; bằng số tập con của tập n phần tử."
  },
  {
    "name": "Phương trình chính tắc Elip",
    "formula": "x²/a² + y²/b² = 1",
    "unit": "a > b > 0, b² = a² - c²",
    "note": "Trục lớn 2a, trục nhỏ 2b, tiêu cự 2c, tâm sai e = c/a (0 < e < 1)."
  },
  {
    "name": "Đường chuẩn của Elip",
    "formula": "Δ₁,₂: x = ∓ a/e = ∓ a²/c",
    "unit": "Song song Oy",
    "note": "Khoảng cách giữa hai đường chuẩn bằng 2a²/c."
  },
  {
    "name": "Phương trình chính tắc Hypebol",
    "formula": "x²/a² - y²/b² = 1",
    "unit": "a, b > 0, c² = a² + b²",
    "note": "Trục thực 2a, trục ảo 2b, tiêu cự 2c, tâm sai e = c/a > 1."
  },
  {
    "name": "Tiệm cận của Hypebol",
    "formula": "y = ± (b/a)x",
    "unit": "2 đường thẳng",
    "note": "Khi a = b (hypebol vuông), hai tiệm cận vuông góc y = ±x và e = √2."
  },
  {
    "name": "Phương trình chính tắc Parabol",
    "formula": "y² = 2px",
    "unit": "p > 0 (tham số tiêu)",
    "note": "Tiêu điểm F(p/2; 0), đường chuẩn Δ: x = -p/2, tâm sai e = 1."
  },
  {
    "name": "Bán kính qua tiêu điểm Parabol",
    "formula": "MF = x + p/2",
    "unit": "x ≥ 0",
    "note": "Khoảng cách từ điểm M(x; y) trên parabol đến tiêu điểm F."
  },
  {
    "name": "Định nghĩa Conic thống nhất",
    "formula": "MF / d(M, Δ) = e",
    "unit": "e > 0",
    "note": "0 < e < 1: Elip; e = 1: Parabol; e > 1: Hypebol."
  },
  {
    "name": "Vận tốc vũ trụ tại cận điểm",
    "formula": "v = √(2GM / p)",
    "unit": "m/s",
    "note": "Vận tốc parabol (thoát li); v nhỏ hơn ứng với elip, lớn hơn ứng với hypebol."
  }
],
  mistakesAndTips: [
  {
    "title": "Nhầm lẫn hệ thức giữa ba bán trục a, b, c của Elip và Hypebol",
    "desc": "Trong Elip ta có a là bán trục lớn nhất: a² = b² + c² (hay b² = a² - c²). Ngược lại trong Hypebol thì c là lớn nhất: c² = a² + b². Rất nhiều học sinh nhầm lẫn dấu dẫn tới tính sai tiêu cự c và tâm sai e."
  },
  {
    "title": "Quên xét bước cơ sở trong phương pháp quy nạp toán học",
    "desc": "Quy nạp mà chỉ làm bước chuyển k sang k+1 mà không kiểm tra bước cơ sở n = p (như quân domino đầu tiên) là ngụy biện quy nạp kinh điển. Mọi lập luận chuyển tiếp đều vô nghĩa nếu không có điểm tựa ban đầu."
  },
  {
    "title": "Nhầm lẫn giữa số thứ tự hạng tử và chỉ số k trong nhị thức Newton",
    "desc": "Số hạng thứ nhất ứng với k = 0 (T₁ = C_n⁰ aⁿ), do đó số hạng thứ 5 ứng với k = 4 (T₅ = C_n⁴ aⁿ⁻⁴ b⁴). Cần ghi nhớ công thức số hạng thứ k + 1 là T_{k+1} = C_nᵏ aⁿ⁻ᵏ bᵏ."
  },
  {
    "title": "Đổi vai trò trục trong Parabol chính tắc",
    "desc": "Quy ước sách giáo khoa KNTT phương trình chính tắc parabol mở sang phải là y² = 2px với tiêu điểm F(p/2; 0) và đường chuẩn x = -p/2. Tránh nhầm với x² = 2py (mở lên trên) hoặc quy ước y² = 4ax."
  },
  {
    "title": "Kết luận vội vàng vô số nghiệm khi thấy dòng 0 = 0 trong khử Gauss",
    "desc": "Dòng 0 = 0 chỉ cho biết có ít nhất một phương trình phụ thuộc. Để hệ có vô số nghiệm thì hai phương trình còn lại phải không được mâu thuẫn (không chứa dòng 0 = k với k ≠ 0)."
  },
  {
    "title": "Quy tắc dấu âm khi giải hệ dòng điện định luật Kirchhoff",
    "desc": "Nếu giải ra dòng điện có giá trị âm (ví dụ I₂ = -1,5 A), điều này hoàn toàn hợp lí về mặt toán học và vật lí: cường độ dòng điện có độ lớn 1,5 A nhưng chiều chuyển động thực tế ngược với chiều mũi tên giả định."
  }
],
  arenaQuestions: [
  {
    "q": "Hệ phương trình bậc nhất ba ẩn $\\begin{cases} x + 2y - z = 3 \\\\ 2x - y + z = 4 \\\\ 3x + y = 7 \\end{cases}$ có bao nhiêu nghiệm?",
    "options": [
      "Có nghiệm duy nhất",
      "Vô nghiệm",
      "Có vô số nghiệm",
      "Có đúng hai nghiệm"
    ],
    "answer": 2,
    "explain": "Cộng PT(1) và PT(2): $(x + 2y - z) + (2x - y + z) = 3 + 4 \\implies 3x + y = 7$, trùng hoàn toàn với PT(3). Hệ quy về 2 phương trình độc lập với 3 ẩn, do đó hệ có vô số nghiệm phụ thuộc một tham số."
  },
  {
    "q": "Khi giải hệ ba phương trình bằng phương pháp Gauss, nếu xuất hiện phương trình $0x + 0y + 0z = 8$ thì ta kết luận hệ phương trình:",
    "options": [
      "Có nghiệm duy nhất",
      "Vô số nghiệm",
      "Vô nghiệm",
      "Có nghiệm x = 0, y = 0, z = 8"
    ],
    "answer": 2,
    "explain": "Phương trình $0 = 8$ là vô lí, không tồn tại bộ số nào thỏa mãn nên hệ phương trình vô nghiệm."
  },
  {
    "q": "Ba máy A, B, C sản xuất được tổng cộng 120 chi tiết máy. Số chi tiết máy A sản xuất bằng tổng số chi tiết máy B và C. Phương trình đại số thể hiện dữ kiện này là:",
    "options": [
      "$x + y + z = 120$ và $x - y - z = 0$",
      "$x + y + z = 120$ và $x + y - z = 0$",
      "$x + y + z = 120$ và $2x - y - z = 0$",
      "$x + y + z = 120$ và $x - 2y - 2z = 0$"
    ],
    "answer": 0,
    "explain": "Dữ kiện 1: $x + y + z = 120$. Dữ kiện 2: $x = y + z \\iff x - y - z = 0$."
  },
  {
    "q": "Trong định luật nút mạng điện Kirchhoff, hệ thức cân bằng tại một nút có 2 dòng điện đi vào ($I_1, I_2$) và 1 dòng điện đi ra ($I_3$) là:",
    "options": [
      "$I_1 + I_2 + I_3 = 0$",
      "$I_1 + I_2 - I_3 = 0$",
      "$I_1 - I_2 - I_3 = 0$",
      "$I_1 + I_3 - I_2 = 0$"
    ],
    "answer": 1,
    "explain": "Theo định luật Kirchhoff 1 (KCL), tổng dòng điện đi vào nút bằng tổng dòng điện đi ra: $I_1 + I_2 = I_3 \\iff I_1 + I_2 - I_3 = 0$."
  },
  {
    "q": "Mệnh đề $P(n) = n^2 - n + 41$ cho kết quả là hợp số khi $n$ bằng giá trị nào?",
    "options": [
      "$n = 10$",
      "$n = 20$",
      "$n = 30$",
      "$n = 41$"
    ],
    "answer": 3,
    "explain": "Khi $n = 41$, ta có $P(41) = 41^2 - 41 + 41 = 41^2$, chia hết cho 41 nên là một hợp số. Đây là ví dụ kinh điển về giới hạn của phép thử hữu hạn."
  },
  {
    "q": "Để chứng minh mệnh đề $P(n)$ đúng với mọi $n \\ge 3$ bằng phương pháp quy nạp toán học, bước cơ sở cần chứng minh:",
    "options": [
      "$P(1)$ đúng",
      "$P(2)$ đúng",
      "$P(3)$ đúng",
      "$P(0)$ đúng"
    ],
    "answer": 2,
    "explain": "Bước cơ sở kiểm tra giá trị nhỏ nhất của tập hợp chỉ số, vì đề bài yêu cầu $n \\ge 3$ nên bước cơ sở là chứng minh $P(3)$ đúng."
  },
  {
    "q": "Tổng các góc trong một đa giác lồi có $n$ cạnh ($n \\ge 3$) được chứng minh bằng quy nạp bằng công thức:",
    "options": [
      "$S_n = n \\times 180^\\circ$",
      "$S_n = (n - 1) \\times 180^\\circ$",
      "$S_n = (n - 2) \\times 180^\\circ$",
      "$S_n = (2n - 4) \\times 90^\\circ$"
    ],
    "answer": 2,
    "explain": "Tổng các góc trong đa giác lồi $n$ cạnh là $S_n = (n - 2)180^\\circ$. Với tam giác $n=3 \\implies S_3 = 180^\\circ$."
  },
  {
    "q": "Hàng thứ 4 của tam giác Pascal (với hàng 0 là '1') có các hệ số lần lượt là:",
    "options": [
      "1, 3, 3, 1",
      "1, 4, 6, 4, 1",
      "1, 5, 10, 10, 5, 1",
      "1, 4, 8, 4, 1"
    ],
    "answer": 1,
    "explain": "Hàng 0: 1; Hàng 1: 1 1; Hàng 2: 1 2 1; Hàng 3: 1 3 3 1; Hàng 4: 1, 4, 6, 4, 1."
  },
  {
    "q": "Khai triển của nhị thức Newton $(x + y)^7$ có tất cả bao nhiêu hạng tử?",
    "options": [
      "7",
      "8",
      "14",
      "49"
    ],
    "answer": 1,
    "explain": "Khai triển $(a+b)^n$ luôn có đúng $n+1$ hạng tử. Với $n=7$, số hạng tử là $7 + 1 = 8$."
  },
  {
    "q": "Hệ số của $x^2$ trong khai triển nhị thức $(x + 3)^5$ là:",
    "options": [
      "90",
      "270",
      "10",
      "810"
    ],
    "answer": 1,
    "explain": "Số hạng tổng quát: $T_{k+1} = C_5^k x^{5-k} 3^k$. Ta cần $5 - k = 2 \\implies k = 3$. Hệ số là $C_5^3 \\cdot 3^3 = 10 \\times 27 = 270$."
  },
  {
    "q": "Giá trị của tổng tổ hợp $S = C_{10}^0 + C_{10}^1 + C_{10}^2 + \\dots + C_{10}^{10}$ bằng:",
    "options": [
      "100",
      "512",
      "1024",
      "2048"
    ],
    "answer": 2,
    "explain": "Áp dụng hệ quả nhị thức Newton: $\\sum_{k=0}^n C_n^k = 2^n$. Với $n = 10$, tổng bằng $2^{10} = 1024$."
  },
  {
    "q": "Cho elip $(E): \\frac{x^2}{25} + \\frac{y^2}{9} = 1$. Độ dài tiêu cự $F_1F_2$ của elip này là:",
    "options": [
      "4",
      "8",
      "6",
      "10"
    ],
    "answer": 1,
    "explain": "Ta có $a^2 = 25, b^2 = 9 \\implies c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 9} = 4$. Độ dài tiêu cự là $2c = 2 \\times 4 = 8$."
  },
  {
    "q": "Tâm sai $e$ của elip $(E): \\frac{x^2}{100} + \\frac{y^2}{64} = 1$ bằng:",
    "options": [
      "$0{,}6$",
      "$0{,}8$",
      "$0{,}36$",
      "$0{,}64$"
    ],
    "answer": 0,
    "explain": "Ta có $a = 10, b = 8 \\implies c = \\sqrt{100 - 64} = 6$. Tâm sai $e = \\frac{c}{a} = \\frac{6}{10} = 0{,}6$."
  },
  {
    "q": "Phương trình chính tắc của Hypebol có tiêu cự bằng 10 và trục thực bằng 6 là:",
    "options": [
      "$\\frac{x^2}{9} - \\frac{y^2}{16} = 1$",
      "$\\frac{x^2}{36} - \\frac{y^2}{64} = 1$",
      "$\\frac{x^2}{9} + \\frac{y^2}{16} = 1$",
      "$\\frac{x^2}{16} - \\frac{y^2}{9} = 1$"
    ],
    "answer": 0,
    "explain": "Trục thực $2a = 6 \\implies a = 3 \\implies a^2 = 9$. Tiêu cự $2c = 10 \\implies c = 5$. Trục ảo $b^2 = c^2 - a^2 = 25 - 9 = 16$. Phương trình là $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$."
  },
  {
    "q": "Phương trình hai đường tiệm cận của hypebol $(H): \\frac{x^2}{16} - \\frac{y^2}{25} = 1$ là:",
    "options": [
      "$y = \\pm \\frac{4}{5}x$",
      "$y = \\pm \\frac{5}{4}x$",
      "$y = \\pm \\frac{25}{16}x$",
      "$y = \\pm \\frac{16}{25}x$"
    ],
    "answer": 1,
    "explain": "Ta có $a = 4, b = 5$. Hai đường tiệm cận của hypebol là $y = \\pm \\frac{b}{a}x = \\pm \\frac{5}{4}x$."
  },
  {
    "q": "Phương trình chính tắc của Parabol có tiêu điểm $F(2; 0)$ là:",
    "options": [
      "$y^2 = 4x$",
      "$y^2 = 8x$",
      "$y^2 = 2x$",
      "$x^2 = 8y$"
    ],
    "answer": 1,
    "explain": "Tiêu điểm $F(p/2; 0) = F(2; 0) \\implies p/2 = 2 \\implies p = 4$. Phương trình chính tắc là $y^2 = 2px = 2(4)x = 8x$."
  },
  {
    "q": "Phương trình đường chuẩn $\\Delta$ của parabol $(P): y^2 = 16x$ là:",
    "options": [
      "$x = -4$",
      "$x = 4$",
      "$x = -8$",
      "$y = -4$"
    ],
    "answer": 0,
    "explain": "Ta có $2p = 16 \\implies p = 8 \\implies p/2 = 4$. Đường chuẩn có phương trình $x = -p/2 = -4$."
  },
  {
    "q": "Tập hợp các điểm $M$ thỏa mãn tỉ số khoảng cách $\\frac{MF}{d(M, \\Delta)} = 1{,}5$ là đường conic nào?",
    "options": [
      "Đường tròn",
      "Đường Elip",
      "Đường Parabol",
      "Đường Hypebol"
    ],
    "answer": 3,
    "explain": "Vì tâm sai $e = 1{,}5 > 1$, theo định nghĩa tiêu điểm - đường chuẩn thống nhất, đây là một đường Hypebol."
  },
  {
    "q": "Thiết diện tạo bởi mặt phẳng cắt một nhánh của mặt nón tròn xoay và không song song với đường sinh là đường nào?",
    "options": [
      "Đường Elip",
      "Đường Parabol",
      "Đường Hypebol",
      "Đường tròn"
    ],
    "answer": 0,
    "explain": "Khi mặt phẳng cắt toàn bộ các đường sinh của một nhánh của mặt nón (không song song đường sinh), giao tuyến thu được luôn là một đường Elip."
  },
  {
    "q": "Một sao chổi bay quanh Mặt Trời với khoảng cách cận điểm $p$ đạt vận tốc đúng bằng $v = \\sqrt{\\frac{2GM}{p}}$. Quỹ đạo của sao chổi này có dạng hình gì?",
    "options": [
      "Đường tròn",
      "Đường Elip",
      "Đường Parabol",
      "Đường Hypebol"
    ],
    "answer": 2,
    "explain": "Vận tốc $v = \\sqrt{\\frac{2GM}{p}}$ chính là vận tốc parabol (vận tốc vũ trụ cấp 2). Quỹ đạo của sao chổi là một đường Parabol, nó chỉ ghé qua Mặt Trời đúng một lần rồi thoát li."
  }
]
};
