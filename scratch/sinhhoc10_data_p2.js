// scratch/sinhhoc10_data_p2.js
const { chapters, lessonsP1 } = require('./sinhhoc10_data_p1.js');

const lessonsP2 = {
  14: {
    num: 14,
    chapter: 4,
    part: "Phần một. Sinh học tế bào",
    isPractical: false,
    title: "Phân giải và tổng hợp các chất trong tế bào",
    subtitle: "Hô hấp tế bào hiếu khí (Đường phân – Chu trình Krebs – Chuỗi truyền electron), Lên men, Quang hợp (Pha sáng – Chu trình Calvin) và Hoá tổng hợp",
    diagramNote: "Sơ đồ hô hấp hiếu khí (đường phân → oxy hoá pyruvate → Krebs → chuỗi electron); lên men; pha sáng – chu trình Calvin trong lục lạp; mối quan hệ tổng hợp – phân giải.",
    content: `### 1. Phân giải các chất trong tế bào: Hô hấp hiếu khí và Lên men
- **Bản chất phân giải:** Phá vỡ các liên kết hoá học trong các phân tử hữu cơ phức tạp (chủ yếu là glucose) thành các chất đơn giản hơn, giải phóng năng lượng (một phần tích luỹ trong **ATP**, một phần toả ra dưới dạng nhiệt).
- **Hô hấp tế bào (Hô hấp hiếu khí):** Quá trình oxy hoá hoàn toàn phân tử glucose đến $\\text{CO}_2$ và $\\text{H}_2\\text{O}$ với sự tham gia của $\\text{O}_2$ làm chất nhận electron cuối cùng.
  - **Phương trình tổng quát:**
  $$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{Năng lượng (}30\text{–}32\\text{ ATP + Nhiệt)}$$
  - **Ba giai đoạn của hô hấp hiếu khí ở tế bào nhân thực:**

| Giai đoạn | Vị trí diễn ra | Nguyên liệu chính | Sản phẩm tạo thành | Số ATP thu được |
|---|---|---|---|---|
| **1. Đường phân** | Tế bào chất (Bào tương) | $1\\text{ Glucose } (6\\text{C}), \\text{ADP}, \\text{NAD}^+$ | $2\\text{ Pyruvate } (3\\text{C}), 2\\text{ NADH}$ | **$2\\text{ ATP}$** (thu ròng) |
| **2. Oxy hoá Pyruvate & Chu trình Krebs** | Chất nền ti thể (Matrix) | $2\\text{ Pyruvate} \\rightarrow 2\\text{ Acetyl-CoA } (2\\text{C})$ | $6\\text{ CO}_2, 8\\text{ NADH}, 2\\text{ FADH}_2$ | **$2\\text{ ATP}$** |
| **3. Chuỗi truyền electron & Phosphoryl hoá oxy hoá** | Màng trong ti thể (Cristae) | $10\\text{ NADH}, 2\\text{ FADH}_2, \\text{O}_2$ | $6\\text{ H}_2\\text{O}$ (bơm $\\text{H}^+$ qua phức hệ ATP synthase) | **$26\text{–}28\\text{ ATP}$** |

- **Lên men (Phân giải kị khí trong bào tương):** Diễn ra khi tế bào **thiếu $\\text{O}_2$**; sau giai đoạn đường phân, pyruvate không đi vào ti thể mà ở lại tế bào chất nhận electron từ $\\text{NADH}$ để **tái sinh $\\text{NAD}^+$** giúp đường phân tiếp tục duy trì. Mỗi phân tử glucose lên men chỉ thu được ròng **$2\\text{ ATP}$**:
  - **Lên men lactate:** $\\text{Pyruvate} \\rightarrow \\text{Lactate}$ (không giải phóng $\\text{CO}_2$; gặp ở vi khuẩn lactic làm sữa chua/dưa muối và tế bào cơ người khi vận động cường độ cao thiếu oxy gây mỏi cơ).
  - **Lên men ethanol (rượu):** $\\text{Pyruvate} \\rightarrow \\text{Acetaldehyde} + \\text{CO}_2 \\rightarrow \\text{Ethanol}$ (gặp ở nấm men *Saccharomyces* trong sản xuất rượu, bia và làm nở bánh mì).

### 2. Tổng hợp các chất và tích luỹ năng lượng: Quang hợp và Hoá tổng hợp
- **Bản chất tổng hợp:** Sử dụng năng lượng ATP và enzyme để liên kết các đơn phân thành các đại phân tử đặc trưng của tế bào (amino acid $\\rightarrow$ protein; nucleotide $\\rightarrow$ DNA/RNA; glucose $\\rightarrow$ tinh bột/glycogen/cellulose; glycerol + acid béo $\\rightarrow$ lipid).
- **Quang hợp ở thực vật, tảo và vi khuẩn lam:** Quá trình thu nhận và chuyển hoá năng lượng ánh sáng mặt trời thành hoá năng tích luỹ trong các hợp chất hữu cơ (glucose) từ nguồn nguyên liệu vô cơ $\\text{CO}_2$ và $\\text{H}_2\\text{O}$, đồng thời giải phóng khí $\\text{O}_2$.
  $$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{Ánh sáng, Diệp lục}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$
  - **Pha sáng (diễn ra tại màng Thylakoid của lục lạp):** Sắc tố diệp lục hấp thụ photon ánh sáng chuyển thành trạng thái kích thích, truyền electron qua chuỗi truyền electron tạo gradient $\\text{H}^+$ để tổng hợp **ATP** và khử $\\text{NADP}^+$ thành **NADPH**; đồng thời xảy ra **quang phân li nước** ($2\\text{H}_2\\text{O} \\rightarrow 4\\text{H}^+ + 4e^- + \\text{O}_2\\uparrow$) giải phóng khí $\\text{O}_2$ có nguồn gốc từ nước.
  - **Pha tối / Chu trình cố định $\\text{CO}_2$ – Chu trình Calvin (diễn ra tại chất nền Stroma của lục lạp):** Không cần ánh sáng trực tiếp nhưng bắt buộc phải sử dụng **ATP và NADPH** do pha sáng cung cấp để khử $\\text{CO}_2$ thành chất hữu cơ ($\text{G3P} \\rightarrow \\text{Glucose}$, tinh bột, amino acid), đồng thời tái tạo $\\text{ADP}$ và $\\text{NADP}^+$ trả lại cho pha sáng.
- **Quang khử và Hoá tổng hợp ở vi khuẩn:**
  - **Quang khử:** Một số vi khuẩn quang hợp màu tía/màu lục sử dụng ánh sáng nhưng dùng chất cho electron là $\\text{H}_2\\text{S}$ hoặc $\\text{H}_2$ thay vì $\\text{H}_2\\text{O}$ nên **không giải phóng khí $\\text{O}_2$**.
  - **Hoá tổng hợp:** Một số vi khuẩn tự dưỡng (vi khuẩn nitrat hoá, vi khuẩn oxy hoá lưu huỳnh, vi khuẩn sắt) không dùng ánh sáng mà sử dụng năng lượng giải phóng từ các phản ứng **oxy hoá chất vô cơ** ($\text{NH}_3, \\text{H}_2\\text{S}, \\text{Fe}^{2+}$) để đồng hoá $\\text{CO}_2$ thành chất hữu cơ.

> **Mối quan hệ thống nhất:** Quang hợp và hoá tổng hợp tích luỹ năng lượng và tạo chất hữu cơ + $\\text{O}_2$ làm nguyên liệu cho hô hấp; ngược lại, hô hấp phân giải chất hữu cơ giải phóng năng lượng cho hoạt động sống và tạo $\\text{CO}_2 + \\text{H}_2\\text{O}$ cung cấp lại cho quang hợp.`
  },

  15: {
    num: 15,
    chapter: 4,
    part: "Phần một. Sinh học tế bào",
    isPractical: true,
    title: "Thực hành: Ảnh hưởng của một số yếu tố đến hoạt tính enzyme và kiểm tra amylase",
    subtitle: "Thiết kế thí nghiệm đối chứng khảo sát ảnh hưởng của nhiệt độ, pH đến enzyme catalase và kiểm tra hoạt tính amylase thuỷ phân tinh bột",
    diagramNote: "Sơ đồ bố trí ống nghiệm khảo sát hoạt tính amylase (với thuốc thử Lugol) và catalase (với H₂O₂ giải phóng O₂) ở các mức nhiệt độ/pH khác nhau.",
    content: `### 1. Mục tiêu và nguyên lí thực hành
- **Mục tiêu:** Thiết kế và tiến hành thí nghiệm có lô đối chứng để chứng minh ảnh hưởng của nhiệt độ, độ pH đến hoạt tính của enzyme; kiểm tra sự phân giải tinh bột của enzyme amylase.
- **Nguyên lí 1 – Kiểm tra hoạt tính Amylase (từ nước bọt hoặc mầm lúa):** Enzyme **amylase** xúc tác thuỷ phân **tinh bột** thành đường đôi maltose. Dùng thuốc thử **Iodine (Lugol)** để kiểm tra lượng tinh bột còn lại:
  - Nếu dung dịch chuyển màu **xanh đen / xanh tím đậm**: Tinh bột chưa bị phân giải (enzyme không hoạt động hoặc bị mất hoạt tính).
  - Nếu dung dịch **không còn màu xanh tím** (chỉ giữ màu vàng nhạt của iodine): Tinh bột đã bị amylase thuỷ phân hết (enzyme hoạt động mạnh).
- **Nguyên lí 2 – Khảo sát enzyme Catalase (trong củ khoai tây tươi / gan tươi):** Enzyme **catalase** phân giải cơ chất $\\text{H}_2\\text{O}_2$ (hydrogen peroxide) thành nước và khí $\\text{O}_2$ sủi bọt trắng ($2\\text{H}_2\\text{O}_2 \\xrightarrow{\\text{Catalase}} 2\\text{H}_2\\text{O} + \\text{O}_2\\uparrow$). Lượng bọt khí sủi lên nhiều hay ít phản ánh trực tiếp hoạt tính enzyme mạnh hay yếu.

### 2. Quy trình tiến hành thí nghiệm kiểm tra Amylase
1. **Bước 1 – Chuẩn bị hệ ống nghiệm:** Lấy 4 ống nghiệm sạch, đánh số từ 1 đến 4, cho vào mỗi ống $2\\text{ ml}$ dung dịch hồ tinh bột $1\\%$.
2. **Bước 2 – Thiết lập biến số khảo sát:**
   - **Ống 1 (Đối chứng âm):** Thêm $1\\text{ ml}$ nước cất (không có enzyme) ở nhiệt độ phòng ($37^\circ\text{C}$).
   - **Ống 2 (Nhiệt độ tối ưu):** Thêm $1\\text{ ml}$ dung dịch enzyme amylase, ủ ở ấm $37^\circ\text{C}$.
   - **Ống 3 (Nhiệt độ thấp):** Thêm $1\\text{ ml}$ dung dịch enzyme amylase (đã làm lạnh), ngâm trong cốc nước đá ($0\text{–}5^\circ\text{C}$).
   - **Ống 4 (Nhiệt độ cao hoặc pH acid mạnh):** Thêm $1\\text{ ml}$ dung dịch enzyme amylase đã đun sôi $100^\circ\text{C}$ (hoặc thêm vài giọt $\\text{HCl}$ loãng).
3. **Bước 3 – Kiểm tra kết quả với Iodine:** Sau $10\text{–}15\\text{ phút}$, nhỏ vào mỗi ống $1\text{–}2$ giọt dung dịch Lugol, lắc đều và ghi nhận màu sắc:
   - *Ống 2:* Không xuất hiện màu xanh tím (tinh bột đã bị thuỷ phân hoàn toàn).
   - *Ống 1, 3, 4:* Xuất hiện màu xanh tím (Ống 1 không có enzyme; Ống 3 nhiệt độ thấp làm enzyme giảm hoạt tính tạm thời; Ống 4 nhiệt độ cao làm enzyme **biến tính vĩnh viễn**).

### 3. Kết luận khoa học và quy tắc an toàn
- **Kết luận:** Enzyme hoạt động mạnh nhất ở nhiệt độ và pH tối ưu; nhiệt độ thấp làm giảm tốc độ va chạm phân tử nhưng không làm hỏng cấu trúc enzyme (khi đưa về $37^\circ\text{C}$ hoạt tính phục hồi); nhiệt độ quá cao hoặc acid/kiềm mạnh làm biến tính protein nên mất hoàn toàn hoạt tính xúc tác.
- **An toàn:** Cẩn thận khi thao tác với nước sôi, đèn cồn và dung dịch $\\text{HCl} / \\text{NaOH} / \\text{H}_2\\text{O}_2$; không đậy kín nút ống nghiệm khi đang đun hoặc khi đang xảy ra phản ứng sinh khí mạnh.`
  },

  16: {
    num: 16,
    chapter: 5,
    part: "Phần một. Sinh học tế bào",
    isPractical: false,
    title: "Chu kì tế bào và nguyên phân",
    subtitle: "Các pha của chu kì tế bào (G₁, S, G₂, M), hệ thống điểm kiểm soát, 4 kì của quá trình nguyên phân và cơ chế bệnh ung thư",
    diagramNote: "Sơ đồ vòng chu kì tế bào G₁ – S – G₂ – M kèm 3 điểm kiểm soát, 4 kì nguyên phân (Đầu, Giữa, Sau, Cuối) và phân chia tế bào chất ở động vật/thực vật.",
    content: `### 1. Chu kì tế bào và hệ thống điểm kiểm soát
- **Khái niệm:** **Chu kì tế bào** là khoảng thời gian từ khi một tế bào được sinh ra, lớn lên, nhân đôi vật chất di truyền cho đến khi phân chia thành hai tế bào con. Ở tế bào nhân thực, chu kì tế bào gồm **Kì trung gian (Interphase)** chiếm phần lớn thời gian ($\\sim 90\\%$) và **Pha phân bào (Pha M – Mitotic phase)**:
  1. **Pha $\\text{G}_1$ (Sinh trưởng 1):** Tế bào tổng hợp mạnh mẽ các loại RNA, protein, tăng kích thước tế bào và hình thành thêm các bào quan, chuẩn bị các nguyên liệu để nhân đôi DNA.
  2. **Pha $\\text{S}$ (Nhân đôi – Synthesis):** Diễn ra sự **nhân đôi DNA** dẫn đến sự **nhân đôi nhiễm sắc thể (NST)**; mỗi NST đơn tự nhân đôi thành một NST kép gồm hai nhiễm sắc tử (**chromatid chị em**) giống hệt nhau dính với nhau tại **tâm động (centromere)**. Ở tế bào động vật, trung thể cũng tự nhân đôi ở pha này.
  3. **Pha $\\text{G}_2$ (Sinh trưởng 2):** Tế bào tiếp tục tổng hợp protein (đặc biệt là protein tubulin cấu tạo thoi phân bào), hoàn tất mọi sự chuẩn bị cho phân bào.
  4. **Pha $\\text{M}$ (Nguyên phân):** Gồm phân chia nhân (4 kì) và phân chia tế bào chất để tạo ra 2 tế bào con.
- **Ba điểm kiểm soát chính (Checkpoints):** Đảm bảo tính chính xác nghiêm ngặt của chu kì tế bào:
  - **Điểm kiểm soát $\\text{G}_1$ (Điểm giới hạn R):** Kiểm tra kích thước tế bào, nguồn dinh dưỡng, tín hiệu sinh trưởng và xem DNA có bị hư hỏng không trước khi bước vào pha $\\text{S}$. Nếu không vượt qua, tế bào đi vào trạng thái nghỉ **$\\text{G}_0$** (như tế bào thần kinh trưởng thành).
  - **Điểm kiểm soát $\\text{G}_2/\\text{M}$:** Kiểm tra xem DNA đã nhân đôi hoàn tất và chính xác chưa trước khi bước vào nguyên phân.
  - **Điểm kiểm soát chuyển tiếp Kì giữa – Kì sau (Thoi phân bào):** Kiểm tra xem tất cả các NST kép đã gắn đúng vào vi ống của thoi phân bào tại tâm động và xếp thẳng hàng trên mặt phẳng xích đạo chưa trước khi cho phép tách chromatid.

### 2. Quá trình nguyên phân (Mitosis)

| Giai đoạn của Pha M | Diễn biến chính của Nhiễm sắc thể (NST) và bộ máy phân bào | Hàm lượng NST trong tế bào (Bộ $2n$) |
|---|---|---|
| **1. Kì đầu (Prophase)** | Các NST kép bắt đầu **đóng xoắn và co ngắn** dần; màng nhân và nhân con tiêu biến dần; thoi phân bào bắt đầu hình thành từ hai trung thể tiến về hai cực | $2n$ NST kép ($4n$ chromatid) |
| **2. Kì giữa (Metaphase)** | Các NST kép **đóng xoắn cực đại** (có hình thái đặc trưng rõ nhất, dễ quan sát nhất) và **xếp thành $1$ hàng** trên mặt phẳng xích đạo của thoi phân bào; dây tơ phân bào đính vào hai phía tâm động | $2n$ NST kép |
| **3. Kì sau (Anaphase)** | Hai **chromatid chị em** trong từng NST kép tách nhau hoàn toàn ở tâm động thành 2 NST đơn và được thoi phân bào kéo phân li đồng đều về hai cực của tế bào | $4n$ NST đơn (tạm thời trong 1 tế bào) |
| **4. Kì cuối (Telophase)** | NST đơn tại hai cực **dãn xoắn** dần trở về dạng sợi mảnh; thoi phân bào tiêu biến; màng nhân và nhân con xuất hiện trở lại tạo thành $2$ nhân mới | Mỗi nhân chứa $2n$ NST đơn |

- **Phân chia tế bào chất (Cytokinesis):** Diễn ra đồng thời với kì cuối:
  - *Ở tế bào động vật:* Màng sinh chất **thắt eo** (nhờ vòng vi sợi actin–myosin) từ ngoài vào trong tại mặt phẳng xích đạo chia tế bào thành 2 tế bào con.
  - *Ở tế bào thực vật:* Do có thành cellulose cứng nên các túi tiết từ bộ máy Golgi tập trung ở mặt phẳng xích đạo dung hợp tạo nên **vách ngăn (phiến tế bào)** phát triển từ trong ra ngoài nối với thành tế bào cũ.
- **Kết quả và ý nghĩa:** Từ $1$ tế bào mẹ ($2n$) tạo ra **$2$ tế bào con có bộ NST ($2n$) giống nhau và giống hệt tế bào mẹ**. Nguyên phân giúp cơ thể đa bào lớn lên (tăng số lượng tế bào), thay thế tế bào già/tổn thương, tái sinh bộ phận và là cơ sở của hình thức sinh sản vô tính.

### 3. Rối loạn chu kì tế bào và bệnh ung thư
- Khi các gene kiểm soát chu kì tế bào (gene tiền ung thư và gene ức chế khối u như gene *p53*) bị đột biến do tác nhân vật lí (tia UV, phóng xạ), hoá chất độc hại (khói thuốc lá, độc tố nấm mốc aflatoxin) hoặc virus (HPV, HBV), tế bào mất khả năng kiểm soát tại các điểm kiểm soát và **phân chia liên tục bất thường** tạo thành **khối u**.
- **U lành tính:** Tế bào không xâm lấn sang mô lân cận. **U ác tính (Ung thư):** Tế bào có khả năng tách khỏi khối u ban đầu, đi theo đường máu hoặc bạch huyết đến các cơ quan xa tạo khối u mới (hiện tượng **di căn**).
- **Biện pháp phòng tránh:** Không hút thuốc lá, hạn chế rượu bia và thực phẩm mốc/cháy khét, bảo vệ da trước tia UV, tiêm vaccine phòng virus (HPV, viêm gan B), rèn luyện thể lực và khám sàng lọc tầm soát định kì.`
  },

  17: {
    num: 17,
    chapter: 5,
    part: "Phần một. Sinh học tế bào",
    isPractical: false,
    title: "Giảm phân",
    subtitle: "Diễn biến Giảm phân I và Giảm phân II, cơ chế phát sinh biến dị tổ hợp, ý nghĩa sinh học và bảng so sánh Nguyên phân – Giảm phân",
    diagramNote: "Sơ đồ tế bào sinh dục chín 2n → nhân đôi → Giảm phân I (tiếp hợp, trao đổi chéo, phân li cặp tương đồng) → 2 tế bào n kép → Giảm phân II → 4 giao tử n đơn.",
    content: `### 1. Đặc điểm chung và diễn biến của quá trình giảm phân
- **Vị trí và bản chất:** Giảm phân (Meiosis) là hình thức phân bào xảy ra ở các **tế bào sinh dục thời kì chín** để tạo ra các giao tử (tinh trùng hoặc trứng). Quá trình này chỉ có **$1$ lần nhân đôi DNA** (ở kì trung gian trước Giảm phân I) nhưng trải qua **$2$ lần phân bào liên tiếp** (Giảm phân I và Giảm phân II).
- **Diễn biến Giảm phân I (Phân bào giảm nhiễm – Số lượng NST giảm đi một nửa):**
  1. **Kì đầu I:** Các NST kép đóng xoắn dần; hai NST kép trong **cặp NST tương đồng** tiến lại bắt đôi với nhau theo suốt chiều dọc (**tiếp hợp**). Trong lúc tiếp hợp, giữa hai chromatid **không chị em** trong cặp tương đồng có thể đứt và nối đổi đoạn tương ứng cho nhau gây ra hiện tượng **trao đổi chéo (hoán vị gene)** tạo các tổ hợp gene mới. Màng nhân và nhân con tiêu biến, thoi phân bào hình thành.
  2. **Kì giữa I:** Các cặp NST tương đồng kép đóng xoắn cực đại và tập trung thành **$2$ hàng** song song trên mặt phẳng xích đạo của thoi phân bào (mỗi NST kép trong cặp chỉ đính với dây tơ phân bào từ một cực).
  3. **Kì sau I:** Hai NST kép trong mỗi cặp NST tương đồng **phân li độc lập** và tổ hợp tự do về hai cực của tế bào (lưu ý: các chromatid chị em vẫn gắn chặt với nhau ở tâm động, chưa tách nhau).
  4. **Kì cuối I và phân chia tế bào chất:** Tạo ra **$2$ tế bào con**, mỗi tế bào có bộ NST đơn bội ở trạng thái kép (**$n$ NST kép**).
- **Diễn biến Giảm phân II (Phân bào nguyên nhiễm – Tương tự nguyên phân):**
  - Giữa Giảm phân I và Giảm phân II hầu như không có kì trung gian hoặc rất ngắn và **không xảy ra nhân đôi DNA**.
  - **Kì đầu II:** NST kép ($n$) co xoắn lại, thoi phân bào hình thành.
  - **Kì giữa II:** Các NST kép ($n$) xếp thành **$1$ hàng** trên mặt phẳng xích đạo của thoi phân bào.
  - **Kì sau II:** Hai **chromatid chị em** của mỗi NST kép tách nhau ở tâm động thành 2 NST đơn và đi về hai cực của tế bào.
  - **Kì cuối II:** Màng nhân xuất hiện, tế bào chất phân chia tạo ra kết quả cuối cùng từ $1$ tế bào mẹ ($2n$) thành **$4$ tế bào con có bộ NST đơn bội ($n$ NST đơn)**.

### 2. Kết quả, ý nghĩa của giảm phân và các yếu tố ảnh hưởng
- **Sự hình thành giao tử ở động vật:** Từ $1$ tế bào sinh tinh ($2n$) qua giảm phân tạo ra **$4$ tinh trùng ($n$)** đều có khả năng thụ tinh; từ $1$ tế bào sinh trứng ($2n$) qua giảm phân tạo ra **$1$ tế bào trứng lớn ($n$)** và $3$ thể cực nhỏ ($n$) bị tiêu biến.
- **Ý nghĩa sinh học:**
  - Sự kết hợp của 3 quá trình **Nguyên phân – Giảm phân – Thụ tinh** giúp duy trì ổn định bộ NST lưỡng bội ($2n$) đặc trưng của các loài sinh sản hữu tính qua các thế hệ ($n \\times n \\rightarrow 2n$).
  - Sự **trao đổi chéo** ở kì đầu I kết hợp với sự **phân li độc lập và tổ hợp tự do** của các NST ở kì sau I cùng sự kết hợp ngẫu nhiên của các giao tử trong thụ tinh đã tạo ra nguồn **biến dị tổ hợp** vô cùng phong phú, là nguyên liệu quan trọng cho chọn giống và tiến hoá.
- **Các yếu tố ảnh hưởng:** Hormone sinh dục, tuổi tác của bố mẹ, nhiệt độ môi trường, chế độ dinh dưỡng và hoá chất/phóng xạ; rối loạn không phân li NST trong giảm phân tạo giao tử lệch bội (như hội chứng Down có $3$ NST số $21$).

### 3. Bảng so sánh chi tiết Nguyên phân và Giảm phân

| Tiêu chí so sánh | Nguyên phân (Mitosis) | Giảm phân (Meiosis) |
|---|---|---|
| **Loại tế bào xảy ra** | Tế bào sinh dưỡng (soma) và tế bào sinh dục sơ khai | Tế bào sinh dục ở thời kì chín |
| **Số lần nhân đôi DNA & phân bào** | $1$ lần nhân đôi DNA – **$1$ lần phân bào** | $1$ lần nhân đôi DNA – **$2$ lần phân bào liên tiếp** |
| **Tiếp hợp và trao đổi chéo** | **Không** xảy ra | **Có** xảy ra giữa 2 chromatid không chị em ở Kì đầu I |
| **Cách xếp NST ở kì giữa** | NST kép xếp thành **$1$ hàng** trên mặt phẳng xích đạo | Kì giữa I: Xếp thành **$2$ hàng**; Kì giữa II: Xếp thành **$1$ hàng** |
| **Số tế bào con tạo thành** | **$2$ tế bào con** từ $1$ tế bào mẹ | **$4$ tế bào con** từ $1$ tế bào mẹ |
| **Bộ NST của tế bào con** | Giữ nguyên bộ NST lưỡng bội (**$2n$**), giống hệt nhau và giống mẹ | Giảm đi một nửa thành đơn bội (**$n$**), đa dạng về mặt di truyền |
| **Vai trò sinh học** | Giúp cơ thể sinh trưởng, tái sinh mô và duy trì bộ NST trong sinh sản vô tính | Tạo giao tử đơn bội ($n$) cho thụ tinh và tạo biến dị tổ hợp trong sinh sản hữu tính |`
  },

  18: {
    num: 18,
    chapter: 5,
    part: "Phần một. Sinh học tế bào",
    isPractical: true,
    title: "Thực hành: Làm và quan sát tiêu bản nguyên phân, giảm phân",
    subtitle: "Quy trình cố định, nhuộm acetocarmine, dầm ép rễ hành để quan sát các kì nguyên phân và nhận diện tiêu bản giảm phân",
    diagramNote: "Quy trình làm tiêu bản dầm ép chóp rễ hành (cố định Carnoy → nhuộm acetocarmine 2% đun nóng nhẹ → dầm ép) và hình ảnh các kì phân bào dưới kính hiển vi.",
    content: `### 1. Mục tiêu và chuẩn bị dụng cụ, hoá chất, mẫu vật
- **Mục tiêu:** Thực hành làm tiêu bản nhiễm sắc thể tạm thời từ mô phân sinh đỉnh rễ hành; sử dụng kính hiển vi quang học để tìm, nhận diện và vẽ các tế bào đang ở kì trung gian, kì đầu, kì giữa, kì sau và kì cuối của nguyên phân và giảm phân.
- **Dụng cụ và hoá chất:** Kính hiển vi quang học ($10\\times, 40\\times$), lam kính, lamen, dao lam, kim mũi mác, nhíp, kéo, ống nhỏ giọt, đèn cồn, kẹp gỗ, giấy thấm; dung dịch định hình **Carnoy** (ethanol : acetic acid tỉ lệ $3:1$), thuốc nhuộm **Acetocarmine $2\\%$** (hoặc Orcein acetic), dung dịch $\\text{HCl } 1\\text{N}$, nước cất.
- **Mẫu vật:** Rễ củ hành ta/hành tây mới nhú dài khoảng $1\text{–}2\\text{ cm}$ (đã cắt phần đầu rễ dài $5\\text{ mm}$ ngâm cố định trong dung dịch Carnoy ít nhất $24\\text{ giờ}$ rồi bảo quản trong cồn $70^\circ$); bộ tiêu bản cố định giảm phân ở bao phấn hoa hẹ/hoa loa kèn hoặc tinh hoàn châu chấu.

### 2. Quy trình làm tiêu bản nguyên phân ở đỉnh rễ hành (Kĩ thuật dầm ép)
1. **Bước 1 – Rửa và nhuộm mẫu:** Dùng nhíp gắp $2\text{–}3$ đầu rễ hành từ lọ cố định cho vào đĩa đồng hồ chứa cồn $70^\circ$ và nước cất để rửa sạch dung dịch định hình; sau đó chuyển rễ sang đĩa chứa thuốc nhuộm **Acetocarmine $2\\%$**.
2. **Bước 2 – Đun nóng nhẹ (Thuỷ phân làm mềm thành tế bào):** Đặt đĩa hoặc ống chứa rễ trong thuốc nhuộm hơ nóng nhẹ trên ngọn lửa đèn cồn trong $5\text{–}8\\text{ phút}$ (chỉ giữ ấm bốc hơi nhẹ, **tuyệt đối không đun sôi**). Thuốc nhuộm có tính acid kết hợp nhiệt độ giúp làm mềm lamella giữa các tế bào và giúp NST bắt màu đỏ tím đậm.
3. **Bước 3 – Tách vùng mô phân sinh và dầm ép:** Đặt đầu rễ lên lam kính sạch có nhỏ $1$ giọt acetic acid $45\\%$ (hoặc nước cất), dùng dao lam chỉ giữ lại phần **đỉnh chóp rễ dài khoảng $1{,}5\text{–}2\\text{ mm}$** (nơi tập trung mô phân sinh đỉnh đang phân chia mạnh), bỏ phần rễ già phía trên. Đậy lamen lên mẫu, đặt 1 lớp giấy thấm lên trên lamen rồi dùng đầu cán kim mũi mác (hoặc ngón cái) ấn thẳng góc nhẹ nhàng (**không đẩy trượt ngang lamen**) để các tế bào dàn thành một lớp mỏng.
4. **Bước 4 – Quan sát hiển vi:** Quan sát ở vật kính $10\\times$ để tìm vùng có các tế bào hình vuông nhỏ, nhân to bắt màu đỏ đậm; chuyển sang vật kính $40\\times$ để nhận diện từng kì dựa vào hình thái và sự sắp xếp của các NST.

### 3. Nhận diện tiêu bản giảm phân và quy tắc an toàn
- **Quan sát tiêu bản giảm phân:** Đặt tiêu bản cố định lên bàn kính, tìm vùng tế bào ở $10\\times$ rồi chuyển sang $40\\times$; nhận diện các giai đoạn đặc trưng: cặp NST tương đồng tiếp hợp (Kì đầu I), xếp thành 2 hàng (Kì giữa I), phân li về 2 cực (Kì sau I), hoặc 4 tế bào con đơn bội đứng cạnh nhau (Kì cuối II).
- **An toàn phòng thí nghiệm:** Cẩn thận khi hơ nóng trên đèn cồn tránh bỏng và tránh hít hơi acid acetic; không ấn quá mạnh làm vỡ lamen đứt tay; thu gom hoá chất nhuộm và thuỷ tinh vỡ đúng nơi quy định.`
  },

  19: {
    num: 19,
    chapter: 5,
    part: "Phần một. Sinh học tế bào",
    isPractical: false,
    title: "Công nghệ tế bào",
    subtitle: "Nguyên lí tính toàn năng, công nghệ tế bào thực vật (nuôi cấy mô, lai tế bào, nuôi cấy hạt phấn) và công nghệ tế bào động vật (nhân bản vô tính, tế bào gốc)",
    diagramNote: "Quy trình nuôi cấy mô tế bào thực vật tái sinh cây hoàn chỉnh và sơ đồ nhân bản vô tính cừu Dolly bằng kĩ thuật chuyển nhân tế bào sinh dưỡng.",
    content: `### 1. Khái niệm và nguyên lí cơ sở của Công nghệ tế bào
- **Khái niệm:** **Công nghệ tế bào** là ngành kĩ thuật về quy trình ứng dụng phương pháp nuôi cấy tế bào hoặc mô trên môi trường dinh dưỡng nhân tạo trong điều kiện vô trùng để tạo ra cơ quan hoặc cơ thể hoàn chỉnh với những đặc tính mong muốn.
- **Nguyên lí cơ sở:**
  - **Tính toàn năng của tế bào (Totipotency):** Là khả năng một tế bào riêng lẻ (đã biệt hoá hoặc chưa biệt hoá) chứa đầy đủ hệ gene của loài, khi được nuôi cấy trong môi trường thích hợp có thể phân chia (nguyên phân) và **phản biệt hoá → tái biệt hoá** để phát triển thành một cơ thể hoàn chỉnh. Tính toàn năng thể hiện rất rõ ở tế bào thực vật.
  - **Quá trình biệt hoá và phản biệt hoá:** Nhờ điều chỉnh tỉ lệ các hormone sinh trưởng trong môi trường nuôi cấy (như tỉ lệ **Auxin / Cytokinin** ở thực vật), các tế bào mô sẹo chưa biệt hoá sẽ biệt hoá thành rễ và chồi để tái sinh cây con.

### 2. Công nghệ tế bào thực vật và các thành tựu ứng dụng
- **1. Nuôi cấy mô và tế bào thực vật (Vi nhân giống – Micropropagation):**
  - *Quy trình:* Chọn mẫu mô tốt (thường lấy **mô phân sinh đỉnh chồi** vì sạch virus) $\\rightarrow$ Khử trùng bề mặt $\\rightarrow$ Nuôi trên môi trường dinh dưỡng (như môi trường MS có đường, khoáng, vitamin, agar) tạo **mô sẹo (callus)** $\\rightarrow$ Bổ sung hormone kích thích tạo chồi và rễ $\\rightarrow$ Đưa cây con ra vườn ươm thích nghi rồi trồng ngoài đồng ruộng.
  - *Ưu điểm:* Nhân nhanh số lượng cực lớn cây giống trong thời gian ngắn, không phụ thuộc mùa vụ; cây con đồng nhất về mặt di truyền (giữ nguyên đặc tính tốt của cây mẹ) và sạch bệnh; bảo tồn các giống cây quý hiếm (như sâm Ngọc Linh, phong lan, chuối, khoai tây).
  - *Hạn chế:* Do độ đồng nhất di truyền cao nên nếu trồng một dòng duy nhất trên diện rộng sẽ có nguy cơ mất trắng khi gặp dịch bệnh hoặc biến đổi môi trường bất lợi.
- **2. Lai tế bào sinh dưỡng (Dung hợp tế bào trần – Protoplast fusion):** Dùng enzyme hoặc cơ học loại bỏ thành cellulose của hai tế bào sinh dưỡng thuộc **hai loài thực vật khác nhau** để tạo ra hai **tế bào trần**, sau đó cho dung hợp trong trường điện từ/hoá chất thành **tế bào lai** chứa hệ gene của cả hai loài rồi nuôi cấy tái sinh thành cây lai khác loài hữu thụ (ví dụ: cây Pomato lai giữa khoai tây và cà chua).
- **3. Nuôi cấy hạt phấn hoặc noãn chưa thụ tinh:** Nuôi cấy hạt phấn đơn bội ($n$) tạo mô đơn bội, sau đó xử lí bằng hoá chất **colchicine** để gây **lưỡng bội hoá ($n \\rightarrow 2n$)** tạo ra cây **thuần chủng tuyệt đối (đồng hợp tử về tất cả các cặp gene)** chỉ trong một thế hệ, rút ngắn đáng kể thời gian chọn giống.

### 3. Công nghệ tế bào động vật và đạo đức sinh học
- **1. Nhân bản vô tính động vật bằng kĩ thuật chuyển nhân (Ví dụ: Cừu Dolly):**
  - *Quy trình:* Lấy **nhân ($2n$) của tế bào tuyến vú** từ cừu mặt trắng chuyển vào **tế bào trứng đã loại bỏ nhân** của cừu mặt đen; xung điện kích thích tế bào chuyển nhân phân chia tạo phôi sớm rồi cấy vào tử cung của cừu mẹ mang thai hộ (mặt đen) để sinh ra cừu Dolly (mặt trắng).
  - *Lưu ý di truyền:* Cừu nhân bản có đặc điểm hình thái gần giống hệt cá thể cho nhân (vì mang hệ gene trong nhân của cá thể đó), nhưng **không giống hoàn toàn $100\\%$** do mang **DNA ti thể** nằm trong tế bào chất của tế bào trứng nhận nhân cùng ảnh hưởng của môi trường mang thai và yếu tố biểu sinh.
  - *Ý nghĩa:* Nhân nhanh giống vật nuôi quý, bảo tồn động vật hoang dã có nguy cơ tuyệt chủng và tạo động vật chuyển gene sản xuất thuốc chữa bệnh.
- **2. Cấy truyền phôi (Chia cắt phôi động vật):** Tách một phôi động vật ở giai đoạn sớm thành nhiều phần rồi cấy vào các con cái mang thai hộ để tạo ra nhiều con non đồng sinh cùng trứng có kiểu gene giống hệt nhau.
- **3. Công nghệ tế bào gốc và liệu pháp tế bào / gene:** **Tế bào gốc (Stem cells)** là những tế bào có khả năng tự làm mới và biệt hoá thành nhiều loại tế bào chuyên hoá khác nhau (tế bào gốc phôi có tiềm năng biệt hoá rộng nhất; tế bào gốc trưởng thành từ máu cuống rốn/tuỷ xương và tế bào gốc đa năng cảm ứng iPS). Ứng dụng trong y học tái tạo (nuôi cấy da nhân tạo trị bỏng, ghép tuỷ xương, thử nghiệm thuốc). Cần tuân thủ nghiêm ngặt quy định đạo đức sinh học (nghiêm cấm nhân bản vô tính người).`
  },

  20: {
    num: 20,
    chapter: 6,
    part: "Phần hai. Sinh học vi sinh vật và virus",
    isPractical: false,
    title: "Sự đa dạng và phương pháp nghiên cứu vi sinh vật",
    subtitle: "Khái niệm, đặc điểm chung của vi sinh vật, các nhóm vi sinh vật chính và các phương pháp nghiên cứu (quan sát, nuôi cấy, phân lập, định danh)",
    diagramNote: "Sơ đồ quy trình nghiên cứu vi sinh vật: lấy mẫu → pha loãng/cấy ria trên đĩa thạch → ủ ấm → quan sát khuẩn lạc đơn → phân lập và định danh.",
    content: `### 1. Khái niệm, đặc điểm chung và các nhóm vi sinh vật
- **Khái niệm:** **Vi sinh vật (Microorganisms)** không phải là một đơn vị phân loại riêng mà là thuật ngữ dùng để chỉ tập hợp các sinh vật có **kích thước hiển vi** (rất nhỏ bé, thường chỉ quan sát rõ dưới kính hiển vi), phần lớn có cấu tạo cơ thể đơn bào hoặc tập đoàn đơn bào.
- **Bốn đặc điểm sinh học nổi bật của vi sinh vật:**
  1. Kích thước cơ thể cực nhỏ (tỉ lệ $S/V$ rất lớn).
  2. Hấp thu nhiều và chuyển hoá vật chất rất nhanh.
  3. Sinh trưởng và sinh sản với tốc độ cực nhanh.
  4. Khả năng thích nghi cao và phân bố vô cùng rộng rãi ở mọi môi trường trên Trái Đất (kể cả môi trường khắc nghiệt như suối nước nóng, hồ muối mặn, đáy biển sâu).
- **Các nhóm vi sinh vật dựa theo cấu tạo tế bào:**
  - **Nhóm nhân sơ (Prokaryotes):** Gồm **Vi khuẩn (Bacteria)** và **Cổ khuẩn (Archaea)**.
  - **Nhóm nhân thực (Eukaryotes):** Gồm **Vi nấm** (nấm men đơn bào, nấm mốc dạng sợi), **Vi tảo** (tảo lục đơn bào, tảo silic) và **Động vật nguyên sinh** (trùng giày, trùng biến hình). *(Lưu ý: Virus không có cấu tạo tế bào nhưng thường được nghiên cứu gắn liền với vi sinh vật học).*

### 2. Các phương pháp nghiên cứu vi sinh vật
1. **Phương pháp quan sát bằng kính hiển vi:** Dùng để nghiên cứu hình thái, kích thước và cấu trúc tế bào vi sinh vật thông qua làm tiêu bản sống (giọt ép, giọt treo) hoặc tiêu bản cố định có nhuộm màu (**nhuộm đơn** bằng xanh methylene/fuchsin hoặc **nhuộm phân biệt** như nhuộm Gram để phân biệt vi khuẩn $\\text{Gr}^+$ và $\\text{Gr}^-$, nhuộm bào tử).
2. **Phương pháp nuôi cấy:** Đưa vi sinh vật vào **môi trường dinh dưỡng đã khử trùng tuyệt đối** và ủ ở điều kiện nhiệt độ, độ pH, độ thông khí thích hợp:
   - *Theo trạng thái vật lí:* **Môi trường lỏng** (dịch nuôi cấy để nhân sinh khối) và **môi trường đặc** (có bổ sung khoảng $1{,}5\text{–}2\\%$ thạch **agar** đổ trên đĩa Petri hoặc ống nghiệm thạch nghiêng; từ $1$ tế bào vi sinh vật ban đầu phân chia trên mặt thạch đặc sẽ tạo thành một đám tế bào nhìn thấy được bằng mắt thường gọi là **khuẩn lạc – colony** có hình dạng, màu sắc đặc trưng cho từng loài).
   - *Theo thành phần:* Môi trường tự nhiên, môi trường tổng hợp (biết rõ thành phần hoá học) và môi trường bán tổng hợp.
3. **Phương pháp phân lập (Isolation):** Là khâu quan trọng nhằm tách riêng từng loài vi sinh vật (từ một khuẩn lạc đơn) ra khỏi quần xã hỗn hợp ban đầu trong tự nhiên bằng kĩ thuật **cấy ria (streaking)** hoặc pha loãng trải đĩa để thu được **giống thuần khiết**.
4. **Phương pháp định danh (Identification):** Kết hợp đặc điểm hình thái khuẩn lạc/tế bào, các thử nghiệm sinh lí – hoá sinh (khả năng lên men các loại đường, sinh enzyme catalase...) và phương pháp hiện đại là **giải trình tự gene (như gene 16S rRNA)** để xác định chính xác tên khoa học và quan hệ tiến hoá.

### 3. Nguyên tắc vô trùng trong nghiên cứu vi sinh vật
- Mọi dụng cụ, môi trường nuôi cấy phải được tiệt trùng bằng nồi hấp áp suất cao (autoclave ở $121^\circ\text{C}$); thao tác cấy truyền thực hiện trong tủ cấy vô trùng hoặc gần ngọn lửa đèn cồn để tránh nhiễm tạp vi sinh vật từ không khí và bảo vệ an toàn cho người làm thí nghiệm.`
  },

  21: {
    num: 21,
    chapter: 6,
    part: "Phần hai. Sinh học vi sinh vật và virus",
    isPractical: false,
    title: "Trao đổi chất, sinh trưởng và sinh sản ở vi sinh vật",
    subtitle: "Bốn kiểu dinh dưỡng của vi sinh vật, nuôi cấy không liên tục (đường cong 4 pha) – nuôi cấy liên tục và các hình thức sinh sản ở vi sinh vật",
    diagramNote: "Đường cong sinh trưởng 4 pha của quần thể vi khuẩn trong nuôi cấy không liên tục, bình nuôi cấy liên tục và các hình thức sinh sản (phân đôi, nảy chồi, bào tử).",
    content: `### 1. Các kiểu dinh dưỡng và trao đổi chất ở vi sinh vật
- Dựa vào **nguồn năng lượng** (Ánh sáng $\\rightarrow$ *Quang dưỡng*; Phản ứng hoá học $\\rightarrow$ *Hoá dưỡng*) và **nguồn carbon chủ yếu** (Khí $\\text{CO}_2$ $\\rightarrow$ *Tự dưỡng*; Chất hữu cơ $\\rightarrow$ *Dị dưỡng*), thế giới vi sinh vật được chia thành **4 kiểu dinh dưỡng**:

| Kiểu dinh dưỡng | Nguồn năng lượng | Nguồn carbon chủ yếu | Đại diện tiêu biểu |
|---|---|---|---|
| **1. Quang tự dưỡng** | Ánh sáng mặt trời | Khí $\\text{CO}_2$ | Vi khuẩn lam, vi tảo, vi khuẩn lưu huỳnh màu tía/màu lục |
| **2. Quang dị dưỡng** | Ánh sáng mặt trời | Chất hữu cơ | Vi khuẩn không chứa lưu huỳnh màu tía và màu lục |
| **3. Hoá tự dưỡng** | Phản ứng oxy hoá chất vô cơ ($\text{NH}_4^+, \\text{NO}_2^-, \\text{H}_2\\text{S}, \\text{Fe}^{2+}$) | Khí $\\text{CO}_2$ | Vi khuẩn nitrat hoá, vi khuẩn oxy hoá lưu huỳnh, vi khuẩn oxy hoá sắt |
| **4. Hoá dị dưỡng** | Phản ứng phân giải chất hữu cơ | Chất hữu cơ | Nấm (nấm men, nấm mốc), động vật nguyên sinh và đa số vi khuẩn hoại sinh/kí sinh |

- **Cơ chế phân giải ngoại bào:** Đối với các đại phân tử lớn không qua được màng (tinh bột, cellulose, protein, lipid), vi sinh vật tiết các **enzyme ngoại bào** (amylase, cellulase, protease, lipase) ra môi trường để thuỷ phân thành các chất đơn giản (đường đơn, amino acid) rồi mới hấp thụ vào tế bào để tổng hợp chất sống hoặc hô hấp/lên men sinh năng lượng.

### 2. Sinh trưởng của quần thể vi sinh vật
- **Khái niệm:** Do kích thước tế bào rất nhỏ nên sự **sinh trưởng của vi sinh vật** được hiểu là sự **tăng số lượng tế bào của quần thể**.
- **Thời gian thế hệ ($g$):** Là thời gian tính từ khi một tế bào sinh ra cho đến khi tế bào đó phân chia (cũng là thời gian để số tế bào trong quần thể tăng gấp đôi). Sau thời gian $t$, số lần phân chia là $n = \\frac{t}{g}$, và số lượng tế bào thu được từ $N_0$ tế bào ban đầu là:
  $$N_t = N_0 \\cdot 2^n = N_0 \\cdot 2^{t/g}$$
- **1. Nuôi cấy không liên tục (Batch culture):** Môi trường nuôi cấy **không được bổ sung chất dinh dưỡng mới** và **không được lấy đi các sản phẩm chuyển hoá/chất thải**. Quần thể vi khuẩn sinh trưởng theo đường cong gồm **4 pha**:
  - **Pha tiềm phát (Pha Lag):** Vi khuẩn thích nghi với môi trường mới, tổng hợp mạnh mẽ các enzyme và DNA; số lượng tế bào chưa tăng ($N = N_0$).
  - **Pha luỹ thừa (Pha Log):** Vi khuẩn trao đổi chất và phân chia cực đại với tốc độ không đổi theo cấp số nhân; số lượng tế bào tăng rất nhanh.
  - **Pha cân bằng (Stationary phase):** Dinh dưỡng bắt đầu cạn dần, chất độc hại tích luỹ; số tế bào sinh thêm **bằng** số tế bào chết đi nên tổng số tế bào sống đạt cực đại và không đổi theo thời gian.
  - **Pha suy vong (Death phase):** Dinh dưỡng cạn kiệt, chất độc tích luỹ cao; số tế bào chết vượt xa số tế bào mới sinh ra nên số lượng tế bào sống giảm dần.
- **2. Nuôi cấy liên tục (Continuous culture):** Người ta **liên tục bổ sung dịch dinh dưỡng mới** vào bình nuôi cấy đồng thời **lấy ra một lượng tương đương dịch nuôi cấy** (gồm sinh khối và sản phẩm chuyển hoá). Giúp duy trì quần thể vi sinh vật ở trạng thái **pha luỹ thừa kéo dài**, không xảy ra pha suy vong; ứng dụng sản xuất công nghiệp sinh khối (protein đơn bào), enzyme, kháng sinh, ethanol.
- **Các yếu tố ảnh hưởng đến sinh trưởng:** Các yếu tố **hoá học** (chất dinh dưỡng, các chất ức chế sinh trưởng như cồn $70^\circ$, hợp chất phenol, iodine, clo, thuốc kháng sinh) và các yếu tố **vật lí** (nhiệt độ, độ pH, độ ẩm/áp suất thẩm thấu, ánh sáng và tia bức xạ UV/tia X).

### 3. Các hình thức sinh sản ở vi sinh vật
- **Sinh sản ở vi sinh vật nhân sơ:** Chủ yếu bằng **phân đôi (trực phân)** vô tính; ngoài ra có hình thức nảy chồi hoặc tạo bào tử ngoại sinh ở xạ khuẩn. *(Lưu ý quan trọng: **Nội bào tử – Endospore** ở một số vi khuẩn có lớp vỏ dày chứa calcium dipicolinate giúp vi khuẩn chịu nhiệt và hạn khắc nghiệt, chỉ là **dạng nghỉ bảo vệ** chứ **không phải** là hình thức sinh sản vì 1 tế bào chỉ tạo 1 nội bào tử)*.
- **Sinh sản ở vi sinh vật nhân thực:** Phân đôi (trùng giày, tảo đơn bào), **nảy chồi** (nấm men rượu *Saccharomyces*), hoặc sinh sản bằng **bào tử vô tính và bào tử hữu tính** (nấm mốc *Mucor*, *Penicillium*, nấm men).`
  },

  22: {
    num: 22,
    chapter: 6,
    part: "Phần hai. Sinh học vi sinh vật và virus",
    isPractical: false,
    title: "Vai trò và ứng dụng của vi sinh vật",
    subtitle: "Vai trò sinh thái trong tự nhiên, ứng dụng công nghệ vi sinh trong thực phẩm, y dược, nông nghiệp, môi trường và cảnh báo kháng kháng sinh",
    diagramNote: "Sơ đồ chu trình tuần hoàn vật chất nhờ vi sinh vật phân giải và 4 trụ cột ứng dụng công nghệ vi sinh vật (Thực phẩm – Y dược – Nông nghiệp – Môi trường).",
    content: `### 1. Vai trò của vi sinh vật đối với tự nhiên và con người
- **Mắt xích không thể thiếu trong tuần hoàn vật chất tự nhiên:** Vi sinh vật dị dưỡng hoại sinh đóng vai trò là **sinh vật phân giải**, tiết enzyme ngoại bào phân huỷ xác sinh vật và chất thải hữu cơ thành các chất vô cơ khoáng ($\text{CO}_2, \\text{NH}_4^+, \\text{NO}_3^-, \\text{PO}_4^{3-}, \\text{SO}_4^{2-}$) trả lại cho đất và nước để thực vật tiếp tục hấp thụ, khép kín các chu trình sinh địa hoá.
- **Cung cấp oxygen và cố định đạm tự nhiên:** Vi tảo và vi khuẩn lam thực hiện quang hợp tạo ra phần lớn lượng $\\text{O}_2$ và chất hữu cơ khởi đầu chuỗi thức ăn ở thuỷ vực; vi khuẩn cố định đạm (như *Rhizobium* cộng sinh trong nốt sần rễ cây họ Đậu) có hệ enzyme nitrogenase chuyển hoá khí $\\text{N}_2$ trong không khí thành $\\text{NH}_3$ nuôi cây.
- **Hệ vi sinh vật cộng sinh trên cơ thể người:** Hàng nghìn tỉ vi khuẩn có lợi cư trú trên da và trong đường ruột giúp ức chế vi khuẩn gây bệnh, hỗ trợ tiêu hoá và tổng hợp vitamin $\\text{K}, \\text{B}_{12}$.

### 2. Thành tựu ứng dụng vi sinh vật trong thực tiễn
- **1. Trong công nghệ thực phẩm:**
  - Sử dụng vi khuẩn lactic (*Lactobacillus*) lên men tạo sữa chua, phô mai, muối chua rau củ quả.
  - Sử dụng nấm men (*Saccharomyces cerevisiae*) sản xuất rượu vang, bia, cồn và làm nở bột bánh mì.
  - Sử dụng nấm mốc (*Aspergillus oryzae*) và vi khuẩn tiết protease thuỷ phân protein đậu tương/cá để sản xuất nước tương (xì dầu), nước mắm, chao.
- **2. Trong y học và dược phẩm:**
  - Nuôi cấy xạ khuẩn và nấm mốc (như *Penicillium*) để sản xuất **thuốc kháng sinh** (penicillin, streptomycin, tetracycline).
  - Sử dụng vi khuẩn *E. coli* hoặc nấm men tái tổ hợp mang gene người để sản xuất quy mô công nghiệp hormone **insulin** (trị tiểu đường), interferon, vaccine, các loại enzyme và chế phẩm men vi sinh (probiotics).
- **3. Trong nông nghiệp bền vững:**
  - Sản xuất **phân bón vi sinh** (phân vi sinh cố định đạm, phân vi sinh phân giải lân khó tan, phân giải cellulose từ phụ phẩm rơm rạ thành mùn hữu cơ).
  - Sản xuất **thuốc trừ sâu sinh học** (như chế phẩm từ vi khuẩn *Bacillus thuringiensis* – Bt tạo tinh thể protein diệt sâu hại đặc hiệu hoặc nấm *Beauveria* kí sinh côn trùng) an toàn cho môi trường và thiên địch.
  - Ủ chua thức ăn chăn nuôi giúp bảo quản lâu và tăng khả năng tiêu hoá cho gia súc.
- **4. Trong công nghiệp và bảo vệ môi trường:**
  - Xử lí nước thải sinh hoạt và công nghiệp (bùn hoạt tính hiếu khí và bể kị khí thu hồi khí sinh học **biogas – $\\text{CH}_4$** làm nhiên liệu sạch).
  - Tuyển chọn các chủng vi sinh vật phân huỷ vết dầu tràn trên biển, phân huỷ thuốc bảo vệ thực vật tồn dư và thu hồi kim loại quý bằng phương pháp hoà tách vi sinh.

### 3. Tác hại của một số vi sinh vật và biện pháp phòng chống
- Một số vi sinh vật kí sinh gây bệnh truyền nhiễm nguy hiểm ở người (lao, tả, thương hàn, uốn ván), vật nuôi và cây trồng (bệnh bạc lá lúa, héo xanh); hoặc làm ôi thiu thực phẩm và tiết độc tố nguy hiểm (như độc tố botulinum trong đồ hộp hỏng, aflatoxin của nấm mốc *Aspergillus flavus* trên lạc/ngô mốc gây ung thư gan).
- **Biện pháp phòng ngừa:** Vệ sinh cá nhân và an toàn thực phẩm (ăn chín uống sôi, bảo quản lạnh/sấy khô/hút chân không), tiêm chủng vaccine đầy đủ, kiểm dịch và sử dụng thuốc kháng sinh **đúng chỉ định của bác sĩ** (không tự ý mua hoặc ngưng kháng sinh sớm để ngăn chặn thảm hoạ kháng thuốc).`
  },

  23: {
    num: 23,
    chapter: 6,
    part: "Phần hai. Sinh học vi sinh vật và virus",
    isPractical: true,
    title: "Thực hành nghiên cứu vi sinh vật và sản phẩm lên men",
    subtitle: "Quan sát hình thái vi khuẩn, nấm men, nấm mốc và quy trình thực hành làm sữa chua, dưa cải muối chua theo cơ chế lên men lactic",
    diagramNote: "Quy trình lên men sữa chua / dưa muối chua từ nguyên liệu → xử lí nhiệt → cấy giống khởi động (starter) → ủ ấm 40–45°C → làm lạnh bảo quản.",
    content: `### 1. Quan sát một số vi sinh vật trong thực phẩm lên men
- **Quan sát nấm men rượu (*Saccharomyces*):** Lấy một giọt dịch bánh men rượu pha loãng (hoặc nước dưa muối có váng trắng) đặt lên lam kính, đậy lamen và quan sát ở vật kính $40\\times$: thấy các tế bào nấm men hình bầu dục hoặc tròn, nhiều tế bào đang có chồi nhỏ mọc ra bên cạnh (**sinh sản nảy chồi**).
- **Quan sát vi khuẩn lactic và nấm mốc:** Nhuộm đơn vết bôi dịch sữa chua hoặc nước dưa chua bằng xanh methylene để quan sát các tế bào vi khuẩn hình cầu (*Streptococcus*) hoặc hình que (*Lactobacillus*); quan sát tiêu bản nấm mốc trên vỏ cam/bánh mì thấy hệ sợi nấm phân nhánh và các cuống mang túi bào tử/chuỗi bào tử.

### 2. Quy trình thực hành làm sản phẩm lên men (Sữa chua & Dưa muối chua)
- **A. Quy trình làm sữa chua (Lên men lactic đồng hình):**
  1. **Nguyên liệu:** Sữa đặc có đường (hoặc sữa tươi), nước ấm đã đun sôi, $1$ hộp sữa chua cái không đường làm **giống khởi động (starter)** chứa vi khuẩn lactic hoạt tính cao.
  2. **Pha chế và điều chỉnh nhiệt độ:** Pha sữa với nước theo tỉ lệ hướng dẫn và để nguội về khoảng **$40\text{–}45^\circ\text{C}$** (nếu nhiệt độ quá nóng $> 60^\circ\text{C}$ sẽ làm chết vi khuẩn lactic trong men cái).
  3. **Cấy giống và ủ ấm:** Cho sữa chua cái vào khuấy nhẹ nhàng đều tay (tránh tạo nhiều bọt khí vì lên men lactic là quá trình kị khí), rót vào các hũ sạch đậy nắp kín và ủ ấm ở **$40\text{–}45^\circ\text{C}$ trong $6\text{–}8\\text{ giờ}$**.
  4. **Giải thích cơ chế và bảo quản:** Vi khuẩn lactic chuyển hoá đường lactose trong sữa thành **lactic acid** làm giảm độ pH của sữa xuống khoảng $4{,}5$; ở pH acid này, protein **casein** trong sữa bị biến tính kết tủa tạo khối đông tụ mịn màng, vị chua dịu và mùi thơm đặc trưng. Khi sữa chua đã đông đạt yêu cầu, phải đưa ngay vào **ngăn mát tủ lạnh ($4\text{–}6^\circ\text{C}$)** để ức chế vi khuẩn tiếp tục lên men làm sữa quá chua và tách nước.
- **B. Quy trình muối chua rau quả (Dưa cải, cà muối):**
  - Rửa sạch rau cải, phơi héo nhẹ; xếp vào bình sạch và đổ ngập dung dịch nước muối $\\text{NaCl } 3\text{–}5\\%$ ấm có thêm một ít đường (cung cấp nguồn thức ăn ban đầu để vi khuẩn lactic phát triển nhanh hạ pH xuống thấp, ức chế vi khuẩn gây thối). Nén chặt rau ngập dưới mặt nước để tạo điều kiện **kị khí**.

### 3. Quy tắc an toàn vệ sinh sinh học
- Dụng cụ làm sữa chua và muối dưa phải được tráng nước sôi tiệt trùng và để ráo; rửa tay sạch sẽ trước khi làm.
- Tuyệt đối không nếm các mẫu nuôi cấy trong phòng thí nghiệm hoặc sản phẩm lên men xuất hiện nấm mốc đen/xanh hay có mùi ôi khú bất thường; xử lí mẫu bỏ đúng quy định.`
  },

  24: {
    num: 24,
    chapter: 7,
    part: "Phần hai. Sinh học vi sinh vật và virus",
    isPractical: false,
    title: "Khái quát về virus",
    subtitle: "Đặc điểm bản chất phi tế bào, cấu tạo hạt virus (Virion), phân loại hình thái và 5 giai đoạn trong chu trình nhân lên của virus",
    diagramNote: "Cấu tạo virus trần và virus có màng bọc (envelope), cấu trúc thể thực khuẩn (bacteriophage) và 5 giai đoạn nhân lên của virus trong tế bào chủ.",
    content: `### 1. Khái niệm và cấu tạo của Virus
- **Bản chất của Virus:** Virus là thực thể **chưa có cấu tạo tế bào**, có kích thước **siêu hiển vi** (rất nhỏ, chỉ từ $20\text{–}300\\text{ nm}$, chỉ quan sát được dưới kính hiển vi điện tử). Virus không có ribosome, không có hệ thống sinh năng lượng và không tự trao đổi chất được nên bắt buộc phải **kí sinh nội bào bắt buộc** trong tế bào vật chủ sống. Khi nằm ngoài tế bào chủ, virus tồn tại như một hạt đại phân tử hoá học gọi là **hạt virus (virion)**.
- **Cấu tạo cơ bản của hạt virus (Virion):** Mọi virus đều gồm **2 thành phần cốt lõi** (hợp thành phức hợp **Nucleocapsid**):
  1. **Lõi nucleic acid (Hệ gene):** Chỉ chứa **một loại** nucleic acid là **DNA** hoặc **RNA** (mạch đơn hoặc mạch kép), mang thông tin di truyền quy định sự nhân lên của virus.
  2. **Vỏ protein (Capsid):** Được cấu tạo từ các đơn vị hình thái protein gọi là **capsomere** bao bọc bên ngoài bảo vệ lõi nucleic acid.
- **Thành phần bổ sung ở một số virus:**
  - **Màng bọc ngoài (Envelope):** Có ở một số virus động vật (như HIV, virus cúm, SARS-CoV-2); bản chất là lớp kép phospholipid và protein có nguồn gốc từ màng sinh chất của tế bào chủ khi virus nảy chồi thoát ra. Trên màng bọc gắn các **gai glycoprotein** đóng vai trò là kháng nguyên giúp virus nhận diện và bám đặc hiệu vào thụ thể bề mặt tế bào chủ. Virus không có màng bọc gọi là **virus trần** (như Adenovirus, virus bại liệt, virus khảm thuốc lá TMV).
  - Một số virus còn mang theo một vài **enzyme riêng** (như enzyme phiên mã ngược *reverse transcriptase* và enzyme *integrase* ở virus HIV, hoặc enzyme *lysozyme* làm tan thành tế bào vi khuẩn ở phage).
- **Các dạng hình thái cấu trúc:** Cấu trúc **xoắn** (virus khảm thuốc lá TMV, virus dại), cấu trúc **khối đa diện** 20 mặt tam giác đều (Adenovirus, HIV) và cấu trúc **hỗn hợp / phức tạp** (thể thực khuẩn – Bacteriophage T4 có đầu dạng khối đa diện nối với bao đuôi có cấu trúc xoắn và đĩa gốc gắn lông đuôi).

### 2. Năm giai đoạn trong chu trình nhân lên của Virus trong tế bào chủ
1. **Giai đoạn 1 – Hấp phụ (Bám dính):** Gai glycoprotein (hoặc sợi lông đuôi ở phage) của virus gắn đặc hiệu vào **thụ thể bề mặt** của tế bào vật chủ theo cơ chế "chìa khoá – ổ khoá". Chính sự đặc hiệu này quy định mỗi loại virus chỉ lây nhiễm được một số loài vật chủ và một số loại mô nhất định (**tính đặc hiệu vật chủ/mô đích**).
2. **Giai đoạn 2 – Xâm nhập và cởi vỏ:**
   - *Ở thể thực khuẩn (Phage):* Sợi lông đuôi tiết enzyme lysozyme đục thủng thành peptidoglycan, bao đuôi co rút bơm **chỉ phần lõi DNA** vào trong tế bào vi khuẩn, còn vỏ capsid rỗng nằm lại bên ngoài.
   - *Ở virus động vật:* Đưa cả hạt nucleocapsid vào trong tế bào chất bằng cơ chế **nhập bào** hoặc **dung hợp màng bọc** với màng sinh chất tế bào chủ, sau đó enzyme phân giải vỏ capsid giải phóng nucleic acid (**cởi vỏ**).
3. **Giai đoạn 3 – Sinh tổng hợp:** Virus hoàn toàn **chiếm quyền điều khiển bộ máy của tế bào chủ** (sử dụng nguyên liệu nucleotide, amino acid, năng lượng ATP và ribosome của tế bào chủ) để nhân đôi hàng loạt hệ gene (DNA/RNA) của virus và tổng hợp các loại protein vỏ capsid cùng enzyme cho virus.
4. **Giai đoạn 4 – Lắp ráp:** Lõi nucleic acid mới tổng hợp được lắp vào bên trong các vỏ protein capsid để tạo thành các hạt virus hoàn chỉnh mới.
5. **Giai đoạn 5 – Giải phóng:** Các hạt virus mới thoát ra khỏi tế bào chủ để tiếp tục chu trình lây nhiễm sang tế bào khác:
   - **Chu trình sinh tan (Lytic cycle):** Virus nhân lên ồ ạt và làm **vỡ (tan) tế bào chủ** để thoát ra ngoài đồng loạt (virus độc).
   - **Chu trình tiềm tan (Lysogenic cycle):** Hệ gene của virus gắn cài (tích hợp) vào hệ gene của tế bào chủ (gọi là *prophage* hoặc *provirus*) và nhân đôi âm thầm cùng với sự phân chia của tế bào chủ mà chưa làm vỡ tế bào ngay; khi gặp tác nhân kích thích (tia UV, suy giảm miễn dịch), virus tiềm tan sẽ chuyển sang chu trình sinh tan. Với virus có màng bọc, chúng thường thoát ra từ từ theo lối **nảy chồi** qua màng sinh chất.`
  },

  25: {
    num: 25,
    chapter: 7,
    part: "Phần hai. Sinh học vi sinh vật và virus",
    isPractical: false,
    title: "Một số bệnh do virus và thành tựu ứng dụng virus",
    subtitle: "Phương thức lây truyền các bệnh do virus ở người (HIV/AIDS, Cúm, SARS-CoV-2), động vật, thực vật; tác nhân Prion và ứng dụng virus làm vaccine, vector chuyển gene, thuốc trừ sâu",
    diagramNote: "Các con đường lây truyền virus ở người & thực vật, cơ chế hội chứng suy giảm miễn dịch HIV/AIDS tấn công tế bào T-CD4 và quy trình ứng dụng virus tạo chế phẩm sinh học.",
    content: `### 1. Phương thức lây truyền và một số bệnh do virus gây ra
- **Ở người và động vật:** Virus lây truyền theo hai nhóm con đường chính:
  - **Lây truyền ngang (từ cá thể sang cá thể):** Qua **đường hô hấp** (giọt bắn khi ho, hắt hơi: virus cúm, SARS-CoV-2, sởi); qua **đường tiêu hoá** (thức ăn, nước uống nhiễm virus: tiêu chảy Rotavirus, viêm gan A, bại liệt); qua **đường máu và tiếp xúc dịch cơ thể / quan hệ tình dục** (HIV, viêm gan B, C, HPV) hoặc qua **vết đốt của vật chủ trung gian truyền bệnh – vector** (muỗi *Aedes* truyền sốt xuất huyết Dengue, Zika; chó mèo dại cắn truyền virus dại).
  - **Lây truyền dọc (từ mẹ sang con):** Qua nhau thai khi mang thai, trong khi sinh hoặc qua sữa mẹ (HIV, viêm gan B, Rubella).
- **Trọng tâm bệnh HIV/AIDS và Cúm:**
  - **Hội chứng suy giảm miễn dịch mắc phải (HIV/AIDS):** Virus HIV (Retrovirus có RNA và enzyme phiên mã ngược) tấn công và phá huỷ đặc hiệu các tế bào bạch cầu **T hỗ trợ (mang thụ thể CD4)** và đại thực bào của hệ miễn dịch. Trải qua 3 giai đoạn: *Giai đoạn sơ nhiễm (cửa sổ) $\\rightarrow$ Giai đoạn không triệu chứng $\\rightarrow$ Giai đoạn biểu hiện triệu chứng AIDS* (hệ miễn dịch suy sụp khiến cơ thể mắc các **bệnh nhiễm trùng cơ hội** như lao, nấm, ung thư). HIV **không lây** qua giao tiếp thông thường (bắt tay, ôm, ăn uống chung, muỗi đốt).
  - **Bệnh cúm (Influenza) và COVID-19:** Virus có vật chất di truyền là RNA nên rất dễ phát sinh **đột biến điểm và tái tổ hợp tạo biến chủng kháng nguyên mới** (như các chủng cúm A $\\text{H}_5\\text{N}_1, \\text{H}_1\\text{N}_1$), đòi hỏi phải cập nhật vaccine định kì.
- **Ở thực vật:** Tế bào thực vật có thành cellulose dày nên virus không tự xâm nhập bằng cơ chế hấp phụ mà chỉ xâm nhập qua **vết thương cơ giới** do côn trùng chích hút (rầy nâu, bọ phấn, rệp), dụng cụ cắt tỉa không khử trùng, qua hạt giống/củ giống hoặc truyền qua **cầu sinh chất** từ tế bào này sang tế bào khác. Triệu chứng: lá xoăn, khảm vàng xanh lốm đốm, cây còi cọc thấp lùn.

### 2. Prion và các nguyên tắc phòng chống bệnh do virus
- **Tác nhân Prion:** Là các phân tử **protein bị biến đổi cấu hình không gian bất thường** (hoàn toàn **không chứa nucleic acid** DNA hay RNA như virus), có khả năng lây nhiễm bằng cách tiếp xúc và cảm ứng các phân tử protein bình thường trong mô thần kinh biến đổi theo cấu hình bệnh lí của nó, gây bệnh thoái hoá não xốp (bệnh bò điên BSE, bệnh Creutzfeldt-Jakob ở người). Prion cực kì bền với nhiệt độ đun sôi và các chất sát khuẩn thông thường.
- **Biện pháp phòng bệnh tổng hợp:**
  - **Sử dụng Vaccine:** Đưa kháng nguyên đã làm yếu/bất hoạt hoặc mRNA mã hoá kháng nguyên vào cơ thể để kích thích hệ miễn dịch chủ động tạo **kháng thể và tế bào nhớ miễn dịch đặc hiệu**.
  - Vệ sinh cá nhân, đeo khẩu trang, rửa tay bằng xà phòng/cồn sát khuẩn, diệt côn trùng trung gian truyền bệnh, sống lành mạnh và dùng thuốc kháng virus đặc hiệu theo chỉ định y tế (như thuốc ức chế enzyme phiên mã ngược ARV cho bệnh nhân HIV). Với cây trồng: chọn giống sạch bệnh bằng nuôi cấy mô đỉnh sinh trưởng, vệ sinh đồng ruộng và tiêu diệt côn trùng chích hút.

### 3. Thành tựu ứng dụng virus trong khoa học và đời sống
1. **Sản xuất chế phẩm y học (Vaccine và Interferon):** Sử dụng virus giảm độc lực/bất hoạt hoặc công nghệ vector virus để sản xuất vaccine phòng bệnh; dùng virus kích thích tế bào sản xuất protein kháng virus tự nhiên **interferon**.
2. **Thiết kế Vector chuyển gene trong công nghệ di truyền và liệu pháp gene:** Cắt bỏ các gene gây bệnh của virus và gắn gene mong muốn (như gene quy định tổng hợp insulin hoặc gene lành thay thế gene đột biến) vào hệ gene virus để nhờ virus đưa gene đó vào tế bào nhận hiệu quả.
3. **Sản xuất thuốc trừ sâu sinh học từ virus (như virus NPV – *Nucleopolyhedrovirus*):** Nuôi cấy virus trên ấu trùng sâu để chế tạo thuốc trừ sâu virus; khi sâu ăn phải lá cây có phun chế phẩm, virus nhân lên làm sâu chết rũ mà hoàn toàn an toàn cho người, gia súc và côn trùng có ích.`
  },

  26: {
    num: 26,
    chapter: 7,
    part: "Phần hai. Sinh học vi sinh vật và virus",
    isPractical: true,
    title: "Thực hành: Điều tra bệnh do virus và tuyên truyền phòng bệnh",
    subtitle: "Phương pháp điều tra dịch tễ học bệnh do virus ở người, vật nuôi, cây trồng tại địa phương và thiết kế ấn phẩm truyền thông y tế cộng đồng",
    diagramNote: "Quy trình 4 bước dự án điều tra dịch tễ bệnh do virus và thiết kế infographic / poster tuyên truyền phòng chống dịch bệnh.",
    content: `### 1. Mục tiêu và nội dung điều tra dự án
- **Mục tiêu:** Vận dụng kiến thức về cấu tạo, chu trình nhân lên và phương thức lây truyền của virus để thực hiện một cuộc điều tra thực tế (hoặc qua dữ liệu y tế/nông nghiệp chính thống) về các bệnh do virus tại địa phương; rèn kĩ năng xử lí thông tin khoa học và thiết kế sản phẩm tuyên truyền phòng chống dịch bệnh.
- **Nội dung phiếu điều tra chuẩn (Áp dụng cho bệnh ở người/vật nuôi hoặc bệnh virus ở cây trồng):**

| Hạng mục điều tra | Nội dung thông tin cần thu thập và phân tích | Ví dụ minh hoạ (Bệnh Sốt xuất huyết Dengue) |
|---|---|---|
| **1. Tên bệnh & Tác nhân** | Tên bệnh phổ biến, tên khoa học của virus, loại vật chất di truyền (DNA/RNA), có màng bọc hay không | Virus Dengue (RNA mạch đơn, có màng bọc) |
| **2. Vật chủ & Đường lây truyền** | Loài mắc bệnh, con đường lây (hô hấp, máu, tiêu hoá, côn trùng vector, vết thương cơ giới) | Lây truyền qua vết đốt của muỗi vằn *Aedes aegypti* |
| **3. Triệu chứng điển hình** | Các biểu hiện lâm sàng ở người/động vật hoặc triệu chứng hình thái trên lá/thân cây trồng | Sốt cao đột ngột $39\text{–}40^\circ\text{C}$, đau đầu, xuất huyết dưới da, giảm tiểu cầu |
| **4. Biện pháp phòng chống** | Cách cắt đứt đường lây, vaccine (nếu có), vệ sinh môi trường và nơi liên hệ hỗ trợ y tế/khuyến nông | Diệt bọ gậy/lăng quăng, đậy kín dụng cụ chứa nước, ngủ màn, đến cơ sở y tế khi sốt |

### 2. Quy trình thực hiện dự án và thiết kế sản phẩm tuyên truyền
1. **Bước 1 – Lập kế hoạch và chọn chủ đề:** Phân công nhiệm vụ nhóm, lựa chọn chủ đề được giáo viên phê duyệt (như phòng chống sốt xuất huyết, cúm mùa, HIV/AIDS, bệnh dại, hoặc bệnh vàng lùn – lùn xoắn lá ở lúa, bệnh khảm lá sắn/cà chua).
2. **Bước 2 – Thu thập và kiểm chứng dữ liệu:** Khai thác số liệu từ nguồn chính thống (Bộ Y tế, WHO, Trung tâm Kiểm soát bệnh tật CDC, Trạm Bảo vệ thực vật). Lưu ý với cây trồng: Không vội kết luận do virus chỉ dựa vào một biểu hiện vàng lá đơn lẻ vì thiếu khoáng hoặc nhiễm nấm/vi khuẩn cũng có triệu chứng tương tự.
3. **Bước 3 – Thiết kế ấn phẩm truyền thông (Poster / Infographic / Tờ rơi):** Trình bày ngắn gọn, trực quan theo cấu trúc: *Tên bệnh $\\rightarrow$ Đường lây truyền $\\rightarrow$ Hành động cần làm ngay $\\rightarrow$ Điều tuyệt đối cần tránh $\\rightarrow$ Đường dây nóng y tế*. Ngôn từ khoa học, chuẩn mực, **không gây hoang mang và không kì thị người bệnh**.

### 3. Quy tắc an toàn sinh học trong điều tra thực tế
- Tuyệt đối không tự ý thu thập mẫu máu, dịch tiết bệnh phẩm của người hay động vật nghi mắc bệnh; không tiếp xúc trực tiếp không có bảo hộ với động vật ốm/chết hoặc ổ dịch.
- Tôn trọng quyền riêng tư và bảo mật thông tin cá nhân khi phỏng vấn; tuân thủ đầy đủ hướng dẫn của giáo viên và cơ quan y tế địa phương.`
  }
};

