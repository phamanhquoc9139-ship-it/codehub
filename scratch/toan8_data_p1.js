// Toán 8 - Data Part 1: Tập Một (Chương I đến Chương V: Bài 1 đến Bài 20)
module.exports = {
  chapters: [
    {
      id: 'chuong-1',
      code: 'Chương I',
      title: 'ĐA THỨC',
      desc: 'Đơn thức, đa thức thu gọn, các phép toán cộng, trừ, nhân đa thức và chia đa thức cho đơn thức.',
      badge: 'Đại số 8 • Tập 1',
      color: 'blue',
      icon: 'fa-cube',
      lessons: [
        {
          id: 'bai-1',
          lessonNum: 'Bài 1',
          title: 'Đơn thức',
          goals: 'Nhận biết đơn thức, đơn thức thu gọn; xác định hệ số, phần biến, bậc của đơn thức; thực hiện nhân hai đơn thức.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Khái niệm đơn thức:</strong> Đơn thức là biểu thức đại số chỉ gồm một số, một biến hoặc một tích giữa các số và các biến. Lũy thừa của biến phải có số mũ nguyên không âm.</p>
              <div class="p-3 bg-blue-50/70 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
                <strong>Ví dụ đơn thức:</strong> $3$; $x$; $-5x^2y$; $\\dfrac{1}{3}xy^3z$. Biểu thức như $x+y$ hay $\\dfrac{2}{x}$ không phải là đơn thức.
              </div>
              <p>• <strong>Đơn thức thu gọn:</strong> Là đơn thức chỉ gồm tích của một số với các biến mà mỗi biến chỉ xuất hiện một lần dưới dạng nâng lên lũy thừa với số mũ nguyên dương. Ví dụ: $-6x^3y$ là đơn thức thu gọn, còn $2x\\cdot 3xy$ chưa thu gọn.</p>
              <p>• <strong>Hệ số và phần biến:</strong> Trong đơn thức thu gọn, số là <em>hệ số</em>, phần còn lại là <em>phần biến</em>. Hệ số $1$ thường được viết lược (ví dụ $xy$ có hệ số là $1$), hệ số $-1$ viết dấu trừ (ví dụ $-xy$ có hệ số $-1$).</p>
              <p>• <strong>Bậc của đơn thức:</strong> Bậc của đơn thức có hệ số khác $0$ là tổng số mũ của tất cả các biến có trong đơn thức đó. Hằng số khác $0$ có bậc là $0$. Số $0$ được coi là đơn thức không có bậc.</p>
              <p>• <strong>Nhân hai đơn thức:</strong> Nhân hệ số với hệ số, nhân các lũy thừa cùng cơ số theo công thức: $x^m \\cdot x^n = x^{m+n}$.</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ 1: Xác định bậc và thu gọn đơn thức',
              q: 'Cho đơn thức $A = 2x^2y \\cdot \\left(-\\dfrac{1}{4}xy^3\\right)$. Thu gọn đơn thức $A$, chỉ rõ hệ số, phần biến và bậc của $A$.',
              sol: `
                $$A = \\left[2 \\cdot \\left(-\\dfrac{1}{4}\\right)\\right] \\cdot (x^2 \\cdot x) \\cdot (y \\cdot y^3) = -\\dfrac{1}{2}x^3y^4$$
                - Hệ số: $-\\dfrac{1}{2}$<br>
                - Phần biến: $x^3y^4$<br>
                - Bậc của $A$: Tổng số mũ của các biến là $3 + 4 = 7$.
              `
            }
          ],
          quiz: [
            {
              q: 'Bậc của đơn thức $-5x^3y^2z$ là:',
              opts: ['5', '6', '3', '7'],
              ans: 1,
              explain: 'Tổng số mũ của các biến $x, y, z$ là $3 + 2 + 1 = 6$.'
            }
          ]
        },
        {
          id: 'bai-2',
          lessonNum: 'Bài 2',
          title: 'Đa thức',
          goals: 'Nhận biết đa thức, hạng tử; biết thu gọn đa thức, tìm bậc của đa thức và tính giá trị của đa thức tại giá trị cho trước.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Đa thức:</strong> Là một tổng của những đơn thức. Mỗi đơn thức trong tổng gọi là một <em>hạng tử</em> của đa thức đó. Mỗi đơn thức cũng được coi là một đa thức.</p>
              <p>• <strong>Thu gọn đa thức:</strong> Là đưa đa thức về dạng không còn hai hạng tử nào đồng dạng bằng cách nhóm các hạng tử đồng dạng và cộng trừ hệ số.</p>
              <p>• <strong>Bậc của đa thức:</strong> Bậc của đa thức khác $0$ là bậc cao nhất của các hạng tử trong dạng thu gọn của đa thức đó. Đa thức không (số $0$) không có bậc.</p>
              <p>• <strong>Tính giá trị:</strong> Muốn tính giá trị của đa thức tại các giá trị cho trước của biến, ta thu gọn đa thức rồi thay số vào các biến và thực hiện phép tính.</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Thu gọn và tính giá trị đa thức',
              q: 'Thu gọn đa thức $P = x^2y - 3xy + 5x^2y + 3xy - 7$. Tính giá trị của $P$ tại $x=1, y=-2$.',
              sol: `
                $$P = (x^2y + 5x^2y) + (-3xy + 3xy) - 7 = 6x^2y - 7$$
                - Bậc của đa thức $P$ là bậc của hạng tử $6x^2y$, tức là $2 + 1 = 3$.<br>
                - Thay $x=1, y=-2$ vào $P$:
                $$P = 6 \\cdot 1^2 \\cdot (-2) - 7 = -12 - 7 = -19.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Bậc của đa thức $M = 2x^4 - x^2y^3 + 3x^4 - 5x^4 + 7$ sau khi thu gọn là:',
              opts: ['4', '5', '0', '3'],
              ans: 1,
              explain: 'Thu gọn: $M = (2+3-5)x^4 - x^2y^3 + 7 = -x^2y^3 + 7$. Bậc của hạng tử $-x^2y^3$ là $2 + 3 = 5$.'
            }
          ]
        },
        {
          id: 'bai-3',
          lessonNum: 'Bài 3',
          title: 'Phép cộng và phép trừ đa thức',
          goals: 'Nắm vững quy tắc cộng và trừ đa thức nhiều biến, quy tắc bỏ dấu ngoặc và thu gọn biểu thức.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Cộng hai đa thức:</strong> Đặt hai đa thức trong ngoặc với dấu cộng ở giữa, bỏ ngoặc rồi nhóm các hạng tử đồng dạng và cộng hệ số.</p>
              <p>• <strong>Trừ hai đa thức:</strong> Đặt hai đa thức trong ngoặc với dấu trừ ở giữa. Khi bỏ dấu ngoặc có dấu trừ đằng trước, phải <strong>đổi dấu tất cả các hạng tử</strong> trong ngoặc: dấu cộng thành trừ, dấu trừ thành cộng; sau đó nhóm các hạng tử đồng dạng và thu gọn.</p>
              <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 font-mono text-xs">
                $(A) - (B) = A - B$ (đổi dấu toàn bộ hạng tử của B)
              </div>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Thực hiện phép tính',
              q: 'Cho $A = 2x^2 - xy + 3y^2$ và $B = x^2 + 2xy - y^2$. Tính $A + B$ và $A - B$.',
              sol: `
                $$A + B = (2x^2 - xy + 3y^2) + (x^2 + 2xy - y^2) = (2+1)x^2 + (-1+2)xy + (3-1)y^2 = 3x^2 + xy + 2y^2$$
                $$A - B = (2x^2 - xy + 3y^2) - (x^2 + 2xy - y^2) = 2x^2 - xy + 3y^2 - x^2 - 2xy + y^2 = x^2 - 3xy + 4y^2$$
              `
            }
          ],
          quiz: [
            {
              q: 'Hiệu của hai đa thức $(3x^2 - y) - (x^2 + 2y)$ là:',
              opts: ['$2x^2 - 3y$', '$2x^2 + y$', '$4x^2 - 3y$', '$2x^2 + 3y$'],
              ans: 0,
              explain: '$(3x^2 - y) - x^2 - 2y = (3-1)x^2 + (-1-2)y = 2x^2 - 3y$.'
            }
          ]
        },
        {
          id: 'bai-4',
          lessonNum: 'Bài 4',
          title: 'Phép nhân đa thức',
          goals: 'Thực hiện thành thạo nhân đơn thức với đa thức, nhân đa thức với đa thức nhiều biến.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Nhân đơn thức với đa thức:</strong> Nhân đơn thức với từng hạng tử của đa thức rồi cộng các tích với nhau:
              $$A(B + C) = AB + AC$$</p>
              <p>• <strong>Nhân đa thức với đa thức:</strong> Nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các tích lại với nhau:
              $$(A + B)(C + D) = AC + AD + BC + BD$$</p>
              <p>• Sau khi nhân cần kiểm tra và thu gọn các hạng tử đồng dạng (nếu có).</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Khai triển tích đa thức',
              q: 'Tính: $(2x - 3)(x^2 - 2x + 1)$.',
              sol: `
                $$= 2x(x^2 - 2x + 1) - 3(x^2 - 2x + 1)$$
                $$= 2x^3 - 4x^2 + 2x - 3x^2 + 6x - 3$$
                $$= 2x^3 - 7x^2 + 8x - 3.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Tích $2xy(3x - y)$ bằng:',
              opts: ['$6x^2y - 2xy^2$', '$6x^2y - 2xy$', '$5x^2y - 2xy^2$', '$6xy - 2xy^2$'],
              ans: 0,
              explain: '$2xy \\cdot 3x - 2xy \\cdot y = 6x^2y - 2xy^2$.'
            }
          ]
        },
        {
          id: 'bai-5',
          lessonNum: 'Bài 5',
          title: 'Phép chia đa thức cho đơn thức',
          goals: 'Nắm chắc điều kiện chia hết và quy tắc chia đơn thức cho đơn thức, chia đa thức cho đơn thức.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Chia đơn thức cho đơn thức:</strong> Đơn thức $A$ chia hết cho đơn thức $B$ ($B \\ne 0$) khi mỗi biến của $B$ đều là biến của $A$ với số mũ không lớn hơn số mũ của nó trong $A$.</p>
              $$\\dfrac{a x^m y^n}{b x^p y^q} = \\dfrac{a}{b} x^{m-p} y^{n-q} \\quad (m \\ge p, n \\ge q)$$
              <p>• <strong>Chia đa thức cho đơn thức:</strong> Đa thức $A$ chia hết cho đơn thức $B$ nếu mọi hạng tử của $A$ đều chia hết cho $B$. Ta chia từng hạng tử của $A$ cho $B$ rồi cộng các kết quả lại:
              $$(A_1 + A_2 + A_3) : B = (A_1:B) + (A_2:B) + (A_3:B)$$</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Thực hiện phép chia',
              q: 'Thực hiện phép tính: $(6x^3y^2 - 9x^2y^3 + 15xy^2) : (3xy^2)$.',
              sol: `
                $$= (6x^3y^2 : 3xy^2) - (9x^2y^3 : 3xy^2) + (15xy^2 : 3xy^2)$$
                $$= 2x^2 - 3xy + 5.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Kết quả của phép chia $(12x^4y^3 - 8x^3y^2) : (-4x^2y^2)$ là:',
              opts: ['$-3x^2y + 2x$', '$3x^2y - 2x$', '$-3x^2y - 2x$', '$-3x^2y^2 + 2x$'],
              ans: 0,
              explain: '$12x^4y^3 : (-4x^2y^2) - 8x^3y^2 : (-4x^2y^2) = -3x^2y + 2x$.'
            }
          ]
        }
      ]
    },
    {
      id: 'chuong-2',
      code: 'Chương II',
      title: 'HẰNG ĐẲNG THỨC ĐÁNG NHỚ VÀ ỨNG DỤNG',
      desc: 'Bảy hằng đẳng thức đáng nhớ, tính nhanh và các phương pháp phân tích đa thức thành nhân tử.',
      badge: 'Đại số 8 • Tập 1',
      color: 'indigo',
      icon: 'fa-square-root-variable',
      lessons: [
        {
          id: 'bai-6',
          lessonNum: 'Bài 6',
          title: 'Hiệu hai bình phương; bình phương của một tổng, một hiệu',
          goals: 'Thuộc lòng và áp dụng thành thạo 3 hằng đẳng thức đầu tiên vào khai triển, tính nhanh và rút gọn.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Hiệu hai bình phương:</strong>
              $$\\boxed{A^2 - B^2 = (A - B)(A + B)}$$</p>
              <p>• <strong>Bình phương của một tổng:</strong>
              $$\\boxed{(A + B)^2 = A^2 + 2AB + B^2}$$</p>
              <p>• <strong>Bình phương của một hiệu:</strong>
              $$\\boxed{(A - B)^2 = A^2 - 2AB + B^2}$$</p>
              <p>• <em>Mẹo tính nhanh:</em> $101^2 = (100+1)^2 = 10000 + 200 + 1 = 10201$; $99 \\times 101 = (100-1)(100+1) = 100^2 - 1 = 9999$.</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Khai triển và rút gọn',
              q: 'Khai triển biểu thức $(2x + 3y)^2$ và tính giá trị $(x - 2y)^2 - (x + 2y)^2$.',
              sol: `
                1) $(2x + 3y)^2 = (2x)^2 + 2(2x)(3y) + (3y)^2 = 4x^2 + 12xy + 9y^2$<br>
                2) $(x - 2y)^2 - (x + 2y)^2 = [(x - 2y) - (x + 2y)][(x - 2y) + (x + 2y)] = (-4y)(2x) = -8xy$.
              `
            }
          ],
          quiz: [
            {
              q: 'Biểu thức $(x - 3y)(x + 3y)$ viết dưới dạng hiệu hai bình phương là:',
              opts: ['$x^2 - 9y^2$', '$x^2 - 3y^2$', '$x^2 - 6y^2$', '$x^2 + 9y^2$'],
              ans: 0,
              explain: '$(x - 3y)(x + 3y) = x^2 - (3y)^2 = x^2 - 9y^2$.'
            }
          ]
        },
        {
          id: 'bai-7',
          lessonNum: 'Bài 7',
          title: 'Lập phương của một tổng, một hiệu',
          goals: 'Nắm vững 2 hằng đẳng thức lập phương của một tổng và một hiệu; nhận dạng đa thức bậc 3 hoàn chỉnh.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Lập phương của một tổng:</strong>
              $$\\boxed{(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3}$$</p>
              <p>• <strong>Lập phương của một hiệu:</strong>
              $$\\boxed{(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3}$$</p>
              <p>• <em>Quy luật:</em> Số mũ của $A$ giảm dần từ 3 về 0; số mũ của $B$ tăng dần từ 0 lên 3. Hệ số tương ứng là $1, 3, 3, 1$. Dấu của lập phương hiệu đan xen: $+ - + -$.</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Viết đa thức dưới dạng lập phương hoàn chỉnh',
              q: 'Thu gọn biểu thức: $M = x^3 - 6x^2 + 12x - 8$.',
              sol: `
                Ta thấy:
                $$M = x^3 - 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 - 2^3 = (x - 2)^3.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Khai triển $(x + 2)^3$ ta được kết quả:',
              opts: ['$x^3 + 6x^2 + 12x + 8$', '$x^3 + 6x^2 + 6x + 8$', '$x^3 + 2x^2 + 4x + 8$', '$x^3 + 3x^2 + 6x + 8$'],
              ans: 0,
              explain: '$(x+2)^3 = x^3 + 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 + 2^3 = x^3 + 6x^2 + 12x + 8$.'
            }
          ]
        },
        {
          id: 'bai-8',
          lessonNum: 'Bài 8',
          title: 'Tổng và hiệu hai lập phương',
          goals: 'Thuộc lòng hằng đẳng thức tổng và hiệu hai lập phương, phân biệt rõ bình phương thiếu của một hiệu và bình phương thiếu của một tổng.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Tổng hai lập phương:</strong>
              $$\\boxed{A^3 + B^3 = (A + B)(A^2 - AB + B^2)}$$
              (Trong đó $A^2 - AB + B^2$ là bình phương thiếu của một hiệu)</p>
              <p>• <strong>Hiệu hai lập phương:</strong>
              $$\\boxed{A^3 - B^3 = (A - B)(A^2 + AB + B^2)}$$
              (Trong đó $A^2 + AB + B^2$ là bình phương thiếu của một tổng)</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Rút gọn biểu thức',
              q: 'Rút gọn biểu thức: $(x - 1)(x^2 + x + 1) - (x + 1)(x^2 - x + 1)$.',
              sol: `
                Áp dụng hằng đẳng thức hiệu và tổng hai lập phương:
                $$= (x^3 - 1^3) - (x^3 + 1^3) = x^3 - 1 - x^3 - 1 = -2.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Đa thức $8x^3 - 27$ viết dưới dạng tích là:',
              opts: ['$(2x - 3)(4x^2 + 6x + 9)$', '$(2x - 3)(4x^2 - 6x + 9)$', '$(2x - 3)(2x^2 + 6x + 9)$', '$(2x + 3)(4x^2 - 6x + 9)$'],
              ans: 0,
              explain: '$8x^3 - 27 = (2x)^3 - 3^3 = (2x - 3)[(2x)^2 + (2x)(3) + 3^2] = (2x - 3)(4x^2 + 6x + 9)$.'
            }
          ]
        },
        {
          id: 'bai-9',
          lessonNum: 'Bài 9',
          title: 'Phân tích đa thức thành nhân tử',
          goals: 'Nắm vững 4 phương pháp phân tích: đặt nhân tử chung, dùng hằng đẳng thức, nhóm hạng tử và phối hợp nhiều phương pháp.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Khái niệm:</strong> Phân tích đa thức thành nhân tử là biến đổi đa thức đó thành một tích của những đa thức.</p>
              <p>• <strong>1. Phương pháp đặt nhân tử chung:</strong> Tìm thừa số chung của các hạng tử đưa ra ngoài ngoặc: $AB + AC = A(B + C)$.</p>
              <p>• <strong>2. Phương pháp dùng hằng đẳng thức:</strong> Nhận diện các dạng hằng đẳng thức đáng nhớ để chuyển về dạng tích hoặc bình phương/lập phương.</p>
              <p>• <strong>3. Phương pháp nhóm hạng tử:</strong> Nhóm các hạng tử một cách thích hợp để xuất hiện nhân tử chung hoặc hằng đẳng thức.</p>
              <p>• <strong>4. Phối hợp nhiều phương pháp:</strong> Thường ưu tiên: Đặt nhân tử chung $\\rightarrow$ Dùng hằng đẳng thức $\\rightarrow$ Nhóm hạng tử $\\rightarrow$ Tách/thêm bớt hạng tử.</p>
              <div class="p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <strong>Ứng dụng giải phương trình tích:</strong> $U \\cdot V = 0 \\iff U = 0$ hoặc $V = 0$.
              </div>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Phân tích đa thức thành nhân tử',
              q: 'Phân tích đa thức $x^2 - 4y^2 + 2x + 4y$ thành nhân tử.',
              sol: `
                $$= (x^2 - 4y^2) + (2x + 4y) = (x - 2y)(x + 2y) + 2(x + 2y) = (x + 2y)(x - 2y + 2).$$
              `
            }
          ],
          quiz: [
            {
              q: 'Phân tích $x^2 - 2xy + y^2 - 9$ thành nhân tử:',
              opts: ['$(x - y - 3)(x - y + 3)$', '$(x - y - 9)(x - y + 9)$', '$(x + y - 3)(x + y + 3)$', '$(x - y - 3)^2$'],
              ans: 0,
              explain: '$(x^2 - 2xy + y^2) - 9 = (x - y)^2 - 3^2 = (x - y - 3)(x - y + 3)$.'
            }
          ]
        }
      ]
    },
    {
      id: 'chuong-3',
      code: 'Chương III',
      title: 'TỨ GIÁC',
      desc: 'Tứ giác lồi, tổng 4 góc, hình thang cân, hình bình hành, hình chữ nhật, hình thoi, hình vuông và quan hệ bao hàm.',
      badge: 'Hình học 8 • Tập 1',
      color: 'emerald',
      icon: 'fa-shapes',
      lessons: [
        {
          id: 'bai-10',
          lessonNum: 'Bài 10',
          title: 'Tứ giác',
          goals: 'Nắm vững định nghĩa tứ giác lồi, các yếu tố đỉnh, cạnh, góc, đường chéo và định lí tổng bốn góc bằng 360 độ.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Định nghĩa:</strong> Tứ giác $ABCD$ là hình gồm bốn đoạn thẳng $AB, BC, CD, DA$, trong đó bất kì hai đoạn thẳng nào cũng không cùng nằm trên một đường thẳng.</p>
              <p>• <strong>Tứ giác lồi:</strong> Là tứ giác luôn nằm trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kì cạnh nào của tứ giác.</p>
              <div class="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800 text-center font-bold">
                Định lí tổng các góc trong một tứ giác:
                $$\\boxed{\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ}$$
              </div>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Tính góc thứ tư của tứ giác',
              q: 'Tứ giác $ABCD$ có $\\widehat{A} = 70^\\circ, \\widehat{B} = 80^\\circ, \\widehat{C} = 100^\\circ$. Tính góc $\\widehat{D}$.',
              sol: `
                $$\\widehat{D} = 360^\\circ - (\\widehat{A} + \\widehat{B} + \\widehat{C}) = 360^\\circ - (70^\\circ + 80^\\circ + 100^\\circ) = 360^\\circ - 250^\\circ = 110^\\circ.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Một tứ giác có 3 góc vuông thì góc thứ tư có số đo là:',
              opts: ['$90^\\circ$', '$60^\\circ$', '$180^\\circ$', '$120^\\circ$'],
              ans: 0,
              explain: '$360^\\circ - (90^\\circ \\times 3) = 90^\\circ$.'
            }
          ]
        },
        {
          id: 'bai-11',
          lessonNum: 'Bài 11',
          title: 'Hình thang cân',
          goals: 'Nắm vững định nghĩa, tính chất và 2 dấu hiệu nhận biết hình thang cân.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Hình thang:</strong> Tứ giác có hai cạnh đối song song (hai cạnh đó gọi là hai đáy; hai cạnh còn lại là cạnh bên).</p>
              <p>• <strong>Hình thang cân:</strong> Là hình thang có hai góc kề một đáy bằng nhau.</p>
              <p>• <strong>Tính chất hình thang cân:</strong></p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Hai cạnh bên bằng nhau ($AD = BC$).</li>
                <li>Hai đường chéo bằng nhau ($AC = BD$).</li>
                <li>Hai góc kề mỗi đáy bằng nhau: $\\widehat{A} = \\widehat{B}$ và $\\widehat{C} = \\widehat{D}$.</li>
              </ul>
              <p>• <strong>Dấu hiệu nhận biết:</strong></p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Hình thang có hai góc kề một đáy bằng nhau là hình thang cân.</li>
                <li>Hình thang có hai đường chéo bằng nhau là hình thang cân.</li>
              </ul>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Chứng minh hình thang cân',
              q: 'Cho hình thang $ABCD$ ($AB \\parallel CD$) có $AC = BD$. Chứng minh $ABCD$ là hình thang cân.',
              sol: `
                Theo dấu hiệu nhận biết: Hình thang có hai đường chéo bằng nhau thì đó là hình thang cân. Do $AB \\parallel CD$ (là hình thang) và $AC = BD$ (hai đường chéo bằng nhau), suy ra $ABCD$ là hình thang cân.
              `
            }
          ],
          quiz: [
            {
              q: 'Khẳng định nào sau đây là SAI về hình thang cân?',
              opts: ['Hai đường chéo vuông góc với nhau', 'Hai cạnh bên bằng nhau', 'Hai đường chéo bằng nhau', 'Hai góc kề một đáy bằng nhau'],
              ans: 0,
              explain: 'Hình thang cân có hai đường chéo bằng nhau chứ không nhất thiết vuông góc với nhau.'
            }
          ]
        },
        {
          id: 'bai-12',
          lessonNum: 'Bài 12',
          title: 'Hình bình hành',
          goals: 'Nắm vững định nghĩa, các tính chất về cạnh, góc, đường chéo và 5 dấu hiệu nhận biết hình bình hành.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Định nghĩa:</strong> Hình bình hành là tứ giác có các cặp cạnh đối song song.</p>
              <p>• <strong>Tính chất:</strong></p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Các cạnh đối song song và bằng nhau: $AB \\parallel CD, AB = CD; AD \\parallel BC, AD = BC$.</li>
                <li>Các góc đối bằng nhau: $\\widehat{A} = \\widehat{C}, \\widehat{B} = \\widehat{D}$; hai góc kề bù nhau.</li>
                <li>Hai đường chéo cắt nhau tại trung điểm của mỗi đường.</li>
              </ul>
              <p>• <strong>5 Dấu hiệu nhận biết:</strong></p>
              <ol class="list-decimal pl-5 space-y-1">
                <li>Tứ giác có các cạnh đối song song là hình bình hành.</li>
                <li>Tứ giác có các cạnh đối bằng nhau là hình bình hành.</li>
                <li>Tứ giác có một cặp cạnh đối song song và bằng nhau là hình bình hành.</li>
                <li>Tứ giác có các góc đối bằng nhau là hình bình hành.</li>
                <li>Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường là hình bình hành.</li>
              </ol>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Nhận biết hình bình hành',
              q: 'Tứ giác $ABCD$ có $AB \\parallel CD$ và $AB = CD = 5$ cm. Tứ giác $ABCD$ là hình gì?',
              sol: `
                Tứ giác $ABCD$ có một cặp cạnh đối vừa song song vừa bằng nhau ($AB \\parallel CD$ và $AB = CD$) nên theo dấu hiệu 3, $ABCD$ là hình bình hành.
              `
            }
          ],
          quiz: [
            {
              q: 'Hình bình hành $ABCD$ có $\\widehat{A} = 70^\\circ$. Số đo góc $\\widehat{B}$ là:',
              opts: ['$110^\\circ$', '$70^\\circ$', '$90^\\circ$', '$140^\\circ$'],
              ans: 0,
              explain: 'Trong hình bình hành, hai góc kề một cạnh bù nhau: $\\widehat{B} = 180^\\circ - 70^\\circ = 110^\\circ$.'
            }
          ]
        },
        {
          id: 'bai-13',
          lessonNum: 'Bài 13',
          title: 'Hình chữ nhật',
          goals: 'Nắm vững định nghĩa, tính chất hai đường chéo bằng nhau và 3 dấu hiệu nhận biết hình chữ nhật.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Định nghĩa:</strong> Hình chữ nhật là tứ giác có bốn góc vuông. (Hình chữ nhật cũng là một hình bình hành và hình thang cân đặc biệt).</p>
              <p>• <strong>Tính chất:</strong> Hình chữ nhật có đầy đủ tính chất của hình bình hành và hình thang cân. Đặc biệt: <em>Hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường</em>.</p>
              <p>• <strong>Dấu hiệu nhận biết:</strong></p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Tứ giác có ba góc vuông là hình chữ nhật.</li>
                <li>Hình bình hành có một góc vuông là hình chữ nhật.</li>
                <li>Hình bình hành có hai đường chéo bằng nhau là hình chữ nhật.</li>
              </ul>
              <p>• <strong>Định lí trong tam giác vuông:</strong> Trong một tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng một nửa cạnh huyền ($AM = \\frac{1}{2}BC$).</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Áp dụng trung tuyến tam giác vuông',
              q: 'Tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 10$ cm. Tính độ dài trung tuyến $AM$.',
              sol: `
                Áp dụng tính chất: Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng một nửa cạnh huyền:
                $$AM = \\dfrac{1}{2}BC = \\dfrac{1}{2} \\cdot 10 = 5\\text{ cm}.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Hình bình hành trở thành hình chữ nhật khi có thêm điều kiện nào?',
              opts: ['Có một góc vuông', 'Có hai cạnh kề bằng nhau', 'Có hai đường chéo vuông góc', 'Có hai góc đối bằng nhau'],
              ans: 0,
              explain: 'Hình bình hành có một góc vuông (hoặc hai đường chéo bằng nhau) là hình chữ nhật.'
            }
          ]
        },
        {
          id: 'bai-14',
          lessonNum: 'Bài 14',
          title: 'Hình thoi và hình vuông',
          goals: 'Nắm vững định nghĩa, tính chất hai đường chéo vuông góc, phân giác góc và dấu hiệu nhận biết hình thoi, hình vuông.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <h5 class="font-bold text-gray-900 dark:text-white">1. Hình thoi</h5>
              <p>• <strong>Định nghĩa:</strong> Hình thoi là tứ giác có bốn cạnh bằng nhau.</p>
              <p>• <strong>Tính chất:</strong> Có mọi tính chất của hình bình hành; hai đường chéo vuông góc với nhau và là đường phân giác của các góc của hình thoi.</p>
              <p>• <strong>Dấu hiệu:</strong> Tứ giác có 4 cạnh bằng nhau; hình bình hành có 2 cạnh kề bằng nhau; hình bình hành có 2 đường chéo vuông góc; hình bình hành có 1 đường chéo là phân giác một góc.</p>

              <h5 class="font-bold text-gray-900 dark:text-white pt-2">2. Hình vuông</h5>
              <p>• <strong>Định nghĩa:</strong> Hình vuông là tứ giác có bốn góc vuông và bốn cạnh bằng nhau. Hình vuông vừa là hình chữ nhật, vừa là hình thoi.</p>
              <p>• <strong>Tính chất:</strong> Hai đường chéo bằng nhau, vuông góc với nhau, cắt nhau tại trung điểm của mỗi đường và là các đường phân giác của các góc.</p>
              <p>• <strong>Dấu hiệu:</strong> Hình chữ nhật có 2 cạnh kề bằng nhau (hoặc 2 đường chéo vuông góc); hình thoi có 1 góc vuông (hoặc 2 đường chéo bằng nhau).</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Tính chất đường chéo hình thoi',
              q: 'Hình thoi $ABCD$ có hai đường chéo $AC = 6$ cm, $BD = 8$ cm cắt nhau tại $O$. Tính độ dài cạnh của hình thoi.',
              sol: `
                Vì $ABCD$ là hình thoi nên $AC \\perp BD$ tại trung điểm $O$ của mỗi đường:<br>
                $OA = AC : 2 = 3$ cm; $OB = BD : 2 = 4$ cm.<br>
                Áp dụng định lí Pythagore trong tam giác vuông $OAB$:
                $$AB^2 = OA^2 + OB^2 = 3^2 + 4^2 = 9 + 16 = 25 \\implies AB = 5\\text{ cm}.$$
                Vậy cạnh của hình thoi bằng $5$ cm.
              `
            }
          ],
          quiz: [
            {
              q: 'Tứ giác vừa là hình chữ nhật vừa là hình thoi là:',
              opts: ['Hình vuông', 'Hình thang cân', 'Hình bình hành', 'Tam giác đều'],
              ans: 0,
              explain: 'Hình vuông vừa có 4 góc vuông (hình chữ nhật) vừa có 4 cạnh bằng nhau (hình thoi).'
            }
          ]
        }
      ]
    },
    {
      id: 'chuong-4',
      code: 'Chương IV',
      title: 'ĐỊNH LÍ THALÈS',
      desc: 'Tỉ số đoạn thẳng, định lí Thalès thuận & đảo, đường trung bình tam giác, tính chất đường phân giác.',
      badge: 'Hình học 8 • Tập 1',
      color: 'amber',
      icon: 'fa-ruler-combined',
      lessons: [
        {
          id: 'bai-15',
          lessonNum: 'Bài 15',
          title: 'Định lí Thalès trong tam giác',
          goals: 'Hiểu tỉ số hai đoạn thẳng, đoạn thẳng tỉ lệ; phát biểu và áp dụng định lí Thalès thuận và đảo.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Tỉ số của hai đoạn thẳng:</strong> Là tỉ số độ dài của chúng theo cùng một đơn vị đo. Đoạn thẳng tỉ lệ: $\\frac{AB}{CD} = \\frac{A'B'}{C'D'}$.</p>
              <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800">
                <strong>Định lí Thalès thuận:</strong> Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ:
                $$\\text{Nếu } MN \\parallel BC \\implies \\frac{AM}{AB} = \\frac{AN}{AC}; \\quad \\frac{AM}{MB} = \\frac{AN}{NC}; \\quad \\frac{MB}{AB} = \\frac{NC}{AC}$$
              </div>
              <p>• <strong>Định lí Thalès đảo:</strong> Nếu một đường thẳng cắt hai cạnh của một tam giác và định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ thì đường thẳng đó song song với cạnh thứ ba của tam giác.</p>
              <p>• <strong>Hệ quả:</strong> $\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$.</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Tính độ dài đoạn thẳng bằng Thalès',
              q: 'Cho $\\triangle ABC$, $MN \\parallel BC$ ($M \\in AB, N \\in AC$). Biết $AM = 2$ cm, $MB = 4$ cm, $AN = 3$ cm. Tính độ dài đoạn thẳng $NC$.',
              sol: `
                Vì $MN \\parallel BC$, áp dụng định lí Thalès ta có:
                $$\\frac{AM}{MB} = \\frac{AN}{NC} \\implies \\frac{2}{4} = \\frac{3}{NC} \\implies NC = \\frac{4 \\cdot 3}{2} = 6\\text{ cm}.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Trong $\\triangle ABC$ có $MN \\parallel BC$ ($M \\in AB, N \\in AC$). Nếu $AM = 3, AB = 9, AN = 4$ thì $AC$ bằng:',
              opts: ['12', '8', '6', '16'],
              ans: 0,
              explain: 'Theo Thalès: $\\frac{AM}{AB} = \\frac{AN}{AC} \\implies \\frac{3}{9} = \\frac{4}{AC} \\implies AC = \\frac{9 \\cdot 4}{3} = 12$.'
            }
          ]
        },
        {
          id: 'bai-16',
          lessonNum: 'Bài 16',
          title: 'Đường trung bình của tam giác',
          goals: 'Nắm vững định nghĩa và tính chất của đường trung bình trong tam giác: song song với cạnh thứ ba và bằng nửa cạnh ấy.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Định nghĩa:</strong> Đường trung bình của tam giác là đoạn thẳng nối trung điểm hai cạnh của tam giác đó.</p>
              <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-center font-bold">
                Tính chất đường trung bình:
                $$\\boxed{MN \\parallel BC \\quad \\text{và} \\quad MN = \\dfrac{1}{2}BC}$$
              </div>
              <p>• <strong>Định lí đảo:</strong> Đường thẳng đi qua trung điểm một cạnh của tam giác và song song với cạnh thứ hai thì đi qua trung điểm của cạnh thứ ba.</p>
              <p>• Mỗi tam giác có ba đường trung bình. Ba đường trung bình chia tam giác thành bốn tam giác nhỏ có diện tích bằng nhau.</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Tính cạnh bằng đường trung bình',
              q: 'Cho $\\triangle ABC$ có chu vi $24$ cm. Gọi $D, E, F$ lần lượt là trung điểm của $AB, BC, CA$. Tính chu vi $\\triangle DEF$.',
              sol: `
                Vì $D, E, F$ là trung điểm các cạnh nên $DE, EF, FD$ là ba đường trung bình của $\\triangle ABC$:<br>
                $DE = \\frac{1}{2}AC$, $EF = \\frac{1}{2}AB$, $FD = \\frac{1}{2}BC$.<br>
                Chu vi $\\triangle DEF = DE + EF + FD = \\frac{1}{2}(AC + AB + BC) = \\frac{1}{2} \\cdot 24 = 12\\text{ cm}$.
              `
            }
          ],
          quiz: [
            {
              q: 'Đoạn thẳng nối trung điểm hai cạnh của tam giác có độ dài bằng 6 cm. Cạnh thứ ba có độ dài là:',
              opts: ['12 cm', '3 cm', '6 cm', '18 cm'],
              ans: 0,
              explain: 'Cạnh thứ ba gấp đôi đường trung bình: $6 \\times 2 = 12$ cm.'
            }
          ]
        },
        {
          id: 'bai-17',
          lessonNum: 'Bài 17',
          title: 'Tính chất đường phân giác của tam giác',
          goals: 'Nắm vững định lí đường phân giác chia cạnh đối diện thành hai đoạn tỉ lệ với hai cạnh kề.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-center font-bold">
                Định lí đường phân giác:
                Trong tam giác, đường phân giác của một góc chia cạnh đối diện thành hai đoạn thẳng tỉ lệ với hai cạnh kề hai đoạn ấy:
                $$\\boxed{\\dfrac{BD}{DC} = \\dfrac{AB}{AC}}$$
                (với $AD$ là tia phân giác của $\\widehat{A}$, $D \\in BC$)
              </div>
              <p>• Định lí vẫn đúng đối với tia phân giác của góc ngoài tam giác (khi $AB \\ne AC$).</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Tính đoạn thẳng bằng đường phân giác',
              q: 'Cho $\\triangle ABC$ có $AB = 6$ cm, $AC = 9$ cm, $BC = 10$ cm. Đường phân giác trong góc $A$ cắt $BC$ tại $D$. Tính độ dài $BD$ và $DC$.',
              sol: `
                Áp dụng tính chất đường phân giác $AD$:
                $$\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{6}{9} = \\frac{2}{3} \\implies \\frac{BD}{2} = \\frac{DC}{3} = \\frac{BD + DC}{2 + 3} = \\frac{10}{5} = 2.$$
                Vậy $BD = 2 \\cdot 2 = 4\\text{ cm}$; $DC = 3 \\cdot 2 = 6\\text{ cm}$.
              `
            }
          ],
          quiz: [
            {
              q: 'Cho $\\triangle ABC$ có phân giác $AD$. Biết $AB = 4, AC = 6, BD = 2$. Độ dài đoạn thẳng $DC$ là:',
              opts: ['3', '4', '2', '5'],
              ans: 0,
              explain: '$\\frac{BD}{DC} = \\frac{AB}{AC} \\implies \\frac{2}{DC} = \\frac{4}{6} \\implies DC = \\frac{2 \\cdot 6}{4} = 3$.'
            }
          ]
        }
      ]
    },
    {
      id: 'chuong-5',
      code: 'Chương V',
      title: 'DỮ LIỆU VÀ BIỂU ĐỒ',
      desc: 'Thu thập, phân loại dữ liệu (liên tục/rời rạc), biểu diễn bảng biểu đồ và phân tích số liệu thống kê.',
      badge: 'Thống kê 8 • Tập 1',
      color: 'teal',
      icon: 'fa-chart-pie',
      lessons: [
        {
          id: 'bai-18',
          lessonNum: 'Bài 18',
          title: 'Thu thập và phân loại dữ liệu',
          goals: 'Biết cách thu thập dữ liệu trực tiếp, gián tiếp; phân biệt dữ liệu định tính và định lượng (rời rạc / liên tục).',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Phương pháp thu thập:</strong></p>
              <ul class="list-disc pl-5 space-y-1">
                <li><em>Trực tiếp:</em> Quan sát, đo đạc, làm thí nghiệm, phỏng vấn, khảo sát bảng hỏi.</li>
                <li><em>Gián tiếp:</em> Khai thác dữ liệu có sẵn từ sách báo, niên giám thống kê, website tin cậy.</li>
              </ul>
              <p>• <strong>Phân loại dữ liệu:</strong></p>
              <ul class="list-disc pl-5 space-y-1">
                <li><em>Dữ liệu định tính (không là số):</em> Tên môn học, loại xe, mức độ đánh giá (kém, khá, tốt).</li>
                <li><em>Dữ liệu định lượng (số liệu):</em>
                  <br>+ <strong>Số liệu rời rạc:</strong> Thường là số đếm, nhận các giá trị nguyên riêng lẻ (số học sinh trong lớp, số bàn thắng).
                  <br>+ <strong>Số liệu liên tục:</strong> Nhận giá trị trong một khoảng liên tục, thường thu được từ phép đo (chiều cao, cân nặng, nhiệt độ, thời gian).
                </li>
              </ul>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Phân loại dữ liệu',
              q: 'Trong các dãy dữ liệu sau, dữ liệu nào là số liệu liên tục? A: Số xe máy bán ra; B: Chiều cao học sinh lớp 8A.',
              sol: `
                - "Số xe máy bán ra" nhận giá trị nguyên dương rời rạc ($1, 2, 3, ...$) nên là số liệu rời rạc.<br>
                - "Chiều cao học sinh" nhận giá trị trong một khoảng số thực (ví dụ $152.5$ cm, $160.2$ cm) được thu qua đo đạc nên là <strong>số liệu liên tục</strong>.
              `
            }
          ],
          quiz: [
            {
              q: 'Dãy dữ liệu nào sau đây là số liệu rời rạc?',
              opts: ['Số con trong một gia đình', 'Nhiệt độ trung bình các ngày', 'Cân nặng của các bạn học sinh', 'Thời gian chạy 100m'],
              ans: 0,
              explain: 'Số con là số đếm nguyên ($0, 1, 2, 3, ...$) nên là số liệu rời rạc.'
            }
          ]
        },
        {
          id: 'bai-19',
          lessonNum: 'Bài 19',
          title: 'Biểu diễn dữ liệu bằng bảng, biểu đồ',
          goals: 'Lựa chọn và vẽ biểu đồ phù hợp: biểu đồ cột, cột kép, đoạn thẳng, hình quạt tròn; nhận biết biểu đồ gây hiểu lầm.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Lựa chọn dạng biểu đồ thích hợp:</strong></p>
              <table class="w-full text-xs text-left border border-gray-200 dark:border-gray-700 my-2">
                <thead class="bg-gray-100 dark:bg-gray-800">
                  <tr><th class="p-2">Dạng biểu đồ</th><th class="p-2">Mục đích sử dụng</th></tr>
                </thead>
                <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr><td class="p-2 font-bold">Biểu đồ cột / tranh</td><td class="p-2">So sánh số lượng giữa các nhóm đối tượng độc lập.</td></tr>
                  <tr><td class="p-2 font-bold">Biểu đồ cột kép</td><td class="p-2">So sánh đồng thời 2 nhóm đối tượng theo từng phân loại.</td></tr>
                  <tr><td class="p-2 font-bold">Biểu đồ đoạn thẳng</td><td class="p-2">Theo dõi xu hướng biến thiên của đại lượng theo thời gian.</td></tr>
                  <tr><td class="p-2 font-bold">Biểu đồ hình quạt tròn</td><td class="p-2">Biểu thị tỉ lệ phần trăm của từng thành phần trong tổng thể ($100\\%$).</td></tr>
                </tbody>
              </table>
              <p>• <strong>Lưu ý tránh biểu đồ sai lệch:</strong> Gốc trục không bắt đầu từ $0$, khoảng cách chia không đều có thể phóng đại hoặc làm sai lệch mức chênh lệch.</p>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Lựa chọn biểu đồ',
              q: 'Để biểu diễn sự thay đổi của dân số Việt Nam qua các năm từ 2010 đến 2022, biểu đồ nào là phù hợp nhất?',
              sol: `
                Vì mục đích là quan sát sự thay đổi và xu hướng biến thiên của một đại lượng theo thời gian, <strong>biểu đồ đoạn thẳng</strong> là lựa chọn tối ưu nhất.
              `
            }
          ],
          quiz: [
            {
              q: 'Muốn thể hiện cơ cấu tỉ lệ phần trăm các loại chi tiêu trong gia đình (tổng bằng 100%), nên dùng biểu đồ:',
              opts: ['Hình quạt tròn', 'Biểu đồ đoạn thẳng', 'Biểu đồ tranh', 'Biểu đồ cột đơn'],
              ans: 0,
              explain: 'Biểu đồ hình quạt tròn chuyên dùng thể hiện cơ cấu phần trăm thành phần so với tổng thể 100%.'
            }
          ]
        },
        {
          id: 'bai-20',
          lessonNum: 'Bài 20',
          title: 'Phân tích số liệu thống kê dựa vào biểu đồ',
          goals: 'Đọc dữ liệu, so sánh các đại lượng, nhận xét xu thế phát triển và rút ra kết luận logic từ số liệu.',
          theory: `
            <div class="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <p>• <strong>Quy trình phân tích số liệu:</strong></p>
              <ol class="list-decimal pl-5 space-y-1">
                <li>Đọc giá trị chính xác tại các mốc; xác định giá trị cao nhất (cực đại), thấp nhất (cực tiểu).</li>
                <li>Tính toán các tỉ số, mức tăng/giảm tuyệt đối và tỉ lệ tăng trưởng.</li>
                <li>Nhận xét xu thế tăng, giảm, ổn định qua các thời kì.</li>
                <li>Cảnh giác: Phân biệt rõ sự tương quan về số liệu với quan hệ nhân quả thực tế (tương quan không đồng nghĩa với nguyên nhân).</li>
              </ol>
            </div>
          `,
          examples: [
            {
              title: 'Ví dụ: Đọc số liệu tăng trưởng',
              q: 'Sản lượng lúa năm 2020 là 40 triệu tấn, năm 2022 là 44 triệu tấn. Tính tỉ số phần trăm tăng trưởng.',
              sol: `
                Mức tăng tuyệt đối: $44 - 40 = 4$ (triệu tấn).<br>
                Tỉ lệ phần trăm tăng trưởng so với năm 2020:
                $$\\dfrac{4}{40} \\times 100\\% = 10\\%.$$
              `
            }
          ],
          quiz: [
            {
              q: 'Khi phân tích biểu đồ đoạn thẳng, điểm nhô cao nhất trên đồ thị biểu thị:',
              opts: ['Giá trị lớn nhất của đại lượng', 'Giá trị trung bình', 'Giá trị nhỏ nhất', 'Giá trị ban đầu'],
              ans: 0,
              explain: 'Điểm cao nhất tương ứng với giá trị cực đại của đại lượng được đo.'
            }
          ]
        }
      ]
    }
  ]
};
