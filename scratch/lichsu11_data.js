// Dữ liệu Tổng hợp Lịch sử 11 - Bộ sách Kết nối tri thức với cuộc sống
const part1 = require('./lichsu11_data_part1.js');
const part2 = require('./lichsu11_data_part2.js');

const topics = [
  {
    num: 1,
    title: "Chủ đề 1 – Cách mạng tư sản và sự phát triển của chủ nghĩa tư bản",
    shortTitle: "Chủ đề 1: Cách mạng tư sản & CNTB",
    icon: "fa-industry",
    lessons: [1, 2]
  },
  {
    num: 2,
    title: "Chủ đề 2 – Chủ nghĩa xã hội từ năm 1917 đến nay",
    shortTitle: "Chủ đề 2: Chủ nghĩa xã hội (1917–nay)",
    icon: "fa-hammer",
    lessons: [3, 4]
  },
  {
    num: 3,
    title: "Chủ đề 3 – Quá trình giành độc lập dân tộc của các quốc gia Đông Nam Á",
    shortTitle: "Chủ đề 3: Độc lập dân tộc Đông Nam Á",
    icon: "fa-flag",
    lessons: [5, 6]
  },
  {
    num: 4,
    title: "Chủ đề 4 – Chiến tranh bảo vệ Tổ quốc và chiến tranh giải phóng dân tộc trong lịch sử Việt Nam",
    shortTitle: "Chủ đề 4: Chiến tranh bảo vệ Tổ quốc VN",
    icon: "fa-shield-halved",
    lessons: [7, 8]
  },
  {
    num: 5,
    title: "Chủ đề 5 – Một số cuộc cải cách lớn trong lịch sử Việt Nam (trước năm 1858)",
    shortTitle: "Chủ đề 5: Ba cuộc cải cách lớn ở VN",
    icon: "fa-scroll",
    lessons: [9, 10, 11]
  },
  {
    num: 6,
    title: "Chủ đề 6 – Lịch sử bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông",
    shortTitle: "Chủ đề 6: Việt Nam và Biển Đông",
    icon: "fa-anchor",
    lessons: [12, 13]
  }
];

const lessons = { ...part1, ...part2 };

