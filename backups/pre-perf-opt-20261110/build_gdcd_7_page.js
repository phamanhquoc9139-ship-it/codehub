const fs = require('fs');
const path = require('path');

console.log("Generating Giao Duc Cong Dan Lop 7 (GDCD 7)...");

// 10 Lessons Data based on the user's provided structure
const lessonsData = [
  {
    num: 1,
    id: "bai-1",
    mach: "Mạch 1: Giáo dục đạo đức",
    machTag: "Đạo đức",
    machColor: "blue",
    title: "Tự hào về truyền thống quê hương",
    subtitle: "Giữ gìn và phát huy các giá trị văn hóa, lịch sử và nghề truyền thống của quê hương",
    svgNodes: [
      { title: "KHÁI NIỆM", desc: "Giá trị văn hóa, lịch sử, đạo đức, vật chất qua nhiều thế hệ", color: "#2563eb" },
      { title: "TRUYỀN THỐNG TIÊU BIỂU", desc: "Yêu nước, cần cù, lễ hội, nghệ thuật, làng nghề, ẩm thực", color: "#4f46e5" },
      { title: "TRÁCH NHIỆM", desc: "Tìm hiểu, bảo tồn, quảng bá và phê phán hành vi làm sai lệch", color: "#059669" }
    ],
    contentSections: [
      {
        title: "1. Khái niệm truyền thống quê hương",
        icon: "fa-book-bookmark",
        text: "Truyền thống quê hương là những giá trị văn hoá, lịch sử, đạo đức, tinh thần cao quý, tốt đẹp và những giá trị vật chất, kĩ năng nghề được truyền qua nhiều thế hệ sinh sống ở một địa phương, vùng đất nhất định."
      },
      {
        title: "2. Một số truyền thống tiêu biểu của quê hương",
        icon: "fa-award",
        items: [
          "<strong>Truyền thống yêu nước, chống giặc ngoại xâm:</strong> Tinh thần kiên cường bất khuất, đoàn kết chống thiên tai, địch họa.",
          "<strong>Truyền thống cần cù lao động:</strong> Sáng tạo, bền bỉ, chịu thương chịu khó trong sản xuất nông nghiệp và đời sống.",
          "<strong>Truyền thống văn hóa lễ hội:</strong> Lễ hội đền Hùng, lễ hội Lim, lễ hội Tịch điền, hội Gióng, lễ hội Chùa Hương...",
          "<strong>Nghệ thuật biểu diễn dân gian:</strong> Dân ca quan họ Bắc Ninh, hát Xoan Phú Thọ, Đờn ca tài tử Nam Bộ, múa Chăm, cồng chiêng Tây Nguyên...",
          "<strong>Nghề thủ công truyền thống:</strong> Gốm Bát Tràng, lụa Vạn Phúc, thêu thùa ren ren, đan lát mây tre, đúc đồng Đại Bái...",
          "<strong>Văn hóa ẩm thực đặc sắc:</strong> Phở Hà Nội, mì Quảng, bún bò Huế, bánh đậu xanh Hải Dương..."
        ]
      },
      {
        title: "3. Ý nghĩa của truyền thống quê hương",
        icon: "fa-heart",
        text: "Truyền thống quê hương là nguồn gốc, nền tảng xây dựng giá trị cốt lõi, niềm tự hào và sự tự tin của mỗi người; góp phần hình thành nhân cách và lối sống tốt đẹp; là động lực tinh thần to lớn để con người phấn đấu xây dựng quê hương, đất nước giàu mạnh."
      },
      {
        title: "4. Trách nhiệm của học sinh",
        icon: "fa-user-check",
        items: [
          "Tích cực tìm hiểu truyền thống qua gia đình, nghệ nhân, nhân chứng lịch sử và tài liệu văn hóa địa phương.",
          "Tham gia và hỗ trợ bảo tồn, phát huy các lễ hội, sinh hoạt văn hoá, làng nghề truyền thống.",
          "Giới thiệu, quảng bá vẻ đẹp văn hóa, ẩm thực quê hương với bạn bè trong nước và quốc tế.",
          "Kiên quyết phê phán, đấu tranh chống những hành vi làm tổn hại, mai một hoặc xuyên tạc, sai lệch truyền thống quê hương."
        ]
      }
    ],
    situation: {
      title: "Tình huống rèn luyện kĩ năng",
      desc: "Xã của bạn Nam có nghề đan mây tre truyền thống rất nổi tiếng. Tuy nhiên, một số thanh niên cho rằng nghề này vất vả, thu nhập thấp nên không muốn theo học mà chỉ thích lên thành phố. Nam muốn làm một video ngắn đăng mạng xã hội để giới thiệu nét tinh xảo của sản phẩm quê mình nhưng ngần ngại không biết có ai xem không.",
      solution: "Gợi ý xử lý: Nam nên tự tin thực hiện video. Việc lan tỏa nét đẹp nghề mây tre đan trên mạng xã hội là hành động thiết thực giúp quảng bá sản phẩm địa phương đến với công chúng, đồng thời khơi dậy niềm tự hào truyền thống quê hương cho thế hệ trẻ."
    },
    quizzes: [
      {
        q: "Giá trị nào sau đây KHÔNG thuộc về truyền thống quê hương?",
        opts: ["Tập tục mê tín dị đoan, hủ tục lạc hậu", "Nghệ thuật dân ca quan họ truyền thống", "Làng nghề làm gốm sứ lâu đời", "Tinh thần đoàn kết chống thiên tai lụt bão"],
        ans: 0,
        explain: "Các hủ tục lạc hậu, mê tín dị đoan là tàn dư tiêu cực cần loại bỏ, không phải là giá trị truyền thống tốt đẹp của quê hương."
      },
      {
        q: "Học sinh thể hiện lòng tự hào về truyền thống quê hương bằng hành vi nào sau đây?",
        opts: ["Tích cực tìm hiểu và quảng bá sản phẩm làng nghề quê hương", "Chê bai các món ăn và trang phục truyền thống của địa phương", "Không quan tâm đến lịch sử các danh nhân quê mình", "Cho rằng chỉ có văn hóa nước ngoài mới hiện đại"],
        ans: 0,
        explain: "Tìm hiểu và quảng bá nét đẹp truyền thống của địa phương là việc làm thiết thực của học sinh."
      }
    ]
  },
  {
    num: 2,
    id: "bai-2",
    mach: "Mạch 1: Giáo dục đạo đức",
    machTag: "Đạo đức",
    machColor: "blue",
    title: "Quan tâm, cảm thông và chia sẻ",
    subtitle: "Thấu hiểu, đồng cảm và sẵn sàng sẻ chia giúp đỡ mọi người xung quanh",
    svgNodes: [
      { title: "BIỂU HIỆN", desc: "Lắng nghe, thăm hỏi, an ủi, giúp đỡ vật chất và tinh thần", color: "#2563eb" },
      { title: "Ý NGHĨA", desc: "Tăng sức mạnh vượt khó, cuộc sống ấm áp, gắn kết xã hội", color: "#4f46e5" },
      { title: "HÀNH ĐỘNG", desc: "Động viên việc tốt, kiên quyết phê phán thói vô cảm, ích kỉ", color: "#059669" }
    ],
    contentSections: [
      {
        title: "1. Khái niệm và Biểu hiện của quan tâm, cảm thông và chia sẻ",
        icon: "fa-hands-holding-heart",
        text: "Quan tâm là thường xuyên chú ý đến người khác và mọi việc xung quanh. Cảm thông là đặt mình vào vị trí của người khác để thấu hiểu nỗi niềm, suy nghĩ của họ. Chia sẻ là cùng sẻ chia về vật chất hoặc tinh thần với người khác khi họ gặp niềm vui hay nỗi buồn.",
        items: [
          "Lắng nghe chân thành, gọi điện, nhắn tin thăm hỏi, động viên bạn bè, người thân khi ốm đau, buồn rầu.",
          "Chủ động giúp đỡ, nhường nhịn, tương trợ về vật chất (sách vở, quần áo, quyên góp cứu trợ) và tinh thần đối với người nghèo khó, hoạn nạn.",
          "Cổ vũ, khích lệ và đồng hành cùng mọi người thực hiện các việc thiện nguyện tốt đẹp.",
          "Lên án, phê phán thái độ ích kỉ, thói vô cảm, thờ ơ trước khó khăn, nỗi đau của đồng loại."
        ]
      },
      {
        title: "2. Ý nghĩa to lớn trong đời sống",
        icon: "fa-sun",
        text: "Quan tâm, cảm thông và chia sẻ giúp người gặp khó khăn có thêm niềm tin, nghị lực và sức mạnh để vươn lên trong cuộc sống; sưởi ấm tâm hồn, làm cho cuộc sống gia đình và xã hội trở nên chan hòa, tràn đầy tình người; giúp các mối quan hệ xã hội trở nên gắn bó, tin cậy và bền vững hơn."
      },
      {
        title: "3. Rèn luyện của học sinh",
        icon: "fa-lightbulb",
        items: [
          "Quan sát tinh tế để nhận biết bạn bè, người xung quanh đang gặp chuyện buồn hoặc khó khăn.",
          "Sẵn sàng chia sẻ dụng cụ học tập, hướng dẫn bạn học tập khi bạn chưa hiểu bài.",
          "Tích cực tham gia các phong trào 'Nuôi heo đất', 'Kế hoạch nhỏ', 'Ủng hộ đồng bào vùng lũ lụt'...",
          "Tôn trọng sự khác biệt, không trêu chọc hay phân biệt đối xử với người có hoàn cảnh éo le, khuyết tật."
        ]
      }
    ],
    situation: {
      title: "Tình huống ứng xử thực tế",
      desc: "Gia đình bạn Hoa bị hỏa hoạn cháy mất một phần nhà và toàn bộ sách vở, đồ dùng học tập. Một số bạn trong lớp đứng xem và bàn tán xôn xao nhưng không có hành động cụ thể. Lan thấy vậy đã chủ động báo cáo với giáo viên chủ nhiệm và phát động lớp cùng quyên góp sách vở để giúp Hoa sớm trở lại trường.",
      solution: "Đánh giá: Hành động của Lan thể hiện rõ sự quan tâm, cảm thông sâu sắc và tinh thần tương thân tương ái. Việc kịp thời chia sẻ cả về vật chất lẫn tinh thần giúp Hoa vượt qua cú sốc và không bị gián đoạn việc học."
    },
    quizzes: [
      {
        q: "Hành vi nào sau đây thể hiện sự quan tâm, cảm thông và chia sẻ?",
        opts: ["Giúp bạn chép lại bài và thăm hỏi khi bạn bị ốm nằm viện", "Đứng xem tai nạn giao thông rồi quay video đăng mạng câu like", "Thấy bạn khóc liền cười đùa và trêu chọc", "Từ chối tham gia phong trào quyên góp ủng hộ nạn nhân bão lũ"],
        ans: 0,
        explain: "Thăm hỏi và giúp bạn chép bài khi bị ốm là biểu hiện cụ thể của sự quan tâm, cảm thông và chia sẻ."
      },
      {
        q: "Thành ngữ, tục ngữ nào sau đây nói về tinh thần cảm thông, chia sẻ?",
        opts: ["Lá lành đùm lá rách", "Đèn nhà ai nhà nấy rạng", "Cháy nhà hàng xóm bình chân như vại", "Ăn cỗ đi trước, lội nước đi sau"],
        ans: 0,
        explain: "'Lá lành đùm lá rách' là câu tục ngữ tiêu biểu của dân tộc Việt Nam về lòng nhân ái, tương trợ đùm bọc lẫn nhau."
      }
    ]
  },
  {
    num: 3,
    id: "bai-3",
    mach: "Mạch 1: Giáo dục đạo đức",
    machTag: "Đạo đức",
    machColor: "blue",
    title: "Học tập tự giác, tích cực",
    subtitle: "Chủ động lĩnh hội tri thức, xây dựng kế hoạch và kiên trì rèn luyện bản thân",
    svgNodes: [
      { title: "ĐỘNG CƠ ĐÚNG", desc: "Xác định mục tiêu học tập đúng đắn vì tương lai", color: "#2563eb" },
      { title: "CHỦ ĐỘNG HÀNH ĐỘNG", desc: "Chuẩn bị bài, làm bài đầy đủ, phát biểu, hợp tác nhóm", color: "#4f46e5" },
      { title: "KẾT QUẢ", desc: "Chủ động sáng tạo, tiến bộ không ngừng, tự lập và tự chủ", color: "#059669" }
    ],
    contentSections: [
      {
        title: "1. Biểu hiện của học tập tự giác, tích cực",
        icon: "fa-graduation-cap",
        text: "Học tập tự giác, tích cực là việc học sinh chủ động thực hiện nhiệm vụ học tập mà không cần ai nhắc nhở hay ép buộc; luôn tìm tòi, sáng tạo để đạt kết quả cao nhất.",
        items: [
          "Xác định rõ ràng mục tiêu và động cơ học tập đúng đắn: học để nâng cao hiểu biết, làm chủ tri thức và trở thành người có ích cho gia đình và xã hội.",
          "Chủ động chuẩn bị bài mới, đọc trước tài liệu, hoàn thành đầy đủ bài tập về nhà trước khi đến lớp.",
          "Trong giờ học: Tập trung nghe giảng, tích cực giơ tay phát biểu xây dựng bài, mạnh dạn trao đổi thắc mắc với thầy cô và bạn bè.",
          "Tích cực hợp tác hiệu quả khi làm việc nhóm, tôn trọng ý kiến đồng đội.",
          "Luôn kiên trì, vượt khó, tự giác học hỏi mọi lúc mọi nơi; lập thời gian biểu khoa học và nghiêm túc thực hiện."
        ]
      },
      {
        title: "2. Ý nghĩa của việc học tập tự giác, tích cực",
        icon: "fa-trophy",
        text: "Giúp học sinh chủ động nắm vững kiến thức, phát triển tư duy sáng tạo, không ngừng tiến bộ và đạt kết quả cao; rèn luyện tính tự lập, tính kỉ luật và ý chí bền bỉ; mở ra nhiều cơ hội thành công trong tương lai; được thầy cô, cha mẹ và bạn bè tin cậy, tôn trọng và yêu mến."
      },
      {
        title: "3. Các phương pháp rèn luyện tính tự giác",
        icon: "fa-compass",
        items: [
          "Xây dựng thời gian biểu hợp lý giữa học tập, thể dục thể thao và giải trí.",
          "Chia nhỏ mục tiêu lớn thành các nhiệm vụ cụ thể hàng ngày.",
          "Tránh xa các yếu tố gây xao nhãng như chơi game, lướt mạng xã hội khi đang ngồi vào bàn học.",
          "Tự thưởng cho bản thân khi hoàn thành tốt mục tiêu đề ra."
        ]
      }
    ],
    situation: {
      title: "Tình huống thực hành",
      desc: "Cuối tuần, Minh dự định dành buổi sáng để hoàn thành bài tập toán và chuẩn bị bài cho tuần sau. Tuy nhiên, nhóm bạn thân rủ Minh đi chơi điện tử cả ngày và bảo 'chủ nhật học sau cũng được'. Minh đang rất phân vân.",
      solution: "Gợi ý xử lý: Minh nên kiên quyết từ chối lời rủ rê và thực hiện đúng kế hoạch học tập đã đặt ra. Sau khi hoàn thành xong bài vở, Minh có thể hẹn bạn chơi thể thao hoặc giải trí lành mạnh vào buổi chiều."
    },
    quizzes: [
      {
        q: "Hành động nào sau đây thể hiện tính học tập tự giác, tích cực?",
        opts: ["Tự giác làm bài tập và đọc trước bài mới trước khi đến lớp", "Chỉ làm bài tập khi bố mẹ kiểm tra và nhắc nhở nhiều lần", "Chờ đến lớp để chép bài của bạn cho nhanh", "Trong giờ học ngủ gật hoặc nói chuyện riêng"],
        ans: 0,
        explain: "Chủ động chuẩn bị bài và hoàn thành bài tập trước khi đến lớp là biểu hiện rõ nét của tính tự giác trong học tập."
      },
      {
        q: "Người có tính tự giác trong học tập sẽ nhận được điều gì?",
        opts: ["Tiến bộ không ngừng, rèn được tính tự lập và được mọi người tin yêu", "Cảm thấy áp lực và luôn mệt mỏi", "Bị bạn bè xa lánh vì quá chăm chỉ", "Không có thời gian dành cho các hoạt động khác"],
        ans: 0,
        explain: "Tự giác học tập mang lại tri thức vững vàng, sự tự tin, rèn luyện bản lĩnh tự lập và được xã hội quý trọng."
      }
    ]
  },
  {
    num: 4,
    id: "bai-4",
    mach: "Mạch 1: Giáo dục đạo đức",
    machTag: "Đạo đức",
    machColor: "blue",
    title: "Giữ chữ tín",
    subtitle: "Coi trọng niềm tin, nói đi đôi với làm và hoàn thành tốt chức trách nhiệm vụ",
    svgNodes: [
      { title: "CHỮ TÍN LÀ GÌ?", desc: "Niềm tin của con người đối với nhau trong đời sống", color: "#2563eb" },
      { title: "BIỂU HIỆN", desc: "Giữ lời hứa, đúng hẹn, nói đi đôi với làm, có trách nhiệm", color: "#4f46e5" },
      { title: "Ý NGHĨA", desc: "Được tin tưởng, tôn trọng, dễ dàng hợp tác và thành công", color: "#059669" }
    ],
    contentSections: [
      {
        title: "1. Khái niệm chữ tín và giữ chữ tín",
        icon: "fa-handshake-simple",
        text: "Chữ tín là niềm tin, sự tin cậy lẫn nhau giữa con người với con người. Giữ chữ tín là coi trọng, gìn giữ niềm tin của mọi người đối với mình bằng lời nói và việc làm cụ thể."
      },
      {
        title: "2. Biểu hiện của người biết giữ chữ tín",
        icon: "fa-circle-check",
        items: [
          "<strong>Giữ đúng lời hứa:</strong> Đã hứa điều gì thì phải nỗ lực thực hiện bằng được.",
          "<strong>Luôn đúng hẹn:</strong> Đi học, đi làm việc nhóm, dự họp hoặc trả sách mượn đúng thời gian đã giao hẹn.",
          "<strong>Hoàn thành tốt nhiệm vụ:</strong> Có tinh thần trách nhiệm cao đối với công việc được phân công.",
          "<strong>Thống nhất giữa lời nói và việc làm:</strong> Trung thực, 'nói đi đôi với làm', không nói quá sự thật."
        ]
      },
      {
        title: "3. Hành vi trái với giữ chữ tín và Hậu quả",
        icon: "fa-triangle-exclamation",
        text: "Trái với giữ chữ tín là thất hứa, nuốt lời, trễ hẹn, làm việc qua loa đối phó, nói một đằng làm một nẻo, lừa dối người khác.",
        items: [
          "Hậu quả: Đánh mất lòng tin và sự tôn trọng của mọi người; bị coi thường, cô lập; đánh mất các cơ hội hợp tác và khó gặt hái thành công trong cuộc đời."
        ]
      },
      {
        title: "4. Ý nghĩa của việc giữ chữ tín",
        icon: "fa-shield-halved",
        text: "Người biết giữ chữ tín sẽ luôn nhận được sự tin yêu, kính trọng từ mọi người; xây dựng được mối quan hệ tốt đẹp, uy tín cá nhân bền vững; dễ dàng nhận được sự tương trợ, hợp tác thuận lợi để đi tới thành công."
      }
    ],
    situation: {
      title: "Tình huống đạo đức",
      desc: "Hùng mượn Nam cuốn truyện tranh quý và hứa sẽ trả vào thứ Hai. Tuy nhiên, đến hẹn Hùng quên mang theo và hứa sang thứ Tư. Đến thứ Tư, Hùng lại tiếp tục quên và lấy lý do 'chưa đọc xong'. Nam cảm thấy rất thất vọng về Hùng.",
      solution: "Đánh giá: Hùng đã nhiều lần trễ hẹn, thất hứa và không tôn trọng giao ước ban đầu. Hành vi này thể hiện sự thiếu trách nhiệm, làm tổn hại niềm tin của bạn bè dành cho mình. Hùng cần xin lỗi Nam chân thành và lập tức trả truyện đúng hẹn tiếp theo."
    },
    quizzes: [
      {
        q: "Câu thành ngữ nào sau đây mang ý nghĩa giữ chữ tín?",
        opts: ["Nói lời phải giữ lấy lời / Đừng như con bướm đậu rồi lại bay", "Hứa hươu hứa vượn", "Nói một đằng làm một nẻo", "Mật ngọt chết ruồi"],
        ans: 0,
        explain: "Câu ca dao khuyên con người đã hứa thì phải giữ trọn lời hứa, coi trọng chữ tín trong giao tiếp hàng ngày."
      },
      {
        q: "Hành động nào sau đây là biểu hiện của người biết giữ chữ tín?",
        opts: ["Đến điểm hẹn đúng giờ và hoàn thành nhiệm vụ nhóm đúng hạn", "Nhận lời giúp bạn nhưng đến phút cuối hủy hẹn không báo trước", "Mượn tiền nhưng cố tình né tránh không trả", "Hứa với bố mẹ đạt học sinh giỏi nhưng suốt ngày chơi game"],
        ans: 0,
        explain: "Đúng giờ và có trách nhiệm với nhiệm vụ được giao là biểu hiện cốt lõi của người có chữ tín."
      }
    ]
  },
  {
    num: 5,
    id: "bai-5",
    mach: "Mạch 1: Giáo dục đạo đức",
    machTag: "Đạo đức",
    machColor: "blue",
    title: "Bảo tồn di sản văn hoá",
    subtitle: "Nhận biết, tôn vinh và thực thi pháp luật về bảo vệ các di sản vô giá của dân tộc",
    svgNodes: [
      { title: "PHÂN LOẠI", desc: "Di sản phi vật thể (tinh thần) & Di sản vật thể (vật chất)", color: "#2563eb" },
      { title: "Ý NGHĨA", desc: "Tài sản vô giá, nền tảng tinh thần, nguồn lực du lịch", color: "#4f46e5" },
      { title: "PHÁP LUẬT", desc: "Nghiêm cấm chiếm đoạt, hủy hoại; có trách nhiệm bảo vệ", color: "#059669" }
    ],
    contentSections: [
      {
        title: "1. Khái niệm và Phân loại di sản văn hoá",
        icon: "fa-landmark-dome",
        text: "Di sản văn hoá là sản phẩm vật chất và tinh thần có giá trị lịch sử, văn hoá, khoa học, được lưu truyền từ thế hệ này qua thế hệ khác.",
        items: [
          "<strong>Di sản văn hoá phi vật thể:</strong> Là sản phẩm tinh thần gắn với con người và cộng đồng, bao gồm: tiếng nói, chữ viết; ngữ văn truyền miệng; diễn xướng dân gian (ca trù, quan họ, nhã nhạc cung đình Huế); lễ hội truyền thống; nghề thủ công truyền thống; tri thức dân gian...",
          "<strong>Di sản văn hoá vật thể:</strong> Là sản phẩm vật chất có giá trị lịch sử, văn hóa, khoa học, bao gồm: di tích lịch sử - văn hóa (Hoàng thành Thăng Long, Cố đô Huế); danh lam thắng cảnh (Vịnh Hạ Long, Tràng An, Phong Nha - Kẻ Bàng); di vật, cổ vật và bảo vật quốc gia."
        ]
      },
      {
        title: "2. Ý nghĩa to lớn của di sản văn hoá",
        icon: "fa-gem",
        text: "Di sản văn hóa là tài sản vô giá của dân tộc và nhân loại; kết tinh trí tuệ, kinh nghiệm sống và bản sắc ngàn đời của ông cha; là cội nguồn sức mạnh và nền tảng tinh thần gắn kết các thế hệ; đồng thời tạo nguồn lực to lớn thúc đẩy phát triển kinh tế du lịch bền vững."
      },
      {
        title: "3. Quy định của Luật Di sản văn hoá & Trách nhiệm của công dân",
        icon: "fa-scale-balanced",
        items: [
          "Mọi tổ chức, cá nhân có quyền sở hữu hợp pháp, quyền tham quan, học tập, nghiên cứu và có nghĩa vụ bảo vệ, phát huy giá trị di sản văn hóa.",
          "Kịp thời thông báo hoặc giao nộp cổ vật, bảo vật tìm thấy trong lòng đất hoặc dưới nước cho cơ quan có thẩm quyền.",
          "<strong>Các hành vi bị nghiêm cấm tuyệt đối:</strong>",
          "&bull; Chiếm đoạt, làm sai lệch, hủy hoại hoặc gây nguy cơ hủy hoại di sản văn hóa.",
          "&bull; Đào bới trái phép địa điểm khảo cổ; lấn chiếm đất đai thuộc khu vực di tích lịch sử - văn hóa.",
          "&bull; Mua bán, trao đổi, vận chuyển trái phép di vật, cổ vật ra nước ngoài.",
          "&bull; Lợi dụng việc bảo vệ và phát huy giá trị di sản để trục lợi, hoạt động mê tín dị đoan hoặc làm trái pháp luật."
        ]
      }
    ],
    situation: {
      title: "Tình huống pháp luật & đạo đức",
      desc: "Trong chuyến tham quan di tích Cố đô Huế, Tuấn nhìn thấy một vài bạn học sinh dùng bút xóa viết tên mình lên cột gỗ của lăng tẩm để 'lưu lại kỉ niệm'. Tuấn đang băn khoăn không biết có nên nhắc nhở hay không vì sợ bị các bạn phản ứng gay gắt.",
      solution: "Gợi ý xử lý: Tuấn nên tế nhị giải thích cho các bạn hiểu rằng hành vi viết, vẽ bậy lên di tích là vi phạm nghiêm trọng Luật Di sản văn hóa và làm tổn hại đến giá trị lịch sử của công trình. Nếu các bạn cố tình không dừng lại, Tuấn cần báo ngay cho ban quản lý di tích để kịp thời ngăn chặn."
    },
    quizzes: [
      {
        q: "Đối tượng nào sau đây thuộc loại di sản văn hoá phi vật thể?",
        opts: ["Làn điệu Dân ca Quan họ Bắc Ninh", "Cố đô Huế", "Thành nhà Hồ", "Vịnh Hạ Long"],
        ans: 0,
        explain: "Dân ca Quan họ Bắc Ninh là sản phẩm tinh thần, diễn xướng dân gian thuộc di sản văn hóa phi vật thể."
      },
      {
        q: "Hành vi nào sau đây vi phạm quy định của pháp luật về bảo vệ di sản văn hóa?",
        opts: ["Khắc tên, bôi vẽ lên bia đá tại di tích lịch sử", "Tham gia nhặt rác dọn vệ sinh khuôn viên đền đài", "Giao nộp cổ vật nhặt được cho bảo tàng địa phương", "Tuyên truyền giá trị văn hóa của lễ hội quê hương"],
        ans: 0,
        explain: "Khắc tên, bôi vẽ lên bia đá, công trình di tích là hành vi hủy hoại di sản bị pháp luật nghiêm cấm."
      }
    ]
  },
  {
    num: 6,
    id: "bai-6",
    mach: "Mạch 2: Giáo dục kĩ năng sống",
    machTag: "Kĩ năng sống",
    machColor: "emerald",
    title: "Ứng phó với tâm lí căng thẳng",
    subtitle: "Nhận diện dấu hiệu căng thẳng (stress) và thực hành các kĩ năng giải tỏa lành mạnh",
    svgNodes: [
      { title: "NGUYÊN NHÂN", desc: "Áp lực học tập, thi cử, bạn bè, gia đình, tâm sinh lý", color: "#059669" },
      { title: "BIỂU HIỆN", desc: "Thể chất (mệt, mất ngủ), Cảm xúc (lo âu), Hành vi (nổi nóng)", color: "#0d9488" },
      { title: "ỨNG PHÓ", desc: "Hít thở sâu, vận động, suy nghĩ tích cực, chia sẻ, quản lý giờ", color: "#10b981" }
    ],
    contentSections: [
      {
        title: "1. Khái niệm và Nguyên nhân gây tâm lí căng thẳng",
        icon: "fa-brain",
        text: "Tâm lí căng thẳng (stress) là trạng thái phản ứng của cơ thể và tâm trí trước những tác động áp lực từ môi trường bên ngoài hoặc suy nghĩ bên trong con người.",
        items: [
          "<strong>Nguyên nhân bên ngoài:</strong> Áp lực bài vở, điểm số, thi cử; kì vọng quá lớn từ bố mẹ; mâu thuẫn xích mích với bạn bè; bị bạo lực học đường hoặc nói xấu trên mạng; biến cố trong gia đình...",
          "<strong>Nguyên nhân bên trong:</strong> Tâm lý tự ti, nhút nhát; suy nghĩ tiêu cực, luôn bi quan; lối sống thức khuya, ăn uống thiếu dinh dưỡng; biến đổi tâm sinh lý mạnh mẽ ở lứa tuổi dậy thì."
        ]
      },
      {
        title: "2. Các biểu hiện cụ thể của tâm lí căng thẳng",
        icon: "fa-heart-pulse",
        items: [
          "<strong>Về thể chất:</strong> Đau đầu, đau dạ dày, mệt mỏi rã rời, khó thở, tức ngực, tim đập nhanh, toát mồ hôi, mất ngủ hoặc ngủ chập chờn, chán ăn hoặc ăn uống mất kiểm soát.",
          "<strong>Về cảm xúc & tinh thần:</strong> Buồn bã vô cớ, bồn chồn, lo lắng thái quá, sợ hãi, dễ cảm thấy bị tổn thương, thu mình lại và né tránh tiếp xúc.",
          "<strong>Về hành vi:</strong> Dễ cáu gắt, gắt gỏng, la hét, gây gổ với người xung quanh, giảm sút khả năng tập trung, kết quả học tập sụt giảm."
        ]
      },
      {
        title: "3. Các biện pháp ứng phó tích cực và hiệu quả",
        icon: "fa-seedling",
        items: [
          "<strong>Thư giãn cơ thể:</strong> Tập hít thở sâu (hít vào bằng mũi, thở chậm ra bằng miệng), tập yoga, đi bộ, chạy bộ hoặc chơi thể thao.",
          "<strong>Thay đổi góc nhìn:</strong> Suy nghĩ lạc quan, tích cực; coi thất bại và điểm kém là bài học kinh nghiệm để tiến bộ chứ không tự trách móc bản thân.",
          "<strong>Chia sẻ và tìm kiếm sự trợ giúp:</strong> Giãi bày tâm sự với bố mẹ, thầy cô, bạn bè thân thiết hoặc chuyên gia tư vấn tâm lý trường học.",
          "<strong>Quản lý thời gian khoa học:</strong> Sắp xếp lịch học tập và nghỉ ngơi hợp lý, không để 'nước đến chân mới nhảy'."
        ]
      }
    ],
    situation: {
      title: "Tình huống kĩ năng sống",
      desc: "Trước kì thi học kì 1, An cảm thấy rất áp lực vì mục tiêu đạt học sinh giỏi để không phụ lòng bố mẹ. Nhiều đêm liền An thức đến 2 giờ sáng để ôn bài. Mấy hôm nay An liên tục bị đau đầu, buồn nôn, ngồi vào bàn học là cảm thấy tim đập thình thịch và không thể nhớ nổi bài.",
      solution: "Gợi ý ứng phó: An đang gặp triệu chứng căng thẳng tâm lý nghiêm trọng. An cần tạm dừng việc học ngay để hít thở sâu, đi ngủ đúng giờ (ít nhất 7-8 tiếng/ngày), vận động nhẹ nhàng và chia sẻ thẳng thắn với bố mẹ về áp lực của mình để nhận được sự thấu hiểu, động viên."
    },
    quizzes: [
      {
        q: "Biện pháp nào sau đây là cách ứng phó TÍCH CỰC khi gặp tâm lí căng thẳng?",
        opts: ["Tập hít thở sâu, chơi thể thao và chia sẻ với người đáng tin cậy", "Nhốt mình trong phòng kín cả ngày và không ăn uống", "Chơi game thâu đêm suốt sáng để quên áp lực", "Cáu gắt và đập phá đồ đạc trong nhà"],
        ans: 0,
        explain: "Vận động, hít thở sâu và trò chuyện chia sẻ là những phương pháp khoa học giúp giải phóng hormone căng thẳng và phục hồi năng lượng."
      },
      {
        q: "Đâu là nguyên nhân bên trong dẫn đến tâm lí căng thẳng ở học sinh?",
        opts: ["Tự ti, suy nghĩ bi quan tiêu cực và thức khuya", "Kì vọng quá lớn từ gia đình", "Áp lực bài tập thi cử", "Mâu thuẫn xích mích với bạn cùng lớp"],
        ans: 0,
        explain: "Tự ti, suy nghĩ tiêu cực và lối sống thiếu khoa học là nguyên nhân xuất phát từ chính bên trong bản thân mỗi người."
      }
    ]
  },
  {
    num: 7,
    id: "bai-7",
    mach: "Mạch 2: Giáo dục kĩ năng sống",
    machTag: "Kĩ năng sống",
    machColor: "emerald",
    title: "Phòng, chống bạo lực học đường",
    subtitle: "Nhận diện các hình thức bạo lực và trang bị kĩ năng tự bảo vệ an toàn trước, trong và sau sự việc",
    svgNodes: [
      { title: "HÌNH THỨC", desc: "Bạo lực thể chất, tinh thần, ngôn từ, kinh tế, bạo lực mạng", color: "#059669" },
      { title: "HẬU QUẢ", desc: "Tổn thương thể xác, sang chấn tâm lý, kỷ luật và pháp luật", color: "#0d9488" },
      { title: "ỨNG PHÓ 3 BƯỚC", desc: "Trước (phòng ngừa) - Trong (bình tĩnh, thoát hiểm) - Sau (báo cáo, trị liệu)", color: "#10b981" }
    ],
    contentSections: [
      {
        title: "1. Khái niệm và Biểu hiện của bạo lực học đường",
        icon: "fa-hand-fist",
        text: "Bạo lực học đường là hành vi hành hạ, ngược đãi, đánh đập; xâm hại thân thể, sức khỏe; lăng mạ, xúc phạm danh dự, nhân phẩm; cô lập, xua đuổi và các hành vi cố ý khác gây tổn hại về thể chất, tinh thần của người học xảy ra trong cơ sở giáo dục hoặc lớp độc lập.",
        items: [
          "<strong>Bạo lực thể xác:</strong> Đấm, đá, tát, đánh đập, sử dụng hung khí gây thương tích.",
          "<strong>Bạo lực tinh thần & ngôn từ:</strong> Chửi bới, lăng mạ, gán ghép biệt danh xúc phạm, đe dọa, cô lập, tẩy chay.",
          "<strong>Bạo lực kinh tế:</strong> Tống tiền, ép nộp tiền ăn sáng, bắt mua đồ, phá hoại dụng cụ học tập.",
          "<strong>Bạo lực trên không gian mạng:</strong> Đăng ảnh chế giễu, bôi nhọ, phát tán thông tin bịa đặt sai sự thật trong các hội nhóm kín."
        ]
      },
      {
        title: "2. Hậu quả nghiêm trọng của bạo lực học đường",
        icon: "fa-skull-crossbones",
        text: "Đối với nạn nhân: Tổn thương nghiêm trọng về sức khỏe và thân thể; sang chấn tâm lý nặng nề (sợ hãi, trầm cảm, bỏ học, thậm chí có hành vi tiêu cực). Đối với người gây bạo lực: Bị kỉ luật, đình chỉ học tập, hủy hoại tương lai; phải bồi thường thiệt hại và chịu trách nhiệm pháp lý hình sự nếu gây hậu quả nghiêm trọng."
      },
      {
        title: "3. Kĩ năng ứng phó phòng chống bạo lực học đường",
        icon: "fa-shield-halved",
        items: [
          "<strong>Trước khi xảy ra (Phòng ngừa):</strong> Nhận biết sớm dấu hiệu đe dọa; tránh đi một mình ở nơi vắng vẻ; cư xử hòa nhã, đúng mực, không khiêu khích; báo sớm với thầy cô và phụ huynh khi có nguy cơ.",
          "<strong>Trong khi xảy ra (Thoát hiểm):</strong> Giữ thái độ bình tĩnh, hít thở sâu, không thách thức đối phương; tìm cách trì hoãn để kéo dài thời gian; quan sát nhanh lối thoát hiểm, hô to kêu cứu ('Cháy nhà!', 'Cứu tôi với!') để thu hút sự chú ý của người xung quanh.",
          "<strong>Sau khi xảy ra (Xử lý):</strong> Thông báo ngay lập tức cho ban giám hiệu, thầy cô chủ nhiệm, bố mẹ hoặc gọi đường dây nóng 111; đến cơ sở y tế kiểm tra sức khỏe và thăm khám tâm lý kịp thời."
        ]
      }
    ],
    situation: {
      title: "Tình huống tự vệ & ứng phó",
      desc: "Tan học, Bình bị một nhóm học sinh khóa trên chặn đường ở con hẻm vắng cạnh trường, ép đưa 50.000 đồng và đe dọa 'nếu mách ai sẽ bị đánh nhừ tử'. Bình đang rất sợ hãi và không biết phải làm sao.",
      solution: "Gợi ý xử lý: Trong tình thế nguy hiểm nơi vắng người, Bình cần bình tĩnh đưa tiền để bảo toàn tính mạng và thân thể, tuyệt đối không đôi co gây kích động đối phương. Sau khi thoát ra nơi đông người an toàn, Bình phải báo ngay cho gia đình và thầy cô giáo chủ nhiệm để có biện pháp can thiệp, bảo vệ thích đáng."
    },
    quizzes: [
      {
        q: "Hành động nào sau đây thuộc về bạo lực học đường?",
        opts: ["Lập nhóm kín trên mạng xã hội để chế giễu, cô lập và bôi nhọ bạn", "Góp ý chân thành khi bạn làm bài sai", "Nhắc nhở bạn tuân thủ nội quy trường học", "Phân công công việc công bằng trong hoạt động nhóm"],
        ans: 0,
        explain: "Lập nhóm bôi nhọ, nói xấu và cô lập bạn bè trên mạng là hình thức bạo lực học đường nguy hiểm về tinh thần."
      },
      {
        q: "Số điện thoại của Tổng đài Quốc gia Bảo vệ Trẻ em tại Việt Nam là số nào?",
        opts: ["111", "113", "114", "115"],
        ans: 0,
        explain: "111 là đường dây nóng miễn phí tiếp nhận, xử lý thông tin thông báo, tố giác nguy cơ, hành vi bạo lực, xâm hại trẻ em 24/7."
      }
    ]
  },
  {
    num: 8,
    id: "bai-8",
    mach: "Mạch 3: Giáo dục kinh tế",
    machTag: "Kinh tế",
    machColor: "amber",
    title: "Quản lí tiền",
    subtitle: "Rèn luyện thói quen chi tiêu thông minh, tiết kiệm và quản lý tài chính cá nhân",
    svgNodes: [
      { title: "Ý NGHĨA", desc: "Chủ động chi tiêu, tránh nợ nần, tự lập và tích lũy tương lai", color: "#d97706" },
      { title: "NGUYÊN TẮC VÀNG", desc: "Phân biệt Cần vs Muốn; Tiết kiệm trước khi chi tiêu", color: "#f59e0b" },
      { title: "TẠO THU NHẬP", desc: "Làm việc nhà, thu gom phế liệu, sáng tạo đồ thủ công", color: "#b45309" }
    ],
    contentSections: [
      {
        title: "1. Ý nghĩa của việc quản lí tiền hiệu quả",
        icon: "fa-sack-dollar",
        text: "Quản lí tiền là việc lập kế hoạch chi tiêu, tiết kiệm và sử dụng tiền một cách hợp lý. Quản lí tiền tốt giúp mỗi người chủ động trong cuộc sống, không rơi vào tình trạng thiếu thốn, nợ nần; giảm bớt gánh nặng kinh tế cho cha mẹ; rèn luyện đức tính tiết kiệm, kỷ luật và tạo dựng nguồn lực tài chính cho các mục tiêu học tập, tương lai."
      },
      {
        title: "2. Các nguyên tắc quản lí tiền hiệu quả",
        icon: "fa-scale-unbalanced-flip",
        items: [
          "<strong>Chi tiêu có kế hoạch:</strong> Phân biệt rõ ràng giữa thứ <em>'thực sự cần'</em> (nhu yếu phẩm, sách vở, đồ dùng học tập thiết yếu) và thứ <em>'chỉ muốn có'</em> (đồ chơi theo trào lưu, ăn vặt xa xỉ, đồ dùng đắt tiền không cần thiết).",
          "<strong>Tiết kiệm trước khi chi tiêu:</strong> Đặt ra mục tiêu tiết kiệm rõ ràng (như nuôi heo đất, để dành một phần tiền mừng tuổi/tiền tiêu vặt trước khi tiêu phần còn lại).",
          "<strong>Chỉ vay tiền khi thực sự cần thiết:</strong> Khi vay mượn phải có kế hoạch trả nợ rõ ràng và giữ chữ tín trả đúng hẹn.",
          "<strong>Không lãng phí:</strong> Tiết kiệm điện, nước sinh hoạt, giữ gìn sách vở và đồ dùng cá nhân cẩn thận để sử dụng lâu dài."
        ]
      },
      {
        title: "3. Học cách tạo nguồn thu nhập phù hợp với lứa tuổi",
        icon: "fa-piggy-bank",
        items: [
          "Thu gom giấy vụn, vỏ chai nhựa, lon kim loại tái chế bán gây quỹ kế hoạch nhỏ.",
          "Làm các sản phẩm thủ công, vẽ tranh, gấp hoa giấy làm quà tặng.",
          "Chăm chỉ phụ giúp bố mẹ làm việc nhà, phụ việc bán hàng theo khả năng.",
          "Học cách quản lý tài khoản tiết kiệm cùng với sự hướng dẫn của phụ huynh."
        ]
      }
    ],
    situation: {
      title: "Tình huống tài chính học trò",
      desc: "Dũng được mừng tuổi 500.000 đồng. Bạn bè rủ Dũng nạp tiền vào game online để mua trang phục vip nhân vật. Dũng cũng đang rất muốn mua một bộ từ điển tiếng Anh để phục vụ việc học môn ngoại ngữ có giá 250.000 đồng. Dũng băn khoăn không biết nên quyết định ra sao.",
      solution: "Gợi ý quản lý tiền: Dũng nên phân định rõ: bộ từ điển là thứ 'thực sự cần' cho việc học, còn trang phục game chỉ là thứ 'muốn có' nhất thời. Dũng nên mua cuốn từ điển (250.000đ), gửi tiết kiệm vào heo đất 200.000đ, còn lại 50.000đ có thể dùng cho nhu cầu giải trí nhỏ."
    },
    quizzes: [
      {
        q: "Nguyên tắc chi tiêu thông minh là phân biệt giữa hai nhóm nào sau đây?",
        opts: ["Thứ thực sự cần và thứ chỉ muốn có", "Thứ đắt tiền và thứ siêu đắt", "Thứ bạn bè thích và thứ bản thân ghét", "Thứ của mình và thứ đi mượn"],
        ans: 0,
        explain: "Phân biệt giữa 'Nhu cầu thiết yếu (Cần)' và 'Mong muốn nhất thời (Muốn)' là chìa khóa vàng của quản lý tài chính cá nhân."
      },
      {
        q: "Hành động nào sau đây thể hiện việc quản lý tiền hiệu quả ở học sinh?",
        opts: ["Bỏ một phần tiền tiêu vặt vào heo đất tiết kiệm trước khi chi tiêu", "Có bao nhiêu tiền đem tiêu hết bấy nhiêu", "Vay mượn bạn bè để đua đòi mua điện thoại đắt tiền", "Mua thật nhiều đồ chơi theo phong trào rồi vứt bỏ"],
        ans: 0,
        explain: "Tiết kiệm trước khi chi tiêu giúp xây dựng thói quen tài chính kỷ luật và luôn có quỹ dự phòng."
      }
    ]
  },
  {
    num: 9,
    id: "bai-9",
    mach: "Mạch 4: Giáo dục pháp luật",
    machTag: "Pháp luật",
    machColor: "rose",
    title: "Phòng, chống tệ nạn xã hội",
    subtitle: "Nhận biết tác hại của ma túy, cờ bạc, mại dâm, mê tín dị đoan và tuân thủ nghiêm pháp luật",
    svgNodes: [
      { title: "KHÁI NIỆM & LOẠI HÌNH", desc: "Ma túy, cờ bạc, mại dâm, mê tín dị đoan, nghiện rượu bia", color: "#e11d48" },
      { title: "HẬU QUẢ TÀN PHÁ", desc: "Tàn phá sức khỏe, kinh tế gia đình, làm phát sinh tội phạm", color: "#be123c" },
      { title: "PHÁP LUẬT & TRÁCH NHIỆM", desc: "Nghiêm cấm tàng trữ, buôn bán; học sinh sống lành mạnh", color: "#9f1239" }
    ],
    contentSections: [
      {
        title: "1. Khái niệm và Các loại tệ nạn xã hội phổ biến",
        icon: "fa-triangle-exclamation",
        text: "Tệ nạn xã hội là hiện tượng xã hội bao gồm những hành vi sai lệch chuẩn mực xã hội, vi phạm đạo đức và pháp luật mang tính phổ biến, gây hậu quả xấu về mọi mặt đối với đời sống cá nhân, gia đình và toàn xã hội.",
        items: [
          "<strong>Tệ nạn ma túy:</strong> Sử dụng, tàng trữ, mua bán, vận chuyển chất ma túy (cần sa, thuốc lắc, ma túy đá, bóng cười, thuốc lá điện tử có tẩm ma túy...).",
          "<strong>Tệ nạn cờ bạc:</strong> Đánh bài ăn tiền, cá độ bóng đá, số đề, bắn cá đổi thưởng...",
          "<strong>Tệ nạn mại dâm:</strong> Hành vi mua bán dâm và môi giới mại dâm.",
          "<strong>Tệ nạn mê tín dị đoan:</strong> Bói toán, cầu cúng tà đạo, giải hạn mê muội làm mất tiền oan.",
          "<strong>Nghiện rượu, bia, chất kích thích:</strong> Dẫn đến mất kiểm soát hành vi, gây tai nạn giao thông và bạo lực gia đình."
        ]
      },
      {
        title: "2. Hậu quả nguy hiểm của tệ nạn xã hội",
        icon: "fa-radiation",
        items: [
          "<strong>Đối với bản thân:</strong> Hủy hoại sức khỏe, suy kiệt thể xác, mắc các bệnh truyền nhiễm nguy hiểm (HIV/AIDS, viêm gan); làm tha hóa nhân cách, mất khả năng lao động.",
          "<strong>Đối với gia đình:</strong> Phá vỡ hạnh phúc gia đình; làm khánh kiệt kinh tế, nợ nần chồng chất; gây đau khổ tột cùng cho người thân.",
          "<strong>Đối với xã hội:</strong> Gây mất trật tự an ninh, suy giảm đạo đức xã hội; là nguyên nhân gốc rễ phát sinh các loại tội phạm nguy hiểm như trộm cắp, cướp của, giết người."
        ]
      },
      {
        title: "3. Quy định pháp luật và Trách nhiệm của học sinh",
        icon: "fa-gavel",
        items: [
          "Pháp luật Việt Nam nghiêm cấm sản xuất, tàng trữ, vận chuyển, mua bán, sử dụng trái phép các chất ma túy; nghiêm cấm đánh bạc, tổ chức đánh bạc; cấm hoạt động mại dâm và mê tín dị đoan.",
          "<strong>Trách nhiệm học sinh:</strong>",
          "&bull; Sống lành mạnh, chăm chỉ học tập, rèn luyện thể dục thể thao.",
          "&bull; Tuyệt đối không thử, không sử dụng chất kích thích, thuốc lá điện tử, ma túy dưới bất kỳ hình thức nào.",
          "&bull; Cảnh giác trước sự lôi kéo, dụ dỗ của kẻ xấu; kiên quyết nói 'KHÔNG' với tệ nạn xã hội.",
          "&bull; Tích cực tham gia tuyên truyền và dũng cảm tố giác các hành vi vi phạm cho công an hoặc nhà trường."
        ]
      }
    ],
    situation: {
      title: "Tình huống phòng vệ pháp luật",
      desc: "Trên đường đi học về, một người lạ mặt đưa cho Tuấn một điếu thuốc lá điện tử có mùi thơm ngào ngạt và bảo 'Hút thử một hơi cho tỉnh táo, miễn phí, không nghiện đâu'. Tuấn nhớ lại bài học GDCD về thuốc lá điện tử có thể chứa ma túy.",
      solution: "Gợi ý xử lý: Tuấn cần kiên quyết từ chối ngay lập tức và nhanh chóng di chuyển đến nơi đông người. Sau đó, Tuấn báo cáo sự việc cho thầy cô giáo và các chú công an khu vực để theo dõi đối tượng khả nghi."
    },
    quizzes: [
      {
        q: "Hành vi nào sau đây vi phạm pháp luật nghiêm trọng về tệ nạn xã hội?",
        opts: ["Tàng trữ và rủ rê người khác hút thuốc lá điện tử tẩm tinh dầu ma túy", "Chơi cờ vua giải trí cùng bạn vào giờ ra chơi", "Tuyên truyền phòng chống HIV/AIDS cho cộng đồng", "Vận động gia đình không tham gia cờ bạc"],
        ans: 0,
        explain: "Tàng trữ và lôi kéo người khác sử dụng ma túy là hành vi vi phạm pháp luật hình sự bị trừng trị nghiêm khắc."
      },
      {
        q: "Khi có người lạ rủ rê sử dụng thử chất nghi là ma túy, học sinh cần làm gì?",
        opts: ["Kiên quyết từ chối và báo ngay cho người lớn hoặc cơ quan chức năng", "Hút thử một lần cho biết rồi thôi", "Nhận mang về nhà cất giấu hộ", "Giới thiệu cho bạn bè cùng thử"],
        ans: 0,
        explain: "Kiên quyết từ chối và báo cho cơ quan chức năng là kỹ năng tự vệ cốt lõi trước cạm bẫy tệ nạn xã hội."
      }
    ]
  },
  {
    num: 10,
    id: "bai-10",
    mach: "Mạch 4: Giáo dục pháp luật",
    machTag: "Pháp luật",
    machColor: "rose",
    title: "Quyền và nghĩa vụ của công dân trong gia đình",
    subtitle: "Hiểu rõ vai trò tế bào của gia đình, quyền và nghĩa vụ thiêng liêng giữa các thế hệ",
    svgNodes: [
      { title: "KHÁI NIỆM & VAI TRÒ", desc: "Gia đình là tế bào xã hội, nuôi dưỡng và giáo dục nhân cách", color: "#e11d48" },
      { title: "QUYỀN & NGHĨA VỤ", desc: "Vợ - chồng bình đẳng; Cha mẹ nuôi dưỡng; Con cái hiếu thảo", color: "#be123c" },
      { title: "TRÁCH NHIỆM", desc: "Kính trọng ông bà cha mẹ, yêu thương đùm bọc anh chị em", color: "#9f1239" }
    ],
    contentSections: [
      {
        title: "1. Khái niệm và Vai trò của gia đình",
        icon: "fa-people-roof",
        text: "Gia đình là tập hợp những người gắn bó với nhau do quan hệ hôn nhân, quan hệ huyết thống hoặc quan hệ nuôi dưỡng, làm phát sinh quyền và nghĩa vụ giữa họ với nhau theo quy định của Luật Hôn nhân và gia đình.",
        items: [
          "Gia đình là tế bào của xã hội, cái nôi nuôi dưỡng và là môi trường quan trọng nhất hình thành, phát triển nhân cách của mỗi con người.",
          "Gia đình thực hiện các chức năng thiêng liêng: duy trì nòi giống, nuôi dạy con cái thành công dân tốt và xây dựng kinh tế gia đình no ấm."
        ]
      },
      {
        title: "2. Quyền và nghĩa vụ giữa các thành viên trong gia đình",
        icon: "fa-scale-balanced",
        items: [
          "<strong>Giữa vợ và chồng:</strong> Bình đẳng về mọi mặt, tôn trọng danh dự, nhân phẩm, uy tín của nhau; cùng nhau chia sẻ, gánh vác công việc gia đình và nuôi dạy con cái.",
          "<strong>Giữa cha mẹ và con cái:</strong>",
          "&bull; <em>Cha mẹ:</em> Có nghĩa vụ nuôi dưỡng, chăm sóc, bảo vệ quyền lợi hợp pháp, giáo dục và tạo điều kiện cho con học tập; tôn trọng ý kiến của con; không phân biệt đối xử giữa các con; không bạo lực, lạm dụng sức lao động của con.",
          "&bull; <em>Con cái:</em> Có bổn phận yêu quý, kính trọng, biết ơn, hiếu thảo và phụng dưỡng cha mẹ; chăm sóc cha mẹ khi ốm đau, già yếu; chăm ngoan, giữ gìn danh dự truyền thống tốt đẹp của gia đình.",
          "<strong>Giữa ông bà và các cháu:</strong> Ông bà nêu gương sáng, yêu thương, chăm sóc, dạy dỗ cháu; các cháu có nghĩa vụ kính trọng, phụng dưỡng và chăm sóc ông bà.",
          "<strong>Giữa anh, chị, em:</strong> Có nghĩa vụ thương yêu, chăm sóc, giúp đỡ nhau; đùm bọc, nhường nhịn và tôn trọng lẫn nhau."
        ]
      },
      {
        title: "3. Trách nhiệm của học sinh đối với gia đình",
        icon: "fa-heart",
        items: [
          "Lễ phép, vâng lời ông bà, cha mẹ; chăm chỉ học tập để cha mẹ vui lòng.",
          "Tự giác phụ giúp công việc nhà phù hợp với sức khỏe: dọn dẹp, nấu cơm, trông em...",
          "Không đòi hỏi quá mức điều kiện kinh tế gia đình; biết chia sẻ khó khăn cùng cha mẹ."
        ]
      }
    ],
    situation: {
      title: "Tình huống pháp lý & đạo lý gia đình",
      desc: "Bố mẹ Hải thường xuyên cãi vã vì kinh tế khó khăn. Bố Hải bắt Hải (13 tuổi) phải nghỉ học ở trường để đi làm phụ việc bốc vác tại xưởng gạch kiếm tiền. Mẹ Hải can ngăn nhưng bị bố mắng chửi.",
      solution: "Đánh giá pháp lý: Hành vi của bố Hải vi phạm nghiêm trọng Luật Trẻ em và Luật Hôn nhân & Gia đình vì cha mẹ có nghĩa vụ tạo điều kiện cho con cái hoàn thành chương trình giáo dục phổ cập và nghiêm cấm bóc lột sức lao động của trẻ em. Hải và mẹ cần nhờ sự can thiệp, hòa giải của hội phụ nữ, chính quyền địa phương hoặc gọi đường dây nóng 111 để bảo vệ quyền học tập của Hải."
    },
    quizzes: [
      {
        q: "Theo quy định của pháp luật, con cái có nghĩa vụ gì đối với cha mẹ?",
        opts: ["Yêu quý, kính trọng, biết ơn, hiếu thảo và phụng dưỡng cha mẹ", "Phải đáp ứng mọi đòi hỏi vô lý của cha mẹ", "Chỉ cần chăm sóc cha mẹ khi cha mẹ giàu có", "Không cần quan tâm khi cha mẹ già yếu"],
        ans: 0,
        explain: "Luật Hôn nhân và Gia đình quy định con cái có bổn phận yêu quý, kính trọng, biết ơn, hiếu thảo và phụng dưỡng cha mẹ."
      },
      {
        q: "Hành vi nào sau đây vi phạm quyền và nghĩa vụ của cha mẹ đối với con?",
        opts: ["Ép con nghỉ học cấp 2 để đi làm thuê kiếm tiền", "Tạo điều kiện cho con học tập và vui chơi lành mạnh", "Lắng nghe tâm tư và định hướng học tập cho con", "Chăm sóc chu đáo khi con bị bệnh"],
        ans: 0,
        explain: "Bắt con chưa đủ tuổi lao động nghỉ học đi làm thuê là hành vi bóc lột sức lao động trẻ em bị pháp luật cấm."
      }
    ]
  }
];

