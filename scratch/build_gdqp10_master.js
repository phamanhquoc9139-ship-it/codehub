// scratch/build_gdqp10_master.js
const fs = require('fs');
const path = require('path');
const diagrams = require('./gdqp10_diagrams.js');

const p1 = require('./gdqp10_lessons_data_p1.js');
const p2 = require('./gdqp10_lessons_data_p2.js');
const p3 = require('./gdqp10_lessons_data_p3.js');

const allLessons = [...p1, ...p2, ...p3];

// Mini-Quizzes for all 12 lessons
const lessonQuizzes = {
  1: [
    {
      q: "Đội Việt Nam Tuyên truyền Giải phóng quân – tiền thân của QĐND Việt Nam – được thành lập vào ngày tháng năm nào và tại đâu?",
      options: [
        "Ngày 22/12/1944 tại khu rừng Trần Hưng Đạo (Cao Bằng)",
        "Ngày 19/8/1945 tại Quảng trường Ba Đình (Hà Nội)",
        "Ngày 28/3/1935 tại Ma Cao (Trung Quốc)",
        "Ngày 03/2/1930 tại Hương Cảng (Hồng Kông)"
      ],
      ans: 0,
      exp: "Đội Việt Nam Tuyên truyền Giải phóng quân gồm 34 chiến sĩ do đồng chí Võ Nguyên Giáp chỉ huy, thành lập ngày 22/12/1944 tại khu rừng Trần Hưng Đạo (Nguyên Bình, Cao Bằng)."
    },
    {
      q: "Ba thành phần cấu thành Lực lượng Vũ trang Nhân dân Việt Nam theo Luật Quốc phòng là:",
      options: [
        "Quân đội nhân dân, Công an nhân dân và Dân quân tự vệ",
        "Bộ đội chủ lực, Bộ đội biên phòng và Cảnh sát biển",
        "Bộ Công an, Bộ Quốc phòng và Dân quân du kích",
        "Lục quân, Phòng không - Không quân và Hải quân"
      ],
      ans: 0,
      exp: "Luật Quốc phòng khẳng định: Lực lượng vũ trang nhân dân gồm Quân đội nhân dân, Công an nhân dân và Dân quân tự vệ."
    }
  ],
  2: [
    {
      q: "Hệ thống cấp bậc hàm của Sĩ quan Quân đội nhân dân Việt Nam gồm mấy cấp, mấy bậc?",
      options: [
        "4 cấp, 12 bậc (Úy, Tá, Tướng)",
        "3 cấp, 10 bậc",
        "4 cấp, 16 bậc",
        "5 cấp, 15 bậc"
      ],
      ans: 0,
      exp: "Sĩ quan QĐND gồm 4 cấp, 12 bậc: Cấp Úy (4 bậc), Cấp Tá (4 bậc), Cấp Tướng (4 bậc)."
    },
    {
      q: "Độ tuổi tuyển sinh đào tạo sĩ quan quân đội đối với thanh niên ngoài quân đội theo quy định hiện hành là:",
      options: [
        "Từ đủ 17 tuổi đến 21 tuổi",
        "Từ đủ 18 tuổi đến 25 tuổi",
        "Từ đủ 16 tuổi đến 22 tuổi",
        "Từ đủ 18 tuổi đến 27 tuổi"
      ],
      ans: 0,
      exp: "Thanh niên ngoài quân đội từ 17 đến 21 tuổi; quân nhân tại ngũ hoặc xuất ngũ được dự tuyển đến 23 tuổi."
    }
  ],
  3: [
    {
      q: "Chất ma túy nào sau đây thuộc nhóm ma túy tự nhiên có nguồn gốc từ thực vật?",
      options: [
        "Thuốc phiện và Cần sa",
        "Ma túy đá (Methamphetamine) và Thuốc lắc (MDMA)",
        "Heroin và Morphin bán tổng hợp",
        "Ketamine và LSD tem giấy"
      ],
      ans: 0,
      exp: "Thuốc phiện (từ cây anh túc) và Cần sa (từ cây gai dầu) là ma túy tự nhiên có nguồn gốc thực vật."
    },
    {
      q: "Quy tắc vàng giúp học sinh phòng tránh cạm bẫy ma túy là:",
      options: [
        "Quy tắc '3 Không': Không thử dù chỉ 1 lần, Không tàng trữ/vận chuyển, Không nghe bạn bè rủ rê",
        "Chỉ dùng thử 1 lần để biết cảm giác rồi dừng lại",
        "Cầm hộ gói đồ lạ của người khác để lấy tiền tiêu vặt",
        "Sử dụng thuốc lá điện tử có chứa tinh dầu lạ không rõ nguồn gốc"
      ],
      ans: 0,
      exp: "Quy tắc '3 Không' là lá chắn bảo vệ an toàn cho học sinh trước ma túy học đường."
    }
  ],
  4: [
    {
      q: "Người từ đủ 16 tuổi đến dưới 18 tuổi được phép điều khiển loại phương tiện nào sau đây?",
      options: [
        "Xe gắn máy có dung tích xi lanh dưới 50 cm³ hoặc xe máy điện",
        "Xe mô tô 2 bánh có dung tích xi lanh từ 50 cm³ đến 175 cm³",
        "Mọi loại xe mô tô và ô tô số tự động",
        "Chỉ được điều khiển xe đạp cơ truyền thống"
      ],
      ans: 0,
      exp: "Theo Luật Giao thông đường bộ, người từ đủ 16 tuổi được lái xe gắn máy dưới 50 cm³ hoặc xe máy điện công suất không quá 4 kW."
    },
    {
      q: "Đặc điểm nhận diện của nhóm Biển báo cấm trong hệ thống báo hiệu đường bộ là:",
      options: [
        "Hình tròn, viền đỏ, nền trắng, hình vẽ màu đen",
        "Hình tam giác đều, viền đỏ, nền vàng, hình vẽ màu đen",
        "Hình tròn, nền xanh lam, hình vẽ màu trắng",
        "Hình chữ nhật, nền xanh lam, hình vẽ màu trắng"
      ],
      ans: 0,
      exp: "Biển báo cấm có dạng hình tròn, viền đỏ, nền trắng, hình vẽ màu đen biểu thị điều cấm."
    }
  ],
  5: [
    {
      q: "Mối đe dọa an ninh phi truyền thống có đặc trưng cơ bản nào sau đây?",
      options: [
        "Mang tính phi quân sự, xuyên biên giới, tác động trên diện rộng (biến đổi khí hậu, an ninh mạng, khủng bố, dịch bệnh)",
        "Chỉ xảy ra bằng xung đột vũ trang quy ước giữa quân đội hai quốc gia",
        "Chỉ giới hạn trong phạm vi biên giới một tỉnh nội địa",
        "Không gây tổn thất về kinh tế và tính mạng con người"
      ],
      ans: 0,
      exp: "An ninh phi truyền thống là các mối đe dọa xuyên quốc gia phi vũ trang như an ninh mạng, biến đổi khí hậu, khủng bố, dịch bệnh."
    },
    {
      q: "Lực lượng nào giữ vai trò nòng cốt, chủ trì trong thực hiện nhiệm vụ bảo đảm an ninh quốc gia và trật tự an toàn xã hội?",
      options: [
        "Công an nhân dân",
        "Thanh tra Giao thông",
        "Đoàn Thanh niên Cộng sản Hồ Chí Minh",
        "Dân quân tự vệ biển"
      ],
      ans: 0,
      exp: "CAND là lực lượng nòng cốt, trực tiếp thực hiện nhiệm vụ bảo vệ an ninh quốc gia và bảo đảm trật tự an toàn xã hội."
    }
  ],
  6: [
    {
      q: "Hành vi nào sau đây bị Luật An ninh mạng năm 2018 nghiêm cấm tuyệt đối?",
      options: [
        "Đăng tải tin giả, xúc phạm nhân phẩm người khác, phát tán mã độc và tấn công mạng",
        "Học tập trực tuyến trên các nền tảng giáo dục hợp pháp",
        "Sử dụng phần mềm diệt virus có bản quyền",
        "Bật tính năng xác thực 2 bước (2FA) bảo vệ tài khoản"
      ],
      ans: 0,
      exp: "Điều 8 Luật An ninh mạng 2018 cấm xúc phạm danh dự, lan truyền tin sai sự thật, tấn công mạng và phát tán mã độc."
    },
    {
      q: "Mã OTP (One Time Password) dùng trong giao dịch ngân hàng có nguyên tắc bảo mật tối thượng là:",
      options: [
        "Tuyệt đối KHÔNG chia sẻ mã OTP cho bất kỳ ai, kể cả người xưng là công an hay nhân viên ngân hàng",
        "Chia sẻ cho bạn bè thân thiết khi được nhờ nạp tiền",
        "Đọc mã OTP cho người gọi điện thoại tự xưng là cán bộ điều tra",
        "Đăng tải ảnh chụp màn hình mã OTP lên mạng xã hội"
      ],
      ans: 0,
      exp: "Mã OTP là chìa khóa bảo mật cuối cùng; ngân hàng và cơ quan công an không bao giờ yêu cầu người dân cung cấp OTP."
    }
  ],
  7: [
    {
      q: "Khi phát hiện một vật lạ nghi là bom, mìn hoặc vật nổ sau chiến tranh, hành động ĐÚNG NHẤT là:",
      options: [
        "Dừng lại, lùi ra xa an toàn, cắm biển cảnh báo và báo ngay cơ quan công an hoặc quân sự",
        "Dùng cành cây chọc thử xem có phát nổ không",
        "Nhặt mang về nhà tháo phế liệu bán lấy tiền",
        "Rủ các bạn xung quanh cùng lại gần xem và chụp ảnh quay video"
      ],
      ans: 0,
      exp: "Quy trình 4 bước an toàn: Dừng lại - Lùi xa - Cảnh báo - Báo cáo cơ quan chức năng. Tuyệt đối không chạm vào vật nổ."
    },
    {
      q: "Khi xảy ra cháy nổ, số điện thoại khẩn cấp cần gọi ngay lập tức tại Việt Nam là:",
      options: [
        "114 (Cảnh sát Phòng cháy, chữa cháy và Cứu nạn, cứu hộ)",
        "113 (Cảnh sát phản ứng nhanh)",
        "115 (Cấp cứu y tế)",
        "111 (Tổng đài Quốc gia Bảo vệ Trẻ em)"
      ],
      ans: 0,
      exp: "Số 114 là đường dây nóng khẩn cấp báo cháy và cứu nạn cứu hộ (hoàn toàn miễn cước cuộc gọi)."
    }
  ],
  8: [
    {
      q: "Theo Điều lệnh Quản lí bộ đội, quân nhân xưng hô với nhau như thế nào trong quan hệ công tác?",
      options: [
        "Xưng 'Tôi' và gọi đối phương là 'Đồng chí' kèm theo cấp bậc hoặc chức vụ",
        "Xưng hô mày - tao thân mật",
        "Chỉ gọi tên riêng không cần cấp bậc",
        "Xưng 'Em' và gọi cấp trên là 'Anh'"
      ],
      ans: 0,
      exp: "Quân nhân xưng hô với nhau bằng 'Tôi' và 'Đồng chí' để thể hiện sự bình đẳng giai cấp, tôn trọng và tính kỷ luật chính quy."
    },
    {
      q: "Nội dung điều dạy thứ 4 trong Sáu điều Bác Hồ dạy Công an nhân dân là:",
      options: [
        "Đối với Nhân dân, phải: Kính trọng, lễ phép",
        "Đối với tự mình, phải: Cần, kiệm, liêm, chính",
        "Đối với đồng sự, phải: Thân ái, giúp đỡ",
        "Đối với địch, phải: Cương quyết, khôn khéo"
      ],
      ans: 0,
      exp: "Sáu điều Bác dạy: Đối với Nhân dân, phải: Kính trọng, lễ phép."
    }
  ],
  9: [
    {
      q: "Ở tư thế 'Nghiêm', hai bàn chân của người học mở một góc bao nhiêu độ?",
      options: [
        "Khoảng 45 độ (hai gót chân chụm sát nhau)",
        "Khoảng 60 độ",
        "Khoảng 90 độ (vuông góc)",
        "Song song thẳng hàng"
      ],
      ans: 0,
      exp: "Tư thế nghiêm: Hai gót chân chụm sát, hai bàn chân mở hình chữ V một góc khoảng 45 độ, hai đầu gối thẳng."
    },
    {
      q: "Khi thực hiện động tác 'Đằng sau — QUAY', người học xoay người một góc bao nhiêu độ và theo hướng nào?",
      options: [
        "Xoay 180 độ từ trái qua phải ra phía sau",
        "Xoay 90 độ sang bên trái",
        "Xoay 180 độ từ phải qua trái",
        "Xoay 360 độ một vòng tròn"
      ],
      ans: 0,
      exp: "Đằng sau quay: Lấy gót chân phải và mũi chân trái làm trụ, xoay người từ trái qua phải 180 độ ra phía sau."
    }
  ],
  10: [
    {
      q: "Trình tự 4 bước tập hợp đội hình Tiểu đội của Tiểu đội trưởng là:",
      options: [
        "Bước 1: Tập hợp → Bước 2: Điểm số → Bước 3: Chỉnh đốn hàng ngũ → Bước 4: Giải tán",
        "Bước 1: Điểm số → Bước 2: Tập hợp → Bước 3: Chỉnh đốn → Bước 4: Giải tán",
        "Bước 1: Chỉnh đốn → Bước 2: Tập hợp → Bước 3: Điểm số → Bước 4: Giải tán",
        "Bước 1: Tập hợp → Bước 2: Chỉnh đốn → Bước 3: Giải tán → Bước 4: Điểm số"
      ],
      ans: 0,
      exp: "Quy trình chuẩn: 1. Tập hợp → 2. Điểm số → 3. Chỉnh đốn hàng ngũ → 4. Giải tán."
    },
    {
      q: "Khoảng cách giữa hai chiến sĩ đứng cạnh nhau trong đội hình hàng ngang của tiểu đội là:",
      options: [
        "70 cm (tính giữa hai gót chân, hoặc khoảng 20 cm giữa hai khuỷu tay chống hông)",
        "100 cm (1 mét)",
        "40 cm",
        "150 cm"
      ],
      ans: 0,
      exp: "Khoảng cách giữa 2 chiến sĩ trong hàng ngang là 70 cm giữa 2 gót chân (cự ly giữa 2 hàng dọc là 1 m)."
    }
  ],
  11: [
    {
      q: "Tư thế vận động 'Trườn' thường được áp dụng trong tình huống chiến trường nào?",
      options: [
        "Địa hình hoàn toàn bằng phẳng trống trải, vật che chỉ cao 20 - 30 cm hoặc dưới hỏa lực bắn thẳng dữ dội của địch",
        "Khi vật che khuất cao ngang tầm ngực hoặc đêm tối",
        "Khi cần mang vác súng đạn cồng kềnh hoặc cáng thương binh",
        "Khi cơ động trên đường nhựa không có chướng ngại vật"
      ],
      ans: 0,
      exp: "Động tác trườn áp sát toàn bộ ngực, bụng mặt sát đất dùng khi địa hình rất thấp phẳng hoặc dưới làn đạn dày đặc."
    },
    {
      q: "Điểm khác biệt cốt lõi giữa 'Vật che khuất' và 'Vật che đỡ' trong chiến đấu là:",
      options: [
        "Vật che đỡ vừa che mắt địch vừa cản được đạn mảnh bom; Vật che khuất chỉ che mắt địch chứ không cản được đạn",
        "Cả hai loại đều chống được mảnh đạn pháo",
        "Vật che khuất bảo vệ tốt hơn vật che đỡ",
        "Vật che đỡ chỉ dùng được vào ban đêm"
      ],
      ans: 0,
      exp: "Vật che khuất (bụi cây, cỏ) chỉ che mắt nhìn; Vật che đỡ (gờ đá, tường bê tông, bờ ruộng dày) vừa che mắt vừa chống được đạn."
    }
  ],
  12: [
    {
      q: "Khi bị bỏng nhiệt do nước sôi hoặc lửa, hành động sơ cứu ban đầu ĐÚNG NHẤT là:",
      options: [
        "Ngâm hoặc dội ngay vùng bỏng dưới vòi nước sạch mát liên tục 15 – 20 phút",
        "Chườm ngay đá lạnh trực tiếp lên vết bỏng",
        "Bôi kem đánh răng, mỡ trăn hoặc nước mắm lên vết bỏng",
        "Chọc vỡ ngay các nốt bọng nước phồng rộp"
      ],
      ans: 0,
      exp: "Ngâm xối nước sạch mát 15 - 20 phút giúp hạ nhiệt mô tế bào; tuyệt đối không dùng đá lạnh hoặc bôi chất lạ."
    },
    {
      q: "Quy tắc nới Garô cầm máu động mạch để tránh hoại tử chi là:",
      options: [
        "Cứ sau 45 – 60 phút phải nới garô 1 lần từ từ trong 1 – 2 phút, không để quá 3 – 4 giờ",
        "Buộc chặt liên tục 8 tiếng không được nới",
        "Không bao giờ được nới garô cho đến khi đến bệnh viện",
        "Cứ 10 phút lại tháo hẳn garô vứt đi"
      ],
      ans: 0,
      exp: "Quy tắc an toàn garô: 45 - 60 phút nới 1 lần (1 - 2 phút) để máu nuôi dưỡng chi dưới, tránh hoại tử phải cưa cụt chi."
    }
  ]
};

