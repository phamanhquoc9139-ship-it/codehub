// scratch/prepare_comprehensive_physics.js
const fs = require('fs');

// We will build a comprehensive data structure for all 34 lessons of Physics 10.
// Each lesson will contain:
// - Title
// - Overview summary
// - Detailed sections with subheadings (###), structured bullets, callout cards, formulas, worked examples, and practical applications.

const lessonsDetailed = {};

// Lesson 1: Làm quen với Vật lí
lessonsDetailed[1] = {
  num: 1,
  chapter: 1,
  chapterTitle: "Chương I – Mở đầu",
  title: "Làm quen với Vật lí",
  body: `### 1. Đối tượng nghiên cứu và mục tiêu của Vật lí học

- **Đối tượng nghiên cứu:** Vật lí là ngành khoa học tự nhiên nghiên cứu về các dạng vận động cơ bản của vật chất (cơ học, nhiệt học, điện từ học, quang học, hạt nhân) và năng lượng, cùng các quy luật tương tác chi phối sự vận động của thế giới tự nhiên từ thang đo vi mô (hạt sơ cấp, nguyên tử) đến vĩ mô (thiên thể, thiên hà, vũ trụ).
- **Mục tiêu chính:** Tìm ra các quy luật tổng quát mô tả cách thức vũ trụ vận hành; từ đó xây dựng các mô hình toán học và lí thuyết dự đoán chính xác các hiện tượng tự nhiên.
- **Các phân ngành truyền thống và hiện đại:** Cơ học cổ điển, Nhiệt động lực học, Điện từ học, Quang học, Vật lí nguyên tử và hạt nhân, Vật lí lượng tử, Thuyết tương đối, Vật lí thiên văn và Vật lí chất rắn.

### 2. Phương pháp nghiên cứu trong Vật lí

- **Phương pháp thực nghiệm:** Xuất phát từ quan sát thực tế $\\rightarrow$ đề xuất giả thuyết khoa học $\\rightarrow$ thiết kế thí nghiệm kiểm chứng $\\rightarrow$ thu thập và xử lí số liệu $\\rightarrow$ rút ra quy luật hoặc định luật. Nếu kết quả thí nghiệm mâu thuẫn với giả thuyết, giả thuyết phải được sửa đổi hoặc bác bỏ.
- **Phương pháp lí thuyết:** Xuất phát từ các định luật đã biết $\\rightarrow$ sử dụng công cụ toán học và suy luận logic để xây dựng mô hình lí thuyết mới $\\rightarrow$ tiên đoán các hiện tượng chưa từng quan sát $\\rightarrow$ thực nghiệm tiến hành kiểm chứng tiên đoán.
- **Sự kết hợp:** Thực nghiệm và lí thuyết luôn hỗ trợ và bổ sung cho nhau, tạo nên bước nhảy vọt trong lịch sử khoa học (ví dụ: Newton phát minh giải tích để phát triển cơ học; Einstein tiên đoán sóng hấp dẫn và sau 100 năm thực nghiệm LIGO mới đo được).

### 3. Vai trò của Vật lí đối với đời sống, khoa học và công nghệ

- **Nền tảng của kĩ thuật và công nghệ:** Các cuộc cách mạng công nghiệp đều bắt nguồn từ phát minh vật lí: Động cơ hơi nước (Nhiệt học), Lưới điện và động cơ điện (Điện từ học), Máy tính điện tử và bán dẫn (Vật lí lượng tử), Năng lượng hạt nhân và Internet quang học.
- **Ứng dụng y học hiện đại:** Chụp X-quang, chụp cắt lớp CT, cộng hưởng từ hạt nhân MRI, xạ trị điều trị ung thư bằng tia phóng xạ, phẫu thuật mắt bằng laser.
- **Thông tin liên lạc và định vị:** Sóng vô tuyến, truyền dẫn cáp quang, vệ tinh viễn thông và hệ thống định vị toàn cầu GPS (phải hiệu chỉnh theo thuyết tương đối của Einstein để đảm bảo sai số vị trí dưới 1 mét).
- **Môi trường và phát triển bền vững:** Khai thác năng lượng tái tạo (điện gió, pin mặt trời, thủy triều, nhiệt hạch), cảnh báo thiên tai, nghiên cứu biến đổi khí hậu.`
};