const allLessons = { ...lessonsP1, ...lessonsP2 };

const reviewTable = [
  {
    topic: "1. Sinh học và Khoa học thực nghiệm (Bài 1 – 3)",
    questions: "Sinh học nghiên cứu gì? Nghiên cứu cơ bản khác nghiên cứu ứng dụng thế nào? Vì sao cần đạo đức sinh học và phát triển bền vững? Phân biệt biến độc lập – biến phụ thuộc – lô đối chứng trong tiến trình 6 bước.",
    keyConnections: "Trình tự cấp độ sống: Phân tử → Bào quan → Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể → Quần thể → Quần xã → Hệ sinh thái → Sinh quyển. Ba đặc điểm chung: Tổ chức thứ bậc (đặc tính nổi trội) – Hệ mở tự điều chỉnh – Liên tục tiến hoá."
  },
  {
    topic: "2. Thành phần hoá học và Cấu trúc tế bào (Bài 4 – 9)",
    questions: "Tính phân cực và liên kết hydrogen của nước quy định vai trò gì? Bốn đại phân tử sinh học có đơn phân, liên kết và chức năng nào? Tế bào nhân sơ và nhân thực khác nhau ở điểm cốt lõi nào?",
    keyConnections: "Nước là dung môi phân cực. Carbohydrate (đường đơn, glycosidic – năng lượng/cấu trúc); Lipid (kị nước – dự trữ/màng kép phospholipid); Protein (amino acid, peptide – 4 bậc cấu trúc, xúc tác/vận chuyển/bảo vệ); Nucleic acid (nucleotide, phosphodiester – DNA lưu giữ, RNA truyền đạt thông tin). Đường đi protein tiết: RER → Túi tiết → Golgi → Màng sinh chất."
  },
  {
    topic: "3. Trao đổi chất qua màng và Truyền tin (Bài 10 – 12)",
    questions: "Khuếch tán đơn giản, khuếch tán tăng cường, thẩm thấu, vận chuyển chủ động và nhập/xuất bào khác nhau ra sao về chiều nồng độ, kênh/bơm protein và năng lượng ATP?",
    keyConnections: "Môi trường ưu trương gây co nguyên sinh (tế bào mất nước); nhược trương gây trương nước/phản co nguyên sinh. Truyền tin tế bào gồm 3 giai đoạn: Tiếp nhận (Thụ thể màng hoặc thụ thể nội bào) → Truyền tín hiệu (Khuếch đại chuỗi phân tử) → Đáp ứng sinh lí đặc hiệu."
  },
  {
    topic: "4. Chuyển hoá vật chất và Năng lượng (Bài 13 – 15)",
    questions: "ATP ghép nối giữa dị hoá và đồng hoá như thế nào? Enzyme làm giảm năng lượng hoạt hoá theo cơ chế nào? Hô hấp hiếu khí, lên men và quang hợp liên hệ với nhau ra sao?",
    keyConnections: "ATP ⇌ ADP + Pi + Năng lượng. Enzyme đặc hiệu qua trung tâm hoạt động, điều hoà bằng ức chế ngược. Hô hấp hiếu khí (Đường phân → Krebs → Chuỗi truyền electron) tạo 30–32 ATP; Lên men kị khí tái sinh NAD+ chỉ tạo 2 ATP. Quang hợp (Pha sáng tại Thylakoid tạo ATP, NADPH, O₂ → Chu trình Calvin tại Stroma cố định CO₂ tạo C₆H₁₂O₆)."
  },
  {
    topic: "5. Chu kì tế bào, Phân bào và Công nghệ tế bào (Bài 16 – 19)",
    questions: "Chu kì tế bào gồm những pha và điểm kiểm soát nào? NST biến đổi thế nào qua Nguyên phân và Giảm phân? Cơ sở khoa học của nuôi cấy mô thực vật và nhân bản vô tính động vật?",
    keyConnections: "Chu kì: G₁ → S (nhân đôi DNA/NST) → G₂ → M. Nguyên phân tạo 2 tế bào con (2n) giống mẹ; rối loạn kiểm soát gây ung thư. Giảm phân (2 lần phân bào, có tiếp hợp trao đổi chéo ở Kì đầu I) tạo 4 giao tử (n) đa dạng di truyền. Công nghệ tế bào thực vật dựa trên tính toàn năng; động vật dựa trên chuyển nhân và tế bào gốc."
  },
  {
    topic: "6. Sinh học Vi sinh vật (Bài 20 – 23)",
    questions: "Bốn kiểu dinh dưỡng của VSV phân loại dựa trên tiêu chí nào? Đường cong sinh trưởng trong nuôi cấy không liên tục khác gì nuôi cấy liên tục? Ứng dụng và nguy cơ kháng kháng sinh?",
    keyConnections: "4 kiểu dinh dưỡng: Quang tự dưỡng, Quang dị dưỡng, Hoá tự dưỡng, Hoá dị dưỡng. Công thức tăng trưởng: N_t = N_0 × 2^(t/g). Nuôi cấy không liên tục có 4 pha: Tiềm phát (Lag) → Luỹ thừa (Log) → Cân bằng → Suy vong. Ứng dụng: Thực phẩm lên men, kháng sinh, vaccine, phân vi sinh, xử lí ô nhiễm."
  },
  {
    topic: "7. Virus và Phòng chống bệnh truyền nhiễm (Bài 24 – 26)",
    questions: "Vì sao virus phải kí sinh nội bào bắt buộc? Năm giai đoạn nhân lên của virus diễn ra thế nào? Phân biệt virus với vi khuẩn và prion để phòng điều trị đúng cách?",
    keyConnections: "Hạt virion gồm lõi DNA hoặc RNA + vỏ Capsid (± màng bọc Envelope có gai glycoprotein). 5 bước nhân lên: Hấp phụ → Xâm nhập → Sinh tổng hợp → Lắp ráp → Giải phóng (chu trình tan hoặc tiềm tan). Kháng sinh chỉ diệt vi khuẩn, không diệt được virus; phòng virus chủ động bằng Vaccine và cắt đứt đường lây."
  }
];

