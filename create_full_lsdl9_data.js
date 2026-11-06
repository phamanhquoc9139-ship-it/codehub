const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/parsed_raw_modules.json', 'utf8'));

// Chapters mapping
const histChapters = [
  { range: [1, 4], name: "CHƯƠNG 1. THẾ GIỚI TỪ NĂM 1918 ĐẾN NĂM 1945", badge: "Thế giới 1918–1945" },
  { range: [5, 8], name: "CHƯƠNG 2. VIỆT NAM TỪ NĂM 1918 ĐẾN NĂM 1945", badge: "Việt Nam 1918–1945" },
  { range: [9, 12], name: "CHƯƠNG 3. THẾ GIỚI TỪ NĂM 1945 ĐẾN NĂM 1991", badge: "Thế giới 1945–1991" },
  { range: [13, 17], name: "CHƯƠNG 4. VIỆT NAM TỪ NĂM 1945 ĐẾN NĂM 1975", badge: "Việt Nam 1945–1975" },
  { range: [18, 19], name: "CHƯƠNG 5. THẾ GIỚI TỪ NĂM 1991 ĐẾN NAY", badge: "Thế giới từ 1991" },
  { range: [20, 20], name: "CHƯƠNG 6. VIỆT NAM TỪ NĂM 1976 ĐẾN NAY", badge: "Việt Nam Đổi mới" },
  { range: [21, 21], name: "CHƯƠNG 7. CÁCH MẠNG KHOA HỌC – KĨ THUẬT VÀ XU THẾ TOÀN CẦU HOÁ", badge: "Toàn cầu hoá & KHKT" }
];

const geoChapters = [
  { range: [1, 4], name: "CHƯƠNG 1. ĐỊA LÍ DÂN CƯ VIỆT NAM", badge: "Dân cư & Lao động" },
  { range: [5, 11], name: "CHƯƠNG 2. ĐỊA LÍ CÁC NGÀNH KINH TẾ", badge: "Ngành kinh tế" },
  { range: [12, 21], name: "CHƯƠNG 3. ĐỊA LÍ CÁC VÙNG KINH TẾ – XÃ HỘI", badge: "Vùng kinh tế & Biển đảo" }
];

// Let's create History Data
const histList = raw.histLessons.map((item) => {
  const ch = histChapters.find(c => item.num >= c.range[0] && item.num <= c.range[1]);
  const lines = item.body.split('\n').map(l => l.replace(/^-\s*/, '').trim()).filter(Boolean);
  
  return {
    id: `hist-${item.num}`,
    num: item.num,
    title: item.title,
    chapter: ch ? ch.name : "LỊCH SỬ 9",
    badge: ch ? ch.badge : "Lịch sử",
    lines: lines,
    quiz: generateHistQuiz(item.num, item.title, lines)
  };
});

