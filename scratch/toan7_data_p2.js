// Dữ liệu Toán 7 - Tập 2 (Chương VI -> Chương X: Bài 20 -> Bài 37)
// Kèm Bảng công thức tra nhanh và 8 Quy trình giải toán chuẩn
// SGK Kết nối tri thức với cuộc sống - GDPT 2018

const chaptersPart2 = [
  // ==================== CHƯƠNG VI ====================
  {
    chapterNum: "VI",
    title: "Chương VI. Tỉ lệ thức và đại lượng tỉ lệ",
    desc: "Tỉ lệ thức, tính chất dãy tỉ số bằng nhau, bài toán chia theo tỉ lệ, đại lượng tỉ lệ thuận và đại lượng tỉ lệ nghịch.",
    lessons: [
      {
        id: "bai-20",
        num: 20,
        title: "Bài 20. Tỉ lệ thức",
        summary: "Định nghĩa tỉ lệ thức a/b = c/d, tính chất cơ bản a·d = b·c, tìm số chưa biết trong tỉ lệ thức.",
        coreConcepts: [
          "Tỉ lệ thức là đẳng thức của hai tỉ số: a/b = c/d (với b, d ≠ 0), còn viết là a : b = c : d.",
          "Các số a và d gọi là ngoại tỉ (số hạng ngoài); b và c gọi là trung tỉ (số hạng trong).",
          "Tính chất cơ bản: Nếu a/b = c/d thì a·d = b·c (tích ngoại tỉ bằng tích trung tỉ).",
          "Đảo lại: Nếu a·d = b·c (với a, b, c, d ≠ 0) thì ta lập được 4 tỉ lệ thức:\n  a/b = c/d ; a/c = b/d ; d/b = c/a ; d/c = b/a."
        ],
        formulas: [
          "a/b = c/d <=> a·d = b·c",
          "Tìm x: x = (b·c) / d (khi x/b = c/d)"
        ],
        methods: "Quy tắc tìm x: Nhân chéo chia số còn lại: x = (tích hai số đối diện chéo) / số còn lại.",
        example: {
          problem: "Tìm x trong tỉ lệ thức: x / 6 = 5 / 2.",
          solution: "Áp dụng tính chất cơ bản của tỉ lệ thức: x · 2 = 6 · 5 => 2x = 30 => x = 30 : 2 = 15."
        },
        quiz: [
          {
            q: "Từ đẳng thức 2 · 6 = 3 · 4, ta lập được tỉ lệ thức nào sau đây?",
            options: ["A. 2/3 = 4/6", "B. 2/4 = 6/3", "C. 2/6 = 3/4", "D. 3/2 = 6/4"],
            a: 0,
            exp: "Vì 2 · 6 = 3 · 4 nên tỉ lệ thức tương ứng là 2/3 = 4/6 (tích chéo 2 · 6 = 3 · 4)."
          },
          {
            q: "Giá trị của x thỏa mãn x / (−3) = 4 / 2 là:",
            options: ["A. −6", "B. 6", "C. −12", "D. 12"],
            a: 0,
            exp: "x = (−3 · 4) / 2 = −12 / 2 = −6."
          }
        ]
      },
      {
        id: "bai-21",
        num: 21,
        title: "Bài 21. Tính chất của dãy tỉ số bằng nhau",
        summary: "Công thức mở rộng dãy tỉ số bằng nhau; giải toán chia số lượng theo tỉ lệ đã cho.",
        coreConcepts: [
          "Tính chất: Từ a/b = c/d suy ra: a/b = c/d = (a + c)/(b + d) = (a − c)/(b − d) (với mẫu khác 0).",
          "Mở rộng cho dãy ba tỉ số: a/b = c/d = e/f = (a + c + e)/(b + d + f) = (a − c + e)/(b − d + f).",
          "Khi nói các số x, y, z tỉ lệ với các số 2, 3, 5, ta viết: x/2 = y/3 = z/5."
        ],
        formulas: [
          "a/b = c/d = (a ± c) / (b ± d)",
          "a/b = c/d = e/f = (a + c + e) / (b + d + f)"
        ],
        methods: "Lập dãy tỉ số bằng nhau → Xác định tổng hoặc hiệu đã cho → Áp dụng tính chất dãy tỉ số để tìm hằng số k → Tính từng đại lượng.",
        example: {
          problem: "Tìm x và y biết: x/3 = y/5 và x + y = 32.",
          solution: "Áp dụng tính chất của dãy tỉ số bằng nhau:\nx/3 = y/5 = (x + y)/(3 + 5) = 32/8 = 4.\nSuy ra: x = 3 · 4 = 12 ; y = 5 · 4 = 20."
        },
        quiz: [
          {
            q: "Cho x/2 = y/3 và x + y = 15. Giá trị của x và y lần lượt là:",
            options: ["A. x = 6, y = 9", "B. x = 9, y = 6", "C. x = 5, y = 10", "D. x = 4, y = 11"],
            a: 0,
            exp: "x/2 = y/3 = (x+y)/(2+3) = 15/5 = 3 => x = 2·3 = 6, y = 3·3 = 9."
          },
          {
            q: "Ba lớp 7A, 7B, 7C có số học sinh tỉ lệ với 8; 9; 10. Kí hiệu đúng của dãy tỉ số là:",
            options: ["A. a/8 = b/9 = c/10", "B. a·8 = b·9 = c·10", "C. a + 8 = b + 9 = c + 10", "D. 8/a = 10/b = 9/c"],
            a: 0,
            exp: "Tỉ lệ với 8, 9, 10 được biểu diễn bằng dãy tỉ số: a/8 = b/9 = c/10."
          }
        ]
      },
      {
        id: "bai-22",
        num: 22,
        title: "Bài 22. Đại lượng tỉ lệ thuận",
        summary: "Định nghĩa y = kx (k ≠ 0), hệ số tỉ lệ k, tính chất của hai đại lượng tỉ lệ thuận trong đời sống.",
        coreConcepts: [
          "Nếu đại lượng y liên hệ với đại lượng x theo công thức y = kx (với k là hằng số khác 0) thì ta nói y tỉ lệ thuận với x theo hệ số tỉ lệ k.",
          "Khi y tỉ lệ thuận với x theo hệ số k thì x cũng tỉ lệ thuận với y theo hệ số tỉ lệ 1/k.",
          "Tính chất: Tỉ số hai giá trị tương ứng của chúng luôn không đổi: y1/x1 = y2/x2 = ... = k.",
          "Tỉ số hai giá trị bất kì của đại lượng này bằng tỉ số hai giá trị tương ứng của đại lượng kia: x1/x2 = y1/y2."
        ],
        formulas: [
          "y = kx (k ≠ 0)",
          "k = y / x (không đổi)",
          "y1/x1 = y2/x2 = k ; x1/x2 = y1/y2"
        ],
        methods: "Tìm hệ số k từ một cặp giá trị đã biết (k = y/x) → Viết công thức liên hệ → Tính các giá trị còn lại.",
        example: {
          problem: "Biết 5 mét vải giá 200.000 đồng. Hỏi 8 mét vải cùng loại giá bao nhiêu tiền?",
          solution: "Vì số tiền y tỉ lệ thuận với số mét vải x, nên hệ số tỉ lệ là k = 200.000 / 5 = 40.000 (đồng/mét).\nVậy giá tiền 8 mét vải là: y = 40.000 · 8 = 320.000 (đồng)."
        },
        quiz: [
          {
            q: "Nếu y tỉ lệ thuận với x theo hệ số tỉ lệ k = 3 thì khi x = 4, giá trị của y bằng:",
            options: ["A. 12", "B. 7", "C. 4/3", "D. 1"],
            a: 0,
            exp: "y = k · x = 3 · 4 = 12."
          },
          {
            q: "Đại lượng nào sau đây tỉ lệ thuận với nhau?",
            options: ["A. Quãng đường đi được và thời gian đi (với vận tốc không đổi)", "B. Chiều dài và chiều rộng của hình chữ nhật có diện tích không đổi", "C. Số người làm và thời gian hoàn thành cùng một công việc", "D. Tuổi của cha và tuổi của con"],
            a: 0,
            exp: "Quãng đường s = v · t; khi vận tốc v không đổi thì quãng đường tỉ lệ thuận với thời gian."
          }
        ]
      },
      {
        id: "bai-23",
        num: 23,
        title: "Bài 23. Đại lượng tỉ lệ nghịch",
        summary: "Định nghĩa y = a/x (a ≠ 0), tích x·y = a không đổi, tính chất và ứng dụng đại lượng tỉ lệ nghịch.",
        coreConcepts: [
          "Nếu đại lượng y liên hệ với đại lượng x theo công thức y = a/x hay x·y = a (với a là hằng số khác 0) thì ta nói y tỉ lệ nghịch với x theo hệ số tỉ lệ a.",
          "Khi y tỉ lệ nghịch với x thì x cũng tỉ lệ nghịch với y theo cùng hệ số tỉ lệ a.",
          "Tính chất: Tích của hai giá trị tương ứng của chúng luôn không đổi: x1 · y1 = x2 · y2 = ... = a.",
          "Tỉ số hai giá trị bất kì của đại lượng này bằng nghịch đảo của tỉ số hai giá trị tương ứng của đại lượng kia: x1/x2 = y2/y1."
        ],
        formulas: [
          "y = a / x <=> x · y = a (a ≠ 0)",
          "x1 · y1 = x2 · y2 = a",
          "x1 / x2 = y2 / y1"
        ],
        methods: "Tìm hệ số a = x1 · y1 → Tính giá trị đại lượng cần tìm bằng công thức y = a / x.",
        example: {
          problem: "Một đội công nhân gồm 6 người làm xong đoạn đường trong 12 ngày. Hỏi nếu có 12 người (với năng suất như nhau) thì hoàn thành đoạn đường đó trong bao nhiêu ngày?",
          solution: "Vì số người (x) và thời gian (y) là hai đại lượng tỉ lệ nghịch, tích x · y không đổi.\nHệ số tỉ lệ a = 6 · 12 = 72.\nThời gian khi có 12 người là: y = 72 / 12 = 6 (ngày)."
        },
        quiz: [
          {
            q: "Cho x và y là hai đại lượng tỉ lệ nghịch. Khi x = 3 thì y = 8. Hệ số tỉ lệ a bằng:",
            options: ["A. 24", "B. 11", "C. 8/3", "D. 5"],
            a: 0,
            exp: "Hệ số tỉ lệ của đại lượng tỉ lệ nghịch: a = x · y = 3 · 8 = 24."
          },
          {
            q: "Hai đại lượng nào sau đây tỉ lệ nghịch với nhau?",
            options: ["A. Vận tốc và thời gian đi trên cùng một quãng đường cố định", "B. Số lượng vở mua và số tiền phải trả (với giá mỗi quyển không đổi)", "C. Chiều cao và cân nặng của một người", "D. Chu vi hình tròn và bán kính"],
            a: 0,
            exp: "Vì quãng đường s = v · t không đổi nên vận tốc v và thời gian t là hai đại lượng tỉ lệ nghịch."
          }
        ]
      }
    ]
  },

  // ==================== CHƯƠNG VII ====================
  {
    chapterNum: "VII",
    title: "Chương VII. Biểu thức đại số và đa thức một biến",
    desc: "Biểu thức đại số, đơn thức, đa thức một biến, bậc và hệ số, bốn phép tính cộng trừ nhân chia đa thức một biến.",
    lessons: [
      {
        id: "bai-24",
        num: 24,
        title: "Bài 24. Biểu thức đại số",
        summary: "Khái niệm biến số, giá trị của biểu thức đại số, các hạng tử đồng dạng và cách thu gọn.",
        coreConcepts: [
          "Biểu thức đại số là biểu thức gồm các số, các chữ (đại diện cho số, gọi là biến) và các phép toán (+, −, ×, :, lũy thừa).",
          "Để tính giá trị của một biểu thức đại số tại những giá trị cho trước của các biến, ta thay các giá trị đó vào biểu thức rồi thực hiện phép tính.",
          "Các hạng tử đồng dạng là các hạng tử có cùng phần biến và cùng số mũ của biến đó.",
          "Chỉ có thể cộng hoặc trừ hệ số của các hạng tử đồng dạng: ax^n ± bx^n = (a ± b)x^n."
        ],
        formulas: [
          "Giá trị biểu thức: Thay x = x0 vào biểu thức A(x)",
          "Hạng tử đồng dạng: ax^k + bx^k = (a + b)x^k"
        ],
        methods: "Thu gọn các hạng tử đồng dạng trước khi thay số để việc tính toán giá trị biểu thức được nhanh và chính xác.",
        example: {
          problem: "Thu gọn biểu thức A = 3x^2 − 5x + 2x^2 + 7x − 4 và tính giá trị của A tại x = −2.",
          solution: "Thu gọn: A = (3x^2 + 2x^2) + (−5x + 7x) − 4 = 5x^2 + 2x − 4.\nThay x = −2: A = 5 · (−2)^2 + 2 · (−2) − 4 = 5 · 4 − 4 − 4 = 20 − 8 = 12."
        },
        quiz: [
          {
            q: "Giá trị của biểu thức P = 2x^2 − 3x + 1 tại x = 2 là:",
            options: ["A. 3", "B. 5", "C. −1", "D. 7"],
            a: 0,
            exp: "P = 2 · (2)^2 − 3 · 2 + 1 = 2 · 4 − 6 + 1 = 8 − 6 + 1 = 3."
          },
          {
            q: "Cặp hạng tử nào sau đây là hai hạng tử ĐỒNG DẠNG?",
            options: ["A. 3x^2 và −5x^2", "B. 2x và 2x^2", "C. 4x^3 và 4x", "D. 5x và 5y"],
            a: 0,
            exp: "3x^2 và −5x^2 có cùng phần biến là x^2 nên là hai hạng tử đồng dạng."
          }
        ]
      },
      {
        id: "bai-25",
        num: 25,
        title: "Bài 25. Đa thức một biến",
        summary: "Định nghĩa đa thức một biến, thu gọn và sắp xếp theo lũy thừa giảm dần, bậc của đa thức, hệ số cao nhất và hệ số tự do.",
        coreConcepts: [
          "Đa thức một biến là tổng của những đơn thức của cùng một biến.",
          "Dạng thu gọn là đa thức không còn hai hạng tử nào đồng dạng.",
          "Bậc của đa thức một biến (khác đa thức 0) là số mũ lớn nhất của biến trong đa thức đã thu gọn.",
          "Hệ số cao nhất là hệ số của lũy thừa có số mũ lớn nhất (bậc của đa thức).",
          "Hệ số tự do là hạng tử không chứa biến (hạng tử bậc 0)."
        ],
        formulas: [
          "Dạng chuẩn: P(x) = an·x^n + an-1·x^(n-1) + ... + a1·x + a0 (với an ≠ 0)",
          "Bậc của P(x) = n ; Hệ số cao nhất = an ; Hệ số tự do = a0"
        ],
        methods: "Thu gọn các hạng tử đồng dạng → Sắp xếp theo lũy thừa giảm dần của biến → Xác định bậc, hệ số cao nhất và hệ số tự do.",
        example: {
          problem: "Cho đa thức P(x) = 4x^3 − 2x + 5 − 4x^3 + 3x^2 + 6x − 1. Hãy thu gọn, sắp xếp và tìm bậc của P(x).",
          solution: "Thu gọn: P(x) = (4x^3 − 4x^3) + 3x^2 + (−2x + 6x) + (5 − 1) = 3x^2 + 4x + 4.\nĐa thức có bậc là 2; hệ số cao nhất là 3; hệ số tự do là 4."
        },
        quiz: [
          {
            q: "Bậc của đa thức Q(x) = 5x^4 − 2x^3 + x^2 − 7 là:",
            options: ["A. 4", "B. 5", "C. 3", "D. −7"],
            a: 0,
            exp: "Số mũ lớn nhất của biến x là 4, hệ số là 5 ≠ 0 nên bậc của đa thức là 4."
          },
          {
            q: "Hệ số tự do của đa thức A(x) = 2x^3 − 4x + 9 là:",
            options: ["A. 9", "B. 2", "C. −4", "D. 3"],
            a: 0,
            exp: "Hạng tử không chứa biến x là 9, đây chính là hệ số tự do."
          }
        ]
      },
      {
        id: "bai-26",
        num: 26,
        title: "Bài 26. Phép cộng và phép trừ đa thức một biến",
        summary: "Cộng và trừ đa thức một biến bằng cách đặt tính theo cột dọc hoặc nhóm hạng tử đồng dạng theo hàng ngang.",
        coreConcepts: [
          "Muốn cộng hai đa thức một biến: Nhóm các hạng tử cùng bậc với nhau rồi cộng các hệ số tương ứng.",
          "Muốn trừ hai đa thức: Đổi dấu tất cả các hạng tử của đa thức bị trừ rồi tiến hành cộng: A(x) − B(x) = A(x) + [−B(x)].",
          "Có hai phương pháp trình bày: Cộng/trừ theo hàng ngang (dùng ngoặc) hoặc Đặt tính theo cột dọc (xếp thẳng cột cùng bậc)."
        ],
        formulas: [
          "Cộng: P(x) + Q(x) = ∑ (ai + bi)·x^i",
          "Trừ: P(x) − Q(x) = P(x) + [−Q(x)] = ∑ (ai − bi)·x^i"
        ],
        methods: "Quy tắc phá ngoặc có dấu trừ đằng trước: -(A + B - C) = -A - B + C. Phải đổi dấu TẤT CẢ các hạng tử bên trong ngoặc.",
        example: {
          problem: "Cho P(x) = 3x^2 − 2x + 1 và Q(x) = x^2 + 4x − 5. Tính P(x) + Q(x) và P(x) − Q(x).",
          solution: "1) P(x) + Q(x) = (3x^2 + x^2) + (−2x + 4x) + (1 − 5) = 4x^2 + 2x − 4.\n2) P(x) − Q(x) = (3x^2 − 2x + 1) − (x^2 + 4x − 5) = 3x^2 − 2x + 1 − x^2 − 4x + 5 = 2x^2 − 6x + 6."
        },
        quiz: [
          {
            q: "Kết quả của phép tính (2x^2 + 3x) + (x^2 − 3x + 4) là:",
            options: ["A. 3x^2 + 4", "B. 3x^2 + 6x + 4", "C. x^2 + 4", "D. 3x^2 − 4"],
            a: 0,
            exp: "(2x^2 + x^2) + (3x − 3x) + 4 = 3x^2 + 0x + 4 = 3x^2 + 4."
          },
          {
            q: "Khi bỏ dấu ngoặc của biểu thức −(2x^2 − 5x + 3), ta được:",
            options: ["A. −2x^2 + 5x − 3", "B. −2x^2 − 5x + 3", "C. 2x^2 + 5x − 3", "D. −2x^2 + 5x + 3"],
            a: 0,
            exp: "Đổi dấu toàn bộ các hạng tử trong ngoặc khi có dấu trừ đằng trước: −2x^2 + 5x − 3."
          }
        ]
      },
      {
        id: "bai-27",
        num: 27,
        title: "Bài 27. Phép nhân đa thức một biến",
        summary: "Quy tắc nhân đơn thức với đa thức; nhân đa thức với đa thức; nhân các lũy thừa cùng cơ số.",
        coreConcepts: [
          "Nhân đơn thức với đa thức: Lấy đơn thức nhân với từng hạng tử của đa thức rồi cộng các tích với nhau: A · (B + C) = A·B + A·C.",
          "Nhân đa thức với đa thức: Lấy mỗi hạng tử của đa thức thứ nhất nhân với từng hạng tử của đa thức thứ hai rồi cộng các kết quả: (A + B) · (C + D) = A·C + A·D + B·C + B·D.",
          "Quy tắc nhân lũy thừa cùng biến: x^m · x^n = x^(m + n)."
        ],
        formulas: [
          "a·x^m · b·x^n = (a·b)·x^(m + n)",
          "A·(B + C) = AB + AC",
          "(A + B)·(C + D) = AC + AD + BC + BD"
        ],
        methods: "Nhân cẩn thận hệ số và cộng các số mũ của biến; chú ý quy tắc dấu âm nhân âm ra dương; thu gọn các hạng tử đồng dạng sau khi nhân.",
        example: {
          problem: "Thực hiện phép tính: (x − 2) · (2x + 3).",
          solution: "(x − 2) · (2x + 3) = x · 2x + x · 3 − 2 · 2x − 2 · 3 = 2x^2 + 3x − 4x − 6 = 2x^2 − x − 6."
        },
        quiz: [
          {
            q: "Tích của đơn thức 2x và đa thức (x^2 − 3x + 1) là:",
            options: ["A. 2x^3 − 6x^2 + 2x", "B. 2x^3 − 3x^2 + 2x", "C. 2x^2 − 6x + 2", "D. 2x^3 − 6x^2 + 1"],
            a: 0,
            exp: "2x · x^2 − 2x · 3x + 2x · 1 = 2x^3 − 6x^2 + 2x."
          },
          {
            q: "Kết quả của phép nhân (x + 1) · (x − 1) là:",
            options: ["A. x^2 − 1", "B. x^2 + 1", "C. x^2 − 2x + 1", "D. x^2 + 2x − 1"],
            a: 0,
            exp: "x · x − x · 1 + 1 · x − 1 · 1 = x^2 − x + x − 1 = x^2 − 1."
          }
        ]
      },
      {
        id: "bai-28",
        num: 28,
        title: "Bài 28. Phép chia đa thức một biến",
        summary: "Chia đơn thức cho đơn thức; chia đa thức cho đơn thức; thuật toán chia đa thức một biến có dư: A = B·Q + R.",
        coreConcepts: [
          "Chia đơn thức: a·x^m : b·x^n = (a : b)·x^(m − n) (với a, b ≠ 0 và m ≥ n).",
          "Chia đa thức cho đơn thức: Chia từng hạng tử của đa thức cho đơn thức đó rồi cộng các kết quả lại.",
          "Chia đa thức một biến cho đa thức một biến: Sắp xếp cả hai đa thức theo lũy thừa giảm dần → Chia hạng tử bậc cao nhất của đa thức bị chia cho hạng tử bậc cao nhất của đa thức chia → Nhân ngược lại và trừ → Lặp lại đến khi phần dư có bậc nhỏ hơn bậc của đa thức chia.",
          "Đẳng thức cơ bản: Đa thức bị chia A = Đa thức chia B · Thương Q + Dư R (bậc R < bậc B). Nếu R = 0 là phép chia hết."
        ],
        formulas: [
          "a·x^m : b·x^n = (a/b)·x^(m - n) (m ≥ n)",
          "A(x) = B(x) · Q(x) + R(x) (với bậc R < bậc B hoặc R = 0)"
        ],
        methods: "Đặt tính chia theo cột dọc; căn chỉnh thẳng cột các bậc giống nhau; cẩn thận dấu trừ khi thực hiện phép trừ đại số.",
        example: {
          problem: "Thực hiện phép chia: (6x^3 − 4x^2 + 2x) : 2x.",
          solution: "(6x^3 : 2x) + (−4x^2 : 2x) + (2x : 2x) = 3x^2 − 2x + 1."
        },
        quiz: [
          {
            q: "Kết quả của phép chia 8x^4 : 2x^2 là:",
            options: ["A. 4x^2", "B. 4x^6", "C. 6x^2", "D. 4x"],
            a: 0,
            exp: "8 : 2 = 4 và x^4 : x^2 = x^(4 − 2) = x^2 => 4x^2."
          },
          {
            q: "Trong phép chia đa thức A cho B được thương là Q và dư là R, khẳng định nào sau đây là ĐÚNG?",
            options: ["A. A = B · Q + R và bậc của R nhỏ hơn bậc của B", "B. A = B + Q · R", "C. Bậc của R luôn lớn hơn bậc của B", "D. R luôn bằng 0"],
            a: 0,
            exp: "Định lí phép chia có dư: A = B · Q + R với bậc của số dư R luôn nhỏ hơn bậc của đa thức chia B (hoặc R = 0)."
          }
        ]
      }
    ]
  },

  // ==================== CHƯƠNG VIII ====================
  {
    chapterNum: "VIII",
    title: "Chương VIII. Làm quen với biến cố và xác suất của biến cố",
    desc: "Khái niệm biến cố ngẫu nhiên, chắc chắn, không thể; tính xác suất của biến cố trong các mô hình đồng khả năng và thực nghiệm.",
    lessons: [
      {
        id: "bai-29",
        num: 29,
        title: "Bài 29. Làm quen với biến cố",
        summary: "Phép thử ngẫu nhiên; phân biệt biến cố chắc chắn, biến cố không thể và biến cố ngẫu nhiên.",
        coreConcepts: [
          "Phép thử ngẫu nhiên là hành động, thực nghiệm mà kết quả của nó không thể biết trước được (như gieo xúc xắc, tung đồng xu).",
          "Biến cố chắc chắn là biến cố luôn luôn xảy ra trong phép thử.",
          "Biến cố không thể là biến cố không bao giờ xảy ra trong phép thử.",
          "Biến cố ngẫu nhiên là biến cố có thể xảy ra hoặc không xảy ra tùy thuộc vào kết quả của phép thử."
        ],
        formulas: [
          "Biến cố chắc chắn: Luôn xảy ra",
          "Biến cố không thể: Không bao giờ xảy ra",
          "Biến cố ngẫu nhiên: Có thể xảy ra hoặc không"
        ],
        methods: "Phân tích không gian mẫu các kết quả có thể xảy ra của phép thử để xác định tính chất của biến cố.",
        example: {
          problem: "Gieo một con xúc xắc 6 mặt cân đối. Xét tính chất của các biến cố sau: A: 'Xuất hiện mặt có số chấm nhỏ hơn 7'; B: 'Xuất hiện mặt 8 chấm'; C: 'Xuất hiện mặt có số chấm chẵn'.",
          solution: "- Biến cố A là biến cố chắc chắn vì các mặt xúc xắc từ 1 đến 6 đều nhỏ hơn 7.\n- Biến cố B là biến cố không thể vì xúc xắc chỉ có tối đa 6 chấm.\n- Biến cố C là biến cố ngẫu nhiên vì có thể xuất hiện mặt chẵn (2, 4, 6) hoặc lẻ (1, 3, 5)."
        },
        quiz: [
          {
            q: "Khi gieo một đồng xu cân đối, biến cố nào sau đây là BIẾN CỐ NGẪU NHIÊN?",
            options: ["A. 'Mặt xuất hiện là mặt ngửa'", "B. 'Mặt xuất hiện có hình con rồng lửa'", "C. 'Đồng xu rơi xuống đất'", "D. 'Mặt xuất hiện là mặt ngửa hoặc mặt sấp'"],
            a: 0,
            exp: "Đồng xu có thể ngửa hoặc sấp nên 'Mặt xuất hiện là mặt ngửa' là biến cố ngẫu nhiên."
          },
          {
            q: "Biến cố nào sau đây là BIẾN CỐ KHÔNG THỂ khi gieo một con xúc xắc 6 mặt?",
            options: ["A. Xuất hiện mặt 7 chấm", "B. Xuất hiện mặt 1 chấm", "C. Xuất hiện mặt có số chấm lẻ", "D. Xuất hiện mặt có số chấm lớn hơn 3"],
            a: 0,
            exp: "Xúc xắc chỉ có các mặt từ 1 đến 6 chấm nên việc xuất hiện mặt 7 chấm là biến cố không thể."
          }
        ]
      },
      {
        id: "bai-30",
        num: 30,
        title: "Bài 30. Làm quen với xác suất của biến cố",
        summary: "Công thức xác suất cổ điển P(A) = k/n với các kết quả đồng khả năng; xác suất thực nghiệm.",
        coreConcepts: [
          "Nếu một phép thử có n kết quả có khả năng xảy ra như nhau (đồng khả năng) và có k kết quả thuận lợi cho biến cố A thì xác suất của biến cố A là: P(A) = k / n.",
          "Xác suất của một biến cố là một số nằm giữa 0 và 1: 0 ≤ P(A) ≤ 1.",
          "Xác suất của biến cố chắc chắn bằng 1: P = 1.",
          "Xác suất của biến cố không thể bằng 0: P = 0."
        ],
        formulas: [
          "P(A) = k / n = (Số kết quả thuận lợi) / (Tổng số kết quả có thể)",
          "0 ≤ P(A) ≤ 1",
          "P(Chắc chắn) = 1 ; P(Không thể) = 0"
        ],
        methods: "Liệt kê đầy đủ tổng số kết quả có thể xảy ra (n) → Đếm số kết quả thuận lợi (k) làm cho biến cố xảy ra → Tính tỉ số k/n và rút gọn tối giản.",
        example: {
          problem: "Gieo một con xúc xắc 6 mặt cân đối. Tính xác suất của biến cố A: 'Xuất hiện mặt có số chấm là số nguyên tố'.",
          solution: "- Tổng số kết quả có thể xảy ra: n = 6 (các mặt 1, 2, 3, 4, 5, 6).\n- Các kết quả thuận lợi là các số nguyên tố: 2, 3, 5 => có k = 3 kết quả thuận lợi.\n- Xác suất: P(A) = 3 / 6 = 1/2 = 0,5 (50%)."
        },
        quiz: [
          {
            q: "Tung một đồng xu cân đối, xác suất xuất hiện mặt sấp là:",
            options: ["A. 1/2", "B. 1", "C. 0", "D. 1/4"],
            a: 0,
            exp: "Có 2 kết quả có thể (sấp, ngửa), mặt sấp có 1 kết quả nên xác suất là 1/2."
          },
          {
            q: "Một hộp có 5 viên bi đỏ và 5 viên bi xanh cùng kích thước. Lấy ngẫu nhiên 1 viên bi, xác suất lấy được viên bi màu đỏ là:",
            options: ["A. 1/2", "B. 1/5", "C. 1/10", "D. 5/100"],
            a: 0,
            exp: "Tổng số bi là 10. Số bi đỏ là 5. Xác suất lấy được bi đỏ là 5/10 = 1/2."
          }
        ]
      }
    ]
  },

  // ==================== CHƯƠNG IX ====================
  {
    chapterNum: "IX",
    title: "Chương IX. Quan hệ giữa các yếu tố trong một tam giác",
    desc: "Góc và cạnh đối diện, đường vuông góc và đường xiên, bất đẳng thức tam giác, sự đồng quy của 4 loại đường đặc biệt.",
    lessons: [
      {
        id: "bai-31",
        num: 31,
        title: "Bài 31. Quan hệ giữa góc và cạnh đối diện trong một tam giác",
        summary: "Định lí góc đối diện với cạnh lớn hơn thì lớn hơn; cạnh đối diện với góc lớn hơn thì lớn hơn.",
        coreConcepts: [
          "Trong một tam giác, góc đối diện với cạnh lớn hơn là góc lớn hơn: Nếu AC > AB thì ∠B > ∠C.",
          "Ngược lại: Trong một tam giác, cạnh đối diện với góc lớn hơn là cạnh lớn hơn: Nếu ∠B > ∠C thì AC > AB.",
          "Trong tam giác tù, cạnh đối diện với góc tù là cạnh lớn nhất.",
          "Trong tam giác vuông, cạnh huyền đối diện với góc vuông là cạnh lớn nhất."
        ],
        formulas: [
          "Trong ΔABC: AC > AB <=> ∠B > ∠C",
          "Tam giác vuông: Cạnh huyền > Cạnh góc vuông"
        ],
        methods: "Tính tất cả các góc của tam giác → So sánh số đo các góc → Suy ra thứ tự độ dài các cạnh đối diện tương ứng.",
        example: {
          problem: "Cho tam giác ABC có ∠A = 80°, ∠B = 60°. Hãy so sánh độ dài ba cạnh của tam giác ABC.",
          solution: "Trong ΔABC có: ∠C = 180° − (80° + 60°) = 40°.\nSo sánh góc: ∠A > ∠B > ∠C (80° > 60° > 40°).\nCạnh đối diện tương ứng: BC đối diện góc A, AC đối diện góc B, AB đối diện góc C.\nDo đó: BC > AC > AB."
        },
        quiz: [
          {
            q: "Trong tam giác ABC có AB = 5 cm, AC = 7 cm, BC = 8 cm. Góc lớn nhất của tam giác ABC là:",
            options: ["A. Góc A", "B. Góc B", "C. Góc C", "D. Ba góc bằng nhau"],
            a: 0,
            exp: "Cạnh lớn nhất là BC = 8 cm, do đó góc đối diện với nó là góc A sẽ là góc lớn nhất."
          },
          {
            q: "Trong tam giác MNP vuông tại M, cạnh có độ dài lớn nhất là:",
            options: ["A. Cạnh huyền NP", "B. Cạnh MN", "C. Cạnh MP", "D. Không so sánh được"],
            a: 0,
            exp: "Trong tam giác vuông, góc vuông (90°) là góc lớn nhất, nên cạnh huyền đối diện là cạnh lớn nhất."
          }
        ]
      },
      {
        id: "bai-32",
        num: 32,
        title: "Bài 32. Quan hệ giữa đường vuông góc và đường xiên",
        summary: "Khái niệm đường vuông góc, đường xiên và hình chiếu; định lí đoạn vuông góc ngắn hơn mọi đường xiên.",
        coreConcepts: [
          "Từ một điểm A nằm ngoài đường thẳng d, kẻ AH ⊥ d tại H. Khi đó AH gọi là đoạn vuông góc kẻ từ A đến d; H là chân đường vuông góc (hoặc hình chiếu của A trên d).",
          "Lấy điểm B bất kì trên d (B ≠ H), đoạn AB gọi là đường xiên kẻ từ A đến d; đoạn HB là hình chiếu của đường xiên AB trên d.",
          "Định lí: Trong các đường xiên và đường vuông góc kẻ từ một điểm nằm ngoài một đường thẳng đến đường thẳng đó, đường vuông góc là đường ngắn nhất: AH < AB.",
          "Khoảng cách từ điểm A đến đường thẳng d chính là độ dài đoạn vuông góc AH."
        ],
        formulas: [
          "AH ⊥ d, B ∈ d (B ≠ H) => AH < AB",
          "Hình chiếu lớn hơn <=> Đường xiên lớn hơn: HB > HC <=> AB > AC"
        ],
        methods: "Sử dụng tính chất tam giác vuông (AH là cạnh góc vuông, AB là cạnh huyền) để suy ra AH < AB; so sánh hình chiếu để so sánh đường xiên.",
        example: {
          problem: "Một bạn học sinh muốn bơi từ bờ sông bên này sang bờ sông bên kia có hai bờ song song. Để bơi quãng đường ngắn nhất, bạn ấy phải bơi theo hướng nào?",
          solution: "Vì đoạn thẳng vuông góc nối từ một điểm bên bờ này đến đường thẳng bờ bên kia là đường ngắn nhất, nên bạn ấy phải bơi theo hướng vuông góc với bờ sông."
        },
        quiz: [
          {
            q: "Từ điểm M nằm ngoài đường thẳng a kẻ đường vuông góc MH và đường xiên MK đến a. Khẳng định nào sau đây là ĐÚNG?",
            options: ["A. MH < MK", "B. MH > MK", "C. MH = MK", "D. MK là khoảng cách từ M đến a"],
            a: 0,
            exp: "Đoạn vuông góc kẻ từ một điểm đến đường thẳng luôn ngắn hơn mọi đường xiên: MH < MK."
          },
          {
            q: "Khoảng cách từ một điểm đến một đường thẳng là:",
            options: ["A. Độ dài đoạn vuông góc kẻ từ điểm đó đến đường thẳng", "B. Độ dài đường xiên bất kì", "C. Độ dài hình chiếu", "D. Khoảng cách ngắn nhất cộng khoảng cách dài nhất"],
            a: 0,
            exp: "Định nghĩa: Khoảng cách từ một điểm đến một đường thẳng là độ dài đoạn vuông góc kẻ từ điểm đó đến đường thẳng."
          }
        ]
      },
      {
        id: "bai-33",
        num: 33,
        title: "Bài 33. Quan hệ giữa ba cạnh của một tam giác",
        summary: "Bất đẳng thức tam giác: tổng hai cạnh lớn hơn cạnh thứ ba; hệ quả hiệu hai cạnh nhỏ hơn cạnh thứ ba.",
        coreConcepts: [
          "Bất đẳng thức tam giác: Trong một tam giác, tổng độ dài hai cạnh bất kì bao giờ cũng lớn hơn độ dài cạnh còn lại.",
          "Trong tam giác ABC: AB + AC > BC ; AB + BC > AC ; AC + BC > AB.",
          "Hệ quả: Trong một tam giác, hiệu độ dài hai cạnh bất kì bao giờ cũng nhỏ hơn độ dài cạnh còn lại: |AB − AC| < BC < AB + AC.",
          "Quy tắc kiểm tra ba đoạn thẳng có lập thành tam giác: Chỉ cần so sánh độ dài lớn nhất với tổng hai độ dài còn lại: a + b > c (với c là độ dài lớn nhất)."
        ],
        formulas: [
          "Bất đẳng thức: a + b > c ; a + c > b ; b + c > a",
          "Kẹp cạnh thứ ba: |b − c| < a < b + c"
        ],
        methods: "Lấy hai cạnh ngắn hơn cộng lại, nếu tổng lớn hơn cạnh dài nhất thì ba đoạn thẳng đó tạo thành một tam giác.",
        example: {
          problem: "Bộ ba độ dài nào sau đây có thể là ba cạnh của một tam giác: a) 3 cm, 4 cm, 8 cm ; b) 5 cm, 6 cm, 9 cm?",
          solution: "a) 3 + 4 = 7 < 8 (tổng hai cạnh nhỏ hơn cạnh lớn nhất), nên không thể lập thành tam giác.\nb) 5 + 6 = 11 > 9 (tổng hai cạnh nhỏ lớn hơn cạnh lớn nhất), nên đây là ba cạnh của một tam giác."
        },
        quiz: [
          {
            q: "Bộ ba đoạn thẳng nào sau đây CÓ THỂ tạo thành ba cạnh của một tam giác?",
            options: ["A. 3 cm, 5 cm, 7 cm", "B. 2 cm, 3 cm, 6 cm", "C. 4 cm, 4 cm, 8 cm", "D. 1 cm, 2 cm, 5 cm"],
            a: 0,
            exp: "3 + 5 = 8 > 7 thỏa mãn bất đẳng thức tam giác. Các bộ khác đều có tổng 2 cạnh nhỏ ≤ cạnh lớn nhất."
          },
          {
            q: "Một tam giác có hai cạnh bằng 3 cm và 7 cm. Độ dài cạnh thứ ba x (cm) phải thỏa mãn điều kiện:",
            options: ["A. 4 cm < x < 10 cm", "B. x > 10 cm", "C. x < 4 cm", "D. 3 cm < x < 7 cm"],
            a: 0,
            exp: "Theo hệ quả bất đẳng thức tam giác: 7 − 3 < x < 7 + 3 => 4 cm < x < 10 cm."
          }
        ]
      },
      {
        id: "bai-34",
        num: 34,
        title: "Bài 34. Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác",
        summary: "Đặc điểm trọng tâm (giao ba trung tuyến tỉ số 2/3); tâm đường tròn nội tiếp (giao ba phân giác cách đều 3 cạnh).",
        coreConcepts: [
          "Đường trung tuyến của tam giác là đoạn thẳng nối đỉnh với trung điểm của cạnh đối diện.",
          "Ba đường trung tuyến của tam giác cùng đi qua một điểm (đồng quy). Điểm đó gọi là TRỌNG TÂM của tam giác (kí hiệu G).",
          "Tính chất trọng tâm: Trọng tâm cách mỗi đỉnh một khoảng bằng 2/3 độ dài đường trung tuyến đi qua đỉnh đó: GA = 2/3 AM ; GM = 1/3 AM.",
          "Đường phân giác của tam giác là đoạn thẳng nối đỉnh với cạnh đối diện chia góc đó thành hai góc bằng nhau.",
          "Ba đường phân giác của tam giác đồng quy tại một điểm (kí hiệu I). Điểm này CÁCH ĐỀU BA CẠNH của tam giác và là tâm đường tròn nội tiếp tam giác."
        ],
        formulas: [
          "Trọng tâm G: GA/AM = GB/BN = GC/CP = 2/3",
          "Tâm nội tiếp I: Cách đều ba cạnh AB, BC, CA"
        ],
        methods: "Dùng tỉ số 2/3 của trọng tâm để tính độ dài các đoạn thẳng trên trung tuyến; dùng tính chất phân giác để chứng minh khoảng cách bằng nhau.",
        example: {
          problem: "Cho tam giác ABC có trung tuyến AM dài 9 cm. Gọi G là trọng tâm của tam giác. Tính độ dài đoạn thẳng AG và GM.",
          solution: "Vì G là trọng tâm tam giác ABC nên:\n- AG = 2/3 · AM = 2/3 · 9 = 6 (cm).\n- GM = 1/3 · AM = 1/3 · 9 = 3 (cm)."
        },
        quiz: [
          {
            q: "Giao điểm của ba đường trung tuyến trong một tam giác gọi là:",
            options: ["A. Trọng tâm của tam giác", "B. Trực tâm của tam giác", "C. Tâm đường tròn ngoại tiếp", "D. Tâm đường tròn nội tiếp"],
            a: 0,
            exp: "Ba đường trung tuyến của tam giác đồng quy tại một điểm gọi là trọng tâm."
          },
          {
            q: "Giao điểm của ba đường phân giác trong tam giác có tính chất nào sau đây?",
            options: ["A. Cách đều ba cạnh của tam giác", "B. Cách đều ba đỉnh của tam giác", "C. Cách mỗi đỉnh một khoảng bằng 2/3 phân giác", "D. Trùng với trọng tâm"],
            a: 0,
            exp: "Giao điểm ba đường phân giác là tâm đường tròn nội tiếp, cách đều ba cạnh của tam giác."
          }
        ]
      },
      {
        id: "bai-35",
        num: 35,
        title: "Bài 35. Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác",
        summary: "Tâm đường tròn ngoại tiếp (giao ba trung trực cách đều 3 đỉnh); trực tâm H (giao ba đường cao).",
        coreConcepts: [
          "Đường trung trực của cạnh tam giác là đường thẳng vuông góc với cạnh tại trung điểm.",
          "Ba đường trung trực của tam giác đồng quy tại một điểm (kí hiệu O). Điểm này CÁCH ĐỀU BA ĐỈNH của tam giác (OA = OB = OC) và là tâm đường tròn ngoại tiếp tam giác.",
          "Vị trí tâm ngoại tiếp O: Nằm trong tam giác nhọn; là trung điểm cạnh huyền của tam giác vuông; nằm ngoài tam giác tù.",
          "Đường cao của tam giác là đoạn vuông góc kẻ từ đỉnh đến đường thẳng chứa cạnh đối diện.",
          "Ba đường cao của tam giác đồng quy tại một điểm gọi là TRỰC TÂM của tam giác (kí hiệu H).",
          "Vị trí trực tâm H: Nằm trong tam giác nhọn; trùng với đỉnh góc vuông của tam giác vuông; nằm ngoài tam giác tù."
        ],
        formulas: [
          "Tâm ngoại tiếp O: OA = OB = OC",
          "Tam giác vuông: O là trung điểm cạnh huyền ; H trùng đỉnh góc vuông",
          "Tam giác đều: Trọng tâm, trực tâm, tâm ngoại tiếp, tâm nội tiếp trùng nhau"
        ],
        methods: "Xác định nhanh tâm ngoại tiếp tam giác vuông tại trung điểm cạnh huyền; trực tâm tam giác vuông tại đỉnh góc vuông.",
        example: {
          problem: "Cho tam giác ABC vuông tại A có BC = 10 cm. Tìm vị trí tâm đường tròn ngoại tiếp O của tam giác và tính bán kính đường tròn ngoại tiếp R = OA.",
          solution: "Vì tam giác ABC vuông tại A nên tâm đường tròn ngoại tiếp O là trung điểm của cạnh huyền BC. Bán kính R = OA = OB = OC = BC / 2 = 10 / 2 = 5 (cm)."
        },
        quiz: [
          {
            q: "Giao điểm của ba đường trung trực trong tam giác có tính chất:",
            options: ["A. Cách đều ba đỉnh của tam giác", "B. Cách đều ba cạnh của tam giác", "C. Là trọng tâm của tam giác", "D. Nằm luôn ở trong tam giác"],
            a: 0,
            exp: "Giao điểm ba đường trung trực là tâm đường tròn ngoại tiếp tam giác, có tính chất cách đều ba đỉnh."
          },
          {
            q: "Trực tâm của tam giác vuông nằm ở vị trí nào?",
            options: ["A. Trùng với đỉnh góc vuông", "B. Là trung điểm cạnh huyền", "C. Nằm ngoài tam giác", "D. Nằm tại trọng tâm"],
            a: 0,
            exp: "Trong tam giác vuông, hai cạnh góc vuông chính là hai đường cao, nên giao điểm của chúng (trực tâm) trùng với đỉnh góc vuông."
          }
        ]
      }
    ]
  },

  // ==================== CHƯƠNG X ====================
  {
    chapterNum: "X",
    title: "Chương X. Một số hình khối trong thực tiễn",
    desc: "Hình hộp chữ nhật, hình lập phương, hình lăng trụ đứng tam giác và tứ giác; công thức tính diện tích xung quanh, toàn phần và thể tích.",
    lessons: [
      {
        id: "bai-36",
        num: 36,
        title: "Bài 36. Hình hộp chữ nhật và hình lập phương",
        summary: "Đặc điểm hình học (mặt, cạnh, đỉnh); công thức tính diện tích xung quanh, diện tích toàn phần và thể tích hình hộp chữ nhật, hình lập phương.",
        coreConcepts: [
          "Hình hộp chữ nhật: Có 6 mặt là hình chữ nhật, 12 cạnh, 8 đỉnh; các mặt đối diện song song và bằng nhau. Ba kích thước: chiều dài a, chiều rộng b, chiều cao h.",
          "Hình lập phương: Là hình hộp chữ nhật đặc biệt có 6 mặt đều là các hình vuông bằng nhau, 12 cạnh bằng nhau có độ dài a.",
          "Diện tích xung quanh hình hộp chữ nhật: Bằng chu vi đáy nhân chiều cao: Sxq = 2(a + b)h.",
          "Diện tích toàn phần: Stp = Sxq + 2 · Sđáy = 2(a + b)h + 2ab.",
          "Thể tích hình hộp chữ nhật: V = a · b · h.",
          "Hình lập phương cạnh a: Sxq = 4a^2 ; Stp = 6a^2 ; V = a^3.",
          "Đổi đơn vị: 1 m^3 = 1000 dm^3 = 1000 lít ; 1 dm^3 = 1 lít = 1000 cm^3."
        ],
        formulas: [
          "Hộp chữ nhật: Sxq = 2(a + b)h ; Stp = Sxq + 2ab ; V = a·b·h",
          "Lập phương: Sxq = 4a^2 ; Stp = 6a^2 ; V = a^3",
          "1 m^3 = 1000 dm^3 = 1000 lít ; 1 dm^3 = 1 lít = 1000 cm^3"
        ],
        methods: "Đổi các kích thước về cùng một đơn vị đo trước khi tính; phân biệt rõ diện tích xung quanh (4 mặt bên) và diện tích toàn phần (cả 6 mặt).",
        example: {
          problem: "Một bể cá dạng hình hộp chữ nhật có chiều dài 80 cm, chiều rộng 50 cm và chiều cao 45 cm. Tính diện tích kính làm bể cá không nắp và thể tích chứa nước tối đa của bể theo lít.",
          solution: "1) Diện tích xung quanh: Sxq = 2 · (80 + 50) · 45 = 2 · 130 · 45 = 11.700 (cm^2).\nDiện tích đáy: Sđ = 80 · 50 = 4.000 (cm^2).\nDiện tích kính làm bể không nắp: S = Sxq + Sđ = 11.700 + 4.000 = 15.700 (cm^2).\n2) Thể tích bể cá: V = 80 · 50 · 45 = 180.000 (cm^3) = 180 dm^3 = 180 lít."
        },
        quiz: [
          {
            q: "Một hình lập phương có cạnh bằng 5 cm. Thể tích của hình lập phương đó là:",
            options: ["A. 125 cm^3", "B. 25 cm^3", "C. 150 cm^3", "D. 100 cm^3"],
            a: 0,
            exp: "V = a^3 = 5^3 = 125 cm^3."
          },
          {
            q: "Diện tích xung quanh của hình hộp chữ nhật có ba kích thước a, b, h được tính theo công thức:",
            options: ["A. Sxq = 2(a + b)h", "B. Sxq = abh", "C. Sxq = 2ab", "D. Sxq = (a + b)h"],
            a: 0,
            exp: "Diện tích xung quanh bằng chu vi đáy nhân với chiều cao: 2(a + b) · h."
          }
        ]
      },
      {
        id: "bai-37",
        num: 37,
        title: "Bài 37. Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác",
        summary: "Đặc điểm hình lăng trụ đứng (đáy tam giác/tứ giác song song bằng nhau, mặt bên hình chữ nhật, chiều cao); công thức Sxq = C·h và V = Sđ·h.",
        coreConcepts: [
          "Hình lăng trụ đứng tam giác: Có 2 đáy là hai tam giác bằng nhau và song song; 3 mặt bên là các hình chữ nhật; các cạnh bên song song, bằng nhau và vuông góc với đáy (chiều cao h).",
          "Hình lăng trụ đứng tứ giác: Có 2 đáy là hai tứ giác bằng nhau và song song; 4 mặt bên là các hình chữ nhật.",
          "Diện tích xung quanh: Bằng chu vi đáy (C) nhân với chiều cao (h): Sxq = C · h.",
          "Diện tích toàn phần: Bằng diện tích xung quanh cộng với diện tích hai đáy: Stp = Sxq + 2 · Sđ.",
          "Thể tích: Bằng diện tích đáy (Sđ) nhân với chiều cao (h): V = Sđ · h."
        ],
        formulas: [
          "Sxq = C_đáy · h (Chu vi đáy × Chiều cao)",
          "Stp = Sxq + 2 · S_đáy",
          "V = S_đáy · h (Diện tích đáy × Chiều cao)"
        ],
        methods: "Tính chu vi đáy và diện tích đáy trước; sau đó nhân với chiều cao lăng trụ h để ra diện tích xung quanh và thể tích.",
        example: {
          problem: "Một chiếc lều cắm trại có dạng hình lăng trụ đứng tam giác. Đáy là tam giác vuông có hai cạnh góc vuông là 3 m và 4 m, cạnh huyền 5 m. Chiều dài (chiều cao lăng trụ) là 6 m. Tính thể tích không gian bên trong lều.",
          solution: "Diện tích đáy tam giác vuông là: Sđ = 1/2 · 3 · 4 = 6 (m^2).\nThể tích không gian bên trong lều là: V = Sđ · h = 6 · 6 = 36 (m^3)."
        },
        quiz: [
          {
            q: "Thể tích của hình lăng trụ đứng có diện tích đáy S và chiều cao h được tính theo công thức:",
            options: ["A. V = S · h", "B. V = 1/3 · S · h", "C. V = 2 · S · h", "D. V = S + h"],
            a: 0,
            exp: "Thể tích lăng trụ đứng bằng diện tích đáy nhân chiều cao: V = Sđ · h."
          },
          {
            q: "Các mặt bên của hình lăng trụ đứng luôn là hình gì?",
            options: ["A. Hình chữ nhật", "B. Hình tam giác", "C. Hình bình hành", "D. Hình thoi"],
            a: 0,
            exp: "Theo định nghĩa hình lăng trụ đứng: các mặt bên vuông góc với đáy nên luôn là các hình chữ nhật."
          }
        ]
      }
    ]
  }
];