const labSafetyHandbook = [
  {
    bai: "Bài 6",
    title: "Nhận biết các phân tử sinh học",
    reagents: "Tinh bột + Lugol (Iodine) → Xanh tím; Đường khử + Benedict (đun cách thuỷ) → Đỏ gạch (Cu₂O↓); Protein + Biuret (NaOH + CuSO₄) → Tím; Lipid + Ethanol/Nước → Nhũ tương trắng đục.",
    safety: "Không đun ethanol gần ngọn lửa; đeo găng tay khi dùng NaOH kiềm ăn mòn; dùng kẹp gỗ khi đun cách thuỷ."
  },
  {
    bai: "Bài 9",
    title: "Quan sát tế bào dưới kính hiển vi",
    reagents: "Biểu bì vảy hành + Iodine loãng; Tế bào niêm mạc miệng + NaCl 0,9% + Xanh methylene.",
    safety: "Hạ lamen góc 45° tránh bọt khí; quan sát vật kính 10× trước rồi mới chuyển sang 40× (chỉ chỉnh ốc vi cấp để tránh vỡ tiêu bản)."
  },
  {
    bai: "Bài 11",
    title: "Co và phản co nguyên sinh",
    reagents: "Biểu bì lá thài lài tía + Dung dịch NaCl ưu trương (gây co nguyên sinh, khí khổng đóng) → Nước cất (gây phản co nguyên sinh, khí khổng mở).",
    safety: "Thao tác dao lam hướng ra xa tay; không ngâm muối nồng độ quá cao quá lâu làm chết tế bào."
  },
  {
    bai: "Bài 15",
    title: "Hoạt tính Enzyme Amylase & Catalase",
    reagents: "Hồ tinh bột + Amylase ở các mức nhiệt/pH + Lugol; Khoai tây tươi (Catalase) + H₂O₂ → Sủi bọt khí O₂.",
    safety: "Không đậy nút kín ống nghiệm khi có phản ứng sinh khí hoặc khi đun nóng; cẩn thận với nước sôi và acid/kiềm."
  },
  {
    bai: "Bài 18",
    title: "Làm tiêu bản Nguyên phân & Giảm phân",
    reagents: "Chóp rễ hành (1,5–2 mm) cố định Carnoy + Nhuộm Acetocarmine 2% hơ ấm 5–8 phút (không đun sôi) + Dầm ép nhẹ.",
    safety: "Không hít hơi acid acetic khi hơ nóng; ấn thẳng góc lên lamen qua giấy thấm, tránh làm trượt hoặc vỡ lamen."
  },
  {
    bai: "Bài 23 & 26",
    title: "Lên men Vi sinh vật & Điều tra bệnh Virus",
    reagents: "Sữa chua (lên men lactic đồng hình ở 40–45°C, pH ~ 4,5 làm đông tụ casein); Dưa muối chua (NaCl 3–5% kị khí).",
    safety: "Tuyệt đối không nếm mẫu thí nghiệm hoặc mẫu mốc hỏng; không tự ý thu mẫu bệnh phẩm virus người/động vật."
  }
];

const finalDataOutput = `// scratch/sinhhoc10_data.js - Auto-generated full dataset for Sinh học 10 (Kết nối tri thức)
const chapters = ${JSON.stringify(chapters, null, 2)};
const lessons = ${JSON.stringify(allLessons, null, 2)};
const reviewTable = ${JSON.stringify(reviewTable, null, 2)};
const labSafetyHandbook = ${JSON.stringify(labSafetyHandbook, null, 2)};

module.exports = { chapters, lessons, reviewTable, labSafetyHandbook };
`;

const fs = require('fs');
fs.writeFileSync('scratch/sinhhoc10_data.js', finalDataOutput, 'utf8');
console.log('Successfully generated scratch/sinhhoc10_data.js! Total lessons:', Object.keys(allLessons).length);
