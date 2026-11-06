// scratch/sinhhoc10_data_p1.js
const chapters = [
  {
    num: 0,
    part: "Phần mở đầu",
    title: "Mở đầu: Giới thiệu chung về Thế giới sống",
    shortTitle: "Phần mở đầu: Thế giới sống",
    icon: "fa-seedling",
    lessons: [1, 2, 3]
  },
  {
    num: 1,
    part: "Phần một. Sinh học tế bào",
    title: "Chương 1: Thành phần hoá học của tế bào",
    shortTitle: "Chương 1: Hoá học tế bào",
    icon: "fa-atom",
    lessons: [4, 5, 6]
  },
  {
    num: 2,
    part: "Phần một. Sinh học tế bào",
    title: "Chương 2: Cấu trúc tế bào",
    shortTitle: "Chương 2: Cấu trúc tế bào",
    icon: "fa-microscope",
    lessons: [7, 8, 9]
  },
  {
    num: 3,
    part: "Phần một. Sinh học tế bào",
    title: "Chương 3: Trao đổi chất qua màng và truyền tin tế bào",
    shortTitle: "Chương 3: Màng & Truyền tin",
    icon: "fa-arrows-left-right-to-line",
    lessons: [10, 11, 12]
  },
  {
    num: 4,
    part: "Phần một. Sinh học tế bào",
    title: "Chương 4: Chuyển hoá năng lượng trong tế bào",
    shortTitle: "Chương 4: Năng lượng & Enzyme",
    icon: "fa-bolt",
    lessons: [13, 14, 15]
  },
  {
    num: 5,
    part: "Phần một. Sinh học tế bào",
    title: "Chương 5: Chu kì tế bào và phân bào",
    shortTitle: "Chương 5: Phân bào & Công nghệ",
    icon: "fa-dna",
    lessons: [16, 17, 18, 19]
  },
  {
    num: 6,
    part: "Phần hai. Sinh học vi sinh vật và virus",
    title: "Chương 6: Sinh học vi sinh vật",
    shortTitle: "Chương 6: Vi sinh vật",
    icon: "fa-bacteria",
    lessons: [20, 21, 22, 23]
  },
  {
    num: 7,
    part: "Phần hai. Sinh học vi sinh vật và virus",
    title: "Chương 7: Virus và ứng dụng",
    shortTitle: "Chương 7: Virus & Phòng bệnh",
    icon: "fa-virus",
    lessons: [24, 25, 26]
  }
];