// Bảng công thức và dấu hiệu tra nhanh toàn khóa Toán 7
const math7FormulaMatrix = [
  { topic: "Cộng, trừ phân số", formula: "a/b ± c/d = (ad ± bc)/bd", note: "Quy đồng về mẫu dương trước khi cộng trừ." },
  { topic: "Nhân, chia phân số", formula: "(a/b) · (c/d) = ac/bd ; (a/b) : (c/d) = ad/bc", note: "Nhân với phân số nghịch đảo khi chia (c, d ≠ 0)." },
  { topic: "Lũy thừa cùng cơ số", formula: "x^m · x^n = x^(m+n) ; x^m : x^n = x^(m-n)", note: "Nhân thì cộng số mũ, chia thì trừ số mũ." },
  { topic: "Lũy thừa của lũy thừa", formula: "(x^m)^n = x^(m·n) ; (xy)^n = x^n · y^n", note: "Nhân các số mũ với nhau." },
  { topic: "Căn bậc hai số học", formula: "x = √a <=> x ≥ 0 và x^2 = a (với a ≥ 0)", note: "√(m^2) = |m|; √a không âm." },
  { topic: "Góc trong tam giác", formula: "∠A + ∠B + ∠C = 180°", note: "Góc ngoài = Tổng hai góc trong không kề." },
  { topic: "Hai đường thẳng song song", formula: "So le trong bằng nhau <=> a // b ; Đồng vị bằng nhau <=> a // b", note: "Trong cùng phía bù nhau (tổng 180°)." },
  { topic: "Tam giác bằng nhau", formula: "c.c.c ; c.g.c ; g.c.g ; Cạnh huyền - góc nhọn ; Cạnh huyền - CGV", note: "Ghi đúng thứ tự các đỉnh tương ứng." },
  { topic: "Biểu đồ quạt tròn", formula: "Góc ở tâm α = (p% / 100%) · 360° = (m / N) · 360°", note: "Toàn bộ hình tròn biểu thị 100% (360°)." },
  { topic: "Tỉ lệ thức", formula: "a/b = c/d <=> a·d = b·c", note: "Tích ngoại tỉ bằng tích trung tỉ." },
  { topic: "Dãy tỉ số bằng nhau", formula: "a/b = c/d = (a ± c) / (b ± d) = (a + c + e) / (b + d + f)", note: "Mẫu số của các tỉ số mới phải khác 0." },
  { topic: "Đại lượng tỉ lệ thuận", formula: "y = kx <=> k = y / x (không đổi)", note: "x tăng n lần thì y tăng n lần." },
  { topic: "Đại lượng tỉ lệ nghịch", formula: "y = a / x <=> x · y = a (không đổi)", note: "x tăng n lần thì y giảm n lần." },
  { topic: "Phép chia đa thức", formula: "A = B · Q + R (với bậc R < bậc B hoặc R = 0)", note: "Bị chia = Chia × Thương + Dư." },
  { topic: "Xác suất đồng khả năng", formula: "P(A) = k / n = (Số kết quả thuận lợi) / (Tổng số kết quả)", note: "0 ≤ P(A) ≤ 1; P(Chắc chắn) = 1; P(Không thể) = 0." },
  { topic: "Trọng tâm tam giác (G)", formula: "GA/AM = GB/BN = GC/CP = 2/3", note: "Giao 3 trung tuyến; GA = 2 GM." },
  { topic: "Bất đẳng thức tam giác", formula: "|b − c| < a < b + c", note: "Tổng hai cạnh luôn lớn hơn cạnh còn lại." },
  { topic: "Hình hộp chữ nhật", formula: "Sxq = 2(a + b)h ; Stp = Sxq + 2ab ; V = abh", note: "Đổi cùng đơn vị; 1 dm^3 = 1 lít." },
  { topic: "Hình lập phương", formula: "Sxq = 4a^2 ; Stp = 6a^2 ; V = a^3", note: "Cạnh bằng a; 6 mặt vuông bằng nhau." },
  { topic: "Lăng trụ đứng tam giác/tứ giác", formula: "Sxq = C_đáy · h ; Stp = Sxq + 2·S_đáy ; V = S_đáy · h", note: "Mặt bên là các hình chữ nhật vuông góc đáy." }
];

