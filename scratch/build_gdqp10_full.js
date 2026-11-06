// scratch/build_gdqp10_full.js
const fs = require('fs');
const path = require('path');
const diagrams = require('./gdqp10_diagrams.js');

const rawData = JSON.parse(fs.readFileSync('scratch/gdqp10_parsed_raw.json', 'utf8'));
const { lessonMeta, lessonContents, reviewText, termsText, guideText, sourceText } = rawData;

// Mini-Quizzes for each of the 12 lessons
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
      exp: "Đội Việt Nam Tuyên truyền Giải phóng quân gồm 34 chiến sĩ do đồng chí Võ Nguyên Giáp chỉ huy, thành lập ngày 22/12/1944 tại Cao Bằng."
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
      q: "Mục tiêu cơ bản của môn Giáo dục quốc phòng và an ninh trong trường THPT là gì?",
      options: [
        "Bồi dưỡng lòng yêu nước, niềm tự hào dân tộc, nâng cao ý thức trách nhiệm và kĩ năng cơ bản bảo vệ Tổ quốc",
        "Đào tạo ngay học sinh thành sĩ quan chỉ huy tác chiến",
        "Huấn luyện học sinh sử dụng thành thạo mọi loại vũ khí hạng nặng",
        "Thay thế toàn bộ chương trình giáo dục thể chất"
      ],
      ans: 0,
      exp: "Môn GDQP-AN giúp học sinh hiểu về quốc phòng toàn dân, an ninh nhân dân, truyền thống chống giặc và rèn luyện ý thức công dân đối với Tổ quốc."
    },
    {
      q: "Sĩ quan Quân đội nhân dân và Công an nhân dân Việt Nam được phong những cấp bậc quân hàm nào?",
      options: [
        "Cấp Uý, cấp Tá, cấp Tướng",
        "Cấp Hạ sĩ quan và cấp Binh",
        "Cấp Binh nhì đến cấp Thượng sĩ",
        "Chỉ có cấp Tá và cấp Tướng"
      ],
      ans: 0,
      exp: "Hệ thống cấp bậc hàm sĩ quan QĐND và CAND gồm 3 cấp: Cấp Uý, Cấp Tá và Cấp Tướng."
    }
  ],
  3: [
    {
      q: "Chất nào sau đây là hoá chất không thể thiếu trong quá trình điều chế, sản xuất chất ma tuý?",
      options: ["Tiền chất ma tuý", "Chất hướng thần", "Chất gây nghiện tự nhiên", "Dược phẩm giải độc"],
      ans: 0,
      exp: "Tiền chất là các hoá chất cơ bản được sử dụng trong quy trình tổng hợp, sản xuất ra chất ma tuý và thuộc danh mục kiểm soát đặc biệt."
    },
    {
      q: "Khi một người lạ mặt đưa cho bạn đồ ăn, thức uống lạ hoặc thuốc lá điện tử mời dùng thử 'cho biết', cách xử lí đúng đắn nhất là gì?",
      options: [
        "Từ chối dứt khoát, rời khỏi tình huống và báo ngay cho cha mẹ hoặc thầy cô",
        "Thử một lần xem có cảm giác gì đặc biệt không",
        "Cầm lấy đem về chia cho các bạn cùng thử",
        "Đồng ý thử nếu người đó hứa cho thêm tiền"
      ],
      ans: 0,
      exp: "Nguyên tắc phòng ngừa sống còn: Tuyệt đối không thử bất kì chất lạ nào dưới mọi hình thức, từ chối dứt khoát và báo người có trách nhiệm."
    }
  ],
  4: [
    {
      q: "Biển báo giao thông hình tròn, viền đỏ, nền trắng, trên nền có hình vẽ hoặc chữ số màu đen thuộc nhóm biển báo nào?",
      options: ["Biển báo cấm", "Biển cảnh báo nguy hiểm", "Biển hiệu lệnh", "Biển chỉ dẫn"],
      ans: 0,
      exp: "Biển báo cấm có dạng hình tròn, viền đỏ nhằm báo điều cấm hoặc hạn chế mà người tham gia giao thông bắt buộc phải chấp hành."
    },
    {
      q: "Hành vi nào sau đây của học sinh khi điều khiển xe đạp điện/xe gắn máy là VI PHẠM pháp luật giao thông?",
      options: [
        "Đi dàn hàng ngang từ 3 xe trở lên, dùng ô dù hoặc sử dụng điện thoại khi lái xe",
        "Đội mũ bảo hiểm cài quai đúng quy cách",
        "Bật đèn xi nhan báo rẽ trước khi chuyển hướng",
        "Dừng lại trước vạch dừng khi đèn tín hiệu chuyển đỏ"
      ],
      ans: 0,
      exp: "Đi dàn hàng ngang, buông hai tay, dùng điện thoại, ô dù, chạy quá tốc độ là các hành vi bị pháp luật nghiêm cấm."
    }
  ],
  5: [
    {
      q: "Lực lượng nào giữ vai trò nòng cốt trong sự nghiệp bảo vệ an ninh quốc gia và bảo đảm trật tự, an toàn xã hội?",
      options: ["Công an nhân dân", "Dân quân tự vệ", "Thanh niên xung phong", "Bảo vệ tổ dân phố"],
      ans: 0,
      exp: "CAND là lực lượng nòng cốt trong bảo vệ an ninh quốc gia, giữ gìn trật tự an toàn xã hội và phòng chống tội phạm."
    },
    {
      q: "Trách nhiệm quan trọng nhất của học sinh THPT trong công tác giữ gìn an ninh, trật tự trường học và xã hội là:",
      options: [
        "Chấp hành nghiêm pháp luật, không tham gia tụ tập vi phạm và kịp thời tố giác hành vi xấu cho thầy cô, công an",
        "Tự mình lập đội bắt giữ các đối tượng nghi vấn ngoài đường",
        "Quay video đăng tải ngay lên mạng xã hội để câu tương tác",
        "Không cần quan tâm vì đó là nhiệm vụ của lực lượng chức năng"
      ],
      ans: 0,
      exp: "Học sinh cần chấp hành nghiêm kỉ luật, học tập tốt, cư xử văn minh và phối hợp báo tin tin cậy cho người có trách nhiệm."
    }
  ],
  6: [
    {
      q: "Hành vi nào dưới đây bị Luật An ninh mạng năm 2018 nghiêm cấm thực hiện trên không gian mạng?",
      options: [
        "Đăng tải thông tin sai sự thật, vu khống, xúc phạm danh dự người khác hoặc phát tán mã độc",
        "Học tập trực tuyến trên các website giáo dục chính thống",
        "Đổi mật khẩu tài khoản định kì để bảo mật",
        "Chia sẻ bài giảng học tập lành mạnh cho bạn bè"
      ],
      ans: 0,
      exp: "Phát tán tin giả, vu khống, xâm phạm dữ liệu cá nhân, tấn công mạng là các hành vi bị xử phạt nghiêm khắc theo Luật An ninh mạng."
    },
    {
      q: "Biện pháp nào giúp bảo vệ tài khoản cá nhân và phòng tránh bị hack trên không gian mạng hiệu quả nhất?",
      options: [
        "Đặt mật khẩu mạnh kết hợp chữ hoa, số, kí tự đặc biệt và bật xác thực hai bước (2FA)",
        "Đặt mật khẩu là ngày sinh nhật hoặc '123456' cho dễ nhớ",
        "Bấm vào mọi đường link nhận quà trúng thưởng gửi qua tin nhắn",
        "Chia sẻ mã OTP ngân hàng cho bạn bè mượn"
      ],
      ans: 0,
      exp: "Mật khẩu phức tạp kết hợp tính năng xác thực 2 yếu tố (2FA) là khiên chắn bảo mật cơ bản vững chắc nhất."
    }
  ],
  7: [
    {
      q: "Khi phát hiện một vật thể lạ nghi là bom, mìn hoặc đầu đạn còn sót lại sau chiến tranh, hành động nào là ĐÚNG?",
      options: [
        "Tuyệt đối không chạm, rời khỏi khu vực, cảnh báo mọi người và báo ngay cho cơ quan quân sự hoặc công an",
        "Dùng que củi gõ thử xem có phát nổ không",
        "Nhặt đem về bán phế liệu để lấy tiền",
        "Tụ tập cùng các bạn đào bới xung quanh để xem"
      ],
      ans: 0,
      exp: "Nguyên tắc sinh mạng: Tuyệt đối không chạm vào vật nghi nổ, giữ khoảng cách an toàn và báo lực lượng chuyên môn xử lí."
    },
    {
      q: "Khi phát hiện xảy ra cháy trong toà nhà, số điện thoại khẩn cấp cần gọi ngay lập tức tại Việt Nam là:",
      options: ["114", "113", "115", "111"],
      ans: 0,
      exp: "Số 114 là số điện thoại khẩn cấp gọi lực lượng Cảnh sát Phòng cháy, chữa cháy và cứu nạn, cứu hộ."
    }
  ],
  8: [
    {
      q: "Trong sinh hoạt và công tác của Quân đội nhân dân Việt Nam, cách xưng hô chuẩn mực giữa các quân nhân là gì?",
      options: [
        "Gọi nhau là 'Đồng chí' và xưng 'Tôi'",
        "Gọi nhau theo tên gọi ở nhà thân mật",
        "Xưng hô 'Mày - Tao' theo thói quen cá nhân",
        "Không cần xưng hô theo quy định"
      ],
      ans: 0,
      exp: "Điều lệnh quy định quân nhân xưng 'Tôi' và gọi nhau là 'Đồng chí', có thể kèm theo cấp bậc, chức vụ hoặc họ tên."
    },
    {
      q: "Sáu điều Bác Hồ dạy Công an nhân dân là kim chỉ nam cho cán bộ, chiến sĩ tu dưỡng về:",
      options: [
        "Tư cách người Công an cách mạng",
        "Kĩ thuật điều khiển phương tiện tuần tra",
        "Quy trình sử dụng vũ khí hiện đại",
        "Nghi thức đón tiếp khách quốc tế"
      ],
      ans: 0,
      exp: "6 điều Bác dạy CAND bao quát đạo đức, phẩm chất, thái độ với tự mình, với đồng sự, với Chính phủ, với Nhân dân, với công việc và với địch."
    }
  ],
  9: [
    {
      q: "Ở tư thế 'NGHIÊM' trong điều lệnh đội ngũ từng người, hai bàn chân mở rộng tạo thành một góc bao nhiêu độ?",
      options: ["Khoảng 45 độ", "Góc vuông 90 độ", "Khép sát song song 0 độ", "Khoảng 60 độ"],
      ans: 0,
      exp: "Ở tư thế nghiêm: Hai gót chân sát nhau trên một đường thẳng, hai bàn chân mở rộng khoảng 45 độ, hai đầu gối thẳng."
    },
    {
      q: "Khẩu lệnh của động tác 'Quay bên phải' hoặc 'Quay bên trái' bao gồm những phần nào?",
      options: [
        "Có Dự lệnh ('Bên phải/bên trái') và Động lệnh ('QUAY')",
        "Chỉ có Động lệnh duy nhất",
        "Chỉ có Dự lệnh không có Động lệnh",
        "Hô tuỳ ý người chỉ huy"
      ],
      ans: 0,
      exp: "Khẩu lệnh quay gồm: Dự lệnh 'Bên phải' (hoặc bên trái) và Động lệnh 'QUAY'."
    }
  ],
  10: [
    {
      q: "Đội hình tiểu đội hàng ngang thường được sử dụng trong những trường hợp nào?",
      options: [
        "Học tập, sinh hoạt, kiểm tra, điểm danh và nhận mệnh lệnh",
        "Hành quân đường dài trên địa hình hiểm trở",
        "Cơ động nhanh qua các đoạn cầu hẹp",
        "Vận động chiến đấu qua công sự ngầm"
      ],
      ans: 0,
      exp: "Đội hình hàng ngang thuận lợi cho chỉ huy quan sát toàn diện đội hình khi học tập, nhận lệnh và sinh hoạt tập thể."
    },
    {
      q: "Bốn bước cơ bản khi tập hợp đội hình tiểu đội gồm những bước nào?",
      options: [
        "Tập hợp → Điểm số → Chỉnh đốn hàng ngũ → Giải tán",
        "Điểm số → Giải tán → Tập hợp → Chỉnh đốn",
        "Chỉnh đốn → Giải tán → Điểm số → Tập hợp",
        "Hành quân → Đứng lại → Giải tán → Tập hợp"
      ],
      ans: 0,
      exp: "Trình tự quy chuẩn: 1. Tập hợp; 2. Điểm số; 3. Chỉnh đốn hàng ngũ; 4. Giải tán."
    }
  ],
  11: [
    {
      q: "Mục đích cơ bản của các tư thế, động tác vận động trong chiến đấu của bộ binh là gì?",
      options: [
        "Triệt để lợi dụng địa hình, địa vật để bảo vệ mình và nhanh chóng tiếp cận tiêu diệt đối phương",
        "Biểu diễn các kĩ xảo thể chất đẹp mắt",
        "Rèn luyện kĩ năng thi đấu võ thuật đối kháng",
        "Thay thế cho trang thiết bị bảo hộ cá nhân"
      ],
      ans: 0,
      exp: "Các tư thế vận động giúp bộ binh di chuyển linh hoạt, che giấu hành động và bảo toàn lực lượng trên chiến trường."
    },
    {
      q: "Động tác 'Đi khom' và 'Chạy khom' thường được vận dụng trong điều kiện địa hình nào?",
      options: [
        "Nơi có địa hình, vật che khuất, che đỡ cao ngang tầm ngực hoặc đêm tối, sương mù",
        "Nơi đất bằng phẳng trống trải hoàn toàn dưới hoả lực địch",
        "Dưới giao thông hào ngập nước",
        "Trên đỉnh đồi trống không có cây cối"
      ],
      ans: 0,
      exp: "Đi khom/chạy khom hạ thấp trọng tâm, áp dụng khi vật che đỡ cao ngang ngực hoặc tầm quan sát của địch bị hạn chế."
    }
  ],
  12: [
    {
      q: "Nguyên tắc đầu tiên và quan trọng nhất khi tiếp cận nạn nhân bị tai nạn điện giật là gì?",
      options: [
        "Nhanh chóng ngắt nguồn điện (cắt cầu dao) hoặc dùng vật liệu cách điện gạt dây điện ra trước khi chạm vào nạn nhân",
        "Lao ngay vào dùng tay không kéo nạn nhân ra",
        "Đổ nước lạnh lên người nạn nhân để làm mát",
        "Bế nạn nhân chạy đi tìm bác sĩ"
      ],
      ans: 0,
      exp: "Tuyệt đối không chạm vào nạn nhân khi nguồn điện chưa được ngắt để tránh chính mình bị điện giật thành nạn nhân thứ hai."
    },
    {
      q: "Khi cố định gãy xương tạm thời cho nạn nhân, nguyên tắc cốt lõi cần ghi nhớ là:",
      options: [
        "Giữ nguyên tư thế gãy, không tự ý nắn chỉnh xương, nẹp cố định qua cả hai khớp trên và dưới ổ gãy",
        "Cố gắng kéo nắn cho xương thẳng lại rồi mới nẹp",
        "Bó nẹp thật chặt trực tiếp lên da thịt trần của nạn nhân",
        "Cho nạn nhân đứng dậy đi thử xem xương còn gãy không"
      ],
      ans: 0,
      exp: "Không nắn xương gãy để tránh đâm thủng mạch máu và dây thần kinh; nẹp phải cố định bất động cả 2 khớp lân cận."
    }
  ]
};