// 25 Exam Questions for Trạng Nguyên modal
const examQuestions = [
  {
    q: "Ngày truyền thống của Quân đội nhân dân Việt Nam là ngày nào?",
    options: ["22/12/1944", "19/8/1945", "28/3/1935", "30/4/1975"],
    ans: 0,
    exp: "Ngày 22/12/1944 là ngày thành lập Đội VN Tuyên truyền Giải phóng quân."
  },
  {
    q: "Tiền thân của Công an nhân dân Việt Nam ra đời trong cao trào cách mạng nào?",
    options: ["Tổng khởi nghĩa Cách mạng Tháng Tám năm 1945", "Kháng chiến chống Pháp 1946", "Xô viết Nghệ Tĩnh 1930", "Chiến dịch Điện Biên Phủ 1954"],
    ans: 0,
    exp: "Ngày 19/8/1945 là ngày truyền thống của lực lượng CAND Việt Nam."
  },
  {
    q: "Lực lượng nào là lực lượng vũ trang quần chúng không thoát ly sản xuất, công tác?",
    options: ["Dân quân tự vệ", "Bộ đội chủ lực", "Cảnh sát cơ động", "Cảnh sát biển"],
    ans: 0,
    exp: "DQTV là lực lượng vũ trang quần chúng không thoát ly sản xuất, công tác."
  },
  {
    q: "Cấp bậc hàm cao nhất của sĩ quan Quân đội nhân dân Việt Nam là:",
    options: ["Đại tướng", "Thượng tướng", "Trung tướng", "Đại tá"],
    ans: 0,
    exp: "Cấp Tướng gồm 4 bậc: Thiếu tướng, Trung tướng, Thượng tướng, Đại tướng."
  },
  {
    q: "Độ tuổi tham gia Dân quân tự vệ của công dân nam trong thời bình là:",
    options: ["Từ đủ 18 tuổi đến hết 45 tuổi", "Từ 18 đến 25 tuổi", "Từ 20 đến 50 tuổi", "Từ 17 đến 40 tuổi"],
    ans: 0,
    exp: "Theo Luật DQTV 2019, công dân nam từ đủ 18 đến hết 45 tuổi có nghĩa vụ tham gia DQTV."
  },
  {
    q: "Heroin thuộc nhóm chất ma túy nào sau đây?",
    options: ["Ma túy bán tổng hợp (chiết xuất từ morphin trong thuốc phiện)", "Ma túy tự nhiên", "Ma túy tổng hợp hoàn toàn", "Chất không gây nghiện"],
    ans: 0,
    exp: "Heroin là ma túy bán tổng hợp, độc tính gấp hàng chục lần morphin."
  },
  {
    q: "Hành vi nào sau đây của học sinh bị coi là dấu hiệu vi phạm pháp luật về ma túy?",
    options: ["Tàng trữ, cất giấu hoặc cầm hộ gói bột lạ cho người khác", "Tố giác đối tượng bán ma túy cho công an", "Tham gia diễn đàn tuyên truyền phòng chống ma túy", "Từ chối dùng thử thuốc lá điện tử lạ"],
    ans: 0,
    exp: "Cầm hộ, tàng trữ ma túy cho người khác dù không biết vẫn có thể bị xử lý hình sự."
  },
  {
    q: "Học sinh đủ 16 tuổi được điều khiển loại xe nào khi tham gia giao thông?",
    options: ["Xe gắn máy dưới 50 cm³ hoặc xe máy điện dưới 4 kW", "Xe mô tô trên 110 cm³", "Xe mô tô phân khối lớn 175 cm³", "Xe ô tô con 4 chỗ"],
    ans: 0,
    exp: "Đủ 16 tuổi được lái xe gắn máy dung tích dưới 50 cm³ hoặc xe máy điện."
  },
  {
    q: "Biển báo giao thông có hình tròn, nền xanh lam, hình vẽ màu trắng thuộc nhóm biển nào?",
    options: ["Biển hiệu lệnh (bắt buộc phải thi hành)", "Biển báo cấm", "Biển cảnh báo nguy hiểm", "Biển chỉ dẫn"],
    ans: 0,
    exp: "Biển hiệu lệnh có hình tròn, nền xanh lam, hình vẽ trắng."
  },
  {
    q: "Mức nồng độ cồn cho phép đối với người điều khiển phương tiện giao thông tại Việt Nam hiện nay là:",
    options: ["0 (Tuyệt đối không có nồng độ cồn trong máu và hơi thở)", "Dưới 0.25 mg/l khí thở", "Dưới 50 mg/100 ml máu", "Uống 1 lon bia thì được phép lái"],
    ans: 0,
    exp: "Pháp luật Việt Nam nghiêm cấm hoàn toàn nồng độ cồn khi lái xe."
  },
  {
    q: "Mối đe dọa an ninh phi truyền thống nào sau đây đang đe dọa toàn cầu?",
    options: ["Biến đổi khí hậu, an ninh mạng, tội phạm xuyên quốc gia và dịch bệnh", "Chiến tranh thế giới", "Các cuộc biểu tình hợp pháp", "Giao lưu văn hóa quốc tế"],
    ans: 0,
    exp: "An ninh phi truyền thống bao gồm an ninh mạng, biến đổi khí hậu, dịch bệnh, khủng bố."
  },
  {
    q: "Đường dây nóng khẩn cấp để tố giác tội phạm, vi phạm trật tự an toàn xã hội là:",
    options: ["113", "114", "115", "111"],
    ans: 0,
    exp: "113 là đường dây nóng Cảnh sát phản ứng nhanh tiếp nhận tin báo an ninh trật tự."
  },
  {
    q: "Luật An ninh mạng của Việt Nam được Quốc hội thông qua và ban hành vào năm nào?",
    options: ["Năm 2018", "Năm 2012", "Năm 2004", "Năm 2022"],
    ans: 0,
    exp: "Luật An ninh mạng được Quốc hội ban hành năm 2018 và có hiệu lực từ 01/01/2019."
  },
  {
    q: "Để bảo vệ tài khoản mạng xã hội trước nguy cơ bị đánh cắp, biện pháp tốt nhất là:",
    options: ["Bật tính năng xác thực 2 bước (2FA) và đặt mật khẩu mạnh", "Đặt mật khẩu là 123456 cho dễ nhớ", "Chia sẻ mật khẩu cho nhóm bạn thân", "Đăng nhập tài khoản trên các máy tính công cộng"],
    ans: 0,
    exp: "Bật 2FA và dùng mật khẩu mạnh là giải pháp bảo mật tài khoản vững chắc nhất."
  },
  {
    q: "Quy trình xử lý an toàn đầu tiên khi phát hiện bom mìn còn sót lại là:",
    options: ["Dừng lại ngay, tuyệt đối không chạm vào vật nổ và lùi ra xa", "Dùng gậy đập thử xem có nổ không", "Gọi người thân lại cùng đào lên xem", "Đốt lửa sưởi ấm bên cạnh vật nổ"],
    ans: 0,
    exp: "Nguyên tắc sinh tử: Dừng lại ngay, không chạm vào vật nổ, lùi xa và báo chính quyền."
  },
  {
    q: "Quy tắc 'Dừng lại — Nằm xuống — Lăn tròn' được áp dụng trong tình huống nguy hiểm nào?",
    options: ["Khi quần áo trên người bị bén lửa đám cháy", "Khi bị đuối nước", "Khi bị điện giật", "Khi nghe thấy tiếng sấm sét"],
    ans: 0,
    exp: "Dừng lại - Nằm xuống - Lăn tròn giúp dập tắt ngọn lửa bén trên quần áo hiệu quả."
  },
  {
    q: "Trong Quân đội nhân dân Việt Nam, quân nhân xưng hô chính thức với nhau bằng từ gì?",
    options: ["Tôi và Đồng chí", "Tôi và Bác", "Mày và Tao", "Em và Thầy"],
    ans: 0,
    exp: "Xưng hô điều lệnh: 'Tôi' và 'Đồng chí'."
  },
  {
    q: "Bác Hồ gửi thư nêu Sáu điều dạy Công an nhân dân vào ngày tháng năm nào?",
    options: ["11/3/1948", "19/8/1945", "02/9/1945", "19/5/1954"],
    ans: 0,
    exp: "Bác Hồ gửi thư cho Công an Khu XII nêu 6 điều dạy ngày 11/3/1948."
  },
  {
    q: "Trong động tác 'Quay bên phải', góc xoay của thân người là bao nhiêu độ?",
    options: ["90 độ", "45 độ", "180 độ", "360 độ"],
    ans: 0,
    exp: "Quay bên phải xoay một góc vuông 90 độ sang phải."
  },
  {
    q: "Khi đi đều trong hàng ngũ quân sự, tay đánh ra trước cách thân người bao nhiêu cm?",
    options: ["Khoảng 20 cm (cẳng tay gập ngang ngực)", "Khoảng 50 cm", "Đánh thẳng đứng lên trời", "Buông xuôi không đánh tay"],
    ans: 0,
    exp: "Tay đánh ra trước cách thân 20 cm, cẳng tay gập ngang thắt lưng ngực."
  },
  {
    q: "Trong 4 bước tập hợp tiểu đội, bước thứ hai là bước gì?",
    options: ["Điểm số", "Tập hợp", "Chỉnh đốn hàng ngũ", "Giải tán"],
    ans: 0,
    exp: "Trình tự: 1. Tập hợp → 2. Điểm số → 3. Chỉnh đốn hàng ngũ → 4. Giải tán."
  },
  {
    q: "Vật nào sau đây được coi là 'Vật che đỡ' trên chiến trường?",
    options: ["Bờ ruộng dày, gờ đá tự nhiên, thân cây to, tường bê tông", "Bụi cỏ may cao ngang bụng", "Vườn ngô xanh tốt", "Màn khói ngụy trang"],
    ans: 0,
    exp: "Bờ ruộng dày, đá, bê tông vừa che mắt địch vừa cản được đạn mảnh bom."
  },
  {
    q: "Thời gian xối nước sạch làm mát ban đầu cho nạn nhân bị bỏng nhiệt là bao lâu?",
    options: ["15 đến 20 phút liên tục", "Chỉ dội 5 giây", "Ngâm 2 tiếng đồng hồ", "Không được dùng nước"],
    ans: 0,
    exp: "Ngâm dội nước mát 15 - 20 phút để hạ nhiệt tế bào mô bị tổn thương."
  },
  {
    q: "Tỉ lệ vàng giữa số lần ép tim ngoài lồng ngực và thổi ngạt trong CPR cấp cứu ngừng thở là:",
    options: ["30 lần ép tim : 2 lần thổi ngạt", "15 lần ép tim : 5 lần thổi ngạt", "50 lần ép tim : 1 lần thổi ngạt", "Chỉ ép tim không thổi ngạt"],
    ans: 0,
    exp: "Tỉ lệ chuẩn quốc tế: 30 lần ép tim kết hợp 2 lần thổi ngạt liên tục."
  },
  {
    q: "Khi chuyển nạn nhân nghi ngờ gãy cột sống, nguyên tắc bắt buộc là:",
    options: ["Chuyển trên cáng cứng phẳng, giữ thẳng trục cơ thể, không cõng gập người", "Cõng trên lưng chạy thật nhanh", "Hai người kiệu tay gập lưng", "Để nạn nhân tự đi bộ đến bệnh viện"],
    ans: 0,
    exp: "Nghi ngờ gãy cột sống bắt buộc phải dùng cáng cứng phẳng để tránh đứt tủy sống gây liệt toàn thân."
  }
];

