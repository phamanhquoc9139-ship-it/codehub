// scratch/diali11_tools_skills.js
// Công cụ & Kỹ năng Địa lí 11 + 20 Câu hỏi Đấu trường trắc nghiệm 45 phút

const toolsAndSkills = {
  title: "Công cụ và kỹ năng địa lí",
  badge: "Cẩm nang thực hành & Phương pháp",
  sections: [
    {
      title: "1. Đọc và khai thác bản đồ, tư liệu địa lí",
      type: "list",
      items: [
        "<strong>Đọc bản đồ và lược đồ chuyên đề:</strong> Bước 1: Đọc kĩ tên bản đồ và bảng chú giải để nhận biết các đối tượng địa lí cùng các kí hiệu (kí hiệu điểm, kí hiệu đường, kí hiệu diện tích). Bước 2: Xác định phương hướng (bắc, nam, đông, tây) và tỉ lệ bản đồ để tính toán khoảng cách thực tế. Bước 3: Phân tích mối liên hệ không gian giữa vị trí địa lí, địa hình, khí hậu với mạng lưới phân bố dân cư và các ngành kinh tế.",
        "<strong>Khai thác tháp dân số:</strong> Đọc trục tung (độ tuổi, chia nhóm: dưới 15 tuổi, từ 15-64 tuổi, từ 65 tuổi trở lên), trục hoành (tỉ lệ % hoặc số dân nam/nữ). Nhận dạng kiểu tháp: Tháp mở rộng (đáy rộng, đỉnh nhọn -> dân số trẻ), Tháp thu hẹp (đáy co lại, phình ở giữa -> tỉ lệ sinh giảm), Tháp ổn định (hình chuông/trụ -> dân số già).",
        "<strong>Phân tích bảng số liệu thống kê:</strong> Đọc tên bảng, đơn vị tính, mốc thời gian. So sánh hàng ngang (sự biến thiên theo thời gian) và so sánh hàng dọc (mối tương quan giữa các đối tượng). Tính toán các đại lượng gia tăng (tuyệt đối và tương đối) để rút ra nhận xét logic và có dẫn chứng số liệu minh hoạ."
      ]
    },
    {
      title: "2. Quy tắc vàng chọn dạng biểu đồ địa lí",
      type: "grid",
      items: [
        {
          title: "Biểu đồ CỘT (Cột đơn, cột nhóm, cột chồng)",
          desc: "<strong>Dấu hiệu nhận biết:</strong> Đề bài yêu cầu thể hiện <em>'Quy mô'</em>, <em>'Khối lượng'</em>, <em>'Sản lượng'</em>, <em>'So sánh tương quan'</em> giữa các đối tượng (các quốc gia, các vùng) hoặc qua một số năm (từ 1 đến 3 mốc thời gian)."
        },
        {
          title: "Biểu đồ ĐƯỜNG biểu diễn (Đồ thị)",
          desc: "<strong>Dấu hiệu nhận biết:</strong> Đề bài yêu cầu thể hiện <em>'Tốc độ tăng trưởng'</em>, <em>'Tốc độ phát triển'</em>, <em>'Diễn biến'</em> hoặc <em>'Sự gia tăng'</em> qua một chuỗi nhiều năm liên tục (thường từ 4 năm trở lên, có năm gốc = 100%)."
        },
        {
          title: "Biểu đồ TRÒN (Cơ cấu 1 đến 3 năm)",
          desc: "<strong>Dấu hiệu nhận biết:</strong> Đề bài có từ khoá <em>'Cơ cấu'</em>, <em>'Tỉ trọng'</em>, <em>'Quy mô và cơ cấu'</em> trong khoảng thời gian từ 1 đến 3 năm (hoặc 1 đến 3 vùng/quốc gia). Nếu có sự thay đổi quy mô tổng thể thì vẽ biểu đồ tròn có bán kính khác nhau (R năm sau > R năm trước)."
        },
        {
          title: "Biểu đồ MIỀN (Cơ cấu từ 4 năm trở lên)",
          desc: "<strong>Dấu hiệu nhận biết:</strong> Đề bài yêu cầu thể hiện <em>'Sự chuyển dịch cơ cấu'</em>, <em>'Thay đổi cơ cấu'</em> qua chuỗi thời gian dài (từ 4 năm trở lên). Đơn vị luôn luôn là % và tổng các miền xếp chồng luôn bằng 100%."
        },
        {
          title: "Biểu đồ KẾT HỢP (Cột và Đường)",
          desc: "<strong>Dấu hiệu nhận biết:</strong> Bảng số liệu có 2 đối tượng địa lí khác nhau về bản chất và khác nhau về đơn vị đo (ví dụ: Tổng số dân đơn vị triệu người vẽ cột; Tỉ lệ gia tăng tự nhiên đơn vị % vẽ đường; hoặc Sản lượng lúa tấn vẽ cột, Diện tích ha vẽ đường)."
        },
        {
          title: "Lưu ý sống còn khi vẽ biểu đồ",
          desc: "Luôn bảo đảm đầy đủ 5 thành phần chuẩn: (1) Tên biểu đồ viết hoa rõ ràng; (2) Gốc toạ độ 0 và các vạch chia tỉ lệ đều đặn; (3) Tên đơn vị trên các trục toạ độ; (4) Số liệu ghi trên các cột/đường/nan quạt; (5) Bảng chú giải phân biệt rõ ràng."
        }
      ]
    },
    {
      title: "3. Năm công thức tính toán địa lí cốt lõi",
      type: "formulas",
      items: [
        {
          id: "formula-density",
          name: "Mật độ dân số",
          unit: "người/km²",
          formula: "\\text{Mật độ dân số} = \\frac{\\text{Số dân (người)}}{\\text{Diện tích } (\\text{km}^2)}",
          desc: "Đo lường mức độ tập trung dân cư trên một đơn vị diện tích lãnh thổ.",
          example: "Năm 2021, dân số khu vực Đông Nam Á là 668 triệu người, diện tích 4,5 triệu km². Mật độ = 668.000.000 / 4.500.000 ≈ 148,4 người/km².",
          inputs: [
            { label: "Dân số (người hoặc triệu người)", id: "calc_pop", default: 668000000 },
            { label: "Diện tích (km²)", id: "calc_area", default: 4500000 }
          ],
          computeJs: "return (inputs[0] / inputs[1]).toFixed(1) + ' người/km²';"
        },
        {
          id: "formula-gdp-capita",
          name: "GDP bình quân đầu người",
          unit: "USD/người",
          formula: "\\text{GDP/người} = \\frac{\\text{Tổng GDP (USD)}}{\\text{Số dân (người)}}",
          desc: "Chỉ tiêu phản ánh tương đối mức sống, năng suất lao động và tiềm lực kinh tế trung bình của mỗi cư dân.",
          example: "Năm 2021, Hoa Kỳ có GDP là 23.315 tỉ USD (23.315.000 triệu USD), dân số 332 triệu người. GDP/người = 23.315.000.000.000 / 332.000.000 ≈ 70.226 USD/người.",
          inputs: [
            { label: "Tổng GDP (USD)", id: "calc_gdp", default: 23315000000000 },
            { label: "Dân số (người)", id: "calc_gdp_pop", default: 332000000 }
          ],
          computeJs: "return Math.round(inputs[0] / inputs[1]).toLocaleString('en-US') + ' USD/người';"
        },
        {
          id: "formula-share",
          name: "Tỉ trọng thành phần trong tổng số",
          unit: "%",
          formula: "\\text{Tỉ trọng (\\%)} = \\frac{\\text{Giá trị của bộ phận}}{\\text{Tổng giá trị toàn thể}} \\times 100",
          desc: "Dùng để chuyển đổi số liệu tuyệt đối sang số liệu tương đối cơ cấu (%) phục vụ vẽ biểu đồ tròn, miền hoặc cột chồng.",
          example: "Năm 2021, GDP Trung Quốc là 17.734 tỉ USD, trong đó ngành dịch vụ đóng góp 9.450 tỉ USD. Tỉ trọng dịch vụ = (9.450 / 17.734) * 100 ≈ 53,3%.",
          inputs: [
            { label: "Giá trị bộ phận thành phần", id: "calc_part", default: 9450 },
            { label: "Tổng giá trị", id: "calc_total", default: 17734 }
          ],
          computeJs: "return ((inputs[0] / inputs[1]) * 100).toFixed(2) + ' %';"
        },
        {
          id: "formula-trade-balance",
          name: "Cán cân thương mại",
          unit: "USD (hoặc tỉ USD)",
          formula: "\\text{Cán cân thương mại} = \\text{Giá trị Xuất khẩu} - \\text{Giá trị Nhập khẩu}",
          desc: "Đánh giá vị thế thương mại quốc tế. Giá trị dương (> 0): Xuất siêu (thặng dư); Giá trị âm (< 0): Nhập siêu (thâm hụt).",
          example: "Năm 2021, Liên bang Nga xuất khẩu đạt 492 tỉ USD, nhập khẩu 293 tỉ USD. Cán cân thương mại = 492 - 293 = +199 tỉ USD (Nga xuất siêu 199 tỉ USD).",
          inputs: [
            { label: "Giá trị Xuất khẩu (tỉ USD)", id: "calc_exp", default: 492 },
            { label: "Giá trị Nhập khẩu (tỉ USD)", id: "calc_imp", default: 293 }
          ],
          computeJs: "const diff = inputs[0] - inputs[1]; return (diff >= 0 ? '+' : '') + diff.toFixed(1) + ' tỉ USD (' + (diff >= 0 ? 'Xuất siêu / Thặng dư' : 'Nhập siêu / Thâm hụt') + ')';"
        },
        {
          id: "formula-growth-rate",
          name: "Tốc độ tăng trưởng so với năm gốc",
          unit: "%",
          formula: "\\text{Tốc độ tăng trưởng năm } n = \\frac{\\text{Giá trị năm } n}{\\text{Giá trị năm gốc (năm đầu)}} \\times 100",
          desc: "Quy đổi năm gốc làm mốc chuẩn 100% để so sánh nhịp độ phát triển của các đối tượng khác nhau trên cùng một biểu đồ đường.",
          example: "Sản lượng than của quốc gia năm 2010 (năm gốc) đạt 40 triệu tấn, năm 2021 đạt 52 triệu tấn. Tốc độ tăng trưởng năm 2021 = (52 / 40) * 100 = 130,0% (tăng 30% so với năm 2010).",
          inputs: [
            { label: "Giá trị năm so sánh", id: "calc_year_n", default: 52 },
            { label: "Giá trị năm gốc chuẩn", id: "calc_year_0", default: 40 }
          ],
          computeJs: "const val = ((inputs[0] / inputs[1]) * 100).toFixed(1); const delta = (val - 100).toFixed(1); return val + ' % (Tăng ' + (delta >= 0 ? '+' : '') + delta + '% so với năm gốc)';"
        }
      ]
    },
    {
      title: "4. Quy trình viết báo cáo địa lí chuyên nghiệp",
      type: "list",
      items: [
        "<strong>Bước 1 - Xác định ý tưởng và đề tài:</strong> Lựa chọn đối tượng nghiên cứu rõ ràng (ví dụ: Tìm hiểu sự phát triển kinh tế vùng duyên hải Trung Quốc; Đánh giá hoạt động FDI của Nhật Bản). Nêu rõ mục tiêu cần làm sáng tỏ.",
        "<strong>Bước 2 - Thu thập và xử lí thông tin tư liệu:</strong> Tìm kiếm số liệu thống kê tin cậy từ Niên giám thống kê, Ngân hàng Thế giới (WB), Quỹ Tiền tệ Quốc tế (IMF). Chọn lọc, tính toán và xử lí các chỉ tiêu (tỉ trọng %, tốc độ tăng, vẽ biểu đồ minh hoạ trực quan).",
        "<strong>Bước 3 - Xây dựng đề cương chi tiết:</strong> Đề cương chuẩn gồm 3 phần: (1) Mở đầu (Khái quát vị trí, bối cảnh); (2) Nội dung chính (Thực trạng phát triển, nguyên nhân, thuận lợi & khó khăn); (3) Kết luận và giải pháp (Triển vọng phát triển, bài học rút ra).",
        "<strong>Bước 4 - Viết và hoàn thiện báo cáo:</strong> Diễn đạt bằng ngôn ngữ khoa học địa lí ngắn gọn, lập luận chặt chẽ, số liệu minh chứng rõ ràng và trích dẫn đầy đủ nguồn tham khảo."
      ]
    }
  ]
};

