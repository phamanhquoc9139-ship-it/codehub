const fs = require('fs');
const path = require('path');

const summaryTable = [
  {
    bai: 1,
    name: "Sơ lược về sự phát triển của Vật lí học",
    cd: "Chuyên đề 1",
    concept: "Từ triết học tự nhiên cổ đại (Aristotle) sang vật lí thực nghiệm (Galilei), cơ học cổ điển (Newton) đến kỉ nguyên lượng tử và thuyết tương đối.",
    formula: "E = mc²; ε = hf; Thí nghiệm rơi tự do trong chân không",
    app: "Máy hơi nước, máy phát điện cảm ứng, bóng bán dẫn, năng lượng hạt nhân, máy tính lượng tử."
  },
  {
    bai: 2,
    name: "Giới thiệu các lĩnh vực nghiên cứu trong Vật lí",
    cd: "Chuyên đề 1",
    concept: "6 hướng nghiên cứu hiện đại: thiên văn vũ trụ, hạt cơ bản, vật liệu nano, laser, bán dẫn và vật lí y sinh.",
    formula: "Mô hình chuẩn hạt sơ cấp; Kích thước nano 1-100 nm; Hiệu ứng lượng tử",
    app: "Vệ tinh viễn thám, máy gia tốc LHC, vi mạch tích hợp, phẫu thuật Lasik, chụp cộng hưởng từ MRI."
  },
  {
    bai: 3,
    name: "Ứng dụng của Vật lí trong một số ngành nghề",
    cd: "Chuyên đề 1",
    concept: "Nguyên lí vật lí là nền tảng cho quốc phòng, tự động hóa, viễn thông cáp quang, khí tượng và kinh tế tài chính.",
    formula: "Khí động học Navier-Stokes; Phản xạ toàn phần cáp quang; Mô hình Econophysics",
    app: "Máy bay tàng hình, tên lửa phản lực, Internet tốc độ cao, dự báo bão lũ, quản trị rủi ro tài chính."
  },
  {
    bai: 4,
    name: "Xác định phương hướng",
    cd: "Chuyên đề 2",
    concept: "Bản đồ sao và phương pháp tìm Sao Bắc Cực (Polaris) nằm tại cực Bắc thiên cầu để định hướng 4 phương vị ban đêm.",
    formula: "Gấu Lớn: Kéo dài x5 miệng gầu; Thiên Hậu: Kéo dài vuông góc x7 đoạn γ-δ",
    app: "Kĩ năng sinh tồn định vị phương hướng ban đêm cho ngư dân trên biển và người đi rừng thám hiểm."
  },
  {
    bai: 5,
    name: "Đặc điểm chuyển động nhìn thấy của thiên thể",
    cd: "Chuyên đề 2",
    concept: "Chuyển động biểu kiến Mặt Trời (Đông sang Tây do Trái Đất tự quay), 4 mùa, chu kì pha Mặt Trăng và hệ Nhật tâm Copernic.",
    formula: "Trục Trái Đất nghiêng 23,5°; Tuần trăng 29,5 ngày; Góc li giác Kim tinh ≤ 48°",
    app: "Lập lịch âm - dương, quan sát Sao Mai/Sao Hôm, giải thích hiện tượng nghịch hành của hành tinh ngoài."
  },
  {
    bai: 6,
    name: "Nhật thực, nguyệt thực, thủy triều",
    cd: "Chuyên đề 2",
    concept: "Cơ chế che khuất thiên thể khi thẳng hàng và lực hấp dẫn vi sai của Mặt Trăng - Mặt Trời tạo thủy triều.",
    formula: "Nhật thực: Mặt Trăng ở giữa; Nguyệt thực: Trái Đất ở giữa; Triều cường (thẳng hàng) / Triều kém (vuông góc)",
    app: "Dự báo nhật thực/nguyệt thực, điều độ tàu thuyền hàng hải ra vào cảng nước sâu theo con nước triều."
  },
  {
    bai: 7,
    name: "Sự cần thiết phải bảo vệ môi trường",
    cd: "Chuyên đề 3",
    concept: "Môi trường tự nhiên và nhân tạo; khủng hoảng biến đổi khí hậu do khí nhà kính; suy giảm đa dạng sinh học và phát triển bền vững.",
    formula: "Mô hình 3R (Reduce - Reuse - Recycle); Mục tiêu Net Zero 2050",
    app: "Xử lí nước thải công nghiệp, phân loại rác thải tái chế, giao thông xanh, bảo tồn vườn quốc gia."
  },
  {
    bai: 8,
    name: "Tác động của việc sử dụng năng lượng tại VN",
    cd: "Chuyên đề 3",
    concept: "Cơ cấu than, dầu khí, thủy điện cạn kiệt; ô nhiễm bụi mịn PM2.5, tro xỉ; ứng dụng định luật nhiệt động II sử dụng năng lượng hiệu quả.",
    formula: "Định luật II nhiệt động lực học: Q₂ = Q₁ + A; Công suất tiêu thụ P = UI",
    app: "Tiết kiệm điện điều hòa (cài đặt 26-28°C), bảo dưỡng áp suất lốp xe giảm tiêu hao xăng dầu."
  },
  {
    bai: 9,
    name: "Sơ lược về các chất gây ô nhiễm môi trường",
    cd: "Chuyên đề 3",
    concept: "Bụi mịn PM2.5, khí độc CO, SO₂, NOₓ tạo mưa acid pH < 5,6; chất thải hạt nhân phóng xạ và cơ chế phân hủy ozone do khí CFC.",
    formula: "pH = -log[H+] < 5,6 (Mưa acid); Phản ứng xúc tác: Cl• + O₃ → ClO• + O₂",
    app: "Lắp đặt tháp lọc khí thải khử lưu huỳnh FGD, quản lí chôn lấp chất thải hạt nhân, thực thi Nghị định thư Montreal."
  },
  {
    bai: 10,
    name: "Năng lượng tái tạo & Công nghệ thu năng lượng",
    cd: "Chuyên đề 3",
    concept: "Phân loại năng lượng tái tạo (Mặt Trời, gió, sinh khối, địa nhiệt, đại dương); nguyên lí pin quang điện và dự án turbine gió STEM.",
    formula: "Hiệu ứng quang điện trong; Công suất gió: P = (1/2)ρAv³; Cảm ứng điện từ Faraday",
    app: "Thiết kế trang trại điện gió ngoài khơi, lắp đặt pin năng lượng Mặt Trời áp mái, chế tạo mô hình turbine gió mini."
  }
];