// Sidebar generator
function renderSidebarHTML() {
  let html = '<nav class="space-y-6 text-xs">';

  html += `
    <div>
      <div class="text-[11px] font-black uppercase tracking-wider text-rose-700 dark:text-rose-400 px-3 py-1.5 flex items-center justify-between bg-rose-50 dark:bg-rose-950/60 rounded-xl mb-2">
        <span>Mục lục 12 bài học</span>
        <span class="text-[10px] text-rose-600 font-bold">KNTT</span>
      </div>
      <div class="space-y-1">
  `;

  allLessons.forEach(l => {
    html += `
      <a href="#bai-${l.num}" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-rose-200 dark:hover:border-rose-800/60 text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50/70 dark:hover:bg-rose-950/50 transition">
        <div class="flex items-center justify-between gap-1.5 mb-0.5">
          <span class="font-bold text-xs text-rose-600 dark:text-rose-400">Bài ${l.num}</span>
          <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0 group-hover:text-rose-500 transition">${l.badge}</span>
        </div>
        <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition leading-snug">
          ${l.title}
        </div>
      </a>
    `;
  });

  html += `
      </div>
    </div>
    <div>
      <div class="text-[11px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 px-3 py-1.5 flex items-center justify-between bg-amber-50 dark:bg-amber-950/60 rounded-xl mb-2">
        <span>Tra cứu & Ôn tập</span>
        <span class="text-[10px] text-amber-600 font-bold">2 mục</span>
      </div>
      <div class="space-y-1">
        <a href="#bang-on-tap-nhanh" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-amber-200 dark:hover:border-amber-800/60 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50/70 dark:hover:bg-amber-950/50 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-amber-600 dark:text-amber-400">Bảng ôn tập</span>
            <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">12 bài</span>
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition leading-snug">
            Bảng tổng hợp trọng tâm 12 bài học
          </div>
        </a>
        <a href="#thuat-ngu-trong-sach" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-amber-200 dark:hover:border-amber-800/60 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50/70 dark:hover:bg-amber-950/50 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-amber-600 dark:text-amber-400">Từ điển Thuật ngữ</span>
            <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">Chuyên ngành</span>
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition leading-snug">
            Giải thích thuật ngữ quốc phòng an ninh
          </div>
        </a>
      </div>
    </div>
  </nav>`;

  return html;
}

