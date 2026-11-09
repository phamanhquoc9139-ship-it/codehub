module.exports = {
  "1": [
    {
      "badge": "Vệ tinh viễn thông",
      "title": "Tình huống 1: Tính toán độ cao quỹ đạo của vệ tinh địa tĩnh Vinasat",
      "scenario": "Vệ tinh viễn thông quốc gia Vinasat-1 của Việt Nam cần đứng yên đối với một đài mặt đất tại Hà Nội để các chảo thu truyền hình không phải quay chuyển hướng theo dõi. Kĩ sư cần xác định độ cao bay chính xác của vệ tinh.",
      "analysis": "Để vệ tinh đứng yên so với mặt đất, chu kì quay của nó phải đúng bằng chu kì tự quay của Trái Đất ($T = 86.164\\text{ s} \\approx 23\\text{h }56\\text{m }4\\text{s}$) và quỹ đạo phải nằm trong mặt phẳng xích đạo. Lực hấp dẫn đóng vai trò lực hướng tâm: $G \\frac{M m}{r^3} r = m \\left(\\frac{2\\pi}{T}\\right)^2 r \\implies r = \\sqrt[3]{\\frac{GM T^2}{4\\pi^2}}$. Với $M = 5{,}97 \\times 10^{24}\\text{ kg}$, $G = 6{,}67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$, ta tính được bán kính quỹ đạo $r \\approx 42.164\\text{ km}$.",
      "solution": "Độ cao vệ tinh so với bề mặt xích đạo Trái Đất ($R = 6378\\text{ km}$): $$h = r - R = 42.164 - 6.378 = 35.786\\text{ km}$$ Vệ tinh Vinasat-1 được phóng lên vị trí kinh độ $132^\\circ\\text{E}$ trên quỹ đạo GEO ở độ cao đúng $35.786\\text{ km}$.",
      "takeaway": "Chỉ có duy nhất một độ cao $35.786\\text{ km}$ trên mặt phẳng xích đạo thỏa mãn điều kiện địa tĩnh; mọi vệ tinh địa tĩnh toàn cầu đều phải chia sẻ dải quỹ đạo quý giá này."
    },
    {
      "badge": "Y học vũ trụ",
      "title": "Tình huống 2: Hiện tượng teo cơ và loãng xương của phi hành gia trên trạm ISS",
      "scenario": "Các phi hành gia sống và làm việc trên Trạm Vũ trụ Quốc tế ISS ở độ cao $400\\text{ km}$ lơ lửng bồng bềnh trong khoang tàu. Nhiều người nhầm tưởng rằng tại đây Trái Đất không còn hút vật thể nữa.",
      "analysis": "Tại độ cao $h = 400\\text{ km}$, gia tốc trọng trường vẫn còn rất lớn: $g = g_0 \\left(\\frac{R}{R+h}\\right)^2 = 9{,}81 \\times \\left(\\frac{6371}{6771}\\right)^2 \\approx 8{,}68\\text{ m/s}^2$ (vẫn bằng gần $89\\%$ trọng lực tại mặt đất!). Trọng lực hoàn toàn không hề mất đi. Phi hành gia cảm thấy \"không trọng lượng\" là do cả trạm ISS và phi hành gia đều đang cùng rơi tự do quanh Trái Đất với gia tốc hướng tâm đúng bằng $g$.",
      "solution": "Do không có phản lực sàn ép lên cơ thể ($N = 0$), hệ cơ xương không phải chịu tải trọng nâng đỡ cơ thể mỗi ngày dẫn đến thoái hóa cơ bắp và mất mật độ canxi xương. Các phi hành gia bắt buộc phải tập thể dục cưỡng bức ít nhất 2 giờ mỗi ngày bằng máy chạy bộ có dây chun chằng néo ép người xuống sàn.",
      "takeaway": "Không trọng lượng trong quỹ đạo là trạng thái mất trọng lượng biểu kiến do rơi tự do liên tục, không phải là do biến mất lực hấp dẫn của Trái Đất."
    }
  ],
  "2": [
    {
      "badge": "Thám hiểm vũ trụ",
      "title": "Tình huống 1: Xác định điểm cân bằng lực hấp dẫn trên hành trình Apollo lên Mặt Trăng",
      "scenario": "Khi tàu đổ bộ Mặt Trăng Apollo bay từ Trái Đất lên Mặt Trăng, động cơ chỉ đốt một thời gian ngắn rồi tắt để tàu bay theo quán tính. Các nhà du hành cần biết tại vị trí nào thì lực hút của Trái Đất và Mặt Trăng cân bằng triệt tiêu nhau.",
      "analysis": "Gọi $r_1$ là khoảng cách từ tàu đến tâm Trái Đất ($M_1 \\approx 5{,}97 \\times 10^{24}\\text{ kg}$), $r_2$ là khoảng cách từ tàu đến tâm Mặt Trăng ($M_2 \\approx 7{,}35 \\times 10^{22}\\text{ kg}$). Khoảng cách trung bình giữa hai tâm là $D = r_1 + r_2 \\approx 384.400\\text{ km}$. Điểm triệt tiêu trường hấp dẫn thỏa mãn: $$\\vec{g}_1 + \\vec{g}_2 = \\vec{0} \\implies \\frac{GM_1}{r_1^2} = \\frac{GM_2}{r_2^2} \\implies \\frac{r_1}{r_2} = \\sqrt{\\frac{M_1}{M_2}} \\approx \\sqrt{81{,}2} \\approx 9{,}01$$",
      "solution": "Ta có $r_1 \\approx 9{,}01 r_2 \\implies r_2 = \\frac{D}{10{,}01} \\approx \\frac{384.400}{10{,}01} \\approx 38.400\\text{ km}$ tính từ tâm Mặt Trăng, và $r_1 \\approx 346.000\\text{ km}$ tính từ tâm Trái Đất. Khi tàu Apollo vượt qua điểm mốc này, sức hút của Mặt Trăng sẽ vượt trội và tự động kéo con tàu rơi dần về phía Mặt Trăng mà không cần tốn thêm nhiên liệu.",
      "takeaway": "Vector trường hấp dẫn tuân theo nguyên lí chồng chất; điểm triệt tiêu lực luôn nằm lệch hẳn về phía thiên thể có khối lượng nhỏ hơn."
    },
    {
      "badge": "Trắc địa & Đo lường",
      "title": "Tình huống 2: Ứng dụng bản đồ dị thường trọng lực g trong thăm dò khoáng sản và dầu khí",
      "scenario": "Các nhà địa vật lí dùng thiết bị đo trọng lực cực nhạy (Gravimeter) quét trên bề mặt một vùng đồi núi để tìm kiếm mỏ dầu mỏ và quặng sắt dưới lòng đất.",
      "analysis": "Cường độ trường hấp dẫn lý thuyết ở bề mặt Trái Đất phụ thuộc vào vĩ độ và độ cao. Tuy nhiên, nếu bên dưới lòng đất có một khối quặng sắt có mật độ khối lượng rất lớn ($\\\\rho_{quặng} \\approx 5000\\text{ kg/m}^3 > \\rho_{đất} \\approx 2600\\text{ kg/m}^3$), nó sẽ tạo thêm một lượng gia tốc hấp dẫn phụ gia làm cho $g$ đo được lớn hơn lý thuyết (dị thường trọng lực dương). Ngược lại, nếu bên dưới là túi dầu khí hoặc hang động rỗng (mật độ nhẹ hơn đất đá xung quanh), $g$ đo được sẽ nhỏ hơn lý thuyết (dị thường trọng lực âm).",
      "solution": "Bằng cách đo chính xác gia tốc trọng trường với độ phân giải tới $10^{-6}\\text{ m/s}^2$ (microgal) trên diện rộng, các nhà địa chất vẽ được bản đồ phân bố mật độ ngầm, xác định chính xác vị trí túi dầu hoặc thân quặng trước khi khoan thăm dò tốn kém.",
      "takeaway": "Sự phân bố khối lượng bất đồng nhất bên dưới lòng đất làm biến dạng cục bộ trường hấp dẫn, là cơ sở của phương pháp thăm dò địa vật lí trọng lực."
    }
  ],
  "3": [
    {
      "badge": "Thám hiểm Sao Hỏa",
      "title": "Tình huống 1: Tính toán vận tốc phóng tối thiểu để tàu thăm dò thoát ly Trái Đất đến Sao Hỏa",
      "scenario": "Trung tâm hàng không vũ trụ chuẩn bị phóng tàu thăm dò Perseverance bay đến Sao Hỏa. Động cơ tên lửa đẩy tầng cuối cùng cần cung cấp vận tốc ban đầu là bao nhiêu để con tàu thoát khỏi giếng thế hấp dẫn của Trái Đất?",
      "analysis": "Để thoát ly hoàn toàn khỏi trường hấp dẫn Trái Đất ra vô cực, cơ năng của tàu (khối lượng $m$) ở vô cực tối thiểu phải bằng 0 ($W_\\infty \\ge 0$). Áp dụng định luật bảo toàn cơ năng trong chân không từ mặt đất ($r = R$) ra vô cực: $$W = \\frac{1}{2} m v_0^2 - \\frac{GMm}{R} \\ge 0 \\implies v_0 \\ge \\sqrt{\\frac{2GM}{R}} = v_2$$",
      "solution": "Thay số $G = 6{,}67 \\times 10^{-11}$, $M = 5{,}97 \\times 10^{24}\\text{ kg}$, $R = 6{,}371 \\times 10^6\\text{ m}$: $$v_2 = \\sqrt{\\frac{2 \\times 6{,}67 \\times 10^{-11} \\times 5{,}97 \\times 10^{24}}{6{,}371 \\times 10^6}} \\approx 11{,}18\\text{ km/s} \\approx 11{,}2\\text{ km/s}$$ Tên lửa đẩy phải tăng tốc con tàu đạt ít nhất $11{,}2\\text{ km/s}$ ($40.320\\text{ km/h}$) tại thời điểm đốt cháy hết nhiên liệu ở tầng trên khí quyển.",
      "takeaway": "Vận tốc vũ trụ cấp 2 là điều kiện năng lượng cần thiết để vượt qua giếng thế hấp dẫn của một thiên thể."
    },
    {
      "badge": "Thiên thạch va chạm",
      "title": "Tình huống 2: Đánh giá sức hủy diệt của thiên thạch lao vào bầu khí quyển Trái Đất",
      "scenario": "Một thiên thạch khối lượng $1000\\text{ tấn}$ từ khoảng cách rất xa trong hệ Mặt Trời (coi như ở vô cực với vận tốc ban đầu nhỏ) bị Trái Đất hút và lao thẳng xuống bầu khí quyển. Hãy tính vận tốc của nó khi vừa chạm tới rìa khí quyển.",
      "analysis": "Bảo toàn cơ năng cho thiên thạch khi rơi từ vô cực ($r \\to \\infty$, thế năng bằng 0, động năng ban đầu coi như triệt tiêu) xuống độ cao rìa khí quyển ($r \\approx R = 6371\\text{ km}$): $$W_1 = 0 = W_2 = \\frac{1}{2} m v^2 - \\frac{GMm}{R} \\implies v = \\sqrt{\\frac{2GM}{R}} \\approx 11{,}2\\text{ km/s}$$",
      "solution": "Vận tốc khi chạm khí quyển đạt tới $11{,}2\\text{ km/s}$ (tương đương hơn $40.000\\text{ km/h}$). Động năng khổng lồ của khối đá $10^6\\text{ kg}$ ở vận tốc này lên tới $E = \\frac{1}{2} \\times 10^6 \\times (11.200)^2 \\approx 6{,}3 \\times 10^{13}\\text{ J}$ (tương đương năng lượng nổ của quả bom nguyên tử $15\\text{ kiloton}$), tạo ra sóng xung kích và cầu lửa cực kì khủng khiếp khi nén khí quyển.",
      "takeaway": "Thế năng hấp dẫn âm chuyển hóa toàn bộ thành động năng vận tốc cực đại khi vật rơi tự do từ không gian sâu vào Trái Đất."
    }
  ],
  "4": [
    {
      "badge": "Kĩ thuật Phát thanh",
      "title": "Tình huống 1: Tại sao đài phát thanh FM nghe nhạc rất trong trẻo còn AM hay bị xẹt xẹt khi trời mưa dông?",
      "scenario": "Người lái xe ô tô nghe đài phát thanh vào ngày giông bão nhận thấy: Khi chuyển sang đài AM (sóng trung 540 - 1600 kHz) thì tiếng hát liên tục bị lạo xạo mỗi khi có sấm sét, trong khi chuyển sang đài FM (88 - 108 MHz) thì âm thanh vẫn trong vắt không chút tiếng nổ lẹt xẹt.",
      "analysis": "Tia sét là dòng phóng điện hàng chục nghìn ampe trong không khí, bức xạ ra xung điện từ trường mạnh với biên độ điện trường biến thiên ngẫu nhiên đột ngột. Máy thu AM hoạt động bằng cách giải mã sự thay đổi **biên độ** sóng mang để lấy ra âm thanh, do đó xung biên độ của tia sét bị mạch thu nhầm lẫn thành tín hiệu âm thanh và khuếch đại ra loa tạo thành tiếng lẹt xẹt. Trong khi đó, đài FM mang thông tin ở **tần số**, biên độ sóng FM không đổi. Máy thu FM trang bị mạch hạn chế biên độ (Limiter) cắt phẳng mọi đỉnh xung biên độ do sét gây ra trước khi đưa vào bộ giải điều chế tần số.",
      "solution": "Đài FM sử dụng điều chế tần số kết hợp mạch cắt biên độ để triệt tiêu hoàn toàn nhiễu biên độ công nghiệp và khí quyển, đem lại chất lượng âm thanh trung thực Stereo phục vụ âm nhạc chất lượng cao.",
      "takeaway": "Biến điệu FM vượt trội về khả năng triệt tiêu nhiễu biên độ khí quyển so với biến điệu AM."
    },
    {
      "badge": "Băng thông & Phổ tần",
      "title": "Tình huống 2: Quy hoạch tần số phát thanh để tránh đè sóng giữa các kênh liền kề",
      "scenario": "Cục Tần số Vô tuyến điện cần cấp phép phát sóng cho một đài FM phát tín hiệu âm nhạc có dải âm thanh lên tới $f_{m,\\max} = 15\\text{ kHz}$, với độ lệch tần cực đại cho phép là $\\Delta f = 75\\text{ kHz}$. Kĩ sư cần tính khoảng cách giãn kênh tối thiểu.",
      "analysis": "Theo quy tắc gần đúng Carson, băng thông của tín hiệu FM được tính bằng: $$B_{FM} = 2(\\Delta f + f_{m,\\max}) = 2(75 + 15) = 180\\text{ kHz}$$ Để tránh hiện tượng can nhiễu kênh lân cận (Adjacent Channel Interference) khi tín hiệu có đuôi phổ tràn ra ngoài, các cơ quan quản lí quy định phải có một dải bảo vệ (guard band) ở hai biên.",
      "solution": "Khoảng cách giữa hai tần số phát sóng của hai đài FM liên tiếp trong cùng một khu vực đô thị được quy chuẩn quốc tế là $200\\text{ kHz}$ (ví dụ các đài phát: 91,0 MHz; 91,2 MHz; 99,9 MHz; 100,0 MHz; 102,7 MHz).",
      "takeaway": "Băng thông FM rộng hơn nhiều so với AM đòi hỏi quy hoạch khoảng cách giãn kênh tối thiểu 200 kHz để đảm bảo không bị đè sóng."
    }
  ],
  "5": [
    {
      "badge": "Công nghệ Âm thanh",
      "title": "Tình huống 1: Tại sao đĩa CD âm thanh chuẩn quốc tế lại chọn tần số lấy mẫu 44,1 kHz và độ sâu 16 bit?",
      "scenario": "Khi các kĩ sư Sony và Philips thiết kế chuẩn đĩa Compact Disc (CD) vào cuối thập niên 1970, họ phải lựa chọn chính xác các tham số số hóa để đảm bảo tai người không phân biệt được với âm thanh phòng thu.",
      "analysis": "Tai người trẻ khỏe có thể nghe được dải tần âm thanh tối đa đến $f_{\\max} = 20\\text{ kHz}$. Theo định lí Nyquist-Shannon, tần số lấy mẫu tối thiểu phải là $f_s \\ge 2 \\times 20\\text{ kHz} = 40\\text{ kHz}$. Các kĩ sư chọn $44{,}1\\text{ kHz}$ để tạo một khoảng trống dự phòng $4{,}1\\text{ kHz}$ cho bộ lọc thông thấp tương tự (Anti-aliasing filter) cắt dốc mà không làm méo âm sắc ở dải $18-20\\text{ kHz}$. Đồng thời, độ sâu $16\\text{ bit}$ tạo ra $2^{16} = 65.536$ mức lượng tử, đem lại tỉ số tín hiệu trên nhiễu lượng tử (SNR): $$\\text{SNR} \\approx 6{,}02 \\times 16 + 1{,}76 \\approx 98\\text{ dB}$$ Vượt xa dải động của phòng hòa nhạc giao hưởng (~90 dB).",
      "solution": "Chuẩn $44{,}1\\text{ kHz} / 16\\text{ bit}$ tái tạo dải tần $20\\text{ Hz} - 20\\text{ kHz}$ cực kì trung thực với độ méo lượng tử dưới ngưỡng phát hiện của màng nhĩ con người.",
      "takeaway": "Định lí Nyquist và công thức nhiễu lượng tử xác lập nền móng cho toàn bộ kĩ thuật xử lí âm thanh số hiện đại."
    },
    {
      "badge": "Hạ tầng Mạng Viễn thông",
      "title": "Tình huống 2: Khắc phục hiện tượng suy biến tín hiệu trong truyền dẫn xuyên lục địa bằng trạm lặp số",
      "scenario": "Tuyến cáp viễn thông đáy biển kết nối Việt Nam với Hoa Kỳ dài hàng nghìn kilômét. Nếu truyền tín hiệu analog màng loa thoại thì sau vài trăm kilômét tín hiệu bị rè và chìm trong tiếng xì tạp âm. Làm thế nào hệ thống cáp quang số hiện đại truyền đi nguyên vẹn?",
      "analysis": "Trong đường truyền analog, mỗi trạm khuếch đại (amplifier) khuếch đại cả tín hiệu lẫn tạp âm tích lũy từ các đoạn trước. Qua hàng chục trạm, tỉ số SNR suy giảm thảm hại. Trong hệ thống số, người ta đặt các trạm tái sinh xung số (Regenerator): Tại mỗi trạm, mạch không chỉ khuếch đại mà còn thực hiện thao tác so sánh ngưỡng (thresholding) và định thời lại (re-timing). Bất kể xung điện áp bị méo mó hay dính tạp âm cỡ nào, miễn là xung vượt ngưỡng 50% thì trạm lập tức phát ra một xung vuông mới 100% chuẩn xác ở đầu ra.",
      "solution": "Trạm lặp số triệt tiêu hoàn toàn tạp âm tích lũy ở mỗi chặng, cho phép dữ liệu số truyền đi hàng chục nghìn kilômét xuyên đại dương mà không bị sai sót dù chỉ 1 bit.",
      "takeaway": "Khả năng tái sinh nguyên vẹn tại các trạm lặp là ưu thế quyết định khiến kĩ thuật số thay thế hoàn toàn kĩ thuật tương tự trên các tuyến truyền dẫn đường dài."
    }
  ],
  "6": [
    {
      "badge": "Thi công Cáp quang",
      "title": "Tình huống 1: Tính toán khoảng cách tối đa giữa hai trạm lặp trên tuyến cáp quang liên tỉnh",
      "scenario": "Một nhà mạng viễn thông lắp đặt tuyến cáp sợi quang đơn mode bước sóng $1550\\text{ nm}$ từ Hà Nội vào Đà Nẵng. Máy phát quang có công suất đầu ra là $P_{\\text{vào}} = 10\\text{ mW}$ ($+10\\text{ dBm}$), máy thu có độ nhạy tối thiểu là $-26\\text{ dBm}$. Hệ số suy giảm của sợi quang là $\\alpha = 0{,}2\\text{ dB/km}$ và tổn hao mối hàn cáp dự phòng là $4\\text{ dB}$. Cần xác định cự li tối đa giữa hai trạm lặp.",
      "analysis": "Độ suy giảm tối đa cho phép trên toàn tuyến để máy thu vẫn đọc được tín hiệu: $$A_{\\max} = P_{\\text{vào (dBm)}} - P_{\\text{nhạy (dBm)}} = 10 - (-26) = 36\\text{ dB}$$ Trừ đi suy hao dự phòng mối hàn $4\\text{ dB}$, suy hao còn lại dành cho chiều dài sợi quang là: $$A_{\\text{quang}} = 36 - 4 = 32\\text{ dB}$$ Chiều dài tối đa cho phép: $$L = \\frac{A_{\\text{quang}}}{\\alpha} = \\frac{32}{0{,}2} = 160\\text{ km}$$",
      "solution": "Kĩ sư quy hoạch khoảng cách đặt trạm lặp khuếch đại quang là khoảng $120 - 140\\text{ km}$ để đảm bảo độ tin cậy vận hành lâu dài ngay cả khi sợi quang bị lão hóa.",
      "takeaway": "Công thức suy giảm logarit dB giúp phép tính toán công suất tuyến quang trở thành phép cộng trừ số học vô cùng trực quan và tiện lợi."
    },
    {
      "badge": "Mạng Wi-Fi & Vật cản",
      "title": "Tình huống 2: Tại sao sóng Wi-Fi 5 GHz bị yếu rất nhanh khi qua tường gạch so với sóng 2,4 GHz?",
      "scenario": "Người dùng lắp bộ phát Wi-Fi băng tần kép trong phòng khách. Khi sang phòng ngủ ngăn cách bởi hai bức tường gạch dày 20 cm, sóng Wi-Fi 5 GHz bị rớt xuống còn 1 vạch, trong khi sóng 2,4 GHz vẫn đạt 3 vạch sóng khỏe.",
      "analysis": "Độ suy giảm của sóng vô tuyến khi đi qua môi trường điện môi hấp thụ (như bê tông, gạch đá, nước) tăng tỉ lệ thuận với tần số sóng. Sóng 5 GHz có bước sóng ngắn ($\\\\lambda \\approx 6\\text{ cm}$) nên năng lượng photon lớn hơn, tương tác mạnh với các phân tử phân cực trong vật liệu xây dựng và bị hấp thụ chuyển thành nhiệt lượng nhiều hơn so với sóng 2,4 GHz ($\\\\lambda \\approx 12{,}5\\text{ cm}$). Mỗi bức tường gạch 20 cm làm suy giảm sóng 2,4 GHz khoảng $4 - 6\\text{ dB}$, nhưng làm suy giảm sóng 5 GHz tới $10 - 15\\text{ dB}$ (tức công suất giảm đi hơn 10 đến 30 lần!).",
      "solution": "Ở các vị trí cách xa bộ phát và có nhiều vật cản tường bê tông, người dùng nên chuyển kết nối sang băng tần 2,4 GHz để duy trì vùng phủ sóng ổn định, hoặc lắp đặt thêm các điểm mở rộng sóng Wi-Fi Mesh.",
      "takeaway": "Tần số càng cao thì bước sóng càng ngắn và độ suy hao khi đâm xuyên vật cản càng lớn."
    }
  ],
  "7": [
    {
      "badge": "Chiếu sáng Thông minh",
      "title": "Tình huống 1: Thiết kế mạch phân áp cho hệ thống đèn đường tự động bật lúc hoàng hôn",
      "scenario": "Kĩ sư đô thị cần thiết kế cụm cảm biến điều khiển đèn đường chiếu sáng công cộng. Nguồn cấp mạch điều khiển là $V_s = 12\\text{ V}$. Linh kiện LDR đo được điện trở khi trời sáng là $R_{\\text{sáng}} = 1\\text{ k}\\Omega$, khi trời bắt đầu tối (ngưỡng hoàng hôn) là $R_{\\text{tối}} = 20\\text{ k}\\Omega$, và trong đêm tối mịt là $100\\text{ k}\\Omega$. Ngưỡng kích hoạt bật đèn cần mức điện áp $U_{\\text{ra}} \\ge 8\\text{ V}$.",
      "analysis": "Để điện áp $U_{\\text{ra}}$ tăng lên khi trời tối, ta mắc LDR ở nhánh dưới ($R_2 = R_{LDR}$) và điện trở cố định ở nhánh trên ($R_1$). Công thức phân áp: $$U_{\\text{ra}} = V_s \\frac{R_{LDR}}{R_1 + R_{LDR}}$$ Khi trời chạng vạng tối ($R_{LDR} = 20\\text{ k}\\Omega$), ta muốn $U_{\\text{ra}} = 8\\text{ V}$: $$8 = 12 \\times \\frac{20}{R_1 + 20} \\implies 8(R_1 + 20) = 240 \\implies 8R_1 = 80 \\implies R_1 = 10\\text{ k}\\Omega$$",
      "solution": "Chọn điện trở nhánh trên $R_1 = 10\\text{ k}\\Omega$ (có thể dùng biến trở $20\\text{ k}\\Omega$ nối tiếp với một trở hạn dòng $4{,}7\\text{ k}\\Omega$ để người vận hành dễ dàng tinh chỉnh mùa hè/mùa đông). Ban ngày ($R_{LDR} = 1\\text{ k}\\Omega$), $U_{\\text{ra}} = 12 \\times 1 / 11 \\approx 1{,}09\\text{ V} < 8\\text{ V} \\implies$ đèn tắt.",
      "takeaway": "Bố trí cảm biến ở nhánh trên hay nhánh dưới quyết định chiều biến thiên tăng hay giảm của điện áp phân áp ngõ ra."
    },
    {
      "badge": "Bảo vệ Pin Lithium",
      "title": "Tình huống 2: Giám sát nhiệt độ quá nhiệt của khối pin xe máy điện bằng Thermistor NTC",
      "scenario": "Khối pin Lithium-ion của xe máy điện khi sạc nhanh phát nhiệt. Để chống nguy cơ cháy nổ nhiệt (thermal runaway), mạch quản lí pin (BMS) gắn một cảm biến NTC sát giữa các cell pin. Khi nhiệt độ vượt quá $60^\\circ\\text{C}$, mạch phải lập tức ngắt dòng sạc.",
      "analysis": "Cảm biến NTC có đặc tính: nhiệt độ thường $25^\\circ\\text{C}$ điện trở là $10\\text{ k}\\Omega$; khi nóng lên $60^\\circ\\text{C}$ điện trở giảm xuống còn $2{,}5\\text{ k}\\Omega$. Nếu mắc NTC ở nhánh trên ($R_1$) và điện trở chuẩn $R_2 = 10\\text{ k}\\Omega$ ở nhánh dưới với nguồn cấp $5\\text{ V}$, thì khi pin nóng lên ($R_1$ giảm), điện áp $U_{\\text{ra}}$ trên $R_2$ sẽ tăng vọt: Ở $25^\\circ\\text{C}$: $U_{\\text{ra}} = 5 \\times \\frac{10}{10+10} = 2{,}5\\text{ V}$. Ở $60^\\circ\\text{C}$: $U_{\\text{ra}} = 5 \\times \\frac{10}{2{,}5+10} = 4{,}0\\text{ V}$.",
      "solution": "Vi điều khiển BMS cài đặt ngưỡng ngắt an toàn tại $U_{\\text{ngắt}} = 4{,}0\\text{ V}$. Khi điện áp đo được chạm mốc $4{,}0\\text{ V}$, rơ-le bán dẫn MOSFET lập tức cắt nguồn sạc, kích hoạt quạt tản nhiệt làm mát khẩn cấp.",
      "takeaway": "Đặc tính giảm điện trở phi tuyến của NTC tạo ra sự biến thiên điện áp rất dốc khi quá nhiệt, cực kì lí tưởng cho các mạch bảo vệ an toàn."
    }
  ],
  "8": [
    {
      "badge": "Bảo vệ Mạch Điều Khiển",
      "title": "Tình huống 1: Hiện tượng nổ transistor điều khiển relay khi quên lắp diode dập xung",
      "scenario": "Một học sinh lắp ráp mô hình tưới cây tự động trên bo mạch cắm. Ngõ ra của Op-Amp kích cho transistor NPN (2N2222) kéo cuộn hút relay 12V DC. Mạch hoạt động đóng ngắt được 2 lần thì transistor bị chập cháy bốc khói đen dù dòng làm việc bình thường của cuộn dây chỉ là 40 mA.",
      "analysis": "Cuộn hút của relay là một cuộn cảm có độ tự cảm $L$ đáng kể (thường vài chục đến vài trăm mH). Khi transistor chuyển từ trạng thái dẫn sang ngắt, dòng điện qua cuộn dây bị cắt đột ngột ($di/dt$ âm rất lớn). Theo định luật Faraday về cảm ứng điện từ: $$e_{tc} = -L \\frac{di}{dt}$$ Suất điện động tự cảm ngược sinh ra một xung điện áp nhọn lên đến $150 - 300\\text{ V}$ tại chân cực góp (Collector) của transistor. Điện áp này vượt xa điện áp đánh thủng tối đa $V_{CEO} = 40\\text{ V}$ của transistor 2N2222, gây thủng mối nối bán dẫn tức thì.",
      "solution": "Lắp một diode chỉnh lưu thông dụng (như 1N4007) mắc song song ngược cực với cuộn hút relay (catot nối nguồn dương $+12\\text{ V}$, anot nối chân collector transistor). Khi ngắt dòng, xung điện áp tự cảm sẽ kích mở diode dẫn dòng khép kín tuần hoàn qua nội trở cuộn dây, triệt tiêu an toàn xung cao áp.",
      "takeaway": "Diode dập xung (Flyback diode) là linh kiện bảo vệ bắt buộc tuyệt đối phải có khi mạch bán dẫn điều khiển bất kì tải có tính cảm ứng nào (relay, van từ, động cơ điện)."
    },
    {
      "badge": "Kĩ thuật Thiết kế LED",
      "title": "Tình huống 2: Tính toán và kiểm tra nhiệt độ làm việc của điện trở hạn dòng LED cảnh báo",
      "scenario": "Mạch chỉ thị trạng thái ngõ ra của Op-Amp cấp điện áp $12\\text{ V}$ thắp sáng một đèn LED đỏ siêu sáng ($U_{LED} = 2\\text{ V}$, dòng $I_{LED} = 20\\text{ mA}$). Bạn học sinh dùng một điện trở $0{,}25\\text{ W}$ mắc nối tiếp nhưng sau 10 phút sờ vào thấy điện trở nóng rẫy.",
      "analysis": "Điện trở hạn dòng cần thiết: $$R = \\frac{U_{\\text{ra}} - U_{LED}}{I_{LED}} = \\frac{12 - 2}{0{,}02} = 500\\,\\Omega$$ (chọn điện trở chuẩn $510\\,\\Omega$). Công suất nhiệt tiêu tán trên điện trở: $$P_R = I_{LED}^2 \\times R = (0{,}02)^2 \\times 500 = 0{,}20\\text{ W}$$ Điện trở loại $0{,}25\\text{ W}$ chịu tải liên tục ở mức $0{,}20\\text{ W}$ (đạt $80\\%$ công suất danh định tối đa) nên nhiệt độ bề mặt có thể tăng lên trên $70^\\circ\\text{C}$, rất nóng và dễ bị cháy giảm thọ.",
      "solution": "Để đảm bảo an toàn nhiệt theo quy chuẩn kĩ thuật (công suất làm việc không vượt quá 50% danh định), cần nâng cấp chọn điện trở công suất $0{,}5\\text{ W}$ hoặc $1\\text{ W}$ $510\\,\\Omega$, hoặc giảm bớt dòng qua LED xuống còn $10\\text{ mA}$ ($R = 1\\text{ k}\\Omega, P_R = 0{,}1\\text{ W}$) mà đèn vẫn đủ độ sáng rõ nét.",
      "takeaway": "Khi thiết kế mạch điện tử, không chỉ tính đúng giá trị điện trở ($R$) mà bắt buộc phải tính cả công suất chịu tải ($P$) để tránh quá nhiệt linh kiện."
    }
  ],
  "9": [
    {
      "badge": "Tự động hóa Nông nghiệp",
      "title": "Tình huống 1: Lắp ráp và cân chỉnh hệ thống tưới phun sương tự động cho vườn hoa lan",
      "scenario": "Một nhóm học sinh thực hiện dự án STEM chế tạo hệ thống tự động tưới phun sương khi trời nắng nóng và đất khô. Mạch sử dụng cảm biến độ ẩm đất kết hợp Op-Amp LM358 so sánh ngưỡng điều khiển van điện từ 12V.",
      "analysis": "Cảm biến độ ẩm đất gồm hai que đo cắm vào bầu đất. Khi đất khô, điện trở giữa hai que tăng cao làm điện áp phân áp đưa vào chân $V_+$ của Op-Amp tăng vượt điện áp tham chiếu $V_-$ (đặt bởi biến trở vi chỉnh 10k). Ngõ ra Op-Amp nhảy lên mức cao $+12\\text{ V}$, kích transistor dẫn đóng relay, cấp điện mở van điện từ tưới nước. Tuy nhiên, khi vừa tưới được 5 giây, nước ẩm ngấm bề mặt làm điện áp chân $V_+$ tụt xuống, relay lập tức ngắt; vài giây sau đất lại khô nhẹ relay lại đóng, gây ra hiện tượng rơ-le đóng ngắt liên tục tanh tách (chập chờn dao động quanh ngưỡng).",
      "solution": "Để triệt tiêu hiện tượng chập chờn rung tiếp điểm relay, nhóm bổ sung một điện trở hồi tiếp dương $R_f = 100\\text{ k}\\Omega$ từ chân ngõ ra $V_{\\text{out}}$ về chân $V_+$, biến Op-Amp thành mạch so sánh có trễ (Schmitt Trigger). Nhờ đó, mạch có hai ngưỡng kích hoạt tách biệt: khô tới $30\\%$ mới bật tưới và phải ẩm đạt $70\\%$ mới ngắt, giúp rơ-le đóng ngắt êm ái và kéo dài tuổi thọ thiết bị.",
      "takeaway": "Mạch so sánh Schmitt Trigger có trễ là giải pháp kinh điển để chống rung tiếp điểm và chống nhiễu chập chờn cho mọi hệ thống điều khiển tự động dùng cảm biến."
    },
    {
      "badge": "An toàn Lao động Phòng LAB",
      "title": "Tình huống 2: Xử lí sự cố rò điện và đo kiểm an toàn khi đấu nối tải máy bơm nước 220V qua module relay",
      "scenario": "Trong giờ thực hành dự án mạch cảm biến Bài 9, học sinh cần đóng cắt một máy bơm nước xoay chiều 220V công suất 100W bằng module relay điều khiển từ nguồn DC 9V.",
      "analysis": "Module relay có hai phần riêng biệt: phần mạch điện áp thấp DC (chân VCC, GND, IN nhận tín hiệu từ cảm biến) và phần tiếp điểm điện xoay chiều AC 220V (chân COM, NO). Nếu học sinh cắm nhầm dây nguồn 220V sang hàng chân DC, toàn bộ bo mạch breadboard và cảm biến sẽ nhiễm điện áp lưới gây nổ vi mạch và nguy cơ điện giật chết người. Ngoài ra, việc để hở các ốc siết dây đồng ở cổng COM/NO khi có nguồn điện 220V là vi phạm nghiêm trọng an toàn lao động.",
      "solution": "Quy trình thi công bắt buộc: (1) Cách li cơ học phần mạch DC và phần tiếp điểm AC 220V bằng vách ngăn hộp nhựa; (2) Luôn rút phích cắm điện 220V ra khỏi ổ cắm tường trong suốt quá trình đấu dây và chỉ được cắm điện sau khi giáo viên đã dùng đồng hồ vạn năng đo kiểm cách điện và kí duyệt; (3) Toàn bộ đầu nối 220V phải được bọc ống co nhiệt hoặc siết kín trong hộp nhựa chuẩn IP65 có tiếp địa an toàn.",
      "takeaway": "Quy tắc an toàn sống còn: Tách biệt tuyệt đối phần điều khiển DC hạ áp với phần chấp hành điện lưới AC 220V; chỉ cấp nguồn khi đã đo kiểm cách điện kép."
    }
  ]
};