// Bảng mốc thời gian trọng tâm
const timelineTable = [
  { year: "1511", event: "Bồ Đào Nha đánh chiếm cảng biển chiến lược Ma-lắc-ca (Đông Nam Á)" },
  { year: "1771", event: "Ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ phất cờ khởi nghĩa Tây Sơn" },
  { year: "1776", event: "Bản Tuyên ngôn Độc lập của 13 thuộc địa Anh ở Bắc Mỹ được công bố (4-7-1776)" },
  { year: "1785", event: "Nguyễn Huệ chỉ huy nghĩa quân Tây Sơn đại phá 5 vạn quân Xiêm ở Rạch Gầm – Xoài Mút" },
  { year: "1789", event: "Quang Trung đại phá 29 vạn quân Mãn Thanh tại Ngọc Hồi – Đống Đa (Tết Kỷ Dậu)" },
  { year: "1791–1841", event: "Thời gian sinh sống và trị vì của vua Minh Mạng (Hoàng đế thứ hai triều Nguyễn)" },
  { year: "1802", event: "Nguyễn Ánh lên ngôi Hoàng đế, lập ra triều Nguyễn, đặt niên hiệu Gia Long" },
  { year: "1820", event: "Vua Minh Mạng lên ngôi, khởi xướng cuộc đại cải cách hành chính" },
  { year: "1831–1832", event: "Vua Minh Mạng bãi bỏ Bắc Thành và Gia Định Thành, chia cả nước thành 30 tỉnh và 1 phủ Thừa Thiên" },
  { year: "1858", event: "Liên quân Pháp – Tây Ban Nha nổ súng tấn công bán đảo Sơn Trà (Đà Nẵng), mở đầu xâm lược Việt Nam" },
  { year: "1868", event: "Bắt đầu cuộc Duy tân Minh Trị ở Nhật Bản; vua Ra-ma V khởi xướng cải cách ở Xiêm (Thái Lan)" },
  { year: "1871", event: "Đế quốc Đức hoàn thành thống nhất; CNTB hoàn toàn được xác lập ở châu Âu và Bắc Mỹ" },
  { year: "1911", event: "Cách mạng Tân Hợi do Tôn Trung Sơn lãnh đạo lật đổ triều Mãn Thanh ở Trung Quốc" },
  { year: "1917", event: "Cách mạng tháng Mười Nga thắng lợi, Chính quyền Xô viết đầu tiên trên thế giới ra đời" },
  { year: "30-12-1922", event: "Liên bang Cộng hoà xã hội chủ nghĩa Xô viết (Liên Xô) chính thức được thành lập" },
  { year: "1-10-1949", event: "Nước Cộng hoà Nhân dân Trung Hoa tuyên bố thành lập, đi lên chủ nghĩa xã hội" },
  { year: "1959 / 1961", event: "Cách mạng Cu-ba thắng lợi (1959) / Cu-ba tuyên bố bước vào thời kì xây dựng CNXH (1961)" },
  { year: "8-8-1967", event: "Hiệp hội các quốc gia Đông Nam Á (ASEAN) thành lập tại Băng Cốc (Thái Lan)" },
  { year: "1975–1976", event: "Đại thắng mùa Xuân 1975 giải phóng miền Nam / Thống nhất đất nước về mặt nhà nước (1976)" },
  { year: "1986", event: "Việt Nam và Lào chính thức bắt đầu công cuộc Đổi mới toàn diện đất nước" },
  { year: "12-1991", event: "Liên bang Cộng hòa xã hội chủ nghĩa Xô viết (Liên Xô) chính thức tan rã" },
  { year: "2002", event: "ASEAN và Trung Quốc kí kết Tuyên bố về ứng xử của các bên ở Biển Đông (DOC)" }
];

// Thuật ngữ cần nắm
const terms = [
  {
    term: "Cách mạng tư sản",
    def: "Cuộc cách mạng do giai cấp tư sản và đồng minh (quý tộc mới, chủ nô...) lãnh đạo nhằm lật đổ chế độ phong kiến hoặc ách thống trị thực dân, thiết lập nhà nước tư sản và mở đường cho chủ nghĩa tư bản phát triển."
  },
  {
    term: "Nhiệm vụ dân tộc",
    def: "Nhiệm vụ giành độc lập dân tộc khỏi ách thống trị thực dân, hoặc xóa bỏ tình trạng phong kiến cát cứ, chia rẽ để thống nhất thị trường dân tộc và lãnh thổ quốc gia."
  },
  {
    term: "Nhiệm vụ dân chủ",
    def: "Nhiệm vụ xóa bỏ chế độ quân chủ chuyên chế độc đoán và các đặc quyền phong kiến, xác lập thể chế nhà nước pháp quyền và các quyền tự do dân chủ tư sản cho người dân."
  },
  {
    term: "Tổ chức độc quyền",
    def: "Sự liên minh chặt chẽ giữa các nhà tư bản lớn để nắm giữ phần lớn việc sản xuất và tiêu thụ một hoặc nhiều mặt hàng, nhằm chi phối thị trường và thu lợi nhuận độc quyền cao nhất."
  },
  {
    term: "Chủ nghĩa tư bản hiện đại",
    def: "Giai đoạn phát triển của CNTB từ sau Chiến tranh thế giới thứ hai đến nay, đặc trưng bởi sự kết hợp giữa sức mạnh kinh tế của các tổ chức độc quyền tư nhân với sức mạnh chính trị của nhà nước tư sản, ứng dụng thành tựu khoa học – công nghệ cao."
  },
  {
    term: "Cải cách",
    def: "Cuộc đổi mới, điều chỉnh thể chế theo hướng tiến bộ, văn minh hơn nhưng không làm thay đổi bản chất của chế độ chính trị - xã hội hiện hành."
  },
  {
    term: "Chính sách Chia để trị",
    def: "Thủ đoạn thâm độc của chủ nghĩa thực dân nhằm khoét sâu sự chia rẽ sắc tộc, tôn giáo, địa phương và tầng lớp nhằm làm suy yếu sức mạnh đoàn kết kháng chiến của nhân dân bản địa."
  },
  {
    term: "Công nghiệp hoá",
    def: "Quá trình biến đổi nền sản xuất từ thủ công, năng suất thấp sang nền sản xuất cơ khí hoá, hiện đại hoá trong mọi ngành kinh tế, trước hết là công nghiệp chế tạo."
  },
  {
    term: "Chính sách Hạn điền & Hạn nô",
    def: "Hệ thống chính sách do Hồ Quý Ly ban hành nhằm giới hạn diện tích sở hữu ruộng đất tư (hạn điền) và số lượng nô tì (hạn nô) của vương hầu quý tộc để sung công quỹ nhà nước."
  },
  {
    term: "Chế độ Hồi tỵ",
    def: "Quy định nghiêm ngặt cấm chỉ quan lại phong kiến không được làm việc, chấm thi hay xử án tại quê quán, quê vợ hoặc nơi có người thân thích ruột thịt đang làm quan nhằm chống tham nhũng, bè phái."
  },
  {
    term: "UNCLOS 1982",
    def: "Công ước Liên hợp quốc về Luật Biển năm 1982 (United Nations Convention on the Law of the Sea), được coi là 'Hiến pháp về biển và đại dương' của nhân loại."
  },
  {
    term: "DOC 2002",
    def: "Tuyên bố về ứng xử của các bên ở Biển Đông (Declaration on the Conduct of Parties in the South China Sea) kí năm 2002 giữa ASEAN và Trung Quốc nhằm duy trì hòa bình, ổn định và giải quyết tranh chấp biển đảo."
  }
];