// Exam questions for Trạng Nguyên 25-question modal
const examQuestions = [
  {
    q: "Ngày 22/12 hàng năm là ngày truyền thống của lực lượng nào trong Lực lượng Vũ trang Nhân dân Việt Nam?",
    options: ["Quân đội nhân dân Việt Nam", "Công an nhân dân Việt Nam", "Dân quân tự vệ", "Cảnh sát biển Việt Nam"],
    ans: 0,
    exp: "Ngày 22/12/1944 là ngày thành lập Đội Việt Nam Tuyên truyền Giải phóng quân, được lấy làm ngày truyền thống QĐND Việt Nam và Ngày hội Quốc phòng toàn dân."
  },
  {
    q: "Ngày truyền thống của Lực lượng Công an nhân dân Việt Nam gắn liền với sự kiện lịch sử trọng đại nào?",
    options: ["Ngày 19/8/1945 — Cách mạng tháng Tám thành công", "Ngày 02/9/1945 — Bác Hồ đọc Tuyên ngôn Độc lập", "Ngày 22/12/1944 — Thành lập Đội VNTTGPQ", "Ngày 28/3/1935 — Đại hội Đảng lần thứ nhất"],
    ans: 0,
    exp: "Ngày 19/8/1945 là ngày truyền thống CAND Việt Nam và Ngày hội Toàn dân bảo vệ an ninh Tổ quốc."
  },
  {
    q: "Lực lượng nào là lực lượng vũ trang quần chúng không thoát li sản xuất, công tác, là nòng cốt bảo vệ cơ sở tại địa phương?",
    options: ["Dân quân tự vệ", "Bộ đội chủ lực", "Cảnh sát cơ động", "Lực lượng an ninh nhân dân"],
    ans: 0,
    exp: "Dân quân tự vệ là lực lượng vũ trang quần chúng tại chỗ, nòng cốt đánh giặc và giữ gìn trật tự ở thôn xóm, cơ quan."
  },
  {
    q: "Luật nào quy định về vị trí, chức năng, nhiệm vụ, quyền hạn và tổ chức của lực lượng tuần tra, kiểm soát trên các vùng biển của Việt Nam?",
    options: ["Luật Cảnh sát biển Việt Nam", "Luật Dân quân tự vệ", "Luật Biên giới quốc gia", "Luật An ninh mạng"],
    ans: 0,
    exp: "Luật Cảnh sát biển Việt Nam quy định chức năng thực thi pháp luật và bảo vệ chủ quyền, an ninh trên biển."
  },
  {
    q: "Các chất gây nghiện hoặc chất hướng thần được quy định trong danh mục do cơ quan nhà nước có thẩm quyền ban hành được gọi chung là:",
    options: ["Chất ma tuý", "Dược liệu tự nhiên", "Thực phẩm chức năng", "Hợp chất hữu cơ"],
    ans: 0,
    exp: "Theo Luật Phòng, chống ma tuý: Chất ma tuý là các chất gây nghiện, chất hướng thần thuộc danh mục kiểm soát của Chính phủ."
  },
  {
    q: "Một người nghiện ma tuý thường phải gánh chịu những hệ luỵ nghiêm trọng nào đối với bản thân?",
    options: [
      "Suy kiệt thể chất, rối loạn tâm thần, hủy hoại nhân cách và dễ dẫn đến hành vi vi phạm pháp luật",
      "Tăng cường sức đề kháng và trí thông minh",
      "Tiết kiệm chi tiêu tài chính cho bản thân",
      "Nâng cao vị thế và uy tín trong xã hội"
    ],
    ans: 0,
    exp: "Ma túy tàn phá hệ thần kinh, nội tạng, làm tha hoá nhân cách và khiến người nghiện kiệt quệ tài chính, dễ phạm tội."
  },
  {
    q: "Nhóm biển báo giao thông có hình tam giác đều, viền đỏ, nền vàng mang ý nghĩa cảnh báo gì?",
    options: ["Cảnh báo nguy hiểm để người tham gia giao thông chú ý phòng ngừa", "Cấm các phương tiện lưu thông", "Bắt buộc thi hành hiệu lệnh", "Chỉ dẫn đường đi và địa danh"],
    ans: 0,
    exp: "Biển tam giác vàng viền đỏ là biển báo nguy hiểm, nhắc nhở người lái xe chú ý giảm tốc độ."
  },
  {
    q: "Tại ngã tư đường sắt giao nhau với đường bộ có rào chắn, khi chuông reo và đèn đỏ bật sáng, người tham gia giao thông phải:",
    options: [
      "Dừng lại trước rào chắn một khoảng cách an toàn và chờ tàu hỏa đi qua",
      "Cố tình luồn lách qua rào chắn để kịp qua đường",
      "Bấm còi thúc giục nhân viên gác chắn mở đường",
      "Nhảy xuống đẩy rào chắn sang một bên"
    ],
    ans: 0,
    exp: "Luật Giao thông quy định tuyệt đối phải dừng lại trước vạch dừng/rào chắn khi có tín hiệu cảnh báo tàu hỏa."
  },
  {
    q: "An ninh quốc gia là gì?",
    options: [
      "Sự ổn định, phát triển bền vững của chế độ và Nhà nước, sự bất khả xâm phạm độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ",
      "Trật tự an toàn giao thông đường bộ trong đô thị",
      "Hoạt động sản xuất kinh doanh có lợi nhuận cao của các tập đoàn",
      "Việc mở rộng du lịch ra các nước trên thế giới"
    ],
    ans: 0,
    exp: "Theo Luật An ninh quốc gia: An ninh quốc gia là sự ổn định, phát triển bền vững của chế độ xã hội chủ nghĩa và chủ quyền toàn vẹn lãnh thổ."
  },
  {
    q: "Lực lượng nào giữ vai trò nòng cốt trong sự nghiệp bảo vệ độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Tổ quốc?",
    options: ["Quân đội nhân dân", "Công an nhân dân", "Hội Cựu chiến binh", "Thanh tra Chính phủ"],
    ans: 0,
    exp: "QĐND là lực lượng nòng cốt cùng toàn dân bảo vệ vững chắc biên cương, vùng trời, vùng biển và hải đảo của Tổ quốc."
  },
  {
    q: "Luật An ninh mạng của nước CHXHCN Việt Nam được Quốc hội thông qua và có hiệu lực từ năm nào?",
    options: ["Năm 2018 (có hiệu lực từ 01/01/2019)", "Năm 2013", "Năm 2005", "Năm 2024"],
    ans: 0,
    exp: "Luật An ninh mạng số 24/2018/QH14 được thông qua ngày 12/6/2018 và có hiệu lực thi hành từ ngày 01/01/2019."
  },
  {
    q: "Để tránh bị đánh cắp thông tin tài khoản ngân hàng và mạng xã hội, người dùng KHÔNG NÊN làm điều gì?",
    options: [
      "Nhấp vào các đường link lạ tự xưng trúng thưởng hoặc chia sẻ mã xác thực OTP cho người khác",
      "Bật tính năng xác thực 2 bước trên điện thoại",
      "Thường xuyên cập nhật mật khẩu định kì",
      "Cài đặt phần mềm diệt virus chính hãng"
    ],
    ans: 0,
    exp: "Mã OTP là chìa khoá bảo mật cuối cùng; tuyệt đối không cung cấp cho bất kì ai, kể cả người tự xưng là nhân viên ngân hàng."
  },
  {
    q: "Khi gặp tình huống có người bị bỏng nhiệt do nước sôi hoặc lửa, thao tác sơ cứu đầu tiên ĐÚNG là:",
    options: [
      "Ngâm/rửa vùng bị bỏng dưới vòi nước sạch mát trong khoảng 15–20 phút",
      "Dùng đá lạnh chườm trực tiếp lên vết bỏng sâu",
      "Bôi nước mắm, kem đánh răng hoặc mỡ trăn lên vết thương",
      "Chọc vỡ các bọng nước phồng rộp trên da"
    ],
    ans: 0,
    exp: "Làm mát bằng nước sạch mát (15-20 độ C) giúp hạ nhiệt độ mô tế bào, giảm đau và hạn chế tổn thương sâu."
  },
  {
    q: "Số điện thoại khẩn cấp gọi Cấp cứu y tế trên phạm vi toàn quốc tại Việt Nam là:",
    options: ["115", "113", "114", "112"],
    ans: 0,
    exp: "115 là đầu số cấp cứu y tế; 113 là cảnh sát trật tự; 114 là cứu hỏa phòng cháy."
  },
  {
    q: "Vũ khí nào sau đây sử dụng các tác nhân vi sinh vật (vi khuẩn, virus) để gây bệnh dịch hàng loạt cho con người và vật nuôi?",
    options: ["Vũ khí sinh học", "Vũ khí hoá học", "Vũ khí hạt nhân", "Vũ khí công nghệ cao"],
    ans: 0,
    exp: "Vũ khí sinh học sử dụng độc tố hoặc mầm bệnh vi sinh vật để gây hại trên diện rộng."
  },
  {
    q: "Điều lệnh Quản lí bộ đội quy định quân nhân phải chấp hành nghiêm bao nhiêu Lời thề danh dự của quân nhân?",
    options: ["10 lời thề danh dự", "5 lời thề danh dự", "12 điều kỉ luật", "6 điều Bác dạy"],
    ans: 0,
    exp: "Quân nhân QĐND Việt Nam tuyên thệ 10 Lời thề danh dự thiêng liêng dưới Quân kì quyết thắng."
  },
  {
    q: "Khẩu lệnh 'Đi đều — BƯỚC': Động lệnh 'BƯỚC' rơi vào nhịp bước của chân nào?",
    options: ["Chân trái", "Chân phải", "Chân nào cũng được", "Cả hai chân cùng lúc"],
    ans: 0,
    exp: "Quy ước điều lệnh đội ngũ: Động lệnh 'BƯỚC' rơi vào chân trái để người tập tiếp tục bước chân phải lên nhịp tiếp theo."
  },
  {
    q: "Khoảng cách giãn cách giữa hai gót chân của hai chiến sĩ đứng cạnh nhau trong đội hình tiểu đội hàng ngang là:",
    options: ["Khoảng 70 cm", "Khoảng 1 mét", "Khoảng 30 cm", "Khoảng 1,5 mét"],
    ans: 0,
    exp: "Theo điều lệnh đội ngũ tiểu đội: Khoảng cách giữa 2 chiến sĩ đứng cạnh nhau là 70 cm tính từ gót chân."
  },
  {
    q: "Đội hình tiểu đội hàng dọc thường được sử dụng trong nhiệm vụ nào sau đây?",
    options: ["Hành quân, di chuyển cự li hoặc chuyển vị trí cơ động", "Điểm danh buổi sáng", "Sinh hoạt chính trị toàn đơn vị", "Kiểm tra quân trang tại chỗ"],
    ans: 0,
    exp: "Hàng dọc giúp đơn vị di chuyển gọn gàng, cơ động nhanh trên đường giao thông hoặc địa hình hành quân."
  },
  {
    q: "Tư thế 'Bò cao' của bộ binh thường được vận dụng khi nào?",
    options: [
      "Vận động qua nơi có địa hình nhiều chướng ngại, cần mang vác vũ khí trang bị nhẹ nhàng, bí mật",
      "Chạy nhanh qua bãi cát bằng phẳng trống trải",
      "Vận động trong chiến hào sâu ngập đầu",
      "Đứng trên tháp canh gác ban ngày"
    ],
    ans: 0,
    exp: "Bò cao dùng khi vượt qua địa hình có chướng ngại che khuất tầm nhìn, cần vận động bí mật, êm ái."
  },
  {
    q: "Khi phát hiện một người nghi bị chấn thương cột sống cổ hoặc lưng sau tai nạn giao thông, điều TỐI KỊ không được làm là:",
    options: [
      "Tự ý kéo, xốc nách, cõng hoặc bẻ vặn người nạn nhân",
      "Gọi ngay cấp cứu 115 và giữ hiện trường an toàn",
      "Giữ nguyên tư thế nằm thẳng và chèn cố định vùng đầu cổ",
      "Trấn an tinh thần nạn nhân trong khi chờ xe cứu thương"
    ],
    ans: 0,
    exp: "Gấp vặn người bị chấn thương cột sống có thể làm đứt tủy sống, gây liệt toàn thân vĩnh viễn hoặc tử vong ngay."
  },
  {
    q: "Trường hợp nào sau đây BẮT BUỘC phải thực hiện garô cầm máu khẩn cấp?",
    options: [
      "Vết thương đứt động mạch lớn ở chi, máu phun thành tia đỏ tươi, băng ép không cầm được",
      "Vết trầy xước nhẹ ngoài da chảy máu rỉ rỉ",
      "Vết thương chảy máu tĩnh mạch màu sẫm",
      "Vết bầm tím dưới da do va đập"
    ],
    ans: 0,
    exp: "Garô là biện pháp cầm máu tối hậu chỉ áp dụng khi đứt động mạch lớn ở chi, máu phun dữ dội đe doạ tính mạng."
  },
  {
    q: "Khi thực hiện phương pháp ép tim ngoài lồng ngực (CPR) cho người lớn bị ngừng tim, vị trí đặt tay đúng là:",
    options: [
      "1/2 dưới của xương ức, chính giữa lồng ngực",
      "Mạn sườn bên phải gần gan",
      "Bụng dưới rốn",
      "Cổ họng nạn nhân"
    ],
    ans: 0,
    exp: "Vị trí ép tim chuẩn là nửa dưới xương ức (giữa hai núm vú trên đường giữa ngực)."
  },
  {
    q: "Trong các biện pháp phòng chống thiên tai, hành động nào là đúng khi xảy ra mưa dông, sấm sét dữ dội ngoài đồng ruộng?",
    options: [
      "Nhanh chóng tìm nơi trú ẩn kiên cố, không đứng dưới cây to cô đơn, không cầm các vật bằng kim loại",
      "Chạy đến gốc cây cổ thụ to nhất để trú mưa",
      "Tắm mưa và sử dụng điện thoại di động ngoài trời",
      "Đứng thành nhóm đông người cạnh cột điện cao thế"
    ],
    ans: 0,
    exp: "Cây to và cột điện là những điểm hút sét nguy hiểm nhất; cần tránh xa và không cầm vật dẫn điện."
  },
  {
    q: "Phương châm xuyên suốt trong xây dựng nền quốc phòng toàn dân và an ninh nhân dân của Việt Nam là:",
    options: [
      "Toàn dân, toàn diện, độc lập, tự chủ, tự lực, tự cường",
      "Dựa hoàn toàn vào viện trợ quân sự nước ngoài",
      "Chỉ tập trung vào phát triển vũ khí hạt nhân",
      "Khoán trắng nhiệm vụ bảo vệ Tổ quốc cho quân đội"
    ],
    ans: 0,
    exp: "Đường lối quốc phòng Việt Nam là nền quốc phòng toàn dân, toàn diện, dựa vào sức mạnh đại đoàn kết toàn dân tộc."
  }
];

