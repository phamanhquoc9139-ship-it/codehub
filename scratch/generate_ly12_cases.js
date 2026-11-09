const fs = require('fs');

const casesData = {
  1: [
    {
      title: "Tình huống 1: Lựa chọn thông số tụ điện khi thay thế trong bộ nguồn dân dụng 220V",
      context: "Một kĩ thuật viên sửa chữa bo mạch máy giặt cần thay một tụ điện chống sét lan truyền và lọc nhiễu mắc trực tiếp vào hai dây nguồn lưới điện dân dụng 220V AC. Kĩ thuật viên băn khoăn liệu có thể dùng tụ điện ghi điện áp định mức 250V DC có sẵn trong hộp đồ nghề hay không?",
      analysis: "Điện áp hiệu dụng của lưới điện là U = 220V, nhưng điện áp cực đại (đỉnh) là U₀ = U√2 = 220 × 1,414 ≈ 311V. Vào các thời điểm sụt áp hoặc dao động lưới, điện áp đỉnh có thể vọt lên 330V–350V. Nếu dùng tụ có điện áp đánh thủng 250V DC thì tụ sẽ bị đánh thủng điện môi ngay lập tức và phát nổ khi cắm điện.",
      solution: "Bắt buộc phải chọn loại tụ điện xoay chiều chuyên dụng (thường là tụ màng X2 chống nhiễu) có điện áp định mức tối thiểu là 275V AC hoặc tụ chịu điện áp một chiều tối thiểu 400V–450V DC để đảm bảo khoảng cách an toàn điện môi."
    },
    {
      title: "Tình huống 2: Đọc sai tần số trên dao động kí do chọn nhầm thang đo thời gian",
      context: "Trong bài thực hành đo tần số máy phát âm tần, một nhóm học sinh điều chỉnh núm Time/Div về nấc 0,2 ms/div và đếm được một chu kì sóng sin chiếm đúng 5 ô ngang. Một bạn nhanh nhảu kết luận tần số là 100 Hz, bạn khác lại tính ra 1000 Hz.",
      analysis: "Chu kì T = (Số ô) × (Time/Div) = 5 div × 0,2 ms/div = 1,0 ms = 1,0 × 10⁻³ s. Tần số f = 1/T = 1 / (1,0 × 10⁻³) = 1000 Hz = 1 kHz. Bạn tính ra 100 Hz đã quên đổi đơn vị miligiây (ms) sang giây (s) khi bấm máy tính.",
      solution: "Quy tắc thực hành đo lường: Luôn đổi các tiền tố đo thời gian (ms = 10⁻³ s, μs = 10⁻⁶ s) sang đơn vị chuẩn SI (giây) trước khi thực hiện phép chia f = 1/T."
    }
  ],

  2: [
    {
      title: "Tình huống 1: Khắc phục hiện tượng tụt áp và tăng hệ số công suất cos φ trong xưởng sản xuất",
      context: "Một xưởng cơ khí lắp đặt 15 máy tiện và máy phay sử dụng động cơ điện không đồng bộ ba pha. Khi hoạt động đồng loạt, chỉ số đồng hồ đo cos φ tại tủ điện chỉ đạt 0,65 và xưởng bị điện lực phạt tiền phản kháng (mua công suất phản kháng vô công).",
      analysis: "Động cơ điện có nhiều cuộn dây quấn nên mạch điện có tính cảm kháng rất lớn (Z_L ≫ Z_C). Điều này làm dòng điện trễ pha nhiều so với điện áp, hệ số công suất cos φ = R/Z giảm thấp, dòng điện I = P / (U cos φ) chạy trong dây dẫn tăng vọt gây nóng dây cáp và hao phí điện năng.",
      solution: "Lắp đặt dàn tụ bù công suất phản kháng (mắc song song với hệ thống tải). Dung kháng Z_C của dàn tụ điện sẽ sinh ra công suất phản kháng dung kháng triệt tiêu phần cảm kháng của động cơ, đưa cos φ lên trên 0,92–0,95, giúp xưởng tránh bị phạt và tiết kiệm điện."
    },
    {
      title: "Tình huống 2: Thiết kế mạch lọc chọn kênh Radio AM 680 kHz",
      context: "Một câu lạc bộ STEM muốn chế tạo đài Radio thu sóng phát thanh AM của Đài Tiếng nói Việt Nam phát ở tần số f = 680 kHz. Trong tay nhóm có cuộn cảm thuần có độ tự cảm L = 250 μH. Cần tính toán điện dung của tụ xoay để bắt chuẩn đài.",
      analysis: "Để máy thu bắt được tín hiệu của đài phát, mạch dao động LC phải xảy ra hiện tượng cộng hưởng điện ở đúng tần số sóng: f = 1 / [2π √(LC)] ⇒ C = 1 / [4π² f² L]. Thay số: f = 680 × 10³ Hz, L = 250 × 10⁻⁶ H ⇒ C ≈ 2,19 × 10⁻¹⁰ F = 219 pF.",
      solution: "Chọn một tụ xoay có dải biến thiên từ 50 pF đến 300 pF. Khi xoay núm vặn điều chỉnh tụ đến giá trị 219 pF, biên độ dòng điện tín hiệu đài 680 kHz đạt cực đại và âm thanh phát ra loa rõ nét nhất."
    }
  ],

  3: [
    {
      title: "Tình huống 1: Lí giải vì sao đường dây Bắc – Nam 500 kV giảm hàng triệu lần tổn hao truyền tải",
      context: "Năm 1994, Việt Nam khánh thành đường dây siêu cao áp 500 kV Bắc – Nam dài gần 1500 km đưa điện từ Nhà máy Thủy điện Hòa Bình vào miền Nam. Tại sao không truyền tải trực tiếp ở điện áp phát của máy phát điện (khoảng 15,75 kV) mà phải dùng trạm biến áp nâng lên 500 kV?",
      analysis: "Hao phí trên đường dây truyền tải tính theo công thức: ΔP = (P² / U²) × R. Nếu truyền tải ở 15,75 kV so với 500 kV, điện áp đã được tăng lên gấp 500 / 15,75 ≈ 31,75 lần. Hao phí tỏa nhiệt trên đường dây giảm đi (31,75)² ≈ 1008 lần. Nếu so với điện áp trung thế 10 kV thì hao phí giảm tới 2500 lần.",
      solution: "Tăng điện áp bằng máy biến áp bước sóng cao áp là biện pháp kinh tế tối thượng: Cho phép dùng dây dẫn tiết diện vừa phải, giảm khối lượng treo trên cột thép và tránh sụt áp nghiêm trọng khi truyền đi hàng ngàn cây số."
    },
    {
      title: "Tình huống 2: Sự cố máy biến áp bị bốc khói do cắm nhầm nguồn điện một chiều (Ắc quy)",
      context: "Một bạn học sinh muốn hạ điện áp bình ắc quy 12V DC xuống 3V DC để thắp đèn LED, đã lấy một biến áp hạ áp 220V/24V cắm cuộn sơ cấp vào hai cực của bình ắc quy 12V. Sau 30 giây cuộn dây bốc khói khét lẹt và ắc quy nóng rực.",
      analysis: "Máy biến áp chỉ hoạt động với dòng điện xoay chiều AC (từ thông phải biến thiên thì mới sinh suất điện động cảm ứng e = −dΦ/dt). Dòng điện một chiều DC không làm biến thiên từ thông (dΦ/dt = 0) nên ở cuộn thứ cấp hoàn toàn không có điện áp.",
      solution: "Nguy hiểm hơn, với dòng một chiều, cuộn sơ cấp không có cảm kháng (Z_L = 0), tổng trở chỉ là điện trở thuần rất nhỏ của dây đồng (R ≈ 0,5 Ω). Dòng điện chạy qua cuộn sơ cấp I = U/R = 12 / 0,5 = 24 A (vượt quá nhiều lần dòng định mức 0,2A), gây chập cháy tức khắc."
    }
  ],

  4: [
    {
      title: "Tình huống 1: Tiếng ù xì 100 Hz trong loa âm li tự chế và cách xử lí bằng tụ lọc",
      context: "Một bạn tự ráp mạch khuếch đại âm thanh (Amplifier) dùng nguồn điện 220V xoay chiều qua biến áp hạ áp và cầu 4 diode. Khi cắm điện dù chưa phát nhạc, loa vẫn phát ra tiếng ù rền trầm rất khó chịu.",
      analysis: "Sau khi qua mạch chỉnh lưu cầu 4 diode, điện áp ra là các xung bán kì dương đập mạch liên tục với tần số gợn sóng gấp đôi tần số nguồn: f = 2 × 50 Hz = 100 Hz. Nếu không có tụ điện lọc nguồn đủ lớn, điện áp cấp cho IC khuếch đại bị nhấp nhô theo nhịp 100 Hz, xâm nhập vào đường tín hiệu âm thanh và khuếch đại ra loa tạo tiếng ù nền.",
      solution: "Mắc bổ sung hai tụ hóa điện dung lớn (khoảng 4700 μF đến 10.000 μF chịu điện áp 35V–50V) song song với đầu ra cầu diode kết hợp tụ gốm 100 nF khử nhiễu cao tần. Tụ sẽ phóng nạp san phẳng hoàn toàn gợn sóng 100 Hz, tiếng ù biến mất."
    },
    {
      title: "Tình huống 2: Kiểm tra tình trạng sống/chết của Diode cầu bằng đồng hồ vạn năng DMM",
      context: "Bộ nguồn máy tính (PSU) bị nổ cầu chì bảo vệ đầu vào. Kĩ thuật viên nghi ngờ 1 trong 4 diode của khối cầu chỉnh lưu bị đánh thủng ngắn mạch (chập).",
      analysis: "Khi diode còn tốt, nó chỉ dẫn một chiều: Đo chiều thuận (que đỏ vào Anode, que đen vào Cathode) đồng hồ báo sụt áp khoảng 0,5V–0,7V. Đo chiều ngược (que đỏ vào Cathode, que đen vào Anode) đồng hồ báo vô cùng 'OL'. Nếu diode bị đánh thủng ngắn mạch, đồng hồ sẽ kêu 'bíp' liên tục ở cả hai chiều đo với điện trở bằng 0 Ω.",
      solution: "Bật DMM về thang đo diode (có kí hiệu tam giác gạch đứng). Lần lượt đo từng diode trong cầu; nếu phát hiện bất kì diode nào thông mạch cả 2 chiều thì phải thay thế ngay linh kiện mới trước khi lắp cầu chì mới."
    }
  ],

  5: [
    {
      title: "Tình huống 1: Tại sao nhân viên chụp X-quang phải ra khỏi phòng và đứng sau vách kính chì?",
      context: "Khi người nhà đưa bệnh nhân vào chụp X-quang gãy tay, kĩ thuật viên yêu cầu người nhà ra ngoài, bản thân kĩ thuật viên cũng bước vào phòng điều khiển có vách ngăn gắn ô kính sẫm màu để bấm máy.",
      analysis: "Bệnh nhân chỉ chụp 1 lần nên liều hấp thụ rất nhỏ, không đáng kể. Tuy nhiên, kĩ thuật viên thực hiện 50–100 ca chụp mỗi ngày; nếu đứng trong phòng, tia X tán xạ từ cơ thể bệnh nhân và sàn phòng sẽ tích lũy liều sinh học hàng ngày, dẫn đến nguy cơ đột biến tế bào tủy xương, suy giảm bạch cầu hoặc ung thư máu.",
      solution: "Vách ngăn được bọc lớp chì tấm dày 1,5–2 mm, và ô kính nhìn là kính thủy tinh pha chì (Lead Glass) trong suốt nhưng hấp thụ hoàn toàn tia X tán xạ, bảo vệ an toàn sức khỏe nghề nghiệp theo tiêu chuẩn quốc tế."
    },
    {
      title: "Tình huống 2: Giải thích bóng mờ dị vật kim loại trên phim chụp X-quang phổi",
      context: "Một bệnh nhân chụp X-quang tim phổi thẳng, trên phim bác sĩ phát hiện một vùng cản quang màu trắng sáng hình bầu dục ngay giữa ngực. Sau khi hỏi bệnh sử, hóa ra bệnh nhân quên tháo dây chuyền mặt vàng khi chụp.",
      analysis: "Vàng (Au) và các kim loại có khối lượng nguyên tử rất lớn (Z_Au = 79) và mật độ phân tử cực cao. Hệ số suy giảm tia X của kim loại cao gấp hàng trăm lần xương và hàng ngàn lần mô mềm phổi. Do đó, toàn bộ chùm tia X chiếu qua mặt dây chuyền bị cản lại 100%, không hạt tia X nào đến được tấm cảm biến, để lại bóng trắng xóa trên phim.",
      solution: "Quy tắc chuẩn bị trước khi chụp X-quang: Bệnh nhân bắt buộc phải tháo toàn bộ trang sức kim loại, kẹp tóc, cởi áo có cúc kim loại hoặc gọng áo ngực để tránh tạo ảnh giả che lấp tổn thương giải phẫu."
    }
  ],

  6: [
    {
      title: "Tình huống 1: Phân biệt chỉ định X-quang xương gãy và chụp CT sọ não trong tai nạn giao thông",
      context: "Một nạn nhân tai nạn xe máy bị ngã đập đầu xuống đường và sưng cẳng chân. Bác sĩ cấp cứu chỉ định chụp X-quang cẳng chân nhưng lại yêu cầu chụp CT Scanner sọ não ngay lập tức.",
      analysis: "Ở cẳng chân, tổn thương gãy xương lớn dễ dàng nhìn thấy trên 2 tư thế X-quang thẳng và nghiêng. Ngược lại, hộp sọ là một khối xương kín hình vòm dày; chùm tia X-quang thường bị xương sọ hấp thụ mạnh và chồng hình lên nhau, hoàn toàn không thể nhìn thấy cục máu đông tụ dưới màng cứng hay dập nhu mô não bên trong.",
      solution: "CT Scanner cắt lớp não thành hàng trăm lát cắt mỏng chỉ 1 mm, phân biệt rõ rệt mật độ giữa máu tụ (HU = 60–80) và nhu mô não (HU = 30–40), giúp bác sĩ phẫu thuật xác định chính xác vị trí mở hộp sọ cứu sống nạn nhân trong 'khung giờ vàng'."
    },
    {
      title: "Tình huống 2: Cân nhắc liều bức xạ ion hóa ở trẻ em khi chụp cắt lớp CT",
      context: "Một bé 4 tuổi bị ngã cầu thang, người nhà sốt ruột yêu cầu bác sĩ chụp CT toàn thân để 'kiểm tra cho chắc chắn từ đầu đến chân'. Bác sĩ giải thích từ chối và đề nghị theo dõi lâm sàng kết hợp siêu âm trước.",
      analysis: "Tế bào của trẻ em đang phân chia rất nhanh và nhạy cảm gấp 10 lần người lớn với tác dụng ion hóa của tia X. Một lần chụp CT bụng ở trẻ nhỏ tương đương phơi nhiễm bức xạ tự nhiên trong 3–5 năm. Nếu lạm dụng chụp toàn thân không cần thiết, nguy cơ tích lũy ung thư thứ phát trong suốt vòng đời của trẻ sẽ tăng cao.",
      solution: "Tuân thủ nguyên tắc ALARA (As Low As Reasonably Achievable): Chỉ chụp CT khi có dấu hiệu tổn thương nội tạng đe dọa tính mạng; ưu tiên các phương pháp không dùng bức xạ ion hóa như siêu âm hoặc MRI."
    }
  ],

  7: [
    {
      title: "Tình huống 1: Tại sao siêu âm không thể quan sát được cấu trúc sau xương sườn và dạ dày chứa đầy hơi?",
      context: "Một bệnh nhân đau tức vùng thượng vị, bác sĩ siêu âm gặp khó khăn khi quan sát tuyến tụy vì dạ dày bệnh nhân chứa nhiều hơi, đồng thời sóng siêu âm không nhìn xuyên qua được các cung xương sườn.",
      analysis: "Trở kháng âm của xương (Z ≈ 7,8 × 10⁶ kg/m²·s) và của không khí (Z ≈ 400 kg/m²·s) chênh lệch quá khủng khiếp so with mô mềm (Z ≈ 1,6 × 10⁶ kg/m²·s). Khi sóng âm chạm vào xương, hầu hết bị hấp thụ và phản xạ tạo nên 'bóng lưng âm' (Acoustic Shadow) đen ngòm phía sau. Khi gặp bọt khí dạ dày, 99,9% sóng âm bị phản xạ hỗn loạn tạo ảnh nhòe trắng xóa.",
      solution: "Hướng dẫn bệnh nhân uống nhiều nước lọc để làm căng dạ dày (nước dẫn truyền âm cực tốt, tạo cửa sổ âm học để nhìn tụy) hoặc chuyển sang chụp CT/MRI khi cần khảo sát cấu trúc bị xương che khuất."
    },
    {
      title: "Tình huống 2: Ứng dụng siêu âm tim Doppler phát hiện hở van hai lá",
      context: "Một người cao tuổi thường xuyên khó thở khi gắng sức. Bác sĩ tim mạch dùng máy siêu âm Doppler màu kiểm tra van hai lá và phát hiện dòng phụt màu xanh đỏ loang lổ ngược từ thất trái về nhĩ trái trong thì tâm thu.",
      analysis: "Dựa vào hiệu ứng Doppler: Tần số sóng âm phản xạ thay đổi khi hồng cầu di chuyển: Δf = 2f₀ (v/c) cos θ. Dòng máu chảy về phía đầu dò làm tăng tần số (máy quy ước màu đỏ), dòng máu chảy xa đầu dò làm giảm tần số (quy ước màu xanh).",
      solution: "Khi van hai lá đóng không kín trong lúc thất trái bóp mạnh tống máu, một dòng máu phụt ngược trở lại nhĩ trái với vận tốc rất cao (vài m/s) tạo dòng xoáy hỗn loạn hiển thị màu khảm (Mosaic) trên màn hình, giúp định lượng chính xác độ hở van tim."
    }
  ],

  8: [
    {
      title: "Tình huống 1: Tai nạn bình hút bụi sắt bị hút dính chặt vào lồng máy chụp MRI",
      context: "Tại một bệnh viện, một nhân viên lao công kéo bình hút bụi bằng kim loại sắt vào phòng chụp MRI khi phòng đang trống người. Bất ngờ chiếc bình bị giật bay khỏi tay người lao công, lao thẳng vào lòng máy nam châm với tiếng va đập kinh hoàng và kẹt cứng bên trong.",
      analysis: "Nam châm siêu dẫn của máy MRI 1,5T tạo từ trường tĩnh liên tục 24/7 (ngay cả khi tắt máy tính điều khiển). Lực từ tác dụng lên vật liệu sắt từ tỉ lệ thuận với gradient từ trường và tăng đột ngột theo lũy thừa khi lại gần tâm máy. Chiếc bình sắt trở thành một quả tên lửa với lực hút tương đương vài trăm kilogam.",
      solution: "Phải thực hiện quy trình dập từ khẩn cấp (Quench): Xả toàn bộ khí Heli lỏng ra ngoài khí quyển để triệt tiêu trạng thái siêu dẫn, tốn kém hàng trăm triệu đồng tiền nạp lại Heli. Bài học: Thiết lập cửa an toàn 4 vùng (Zone I đến Zone IV) và kiểm tra bằng cổng từ trước khi bước vào phòng Zone IV."
    },
    {
      title: "Tình huống 2: Người mang máy tạo nhịp tim bị chống chỉ định tuyệt đối chụp MRI",
      context: "Một bệnh nhân 70 tuổi bị thoái hóa đốt sống cổ chèn ép tủy nặng cần chẩn đoán hình ảnh. Khi khai thác tiền sử, bác sĩ phát hiện bệnh nhân đã đặt máy tạo nhịp tim nhân tạo (Pacemaker) dưới da ngực 2 năm trước và lập tức hủy lịch chụp MRI.",
      analysis: "Từ trường tĩnh B₀ cực mạnh có thể làm lệch vị trí điện cực máy tạo nhịp trong tim; sóng cao tần RF phát ra trong quá trình chụp sinh nhiệt cảm ứng đốt cháy đầu điện cực tiếp xúc cơ tim; từ trường gradient làm loạn nhịp máy vi xử lí, khiến máy phát nhịp sai nhịp tim tự nhiên dẫn tới rung thất tử vong.",
      solution: "Đối với người mang máy tạo nhịp thế hệ cũ, tuyệt đối không chụp MRI (chuyển sang chụp CT đa lát cắt có tiêm thuốc cản quang). Chỉ các máy tạo nhịp thế hệ mới có chứng nhận 'MRI Conditional' mới được chụp dưới sự giám sát nghiêm ngặt của kĩ sư y sinh và bác sĩ tim mạch."
    }
  ],

  9: [
    {
      title: "Tình huống 1: Tại sao chiếu đèn laser đỏ công suất lớn vào lá kẽm không gây quang điện nhưng đèn UV công suất bé lại gây quang điện?",
      context: "Trong phòng thí nghiệm, học sinh dùng một đèn laser màu đỏ có công suất phát quang cực mạnh (100 mW) chiếu thẳng vào tấm kẽm tích điện âm nhưng hai lá điện nghiệm không hề suy suyển. Khi đổi sang một bóng đèn phát tia tử ngoại UV công suất chỉ 2 mW thì hai lá điện nghiệm cụp ngay lập tức.",
      analysis: "Hiện tượng quang điện là tương tác 1-1 giữa 1 photon và 1 electron. Năng lượng của photon laser đỏ: ε_đỏ = h c / λ_đỏ ≈ 1,8 eV, nhỏ hơn nhiều công thoát của kẽm (A_Zn = 3,55 eV). Dù chùm đỏ có hàng tỉ photon tới cùng lúc, từng electron vẫn không nhận đủ năng lượng để bứt ra.",
      solution: "Ngược lại, photon tia UV có bước sóng ngắn (khoảng 254 nm) nên mang năng lượng ε_UV = 4,88 eV > A_Zn = 3,55 eV, mỗi photon va chạm giải phóng ngay 1 electron bứt ra bề mặt kẽm. Kết luận: Hiện tượng quang điện chỉ phụ thuộc vào năng lượng từng photon (tần số/bước sóng), không phụ thuộc vào công suất tổng thể của chùm sáng."
    },
    {
      title: "Tình huống 2: Ứng dụng tế bào quang điện chân không trong cảm biến âm thanh phim nhựa cổ điển",
      context: "Trong các máy chiếu phim nhựa ngày xưa, âm thanh lời thoại của diễn viên được ghi thành một vệt sáng tối (vệt quang học) chạy dọc theo rìa của dải phim ảnh. Làm thế nào máy chiếu đọc được âm thanh từ vệt sáng đó?",
      analysis: "Máy chiếu chiếu một chùm sáng hẹp xuyên qua dải âm thanh trên phim. Khi phim chạy, độ trong suốt của vệt phim biến đổi làm cường độ chùm sáng rọi vào catôt của tế bào quang điện biến thiên tương ứng.",
      solution: "Theo định luật quang điện 2, cường độ dòng quang electron I_bh sinh ra tỉ lệ thuận với cường độ sáng kích thích. Tín hiệu dòng điện xoay chiều này được đưa qua mạch tiền khuếch đại và phát ra loa, tái tạo chính xác giọng nói và âm nhạc của bộ phim."
    }
  ],

  10: [
    {
      title: "Tình huống 1: Tại sao chúng ta không quan sát thấy tính chất sóng khi ném một quả bóng tennis?",
      context: "Một bạn thắc mắc: 'Theo thuyết sóng vật chất của Louis de Broglie, mọi vật chuyển động đều có sóng liên kết. Vậy tại sao khi em ném một quả bóng tennis bay qua cửa sổ, quả bóng không bị hiện tượng nhiễu xạ như ánh sáng hay electron?'",
      analysis: "Khối lượng quả bóng tennis m ≈ 0,058 kg, vận tốc v ≈ 20 m/s. Bước sóng de Broglie của quả bóng là: λ = h / (m v) = (6,626 × 10⁻³⁴) / (0,058 × 20) ≈ 5,7 × 10⁻³⁴ m. Để xảy ra hiện tượng nhiễu xạ rõ rệt, kích thước vật cản (khe cửa sổ) phải có độ lớn xấp xỉ bước sóng λ.",
      solution: "Kích thước 10⁻³⁴ m nhỏ hơn hạt nhân nguyên tử hàng tỉ tỉ lần và không có bất kì khe hở vật chất nào trong vũ trụ đạt tới độ nhỏ đó. Do đó, đối với mọi vật thể vĩ mô, tính chất sóng hoàn toàn bị che khuất và cơ học cổ điển Newton hoàn toàn chính xác."
    },
    {
      title: "Tình huống 2: Ứng dụng kính hiển vi điện tử quét (SEM) chụp ảnh cấu trúc gai protein virus SARS-CoV-2",
      context: "Năm 2020, các nhà khoa học trên thế giới đã chụp được hình ảnh không gian 3D chi tiết từng chiếc gai protein bề mặt của virus corona SARS-CoV-2 với kích thước chỉ khoảng 100 nm (0,1 micromet).",
      analysis: "Ánh sáng nhìn thấy có bước sóng nhỏ nhất là màu tím (λ ≈ 400 nm). Theo định luật tán xạ Rayleigh, kính hiển vi quang học có giới hạn phân giải d_min ≈ λ / 2 ≈ 200 nm; mọi vật nhỏ hơn 200 nm chỉ là các đốm sáng nhòe nhiễu xạ, không thể nhìn thấy hình dáng virus.",
      solution: "Kính hiển vi điện tử gia tốc electron qua điện thế 100 kV, tạo ra chùm sóng de Broglie có bước sóng λ_e ≈ 0,0037 nm (ngắn hơn 100.000 lần ánh sáng). Chùm electron quét qua mẫu phủ một lớp màng vàng siêu mỏng, bắt tín hiệu electron thứ cấp tái tạo hình ảnh 3D sắc nét từng phân tử gai protein."
    }
  ],

  11: [
    {
      title: "Tình huống 1: Phát hiện nguyên tố Heli trên Mặt Trời trước khi tìm thấy trên Trái Đất nhờ phân tích quang phổ",
      context: "Năm 1868, nhà thiên văn Pierre Janssen quan sát nhật thực toàn phần và phân tích quang phổ của khí quyển Mặt Trời, phát hiện một vạch phát xạ màu vàng sáng rực rỡ có bước sóng 587,49 nm không trùng khớp với bất kì nguyên tố hóa học nào đã biết trên Trái Đất lúc bấy giờ.",
      analysis: "Theo thuyết lượng tử, mỗi nguyên tố hóa học có một cấu trúc mức năng lượng gián đoạn riêng biệt duy nhất, giống như 'mã vân tay' quang học. Khi electron chuyển mức năng lượng sẽ phát ra các vạch quang phổ có bước sóng hoàn toàn đặc trưng.",
      solution: "Các nhà khoa học khẳng định đây là một nguyên tố mới và đặt tên là 'Helium' (theo tên thần Mặt Trời Hy Lạp Helios). Mãi đến 27 năm sau (1895), Heli mới được tìm thấy trong khoáng sản uranium trên Trái Đất. Quang phổ học là chìa khóa thám hiểm vật chất vũ trụ."
    },
    {
      title: "Tình huống 2: Ứng dụng đèn huỳnh quang và đèn LED trong chiếu sáng tiết kiệm năng lượng",
      context: "Tại sao đèn huỳnh quang ống dài hoặc đèn LED hiện đại khi phát sáng chỉ ấm nhẹ, trong khi bóng đèn sợi đốt vonfram cũ kỹ lại tỏa nhiệt nóng rực và tiêu tốn nhiều điện năng?",
      analysis: "Đèn sợi đốt nung nóng dây tóc lên 2500°C để phát quang phổ liên tục: Hơn 90% năng lượng bị biến thành bức xạ nhiệt hồng ngoại vô ích, chỉ có dưới 10% rơi vào vùng ánh sáng nhìn thấy. Ngược lại, đèn huỳnh quang kích thích hơi thủy ngân áp suất thấp phát xạ quang phổ vạch tử ngoại 253,7 nm.",
      solution: "Lớp bột huỳnh quang bám ở thành ống hấp thụ các photon tử ngoại này và tái phát ra các vạch ánh sáng nhìn thấy pha trộn (hiện tượng phát quang). Hiệu suất chuyển đổi quang năng của đèn huỳnh quang và đèn LED cao gấp 5–10 lần bóng đèn sợi đốt."
    }
  ],

  12: [
    {
      title: "Tình huống 1: Lắp ráp mạch đèn đường tự động bật sáng khi trời tối sử dụng quang điện trở (LDR)",
      context: "Một nhóm học sinh dự thi Sáng tạo Khoa học Kĩ thuật lắp ráp mô hình đèn đường thông minh tự động bật sáng vào ban đêm và tắt khi trời sáng mà không cần người bật công tắc.",
      analysis: "Nhóm sử dụng một cảm biến quang điện trở LDR mắc nối tiếp với một biến trở tạo thành mạch phân áp cấp điện thế cho chân Base của một transistor NPN (hoặc cổng so sánh Op-Amp). Ban ngày trời sáng: Photon ánh sáng kích thích cặp electron-lỗ trống trong bán dẫn CdS làm điện trở LDR giảm xuống vài trăm ohm, sụt áp tại chân Base thấp khiến transistor ngắt điện, đèn tắt.",
      solution: "Ban đêm trời tối: Không còn ánh sáng kích thích, các electron rơi về vùng hóa trị tái hợp với lỗ trống, điện trở LDR vọt lên trên 1 MΩ. Điện thế phân áp tại chân Base tăng vọt vượt ngưỡng 0,7V mở thông transistor đóng rơ-le bật sáng bóng đèn LED đường."
    },
    {
      title: "Tình huống 2: Giải thích hiện tượng máy tính bị 'treo' khi nhiệt độ chip vi xử lý (CPU) quá nóng",
      context: "Một máy tính chơi game không được tra keo tản nhiệt định kì. Khi CPU chạy tác vụ nặng, nhiệt độ vượt quá 95°C thì máy tính lập tức bị màn hình xanh (BSOD) hoặc sập nguồn tự ngắt.",
      analysis: "CPU máy tính được chế tạo từ hàng tỉ bóng bán dẫn Silicon (MOSFET). Silicon là chất bán dẫn có vùng cấm E_g ≈ 1,1 eV. Khi nhiệt độ vượt quá giới hạn an toàn, nhiệt năng kích thích nhiệt hỗn loạn quá nhiều electron vượt vùng cấm lên vùng dẫn, tạo ra dòng rò rỉ nhiệt khổng lồ (Thermal Leakage Current) ngay cả khi cổng logic ở trạng thái khóa.",
      solution: "Dòng rò nhiệt làm sai lệch các trạng thái logic 0 và 1 của dữ liệu và đẩy công suất tỏa nhiệt tăng theo cấp số nhân dẫn tới hiện tượng trôi nhiệt phá hủy chip. Hệ thống cảm biến nhiệt độ tự ngắt bảo vệ CPU trước khi cấu trúc tinh thể bị thiêu cháy."
    }
  ]
};

fs.writeFileSync('scratch/ly12_cases.js', 'module.exports = ' + JSON.stringify(casesData, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/ly12_cases.js with 24 practical cases!');
