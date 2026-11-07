// scratch/generate_van12_data.js
const fs = require('fs');
const path = require('path');

const userReqPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/user_request_van12.md';
const content = fs.readFileSync(userReqPath, 'utf8');

// Match 9 units
const unitHeaders = [
  'Bài 1. Khả năng lớn lao của tiểu thuyết',
  'Bài 2. Những thế giới thơ',
  'Bài 3. Lập luận trong văn bản nghị luận',
  'Bài 4. Yếu tố kì ảo trong truyện kể',
  'Bài 5. Tiếng cười của hài kịch',
  'Bài 6. Hồ Chí Minh – “Văn hóa phải soi đường cho quốc dân đi”',
  'Bài 7. Sự thật trong tác phẩm kí',
  'Bài 8. Dữ liệu trong văn bản thông tin',
  'Bài 9. Văn học và cuộc đời'
];

const unitThemes = {
  1: "Khám phá quy mô tự sự bao quát của tiểu thuyết hiện đại, đa dạng điểm nhìn và nghệ thuật trào phúng, mỉa mai, nghịch ngữ.",
  2: "Thâm nhập các thế giới nghệ thuật thơ từ thi pháp cổ điển Đường luật đến lãng mạn bi tráng và biểu tượng tượng trưng siêu thực.",
  3: "Xây dựng hệ thống lập luận chặt chẽ: xác lập luận đề, triển khai luận điểm, sử dụng lí lẽ, bằng chứng và khắc phục lỗi logic.",
  4: "Sức mạnh của yếu tố kì ảo trong truyện kể từ truyền kì trung đại đến hiện đại: bộc lộ chiều sâu nhân văn và nghệ thuật dùng điển cố.",
  5: "Nghệ thuật hài kịch và cơ chế tiếng cười: khai thác xung đột kịch tính, lật tẩy thói tật xã hội và thói tham lam, giả tạo.",
  6: "Quan điểm sáng tác và di sản văn học Hồ Chí Minh: áng văn chính luận bất hủ, truyện kí sắc bén và thơ tứ tuyệt trác tuyệt.",
  7: "Sự thật và tính xác thực trong tác phẩm kí: hiện thực đời sống, góc nhìn chứng nhân và điều chỉnh phong cách ngôn ngữ.",
  8: "Tiếp nhận và xử lí dữ liệu đa phương tiện trong văn bản thông tin, bảo đảm tính khách quan và đạo đức sở hữu trí tuệ.",
  9: "Sự gắn kết hữu cơ giữa văn học và cuộc đời: khát vọng sống, giữ gìn nhân cách và trách nhiệm bảo tồn, phát triển tiếng Việt."
};