// Helper: Markdown parser
function parseInlineMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-slate-900 dark:text-white font-bold">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');
}

function parseMarkdownTable(tableLines) {
  if (tableLines.length < 2) return '';
  const headerCells = tableLines[0].split('|').map(s => s.trim()).filter((s, idx, arr) => idx > 0 && idx < arr.length - 1);
  const dataRows = tableLines.slice(2).map(line => {
    return line.split('|').map(s => s.trim()).filter((s, idx, arr) => idx > 0 && idx < arr.length - 1);
  });

  return `
    <div class="my-5 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 shadow-xs">
      <table class="w-full text-left text-xs sm:text-sm border-collapse">
        <thead>
          <tr class="bg-red-50/80 dark:bg-red-950/60 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700">
            ${headerCells.map((h, i) => `<th class="p-3.5 font-extrabold ${i === 0 ? 'w-1/4' : ''}">${parseInlineMarkdown(h)}</th>`).join('')}
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
          ${dataRows.map(row => `
            <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition">
              ${row.map((cell, cIdx) => `
                <td class="p-3.5 align-top ${cIdx === 0 ? 'font-bold text-red-700 dark:text-red-400' : ''}">
                  ${parseInlineMarkdown(cell)}
                </td>
              `).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function parseLessonBlocks(rawText) {
  const lines = rawText.split('\n');
  const blocks = [];
  let currentBlock = null;

  for (let rawLine of lines) {
    const trimmed = rawLine.trim();
    if (!trimmed) continue;

    // Check table
    if (trimmed.startsWith('|')) {
      if (currentBlock && currentBlock.type === 'table') {
        currentBlock.lines.push(trimmed);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = { type: 'table', lines: [trimmed] };
      }
      continue;
    }

    // Section sub-heading ###
    const subHeadingMatch = /^###\s+(.*)$/.exec(trimmed);
    if (subHeadingMatch) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'section_header',
        title: subHeadingMatch[1].trim(),
        children: []
      };
      continue;
    }

    // Check if indented sub-item (2 or more leading spaces with - or *)
    const isSub = /^(\s{2,}|\t)[-*]\s+(.*)$/.exec(rawLine);
    if (isSub && currentBlock && (currentBlock.type === 'card' || currentBlock.type === 'numbered')) {
      const subContent = isSub[2].trim();
      const subBoldMatch = /^\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(subContent);
      const subColonMatch = /^([^:]+):[:\s]*(.*)$/.exec(subContent);

      if (subBoldMatch) {
        currentBlock.children.push({
          term: subBoldMatch[1].replace(/[:\s]+$/, '').trim(),
          desc: subBoldMatch[2].trim()
        });
      } else if (subColonMatch && subColonMatch[1].length < 35 && !subColonMatch[1].includes(';')) {
        currentBlock.children.push({
          term: subColonMatch[1].replace(/[:\s]+$/, '').trim(),
          desc: subColonMatch[2].trim()
        });
      } else {
        currentBlock.children.push({
          term: '',
          desc: subContent
        });
      }
      continue;
    }

    // Check top-level bullet: - **Term:** desc
    const bulletMatch = /^[-*]\s+\*\*([^*]+)\*\*[:\s]*(.*)$/.exec(trimmed);
    if (bulletMatch) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'card',
        term: bulletMatch[1].replace(/[:\s]+$/, '').trim(),
        lead: bulletMatch[2].trim(),
        children: []
      };
      continue;
    }

    // Numbered item: 1. **Term:** desc or 1. desc
    const numMatch = /^(\d+)\.\s+(\*\*([^*]+)\*\*[:\s]*)?(.*)$/.exec(trimmed);
    if (numMatch) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'numbered',
        num: numMatch[1],
        term: numMatch[3] ? numMatch[3].replace(/[:\s]+$/, '').trim() : '',
        lead: numMatch[4] ? numMatch[4].trim() : '',
        children: []
      };
      continue;
    }

    // Callout alert box > blockquote
    if (trimmed.startsWith('>')) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'alert',
        lead: trimmed.replace(/^>\s*/, '').trim(),
        children: []
      };
      continue;
    }

    // Top-level bullet without bold: - text
    const plainBullet = /^[-*]\s+(.*)$/.exec(trimmed);
    if (plainBullet) {
      const content = plainBullet[1].trim();
      if (currentBlock && currentBlock.type === 'bullet_list') {
        currentBlock.items.push(content);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = {
          type: 'bullet_list',
          items: [content]
        };
      }
      continue;
    }

    // Bold title without dash: **Title**
    const standaloneBold = /^\*\*([^*]+)\*\*$/.exec(trimmed);
    if (standaloneBold) {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = {
        type: 'sub_title',
        title: standaloneBold[1].trim(),
        children: []
      };
      continue;
    }

    // Regular paragraph
    if (currentBlock) blocks.push(currentBlock);
    currentBlock = {
      type: 'paragraph',
      lead: trimmed,
      children: []
    };
  }
  if (currentBlock) blocks.push(currentBlock);
  return blocks;
}

