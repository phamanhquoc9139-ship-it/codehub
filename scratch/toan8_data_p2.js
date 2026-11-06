// Toán 8 - Data Part 2: Tập Hai (Chương VI đến Chương X: Bài 21 đến Bài 39 & Bảng tổng kết)
module.exports = {
  chapters: [
    {
      id: 'chuong-6',
      code: 'Chương VI',
      title: 'PHÂN THỨC ĐẠI SỐ',
      desc: 'Khái niệm, điều kiện xác định, tính chất cơ bản, quy tắc đổi dấu, rút gọn và các phép tính cộng, trừ, nhân, chia phân thức.',
      badge: 'Đại số 8 • Tập 2',
      color: 'cyan',
      icon: 'fa-divide',
      lessons: [
        {
          id: 'bai-21',
          lessonNum: 'Bài 21',
          title: 'Phân thức đại số',
          goals: 'Nắm vững định nghĩa phân thức $\\frac{A}{B}$, hai phân thức bằng nhau $AD=BC$ và tìm điều kiện xác định của phân thức.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Định nghĩa:</strong> Phân thức đại số (phân thức) là một biểu thức có dạng $\\dfrac{A}{B}$, trong đó $A, B$ là những đa thức và $B$ khác đa thức $0$. $A$ là tử thức, $B$ là mẫu thức.</p>
              <p>• Mỗi đa thức được coi là một phân thức với mẫu bằng $1$. Mỗi số thực $a$ là một phân thức.</p>
              <p>• <strong>Hai phân thức bằng nhau:</strong> $\\dfrac{A}{B} = \\dfrac{C}{D} \\iff A \\cdot D = B \\cdot C$ (với $B, D \\ne 0$).</p>
              <p>• <strong>Điều kiện xác định:</strong> Điều kiện xác định của phân thức $\\dfrac{A}{B}$ là điều kiện của biến để mẫu thức $B \\ne 0$. Giá trị của phân thức tại $x = a$ chỉ xác định khi $a$ thỏa mãn ĐKXĐ.</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Tìm điều kiện xác định',
              q: 'Tìm điều kiện xác định của phân thức $P = \\dfrac{2x + 1}{x^2 - 4}$.',
              sol: `
                Điều kiện xác định là mẫu thức khác $0$:
                $$x^2 - 4 \\ne 0 \\iff (x - 2)(x + 2) \\ne 0 \\iff x \\ne 2 \\text{ và } x \\ne -2.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Điều kiện xác định của phân thức $\\dfrac{x - 1}{x - 3}$ là:',
              opts: ['$x \\ne 3$', '$x \\ne 1$', '$x \\ne 0$', '$x > 3$'],
              ans: 0,
              explain: 'Mẫu thức khác 0: $x - 3 \\ne 0 \\iff x \\ne 3$.'
            }
          ]
        },
        {
          id: 'bai-22',
          lessonNum: 'Bài 22',
          title: 'Tính chất cơ bản của phân thức đại số',
          goals: 'Vận dụng tính chất cơ bản để rút gọn phân thức, quy tắc đổi dấu và quy đồng mẫu thức nhiều phân thức.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Tính chất cơ bản:</strong></p>
              $$\\dfrac{A}{B} = \\dfrac{A \\cdot M}{B \\cdot M} \\quad (M \\ne 0); \\qquad \\dfrac{A}{B} = \\dfrac{A : N}{B : N} \\quad (N \\text{ là nhân tử chung})$$
              <p>• <strong>Quy tắc đổi dấu:</strong> $\\dfrac{A}{B} = \\dfrac{-A}{-B}; \\quad -\\dfrac{A}{B} = \\dfrac{-A}{B} = \\dfrac{A}{-B}$.</p>
              <p>• <strong>Rút gọn phân thức:</strong> Phân tích cả tử và mẫu thành nhân tử $\\rightarrow$ Chia cả tử và mẫu cho nhân tử chung.</p>
              <p>• <strong>Quy đồng mẫu thức:</strong> Tìm MTC $\\rightarrow$ Tìm nhân tử phụ $\\rightarrow$ Nhân cả tử và mẫu với nhân tử phụ tương ứng.</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Rút gọn phân thức',
              q: 'Rút gọn phân thức: $A = \\dfrac{x^2 - 2x}{x^2 - 4}$.',
              sol: `
                Phân tích tử và mẫu thành nhân tử:
                $$A = \\dfrac{x(x - 2)}{(x - 2)(x + 2)} = \\dfrac{x}{x + 2} \\quad (x \\ne \\pm 2).$$
              `
            }
          ],
          quiz: [
            {
              q: 'Rút gọn phân thức $\\dfrac{5x^2 - 5}{10(x - 1)}$ ta được:',
              opts: ['$\\dfrac{x + 1}{2}$', '$\\dfrac{x - 1}{2}$', '$\\dfrac{5(x+1)}{2}$', '$\\dfrac{x + 1}{10}$'],
              ans: 0,
              explain: '$\\dfrac{5(x-1)(x+1)}{10(x-1)} = \\dfrac{x+1}{2}$.'
            }
          ]
        },
        {
          id: 'bai-23',
          lessonNum: 'Bài 23',
          title: 'Phép cộng và phép trừ phân thức đại số',
          goals: 'Thực hiện cộng, trừ phân thức cùng mẫu và khác mẫu; nắm vững quy tắc đổi dấu trong phép trừ.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Cùng mẫu thức:</strong> Cộng/trừ tử thức, giữ nguyên mẫu thức:
              $$\\dfrac{A}{M} + \\dfrac{B}{M} = \\dfrac{A + B}{M}; \\qquad \\dfrac{A}{M} - \\dfrac{B}{M} = \\dfrac{A - B}{M}$$</p>
              <p>• <strong>Khác mẫu thức:</strong> Quy đồng mẫu thức rồi thực hiện như phân thức cùng mẫu.</p>
              <p>• <em>Chú ý phép trừ:</em> Đổi dấu toàn bộ tử thức của phân thức bị trừ khi đặt chung mẫu thức: $\\dfrac{A}{M} - \\dfrac{B}{M} = \\dfrac{A - (B)}{M}$.</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Cộng trừ phân thức',
              q: 'Thực hiện phép tính: $\\dfrac{1}{x - 1} - \\dfrac{2}{x^2 - 1}$.',
              sol: `
                MTC là $x^2 - 1 = (x - 1)(x + 1)$.<br>
                $$= \\dfrac{x + 1}{(x - 1)(x + 1)} - \\dfrac{2}{(x - 1)(x + 1)} = \\dfrac{x + 1 - 2}{(x - 1)(x + 1)} = \\dfrac{x - 1}{(x - 1)(x + 1)} = \\dfrac{1}{x + 1}.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Kết quả của $\\dfrac{2x}{x+1} + \\dfrac{2}{x+1}$ là:',
              opts: ['2', '$2x$', '$\\dfrac{4}{x+1}$', '$\\dfrac{2(x-1)}{x+1}$'],
              ans: 0,
              explain: '$\\dfrac{2x + 2}{x + 1} = \\dfrac{2(x + 1)}{x + 1} = 2$.'
            }
          ]
        },
        {
          id: 'bai-24',
          lessonNum: 'Bài 24',
          title: 'Phép nhân và phép chia phân thức đại số',
          goals: 'Thực hiện thành thạo nhân hai phân thức và chia hai phân thức bằng nhân với phân thức nghịch đảo.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Phép nhân phân thức:</strong> Nhân tử với tử, nhân mẫu với mẫu:
              $$\\dfrac{A}{B} \\cdot \\dfrac{C}{D} = \\dfrac{A \\cdot C}{B \\cdot D}$$</p>
              <p>• <strong>Phân thức nghịch đảo:</strong> Phân thức nghịch đảo của $\\dfrac{A}{B}$ ($A, B \\ne 0$) là $\\dfrac{B}{A}$.</p>
              <p>• <strong>Phép chia phân thức:</strong> Nhân phân thức thứ nhất với phân thức nghịch đảo của phân thức thứ hai:
              $$\\dfrac{A}{B} : \\dfrac{C}{D} = \\dfrac{A}{B} \\cdot \\dfrac{D}{C} = \\dfrac{A \\cdot D}{B \\cdot C} \\quad (C \\ne 0)$$</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Thực hiện phép chia phân thức',
              q: 'Tính: $\\dfrac{x^2 - 9}{2x} : \\dfrac{x + 3}{4x^2}$.',
              sol: `
                $$= \\dfrac{(x - 3)(x + 3)}{2x} \\cdot \\dfrac{4x^2}{x + 3} = \\dfrac{(x - 3) \\cdot 4x^2}{2x} = 2x(x - 3) = 2x^2 - 6x.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Tích $\\dfrac{3x}{y} \\cdot \\dfrac{y^2}{6x^2}$ có giá trị rút gọn là:',
              opts: ['$\\dfrac{y}{2x}$', '$\\dfrac{2x}{y}$', '$\\dfrac{y^2}{2x}$', '$\\dfrac{1}{2xy}$'],
              ans: 0,
              explain: '$\\dfrac{3x \\cdot y^2}{y \\cdot 6x^2} = \\dfrac{3xy^2}{6x^2y} = \\dfrac{y}{2x}$.'
            }
          ]
        }
      ]
    },
    {
      id: 'chuong-7',
      code: 'Chương VII',
      title: 'PHƯƠNG TRÌNH BẬC NHẤT VÀ HÀM SỐ BẬC NHẤT',
      desc: 'Phương trình bậc nhất một ẩn, giải bài toán bằng cách lập phương trình, hàm số, đồ thị $y=ax+b$ và hệ số góc.',
      badge: 'Đại số 8 • Tập 2',
      color: 'violet',
      icon: 'fa-chart-line',
      lessons: [
        {
          id: 'bai-25',
          lessonNum: 'Bài 25',
          title: 'Phương trình bậc nhất một ẩn',
          goals: 'Hiểu định nghĩa, quy tắc chuyển vế, quy tắc nhân và cách giải phương trình dạng $ax+b=0\\ (a\\ne0)$.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Định nghĩa:</strong> Phương trình bậc nhất một ẩn là phương trình có dạng:
              $$\\boxed{ax + b = 0 \\quad (a \\ne 0)}$$</p>
              <p>• <strong>Nghiệm duy nhất:</strong> $ax = -b \\iff x = -\\dfrac{b}{a}$.</p>
              <p>• <strong>Hai quy tắc biến đổi tương đương:</strong></p>
              <ul class="list-disc pl-5 space-y-1">
                <li><em>Quy tắc chuyển vế:</em> Trong một phương trình, ta có thể chuyển một hạng tử từ vế này sang vế kia và đổi dấu hạng tử đó.</li>
                <li><em>Quy tắc nhân với một số:</em> Ta có thể nhân (hoặc chia) cả hai vế của phương trình với cùng một số khác $0$.</li>
              </ul>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Giải phương trình bậc nhất',
              q: 'Giải phương trình: $3x - 5 = x + 7$.',
              sol: `
                $$3x - x = 7 + 5 \\iff 2x = 12 \\iff x = 6.$$
                Vậy tập nghiệm của phương trình là $S = \\{6\\}$.
              `
            }
          ],
          quiz: [
            {
              q: 'Nghiệm của phương trình $2x + 6 = 0$ là:',
              opts: ['$x = -3$', '$x = 3$', '$x = -6$', '$x = 0$'],
              ans: 0,
              explain: '$2x = -6 \\iff x = -3$.'
            }
          ]
        },
        {
          id: 'bai-26',
          lessonNum: 'Bài 26',
          title: 'Giải bài toán bằng cách lập phương trình',
          goals: 'Nắm vững 3 bước giải bài toán bằng cách lập phương trình: chọn ẩn, lập phương trình, giải và đối chiếu điều kiện.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Quy trình 3 bước giải:</strong></p>
              <ol class="list-decimal pl-5 space-y-1">
                <li><strong>Bước 1. Lập phương trình:</strong>
                  <br>- Chọn ẩn số và đặt điều kiện thích hợp cho ẩn (kèm đơn vị).
                  <br>- Biểu diễn các đại lượng chưa biết theo ẩn và các đại lượng đã biết.
                  <br>- Lập phương trình biểu thị mối quan hệ giữa các đại lượng.
                </li>
                <li><strong>Bước 2. Giải phương trình</strong> vừa lập.</li>
                <li><strong>Bước 3. Trả lời:</strong> Kiểm tra các nghiệm tìm được có thỏa mãn điều kiện của ẩn không và kết luận bài toán thực tế.</li>
              </ol>
              <p>• <em>Các dạng toán thường gặp:</em> Chuyển động ($s = v \\cdot t$); năng suất ($A = N \\cdot t$); quan hệ số học; bài toán tỉ lệ phần trăm, lãi suất.</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Toán chuyển động',
              q: 'Một xe máy đi từ A đến B với vận tốc 40 km/h rồi quay về với vận tốc 30 km/h. Tổng thời gian cả đi và về là 3,5 giờ. Tính quãng đường AB.',
              sol: `
                Gọi độ dài quãng đường AB là $x$ (km, $x > 0$).<br>
                Thời gian đi: $\\frac{x}{40}$ (h). Thời gian về: $\\frac{x}{30}$ (h).<br>
                Theo đề bài, tổng thời gian là $3,5$ giờ, ta có phương trình:
                $$\\frac{x}{40} + \\frac{x}{30} = 3,5 \\iff \\frac{3x + 4x}{120} = 3,5 \\iff 7x = 420 \\iff x = 60 \\text{ (thỏa mãn)}.$$
                Vậy quãng đường AB dài $60$ km.
              `
            }
          ],
          quiz: [
            {
              q: 'Một ô tô đi với vận tốc $v$ (km/h) trong thời gian $t$ (h). Biểu thức quãng đường $s$ là:',
              opts: ['$s = v \\cdot t$', '$s = \\dfrac{v}{t}$', '$s = \\dfrac{t}{v}$', '$s = v + t$'],
              ans: 0,
              explain: 'Quãng đường bằng vận tốc nhân thời gian: $s = v \\cdot t$.'
            }
          ]
        },
        {
          id: 'bai-27',
          lessonNum: 'Bài 27',
          title: 'Khái niệm hàm số và đồ thị của hàm số',
          goals: 'Hiểu định nghĩa hàm số $y=f(x)$, xác định tọa độ điểm trên mặt phẳng tọa độ $Oxy$ và biểu diễn đồ thị hàm số.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Định nghĩa:</strong> Nếu đại lượng $y$ phụ thuộc vào đại lượng thay đổi $x$ sao cho với mỗi giá trị của $x$, ta luôn xác định được <strong>chỉ một</strong> giá trị tương ứng của $y$ thì $y$ được gọi là <em>hàm số</em> của $x$, và $x$ gọi là <em>biến số</em>. Kí hiệu: $y = f(x)$.</p>
              <p>• <strong>Mặt phẳng tọa độ $Oxy$:</strong> Gồm hai trục số $Ox$ (trục hoành) và $Oy$ (trục tung) vuông góc với nhau tại gốc $O$. Điểm $M(x_0; y_0)$ có hoành độ $x_0$ và tung độ $y_0$.</p>
              <p>• <strong>Đồ thị hàm số:</strong> Đồ thị của hàm số $y = f(x)$ là tập hợp tất cả các điểm biểu diễn các cặp giá trị tương ứng $(x; f(x))$ trên mặt phẳng tọa độ.</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Tính giá trị của hàm số',
              q: 'Cho hàm số $y = f(x) = 2x - 3$. Tính $f(0), f(2), f(-1)$.',
              sol: `
                - $f(0) = 2(0) - 3 = -3$<br>
                - $f(2) = 2(2) - 3 = 1$<br>
                - $f(-1) = 2(-1) - 3 = -5$.
              `
            }
          ],
          quiz: [
            {
              q: 'Điểm $M(2; -3)$ trên mặt phẳng tọa độ $Oxy$ có hoành độ là:',
              opts: ['2', '-3', '5', '-1'],
              ans: 0,
              explain: 'Điểm $(x; y)$ có hoành độ là $x = 2$, tung độ là $y = -3$.'
            }
          ]
        },
        {
          id: 'bai-28',
          lessonNum: 'Bài 28',
          title: 'Hàm số bậc nhất và đồ thị của hàm số bậc nhất',
          goals: 'Nắm vững dạng hàm số bậc nhất $y=ax+b\\ (a\\ne0)$, tính đồng biến/nghịch biến và cách vẽ đồ thị đường thẳng.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Định nghĩa:</strong> Hàm số bậc nhất là hàm số được cho bởi công thức:
              $$\\boxed{y = ax + b \\quad (a \\ne 0)}$$</p>
              <p>• <strong>Tính chất biến thiên:</strong></p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Khi $a > 0$: Hàm số <em>đồng biến</em> trên $\\mathbb{R}$ (đường thẳng đi lên từ trái sang phải).</li>
                <li>Khi $a < 0$: Hàm số <em>nghịch biến</em> trên $\\mathbb{R}$ (đường thẳng đi xuống từ trái sang phải).</li>
              </ul>
              <p>• <strong>Đồ thị hàm số $y = ax + b$ ($a \\ne 0$):</strong> Là một đường thẳng:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Cắt trục tung tại điểm $A(0; b)$ (với $b$ là tung độ gốc).</li>
                <li>Cắt trục hoành tại điểm $B\\left(-\\frac{b}{a}; 0\\right)$.</li>
                <li>Khi $b = 0$, đồ thị là đường thẳng $y = ax$ đi qua gốc tọa độ $O(0; 0)$.</li>
              </ul>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Vẽ đồ thị hàm số bậc nhất',
              q: 'Xác định tọa độ giao điểm của đồ thị hàm số $y = 2x - 4$ với hai trục tọa độ.',
              sol: `
                - Cho $x = 0 \\implies y = -4$. Giao điểm với trục tung là $A(0; -4)$.<br>
                - Cho $y = 0 \\implies 2x - 4 = 0 \\implies x = 2$. Giao điểm với trục hoành là $B(2; 0)$.<br>
                Đồ thị hàm số là đường thẳng đi qua hai điểm $A(0; -4)$ và $B(2; 0)$.
              `
            }
          ],
          quiz: [
            {
              q: 'Hàm số $y = -3x + 1$ là hàm số:',
              opts: ['Nghịch biến trên R vì $a = -3 < 0$', 'Đồng biến trên R vì $a = -3 < 0$', 'Đồng biến trên R vì $b = 1 > 0$', 'Không đồng biến cũng không nghịch biến'],
              ans: 0,
              explain: 'Vì hệ số $a = -3 < 0$ nên hàm số nghịch biến trên R.'
            }
          ]
        },
        {
          id: 'bai-29',
          lessonNum: 'Bài 29',
          title: 'Hệ số góc của đường thẳng',
          goals: 'Hiểu ý nghĩa hệ số góc $a$, góc tạo bởi đường thẳng $y=ax+b$ với trục $Ox$ và điều kiện để hai đường thẳng song song, cắt nhau, trùng nhau.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Hệ số góc:</strong> Trong phương trình đường thẳng $y = ax + b$ ($a \\ne 0$), hệ số $a$ gọi là <em>hệ số góc</em> của đường thẳng.</p>
              <p>• <strong>Góc tạo bởi đường thẳng $y = ax + b$ và trục $Ox$:</strong></p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Nếu $a > 0$: Góc $\\alpha$ tạo với chiều dương trục $Ox$ là <em>góc nhọn</em> ($a$ càng lớn thì góc $\\alpha$ càng lớn).</li>
                <li>Nếu $a < 0$: Góc $\\alpha$ tạo với chiều dương trục $Ox$ là <em>góc tù</em>.</li>
              </ul>
              <p>• <strong>Vị trí tương đối của hai đường thẳng:</strong> Cho $(d): y = ax + b$ và $(d'): y = a'x + b'$ ($a, a' \\ne 0$):</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>$(d) \\parallel (d') \\iff a = a' \\text{ và } b \\ne b'$.</li>
                <li>$(d) \\equiv (d') \\iff a = a' \\text{ và } b = b'$.</li>
                <li>$(d)$ cắt $(d') \\iff a \\ne a'$. (Đặc biệt $(d) \\perp (d') \\iff a \\cdot a' = -1$).</li>
              </ul>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Xác định vị trí tương đối của hai đường thẳng',
              q: 'Cho hai đường thẳng $(d_1): y = 2x + 3$ và $(d_2): y = 2x - 1$. Hãy nêu vị trí tương đối của chúng.',
              sol: `
                Ta có: $a_1 = 2, b_1 = 3$ và $a_2 = 2, b_2 = -1$.<br>
                Vì $a_1 = a_2 = 2$ và $b_1 \\ne b_2$ ($3 \\ne -1$), nên hai đường thẳng $(d_1)$ và $(d_2)$ <strong>song song</strong> với nhau.
              `
            }
          ],
          quiz: [
            {
              q: 'Hai đường thẳng $y = 3x - 2$ và $y = mx + 5$ song song với nhau khi:',
              opts: ['$m = 3$', '$m = -2$', '$m \\ne 3$', '$m = 5$'],
              ans: 0,
              explain: 'Hai đường thẳng song song khi hệ số góc bằng nhau ($m = 3$) và tung độ gốc khác nhau ($-2 \\ne 5$).'
            }
          ]
        }
      ]
    },
    {
      id: 'chuong-8',
      code: 'Chương VIII',
      title: 'MỞ ĐẦU VỀ TÍNH XÁC SUẤT CỦA BIẾN CỐ',
      desc: 'Phép thử ngẫu nhiên, không gian mẫu, biến cố, cách tính xác suất cổ điển và mối liên hệ với xác suất thực nghiệm.',
      badge: 'Xác suất 8 • Tập 2',
      color: 'purple',
      icon: 'fa-dice',
      lessons: [
        {
          id: 'bai-30',
          lessonNum: 'Bài 30',
          title: 'Kết quả có thể và kết quả thuận lợi',
          goals: 'Mô tả không gian các kết quả có thể của phép thử ngẫu nhiên; xác định kết quả thuận lợi cho một biến cố.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Phép thử ngẫu nhiên:</strong> Là một hành động hoặc thí nghiệm mà kết quả của nó không thể biết trước chính xác, nhưng biết trước tập hợp tất cả các kết quả có thể xảy ra.</p>
              <p>• <strong>Kết quả thuận lợi:</strong> Những kết quả của phép thử làm cho một biến cố xảy ra được gọi là các kết quả thuận lợi cho biến cố đó.</p>
              <p>• <em>Phương pháp liệt kê:</em> Dùng sơ đồ hình cây, bảng hai chiều hoặc liệt kê có thứ tự để không bỏ sót hoặc đếm trùng.</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Tung một con xúc xắc 6 mặt',
              q: 'Liệt kê các kết quả thuận lợi cho biến cố A: "Số chấm xuất hiện là số nguyên tố".',
              sol: `
                Không gian kết quả có thể: $\\{1; 2; 3; 4; 5; 6\\}$.<br>
                Các số nguyên tố trong các kết quả là: $2, 3, 5$.<br>
                Vậy có $3$ kết quả thuận lợi cho biến cố A là $\\{2; 3; 5\\}$.
              `
            }
          ],
          quiz: [
            {
              q: 'Tung một đồng xu cân đối hai lần. Số kết quả có thể xảy ra là:',
              opts: ['4', '2', '6', '8'],
              ans: 0,
              explain: 'Các kết quả: (Sấp, Sấp), (Sấp, Ngửa), (Ngửa, Sấp), (Ngửa, Ngửa) $\\rightarrow$ có 4 kết quả.'
            }
          ]
        },
        {
          id: 'bai-31',
          lessonNum: 'Bài 31',
          title: 'Cách tính xác suất của biến cố bằng tỉ số',
          goals: 'Áp dụng công thức tính xác suất cổ điển $P(E) = \\frac{n(E)}{n(\\Omega)}$ khi các kết quả đồng khả năng.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <div class="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-800 text-center font-bold">
                Công thức tính xác suất (khi các kết quả đồng khả năng):
                $$\\boxed{P(E) = \\dfrac{n(E)}{n(\\Omega)} = \\dfrac{\\text{Số kết quả thuận lợi cho } E}{\\text{Tổng số kết quả có thể}}}$$
              </div>
              <p>• <strong>Tính chất cơ bản:</strong></p>
              <ul class="list-disc pl-5 space-y-1">
                <li>$0 \\le P(E) \\le 1$ với mọi biến cố $E$.</li>
                <li>Xác suất của biến cố không thể bằng $0$.</li>
                <li>Xác suất của biến cố chắc chắn bằng $1$.</li>
              </ul>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Tính xác suất rút thẻ',
              q: 'Một hộp có 10 tấm thẻ cùng loại được đánh số từ 1 đến 10. Rút ngẫu nhiên một thẻ. Tính xác suất để rút được thẻ ghi số chia hết cho 3.',
              sol: `
                Tổng số kết quả có thể: $n = 10$.<br>
                Các số chia hết cho 3 từ 1 đến 10 là: $3, 6, 9$ $\\implies$ có $3$ kết quả thuận lợi.<br>
                Xác suất của biến cố là: $P = \\dfrac{3}{10} = 0,3$.
              `
            }
          ],
          quiz: [
            {
              q: 'Gieo một con xúc xắc cân đối. Xác suất để xuất hiện mặt chẵn chấm là:',
              opts: ['$\\dfrac{1}{2}$', '$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{2}{3}$'],
              ans: 0,
              explain: 'Mặt chẵn là $\\{2; 4; 6\\}$ (3 kết quả thuận lợi). Xác suất $P = \\frac{3}{6} = \\frac{1}{2}$.'
            }
          ]
        },
        {
          id: 'bai-32',
          lessonNum: 'Bài 32',
          title: 'Mối liên hệ giữa xác suất thực nghiệm với xác suất và ứng dụng',
          goals: 'Hiểu khái niệm xác suất thực nghiệm $P_{TN} = \\frac{m}{N}$; nắm quy luật khi $N$ lớn thì xác suất thực nghiệm tiến gần xác suất lí thuyết.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Xác suất thực nghiệm:</strong> Thực hiện phép thử $N$ lần, trong đó biến cố $E$ xuất hiện $m$ lần. Tỉ số $\\dfrac{m}{N}$ gọi là <em>xác suất thực nghiệm</em> của biến cố $E$ sau $N$ lần thử.</p>
              <p>• <strong>Quy luật số lớn:</strong> Khi số lần lặp lại phép thử $N$ càng lớn thì xác suất thực nghiệm của một biến cố càng dao động xung quanh và ngày càng tiến gần đến xác suất lí thuyết của biến cố đó.</p>
              <p>• <em>Ứng dụng:</em> Ước lượng xác suất khi không thể đếm đồng khả năng (tỉ lệ hạt nảy mầm, tỉ lệ sản phẩm lỗi, dự báo rủi ro bảo hiểm).</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Ước lượng số lượng bằng xác suất thực nghiệm',
              q: 'Kiểm tra 500 bóng đèn xuất xưởng thấy có 15 bóng bị hỏng. Ước tính trong một lô 20000 bóng đèn thì có khoảng bao nhiêu bóng hỏng?',
              sol: `
                Xác suất thực nghiệm bóng hỏng: $P_{TN} = \\dfrac{15}{500} = 0,03$.<br>
                Ước lượng số bóng đèn hỏng trong lô 20000 bóng là:
                $$20000 \\times 0,03 = 600\\text{ (bóng)}.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Tung một đồng xu 100 lần thấy có 52 lần xuất hiện mặt sấp. Xác suất thực nghiệm xuất hiện mặt sấp là:',
              opts: ['0,52', '0,48', '0,5', '52'],
              ans: 0,
              explain: '$P_{TN} = \\dfrac{52}{100} = 0,52$.'
            }
          ]
        }
      ]
    },
    {
      id: 'chuong-9',
      code: 'Chương IX',
      title: 'TAM GIÁC ĐỒNG DẠNG',
      desc: 'Tam giác đồng dạng, ba trường hợp đồng dạng (c.c.c, c.g.c, g.g), định lí Pythagore và đồng dạng tam giác vuông.',
      badge: 'Hình học 8 • Tập 2',
      color: 'rose',
      icon: 'fa-draw-polygon',
      lessons: [
        {
          id: 'bai-33',
          lessonNum: 'Bài 33',
          title: 'Hai tam giác đồng dạng',
          goals: 'Hiểu định nghĩa hai tam giác đồng dạng $\\triangle ABC \\sim \\triangle A\'B\'C\'$, tỉ số đồng dạng $k$ và tỉ số chu vi.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Định nghĩa:</strong> Tam giác $A'B'C'$ gọi là đồng dạng với tam giác $ABC$ nếu:
              $$\\widehat{A'} = \\widehat{A}; \\quad \\widehat{B'} = \\widehat{B}; \\quad \\widehat{C'} = \\widehat{C}; \\qquad \\dfrac{A'B'}{AB} = \\dfrac{B'C'}{BC} = \\dfrac{C'A'}{CA} = k$$
              ($k$ gọi là <em>tỉ số đồng dạng</em>). Kí hiệu: $\\triangle A'B'C' \\sim \\triangle ABC$.</p>
              <p>• <strong>Tính chất:</strong> Tỉ số chu vi của hai tam giác đồng dạng bằng tỉ số đồng dạng $k$. Tỉ số diện tích bằng $k^2$.</p>
              <p>• <strong>Định lí nhận biết:</strong> Một đường thẳng cắt hai cạnh của tam giác và song song với cạnh còn lại tạo thành một tam giác mới đồng dạng với tam giác đã cho.</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Tính tỉ số chu vi và diện tích',
              q: 'Cho $\\triangle A\'B\'C\' \\sim \\triangle ABC$ theo tỉ số $k = \\dfrac{2}{3}$. Biết chu vi $\\triangle ABC$ là $18$ cm và diện tích là $36\\text{ cm}^2$. Tính chu vi và diện tích của $\\triangle A\'B\'C\'.$',
              sol: `
                - Chu vi $\\triangle A'B'C' = k \\times 18 = \\dfrac{2}{3} \\times 18 = 12\\text{ cm}$.<br>
                - Diện tích $\\triangle A'B'C' = k^2 \\times S_{ABC} = \\left(\\dfrac{2}{3}\\right)^2 \\times 36 = \\dfrac{4}{9} \\times 36 = 16\\text{ cm}^2$.
              `
            }
          ],
          quiz: [
            {
              q: 'Nếu $\\triangle ABC \\sim \\triangle DEF$ theo tỉ số $k = 2$ thì $\\triangle DEF \\sim \\triangle ABC$ theo tỉ số:',
              opts: ['$\\dfrac{1}{2}$', '2', '4', '$\\dfrac{1}{4}$'],
              ans: 0,
              explain: 'Tỉ số đồng dạng ngược lại là $\\dfrac{1}{k} = \\dfrac{1}{2}$.'
            }
          ]
        },
        {
          id: 'bai-34',
          lessonNum: 'Bài 34',
          title: 'Ba trường hợp đồng dạng của hai tam giác',
          goals: 'Nắm vững và vận dụng 3 trường hợp đồng dạng của tam giác thường: cạnh - cạnh - cạnh (c.c.c), cạnh - góc - cạnh (c.g.c), góc - góc (g.g).',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Trường hợp 1 (c.c.c):</strong> Nếu ba cạnh của tam giác này tỉ lệ với ba cạnh của tam giác kia thì hai tam giác đó đồng dạng:
              $$\\dfrac{A'B'}{AB} = \\dfrac{B'C'}{BC} = \\dfrac{A'C'}{AC} \\implies \\triangle A'B'C' \\sim \\triangle ABC$$</p>
              <p>• <strong>Trường hợp 2 (c.g.c):</strong> Nếu hai cạnh của tam giác này tỉ lệ với hai cạnh của tam giác kia và hai góc tạo bởi các cặp cạnh đó bằng nhau thì hai tam giác đồng dạng:
              $$\\dfrac{A'B'}{AB} = \\dfrac{A'C'}{AC} \\text{ và } \\widehat{A'} = \\widehat{A} \\implies \\triangle A'B'C' \\sim \\triangle ABC$$</p>
              <p>• <strong>Trường hợp 3 (g.g):</strong> Nếu hai góc của tam giác này lần lượt bằng hai góc của tam giác kia thì hai tam giác đó đồng dạng:
              $$\\widehat{A'} = \\widehat{A} \\text{ và } \\widehat{B'} = \\widehat{B} \\implies \\triangle A'B'C' \\sim \\triangle ABC$$</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Chứng minh tam giác đồng dạng',
              q: 'Cho tam giác $ABC$ có $AB = 4, AC = 6$. Trên cạnh $AB, AC$ lấy $D, E$ sao cho $AD = 2, AE = 3$. Chứng minh $\\triangle ADE \\sim \\triangle ABC$.',
              sol: `
                Xét $\\triangle ADE$ và $\\triangle ABC$, ta có:<br>
                - $\\widehat{A}$ là góc chung.<br>
                - $\\dfrac{AD}{AB} = \\dfrac{2}{4} = \\dfrac{1}{2}$; $\\dfrac{AE}{AC} = \\dfrac{3}{6} = \\dfrac{1}{2} \\implies \\dfrac{AD}{AB} = \\dfrac{AE}{AC}$.<br>
                Do đó $\\triangle ADE \\sim \\triangle ABC$ (c.g.c).
              `
            }
          ],
          quiz: [
            {
              q: 'Hai tam giác có hai cặp góc bằng nhau thì đồng dạng theo trường hợp nào?',
              opts: ['Góc - góc (g.g)', 'Cạnh - góc - cạnh (c.g.c)', 'Cạnh - cạnh - cạnh (c.c.c)', 'Cạnh huyền - góc nhọn'],
              ans: 0,
              explain: 'Chỉ cần 2 cặp góc bằng nhau là đủ kết luận đồng dạng theo trường hợp g.g.'
            }
          ]
        },
        {
          id: 'bai-35',
          lessonNum: 'Bài 35',
          title: 'Định lí Pythagore và ứng dụng',
          goals: 'Nắm vững định lí Pythagore thuận $a^2=b^2+c^2$, định lí đảo để kiểm tra tam giác vuông và ứng dụng tính khoảng cách.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <div class="p-3 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-800 text-center font-bold">
                Định lí Pythagore:
                Trong một tam giác vuông, bình phương của cạnh huyền bằng tổng các bình phương của hai cạnh góc vuông:
                $$\\boxed{BC^2 = AB^2 + AC^2 \\quad (\\text{với } \\triangle ABC \\text{ vuông tại } A)}$$
              </div>
              <p>• <strong>Định lí Pythagore đảo:</strong> Nếu một tam giác có bình phương của một cạnh bằng tổng các bình phương của hai cạnh kia thì tam giác đó là tam giác vuông.</p>
              <p>• <em>Các bộ ba số Pythagore thường gặp:</em> $(3, 4, 5)$; $(6, 8, 10)$; $(5, 12, 13)$; $(7, 24, 25); (9, 12, 15)$.</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Tính cạnh huyền tam giác vuông',
              q: 'Cho tam giác vuông có hai cạnh góc vuông lần lượt là $6$ cm và $8$ cm. Tính độ dài cạnh huyền.',
              sol: `
                Gọi cạnh huyền là $c$. Áp dụng định lí Pythagore:
                $$c^2 = 6^2 + 8^2 = 36 + 64 = 100 \\implies c = \\sqrt{100} = 10\\text{ cm}.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Tam giác có độ dài ba cạnh nào sau đây là tam giác vuông?',
              opts: ['5 cm, 12 cm, 13 cm', '4 cm, 5 cm, 6 cm', '6 cm, 7 cm, 8 cm', '3 cm, 4 cm, 6 cm'],
              ans: 0,
              explain: 'Ta có $5^2 + 12^2 = 25 + 144 = 169 = 13^2$. Do đó tam giác này vuông theo định lí đảo.'
            }
          ]
        },
        {
          id: 'bai-36',
          lessonNum: 'Bài 36',
          title: 'Các trường hợp đồng dạng của hai tam giác vuông',
          goals: 'Nắm vững 3 trường hợp đồng dạng riêng cho tam giác vuông: góc nhọn, hai cạnh góc vuông và cạnh huyền - cạnh góc vuông.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• Hai tam giác vuông đồng dạng khi có một trong các dấu hiệu sau:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li><strong>Góc nhọn:</strong> Tam giác vuông này có một góc nhọn bằng một góc nhọn của tam giác vuông kia.</li>
                <li><strong>Hai cạnh góc vuông:</strong> Hai cạnh góc vuông của tam giác này tỉ lệ với hai cạnh góc vuông của tam giác kia.</li>
                <li><strong>Cạnh huyền và cạnh góc vuông:</strong> Cạnh huyền và một cạnh góc vuông của tam giác vuông này tỉ lệ với cạnh huyền và cạnh góc vuông của tam giác vuông kia.</li>
              </ul>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Đo chiều cao cây gián tiếp',
              q: 'Một cột cờ cao $h$ đổ bóng dài $6$ m. Cùng lúc đó một cọc tiêu cao $1,5$ m đổ bóng dài $2$ m. Tính chiều cao cột cờ.',
              sol: `
                Do tia nắng mặt trời song song, tam giác vuông tạo bởi cột cờ và bóng đồng dạng với tam giác vuông tạo bởi cọc tiêu và bóng:<br>
                $$\\frac{h}{1,5} = \\frac{6}{2} = 3 \\implies h = 1,5 \\cdot 3 = 4,5\\text{ m}.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Hai tam giác vuông đồng dạng nếu:',
              opts: ['Có một góc nhọn bằng nhau', 'Có một cạnh bằng nhau', 'Có cùng diện tích', 'Có cùng chu vi'],
              ans: 0,
              explain: 'Vì sẵn có góc vuông $90^\\circ$, chỉ cần thêm một góc nhọn bằng nhau là đủ tiêu chuẩn góc - góc.'
            }
          ]
        },
        {
          id: 'bai-37',
          lessonNum: 'Bài 37',
          title: 'Hình đồng dạng',
          goals: 'Hiểu khái niệm hình đồng dạng, đồng dạng phối cảnh (tâm vị tự) và nhận diện các hình đồng dạng trong thực tiễn.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Hình đồng dạng:</strong> Hai hình gọi là đồng dạng nếu chúng có cùng hình dạng nhưng có thể khác nhau về kích thước (phóng to hoặc thu nhỏ).</p>
              <p>• <strong>Hình đồng dạng phối cảnh:</strong> Lấy một điểm $O$ làm tâm phối cảnh. Với mỗi điểm $M$ của hình $\\mathcal{H}$, lấy điểm $M'$ trên tia $OM$ sao cho $OM' = k \\cdot OM$ ($k > 0$). Khi đó hình $\\mathcal{H}'$ gồm các điểm $M'$ gọi là hình đồng dạng phối cảnh của $\\mathcal{H}$ theo tỉ số $k$.</p>
              <p>• <em>Mọi hình vuông, mọi đường tròn, mọi tam giác đều đều đồng dạng với nhau.</em></p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Nhận diện hình đồng dạng',
              q: 'Hai hình tròn bán kính $R_1 = 3$ cm và $R_2 = 5$ cm có đồng dạng với nhau không?',
              sol: `
                Có. Bất kì hai đường tròn nào cũng có cùng hình dạng nên chúng luôn đồng dạng với nhau theo tỉ số bán kính $k = \\frac{5}{3}$.
              `
            }
          ],
          quiz: [
            {
              q: 'Cặp hình nào sau đây LUÔN LUÔN đồng dạng với nhau?',
              opts: ['Hai hình vuông bất kì', 'Hai hình chữ nhật bất kì', 'Hai hình thoi bất kì', 'Hai hình bình hành bất kì'],
              ans: 0,
              explain: 'Hai hình vuông bất kì luôn có 4 góc vuông và 4 cạnh bằng nhau nên luôn đồng dạng.'
            }
          ]
        }
      ]
    },
    {
      id: 'chuong-10',
      code: 'Chương X',
      title: 'MỘT SỐ HÌNH KHỐI TRONG THỰC TIỄN',
      desc: 'Hình chóp tam giác đều và hình chóp tứ giác đều: đặc điểm, diện tích xung quanh và thể tích.',
      badge: 'Hình học không gian 8 • Tập 2',
      color: 'orange',
      icon: 'fa-shapes',
      lessons: [
        {
          id: 'bai-38',
          lessonNum: 'Bài 38',
          title: 'Hình chóp tam giác đều',
          goals: 'Nhận biết đỉnh, cạnh bên, mặt bên (tam giác cân), mặt đáy (tam giác đều), trung đoạn và công thức tính $S_{xq}, V$.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Đặc điểm:</strong> Đáy là tam giác đều. Các mặt bên là các tam giác cân bằng nhau có chung đỉnh. Các cạnh bên bằng nhau.</p>
              <p>• <strong>Trung đoạn ($d$):</strong> Là đường cao vẽ từ đỉnh của một mặt bên tam giác cân xuống cạnh đáy.</p>
              <p>• <strong>Đường cao ($h$):</strong> Đoạn thẳng nối đỉnh hình chóp với tâm của đáy (vuông góc với mặt phẳng đáy).</p>
              <div class="p-3 bg-orange-50 dark:bg-orange-950/30 rounded-xl border border-orange-200 dark:border-orange-800 text-center font-bold">
                Công thức:
                $$\\boxed{S_{xq} = p \\cdot d; \\qquad S_{tp} = S_{xq} + S_{đáy}; \\qquad V = \\dfrac{1}{3} S_{đáy} \\cdot h}$$
                ($p$ là nửa chu vi đáy, $d$ là trung đoạn, $h$ là chiều cao hình chóp)
              </div>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Tính diện tích xung quanh hình chóp tam giác đều',
              q: 'Một hình chóp tam giác đều có cạnh đáy bằng $6$ cm và trung đoạn bằng $8$ cm. Tính diện tích xung quanh.',
              sol: `
                Nửa chu vi đáy: $p = \\dfrac{6 \\times 3}{2} = 9$ cm.<br>
                Diện tích xung quanh:
                $$S_{xq} = p \\cdot d = 9 \\times 8 = 72\\text{ cm}^2.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Mặt bên của hình chóp tam giác đều là hình gì?',
              opts: ['Tam giác cân', 'Tam giác đều', 'Tam giác vuông', 'Hình chữ nhật'],
              ans: 0,
              explain: 'Các mặt bên của hình chóp đều là các tam giác cân bằng nhau.'
            }
          ]
        },
        {
          id: 'bai-39',
          lessonNum: 'Bài 39',
          title: 'Hình chóp tứ giác đều',
          goals: 'Nhận biết hình chóp tứ giác đều (đáy là hình vuông, mặt bên là tam giác cân); tính $S_{xq}, S_{tp}, V$ hình chóp.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Đặc điểm:</strong> Đáy là hình vuông. Bốn mặt bên là bốn tam giác cân bằng nhau có chung đỉnh.</p>
              <p>• <strong>Đường cao ($h$):</strong> Nối đỉnh chóp với giao điểm hai đường chéo của hình vuông đáy.</p>
              <div class="p-3 bg-orange-50 dark:bg-orange-950/30 rounded-xl border border-orange-200 dark:border-orange-800 text-center font-bold">
                Công thức:
                $$\\boxed{S_{xq} = p \\cdot d; \\qquad V = \\dfrac{1}{3} S_{đáy} \\cdot h = \\dfrac{1}{3} a^2 \\cdot h}$$
                ($a$ là cạnh đáy hình vuông, $p = 2a$ là nửa chu vi đáy, $d$ là trung đoạn)
              </div>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Tính thể tích kim tự tháp',
              q: 'Mô hình kim tự tháp có dạng hình chóp tứ giác đều có cạnh đáy $10$ cm và chiều cao $12$ cm. Tính thể tích khối chóp.',
              sol: `
                Diện tích đáy: $S_{đáy} = 10^2 = 100\\text{ cm}^2$.<br>
                Thể tích hình chóp:
                $$V = \\dfrac{1}{3} S_{đáy} \\cdot h = \\dfrac{1}{3} \\cdot 100 \\cdot 12 = 400\\text{ cm}^3.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Thể tích hình chóp tứ giác đều có diện tích đáy $30\\text{ cm}^2$ và chiều cao $6$ cm là:',
              opts: ['$60\\text{ cm}^3$', '$180\\text{ cm}^3$', '$90\\text{ cm}^3$', '$30\\text{ cm}^3$'],
              ans: 0,
              explain: '$V = \\dfrac{1}{3} \\cdot 30 \\cdot 6 = 60\\text{ cm}^3$.'
            }
          ]
        }
      ]
    }
  ],

  formulaSummary: [
    { name: 'Nhân hai đơn thức', formula: 'Nhân hệ số; cộng số mũ các biến cùng cơ số: $x^m \\cdot x^n = x^{m+n}$', chap: 'Chương I' },
    { name: 'Chia đơn thức', formula: '$\\dfrac{a x^m y^n}{b x^p y^q} = \\dfrac{a}{b} x^{m-p} y^{n-q}$ với $m \\ge p, n \\ge q$', chap: 'Chương I' },
    { name: 'Hiệu hai bình phương', formula: '$A^2 - B^2 = (A - B)(A + B)$', chap: 'Chương II' },
    { name: 'Bình phương tổng/hiệu', formula: '$(A \\pm B)^2 = A^2 \\pm 2AB + B^2$', chap: 'Chương II' },
    { name: 'Lập phương tổng/hiệu', formula: '$(A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3$', chap: 'Chương II' },
    { name: 'Tổng/hiệu hai lập phương', formula: '$A^3 \\pm B^3 = (A \\pm B)(A^2 \\mp AB + B^2)$', chap: 'Chương II' },
    { name: 'Tổng các góc tứ giác', formula: '$\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$', chap: 'Chương III' },
    { name: 'Định lí Thalès', formula: 'Nếu $MN \\parallel BC \\implies \\dfrac{AM}{AB} = \\dfrac{AN}{AC} = \\dfrac{MN}{BC}$', chap: 'Chương IV' },
    { name: 'Đường trung bình tam giác', formula: '$MN \\parallel BC$ và $MN = \\dfrac{1}{2}BC$', chap: 'Chương IV' },
    { name: 'Tính chất phân giác', formula: '$\\dfrac{BD}{DC} = \\dfrac{AB}{AC}$ với $AD$ là phân giác $\\widehat{A}$', chap: 'Chương IV' },
    { name: 'Phân thức đại số', formula: '$\\dfrac{A}{B} = \\dfrac{C}{D} \\iff AD = BC$; ĐKXĐ: Mẫu khác $0$', chap: 'Chương VI' },
    { name: 'Phương trình bậc nhất', formula: '$ax + b = 0\\ (a \\ne 0) \\iff x = -\\dfrac{b}{a}$', chap: 'Chương VII' },
    { name: 'Hàm số bậc nhất', formula: '$y = ax + b\\ (a \\ne 0)$; $a > 0$ đồng biến, $a < 0$ nghịch biến', chap: 'Chương VII' },
    { name: 'Hệ số góc & vị trí tương đối', formula: '$d \\parallel d\' \\iff a = a\', b \\ne b\'$; $d$ cắt $d\' \\iff a \\ne a\'$', chap: 'Chương VII' },
    { name: 'Xác suất cổ điển', formula: '$P(E) = \\dfrac{n(E)}{n(\\Omega)}$ (khi các kết quả đồng khả năng)', chap: 'Chương VIII' },
    { name: 'Xác suất thực nghiệm', formula: '$P_{TN}(E) = \\dfrac{m}{N}$ (tiến gần xác suất lí thuyết khi $N$ lớn)', chap: 'Chương VIII' },
    { name: 'Định lí Pythagore', formula: '$BC^2 = AB^2 + AC^2$ trong tam giác vuông tại $A$', chap: 'Chương IX' },
    { name: 'Hình chóp đều', formula: '$S_{xq} = p \\cdot d$; $S_{tp} = S_{xq} + S_{đáy}$; $V = \\dfrac{1}{3} S_{đáy} \\cdot h$', chap: 'Chương X' }
  ],

  commonMistakes: [
    { title: 'Quên đổi dấu khi bỏ ngoặc phép trừ', desc: 'Khi thực hiện $(A) - (B)$, phải đổi dấu TẤT CẢ các hạng tử trong đa thức $B$, không được chỉ đổi dấu hạng tử đầu tiên.' },
    { title: 'Nhầm lẫn hằng đẳng thức tổng và hiệu lập phương', desc: '$A^3 + B^3 = (A+B)(A^2 - AB + B^2)$ mang dấu trừ ở tích $AB$; còn $A^3 - B^3 = (A-B)(A^2 + AB + B^2)$ mang dấu cộng ở tích $AB$.' },
    { title: 'Quên điều kiện xác định của phân thức', desc: 'Rút gọn phân thức xong quên đối chiếu với ĐKXĐ ban đầu của biến, dẫn đến nhận nghiệm ngoại lai làm mẫu bằng 0.' },
    { title: 'Dùng định lí Thalès khi chưa có yếu tố song song', desc: 'Chỉ được lập tỉ số Thalès khi đã chứng minh hoặc đề bài cho $MN \\parallel BC$.' },
    { title: 'Nhầm lẫn chiều cao khối chóp với trung đoạn', desc: 'Khi tính thể tích $V = \\frac{1}{3}S_{đáy}h$, $h$ là đường cao thẳng đứng vuông góc đáy, không được thay bằng trung đoạn $d$ hay cạnh bên.' },
    { title: 'Nhầm lẫn cạnh đối và cạnh kề tứ giác', desc: 'Chứng minh hình bình hành cần nhớ: hai cặp cạnh đối bằng nhau hoặc một cặp cạnh đối VỪA song song VỪA bằng nhau.' }
  ]
};