const arena_exam_20 = [
  {
    id: 1,
    q: "Hệ thống chỉ tiêu chủ yếu nào thường được sử dụng đồng thời để phân chia các quốc gia trên thế giới thành nhóm nước phát triển và nhóm nước đang phát triển?",
    options: [
      "Thu nhập quốc gia bình quân đầu người (GNI/người), Cơ cấu kinh tế và Chỉ số phát triển con người (HDI)",
      "Tổng diện tích lãnh thổ tự nhiên, số lượng dân cư và sản lượng lúa gạo bình quân",
      "Số lượng vũ khí hạt nhân, chi tiêu ngân sách quốc phòng và số lượng vệ tinh viễn thông",
      "Tỉ lệ bao phủ rừng tự nhiên, số lượng sông ngòi và chiều dài bờ biển giáp đại dương"
    ],
    answer: 0,
    explanation: "Ba chỉ tiêu cốt lõi được Liên Hợp Quốc và Ngân hàng Thế giới áp dụng thống nhất là GNI/người, Cơ cấu ngành kinh tế (tỉ trọng dịch vụ và công nghiệp) và chỉ số HDI."
  },
  {
    id: 2,
    q: "Biểu hiện đặc trưng nhất về mặt kinh tế của xu hướng toàn cầu hoá nền kinh tế thế giới là:",
    options: [
      "Thương mại thế giới phát triển nhanh, đầu tư nước ngoài (FDI) tăng mạnh và thị trường tài chính quốc tế mở rộng",
      "Mỗi quốc gia đóng kín cửa biên giới để bảo vệ hàng hoá thủ công nghiệp nội địa",
      "Xoá bỏ hoàn toàn các loại tiền tệ quốc gia để dùng chung một đồng tiền duy nhất",
      "Sự giải thể của tất cả các tổ chức liên kết kinh tế khu vực trên toàn cầu"
    ],
    answer: 0,
    explanation: "Toàn cầu hoá kinh tế biểu hiện qua sự bùng nổ thương mại quốc tế, dòng vốn đầu tư xuyên quốc gia, sự liên thông tài chính và hoạt động của các tập đoàn đa quốc gia."
  },
  {
    id: 3,
    q: "Nguyên nhân cốt lõi khiến nguồn tài nguyên thiên nhiên giàu có của khu vực Mỹ La tinh chưa mang lại sự thịnh vượng bền vững đồng đều cho toàn thể nhân dân là do:",
    options: [
      "Chế độ sở hữu ruộng đất bất bình đẳng kéo dài, nợ nước ngoài cao và tình trạng bất ổn chính trị",
      "Khu vực này hoàn toàn không có người dân sinh sống ở vùng đồng bằng châu thổ",
      "Toàn bộ tài nguyên khoáng sản đều nằm dưới độ sâu trên 10.000 mét không thể khai thác",
      "Các quốc gia Mỹ La tinh bị cô lập hoàn toàn khỏi hệ thống thương mại thế giới"
    ],
    answer: 0,
    explanation: "Sự phân chia ruộng đất bất bình đẳng, chế độ đại điền trang (latifundia), nợ nước ngoài lớn và bất ổn thể chế là rào cản xã hội kìm hãm kinh tế Mỹ La tinh."
  },
  {
    id: 4,
    q: "Bốn quyền tự do lưu thông cơ bản được thiết lập trong Thị trường chung Liên minh châu Âu (EU) bao gồm:",
    options: [
      "Tự do lưu thông hàng hoá, dịch vụ, con người và tiền vốn",
      "Tự do khai thác vũ khí, tự do mua bán đất đai, tự do in tiền và tự do lập quân đội riêng",
      "Tự do thay đổi biên giới quốc gia, tự do bầu cử tổng thống toàn cầu, tự do tôn giáo và hàng hải",
      "Tự do nhập khẩu dầu mỏ, tự do xuất khẩu than đá, tự do đánh bắt cá ngừ và tự do du lịch vũ trụ"
    ],
    answer: 0,
    explanation: "Thị trường chung EU vận hành trên 4 trụ cột tự do nền tảng: tự do lưu thông hàng hoá, dịch vụ, con người và tiền vốn."
  },
  {
    id: 5,
    q: "Hiệp ước Ma-xtrích (Maastricht Treaty) có hiệu lực năm 1993 đánh dấu bước chuyển mình lịch sử nào của liên kết châu Âu?",
    options: [
      "Cộng đồng châu Âu (EC) chính thức đổi tên và phát triển thành Liên minh châu Âu (EU)",
      "Giải thể Cộng đồng Than Thép châu Âu để thành lập Khối quân sự NATO",
      "Thống nhất chia cắt nước Đức thành hai quốc gia riêng biệt",
      "Thành lập Khu vực mậu dịch tự do Bắc Mỹ (NAFTA)"
    ],
    answer: 0,
    explanation: "Hiệp ước Maastricht (ký 1992, hiệu lực 1/11/1993) chính thức khai sinh Liên minh châu Âu (EU) với liên minh kinh tế, tiền tệ và chính trị sâu rộng."
  },
  {
    id: 6,
    q: "Vị trí địa lí của khu vực Đông Nam Á được coi là cầu nối giao thông huyết mạch giữa:",
    options: [
      "Hai lục địa Á - Âu với lục địa Ô-xtrây-li-a; hai đại dương Thái Bình Dương với Ấn Độ Dương",
      "Lục địa Bắc Mỹ với lục địa Nam Mỹ; Đại Tây Dương với Bắc Băng Dương",
      "Châu Phi với châu Nam Cực; Nam Đại Dương với Địa Trung Hải",
      "Lục địa Á - Âu với lục địa Phi; Biển Ban-tích với Biển Đen"
    ],
    answer: 0,
    explanation: "Đông Nam Á là ngã tư đường hàng hải và hàng không quốc tế, cầu nối giữa lục địa Á - Âu với Ô-xtrây-li-a và giữa Thái Bình Dương với Ấn Độ Dương."
  },
  {
    id: 7,
    q: "Đặc điểm khí hậu chung của đại bộ phận lãnh thổ Đông Nam Á là:",
    options: [
      "Khí hậu nhiệt đới gió mùa và khí hậu xích đạo ẩm, nhiệt độ cao và mưa nhiều quanh năm",
      "Khí hậu ôn đới hải dương mùa đông ấm áp, mùa hè mát mẻ",
      "Khí hậu cực và cận cực băng giá vĩnh cửu quanh năm",
      "Khí hậu hoang mạc khô hạn không bao giờ có mưa"
    ],
    answer: 0,
    explanation: "Nằm trọn vẹn trong vành đai nội chí tuyến, Đông Nam Á có khí hậu nhiệt đới gió mùa và xích đạo nóng ẩm, tạo điều kiện thuận lợi cho nền nông nghiệp lúa nước và rừng nhiệt đới phát triển."
  },
  {
    id: 8,
    q: "Ba trụ cột nền tảng tạo nên Cộng đồng ASEAN (thành lập chính thức ngày 31/12/2015) là:",
    options: [
      "Cộng đồng An ninh (APSC), Cộng đồng Kinh tế (AEC) và Cộng đồng Văn hoá - Xã hội (ASCC)",
      "Cộng đồng Vũ trang, Cộng đồng Năng lượng nguyên tử và Cộng đồng Ngoại giao",
      "Cộng đồng Đồng tiền chung, Cộng đồng Hộ chiếu đơn nhất và Cộng đồng Thuế quan chung",
      "Cộng đồng Nông nghiệp, Cộng đồng Khai khoáng và Cộng đồng Lâm nghiệp"
    ],
    answer: 0,
    explanation: "Cộng đồng ASEAN vững chắc trên ba trụ cột: Cộng đồng Chính trị - An ninh (APSC), Cộng đồng Kinh tế (AEC) và Cộng đồng Văn hoá - Xã hội (ASCC)."
  },
  {
    id: 9,
    q: "Khu vực Tây Nam Á sở hữu tài nguyên thiên nhiên nào mang ý nghĩa chiến lược sống còn đối với an ninh năng lượng của toàn thế giới?",
    options: [
      "Dầu mỏ và khí tự nhiên (chiếm hơn 50% trữ lượng dầu mỏ đã xác minh của thế giới)",
      "Quặng sắt chất lượng cao và than đá cốc",
      "Bô-xít nhôm và kim cương tự nhiên",
      "Nguồn nước ngọt và diện tích rừng lá kim ngút ngàn"
    ],
    answer: 0,
    explanation: "Tây Nam Á (vùng Vịnh Péc-xích) là 'rốn dầu' của thế giới, nắm giữ hơn một nửa trữ lượng dầu thô toàn cầu và giữ vai trò chi phối giá năng lượng quốc tế."
  },
  {
    id: 10,
    q: "Eo biển chiến lược nào tại Tây Nam Á được coi là yết hầu hàng hải vận chuyển dầu mỏ nhộn nhịp và nhạy cảm nhất hành tinh?",
    options: [
      "Eo biển Hoóc-mút (Strait of Hormuz)",
      "Eo biển Ma-lắc-ca",
      "Eo biển Bô-xpo",
      "Eo biển Gi-bran-ta"
    ],
    answer: 0,
    explanation: "Eo biển Hoóc-mút nối Vịnh Péc-xích với biển A-ráp là cửa ngõ duy nhất mà khoảng 1/5 lượng dầu mỏ tiêu thụ của thế giới phải lưu thông qua mỗi ngày."
  },
  {
    id: 11,
    q: "Sự phân hoá lãnh thổ sản xuất công nghiệp của Hoa Kỳ từ cuối thế kỉ XX đến nay có xu hướng nổi bật là:",
    options: [
      "Dịch chuyển từ vùng Đông Bắc (Vành đai rỉ sét) xuống vùng Nam và Tây (Vành đai Mặt trời)",
      "Dịch chuyển toàn bộ nhà máy lên bang lạnh giá A-la-xca",
      "Tập trung hoàn toàn vào trung tâm đồng bằng nội địa ven sông Mi-xi-xi-pi",
      "Chuyển dịch các nhà máy đóng tàu lên đỉnh dãy núi A-pa-lat"
    ],
    answer: 0,
    explanation: "Công nghiệp Hoa Kỳ đã dịch chuyển mạnh mẽ từ vùng Đông Bắc truyền thống xuống các bang phía nam và bờ tây ('Vành đai Mặt trời') gắn liền với công nghệ cao, viễn thông và hóa dầu."
  },
  {
    id: 12,
    q: "Trung tâm công nghệ cao nổi tiếng thế giới 'Thung lũng Silicon' (Silicon Valley) của Hoa Kỳ toạ lạc tại bang nào?",
    options: [
      "Bang Ca-li-phoóc-ni-a (California)",
      "Bang Niu Oóc (New York)",
      "Bang Tếch-dát (Texas)",
      "Bang Phlo-ri-đa (Florida)"
    ],
    answer: 0,
    explanation: "Thung lũng Silicon nằm ở phía nam vịnh San Francisco thuộc bang California, là thủ phủ công nghệ thông tin và khởi nghiệp số 1 hành tinh."
  },
  {
    id: 13,
    q: "Dãy núi tự nhiên nào được coi là ranh giới phân chia phần lãnh thổ châu Âu và châu Á của Liên bang Nga?",
    options: [
      "Dãy núi U-ran (Ural)",
      "Dãy núi Cáp-ca (Caucasus)",
      "Dãy núi An-tai (Altai)",
      "Dãy núi Xai-an (Sayan)"
    ],
    answer: 0,
    explanation: "Dãy núi U-ran chạy dài theo hướng kinh tuyến từ bắc xuống nam là ranh giới tự nhiên phân chia châu Âu và châu Á của nước Nga."
  },
  {
    id: 14,
    q: "Vùng kinh tế nào của Liên bang Nga có vai trò trung tâm chính trị, văn hoá, khoa học kĩ thuật lâu đời và phát triển năng động nhất?",
    options: [
      "Vùng Trung ương (quanh thủ đô Mát-xcơ-va)",
      "Vùng Viễn Đông",
      "Vùng Đất đen",
      "Vùng U-ran"
    ],
    answer: 0,
    explanation: "Vùng Trung ương với thủ đô Mát-xcơ-va là trái tim chính trị, kinh tế, giáo dục và công nghiệp công nghệ cao của Liên bang Nga."
  },
  {
    id: 15,
    q: "Bốn hòn đảo lớn hợp thành bộ phận lãnh thổ cốt lõi của Nhật Bản theo thứ tự từ bắc xuống nam lần lượt là:",
    options: [
      "Hô-cai-đô, Hôn-su, Xi-cô-cư, Kiu-xiu",
      "Hôn-su, Hô-cai-đô, Kiu-xiu, Xi-cô-cư",
      "Kiu-xiu, Xi-cô-cư, Hôn-su, Hô-cai-đô",
      "Hô-cai-đô, Kiu-xiu, Hôn-su, Xi-cô-cư"
    ],
    answer: 0,
    explanation: "Thứ tự 4 đảo lớn của Nhật Bản từ bắc xuống nam là Hô-cai-đô (Hokkaido), Hôn-su (Honshu), Xi-cô-cư (Shikoku) và Kiu-xiu (Kyushu)."
  },
  {
    id: 16,
    q: "Nguyên nhân chủ yếu làm cho các trung tâm công nghiệp lớn của Nhật Bản tập trung dày đặc ở ven bờ biển Thái Bình Dương là:",
    options: [
      "Thuận lợi cho việc nhập khẩu nguyên liệu khoáng sản thô và xuất khẩu hàng hoá bằng đường biển",
      "Khu vực này có nhiều mỏ than đá lộ thiên và quặng sắt phong phú nhất",
      "Địa hình đồi núi che chắn tuyệt đối không có sóng thần hay bão biển",
      "Dân cư vùng nội địa từ chối làm việc trong các nhà máy cơ khí"
    ],
    answer: 0,
    explanation: "Do nghèo tài nguyên khoáng sản, Nhật Bản phải nhập khẩu phần lớn nguyên liệu thô và xuất khẩu sản phẩm chế biến, các cảng biển Thái Bình Dương tạo ưu thế vượt trội về logistic đường biển."
  },
  {
    id: 17,
    q: "Đặc điểm tự nhiên nổi bật của miền Tây Trung Quốc so với miền Đông là:",
    options: [
      "Địa hình núi cao, sơn nguyên đồ sộ, khí hậu lục địa khô hạn khắc nghiệt",
      "Đồng bằng châu thổ phù sa trù phú, mạng lưới sông ngòi dày đặc",
      "Khí hậu cận xích đạo mưa dầm quanh năm",
      "Đường bờ biển dài với hàng nghìn vịnh nước sâu và đảo ven bờ"
    ],
    answer: 0,
    explanation: "Miền Tây Trung Quốc có địa hình núi non hiểm trở (dãy Hi-ma-lay-a, Côn Luân), sơn nguyên Tây Tạng cao ngất và các hoang mạc khô cằn rộng lớn."
  },
  {
    id: 18,
    q: "Sản phẩm nông nghiệp xuất khẩu truyền thống nổi tiếng thế giới của Ô-xtrây-li-a được chăn thả ở vùng đồng cỏ bán khô hạn nội địa là:",
    options: [
      "Len cừu, thịt cừu và thịt bò",
      "Mủ cao su tự nhiên và hạt điều",
      "Cà phê robusta và hồ tiêu",
      "Tơ tằm tự nhiên và màng cọ dầu"
    ],
    answer: 0,
    explanation: "Ô-xtrây-li-a là cường quốc xuất khẩu len cừu Merino, thịt cừu và thịt bò hàng đầu thế giới."
  },
  {
    id: 19,
    q: "Năm 2021, dân số một quốc gia là 100 triệu người, diện tích tự nhiên là 330.000 km². Mật độ dân số của quốc gia đó xấp xỉ bằng:",
    options: [
      "303 người/km²",
      "3.300 người/km²",
      "33 người/km²",
      "30.300 người/km²"
    ],
    answer: 0,
    explanation: "Áp dụng công thức: Mật độ dân số = Số dân / Diện tích = 100.000.000 / 330.000 ≈ 303 người/km²."
  },
  {
    id: 20,
    q: "Để thể hiện 'Tốc độ tăng trưởng' sản lượng các ngành kinh tế của một quốc gia qua 5 năm liên tục (lấy năm đầu = 100%), dạng biểu đồ nào là thích hợp nhất?",
    options: [
      "Biểu đồ đường biểu diễn (đồ thị)",
      "Biểu đồ tròn 1 vòng duy nhất",
      "Biểu đồ miền diện tích tự nhiên",
      "Biểu đồ thanh ngang chỉ 1 cột"
    ],
    answer: 0,
    explanation: "Khi đề bài yêu cầu thể hiện tốc độ tăng trưởng qua chuỗi thời gian nhiều năm với chỉ số % (năm gốc = 100%), biểu đồ đường là dạng biểu đồ chuẩn xác và tối ưu nhất."
  }
];

module.exports = {
  toolsAndSkills,
  arena_exam_20
};
