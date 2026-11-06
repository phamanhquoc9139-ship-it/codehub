// scratch/lessons_part3.js - Lessons 23 to 34 (Chapters 4, 5, 6 & 7)
module.exports = {
  23: {
    num: 23, chapter: 4, chapterTitle: "Chương IV – Năng lượng, công, công suất",
    title: "Năng lượng. Công cơ học",
    body: `### 1. Khái niệm năng lượng và định luật bảo toàn năng lượng

- **Năng lượng:** Là đại lượng vật lí đặc trưng cho khả năng sinh công của một hệ vật chất. Mọi biến đổi trong tự nhiên đều gắn liền với sự chuyển hóa hoặc truyền năng lượng.
- **Các dạng năng lượng thường gặp:** Động năng, thế năng, quang năng, nhiệt năng, điện năng, hóa năng và năng lượng hạt nhân.
- **Định luật bảo toàn và chuyển hóa năng lượng:** Năng lượng không tự nhiên sinh ra và cũng không tự nhiên mất đi; nó chỉ truyền từ vật này sang vật khác hoặc chuyển hóa từ dạng này sang dạng khác.

### 2. Định nghĩa và công thức tính công cơ học

- **Khái niệm công cơ học:** Khi một lực không đổi $\\vec{F}$ tác dụng lên một vật và làm vật thực hiện độ dịch chuyển $\\vec{s}$, nếu hướng của lực hợp với hướng dịch chuyển một góc $\\alpha$ thì công cơ học thực hiện bởi lực được tính bằng:
\\[
A = F \\cdot s \\cdot \\cos\\alpha
\\]
  - $F$: Độ lớn của lực tác dụng (Newton, $\\text{N}$).
  - $s$: Độ dài quãng đường dịch chuyển (mét, $\\text{m}$).
  - $\\alpha$: Góc hợp bởi vectơ lực $\\vec{F}$ và vectơ độ dịch chuyển $\\vec{s}$.
  - $A$: Công cơ học (Joule, kí hiệu $\\text{J}$; $1\\text{ J} = 1\\text{ N}\\cdot\\text{m}$).

### 3. Biện luận ý nghĩa của góc $\\alpha$ và dấu của công

- **Trường hợp $\\alpha < 90^\\circ$ (góc nhọn) $\\implies \\cos\\alpha > 0 \\implies A > 0$:** Lực sinh **công phát động**, có tác dụng thúc đẩy làm vật chuyển động nhanh lên.
- **Trường hợp $\\alpha = 90^\\circ$ (vuông góc) $\\implies \\cos\\alpha = 0 \\implies A = 0$:** Lực **không sinh công** cơ học (ví dụ: trọng lực và phản lực tác dụng lên vật chuyển động trên mặt phẳng nằm ngang không sinh công).
- **Trường hợp $90^\\circ < \\alpha \\le 180^\\circ$ (góc tù) $\\implies \\cos\\alpha < 0 \\implies A < 0$:** Lực sinh **công cản**, có tác dụng cản trở làm vật chuyển động chậm lại (ví dụ: lực ma sát trượt có $\\alpha = 180^\\circ \\implies A_{ms} = -F_{mst} \\cdot s < 0$).`
  },

  24: {
    num: 24, chapter: 4, chapterTitle: "Chương IV – Năng lượng, công, công suất",
    title: "Công suất",
    body: `### 1. Khái niệm công suất và đơn vị đo

- **Khái niệm:** Để đánh giá máy nào hoặc người nào thực hiện công nhanh hơn, người ta so sánh công thực hiện được trong cùng một đơn vị thời gian. Đại lượng đó gọi là **công suất**.
- **Định nghĩa:** Công suất là đại lượng đặc trưng cho tốc độ thực hiện công, được đo bằng thương số giữa công thực hiện $A$ và khoảng thời gian $t$ để thực hiện công đó:
\\[
P = \\frac{A}{t}
\\]
- **Đơn vị công suất trong hệ SI:**
  - Watt (kí hiệu $\\text{W}$): $1\\text{ W} = 1\\text{ J/s}$.
  - Các bội số thường dùng: Kilowatt ($1\\text{ kW} = 10^3\\text{ W}$), Megawatt ($1\\text{ MW} = 10^6\\text{ W}$).
  - Mã lực (sức ngựa, HP): Ở Anh/Mỹ $1\\text{ HP} \\approx 746\\text{ W}$; ở Pháp $1\\text{ CV} \\approx 736\\text{ W}$.

### 2. Mối liên hệ giữa công suất, lực và vận tốc

- Khi một lực $\\vec{F}$ không đổi tác dụng lên vật đang chuyển động thẳng với vận tốc $\\vec{v}$ theo hướng hợp với lực góc $\\alpha$:
\\[
P = \\frac{A}{t} = \\frac{F \\cdot s \\cdot \\cos\\alpha}{t} = F \\cdot v \\cdot \\cos\\alpha
\\]
- Nếu lực cùng hướng chuyển động ($\\alpha = 0^\\circ$):
\\[
P = F \\cdot v
\\]
- **Ý nghĩa thực tế của mối quan hệ $P = F \\cdot v$:**
  - Đối với một động cơ có công suất danh định $P$ không đổi (như động cơ xe máy, ô tô):
  - Lực kéo $F$ và vận tốc $v$ tỉ lệ nghịch với nhau: $F = P / v$.
  - Khi xe lên dốc cao cần lực kéo $F$ lớn $\\implies$ người lái xe phải về số thấp (số 1, số 2) để giảm vận tốc $v$, từ đó tăng lực kéo $F$.
  - Khi xe chạy trên đường trường bằng phẳng cần vận tốc $v$ cao $\\implies$ người lái xe vào số cao (số 4, số 5) vì lực cản nhỏ nên không cần lực kéo quá lớn.

### 3. Phân biệt công suất và năng lượng tiêu thụ

- Kilowatt-giờ ($\\text{kWh}$) là **đơn vị đo năng lượng (công)**, tuyệt đối không phải là đơn vị công suất:
\\[
1\\text{ kWh} = 1\\text{ kW} \\times 1\\text{ h} = 1000\\text{ W} \\times 3600\\text{ s} = 3,6 \\times 10^6\\text{ J} = 3,6\\text{ MJ}
\\]`
  },

  25: {
    num: 25, chapter: 4, chapterTitle: "Chương IV – Năng lượng, công, công suất",
    title: "Động năng, thế năng",
    body: `### 1. Động năng và Định lí biến thiên động năng

- **Định nghĩa động năng ($W_đ$):** Là dạng năng lượng mà một vật có được do nó đang chuyển động:
\\[
W_đ = \\frac{1}{2} m v^2
\\]
  - $m$: Khối lượng của vật ($\\text{kg}$).
  - $v$: Vận tốc của vật ($\\text{m/s}$).
  - $W_đ$: Động năng ($\\text{J}$).
  - Đặc điểm: Động năng là đại lượng vô hướng, luôn không âm ($W_đ \\ge 0$) và phụ thuộc vào hệ quy chiếu (do vận tốc có tính tương đối).
- **Định lí biến thiên động năng (Công – Động năng):**
  > Độ biến thiên động năng của một vật bằng tổng công của các ngoại lực tác dụng lên vật đó:
\\[
\\Delta W_đ = W_{đ2} - W_{đ1} = \\frac{1}{2}mv_2^2 - \\frac{1}{2}mv_1^2 = A
\\]
  - Nếu ngoại lực sinh công dương ($A > 0$) $\\implies W_{đ2} > W_{đ1}$ (động năng tăng, vật tăng tốc).
  - Nếu ngoại lực sinh công âm ($A < 0$) $\\implies W_{đ2} < W_{đ1}$ (động năng giảm, vật giảm tốc).

### 2. Thế năng trọng trường

- **Định nghĩa:** Thế năng trọng trường là dạng năng lượng tương tác giữa Trái Đất và vật, phụ thuộc vào vị trí của vật trong trọng trường:
\\[
W_t = mgh
\\]
  - $h$: Tọa độ (độ cao) của vật so với mốc thế năng đã chọn (mét, $\\text{m}$).
  - Mốc thế năng ($h = 0$): Thường chọn tại mặt đất.
  - Chú ý quan trọng: Thế năng có thể dương ($h > 0$ khi ở trên mốc), bằng không ($h = 0$ tại mốc), hoặc âm ($h < 0$ khi ở dưới mốc thế năng, ví dụ dưới đáy giếng).
- **Mối liên hệ giữa công của trọng lực và độ giảm thế năng:**
  > Khi vật dịch chuyển từ vị trí 1 đến vị trí 2 trong trọng trường, công của trọng lực bằng độ giảm thế năng giữa hai vị trí đó:
\\[
A_{12} = W_{t1} - W_{t2} = mg(h_1 - h_2)
\\]
*(Công của trọng lực chỉ phụ thuộc vào hiệu độ cao điểm đầu và điểm cuối, hoàn toàn không phụ thuộc vào dạng đường đi).*

### 3. Thế năng đàn hồi của lò xo

- Là năng lượng tích trữ trong lò xo khi lò xo bị biến dạng dãn hoặc nén một đoạn $\\Delta l$:
\\[
W_{t(đh)} = \\frac{1}{2} k (\\Delta l)^2
\\]
*(với $k$ là độ cứng lò xo tính bằng $\\text{N/m}$; $\\Delta l = |l - l_0|$ tính bằng $\\text{m}$).*`
  },

  26: {
    num: 26, chapter: 4, chapterTitle: "Chương IV – Năng lượng, công, công suất",
    title: "Cơ năng và định luật bảo toàn cơ năng",
    body: `### 1. Khái niệm cơ năng

- **Cơ năng ($W$):** Là tổng năng lượng cơ học của vật, bằng tổng động năng và thế năng của vật:
\\[
W = W_đ + W_t = \\frac{1}{2}mv^2 + mgh
\\]
*(Đối với lò xo biến dạng: $W = \\frac{1}{2}mv^2 + \\frac{1}{2}k(\\Delta l)^2$).*

### 2. Định luật bảo toàn cơ năng trong trọng trường

- **Điều kiện áp dụng:** Vật chuyển động trong trọng trường và **chỉ chịu tác dụng duy nhất của trọng lực** (bỏ qua lực ma sát, lực cản của môi trường).
- **Phát biểu định luật:**
  > Khi một vật chuyển động trong trọng trường chỉ chịu tác dụng của trọng lực, cơ năng của vật là một đại lượng bảo toàn (không đổi theo thời gian).
\\[
W = W_đ + W_t = \\frac{1}{2}mv^2 + mgh = \\text{hằng số}
\\]
\\[
W_1 = W_2 \\iff \\frac{1}{2}mv_1^2 + mgh_1 = \\frac{1}{2}mv_2^2 + mgh_2
\\]
- **Sự chuyển hóa tương hỗ:**
  - Khi vật rơi xuống: Độ cao $h$ giảm $\\implies$ thế năng $W_t$ giảm; vận tốc $v$ tăng $\\implies$ động năng $W_đ$ tăng (thế năng chuyển hóa thành động năng).
  - Khi vật ném lên: Độ cao $h$ tăng $\\implies$ thế năng $W_t$ tăng; vận tốc $v$ giảm $\\implies$ động năng $W_đ$ giảm (động năng chuyển hóa thành thế năng).
  - Tại vị trí cao nhất: $v = 0 \\implies W_đ = 0, W_t = W_{t\\max} = W$.
  - Tại mặt đất (mốc thế năng $h = 0$): $W_t = 0 \\implies W_đ = W_{đ\\max} = W$.

### 3. Trường hợp vật chịu tác dụng của lực ma sát, lực cản (lực không thế)

- Khi có lực ma sát hoặc lực cản môi trường tác dụng, cơ năng của vật **không được bảo toàn** mà bị tiêu hao chuyển hóa thành nhiệt năng làm nóng vật và môi trường.
- **Mối liên hệ giữa công của lực ma sát và độ biến thiên cơ năng:**
\\[
A_{ms} = W_2 - W_1 = \\Delta W < 0
\\]
*(Công của lực ma sát luôn âm, bằng độ hao hụt cơ năng của hệ).*`
  },

  27: {
    num: 27, chapter: 4, chapterTitle: "Chương IV – Năng lượng, công, công suất",
    title: "Hiệu suất",
    body: `### 1. Năng lượng có ích, năng lượng hao phí và năng lượng toàn phần

- Trong mọi quá trình biến đổi năng lượng, năng lượng cung cấp ban đầu luôn phân tách thành hai phần:
  - **Năng lượng có ích ($A_{\\text{ích}}$ hoặc $W_{\\text{ích}}$):** Phần năng lượng được sử dụng trực tiếp để phục vụ mục đích mong muốn (như nâng vật, chiếu sáng, sinh lực kéo).
  - **Năng lượng hao phí ($A_{\\text{hp}}$ hoặc $W_{\\text{hp}}$):** Phần năng lượng tỏa ra môi trường dưới dạng nhiệt ma sát, nhiệt bức xạ, âm thanh, rung động không mong muốn.
  - **Năng lượng toàn phần ($A_{\\text{tp}}$):** Tổng năng lượng cung cấp cho hệ:
\\[
A_{\\text{tp}} = A_{\\text{ích}} + A_{\\text{hp}}
\\]

### 2. Định nghĩa và công thức tính hiệu suất

- **Hiệu suất ($H$):** Là đại lượng đặc trưng cho tỉ lệ phần trăm giữa năng lượng có ích và năng lượng toàn phần cung cấp cho máy hoặc quá trình:
\\[
H = \\frac{A_{\\text{ích}}}{A_{\\text{tp}}} \\times 100\\% = \\frac{P_{\\text{ích}}}{P_{\\text{tp}}} \\times 100\\%
\\]
- **Đặc điểm:** Do luôn có hao phí ($A_{\\text{hp}} > 0$) nên hiệu suất thực tế của các động cơ luôn nhỏ hơn $100\\%$ ($H < 100\\%$).

### 3. Ví dụ về hiệu suất trong thực tiễn

- **Động cơ ô tô:**
  - Động cơ xăng: Hiệu suất khoảng $25\\% - 30\\%$ (hơn $70\\%$ năng lượng nhiên liệu biến thành nhiệt làm nóng máy và khí thải).
  - Động cơ Diesel: Hiệu suất khoảng $35\\% - 40\\%$.
  - Động cơ điện trên xe EV: Hiệu suất vượt trội, đạt khoảng $85\\% - 90\\%$.
- **Thiết bị chiếu sáng:**
  - Đèn sợi đốt: Hiệu suất phát sáng chỉ khoảng $5\\%$ (còn $95\\%$ biến thành nhiệt năng tỏa ra môi trường).
  - Đèn huỳnh quang: Hiệu suất khoảng $20\\%$.
  - Đèn LED hiện đại: Hiệu suất đạt $40\\% - 50\\%$, tiết kiệm điện năng gấp 8-10 lần so với bóng đèn sợi đốt.`
  },

  28: {
    num: 28, chapter: 5, chapterTitle: "Chương V – Động lượng",
    title: "Động lượng",
    body: `### 1. Khái niệm và công thức động lượng

- **Khái niệm:** Một vật có khối lượng lớn chuyển động với vận tốc cao thì tác động va chạm của nó lên vật khác rất mạnh (ví dụ: xe tải chở hàng chạy nhanh va chạm có sức tàn phá lớn hơn xe đạp). Để đặc trưng cho khả năng truyền chuyển động của một vật khi tương tác với các vật khác, người ta đưa ra đại lượng **động lượng**.
- **Định nghĩa:** Động lượng của một vật là một đại lượng vectơ được tính bằng tích của khối lượng $m$ và vectơ vận tốc $\\vec{v}$ của vật đó:
\\[
\\vec{p} = m\\vec{v}
\\]
- **Đặc trưng của vectơ động lượng:**
  - Điểm đặt: Tại trọng tâm của vật.
  - Phương và chiều: **Luôn cùng hướng với vectơ vận tốc $\\vec{v}$** của vật.
  - Độ lớn: $p = mv$.
  - Đơn vị đo trong hệ SI: Kilogam mét trên giây ($\\text{kg}\\cdot\\text{m/s}$), hoặc tương đương là Newton giây ($\\text{N}\\cdot\\text{s}$).

### 2. Xung lượng của lực và dạng tổng quát của Định luật 2 Newton

- **Xung lượng của lực:** Khi một lực không đổi $\\vec{F}$ tác dụng lên một vật trong khoảng thời gian $\\Delta t$, tích $\\vec{F} \\Delta t$ được gọi là **xung lượng của lực $\\vec{F}$ trong khoảng thời gian $\\Delta t$**.
- **Mối liên hệ giữa xung lượng của lực và độ biến thiên động lượng:**
  - Từ Định luật 2 Newton: $\\vec{F} = m\\vec{a} = m \\frac{\\Delta \\vec{v}}{\\Delta t} = \\frac{\\Delta (m\\vec{v})}{\\Delta t} = \\frac{\\Delta \\vec{p}}{\\Delta t}$.
  - Do đó:
\\[
\\Delta \\vec{p} = \\vec{p}_2 - \\vec{p}_1 = \\vec{F} \\Delta t
\\]
  > Độ biến thiên động lượng của một vật trong một khoảng thời gian bằng xung lượng của tổng ngoại lực tác dụng lên vật trong khoảng thời gian đó.

### 3. Ý nghĩa thực tế của công thức $\\vec{F} = \\frac{\\Delta \\vec{p}}{\\Delta t}$

- Để giảm lực va chạm $F$: Khi một vật va chạm làm thay đổi động lượng một lượng $\\Delta p$ cố định, muốn giảm lực tác dụng $F$ thì cần **kéo dài thời gian tương tác $\\Delta t$**.
  - Đệm nhảy cao, găng tay đấm bốc, túi khí trên ô tô, vùng biến dạng có chủ đích ở đầu xe ô tô: đều có tác dụng kéo dài thời gian va chạm $\\Delta t$, làm giảm lực va đập tác dụng lên cơ thể người, bảo vệ an toàn tính mạng.
  - Thủ môn khi bắt bóng mạnh thường co tay về phía sau để kéo dài thời gian hãm bóng, tránh chấn thương cổ tay.`
  },

  29: {
    num: 29, chapter: 5, chapterTitle: "Chương V – Động lượng",
    title: "Định luật bảo toàn động lượng",
    body: `### 1. Hệ kín (hệ cô lập)

- **Định nghĩa:** Một hệ vật được gọi là hệ kín khi:
  - Hoàn toàn không có ngoại lực tác dụng lên các vật trong hệ;
  - Hoặc có ngoại lực tác dụng nhưng các ngoại lực triệt tiêu lẫn nhau (tổng vectơ ngoại lực bằng $\\vec{0}$);
  - Hoặc các ngoại lực rất nhỏ so với nội lực tương tác giữa các vật trong hệ (như trong hiện tượng nổ súng, pháo hoa, va chạm ngắn hạn).

### 2. Nội dung Định luật bảo toàn động lượng

- **Phát biểu định luật:**
  > Tổng vectơ động lượng của một hệ kín là một đại lượng bảo toàn (không đổi theo thời gian).
\\[
\\vec{p}_{\\text{hệ}} = \\vec{p}_1 + \\vec{p}_2 + ... + \\vec{p}_n = \\text{không đổi}
\\]
- **Biểu thức cho hệ hai vật trước và sau tương tác:**
\\[
\\vec{p}_1 + \\vec{p}_2 = \\vec{p}_1' + \\vec{p}_2' \\iff m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = m_1 \\vec{v}_1' + m_2 \\vec{v}_2'
\\]
*(Lưu ý: Đây là phương trình vectơ, khi giải bài tập phải chiếu lên hệ trục tọa độ phù hợp).*

### 3. Các ứng dụng kinh điển của định luật bảo toàn động lượng

- **Chuyển động bằng phản lực (Tên lửa, súng giật):**
  - Trước khi bắn: Khẩu súng khối lượng $M$ và viên đạn khối lượng $m$ đứng yên $\\implies \\vec{p}_{\\text{trước}} = \\vec{0}$.
  - Sau khi bắn: Đạn bay về phía trước với vận tốc $\\vec{v}$, súng giật lùi về phía sau với vận tốc $\\vec{V}$:
\\[
M\\vec{V} + m\\vec{v} = \\vec{0} \\implies \\vec{V} = -\\frac{m}{M}\\vec{v}
\\]
*(Vận tốc giật lùi của súng ngược chiều với vận tốc đạn, độ lớn tỉ lệ nghịch với khối lượng súng).*
- **Phân loại va chạm:**
  - **Va chạm đàn hồi:** Sau va chạm, các vật tách rời nhau và lấy lại hình dạng ban đầu. Cả động lượng và động năng đều được bảo toàn.
  - **Va chạm mềm:** Sau va chạm, hai vật dính vào nhau và cùng chuyển động với vận tốc chung $\\vec{V}$:
\\[
m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = (m_1 + m_2)\\vec{V} \\implies \\vec{V} = \\frac{m_1 \\vec{v}_1 + m_2 \\vec{v}_2}{m_1 + m_2}
\\]
*(Trong va chạm mềm: Động lượng được bảo toàn, nhưng động năng bị hao hụt một phần chuyển hóa thành nhiệt năng và công biến dạng).*`
  },

  30: {
    num: 30, chapter: 5, chapterTitle: "Chương V – Động lượng",
    title: "Thực hành: Xác định động lượng của vật trước và sau va chạm",
    body: `### 1. Mục đích và nguyên lí thí nghiệm

- **Mục đích:** Đo vận tốc của hai xe lăn trước và sau va chạm trên đệm khí để tính động lượng của hệ, từ đó kiểm chứng định luật bảo toàn động lượng trong va chạm đàn hồi và va chạm mềm.
- **Nguyên lí:**
  - Dùng máng đệm khí thổi luồng khí nén qua các lỗ nhỏ để nâng xe lăn lơ lửng, triệt tiêu gần như hoàn toàn ma sát (tạo thành hệ kín lý tưởng).
  - Vận tốc của xe được đo bằng cổng quang điện kết hợp tấm chắn sáng bề rộng $d$: $v = d / \\Delta t$.

### 2. Thiết bị và bố trí thí nghiệm

- Đệm khí dẫn hướng nằm ngang có gắn thước đo.
- Máy nén khí và ống dẫn khí.
- Hai xe lăn thí nghiệm có khối lượng $m_1$ và $m_2$ (gắn các quả nặng gia tải).
- Phụ kiện đầu va chạm: Lò xo đàn hồi (thực hiện va chạm đàn hồi) hoặc đầu gắn miếng dính velcro/kim ghim mút (thực hiện va chạm mềm).
- Hai cổng quang điện nối với đồng hồ đo thời gian hiện số đa năng.

### 3. Tiến trình đo và xử lí kết quả

- **Bước 1:** Bật máy nén khí, căn chỉnh máng đệm khí thăng bằng hoàn toàn (xe đứng yên không tự trôi).
- **Bước 2 (Va chạm mềm):** Gắn đầu dính velcro. Đặt xe 2 đứng yên giữa hai cổng quang điện ($v_2 = 0$). Đẩy xe 1 chuyển động qua cổng quang điện 1 để đo vận tốc trước va chạm $v_1$. Sau va chạm, hai xe dính vào nhau cùng qua cổng quang điện 2 để đo vận tốc sau va chạm $V$.
- **Bước 3:** Tính động lượng trước va chạm: $p_{\\text{trước}} = m_1 v_1$.
- **Bước 4:** Tính động lượng sau va chạm: $p_{\\text{sau}} = (m_1 + m_2)V$.
- **Bước 5:** So sánh $p_{\\text{trước}}$ và $p_{\\text{sau}}$, tính sai số phần trăm:
\\[
\\epsilon = \\frac{|p_{\\text{sau}} - p_{\\text{trước}}|}{p_{\\text{trước}}} \\times 100\\%
\\]
*(Nếu $\\epsilon < 5\\%$, định luật bảo toàn động lượng được coi là kiểm nghiệm đúng trong giới hạn sai số thực nghiệm).*`
  },

  31: {
    num: 31, chapter: 6, chapterTitle: "Chương VI – Chuyển động tròn đều",
    title: "Động học của chuyển động tròn đều",
    body: `### 1. Định nghĩa chuyển động tròn đều

- **Chuyển động tròn đều:** Là chuyển động có quỹ đạo là một đường tròn và có tốc độ chuyển động không đổi theo thời gian (chất điểm đi được những cung tròn có độ dài bằng nhau trong những khoảng thời gian bằng nhau bất kì).

### 2. Tốc độ góc, chu kì và tần số

- **Góc quay ($\\Delta\\theta$):** Góc ở tâm quét bởi bán kính nối tâm với chất điểm trong khoảng thời gian $\\Delta t$. Đơn vị: Radian ($\\text{rad}$; với $1\\text{ rad} = \\frac{180^\\circ}{\\pi} \\approx 57,3^\\circ; \\; 360^\\circ = 2\\pi\\text{ rad}$).
- **Tốc độ góc ($\\omega$):** Đại lượng đặc trưng cho tốc độ quay của bán kính nối tâm với chất điểm:
\\[
\\omega = \\frac{\\Delta\\theta}{\\Delta t}
\\]
*(Đơn vị: Radian trên giây, $\\text{rad/s}$). Trong chuyển động tròn đều, tốc độ góc $\\omega$ là hằng số.*
- **Chu kì ($T$):** Là khoảng thời gian để chất điểm quay hết đúng một vòng đường tròn:
\\[
T = \\frac{2\\pi}{\\omega}
\\]
*(Đơn vị: Giây, $\\text{s}$).*
- **Tần số ($f$):** Là số vòng mà chất điểm quay được trong một đơn vị thời gian (1 giây):
\\[
f = \\frac{1}{T} = \\frac{\\omega}{2\\pi}
\\]
*(Đơn vị: Hertz, $\\text{Hz}$ hoặc vòng/giây).*

### 3. Tốc độ dài và mối liên hệ với tốc độ góc

- **Tốc độ dài ($v$):** Là tốc độ chuyển động của chất điểm trên cung tròn:
\\[
v = \\frac{\\Delta s}{\\Delta t} = \\frac{r \\cdot \\Delta\\theta}{\\Delta t} = \\omega \\cdot r
\\]
  - $r$: Bán kính quỹ đạo tròn (mét, $\\text{m}$).
  - $v$: Tốc độ dài (mét trên giây, $\\text{m/s}$).
- **Vectơ vận tốc trong chuyển động tròn đều:**
  - Có điểm đặt tại chất điểm chuyển động.
  - Phương trùng với tiếp tuyến của đường tròn quỹ đạo tại điểm đó (vuông góc với bán kính).
  - Chiều theo chiều chuyển động.
  - Độ lớn $v = \\text{không đổi}$, nhưng **hướng của vectơ vận tốc liên tục thay đổi** tại mọi thời điểm.`
  },

  32: {
    num: 32, chapter: 6, chapterTitle: "Chương VI – Chuyển động tròn đều",
    title: "Lực hướng tâm và gia tốc hướng tâm",
    body: `### 1. Gia tốc hướng tâm

- Mặc dù trong chuyển động tròn đều độ lớn vận tốc (tốc độ $v$) không đổi, nhưng hướng của vectơ vận tốc $\\vec{v}$ liên tục thay đổi theo thời gian. Do đó, chuyển động tròn đều là một **chuyển động có gia tốc**.
- **Đặc điểm của vectơ gia tốc hướng tâm ($\\vec{a}_{ht}$):**
  - Điểm đặt: Tại chất điểm chuyển động.
  - Phương: Trùng với đường kính (phương bán kính nối vật với tâm đường tròn).
  - Chiều: Luôn hướng vào tâm của quỹ đạo tròn (nên được gọi là gia tốc hướng tâm).
  - Độ lớn:
\\[
a_{ht} = \\frac{v^2}{r} = \\omega^2 r
\\]

### 2. Lực hướng tâm

- Theo Định luật 2 Newton, vật có gia tốc hướng tâm thì phải có lực (hoặc hợp lực) tác dụng lên vật gây ra gia tốc đó. Lực này được gọi là **lực hướng tâm**.
- **Định nghĩa:** Lực hướng tâm là hợp lực của các lực tác dụng lên vật chuyển động tròn đều, có hướng vào tâm của quỹ đạo tròn.
- **Biểu thức tính độ lớn lực hướng tâm:**
\\[
F_{ht} = m a_{ht} = m \\frac{v^2}{r} = m \\omega^2 r
\\]
- **Bản chất vật lí quan trọng:** Lực hướng tâm **không phải là một loại lực cơ học mới**. Nó chỉ là tên gọi theo tác dụng động học của một lực hoặc hợp lực của các lực cơ học đã biết (lực hấp dẫn, lực ma sát nghỉ, lực đàn hồi, phản lực pháp tuyến...).

### 3. Các ví dụ và ứng dụng thực tế

- **Vệ tinh nhân tạo bay quanh Trái Đất:** Lực hấp dẫn giữa Trái Đất và vệ tinh đóng vai trò là lực hướng tâm giữ vệ tinh chuyển động tròn đều trên quỹ đạo: $F_{hd} = F_{ht} \\iff G \\frac{M m}{r^2} = m \\frac{v^2}{r}$.
- **Xe đi qua đoạn đường cong:** Lực ma sát nghỉ giữa lốp xe và mặt đường hướng vào tâm đường cong đóng vai trò lực hướng tâm. Nếu mặt đường trơn ướt (hệ số ma sát nhỏ) hoặc xe chạy quá tốc độ, lực ma sát nghỉ cực đại không đủ cung cấp lực hướng tâm $\\implies$ xe bị trượt văng ra ngoài khúc cua (tai nạn lật xe).
- **Đoạn đường cong nghiêng:** Để đảm bảo an toàn ở các đường cao tốc hoặc đường đua, người ta làm mặt đường nghiêng vào phía trong tâm cong một góc $\\alpha$. Hợp lực của trọng lực $\\vec{P}$ và phản lực $\\vec{N}$ hướng vào tâm đóng vai trò lực hướng tâm giúp xe không bị lật dù không cần ma sát.`
  },

  33: {
    num: 33, chapter: 7, chapterTitle: "Chương VII – Biến dạng của vật rắn, áp suất chất lỏng",
    title: "Biến dạng của vật rắn",
    body: `### 1. Các dạng biến dạng của vật rắn

- Khi chịu tác dụng của ngoại lực, vật rắn có thể bị thay đổi hình dạng và kích thước, hiện tượng đó gọi là **sự biến dạng của vật rắn**.
- **Biến dạng đàn hồi:** Là biến dạng mà khi thôi tác dụng ngoại lực, vật rắn có khả năng tự động lấy lại hoàn toàn hình dạng và kích thước ban đầu (ví dụ: lò xo kéo nhẹ, quả bóng cao su).
- **Biến dạng dẻo (biến dạng dư):** Là biến dạng mà khi thôi tác dụng ngoại lực, vật rắn không thể lấy lại hình dạng ban đầu mà bị giữ nguyên hình dạng biến dạng mới (ví dụ: uốn thanh dây đồng, nặn đất sét).
- **Giới hạn đàn hồi:** Là giới hạn lực lớn nhất mà khi vượt qua giới hạn đó, vật rắn sẽ mất tính đàn hồi và chuyển sang biến dạng dẻo hoặc bị đứt, gãy.

### 2. Định luật Hooke (Định luật Húc) về biến dạng đàn hồi

- **Độ biến dạng của lò xo:** Gọi $l_0$ là chiều dài tự nhiên ban đầu của lò xo khi chưa treo tải, $l$ là chiều dài của lò xo khi bị dãn hoặc nén. Độ biến dạng (độ dãn hoặc nén) được tính bằng:
\\[
\\Delta l = |l - l_0|
\\]
- **Nội dung Định luật Hooke:**
  > Trong giới hạn đàn hồi, độ lớn của lực đàn hồi của lò xo tỉ lệ thuận với độ biến dạng của lò xo.
\\[
F_{đh} = k |\\Delta l| = k |l - l_0|
\\]
  - $k$: Hệ số đàn hồi (hay **độ cứng**) của lò xo (đơn vị: Newton trên mét, $\\text{N/m}$). Độ cứng $k$ phụ thuộc vào vật liệu làm lò xo, đường kính sợi thép, số vòng và đường kính ống lò xo. Lò xo có $k$ càng lớn thì càng cứng (càng khó biến dạng).
  - $|\\Delta l|$: Độ biến dạng của lò xo (đơn vị: mét, $\\text{m}$).
  - $F_{đh}$: Lực đàn hồi (Newton, $\\text{N}$).

### 3. Ứng dụng thực tiễn của lực đàn hồi lò xo

- **Lực kế lò xo:** Dựa trên tỉ lệ thuận $F = k \\Delta l$ để khắc vạch đo lực hoặc đo khối lượng (cân đồng hồ).
- **Hệ thống giảm xóc trên xe máy, ô tô:** Sử dụng lò xo kết hợp phuộc nhún dầu để hấp thụ và tiêu tán xung lực từ mặt đường gồ ghề, tạo sự êm ái cho người ngồi trên xe.
- **Dây cung, nệm lò xo, bút bi bấm, kẹp phơi quần áo:** Đều ứng dụng tính đàn hồi của kim loại và vật liệu đàn hồi.`
  },

  34: {
    num: 34, chapter: 7, chapterTitle: "Chương VII – Biến dạng của vật rắn, áp suất chất lỏng",
    title: "Khối lượng riêng. Áp suất chất lỏng",
    body: `### 1. Khối lượng riêng và trọng lượng riêng

- **Khối lượng riêng ($\\rho$):** Là khối lượng của một đơn vị thể tích chất đó:
\\[
\\rho = \\frac{m}{V}
\\]
  - Đơn vị SI: Kilogam trên mét khối ($\\text{kg/m}^3$; ví dụ: nước nguyên chất $\\rho_{\\text{nước}} = 1000\\text{ kg/m}^3$; sắt $\\rho_{\\text{sắt}} = 7800\\text{ kg/m}^3$; thủy ngân $\\rho_{\\text{Hg}} = 13600\\text{ kg/m}^3$).
- **Trọng lượng riêng ($d$):** Là trọng lượng của một đơn vị thể tích chất:
\\[
d = \\frac{P}{V} = \\rho g \\quad (\\text{N/m}^3)
\\]

### 2. Áp lực và áp suất chất lỏng

- **Áp lực ($F$):** Là lực ép có phương vuông góc với bề mặt tiếp xúc.
- **Áp suất ($p$):** Đại lượng đặc trưng cho tác dụng ép của áp lực lên diện tích bị ép:
\\[
p = \\frac{F}{S}
\\]
  - Đơn vị: Pascal ($\\text{Pa}$; $1\\text{ Pa} = 1\\text{ N/m}^2$).
  - Các đơn vị áp suất khác: Bar ($1\\text{ bar} = 10^5\\text{ Pa}$), Atmosphere ($1\\text{ atm} = 1,013 \\times 10^5\\text{ Pa}$), Milimét thủy ngân ($1\\text{ mmHg} \\approx 133,3\\text{ Pa}$).
- **Quy luật áp suất thủy tĩnh theo độ sâu:**
  - Chất lỏng tác dụng áp suất lên đáy bình, thành bình và lên mọi điểm bên trong lòng chất lỏng theo mọi hướng như nhau.
  - Áp suất tại một điểm ở độ sâu $h$ tính từ mặt thoáng chất lỏng:
\\[
p = p_0 + \\rho g h
\\]
    - $p_0$: Áp suất khí quyển tác dụng lên bề mặt chất lỏng (khoảng $10^5\\text{ Pa}$).
    - $\\rho g h$: Áp suất do trọng lượng của cột chất lỏng có độ cao $h$ gây ra.
  - **Độ chênh lệch áp suất giữa hai điểm có độ sâu chênh lệch $h$:**
\\[
\\Delta p = \\rho g h
\\]

### 3. Nguyên lí Pascal và máy nén thủy lực

- **Nguyên lí Pascal:** Độ tăng áp suất tác dụng lên một chất lỏng kín được truyền nguyên vẹn đến mọi điểm trong chất lỏng và lên thành bình chứa.
- **Máy nén thủy lực (kích nâng ô tô):**
  - Gồm hai ống hình trụ tiết diện $S_1$ và $S_2$ thông nhau và chứa đầy dầu kín ($S_2 \\gg S_1$).
  - Tác dụng lực nhỏ $F_1$ lên pít-tông nhỏ $S_1 \\implies$ tạo độ tăng áp suất $p = F_1 / S_1$.
  - Áp suất này truyền nguyên vẹn sang pít-tông lớn $S_2$, sinh ra lực nâng lớn $F_2$:
\\[
p = \\frac{F_1}{S_1} = \\frac{F_2}{S_2} \\implies F_2 = F_1 \\cdot \\frac{S_2}{S_1}
\\]
*(Được lợi bao nhiêu lần về lực thì thiệt bấy nhiêu lần về đường đi dịch chuyển).*

### 4. Lực đẩy Archimedes và điều kiện vật chìm, nổi

- **Lực đẩy Archimedes ($F_A$):** Một vật nhúng trong chất lỏng chịu một lực đẩy hướng thẳng đứng từ dưới lên trên, có độ lớn bằng trọng lượng phần chất lỏng bị vật chiếm chỗ:
\\[
F_A = \\rho g V_{\\text{chìm}}
\\]
- **Điều kiện chìm nổi của vật:**
  - Nếu $P > F_A \\iff \\rho_{\\text{vật}} > \\rho_{\\text{chất lỏng}}$: Vật chìm hoàn toàn xuống đáy.
  - Nếu $P = F_A \\iff \\rho_{\\text{vật}} = \\rho_{\\text{chất lỏng}}$: Vật lơ lửng ở bất kì vị trí nào trong chất lỏng.
  - Nếu $P < F_A \\iff \\rho_{\\text{vật}} < \\rho_{\\text{chất lỏng}}$: Vật nổi lên mặt thoáng cho đến khi trọng lượng cân bằng lực đẩy: $P = \\rho g V_{\\text{chìm}}$.`
  }
};