// 27 Mini Quizzes (3 per unit)
const unitQuizzes = {
  1: [
    {
      q: "Điểm khác biệt cốt lõi nhất của tiểu thuyết hiện đại so với tiểu thuyết truyền thống là gì?",
      options: [
        "Chỉ tập trung vào những biến cố vĩ đại của lịch sử dân tộc",
        "Có cái nhìn đời sống đa chiều, chú trọng cá nhân, tâm lí và các mối quan hệ xã hội phức tạp",
        "Tuyệt đối tuân theo trật tự thời gian tuyến tính một chiều",
        "Bắt buộc người kể chuyện phải luôn đứng ở ngôi thứ nhất xưng Tôi"
      ],
      answer: 1,
      explanation: "Tiểu thuyết hiện đại có cách nhìn đa chiều, chú trọng thế giới nội tâm cá nhân, tâm lí và quan hệ xã hội trong thời đại mới.",
      takeaway: "Tiểu thuyết hiện đại = Đa chiều + Chiều sâu tâm lí cá nhân + Điểm nhìn biến hóa."
    },
    {
      q: "Trong đoạn trích 'Xuân Tóc Đỏ cứu quốc' (Số đỏ), mũi nhọn châm biếm của Vũ Trọng Phụng chĩa vào đối tượng nào?",
      options: [
        "Sự thất bại của nền thể thao và các vận động viên quần vợt",
        "Xã hội thuộc địa sính danh, chuộng hình thức và sự tha hóa biến điều lố bịch thành vinh quang",
        "Chính quyền bảo hộ Pháp tài trợ cho các giải đấu thể thao phong trào",
        "Những người nông dân nghèo thành thị bị bóc lột sức lao động"
      ],
      answer: 1,
      explanation: "Tác phẩm đả kích sâu cay xã hội thực dân nửa phong kiến sính danh, chuộng hình thức, nơi kẻ lưu manh cơ hội được tung hô làm anh hùng cứu quốc.",
      takeaway: "Trào phúng Vũ Trọng Phụng phơi bày sự đảo lộn chuẩn mực đạo đức và giá trị xã hội."
    },
    {
      q: "Biện pháp 'nghịch ngữ' (oxymoron) trong tiếng Việt được hiểu là gì?",
      options: [
        "Sử dụng từ ngữ cổ điển không ai hiểu được",
        "Đặt cạnh nhau những từ ngữ/ý niệm trái ngược, tương phản để tạo bất ngờ và khắc họa bản chất sự việc",
        "Nói giảm nói tránh để giảm bớt cảm giác đau thương",
        "Lặp lại nhiều lần cùng một cấu trúc ngữ pháp để tạo nhạc điệu"
      ],
      answer: 1,
      explanation: "Nghịch ngữ là thao tác kết hợp những ý niệm tương phản, bất tương hợp nhằm tạo hiệu quả nghệ thuật gây sốc, cười hoặc lột trần mâu thuẫn bản chất.",
      takeaway: "Nghịch ngữ = Đặt ý trái ngược cạnh nhau để làm bật bản chất."
    }
  ],
  2: [
    {
      q: "Vẻ đẹp hình tượng người lính trong bài thơ 'Tây Tiến' (Quang Dũng) được khắc họa nổi bật qua cảm hứng nào?",
      options: [
        "Cảm hứng hiện thực trần trụi và bi quan tuyệt vọng",
        "Cảm hứng lãng mạn kết hợp hài hòa với chất bi tráng, hào hoa",
        "Cảm hứng châm biếm phê phán những gian khổ chiến trường",
        "Cảm hứng cổ điển thuần túy với các quy phạm nghiêm ngặt"
      ],
      answer: 1,
      explanation: "Quang Dũng khắc họa người lính Tây Tiến với vẻ đẹp bi tráng và lãng mạn hào hoa: dù gian khổ, hi sinh nhưng vẫn sáng ngời khí phách và tâm hồn mộng mơ.",
      takeaway: "Tây Tiến = Bi tráng + Lãng mạn + Hào hoa."
    },
    {
      q: "Hình tượng 'tiếng đàn ghi-ta' trong bài thơ của Thanh Thảo mang ý nghĩa biểu tượng gì?",
      options: [
        "Đơn thuần là nhạc cụ biểu diễn truyền thống của đất nước Tây Ban Nha",
        "Biểu tượng cho tâm hồn nghệ thuật của Lor-ca, khát vọng tự do và sức sống bất tử của cái đẹp",
        "Tượng trưng cho sự đầu hàng của nghệ sĩ trước bạo lực phát xít",
        "Biểu hiện cho sự chia rẽ trong nội bộ các văn nghệ sĩ châu Âu"
      ],
      answer: 1,
      explanation: "Cây đàn ghi-ta là biểu tượng đa nghĩa: linh hồn Tây Ban Nha, tiếng hát nghệ thuật cách tân của Lor-ca và sức sống vĩnh cửu của cái đẹp không thể bị hủy diệt.",
      takeaway: "Đàn ghi-ta = Linh hồn nghệ sĩ + Khát vọng tự do + Cái đẹp bất tử."
    },
    {
      q: "Điểm mấu chốt khi phân tích biện pháp tu từ trong văn bản thơ là gì?",
      options: [
        "Chỉ cần gọi đúng tên thuật ngữ tu từ là đạt điểm tuyệt đối",
        "Đếm chính xác số lần biện pháp tu từ xuất hiện trong đoạn thơ",
        "Gắn hình thức nghệ thuật với hiệu quả biểu đạt: hình ảnh gợi ra, cảm xúc nhấn mạnh và giọng điệu thơ",
        "Bắt buộc phải so sánh với các bài thơ cổ của Trung Quốc"
      ],
      answer: 2,
      explanation: "Phân tích tu từ trong thơ phải luôn gắn liền biện pháp với hiệu quả gợi cảm, gợi hình và tư tưởng, cảm xúc của chủ thể trữ tình.",
      takeaway: "Không chỉ gọi tên biện pháp — Phải chỉ ra tác dụng biểu cảm và thẩm mĩ."
    }
  ],
  3: [
    {
      q: "Quan hệ cơ bản giữa Luận đề, Luận điểm, Lí lẽ và Bằng chứng trong bài văn nghị luận là gì?",
      options: [
        "Luận điểm đứng độc lập và không liên quan gì đến luận đề trung tâm",
        "Luận đề là vấn đề trung tâm; luận điểm triển khai luận đề; lí lẽ giải thích vì sao; bằng chứng minh chứng tính xác thực",
        "Bằng chứng có thể thay thế hoàn toàn cho lí lẽ và luận điểm",
        "Bài nghị luận chỉ cần nêu cảm xúc cá nhân, không cần luận điểm rõ ràng"
      ],
      answer: 1,
      explanation: "Hệ thống nghị luận có cấu trúc hình cây: Luận đề chi phối các Luận điểm; mỗi luận điểm được chứng minh bằng Lí lẽ sắc bén và Bằng chứng tin cậy.",
      takeaway: "Luận đề (vấn đề gốc) → Luận điểm (nhánh) → Lí lẽ (giải thích) → Bằng chứng (minh chứng)."
    },
    {
      q: "Trong bài 'Nhìn về vốn văn hóa dân tộc', Trần Đình Hượu đưa ra thái độ tiếp cận văn hóa dân tộc như thế nào?",
      options: [
        "Tự tôn dân tộc thái quá, coi văn hóa Việt Nam là hoàn hảo nhất thế giới",
        "Tự ti mặc cảm, phủ nhận mọi giá trị truyền thống để tiếp thu hoàn toàn phương Tây",
        "Phân tích tỉnh táo, khách quan: chỉ ra cả mặt tích cực, hạn chế và nguyên nhân lịch sử",
        "Chỉ quan tâm đến nghệ thuật kiến trúc cung đình thời phong kiến"
      ],
      answer: 2,
      explanation: "Tác giả đánh giá văn hóa dân tộc với tinh thần khoa học tỉnh táo: thấy rõ mặt mạnh (thực tế, hòa đồng, yêu hòa bình) và mặt hạn chế (thiếu quy mô đồ sộ, ít sáng tạo triết học đỉnh cao).",
      takeaway: "Nhìn nhận văn hóa tỉnh táo = Tránh tự tôn cực đoan & Tránh tự ti mặc cảm."
    },
    {
      q: "Lỗi logic 'khái quát hóa vội vã' (hasty generalization) xảy ra khi nào?",
      options: [
        "Khi người viết dẫn ra quá nhiều số liệu thống kê khoa học",
        "Khi rút ra kết luận mang tính quy luật chung chỉ từ một hoặc rất ít trường hợp cá biệt",
        "Khi dùng câu văn quá dài có nhiều thành phần phụ chú",
        "Khi sử dụng từ đồng nghĩa trong cùng một đoạn văn"
      ],
      answer: 1,
      explanation: "Khái quát hóa vội vã là lỗi suy luận khi lấy một vài ví dụ đơn lẻ, thiếu tính đại diện để quy chụp thành chân lí phổ quát cho toàn thể.",
      takeaway: "Bằng chứng phải đủ số lượng và có tính đại diện trước khi đưa ra kết luận tổng quát."
    }
  ],
  4: [
    {
      q: "Trong truyện truyền kì 'Hải khẩu linh từ' (Đoàn Thị Điểm), chi tiết kì ảo đóng vai trò chủ yếu nào?",
      options: [
        "Làm cho câu chuyện rùng rợn, hù dọa người đọc",
        "Minh oan cho người phụ nữ đức hạnh, khẳng định phẩm giá trung liệt và thể hiện niềm tin công lí thần linh",
        "Thể hiện sức mạnh thần bí của các thế lực phong kiến tàn bạo",
        "Giải thích các hiện tượng thiên tai bão lụt vùng cửa biển"
      ],
      answer: 1,
      explanation: "Yếu tố kì ảo trong truyền kì trung đại thể hiện niềm tin đạo lí: người hiền lương chịu oan khuất sẽ được thần linh chứng giám, phẩm hạnh bất tử.",
      takeaway: "Kì ảo truyền kì = Chiêu tuyết nỗi oan + Tôn vinh phẩm hạnh + Khát vọng công lí."
    },
    {
      q: "Ý nghĩa của hình tượng kì ảo 'hoa tử huyền' trong truyện ngắn 'Muối của rừng' (Nguyễn Huy Thiệp) là gì?",
      options: [
        "Là loài hoa đem lại sự giàu sang phú quý tức thì cho người săn bắn",
        "Biểu tượng cho sự thức tỉnh lương tri, sự thanh lọc tâm hồn của ông Diểu và vẻ đẹp trường tồn của tự nhiên",
        "Biểu tượng cho sự nguy hiểm chết chóc nơi rừng già",
        "Loài hoa báo hiệu mùa bão lũ đến gần"
      ],
      answer: 1,
      explanation: "Hoa tử huyền nở 30 năm một lần là biểu tượng kì ảo của sự hoàn lương: thiên nhiên ban tặng cho người biết từ bỏ sát sinh và tìm lại sự hòa hợp nhân văn.",
      takeaway: "Muối của rừng = Sự hoàn lương + Thức tỉnh lương tri + Tôn trọng sinh mệnh tự nhiên."
    },
    {
      q: "Nghệ thuật sử dụng 'điển cố, điển tích' có tác dụng nổi bật gì trong văn bản nghệ thuật?",
      options: [
        "Làm cho văn bản trở nên dài dòng và khó hiểu đối với đại chúng",
        "Dồn nén ý tứ, gợi liên tưởng văn hóa sâu sắc và tăng vẻ đẹp hàm súc, tao nhã cho câu văn",
        "Thay thế hoàn toàn cho cốt truyện và ngôn ngữ nhân vật",
        "Chứng minh tác giả chỉ biết sao chép sách vở xưa"
      ],
      answer: 1,
      explanation: "Điển cố giúp câu văn hàm súc, gợi trường liên tưởng lịch sử - triết học sâu xa chỉ bằng vài từ cô đọng.",
      takeaway: "Điển cố = Ý tại ngôn ngoại + Chiều sâu tri thức văn hóa + Ngôn ngữ tao nhã."
    }
  ],
  5: [
    {
      q: "Nguyên nhân cốt lõi làm phát sinh tiếng cười trong vở kịch 'Quan thanh tra' (Nikolai Gogol) là gì?",
      options: [
        "Những pha nhào lộn và hành động hề xiếc hình thể trên sân khấu",
        "Sự ngộ nhận trớ trêu: đám quan lại tham nhũng nhầm lẫn một kẻ bắng nhắng, túng thiếu thành quan thanh tra quyền uy",
        "Sự nghèo khó của người dân nông thôn nước Nga",
        "Các cuộc cãi vã giữa những người phục vụ trong quán trọ"
      ],
      answer: 1,
      explanation: "Tiếng cười bật ra từ sự ngộ nhận và nỗi sợ hãi tột cùng của bộ máy tham nhũng; chúng tự bộc lộ bản chất đê hèn trước kẻ mà chúng tưởng là thanh tra tối cao.",
      takeaway: "Kịch Gogol = Ngộ nhận kịch tính + Phơi bày bộ máy quan liêu mục ruỗng."
    },
    {
      q: "Trong trích đoạn kịch 'Giấu của' (Quẫn - Lộng Chương), tiếng cười hướng tới mục đích phê phán điều gì?",
      options: [
        "Chế giễu sự thiếu thốn lương thực sau chiến tranh",
        "Phê phán lòng tham lam, tâm lí bo bo giữ của khiến con người tha hóa, nghi kị và đánh mất nhân cách",
        "Chỉ trích các chính sách phát triển công nghiệp nặng",
        "Đả kích sự thiếu am hiểu công nghệ thông tin"
      ],
      answer: 1,
      explanation: "Vở kịch châm biếm sâu sắc thói tật nô lệ đồng tiền; của cải cất giấu biến thành gông cùm tâm lí giam cầm tự do và hạnh phúc gia đình.",
      takeaway: "Giấu của = Phê phán thói hám của + Làm lộ sự bất an của lòng tham mù quáng."
    },
    {
      q: "Yếu tố nào giữ vai trò quyết định trong việc thúc đẩy xung đột hài kịch vận động?",
      options: [
        "Những đoạn thuyết minh giảng giải dài dòng của tác giả",
        "Hành động kịch, đối thoại sắc bén và phản ứng dây chuyền của các nhân vật trên sân khấu",
        "Phần nhạc nền và ánh sáng sân khấu thay đổi màu sắc",
        "Số lượng diễn viên tham gia diễn xuất"
      ],
      answer: 1,
      explanation: "Kịch là nghệ thuật của hành động; hành động nhân vật và đối thoại tạo ra chuỗi xung đột tự vận động, không cần tác giả ra mặt can thiệp.",
      takeaway: "Xung đột kịch = Vận động qua Hành động + Đối thoại + Tình huống kịch."
    }
  ],
  6: [
    {
      q: "Mạch lập luận chiến lược trong bản 'Tuyên ngôn Độc lập' (1945) của Hồ Chí Minh được tổ chức theo trật tự nào?",
      options: [
        "Kêu gọi kháng chiến → Kể tội thực dân → Tuyên bố độc lập",
        "Cơ sở pháp lí quốc tế → Cơ sở thực tiễn (tội ác giặc & thắng lợi cách mạng) → Tuyên bố độc lập và ý chí bảo vệ",
        "Tường thuật cuộc Cách mạng tháng Tám → Trích dẫn thơ ca dân gian → Đề xuất hợp tác kinh tế",
        "Phân tích tình hình kinh tế thế giới → Đánh giá tài nguyên thiên nhiên → Kết luận"
      ],
      answer: 1,
      explanation: "Hồ Chí Minh mở đầu bằng nguyên lí bất hủ của Tuyên ngôn Mỹ & Pháp, đối chiếu thực tế tội ác Pháp, khẳng định quyền làm chủ của dân tộc và tuyên bố độc lập đanh thép.",
      takeaway: "Tuyên ngôn Độc lập = Cơ sở pháp lí → Cơ sở lịch sử thực tiễn → Lời tuyên bố đanh thép."
    },
    {
      q: "Nét đặc sắc về bút pháp nghệ thuật trong bài thơ 'Mộ' (Chiều tối) của Hồ Chí Minh là gì?",
      options: [
        "Miêu tả chi tiết, tỉ mỉ cuộc sống ngục tù tăm tối",
        "Bút pháp chấm phá cổ điển kết hợp tinh thần hiện đại: tứ thơ vận động từ bóng tối sang ánh sáng và sự sống",
        "Ngôn ngữ trào phúng đả kích trực diện quan lại nhà tù Tưởng Giới Thạch",
        "Sử dụng nhiều điển tích cổ xưa khó hiểu"
      ],
      answer: 1,
      explanation: "Bài thơ mang vẻ đẹp Đường thi chấm phá nhưng sáng bừng tinh thần thời đại: điểm nhìn chuyển từ cánh chim mỏi, chòm mây cô độc sang bếp lửa hồng ấm áp của thiếu nữ xay ngô.",
      takeaway: "Chiều tối = Bút pháp chấm phá cổ điển + Tinh thần thép + Vận động hướng về ánh sáng."
    },
    {
      q: "Nghệ thuật châm biếm trong truyện ngắn 'Những trò lố hay là Va-ren và Phan Bội Châu' được thể hiện nổi bật qua thủ pháp nào?",
      options: [
        "Xây dựng nhân vật hoàn toàn bằng trí tưởng tượng li kì",
        "Tương phản gay gắt giữa sự thao thao bất tuyệt, giả dối của Va-ren và thái độ im lặng, khinh bỉ của cụ Phan",
        "Chỉ dùng lời kể của nhân vật ngôi thứ nhất",
        "Để hai nhân vật trực tiếp đấu kiếm trên chiến trường"
      ],
      answer: 1,
      explanation: "Sự đối lập giữa kẻ thực dân lải nhải hứa hẹn hèn hạ và sự im lặng sừng sững như pho tượng của nhà cách mạng tạo nên đòn trào phúng nghiền nát nhân phẩm đối phương.",
      takeaway: "Va-ren vs Phan Bội Châu = Tương phản đối lập + Lời hứa trò hề vs Sự im lặng thép."
    }
  ],
  7: [
    {
      q: "Yêu cầu tiên quyết nhất đối với một tác phẩm thuộc thể loại Kí là gì?",
      options: [
        "Phải hư cấu ra các nhân vật thần thoại hấp dẫn",
        "Tôn trọng sự thật đời sống, bảo đảm tính xác thực của sự kiện và nhân vật được ghi chép",
        "Chỉ ghi lại những câu chuyện cười dân gian",
        "Tuyệt đối không được bộc lộ bất kì cảm xúc nào của người viết"
      ],
      answer: 1,
      explanation: "Tính xác thực là xương sống của thể kí. Mọi chi tiết, sự kiện, con người phải có căn cứ từ thực tế đời sống khách quan.",
      takeaway: "Thể kí = Tôn trọng sự thật + Tính xác thực + Dấu ấn nhân chứng."
    },
    {
      q: "Tác phẩm 'Việc làng' của Ngô Tất Tố (tiêu biểu là đoạn 'Nghệ thuật băm thịt gà') đã phơi bày điều gì ở làng quê Việt Nam thời kì trước Cách mạng?",
      options: [
        "Vẻ đẹp thanh bình và sung túc tuyệt đối của nông thôn",
        "Những hủ tục đình đám nhiêu khê, thói trọng sĩ diện biến miếng ăn thành món nợ đè nặng lên người dân nghèo",
        "Sự phát triển vượt bậc của nền nông nghiệp chăn nuôi",
        "Kĩ thuật chế biến ẩm thực đỉnh cao của giới thượng lưu"
      ],
      answer: 1,
      explanation: "Ngô Tất Tố bóc trần những hủ tục phong kiến đè nặng lên làng quê: miếng thịt gà nơi đình trung trở thành thước đo đẳng cấp và căn nguyên gây bao nỗi khổ nhục.",
      takeaway: "Nghệ thuật băm thịt gà = Bóc trần hủ tục làng xã + Nỗi đau miếng ăn nơi cửa quyền."
    },
    {
      q: "Khi nào người viết cần sử dụng phong cách ngôn ngữ trang trọng thay vì thân mật?",
      options: [
        "Trong các bức thư tâm sự riêng tư với bạn bè cùng lớp",
        "Trong các văn bản hành chính, báo cáo khoa học, hội nghị chính thức và giao tiếp nghi thức",
        "Khi trò chuyện trong bữa cơm gia đình thân mật",
        "Khi viết nhật kí cá nhân hằng ngày"
      ],
      answer: 1,
      explanation: "Ngôn ngữ trang trọng chuẩn mực được sử dụng trong các diễn đàn nghi lễ, văn bản học thuật và báo cáo đòi hỏi sự nghiêm túc, khách quan.",
      takeaway: "Ngôn ngữ trang trọng = Nghi thức, chuẩn mực, khách quan, chính thức."
    }
  ],
  8: [
    {
      q: "Trong văn bản thông tin, việc sử dụng các phương tiện phi ngôn ngữ (hình ảnh, biểu đồ, bản đồ) nhằm mục đích gì?",
      options: [
        "Chỉ để trang trí cho trang văn bản đỡ đơn điệu",
        "Trực quan hóa dữ liệu, giúp người đọc nắm bắt thông tin nhanh chóng, chính xác và sinh động hơn",
        "Che giấu sự thiếu hụt kiến thức của tác giả",
        "Thay thế hoàn toàn cho hệ thống câu chữ trong bài viết"
      ],
      answer: 1,
      explanation: "Phương tiện phi ngôn ngữ hỗ trợ đắc lực cho chữ viết, giúp cô đọng số liệu và mô hình hóa thông tin phức tạp.",
      takeaway: "Phương tiện phi ngôn ngữ = Trực quan hóa + Minh bạch dữ liệu + Tăng độ tin cậy."
    },
    {
      q: "Nội dung văn bản 'Giáo dục khai phóng ở Việt Nam nhìn từ Đông Kinh Nghĩa Thục' làm nổi bật giá trị cốt lõi nào?",
      options: [
        "Duy trì lối học khoa cử tầm chương trích cú thời phong kiến",
        "Tinh thần đổi mới giáo dục: thực học, thực nghiệp, khai dân trí và chấn dân khí vì sự tiến bộ dân tộc",
        "Phản đối việc học chữ Quốc ngữ",
        "Tập trung thuần túy vào việc rèn luyện võ nghệ đánh trận"
      ],
      answer: 1,
      explanation: "Đông Kinh Nghĩa Thục (1907) là ngọn cờ giáo dục khai phóng đầu tiên ở nước ta: đoạn tuyệt lối học từ chương hủ bại, truyền bá kiến thức mới và chữ Quốc ngữ.",
      takeaway: "Khai phóng Đông Kinh Nghĩa Thục = Thực học + Thực nghiệp + Khai mở dân trí."
    },
    {
      q: "Hành vi nào sau đây vi phạm nguyên tắc tôn trọng quyền sở hữu trí tuệ trong nghiên cứu học tập?",
      options: [
        "Trích dẫn nguyên văn câu nói kèm ngoặc kép và ghi rõ tác giả, nguồn tài liệu",
        "Diễn giải lại ý tưởng của người khác nhưng vẫn chú thích nguồn tham khảo",
        "Sao chép nguyên văn đoạn văn của tác giả khác vào bài làm của mình mà không chú thích nguồn dẫn",
        "Lập danh mục tài liệu tham khảo ở cuối bài nghiên cứu"
      ],
      answer: 2,
      explanation: "Sử dụng công trình, ý tưởng hoặc câu chữ của người khác mà không ghi nguồn chính là hành vi đạo văn (plagiarism), vi phạm nghiêm trọng liêm chính học thuật.",
      takeaway: "Sở hữu trí tuệ = Minh bạch nguồn gốc + Ghi công tác giả + Trung thực học thuật."
    }
  ],
  9: [
    {
      q: "Thông điệp nhân sinh tích cực và mãnh liệt nhất trong thi phẩm 'Vội vàng' của Xuân Diệu là gì?",
      options: [
        "Than vãn bất lực trước thời gian tàn phá cuộc đời",
        "Ý thức sâu sắc về bước đi của thời gian để sống hết mình, tận hiến và yêu đời thiết tha từng giây phút",
        "Khuyên con người xa lánh cõi trần để tìm chốn bồng lai tiên cảnh",
        "Chỉ theo đuổi danh vọng vật chất phù hoa"
      ],
      answer: 1,
      explanation: "Xuân Diệu phát hiện bước đi nghiệt ngã của thời gian, từ đó cất lên tuyên ngôn sống sôi nổi, cuồng nhiệt: sống sâu sắc và trân quý từng khoảnh khắc mùa xuân cuộc đời.",
      takeaway: "Vội vàng = Trân quý thời gian + Sống cống hiến mãnh liệt + Tình yêu trần thế tha thiết."
    },
    {
      q: "Xung đột trung tâm trong vở kịch 'Hồn Trương Ba, da hàng thịt' (Lưu Quang Vũ) phản ánh bi kịch triết học nào?",
      options: [
        "Cuộc tranh chấp tài sản ruộng đất giữa hai gia đình làng quê",
        "Bi kịch không được là chính mình khi tâm hồn thanh cao phải sống nhờ trong thể xác dung tục, thô phàm",
        "Mâu thuẫn giữa quan chức thiên đình và người nông dân hạ giới",
        "Sự khác biệt tuổi tác giữa các thế hệ trong gia đình Trương Ba"
      ],
      answer: 1,
      explanation: "Vở kịch gửi gắm thông điệp nhân văn sâu sắc: con người chỉ thực sự hạnh phúc khi có sự hài hòa giữa tâm hồn và thể xác, được sống trọn vẹn là chính mình.",
      takeaway: "Hồn Trương Ba da hàng thịt = Bi kịch tha hóa + Khát vọng sống toàn vẹn, thanh cao."
    },
    {
      q: "Để giữ gìn và phát triển sự trong sáng của tiếng Việt trong thời đại số, học sinh cần làm gì?",
      options: [
        "Lạm dụng tối đa tiếng lóng và từ ngữ chêm xen tiếng nước ngoài vào mọi hoàn cảnh",
        "Tuyệt đối không học hay tiếp thu bất kì từ ngữ hiện đại nào mới ra đời",
        "Nắm vững chuẩn mực ngữ âm, từ vựng, ngữ pháp; tiếp thu tinh hoa ngôn ngữ thế giới có chọn lọc và tôn trọng bản sắc",
        "Bỏ qua mọi quy tắc chính tả khi nhắn tin trao đổi học tập"
      ],
      answer: 2,
      explanation: "Giữ gìn tiếng Việt không đồng nghĩa với bảo thủ đóng cửa, mà là bảo tồn bản sắc kết hợp tiếp thu có chọn lọc để làm giàu năng lực biểu đạt cho tiếng mẹ đẻ.",
      takeaway: "Giữ gìn tiếng Việt = Đúng chuẩn mực + Làm giàu vốn từ + Sáng tạo linh hoạt."
    }
  ]
};

