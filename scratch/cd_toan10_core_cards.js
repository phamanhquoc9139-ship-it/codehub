module.exports = {
  "1": [
    {
      "icon": "fa-solid fa-cube",
      "title": "Phương trình bậc nhất ba ẩn",
      "desc": "Dạng tổng quát $ax + by + cz = d$ với $a^2+b^2+c^2 \\ne 0$.",
      "points": [
        "Mỗi nghiệm là một bộ ba số $(x_0; y_0; z_0)$ thỏa mãn đẳng thức.",
        "Hình học: Biểu diễn một mặt phẳng trong không gian $Oxyz$."
      ]
    },
    {
      "icon": "fa-solid fa-layer-group",
      "title": "Hệ ba phương trình ba ẩn",
      "desc": "Hệ gồm 3 phương trình tuyến tính đồng thời của 3 ẩn số.",
      "points": [
        "Nghiệm của hệ là giao điểm chung của 3 mặt phẳng trong không gian.",
        "Ba trường hợp: Có nghiệm duy nhất, vô số nghiệm hoặc vô nghiệm."
      ]
    },
    {
      "icon": "fa-solid fa-stairs",
      "title": "Phương pháp khử Gauss",
      "desc": "Đưa hệ phương trình về dạng tam giác hoặc bậc thang chuẩn mực.",
      "points": [
        "Sử dụng 3 phép biến đổi tương đương đại số giữ nguyên tập nghiệm.",
        "Giải ngược từ phương trình cuối lên: tìm $z \\implies y \\implies x$."
      ]
    },
    {
      "icon": "fa-solid fa-check-double",
      "title": "Biện luận số nghiệm",
      "desc": "Nhận diện nghiệm thông qua phương trình cuối cùng của hệ.",
      "points": [
        "Xuất hiện dòng mâu thuẫn $0 = k$ ($k \\ne 0$) $\\implies$ Hệ vô nghiệm.",
        "Hệ tam giác với các hệ số chéo khác 0 $\\implies$ Nghiệm duy nhất.",
        "Xuất hiện dòng đồng nhất $0 = 0$ và còn ẩn tự do $\\implies$ Vô số nghiệm."
      ]
    }
  ],
  "2": [
    {
      "icon": "fa-solid fa-diagram-project",
      "title": "Quy trình mô hình hóa 4 bước",
      "desc": "Phương pháp chuyển đổi bài toán ngôn ngữ thực tế sang hệ phương trình.",
      "points": [
        "Bước 1: Chọn ẩn, đơn vị và điều kiện thực tế ($x, y, z \\ge 0$).",
        "Bước 2: Lập 3 phương trình cân bằng tuyến tính độc lập.",
        "Bước 3: Giải hệ bằng phương pháp Gauss hoặc máy tính cầm tay.",
        "Bước 4: Đối chiếu điều kiện và kết luận bài toán có đơn vị đo."
      ]
    },
    {
      "icon": "fa-solid fa-sack-dollar",
      "title": "Bài toán kinh tế & Phân bổ vốn",
      "desc": "Cân đối danh mục đầu tư, chi phí sản xuất và cân bằng thị trường.",
      "points": [
        "Phương trình tổng vốn đầu tư: $x + y + z = S$.",
        "Phương trình tổng tiền lãi thu được: $r_1 x + r_2 y + r_3 z = L$.",
        "Cân bằng cung - cầu: Lượng cung bằng lượng cầu cho từng mặt hàng."
      ]
    },
    {
      "icon": "fa-solid fa-flask-vial",
      "title": "Pha trộn hợp kim & Dung dịch",
      "desc": "Bảo toàn khối lượng tổng và khối lượng các thành phần nguyên chất.",
      "points": [
        "Bảo toàn khối lượng: $x + y + z = M_{\\text{tổng}}$.",
        "Bảo toàn chất tan: $c_1 x + c_2 y + c_3 z = c_M M_{\\text{tổng}}$.",
        "Cân bằng hóa học: Bảo toàn số nguyên tử từng nguyên tố ở 2 vế."
      ]
    },
    {
      "icon": "fa-solid fa-bolt",
      "title": "Mạch điện phức tạp Kirchhoff",
      "desc": "Ứng dụng hai định luật mạng điện kinh điển của Gustav Kirchhoff.",
      "points": [
        "Định luật nút (KCL): Tổng dòng điện vào bằng tổng dòng điện ra.",
        "Định luật mắt lưới (KVL): Tổng sụt áp bằng tổng suất điện động.",
        "Nghiệm $I < 0$ chỉ ra chiều dòng điện thực tế ngược chiều giả định."
      ]
    }
  ],
  "3": [
    {
      "icon": "fa-solid fa-triangle-exclamation",
      "title": "Giới hạn phép thử hữu hạn",
      "desc": "Liệt kê trường hợp riêng không thể chứng minh cho vô hạn số tự nhiên.",
      "points": [
        "Ví dụ Euler $n^2 - n + 41$ cho số nguyên tố tới $n=40$, nhưng hỏng tại $n=41$.",
        "Cần phương pháp suy diễn chặt chẽ: Quy nạp toán học."
      ]
    },
    {
      "icon": "fa-solid fa-stairs",
      "title": "Nguyên lí quy nạp 2 bước",
      "desc": "Trình tự suy luận logic để chứng minh mệnh đề $P(n)$ với mọi $n \\ge p$.",
      "points": [
        "Bước cơ sở: Chứng minh mệnh đề đúng tại giá trị ban đầu $n = p$.",
        "Bước quy nạp: Giả sử $P(k)$ đúng ($k \\ge p$), chứng minh $P(k+1)$ đúng.",
        "Kết luận: Mệnh đề $P(n)$ đúng với mọi số tự nhiên $n \\ge p$."
      ]
    },
    {
      "icon": "fa-solid fa-grip-vertical",
      "title": "Mô hình hiệu ứng Domino",
      "desc": "Hình ảnh trực quan kinh điển giải thích cơ chế của quy nạp.",
      "points": [
        "Quân cờ đầu tiên bị gạt đổ (Bước cơ sở thành công).",
        "Bất kì quân $k$ đổ luôn làm quân $k+1$ liền kề đổ (Bước quy nạp vững).",
        "Hệ quả: Toàn bộ chuỗi vô hạn quân domino đều ngã."
      ]
    },
    {
      "icon": "fa-solid fa-calculator",
      "title": "Các công thức quy nạp kinh điển",
      "desc": "Hệ thống các định lí trọng tâm chứng minh bằng quy nạp.",
      "points": [
        "Tổng dãy số: $1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$.",
        "Tổng các số lẻ: $1 + 3 + \\dots + (2n-1) = n^2$.",
        "Hình học: Tổng góc đa giác lồi $n$ cạnh là $(n-2)180^\\circ$ ($n \\ge 3$)."
      ]
    }
  ],
  "4": [
    {
      "icon": "fa-solid fa-network-wired",
      "title": "Tam giác Pascal",
      "desc": "Bảng số tam giác đối xứng biểu diễn các hệ số tổ hợp.",
      "points": [
        "Hàng $n$ gồm các hệ số $C_n^k$ với hai đầu luôn bằng 1.",
        "Quy tắc cộng biên Pascal: $C_{n+1}^k = C_n^{k-1} + C_n^k$.",
        "Tính đối xứng qua trục tâm: $C_n^k = C_n^{n-k}$."
      ]
    },
    {
      "icon": "fa-solid fa-square-root-variable",
      "title": "Công thức nhị thức Newton",
      "desc": "Khai triển lũy thừa bậc $n$ của một nhị thức $(a+b)^n$.",
      "points": [
        "Dạng tổng: $(a+b)^n = \\sum_{k=0}^n C_n^k a^{n-k} b^k$.",
        "Khai triển có đúng $n+1$ hạng tử với tổng số mũ của $a$ và $b$ bằng $n$.",
        "Lũy thừa của $a$ giảm dần từ $n$ về 0, lũy thừa của $b$ tăng từ 0 lên $n$."
      ]
    },
    {
      "icon": "fa-solid fa-bullseye",
      "title": "Số hạng tổng quát $T_{k+1}$",
      "desc": "Công cụ then chốt để giải mọi bài toán tìm hệ số.",
      "points": [
        "Công thức số hạng thứ $k+1$: $T_{k+1} = C_n^k a^{n-k} b^k$ ($0 \\le k \\le n$).",
        "Với $(ax+b)^n$: $T_{k+1} = C_n^k a^{n-k} b^k x^{n-k}$.",
        "Tìm hệ số của $x^m$: Giải phương trình số mũ $n - k = m \\implies k = n - m$."
      ]
    },
    {
      "icon": "fa-solid fa-list-ol",
      "title": "Ứng dụng tính tổng tổ hợp",
      "desc": "Phương pháp gán giá trị đặc biệt để tính nhanh các chuỗi hệ số.",
      "points": [
        "Tổng các hệ số nhị thức: Thay $a=b=1 \\implies \\sum_{k=0}^n C_n^k = 2^n$.",
        "Tổng luân phiên dấu: Thay $a=1, b=-1 \\implies \\sum_{k=0}^n (-1)^k C_n^k = 0$.",
        "Ý nghĩa đếm: $2^n$ chính là số lượng tất cả các tập con của tập $n$ phần tử."
      ]
    }
  ],
  "5": [
    {
      "icon": "fa-solid fa-circle-notch",
      "title": "Định nghĩa Elip",
      "desc": "Tập hợp các điểm có tổng khoảng cách tới hai tiêu điểm là hằng số.",
      "points": [
        "Hệ thức quỹ tích: $MF_1 + MF_2 = 2a$ với $2a > 2c = F_1F_2 > 0$.",
        "Tiêu cự: $F_1F_2 = 2c$ với $F_1(-c; 0)$ và $F_2(c; 0)$."
      ]
    },
    {
      "icon": "fa-solid fa-draw-polygon",
      "title": "Phương trình chính tắc",
      "desc": "Dạng phương trình đối xứng tọa độ của Elip chuẩn.",
      "points": [
        "Phương trình chính tắc: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b > 0$).",
        "Mối liên hệ then chốt ba bán trục: $b^2 = a^2 - c^2$.",
        "Độ dài trục lớn là $2a$, độ dài trục nhỏ là $2b$."
      ]
    },
    {
      "icon": "fa-solid fa-chart-pie",
      "title": "Tâm sai & Đường chuẩn",
      "desc": "Đặc trưng hình học đo độ dẹt và các đường thẳng chuẩn mực.",
      "points": [
        "Tâm sai: $e = \\frac{c}{a}$ ($0 < e < 1$). $e$ càng gần 1 thì elip càng dẹt.",
        "Đường chuẩn: Hai đường song song trục tung $x = \\pm \\frac{a}{e} = \\pm \\frac{a^2}{c}$.",
        "Bán kính qua tiêu điểm: $MF_1 = a + ex$, $MF_2 = a - ex$."
      ]
    },
    {
      "icon": "fa-solid fa-earth-americas",
      "title": "Quỹ đạo Kepler & Quang học",
      "desc": "Ứng dụng trong chuyển động thiên thể và hội tụ âm học.",
      "points": [
        "Định luật Kepler 1: Quỹ đạo hành tinh quanh Mặt Trời là một đường elip.",
        "Khoảng cách cận nhật $r_{\\min} = a - c$, viễn nhật $r_{\\max} = a + c$.",
        "Tính chất phản xạ: Tia phát từ một tiêu điểm luôn phản xạ qua tiêu điểm kia."
      ]
    }
  ],
  "6": [
    {
      "icon": "fa-solid fa-arrows-split-up-and-left",
      "title": "Định nghĩa Hypebol",
      "desc": "Tập hợp các điểm có giá trị tuyệt đối hiệu khoảng cách không đổi.",
      "points": [
        "Hệ thức quỹ tích: $|MF_1 - MF_2| = 2a$ với $0 < 2a < 2c = F_1F_2$.",
        "Đồ thị gồm hai nhánh tách biệt mở sang hai phía đối xứng."
      ]
    },
    {
      "icon": "fa-solid fa-wave-square",
      "title": "Phương trình chính tắc",
      "desc": "Phương trình chuẩn mực của Hypebol có tiêu điểm trên trục $Ox$.",
      "points": [
        "Phương trình chính tắc: $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ ($a, b > 0$).",
        "Mối liên hệ ba bán trục: $c^2 = a^2 + b^2$ ($c > a$).",
        "Trục thực có độ dài $2a$, trục ảo có độ dài $2b$."
      ]
    },
    {
      "icon": "fa-solid fa-lines-leaning",
      "title": "Đường tiệm cận & Hypebol vuông",
      "desc": "Hai đường thẳng định hướng nhánh đồ thị ra vô tận.",
      "points": [
        "Phương trình hai đường tiệm cận: $y = \\pm \\frac{b}{a}x$.",
        "Tâm sai: $e = \\frac{c}{a} > 1$.",
        "Hypebol vuông: Khi $a = b$, tiệm cận vuông góc $y = \\pm x$ và $e = \\sqrt{2}$."
      ]
    },
    {
      "icon": "fa-solid fa-tower-broadcast",
      "title": "Định vị LORAN & Tháp làm mát",
      "desc": "Ứng dụng trong dẫn đường vô tuyến hàng hải và kiến trúc chịu lực.",
      "points": [
        "Định vị LORAN: Dựa trên hiệu thời gian nhận sóng từ hai trạm phát.",
        "Giao điểm của hai đường hypebol xác định vị trí tàu trên biển.",
        "Tháp giải nhiệt: Mặt tròn xoay hypeboloid chịu lực gió bão tối ưu."
      ]
    }
  ],
  "7": [
    {
      "icon": "fa-solid fa-satellite-dish",
      "title": "Định nghĩa Parabol",
      "desc": "Tập hợp các điểm cách đều tiêu điểm và đường chuẩn.",
      "points": [
        "Hệ thức định nghĩa: $MF = d(M, \\Delta)$.",
        "Tâm sai luôn luôn bằng 1: $e = 1$."
      ]
    },
    {
      "icon": "fa-solid fa-chart-line",
      "title": "Phương trình chính tắc",
      "desc": "Dạng phương trình với đỉnh tại gốc tọa độ và trục đối xứng $Ox$.",
      "points": [
        "Phương trình chính tắc: $y^2 = 2px$ với tham số tiêu $p > 0$.",
        "Ý nghĩa tham số $p$: Là khoảng cách từ tiêu điểm $F$ tới đường chuẩn $\\Delta$.",
        "Điểm thuộc parabol thỏa mãn $x \\ge 0$, đồ thị mở sang phải."
      ]
    },
    {
      "icon": "fa-solid fa-location-dot",
      "title": "Tiêu điểm & Đường chuẩn",
      "desc": "Các yếu tố cấu thành tọa độ của Parabol chuẩn.",
      "points": [
        "Đỉnh tại gốc tọa độ $O(0; 0)$.",
        "Tiêu điểm: $F\\left(\\frac{p}{2}; 0\\right)$.",
        "Đường chuẩn: $\\Delta: x = -\\frac{p}{2}$.",
        "Bán kính qua tiêu điểm của $M(x; y)$: $MF = x + \\frac{p}{2}$."
      ]
    },
    {
      "icon": "fa-solid fa-lightbulb",
      "title": "Tính chất quang học & Ứng dụng",
      "desc": "Nguyên lí phản xạ chùm tia song song hội tụ tại tiêu điểm.",
      "points": [
        "Mọi tia tới song song trục đối xứng sau phản xạ đều đi qua tiêu điểm $F$.",
        "Ứng dụng: Chảo anten vệ tinh thu sóng, gương đèn pha ô tô.",
        "Kiến trúc: Cầu treo dây võng dây cáp uốn theo đường parabol chịu tải."
      ]
    }
  ],
  "8": [
    {
      "icon": "fa-solid fa-shapes",
      "title": "Mặt cắt hình nón tròn xoay",
      "desc": "Nguồn gốc hình học thống nhất của Elip, Parabol và Hypebol.",
      "points": [
        "Mặt phẳng cắt một nhánh nón không song song đường sinh $\\implies$ Elip.",
        "Mặt phẳng song song với một đường sinh $\\implies$ Parabol.",
        "Mặt phẳng cắt cả hai nhánh nón $\\implies$ Hypebol."
      ]
    },
    {
      "icon": "fa-solid fa-infinity",
      "title": "Định nghĩa conic thống nhất",
      "desc": "Mô hình đại số duy nhất qua tỉ số khoảng cách tới tiêu điểm và đường chuẩn.",
      "points": [
        "Hệ thức thống nhất: $\\frac{MF}{d(M, \\Delta)} = e$ với hằng số tâm sai $e > 0$.",
        "Phương trình tổng quát: $(x - f)^2 + y^2 = e^2(x - d)^2$."
      ]
    },
    {
      "icon": "fa-solid fa-arrows-to-dot",
      "title": "Phân loại theo tâm sai",
      "desc": "Quy luật phân nhánh hình học dựa vào độ lớn của tâm sai $e$.",
      "points": [
        "$0 < e < 1$: Đường Elip (đường cong khép kín, hữu hạn).",
        "$e = 1$: Đường Parabol (đường cong mở, nhánh duy nhất).",
        "$e > 1$: Đường Hypebol (đường cong mở, hai nhánh tách rời)."
      ]
    },
    {
      "icon": "fa-solid fa-shuttle-space",
      "title": "Cơ học quỹ đạo vũ trụ",
      "desc": "Mối liên hệ giữa dạng quỹ đạo và vận tốc tại cận điểm $p$.",
      "points": [
        "Quỹ đạo Elip khép kín: $\\sqrt{\\frac{GM}{p}} < v < \\sqrt{\\frac{2GM}{p}}$.",
        "Quỹ đạo Parabol thoát li giới hạn: $v = \\sqrt{\\frac{2GM}{p}}$.",
        "Quỹ đạo Hypebol thoát khỏi hệ: $v > \\sqrt{\\frac{2GM}{p}}$."
      ]
    }
  ]
};