const formulaTable = [
  {
    name: "Hệ thức tương đương Khối lượng - Năng lượng",
    formula: "E = m · c²",
    unit: "J (Joule)",
    note: "Einstein (1905): c ≈ 3.10⁸ m/s; cơ sở năng lượng hạt nhân phân hạch và nhiệt hạch."
  },
  {
    name: "Lượng tử năng lượng Planck",
    formula: "ε = h · f = h · (c / λ)",
    unit: "J (Joule)",
    note: "h ≈ 6,626.10⁻³⁴ J·s (hằng số Planck); f là tần số sóng ánh sáng."
  },
  {
    name: "Vận tốc vũ trụ cấp 1 (Đại bác Newton)",
    formula: "v₁ = √(g · R)",
    unit: "m/s (≈ 7,9 km/s)",
    note: "Vận tốc tối thiểu để vật thể chuyển động tròn đều quanh Trái Đất sát mặt đất."
  },
  {
    name: "Góc nghiêng trục tự quay của Trái Đất",
    formula: "θ ≈ 23,5°",
    unit: "độ (°)",
    note: "Góc giữa trục tự quay Trái Đất và pháp tuyến mặt phẳng hoàng đạo, nguyên nhân tạo 4 mùa."
  },
  {
    name: "Chu kì tuần trăng (Pha Mặt Trăng)",
    formula: "T ≈ 29,5 ngày",
    unit: "ngày đêm",
    note: "Thời gian để Mặt Trăng hoàn thành một chu kì pha từ Trăng non đến Trăng non tiếp theo."
  },
  {
    name: "Độ pH của Mưa Acid",
    formula: "pH < 5,6",
    unit: "thang đo pH",
    note: "Do hòa tan khí oxit axit SO₂ và NOₓ tạo thành axit H₂SO₄ và HNO₃."
  },
  {
    name: "Định luật II nhiệt động (Máy làm lạnh)",
    formula: "Q₂ = Q₁ + A",
    unit: "J (Joule)",
    note: "Nhiệt lượng thải ra nguồn nóng Q₂ bằng nhiệt lượng hút từ phòng lạnh Q₁ cộng công điện A."
  },
  {
    name: "Công suất lí thuyết của dòng không khí qua turbine gió",
    formula: "P = (1/2) · ρ · A · v³",
    unit: "W (Watt)",
    note: "ρ là khối lượng riêng không khí; A là diện tích quét cánh quạt; công suất tỉ lệ với v³."
  },
  {
    name: "Quy tắc tìm Sao Bắc Cực từ chòm Gấu Lớn",
    formula: "d = 5 · d(Merak, Dubhe)",
    unit: "khoảng cách góc",
    note: "Kéo dài đường nối hai ngôi sao ở mép ngoài miệng gầu một đoạn gấp đúng 5 lần."
  },
  {
    name: "Góc li giác cực đại của Kim tinh",
    formula: "α_{max} ≈ 48°",
    unit: "độ (°)",
    note: "Kim tinh luôn ở gần Mặt Trời, chỉ quan sát thấy lúc bình minh (Sao Mai) hoặc hoàng hôn (Sao Hôm)."
  }
];