function generateHistQuiz(num, title, lines) {
  // 4 tailored questions per lesson
  switch(num) {
    case 1:
      return [
        { q: "Chính sách kinh tế mới (NEP) được V.I. Lê-nin đề xướng vào thời gian nào?", options: ["Tháng 3-1921", "Tháng 10-1917", "Tháng 12-1922", "Tháng 5-1941"], ans: 0, expl: "Tháng 3-1921, Lê-nin đề xướng NEP nhằm phục hồi kinh tế Nga sau nội chiến." },
        { q: "Liên bang Cộng hoà xã hội chủ nghĩa Xô viết (Liên Xô) chính thức thành lập vào năm nào?", options: ["Năm 1917", "Năm 1922", "Năm 1930", "Năm 1945"], ans: 1, expl: "Liên Xô được thành lập vào tháng 12-1922 từ 4 nước cộng hoà ban đầu." },
        { q: "Điểm cốt lõi trong chính sách kinh tế mới (NEP) về nông nghiệp là gì?", options: ["Trưng thu toàn bộ lương thực", "Thay trưng thu bằng thuế lương thực", "Xoá bỏ hoàn toàn kinh tế tư nhân", "Tập thể hoá bắt buộc ngay lập tức"], ans: 1, expl: "NEP thay chính sách trưng thu lương thực thừa bằng thuế lương thực, nông dân tự do trao đổi phần dôi dư." },
        { q: "Trọng tâm của công cuộc công nghiệp hoá xã hội chủ nghĩa ở Liên Xô là gì?", options: ["Công nghiệp nhẹ", "Thương nghiệp tư nhân", "Công nghiệp nặng", "Du lịch sinh thái"], ans: 2, expl: "Liên Xô ưu tiên phát triển công nghiệp nặng để biến đất nước thành cường quốc công nghiệp." }
      ];
    case 2:
      return [
        { q: "Cuộc Đại suy thoái kinh tế thế giới tư bản bắt đầu từ quốc gia nào và năm nào?", options: ["Nước Anh năm 1918", "Nước Mỹ năm 1929", "Nước Đức năm 1933", "Nước Pháp năm 1925"], ans: 1, expl: "Đại suy thoái bùng nổ vào tháng 10-1929 tại thị trường chứng khoán Mỹ và lan rộng khắp thế giới tư bản." },
        { q: "Để thoát khỏi khủng hoảng kinh tế, các nước Đức và I-ta-li-a đã lựa chọn con đường nào?", options: ["Tiến hành cải cách dân chủ", "Thiết lập chế độ độc tài phát xít", "Gia nhập phe Đồng minh", "Xây dựng chủ nghĩa xã hội"], ans: 1, expl: "Đức và I-ta-li-a đã phát xít hoá chế độ chính trị, quân sự hoá nền kinh tế để chuẩn bị chiến tranh." },
        { q: "Tổng thống Mỹ Ph. Ru-dơ-ven đã ban hành chính sách gì để cứu vãn nền kinh tế Mỹ?", options: ["Chính sách Mở cửa", "Chính sách kinh tế mới (NEP)", "Chính sách mới (New Deal)", "Kế hoạch Mác-san"], ans: 2, expl: "Chính sách mới (New Deal) gồm các biện pháp cải tổ ngân hàng, hỗ trợ việc làm và can thiệp của Nhà nước." },
        { q: "Quốc tế Cộng sản (Quốc tế thứ ba) được thành lập tại đâu và vào năm nào?", options: ["Pa-ri năm 1918", "Mát-xcơ-va năm 1919", "Luân Đôn năm 1920", "Béc-lin năm 1933"], ans: 1, expl: "Quốc tế Cộng sản được thành lập tại Mát-xcơ-va vào tháng 3-1919 dưới sự lãnh đạo của Lê-nin." }
      ];
    case 3:
      return [
        { q: "Năm 1931, giới quân phiệt Nhật Bản đã có hành động xâm lược nào ở châu Á?", options: ["Chiếm Trân Châu Cảng", "Chiếm vùng Đông Bắc Trung Quốc", "Tấn công Ấn Độ", "Xâm chiếm toàn bộ Đông Nam Á"], ans: 1, expl: "Năm 1931, quân phiệt Nhật đánh chiếm vùng Đông Bắc Trung Quốc (Mãn Châu), mở rộng lò lửa chiến tranh." },
        { q: "Hình thức đấu tranh chủ yếu của Đảng Quốc đại do M. Gan-đi lãnh đạo ở Ấn Độ là gì?", options: ["Khởi nghĩa vũ trang", "Bất bạo động, bất hợp tác", "Chiến tranh du kích", "Bãi công bạo lực"], ans: 1, expl: "M. Gan-đi chủ trương đấu tranh giành độc lập bằng phương pháp hòa bình, bất bạo động và bất hợp tác với thực dân Anh." },
        { q: "Đảng Cộng sản Việt Nam được thành lập vào thời điểm nào ở Đông Nam Á?", options: ["Đầu năm 1925", "Đầu năm 1930", "Cuối năm 1935", "Tháng 8-1945"], ans: 1, expl: "Đảng Cộng sản Việt Nam thành lập vào đầu năm 1930 trong làn sóng phát triển của phong trào vô sản Đông Nam Á." },
        { q: "Mặt trận chống Nhật ở Trung Quốc được hình thành từ năm nào?", options: ["Năm 1919", "Năm 1929", "Năm 1937", "Năm 1945"], ans: 2, expl: "Năm 1937, Quốc dân đảng và Đảng Cộng sản Trung Quốc hợp tác hình thành mặt trận kháng Nhật thống nhất." }
      ];
    case 4:
      return [
        { q: "Chiến tranh thế giới thứ hai bùng nổ vào ngày nào gắn với sự kiện gì?", options: ["1-9-1939, Đức tấn công Ba Lan", "22-6-1941, Đức tấn công Liên Xô", "7-12-1941, Nhật đánh Trân Châu Cảng", "6-6-1944, Đồng minh đổ bộ"], ans: 0, expl: "Ngày 1-9-1939, phát xít Đức vô cớ tấn công Ba Lan, Anh và Pháp tuyên chiến với Đức, thế chiến II bùng nổ." },
        { q: "Trận đánh nào được coi là bước ngoặt quyết định làm thay đổi cục diện Chiến tranh thế giới thứ hai?", options: ["Trận Trân Châu Cảng", "Trận Xta-lin-grát (1942–1943)", "Trận eo biển Mác-xen", "Trận Béc-lin 1945"], ans: 1, expl: "Chiến thắng Xta-lin-grát (1942–1943) của Hồng quân Liên Xô là bước ngoặt căn bản của cuộc chiến tranh thế giới." },
        { q: "Phát xít Đức và quân phiệt Nhật lần lượt kí văn kiện đầu hàng không điều kiện vào thời gian nào?", options: ["Tháng 1-1945 và tháng 3-1945", "Tháng 5-1945 và tháng 8-1945", "Tháng 9-1945 và tháng 12-1945", "Tháng 6-1944 và tháng 9-1945"], ans: 1, expl: "Đức đầu hàng tháng 5-1945 và Nhật đầu hàng tháng 8-1945 (văn kiện kí ngày 2-9-1945)." },
        { q: "Tổ chức quốc tế nào được thành lập ngay sau khi Chiến tranh thế giới thứ hai kết thúc?", options: ["Hội Quốc liên", "Khối NATO", "Liên hợp quốc", "Khối Vac-sơ-va"], ans: 2, expl: "Liên hợp quốc được thành lập năm 1945 với mục tiêu duy trì hòa bình và an ninh thế giới." }
      ];
    case 5:
      return [
        { q: "Mục đích chính của thực dân Pháp trong chương trình khai thác thuộc địa lần thứ hai (1919–1929) là gì?", options: ["Phát triển kinh tế Việt Nam", "Bù đắp thiệt hại nặng nề do Thế chiến I gây ra", "Xây dựng nền công nghiệp bản xứ", "Nâng cao mức sống người dân"], ans: 1, expl: "Pháp đầu tư mạnh vào nông nghiệp và khai mỏ nhằm bóc lột bù đắp thiệt hại chiến tranh." },
        { q: "Sự kiện nào đánh dấu giai cấp công nhân Việt Nam bước đầu chuyển từ tự phát sang tự giác?", options: ["Bãi công Ba Son (1925)", "Khởi nghĩa Yên Bái (1930)", "Thành lập Việt Nam Quốc dân đảng", "Phong trào Đông Du (1905)"], ans: 0, expl: "Cuộc bãi công của thợ máy xưởng Ba Son (8-1925) do Tôn Đức Thắng lãnh đạo mang tính tổ chức và quốc tế rõ rệt." },
        { q: "Khởi nghĩa Yên Bái đầu năm 1930 do tổ chức cách mạng nào phát động?", options: ["Đông Dương Cộng sản đảng", "Việt Nam Quốc dân đảng", "Hội Việt Nam Cách mạng Thanh niên", "Tân Việt Cách mạng đảng"], ans: 1, expl: "Việt Nam Quốc dân đảng do Nguyễn Thái Học lãnh đạo đã phát động khởi nghĩa Yên Bái tháng 2-1930." },
        { q: "Phong trào 'vô sản hoá' do tổ chức nào phát động nhằm đưa cán bộ vào hầm mỏ, nhà máy rèn luyện?", options: ["Tân Việt Cách mạng đảng", "Việt Nam Quang phục hội", "Hội Việt Nam Cách mạng Thanh niên", "Đảng Lập hiến"], ans: 2, expl: "Hội Việt Nam Cách mạng Thanh niên thực hiện phong trào 'vô sản hóa' cuối năm 1928 để truyền bá chủ nghĩa Mác – Lê-nin." }
      ];
    case 6:
      return [
        { q: "Nguyễn Ái Quốc gửi bản 'Yêu sách của nhân dân An Nam' tới Hội nghị Véc-xai vào năm nào?", options: ["Năm 1911", "Năm 1919", "Năm 1920", "Năm 1925"], ans: 1, expl: "Tháng 6-1919, Nguyễn Ái Quốc thay mặt những người Việt Nam yêu nước gửi Bản yêu sách đến Hội nghị Véc-xai." },
        { q: "Sự kiện bước ngoặt đưa Nguyễn Ái Quốc đến với chủ nghĩa Mác – Lê-nin là gì?", options: ["Đọc Luận cương của Lê-nin (7-1920)", "Rời bến cảng Nhà Rồng (1911)", "Tham gia Quốc tế thứ ba", "Xuất bản báo Thanh Niên (1925)"], ans: 0, expl: "Tháng 7-1920, đọc Sơ thảo Luận cương của Lê-nin, Nguyễn Ái Quốc khẳng định con đường giải phóng dân tộc theo cách mạng vô sản." },
        { q: "Năm 1925, tại Quảng Châu (Trung Quốc), Nguyễn Ái Quốc đã sáng lập tổ chức nào?", options: ["Đông Dương Cộng sản liên đoàn", "Hội Việt Nam Cách mạng Thanh niên", "Tâm tâm xã", "Đảng Cộng sản An Nam"], ans: 1, expl: "Tháng 6-1925, Hội Việt Nam Cách mạng Thanh niên được thành lập, xuất bản tuần báo Thanh Niên." },
        { q: "Hội nghị hợp nhất các tổ chức cộng sản thành Đảng Cộng sản Việt Nam đầu năm 1930 diễn ra ở đâu?", options: ["Quảng Châu (Trung Quốc)", "Hương Cảng (Hồng Kông, Trung Quốc)", "Mát-xcơ-va (Liên Xô)", "Hà Nội (Việt Nam)"], ans: 1, expl: "Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất tại Cửu Long (Hương Cảng) từ ngày 6-1-1930." }
      ];
    case 7:
      return [
        { q: "Đỉnh cao của phong trào cách mạng 1930–1931 ở Việt Nam là gì?", options: ["Phong trào Đông Dương Đại hội", "Xô viết Nghệ – Tĩnh", "Khởi nghĩa Bắc Sơn", "Khởi nghĩa Nam Kỳ"], ans: 1, expl: "Xô viết Nghệ – Tĩnh là đỉnh cao của cao trào 1930–1931, chính quyền nhân dân lâm thời kiểu mới được thành lập." },
        { q: "Hình thức đấu tranh chủ yếu của phong trào dân chủ 1936–1939 là gì?", options: ["Khởi nghĩa vũ trang bí mật", "Đấu tranh công khai, nửa công khai, hợp pháp", "Chiến tranh du kích phục kích", "Bất bạo động tôn giáo"], ans: 1, expl: "Phong trào 1936–1939 triệt để lợi dụng các hình thức công khai, nửa công khai, hợp pháp để tập hợp quần chúng rộng rãi." },
        { q: "Mặt trận Thống nhất Nhân dân Phản đế Đông Dương sau đổi tên thành Mặt trận Dân chủ Đông Dương thuộc giai đoạn nào?", options: ["1919–1925", "1930–1931", "1936–1939", "1939–1945"], ans: 2, expl: "Mặt trận Dân chủ Đông Dương được thành lập trong thời kì 1936–1939 nhằm chống phát xít và đòi dân sinh, dân chủ." },
        { q: "Ý nghĩa to lớn nhất của phong trào 1930–1931 và 1936–1939 đối với Cách mạng tháng Tám năm 1945 là gì?", options: ["Làm suy yếu quân Nhật", "Được coi là hai cuộc diễn tập chuẩn bị thắng lợi cho Cách mạng tháng Tám", "Buộc Pháp trao trả độc lập ngay", "Lập nên chính quyền toàn quốc"], ans: 1, expl: "Hai phong trào là các bước tập dượt, chuẩn bị lực lượng chính trị và kinh nghiệm lãnh đạo cho Tổng khởi nghĩa 1945." }
      ];
    case 8:
      return [
        { q: "Tháng 5-1941, tại Hội nghị Trung ương 8 (Pác Bó, Cao Bằng), Đảng ta đã thành lập mặt trận nào?", options: ["Mặt trận Liên Việt", "Mặt trận Việt Minh", "Mặt trận Tổ quốc", "Mặt trận Dân chủ"], ans: 1, expl: "Mặt trận Việt Minh (Việt Nam Độc lập Đồng minh) được thành lập ngày 19-5-1941 theo sáng kiến của Nguyễn Ái Quốc." },
        { q: "Chỉ thị lịch sử nào của Ban Thường vụ Trung ương Đảng ra đời ngay sau khi Nhật đảo chính Pháp ngày 9-3-1945?", options: ["Kháng chiến kiến quốc", "Nhật - Pháp bắn nhau và hành động của chúng ta", "Toàn quốc kháng chiến", "Sửa đổi lối làm việc"], ans: 1, expl: "Chỉ thị ngày 12-3-1945 phát động cao trào kháng Nhật cứu nước làm tiền đề cho Tổng khởi nghĩa." },
        { q: "Khởi nghĩa giành chính quyền ở Hà Nội thắng lợi vào ngày nào?", options: ["14-8-1945", "19-8-1945", "23-8-1945", "25-8-1945"], ans: 1, expl: "Ngày 19-8-1945, nhân dân Thủ đô Hà Nội đã vùng lên giành chính quyền thắng lợi hoàn toàn." },
        { q: "Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình vào ngày lịch sử nào?", options: ["19-8-1945", "23-8-1945", "25-8-1945", "2-9-1945"], ans: 3, expl: "Ngày 2-9-1945, nước Việt Nam Dân chủ Cộng hòa chính thức ra đời qua bản Tuyên ngôn Độc lập bất hủ." }
      ];
    case 9:
      return [
        { q: "Chiến tranh Lạnh diễn ra chủ yếu giữa hai phe đối đầu nào?", options: ["Anh - Pháp đối đầu Đức - Ý", "Mỹ và phe Tư bản chủ nghĩa đối đầu Liên Xô và phe Xã hội chủ nghĩa", "Nhật Bản đối đầu Trung Quốc", "Các nước Tây Âu đối đầu Mỹ La-tinh"], ans: 1, expl: "Chiến tranh Lạnh (1947–1989) là sự đối đầu toàn diện căng thẳng giữa khối TBCN do Mỹ đứng đầu và XHCN do Liên Xô đứng đầu." },
        { q: "Học thuyết nào của Tổng thống Mỹ năm 1947 được xem là khởi đầu chính thức của Chiến tranh Lạnh?", options: ["Học thuyết Truman", "Học thuyết Monroe", "Học thuyết Nixon", "Kế hoạch Marshall"], ans: 0, expl: "Thông điệp của Tổng thống Truman tháng 3-1947 tuyên bố ngăn chặn chủ nghĩa cộng sản là mốc mở đầu Chiến tranh Lạnh." },
        { q: "Khối quân sự nào do Mỹ và các nước Tây Âu thành lập năm 1949?", options: ["Khối SEATO", "Khối Warsaw", "Khối NATO", "Khối ANZUS"], ans: 2, expl: "Tổ chức Hiệp ước Bắc Đại Tây Dương (NATO) được thành lập tháng 4-1949." },
        { q: "Chiến tranh Lạnh chính thức được hai nhà lãnh đạo Mỹ và Liên Xô tuyên bố chấm dứt vào năm nào?", options: ["Năm 1975", "Năm 1989", "Năm 1991", "Năm 2000"], ans: 1, expl: "Tháng 12-1989, tại đảo Manta, Bush và Gorbachev tuyên bố chấm dứt tình trạng Chiến tranh Lạnh." }
      ];
    case 10:
      return [
        { q: "Năm 1949, Liên Xô đạt được thành tựu khoa học - quân sự mang tính đột phá nào?", options: ["Phóng vệ tinh Sputnik 1", "Chế tạo thành công bom nguyên tử", "Đưa người đầu tiên lên Mặt Trăng", "Chế tạo máy tính điện tử"], ans: 1, expl: "Năm 1949, Liên Xô thử thành công bom nguyên tử, phá vỡ thế độc quyền vũ khí hạt nhân của Mỹ." },
        { q: "Ai là phi hành gia Liên Xô đầu tiên bay vào không gian vũ trụ năm 1961?", options: ["Neil Armstrong", "Yuri Gagarin", "Phạm Tuân", "Valentina Tereshkova"], ans: 1, expl: "Ngày 12-4-1961, Yuri Gagarin bay vòng quanh Trái Đất trên con tàu Vostok 1." },
        { q: "Khối liên minh quân sự – chính trị phòng thủ của các nước xã hội chủ nghĩa Đông Âu là gì?", options: ["Hội đồng Tương trợ Kinh tế (SEV)", "Tổ chức Hiệp ước Vác-sơ-va", "Liên minh châu Âu", "Hiệp ước An ninh Thái Bình Dương"], ans: 1, expl: "Hiệp ước Vác-sơ-va được thành lập tháng 5-1955 để đối trọng với khối quân sự NATO." },
        { q: "Sự sụp đổ của chế độ xã hội chủ nghĩa ở Liên Xô và Đông Âu diễn ra vào giai đoạn nào?", options: ["1973–1975", "1989–1991", "1995–1998", "2000–2002"], ans: 1, expl: "Khủng hoảng sâu sắc khiến chế độ XHCN sụp đổ ở Đông Âu (1989) và Liên Xô tan rã vào tháng 12-1991." }
      ];
    case 11:
      return [
        { q: "Sau Thế chiến II, nước Mỹ trở thành trung tâm kinh tế – tài chính lớn nhất thế giới vì lý do gì?", options: ["Lãnh thổ rộng lớn không bị chiến tranh tàn phá và thu lợi từ buôn bán vũ khí", "Không phải đầu tư quân sự", "Chiếm toàn bộ thuộc địa của Anh, Pháp", "Nhận viện trợ kinh tế từ châu Âu"], ans: 0, expl: "Nước Mỹ được 2 đại dương che chở, tài nguyên dồi dào và bán vũ khí sinh lời khổng lồ." },
        { q: "Kế hoạch Phục hưng châu Âu do Mỹ đề xướng năm 1947 còn có tên gọi là gì?", options: ["Kế hoạch Truman", "Kế hoạch Mác-san (Marshall)", "Chiến lược Toàn cầu", "Kế hoạch Đốt"], ans: 1, expl: "Kế hoạch Marshall viện trợ kinh tế cho Tây Âu nhằm gắn chặt Tây Âu vào quỹ đạo ảnh hưởng của Mỹ." },
        { q: "Hiệp ước Rôm (1957) đánh dấu sự ra đời của tổ chức liên kết kinh tế nào ở Tây Âu?", options: ["Cộng đồng Than Thép châu Âu", "Cộng đồng Kinh tế châu Âu (EEC)", "Liên minh châu Âu (EU)", "Khu vực đồng Euro"], ans: 1, expl: "Năm 1957, Hiệp ước Rôm thành lập Cộng đồng Kinh tế châu Âu (EEC), tiền thân trực tiếp của EU." },
        { q: "Tổ chức Liên minh châu Âu (EU) chính thức mang tên gọi này theo Hiệp ước nào?", options: ["Hiệp ước Véc-xai", "Hiệp ước Rôm", "Hiệp ước Ma-xtrích (Maastricht 1991)", "Hiệp định Pa-ri"], ans: 2, expl: "Hiệp ước Maastricht ký năm 1991 (có hiệu lực 1993) chính thức đổi tên thành Liên minh châu Âu (EU)." }
      ];
    case 12:
      return [
        { q: "Cách mạng Cu-ba giành thắng lợi hoàn toàn lật đổ chế độ độc tài Ba-ti-xta vào ngày nào?", options: ["1-1-1959", "26-7-1953", "2-9-1945", "30-4-1975"], ans: 0, expl: "Ngày 1-1-1959, nghĩa quân Fidel Castro tiến vào La Habana, cách mạng Cu-ba toàn thắng." },
        { q: "Sự kiện lịch sử nào vào năm 1960 khiến năm này được gọi là 'Năm châu Phi'?", options: ["Tất cả các nước châu Phi giàu có", "17 nước châu Phi cùng tuyên bố độc lập", "Liên minh châu Phi thành lập", "Chấm dứt nạn đói ở châu Phi"], ans: 1, expl: "Năm 1960, 17 quốc gia châu Phi tuyên bố độc lập, làm sụp đổ từng mảng lớn hệ thống thuộc địa." },
        { q: "Nước Cộng hoà Nhân dân Trung Hoa chính thức thành lập vào ngày tháng năm nào?", options: ["1-1-1945", "1-10-1949", "19-8-1945", "22-12-1944"], ans: 1, expl: "Ngày 1-10-1949, Chủ tịch Mao Trạch Đông tuyên bố thành lập nước CHND Trung Hoa tại Bắc Kinh." },
        { q: "Hiệp hội các quốc gia Đông Nam Á (ASEAN) được thành lập vào năm nào tại Băng Cốc?", options: ["Năm 1945", "Năm 1954", "Năm 1967", "Năm 1995"], ans: 2, expl: "Ngày 8-8-1967, 5 nước sáng lập ký Tuyên bố Băng Cốc thành lập ASEAN." }
      ];
    case 13:
      return [
        { q: "Tình thế hiểm nghèo của nước Việt Nam Dân chủ Cộng hòa sau Cách mạng tháng Tám 1945 được ví như hình ảnh nào?", options: ["Gươm mài trên đá", "Ngàn cân treo sợi tóc", "Thuyền nan vượt biển lớn", "Gió bão quét qua rừng"], ans: 1, expl: "Tình thế 'ngàn cân treo sợi tóc' do cùng lúc phải đối mặt giặc đói, giặc dốt và giặc ngoại xâm." },
        { q: "Để giải quyết nạn dốt, ngày 8-9-1945 Chủ tịch Hồ Chí Minh đã ký sắc lệnh thành lập cơ quan nào?", options: ["Bộ Giáo dục", "Nha Bình dân học vụ", "Viện Hàn lâm", "Hội Khuyến học"], ans: 1, expl: "Nha Bình dân học vụ phụ trách công cuộc xóa mù chữ toàn dân nhanh chóng và hiệu quả." },
        { q: "Cuộc Tổng tuyển cử đầu tiên bầu Quốc hội khoá I của nước Việt Nam diễn ra vào ngày nào?", options: ["2-9-1945", "6-1-1946", "19-12-1946", "10-10-1954"], ans: 1, expl: "Ngày 6-1-1946, cử tri cả nước nô nức đi bỏ phiếu bầu Quốc hội đầu tiên của nước nhà." },
        { q: "Chủ trương đối ngoại mềm dẻo của Đảng và Bác Hồ trước ngày 6-3-1946 là gì?", options: ["Đánh Pháp, hòa Tưởng", "Hòa hoãn với Tưởng ở miền Bắc để tập trung đánh Pháp ở miền Nam", "Đánh cả Pháp lẫn Tưởng", "Kêu gọi viện trợ nước ngoài"], ans: 1, expl: "Đảng thực hiện sách lược tạm thời hòa hoãn, nhân nhượng với quân Tưởng để tập trung kháng chiến chống Pháp ở Nam Bộ." }
      ];
    case 14:
      return [
        { q: "Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh được phát đi vào đêm ngày nào?", options: ["23-9-1945", "19-12-1946", "19-8-1945", "22-12-1944"], ans: 1, expl: "Đêm 19-12-1946, Bác Hồ ra Lời kêu gọi Toàn quốc kháng chiến phát động cuộc chiến tranh bảo vệ Tổ quốc." },
        { q: "Đường lối kháng chiến toàn diện, trường kì, tự lực cánh sinh được khẳng định trong tác phẩm nổi tiếng nào của đồng chí Trường Chinh?", options: ["Đường kách mệnh", "Bản án chế độ thực dân Pháp", "Kháng chiến nhất định thắng lợi", "Tuyên ngôn Độc lập"], ans: 2, expl: "Tác phẩm 'Kháng chiến nhất định thắng lợi' (1947) của Tổng Bí thư Trường Chinh giải thích toàn diện đường lối kháng chiến." },
        { q: "Chiến dịch nào đã bẻ gãy hoàn toàn chiến lược 'đánh nhanh thắng nhanh' của thực dân Pháp năm 1947?", options: ["Chiến dịch Việt Bắc thu - đông 1947", "Chiến dịch Biên giới 1950", "Chiến dịch Hòa Bình 1951", "Chiến dịch Tây Bắc 1952"], ans: 0, expl: "Chiến dịch Việt Bắc thu - đông 1947 bảo vệ an toàn cơ quan đầu não kháng chiến và đánh bại kế hoạch chớp nhoáng của Pháp." },
        { q: "Chiến dịch Biên giới thu - đông 1950 có ý nghĩa chiến lược như thế nào đối với cuộc kháng chiến?", options: ["Kết thúc hoàn toàn cuộc kháng chiến", "Giành quyền chủ động chiến lược trên chiến trường chính Bắc Bộ", "Buộc Mỹ ngừng viện trợ", "Lập nên chính quyền Cách mạng lâm thời"], ans: 1, expl: "Chiến dịch Biên giới 1950 khai thông biên giới Việt - Trung và mở ra thời kì ta giành quyền chủ động chiến lược." }
      ];
    case 15:
      return [
        { q: "Đại hội đại biểu toàn quốc lần thứ II của Đảng (tháng 2-1951) quyết định đưa Đảng ra hoạt động công khai với tên gọi là gì?", options: ["Đảng Cộng sản Đông Dương", "Đảng Lao động Việt Nam", "Đảng Dân chủ Việt Nam", "Đảng Xã hội Việt Nam"], ans: 1, expl: "Đại hội II đổi tên Đảng thành Đảng Lao động Việt Nam và đưa Đảng ra hoạt động công khai." },
        { q: "Kế hoạch quân sự Nava của Pháp - Mỹ năm 1953 nhằm mục đích chủ yếu gì?", options: ["Rút quân an toàn về nước", "Xoay chuyển cục diện chiến tranh, giành thắng lợi quyết định trong 18 tháng", "Ký kết hiệp định đình chiến ngay", "Mở rộng chiến tranh sang Thái Lan"], ans: 1, expl: "Kế hoạch Nava mong muốn tập trung binh lực cơ động lớn để giành thắng lợi quân sự quyết định." },
        { q: "Chiến dịch lịch sử Điện Biên Phủ diễn ra trong bao nhiêu ngày đêm và chia làm mấy đợt?", options: ["30 ngày đêm, 2 đợt", "56 ngày đêm, 3 đợt", "60 ngày đêm, 4 đợt", "81 ngày đêm, 3 đợt"], ans: 1, expl: "Chiến dịch Điện Biên Phủ kéo dài 56 ngày đêm (từ 13-3 đến 7-5-1954), chia làm 3 đợt tiến công mãnh liệt." },
        { q: "Hiệp định Giơ-ne-vơ năm 1954 công nhận các quyền dân tộc cơ bản nào của ba nước Đông Dương?", options: ["Chỉ công nhận quyền kinh tế", "Độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ", "Quyền tự trị có điều kiện", "Chế độ ủy trị của Liên hợp quốc"], ans: 1, expl: "Hiệp định Giơ-ne-vơ công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam, Lào, Cam-pu-chia." }
      ];
    case 16:
      return [
        { q: "Nghị quyết Trung ương lần thứ 15 của Đảng (đầu năm 1959) đã vạch ra con đường cách mạng miền Nam là gì?", options: ["Đấu tranh hòa bình nghị trường", "Sử dụng bạo lực cách mạng, kết hợp đấu tranh chính trị với đấu tranh vũ trang", "Đình chiến vô điều kiện", "Chờ đợi sự giúp đỡ của quốc tế"], ans: 1, expl: "Nghị quyết 15 soi sáng con đường bạo lực cách mạng, mở màn cho phong trào Đồng khởi." },
        { q: "Phong trào 'Đồng khởi' (1959–1960) tiêu biểu và lan rộng mạnh mẽ nhất bắt nguồn từ tỉnh nào?", options: ["Quảng Trị", "Bến Tre", "Tây Ninh", "Cà Mau"], ans: 1, expl: "Đồng khởi bùng nổ mạnh mẽ nhất tại Định Thủy, Phước Hiệp, Bình Khánh thuộc huyện Mỏ Cày, tỉnh Bến Tre." },
        { q: "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập vào ngày nào?", options: ["19-5-1959", "20-12-1960", "1-1-1961", "15-2-1961"], ans: 1, expl: "Ngày 20-12-1960, Mặt trận Dân tộc Giải phóng miền Nam Việt Nam ra đời tại Tây Ninh." },
        { q: "Chiến thắng vang dội nào đầu năm 1963 chứng minh quân và dân miền Nam có khả năng đánh bại chiến lược 'Chiến tranh đặc biệt' của Mỹ?", options: ["Chiến thắng Ấp Bắc", "Chiến thắng Vạn Tường", "Chiến thắng Bình Giã", "Chiến thắng Núi Thành"], ans: 0, expl: "Chiến thắng Ấp Bắc (2-1-1963, Mỹ Tho) chứng minh quân dân ta hoàn toàn có thể bẻ gãy chiến thuật trực thăng vận, thiết xa vận." }
      ];
    case 17:
      return [
        { q: "Chiến lược 'Chiến tranh cục bộ' (1965–1968) của Mỹ ở miền Nam dựa vào lực lượng chủ yếu nào?", options: ["Quân đội Sài Gòn", "Quân viễn chinh Mỹ, quân đồng minh của Mỹ kết hợp quân đội Sài Gòn", "Chỉ dùng lính đánh thuê", "Chỉ dùng không quân và hải quân"], ans: 1, expl: "Mỹ trực tiếp đổ quân viễn chinh Mỹ và quân đồng minh ồ ạt vào miền Nam thực hiện chiến lược hai gọng kìm 'tìm diệt' và 'bình định'." },
        { q: "Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968 đã buộc Mỹ phải có nhượng bộ mang tính bước ngoặt nào?", options: ["Rút quân ngay lập tức", "Chấp nhận đàm phán tại Pa-ri và tuyên bố 'phi Mỹ hoá' chiến tranh", "Công nhận chính quyền cách mạng", "Kí hiệp định đình chiến ngay trong năm"], ans: 1, expl: "Mậu Thân 1968 làm lung lay ý chí xâm lược của Mỹ, buộc Mỹ ngừng ném bom miền Bắc và chấp nhận đàm phán Pa-ri." },
        { q: "Chiến thắng 'Điện Biên Phủ trên không' cuối tháng 12 năm 1972 đã đập tan cuộc tập kích chiến lược bằng vũ khí gì của Mỹ?", options: ["Tàu ngầm nguyên tử", "Pháo tự hành", "Pháo đài bay B-52 vào Hà Nội, Hải Phòng", "Vũ khí hóa học"], ans: 2, expl: "Quân dân miền Bắc bắn rơi 81 máy bay Mỹ (trong đó có 34 pháo đài bay B-52), buộc Mỹ kí Hiệp định Pa-ri." },
        { q: "Chiến dịch Hồ Chí Minh lịch sử giải phóng hoàn toàn miền Nam kết thúc vào thời khắc nào?", options: ["26-3-1975", "16-4-1975", "11 giờ 30 phút ngày 30-4-1975", "2-9-1975"], ans: 2, expl: "Trưa ngày 30-4-1975, lá cờ cách mạng tung bay trên nóc Dinh Độc Lập, miền Nam hoàn toàn giải phóng." }
      ];
    case 18:
      return [
        { q: "Xu thế trật tự thế giới sau khi Chiến tranh Lạnh kết thúc (1991 đến nay) là gì?", options: ["Đơn cực tuyệt đối dưới sự chi phối duy nhất của Mỹ", "Đa cực, nhiều trung tâm với hòa bình, hợp tác và phát triển là xu thế chủ đạo", "Bùng nổ chiến tranh thế giới thứ ba ngay lập tức", "Chia đôi thế giới thành hai cực như trước"], ans: 1, expl: "Trật tự thế giới mới chuyển dần sang xu thế đa cực, nhiều trung tâm, các quốc gia ưu tiên phát triển kinh tế." },
        { q: "Sau khi Liên Xô tan rã năm 1991, quốc gia nào là 'quốc gia kế tục' kế thừa vị thế pháp lí quốc tế tại Hội đồng Bảo an Liên hợp quốc?", options: ["U-krai-na", "Bê-la-rút", "Liên bang Nga", "Ca-dắc-xtan"], ans: 2, expl: "Liên bang Nga kế thừa tư cách thành viên thường trực Hội đồng Bảo an và các nghĩa vụ ngoại giao của Liên Xô." },
        { q: "Sự kiện khủng bố ngày 11-9-2001 ở Mỹ đã tác động như thế nào đến chính sách đối nội và đối ngoại của nước này?", options: ["Mỹ rút khỏi toàn bộ các tổ chức quốc tế", "Mỹ điều chỉnh chiến lược an ninh quốc gia, phát động cuộc chiến chống khủng bố toàn cầu", "Mỹ chấm dứt quan hệ với các nước phương Tây", "Mỹ ngừng phát triển kinh tế"], ans: 1, expl: "Sự kiện 11-9 thúc đẩy Mỹ phát động chiến tranh chống khủng bố và thắt chặt an ninh nội địa." },
        { q: "Nền kinh tế lớn thứ hai thế giới hiện nay sau Mỹ từ năm 2010 là quốc gia nào?", options: ["Nhật Bản", "Đức", "Trung Quốc", "Ấn Độ"], ans: 2, expl: "Từ năm 2010, Trung Quốc đã vượt Nhật Bản để trở thành nền kinh tế lớn thứ 2 thế giới." }
      ];
    case 19:
      return [
        { q: "Chính sách 'Cải cách và mở cửa' của Trung Quốc được khởi xướng từ năm nào do ai đề xướng?", options: ["Năm 1949 do Mao Trạch Đông", "Tháng 12-1978 do Đặng Tiểu Bình", "Năm 1991 do Giang Trạch Dân", "Năm 2000 do Hồ Cẩm Đào"], ans: 1, expl: "Hội nghị Trung ương 3 (12-1978) của Đảng Cộng sản Trung Quốc do Đặng Tiểu Bình khởi xướng đường lối cải cách mở cửa." },
        { q: "Hiệp hội các quốc gia Đông Nam Á (ASEAN) đã kết nạp Việt Nam làm thành viên thứ 7 vào năm nào?", options: ["Năm 1986", "Năm 1995", "Năm 1997", "Năm 1999"], ans: 1, expl: "Ngày 28-7-1995, Việt Nam chính thức trở thành thành viên thứ 7 của ASEAN." },
        { q: "Cộng đồng ASEAN chính thức được thành lập vào thời điểm nào?", options: ["Năm 1995", "Năm 2000", "Ngày 31-12-2015", "Năm 2020"], ans: 2, expl: "Ngày 31-12-2015, Cộng đồng ASEAN chính thức hình thành với 3 trụ cột: Chính trị - An ninh, Kinh tế, Văn hóa - Xã hội." },
        { q: "Hiện nay châu Á được đánh giá là khu vực như thế nào trong nền kinh tế thế giới?", options: ["Khu vực trì trệ, tăng trưởng âm kéo dài", "Khu vực phát triển năng động nhất và là động lực tăng trưởng kinh tế toàn cầu", "Khu vực chỉ phụ thuộc vào khai khoáng thô", "Khu vực biệt lập hoàn toàn"], ans: 1, expl: "Châu Á - Thái Bình Dương là khu vực kinh tế phát triển năng động bậc nhất thế giới hiện nay." }
      ];
    case 20:
      return [
        { q: "Kì họp đầu tiên của Quốc hội khoá VI (tháng 6 và 7-1976) đã quyết định đổi tên nước ta thành gì?", options: ["Việt Nam Dân chủ Cộng hòa", "Cộng hoà xã hội chủ nghĩa Việt Nam", "Việt Nam Cộng hòa", "Cộng hòa Liên bang Việt Nam"], ans: 1, expl: "Quốc hội thống nhất đã quyết định đổi tên nước thành Cộng hoà xã hội chủ nghĩa Việt Nam và đổi tên Sài Gòn thành TP. Hồ Chí Minh." },
        { q: "Đường lối đổi mới toàn diện đất nước được Đảng ta đề ra tại Đại hội đại biểu toàn quốc lần thứ mấy?", options: ["Đại hội IV (1976)", "Đại hội V (1982)", "Đại hội VI (tháng 12-1986)", "Đại hội VII (1991)"], ans: 2, expl: "Đại hội VI (12-1986) mở ra bước ngoặt lịch sử với công cuộc Đổi mới, phát triển kinh tế thị trường định hướng XHCN." },
        { q: "Một trong những bài học kinh nghiệm sâu sắc nhất của công cuộc Đổi mới ở nước ta là gì?", options: ["Đổi mới chính trị trước, kinh tế sau", "Lấy dân làm gốc, đổi mới kinh tế là trọng tâm, giữ vững ổn định chính trị", "Rập khuôn nguyên mẫu từ nước ngoài", "Không hợp tác quốc tế"], ans: 1, expl: "Việt Nam chủ trương lấy dân làm gốc, ưu tiên đổi mới kinh tế gắn liền với từng bước đổi mới hệ thống chính trị vững chắc." },
        { q: "Việt Nam bình thường hóa quan hệ ngoại giao với Hợp chúng quốc Hoa Kỳ vào năm nào?", options: ["Năm 1986", "Năm 1991", "Năm 1995", "Năm 2000"], ans: 2, expl: "Tháng 7-1995, Việt Nam và Hoa Kỳ chính thức tuyên bố bình thường hóa quan hệ ngoại giao." }
      ];
    case 21:
      return [
        { q: "Cách mạng công nghiệp lần thứ tư (Cách mạng 4.0) có đặc trưng nổi bật là gì?", options: ["Động cơ hơi nước", "Dây chuyền lắp ráp điện khí hóa", "Sự tích hợp công nghệ số, trí tuệ nhân tạo (AI), IoT và dữ liệu lớn", "Chế tạo tàu cánh ngầm"], ans: 2, expl: "Cách mạng 4.0 hội tụ giữa thế giới vật lí, số hóa và sinh học với AI, dữ liệu lớn, điện toán đám mây." },
        { q: "Bản chất của xu thế toàn cầu hoá là gì?", options: ["Sự cô lập kinh tế của các quốc gia", "Quá trình gia tăng mạnh mẽ các mối liên hệ, tác động qua lại và phụ thuộc lẫn nhau giữa các quốc gia", "Xoá bỏ hoàn toàn biên giới quốc gia", "Chỉ diễn ra trong lĩnh vực văn hóa ẩm thực"], ans: 1, expl: "Toàn cầu hóa là xu thế khách quan gia tăng hội nhập và phụ thuộc lẫn nhau về kinh tế, tài chính, công nghệ." },
        { q: "Cơ hội to lớn mà toàn cầu hoá mang lại cho các nước đang phát triển như Việt Nam là gì?", options: ["Không cần cạnh tranh kinh tế", "Tiếp thu vốn, công nghệ tiên tiến, mở rộng thị trường và chuyển dịch cơ cấu kinh tế", "Loại bỏ hoàn toàn tệ nạn xã hội", "Đảm bảo tự cung tự cấp hoàn toàn"], ans: 1, expl: "Toàn cầu hóa mở ra cơ hội thu hút FDI, học hỏi công nghệ và tham gia sâu vào chuỗi giá trị toàn cầu." },
        { q: "Thách thức gay gắt nhất của toàn cầu hoá đối với các nước đang phát triển là gì?", options: ["Tăng trưởng kinh tế quá nhanh", "Nguy cơ đánh mất bản sắc văn hoá, phụ thuộc kinh tế và gia tăng khoảng cách giàu nghèo", "Thiếu lao động phổ thông", "Không thể xuất khẩu hàng hóa"], ans: 1, expl: "Thách thức lớn là áp lực cạnh tranh khốc liệt, bảo vệ chủ quyền kinh tế và gìn giữ bản sắc văn hóa dân tộc." }
      ];
    default:
      return [];
  }
}

