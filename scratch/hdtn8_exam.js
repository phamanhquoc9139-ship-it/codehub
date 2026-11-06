// 20 câu hỏi Đấu trường Trạng Nguyên Hoạt Động Trải Nghiệm, Hướng Nghiệp 8 (Thời gian: 60:00)
// Bao quát trọn vẹn 9 Chủ đề: Nhà trường, Bản thân, Trách nhiệm, Rèn luyện, Gia đình, Cộng đồng, Môi trường, Nghề nghiệp.

const hdtn8Exam = [
  {
    q: "Để xây dựng và giữ gìn một tình bạn bền vững, yếu tố nào dưới đây là QUAN TRỌNG NHẤT?",
    options: [
      "(Recommended) Sự chân thành, tin cậy, tôn trọng, biết lắng nghe và cùng giúp nhau tiến bộ",
      "Phải luôn có nhiều tiền bạc và đồ dùng đắt tiền để tặng bạn",
      "Bao che mọi khuyết điểm và lỗi lầm của bạn trước thầy cô",
      "Ép buộc bạn phải luôn nghe theo mọi ý kiến và sở thích của mình"
    ],
    ans: 0,
    expl: "Tình bạn chân chính xây dựng trên nền tảng tôn trọng, tin cậy và giúp đỡ nhau cùng hoàn thiện bản thân."
  },
  {
    q: "Hành vi nào dưới đây được coi là biểu hiện của bắt nạt học đường?",
    options: [
      "(Recommended) Cố ý cô lập, đặt biệt danh xúc phạm lặp đi lặp lại hoặc lan truyền tin đồn thất thiệt",
      "Tranh luận sôi nổi về một bài toán khó trong giờ học",
      "Thẳng thắn góp ý khi bạn chưa làm bài tập về nhà",
      "Hai bạn vô tình va vào nhau trên sân trường và xin lỗi nhau"
    ],
    ans: 0,
    expl: "Bắt nạt học đường có tính chất cố ý, lặp lại và nhằm mục đích gây tổn thương tâm lí hoặc thể xác cho nạn nhân."
  },
  {
    q: "Khi chứng kiến một bạn trong trường bị bắt nạt trên mạng xã hội, hành động đúng đắn và an toàn nhất là:",
    options: [
      "(Recommended) Khuyên bạn lưu lại ảnh chụp màn hình làm bằng chứng và cùng bạn báo với thầy cô, cha mẹ",
      "Hùa theo đám đông thả cảm xúc cười cợt và bình luận xúc phạm",
      "Chia sẻ bài viết bêu xấu đó sang các nhóm khác để câu tương tác",
      "Dùng tài khoản ẩn danh để đe dọa lại nhóm bắt nạt"
    ],
    ans: 0,
    expl: "Lưu giữ bằng chứng và báo người lớn có trách nhiệm là biện pháp xử lí an toàn, văn minh và đúng pháp luật."
  },
  {
    q: "Khi gặp một cơn tức giận bộc phát do bất đồng ý kiến, bước đầu tiên trong quy trình điều chỉnh cảm xúc là:",
    options: [
      "(Recommended) Nhận ra và gọi tên cảm xúc (biết mình đang tức giận), dừng lại hít thở sâu",
      "Lập tức quát mắng để đối phương phải sợ hãi",
      "Đập phá đồ đạc xung quanh để giải tỏa cơn giận",
      "Tự làm đau bản thân để quên đi cơn tức"
    ],
    ans: 0,
    expl: "Gọi tên cảm xúc và dừng lại hít thở sâu giúp não bộ lấy lại sự bình tĩnh trước khi đưa ra phản ứng."
  },
  {
    q: "Trong một buổi tranh biện học đường, đâu là thái độ thể hiện văn hóa tranh biện văn minh?",
    options: [
      "(Recommended) Lắng nghe không ngắt lời, dùng lí lẽ logic và dẫn chứng thực tế, không công kích cá nhân",
      "Cố tình nói thật to và ngắt lời đối phương liên tục",
      "Chế giễu ngoại hình hoặc giọng nói của người có ý kiến trái chiều",
      "Bỏ ra ngoài khi người khác đang trình bày quan điểm"
    ],
    ans: 0,
    expl: "Tranh biện văn minh tập trung vào luận điểm và sự thật, tuyệt đối tôn trọng nhân phẩm của đối phương."
  },
  {
    q: "Biểu hiện nào sau đây thể hiện rõ nét nhất người sống có trách nhiệm với bản thân?",
    options: [
      "(Recommended) Tự giác hoàn thành bài tập, quản lí thời gian hợp lí và tự chăm sóc sức khỏe",
      "Luôn đợi cha mẹ nhắc nhở mới chịu ngồi vào bàn học",
      "Thức khuya chơi game triền miên và bỏ bữa sáng",
      "Đổ lỗi cho hoàn cảnh hoặc bạn bè mỗi khi bị điểm kém"
    ],
    ans: 0,
    expl: "Người có trách nhiệm với bản thân luôn chủ động trong học tập, sinh hoạt và biết chăm lo cho sức khỏe của mình."
  },
  {
    q: "Khi bị người khác rủ rê thực hiện một hành vi nguy hiểm hoặc vi phạm pháp luật, nguyên tắc từ chối an toàn là:",
    options: [
      "(Recommended) Nói 'KHÔNG' dứt khoát, nêu lí do ngắn gọn và rời khỏi tình huống nếu tiếp tục bị ép",
      "Ngập ngừng đồng ý vì sợ bạn bè chê là nhút nhát",
      "Im lặng đi theo nhưng trong lòng lo sợ",
      "Hứa hẹn sẽ tham gia vào dịp sau"
    ],
    ans: 0,
    expl: "Nói 'Không' kiên quyết và nhanh chóng rời khỏi nơi nguy hiểm là kĩ năng tự bảo vệ bản thân tối quan trọng."
  },
  {
    q: "Sự khác biệt cơ bản giữa 'Nhu cầu thực sự' (Needs) và 'Mong muốn nhất thời' (Wants) trong chi tiêu là:",
    options: [
      "(Recommended) Nhu cầu là những thứ thiết yếu cho sự sống và học tập; mong muốn là sở thích có thể hoãn lại",
      "Nhu cầu là những thứ đắt tiền; mong muốn là những thứ rẻ tiền",
      "Nhu cầu chỉ dành cho người lớn; mong muốn chỉ dành cho trẻ em",
      "Hai khái niệm này hoàn toàn giống nhau không có sự khác biệt"
    ],
    ans: 0,
    expl: "Xác định rõ nhu cầu thiết yếu giúp người tiêu dùng thông thái tránh lãng phí tiền bạc vào những sở thích bốc đồng."
  },
  {
    q: "Một bạn học sinh lập kế hoạch làm thiệp handmade bán dịp 8/3: Chi phí nguyên liệu là 120.000đ, thu được 200.000đ. Lợi nhuận là:",
    options: [
      "(Recommended) 80.000 đồng",
      "200.000 đồng",
      "120.000 đồng",
      "320.000 đồng"
    ],
    ans: 0,
    expl: "Lợi nhuận = Doanh thu (200.000đ) - Chi phí (120.000đ) = 80.000 đồng."
  },
  {
    q: "Người có tính tự chủ trên không gian mạng xã hội sẽ thể hiện hành vi nào sau đây?",
    options: [
      "(Recommended) Kiểm chứng thông tin trước khi chia sẻ, không bình luận ác ý và giới hạn thời gian lướt mạng",
      "Thấy tin tức giật gân là lập tức chia sẻ ngay dù chưa biết đúng sai",
      "Dùng tài khoản ảo để chửi bới người khác khi không vừa ý",
      "Dành toàn bộ thời gian rảnh rỗi cả ngày lẫn đêm để lướt mạng"
    ],
    ans: 0,
    expl: "Tự chủ trên mạng là làm chủ hành vi, lời nói và thời gian của mình, không để mạng xã hội điều khiển cuộc sống."
  },
  {
    q: "Khi xảy ra bất đồng quan điểm với cha mẹ về việc chọn câu lạc bộ ngoại khóa, em nên ứng xử thế nào?",
    options: [
      "(Recommended) Giữ thái độ lễ phép, chọn thời điểm thích hợp trình bày rõ nguyện vọng và lắng nghe lo lắng của cha mẹ",
      "Đóng sầm cửa phòng, tuyệt thực và không nói chuyện với cha mẹ",
      "Cãi lại to tiếng và bỏ nhà đi",
      "Nói dối cha mẹ để lén lút tham gia câu lạc bộ"
    ],
    ans: 0,
    expl: "Bày tỏ nguyện vọng bình tĩnh, lễ phép và lắng nghe giúp cha mẹ thấu hiểu và tin tưởng ủng hộ quyết định của em."
  },
  {
    q: "Hành động nào sau đây thể hiện trách nhiệm chia sẻ công việc gia đình của học sinh lớp 8?",
    options: [
      "(Recommended) Tự giác nấu cơm, rửa bát, quét dọn nhà cửa và gấp quần áo ngăn nắp",
      "Chỉ làm việc nhà khi cha mẹ hứa cho tiền thưởng",
      "Vứt quần áo và sách vở bừa bãi khắp phòng để cha mẹ dọn",
      "Nghĩ rằng việc nhà hoàn toàn là trách nhiệm của người lớn"
    ],
    ans: 0,
    expl: "Chủ động làm việc nhà đỡ đần cha mẹ thể hiện lòng hiếu thảo và rèn luyện tính tự lập."
  },
  {
    q: "Khi tham gia hoạt động chăm sóc nghĩa trang liệt sĩ hoặc thăm Mẹ Việt Nam Anh hùng, thái độ cần có là:",
    options: [
      "(Recommended) Trang nghiêm, lễ phép, ăn mặc chỉnh tề và thể hiện lòng biết ơn sâu sắc",
      "Chạy nhảy nô đùa và hò hét ầm ĩ",
      "Xem đó là một buổi đi chơi để chụp ảnh sống ảo",
      "Thờ ơ, đứng ngoài nhìn các bạn khác làm việc"
    ],
    ans: 0,
    expl: "Thái độ trang nghiêm, lễ phép thể hiện đạo lí 'Uống nước nhớ nguồn' tốt đẹp của dân tộc."
  },
  {
    q: "Nguyên tắc quan trọng nhất về mặt nhân văn khi tổ chức quyên góp quần áo thiện nguyện là gì?",
    options: [
      "(Recommended) Quần áo phải sạch sẽ, lành lặn và được trao gửi trân trọng, tôn trọng phẩm giá người nhận",
      "Chỉ cần số lượng thật nhiều, đồ rách bẩn cũng được",
      "Phải bắt người nhận đứng chụp ảnh công khai để làm truyền thông",
      "Đem đồ cũ không dùng được nữa vứt cho người nghèo"
    ],
    ans: 0,
    expl: "'Của cho không bằng cách cho', quà tặng sạch sẽ, lành lặn thể hiện tình yêu thương và sự tôn trọng người nhận."
  },
  {
    q: "Khi đi tham quan du lịch tại một danh lam thắng cảnh thiên nhiên, hành động bảo vệ môi trường thiết thực nhất là:",
    options: [
      "(Recommended) Thu gom toàn bộ rác thải của bản thân, bỏ đúng nơi quy định hoặc mang về xử lí",
      "Khắc tên và ngày sinh của mình lên vách đá để lưu niệm",
      "Bẻ cành hoa phong lan rừng mang về nhà trồng",
      "Vứt vỏ lon nước và túi bóng xuống suối"
    ],
    ans: 0,
    expl: "Không xả rác và không phá hoại cảnh quan là nguyên tắc cơ bản để bảo tồn thiên nhiên bền vững."
  },
  {
    q: "Khi nhận được thông báo sắp có bão lớn đổ bộ vào địa phương, gia đình em cần chuẩn bị gì?",
    options: [
      "(Recommended) Chằng chống nhà cửa, dự trữ nước sạch, đèn pin, lương khô, thuốc men và theo dõi hướng dẫn sơ tán",
      "Ra bờ biển hoặc bờ sông ngắm sóng lớn và gió bão",
      "Chủ quan không làm gì vì nghĩ bão sẽ không ảnh hưởng đến nhà mình",
      "Tắt hết liên lạc điện thoại với người thân"
    ],
    ans: 0,
    expl: "Chuẩn bị đầy đủ nhu yếu phẩm và biện pháp an toàn giúp giảm thiểu tối đa thiệt hại do bão lũ gây ra."
  },
  {
    q: "Một ngành nghề trong xã hội hiện đại đòi hỏi người lao động những yếu tố then chốt nào?",
    options: [
      "(Recommended) Kiến thức chuyên môn, kĩ năng nghề nghiệp, đạo đức nghề và khả năng thích ứng công nghệ",
      "Chỉ cần mối quan hệ quen biết mà không cần học tập",
      "Chỉ cần ngoại hình đẹp mà không cần kiến thức",
      "Chỉ làm việc rập khuôn không bao giờ thay đổi"
    ],
    ans: 0,
    expl: "Nghề hiện đại đòi hỏi sự kết hợp toàn diện giữa kiến thức, kĩ năng số, đạo đức và sự thích ứng linh hoạt."
  },
  {
    q: "Khái niệm 'Hứng thú nghề nghiệp' được hiểu chính xác nhất là:",
    options: [
      "(Recommended) Niềm đam mê, yêu thích tương đối bền vững đối với một lĩnh vực hoạt động nghề nghiệp cụ thể",
      "Sở thích nhất thời thay đổi theo từng ngày",
      "Sự ép buộc của cha mẹ bắt con phải theo nghề gia đình",
      "Chạy theo nghề có thu nhập cao nhất trong xã hội"
    ],
    ans: 0,
    expl: "Hứng thú nghề nghiệp là động lực nội tại bền vững giúp con người say mê học tập và gắn bó lâu dài với nghề."
  },
  {
    q: "Để chọn được nghề nghiệp phù hợp nhất cho tương lai, học sinh cần kết hợp 3 yếu tố:",
    options: [
      "(Recommended) Điều em thích (Đam mê) + Điều em giỏi (Năng lực) + Điều xã hội cần (Nhu cầu thị trường)",
      "Nghề dễ kiếm tiền + Nghề nhàn hạ + Nghề được nổi tiếng",
      "Nghề bạn bè rủ + Nghề cha mẹ thích + Nghề gần nhà",
      "Nghề có bằng cấp cao + Nghề làm sếp + Nghề không phải lao động"
    ],
    ans: 0,
    expl: "Mô hình chọn nghề khoa học (giao thoa giữa Đam mê - Năng lực - Nhu cầu xã hội) mang lại thành công bền vững."
  },
  {
    q: "Thái độ đúng đắn và văn minh nhất của học sinh đối với mọi người lao động trong xã hội là:",
    options: [
      "(Recommended) Tôn trọng, biết ơn và bình đẳng, vì mọi ngành nghề lao động chân chính đều tạo ra giá trị",
      "Chỉ tôn trọng người làm việc văn phòng, xem thường người lao động chân tay",
      "Phân biệt đối xử theo mức thu nhập của từng nghề",
      "Xem thường công việc của các cô chú lao công, quét rác"
    ],
    ans: 0,
    expl: "Mọi giọt mồ hôi lao động chân chính đều đáng trân trọng và góp phần xây dựng xã hội tốt đẹp."
  }
];

module.exports = hdtn8Exam;
