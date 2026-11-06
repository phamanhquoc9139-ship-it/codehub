// 20 câu hỏi trắc nghiệm Đấu Trường Trạng Nguyên Công Dân 8 (60:00)
// Bao quát 4 mạch kiến thức: Đạo đức, Kĩ năng sống, Kinh tế, Pháp luật

const examQuestions = [
  {
    q: "Truyền thống yêu nước của dân tộc Việt Nam được thể hiện rõ nét nhất qua hành động nào sau đây trong lịch sử?",
    options: ["Toàn dân đồng lòng đứng lên đánh đuổi giặc ngoại xâm bảo vệ non sông", "Chỉ chăm lo phát triển nông nghiệp thuần túy", "Giao thương mua bán hàng hóa với các nước phương Tây", "Tổ chức các lễ hội linh đình quanh năm"],
    ans: 0,
    expl: "Lòng yêu nước nồng nàn là truyền thống quý báu nhất, thể hiện cao độ khi Tổ quốc bị xâm lăng."
  },
  {
    q: "Câu tục ngữ nào sau đây phản ánh truyền thống đoàn kết, tương thân tương ái của người Việt?",
    options: ["Nhiễu điều phủ lấy giá gương / Người trong một nước phải thương nhau cùng", "Uống nước nhớ nguồn", "Tôn sư trọng đạo", "Học thầy không tày học bạn"],
    ans: 0,
    expl: "'Nhiễu điều phủ lấy giá gương' kêu gọi tình yêu thương, đùm bọc gắn kết giữa đồng bào."
  },
  {
    q: "Tôn trọng sự đa dạng của các dân tộc mang lại lợi ích cơ bản nào cho cộng đồng quốc tế?",
    options: ["Xây dựng mối quan hệ bình đẳng, hữu nghị, hòa bình và cùng phát triển", "Bắt buộc các dân tộc phải đồng nhất một ngôn ngữ duy nhất", "Làm mất đi nét độc đáo của từng nền văn hóa", "Tạo ra sự cạnh tranh khốc liệt giữa các quốc gia"],
    ans: 0,
    expl: "Tôn trọng sự đa dạng là nền tảng để các dân tộc đối thoại bình đẳng, duy trì hòa bình và học hỏi lẫn nhau."
  },
  {
    q: "Hành vi nào dưới đây thể hiện sự thiếu tôn trọng bản sắc văn hóa của dân tộc khác?",
    options: ["Cười nhạo, bắt chước chế giễu điệu múa truyền thống của đồng bào Chăm", "Thưởng thức và khen ngợi các món ăn dân tộc Tày", "Tìm hiểu ý nghĩa của lễ hội đâm trâu Tây Nguyên", "Mặc trang phục dân tộc Thái trong ngày hội đại đoàn kết"],
    ans: 0,
    expl: "Chế giễu điệu múa hay văn hóa truyền thống là biểu hiện của sự kì thị và thiếu văn hóa."
  },
  {
    q: "Sự kết hợp giữa cần cù và sáng tạo giúp con người đạt được điều gì trong lao động?",
    options: ["Nâng cao năng suất, chất lượng công việc và tiết kiệm thời gian, công sức", "Trở nên ỷ lại vào máy móc tự động", "Không cần phải học tập hay rèn luyện thêm nữa", "Làm việc đối phó nhanh chóng để được nghỉ"],
    ans: 0,
    expl: "Cần cù tạo nền móng kiên trì, sáng tạo giúp bứt phá hiệu quả và tiết kiệm tài nguyên."
  },
  {
    q: "Người luôn tìm tòi cách giải toán mới ngắn gọn, dễ hiểu hơn cách giải truyền thống là người có đức tính:",
    options: ["Sáng tạo trong học tập", "Bảo thủ, cố chấp", "Học vẹt, máy móc", "Cẩu thả, vội vàng"],
    ans: 0,
    expl: "Chủ động cải tiến phương pháp giải để đạt hiệu quả cao hơn chính là sáng tạo."
  },
  {
    q: "Thế nào là 'Bảo vệ lẽ phải'?",
    options: ["Công nhận, ủng hộ và tuân theo điều đúng; đồng thời phê phán điều sai trái một cách văn minh", "Bất chấp đúng sai để bảo vệ người thân của mình", "Chỉ ủng hộ người có quyền lực cao nhất", "Im lặng trước mọi hành vi gian lận"],
    ans: 0,
    expl: "Bảo vệ lẽ phải là tôn trọng sự thật khách quan và bảo vệ công bằng xã hội."
  },
  {
    q: "Khi bạn cùng bàn bị một nhóm bạn khác vu khống là lấy cắp tiền, em biết rõ sự thật bạn bị oan thì em nên làm gì?",
    options: ["Báo cáo rõ sự thật khách quan cho cô giáo chủ nhiệm để minh oan cho bạn", "Im lặng vì sợ nhóm bạn kia trả thù", "Hùa theo nhóm bạn kia để không bị cô lập", "Khuyên bạn nhận tội cho xong chuyện"],
    ans: 0,
    expl: "Dũng cảm lên tiếng báo cáo sự thật cho giáo viên là hành động bảo vệ lẽ phải và bảo vệ bạn an toàn."
  },
  {
    q: "Yếu tố nào sau đây KHÔNG thuộc về môi trường sống tự nhiên của con người?",
    options: ["Máy tính xách tay và điện thoại thông minh", "Bầu khí quyển và nguồn nước sông ngòi", "Rừng nguyên sinh và thảm thực vật", "Đất đai và hệ sinh thái biển"],
    ans: 0,
    expl: "Máy tính và điện thoại là sản phẩm nhân tạo, không phải yếu tố tự nhiên nguyên sinh."
  },
  {
    q: "Hành động nào dưới đây vi phạm nghiêm trọng Luật Bảo vệ môi trường?",
    options: ["Chôn lấp trộm chất thải nguy hại chưa qua xử lí xuống lòng đất", "Trồng thêm cây hoa giấy trước cổng nhà", "Tái sử dụng túi nilon sạch để đựng đồ", "Tham gia chiến dịch làm sạch bãi biển"],
    ans: 0,
    expl: "Xả thải hoặc chôn lấp trộm chất thải độc hại là hành vi vi phạm pháp luật hình sự về môi trường."
  },
  {
    q: "Trong mô hình SMART, chữ cái 'A' (Attainable) có ý nghĩa là gì?",
    options: ["Mục tiêu phải có tính khả thi, phù hợp năng lực và điều kiện thực tế", "Mục tiêu phải vĩ đại nhất trường", "Mục tiêu phải bí mật không cho ai biết", "Mục tiêu chỉ cần thực hiện trong 1 ngày"],
    ans: 0,
    expl: "Attainable: Mục tiêu phải vừa sức, có thể đạt được qua nỗ lực thực tế, không viển vông."
  },
  {
    q: "Để thực hiện mục tiêu 'Đọc xong 5 cuốn sách văn học trong kì nghỉ hè', bước quan trọng nhất là:",
    options: ["Lập kế hoạch chia nhỏ số trang cần đọc mỗi ngày (ví dụ 15 trang/ngày) và kiên trì thực hiện", "Mua thật nhiều sách về để trên bàn rồi đi chơi", "Đợi đến ngày cuối cùng của kì nghỉ hè mới đọc", "Đọc lướt qua mục lục rồi coi như đã xong"],
    ans: 0,
    expl: "Chia nhỏ mục tiêu lớn thành hành động cụ thể mỗi ngày giúp duy trì động lực và hoàn thành dễ dàng."
  },
  {
    q: "Hành vi người chồng ngăn cấm vợ không cho đi làm, giữ toàn bộ giấy tờ tùy thân và kiểm soát tuyệt đối chi tiêu là dạng bạo lực gia đình nào?",
    options: ["Bạo lực kinh tế", "Bạo lực thể chất", "Bạo lực học đường", "Bạo lực công nghệ"],
    ans: 0,
    expl: "Kiểm soát tài chính, tước đoạt cơ hội việc làm và ép phụ thuộc kinh tế là bạo lực kinh tế."
  },
  {
    q: "Khi chứng kiến một đứa trẻ trong xóm thường xuyên bị cha mẹ đánh đập tàn nhẫn, em nên gọi đến tổng đài nào?",
    options: ["Tổng đài Quốc gia Bảo vệ Trẻ em 111", "Tổng đài 115", "Tổng đài 1080", "Tổng đài 114"],
    ans: 0,
    expl: "Tổng đài 111 là đường dây nóng chuyên trách tiếp nhận và xử lí các vụ việc bạo hành trẻ em."
  },
  {
    q: "Khoản chi tiêu nào sau đây thuộc nhóm 'Mong muốn' (Wants) mà học sinh có thể cắt giảm khi cần tiết kiệm?",
    options: ["Trà sữa và đồ ăn vặt ngoài cổng trường", "Bữa ăn trưa tại căng tin trường học", "Sách giáo khoa môn Toán và Văn", "Tiền đóng học phí bắt buộc"],
    ans: 0,
    expl: "Trà sữa, đồ ăn vặt là sở thích cá nhân, hoàn toàn có thể cắt giảm để tiết kiệm tiền."
  },
  {
    q: "Lợi ích then chốt của việc ghi chép nhật kí chi tiêu hằng ngày là gì?",
    options: ["Biết rõ dòng tiền đã đi đâu, nhận diện khoản chi lãng phí để điều chỉnh kịp thời", "Để khoe với bạn bè rằng mình tiêu nhiều tiền", "Làm cho sổ tay dày hơn", "Để không phải mua đồ ăn nữa"],
    ans: 0,
    expl: "Theo dõi thu chi giúp phát hiện các 'lỗ rò rỉ tài chính' và rèn luyện thói quen kiểm soát tiền bạc."
  },
  {
    q: "Khi phát hiện đám cháy xảy ra trong tòa nhà cao tầng, điều tuyệt đối KHÔNG ĐƯỢC LÀM là:",
    options: ["Sử dụng thang máy để thoát hiểm", "Dùng khăn ướt bịt mũi miệng cúi thấp người", "Men theo thang bộ thoát hiểm có đèn exit", "Hô hoán báo động và gọi số 114"],
    ans: 0,
    expl: "Tuyệt đối không đi thang máy khi hỏa hoạn vì nguồn điện có thể bị cắt bất ngờ khiến người mắc kẹt bị ngạt khói."
  },
  {
    q: "Hành vi nào dưới đây tiềm ẩn nguy cơ cao gây ra tai nạn nổ và nhiễm độc hóa chất?",
    options: ["Thu gom pin cũ đã qua sử dụng và vứt chung vào bếp củi đang cháy", "Đem pin cũ đến điểm thu gom rác thải nguy hại", "Bảo quản bình gas nơi thông thoáng xa nguồn nhiệt", "Đọc kĩ nhãn cảnh báo hóa chất trước khi làm thí nghiệm"],
    ans: 0,
    expl: "Pin cũ ném vào lửa sẽ bị nổ tung và phát tán kim loại nặng (chì, thủy ngân) cực kì nguy hiểm."
  },
  {
    q: "Theo quy định pháp luật, người lao động từ đủ 15 tuổi đến dưới 18 tuổi có thời giờ làm việc tối đa là:",
    options: ["Không quá 8 giờ trong 1 ngày và 40 giờ trong 1 tuần", "Không quá 12 giờ trong 1 ngày", "Không quá 4 giờ trong 1 ngày", "Làm việc tự do không giới hạn thời gian"],
    ans: 0,
    expl: "Bộ luật Lao động quy định người từ 15 đến dưới 18 tuổi làm việc không quá 8 giờ/ngày và 40 giờ/tuần."
  },
  {
    q: "Công dân có 'Quyền lao động' nghĩa là:",
    options: ["Tự do lựa chọn nghề nghiệp, nơi làm việc hợp pháp và hưởng thù lao xứng đáng theo thỏa thuận", "Bắt buộc người khác phải thuê mình làm việc với mức lương cao", "Được quyền bỏ việc bất kì lúc nào mà không cần bàn giao", "Không phải chấp hành bất kì nội quy an toàn nào"],
    ans: 0,
    expl: "Quyền lao động là quyền tự do lựa chọn việc làm, nghề nghiệp, nơi làm việc và được hưởng quyền lợi hợp pháp."
  }
];

module.exports = { examQuestions };
