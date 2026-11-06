// scratch/lsdl9_svgs.js - 45 distinct vector SVGs for LSDL 9

function generateSVG(type, num, title) {
  const w = 800;
  const h = 260;
  
  if (type === 'hist') {
    return generateHistorySVG(num, title);
  } else if (type === 'geo') {
    return generateGeoSVG(num, title);
  } else {
    return generateTopicSVG(num, title);
  }
}

function generateHistorySVG(num, title) {
  // Return tailored SVG based on num
  const palettes = [
    { bg: '#f8fafc', stroke: '#3b82f6', grad1: '#1e3a8a', grad2: '#3b82f6', tag: 'CHIẾN LƯỢC' },
    { bg: '#fff7ed', stroke: '#f97316', grad1: '#9a3412', grad2: '#f97316', tag: 'BƯỚC NGOẶT' },
    { bg: '#f0fdf4', stroke: '#10b981', grad1: '#064e3b', grad2: '#10b981', tag: 'THỜI ĐẠI' },
    { bg: '#fdf2f8', stroke: '#ec4899', grad1: '#831843', grad2: '#ec4899', tag: 'LỊCH SỬ' },
    { bg: '#f5f3ff', stroke: '#8b5cf6', grad1: '#4c1d95', grad2: '#8b5cf6', tag: 'PHONG TRÀO' }
  ];
  const p = palettes[(num - 1) % palettes.length];
  
  // Custom nodes per lesson
  let nodes = [];
  if (num === 1) {
    nodes = [
      { t: "1917–1920", d: "CM Tháng 10 & Nội chiến", sub: "Bảo vệ Xô viết", icon: "⭐" },
      { t: "Tháng 3-1921", d: "Chính sách NEP", sub: "Thuế lương thực", icon: "🌾" },
      { t: "Tháng 12-1922", d: "Thành lập Liên Xô", sub: "Mở rộng 15 CH", icon: "🏛️" },
      { t: "1928–1940", d: "Công nghiệp hoá", sub: "Cường quốc CN nặng", icon: "🏭" }
    ];
  } else if (num === 2) {
    nodes = [
      { t: "1918–1923", d: "CM Châu Âu bùng nổ", sub: "Quốc tế 3 (1919)", icon: "🚩" },
      { t: "10-1929", d: "Đại suy thoái", sub: "Khủng hoảng tư bản", icon: "📉" },
      { t: "1933", d: "Đức - Ý phát xít hoá", sub: "Hitler lập độc tài", icon: "⚔️" },
      { t: "1933–1939", d: "New Deal (Mỹ)", sub: "Kinh tế phục hồi", icon: "🦅" }
    ];
  } else if (num === 3) {
    nodes = [
      { t: "1922", d: "ĐCS Nhật Bản", sub: "Phong trào công - nông", icon: "🗾" },
      { t: "1931", d: "Nhật chiếm Đông Bắc TQ", sub: "Lò lửa chiến tranh", icon: "🛡️" },
      { t: "1930", d: "ĐCS VN ra đời", sub: "Cao trào Đông Nam Á", icon: "🇻🇳" },
      { t: "1937", d: "Mặt trận kháng Nhật", sub: "Ấn Độ: M. Gandhi", icon: "🤝" }
    ];
  } else if (num === 4) {
    nodes = [
      { t: "1-9-1939", d: "Đức tấn công Ba Lan", sub: "Thế chiến II bùng nổ", icon: "💥" },
      { t: "1942–1943", d: "Trận Xta-lin-grát", sub: "Bước ngoặt chiến lược", icon: "🏰" },
      { t: "6-1944", d: "Đổ bộ Noóc-măng-đi", sub: "Mặt trận thứ hai", icon: "⚓" },
      { t: "8–9/1945", d: "Phát xít đầu hàng", sub: "Liên hợp quốc thành lập", icon: "🕊️" }
    ];
  } else if (num === 5) {
    nodes = [
      { t: "1919–1929", d: "Khai thác thuộc địa 2", sub: "Phân hóa giai cấp", icon: "⛏️" },
      { t: "Tháng 8-1925", d: "Bãi công Ba Son", sub: "Bước chuyển tự giác", icon: "⚙️" },
      { t: "1925–1928", d: "VN CM Thanh niên", sub: "Phong trào vô sản hóa", icon: "📰" },
      { t: "Đầu 1930", d: "Khởi nghĩa Yên Bái", sub: "Khuynh hướng vô sản thắng", icon: "🔥" }
    ];
  } else if (num === 6) {
    nodes = [
      { t: "6-1919", d: "Bản Yêu sách Véc-xai", sub: "Nguyễn Ái Quốc", icon: "📜" },
      { t: "7-1920", d: "Đọc Luận cương Lê-nin", sub: "Tìm ra con đường cứu nước", icon: "💡" },
      { t: "6-1925", d: "Hội VN CM Thanh niên", sub: "Báo Thanh Niên", icon: "📚" },
      { t: "Đầu 1930", d: "Hợp nhất lập Đảng", sub: "Cương lĩnh chính trị đầu tiên", icon: "⭐" }
    ];
  } else if (num === 7) {
    nodes = [
      { t: "1930–1931", d: "Xô viết Nghệ – Tĩnh", sub: "Chính quyền công nông", icon: "🚩" },
      { t: "1932–1935", d: "Khôi phục phong trào", sub: "Đại hội I tại Ma Cao", icon: "🌱" },
      { t: "1936–1939", d: "Mặt trận Dân chủ", sub: "Đấu tranh công khai", icon: "🗣️" },
      { t: "Ý nghĩa", d: "Hai cuộc diễn tập", sub: "Tiền đề Tổng khởi nghĩa", icon: "🎯" }
    ];
  } else if (num === 8) {
    nodes = [
      { t: "5-1941", d: "Mặt trận Việt Minh", sub: "Hội nghị TƯ 8 (Pác Bó)", icon: "⛰️" },
      { t: "3-1945", d: "Nhật đảo chính Pháp", sub: "Chỉ thị hành động", icon: "⚡" },
      { t: "14–25/8/1945", d: "Tổng khởi nghĩa", sub: "Hà Nội, Huế, Sài Gòn", icon: "📢" },
      { t: "2-9-1945", d: "Tuyên ngôn Độc lập", sub: "Việt Nam Dân chủ CH", icon: "🇻🇳" }
    ];
  } else if (num === 9) {
    nodes = [
      { t: "1947", d: "Học thuyết Truman", sub: "Bắt đầu Chiến tranh Lạnh", icon: "🧊" },
      { t: "1949", d: "Thành lập NATO", sub: "Khối quân sự phương Tây", icon: "🛡️" },
      { t: "1955", d: "Hiệp ước Vác-sơ-va", sub: "Đối đầu 2 cực Đông - Tây", icon: "⚔️" },
      { t: "12-1989", d: "Tuyên bố chấm dứt", sub: "Manta: Bush & Gorbachev", icon: "🤝" }
    ];
  } else if (num === 10) {
    nodes = [
      { t: "1949", d: "Bom nguyên tử LX", sub: "Phá độc quyền của Mỹ", icon: "⚛️" },
      { t: "1957–1961", d: "Sputnik & Gagarin", sub: "Chinh phục vũ trụ", icon: "🚀" },
      { t: "Thập niên 70", d: "Cường quốc CN thứ 2", sub: "Ủng hộ CM thế giới", icon: "🌍" },
      { t: "1989–1991", d: "Khủng hoảng & sụp đổ", sub: "Liên Xô giải thể", icon: "📉" }
    ];
  } else if (num === 11) {
    nodes = [
      { t: "1945–1970", d: "Mỹ: Trung tâm tài chính", sub: "Nắm 3/4 vàng thế giới", icon: "💵" },
      { t: "1947", d: "Kế hoạch Marshall", sub: "Phục hưng Tây Âu", icon: "🏗️" },
      { t: "1957", d: "Hiệp ước Rôm (EEC)", sub: "Liên kết Tây Âu", icon: "🇪🇺" },
      { t: "1991–1993", d: "Hiệp ước Maastricht", sub: "Ra đời Liên minh EU", icon: "⭐" }
    ];
  } else if (num === 12) {
    nodes = [
      { t: "1-10-1949", d: "Nước CHND Trung Hoa", sub: "Thắng lợi CM Trung Quốc", icon: "🇨🇳" },
      { t: "1-1-1959", d: "Cách mạng Cu-ba", sub: "Lá cờ đầu Mỹ La-tinh", icon: "🇨🇺" },
      { t: "1960", d: "Năm châu Phi", sub: "17 quốc gia độc lập", icon: "🌍" },
      { t: "8-8-1967", d: "Thành lập ASEAN", sub: "Hiệp hội ĐNA (Bangkok)", icon: "🌏" }
    ];
  } else if (num === 13) {
    nodes = [
      { t: "Cuối 1945", d: "Thế hiểm nghèo", sub: "Giặc đói, dốt, ngoại xâm", icon: "⚠️" },
      { t: "6-1-1946", d: "Tổng tuyển cử khóa I", sub: "Chính phủ hợp hiến", icon: "🗳️" },
      { t: "Đầu 1946", d: "Diệt giặc dốt", sub: "Nha Bình dân học vụ", icon: "📖" },
      { t: "6-3-1946", d: "Hiệp định Sơ bộ", sub: "Đẩy 20 vạn quân Tưởng", icon: "🕊️" }
    ];
  } else if (num === 14) {
    nodes = [
      { t: "19-12-1946", d: "Lời kêu gọi toàn quốc", sub: "Hà Nội 60 ngày đêm", icon: "🎺" },
      { t: "1947", d: "Kháng chiến nhất định", sub: "Toàn dân, toàn diện", icon: "📚" },
      { t: "Thu - đông 1947", d: "Chiến thắng Việt Bắc", sub: "Bẻ gãy đánh nhanh", icon: "⛰️" },
      { t: "Thu - đông 1950", d: "Chiến dịch Biên giới", sub: "Giành thế chủ động", icon: "🎯" }
    ];
  } else if (num === 15) {
    nodes = [
      { t: "2-1951", d: "Đại hội Đảng lần II", sub: "Đảng Lao động VN", icon: "⭐" },
      { t: "1953–1954", d: "Đập tan Nava", sub: "Tiến công Đông - Xuân", icon: "🗺️" },
      { t: "13/3–7/5/1954", d: "Điện Biên Phủ", sub: "56 ngày đêm lừng lẫy", icon: "🏆" },
      { t: "21-7-1954", d: "Hiệp định Giơ-ne-vơ", sub: "Công nhận độc lập", icon: "📜" }
    ];
  } else if (num === 16) {
    nodes = [
      { t: "Đầu 1959", d: "Nghị quyết 15", sub: "Bạo lực cách mạng", icon: "🔥" },
      { t: "1959–1960", d: "Phong trào Đồng khởi", sub: "Bến Tre quật khởi", icon: "🌴" },
      { t: "20-12-1960", d: "MTDT Giải phóng MN", sub: "Đoàn kết giải phóng", icon: "🚩" },
      { t: "2-1-1963", d: "Chiến thắng Ấp Bắc", sub: "Đánh bại Trực thăng vận", icon: "🎯" }
    ];
  } else if (num === 17) {
    nodes = [
      { t: "1965–1968", d: "Đánh bại CT Cục bộ", sub: "Mậu Thân 1968 chấn động", icon: "💥" },
      { t: "1969–1972", d: "Việt Nam hoá thất bại", sub: "Điện Biên Phủ trên không", icon: "✈️" },
      { t: "27-1-1973", d: "Hiệp định Pa-ri", sub: "Mỹ rút quân hoàn toàn", icon: "🕊️" },
      { t: "30-4-1975", d: "Chiến dịch Hồ Chí Minh", sub: "Giải phóng hoàn toàn MN", icon: "🇻🇳" }
    ];
  } else if (num === 18) {
    nodes = [
      { t: "Sau 1991", d: "Trật tự thế giới mới", sub: "Xu thế đa cực, hợp tác", icon: "🌐" },
      { t: "Liên bang Nga", d: "Quốc gia kế tục", sub: "Cải cách & phục hồi vị thế", icon: "🇷🇺" },
      { t: "Nước Mỹ", d: "Ưu tiên kinh tế & KHKT", sub: "Điều chỉnh sau vụ 11-9", icon: "🇺🇸" },
      { t: "Kinh tế toàn cầu", d: "Chuyển dịch trọng tâm", sub: "Châu Á trỗi dậy mạnh", icon: "📈" }
    ];
  } else if (num === 19) {
    nodes = [
      { t: "12-1978", d: "Cải cách mở cửa TQ", sub: "Nền kinh tế thứ 2 TG", icon: "🇨🇳" },
      { t: "28-7-1995", d: "Việt Nam gia nhập ASEAN", sub: "Thành viên thứ 7", icon: "🇻🇳" },
      { t: "31-12-2015", d: "Cộng đồng ASEAN", sub: "3 trụ cột hợp tác", icon: "🤝" },
      { t: "Hiện nay", d: "Động lực phát triển TG", sub: "Tăng trưởng năng động", icon: "🚀" }
    ];
  } else if (num === 20) {
    nodes = [
      { t: "1976", d: "Thống nhất đất nước", sub: "Cộng hoà XHCN Việt Nam", icon: "🇻🇳" },
      { t: "12-1986", d: "Đại hội VI: Đổi mới", sub: "Kinh tế thị trường XHCN", icon: "💡" },
      { t: "1995", d: "Hội nhập quốc tế", sub: "Bình thường hoá VN - Mỹ", icon: "🌐" },
      { t: "Hiện nay", d: "Vị thế & cơ đồ mới", sub: "Hội nhập sâu rộng toàn cầu", icon: "🏆" }
    ];
  } else {
    // num 21
    nodes = [
      { t: "Cách mạng 4.0", d: "Công nghệ số & AI", sub: "Dữ liệu lớn, IoT", icon: "🤖" },
      { t: "Toàn cầu hoá", d: "Gia tăng phụ thuộc", sub: "Thương mại & đầu tư", icon: "🌐" },
      { t: "Cơ hội cho VN", d: "Thu hút vốn FDI & KHKT", sub: "Tham gia chuỗi giá trị", icon: "📈" },
      { t: "Thách thức", d: "Cạnh tranh & giữ bản sắc", sub: "Bảo đảm tự chủ kinh tế", icon: "🛡️" }
    ];
  }

  return renderDiagramSVG(`LỊCH SỬ 9 • BÀI ${num}: ${title.toUpperCase()}`, p, nodes);
}

