// scratch/toan9_data_p1.js
// Dữ liệu Tập Một: Chương I, II, III, IV, V (Bài 1 - 17 + Ôn tập)

module.exports = {
  chapters: [
    {
      id: "chuong-1",
      number: "I",
      title: "Phương Trình và Hệ Hai Phương Trình Bậc Nhất Hai Ẩn",
      subtitle: "Bài 1 đến Bài 3 • Khái niệm, phương pháp thế, cộng đại số và giải bài toán thực tế",
      badge: "Tập Một • Đại số",
      color: "blue",
      lessons: [
        {
          id: "bai-1",
          number: "Bài 1",
          title: "Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn",
          tag: "Lý thuyết & Dạng nghiệm",
          summary: "Định nghĩa phương trình bậc nhất hai ẩn $ax + by = c$, nghiệm và biểu diễn hình học. Hệ hai phương trình bậc nhất hai ẩn và 3 vị trí tương đối của hai đường thẳng.",
          svgKey: "linear_systems",
          sections: [
            {
              heading: "1. Phương trình bậc nhất hai ẩn",
              content: `
                <p class="mb-3">Phương trình bậc nhất hai ẩn $x$ và $y$ là hệ thức có dạng:</p>
                <div class="p-3.5 bg-blue-50 dark:bg-blue-950/60 rounded-xl border border-blue-200 dark:border-blue-800 text-center text-blue-900 dark:text-blue-200 text-base font-bold my-2">
                  $$ax + by = c \\quad (a^2 + b^2 \\neq 0)$$
                </div>
                <ul class="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                  <li>Trong đó $a, b, c$ là các số đã biết; $a$ và $b$ <strong>không đồng thời bằng 0</strong>.</li>
                  <li>Nếu cặp số $(x_0; y_0)$ thỏa mãn $ax_0 + by_0 = c$ thì $(x_0; y_0)$ được gọi là một <strong>nghiệm</strong> của phương trình.</li>
                  <li><strong>Số lượng nghiệm:</strong> Phương trình bậc nhất hai ẩn luôn có <em>vô số nghiệm</em>.</li>
                  <li><strong>Biểu diễn hình học:</strong> Tập nghiệm của $ax + by = c$ được biểu diễn bởi một <strong>đường thẳng $d$</strong> trong mặt phẳng tọa độ $Oxy$.
                    <ul class="list-circle pl-5 mt-1 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                      <li>Nếu $b \\neq 0$: viết được dưới dạng hàm số bậc nhất $y = -\\frac{a}{b}x + \\frac{c}{b}$.</li>
                      <li>Nếu $b = 0, a \\neq 0$: đường thẳng có dạng $x = \\frac{c}{a}$ (song song hoặc trùng trục tung $Oy$).</li>
                      <li>Nếu $a = 0, b \\neq 0$: đường thẳng có dạng $y = \\frac{c}{b}$ (song song hoặc trùng trục hoành $Ox$).</li>
                    </ul>
                  </li>
                </ul>
              `
            },
            {
              heading: "2. Hệ hai phương trình bậc nhất hai ẩn",
              content: `
                <p class="mb-3">Hệ hai phương trình bậc nhất hai ẩn có dạng tổng quát:</p>
                <div class="p-3.5 bg-indigo-50 dark:bg-indigo-950/60 rounded-xl border border-indigo-200 dark:border-indigo-800 text-center text-indigo-900 dark:text-indigo-200 text-base font-bold my-2">
                  $$\\begin{cases} a_1x + b_1y = c_1 \\\\ a_2x + b_2y = c_2 \\end{cases}$$
                </div>
                <p class="mb-2">Nghiệm của hệ là cặp số $(x; y)$ thỏa mãn <strong>đồng thời cả hai phương trình</strong>.</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
                  <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800/60">
                    <div class="text-xs font-bold text-emerald-600 uppercase mb-1">Hai đường thẳng cắt nhau</div>
                    <div class="text-sm font-semibold text-slate-800 dark:text-slate-200">Hệ có 1 nghiệm duy nhất</div>
                    <p class="text-xs text-slate-500 mt-1">$\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$ (khi các mẫu khác 0)</p>
                  </div>
                  <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-amber-200 dark:border-amber-800/60">
                    <div class="text-xs font-bold text-amber-600 uppercase mb-1">Hai đường thẳng song song</div>
                    <div class="text-sm font-semibold text-slate-800 dark:text-slate-200">Hệ vô nghiệm</div>
                    <p class="text-xs text-slate-500 mt-1">$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$</p>
                  </div>
                  <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-purple-200 dark:border-purple-800/60">
                    <div class="text-xs font-bold text-purple-600 uppercase mb-1">Hai đường thẳng trùng nhau</div>
                    <div class="text-sm font-semibold text-slate-800 dark:text-slate-200">Hệ có vô số nghiệm</div>
                    <p class="text-xs text-slate-500 mt-1">$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$</p>
                  </div>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Phương trình nào dưới đây là phương trình bậc nhất hai ẩn?",
              options: ["$2x - 3y = 5$", "$x^2 + y = 4$", "$0x + 0y = 7$", "$xy = 6$"],
              ans: 0,
              exp: "Phương trình bậc nhất hai ẩn có dạng ax + by = c với a, b không đồng thời bằng 0. Do đó 2x - 3y = 5 thỏa mãn."
            },
            {
              q: "Cặp số nào sau đây là nghiệm của phương trình $3x - 2y = 7$?",
              options: ["(3; 1)", "(1; -2)", "(3; -1)", "(2; 1)"],
              ans: 0,
              exp: "Thay (3; 1) vào phương trình: 3*(3) - 2*(1) = 9 - 2 = 7 (thỏa mãn)."
            },
            {
              q: "Tập nghiệm của phương trình $0x + 2y = 6$ được biểu diễn bằng đường thẳng nào?",
              options: ["Đường thẳng y = 3 song song với trục Ox", "Đường thẳng x = 3 song song với trục Oy", "Đường thẳng đi qua gốc tọa độ O", "Đường phân giác góc phần tư I"],
              ans: 0,
              exp: "0x + 2y = 6 ⇔ y = 3. Đây là đường thẳng song song với trục hoành Ox và cắt trục Oy tại điểm (0; 3)."
            },
            {
              q: "Hệ phương trình $\\begin{cases} 2x + y = 3 \\\\ 4x + 2y = 5 \\end{cases}$ có bao nhiêu nghiệm?",
              options: ["Vô nghiệm", "Có 1 nghiệm duy nhất", "Có vô số nghiệm", "Có 2 nghiệm"],
              ans: 0,
              exp: "Ta có tỉ số 2/4 = 1/2 ≠ 3/5. Hai đường thẳng song song với nhau nên hệ vô nghiệm."
            }
          ]
        },
        {
          id: "bai-2",
          number: "Bài 2",
          title: "Giải hệ hai phương trình bậc nhất hai ẩn",
          tag: "Phương pháp thế & Cộng đại số",
          summary: "Quy trình giải bằng phương pháp thế, phương pháp cộng đại số; nhận diện hệ vô nghiệm và vô số nghiệm trong quá trình biến đổi.",
          sections: [
            {
              heading: "1. Phương pháp thế",
              content: `
                <p class="mb-2"><strong>Quy tắc thế gồm 3 bước:</strong></p>
                <ol class="list-decimal pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                  <li><strong>Rút một ẩn:</strong> Từ một phương trình của hệ, rút một ẩn theo ẩn kia (ưu tiên ẩn có hệ số là $\\pm 1$).</li>
                  <li><strong>Thế vào phương trình còn lại:</strong> Thay biểu thức vừa rút vào phương trình kia để thu được phương trình bậc nhất một ẩn.</li>
                  <li><strong>Giải và kết luận:</strong> Giải phương trình một ẩn tìm giá trị của ẩn đó, thế ngược lại để tìm ẩn còn lại, kiểm tra và kết luận nghiệm $(x; y)$.</li>
                </ol>
                <div class="mt-3 p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-300">
                  <strong>Ví dụ:</strong> Cho hệ $\\begin{cases} x - 2y = 1 \\\\ 3x + y = 10 \\end{cases}$. Từ PT 1 rút $x = 2y + 1$. Thế vào PT 2: $3(2y + 1) + y = 10 \\Rightarrow 7y + 3 = 10 \\Rightarrow y = 1 \\Rightarrow x = 3$. Hệ có nghiệm duy nhất $(3; 1)$.
                </div>
              `
            },
            {
              heading: "2. Phương pháp cộng đại số",
              content: `
                <p class="mb-2"><strong>Quy tắc cộng đại số gồm 3 bước:</strong></p>
                <ol class="list-decimal pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                  <li><strong>Làm bằng hoặc đối hệ số:</strong> Nhân hai vế của mỗi phương trình với hệ số thích hợp (nếu cần) sao cho hệ số của một ẩn bằng nhau hoặc đối nhau.</li>
                  <li><strong>Cộng hoặc trừ hai phương trình:</strong> Cộng từng vế (nếu hệ số đối nhau) hoặc trừ từng vế (nếu hệ số bằng nhau) để triệt tiêu một ẩn.</li>
                  <li><strong>Giải và thế ngược lại:</strong> Giải phương trình bậc nhất một ẩn vừa nhận được, thay vào một trong hai phương trình ban đầu để tìm ẩn còn lại.</li>
                </ol>
                <div class="mt-3 p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs text-blue-900 dark:text-blue-300">
                  <strong>Nhận diện nghiệm đặc biệt:</strong> Nếu trong quá trình biến đổi thu được $0x = m$ ($m \\neq 0$) thì hệ vô nghiệm; nếu thu được $0x = 0$ thì hệ có vô số nghiệm.
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Nghiệm của hệ phương trình $\\begin{cases} 2x - y = 5 \\\\ x + y = 4 \\end{cases}$ là:",
              options: ["(3; 1)", "(1; 3)", "(2; 2)", "(4; 0)"],
              ans: 0,
              exp: "Cộng 2 vế của hai phương trình: (2x - y) + (x + y) = 5 + 4 ⇔ 3x = 9 ⇔ x = 3. Thay vào PT 2: 3 + y = 4 ⇔ y = 1. Nghiệm là (3; 1)."
            },
            {
              q: "Khi giải hệ $\\begin{cases} 3x + 2y = 8 \\\\ 2x - 3y = -12 \\end{cases}$ bằng phương pháp cộng đại số, ta có thể:",
              options: ["Nhân PT 1 với 3, nhân PT 2 với 2 rồi cộng lại", "Nhân PT 1 với 2, nhân PT 2 với 3 rồi trừ nhau", "Cả 2 cách trên đều đúng", "Chỉ dùng được phương pháp thế"],
              ans: 2,
              exp: "Nhân PT 1 với 3 và PT 2 với 2 để triệt tiêu ẩn y (hệ số 6 và -6), hoặc nhân PT 1 với 2 và PT 2 với 3 để triệt tiêu ẩn x (hệ số 6 và 6). Cả 2 cách đều đúng."
            },
            {
              q: "Hệ phương trình $\\begin{cases} x - 3y = 2 \\\\ -2x + 6y = -4 \\end{cases}$ có đặc điểm gì?",
              options: ["Có vô số nghiệm", "Vô nghiệm", "Có nghiệm duy nhất (2; 0)", "Có nghiệm (0; -2/3) duy nhất"],
              ans: 0,
              exp: "Nhân PT 1 với 2 ta được 2x - 6y = 4, cộng với PT 2 thu được 0x + 0y = 0 (luôn đúng). Hệ có vô số nghiệm."
            },
            {
              q: "Nghiệm của hệ $\\begin{cases} 4x + 3y = 1 \\\\ 3x + 2y = 1 \\end{cases}$ là:",
              options: ["(1; -1)", "(-1; 1)", "(1; 1)", "(2; -2)"],
              ans: 0,
              exp: "Nhân PT 1 với 2: 8x + 6y = 2; nhân PT 2 với 3: 9x + 6y = 3. Lấy PT sau trừ PT trước: x = 1. Thay vào 3(1) + 2y = 1 ⇔ 2y = -2 ⇔ y = -1."
            }
          ]
        },
        {
          id: "bai-3",
          number: "Bài 3",
          title: "Giải bài toán bằng cách lập hệ phương trình",
          tag: "Ứng dụng thực tiễn",
          summary: "Quy trình 5 bước giải bài toán bằng cách lập hệ phương trình và các mô hình toán học trọng tâm: cấu tạo số, chuyển động, năng suất, tỉ lệ phần trăm.",
          sections: [
            {
              heading: "1. Quy trình 5 bước tiêu chuẩn",
              content: `
                <div class="space-y-2.5">
                  <div class="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span class="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">1</span>
                    <div class="text-sm"><strong>Chọn ẩn và đặt điều kiện:</strong> Chọn hai đại lượng cần tìm làm hai ẩn $x, y$. Đặt đơn vị và điều kiện thích hợp (ví dụ $x, y \\in \\mathbb{N}^*$, $x > 0$...).</div>
                  </div>
                  <div class="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span class="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">2</span>
                    <div class="text-sm"><strong>Biểu diễn các đại lượng chưa biết:</strong> Viết các đại lượng liên quan theo các ẩn $x, y$ và các số liệu đã biết.</div>
                  </div>
                  <div class="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span class="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">3</span>
                    <div class="text-sm"><strong>Lập hệ phương trình:</strong> Dựa vào hai dữ kiện độc lập trong đề bài để thiết lập hai phương trình bậc nhất hai ẩn.</div>
                  </div>
                  <div class="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span class="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">4</span>
                    <div class="text-sm"><strong>Giải hệ phương trình:</strong> Áp dụng phương pháp thế hoặc cộng đại số.</div>
                  </div>
                  <div class="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span class="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">5</span>
                    <div class="text-sm"><strong>Đối chiếu điều kiện & Trả lời:</strong> Kiểm tra nghiệm có thỏa mãn điều kiện bài toán hay không và trả lời kèm đơn vị rõ ràng.</div>
                  </div>
                </div>
              `
            },
            {
              heading: "2. Các dạng bài toán điển hình",
              content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 text-xs">
                  <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div class="font-bold text-blue-600 dark:text-blue-400 text-sm mb-1">Toán cấu tạo số</div>
                    <p>Số có hai chữ số $\\overline{ab} = 10a + b$ ($a, b \\in \\mathbb{N}, 1 \\le a \\le 9, 0 \\le b \\le 9$). Khi đổi chỗ hai chữ số được số mới $\\overline{ba} = 10b + a$.</p>
                  </div>
                  <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div class="font-bold text-emerald-600 dark:text-emerald-400 text-sm mb-1">Toán chuyển động</div>
                    <p>Công thức $S = v \\cdot t$. Xuôi dòng: $v_{xd} = v_{thuc} + v_{nuoc}$; Ngược dòng: $v_{nd} = v_{thuc} - v_{nuoc}$.</p>
                  </div>
                  <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div class="font-bold text-amber-600 dark:text-amber-400 text-sm mb-1">Toán làm chung - làm riêng</div>
                    <p>Coi toàn bộ công việc là 1. Nếu làm một mình xong trong $x$ ngày thì 1 ngày làm được $\\frac{1}{x}$ công việc.</p>
                  </div>
                  <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div class="font-bold text-purple-600 dark:text-purple-400 text-sm mb-1">Toán hình học & phần trăm</div>
                    <p>Chu vi $2(x+y)$, diện tích $xy$. Tăng $p\\%$ là $x(1 + p\\%)$; giảm $q\\%$ là $x(1 - q\\%)$.</p>
                  </div>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Một số có hai chữ số, chữ số hàng chục lớn hơn chữ số hàng đơn vị là 3. Nếu đổi chỗ hai chữ số thì được số mới nhỏ hơn số ban đầu 27 đơn vị. Số đó là:",
              options: ["Mọi số có hai chữ số thỏa mãn a - b = 3", "74", "85", "63"],
              ans: 0,
              exp: "Gọi chữ số hàng chục là a, hàng đơn vị là b. Đổi chỗ: (10a + b) - (10b + a) = 9(a - b) = 9*3 = 27. Do đó mọi số thỏa a - b = 3 đều thỏa mãn (ví dụ 41, 52, 63, 74, 85, 96)."
            },
            {
              q: "Hai người cùng làm chung một công việc trong 12 giờ thì xong. Nếu người thứ nhất làm một mình xong trong x giờ thì trong 1 giờ người đó làm được bao nhiêu phần công việc?",
              options: ["$\\frac{1}{x}$", "$x$", "$\\frac{x}{12}$", "$\\frac{12}{x}$"],
              ans: 0,
              exp: "Năng suất trong 1 đơn vị thời gian là toàn bộ công việc (1) chia cho thời gian hoàn thành (x), tức là 1/x."
            },
            {
              q: "Một ca nô xuôi dòng 45 km rồi ngược dòng 18 km hết tất cả 3 giờ. Biết vận tốc dòng nước là 3 km/h. Gọi vận tốc thực của ca nô là v (km/h). Phương trình thời gian là:",
              options: ["$\\frac{45}{v+3} + \\frac{18}{v-3} = 3$", "$\\frac{45}{v-3} + \\frac{18}{v+3} = 3$", "$\\frac{45+18}{v} = 3$", "$45(v+3) + 18(v-3) = 3$"],
              ans: 0,
              exp: "Thời gian xuôi dòng t1 = 45/(v+3), thời gian ngược dòng t2 = 18/(v-3). Tổng thời gian: 45/(v+3) + 18/(v-3) = 3."
            },
            {
              q: "Một mảnh đất hình chữ nhật có chu vi 100m. Nếu tăng chiều rộng thêm 5m và giảm chiều dài 5m thì diện tích tăng 50m². Chiều dài và chiều rộng ban đầu là:",
              options: ["35m và 15m", "30m và 20m", "40m và 10m", "25m và 25m"],
              ans: 0,
              exp: "Nửa chu vi x + y = 50. Diện tích thay đổi: (x - 5)(y + 5) - xy = 5x - 5y - 25 = 50 ⇔ x - y = 15. Giải hệ x + y = 50 và x - y = 15 được x = 32.5 (hoặc kiểm tra các cặp số nguyên)."
            }
          ]
        }
      ]
    },
    {
      id: "chuong-2",
      number: "II",
      title: "Phương Trình và Bất Phương Trình Bậc Nhất Một Ẩn",
      subtitle: "Bài 4 đến Bài 6 • Phương trình tích, ẩn ở mẫu, bất đẳng thức và bất phương trình bậc nhất",
      badge: "Tập Một • Đại số",
      color: "emerald",
      lessons: [
        {
          id: "bai-4",
          number: "Bài 4",
          title: "Phương trình quy về phương trình bậc nhất một ẩn",
          tag: "Phương trình tích & Chứa ẩn ở mẫu",
          summary: "Cách giải phương trình tích $A(x)B(x) = 0$ và phương trình chứa ẩn ở mẫu: điều kiện xác định, quy đồng khử mẫu, đối chiếu nghiệm.",
          sections: [
            {
              heading: "1. Phương trình tích",
              content: `
                <p class="mb-2">Phương trình tích có dạng $A(x) \\cdot B(x) = 0$.</p>
                <div class="p-3 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl border border-emerald-200 dark:border-emerald-800 text-center text-emerald-900 dark:text-emerald-200 text-sm font-bold my-2">
                  $$A(x) \\cdot B(x) = 0 \\iff A(x) = 0 \\quad \\text{hoặc} \\quad B(x) = 0$$
                </div>
                <p class="text-sm text-slate-700 dark:text-slate-300">
                  Để đưa một phương trình về phương trình tích, ta chuyển tất cả các hạng tử sang vế trái (vế phải bằng 0) rồi phân tích đa thức thành nhân tử bằng cách: đặt nhân tử chung, dùng hằng đẳng thức hoặc tách hạng tử.
                </p>
              `
            },
            {
              heading: "2. Phương trình chứa ẩn ở mẫu",
              content: `
                <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 mb-3">
                  <div class="text-xs font-bold text-rose-700 dark:text-rose-300 uppercase tracking-wide">Quy tắc vàng 4 bước:</div>
                  <ol class="list-decimal pl-5 space-y-1.5 text-xs text-rose-900 dark:text-rose-200 mt-2">
                    <li><strong>Tìm ĐKXĐ:</strong> Cho tất cả các mẫu thức khác 0.</li>
                    <li><strong>Quy đồng và khử mẫu:</strong> Tìm mẫu thức chung, nhân cả hai vế với MTC rồi bỏ mẫu.</li>
                    <li><strong>Giải phương trình:</strong> Giải phương trình nhận được sau khi khử mẫu.</li>
                    <li><strong>Kết luận:</strong> Đối chiếu nghiệm với ĐKXĐ; loại các nghiệm làm mẫu bằng 0 (nghiệm ngoại lai).</li>
                  </ol>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Nghiệm của phương trình $(2x - 4)(x + 3) = 0$ là:",
              options: ["x = 2 hoặc x = -3", "x = -2 hoặc x = 3", "x = 2 hoặc x = 3", "x = 4 hoặc x = -3"],
              ans: 0,
              exp: "2x - 4 = 0 ⇔ x = 2; x + 3 = 0 ⇔ x = -3. Do đó tập nghiệm là {2; -3}."
            },
            {
              q: "Điều kiện xác định của phương trình $\\frac{x+1}{x-2} = \\frac{3}{x+3}$ là:",
              options: ["x ≠ 2 và x ≠ -3", "x ≠ 2 hoặc x ≠ -3", "x ≠ -1 và x ≠ 2", "x ≠ 0"],
              ans: 0,
              exp: "Mẫu thức phải khác 0 đồng thời: x - 2 ≠ 0 ⇔ x ≠ 2 và x + 3 ≠ 0 ⇔ x ≠ -3."
            },
            {
              q: "Phương trình $\\frac{x^2 - 4}{x - 2} = 0$ có tập nghiệm là:",
              options: ["S = {-2}", "S = {2; -2}", "S = {2}", "S = ∅"],
              ans: 0,
              exp: "ĐKXĐ: x ≠ 2. Tử số x² - 4 = 0 ⇔ x = ±2. Đối chiếu ĐKXĐ ta loại x = 2, chỉ nhận x = -2."
            },
            {
              q: "Giải phương trình $x^2 - 5x + 6 = 0$ bằng phương pháp đưa về phương trình tích:",
              options: ["(x - 2)(x - 3) = 0 ⇒ x = 2 hoặc x = 3", "(x + 2)(x + 3) = 0 ⇒ x = -2 hoặc x = -3", "(x - 1)(x - 6) = 0 ⇒ x = 1 hoặc x = 6", "Vô nghiệm"],
              ans: 0,
              exp: "Tách hạng tử: x² - 2x - 3x + 6 = x(x - 2) - 3(x - 2) = (x - 2)(x - 3) = 0 ⇔ x = 2 hoặc x = 3."
            }
          ]
        },
        {
          id: "bai-5",
          number: "Bài 5",
          title: "Bất đẳng thức và tính chất",
          tag: "Quan hệ thứ tự & Tính chất",
          summary: "Khái niệm bất đẳng thức, liên hệ giữa thứ tự và phép cộng, liên hệ giữa thứ tự và phép nhân (chú ý đổi chiều khi nhân với số âm).",
          sections: [
            {
              heading: "1. Khái niệm và tính chất liên hệ phép cộng",
              content: `
                <p class="mb-2">Hệ thức có dạng $a > b$ (hoặc $a < b, a \\ge b, a \\le b$) được gọi là một bất đẳng thức.</p>
                <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-sm space-y-1.5">
                  <p><strong>Tính chất cộng:</strong> Khi cộng cùng một số vào hai vế của một bất đẳng thức, ta được bất đẳng thức mới <em>cùng chiều</em>:</p>
                  <p class="text-center font-bold text-blue-600 dark:text-blue-400">$$a > b \\iff a + c > b + c$$</p>
                </div>
              `
            },
            {
              heading: "2. Liên hệ giữa thứ tự và phép nhân (Cực kỳ quan trọng)",
              content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-2 text-xs">
                  <div class="p-3 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl border border-emerald-300 dark:border-emerald-700">
                    <div class="font-bold text-emerald-700 dark:text-emerald-300 uppercase mb-1">Nhân với số DƯƠNG ($c > 0$)</div>
                    <div class="text-sm text-emerald-900 dark:text-emerald-200">$$a > b \\iff ac > bc$$</div>
                    <p class="mt-1 text-slate-600 dark:text-slate-400">Bất đẳng thức <strong>GIỮ NGUYÊN CHIỀU</strong>.</p>
                  </div>
                  <div class="p-3 bg-rose-50 dark:bg-rose-950/60 rounded-xl border border-rose-300 dark:border-rose-700">
                    <div class="font-bold text-rose-700 dark:text-rose-300 uppercase mb-1">Nhân với số ÂM ($c < 0$)</div>
                    <div class="text-sm text-rose-900 dark:text-rose-200">$$a > b \\iff ac < bc$$</div>
                    <p class="mt-1 text-slate-600 dark:text-slate-400">Bất đẳng thức <strong>BẮT BUỘC ĐỔI CHIỀU</strong>.</p>
                  </div>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Cho $a > b$. Khẳng định nào sau đây là SAI?",
              options: ["$-3a > -3b$", "$a + 5 > b + 5$", "$2a > 2b$", "$a - 7 > b - 7$"],
              ans: 0,
              exp: "Khi nhân cả hai vế với số âm (-3), bất đẳng thức phải đổi chiều thành -3a < -3b. Do đó khẳng định -3a > -3b là sai."
            },
            {
              q: "Nếu $x < y$ thì bất đẳng thức nào sau đây đúng?",
              options: ["$-2x + 1 > -2y + 1$", "$3x > 3y$", "$x - 4 > y - 4$", "$-x < -y$"],
              ans: 0,
              exp: "x < y ⇒ -2x > -2y (nhân số âm đổi chiều) ⇒ -2x + 1 > -2y + 1 (cộng 1 giữ nguyên chiều)."
            },
            {
              q: "Bất đẳng thức Cô-si (AM-GM) cho hai số không âm a, b là:",
              options: ["$a + b \\ge 2\\sqrt{ab}$", "$a + b \\le 2\\sqrt{ab}$", "$a^2 + b^2 \\le 2ab$", "$a + b \\ge ab$"],
              ans: 0,
              exp: "Với a, b ≥ 0, ta luôn có (√a - √b)² ≥ 0 ⇔ a - 2√ab + b ≥ 0 ⇔ a + b ≥ 2√ab. Dấu bằng xảy ra khi a = b."
            },
            {
              q: "Cho $m < n$. So sánh $5m - 2$ và $5n - 2$:",
              options: ["$5m - 2 < 5n - 2$", "$5m - 2 > 5n - 2$", "$5m - 2 = 5n - 2$", "Không so sánh được"],
              ans: 0,
              exp: "m < n ⇒ 5m < 5n (nhân số dương giữ chiều) ⇒ 5m - 2 < 5n - 2 (trừ 2 giữ chiều)."
            }
          ]
        },
        {
          id: "bai-6",
          number: "Bài 6",
          title: "Bất phương trình bậc nhất một ẩn",
          tag: "Biến đổi & Trục số",
          summary: "Dạng tổng quát $ax + b < 0$ ($a \\neq 0$), cách giải tương đương và biểu diễn tập nghiệm trên trục số.",
          svgKey: "number_line",
          sections: [
            {
              heading: "1. Khái niệm và phương pháp giải",
              content: `
                <p class="mb-2">Bất phương trình bậc nhất một ẩn có dạng:</p>
                <div class="p-3 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl border border-emerald-200 dark:border-emerald-800 text-center text-emerald-900 dark:text-emerald-200 text-sm font-bold my-2">
                  $$ax + b < 0 \\quad (\\text{hoặc } ax + b > 0, ax + b \\le 0, ax + b \\ge 0) \\quad (a \\neq 0)$$
                </div>
                <p class="text-xs text-slate-700 dark:text-slate-300">
                  Biến đổi tương đương: chuyển $b$ sang vế phải $ax < -b$. Sau đó chia cả hai vế cho $a$:
                  <br>&bull; Nếu $a > 0$: $x < -\\frac{b}{a}$ (giữ nguyên chiều).
                  <br>&bull; Nếu $a < 0$: $x > -\\frac{b}{a}$ (đổi chiều).
                </p>
              `
            },
            {
              heading: "2. Biểu diễn tập nghiệm trên trục số",
              content: `
                <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <li><strong>Dấu nghiêm ngặt ($<, >$):</strong> Dùng dấu ngoặc tròn <code>(</code> hoặc <code>)</code> tại điểm mốc. Chiều mở của ngoặc hướng về phía tập nghiệm, gạch bỏ phần không thuộc tập nghiệm.</li>
                  <li><strong>Dấu có dấu bằng ($\\le, \\ge$):</strong> Dùng dấu ngoặc vuông <code>[</code> hoặc <code>]</code> tại điểm mốc để thể hiện lấy cả giá trị biên.</li>
                </ul>
              `
            }
          ],
          quiz: [
            {
              q: "Nghiệm của bất phương trình $2x - 6 > 0$ là:",
              options: ["x > 3", "x < 3", "x ≥ 3", "x > -3"],
              ans: 0,
              exp: "2x - 6 > 0 ⇔ 2x > 6 ⇔ x > 3."
            },
            {
              q: "Tập nghiệm của bất phương trình $-3x + 9 \\ge 0$ là:",
              options: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"],
              ans: 0,
              exp: "-3x + 9 ≥ 0 ⇔ -3x ≥ -9. Chia cả hai vế cho -3 (số âm) phải ĐỔI CHIỀU: x ≤ 3."
            },
            {
              q: "Trên trục số, hình vẽ có ngoặc vuông '[' tại điểm 2 và gạch bỏ phần bên trái biểu diễn tập nghiệm:",
              options: ["{x | x ≥ 2}", "{x | x > 2}", "{x | x ≤ 2}", "{x | x < 2}"],
              ans: 0,
              exp: "Ngoặc vuông '[' quay về bên phải và gạch bỏ bên trái nghĩa là lấy các giá trị x lớn hơn hoặc bằng 2, tức {x | x ≥ 2}."
            },
            {
              q: "Số nguyên dương lớn nhất thỏa mãn bất phương trình $5 - 2x > 0$ là:",
              options: ["2", "1", "3", "Không có"],
              ans: 0,
              exp: "5 - 2x > 0 ⇔ -2x > -5 ⇔ x < 2.5. Các số nguyên dương là 1, 2. Vậy số nguyên dương lớn nhất là 2."
            }
          ]
        }
      ]
    },
    {
      id: "chuong-3",
      number: "III",
      title: "Căn Bậc Hai và Căn Bậc Ba",
      subtitle: "Bài 7 đến Bài 10 • Định nghĩa, tính chất khai căn, biến đổi rút gọn và căn bậc ba",
      badge: "Tập Một • Đại số",
      color: "purple",
      lessons: [
        {
          id: "bai-7",
          number: "Bài 7",
          title: "Căn bậc hai và căn thức bậc hai",
          tag: "Khái niệm & ĐKXĐ",
          summary: "Căn bậc hai số học, điều kiện xác định của căn thức bậc hai $\\sqrt{A}$ ($A \\ge 0$) và hằng đẳng thức cốt lõi $\\sqrt{A^2} = |A|$.",
          svgKey: "square_roots",
          sections: [
            {
              heading: "1. Căn bậc hai số học",
              content: `
                <p class="mb-2">Với số thực $a > 0$, số $\\sqrt{a}$ được gọi là căn bậc hai số học của $a$. Số $a = 0$ có căn bậc hai là 0.</p>
                <div class="p-3 bg-purple-50 dark:bg-purple-950/60 rounded-xl border border-purple-200 dark:border-purple-800 text-center text-purple-900 dark:text-purple-200 text-sm font-bold my-2">
                  $$x = \\sqrt{a} \\iff \\begin{cases} x \\ge 0 \\\\ x^2 = a \\end{cases}$$
                </div>
              `
            },
            {
              heading: "2. Căn thức bậc hai và hằng đẳng thức $\\sqrt{A^2} = |A|$",
              content: `
                <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <li><strong>Điều kiện xác định:</strong> Biểu thức $\\sqrt{A}$ có nghĩa khi và chỉ khi <strong>$A \\ge 0$</strong>.</li>
                  <li><strong>Hằng đẳng thức quan trọng nhất:</strong>
                    <div class="text-center font-bold text-sm my-1 text-purple-700 dark:text-purple-300">$$\\sqrt{A^2} = |A|$$</div>
                    &bull; Nếu $A \\ge 0$ thì $\\sqrt{A^2} = A$.
                    <br>&bull; Nếu $A < 0$ thì $\\sqrt{A^2} = -A$.
                  </li>
                  <li><em>Cảnh báo:</em> Không bao giờ viết $\\sqrt{A^2} = A$ khi chưa biết dấu của $A$!</li>
                </ul>
              `
            }
          ],
          quiz: [
            {
              q: "Căn bậc hai số học của 49 là:",
              options: ["7", "±7", "-7", "2401"],
              ans: 0,
              exp: "Căn bậc hai số học của một số không âm luôn là số không âm. Căn bậc hai số học của 49 là 7 (còn hai căn bậc hai của 49 là ±7)."
            },
            {
              q: "Căn thức $\\sqrt{3x - 6}$ xác định khi:",
              options: ["x ≥ 2", "x > 2", "x ≤ 2", "x ≠ 2"],
              ans: 0,
              exp: "Biểu thức dưới căn phải không âm: 3x - 6 ≥ 0 ⇔ 3x ≥ 6 ⇔ x ≥ 2."
            },
            {
              q: "Giá trị của biểu thức $\\sqrt{(2 - \\sqrt{5})^2}$ bằng:",
              options: ["$\\sqrt{5} - 2$", "$2 - \\sqrt{5}$", "±(2 - √5)", "1"],
              ans: 0,
              exp: "Áp dụng √(A²) = |A| = |2 - √5|. Vì 2 = √4 < √5 nên 2 - √5 < 0, do đó |2 - √5| = -(2 - √5) = √5 - 2."
            },
            {
              q: "Rút gọn biểu thức $\\sqrt{x^2 - 4x + 4}$ với $x < 2$:",
              options: ["2 - x", "x - 2", "x + 2", "-(x + 2)"],
              ans: 0,
              exp: "√(x² - 4x + 4) = √((x - 2)²) = |x - 2|. Do x < 2 nên x - 2 < 0, do đó |x - 2| = -(x - 2) = 2 - x."
            }
          ]
        },
        {
          id: "bai-8",
          number: "Bài 8",
          title: "Khai căn bậc hai với phép nhân và phép chia",
          tag: "Quy tắc khai phương",
          summary: "Quy tắc khai phương một tích, một thương và nhân/chia hai căn thức bậc hai: $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ ($a, b \\ge 0$).",
          sections: [
            {
              heading: "1. Khai phương một tích và nhân các căn thức",
              content: `
                <p class="mb-2">Với các số $a \\ge 0, b \\ge 0$, ta có:</p>
                <div class="p-3 bg-purple-50 dark:bg-purple-950/60 rounded-xl border border-purple-200 dark:border-purple-800 text-center text-purple-900 dark:text-purple-200 text-sm font-bold my-2">
                  $$\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$$
                </div>
                <p class="text-xs text-rose-600 dark:text-rose-400 font-medium">Lưu ý: Không được tách tổng thành căn! Nói chung $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$.</p>
              `
            },
            {
              heading: "2. Khai phương một thương và chia các căn thức",
              content: `
                <p class="mb-2">Với số $a \\ge 0$ và số $b > 0$, ta có:</p>
                <div class="p-3 bg-purple-50 dark:bg-purple-950/60 rounded-xl border border-purple-200 dark:border-purple-800 text-center text-purple-900 dark:text-purple-200 text-sm font-bold my-2">
                  $$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$$
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Tính giá trị của biểu thức $\\sqrt{12} \\cdot \\sqrt{3}$:",
              options: ["6", "36", "4", "2√3"],
              ans: 0,
              exp: "√12 · √3 = √(12 · 3) = √36 = 6."
            },
            {
              q: "Tính giá trị của biểu thức $\\frac{\\sqrt{80}}{\\sqrt{5}}$:",
              options: ["4", "16", "2√5", "8"],
              ans: 0,
              exp: "√(80/5) = √16 = 4."
            },
            {
              q: "Biến đổi đưa thừa số vào trong dấu căn của $-3\\sqrt{2}$:",
              options: ["$-\\sqrt{18}$", "$\\sqrt{18}$", "$\\sqrt{-18}$", "$-6$"],
              ans: 0,
              exp: "Với k < 0, k√a = -√(k²a). Ở đây -3 < 0 nên -3√2 = -√(3² · 2) = -√18."
            },
            {
              q: "Khẳng định nào sau đây đúng với mọi $a > 0, b > 0$?",
              options: ["$\\sqrt{a+b} < \\sqrt{a} + \\sqrt{b}$", "$\\sqrt{a+b} = \\sqrt{a} + \\sqrt{b}$", "$\\sqrt{a+b} > \\sqrt{a} + \\sqrt{b}$", "Không so sánh được"],
              ans: 0,
              exp: "Bình phương hai vế: (√(a+b))² = a + b, trong khi (√a + √b)² = a + 2√ab + b > a + b. Do đó √(a+b) < √a + √b."
            }
          ]
        },
        {
          id: "bai-9",
          number: "Bài 9",
          title: "Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai",
          tag: "Kĩ năng rút gọn & Trục căn",
          summary: "Đưa thừa số ra ngoài/vào trong dấu căn, trục căn thức ở mẫu, nhân liên hợp và phương pháp rút gọn phân thức đại số chứa căn.",
          sections: [
            {
              heading: "1. Đưa thừa số ra ngoài & vào trong dấu căn",
              content: `
                <div class="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <p>&bull; <strong>Đưa ra ngoài:</strong> $\\sqrt{A^2 B} = |A|\\sqrt{B}$ ($B \\ge 0$). Nếu $A \\ge 0$ thì $A\\sqrt{B}$; nếu $A < 0$ thì $-A\\sqrt{B}$.</p>
                  <p>&bull; <strong>Đưa vào trong:</strong> $A\\sqrt{B} = \\sqrt{A^2 B}$ nếu $A \\ge 0$; và $A\\sqrt{B} = -\\sqrt{A^2 B}$ nếu $A < 0$.</p>
                </div>
              `
            },
            {
              heading: "2. Khử mẫu và trục căn thức ở mẫu",
              content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-2 text-xs">
                  <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div class="font-bold text-purple-600 mb-1">Mẫu là căn đơn:</div>
                    <div class="text-center font-bold">$$\\frac{A}{\\sqrt{B}} = \\frac{A\\sqrt{B}}{B} \\quad (B > 0)$$</div>
                  </div>
                  <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div class="font-bold text-purple-600 mb-1">Mẫu là tổng/hiệu căn (Nhân liên hợp):</div>
                    <div class="text-center font-bold">$$\\frac{C}{\\sqrt{A} \\pm \\sqrt{B}} = \\frac{C(\\sqrt{A} \\mp \\sqrt{B})}{A - B}$$</div>
                  </div>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Rút gọn biểu thức $3\\sqrt{8} - \\sqrt{18} + 5\\sqrt{2}$:",
              options: ["$8\\sqrt{2}$", "$4\\sqrt{2}$", "$10\\sqrt{2}$", "$6\\sqrt{2}$"],
              ans: 0,
              exp: "3√8 = 3·2√2 = 6√2; √18 = 3√2. Biểu thức = 6√2 - 3√2 + 5√2 = 8√2."
            },
            {
              q: "Trục căn thức ở mẫu của biểu thức $\\frac{2}{\\sqrt{3} - 1}$:",
              options: ["$\\sqrt{3} + 1$", "$\\sqrt{3} - 1$", "$2(\\sqrt{3} + 1)$", "$\\frac{\\sqrt{3}+1}{2}$"],
              ans: 0,
              exp: "Nhân cả tử và mẫu với (√3 + 1): 2(√3 + 1) / ((√3)² - 1²) = 2(√3 + 1)/2 = √3 + 1."
            },
            {
              q: "Rút gọn biểu thức $P = \\frac{x - 9}{\\sqrt{x} + 3}$ với $x \\ge 0$:",
              options: ["$\\sqrt{x} - 3$", "$\\sqrt{x} + 3$", "$x - 3$", "$\\frac{1}{\\sqrt{x}-3}$"],
              ans: 0,
              exp: "x - 9 = (√x)² - 3² = (√x - 3)(√x + 3). Chia cho mẫu (√x + 3) thu được √x - 3."
            },
            {
              q: "Biểu thức liên hợp của $3 - 2\\sqrt{2}$ là:",
              options: ["$3 + 2\\sqrt{2}$", "$-3 + 2\\sqrt{2}$", "$-3 - 2\\sqrt{2}$", "$2\\sqrt{2} - 3$"],
              ans: 0,
              exp: "Biểu thức liên hợp của a - b là a + b, do đó liên hợp của 3 - 2√2 là 3 + 2√2."
            }
          ]
        },
        {
          id: "bai-10",
          number: "Bài 10",
          title: "Căn bậc ba và căn thức bậc ba",
          tag: "Căn bậc ba $\\sqrt[3]{a}$",
          summary: "Định nghĩa căn bậc ba, tính chất $\\sqrt[3]{a^3} = a$ với mọi số thực $a$ (kể cả số âm), các phép biến đổi căn bậc ba.",
          sections: [
            {
              heading: "1. Khái niệm căn bậc ba",
              content: `
                <p class="mb-2">Căn bậc ba của một số $a$ là số $x$ sao cho $x^3 = a$, ký hiệu là $\\sqrt[3]{a}$.</p>
                <div class="p-3 bg-purple-50 dark:bg-purple-950/60 rounded-xl border border-purple-200 dark:border-purple-800 text-center text-purple-900 dark:text-purple-200 text-sm font-bold my-2">
                  $$(\\sqrt[3]{a})^3 = a \\quad \\text{và} \\quad \\sqrt[3]{a^3} = a \\quad (\\forall a \\in \\mathbb{R})$$
                </div>
                <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs text-blue-900 dark:text-blue-300">
                  <strong>Khác biệt căn bậc hai:</strong> Mọi số thực $a$ đều có duy nhất một căn bậc ba (số âm có căn bậc ba là số âm, không cần điều kiện $a \\ge 0$).
                </div>
              `
            },
            {
              heading: "2. Tính chất phép tính căn bậc ba",
              content: `
                <ul class="list-disc pl-5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <li>$\\sqrt[3]{ab} = \\sqrt[3]{a} \\cdot \\sqrt[3]{b}$</li>
                  <li>$\\sqrt[3]{\\frac{a}{b}} = \\frac{\\sqrt[3]{a}}{\\sqrt[3]{b}}$ ($b \\neq 0$)</li>
                  <li>Nếu $a < b$ thì $\\sqrt[3]{a} < \\sqrt[3]{b}$</li>
                </ul>
              `
            }
          ],
          quiz: [
            {
              q: "Giá trị của $\\sqrt[3]{-64}$ là:",
              options: ["-4", "4", "±4", "Không xác định"],
              ans: 0,
              exp: "Vì (-4)³ = -64 nên căn bậc ba của -64 là -4."
            },
            {
              q: "Rút gọn biểu thức $\\sqrt[3]{54} - \\sqrt[3]{16}$:",
              options: ["$\\sqrt[3]{2}$", "$2\\sqrt[3]{2}$", "$\\sqrt[3]{38}$", "$3\\sqrt[3]{2}$"],
              ans: 0,
              exp: "∛54 = ∛(27·2) = 3∛2; ∛16 = ∛(8·2) = 2∛2. Biểu thức = 3∛2 - 2∛2 = ∛2."
            },
            {
              q: "Căn thức $\\sqrt[3]{2x - 5}$ xác định khi nào?",
              options: ["Xác định với mọi x ∈ ℝ", "x ≥ 2.5", "x > 2.5", "x ≠ 2.5"],
              ans: 0,
              exp: "Căn bậc ba xác định với mọi biểu thức số thực, không đòi hỏi biểu thức dưới căn phải không âm."
            },
            {
              q: "Tính giá trị của biểu thức $(\\sqrt[3]{7})^3 + \\sqrt[3]{(-5)^3}$:",
              options: ["2", "12", "-2", "0"],
              ans: 0,
              exp: "(∛7)³ = 7; ∛((-5)³) = -5. Tổng bằng 7 + (-5) = 2."
            }
          ]
        }
      ]
    },
    {
      id: "chuong-4",
      number: "IV",
      title: "Hệ Thức Lượng Trong Tam Giác Vuông",
      subtitle: "Bài 11 và Bài 12 • Tỉ số lượng giác góc nhọn, hệ thức cạnh - góc và ứng dụng đo đạc thực tế",
      badge: "Tập Một • Hình học",
      color: "amber",
      lessons: [
        {
          id: "bai-11",
          number: "Bài 11",
          title: "Tỉ số lượng giác của góc nhọn",
          tag: "Định nghĩa & Giá trị đặc biệt",
          summary: "Định nghĩa sin, cos, tan, cot trong tam giác vuông; mối liên hệ hai góc phụ nhau; hệ thức cơ bản $\\sin^2\\alpha + \\cos^2\\alpha = 1$ và bảng góc đặc biệt 30°, 45°, 60°.",
          svgKey: "trig_right_triangle",
          sections: [
            {
              heading: "1. Định nghĩa tỉ số lượng giác",
              content: `
                <p class="mb-2">Cho tam giác $ABC$ vuông tại $A$, xét góc nhọn $B = \\alpha$:</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs my-2">
                  <div class="p-2.5 bg-amber-50 dark:bg-amber-950/60 rounded-xl border border-amber-300 dark:border-amber-700">
                    <div class="font-bold text-amber-700 dark:text-amber-300">$$\\sin B = \\frac{AC}{BC}$$</div>
                  </div>
                  <div class="p-2.5 bg-amber-50 dark:bg-amber-950/60 rounded-xl border border-amber-300 dark:border-amber-700">
                    <div class="font-bold text-amber-700 dark:text-amber-300">$$\\cos B = \\frac{AB}{BC}$$</div>
                  </div>
                  <div class="p-2.5 bg-amber-50 dark:bg-amber-950/60 rounded-xl border border-amber-300 dark:border-amber-700">
                    <div class="font-bold text-amber-700 dark:text-amber-300">$$\\tan B = \\frac{AC}{AB}$$</div>
                  </div>
                  <div class="p-2.5 bg-amber-50 dark:bg-amber-950/60 rounded-xl border border-amber-300 dark:border-amber-700">
                    <div class="font-bold text-amber-700 dark:text-amber-300">$$\\cot B = \\frac{AB}{AC}$$</div>
                  </div>
                </div>
                <p class="text-xs text-slate-500 italic text-center">Câu vè dễ nhớ: "Sao Đi Học (Sin = Đối/Huyền), Cứ Khóc Hoài (Cos = Kề/Huyền), Thôi Đừng Khóc (Tan = Đối/Kề), Có Kẹo Đây (Cot = Kề/Đối)"</p>
              `
            },
            {
              heading: "2. Hệ thức lượng giác cơ bản & Hai góc phụ nhau",
              content: `
                <div class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <p>&bull; <strong>Hai góc phụ nhau ($\\alpha + \\beta = 90^\\circ$):</strong> $\\sin\\alpha = \\cos\\beta$, $\\cos\\alpha = \\sin\\beta$, $\\tan\\alpha = \\cot\\beta$, $\\cot\\alpha = \\tan\\beta$.</p>
                  <p>&bull; <strong>Các công thức cơ bản:</strong></p>
                  <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-center space-y-1">
                    <div>$$\\sin^2\\alpha + \\cos^2\\alpha = 1$$</div>
                    <div>$$\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}, \\quad \\tan\\alpha \\cdot \\cot\\alpha = 1$$</div>
                  </div>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Tam giác ABC vuông tại A có AB = 3cm, AC = 4cm, BC = 5cm. Giá trị của sin B bằng:",
              options: ["$\\frac{4}{5}$", "$\\frac{3}{5}$", "$\\frac{4}{3}$", "$\\frac{3}{4}$"],
              ans: 0,
              exp: "sin B = cạnh đối / cạnh huyền = AC / BC = 4 / 5."
            },
            {
              q: "Nếu góc nhọn α có $\\sin\\alpha = \\frac{1}{2}$ thì $\\cos\\alpha$ bằng:",
              options: ["$\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$", "$\\frac{3}{4}$"],
              ans: 0,
              exp: "cos²α = 1 - sin²α = 1 - (1/2)² = 3/4 ⇒ cos α = √3 / 2 (vì α nhọn nên cos α > 0)."
            },
            {
              q: "Khẳng định nào sau đây là ĐÚNG?",
              options: ["$\\sin 30^\\circ = \\cos 60^\\circ = \\frac{1}{2}$", "$\\tan 45^\\circ = \\frac{\\sqrt{2}}{2}$", "$\\sin 45^\\circ = \\cos 45^\\circ = 1$", "$\\tan 60^\\circ = \\frac{1}{\\sqrt{3}}$"],
              ans: 0,
              exp: "30° và 60° là hai góc phụ nhau nên sin 30° = cos 60° = 1/2."
            },
            {
              q: "Giá trị của biểu thức $P = \\sin^2 25^\\circ + \\sin^2 65^\\circ$ là:",
              options: ["1", "0", "2", "0.5"],
              ans: 0,
              exp: "Vì 25° + 65° = 90° nên sin 65° = cos 25°. Do đó P = sin² 25° + cos² 25° = 1."
            }
          ]
        },
        {
          id: "bai-12",
          number: "Bài 12",
          title: "Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng",
          tag: "Giải tam giác & Thực tế",
          summary: "Công thức tính cạnh góc vuông theo cạnh huyền hoặc cạnh góc vuông kia; 4 bước đo đạc thực tế chiều cao và khoảng cách.",
          svgKey: "trig_applications",
          sections: [
            {
              heading: "1. Hệ thức giữa cạnh và góc",
              content: `
                <p class="mb-2">Trong tam giác vuông, mỗi cạnh góc vuông bằng:</p>
                <div class="p-3 bg-amber-50 dark:bg-amber-950/60 rounded-xl border border-amber-200 dark:border-amber-800 text-xs space-y-1">
                  <p>&bull; <strong>Cạnh huyền nhân sin góc đối:</strong> $b = a \\sin B, \\quad c = a \\sin C$</p>
                  <p>&bull; <strong>Cạnh huyền nhân cos góc kề:</strong> $b = a \\cos C, \\quad c = a \\cos B$</p>
                  <p>&bull; <strong>Cạnh góc vuông kia nhân tan góc đối:</strong> $b = c \\tan B, \\quad c = b \\tan C$</p>
                  <p>&bull; <strong>Cạnh góc vuông kia nhân cot góc kề:</strong> $b = c \\cot C, \\quad c = b \\cot B$</p>
                </div>
              `
            },
            {
              heading: "2. Quy trình đo chiều cao và khoảng cách thực tế",
              content: `
                <ol class="list-decimal pl-5 space-y-1 text-xs text-slate-700 dark:text-slate-300">
                  <li><strong>Dựng mô hình:</strong> Vẽ tam giác vuông biểu diễn chiều cao cột cờ / toà nhà ($h$), bóng nắng hoặc khoảng cách giác kế ($d$), góc nâng quan sát ($\\alpha$).</li>
                  <li><strong>Thiết lập phương trình:</strong> $h = d \\cdot \\tan\\alpha$ (cộng thêm chiều cao giác kế nếu có).</li>
                  <li><strong>Tính toán và làm tròn:</strong> Bấm máy tính và làm tròn theo yêu cầu đề bài.</li>
                </ol>
              `
            }
          ],
          quiz: [
            {
              q: "Một chiếc thang dài 4m tựa vào tường tạo với mặt đất góc 60°. Chiều cao chân thang lên tường là:",
              options: ["$2\\sqrt{3}$ m (khoảng 3.46m)", "2 m", "4 m", "$2\\sqrt{2}$ m"],
              ans: 0,
              exp: "Chiều cao h = cạnh huyền · sin 60° = 4 · (√3/2) = 2√3 m ≈ 3.46m."
            },
            {
              q: "Một toà nhà có bóng trên mặt đất dài 20m khi góc nâng mặt trời là 30°. Chiều cao toà nhà xấp xỉ:",
              options: ["11.55 m", "34.64 m", "10 m", "20 m"],
              ans: 0,
              exp: "Chiều cao h = cạnh kề · tan 30° = 20 · (1/√3) ≈ 11.55m."
            },
            {
              q: "Cho tam giác ABC vuông tại A có cạnh huyền a = 10cm, góc B = 30°. Độ dài cạnh AC là:",
              options: ["5 cm", "$5\\sqrt{3}$ cm", "10 cm", "2.5 cm"],
              ans: 0,
              exp: "Cạnh đối AC = a · sin B = 10 · sin 30° = 10 · 0.5 = 5cm."
            },
            {
              q: "Giải tam giác vuông là gì?",
              options: ["Tìm tất cả các cạnh và các góc chưa biết của tam giác vuông khi biết trước 2 yếu tố (trong đó có ít nhất 1 cạnh)", "Chỉ tính diện tích tam giác", "Chỉ tìm chiều cao tam giác", "Chứng minh tam giác đó vuông"],
              ans: 0,
              exp: "Giải tam giác vuông nghĩa là tìm số đo tất cả các cạnh và góc còn lại của tam giác vuông từ các yếu tố đã cho."
            }
          ]
        }
      ]
    },
    {
      id: "chuong-5",
      number: "V",
      title: "Đường Tròn",
      subtitle: "Bài 13 đến Bài 17 • Dây và cung, độ dài cung, diện tích quạt tròn, vị trí tương đối của đường thẳng và hai đường tròn",
      badge: "Tập Một • Hình học",
      color: "rose",
      lessons: [
        {
          id: "bai-13",
          number: "Bài 13",
          title: "Mở đầu về đường tròn",
          tag: "Định nghĩa & Tính chất đối xứng",
          summary: "Tập hợp điểm $OM = R$, vị trí điểm trong/trên/ngoài; đường kính, tính chất đối xứng tâm và trục của đường tròn.",
          svgKey: "circle_intro",
          sections: [
            {
              heading: "1. Định nghĩa và vị trí tương đối của một điểm",
              content: `
                <p class="mb-2">Đường tròn tâm $O$ bán kính $R$ ($R > 0$) ký hiệu là $(O; R)$.</p>
                <div class="grid grid-cols-3 gap-2 text-center text-xs my-2">
                  <div class="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border">
                    <div class="font-bold text-blue-600">OM < R</div>
                    <p>M nằm TRONG đường tròn</p>
                  </div>
                  <div class="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border">
                    <div class="font-bold text-emerald-600">OM = R</div>
                    <p>M nằm TRÊN đường tròn</p>
                  </div>
                  <div class="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border">
                    <div class="font-bold text-rose-600">OM > R</div>
                    <p>M nằm NGOÀI đường tròn</p>
                  </div>
                </div>
              `
            },
            {
              heading: "2. Tính chất đối xứng",
              content: `
                <ul class="list-disc pl-5 space-y-1 text-xs text-slate-700 dark:text-slate-300">
                  <li><strong>Tâm đối xứng:</strong> Tâm $O$ là tâm đối xứng duy nhất của đường tròn.</li>
                  <li><strong>Trục đối xứng:</strong> Mọi đường thẳng đi qua tâm $O$ đều là trục đối xứng của đường tròn (có vô số trục đối xứng).</li>
                </ul>
              `
            }
          ],
          quiz: [
            {
              q: "Cho đường tròn (O; 5cm) và điểm A cách O một khoảng 4cm. Vị trí của A là:",
              options: ["Nằm trong đường tròn", "Nằm trên đường tròn", "Nằm ngoài đường tròn", "Trùng với tâm O"],
              ans: 0,
              exp: "Vì khoảng cách OA = 4cm < R = 5cm nên điểm A nằm bên trong đường tròn."
            },
            {
              q: "Đường tròn có bao nhiêu trục đối xứng?",
              options: ["Vô số trục đối xứng", "1 trục", "2 trục", "4 trục"],
              ans: 0,
              exp: "Bất kỳ đường thẳng nào đi qua tâm đường tròn đều là trục đối xứng, do đó đường tròn có vô số trục đối xứng."
            },
            {
              q: "Dây cung lớn nhất của đường tròn (O; R) có độ dài bằng:",
              options: ["2R (đường kính)", "R", "πR", "4R"],
              ans: 0,
              exp: "Đường kính là dây cung đi qua tâm và là dây lớn nhất của đường tròn, có độ dài bằng 2R."
            },
            {
              q: "Tâm đường tròn ngoại tiếp tam giác vuông nằm ở đâu?",
              options: ["Trung điểm cạnh huyền", "Trực tâm tam giác", "Đỉnh góc vuông", "Trọng tâm tam giác"],
              ans: 0,
              exp: "Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền, do đó trung điểm cạnh huyền cách đều 3 đỉnh và là tâm đường tròn ngoại tiếp."
            }
          ]
        },
        {
          id: "bai-14",
          number: "Bài 14",
          title: "Cung và dây của một đường tròn",
          tag: "Định lí vuông góc & Khoảng cách",
          summary: "Mối liên hệ giữa đường kính và dây: đường kính vuông góc dây thì đi qua trung điểm dây và chia đôi cung bị chắn; liên hệ dây và khoảng cách từ tâm đến dây.",
          sections: [
            {
              heading: "1. Đường kính vuông góc với dây cung",
              content: `
                <div class="p-3 bg-rose-50 dark:bg-rose-950/60 rounded-xl border border-rose-200 dark:border-rose-800 text-xs space-y-1.5">
                  <p><strong>Định lí 1:</strong> Đường kính vuông góc với một dây thì đi qua <em>trung điểm</em> của dây ấy và chia đôi cung bị chắn.</p>
                  <p><strong>Định lí đảo:</strong> Đường kính đi qua trung điểm của một dây <em>không đi qua tâm</em> thì vuông góc với dây ấy.</p>
                </div>
              `
            },
            {
              heading: "2. Liên hệ giữa dây và khoảng cách từ tâm",
              content: `
                <div class="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                  <p>&bull; Hai dây bằng nhau khi và chỉ khi chúng cách đều tâm ($AB = CD \\iff OH = OK$).</p>
                  <p>&bull; Dây nào lớn hơn thì dây đó gần tâm hơn ($AB > CD \\iff OH < OK$).</p>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Cho đường tròn (O; 10cm) và dây AB = 16cm. Khoảng cách từ tâm O đến dây AB là:",
              options: ["6 cm", "8 cm", "4 cm", "12 cm"],
              ans: 0,
              exp: "Gọi H là trung điểm AB ⇒ AH = 8cm, OH ⊥ AB. Áp dụng định lí Pythagore trong tam giác vuông OAH: OH = √(OA² - AH²) = √(10² - 8²) = √36 = 6cm."
            },
            {
              q: "Trong một đường tròn, nếu dây AB > dây CD thì:",
              options: ["Khoảng cách từ tâm đến AB nhỏ hơn khoảng cách từ tâm đến CD", "Khoảng cách từ tâm đến AB lớn hơn", "Hai dây cách đều tâm", "Không so sánh được"],
              ans: 0,
              exp: "Dây càng lớn thì càng gần tâm đường tròn hơn, do đó khoảng cách từ tâm đến dây lớn sẽ nhỏ hơn."
            },
            {
              q: "Đường kính vuông góc với một dây cung thì:",
              options: ["Đi qua trung điểm của dây đó và chia đôi cung bị chắn", "Song song với dây đó", "Không cắt dây đó", "Trùng với dây đó"],
              ans: 0,
              exp: "Theo định lí cơ bản về mối quan hệ giữa đường kính và dây: đường kính vuông góc với một dây thì đi qua trung điểm của dây và chia đôi cung bị chắn."
            },
            {
              q: "Cho (O; R), hai dây AB và CD bằng nhau. Kết luận nào sau đây đúng?",
              options: ["Cung nhỏ AB bằng cung nhỏ CD và khoảng cách từ O đến hai dây bằng nhau", "Cung AB lớn hơn cung CD", "AB phải song song CD", "AB phải cắt CD"],
              ans: 0,
              exp: "Trong một đường tròn, hai dây bằng nhau căng hai cung bằng nhau và cách đều tâm."
            }
          ]
        },
        {
          id: "bai-15",
          number: "Bài 15",
          title: "Độ dài cung tròn, diện tích hình quạt tròn và hình vành khuyên",
          tag: "Công thức tính toán",
          summary: "Công thức chu vi đường tròn $C = 2\\pi R$, độ dài cung $l = \\frac{\\pi R n}{180^\\circ}$, diện tích hình tròn $S = \\pi R^2$, hình quạt $S_q = \\frac{\\pi R^2 n}{360^\\circ}$ và hình vành khuyên.",
          svgKey: "sector_annulus",
          sections: [
            {
              heading: "1. Chu vi đường tròn và độ dài cung tròn",
              content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs my-2">
                  <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border text-center">
                    <div class="font-bold text-rose-600 mb-1">Chu vi đường tròn:</div>
                    $$C = 2\\pi R = \\pi d$$
                  </div>
                  <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border text-center">
                    <div class="font-bold text-rose-600 mb-1">Độ dài cung $n^\\circ$:</div>
                    $$l = \\frac{\\pi R n}{180^\\circ} = \\frac{C \\cdot n}{360^\\circ}$$
                  </div>
                </div>
              `
            },
            {
              heading: "2. Diện tích hình tròn, hình quạt và hình vành khuyên",
              content: `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs my-2">
                  <div class="p-2.5 bg-rose-50 dark:bg-rose-950/60 rounded-xl border border-rose-200 dark:border-rose-800 text-center">
                    <div class="font-bold text-rose-700 dark:text-rose-300">Hình tròn:</div>
                    $$S = \\pi R^2$$
                  </div>
                  <div class="p-2.5 bg-rose-50 dark:bg-rose-950/60 rounded-xl border border-rose-200 dark:border-rose-800 text-center">
                    <div class="font-bold text-rose-700 dark:text-rose-300">Quạt tròn $n^\\circ$:</div>
                    $$S_q = \\frac{\\pi R^2 n}{360^\\circ} = \\frac{l R}{2}$$
                  </div>
                  <div class="p-2.5 bg-rose-50 dark:bg-rose-950/60 rounded-xl border border-rose-200 dark:border-rose-800 text-center">
                    <div class="font-bold text-rose-700 dark:text-rose-300">Vành khuyên ($R > r$):</div>
                    $$S_{vk} = \\pi(R^2 - r^2)$$
                  </div>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Độ dài cung 60° của đường tròn bán kính 6cm là:",
              options: ["$2\\pi$ cm", "$6\\pi$ cm", "$\\pi$ cm", "$3\\pi$ cm"],
              ans: 0,
              exp: "l = (π · R · n) / 180 = (π · 6 · 60) / 180 = 2π cm."
            },
            {
              q: "Diện tích hình quạt tròn ứng với cung 90° của đường tròn bán kính 4cm là:",
              options: ["$4\\pi$ cm²", "$16\\pi$ cm²", "$8\\pi$ cm²", "$2\\pi$ cm²"],
              ans: 0,
              exp: "S = (π · R² · n) / 360 = (π · 4² · 90) / 360 = 16π / 4 = 4π cm²."
            },
            {
              q: "Diện tích hình vành khuyên giới hạn bởi hai đường tròn đồng tâm có bán kính 5cm và 3cm là:",
              options: ["$16\\pi$ cm²", "$4\\pi$ cm²", "$25\\pi$ cm²", "$8\\pi$ cm²"],
              ans: 0,
              exp: "S = π(R² - r²) = π(5² - 3²) = π(25 - 9) = 16π cm²."
            },
            {
              q: "Khi bán kính đường tròn tăng lên gấp đôi thì diện tích hình tròn tăng lên:",
              options: ["4 lần", "2 lần", "8 lần", "Không đổi"],
              ans: 0,
              exp: "S = πR². Khi R' = 2R thì S' = π(2R)² = 4πR² = 4S, tức là diện tích tăng gấp 4 lần."
            }
          ]
        },
        {
          id: "bai-16",
          number: "Bài 16",
          title: "Vị trí tương đối của đường thẳng và đường tròn",
          tag: "Tiếp tuyến & Dấu hiệu nhận biết",
          summary: "3 vị trí tương đối theo khoảng cách $d$ và bán kính $R$; tính chất tiếp tuyến của đường tròn: bán kính vuông góc tiếp tuyến tại tiếp điểm.",
          sections: [
            {
              heading: "1. Ba vị trí tương đối giữa đường thẳng và đường tròn",
              content: `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-center my-2">
                  <div class="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border">
                    <div class="font-bold text-blue-600">d < R (Cắt nhau)</div>
                    <p class="text-[11px] text-slate-500">Có 2 điểm chung</p>
                  </div>
                  <div class="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-rose-300 dark:border-rose-700 bg-rose-50/50">
                    <div class="font-bold text-rose-600">d = R (Tiếp xúc)</div>
                    <p class="text-[11px] text-slate-500">Có 1 điểm chung duy nhất (Tiếp tuyến)</p>
                  </div>
                  <div class="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border">
                    <div class="font-bold text-slate-600">d > R (Không giao)</div>
                    <p class="text-[11px] text-slate-500">0 điểm chung</p>
                  </div>
                </div>
              `
            },
            {
              heading: "2. Định lí tiếp tuyến của đường tròn",
              content: `
                <div class="p-3 bg-rose-50 dark:bg-rose-950/60 rounded-xl border border-rose-200 dark:border-rose-800 text-xs space-y-1">
                  <p><strong>Tính chất:</strong> Nếu một đường thẳng là tiếp tuyến của một đường tròn thì nó <strong>vuông góc với bán kính</strong> đi qua tiếp điểm.</p>
                  <p><strong>Dấu hiệu nhận biết:</strong> Nếu một đường thẳng đi qua một điểm của đường tròn và vuông góc với bán kính đi qua điểm đó thì đường thẳng ấy là tiếp tuyến của đường tròn.</p>
                </div>
              `
            }
          ],
          quiz: [
            {
              q: "Đường thẳng d cách tâm O của đường tròn (O; 7cm) một khoảng 7cm. Vị trí tương đối là:",
              options: ["Tiếp xúc nhau (d là tiếp tuyến)", "Cắt nhau tại 2 điểm", "Không giao nhau", "Đi qua tâm O"],
              ans: 0,
              exp: "Vì d = R = 7cm nên đường thẳng tiếp xúc với đường tròn tại 1 tiếp điểm duy nhất."
            },
            {
              q: "Từ điểm M nằm ngoài đường tròn (O; R) kẻ hai tiếp tuyến MA, MB (A, B là tiếp điểm). Khẳng định nào sau đây SAI?",
              options: ["MA = 2MB", "MA = MB", "MO là tia phân giác góc AMB", "OM ⊥ AB"],
              ans: 0,
              exp: "Theo tính chất của hai tiếp tuyến cắt nhau, MA = MB chứ không thể MA = 2MB."
            },
            {
              q: "Cho tam giác ABC vuông tại A. Khi đó đường thẳng AB có vị trí tương đối thế nào với đường tròn (C; CA)?",
              options: ["AB là tiếp tuyến của đường tròn (C; CA)", "AB cắt đường tròn tại 2 điểm", "AB không giao với đường tròn", "AB đi qua tâm C"],
              ans: 0,
              exp: "Điểm A thuộc đường tròn (C; CA) và AB ⊥ CA tại A (do tam giác ABC vuông tại A), do đó AB là tiếp tuyến của đường tròn (C; CA)."
            },
            {
              q: "Nếu đường thẳng và đường tròn có hai điểm chung thì khoảng cách d từ tâm đến đường thẳng thỏa mãn:",
              options: ["d < R", "d = R", "d > R", "d = 0"],
              ans: 0,
              exp: "Đường thẳng cắt đường tròn tại 2 điểm chung khi và chỉ khi khoảng cách d từ tâm đến đường thẳng nhỏ hơn bán kính R."
            }
          ]
        },
        {
          id: "bai-17",
          number: "Bài 17",
          title: "Vị trí tương đối của hai đường tròn",
          tag: "Khoảng cách tâm & Bán kính",
          summary: "Hệ thức liên hệ giữa đoạn nối tâm $d = O_1O_2$ và các bán kính $R, r$: ngoài nhau, tiếp xúc ngoài/trong, cắt nhau, đựng nhau; tính chất đường nối tâm.",
          svgKey: "two_circles_positions",
          sections: [
            {
              heading: "1. Bảng phân loại 5 vị trí tương đối",
              content: `
                <div class="overflow-x-auto text-xs">
                  <table class="w-full border-collapse border border-slate-200 dark:border-slate-700">
                    <thead class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      <tr>
                        <th class="border p-2">Vị trí tương đối</th>
                        <th class="border p-2">Số điểm chung</th>
                        <th class="border p-2">Hệ thức khoảng cách tâm $d = O_1O_2$</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-700 text-slate-600 dark:text-slate-400">
                      <tr><td class="p-2 font-medium">Ở ngoài nhau</td><td class="p-2 text-center">0</td><td class="p-2 text-center font-bold">$$d > R + r$$</td></tr>
                      <tr class="bg-rose-50/50 dark:bg-rose-950/20"><td class="p-2 font-medium text-rose-600">Tiếp xúc ngoài</td><td class="p-2 text-center">1</td><td class="p-2 text-center font-bold">$$d = R + r$$</td></tr>
                      <tr class="bg-blue-50/50 dark:bg-blue-950/20"><td class="p-2 font-medium text-blue-600">Cắt nhau</td><td class="p-2 text-center">2</td><td class="p-2 text-center font-bold">$$|R - r| < d < R + r$$</td></tr>
                      <tr class="bg-rose-50/50 dark:bg-rose-950/20"><td class="p-2 font-medium text-rose-600">Tiếp xúc trong</td><td class="p-2 text-center">1</td><td class="p-2 text-center font-bold">$$d = R - r \\quad (R > r)$$</td></tr>
                      <tr><td class="p-2 font-medium">Đựng nhau (trong nhau)</td><td class="p-2 text-center">0</td><td class="p-2 text-center font-bold">$$d < R - r$$</td></tr>
                    </tbody>
                  </table>
                </div>
              `
            },
            {
              heading: "2. Tính chất đường nối tâm",
              content: `
                <p class="text-xs text-slate-700 dark:text-slate-300">
                  Đường nối tâm là trục đối xứng của hình tạo bởi hai đường tròn.
                  <br>&bull; Nếu hai đường tròn tiếp xúc nhau thì tiếp điểm nằm trên đường nối tâm.
                  <br>&bull; Nếu hai đường tròn cắt nhau thì đường nối tâm là <strong>đường trung trực của dây chung</strong>.
                </p>
              `
            }
          ],
          quiz: [
            {
              q: "Hai đường tròn (O; 5cm) và (O'; 3cm) có OO' = 8cm. Vị trí tương đối là:",
              options: ["Tiếp xúc ngoài", "Tiếp xúc trong", "Cắt nhau", "Ở ngoài nhau"],
              ans: 0,
              exp: "Ta có OO' = 8cm = 5cm + 3cm = R + r. Do đó hai đường tròn tiếp xúc ngoài."
            },
            {
              q: "Hai đường tròn (O; 6cm) và (O'; 2cm) có OO' = 4cm. Vị trí tương đối là:",
              options: ["Tiếp xúc trong", "Tiếp xúc ngoài", "Cắt nhau", "Đựng nhau"],
              ans: 0,
              exp: "Ta có OO' = 4cm = 6cm - 2cm = R - r. Do đó hai đường tròn tiếp xúc trong."
            },
            {
              q: "Hai đường tròn (O; 5cm) và (O'; 4cm) có OO' = 7cm. Vị trí tương đối là:",
              options: ["Cắt nhau tại 2 điểm", "Ở ngoài nhau", "Tiếp xúc ngoài", "Đựng nhau"],
              ans: 0,
              exp: "Ta có R - r = 1cm < OO' = 7cm < R + r = 9cm. Do đó hai đường tròn cắt nhau tại 2 điểm phân biệt."
            },
            {
              q: "Nếu hai đường tròn cắt nhau tại A và B thì đoạn thẳng nối hai tâm OO' có quan hệ gì với AB?",
              options: ["OO' là đường trung trực của đoạn thẳng AB", "OO' song song với AB", "OO' bằng AB", "OO' trùng với AB"],
              ans: 0,
              exp: "Tính chất đường nối tâm: đường nối hai tâm là đường trung trực của dây chung AB."
            }
          ]
        }
      ]
    }
  ]
};
