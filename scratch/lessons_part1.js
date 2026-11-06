// scratch/lessons_part1.js - Lessons 1 to 12 (Chapters 1 & 2)
module.exports = {
  1: {
    num: 1, chapter: 1, chapterTitle: "Chương I – Mở đầu",
    title: "Làm quen với Vật lí",
    body: `### 1. Đối tượng nghiên cứu và mục tiêu của Vật lí học

- **Đối tượng nghiên cứu:** Vật lí là ngành khoa học tự nhiên thực nghiệm nghiên cứu các dạng vận động cơ bản của vật chất (cơ, nhiệt, điện, từ, quang, hạt nhân) và năng lượng, cùng các quy luật tổng quát chi phối sự tương tác của chúng từ thang vi mô (hạt sơ cấp, quark, nguyên tử) đến thang vĩ mô (hành tinh, sao, thiên hà, vũ trụ).
- **Mục tiêu chính:** Khám phá các quy luật tự nhiên, xây dựng mô hình toán học và lí thuyết để mô tả chính xác và tiên đoán hành vi của các hệ vật chất.
- **Các lĩnh vực cơ bản:** Cơ học cổ điển, Nhiệt học và Nhiệt động lực học, Điện và Từ học, Quang học, Vật lí nguyên tử – hạt nhân, Thuyết tương đối và Cơ học lượng tử.

### 2. Phương pháp nghiên cứu trong Vật lí

- **Phương pháp thực nghiệm:** Quan sát hiện tượng $\\rightarrow$ Đặt câu hỏi và xây dựng giả thuyết khoa học $\\rightarrow$ Thiết kế thí nghiệm kiểm chứng $\\rightarrow$ Thu thập, phân tích và xử lí số liệu $\\rightarrow$ Rút ra kết luận hoặc định luật. Nếu kết quả thực nghiệm mâu thuẫn với giả thuyết, bắt buộc phải điều chỉnh hoặc bác bỏ giả thuyết.
- **Phương pháp lí thuyết:** Vận dụng các định luật đã được kiểm chứng kết hợp với công cụ toán học và suy luận logic để xây dựng mô hình lí thuyết $\\rightarrow$ Tiên đoán hiện tượng mới $\\rightarrow$ Thực nghiệm kiểm chứng tiên đoán (ví dụ: Maxwell dự đoán sóng điện từ trước khi Hertz tạo ra trong phòng thí nghiệm; Dirac dự đoán phản hạt positron).

### 3. Vai trò của Vật lí đối với đời sống, khoa học và công nghệ

- **Động lực của các cuộc cách mạng công nghiệp:**
  - Lần 1: Máy hơi nước dựa trên nguyên lí Nhiệt động lực học.
  - Lần 2: Năng lượng điện và động cơ điện dựa trên Định luật cảm ứng điện từ Faraday.
  - Lần 3: Máy tính điện tử, bán dẫn và internet dựa trên Vật lí chất rắn và Vật lí lượng tử.
  - Lần 4: Trí tuệ nhân tạo, lượng tử, vật liệu nano và robot tự hành.
- **Ứng dụng y học:** Chụp X-quang chẩn đoán xương, cộng hưởng từ hạt nhân MRI, xạ trị hạt nhân tiêu diệt khối u, vi phẫu laser.
- **Truyền thông và định vị:** Sóng vô tuyến, mạng 5G, cáp quang viễn thông và hệ thống định vị vệ tinh GPS (cần hiệu chỉnh sai số theo Thuyết tương đối rộng).
- **Môi trường và năng lượng tái tạo:** Khai thác năng lượng mặt trời, điện gió, năng lượng nhiệt hạch, giảm thiểu phát thải và ứng phó biến đổi khí hậu.`
  },

  2: {
    num: 2, chapter: 1, chapterTitle: "Chương I – Mở đầu",
    title: "Các quy tắc an toàn trong phòng thực hành Vật lí",
    body: `### 1. Tầm quan trọng của an toàn thực hành

- Phòng thực hành Vật lí sử dụng nhiều nguồn điện áp, nguồn phát nhiệt, hóa chất và thiết bị quang học công suất cao. Việc không tuân thủ quy tắc an toàn có thể gây chập điện, hỏa hoạn, bỏng nhiệt, tổn thương thị giác hoặc phá hủy thiết bị.

### 2. Quy tắc an toàn bắt buộc

- **An toàn sử dụng điện:**
  - Luôn kiểm tra mạch điện cẩn thận trước khi đóng điện; chỉ bật nguồn điện khi có sự đồng ý của giáo viên hướng dẫn.
  - Tắt nguồn điện ngay lập tức khi phát hiện mùi khét, tia lửa điện, khói hoặc tiếng kêu lạ.
  - Không bao giờ chạm tay ướt vào dây điện, ổ cắm hoặc thiết bị điện; không kéo giật dây điện khi rút phích cắm.
  - Chọn đúng thang đo dòng điện (A/mA) và điện áp (AC/DC) trên đồng hồ vạn năng; tuyệt đối không đo điện áp ở thang đo dòng điện (sẽ gây nổ cầu chì).
- **An toàn nhiệt và hóa chất:**
  - Khi đun chất lỏng trong ống nghiệm, hướng miệng ống nghiệm về phía không có người; dùng kẹp gỗ giữ ở 1/3 thân ống từ miệng xuống.
  - Tắt đèn cồn bằng cách úp nắp chụp; không thổi bằng miệng vì hơi cồn có thể bốc cháy lan ra ngoài.
- **An toàn quang học:**
  - Không chiếu chùm laser vào mắt người khác; không quan sát trực tiếp mặt trời qua thấu kính hoặc kính thiên văn nếu không có kính lọc chuẩn.

### 3. Hệ thống biển cảnh báo nguy hiểm

- **Biển báo cấm (Viền đỏ, gạch chéo đỏ, nền trắng):** Cấm đóng điện, cấm chạm vào, cấm dùng nước dập cháy điện.
- **Biển báo nguy hiểm (Tam giác vàng, viền đen):** Nguy hiểm điện cao áp, nguy hiểm tia laser, nguy hiểm cháy nổ, nguy hiểm vật sắc nhọn.
- **Biển chỉ dẫn an toàn (Hình vuông/chữ nhật, nền xanh):** Vị trí bình cứu hỏa CO₂, tủ thuốc sơ cấp cứu, kính bảo hộ, lối thoát hiểm.`
  },

  3: {
    num: 3, chapter: 1, chapterTitle: "Chương I – Mở đầu",
    title: "Thực hành tính sai số trong phép đo. Ghi kết quả đo",
    body: `### 1. Phép đo trực tiếp, gián tiếp và phân loại sai số

- **Phép đo trực tiếp:** Đo trực tiếp bằng dụng cụ đo và đọc kết quả trên thang đo (ví dụ: đo chiều dài bằng thước kẹp, đo nhiệt độ bằng nhiệt kế, đo thời gian bằng đồng hồ bấm giây).
- **Phép đo gián tiếp:** Xác định giá trị qua công thức toán học liên hệ với các đại lượng đo trực tiếp (ví dụ: khối lượng riêng $\\rho = m/V$, tốc độ $v = s/t$).
- **Sai số hệ thống:** Có tính chất quy luật, làm kết quả đo luôn lệch về một hướng do dụng cụ đo bị lệch điểm 0 hoặc do điều kiện thí nghiệm không chuẩn. Cách khắc phục: hiệu chỉnh điểm 0 trước khi đo, kiểm định lại dụng cụ.
- **Sai số ngẫu nhiên:** Xuất hiện ngẫu nhiên không có quy luật do sự dao động của môi trường hoặc phản xạ thao tác không đều. Cách khắc phục: đo lặp lại nhiều lần ($n \\ge 5$) trong cùng điều kiện và tính giá trị trung bình.

### 2. Công thức tính sai số phép đo trực tiếp

Khi đo $n$ lần cùng một đại lượng $A$, thu được dãy giá trị $A_1, A_2, ..., A_n$:

- **Giá trị trung bình:**
\\[
\\bar{A} = \\frac{A_1 + A_2 + ... + A_n}{n}
\\]

- **Sai số tuyệt đối của từng lần đo:**
\\[
\\Delta A_i = |\\bar{A} - A_i|
\\]

- **Sai số tuyệt đối trung bình của các lần đo:**
\\[
\\overline{\\Delta A} = \\frac{\\Delta A_1 + \\Delta A_2 + ... + \\Delta A_n}{n}
\\]

- **Sai số tuyệt đối của phép đo:**
\\[
\\Delta A = \\overline{\\Delta A} + \\Delta A_{dc}
\\]
*(Trong đó $\\Delta A_{dc}$ là sai số dụng cụ, thường lấy bằng nửa độ chia nhỏ nhất hoặc một độ chia nhỏ nhất ghi trên thiết bị).*

- **Sai số tỉ đối (đặc trưng cho độ chính xác):**
\\[
\\delta A = \\frac{\\Delta A}{\\bar{A}} \\times 100\\%
\\]

### 3. Quy tắc biểu diễn kết quả đo và sai số gián tiếp

- **Biểu diễn kết quả:** $A = \\bar{A} \\pm \\Delta A$, nghĩa là giá trị thực nằm trong khoảng $[\\bar{A} - \\Delta A; \\bar{A} + \\Delta A]$.
- **Quy tắc làm tròn:**
  - Sai số tuyệt đối $\\Delta A$ thường làm tròn đến 1 hoặc 2 chữ số có nghĩa.
  - Giá trị trung bình $\\bar{A}$ được làm tròn đến bậc thập phân tương ứng với sai số tuyệt đối $\\Delta A$.
- **Xác định sai số của phép đo gián tiếp:**
  - Nếu $X = A \\pm B \\implies \\Delta X = \\Delta A + \\Delta B$ (sai số tuyệt đối cộng dồn).
  - Nếu $X = A \\cdot B$ hoặc $X = A / B \\implies \\delta X = \\delta A + \\delta B$ (sai số tỉ đối cộng dồn).
  - Nếu $X = A^m \\cdot B^n \\implies \\delta X = m \\cdot \\delta A + n \\cdot \\delta B$.`
  },

  4: {
    num: 4, chapter: 2, chapterTitle: "Chương II – Động học",
    title: "Độ dịch chuyển và quãng đường đi được",
    body: `### 1. Vị trí, hệ quy chiếu và chất điểm

- **Chất điểm:** Một vật được coi là chất điểm khi kích thước của nó rất nhỏ so với chiều dài quãng đường hoặc khoảng cách đang xét (ví dụ: Trái Đất quay quanh Mặt Trời là chất điểm, nhưng chuyển động của người trên sân trường là kích thước cụ thể).
- **Hệ quy chiếu:** Gồm một vật làm mốc, một hệ tọa độ gắn với vật mốc và một gốc thời gian (đồng hồ) đo thời gian.
- **Tọa độ của vật:** Xác định vị trí của chất điểm trên trục tọa độ tại một thời điểm $t$.

### 2. Phân biệt độ dịch chuyển và quãng đường đi được

- **Quãng đường ($s$):** Là chiều dài toàn bộ quỹ đạo mà vật đã vạch ra trong suốt quá trình chuyển động. Quãng đường là đại lượng vô hướng và luôn không âm: $s \\ge 0$.
- **Độ dịch chuyển ($\\vec{d}$):** Là một đại lượng vectơ nối từ vị trí đầu đến vị trí cuối của vật:
\\[
\\vec{d} = \\vec{r}_2 - \\vec{r}_1 \\iff d = x_2 - x_1
\\]
- **Bản chất của độ dịch chuyển:**
  - Có gốc tại vị trí ban đầu, ngọn tại vị trí kết thúc.
  - Giá trị đại số $d$ có thể dương ($d > 0$ khi đi theo chiều dương), âm ($d < 0$ khi đi theo chiều âm), hoặc bằng không ($d = 0$ khi vật quay trở lại vị trí ban đầu).
  - So sánh: $d \\le s$. Dấu bằng $d = s$ chỉ xảy ra khi vật chuyển động thẳng và không đổi chiều.

### 3. Tổng hợp độ dịch chuyển bằng phương pháp hình học

- Nếu vật thực hiện liên tiếp hai độ dịch chuyển $\\vec{d}_1$ và $\\vec{d}_2$ thì độ dịch chuyển tổng hợp là:
\\[
\\vec{d} = \\vec{d}_1 + \\vec{d}_2
\\]
- **Quy tắc tam giác vectơ hoặc hình bình hành:**
  - Cùng hướng: $d = d_1 + d_2$.
  - Ngược hướng: $d = |d_1 - d_2|$.
  - Vuông góc: $d = \\sqrt{d_1^2 + d_2^2}$.
  - Góc bất kì $\\alpha$: $d = \\sqrt{d_1^2 + d_2^2 + 2d_1 d_2 \\cos\\alpha}$.`
  },

  5: {
    num: 5, chapter: 2, chapterTitle: "Chương II – Động học",
    title: "Tốc độ và vận tốc",
    body: `### 1. Tốc độ trung bình và tốc độ tức thời

- **Tốc độ trung bình:** Đại lượng đặc trưng cho mức độ nhanh hay chậm của chuyển động trên cả quãng đường, được tính bằng tỉ số giữa tổng quãng đường đi được và khoảng thời gian đi hết quãng đường đó:
\\[
v_{tb} = \\frac{s}{t}
\\]
*(Đơn vị SI: mét trên giây $\\text{m/s}$; thực tế thường dùng $\\text{km/h}$ với $1\\text{ m/s} = 3,6\\text{ km/h}$).*
- **Tốc độ tức thời:** Tốc độ của vật tại một thời điểm hoặc một vị trí xác định, được đo trực tiếp bằng tốc kế (đồng hồ đo tốc độ trên xe máy, ô tô).

### 2. Vận tốc trung bình và vận tốc tức thời

- **Vận tốc trung bình (vectơ):** Đại lượng đặc trưng cho hướng và tốc độ thay đổi vị trí của vật, tính bằng thương số giữa độ dịch chuyển và khoảng thời gian dịch chuyển:
\\[
\\vec{v}_{tb} = \\frac{\\vec{d}}{\\Delta t} \\iff v_{tb} = \\frac{x_2 - x_1}{t_2 - t_1}
\\]
- **Vận tốc tức thời (vectơ):** Là vận tốc tại một thời điểm rất nhỏ $\\Delta t \\rightarrow 0$. Vectơ vận tốc tức thời có gốc tại vật, phương trùng với tiếp tuyến quỹ đạo, chiều là chiều chuyển động, độ lớn bằng tốc độ tức thời.
- **Phân biệt:** Vận tốc là đại lượng vectơ (có phương chiều và giá trị đại số âm/dương), trong khi tốc độ là độ lớn của vận tốc (luôn không âm).

### 3. Công thức cộng vận tốc Galilei

Khi chất điểm chuyển động trong một hệ quy chiếu chuyển động (hệ quy chiếu tương đối):
- Gọi (1) là vật chuyển động, (2) là hệ quy chiếu chuyển động (như dòng nước, con tàu), (3) là hệ quy chiếu đứng yên (bờ sông, mặt đất).
- **Định lí cộng vận tốc dạng vectơ:**
\\[
\\vec{v}_{13} = \\vec{v}_{12} + \\vec{v}_{23}
\\]
  - $\\vec{v}_{13}$: Vận tốc tuyệt đối (vật đối với bờ).
  - $\\vec{v}_{12}$: Vận tốc tương đối (vật đối với dòng nước).
  - $\\vec{v}_{23}$: Vận tốc kéo theo (dòng nước đối với bờ).
- **Các trường hợp đặc biệt:**
  - Thuyền xuôi dòng: $v_{13} = v_{12} + v_{23}$.
  - Thuyền ngược dòng: $v_{13} = v_{12} - v_{23}$ (với $v_{12} > v_{23}$).
  - Thuyền chạy vuông góc dòng chảy: $v_{13} = \\sqrt{v_{12}^2 + v_{23}^2}$.`
  },

  6: {
    num: 6, chapter: 2, chapterTitle: "Chương II – Động học",
    title: "Thực hành: Đo tốc độ của vật chuyển động",
    body: `### 1. Mục đích và dụng cụ thí nghiệm

- **Mục đích:** Đo thời gian chuyển động trên quãng đường xác định để tính tốc độ trung bình và tốc độ tức thời của viên bi hoặc xe lăn.
- **Dụng cụ chính:**
  - Máng nghiêng dẫn hướng có chia vạch đo chiều dài $s$.
  - Xe lăn hoặc viên bi sắt.
  - Cổng quang điện (cảm biến quang học hồng ngoại).
  - Đồng hồ đo thời gian hiện số đa năng (độ chính xác đến $0,001\\text{ s}$).
  - Thước mét cố định trên máng.

### 2. Nguyên lí hoạt động của cổng quang điện

- Cổng quang điện gồm một nguồn phát tia hồng ngoại và một đầu thu. Khi xe lăn hoặc tấm chắn sáng đi qua cổng quang điện, chùm tia hồng ngoại bị ngắt, kích hoạt mạch đếm thời gian bắt đầu chạy. Khi tấm chắn sáng đi qua hoàn toàn, đồng hồ dừng đếm.
- Đo tốc độ tức thời: Gắn tấm chắn sáng có bề rộng $d$ nhỏ trên xe lăn. Khi xe qua cổng quang điện, đồng hồ đo thời gian chắn sáng $\\Delta t$. Tốc độ tức thời xấp xỉ: $v = d / \\Delta t$.

### 3. Tiến trình thí nghiệm và xử lí số liệu

- **Bước 1:** Bố trí máng nghiêng với góc nghiêng phù hợp, lắp hai cổng quang điện $E$ và $F$ cách nhau khoảng cách $s$.
- **Bước 2:** Cài đặt đồng hồ đo thời gian hiện số ở chế độ đo thời gian chuyển động giữa hai cổng quang điện (chế độ $A \\leftrightarrow B$).
- **Bước 3:** Thả xe lăn chuyển động không vận tốc đầu từ vị trí cố định trên máng. Ghi lại thời gian hiển thị $t_1$.
- **Bước 4:** Lặp lại phép đo ít nhất 5 lần với cùng vị trí thả để ghi các giá trị $t_2, t_3, t_4, t_5$.
- **Bước 5:** Tính giá trị trung bình $\\bar{t}$, sai số tuyệt đối $\\Delta t$ và sai số quãng đường $\\Delta s$.
- **Bước 6:** Tính tốc độ trung bình: $\\bar{v} = \\bar{s} / \\bar{t}$, tính sai số tỉ đối $\\delta v = \\delta s + \\delta t$ và sai số tuyệt đối $\\Delta v = \\bar{v} \\cdot \\delta v$. Biểu diễn $v = \\bar{v} \\pm \\Delta v$.`
  },

  7: {
    num: 7, chapter: 2, chapterTitle: "Chương II – Động học",
    title: "Đồ thị độ dịch chuyển – thời gian",
    body: `### 1. Ý nghĩa hình học của đồ thị độ dịch chuyển – thời gian ($d - t$)

- Đồ thị $(d - t)$ biểu diễn sự phụ thuộc của độ dịch chuyển $d$ theo thời gian $t$.
- **Hệ số góc (độ dốc) của đường biểu diễn chính là vận tốc của vật:**
\\[
v = \\text{độ dốc} = \\frac{\\Delta d}{\\Delta t} = \\frac{d_2 - d_1}{t_2 - t_1}
\\]
  - Nếu đồ thị dốc lên trên theo chiều thời gian: Độ dốc dương $\\implies v > 0$ (vật chuyển động theo chiều dương).
  - Nếu đồ thị dốc xuống dưới theo chiều thời gian: Độ dốc âm $\\implies v < 0$ (vật chuyển động ngược chiều dương).
  - Nếu đồ thị là đoạn thẳng song song với trục thời gian $Ot$: Độ dốc bằng $0 \\implies v = 0$ (vật đứng yên tại vị trí đó).

### 2. Các dạng đồ thị $(d - t)$ thường gặp

- **Đồ thị là đường thẳng xiên:** Vật chuyển động thẳng đều với vận tốc không đổi (độ dốc không đổi).
- **Đồ thị là đường cong parabol:** Vận tốc thay đổi theo thời gian (chuyển động thẳng biến đổi đều).
- **Vận tốc tức thời từ đồ thị cong:** Vận tốc tức thời tại thời điểm $t_0$ bằng hệ số góc của đường tiếp tuyến với đồ thị $(d - t)$ tại điểm có thời hoành độ $t_0$.

### 3. Khai thác thông tin từ đồ thị $(d - t)$

- Xác định vị trí xuất phát: Điểm cắt của đồ thị với trục tung $Od$ tại $t = 0$.
- Xác định khoảng thời gian nghỉ: Các đoạn đồ thị nằm ngang song song trục $Ot$.
- Tính tổng độ dịch chuyển: $d = d_{\\text{cuối}} - d_{\\text{đầu}}$.
- Tính tổng quãng đường: $s = \\sum |\\Delta d_i|$ (cộng tổng độ lớn độ dịch chuyển của từng giai đoạn, không lấy hiệu).`
  },

  8: {
    num: 8, chapter: 2, chapterTitle: "Chương II – Động học",
    title: "Chuyển động biến đổi. Gia tốc",
    body: `### 1. Khái niệm chuyển động biến đổi và gia tốc

- **Chuyển động biến đổi:** Là chuyển động có vận tốc thay đổi theo thời gian (thay đổi về độ lớn tốc độ hoặc thay đổi về hướng di chuyển).
- **Gia tốc ($\\vec{a}$):** Là đại lượng vật lí đặc trưng cho tốc độ thay đổi của vận tốc theo thời gian (cả về độ lớn và hướng).
- **Công thức gia tốc trung bình:**
\\[
\\vec{a}_{tb} = \\frac{\\Delta \\vec{v}}{\\Delta t} = \\frac{\\vec{v}_2 - \\vec{v}_1}{t_2 - t_1}
\\]
- **Đơn vị gia tốc:** Mét trên giây bình phương $(\\text{m/s}^2)$.

### 2. Dấu của gia tốc và tính chất chuyển động một chiều

Khi chất điểm chuyển động thẳng trên một trục tọa độ, gia tốc đại số $a = \\frac{v - v_0}{t - t_0}$:
- **Chuyển động thẳng nhanh dần đều:**
  - Vận tốc có độ lớn tăng dần theo thời gian.
  - Vectơ gia tốc $\\vec{a}$ cùng hướng với vectơ vận tốc $\\vec{v}$.
  - Điều kiện đại số: **$a \\cdot v > 0$** (cùng dấu: cùng dương hoặc cùng âm).
- **Chuyển động thẳng chậm dần đều:**
  - Vận tốc có độ lớn giảm dần theo thời gian.
  - Vectơ gia tốc $\\vec{a}$ ngược hướng với vectơ vận tốc $\\vec{v}$.
  - Điều kiện đại số: **$a \\cdot v < 0$** (trái dấu: nếu chọn chiều dương là chiều chuyển động $v > 0$ thì bắt buộc $a < 0$).

### 3. Đồ thị vận tốc – thời gian ($v - t$) và gia tốc

- Trong đồ thị $(v - t)$, hệ số góc (độ dốc) của đường biểu diễn chính là gia tốc của vật:
\\[
a = \\text{độ dốc} = \\frac{\\Delta v}{\\Delta t}
\\]
  - Đường dốc lên: $a > 0$.
  - Đường dốc xuống: $a < 0$.
  - Đường nằm ngang: $a = 0$ (chuyển động thẳng đều).`
  },

  9: {
    num: 9, chapter: 2, chapterTitle: "Chương II – Động học",
    title: "Chuyển động thẳng biến đổi đều",
    body: `### 1. Định nghĩa chuyển động thẳng biến đổi đều

- Là chuyển động thẳng có quỹ đạo là đường thẳng và gia tốc là hằng số không đổi theo thời gian ($a = \\text{const} \\neq 0$).
- Vận tốc biến thiên đều đặn theo thời gian (tăng đều hoặc giảm đều theo những lượng bằng nhau trong những khoảng thời gian bằng nhau).

### 2. Hệ thống công thức cốt lõi

- **Công thức vận tốc theo thời gian:**
\\[
v = v_0 + at
\\]
*(với $v_0$ là vận tốc ban đầu tại $t = 0$; $a$ là gia tốc).*

- **Công thức độ dịch chuyển theo thời gian:**
\\[
d = v_0 t + \\frac{1}{2}at^2
\\]
*(Nếu vật không đổi chiều thì quãng đường $s = |d|$).*

- **Phương trình tọa độ:**
\\[
x = x_0 + v_0 t + \\frac{1}{2}at^2
\\]

- **Công thức liên hệ không phụ thuộc thời gian (Công thức độc lập $t$):**
\\[
v^2 - v_0^2 = 2ad
\\]

### 3. Đồ thị vận tốc – thời gian ($v - t$) và ý nghĩa diện tích

- Đồ thị $(v - t)$ là đường thẳng xuất phát từ điểm $(0, v_0)$ với hệ số góc bằng $a$.
- **Ý nghĩa diện tích:** Độ dịch chuyển $d$ trong khoảng thời gian từ $t_1$ đến $t_2$ có độ lớn bằng diện tích hình thang giới hạn bởi đồ thị $(v - t)$, trục hoành $Ot$ và hai đường thẳng đứng $t = t_1, t = t_2$:
\\[
S_{\\text{hình thang}} = \\frac{(v_0 + v) \\cdot t}{2} = v_0 t + \\frac{1}{2}at^2 = d
\\]`
  },

  10: {
    num: 10, chapter: 2, chapterTitle: "Chương II – Động học",
    title: "Sự rơi tự do",
    body: `### 1. Sự rơi trong không khí và sự rơi tự do

- **Sự rơi trong không khí:** Các vật rơi trong không khí chịu thêm lực cản của không khí. Lực cản phụ thuộc vào hình dạng, tiết diện và khối lượng của vật, làm cho vật nhẹ bản rộng (tờ giấy) rơi chậm hơn vật nặng thuôn gọn (viên bi sắt).
- **Thí nghiệm ống Newton:** Rút hết không khí trong ống thủy tinh kín (tạo chân không), thả một chiếc lông vũ và một viên bi chì thì thấy cả hai rơi nhanh như nhau và chạm đáy cùng một thời điểm.
- **Định nghĩa rơi tự do:** Sự rơi tự do là sự rơi của các vật chỉ chịu tác dụng duy nhất của trọng lực (trong chân không hoặc khi lực cản không khí rất nhỏ so với trọng lượng của vật).

### 2. Đặc điểm của chuyển động rơi tự do

- **Phương:** Thẳng đứng.
- **Chiều:** Từ trên xuống dưới (hướng về tâm Trái Đất).
- **Tính chất chuyển động:** Là chuyển động thẳng nhanh dần đều với vận tốc ban đầu bằng $0$ ($v_0 = 0$).
- **Gia tốc rơi tự do ($g$):**
  - Tại một nơi xác định trên bề mặt Trái Đất và ở gần mặt đất, mọi vật rơi tự do với cùng một gia tốc $g$.
  - Giá trị tiêu chuẩn: $g \\approx 9,8\\text{ m/s}^2$ hoặc thường lấy chẵn $g = 10\\text{ m/s}^2$.
  - Gia tốc $g$ thay đổi nhẹ theo vĩ độ (cực đại ở hai cực $g \\approx 9,83\\text{ m/s}^2$, cực tiểu ở xích đạo $g \\approx 9,78\\text{ m/s}^2$) và giảm dần theo độ cao.

### 3. Các công thức tính toán rơi tự do (chọn chiều dương hướng xuống)

- **Vận tốc tại thời điểm $t$:**
\\[
v = gt
\\]
- **Quãng đường và độ cao rơi sau thời gian $t$:**
\\[
h = \\frac{1}{2}gt^2
\\]
- **Thời gian rơi từ độ cao $h$ xuống đất:**
\\[
t = \\sqrt{\\frac{2h}{g}}
\\]
- **Vận tốc khi vừa chạm đất:**
\\[
v_{\\text{đất}} = \\sqrt{2gh} = gt
\\]
- **Công thức độc lập thời gian:**
\\[
v^2 = 2gh
\\]`
  },

  11: {
    num: 11, chapter: 2, chapterTitle: "Chương II – Động học",
    title: "Thực hành: Đo gia tốc rơi tự do",
    body: `### 1. Mục đích và dụng cụ đo

- **Mục đích:** Đo thời gian rơi của một vật trên các quãng đường khác nhau để tính gia tốc rơi tự do $g$ và đánh giá sai số thí nghiệm.
- **Dụng cụ thí nghiệm:**
  - Trụ đứng có gắn thước đo chiều dài (chia vạch đến $1\\text{ mm}$).
  - Nam châm điện giữ và thả vật rơi bằng công tắc điện.
  - Viên bi thép làm vật rơi.
  - Hai cổng quang điện $E$ (trên) và $F$ (dưới).
  - Hộp công tắc điều khiển ngắt điện nam châm đồng thời kích hoạt đồng hồ.
  - Đồng hồ đo thời gian hiện số đa năng có độ phân giải $0,001\\text{ s}$.
  - Giá đỡ và hộp hứng viên bi có đệm mút.

### 2. Phương pháp tiến hành

- **Bước 1:** Bố trí trụ thẳng đứng bằng dây dọi hoặc bọt thủy chuẩn.
- **Bước 2:** Cố định cổng quang điện $E$ ở trên cao, dịch chuyển cổng quang điện $F$ ở dưới sao cho khoảng cách $h$ giữa hai cổng quang điện lần lượt nhận các giá trị $0,2\\text{ m}; 0,4\\text{ m}; 0,6\\text{ m}; 0,8\\text{ m}$.
- **Bước 3:** Đặt viên bi thép dính vào nam châm điện ngay sát cổng quang điện $E$.
- **Bước 4:** Nhấn nút ngắt điện nam châm để viên bi bắt đầu rơi tự do. Khi viên bi qua cổng $E$, đồng hồ bắt đầu đếm; khi qua cổng $F$, đồng hồ dừng lại và hiển thị thời gian rơi $t$.
- **Bước 5:** Với mỗi độ cao $h$, thực hiện lặp lại phép đo ít nhất 5 lần để ghi lại các giá trị $t_1, t_2, t_3, t_4, t_5$.

### 3. Xử lí số liệu và tính gia tốc $g$

- Với chuyển động rơi tự do từ trạng thái nghỉ: $h = \\frac{1}{2}gt^2 \\implies g = \\frac{2h}{t^2}$.
- **Phương pháp bảng số liệu:** Tính giá trị trung bình $\\bar{t}$, sau đó tính gia tốc trung bình:
\\[
\\bar{g} = \\frac{2\\bar{h}}{\\bar{t}^2}
\\]
- **Sai số của phép đo:**
\\[
\\delta g = \\delta h + 2\\delta t = \\frac{\\Delta h}{\\bar{h}} + 2\\frac{\\Delta t}{\\bar{t}} \\implies \\Delta g = \\bar{g} \\cdot \\delta g
\\]
- **Phương pháp đồ thị:** Vẽ đồ thị $h$ theo $t^2$. Đồ thị là đường thẳng đi qua gốc tọa độ có hệ số góc bằng $k = \\frac{g}{2} \\implies g = 2k$.`
  },

  12: {
    num: 12, chapter: 2, chapterTitle: "Chương II – Động học",
    title: "Chuyển động ném",
    body: `### 1. Bản chất của chuyển động ném

- Chuyển động ném là chuyển động phẳng của một vật được truyền vận tốc ban đầu $\\vec{v}_0$ và sau đó chỉ chịu tác dụng duy nhất của trọng lực (bỏ qua lực cản của không khí).
- **Phương pháp tọa độ độc lập:** Chuyển động ném được phân tích thành hai chuyển động thành phần độc lập trên hệ trục tọa độ vuông góc $Oxy$:
  - Trục ngang $Ox$: vật không chịu lực tác dụng $\\implies a_x = 0$ (chuyển động thẳng đều).
  - Trục thẳng đứng $Oy$: vật chịu tác dụng của trọng lực $\\implies a_y = g$ (rơi tự do).

### 2. Chuyển động ném ngang (từ độ cao $H$ với vận tốc ban đầu $v_0$ theo phương ngang)

- **Phương trình chuyển động thành phần:**
  - Theo trục $Ox$: $a_x = 0; \\quad v_x = v_0; \\quad x = v_0 t$.
  - Theo trục $Oy$ (chọn chiều dương hướng xuống): $a_y = g; \\quad v_y = gt; \\quad y = \\frac{1}{2}gt^2$.
- **Phương trình quỹ đạo (khử $t = x/v_0$):**
\\[
y = \\frac{g}{2v_0^2} x^2
\\]
*(Quỹ đạo chuyển động ném ngang là một nhánh của đường cong parabol có đỉnh tại điểm ném).*
- **Thời gian chuyển động cho đến khi chạm đất:**
\\[
t = \\sqrt{\\frac{2H}{g}}
\\]
*(Thời gian rơi của vật ném ngang chỉ phụ thuộc vào độ cao $H$ và gia tốc $g$, hoàn toàn không phụ thuộc vào vận tốc ném ban đầu $v_0$).*
- **Tầm bay xa (tầm xa trên mặt đất):**
\\[
L = x_{\\max} = v_0 t = v_0 \\sqrt{\\frac{2H}{g}}
\\]
- **Vận tốc tức thời tại thời điểm $t$ và khi chạm đất:**
\\[
v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{v_0^2 + (gt)^2} \\implies v_{\\text{đất}} = \\sqrt{v_0^2 + 2gH}
\\]
- **Góc nghiêng của vectơ vận tốc so với phương ngang:** $\\tan\\theta = \\frac{v_y}{v_x} = \\frac{gt}{v_0}$.

### 3. Chuyển động ném xiên (góc ném $\\alpha$ so với phương ngang)

- Chọn hệ trục $Oxy$ với gốc tại mặt đất, trục $Oy$ hướng lên:
  - $v_{0x} = v_0 \\cos\\alpha; \\quad v_{0y} = v_0 \\sin\\alpha$.
  - Theo $Ox$: $x = (v_0 \\cos\\alpha)t$.
  - Theo $Oy$: $y = (v_0 \\sin\\alpha)t - \\frac{1}{2}gt^2$.
- **Độ cao cực đại (tầm cao $H$):**
\\[
H = \\frac{v_0^2 \\sin^2\\alpha}{2g}
\\]
- **Thời gian bay:** $t_{\\text{bay}} = \\frac{2v_0 \\sin\\alpha}{g}$.
- **Tầm bay xa cực đại:**
\\[
L = \\frac{v_0^2 \\sin(2\\alpha)}{g}
\\]
*(Với cùng vận tốc ném $v_0$, tầm bay xa đạt giá trị lớn nhất khi góc ném $\\alpha = 45^\\circ$ vì $\\sin(2\\alpha) = \\sin(90^\\circ) = 1$).*`
  }
};