// Generate Geography quizzes and structured data
const geoList = raw.geoLessons.map((item) => {
  const ch = geoChapters.find(c => item.num >= c.range[0] && item.num <= c.range[1]);
  const lines = item.body.split('\n').map(l => l.replace(/^-\s*/, '').trim()).filter(Boolean);
  
  return {
    id: `geo-${item.num}`,
    num: item.num,
    title: item.title,
    chapter: ch ? ch.name : "ĐỊA LÍ 9",
    badge: ch ? ch.badge : "Địa lí",
    dataYear: "Số liệu 2024 / Địa giới 2025",
    lines: lines,
    quiz: generateGeoQuiz(item.num, item.title, lines)
  };
});

function generateGeoQuiz(num, title, lines) {
  switch(num) {
    case 1:
      return [
        { q: "Việt Nam là một quốc gia đa dân tộc với bao nhiêu dân tộc cùng sinh sống?", options: ["50 dân tộc", "54 dân tộc", "56 dân tộc", "63 dân tộc"], ans: 1, expl: "Nước ta có 54 dân tộc anh em, trong đó người Kinh chiếm khoảng 85,3% dân số." },
        { q: "Đặc điểm cơ cấu dân số theo độ tuổi của nước ta hiện nay là gì?", options: ["Dân số rất già", "Đang trong thời kì 'cơ cấu dân số vàng' và đồng thời có xu hướng già hoá nhanh", "Chỉ có trẻ em dưới 15 tuổi", "Tỉ lệ người già giảm mạnh"], ans: 1, expl: "Việt Nam có cơ cấu dân số vàng với lực lượng lao động dồi dào, song tốc độ già hóa dân số cũng diễn ra rất nhanh." },
        { q: "Quy mô dân số Việt Nam năm 2024 đạt khoảng bao nhiêu triệu người?", options: ["85 triệu người", "90 triệu người", "Khoảng hơn 100 triệu người", "120 triệu người"], ans: 2, expl: "Theo số liệu thống kê năm 2024, quy mô dân số Việt Nam đã vượt mốc 100 triệu người, đứng thứ 3 Đông Nam Á." },
        { q: "Người Việt Nam ở nước ngoài (kiều bào) có vai trò như thế nào đối với đất nước?", options: ["Không có mối liên hệ với quê hương", "Là bộ phận không tách rời của cộng đồng dân tộc, đóng góp nguồn kiều hối, tri thức và đầu tư", "Chỉ tham gia du lịch ngắn ngày", "Không được công nhận quốc tịch"], ans: 1, expl: "Kiều bào là một bộ phận máu thịt không tách rời của dân tộc Việt Nam, có đóng góp to lớn vào xây dựng quê hương." }
      ];
    case 2:
      return [
        { q: "Mật độ dân số trung bình của Việt Nam (năm 2024) thuộc mức nào trên thế giới?", options: ["Rất thưa thớt (dưới 50 người/km²)", "Thuộc nhóm nước có mật độ dân số cao (khoảng trên 300 người/km²)", "Trung bình thế giới", "Thấp nhất Đông Nam Á"], ans: 1, expl: "Mật độ dân số nước ta thuộc hàng cao trên thế giới, phân bố không đều giữa đồng bằng và miền núi." },
        { q: "Hai vùng có mật độ dân số cao nhất nước ta lần lượt là gì?", options: ["Đồng bằng sông Hồng và Đông Nam Bộ", "Tây Nguyên và Tây Bắc", "Bắc Trung Bộ và Duyên hải miền Trung", "Đồng bằng sông Cửu Long và Tây Bắc"], ans: 0, expl: "Đồng bằng sông Hồng và Đông Nam Bộ là hai vùng tập trung mật độ dân cư đông đúc nhất cả nước." },
        { q: "Quần cư nông thôn ở nước ta có đặc điểm không gian sinh sống điển hình là gì?", options: ["Nhà cao tầng san sát, mật độ dày đặc", "Làng, thôn, ấp, bản gắn liền với sản xuất nông - lâm - ngư nghiệp", "Chỉ tập trung quanh các khu công nghiệp", "Sống phân tán không có quan hệ dòng họ"], ans: 1, expl: "Quần cư nông thôn gắn bó với đất canh tác, nghề truyền thống, mang tính cộng đồng làng xã." },
        { q: "Tỉ lệ dân số thành thị ở nước ta những năm gần đây có xu hướng như thế nào?", options: ["Giảm liên tục", "Giữ nguyên không đổi", "Tăng dần nhờ quá trình công nghiệp hoá, đô thị hoá", "Biến động thất thường"], ans: 2, expl: "Đô thị hóa phát triển khiến tỉ lệ dân số sống ở khu vực thành thị ngày càng tăng (đạt trên 42%)." }
      ];
    case 3:
      return [
        { q: "Nguồn lao động ở nước ta có thế mạnh nổi bật nhất là gì?", options: ["Số lượng dồi dào, cần cù, khéo léo, khả năng tiếp thu khoa học kĩ thuật nhanh", "100% có trình độ thạc sĩ trở lên", "Chỉ thích hợp làm nông nghiệp thủ công", "Không thích nghi được công nghệ cao"], ans: 0, expl: "Lao động nước ta dồi dào, trẻ, cần cù và ham học hỏi tiếp thu kĩ năng mới." },
        { q: "Hạn chế lớn nhất của lực lượng lao động nước ta hiện nay là gì?", options: ["Thiếu hụt số lượng nghiêm trọng", "Tỉ lệ lao động qua đào tạo có bằng cấp, chứng chỉ còn chưa cao và phân bố chưa đồng đều", "Lao động không muốn đi làm", "Không biết sử dụng máy móc cơ bản"], ans: 1, expl: "Tỉ lệ lao động đã qua đào tạo có chứng chỉ còn hạn chế, thiếu lao động tay nghề cao và kĩ sư đầu ngành." },
        { q: "Cơ cấu lao động theo ngành kinh tế ở nước ta đang chuyển dịch theo hướng tích cực nào?", options: ["Tăng tỉ trọng lao động nông nghiệp", "Giảm tỉ trọng lao động nông - lâm - thủy sản, tăng tỉ trọng công nghiệp - xây dựng và dịch vụ", "Chỉ tập trung vào ngành dịch vụ cá nhân", "Xoá bỏ hoàn toàn lao động công nghiệp"], ans: 1, expl: "Chuyển dịch đúng hướng công nghiệp hóa: giảm nông nghiệp, tăng mạnh công nghiệp và dịch vụ." },
        { q: "Biện pháp then chốt để giải quyết vấn đề việc làm ở nước ta hiện nay là gì?", options: ["Cấm người dân di cư tìm việc", "Đẩy mạnh chuyển dịch cơ cấu kinh tế, đào tạo nghề, khuyến khích khởi nghiệp và xuất khẩu lao động", "Chỉ duy trì hình thức kinh tế hộ gia đình", "Ngừng tuyển sinh các trường đại học"], ans: 1, expl: "Đào tạo nghề nâng cao chất lượng lao động gắn với phát triển sản xuất đa dạng là giải pháp cốt lõi." }
      ];
    case 4:
      return [
        { q: "Để tìm hiểu tình hình việc làm ở địa phương, học sinh cần thu thập những số liệu cơ bản nào?", options: ["Chỉ xem giá cả hoa quả tại chợ", "Quy mô lao động trong độ tuổi, tỉ lệ thất nghiệp, tỉ lệ thiếu việc làm và cơ cấu việc làm theo ngành", "Số lượng ô tô sang trọng", "Thời tiết nhiệt độ trong ngày"], ans: 1, expl: "Số liệu về việc làm cần nắm được quy mô lực lượng lao động, tỉ lệ có việc làm và tỉ lệ thất nghiệp." },
        { q: "Sự phân hoá thu nhập bình quân đầu người theo vùng ở nước ta hiện nay cho thấy vùng nào có mức thu nhập dẫn đầu?", options: ["Tây Bắc", "Tây Nguyên", "Đông Nam Bộ", "Bắc Trung Bộ"], ans: 2, expl: "Đông Nam Bộ là vùng kinh tế phát triển năng động nhất với mức thu nhập bình quân đầu người cao nhất cả nước." },
        { q: "Vùng nào ở nước ta hiện vẫn có mức thu nhập bình quân đầu người ở mức thấp nhất do địa hình hiểm trở?", options: ["Đồng bằng sông Hồng", "Trung du và miền núi Bắc Bộ", "Đông Nam Bộ", "Đồng bằng sông Cửu Long"], ans: 1, expl: "Trung du và miền núi Bắc Bộ có địa hình núi cao chia cắt, kinh tế khó khăn nên mức thu nhập bình quân thấp." },
        { q: "Ý nghĩa của việc tìm hiểu phân hoá thu nhập giữa các vùng là gì?", options: ["Để so sánh phân biệt đối xử", "Nhận thức sự chênh lệch phát triển để đề xuất chính sách an sinh và giảm nghèo bền vững", "Chỉ phục vụ mục đích giải trí", "Kêu gọi mọi người rời bỏ quê hương"], ans: 1, expl: "Phân tích thu nhập giúp hoạch định chính sách thu hút đầu tư, giảm nghèo và phát triển kinh tế vùng hài hòa." }
      ];
    case 5:
      return [
        { q: "Ngành trồng trọt ở nước ta hiện nay giữ vai trò gì trong cơ cấu giá trị sản xuất nông nghiệp?", options: ["Chiếm tỉ trọng rất nhỏ", "Chiếm tỉ trọng lớn, là ngành sản xuất chủ đạo truyền thống", "Đã bị xóa bỏ hoàn toàn", "Chỉ trồng cây thức ăn gia súc"], ans: 1, expl: "Trồng trọt vẫn là ngành sản xuất nòng cốt, đóng góp chủ lực cho an ninh lương thực và xuất khẩu." },
        { q: "Hai vùng chuyên canh cây lương thực (lúa) lớn nhất cả nước ta là gì?", options: ["Đồng bằng sông Cửu Long và Đồng bằng sông Hồng", "Tây Nguyên và Đông Nam Bộ", "Bắc Trung Bộ và Duyên hải Nam Trung Bộ", "Trung du Bắc Bộ và Tây Bắc"], ans: 0, expl: "ĐBSCL và ĐBSH là hai vựa lúa lớn nhất, bảo đảm an ninh lương thực quốc gia và xuất khẩu gạo top đầu thế giới." },
        { q: "Vùng chuyên canh cây công nghiệp lâu năm (cà phê, cao su, hồ tiêu) lớn nhất nước ta là gì?", options: ["Đồng bằng sông Hồng", "Tây Nguyên và Đông Nam Bộ", "Bắc Trung Bộ", "Đồng bằng sông Cửu Long"], ans: 1, expl: "Tây Nguyên (số 1 về cà phê) và Đông Nam Bộ (số 1 về cao su) là hai thủ phủ cây công nghiệp lớn nhất cả nước." },
        { q: "Xu hướng phát triển nông nghiệp hiện đại ở nước ta hiện nay là gì?", options: ["Dựa hoàn toàn vào lao động chân tay", "Nông nghiệp sinh thái, hữu cơ, ứng dụng công nghệ cao và liên kết chuỗi giá trị", "Tăng cường dùng hóa chất bảo vệ thực vật", "Chặt phá rừng lấy đất trồng trọt"], ans: 1, expl: "Nông nghiệp công nghệ cao, nông nghiệp tuần hoàn và an toàn sinh học là hướng đi tất yếu." }
      ];
    case 6:
      return [
        { q: "Nguồn lợi thuỷ sản nước ta rất phong phú nhờ có đặc điểm tự nhiên nào?", options: ["Có nhiều sa mạc cát", "Đường bờ biển dài hơn 3.260 km, vùng đặc quyền kinh tế rộng trên 1 triệu km² với 4 ngư trường trọng điểm", "Mùa đông lạnh kéo dài", "Nhiều sông băng đóng băng"], ans: 1, expl: "Biển ấm, ngư trường rộng lớn và mạng lưới sông ngòi dày đặc tạo tiềm năng thủy sản khổng lồ." },
        { q: "Hai tỉnh/thành phố có sản lượng nuôi trồng và đánh bắt thuỷ sản lớn nhất cả nước tập trung ở vùng nào?", options: ["Vùng Đồng bằng sông Cửu Long", "Vùng Tây Bắc", "Vùng Tây Nguyên", "Vùng Trung du Bắc Bộ"], ans: 0, expl: "Đồng bằng sông Cửu Long chiếm hơn 50% sản lượng thủy sản cả nước cả về đánh bắt lẫn nuôi trồng (tôm, cá tra)." },
        { q: "Mục đích chính của việc bảo vệ và trồng rừng phòng hộ ở nước ta là gì?", options: ["Để lấy gỗ làm giấy xuất khẩu", "Chắn gió, bão, chắn sóng, cố định cát ven biển và điều tiết nguồn nước đầu nguồn, chống lũ quét sạt lở", "Để săn bắt chim muông", "Để xây dựng sân bay"], ans: 1, expl: "Rừng phòng hộ có vai trò sinh thái xung yếu, bảo vệ đất, nguồn nước và giảm nhẹ thiên tai." },
        { q: "Vấn đề cấp thiết hàng đầu trong khai thác hải sản xa bờ của nước ta hiện nay là gì?", options: ["Khai thác bằng xung điện và chất nổ", "Chống khai thác hải sản bất hợp pháp (IUU), hiện đại hóa tàu thuyền và bảo vệ chủ quyền biển đảo", "Chỉ đánh bắt ven bờ", "Không cho thuyền ra khơi"], ans: 1, expl: "Gỡ cảnh báo 'thẻ vàng' IUU của EC gắn với bảo vệ môi trường biển bền vững là nhiệm vụ trọng tâm." }
      ];
    case 7:
      return [
        { q: "Mục tiêu chính của bài thực hành viết báo cáo về một mô hình sản xuất nông nghiệp có hiệu quả là gì?", options: ["Vẽ bản đồ hành chính", "Tìm hiểu quy trình, điều kiện áp dụng, hiệu quả kinh tế - xã hội - môi trường của mô hình", "Học thuộc lòng bảng cửu chương", "Chỉ tính toán chi phí quảng cáo"], ans: 1, expl: "Bài thực hành rèn kĩ năng phân tích tính ưu việt của mô hình nông nghiệp sạch, hiệu quả cao." },
        { q: "Một mô hình nông nghiệp tuần hoàn điển hình thường kết hợp các yếu tố nào?", options: ["Trồng trọt kết hợp chăn nuôi, tận dụng chất thải chăn nuôi làm phân bón hữu cơ hoặc biogas", "Chỉ mua thức ăn đóng hộp", "Thải trực tiếp nước thải ra kênh rạch", "Đốt rơm rạ tự do trên đồng ruộng"], ans: 0, expl: "Kinh tế tuần hoàn trong nông nghiệp tái sử dụng phụ phẩm làm đầu vào hữu cơ khép kín." },
        { q: "Mô hình tôm - lúa ở các tỉnh ven biển Đồng bằng sông Cửu Long thích ứng tốt với hiện tượng gì?", options: ["Băng tuyết mùa đông", "Xâm nhập mặn và biến đổi khí hậu theo mùa", "Động đất sóng thần", "Nhiệt độ hạ thấp dưới 0°C"], ans: 1, expl: "Mô hình 'lúa thơm - tôm sạch' luân canh mùa mưa trồng lúa, mùa khô nước mặn nuôi tôm rất bền vững." },
        { q: "Khi viết báo cáo mô hình nông nghiệp, phần 'Đánh giá triển vọng' cần nêu rõ điều gì?", options: ["Khả năng nhân rộng mô hình và đóng góp bảo vệ môi trường sinh thái", "Hạn chế sử dụng máy tính", "Bỏ qua chi phí sản xuất", "Chỉ tập trung vào nhược điểm"], ans: 0, expl: "Đánh giá triển vọng tập trung vào tiềm năng mở rộng quy mô và tính bền vững kinh tế - sinh thái." }
      ];
    case 8:
      return [
        { q: "Ngành công nghiệp nào sau đây thuộc nhóm công nghiệp trọng điểm ở nước ta?", options: ["Công nghiệp dệt may, da giày", "Công nghiệp chế biến lương thực, thực phẩm", "Công nghiệp điện tử, viễn thông", "Tất cả các ngành trên"], ans: 3, expl: "Cả ba ngành trên đều có tỉ trọng lớn, thế mạnh lâu dài và thúc đẩy các ngành khác phát triển." },
        { q: "Hai trung tâm công nghiệp lớn nhất cả nước ta hiện nay là gì?", options: ["Hà Nội và TP. Hồ Chí Minh", "Huế và Đà Nẵng", "Cần Thơ và Cà Mau", "Quy Nhơn và Nha Trang"], ans: 0, expl: "TP. Hồ Chí Minh và Hà Nội là hai cực tăng trưởng công nghiệp lớn nhất với quy mô rất lớn và cơ cấu đa ngành." },
        { q: "Nguồn năng lượng tái tạo nào đang được phát triển bùng nổ ở vùng Nam Trung Bộ và Tây Nguyên?", options: ["Điện than", "Điện mặt trời và điện gió", "Điện hạt nhân", "Điện thủy triều"], ans: 1, expl: "Nhiều nắng và gió giúp Duyên hải Nam Trung Bộ và Tây Nguyên dẫn đầu cả nước về năng lượng tái tạo sạch." },
        { q: "Xu thế chuyển dịch cơ cấu ngành công nghiệp ở nước ta hiện nay là gì?", options: ["Tăng tỉ trọng công nghiệp khai khoáng thô", "Tăng tỉ trọng công nghiệp chế biến, chế tạo, công nghệ cao và công nghiệp xanh", "Ngừng phát triển công nghiệp điện tử", "Chỉ sản xuất hàng thủ công mỹ nghệ"], ans: 1, expl: "Chuyển dịch từ gia công sơ cấp sang sản xuất công nghệ cao, chế biến sâu và thân thiện với môi trường." }
      ];
    case 9:
      return [
        { q: "Hình thức tổ chức lãnh thổ công nghiệp đơn giản nhất là gì?", options: ["Điểm công nghiệp", "Khu công nghiệp tập trung", "Trung tâm công nghiệp", "Vùng công nghiệp"], ans: 0, expl: "Điểm công nghiệp đồng nhất với một điểm dân cư, gồm 1–2 xí nghiệp không có mối liên hệ sản xuất phối hợp." },
        { q: "Khu công nghiệp tập trung ở nước ta có đặc điểm pháp lí và quy hoạch nổi bật nào?", options: ["Không có ranh giới địa lí xác định", "Có ranh giới địa lí rõ ràng, chuyên sản xuất công nghiệp và thực hiện dịch vụ công nghiệp, không có dân cư sinh sống", "Bắt buộc phải nằm giữa trung tâm thủ đô", "Chỉ dành cho sản xuất nông nghiệp"], ans: 1, expl: "Khu công nghiệp có ranh giới rõ rệt, hạ tầng hoàn chỉnh và được hưởng các chính sách ưu đãi đầu tư." },
        { q: "Trung tâm công nghiệp thường được phân loại theo tiêu chí quy mô nào?", options: ["Rất lớn, lớn, trung bình và nhỏ", "Chỉ có quy mô quốc tế", "Dựa theo chiều cao ống khói", "Dựa theo số lượng xe máy"], ans: 0, expl: "Dựa vào giá trị sản xuất, các trung tâm công nghiệp được phân thành: Rất lớn, Lớn, Trung bình." },
        { q: "Ý nghĩa của việc tổ chức hợp lí các hình thức lãnh thổ công nghiệp là gì?", options: ["Để tăng chi phí vận chuyển", "Khai thác tối ưu tài nguyên, thu hút đầu tư, bảo vệ môi trường và thúc đẩy công nghiệp hoá", "Để phân tán nhà máy rời rạc", "Ngăn cản hội nhập kinh tế"], ans: 1, expl: "Quy hoạch không gian công nghiệp giúp tối ưu chuỗi cung ứng, hạ tầng dùng chung và xử lý chất thải tập trung." }
      ];
    case 10:
      return [
        { q: "Ngành dịch vụ ở nước ta bao gồm các nhóm ngành chính nào?", options: ["Dịch vụ tiêu dùng, dịch vụ sản xuất và dịch vụ công", "Chỉ gồm ngành du lịch", "Chỉ gồm ngành bưu chính viễn thông", "Chỉ gồm ngành vận tải đường sắt"], ans: 0, expl: "Cơ cấu dịch vụ chia thành 3 nhóm lớn: Dịch vụ sản xuất, Dịch vụ tiêu dùng và Dịch vụ công (hành chính, y tế, giáo dục)." },
        { q: "Tuyến đường bộ huyết mạch xuyên suốt từ Bắc vào Nam của nước ta là gì?", options: ["Quốc lộ 1 và đường cao tốc Bắc - Nam", "Quốc lộ 2", "Quốc lộ 5", "Quốc lộ 9"], ans: 0, expl: "Quốc lộ 1 cùng trục đường bộ cao tốc Bắc - Nam là trục xương sống giao thông vận tải đường bộ của cả nước." },
        { q: "Hai đầu mối giao thông vận tải đường hàng không quốc tế lớn nhất nước ta là hai sân bay nào?", options: ["Sân bay Đà Nẵng và Cát Bi", "Sân bay Nội Bài (Hà Nội) và Tân Sơn Nhất (TP. Hồ Chí Minh)", "Sân bay Phú Bài và Cam Ranh", "Sân bay Cần Thơ và Chu Lai"], ans: 1, expl: "Nội Bài và Tân Sơn Nhất phục vụ lượng hành khách và hàng hóa quốc tế và nội địa lớn nhất cả nước." },
        { q: "Tiềm năng nổi trội để phát triển ngành du lịch ở nước ta là gì?", options: ["Có nhiều vùng khí hậu băng tuyết cực đới", "Tài nguyên du lịch tự nhiên (vịnh biển, hang động, khí hậu nhiệt đới) và nhân văn (di sản văn hóa, lễ hội) phong phú", "Thiếu địa điểm tham quan", "Chỉ có các tòa nhà cao tầng mới xây"], ans: 1, expl: "Việt Nam giàu tài nguyên di sản thế giới UNESCO, biển đảo đẹp và nền văn hóa đa dạng đặc sắc." }
      ];
    case 11:
      return [
        { q: "Xu hướng phát triển thương mại điện tử (E-commerce) ở Việt Nam hiện nay có đặc điểm gì?", options: ["Tăng trưởng chậm và suy giảm", "Tăng trưởng bùng nổ, gắn liền với chuyển đổi số, thanh toán không dùng tiền mặt và sàn trực tuyến", "Bị cấm đoán trên toàn quốc", "Chỉ dành cho các doanh nghiệp nước ngoài"], ans: 1, expl: "Thương mại điện tử Việt Nam tăng trưởng thuộc top đầu Đông Nam Á nhờ internet và điện thoại thông minh." },
        { q: "Thị trường xuất khẩu hàng hoá lớn nhất của Việt Nam hiện nay là quốc gia nào?", options: ["Hợp chúng quốc Hoa Kỳ (Mỹ)", "Liên bang Nga", "Bra-xin", "Ai Cập"], ans: 0, expl: "Mỹ là thị trường xuất khẩu lớn nhất của Việt Nam với kim ngạch vượt mốc 100 tỉ USD." },
        { q: "Xu hướng phát triển du lịch xanh, du lịch bền vững đòi hỏi điều gì?", options: ["Chặt cây mở rộng đường bê tông vào rừng", "Bảo tồn cảnh quan sinh thái, giảm rác thải nhựa, tôn trọng văn hóa bản địa và chia sẻ lợi ích với cộng đồng", "Khai thác triệt để tài nguyên không tái tạo", "Ngăn cấm du khách bảo vệ môi trường"], ans: 1, expl: "Du lịch sinh thái bền vững gắn liền với trách nhiệm bảo vệ môi trường và di sản văn hóa." },
        { q: "Sự phân bố các trung tâm thương mại lớn ở nước ta phụ thuộc chủ yếu vào nhân tố nào?", options: ["Địa hình núi cao", "Quy mô dân số, mức sống của người dân và mạng lưới giao thông thuận lợi", "Số lượng mỏ khoáng sản kim loại", "Mức độ che phủ rừng"], ans: 1, expl: "Thương mại bán lẻ tập trung tại các đô thị đông dân, có sức mua lớn và hạ tầng logistics hiện đại." }
      ];
    case 12:
      return [
        { q: "Vùng Trung du và miền núi Bắc Bộ có vị trí địa lí chiến lược đặc biệt như thế nào?", options: ["Nằm hoàn toàn ở phía Nam", "Giáp Trung Quốc ở phía Bắc, giáp Lào ở phía Tây, giáp biển ở phía Đông và liền kề Đồng bằng sông Hồng", "Không giáp biển", "Bị cô lập hoàn toàn"], ans: 1, expl: "Vị trí tiếp giáp quốc tế và vùng kinh tế trọng điểm tạo vai trò tiền tiêu an ninh quốc phòng và cửa ngõ giao thương." },
        { q: "Thế mạnh công nghiệp nổi bật hàng đầu của vùng Trung du và miền núi Bắc Bộ là gì?", options: ["Chế biến thủy sản nước ngọt", "Khai thác khoáng sản và phát triển thủy điện lớn (Hòa Bình, Sơn La, Lai Châu)", "Công nghiệp đóng tàu ngầm", "Lọc hóa dầu"], ans: 1, expl: "Vùng giàu khoáng sản nhất nước và có tiềm năng thủy điện khổng lồ trên hệ thống sông Đà, sông Chảy." },
        { q: "Cây công nghiệp và dược liệu cận nhiệt, ôn đới được phát triển mạnh ở vùng nào nhờ khí hậu có mùa đông lạnh?", options: ["Tây Nguyên", "Trung du và miền núi Bắc Bộ", "Đông Nam Bộ", "Đồng bằng sông Cửu Long"], ans: 1, expl: "Khí hậu nhiệt đới gió mùa có mùa đông lạnh và địa hình núi cao tạo thế mạnh trồng chè, hồi, quế, thảo quả." },
        { q: "Khó khăn tự nhiên lớn nhất ảnh hưởng đến sản xuất và đời sống của vùng Trung du và miền núi Bắc Bộ là gì?", options: ["Hạn hán kéo dài 10 tháng", "Thiên tai: lũ quét, sạt lở đất, rét đậm, rét hại, sương muối và địa hình hiểm trở", "Hiện tượng sa mạc hóa diện rộng", "Ngập úng do triều cường thường xuyên"], ans: 1, expl: "Mùa mưa dễ sạt lở đất đá lũ quét, mùa đông chịu rét hại và sương muối gây thiệt hại gia súc, hoa màu." }
      ];
    case 13:
      return [
        { q: "Đồng bằng sông Hồng có vị trí trung tâm nổi bật là hạt nhân của vùng kinh tế trọng điểm nào?", options: ["Vùng kinh tế trọng điểm phía Nam", "Vùng kinh tế trọng điểm Bắc Bộ với Thủ đô Hà Nội là trung tâm chính trị, văn hóa, kinh tế", "Vùng kinh tế Tây Nguyên", "Vùng kinh tế biên mậu phía Tây"], ans: 1, expl: "Đồng bằng sông Hồng có Thủ đô Hà Nội là trái tim của cả nước và là trung tâm kinh tế - văn hóa hàng đầu." },
        { q: "Tài nguyên đất đai nổi bật nhất của Đồng bằng sông Hồng là gì?", options: ["Đất feralit đỏ vàng trên đá vôi", "Đất phù sa màu mỡ được bồi đắp bởi hệ thống sông Hồng và sông Thái Bình", "Đất cát pha ven biển", "Đất xám bạc màu"], ans: 1, expl: "Đất phù sa màu mỡ chiếm diện tích lớn, rất thuận lợi cho thâm canh lúa nước và cây thực phẩm." },
        { q: "Vấn đề xã hội - dân số cấp bách hàng đầu của vùng Đồng bằng sông Hồng hiện nay là gì?", options: ["Thiếu hụt trầm trọng lao động", "Mật độ dân số quá cao, sức ép việc làm, nhà ở, hạ tầng đô thị và ô nhiễm môi trường", "Tỉ lệ thất học cao", "Không có trường đại học"], ans: 1, expl: "Mật độ dân số cao nhất cả nước (trên 1.000 người/km²) tạo áp lực lớn lên giao thông, y tế, nhà ở và môi trường." },
        { q: "Vùng Đồng bằng sông Hồng có thế mạnh trồng vụ rau màu nào nổi bật mà các đồng bằng phía Nam không có?", options: ["Vụ hè thu", "Vụ đông với nhiều loại rau quả ôn đới và cận nhiệt", "Vụ mùa mưa", "Vụ cà phê"], ans: 1, expl: "Mùa đông có 2–3 tháng nhiệt độ hạ thấp dưới 18°C cho phép trồng bắp cải, su hào, khoai tây vụ đông đem lại giá trị cao." }
      ];
    case 14:
      return [
        { q: "Vùng Bắc Trung Bộ có đặc điểm hình thái lãnh thổ tự nhiên đặc thù là gì?", options: ["Địa hình vuông vức, rộng lớn", "Kéo dài và hẹp ngang nhất cả nước, sườn Đông Trường Sơn dốc về phía biển", "Chỉ gồm đảo nổi ngoài đại dương", "Toàn bộ là bình nguyên bằng phẳng"], ans: 1, expl: "Bắc Trung Bộ hẹp ngang, có nơi chưa đầy 50 km từ biên giới tới biển (Quảng Bình)." },
        { q: "Cơ cấu kinh tế nông - lâm - ngư nghiệp theo lát cắt không gian từ Tây sang Đông của Bắc Trung Bộ thể hiện như thế nào?", options: ["Rừng và chăn nuôi đại gia súc (phía Tây) -> Cây công nghiệp, cây lương thực (đồng bằng) -> Nuôi trồng, đánh bắt thủy sản (ven biển)", "Biển -> Núi cao -> Đồng bằng", "Không có sự phân hóa", "Chỉ có trồng lúa ở khắp mọi nơi"], ans: 0, expl: "Phân hóa rõ rệt: rừng đầu nguồn phía Tây -> cây hàng năm ở dải đồng bằng nhỏ hẹp -> kinh tế biển phía Đông." },
        { q: "Hiện tượng thời tiết đặc trưng gây khô nóng dữ dội vào đầu mùa hạ ở Bắc Trung Bộ là gì?", options: ["Gió mùa Đông Bắc", "Gió phơn Tây Nam (gió Lào)", "Bão tuyết", "Mưa đá triền miên"], ans: 1, expl: "Gió Tây Nam vượt dãy Trường Sơn bị biến tính gây hiện tượng phơn khô nóng gay gắt trên diện rộng." },
        { q: "Trung tâm du lịch văn hóa - lịch sử nổi tiếng của vùng Bắc Trung Bộ được UNESCO ghi danh là gì?", options: ["Quần thể Di tích Cố đô Huế và Vườn quốc gia Phong Nha - Kẻ Bàng", "Thánh địa Mỹ Sơn", "Phố cổ Hội An", "Hồ Ba Bể"], ans: 0, expl: "Cố đô Huế, Nhã nhạc cung đình Huế và Phong Nha - Kẻ Bàng là các di sản thế giới tiêu biểu của Bắc Trung Bộ." }
      ];
    case 15:
      return [
        { q: "Các loại hình thiên tai thường xuyên xảy ra và gây hậu quả nghiêm trọng nhất ở vùng Bắc Trung Bộ là gì?", options: ["Bão, áp thấp nhiệt đới, lũ lụt, lũ quét, hạn hán và hiện tượng cát bay cát chảy", "Núi lửa phun trào", "Bão tuyết đóng băng dày", "Động đất mạnh trên 8 độ Richter"], ans: 0, expl: "Khúc ruột miền Trung thường xuyên chịu bão dồn dập vào mùa thu đông kèm mưa lớn gây lũ chồng lũ." },
        { q: "Giải pháp sinh học quan trọng hàng đầu để cố định cồn cát ven biển ở Bắc Trung Bộ là gì?", options: ["Xây tường bê tông chắn sóng cao 20 m", "Trồng rừng phi lao chắn gió, chắn cát bay lấn đồng ruộng làng mạc", "Đào hào sâu ven biển", "Rải bạt phủ cát"], ans: 1, expl: "Dải rừng phi lao phòng hộ ven biển có tác dụng ngăn cát bay, cát chảy lấn chiếm làng xóm và ruộng đồng." },
        { q: "Biện pháp công trình trong phòng chống bão lũ ở Bắc Trung Bộ bao gồm điều gì?", options: ["Hệ thống hồ chứa thủy lợi, đê biển, kè sông và âu thuyền tránh trú bão cho tàu thuyền", "Chỉ ngồi chờ bão qua", "Tháo cống cho nước tràn tự do", "Phá bỏ các đập trữ nước"], ans: 0, expl: "Kiên cố hóa công trình hồ đập, hệ thống cảnh báo sớm và khu neo đậu tàu thuyền an toàn là giải pháp then chốt." },
        { q: "Nhiệm vụ cấp bách của học sinh và cộng đồng trong ứng phó với biến đổi khí hậu là gì?", options: ["Chặt cây đốt lửa sưởi ấm", "Nâng cao nhận thức, tham gia trồng cây gây rừng, tiết kiệm năng lượng và chủ động kĩ năng phòng tránh thiên tai", "Xả rác thải bừa bãi ra kênh rạch", "Không quan tâm dự báo thời tiết"], ans: 1, expl: "Rèn luyện kĩ năng sinh tồn, theo dõi sát dự báo thời tiết và chung tay hành động vì môi trường xanh." }
      ];
    case 16:
      return [
        { q: "Vùng Duyên hải Nam Trung Bộ có thế mạnh vượt trội nào về kinh tế biển?", options: ["Vùng biển sâu, nhiều vũng vịnh kín gió thuận lợi xây dựng cảng nước sâu và phát triển du lịch biển đảo", "Không có tiềm năng biển", "Chỉ làm muối thủ công", "Chỉ nuôi cá nước ngọt"], ans: 0, expl: "Có các vịnh nước sâu nổi tiếng (Cam Ranh, Vân Phong, Dung Quất) và bãi biển đẹp (Nha Trang, Quy Nhơn)." },
        { q: "Cây công nghiệp lâu năm số một của vùng Tây Nguyên là cây gì?", options: ["Cây cao su", "Cây chè", "Cây cà phê (đặc biệt là cà phê vối Robusta)", "Cây hồi"], ans: 2, expl: "Tây Nguyên là thủ phủ cà phê của Việt Nam, đưa nước ta trở thành quốc gia xuất khẩu cà phê Robusta số 1 thế giới." },
        { q: "Tài nguyên khoáng sản kim loại có trữ lượng lớn nhất cả nước ở vùng Tây Nguyên là gì?", options: ["Quặng bô-xít (bauxite) luyện nhôm", "Than đá", "Dầu mỏ", "Vàng sa khoáng"], ans: 0, expl: "Quặng bô-xít trên nền đất đỏ bazan Tây Nguyên có trữ lượng hàng tỉ tấn tập trung ở Đắk Nông, Lâm Đồng." },
        { q: "Ý nghĩa chiến lược của việc tăng cường liên kết kinh tế giữa Duyên hải Nam Trung Bộ và Tây Nguyên là gì?", options: ["Không có ý nghĩa gì", "Kết nối hành lang kinh tế Đông - Tây: Tây Nguyên ra biển qua các cảng biển Duyên hải, bổ trợ thế mạnh nông nghiệp và kinh tế biển", "Để chia tách thị trường", "Chỉ để tổ chức lễ hội"], ans: 1, expl: "Duyên hải mở cửa biển đón hàng xuất khẩu Tây Nguyên, thúc đẩy giao thương quốc tế qua trục hành lang Đông - Tây." }
      ];
    case 17:
      return [
        { q: "Vùng Đông Nam Bộ giữ vị trí như thế nào trong nền kinh tế Việt Nam?", options: ["Vùng kinh tế kém phát triển nhất", "Đầu tàu kinh tế, vùng phát triển năng động nhất, đóng góp lớn nhất vào GDP và thu ngân sách quốc gia", "Vùng chỉ tập trung nông nghiệp tự cấp", "Vùng dân cư thưa thớt nhất"], ans: 1, expl: "Đông Nam Bộ là trung tâm công nghiệp, dịch vụ tài chính, logistics lớn nhất, tạo động lực tăng trưởng cho cả nước." },
        { q: "Hạt nhân trung tâm kinh tế, khoa học công nghệ và đổi mới sáng tạo của vùng Đông Nam Bộ là đô thị nào?", options: ["Thành phố Biên Hòa", "Thành phố Thủ Dầu Một", "Thành phố Hồ Chí Minh", "Thành phố Vũng Tàu"], ans: 2, expl: "TP. Hồ Chí Minh là trung tâm kinh tế tài chính đặc biệt, cực tăng trưởng dẫn dắt vùng kinh tế trọng điểm phía Nam." },
        { q: "Ngành công nghiệp khai thác nổi bật ở thềm lục địa vùng Đông Nam Bộ từ thập niên 1980 đến nay là gì?", options: ["Khai thác quặng sắt", "Khai thác dầu thô và khí tự nhiên", "Khai thác than bùn", "Khai thác đá hoa cương"], ans: 1, expl: "Các mỏ dầu khí Bạch Hổ, Rồng, Đại Hùng trên thềm lục địa Đông Nam Bộ là nguồn năng lượng quý giá." },
        { q: "Thách thức lớn nhất đối với sự phát triển bền vững của vùng Đông Nam Bộ hiện nay là gì?", options: ["Thiếu tài nguyên đất", "Tình trạng quá tải hạ tầng giao thông, ngập úng đô thị do triều cường và sức ép ô nhiễm môi trường", "Thiếu thị trường tiêu thụ", "Khí hậu quá lạnh về mùa đông"], ans: 1, expl: "Sức ép dân số cơ học đông đúc, hạ tầng kết nối liên vùng chưa đồng bộ và ngập lụt là rào cản chính." }
      ];
    case 18:
      return [
        { q: "Ý nghĩa của việc xây dựng hệ thống đường vành đai (Vành đai 3, Vành đai 4) và cao tốc kết nối vùng Đông Nam Bộ là gì?", options: ["Tăng tình trạng ùn tắc giao thông", "Mở rộng không gian phát triển, giảm ùn tắc nội đô và rút ngắn thời gian vận chuyển hàng hóa ra cụm cảng Cái Mép - Thị Vải", "Để đóng cửa các cảng biển", "Chỉ phục vụ xe đạp"], ans: 1, expl: "Các tuyến vành đai và cao tốc liên vùng giúp giải tỏa áp lực giao thông và kết nối công nghiệp với cảng biển quốc tế." },
        { q: "Cụm cảng nước sâu quốc tế quan trọng nhất của vùng Đông Nam Bộ có thể đón tàu mẹ siêu trọng tải đi thẳng bờ Tây nước Mỹ là gì?", options: ["Cảng Cửa Lò", "Cụm cảng Cái Mép – Thị Vải (Bà Rịa – Vũng Tàu)", "Cảng Sông Hàn", "Cảng Quy Nhơn"], ans: 1, expl: "Cái Mép - Thị Vải là cụm cảng nước sâu trung chuyển quốc tế hiện đại tầm cỡ khu vực Đông Nam Á." },
        { q: "Sự kết nối giữa Đông Nam Bộ với vùng Đồng bằng sông Cửu Long mang lại lợi ích tương hỗ nào?", options: ["ĐBSCL cung cấp nguyên liệu nông sản sạch dồi dào, Đông Nam Bộ cung cấp công nghệ chế biến và dịch vụ xuất khẩu", "Hai vùng triệt tiêu thế mạnh lẫn nhau", "ĐBSCL không giao thương với Đông Nam Bộ", "Chỉ vận chuyển gỗ rừng"], ans: 0, expl: "ĐBSCL là vùng cung cấp nguồn lương thực thực phẩm khổng lồ, ĐNB giữ vai trò chế biến sâu và logistics xuất khẩu." },
        { q: "Dự án sân bay quốc tế lớn nhất cả nước đang được xây dựng tại tỉnh Đồng Nai của vùng Đông Nam Bộ là gì?", options: ["Sân bay Nội Bài", "Sân bay Quốc tế Long Thành", "Sân bay Chu Lai", "Sân bay Phù Cát"], ans: 1, expl: "Cảng hàng không quốc tế Long Thành sẽ là trung tâm trung chuyển hàng không tầm cỡ khu vực châu Á." }
      ];
    case 19:
      return [
        { q: "Đồng bằng sông Cửu Long là vùng kinh tế giữ vị trí số một cả nước về lĩnh vực nào?", options: ["Sản xuất công nghiệp nặng", "Sản xuất lúa gạo, nuôi trồng thủy sản và cây ăn quả nhiệt đới", "Khai thác than đá", "Công nghiệp luyện kim"], ans: 1, expl: "ĐBSCL là vựa lúa, vựa trái cây và vựa thủy sản xuất khẩu lớn nhất của nước ta." },
        { q: "Đặc điểm tài nguyên thiên nhiên của Đồng bằng sông Cửu Long vào mùa lũ hàng năm đem lại lợi ích gì?", options: ["Gây động đất sóng thần", "Nước lũ mang theo nguồn phù sa trù phú bồi đắp ruộng đồng, thau chua rửa mặn và cung cấp nguồn lợi thủy sản tôm cá dồi dào", "Làm đóng băng mặt đất", "Thiêu rụi mùa màng"], ans: 1, expl: "Người dân Tây Nam Bộ có tập quán 'sống chung với lũ' tận dụng phù sa và nguồn lợi thủy sản tự nhiên." },
        { q: "Khó khăn tự nhiên lớn nhất về đất đai và nguồn nước vào mùa khô ở Đồng bằng sông Cửu Long là gì?", options: ["Tuyết rơi dày đặc", "Tình trạng thiếu nước ngọt, xâm nhập mặn sâu vào nội đồng và đất phèn, đất mặn chiếm diện tích lớn", "Núi lửa hoạt động", "Mưa đá liên tục"], ans: 1, expl: "Mùa khô kéo dài khiến nước biển lấn sâu vào sông rạch, gây thiếu nước ngọt sinh hoạt và tưới tiêu nghiêm trọng." },
        { q: "Trung tâm kinh tế, văn hóa và giáo dục lớn nhất giữ vai trò đầu tàu của vùng Đồng bằng sông Cửu Long là thành phố nào?", options: ["Thành phố Cà Mau", "Thành phố Long Xuyên", "Thành phố Cần Thơ", "Thành phố Mỹ Tho"], ans: 2, expl: "Cần Thơ là đô thị trực thuộc Trung ương, trung tâm động lực phát triển toàn vùng Tây Nam Bộ." }
      ];
    case 20:
      return [
        { q: "Biểu hiện rõ rệt nhất của biến đổi khí hậu tác động đến Đồng bằng sông Cửu Long hiện nay là gì?", options: ["Nước biển dâng, sạt lở bờ sông, bờ biển và hiện tượng xâm nhập mặn ngày càng khốc liệt", "Băng tan trên đỉnh núi", "Khí hậu chuyển sang ôn đới lạnh", "Động đất thường xuyên"], ans: 0, expl: "ĐBSCL là một trong những đồng bằng chịu tổn thương nặng nề nhất thế giới do biến đổi khí hậu và nước biển dâng." },
        { q: "Chiến lược thích ứng thông minh với biến đổi khí hậu theo Nghị quyết 120/NQ-CP của Chính phủ tại ĐBSCL dựa trên quan điểm nào?", options: ["Ngăn chặn triệt để mọi dòng nước tự nhiên", "Chủ động 'thuận thiên', biến thách thức thành thời cơ, tôn trọng quy luật tự nhiên theo 3 vùng sinh thái (ngọt, lợ, mặn)", "Đắp đê bao khép kín toàn bộ đồng bằng", "Chuyển toàn bộ dân cư đi nơi khác"], ans: 1, expl: "Chiến lược 'thuận thiên' phân vùng sinh thái để chuyển đổi mô hình sản xuất phù hợp với nguồn nước." },
        { q: "Hành động thiết thực nào của học sinh góp phần bảo vệ tài nguyên nước ngọt ở vùng ĐBSCL?", options: ["Mở vòi nước chảy tự do", "Sử dụng nước tiết kiệm, không xả rác bừa bãi xuống kênh rạch, tham gia trồng cây bảo vệ bờ kênh", "Đổ dầu nhớt xuống sông", "Sử dụng túi ni lông dùng một lần bừa bãi"], ans: 1, expl: "Ý thức bảo vệ nguồn nước sạch và giữ gìn vệ sinh kênh mương là hành động thiết thực của mỗi học sinh." },
        { q: "Mô hình chuyển đổi kinh tế nào thích ứng hiệu quả với tình trạng xâm nhập mặn ở các tỉnh ven biển Bến Tre, Tiền Giang, Bạc Liêu?", options: ["Chuyển từ độc canh cây lúa sang mô hình đa dạng hóa cây ăn trái chịu mặn, nuôi tôm sinh thái, tôm - rừng", "Bỏ hoang đất đai", "Chỉ làm nghề dệt chiếu", "Phá bỏ các cống ngăn mặn"], ans: 0, expl: "Chuyển dịch cơ cấu mùa vụ và nuôi thủy sản nước lợ/mặn đem lại hiệu quả kinh tế cao và bền vững." }
      ];
    case 21:
      return [
        { q: "Việt Nam có đường bờ biển dài bao nhiêu và tiếp giáp với vùng biển nào?", options: ["Dài 1.500 km giáp Ấn Độ Dương", "Dài hơn 3.260 km, tiếp giáp Biển Đông với vùng đặc quyền kinh tế rộng hơn 1 triệu km²", "Dài 500 km giáp Thái Bình Dương", "Không có bờ biển"], ans: 1, expl: "Đường bờ biển nước ta trải dài hơn 3.260 km từ Quảng Ninh đến Kiên Giang." },
        { q: "Bốn ngành kinh tế biển trọng điểm trong chiến lược phát triển kinh tế biển Việt Nam là gì?", options: ["Khai thác khoáng sản biển; Giao thông vận tải biển; Du lịch và dịch vụ biển; Khai thác và nuôi trồng hải sản", "Chỉ có nghề làm muối", "Chỉ có nghề săn bắt cá voi", "Chỉ có đóng bè gỗ"], ans: 0, expl: "4 ngành trụ cột phát triển kinh tế biển gắn kết hài hòa với bảo đảm quốc phòng an ninh." },
        { q: "Hai quần đảo tiền tiêu xa bờ thiêng liêng khẳng định chủ quyền biển đảo của Việt Nam trên Biển Đông là gì?", options: ["Quần đảo Côn Đảo và Phú Quốc", "Quần đảo Hoàng Sa và quần đảo Trường Sa", "Quần đảo Cát Bà và Cô Tô", "Quần đảo Nam Du và Hòn Khoai"], ans: 1, expl: "Hoàng Sa (thuộc TP. Đà Nẵng) và Trường Sa (thuộc tỉnh Khánh Hòa) là lãnh thổ chủ quyền thiêng liêng bất khả xâm phạm của Tổ quốc." },
        { q: "Nhiệm vụ cấp bách hàng đầu trong việc bảo vệ môi trường biển, đảo nước ta hiện nay là gì?", options: ["Tăng cường xả nước thải công nghiệp ra biển", "Phòng chống ô nhiễm rác thải nhựa đại dương, bảo vệ rạn san hô, rừng ngập mặn và bảo tồn đa dạng sinh học biển", "Khai thác san hô làm đồ lưu niệm", "Đánh cá bằng hóa chất độc hại"], ans: 1, expl: "Bảo tồn hệ sinh thái biển, giảm thiểu rác thải nhựa và thiết lập các khu bảo tồn biển là yêu cầu cấp thiết." }
      ];
    default:
      return [];
  }
}