function renderBlocksToHTML(blocks, lessonNum) {
  let html = '<div class="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">';

  // Inject diagrams at top of specific lessons
  if (lessonNum === 1) html += diagrams.armedForcesSVG;
  else if (lessonNum === 4) html += diagrams.trafficSignsSVG;
  else if (lessonNum === 6) html += diagrams.cyberSecuritySVG;
  else if (lessonNum === 7) html += diagrams.bombSafetySVG;
  else if (lessonNum === 10) html += diagrams.squadFormationSVG;
  else if (lessonNum === 12) html += diagrams.firstAidSVG;

  for (let b of blocks) {
    if (b.type === 'table') {
      html += parseMarkdownTable(b.lines);
    } else if (b.type === 'section_header') {
      html += `
        <div class="mt-6 mb-3 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-red-600"></span>
          <h4 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">
            ${parseInlineMarkdown(b.title)}
          </h4>
        </div>
      `;
    } else if (b.type === 'alert') {
      html += `
        <div class="p-4 bg-amber-50/90 dark:bg-amber-950/40 rounded-2xl border-2 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed mb-4 shadow-xs">
          <div class="flex items-start gap-3">
            <span class="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 text-sm shadow-xs mt-0.5">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </span>
            <div class="flex-1 font-medium">${parseInlineMarkdown(b.lead)}</div>
          </div>
        </div>
      `;
    } else if (b.type === 'bullet_list') {
      const allText = b.items.join(' ');
      const isSafety = allText.includes('114') || allText.includes('115') || allText.includes('Không đến gần') || allText.includes('tháo gỡ') || allText.includes('cháy nổ') || allText.includes('nước đá') || allText.includes('nắn xương') || allText.includes('điện giật') || allText.includes('nguy hiểm') || allText.includes('sơ cứu') || allText.includes('tuyệt đối');
      
      if (isSafety) {
        html += `
          <div class="p-4 sm:p-5 bg-amber-50/90 dark:bg-amber-950/40 rounded-2xl border-2 border-amber-400 dark:border-amber-700/80 text-amber-950 dark:text-amber-200 text-xs sm:text-sm leading-relaxed mb-4 shadow-xs">
            <div class="flex items-center gap-2 mb-3 pb-2 border-b border-amber-200/80 dark:border-amber-800/80 font-bold text-amber-900 dark:text-amber-300">
              <span class="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </span>
              <span class="text-xs sm:text-sm uppercase tracking-wide">Nguyên tắc an toàn & Lưu ý cấp thiết</span>
            </div>
            <ul class="space-y-2.5">
              ${b.items.map(it => `
                <li class="flex items-start gap-2.5">
                  <i class="fa-solid fa-circle-exclamation text-amber-600 dark:text-amber-400 text-xs mt-1 shrink-0"></i>
                  <div class="flex-1 font-medium">${parseInlineMarkdown(it)}</div>
                </li>
              `).join('')}
            </ul>
          </div>
        `;
      } else {
        html += `
          <div class="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-3.5 shadow-xs">
            <ul class="space-y-2.5">
              ${b.items.map(it => `
                <li class="flex items-start gap-2.5">
                  <i class="fa-solid fa-circle-dot text-red-500 text-[10px] mt-1 shrink-0"></i>
                  <div class="flex-1">${parseInlineMarkdown(it)}</div>
                </li>
              `).join('')}
            </ul>
          </div>
        `;
      }
    } else if (b.type === 'intro') {
      html += `
        <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-2.5">
          <div class="flex items-start gap-2.5">
            <i class="fa-solid fa-circle-dot text-red-500 text-[10px] mt-1 shrink-0"></i>
            <div class="flex-1">${parseInlineMarkdown(b.lead)}</div>
          </div>
        </div>
      `;
    } else if (b.type === 'card') {
      const isImportant = b.term.toLowerCase().includes('nguyên tắc') || b.term.toLowerCase().includes('an toàn') || b.term.toLowerCase().includes('ghi nhớ') || b.term.toLowerCase().includes('trách nhiệm') || b.term.toLowerCase().includes('bản chất');
      const cardBorder = isImportant ? 'border-red-200 dark:border-red-900/60 bg-red-50/30 dark:bg-red-950/20' : 'border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800/80';
      const icon = isImportant ? 'fa-star text-red-500' : 'fa-shield-halved text-red-600 dark:text-red-400';

      html += `
        <div class="p-5 rounded-2xl border ${cardBorder} shadow-xs mb-4">
          <div class="flex items-center gap-2.5 mb-2 pb-2 border-b border-slate-100 dark:border-slate-700/60">
            <i class="fa-solid ${icon} text-base"></i>
            <h5 class="font-black text-sm sm:text-base text-slate-900 dark:text-white">
              ${b.term}
            </h5>
          </div>
          ${b.lead ? `<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">${parseInlineMarkdown(b.lead)}</p>` : ''}
          ${b.children.length > 0 ? `
            <div class="grid grid-cols-1 ${b.children.length >= 3 ? 'md:grid-cols-3' : b.children.length === 2 ? 'md:grid-cols-2' : ''} gap-3 mt-3 pt-2 border-t border-slate-100 dark:border-slate-700/40">
              ${b.children.map(child => `
                <div class="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60 flex flex-col justify-start">
                  ${child.term ? `<strong class="text-red-600 dark:text-red-400 font-bold block mb-1 text-xs sm:text-sm"><i class="fa-solid fa-chevron-right mr-1 text-[10px]"></i> ${child.term}</strong>` : ''}
                  <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${parseInlineMarkdown(child.desc)}</p>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;
    } else if (b.type === 'numbered') {
      html += `
        <div class="p-4 bg-red-50/40 dark:bg-red-950/30 rounded-2xl border border-red-100 dark:border-red-900/50 mb-3 shadow-xs">
          <div class="flex items-start gap-3">
            <span class="w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
              ${b.num}
            </span>
            <div class="flex-1">
              ${b.term ? `<strong class="text-red-700 dark:text-red-300 font-bold block mb-1 text-xs sm:text-sm">${b.term}</strong>` : ''}
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${parseInlineMarkdown(b.lead)}</p>
            </div>
          </div>
        </div>
      `;
    } else if (b.type === 'sub_title') {
      html += `
        <h5 class="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider mt-4 mb-2 flex items-center gap-1.5">
          <i class="fa-solid fa-caret-right text-red-500"></i> ${b.title}
        </h5>
      `;
    } else {
      html += `
        <div class="p-3.5 bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
          ${parseInlineMarkdown(b.lead)}
        </div>
      `;
    }
  }

  html += '</div>';
  return html;
}

// Mini-Quiz Renderer
function renderLessonQuiz(quizList, lessonNum) {
  if (!quizList || quizList.length === 0) return '';
  return `
    <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-xs sm:text-sm font-black uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center gap-2">
          <i class="fa-solid fa-circle-question"></i> Mini-Quiz Củng Cố Bài ${lessonNum} (${quizList.length} câu)
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
  `;
}

// Sidebar HTML with 2-line clean layout, NO truncation!
function renderSidebarHTML() {
  let html = '<nav class="space-y-6 text-xs">';
  
  html += `
    <div>
      <div class="text-[11px] font-black uppercase tracking-wider px-3 py-1.5 flex items-center justify-between text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 rounded-xl mb-2">
        <span>12 Bài học chính khoá</span>
        <span class="text-[10px] font-bold opacity-80">KNTT</span>
      </div>
      <div class="space-y-1">
        ${lessonMeta.map(l => {
          return `
            <a href="#bai-${l.num}" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-red-200 dark:hover:border-red-800/60 hover:bg-red-50/70 dark:hover:bg-red-950/50 text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition">
              <div class="flex items-center justify-between gap-1.5 mb-0.5">
                <span class="font-bold text-xs text-red-600 dark:text-red-400">Bài ${l.num}</span>
                <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">${l.badge}</span>
              </div>
              <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition leading-snug">
                ${l.title}
              </div>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Appendix Section
  html += `
    <div>
      <div class="text-[11px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 px-3 py-1.5 flex items-center justify-between bg-amber-50 dark:bg-amber-950/60 rounded-xl mb-2">
        <span>Tra cứu & Ôn tập</span>
        <span class="text-[10px] text-amber-600 font-bold">2 mục</span>
      </div>
      <div class="space-y-1">
        <a href="#bang-on-tap-nhanh" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-amber-200 dark:hover:border-amber-900/60 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50/70 dark:hover:bg-amber-950/50 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-amber-600 dark:text-amber-400">Bảng ôn tập</span>
            <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">12 bài</span>
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition leading-snug">
            Bảng tổng hợp trọng tâm 12 bài học
          </div>
        </a>

        <a href="#thuat-ngu-trong-sach" class="nav-link group block px-3 py-2 rounded-xl border border-transparent hover:border-emerald-200 dark:hover:border-emerald-900/60 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/70 dark:hover:bg-emerald-950/50 transition">
          <div class="flex items-center justify-between gap-1.5 mb-0.5">
            <span class="font-bold text-xs text-emerald-600 dark:text-emerald-400">Từ điển</span>
            <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium shrink-0">Thuật ngữ</span>
          </div>
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition leading-snug">
            Giải thích thuật ngữ quốc phòng an ninh
          </div>
        </a>
      </div>
    </div>
  </nav>`;
  return html;
}

// Build Main Articles HTML
function renderMainArticlesHTML() {
  let html = '';

  for (let i = 1; i <= 12; i++) {
    const lesson = lessonContents[i];
    const quizHTML = renderLessonQuiz(lessonQuizzes[i], i);
    const blocks = parseLessonBlocks(lesson.body);
    const contentHTML = renderBlocksToHTML(blocks, i);

    html += `
      <article id="bai-${i}" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition mb-10">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-xs sm:text-sm shadow-sm shadow-red-500/20 tracking-wide">
              <i class="fa-solid fa-shield-halved"></i> Bài ${i}
            </span>
            <span class="text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200/60 dark:border-red-900/60">
              ${lessonMeta[i - 1].badge}
            </span>
          </div>
          <button onclick="toggleBookmark('bai-${i}')" class="bookmark-btn p-2 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-base" title="Lưu bài học">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </div>

        <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 leading-snug tracking-tight">
          <span class="text-red-600 dark:text-red-400">Bài ${i}:</span> ${lesson.title}
        </h3>

        ${contentHTML}
        ${quizHTML}
      </article>
    `;
  }

  // Appendix Section: Bảng ôn tập nhanh & Thuật ngữ
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
                <td class="p-3 border border-slate-200 dark:border-slate-700">Ba thành phần lực lượng vũ trang nhân dân (QĐND, CAND, DQTV); các mốc truyền thống; bản chất giai cấp công nhân và nghệ thuật quân sự Việt Nam.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 2</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Mục tiêu môn GDQP-AN; vai trò, chức trách của sĩ quan; hệ thống các luật: Luật QP, Luật ANQG, Luật Sĩ quan, Luật CAND, Luật Biên giới, Luật Cảnh sát biển.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 3</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Khái niệm chất ma tuý, chất hướng thần, tiền chất; tác hại toàn diện đến cá nhân, gia đình, xã hội; quy tắc vàng phòng tránh: tuyệt đối không thử, từ chối dứt khoát.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 4</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Dấu hiệu vi phạm ATGT; quy tắc giao thông đường bộ, đường sắt, đường thuỷ, hàng không; nhận diện 4 nhóm biển báo (cấm, nguy hiểm, hiệu lệnh, chỉ dẫn).</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 5</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Khái niệm an ninh quốc gia và trật tự an toàn xã hội; vai trò nòng cốt của CAND và QĐND; trách nhiệm công dân và học sinh trong việc tố giác, giữ gìn trật tự.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 6</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Khái niệm an ninh mạng và dữ liệu cá nhân; hành vi bị nghiêm cấm; thủ đoạn lừa đảo qua mạng; mô hình phòng vệ 4 lớp (mật khẩu, cập nhật bản vá, cảnh giác, bảo vệ OTP).</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 7</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Nhận biết mối nguy bom mìn, vũ khí hoá/sinh học, công nghệ cao, thiên tai, dịch bệnh; quy tắc 4 bước khi gặp vật nổ (không chạm, lùi xa, cảnh báo, báo 114/chính quyền).</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 8</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Điều lệnh Quản lí bộ đội (10 lời thề, xưng hô 'Đồng chí - Tôi', chào hỏi, trang phục); Điều lệnh CAND (6 điều Bác dạy, ứng xử văn hoá, vì nhân dân phục vụ).</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 9</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Đội ngũ từng người: Nghiêm (chân 45 độ), nghỉ, quay tại chỗ (bên phải/trái/đằng sau), đi đều, giậm chân, chào/thôi chào, chạy đều. Khẩu lệnh và kĩ thuật động tác.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 10</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Đội ngũ tiểu đội: 4 bước tập hợp (tập hợp, điểm số, chỉnh đốn, giải tán); hàng ngang (giãn cách 70 cm), hàng dọc (cự li 1 m); di chuyển và ra/về vị trí.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 11</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Ý nghĩa giáo dục thể chất của 13 tư thế vận động trong chiến đấu (đi khom, chạy khom, bò, lê, trườn, vọt tiến, lăn...); chỉ tập luyện dưới sự giám sát an toàn của giáo viên.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-center text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">Bài 12</td>
                <td class="p-3 border border-slate-200 dark:border-slate-700">Sơ cấp cứu tai nạn thường gặp (điện giật, đuối nước, say nắng, bỏng nhiệt, rắn cắn); kĩ thuật băng bó, nẹp cố định xương gãy, garô cầm máu, CPR và chuyển thương an toàn.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>

      <!-- 2. Bảng thuật ngữ chuyên ngành -->
      <article id="thuat-ngu-trong-sach" class="lesson-card scroll-mt-28 bg-white dark:bg-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <span class="px-3 py-1 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-black text-xs uppercase tracking-wider">
            Từ điển thuật ngữ
          </span>
          <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Giải thích thuật ngữ Quốc phòng & An ninh SGK
          </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700">
            <strong class="text-red-600 dark:text-red-400 block mb-1">Công sự:</strong>
            Công trình/vị trí được xây dựng nhằm bảo đảm an toàn cho người, phương tiện và vũ khí trang bị trước tác động nguy hiểm của đối phương hoặc vũ khí sát thương.
          </div>
          <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700">
            <strong class="text-red-600 dark:text-red-400 block mb-1">Điều lệnh:</strong>
            Hệ thống quy định, quy tắc do cơ quan quân sự/an ninh có thẩm quyền ban hành, mang tính bắt buộc thi hành nghiêm ngặt để tạo sự thống nhất và kỉ luật chính quy.
          </div>
          <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700">
            <strong class="text-red-600 dark:text-red-400 block mb-1">Giãn cách:</strong>
            Khoảng cách tính theo chiều ngang giữa hai người hoặc hai phương tiện đứng cạnh nhau trong đội hình hàng ngang.
          </div>
          <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700">
            <strong class="text-red-600 dark:text-red-400 block mb-1">Hoả khí:</strong>
            Cách gọi truyền thống về các loại vũ khí sử dụng thuốc nổ hoặc chất cháy để phóng phần tử sát thương, bao gồm súng bộ binh và pháo các loại.
          </div>
          <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700">
            <strong class="text-red-600 dark:text-red-400 block mb-1">Tiểu đội:</strong>
            Phân đội tổ chức cơ sở nhỏ nhất trong Quân đội và Công an; theo sách gồm 1 Tiểu đội trưởng chỉ huy và 8 chiến sĩ.
          </div>
          <div class="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700">
            <strong class="text-red-600 dark:text-red-400 block mb-1">Vũ khí huỷ diệt lớn:</strong>
            Các loại vũ khí có khả năng gây thương vong cực kì lớn trên diện rộng cho sinh lực, phá hủy cơ sở vật chất và môi trường (hạt nhân, hoá học, sinh học).
          </div>
        </div>
      </article>
    </div>
  `;

  return html;
}

// Master HTML Page Generator
function generateFullPage() {
  const sidebarHTML = renderSidebarHTML();
  const mainArticlesHTML = renderMainArticlesHTML();

  return `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Giáo Dục Quốc Phòng và An Ninh 10 — SGK Kết Nối Tri Thức | CodeHub</title>
  <meta name="description" content="Khóa học Giáo dục Quốc phòng và An ninh lớp 10 chuẩn SGK Kết nối tri thức. Đầy đủ 12 bài học, sơ đồ tương tác SVG và đề thi Trạng Nguyên 25 câu.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#dc2626',
            'primary-dark': '#b91c1c',
            'dark-bg': '#0b0f19',
            'dark-surface': '#111827',
            'slate-850': '#151e32'
          }
        }
      }
    }
  </script>
  
  <!-- Font Awesome CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- Inter Google Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <style>
    body { font-family: 'Inter', sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(148, 163, 184, 0.4); border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(148, 163, 184, 0.7); }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(71, 85, 105, 0.5); }
    .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(71, 85, 105, 0.8); }
  </style>
