// scratch/ktpl11_tools_arena.js
// Bảng ôn tập nhanh + Công thức & Công cụ tương tác + Đấu trường Trạng Nguyên 20 câu 45 phút

const reviewTable = [
  {
    topic: "Thị trường",
    lessons: "Bài 1 – 2",
    content: "Cạnh tranh kinh tế lành mạnh vs không lành mạnh; khái niệm cung, cầu, các nhân tố ảnh hưởng; quan hệ cung – cầu tác động hình thành giá cả và định hướng sản xuất, tiêu dùng.",
    badge: "Kinh tế vi mô"
  },
  {
    topic: "Ổn định kinh tế",
    lessons: "Bài 3 – 4",
    content: "Chỉ số CPI, công thức tính tỉ lệ lạm phát, 3 mức độ lạm phát (vừa phải, phi mã, siêu lạm phát), nguyên nhân và hậu quả; các loại hình thất nghiệp (cơ cấu, chu kì, tự nguyện, không tự nguyện) và chính sách việc làm của Nhà nước.",
    badge: "Kinh tế vĩ mô"
  },
  {
    topic: "Nghề nghiệp & Kinh doanh",
    lessons: "Bài 5 – 7",
    content: "Thị trường lao động và thị trường việc làm, 4 xu hướng tuyển dụng kỉ nguyên số; phân biệt ý tưởng và cơ hội kinh doanh, ma trận SWOT, năng lực người kinh doanh; 5 chuẩn mực đạo đức kinh doanh.",
    badge: "Khởi nghiệp & Đạo đức"
  },
  {
    topic: "Văn hóa tiêu dùng",
    lessons: "Bài 8",
    content: "Tiêu dùng là mục đích và động lực của sản xuất; đặc điểm văn hoá tiêu dùng Việt Nam đương đại; các chuẩn mực hành vi tiêu dùng có văn hoá, tiêu dùng xanh, tiết kiệm và có trách nhiệm.",
    badge: "Tiêu dùng văn minh"
  },
  {
    topic: "Bình đẳng trước pháp luật",
    lessons: "Bài 9 – 12",
    content: "Bình đẳng về quyền, nghĩa vụ và trách nhiệm pháp lí; bình đẳng giới trong 5 lĩnh vực; quyền bình đẳng giữa các dân tộc (chính trị, kinh tế, văn hóa, giáo dục); quyền bình đẳng giữa các tôn giáo.",
    badge: "Bình đẳng công dân"
  },
  {
    topic: "Quyền dân chủ cơ bản",
    lessons: "Bài 13 – 16",
    content: "Quyền tham gia quản lí nhà nước và xã hội ở cơ sở và cả nước; quyền bầu cử (18 tuổi) và ứng cử (21 tuổi) với 4 nguyên tắc hiến định; phân biệt quyền khiếu nại và quyền tố cáo; quyền và nghĩa vụ bảo vệ Tổ quốc.",
    badge: "Dân chủ cơ bản"
  },
  {
    topic: "Quyền tự do cơ bản",
    lessons: "Bài 17 – 21",
    content: "Quyền bất khả xâm phạm thân thể, bảo hộ tính mạng, sức khoẻ, danh dự, nhân phẩm; bất khả xâm phạm về chỗ ở; bảo đảm an toàn và bí mật thư tín, điện thoại; tự do ngôn luận, báo chí, tiếp cận thông tin; tự do tín ngưỡng, tôn giáo.",
    badge: "Tự do thân thể & Tinh thần"
  }
];

