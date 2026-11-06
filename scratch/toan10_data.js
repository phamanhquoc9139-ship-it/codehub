// scratch/toan10_data.js
// Trọn bộ 9 Chương, 27 Bài và Hoạt động thực hành trải nghiệm môn Toán 10 (SGK Kết nối tri thức với cuộc sống)

module.exports = {
  chapters: [
    {
      num: 1,
      title: "Mệnh đề và tập hợp",
      badge: "Mệnh đề & Tập hợp",
      icon: "fa-shapes",
      desc: "Mệnh đề logic, phủ định, kéo theo, lượng từ và các phép toán tập hợp",
      lessons: [1, 2]
    },
    {
      num: 2,
      title: "Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
      badge: "BPT Bậc Nhất Hai Ẩn",
      icon: "fa-chart-area",
      desc: "Miền nghiệm nửa mặt phẳng, hệ bất phương trình và bài toán quy hoạch tuyến tính",
      lessons: [3, 4]
    },
    {
      num: 3,
      title: "Hệ thức lượng trong tam giác",
      badge: "Hệ thức lượng",
      icon: "fa-draw-polygon",
      desc: "Giá trị lượng giác 0° - 180°, định lí côsin, định lí sin và các công thức tính diện tích",
      lessons: [5, 6]
    },
    {
      num: 4,
      title: "Vectơ",
      badge: "Đại số Vectơ",
      icon: "fa-arrow-trend-up",
      desc: "Định nghĩa, phép cộng trừ, nhân số, tọa độ Oxy và tích vô hướng",
      lessons: [7, 8, 9, 10, 11]
    },
    {
      num: 5,
      title: "Các số đặc trưng của mẫu số liệu không ghép nhóm",
      badge: "Thống kê mô tả",
      icon: "fa-chart-pie",
      desc: "Số gần đúng, sai số, số trung bình, trung vị, tứ phân vị, phương sai và độ lệch chuẩn",
      lessons: [12, 13, 14]
    },
    {
      num: 6,
      title: "Hàm số, đồ thị và ứng dụng",
      badge: "Hàm số & Bậc hai",
      icon: "fa-chart-line",
      desc: "Khái niệm hàm số, parabol bậc hai, dấu của tam thức bậc hai và phương trình quy về bậc hai",
      lessons: [15, 16, 17, 18]
    },
    {
      num: 7,
      title: "Phương pháp tọa độ trong mặt phẳng",
      badge: "Hình học Oxy",
      icon: "fa-compass-drafting",
      desc: "Phương trình đường thẳng, góc và khoảng cách, phương trình đường tròn và ba đường conic",
      lessons: [19, 20, 21, 22]
    },
    {
      num: 8,
      title: "Đại số tổ hợp",
      badge: "Đại số tổ hợp",
      icon: "fa-calculator",
      desc: "Quy tắc cộng, quy tắc nhân, sơ đồ cây, hoán vị, chỉnh hợp, tổ hợp và nhị thức Newton",
      lessons: [23, 24, 25]
    },
    {
      num: 9,
      title: "Tính xác suất theo định nghĩa cổ điển",
      badge: "Xác suất cổ điển",
      icon: "fa-dice",
      desc: "Không gian mẫu, biến cố, công thức cộng xác suất và thực hành tính xác suất",
      lessons: [26, 27]
    },
    {
      num: 10,
      title: "Hoạt động thực hành, trải nghiệm",
      badge: "Thực hành trải nghiệm",
      icon: "fa-flask-vial",
      desc: "Toán học tài chính (bậc giá điện, lãi suất), khảo sát mạng xã hội và phương pháp bắt - đánh dấu",
      lessons: [28, 29, 30] // Đánh dấu 28, 29, 30 cho 3 chuyên đề thực hành
    }
  ],

  lessons: {
    1: {
      num: 1,
      chapter: 1,
      chapterTitle: "Chương I – Mệnh đề và tập hợp",
      title: "Mệnh đề",
      body: `### 1. Mệnh đề logic và mệnh đề chứa biến

- **Mệnh đề logic:** Là một câu khẳng định có giá trị chân lí xác định: hoặc đúng, hoặc sai. Một mệnh đề không thể vừa đúng vừa sai. Các câu hỏi, câu cảm thán, câu cầu khiến không phải là mệnh đề logic.
- **Kí hiệu mệnh đề:** Thường dùng các chữ cái in hoa $P, Q, R, ...$.
- **Mệnh đề chứa biến:** Là câu khẳng định chứa biến số $x, y, ...$ mà tính đúng sai phụ thuộc vào từng giá trị cụ thể của biến trong tập xác định (ví dụ: "$P(n): n$ chia hết cho 3").
- **Mệnh đề phủ định:** Mệnh đề phủ định của $P$ kí hiệu là $\\overline{P}$. Nếu $P$ đúng thì $\\overline{P}$ sai; nếu $P$ sai thì $\\overline{P}$ đúng.

### 2. Mệnh đề kéo theo, mệnh đề đảo và mệnh đề tương đương

- **Mệnh đề kéo theo ($P \\Rightarrow Q$):** "Nếu $P$ thì $Q$". Mệnh đề kéo theo chỉ sai khi $P$ đúng mà $Q$ sai; đúng trong tất cả các trường hợp còn lại.
  - $P$ là **điều kiện đủ** để có $Q$.
  - $Q$ là **điều kiện cần** để có $P$.
- **Mệnh đề đảo:** Mệnh đề đảo của $P \\Rightarrow Q$ là $Q \\Rightarrow P$. Mệnh đề đảo không nhất thiết phải đúng khi mệnh đề thuận đúng.
- **Mệnh đề tương đương ($P \\Leftrightarrow Q$):** "P khi và chỉ khi Q" hoặc "P là điều kiện cần và đủ để có Q". Mệnh đề tương đương đúng khi cả hai mệnh đề $P$ và $Q$ cùng đúng hoặc cùng sai.

### 3. Kí hiệu lượng từ với mọi ($\\forall$) và tồn tại ($\\exists$)

- **Lượng từ với mọi ($\\forall$):** "$\\forall x \\in D, P(x)$" đúng khi $P(x)$ đúng với mọi giá trị $x$ thuộc tập $D$. Muốn bác bỏ mệnh đề này chỉ cần tìm một phản ví dụ $x_0 \\in D$ sao cho $P(x_0)$ sai.
- **Lượng từ tồn tại ($\\exists$):** "$\\exists x \\in D, P(x)$" đúng khi có ít nhất một giá trị $x_0 \\in D$ làm cho $P(x_0)$ đúng.
- **Quy tắc phủ định mệnh đề có lượng từ:**
  - $\\overline{\\forall x \\in D, P(x)} \\equiv \\exists x \\in D, \\overline{P(x)}$.
  - $\\overline{\\exists x \\in D, P(x)} \\equiv \\forall x \\in D, \\overline{P(x)}$.`
    },

    2: {
      num: 2,
      chapter: 1,
      chapterTitle: "Chương I – Mệnh đề và tập hợp",
      title: "Tập hợp và các phép toán trên tập hợp",
      body: `### 1. Khái niệm tập hợp và các tập hợp số

- **Tập hợp và phần tử:** Nếu phần tử $x$ thuộc tập hợp $A$, viết $x \\in A$; nếu không thuộc, viết $x \\notin A$.
- **Cách mô tả tập hợp:** Liệt kê các phần tử trong dấu ngoặc nhọn $\\{a; b; c\\}$ hoặc nêu tính chất đặc trưng $\\{x \\in \\mathbb{R} \\mid P(x)\\}$.
- **Tập con và hai tập hợp bằng nhau:**
  - $A \\subseteq B \\Leftrightarrow (\\forall x \\in A \\Rightarrow x \\in B)$.
  - $A = B \\Leftrightarrow (A \\subseteq B \\text{ và } B \\subseteq A)$.
- **Tập rỗng:** Tập hợp không chứa phần tử nào, kí hiệu là $\\varnothing$. Với mọi tập $A$, ta luôn có $\\varnothing \\subseteq A$.
- **Các tập hợp con của số thực $\\mathbb{R}$:**
  - Khoảng: $(a; b) = \\{x \\in \\mathbb{R} \\mid a < x < b\\}$; $(a; +\\infty) = \\{x \\in \\mathbb{R} \\mid x > a\\}$.
  - Đoạn: $[a; b] = \\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$.
  - Nửa khoảng: $[a; b) = \\{x \\in \\mathbb{R} \\mid a \\le x < b\\}$; $(a; b] = \\{x \\in \\mathbb{R} \\mid a < x \\le b\\}$.

### 2. Các phép toán trên tập hợp

- **Phép hợp (Union):**
$$
A \\cup B = \\{x \\mid x \\in A \\text{ hoặc } x \\in B\\}
$$

- **Phép giao (Intersection):**
$$
A \\cap B = \\{x \\mid x \\in A \\text{ và } x \\in B\\}
$$

- **Phép hiệu (Difference):**
$$
A \\setminus B = \\{x \\mid x \\in A \\text{ và } x \\notin B\\}
$$

- **Phần bù trong tập vũ trụ (Complement):** Khi $A \\subseteq U$, phần bù của $A$ trong $U$ kí hiệu là $C_U A = U \\setminus A$.
- **Công thức đếm số phần tử của hai tập hữu hạn:**
$$
n(A \\cup B) = n(A) + n(B) - n(A \\cap B)
$$
`
    },

    3: {
      num: 3,
      chapter: 2,
      chapterTitle: "Chương II – Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
      title: "Bất phương trình bậc nhất hai ẩn",
      body: `### 1. Dạng tổng quát và nghiệm

- **Định nghĩa:** Bất phương trình bậc nhất hai ẩn $x, y$ là bất phương trình có một trong các dạng:
$$
ax + by + c < 0;\\quad ax + by + c \\le 0;\\quad ax + by + c > 0;\\quad ax + by + c \\ge 0
$$

trong đó $a, b, c$ là các số thực cho trước và $a, b$ không đồng thời bằng 0 ($a^2 + b^2 \\ne 0$).
- **Nghiệm của bất phương trình:** Mỗi cặp số $(x_0; y_0)$ sao cho khi thay $x = x_0, y = y_0$ ta được một khẳng định đúng gọi là một nghiệm của bất phương trình. Bất phương trình bậc nhất hai ẩn luôn có vô số nghiệm.

### 2. Biểu diễn miền nghiệm trên mặt phẳng tọa độ Oxy

Đường thẳng $d: ax + by + c = 0$ chia mặt phẳng tọa độ thành hai nửa mặt phẳng bờ $d$.
- **Bước 1 (Vẽ bờ):** Vẽ đường thẳng $d: ax + by + c = 0$ (vẽ nét đứt nếu bất phương trình ngặt $<, >$; vẽ nét liền nếu có dấu bằng $\\le, \\ge$).
- **Bước 2 (Chọn điểm thử):** Lấy một điểm $M(x_0; y_0)$ không thuộc bờ $d$ (thường chọn gốc tọa độ $O(0; 0)$ nếu $c \\ne 0$).
- **Bước 3 (Thử và kết luận):** Tính giá trị biểu thức $T = ax_0 + by_0 + c$:
  - Nếu $T$ thỏa mãn bất phương trình thì nửa mặt phẳng chứa điểm $M(x_0; y_0)$ là miền nghiệm.
  - Nếu $T$ không thỏa mãn thì nửa mặt phẳng đối diện (không chứa $M$) là miền nghiệm.`
    },

    4: {
      num: 4,
      chapter: 2,
      chapterTitle: "Chương II – Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
      title: "Hệ bất phương trình bậc nhất hai ẩn",
      body: `### 1. Định nghĩa và cách xác định miền nghiệm

- **Hệ bất phương trình bậc nhất hai ẩn:** Là một hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn. Cặp số $(x_0; y_0)$ là nghiệm của hệ khi và chỉ khi nó là nghiệm chung của tất cả các bất phương trình trong hệ.
- **Quy trình xác định miền nghiệm:**
  - Trên cùng một mặt phẳng tọa độ, xác định miền nghiệm của từng bất phương trình trong hệ và gạch bỏ phần không thuộc miền nghiệm.
  - Phần mặt phẳng không bị gạch bỏ (giao của các miền nghiệm thành phần) chính là miền nghiệm của hệ. Miền nghiệm có thể là một miền đa giác lồi, miền không bị chặn hoặc tập rỗng.

### 2. Bài toán quy hoạch tuyến tính và giá trị tối ưu

- **Mục tiêu:** Tìm giá trị lớn nhất (Max) hoặc nhỏ nhất (Min) của biểu thức tuyến tính $F(x; y) = ax + by$ với $(x; y)$ thỏa mãn hệ ràng buộc bậc nhất.
- **Định lí giá trị biên:** Nếu miền nghiệm của hệ ràng buộc là một đa giác lồi đóng và bị chặn thì giá trị lớn nhất và nhỏ nhất của hàm mục tiêu $F(x; y) = ax + by$ luôn đạt được tại một trong các đỉnh của đa giác đó.
- **Quy trình giải bài toán tối ưu thực tế:**
  - **Bước 1:** Đặt ẩn và nêu điều kiện (thường có điều kiện không âm $x \\ge 0, y \\ge 0$).
  - **Bước 2:** Lập hệ bất phương trình mô tả các điều kiện ràng buộc về nguyên vật liệu, thời gian, chi phí.
  - **Bước 3:** Lập hàm mục tiêu $F(x; y)$ (doanh thu, lợi nhuận, chi phí tối thiểu).
  - **Bước 4:** Xác định tọa độ các đỉnh của miền đa giác nghiệm.
  - **Bước 5:** Tính giá trị $F$ tại từng đỉnh và kết luận phương án tối ưu.`
    },

    5: {
      num: 5,
      chapter: 3,
      chapterTitle: "Chương III – Hệ thức lượng trong tam giác",
      title: "Giá trị lượng giác của một góc từ 0° đến 180°",
      body: `### 1. Định nghĩa giá trị lượng giác trên nửa đường tròn đơn vị

Với mỗi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), ta xác định điểm $M(x_0; y_0)$ trên nửa đường tròn đơn vị (bán kính $R = 1$) sao cho $\\widehat{xOM} = \\alpha$:
- $\\sin\\alpha = y_0$ (tung độ của $M$).
- $\\cos\\alpha = x_0$ (hoành độ của $M$).
- $\\tan\\alpha = \\frac{y_0}{x_0} = \\frac{\\sin\\alpha}{\\cos\\alpha}$ (xác định khi $\\alpha \\ne 90^\\circ$).
- $\\cot\\alpha = \\frac{x_0}{y_0} = \\frac{\\cos\\alpha}{\\sin\\alpha}$ (xác định khi $\\alpha \\ne 0^\\circ, 180^\\circ$).

### 2. Dấu và tính chất của giá trị lượng giác

- **Dấu theo góc:**
  - Với mọi $0^\\circ < \\alpha < 180^\\circ$: $\\sin\\alpha > 0$.
  - Khi $\\alpha$ nhọn ($0^\\circ < \\alpha < 90^\\circ$): $\\cos\\alpha > 0, \\tan\\alpha > 0, \\cot\\alpha > 0$.
  - Khi $\\alpha = 90^\\circ$: $\\sin 90^\\circ = 1, \\cos 90^\\circ = 0, \\cot 90^\\circ = 0$ ($\\\tan 90^\\circ$ không xác định).
  - Khi $\\alpha$ tù ($90^\\circ < \\alpha < 180^\\circ$): $\\cos\\alpha < 0, \\tan\\alpha < 0, \\cot\\alpha < 0$.
- **Mối quan hệ hai góc bù nhau (tổng bằng 180°):**
  - $\\sin(180^\\circ - \\alpha) = \\sin\\alpha$
  - $\\cos(180^\\circ - \\alpha) = -\\cos\\alpha$
  - $\\tan(180^\\circ - \\alpha) = -\\tan\\alpha$
  - $\\cot(180^\\circ - \\alpha) = -\\cot\\alpha$
- **Các hằng đẳng thức lượng giác cơ bản:**
  - $\\sin^2\\alpha + \\cos^2\\alpha = 1$
  - $1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}$ (với $\\alpha \\ne 90^\\circ$)
  - $1 + \\cot^2\\alpha = \\frac{1}{\\sin^2\\alpha}$ (với $\\alpha \\ne 0^\\circ, 180^\\circ$)
  - $\\tan\\alpha \\cdot \\cot\\alpha = 1$`
    },

    6: {
      num: 6,
      chapter: 3,
      chapterTitle: "Chương III – Hệ thức lượng trong tam giác",
      title: "Hệ thức lượng trong tam giác",
      body: `### 1. Định lí côsin và hệ quả

Cho tam giác $ABC$ có các cạnh $a = BC, b = CA, c = AB$:
- **Định lí côsin:**
$$
a^2 = b^2 + c^2 - 2bc \\cos A;\\quad b^2 = c^2 + a^2 - 2ca \\cos B;\\quad c^2 = a^2 + b^2 - 2ab \\cos C
$$

- **Hệ quả tính góc:**
$$
\\cos A = \\frac{b^2 + c^2 - a^2}{2bc};\\quad \\cos B = \\frac{c^2 + a^2 - b^2}{2ca};\\quad \\cos C = \\frac{a^2 + b^2 - c^2}{2ab}
$$

- **Công thức tính độ dài đường trung tuyến:**
$$
m_a^2 = \\frac{2(b^2 + c^2) - a^2}{4};\\quad m_b^2 = \\frac{2(c^2 + a^2) - b^2}{4};\\quad m_c^2 = \\frac{2(a^2 + b^2) - c^2}{4}
$$


### 2. Định lí sin và các công thức tính diện tích tam giác

- **Định lí sin:**
$$
\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R
$$

trong đó $R$ là bán kính đường tròn ngoại tiếp tam giác.
- **Các công thức tính diện tích tam giác $S$:**
  - Theo cạnh đáy và chiều cao: $S = \\frac{1}{2}ah_a = \\frac{1}{2}bh_b = \\frac{1}{2}ch_c$.
  - Theo hai cạnh và góc xen giữa: $S = \\frac{1}{2}bc\\sin A = \\frac{1}{2}ca\\sin B = \\frac{1}{2}ab\\sin C$.
  - Theo bán kính đường tròn ngoại tiếp: $S = \\frac{abc}{4R}$.
  - Theo bán kính đường tròn nội tiếp: $S = p \\cdot r$ (với nửa chu vi $p = \\frac{a + b + c}{2}$).
  - **Công thức Heron (khi biết 3 cạnh):**
$$
S = \\sqrt{p(p - a)(p - b)(p - c)}
$$
`
    },

    7: {
      num: 7,
      chapter: 4,
      chapterTitle: "Chương IV – Vectơ",
      title: "Các khái niệm mở đầu",
      body: `### 1. Định nghĩa vectơ và các đặc trưng

- **Định nghĩa:** Vectơ là một đoạn thẳng có hướng (đã chỉ rõ điểm đầu và điểm cuối). Kí hiệu vectơ có điểm đầu $A$, điểm cuối $B$ là $\\vec{AB}$. Ta cũng có thể kí hiệu bằng một chữ cái thường có mũi tên: $\\vec{a}, \\vec{b}, \\vec{u}, \\vec{v}$.
- **Giá của vectơ:** Đường thẳng đi qua điểm đầu và điểm cuối của vectơ gọi là giá của vectơ đó.
- **Độ dài vectơ:** Là khoảng cách giữa điểm đầu và điểm cuối, kí hiệu $|\\vec{AB}| = AB$. Vectơ có độ dài bằng 1 gọi là vectơ đơn vị.
- **Vectơ-không:** Là vectơ có điểm đầu và điểm cuối trùng nhau, kí hiệu $\\vec{0}$. Vectơ $\\vec{0}$ có độ dài bằng 0 và có phương tùy ý.

### 2. Hai vectơ cùng phương, cùng hướng và bằng nhau

- **Cùng phương:** Hai vectơ được gọi là cùng phương nếu giá của chúng song song hoặc trùng nhau.
- **Cùng hướng / Ngược hướng:** Hai vectơ cùng phương thì có thể cùng hướng hoặc ngược hướng nhau. Vectơ $\\vec{0}$ cùng phương và cùng hướng với mọi vectơ.
- **Điều kiện thẳng hàng:** Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương.
- **Hai vectơ bằng nhau:** Hai vectơ $\\vec{a}$ và $\\vec{b}$ được gọi là bằng nhau nếu chúng có cùng hướng và cùng độ dài, kí hiệu $\\vec{a} = \\vec{b}$.
- **Vectơ đối:** Vectơ đối của $\\vec{a}$ kí hiệu là $-\\vec{a}$, có cùng độ dài nhưng ngược hướng với $\\vec{a}$. Ta có $\\vec{BA} = -\\vec{AB}$.`
    },

    8: {
      num: 8,
      chapter: 4,
      chapterTitle: "Chương IV – Vectơ",
      title: "Tổng và hiệu của hai vectơ",
      body: `### 1. Tổng của hai vectơ và các quy tắc hình học

- **Quy tắc ba điểm (nối đuôi):** Với ba điểm bất kì $A, B, C$, ta luôn có:
$$
\\vec{AB} + \\vec{BC} = \\vec{AC}
$$

- **Quy tắc hình bình hành:** Nếu $ABCD$ là hình bình hành thì tổng hai vectơ chung gốc bằng vectơ đường chéo xuất phát từ gốc chung:
$$
\\vec{AB} + \\vec{AD} = \\vec{AC}
$$

- **Tính chất phép cộng vectơ:** Giao hoán ($\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$), kết hợp ($(\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c})$), cộng với vectơ-không ($\\vec{a} + \\vec{0} = \\vec{a}$).

### 2. Hiệu của hai vectơ và ứng dụng hợp lực

- **Quy tắc trừ chung gốc:** Với ba điểm bất kì $O, A, B$:
$$
\\vec{OB} - \\vec{OA} = \\vec{AB}
$$

- **Tính chất trung điểm và trọng tâm:**
  - $I$ là trung điểm đoạn thẳng $AB \\Leftrightarrow \\vec{IA} + \\vec{IB} = \\vec{0} \\Leftrightarrow \\vec{OA} + \\vec{OB} = 2\\vec{OI}$ (với mọi điểm $O$).
  - $G$ là trọng tâm tam giác $ABC \\Leftrightarrow \\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0} \\Leftrightarrow \\vec{OA} + \\vec{OB} + \\vec{OC} = 3\\vec{OG}$ (với mọi điểm $O$).
- **Ứng dụng vật lí:** Tổng các vectơ lực tác dụng lên một vật là hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$. Nếu vật cân bằng thì $\\sum \\vec{F}_i = \\vec{0}$.`
    },

    9: {
      num: 9,
      chapter: 4,
      chapterTitle: "Chương IV – Vectơ",
      title: "Tích của một vectơ với một số",
      body: `### 1. Định nghĩa và tính chất tích vectơ với số thực

- **Định nghĩa:** Cho số thực $k$ và vectơ $\\vec{a} \\ne \\vec{0}$. Tích của số $k$ với vectơ $\\vec{a}$ là một vectơ, kí hiệu $k\\vec{a}$, có các đặc trưng:
  - Cùng hướng với $\\vec{a}$ nếu $k > 0$; ngược hướng với $\\vec{a}$ nếu $k < 0$.
  - Độ dài: $|k\\vec{a}| = |k| \\cdot |\\vec{a}|$.
  - Quy ước: $0\\vec{a} = \\vec{0}$ và $k\\vec{0} = \\vec{0}$.
- **Các tính chất đại số:**
  - $k(m\\vec{a}) = (km)\\vec{a}$
  - $(k + m)\\vec{a} = k\\vec{a} + m\\vec{a}$
  - $k(\\vec{a} + \\vec{b}) = k\\vec{a} + k\\vec{b};\\quad k(\\vec{a} - \\vec{b}) = k\\vec{a} - k\\vec{b}$
  - $1\\vec{a} = \\vec{a};\\quad (-1)\\vec{a} = -\\vec{a}$

### 2. Điều kiện cùng phương và biểu diễn một vectơ

- **Điều kiện hai vectơ cùng phương:** Hai vectơ $\\vec{a}$ và $\\vec{b}$ (với $\\vec{a} \\ne \\vec{0}$) cùng phương khi và chỉ khi có một số thực $k$ sao cho:
$$
\\vec{b} = k\\vec{a}
$$

- **Phân tích một vectơ theo hai vectơ không cùng phương:** Cho trước hai vectơ không cùng phương $\\vec{a}$ và $\\vec{b}$. Mọi vectơ $\\vec{x}$ bất kì trong mặt phẳng đều có thể biểu diễn duy nhất dưới dạng:
$$
\\vec{x} = m\\vec{a} + n\\vec{b}\\quad (m, n \\in \\mathbb{R})
$$
`
    },

    10: {
      num: 10,
      chapter: 4,
      chapterTitle: "Chương IV – Vectơ",
      title: "Vectơ trong mặt phẳng tọa độ",
      body: `### 1. Tọa độ của vectơ và tọa độ của điểm

Trong mặt phẳng tọa độ $Oxy$ với hai vectơ đơn vị $\\vec{i}$ (trục hoành) và $\\vec{j}$ (trục tung):
- **Tọa độ vectơ:** $\\vec{u} = (x; y) \\Leftrightarrow \\vec{u} = x\\vec{i} + y\\vec{j}$.
- **Tọa độ điểm:** $M(x_M; y_M) \\Leftrightarrow \\vec{OM} = (x_M; y_M)$.
- **Tọa độ vectơ nối hai điểm:** Với $A(x_A; y_A)$ và $B(x_B; y_B)$:
$$
\\vec{AB} = (x_B - x_A;\\, y_B - y_A)
$$

- **Độ dài vectơ:** $|\\vec{u}| = \\sqrt{x^2 + y^2}$. Khoảng cách $AB = |\\vec{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.

### 2. Các phép toán tọa độ và công thức trung điểm, trọng tâm

Cho $\\vec{u} = (x_1; y_1), \\vec{v} = (x_2; y_2)$ và số thực $k$:
- **Cộng và trừ:** $\\vec{u} \\pm \\vec{v} = (x_1 \\pm x_2;\\, y_1 \\pm y_2)$.
- **Nhân với số:** $k\\vec{u} = (kx_1;\\, ky_1)$.
- **Hai vectơ bằng nhau:** $\\vec{u} = \\vec{v} \\Leftrightarrow x_1 = x_2 \\text{ và } y_1 = y_2$.
- **Điều kiện cùng phương:** $\\vec{u}$ cùng phương $\\vec{v}$ (với $\\vec{v} \\ne \\vec{0}$) $\\Leftrightarrow x_1y_2 - x_2y_1 = 0$ (hoặc $\\frac{x_1}{x_2} = \\frac{y_1}{y_2}$ nếu mẫu số khác 0).
- **Tọa độ trung điểm $M$ của đoạn thẳng $AB$:**
$$
x_M = \\frac{x_A + x_B}{2};\\quad y_M = \\frac{y_A + y_B}{2}
$$

- **Tọa độ trọng tâm $G$ của tam giác $ABC$:**
$$
x_G = \\frac{x_A + x_B + x_C}{3};\\quad y_G = \\frac{y_A + y_B + y_C}{3}
$$
`
    },

    11: {
      num: 11,
      chapter: 4,
      chapterTitle: "Chương IV – Vectơ",
      title: "Tích vô hướng của hai vectơ",
      body: `### 1. Định nghĩa tích vô hướng và tính chất

- **Góc giữa hai vectơ:** Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ khác $\\vec{0}$. Lấy điểm $O$, dựng $\\vec{OA} = \\vec{a}, \\vec{OB} = \\vec{b}$. Góc $\\widehat{AOB} \\in [0^\\circ; 180^\\circ]$ gọi là góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$, kí hiệu $(\\vec{a}, \\vec{b})$.
- **Định nghĩa tích vô hướng:**
$$
\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})
$$

- **Quy ước:** Nếu ít nhất một trong hai vectơ là $\\vec{0}$ thì $\\vec{a} \\cdot \\vec{b} = 0$.
- **Bình phương vô hướng:** $\\vec{a}^2 = \\vec{a} \\cdot \\vec{a} = |\\vec{a}|^2 \\ge 0$.
- **Điều kiện vuông góc:** $\\vec{a} \\perp \\vec{b} \\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0$ (với $\\vec{a}, \\vec{b} \\ne \\vec{0}$).

### 2. Biểu thức tọa độ và ứng dụng hình học

Cho $\\vec{a} = (x_1; y_1)$ và $\\vec{b} = (x_2; y_2)$:
- **Biểu thức tọa độ tích vô hướng:**
$$
\\vec{a} \\cdot \\vec{b} = x_1x_2 + y_1y_2
$$

- **Độ dài vectơ:** $|\\vec{a}| = \\sqrt{x_1^2 + y_1^2}$.
- **Góc giữa hai vectơ:**
$$
\\cos(\\vec{a}, \\vec{b}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|} = \\frac{x_1x_2 + y_1y_2}{\\sqrt{x_1^2 + y_1^2} \\cdot \\sqrt{x_2^2 + y_2^2}}
$$

- **Hai vectơ vuông góc:** $x_1x_2 + y_1y_2 = 0$.`
    },

    12: {
      num: 12,
      chapter: 5,
      chapterTitle: "Chương V – Các số đặc trưng của mẫu số liệu không ghép nhóm",
      title: "Số gần đúng và sai số",
      body: `### 1. Số gần đúng và sai số tuyệt đối

- **Số gần đúng:** Các giá trị thu được từ kết quả đo đạc bằng dụng cụ hoặc tính toán xấp xỉ gọi là số gần đúng $a$ của giá trị đúng $\\overline{a}$.
- **Sai số tuyệt đối:** Kí hiệu $\\Delta_a = |\\overline{a} - a|$.
- **Độ chính xác $d$:** Nếu biết $\\Delta_a \\le d$ thì ta viết kết quả đo là:
$$
\\overline{a} = a \\pm d\\quad \\text{nghĩa là}\\quad a - d \\le \\overline{a} \\le a + d
$$

- **Sai số tương đối:** Đặc trưng cho độ chính xác của phép đo:
$$
\\delta_a = \\frac{\\Delta_a}{|a|} \\le \\frac{d}{|a|} \\times 100\\%
$$


### 2. Quy tắc làm tròn số và chữ số có nghĩa

- **Quy tắc làm tròn:**
  - Nếu chữ số ngay sau hàng làm tròn nhỏ hơn 5 thì giữ nguyên chữ số hàng làm tròn.
  - Nếu chữ số ngay sau hàng làm tròn từ 5 trở lên thì tăng chữ số hàng làm tròn thêm 1 đơn vị.
- **Làm tròn số gần đúng căn cứ vào độ chính xác $d$:**
  - Nếu độ chính xác $d$ đến hàng đơn vị nào thì ta làm tròn số gần đúng $a$ đến hàng cao hơn hàng của chữ số khác 0 đầu tiên bên trái của $d$ một bậc.`
    },

    13: {
      num: 13,
      chapter: 5,
      chapterTitle: "Chương V – Các số đặc trưng của mẫu số liệu không ghép nhóm",
      title: "Các số đặc trưng đo xu thế trung tâm",
      body: `### 1. Số trung bình và Trung vị

Cho mẫu số liệu đã sắp xếp theo thứ tự không giảm $x_1 \\le x_2 \\le ... \\le x_n$:
- **Số trung bình cộng (Mean):**
$$
\\bar{x} = \\frac{x_1 + x_2 + ... + x_n}{n} = \\frac{\\sum_{i=1}^k m_i x_i}{n}
$$

(Số trung bình phản ánh mức độ trung tâm của dữ liệu nhưng rất nhạy cảm với các giá trị bất thường).
- **Trung vị (Median - $M_e$):**
  - Nếu $n$ lẻ: $M_e = x_{\\frac{n+1}{2}}$ (phần tử chính giữa).
  - Nếu $n$ chẵn: $M_e = \\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2} + 1}}{2}$ (trung bình cộng của hai phần tử chính giữa).

### 2. Tứ phân vị và Mốt

- **Tứ phân vị ($Q_1, Q_2, Q_3$):** Chia mẫu số liệu thành 4 phần có số lượng phần tử bằng nhau:
  - $Q_2 = M_e$ (trung vị của toàn bộ mẫu số liệu).
  - $Q_1$ (Tứ phân vị thứ nhất): Là trung vị của nửa số liệu bên trái $Q_2$ (không bao gồm $Q_2$ nếu $n$ lẻ).
  - $Q_3$ (Tứ phân vị thứ ba): Là trung vị của nửa số liệu bên phải $Q_2$ (không bao gồm $Q_2$ nếu $n$ lẻ).
- **Mốt (Mode - $M_o$):** Là giá trị có tần số xuất hiện lớn nhất trong mẫu số liệu. Một mẫu có thể có 1 mốt, nhiều mốt hoặc không có mốt.`
    },

    14: {
      num: 14,
      chapter: 5,
      chapterTitle: "Chương V – Các số đặc trưng của mẫu số liệu không ghép nhóm",
      title: "Các số đặc trưng đo độ phân tán",
      body: `### 1. Khoảng biến thiên và Khoảng tứ phân vị

- **Khoảng biến thiên (Range):**
$$
R = x_{\\max} - x_{\\min}
$$

- **Khoảng tứ phân vị (Interquartile Range - $\\Delta_Q$):**
$$
\\Delta_Q = Q_3 - Q_1
$$

(Đặc trưng cho độ phân tán của 50% số liệu trung tâm, không bị ảnh hưởng bởi các giá trị ngoại lai).
- **Xác định giá trị bất thường (Outliers):** Một giá trị $x$ được xem là bất thường nếu:
$$
x < Q_1 - 1.5\\Delta_Q\\quad \\text{hoặc}\\quad x > Q_3 + 1.5\\Delta_Q
$$


### 2. Phương sai và Độ lệch chuẩn

- **Phương sai (Variance - $s^2$):** Là trung bình cộng các bình phương độ lệch giữa mỗi giá trị và số trung bình:
$$
s^2 = \\frac{1}{n}\\sum_{i=1}^n (x_i - \\bar{x})^2 = \\frac{1}{n}\\sum_{i=1}^n x_i^2 - (\\bar{x})^2
$$

- **Độ lệch chuẩn (Standard Deviation - $s$):**
$$
s = \\sqrt{s^2}
$$

Độ lệch chuẩn có cùng đơn vị với dữ liệu đo, $s$ càng nhỏ chứng tỏ mẫu số liệu càng đồng đều và tập trung quanh giá trị trung bình.`
    },

    15: {
      num: 15,
      chapter: 6,
      chapterTitle: "Chương VI – Hàm số, đồ thị và ứng dụng",
      title: "Hàm số",
      body: `### 1. Định nghĩa hàm số, tập xác định và tập giá trị

- **Định nghĩa:** Nếu với mỗi giá trị của $x \\in D$ có tương ứng duy nhất một giá trị $y \\in \\mathbb{R}$ thì ta có một hàm số: $y = f(x)$.
  - $x$: biến số độc lập; $y$: biến số phụ thuộc.
  - $D$: tập xác định (tập hợp tất cả các giá trị của $x$ làm cho biểu thức $f(x)$ có nghĩa).
  - Tập giá trị: $T = \\{f(x) \\mid x \\in D\\}$.
- **Quy tắc tìm tập xác định:**
  - Biểu thức phân thức $\\frac{P(x)}{Q(x)}$ có nghĩa khi $Q(x) \\ne 0$.
  - Biểu thức căn bậc chẵn $\\sqrt{P(x)}$ có nghĩa khi $P(x) \\ge 0$.
  - Biểu thức dưới mẫu có căn $\\frac{1}{\\sqrt{P(x)}}$ có nghĩa khi $P(x) > 0$.

### 2. Sự biến thiên của hàm số trên một khoảng

Cho hàm số $y = f(x)$ xác định trên khoảng $(a; b)$:
- **Hàm số đồng biến (tăng):** Với mọi $x_1, x_2 \\in (a; b)$, nếu $x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$. Trên đồ thị, đường cong đi lên từ trái sang phải.
- **Hàm số nghịch biến (giảm):** Với mọi $x_1, x_2 \\in (a; b)$, nếu $x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$. Trên đồ thị, đường cong đi xuống từ trái sang phải.`
    },

    16: {
      num: 16,
      chapter: 6,
      chapterTitle: "Chương VI – Hàm số, đồ thị và ứng dụng",
      title: "Hàm số bậc hai",
      body: `### 1. Định nghĩa và đồ thị hàm số bậc hai (Parabol)

- **Định nghĩa:** Hàm số bậc hai có dạng $y = ax^2 + bx + c$ ($a \\ne 0$), có tập xác định $D = \\mathbb{R}$.
- **Đồ thị Parabol ($P$):**
  - **Đỉnh của Parabol:** $I\\left(-\\frac{b}{2a};\\, -\\frac{\\Delta}{4a}\\right)$ với $\\Delta = b^2 - 4ac$.
  - **Trục đối xứng:** Đường thẳng $x = -\\frac{b}{2a}$.
  - **Bề lõm:** Quay lên trên nếu $a > 0$; quay xuống dưới nếu $a < 0$.
  - **Giao điểm với trục tọa độ:** Cắt trục tung $Oy$ tại điểm $(0; c)$.

### 2. Chiều biến thiên và bảng biến thiên

- **Trường hợp $a > 0$:**
  - Hàm số nghịch biến trên khoảng $\\left(-\\infty; -\\frac{b}{2a}\\right)$.
  - Hàm số đồng biến trên khoảng $\\left(-\\frac{b}{2a}; +\\infty\\right)$.
  - Đạt giá trị nhỏ nhất tại $y_{\\min} = -\\frac{\\Delta}{4a}$ khi $x = -\\frac{b}{2a}$.
- **Trường hợp $a < 0$:**
  - Hàm số đồng biến trên khoảng $\\left(-\\infty; -\\frac{b}{2a}\\right)$.
  - Hàm số nghịch biến trên khoảng $\\left(-\\frac{b}{2a}; +\\infty\\right)$.
  - Đạt giá trị lớn nhất tại $y_{\\max} = -\\frac{\\Delta}{4a}$ khi $x = -\\frac{b}{2a}$.`
    },

    17: {
      num: 17,
      chapter: 6,
      chapterTitle: "Chương VI – Hàm số, đồ thị và ứng dụng",
      title: "Dấu của tam thức bậc hai",
      body: `### 1. Định lí về dấu của tam thức bậc hai

Tam thức bậc hai là biểu thức $f(x) = ax^2 + bx + c$ ($a \\ne 0$). Biệt thức $\\Delta = b^2 - 4ac$:
- **Trường hợp $\\Delta < 0$:** $f(x)$ cùng dấu với hệ số $a$ với mọi $x \\in \\mathbb{R}$ ($a \\cdot f(x) > 0$).
- **Trường hợp $\\Delta = 0$:** $f(x)$ cùng dấu với hệ số $a$ với mọi $x \\ne -\\frac{b}{2a}$; tại $x = -\\frac{b}{2a}$ thì $f(x) = 0$.
- **Trường hợp $\\Delta > 0$:** $f(x)$ có 2 nghiệm phân biệt $x_1 < x_2$.
  - Trong khoảng hai nghiệm $(x_1; x_2)$: $f(x)$ **trái dấu** với hệ số $a$.
  - Ngoài khoảng hai nghiệm $(-\\infty; x_1) \\cup (x_2; +\\infty)$: $f(x)$ **cùng dấu** với hệ số $a$.
  - *(Quy tắc nhớ: "Trong trái, ngoài cùng")*.

### 2. Giải bất phương trình bậc hai một ẩn

- Tìm nghiệm của tam thức $f(x) = ax^2 + bx + c = 0$.
- Lập bảng xét dấu của $f(x)$ dựa vào quy tắc dấu tam thức bậc hai.
- Căn cứ vào chiều bất phương trình ($> 0, \\ge 0, < 0, \\le 0$) để kết luận tập nghiệm.`
    },

    18: {
      num: 18,
      chapter: 6,
      chapterTitle: "Chương VI – Hàm số, đồ thị và ứng dụng",
      title: "Phương trình quy về phương trình bậc hai",
      body: `### 1. Dạng phương trình $\\sqrt{f(x)} = \\sqrt{g(x)}$

- **Quy trình giải:**
  - **Bước 1:** Bình phương hai vế đưa về phương trình bậc hai: $f(x) = g(x)$.
  - **Bước 2:** Giải phương trình bậc hai tìm nghiệm $x$.
  - **Bước 3 (Thử lại):** Thay các nghiệm vừa tìm được vào phương trình ban đầu $\\sqrt{f(x)} = \\sqrt{g(x)}$ để loại bỏ các nghiệm ngoại lai.

### 2. Dạng phương trình $\\sqrt{f(x)} = g(x)$

- **Phương pháp tương đương an toàn:**
$$
\\sqrt{f(x)} = g(x) \\Leftrightarrow \\begin{cases} g(x) \\ge 0 \\\\ f(x) = [g(x)]^2 \\end{cases}
$$

- **Phương pháp bình phương thử lại:**
  - Bình phương hai vế: $f(x) = [g(x)]^2$.
  - Giải phương trình bậc hai thu được các nghiệm $x$.
  - Bắt buộc thử lại từng nghiệm vào điều kiện $g(x) \\ge 0$ và phương trình gốc để kết luận.`
    },

    19: {
      num: 19,
      chapter: 7,
      chapterTitle: "Chương VII – Phương pháp tọa độ trong mặt phẳng",
      title: "Phương trình đường thẳng",
      body: `### 1. Vectơ pháp tuyến, vectơ chỉ phương và các dạng phương trình

- **Vectơ chỉ phương (VTCP):** Vectơ $\\vec{u} \\ne \\vec{0}$ có giá song song hoặc trùng với đường thẳng $\\Delta$.
- **Vectơ pháp tuyến (VTPT):** Vectơ $\\vec{n} \\ne \\vec{0}$ vuông góc với giá của VTCP $\\vec{u}$. Nếu $\\vec{u} = (a; b)$ thì $\\vec{n} = (-b; a)$ hoặc $(b; -a)$.
- **Phương trình tham số của đường thẳng:** Đi qua $M_0(x_0; y_0)$ và nhận $\\vec{u} = (u_1; u_2)$ làm VTCP:
$$
\\begin{cases} x = x_0 + u_1 t \\\\ y = y_0 + u_2 t \\end{cases}\\quad (t \\in \\mathbb{R})
$$

- **Phương trình tổng quát của đường thẳng:** Đi qua $M_0(x_0; y_0)$ và nhận $\\vec{n} = (a; b)$ làm VTPT:
$$
a(x - x_0) + b(y - y_0) = 0 \\iff ax + by + c = 0\\quad (a^2 + b^2 \\ne 0)
$$


### 2. Phương trình theo đoạn chắn và hệ số góc

- **Phương trình theo đoạn chắn:** Cắt trục $Ox$ tại $(a; 0)$ và $Oy$ tại $(0; b)$ ($a, b \\ne 0$): $\\frac{x}{a} + \\frac{y}{b} = 1$.
- **Phương trình theo hệ số góc:** $y = kx + m$ (với hệ số góc $k = \\tan\\alpha = -\\frac{a}{b}$).`
    },

    20: {
      num: 20,
      chapter: 7,
      chapterTitle: "Chương VII – Phương pháp tọa độ trong mặt phẳng",
      title: "Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách",
      body: `### 1. Vị trí tương đối của hai đường thẳng

Cho hai đường thẳng $\\Delta_1: a_1x + b_1y + c_1 = 0$ và $\\Delta_2: a_2x + b_2y + c_2 = 0$:
- Xét hệ phương trình:
$$
\\begin{cases} a_1x + b_1y = -c_1 \\\\ a_2x + b_2y = -c_2 \\end{cases}
$$

  - Hệ có nghiệm duy nhất $\\iff \\Delta_1$ cắt $\\Delta_2$ tại một điểm.
  - Hệ vô nghiệm $\\iff \\Delta_1 \\parallel \\Delta_2$.
  - Hệ vô số nghiệm $\\iff \\Delta_1 \\equiv \\Delta_2$.
- **Điều kiện vuông góc:** $\\Delta_1 \\perp \\Delta_2 \\iff a_1a_2 + b_1b_2 = 0$.

### 2. Góc giữa hai đường thẳng và Công thức tính khoảng cách

- **Góc giữa hai đường thẳng:** $\\varphi = (\\Delta_1, \\Delta_2) \\in [0^\\circ; 90^\\circ]$:
$$
\\cos\\varphi = \\frac{|a_1a_2 + b_1b_2|}{\\sqrt{a_1^2 + b_1^2} \\cdot \\sqrt{a_2^2 + b_2^2}}
$$

- **Khoảng cách từ điểm $M_0(x_0; y_0)$ đến đường thẳng $\\Delta: ax + by + c = 0$:**
$$
d(M_0, \\Delta) = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}
$$
`
    },

    21: {
      num: 21,
      chapter: 7,
      chapterTitle: "Chương VII – Phương pháp tọa độ trong mặt phẳng",
      title: "Đường tròn trong mặt phẳng tọa độ",
      body: `### 1. Phương trình chính tắc và phương trình tổng quát

- **Phương trình chính tắc:** Đường tròn $(C)$ có tâm $I(a; b)$, bán kính $R > 0$:
$$
(x - a)^2 + (y - b)^2 = R^2
$$

- **Phương trình khai triển (tổng quát):**
$$
x^2 + y^2 - 2ax - 2by + c = 0
$$

Điều kiện để phương trình trên là phương trình đường tròn là:
$$
a^2 + b^2 - c > 0
$$

Khi đó đường tròn có tâm $I(a; b)$ và bán kính $R = \\sqrt{a^2 + b^2 - c}$.

### 2. Phương trình tiếp tuyến của đường tròn

- Cho đường tròn $(C)$ tâm $I(a; b)$, bán kính $R$ và điểm $M_0(x_0; y_0) \\in (C)$.
- Tiếp tuyến của $(C)$ tại điểm $M_0$ có vectơ pháp tuyến là $\\vec{IM_0} = (x_0 - a;\\, y_0 - b)$:
$$
(x_0 - a)(x - x_0) + (y_0 - b)(y - y_0) = 0
$$
`
    },

    22: {
      num: 22,
      chapter: 7,
      chapterTitle: "Chương VII – Phương pháp tọa độ trong mặt phẳng",
      title: "Ba đường conic",
      body: `### 1. Đường Elip (E)

- **Định nghĩa:** Tập hợp các điểm $M$ sao cho $MF_1 + MF_2 = 2a$ ($a > c > 0$).
- **Phương trình chính tắc:**
$$
\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1\\quad (a > b > 0;\\, b^2 = a^2 - c^2)
$$

- **Đặc trưng hình học:**
  - Tiêu điểm: $F_1(-c; 0), F_2(c; 0)$, tiêu cự $2c$.
  - Đỉnh trục lớn: $A_1(-a; 0), A_2(a; 0)$, độ dài trục lớn $2a$.
  - Đỉnh trục nhỏ: $B_1(0; -b), B_2(0; b)$, độ dài trục nhỏ $2b$.

### 2. Đường Hypebol (H) và Đường Parabol (P)

- **Đường Hypebol (H):** Tập hợp các điểm $M$ sao cho $|MF_1 - MF_2| = 2a$ ($c > a > 0$).
  - **Phương trình chính tắc:**
$$
\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1\\quad (b^2 = c^2 - a^2)
$$

  - Tiêu điểm: $F_1(-c; 0), F_2(c; 0)$; hai đường tiệm cận: $y = \\pm \\frac{b}{a}x$.
- **Đường Parabol (P):** Tập hợp các điểm $M$ cách đều tiêu điểm $F$ và đường chuẩn $\\Delta$.
  - **Phương trình chính tắc:**
$$
y^2 = 2px\\quad (p > 0 \\text{ là tham số tiêu})
$$

  - Tiêu điểm: $F\\left(\\frac{p}{2};\\, 0\\right)$; đường chuẩn: $\\Delta: x = -\\frac{p}{2}$.`
    },

    23: {
      num: 23,
      chapter: 8,
      chapterTitle: "Chương VIII – Đại số tổ hợp",
      title: "Quy tắc đếm",
      body: `### 1. Quy tắc cộng và sơ đồ phân nhóm

- **Quy tắc cộng:** Giả sử một công việc có thể hoàn thành theo một trong hai phương án $A$ hoặc $B$ độc lập (loại trừ nhau):
  - Phương án $A$ có $m$ cách thực hiện.
  - Phương án $B$ có $n$ cách thực hiện.
  - Khi đó có $m + n$ cách hoàn thành công việc.
- **Mở rộng cho $k$ phương án:** Nếu các phương án rời nhau đôi một thì tổng số cách là $n_1 + n_2 + ... + n_k$.

### 2. Quy tắc nhân và Sơ đồ hình cây

- **Quy tắc nhân:** Giả sử một công việc bao gồm hai công đoạn $A$ và $B$ thực hiện liên tiếp nhau:
  - Công đoạn $A$ có $m$ cách thực hiện.
  - Với mỗi cách thực hiện công đoạn $A$, có $n$ cách thực hiện công đoạn $B$.
  - Khi đó có $m \\times n$ cách hoàn thành công việc.
- **Sơ đồ hình cây (Tree diagram):** Dùng để liệt kê trực quan các nhánh lựa chọn theo từng bước, giúp kiểm soát đầy đủ mọi trường hợp không bị bỏ sót.`
    },

    24: {
      num: 24,
      chapter: 8,
      chapterTitle: "Chương VIII – Đại số tổ hợp",
      title: "Hoán vị, chỉnh hợp và tổ hợp",
      body: `### 1. Hoán vị và Chỉnh hợp (Có thứ tự)

- **Giai thừa:** $n! = 1 \\cdot 2 \\cdot 3 \\cdots n$, quy ước $0! = 1$.
- **Hoán vị:** Một cách sắp xếp có thứ tự $n$ phần tử phân biệt gọi là một hoán vị:
$$
P_n = n!
$$

- **Chỉnh hợp chập $k$ của $n$ ($1 \\le k \\le n$):** Chọn $k$ phần tử từ $n$ phần tử và sắp xếp có thứ tự:
$$
A_n^k = \\frac{n!}{(n - k)!} = n(n - 1)\\cdots(n - k + 1)
$$


### 2. Tổ hợp (Không phân biệt thứ tự)

- **Tổ hợp chập $k$ của $n$ ($0 \\le k \\le n$):** Chọn $k$ phần tử từ $n$ phần tử phân biệt mà không quan tâm đến thứ tự:
$$
C_n^k = \\frac{n!}{k!(n - k)!}
$$

- **Mối liên hệ giữa chỉnh hợp và tổ hợp:**
$$
A_n^k = k! \\cdot C_n^k
$$

- **Các tính chất đối xứng và hệ thức Pascal:**
  - $C_n^k = C_n^{n - k}$
  - $C_{n-1}^{k-1} + C_{n-1}^k = C_n^k$`
    },

    25: {
      num: 25,
      chapter: 8,
      chapterTitle: "Chương VIII – Đại số tổ hợp",
      title: "Nhị thức Newton",
      body: `### 1. Khai triển nhị thức Newton

- **Công thức khai triển với số mũ nguyên dương $n$:**
$$
(a + b)^n = \\sum_{k=0}^n C_n^k a^{n-k}b^k = C_n^0 a^n + C_n^1 a^{n-1}b + C_n^2 a^{n-2}b^2 + ... + C_n^n b^n
$$

- **Khai triển với $n = 4$ và $n = 5$ chuẩn SGK Lớp 10:**
  - $(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$.
  - $(a + b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$.

### 2. Số hạng tổng quát và Tam giác Pascal

- **Số hạng thứ $k + 1$ trong khai triển:**
$$
T_{k+1} = C_n^k a^{n-k}b^k\\quad (k = 0, 1, ..., n)
$$

- **Tính chất hệ số nhị thức:**
  - Các hệ số cách đều số hạng đầu và số hạng cuối thì bằng nhau ($C_n^k = C_n^{n-k}$).
  - Tổng các hệ số: $C_n^0 + C_n^1 + ... + C_n^n = 2^n$ (khi thay $a = b = 1$).`
    },

    26: {
      num: 26,
      chapter: 9,
      chapterTitle: "Chương IX – Tính xác suất theo định nghĩa cổ điển",
      title: "Biến cố và định nghĩa cổ điển của xác suất",
      body: `### 1. Phép thử, Không gian mẫu và Biến cố

- **Phép thử ngẫu nhiên:** Là phép thử mà kết quả không thể đoán trước được, nhưng tập hợp tất cả các kết quả có thể xảy ra thì hoàn toàn xác định.
- **Không gian mẫu ($\\Omega$):** Là tập hợp tất cả các kết quả có thể xảy ra của phép thử.
- **Biến cố ($A$):** Là một tập con của không gian mẫu ($A \\subseteq \\Omega$). Biến cố chắc chắn là $\\Omega$; biến cố không thể là $\\varnothing$.
- **Các phép toán trên biến cố:**
  - Biến cố đối $\\overline{A} = \\Omega \\setminus A$.
  - Biến cố hợp $A \\cup B$ ("Biến cố A hoặc B xảy ra").
  - Biến cố giao $A \\cap B$ hay $AB$ ("Cả hai biến cố A và B cùng xảy ra").
  - Hai biến cố xung khắc: $A \\cap B = \\varnothing$.

### 2. Định nghĩa cổ điển của xác suất

- **Công thức xác suất cổ điển (khi các kết quả đồng khả năng):**
$$
P(A) = \\frac{n(A)}{n(\\Omega)}
$$

trong đó $n(A)$ là số phần tử thuận lợi cho biến cố $A$, $n(\\Omega)$ là số phần tử của không gian mẫu.
- **Các tính chất cơ bản:**
  - $0 \\le P(A) \\le 1$; $P(\\Omega) = 1$; $P(\\varnothing) = 0$.
  - Xác suất biến cố đối: $P(\\overline{A}) = 1 - P(A)$.
  - **Công thức cộng xác suất:**
$$
P(A \\cup B) = P(A) + P(B) - P(A \\cap B)
$$

(Nếu $A$ và $B$ xung khắc thì $P(A \\cup B) = P(A) + P(B)$).`
    },

    27: {
      num: 27,
      chapter: 9,
      chapterTitle: "Chương IX – Tính xác suất theo định nghĩa cổ điển",
      title: "Thực hành tính xác suất",
      body: `### 1. Quy trình tính xác suất bằng phương pháp tổ hợp

- **Bước 1:** Xác định phép thử và tính số phần tử của không gian mẫu $n(\\Omega)$ (thường dùng quy tắc nhân hoặc tổ hợp $C_n^k$).
- **Bước 2:** Xác định biến cố $A$ cần tính và đếm số kết quả thuận lợi $n(A)$ bằng các quy tắc đếm tương ứng.
- **Bước 3:** Áp dụng công thức $P(A) = \\frac{n(A)}{n(\\Omega)}$.

### 2. Sử dụng biến cố đối và sơ đồ hình cây

- Khi bài toán yêu cầu biến cố có các từ khóa như "ít nhất một", "có ít nhất...", việc tính trực tiếp gồm nhiều trường hợp phức tạp, ta nên chuyển qua tính biến cố đối $\\overline{A}$ ("không có phần tử nào thỏa mãn"), sau đó suy ra:
$$
P(A) = 1 - P(\\overline{A})
$$

- Đối với phép thử gồm nhiều bước nối tiếp nhau (như gieo đồng xu liên tiếp, rút thẻ có hoàn lại hoặc không hoàn lại), sử dụng sơ đồ cây giúp phân nhánh tính xác suất nhanh chóng và trực quan.`
    },

    // 3 Hoạt động thực hành trải nghiệm
    28: {
      num: 28,
      chapter: 10,
      chapterTitle: "Hoạt động thực hành, trải nghiệm",
      title: "Tìm hiểu một số kiến thức về tài chính",
      body: `### 1. Mô hình hóa biểu giá bán lẻ điện theo bậc

- Biểu giá điện sinh hoạt của Việt Nam được chia thành các bậc lũy tiến (Bậc 1: 0 - 50 kWh; Bậc 2: 51 - 100 kWh; Bậc 3: 101 - 200 kWh; ...).
- **Hàm số từng đoạn:** Số tiền phải trả $y$ (đồng) được mô tả bằng một hàm số xác định theo từng khoảng của lượng điện tiêu thụ $x$ (kWh).
- Khi tính tiền điện cần tính đúng mức lũy tiến ở từng khoảng cộng thêm thuế VAT (10%), kiểm tra tính liên tục của hàm số tài chính tại các điểm mốc đổi bậc.

### 2. Kế hoạch tài chính và lãi suất tiết kiệm

- Phân biệt giữa thu nhập cố định, thu nhập biến đổi và các khoản chi tiêu thiết yếu vs chi tiêu linh hoạt.
- Áp dụng công thức lãi đơn và lãi kép trong bài toán tích lũy tài chính học đường.`
    },

    29: {
      num: 29,
      chapter: 10,
      chapterTitle: "Hoạt động thực hành, trải nghiệm",
      title: "Mạng xã hội: Lợi và hại",
      body: `### 1. Thiết kế bảng khảo sát và thu thập dữ liệu thống kê

- Thiết kế phiếu khảo sát mẫu về thời gian sử dụng mạng xã hội hàng ngày (phút/ngày), mục đích sử dụng (học tập, giải trí, kết nối bạn bè) và mức độ ảnh hưởng đến giấc ngủ, kết quả học tập.
- Đảm bảo mẫu khảo sát được chọn ngẫu nhiên, không có định kiến và bảo mật thông tin người tham gia.

### 2. Phân tích dữ liệu bằng các số đặc trưng

- Tính số trung bình $\\bar{x}$, trung vị $M_e$, mốt $M_o$, khoảng biến thiên $R$, khoảng tứ phân vị $\\Delta_Q$ và độ lệch chuẩn $s$.
- Vẽ biểu đồ hộp (Box-plot) để so sánh thời gian sử dụng mạng xã hội giữa các nhóm học sinh, rút ra kết luận khoa học dựa trên dữ liệu thực chứng.`
    },

    30: {
      num: 30,
      chapter: 10,
      chapterTitle: "Hoạt động thực hành, trải nghiệm",
      title: "Ước tính số cá thể trong một quần thể",
      body: `### 1. Phương pháp Bắt – Đánh dấu – Thả – Bắt lại (Lincoln - Petersen)

- **Quy trình thực nghiệm:**
  - Lần 1: Bắt ngẫu nhiên $m$ cá thể trong quần thể, đánh dấu an toàn (không làm ảnh hưởng sức khỏe/hành vi) rồi thả lại vào tự nhiên.
  - Chờ một thời gian để các cá thể đánh dấu phân bố hòa nhập đều vào quần thể.
  - Lần 2: Bắt ngẫu nhiên $n$ cá thể, kiểm tra thấy có $r$ cá thể mang dấu.
- **Công thức ước tính kích thước quần thể $N$:**
$$
\\frac{r}{n} \\approx \\frac{m}{N} \\implies N \\approx \\frac{m \\cdot n}{r}
$$


### 2. Điều kiện áp dụng và sai số

- Quần thể phải khép kín (tỉ lệ sinh, tử, xuất cư, nhập cư không đáng kể trong thời gian khảo sát).
- Dấu đánh không bị mất và các cá thể có xác suất bị bắt như nhau ở cả hai lần. Nếu số cá thể bắt lại mang dấu $r$ quá nhỏ thì sai số ước lượng sẽ rất lớn.`
    }
  },

  // Sổ tay công thức tra cứu nhanh cho modal-formulas
  formulaTableText: `### 1. Đại số & Lượng giác

| Mạch kiến thức | Công thức cốt lõi | Điều kiện |
|---|---|---|
| Số phần tử hợp hai tập | $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$ | Tập hữu hạn |
| Hằng đẳng thức lượng giác | $\\sin^2\\alpha + \\cos^2\\alpha = 1$ | Mọi $\\alpha$ |
| Tang & Cotang | $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha};\\quad \\tan\\alpha \\cdot \\cot\\alpha = 1$ | $\\alpha \\ne 90^\\circ; \\alpha \\ne 0^\\circ, 180^\\circ$ |
| Định lí côsin | $a^2 = b^2 + c^2 - 2bc\\cos A$ | Tam giác $ABC$ |
| Định lí sin | $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$ | Tam giác $ABC$, bán kính $R$ |
| Diện tích tam giác | $S = \\frac{1}{2}ab\\sin C = pr = \\frac{abc}{4R} = \\sqrt{p(p-a)(p-b)(p-c)}$ | $p = \\frac{a+b+c}{2}$ |

### 2. Tọa độ phẳng Oxy & Vectơ

| Mạch kiến thức | Công thức cốt lõi | Ý nghĩa |
|---|---|---|
| Tọa độ vectơ nối hai điểm | $\\vec{AB} = (x_B - x_A;\\, y_B - y_A)$ | Hướng từ $A$ đến $B$ |
| Tích vô hướng tọa độ | $\\vec{a} \\cdot \\vec{b} = x_1x_2 + y_1y_2 = |\\vec{a}||\\vec{b}|\\cos\\theta$ | Tính góc & vuông góc |
| Khoảng cách điểm đến đường | $d(M_0, \\Delta) = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}$ | $\\Delta: ax + by + c = 0$ |
| Góc giữa hai đường thẳng | $\\cos\\varphi = \\frac{|a_1a_2 + b_1b_2|}{\\sqrt{a_1^2 + b_1^2}\\sqrt{a_2^2 + b_2^2}}$ | $\\varphi \\in [0^\\circ; 90^\\circ]$ |
| Phương trình đường tròn | $(x - a)^2 + (y - b)^2 = R^2$ | Tâm $I(a; b)$, bán kính $R$ |
| Chính tắc Elip | $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1\\quad (b^2 = a^2 - c^2)$ | $a > b > 0$, tiêu cự $2c$ |
| Chính tắc Hypebol | $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1\\quad (b^2 = c^2 - a^2)$ | Tiệm cận $y = \\pm \\frac{b}{a}x$ |
| Chính tắc Parabol | $y^2 = 2px$ | Tiêu điểm $F(p/2; 0)$, chuẩn $x = -p/2$ |

### 3. Thống kê, Tổ hợp & Xác suất

| Mạch kiến thức | Công thức cốt lõi | Ý nghĩa |
|---|---|---|
| Phương sai mẫu | $s^2 = \\frac{1}{n}\\sum (x_i - \\bar{x})^2$ | Đo mức độ phân tán |
| Độ lệch chuẩn | $s = \\sqrt{s^2}$ | Cùng đơn vị đo với dữ liệu |
| Hoán vị $n$ phần tử | $P_n = n!$ | Sắp xếp toàn bộ $n$ phần tử |
| Chỉnh hợp chập $k$ của $n$ | $A_n^k = \\frac{n!}{(n - k)!}$ | Chọn $k$ và xếp thứ tự |
| Tổ hợp chập $k$ của $n$ | $C_n^k = \\frac{n!}{k!(n - k)!}$ | Chọn $k$ không phân biệt thứ tự |
| Nhị thức Newton | $(a + b)^n = \\sum_{k=0}^n C_n^k a^{n-k}b^k$ | Khai triển lũy thừa bậc $n$ |
| Xác suất cổ điển | $P(A) = \\frac{n(A)}{n(\\Omega)}$ | Khi các kết quả đồng khả năng |
| Ước tính quần thể | $N \\approx \\frac{m \\cdot n}{r}$ | Phương pháp đánh dấu bắt lại |`,

  // Bảng sai lầm & Thuật ngữ cốt lõi cho modal-mistakes
  termsText: `### 1. Thuật ngữ cốt lõi cần nhớ chính xác

- **Mệnh đề logic:** Câu khẳng định chỉ có thể đúng hoặc sai, không chấp nhận câu cảm thán hay câu hỏi.
- **Khoảng vs Đoạn:** Khoảng $(a; b)$ không lấy hai đầu mút; Đoạn $[a; b]$ lấy cả hai đầu mút; Vô cực $\\pm\\infty$ luôn luôn dùng ngoặc tròn.
- **Định lí Cosin vs Định lí Sin:** Biết 2 cạnh kẹp 1 góc dùng Cosin; Biết cặp cạnh - góc đối diện hoặc bán kính $R$ dùng Sin.
- **Chỉnh hợp vs Tổ hợp:** Bài toán có phân biệt vai trò/thứ tự (nhất, nhì, ba; xếp hàng; số có các chữ số khác nhau) dùng Chỉnh hợp $A_n^k$; Bài toán chỉ chọn nhóm người, chọn quà dùng Tổ hợp $C_n^k$.
- **Biến cố xung khắc vs Độc lập:** Xung khắc nghĩa là không thể cùng xảy ra ($A \\cap B = \\varnothing$); Độc lập nghĩa là việc xảy ra của biến cố này không ảnh hưởng đến xác suất của biến cố kia.

### 2. Các sai lầm phổ biến thường gặp khi làm bài

- **Sai lầm 1 (Bình phương phương trình chứa căn):** Quên điều kiện $g(x) \\ge 0$ hoặc quên thử lại nghiệm vào phương trình ban đầu, dẫn đến lấy cả nghiệm ngoại lai.
- **Sai lầm 2 (Xét dấu tam thức bậc hai):** Quên xét trường hợp hệ số $a = 0$ khi đề bài cho tham số ở hệ số của $x^2$.
- **Sai lầm 3 (Khoảng cách điểm - đường thẳng):** Quên dấu giá trị tuyệt đối ở tử số trong công thức $d(M, \\Delta) = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}$.
- **Sai lầm 4 (Đoàn chắn Elip vs Hypebol):** Nhầm lẫn hệ thức liên hệ $a, b, c$: Elip có $a^2 = b^2 + c^2$ ($a$ lớn nhất); còn Hypebol có $c^2 = a^2 + b^2$ ($c$ lớn nhất).
- **Sai lầm 5 (Xác suất cổ điển):** Tự ý lấy tỉ lệ số phần tử khi các kết quả trong không gian mẫu KHÔNG đồng khả năng.`
};
