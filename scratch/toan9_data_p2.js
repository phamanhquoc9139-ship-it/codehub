// scratch/toan9_data_p2.js
// Dữ liệu Tập Hai: Chương VI, VII, VIII, IX, X (Bài 18 - 32 + Thực hành trải nghiệm + Bảng tra cứu + Quy trình giải)

module.exports = {
  chapters: [
    {
      id: "chuong-6",
      number: "VI",
      title: "Hàm Số y = ax² (a ≠ 0), Phương Trình Bậc Hai Một Ẩn",
      subtitle: "Bài 18 đến Bài 21 • Đồ thị Parabol, công thức nghiệm biệt thức Δ, định lí Viète và giải bài toán thực tế",
      badge: "Tập Hai • Đại số",
      color: "blue",
      lessons: [
        {
          id: "bai-18",
          number: "Bài 18",
          title: "Hàm số y = ax² (a ≠ 0)",
          tag: "Hàm số & Đồ thị Parabol",
          summary: "Tập xác định, tính đồng biến/nghịch biến, hình dạng đồ thị Parabol với đỉnh O(0; 0), trục đối xứng Oy, mở lên khi a > 0, mở xuống khi a < 0.",
          svgKey: "parabola_graph",
          sections: [
            {
              heading: "1. Tính chất hàm số y = ax² (a ≠ 0)",
              content: `
                <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <li>Xác định với mọi số thực $x \\in \\mathbb{R}$.</li>
                  <li><strong>Nếu $a > 0$:</strong> Hàm số nghịch biến khi $x < 0$, đồng biến khi $x > 0$. Đạt giá trị nhỏ nhất $y = 0$ tại $x = 0$.</li>
                  <li><strong>Nếu $a < 0$:</strong> Hàm số đồng biến khi $x < 0$, nghịch biến khi $x > 0$. Đạt giá trị lớn nhất $y = 0$ tại $x = 0$.</li>
                </ul>
              `
            },
            {
              heading: "2. Đồ thị hàm số y = ax² (Parabol)",
              content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-2 text-xs">
                  <div class="p-3 bg-blue-50 dark:bg-blue-950/60 rounded-xl border border-blue-200 dark:border-blue-800">
                    <div class="font-bold text-blue-700 dark:text-blue-300 mb-1">Trường hợp a > 0:</div>
                    <p>Parabol có bề lõm <strong>quay lên trên</strong>, nằm phía trên trục hoành (chỉ chạm tại gốc O). Gốc $O(0; 0)$ là điểm thấp nhất của đồ thị.</p>
                  </div>
                  <div class="p-3 bg-rose-50 dark:bg-rose-950/60 rounded-xl border border-rose-200 dark:border-rose-800">
                    <div class="font-bold text-rose-700 dark:text-rose-300 mb-1">Trường hợp a < 0:</div>
                    <p>Parabol có bề lõm <strong>quay xuống dưới</strong>, nằm phía dưới trục hoành (chỉ chạm tại gốc O). Gốc $O(0; 0)$ là điểm cao nhất của đồ thị.</p>
                  </div>
                </div>
                <p class="text-xs text-slate-500 italic">Trục đối xứng luôn là trục tung $Oy$. Nếu điểm $(x_0; y_0)$ thuộc Parabol thì điểm $(-x_0; y_0)$ cũng thuộc Parabol.</p>
              `
            }
          ],
          quiz: [
            {
              q: "Hàm số $y = -2x^2$ đồng biến trong khoảng nào?",
              options: ["x < 0", "x > 0", "Với mọi x ∈ ℝ", "Không đồng biến"],
              ans: 0,
              exp: "Với a = -2 < 0, hàm số đồng biến khi x < 0 và nghịch biến khi x > 0."
            },
            {
              q: "Điểm nào sau đây thuộc đồ thị hàm số $y = 3x^2$?",
              options: ["A(2; 12)", "B(-1; -3)", "C(1; 9)", "D(-2; 6)"],
              ans: 0,
              exp: "Thay x = 2 vào hàm số: y = 3*(2)² = 3*4 = 12. Vậy điểm A(2; 12) thuộc đồ thị."
            },
            {
              q: "Đồ thị của hàm số $y = ax^2$ đi qua điểm M(-2; 8). Hệ số a bằng:",
              options: ["2", "-2", "4", "0.5"],
              ans: 0,
              exp: "Thay tọa độ M(-2; 8) vào y = ax²: 8 = a*(-2)² ⇔ 8 = 4a ⇔ a = 2."
            },
            {
              q: "Đồ thị hàm số $y = \\frac{1}{2}x^2$ có trục đối xứng là:",
              options: ["Trục tung Oy", "Trục hoành Ox", "Đường thẳng y = x", "Gốc tọa độ O"],
              ans: 0,
              exp: "Đồ thị Parabol y = ax² luôn nhận trục tung Oy (đường thẳng x = 0) làm trục đối xứng."
            }
          ]
        },
        {
          id: "bai-19",
          number: "Bài 19",
          title: "Phương trình bậc hai một ẩn",
          tag: "Biệt thức Δ & Công thức nghiệm",
          summary: "Dạng tổng quát $ax^2 + bx + c = 0$ ($a \\neq 0$), biệt thức $\\Delta = b^2 - 4ac$, biệt thức thu gọn $\\Delta' = b'^2 - ac$ và điều kiện nghiệm.",
          sections: [
            {
              heading: "1. Công thức nghiệm tổng quát (Biệt thức Δ)",
              content: `
                <p class="mb-2">Cho phương trình $ax^2 + bx + c = 0$ ($a \\neq 0$). Biệt thức $$\\Delta = b^2 - 4ac$$:</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-center my-2">
                  <div class="p-2.5 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl border border-emerald-300 dark:border-emerald-700">
                    <div class="font-bold text-emerald-700 dark:text-emerald-300">$$\\Delta > 0$$</div>
                    <p class="mt-1">2 nghiệm phân biệt:</p>
                    <div class="text-slate-800 dark:text-slate-200">$$x_{1,2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$$</div>
                  </div>
                  <div class="p-2.5 bg-amber-50 dark:bg-amber-950/60 rounded-xl border border-amber-300 dark:border-amber-700">
                    <div class="font-bold text-amber-700 dark:text-amber-300">$$\\Delta = 0$$</div>
                    <p class="mt-1">Nghiệm kép:</p>
                    <div class="text-slate-800 dark:text-slate-200">$$x_1 = x_2 = -\\frac{b}{2a}$$</div>
                  </div>
                  <div class="p-2.5 bg-rose-50 dark:bg-rose-950/60 rounded-xl border border-rose-300 dark:border-rose-700">
                    <div class="font-bold text-rose-700 dark:text-rose-300">$$\\Delta < 0$$</div>
                    <p class="mt-2 font-semibold text-rose-600">Phương trình vô nghiệm</p>
                  </div>
                </div>
              `
            },
            {
              heading: "2. Công thức nghiệm thu gọn (Khi b = 2b' chẵn)",
              content: `
                <p class="text-xs text-slate-700 dark:text-slate-300">
                  Khi $b$ chẵn, đặt $b' = b/2$. Biệt thức thu gọn: $$\\Delta' = b'^2 - ac$$.
                  <br>&bull; $\\Delta' > 0$: 2 nghiệm phân biệt $$x_{1,2} = \\frac{-b' \\pm \\sqrt{\\Delta'}}{a}$$.
                  <br>&bull; $\\Delta' = 0$: nghiệm kép $$x = -\\frac{b'}{a}$$.
                  <br>&bull; $\\Delta' < 0$: vô nghiệm.
                </p>
              `
            }
          ],
          quiz: [
            {
              q: "Nghiệm của phương trình $x^2 - 5x + 6 = 0$ là:",
              options: ["x = 2; x = 3", "x = -2; x = -3", "x = 1; x = 6", "x = -1; x = -6"],
              ans: 0,
              exp: "Δ = (-5)² - 4*1*6 = 25 - 24 = 1 > 0. x1 = (5 + 1)/2 = 3; x2 = (5 - 1)/2 = 2."
            },
            {
              q: "Phương trình $2x^2 - 4x + 2 = 0$ có bao nhiêu nghiệm?",
              options: ["Có nghiệm kép x = 1", "Có 2 nghiệm phân biệt", "Vô nghiệm", "Có vô số nghiệm"],
              ans: 0,
              exp: "Chia 2 vế cho 2: x² - 2x + 1 = 0 ⇔ (x - 1)² = 0 ⇒ nghiệm kép x = 1."
            },
            {
              q: "Phương trình $x^2 + 4x + 5 = 0$ có đặc điểm gì?",
              options: ["Vô nghiệm", "Có 2 nghiệm dương", "Có 2 nghiệm âm", "Có nghiệm kép x = -2"],
              ans: 0,
              exp: "Δ' = 2² - 1*5 = 4 - 5 = -1 < 0. Vậy phương trình vô nghiệm trên tập số thực."
            },
            {
              q: "Cho phương trình $ax^2 + bx + c = 0$ ($a \\neq 0$). Nếu $ac < 0$ thì:",
              options: ["Phương trình luôn có 2 nghiệm phân biệt trái dấu", "Phương trình có nghiệm kép", "Phương trình có thể vô nghiệm", "Phương trình có 2 nghiệm cùng dấu"],
              ans: 0,
              exp: "Khi ac < 0 thì -4ac > 0, dẫn đến Δ = b² - 4ac ≥ -4ac > 0. Do đó phương trình luôn có 2 nghiệm phân biệt trái dấu."
            }
          ]
        },
        {
          id: "bai-20",
          number: "Bài 20",
          title: "Định lí Viète và ứng dụng",
          tag: "Tổng & Tích nghiệm",
          summary: "Hệ thức Viète $x_1 + x_2 = -\\frac{b}{a}$, $x_1 x_2 = \\frac{c}{a}$, định lí đảo tìm hai số khi biết tổng và tích, ứng dụng tính biểu thức đối xứng và nhẩm nghiệm.",
          sections: [
            {
              heading: "1. Định lí Viète thuận",
              content: `
                <p class="mb-2">Nếu phương trình $ax^2 + bx + c = 0$ ($a \\neq 0$) có hai nghiệm $x_1, x_2$ thì:</p>
                <div class="p-3 bg-blue-50 dark:bg-blue-950/60 rounded-xl border border-blue-200 dark:border-blue-800 text-center text-blue-900 dark:text-blue-200 text-sm font-bold my-2">
                  $$\\begin{cases} S = x_1 + x_2 = -\\frac{b}{a} \\\\ P = x_1 \\cdot x_2 = \\frac{c}{a} \\end{cases}$$
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs mt-2">
                  <div class="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <strong>Nhẩm nghiệm a + b + c = 0:</strong> Nghiệm là $x_1 = 1, x_2 = \\frac{c}{a}$.
                  </div>
                  <div class="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <strong>Nhẩm nghiệm a - b + c = 0:</strong> Nghiệm là $x_1 = -1, x_2 = -\\frac{c}{a}$.
                  </div>
                </div>
              `
            },
            {
              heading: "2. Định lí Viète đảo & Các hệ thức đối xứng",
              content: `
                <p class="text-xs text-slate-700 dark:text-slate-300">
                  Nếu hai số có tổng $u + v = S$ và tích $u \\cdot v = P$ với $S^2 - 4P \\ge 0$ thì $u, v$ là hai nghiệm của phương trình:
                  <br><div class="text-center font-bold text-indigo-600 dark:text-indigo-400 my-1">$$X^2 - SX + P = 0$$</div>
                  Biến đổi đối xứng thường gặp: $x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 = S^2 - 2P$.
                </p>
              `
            }
          ],
          quiz: [
            {
              q: "Tổng và tích hai nghiệm của phương trình $2x^2 - 7x + 3 = 0$ lần lượt là:",
              options: ["$S = \\frac{7}{2}, P = \\frac{3}{2}$", "$S = -\\frac{7}{2}, P = \\frac{3}{2}$", "$S = 7, P = 3$", "$S = \\frac{3}{2}, P = \\frac{7}{2}$"],
              ans: 0,
              exp: "S = -b/a = -(-7)/2 = 7/2; P = c/a = 3/2."
            },
            {
              q: "Nhẩm nghiệm phương trình $3x^2 - 5x + 2 = 0$:",
              options: ["x1 = 1; x2 = 2/3", "x1 = -1; x2 = -2/3", "x1 = 1; x2 = -2/3", "x1 = 2; x2 = 3"],
              ans: 0,
              exp: "Ta có a + b + c = 3 + (-5) + 2 = 0. Do đó nghiệm là x1 = 1 và x2 = c/a = 2/3."
            },
            {
              q: "Tìm hai số biết tổng của chúng là 9 và tích của chúng là 20:",
              options: ["4 và 5", "3 và 6", "2 và 10", "1 và 8"],
              ans: 0,
              exp: "Hai số là nghiệm phương trình X² - 9X + 20 = 0 ⇔ (X - 4)(X - 5) = 0 ⇒ 4 và 5."
            },
            {
              q: "Cho phương trình $x^2 - 4x + 1 = 0$ có 2 nghiệm x1, x2. Giá trị biểu thức $A = x_1^2 + x_2^2$ bằng:",
              options: ["14", "16", "18", "12"],
              ans: 0,
              exp: "S = 4, P = 1. Khi đó A = S² - 2P = 4² - 2*1 = 16 - 2 = 14."
            }
          ]
        },
        {
          id: "bai-21",
          number: "Bài 21",
          title: "Giải bài toán bằng cách lập phương trình",
          tag: "Phương trình bậc hai thực tế",
          summary: "Quy trình giải bài toán bằng cách lập phương trình bậc hai: mô hình hình học, chuyển động, năng suất và quan hệ tích số lượng.",
          sections: [
            {
              heading: "1. Các bước giải và phân loại mô hình",
              content: `
                <div class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <p>&bull; <strong>Bước 1:</strong> Chọn ẩn, đặt điều kiện thích hợp (chú ý đơn vị).</p>
                  <p>&bull; <strong>Bước 2:</strong> Biểu thị các đại lượng liên quan theo ẩn.</p>
                  <p>&bull; <strong>Bước 3:</strong> Lập phương trình bậc hai từ mối liên hệ giữa các đại lượng.</p>
                  <p>&bull; <strong>Bước 4:</strong> Giải phương trình bậc hai bằng biệt thức $\\Delta$ hoặc phân tích nhân tử.</p>
                  <p>&bull; <strong>Bước 5:</strong> Đối chiếu nghiệm với điều kiện thực tế (loại nghiệm âm nếu độ dài/thời gian) và kết luận.</p>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Một khu vườn hình chữ nhật có chiều dài hơn chiều rộng 4m và diện tích bằng 96m². Chiều rộng của khu vườn là:",
              options: ["8m", "12m", "6m", "10m"],
              ans: 0,
              exp: "Gọi chiều rộng là x (x > 0) thì chiều dài là x + 4. Ta có phương trình x(x + 4) = 96 ⇔ x² + 4x - 96 = 0 ⇔ (x - 8)(x + 12) = 0. Vì x > 0 nên x = 8m."
            },
            {
              q: "Tích của hai số tự nhiên liên tiếp bằng 156. Hai số đó là:",
              options: ["12 và 13", "11 và 12", "13 và 14", "10 và 11"],
              ans: 0,
              exp: "n(n + 1) = 156 ⇔ n² + n - 156 = 0 ⇔ (n - 12)(n + 13) = 0. Do n ∈ ℕ nên n = 12. Hai số là 12 và 13."
            },
            {
              q: "Một người đi xe đạp từ A đến B dài 30km với vận tốc x (km/h). Nếu tăng vận tốc thêm 3 km/h thì thời gian giảm 30 phút (0.5h). Phương trình là:",
              options: ["$\\frac{30}{x} - \\frac{30}{x+3} = 0.5$", "$\\frac{30}{x+3} - \\frac{30}{x} = 0.5$", "$\\frac{30}{x} + \\frac{30}{x+3} = 0.5$", "$30x - 30(x+3) = 0.5$"],
              ans: 0,
              exp: "Thời gian ban đầu là 30/x, thời gian sau khi tăng tốc là 30/(x+3). Chênh lệch thời gian: 30/x - 30/(x+3) = 0.5 giờ."
            },
            {
              q: "Tam giác vuông có độ dài hai cạnh góc vuông hơn kém nhau 2cm và cạnh huyền bằng 10cm. Độ dài cạnh góc vuông nhỏ hơn là:",
              options: ["6 cm", "8 cm", "4 cm", "5 cm"],
              ans: 0,
              exp: "Gọi cạnh nhỏ là x (x > 0), cạnh kia là x + 2. Theo Pythagore: x² + (x + 2)² = 10² ⇔ 2x² + 4x - 96 = 0 ⇔ x² + 2x - 48 = 0 ⇔ (x - 6)(x + 8) = 0 ⇒ x = 6cm."
            }
          ]
        }
      ]
    },
    {
      id: "chuong-7",
      number: "VII",
      title: "Tần Số và Tần Số Tương Đối",
      subtitle: "Bài 22 đến Bài 24 • Bảng tần số, biểu đồ cột/đoạn thẳng, tần số tương đối và dữ liệu ghép nhóm",
      badge: "Tập Hai • Thống kê",
      color: "emerald",
      lessons: [
        {
          id: "bai-22",
          number: "Bài 22",
          title: "Bảng tần số và biểu đồ tần số",
          tag: "Tần số & Biểu đồ",
          summary: "Tần số $m$ của một giá trị trong mẫu dữ liệu, tổng các tần số bằng cỡ mẫu $n$, cách lập bảng tần số và vẽ biểu đồ cột/đoạn thẳng.",
          svgKey: "freq_histogram",
          sections: [
            {
              heading: "1. Tần số và bảng tần số",
              content: `
                <p class="text-xs text-slate-700 dark:text-slate-300">
                  <strong>Tần số:</strong> Số lần xuất hiện của một giá trị trong mẫu số liệu được gọi là tần số của giá trị đó, thường ký hiệu là $m$ (hoặc $n_i$).
                  <br><strong>Tổng các tần số:</strong> Bằng đúng cỡ mẫu (tổng số đơn vị điều tra): $$m_1 + m_2 + \\dots + m_k = n$$.
                </p>
              `
            }
          ],
          quiz: [
            {
              q: "Điểm kiểm tra của 10 học sinh là: 7, 8, 8, 9, 8, 7, 10, 8, 6, 9. Tần số của điểm 8 là:",
              options: ["4", "3", "2", "8"],
              ans: 0,
              exp: "Điểm 8 xuất hiện 4 lần trong dãy số liệu, do đó tần số của điểm 8 là 4."
            },
            {
              q: "Trong một bảng tần số, tổng tất cả các tần số luôn luôn bằng:",
              options: ["Cỡ mẫu n (tổng số quan sát)", "1", "100", "Số lượng các giá trị khác nhau"],
              ans: 0,
              exp: "Tổng của tất cả các tần số luôn bằng cỡ mẫu n (tổng số cá thể được khảo sát)."
            },
            {
              q: "Biểu đồ cột tần số có trục hoành và trục tung lần lượt biểu diễn:",
              options: ["Trục hoành biểu diễn các giá trị, trục tung biểu diễn tần số", "Trục hoành biểu diễn tần số, trục tung biểu diễn giá trị", "Cả 2 trục đều biểu diễn tần số", "Trục hoành biểu diễn thời gian"],
              ans: 0,
              exp: "Trong biểu đồ cột tần số chuẩn, trục hoành thể hiện các giá trị số liệu và trục tung thể hiện tần số (số lần xuất hiện)."
            },
            {
              q: "Mốt của mẫu số liệu (Mode) là gì?",
              options: ["Giá trị có tần số lớn nhất", "Giá trị lớn nhất trong dãy", "Giá trị trung bình cộng", "Giá trị nằm chính giữa dãy"],
              ans: 0,
              exp: "Mốt của dấu hiệu (Mo) là giá trị có tần số xuất hiện lớn nhất trong bảng phân bố tần số."
            }
          ]
        },
        {
          id: "bai-23",
          number: "Bài 23",
          title: "Bảng tần số tương đối và biểu đồ tần số tương đối",
          tag: "Tỉ lệ phần trăm %",
          summary: "Công thức tần số tương đối $f_i = \\frac{m_i}{n} \\times 100\\%$, tổng các tần số tương đối luôn bằng 100% (hoặc 1), biểu đồ hình quạt tròn và cột tỉ lệ.",
          sections: [
            {
              heading: "1. Khái niệm tần số tương đối",
              content: `
                <div class="p-3 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl border border-emerald-200 dark:border-emerald-800 text-center text-xs font-bold my-2">
                  $$f_i = \\frac{m_i}{n} \\quad (\\text{hoặc } f_i = \\frac{m_i}{n} \\times 100\\%)$$
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-300">
                  Tổng tất cả các tần số tương đối luôn bằng $1$ (hay $100\\%$): $$f_1 + f_2 + \\dots + f_k = 100\\%$$.
                </p>
              `
            }
          ],
          quiz: [
            {
              q: "Khảo sát 50 học sinh, có 15 bạn thích môn Toán. Tần số tương đối của học sinh thích môn Toán là:",
              options: ["30%", "15%", "50%", "3%"],
              ans: 0,
              exp: "f = (15 / 50) * 100% = 30%."
            },
            {
              q: "Tổng các tần số tương đối trong bảng phân phối luôn bằng:",
              options: ["100% (hoặc 1)", "Cỡ mẫu n", "50%", "Vô cùng"],
              ans: 0,
              exp: "Vì tổng các tần số bằng cỡ mẫu n nên tổng các tỉ lệ tần số tương đối luôn bằng n/n = 1 (tức 100%)."
            },
            {
              q: "Một lớp có 40 học sinh, tần số tương đối của học sinh giỏi là 25%. Số học sinh giỏi của lớp đó là:",
              options: ["10 bạn", "8 bạn", "12 bạn", "15 bạn"],
              ans: 0,
              exp: "Số học sinh giỏi m = 40 * 25% = 40 * 0.25 = 10 bạn."
            },
            {
              q: "Biểu đồ nào thường dùng nhất để thể hiện trực quan tần số tương đối?",
              options: ["Biểu đồ hình quạt tròn (Pie chart)", "Biểu đồ phân tán", "Biểu đồ xương cá", "Biểu đồ Radar"],
              ans: 0,
              exp: "Biểu đồ hình quạt tròn chia 360° theo tỉ lệ phần trăm, rất trực quan để so sánh các tần số tương đối của từng nhóm."
            }
          ]
        },
        {
          id: "bai-24",
          number: "Bài 24",
          title: "Bảng tần số, tần số tương đối ghép nhóm và biểu đồ",
          tag: "Dữ liệu ghép nhóm",
          summary: "Nhóm số liệu $[a; b)$, giá trị đại diện $\\frac{a+b}{2}$, bảng ghép nhóm và biểu đồ đoạn thẳng ghép nhóm.",
          sections: [
            {
              heading: "1. Dữ liệu ghép nhóm & Giá trị đại diện",
              content: `
                <div class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <p>&bull; Khi mẫu số liệu lớn hoặc là biến liên tục (chiều cao, cân nặng, thời gian), người ta chia thành các khoảng nửa mở $[a_i; a_{i+1})$.</p>
                  <p>&bull; <strong>Giá trị đại diện</strong> của nhóm $[a_i; a_{i+1})$ là trung điểm của khoảng:</p>
                  <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded text-center font-bold">
                    $$x_i = \\frac{a_i + a_{i+1}}{2}$$
                  </div>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Giá trị đại diện của nhóm chiều cao [150; 160) cm là:",
              options: ["155 cm", "150 cm", "160 cm", "10 cm"],
              ans: 0,
              exp: "Giá trị đại diện là trung điểm của khoảng: (150 + 160)/2 = 155cm."
            },
            {
              q: "Khoảng cách nhóm (độ dài nhóm) của nhóm [20; 30) là:",
              options: ["10", "25", "50", "20"],
              ans: 0,
              exp: "Độ dài nhóm là hiệu hai đầu mút: 30 - 20 = 10."
            },
            {
              q: "Khi một học sinh có chiều cao đúng 160cm, giá trị này thuộc nhóm nào giữa [150; 160) và [160; 170)?",
              options: ["Thuộc nhóm [160; 170)", "Thuộc nhóm [150; 160)", "Thuộc cả hai nhóm", "Không thuộc nhóm nào"],
              ans: 0,
              exp: "Khoảng nửa mở [a; b) gồm các giá trị x thỏa mãn a ≤ x < b. Do đó giá trị 160 không thuộc [150; 160) mà thuộc [160; 170)."
            },
            {
              q: "Biểu đồ đoạn thẳng ghép nhóm sử dụng đại lượng nào làm hoành độ các điểm?",
              options: ["Giá trị đại diện của các nhóm", "Đầu mút bên trái nhóm", "Đầu mút bên phải nhóm", "Tần số của nhóm"],
              ans: 0,
              exp: "Để vẽ biểu đồ đoạn thẳng tần số ghép nhóm, ta lấy hoành độ là giá trị đại diện của nhóm và tung độ là tần số tương ứng."
            }
          ]
        }
      ]
    },
    {
      id: "chuong-8",
      number: "VIII",
      title: "Xác Suất của Biến Cố Trong Mô Hình Đơn Giản",
      subtitle: "Bài 25 và Bài 26 • Phép thử ngẫu nhiên, không gian mẫu Ω, mô hình đồng khả năng và biến cố đối",
      badge: "Tập Hai • Xác suất",
      color: "purple",
      lessons: [
        {
          id: "bai-25",
          number: "Bài 25",
          title: "Phép thử ngẫu nhiên và không gian mẫu",
          tag: "Không gian mẫu Ω",
          summary: "Định nghĩa phép thử ngẫu nhiên, không gian mẫu $\\Omega$, biến cố $A$, biến cố chắc chắn và biến cố không thể; kỹ thuật lập bảng/sơ đồ cây.",
          svgKey: "dice_probability",
          sections: [
            {
              heading: "1. Khái niệm cơ bản",
              content: `
                <div class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <p>&bull; <strong>Phép thử ngẫu nhiên:</strong> Hành động mà kết quả không thể biết trước, nhưng có thể liệt kê tất cả các kết quả có thể xảy ra.</p>
                  <p>&bull; <strong>Không gian mẫu $\\Omega$:</strong> Tập hợp tất cả các kết quả có thể của phép thử.</p>
                  <p>&bull; <strong>Biến cố:</strong> Tập con $A \\subseteq \\Omega$. Biến cố chắc chắn là $\\Omega$, biến cố không thể là tập rỗng $\\emptyset$.</p>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Gieo một con xúc xắc cân đối và đồng chất 6 mặt. Số phần tử của không gian mẫu |Ω| là:",
              options: ["6", "12", "36", "1"],
              ans: 0,
              exp: "Các kết quả có thể xảy ra là các số chấm từ 1 đến 6. Do đó |Ω| = 6."
            },
            {
              q: "Gieo đồng thời hai con xúc xắc 6 mặt cân đối. Số kết quả có thể của không gian mẫu là:",
              options: ["36", "12", "6", "18"],
              ans: 0,
              exp: "Con xúc xắc 1 có 6 kết quả, con 2 có 6 kết quả. Theo quy tắc nhân, số kết quả là 6 * 6 = 36 cặp có thứ tự."
            },
            {
              q: "Trong phép thử gieo 1 đồng xu cân đối 2 lần, không gian mẫu Ω gồm các kết quả:",
              options: ["{SS, SN, NS, NN}", "{S, N}", "{SS, NN}", "{SN, NS}"],
              ans: 0,
              exp: "Mỗi lần gieo có 2 khả năng (S hoặc N). Sau 2 lần gieo có 2² = 4 kết quả: SS, SN, NS, NN."
            },
            {
              q: "Biến cố 'Tổng số chấm khi gieo một con xúc xắc bằng 7' là:",
              options: ["Biến cố không thể", "Biến cố chắc chắn", "Biến cố ngẫu nhiên", "Biến cố đối"],
              ans: 0,
              exp: "Số chấm của một con xúc xắc chỉ từ 1 đến 6, không thể bằng 7. Đây là biến cố không thể (tập rỗng)."
            }
          ]
        },
        {
          id: "bai-26",
          number: "Bài 26",
          title: "Xác suất của biến cố trong một số mô hình xác suất đơn giản",
          tag: "Công thức cổ điển $P(A) = \\frac{|A|}{|\\Omega|}$",
          summary: "Công thức xác suất cổ điển khi các kết quả đồng khả năng, tính chất $0 \\le P(A) \\le 1$ và xác suất biến cố đối $P(\\overline{A}) = 1 - P(A)$.",
          sections: [
            {
              heading: "1. Công thức tính xác suất cổ điển",
              content: `
                <div class="p-3 bg-purple-50 dark:bg-purple-950/60 rounded-xl border border-purple-200 dark:border-purple-800 text-center text-xs font-bold my-2">
                  $$P(A) = \\frac{|A|}{|\\Omega|} = \\frac{\\text{Số kết quả thuận lợi cho } A}{\\text{Tổng số kết quả trong không gian mẫu } \\Omega}$$
                </div>
                <div class="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                  <p>&bull; $0 \\le P(A) \\le 1$. $P(\\emptyset) = 0$ và $P(\\Omega) = 1$.</p>
                  <p>&bull; <strong>Biến cố đối:</strong> Xác suất của biến cố đối $\\overline{A}$ là $$P(\\overline{A}) = 1 - P(A)$$.</p>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Gieo một con xúc xắc 6 mặt cân đối. Xác suất để xuất hiện mặt có số chấm là số nguyên tố bằng:",
              options: ["$\\frac{1}{2}$", "$\\frac{1}{3}$", "$\\frac{2}{3}$", "$\\frac{1}{6}$"],
              ans: 0,
              exp: "Các số nguyên tố từ 1 đến 6 là {2; 3; 5} (3 kết quả thuận lợi). Xác suất P = 3/6 = 1/2."
            },
            {
              q: "Một hộp có 3 quả bóng đỏ và 7 quả bóng xanh cùng kích thước. Rút ngẫu nhiên 1 quả bóng. Xác suất rút được bóng đỏ là:",
              options: ["0.3", "0.7", "0.5", "0.4"],
              ans: 0,
              exp: "Tổng số bóng là 3 + 7 = 10. Số bóng đỏ là 3. Xác suất P = 3/10 = 0.3."
            },
            {
              q: "Nếu xác suất bắn trúng bia của một xạ thủ là 0.85 thì xác suất bắn trượt bia là:",
              options: ["0.15", "0.85", "0.25", "0.05"],
              ans: 0,
              exp: "Bắn trượt là biến cố đối của bắn trúng: P = 1 - 0.85 = 0.15."
            },
            {
              q: "Gieo đồng thời hai con xúc xắc 6 mặt. Xác suất để tổng số chấm trên hai con xúc xắc bằng 7 là:",
              options: ["$\\frac{1}{6}$", "$\\frac{1}{12}$", "$\\frac{7}{36}$", "$\\frac{5}{36}$"],
              ans: 0,
              exp: "Các cặp có tổng bằng 7: (1;6), (2;5), (3;4), (4;3), (5;2), (6;1) (gồm 6 kết quả). Tổng số kết quả là 36. P = 6/36 = 1/6."
            }
          ]
        }
      ]
    },
    {
      id: "chuong-9",
      number: "IX",
      title: "Đường Tròn Ngoại Tiếp, Nội Tiếp, Tứ Giác Nội Tiếp, Đa Giác Đều",
      subtitle: "Bài 27 đến Bài 30 • Góc nội tiếp, đường tròn nội/ngoại tiếp tam giác, tứ giác nội tiếp và đa giác đều",
      badge: "Tập Hai • Hình học",
      color: "amber",
      lessons: [
        {
          id: "bai-27",
          number: "Bài 27",
          title: "Góc nội tiếp",
          tag: "Định lí góc nội tiếp",
          summary: "Góc nội tiếp, định lí số đo bằng nửa số đo cung bị chắn $\\angle ACB = \\frac{1}{2} \\text{sđ}\\overparen{AB}$, các góc nội tiếp cùng chắn một cung thì bằng nhau, góc chắn nửa đường tròn là góc vuông.",
          svgKey: "inscribed_angle",
          sections: [
            {
              heading: "1. Định nghĩa và định lí góc nội tiếp",
              content: `
                <div class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <p>&bull; <strong>Góc nội tiếp:</strong> Đỉnh nằm trên đường tròn và hai cạnh chứa hai dây cung của đường tròn đó.</p>
                  <p>&bull; <strong>Định lí:</strong> Trong một đường tròn, số đo của góc nội tiếp bằng <strong>nửa số đo của cung bị chắn</strong> (bằng nửa góc ở tâm cùng chắn cung đó):</p>
                  <div class="p-2 bg-amber-50 dark:bg-amber-950/60 rounded text-center font-bold text-amber-800 dark:text-amber-300">
                    $$\\widehat{BAC} = \\frac{1}{2} \\text{sđ}\\overparen{BC} = \\frac{1}{2} \\widehat{BOC}$$
                  </div>
                </div>
              `
            },
            {
              heading: "2. Các hệ quả then chốt",
              content: `
                <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700 dark:text-slate-300">
                  <li>Các góc nội tiếp cùng chắn một cung (hoặc chắn các cung bằng nhau) thì bằng nhau.</li>
                  <li><strong>Góc nội tiếp chắn nửa đường tròn là GÓC VUÔNG ($90^\\circ$).</strong></li>
                  <li>Góc nội tiếp có số đo $\\le 90^\\circ$ bằng nửa góc ở tâm cùng chắn một cung.</li>
                </ul>
              `
            }
          ],
          quiz: [
            {
              q: "Góc nội tiếp chắn cung 80° có số đo là:",
              options: ["40°", "80°", "160°", "20°"],
              ans: 0,
              exp: "Số đo góc nội tiếp bằng nửa số đo cung bị chắn: 80° / 2 = 40°."
            },
            {
              q: "Tam giác ABC nội tiếp đường tròn đường kính BC = 10cm. Góc A của tam giác ABC bằng:",
              options: ["90°", "60°", "45°", "120°"],
              ans: 0,
              exp: "Góc A là góc nội tiếp chắn nửa đường tròn đường kính BC, do đó góc A = 90°."
            },
            {
              q: "Trong một đường tròn, hai góc nội tiếp cùng chắn một cung thì:",
              options: ["Bằng nhau", "Bù nhau", "Phụ nhau", "Có tổng bằng 90°"],
              ans: 0,
              exp: "Theo hệ quả của định lí góc nội tiếp: trong một đường tròn, các góc nội tiếp cùng chắn một cung thì bằng nhau."
            },
            {
              q: "Góc ở tâm chắn cung AB có số đo 100°. Góc nội tiếp cùng chắn cung AB có số đo là:",
              options: ["50°", "100°", "200°", "25°"],
              ans: 0,
              exp: "Số đo góc nội tiếp bằng nửa số đo góc ở tâm cùng chắn cung đó: 100° / 2 = 50°."
            }
          ]
        },
        {
          id: "bai-28",
          number: "Bài 28",
          title: "Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác",
          tag: "Tâm trung trực & Tâm phân giác",
          summary: "Đường tròn ngoại tiếp (tâm là giao điểm 3 đường trung trực, đi qua 3 đỉnh), đường tròn nội tiếp (tâm là giao điểm 3 đường phân giác trong, tiếp xúc 3 cạnh).",
          sections: [
            {
              heading: "1. Đường tròn ngoại tiếp tam giác",
              content: `
                <p class="text-xs text-slate-700 dark:text-slate-300">
                  &bull; Đi qua ba đỉnh của tam giác.
                  <br>&bull; <strong>Tâm:</strong> Giao điểm của 3 đường trung trực của tam giác.
                  <br>&bull; <strong>Tam giác vuông:</strong> Tâm là trung điểm cạnh huyền, bán kính $$R = \\frac{\\text{cạnh huyền}}{2}$$.
                  <br>&bull; <strong>Tam giác đều cạnh a:</strong> Bán kính $$R = \\frac{a\\sqrt{3}}{3}$$.
                </p>
              `
            },
            {
              heading: "2. Đường tròn nội tiếp tam giác",
              content: `
                <p class="text-xs text-slate-700 dark:text-slate-300">
                  &bull; Tiếp xúc với cả ba cạnh của tam giác.
                  <br>&bull; <strong>Tâm:</strong> Giao điểm của 3 đường phân giác trong.
                  <br>&bull; Bán kính $$r = \\frac{S}{p}$$ (với $S$ là diện tích, $p = \\frac{a+b+c}{2}$ là nửa chu vi).
                  <br>&bull; <strong>Tam giác đều cạnh a:</strong> Bán kính $$r = \\frac{a\\sqrt{3}}{6} = \\frac{R}{2}$$.
                </p>
              `
            }
          ],
          quiz: [
            {
              q: "Tâm đường tròn ngoại tiếp tam giác là giao điểm của:",
              options: ["Ba đường trung trực", "Ba đường phân giác", "Ba đường cao", "Ba đường trung tuyến"],
              ans: 0,
              exp: "Điểm cách đều 3 đỉnh tam giác là giao điểm của ba đường trung trực của ba cạnh."
            },
            {
              q: "Tâm đường tròn nội tiếp tam giác là giao điểm của:",
              options: ["Ba đường phân giác trong", "Ba đường trung trực", "Ba đường cao", "Ba đường trung tuyến"],
              ans: 0,
              exp: "Điểm cách đều 3 cạnh tam giác là giao điểm của ba đường phân giác trong của tam giác."
            },
            {
              q: "Tam giác đều cạnh a có bán kính đường tròn ngoại tiếp R bằng:",
              options: ["$\\frac{a\\sqrt{3}}{3}$", "$\\frac{a\\sqrt{3}}{6}$", "$\\frac{a\\sqrt{3}}{2}$", "$a\\sqrt{3}$"],
              ans: 0,
              exp: "Chiều cao tam giác đều là h = a√3/2. Trọng tâm đồng thời là tâm ngoại tiếp cách đỉnh 2/3 chiều cao: R = (2/3) * (a√3/2) = a√3/3."
            },
            {
              q: "Cho tam giác vuông có hai cạnh góc vuông là 6cm và 8cm. Bán kính đường tròn ngoại tiếp là:",
              options: ["5 cm", "10 cm", "4 cm", "3 cm"],
              ans: 0,
              exp: "Cạnh huyền bằng √(6² + 8²) = 10cm. Bán kính ngoại tiếp bằng nửa cạnh huyền: R = 10 / 2 = 5cm."
            }
          ]
        },
        {
          id: "bai-29",
          number: "Bài 29",
          title: "Tứ giác nội tiếp",
          tag: "Định lí & 4 Dấu hiệu nhận biết",
          summary: "Tứ giác nội tiếp đường tròn, định lí tổng hai góc đối bằng 180°, góc ngoài bằng góc trong đối diện và 4 phương pháp chứng minh tứ giác nội tiếp kinh điển.",
          svgKey: "inscribed_quadrilateral",
          sections: [
            {
              heading: "1. Định nghĩa và tính chất",
              content: `
                <div class="p-3 bg-amber-50 dark:bg-amber-950/60 rounded-xl border border-amber-200 dark:border-amber-800 text-xs space-y-1.5">
                  <p><strong>Định lí thuận:</strong> Trong một tứ giác nội tiếp, <strong>tổng hai góc đối diện bằng $180^\\circ$</strong>: $$\\widehat{A} + \\widehat{C} = 180^\\circ \\quad \\text{và} \\quad \\widehat{B} + \\widehat{D} = 180^\\circ$$</p>
                  <p><strong>Góc ngoài:</strong> Góc ngoài tại một đỉnh bằng góc trong của đỉnh đối diện.</p>
                </div>
              `
            },
            {
              heading: "2. 4 Dấu hiệu nhận biết tứ giác nội tiếp (Vũ khí thi vào 10)",
              content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <div class="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg border">
                    <strong class="text-blue-600">Dấu hiệu 1:</strong> Tổng hai góc đối diện bằng $180^\\circ$.
                  </div>
                  <div class="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg border">
                    <strong class="text-blue-600">Dấu hiệu 2:</strong> Góc ngoài tại một đỉnh bằng góc trong đối diện.
                  </div>
                  <div class="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg border">
                    <strong class="text-blue-600">Dấu hiệu 3:</strong> Hai đỉnh kề nhau cùng nhìn cạnh chứa hai đỉnh còn lại dưới một góc bằng nhau.
                  </div>
                  <div class="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg border">
                    <strong class="text-blue-600">Dấu hiệu 4:</strong> Bốn đỉnh cùng cách đều một điểm $O$ cố định (bằng bán kính $R$).
                  </div>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Cho tứ giác ABCD nội tiếp đường tròn có góc A = 80°. Số đo của góc C đối diện bằng:",
              options: ["100°", "80°", "120°", "90°"],
              ans: 0,
              exp: "Trong tứ giác nội tiếp, tổng hai góc đối bằng 180°: ∠C = 180° - ∠A = 180° - 80° = 100°."
            },
            {
              q: "Hình nào sau đây KHÔNG nội tiếp được một đường tròn?",
              options: ["Hình thoi (không phải hình vuông)", "Hình chữ nhật", "Hình vuông", "Hình thang cân"],
              ans: 0,
              exp: "Hình thoi có hai góc đối bằng nhau nhưng tổng hai góc đối nói chung khác 180° (trừ khi là hình vuông). Do đó hình thoi nói chung không nội tiếp được đường tròn."
            },
            {
              q: "Tứ giác ABCD có ∠ABC = 90° và ∠ADC = 90°. Tâm đường tròn ngoại tiếp tứ giác ABCD là:",
              options: ["Trung điểm của đoạn thẳng AC", "Trung điểm của đoạn thẳng BD", "Giao điểm của AC và BD", "Điểm B"],
              ans: 0,
              exp: "Cả hai đỉnh B và D cùng nhìn đoạn thẳng AC dưới góc vuông 90°, do đó 4 điểm A, B, C, D cùng thuộc đường tròn đường kính AC có tâm là trung điểm AC."
            },
            {
              q: "Nếu góc ngoài tại đỉnh A của tứ giác nội tiếp ABCD bằng 70° thì góc trong tại đỉnh C đối diện bằng:",
              options: ["70°", "110°", "140°", "35°"],
              ans: 0,
              exp: "Góc ngoài tại một đỉnh bằng góc trong tại đỉnh đối diện, do đó góc C = 70°."
            }
          ]
        },
        {
          id: "bai-30",
          number: "Bài 30",
          title: "Đa giác đều",
          tag: "Công thức đa giác đều n cạnh",
          summary: "Khái niệm đa giác đều, góc ở tâm $\\frac{360^\\circ}{n}$, tổng các góc trong $(n-2) \\cdot 180^\\circ$, mỗi góc trong $\\frac{(n-2) \\cdot 180^\\circ}{n}$ và đường tròn ngoại/nội tiếp đa giác đều.",
          sections: [
            {
              heading: "1. Tính chất đa giác đều n cạnh",
              content: `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs my-2 text-center">
                  <div class="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border">
                    <div class="text-[11px] text-slate-500 font-sans">Tổng các góc trong:</div>
                    $$(n - 2) \\cdot 180^\\circ$$
                  </div>
                  <div class="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border">
                    <div class="text-[11px] text-slate-500 font-sans">Mỗi góc trong:</div>
                    $$\\frac{(n - 2) \\cdot 180^\\circ}{n}$$
                  </div>
                  <div class="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border">
                    <div class="text-[11px] text-slate-500 font-sans">Góc ở tâm / Góc ngoài:</div>
                    $$\\frac{360^\\circ}{n}$$
                  </div>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Mỗi góc trong của một lục giác đều (n = 6) có số đo bằng:",
              options: ["120°", "108°", "60°", "135°"],
              ans: 0,
              exp: "Số đo mỗi góc trong = (6 - 2) * 180° / 6 = 4 * 30° = 120°."
            },
            {
              q: "Mỗi góc trong của một ngũ giác đều (n = 5) có số đo bằng:",
              options: ["108°", "120°", "72°", "90°"],
              ans: 0,
              exp: "Số đo mỗi góc trong = (5 - 2) * 180° / 5 = 540° / 5 = 108°."
            },
            {
              q: "Góc ở tâm chắn một cạnh của bát giác đều (n = 8) bằng:",
              options: ["45°", "60°", "90°", "30°"],
              ans: 0,
              exp: "Góc ở tâm = 360° / 8 = 45°."
            },
            {
              q: "Đa giác đều nào có thể lát kín mặt phẳng mà không để lại khe hở?",
              options: ["Tam giác đều, hình vuông và lục giác đều", "Ngũ giác đều và bát giác đều", "Chỉ có hình vuông", "Mọi đa giác đều"],
              ans: 0,
              exp: "Chỉ các đa giác đều có góc trong là ước số của 360° mới lát kín mặt phẳng gồm: tam giác đều (60°*6=360°), hình vuông (90°*4=360°) và lục giác đều (120°*3=360°)."
            }
          ]
        }
      ]
    },
    {
      id: "chuong-10",
      number: "X",
      title: "Một Số Hình Khối Trong Thực Tiễn",
      subtitle: "Bài 31 và Bài 32 • Hình trụ, hình nón, hình cầu: diện tích xung quanh, toàn phần và thể tích",
      badge: "Tập Hai • Hình khối không gian",
      color: "rose",
      lessons: [
        {
          id: "bai-31",
          number: "Bài 31",
          title: "Hình trụ và hình nón",
          tag: "Diện tích & Thể tích",
          summary: "Công thức diện tích xung quanh, toàn phần và thể tích của hình trụ ($S_{xq} = 2\\pi rh, V = \\pi r^2 h$) và hình nón ($S_{xq} = \\pi r \\ell, V = \\frac{1}{3}\\pi r^2 h, \\ell^2 = r^2 + h^2$).",
          svgKey: "cylinder_cone",
          sections: [
            {
              heading: "1. Hình trụ (Bán kính đáy r, chiều cao h)",
              content: `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs my-2 text-center">
                  <div class="p-2.5 bg-rose-50 dark:bg-rose-950/60 rounded-xl border border-rose-200">
                    <div class="font-sans text-rose-700 font-bold">Diện tích xung quanh:</div>
                    $$S_{xq} = 2\\pi r h$$
                  </div>
                  <div class="p-2.5 bg-rose-50 dark:bg-rose-950/60 rounded-xl border border-rose-200">
                    <div class="font-sans text-rose-700 font-bold">Diện tích toàn phần:</div>
                    $$S_{tp} = 2\\pi r h + 2\\pi r^2$$
                  </div>
                  <div class="p-2.5 bg-rose-50 dark:bg-rose-950/60 rounded-xl border border-rose-200">
                    <div class="font-sans text-rose-700 font-bold">Thể tích hình trụ:</div>
                    $$V = \\pi r^2 h$$
                  </div>
                </div>
              `
            },
            {
              heading: "2. Hình nón (Bán kính đáy r, chiều cao h, đường sinh ℓ)",
              content: `
                <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border text-xs space-y-1.5">
                  <p>&bull; <strong>Liên hệ đường sinh:</strong> $$\\ell^2 = r^2 + h^2 \\iff \\ell = \\sqrt{r^2 + h^2}$$</p>
                  <p>&bull; <strong>Diện tích xung quanh:</strong> $$S_{xq} = \\pi r \\ell$$</p>
                  <p>&bull; <strong>Diện tích toàn phần:</strong> $$S_{tp} = \\pi r \\ell + \\pi r^2 = \\pi r(\\ell + r)$$</p>
                  <p>&bull; <strong>Thể tích hình nón:</strong> $$V = \\frac{1}{3}\\pi r^2 h$$ (bằng 1/3 thể tích hình trụ cùng đáy và chiều cao)</p>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Một hình trụ có bán kính đáy r = 3cm và chiều cao h = 5cm. Thể tích hình trụ là:",
              options: ["$45\\pi$ cm³", "$15\\pi$ cm³", "$30\\pi$ cm³", "$90\\pi$ cm³"],
              ans: 0,
              exp: "V = π · r² · h = π · 3² · 5 = 45π cm³."
            },
            {
              q: "Một hình nón có bán kính đáy r = 3cm, chiều cao h = 4cm. Độ dài đường sinh ℓ là:",
              options: ["5 cm", "7 cm", "25 cm", "$\\\\sqrt{7}$ cm"],
              ans: 0,
              exp: "ℓ² = r² + h² = 3² + 4² = 25 ⇒ ℓ = 5cm."
            },
            {
              q: "Một hình nón có bán kính đáy r = 3cm và đường sinh ℓ = 5cm. Diện tích xung quanh bằng:",
              options: ["$15\\pi$ cm²", "$30\\pi$ cm²", "$45\\pi$ cm²", "$12\\pi$ cm²"],
              ans: 0,
              exp: "S_xq = π · r · ℓ = π · 3 · 5 = 15π cm²."
            },
            {
              q: "Khi quay một tam giác vuông quanh một cạnh góc vuông, hình sinh ra là:",
              options: ["Hình nón", "Hình trụ", "Hình cầu", "Hình nón cụt"],
              ans: 0,
              exp: "Quay tam giác vuông quanh một cạnh góc vuông tạo nên một hình nón; cạnh góc vuông kia tạo thành đáy, cạnh huyền tạo thành mặt xung quanh (đường sinh)."
            }
          ]
        },
        {
          id: "bai-32",
          number: "Bài 32",
          title: "Hình cầu",
          tag: "Diện tích mặt cầu & Thể tích",
          summary: "Công thức diện tích mặt cầu $S = 4\\pi R^2 = \\pi d^2$ và thể tích khối cầu $V = \\frac{4}{3}\\pi R^3 = \\frac{1}{6}\\pi d^3$.",
          svgKey: "sphere_diagram",
          sections: [
            {
              heading: "1. Công thức diện tích mặt cầu và thể tích hình cầu",
              content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs my-2 text-center">
                  <div class="p-3 bg-rose-50 dark:bg-rose-950/60 rounded-xl border border-rose-200">
                    <div class="font-sans text-rose-700 font-bold text-sm mb-1">Diện tích mặt cầu:</div>
                    $$S = 4\\pi R^2 = \\pi d^2$$
                  </div>
                  <div class="p-3 bg-rose-50 dark:bg-rose-950/60 rounded-xl border border-rose-200">
                    <div class="font-sans text-rose-700 font-bold text-sm mb-1">Thể tích hình cầu:</div>
                    $$V = \\frac{4}{3}\\pi R^3 = \\frac{1}{6}\\pi d^3$$
                  </div>
                </div>
                <div class="p-2.5 bg-amber-50 dark:bg-amber-950/40 rounded-lg text-xs text-amber-900 dark:text-amber-300">
                  <strong>Chú ý cạm bẫy:</strong> Luôn đọc kỹ đề cho đường kính $d$ hay bán kính $R$. Nếu cho đường kính phải chia 2 trước khi áp dụng công thức ($R = d/2$).
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Diện tích mặt cầu có bán kính R = 3cm là:",
              options: ["$36\\pi$ cm²", "$12\\pi$ cm²", "$9\\pi$ cm²", "$18\\pi$ cm²"],
              ans: 0,
              exp: "S = 4πR² = 4 · π · 3² = 36π cm²."
            },
            {
              q: "Thể tích của khối cầu có bán kính R = 3cm bằng:",
              options: ["$36\\pi$ cm³", "$108\\pi$ cm³", "$27\\pi$ cm³", "$12\\pi$ cm³"],
              ans: 0,
              exp: "V = (4/3)πR³ = (4/3) · π · 3³ = (4/3) · 27π = 36π cm³."
            },
            {
              q: "Nếu bán kính hình cầu tăng lên 2 lần thì thể tích khối cầu tăng lên:",
              options: ["8 lần", "4 lần", "2 lần", "16 lần"],
              ans: 0,
              exp: "V tỉ lệ với R³. Khi R tăng 2 lần thì V tăng 2³ = 8 lần."
            },
            {
              q: "Mặt phẳng cắt một mặt cầu tâm O bán kính R qua tâm tạo thành thiết diện là:",
              options: ["Hình tròn lớn có bán kính R", "Đoạn thẳng", "Hình elip", "Hình tròn nhỏ có bán kính r < R"],
              ans: 0,
              exp: "Mặt phẳng đi qua tâm mặt cầu luôn cắt mặt cầu theo đường tròn lớn có bán kính bằng bán kính mặt cầu R."
            }
          ]
        }
      ]
    }
  ],

  // Phần Thực hành - Trải nghiệm
  practicalProjects: [
    {
      id: "thuc-hanh-1",
      title: "Pha chế dung dịch theo nồng độ phần trăm C%",
      badge: "Toán & Hoá học",
      content: `
        <p class="mb-2">Ứng dụng công thức nồng độ phần trăm:</p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/60 rounded-xl border border-blue-200 text-center text-xs font-bold mb-2">
          $$C\\% = \\frac{m_{ct}}{m_{dd}} \\times 100\\% \\implies m_{ct} = \\frac{C\\% \\cdot m_{dd}}{100}$$
        </div>
        <p class="text-xs text-slate-700 dark:text-slate-300">
          Khối lượng dung dịch $m_{dd} = m_{ct} + m_{dung môi}$. Khi pha thêm nước (dung môi) thì khối lượng chất tan $m_{ct}$ được bảo toàn.
        </p>
      `
    },
    {
      id: "thuc-hanh-2",
      title: "Tính chiều cao và khoảng cách thực tế bằng giác kế",
      badge: "Hình học thực địa",
      content: `
        <p class="text-xs text-slate-700 dark:text-slate-300">
          Sử dụng giác kế đo góc nâng $\\alpha$, đo khoảng cách nằm ngang $d$ từ vị trí đứng đến chân tháp.
          <br>Chiều cao ngọn tháp: $$H = h_{giác kế} + d \\cdot \\tan\\alpha$$
        </p>
      `
    },
    {
      id: "thuc-hanh-3",
      title: "Ứng dụng GeoGebra, Excel & Mô hình di truyền Men-đen",
      badge: "Công nghệ thông tin",
      content: `
        <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700 dark:text-slate-300">
          <li><strong>GeoGebra:</strong> Vẽ đồ thị Parabol $y = ax^2$, đường tròn, tìm giao điểm và nghiệm hệ phương trình trực quan.</li>
          <li><strong>Excel:</strong> Lập bảng tần số, vẽ biểu đồ cột/tròn và tính tự động các giá trị đại diện thống kê.</li>
          <li><strong>Mô hình Men-đen:</strong> Sơ đồ lai $Aa \\times Aa$ cho tỉ lệ xác suất kiểu gen $1AA : 2Aa : 1aa$ và kiểu hình $3$ trội : $1$ lặn.</li>
        </ul>
      `
    }
  ],

  // 20 Công thức tra cứu nhanh
  quickFormulas: [
    { topic: "Phương trình bậc nhất 2 ẩn", formula: "ax + by = c \\quad (a^2 + b^2 \\neq 0)" },
    { topic: "Bất đẳng thức nhân số âm", formula: "a > b \\iff ac < bc \\quad (c < 0 \\text{ ĐỔI CHIỀU})" },
    { topic: "Hằng đẳng thức căn", formula: "\\sqrt{A^2} = |A|" },
    { topic: "Khai căn tích & thương", formula: "\\sqrt{ab} = \\sqrt{a}\\sqrt{b}, \\quad \\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}} \\quad (a, b \\ge 0, b > 0)" },
    { topic: "Căn bậc ba", formula: "\\sqrt[3]{a^3} = a \\quad (\\forall a \\in \\mathbb{R})" },
    { topic: "Lượng giác tam giác vuông", formula: "\\sin = \\frac{\\text{đối}}{\\text{huyền}}, \\cos = \\frac{\\text{kề}}{\\text{huyền}}, \\tan = \\frac{\\text{đối}}{\\text{kề}}, \\cot = \\frac{\\text{kề}}{\\text{đối}}" },
    { topic: "Hệ thức lượng giác", formula: "\\sin^2\\alpha + \\cos^2\\alpha = 1, \\quad \\tan\\alpha \\cdot \\cot\\alpha = 1" },
    { topic: "Độ dài cung tròn", formula: "l = \\frac{\\pi R n}{180^\\circ}" },
    { topic: "Diện tích quạt tròn", formula: "S = \\frac{\\pi R^2 n}{360^\\circ} = \\frac{l R}{2}" },
    { topic: "Diện tích hình vành khuyên", formula: "S = \\pi (R^2 - r^2) \\quad (R > r)" },
    { topic: "Vị trí đường thẳng - đường tròn", formula: "d < R \\text{ (cắt 2 điểm)}, d = R \\text{ (tiếp xúc)}, d > R \\text{ (không giao)}" },
    { topic: "Biệt thức Δ phương trình bậc hai", formula: "\\Delta = b^2 - 4ac \\quad (\\Delta > 0: 2 \\text{ nghiệm}, \\Delta = 0: \\text{nghiệm kép}, \\Delta < 0: \\text{vô nghiệm})" },
    { topic: "Hệ thức Viète", formula: "x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 x_2 = \\frac{c}{a}" },
    { topic: "Tần số tương đối", formula: "f_i = \\frac{m_i}{n} \\times 100\\%" },
    { topic: "Xác suất cổ điển", formula: "P(A) = \\frac{|A|}{|\\Omega|}, \\quad P(\\overline{A}) = 1 - P(A)" },
    { topic: "Góc nội tiếp", formula: "\\widehat{ACB} = \\frac{1}{2} \\text{sđ}\\overparen{AB} = \\frac{1}{2}\\widehat{AOB}" },
    { topic: "Tứ giác nội tiếp", formula: "\\widehat{A} + \\widehat{C} = 180^\\circ, \\quad \\widehat{B} + \\widehat{D} = 180^\\circ" },
    { topic: "Mỗi góc đa giác đều n cạnh", formula: "\\alpha = \\frac{(n - 2) \\cdot 180^\\circ}{n}" },
    { topic: "Hình trụ", formula: "S_{xq} = 2\\pi r h, \\quad V = \\pi r^2 h" },
    { topic: "Hình nón", formula: "S_{xq} = \\pi r \\ell, \\quad V = \\frac{1}{3}\\pi r^2 h, \\quad \\ell^2 = r^2 + h^2" },
    { topic: "Hình cầu", formula: "S = 4\\pi R^2, \\quad V = \\frac{4}{3}\\pi R^3" }
  ],

  // 6 Bước chuẩn giải toán
  problemSolvingSteps: [
    { step: 1, title: "Đọc & Phân loại bài toán", desc: "Xác định rõ thuộc chuyên đề đại số, căn thức, hệ phương trình, lượng giác, hình tròn hay hình không gian." },
    { step: 2, title: "Đặt điều kiện xác định (ĐKXĐ)", desc: "Tìm điều kiện mẫu khác 0, biểu thức dưới căn bậc hai không âm, điều kiện thực tế của ẩn (nguyên dương, lớn hơn 0...)." },
    { step: 3, title: "Lập sơ đồ & Chọn phương pháp", desc: "Vẽ hình chuẩn xác, ghi chú các yếu tố đã biết, chọn công thức định lí phù hợp nhất." },
    { step: 4, title: "Thực hiện biến đổi cẩn trọng", desc: "Trình bày mạch lạc, ghi rõ căn cứ; chú ý đổi chiều bất đẳng thức khi nhân số âm; không viết tắt bừa bãi." },
    { step: 5, title: "Đối chiếu điều kiện & Thử lại", desc: "So sánh kết quả với ĐKXĐ và ý nghĩa thực tế; loại nghiệm ngoại lai." },
    { step: 6, title: "Kết luận & Ghi đúng đơn vị", desc: "Trả lời rõ ràng đúng câu hỏi của đề bài, ghi chính xác đơn vị đo (cm, m², m³, giờ, km/h)." }
  ]
};
