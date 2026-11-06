// Dữ liệu Toán 7 - Tập 1 (Chương I -> Chương V: Bài 1 -> Bài 19)
// SGK Kết nối tri thức với cuộc sống - GDPT 2018

const chaptersPart1 = [
  // ==================== CHƯƠNG I ====================
  {
    chapterNum: "I",
    title: "Chương I. Số hữu tỉ",
    desc: "Tập hợp các số hữu tỉ, bốn phép toán cộng trừ nhân chia, lũy thừa số mũ tự nhiên, thứ tự phép tính và quy tắc chuyển vế.",
    lessons: [
      {
        id: "bai-1",
        num: 1,
        title: "Bài 1. Tập hợp các số hữu tỉ",
        summary: "Khái niệm số hữu tỉ a/b (a, b ∈ Z, b ≠ 0), tập hợp Q, biểu diễn trên trục số, số đối và giá trị tuyệt đối.",
        coreConcepts: [
          "Số hữu tỉ là số viết được dưới dạng phân số a/b với a, b ∈ Z và b ≠ 0. Kí hiệu tập hợp là Q.",
          "Mọi số nguyên a đều là số hữu tỉ vì a = a/1. Tập số nguyên là tập con của số hữu tỉ: Z ⊂ Q.",
          "Số thập phân hữu hạn và số thập phân vô hạn tuần hoàn đều là số hữu tỉ.",
          "Số đối của x là −x. Tổng hai số đối nhau luôn bằng 0: x + (−x) = 0.",
          "Giá trị tuyệt đối |x| là khoảng cách từ điểm x đến gốc 0 trên trục số, do đó |x| ≥ 0 với mọi x."
        ],
        formulas: [
          "Q = { a/b | a, b ∈ Z, b ≠ 0 }",
          "Số đối: x + (−x) = 0",
          "|x| = x khi x ≥ 0 ; |x| = −x khi x < 0"
        ],
        methods: "Quy đồng mẫu dương để so sánh hai phân số; đưa về số thập phân hoặc vị trí trục số để kiểm tra.",
        example: {
          problem: "So sánh hai số hữu tỉ: x = −0,6 và y = 1/−2.",
          solution: "Ta viết: x = −0,6 = −6/10 = −3/5 = −6/10; y = 1/−2 = −1/2 = −5/10. Vì −6 < −5 và 10 > 0 nên −6/10 < −5/10. Do đó x < y."
        },
        quiz: [
          {
            q: "Khẳng định nào sau đây là ĐÚNG về tập hợp các số hữu tỉ Q?",
            options: ["A. Mọi số nguyên đều là số hữu tỉ (Z ⊂ Q)", "B. Số 0 không phải là số hữu tỉ", "C. Số vô tỉ thuộc tập hợp Q", "D. Phân số có mẫu bằng 0 là số hữu tỉ"],
            a: 0,
            exp: "Vì mọi số nguyên a đều viết được dưới dạng a/1 nên Z ⊂ Q."
          },
          {
            q: "Giá trị tuyệt đối của số hữu tỉ x = −3/4 là:",
            options: ["A. 3/4", "B. −3/4", "C. 4/3", "D. 0"],
            a: 0,
            exp: "|−3/4| = −(−3/4) = 3/4 vì khoảng cách trên trục số luôn không âm."
          }
        ]
      },
      {
        id: "bai-2",
        num: 2,
        title: "Bài 2. Cộng, trừ, nhân, chia số hữu tỉ",
        summary: "Quy tắc cộng, trừ, nhân, chia số hữu tỉ; tính chất giao hoán, kết hợp, phân phối của phép nhân đối với phép cộng.",
        coreConcepts: [
          "Cộng, trừ: đưa về cùng mẫu dương rồi cộng hoặc trừ tử: a/m + b/m = (a+b)/m.",
          "Nhân hai số hữu tỉ: nhân tử với tử, mẫu với mẫu: (a/b) · (c/d) = (a·c)/(b·d).",
          "Chia hai số hữu tỉ: nhân số bị chia với số nghịch đảo của số chia: (a/b) : (c/d) = (a·d)/(b·c) (c, d ≠ 0).",
          "Quy tắc dấu: nhân/chia cùng dấu cho kết quả dương (+); khác dấu cho kết quả âm (−)."
        ],
        formulas: [
          "Cộng/Trừ: a/m ± b/m = (a ± b)/m",
          "Nhân: (a/b) · (c/d) = (ac)/(bd)",
          "Chia: (a/b) : (c/d) = (a/b) · (d/c) = (ad)/(bc) (c, d ≠ 0)",
          "Phân phối: a(b + c) = ab + ac ; a(b − c) = ab − ac"
        ],
        methods: "Rút gọn các phân số trước khi nhân/chia; quy đồng mẫu số chung nhỏ nhất khi cộng/trừ; chú ý dấu ngoặc với số âm.",
        example: {
          problem: "Tính giá trị biểu thức: A = (−2/3) · 5/7 + (−2/3) · 2/7.",
          solution: "Áp dụng tính chất phân phối: A = (−2/3) · (5/7 + 2/7) = (−2/3) · (7/7) = (−2/3) · 1 = −2/3."
        },
        quiz: [
          {
            q: "Kết quả của phép tính (−3/5) · (10/9) là:",
            options: ["A. −2/3", "B. 2/3", "C. −1/3", "D. −6/5"],
            a: 0,
            exp: "(−3/5) · (10/9) = (−3 · 10) / (5 · 9) = −30/45 = −2/3."
          },
          {
            q: "Số nghịch đảo của số hữu tỉ −4/7 là:",
            options: ["A. −7/4", "B. 7/4", "C. 4/7", "D. −4/7"],
            a: 0,
            exp: "Số nghịch đảo của a/b là b/a. Do đó số nghịch đảo của −4/7 là −7/4 vì (−4/7) · (−7/4) = 1."
          }
        ]
      },
      {
        id: "bai-3",
        num: 3,
        title: "Bài 3. Lũy thừa với số mũ tự nhiên của một số hữu tỉ",
        summary: "Lũy thừa bậc n, nhân/chia hai lũy thừa cùng cơ số, lũy thừa của lũy thừa, lũy thừa của một tích và một thương.",
        coreConcepts: [
          "Lũy thừa bậc n của số hữu tỉ x (n ∈ N*) là tích của n thừa số bằng x: x^n = x · x · ... · x (n thừa số).",
          "Quy ước: x^1 = x ; x^0 = 1 (với x ≠ 0).",
          "Lũy thừa bậc chẵn của số âm là số dương: (−x)^(2k) > 0. Lũy thừa bậc lẻ giữ nguyên dấu âm.",
          "Phân biệt rõ: (−x)^2 = x^2, còn −x^2 = −(x^2)."
        ],
        formulas: [
          "x^m · x^n = x^(m + n)",
          "x^m : x^n = x^(m − n) (x ≠ 0, m ≥ n)",
          "(x^m)^n = x^(m · n)",
          "(x · y)^n = x^n · y^n",
          "(x / y)^n = x^n / y^n (y ≠ 0)"
        ],
        methods: "Đưa các lũy thừa về cùng cơ số hoặc cùng số mũ để rút gọn; áp dụng triệt để quy tắc tính nhanh.",
        example: {
          problem: "Rút gọn biểu thức: P = (2^3 · 9^2) / (6^3).",
          solution: "Ta phân tích về các thừa số nguyên tố: 9^2 = (3^2)^2 = 3^4; 6^3 = (2 · 3)^3 = 2^3 · 3^3. Khi đó: P = (2^3 · 3^4) / (2^3 · 3^3) = (2^3/2^3) · (3^4/3^3) = 1 · 3 = 3."
        },
        quiz: [
          {
            q: "Giá trị của biểu thức (−1/2)^3 là:",
            options: ["A. −1/8", "B. 1/8", "C. −1/6", "D. 1/6"],
            a: 0,
            exp: "(−1/2)^3 = (−1)^3 / 2^3 = −1/8 (số mũ lẻ giữ nguyên dấu âm)."
          },
          {
            q: "Kết quả rút gọn của phép tính (x^4)^3 : x^5 (với x ≠ 0) là:",
            options: ["A. x^7", "B. x^2", "C. x^12", "D. x^8"],
            a: 0,
            exp: "(x^4)^3 = x^12; x^12 : x^5 = x^(12 − 5) = x^7."
          }
        ]
      },
      {
        id: "bai-4",
        num: 4,
        title: "Bài 4. Thứ tự thực hiện phép tính. Quy tắc chuyển vế",
        summary: "Thứ tự ưu tiên ngoặc và phép tính; quy tắc chuyển vế đổi dấu trong đẳng thức toán học.",
        coreConcepts: [
          "Thứ tự phép tính không có ngoặc: Lũy thừa → Nhân và chia → Cộng và trừ.",
          "Thứ tự có dấu ngoặc: Ngoặc tròn ( ) → Ngoặc vuông [ ] → Ngoặc nhọn { }.",
          "Quy tắc chuyển vế: Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó: '+' thành '−' và '−' thành '+'.",
          "Nếu a + b = c thì a = c − b. Nếu a − b = c thì a = c + b."
        ],
        formulas: [
          "Thứ tự: { [ ( ) ] } -> Lũy thừa -> (×, :) -> (+, −)",
          "Chuyển vế: A + B = C <=> A = C − B",
          "Chuyển vế: A − B = C <=> A = C + B"
        ],
        methods: "Quy trình giải tìm x: Thu gọn từng vế → Chuyển hạng tử chứa x sang vế trái, hằng số sang vế phải (nhớ đổi dấu) → Chia cho hệ số của x → Kết luận và thử lại.",
        example: {
          problem: "Tìm x, biết: 3/4 + 1/4 · x = 1/2.",
          solution: "Chuyển vế 3/4 sang vế phải: 1/4 · x = 1/2 − 3/4. Ta có: 1/2 − 3/4 = 2/4 − 3/4 = −1/4. Suy ra: 1/4 · x = −1/4 => x = (−1/4) : (1/4) = −1."
        },
        quiz: [
          {
            q: "Khi chuyển số hạng −5/6 từ vế trái sang vế phải của đẳng thức x − 5/6 = 1/3, ta được:",
            options: ["A. x = 1/3 + 5/6", "B. x = 1/3 − 5/6", "C. x = −1/3 + 5/6", "D. x = −1/3 − 5/6"],
            a: 0,
            exp: "Theo quy tắc chuyển vế: chuyển −5/6 qua vế phải đổi dấu thành +5/6, do đó x = 1/3 + 5/6."
          },
          {
            q: "Giá trị của biểu thức 10 − 2 · 3^2 là:",
            options: ["A. −8", "B. 64", "C. 72", "D. 28"],
            a: 0,
            exp: "Ưu tiên lũy thừa trước: 3^2 = 9; sau đó nhân: 2 · 9 = 18; cuối cùng trừ: 10 − 18 = −8."
          }
        ]
      }
    ]
  },

  // ==================== CHƯƠNG II ====================
  {
    chapterNum: "II",
    title: "Chương II. Số thực",
    desc: "Số thập phân vô hạn tuần hoàn, số vô tỉ, căn bậc hai số học, tập hợp số thực R và quy tắc làm tròn số.",
    lessons: [
      {
        id: "bai-5",
        num: 5,
        title: "Bài 5. Làm quen với số thập phân vô hạn tuần hoàn",
        summary: "Phân biệt số thập phân hữu hạn và số thập phân vô hạn tuần hoàn; chu kì tuần hoàn.",
        coreConcepts: [
          "Khi chia tử cho mẫu của một phân số tối giản với mẫu dương, nếu mẫu chỉ chứa thừa số nguyên tố 2 và 5 thì phân số viết được dưới dạng số thập phân hữu hạn.",
          "Nếu mẫu chứa thừa số nguyên tố khác 2 và 5 thì phân số viết được dưới dạng số thập phân vô hạn tuần hoàn.",
          "Chu kì là nhóm chữ số lặp lại vô hạn lần, được đặt trong dấu ngoặc đơn: ví dụ 0,(3) = 0,333... ; 1,2(45) = 1,24545...",
          "Mọi số thập phân hữu hạn và vô hạn tuần hoàn đều biểu diễn một số hữu tỉ."
        ],
        formulas: [
          "Mẫu chỉ có thừa số 2, 5: Số thập phân hữu hạn (ví dụ 3/4 = 0,75)",
          "Mẫu có ước nguyên tố khác 2, 5: Số thập phân vô hạn tuần hoàn (ví dụ 1/3 = 0,(3))"
        ],
        methods: "Phân tích mẫu số thành thừa số nguyên tố để dự đoán dạng số thập phân; thực hiện phép chia để tìm chu kì.",
        example: {
          problem: "Viết các phân số sau dưới dạng số thập phân: 7/20 và 5/11.",
          solution: "1) 7/20: Mẫu 20 = 2^2 · 5 (chỉ chứa 2 và 5), thực hiện phép chia 7 : 20 = 0,35 (hữu hạn).\n2) 5/11: Mẫu 11 chứa ước nguyên tố 11 khác 2 và 5, chia 5 : 11 = 0,454545... = 0,(45) (vô hạn tuần hoàn với chu kì 45)."
        },
        quiz: [
          {
            q: "Phân số nào sau đây viết được dưới dạng số thập phân vô hạn tuần hoàn?",
            options: ["A. 1/6", "B. 3/8", "C. 7/25", "D. 9/20"],
            a: 0,
            exp: "1/6 có mẫu 6 = 2 · 3 (chứa thừa số nguyên tố 3 khác 2 và 5) nên 1/6 = 0,1(6) là số thập phân vô hạn tuần hoàn."
          },
          {
            q: "Chu kì của số thập phân vô hạn tuần hoàn 0,2343434... là:",
            options: ["A. 34", "B. 234", "C. 4", "D. 23"],
            a: 0,
            exp: "Nhóm chữ số 34 được lặp đi lặp lại vô hạn lần nên số được viết là 0,2(34), có chu kì là 34."
          }
        ]
      },
      {
        id: "bai-6",
        num: 6,
        title: "Bài 6. Số vô tỉ. Căn bậc hai số học",
        summary: "Định nghĩa số vô tỉ, khái niệm căn bậc hai số học của một số không âm, kí hiệu √a.",
        coreConcepts: [
          "Số vô tỉ là số viết được dưới dạng số thập phân vô hạn không tuần hoàn. Ví dụ: √2 = 1,41421... ; π = 3,14159...",
          "Tập hợp các số vô tỉ được kí hiệu là I.",
          "Căn bậc hai số học của một số a không âm là số không âm x sao cho x^2 = a. Kí hiệu là √a.",
          "Điều kiện xác định: √a chỉ có nghĩa khi a ≥ 0. Ta luôn có: (√a)^2 = a và √(m^2) = |m|.",
          "Với hai số không âm a, b: a < b <=> √a < √b."
        ],
        formulas: [
          "x = √a <=> x ≥ 0 và x^2 = a (với a ≥ 0)",
          "√(a^2) = |a|",
          "a < b <=> √a < √b (với a, b ≥ 0)"
        ],
        methods: "Muốn tính căn bậc hai số học của một số, ta tìm số dương có bình phương bằng số đã cho; dùng so sánh bình phương để so sánh các căn số.",
        example: {
          problem: "Tính: a) √81 ; b) √( (−7)^2 ) ; c) So sánh 4 và √15.",
          solution: "a) √81 = 9 vì 9 > 0 và 9^2 = 81.\nb) √( (−7)^2 ) = |−7| = 7.\nc) Ta có 4 = √16. Vì 16 > 15 nên √16 > √15, tức là 4 > √15."
        },
        quiz: [
          {
            q: "Căn bậc hai số học của 49 là:",
            options: ["A. 7", "B. −7", "C. ±7", "D. 2401"],
            a: 0,
            exp: "Căn bậc hai số học của 49 là số không âm 7 vì 7^2 = 49."
          },
          {
            q: "Khẳng định nào sau đây là ĐÚNG?",
            options: ["A. √2 là số vô tỉ", "B. √4 là số vô tỉ", "C. Căn bậc hai số học của số âm luôn tồn tại", "D. Số vô tỉ có thể viết thành phân số a/b (a, b ∈ Z)"],
            a: 0,
            exp: "√2 = 1,41421356... là số thập phân vô hạn không tuần hoàn nên là số vô tỉ."
          }
        ]
      },
      {
        id: "bai-7",
        num: 7,
        title: "Bài 7. Tập hợp các số thực",
        summary: "Tập hợp số thực R gồm số hữu tỉ và số vô tỉ, biểu diễn trên trục số thực, quy tắc làm tròn số thập phân.",
        coreConcepts: [
          "Tập hợp số thực R gồm tất cả các số hữu tỉ và số vô tỉ: R = Q ∪ I.",
          "Quan hệ tập hợp: N ⊂ Z ⊂ Q ⊂ R.",
          "Mỗi số thực được biểu diễn bởi một điểm trên trục số. Ngược lại, mỗi điểm trên trục số đều biểu diễn đúng một số thực (trục số thực được lấp kín hoàn toàn).",
          "Quy tắc làm tròn: Giữ nguyên chữ số ở hàng làm tròn nếu chữ số đầu tiên bỏ đi nhỏ hơn 5 (0, 1, 2, 3, 4); tăng chữ số ở hàng làm tròn lên 1 đơn vị nếu chữ số đầu tiên bỏ đi từ 5 trở lên (5, 6, 7, 8, 9)."
        ],
        formulas: [
          "N ⊂ Z ⊂ Q ⊂ R",
          "R = Q ∪ I",
          "Làm tròn số: Nhìn chữ số kế bên phải (≥ 5 tăng 1, < 5 giữ nguyên)"
        ],
        methods: "So sánh hai số thực bằng cách viết dưới dạng thập phân hoặc so sánh bình phương; làm tròn số theo yêu cầu đề bài.",
        example: {
          problem: "Làm tròn số thực x = 3,14159265... đến chữ số thập phân thứ ba.",
          solution: "Chữ số ở hàng làm tròn (thập phân thứ ba) là 1. Chữ số ngay sau nó là 5 (≥ 5). Do đó ta tăng 1 lên thành 2. Kết quả làm tròn: x ≈ 3,142."
        },
        quiz: [
          {
            q: "Tập hợp các số thực R là hợp của hai tập hợp nào?",
            options: ["A. Tập hợp số hữu tỉ Q và tập hợp số vô tỉ I", "B. Tập hợp số tự nhiên N và số nguyên Z", "C. Tập hợp số nguyên âm và số nguyên dương", "D. Tập hợp các phân số dương"],
            a: 0,
            exp: "Tập số thực R bao gồm toàn bộ số hữu tỉ và số vô tỉ: R = Q ∪ I."
          },
          {
            q: "Làm tròn số 12,345 đến hàng phần mười (chữ số thập phân thứ nhất) được kết quả là:",
            options: ["A. 12,3", "B. 12,4", "C. 12,35", "D. 12"],
            a: 0,
            exp: "Chữ số hàng phần mười là 3, chữ số ngay sau là 4 (< 5) nên giữ nguyên: 12,3."
          }
        ]
      }
    ]
  },

  // ==================== CHƯƠNG III ====================
  {
    chapterNum: "III",
    title: "Chương III. Góc và đường thẳng song song",
    desc: "Góc ở vị trí đặc biệt, tia phân giác, dấu hiệu nhận biết hai đường thẳng song song, tiên đề Euclid và chứng minh định lí.",
    lessons: [
      {
        id: "bai-8",
        num: 8,
        title: "Bài 8. Góc ở vị trí đặc biệt. Tia phân giác của một góc",
        summary: "Góc kề bù, góc đối đỉnh, góc phụ nhau; tính chất hai góc đối đỉnh bằng nhau; định nghĩa và tính chất tia phân giác.",
        coreConcepts: [
          "Hai góc kề bù là hai góc vừa kề nhau vừa bù nhau, có tổng số đo bằng 180°.",
          "Hai góc đối đỉnh là hai góc mà mỗi cạnh của góc này là tia đối của một cạnh của góc kia. Hai góc đối đỉnh thì bằng nhau.",
          "Tia phân giác của một góc là tia nằm giữa hai cạnh của góc và tạo với hai cạnh ấy hai góc bằng nhau.",
          "Nếu Oz là tia phân giác của góc xOy thì: ∠xOz = ∠zOy = 1/2 ∠xOy."
        ],
        formulas: [
          "Kề bù: ∠AOB + ∠BOC = 180°",
          "Đối đỉnh: ∠1 = ∠2",
          "Phân giác Oz: ∠xOz = ∠yOz = 1/2 ∠xOy"
        ],
        methods: "Dựa vào quan hệ kề bù để tính số đo góc bằng 180° trừ đi góc đã biết; dùng tính chất đối đỉnh và tia phân giác để chứng minh các góc bằng nhau.",
        example: {
          problem: "Cho hai đường thẳng xx' và yy' cắt nhau tại O, biết ∠xOy = 60°. Tính số đo góc x'Oy' và góc xOy'.",
          solution: "1) Góc x'Oy' và góc xOy là hai góc đối đỉnh, nên ∠x'Oy' = ∠xOy = 60°.\n2) Góc xOy' và góc xOy là hai góc kề bù, nên ∠xOy' = 180° − ∠xOy = 180° − 60° = 120°."
        },
        quiz: [
          {
            q: "Nếu góc xOy có số đo bằng 70° và Oz là tia phân giác của góc đó thì số đo góc xOz bằng:",
            options: ["A. 35°", "B. 70°", "C. 140°", "D. 55°"],
            a: 0,
            exp: "Tia phân giác chia đôi góc: ∠xOz = 70° / 2 = 35°."
          },
          {
            q: "Hai góc đối đỉnh có tính chất nào sau đây?",
            options: ["A. Có số đo bằng nhau", "B. Có tổng số đo bằng 180°", "C. Có tổng số đo bằng 90°", "D. Luôn là góc nhọn"],
            a: 0,
            exp: "Theo định lí: Hai góc đối đỉnh thì bằng nhau."
          }
        ]
      },
      {
        id: "bai-9",
        num: 9,
        title: "Bài 9. Hai đường thẳng song song và dấu hiệu nhận biết",
        summary: "Các cặp góc so le trong, đồng vị, trong cùng phía; dấu hiệu nhận biết hai đường thẳng song song.",
        coreConcepts: [
          "Khi một đường thẳng cắt hai đường thẳng a và b tạo thành:",
          "- Các cặp góc so le trong (nằm giữa hai đường thẳng và so le ở hai phía của cát tuyến).",
          "- Các cặp góc đồng vị (ở vị trí tương ứng cùng phía).",
          "- Các cặp góc trong cùng phía (nằm giữa hai đường thẳng và ở cùng một phía).",
          "Dấu hiệu nhận biết: Nếu đường thẳng c cắt hai đường thẳng a, b và trong các góc tạo thành có: một cặp góc so le trong bằng nhau HOẶC một cặp góc đồng vị bằng nhau HOẶC một cặp góc trong cùng phía bù nhau (tổng 180°) thì a song song với b (a // b)."
        ],
        formulas: [
          "So le trong bằng nhau => a // b",
          "Đồng vị bằng nhau => a // b",
          "Trong cùng phía bù nhau: ∠1 + ∠2 = 180° => a // b"
        ],
        methods: "Xác định đúng vị trí cặp góc (so le trong, đồng vị, trong cùng phía) dựa trên cát tuyến; kiểm tra số đo để kết luận song song.",
        example: {
          problem: "Cho đường thẳng c cắt hai đường thẳng a và b tại A và B. Biết góc A1 so le trong với góc B1 và ∠A1 = 50°, ∠B1 = 50°. Hai đường thẳng a và b có song song không?",
          solution: "Vì đường thẳng c cắt a và b tạo ra cặp góc so le trong A1 và B1 có số đo bằng nhau (∠A1 = ∠B1 = 50°) nên theo dấu hiệu nhận biết, ta có a // b."
        },
        quiz: [
          {
            q: "Nếu đường thẳng c cắt hai đường thẳng a, b và tạo thành một cặp góc so le trong bằng nhau thì:",
            options: ["A. a song song với b (a // b)", "B. a vuông góc với b", "C. a trùng với b", "D. a cắt b"],
            a: 0,
            exp: "Dấu hiệu nhận biết: một cặp góc so le trong bằng nhau thì hai đường thẳng song song."
          },
          {
            q: "Nếu hai đường thẳng a và b song song, một cặp góc trong cùng phía có số đo tổng cộng là:",
            options: ["A. 180°", "B. 90°", "C. 360°", "D. 120°"],
            a: 0,
            exp: "Tính chất: Hai đường thẳng song song thì hai góc trong cùng phía bù nhau (tổng bằng 180°)."
          }
        ]
      },
      {
        id: "bai-10",
        num: 10,
        title: "Bài 10. Tiên đề Euclid. Tính chất của hai đường thẳng song song",
        summary: "Tiên đề Euclid về đường thẳng song song; tính chất các góc tạo bởi đường thẳng cắt hai đường thẳng song song.",
        coreConcepts: [
          "Tiên đề Euclid: Qua một điểm ở ngoài một đường thẳng, chỉ có một đường thẳng song song với đường thẳng đó.",
          "Tính chất hai đường thẳng song song: Nếu một đường thẳng cắt hai đường thẳng song song thì:",
          "- Hai góc so le trong bằng nhau.",
          "- Hai góc đồng vị bằng nhau.",
          "- Hai góc trong cùng phía bù nhau (tổng bằng 180°).",
          "Hệ quả: Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì chúng song song với nhau (a // c và b // c => a // b)."
        ],
        formulas: [
          "a // b => ∠So_le_trong_1 = ∠So_le_trong_2",
          "a // b => ∠Đồng_vị_1 = ∠Đồng_vị_2",
          "a // b => ∠Trong_cùng_phía_1 + ∠Trong_cùng_phía_2 = 180°",
          "a // c và b // c => a // b"
        ],
        methods: "Sử dụng tính chất song song để tính số đo góc chưa biết; kẻ thêm đường thẳng phụ song song qua một điểm để giải bài toán góc zích-zắc.",
        example: {
          problem: "Cho a // b. Đường thẳng c cắt a tại A và b tại B. Biết góc A1 = 70°. Tính góc B2 đồng vị với góc A1 và góc B3 trong cùng phía với A1.",
          solution: "Vì a // b nên:\n1) Góc đồng vị bằng nhau: ∠B2 = ∠A1 = 70°.\n2) Góc trong cùng phía bù nhau: ∠B3 + ∠A1 = 180° => ∠B3 = 180° − 70° = 110°."
        },
        quiz: [
          {
            q: "Theo tiên đề Euclid, qua một điểm nằm ngoài đường thẳng d:",
            options: ["A. Chỉ vẽ được duy nhất một đường thẳng song song với d", "B. Vẽ được vô số đường thẳng song song với d", "C. Vẽ được ít nhất hai đường thẳng song song với d", "D. Không vẽ được đường thẳng nào song song với d"],
            a: 0,
            exp: "Nội dung tiên đề Euclid: Qua một điểm ở ngoài một đường thẳng chỉ có một đường thẳng song song với đường thẳng đó."
          },
          {
            q: "Nếu a // b và b // c thì quan hệ giữa a và c là:",
            options: ["A. a // c", "B. a cắt c", "C. a vuông góc với c", "D. a trùng với c"],
            a: 0,
            exp: "Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau."
          }
        ]
      },
      {
        id: "bai-11",
        num: 11,
        title: "Bài 11. Định lí và chứng minh định lí",
        summary: "Cấu trúc của một định lí (Giả thiết GT và Kết luận KL); quy trình lập luận chứng minh định lí.",
        coreConcepts: [
          "Định lí là một khẳng định suy ra từ những khẳng định được coi là đúng.",
          "Một định lí gồm hai phần: Giả thiết (GT - điều cho biết trước) và Kết luận (KL - điều cần suy ra hoặc chứng minh).",
          "Định lí thường có dạng: 'Nếu ... thì ...' (sau 'Nếu' là Giả thiết, sau 'thì' là Kết luận).",
          "Chứng minh định lí là dùng lập luận suy luận logic đi từ Giả thiết qua các định nghĩa, tính chất, định lí đã biết để suy ra Kết luận."
        ],
        formulas: [
          "Dạng định lí: Nếu [Giả thiết (GT)] thì [Kết luận (KL)]",
          "Quy trình: GT -> (Định nghĩa/Tính chất) -> Suy luận trung gian -> KL"
        ],
        methods: "Vẽ hình minh họa → Ghi tóm tắt Giả thiết và Kết luận bằng kí hiệu toán học → Lập sơ đồ phân tích ngược từ Kết luận về Giả thiết → Viết bài chứng minh hoàn chỉnh từng bước có căn cứ.",
        example: {
          problem: "Viết Giả thiết và Kết luận của định lí: 'Hai góc đối đỉnh thì bằng nhau'.",
          solution: "Giả thiết (GT): Hai góc O1 và O2 là hai góc đối đỉnh.\nKết luận (KL): ∠O1 = ∠O2."
        },
        quiz: [
          {
            q: "Trong định lí: 'Nếu hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì chúng song song với nhau', phần Kết luận là:",
            options: ["A. Chúng song song với nhau", "B. Hai đường thẳng phân biệt cùng song song với đường thứ ba", "C. Hai đường thẳng cắt nhau", "D. Không có kết luận"],
            a: 0,
            exp: "Sau từ 'thì' là phần Kết luận của định lí: 'chúng song song với nhau'."
          },
          {
            q: "Để chứng minh một định lí hình học, ta căn cứ vào:",
            options: ["A. Giả thiết và các định nghĩa, định lí, tiên đề đã học", "B. Thước đo độ vẽ trên hình", "C. Cảm giác trực quan nhìn hình", "D. Ý kiến chủ quan không cần chứng cứ"],
            a: 0,
            exp: "Chứng minh định lí bắt buộc phải dựa trên lập luận logic từ giả thiết kết hợp các tiên đề, định nghĩa, định lí đã biết."
          }
        ]
      }
    ]
  },

  // ==================== CHƯƠNG IV ====================
  {
    chapterNum: "IV",
    title: "Chương IV. Tam giác bằng nhau",
    desc: "Tổng các góc trong tam giác, các trường hợp bằng nhau c.c.c, c.g.c, g.c.g, các trường hợp tam giác vuông, tam giác cân và đường trung trực.",
    lessons: [
      {
        id: "bai-12",
        num: 12,
        title: "Bài 12. Tổng các góc trong một tam giác",
        summary: "Định lí tổng ba góc trong một tam giác bằng 180°; định nghĩa và tính chất góc ngoài của tam giác.",
        coreConcepts: [
          "Tổng ba góc của một tam giác luôn bằng 180°: ∠A + ∠B + ∠C = 180°.",
          "Trong tam giác vuông, hai góc nhọn phụ nhau (tổng bằng 90°).",
          "Góc ngoài của tam giác là góc kề bù với một góc trong của tam giác đó.",
          "Số đo mỗi góc ngoài của tam giác bằng tổng số đo hai góc trong không kề với nó: ∠Góc_ngoài_A = ∠B + ∠C."
        ],
        formulas: [
          "∠A + ∠B + ∠C = 180°",
          "Tam giác vuông tại A: ∠B + ∠C = 90°",
          "Góc ngoài tại C: ∠ACx = ∠A + ∠B"
        ],
        methods: "Lấy 180° trừ đi tổng hai góc đã biết để tìm góc còn lại; sử dụng tính chất góc ngoài để liên hệ giữa các góc trong và ngoài tam giác.",
        example: {
          problem: "Cho tam giác ABC có ∠A = 70°, ∠B = 50°. Tính số đo góc C và số đo góc ngoài tại đỉnh C.",
          solution: "1) Trong tam giác ABC: ∠C = 180° − (∠A + ∠B) = 180° − (70° + 50°) = 60°.\n2) Góc ngoài tại đỉnh C bằng tổng hai góc trong không kề: ∠ACx = ∠A + ∠B = 70° + 50° = 120° (hoặc tính kề bù: 180° − 60° = 120°)."
        },
        quiz: [
          {
            q: "Một tam giác có hai góc lần lượt là 45° và 65°. Số đo của góc thứ ba là:",
            options: ["A. 70°", "B. 80°", "C. 60°", "D. 90°"],
            a: 0,
            exp: "Góc thứ ba = 180° − (45° + 65°) = 180° − 110° = 70°."
          },
          {
            q: "Trong một tam giác vuông, tổng số đo hai góc nhọn bằng:",
            options: ["A. 90°", "B. 180°", "C. 60°", "D. 45°"],
            a: 0,
            exp: "Vì góc vuông là 90° nên tổng hai góc nhọn bằng 180° − 90° = 90° (hai góc nhọn phụ nhau)."
          }
        ]
      },
      {
        id: "bai-13",
        num: 13,
        title: "Bài 13. Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất (c.c.c)",
        summary: "Định nghĩa hai tam giác bằng nhau; trường hợp bằng nhau cạnh - cạnh - cạnh (c.c.c).",
        coreConcepts: [
          "Hai tam giác bằng nhau là hai tam giác có các cạnh tương ứng bằng nhau và các góc tương ứng bằng nhau.",
          "Quy ước: Khi viết kí hiệu bằng nhau giữa hai tam giác, các chữ cái chỉ đỉnh tương ứng phải được viết theo đúng thứ tự (ví dụ: ΔABC = ΔDEF).",
          "Trường hợp c.c.c: Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau."
        ],
        formulas: [
          "AB=DE, AC=DF, BC=EF => ΔABC = ΔDEF (c.c.c)",
          "Từ ΔABC = ΔDEF suy ra: ∠A=∠D, ∠B=∠E, ∠C=∠F"
        ],
        methods: "Trình bày bài toán chứng minh: Xét hai tam giác → Chỉ ra 3 cặp cạnh tương ứng bằng nhau → Kết luận hai tam giác bằng nhau theo c.c.c → Suy ra các góc tương ứng bằng nhau.",
        example: {
          problem: "Cho đoạn thẳng AB. Vẽ cung tròn tâm A bán kính r và tâm B bán kính r cắt nhau tại C và D. Chứng minh ΔACD = ΔBCD.",
          solution: "Xét ΔACD và ΔBCD có:\n- AC = BC = r (theo giả thiết dựng hình)\n- AD = BD = r\n- CD là cạnh chung.\nDo đó ΔACD = ΔBCD (c.c.c)."
        },
        quiz: [
          {
            q: "Nếu ΔABC = ΔMNP thì khẳng định nào sau đây là ĐÚNG?",
            options: ["A. AB = MN và ∠C = ∠P", "B. AB = NP", "C. BC = MP", "D. ∠A = ∠P"],
            a: 0,
            exp: "Các đỉnh tương ứng A-M, B-N, C-P nên cạnh AB = MN và góc C = góc P."
          },
          {
            q: "Trường hợp bằng nhau cạnh - cạnh - cạnh (c.c.c) yêu cầu điều kiện gì?",
            options: ["A. Ba cạnh của tam giác này bằng ba cạnh của tam giác kia", "B. Ba góc bằng nhau", "C. Hai cạnh và một góc bằng nhau", "D. Hai góc và một cạnh bằng nhau"],
            a: 0,
            exp: "Trường hợp c.c.c chỉ xét độ dài ba cặp cạnh tương ứng bằng nhau."
          }
        ]
      },
      {
        id: "bai-14",
        num: 14,
        title: "Bài 14. Trường hợp bằng nhau thứ hai (c.g.c) và thứ ba (g.c.g)",
        summary: "Trường hợp bằng nhau cạnh - góc - cạnh (c.g.c) với góc xen giữa; trường hợp góc - cạnh - góc (g.c.g) với hai góc kề cạnh.",
        coreConcepts: [
          "Trường hợp c.g.c: Nếu hai cạnh và góc xen giữa của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia thì hai tam giác đó bằng nhau.",
          "Góc xen giữa là góc nằm giữa hai cạnh đã cho (ví dụ góc A xen giữa hai cạnh AB và AC).",
          "Trường hợp g.c.g: Nếu một cạnh và hai góc kề cạnh đó của tam giác này bằng một cạnh và hai góc kề cạnh đó của tam giác kia thì hai tam giác đó bằng nhau.",
          "Hai góc kề cạnh là hai góc có đỉnh là hai đầu mút của cạnh đó."
        ],
        formulas: [
          "AB=A'B', ∠A=∠A', AC=A'C' => ΔABC = ΔA'B'C' (c.g.c)",
          "∠B=∠B', BC=B'C', ∠C=∠C' => ΔABC = ΔA'B'C' (g.c.g)"
        ],
        methods: "Kiểm tra thật kĩ góc bằng nhau có thực sự xen giữa hai cạnh (c.g.c) hoặc hai góc có kề với cạnh bằng nhau (g.c.g) hay không trước khi kết luận.",
        example: {
          problem: "Cho đoạn thẳng AB có O là trung điểm. Đường thẳng xy qua O. Kẻ AH vuông góc với xy tại H, BK vuông góc với xy tại K. Chứng minh AH = BK.",
          solution: "Xét ΔAOH (vuông tại H) và ΔBOK (vuông tại K):\n- OA = OB (O là trung điểm AB)\n- ∠AOH = ∠BOK (hai góc đối đỉnh)\nSuy ra ΔAOH = ΔBOK (cạnh huyền - góc nhọn, hoặc g.c.g vì ∠OAH = ∠OBK). Do đó AH = BK (hai cạnh tương ứng)."
        },
        quiz: [
          {
            q: "Để chứng minh ΔABC = ΔDEF theo trường hợp cạnh - góc - cạnh (c.g.c) khi biết AB = DE và AC = DF, ta cần thêm điều kiện:",
            options: ["A. ∠A = ∠D (góc xen giữa)", "B. ∠B = ∠E", "C. ∠C = ∠F", "D. BC = EF"],
            a: 0,
            exp: "Góc A xen giữa AB, AC; góc D xen giữa DE, DF nên cần ∠A = ∠D."
          },
          {
            q: "Trường hợp góc - cạnh - góc (g.c.g) yêu cầu cạnh bằng nhau phải:",
            options: ["A. Là cạnh nối hai đỉnh của hai góc bằng nhau (cạnh kề hai góc)", "B. Là cạnh đối diện của góc lớn nhất", "C. Là cạnh bất kì", "D. Là cạnh ngắn nhất"],
            a: 0,
            exp: "Theo định nghĩa trường hợp g.c.g: cạnh bằng nhau phải là cạnh kề của hai góc bằng nhau."
          }
        ]
      },
      {
        id: "bai-15",
        num: 15,
        title: "Bài 15. Các trường hợp bằng nhau của tam giác vuông",
        summary: "Các trường hợp bằng nhau đặc thù của tam giác vuông: hai cạnh góc vuông, cạnh góc vuông - góc nhọn kề, cạnh huyền - góc nhọn, cạnh huyền - cạnh góc vuông.",
        coreConcepts: [
          "Hai tam giác vuông bằng nhau khi có một trong các điều kiện sau:",
          "1) Hai cạnh góc vuông bằng nhau (trường hợp c.g.c với góc xen giữa là 90°).",
          "2) Một cạnh góc vuông và góc nhọn kề bằng nhau (trường hợp g.c.g).",
          "3) Cạnh huyền và một góc nhọn bằng nhau (trường hợp cạnh huyền - góc nhọn).",
          "4) Cạnh huyền và một cạnh góc vuông bằng nhau (trường hợp cạnh huyền - cạnh góc vuông)."
        ],
        formulas: [
          "Cạnh huyền - góc nhọn: Huyền1 = Huyền2, Nhọn1 = Nhọn2 => Bằng nhau",
          "Cạnh huyền - cạnh góc vuông: Huyền1 = Huyền2, CGV1 = CGV2 => Bằng nhau",
          "Hai cạnh góc vuông: CGV_a = CGV_a', CGV_b = CGV_b' => Bằng nhau"
        ],
        methods: "Xác định rõ cạnh huyền (đối diện góc vuông) và các cạnh góc vuông; ưu tiên sử dụng trường hợp cạnh huyền - góc nhọn hoặc cạnh huyền - cạnh góc vuông để bài giải ngắn gọn.",
        example: {
          problem: "Cho tam giác ABC có AB = AC. Kẻ AH vuông góc với BC tại H. Chứng minh HB = HC.",
          solution: "Xét hai tam giác vuông ΔAHB và ΔAHC có:\n- Cạnh huyền: AB = AC (giả thiết)\n- Cạnh góc vuông chung: AH\nDo đó ΔAHB = ΔAHC (cạnh huyền - cạnh góc vuông). Suy ra HB = HC (hai cạnh tương ứng)."
        },
        quiz: [
          {
            q: "Trường hợp bằng nhau đặc biệt nào CHỈ áp dụng riêng cho tam giác vuông?",
            options: ["A. Cạnh huyền - cạnh góc vuông", "B. Cạnh - cạnh - cạnh", "C. Cạnh - góc - cạnh", "D. Góc - cạnh - góc"],
            a: 0,
            exp: "Trường hợp cạnh huyền - cạnh góc vuông và cạnh huyền - góc nhọn là các trường hợp đặc biệt riêng của tam giác vuông."
          },
          {
            q: "Hai tam giác vuông có cạnh huyền bằng nhau và một góc nhọn bằng nhau thì:",
            options: ["A. Bằng nhau theo trường hợp cạnh huyền - góc nhọn", "B. Chưa đủ điều kiện để bằng nhau", "C. Đồng dạng nhưng không bằng nhau", "D. Có diện tích khác nhau"],
            a: 0,
            exp: "Theo định lí: Nếu cạnh huyền và một góc nhọn của tam giác vuông này bằng cạnh huyền và một góc nhọn của tam giác vuông kia thì hai tam giác vuông đó bằng nhau."
          }
        ]
      },
      {
        id: "bai-16",
        num: 16,
        title: "Bài 16. Tam giác cân. Đường trung trực của đoạn thẳng",
        summary: "Định nghĩa và tính chất của tam giác cân, tam giác đều; định nghĩa và tính chất đường trung trực của đoạn thẳng.",
        coreConcepts: [
          "Tam giác cân là tam giác có hai cạnh bằng nhau. Hai góc ở đáy bằng nhau.",
          "Dấu hiệu nhận biết: Tam giác có hai cạnh bằng nhau HOẶC có hai góc bằng nhau là tam giác cân.",
          "Tam giác đều là tam giác có ba cạnh bằng nhau; cả ba góc đều bằng 60°.",
          "Đường trung trực của đoạn thẳng là đường thẳng vuông góc với đoạn thẳng tại trung điểm của nó.",
          "Tính chất đường trung trực: Điểm nằm trên đường trung trực của một đoạn thẳng thì cách đều hai mút của đoạn thẳng đó: MA = MB."
        ],
        formulas: [
          "ΔABC cân tại A <=> AB = AC <=> ∠B = ∠C",
          "Góc ở đáy tam giác cân: ∠B = ∠C = (180° − ∠A) / 2",
          "Tam giác đều: AB = BC = CA và ∠A = ∠B = ∠C = 60°",
          "M thuộc trung trực AB <=> MA = MB"
        ],
        methods: "Chứng minh tam giác cân bằng cách chỉ ra 2 cạnh bằng nhau hoặc 2 góc bằng nhau; chứng minh điểm thuộc trung trực bằng cách chứng minh cách đều 2 mút.",
        example: {
          problem: "Cho tam giác ABC cân tại A có ∠A = 40°. Tính số đo góc B và góc C.",
          solution: "Vì tam giác ABC cân tại A nên ∠B = ∠C. Áp dụng định lí tổng ba góc trong tam giác: ∠A + ∠B + ∠C = 180° => 40° + 2 · ∠B = 180° => 2 · ∠B = 140° => ∠B = ∠C = 70°."
        },
        quiz: [
          {
            q: "Một tam giác cân có góc ở đỉnh bằng 80°. Số đo mỗi góc ở đáy là:",
            options: ["A. 50°", "B. 40°", "C. 60°", "D. 70°"],
            a: 0,
            exp: "Góc ở đáy = (180° − 80°) / 2 = 100° / 2 = 50°."
          },
          {
            q: "Đường thẳng d là đường trung trực của đoạn thẳng AB nếu d:",
            options: ["A. Đi qua trung điểm của AB và vuông góc với AB", "B. Đi qua trung điểm của AB", "C. Vuông góc với AB", "D. Song song với AB"],
            a: 0,
            exp: "Định nghĩa đường trung trực: phải đồng thời thỏa mãn vuông góc tại trung điểm của đoạn thẳng."
          }
        ]
      }
    ]
  },

  // ==================== CHƯƠNG V ====================
  {
    chapterNum: "V",
    title: "Chương V. Thu thập và biểu diễn dữ liệu",
    desc: "Thu thập, phân loại dữ liệu định lượng và định tính; biểu đồ hình quạt tròn và biểu đồ đoạn thẳng mô tả xu hướng.",
    lessons: [
      {
        id: "bai-17",
        num: 17,
        title: "Bài 17. Thu thập và phân loại dữ liệu",
        summary: "Phương pháp thu thập dữ liệu; phân loại dữ liệu định tính và định lượng; tính hợp lý của dữ liệu thống kê.",
        coreConcepts: [
          "Dữ liệu được thu thập từ nhiều nguồn: quan sát, thí nghiệm, bảng hỏi, phỏng vấn, thu thập từ sách báo hoặc internet.",
          "Dữ liệu định tính (phi số): là các nhãn mác, tên gọi, phân loại (như xếp loại học lực: Giỏi, Khá, Đạt; sở thích; giới tính).",
          "Dữ liệu định lượng (dạng số): là các số liệu đo đếm được (như chiều cao, cân nặng, số lượng học sinh, điểm thi).",
          "Tính đại diện và hợp lý của dữ liệu: Dữ liệu không được sai sót, trùng lặp, phải nằm trong khoảng hợp lý (ví dụ: điểm thi từ 0 đến 10)."
        ],
        formulas: [
          "Dữ liệu định lượng: Số đếm, đại lượng đo lường (cm, kg, điểm số)",
          "Dữ liệu định tính: Tên gọi, phân loại, đánh giá nhận xét",
          "Tổng tần số = Tổng số đối tượng quan sát"
        ],
        methods: "Lập bảng kiểm đếm để thu thập dữ liệu; rà soát loại bỏ các dữ liệu vô lý hoặc số liệu âm không hợp lệ.",
        example: {
          problem: "Trong các dữ liệu sau: (1) Màu sắc yêu thích; (2) Chiều cao học sinh; (3) Điểm kiểm tra; (4) Giới tính. Dữ liệu nào là định tính, định lượng?",
          solution: "- Dữ liệu định tính: (1) Màu sắc yêu thích, (4) Giới tính (vì không đo bằng số).\n- Dữ liệu định lượng: (2) Chiều cao học sinh, (3) Điểm kiểm tra (vì là các con số cụ thể)."
        },
        quiz: [
          {
            q: "Dãy dữ liệu nào sau đây là dữ liệu ĐỊNH LƯỢNG (dạng số)?",
            options: ["A. Chiều cao (cm) của 5 bạn: 150, 155, 160, 158, 162", "B. Tên các môn học: Toán, Văn, Anh", "C. Xếp loại hạnh kiểm: Tốt, Khá, Đạt", "D. Nơi sinh của học sinh: Hà Nội, Đà Nẵng, TP.HCM"],
            a: 0,
            exp: "Chiều cao đo bằng các con số cụ thể là dữ liệu định lượng."
          },
          {
            q: "Khi khảo sát độ tuổi học sinh lớp 7, số liệu nào sau đây là KHÔNG HỢP LÝ?",
            options: ["A. 130 tuổi", "B. 12 tuổi", "C. 13 tuổi", "D. 14 tuổi"],
            a: 0,
            exp: "Học sinh lớp 7 thường từ 12 đến 14 tuổi, số liệu 130 tuổi là hoàn toàn vô lý."
          }
        ]
      },
      {
        id: "bai-18",
        num: 18,
        title: "Bài 18. Biểu đồ hình quạt tròn",
        summary: "Ý nghĩa biểu đồ hình quạt tròn biểu diễn tỉ lệ phần trăm; cách tính góc ở tâm và đọc bảng số liệu.",
        coreConcepts: [
          "Biểu đồ hình quạt tròn dùng để so sánh các phần trong toàn bộ tổng thể.",
          "Cả hình tròn đại diện cho 100% (tổng thể) và tương ứng với góc ở tâm 360°.",
          "Công thức tính góc ở tâm tương ứng với tỉ lệ p%: góc α = (p / 100) · 360°.",
          "Công thức tính tỉ lệ phần trăm khi biết tần số m trong tổng số N: p% = (m / N) · 100%."
        ],
        formulas: [
          "Góc ở tâm: α = (m / N) · 360° = (p% / 100%) · 360°",
          "Tỉ lệ %: p% = (m / N) · 100%",
          "Số lượng nhóm: m = (p% / 100%) · N",
          "Tổng các tỉ lệ hình quạt: ∑ p% = 100%"
        ],
        methods: "Đọc tiêu đề, chú giải màu sắc; lấy tỉ lệ % nhân tổng số lượng để tính số lượng thực tế của từng nhóm.",
        example: {
          problem: "Một lớp có 40 học sinh. Biểu đồ quạt tròn cho biết có 25% học sinh xếp loại Tốt. Hỏi có bao nhiêu học sinh xếp loại Tốt và góc ở tâm tương ứng là bao nhiêu độ?",
          solution: "1) Số học sinh xếp loại Tốt là: 40 · 25% = 40 · 25/100 = 10 (học sinh).\n2) Góc ở tâm tương ứng trên biểu đồ hình quạt là: (25 / 100) · 360° = 90°."
        },
        quiz: [
          {
            q: "Một hình quạt tròn biểu diễn tỉ lệ 50% thì góc ở tâm của hình quạt đó là:",
            options: ["A. 180°", "B. 90°", "C. 360°", "D. 120°"],
            a: 0,
            exp: "50% tương ứng một nửa hình tròn: 360° · 50% = 180°."
          },
          {
            q: "Tổng các tỉ lệ phần trăm của tất cả các phần trong biểu đồ hình quạt tròn luôn bằng:",
            options: ["A. 100%", "B. 360%", "C. 50%", "D. 90%"],
            a: 0,
            exp: "Toàn bộ hình tròn biểu thị 100% của tổng thể."
          }
        ]
      },
      {
        id: "bai-19",
        num: 19,
        title: "Bài 19. Biểu đồ đoạn thẳng",
        summary: "Đặc điểm của biểu đồ đoạn thẳng; cách đọc xu hướng tăng, giảm của số liệu theo các mốc thời gian.",
        coreConcepts: [
          "Biểu đồ đoạn thẳng dùng để biểu diễn sự thay đổi của một đại lượng theo thời gian (xu thế tăng, giảm).",
          "Cấu tạo: Trục nằm ngang biểu diễn các mốc thời gian; trục thẳng đứng biểu diễn giá trị của đại lượng; các điểm được nối với nhau bằng các đoạn thẳng.",
          "Đoạn thẳng đi lên thể hiện xu hướng tăng; đoạn thẳng đi xuống thể hiện xu hướng giảm; đoạn thẳng nằm ngang thể hiện đại lượng không đổi.",
          "Mức độ tăng/giảm giữa hai thời điểm bằng hiệu số giá trị ở thời điểm sau trừ đi thời điểm trước."
        ],
        formulas: [
          "Mức tăng trưởng = Giá trị sau − Giá trị trước",
          "Tốc độ tăng = (Giá trị sau − Giá trị trước) / Khoảng thời gian"
        ],
        methods: "Xác định tọa độ điểm trên biểu đồ (chiếu xuống trục hoành tìm thời điểm, chiếu sang trục tung tìm giá trị); nhận xét xu thế phát triển qua các đoạn thẳng nối tiếp.",
        example: {
          problem: "Nhiệt độ đo được lúc 6h là 18°C và lúc 12h trưa là 28°C. Hãy nhận xét xu hướng nhiệt độ và tính mức tăng nhiệt độ trong khoảng thời gian này.",
          solution: "Đoạn thẳng nối điểm (6h; 18°C) đến (12h; 28°C) đi lên, thể hiện nhiệt độ có xu hướng tăng. Mức tăng nhiệt độ là: 28°C − 18°C = 10°C."
        },
        quiz: [
          {
            q: "Biểu đồ đoạn thẳng thích hợp nhất để biểu diễn dữ liệu nào sau đây?",
            options: ["A. Sự thay đổi nhiệt độ trong tuần theo các ngày", "B. Tỉ lệ cơ cấu các loại cây trồng", "C. Danh sách học sinh giỏi của lớp", "D. Sở thích đọc sách của học sinh"],
            a: 0,
            exp: "Biểu đồ đoạn thẳng tối ưu nhất để quan sát xu hướng biến đổi của đại lượng theo thời gian."
          },
          {
            q: "Trên biểu đồ đoạn thẳng, nếu đoạn thẳng nối giữa hai thời điểm đi xuống từ trái sang phải thì đại lượng đó:",
            options: ["A. Có xu hướng giảm", "B. Có xu hướng tăng", "C. Không thay đổi", "D. Bằng 0"],
            a: 0,
            exp: "Đoạn thẳng dốc xuống biểu thị giá trị thời điểm sau nhỏ hơn thời điểm trước (xu hướng giảm)."
          }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { chaptersPart1 };
}