// 20 Questions for Trạng Nguyên 45-Minute Literature Exam Arena
const examQuestions = [
  {
    id: 1,
    lesson: 1,
    q: "Đặc điểm nào sau đây KHÔNG PHẢI là đặc trưng nổi bật của thể loại tiểu thuyết hiện đại?",
    options: [
      "Quy mô hiện thực bao quát nhiều chiều không gian và thời gian",
      "Khắc họa đời sống nội tâm sâu sắc, phức tạp của cá nhân",
      "Bắt buộc người kể chuyện phải giữ điểm nhìn duy nhất từ đầu đến cuối tác phẩm",
      "Khả năng dung nạp nhiều giọng điệu và phong cách ngôn ngữ khác nhau"
    ],
    answer: 2,
    explain: "Tiểu thuyết hiện đại thường dịch chuyển điểm nhìn linh hoạt (bên trong, bên ngoài, đa điểm nhìn) để soi chiếu sự kiện từ nhiều góc độ."
  },
  {
    id: 2,
    lesson: 1,
    q: "Thủ pháp 'nói mỉa' trong tác phẩm văn học mang lại hiệu quả nghệ thuật chủ yếu nào?",
    options: [
      "Ca ngợi một cách chân thành những chiến công vang dội của nhân vật",
      "Tạo nên sự lệch pha giữa lời khen bề ngoài và ý chê trách bên trong nhằm phê phán thói tật xã hội",
      "Giúp nhân vật tâm tình sâu lắng về nỗi đau mất mát người thân",
      "Khắc họa vẻ đẹp trang nghiêm, hùng trĩ của cảnh sắc thiên nhiên"
    ],
    answer: 1,
    explain: "Nói mỉa khen bề ngoài nhưng hàm ý chê bai, tố cáo sự giả dối, lố bịch."
  },
  {
    id: 3,
    lesson: 2,
    q: "Trong bài thơ 'Cảm hoài' của Đặng Dung, hình ảnh người anh hùng 'mài gươm dưới trăng' thể hiện điều gì?",
    options: [
      "Sự lạc quan tột cùng vì chiến thắng giặc thù đã nắm chắc trong tay",
      "Khí phách bi tráng, chí lớn cứu nước chưa thành dù tóc đã bạc vì thời vận bất lợi",
      "Nỗi sợ hãi tuổi già và sự xa lánh mọi biến cố lịch sử",
      "Thú vui thanh tao nơi ẩn dật của bậc ẩn sĩ yêu trăng"
    ],
    answer: 1,
    explain: "'Thù vị thù thanh đầu dĩ bạch / Kỉ độ long tuyền đái nguyệt ma' thể hiện bi kịch chí lớn chưa thành của bậc trung quân ái quốc."
  },
  {
    id: 4,
    lesson: 2,
    q: "Hình ảnh người lính Tây Tiến 'Không mọc tóc', 'Quân xanh màu lá' phản ánh hiện thực nào?",
    options: [
      "Sự thiếu thốn dinh dưỡng và những cơn sốt rét rừng tàn khốc nơi chiến trường miền Tây",
      "Một phong cách thời trang đặc biệt của thanh niên trí thức Hà Nội thời bấy giờ",
      "Nghi thức truyền thống trước khi ra trận của quân đội nhân dân",
      "Ảo giác lãng mạn do Quang Dũng hoàn toàn tưởng tượng ra"
    ],
    answer: 0,
    explain: "Chi tiết hiện thực trần trụi về căn bệnh sốt rét rừng rụng tóc, da xanh xao được nâng lên tầm bi tráng nhờ khí phách kiêu hùng: 'Dữ oai hùm'."
  },
  {
    id: 5,
    lesson: 2,
    q: "Âm thanh chuỗi từ 'li-la li-la li-la' kết thúc bài thơ 'Đàn ghi ta của Lor-ca' gợi liên tưởng đến:",
    options: [
      "Tiếng gươm đao va chạm trong cuộc nội chiến đẫm máu",
      "Tiếng rải đàn ghi-ta du dương và loài hoa li-la tím ngát, biểu tượng cho sự bất tử của nghệ thuật Lor-ca",
      "Tiếng chim hót lạc quan báo hiệu ngày hòa bình đã tới",
      "Tiếng bước chân của đội hành quyết phát xít"
    ],
    answer: 1,
    explain: "Điệp âm mô phỏng tiếng đàn buông rơi và gợi cánh hoa tử đinh hương (lilac), khẳng định nghệ thuật Lor-ca không thể bị tiêu diệt."
  },
  {
    id: 6,
    lesson: 3,
    q: "Để một luận điểm trong văn nghị luận có sức thuyết phục cao, người viết cần bảo đảm:",
    options: [
      "Chỉ cần viết thật dài và dùng nhiều tính từ cảm thán ca ngợi",
      "Luận điểm rõ ràng, được minh chứng bằng lí lẽ chặt chẽ và bằng chứng xác thực, có tính đại diện",
      "Dẫn lại nguyên văn lời bình của nhiều người mà không cần giải thích",
      "Luôn phủ định hoàn toàn mọi quan điểm của các tác giả đi trước"
    ],
    answer: 1,
    explain: "Sức mạnh nghị luận bắt nguồn từ tính xác đáng của luận điểm, lí lẽ logic và bằng chứng khách quan."
  },
  {
    id: 7,
    lesson: 3,
    q: "Trong bài 'Năng lực sáng tạo' (Phan Đình Diệu), tác giả nhấn mạnh yếu tố nào giúp nuôi dưỡng sáng tạo?",
    options: [
      "Học thuộc lòng toàn bộ sách giáo khoa và không được thắc mắc",
      "Khả năng hoài nghi khoa học, đặt câu hỏi, tư duy độc lập và môi trường chấp nhận thử nghiệm, sai sót",
      "Thuần túy dựa vào năng khiếu bẩm sinh mà không cần rèn luyện",
      "Tuân thủ tuyệt đối các khuôn mẫu tư duy có sẵn từ trước"
    ],
    answer: 1,
    explain: "Sáng tạo đòi hỏi tư duy phản biện, dám dấn thân tìm tòi cái mới và vượt qua định kiến."
  },
  {
    id: 8,
    lesson: 4,
    q: "Truyện truyền kì trung đại Việt Nam thường kết hợp các yếu tố nào sau đây?",
    options: [
      "Chỉ kể chuyện đời thực của người nông dân bình dị",
      "Lõi hiện thực lịch sử, đạo lí thế sự kết hợp nhuần nhuyễn với các yếu tố kì ảo, hoang đường",
      "Kể lại những phát minh khoa học viễn tưởng tương lai",
      "Dùng văn bản hành chính để ghi chép số liệu ruộng đất"
    ],
    answer: 1,
    explain: "Truyền kì mượn cái kì ảo để chở cái thực, gởi gắm khát vọng công lí và quan niệm đạo đức nhân sinh."
  },
  {
    id: 9,
    lesson: 4,
    q: "Hành động ông Diểu cởi áo bọc con khỉ đực bị thương rồi thả nó về rừng ('Muối của rừng') biểu thị:",
    options: [
      "Sự sợ hãi của ông già trước thú dữ rừng sâu",
      "Sự thức tỉnh của lương tri, lòng trắc ẩn và sự chiến thắng của bản tính thiện trước bản năng hủy diệt",
      "Chiến thuật nhằm dụ bầy khỉ khác rơi vào bẫy",
      "Sự thất vọng vì không bán được con mồi với giá cao"
    ],
    answer: 1,
    explain: "Ông Diểu trở về trắng tay nhưng nhận lại món quà vô giá của tâm hồn: sự thanh lọc lương tri và tình yêu sinh mệnh."
  },
  {
    id: 10,
    lesson: 5,
    q: "Thủ pháp trào phúng nổi bật nhất tạo nên kịch tính trong vở 'Quan thanh tra' của Gogol là:",
    options: [
      "Nghệ thuật xây dựng tình huống hiểu lầm dây chuyền và sự phóng đại tâm lí sợ hãi của quan tham",
      "Tập trung miêu tả cảnh sinh hoạt lãng mạn nơi cung đình nước Nga",
      "Sử dụng ngôn ngữ thơ ca bác học vào lời thoại của người hầu",
      "Để nhân vật tự tử ở ngay hồi mở đầu vở kịch"
    ],
    answer: 0,
    explain: "Nỗi sợ hãi tội lỗi khiến đám quan chức địa phương tự biến mình thành con rối trước kẻ lừa đảo nghèo kiết xác."
  },
  {
    id: 11,
    lesson: 6,
    q: "Vì sao bản 'Tuyên ngôn Độc lập' của Hồ Chí Minh được đánh giá là một áng văn chính luận mẫu mực?",
    options: [
      "Vì sử dụng rất nhiều từ ngữ hoa mĩ và những câu chuyện cổ tích dân gian",
      "Vì có hệ thống lập luận đanh thép, lí lẽ sắc bén, bằng chứng xác thực và ngôn ngữ chuẩn xác, truyền cảm",
      "Vì tác phẩm dài hàng trăm trang phân tích lịch sử thế giới",
      "Vì thuần túy sao chép lại hiến pháp của các nước phương Tây"
    ],
    answer: 1,
    explain: "Tuyên ngôn Độc lập là đỉnh cao văn chính luận nhờ lập luận logic sắt đá, bằng chứng lịch sử không thể bác bỏ và cảm xúc cứu nước nồng nàn."
  },
  {
    id: 12,
    lesson: 6,
    q: "Chất 'thép' trong bài thơ tứ tuyệt 'Mộ' (Chiều tối) của Hồ Chí Minh được thể hiện ở:",
    options: [
      "Những khẩu hiệu tuyên truyền cách mạng quyết liệt được hô vang trực tiếp",
      "Ý chí kiên cường, ung dung tự tại, vượt lên gian khổ lao tù để tìm về niềm vui lao động và sự sống con người",
      "Vũ khí súng đạn mà người chiến sĩ mang theo trên đường đi",
      "Lời kết án gay gắt đối với bọn cai ngục giải áp"
    ],
    answer: 1,
    explain: "Chất thép của thơ Bác là tinh thần lạc quan cách mạng, làm chủ hoàn cảnh, luôn hướng về sự sống và ánh sáng."
  },
  {
    id: 13,
    lesson: 7,
    q: "Điểm khác biệt cốt lõi giữa hồi kí và nhật kí trong thể loại Kí là:",
    options: [
      "Hồi kí do người khác viết hộ, còn nhật kí bắt buộc phải xuất bản thành sách",
      "Nhật kí ghi lại sự việc ngay khi nó vừa diễn ra; hồi kí được viết sau một khoảng lùi thời gian với độ chiêm nghiệm sâu",
      "Hồi kí được phép bịa đặt nhân vật, còn nhật kí thì không",
      "Nhật kí chỉ ghi chép chuyện thời tiết và số tiền chi tiêu"
    ],
    answer: 1,
    explain: "Hồi kí có khoảng lùi thời gian giúp tác giả nhìn nhận, đánh giá lại chặng đường đời đã qua với độ chín của nhận thức."
  },
  {
    id: 14,
    lesson: 7,
    q: "Chi tiết 'băm thịt gà nhỏ như hạt ngô' trong phóng sự 'Việc làng' (Ngô Tất Tố) nhằm mục đích:",
    options: [
      "Khen ngợi tay nghề đầu bếp tài hoa của các bô lão nông thôn",
      "Mỉa mai, phê phán sự chi li, hà tiện đến quái đản sinh ra từ những luật tục hủ bại nơi chiếu đình",
      "Giới thiệu món ăn đặc sản truyền thống của vùng đồng bằng Bắc Bộ",
      "Hướng dẫn người dân nông thôn tiết kiệm thực phẩm trong lúc đói kém"
    ],
    answer: 1,
    explain: "Chi tiết đặc tả đầy tính châm biếm bóc trần sự tha hóa nhân cách vì miếng ăn danh vị hão huyền nơi làng quê cũ."
  },
  {
    id: 15,
    lesson: 8,
    q: "Khi tiếp nhận một văn bản thông tin chứa nhiều số liệu khảo sát, người đọc cần có kĩ năng:",
    options: [
      "Tin tưởng tuyệt đối mọi con số mà không cần kiểm chứng nguồn gốc",
      "Kiểm tra nguồn dữ liệu, phương pháp thu thập, tính đại diện và phân biệt giữa dữ kiện thực tế với ý kiến chủ quan",
      "Bỏ qua toàn bộ biểu đồ để chỉ đọc phần kết luận ngắn gọn",
      "Chỉ chấp nhận các số liệu do tác giả nước ngoài cung cấp"
    ],
    answer: 1,
    explain: "Tư duy phản biện đòi hỏi kiểm chứng độ tin cậy của nguồn dữ liệu và tính độc lập của phương pháp nghiên cứu."
  },
  {
    id: 16,
    lesson: 8,
    q: "Tác phẩm 'Nhiệt đới buồn' (Claude Lévi-Strauss) trong bài đọc 'Pa-ra-na' thuộc lĩnh vực khoa học nào?",
    options: [
      "Văn học viễn tưởng du hành vũ trụ",
      "Nhân học văn hóa và kí sự khảo sát xã hội học",
      "Toán học xác suất thống kê nâng cao",
      "Khoa học quân sự phòng thủ đô thị"
    ],
    answer: 1,
    explain: "Lévi-Strauss là nhà nhân học vĩ đại; đoạn trích phân tích sự hình thành và suy tàn kì lạ của các đô thị vùng Nam Mỹ."
  },
  {
    id: 17,
    lesson: 9,
    q: "Quan niệm về thời gian của Xuân Diệu trong bài thơ 'Vội vàng' khác biệt căn bản với quan niệm thời gian truyền thống ở điểm nào?",
    options: [
      "Thời gian truyền thống là tuần hoàn (mùa xuân đi rồi mùa xuân lại đến); Xuân Diệu coi thời gian là tuyến tính một đi không trở lại",
      "Xuân Diệu coi thời gian đứng yên vĩnh cửu, không bao giờ thay đổi",
      "Thời gian truyền thống ngắn ngủi, còn Xuân Diệu coi đời người là bất tử vô tận",
      "Xuân Diệu hoàn toàn không quan tâm đến sự trôi chảy của ngày tháng"
    ],
    answer: 0,
    explain: "'Lòng tôi rộng nhưng lượng trời cứ chật / Không cho dài thời trẻ của nhân gian': ý thức sâu sắc về sự hữu hạn của đời người."
  },
  {
    id: 18,
    lesson: 9,
    q: "Câu nói nổi tiếng của ông già Santiago: 'Con người không phải sinh ra để bị đánh bại. Con người có thể bị hủy diệt nhưng không thể bị đánh bại' khẳng định:",
    options: [
      "Chiến thắng tuyệt đối về sức mạnh thể chất của con người trước vũ trụ bao la",
      "Ý chí kiên cường, bản lĩnh bất khuất và phẩm giá cao quý của con người trước mọi phong ba bão táp số phận",
      "Sự ảo tưởng ngông cuồng của người ngư dân già cả",
      "Lời ngợi ca cuộc thảm sát các loài cá lớn dưới đáy đại dương"
    ],
    answer: 1,
    explain: "Đó là bản anh hùng ca ngợi ca khí phách con người: dù xác thịt có thể suy kiệt nhưng tinh thần và phẩm giá thì bất diệt."
  },
  {
    id: 19,
    lesson: 9,
    q: "Quyết định cuối cùng của Hồn Trương Ba (xin cho Cu Tị được sống, còn mình chết hẳn) thể hiện triết lí nhân sinh nào?",
    options: [
      "Sự chán chường, buông xuôi và đầu hàng trước nghịch cảnh éo le",
      "Lựa chọn dũng cảm vì lẽ sống trung thực: thà chết để tâm hồn trong sạch còn hơn sống nhờ dung tục và làm tổn thương người thân",
      "Sự nghe lời máy móc theo mệnh lệnh của Nam Tào, Bắc Đẩu",
      "Mong muốn được trở thành thần tiên bay về chốn tiên giới an nhàn"
    ],
    answer: 1,
    explain: "Trương Ba thà chịu chết để giữ vẹn toàn phẩm giá và trả lại sự bình yên, lương thiện cho gia đình."
  },
  {
    id: 20,
    lesson: 8,
    q: "Hành động ghi chú rõ ràng nguồn gốc tác giả và năm xuất bản khi trích dẫn một câu văn vào bài viết nhằm đảm bảo:",
    options: [
      "Làm cho bài viết đủ dung lượng số trang theo yêu cầu của giáo viên",
      "Tính liêm chính học thuật, tôn trọng quyền sở hữu trí tuệ và giúp người đọc dễ dàng đối chiếu, tra cứu",
      "Chứng tỏ người viết quen biết rộng rãi với nhiều nhà xuất bản lớn",
      "Tránh việc bài viết bị chấm điểm quá cao so với mặt bằng chung"
    ],
    answer: 1,
    explain: "Trích dẫn chuẩn mực là biểu hiện cao nhất của sự liêm chính học thuật và văn hóa ứng xử văn minh."
  }
];

// Compile and save dataset
const fullData = {
  unitThemes,
  unitQuizzes,
  examQuestions
};

fs.writeFileSync(
  'C:/Users/ADMIN/.gemini/antigravity/scratch/van12_interactive_data.js',
  'module.exports = ' + JSON.stringify(fullData, null, 2),
  'utf8'
);

console.log('Saved van12_interactive_data.js successfully!');