// Gợi ý hình học liệu và phương pháp đọc bản đồ/sơ đồ
const mapDiagramNotes = [
  {
    lesson: "Bài 1",
    title: "Tranh ngày phá ngục Ba-xti (14-7-1789) & Bản đồ Cách mạng tư sản",
    guide: "Khai thác hình ảnh ngục Ba-xti sụp đổ để làm rõ khí thế quật khởi của quần chúng nhân dân; phân tích bản đồ để thấy rõ không gian lan tỏa của làn sóng cách mạng tư sản từ Anh, Bắc Mỹ sang Pháp và châu Âu."
  },
  {
    lesson: "Bài 2",
    title: "Lược đồ thuộc địa & Sơ đồ Tổ chức Độc quyền",
    guide: "Quan sát lược đồ đế quốc Anh 'Mặt Trời không bao giờ lặn' với diện tích 33 triệu km²; vẽ sơ đồ phân hóa từ tự do cạnh tranh chuyển dịch sang các hình thức độc quyền (Các-ten, Xanh-đi-ca, Tơ-rớt)."
  },
  {
    lesson: "Bài 3",
    title: "Lược đồ Liên Xô năm 1922 & Quốc huy Liên bang đầu tiên",
    guide: "Xác định vị trí địa lí của 4 nước cộng hòa sáng lập (Nga, U-crai-na, Bê-lô-rút-xi-a, Ngoại Cáp-ca-dơ); phân tích biểu tượng búa liềm và dải ruy băng ghi khẩu hiệu 'Vô sản tất cả các nước, đoàn kết lại!' trên quốc huy."
  },
  {
    lesson: "Bài 4",
    title: "Bản đồ các nước XHCN Đông Âu & Biểu đồ tăng trưởng GDP Trung Quốc",
    guide: "Đối chiếu vị trí các nhà nước dân chủ nhân dân Đông Âu; khai thác đồ thị tăng trưởng GDP của Trung Quốc từ 367,9 tỉ NDT (1978) lên 114 nghìn tỉ NDT (2021) để chứng minh sức sống của kinh tế thị trường XHCN."
  },
  {
    lesson: "Bài 5–6",
    title: "Lược đồ thuộc địa Đông Nam Á & Trục thời gian 3 giai đoạn độc lập",
    guide: "Phân biệt rõ màu sắc các đế quốc cai trị (Anh, Pháp, Hà Lan, Tây Ban Nha, Mỹ); ghi nhớ vị trí trung lập của Xiêm; theo dõi trục thời gian làn sóng giải phóng dân tộc năm 1945 và mốc thành lập ASEAN (1967)."
  },
  {
    lesson: "Bài 7–8",
    title: "Lược đồ khởi nghĩa Lam Sơn (1418–1427) & Phong trào Tây Sơn (1771–1789)",
    guide: "Theo dõi 3 mũi tiến quân giải phóng Nghệ An - Diễn Châu và chiến trường Chi Lăng - Xương Giang của Lam Sơn; phân tích nghệ thuật hành quân thần tốc của Nguyễn Huệ từ Phú Xuân ra Thăng Long đại phá quân Thanh."
  },
  {
    lesson: "Bài 9–11",
    title: "Sơ đồ bộ máy nhà nước thời Lê Thánh Tông & Bản đồ 30 tỉnh thời Minh Mạng",
    guide: "Vẽ sơ đồ phân cấp: Hoàng đế -> Lục Bộ -> Lục Tự / Lục Khoa -> 13 Thừa tuyên; quan sát ranh giới 30 tỉnh thành lập trong những năm 1831–1832 để thấy rõ nguồn gốc phân chia địa giới hành chính hiện đại."
  },
  {
    lesson: "Bài 12–13",
    title: "Bản đồ vị trí chiến lược Biển Đông & Quá trình thực thi chủ quyền Hoàng Sa - Trường Sa",
    guide: "Xác định tọa độ và 8 cụm đảo của Trường Sa; đối chiếu các thư tịch cổ ('Toản tập Thiên Nam tứ chí lộ đồ thư', 'Đại Nam nhất thống toàn đồ') để chứng minh chủ quyền pháp lí liên tục, hòa bình và không thể tranh cãi của Việt Nam."
  }
];