// 40 questions for Trang Nguyen Cong Dan 7 Competition
const examQuestions = [
  { q: "Truyền thống quê hương được hiểu là gì?", opts: ["Những giá trị văn hóa, lịch sử, đạo đức, nghề được truyền qua nhiều thế hệ", "Những thói quen mới xuất hiện trong vài tháng gần đây", "Các trào lưu giải trí trên mạng xã hội", "Quy định riêng của một cá nhân trong làng"], ans: 0 },
  { q: "Lễ hội nào sau đây tôn vinh truyền thống nhớ ơn cội nguồn dân tộc Việt Nam?", opts: ["Lễ hội Đền Hùng", "Lễ hội Halloween", "Lễ hội Noel", "Lễ hội Carnival"], ans: 0 },
  { q: "Làng gốm Bát Tràng là biểu trưng tiêu biểu cho truyền thống nào của quê hương?", opts: ["Nghề thủ công truyền thống", "Truyền thống chống giặc ngoại xâm", "Nghệ thuật diễn xướng dân gian", "Văn hóa lễ hội sông nước"], ans: 0 },
  { q: "Thái độ đúng đắn của học sinh đối với các hủ tục mê tín dị đoan ở địa phương là gì?", opts: ["Kiên quyết bài trừ, phê phán và không tham gia", "Hưởng ứng nhiệt tình vì cho rằng đó là truyền thống", "Tự mình tổ chức bói toán kiếm tiền", "Bắt chước và lôi kéo bạn bè tham gia"], ans: 0 },
  { q: "Hành động nào thể hiện sự quan tâm, cảm thông và chia sẻ?", opts: ["Lắng nghe, thăm hỏi và giúp đỡ người gặp hoàn cảnh éo le", "Thờ ơ, bỏ đi khi thấy người khác gặp tai nạn", "Lấy điểm yếu của bạn ra trêu cười trước lớp", "Từ chối mọi lời kêu gọi quyên góp từ thiện"], ans: 0 },
  { q: "Câu tục ngữ nào sau đây thể hiện sâu sắc tinh thần đùm bọc, sẻ chia?", opts: ["Thương người như thể thương thân", "Khôn ngoan chẳng lọ thật thà", "Ăn cỗ đi trước, lội nước đi sau", "Đèn nhà ai nhà nấy rạng"], ans: 0 },
  { q: "Biểu hiện nào sau đây chứng tỏ một học sinh có tính tự giác trong học tập?", opts: ["Chủ động chuẩn bị bài và làm bài tập đầy đủ không đợi nhắc nhở", "Chỉ học bài khi bị bố mẹ đe dọa phạt tiền", "Đợi đến giờ kiểm tra mới mở sách chép bài", "Nhờ bạn làm hộ bài tập về nhà"], ans: 0 },
  { q: "Người có tính tự giác và tích cực trong học tập sẽ đạt được điều gì?", opts: ["Chủ động nắm vững kiến thức, tự lập và tiến bộ vượt bậc", "Luôn cảm thấy buồn chán và mất phương hướng", "Bị các bạn chê cười vì quá siêng năng", "Không còn bạn bè chơi cùng"], ans: 0 },
  { q: "Chữ tín là gì?", opts: ["Niềm tin, sự tin cậy lẫn nhau giữa con người với con người", "Tiền bạc được gửi vào ngân hàng", "Giấy tờ biên lai vay mượn tài sản", "Lời nói khoác lác cho vui"], ans: 0 },
  { q: "Hành vi nào sau đây là biểu hiện của người biết giữ chữ tín?", opts: ["Đúng hẹn, nói đi đôi với làm và có trách nhiệm với lời hứa", "Hứa thật nhiều nhưng chẳng làm được bao nhiêu", "Vay mượn đồ của bạn rồi đem bán lấy tiền", "Hứa chép bài hộ bạn trong phòng thi"], ans: 0 },
  { q: "Người không biết giữ chữ tín sẽ phải gánh chịu hậu quả gì?", opts: ["Mất niềm tin, bị coi thường và đánh mất cơ hội hợp tác", "Được mọi người tôn vinh và thán phục", "Dễ dàng lừa dối người khác để kiếm tiền", "Luôn có nhiều bạn bè thân thiết"], ans: 0 },
  { q: "Di sản văn hóa phi vật thể bao gồm những đối tượng nào?", opts: ["Lễ hội, làn điệu dân ca, chữ viết, tiếng nói, nghề cổ truyền", "Các lâu đài, cung điện, di tích cổ", "Danh lam thắng cảnh tự nhiên", "Các cổ vật bằng vàng ròng dưới lòng đất"], ans: 0 },
  { q: "Di tích nào sau đây thuộc Di sản văn hóa vật thể của Việt Nam?", opts: ["Hoàng thành Thăng Long", "Hát ca trù", "Nghệ thuật Đờn ca tài tử Nam Bộ", "Hát Xoan Phú Thọ"], ans: 0 },
  { q: "Luật Di sản văn hóa nghiêm cấm tuyệt đối hành vi nào sau đây?", opts: ["Lấn chiếm, đào bới trái phép và phá hoại khu di tích", "Tham quan học tập và chụp ảnh kỉ niệm tại di tích", "Đóng góp tiền tu bổ, dọn vệ sinh di tích", "Nghiên cứu khoa học về các di vật lịch sử"], ans: 0 },
  { q: "Khi đào được cổ vật quý trong vườn nhà, công dân có nghĩa vụ gì?", opts: ["Kịp thời thông báo hoặc giao nộp cho cơ quan chức năng", "Bí mật bán cho thương lái nước ngoài lấy tiền", "Đem chôn giấu không cho ai biết", "Đập vỡ để lấy kim loại quý"], ans: 0 },
  { q: "Tâm lí căng thẳng (stress) có thể bắt nguồn từ nguyên nhân bên ngoài nào?", opts: ["Áp lực thi cử, kỳ vọng quá lớn và mâu thuẫn bạn bè", "Tâm lý tự ti, nhút nhát của bản thân", "Lối sống thức khuya lười vận động", "Suy nghĩ bi quan trong đầu"], ans: 0 },
  { q: "Dấu hiệu nào trên cơ thể cảnh báo bạn đang bị căng thẳng tâm lý nghiêm trọng?", opts: ["Đau đầu, tức ngực, mệt mỏi rã rời và mất ngủ triền miên", "Cảm thấy vui vẻ, sảng khoái suốt cả ngày", "Ăn ngon miệng và ngủ sâu giấc", "Tập trung học tập rất nhanh và nhớ lâu"], ans: 0 },
  { q: "Kĩ năng nào sau đây giúp giải tỏa tâm lí căng thẳng một cách lành mạnh?", opts: ["Tập hít thở sâu, tập thể dục và tâm sự với người thân", "Chơi game liên tục 12 tiếng không nghỉ", "Hút thuốc lá điện tử để lấy lại bình tĩnh", "Nhốt mình trong phòng và tự làm đau cơ thể"], ans: 0 },
  { q: "Bạo lực học đường bao gồm những dạng hành vi nào?", opts: ["Bạo lực thể xác, tinh thần, ngôn từ, kinh tế và bạo lực mạng", "Tranh luận khoa học sôi nổi trong giờ học", "Góp ý chân thành khi bạn mắc khuyết điểm", "Cùng nhau luyện tập thể thao trên sân trường"], ans: 0 },
  { q: "Khi thấy bạn mình bị nhóm học sinh khóa trên bắt nạt, em nên làm gì?", opts: ["Báo ngay cho thầy cô giám thị hoặc người lớn gần đó can thiệp", "Đứng xem, reo hò cổ vũ và quay video", "Lao vào đánh nhau hội đồng với nhóm kia", "Làm ngơ coi như không có chuyện gì xảy ra"], ans: 0 },
  { q: "Số tổng đài điện thoại Quốc gia Bảo vệ Trẻ em miễn phí tại Việt Nam là:", opts: ["111", "113", "114", "115"], ans: 0 },
  { q: "Hậu quả lớn nhất của bạo lực học đường đối với nạn nhân là gì?", opts: ["Gây tổn thương thể chất và sang chấn tâm lý nặng nề", "Giúp nạn nhân trở nên mạnh mẽ và lì đòn hơn", "Không gây ảnh hưởng gì đến việc học tập", "Được nhiều người biết đến trên mạng xã hội"], ans: 0 },
  { q: "Ý nghĩa cốt lõi của việc quản lý tiền hiệu quả từ khi còn ngồi trên ghế nhà trường là:", opts: ["Tạo dựng thói quen chi tiêu tự chủ, tránh nợ nần và tiết kiệm tương lai", "Trở thành người keo kiệt không dám mua sắm gì", "Giúp học sinh có nhiều tiền để cho vay lấy lãi", "Đua đòi mua sắm đồ dùng đắt đỏ bằng bạn bằng bè"], ans: 0 },
  { q: "Thế nào là khoản chi tiêu cho thứ 'thực sự cần' (Need)?", opts: ["Sách giáo khoa, vở viết, đồ ăn dinh dưỡng phục vụ cuộc sống", "Đồ chơi mô hình phiên bản giới hạn đắt tiền", "Trang phục hàng hiệu mua để khoe bạn bè", "Nạp thẻ game để mua vật phẩm ảo"], ans: 0 },
  { q: "Quy tắc vàng khi nhận được tiền tiêu vặt hoặc tiền mừng tuổi là gì?", opts: ["Tiết kiệm một phần vào heo đất trước khi đem phần còn lại đi chi tiêu", "Có bao nhiêu tiêu sạch bấy nhiêu cho thỏa thích", "Bao bạn bè ăn uống liên hoan hết sạch ngay trong ngày", "Đem giấu đi không nói cho bố mẹ biết"], ans: 0 },
  { q: "Học sinh lớp 7 có thể tạo thêm thu nhập phù hợp bằng cách nào sau đây?", opts: ["Thu gom giấy vụn, ve chai tái chế và làm đồ thủ công", "Tham gia đánh bạc và cá độ qua mạng internet", "Bỏ học đi làm việc nặng nhọc tại công trường", "Vay nặng lãi để kinh doanh lớn"], ans: 0 },
  { q: "Tệ nạn xã hội là gì?", opts: ["Hiện tượng sai lệch chuẩn mực, vi phạm đạo đức và pháp luật", "Các trò chơi dân gian tổ chức trong ngày Tết", "Các phong trào thanh niên tình nguyện vì cộng đồng", "Những hoạt động thể thao đông người tham gia"], ans: 0 },
  { q: "Loại tệ nạn xã hội nào có tính chất hủy hoại sức khỏe và gây nghiện cực kỳ nguy hiểm?", opts: ["Tệ nạn ma túy", "Chơi cờ tướng", "Uống trà đá", "Sưu tầm tem thư"], ans: 0 },
  { q: "Hành vi nào sau đây bị coi là đánh bạc trái pháp luật?", opts: ["Chơi bài tú lơ khơ ăn tiền hoặc cá độ bóng đá lấy tiền", "Chơi cờ vua thi đấu giành huy chương", "Chơi ô ăn quan cùng bạn bè giờ ra chơi", "Chơi đá cầu tính điểm rèn luyện thân thể"], ans: 0 },
  { q: "Thuốc lá điện tử hiện nay nguy hiểm vì lý do nào sau đây?", opts: ["Có thể bị kẻ xấu tẩm ướp tinh dầu ma túy và chất gây nghiện cực độc", "Có mùi hương thơm hoa quả rất dễ chịu", "Có thiết kế nhỏ gọn trông giống cây bút", "Không gây nghiện cho lứa tuổi học sinh"], ans: 0 },
  { q: "Gia đình được coi là gì trong cấu trúc xã hội?", opts: ["Tế bào của xã hội", "Một đơn vị kinh doanh cá thể độc lập", "Một nhóm bạn bè cùng sở thích", "Một cơ quan hành chính nhà nước"], ans: 0 },
  { q: "Mối quan hệ nào sau đây làm phát sinh quyền và nghĩa vụ trong gia đình?", opts: ["Quan hệ hôn nhân, huyết thống hoặc quan hệ nuôi dưỡng", "Quan hệ bạn bè cùng lớp", "Quan hệ đồng nghiệp cùng cơ quan", "Quan hệ người mua và người bán hàng"], ans: 0 },
  { q: "Trong gia đình, vợ và chồng có quyền và nghĩa vụ như thế nào đối với nhau?", opts: ["Bình đẳng, tôn trọng danh dự nhân phẩm và cùng chia sẻ việc nhà", "Chồng có toàn quyền quyết định mọi việc, vợ phải nghe theo", "Vợ có quyền quản lý toàn bộ tài sản và cấm đoán chồng", "Mạnh ai nấy sống, không cần quan tâm đến nhau"], ans: 0 },
  { q: "Nghĩa vụ hàng đầu của cha mẹ đối với con cái theo Luật Hôn nhân và Gia đình là:", opts: ["Chăm sóc, nuôi dưỡng, giáo dục và bảo vệ quyền lợi hợp pháp của con", "Bắt con cái phải làm việc kiếm tiền từ nhỏ để trả ơn", "Phân biệt đối xử giữa con trai và con gái", "Có quyền đánh đập xúc phạm khi con phạm lỗi"], ans: 0 },
  { q: "Bổn phận thiêng liêng của con cái đối với ông bà, cha mẹ là gì?", opts: ["Kính trọng, biết ơn, hiếu thảo và phụng dưỡng khi già yếu", "Đòi hỏi bố mẹ phải mua cho những thứ đắt tiền nhất", "Bỏ mặc cha mẹ khi về già vì đó là việc của nhà nước", "Chỉ nghe lời khi cha mẹ cho nhiều tiền"], ans: 0 },
  { q: "Hành vi cha mẹ bắt con 13 tuổi nghỉ học đi làm phụ hồ bốc vác là hành vi gì?", opts: ["Vi phạm pháp luật về bảo vệ quyền trẻ em", "Hành vi hoàn toàn hợp pháp và đáng khuyến khích", "Quyền tự do nuôi dạy con riêng của gia đình", "Biểu hiện của tình thương dạy con tự lập sớm"], ans: 0 },
  { q: "Khi gia đình xảy ra mâu thuẫn bạo lực nghiêm trọng, em có thể gọi đến đâu để cầu cứu?", opts: ["Tổng đài 111 hoặc Công an phường/xã số 113", "Gọi số báo thời tiết", "Gọi tổng đài tư vấn du lịch", "Không được báo ai vì sợ xấu hổ"], ans: 0 },
  { q: "Phương châm sống đúng đắn của công dân trẻ tuổi trước tệ nạn xã hội là:", opts: ["Kiên quyết nói 'KHÔNG' với mọi cám dỗ và sống lành mạnh", "Thử một lần cho biết rồi từ bỏ sau", "Nếu bạn bè rủ rê thì cũng nên tham gia cho vui", "Im lặng khi thấy người khác buôn bán ma túy"], ans: 0 },
  { q: "Di sản Tràng An (Ninh Bình) thuộc loại di sản nào được UNESCO công nhận?", opts: ["Di sản thế giới hỗn hợp (cả văn hóa và thiên nhiên)", "Chỉ là di sản văn hóa phi vật thể", "Di tích khảo cổ học đơn lẻ", "Lễ hội truyền thống địa phương"], ans: 0 },
  { q: "Giữ chữ tín trong học tập và rèn luyện thể hiện rõ nhất qua việc gì?", opts: ["Nói đi đôi với làm, trung thực trong thi cử và thực hiện đúng lời hứa", "Hứa với thầy cô nhưng quay cóp tài liệu khi thi", "Điểm danh hộ cho bạn trốn học", "Nhận chức lớp trưởng nhưng bỏ bê nhiệm vụ"], ans: 0 }
];

