const fs = require('fs');
const path = require('path');

const practicalCases = {
  "1": [
    {
      badge: "Tình huống 1 • Thực nghiệm",
      title: "Tái hiện thí nghiệm rơi tự do của Galilei trong ống chân không Newton",
      scenario: "Trong lớp học vật lí, khi thả rơi một chiếc lông vũ và một viên bi kim loại trong điều kiện không khí bình thường, viên bi rơi xuống sàn trước chiếc lông vũ rất nhiều. Học sinh nghi ngờ liệu nhận định của Aristotle có đúng không?",
      analysis: "Trong không khí, cả hai vật chịu tác dụng của trọng lực $P = mg$ và lực cản của không khí $F_c$. Vì lông vũ có diện tích bề mặt lớn so với khối lượng nhẹ, lực cản $F_c$ triệt tiêu phần lớn trọng lực khiến gia tốc rơi $a = \\frac{mg - F_c}{m} = g - \\frac{F_c}{m}$ rất nhỏ.",
      solution: "Đặt cả hai vật vào một ống thủy tinh kín và dùng máy bơm hút sạch không khí tạo chân không ($F_c \\approx 0$). Khi lật ngược ống, cả viên bi và lông vũ cùng rơi song song chạm đáy ống chính xác cùng một thời điểm với gia tốc rơi tự do $g \\approx 9{,}8\\text{ m/s}^2$.",
      takeaway: "Thực nghiệm khoa học đòi hỏi phải cô lập các yếu tố gây nhiễu (như lực cản không khí) để vạch ra bản chất quy luật tự nhiên, chứng minh mọi vật rơi tự do như nhau không phụ thuộc khối lượng."
    },
    {
      badge: "Tình huống 2 • Vận tốc vũ trụ",
      title: "Tính toán tốc độ phóng vệ tinh từ ý tưởng 'Đại bác Newton'",
      scenario: "Newton đề xuất thí nghiệm tư duy: Nếu đặt một khẩu đại bác trên đỉnh núi rất cao vượt khỏi khí quyển và bắn đạn theo phương ngang với tốc độ cực lớn, tốc độ tối thiểu cần là bao nhiêu để viên đạn không bao giờ rơi chạm mặt đất?",
      analysis: "Để viên đạn bay theo quỹ đạo tròn quanh Trái Đất, lực hấp dẫn của Trái Đất phải đóng vai trò là lực hướng tâm: $F_{hd} = F_{ht} \\iff G \\frac{M m}{R^2} = m \\frac{v^2}{R} \\implies v = \\sqrt{\\frac{GM}{R}} = \\sqrt{g R}$.",
      solution: "Thay các hằng số: bán kính Trái Đất $R \\approx 6370\\text{ km}$, gia tốc trọng trường $g \\approx 9{,}8\\text{ m/s}^2$: $v = \\sqrt{9{,}8 \\times 6{,}37 \\times 10^6} \\approx 7900\\text{ m/s} = 7{,}9\\text{ km/s}$. Đây chính là vận tốc vũ trụ cấp 1.",
      takeaway: "Ý tưởng lí thuyết từ thế kỉ XVII của Newton đã đặt nền móng toán học cho toàn bộ ngành du hành không gian và công nghệ phóng vệ tinh nhân tạo hiện đại ngày nay."
    }
  ],
  "2": [
    {
      badge: "Tình huống 1 • Thiên văn",
      title: "Giải mã thành phần khí quyển sao xa qua vạch quang phổ hấp thụ",
      scenario: "Các nhà thiên văn học quan sát một ngôi sao cách Trái Đất hàng chục năm ánh sáng. Làm thế nào các nhà khoa học có thể khẳng định ngôi sao đó chứa chủ yếu hydro và heli mà không cần tới tận nơi lấy mẫu?",
      analysis: "Mỗi nguyên tố hóa học khi ở trạng thái khí áp suất thấp chỉ hấp thụ hoặc bức xạ những bước sóng ánh sáng hoàn toàn xác định, tạo thành hệ thống vạch quang phổ đặc trưng duy nhất (như 'dấu vân tay' nguyên tử).",
      solution: "Sử dụng máy quang phổ gắn trên kính thiên văn thu ánh sáng ngôi sao và đối chiếu các vạch đen hấp thụ với vạch quang phổ chuẩn của hydro và heli trong phòng thí nghiệm. Sự trùng khớp hoàn hảo các bước sóng chứng minh sự tồn tại của hai nguyên tố này trên ngôi sao.",
      takeaway: "Quang phổ học thiên văn là cây cầu vật lí quang học kì diệu nối liền phòng thí nghiệm Trái Đất với các thiên hà xa xôi hàng triệu năm ánh sáng."
    },
    {
      badge: "Tình huống 2 • Y sinh",
      title: "An toàn bức xạ trong chẩn đoán hình ảnh chụp cắt lớp vi tính CT",
      scenario: "Bệnh nhân cần chụp cắt lớp vi tính (CT scan) để chẩn đoán tổn thương nội tạng. Bệnh nhân lo ngại về mức độ nhiễm xạ của tia X lên cơ thể.",
      analysis: "Tia X là bức xạ điện từ ion hóa năng lượng cao có khả năng đâm xuyên qua các mô mềm. Liều hấp thụ bức xạ được đo bằng đơn vị Sievert (mSv). Một lần chụp CT ngực tương đương mức bức xạ tự nhiên mà một người nhận từ môi trường trong khoảng 2 năm (khoảng 6-8 mSv).",
      solution: "Bác sĩ áp dụng nguyên lí an toàn bức xạ ALARA ('As Low As Reasonably Achievable'): Che chắn các cơ quan nhạy cảm (tuyến giáp, cơ quan sinh sản) bằng áo chì, điều chỉnh thời gian phát tia tối thiểu và chỉ định chụp khi lợi ích y khoa vượt trội so với rủi ro.",
      takeaway: "Vật lí y sinh luôn song hành giữa việc khai thác tối đa sức mạnh chẩn đoán của bức xạ và tuân thủ các quy chuẩn bảo vệ an toàn bức xạ nghiêm ngặt cho người bệnh."
    }
  ],
  "3": [
    {
      badge: "Tình huống 1 • Viễn thông",
      title: "Truyền dẫn dữ liệu Internet băng thông rộng bằng cáp quang biển",
      scenario: "Một tuyến cáp quang biển dài hàng nghìn kilômét truyền dữ liệu số giữa hai châu lục. Làm thế nào tín hiệu ánh sáng có thể đi uốn lượn theo dây cáp mà không bị lọt ra ngoài?",
      analysis: "Sợi quang gồm lớp lõi (core) bằng thủy tinh siêu tinh khiết có chiết suất $n_1$ và lớp vỏ bọc (cladding) có chiết suất $n_2$ nhỏ hơn ($n_1 > n_2$). Khi góc tới $i$ lớn hơn góc giới hạn phản xạ toàn phần $i_{gh} = \\arcsin(n_2/n_1)$, toàn bộ năng lượng ánh sáng bị phản xạ quay ngược trở lại vào lõi.",
      solution: "Tia sáng laser truyền theo đường zic-zac liên tục phản xạ toàn phần $100\\%$ tại mặt phân cách lõi-vỏ, duy trì cường độ tín hiệu với độ suy hao cực thấp trên hành trình hàng nghìn km qua đáy đại dương.",
      takeaway: "Hiện tượng phản xạ toàn phần trong quang học sóng là cốt lõi công nghệ của toàn bộ mạng Internet toàn cầu, cho phép kết nối thế giới phẳng tốc độ cao."
    },
    {
      badge: "Tình huống 2 • Khí tượng",
      title: "Mô phỏng đường đi của bão nhiệt đới bằng mô hình số trị",
      scenario: "Một cơn bão mạnh đang hình thành trên biển Đông và có nguy cơ đổ bộ vào đất liền Việt Nam. Làm thế nào các chuyên gia khí tượng có thể dự báo trước đường đi và cường độ bão trước 72 giờ?",
      analysis: "Cơn bão được mô hình hóa như một xoáy thuận nhiệt đới khổng lồ tuân theo định luật bảo toàn khối lượng, phương trình chuyển động chất lưu Navier-Stokes và định luật nhiệt động lực học trong hệ quy chiếu quay có lực quán tính Coriolis.",
      solution: "Dữ liệu đo đạc thực tế từ vệ tinh viễn thám, radar thời tiết và phao tiêu biển được nạp vào siêu máy tính để giải hệ phương trình vi phân đạo hàm riêng, đưa ra các kịch bản dự báo đường đi với độ tin cậy cao giúp chính quyền chủ động sơ tán người dân.",
      takeaway: "Dự báo thời tiết hiện đại là minh chứng sống động của việc áp dụng toàn diện các định luật cơ học chất lưu và nhiệt động lực học vật lí để bảo vệ tính mạng con người."
    }
  ],
  "4": [
    {
      badge: "Tình huống 1 • Định hướng",
      title: "Xác định hướng Bắc ban đêm khi bị lạc trên biển bằng chòm Gấu Lớn",
      scenario: "Một nhóm ngư dân gặp sự cố hỏng la bàn từ tính và thiết bị GPS vào ban đêm trên biển khơi nhiều mây nhẹ ở phương Bắc. Họ cần xác định hướng Bắc để lái tàu trở về đất liền.",
      analysis: "Trên bầu trời bán cầu Bắc, Sao Bắc Cực (Polaris) nằm gần như bất biến tại cực Bắc thiên cầu, là ngọn hải đăng vũ trụ định hướng. Chòm Gấu Lớn gồm 7 sao sáng hình chiếc gầu sòng rất dễ nhận diện bằng mắt thường.",
      solution: "Tìm cụm 7 ngôi sao chiếc gầu sòng. Nhìn vào hai ngôi sao ở vành ngoài miệng gầu (sao Merak và Dubhe), tưởng tượng một đường thẳng nối từ đáy qua miệng gầu và kéo dài ra phía ngoài 5 lần khoảng cách giữa chúng. Ngôi sao sáng dừng lại chính là Sao Bắc Cực. Hướng thẳng về ngôi sao đó là hướng Bắc.",
      takeaway: "Kĩ năng thiên văn quan sát chòm sao là phương pháp định vị sinh tồn vô giá cho người đi biển và thám hiểm khi các công nghệ điện tử bị tê liệt."
    },
    {
      badge: "Tình huống 2 • Mùa đông",
      title: "Định vị phương hướng bằng chòm Thiên Hậu khi Gấu Lớn ở thấp",
      scenario: "Vào những đêm cuối thu và đầu đông tại Việt Nam, chòm Gấu Lớn thường nằm rất sát hoặc chìm dưới đường chân trời phía Bắc, bị núi che khuất. Làm thế nào để tìm hướng Bắc?",
      analysis: "Chòm sao Thiên Hậu (Cassiopeia) nằm ở phía đối diện với chòm Gấu Lớn qua Sao Bắc Cực, luôn ở trên cao trong suốt các đêm mùa đông và có hình dạng chữ W rất đặc trưng.",
      solution: "Nhận dạng 5 ngôi sao hình chữ W. Từ đoạn thẳng nối hai sao ở cạnh mở của chữ W, dựng một đường thẳng vuông góc và kéo dài khoảng 7 lần khoảng cách đó, ta gặp ngay Sao Bắc Cực. Từ đó xác định chính xác 4 phương vị địa lí.",
      takeaway: "Bầu trời đêm chuyển động tuần hoàn theo mùa, việc nắm vững cả hai chòm sao Gấu Lớn và Thiên Hậu giúp người quan sát luôn tìm thấy phương hướng trong mọi thời điểm của năm."
    }
  ],
  "5": [
    {
      badge: "Tình huống 1 • Nắng nóng",
      title: "Giải thích sự chênh lệch thời gian chiếu sáng giữa mùa hạ và mùa đông",
      scenario: "Ở các tỉnh miền Bắc Việt Nam, vào tháng 6 (mùa hè) trời sáng từ rất sớm (5h sáng) và đến 19h tối trời vẫn còn sáng ('Đêm tháng năm chưa nằm đã sáng'). Ngược lại vào tháng 12 thì ngày rất ngắn.",
      analysis: "Trục tự quay của Trái Đất nghiêng một góc $23{,}5^\\circ$ so với pháp tuyến của mặt phẳng quỹ đạo quanh Mặt Trời và không đổi phương trong không gian. Vào mùa hè, bán cầu Bắc ngả về phía Mặt Trời, quỹ đạo biểu kiến của Mặt Trời trên bầu trời kéo dài và lên cao đỉnh đầu.",
      solution: "Mặt Trời mọc sớm ở hướng Đông Bắc và lặn muộn ở hướng Tây Bắc, tạo ra thời gian chiếu sáng trong ngày lên tới hơn 13 giờ (mùa hạ). Ngược lại vào mùa đông, bán cầu Bắc ngả ra xa Mặt Trời, thời gian chiếu sáng chỉ khoảng 10-11 giờ.",
      takeaway: "Hiện tượng 4 mùa và độ dài ngày đêm biến đổi hoàn toàn xuất phát từ sự kết hợp giữa độ nghiêng trục tự quay của Trái Đất và chuyển động tịnh tiến quanh Mặt Trời."
    },
    {
      badge: "Tình huống 2 • Khảo cổ thiên văn",
      title: "Bác bỏ thuyết Địa tâm nhờ hiện tượng chuyển động nghịch hành của Hỏa tinh",
      scenario: "Khi quan sát Hỏa tinh (sao Hỏa) trên nền các vì sao qua nhiều tháng, các nhà thiên văn cổ đại nhận thấy Hỏa tinh đang đi thẳng bỗng dừng lại, đi giật lùi (nghịch hành), rồi lại đi tiếp. Thuyết địa tâm giải thích rất phức tạp bằng các ngoại luân kỳ dị.",
      analysis: "Trong mô hình nhật tâm Copernic, cả Trái Đất và Hỏa tinh đều quay quanh Mặt Trời theo quỹ đạo riêng. Vì Trái Đất ở gần Mặt Trời hơn nên có tốc độ dài lớn hơn ($29{,}8\\text{ km/s}$) so với Hỏa tinh ($24{,}1\\text{ km/s}$).",
      solution: "Khi Trái Đất đi ngang qua và 'vượt mặt' Hỏa tinh trên quỹ đạo, dưới góc nhìn hình chiếu từ Trái Đất lên nền các chòm sao xa, Hỏa tinh dường như chuyển động giật lùi tạo thành một vòng thắt nút biểu kiến. Mô hình nhật tâm giải thích hiện tượng này một cách thanh thoát và chuẩn xác.",
      takeaway: "Chuyển động nghịch hành của các hành tinh ngoài là đòn bẩy khoa học quyết định chứng minh Trái Đất chỉ là một hành tinh di động quanh Mặt Trời chứ không phải trung tâm vũ trụ."
    }
  ],
  "6": [
    {
      badge: "Tình huống 1 • Bảo vệ mắt",
      title: "An toàn quang học khi quan sát hiện tượng Nhật thực",
      scenario: "Sắp diễn ra hiện tượng nhật thực một phần tại địa phương. Nhiều học sinh dự định dùng kính râm thông thường hoặc nhìn trực tiếp bằng mắt thường để ngắm Mặt Trời.",
      analysis: "Kính râm thông thường chỉ giảm cường độ ánh sáng nhìn thấy nhưng không ngăn được bức xạ tử ngoại (UV) và hồng ngoại (IR). Khi ánh sáng nhìn thấy giảm, đồng tử mắt tự động mở to hơn, khiến tia UV và IR năng lượng cao lọt sâu vào hội tụ đốt cháy tế bào võng mạc gây mù lòa vĩnh viễn không thể phục hồi.",
      solution: "Chỉ được quan sát nhật thực qua kính lọc chuyên dụng đạt tiêu chuẩn ISO 12312-2 hoặc kính thợ hàn số 14, hoặc dùng phương pháp gián tiếp: chiếu ảnh Mặt Trời qua lỗ kim (pinhole projection) lên một tờ giấy trắng.",
      takeaway: "Hiểu biết vật lí quang học giúp chúng ta chiêm ngưỡng vẻ đẹp kì vĩ của các hiện tượng thiên văn vũ trụ một cách an toàn tuyệt đối cho đôi mắt."
    },
    {
      badge: "Tình huống 2 • Thủy triều & Cảng biển",
      title: "Lợi dụng triều cường để tàu hàng trọng tải lớn cập cảng",
      scenario: "Một tàu chở hàng container mớn nước sâu 11 m cần đi qua luồng hàng hải vào cảng sông, trong khi độ sâu đáy luồng lúc bình thường chỉ đạt 9 m.",
      analysis: "Biên độ thủy triều tại vùng cửa sông dao động theo chu kì tuần trăng. Vào các ngày triều cường (mùng 1 và 15 âm lịch), mực nước dâng cao hơn mức nước trung bình từ 2 đến 3 mét.",
      solution: "Cảng vụ hàng hải lên lịch điều độ cho tàu di chuyển vào luồng chính xác vào đỉnh triều cường lúc con nước lớn nhất. Độ sâu luồng khi đó đạt $9 + 2{,}5 = 11{,}5\\text{ m}$, đảm bảo tàu đi qua an toàn mà không bị mắc cạn.",
      takeaway: "Quy luật thủy triều thiên văn do tương tác hấp dẫn Mặt Trăng - Mặt Trời được ứng dụng chặt chẽ trong logistics hàng hải và phòng chống ngập úng đô thị ven biển."
    }
  ],
  "7": [
    {
      badge: "Tình huống 1 • Đô thị",
      title: "Hiệu ứng đảo nhiệt đô thị và giải pháp cách nhiệt xanh",
      scenario: "Vào mùa hè, nhiệt độ đo được tại trung tâm thành phố lớn luôn cao hơn các vùng nông thôn ngoại thành từ 3 đến 5 độ C, gây ngột ngạt và gia tăng tiêu thụ điện điều hòa.",
      analysis: "Bề mặt bê tông, đường nhựa có hệ số hấp thụ nhiệt bức xạ Mặt Trời rất lớn vào ban ngày và tỏa nhiệt chậm vào ban đêm. Kết hợp với khí thải giao thông và dàn nóng máy lạnh tạo thành 'đảo nhiệt đô thị'.",
      solution: "Tăng cường độ che phủ của cây xanh, hồ nước điều hòa (tận dụng nhiệt hóa hơi của nước để làm mát tự nhiên), sử dụng vật liệu sơn phản xạ nhiệt Mặt Trời (Cool Roof) và kính hộp cách nhiệt Low-E cho các tòa nhà cao tầng.",
      takeaway: "Áp dụng định luật truyền nhiệt và bức xạ nhiệt giúp các kĩ sư quy hoạch đô thị giảm thiểu đảo nhiệt và tiết kiệm hàng triệu kilowatt-giờ điện năng mỗi mùa hè."
    },
    {
      badge: "Tình huống 2 • Kinh tế tuần hoàn",
      title: "Ứng dụng vật lí trong phân loại rác thải tái chế tự động",
      scenario: "Một nhà máy xử lí rác thải cần phân loại tự động hàng trăm tấn rác mỗi ngày gồm sắt thép, nhôm, nhựa và thủy tinh để tái chế.",
      analysis: "Mỗi loại vật liệu sở hữu tính chất vật lí khác biệt rõ rệt: Sắt là chất sắt từ bị nam châm hút; nhôm là kim loại dẫn điện sinh dòng điện xoáy Foucault khi qua từ trường biến thiên; nhựa và thủy tinh có khối lượng riêng và độ truyền quang khác nhau.",
      solution: "Băng chuyền sử dụng: (1) Nam châm điện cực mạnh hút tách sắt thép; (2) Máy phân tách dòng xoáy Eddy current làm nhôm bị đẩy văng ra xa; (3) Cảm biến quang học quang phổ hồng ngoại nhận diện và thổi khí nén phân loại chai nhựa PET.",
      takeaway: "Các định luật điện từ học và quang học là vũ khí công nghệ cốt lõi giúp tự động hóa quá trình tái chế rác thải, thúc đẩy nền kinh tế tuần hoàn bền vững."
    }
  ],
  "8": [
    {
      badge: "Tình huống 1 • Gia đình",
      title: "Tối ưu hóa vị trí lắp đặt máy điều hòa không khí trong gia đình",
      scenario: "Gia đình lắp đặt máy điều hòa nhưng phòng rất lâu mát, hóa đơn tiền điện tăng vọt, trong khi dàn nóng đặt ở nơi bí gió ngoài ban công hướng Tây.",
      analysis: "Theo định luật II nhiệt động lực học, dàn nóng điều hòa phải thải nhiệt lượng $Q_H = Q_L + A$ ra môi trường. Nếu dàn nóng bị nắng chiếu trực tiếp hoặc bí gió, nhiệt độ tản nhiệt tăng cao, máy nén phải hoạt động quá tải với hiệu năng COP suy giảm nghiêm trọng.",
      solution: "Di dời dàn nóng sang vị trí râm mát, thông thoáng gió; lắp đặt dàn lạnh ở độ cao khoảng 2,2 - 2,5 m để tạo đối lưu không khí lạnh tự nhiên (khí lạnh chìm xuống); dán phim cách nhiệt cho cửa sổ kính hướng Tây.",
      takeaway: "Hiểu rõ cơ chế truyền nhiệt và chu trình nhiệt động của máy lạnh giúp nâng cao tuổi thọ thiết bị và tiết kiệm đáng kể chi phí tiền điện hàng tháng."
    },
    {
      badge: "Tình huống 2 • Giao thông",
      title: "Ảnh hưởng của áp suất lốp xe đến tiêu hao nhiên liệu",
      scenario: "Một tài xế lái xe tải đường dài nhận thấy mức tiêu thụ dầu diesel của xe tăng thêm gần $10\\%$ so với thông số thiết kế mặc dù chở đúng tải trọng.",
      analysis: "Khi lốp xe bị non hơi (thiếu áp suất $20\\%$), diện tích tiếp xúc giữa lốp và mặt đường tăng lên, làm biến dạng lốp liên tục và sinh công ma sát cản lăn $F_{cl} = f \\cdot N$ rất lớn.",
      solution: "Dùng đồng hồ đo áp suất định kì và bơm lốp đúng áp suất tiêu chuẩn khuyến nghị của nhà sản xuất (ví dụ 2,3 - 2,5 bar). Khi lốp đủ căng, lực cản lăn giảm tối đa, giúp xe chạy lướt và tiết kiệm ngay $5 - 10\\%$ nhiên liệu.",
      takeaway: "Vật lí về lực cản ma sát lăn chứng minh rằng một thao tác bảo dưỡng đơn giản như duy trì áp suất lốp chuẩn mang lại lợi ích kinh tế và môi trường rất lớn."
    }
  ],
  "9": [
    {
      badge: "Tình huống 1 • Công nghiệp",
      title: "Xử lí khí thải $SO_2$ trong nhà máy nhiệt điện bằng tháp hấp thụ đá vôi",
      scenario: "Một nhà máy nhiệt điện đốt than phát thải lượng lớn khí $SO_2$, nếu xả thẳng ra khí quyển sẽ hòa tan vào nước mưa gây ra mưa acid hủy diệt cây cối xung quanh.",
      analysis: "Khí $SO_2$ là oxit axit, có thể phản ứng với dung dịch kiềm hoặc huyền phù đá vôi ($CaCO_3$) tạo thành muối thạch cao không tan $CaSO_4 \\cdot 2H_2O$.",
      solution: "Lắp đặt hệ thống khử lưu huỳnh FGD (Flue Gas Desulfurization): Khí thải được dẫn qua tháp phun sương dung dịch đá vôi mịn, $SO_2$ bị giữ lại $98\\%$ tạo thành thạch cao thương phẩm làm vật liệu xây dựng, nước mưa xung quanh duy trì $pH > 6{,}0$.",
      takeaway: "Công nghệ kĩ thuật hóa - lí cho phép chuyển hóa các chất ô nhiễm nguy hiểm thành phụ phẩm có giá trị kinh tế, bảo vệ môi trường sống cho cộng đồng."
    },
    {
      badge: "Tình huống 2 • Quốc tế",
      title: "Sự phục hồi của tầng ozone nhờ Nghị định thư Montreal",
      scenario: "Vào thập niên 1980, các nhà khoa học phát hiện một lỗ thủng ozone khổng lồ xuất hiện trên bầu trời Nam Cực, làm gia tăng nguy cơ ung thư da và đục thủy tinh thể trên toàn cầu.",
      analysis: "Các hợp chất nhân tạo CFC (Freon) cực kì bền vững, khi bay lên tầng bình lưu bị tia tử ngoại bẻ gãy giải phóng nguyên tử clo tự do ($Cl^\\bullet$). Mỗi nguyên tử clo có thể xúc tác phá hủy tới 100.000 phân tử ozone ($O_3$) theo phản ứng dây chuyền.",
      solution: "Năm 1987, các quốc gia trên thế giới đã kí kết Nghị định thư Montreal, cấm hoàn toàn sản xuất và sử dụng chất CFC, chuyển sang dùng các chất làm lạnh thế hệ mới HFC và môi chất tự nhiên ($CO_2, R600a$). Nhờ đó tầng ozone đang dần hồi phục.",
      takeaway: "Nghị định thư Montreal là minh chứng thành công rực rỡ nhất trong lịch sử khi khoa học vật lí cảnh báo nguy cơ và cả nhân loại đồng lòng hành động bảo vệ hành tinh xanh."
    }
  ],
  "10": [
    {
      badge: "Tình huống 1 • Năng lượng xanh",
      title: "Khảo sát và lựa chọn vị trí lắp đặt trang trại điện gió ngoài khơi",
      scenario: "Một tập đoàn năng lượng khảo sát đầu tư dự án điện gió tại vùng biển Nam Trung Bộ Việt Nam. Vì sao turbine gió ngoài khơi (Offshore wind) lại được ưu tiên phát triển mặc dù chi phí thi công móng dưới biển đắt đỏ?",
      analysis: "Công suất phát của turbine gió tỉ lệ thuận với lập phương vận tốc gió: $P = \\frac{1}{2} \\rho A v^3 C_p$ (vận tốc gió tăng gấp đôi thì công suất điện sinh ra tăng gấp 8 lần).",
      solution: "Vùng biển ngoài khơi không có vật cản địa hình nên tốc độ gió lớn hơn trên đất liền từ 20 đến $30\\%$, luồng gió thổi ổn định cả ngày lẫn đêm, không chiếm dụng đất canh tác và không gây ô nhiễm tiếng ồn cho khu dân cư.",
      takeaway: "Quy luật vật lí công suất gió phụ thuộc bậc 3 vào vận tốc giải thích vì sao điện gió ngoài khơi đang trở thành xu hướng công nghệ năng lượng tái tạo hàng đầu của thế giới."
    },
    {
      badge: "Tình huống 2 • Dự án STEM",
      title: "Tối ưu hóa góc đón gió của cánh quạt trong mô hình máy phát điện gió",
      scenario: "Trong cuộc thi STEM chế tạo mô hình turbine điện gió, nhóm học sinh nhận thấy khi để cánh quạt phẳng vuông góc với hướng gió thì turbine không hề quay mặc dù gió thổi rất mạnh.",
      analysis: "Để tạo mô-men lực quay trục, luồng gió qua cánh quạt phải sinh ra lực nâng khí động học $F_L$ theo nguyên lí Bernoulli. Nếu cánh quạt phẳng vuông góc, luồng gió chỉ tạo lực cản thuần túy đẩy lùi cánh quạt mà không sinh ra lực tiếp tuyến làm quay trục.",
      solution: "Nhóm uốn cánh quạt nghiêng một góc đón gió $\\alpha \\approx 15^\\circ - 20^\\circ$ so với mặt phẳng quay và tạo độ cong biên dạng khí động học (airfoil). Kết quả turbine quay tít ở tốc độ gió nhẹ và phát điện thắp sáng rực rỡ 5 bóng đèn LED.",
      takeaway: "Hiểu biết về cơ học chất lưu và lực nâng khí động học là chìa khóa để biến đổi hiệu quả động năng của luồng gió tự nhiên thành cơ năng hữu ích."
    }
  ]
};

const outputPath = path.join(__dirname, 'cd_vatly10_cases.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(practicalCases, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/cd_vatly10_cases.js with 20 cases across 10 lessons.');