// Bộ đề 20 câu hỏi Đấu trường Lịch sử 11 (45:00)
const examQuestions = [
  {
    id: 1,
    lessonNum: 1,
    lessonTitle: "Một số vấn đề chung về cách mạng tư sản",
    q: "Bốn tiền đề cơ bản làm bùng nổ các cuộc cách mạng tư sản thời cận đại bao gồm:",
    options: [
      "A. Kinh tế, Chính trị, Xã hội và Tư tưởng",
      "B. Quân sự, Ngoại giao, Địa lí và Tôn giáo",
      "C. Nông nghiệp, Thủ công nghiệp, Thương nghiệp và Dân số",
      "D. Khoa học, Nghệ thuật, Văn học và Giáo dục"
    ],
    answer: 0,
    explain: "Mọi cuộc cách mạng tư sản đều bắt nguồn từ sự chín muồi và đan xen của 4 tiền đề: Kinh tế (sự lớn mạnh của TBCN), Chính trị (khủng hoảng chuyên chế/thực dân), Xã hội (mâu thuẫn giai cấp), Tư tưởng (Triết học Ánh sáng/Khai sáng)."
  },
  {
    id: 2,
    lessonNum: 1,
    lessonTitle: "Một số vấn đề chung về cách mạng tư sản",
    q: "Tác phẩm 'Tinh thần pháp luật' với học thuyết 'Tam quyền phân lập' nổi tiếng là cống hiến tư tưởng của nhà Khai sáng nào?",
    options: [
      "A. Vôn-te (Voltaire)",
      "B. Mông-te-xki-ơ (Montesquieu)",
      "C. Rút-xô (Rousseau)",
      "D. Đi-đơ-rô (Diderot)"
    ],
    answer: 1,
    explain: "Mông-te-xki-ơ chủ trương phân chia quyền lực thành ba nhánh độc lập: Lập pháp, Hành pháp và Tư pháp để kiềm chế quyền lực nhà vua và bảo vệ tự do công dân."
  },
  {
    id: 3,
    lessonNum: 2,
    lessonTitle: "Sự xác lập và phát triển của chủ nghĩa tư bản",
    q: "Đế quốc nào được mệnh danh là 'Đế quốc mà Mặt Trời không bao giờ lặn' với hệ thống thuộc địa rộng tới 33 triệu km² vào năm 1914?",
    options: [
      "A. Đế quốc Pháp",
      "B. Đế quốc Nga",
      "C. Đế quốc Anh",
      "D. Đế quốc Đức"
    ],
    answer: 2,
    explain: "Đầu thế kỉ XX, đế quốc Anh có hệ thống thuộc địa trải rộng khắp địa cầu với diện tích khoảng 33 triệu km² và hơn 400 triệu dân."
  },
  {
    id: 4,
    lessonNum: 2,
    lessonTitle: "Sự xác lập và phát triển của chủ nghĩa tư bản",
    q: "Cuộc cải cách mang tính chất cách mạng tư sản nào đã đưa Nhật Bản từ một nước phong kiến trở thành cường quốc công nghiệp tư bản từ năm 1868?",
    options: [
      "A. Cách mạng Tân Hợi",
      "B. Duy tân Minh Trị",
      "C. Phong trào Ngũ Tứ",
      "D. Cải cách Mậu Tuất"
    ],
    answer: 1,
    explain: "Duy tân Minh Trị (khởi xướng năm 1868) là cuộc cải cách toàn diện trên mọi lĩnh vực, đưa Nhật Bản thoát nguy cơ thuộc địa và vươn lên thành đế quốc tư bản."
  },
  {
    id: 5,
    lessonNum: 3,
    lessonTitle: "Sự hình thành Liên bang Xô viết",
    q: "Bản Hiến pháp đầu tiên của Liên bang Cộng hoà xã hội chủ nghĩa Xô viết (Liên Xô) được thông qua vào thời điểm nào?",
    options: [
      "A. Tháng 10-1917",
      "B. Tháng 12-1922",
      "C. Tháng 1-1924",
      "D. Tháng 9-1945"
    ],
    answer: 2,
    explain: "Tháng 1-1924, bản Hiến pháp đầu tiên của Liên Xô được thông qua, chính thức hoàn tất quá trình tổ chức bộ máy nhà nước liên bang."
  },
  {
    id: 6,
    lessonNum: 3,
    lessonTitle: "Sự hình thành Liên bang Xô viết",
    q: "Ý nghĩa quốc tế sâu sắc nhất của việc thành lập Liên bang Xô viết năm 1922 là gì?",
    options: [
      "A. Chấm dứt Chiến tranh thế giới thứ nhất",
      "B. Trở thành biểu tượng, chỗ dựa vật chất và tinh thần to lớn cho phong trào giải phóng dân tộc thế giới",
      "C. Tạo lập khối quân sự NATO",
      "D. Khôi phục nền quân chủ chuyên chế Sa hoàng"
    ],
    answer: 1,
    explain: "Sự ra đời của Liên Xô đã chứng minh học thuyết Mác - Lê-nin trong thực tiễn và trở thành thành trì, chỗ dựa cho phong trào cách mạng và giải phóng dân tộc toàn cầu."
  },
  {
    id: 7,
    lessonNum: 4,
    lessonTitle: "Sự phát triển của chủ nghĩa xã hội từ 1945 đến nay",
    q: "Sự kiện lịch sử nào vào năm 1949 đánh dấu chủ nghĩa xã hội nối liền một dải từ châu Âu sang châu Á?",
    options: [
      "A. Nước Cộng hoà Dân chủ Đức thành lập",
      "B. Nước Cộng hoà Nhân dân Trung Hoa tuyên bố thành lập (1-10-1949)",
      "C. Khối SEV ra đời",
      "D. Nước CHDCND Lào thành lập"
    ],
    answer: 1,
    explain: "Ngày 1-10-1949, nước CHND Trung Hoa thành lập và đi lên CNXH, làm cho hệ thống xã hội chủ nghĩa trải dài liên tục từ Trung Âu tới Đông Á."
  },
  {
    id: 8,
    lessonNum: 4,
    lessonTitle: "Sự phát triển của chủ nghĩa xã hội từ 1945 đến nay",
    q: "Sự sụp đổ của chế độ xã hội chủ nghĩa ở Đông Âu và Liên Xô (1989–1991) là sự sụp đổ của:",
    options: [
      "A. Toàn bộ lí tưởng xã hội chủ nghĩa khoa học",
      "B. Một mô hình chủ nghĩa xã hội cụ thể mang tính tập trung quan liêu bao cấp và nhiều sai lầm trong cải tổ",
      "C. Nền kinh tế thị trường tư bản",
      "D. Phong trào công nhân quốc tế"
    ],
    answer: 1,
    explain: "Sự sụp đổ ở Liên Xô và Đông Âu là sự phá sản của một mô hình CNXH cụ thể mắc nhiều khuyết tật giáo điều và sai lầm cải tổ, không đồng nghĩa với sự sụp đổ của bản chất khoa học CNXH."
  },
  {
    id: 9,
    lessonNum: 5,
    lessonTitle: "Quá trình xâm lược và cai trị của thực dân ở Đông Nam Á",
    q: "Thực dân phương Tây bắt đầu thâm nhập vào khu vực Đông Nam Á từ thế kỉ XVI chủ yếu thông qua con đường nào?",
    options: [
      "A. Viện trợ quân sự quy mô lớn",
      "B. Hoạt động buôn bán, giao thương và truyền bá đạo Ki-tô",
      "C. Đưa thợ mỏ di cư ồ ạt",
      "D. Đóng cửa hoàn toàn các hải cảng"
    ],
    answer: 1,
    explain: "Thực dân phương Tây mở đầu quá trình xâm nhập bằng việc cử thương thuyền buôn bán hương liệu, lập thương điếm và các giáo sĩ truyền giáo."
  },
  {
    id: 10,
    lessonNum: 5,
    lessonTitle: "Quá trình xâm lược và cai trị của thực dân ở Đông Nam Á",
    q: "Vì sao Xiêm (Thái Lan) là quốc gia duy nhất ở Đông Nam Á giữ được nền độc lập trước làn sóng thuộc địa hóa?",
    options: [
      "A. Nhờ có quân đội hùng mạnh nhất thế giới",
      "B. Nhờ chính sách cải cách tiến bộ toàn diện của Ra-ma IV, Ra-ma V và ngoại giao khôn khéo làm vùng đệm",
      "C. Do vị trí địa lí quá xa xôi hẻo lánh",
      "D. Do Anh và Pháp không quan tâm đến vùng đất này"
    ],
    answer: 1,
    explain: "Xiêm giữ được độc lập nhờ công cuộc cải cách thể chế hiện đại của các vị vua sáng suốt và chính sách ngoại giao mềm dẻo tận dụng mâu thuẫn Anh - Pháp."
  },
  {
    id: 11,
    lessonNum: 6,
    lessonTitle: "Hành trình đi đến độc lập dân tộc ở Đông Nam Á",
    q: "Năm nước thành viên đầu tiên tham gia sáng lập Hiệp hội các quốc gia Đông Nam Á (ASEAN) năm 1967 gồm:",
    options: [
      "A. Việt Nam, Lào, Cam-pu-chia, Mi-an-ma, Bru-nây",
      "B. In-đô-nê-xi-a, Ma-lai-xi-a, Phi-lip-pin, Xin-ga-po và Thái Lan",
      "C. Thái Lan, Ấn Độ, Trung Quốc, Nhật Bản, Hàn Quốc",
      "D. In-đô-nê-xi-a, Đông Ti-mo, Bru-nây, Mi-an-ma, Lào"
    ],
    answer: 1,
    explain: "Ngày 8-8-1967, Tuyên bố Băng Cốc được kí bởi đại diện 5 nước: In-đô-nê-xi-a, Ma-lai-xi-a, Phi-lip-pin, Xin-ga-po và Thái Lan."
  },
  {
    id: 12,
    lessonNum: 7,
    lessonTitle: "Khái quát về chiến tranh bảo vệ Tổ quốc trong lịch sử Việt Nam",
    q: "Chiến thuật 'Tiên phát chế nhân' (chủ động tấn công trước để chặn thế mạnh của địch) là nét nghệ thuật quân sự độc đáo của vị tướng nào?",
    options: [
      "A. Ngô Quyền trong trận Bạch Đằng",
      "B. Lý Thường Kiệt trong cuộc kháng chiến chống Tống (1075–1077)",
      "C. Trần Hưng Đạo trong kháng chiến chống Nguyên",
      "D. Nguyễn Huệ trong trận Rạch Gầm – Xoài Mút"
    ],
    answer: 1,
    explain: "Lý Thường Kiệt chủ trương: 'Ngồi yên đợi giặc không bằng đem quân đánh trước để chặn mũi nhọn của giặc', tổ chức cuộc tập kích bất ngờ sang đất Tống năm 1075."
  },
  {
    id: 13,
    lessonNum: 7,
    lessonTitle: "Khái quát về chiến tranh bảo vệ Tổ quốc trong lịch sử Việt Nam",
    q: "Ba lần kháng chiến chống quân xâm lược Mông – Nguyên của quân dân nhà Trần diễn ra vào các năm nào?",
    options: [
      "A. 938, 981, 1077",
      "B. 1258, 1285 và 1287–1288",
      "C. 1418, 1424, 1427",
      "D. 1785, 1786, 1789"
    ],
    answer: 1,
    explain: "Quân dân nhà Trần đã 3 lần đánh bại giặc Mông - Nguyên vào các năm: 1258 (lần 1), 1285 (lần 2) và 1287–1288 (lần 3)."
  },
  {
    id: 14,
    lessonNum: 8,
    lessonTitle: "Một số cuộc khởi nghĩa và chiến tranh giải phóng ở Việt Nam",
    q: "Trận quyết chiến chiến lược nào vào mùa đông năm 1427 đã tiêu diệt hoàn toàn viện binh Liễu Thăng, buộc tướng giặc Vương Thông phải xin hàng?",
    options: [
      "A. Trận Tốt Động – Chúc Động",
      "B. Trận Chi Lăng – Xương Giang",
      "C. Trận Bạch Đằng",
      "D. Trận Rạch Gầm – Xoài Mút"
    ],
    answer: 1,
    explain: "Trận phục kích chém đầu Liễu Thăng tại Chi Lăng và bao vây tiêu diệt quân Minh tại Xương Giang cuối năm 1427 đã đập tan ý chí xâm lược của nhà Minh."
  },
  {
    id: 15,
    lessonNum: 8,
    lessonTitle: "Một số cuộc khởi nghĩa và chiến tranh giải phóng ở Việt Nam",
    q: "Nghĩa quân Tây Sơn đã lập nên kì tích lịch sử nào trong những năm 1786–1788 đối với sự nghiệp thống nhất quốc gia?",
    options: [
      "A. Tiến quân ra Bắc lật đổ tập đoàn phong kiến chúa Trịnh, xóa bỏ tình trạng chia cắt Đàng Trong – Đàng Ngoài",
      "B. Đánh chiếm toàn bộ bán đảo Mã Lai",
      "C. Kí hiệp ước bảo hộ với Pháp",
      "D. Xây dựng kinh đô ở Thăng Long"
    ],
    answer: 0,
    explain: "Phong trào Tây Sơn đã lật đổ chính quyền chúa Nguyễn ở phía Nam và chúa Trịnh ở phía Bắc, chấm dứt cục diện chia cắt đất nước kéo dài hơn 2 thế kỉ."
  },
  {
    id: 16,
    lessonNum: 9,
    lessonTitle: "Cuộc cải cách của Hồ Quý Ly và Triều Hồ",
    q: "Hạn chế lớn nhất trong cải cách của Hồ Quý Ly khiến nhà Hồ nhanh chóng sụp đổ trước cuộc xâm lược của nhà Minh năm 1407 là:",
    options: [
      "A. Không đúc được súng thần cơ",
      "B. Chưa tranh thủ được sự ủng hộ rộng rãi của nhân dân, làm mất lòng khối đại đoàn kết dân tộc",
      "C. Thành Tây Đô xây dựng quá sơ sài",
      "D. Nông dân không chịu đi lính"
    ],
    answer: 1,
    explain: "Do biện pháp cải cách mang tính nóng vội, hà khắc và làm phật lòng sĩ phu phong kiến nên triều Hồ không quy tụ được lòng dân trong cuộc chiến vệ quốc."
  },
  {
    id: 17,
    lessonNum: 10,
    lessonTitle: "Cuộc cải cách của Lê Thánh Tông (thế kỉ XV)",
    q: "Dưới triều vua Lê Thánh Tông, cơ quan nào được thành lập để chuyên trách việc thanh tra, giám sát chéo hoạt động của Lục Bộ?",
    options: [
      "A. Lục Tự",
      "B. Lục Khoa",
      "C. Cơ mật viện",
      "D. Tam ty"
    ],
    answer: 1,
    explain: "Lê Thánh Tông lập Lục Khoa để theo dõi, kiểm soát và thanh tra chéo 6 bộ trong Lục Bộ nhằm chống tiêu cực và lộng quyền."
  },
  {
    id: 18,
    lessonNum: 11,
    lessonTitle: "Cuộc cải cách của Minh Mạng",
    q: "Dưới thời vua Minh Mạng, cơ cấu hành chính địa phương cả nước được chia thành các đơn vị thống nhất là:",
    options: [
      "A. 13 thừa tuyên",
      "B. 5 đạo lớn",
      "C. 30 tỉnh và một phủ Thừa Thiên",
      "D. 11 trấn miền Bắc và 5 trấn miền Nam"
    ],
    answer: 2,
    explain: "Cải cách hành chính địa phương năm 1831–1832 của vua Minh Mạng chia cả nước thành 30 tỉnh và 1 phủ Thừa Thiên (kinh sư Huế)."
  },
  {
    id: 19,
    lessonNum: 12,
    lessonTitle: "Vị trí và tầm quan trọng của Biển Đông",
    q: "Đặc điểm nào sau đây KHÔNG đúng về vị trí và điều kiện tự nhiên của Biển Đông?",
    options: [
      "A. Diện tích khoảng 3,5 triệu km², là vùng biển tương đối kín",
      "B. Nằm trong vùng khí hậu hàn đới quanh năm băng giá",
      "C. Có nguồn tài nguyên sinh vật phong phú với hơn 12.000 loài sinh vật",
      "D. Có eo biển Ma-lắc-ca là tuyến hàng hải huyết mạch quốc tế"
    ],
    answer: 1,
    explain: "Biển Đông nằm trọn trong vùng khí hậu nhiệt đới gió mùa ấm áp, không phải vùng hàn đới băng giá."
  },
  {
    id: 20,
    lessonNum: 13,
    lessonTitle: "Việt Nam và Biển Đông",
    q: "Hai huyện đảo Hoàng Sa và Trường Sa được Nhà nước CHXHCN Việt Nam chính thức thành lập vào năm nào?",
    options: [
      "A. Năm 1945",
      "B. Năm 1954",
      "C. Năm 1982",
      "D. Năm 2002"
    ],
    answer: 2,
    explain: "Năm 1982, Hội đồng Bộ trưởng nước CHXHCN Việt Nam đã ra quyết định thành lập huyện đảo Hoàng Sa và huyện đảo Trường Sa để quản lí hành chính."
  }
];

module.exports = {
  topics,
  lessons,
  timelineTable,
  terms,
  mapDiagramNotes,
  examQuestions
};