// Generate Mindmap SVG for each lesson
function generateLessonMindmapSvg(l) {
  const n1 = l.svgNodes[0];
  const n2 = l.svgNodes[1];
  const n3 = l.svgNodes[2];

  return `
    <svg viewBox="0 0 650 130" class="w-full max-w-2xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g_${l.id}_1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${n1.color}"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
        <linearGradient id="g_${l.id}_2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${n2.color}"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
        <linearGradient id="g_${l.id}_3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${n3.color}"/>
          <stop offset="100%" stop-color="#111827"/>
        </linearGradient>
      </defs>
      
      <!-- Node 1 -->
      <rect x="15" y="20" width="185" height="90" rx="12" fill="url(#g_${l.id}_1)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"/>
      <text x="107" y="44" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">${n1.title}</text>
      <text x="107" y="64" fill="#93c5fd" font-size="8.5" text-anchor="middle">${n1.desc.substring(0, 32)}</text>
      <text x="107" y="82" fill="#bfdbfe" font-size="8" text-anchor="middle">${n1.desc.substring(32, 60) || "Định hướng chuẩn mực"}</text>

      <!-- Arrow 1 -->
      <path d="M 205 65 L 235 65" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="235,60 243,65 235,70" fill="#3b82f6"/>

      <!-- Node 2 -->
      <rect x="245" y="20" width="200" height="90" rx="12" fill="url(#g_${l.id}_2)" stroke="${n2.color}" stroke-width="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"/>
      <text x="345" y="44" fill="#facc15" font-size="10.5" font-weight="bold" text-anchor="middle">${n2.title}</text>
      <text x="345" y="64" fill="#ffffff" font-size="8.5" text-anchor="middle">${n2.desc.substring(0, 33)}</text>
      <text x="345" y="82" fill="#cbd5e1" font-size="8" text-anchor="middle">${n2.desc.substring(33, 62) || "Hành vi chuẩn tắc"}</text>

      <!-- Arrow 2 -->
      <path d="M 450 65 L 480 65" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="480,60 488,65 480,70" fill="#3b82f6"/>

      <!-- Node 3 -->
      <rect x="490" y="20" width="145" height="90" rx="12" fill="url(#g_${l.id}_3)" stroke="${n3.color}" stroke-width="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"/>
      <text x="562" y="44" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">${n3.title}</text>
      <text x="562" y="64" fill="#ffffff" font-size="8.5" text-anchor="middle">${n3.desc.substring(0, 24)}</text>
      <text x="562" y="82" fill="#a7f3d0" font-size="8" text-anchor="middle">${n3.desc.substring(24, 46) || "Rèn luyện nhân cách"}</text>
    </svg>
  `;
}