const mistakesAndTips = [
  {
    title: "Nhầm lẫn chuyển động nhìn thấy của Mặt Trời là chuyển động thực",
    desc: "Mặt Trời mọc hướng Đông và lặn hướng Tây mỗi ngày là chuyển động biểu kiến (nhìn thấy), nguyên nhân thực tế là do Trái Đất tự quay quanh trục của nó theo chiều từ Tây sang Đông."
  },
  {
    title: "Hiểu sai nguyên nhân của các pha Mặt Trăng",
    desc: "Nhiều học sinh lầm tưởng các pha Trăng tròn/khuyết là do bóng của Trái Đất che khuất. Thực tế, các pha là do góc nhìn đối với nửa bề mặt được Mặt Trời chiếu sáng thay đổi khi Mặt Trăng quay quanh Trái Đất. Bóng Trái Đất chỉ che Mặt Trăng khi xảy ra nguyệt thực."
  },
  {
    title: "Nhầm lẫn vị trí thiên thể giữa Nhật thực và Nguyệt thực",
    desc: "Mẹo nhớ đơn giản: 'Nhật - Trăng ở giữa; Nguyệt - Đất ở giữa'. Nhật thực: Mặt Trời — Mặt Trăng — Trái Đất (vào ngày mùng 1 âm lịch). Nguyệt thực: Mặt Trời — Trái Đất — Mặt Trăng (vào ngày rằm 15 âm lịch)."
  },
  {
    title: "Ngộ nhận Sao Bắc Cực là ngôi sao sáng nhất trên bầu trời đêm",
    desc: "Sao Bắc Cực (Polaris) chỉ là một ngôi sao có độ sáng trung bình (cấp sao khoảng 2,0), không phải ngôi sao sáng nhất. Điểm đặc biệt của nó là nằm rất gần cực Bắc thiên cầu nên gần như đứng yên suốt đêm."
  },
  {
    title: "Đồng nhất 'Hiệu ứng nhà kính' hoàn toàn là tiêu cực",
    desc: "Hiệu ứng nhà kính tự nhiên là điều kiện thiết yếu giữ ấm Trái Đất ở nhiệt độ trung bình khoảng 15°C cho sự sống tồn tại. Vấn đề nguy hiểm hiện nay là hiệu ứng nhà kính nhân tạo tăng cao đột biến do đốt nhiên liệu hóa thạch làm Trái Đất nóng lên quá mức."
  },
  {
    title: "Hiểu lầm năng lượng tái tạo hoàn toàn không gây tác động môi trường",
    desc: "Mặc dù không phát thải khí nhà kính khi phát điện, các dự án năng lượng tái tạo vẫn có tác động môi trường nhất định (hồ thủy điện ngập rừng, turbine gió chiếm dụng không gian và có thể ảnh hưởng chim di cư, rác thải pin mặt trời hết hạn cần xử lí tái chế)."
  }
];

