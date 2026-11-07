// scratch/ktpl12_tools_arena.js
// Bảng tra cứu 13 thuật ngữ & công thức + 4 Công cụ tính toán tương tác + Đấu trường 45 phút 20 câu

const glossaryTable = [
  { term: "GDP", content: "Tổng sản phẩm quốc nội: Giá trị thị trường của toàn bộ hàng hóa, dịch vụ cuối cùng được sản xuất trên lãnh thổ một quốc gia trong một thời kì nhất định." },
  { term: "GDP/người", content: "Tổng sản phẩm quốc nội chia cho dân số trung bình: Đo lường mức thu nhập và sản lượng trung bình trên đầu người của quốc gia." },
  { term: "GNI/người", content: "Tổng thu nhập quốc dân chia cho dân số trung bình: Thường dùng để so sánh mức thu nhập và phúc lợi thực tế giữa các quốc gia." },
  { term: "GDP theo chi tiêu", content: "GDP = C + I + G + (X − M), trong đó C: tiêu dùng hộ gia đình, I: đầu tư doanh nghiệp, G: chi tiêu chính phủ, X: xuất khẩu, M: nhập khẩu." },
  { term: "HDI", content: "Chỉ số phát triển con người: Chỉ số tổng hợp đo lường sự phát triển của con người dựa trên 3 tiêu chí cốt lõi: Sức khỏe (tuổi thọ), Tri thức (giáo dục) và Thu nhập." },
  { term: "Hệ số Gini", content: "Chỉ số đo lường mức độ bất bình đẳng trong phân phối thu nhập (giá trị từ 0 đến 1; giá trị càng cao thể hiện sự bất bình đẳng giàu nghèo càng lớn)." },
  { term: "FDI", content: "Đầu tư trực tiếp nước ngoài (Foreign Direct Investment): Nhà đầu tư nước ngoài bỏ vốn thành lập hoặc mua cổ phần để trực tiếp quản lí điều hành sản xuất kinh doanh." },
  { term: "ODA", content: "Hỗ trợ phát triển chính thức (Official Development Assistance): Nguồn vốn hỗ trợ của các chính phủ, tổ chức quốc tế gồm viện trợ không hoàn lại hoặc vay ưu đãi dài hạn." },
  { term: "CSR", content: "Trách nhiệm xã hội của doanh nghiệp: Toàn bộ trách nhiệm kinh tế, pháp lí, đạo đức và nhân văn mà doanh nghiệp thực hiện đối với cộng đồng và xã hội." },
  { term: "Quyền sở hữu", content: "Bao gồm trọn vẹn 3 quyền năng của chủ sở hữu: Quyền chiếm hữu (nắm giữ), quyền sử dụng (khai thác công dụng) và quyền định đoạt (chuyển giao, tiêu hủy)." },
  { term: "Quyền chủ quyền", content: "Quyền riêng biệt của quốc gia ven biển đối với việc thăm dò, khai thác, bảo tồn và quản lí tài nguyên trong vùng đặc quyền kinh tế và thềm lục địa theo UNCLOS 1982." },
  { term: "Đối xử tối huệ quốc (MFN)", content: "Nguyên tắc cốt lõi của WTO: Ưu đãi thương mại dành cho một thành viên thì phải được mở rộng vô điều kiện cho tất cả các thành viên còn lại." },
  { term: "Đối xử quốc gia (NT)", content: "Nguyên tắc cốt lõi của WTO: Hàng hóa, dịch vụ nhập khẩu không bị đối xử bất lợi hơn so với hàng hóa, dịch vụ tương tự sản xuất trong nước sau khi vào thị trường." }
];