</head>
<body class="bg-slate-50 dark:bg-dark-bg text-slate-800 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-200">

  <!-- Top Sticky Navigation Bar -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      
      <!-- Left: Logo & Subject Title -->
      <div class="flex items-center gap-3 sm:gap-4">
        <a href="../index.html" class="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition" title="Về trang chủ">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-rose-600 flex items-center justify-center text-white shadow-md shadow-red-500/20">
            <i class="fa-solid fa-shield-halved text-base"></i>
          </div>
          <span class="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">
            Code<span class="text-red-600">Hub</span>
          </span>
        </a>
        <div class="h-5 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
        <div class="flex items-center gap-2">
          <span class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 hidden md:inline-block">
            <i class="fa-solid fa-flag text-red-500 mr-1.5"></i> GDQP&AN 10 (KNTT)
          </span>
          <span class="text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900 hidden sm:inline-block">
            12 Bài Chuẩn
          </span>
        </div>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Exam Modal Trigger -->
        <button onclick="openExamModal()" class="px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-red-500/20 flex items-center gap-2 transition transform active:scale-95">
          <i class="fa-solid fa-award"></i>
          <span class="hidden sm:inline">Thi Trạng Nguyên</span>
          <span class="px-1.5 py-0.5 text-[10px] bg-white/20 rounded-md font-mono">25 câu</span>
        </button>

        <!-- Dark Mode Toggle -->
        <button id="themeToggleBtn" class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 flex items-center justify-center transition" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden text-sm"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-sm text-amber-400"></i>
        </button>

        <!-- Mobile Drawer Toggle -->
        <button onclick="toggleMobileDrawer()" class="lg:hidden w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center">
          <i class="fa-solid fa-bars text-sm"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Drawer -->
  <div id="mobileDrawer" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm hidden lg:hidden">
    <div class="fixed top-0 bottom-0 left-0 w-80 bg-white dark:bg-slate-900 shadow-2xl p-6 overflow-y-auto custom-scrollbar">
      <div class="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 dark:border-slate-800">
        <span class="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-list-ul text-red-500"></i> Mục lục bài học
        </span>
        <button onclick="toggleMobileDrawer()" class="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      ${sidebarHTML}
    </div>
  </div>

  <!-- Hero Header Banner -->
  <div class="bg-gradient-to-b from-red-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800 py-10 sm:py-14">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 text-xs font-bold mb-4">
          <i class="fa-solid fa-shield-halved"></i> CHƯƠNG TRÌNH SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
        </div>
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Giáo Dục Quốc Phòng & An Ninh 10
        </h1>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Hệ thống hoá kiến thức cốt lõi theo chuẩn 12 bài học của SGK. Bồi dưỡng lòng yêu nước, niềm tự hào dân tộc, hiểu biết pháp luật quốc phòng - an ninh, an toàn giao thông, an ninh mạng, kĩ năng phòng thủ dân sự và sơ cứu chuyển thương.
        </p>

        <!-- Stats Chips -->
        <div class="flex flex-wrap items-center gap-3 mt-6 text-xs font-bold">
          <span class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center gap-1.5">
            <i class="fa-solid fa-book-open"></i> 12 Bài học chính khoá
          </span>
          <span class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center gap-1.5">
            <i class="fa-solid fa-diagram-project"></i> 6 Sơ đồ SVG kĩ thuật
          </span>
          <span class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center gap-1.5">
            <i class="fa-solid fa-circle-question"></i> 24 Câu hỏi Mini-Quiz
          </span>
          <span class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-700 shadow-xs flex items-center gap-1.5">
            <i class="fa-solid fa-trophy"></i> 25 Câu trắc nghiệm Trạng Nguyên
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- Content Section with Sidebar -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <!-- Desktop Sidebar Sticky -->
      <aside class="hidden lg:block lg:col-span-1">
        <div class="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto custom-scrollbar p-5 bg-white dark:bg-slate-850 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div class="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
            <i class="fa-solid fa-bars-staggered text-red-500"></i> Mục lục 12 bài học
          </div>
          ${sidebarHTML}
        </div>
      </aside>

      <!-- Main Course Articles -->
      <main class="lg:col-span-3 space-y-8">
        
        <!-- Quick Section Jump Navigation -->
        <div class="sticky top-20 z-20 flex flex-wrap items-center gap-2 p-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm mb-8">
          <a href="#bai-1" class="quick-nav-pill px-3 py-1.5 rounded-xl text-xs font-bold bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200/80 dark:border-red-900/50 hover:bg-red-100 dark:hover:bg-red-900/80 transition flex items-center gap-1">
            <i class="fa-solid fa-landmark"></i> <span>Truyền thống & Luật (Bài 1–2)</span>
          </a>
          <a href="#bai-3" class="quick-nav-pill px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/80 dark:border-blue-900/50 hover:bg-blue-100 dark:hover:bg-blue-900/80 transition flex items-center gap-1">
            <i class="fa-solid fa-shield-halved"></i> <span>Trật tự & An ninh (Bài 3–7)</span>
          </a>
          <a href="#bai-8" class="quick-nav-pill px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-900/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/80 transition flex items-center gap-1">
            <i class="fa-solid fa-person-military-to-person"></i> <span>Điều lệnh & Đội ngũ (Bài 8–10)</span>
          </a>
          <a href="#bai-11" class="quick-nav-pill px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200/80 dark:border-rose-900/50 hover:bg-rose-100 dark:hover:bg-rose-900/80 transition flex items-center gap-1">
            <i class="fa-solid fa-kit-medical"></i> <span>Chiến thuật & Cấp cứu (Bài 11–12)</span>
          </a>
        </div>

        ${mainArticlesHTML}

      </main>

    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
    <div class="max-w-7xl mx-auto px-4">
      <p class="font-bold text-slate-700 dark:text-slate-300 mb-1">
        CodeHub Học Liệu Số — Giáo Dục Quốc Phòng và An Ninh 10 (KNTT)
      </p>
      <p>
        Bản tổng hợp chuẩn kiến thức, sơ đồ kĩ thuật an toàn và bài tập củng cố theo chương trình Giáo dục phổ thông 2018.
      </p>
    </div>
  </footer>

  <!-- Modal Thi Trạng Nguyên 25 Câu -->
  <div id="examModal" class="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <!-- Modal Header -->
      <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-600 text-white flex items-center justify-center text-lg shadow-md shadow-red-500/20">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <h3 class="font-black text-base sm:text-lg text-slate-900 dark:text-white">
              Khảo Thí Trạng Nguyên: GDQP&AN 10
            </h3>
            <span class="text-xs text-slate-400">25 câu hỏi trắc nghiệm chuẩn SGK Kết nối tri thức</span>
          </div>
        </div>
        <button onclick="closeExamModal()" class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white flex items-center justify-center transition">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Modal Body (Questions or Results) -->
      <div id="examModalBody" class="p-6 overflow-y-auto custom-scrollbar flex-grow">
        <div id="examContainer" class="space-y-6"></div>

        <div id="examResultBox" class="hidden text-center py-8">
          <div class="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-red-500 text-white flex items-center justify-center text-3xl mx-auto mb-4 shadow-xl shadow-amber-500/30">
            <i class="fa-solid fa-crown"></i>
          </div>
          <h4 class="text-2xl font-black text-slate-900 dark:text-white mb-2" id="examScoreTitle"></h4>
          <p class="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6" id="examScoreDesc"></p>
          <div class="flex justify-center gap-3">
            <button onclick="resetExam()" class="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm transition">
              Làm lại bài thi
            </button>
            <button onclick="closeExamModal()" class="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm transition">
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- JavaScript Client Engine -->
  <script>
    // Theme toggle
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    function applyTheme() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    applyTheme();

    themeToggleBtn?.addEventListener('click', () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    });

    // Mobile Drawer
    function toggleMobileDrawer() {
      const drawer = document.getElementById('mobileDrawer');
      drawer.classList.toggle('hidden');
    }

    // Auto scroll to hash and active sidebar highlighting
    function highlightNav(hash) {
      if (!hash) return;
      document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.remove('bg-red-50/90', 'dark:bg-red-950/70', 'text-red-600', 'dark:text-red-400', 'border-red-300', 'dark:border-red-800',
                           'bg-amber-50/90', 'dark:bg-amber-950/70', 'text-amber-600', 'dark:text-amber-400', 'border-amber-300', 'dark:border-amber-800');
        if (l.getAttribute('href') === hash) {
          if (hash.startsWith('#bang-') || hash.startsWith('#thuat-')) {
            l.classList.add('bg-amber-50/90', 'dark:bg-amber-950/70', 'text-amber-600', 'dark:text-amber-400', 'border-amber-300', 'dark:border-amber-800');
          } else {
            l.classList.add('bg-red-50/90', 'dark:bg-red-950/70', 'text-red-600', 'dark:text-red-400', 'border-red-300', 'dark:border-red-800');
          }
          l.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      });
    }

    function handleHashScroll() {
      const hash = window.location.hash;
      if (!hash) return;
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
      highlightNav(hash);
    }
    window.addEventListener('load', handleHashScroll);
    window.addEventListener('hashchange', handleHashScroll);

    // Sidebar active link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        highlightNav(href);
      });
    });

    // IntersectionObserver for scrollspy
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          highlightNav('#' + entry.target.id);
        }
      });
    }, { rootMargin: '-80px 0px -60% 0px', threshold: [0.25] });

    document.querySelectorAll('article[id], section[id]').forEach(el => observer.observe(el));

    // Mini-Quiz Checker
    function checkLessonQuiz(btn, isCorrect, explanation) {
      const questionCard = btn.closest('.p-4');
      const allBtns = questionCard.querySelectorAll('.quiz-btn');
      const feedback = questionCard.querySelector('.quiz-feedback');

      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove('hover:bg-slate-100', 'dark:hover:bg-slate-700/70');
      });

      const indicator = btn.querySelector('.quiz-indicator');
      indicator.classList.remove('hidden');

      if (isCorrect) {
        btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/50', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300');
        indicator.innerHTML = '<i class=\"fa-solid fa-circle-check text-emerald-500\"></i>';
        feedback.className = 'quiz-feedback mt-3 p-3 rounded-xl text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800 block';
        feedback.innerHTML = '<strong>Chính xác!</strong> ' + explanation;
      } else {
        btn.classList.add('bg-rose-50', 'dark:bg-rose-950/50', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
        indicator.innerHTML = '<i class=\"fa-solid fa-circle-xmark text-rose-500\"></i>';
        feedback.className = 'quiz-feedback mt-3 p-3 rounded-xl text-xs font-medium bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800 block';
        feedback.innerHTML = '<strong>Chưa đúng!</strong> ' + explanation;
      }
    }

    // Bookmark Toggle
    function toggleBookmark(lessonId) {
      const card = document.getElementById(lessonId);
      const icon = card.querySelector('.bookmark-btn i');
      if (icon.classList.contains('fa-regular')) {
        icon.className = 'fa-solid fa-bookmark text-amber-500';
      } else {
        icon.className = 'fa-regular fa-bookmark';
      }
    }

    // ==========================================
    // EXAM ENGINE (25 CÂU)
    // ==========================================
    const examQuestions = ${JSON.stringify(examQuestions)};
    let userAnswers = {};

    function openExamModal() {
      document.getElementById('examModal').classList.remove('hidden');
      renderExamQuestions();
    }

    function closeExamModal() {
      document.getElementById('examModal').classList.add('hidden');
    }

    function renderExamQuestions() {
      const container = document.getElementById('examContainer');
      document.getElementById('examResultBox').classList.add('hidden');
      container.classList.remove('hidden');
      userAnswers = {};

      let html = '<div class="space-y-6">';
      examQuestions.forEach((q, idx) => {
        html += \`
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-xs">
            <p class="font-bold text-slate-900 dark:text-white mb-3 text-sm">
              <span class="text-red-600 dark:text-red-400">Câu \${idx + 1}:</span> \${q.q}
            </p>
            <div class="space-y-2">
              \${q.options.map((opt, optIdx) => \`
                <label class="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700/50 cursor-pointer transition">
                  <input type="radio" name="exam_q_\${idx}" value="\${optIdx}" onchange="recordExamAnswer(\${idx}, \${optIdx})" class="text-red-600 focus:ring-red-500">
                  <span class="font-medium text-slate-700 dark:text-slate-300">\${opt}</span>
                </label>
              \`).join('')}
            </div>
          </div>
        \`;
      });
      html += \`
        <div class="text-center pt-4">
          <button onclick="submitExam()" class="px-8 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-sm shadow-lg shadow-red-500/25 transition">
            Nộp bài & Chấm điểm
          </button>
        </div>
      </div>\`;
      container.innerHTML = html;
    }

    function recordExamAnswer(qIdx, optIdx) {
      userAnswers[qIdx] = optIdx;
    }

    function submitExam() {
      let score = 0;
      examQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.ans) {
          score++;
        }
      });

      const container = document.getElementById('examContainer');
      const resultBox = document.getElementById('examResultBox');
      const scoreTitle = document.getElementById('examScoreTitle');
      const scoreDesc = document.getElementById('examScoreDesc');

      container.classList.add('hidden');
      resultBox.classList.remove('hidden');

      const percent = Math.round((score / examQuestions.length) * 100);
      let rank = 'Cần ôn tập thêm';
      if (percent >= 90) rank = 'Trạng Nguyên GDQP&AN 10 — Xuất Sắc!';
      else if (percent >= 75) rank = 'Bảng Nhãn GDQP&AN 10 — Rất Tốt!';
      else if (percent >= 50) rank = 'Đạt Yêu Cầu Chuẩn Kiến Thức & Kĩ Năng';

      scoreTitle.innerHTML = \`<span class="text-red-600">\${score} / \${examQuestions.length}</span> (\${percent}%)\`;
      scoreDesc.innerHTML = \`<strong class="text-base text-slate-900 dark:text-white block mb-1">\${rank}</strong>Bạn đã hoàn thành bài khảo thí chuẩn 25 câu môn Giáo dục quốc phòng và an ninh lớp 10 SGK Kết nối tri thức.\`;
    }

    function resetExam() {
      document.getElementById('examContainer').classList.remove('hidden');
      renderExamQuestions();
    }
  </script>
</body>
</html>`;
}

// Generate page
const fullHTML = generateFullPage();

// Write to courses/gdqp_10.html
const p1 = path.join(__dirname, '../courses/gdqp_10.html');
fs.writeFileSync(p1, fullHTML, 'utf8');
console.log('Saved courses/gdqp_10.html, size:', fullHTML.length);

// Also mirror to courses/quocphong_10.html
const p2 = path.join(__dirname, '../courses/quocphong_10.html');
fs.writeFileSync(p2, fullHTML, 'utf8');
console.log('Saved courses/quocphong_10.html, size:', fullHTML.length);