function generateGeoSVG(num, title) {
  const palettes = [
    { bg: '#f0fdf4', stroke: '#059669', grad1: '#064e3b', grad2: '#059669', tag: 'ĐỊA LÍ DÂN CƯ' },
    { bg: '#eff6ff', stroke: '#2563eb', grad1: '#1e3a8a', grad2: '#2563eb', tag: 'NGÀNH KINH TẾ' },
    { bg: '#fefce8', stroke: '#ca8a04', grad1: '#713f12', grad2: '#ca8a04', tag: 'VÙNG KINH TẾ' },
    { bg: '#ecfeff', stroke: '#0891b2', grad1: '#164e63', grad2: '#0891b2', tag: 'KINH TẾ BIỂN' }
  ];
  const p = palettes[(num - 1) % palettes.length];

  let nodes = [];
  if (num === 1) {
    nodes = [
      { t: "54 Dân tộc", d: "Cộng đồng anh em", sub: "Kinh chiếm 85,3%", icon: "👥" },
      { t: "> 100 Triệu người", d: "Quy mô dân số 2024", sub: "Đứng thứ 3 Đông Nam Á", icon: "📊" },
      { t: "Dân số vàng", d: "Lực lượng lao động lớn", sub: "Cơ hội bứt phá kinh tế", icon: "🥇" },
      { t: "Già hoá dân số", d: "Tốc độ gia tăng nhanh", sub: "Yêu cầu an sinh xã hội", icon: "⏳" }
    ];
  } else if (num === 2) {
    nodes = [
      { t: "> 300 người/km²", d: "Mật độ dân số cao", sub: "Thuộc nhóm cao thế giới", icon: "📍" },
      { t: "Phân bố không đều", d: "Đồng bằng đông đúc", sub: "Miền núi thưa thớt", icon: "🗺️" },
      { t: "Quần cư nông thôn", d: "Làng, thôn, ấp, bản", sub: "Gắn với sản xuất nông nghiệp", icon: "🏡" },
      { t: "Đô thị hoá nhanh", d: "Tỉ lệ thành thị > 42%", sub: "Động lực chuyển dịch", icon: "🏙️" }
    ];
  } else if (num === 3) {
    nodes = [
      { t: "Dồi dào & Cần cù", d: "Lực lượng lao động lớn", sub: "Khéo léo, tiếp thu nhanh", icon: "💪" },
      { t: "Nâng cao chất lượng", d: "Tỉ lệ qua đào tạo tăng", sub: "Chú trọng kĩ năng số", icon: "🎓" },
      { t: "Chuyển dịch cơ cấu", d: "Giảm lao động nông nghiệp", sub: "Tăng CN và Dịch vụ", icon: "🔄" },
      { t: "Giải quyết việc làm", d: "Đa dạng hóa ngành nghề", sub: "Khởi nghiệp & đổi mới", icon: "💼" }
    ];
  } else if (num === 4) {
    nodes = [
      { t: "Thực hành điều tra", d: "Vấn đề việc làm", sub: "Khảo sát tại địa phương", icon: "📋" },
      { t: "Chỉ số thất nghiệp", d: "Thành thị cao hơn NT", sub: "Nông thôn thiếu việc vụ mùa", icon: "📉" },
      { t: "Phân hóa thu nhập", d: "Đông Nam Bộ cao nhất", sub: "Tây Bắc còn nhiều khó khăn", icon: "💰" },
      { t: "Giải pháp an sinh", d: "Giảm nghèo bền vững", sub: "Đào tạo nghề vùng khó", icon: "🤝" }
    ];
  } else if (num === 5) {
    nodes = [
      { t: "Trồng trọt chủ đạo", d: "An ninh lương thực", sub: "Lúa gạo xuất khẩu hàng đầu", icon: "🌾" },
      { t: "2 Vựa lúa lớn", d: "ĐBSCL và ĐBS Hồng", sub: "Đảm bảo lương thực QG", icon: "🚜" },
      { t: "Cây công nghiệp", d: "Cà phê, cao su, hồ tiêu", sub: "Tây Nguyên, Đông Nam Bộ", icon: "☕" },
      { t: "Nông nghiệp xanh", d: "Công nghệ cao & tuần hoàn", sub: "Chuỗi giá trị xuất khẩu", icon: "🌿" }
    ];
  } else if (num === 6) {
    nodes = [
      { t: "Lâm nghiệp bền vững", d: "Bảo vệ rừng đầu nguồn", sub: "Rừng phòng hộ, đặc dụng", icon: "🌲" },
      { t: "Nuôi trồng thủy sản", d: "Cá tra, tôm nước lợ/mặn", sub: "ĐBSCL dẫn đầu cả nước", icon: "🦐" },
      { t: "Đánh bắt xa bờ", d: "4 Ngư trường trọng điểm", sub: "Đội tàu hiện đại công suất lớn", icon: "🚢" },
      { t: "Chống khai thác IUU", d: "Gỡ thẻ vàng châu Âu", sub: "Bảo vệ chủ quyền biển", icon: "🛡️" }
    ];
  } else if (num === 7) {
    nodes = [
      { t: "Mô hình hiệu quả", d: "Nông nghiệp sinh thái", sub: "Liên kết 4 nhà bền vững", icon: "🤝" },
      { t: "Mô hình Tôm - Lúa", d: "Thích ứng mặn - ngọt", sub: "Bến Tre, Cà Mau, Kiên Giang", icon: "🌾" },
      { t: "Kinh tế tuần hoàn", d: "Tái sử dụng phụ phẩm", sub: "Biogas, phân bón vi sinh", icon: "♻️" },
      { t: "Giá trị kinh tế cao", d: "Đạt chuẩn VietGAP, GlobalGAP", sub: "Mở rộng thị trường xuất khẩu", icon: "⭐" }
    ];
  } else if (num === 8) {
    nodes = [
      { t: "Ngành trọng điểm", d: "Chế biến thực phẩm, Dệt may", sub: "Điện tử, viễn thông", icon: "📱" },
      { t: "2 Cực công nghiệp", d: "TP.HCM và Hà Nội", sub: "Quy mô rất lớn, đa ngành", icon: "🏭" },
      { t: "Năng lượng sạch", d: "Điện gió & Mặt trời", sub: "Nam Trung Bộ, Tây Nguyên", icon: "☀️" },
      { t: "Chuyển dịch xanh", d: "Công nghệ cao, giảm phát thải", sub: "Khu CN sinh thái Net-Zero", icon: "🌱" }
    ];
  } else if (num === 9) {
    nodes = [
      { t: "Điểm công nghiệp", d: "Quy mô nhỏ lẻ", sub: "1–2 xí nghiệp đơn lẻ", icon: "📌" },
      { t: "Khu công nghiệp", d: "Khu tập trung có ranh giới", sub: "Hạ tầng đồng bộ, ưu đãi", icon: "🏗️" },
      { t: "Trung tâm CN", d: "Gắn với đô thị lớn", sub: "TP.HCM, Hà Nội, Hải Phòng", icon: "🏙️" },
      { t: "Vùng công nghiệp", d: "Không gian liên kết vùng", sub: "Tối ưu hóa chuỗi cung ứng", icon: "🗺️" }
    ];
  } else if (num === 10) {
    nodes = [
      { t: "3 Nhóm dịch vụ", d: "Sản xuất, Tiêu dùng, Công", sub: "Tỉ trọng GDP ngày càng tăng", icon: "📊" },
      { t: "Giao thông vận tải", d: "Quốc lộ 1, Cao tốc Bắc - Nam", sub: "Trục xương sống quốc gia", icon: "🛣️" },
      { t: "Cửa ngõ hàng không", d: "Nội Bài & Tân Sơn Nhất", sub: "Đầu mối giao thương quốc tế", icon: "✈️" },
      { t: "Du lịch bùng nổ", d: "Di sản thế giới UNESCO", sub: "Ngành kinh tế mũi nhọn", icon: "🏖️" }
    ];
  } else if (num === 11) {
    nodes = [
      { t: "Thương mại điện tử", d: "Tăng trưởng dẫn đầu ĐNA", sub: "Thanh toán số, sàn trực tuyến", icon: "💳" },
      { t: "Xuất khẩu bứt phá", d: "Thị trường Mỹ > 100 tỉ USD", sub: "Xuất siêu liên tục", icon: "🚢" },
      { t: "Du lịch xanh", d: "Thân thiện môi trường", sub: "Bảo tồn văn hóa bản địa", icon: "🍃" },
      { t: "Phân bố thương mại", d: "Tập trung tại đại đô thị", sub: "Chuỗi bán lẻ hiện đại", icon: "🏬" }
    ];
  } else if (num === 12) {
    nodes = [
      { t: "Vị trí địa chiến lược", d: "Giáp Trung Quốc, Lào, Biển", sub: "Cửa ngõ giao thương phía Bắc", icon: "🏔️" },
      { t: "Thủy điện khổng lồ", d: "Hòa Bình, Sơn La, Lai Châu", sub: "Hệ thống sông Đà hùng vĩ", icon: "⚡" },
      { t: "Khoáng sản phong phú", d: "Than (Quảng Ninh), Apatit", sub: "Đất hiếm, quặng sắt, thiếc", icon: "⛏️" },
      { t: "Nông nghiệp cận nhiệt", d: "Chè búp, hồi, quế, thảo quả", sub: "Cây ăn quả ôn đới mận đào", icon: "🍵" }
    ];
  } else if (num === 13) {
    nodes = [
      { t: "Trái tim cả nước", d: "Thủ đô Hà Nội", sub: "Hạt nhân KT trọng điểm Bắc Bộ", icon: "⭐" },
      { t: "Đất phù sa sông Hồng", d: "Thâm canh lúa nước", sub: "Năng suất lúa cao nhất", icon: "🌾" },
      { t: "Vụ đông độc đáo", d: "Rau củ quả ôn đới", sub: "Bắp cải, khoai tây, cà rốt", icon: "🥦" },
      { t: "Áp lực dân số", d: "Mật độ > 1.000 ng/km²", sub: "Thách thức hạ tầng & môi trường", icon: "👥" }
    ];
  } else if (num === 14) {
    nodes = [
      { t: "Lãnh thổ hẹp ngang", d: "Sườn Đông Trường Sơn", sub: "Nơi hẹp nhất < 50 km (Quảng Bình)", icon: "📐" },
      { t: "Lát cắt Tây - Đông", d: "Rừng -> Cây CN -> Kinh tế biển", sub: "Đa dạng địa hình sinh thái", icon: "🌄" },
      { t: "Khí hậu khắc nghiệt", d: "Gió Lào phơn Tây Nam", sub: "Bão lũ dồn dập cuối năm", icon: "🌪️" },
      { t: "Di sản thế giới", d: "Cố đô Huế, Phong Nha", sub: "Thế mạnh du lịch văn hóa", icon: "🏯" }
    ];
  } else if (num === 15) {
    nodes = [
      { t: "Thiên tai dồn dập", d: "Bão, lũ lụt, lũ quét", sub: "Cát bay cát chảy lấn đồng", icon: "🌊" },
      { t: "Rừng phi lao", d: "Chắn gió bão, giữ đất cát", sub: "Lá chắn xanh ven biển", icon: "🌲" },
      { t: "Công trình thích ứng", d: "Hồ đập, âu thuyền tránh bão", sub: "Kiên cố hóa nhà ở an toàn", icon: "🛡️" },
      { t: "Hành động xanh", d: "Trồng rừng, dự báo sớm", sub: "Kĩ năng phòng tránh thiên tai", icon: "🌱" }
    ];
  } else if (num === 16) {
    nodes = [
      { t: "Cảng nước sâu", d: "Vân Phong, Cam Ranh, Dung Quất", sub: "Cửa mở ra Thái Bình Dương", icon: "⚓" },
      { t: "Thủ phủ Cà phê", d: "Tây Nguyên số 1 thế giới", sub: "Đất đỏ bazan màu mỡ", icon: "☕" },
      { t: "Quặng Bô-xít", d: "Trữ lượng hàng tỉ tấn", sub: "Đắk Nông, Lâm Đồng", icon: "⛰️" },
      { t: "Hành lang Đông - Tây", d: "Kết nối Tây Nguyên - Duyên hải", sub: "Bổ trợ xuất khẩu nông sản", icon: "🛣️" }
    ];
  } else if (num === 17) {
    nodes = [
      { t: "Đầu tàu kinh tế", d: "Vùng phát triển năng động nhất", sub: "Đóng góp GDP & NS lớn nhất", icon: "🚀" },
      { t: "TP. Hồ Chí Minh", d: "Trung tâm KT - Tài chính số 1", sub: "Đổi mới sáng tạo & KHCN", icon: "🏙️" },
      { t: "Dầu khí thềm lục địa", d: "Bạch Hổ, Rồng, Đại Hùng", sub: "Công nghiệp hóa dầu phát triển", icon: "🛢️" },
      { t: "Thách thức hạ tầng", d: "Quá tải giao thông & ngập úng", sub: "Yêu cầu kết nối liên vùng", icon: "🚦" }
    ];
  } else if (num === 18) {
    nodes = [
      { t: "Cao tốc & Vành đai", d: "Vành đai 3, Vành đai 4", sub: "Thông suốt liên kết vùng", icon: "🛣️" },
      { t: "Cảng Cái Mép - Thị Vải", d: "Cảng nước sâu quốc tế", sub: "Đón siêu tàu đi Mỹ, châu Âu", icon: "🚢" },
      { t: "Sân bay Long Thành", d: "Trung tâm trung chuyển QT", sub: "Công suất 100 triệu khách/năm", icon: "✈️" },
      { t: "Hợp tác ĐNB - ĐBSCL", d: "Nông sản sạch + Logistics", sub: "Động lực phát triển Nam Bộ", icon: "🤝" }
    ];
  } else if (num === 19) {
    nodes = [
      { t: "Vựa lúa số 1", d: "Chiếm > 50% sản lượng lúa", sub: "Lương thực & xuất khẩu gạo", icon: "🌾" },
      { t: "Vương quốc Thủy sản", d: "Tôm nước lợ, cá tra", sub: "Kim ngạch hàng tỉ USD", icon: "🐟" },
      { t: "Sống chung với lũ", d: "Mùa nước nổi phù sa", sub: "Thau chua rửa mặn tự nhiên", icon: "🌊" },
      { t: "Cần Thơ - Đầu tàu", d: "Đô thị loại đặc biệt ĐBSCL", sub: "Trung tâm văn hóa giáo dục", icon: "🏛️" }
    ];
  } else if (num === 20) {
    nodes = [
      { t: "Tác động BĐKH", d: "Nước biển dâng, sạt lở bờ", sub: "Xâm nhập mặn mùa khô", icon: "🌡️" },
      { t: "Chiến lược Thuận thiên", d: "Nghị quyết 120/NQ-CP", sub: "Tôn trọng quy luật tự nhiên", icon: "🌱" },
      { t: "3 Vùng sinh thái", d: "Nước ngọt - Nước lợ - Nước mặn", sub: "Chuyển đổi sinh kế linh hoạt", icon: "💧" },
      { t: "Trữ nước ngọt", d: "Hồ phân tán, đập ngăn mặn", sub: "Tiết kiệm nước trong sinh hoạt", icon: "🚰" }
    ];
  } else {
    // num 21
    nodes = [
      { t: "Bờ biển > 3.260 km", d: "Vùng đặc quyền > 1 triệu km²", sub: "Tiềm năng biển đảo vô tận", icon: "🌊" },
      { t: "4 Ngành KT biển", d: "Thủy sản • Du lịch • Cảng • Dầu khí", sub: "Trụ cột kinh tế biển quốc gia", icon: "🚢" },
      { t: "Hoàng Sa & Trường Sa", d: "Chủ quyền thiêng liêng", sub: "Quần đảo tiền tiêu Tổ quốc", icon: "🇻🇳" },
      { t: "Bảo vệ sinh thái", d: "Chống rác thải nhựa đại dương", sub: "Bảo tồn san hô và rừng sú vẹt", icon: "🪸" }
    ];
  }

  return renderDiagramSVG(`ĐỊA LÍ 9 • BÀI ${num}: ${title.toUpperCase()}`, p, nodes);
}