const coreFormulas = [
  {
    name: "Công thức tính tỉ lệ lạm phát (%) theo CPI",
    formula: "Tỉ lệ lạm phát (%) = [(CPI kì hiện tại − CPI kì gốc) ÷ CPI kì gốc] × 100%",
    note: "CPI là chỉ số giá tiêu dùng của danh mục rổ hàng hóa đại diện. Lạm phát vừa phải: 0% đến < 10%; Lạm phát phi mã: 10% đến < 1.000%; Siêu lạm phát: ≥ 1.000%."
  },
  {
    name: "Quy luật biến động giá theo quan hệ Cung – Cầu",
    formula: "Cung < Cầu ➔ Giá tăng (P > P*) | Cung > Cầu ➔ Giá giảm (P < P*) | Cung = Cầu ➔ Giá ổn định (P = P*)",
    note: "Cung phản ánh lượng hàng người bán sẵn sàng bán; Cầu phản ánh lượng hàng người mua sẵn sàng mua và có khả năng thanh toán."
  },
  {
    name: "Mô hình phân tích ma trận SWOT cơ hội kinh doanh",
    formula: "SWOT = [S: Điểm mạnh (Nội tại) + W: Điểm yếu (Nội tại)] + [O: Cơ hội (Bên ngoài) + T: Thách thức (Bên ngoài)]",
    note: "Phát huy tối đa Điểm mạnh (S) để đón đầu Cơ hội (O); khắc phục Điểm yếu (W) để giảm thiểu Thách thức (T)."
  },
  {
    name: "Nguyên tắc tương quan giữa Quyền và Nghĩa vụ công dân",
    formula: "Quyền công dân ⇋ Nghĩa vụ công dân (Không tách rời)",
    note: "Mọi công dân bình đẳng về quyền và nghĩa vụ. Thực hiện quyền tự do dân chủ của bản thân không được xâm phạm đến an ninh quốc gia, trật tự công cộng và quyền, lợi ích hợp pháp của người khác."
  }
];