// 8 Quy trình giải toán chuẩn
const math7Procedures = [
  { name: "1. Tính giá trị biểu thức số", steps: "Đọc biểu thức → Xử lý trong ngoặc ({ [ ( ) ] }) → Tính lũy thừa → Nhân và chia (trái qua phải) → Cộng và trừ (trái qua phải) → Rút gọn tối giản." },
  { name: "2. Tìm x (Quy tắc chuyển vế)", steps: "Thu gọn hai vế → Chuyển hạng tử chứa x sang vế trái, hằng số sang vế phải (nhớ đổi dấu) → Thu gọn về ax = b → x = b/a (a ≠ 0) → Thử lại và kết luận." },
  { name: "3. Tính góc & Chứng minh song song", steps: "Vẽ hình chính xác, đánh dấu giả thiết → Tìm cát tuyến và xác định cặp góc (so le trong / đồng vị / trong cùng phía) → Sử dụng định nghĩa, tiên đề Euclid để suy ra song song hoặc tính số đo góc." },
  { name: "4. Chứng minh hai tam giác bằng nhau", steps: "Xét hai tam giác cần chứng minh → Liệt kê 3 cặp yếu tố bằng nhau (c.c.c, c.g.c, g.c.g hoặc trường hợp tam giác vuông) → Kết luận tam giác bằng nhau kèm tên trường hợp → Suy ra các góc/cạnh tương ứng bằng nhau." },
  { name: "5. Bài toán tỉ lệ thuận / nghịch", steps: "Gọi ẩn và đặt điều kiện → Xác định quan hệ tỉ lệ thuận (y = kx) hay tỉ lệ nghịch (xy = a) → Lập dãy tỉ số bằng nhau hoặc đẳng thức tích → Áp dụng tính chất dãy tỉ số để tìm ẩn → Đối chiếu điều kiện và trả lời." },
  { name: "6. Cộng, trừ, nhân đa thức một biến", steps: "Bỏ dấu ngoặc (chú ý đổi dấu toàn bộ nếu trước ngoặc có dấu trừ) → Nhóm các hạng tử đồng dạng có cùng số mũ → Cộng/trừ hệ số giữ nguyên phần biến → Sắp xếp theo lũy thừa giảm dần." },
  { name: "7. Tính xác suất biến cố ngẫu nhiên", steps: "Liệt kê đầy đủ không gian mẫu (n) → Kiểm tra tính đồng khả năng → Đếm số kết quả thuận lợi làm biến cố xảy ra (k) → Lập tỉ số P = k/n và rút gọn phân số." },
  { name: "8. Tính diện tích & thể tích hình khối", steps: "Đổi tất cả các kích thước về cùng một đơn vị đo → Xác định mặt đáy, tính chu vi đáy C và diện tích đáy Sđ → Áp dụng công thức Sxq = C·h hoặc V = Sđ·h → Ghi rõ đơn vị đo (cm^2, m^3, lít)." }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { chaptersPart2, math7FormulaMatrix, math7Procedures };
}