// Lesson 2: Các quy tắc an toàn trong phòng thực hành Vật lí
lessonsDetailed[2] = {
  num: 2,
  chapter: 1,
  chapterTitle: "Chương I – Mở đầu",
  title: "Các quy tắc an toàn trong phòng thực hành Vật lí",
  body: `### 1. Tầm quan trọng của an toàn trong thực hành

- Thực hành thí nghiệm là cầu nối giữa lí thuyết và thực tiễn, giúp rèn luyện kĩ năng thao tác dụng cụ, đo lường và xử lí số liệu.
- Việc không tuân thủ an toàn có thể dẫn đến hỏa hoạn, điện giật, nổ bình thủy tinh, bỏng nhiệt/hóa chất, hoặc làm hư hại thiết bị đắt tiền.

### 2. Các quy tắc an toàn cốt lõi

- **An toàn điện:**
  - Không tự ý cắm phích điện hoặc bật công tắc nguồn khi mạch điện chưa được giáo viên kiểm tra và cho phép.
  - Luôn ngắt cầu dao/nguồn điện trước khi thay đổi linh kiện, đấu nối dây hoặc thu dọn thí nghiệm.
  - Tuyệt đối không dùng tay ướt hoặc đứng trên sàn ẩm khi tiếp xúc với thiết bị điện.
  - Sử dụng đúng thang đo điện áp (AC/DC) và giới hạn dòng điện định mức trên đồng hồ đo đa năng.
- **An toàn nhiệt và cháy nổ:**
  - Khi đun nóng chất lỏng trong ống nghiệm, dùng kẹp gỗ, hướng miệng ống nghiệm về phía không có người.
  - Tắt đèn cồn bằng cách chụp nắp đậy (tuyệt đối không dùng miệng thổi vì có thể làm ngọn lửa tạt ngược gây nổ cồn).
  - Không để các vật liệu dễ cháy (giấy, cồn, dầu) gần nguồn phát nhiệt hoặc tia lửa điện.
- **An toàn quang học và bức xạ:**
  - Tuyệt đối không nhìn thẳng vào chùm tia laser hoặc nguồn phát ánh sáng cường độ cao.
  - Không dùng mắt quan sát trực tiếp mặt trời qua kính lúp hoặc kính viễn vọng nếu không có bộ lọc chuyên dụng.

### 3. Biển báo cảnh báo nguy hiểm trong phòng thí nghiệm

- **Biển báo cấm (Hình tròn, viền đỏ, gạch chéo đỏ):** Cấm lửa, cấm chạm tay, cấm đóng điện.
- **Biển báo nguy hiểm (Hình tam giác đều, viền đen, nền vàng):** Nguy cơ điện giật cao thế, nguy hiểm bức xạ laser, nguy hiểm hóa chất ăn mòn, nguy cơ cháy nổ.
- **Biển chỉ dẫn và bảo hộ (Hình vuông/chữ nhật, nền xanh/trắng):** Vị trí bình chữa cháy, tủ sơ cứu y tế, lối thoát hiểm, yêu cầu đeo kính bảo hộ và găng tay cách điện.`
};

