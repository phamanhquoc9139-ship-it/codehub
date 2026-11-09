module.exports = {
  "1": [
    {
      "icon": "fa-solid fa-atom",
      "title": "Định luật Vạn vật hấp dẫn",
      "desc": "Mọi vật có khối lượng đều hút nhau bằng lực tỉ lệ thuận với tích khối lượng và tỉ lệ nghịch với bình phương khoảng cách.",
      "points": [
        "Công thức Newton: $F = G \\frac{m_1 m_2}{r^2}$ với $G \\approx 6{,}67 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$.",
        "Lực tương tác trực đối: $\\vec{F}_{12} = -\\vec{F}_{21}$, cùng phương đường nối tâm, ngược chiều, cùng độ lớn.",
        "Quy luật khoảng cách: Tăng cự li $k$ lần thì lực hút suy giảm $k^2$ lần.",
        "Hằng số $G$ được xác định thực nghiệm chính xác qua thí nghiệm cân xoắn Cavendish năm 1798."
      ]
    },
    {
      "icon": "fa-solid fa-weight-hanging",
      "title": "Trọng lực và Gia tốc g",
      "desc": "Trọng lực là lực hấp dẫn của Trái Đất tác dụng lên vật thể, làm biến thiên gia tốc theo độ cao và vĩ độ.",
      "points": [
        "Trọng lực gần bề mặt: $P = mg$, với $g_0 = \\frac{GM}{R^2} \\approx 9{,}8 \\text{ m/s}^2$.",
        "Biến thiên theo độ cao: $g = \\frac{GM}{(R+h)^2} = g_0 \\left(\\frac{R}{R+h}\\right)^2$, càng lên cao gia tốc $g$ càng giảm.",
        "Biến thiên theo vĩ độ: Cực Bắc/Nam có $g \\approx 9{,}83 \\text{ m/s}^2$, xích đạo có $g \\approx 9{,}78 \\text{ m/s}^2$ do dạng dẹt và tự quay.",
        "Trạng thái không trọng lượng: Xảy ra khi tàu vũ trụ rơi tự do hoặc quay quanh Trái Đất với gia tốc $a = g$."
      ]
    },
    {
      "icon": "fa-solid fa-satellite",
      "title": "Vệ tinh & Quỹ đạo tròn",
      "desc": "Lực hấp dẫn đóng vai trò lực hướng tâm duy trì chuyển động bay tròn của vệ tinh quanh Trái Đất.",
      "points": [
        "Cân bằng hướng tâm: $F_{hd} = F_{ht} \\iff G\\frac{Mm}{r^2} = m\\frac{v^2}{r} \\implies v = \\sqrt{\\frac{GM}{r}}$.",
        "Vận tốc vũ trụ cấp 1: $v_1 = \\sqrt{gR} \\approx 7{,}9 \\text{ km/s}$ để bay sát mặt đất theo đường tròn.",
        "Chu kì quỹ đạo: $T = 2\\pi \\sqrt{\\frac{r^3}{GM}}$, bán kính càng lớn thì chu kì quay càng dài (Kepler III).",
        "Quỹ đạo LEO ($200-2000\\text{ km}$, $T \\approx 90\\text{ phút}$) và Quỹ đạo địa tĩnh GEO ($35.786\\text{ km}$, $T = 24\\text{h}$)."
      ]
    },
    {
      "icon": "fa-solid fa-mountain-sun",
      "title": "Thí nghiệm Đại bác Newton",
      "desc": "Mô hình tư duy giải thích quá trình chuyển tiếp từ chuyển động ném ngang sang quỹ đạo vệ tinh khép kín.",
      "points": [
        "Bắn tốc độ nhỏ ($v < v_1$): Đạn rơi theo đường cong parabol chạm mặt đất ở các cự li xa dần.",
        "Bắn đúng $v = v_1$ ($7{,}9\\text{ km/s}$): Quỹ đạo cong trùng độ cong Trái Đất, vật bay quanh Trái Đất vĩnh viễn.",
        "Bắn $v_1 < v < v_2$: Quỹ đạo dãn ra thành hình elip nhận tâm Trái Đất làm một tiêu điểm.",
        "Bắn đạt $v \\ge v_2 = 11{,}2\\text{ km/s}$: Thoát khỏi sức hút Trái Đất, du hành không gian liên hành tinh."
      ]
    }
  ],
  "2": [
    {
      "icon": "fa-solid fa-compass-drafting",
      "title": "Vector Cường độ trường g",
      "desc": "Đại lượng đặc trưng cho trường hấp dẫn về phương diện tác dụng lực tại mỗi điểm trong không gian.",
      "points": [
        "Định nghĩa: $\\vec{g} = \\frac{\\vec{F}}{m}$, đơn vị SI là $\\text{N/kg}$ hoặc $\\text{m/s}^2$.",
        "Khối cầu đồng tính: $g = \\frac{GM}{r^2}$ với mọi điểm bên ngoài $r \\ge R$.",
        "Hướng của vector: Luôn có phương nối tâm và chiều hướng về tâm khối lượng nguồn hấp dẫn.",
        "Ý nghĩa: Mọi vật thử đặt tại cùng một điểm đều rơi tự do với cùng gia tốc $\\vec{g}$."
      ]
    },
    {
      "icon": "fa-solid fa-arrows-split-up-and-left",
      "title": "Chồng chất Trường hấp dẫn",
      "desc": "Khi có nhiều khối lượng nguồn, vector cường độ trường tổng hợp bằng tổng hình học các vector thành phần.",
      "points": [
        "Công thức nguyên lí chồng chất: $\\vec{g} = \\vec{g}_1 + \\vec{g}_2 + \\dots + \\vec{g}_n$.",
        "Tổng hợp hai nguồn cùng hướng: $g = g_1 + g_2$; ngược hướng: $g = |g_1 - g_2|$.",
        "Tổng hợp vuông góc: $g = \\sqrt{g_1^2 + g_2^2}$; góc $\\alpha$: $g = \\sqrt{g_1^2 + g_2^2 + 2g_1g_2\\cos\\alpha}$.",
        "Điểm triệt tiêu trường ($g = 0$): Nằm giữa hai thiên thể theo tỉ lệ khoảng cách $\\frac{r_1}{r_2} = \\sqrt{\\frac{M_1}{M_2}}$."
      ]
    },
    {
      "icon": "fa-solid fa-lines-leaning",
      "title": "Đường sức Trường hấp dẫn",
      "desc": "Mô hình trực quan biểu diễn hướng của vector trường và độ mạnh yếu của trường hấp dẫn.",
      "points": [
        "Định nghĩa: Tiếp tuyến tại mỗi điểm trên đường sức trùng với phương vector $\\vec{g}$.",
        "Vật cầu cô lập: Các đường sức là các tia thẳng hướng xuyên tâm tụ về tâm vật thể.",
        "Mật độ đường sức: Nơi trường mạnh thì đường sức dày đặc, nơi trường yếu thì đường sức thưa thớt.",
        "Trường đều gần mặt đất: Trong không gian hẹp gần mặt sàn, các đường sức song song và cách đều."
      ]
    },
    {
      "icon": "fa-solid fa-calculator",
      "title": "Quy tắc Tính toán & Đổi biến",
      "desc": "Kĩ năng quan trọng trong xử lí bài toán trường hấp dẫn của Trái Đất và các thiên thể trong vũ trụ.",
      "points": [
        "Khoảng cách đến tâm: Luôn nhớ $r = R + h$ (khoảng cách đến tâm bằng bán kính cộng độ cao).",
        "So sánh tỉ lệ với mặt đất: $\\frac{g}{g_0} = \\left(\\frac{R}{R+h}\\right)^2$.",
        "Xấp xỉ độ cao nhỏ: Khi $h \\ll R$ thì $g \\approx g_0 (1 - 2h/R)$, lên 1 km giảm khoảng $0{,}03\\%$.",
        "Quan hệ khối lượng & thể tích: $M = \\rho V = \\rho \\cdot \\frac{4}{3}\\pi R^3 \\implies g_0 = \\frac{4}{3}\\pi G \\rho R$."
      ]
    }
  ],
  "3": [
    {
      "icon": "fa-solid fa-bolt",
      "title": "Thế hấp dẫn φ",
      "desc": "Đại lượng đặc trưng cho trường hấp dẫn về phương diện năng lượng tại mỗi điểm trong không gian.",
      "points": [
        "Định nghĩa: $\\varphi = \\frac{W_t}{m}$, đơn vị là $\\text{J/kg}$ hoặc $\\text{m}^2/\\text{s}^2$.",
        "Công thức mốc vô cực: $\\varphi = -\\frac{GM}{r} = -\\frac{GM}{R+h}$ (luôn có giá trị âm).",
        "Ý nghĩa dấu âm: Lực hấp dẫn là lực hút, kéo vật từ vô cực về sinh công dương nên thế năng âm.",
        "Giếng thế hấp dẫn: Càng tiến gần khối lượng tâm ($r$ nhỏ) thì thế hấp dẫn càng âm sâu."
      ]
    },
    {
      "icon": "fa-solid fa-gauge-high",
      "title": "Thế năng & Công trọng lực",
      "desc": "Năng lượng tương tác hấp dẫn và công cơ học khi dịch chuyển vật thể trong không gian trường thế.",
      "points": [
        "Công thức thế năng: $W_t = m\\varphi = -\\frac{GMm}{r}$ (chọn mốc ở vô cực).",
        "Công của lực hấp dẫn: $A_{12} = W_{t1} - W_{t2} = GMm \\left(\\frac{1}{r_2} - \\frac{1}{r_1}\\right)$.",
        "Tính chất lực thế: Công chỉ phụ thuộc tọa độ điểm đầu và cuối, hoàn toàn không phụ thuộc đường đi.",
        "Quy ước công: Rơi về tâm ($r_1 > r_2$) thì $A > 0$; phóng ra xa ($r_1 < r_2$) thì $A < 0$."
      ]
    },
    {
      "icon": "fa-solid fa-shield-halved",
      "title": "Bảo toàn Cơ năng Vũ trụ",
      "desc": "Tổng động năng và thế năng hấp dẫn của vật thể chuyển động trong chân không luôn được bảo toàn.",
      "points": [
        "Phương trình bảo toàn: $W = \\frac{1}{2}mv^2 - \\frac{GMm}{r} = \\text{hằng số}$.",
        "Hệ liên kết ($W < 0$): Vật bị giam trong giếng thế, bay theo quỹ đạo elip hoặc tròn kín.",
        "Trạng thái tới hạn ($W = 0$): Vận tốc vũ trụ cấp 2 $v_2 = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2}v_1 \\approx 11{,}2\\text{ km/s}$.",
        "Trạng thái tự do ($W > 0$): Vật thoát ly bay ra vô cực theo quỹ đạo hyperbol với vận tốc dư $v_\\infty > 0$."
      ]
    },
    {
      "icon": "fa-solid fa-arrows-to-circle",
      "title": "Mặt Đẳng thế Hấp dẫn",
      "desc": "Tập hợp các điểm trong không gian có cùng giá trị thế hấp dẫn, vuông góc với đường sức.",
      "points": [
        "Hình dạng xung quanh vật cầu: Là các mặt cầu đồng tâm có tâm trùng với tâm khối lượng nguồn.",
        "Quan hệ với đường sức: Các mặt đẳng thế luôn vuông góc với các đường sức trường hấp dẫn tại mọi điểm.",
        "Công dịch chuyển: Dịch chuyển vật thử trên cùng một mặt đẳng thế thì công lực hấp dẫn bằng 0.",
        "Khoảng cách giữa các mặt: Càng gần nguồn, các mặt đẳng thế cách đều giá trị thế càng sít lại gần nhau."
      ]
    }
  ],
  "4": [
    {
      "icon": "fa-solid fa-tower-broadcast",
      "title": "Biến điệu Sóng mang",
      "desc": "Quá trình trộn tín hiệu âm tần mang thông tin vào sóng điện từ cao tần để bức xạ truyền xa hiệu quả.",
      "points": [
        "Lý do cần biến điệu: Tín hiệu âm tần ($20\\text{Hz}-20\\text{kHz}$) có bước sóng quá dài, anten thực tế không thể đáp ứng ($L \\approx \\lambda/4$).",
        "Sóng mang cao tần: Mang năng lượng lớn, ít bị tầng khí quyển hấp thụ, kích thước anten nhỏ gọn.",
        "Tránh giao thoa: Cho phép nhiều đài phát thanh hoạt động đồng thời trên các kênh tần số tách biệt.",
        "Phân loại chính: Biến điệu biên độ (AM), Biến điệu tần số (FM) và Biến điệu pha (PM)."
      ]
    },
    {
      "icon": "fa-solid fa-wave-square",
      "title": "Biến điệu Biên độ (AM)",
      "desc": "Làm cho biên độ sóng mang cao tần biến thiên theo tín hiệu âm thanh trong khi tần số giữ nguyên.",
      "points": [
        "Phương trình biên độ: $U(t) = U_c [1 + m \\cos(2\\pi f_m t)]$, với hệ số điều chế $m \\le 1$.",
        "Băng thông AM: $B_{AM} = 2 f_{m,\\max}$ (chiếm băng thông hẹp, khoảng $10 - 20 \\text{ kHz}$).",
        "Ưu điểm: Máy phát và máy thu đơn giản, sóng trung/dài phản xạ tầng điện li truyền xa qua đường chân trời.",
        "Nhược điểm: Rất dễ bị can nhiễu biên độ bởi sấm sét, động cơ xe máy, chất lượng âm thanh hạn chế."
      ]
    },
    {
      "icon": "fa-solid fa-sliders",
      "title": "Biến điệu Tần số (FM)",
      "desc": "Làm cho tần số sóng mang cao tần biến thiên theo tín hiệu âm thanh trong khi biên độ giữ nguyên.",
      "points": [
        "Độ lệch tần số: $f(t) = f_c + \\Delta f \\cos(2\\pi f_m t)$, với $\\Delta f$ là độ lệch tần số cực đại.",
        "Băng thông FM (Carson): $B_{FM} \\approx 2(\\Delta f + f_{m,\\max}) \\approx 150 - 200 \\text{ kHz}$.",
        "Ưu điểm vượt trội: Chống nhiễu cực tốt vì mạch thu dễ dàng dùng mạch cắt biên độ để triệt tiêu tạp âm.",
        "Chất lượng âm thanh: Đạt chuẩn âm thanh trung thực cao (Hi-Fi, Stereo), dải tần phát thanh $88 - 108 \\text{ MHz}$."
      ]
    },
    {
      "icon": "fa-solid fa-radio",
      "title": "Hệ thống Thu Phát Vô tuyến",
      "desc": "Cấu trúc khối chức năng của trạm phát thanh và máy thu radio tiêu chuẩn.",
      "points": [
        "Khối máy phát: Micro $\\to$ Khuếch đại âm tần $\\to$ Dao động cao tần $\\to$ Mạch biến điệu $\\to$ Khuếch đại cao tần $\\to$ Anten phát.",
        "Khối máy thu: Anten thu $\\to$ Mạch chọn sóng (khung LC) $\\to$ Khuếch đại cao tần $\\to$ Mạch tách sóng $\\to$ Khuếch đại âm tần $\\to$ Loa.",
        "Mạch chọn sóng: Tận dụng hiện tượng cộng hưởng điện từ $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$ để bắt đúng đài.",
        "Mạch tách sóng: Dùng diode và tụ lọc để gạt bỏ sóng mang cao tần, giữ lại tín hiệu âm tần đưa ra loa."
      ]
    }
  ],
  "5": [
    {
      "icon": "fa-solid fa-wave-square",
      "title": "Tín hiệu Tương tự & Số",
      "desc": "Bản chất vật lí đối chiếu giữa tín hiệu liên tục (Analog) và chuỗi xung nhị phân rời rạc (Digital).",
      "points": [
        "Tín hiệu tương tự (Analog): Liên tục theo thời gian và biên độ, dễ bị méo mó tích lũy khi qua nhiều trạm lặp.",
        "Tín hiệu số (Digital): Rời rạc, chỉ nhận hai mức điện áp logic quy ước là bit 0 và bit 1.",
        "Tái tạo hoàn hảo: Các trạm lặp số (regenerator) phục hồi nguyên vẹn xung vuông chuẩn, loại bỏ tạp âm tích tụ.",
        "Khả năng tích hợp: Âm thanh, video, văn bản đều quy về dòng bit đồng nhất, dễ dàng mã hóa và bảo mật."
      ]
    },
    {
      "icon": "fa-solid fa-microchip",
      "title": "Quá trình ADC & Định lí Nyquist",
      "desc": "Quy trình 3 bước chuẩn hóa biến đổi tín hiệu tương tự sang tín hiệu số qua PCM.",
      "points": [
        "Bước 1 - Lấy mẫu (Sampling): Đo biên độ ở các mốc thời gian cách đều $T_s = 1/f_s$.",
        "Định lí Nyquist-Shannon: Tần số lấy mẫu phải thỏa mãn $f_s \\ge 2 f_{\\max}$ để không bị chồng phổ (aliasing).",
        "Bước 2 - Lượng tử hóa (Quantization): Làm tròn giá trị đo về một trong $2^n$ mức bậc thang cố định.",
        "Bước 3 - Mã hóa (Encoding): Biến đổi chỉ số mức lượng tử thành chuỗi nhị phân $n$ bit."
      ]
    },
    {
      "icon": "fa-solid fa-compact-disc",
      "title": "Thông số Chuẩn & Tốc độ Bit",
      "desc": "Các đại lượng đặc trưng cho chất lượng và dung lượng của luồng dữ liệu số.",
      "points": [
        "Nhiễu lượng tử hóa: Chênh lệch giữa tín hiệu thực và mức làm tròn, giảm dần khi tăng số bit $n$.",
        "Chuẩn âm thanh CD: Lấy mẫu $f_s = 44{,}1 \\text{ kHz}$, độ sâu $16 \\text{ bit}$, âm thanh 2 kênh stereo.",
        "Tốc độ bit (Bitrate): $R = f_s \\times n \\times c = 44.100 \\times 16 \\times 2 \\approx 1{,}411 \\text{ Mbps}$.",
        "Khôi phục tín hiệu (DAC): Dùng mạch DAC giải mã thành điện áp bậc thang và lọc thông thấp để tái tạo âm thanh."
      ]
    },
    {
      "icon": "fa-solid fa-network-wired",
      "title": "Ưu thế Truyền dẫn Kĩ thuật số",
      "desc": "Tại sao toàn bộ mạng viễn thông toàn cầu chuyển dịch hoàn toàn sang kĩ thuật số hiện đại.",
      "points": [
        "Nén dữ liệu hiệu suất cao: Nén có tổn hao (MP3, H.264) và không tổn hao (FLAC) giúp giảm băng thông khổng lồ.",
        "Mã hóa chống sai: Thêm bit kiểm tra chẵn lẻ (parity, CRC) để phát hiện và tự động sửa lỗi bit trên đường truyền.",
        "Mật mã an toàn: Thuật toán mã hóa hiện đại bảo vệ thông tin cá nhân và giao dịch tài chính.",
        "Lưu trữ phi suy hao: Dữ liệu trên ổ cứng SSD, thẻ nhớ không bị lão hóa chất lượng theo số lần đọc/sao chép."
      ]
    }
  ],
  "6": [
    {
      "icon": "fa-solid fa-network-wired",
      "title": "Môi trường Truyền dẫn",
      "desc": "Các kênh truyền vật lí có dây và không dây được ứng dụng trong mạng viễn thông hiện đại.",
      "points": [
        "Cáp xoắn đôi (Twisted Pair): Các cặp dây đồng xoắn chặt triệt tiêu nhiễu chéo, dùng trong mạng LAN cự li < 100m.",
        "Cáp đồng trục (Coaxial): Lõi đồng bọc lớp lưới kim loại chống nhiễu, dùng trong truyền hình cáp và đường anten.",
        "Cáp sợi quang (Optical Fiber): Truyền xung ánh sáng bằng phản xạ toàn phần trong lõi thủy tinh, cự li hàng trăm km.",
        "Sóng vô tuyến không dây: Lan truyền sóng điện từ trong khí quyển và chân không (vệ tinh, vi ba, di động 4G/5G)."
      ]
    },
    {
      "icon": "fa-solid fa-chart-line-down",
      "title": "Bản chất Suy giảm Năng lượng",
      "desc": "Sự tiêu hao công suất của tín hiệu khi truyền dọc theo chiều dài môi trường truyền dẫn.",
      "points": [
        "Suy giảm trong dây kim loại: Điện trở ruột đồng tỏa nhiệt Joule $I^2 R$ và rò rỉ điện môi qua vỏ cách điện.",
        "Suy giảm trong sợi quang: Tán xạ ánh sáng Rayleigh do cấu trúc phân tử và hấp thụ của tạp chất ion trong thủy tinh.",
        "Suy hao vô tuyến: Tổn hao trong không gian tự do tỉ lệ với $r^2$, hấp thụ bởi hơi nước, mưa, sương mù.",
        "Độ suy giảm tổng thể: Làm giảm biên độ xung, giảm tỉ số tín hiệu trên tạp âm (SNR), gây lỗi bit."
      ]
    },
    {
      "icon": "fa-solid fa-square-root-variable",
      "title": "Đơn vị Decibel (dB, dB/km, dBm)",
      "desc": "Đại lượng logarit chuẩn hóa để tính toán suy giảm và khuếch đại công suất viễn thông.",
      "points": [
        "Công thức độ suy giảm: $A_{\\text{dB}} = 10 \\log_{10} \\left(\\frac{P_{\\text{vào}}}{P_{\\text{ra}}}\\right)$.",
        "Quy tắc nhẩm nhanh: Giảm một nửa công suất $\\implies 3 \\text{ dB}$; giảm 10 lần $\\implies 10 \\text{ dB}$; giảm 100 lần $\\implies 20 \\text{ dB}$.",
        "Hệ số suy giảm: $\\alpha = A_{\\text{dB}} / L$ (đơn vị dB/km). Sợi quang $1550\\text{ nm}$ có $\\alpha \\approx 0{,}2 \\text{ dB/km}$.",
        "Công suất tuyệt đối theo dBm: $P_{\\text{dBm}} = 10 \\log_{10} \\left(\\frac{P}{1 \\text{ mW}}\\right)$, với $1\\text{mW} = 0\\text{dBm}$, $1\\text{W} = 30\\text{dBm}$."
      ]
    },
    {
      "icon": "fa-solid fa-tower-cell",
      "title": "Giải pháp Phục hồi Tín hiệu",
      "desc": "Các kĩ thuật bảo toàn công suất và nâng cao chất lượng đường truyền viễn thông.",
      "points": [
        "Bộ khuếch đại (Amplifier): Đặt định kì trên đường truyền để nâng công suất tín hiệu tương tự.",
        "Trạm lặp số (Regenerator): Khôi phục lại dạng xung số chuẩn 0/1 ban đầu, loại bỏ hoàn toàn nhiễu tích tụ.",
        "Cửa sổ quang học: Truyền tại bước sóng tối ưu ($1310\\text{ nm}$ và $1550\\text{ nm}$) để đạt suy hao cực tiểu.",
        "Anten định hướng cao: Dùng chảo parabol tập trung chùm sóng vô tuyến truyền thẳng búp sóng hẹp đến đích."
      ]
    }
  ],
  "7": [
    {
      "icon": "fa-solid fa-eye",
      "title": "Điện trở quang LDR",
      "desc": "Linh kiện bán dẫn quang điện có điện trở thay đổi mạnh theo cường độ ánh sáng chiếu tới.",
      "points": [
        "Vật liệu bán dẫn CdS: Hạt tải điện tăng vọt khi photon ánh sáng giải phóng các cặp electron - lỗ trống.",
        "Quy tắc vàng LDR: Cường độ sáng tăng $\\implies$ Điện trở $R_{LDR}$ giảm; Trời tối $\\implies R_{LDR}$ tăng cực lớn.",
        "Giá trị thực tế: Trong bóng tối đạt $100\\text{ k}\\Omega - 10\\text{ M}\\Omega$; khi chiếu sáng mạnh chỉ còn $100\\,\\Omega - vài \\text{ k}\\Omega$.",
        "Ứng dụng phổ biến: Cảm biến bật đèn đường khi trời tối, đồng hồ đo phơi sáng máy ảnh, chuông báo động ngắt tia sáng."
      ]
    },
    {
      "icon": "fa-solid fa-temperature-half",
      "title": "Điện trở nhiệt (Thermistor)",
      "desc": "Linh kiện bán dẫn có điện trở biến thiên nhạy cảm theo nhiệt độ môi trường xung quanh.",
      "points": [
        "Nhiệt điện trở âm NTC: Nhiệt độ tăng $\\implies$ Điện trở giảm (loại thông dụng nhất trong đo lường).",
        "Nhiệt điện trở dương PTC: Nhiệt độ tăng $\\implies$ Điện trở tăng mạnh khi quá ngưỡng nhiệt (dùng bảo vệ quá nhiệt, cầu chì).",
        "Ưu điểm so với nhiệt kế kim loại: Độ nhạy cực kì cao trong dải $-50^\\circ\\text{C}$ đến $150^\\circ\\text{C}$, kích thước nhỏ gọn.",
        "Ứng dụng: Giám sát nhiệt độ pin điện thoại, cảm biến ngắt ấm siêu tốc, điều hòa nhiệt độ, báo cháy sớm."
      ]
    },
    {
      "icon": "fa-solid fa-diagram-project",
      "title": "Mạch Cầu Phân Áp",
      "desc": "Mạch điện biến đổi sự biến thiên điện trở của cảm biến thành tín hiệu điện áp đưa vào mạch xử lí.",
      "points": [
        "Công thức phân áp: $U_{\\text{ra}} = V_s \\frac{R_2}{R_1 + R_2}$ khi hai điện trở mắc nối tiếp dưới nguồn $V_s$.",
        "LDR ở nhánh dưới ($R_2$): Trời tối $\\implies R_2$ tăng $\\implies U_{\\text{ra}}$ tăng (dùng kích hoạt đèn đêm).",
        "LDR ở nhánh trên ($R_1$): Trời sáng $\\implies R_1$ giảm $\\implies U_{\\text{ra}}$ tăng (dùng điều khiển đóng rèm cuốn sáng).",
        "Dùng biến trở làm $R_1$: Cho phép người dùng tùy chỉnh độ nhạy kích hoạt của mạch theo ý muốn."
      ]
    },
    {
      "icon": "fa-solid fa-scale-balanced",
      "title": "Mạch Cầu Wheatstone",
      "desc": "Mạch đo chính xác các biến thiên điện trở cực nhỏ bằng trạng thái cân bằng điện thế hai nhánh.",
      "points": [
        "Cấu trúc cầu: Gồm 4 điện trở tạo thành 2 nhánh phân áp song song nhau dưới cùng một nguồn cấp.",
        "Điều kiện cân bằng: Điện áp giữa hai nhánh bằng 0 khi $\\frac{R_1}{R_2} = \\frac{R_3}{R_4}$.",
        "Đo biến thiên nhỏ: Khi một điện trở (như cảm biến biến dạng strain gauge) đổi nhẹ $\\Delta R$, xuất hiện điện áp lệch cầu.",
        "Ứng dụng: Cân điện tử tiểu li, đo áp suất chính xác cao, cảm biến lực trong công nghiệp tự động hóa."
      ]
    }
  ],
  "8": [
    {
      "icon": "fa-solid fa-microchip",
      "title": "Op-Amp & Chế độ So sánh",
      "desc": "Bộ khuếch đại thuật toán lí tưởng hoạt động như một công tắc so sánh điện áp cực nhạy.",
      "points": [
        "Cấu trúc chân: Đầu vào không đảo ($V_+$), đầu vào đảo ($V_-$), đầu ra ($V_{\\text{out}}$) và hai chân nguồn.",
        "Đặc tính lí tưởng: Độ lợi $A_v \\to \\infty$, trở kháng vào vô cùng lớn ($I_+ = I_- = 0$, không sụt áp cảm biến).",
        "Chế độ so sánh: Nếu $V_+ > V_- \\implies V_{\\text{out}} \\approx +V_{CC}$; nếu $V_+ < V_- \\implies V_{\\text{out}} \\approx 0\\text{ V}$.",
        "Ứng dụng: Quyết định bật/tắt thiết bị dựa trên so sánh điện áp cảm biến với điện áp chuẩn $V_{\\text{ref}}$."
      ]
    },
    {
      "icon": "fa-solid fa-toggle-on",
      "title": "Relay & Diode Dập Xung",
      "desc": "Công tắc điện từ cách li giúp mạch điện áp nhỏ điều khiển an toàn các tải công suất lớn.",
      "points": [
        "Cấu tạo relay: Cuộn hút nam châm điện hút tiếp điểm cơ khí thường mở (NO) và thường đóng (NC).",
        "Cách ly galvanic: Tách biệt hoàn toàn phần điều khiển 5V/9V DC với tải công suất lớn 220V AC.",
        "Hiệu ứng tự cảm: Khi ngắt cuộn cảm relay, sinh suất điện động tự cảm ngược cực lớn $e_{tc} = -L \\frac{di}{dt}$.",
        "Diode dập xung (Flyback): Bắt buộc mắc ngược cực song song với cuộn hút để xả dòng tự cảm, bảo vệ vi mạch."
      ]
    },
    {
      "icon": "fa-solid fa-lightbulb",
      "title": "LED & Trở Hạn Dòng R",
      "desc": "Đi-ốt phát quang và công thức tính toán điện trở nối tiếp bắt buộc để tránh cháy linh kiện.",
      "points": [
        "Thông số LED: Điện áp rơi thuận $U_{LED}$ ($2{,}0\\text{ V}$ LED đỏ/vàng; $3{,}2\\text{ V}$ LED lam/trắng); dòng $I_{LED} \\approx 10-20\\text{ mA}$.",
        "Công thức tính điện trở: $R = \\frac{U_{\\text{ra}} - U_{LED}}{I_{LED}}$ (ôm).",
        "Bảo vệ quá dòng: Nếu không có $R$, dòng điện tăng vọt không kiểm soát sẽ phá hủy lớp tiếp giáp p-n ngay lập tức.",
        "Lựa chọn giá trị chuẩn: Làm tròn lên giá trị điện trở thương mại có sẵn gần nhất (như $220\\,\\Omega, 330\\,\\Omega, 470\\,\\Omega$)."
      ]
    },
    {
      "icon": "fa-solid fa-sliders",
      "title": "Hiệu chuẩn & Phối hợp Tải",
      "desc": "Kĩ thuật cân chỉnh ngưỡng kích hoạt và phối hợp các tầng đệm khuếch đại dòng điện.",
      "points": [
        "Hiệu chuẩn ngưỡng: Dùng biến trở tinh chỉnh $V_{\\text{ref}}$ ở chân đảo $V_-$ theo điều kiện thực tế.",
        "Đệm dòng transistor: Ngõ ra Op-Amp thường cấp dòng bé (< 20mA), cần thêm transistor BJT (C945/2N2222) kích relay.",
        "Đo kiểm điện áp: Dùng đồng hồ vạn năng DMM kiểm tra $V_+$, $V_-$ và $V_{\\text{out}}$ ở cả 2 trạng thái hoạt động.",
        "Chống dao động chập chờn: Sử dụng hồi tiếp dương nhỏ (tạo mạch trễ Schmitt trigger) nếu tải bị rung giật quanh ngưỡng."
      ]
    }
  ],
  "9": [
    {
      "icon": "fa-solid fa-diagram-project",
      "title": "Mô hình Hệ thống Tự động",
      "desc": "Chu trình khép kín 3 khối chuẩn trong mọi ứng dụng điều khiển tự động dùng cảm biến.",
      "points": [
        "Khối cảm nhận (Input): Cảm biến kết hợp cầu phân áp chuyển đổi tín hiệu vật lí thành điện áp $V_{\\text{cb}}$.",
        "Khối xử lí (Control): Op-Amp so sánh $V_{\\text{cb}}$ với $V_{\\text{ref}}$, quyết định trạng thái logic ngõ ra.",
        "Khối chấp hành (Output): Transistor đệm dòng, relay đóng ngắt hoặc còi hú, bóng đèn, van nước.",
        "Đặc điểm nổi bật: Hoạt động tự động 24/7, không cần con người can thiệp trực tiếp."
      ]
    },
    {
      "icon": "fa-solid fa-cloud-moon",
      "title": "Dự án Đèn Tự Bật Đêm",
      "desc": "Mạch tự động kích hoạt chiếu sáng khi trời tối và tự tắt khi trời sáng rạng.",
      "points": [
        "Cấu hình phân áp: $R_1 = 10\\text{ k}\\Omega$ kéo lên nguồn, LDR kéo xuống đất nối vào chân $V_+$.",
        "Trời tối: Điện trở LDR tăng vọt $\\implies V_+ > V_- \\implies$ Op-Amp xuất mức cao.",
        "Kích đóng tải: Mức cao làm transistor dẫn bão hòa, cuộn hút relay đóng tiếp điểm NO bật bóng đèn.",
        "Điều chỉnh ngưỡng: Vặn biến trở $V_{\\text{ref}}$ để chọn đúng thời điểm kích hoạt lúc chạng vạng tối."
      ]
    },
    {
      "icon": "fa-solid fa-fire-burner",
      "title": "Dự án Báo Động Khí Gas",
      "desc": "Mạch cảnh báo nguy cơ hỏa hoạn và rò rỉ khí gas dễ cháy dùng cảm biến MQ-2 và còi Buzzer.",
      "points": [
        "Cảm biến khí MQ-2: Khi có khí gas rò rỉ, điện trở bề mặt giảm mạnh làm điện áp tín hiệu tăng cao.",
        "Kích hoạt còi hú: Điện áp tín hiệu vượt $V_{\\text{ref}} \\implies$ Op-Amp ngõ ra lên cao kích Buzzer phát âm thanh lớn.",
        "Đèn LED chớp đỏ: Báo động thị giác song song với âm thanh để người xung quanh kịp thời xử lí.",
        "An toàn thiết kế: Mạch cảm biến gas phải cách li tuyệt đối với tia lửa điện để tránh kích nổ hỗn hợp khí."
      ]
    },
    {
      "icon": "fa-solid fa-faucet-drip",
      "title": "Vòi Nước Cảm Ứng Hồng Ngoại",
      "desc": "Mạch đóng mở van nước tự động không chạm dùng cặp LED hồng ngoại và photodiode thu.",
      "points": [
        "Nguyên lí phản xạ: LED phát chùm tia hồng ngoại; khi có tay chắn, tia phản xạ dội vào photodiode thu.",
        "Đóng mở van từ: Tín hiệu thu làm điện áp tăng vượt ngưỡng, Op-Amp kích relay mở van điện từ cấp nước.",
        "Tự ngắt khi rút tay: Khi rút tay ra xa, mất tia phản xạ $\\implies$ van lập tức đóng ngắt nước, tránh lãng phí.",
        "Quy tắc an toàn học đường: Toàn bộ mô hình học sinh thực hành chỉ dùng điện áp DC 9V-12V cách ly hoàn toàn."
      ]
    }
  ]
};