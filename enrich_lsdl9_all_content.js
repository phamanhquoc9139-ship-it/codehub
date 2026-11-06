const fs = require('fs');

const histData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_history_data.json', 'utf8'));
const geoData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_geo_data.json', 'utf8'));
const topicData = JSON.parse(fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_topic_data.json', 'utf8'));

// Textbook pages mapping
const histPages = [
  "Trang 7–11", "Trang 12–16", "Trang 17–20", "Trang 21–27",
  "Trang 28–33", "Trang 34–38", "Trang 39–44", "Trang 45–51",
  "Trang 52–56", "Trang 57–62", "Trang 63–67", "Trang 68–73",
  "Trang 74–78", "Trang 79–85", "Trang 86–91", "Trang 92–97", "Trang 98–103",
  "Trang 104–107", "Trang 108–111", "Trang 112–115", "Trang 116–120"
];

const geoPages = [
  "Trang 121–125", "Trang 126–130", "Trang 131–134", "Trang 135–137",
  "Trang 138–143", "Trang 144–148", "Trang 149–150", "Trang 151–156", "Trang 157–159", "Trang 160–165", "Trang 166–168",
  "Trang 169–175", "Trang 176–182", "Trang 183–188", "Trang 189–191", "Trang 192–199", "Trang 200–205", "Trang 206–208", "Trang 209–215", "Trang 216–217", "Trang 218–223"
];

const topicPages = [
  "Trang 224–227", "Trang 228–231", "Trang 232–235"
];

// Keywords generator
const histKeywords = [
  ["Chính sách NEP 1921", "Liên bang Xô viết 1922", "Công nghiệp hóa nặng", "Kế hoạch 5 năm", "Chiến tranh Vệ quốc"],
  ["Cách mạng châu Âu 1918–1923", "Quốc tế Cộng sản 1919", "Đại suy thoái 1929", "Phát xít hóa Đức - Ý", "New Deal của Roosevelt"],
  ["Đảng Cộng sản Nhật Bản", "Quân phiệt xâm lược", "Kháng chiến chống Nhật", "Đảng Quốc đại Ấn Độ", "Phong trào Đông Nam Á"],
  ["Đức đánh Ba Lan 1939", "Trận Xta-lin-grát 1942–1943", "Đổ bộ Noóc-măng-đi 1944", "Phát xít đầu hàng 1945", "Liên hợp quốc"],
  ["Khai thác thuộc địa lần 2", "Bãi công Ba Son 1925", "Việt Nam Quốc dân đảng", "Khởi nghĩa Yên Bái", "Phong trào vô sản hóa"],
  ["Nguyễn Ái Quốc", "Yêu sách Véc-xai 1919", "Luận cương Lê-nin 1920", "Hội VN CM Thanh niên 1925", "Hội nghị thành lập Đảng 1930"],
  ["Cao trào 1930–1931", "Xô viết Nghệ – Tĩnh", "Khôi phục phong trào 1932–1935", "Mặt trận Dân chủ 1936–1939", "Hai cuộc diễn tập"],
  ["Hội nghị TƯ 8 (1941)", "Mặt trận Việt Minh", "Nhật đảo chính Pháp 1945", "Khởi nghĩa Hà Nội - Huế - Sài Gòn", "Tuyên ngôn Độc lập 2-9-1945"],
  ["Chiến tranh Lạnh 1947–1989", "Học thuyết Truman", "Kế hoạch Marshall", "Khối NATO và Vac-sơ-va", "Trật tự hai cực I-an-ta"],
  ["Liên Xô chế tạo bom NT 1949", "Vệ tinh Sputnik 1957", "Yuri Gagarin 1961", "Cường quốc công nghiệp thứ 2", "Liên Xô tan rã 1991"],
  ["Kinh tế Mỹ sau 1945", "Phục hưng Tây Âu", "Hiệp ước Rôm 1957 (EEC)", "Liên minh châu Âu (EU)", "Hiệp ước Maastricht 1991"],
  ["Cách mạng Cu-ba 1959", "Năm châu Phi 1960", "Nước CHND Trung Hoa 1949", "Thành lập ASEAN 1967", "Giải phóng dân tộc"],
  ["Tình thế ngàn cân treo sợi tóc", "Giặc đói, giặc dốt, ngoại xâm", "Tổng tuyển cử 6-1-1946", "Hiến pháp 1946", "Hiệp định Sơ bộ 6-3-1946"],
  ["Lời kêu gọi Toàn quốc kháng chiến", "Đường lối trường kì, toàn diện", "Chiến thắng Việt Bắc 1947", "Chiến dịch Biên giới 1950", "Quyền chủ động chiến lược"],
  ["Đại hội Đảng lần II (1951)", "Đảng Lao động Việt Nam", "Kế hoạch Nava 1953", "Chiến dịch Điện Biên Phủ 1954", "Hiệp định Giơ-ne-vơ"],
  ["Nghị quyết 15 (1959)", "Phong trào Đồng khởi (Bến Tre)", "Mặt trận DTGP miền Nam 1960", "Chiến tranh đặc biệt", "Chiến thắng Ấp Bắc 1963"],
  ["Chiến tranh cục bộ (1965–1968)", "Tổng tiến công Tết Mậu Thân 1968", "Điện Biên Phủ trên không 1972", "Hiệp định Pa-ri 1973", "Đại thắng mùa Xuân 1975"],
  ["Trật tự thế giới đa cực", "Xu thế hợp tác phát triển", "Liên bang Nga kế tục", "Chiến lược an ninh Mỹ sau 11-9", "Trung Quốc vươn lên thứ 2 TG"],
  ["Cải cách mở cửa Trung Quốc 1978", "Việt Nam gia nhập ASEAN 1995", "Cộng đồng ASEAN 2015", "Kinh tế châu Á năng động", "Ấn Độ bứt phá"],
  ["Thống nhất đất nước 1976", "Cộng hòa XHCN Việt Nam", "Đại hội VI đổi mới 12-1986", "Kinh tế thị trường định hướng XHCN", "Hội nhập quốc tế toàn diện"],
  ["Cách mạng công nghiệp 4.0", "Trí tuệ nhân tạo (AI)", "Dữ liệu lớn (Big Data)", "Xu thế toàn cầu hoá", "Cơ hội và thách thức của Việt Nam"]
];

const geoKeywords = [
  ["54 dân tộc anh em", "Dân số vượt 100 triệu", "Cơ cấu dân số vàng", "Tốc độ già hoá nhanh", "Kiều bào Việt Nam"],
  ["Mật độ dân số > 300 ng/km²", "Phân bố không đều", "Đồng bằng sông Hồng đông nhất", "Quần cư nông thôn & đô thị", "Tỉ lệ đô thị hoá > 42%"],
  ["Nguồn lao động dồi dào", "Cần cù, tiếp thu nhanh", "Lao động qua đào tạo tăng", "Chuyển dịch cơ cấu lao động", "Vấn đề việc làm"],
  ["Điều tra việc làm địa phương", "Tỉ lệ thất nghiệp thành thị", "Thiếu việc làm nông thôn", "Phân hoá thu nhập theo vùng", "Đông Nam Bộ dẫn đầu"],
  ["Ngành trồng trọt chủ đạo", "Hai vựa lúa ĐBSCL và ĐBSH", "Cây công nghiệp lâu năm", "Chăn nuôi tập trung", "Nông nghiệp sinh thái 4.0"],
  ["Lâm nghiệp bền vững", "Rừng phòng hộ, đặc dụng", "Nuôi trồng cá tra, tôm", "4 ngư trường trọng điểm", "Chống khai thác IUU"],
  ["Mô hình nông nghiệp tuần hoàn", "Mô hình Tôm - Lúa ven biển", "Tiêu chuẩn VietGAP / GlobalGAP", "Tận dụng phụ phẩm hữu cơ", "Hiệu quả kinh tế - sinh thái"],
  ["Công nghiệp chế biến, chế tạo", "Công nghiệp điện tử, dệt may", "Trung tâm Hà Nội & TP.HCM", "Năng lượng tái tạo (gió, mặt trời)", "Công nghiệp xanh Net-Zero"],
  ["Điểm công nghiệp", "Khu công nghiệp tập trung", "Trung tâm công nghiệp", "Vùng công nghiệp", "Quy hoạch không gian sản xuất"],
  ["3 nhóm ngành dịch vụ", "Trục Quốc lộ 1 & Cao tốc Bắc - Nam", "Cửa ngõ sân bay Nội Bài, Tân Sơn Nhất", "Du lịch di sản UNESCO", "Logistics hiện đại"],
  ["Thương mại điện tử bùng nổ", "Thanh toán không tiền mặt", "Xuất khẩu Mỹ > 100 tỉ USD", "Du lịch xanh bền vững", "Phân bố thương mại đô thị"],
  ["Trung du & MN Bắc Bộ", "Địa bàn chiến lược phía Bắc", "Tiềm năng thủy điện sông Đà", "Khoáng sản than, apatit, sắt", "Nông nghiệp cận nhiệt chè búp"],
  ["Đồng bằng sông Hồng", "Hạt nhân Thủ đô Hà Nội", "Đất phù sa sông Hồng", "Vụ đông rau quả độc đáo", "Mật độ dân số > 1.000 ng/km²"],
  ["Bắc Trung Bộ hẹp ngang", "Sườn Đông dãy Trường Sơn", "Lát cắt kinh tế Tây - Đông", "Gió phơn Tây Nam khô nóng", "Di sản Cố đô Huế, Phong Nha"],
  ["Thiên tai bão lũ miền Trung", "Lũ quét, sạt lở đất", "Rừng phi lao chắn cát bay", "Âu thuyền tránh trú bão", "Kĩ năng ứng phó biến đổi khí hậu"],
  ["Duyên hải Nam Trung Bộ & Tây Nguyên", "Vịnh cảng nước sâu (Vân Phong, Cam Ranh)", "Thủ phủ Cà phê Tây Nguyên", "Quặng Bô-xít Đắk Nông", "Hành lang kinh tế Đông - Tây"],
  ["Đông Nam Bộ - Đầu tàu kinh tế", "Cực tăng trưởng TP. Hồ Chí Minh", "Dầu khí thềm lục địa Bạch Hổ", "Hạ tầng Vành đai 3, 4", "Sức ép ngập úng & ô nhiễm"],
  ["Kết nối liên vùng Đông Nam Bộ", "Cảng nước sâu Cái Mép - Thị Vải", "Cảng hàng không QT Long Thành", "Liên kết công nghiệp - nông sản ĐBSCL", "Giải tỏa ùn tắc logistics"],
  ["Đồng bằng sông Cửu Long", "Vựa lúa, trái cây, thủy sản số 1", "Tập quán sống chung với lũ", "Mùa nước nổi phù sa màu mỡ", "Cực trung tâm TP. Cần Thơ"],
  ["Biến đổi khí hậu & nước biển dâng", "Xâm nhập mặn mùa khô", "Chiến lược Thuận thiên (NQ 120)", "3 vùng sinh thái mặn - lợ - ngọt", "Trữ nước ngọt phân tán"],
  ["Bờ biển dài > 3.260 km", "Vùng biển đặc quyền > 1 triệu km²", "4 trụ cột kinh tế biển", "Quần đảo Hoàng Sa & Trường Sa", "Bảo vệ tài nguyên sinh thái biển"]
];

const topicKeywords = [
  ["Đô thị Thăng Long - Hà Nội", "Thương cảng Phố Hiến, Hội An", "Đô thị hóa thời kì đổi mới", "Đô thị thông minh (Smart City)", "Đô thị xanh thích ứng BĐKH"],
  ["Văn minh sông Hồng", "Kì tích đắp đê trị thủy", "Văn minh sông Cửu Long", "Tập quán sống chung với lũ", "Bản sắc văn hóa lúa nước"],
  ["Châu bản triều Nguyễn", "Đội dân binh Hoàng Sa, Bắc Hải", "Lễ khao lề thế lính (Lý Sơn)", "Công ước UNCLOS 1982", "Bảo vệ chủ quyền thiêng liêng"]
];

// Applications / Projects generator
const histApps = [
  "Liên hệ bài học kinh nghiệm từ Chính sách kinh tế mới (NEP) đối với việc phát triển nền kinh tế thị trường định hướng XHCN nhiều thành phần ở Việt Nam hiện nay.",
  "Phân tích nguyên nhân sâu xa của Đại suy thoái 1929 và bài học về sự can thiệp, điều tiết của Nhà nước trong việc ổn định kinh tế vĩ mô.",
  "Đánh giá tác động của tinh thần bất bạo động do M. Gandhi khởi xướng đối với phong trào giải phóng dân tộc ở các nước thuộc địa châu Á.",
  "Từ bài học thắng lợi của liên minh chống phát xít trong Thế chiến II, hãy nêu suy nghĩ về tầm quan trọng của việc duy trì hòa bình và an ninh quốc tế hiện nay.",
  "Sưu tầm tư liệu về cuộc bãi công Ba Son (8-1925) và nêu cảm nghĩ về vai trò tiên phong của người thợ máy Tôn Đức Thắng.",
  "Viết đoạn văn ngắn (khoảng 150 chữ) làm rõ ý nghĩa bước ngoặt của Hội nghị thành lập Đảng Cộng sản Việt Nam đầu năm 1930 dưới sự chủ trì của Nguyễn Ái Quốc.",
  "So sánh quy mô, lực lượng tham gia và hình thức đấu tranh giữa phong trào cách mạng 1930–1931 với phong trào dân chủ 1936–1939.",
  "Phân tích nghệ thuật chớp thời cơ ngàn năm có một của Đảng ta trong Tổng khởi nghĩa Cách mạng Tháng Tám năm 1945.",
  "Theo em, xu thế hòa bình, hợp tác và phát triển sau khi Chiến tranh Lạnh kết thúc mở ra những thuận lợi gì cho học sinh thế hệ trẻ Việt Nam?",
  "Tìm hiểu thành tựu khoa học - kĩ thuật của Liên Xô (như vệ tinh Sputnik, chuyến bay Gagarin) và ý nghĩa đối với sự tiến bộ của văn minh nhân loại.",
  "Đánh giá bài học từ quá trình nhất thể hóa kinh tế của Liên minh châu Âu (EU) đối với tiến trình xây dựng Cộng đồng Kinh tế ASEAN.",
  "Sưu tầm hình ảnh về tình đoàn kết keo sơn chí nghĩa chí tình giữa nhân dân Việt Nam và nhân dân Cu-ba trong cuộc kháng chiến chống Mỹ.",
  "Tìm hiểu phong trào 'Hũ gạo cứu đói' và 'Bình dân học vụ' do Chủ tịch Hồ Chí Minh phát động năm 1945; liên hệ với tinh thần tương thân tương ái hiện nay.",
  "Phân tích tính đúng đắn và sáng tạo của đường lối kháng chiến toàn dân, toàn diện, trường kì và tự lực cánh sinh của Đảng ta.",
  "Ý nghĩa của chiến thắng Điện Biên Phủ đối với phong trào giải phóng dân tộc trên thế giới (liên hệ với việc các thuộc địa ở châu Phi lần lượt giành độc lập).",
  "Sưu tầm câu chuyện về phong trào 'Đồng khởi' Bến Tre và vai trò của Đội quân tóc dài của nữ tướng Nguyễn Thị Định.",
  "Cảm nhận của em về khoảnh khắc lịch sử trưa ngày 30-4-1975 khi lá cờ cách mạng tung bay trên nóc Dinh Độc Lập, non sông thu về một mối.",
  "Tìm hiểu vị thế ngoại giao của Việt Nam trong bối cảnh trật tự thế giới đa cực hiện nay thông qua chính sách đối ngoại 'ngoại giao cây tre'.",
  "Nêu những cơ hội và thách thức của thanh niên Việt Nam khi tham gia vào thị trường lao động chung của Cộng đồng Kinh tế ASEAN.",
  "Đánh giá những thành tựu vượt bậc của công cuộc Đổi mới sau gần 40 năm (từ 1986 đến nay) trên quê hương hoặc thành phố nơi em đang sinh sống.",
  "Là một học sinh THCS, em cần chuẩn bị những phẩm chất, kĩ năng số và ngoại ngữ nào để tự tin hội nhập trong kỉ nguyên chuyển đổi số và toàn cầu hoá?"
];

const geoApps = [
  "Dựa vào số liệu dân số Việt Nam năm 2024 vượt 100 triệu người, hãy phân tích cơ hội và thách thức của thời kì cơ cấu dân số vàng đối với sự phát triển đất nước.",
  "Quan sát nơi em sinh sống và chỉ ra các đặc điểm nổi bật của loại hình quần cư (nông thôn hoặc đô thị) tại địa phương.",
  "Theo em, người lao động trẻ hiện nay cần trang bị những kĩ năng nào để đáp ứng yêu cầu chuyển đổi số và phát triển kinh tế xanh?",
  "Lập bảng kế hoạch nhỏ khảo sát vấn đề việc làm và ngành nghề tạo thu nhập chính của các hộ gia đình xung quanh nơi em ở.",
  "Viết đoạn văn ngắn giới thiệu về một sản phẩm nông nghiệp chủ lực (OCOP) của tỉnh/thành phố em và hướng phát triển nông nghiệp sạch.",
  "Tìm hiểu nguyên nhân và những nỗ lực của nước ta trong việc gỡ bỏ cảnh báo 'thẻ vàng' IUU của Ủy ban châu Âu (EC) đối với thủy sản xuất khẩu.",
  "Xây dựng ý tưởng mô hình 'Nông nghiệp tuần hoàn' hoặc 'Vườn - Ao - Chuồng hiện đại' có thể ứng dụng tại các vùng nông thôn.",
  "Theo em, vì sao việc chuyển dịch cơ cấu công nghiệp theo hướng giảm phát thải carbon (Net-Zero) là xu thế bắt buộc của nền kinh tế Việt Nam?",
  "Kể tên các khu công nghiệp hoặc cụm công nghiệp lớn tại địa phương em và nêu vai trò của chúng đối với kinh tế địa phương.",
  "Lập sơ đồ tư duy thể hiện mối quan hệ giữa hệ thống giao thông vận tải đường bộ cao tốc với sự phát triển của ngành du lịch và logistics.",
  "Tìm hiểu thói quen mua sắm trực tuyến của gia đình em và nêu những lưu ý để mua sắm an toàn, thông minh trên các sàn thương mại điện tử.",
  "Nêu các giải pháp để vùng Trung du và miền núi Bắc Bộ vừa khai thác hiệu quả tài nguyên khoáng sản, thủy điện vừa bảo vệ tốt rừng đầu nguồn.",
  "Phân tích ý nghĩa kinh tế - xã hội của vụ đông đối với đời sống của người nông dân vùng Đồng bằng sông Hồng.",
  "Đề xuất một số giải pháp thiết thực để giảm thiểu thiệt hại do bão lũ và hiện tượng cát bay, cát chảy ở vùng dải ven biển Bắc Trung Bộ.",
  "Tham gia tuyên truyền hoặc lập kế hoạch ứng phó thiên tai, tiết kiệm nước ngọt và phòng tránh đuối nước cho học sinh tại trường học.",
  "Phân tích vai trò của tuyến hành lang kinh tế Đông - Tây kết nối vùng Tây Nguyên với các cảng biển nước sâu của Duyên hải Nam Trung Bộ.",
  "Đánh giá tác động của các tuyến đường Vành đai 3, Vành đai 4 đối với việc giảm ùn tắc giao thông và mở rộng không gian đô thị của TP. Hồ Chí Minh.",
  "Tìm hiểu tiến độ thi công Cảng hàng không quốc tế Long Thành và nêu kì vọng của em về sự bứt phá logistics của vùng Đông Nam Bộ.",
  "Theo em, vì sao nông dân vùng Đồng bằng sông Cửu Long coi mùa lũ là 'mùa nước nổi' đem lại nguồn sinh kế quý giá thay vì thiên tai hủy diệt?",
  "Đề xuất các biện pháp trữ nước ngọt hợp lí và tiết kiệm trong sinh hoạt gia đình vào mùa khô khi hiện tượng xâm nhập mặn xảy ra.",
  "Viết thông điệp kêu gọi bạn bè và cộng đồng cùng hành động 'Giảm thiểu rác thải nhựa đại dương - Chung tay vì biển đảo quê hương xanh sạch'."
];

const topicApps = [
  "Sưu tầm tranh ảnh, tư liệu lịch sử về quá trình biến đổi diện mạo của một đô thị lịch sử (Hà Nội, Hội An hoặc TP.HCM) từ xưa đến nay.",
  "So sánh nét đặc sắc trong văn hóa ẩm thực và lối sống gắn liền với sông nước giữa cư dân châu thổ sông Hồng và sông Cửu Long.",
  "Viết một bức thư ngắn hoặc thông điệp gửi các chiến sĩ hải quân đang ngày đêm canh giữ chủ quyền thiêng liêng nơi đầu sóng ngọn gió tại quần đảo Trường Sa."
];

// Enrich Hist
histData.forEach((item, idx) => {
  item.page = histPages[idx];
  item.keywords = histKeywords[idx];
  item.application = histApps[idx];
});

// Enrich Geo
geoData.forEach((item, idx) => {
  item.page = geoPages[idx];
  item.keywords = geoKeywords[idx];
  item.application = geoApps[idx];
});

// Enrich Topic
topicData.forEach((item, idx) => {
  item.page = topicPages[idx];
  item.keywords = topicKeywords[idx];
  item.application = topicApps[idx];
});

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_history_data_rich.json', JSON.stringify(histData, null, 2), 'utf8');
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_geo_data_rich.json', JSON.stringify(geoData, null, 2), 'utf8');
fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/lsdl9_topic_data_rich.json', JSON.stringify(topicData, null, 2), 'utf8');

console.log('Successfully enriched all 45 modules with full data, keywords, pages, applications and quizzes!');