// Generate Topic Data
const topicList = raw.topics.map((item) => {
  const lines = item.body.split('\n').map(l => l.replace(/^-\s*/, '').trim()).filter(Boolean);
  return {
    id: `topic-${item.num}`,
    num: item.num,
    title: item.title,
    badge: `Chủ đề chung ${item.num}`,
    lines: lines,
    quiz: generateTopicQuiz(item.num)
  };
});

function generateTopicQuiz(num) {
  switch(num) {
    case 1:
      return [
        { q: "Đô thị cổ Thăng Long - Hà Nội trong lịch sử gắn liền với câu ca dao 'Thứ nhất Kinh kì, thứ nhì...' nơi nào?", options: ["Phố Hiến", "Hội An", "Bến Nghé", "Đà Nẵng"], ans: 0, expl: "'Thứ nhất Kinh kì, thứ nhì Phố Hiến' phản ánh sự sầm uất của đô thị thương mại thế kỉ XVII." },
        { q: "Đô thị cảng thị quốc tế tiêu biểu ở Đàng Trong phát triển rực rỡ từ thế kỉ XVI đến XVIII là gì?", options: ["Hà Tiên", "Đô thị cổ Hội An (Quảng Nam)", "Vũng Tàu", "Phan Thiết"], ans: 1, expl: "Hội An là thương cảng quốc tế sầm uất bậc nhất Đông Nam Á thời các chúa Nguyễn." },
        { q: "Vai trò của hệ thống đô thị hiện đại ở Việt Nam trong sự nghiệp đổi mới là gì?", options: ["Chỉ là nơi cư trú đơn thuần", "Động lực phát triển kinh tế, trung tâm đổi mới sáng tạo, thu hút đầu tư và lan tỏa công nghệ", "Làm chậm quá trình phát triển", "Không có tác động đến nông thôn"], ans: 1, expl: "Đô thị hóa là động lực quan trọng thúc đẩy chuyển dịch cơ cấu kinh tế và hiện đại hóa đất nước." },
        { q: "Xu thế phát triển đô thị bền vững trong giai đoạn hiện nay hướng tới mô hình nào?", options: ["Đô thị hóa tự phát, cơi nới ngõ hẻm", "Đô thị xanh, đô thị thông minh (Smart City), ứng phó với biến đổi khí hậu và phát thải ròng bằng 0", "Xóa bỏ các công viên cây xanh", "Xây dựng khu công nghiệp nặng giữa nội đô"], ans: 1, expl: "Đô thị thông minh, xanh, tuần hoàn và thích ứng với biến đổi khí hậu là xu hướng tất yếu." }
      ];
    case 2:
      return [
        { q: "Nét đặc trưng tiêu biểu nhất trong văn hóa ứng xử với nguồn nước của cư dân châu thổ sông Hồng là gì?", options: ["Sống chung với lũ", "Đắp đê ngăn lũ, trị thủy bảo vệ đồng bằng xóm làng từ hàng nghìn năm", "Không can thiệp vào dòng chảy", "Chỉ làm nhà nổi trên mặt nước"], ans: 1, expl: "Hệ thống đê điều sông Hồng dài hàng ngàn km là kì tích trị thủy đặc trưng của văn minh sông Hồng." },
        { q: "Ngược lại với sông Hồng, cư dân vùng châu thổ sông Cửu Long có tập quán sinh hoạt và sản xuất nổi tiếng nào?", options: ["Xây thành lũy ngăn nước", "Tập quán 'sống chung với lũ', tận dụng mùa nước nổi để đánh bắt thủy sản và thau chua rửa mặn", "Đắp đê bao kín mọi con sông", "Bỏ làng di tản mỗi mùa lũ"], ans: 1, expl: "Mùa nước nổi đem lại nguồn sinh kế trù phú, cư dân miền Tây thích nghi hài hòa 'sống chung với lũ'." },
        { q: "Văn hóa chợ nổi (như chợ nổi Cái Răng, Ngã Bảy) là sản phẩm văn hóa độc đáo của vùng châu thổ nào?", options: ["Châu thổ sông Hồng", "Châu thổ sông Cửu Long", "Châu thổ sông Mã", "Châu thổ sông Lam"], ans: 1, expl: "Mạng lưới sông rạch chằng chịt hình thành nên phương thức giao thương chợ nổi đặc trưng của ĐBSCL." },
        { q: "Giá trị văn hóa chung cốt lõi của hai nền văn minh châu thổ sông Hồng và sông Cửu Long là gì?", options: ["Văn minh du mục", "Văn minh nông nghiệp lúa nước, tinh thần cộng đồng đoàn kết, gắn bó và sáng tạo thích ứng với tự nhiên", "Văn minh thảo nguyên", "Văn minh săn bắt"], ans: 1, expl: "Cả hai châu thổ đều là cái nôi của văn minh lúa nước và bản sắc đoàn kết kiên cường của người Việt." }
      ];
    case 3:
      return [
        { q: "Văn bản và tư liệu lịch sử nào từ thời nhà Nguyễn khẳng định việc quản lí và thực thi chủ quyền ở Hoàng Sa, Trường Sa?", options: ["Châu bản triều Nguyễn, Đại Nam thực lục, Hoàng Việt địa dư chí", "Bản đồ thương mại nước ngoài vẽ tự do", "Các bài thơ chữ Hán dân gian", "Bản ghi nhớ thương mại"], ans: 0, expl: "Châu bản triều Nguyễn và sử sách triều đình ghi nhận việc phái Đội Hoàng Sa, Bắc Hải cắm mốc, đo đạc hàng năm." },
        { q: "Đội dân binh lịch sử nào được thành lập từ thời chúa Nguyễn để hàng năm ra quần đảo Hoàng Sa thực thi chủ quyền?", options: ["Đội Thần cơ", "Đội Hoàng Sa và Đội Bắc Hải (xuất phát từ Lý Sơn, Quảng Ngãi)", "Đội Cấm vệ quân", "Đội Tiền phong thủy chiến"], ans: 1, expl: "Lễ khao lề thế lính Hoàng Sa tại đảo Lý Sơn tri ân các anh hùng Đội Hoàng Sa cắm mốc chủ quyền." },
        { q: "Cơ sở pháp lí quốc tế quan trọng nhất hiện nay quy định về quy chế các vùng biển và quyền chủ quyền của các quốc gia ven biển là gì?", options: ["Hiệp ước Véc-xai 1919", "Công ước Liên hợp quốc về Luật Biển năm 1982 (UNCLOS 1982)", "Tuyên bố Băng Cốc 1967", "Hiệp định Pa-ri 1973"], ans: 1, expl: "UNCLOS 1982 là 'Hiến pháp về biển và đại dương' xác lập quyền tài phán của các quốc gia trên biển." },
        { q: "Trách nhiệm của công dân học sinh trong công cuộc bảo vệ chủ quyền biển đảo của Tổ quốc là gì?", options: ["Không cần quan tâm vì đã có người lớn", "Học tập, tìm hiểu vững chắc cơ sở lịch sử và pháp lí; tích cực tuyên truyền và lan tỏa tình yêu biển đảo quê hương", "Chia sẻ thông tin chưa kiểm chứng lên mạng xã hội", "Chỉ tham gia khi được yêu cầu"], ans: 1, expl: "Mỗi học sinh là một đại sứ lan tỏa tri thức, niềm tự hào và ý thức bảo vệ chủ quyền biển đảo thiêng liêng." }
      ];
    default:
      return [];
  }
}

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_history_data.json', JSON.stringify(histList, null, 2), 'utf8');
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_geo_data.json', JSON.stringify(geoList, null, 2), 'utf8');
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_topic_data.json', JSON.stringify(topicList, null, 2), 'utf8');

console.log('Successfully generated JSON dataset for LSDL 9!');