// Render All Lessons HTML
function renderLessons() {
  let quizGlobalIdx = 0;

  return lessonsData.map((l, idx) => {
    // Content sections
    const contentHtml = l.contentSections.map(sec => `
      <div class="p-4 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700/80 space-y-2">
        <h5 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid ${sec.icon} text-blue-600 dark:text-blue-400"></i> ${sec.title}
        </h5>
        ${sec.text ? `<p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">${sec.text}</p>` : ''}
        ${sec.items ? `
          <ul class="space-y-1.5 pl-2 text-xs text-gray-700 dark:text-gray-300">
            ${sec.items.map(it => `<li class="flex items-start gap-2"><span class="text-blue-500 font-bold">&bull;</span><span>${it}</span></li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `).join('');

    // Quizzes HTML
    const quizzesHtml = l.quizzes.map(q => {
      const qId = quizGlobalIdx++;
      return `
        <div class="p-4 rounded-xl bg-amber-50/60 dark:bg-gray-800/80 border border-amber-200 dark:border-amber-900/40 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-black text-amber-800 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <i class="fa-solid fa-circle-question text-amber-500"></i> Câu hỏi rèn luyện nhận thức
            </span>
            <span class="text-[11px] text-gray-400 font-medium">Tự chấm điểm ngay</span>
          </div>
          <p class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-snug">${q.q}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="quiz-options-${qId}">
            ${q.opts.map((opt, oIdx) => `
              <button onclick="checkQuizAnswer(${qId}, ${oIdx}, ${q.ans}, '${q.explain.replace(/'/g, "\\'")}')" 
                      class="quiz-btn-${qId} text-left p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 hover:border-blue-400 text-xs text-gray-800 dark:text-gray-200 transition flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 font-bold text-[10px] flex items-center justify-center flex-shrink-0">${String.fromCharCode(65 + oIdx)}</span>
                <span>${opt}</span>
              </button>
            `).join('')}
          </div>
          <div id="quiz-feedback-${qId}" class="hidden p-3 rounded-lg text-xs leading-relaxed"></div>
        </div>
      `;
    }).join('');

    // Badge styling
    let badgeColor = 'bg-blue-600';
    if (l.machTag === 'Kĩ năng sống') badgeColor = 'bg-emerald-600';
    else if (l.machTag === 'Kinh tế') badgeColor = 'bg-amber-600';
    else if (l.machTag === 'Pháp luật') badgeColor = 'bg-rose-600';

    return `
      <!-- ==================== BÀI ${l.num}: ${l.title} ==================== -->
      <section id="${l.id}" class="lesson-section scroll-mt-24 p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200/80 dark:border-gray-800 shadow-sm transition hover:shadow-md mb-8" data-mach="${l.machTag}">
        
        <!-- Header Unit -->
        <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-gray-100 dark:border-gray-800">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg ${badgeColor} text-white font-black text-xs uppercase tracking-wider">${l.machTag}</span>
            <span class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold text-xs border border-blue-200 dark:border-blue-800">
              ${l.mach}
            </span>
          </div>
          <span class="text-xs font-bold text-gray-400">Bài ${l.num} / ${lessonsData.length}</span>
        </div>

        <div class="mb-3">
          <h3 class="text-lg sm:text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-scale-balanced text-blue-600 dark:text-blue-400"></i> Bài ${l.num}: ${l.title}
          </h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 italic mt-0.5">${l.subtitle}</p>
        </div>

        <!-- Sơ đồ tư duy trực quan SVG -->
        <div class="my-4 p-4 rounded-xl bg-gradient-to-br from-blue-50/40 via-indigo-50/20 to-sky-50/30 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 border border-blue-100 dark:border-blue-900/40">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
              <i class="fa-solid fa-diagram-project"></i> Sơ đồ tư duy cốt lõi • Bài ${l.num}: ${l.title}
            </span>
            <span class="text-[11px] text-gray-400 font-medium">GDCD 7 • GDPT 2018</span>
          </div>
          <div class="w-full overflow-x-auto py-1">
            ${generateLessonMindmapSvg(l)}
          </div>
        </div>

        <!-- Nội dung kiến thức cốt lõi -->
        <div class="my-5 space-y-3">
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <i class="fa-solid fa-book-open-reader text-blue-600"></i> Nội Dung Kiến Thức Cốt Lõi SGK
          </h4>
          ${contentHtml}
        </div>

        <!-- Tình huống thực tế & Kĩ năng ứng xử -->
        <div class="my-5 p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 space-y-2">
          <div class="flex items-center gap-2 text-indigo-900 dark:text-indigo-300 font-bold text-xs uppercase tracking-wider">
            <i class="fa-solid fa-lightbulb text-amber-500 text-sm"></i> ${l.situation.title}
          </div>
          <p class="text-xs text-gray-800 dark:text-gray-200 italic leading-relaxed">"${l.situation.desc}"</p>
          <div class="p-3 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-indigo-100 dark:border-indigo-900/60 text-xs text-indigo-900 dark:text-indigo-300">
            <strong><i class="fa-solid fa-circle-check text-emerald-500 mr-1"></i> Giải pháp chuẩn mực:</strong> ${l.situation.solution}
          </div>
        </div>

        <!-- Trắc nghiệm củng cố -->
        <div class="my-5 space-y-3">
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <i class="fa-solid fa-circle-check text-emerald-500"></i> Bài Tập Củng Cố Nhận Thức &amp; Tình Huống
          </h4>
          ${quizzesHtml}
        </div>

      </section>
    `;
  }).join('');
}

// Sidebar Navigation
function renderSidebarNav() {
  return lessonsData.map(l => {
    let tagColor = "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300";
    if (l.machTag === 'Kĩ năng sống') tagColor = "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300";
    else if (l.machTag === 'Kinh tế') tagColor = "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300";
    else if (l.machTag === 'Pháp luật') tagColor = "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300";

    return `
      <a href="#${l.id}" class="nav-lesson-item flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 transition group" data-mach="${l.machTag}">
        <div class="flex items-center gap-2 overflow-hidden">
          <span class="w-7 h-6 rounded-md ${tagColor} text-[10px] font-black flex items-center justify-center flex-shrink-0">
            B.${l.num}
          </span>
          <span class="truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">${l.title}</span>
        </div>
        <span class="text-[10px] font-mono text-gray-400 flex-shrink-0">${l.machTag.substring(0, 4)}</span>
      </a>
    `;
  }).join('');
}

// Client-side script string
const clientScript = `
  let totalQuizzes = 20;
  let answeredQuizzes = new Set();

  // Filter lessons by Mach
  function filterNavMach(mach) {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active', 'bg-blue-600', 'text-white');
      b.classList.add('bg-gray-100', 'dark:bg-gray-800', 'text-gray-600', 'dark:text-gray-300');
    });
    event.target.classList.add('active', 'bg-blue-600', 'text-white');
    event.target.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'text-gray-600', 'dark:text-gray-300');

    document.querySelectorAll('.nav-lesson-item').forEach(item => {
      if (mach === 'all' || item.getAttribute('data-mach') === mach) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });

    document.querySelectorAll('.lesson-section').forEach(sec => {
      if (mach === 'all' || sec.getAttribute('data-mach') === mach) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
  }

  // Check Quiz Answer
  function checkQuizAnswer(qId, selectedIdx, correctIdx, explanation) {
    const optionsContainer = document.getElementById('quiz-options-' + qId);
    const feedbackBox = document.getElementById('quiz-feedback-' + qId);
    const buttons = optionsContainer.querySelectorAll('.quiz-btn-' + qId);

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      btn.classList.remove('hover:border-blue-400');
      if (idx === correctIdx) {
        btn.classList.add('bg-emerald-50', 'dark:bg-emerald-950/60', 'border-emerald-500', 'text-emerald-700', 'dark:text-emerald-300', 'font-bold');
      } else if (idx === selectedIdx) {
        btn.classList.add('bg-rose-50', 'dark:bg-rose-950/60', 'border-rose-500', 'text-rose-700', 'dark:text-rose-300');
      }
    });

    feedbackBox.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-200', 'bg-rose-50', 'text-rose-800', 'border-rose-200');
    feedbackBox.classList.add('border');

    if (selectedIdx === correctIdx) {
      feedbackBox.classList.add('bg-emerald-50', 'dark:bg-emerald-950/40', 'text-emerald-800', 'dark:text-emerald-300', 'border-emerald-200', 'dark:border-emerald-800');
      feedbackBox.innerHTML = '<strong><i class=\"fa-solid fa-circle-check text-emerald-600 mr-1\"></i> Chính xác!</strong> ' + explanation;
    } else {
      feedbackBox.classList.add('bg-rose-50', 'dark:bg-rose-950/40', 'text-rose-800', 'dark:text-rose-300', 'border-rose-200', 'dark:border-rose-800');
      feedbackBox.innerHTML = '<strong><i class=\"fa-solid fa-circle-xmark text-rose-600 mr-1\"></i> Chưa đúng!</strong> ' + explanation;
    }

    if (!answeredQuizzes.has(qId)) {
      answeredQuizzes.add(qId);
      const percent = Math.min(100, Math.round((answeredQuizzes.size / totalQuizzes) * 100));
      document.getElementById('progress-bar').style.width = percent + '%';
      document.getElementById('progress-percent').textContent = percent + '%';
      document.getElementById('answered-count').textContent = answeredQuizzes.size;
    }
  }

  // Modals Handling
  function openLawModal() {
    document.getElementById('lawModal').classList.remove('hidden');
  }
  function closeLawModal() {
    document.getElementById('lawModal').classList.add('hidden');
  }

  function openSkillModal() {
    document.getElementById('skillModal').classList.remove('hidden');
  }
  function closeSkillModal() {
    document.getElementById('skillModal').classList.add('hidden');
  }

  function openHotlineModal() {
    document.getElementById('hotlineModal').classList.remove('hidden');
  }
  function closeHotlineModal() {
    document.getElementById('hotlineModal').classList.add('hidden');
  }

  // Exam Logic (40 questions, 60 minutes)
  const examData = ${JSON.stringify(examQuestions)};
  let examTimerInterval = null;
  let examTimeRemaining = 3600; // 60 mins
  let userAnswers = {};

  function openExamModal() {
    document.getElementById('examModal').classList.remove('hidden');
    renderExamQuestions();
    startExamTimer();
  }

  function closeExamModal() {
    document.getElementById('examModal').classList.add('hidden');
    clearInterval(examTimerInterval);
  }

  function startExamTimer() {
    clearInterval(examTimerInterval);
    examTimeRemaining = 3600;
    updateTimerDisplay();
    examTimerInterval = setInterval(() => {
      examTimeRemaining--;
      updateTimerDisplay();
      if (examTimeRemaining <= 0) {
        clearInterval(examTimerInterval);
        submitExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(examTimeRemaining / 60);
    const secs = examTimeRemaining % 60;
    document.getElementById('exam-timer').textContent = 
      String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
  }

  function renderExamQuestions() {
    userAnswers = {};
    const container = document.getElementById('exam-questions-list');
    document.getElementById('exam-result-view').classList.add('hidden');
    container.classList.remove('hidden');
    document.getElementById('exam-submit-btn').classList.remove('hidden');

    container.innerHTML = examData.map((item, idx) => {
      return '<div class=\"p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 space-y-2\">' +
        '<div class=\"font-bold text-gray-900 dark:text-white text-xs sm:text-sm flex items-start gap-2\">' +
          '<span class=\"px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-black\">Câu ' + (idx + 1) + '</span>' +
          '<span>' + item.q + '</span>' +
        '</div>' +
        '<div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1\">' +
          item.opts.map((opt, oIdx) => {
            return '<label class=\"exam-opt flex items-center gap-2 p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850 cursor-pointer hover:border-blue-400 text-xs text-gray-700 dark:text-gray-300\">' +
              '<input type=\"radio\" name=\"exam_q_' + idx + '\" value=\"' + oIdx + '\" onchange=\"recordExamAnswer(' + idx + ', ' + oIdx + ')\" class=\"accent-blue-600\">' +
              '<span>' + opt + '</span>' +
            '</label>';
          }).join('') +
        '</div>' +
      '</div>';
    }).join('');
    updateExamStatus();
  }

  function recordExamAnswer(qIdx, optIdx) {
    userAnswers[qIdx] = optIdx;
    updateExamStatus();
  }

  function updateExamStatus() {
    const answered = Object.keys(userAnswers).length;
    document.getElementById('exam-status-text').textContent = 'Đã chọn ' + answered + '/' + examData.length + ' câu';
  }

  function submitExam() {
    clearInterval(examTimerInterval);
    let correctCount = 0;
    examData.forEach((item, idx) => {
      if (userAnswers[idx] === item.ans) {
        correctCount++;
      }
    });

    const score = (correctCount / examData.length) * 10;
    document.getElementById('exam-questions-list').classList.add('hidden');
    document.getElementById('exam-submit-btn').classList.add('hidden');

    const resultView = document.getElementById('exam-result-view');
    resultView.classList.remove('hidden');
    document.getElementById('exam-final-score').innerHTML = 
      'Điểm số của bạn: <span class=\"text-2xl font-black text-blue-600 dark:text-blue-400\">' + score.toFixed(1) + ' / 10</span> (' + correctCount + '/' + examData.length + ' câu đúng)';
    
    let rank = 'Khá';
    if (score >= 9) rank = 'Trạng Nguyên Công Dân 7 Xuất Sắc';
    else if (score >= 8) rank = 'Bảng Nhãn Công Dân 7 Giỏi';
    else if (score >= 6.5) rank = 'Thám Hoa Công Dân 7 Tiên Tiến';
    document.getElementById('exam-final-rank').textContent = rank;
  }

  // Live search
  document.getElementById('lessonSearchInput').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.lesson-section').forEach(sec => {
      const text = sec.innerText.toLowerCase();
      if (!term || text.includes(term)) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
  });

  // Dark mode toggle
  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('codehub_theme', isDark ? 'dark' : 'light');
  }

  // Restore dark mode
  if (localStorage.getItem('codehub_theme') === 'dark' || (!localStorage.getItem('codehub_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
`;

// Full HTML Document
const fullHtml = `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khóa Học Giáo Dục Công Dân 7 (GDPT 2018: 4 Mạch • 10 Bài Học • Hotline 111 • Trạng Nguyên 60:00) | CodeHub</title>
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            blue: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
              950: '#172554'
            },
            gray: {
              750: '#262f3f',
              850: '#151b28',
              950: '#0b0f19'
            }
          }
        }
      }
    };
  </script>

  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- FontAwesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <meta name="codehub-activity-name" content="Khóa Học Giáo Dục Công Dân Lớp 7">

  <style>
    body { font-family: 'Inter', sans-serif; }
    .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(156, 163, 175, 0.4); border-radius: 9999px; }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(156, 163, 175, 0.6); }
  </style>