function generateTopicSVG(num, title) {
  const p = { bg: '#fdf4ff', stroke: '#c026d3', grad1: '#701a75', grad2: '#c026d3', tag: 'CHỦ ĐỀ LIÊN MÔN' };
  let nodes = [];

  if (num === 1) {
    nodes = [
      { t: "Đô thị cổ truyền", d: "Thăng Long - Kẻ Chợ", sub: "Phố Hiến, Hội An sầm uất", icon: "🏯" },
      { t: "Thời kì cận - hiện đại", d: "Đô thị hóa gắn công nghiệp", sub: "Hà Nội, Hải Phòng, Sài Gòn", icon: "🏭" },
      { t: "Hệ thống đô thị nay", d: "Động lực phát triển kinh tế", sub: "Tỉ lệ đô thị hóa > 42%", icon: "🏙️" },
      { t: "Đô thị thông minh", d: "Đô thị xanh thích ứng BĐKH", sub: "Hướng tới Net-Zero phát thải", icon: "🌳" }
    ];
  } else if (num === 2) {
    nodes = [
      { t: "Sông Hồng: Trị thủy", d: "Đắp đê ngăn lũ nghìn năm", sub: "Chế ngự & biến đổi tự nhiên", icon: "🛡️" },
      { t: "Cửu Long: Thuận thiên", d: "Sống chung với mùa nước nổi", sub: "Thích ứng hài hòa thiên nhiên", icon: "🌊" },
      { t: "Chợ nổi độc đáo", d: "Giao thương sông nước ĐBSCL", sub: "Cái Răng, Ngã Bảy, Phong Điền", icon: "🛶" },
      { t: "Văn minh lúa nước", d: "Bản sắc văn hóa dân tộc", sub: "Đoàn kết, kiên cường, sáng tạo", icon: "🌾" }
    ];
  } else {
    // num 3
    nodes = [
      { t: "Chứng cứ lịch sử", d: "Châu bản triều Nguyễn", sub: "Đại Nam thực lục cắm mốc", icon: "📜" },
      { t: "Đội dân binh Hoàng Sa", d: "Lễ khao lề thế lính (Lý Sơn)", sub: "Thực thi chủ quyền liên tục", icon: "⚓" },
      { t: "Pháp lí UNCLOS 1982", d: "Hiến pháp về biển đại dương", sub: "Vùng đặc quyền kinh tế 200 hl", icon: "⚖️" },
      { t: "Ý thức công dân trẻ", d: "Bảo vệ chủ quyền thiêng liêng", sub: "Lan tỏa tình yêu biển đảo VN", icon: "🇻🇳" }
    ];
  }

  return renderDiagramSVG(`CHỦ ĐỀ CHUNG ${num}: ${title.toUpperCase()}`, p, nodes);
}