const interactiveTools = [
  {
    id: "calc-gdp-expenditure",
    name: "Tính GDP theo Phương pháp Chi tiêu",
    formula: "GDP = C + I + G + (X - M)",
    desc: "Tính toán tổng quy mô sản phẩm quốc nội dựa trên 4 thành phần chi tiêu vĩ mô.",
    unit: "Tỉ USD (hoặc Nghìn tỉ VNĐ)",
    inputs: [
      { id: "gdp_c", label: "Tiêu dùng hộ gia đình (C)", default: 240 },
      { id: "gdp_i", label: "Tổng đầu tư doanh nghiệp (I)", default: 120 },
      { id: "gdp_g", label: "Chi tiêu chính phủ (G)", default: 80 },
      { id: "gdp_x", label: "Xuất khẩu hàng hóa & dịch vụ (X)", default: 385 },
      { id: "gdp_m", label: "Nhập khẩu hàng hóa & dịch vụ (M)", default: 355 }
    ]
  },
  {
    id: "calc-gdp-per-capita",
    name: "Tính GDP bình quân đầu người",
    formula: "\\text{GDP/người} = \\frac{\\text{Tổng GDP}}{\\text{Dân số trung bình}}",
    desc: "Xác định mức thu nhập sản lượng bình quân trên mỗi người dân trong năm.",
    unit: "USD/người",
    inputs: [
      { id: "gdp_total_val", label: "Tổng GDP quốc gia (USD)", default: 470000000000 },
      { id: "gdp_pop_val", label: "Dân số trung bình (người)", default: 101300000 }
    ]
  },
  {
    id: "calc-family-budget",
    name: "Công cụ Lập kế hoạch Ngân sách Gia đình (Quy tắc 50/30/20)",
    formula: "\\text{Chi thiết yếu: 50\\%} \\quad | \\quad \\text{Linh hoạt/Sở thích: 30\\%} \\quad | \\quad \\text{Tiết kiệm: 20\\%}",
    desc: "Tự động phân bổ thu nhập hàng tháng của gia đình theo chuẩn quản lí tài chính cá nhân bền vững.",
    unit: "VNĐ / tháng",
    inputs: [
      { id: "fam_income", label: "Tổng thu nhập hàng tháng của gia đình (VNĐ)", default: 25000000 }
    ]
  },
  {
    id: "calc-break-even",
    name: "Công cụ Tính Điểm hòa vốn trong Kế hoạch Kinh doanh",
    formula: "\\text{Sản lượng hòa vốn } (Q) = \\frac{\\text{Chi phí cố định (FC)}}{\\text{Giá bán (P)} - \\text{Chi phí biến đổi (VC)}}",
    desc: "Xác định số lượng sản phẩm cần bán tối thiểu để doanh thu vừa đủ bù đắp chi phí (Lợi nhuận = 0).",
    unit: "Sản phẩm",
    inputs: [
      { id: "be_fc", label: "Tổng chi phí cố định (FC - VNĐ)", default: 30000000 },
      { id: "be_price", label: "Giá bán 1 đơn vị sản phẩm (P - VNĐ)", default: 50000 },
      { id: "be_vc", label: "Chi phí biến đổi 1 sản phẩm (VC - VNĐ)", default: 20000 }
    ]
  }
];

