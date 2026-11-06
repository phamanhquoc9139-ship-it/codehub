// scratch/lessons_part2.js - Lessons 13 to 22 (Chapter 3: Động lực học chất điểm)
module.exports = {
  13: {
    num: 13, chapter: 3, chapterTitle: "Chương III – Động lực học",
    title: "Tổng hợp và phân tích lực. Cân bằng lực",
    body: `### 1. Khái niệm lực và điều kiện cân bằng của chất điểm

- **Lực ($\\vec{F}$):** Là đại lượng vectơ đặc trưng cho tác dụng của vật này lên vật khác, kết quả làm vật bị biến dạng hoặc làm thay đổi trạng thái chuyển động (gây ra gia tốc cho vật).
- **Đặc trưng của vectơ lực:** Gốc (điểm đặt), phương và chiều (hướng của lực), độ dài (độ lớn của lực, đơn vị Newton $\\text{N}$). Giá của lực là đường thẳng mang vectơ lực.
- **Hai lực cân bằng:** Là hai lực cùng tác dụng lên một vật, cùng giá, ngược chiều và có cùng độ lớn.
- **Điều kiện cân bằng của chất điểm:** Hợp lực của tất cả các lực tác dụng lên chất điểm phải bằng vectơ không:
\\[
\\sum \\vec{F} = \\vec{F}_1 + \\vec{F}_2 + ... + \\vec{F}_n = \\vec{0}
\\]

### 2. Tổng hợp lực và quy tắc hình bình hành

- **Tổng hợp lực:** Là phép thay thế hai hay nhiều lực tác dụng đồng thời vào cùng một vật bằng một lực duy nhất có tác dụng giống hệt các lực ấy. Lực thay thế gọi là **hợp lực**.
- **Quy tắc hình bình hành:** Nếu hai lực đồng quy $\\vec{F}_1$ và $\\vec{F}_2$ làm thành hai cạnh của một hình bình hành thì hợp lực $\\vec{F}$ được biểu diễn bằng đường chéo xuất phát từ điểm đồng quy:
\\[
\\vec{F} = \\vec{F}_1 + \\vec{F}_2
\\]
- **Độ lớn hợp lực (với góc giữa hai lực là $\\alpha$):**
\\[
F = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \\cos\\alpha}
\\]
- **Các trường hợp giới hạn đặc biệt:**
  - Cùng chiều ($\\alpha = 0^\\circ$): $F = F_1 + F_2$ (hợp lực đạt giá trị cực đại $F_{\\max}$).
  - Ngược chiều ($\\alpha = 180^\\circ$): $F = |F_1 - F_2|$ (hợp lực đạt giá trị cực tiểu $F_{\\min}$).
  - Vuông góc ($\\alpha = 90^\\circ$): $F = \\sqrt{F_1^2 + F_2^2}$.
  - Tổng quát: $|F_1 - F_2| \\le F \\le F_1 + F_2$.

### 3. Phân tích lực

- **Phân tích lực:** Là phép thay thế một lực bằng hai hay nhiều lực thành phần có tác dụng giống hệt lực ban đầu (ngược lại với tổng hợp lực).
- **Quy tắc phân tích:** Chỉ phân tích lực theo các phương có tác dụng cụ thể trong bài toán (thường là hai phương vuông góc với nhau trên hệ trục tọa độ Decartes $Ox$ và $Oy$):
\\[
\\vec{F} = \\vec{F}_x + \\vec{F}_y \\quad \\text{với } F_x = F \\cos\\theta, \\; F_y = F \\sin\\theta
\\]`
  },

  14: {
    num: 14, chapter: 3, chapterTitle: "Chương III – Động lực học",
    title: "Định luật 1 Newton",
    body: `### 1. Thí nghiệm lịch sử của Galileo Galilei

- Trước thế kỉ XVII, Aristotle cho rằng lực là nguyên nhân duy trì chuyển động (muốn vật chuyển động đều thì phải liên tục tác dụng lực).
- Galileo thực hiện thí nghiệm máng nghiêng trơn nhẵn: Cho viên bi lăn xuống máng nghiêng thứ nhất rồi leo lên máng nghiêng thứ hai. Khi hạ dần góc nghiêng của máng thứ hai, viên bi đi được quãng đường càng xa hơn để đạt cùng độ cao ban đầu.
- **Suy luận của Galileo:** Nếu mặt phẳng nằm ngang hoàn toàn nhẵn bóng (không có ma sát) và dài vô tận, viên bi sẽ chuyển động thẳng đều mãi mãi mà không cần bất kì lực nào duy trì.

### 2. Nội dung Định luật 1 Newton

- **Phát biểu định luật:**
  > Nếu một vật không chịu tác dụng của lực nào hoặc chịu tác dụng của các lực có hợp lực bằng không, thì vật đang đứng yên sẽ tiếp tục đứng yên, vật đang chuyển động sẽ tiếp tục chuyển động thẳng đều mãi mãi.
\\[
\\sum \\vec{F} = \\vec{0} \\implies \\vec{a} = \\vec{0} \\iff \\vec{v} = \\text{không đổi}
\\]
- **Ý nghĩa cốt lõi:**
  - Lực **không phải là nguyên nhân duy trì chuyển động**, mà lực là nguyên nhân làm **thay đổi vận tốc** (gây ra gia tốc) của vật.
  - Khi hợp lực bằng không, trạng thái chuyển động của vật được bảo toàn.

### 3. Quán tính và ứng dụng trong đời sống

- **Quán tính:** Là tính chất của mọi vật có xu hướng bảo toàn vận tốc của nó cả về hướng và độ lớn.
  - Khi xe phanh gấp: Người ngồi trên xe bị chúi về phía trước do cơ thể có quán tính muốn duy trì vận tốc cũ.
  - Khi xe rẽ ngoặt sang trái: Người ngồi trên xe bị nghiêng dạt sang phải do quán tính muốn tiếp tục chuyển động thẳng theo hướng cũ.
  - Khi xe đột ngột tăng tốc: Người ngồi trên xe bị ngửa người về phía sau tựa vào ghế.
- **Hệ quy chiếu quán tính:** Là hệ quy chiếu trong đó Định luật 1 Newton được nghiệm đúng (ví dụ: hệ quy chiếu gắn với Trái Đất được coi gần đúng là hệ quy chiếu quán tính).
- **Ứng dụng an toàn giao thông:** Thắt dây an toàn khi đi ô tô để giữ người không bị văng về phía trước khi phanh gấp; trang bị túi khí giảm chấn; giữ khoảng cách an toàn giữa các xe khi lưu thông trên cao tốc.`
  },

  15: {
    num: 15, chapter: 3, chapterTitle: "Chương III – Động lực học",
    title: "Định luật 2 Newton",
    body: `### 1. Nội dung Định luật 2 Newton

- **Phát biểu định luật:**
  > Gia tốc của một vật cùng hướng với hợp lực tác dụng lên vật. Độ lớn của gia tốc tỉ lệ thuận với độ lớn của hợp lực tác dụng và tỉ lệ nghịch với khối lượng của vật.
- **Biểu thức toán học:**
\\[
\\vec{a} = \\frac{\\sum \\vec{F}}{m} \\iff \\sum \\vec{F} = m\\vec{a}
\\]
*(Nếu vật chịu tác dụng của nhiều lực thì $\\sum \\vec{F} = \\vec{F}_1 + \\vec{F}_2 + ... + \\vec{F}_n$ là hợp lực).*

### 2. Khối lượng và mức quán tính

- **Khối lượng ($m$):** Là đại lượng vô hướng, đặc trưng cho mức quán tính của vật.
  - Mức quán tính càng lớn $\\implies$ khối lượng $m$ càng lớn $\\implies$ vật càng khó thay đổi vận tốc (cần lực lớn hơn hoặc thời gian dài hơn để tạo ra cùng một gia tốc).
  - Khối lượng có tính chất cộng: Khối lượng của một hệ vật bằng tổng khối lượng của các vật thành phần cấu tạo nên hệ.
- **Định nghĩa đơn vị lực Newton ($\\text{N}$):**
  - Một Newton là độ lớn của lực truyền cho một vật có khối lượng $1\\text{ kg}$ một gia tốc bằng $1\\text{ m/s}^2$:
\\[
1\\text{ N} = 1\\text{ kg} \\cdot \\text{m/s}^2
\\]

### 3. Quy trình 5 bước giải bài toán động lực học bằng Định luật 2 Newton

- **Bước 1:** Xác định rõ vật khảo sát, chọn hệ quy chiếu quán tính (gốc tọa độ, hệ trục $Oxy$, chiều dương, gốc thời gian).
- **Bước 2:** Liệt kê và vẽ chính xác các lực tác dụng lên vật (trọng lực $\\vec{P}$, phản lực $\\vec{N}$, lực kéo $\\vec{F}_k$, lực ma sát $\\vec{F}_{ms}$, lực căng dây $\\vec{T}$...).
- **Bước 3:** Viết phương trình Định luật 2 Newton dạng vectơ:
\\[
\\vec{F}_1 + \\vec{F}_2 + ... + \\vec{F}_n = m\\vec{a}
\\]
- **Bước 4:** Chiếu phương trình vectơ lên hai trục tọa độ $Ox$ (trục chuyển động) và $Oy$ (trục vuông góc chuyển động):
  - Chiếu lên $Oy$: $\\sum F_y = 0 \\implies$ xác định phản lực pháp tuyến $N$.
  - Chiếu lên $Ox$: $\\sum F_x = ma_x \\implies$ tìm gia tốc $a$.
- **Bước 5:** Kết hợp các công thức động học ($v = v_0 + at, d = v_0 t + \\frac{1}{2}at^2, v^2 - v_0^2 = 2ad$) để tìm vận tốc, thời gian, quãng đường và kiểm tra lại đơn vị tính.`
  },

  16: {
    num: 16, chapter: 3, chapterTitle: "Chương III – Động lực học",
    title: "Định luật 3 Newton",
    body: `### 1. Tác dụng tương hỗ giữa các vật

- Trong tự nhiên, không có lực nào tồn tại cô lập một mình. Lực là sự tương tác qua lại giữa hai vật. Khi vật này tác dụng lực lên vật kia thì ngược lại, vật kia cũng tác dụng một lực trở lại vật này.

### 2. Nội dung Định luật 3 Newton

- **Phát biểu định luật:**
  > Trong mọi trường hợp, khi vật A tác dụng lên vật B một lực, thì vật B cũng tác dụng lại vật A một lực. Hai lực này có cùng giá, cùng độ lớn nhưng ngược chiều nhau.
- **Biểu thức toán học:**
\\[
\\vec{F}_{AB} = -\\vec{F}_{BA} \\iff F_{AB} = F_{BA}
\\]
*(Một lực được gọi là lực tác dụng, lực còn lại được gọi là phản lực).*

### 3. Bốn đặc điểm cốt lõi của cặp lực và phản lực

- **Xuất hiện và triệt tiêu đồng thời:** Không có lực nào xuất hiện trước hay sau; ngay khi A tác dụng lên B thì B lập tức tác dụng lên A.
- **Cùng bản chất vật lí:** Nếu lực tác dụng là lực hấp dẫn thì phản lực cũng là lực hấp dẫn; nếu lực tác dụng là lực đàn hồi thì phản lực cũng là lực đàn hồi.
- **Cùng giá, cùng độ lớn, ngược chiều:** Độ lớn của hai lực luôn bằng nhau tuyệt đối ($F_{AB} = F_{BA}$), bất kể khối lượng của hai vật bằng nhau hay chênh lệch rất lớn.
- **ĐẶT VÀO HAI VẬT KHÁC NHAU:** Lực $\\vec{F}_{AB}$ đặt vào vật B, còn phản lực $\\vec{F}_{BA}$ đặt vào vật A. Vì đặt vào hai vật khác nhau nên **cặp lực và phản lực KHÔNG BAO GIỜ TRIỆT TIÊU NHAU** trên sơ đồ lực của một vật.

### 4. Các ví dụ và ứng dụng thực tiễn

- **Động tác bước đi của người:** Chân đạp vào mặt đất một lực hướng về phía sau, mặt đất tác dụng phản lực ma sát nghỉ đẩy chân người hướng về phía trước.
- **Súng giật khi bắn:** Thuốc nổ tác dụng lực đẩy viên đạn bay về phía trước, viên đạn tác dụng phản lực đẩy nòng súng giật lùi về phía sau.
- **Động cơ phản lực và tên lửa:** Tên lửa đốt nhiên liệu và phụt dòng khí nóng với vận tốc lớn về phía sau, dòng khí tác dụng phản lực đẩy tên lửa bay vút lên phía trước.`
  },

  17: {
    num: 17, chapter: 3, chapterTitle: "Chương III – Động lực học",
    title: "Trọng lực và lực căng",
    body: `### 1. Trọng lực và trọng lượng

- **Trọng lực ($\\vec{P}$):** Là lực hút của Trái Đất tác dụng lên vật, gây ra cho vật gia tốc rơi tự do. Bản chất trọng lực là trường hợp riêng của lực hấp dẫn giữa Trái Đất và các vật thể ở gần bề mặt của nó.
- **Đặc điểm của vectơ trọng lực:**
  - Điểm đặt: Tại **trọng tâm** của vật.
  - Phương: Thẳng đứng.
  - Chiều: Hướng về phía tâm Trái Đất (từ trên xuống dưới).
  - Độ lớn: Tính bằng công thức $P = mg$ (với $m$ là khối lượng vật tính bằng $\\text{kg}$; $g$ là gia tốc rơi tự do tính bằng $\\text{m/s}^2$).
- **Phân biệt khối lượng ($m$) và trọng lượng ($P$):**
  - Khối lượng $m$ là lượng chất chứa trong vật, là thuộc tính nội tại không đổi khi di chuyển vật đến các vị trí khác nhau trong vũ trụ.
  - Trọng lượng $P$ là độ lớn của trọng lực tác dụng lên vật, thay đổi tùy theo gia tốc $g$ tại từng vị trí (ví dụ: trên Mặt Trăng $g_{\\text{MT}} \\approx g_{\\text{TĐ}}/6$, nên một người nặng $60\\text{ kg}$ trên Trái Đất có trọng lượng $600\\text{ N}$, nhưng trên Mặt Trăng chỉ có trọng lượng $100\\text{ N}$).

### 2. Lực căng của sợi dây ($\\vec{T}$)

- **Khái niệm:** Khi một sợi dây bị kéo căng, trong lòng sợi dây xuất hiện lực chống lại sự kéo dãn, gọi là lực căng dây.
- **Đặc điểm của lực căng dây:**
  - Điểm đặt: Tại điểm tiếp xúc giữa dây và vật được treo/kéo.
  - Phương: Trùng với phương của sợi dây.
  - Chiều: Hướng từ điểm tiếp xúc vào phần giữa của sợi dây (hướng kéo về phía dây).
- **Quy ước dây nhẹ không dãn:** Sợi dây có khối lượng không đáng kể và không dãn thì độ lớn lực căng dây bằng nhau tại mọi điểm dọc theo chiều dài sợi dây:
\\[
T_{\\text{đầu 1}} = T_{\\text{đầu 2}} = T
\\]
- **Trường hợp vật treo đứng yên cân bằng:**
\\[
\\vec{P} + \\vec{T} = \\vec{0} \\implies T = P = mg
\\]`
  },

  18: {
    num: 18, chapter: 3, chapterTitle: "Chương III – Động lực học",
    title: "Lực ma sát",
    body: `### 1. Ba loại lực ma sát trong cơ học

- **Lực ma sát trượt ($\\vec{F}_{mst}$):** Xuất hiện ở mặt tiếp xúc khi một vật trượt trên bề mặt của một vật khác, có hướng ngược hướng vận tốc tương đối của vật trượt.
- **Lực ma sát nghỉ ($\\vec{F}_{msn}$):** Xuất hiện ở mặt tiếp xúc khi một vật có xu hướng chuyển động trượt dưới tác dụng của ngoại lực nhưng vẫn chưa chuyển động được. Lực ma sát nghỉ cân bằng với thành phần ngoại lực kéo song song mặt tiếp xúc: $F_{msn} = F_{\\text{kéo}}$.
- **Lực ma sát nghỉ cực đại ($F_{msn\\max}$):** Khi ngoại lực kéo tăng dần, lực ma sát nghỉ tăng theo cho đến khi đạt giá trị cực đại. Nếu lực kéo vượt quá giá trị này, vật bắt đầu trượt và ma sát chuyển thành ma sát trượt:
\\[
F_{msn\\max} \\approx \\mu_n N \\ge F_{mst}
\\]
- **Lực ma sát lăn:** Xuất hiện ở mặt tiếp xúc khi một vật lăn trên bề mặt vật khác, có độ lớn nhỏ hơn rất nhiều so với ma sát trượt (do đó ổ bi được dùng để biến ma sát trượt thành ma sát lăn).

### 2. Định luật ma sát trượt và công thức tính

- **Đặc điểm của lực ma sát trượt:**
  - Không phụ thuộc vào diện tích tiếp xúc giữa hai bề mặt.
  - Không phụ thuộc đáng kể vào tốc độ trượt tương đối (trong phạm vi tốc độ thông thường).
  - Tỉ lệ thuận với độ lớn của áp lực pháp tuyến $N$ vuông góc với mặt tiếp xúc.
  - Phụ thuộc vào vật liệu chế tạo và tình trạng bề mặt tiếp xúc (độ nhám, khô ráo hay có dầu bôi trơn).
- **Công thức tính độ lớn lực ma sát trượt:**
\\[
F_{mst} = \\mu_t N
\\]
*(với $\\mu_t$ là hệ số ma sát trượt, là đại lượng không có thứ nguyên, không có đơn vị; $N$ là áp lực pháp tuyến tính bằng $\\text{N}$).*

### 3. Vai trò của ma sát trong đời sống và kĩ thuật

- **Ma sát có lợi:**
  - Ma sát nghỉ giữa đế giày và mặt đường giúp con người và động vật bước đi mà không bị trượt ngã.
  - Ma sát giữa má phanh và vành bánh xe giúp phương tiện giảm tốc độ và dừng lại an toàn.
  - Ma sát giúp dây curoa truyền chuyển động quay giữa các bánh đà trong máy móc.
- **Ma sát có hại:** Làm mòn xích líp xe, lốp xe, sinh nhiệt làm hao phí năng lượng trong động cơ. Cách giảm: tra dầu mỡ bôi trơn, dùng ổ bi, làm nhẵn bề mặt tiếp xúc.`
  },

  19: {
    num: 19, chapter: 3, chapterTitle: "Chương III – Động lực học",
    title: "Lực cản và lực nâng",
    body: `### 1. Lực cản của môi trường chất lưu (chất lỏng và chất khí)

- Khi một vật chuyển động trong chất lỏng hoặc chất khí, chất lưu tác dụng lên vật một lực cản trở chuyển động, gọi là **lực cản**.
- **Các yếu tố ảnh hưởng đến độ lớn lực cản:**
  - **Tốc độ chuyển động ($v$):** Tốc độ càng lớn thì lực cản càng tăng nhanh (ở tốc độ vừa phải lực cản tỉ lệ với $v$, ở tốc độ cao lực cản tỉ lệ với $v^2$).
  - **Hình dạng khí động học của vật:** Vật có dạng hình thoi hoặc hình giọt nước thuôn nhọn (khí động học) chịu lực cản nhỏ hơn nhiều so với vật phẳng hoặc vật có góc cạnh vuông vức.
  - **Diện tích tiết diện cản ($S$):** Tiết diện cản vuông góc với dòng chảy càng lớn thì lực cản càng lớn (ứng dụng: bung dù làm tăng tiết diện cản để hãm tốc độ rơi của người nhảy dù).
  - **Bản chất của môi trường:** Khối lượng riêng và độ nhớt của chất lưu càng lớn thì lực cản càng lớn (chuyển động trong nước chịu lực cản lớn hơn trong không khí).

### 2. Tốc độ rơi giới hạn trong không khí

- Khi thả rơi một vật trong không khí từ độ cao lớn:
  - Ban đầu, tốc độ $v$ nhỏ $\\implies$ lực cản $F_c$ nhỏ $\\implies$ trọng lực $P > F_c \\implies$ vật rơi nhanh dần.
  - Khi tốc độ tăng, lực cản $F_c$ tăng dần cho đến khi **lực cản cân bằng với trọng lực**:
\\[
F_c = P \\implies \\sum F = 0 \\implies a = 0
\\]
  - Khi đó, vật không tăng tốc nữa mà chuyển động thẳng đều với vận tốc không đổi, gọi là **tốc độ giới hạn** ($v_{gh}$).

### 3. Lực nâng khí động học và nguyên lí Bernoulli

- **Lực nâng:** Khi vật có hình dạng đặc biệt chuyển động trong chất lưu, ngoài lực cản theo phương ngang, chất lưu còn tác dụng lên vật một lực theo phương thẳng đứng hướng lên, gọi là lực nâng.
- **Nguyên lí tạo lực nâng của cánh máy bay:**
  - Cánh máy bay có mặt trên cong lồi, mặt dưới phẳng. Khi máy bay bay về phía trước, dòng khí đi qua mặt trên cánh phải đi quãng đường dài hơn $\\implies$ vận tốc dòng khí ở mặt trên lớn hơn ở mặt dưới ($v_{\\text{trên}} > v_{\\text{dưới}}$).
  - Theo Định luật Bernoulli, nơi nào vận tốc dòng khí lớn hơn thì áp suất tĩnh nhỏ hơn ($p_{\\text{trên}} < p_{\\text{dưới}}$).
  - Sự chênh lệch áp suất giữa mặt dưới và mặt trên tạo nên hợp lực nâng hướng thẳng đứng lên trên, nâng máy bay bay lên bầu trời.`
  },

  20: {
    num: 20, chapter: 3, chapterTitle: "Chương III – Động lực học",
    title: "Một số ví dụ về cách giải bài toán động lực học",
    body: `### 1. Dạng 1: Vật chuyển động trên mặt phẳng nằm ngang có ma sát

- **Bài toán:** Vật khối lượng $m$ chịu lực kéo $\\vec{F}_k$ hợp với phương ngang góc $\\alpha$, hệ số ma sát trượt $\\mu_t$.
- **Các lực tác dụng:** Trọng lực $\\vec{P}$, phản lực pháp tuyến $\\vec{N}$, lực kéo $\\vec{F}_k$, lực ma sát trượt $\\vec{F}_{mst}$.
- **Phương trình Định luật 2 Newton:** $\\vec{P} + \\vec{N} + \\vec{F}_k + \\vec{F}_{mst} = m\\vec{a}$.
- **Chiếu lên hai trục tọa độ:**
  - Chiếu lên trục thẳng đứng $Oy$: $N + F_k \\sin\\alpha - P = 0 \\implies N = mg - F_k \\sin\\alpha$.
  - Tính lực ma sát trượt: $F_{mst} = \\mu_t N = \\mu_t (mg - F_k \\sin\\alpha)$.
  - Chiếu lên trục chuyển động $Ox$: $F_k \\cos\\alpha - F_{mst} = ma \\implies a = \\frac{F_k \\cos\\alpha - F_{mst}}{m}$.

### 2. Dạng 2: Vật trượt trên mặt phẳng nghiêng góc $\\alpha$

- **Bài toán:** Thả vật khối lượng $m$ tự trượt xuống từ đỉnh mặt phẳng nghiêng góc $\\alpha$ so với phương ngang, hệ số ma sát trượt $\\mu_t$.
- **Chọn hệ trục tọa độ:** Trục $Ox$ dọc theo mặt phẳng nghiêng, hướng xuống dưới; trục $Oy$ vuông góc với mặt phẳng nghiêng, hướng lên trên.
- **Phân tích trọng lực:** $\\vec{P} = \\vec{P}_x + \\vec{P}_y$ với:
  - Thành phần song song mặt phẳng nghiêng kéo vật trượt xuống: $P_x = mg \\sin\\alpha$.
  - Thành phần vuông góc ép vật vào mặt phẳng nghiêng: $P_y = mg \\cos\\alpha$.
- **Chiếu lên các trục:**
  - Chiếu lên $Oy$: $N - P_y = 0 \\implies N = P_y = mg \\cos\\alpha$.
  - Lực ma sát trượt: $F_{mst} = \\mu_t N = \\mu_t mg \\cos\\alpha$.
  - Chiếu lên $Ox$: $P_x - F_{mst} = ma \\implies mg \\sin\\alpha - \\mu_t mg \\cos\\alpha = ma$.
- **Gia tốc trượt xuống của vật:**
\\[
a = g(\\sin\\alpha - \\mu_t \\cos\\alpha)
\\]
*(Nếu không có ma sát $\\mu_t = 0 \\implies a = g\\sin\\alpha$). Điều kiện để vật tự trượt xuống là $\\tan\\alpha > \\mu_t$.*

### 3. Dạng 3: Hệ hai vật nối bằng dây nhẹ qua ròng rọc cố định

- Giả sử sợi dây nhẹ không dãn, ròng rọc không ma sát và có khối lượng không đáng kể.
- Do dây không dãn nên hai vật chuyển động với cùng gia tốc: $a_1 = a_2 = a$.
- Do dây nhẹ nên độ lớn lực căng dây tác dụng lên hai vật bằng nhau: $T_1 = T_2 = T$.
- Viết phương trình Định luật 2 Newton riêng cho từng vật, sau đó cộng vế để khử ẩn lực căng $T$, suy ra gia tốc $a$, rồi thế ngược lại để tìm $T$.`
  },

  21: {
    num: 21, chapter: 3, chapterTitle: "Chương III – Động lực học",
    title: "Moment lực. Cân bằng của vật rắn",
    body: `### 1. Tác dụng làm quay của lực và moment lực

- Khi một vật có trục quay cố định (như cánh cửa, đòn bẩy, vô lăng, bánh đà), lực tác dụng có thể làm vật quay quanh trục.
- **Trục quay:** Là đường thẳng cố định mà các điểm của vật chuyển động tròn xung quanh nó.
- **Cánh tay đòn ($d$):** Là **khoảng cách vuông góc** kẻ từ trục quay đến giá của lực (tuyệt đối không nhầm với khoảng cách từ trục quay đến điểm đặt của lực).
- **Định nghĩa Moment lực ($M$):** Đại lượng đặc trưng cho tác dụng làm quay của lực quanh trục quay:
\\[
M = F \\cdot d
\\]
  - $F$: Độ lớn của lực tác dụng (Newton, $\\text{N}$).
  - $d$: Cánh tay đòn của lực (mét, $\\text{m}$).
  - $M$: Moment lực (Newton mét, $\\text{N}\\cdot\\text{m}$).
- **Trường hợp lực không có tác dụng làm quay ($M = 0$):** Khi giá của lực đi qua trục quay hoặc song song với trục quay.

### 2. Quy tắc moment lực (Điều kiện cân bằng của vật có trục quay cố định)

- **Phát biểu quy tắc:**
  > Muốn cho một vật có trục quay cố định ở trạng thái cân bằng, tổng các moment lực có xu hướng làm vật quay theo chiều kim đồng hồ phải bằng tổng các moment lực có xu hướng làm vật quay ngược chiều kim đồng hồ.
\\[
\\sum M_{\\text{thuận}} = \\sum M_{\\text{ngược}} \\iff F_1 d_1 + F_2 d_2 + ... = F_1' d_1' + F_2' d_2' + ...
\\]
- **Ứng dụng đòn bẩy:** $F_1 d_1 = F_2 d_2 \\implies \\frac{F_1}{F_2} = \\frac{d_2}{d_1}$. Muốn được lợi về lực ($F_1 < F_2$) thì cánh tay đòn $d_1$ phải lớn hơn $d_2$ (ứng dụng trong xà beng, kìm bấm, bập bênh, kéo cắt kim loại).

### 3. Ngẫu lực và Moment của ngẫu lực

- **Ngẫu lực:** Là hệ hai lực song song, ngược chiều, có cùng độ lớn và cùng tác dụng vào một vật (ví dụ: hai tay vặn vô lăng, hai tay vặn vòi nước, hai tay vặn cờ-lê).
- **Tác dụng của ngẫu lực:** Ngẫu lực chỉ làm vật quay quanh trục chứ không làm vật chuyển động tịnh tiến.
- **Moment của ngẫu lực:**
\\[
M = F \\cdot d_0
\\]
*(với $F$ là độ lớn của mỗi lực; $d_0$ là khoảng cách vuông góc giữa giá của hai lực, gọi là cánh tay đòn của ngẫu lực). Moment ngẫu lực không phụ thuộc vào vị trí của trục quay vuông góc với mặt phẳng ngẫu lực.*`
  },

  22: {
    num: 22, chapter: 3, chapterTitle: "Chương III – Động lực học",
    title: "Thực hành: Tổng hợp lực",
    body: `### 1. Mục đích và dụng cụ thí nghiệm

- **Mục đích:** Kiểm nghiệm quy tắc hình bình hành lực và điều kiện cân bằng của chất điểm dưới tác dụng của các lực đồng quy.
- **Dụng cụ thí nghiệm:**
  - Bảng từ gắn giấy trắng hoặc thước đo góc hình tròn $360^\\circ$.
  - Hai lực kế lò xo (giới hạn đo $5\\text{ N}$, độ chia nhỏ nhất $0,1\\text{ N}$).
  - Vòng nhẫn kim loại nhẹ (đóng vai trò chất điểm đồng quy).
  - Dây chỉ mềm không dãn.
  - Nam châm từ tính định vị góc.

### 2. Các bước tiến hành thí nghiệm

- **Bước 1:** Gắn bảng chia góc lên bảng từ thẳng đứng. Mắc hai lực kế vào hai điểm cố định trên bảng.
- **Bước 2:** Mắc hai sợi dây từ hai lực kế vào vòng nhẫn kim loại. Mắc một lò xo hoặc sợi dây thứ ba treo vật nặng kéo vòng nhẫn về vị trí cân bằng $O$.
- **Bước 3:** Ghi nhận số chỉ của hai lực kế là $F_1$ và $F_2$, đánh dấu phương và góc $\\alpha$ hợp bởi hai sợi dây trên bảng chia độ.
- **Bước 4:** Ghi nhận số chỉ của lực thứ ba $F_3$ (lực cân bằng với hợp lực của $\\vec{F}_1$ và $\\vec{F}_2$).
- **Bước 5:** Dùng bút chì và thước kẻ vẽ các vectơ $\\vec{F}_1, \\vec{F}_2$ theo đúng tỉ lệ xích trên giấy. Dựng hình bình hành lực để tìm vectơ hợp lực lí thuyết $\\vec{F}_{\\text{lt}}$.

### 3. Xử lí số liệu và đánh giá kết quả

- Tính độ lớn hợp lực theo lí thuyết hình bình hành:
\\[
F_{\\text{lt}} = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \\cos\\alpha}
\\]
- So sánh vectơ hợp lực lí thuyết $\\vec{F}_{\\text{lt}}$ với lực cân bằng thực nghiệm $\\vec{F}_3$:
  - Về độ lớn: Kiểm tra xem $F_{\\text{lt}}$ có xấp xỉ bằng $F_3$ trong giới hạn sai số cho phép hay không.
  - Về hướng: Kiểm tra xem $\\vec{F}_{\\text{lt}}$ và $\\vec{F}_3$ có nằm trên cùng một đường thẳng và ngược chiều nhau hay không.
- Đánh giá các nguyên nhân gây sai số: Lực ma sát tại vòng nhẫn, độ giãn không đều của lò xo lực kế, sai số đọc góc trên bảng chia độ.`
  }
};
