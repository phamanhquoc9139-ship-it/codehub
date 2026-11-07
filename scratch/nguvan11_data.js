// scratch/nguvan11_data.js
// Tổng hợp dữ liệu toàn bộ môn Ngữ văn 11 - Kết nối tri thức với cuộc sống
const tap1_lessons = require('./nguvan11_data_tap1.js');
const { tap2_lessons, skillsFramework, digitalContentSuggestions } = require('./nguvan11_data_tap2.js');

const volumes = [
  {
    volNum: 1,
    title: "TẬP MỘT — NỀN TẢNG TỰ SỰ, TRỮ TÌNH & BI KỊCH",
    shortTitle: "Tập Một (Bài 1 - 5)",
    icon: "fa-book-open",
    lessons: [1, 2, 3, 4, 5]
  },
  {
    volNum: 2,
    title: "TẬP HAI — TIẾP BIẾN VĂN HÓA, KÍ, THÔNG TIN & HÀNH ĐỘNG",
    shortTitle: "Tập Hai (Bài 6 - 9)",
    icon: "fa-feather-pointed",
    lessons: [6, 7, 8, 9]
  }
];

const lessons = {};
for (let i = 1; i <= 5; i++) {
  lessons[i] = tap1_lessons[i];
}
for (let i = 6; i <= 9; i++) {
  lessons[i] = tap2_lessons[i];
}