const lessonsP1 = {
  1: {
    num: 1,
    chapter: 0,
    part: "Phần mở đầu",
    isPractical: false,
    title: "Giới thiệu khái quát môn Sinh học",
    subtitle: "Đối tượng, mục tiêu nghiên cứu, vai trò ngành nghề, đạo đức sinh học và phát triển bền vững",
    diagramNote: "Các lĩnh vực sinh học cơ bản và ứng dụng; ví dụ nuôi cấy mô và nhận diện DNA; mối liên hệ giữa sinh học, kinh tế, công nghệ, đạo đức và bền vững.",
    content: `### 1. Sinh học nghiên cứu gì?
- **Sinh học** là ngành khoa học nghiên cứu sự sống. Đối tượng của sinh học là các sinh vật cùng các cấp độ tổ chức của thế giới sống.
- **Mục tiêu:** Tìm hiểu cấu trúc và sự vận hành của các quá trình sống ở nhiều cấp độ tổ chức; từ đó con người có thể sử dụng hợp lí, tối ưu hoá nguồn tài nguyên sinh học và phi sinh học phục vụ phát triển xã hội bền vững.
- **Nghiên cứu cơ bản:** Tìm hiểu cấu trúc, phân loại, cơ chế vận hành và quá trình tiến hoá của thế giới sống.
- **Nghiên cứu ứng dụng:** Vận dụng những hiểu biết sinh học nền tảng vào chăm sóc sức khoẻ, sản xuất nông – công nghiệp, bảo vệ môi trường và phát triển công nghệ sinh học.

### 2. Vai trò của Sinh học và các ngành nghề liên quan
- **Y – dược học:** Giải trình tự hệ gene người và tác nhân gây bệnh, chẩn đoán bệnh sớm, phát triển thuốc hướng đích và cá thể hoá phác đồ chăm sóc sức khoẻ.
- **Pháp y:** Phân tích DNA từ mẫu tóc, máu hoặc tế bào để nhận diện cá thể, xác định quan hệ huyết thống và hỗ trợ điều tra hình sự. Trình tự lặp đặc trưng của mỗi cá nhân được gọi là **dấu vân tay DNA**.
- **Nông – lâm – ngư nghiệp:** Chọn tạo giống cây trồng, vật nuôi có năng suất, chất lượng cao và khả năng chống chịu tốt; ứng dụng công nghệ gene và nuôi cấy mô tế bào giúp tạo mới hoặc nhân nhanh giống sạch bệnh.
- **Công nghệ thực phẩm và môi trường:** Sử dụng sinh vật hoặc các quá trình sinh học để chế biến, bảo quản thực phẩm, xử lí chất thải ô nhiễm (như vi sinh vật phân huỷ dầu tràn, rác hữu cơ), tạo vật liệu sinh học và phát triển công nghệ phỏng sinh học (bionics).
- **Cảnh báo rủi ro:** Ứng dụng sinh học đem lại giá trị kinh tế to lớn nhưng luôn cần đánh giá rủi ro sinh thái và sức khoẻ. Ví dụ: việc nhân giống đồng nhất về mặt di truyền trên diện rộng có thể làm tăng nguy cơ thiệt hại nặng nề khi điều kiện môi trường trở nên bất lợi hoặc bùng phát dịch bệnh.

### 3. Sinh học, xã hội và phát triển bền vững
- **Đạo đức sinh học (Bioethics):** Xem xét trách nhiệm xã hội và các chuẩn mực đạo đức – pháp lí trong nghiên cứu, khai thác dữ liệu di truyền cá nhân, chỉnh sửa gene, nhân bản vô tính và sử dụng sinh vật biến đổi gene (GMO).
- **Phát triển bền vững:** Là sự phát triển nhằm đáp ứng nhu cầu của thế hệ hiện tại mà không làm tổn hại đến khả năng đáp ứng nhu cầu của các thế hệ tương lai.
- **Đóng góp của Sinh học:** Bảo tồn đa dạng sinh học, khai thác tài nguyên tái sinh hợp lí, cải thiện năng suất lương thực và chăm sóc y tế, giảm thiểu ô nhiễm môi trường và ứng phó biến đổi khí hậu toàn cầu.
- **Xu thế liên ngành:** Tương lai của sinh học gắn kết chặt chẽ với công nghệ thông tin (tin sinh học – bioinformatics, trí tuệ nhân tạo), hoá học, vật lí, y học và nông nghiệp thông minh.

> **Trục liên kết cốt lõi:** Nghiên cứu cơ bản (Khám phá quy luật sống) → Nghiên cứu ứng dụng (Công nghệ gene, Y dược, Nông nghiệp, Môi trường) → Đạo đức sinh học & Phát triển bền vững.`
  },

  2: {
    num: 2,
    chapter: 0,
    part: "Phần mở đầu",
    isPractical: false,
    title: "Phương pháp nghiên cứu và học tập môn Sinh học",
    subtitle: "Tiến trình nghiên cứu khoa học 6 bước, hệ thống thiết bị – kĩ thuật phòng thí nghiệm và quy tắc an toàn",
    diagramNote: "Quan sát → câu hỏi → giả thuyết → dự đoán → thực nghiệm → phân tích → kết luận; nếu chưa phù hợp thì xem lại giả thuyết hoặc cách làm.",
    content: `### 1. Tiến trình nghiên cứu khoa học
1. **Bước 1 – Quan sát, thu thập dữ liệu:** Quan sát có mục tiêu rõ ràng bằng giác quan hoặc dụng cụ chuyên dụng; ghi chép dữ liệu định tính và định lượng một cách trung thực, cẩn thận.
2. **Bước 2 – Đặt câu hỏi:** Nêu vấn đề khoa học cần giải thích xuất phát từ dữ liệu quan sát được và vốn kiến thức đã có.
3. **Bước 3 – Hình thành giả thuyết:** Đề xuất câu trả lời hoặc cách giải thích giả định có khả năng kiểm chứng được bằng thực nghiệm.
4. **Bước 4 – Đưa ra dự đoán:** Suy luận hệ quả sẽ xảy ra nếu giả thuyết đúng, thường diễn đạt theo cấu trúc logic *“Nếu [giả thuyết đúng]… thì [kết quả dự kiến]…”*.
5. **Bước 5 – Thiết kế và tiến hành kiểm chứng:** Thiết kế thí nghiệm gồm **lô đối chứng** và **lô thí nghiệm**; hai lô được giữ giống nhau ở mọi điều kiện ngoại trừ yếu tố duy nhất đang khảo sát.
6. **Bước 6 – Phân tích kết quả và rút ra kết luận:** Biểu diễn số liệu bằng bảng hoặc đồ thị thống kê, đối chiếu với dự đoán; từ đó chấp nhận, điều chỉnh hoặc bác bỏ giả thuyết. Cần tính đến sai số và lặp lại phép đo để đảm bảo độ tin cậy.

| Loại biến số trong thí nghiệm | Bản chất và vai trò | Ví dụ minh hoạ (Thí nghiệm ảnh hưởng của nhiệt độ đến enzyme) |
|---|---|---|
| **Biến độc lập** | Yếu tố do người nghiên cứu chủ động thay đổi | Các mức nhiệt độ khác nhau ($10^\circ\text{C}, 37^\circ\text{C}, 70^\circ\text{C}$) |
| **Biến phụ thuộc** | Kết quả đo đạc thay đổi theo biến độc lập | Tốc độ phân giải tinh bột (thời gian mất màu xanh iodine) |
| **Biến kiểm soát (Cố định)** | Các yếu tố giữ ổn định như nhau ở mọi lô | Độ pH, nồng độ cơ chất tinh bột, nồng độ enzyme amylase |

### 2. Phương pháp, thiết bị và kĩ thuật nghiên cứu
- **Phương pháp thường dùng:** Quan sát và phân loại sinh vật theo đặc điểm hình thái hoặc chỉ thị phân tử; phân lập; tách chiết gene, enzyme hay hợp chất có hoạt tính sinh học; nuôi cấy vi sinh vật, mô/tế bào thực vật và động vật.
- **Kính hiển vi quang học:** Sử dụng ánh sáng khả kiến, dùng để quan sát tế bào và các cấu trúc tương đối lớn. Độ phóng đại tối đa khoảng $1\,500\text{ lần}$, độ phân giải khoảng $200\text{ nm}$.
- **Kính hiển vi điện tử (SEM, TEM):** Sử dụng chùm tia electron, có độ phóng đại và độ phân giải vượt trội, dùng để quan sát cấu trúc siêu hiển vi của bào quan và đại phân tử.
- **Máy li tâm:** Tách các thành phần tế bào dựa theo mức độ lắng khác nhau sau khi phá vỡ màng tế bào; các bào quan và phân tử phân bố ở các phân đoạn khác nhau tuỳ theo khối lượng, kích thước và tốc độ quay li tâm.
- **Dụng cụ và kĩ thuật cơ bản:** Kính lúp, micropipet, ống đong, cốc thuỷ tinh; kĩ thuật giải phẫu mẫu, làm tiêu bản tế bào/nhiễm sắc thể, nhuộm mẫu cố định, dầm ép và quan sát hiển vi.

### 3. Quy tắc an toàn phòng thí nghiệm và phương pháp học tập
- **Trang bị bảo hộ:** Mặc áo choàng gọn gàng, buộc tóc dài; đeo găng tay, khẩu trang, kính bảo hộ theo đúng yêu cầu từng bài.
- **Thao tác chuẩn mực:** Chỉ thực hiện khi đã nắm rõ hướng dẫn; nhận diện biển cảnh báo vật sắc nhọn, hoá chất độc/ăn mòn/dễ cháy, nguồn điện và mẫu sinh học nguy hiểm.
- **Nghiêm cấm:** Không ăn uống, đùa nghịch, không nếm hoặc ngửi trực tiếp hoá chất; không tự ý pha trộn hay đổ bỏ hoá chất bừa bãi ra bồn rửa.
- **Sau khi kết thúc:** Thu gom chất thải sinh học và hoá học đúng nơi quy định, vệ sinh và sắp xếp dụng cụ gọn gàng, rửa tay sạch bằng xà phòng; báo ngay cho giáo viên khi xảy ra sự cố.
- **Phương pháp học tập hiệu quả:** Học qua chu trình *Quan sát – Đặt câu hỏi – Tìm bằng chứng – Giải thích – Trình bày*; đọc hình vẽ như nguồn dữ liệu khoa học, phân biệt rõ điều quan sát trực tiếp với điều suy luận.`
  },

  3: {
    num: 3,
    chapter: 0,
    part: "Phần mở đầu",
    isPractical: false,
    title: "Các cấp độ tổ chức của thế giới sống",
    subtitle: "Trình tự thứ bậc các cấp độ sống, các cấp độ cơ bản và 3 đặc điểm chung cốt lõi của thế giới sống",
    diagramNote: "Sơ đồ các cấp độ tổ chức thế giới sống và ví dụ minh hoạ từ cá thể → quần thể → quần xã → hệ sinh thái.",
    content: `### 1. Các cấp độ tổ chức của thế giới sống
- **Trình tự thứ bậc từ thấp đến cao:** **Phân tử → Bào quan → Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể → Quần thể → Quần xã → Hệ sinh thái → Sinh quyển**.
- **Tế bào:** Là đơn vị cấu trúc và chức năng cơ bản nhất của mọi cơ thể sống; sinh vật có thể cấu tạo từ một tế bào (đơn bào) hoặc nhiều tế bào phối hợp (đa bào).
- **Cơ thể:** Cấp độ cá thể độc lập thực hiện đầy đủ các quá trình sống cơ bản (trao đổi chất, cảm ứng, sinh trưởng, phát triển và sinh sản).
- **Quần thể:** Tập hợp các cá thể **cùng loài**, cùng chung sống trong một khoảng không gian xác định, vào một thời điểm nhất định và có khả năng giao phối/sinh sản tạo thế hệ mới hữu thụ.
- **Quần xã:** Tập hợp nhiều quần thể thuộc các **loài khác nhau** cùng chung sống trong một sinh cảnh và có mối quan hệ tương tác sinh thái mật thiết với nhau.
- **Hệ sinh thái:** Bao gồm quần xã sinh vật (thành phần hữu sinh) cùng môi trường sống của chúng (thành phần vô sinh) và các mối quan hệ trao đổi vật chất, chuyển hoá năng lượng giữa chúng.
- **Sinh quyển:** Cấp độ tổ chức lớn nhất, bao gồm toàn bộ các hệ sinh thái trên Trái Đất (khí quyển thấp, thuỷ quyển và lớp trên thạch quyển nơi có sự sống tồn tại).

### 2. Đặc điểm chung của các cấp độ tổ chức sống
- **1. Tổ chức theo nguyên tắc thứ bậc:** Cấp độ tổ chức bên trên được hình thành từ sự tương tác của các cấp độ bên dưới và xuất hiện **đặc tính nổi trội (tính chất mới nảy sinh)** mà từng thành phần riêng lẻ ở cấp dưới chưa có; sự sống không chỉ là phép cộng đơn giản của các bộ phận.
- **2. Hệ thống mở và tự điều chỉnh:** Mọi cấp độ sống không ngừng trao đổi vật chất, năng lượng và thông tin với môi trường bên ngoài; đồng thời có các cơ chế điều hoà ngược giúp duy trì trạng thái cân bằng động nội môi (homeostasis) tương đối ổn định.
- **3. Thế giới sống liên tục tiến hoá:** Nhờ sự phát sinh biến dị di truyền kết hợp với chọn lọc tự nhiên qua hàng triệu thế hệ, các quần thể sinh vật không ngừng thích nghi với môi trường mới, tạo nên sự đa dạng phong phú nhưng vẫn giữ những đặc điểm chung phản ánh **nguồn gốc chung**.

> **Ghi nhớ nhanh 4 cấp độ cơ bản của thế giới sống:** **Tế bào → Cơ thể → Quần thể → Quần xã – Hệ sinh thái**.`
  },

  4: {
    num: 4,
    chapter: 1,
    part: "Phần một. Sinh học tế bào",
    isPractical: false,
    title: "Các nguyên tố hoá học và nước",
    subtitle: "Nguyên tố đại lượng, vi lượng, vai trò đặc biệt của nguyên tử Carbon và cấu trúc phân cực của phân tử nước",
    diagramNote: "Cấu tạo phân cực của phân tử H₂O, mạng lưới liên kết hydrogen giữa các phân tử nước và lớp vỏ hydrate hoá hoà tan ion.",
    content: `### 1. Các nguyên tố hoá học trong tế bào
- Tế bào sống được cấu tạo từ các nguyên tố hoá học vốn có trong tự nhiên. Trong đó, các nguyên tố chủ yếu gồm **$\\text{C, H, O, N, P, S}$** (riêng $\\text{C, H, O, N}$ chiếm khoảng $96\\%$ khối lượng cơ thể sống), ngoài ra còn có các chất khoáng thiết yếu khác.
- **Nguyên tố đại lượng:** Chiếm tỉ lệ lớn ($\ge 0{,}01\\%$ khối lượng khô của tế bào) như $\\text{C, H, O, N, P, K, S, Ca, Mg, Na, Cl}$. Vai trò: Tham gia trực tiếp cấu tạo nên các đại phân tử hữu cơ (protein, lipid, carbohydrate, nucleic acid) và cấu trúc tế bào, điều hoà áp suất thẩm thấu.
- **Nguyên tố vi lượng:** Chiếm tỉ lệ rất nhỏ ($< 0{,}01\\%$ khối lượng khô) như $\\text{Fe, I, Zn, Cu, Mn, Mo, Co}$. Vai trò: Tuy cần lượng cực nhỏ nhưng không thể thiếu vì là thành phần cấu tạo hoặc yếu tố hoạt hoá (cofactor) của các enzyme, hormone, sắc tố vận chuyển khí (như $\\text{Fe}$ trong hemoglobin, $\\text{I}$ trong hormone tuyến giáp thyroxine).
- **Vai trò cốt lõi của nguyên tố Carbon ($\\text{C}$):** Nguyên tử carbon có $4$ electron ở lớp ngoài cùng, cho phép tạo $4$ liên kết cộng hoá trị bền vững với các nguyên tử carbon khác và với các nguyên tố khác ($\text{H, O, N, P, S}$), tạo nên bộ khung xương carbon đa dạng về kích thước và cấu hình không gian (mạch thẳng, mạch nhánh, mạch vòng).

### 2. Cấu trúc và tính chất lí – hoá của nước
- **Cấu tạo phân tử nước ($\\text{H}_2\\text{O}$):** Gồm $1$ nguyên tử oxygen liên kết cộng hoá trị với $2$ nguyên tử hydrogen. Do nguyên tử oxygen có độ âm điện lớn hơn nhiều so với hydrogen, cặp electron dùng chung bị kéo lệch về phía oxygen.
- **Tính phân cực:** Vùng gần nguyên tử oxygen tích điện âm nhẹ ($\\delta^-$), còn vùng gần hai nguyên tử hydrogen tích điện dương nhẹ ($\\delta^+$) tạo nên tính phân cực rõ rệt của phân tử nước.
- **Liên kết hydrogen:** Nhờ tính phân cực, các phân tử nước hút tĩnh điện với nhau và với các phân tử phân cực khác qua **liên kết hydrogen** (liên kết yếu nhưng số lượng rất lớn), tạo mạng lưới nước có sức căng bề mặt, tính liên kết và bám dính cao.

### 3. Vai trò sinh học của nước trong tế bào
- **Dung môi phổ biến:** Hoà tan nhiều chất phân cực và hợp chất ion (như muối khoáng, đường, amino acid) bằng cách tạo lớp vỏ nước (hydrate hoá) bao quanh các ion/phân tử, trong khi các phân tử kị nước (như dầu, mỡ) không tan trong nước.
- **Môi trường và nguyên liệu phản ứng:** Là môi trường khuếch tán cho các phản ứng sinh hoá diễn ra trong tế bào chất; đồng thời trực tiếp tham gia làm nguyên liệu trong phản ứng thuỷ phân và quá trình quang phân li nước ở quang hợp.
- **Vận chuyển và nâng đỡ:** Vận chuyển các chất dinh dưỡng, chất thải trong cơ thể đa bào (máu, mạch gỗ, mạch rây) và duy trì hình dạng, độ trương (sức trương) của tế bào.
- **Điều hoà nhiệt độ:** Nước có nhiệt dung riêng cao và nhiệt bay hơi lớn nhờ mạng lưới liên kết hydrogen, giúp tế bào và cơ thể chống lại những biến đổi nhiệt độ đột ngột của môi trường.`
  },

  5: {
    num: 5,
    chapter: 1,
    part: "Phần một. Sinh học tế bào",
    isPractical: false,
    title: "Các phân tử sinh học",
    subtitle: "Cấu trúc, đơn phân và chức năng của 4 nhóm đại phân tử sinh học: Carbohydrate, Lipid, Protein và Nucleic acid",
    diagramNote: "Nucleotide, DNA xoắn kép/nguyên tắc bổ sung, lớp kép phospholipid, 4 bậc cấu trúc không gian của protein.",
    content: `### 1. Carbohydrate (Chất đường bột)
- **Đặc điểm chung:** Hợp chất hữu cơ chứa chủ yếu 3 nguyên tố $\\text{C, H, O}$; cấu tạo theo nguyên tắc đa phân từ các đơn phân là đường đơn.
- **Đường đơn (Monosaccharide):** Gồm đường $5\\text{ C}$ (pentose: ribose, deoxyribose) và đường $6\\text{ C}$ (hexose: glucose, fructose, galactose). Cung cấp năng lượng trực tiếp, nhanh chóng cho tế bào và làm nguyên liệu tổng hợp các phân tử khác; có tính khử.
- **Đường đôi (Disaccharide):** Gồm hai phân tử đường đơn liên kết với nhau bằng **liên kết glycosidic** (loại bỏ $1\\text{ H}_2\\text{O}$). Ví dụ: **Sucrose** (glucose + fructose – đường mía, dạng vận chuyển ở thực vật), **Lactose** (glucose + galactose – đường sữa), **Maltose** (2 glucose – đường mạch nha).
- **Đường đa (Polysaccharide):** Polymer gồm hàng trăm đến hàng nghìn đơn phân đường đơn nối với nhau:
  - **Tinh bột:** Chất dự trữ năng lượng chính ở thực vật (hỗn hợp amylose mạch thẳng và amylopectin phân nhánh).
  - **Glycogen:** Chất dự trữ năng lượng ngắn hạn ở động vật (gan, cơ) và nấm; cấu trúc phân nhánh mạnh.
  - **Cellulose:** Các đơn phân $\\beta$-glucose liên kết tạo mạch thẳng không phân nhánh, các mạch xếp song song liên kết hydrogen tạo vi sợi bền chắc cấu tạo thành tế bào thực vật.
  - **Chitin:** Cấu tạo thành tế bào nấm và bộ xương ngoài của động vật chân khớp.

### 2. Lipid (Chất béo)
- **Đặc điểm chung:** Nhóm phân tử hữu cơ có tính **kị nước** (không tan hoặc rất ít tan trong nước, chỉ tan trong dung môi hữu cơ không phân cực); **không** cấu tạo theo nguyên tắc đa phân.
- **Triglyceride (Dầu và mỡ):** Gồm $1$ phân tử glycerol liên kết ester với $3$ acid béo. Vai trò: Dự trữ năng lượng dài hạn (cung cấp nhiều năng lượng hơn carbohydrate cùng khối lượng), cách nhiệt và đệm cơ học bảo vệ nội quan. **Mỡ động vật** giàu acid béo no (chỉ có liên kết đơn) nên đặc/rắn ở nhiệt độ phòng; **dầu thực vật** và mỡ cá giàu acid béo không no (có liên kết đôi $\\text{C=C}$) nên ở trạng thái lỏng.
- **Phospholipid:** Gồm $1$ glycerol liên kết với $2$ acid béo (đuôi kị nước) và $1$ nhóm phosphate gắn choline (đầu ưa nước). Tính lưỡng cực này giúp phospholipid tạo nên lớp kép làm nền tảng của mọi màng sinh học.
- **Steroid và Sắc tố/Vitamin:** **Cholesterol** tham gia cấu tạo màng tế bào động vật và là tiền chất tổng hợp hormone steroid (testosterone, estrogen, cortisol); ngoài ra còn có carotenoid, vitamin tan trong dầu ($\\text{A, D, E, K}$). Cần hạn chế tiêu thụ chất béo chuyển hoá (trans fat) để tránh nguy cơ xơ vữa mạch máu.

### 3. Protein (Chất đạm)
- **Đơn phân và liên kết:** Cấu tạo theo nguyên tắc đa phân từ khoảng $20$ loại **amino acid** nối với nhau bằng **liên kết peptide** tạo thành chuỗi polypeptide. Mỗi amino acid gồm nguyên tử $\\text{C}$ trung tâm gắn nhóm amino ($-\\text{NH}_2$), nhóm carboxyl ($-\\text{COOH}$), nguyên tử $\\text{H}$ và gốc bên $R$ đặc trưng.
- **Bốn bậc cấu trúc không gian của Protein:**
  - **Bậc 1:** Trình tự sắp xếp đặc thù của các amino acid trên chuỗi polypeptide (quyết định các bậc cấu trúc cao hơn).
  - **Bậc 2:** Chuỗi polypeptide co xoắn cục bộ dạng xoắn $\\alpha$ hoặc gấp nếp $\\beta$, được giữ bền nhờ liên kết hydrogen giữa các khung liên kết peptide.
  - **Bậc 3:** Cấu hình không gian 3 chiều đặc trưng của toàn bộ một chuỗi polypeptide (nhờ liên kết disulfide $-\\text{S}-\\text{S}-$, liên kết ion, liên kết hydrogen, tương tác kị nước giữa các gốc $R$). Protein thực hiện chức năng chủ yếu từ bậc 3.
  - **Bậc 4:** Sự tổ hợp của hai hay nhiều chuỗi polypeptide có cấu trúc bậc 3 tạo thành phức hợp chức năng (ví dụ: Hemoglobin gồm $2$ chuỗi $\\alpha$ và $2$ chuỗi $\\beta$).
- **Chức năng đa dạng:** Xúc tác sinh học (enzyme), cấu trúc (collagen, keratin), vận chuyển (hemoglobin, protein kênh), vận động (actin, myosin), thụ thể tiếp nhận thông tin, bảo vệ (kháng thể) và điều hoà (hormone insulin).
- **Hiện tượng biến tính:** Khi gặp nhiệt độ cao, pH khắc nghiệt, kim loại nặng hoặc hoá chất bất lợi, các liên kết yếu giữ cấu hình không gian bị phá vỡ làm protein mất cấu trúc 3 chiều đặc thù và mất chức năng sinh học.

### 4. Nucleic acid (DNA và RNA)
- **Cấu tạo nguyên tắc đa phân:** Đơn phân là **nucleotide**, mỗi nucleotide gồm 3 thành phần: đường $5\\text{ C}$ (pentose), nhóm phosphate ($-\\text{PO}_4^{3-}$) và base nitrogen ($\\text{A, T, G, C, U}$). Các nucleotide nối với nhau trên một mạch bằng **liên kết phosphodiester** bền vững theo chiều $5' \\rightarrow 3'$.
- **DNA (Deoxyribonucleic acid):** Đường là deoxyribose ($\\text{C}_5\\text{H}_{10}\\text{O}_4$), 4 loại base là $\\text{A, T, G, C}$. Thường gồm **hai mạch polynucleotide song song ngược chiều** ($5'\\rightarrow 3'$ và $3'\\rightarrow 5'$) xoắn kép quanh trục. Giữa hai mạch, các base liên kết hydrogen theo **nguyên tắc bổ sung**: $\\text{A}$ liên kết với $\\text{T}$ bằng $2$ liên kết hydrogen, $\\text{G}$ liên kết với $\\text{C}$ bằng $3$ liên kết hydrogen. Chức năng: Lưu giữ, bảo quản và truyền đạt thông tin di truyền.
- **RNA (Ribonucleic acid):** Đường là ribose ($\\text{C}_5\\text{H}_{10}\\text{O}_5$), 4 loại base là $\\text{A, U, G, C}$ (thay $\\text{T}$ bằng Uracil $\\text{U}$). Thường có cấu trúc một mạch. Gồm 3 loại chính: **mRNA** (mang thông tin quy định chuỗi polypeptide), **tRNA** (vận chuyển amino acid tới ribosome), **rRNA** (kết hợp protein tạo ribosome); ngoài ra các RNA nhỏ tham gia điều hoà biểu hiện gene.

| Đại phân tử | Đơn phân | Liên kết chính | Chức năng cốt lõi |
|---|---|---|---|
| **Carbohydrate** | Đường đơn (Glucose, Fructose...) | Liên kết glycosidic | Cung cấp/dự trữ năng lượng (tinh bột, glycogen) và cấu trúc (cellulose, chitin) |
| **Lipid** | Không đa phân (Glycerol + Acid béo...) | Liên kết ester | Dự trữ năng lượng dài hạn, cấu tạo màng tế bào (phospholipid), tiền chất hormone |
| **Protein** | $20$ loại Amino acid | Liên kết peptide | Xúc tác (enzyme), cấu trúc, vận chuyển, bảo vệ (kháng thể), thụ thể, điều hoà |
| **Nucleic acid** | Nucleotide ($\text{A, T/U, G, C}$) | Liên kết phosphodiester & hydrogen | Lưu giữ, bảo quản, truyền đạt và biểu hiện thông tin di truyền (DNA, RNA) |`
  },

  6: {
    num: 6,
    chapter: 1,
    part: "Phần một. Sinh học tế bào",
    isPractical: true,
    title: "Thực hành: Nhận biết một số phân tử sinh học",
    subtitle: "Nguyên lí phản ứng màu đặc trưng định tính Tinh bột, Đường khử, Protein và Lipid trên mẫu thực phẩm",
    diagramNote: "Quy trình 4 phép thử định tính: Lugol (tinh bột), Benedict đun nóng (đường khử), Biuret (protein) và nhũ tương ethanol–nước (lipid).",
    content: `### 1. Nguyên lí các phép thử định tính phân tử sinh học
- Thực hiện phép thử định tính trên mẫu thực phẩm tươi; quan sát sự đổi màu hoặc hiện tượng vật lí đặc trưng và đối chiếu với ống đối chứng (nước cất). Lưu ý: Kết quả màu cho biết sự có mặt của chất nhưng không đo chính xác tuyệt đối hàm lượng.

| Phân tử cần nhận biết | Thuốc thử & Điều kiện | Hiện tượng dương tính đặc trưng | Giải thích nguyên lí |
|---|---|---|---|
| **Tinh bột** | Dung dịch **Iodine / Lugol** (ở nhiệt độ phòng) | Dung dịch chuyển màu **xanh tím đến xanh đen** (đun nóng mất màu, để nguội hiện lại) | Các phân tử iodine đi vào và nằm gọn bên trong lòng cấu trúc xoắn lò xo của chuỗi amylose |
| **Đường khử (Glucose)** | Thuốc thử **Benedict** + **đun cách thuỷ** ($80\text{–}100^\circ\text{C}$) | Màu xanh lam của thuốc thử chuyển dần sang **xanh lục → vàng → da cam → kết tủa đỏ gạch** | Đường khử khử ion $\\text{Cu}^{2+}$ (xanh lam) trong môi trường kiềm nóng thành kết tủa $\\text{Cu}_2\\text{O}\\downarrow$ (đỏ gạch) |
| **Protein (Albumin)** | Phản ứng **Biuret** ($\\text{NaOH } 10\\% + \\text{CuSO}_4\\text{ } 1\\%$) | Dung dịch chuyển sang màu **tím xanh / tím hồng** đặc trưng | Ion $\\text{Cu}^{2+}$ trong môi trường kiềm tạo phức chất màu tím với các **liên kết peptide** (từ 2 liên kết trở lên) |
| **Lipid (Dầu thực vật)** | Hoà mẫu trong **Ethanol tuyệt đối**, sau đó thêm **nước cất** | Xuất hiện lớp **nhũ tương trắng đục** như sữa (hoặc nhỏ lên giấy tạo vết trong mờ không bay hơi) | Lipid tan trong dung môi ethanol nhưng không tan trong nước; khi thêm nước lipid tách ra tạo các giọt nhũ tương cực nhỏ tán xạ ánh sáng |

### 2. Quy trình thực hành chuẩn
1. **Bước 1 – Chuẩn bị và ghi nhãn:** Đánh số các ống nghiệm tương ứng với từng mẫu thử và ống đối chứng; nêu dự đoán kết quả trước khi làm.
2. **Bước 2 – Xử lí mẫu:** Nghiền nhỏ hoặc trích lấy dịch lọc thực phẩm (nước hồ tinh bột/cơm nghiền, dịch quả chín/dung dịch glucose, lòng trắng trứng pha loãng, dầu ăn).
3. **Bước 3 – Tiến hành phản ứng:** Chia đều thể tích dịch mẫu vào từng ống nghiệm riêng biệt; nhỏ đúng loại và đúng liều lượng thuốc thử quy định; lắc nhẹ và đun cách thuỷ đối với ống thử đường khử bằng Benedict.
4. **Bước 4 – Quan sát và báo cáo:** Ghi nhận màu sắc, trạng thái tủa/nhũ tương và hoàn thiện bảng báo cáo theo cấu trúc: *Mẫu thử – Thuốc thử – Hiện tượng quan sát – Kết luận*.

### 3. Quy tắc an toàn bắt buộc trong bài thực hành
- Tuyệt đối không nếm bất kì mẫu thực phẩm hay thuốc thử nào trong phòng thí nghiệm.
- Đeo kính bảo hộ và găng tay; cẩn trọng khi thao tác với dung dịch kiềm mạnh ($\\text{NaOH}$ có tính ăn mòn da) và dung dịch iodine.
- Khi làm thí nghiệm lipid với **ethanol (cồn)**, tuyệt đối **không đun hoặc để gần ngọn lửa đèn cồn** vì ethanol rất dễ bốc cháy.
- Sử dụng kẹp gỗ khi lấy ống nghiệm ra khỏi nồi đun cách thuỷ; thu gom hoá chất thừa đúng nơi quy định và rửa tay sạch sẽ sau buổi học.`
  },

  7: {
    num: 7,
    chapter: 2,
    part: "Phần một. Sinh học tế bào",
    isPractical: false,
    title: "Tế bào nhân sơ",
    subtitle: "Đặc điểm chung, cấu tạo thành phần tế bào vi khuẩn và cơ sở khoa học của việc sử dụng thuốc kháng sinh",
    diagramNote: "Cấu trúc tế bào vi khuẩn điển hình có đầy đủ nhãn: màng sinh chất, thành peptidoglycan, vỏ nhầy, tế bào chất, ribosome 70S, vùng nhân (nucleoid), plasmid, roi và lông bám.",
    content: `### 1. Đặc điểm chung của tế bào nhân sơ
- Đại diện gồm **Vi khuẩn (Bacteria)** và **Cổ khuẩn (Archaea)**.
- **Kích thước nhỏ** (thường từ $1\text{–}5\\text{ }\\mu\\text{m}$, chỉ bằng khoảng $1/10$ tế bào nhân thực), cấu tạo đơn giản: **chưa có màng nhân** bao bọc vật chất di truyền, **chưa có hệ thống nội màng** và **không có các bào quan có màng bao bọc**.
- Nhờ kích thước nhỏ nên tỉ lệ diện tích bề mặt trên thể tích ($S/V$) lớn, giúp tế bào nhân sơ trao đổi chất với môi trường rất nhanh, sinh trưởng và phân chia (trực phân/phân đôi) với tốc độ cao, dễ thích nghi với nhiều sinh cảnh.

### 2. Cấu tạo chi tiết của tế bào vi khuẩn
- **Thành phần bắt buộc (có ở hầu hết tế bào nhân sơ):**
  1. **Màng sinh chất:** Cấu tạo từ lớp kép phospholipid và protein; là ranh giới thấm chọn lọc, kiểm soát trao đổi chất, nhận diện tín hiệu và là nơi diễn ra các quá trình chuyển hoá năng lượng (hô hấp/quang hợp ở vi khuẩn).
  2. **Tế bào chất (Bào tương):** Chất keo bán lỏng chứa nước, các hợp chất hữu cơ/vô cơ, enzyme và các hạt dự trữ; là nơi diễn ra các phản ứng sinh hoá của tế bào. Không có hệ thống khung xương tế bào phức tạp như nhân thực.
  3. **Ribosome ($70\\text{S}$):** Bào quan duy nhất (không có màng bao), cấu tạo từ rRNA và protein, là bộ máy dịch mã tổng hợp protein cho tế bào.
  4. **Vùng nhân (Nucleoid):** Không có màng nhân; thường chứa một phân tử **DNA mạch kép dạng vòng** duy nhất (không liên kết với protein histone như ở vi khuẩn) mang thông tin di truyền thiết yếu. Ngoài ra, trong tế bào chất của nhiều vi khuẩn còn có **plasmid** – các phân tử DNA vòng nhỏ độc lập, thường mang các gene quy định khả năng kháng thuốc kháng sinh hoặc chịu độc.
- **Thành phần bổ sung (tuỳ loài vi khuẩn):**
  - **Thành tế bào:** Ở vi khuẩn được cấu tạo từ **peptidoglycan**, quy định hình dạng tế bào và bảo vệ tế bào chống lại áp suất thẩm thấu. Dựa vào cấu trúc thành tế bào và phương pháp nhuộm Gram, vi khuẩn được chia thành **Vi khuẩn Gram dương ($\\text{Gr}^+$)** có lớp peptidoglycan dày (bắt màu tím) và **Vi khuẩn Gram âm ($\\text{Gr}^-$)** có lớp peptidoglycan mỏng kèm màng ngoài lipopolysaccharide (bắt màu đỏ hồng).
  - **Lớp vỏ nhầy (Capsule):** Nằm ngoài thành tế bào, giúp bảo vệ vi khuẩn tránh bị bạch cầu thực bào và hỗ trợ bám dính.
  - **Roi (Tiên mao – Flagella):** Cấu trúc dạng sợi dài giúp vi khuẩn di chuyển hướng đích.
  - **Lông (Nhung mao – Pili):** Sợi ngắn, số lượng nhiều giúp vi khuẩn bám vào bề mặt tế bào vật chủ hoặc tiếp hợp truyền plasmid.

### 3. Liên hệ thực tiễn: Cơ chế tác động của thuốc kháng sinh
- Vi khuẩn gồm nhiều loài có ích (cố định đạm, phân giải chất hữu cơ, lên men) nhưng cũng có loài kí sinh gây bệnh cho người, vật nuôi và cây trồng.
- **Thuốc kháng sinh** tiêu diệt hoặc ức chế đặc hiệu vi khuẩn bằng cách tấn công vào các đích cấu trúc riêng của vi khuẩn (như ức chế tổng hợp thành peptidoglycan hoặc ức chế hoạt động của ribosome $70\\text{S}$) mà không làm hại tế bào người (vốn không có thành tế bào và dùng ribosome $80\\text{S}$).
- Việc lạm dụng hoặc dùng kháng sinh không đủ liều làm gia tăng chọn lọc các dòng **vi khuẩn kháng kháng sinh** (thường truyền nhanh qua plasmid). Lưu ý: **Kháng sinh hoàn toàn không có tác dụng điều trị bệnh do virus**.`
  },

  8: {
    num: 8,
    chapter: 2,
    part: "Phần một. Sinh học tế bào",
    isPractical: false,
    title: "Tế bào nhân thực",
    subtitle: "Cấu trúc nhân tế bào, hệ thống nội màng (ER, Golgi, Lysosome), các bào quan chuyển hoá năng lượng và so sánh thực vật – động vật",
    diagramNote: "Sơ đồ tế bào thực vật/động vật; đường đi protein từ lưới nội chất hạt → túi vận chuyển → bộ máy Golgi → màng/túi tiết; cấu trúc ti thể, lục lạp và màng sinh chất.",
    content: `### 1. Nhân tế bào và hệ thống tổng hợp – vận chuyển nội bào
- **Đặc trưng tế bào nhân thực:** Kích thước lớn ($10\text{–}100\\text{ }\\mu\\text{m}$), có **nhân hoàn chỉnh** được bao bọc bởi màng kép, có hệ thống nội màng chia tế bào chất thành các xoang riêng biệt và nhiều bào quan có màng bao bọc.
- **Nhân tế bào (Nucleus):** Trung tâm điều khiển mọi hoạt động sống. Màng nhân là màng kép có nhiều lỗ màng nhân kiểm soát vận chuyển phân tử lớn (mRNA, tiểu phần ribosome). Chất nhiễm sắc chứa các phân tử **DNA mạch thẳng** liên kết với protein histone tạo nhiễm sắc thể (NST). Nhân con (hạch nhân) là nơi tổng hợp rRNA và lắp ráp tiểu phần ribosome.
- **Ribosome ($80\\text{S}$):** Bào quan không có màng bao, thực hiện tổng hợp protein; phân bố tự do trong bào tương hoặc đính trên mặt ngoài lưới nội chất hạt.
- **Lưới nội chất (Endoplasmic Reticulum – ER):** Hệ thống màng đơn tạo thành mạng lưới ống và xoang dẹp thông với nhau:
  - **Lưới nội chất hạt (RER):** Mặt ngoài đính nhiều ribosome; chức năng tổng hợp, gấp cuộn và biến đổi bước đầu các protein tiết ra ngoài tế bào hoặc protein cấu tạo màng.
  - **Lưới nội chất trơn (SER):** Không đính ribosome, chứa nhiều enzyme; chức năng tổng hợp lipid (phospholipid, hormone steroid), chuyển hoá đường, khử độc thuốc/chất độc (rất phát triển ở tế bào gan) và dự trữ điều hoà ion $\\text{Ca}^{2+}$ (ở tế bào cơ).
- **Bộ máy Golgi:** Gồm chồng túi màng dẹp xếp cạnh nhau nhưng tách biệt; đóng vai trò trạm tiếp nhận, hoàn thiện (gắn thêm gốc đường/lipid tạo glycoprotein, glycolipid), phân loại, đóng gói và phân phối sản phẩm thông qua các **túi vận chuyển (vesicle)**.
- **Lysosome và Peroxisome:** **Lysosome** (màng đơn, chứa hệ enzyme thuỷ phân hoạt động ở pH acid) thực hiện tiêu hoá nội bào, phân huỷ bào quan già/tổn thương và tác nhân lạ để tái chế. **Peroxisome** chứa enzyme oxy hoá (như catalase phân giải $\\text{H}_2\\text{O}_2$ độc hại thành nước và $\\text{O}_2$) và tham gia chuyển hoá acid béo.

### 2. Các bào quan chuyển hoá năng lượng và cấu trúc bảo vệ – nâng đỡ
- **Ti thể (Mitochondria):** Bào quan có **màng kép**; màng ngoài trơn nhẵn, màng trong gấp nếp tạo thành các **mào (cristae)** chứa hệ enzyme hô hấp làm tăng diện tích bề mặt; chất nền (matrix) chứa enzyme chu trình Krebs, **DNA vòng kép và ribosome $70\\text{S}$ riêng**. Chức năng: Là "nhà máy điện" thực hiện **hô hấp tế bào** phân giải chất hữu cơ tạo năng lượng **ATP**.
- **Lục lạp (Chloroplast):** Có ở tế bào thực vật và tảo; bao bởi **màng kép** trơn nhẵn. Bên trong có hệ thống túi dẹp **thylakoid** (xếp chồng tạo **granum**) trên màng chứa sắc tố diệp lục và chuỗi truyền electron; chất nền (**stroma**) chứa enzyme cố định $\\text{CO}_2$, DNA vòng và ribosome riêng. Chức năng: Thực hiện **quang hợp** chuyển năng lượng ánh sáng thành hoá năng trong hợp chất hữu cơ.
- **Không bào (Vacuole):** Bào quan màng đơn chứa dịch; ở tế bào thực vật trưởng thành có **không bào trung tâm lớn** giúp điều hoà áp suất thẩm thấu (sức trương tế bào), dự trữ dinh dưỡng, sắc tố cánh hoa hoặc chất thải/độc tố bảo vệ cây; ở động vật nguyên sinh có không bào tiêu hoá và không bào co bóp.
- **Khung xương tế bào và Trung thể:** Mạng lưới vi ống, vi sợi và sợi trung gian giúp nâng đỡ cơ học, duy trì hình dạng tế bào, neo giữ bào quan và làm đường ray cho túi tiết di chuyển. **Trung thể** (gồm 2 trung tử xếp vuông góc) có ở tế bào động vật, đóng vai trò hình thành thoi phân bào.
- **Màng sinh chất, Thành tế bào và Chất nền ngoại bào (ECM):** Màng sinh chất kiểm soát trao đổi chất và truyền tin. Bên ngoài màng ở thực vật có **thành tế bào cellulose** (có cầu sinh chất nối giữa các tế bào), ở nấm là thành chitin. Tế bào động vật không có thành tế bào nhưng có **chất nền ngoại bào** (gồm glycoprotein như collagen, proteoglycan nối với protein màng integrin) giúp liên kết các tế bào thành mô và phối hợp truyền tin.

### 3. Bảng so sánh tế bào thực vật và tế bào động vật

| Đặc điểm cấu trúc | Tế bào thực vật | Tế bào động vật |
|---|---|---|
| **Thành phần chung** | Đều có nhân hoàn chỉnh, màng sinh chất, tế bào chất, ribosome, lưới nội chất, bộ máy Golgi, ti thể, khung xương tế bào | Đều có nhân hoàn chỉnh, màng sinh chất, tế bào chất, ribosome, lưới nội chất, bộ máy Golgi, ti thể, khung xương tế bào |
| **Thành tế bào** | Có thành cellulose bền vững bao ngoài màng sinh chất | **Không có** thành tế bào (có chất nền ngoại bào ECM) |
| **Lục lạp** | **Có** (ở các tế bào mô giậu/quang hợp) | **Không có** |
| **Không bào** | Có **không bào trung tâm rất lớn** duy trì sức trương | Không có hoặc chỉ có các không bào kích thước nhỏ |
| **Trung thể (Trung tử)** | Thường **không có** ở thực vật bậc cao | **Có** trung thể tham gia hình thành thoi phân bào |
| **Chất dự trữ đường đa** | Tinh bột | Glycogen |`
  },

  9: {
    num: 9,
    chapter: 2,
    part: "Phần một. Sinh học tế bào",
    isPractical: true,
    title: "Thực hành: Quan sát tế bào",
    subtitle: "Kĩ thuật làm tiêu bản hiển vi tạm thời và quan sát cấu trúc tế bào nhân sơ, tế bào thực vật và tế bào động vật",
    diagramNote: "Quy trình tách biểu bì vảy hành / niêm mạc miệng, đậy lamen góc 45° tránh bọt khí và hình ảnh hiển vi tế bào thực vật – động vật.",
    content: `### 1. Mục tiêu và chuẩn bị dụng cụ, mẫu vật
- **Mục tiêu:** Rèn luyện kĩ năng sử dụng kính hiển vi quang học, tự làm tiêu bản hiển vi tạm thời; nhận biết, vẽ hình và so sánh các thành phần quan sát được của tế bào biểu bì thực vật và tế bào niêm mạc miệng người.
- **Dụng cụ và hoá chất:** Kính hiển vi quang học (vật kính $10\\times, 40\\times$), lam kính (phiến kính), lamen (lá kính), ống nhỏ giọt, kim mũi mác, nhíp, dao lam, giấy thấm; dung dịch **iodine loãng (Lugol)** hoặc **xanh methylene**, nước cất, dung dịch muối sinh lí ($\\text{NaCl } 0{,}9\\%$).
- **Mẫu vật:** Củ hành tây/hành ta tươi (hoặc lá thài lài tía), tế bào niêm mạc miệng (hoặc tiêu bản cố định tế bào máu/vi khuẩn).

### 2. Quy trình làm tiêu bản và quan sát hiển vi
1. **Bước 1 – Chuẩn bị lam kính sạch:** Lau sạch lam kính và lamen; nhỏ một giọt nước cất (cho mẫu thực vật) hoặc giọt $\\text{NaCl } 0{,}9\\%$ (cho tế bào động vật) vào giữa lam kính.
2. **Bước 2 – Lấy và dàn phẳng mẫu:**
   - *Với tế bào biểu bì vảy hành:* Dùng dao lam rạch một ô vuông nhỏ trên mặt trong vảy hành, dùng nhíp bóc nhẹ một lớp màng biểu bì thật mỏng (chỉ dày 1 lớp tế bào) đặt vào giọt nước trên lam kính và dàn phẳng.
   - *Với tế bào niêm mạc miệng:* Dùng tăm bông sạch nhẹ nhàng quệt mặt trong má rồi xoay đều vào giọt dung dịch muối sinh lí trên lam kính.
3. **Bước 3 – Nhuộm mẫu và đậy lamen:** Nhỏ 1 giọt thuốc nhuộm (iodine cho hành, xanh methylene cho niêm mạc miệng), chờ đúng thời gian; đặt mép lamen nghiêng góc $45^\circ$ chạm vào giọt dịch rồi hạ từ từ xuống để **không tạo bọt khí**; dùng giấy thấm hút phần dịch thừa tràn ra mép.
4. **Bước 4 – Quan sát trên kính hiển vi:** Luôn bắt đầu quan sát ở **vật kính nhỏ ($10\\times$)** trước để chỉnh ánh sáng, lấy nét thô và chọn vùng mẫu rõ đẹp; sau đó mới chuyển sang **vật kính lớn ($40\\times$)** và chỉnh ốc vi cấp để nhìn rõ nhân, thành tế bào và tế bào chất.
5. **Bước 5 – Vẽ hình và báo cáo:** Vẽ trung thực những cấu trúc thực sự nhìn thấy dưới kính hiển vi (thành tế bào hình đa giác xếp sát nhau ở vảy hành; tế bào niêm mạc miệng hình dạng mềm mại, nhân bắt màu đậm ở giữa) kèm chú thích tên mẫu và độ phóng đại.

### 3. Lưu ý an toàn trong quá trình thực hành
- Khi chuyển sang vật kính $40\\times$, chỉ vặn ốc vi cấp (ốc nhỏ), tuyệt đối không vặn mạnh ốc thứ cấp (ốc to) làm vật kính đâm vỡ tiêu bản và hỏng thấu kính.
- Cầm lam kính ở hai cạnh bên; thao tác dao lam và kim mũi mác cẩn thận dưới sự giám sát.
- Không dùng chung dụng cụ lấy mẫu niêm mạc miệng; sau buổi học ngâm tiêu bản đã dùng vào dung dịch sát khuẩn, thu gom rác đúng quy định và rửa tay bằng xà phòng.`
  },

  10: {
    num: 10,
    chapter: 3,
    part: "Phần một. Sinh học tế bào",
    isPractical: false,
    title: "Trao đổi chất qua màng tế bào",
    subtitle: "Cấu trúc khảm động của màng, vận chuyển thụ động (khuếch tán, thẩm thấu), vận chuyển chủ động và nhập – xuất bào",
    diagramNote: "Cấu trúc màng khảm động, kênh/bơm protein, các hình thức nhập/xuất bào và trạng thái tế bào thực vật – động vật trong môi trường ưu trương/đẳng trương/nhược trương.",
    content: `### 1. Cấu trúc khảm động của màng và vận chuyển thụ động
- **Mô hình khảm – động:** Màng sinh chất gồm khung nền là **lớp kép phospholipid** (đầu ưa nước hướng ra ngoài và vào trong bào tương, đuôi kị nước quay vào nhau ở giữa) được khảm bởi các phân tử **protein xuyên màng, protein bám màng**, glycoprotein, glycolipid và cholesterol (ở tế bào động vật giúp ổn định độ linh động của màng). Nhờ cấu trúc này, màng có đặc tính **thấm chọn lọc**.
- **Vận chuyển thụ động:** Là sự vận chuyển các chất qua màng **theo chiều gradient nồng độ** (từ nơi có nồng độ cao đến nơi có nồng độ thấp) và **không tiêu tốn năng lượng ATP**:
  1. **Khuếch tán đơn giản:** Các phân tử nhỏ, không phân cực, tan trong lipid (như khí $\\text{O}_2, \\text{CO}_2$, hormone steroid) đi xuyên trực tiếp qua lớp kép phospholipid.
  2. **Khuếch tán tăng cường (được hỗ trợ):** Các ion tích điện ($\\text{Na}^+, \\text{K}^+, \\text{Ca}^{2+}$) và các phân tử phân cực kích thước lớn hơn (glucose, amino acid) đi qua màng nhờ sự hỗ trợ của **protein kênh (channel)** hoặc **protein mang/chất tải (carrier)**.
  3. **Thẩm thấu (Osmosis):** Sự khuếch tán của các **phân tử nước** qua màng thấm chọn lọc (chủ yếu qua kênh aquaporin) từ nơi có nồng độ chất tan thấp (thế nước cao, áp suất thẩm thấu thấp) sang nơi có nồng độ chất tan cao (thế nước thấp, áp suất thẩm thấu cao).
- **Các yếu tố ảnh hưởng tốc độ khuếch tán:** Độ chênh lệch nồng độ hai bên màng, nhiệt độ môi trường, kích thước và độ phân cực của phân tử, diện tích bề mặt màng và số lượng protein vận chuyển trên màng.

### 2. Ba loại môi trường thẩm thấu và phản ứng của tế bào

| Loại môi trường bên ngoài | So sánh nồng độ chất tan với bên trong tế bào | Chiều di chuyển ròng của phân tử nước | Trạng thái tế bào Hồng cầu (Động vật) | Trạng thái tế bào Thực vật |
|---|---|---|---|---|
| **Môi trường Đẳng trương** | Nồng độ chất tan hiệu dụng ngoài **bằng** trong | Nước đi vào và đi ra cân bằng nhau | Giữ nguyên hình dạng đĩa lõm hai mặt bình thường | Tế bào bình thường (mềm vừa phải) |
| **Môi trường Ưu trương** | Nồng độ chất tan bên ngoài **cao hơn** bên trong | Nước thẩm thấu **đi ra ngoài** tế bào | Tế bào mất nước, **co rúm / nhăn nheo** | Mất sức trương, màng sinh chất tách khỏi thành tế bào (**co nguyên sinh**) |
| **Môi trường Nhược trương** | Nồng độ chất tan bên ngoài **thấp hơn** bên trong | Nước thẩm thấu **đi vào trong** tế bào | Tế bào hút nước căng phồng và có thể **vỡ (tan máu)** | Hút nước tạo **sức trương (trương nước)** nhưng không vỡ nhờ thành cellulose vững chắc |

### 3. Vận chuyển chủ động và vận chuyển bằng biến dạng màng
- **Vận chuyển chủ động (Tích cực):** Vận chuyển các chất qua màng **ngược chiều gradient nồng độ** (từ nơi nồng độ thấp sang nơi nồng độ cao), bắt buộc cần **protein bơm đặc hiệu** (như bơm $\\text{Na}^+ - \\text{K}^+$) và **tiêu tốn năng lượng ATP**. Giúp tế bào lấy được chất cần thiết ngay cả khi ngoài môi trường rất ít và duy trì điện thế màng.
- **Vận chuyển các đại phân tử/hạt lớn bằng biến dạng màng sinh chất (có tiêu tốn năng lượng ATP):**
  - **Thực bào (Phagocytosis):** Màng sinh chất lõm vào tạo chân giả bao lấy các hạt rắn lớn hoặc vi khuẩn tạo thành túi thực bào rồi kết hợp với lysosome để tiêu hoá ("tế bào ăn").
  - **Ẩm bào (Pinocytosis):** Màng lõm vào bao lấy các giọt dịch ngoại bào chứa chất hoà tan đưa vào trong ("tế bào uống").
  - **Nhập bào nhờ thụ thể:** Các thụ thể đặc hiệu trên màng liên kết chọn lọc với phân tử đích (như hạt LDL-cholesterol) rồi màng mới lõm vào tạo túi.
  - **Xuất bào (Exocytosis):** Các túi tiết bên trong tế bào tiến đến dung hợp với màng sinh chất để giải phóng các đại phân tử (protein tiết, enzyme, hormone, chất dẫn truyền thần kinh) ra bên ngoài.
- **Ứng dụng thực tiễn:** Ngâm rau sống vào nước sạch (nhược trương) làm tế bào trương nước giúp rau tươi giòn; ướp muối/ngâm đường thực phẩm tạo môi trường ưu trương làm vi sinh vật bị co nguyên sinh mất nước không thể sinh sản; cây trồng trên đất nhiễm mặn (ưu trương) không hút được nước dẫn tới héo sinh lí.`
  },

  11: {
    num: 11,
    chapter: 3,
    part: "Phần một. Sinh học tế bào",
    isPractical: true,
    title: "Thực hành: Thí nghiệm co và phản co nguyên sinh",
    subtitle: "Quan sát trực tiếp sự thẩm thấu của nước qua màng tế bào biểu bì lá thài lài tía và cơ chế đóng mở khí khổng",
    diagramNote: "Sơ đồ tế bào biểu bì lá thài lài tía ở trạng thái bình thường → co nguyên sinh trong dung dịch NaCl ưu trương → phản co nguyên sinh khi nhỏ nước cất.",
    content: `### 1. Nguyên lí thí nghiệm và chuẩn bị
- **Nguyên lí:** Khi nhỏ dung dịch muối $\\text{NaCl}$ ưu trương quanh tế bào biểu bì thực vật, nước từ trong không bào và tế bào chất thẩm thấu ra ngoài làm thể tích khối nguyên sinh thu nhỏ lại, màng sinh chất tách dần khỏi thành tế bào (hiện tượng **co nguyên sinh**). Khi thay thế dung dịch muối bằng nước cất (nhược trương), nước thẩm thấu ngược trở lại vào tế bào làm khối nguyên sinh phồng to và áp sát lại vào thành tế bào (hiện tượng **phản co nguyên sinh**).
- **Dụng cụ, hoá chất và mẫu vật:** Kính hiển vi quang học (vật kính $10\\times, 40\\times$), lam kính, lamen, dao lam, nhíp, ống nhỏ giọt, giấy thấm; dung dịch $\\text{NaCl}$ (hoặc $\\text{KNO}_3$, đường sucrose) ưu trương, nước cất; lá **thài lài tía** tươi (không bào chứa sắc tố anthocyanin màu tím hồng giúp quan sát rõ sự co/giãn của khối nguyên sinh mà không cần nhuộm).

### 2. Quy trình tiến hành thí nghiệm
1. **Bước 1 – Quan sát tế bào bình thường:** Dùng dao lam và nhíp tách một mảnh mỏng biểu bì mặt dưới lá thài lài tía đặt lên lam kính có sẵn 1 giọt nước cất, đậy lamen. Quan sát ở vật kính $10\\times$ rồi chuyển sang $40\\times$: tế bào có màu tím hồng tràn đầy sát thành tế bào, các tế bào hạt đậu của khí khổng mở.
2. **Bước 2 – Gây co nguyên sinh:** Không lấy tiêu bản khỏi bàn kính; nhỏ $1\text{–}2$ giọt dung dịch $\\text{NaCl}$ vào một bên mép lamen, đồng thời đặt miếng giấy thấm ở mép đối diện để rút nước ra và kéo dung dịch muối tràn qua mẫu biểu bì. Quan sát sau vài phút: khối chất nguyên sinh màu tím co tròn lại ở giữa hoặc dồn về một góc, tách rời khỏi thành cellulose; tế bào khí khổng mất nước làm lỗ khí đóng lại.
3. **Bước 3 – Gây phản co nguyên sinh:** Nhỏ $1\text{–}2$ giọt **nước cất** vào một mép lamen và dùng giấy thấm hút ở mép đối diện để rửa trôi muối. Quan sát hiện tượng khối nguyên sinh màu tím nở dần trở lại như ban đầu và khí khổng mở ra.

### 3. Giải thích kết quả và quy tắc an toàn
- **Lưu ý khoa học:** Nếu nồng độ muối quá cao hoặc thời gian co nguyên sinh kéo dài quá lâu, tế bào mất nước kiệt quệ sẽ chết, màng sinh chất mất tính thấm chọn lọc nên không thể phản co nguyên sinh được nữa.
- **Liên hệ đóng – mở khí khổng:** Khi tế bào hình hạt đậu (tế bào bảo vệ) hút nước, sức trương tăng làm thành mỏng phía ngoài căng mạnh kéo thành dày phía trong cong theo khiến **khí khổng mở**; khi mất nước, sức trương giảm làm **khí khổng đóng**.
- **An toàn:** Thao tác dao lam cẩn thận, cắt hướng ra xa tay, không chuyền tay dao lam trần; thu gom mảnh vỡ thuỷ tinh/dao lam đúng hộp an toàn và rửa tay sạch sẽ.`
  },

  12: {
    num: 12,
    chapter: 3,
    part: "Phần một. Sinh học tế bào",
    isPractical: false,
    title: "Truyền tin tế bào",
    subtitle: "Các phương thức truyền tin giữa các tế bào và 3 giai đoạn của quá trình truyền tin tế bào (Tiếp nhận – Truyền tin – Đáp ứng)",
    diagramNote: "Sơ đồ 4 kiểu truyền tin giữa các tế bào và chu trình 3 bước: phân tử tín hiệu → thụ thể → chuỗi truyền tin nội bào → phân tử đích/đáp ứng.",
    content: `### 1. Khái niệm và các phương thức truyền tin giữa các tế bào
- **Truyền tin tế bào** là sự phát tán và nhận các phân tử tín hiệu qua lại giữa các tế bào (cùng một cơ thể hoặc giữa các cá thể cùng loài/khác loài) nhằm phối hợp hoạt động sống và trả lời kích thích môi trường. Bản chất phân tử tín hiệu rất đa dạng: amino acid, peptide, protein, nucleotide, lipid (hormone steroid), hoặc chất khí hoà tan (như $\\text{NO}$, ethylene).
- **Bốn phương thức truyền tin cơ bản trong cơ thể đa bào:**
  1. **Truyền tin trực tiếp:** Các phân tử tín hiệu đi trực tiếp từ bào tương tế bào này sang tế bào kế cận thông qua **cầu sinh chất** (ở thực vật) hoặc **mối nối hở – gap junction** (ở động vật), hoặc do sự tiếp xúc trực tiếp giữa các phân tử bề mặt màng của hai tế bào (như tế bào miễn dịch nhận diện kháng nguyên).
  2. **Truyền tin cận tiết (Paracrine):** Tế bào tiết các phân tử tín hiệu vào dịch ngoại bào, khuếch tán tác động lên các tế bào đích nằm **lân cận** ngay gần đó (ví dụ: các yếu tố sinh trưởng kích thích liền vết thương).
  3. **Truyền tin qua synapse:** Kiểu truyền tin chuyên biệt ở hệ thần kinh; xung điện đi đến chùy synapse kích thích giải phóng **chất dẫn truyền thần kinh** (như acetylcholine) qua khe synapse cực hẹp tác động lên tế bào thần kinh hoặc tế bào cơ kế tiếp.
  4. **Truyền tin nội tiết (Khoảng cách xa – Endocrine):** Các tuyến nội tiết tiết **hormone** (như insulin, adrenaline, estrogen) vào máu (ở động vật) hoặc nhựa cây (ở thực vật) để vận chuyển đến các tế bào đích nằm ở **rất xa** trong cơ thể.

### 2. Ba giai đoạn của quá trình truyền tin trong tế bào
1. **Giai đoạn 1 – Tiếp nhận (Reception):** Phân tử tín hiệu (ligand) từ bên ngoài gắn một cách đặc hiệu vào **protein thụ thể (receptor)** của tế bào đích theo cơ chế "chìa khoá – ổ khoá":
   - *Thụ thể màng:* Dành cho các phân tử tín hiệu ưa nước hoặc kích thước lớn không qua được lớp kép phospholipid (như peptide, protein, adrenaline).
   - *Thụ thể nội bào (trong bào tương hoặc trong nhân):* Dành cho các phân tử tín hiệu nhỏ, kị nước có khả năng khuếch tán trực tiếp qua màng sinh chất (như hormone steroid: testosterone, estrogen, hormone tuyến giáp); phức hợp *tín hiệu – thụ thể* thường đi thẳng vào nhân để hoạt hoá phiên mã gene.
2. **Giai đoạn 2 – Truyền tín hiệu (Transduction):** Khi phân tử tín hiệu gắn vào, thụ thể thay đổi cấu hình không gian, khởi động một **chuỗi các phản ứng truyền tin phân tử nối tiếp nhau** (thường thông qua cơ chế phosphoryl hoá/khử phosphoryl hoá các protein bởi enzyme kinase/phosphatase hoặc sử dụng các chất truyền tin thứ hai như $\\text{cAMP}, \\text{Ca}^{2+}$). Quá trình này giúp **khuếch đại tín hiệu** lên gấp nhiều lần và điều phối tín hiệu chính xác.
3. **Giai đoạn 3 – Đáp ứng (Response):** Tín hiệu cuối cùng tác động lên các phân tử đích trong tế bào, dẫn đến sự thay đổi hoạt động sinh lí đặc trưng: bật/tắt sự biểu hiện gene trong nhân, hoạt hoá enzyme chuyển hoá (như phân giải glycogen thành glucose), tái sắp xếp khung xương tế bào, vận động hoặc kích thích tế bào phân chia.

### 3. Tính đặc hiệu và sự điều chỉnh đáp ứng của tế bào
- **Vì sao cùng một tín hiệu nhưng các tế bào khác nhau lại đáp ứng khác nhau?** Do mỗi loại tế bào chuyên hoá có bộ protein thụ thể, các protein trung gian trong chuỗi truyền tin, bộ gene đang hoạt động và các protein thực hiện đáp ứng khác nhau (ví dụ: hormone adrenaline làm tế bào cơ tim co bóp nhanh hơn nhưng lại làm tế bào gan phân giải glycogen).
- Tế bào có thể tự điều chỉnh số lượng và độ nhạy của các thụ thể trên màng để thích ứng với sự thay đổi nồng độ tín hiệu.`
  },

  13: {
    num: 13,
    chapter: 4,
    part: "Phần một. Sinh học tế bào",
    isPractical: false,
    title: "Khái quát về chuyển hoá vật chất và năng lượng",
    subtitle: "Các dạng năng lượng, đồng hoá – dị hoá, cấu tạo và chức năng đồng tiền năng lượng ATP, cơ chế và điều hoà hoạt tính Enzyme",
    diagramNote: "Chu trình ATP – ADP, cơ chế xúc tác enzyme – cơ chất – sản phẩm, đồ thị hoạt tính theo nhiệt độ/pH/nồng độ và sơ đồ ức chế ngược.",
    content: `### 1. Các dạng năng lượng và chuyển hoá vật chất trong tế bào
- **Các dạng năng lượng:** Trong tế bào tồn tại nhiều dạng năng lượng như **hoá năng** (năng lượng tích luỹ trong các liên kết hoá học của phân tử hữu cơ – dạng chủ yếu nhất), **động năng** (chuyển động của các phần tử, bào quan), **nhiệt năng** (duy trì thân nhiệt), **điện năng** (chênh lệch nồng độ ion hai bên màng tạo điện thế màng).
- **Chuyển hoá vật chất** là tập hợp tất cả các phản ứng hoá học diễn ra bên trong tế bào, luôn đi kèm với sự chuyển hoá năng lượng và gồm hai quá trình đối lập nhưng thống nhất:
  - **Đồng hoá (Anabolism):** Quá trình tổng hợp các chất hữu cơ phức tạp đặc trưng cho tế bào từ các chất đơn giản, **tích luỹ năng lượng** (cần cung cấp ATP).
  - **Dị hoá (Catabolism):** Quá trình phân giải các chất hữu cơ phức tạp thành các chất đơn giản hơn, **giải phóng năng lượng** (một phần tích luỹ vào ATP, một phần toả ra dưới dạng nhiệt).

### 2. ATP – "Đồng tiền năng lượng" của tế bào
- **Cấu tạo phân tử ATP (Adenosine triphosphate):** Gồm 3 thành phần: $1$ base nitrogen **Adenine**, $1$ đường $5\\text{ C}$ **Ribose** và **$3$ nhóm phosphate** nối với nhau. Liên kết giữa hai nhóm phosphate ngoài cùng là các **liên kết cao năng** (dễ bị phá vỡ và giải phóng nhiều năng lượng).
- **Cơ chế truyền năng lượng (Chu trình ATP – ADP):**
  - *Giải phóng năng lượng (Thuỷ phân):* $\\text{ATP} + \\text{H}_2\\text{O} \\rightarrow \\text{ADP} + \\text{P}_i + \\text{Năng lượng}$ (nhóm phosphate cuối tách ra chuyển cho các phân tử khác gọi là sự phosphoryl hoá).
  - *Tái tổng hợp ATP:* $\\text{ADP} + \\text{P}_i + \\text{Năng lượng (từ hô hấp/quang hợp)} \\rightarrow \\text{ATP} + \\text{H}_2\\text{O}$.
- **Vai trò của ATP:** Cung cấp năng lượng tức thời cho mọi hoạt động sống: tổng hợp các đại phân tử sinh học (protein, DNA...), vận chuyển chủ động các chất qua màng, sinh công cơ học (co cơ, di chuyển NST, vận động roi/lông) và dẫn truyền xung thần kinh.

### 3. Enzyme – Chất xúc tác sinh học
- **Bản chất và cấu tạo:** Enzyme là chất xúc tác sinh học được tổng hợp trong tế bào sống, giúp làm **giảm năng lượng hoạt hoá** của phản ứng nên làm tăng tốc độ phản ứng sinh hoá lên hàng triệu lần ở điều kiện nhiệt độ và pH sinh lí bình thường mà bản thân nó không bị tiêu hao sau phản ứng. Hầu hết enzyme có bản chất là **protein** (một số enzyme còn cần thêm thành phần phi protein gọi là **cofactor** như ion kim loại $\\text{Fe}^{2+}, \\text{Zn}^{2+}, \\text{Mg}^{2+}$ hoặc phân tử hữu cơ **coenzyme** dẫn xuất từ vitamin như $\\text{NAD}^+, \\text{FAD}$).
- **Cơ chế tác động và tính đặc hiệu:** Trên phân tử enzyme có một vùng cấu trúc không gian đặc biệt gọi là **trung tâm hoạt động (active site)** có cấu hình tương thích hoàn toàn với **cơ chất ($S$)**.
  $$\\text{Enzyme }(E) + \\text{Cơ chất }(S) \\rightleftharpoons \\text{Phức hợp }E\text{–}S \\rightarrow \\text{Enzyme }(E) + \\text{Sản phẩm }(P)$$
- **Các yếu tố ảnh hưởng đến hoạt tính enzyme:**
  - **Nhiệt độ và pH:** Mỗi enzyme có một khoảng nhiệt độ tối ưu (ở người khoảng $35\text{–}40^\circ\text{C}$) và pH tối ưu (như pepsin dạ dày $\\text{pH } \\approx 2$, amylase nước bọt $\\text{pH } \\approx 7$); vượt quá ngưỡng tối ưu làm enzyme bị biến tính mất hoạt tính.
  - **Nồng độ cơ chất và enzyme:** Khi lượng enzyme cố định, tăng nồng độ cơ chất làm tốc độ phản ứng tăng dần cho đến khi tất cả trung tâm hoạt động đều **bão hoà** cơ chất thì tốc độ đạt cực đại.
  - **Chất hoạt hoá và chất ức chế:** Chất ức chế cạnh tranh có cấu tạo giống cơ chất nên tranh giành trung tâm hoạt động; chất ức chế không cạnh tranh gắn vào vùng điều chỉnh (dị lập thể) làm biến đổi cấu hình trung tâm hoạt động.
- **Điều hoà chuyển hoá bằng ức chế ngược (Feedback inhibition):** Khi sản phẩm cuối cùng của một chuỗi phản ứng chuyển hoá được tạo ra dư thừa, chính sản phẩm đó sẽ quay lại đóng vai trò là chất ức chế gắn vào enzyme xúc tác cho phản ứng đầu tiên của chuỗi, giúp tế bào tiết kiệm nguyên liệu và năng lượng.`
  }
};

module.exports = { chapters, lessonsP1 };
