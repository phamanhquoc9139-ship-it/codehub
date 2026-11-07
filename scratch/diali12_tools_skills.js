// scratch/diali12_tools_skills.js
// Cẩm nang Công cụ & Kỹ năng Địa lí 12 + 20 Câu hỏi Đấu trường Trạng nguyên 45 phút

const toolsAndSkills = {
  title: "Công cụ và kỹ năng địa lí 12",
  badge: "Cẩm nang thực hành & Kĩ năng thi THPT",
  sections: [
    {
      title: "1. Đọc và khai thác Atlat Địa lí Việt Nam & Bản đồ chuyên đề",
      type: "list",
      items: [
        "<strong>Nguyên tắc chung khi đọc Atlat/Bản đồ:</strong> Xác định tên bản đồ, phạm vi không gian, tỉ lệ bản đồ và đọc kĩ bảng chú giải (các kí hiệu quy ước: điểm, đường, diện tích). Phân biệt ranh giới vùng tự nhiên và vùng kinh tế.",
        "<strong>Khai thác các trang địa lí tự nhiên:</strong> Kết hợp giữa bản đồ Địa hình (trang 4-5) với Địa chất khoáng sản (trang 8), Khí hậu (trang 9), Các hệ thống sông (trang 10), Đất và Sinh vật (trang 11-12) để giải thích tính thống nhất và phân hóa sâu sắc của cảnh quan thiên nhiên Việt Nam.",
        "<strong>Khai thác các trang dân cư & kinh tế:</strong> Xác định mật độ phân bố dân cư, quy mô các đô thị (theo cấp đô thị và quy mô dân số), các vùng chuyên canh cây công nghiệp, các trung tâm công nghiệp (theo quy mô giá trị sản xuất và cơ cấu ngành) cùng các trục giao thông huyết mạch kết nối liên vùng."
      ]
    },
    {
      title: "2. Quy tắc vàng nhận diện và lựa chọn biểu đồ thích hợp",
      type: "list",
      items: [
        "<strong>Biểu đồ Cột (Cột đơn, Cột ghép, Cột chồng):</strong> Chọn khi đề bài có từ khóa 'Quy mô', 'Sản lượng', 'Khối lượng', 'Diện tích', 'Số dân' hoặc yêu cầu 'So sánh' giữa các đối tượng, vùng miền qua một số năm (thường từ 1 - 4 mốc năm).",
        "<strong>Biểu đồ Đường (Đồ thị):</strong> Chọn khi đề bài có từ khóa 'Tốc độ tăng trưởng', 'Tốc độ phát triển', 'Chỉ số phát triển', 'Động thái biến thiên' của nhiều đối tượng khác nhau qua một chuỗi thời gian liên tục từ 4 năm trở lên.",
        "<strong>Biểu đồ Tròn:</strong> Chọn khi đề bài có từ khóa 'Cơ cấu', 'Tỉ trọng', 'Quy mô và cơ cấu' với mốc thời gian ít (1 đến 3 năm hoặc 1 đến 3 đối tượng/vùng miền). Lưu ý: Khi có từ 'Quy mô và cơ cấu' qua 2 - 3 năm, cần tính bán kính đường tròn (R năm sau = R năm gốc × căn bậc hai của tỉ số quy mô).",
        "<strong>Biểu đồ Miền:</strong> Chọn khi đề bài yêu cầu thể hiện 'Sự chuyển dịch cơ cấu', 'Thay đổi cơ cấu' với chuỗi thời gian kéo dài từ 4 năm trở lên.",
        "<strong>Biểu đồ Kết hợp (Cột + Đường):</strong> Chọn khi bảng số liệu có 2 đơn vị đo lường khác biệt nhau (ví dụ: Diện tích triệu ha và Sản lượng triệu tấn; hoặc Sản lượng và Tốc độ tăng trưởng)."
      ]
    },
    {
      title: "3. 5 Công thức tính toán cốt lõi & Công cụ tính tương tác",
      type: "formulas",
      items: [
        {
          id: "formula-density",
          name: "Mật độ dân số",
          unit: "người/km²",
          formula: "\\text{Mật độ dân số} = \\frac{\\text{Số dân (người)}}{\\text{Diện tích } (\\text{km}^2)}",
          desc: "Đo lường mức độ tập trung dân cư trên một đơn vị diện tích lãnh thổ tại các vùng kinh tế.",
          example: "Năm 2024, dân số Việt Nam khoảng 101,3 triệu người (101.300.000 người), diện tích 331.345 km². Mật độ = 101.300.000 / 331.345 ≈ 305,7 người/km².",
          inputs: [
            { label: "Dân số (người)", id: "calc_pop", default: 101300000 },
            { label: "Diện tích (km²)", id: "calc_area", default: 331345 }
          ],
          computeJs: "return (inputs[0] / inputs[1]).toFixed(1) + ' người/km²';"
        },
        {
          id: "formula-gdp-capita",
          name: "GDP bình quân đầu người",
          unit: "USD/người",
          formula: "\\text{GDP/người} = \\frac{\\text{Tổng GDP (USD)}}{\\text{Số dân (người)}}",
          desc: "Chỉ tiêu quan trọng đo lường năng suất lao động và mức sống trung bình của người dân cả nước hoặc từng vùng.",
          example: "Năm 2024, quy mô GDP nước ta ước đạt 470 tỉ USD (470.000.000.000 USD), dân số 101,3 triệu người. GDP/người = 470.000.000.000 / 101.300.000 ≈ 4.639,7 USD/người.",
          inputs: [
            { label: "Tổng GDP (USD)", id: "calc_gdp", default: 470000000000 },
            { label: "Số dân (người)", id: "calc_gdp_pop", default: 101300000 }
          ],
          computeJs: "return Math.round(inputs[0] / inputs[1]).toLocaleString('en-US') + ' USD/người';"
        },
        {
          id: "formula-share",
          name: "Tỉ trọng cơ cấu thành phần trong tổng thể",
          unit: "%",
          formula: "\\text{Tỉ trọng (\\%)} = \\frac{\\text{Giá trị thành phần}}{\\text{Tổng giá trị}} \\times 100",
          desc: "Dùng để chuyển đổi bảng số liệu tuyệt đối sang số liệu tương đối cơ cấu phục vụ vẽ biểu đồ tròn, miền hoặc cột chồng.",
          example: "Năm 2024, tổng diện tích gieo trồng cây công nghiệp là 2,8 triệu ha, trong đó cây công nghiệp lâu năm là 2,2 triệu ha. Tỉ trọng = (2,2 / 2,8) × 100 ≈ 78,6%.",
          inputs: [
            { label: "Giá trị thành phần", id: "calc_part", default: 2.2 },
            { label: "Tổng giá trị", id: "calc_total", default: 2.8 }
          ],
          computeJs: "return ((inputs[0] / inputs[1]) * 100).toFixed(1) + '%';"
        },
        {
          id: "formula-balance",
          name: "Cán cân thương mại & Tỉ số xuất nhập khẩu",
          unit: "Tỉ USD",
          formula: "\\text{Cán cân thương mại} = \\text{Giá trị xuất khẩu} - \\text{Giá trị nhập khẩu}",
          desc: "Xác định tình trạng xuất siêu (cán cân > 0) hoặc nhập siêu (cán cân < 0) của nền kinh tế.",
          example: "Năm 2024, kim ngạch xuất khẩu đạt 385,5 tỉ USD, nhập khẩu đạt 357,5 tỉ USD. Cán cân thương mại = 385,5 - 357,5 = +28,0 tỉ USD (xuất siêu).",
          inputs: [
            { label: "Xuất khẩu (tỉ USD)", id: "calc_exp", default: 385.5 },
            { label: "Nhập khẩu (tỉ USD)", id: "calc_imp", default: 357.5 }
          ],
          computeJs: "const b = (inputs[0] - inputs[1]).toFixed(1); return (b > 0 ? '+' : '') + b + ' tỉ USD (' + (b >= 0 ? 'Xuất siêu' : 'Nhập siêu') + ')';"
        },
        {
          id: "formula-growth",
          name: "Tốc độ tăng trưởng so với năm gốc",
          unit: "%",
          formula: "\\text{Tốc độ tăng trưởng (\\%)} = \\frac{\\text{Giá trị năm sau}}{\\text{Giá trị năm gốc}} \\times 100",
          desc: "Quy đổi năm gốc = 100% để theo dõi đà tăng trưởng của các đại lượng kinh tế có quy mô khác nhau trên cùng một hệ trục đồ thị đường.",
          example: "Sản lượng điện phát ra năm 2010 là 100 tỉ kWh (năm gốc = 100%), năm 2024 đạt 280 tỉ kWh. Tốc độ tăng trưởng = (280 / 100) × 100 = 280,0%.",
          inputs: [
            { label: "Giá trị năm sau", id: "calc_val_later", default: 280 },
            { label: "Giá trị năm gốc", id: "calc_val_base", default: 100 }
          ],
          computeJs: "return ((inputs[0] / inputs[1]) * 100).toFixed(1) + '% (tăng ' + (((inputs[0] / inputs[1]) * 100) - 100).toFixed(1) + '%)';"
        }
      ]
    },
    {
      title: "4. Hướng dẫn viết báo cáo địa lí & Trình bày chuyên đề",
      type: "list",
      items: [
        "<strong>Xác định đề tài và mục tiêu:</strong> Lựa chọn vấn đề địa lí cụ thể gắn với thực tiễn vùng hoặc địa phương (ví dụ: Chuyển đổi mô hình lúa - tôm ở ĐBSCL; Phát triển cụm cảng nước sâu gắn với logistics ở Đông Nam Bộ...).",
        "<strong>Thu thập và xử lí thông tin:</strong> Khai thác số liệu niên giám thống kê, bản đồ số, văn bản quy hoạch tỉnh và các nghiên cứu khoa học; lập bảng ma trận SWOT đánh giá thế mạnh, điểm yếu, thời cơ và thách thức.",
        "<strong>Cấu trúc bài báo cáo chuẩn mực:</strong> Mở đầu (Lí do chọn đề tài) -> Nội dung chính (Tiềm năng, hiện trạng, số liệu minh họa) -> Đánh giá tác động (Kinh tế, xã hội, môi trường) -> Đề xuất giải pháp và Kết luận."
      ]
    }
  ]
};

