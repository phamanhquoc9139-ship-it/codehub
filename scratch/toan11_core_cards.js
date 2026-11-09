module.exports = {
  "1": [
    {
      "icon": "fa-solid fa-shapes",
      "title": "Định nghĩa Phép biến hình",
      "desc": "Quy tắc đặt tương ứng mỗi điểm M trong mặt phẳng với duy nhất một điểm M' xác định.",
      "points": [
        "Kí hiệu: $f(M) = M'$, trong đó $M'$ là ảnh và $M$ là tạo ảnh.",
        "Điều kiện xác định: Mỗi điểm $M$ có đúng một ảnh $M'$, không thiếu và không thừa.",
        "Điểm bất động: Điểm $M$ thỏa mãn $f(M) = M$ được gọi là điểm kép/điểm bất động.",
        "Phép đồng nhất $e$: Biến mọi điểm thành chính nó, mọi điểm đều là điểm bất động."
      ]
    },
    {
      "icon": "fa-solid fa-clone",
      "title": "Ảnh của một Hình học",
      "desc": "Tập hợp tất cả các ảnh f(M) của mọi điểm M thuộc hình H tạo thành hình ảnh f(H).",
      "points": [
        "Kí hiệu tập hợp ảnh: $H' = f(H) = \\{M' = f(M) \\mid M \\in H\\}$.",
        "Phương pháp đa giác: Biến đổi từng đỉnh $A, B, C \\dots \\mapsto A', B', C' \\dots$ rồi nối lại.",
        "Phương pháp đường cong: Biến đổi tọa độ $x = g(x', y'), y = h(x', y')$ rồi thay vào phương trình.",
        "Bảo toàn/biến dạng: Phép biến hình nói chung có thể làm thay đổi hình dáng và diện tích."
      ]
    },
    {
      "icon": "fa-solid fa-arrows-left-right-to-line",
      "title": "Phép Co giãn Trục",
      "desc": "Quy tắc biến đổi tọa độ f(x; y) = (x; ky) với hệ số k > 0 trong mặt phẳng Oxy.",
      "points": [
        "Biểu thức tọa độ: $x' = x$ và $y' = ky$ (giữ nguyên hoành độ, thay đổi tung độ).",
        "Co về trục ($0 < k < 1$): Các điểm bị nén lại gần trục hoành $Ox$.",
        "Giãn xa trục ($k > 1$): Các điểm bị kéo dãn ra xa trục hoành $Ox$.",
        "Biến đường tròn thành elip: Đường tròn $x^2 + y^2 = R^2$ biến thành elip $x'^2 + \\frac{y'^2}{k^2} = R^2$."
      ]
    },
    {
      "icon": "fa-solid fa-laptop-code",
      "title": "Ứng dụng Đồ họa Máy tính",
      "desc": "Nền tảng toán học của xử lí ảnh số, phần mềm CAD và các hiệu ứng biến đổi hình ảnh.",
      "points": [
        "Thu phóng phi đối xứng (Non-uniform scaling): Kéo dãn hình ảnh theo một chiều mong muốn.",
        "Thiết kế font chữ (Typography): Tạo kiểu chữ nét dẹt (condensed) hoặc nét bè (expanded).",
        "Hoạt hình 2D: Tạo hiệu ứng nhân vật nhảy lò xo co lại khi chạm đất và giãn ra khi bật lên.",
        "Xử lí tín hiệu: Nén biên độ sóng dao động trong kĩ thuật âm thanh số."
      ]
    }
  ],
  "2": [
    {
      "icon": "fa-solid fa-arrows-up-down-left-right",
      "title": "Định nghĩa Phép tịnh tiến",
      "desc": "Phép biến hình dời mỗi điểm M thành M' theo một vectơ không đổi u.",
      "points": [
        "Kí hiệu: $T_{\\vec{u}}(M) = M' \\iff \\overrightarrow{MM'} = \\vec{u}$.",
        "Vectơ không: $T_{\\vec{0}}$ là phép đồng nhất biến mọi điểm thành chính nó.",
        "Phép đảo: $T_{-\\vec{u}}$ đưa hình ảnh trở về vị trí ban đầu.",
        "Bảo toàn tuyệt đối: Giữ nguyên phương, chiều và khoảng cách dịch chuyển của mọi điểm."
      ]
    },
    {
      "icon": "fa-solid fa-calculator",
      "title": "Biểu thức Tọa độ Tịnh tiến",
      "desc": "Công thức giải tích tính nhanh tọa độ điểm ảnh và phương trình đường thẳng, đường tròn.",
      "points": [
        "Tọa độ điểm ảnh: $\\begin{cases} x' = x + a \\\\ y' = y + b \\end{cases}$ với $\\vec{u} = (a; b)$.",
        "Tọa độ điểm gốc: $\\begin{cases} x = x' - a \\\\ y = y' - b \\end{cases}$.",
        "Ảnh đường thẳng: Đường thẳng $\\Delta'$ song song hoặc trùng $\\Delta$ (cùng VTPT $Ax + By + C' = 0$).",
        "Ảnh đường tròn: Đường tròn $(C')$ có tâm $I' = T_{\\vec{u}}(I)$ và bán kính giữ nguyên $R' = R$."
      ]
    },
    {
      "icon": "fa-solid fa-ruler-combined",
      "title": "Tính chất Bảo toàn Khoảng cách",
      "desc": "Phép tịnh tiến là phép dời hình cơ bản bảo toàn nguyên vẹn độ dài và diện tích.",
      "points": [
        "Bảo toàn cự li: $M'N' = MN$ với mọi cặp điểm $M, N$.",
        "Bảo toàn góc và diện tích: Biến tam giác thành tam giác bằng nó ($S' = S$).",
        "Bảo toàn tính thẳng hàng: Biến 3 điểm thẳng hàng thành 3 điểm thẳng hàng cùng thứ tự.",
        "Bảo toàn phương song song: Biến tia thành tia cùng hướng, biến hai đường song song thành hai đường song song."
      ]
    },
    {
      "icon": "fa-solid fa-border-all",
      "title": "Ứng dụng Lát gạch & Họa tiết",
      "desc": "Quy luật lặp tuần hoàn tạo nên các hoa văn kiến trúc và chuyển động đều trong game.",
      "points": [
        "Họa tiết dải diềm: Lặp lại một mẫu hoa văn cơ sở theo phương vectơ $\\vec{u}$.",
        "Lát mặt phẳng (Tessellation): Tịnh tiến viên gạch theo 2 vectơ cơ sở $\\vec{u}_1, \\vec{u}_2$ phủ kín sàn nhà.",
        "Đội hình diễu hành: Mọi chiến sĩ bước đều cùng vận tốc và cự li không đổi.",
        "Băng chuyền công nghiệp: Chi tiết máy dịch chuyển tịnh tiến qua các trạm lắp ráp."
      ]
    }
  ],
  "3": [
    {
      "icon": "fa-solid fa-arrows-split-up-and-left",
      "title": "Định nghĩa Đối xứng trục",
      "desc": "Phép biến hình lấy trục d làm đường trung trực của đoạn thẳng nối điểm và ảnh.",
      "points": [
        "Kí hiệu: $Đ_d(M) = M' \\iff d$ là đường trung trực của đoạn $MM'$.",
        "Điểm trên trục: Nếu $M \\in d$ thì $Đ_d(M) = M$ (mọi điểm trên trục $d$ là điểm bất động).",
        "Tính chất tự đảo: $Đ_d(Đ_d(M)) = M$, lặp lại phép đối xứng trục sẽ trở về hình ban đầu.",
        "Trục đối xứng của hình: Hình $H$ có trục đối xứng $d$ khi và chỉ khi $Đ_d(H) = H$."
      ]
    },
    {
      "icon": "fa-solid fa-table-cells",
      "title": "Biểu thức Tọa độ Đặc biệt",
      "desc": "Quy tắc đổi dấu tọa độ khi lấy đối xứng qua trục hoành, trục tung và phân giác.",
      "points": [
        "Qua trục hoành $Ox$: $(x; y) \\mapsto (x; -y)$ (giữ nguyên $x$, đổi dấu $y$).",
        "Qua trục tung $Oy$: $(x; y) \\mapsto (-x; y)$ (giữ nguyên $y$, đổi dấu $x$).",
        "Qua đường phân giác $y = x$: $(x; y) \\mapsto (y; x)$ (đổi chỗ hoành và tung độ).",
        "Qua trục bất kì: Dựng hình chiếu vuông góc của $M$ lên $d$ để tìm trung điểm."
      ]
    },
    {
      "icon": "fa-solid fa-shield-halved",
      "title": "Tính chất Hình học Bất biến",
      "desc": "Bảo toàn khoảng cách nhưng đảo ngược hướng quay trong mặt phẳng.",
      "points": [
        "Bảo toàn cự li: $M'N' = MN$ (phép đối xứng trục là một phép dời hình).",
        "Biến đoạn thẳng thành đoạn thẳng bằng nó; biến góc thành góc bằng nó.",
        "Biến tam giác thành tam giác bằng nó ($S' = S$); biến đường tròn thành đường tròn cùng bán kính.",
        "Đảo hướng quay: Biến chiều quay ngược chiều kim đồng hồ thành cùng chiều kim đồng hồ."
      ]
    },
    {
      "icon": "fa-solid fa-route",
      "title": "Tối ưu Tổng Khoảng cách (Heron)",
      "desc": "Tìm điểm M trên đường thẳng d sao cho MA + MB đạt giá trị nhỏ nhất.",
      "points": [
        "Hai điểm khác phía: $MA + MB$ nhỏ nhất bằng đoạn thẳng $AB$, vị trí tối ưu $M = AB \\cap d$.",
        "Hai điểm cùng phía: Lấy $A' = Đ_d(A)$, khi đó $MA + MB = MA' + MB \\ge A'B$.",
        "Vị trí tối ưu cùng phía: $M = A'B \\cap d$, tổng khoảng cách nhỏ nhất bằng độ dài đoạn thẳng $A'B$.",
        "Ứng dụng: Thiết kế đường ống dẫn nước tối ưu từ bờ sông đến hai nhà máy, định luật phản xạ ánh sáng."
      ]
    }
  ],
  "4": [
    {
      "icon": "fa-solid fa-rotate",
      "title": "Định nghĩa Phép quay",
      "desc": "Phép biến hình giữ nguyên tâm O và quay mỗi điểm M một góc lượng giác alpha.",
      "points": [
        "Kí hiệu: $Q_{(O, \\alpha)}(M) = M' \\iff OM' = OM$ và góc $(\\overrightarrow{OM}, \\overrightarrow{OM'}) = \\alpha$.",
        "Quy ước chiều: Chiều dương ngược chiều kim đồng hồ; chiều âm cùng chiều kim đồng hồ.",
        "Góc đặc biệt: Góc $0$ hoặc bội $360^\\circ$ là phép đồng nhất; góc $180^\\circ$ là phép đối xứng tâm $O$.",
        "Bảo toàn khoảng cách: $M'N' = MN$, góc, diện tích và bán kính đường tròn."
      ]
    },
    {
      "icon": "fa-solid fa-compass-drafting",
      "title": "Biểu thức Tọa độ Phép quay",
      "desc": "Ma trận lượng giác biến đổi tọa độ điểm khi quay quanh gốc tọa độ O(0; 0).",
      "points": [
        "Công thức quay tổng quát: $\\begin{cases} x' = x\\cos\\alpha - y\\sin\\alpha \\\\ y' = x\\sin\\alpha + y\\cos\\alpha \\end{cases}$.",
        "Quay góc $+90^\\circ$: $x' = -y, y' = x$.",
        "Quay góc $-90^\\circ$: $x' = y, y' = -x$.",
        "Quay quanh tâm $I(a; b)$: Đổi gốc tọa độ về $I$, áp dụng công thức rồi chuyển ngược lại."
      ]
    },
    {
      "icon": "fa-solid fa-circle-dot",
      "title": "Phép đối xứng tâm",
      "desc": "Trường hợp riêng của phép quay góc 180°, nhận tâm I làm trung điểm của đoạn MM'.",
      "points": [
        "Kí hiệu: $Đ_I(M) = M' \\iff I$ là trung điểm đoạn thẳng $MM'$.",
        "Biểu thức tọa độ qua tâm $I(a; b)$: $x' = 2a - x, y' = 2b - y$.",
        "Biến đường thẳng: Biến đường thẳng thành đường thẳng song song hoặc trùng với nó.",
        "Hình có tâm đối xứng: Hình bình hành, hình chữ nhật, hình thoi, hình vuông, đường tròn và đa giác đều số cạnh chẵn."
      ]
    },
    {
      "icon": "fa-solid fa-fan",
      "title": "Ứng dụng Cơ khí & Thiết kế",
      "desc": "Quy luật quay trong động cơ máy móc, tuabin gió và nghệ thuật đối xứng quay Mandala.",
      "points": [
        "Cánh quạt tuabin: Các cánh bố trí quay đều góc $360^\\circ / n$ quanh trục triệt tiêu lực rung ly tâm.",
        "Bánh răng cơ khí: Các răng ăn khớp tạo thành nhờ phép quay quanh tâm trục bánh răng.",
        "Đồng hồ kim: Chuyển động quay đều của kim giây, kim phút, kim giờ quanh tâm trục.",
        "Họa tiết Mandala: Hoa văn đối xứng quay tạo cảm giác cân bằng, hài hòa thị giác trong mĩ thuật."
      ]
    }
  ],
  "5": [
    {
      "icon": "fa-solid fa-arrows-to-dot",
      "title": "Định nghĩa Phép dời hình",
      "desc": "Lớp các phép biến hình tổng quát bảo toàn khoảng cách giữa hai điểm bất kì.",
      "points": [
        "Hệ thức định nghĩa: $M'N' = MN$ với mọi cặp điểm $M, N$.",
        "Họ các phép dời hình: Phép đồng nhất, phép tịnh tiến, đối xứng trục, quay, đối xứng tâm.",
        "Bảo toàn cự li: Khoảng cách giữa các vật thể không bị co dãn hay biến dạng.",
        "Bảo toàn hình học: Giữ nguyên góc, chu vi, diện tích và hình dạng tam giác, đa giác, đường tròn."
      ]
    },
    {
      "icon": "fa-solid fa-layer-group",
      "title": "Hợp thành các Phép dời hình",
      "desc": "Thực hiện liên tiếp hai hay nhiều phép dời hình vẫn cho kết quả là một phép dời hình.",
      "points": [
        "Tính chất đóng: Hợp thành của hai phép dời hình luôn là một phép dời hình.",
        "Định lí phân rã: Mọi phép dời hình trong mặt phẳng đều là hợp thành của không quá ba phép đối xứng trục.",
        "Dời hình thuận (giữ hướng): Hợp thành số chẵn phép đối xứng trục (như tịnh tiến, quay).",
        "Dời hình nghịch (đảo hướng): Hợp thành số lẻ phép đối xứng trục (như đối xứng trục, đối xứng trượt)."
      ]
    },
    {
      "icon": "fa-solid fa-equals",
      "title": "Khái niệm Hai hình Bằng nhau",
      "desc": "Định nghĩa tổng quát hai hình bằng nhau thông qua tồn tại phép dời hình biến hình này thành hình kia.",
      "points": [
        "Định nghĩa: Hình $H$ bằng hình $H'$ ($H \\cong H'$) khi và chỉ khi có phép dời hình $f$ sao cho $f(H) = H'$.",
        "Tính chất tương đương: Phản xạ ($H \\cong H$), đối xứng ($H \\cong H' \\implies H' \\cong H$), bắc cầu.",
        "Mở rộng: Khái niệm bằng nhau áp dụng cho mọi hình phức tạp: hai chiếc lá, hai bản vẽ cơ khí, hai khối hoa văn.",
        "Dấu hiệu nhận biết: Hai hình bằng nhau khi trùng khít lên nhau sau các bước tịnh tiến, quay hoặc lật mặt."
      ]
    },
    {
      "icon": "fa-solid fa-puzzle-piece",
      "title": "Ứng dụng Ghép hình & Lát sàn",
      "desc": "Kĩ thuật dời hình trong đồ họa game, kiến trúc Mosaic và sản xuất linh kiện dập khuôn.",
      "points": [
        "Nghệ thuật Mosaic: Ghép các mảnh gốm/đá bằng nhau phủ kín bề mặt tranh tường.",
        "Linh kiện dập khuôn: Hàng triệu chi tiết xe máy bằng nhau sản xuất từ cùng một khuôn mẫu cơ khí.",
        "Chuyển động nhân vật game: Kết hợp tịnh tiến và quay tạo bước đi tự nhiên cho nhân vật 2D.",
        "Robot hàn tự động: Cánh tay robot dời vị trí que hàn theo quy trình dời hình chính xác đến từng micromet."
      ]
    }
  ],
  "6": [
    {
      "icon": "fa-solid fa-maximize",
      "title": "Định nghĩa Phép vị tự",
      "desc": "Phép biến hình phóng to hoặc thu nhỏ theo tâm I và tỉ số vị tự k khác 0.",
      "points": [
        "Hệ thức vectơ: $V_{(I, k)}(M) = M' \\iff \\overrightarrow{IM'} = k \\overrightarrow{IM}$.",
        "Tỉ số dương ($k > 0$): $M$ và $M'$ cùng phía đối với tâm $I$ (ảnh cùng hướng).",
        "Tỉ số âm ($k < 0$): $M$ và $M'$ khác phía đối với tâm $I$ (ảnh ngược hướng, bị lộn ngược).",
        "Trường hợp đặc biệt: $k = 1$ là phép đồng nhất; $k = -1$ là phép đối xứng tâm $I$."
      ]
    },
    {
      "icon": "fa-solid fa-chart-area",
      "title": "Tính chất Độ dài |k| & Diện tích k²",
      "desc": "Quy luật biến thiên kích thước và diện tích của hình ảnh qua phép vị tự.",
      "points": [
        "Độ dài cạnh: Khoảng cách nhân với $|k|$: $M'N' = |k| MN$.",
        "Tỉ số diện tích: Diện tích hình ảnh nhân với $k^2$: $S' = k^2 S$.",
        "Bảo toàn góc: Độ lớn các góc giữa các đường thẳng được giữ nguyên vẹn.",
        "Đường tròn ảnh: Biến đường tròn $(O; R)$ thành đường tròn $(O'; R')$ với $O' = V_{(I,k)}(O)$ và $R' = |k|R$."
      ]
    },
    {
      "icon": "fa-solid fa-arrows-split-up-and-left",
      "title": "Biểu thức Tọa độ Vị tự",
      "desc": "Công thức giải tích tìm tọa độ ảnh của điểm và phương trình đường thẳng, đường tròn.",
      "points": [
        "Tọa độ qua tâm $I(a; b)$: $\\begin{cases} x' = a + k(x - a) \\\\ y' = b + k(y - b) \\end{cases}$.",
        "Tâm là gốc tọa độ $O(0; 0)$: $x' = kx, y' = ky$.",
        "Ảnh đường thẳng: Đường thẳng không qua tâm biến thành đường thẳng **song song** với nó.",
        "Đường thẳng qua tâm: Biến thành chính nó (giữ nguyên phương)."
      ]
    },
    {
      "icon": "fa-solid fa-magnifying-glass-plus",
      "title": "Ứng dụng Quang học & Thu phóng",
      "desc": "Nguyên lí vận hành của máy chiếu, kính lúp, ống kính zoom và bóng in trên tường.",
      "points": [
        "Máy chiếu Projector: Phép vị tự tâm là bóng đèn chiếu, phóng đại slide nhỏ lên màn hình lớn ($k > 1$).",
        "Hiện tượng bóng in: Nguồn sáng điểm tạo bóng của bàn tay lên tường theo phép vị tự tỉ số dương.",
        "Ống kính máy ảnh zoom: Thấu kính dịch chuyển thay đổi tỉ số phóng đại hình ảnh lên cảm biến ảnh.",
        "Tâm vị tự 2 đường tròn: Dùng dựng tiếp tuyến chung của hai đường tròn khác bán kính."
      ]
    }
  ],
  "7": [
    {
      "icon": "fa-solid fa-expand",
      "title": "Định nghĩa Phép đồng dạng",
      "desc": "Phép biến hình làm thay đổi khoảng cách giữa hai điểm bất kì theo cùng một tỉ lệ k > 0.",
      "points": [
        "Hệ thức định nghĩa: $M'N' = k MN$ với mọi cặp điểm $M, N$ ($k > 0$).",
        "Hợp thành: Phép đồng dạng là hợp thành của một phép dời hình và một phép vị tự tỉ số $k$.",
        "Tỉ số $k = 1$: Phép dời hình là trường hợp riêng của phép đồng dạng với $k = 1$.",
        "Phép vị tự tỉ số $k$: Là phép đồng dạng với tỉ số $|k|$."
      ]
    },
    {
      "icon": "fa-solid fa-draw-polygon",
      "title": "Tính chất Hai hình Đồng dạng",
      "desc": "Các đặc trưng hình học bất biến: góc giữ nguyên, cạnh cùng tỉ lệ, diện tích nhân k².",
      "points": [
        "Bảo toàn góc: Mọi góc tương ứng giữa các đường thẳng đều có số đo bằng nhau.",
        "Độ dài cạnh: Tất cả các cạnh tương ứng đều tỉ lệ với nhau theo tỉ số $k$.",
        "Chu vi: Chu vi hình ảnh gấp $k$ lần chu vi hình gốc: $P' = k P$.",
        "Diện tích: Diện tích hình ảnh gấp $k^2$ lần diện tích hình gốc: $S' = k^2 S$."
      ]
    },
    {
      "icon": "fa-solid fa-snowflake",
      "title": "Bông tuyết Koch & Fractal",
      "desc": "Cấu trúc hình học tự đồng dạng kì thú với chu vi dài vô hạn và diện tích bị chặn hữu hạn.",
      "points": [
        "Quy tắc kiến tạo: Chia mỗi cạnh làm 3, dựng tam giác đều ở giữa, bỏ cạnh đáy, lặp lại vô hạn lần.",
        "Chu vi ở bước $n$: $P_n = 3a \\left(\\frac{4}{3}\\right)^{n-1} \\to \\infty$ khi $n \\to \\infty$ (chu vi dài vô cực!).",
        "Diện tích ở bước $n$: $S_n = \\left(8 - 3\\left(\\frac{4}{9}\\right)^{n-1}\\right) \\frac{a^2\\sqrt{3}}{20} \\to \\frac{8}{5}S_0$ (diện tích hữu hạn!).",
        "Tính tự đồng dạng: Mỗi phân nhánh nhỏ khi phóng to đều có hình dáng y hệt toàn bộ hình thể lớn."
      ]
    },
    {
      "icon": "fa-solid fa-map-location-dot",
      "title": "Ứng dụng Bản đồ & Tự nhiên",
      "desc": "Thu phóng bản đồ địa lí, đo đạc gián tiếp và mô phỏng các cấu trúc hình học tự nhiên.",
      "points": [
        "Bản đồ địa lí: Thu nhỏ thực địa theo tỉ lệ đồng dạng $1:100.000$ phục vụ đo đạc khoảng cách.",
        "Đo đạc gián tiếp: Dùng tam giác đồng dạng đo chiều cao kim tự tháp qua bóng nắng trên mặt đất.",
        "Cấu trúc fractal tự nhiên: Nhành cây súp lơ xanh, đường bờ biển vịnh Hạ Long, mạng phế quản phổi người.",
        "Nén ảnh fractal: Nén dữ liệu ảnh độ phân giải cao dựa trên sự lặp lại của các khối tự đồng dạng."
      ]
    }
  ],
  "8": [
    {
      "icon": "fa-solid fa-circle-nodes",
      "title": "Khái niệm Đồ thị G = (V, E)",
      "desc": "Cấu trúc toán học gồm tập hữu hạn các đỉnh V và tập các cạnh E nối giữa các đỉnh.",
      "points": [
        "Kí hiệu: $G = (V, E)$, với $V$ là tập đỉnh, $E$ là tập cạnh.",
        "Đỉnh kề & Cạnh liên thuộc: Hai đỉnh có cạnh nối gọi là kề nhau; cạnh đó liên thuộc với hai đỉnh.",
        "Khuyên (Loop): Cạnh nối một đỉnh với chính nó.",
        "Đơn đồ thị: Không có khuyên và không có cạnh song song (mỗi cặp đỉnh có tối đa 1 cạnh)."
      ]
    },
    {
      "icon": "fa-solid fa-handshake",
      "title": "Bậc Đỉnh & Định lí Bắt tay",
      "desc": "Định lí kinh điển thiết lập mối quan hệ giữa tổng bậc của các đỉnh và số cạnh của đồ thị.",
      "points": [
        "Bậc đỉnh $\\deg(v)$: Số cạnh liên thuộc với đỉnh $v$ (khuyên tính 2 lần).",
        "Định lí bắt tay: $\\sum_{v \\in V} \\deg(v) = 2 |E|$ (tổng bậc bằng 2 lần số cạnh).",
        "Hệ quả 1: Tổng bậc của tất cả các đỉnh trong một đồ thị luôn luôn là số chẵn.",
        "Hệ quả 2: Số đỉnh có bậc lẻ trong mọi đồ thị luôn luôn là một số chẵn."
      ]
    },
    {
      "icon": "fa-solid fa-network-wired",
      "title": "Đồ thị Đầy đủ K_n",
      "desc": "Đơn đồ thị có n đỉnh mà mọi cặp đỉnh phân biệt đều được nối với nhau bằng một cạnh.",
      "points": [
        "Số cạnh của $K_n$: $|E(K_n)| = \\frac{n(n-1)}{2}$.",
        "Bậc của mỗi đỉnh trong $K_n$: Mỗi đỉnh đều có bậc bằng $n - 1$.",
        "Ví dụ: $K_3$ (tam giác - 3 cạnh), $K_4$ (tứ diện phẳng - 6 cạnh), $K_5$ (ngôi sao 5 cánh - 10 cạnh).",
        "Đồ thị phi phẳng Kuratowski: $K_5$ không thể vẽ trên mặt phẳng mà các cạnh không cắt nhau."
      ]
    },
    {
      "icon": "fa-solid fa-route",
      "title": "Đường đi & Tính Liên thông",
      "desc": "Khái niệm đường đi, chu trình và khả năng kết nối giữa các đỉnh trong mạng lưới.",
      "points": [
        "Đường đi: Dãy các cạnh liên tiếp nối từ đỉnh đầu đến đỉnh cuối; độ dài bằng số cạnh.",
        "Chu trình: Đường đi khép kín có đỉnh xuất phát trùng đỉnh kết thúc ($v_0 = v_k$).",
        "Liên thông: Đồ thị liên thông khi mọi cặp đỉnh đều có ít nhất một đường đi nối giữa chúng.",
        "Ứng dụng: Mạng máy tính internet (router, switch), mạng lưới bạn bè Facebook, sơ đồ tuyến xe buýt."
      ]
    }
  ],
  "9": [
    {
      "icon": "fa-solid fa-shoe-prints",
      "title": "Đường đi & Chu trình Euler",
      "desc": "Bài toán đi qua mọi CẠNH của đồ thị đúng một lần; chu trình Euler khép kín.",
      "points": [
        "Chu trình Euler: Đi qua mọi cạnh đúng 1 lần và quay về đỉnh ban đầu.",
        "Đường đi Euler: Đi qua mọi cạnh đúng 1 lần (đỉnh đầu khác đỉnh cuối).",
        "Tập trung vào CẠNH: Không quan tâm số lần đi qua đỉnh, miễn là qua đủ mọi cạnh.",
        "Ứng dụng: Xe quét rác đô thị cần chạy qua mọi con đường trong phố đúng 1 lần để tiết kiệm xăng."
      ]
    },
    {
      "icon": "fa-solid fa-bridge",
      "title": "Tiêu chuẩn Euler & Cầu Königsberg",
      "desc": "Điều kiện cần và đủ kiểm tra đồ thị Euler dựa vào số lượng đỉnh bậc chẵn và lẻ.",
      "points": [
        "Có chu trình Euler $\\iff$ Đồ thị liên thông và **tất cả các đỉnh đều có bậc chẵn**.",
        "Có đường đi Euler mở $\\iff$ Đồ thị liên thông và có **đúng hai đỉnh bậc lẻ** (là 2 đầu mút).",
        "Không thể có đường Euler: Khi đồ thị có từ 4 đỉnh bậc lẻ trở lên.",
        "Bảy cây cầu Königsberg: 4 vùng đất có bậc 3, 3, 3, 5 (cả 4 đều lẻ) $\\implies$ không thể đi qua mỗi cầu 1 lần."
      ]
    },
    {
      "icon": "fa-solid fa-location-dot",
      "title": "Đường đi & Chu trình Hamilton",
      "desc": "Bài toán đi qua mọi ĐỈNH của đồ thị đúng một lần; chu trình Hamilton khép kín.",
      "points": [
        "Chu trình Hamilton: Đi qua mọi đỉnh đúng 1 lần rồi quay về đỉnh xuất phát.",
        "Tập trung vào ĐỈNH: Không bắt buộc phải đi qua mọi cạnh, chỉ cần thăm đủ mọi thành phố.",
        "Độ khó thuật toán: Thuộc lớp bài toán NP-đầy đủ, không có điều kiện cần và đủ đơn giản như Euler.",
        "Ứng dụng: Bài toán người du lịch (TSP - Travelling Salesperson Problem) đi qua mọi thành phố với chi phí rẻ nhất."
      ]
    },
    {
      "icon": "fa-solid fa-scale-balanced",
      "title": "Định lí Ore & Hệ quả Dirac",
      "desc": "Các điều kiện đủ nổi tiếng đảm bảo đồ thị tồn tại chu trình Hamilton.",
      "points": [
        "Định lí Ore ($n \\ge 3$): Nếu mọi cặp đỉnh không kề nhau đều có $\\deg(u) + \\deg(v) \\ge n \\implies$ có chu trình Hamilton.",
        "Hệ quả Dirac ($n \\ge 3$): Nếu mỗi đỉnh đều có bậc ít nhất bằng nửa số đỉnh ($\\deg(v) \\ge n/2$) $\\implies$ có chu trình Hamilton.",
        "Điều kiện đủ (không phải điều kiện cần): Đồ thị vòng $C_n$ có chu trình Hamilton dù mỗi đỉnh chỉ có bậc 2 $< n/2$.",
        "Phân biệt Euler vs Hamilton: Euler = qua hết CẠNH (xét bậc chẵn); Hamilton = qua hết ĐỈNH (xét bậc $\\ge n/2$)."
      ]
    }
  ],
  "10": [
    {
      "icon": "fa-solid fa-weight-scale",
      "title": "Đồ thị có Trọng số",
      "desc": "Mỗi cạnh được gán một con số không âm w(e) đại diện cho khoảng cách, thời gian hoặc chi phí.",
      "points": [
        "Kí hiệu: $G = (V, E, w)$, với $w(e) \\ge 0$ là trọng số của cạnh $e$.",
        "Độ dài đường đi: Bằng tổng trọng số của các cạnh trên đường đi: $w(P) = \\sum_{e \\in P} w(e)$.",
        "Đường đi ngắn nhất: Đường đi nối từ đỉnh $S$ đến đỉnh $T$ có tổng trọng số nhỏ nhất.",
        "Thực tế: Bản đồ Google Maps gán trọng số thời gian kẹt xe và chiều dài kilômét cho từng cung đường."
      ]
    },
    {
      "icon": "fa-solid fa-route",
      "title": "Thuật toán Dijkstra (1959)",
      "desc": "Thuật toán gắn nhãn đỉnh kinh điển tìm đường đi ngắn nhất từ một đỉnh nguồn đến mọi đỉnh.",
      "points": [
        "Khởi tạo: Gán nhãn đỉnh nguồn $d(S) = 0$, tất cả các đỉnh khác gán nhãn tạm thời $\\infty$.",
        "Cập nhật nhãn lân cận: $d(v) = \\min(d(v), d(u) + w(u, v))$ cho các đỉnh kề chưa chốt.",
        "Chốt nhãn vĩnh viễn: Chọn đỉnh có nhãn tạm thời nhỏ nhất để chốt thành nhãn vĩnh viễn.",
        "Điều kiện bắt buộc: Thuật toán chỉ hoạt động chính xác khi mọi trọng số cạnh đều không âm ($w \\ge 0$)."
      ]
    },
    {
      "icon": "fa-solid fa-envelope",
      "title": "Bài toán Người đưa thư",
      "desc": "Tìm chu trình ngắn nhất đi qua mọi con đường (cạnh) ít nhất một lần rồi quay về bưu điện.",
      "points": [
        "Tất cả đỉnh bậc chẵn: Đồ thị có chu trình Euler; chu trình Euler chính là hành trình tối ưu nhất.",
        "Có đúng 2 đỉnh bậc lẻ A và B: Đi theo đường Euler và lặp lại đường ngắn nhất nối giữa A và B.",
        "Tổng độ dài tối ưu: $L_{\\min} = \\sum w(e) + d_{\\min}(A, B)$ (chỉ phải đi lặp lại đoạn $AB$).",
        "Ứng dụng: Xe thu gom rác thải đô thị, xe phun nước rửa đường, bảo dưỡng đường dây điện cao thế."
      ]
    },
    {
      "icon": "fa-solid fa-microchip",
      "title": "Tối ưu Mạng & Định tuyến",
      "desc": "Ứng dụng thuật toán tìm đường tối ưu trong công nghệ viễn thông và logistics hiện đại.",
      "points": [
        "Giao thức định tuyến OSPF/IS-IS: Router tính toán bảng đường đi ngắn nhất chuyển tiếp gói tin internet.",
        "Ứng dụng gọi xe (Grab/Gojek): Ghép tài xế gần nhất và chọn cung đường tránh ngập lụt, tắc nghẽn.",
        "Logistics giao hàng chặng cuối: Sắp xếp lộ trình xe tải giao hàng tiết kiệm xăng dầu nhất.",
        "Thiết kế vi mạch VLSI: Đi dây mạch đồng ngắn nhất nối các transistor trên chip bán dẫn."
      ]
    }
  ],
  "11": [
    {
      "icon": "fa-solid fa-cube",
      "title": "Các Phép Chiếu Hình học",
      "desc": "Nguyên lí chiếu vật thể 3D trong không gian lên mặt phẳng 2D của bản vẽ kĩ thuật.",
      "points": [
        "Phép chiếu xuyên tâm: Các tia chiếu đồng quy tại tâm chiếu $S$; dùng vẽ hình phối cảnh kiến trúc.",
        "Phép chiếu song song: Các tia chiếu song song nhau (tâm chiếu ở vô cực).",
        "Chiếu vuông góc: Phương chiếu vuông góc với mặt phẳng chiếu; cơ sở tạo bản vẽ kĩ thuật chế tạo.",
        "Chiếu xiên: Phương chiếu không vuông góc; dùng vẽ hình chiếu trục đo xiên cân."
      ]
    },
    {
      "icon": "fa-solid fa-table-columns",
      "title": "Ba Hình chiếu Vuông góc",
      "desc": "Hệ thống ba mặt phẳng chiếu vuông góc đôi một: Đứng, Bằng và Cạnh.",
      "points": [
        "Hình chiếu đứng (nhìn từ trước): Thể hiện chiều dài và chiều cao của vật thể.",
        "Hình chiếu bằng (nhìn từ trên): Thể hiện chiều dài và chiều rộng của vật thể.",
        "Hình chiếu cạnh (nhìn từ trái): Thể hiện chiều rộng và chiều cao của vật thể.",
        "Quy tắc dóng: Hình chiếu bằng đặt ngay DƯỚI hình chiếu đứng; Hình chiếu cạnh đặt ngay BÊN PHẢI."
      ]
    },
    {
      "icon": "fa-solid fa-cubes",
      "title": "Trục đo Vuông góc đều",
      "desc": "Hình biểu diễn không gian 3D trực quan với 3 góc trục đo bằng nhau 120°.",
      "points": [
        "Góc trục đo: $\\widehat{x'O'y'} = \\widehat{y'O'z'} = \\widehat{z'O'x'} = 120^\\circ$.",
        "Hệ số biến dạng lí thuyết: $p = q = r \\approx 0{,}82$.",
        "Quy ước bản vẽ: Lấy $p = q = r = 1$ để kích thước dựng hình đúng bằng kích thước thật.",
        "Cách dựng khối: Dựng hệ trục $120^\\circ$, vẽ khối hộp bao quanh, vát góc, đục rãnh và phân biệt nét thấy/khuất."
      ]
    },
    {
      "icon": "fa-solid fa-ruler-combined",
      "title": "Quan hệ Dóng & Tính chất",
      "desc": "Các quy tắc bảo toàn và biến dạng hình học khi chuyển từ không gian lên bản vẽ.",
      "points": [
        "Bảo toàn tính song song: Các cạnh song song trong không gian khi chiếu lên vẫn song song hoặc trùng nhau.",
        "Bảo toàn tỉ số: Tỉ số độ dài hai đoạn thẳng song song được giữ nguyên trên hình chiếu.",
        "Không bảo toàn góc: Góc vuông trong không gian nói chung không còn là góc vuông trên hình chiếu.",
        "Nguyên tắc phản chuyển: Tập hợp các hình chiếu phải xác định duy nhất hình dạng khối vật thể 3D."
      ]
    }
  ],
  "12": [
    {
      "icon": "fa-solid fa-file-contract",
      "title": "Tiêu chuẩn Bản vẽ Kĩ thuật",
      "desc": "Quy chuẩn quốc gia TCVN về khổ giấy, khung bản vẽ, khung tên và tỉ lệ biểu diễn.",
      "points": [
        "Khung bản vẽ: Nét liền đậm; mép trái chừa $20\\text{ mm}$ (đóng gáy), ba mép còn lại chừa $10\\text{ mm}$.",
        "Khung tên: Đặt ở góc dưới cùng bên phải bản vẽ; ghi tên vật thể, vật liệu, tỉ lệ, người vẽ, ngày vẽ.",
        "Khổ giấy tiêu chuẩn: $A0 (1189 \\times 841), A1 (841 \\times 594), A2 (594 \\times 420), A3 (420 \\times 297), A4 (297 \\times 210\\text{ mm})$.",
        "Đơn vị đo mặc định: Toàn bộ kích thước trên bản vẽ cơ khí mặc định là **milimét (mm)**."
      ]
    },
    {
      "icon": "fa-solid fa-pen-ruler",
      "title": "5 Loại Nét vẽ Tiêu chuẩn",
      "desc": "Quy ước các loại nét vẽ hình học để truyền tải chính xác từng thành phần cấu tạo.",
      "points": [
        "Nét liền đậm: Đường bao thấy, cạnh thấy của vật thể ($s \\approx 0{,}5 - 0{,}7\\text{ mm}$).",
        "Nét liền mảnh: Đường dóng, đường kích thước, đường gạch mặt cắt (bề rộng $s/2$).",
        "Nét đứt mảnh: Đường bao khuất, cạnh khuất bên trong chi tiết.",
        "Nét gạch dài chấm mảnh: Đường tâm lỗ khoan, trục đối xứng của vật thể.",
        "Nét lượn sóng: Đường giới hạn phần cắt xén hoặc phân tách mặt cắt cục bộ."
      ]
    },
    {
      "icon": "fa-solid fa-arrows-left-right",
      "title": "Quy tắc Ghi Kích thước",
      "desc": "Tiêu chuẩn trình bày đường dóng, đường kích thước, mũi tên và các con số đo lường.",
      "points": [
        "Đường dóng: Vuông góc với đoạn thẳng cần đo, vượt quá đường kích thước $2 - 4\\text{ mm}$.",
        "Mũi tên: Đặt ở hai đầu đường kích thước, đầu mũi tên chạm sát vào đường dóng.",
        "Chữ số kích thước: Đặt phía trên đường kích thước nằm ngang, hướng đọc từ dưới lên hoặc từ trái sang.",
        "Kí hiệu đặc biệt: Dùng $\\varnothing$ cho đường kính hình tròn, dùng $R$ cho bán kính cung cong tròn."
      ]
    },
    {
      "icon": "fa-solid fa-list-check",
      "title": "Quy trình Đọc & Lập Bản vẽ",
      "desc": "5 bước đọc hiểu bản vẽ kĩ thuật và 6 bước lập bản vẽ chế tạo từ vật thể mẫu.",
      "points": [
        "5 bước Đọc bản vẽ: (1) Khung tên $\\to$ (2) Hình chiếu $\\to$ (3) Kích thước $\\to$ (4) Yêu cầu kĩ thuật $\\to$ (5) Hình dung vật thể 3D.",
        "6 bước Lập bản vẽ: Phân tích khối $\\to$ Chọn hướng chiếu đứng $\\to$ Vẽ nét mờ $\\to$ Tô nét đậm/đứt $\\to$ Ghi kích thước $\\to$ Khung tên.",
        "Nguyên tắc đầy đủ: Không được thiếu kích thước chế tạo và không ghi thừa kích thước trùng lặp.",
        "Bản vẽ là ngôn ngữ kĩ sư: Giúp biến ý tưởng thiết kế thành sản phẩm thực tế trong nhà máy."
      ]
    }
  ]
};