const arenaQuestions = [
  {
    q: "Công thức tiếp cận theo phương pháp chi tiêu để tính Tổng sản phẩm quốc nội (GDP) của một nền kinh tế là:",
    options: [
      "GDP = C + I + G + (X − M).",
      "GDP = C + I + G + (M − X).",
      "GDP = C + I − G + (X + M).",
      "GDP = C × I × G + (X − M)."
    ],
    ans: 0,
    explain: "GDP theo phương pháp chi tiêu bao gồm: C (tiêu dùng), I (đầu tư), G (chi tiêu chính phủ), X (xuất khẩu), M (nhập khẩu)."
  },
  {
    q: "Chỉ số phát triển con người (HDI) trong đánh giá phát triển kinh tế được đo lường dựa trên 3 tiêu chí cốt lõi nào?",
    options: [
      "Tỉ lệ che phủ rừng, số lượng ô tô và diện tích nhà xưởng.",
      "Sức khỏe (tuổi thọ), Tri thức (giáo dục) và Thu nhập (GNI/người).",
      "Quy mô lực lượng quân đội, số lượng tòa nhà chọc trời và dân số.",
      "Tốc độ lạm phát, lãi suất ngân hàng và dự trữ vàng quốc gia."
    ],
    ans: 1,
    explain: "HDI kết hợp 3 khía cạnh cơ bản của sự phát triển con người: Tuổi thọ bình quân, Trình độ học vấn và Mức thu nhập bình quân."
  },
  {
    q: "Hệ số Gini trong đánh giá phát triển kinh tế thể hiện điều gì?",
    options: [
      "Tốc độ tăng trưởng sản lượng công nghiệp hàng năm.",
      "Mức độ bất bình đẳng trong phân phối thu nhập giữa các tầng lớp dân cư.",
      "Tỉ lệ sinh con trung bình của phụ nữ trong độ tuổi sinh đẻ.",
      "Khối lượng ngoại tệ dự trữ tại Ngân hàng Trung ương."
    ],
    ans: 1,
    explain: "Hệ số Gini dao động từ 0 (bình đẳng tuyệt đối) đến 1 (bất bình đẳng tuyệt đối); hệ số càng cao phản ánh phân hóa giàu nghèo càng sâu sắc."
  },
  {
    q: "Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP) mà Việt Nam tham gia kí kết là biểu hiện của cấp độ hội nhập kinh tế nào?",
    options: [
      "Hội nhập kinh tế song phương.",
      "Hội nhập kinh tế khu vực.",
      "Hợp tác tự do cấp địa phương.",
      "Hội nhập toàn cầu."
    ],
    ans: 1,
    explain: "RCEP là hiệp định thương mại tự do cấp khu vực giữa 10 nước ASEAN và 5 đối tác khu vực Đông Á - châu Đại Dương."
  },
  {
    q: "Nguyên tắc hoạt động cốt lõi chi phối toàn bộ hệ thống bảo hiểm là:",
    options: [
      "Chia sẻ và chuyển giao rủi ro dựa trên cơ chế 'lấy số đông bù số ít'.",
      "Thu tiền phí bảo hiểm để kinh doanh chứng khoán mạo hiểm.",
      "Chỉ chi trả tiền cho người có hoàn cảnh giàu có.",
      "Nhà nước chi trả toàn bộ mà người tham gia không cần đóng phí."
    ],
    ans: 0,
    explain: "Bảo hiểm hoạt động theo nguyên tắc lấy số đông bù số ít, huy động phí của nhiều người để chia sẻ tổn thất tài chính cho người gặp rủi ro."
  },
  {
    q: "Hệ thống các chính sách của Nhà nước nhằm trợ giúp cho các cá nhân và gia đình khắc phục các rủi ro xã hội để bảo đảm mức sống tối thiểu danh dự được gọi là:",
    options: [
      "Hệ thống an sinh xã hội.",
      "Thị trường tài chính phái sinh.",
      "Chính sách bảo hộ mậu dịch thương mại.",
      "Hiệp định thương mại tự do song phương."
    ],
    ans: 0,
    explain: "An sinh xã hội là hệ thống lưới an toàn đa tầng bảo đảm quyền sống, việc làm và trợ giúp người yếu thế trong xã hội."
  },
  {
    q: "Tại điểm hòa vốn (Break-even Point) trong kế hoạch tài chính kinh doanh:",
    options: [
      "Doanh nghiệp đạt mức lợi nhuận ròng tối đa.",
      "Tổng doanh thu bán hàng vừa đủ bù đắp toàn bộ tổng chi phí bỏ ra (Lợi nhuận = 0).",
      "Doanh nghiệp bị thua lỗ nặng nề và bắt buộc giải thể.",
      "Doanh thu tăng gấp 3 lần so với chi phí ban đầu."
    ],
    ans: 1,
    explain: "Tại điểm hòa vốn, Doanh thu = Chi phí, chủ thể kinh doanh không có lãi nhưng không bị lỗ vốn."
  },
  {
    q: "Hình thức trách nhiệm nào là nền tảng cơ sở trong kim tự tháp trách nhiệm xã hội của doanh nghiệp (CSR)?",
    options: [
      "Trách nhiệm kinh tế (sản xuất kinh doanh có hiệu quả, tạo ra sản phẩm hữu ích và việc làm).",
      "Trách nhiệm từ thiện tự nguyện.",
      "Trách nhiệm tài trợ các cuộc thi sắc đẹp.",
      "Trách nhiệm quảng cáo thương hiệu trên truyền hình."
    ],
    ans: 0,
    explain: "Trách nhiệm kinh tế là nền tảng của kim tự tháp CSR, bảo đảm doanh nghiệp tồn tại và tạo ra nguồn lực thực hiện các trách nhiệm khác."
  },
  {
    q: "Theo mô hình quản lí tài chính cá nhân 50/30/20, tỉ lệ 50% thu nhập hàng tháng nên được ưu tiên phân bổ cho:",
    options: [
      "Mua sắm đồ trang sức xa xỉ và đi du lịch nghỉ dưỡng.",
      "Các khoản chi tiêu thiết yếu (ăn uống, ở, điện nước, học tập, y tế cơ bản).",
      "Gửi tiết kiệm ngân hàng dài hạn.",
      "Đầu tư chứng khoán mạo hiểm."
    ],
    ans: 1,
    explain: "50% ngân sách theo quy tắc 50/30/20 dành cho các nhu cầu sinh hoạt thiết yếu bắt buộc duy trì cuộc sống."
  },
  {
    q: "Theo Hiến pháp 2013 và Luật Doanh nghiệp, công dân có quyền tự do kinh doanh trong những ngành, nghề nào?",
    options: [
      "Những ngành, nghề mà pháp luật không cấm.",
      "Bất kì ngành nghề nào miễn là kiếm được nhiều lợi nhuận cá nhân.",
      "Chỉ những ngành nghề thủ công nghiệp truyền thống của địa phương.",
      "Các ngành nghề sản xuất vũ khí và chất nổ quân dụng tự do."
    ],
    ans: 0,
    explain: "Mọi người có quyền tự do kinh doanh trong những ngành nghề mà pháp luật không cấm (Điều 33 Hiến pháp 2013)."
  },
  {
    q: "Quyền sở hữu tài sản theo Bộ luật Dân sự Việt Nam bao gồm 3 quyền năng trọn vẹn nào sau đây?",
    options: [
      "Quyền chiếm hữu, quyền sử dụng và quyền định đoạt.",
      "Quyền sở hữu, quyền lao động và quyền tự do tín ngưỡng.",
      "Quyền kinh doanh, quyền cư trú và quyền khiếu nại tố cáo.",
      "Quyền thừa kế, quyền học tập và quyền an sinh xã hội."
    ],
    ans: 0,
    explain: "Quyền sở hữu bao gồm quyền chiếm hữu (nắm giữ), quyền sử dụng (khai thác công dụng) và quyền định đoạt (chuyển giao, tiêu hủy)."
  },
  {
    q: "Theo Luật Hôn nhân và gia đình Việt Nam, độ tuổi kết hôn hợp pháp quy định đối với nam và nữ là:",
    options: [
      "Nam từ đủ 20 tuổi trở lên, nữ từ đủ 18 tuổi trở lên.",
      "Nam từ đủ 18 tuổi trở lên, nữ từ đủ 16 tuổi trở lên.",
      "Cả nam và nữ đều phải từ đủ 22 tuổi trở lên.",
      "Không quy định tuổi chỉ cần hai bên gia đình đồng ý."
    ],
    ans: 0,
    explain: "Điều kiện độ tuổi kết hôn quy định: Nam từ đủ 20 tuổi trở lên, nữ từ đủ 18 tuổi trở lên."
  },
  {
    q: "Hành vi nào sau đây vi phạm nghiêm trọng nguyên tắc hôn nhân tự nguyện, tiến bộ một vợ một chồng?",
    options: [
      "Tảo hôn, cưỡng ép kết hôn và kết hôn giả tạo để trục lợi.",
      "Đăng kí kết hôn hợp pháp tại Ủy ban nhân dân xã phường.",
      "Vợ chồng cùng nhau bàn bạc kế hoạch chi tiêu gia đình.",
      "Con cái phụng dưỡng cha mẹ già yếu khi ốm đau."
    ],
    ans: 0,
    explain: "Tảo hôn, cưỡng ép kết hôn, kết hôn giả tạo là các hành vi bị cấm tuyệt đối theo Điều 5 Luật Hôn nhân và gia đình."
  },
  {
    q: "Khẳng định nào sau đây diễn đạt chính xác nhất về bản chất của quyền học tập theo Hiến pháp Việt Nam?",
    options: [
      "Học tập vừa là quyền thiêng liêng, vừa là nghĩa vụ cơ bản của mỗi công dân.",
      "Học tập chỉ là quyền riêng của tầng lớp thanh thiếu niên giàu có.",
      "Học tập là việc tự do cá nhân, Nhà nước không quan tâm.",
      "Công dân chỉ được học tập hết cấp tiểu học là dừng lại."
    ],
    ans: 0,
    explain: "Hiến pháp khẳng định học tập vừa là quyền được học không hạn chế, vừa là nghĩa vụ của công dân để nâng cao dân trí."
  },
  {
    q: "Hành vi nào sau đây của doanh nghiệp vi phạm nghiêm trọng pháp luật an sinh xã hội đối với người lao động?",
    options: [
      "Trốn đóng hoặc nợ đọng kéo dài tiền Bảo hiểm xã hội bắt buộc của công nhân.",
      "Trang bị đồ bảo hộ lao động đạt tiêu chuẩn an toàn cho công nhân.",
      "Tổ chức khám sức khỏe định kì hằng năm cho toàn thể nhân viên.",
      "Thưởng năng suất lao động cho công nhân dịp Tết Nguyên đán."
    ],
    ans: 0,
    explain: "Trốn đóng BHXH xâm hại trực tiếp quyền an sinh của người lao động và có thể bị truy cứu trách nhiệm hình sự theo Điều 216 BLHS."
  },
  {
    q: "Hành vi nào sau đây của công dân bị pháp luật nghiêm cấm trong bảo vệ di sản văn hóa?",
    options: [
      "Tham quan, nghiên cứu và học tập lịch sử tại cố đô Hoa Lư.",
      "Tự ý đào bới cổ vật trái phép và viết vẽ bậy lên bia đá di tích lịch sử.",
      "Quyên góp ủng hộ quỹ bảo tồn nghệ thuật cồng chiêng Tây Nguyên.",
      "Mặc trang phục lịch sự khi viếng đền chùa di tích."
    ],
    ans: 1,
    explain: "Luật Di sản văn hóa nghiêm cấm hành vi chiếm đoạt, hủy hoại, đào bới trái phép cổ vật hoặc làm sai lệch nguyên trạng di tích."
  },
  {
    q: "Nguyên tắc cơ bản của pháp luật quốc tế đòi hỏi các quốc gia phải giải quyết tranh chấp bằng phương thức nào?",
    options: [
      "Bằng các biện pháp hòa bình (đàm phán, hòa giải, trọng tài, tòa án quốc tế).",
      "Đơn phương sử dụng vũ lực tấn công xâm chiếm lãnh thổ đối phương.",
      "Áp đặt bao vây cấm vận quân sự toàn diện.",
      "Đe dọa sử dụng vũ khí hủy diệt hàng loạt."
    ],
    ans: 0,
    explain: "Hiến chương Liên hợp quốc quy định mọi tranh chấp quốc tế phải được giải quyết bằng các biện pháp hòa bình, cấm đe dọa hoặc dùng vũ lực."
  },
  {
    q: "Ranh giới ngoài của vùng biển nào sau đây được xác định là đường biên giới quốc gia trên biển của Việt Nam?",
    options: [
      "Ranh giới ngoài của vùng nội thủy ven bờ.",
      "Ranh giới ngoài của vùng lãnh hải rộng 12 hải lí tính từ đường cơ sở.",
      "Ranh giới ngoài của vùng tiếp giáp lãnh hải rộng 24 hải lí.",
      "Ranh giới ngoài của vùng đặc quyền kinh tế rộng 200 hải lí."
    ],
    ans: 1,
    explain: "Theo Luật Biển Việt Nam và UNCLOS 1982, ranh giới ngoài của lãnh hải chính là đường biên giới quốc gia trên biển của Việt Nam."
  },
  {
    q: "Nguyên tắc 'Đãi ngộ tối huệ quốc' (MFN) trong các nguyên tắc nền tảng của WTO quy định:",
    options: [
      "Ưu đãi thương mại dành cho một thành viên thì phải mở rộng vô điều kiện cho tất cả các thành viên còn lại.",
      "Chỉ dành ưu đãi thuế quan cho các nước đối tác phát triển lớn.",
      "Hàng hóa nhập khẩu bắt buộc phải chịu thuế cao gấp đôi hàng nội địa.",
      "Mọi tranh chấp thương mại đều phải dùng biện pháp trừng phạt quân sự."
    ],
    ans: 0,
    explain: "MFN đòi hỏi không phân biệt đối xử giữa các đối tác thành viên: ưu đãi cho một nước phải áp dụng bình đẳng cho tất cả các nước thành viên khác."
  },
  {
    q: "Điều khoản nào trong hợp đồng thương mại quốc tế quy định việc miễn trách nhiệm phạt vi phạm khi xảy ra thiên tai, dịch bệnh, chiến tranh không lường trước được?",
    options: [
      "Điều khoản thanh toán L/C qua ngân hàng.",
      "Điều khoản sự kiện bất khả kháng (Force Majeure).",
      "Điều khoản trọng tài thương mại quốc tế.",
      "Điều khoản bảo hiểm hàng hóa vận tải biển."
    ],
    ans: 1,
    explain: "Điều khoản bất khả kháng (Force Majeure) bảo vệ các bên không bị phạt vi phạm hợp đồng khi xảy ra biến cố khách quan không thể khắc phục."
  }
];

module.exports = {
  glossaryTable,
  interactiveTools,
  arenaQuestions
};