const arena_exam = [
  {
    q: "Đặc điểm vị trí địa lí nào của nước ta quy định tính chất nhiệt đới ẩm gió mùa của thiên nhiên Việt Nam?",
    options: [
      "Nằm hoàn toàn trong vùng nội chí tuyến bán cầu Bắc, tiếp giáp Biển Đông và trong khu vực hoạt động của gió mùa châu Á.",
      "Nằm ở vùng vĩ độ cận cực có mùa đông lạnh giá kéo dài quanh năm.",
      "Nằm sâu trong lòng lục địa châu Á cách xa các đại dương lớn.",
      "Nằm trên vành đai lửa Thái Bình Dương có nhiều núi lửa hoạt động."
    ],
    ans: 0,
    explain: "Vị trí nội chí tuyến đem lại lượng bức xạ dồi dào, tiếp giáp Biển Đông đem lại lượng ẩm lớn kết hợp gió mùa tạo nên khí hậu nhiệt đới ẩm gió mùa."
  },
  {
    q: "Đường biên giới quốc gia trên biển của nước ta theo Luật Biển Việt Nam và UNCLOS 1982 là:",
    options: [
      "Ranh giới phía trong của vùng nội thủy ven bờ.",
      "Ranh giới ngoài của vùng lãnh hải rộng 12 hải lí tính từ đường cơ sở.",
      "Ranh giới ngoài của vùng đặc quyền kinh tế rộng 200 hải lí.",
      "Ranh giới ngoài của thềm lục địa kéo dài 350 hải lí."
    ],
    ans: 1,
    explain: "Ranh giới ngoài của lãnh hải chính là đường biên giới quốc gia trên biển của nước ta."
  },
  {
    q: "Địa hình nước ta có đặc điểm cấu trúc cơ bản là:",
    options: [
      "Địa hình chủ yếu là núi cao trên 2.000 mét chiếm trên 50% diện tích.",
      "Đồi núi thấp chiếm ưu thế (chiếm 85% diện tích dưới 1.000m), hướng nghiêng chung tây bắc – đông nam và được trẻ lại trong Tân kiến tạo.",
      "Toàn bộ bề mặt lãnh thổ là các cao nguyên bazan xếp tầng bằng phẳng.",
      "Địa hình nghiêng dốc từ đông sang tây về phía vịnh Thái Lan."
    ],
    ans: 1,
    explain: "3/4 diện tích là đồi núi nhưng chủ yếu là đồi núi thấp dưới 1.000m; hướng nghiêng tây bắc - đông nam và phân bậc rõ rệt trong Tân kiến tạo."
  },
  {
    q: "Gió mùa mùa đông (gió mùa Đông Bắc) ở nước ta có tính chất biến tính vào nửa cuối mùa đông thể hiện ở đặc điểm:",
    options: [
      "Thời tiết lạnh khô, trời hanh hao không mưa.",
      "Thời tiết lạnh ẩm, bầu trời nhiều mây, có mưa phùn ở vùng ven biển và đồng bằng Bắc Bộ, Bắc Trung Bộ.",
      "Nắng nóng gay gắt và xuất hiện gió phơn khô nóng.",
      "Xảy ra lũ quét và bão nhiệt đới dồn dập trên diện rộng."
    ],
    ans: 1,
    explain: "Nửa cuối mùa đông, áp cao Xibia dịch chuyển ra biển Đông nhận hơi ẩm rồi thổi vào đất liền gây nên thời tiết lạnh ẩm mưa phùn đặc trưng."
  },
  {
    q: "Sự phân hóa thiên nhiên theo Đông – Tây ở vùng đồi núi nước ta thể hiện rõ nét nhất qua cặp cảnh quan:",
    options: [
      "Đông Bắc (mùa đông đến sớm và lạnh nhất) với Tây Bắc (mùa đông ngắn hơn, có vùng núi cao phân hóa ôn đới).",
      "Đồng bằng sông Hồng với Đồng bằng sông Cửu Long.",
      "Đảo Bạch Long Vĩ với đảo Phú Quốc.",
      "Vịnh Hạ Long với vịnh Nha Trang."
    ],
    ans: 0,
    explain: "Dãy Hoàng Liên Sơn chắn gió mùa đông bắc làm cho Đông Bắc đón gió lạnh trực tiếp trong khi vùng trũng Tây Bắc ấm hơn và sườn đón gió ẩm hơn."
  },
  {
    q: "Đặc điểm cơ cấu dân số theo nhóm tuổi của nước ta trong giai đoạn hiện nay là:",
    options: [
      "Đang trong thời kì 'cơ cấu dân số vàng' đồng thời có tốc độ 'già hóa dân số' diễn ra nhanh chóng.",
      "Dân số hoàn toàn trẻ hóa với tỉ lệ trẻ em dưới 15 tuổi chiếm trên 45%.",
      "Dân số đã ở mức siêu già với tỉ lệ người trên 65 tuổi chiếm trên 35%.",
      "Dân số suy giảm âm liên tục do tỉ lệ tử vong quá cao."
    ],
    ans: 0,
    explain: "Việt Nam có cơ cấu dân số vàng (lao động chiếm tỉ trọng cao) đồng thời bước vào giai đoạn già hóa dân số với tốc độ thuộc hàng nhanh nhất thế giới."
  },
  {
    q: "Quá trình đô thị hóa ở nước ta hiện nay có đặc điểm nổi bật là:",
    options: [
      "Tỉ lệ dân thành thị tăng nhanh (đạt trên 42%), mạng lưới đô thị mở rộng nhưng lối sống nông thôn vẫn chiếm ưu thế tuyệt đối.",
      "Tỉ lệ dân số thành thị tăng, chức năng đô thị đa dạng hóa, hình thành các chuỗi đô thị và vùng đô thị động lực.",
      "Tất cả các đô thị đều là đô thị loại đặc biệt quy mô trên 10 triệu dân.",
      "Không còn bất kì sự chênh lệch nào giữa thành thị và nông thôn."
    ],
    ans: 1,
    explain: "Đô thị hóa gắn liền với công nghiệp hóa, tỉ lệ dân thành thị tăng và hệ thống các đô thị trở thành hạt nhân phát triển kinh tế vùng."
  },
  {
    q: "Thế mạnh hàng đầu để phát triển công nghiệp sản xuất lương thực và cây ăn quả ở Đồng bằng sông Cửu Long là:",
    options: [
      "Diện tích đất feralit đỏ vàng trên núi đá vôi màu mỡ.",
      "Diện tích đất phù sa ngọt rộng lớn ven sông Tiền, sông Hậu, khí hậu ấm áp quanh năm và hệ sinh thái đa dạng.",
      "Tài nguyên than đá an-tra-xít có trữ lượng lớn nhất cả nước.",
      "Địa hình cao nguyên xếp tầng đón gió mùa hạ dồi dào."
    ],
    ans: 1,
    explain: "Dải phù sa ngọt trù phú dọc sông Tiền và sông Hậu cùng khí hậu cận xích đạo nắng ấm giúp ĐBSCL trở thành vựa lúa và vựa trái cây lớn nhất cả nước."
  },
  {
    q: "Vùng kinh tế dẫn đầu cả nước về diện tích và sản lượng cây cao su là:",
    options: [
      "Đông Nam Bộ.",
      "Trung du và miền núi Bắc Bộ.",
      "Đồng bằng sông Hồng.",
      "Bắc Trung Bộ."
    ],
    ans: 0,
    explain: "Đông Nam Bộ có đất bazan, đất xám phù sa cổ bằng phẳng, khí hậu cận xích đạo ít bão, là vùng chuyên canh cao su lớn nhất cả nước (Bình Phước, Bình Dương, Tây Ninh)."
  },
  {
    q: "Nhân tố tự nhiên quan trọng nhất thúc đẩy ngành thủy sản khai thác hải sản nước ta phát triển mạnh mẽ là:",
    options: [
      "Hệ thống ao hồ nước ngọt phân bố dày đặc ở vùng đồi núi.",
      "Bốn ngư trường trọng điểm lớn: Vịnh Bắc Bộ, Hoàng Sa - Trường Sa, Ninh Thuận - Bình Thuận - Bà Rịa Vũng Tàu, Cà Mau - Kiên Giang.",
      "Khí hậu lạnh giá quanh năm thích hợp bảo quản cá tươi tự nhiên.",
      "Mạng lưới kênh đào nhân tạo phủ khắp bề mặt lãnh thổ."
    ],
    ans: 1,
    explain: "Bốn ngư trường trọng điểm với nguồn hải sản dồi dào là tiền đề tự nhiên then chốt cho đội tàu đánh bắt xa bờ hoạt động."
  },
  {
    q: "Ngành công nghiệp nào sau đây của nước ta có xu hướng phân bố phân tán nhất gắn liền với các vùng nguyên liệu và thị trường tiêu thụ rộng khắp?",
    options: [
      "Công nghiệp chế biến lương thực, thực phẩm.",
      "Công nghiệp luyện kim đen và luyện kim màu.",
      "Công nghiệp khai thác than mỏ hầm lò.",
      "Công nghiệp đóng tàu biển siêu trọng."
    ],
    ans: 0,
    explain: "Chế biến lương thực thực phẩm có mặt ở khắp các tỉnh thành nhờ bám sát nguồn nguyên liệu nông - thủy sản dồi dào và thị trường tiêu dùng nội địa đông đảo."
  },
  {
    q: "Tuyến đường bộ có ý nghĩa xương sống kết nối giao thương Bắc – Nam xuyên suốt toàn bộ chiều dài lãnh thổ nước ta là:",
    options: [
      "Đường Hồ Chí Minh.",
      "Quốc lộ 1A (song hành cùng tuyến cao tốc Bắc – Nam phía Đông).",
      "Quốc lộ 22.",
      "Đường Vành đai 4."
    ],
    ans: 1,
    explain: "Quốc lộ 1A và cao tốc Bắc Nam phía Đông chạy dài từ cửa khẩu Hữu Nghị (Lạng Sơn) đến Cà Mau là trục giao thông huyết mạch số một của Việt Nam."
  },
  {
    q: "Thế mạnh công nghiệp nổi bật nhất của vùng Trung du và miền núi Bắc Bộ là:",
    options: [
      "Khai thác khoáng sản đa dạng (than, apatit, sắt, đồng...) và phát triển năng lượng thủy điện quy mô lớn.",
      "Lọc hóa dầu và hóa chất công nghệ cao ngoài khơi.",
      "Dệt may xuất khẩu và lắp ráp điện thoại thông minh lớn nhất nước.",
      "Sản xuất gốm sứ và thủ công mỹ nghệ xuất khẩu sang Tây Âu."
    ],
    ans: 0,
    explain: "TDMN Bắc Bộ giàu khoáng sản nhất nước và có hệ thống sông Đà, sông Gâm giàu tiềm năng thủy điện nhất (Sơn La, Hòa Bình, Lai Châu)."
  },
  {
    q: "Tam giác tăng trưởng kinh tế trọng điểm tạo lực đẩy phát triển cho toàn miền Bắc là:",
    options: [
      "Hà Nội – Hải Phòng – Quảng Ninh.",
      "Hà Nội – Thái Bình – Nam Định.",
      "Bắc Ninh – Hưng Yên – Hải Dương.",
      "Lạng Sơn – Cao Bằng – Hà Giang."
    ],
    ans: 0,
    explain: "Tam giác động lực Hà Nội (thủ đô, dịch vụ tài chính) - Hải Phòng (cảng biển quốc tế, chế tạo) - Quảng Ninh (du lịch, năng lượng) dẫn dắt tăng trưởng toàn vùng."
  },
  {
    q: "Mô hình kinh tế nông – lâm – thủy sản ở Bắc Trung Bộ có sự phân hóa theo không gian từ tây sang đông lần lượt là:",
    options: [
      "Lâm nghiệp (vùng núi) → Cây công nghiệp, chăn nuôi (gò đồi) → Lương thực, cây hàng năm (đồng bằng) → Nuôi trồng, đánh bắt thủy sản (duyên hải).",
      "Thủy sản nước ngọt → Rừng ngập mặn → Vùng chuyên canh cà phê vối.",
      "Vùng công nghiệp nặng → Vùng đất phèn mặn → Vùng đồi chè.",
      "Vùng đồng bằng phù sa mênh mông → Đồi núi hiểm trở → Biển đóng băng."
    ],
    ans: 0,
    explain: "Địa hình dốc từ tây sang đông tạo nên lát cắt sinh thái liên hoàn: rừng núi -> gò đồi cây lâu năm -> đồng bằng nhỏ hẹp -> bãi bồi duyên hải."
  },
  {
    q: "Điều kiện thuận lợi hàng đầu để Duyên hải Nam Trung Bộ xây dựng các cảng biển nước sâu là:",
    options: [
      "Bờ biển khúc khuỷu, có nhiều vũng vịnh nước sâu kín gió được che chắn bởi các bán đảo và cụm đảo.",
      "Nhiều cửa sông lớn bồi đắp lượng phù sa khổng lồ hàng năm.",
      "Bờ biển có các cồn cát phẳng lì thuận lợi san ủi mặt bằng.",
      "Khí hậu lạnh giá quanh năm sóng biển rất phẳng lặng."
    ],
    ans: 0,
    explain: "Bờ biển nhiều mũi đất nhô ra biển tạo các vịnh nước sâu (Cam Ranh, Vân Phong, Dung Quất, Kì Hà) đón được tàu trọng tải hàng trăm nghìn tấn."
  },
  {
    q: "Cây công nghiệp lâu năm có diện tích và sản lượng dẫn đầu cả nước tại Tây Nguyên là:",
    options: [
      "Cây Cà phê (đặc biệt là cà phê Robusta).",
      "Cây Chè búp tuyết san.",
      "Cây Hồi và Quế dược liệu.",
      "Cây Thuốc lá sợi vàng."
    ],
    ans: 0,
    explain: "Tây Nguyên là thủ phủ cà phê số một Việt Nam, nổi tiếng toàn cầu với thương hiệu chỉ dẫn địa lí Cà phê Buôn Ma Thuột."
  },
  {
    q: "Vị thế vượt trội nhất của vùng Đông Nam Bộ trong cơ cấu kinh tế quốc gia là:",
    options: [
      "Vùng đầu tàu kinh tế dẫn đầu cả nước về GRDP, thu ngân sách, thu hút FDI và xuất khẩu công nghiệp.",
      "Vùng sản xuất lúa gạo xuất khẩu lớn nhất cả nước.",
      "Vùng có diện tích rừng ngập mặn tự nhiên bảo tồn lớn nhất.",
      "Vùng cung cấp than đá cho toàn bộ nhà máy nhiệt điện."
    ],
    ans: 0,
    explain: "Đông Nam Bộ đóng góp trên 30% GDP và hơn 40% ngân sách cả nước, giữ vai trò động lực kinh tế năng động nhất Việt Nam."
  },
  {
    q: "Định hướng phát triển bền vững cốt lõi của Đồng bằng sông Cửu Long theo tinh thần 'Thuận thiên' là:",
    options: [
      "Tôn trọng quy luật tự nhiên, coi nước ngọt mùa lũ và nước mặn, nước lợ ven biển đều là tài nguyên kinh tế để thích ứng linh hoạt.",
      "Đắp đê bao bê tông khép kín ngăn chặn mọi dòng chảy của sông suối tự nhiên.",
      "Xóa bỏ hoàn toàn diện tích rừng ngập mặn để lấy đất lập khu công nghiệp.",
      "Ngừng hẳn hoạt động canh tác lúa gạo để chuyển sang khai thác cát sỏi ven sông."
    ],
    ans: 0,
    explain: "Nghị quyết 120 xác định phát triển thuận thiên: thích ứng biến đổi khí hậu, khai thác nước ngọt, nước lợ, mặn theo từng tiểu vùng sinh thái."
  },
  {
    q: "Công ước quốc tế được coi là 'Hiến pháp của đại dương' làm cơ sở pháp lí tối cao khẳng định chủ quyền biển đảo của Việt Nam là:",
    options: [
      "Công ước Liên hợp quốc về Luật Biển năm 1982 (UNCLOS 1982).",
      "Hiệp định Thương mại tự do Việt Nam - EU (EVFTA).",
      "Hiệp định đình chiến Giơ-ne-vơ năm 1954.",
      "Hiến chương Liên hợp quốc năm 1945."
    ],
    ans: 0,
    explain: "UNCLOS 1982 quy định rõ quy chế pháp lí của 5 vùng biển, là cơ sở vững chắc bảo vệ quyền chủ quyền và quyền tài phán của Việt Nam trên Biển Đông."
  }
];

module.exports = {
  toolsAndSkills,
  arena_exam
};