// 20 câu hỏi Đấu trường trắc nghiệm 45 phút bao quát 9 bài
const examQuestions = [
  {
    id: 1,
    lessonNum: 1,
    q: "Điểm nhìn trần thuật (Point of view) trong tác phẩm truyện có vai trò cốt lõi nào?",
    options: [
      "A. Giúp người đọc xác định được độ dài của tác phẩm",
      "B. Là vị trí, góc độ, lăng kính ý thức mà từ đó người kể chuyện/nhân vật quan sát, cảm nhận và đánh giá sự việc, con người",
      "C. Là địa điểm cụ thể diễn ra các sự việc trong cốt truyện",
      "D. Là số lượng từ ngữ đối thoại giữa các nhân vật"
    ],
    answer: 1,
    explain: "Điểm nhìn định hình cách thế giới nghệ thuật hiện lên trong tâm trí người đọc qua lăng kính của người kể chuyện hoặc nhân vật."
  },
  {
    id: 2,
    lessonNum: 1,
    q: "Tình huống 'nhặt vợ' của anh cu Tràng trong tác phẩm 'Vợ nhặt' (Kim Lân) mang ý nghĩa nghệ thuật sâu sắc nào?",
    options: [
      "A. Phản ánh thói hư tật xấu của người nông dân nghèo",
      "B. Tạo tình huống kì quái để câu khách giật gân",
      "C. Tình huống độc đáo, éo le làm nổi bật khát vọng sống mãnh liệt, tình yêu thương và niềm tin vào tương lai giữa ranh giới sống chết của nạn đói",
      "D. Ca ngợi hủ tục thách cưới thời phong kiến"
    ],
    answer: 2,
    explain: "Giữa nạn đói khủng khiếp, hành động nhặt vợ không phải là sự liều lĩnh mù quáng mà là biểu hiện của khát vọng tổ ấm và sức sống bất diệt."
  },
  {
    id: 3,
    lessonNum: 1,
    q: "Tiếng chửi mở đầu tác phẩm 'Chí Phèo' của Nam Cao thể hiện bi kịch gì của nhân vật?",
    options: [
      "A. Bi kịch say rượu càn quấy mất trí",
      "B. Bi kịch bị tước đoạt quyền giao tiếp bình đẳng với con người và xã hội làng Vũ Đại",
      "C. Bi kịch thiếu tiền tiêu xài",
      "D. Bi kịch bị thua kiện ngoài đình làng"
    ],
    answer: 1,
    explain: "Chí Phèo chửi trời, chửi đời, chửi làng Vũ Đại nhằm gây sự chú ý để được lắng nghe, nhưng đáp lại chỉ là sự im lặng tàn nhẫn của cả làng."
  },
  {
    id: 4,
    lessonNum: 2,
    q: "Cấu tứ trong một bài thơ trữ tình được hiểu là gì?",
    options: [
      "A. Số lượng khổ thơ và số lượng dòng thơ",
      "B. Cách thức gieo vần chân hoặc vần lưng",
      "C. Quá trình hình dung, tổ chức và triển khai hướng phát triển của hình tượng, mạch cảm xúc và tư tưởng để bài thơ thành một chỉnh thể nghệ thuật",
      "D. Tên gọi của các biện pháp tu từ so sánh, nhân hóa"
    ],
    answer: 2,
    explain: "Cấu tứ là linh hồn tổ chức, là trục xương sống dẫn dắt dòng cảm xúc và hệ thống hình ảnh của bài thơ."
  },
  {
    id: 5,
    lessonNum: 2,
    q: "Nỗi buồn 'Tràng giang' của Huy Cận phản ánh tâm sự gì của thế hệ thanh niên trí thức Thơ Mới trước năm 1945?",
    options: [
      "A. Nỗi sợ hãi trước sóng to gió lớn của sông Hồng",
      "B. Nỗi 'sầu vạn kỉ' trước vũ trụ hoang sơ vô định, bộc lộ nỗi cô đơn của cái tôi và lòng yêu nước thầm kín thiết tha",
      "C. Sự thất vọng về tình yêu lứa đôi",
      "D. Sự tiếc nuối thời kì phong kiến vàng son đã qua"
    ],
    answer: 1,
    explain: "Nỗi buồn Tràng giang vừa là nỗi sầu nhân thế trước không gian vô tận, vừa là nỗi buồn mất nước ẩn kín: 'Không khói hoàng hôn cũng nhớ nhà'."
  },
  {
    id: 6,
    lessonNum: 2,
    q: "Trong bài thơ 'Thời gian' của Văn Cao, hình ảnh nào tượng trưng cho những giá trị tinh thần bất diệt vượt qua sự tàn phá của thời gian?",
    options: [
      "A. Những chiếc lá khô rơi rụng",
      "B. Tiếng sấm đầu mùa hè",
      "C. Những câu thơ, bài hát và đôi mắt em đầy tình yêu thương",
      "D. Giọt nước mắt của người già"
    ],
    answer: 2,
    explain: "Văn Cao khẳng định nghệ thuật chân chính và tình yêu là hai giá trị duy nhất không bị bánh xe thời gian làm cho tàn phai."
  },
  {
    id: 7,
    lessonNum: 3,
    q: "Văn bản 'Cầu hiền chiếu' do Ngô Thì Nhậm viết thay vua Quang Trung sử dụng hệ thống lập luận như thế nào để thuyết phục sĩ phu Bắc Hà?",
    options: [
      "A. Dùng uy quyền quân sự để đe dọa xử tử những kẻ không chịu ra làm quan",
      "B. Kết hợp quy luật tự nhiên (hiền tài như sao sáng) với tấm lòng khiêm nhường, chân thành của bậc minh quân sẵn sàng tha thứ tị hiềm cũ",
      "C. Hứa hẹn ban phát nhiều vàng bạc và ruộng đất phì nhiêu",
      "D. Bắt buộc mỗi làng phải cử ra 5 người đi thi"
    ],
    answer: 1,
    explain: "Văn bản đánh trúng tâm lí sĩ phu bằng lí lẽ hợp lẽ trời, hợp lòng người và tấm lòng chân thành tha thiết của vua Quang Trung."
  },
  {
    id: 8,
    lessonNum: 3,
    q: "Trong bài diễn văn 'Tôi có một ước mơ', Martin Luther King Jr. chủ trương phương pháp đấu tranh nào cho người Mỹ da màu?",
    options: [
      "A. Đấu tranh vũ trang bạo lực lật đổ chính quyền",
      "B. Tuyệt thực tập thể kéo dài vô thời hạn",
      "C. Kiên định đấu tranh bất bạo động, dùng phẩm giá và sức mạnh tinh thần để đòi quyền bình đẳng công lí",
      "D. Rời bỏ nước Mỹ di cư sang châu lục khác"
    ],
    answer: 2,
    explain: "Martin Luther King kiên quyết phản đối bạo lực hận thù, kêu gọi đấu tranh ôn hòa bất bạo động dựa trên công lí và tình yêu thương."
  },
  {
    id: 9,
    lessonNum: 4,
    q: "Yếu tố tự sự trong thơ trữ tình có vai trò nghệ thuật nào sau đây?",
    options: [
      "A. Biến bài thơ thành một cuốn tiểu thuyết chương hồi",
      "B. Làm điểm tựa khách quan, tạo hoàn cảnh cụ thể để chủ thể trữ tình bộc lộ cảm xúc, suy tưởng và triết lí nhân sinh",
      "C. Thay thế hoàn toàn yếu tố vần điệu và nhạc điệu của thơ",
      "D. Khiến cho bài thơ không còn chất thơ"
    ],
    answer: 1,
    explain: "Yếu tố tự sự (kể việc, tả người) làm cái cớ, làm bệ đỡ cho dòng cảm xúc trữ tình được bộc lộ sâu sắc và thuyết phục hơn."
  },
  {
    id: 10,
    lessonNum: 4,
    q: "Trong đoạn trích 'Lời tiễn dặn' (truyện thơ dân tộc Thái), chi tiết nào khẳng định tình yêu bất diệt vượt qua cái chết của đôi lứa?",
    options: [
      "A. Chàng trai mua tặng cô gái nhiều váy áo thổ cẩm",
      "B. Lời thề: Chết thành tro bụi vẫn quyện chặt vào nhau, chết thành sông nước cùng chảy chung một dòng",
      "C. Chàng trai tiễn cô gái đến tận bậc cầu thang nhà chồng",
      "D. Đôi bên cùng hứa sẽ không bao giờ gặp lại"
    ],
    answer: 1,
    explain: "Lời thề nguyền son sắt vượt qua ranh giới của sự sống và cái chết là biểu tượng tuyệt đẹp cho khát vọng tình yêu tự do của người Thái."
  },
  {
    id: 11,
    lessonNum: 5,
    q: "Khái niệm 'Catharsis' (Sự thanh lọc tâm hồn) trong thể loại bi kịch có ý nghĩa gì?",
    options: [
      "A. Sự thỏa mãn khi thấy kẻ xấu bị trừng trị",
      "B. Sự bừng tỉnh nhận thức, niềm xót thương và cảm xúc thẩm mĩ cao thượng được đánh thức sau khi chứng kiến bi kịch cao cả của nhân vật",
      "C. Tiếng cười sảng khoái chế giễu nhân vật",
      "D. Sự chán nản tuyệt vọng đối với cuộc sống"
    ],
    answer: 1,
    explain: "Thanh lọc (Catharsis) là hiệu ứng thẩm mĩ độc đáo của bi kịch: nỗi đau bi tráng nâng đỡ tâm hồn con người hướng thiện và cao cả hơn."
  },
  {
    id: 12,
    lessonNum: 5,
    q: "Trong hồi kết 'Vĩnh biệt Cửu Trùng Đài' (Vũ Như Tô), bi kịch của kiến trúc sư tài ba Vũ Như Tô bắt nguồn từ sai lầm nào?",
    options: [
      "A. Tay nghề thiết kế non kém làm đổ công trình",
      "B. Tham lam tiền bạc bòn rút ngân khố triều đình",
      "C. Đam mê nghệ thuật thuần túy viển vông, tách rời nghệ thuật khỏi lợi ích sống còn và nỗi đau khổ của nhân dân lao động",
      "D. Âm mưu nổi loạn cướp ngai vàng"
    ],
    answer: 2,
    explain: "Vũ Như Tô lầm lạc khi tưởng rằng có thể mượn tay bạo chúa xây dựng cái Đẹp mà không đếm xỉa đến mồ hôi nước mắt của đồng bào."
  },
  {
    id: 13,
    lessonNum: 6,
    q: "Hiện tượng 'tiếp biến văn hóa' trong sáng tạo tác phẩm 'Truyện Kiều' của đại thi hào Nguyễn Du thể hiện rõ nhất ở điểm nào?",
    options: [
      "A. Sao chép y nguyên từng câu chữ của cuốn tiểu thuyết Kim Vân Kiều truyện",
      "B. Tiếp nhận cốt truyện từ Trung Hoa nhưng tái tạo thành kiệt tác truyện thơ Nôm lục bát mang đậm linh hồn, ngôn ngữ và chiều sâu nhân đạo Việt Nam",
      "C. Chỉ thay đổi tên các nhân vật trong truyện",
      "D. Viết hoàn toàn bằng chữ Hán cổ điển"
    ],
    answer: 1,
    explain: "Nguyễn Du đã 'Việt hóa' xuất sắc cuốn tiểu thuyết tài tử giai nhân của Thanh Tâm Tài Nhân thành một khúc đoạn trường lay động hàng triệu trái tim."
  },
  {
    id: 14,
    lessonNum: 6,
    q: "Trong đoạn trích 'Trao duyên' (Truyện Kiều), câu thơ 'Duyên này thì giữ, vật này của chung' thể hiện tâm trạng gì của Thúy Kiều?",
    options: [
      "A. Sự thanh thản nhẹ nhõm vì đã trút bỏ được gánh nặng tình cảm",
      "B. Sự giằng xé nội tâm xót xa tột cùng: trao duyên cho em nhưng kỉ vật thiêng liêng vẫn muốn giữ lại một phần ký ức của tình yêu đầu đời",
      "C. Sự tiếc nuối giá trị vật chất của những kỉ vật đắt tiền",
      "D. Sự tức giận oán hận Thúy Vân"
    ],
    answer: 1,
    explain: "Từ 'của chung' nghẹn ngào chứa đựng nỗi đau đớn giằng xé: duyên thì đã trao cho em, nhưng kỉ vật tình yêu thì vẫn là máu thịt của đời Kiều."
  },
  {
    id: 15,
    lessonNum: 7,
    q: "Trong thiên bút kí 'Ai đã đặt tên cho dòng sông?', nét tài hoa và cái tôi của Hoàng Phủ Ngọc Tường thể hiện nổi bật qua góc nhìn nào?",
    options: [
      "A. Chỉ tập trung mô tả giá trị kinh tế đánh bắt thủy sản trên sông Hương",
      "B. Khám phá sông Hương dưới nhiều góc độ: Địa lí thẩm mĩ, Lịch sử oai hùng và Văn hóa thơ ca với vốn hiểu biết uyên bác và ngôn từ trữ tình mê đắm",
      "C. Đo đạc độ sâu và lưu lượng dòng chảy khoa học khô khan",
      "D. Phê phán tình trạng ô nhiễm môi trường nước"
    ],
    answer: 1,
    explain: "Hoàng Phủ Ngọc Tường gắn bó máu thịt với Huế, biến sông Hương thành một sinh thể có tâm hồn, vừa là người tình dịu dàng vừa là nhân chứng lịch sử hào hùng."
  },
  {
    id: 16,
    lessonNum: 7,
    q: "Tác phẩm kí tư liệu 'Và tôi vẫn muốn mẹ...' của Svetlana Alexievich ghi lại hiện thực chiến tranh qua lời kể của đối tượng nào?",
    options: [
      "A. Các tướng lĩnh quân đội chỉ huy mặt trận",
      "B. Những đứa trẻ thơ mồ côi từng trải qua thảm họa Chiến tranh Vệ quốc",
      "C. Các nhà sử học nghiên cứu chiến lược",
      "D. Những nhà buôn vũ khí quốc tế"
    ],
    answer: 1,
    explain: "Bà thu thập và tái hiện lời chứng chân thực đầy đau xót của những đứa trẻ thời chiến, mang lại sức rung động nhân văn mãnh liệt."
  },
  {
    id: 17,
    lessonNum: 8,
    q: "Trong cấu trúc của văn bản thông tin, việc sử dụng các phương tiện phi ngôn ngữ (infographic, đồ thị, sơ đồ) cần tuân thủ quy tắc nào?",
    options: [
      "A. Chèn càng nhiều hình ảnh màu mè càng tốt bất kể nội dung",
      "B. Phải gắn liền trực tiếp với dữ liệu văn bản, ghi rõ nguồn trích dẫn, chú thích đơn vị đo và bảo đảm tính trung thực khách quan",
      "C. Được phép chỉnh sửa số liệu cho đẹp mắt",
      "D. Không cần ghi tên hay chú thích bảng biểu"
    ],
    answer: 1,
    explain: "Phương tiện phi ngôn ngữ trong văn bản thông tin phải có tính chính xác, khoa học và minh chứng trực quan cho thông tin truyền tải."
  },
  {
    id: 18,
    lessonNum: 8,
    q: "Ý nghĩa cao cả của Đại hội thể thao người khuyết tật (Paralympic) được khẳng định trong bài viết của Huy Đăng là gì?",
    options: [
      "A. Thể hiện công nghệ chế tạo chân tay giả đắt tiền",
      "B. Là lịch sử của sự kiên cường chữa lành vết thương thể xác và tâm hồn, tôn vinh nghị lực phi thường và phẩm giá con người",
      "C. Kiếm nguồn thu quảng cáo cho các hãng thể thao",
      "D. Thử nghiệm các loại thuốc giảm đau mới"
    ],
    answer: 1,
    explain: "Paralympic là biểu tượng của tinh thần bất khuất vượt lên nghịch cảnh, khẳng định quyền được hòa nhập và tỏa sáng của người khuyết tật."
  },
  {
    id: 19,
    lessonNum: 9,
    q: "Trong 'Bài ca ngất ngưởng', từ 'Ngất ngưởng' của Nguyễn Công Trứ mang hàm nghĩa tích cực nào về nhân sinh quan?",
    options: [
      "A. Thái độ say xỉn nghiêng ngả mất thăng bằng",
      "B. Bản lĩnh sống tự tin, tự tại, vượt lên trên định kiến thế tục hẹp hòi trên cơ sở tài năng lỗi lạc và tấm lòng tận trung vì nước vì dân",
      "C. Sự tự kiêu coi thường mạng sống người khác",
      "D. Thói lười biếng trốn tránh nghĩa vụ"
    ],
    answer: 1,
    explain: "Ngất ngưởng là phong cách sống của bậc tài danh: dám sống khác biệt, ngạo nghễ với đời vì đã cống hiến trọn vẹn cho giang sơn xã tắc."
  },
  {
    id: 20,
    lessonNum: 9,
    q: "Hình tượng người nông dân nghĩa sĩ trong 'Văn tế nghĩa sĩ Cần Giuộc' của Nguyễn Đình Chiểu được khắc họa với tư thế nào khi giặc Pháp xâm lược?",
    options: [
      "A. Khiếp sợ đầu hàng nộp vũ khí",
      "B. Chờ đợi mệnh lệnh chính thức từ triều đình Huế mới dám hành động",
      "C. Tự nguyện dấn thân vì nghĩa lớn, 'mến đạo nghĩa làm quân chiêu mộ', chiến đấu quả cảm dù chỉ có manh áo vải và ngọn tầm vông",
      "D. Bỏ chạy vào rừng sâu trốn tránh chiến trận"
    ],
    answer: 2,
    explain: "Họ là những người anh hùng chân đất xả thân vì quê hương đất nước khi triều đình còn do dự, tạo nên tượng đài tráng lệ nhất của văn học trung đại."
  }
];

module.exports = {
  volumes,
  lessons,
  skillsFramework,
  digitalContentSuggestions,
  examQuestions
};