// Main Articles HTML generator
function renderMainArticlesHTML() {
  let html = '';

  allLessons.forEach(l => {
    const quizList = lessonQuizzes[l.num] || [];

    // Diagrams insertion
    let diagramSVG = '';
    if (l.num === 1) diagramSVG = diagrams.armedForcesSVG;
    else if (l.num === 4) diagramSVG = diagrams.trafficSignsSVG;
    else if (l.num === 6) diagramSVG = diagrams.cyberSecuritySVG;
    else if (l.num === 7) diagramSVG = diagrams.bombSafetySVG;
    else if (l.num === 10) diagramSVG = diagrams.squadFormationSVG;
    else if (l.num === 12) diagramSVG = diagrams.firstAidSVG;

    html += `
      <article id="bai-${l.num}" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition mb-10">
        <!-- Lesson Header Badge -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-xs sm:text-sm shadow-sm shadow-red-500/20 tracking-wide">
              <i class="fa-solid fa-shield-halved"></i> Bài ${l.num}
            </span>
            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200/60 dark:border-red-900/60">
              ${l.badge}
            </span>
          </div>
          <button onclick="toggleBookmark('bai-${l.num}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu bài học">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </div>

        <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 leading-snug tracking-tight">
          <span class="text-red-600 dark:text-red-400">Bài ${l.num}:</span> ${l.title}
        </h3>

        <!-- Objectives Box -->
        <div class="p-4 bg-gradient-to-r from-red-50/80 via-rose-50/50 to-slate-50 dark:from-red-950/30 dark:via-slate-800/50 dark:to-slate-800/40 rounded-2xl border border-red-100 dark:border-red-900/40 mb-6 text-xs sm:text-sm">
          <div class="flex items-center gap-2 mb-2 font-bold text-red-700 dark:text-red-400 uppercase tracking-wider text-xs">
            <i class="fa-solid fa-bullseye"></i> Mục tiêu bài học
          </div>
          <ul class="space-y-1.5 text-slate-700 dark:text-slate-300">
            ${l.objectives.map(obj => `
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-circle-check text-red-500 text-xs mt-1 shrink-0"></i>
                <span>${obj}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Render Diagram if exists -->
        ${diagramSVG}

        <!-- Render Content Sections -->
        <div class="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          ${l.sections.map(sec => `
            <div class="pt-2">
              <div class="flex items-center gap-2.5 mb-3 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                <span class="w-8 h-8 rounded-xl bg-red-100 dark:bg-red-950/80 text-red-600 dark:text-red-400 flex items-center justify-center text-sm shrink-0">
                  <i class="fa-solid ${sec.icon}"></i>
                </span>
                <div>
                  <h4 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
                    ${sec.title}
                  </h4>
                  ${sec.desc ? `<p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">${sec.desc}</p>` : ''}
                </div>
              </div>

              <div class="space-y-4">
                ${sec.cards.map(c => `
                  <div class="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 shadow-xs">
                    <h5 class="font-black text-sm sm:text-base text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                      <i class="fa-solid fa-shield-halved text-red-500 text-xs"></i>
                      ${c.term}
                    </h5>
                    ${c.lead ? `<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3">${c.lead}</p>` : ''}

                    ${c.grid ? `
                      <div class="grid grid-cols-1 ${c.grid.length >= 3 ? 'md:grid-cols-3' : c.grid.length === 2 ? 'md:grid-cols-2' : ''} gap-3 mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                        ${c.grid.map(g => `
                          <div class="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60 flex flex-col justify-start">
                            <strong class="text-red-600 dark:text-red-400 font-bold block mb-1 text-xs sm:text-sm flex items-center gap-1.5">
                              <i class="fa-solid fa-chevron-right text-[10px]"></i> ${g.term}
                            </strong>
                            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${g.desc}</p>
                          </div>
                        `).join('')}
                      </div>
                    ` : ''}

                    ${c.items ? `
                      <div class="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                        <ul class="space-y-2">
                          ${c.items.map(it => `
                            <li class="flex items-start gap-2.5">
                              <i class="fa-solid fa-circle-dot text-red-500 text-[10px] mt-1 shrink-0"></i>
                              <div class="flex-1">${it}</div>
                            </li>
                          `).join('')}
                        </ul>
                      </div>
                    ` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Safety Alert if exists -->
        ${l.alert ? `
          <div class="mt-6 p-4 sm:p-5 bg-amber-50/90 dark:bg-amber-950/40 rounded-2xl border-2 border-amber-400 dark:border-amber-700/80 text-amber-950 dark:text-amber-200 text-xs sm:text-sm leading-relaxed shadow-xs">
            <div class="flex items-center gap-2 mb-2 pb-2 border-b border-amber-200/80 dark:border-amber-800/80 font-bold text-amber-900 dark:text-amber-300">
              <span class="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </span>
              <span class="text-xs sm:text-sm uppercase tracking-wide">${l.alert.title}</span>
            </div>
            <p class="font-medium">${l.alert.content}</p>
          </div>
        ` : ''}

        <!-- Mini-Quiz for Lesson -->
        ${quizList.length > 0 ? `
          <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-xs sm:text-sm font-black uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center gap-2">
                <i class="fa-solid fa-circle-question"></i> Mini-Quiz Củng Cố Bài ${l.num} (${quizList.length} câu)
              </h4>
              <span class="text-[11px] font-semibold text-slate-400">Chọn đáp án đúng</span>
            </div>
            <div class="space-y-4">
              ${quizList.map((qItem, qIdx) => `
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm">
                  <p class="font-bold text-slate-900 dark:text-white mb-3">
                    <span class="text-red-600 dark:text-red-400">Câu ${qIdx + 1}:</span> ${qItem.q}
                  </p>
                  <div class="space-y-2">
                    ${qItem.options.map((opt, optIdx) => `
                      <button type="button" 
                        onclick="checkLessonQuiz(this, ${optIdx === qItem.ans}, '${qItem.exp.replace(/'/g, "\\'")}')"
                        class="quiz-btn w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/70 text-slate-700 dark:text-slate-300 font-medium transition flex items-center justify-between gap-2">
                        <span>${opt}</span>
                        <span class="quiz-indicator hidden text-sm font-bold"></span>
                      </button>
                    `).join('')}
                  </div>
                  <div class="quiz-feedback hidden mt-3 p-3 rounded-xl text-xs font-medium"></div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </article>
    `;
  });

  // Appendix: Bảng ôn tập nhanh & Tra cứu thuật ngữ
  html += `
    <div id="section-tra-cuu" class="space-y-10 mb-12">
      <!-- 1. Bảng ôn tập nhanh -->
      <article id="bang-on-tap-nhanh" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <span class="px-3 py-1 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-black text-xs uppercase tracking-wider">
            Ôn tập tổng hợp
          </span>
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Bảng ôn tập nhanh trọng tâm 12 bài học
          </h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                <th class="p-3 border border-slate-200 dark:border-slate-700 w-16 text-center">Bài</th>
                <th class="p-3 border border-slate-200 dark:border-slate-700">Trọng tâm cốt lõi cần nhớ</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 1</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Ba thành phần lực lượng vũ trang nhân dân (QĐND, CAND, DQTV); các mốc truyền thống (22/12/1944, 19/8/1945, 28/3/1935); bản chất giai cấp công nhân và nghệ thuật quân sự Việt Nam.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 2</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Mục tiêu môn GDQP-AN; vai trò, chức trách của sĩ quan; hệ thống các luật: Luật Quốc phòng, Luật ANQG, Luật Sĩ quan (4 cấp, 12 bậc), Luật CAND, Luật Biên giới, Luật Cảnh sát biển.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 3</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Khái niệm chất ma tuý, chất hướng thần, tiền chất; phân loại ma túy tự nhiên, bán tổng hợp, tổng hợp; tác hại toàn diện đến cá nhân, gia đình, xã hội; quy tắc vàng phòng tránh '3 Không'.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 4</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Dấu hiệu vi phạm ATGT; quy tắc giao thông đường bộ (độ tuổi lái xe dưới 50cc vs trên 50cc), đường sắt, đường thuỷ, hàng không; nhận diện 4 nhóm biển báo (cấm, nguy hiểm, hiệu lệnh, chỉ dẫn).</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 5</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Khái niệm an ninh quốc gia (8 lĩnh vực) và trật tự an toàn xã hội; an ninh truyền thống vs phi truyền thống; vai trò nòng cốt của CAND và QĐND; phong trào Toàn dân bảo vệ ANTQ.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 6</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Khái niệm an ninh mạng; hành vi bị nghiêm cấm; thủ đoạn lừa đảo qua mạng (phishing, ransomware); mô hình phòng vệ 4 lớp (mật khẩu mạnh, xác thực 2 bước 2FA, bảo vệ OTP, văn hóa mạng).</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 7</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Nhận biết mối nguy bom mìn (bom bi, mìn lá, đạn pháo), vũ khí hoá/sinh học, công nghệ cao, thiên tai, dịch bệnh; quy tắc 4 bước khi gặp vật nổ; kỹ năng thoát hiểm đám cháy gọi 114.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 8</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Điều lệnh Quản lí bộ đội (10 lời thề danh dự, xưng hô 'Đồng chí - Tôi', chào hỏi, trang phục, 11 chế độ trong ngày); Điều lệnh CAND (6 điều Bác Hồ dạy, vì nước quên thân, vì dân phục vụ).</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 9</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Đội ngũ từng người: Nghiêm (chân 45 độ), nghỉ, quay tại chỗ (bên phải, bên trái, nửa phải/trái, đằng sau), đi đều, giậm chân, chào/thôi chào, chạy đều. Dự lệnh và động lệnh.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 10</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Đội ngũ tiểu đội: 4 bước tập hợp (tập hợp, điểm số, chỉnh đốn, giải tán); hàng ngang (khoảng cách 70 cm), hàng dọc (cự li 1 m); động tác ra khỏi hàng và trở về vị trí.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 11</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Ý nghĩa giáo dục thể chất và chiến thuật của 13 tư thế vận động trong chiến đấu (đi khom, chạy khom, bò cao, bò thấp, lê, trườn, vọt tiến, dừng lại, lăn nghiêng...); lợi dụng vật che khuất và vật che đỡ.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 12</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Nguyên tắc Giờ vàng; sơ cấp cứu 5 tai nạn (điện giật, đuối nước, say nắng, bỏng nhiệt làm mát 15-20p, rắn cắn); kĩ thuật 5 kiểu băng bó, nẹp cố định xương gãy qua 2 khớp, đặt và nới garô 45-60p, CPR và chuyển thương an toàn.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <!-- 2. Tra cứu thuật ngữ chuyên ngành -->
      <article id="thuat-ngu-trong-sach" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <span class="px-3 py-1 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 font-black text-xs uppercase tracking-wider">
            Từ điển chuyên ngành
          </span>
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Giải thích thuật ngữ Quốc phòng và An ninh
          </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div class="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/60">
            <strong class="text-red-600 dark:text-red-400 font-bold block mb-1 text-sm">Lực lượng thường trực</strong>
            <p class="text-slate-600 dark:text-slate-400">Bộ phận nòng cốt của QĐND và CAND luôn sẵn sàng chiến đấu, đóng quân tập trung trong doanh trại, duy trì chế độ trực chỉ huy, trực ban, trực chiến 24/24 giờ.</p>
          </div>
          <div class="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/60">
            <strong class="text-red-600 dark:text-red-400 font-bold block mb-1 text-sm">Lực lượng dự bị động viên</strong>
            <p class="text-slate-600 dark:text-slate-400">Gồm quân nhân dự bị và phương tiện kỹ thuật dự bị đã được đăng ký, quản lý và sắp xếp vào đơn vị dự bị động viên để sẵn sàng bổ sung cho lực lượng thường trực khi có lệnh động viên.</p>
          </div>
          <div class="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/60">
            <strong class="text-red-600 dark:text-red-400 font-bold block mb-1 text-sm">Chất hướng thần</strong>
            <p class="text-slate-600 dark:text-slate-400">Chất tự nhiên hoặc tổng hợp có tác động lên hệ thần kinh trung ương, nếu sử dụng nhiều lần có thể dẫn đến tình trạng nghiện hoặc rối loạn tâm thần nguy hiểm.</p>
          </div>
          <div class="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/60">
            <strong class="text-red-600 dark:text-red-400 font-bold block mb-1 text-sm">Vật che khuất & Vật che đỡ</strong>
            <p class="text-slate-600 dark:text-slate-400">Vật che khuất chỉ che mắt nhìn của đối phương (bụi cây, rèm cỏ); Vật che đỡ vừa che mắt nhìn vừa ngăn cản được mảnh bom, đầu đạn sát thương (gờ đá, bờ ruộng dày, tường bê tông).</p>
          </div>
          <div class="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/60">
            <strong class="text-red-600 dark:text-red-400 font-bold block mb-1 text-sm">Giờ vàng cấp cứu</strong>
            <p class="text-slate-600 dark:text-slate-400">Khoảng thời gian ngắn ngủi ngay sau khi xảy ra tai nạn thương tích (từ vài phút đến 1 giờ đầu tiên), nếu được xử trí hồi sức cấp cứu đúng cách sẽ cứu sống nạn nhân và hạn chế tối đa di chứng.</p>
          </div>
          <div class="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-900/60">
            <strong class="text-red-600 dark:text-red-400 font-bold block mb-1 text-sm">Garô (Tourniquet)</strong>
            <p class="text-slate-600 dark:text-slate-400">Dụng cụ thắt mạch máu khẩn cấp dùng dây cao su hoặc dải vải có que xoắn để ép chặt động mạch, ngừng hoàn toàn dòng máu chảy phun thành tia khi đứt động mạch lớn hoặc đứt lìa chi.</p>
          </div>
        </div>
      </article>
    </div>
  `;

  return html;
}

// Master HTML compiler
function buildPage() {
  const sidebarHTML = renderSidebarHTML();
  const mainArticlesHTML = renderMainArticlesHTML();

  const fullHTML = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Giáo Dục Quốc Phòng & An Ninh 10 — CodeHub Học Liệu Số</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
          colors: {
            slate: {
              850: '#0f172a',
              900: '#0b1120',
            }
          }
        }
      }
    }
  </script>
  <style>
    .custom-scrollbar::-webkit-scrollbar {
      width: 5px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 4px;
    }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #334155;
    }
    .lesson-card {
      transition: all 0.2s ease-in-out;
    }
  </style>
</head>
<body class="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans antialiased min-h-screen selection:bg-red-500 selection:text-white">

  <!-- Top Sticky Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back Button -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="p-2 rounded-xl text-slate-500 hover:text-red-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-2 text-sm font-semibold">
          <i class="fa-solid fa-arrow-left"></i>
          <span class="hidden sm:inline">Trang chủ</span>
        </a>
        <div class="h-5 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
        <div class="flex items-center gap-2.5">
          <span class="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-rose-600 text-white flex items-center justify-center text-base shadow-sm shadow-red-500/20">
            <i class="fa-solid fa-shield-halved"></i>
          </span>
          <div>
            <h1 class="text-sm font-black text-slate-900 dark:text-white tracking-tight leading-none">
              CodeHub <span class="text-red-600 dark:text-red-400">QP-AN 10</span>
            </h1>
            <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Kết nối tri thức • 12 bài học cốt lõi</span>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2">
        <button onclick="openExamModal()" class="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white text-xs sm:text-sm font-bold shadow-sm shadow-red-500/20 hover:brightness-110 active:scale-95 transition">
          <i class="fa-solid fa-award"></i>
          <span>Thi Trạng Nguyên (25 câu)</span>
        </button>

        <!-- Theme Toggle -->
        <button id="themeToggleBtn" onclick="toggleDarkMode()" class="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Đổi giao diện">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-amber-400"></i>
        </button>

        <!-- Mobile Drawer Toggle -->
        <button onclick="toggleMobileDrawer()" class="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden transition" title="Mục lục bài học">
          <i class="fa-solid fa-bars-staggered text-sm"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Drawer -->
  <div id="mobileDrawer" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden lg:hidden">
    <div class="fixed top-0 bottom-0 left-0 w-80 bg-white dark:bg-slate-900 shadow-2xl p-6 overflow-y-auto custom-scrollbar">
      <div class="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 dark:border-slate-800">
        <span class="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-shield-halved text-red-500"></i> Mục lục môn học
        </span>
        <button onclick="toggleMobileDrawer()" class="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      ${sidebarHTML}
    </div>
  </div>

  <!-- Hero Banner -->
  <div class="bg-gradient-to-b from-red-50/80 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 font-bold text-xs uppercase tracking-wider mb-4 border border-red-200/60 dark:border-red-900/60">
          <i class="fa-solid fa-award"></i> Chương trình Giáo dục Phổ thông 2018
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Giáo dục quốc phòng và an ninh 10
        </h2>
        <p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          Hệ thống hóa đầy đủ kiến thức lý thuyết và kỹ năng thực hành theo bộ sách <strong>Kết nối tri thức với cuộc sống</strong>. Trang bị tinh thần yêu nước, hiểu biết pháp luật, kỹ năng sinh tồn, điều lệnh đội ngũ và sơ cấp cứu ban đầu.
        </p>

        <!-- Quick chips -->
        <div class="flex flex-wrap items-center gap-2.5 mt-6 text-xs">
          <a href="#bai-1" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200/80 dark:border-slate-700 hover:border-red-300 hover:text-red-600 transition shadow-xs">
            <i class="fa-solid fa-shield text-red-500 mr-1.5"></i> Lực lượng VTND
          </a>
          <a href="#bai-3" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200/80 dark:border-slate-700 hover:border-red-300 hover:text-red-600 transition shadow-xs">
            <i class="fa-solid fa-capsules text-red-500 mr-1.5"></i> Phòng chống Ma túy
          </a>
          <a href="#bai-7" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200/80 dark:border-slate-700 hover:border-red-300 hover:text-red-600 transition shadow-xs">
            <i class="fa-solid fa-bomb text-red-500 mr-1.5"></i> Phòng tránh bom mìn (114)
          </a>
          <a href="#bai-12" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200/80 dark:border-slate-700 hover:border-red-300 hover:text-red-600 transition shadow-xs">
            <i class="fa-solid fa-heart-pulse text-red-500 mr-1.5"></i> Cấp cứu chuyển thương (115)
          </a>
          <a href="#bang-on-tap-nhanh" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 font-semibold border border-amber-200/80 dark:border-amber-900/60 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition shadow-xs">
            <i class="fa-solid fa-table-list mr-1.5"></i> Bảng ôn tập nhanh
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Layout -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- Sticky Sidebar -->
      <aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto custom-scrollbar p-5 bg-white dark:bg-slate-850 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
            <i class="fa-solid fa-bars-staggered text-red-500"></i> Mục lục bài học
          </div>
          ${sidebarHTML}
        </div>
      </aside>

      <!-- Main Articles Content -->
      <section class="lg:col-span-3">
        ${mainArticlesHTML}
      </section>

    </div>
  </main>

  <!-- Footer -->
  <footer class="mt-16 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 py-10 text-center text-xs text-slate-500 dark:text-slate-400">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <p class="font-bold text-slate-700 dark:text-slate-300">CodeHub • Nền tảng Học liệu Số Quốc phòng & An ninh 10</p>
      <p>Nội dung biên soạn bám sát SGK Giáo dục quốc phòng và an ninh 10 — Bộ sách Kết nối tri thức với cuộc sống.</p>
    </div>
  </footer>

  <!-- Modal Thi Trạng Nguyên (25 câu) -->
  <div id="examModal" class="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <!-- Modal Header -->
      <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-red-600 to-rose-600 text-white">
        <div class="flex items-center gap-2.5">
          <span class="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-base">
            <i class="fa-solid fa-award"></i>
          </span>
          <div>
            <h3 class="font-black text-base">Thi Trạng Nguyên QP-AN 10</h3>
            <span class="text-[11px] text-red-100">25 câu trắc nghiệm bao quát 12 bài học</span>
          </div>
        </div>
        <button onclick="closeExamModal()" class="p-1 rounded-lg hover:bg-white/20 transition">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <!-- Modal Body -->
      <div id="examModalBody" class="p-6 overflow-y-auto custom-scrollbar flex-1 text-xs sm:text-sm">
        <div id="examContainer" class="space-y-6"></div>

        <div id="examResultBox" class="hidden text-center py-8">
          <div class="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-red-500 text-white flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-red-500/20">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <h4 id="examScoreTitle" class="text-xl font-black text-slate-900 dark:text-white mb-2"></h4>
          <p id="examScoreDesc" class="text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6 text-sm"></p>
          <button onclick="resetExam()" class="px-6 py-2.5 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition">
            Làm lại bài thi
          </button>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between">
        <span id="examCounter" class="text-slate-500 dark:text-slate-400 text-xs font-semibold">Đã hoàn thành: 0 / 25 câu</span>
        <button id="submitExamBtn" onclick="submitExam()" class="px-5 py-2 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition">
          Nộp bài chấm điểm
        </button>
      </div>
    </div>
  </div>

  <script>
    // Theme toggle
    function toggleDarkMode() {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }

    // Mobile drawer toggle
    function toggleMobileDrawer() {
      const drawer = document.getElementById('mobileDrawer');
      drawer.classList.toggle('hidden');
    }

    // Bookmark toggle
    function toggleBookmark(lessonId) {
      let bookmarks = JSON.parse(localStorage.getItem('gdqp10_bookmarks') || '[]');
      const btn = document.querySelector(\`#\${lessonId} .bookmark-btn\`);
      const icon = btn.querySelector('i');
      if (bookmarks.includes(lessonId)) {
        bookmarks = bookmarks.filter(id => id !== lessonId);
        icon.className = 'fa-regular fa-bookmark';
      } else {
        bookmarks.push(lessonId);
        icon.className = 'fa-solid fa-bookmark text-amber-500';
      }
      localStorage.setItem('gdqp10_bookmarks', JSON.stringify(bookmarks));
    }

    // Mini-Quiz logic
    function checkLessonQuiz(btn, isCorrect, exp) {
      const parent = btn.closest('.p-4');
      const allBtns = parent.querySelectorAll('.quiz-btn');
      const feedback = parent.querySelector('.quiz-feedback');

      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:bg-slate-100', 'dark:hover:bg-slate-700/70');
      });

      const indicator = btn.querySelector('.quiz-indicator');
      indicator.classList.remove('hidden');

      if (isCorrect) {
        btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300');
        indicator.innerHTML = '<i class="fa-solid fa-check text-emerald-600"></i>';
        feedback.className = 'quiz-feedback mt-3 p-3 rounded-xl text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800';
        feedback.innerHTML = '<strong class="block mb-0.5"><i class="fa-solid fa-circle-check mr-1"></i> Chính xác!</strong>' + exp;
      } else {
        btn.classList.add('bg-rose-50', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
        indicator.innerHTML = '<i class="fa-solid fa-xmark text-rose-600"></i>';
        feedback.className = 'quiz-feedback mt-3 p-3 rounded-xl text-xs font-medium bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800';
        feedback.innerHTML = '<strong class="block mb-0.5"><i class="fa-solid fa-circle-xmark mr-1"></i> Chưa chính xác!</strong>' + exp;
      }
      feedback.classList.remove('hidden');
    }

    // Exam Modal Logic
    const questions = ${JSON.stringify(examQuestions)};
    let userAnswers = {};

    function openExamModal() {
      const modal = document.getElementById('examModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      renderExamQuestions();
    }

    function closeExamModal() {
      const modal = document.getElementById('examModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function renderExamQuestions() {
      const container = document.getElementById('examContainer');
      container.innerHTML = questions.map((q, idx) => \`
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
          <p class="font-bold text-slate-900 dark:text-white mb-3">
            <span class="text-red-600 dark:text-red-400">Câu \${idx + 1}:</span> \${q.q}
          </p>
          <div class="space-y-2">
            \${q.options.map((opt, optIdx) => \`
              <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/50 cursor-pointer transition">
                <input type="radio" name="exam_q_\${idx}" value="\${optIdx}" onchange="selectExamOption(\${idx}, \${optIdx})" \${userAnswers[idx] === optIdx ? 'checked' : ''} class="w-4 h-4 text-red-600 focus:ring-red-500">
                <span class="text-slate-700 dark:text-slate-300 font-medium">\${opt}</span>
              </label>
            \`).join('')}
          </div>
        </div>
      \`).join('');
      updateExamCounter();
    }

    function selectExamOption(qIdx, optIdx) {
      userAnswers[qIdx] = optIdx;
      updateExamCounter();
    }

    function updateExamCounter() {
      const count = Object.keys(userAnswers).length;
      document.getElementById('examCounter').innerText = \`Đã hoàn thành: \${count} / \${questions.length} câu\`;
    }

    function submitExam() {
      let correct = 0;
      questions.forEach((q, idx) => {
        if (userAnswers[idx] === q.ans) correct++;
      });

      document.getElementById('examContainer').classList.add('hidden');
      document.getElementById('submitExamBtn').classList.add('hidden');
      const resultBox = document.getElementById('examResultBox');
      resultBox.classList.remove('hidden');

      const title = document.getElementById('examScoreTitle');
      const desc = document.getElementById('examScoreDesc');

      const score = (correct / questions.length) * 10;
      title.innerText = \`Kết quả: \${correct} / \${questions.length} câu (\${score.toFixed(1)} điểm)\`;
      
      if (score >= 9) {
        desc.innerText = 'Xuất sắc! Bạn xứng đáng nhận danh hiệu Trạng Nguyên Quốc Phòng An Ninh 10!';
      } else if (score >= 7) {
        desc.innerText = 'Khá giỏi! Bạn đã nắm vững các kiến thức quốc phòng và an ninh cốt lõi!';
      } else if (score >= 5) {
        desc.innerText = 'Đạt yêu cầu! Hãy ôn lại các bài về kỹ năng sinh tồn, điều lệnh và cấp cứu để đạt điểm cao hơn!';
      } else {
        desc.innerText = 'Chưa đạt! Bạn hãy đọc kỹ lại nội dung 12 bài học và thử sức lại nhé!';
      }
    }

    function resetExam() {
      userAnswers = {};
      document.getElementById('examContainer').classList.remove('hidden');
      document.getElementById('submitExamBtn').classList.remove('hidden');
      document.getElementById('examResultBox').classList.add('hidden');
      renderExamQuestions();
    }
  </script>
</body>
</html>`;

  fs.writeFileSync('courses/gdqp_10.html', fullHTML, 'utf8');
  fs.writeFileSync('courses/quocphong_10.html', fullHTML, 'utf8');

  console.log('Successfully compiled courses/gdqp_10.html, size:', fullHTML.length);
  console.log('Successfully synchronized courses/quocphong_10.html, size:', fullHTML.length);
}

buildPage();
