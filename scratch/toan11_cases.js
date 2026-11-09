module.exports = {
  "1": [
    {
      "badge": "Đồ họa Vector",
      "title": "Tình huống 1: Thiết kế font chữ dẹt (Condensed) bằng phép co trục",
      "scenario": "Một nhà thiết kế đồ họa cần tạo phiên bản chữ dẹt (Condensed Font) từ bộ font chuẩn để đưa vào tiêu đề báo chí trên điện thoại di động có màn hình hẹp.",
      "analysis": "Chữ cái ban đầu được xác định bởi tập hợp các điểm và đường cong bezier trên lưới tọa độ Oxy. Phép biến hình cần giữ nguyên chiều cao chữ theo trục Oy ($y' = y$) nhưng thu hẹp chiều ngang chữ theo trục Ox về $75\\%$ kích thước cũ ($x' = 0{,}75 x$). Đây là phép co trục $f(x; y) = (0{,}75x; y)$.",
      "solution": "Phần mềm đồ họa nhân ma trận tọa độ của tất cả các vector đỉnh với $\\begin{bmatrix} 0{,}75 & 0 \\\\ 0 & 1 \\end{bmatrix}$, tạo ra bộ font Condensed gọn gàng, tiết kiệm $25\\%$ không gian chiều ngang mà vẫn giữ nguyên độ cao và độ sắc nét của chữ.",
      "takeaway": "Phép co giãn trục là công cụ toán học cơ bản trong biến đổi hình học phi đối xứng của các phần mềm thiết kế đồ họa hiện đại."
    },
    {
      "badge": "Công nghệ Hiển thị",
      "title": "Tình huống 2: Xử lí tỉ lệ khung hình (Aspect Ratio) khi chiếu video màn ảnh rộng",
      "scenario": "Một video chuẩn $16:9$ khi chiếu lên màn hình máy chiếu cũ chuẩn $4:3$ nếu không xử lí đúng sẽ bị co dãn méo hình (mặt nhân vật bị dài ra hoặc bè ra).",
      "analysis": "Tỉ lệ $16:9 = 1{,}778$, trong khi $4:3 = 1{,}333$. Nếu ép toàn bộ khung hình vào màn hình $4:3$ mà không giữ tỉ lệ, video phải chịu phép biến hình $f(x; y) = (x; ky)$ với $k = \\frac{16/9}{4/3} = \\frac{4}{3} \\approx 1{,}33$. Tung độ bị giãn $33\\%$ làm mọi vật thể tròn biến thành elip đứng.",
      "solution": "Để bảo toàn hình dạng thực, máy chiếu áp dụng phương pháp Letterbox: áp dụng phép vị tự tỉ số $k = 0{,}75$ cho cả 2 trục đồng thời và chèn hai vạch đen ở trên và dưới khung hình, tránh hiện tượng co dãn méo hình.",
      "takeaway": "Phép biến hình co giãn một trục làm biến đổi hình dạng (đường tròn thành elip), trong khi phép đồng dạng giữ nguyên hình dáng của đối tượng."
    }
  ],
  "2": [
    {
      "badge": "Quy hoạch Kiến trúc",
      "title": "Tình huống 1: Thiết kế hoa văn gạch lát vỉa hè phố đi bộ theo hai vectơ cơ sở",
      "scenario": "Kiến trúc sư thiết kế vỉa hè phố đi bộ Nguyễn Huệ bằng các khối đá granit có hoa văn hình lục giác lồng ghép lặp lại vô tận mà không để lộ kẽ hở.",
      "analysis": "Mỗi viên đá là một ô cơ sở (unit cell). Để lát kín mặt phẳng mà không có khe hở và không chồng đè, kiến trúc sư chọn hai vectơ độc lập tuyến tính $\\vec{u}_1 = (a; 0)$ và $\\vec{u}_2 = (a/2; a\\sqrt{3}/2)$. Vị trí của mọi viên đá trên vỉa hè được xác định bằng phép tịnh tiến ô cơ sở theo vectơ $\\vec{v} = m\\vec{u}_1 + n\\vec{u}_2$ với $m, n \\in \\mathbb{Z}$.",
      "solution": "Nhờ tính chất bảo toàn khoảng cách ($M'N' = MN$) và bảo toàn góc của phép tịnh tiến, các viên gạch sau khi tịnh tiến khít sát hoàn hảo với nhau, tạo thành mạng lưới tinh thể 2D đối xứng tuyệt đẹp.",
      "takeaway": "Mọi mạng lưới lát mặt phẳng tuần hoàn trong tự nhiên và kiến trúc đều được vận hành dựa trên nhóm các phép tịnh tiến rời rạc theo hai chiều."
    },
    {
      "badge": "Lập trình Game 2D",
      "title": "Tình huống 2: Di chuyển tàu bay trong game bắn máy bay không gian (Space Shooter)",
      "scenario": "Lập trình viên game 2D cần lập trình chuyển động lướt của phi thuyền người chơi từ vị trí $A(120; 300)$ sang vị trí $B(420; 700)$ trên màn hình trong khoảng thời gian $0{,}5$ giây ở tốc độ 60 khung hình/giây.",
      "analysis": "Vectơ dịch chuyển tổng thể là $\\overrightarrow{AB} = (420 - 120; 700 - 300) = (300; 400)$. Độ dài quãng đường $AB = \\sqrt{300^2 + 400^2} = 500\\text{ pixel}$. Trong $0{,}5\\text{ s}$ ở 60 fps, có tổng cộng $N = 30$ khung hình (frame). Vectơ tịnh tiến vi phân cho mỗi khung hình là $\\vec{u} = \\frac{1}{30} \\overrightarrow{AB} = (10; 13{,}33)$.",
      "solution": "Ở mỗi vòng lặp render, tọa độ phi thuyền được cập nhật theo công thức tịnh tiến: $x_{mới} = x_{cũ} + 10$ và $y_{mới} = y_{cũ} + 13{,}33$. Phi thuyền di chuyển thẳng tắp, mượt mà mà không bị rung lắc hay biến dạng hình dáng.",
      "takeaway": "Chuyển động tịnh tiến đều trong đồ họa máy tính là phép cộng dồn liên tục vectơ tịnh tiến vi phân ở mỗi khung hình."
    }
  ],
  "3": [
    {
      "badge": "Tối ưu Hạ tầng",
      "title": "Tình huống 1: Bài toán xây dựng trạm bơm nước tối ưu từ bờ sông đến hai làng nông nghiệp",
      "scenario": "Hai ngôi làng $A$ và $B$ nằm cùng một phía của một con sông thẳng $d$. Chính quyền địa phương cần xây dựng một trạm bơm nước $M$ đặt trên bờ sông $d$ để dẫn nước về hai làng bằng hai đường ống $MA$ và $MB$. Hãy xác định vị trí trạm bơm $M$ để tổng chi phí đường ống $MA + MB$ là nhỏ nhất.",
      "analysis": "Chọn hệ tọa độ sao cho bờ sông $d$ trùng với trục hoành $Ox$. Tọa độ làng $A(2; 4)$ và làng $B(8; 2)$ (cùng có tung độ dương, nằm cùng phía). Lấy điểm $A' = Đ_{Ox}(A) = (2; -4)$ đối xứng với $A$ qua bờ sông. Với mọi vị trí trạm bơm $M(x; 0)$ trên bờ sông, ta luôn có $MA = MA'$. Do đó tổng độ dài đường ống: $MA + MB = MA' + MB \\ge A'B$.",
      "solution": "Tổng chiều dài đường ống ngắn nhất đúng bằng độ dài đoạn thẳng nối $A'$ và $B$: $$A'B = \\sqrt{(8 - 2)^2 + (2 - (-4))^2} = \\sqrt{6^2 + 6^2} = 6\\sqrt{2} \\approx 8{,}49\\text{ km}$$ Phương trình đường thẳng $A'B$: đi qua $A'(2; -4)$ và $B(8; 2)$ có hệ số góc $k = \\frac{2 - (-4)}{8 - 2} = 1 \\implies y - 2 = 1(x - 8) \\implies y = x - 6$. Cho $y = 0 \\implies x = 6$. Trạm bơm nước cần đặt tại vị trí $M(6; 0)$ trên bờ sông.",
      "takeaway": "Phép đối xứng trục giúp biến đường gấp khúc $AMB$ thành đoạn thẳng $A'MB$ liền mạch, là chìa khóa giải quyết bài toán cực trị khoảng cách Heron."
    },
    {
      "badge": "Quang Hình học",
      "title": "Tình huống 2: Giải thích định luật phản xạ ánh sáng trên gương phẳng qua nguyên lí Fermat",
      "scenario": "Tia sáng truyền từ điểm sáng $S$ đến gương phẳng $d$ tại điểm tới $I$ rồi phản xạ đến mắt người quan sát tại điểm $P$. Tại sao tia sáng luôn chọn góc tới bằng góc phản xạ ($i = i'$)?",
      "analysis": "Theo nguyên lí Fermat, ánh sáng luôn truyền theo con đường đòi hỏi thời gian ngắn nhất (tương đương với quãng đường $SI + IP$ ngắn nhất trong môi trường đồng tính). Lấy $S'$ đối xứng với $S$ qua mặt gương $d$. Khi đó $SI = S'I$, quãng đường $SI + IP = S'I + IP$ ngắn nhất khi $S', I, P$ thẳng hàng.",
      "solution": "Do $S', I, P$ thẳng hàng, hai góc đối đỉnh bằng nhau. Qua phép đối xứng trục $d$, góc giữa tia tới $SI$ với pháp tuyến bằng đúng góc giữa tia phản xạ $IP$ với pháp tuyến ($i = i'$).",
      "takeaway": "Định luật phản xạ ánh sáng cơ bản trong vật lí chính là hệ quả tự nhiên của phép đối xứng trục và bài toán cực trị đường đi ngắn nhất."
    }
  ],
  "4": [
    {
      "badge": "Kĩ thuật Năng lượng",
      "title": "Tình huống 1: Thiết kế tuabin gió 3 cánh cân bằng động bằng phép quay 120°",
      "scenario": "Một kĩ sư cơ khí thiết kế cánh quạt của máy phát điện gió công suất 2 MW. Tuabin gồm 3 cánh quạt dài 50 m gắn vào cùng một trục quay $O$. Kĩ sư cần tính toán tọa độ đầu mút cánh quạt để đảm bảo cân bằng động lực học.",
      "analysis": "Để triệt tiêu hoàn toàn lực li tâm mất cân bằng gây rung lắc gãy trục, 3 cánh quạt phải bố trí đối xứng quay qua các góc bằng nhau $\\alpha = 360^\\circ / 3 = 120^\\circ$. Nếu đầu mút cánh thứ nhất ở vị trí đỉnh $A_1(0; 50)$, thì đầu mút cánh thứ hai $A_2$ nhận được qua phép quay $Q_{(O, 120^\\circ)}(A_1)$, và cánh thứ ba $A_3$ qua $Q_{(O, 240^\\circ)}(A_1)$.",
      "solution": "Tọa độ cánh 2: $x_2 = 0\\cos 120^\\circ - 50\\sin 120^\\circ = -25\\sqrt{3} \\approx -43{,}3\\text{ m}$, $y_2 = 0\\sin 120^\\circ + 50\\cos 120^\\circ = -25\\text{ m}$. Tọa độ cánh 3: $x_3 = 25\\sqrt{3} \\approx 43{,}3\\text{ m}$, $y_3 = -25\\text{ m}$. Tổng vector vị trí $\\overrightarrow{OA}_1 + \\overrightarrow{OA}_2 + \\overrightarrow{OA}_3 = \\vec{0}$, đảm bảo trọng tâm hệ luôn nằm đúng tại tâm trục $O$.",
      "takeaway": "Phép quay đối xứng đều $360^circ/n$ là nguyên lí cốt lõi để triệt tiêu mômen mất cân bằng trong chế tạo mọi máy móc quay tốc độ cao."
    },
    {
      "badge": "Thiết kế Logo",
      "title": "Tình huống 2: Nhận diện tâm đối xứng và trục đối xứng trong nhận diện thương hiệu",
      "scenario": "Một công ty công nghệ muốn thiết kế biểu trưng logo sao cho khi in lên các tài liệu xoay ngược $180^circ$ vẫn giữ nguyên nhận diện thương hiệu.",
      "analysis": "Để hình ảnh không thay đổi khi xoay $180^circ$, hình học của logo bắt buộc phải có tâm đối xứng ($Đ_O(H) = H$). Ví dụ các logo kinh điển: logo chữ S của VinFast, biểu tượng âm dương Taiji, logo Chevrolet hình chữ thập hoặc logo vòng tròn lồng ghép.",
      "solution": "Nhà thiết kế xây dựng nửa logo phía trên, sau đó áp dụng phép đối xứng tâm $I(a; b)$ với công thức $x' = 2a - x, y' = 2b - y$ để sinh ra nửa phía dưới. Kết quả logo có tính cân bằng hoàn hảo và xoay ngược vẫn không đổi dạng.",
      "takeaway": "Phép đối xứng tâm chính là phép quay góc 180°, mang lại tính ổn định thị giác và cân bằng đối xứng trung tâm trong mĩ thuật ứng dụng."
    }
  ],
  "5": [
    {
      "badge": "Kiến trúc Cổ điển",
      "title": "Tình huống 1: Khảo sát sự bằng nhau của các vòm cửa đá trong kiến trúc Gothic",
      "scenario": "Trong đợt trùng tu nhà thờ cổ, kiến trúc sư cần kiểm tra xem 20 vòm cửa sổ bằng đá ở mặt trước nhà thờ có hoàn toàn bằng nhau hay không để đặt hàng khuôn đúc phục chế hàng loạt.",
      "analysis": "Theo hình học, hai vòm cửa phức tạp $H$ và $H'$ được gọi là bằng nhau ($H \\cong H'$) nếu tồn tại một phép dời hình biến vòm cửa này thành vòm cửa kia. Phép dời hình bảo toàn khoảng cách ($M'N' = MN$), bảo toàn bán kính uốn cong của các cung đá và diện tích lấy sáng.",
      "solution": "Bằng cách quét 3D laser và đặt gốc tọa độ, kiến trúc sư chứng minh được vòm cửa số 2 nhận được từ vòm cửa số 1 qua phép tịnh tiến theo vectơ $\\vec{u} = (4{,}5\\text{ m}; 0)$, vòm cửa số 3 qua $2\\vec{u}$... Do tịnh tiến là phép dời hình, tất cả 20 vòm cửa đều bằng nhau $100\\%$, chỉ cần tạo đúng 1 khuôn đúc duy nhất.",
      "takeaway": "Khái niệm hai hình bằng nhau trong toán học hiện đại được định nghĩa tổng quát thông qua sự tồn tại của phép dời hình, không bị giới hạn trong tam giác."
    },
    {
      "badge": "Robot Tự động hóa",
      "title": "Tình huống 2: Lập trình cánh tay robot nhặt linh kiện từ băng tải sang hộp đóng gói",
      "scenario": "Cánh tay robot 6 trục trong nhà máy điện tử nhặt một bo mạch điện tử từ khay cấp phôi ở vị trí $A$ (nằm nghiêng góc $30^circ$) chuyển sang đặt vào hộp đóng gói tại vị trí $B$ (nằm nghiêng góc $75^circ$).",
      "analysis": "Chuyển động của bo mạch rắn không bị biến dạng là một phép dời hình trong không gian 2D/3D. Quá trình dời hình này là hợp thành của: (1) Phép tịnh tiến theo vectơ $\\overrightarrow{AB}$ đưa tâm bo mạch đến vị trí mới; và (2) Phép quay quanh tâm bo mạch góc $\\Delta\\alpha = 75^circ - 30^circ = 45^circ$.",
      "solution": "Bộ điều khiển PLC tính toán ma trận dời hình hợp thành $T_{\\overrightarrow{AB}} \\circ Q_{(A, 45^circ)}$, truyền xung điều khiển đồng bộ động cơ servo các khớp quay, hoàn thành việc gắp đặt trong 0,8 giây mà không làm nứt vỡ mạch in.",
      "takeaway": "Mọi chuyển động vật rắn trong cơ học và robotics đều là một chuỗi hợp thành của các phép dời hình cơ bản (tịnh tiến và quay)."
    }
  ],
  "6": [
    {
      "badge": "Công nghệ Máy chiếu",
      "title": "Tình huống 1: Tính toán khoảng cách lắp máy chiếu Projector cho hội trường trường học",
      "scenario": "Trường học lắp máy chiếu trong hội trường lớn. Tấm nền màn hình LCD bên trong máy chiếu có kích thước $2\\text{ cm} \\times 1{,}5\\text{ cm}$. Màn chiếu trên sân khấu yêu cầu kích thước hiển thị phóng đại là $4\\text{ m} \\times 3\\text{ m}$. Cần xác định tỉ số vị tự phóng đại của thấu kính.",
      "analysis": "Tia sáng xuất phát từ nguồn sáng điểm (tâm vị tự $O$) đi qua tấm nền màn hình nhỏ rồi phóng đại lên màn chiếu lớn. Chiều dài màn ảnh tăng từ $2\\text{ cm} = 0{,}02\\text{ m}$ lên $4\\text{ m}$. Tỉ số vị tự phóng đại là: $$k = \\frac{4\\text{ m}}{0{,}02\\text{ m}} = 200$$ Chiều cao kiểm tra: $1{,}5\\text{ cm} \\times 200 = 300\\text{ cm} = 3\\text{ m}$ (khớp hoàn hảo).",
      "solution": "Thấu kính máy chiếu thực hiện phép vị tự phóng đại với tỉ số $k = 200$. Diện tích hình ảnh trên màn chiếu gấp $k^2 = 200^2 = 40.000$ lần diện tích tấm nền LCD nhỏ bé bên trong máy chiếu.",
      "takeaway": "Phép vị tự là nền tảng quang hình học của tất cả các thiết bị phóng đại hình ảnh: máy chiếu, kính hiển vi, kính thiên văn."
    },
    {
      "badge": "Quy hoạch Đô thị",
      "title": "Tình huống 2: Xây dựng sa bàn mô hình thu nhỏ khu đô thị thông minh",
      "scenario": "Ban quản lí dự án xây dựng một sa bàn mô hình thu nhỏ tỉ lệ $1:500$ của một công viên trung tâm có diện tích thực tế là $20.000\\text{ m}^2$ và hồ nước cảnh quan có bán kính thực địa $50\\text{ m}$.",
      "analysis": "Mô hình sa bàn là ảnh của khu thực địa qua phép vị tự thu nhỏ tỉ số $k = 1/500 = 0{,}002$. Bán kính hồ nước trên sa bàn: $R' = k R = 50\\text{ m} / 500 = 0{,}1\\text{ m} = 10\\text{ cm}$. Diện tích công viên trên sa bàn: $S' = k^2 S = (1/500)^2 \\times 20.000\\text{ m}^2 = \\frac{20.000}{250.000} = 0{,}08\\text{ m}^2 = 800\\text{ cm}^2$.",
      "solution": "Kĩ sư dựng hồ nước tròn bán kính đúng $10\\text{ cm}$ và diện tích công viên thu nhỏ chiếm đúng $800\\text{ cm}^2$ (kích thước khoảng $28\\text{ cm} \\times 28\\text{ cm}$) trên mặt bàn trưng bày.",
      "takeaway": "Quy tắc vàng của phép vị tự: Độ dài thu nhỏ $k$ lần thì diện tích giảm $k^2$ lần và thể tích giảm $k^3$ lần."
    }
  ],
  "7": [
    {
      "badge": "Trắc địa & Đo đạc",
      "title": "Tình huống 1: Ứng dụng tam giác đồng dạng đo chiều cao của ngọn hải đăng ngoài đảo xa",
      "scenario": "Một nhóm học sinh đi dã ngoại muốn đo chiều cao của ngọn hải đăng ven biển mà không thể trèo lên đỉnh ngọn tháp.",
      "analysis": "Các bạn cắm một chiếc cọc tiêu $CD$ thẳng đứng vuông góc với mặt đất có chiều cao đo được là $CD = 2\\text{ m}$ tại vị trí cách chân hải đăng $AB$ một khoảng $DB = 28\\text{ m}$. Người quan sát ngắm từ mặt đất tại điểm $E$ lùi xa cọc một khoảng $ED = 2\\text{ m}$ thì thấy đỉnh cọc tiêu $C$ che khuất đúng đỉnh ngọn hải đăng $A$.",
      "solution": "Hai tam giác vuông $\\Delta EDC$ và $\\Delta EBA$ đồng dạng với nhau (chung góc nhọn tại $E$). Tỉ số đồng dạng: $k = \\frac{EB}{ED} = \\frac{ED + DB}{ED} = \\frac{2 + 28}{2} = \\frac{30}{2} = 15$. Chiều cao của ngọn hải đăng là: $$AB = k \\times CD = 15 \\times 2 = 30\\text{ m}$$",
      "takeaway": "Phép đồng dạng tam giác cho phép con người đo đạc chính xác các khoảng cách và chiều cao vĩ mô không thể với tới bằng thước dây thông thường."
    },
    {
      "badge": "Khoa học Tự nhiên",
      "title": "Tình huống 2: Nghịch lí bờ biển và ứng dụng hình học Fractal trong mô phỏng rạn san hô",
      "scenario": "Các nhà hải dương học cần tính diện tích bề mặt tiếp xúc của một rạn san hô để ước tính lượng sinh vật phù du bám dính. Nếu dùng thước dây 1m đo thì thấy bờ mép san hô dài 10m, nhưng nếu đo bằng kính lúp milimét thì chiều dài lại tăng vọt lên hàng nghìn mét.",
      "analysis": "Rạn san hô có cấu trúc tự đồng dạng Fractal giống như bông tuyết Koch. Sau mỗi bậc phóng đại $n$, đường biên mép san hô phân nhánh thêm các cấu trúc gai nhỏ tương tự. Chu vi tăng theo cấp số nhân $P_n \\propto (4/3)^n \\to \\infty$, tạo ra diện tích bề mặt hấp thụ dinh dưỡng khổng lồ nhưng chỉ chiếm một thể tích không gian rất nhỏ gọn.",
      "solution": "Các nhà khoa học sử dụng mô hình fractal bông tuyết Koch với số chiều fractal Hausdorff $D = \\frac{\\log 4}{\\log 3} \\approx 1{,}2619$ để tính toán chính xác sinh khối của hệ sinh thái rạn san hô.",
      "takeaway": "Hình học fractal mở ra cánh cửa giải thích các cấu trúc tự nhiên phức tạp: chu vi có thể vô hạn trong khi diện tích và thể tích bị chặn hữu hạn."
    }
  ],
  "8": [
    {
      "badge": "Mạng Xã hội",
      "title": "Tình huống 1: Ứng dụng định lí bắt tay kiểm tra tính hợp lệ của dữ liệu kết bạn Facebook",
      "scenario": "Một nhóm nghiên cứu xã hội học khảo sát một câu lạc bộ gồm 15 sinh viên. Kết quả điều tra ban đầu ghi nhận: \"Mỗi sinh viên trong câu lạc bộ đều có đúng 5 người bạn thân thiết trong nhóm\". Kĩ sư phân tích dữ liệu khẳng định ngay kết quả khảo sát này có sai sót.",
      "analysis": "Mô hình hóa câu lạc bộ bằng đơn đồ thị $G = (V, E)$ với 15 đỉnh (mỗi sinh viên là 1 đỉnh). Quan hệ bạn bè là hai chiều (cạnh vô hướng). Theo giả thiết khảo sát, mọi đỉnh đều có bậc bằng 5: $\\deg(v) = 5, \\forall v$. Tổng bậc của đồ thị là: $$\\sum \\deg(v) = 15 \\times 5 = 75$$",
      "solution": "Theo Định lí bắt tay, tổng bậc của mọi đồ thị luôn bằng $2|E|$ (phải là một **số chẵn**). Con số 75 là số lẻ, vi phạm định lí toán học nền tảng! Không thể tồn tại một mạng lưới nào có 15 người mà mỗi người quen đúng 5 người. Dữ liệu khảo sát chắc chắn có người khai sai hoặc bị tính trùng lặp.",
      "takeaway": "Định lí bắt tay là bộ lọc kiểm tra tính hợp lệ toán học tức thì cho các bộ dữ liệu đồ thị mạng xã hội lớn."
    },
    {
      "badge": "Tổ chức Giải đấu",
      "title": "Tình huống 2: Lập lịch thi đấu vòng tròn một lượt cho giải bóng đá V-League",
      "scenario": "Giải bóng đá vô địch quốc gia V-League có 14 câu lạc bộ tham dự. Ban tổ chức thi đấu theo thể thức vòng tròn một lượt (mỗi đội gặp nhau đúng 1 trận). Cần tính tổng số trận đấu của toàn giải để kí hợp đồng truyền hình và thuê sân bãi.",
      "analysis": "Mỗi đội bóng là một đỉnh của đồ thị. Mỗi trận đấu giữa 2 đội là một cạnh nối 2 đỉnh. Vì mỗi cặp đội đều thi đấu với nhau đúng 1 trận, mô hình tương ứng chính là đồ thị đầy đủ $K_{14}$ gồm $n = 14$ đỉnh.",
      "solution": "Tổng số trận đấu bằng số cạnh của đồ thị đầy đủ $K_{14}$: $$|E(K_{14})| = \\frac{n(n-1)}{2} = \\frac{14 \\times 13}{2} = 91\\text{ trận}$$ Ban tổ chức lên kế hoạch tổ chức chính xác 91 trận đấu phân bổ trong 13 vòng đấu.",
      "takeaway": "Số cạnh của đồ thị đầy đủ $K_n$ bằng $n(n-1)/2$, là công thức chuẩn mực tính số trận đấu vòng tròn một lượt trong thể thao."
    }
  ],
  "9": [
    {
      "badge": "Vệ sinh Môi trường",
      "title": "Tình huống 1: Tối ưu lộ trình xe quét rác đường phố bằng chu trình Euler",
      "scenario": "Công ty môi trường đô thị phụ trách quét rác các tuyến phố trong một khu đô thị mới gồm 6 ngã tư giao nhau. Xe quét rác xuất phát từ gara $A$, cần quét qua tất cả các đoạn đường đúng một lần rồi quay về gara để tiết kiệm nhiên liệu.",
      "analysis": "Mỗi ngã tư là một đỉnh, mỗi đoạn đường phố là một cạnh. Lộ trình mong muốn đi qua mọi đoạn đường đúng 1 lần và quay về gara chính là một **chu trình Euler**. Kĩ sư kiểm tra bậc của 6 ngã tư: ngã tư $A$ có bậc 4, ngã tư $B$ có bậc 4, ngã tư $C$ có bậc 2, ngã tư $D$ có bậc 4, ngã tư $E$ có bậc 2, ngã tư $F$ có bậc 4. Tất cả các đỉnh đều có bậc chẵn và mạng lưới liên thông.",
      "solution": "Theo định lí Euler, đồ thị chắc chắn tồn tại chu trình Euler. Áp dụng thuật toán Fleury, kĩ sư vạch ra lộ trình liên tục khép kín $A \\to B \\to C \\to D \\to F \\to B \\to D \\to E \\to F \\to A$ đi qua đúng 9 đoạn đường mà không bị lặp lại bất kì đoạn nào, giảm $40\\%$ chi phí nhiên liệu so với việc chạy ngẫu nhiên.",
      "takeaway": "Điều kiện tất cả các đỉnh bậc chẵn là tiêu chuẩn vàng để thiết lập lộ trình quét dọn, khử khuẩn đường phố tối ưu."
    },
    {
      "badge": "Quản lí Du lịch",
      "title": "Tình huống 2: Thiết kế tour du lịch ghé thăm 5 di sản văn hóa miền Trung bằng chu trình Hamilton",
      "scenario": "Công ty lữ hành thiết kế tour du lịch cao cấp ghé thăm 5 tỉnh miền Trung: Huế, Đà Nẵng, Hội An, Mỹ Sơn, Phong Nha. Du khách yêu cầu mỗi điểm di sản chỉ ghé thăm đúng 1 lần rồi trở về điểm đón ban đầu tại Huế.",
      "analysis": "Mỗi điểm du lịch là một đỉnh. Yêu cầu ghé thăm mỗi đỉnh đúng một lần và trở về điểm ban đầu chính là tìm một **chu trình Hamilton**. Đồ thị gồm $n = 5$ điểm du lịch liên thông với các tuyến đường cao tốc và quốc lộ kết nối.",
      "solution": "Kiểm tra điều kiện đủ Dirac: Đồ thị kết nối dày đặc, mỗi điểm đều có đường bay hoặc cao tốc nối với ít nhất $n/2 = 2{,}5$ điểm khác (bậc $\\ge 3$). Đồ thị thỏa mãn Dirac và có chu trình Hamilton: $\\text{Huế} \\to \\text{Phong Nha} \\to \\text{Đà Nẵng} \\to \\text{Mỹ Sơn} \\to \\text{Hội An} \\to \\text{Huế}$. Tour du lịch diễn ra hoàn hảo không có ngày nào bị lặp lại điểm đến.",
      "takeaway": "Bài toán chu trình Hamilton giải quyết bài toán hành trình du lịch tối ưu, phân biệt rạch ròi với bài toán Euler chỉ quan tâm đến các con đường."
    }
  ],
  "10": [
    {
      "badge": "Định vị Dẫn đường",
      "title": "Tình huống 1: Thuật toán tìm đường ngắn nhất trên ứng dụng Google Maps bằng Dijkstra",
      "scenario": "Một tài xế công nghệ cần giao một đơn hàng khẩn cấp từ kho hàng $S$ đến bệnh viện $T$. Mạng lưới giao thông khu vực có 6 nút giao $A, B, C, D$ với độ dài và thời gian lưu thông từng đoạn đường được cập nhật trực tiếp.",
      "analysis": "Mạng lưới được biểu diễn bằng đồ thị có trọng số thời gian di chuyển (phút): $S-A (4\\text{p}), S-B (2\\text{p}), B-A (1\\text{p}), B-D (5\\text{p}), A-C (3\\text{p}), C-T (2\\text{p}), D-T (1\\text{p}), C-D (2\\text{p})$. Áp dụng thuật toán Dijkstra từng bước:\n- Khởi tạo: $d(S)=0$, các đỉnh khác $\\infty$.\n- Từ $S$: cập nhật $d(A)=4, d(B)=2$. Chốt $B$ ($d=2$).\n- Từ $B$: cập nhật $d(A) = \\min(4, 2+1) = 3$, $d(D) = 2+5 = 7$. Chốt $A$ ($d=3$).\n- Từ $A$: cập nhật $d(C) = 3+3 = 6$. Chốt $C$ ($d=6$).\n- Từ $C$: cập nhật $d(D) = \\min(7, 6+2) = 7$, $d(T) = 6+2 = 8$. Chốt $D$ ($d=7$).\n- Từ $D$: cập nhật $d(T) = \\min(8, 7+1) = 8$. Chốt $T$ ($d=8$).",
      "solution": "Truy vết đường đi ngắn nhất: $T \\leftarrow C \\leftarrow A \\leftarrow B \\leftarrow S$. Lộ trình tối ưu là $S \\to B \\to A \\to C \\to T$ với tổng thời gian di chuyển tối thiểu là 8 phút (nhanh hơn đi đường thẳng $S \\to A \\to C \\to T$ mất 9 phút).",
      "takeaway": "Chiến lược gắn nhãn tham lam của thuật toán Dijkstra đảm bảo luôn tìm ra lộ trình ngắn nhất tuyệt đối trên mạng lưới có trọng số không âm."
    },
    {
      "badge": "Dịch vụ Bưu chính",
      "title": "Tình huống 2: Giải bài toán Người đưa thư bưu điện trên khu phố có 2 ngõ cụt",
      "scenario": "Một nhân viên bưu tá bưu điện cần phát báo cho tất cả các hộ dân trên một cụm dân cư. Tổng chiều dài tất cả các con đường trên cụm là $18\\text{ km}$. Bản đồ khu phố có đúng 2 nút giao bậc 3 (đỉnh lẻ $X$ và $Y$), các nút còn lại đều có bậc chẵn. Đoạn đường ngắn nhất nối giữa $X$ và $Y$ là $2{,}5\\text{ km}$.",
      "analysis": "Đây là bài toán Người đưa thư Trung Hoa (Chinese Postman Problem). Vì có 2 đỉnh bậc lẻ $X$ và $Y$, đồ thị không có chu trình Euler khép kín. Bưu tá phải đi qua mọi tuyến đường ít nhất 1 lần (18 km), và để quay về bưu điện khép kín hành trình, bưu tá bắt buộc phải đi lặp lại một số đoạn đường nối giữa hai đỉnh lẻ $X$ và $Y$.",
      "solution": "Để tổng quãng đường là ngắn nhất, bưu tá chọn đi lặp lại đúng tuyến đường ngắn nhất nối giữa $X$ và $Y$ ($2{,}5\\text{ km}$). Tổng chiều dài hành trình tối ưu là: $$L_{\\min} = 18\\text{ km} + 2{,}5\\text{ km} = 20{,}5\\text{ km}$$ Tiết kiệm được nhiều cây số so với việc chọn ngẫu nhiên các đoạn đường quay đầu.",
      "takeaway": "Bài toán Người đưa thư kết hợp tinh hoa của lí thuyết Euler và thuật toán đường đi ngắn nhất Dijkstra để tối ưu hóa quãng đường giao nhận."
    }
  ],
  "11": [
    {
      "badge": "Cơ khí Chế tạo",
      "title": "Tình huống 1: Dựng 3 hình chiếu vuông góc của một gá đỡ ổ trục chữ L có lỗ khoét tròn",
      "scenario": "Kĩ sư thiết kế một chi tiết gá đỡ ổ trục bằng thép hình chữ L có kích thước dài 60 mm, rộng 40 mm, cao 50 mm, trên cánh đứng có khoét một lỗ tròn xuyên suốt đường kính 20 mm.",
      "analysis": "Để thợ gia công đọc hiểu chính xác hình dạng, kĩ sư phải chọn các hướng chiếu vuông góc chuẩn xác:\n- Hình chiếu đứng (từ trước): Thấy rõ hình dạng chữ L, chiều dài 60 mm, chiều cao 50 mm. Lỗ khoét tròn nhìn thấy dưới dạng hình tròn $\\varnothing 20\\text{ mm}$ ở cánh đứng.\n- Hình chiếu bằng (từ trên xuống): Thấy hình chữ nhật $60 \\times 40\\text{ mm}$ thể hiện đế chữ L và phần gờ; lỗ tròn chiếu xuống thành 2 nét đứt mảnh biểu diễn cạnh khuất của lỗ trụ.\n- Hình chiếu cạnh (từ trái sang): Thấy hình chữ nhật $40 \\times 50\\text{ mm}$; lỗ tròn chiếu sang thành 2 nét đứt mảnh song song và có 1 nét gạch dài chấm mảnh ở giữa làm đường tâm lỗ.",
      "solution": "Ba hình chiếu được bố trí đúng quan hệ dóng: hình chiếu bằng ngay dưới hình chiếu đứng, hình chiếu cạnh ngay bên phải hình chiếu đứng. Thợ tiện phay nhìn vào bản vẽ gia công chính xác từng milimét.",
      "takeaway": "Ba hình chiếu vuông góc là ngôn ngữ chuẩn mực thể hiện đầy đủ cả phần thấy lẫn phần khuất bên trong của chi tiết máy."
    },
    {
      "badge": "Kiến trúc & Xây dựng",
      "title": "Tình huống 2: Vẽ hình chiếu trục đo vuông góc đều của bậc thềm tam cấp ngôi nhà",
      "scenario": "Kiến trúc sư cần vẽ hình phối cảnh trực quan không gian 3D của bậc thềm tam cấp trước sảnh biệt thự để khách hàng dễ hình dung độ cao và độ vươn của bậc thềm.",
      "analysis": "Sử dụng hình chiếu trục đo vuông góc đều. Bắt đầu từ gốc $O'$, vẽ 3 trục đo $O'x', O'y', O'z'$ lệch nhau góc $120^circ$ ($O'z'$ thẳng đứng, $O'x'$ hướng sang trái chếch $30^circ$ so với phương ngang, $O'y'$ hướng sang phải chếch $30^circ$). Hệ số biến dạng quy ước lấy $p = q = r = 1$.",
      "solution": "Dựng khối hộp bao quanh bậc thềm theo 3 kích thước dài $1{,}5\\text{ m}$, rộng $0{,}9\\text{ m}$, cao $0{,}45\\text{ m}$. Chia chiều cao làm 3 bậc đều nhau ($15\\text{ cm}$/bậc) và chiều rộng làm 3 bậc ($30\\text{ cm}$/bậc). Kẻ các đường song song với trục đo, tẩy nét thừa và tô đậm cạnh thấy, tạo ra hình ảnh 3D nổi khối cực kì chân thực.",
      "takeaway": "Hình chiếu trục đo vuông góc đều với quy ước hệ số biến dạng bằng 1 giúp người vẽ dựng nhanh khối 3D trực quan từ các kích thước thật."
    }
  ],
  "12": [
    {
      "badge": "Tiêu chuẩn Công nghiệp",
      "title": "Tình huống 1: Xử lí lỗi sai sót kí hiệu đường kính và thiếu đường dóng trên bản vẽ trục cơ khí",
      "scenario": "Một bản vẽ gia công trục truyền động cơ khí gửi xuống xưởng tiện bị quản đốc phân xưởng từ chối vì ghi kích thước lỗ khoan là \"20\" (không có kí hiệu) và đường dóng kích thước cắt đè lên đường bao thấy.",
      "analysis": "Bản vẽ vi phạm tiêu chuẩn TCVN:\n1. Con số \"20\" đứng trơ trọi không phân biệt được là bán kính, đường kính hay độ dày vát mép. Theo quy chuẩn, kích thước đường kính hình tròn bắt buộc phải có kí hiệu $\\varnothing$ đặt trước số: $\\varnothing 20$.\n2. Đường dóng phải vẽ bằng nét liền mảnh, nhô vượt qua đầu mũi tên của đường kích thước $2 - 4\\text{ mm}$, và hạn chế tối đa việc cắt ngang qua các đường nét liền đậm của chi tiết.",
      "solution": "Kĩ sư sửa lại bản vẽ: thêm kí hiệu $\\varnothing 20$, kéo dài đường dóng vuông góc thêm 3 mm, chuyển đường kích thước ra bên ngoài chi tiết. Bản vẽ được duyệt và chi tiết tiện xong lắp ráp khít khao vào vòng bi.",
      "takeaway": "Tuân thủ nghiêm ngặt các quy tắc ghi kích thước và kí hiệu $\\varnothing, R$ là yếu tố sống còn để đảm bảo an toàn và chính xác trong gia công cơ khí."
    },
    {
      "badge": "Quản trị Hồ sơ Kĩ thuật",
      "title": "Tình huống 2: Thiết lập khung bản vẽ và khung tên khổ giấy A3 cho đồ án tốt nghiệp kĩ sư",
      "scenario": "Sinh viên ngành kĩ thuật cơ điện tử hoàn thiện tập bản vẽ thiết kế máy đóng nắp chai tự động trên khổ giấy A3 để nộp hội đồng bảo vệ đồ án tốt nghiệp.",
      "analysis": "Khổ giấy A3 tiêu chuẩn có kích thước $420 \\times 297\\text{ mm}$. Quy định chừa lề đóng gáy hồ sơ:\n- Mép trái chừa rộng $20\\text{ mm}$ để bấm lỗ đóng gáy tập đồ án mà không che khuất hình vẽ.\n- Ba mép còn lại (trên, dưới, phải) kẻ cách mép giấy đúng $10\\text{ mm}$ bằng nét liền đậm $0{,}7\\text{ mm}$.\n- Khung tên có kích thước chuẩn $140 \\times 32\\text{ mm}$ đặt cố định ở góc dưới cùng bên phải của khung bản vẽ.",
      "solution": "Sinh viên điền đầy đủ thông tin vào khung tên: Tên chi tiết (\"Trục cam chia độ\"), Vật liệu (\"Thép C45\"), Tỉ lệ (\"1:1\"), Người vẽ, Người duyệt, Đơn vị đào tạo. Tập bản vẽ đóng gáy trang trọng, đạt điểm tối đa về chuẩn hóa hồ sơ kĩ thuật.",
      "takeaway": "Khung bản vẽ và khung tên là giấy chứng sinh pháp lí của sản phẩm kĩ thuật, đảm bảo tính chuyên nghiệp và khả năng lưu trữ, truy xuất lâu dài."
    }
  ]
};