function renderDiagramSVG(headerTitle, p, nodes) {
  const cardW = 168;
  const cardH = 145;
  const startX = 28;
  const gap = 24;
  const startY = 82;

  let cards = nodes.map((node, i) => {
    const x = startX + i * (cardW + gap);
    return `
      <!-- Node ${i + 1} -->
      <g transform="translate(${x}, ${startY})">
        <rect x="0" y="0" width="${cardW}" height="${cardH}" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="${p.stroke}" stroke-width="1.6" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))"/>
        <rect x="0" y="0" width="${cardW}" height="28" rx="12" fill="${p.stroke}"/>
        <rect x="0" y="16" width="${cardW}" height="12" fill="${p.stroke}"/>
        <text x="${cardW/2}" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff" font-family="system-ui, sans-serif">${node.t}</text>
        
        <circle cx="${cardW/2}" cy="58" r="20" fill="${p.bg}" class="dark:fill-slate-700"/>
        <text x="${cardW/2}" y="65" text-anchor="middle" font-size="20">${node.icon}</text>
        
        <text x="${cardW/2}" y="98" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0f172a" class="dark:fill-slate-100" font-family="system-ui, sans-serif">${node.d}</text>
        <text x="${cardW/2}" y="120" text-anchor="middle" font-size="10" fill="#64748b" class="dark:fill-slate-400" font-family="system-ui, sans-serif">${node.sub}</text>
      </g>
      ${i < nodes.length - 1 ? `
      <!-- Connector arrow -->
      <path d="M ${x + cardW + 4} ${startY + 72} L ${x + cardW + gap - 4} ${startY + 72}" stroke="${p.stroke}" stroke-width="2.5" stroke-dasharray="3,2" marker-end="url(#arr-${p.stroke.replace('#', '')})"/>
      ` : ''}
    `;
  }).join('');

  return `
    <svg viewBox="0 0 800 250" class="w-full h-auto max-h-[300px] select-none rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 p-2 my-3" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${p.stroke.replace('#', '')}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${p.grad1}"/>
          <stop offset="100%" stop-color="${p.grad2}"/>
        </linearGradient>
        <marker id="arr-${p.stroke.replace('#', '')}" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="${p.stroke}"/>
        </marker>
      </defs>

      <!-- Banner Header -->
      <rect x="20" y="16" width="760" height="46" rx="10" fill="url(#grad-${p.stroke.replace('#', '')})"/>
      <rect x="32" y="26" width="110" height="26" rx="6" fill="#ffffff" fill-opacity="0.2"/>
      <text x="87" y="43" text-anchor="middle" font-size="11" font-weight="900" fill="#ffffff" font-family="system-ui, sans-serif" letter-spacing="0.5">${p.tag}</text>
      <text x="155" y="44" font-size="13" font-weight="bold" fill="#ffffff" font-family="system-ui, sans-serif">${escapeXml(headerTitle)}</text>
      
      <!-- Cards & Process flow -->
      ${cards}
    </svg>
  `;
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

module.exports = { generateSVG };