const arenaQuestions = [
  {
    q: "Thí nghiệm nào của Galileo Galilei được xem là mốc lịch sử khai sinh phương pháp thực nghiệm trong vật lí học?",
    options: [
      "Thí nghiệm tán sắc ánh sáng qua lăng kính",
      "Thí nghiệm nghiên cứu sự rơi tự do của các vật trên mặt phẳng nghiêng và tháp nghiêng Pisa",
      "Thí nghiệm đo vận tốc âm thanh trong không khí",
      "Thí nghiệm dùng kính thiên văn phát hiện các hành tinh ngoài hệ Mặt Trời"
    ],
    answer: 1,
    explain: "Thí nghiệm thả rơi của Galilei đã chứng minh các vật rơi như nhau nếu không có sức cản không khí, bác bỏ quan niệm triết học cổ đại của Aristotle."
  },
  {
    q: "Công thức nổi tiếng $E = mc^2$ trong thuyết tương đối của Albert Einstein thể hiện mối liên hệ tương đương giữa hai đại lượng nào?",
    options: [
      "Điện tích và điện thế",
      "Khối lượng và năng lượng",
      "Vận tốc và gia tốc",
      "Lực và động lượng"
    ],
    answer: 1,
    explain: "Hệ thức $E = mc^2$ khẳng định khối lượng $m$ và năng lượng $E$ là hai mặt tương đương của vật chất, liên hệ với nhau qua bình phương tốc độ ánh sáng $c^2$."
  },
  {
    q: "Thiết bị y tế hiện đại nào ứng dụng hiện tượng cộng hưởng từ hạt nhân để tái tạo hình ảnh cấu trúc giải phẫu chi tiết của cơ thể?",
    options: [
      "Máy đo điện não đồ EEG",
      "Máy chụp X-quang thông thường",
      "Máy chụp cộng hưởng từ MRI",
      "Máy chụp mạch huỳnh quang"
    ],
    answer: 2,
    explain: "Máy chụp cộng hưởng từ (MRI) sử dụng từ trường siêu dẫn cực mạnh và sóng radio tác động lên hạt nhân nguyên tử hydro trong cơ thể để tạo hình ảnh mô mềm sắc nét."
  },
  {
    q: "Hiện tượng phản xạ toàn phần của ánh sáng là nguyên lí hoạt động then chốt của công nghệ nào sau đây?",
    options: [
      "Mạng truyền dẫn thông tin qua sợi cáp quang Internet",
      "Bình nước nóng năng lượng Mặt Trời",
      "Máy bắn tốc độ radar giao thông",
      "Kính thiên văn vô tuyến"
    ],
    answer: 0,
    explain: "Cáp quang truyền tín hiệu ánh sáng đi xa hàng nghìn km nhờ hiện tượng phản xạ toàn phần liên tục tại mặt phân cách giữa lõi thủy tinh và lớp vỏ bọc."
  },
  {
    q: "Để tìm Sao Bắc Cực (Polaris) từ chòm sao Gấu Lớn (Ursa Major), ta nối hai ngôi sao ở mép ngoài miệng gầu và kéo dài bao nhiêu lần khoảng cách giữa hai sao này?",
    options: [
      "Kéo dài khoảng 3 lần",
      "Kéo dài khoảng 5 lần",
      "Kéo dài khoảng 7 lần",
      "Kéo dài khoảng 10 lần"
    ],
    answer: 1,
    explain: "Theo quy tắc thiên văn chuẩn, đường nối hai sao Merak và Dubhe kéo dài ra ngoài một khoảng bằng đúng 5 lần khoảng cách giữa chúng sẽ chỉ thẳng vào Sao Bắc Cực."
  },
  {
    q: "Chòm sao Thiên Hậu (Cassiopeia) trên bầu trời đêm có hình dạng đặc trưng giống chữ cái nào?",
    options: [
      "Chữ V hoặc chữ Y",
      "Chữ W hoặc chữ M",
      "Chữ O hoặc chữ C",
      "Chữ T hoặc chữ L"
    ],
    answer: 1,
    explain: "Chòm sao Thiên Hậu gồm 5 ngôi sao sáng xếp thành hình chữ W hoặc chữ M tùy theo góc quay của thiên cầu."
  },
  {
    q: "Hiện tượng Mặt Trời mọc ở hướng Đông và lặn ở hướng Tây mỗi ngày là do nguyên nhân thực tế nào sau đây?",
    options: [
      "Mặt Trời chuyển động thực sự quay quanh Trái Đất một vòng mỗi ngày",
      "Trái Đất tự quay quanh trục tự quay của nó theo chiều từ Tây sang Đông",
      "Mặt phẳng quỹ đạo của Trái Đất bị nghiêng 23,5 độ",
      "Mặt Trăng hút kéo bầu khí quyển di chuyển từ Đông sang Tây"
    ],
    answer: 1,
    explain: "Chuyển động nhìn thấy của Mặt Trời là chuyển động biểu kiến, sinh ra do người quan sát đứng trên Trái Đất đang tự quay từ Tây sang Đông."
  },
  {
    q: "Vào ngày Hạ chí (khoảng ngày 21 hoặc 22 tháng 6 dương lịch) ở bán cầu Bắc, hiện tượng độ dài ngày đêm diễn ra như thế nào?",
    options: [
      "Ngày dài bằng đêm",
      "Ngày dài nhất và đêm ngắn nhất trong năm",
      "Đêm dài nhất và ngày ngắn nhất trong năm",
      "Toàn bộ Trái Đất chìm trong bóng tối suốt 24 giờ"
    ],
    answer: 1,
    explain: "Vào ngày Hạ chí, bán cầu Bắc ngả nhiều nhất về phía Mặt Trời, quỹ đạo biểu kiến Mặt Trời lên cao nhất nên có ngày dài nhất và đêm ngắn nhất trong năm."
  },
  {
    q: "Hiện tượng Nguyệt thực chỉ có thể xảy ra vào thời điểm nào trong tháng âm lịch?",
    options: [
      "Vào ngày Trăng non (ngày mùng 1 âm lịch)",
      "Vào ngày Trăng bán nguyệt đầu tháng (ngày mùng 7 âm lịch)",
      "Vào ngày Trăng tròn (ngày Rằm 15 âm lịch)",
      "Vào bất kì ngày nào có sương mù dày đặc"
    ],
    answer: 2,
    explain: "Nguyệt thực xảy ra khi Trái Đất nằm giữa Mặt Trời và Mặt Trăng, điều này chỉ có thể diễn ra vào kì Trăng tròn (rằm âm lịch) khi ba thiên thể thẳng hàng."
  },
  {
    q: "Hiện tượng 'Trăng máu' (Mặt Trăng có màu đỏ sẫm khi nguyệt thực toàn phần) được giải thích là do:",
    options: [
      "Bề mặt Mặt Trăng bị đốt nóng phát ra ánh sáng đỏ",
      "Ánh sáng màu đỏ bước sóng dài từ Mặt Trời bị khúc xạ qua rìa bầu khí quyển Trái Đất chiếu lên Mặt Trăng",
      "Các thiên thạch màu đỏ bốc cháy trong khí quyển Mặt Trăng",
      "Hiện tượng phản chiếu ánh sáng từ dung nham núi lửa trên Trái Đất"
    ],
    answer: 1,
    explain: "Khi đi qua khí quyển Trái Đất, ánh sáng xanh bị tán xạ phân tán hết, chỉ có các tia sáng đỏ bước sóng dài bị khúc xạ uốn cong chiếu vào vùng bóng tối làm Mặt Trăng có màu đỏ sẫm."
  },
  {
    q: "Hiện tượng Triều cường (nước thủy triều dâng cao nhất) diễn ra khi vị trí tương đối giữa ba thiên thể Mặt Trời, Trái Đất và Mặt Trăng như thế nào?",
    options: [
      "Mặt Trời và Mặt Trăng nằm theo hai hướng vuông góc với nhau nhìn từ Trái Đất",
      "Mặt Trời, Trái Đất và Mặt Trăng nằm thẳng hàng (hoặc gần thẳng hàng)",
      "Mặt Trăng nằm ở vị trí xa Trái Đất nhất trên quỹ đạo",
      "Trái Đất quay chậm lại so với tốc độ tự quay thông thường"
    ],
    answer: 1,
    explain: "Khi ba thiên thể thẳng hàng (ngày không Trăng và ngày Trăng tròn), lực hấp dẫn của Mặt Trời và Mặt Trăng cùng hướng cộng hưởng làm biên độ thủy triều lớn nhất."
  },
  {
    q: "Nước mưa có độ pH bằng bao nhiêu thì được coi là 'Mưa acid'?",
    options: [
      "pH > 7,0",
      "pH = 7,0",
      "pH < 5,6",
      "6,0 < pH < 6,8"
    ],
    answer: 2,
    explain: "Nước mưa tự nhiên có tính axit nhẹ do hòa tan $CO_2$ ($pH \\approx 5{,}6$). Khi nước mưa hòa tan các khí ô nhiễm oxit lưu huỳnh và nitơ làm $pH < 5{,}6$ thì được gọi là mưa acid."
  },
  {
    q: "Hai khí ô nhiễm công nghiệp nào là nguyên nhân trực tiếp hình thành nên hiện tượng Mưa Acid?",
    options: [
      "Khí $O_2$ và khí $N_2$",
      "Khí $SO_2$ (lưu huỳnh đioxit) và các oxit nitơ ($NO_x$)",
      "Khí $CH_4$ (methane) và khí $He$",
      "Hơi nước ($H_2O$) và khí Argon ($Ar$)"
    ],
    answer: 1,
    explain: "Khí $SO_2$ và $NO_x$ sinh ra từ đốt than đá, dầu mỏ phản ứng với oxy và hơi nước trong khí quyển tạo thành axit $H_2SO_4$ và $HNO_3$ gây mưa acid."
  },
  {
    q: "Tầng Ozone ($O_3$) trong tầng bình lưu có vai trò sống còn nào đối với sinh quyển trên Trái Đất?",
    options: [
      "Hấp thụ phần lớn các bức xạ tử ngoại (tia cực tím UV) nguy hiểm từ Mặt Trời",
      "Cung cấp khí oxy trực tiếp cho các loài động vật hô hấp",
      "Ngăn cản các hạt thiên thạch rơi xuống Trái Đất",
      "Giữ cho bầu trời có màu xanh lam vào ban ngày"
    ],
    answer: 0,
    explain: "Tầng ozone hấp thụ tới $99\\%$ tia cực tím có hại (UV-B, UV-C), bảo vệ tế bào sống của con người và muôn loài khỏi bị biến dị gen và ung thư da."
  },
  {
    q: "Hợp chất hóa học nhân tạo nào sau đây là thủ phạm chính gây ra hiện tượng thủng tầng ozone?",
    options: [
      "Khí Methane ($CH_4$)",
      "Hợp chất Chlorofluorocarbon (CFC)",
      "Khí Carbon dioxide ($CO_2$)",
      "Bụi mịn $PM_{2.5}$"
    ],
    answer: 1,
    explain: "Chất CFC giải phóng gốc clo tự do ($Cl^\\bullet$), mỗi nguyên tử clo đóng vai trò chất xúc tác phân hủy hàng trăm nghìn phân tử ozone theo phản ứng dây chuyền."
  },
  {
    q: "Theo Định luật II nhiệt động lực học, máy làm lạnh hoặc điều hòa nhiệt độ muốn truyền nhiệt từ nơi lạnh ra nơi nóng thì bắt buộc phải:",
    options: [
      "Tự động giải phóng nhiệt lượng mà không cần cung cấp năng lượng",
      "Tiêu tốn công (điện năng) từ bên ngoài",
      "Ngừng tỏa nhiệt ra môi trường xung quanh",
      "Hoạt động với hiệu suất chuyển hóa nhiệt luôn đạt 100%"
    ],
    answer: 1,
    explain: "Nhiệt không thể tự truyền từ vật có nhiệt độ thấp sang vật có nhiệt độ cao; muốn thực hiện chu trình làm lạnh này bắt buộc phải tiêu tốn công (điện năng cung cấp cho máy nén)."
  },
  {
    q: "Để tiết kiệm điện năng tiêu thụ của máy điều hòa nhiệt độ trong mùa hè oi bức, thao tác nào dưới đây là đúng đắn và hiệu quả nhất?",
    options: [
      "Cài đặt nhiệt độ ở mức thấp nhất 16 độ C ngay khi vừa bật máy",
      "Cài đặt nhiệt độ ở mức hợp lí từ 26 độ C đến 28 độ C kết hợp quạt gió nhẹ và đóng kín cửa phòng",
      "Liên tục bật tắt điều hòa mỗi 20 phút một lần",
      "Mở toang các cửa sổ để gió tự nhiên ùa vào khi điều hòa đang chạy"
    ],
    answer: 1,
    explain: "Cài đặt nhiệt độ từ 26 đến 28 độ C giảm chênh lệch nhiệt độ giữa trong và ngoài phòng, giúp máy nén không phải hoạt động quá tải, tiết kiệm điện năng đáng kể."
  },
  {
    q: "Công suất phát điện lí thuyết của một turbine gió tỉ lệ thuận với lũy thừa bậc mấy của vận tốc gió $v$?",
    options: [
      "Tỉ lệ thuận với bậc 1 ($v$)",
      "Tỉ lệ thuận với bậc 2 (bình phương $v^2$)",
      "Tỉ lệ thuận với bậc 3 (lập phương $v^3$)",
      "Tỉ lệ nghịch với vận tốc gió $v$"
    ],
    answer: 2,
    explain: "Động năng của khối không khí chuyển động qua cánh quạt trong một đơn vị thời gian tỉ lệ với lập phương vận tốc gió: $P = \\frac{1}{2} \\rho A v^3$."
  },
  {
    q: "Nguồn năng lượng nào sau đây là nguồn năng lượng tái tạo?",
    options: [
      "Nhiên liệu khí thiên nhiên",
      "Năng lượng bức xạ Mặt Trời",
      "Nhiên liệu than đá antraxit",
      "Nhiên liệu urani trong lò phản ứng hạt nhân"
    ],
    answer: 1,
    explain: "Bức xạ Mặt Trời là nguồn năng lượng tự nhiên vô tận được liên tục bổ sung qua các chu trình vật lí, không bị cạn kiệt theo thời gian."
  },
  {
    q: "Nguyên lí vật lí cơ bản nào được áp dụng để biến đổi chuyển động quay của cánh quạt turbine gió thành dòng điện trong máy phát?",
    options: [
      "Hiện tượng quang điện ngoài",
      "Hiện tượng cảm ứng điện từ Faraday",
      "Hiện tượng tán sắc ánh sáng",
      "Định luật khúc xạ ánh sáng"
    ],
    answer: 1,
    explain: "Máy phát điện của turbine gió hoạt động dựa trên hiện tượng cảm ứng điện từ: khi cuộn dây quay trong từ trường (hoặc nam châm quay quanh cuộn dây), từ thông biến thiên sinh ra dòng điện xoay chiều."
  }
];

const outputPath = path.join(__dirname, 'cd_vatly10_review_arena.js');
const fileContent = `module.exports = {
  summaryTable: ${JSON.stringify(summaryTable, null, 2)},
  formulaTable: ${JSON.stringify(formulaTable, null, 2)},
  mistakesAndTips: ${JSON.stringify(mistakesAndTips, null, 2)},
  arenaQuestions: ${JSON.stringify(arenaQuestions, null, 2)}
};\n`;

fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log('Successfully generated scratch/cd_vatly10_review_arena.js with review tables and 20 Arena questions.');