// Lesson 3: Thực hành tính sai số trong phép đo. Ghi kết quả đo
lessonsDetailed[3] = {
  num: 3,
  chapter: 1,
  chapterTitle: "Chương I – Mở đầu",
  title: "Thực hành tính sai số trong phép đo. Ghi kết quả đo",
  body: `### 1. Phép đo các đại lượng vật lí và phân loại sai số

- **Phép đo trực tiếp:** Giá trị đại lượng được đọc trực tiếp từ dụng cụ đo (ví dụ: đo chiều dài bằng thước kẹp, đo khối lượng bằng cân, đo thời gian bằng đồng hồ).
- **Phép đo gián tiếp:** Giá trị đại lượng được xác định qua công thức toán học liên hệ với các đại lượng đo trực tiếp (ví dụ: đo tốc độ $v = s/t$, tính thể tích hình trụ $V = \pi r^2 h$).
- **Sai số hệ thống:** Có tính quy luật ổn định, làm kết quả đo luôn lệch về một phía do dụng cụ đo bị lệch điểm 0 (lỗi mốc 0) hoặc do phương pháp đo chưa chuẩn. Cách khắc phục: hiệu chỉnh điểm 0 trước khi đo, chọn phương pháp đo chính xác.
- **Sai số ngẫu nhiên:** Không có quy luật rõ ràng, do thao tác người đo không đều, sự dao động của môi trường (gió, nhiệt độ, điện áp). Cách khắc phục: đo lặp lại nhiều lần ($n \ge 5$) trong cùng điều kiện và lấy giá trị trung bình.

### 2. Công thức tính sai số phép đo trực tiếp

Khi đo $n$ lần cùng một đại lượng $A$, thu được các giá trị $A_1, A_2, ..., A_n$:

- **Giá trị trung bình:**
\\[
\\bar{A} = \\frac{A_1 + A_2 + ... + A_n}{n}
\\]

- **Sai số tuyệt đối của từng lần đo:**
\\[
\\Delta A_i = |\\bar{A} - A_i|
\\]

- **Sai số tuyệt đối trung bình:**
\\[
\\overline{\\Delta A} = \\frac{\\Delta A_1 + \\Delta A_2 + ... + \\Delta A_n}{n}
\\]

- **Sai số tuyệt đối của phép đo (kể cả sai số dụng cụ $\\Delta A_{dc}$):**
\\[
\\Delta A = \\overline{\\Delta A} + \\Delta A_{dc}
\\]
*(Quy ước: Sai số dụng cụ $\\Delta A_{dc}$ thường lấy bằng nửa độ chia nhỏ nhất hoặc một độ chia nhỏ nhất ghi trên dụng cụ).*

- **Sai số tỉ đối (sai số tương đối):**
\\[
\\delta A = \\frac{\\Delta A}{\\bar{A}} \\times 100\\%
\\]
*(Sai số tỉ đối càng nhỏ thì phép đo càng chính xác).*

### 3. Cách ghi kết quả đo và quy tắc chữ số có nghĩa

- **Cách ghi kết quả:**
\\[
A = \\bar{A} \\pm \\Delta A
\\]
- **Quy tắc làm tròn:**
  - Sai số tuyệt đối $\\Delta A$ thường được làm tròn đến **1 hoặc 2 chữ số có nghĩa**.
  - Giá trị trung bình $\\bar{A}$ được làm tròn đến bậc thập phân tương ứng với sai số tuyệt đối $\\Delta A$.
- **Xác định sai số của phép đo gián tiếp:**
  - Nếu $X = A \\pm B$ thì $\\Delta X = \\Delta A + \\Delta B$ (sai số tuyệt đối bằng tổng sai số tuyệt đối).
  - Nếu $X = A \\cdot B$ hoặc $X = A / B$ thì $\\delta X = \\delta A + \\delta B$ (sai số tỉ đối bằng tổng sai số tỉ đối).
  - Nếu $X = A^m \\cdot B^n$ thì $\\delta X = m \\cdot \\delta A + n \\cdot \\delta B$.`
};

fs.writeFileSync('scratch/vatly10_comprehensive_lessons.json', JSON.stringify(lessonsDetailed, null, 2), 'utf8');
console.log('Sample detailed lessons generated.');