const arenaQuestions = [
  {
    q: "Trong nền kinh tế thị trường, cạnh tranh kinh tế thực chất là sự tranh đua giữa các chủ thể nhằm:",
    options: [
      "A. Giành ưu thế trong sản xuất và tiêu thụ hàng hoá để thu được lợi ích tối đa",
      "B. Độc quyền hóa thị trường và triệt tiêu toàn bộ mọi chủ sở hữu độc lập",
      "C. Hạ giá bán sản phẩm xuống dưới mức chi phí sản xuất để làm kiệt quệ tài chính",
      "D. Đóng cửa toàn bộ các doanh nghiệp liên doanh có vốn đầu tư nước ngoài"
    ],
    answer: 0,
    explain: "Cạnh tranh kinh tế là sự tranh đua lành mạnh giữa các chủ thể nhằm giành ưu thế về nguồn lực, công nghệ, thị phần để tối ưu hóa lợi nhuận."
  },
  {
    q: "Hiện tượng nào sau đây diễn ra trên thị trường khi lượng cung hàng hóa nhỏ hơn lượng cầu (Cung < Cầu)?",
    options: [
      "A. Hàng hóa dư thừa ứ đọng, giá cả thị trường có xu hướng giảm sâu",
      "B. Hàng hóa khan hiếm tương đối, giá cả thị trường có xu hướng tăng cao hơn giá trị",
      "C. Các doanh nghiệp đồng loạt tuyên bố ngừng sản xuất để chuyển ngành",
      "D. Người tiêu dùng lập tức dừng hoàn toàn việc mua sắm"
    ],
    answer: 1,
    explain: "Khi Cung < Cầu, hàng hóa khan hiếm so với nhu cầu thanh toán của người mua, đẩy giá cả thị trường tăng lên."
  },
  {
    q: "Năm 2023, chỉ số giá tiêu dùng CPI của một quốc gia là 108 điểm so với năm gốc 2022 là 100 điểm. Tỉ lệ lạm phát của quốc gia này thuộc mức độ nào?",
    options: [
      "A. Siêu lạm phát",
      "B. Lạm phát phi mã",
      "C. Lạm phát vừa phải (8%)",
      "D. Giảm phát nghiêm trọng"
    ],
    answer: 2,
    explain: "Tỉ lệ lạm phát = [(108 - 100) / 100] * 100% = 8%. Mức tăng 8%/năm (dưới 10%) thuộc nhóm lạm phát vừa phải."
  },
  {
    q: "Một kĩ sư phần mềm bị mất việc làm do công ty áp dụng công cụ trí tuệ nhân tạo (AI) tự động viết code thay thế con người, trong khi kĩ năng của kĩ sư chưa đáp ứng được công nghệ mới. Đây là dạng thất nghiệp nào?",
    options: [
      "A. Thất nghiệp chu kì",
      "B. Thất nghiệp cơ cấu",
      "C. Thất nghiệp tự nguyện",
      "D. Thất nghiệp mùa vụ"
    ],
    answer: 1,
    explain: "Thất nghiệp cơ cấu xảy ra khi kĩ năng của người lao động không còn tương thích với sự thay đổi công nghệ hoặc cơ cấu ngành nghề mới."
  },
  {
    q: "Thị trường việc làm đóng vai trò là cầu nối kết nối giữa:",
    options: [
      "A. Người mua sức lao động (người sử dụng lao động) và người bán sức lao động (người tìm việc)",
      "B. Ngân sách nhà nước và các tổ chức từ thiện xã hội",
      "C. Các sàn giao dịch bất động sản và các nhà thầu xây dựng",
      "D. Người tiêu dùng và các đại lí phân phối hàng ngoại nhập"
    ],
    answer: 0,
    explain: "Thị trường việc làm cung cấp thông tin, tổ chức sàn giao dịch để kết nối cung lao động (người tìm việc) và cầu lao động (nhà tuyển dụng)."
  },
  {
    q: "Trong phân tích ma trận SWOT để đánh giá cơ hội kinh doanh, hai yếu tố nào phản ánh môi trường khách quan bên ngoài?",
    options: [
      "A. Điểm mạnh (Strengths) và Điểm yếu (Weaknesses)",
      "B. Điểm mạnh (Strengths) và Thách thức (Threats)",
      "C. Cơ hội (Opportunities) và Thách thức (Threats)",
      "D. Điểm yếu (Weaknesses) và Cơ hội (Opportunities)"
    ],
    answer: 2,
    explain: "Cơ hội (O) và Thách thức (T) là hai yếu tố xuất phát từ môi trường vĩ mô bên ngoài (thị trường, đối thủ, chính sách, công nghệ)."
  },
  {
    q: "Biểu hiện nào dưới đây thể hiện việc thực hiện đúng chuẩn mực đạo đức kinh doanh?",
    options: [
      "A. Sử dụng chất cấm trong chăn nuôi để gia súc tăng trọng nhanh",
      "B. Quảng cáo thổi phồng công dụng của thực phẩm chức năng như thuốc chữa bách bệnh",
      "C. Khai báo trung thực chất lượng sản phẩm và chủ động thu hồi lô hàng có lỗi kĩ thuật",
      "D. Trốn đóng bảo hiểm xã hội và kéo dài thời gian trả lương cho công nhân"
    ],
    answer: 2,
    explain: "Trung thực về chất lượng và có trách nhiệm bảo vệ khách hàng khi có lỗi sản phẩm là chuẩn mực đạo đức kinh doanh cốt lõi."
  },
  {
    q: "Hành vi người tiêu dùng ưu tiên chọn sản phẩm có dán nhãn sinh thái, hạn chế sử dụng túi nilon và phân loại rác thải tại nguồn là biểu hiện của:",
    options: [
      "A. Tiêu dùng xa xỉ",
      "B. Tiêu dùng xanh và bền vững",
      "C. Tiêu dùng tích trữ đầu cơ",
      "D. Tiêu dùng tự cung tự cấp"
    ],
    answer: 1,
    explain: "Tiêu dùng xanh là hành vi tiêu dùng có văn hóa, hướng đến bảo vệ môi trường, giảm thiểu rác thải nhựa và tiết kiệm tài nguyên."
  },
  {
    q: "Theo Hiến pháp Việt Nam, nguyên tắc công dân bình đẳng về trách nhiệm pháp lí có nghĩa là:",
    options: [
      "A. Bất kì ai vi phạm pháp luật đều bị xử lí nghiêm minh theo quy định, không phân biệt địa vị, chức vụ hay hoàn cảnh",
      "B. Người có công với cách mạng khi phạm tội sẽ được miễn toàn bộ trách nhiệm hình sự",
      "C. Người có chức vụ cao chỉ bị xử lí kỉ luật nội bộ mà không phải ra tòa án",
      "D. Mọi công dân khi phạm tội đều bị áp dụng mức hình phạt tiền hoàn toàn giống nhau"
    ],
    answer: 0,
    explain: "Bình đẳng về trách nhiệm pháp lí đòi hỏi mọi công dân khi vi phạm pháp luật đều phải bị xử lí nghiêm minh theo luật, không có ngoại lệ, không có vùng cấm."
  },
  {
    q: "Quy định người lao động nam và người lao động nữ được trả lương ngang nhau khi cùng làm công việc có giá trị như nhau thể hiện bình đẳng giới trong lĩnh vực:",
    options: [
      "A. Lĩnh vực chính trị",
      "B. Lĩnh vực lao động",
      "C. Lĩnh vực giáo dục, đào tạo",
      "D. Lĩnh vực gia đình"
    ],
    answer: 1,
    explain: "Bình đẳng về tiền lương và cơ hội thăng tiến cho công việc tương đương là nội dung cốt lõi của bình đẳng giới trong lĩnh vực lao động."
  },
  {
    q: "Công dân thuộc các dân tộc thiểu số có quyền dùng tiếng nói, chữ viết và phát huy các phong tục tập quán tốt đẹp của dân tộc mình. Đây là nội dung bình đẳng giữa các dân tộc trong lĩnh vực:",
    options: [
      "A. Lĩnh vực chính trị",
      "B. Lĩnh vực kinh tế",
      "C. Lĩnh vực văn hóa",
      "D. Lĩnh vực quốc phòng"
    ],
    answer: 2,
    explain: "Quyền sử dụng tiếng nói, chữ viết và bảo tồn di sản văn hóa là nội dung bình đẳng giữa các dân tộc trong lĩnh vực văn hóa."
  },
  {
    q: "Pháp luật Việt Nam nghiêm cấm hành vi nào sau đây trong quan hệ giữa các tôn giáo?",
    options: [
      "A. Tự do lựa chọn theo hoặc không theo một tôn giáo nào",
      "B. Tổ chức các lễ hội tôn giáo truyền thống theo hiến chương điều lệ đã được phê duyệt",
      "C. Ép buộc, mua chuộc hoặc cản trở người khác theo hoặc không theo tín ngưỡng, tôn giáo",
      "D. Sửa chữa, tôn tạo các cơ sở thờ tự hợp pháp theo quy định xây dựng"
    ],
    answer: 2,
    explain: "Ép buộc, mua chuộc hoặc cản trở người khác theo hoặc không theo tôn giáo là hành vi xâm phạm quyền tự do tín ngưỡng và bị pháp luật nghiêm cấm."
  },
  {
    q: "Người dân tham gia thảo luận và biểu quyết các khoản đóng góp xây dựng nhà văn hóa thôn, xóm là thực hiện quyền tham gia quản lí nhà nước và xã hội ở phạm vi:",
    options: [
      "A. Phạm vi cơ sở",
      "B. Phạm vi cả nước",
      "C. Phạm vi doanh nghiệp tư nhân",
      "D. Phạm vi quốc tế"
    ],
    answer: 0,
    explain: "Thảo luận và biểu quyết trực tiếp công việc của thôn, xã, phường là hình thức dân chủ trực tiếp ở phạm vi cơ sở."
  },
  {
    q: "Công dân Việt Nam đủ bao nhiêu tuổi trở lên thì có quyền bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân các cấp?",
    options: [
      "A. Đủ 16 tuổi trở lên",
      "B. Đủ 18 tuổi trở lên",
      "C. Đủ 20 tuổi trở lên",
      "D. Đủ 21 tuổi trở lên"
    ],
    answer: 1,
    explain: "Theo Hiến pháp và Luật Bầu cử, công dân đủ 18 tuổi trở lên có quyền bầu cử và đủ 21 tuổi trở lên có quyền ứng cử."
  },
  {
    q: "Hành vi người này đi bỏ phiếu bầu cử thay cho các thành viên khác trong gia đình là hành vi vi phạm nguyên tắc bầu cử nào?",
    options: [
      "A. Nguyên tắc phổ thông",
      "B. Nguyên tắc bình đẳng",
      "C. Nguyên tắc trực tiếp và bỏ phiếu kín",
      "D. Nguyên tắc hiệp thương"
    ],
    answer: 2,
    explain: "Bầu thay, bầu hộ vi phạm nguyên tắc trực tiếp (tự mình bỏ phiếu) và nguyên tắc bỏ phiếu kín (bảo đảm bí mật ý chí cử tri)."
  },
  {
    q: "Điểm khác nhau cơ bản giữa quyền khiếu nại và quyền tố cáo là:",
    options: [
      "A. Khiếu nại nhằm khôi phục quyền lợi của chính người khiếu nại; tố cáo nhằm phát hiện và ngăn chặn hành vi vi phạm pháp luật bảo vệ lợi ích công cộng",
      "B. Khiếu nại chỉ thực hiện bằng miệng; tố cáo bắt buộc phải làm bằng văn bản có công chứng",
      "C. Khiếu nại do người chưa thành niên thực hiện; tố cáo do người đã thành niên thực hiện",
      "D. Khiếu nại và tố cáo hoàn toàn giống nhau về đối tượng và thẩm quyền xử lí"
    ],
    answer: 0,
    explain: "Mục đích của khiếu nại là khôi phục quyền lợi của chính mình; mục đích của tố cáo là bảo vệ lợi ích của Nhà nước, xã hội và công dân trước các hành vi vi phạm pháp luật."
  },
  {
    q: "Theo quy định của pháp luật, việc bắt người trong trường hợp nào dưới đây KHÔNG CẦN có lệnh hoặc quyết định phê chuẩn của Viện kiểm sát?",
    options: [
      "A. Bắt bị can đang được tại ngoại để tiếp tục điều tra",
      "B. Bắt người đang thực hiện hành vi phạm tội quả tang hoặc người đang bị truy nã",
      "C. Bắt người bị hàng xóm nghi ngờ trộm cắp gà vịt",
      "D. Bắt người có tranh chấp hợp đồng kinh tế dân sự"
    ],
    answer: 1,
    explain: "Trong trường hợp phạm tội quả tang hoặc bắt người có lệnh truy nã, bất kì người nào cũng có quyền bắt và giải ngay đến cơ quan công an gần nhất."
  },
  {
    q: "Hành vi tự ý phá khóa, xông vào chỗ ở của người khác để lục soát tài sản đòi nợ khi chưa được sự đồng ý của chủ nhà là hành vi xâm phạm đến:",
    options: [
      "A. Quyền bất khả xâm phạm về chỗ ở của công dân",
      "B. Quyền tự do kinh doanh thương mại",
      "C. Quyền tiếp cận thông tin đại chúng",
      "D. Quyền bảo hộ quyền tác giả"
    ],
    answer: 0,
    explain: "Chỗ ở của công dân là bất khả xâm phạm; tự ý xông vào hoặc khám xét chỗ ở trái phép là hành vi vi phạm pháp luật hình sự."
  },
  {
    q: "Hành vi lén lút cài đặt phần mềm gián điệp để đọc trộm tin nhắn Zalo, ghi âm cuộc gọi của bạn bè là hành vi xâm phạm quyền:",
    options: [
      "A. Quyền tự do hội họp và lập hội",
      "B. Quyền được bảo đảm an toàn và bí mật thư tín, điện thoại, điện tín",
      "C. Quyền tự do tín ngưỡng, tôn giáo",
      "D. Quyền khiếu nại và tố cáo"
    ],
    answer: 1,
    explain: "Tự ý đọc trộm tin nhắn, nghe lén điện thoại xâm phạm quyền bảo đảm an toàn và bí mật thư tín, điện thoại, điện tín của công dân."
  },
  {
    q: "Hành vi tung tin giả mạo 'dịch bệnh truyền nhiễm nguy hiểm bùng phát' trên mạng xã hội gây hoang mang dư luận xã hội vi phạm quy định nào sau đây?",
    options: [
      "A. Vi phạm quy định về trách nhiệm và giới hạn của quyền tự do ngôn luận theo Luật An ninh mạng",
      "B. Hoàn toàn hợp pháp vì quyền tự do ngôn luận không có bất kì giới hạn nào",
      "C. Được coi là hoạt động nghiên cứu khoa học xã hội",
      "D. Chỉ vi phạm nội quy của công ty viễn thông"
    ],
    answer: 0,
    explain: "Tự do ngôn luận phải tuân thủ pháp luật; hành vi tung tin giả gây hoang mang dư luận vi phạm Luật An ninh mạng và sẽ bị xử phạt nghiêm khắc."
  }
];

module.exports = {
  reviewTable,
  coreFormulas,
  arenaQuestions
};