</head>
<body class="bg-slate-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen antialiased transition-colors duration-200">

  <!-- ==================== STICKY HEADER ==================== -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
      
      <!-- Brand & Back Button (Về trang chính) -->
      <div class="flex items-center gap-3">
        <a href="../index.html" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Về trang chính CodeHub">
          <i class="fa-solid fa-arrow-left text-sm"></i>
        </a>
        <a href="../index.html" class="flex items-center gap-2.5 group" title="Về trang chính CodeHub">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-blue-500/20 font-black text-sm group-hover:scale-105 transition">
            <i class="fa-solid fa-scale-balanced text-base"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">CodeHub THCS</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">KNTT</span>
            </div>
            <h1 class="text-sm sm:text-base font-black text-gray-900 dark:text-white leading-tight">
              GIÁO DỤC CÔNG DÂN 7 <span class="text-xs font-normal text-gray-500 dark:text-gray-400 hidden sm:inline">&bull; GDPT 2018</span>
            </h1>
          </div>
        </a>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Hotline Cứu Hộ Modal Button -->
        <button onclick="openHotlineModal()" class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 text-xs font-bold border border-rose-200 dark:border-rose-800 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-phone-volume text-rose-600 dark:text-rose-400 animate-pulse"></i>
          <span class="hidden md:inline">Hotline 111</span>
        </button>

        <!-- Sổ Tay Luật & Quyền Modal Button -->
        <button onclick="openLawModal()" class="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/60 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-gavel text-blue-600 dark:text-blue-400"></i>
          <span class="hidden md:inline">Sổ Tay Pháp Luật</span>
        </button>

        <!-- Cẩm Nang Kĩ Năng Sống Modal Button -->
        <button onclick="openSkillModal()" class="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-brain text-emerald-600 dark:text-emerald-400"></i>
          <span class="hidden md:inline">Kĩ Năng Sống</span>
        </button>

        <!-- Trạng Nguyên 60:00 Button -->
        <button onclick="openExamModal()" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-black shadow-md shadow-blue-500/20 transition flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-trophy text-amber-300"></i>
          <span>Trạng Nguyên (60:00)</span>
        </button>

        <!-- Theme Toggle -->
        <button onclick="toggleDarkMode()" class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition" title="Chuyển chế độ sáng/tối">
          <i class="fa-solid fa-moon dark:hidden"></i>
          <i class="fa-solid fa-sun hidden dark:inline text-amber-400"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- ==================== HERO BANNER ==================== -->
  <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white py-10 sm:py-14 border-b border-indigo-900/40">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="absolute -right-20 -top-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -left-20 -bottom-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="space-y-3 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wide">
            <i class="fa-solid fa-star text-amber-400"></i>
            <span>GDPT 2018 &bull; KẾT NỐI TRI THỨC VỚI CUỘC SỐNG &bull; 4 MẠCH NỘI DUNG</span>
          </div>
          <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Khóa Học Giáo Dục Công Dân Lớp 7
          </h2>
          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
            Hệ thống hóa toàn bộ 4 mạch nội dung: Giáo dục Đạo đức, Kĩ năng sống, Kinh tế và Pháp luật; trọn vẹn 10 bài học chuẩn SGK GDCD 7 Kết nối tri thức. Tích hợp 10 sơ đồ tư duy trực quan SVG, xử lý tình huống thực tế, ngân hàng trắc nghiệm tự chấm điểm và đấu trường Trạng Nguyên 60:00.
          </p>
          
          <!-- Chips -->
          <div class="flex flex-wrap items-center gap-2 pt-2">
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-layer-group text-blue-400 mr-1"></i> 4 Mạch nội dung
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-book-open text-indigo-400 mr-1"></i> 10 Bài học cốt lõi
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-diagram-project text-cyan-400 mr-1"></i> 10 Sơ đồ tư duy SVG
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-lightbulb text-amber-400 mr-1"></i> 10 Tình huống thực tế
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <i class="fa-solid fa-circle-check text-emerald-400 mr-1"></i> 20 Trắc nghiệm tự chấm
            </span>
            <span class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <i class="fa-solid fa-award mr-1"></i> Đấu trường 60:00
            </span>
          </div>
        </div>

        <!-- Quick Mach Summary Cards -->
        <div class="grid grid-cols-2 gap-2.5 w-full lg:w-80 flex-shrink-0">
          <div class="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-0.5">
            <span class="text-[10px] font-black uppercase text-blue-400">MẠCH 1: ĐẠO ĐỨC</span>
            <div class="text-xs font-bold text-white">Bài 1 &ndash; Bài 5</div>
            <p class="text-[10px] text-gray-400">Truyền thống, chữ tín, di sản...</p>
          </div>
          <div class="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-0.5">
            <span class="text-[10px] font-black uppercase text-emerald-400">MẠCH 2: KĨ NĂNG</span>
            <div class="text-xs font-bold text-white">Bài 6 &ndash; Bài 7</div>
            <p class="text-[10px] text-gray-400">Ứng phó stress, chống bạo lực</p>
          </div>
          <div class="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-0.5">
            <span class="text-[10px] font-black uppercase text-amber-400">MẠCH 3: KINH TẾ</span>
            <div class="text-xs font-bold text-white">Bài 8</div>
            <p class="text-[10px] text-gray-400">Kĩ năng quản lý tiền thông minh</p>
          </div>
          <div class="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-0.5">
            <span class="text-[10px] font-black uppercase text-rose-400">MẠCH 4: PHÁP LUẬT</span>
            <div class="text-xs font-bold text-white">Bài 9 &ndash; Bài 10</div>
            <p class="text-[10px] text-gray-400">Phòng tệ nạn, quyền gia đình</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== MAIN CONTAINER ==================== -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      
      <!-- ==================== LEFT STICKY SIDEBAR ==================== -->
      <aside class="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-20 space-y-5">
        <div class="bg-white dark:bg-gray-850 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
          
          <!-- Search box -->
          <div class="relative">
            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
            <input type="text" id="lessonSearchInput" placeholder="Tìm kiếm bài học, khái niệm..." class="w-full pl-8 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition">
          </div>

          <!-- Tiến độ bài học -->
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700 space-y-2">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-gray-700 dark:text-gray-300">Tiến độ củng cố</span>
              <span id="progress-percent" class="font-mono font-bold text-blue-600 dark:text-blue-400">0%</span>
            </div>
            <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div id="progress-bar" class="h-full bg-gradient-to-r from-blue-600 to-indigo-500 w-0 transition-all duration-300"></div>
            </div>
            <div class="flex justify-between text-[11px] text-gray-500 dark:text-gray-400">
              <span>Đã làm: <b id="answered-count">0</b>/20 câu</span>
              <span>10 bài học</span>
            </div>
          </div>

          <!-- Bộ lọc mạch kiến thức -->
          <div class="space-y-1.5">
            <div class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Bộ Lọc 4 Mạch</div>
            <div class="grid grid-cols-2 gap-1 text-[11px]">
              <button onclick="filterNavMach('all')" class="filter-btn active py-1.5 rounded-lg bg-blue-600 text-white font-bold transition">Tất cả</button>
              <button onclick="filterNavMach('Đạo đức')" class="filter-btn py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-600 dark:text-gray-300 font-bold transition">Đạo đức</button>
              <button onclick="filterNavMach('Kĩ năng sống')" class="filter-btn py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-600 dark:text-gray-300 font-bold transition">Kĩ năng</button>
              <button onclick="filterNavMach('Kinh tế')" class="filter-btn py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-600 dark:text-gray-300 font-bold transition">Kinh tế</button>
              <button onclick="filterNavMach('Pháp luật')" class="filter-btn col-span-2 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-600 dark:text-gray-300 font-bold transition">Pháp luật</button>
            </div>
          </div>

          <!-- Danh sách bài học -->
          <div class="space-y-1 max-h-[45vh] overflow-y-auto custom-scrollbar pr-1" id="sidebar-nav-list">
            ${renderSidebarNav()}
          </div>

          <!-- CTA Trạng Nguyên 60:00 -->
          <div class="p-3.5 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-teal-600 text-white text-center space-y-2 shadow-md">
            <div class="text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-trophy text-amber-300"></i> Đấu Trường Trạng Nguyên
            </div>
            <p class="text-[11px] text-blue-100 leading-tight">40 câu trắc nghiệm tổng hợp &bull; Thời gian làm bài 60:00</p>
            <button onclick="openExamModal()" class="w-full py-1.5 rounded-lg bg-white text-blue-700 hover:bg-blue-50 text-xs font-black shadow transition">
              Vào Thi Ngay
            </button>
          </div>

        </div>
      </aside>

      <!-- ==================== MAIN CONTENT: 10 LESSONS ==================== -->
      <div class="flex-1 min-w-0 space-y-6">
        ${renderLessons()}
      </div>

    </div>
  </main>

  <!-- ==================== MODALS ==================== -->

  <!-- Modal 1: Hotline Bảo Vệ Khẩn Cấp -->
  <div id="hotlineModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-lg w-full p-5 shadow-2xl border border-gray-200 dark:border-gray-800 space-y-4">
      <div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600 flex items-center justify-center">
            <i class="fa-solid fa-phone-volume"></i>
          </div>
          <h3 class="font-bold text-sm sm:text-base text-gray-900 dark:text-white">ĐƯỜNG DÂY NÓNG CỨU HỘ &amp; BẢO VỆ</h3>
        </div>
        <button onclick="closeHotlineModal()" class="w-7 h-7 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-gray-400">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="space-y-3 text-xs">
        <a href="tel:111" class="flex items-center justify-between p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 hover:scale-[1.02] transition">
          <div class="flex items-center gap-3">
            <span class="text-2xl font-black text-rose-600 font-mono">111</span>
            <div>
              <div class="font-bold text-gray-900 dark:text-white">Tổng Đài Quốc Gia Bảo Vệ Trẻ Em</div>
              <div class="text-[11px] text-gray-500 dark:text-gray-400">Trực 24/7 &bull; Miễn phí cước gọi &bull; Báo cáo bạo lực, xâm hại</div>
            </div>
          </div>
          <i class="fa-solid fa-phone text-rose-600"></i>
        </a>

        <a href="tel:113" class="flex items-center justify-between p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 hover:scale-[1.02] transition">
          <div class="flex items-center gap-3">
            <span class="text-2xl font-black text-blue-600 font-mono">113</span>
            <div>
              <div class="font-bold text-gray-900 dark:text-white">Cảnh Sát Phản Ứng Nhanh</div>
              <div class="text-[11px] text-gray-500 dark:text-gray-400">Báo cáo tội phạm, đánh nhau, tệ nạn xã hội</div>
            </div>
          </div>
          <i class="fa-solid fa-phone text-blue-600"></i>
        </a>

        <a href="tel:114" class="flex items-center justify-between p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 hover:scale-[1.02] transition">
          <div class="flex items-center gap-3">
            <span class="text-2xl font-black text-amber-600 font-mono">114</span>
            <div>
              <div class="font-bold text-gray-900 dark:text-white">Cứu Hỏa &amp; Cứu Nạn Cứu Hộ</div>
              <div class="text-[11px] text-gray-500 dark:text-gray-400">Cháy nổ, đuối nước, sạt lở tai nạn</div>
            </div>
          </div>
          <i class="fa-solid fa-phone text-amber-600"></i>
        </a>

        <a href="tel:115" class="flex items-center justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 hover:scale-[1.02] transition">
          <div class="flex items-center gap-3">
            <span class="text-2xl font-black text-emerald-600 font-mono">115</span>
            <div>
              <div class="font-bold text-gray-900 dark:text-white">Cấp Cứu Y Tế</div>
              <div class="text-[11px] text-gray-500 dark:text-gray-400">Tai nạn thương tích, ngộ độc, cấp cứu khẩn cấp</div>
            </div>
          </div>
          <i class="fa-solid fa-phone text-emerald-600"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- Modal 2: Sổ Tay Pháp Luật GDCD 7 -->
  <div id="lawModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-blue-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold">
            <i class="fa-solid fa-gavel"></i>
          </div>
          <div>
            <h3 class="font-bold text-sm sm:text-base">SỔ TAY PHÁP LUẬT DÀNH CHO HỌC SINH LỚP 7</h3>
            <p class="text-[11px] text-blue-100">Các quy định trọng yếu của Luật Di sản, Luật Trẻ em &amp; Luật Hôn nhân gia đình</p>
          </div>
        </div>
        <button onclick="closeLawModal()" class="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center text-white">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm">
        <div class="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 space-y-2">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 flex items-center gap-2">
            <i class="fa-solid fa-scale-balanced"></i> 1. Luật Di sản văn hoá (Sửa đổi, bổ sung)
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            &bull; Mọi di sản văn hóa trong lòng đất, đáy nước đều thuộc sở hữu toàn dân do Nhà nước đại diện quản lý.<br>
            &bull; Nghiêm cấm mua bán cổ vật trái phép ra nước ngoài; nghiêm cấm bôi vẽ, hủy hoại các di tích danh lam thắng cảnh.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900 space-y-2">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
            <i class="fa-solid fa-child-reaching"></i> 2. Luật Trẻ em 2016
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            &bull; Trẻ em có quyền được bảo vệ tính mạng, thân thể, nhân phẩm và danh dự; quyền được học tập và phát triển toàn diện.<br>
            &bull; Nghiêm cấm bạo lực học đường, bóc lột sức lao động của trẻ em; nghiêm cấm ép buộc trẻ em nghỉ học sớm.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 space-y-2">
          <h4 class="font-bold text-rose-900 dark:text-rose-300 flex items-center gap-2">
            <i class="fa-solid fa-shield-virus"></i> 3. Luật Phòng, chống ma túy
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            &bull; Nghiêm cấm hành vi sử dụng, tàng trữ, mua bán, vận chuyển các chất ma túy dưới mọi hình thức (kể cả bóng cười, thuốc lá điện tử chứa chất cấm).<br>
            &bull; Người vi phạm tùy mức độ sẽ bị xử phạt hành chính, đưa vào cơ sở cai nghiện bắt buộc hoặc truy cứu trách nhiệm hình sự.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 space-y-2">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-people-roof"></i> 4. Luật Hôn nhân và gia đình 2014
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300">
            &bull; Vợ chồng bình đẳng về quyền và nghĩa vụ; cùng chia sẻ việc nhà và chăm sóc con cái.<br>
            &bull; Cha mẹ có nghĩa vụ nuôi dưỡng, giáo dục con; con cái có nghĩa vụ yêu thương, kính trọng và hiếu thảo phụng dưỡng cha mẹ.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 3: Cẩm Nang Kĩ Năng Sống -->
  <div id="skillModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-emerald-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold">
            <i class="fa-solid fa-brain"></i>
          </div>
          <div>
            <h3 class="font-bold text-sm sm:text-base">CẨM NANG KĨ NĂNG SỐNG &amp; ỨNG PHÓ THỬ THÁCH</h3>
            <p class="text-[11px] text-emerald-100">Kĩ năng giải tỏa stress &bull; Tự vệ bạo lực &bull; Quản lý tài chính</p>
          </div>
        </div>
        <button onclick="closeSkillModal()" class="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center text-white">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm">
        <div class="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 space-y-2">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
            <i class="fa-solid fa-lungs"></i> 1. Kĩ Thuật Hít Thở 4-7-8 Giải Tỏa Căng Thẳng
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            &bull; <strong>Bước 1:</strong> Thở hết không khí ra khỏi phổi bằng miệng.<br>
            &bull; <strong>Bước 2:</strong> Ngậm miệng lại, hít vào từ từ bằng mũi trong <strong>4 giây</strong>.<br>
            &bull; <strong>Bước 3:</strong> Giữ hơi thở lại trong <strong>7 giây</strong>.<br>
            &bull; <strong>Bước 4:</strong> Thở ra hoàn toàn bằng miệng trong <strong>8 giây</strong>. Lặp lại 4 chu kỳ giúp nhịp tim ổn định và tâm trí bình tĩnh ngay lập tức.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 space-y-2">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 flex items-center gap-2">
            <i class="fa-solid fa-shield-halved"></i> 2. Kĩ Năng Tự Vệ 3 Bước Trước Bạo Lực Học Đường
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            &bull; <strong>Trước:</strong> Tránh đi vào ngõ tối vắng người một mình; luôn đi cùng nhóm bạn; giữ thái độ bình tĩnh, nhã nhặn.<br>
            &bull; <strong>Trong:</strong> Bình tĩnh tìm kế hoãn binh; quan sát nhanh cửa thoát hiểm; hô to kêu cứu ('Cháy! Cứu với!') để thu hút sự trợ giúp.<br>
            &bull; <strong>Sau:</strong> Tuyệt đối không giữ im lặng; thông báo ngay cho ban giám hiệu, bố mẹ hoặc gọi tổng đài 111.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 space-y-2">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
            <i class="fa-solid fa-piggy-bank"></i> 3. Nguyên Tắc Quản Lý Tiền Học Trò
          </h4>
          <p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            &bull; <strong>Tiết kiệm trước:</strong> Dành 30-50% tiền tiêu vặt hoặc tiền mừng tuổi bỏ vào ống heo tiết kiệm.<br>
            &bull; <strong>Chi tiêu thiết yếu:</strong> Dành cho sách vở, dụng cụ học tập và nhu cầu dinh dưỡng hàng ngày.<br>
            &bull; <strong>Nói không với đua đòi:</strong> Không mua sắm đồ chơi, trang phục theo trào lưu ngắn hạn.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 4: Hội Thi Trạng Nguyên Công Dân 7 (60:00) -->
  <div id="examModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-850 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <!-- Exam Header -->
      <div class="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 text-white">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center font-bold">
            <i class="fa-solid fa-award text-amber-300 text-lg"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black tracking-tight">HỘI THI TRẠNG NGUYÊN CÔNG DÂN 7</h3>
            <p class="text-[11px] text-blue-100">40 câu hỏi trắc nghiệm &bull; Thời gian: 60:00 &bull; GDPT 2018</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="px-3 py-1 rounded-xl bg-black/20 font-mono font-bold text-xs" id="exam-timer">
            60:00
          </div>
          <button onclick="closeExamModal()" class="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center text-white">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Exam Body -->
      <div class="flex-1 overflow-y-auto p-5 space-y-4 text-xs sm:text-sm">
        <div id="exam-questions-list" class="space-y-4"></div>

        <!-- Exam Result Certificate -->
        <div id="exam-result-view" class="hidden text-center py-6 space-y-4">
          <div class="w-16 h-16 mx-auto rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center text-3xl shadow-lg">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <h4 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">Chúc Mừng Bạn Đã Hoàn Thành Bài Thi!</h4>
          <p id="exam-final-score" class="text-base font-bold text-blue-600 dark:text-blue-400"></p>
          <div class="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 max-w-md mx-auto text-xs space-y-1">
            <p><strong>Danh hiệu:</strong> <span id="exam-final-rank" class="text-amber-500 font-bold">Trạng Nguyên Công Dân 7 Xuất Sắc</span></p>
            <p class="text-gray-500 dark:text-gray-400">Chứng nhận hoàn thành chương trình Giáo Dục Công Dân 7 chuẩn GDPT 2018.</p>
          </div>
        </div>
      </div>

      <!-- Exam Footer -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-850">
        <span id="exam-status-text" class="text-xs text-gray-500">Đã chọn 0/40 câu</span>
        <button id="exam-submit-btn" onclick="submitExam()" class="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md transition">
          Nộp bài thi
        </button>
      </div>
    </div>
  </div>

  <!-- ==================== FOOTER ==================== -->
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500 transition-colors">
    <div class="max-w-7xl mx-auto px-4 space-y-2">
      <div class="flex items-center justify-center gap-2">
        <div class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
          <i class="fa-solid fa-scale-balanced"></i>
        </div>
        <span class="font-bold text-gray-700 dark:text-gray-300">CodeHub - Nền Tảng Học Tập Số Hóa GDPT 2018</span>
      </div>
      <p>Chương trình Giáo Dục Công Dân 7 (GDCD 7): 4 Mạch nội dung &bull; 10 Bài học &bull; Giao diện chuẩn Tiếng Anh 6.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script>
${clientScript}
  </script>
</body>
</html>
`;

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/gdcd_7.html', fullHtml, 'utf8');
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/courses/civics_7.html', fullHtml, 'utf8');

console.log("Successfully created courses/gdcd_7.html and courses/civics_7.html! Size:", fullHtml.length);
