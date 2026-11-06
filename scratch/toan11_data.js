// Auto-generated Toán 11 Complete Data (2 Tập, 9 Chương, 33 Bài)
const generalConventions = [
  "Góc giải tích mặc định đo bằng radian; tham số nguyên \\(k \\in \\mathbb{Z}\\).",
  "Với mẫu số liệu ghép nhóm: \\(n_i\\) là tần số của nhóm thứ \\(i\\), cỡ mẫu \\(n = \\sum n_i\\), \\(c_i = \\frac{a_i + a_{i+1}}{2}\\) là giá trị đại diện của nhóm \\([a_i; a_{i+1})\\).",
  "Xác suất cổ điển \\(P(A) = \\frac{|A|}{|\\Omega|}\\) chỉ áp dụng khi các kết quả sơ cấp của phép thử là đồng khả năng."
];
const chapters = [
  {
    "num": 1,
    "vol": 1,
    "roman": "I",
    "title": "Hàm số lượng giác và phương trình lượng giác",
    "color": "indigo",
    "lessons": [
      1,
      2,
      3,
      4
    ],
    "summary": "Góc lượng giác, đường tròn lượng giác, hệ thức cơ bản, công thức biến đổi lượng giác, tính chất – đồ thị các hàm số lượng giác và cách giải phương trình lượng giác cơ bản.",
    "review": {
      "title": "Ôn tập Chương I – Lượng giác",
      "connections": [
        "Liên kết chặt chẽ giữa tọa độ điểm trên đường tròn lượng giác đơn vị \\((\\cos\\alpha; \\sin\\alpha)\\), dấu theo 4 góc phần tư, bảng giá trị đặc biệt với các công thức biến đổi và đồ thị hàm số.",
        "Mọi phương trình lượng giác đều hướng tới việc đưa về cùng một hàm số lượng giác của một biểu thức góc rồi đối chiếu điều kiện xác định."
      ],
      "keyTypes": [
        "Dạng 1: Tính giá trị lượng giác của góc, rút gọn biểu thức và chứng minh đẳng thức lượng giác.",
        "Dạng 2: Tìm tập xác định, tập giá trị (cực trị), xét tính chẵn/lẻ, chu kì tuần hoàn và giao điểm đồ thị.",
        "Dạng 3: Giải phương trình lượng giác cơ bản, phương trình bậc nhất đối với \\(\\sin x\\) và \\(\\cos x\\), lọc nghiệm thuộc đoạn/khoảng cho trước."
      ]
    }
  },
  {
    "num": 2,
    "vol": 1,
    "roman": "II",
    "title": "Dãy số, cấp số cộng và cấp số nhân",
    "color": "blue",
    "lessons": [
      5,
      6,
      7
    ],
    "summary": "Khái niệm dãy số, tính tăng/giảm và bị chặn; cấp số cộng (công sai d), cấp số nhân (công bội q), công thức số hạng tổng quát, tổng n số hạng đầu và bài toán lãi đơn – lãi kép.",
    "review": {
      "title": "Ôn tập Chương II – Dãy số, CSC & CSN",
      "connections": [
        "Nhận dạng Cấp số cộng (CSC) qua hiệu không đổi \\(u_{n+1} - u_n = d\\); nhận dạng Cấp số nhân (CSN) qua tỉ số không đổi \\(u_{n+1} = q \\cdot u_n\\).",
        "Phân biệt rõ mô hình tăng đều mỗi kì một lượng cố định (CSC – lãi đơn) và mô hình tăng theo tỉ lệ phần trăm mỗi kì (CSN – lãi kép)."
      ],
      "keyTypes": [
        "Dạng 1: Xét tính đơn điệu (hiệu \\(u_{n+1}-u_n\\) hoặc thương \\(u_{n+1}/u_n\\)) và tính bị chặn của dãy số; chứng minh bằng quy nạp toán học.",
        "Dạng 2: Tìm các đại lượng \\(u_1, d, q, n, u_n, S_n\\) của CSC và CSN từ hệ điều kiện; vận dụng tính chất 3 số hạng liên tiếp.",
        "Dạng 3: Bài toán thực tế về tài chính, gửi tiết kiệm, dân số, khấu hao (luôn kiểm tra kĩ số kì và số mốc thời gian: từ \\(u_1\\) đến \\(u_n\\) có \\(n-1\\) bước nhảy)."
      ]
    }
  },
  {
    "num": 3,
    "vol": 1,
    "roman": "III",
    "title": "Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
    "color": "teal",
    "lessons": [
      8,
      9
    ],
    "summary": "Bảng tần số, tần suất ghép nhóm, biểu đồ cột liền nhau (histogram), cách ước lượng số trung bình, trung vị và mốt của mẫu số liệu ghép nhóm.",
    "review": {
      "title": "Ôn tập Chương III – Thống kê ghép nhóm",
      "connections": [
        "Ghép nhóm giúp tóm tắt mẫu dữ liệu lớn nhưng làm mất giá trị chính xác của từng quan sát lẻ, do đó mọi số đặc trưng tính được đều mang tính xấp xỉ.",
        "Kết hợp cả 3 số đo: Trung bình (đại diện chung nhưng nhạy với ngoại lệ), Trung vị (bền vững trước giá trị bất thường) và Mốt (nhóm phổ biến nhất)."
      ],
      "keyTypes": [
        "Dạng 1: Kiểm tra và lập bảng tần số, tần suất ghép nhóm; xác định độ rộng lớp \\(h_i\\), giá trị đại diện \\(c_i\\) và cỡ mẫu \\(n = \\sum n_i\\).",
        "Dạng 2: Tính số trung bình ghép nhóm \\(\\bar{x} \\approx \\frac{1}{n}\\sum n_i c_i\\) kèm đơn vị đo.",
        "Dạng 3: Lập cột tần số tích lũy để xác định nhóm chứa trung vị (vị trí \\(n/2\\)), nội suy \\(M_e\\); xác định nhóm mốt (tần số lớn nhất) và nội suy \\(M_o\\) khi các lớp có cùng độ rộng."
      ]
    }
  },
  {
    "num": 4,
    "vol": 1,
    "roman": "IV",
    "title": "Quan hệ song song trong không gian",
    "color": "amber",
    "lessons": [
      10,
      11,
      12,
      13,
      14
    ],
    "summary": "Đại cương về đường thẳng và mặt phẳng, giao điểm – giao tuyến – thiết diện, hai đường thẳng song song/chéo nhau, đường thẳng song song mặt phẳng, hai mặt phẳng song song và phép chiếu song song.",
    "review": {
      "title": "Ôn tập Chương IV – Quan hệ song song trong không gian",
      "connections": [
        "Chuỗi suy luận cốt lõi: Hai đường thẳng song song \\(\\leftrightarrow\\) Đường thẳng song song mặt phẳng \\(\\leftrightarrow\\) Hai mặt phẳng song song \\(\\leftrightarrow\\) Giao tuyến song song và tỉ số đoạn thẳng (Định lí Thales không gian).",
        "Hình biểu diễn được vẽ theo phép chiếu song song (cạnh thấy nét liền, cạnh khuất nét đứt); dáng trực quan không thay thế được chứng minh hình học."
      ],
      "keyTypes": [
        "Dạng 1: Tìm giao tuyến của hai mặt phẳng, giao điểm của đường thẳng với mặt phẳng và dựng thiết diện của hình chóp/lăng trụ.",
        "Dạng 2: Chứng minh \\(a \\parallel b\\) (đồng phẳng không cắt, cùng song song đường thứ ba, hoặc định lí giao tuyến); chứng minh \\(d \\parallel (P)\\) (chỉ ra \\(d \\parallel a \\subset (P)\\)); chứng minh \\((P) \\parallel (Q)\\) (hai cặp đường cắt nhau song song).",
        "Dạng 3: Tính tỉ số đoạn thẳng, tỉ số diện tích thiết diện dựa vào tính chất hai/ba mặt phẳng song song và phép chiếu song song."
      ]
    }
  },
  {
    "num": 5,
    "vol": 1,
    "roman": "V",
    "title": "Giới hạn. Hàm số liên tục",
    "color": "rose",
    "lessons": [
      15,
      16,
      17
    ],
    "summary": "Giới hạn của dãy số, tổng cấp số nhân lùi vô hạn, giới hạn hữu hạn và vô cực của hàm số, khử dạng vô định, tiệm cận và hàm số liên tục trên khoảng/đoạn.",
    "review": {
      "title": "Ôn tập Chương V – Giới hạn & Hàm số liên tục",
      "connections": [
        "Giới hạn phản ánh xu hướng của hàm số khi \\(x\\) tiến gần tới \\(x_0\\) (với \\(x \\ne x_0\\)), không được đồng nhất với giá trị \\(f(x_0)\\); chỉ khi hàm số liên tục tại \\(x_0\\) thì \\(\\lim_{x\\to x_0}f(x) = f(x_0)\\).",
        "Giới hạn tại một điểm ra vô cực gắn với tiệm cận đứng \\(x = x_0\\); giới hạn tại vô cực ra hằng số \\(L\\) gắn với tiệm cận ngang \\(y = L\\)."
      ],
      "keyTypes": [
        "Dạng 1: Tính giới hạn dãy số và hàm số bằng chia bậc cao nhất, phân tích nhân tử khử \\(0/0\\), nhân lượng liên hợp, định lí kẹp và giới hạn lượng giác \\(\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1\\).",
        "Dạng 2: Xét tính liên tục của hàm số cho bởi nhiều công thức tại điểm ghép \\(x_0\\) (so sánh \\(\\lim_{x\\to x_0^-}f(x)\\), \\(\\lim_{x\\to x_0^+}f(x)\\) và \\(f(x_0)\\)).",
        "Dạng 3: Áp dụng định lí giá trị trung gian (nếu \\(f\\) liên tục trên \\([a;b]\\) và \\(f(a)\\cdot f(b) < 0\\)) để chứng minh phương trình \\(f(x) = 0\\) có nghiệm trong \\((a;b)\\)."
      ]
    }
  },
  {
    "num": 6,
    "vol": 2,
    "roman": "VI",
    "title": "Hàm số mũ và hàm số lôgarit",
    "color": "emerald",
    "lessons": [
      18,
      19,
      20,
      21
    ],
    "summary": "Lũy thừa với số mũ thực, phép tính lôgarit, tính chất và đồ thị đối xứng của hàm số mũ – hàm số lôgarit, phương trình và bất phương trình mũ – lôgarit cùng các mô hình thực tế.",
    "review": {
      "title": "Ôn tập Chương VI – Mũ & Lôgarit",
      "connections": [
        "Liên kết đối ngẫu: \\(y = a^x\\) (miền \\(\\mathbb{R}\\), tập giá trị \\((0;+\\infty)\\), đi qua \\((0;1)\\)) và \\(y = \\log_a x\\) (miền \\((0;+\\infty)\\), tập giá trị \\(\\mathbb{R}\\), đi qua \\((1;0)\\)) là hai hàm ngược nhau, đồ thị đối xứng qua đường phân giác \\(y = x\\).",
        "Cơ số \\(a > 1\\) hàm đồng biến (giữ nguyên chiều bất phương trình); cơ số \\(0 < a < 1\\) hàm nghịch biến (đổi chiều bất phương trình)."
      ],
      "keyTypes": [
        "Dạng 1: Rút gọn biểu thức chứa lũy thừa số mũ thực, căn thức và lôgarit (quy tắc tích, thương, lũy thừa, đổi cơ số).",
        "Dạng 2: Giải phương trình, bất phương trình mũ và lôgarit (luôn đặt điều kiện đối số dương trước khi biến đổi hoặc gộp log).",
        "Dạng 3: Mô hình thực tế tăng trưởng mũ \\(N = N_0(1+r)^t\\), lãi kép, phân rã phóng xạ, độ pH \\(= -\\log_{10}[\\text{H}^+]\\) và mức cường độ âm."
      ]
    }
  },
  {
    "num": 7,
    "vol": 2,
    "roman": "VII",
    "title": "Quan hệ vuông góc trong không gian",
    "color": "cyan",
    "lessons": [
      22,
      23,
      24,
      25,
      26,
      27
    ],
    "summary": "Hai đường thẳng vuông góc, đường thẳng vuông góc mặt phẳng, định lí ba đường vuông góc, phép chiếu vuông góc, góc và khoảng cách trong không gian, thể tích khối lăng trụ – khối chóp – khối chóp cụt.",
    "review": {
      "title": "Ôn tập Chương VII – Quan hệ vuông góc, Khoảng cách & Thể tích",
      "connections": [
        "Chuỗi kiến thức xuyên suốt: Hai đường thẳng vuông góc \\(\\to\\) Đường thẳng vuông góc mặt phẳng (vuông góc 2 đường cắt nhau) \\(\\to\\) Phép chiếu vuông góc & Góc \\(\\to\\) Hai mặt phẳng vuông góc \\(\\to\\) Khoảng cách \\(\\to\\) Thể tích.",
        "Mọi phép tính góc, khoảng cách và thể tích đều phải xác định chính xác giao tuyến và chân đường vuông góc (chiều cao \\(h\\)), tuyệt đối không lấy cạnh bên xiên làm chiều cao."
      ],
      "keyTypes": [
        "Dạng 1: Chứng minh \\(d \\perp (P)\\), \\((P) \\perp (Q)\\) và chứng minh hai đường thẳng chéo nhau vuông góc (dùng định lí ba đường vuông góc).",
        "Dạng 2: Xác định và tính góc giữa đường thẳng với mặt phẳng (góc với hình chiếu), góc giữa hai mặt phẳng (hai đường cùng vuông góc giao tuyến).",
        "Dạng 3: Tính khoảng cách từ điểm đến mặt phẳng, khoảng cách giữa hai đường chéo nhau và tính thể tích lăng trụ \\(V=Bh\\), chóp \\(V=\\frac{1}{3}Bh\\), chóp cụt \\(V=\\frac{h}{3}(B_1+B_2+\\sqrt{B_1B_2})\\)."
      ]
    }
  },
  {
    "num": 8,
    "vol": 2,
    "roman": "VIII",
    "title": "Các quy tắc tính xác suất",
    "color": "amber",
    "lessons": [
      28,
      29,
      30
    ],
    "summary": "Biến cố hợp, biến cố giao, biến cố xung khắc và biến cố độc lập; công thức cộng xác suất và công thức nhân xác suất cho hai biến cố độc lập kết hợp sơ đồ Venn, sơ đồ hình cây.",
    "review": {
      "title": "Ôn tập Chương VIII – Các quy tắc tính xác suất",
      "connections": [
        "Phân biệt rạch ròi hai khái niệm: Xung khắc (\\(A \\cap B = \\varnothing \\Rightarrow P(A \\cap B) = 0\\)) và Độc lập (\\(P(A \\cap B) = P(A)P(B)\\)); hai biến cố có xác suất dương nếu xung khắc thì không thể độc lập.",
        "Từ khóa 'Hoặc / Ít nhất một' gắn với biến cố hợp \\(A \\cup B\\) (dùng công thức cộng hoặc biến cố đối \\(1 - P(\\bar{A}\\cap\\bar{B})\\)); từ khóa 'Đồng thời / Cả hai' gắn với biến cố giao \\(A \\cap B\\)."
      ],
      "keyTypes": [
        "Dạng 1: Mô tả biến cố hợp, giao, đối và tính xác suất bằng công thức cộng \\(P(A\\cup B) = P(A)+P(B)-P(A\\cap B)\\) hoặc sơ đồ Venn.",
        "Dạng 2: Bài toán phép thử nhiều bước độc lập (lấy có hoàn lại, bắn bia, hệ thống linh kiện hoạt động độc lập) dùng công thức nhân \\(P(A\\cap B)=P(A)P(B)\\).",
        "Dạng 3: Vẽ sơ đồ hình cây (nhân xác suất dọc theo nhánh, cộng xác suất các nhánh rời nhau)."
      ]
    }
  },
  {
    "num": 9,
    "vol": 2,
    "roman": "IX",
    "title": "Đạo hàm",
    "color": "rose",
    "lessons": [
      31,
      32,
      33
    ],
    "summary": "Định nghĩa đạo hàm từ giới hạn thương sai phân, ý nghĩa hình học (tiếp tuyến) và cơ học (vận tốc tức thời), các quy tắc đạo hàm sơ cấp – hàm hợp và đạo hàm cấp hai (gia tốc).",
    "review": {
      "title": "Ôn tập Chương IX – Đạo hàm",
      "connections": [
        "Kết nối từ định nghĩa giới hạn \\(f'(x_0) = \\lim_{\\Delta x \\to 0}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}\\) sang hệ số góc tiếp tuyến \\(k = f'(x_0)\\) và chuỗi đạo hàm chuyển động \\(s(t) \\xrightarrow{\\text{đạo hàm}} v(t)=s'(t) \\xrightarrow{\\text{đạo hàm}} a(t)=v'(t)=s''(t)\\).",
        "Khi đạo hàm hàm hợp \\(y = f(u(x))\\), luôn nhân thêm \\(u'(x)\\); đạo hàm cấp hai \\(f''(x) = (f'(x))'\\) là đạo hàm tiếp của \\(f'(x)\\) chứ không phải \\([f'(x)]^2\\)."
      ],
      "keyTypes": [
        "Dạng 1: Tính đạo hàm cấp một và cấp hai của hàm đa thức, phân thức, căn thức, lượng giác, mũ và lôgarit (đặc biệt lưu ý quy tắc hàm hợp).",
        "Dạng 2: Viết phương trình tiếp tuyến của đồ thị hàm số \\(y=f(x)\\) tại điểm \\(M(x_0; f(x_0))\\) hoặc biết hệ số góc \\(k\\).",
        "Dạng 3: Bài toán thực tế tính vận tốc tức thời \\(v(t)=s'(t)\\), gia tốc tức thời \\(a(t)=s''(t)\\) và tốc độ biến thiên tức thời của các đại lượng vật lí – hóa học – kinh tế."
      ]
    }
  }
];
const experientialModules = [
  {
    "vol": 1,
    "id": "thuc-hanh-tap-1",
    "title": "Thực hành trải nghiệm Tập Một: Toán trong Tài chính & Lực căng mặt ngoài",
    "items": [
      {
        "subtitle": "1. Toán học trong Tài chính cá nhân (Lãi đơn & Lãi kép)",
        "bullets": [
          "Mô hình lãi đơn (không nhập lãi vào vốn): \\(A = P(1 + nr)\\), trong đó \\(P\\) là vốn gốc ban đầu, \\(r\\) là lãi suất mỗi kì (đổi từ \\(\\%\\) sang số thập phân), \\(n\\) là số kì tính lãi. Dãy số tiền qua các kì lập thành một Cấp số cộng công sai \\(d = Pr\\).",
          "Mô hình lãi kép nhập vốn định kì: \\(A = P(1 + r)^n\\). Dãy số tiền qua các kì lập thành một Cấp số nhân công bội \\(q = 1 + r\\).",
          "Nguyên tắc xử lí nhiều khoản gửi/rút ở các thời điểm khác nhau: Quy đổi giá trị của từng khoản tiền về cùng một mốc thời điểm chung rồi mới cộng/trừ; luôn khớp đơn vị kì hạn lãi suất (tháng/quý/năm) với số kì \\(n\\)."
        ]
      },
      {
        "subtitle": "2. Đo và mô hình hóa Lực căng mặt ngoài của nước",
        "bullets": [
          "Mô hình vật lí – toán học: Khi kéo vòng dây hoặc thanh kim loại có chiều dài tiếp xúc \\(l\\) tách khỏi bề mặt chất lỏng, lực căng mặt ngoài xuất hiện dọc theo đường giới hạn.",
          "Với vật chỉ có 1 mặt thoáng tiếp xúc: \\(F = \\sigma l\\). Với màng xà phòng trên khung dây (có 2 mặt thoáng hai bên): \\(F = 2\\sigma l\\), trong đó \\(\\sigma\\) (đơn vị \\(\\text{N/m}\\)) là hệ số căng mặt ngoài.",
          "Lưu ý thực hành: Xác định chính xác số mặt màng chất lỏng (1 mặt hay 2 mặt) và chiều dài đoạn chịu lực \\(l\\) (đổi về mét) trước khi thế công thức."
        ]
      }
    ]
  },
  {
    "vol": 2,
    "id": "thuc-hanh-tap-2",
    "title": "Thực hành trải nghiệm Tập Hai: Mô hình Mũ – Lôgarit & Thực hành Hình học không gian",
    "items": [
      {
        "subtitle": "1. Thiết lập mô hình Tăng trưởng Mũ, Phân rã và Thang đo Lôgarit",
        "bullets": [
          "Mô hình tăng trưởng / phân rã: \\(N(t) = N_0 a^t\\) hoặc \\(N(t) = N_0 e^{kt}\\). Khi \\(a > 1\\) (hoặc \\(k > 0\\)) là tăng trưởng (dân số, vi khuẩn); khi \\(0 < a < 1\\) (hoặc \\(k < 0\\)) là phân rã phóng xạ hoặc suy giảm áp suất khí quyển theo độ cao.",
          "Lãi kép định kì \\(A = P(1+r)^n\\) và lãi kép liên tục \\(A = Pe^{rt}\\). Thang đo lôgarit (độ pH, mức cường độ âm \\(\\text{dB}\\), độ Richter): \\(L = C \\log_{10}\\left(\\frac{I}{I_0}\\right)\\).",
          "Quy trình thực hành từ dữ liệu: Xác định mốc ban đầu \\(t=0\\), tìm hệ số \\(a\\) (hoặc \\(k\\)) kèm đơn vị thời gian; dùng lôgarit để giải tìm thời gian \\(t\\); diễn giải kết quả trong bối cảnh thực tế và tránh ngoại suy quá xa khi điều kiện môi trường thay đổi."
        ]
      },
      {
        "subtitle": "2. Thực hành Hình học không gian với mô hình khối chóp & lăng trụ",
        "bullets": [
          "Sử dụng que tre, ống hút, dây dọi và bìa cứng để dựng mô hình khối chóp, khối lăng trụ; trực tiếp xác định đường thẳng vuông góc mặt phẳng, hai mặt phẳng vuông góc, chân đường cao và đoạn vuông góc chung của hai đường chéo nhau.",
          "Đo đạc các cạnh đáy, cạnh bên và góc để ước lượng khoảng cách, góc và thể tích \\(V\\); lập báo cáo gồm: Giả thiết hình học, Sơ đồ hình chiếu, Công thức áp dụng, Kết quả đo và Đánh giá sai số.",
          "Nguyên tắc cốt lõi: Mô hình vật thật hỗ trợ trực quan hóa không gian nhưng không thay thế lập luận chứng minh toán học."
        ]
      }
    ]
  }
];
const lessons = [
  {
    "num": 1,
    "chapter": 1,
    "vol": 1,
    "title": "Giá trị lượng giác của góc lượng giác",
    "subtitle": "Góc lượng giác, đơn vị radian, đường tròn lượng giác đơn vị, 4 giá trị lượng giác và các hệ thức cơ bản.",
    "concepts": [
      "Góc lượng giác được xác định bởi tia đầu \\(Ou\\), tia cuối \\(Ov\\) và chiều quay: quay ngược chiều kim đồng hồ mang dấu dương (\\(+\\)), quay cùng chiều kim đồng hồ mang dấu âm (\\(-\\)). Mọi góc lượng giác có cùng tia đầu và tia cuối sai khác nhau một bội nguyên của \\(2\\pi\\) (hoặc \\(360^\\circ\\)): \\(\\alpha = \\alpha_0 + k2\\pi\\; (k \\in \\mathbb{Z})\\).",
      "Đơn vị đo góc và độ dài cung tròn: \\(180^\\circ = \\pi\\text{ rad} \\Rightarrow a^\\circ = \\frac{\\pi a}{180}\\text{ rad}\\) và \\(\\alpha\\text{ rad} = \\left(\\frac{180\\alpha}{\\pi}\\right)^\\circ\\). Cung tròn bán kính \\(R\\) chắn góc ở tâm \\(\\alpha\\text{ (rad)}\\) có độ dài \\(l = R\\alpha \\iff \\alpha = \\frac{l}{R}\\).",
      "Đường tròn lượng giác: Là đường tròn định hướng tâm \\(O(0;0)\\), bán kính \\(R=1\\), điểm gốc \\(A(1;0)\\). Điểm cuối \\(M(x_M; y_M)\\) biểu diễn góc lượng giác \\(\\alpha\\) có hoành độ \\(x_M = \\cos\\alpha\\) và tung độ \\(y_M = \\sin\\alpha\\).",
      "Định nghĩa \\(\\tan\\alpha\\) và \\(\\cot\\alpha\\): \\(\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}\\) (xác định khi \\(\\cos\\alpha \\ne 0 \\iff \\alpha \\ne \\frac{\\pi}{2} + k\\pi\\)); \\(\\cot\\alpha = \\frac{\\cos\\alpha}{\\sin\\alpha}\\) (xác định khi \\(\\sin\\alpha \\ne 0 \\iff \\alpha \\ne k\\pi\\)).",
      "Tính tuần hoàn và chẵn/lẻ: \\(\\sin(\\alpha + k2\\pi) = \\sin\\alpha\\), \\(\\cos(\\alpha + k2\\pi) = \\cos\\alpha\\) (chu kì \\(2\\pi\\)); \\(\\tan(\\alpha + k\\pi) = \\tan\\alpha\\), \\(\\cot(\\alpha + k\\pi) = \\cot\\alpha\\) (chu kì \\(\\pi\\)). Hàm \\(\\cos(-\\alpha) = \\cos\\alpha\\) (chẵn); các hàm \\(\\sin, \\tan, \\cot\\) đổi dấu khi đổi dấu góc (lẻ).",
      "Dấu các giá trị lượng giác theo 4 góc phần tư: Góc phần tư I \\((0; \\frac{\\pi}{2})\\): cả 4 đều dương; Góc phần tư II \\((\\frac{\\pi}{2}; \\pi)\\): chỉ \\(\\sin > 0\\); Góc phần tư III \\((\\pi; \\frac{3\\pi}{2})\\): \\(\\tan, \\cot > 0\\); Góc phần tư IV \\((\\frac{3\\pi}{2}; 2\\pi)\\): chỉ \\(\\cos > 0\\) (Mẹo nhớ: Nhất cả – Nhì sin – Tam tan/cot – Tứ cos)."
    ],
    "formulas": [
      {
        "name": "Đổi độ – radian & Độ dài cung tròn",
        "eq": "\\(180^\\circ = \\pi\\text{ rad}; \\quad l = R\\alpha \\; (\\alpha\\text{ tính bằng rad})\\)",
        "note": "Phải đổi góc sang radian trước khi dùng \\(l = R\\alpha\\)."
      },
      {
        "name": "Miền giá trị & Điều kiện xác định",
        "eq": "\\(-1 \\le \\sin\\alpha \\le 1; \\quad -1 \\le \\cos\\alpha \\le 1\\)<br>\\(\\tan\\alpha\\) xác định khi \\(\\alpha \\ne \\frac{\\pi}{2}+k\\pi\\); \\(\\cot\\alpha\\) xác định khi \\(\\alpha \\ne k\\pi\\)",
        "note": "\\(k \\in \\mathbb{Z}\\)."
      },
      {
        "name": "Bốn hằng đẳng thức lượng giác cơ bản",
        "eq": "\\(\\sin^2\\alpha + \\cos^2\\alpha = 1\\)<br>\\(1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}\\; (\\alpha \\ne \\frac{\\pi}{2}+k\\pi)\\)<br>\\(1 + \\cot^2\\alpha = \\frac{1}{\\sin^2\\alpha}\\; (\\alpha \\ne k\\pi)\\)<br>\\(\\tan\\alpha \\cdot \\cot\\alpha = 1\\; (\\alpha \\ne k\\frac{\\pi}{2})\\)",
        "note": "Dùng để tìm các giá trị còn lại khi biết 1 giá trị lượng giác."
      },
      {
        "name": "Các góc có liên quan đặc biệt (Cos đối – Sin bù – Phụ chéo – Khác pi tan/cot)",
        "eq": "• Đối nhau \\((-\\alpha)\\): \\(\\cos(-\\alpha)=\\cos\\alpha,\\; \\sin(-\\alpha)=-\\sin\\alpha\\)<br>• Bù nhau \\((\\pi-\\alpha)\\): \\(\\sin(\\pi-\\alpha)=\\sin\\alpha,\\; \\cos(\\pi-\\alpha)=-\\cos\\alpha\\)<br>• Phụ nhau \\((\\frac{\\pi}{2}-\\alpha)\\): \\(\\sin(\\frac{\\pi}{2}-\\alpha)=\\cos\\alpha,\\; \\tan(\\frac{\\pi}{2}-\\alpha)=\\cot\\alpha\\)<br>• Hơn kém \\(\\pi\\): \\(\\tan(\\alpha+\\pi)=\\tan\\alpha,\\; \\sin(\\alpha+\\pi)=-\\sin\\alpha,\\; \\cos(\\alpha+\\pi)=-\\cos\\alpha\\)",
        "note": "Giúp đưa góc lớn về góc nhọn đặc biệt \\(0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}\\)."
      }
    ],
    "methods": [
      "Bước 1 (Rút gọn góc lớn): Tách góc đã cho dưới dạng \\(\\alpha = \\alpha_0 + k2\\pi\\) (hoặc \\(+k\\pi\\)) để đưa về góc nằm trong \\([0; 2\\pi)\\) và quy về các góc đặc biệt \\(0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}\\).",
      "Bước 2 (Xác định dấu theo góc phần tư): Khi tính \\(\\cos\\alpha = \\pm\\sqrt{1-\\sin^2\\alpha}\\) hoặc \\(\\sin\\alpha = \\pm\\sqrt{1-\\cos^2\\alpha}\\), bắt buộc kiểm tra \\(\\alpha\\) thuộc góc phần tư nào để chọn dấu \\(+\\) hoặc \\(-\\) chính xác.",
      "Lỗi dễ mắc: Quên kiểm tra dấu góc phần tư khi khai căn; áp dụng \\(l = R\\alpha\\) khi \\(\\alpha\\) vẫn để đơn vị độ."
    ],
    "applications": [
      "Tính quãng đường đầu kim đồng hồ hoặc điểm trên bánh đà, vệ tinh di chuyển trên quỹ đạo tròn: \\(l = R\\alpha\\).",
      "Biểu diễn vị trí dao động tuần hoàn thông qua hình chiếu của chuyển động tròn đều lên trục tọa độ."
    ],
    "diagramCaption": "Đường tròn lượng giác đơn vị: điểm biểu diễn M(cos α; sin α), chiều quay dương/âm và dấu trong 4 góc phần tư."
  },
  {
    "num": 2,
    "chapter": 1,
    "vol": 1,
    "title": "Công thức lượng giác",
    "subtitle": "Công thức cộng, công thức nhân đôi, công thức hạ bậc, biến đổi tổng thành tích và tích thành tổng.",
    "concepts": [
      "Nhóm công thức cộng cho phép tính giá trị lượng giác của tổng/hiệu hai góc \\(a \\pm b\\) qua các giá trị lượng giác của từng góc \\(a\\) và \\(b\\).",
      "Nhóm công thức nhân đôi (khi \\(b = a\\)) và công thức hạ bậc giúp chuyển đổi linh hoạt giữa góc \\(a\\) (bậc hai) và góc \\(2a\\) (bậc nhất).",
      "Nhóm công thức biến đổi tổng thành tích dùng để đưa tổng/hiệu về dạng tích (phục vụ rút gọn phân thức hoặc giải phương trình tích); ngược lại công thức tích thành tổng giúp tách tích thành tổng các hàm bậc nhất.",
      "Biểu thức bậc nhất \\(A\\sin x + B\\cos x\\) (với \\(A^2 + B^2 > 0\\)) luôn biến đổi được về một hàm sin duy nhất: \\(\\sqrt{A^2+B^2}\\sin(x + \\varphi)\\)."
    ],
    "formulas": [
      {
        "name": "1. Công thức cộng",
        "eq": "\\(\\sin(a \\pm b) = \\sin a\\cos b \\pm \\cos a\\sin b\\)<br>\\(\\cos(a \\pm b) = \\cos a\\cos b \\mp \\sin a\\sin b\\)<br>\\(\\tan(a \\pm b) = \\frac{\\tan a \\pm \\tan b}{1 \\mp \\tan a\\tan b}\\)",
        "note": "Chú ý: Cos thì cos cos sin sin (dấu ngược); Sin thì sin cos cos sin (dấu cùng). Công thức tan cần các biểu thức xác định và \\(1 \\mp \\tan a\\tan b \\ne 0\\)."
      },
      {
        "name": "2. Công thức nhân đôi",
        "eq": "\\(\\sin 2a = 2\\sin a\\cos a\\)<br>\\(\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a\\)<br>\\(\\tan 2a = \\frac{2\\tan a}{1 - \\tan^2 a}\\)",
        "note": "Chọn dạng \\(\\cos 2a\\) phù hợp để triệt tiêu số \\(1\\) trong \\(1 + \\cos 2a = 2\\cos^2 a\\) hoặc \\(1 - \\cos 2a = 2\\sin^2 a\\)."
      },
      {
        "name": "3. Công thức hạ bậc",
        "eq": "\\(\\sin^2 a = \\frac{1 - \\cos 2a}{2}; \\quad \\cos^2 a = \\frac{1 + \\cos 2a}{2}; \\quad \\tan^2 a = \\frac{1 - \\cos 2a}{1 + \\cos 2a}\\)",
        "note": "Hạ bậc từ bậc 2 xuống bậc 1, đồng thời góc nhân đôi từ \\(a\\) lên \\(2a\\)."
      },
      {
        "name": "4. Công thức biến đổi tổng thành tích",
        "eq": "\\(\\cos a + \\cos b = 2\\cos\\frac{a+b}{2}\\cos\\frac{a-b}{2}\\)<br>\\(\\cos a - \\cos b = -2\\sin\\frac{a+b}{2}\\sin\\frac{a-b}{2}\\)<br>\\(\\sin a + \\sin b = 2\\sin\\frac{a+b}{2}\\cos\\frac{a-b}{2}\\)<br>\\(\\sin a - \\sin b = 2\\cos\\frac{a+b}{2}\\sin\\frac{a-b}{2}\\)",
        "note": "Chú ý dấu trừ đằng trước ở công thức \\(\\cos a - \\cos b\\)."
      },
      {
        "name": "5. Công thức biến đổi tích thành tổng & Gộp A sin x + B cos x",
        "eq": "\\(\\cos a\\cos b = \\frac{1}{2}[\\cos(a-b) + \\cos(a+b)]\\)<br>\\(\\sin a\\sin b = \\frac{1}{2}[\\cos(a-b) - \\cos(a+b)]\\)<br>\\(\\sin a\\cos b = \\frac{1}{2}[\\sin(a-b) + \\sin(a+b)]\\)<br>\\(A\\sin x + B\\cos x = \\sqrt{A^2+B^2}\\sin(x+\\varphi)\\) với \\(\\cos\\varphi = \\frac{A}{\\sqrt{A^2+B^2}},\\; \\sin\\varphi = \\frac{B}{\\sqrt{A^2+B^2}}\\)",
        "note": "Hệ quả cực trị: \\(-\\sqrt{A^2+B^2} \\le A\\sin x + B\\cos x \\le \\sqrt{A^2+B^2}\\)."
      }
    ],
    "methods": [
      "Chọn công thức theo cấu trúc biểu thức: (1) Thấy góc \\(2a\\) đi kèm góc \\(a\\) \\(\\to\\) dùng nhân đôi hoặc hạ bậc; (2) Cần rút gọn phân thức có tử/mẫu là tổng \\(\\to\\) dùng tổng thành tích để đặt nhân tử chung; (3) Biểu thức chứa tích \\(\\sin a\\cos b\\) \\(\\to\\) dùng tích thành tổng.",
      "Tách góc không đặc biệt thành tổng/hiệu hai góc đặc biệt: ví dụ \\(15^\\circ = 45^\\circ - 30^\\circ\\) (tức \\(\\frac{\\pi}{12} = \\frac{\\pi}{4} - \\frac{\\pi}{6}\\)), \\(75^\\circ = 45^\\circ + 30^\\circ\\).",
      "Lỗi dễ mắc: Tuyệt đối không chia hai vế cho một biểu thức lượng giác có thể bằng \\(0\\) nếu chưa xét riêng trường hợp biểu thức đó bằng \\(0\\)."
    ],
    "applications": [
      "Tổng hợp hai dao động điều hòa cùng tần số \\(x = x_1 + x_2\\) và giải thích hiện tượng giao thoa sóng âm (phách âm học nhờ công thức tổng thành tích).",
      "Tìm giá trị lớn nhất, giá trị nhỏ nhất của dòng điện/điện áp xoay chiều có dạng \\(u = A\\sin\\omega t + B\\cos\\omega t\\)."
    ],
    "diagramCaption": "Sơ đồ mạng lưới chuyển đổi hai chiều giữa các nhóm công thức lượng giác: Cộng – Nhân đôi – Hạ bậc – Tổng/Tích."
  },
  {
    "num": 3,
    "chapter": 1,
    "vol": 1,
    "title": "Hàm số lượng giác",
    "subtitle": "Tập xác định, tập giá trị, tính tuần hoàn, tính chẵn/lẻ, sự biến thiên và đồ thị của y = sin x, cos x, tan x, cot x.",
    "concepts": [
      "Hàm số \\(y = \\sin x\\) và \\(y = \\cos x\\): Tập xác định \\(D = \\mathbb{R}\\), tập giá trị \\(T = [-1; 1]\\), tuần hoàn với chu kì cơ sở \\(T_0 = 2\\pi\\). Hàm \\(y = \\sin x\\) là hàm số lẻ (đồ thị đối xứng qua gốc \\(O\\)), đồng biến trên mỗi khoảng \\(\\left(-\\frac{\\pi}{2}+k2\\pi; \\frac{\\pi}{2}+k2\\pi\\right)\\) và nghịch biến trên \\(\\left(\\frac{\\pi}{2}+k2\\pi; \\frac{3\\pi}{2}+k2\\pi\\right)\\). Hàm \\(y = \\cos x\\) là hàm số chẵn (đồ thị đối xứng qua trục \\(Oy\\)), nghịch biến trên \\((k2\\pi; \\pi+k2\\pi)\\) và đồng biến trên \\((-\\pi+k2\\pi; k2\\pi)\\).",
      "Hàm số \\(y = \\tan x\\): Tập xác định \\(D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi \\mid k \\in \\mathbb{Z}\\right\\}\\), tập giá trị \\(T = \\mathbb{R}\\), hàm số lẻ, tuần hoàn với chu kì \\(T_0 = \\pi\\), luôn đồng biến trên từng khoảng xác định \\(\\left(-\\frac{\\pi}{2}+k\\pi; \\frac{\\pi}{2}+k\\pi\\right)\\), nhận các đường thẳng \\(x = \\frac{\\pi}{2}+k\\pi\\) làm tiệm cận đứng.",
      "Hàm số \\(y = \\cot x\\): Tập xác định \\(D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\}\\), tập giá trị \\(T = \\mathbb{R}\\), hàm số lẻ, tuần hoàn với chu kì \\(T_0 = \\pi\\), luôn nghịch biến trên từng khoảng xác định \\((k\\pi; \\pi+k\\pi)\\), nhận các đường thẳng \\(x = k\\pi\\) làm tiệm cận đứng.",
      "Giao điểm với trục hoành \\(Ox\\) (nghiệm đặc biệt): \\(\\sin x = 0 \\iff x = k\\pi\\); \\(\\cos x = 0 \\iff x = \\frac{\\pi}{2} + k\\pi\\); \\(\\tan x = 0 \\iff x = k\\pi\\); \\(\\cot x = 0 \\iff x = \\frac{\\pi}{2} + k\\pi\\).",
      "Hàm mở rộng \\(y = a\\sin(bx+c)+d\\) (hoặc \\(\\cos\\) với \\(a, b \\ne 0\\)): Biên độ dao động \\(|a|\\), chu kì \\(T = \\frac{2\\pi}{|b|}\\), tập giá trị \\([d - |a|; d + |a|]\\). Với \\(y = a\\tan(bx+c)+d\\) hoặc \\(\\cot\\), chu kì là \\(T = \\frac{\\pi}{|b|}\\)."
    ],
    "formulas": [
      {
        "name": "Bảng tổng hợp 4 hàm số lượng giác cơ bản",
        "eq": "• \\(y=\\sin x\\): \\(D=\\mathbb{R},\\; T=[-1;1],\\; T_0=2\\pi,\\; \\text{Lẻ}\\)<br>• \\(y=\\cos x\\): \\(D=\\mathbb{R},\\; T=[-1;1],\\; T_0=2\\pi,\\; \\text{Chẵn}\\)<br>• \\(y=\\tan x\\): \\(D=\\mathbb{R}\\setminus\\{\\frac{\\pi}{2}+k\\pi\\},\\; T=\\mathbb{R},\\; T_0=\\pi,\\; \\text{Lẻ, ĐB}\\)<br>• \\(y=\\cot x\\): \\(D=\\mathbb{R}\\setminus\\{k\\pi\\},\\; T=\\mathbb{R},\\; T_0=\\pi,\\; \\text{Lẻ, NB}\\)",
        "note": "Hàm \\(\\tan x\\) và \\(\\cot x\\) không bị chặn (không có GTLN/GTNN trên \\(D\\))."
      },
      {
        "name": "Chu kì và Cực trị của hàm y = a sin(bx + c) + d",
        "eq": "\\(T = \\frac{2\\pi}{|b|}; \\quad y_{\\max} = d + |a|; \\quad y_{\\min} = d - |a|\\)",
        "note": "Với \\(\\tan(bx+c)\\) và \\(\\cot(bx+c)\\) thì chu kì là \\(T = \\frac{\\pi}{|b|}\\)."
      },
      {
        "name": "Các trạng thái đặc biệt của sin x và cos x",
        "eq": "\\(\\sin x = 1 \\iff x = \\frac{\\pi}{2}+k2\\pi; \\quad \\sin x = -1 \\iff x = -\\frac{\\pi}{2}+k2\\pi\\)<br>\\(\\cos x = 1 \\iff x = k2\\pi; \\quad \\cos x = -1 \\iff x = \\pi+k2\\pi\\)",
        "note": "Các trạng thái \\(\\pm 1\\) chỉ có 1 điểm biểu diễn trên đường tròn nên đuôi luôn là \\(+k2\\pi\\)."
      }
    ],
    "methods": [
      "Tìm tập xác định \\(D\\): Chú ý điều kiện mẫu thức \\(\\ne 0\\), biểu thức dưới căn bậc chẵn \\(\\ge 0\\), và điều kiện riêng của \\(\\tan u\\) (\\(u \\ne \\frac{\\pi}{2}+k\\pi\\)), \\(\\cot u\\) (\\(u \\ne k\\pi\\)).",
      "Xét tính chẵn/lẻ: (1) Kiểm tra \\(D\\) có đối xứng không (\\(\\forall x \\in D \\Rightarrow -x \\in D\\)); (2) Tính \\(f(-x)\\): nếu \\(f(-x) = f(x)\\) là hàm chẵn, nếu \\(f(-x) = -f(x)\\) là hàm lẻ.",
      "Tìm GTLN, GTNN: Đưa hàm số về một biến lượng giác rồi đánh giá dựa vào \\(-1 \\le \\sin u, \\cos u \\le 1\\) hoặc \\(0 \\le \\sin^2 u, \\cos^2 u \\le 1\\)."
    ],
    "applications": [
      "Mô hình hóa mực nước thủy triều lên xuống theo giờ trong ngày, biến thiên nhiệt độ trung bình các tháng trong năm và chiều cao cabin vòng quay Mặt Trời (Ferris wheel).",
      "Mô tả đồ thị li độ – thời gian của dao động cơ học và sóng điện từ."
    ],
    "diagramCaption": "Đồ thị các hàm số lượng giác: đường hình sin của y = sin x, y = cos x trên [-π; 2π] và các nhánh tiệm cận của y = tan x."
  },
  {
    "num": 4,
    "chapter": 1,
    "vol": 1,
    "title": "Phương trình lượng giác cơ bản",
    "subtitle": "Công thức nghiệm và điều kiện có nghiệm của các phương trình sin x = m, cos x = m, tan x = m, cot x = m.",
    "concepts": [
      "Phương trình \\(\\sin x = m\\) và \\(\\cos x = m\\) chỉ có nghiệm khi và chỉ khi \\(|m| \\le 1 \\iff -1 \\le m \\le 1\\). Nếu \\(|m| > 1\\) thì phương trình vô nghiệm.",
      "Phương trình \\(\\tan x = m\\) và \\(\\cot x = m\\) luôn có nghiệm với mọi \\(m \\in \\mathbb{R}\\).",
      "Khi đưa được về phương trình hai vế cùng một hàm lượng giác (\\(\\sin u = \\sin v\\), \\(\\cos u = \\cos v\\), \\(\\tan u = \\tan v\\)), ta áp dụng trực tiếp công thức nghiệm tương đương; lưu ý nếu đề bài cho bằng độ thì công thức nghiệm phải viết toàn bộ theo độ (\\(+k360^\\circ\\) hoặc \\(+k180^\\circ\\)), tuyệt đối không viết lẫn độ và radian trong cùng một công thức."
    ],
    "formulas": [
      {
        "name": "1. Phương trình sin x = m (|m| ≤ 1, đặt sin α = m)",
        "eq": "\\(\\sin u = \\sin v \\iff \\left[\\begin{array}{l} u = v + k2\\pi \\\\ u = \\pi - v + k2\\pi \\end{array}\\right. \\quad (k \\in \\mathbb{Z})\\)",
        "note": "Trường hợp không phải góc đặc biệt: dùng \\(\\arcsin m \\in \\left[-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right]\\)."
      },
      {
        "name": "2. Phương trình cos x = m (|m| ≤ 1, đặt cos α = m)",
        "eq": "\\(\\cos u = \\cos v \\iff \\left[\\begin{array}{l} u = v + k2\\pi \\\\ u = -v + k2\\pi \\end{array}\\right. \\iff u = \\pm v + k2\\pi \\quad (k \\in \\mathbb{Z})\\)",
        "note": "Trường hợp không đặc biệt: \\(x = \\pm\\arccos m + k2\\pi\\) với \\(\\arccos m \\in [0; \\pi]\\)."
      },
      {
        "name": "3. Phương trình tan x = m và cot x = m (m ∈ ℝ)",
        "eq": "\\(\\tan u = \\tan v \\iff u = v + k\\pi \\quad \\left(\\text{ĐK: } u, v \\ne \\frac{\\pi}{2}+m\\pi\\right)\\)<br>\\(\\cot u = \\cot v \\iff u = v + k\\pi \\quad (\\text{ĐK: } u, v \\ne m\\pi)\\)",
        "note": "Với \\(m\\) không đặc biệt: \\(x = \\arctan m + k\\pi\\) hoặc \\(x = \\operatorname{arccot} m + k\\pi\\)."
      },
      {
        "name": "4. Đổi chéo giữa sin và cos bằng cung phụ nhau",
        "eq": "\\(\\sin u = \\cos v \\iff \\cos\\left(\\frac{\\pi}{2} - u\\right) = \\cos v\\)<br>\\(-\\sin u = \\sin(-u); \\quad -\\cos u = \\cos(\\pi - u)\\)",
        "note": "Đưa hai vế về cùng một hàm trước khi áp dụng công thức nghiệm."
      }
    ],
    "methods": [
      "Quy trình 4 bước giải phương trình lượng giác: (1) Đặt điều kiện xác định (nếu có mẫu thức hoặc \\(\\tan, \\cot\\)); (2) Dùng công thức lượng giác đưa về phương trình cơ bản cùng một hàm; (3) Giải tìm các họ nghiệm theo \\(k \\in \\mathbb{Z}\\); (4) Đối chiếu điều kiện xác định và lọc nghiệm (nếu đề yêu cầu tìm nghiệm thuộc đoạn \\([a; b]\\), giải bất phương trình \\(a \\le x(k) \\le b\\) để tìm các giá trị \\(k \\in \\mathbb{Z}\\)).",
      "Khi đặt ẩn phụ \\(t = \\sin x\\) hoặc \\(t = \\cos x\\) để đưa về phương trình bậc hai \\(at^2 + bt + c = 0\\), bắt buộc phải có điều kiện \\(-1 \\le t \\le 1\\).",
      "Lỗi dễ mắc: Viết lẫn lộn \\(30^\\circ + k2\\pi\\); quên kiểm tra điều kiện xác định làm nhận nghiệm ngoại lai; gộp thiếu họ nghiệm."
    ],
    "applications": [
      "Xác định các thời điểm trong ngày mà chiều cao thủy triều, nhiệt độ hoặc điện áp xoay chiều đạt một giá trị cho trước.",
      "Tính thời điểm hai chất điểm dao động điều hòa gặp nhau (\\(x_1(t) = x_2(t)\\))."
    ],
    "diagramCaption": "Minh họa hình học nghiệm của phương trình sin x = m (giao với đường nằm ngang y = m) và cos x = m (giao với đường thẳng đứng x = m) trên đường tròn lượng giác."
  },
  {
    "num": 5,
    "chapter": 2,
    "vol": 1,
    "title": "Dãy số",
    "subtitle": "Khái niệm dãy số hữu hạn/vô hạn, các cách cho dãy số, dãy số tăng – dãy số giảm và dãy số bị chặn.",
    "concepts": [
      "Mỗi hàm số \\(u\\) xác định trên tập các số nguyên dương \\(\\mathbb{N}^* = \\{1; 2; 3; \\dots\\}\\) được gọi là một dãy số vô hạn, kí hiệu \\((u_n)\\); \\(u_1\\) là số hạng đầu, \\(u_n\\) là số hạng thứ \\(n\\) (số hạng tổng quát). Nếu xác định trên tập \\(\\{1; 2; \\dots; m\\}\\) thì gọi là dãy số hữu hạn.",
      "Bốn cách cho một dãy số: (1) Liệt kê các số hạng; (2) Cho công thức của số hạng tổng quát \\(u_n = f(n)\\); (3) Cho bằng hệ thức truy hồi (cho số hạng đầu và công thức tính \\(u_n\\) theo các số hạng đứng trước nó); (4) Cho bằng lời mô tả hoặc bảng.",
      "Tính tăng, giảm (đơn điệu): Dãy \\((u_n)\\) là dãy số tăng nếu \\(u_{n+1} > u_n, \\forall n \\in \\mathbb{N}^*\\); là dãy số giảm nếu \\(u_{n+1} < u_n, \\forall n \\in \\mathbb{N}^*\\).",
      "Dãy số bị chặn: Bị chặn trên nếu \\(\\exists M \\in \\mathbb{R}: u_n \\le M, \\forall n \\in \\mathbb{N}^*\\); bị chặn dưới nếu \\(\\exists m \\in \\mathbb{R}: u_n \\ge m, \\forall n \\in \\mathbb{N}^*\\); bị chặn nếu vừa bị chặn trên vừa bị chặn dưới (\\(m \\le u_n \\le M\\))."
    ],
    "formulas": [
      {
        "name": "Xét tính đơn điệu bằng hiệu số",
        "eq": "\\(D = u_{n+1} - u_n\\):<br>• Nếu \\(D > 0, \\forall n \\in \\mathbb{N}^* \\Rightarrow (u_n)\\) là dãy số tăng.<br>• Nếu \\(D < 0, \\forall n \\in \\mathbb{N}^* \\Rightarrow (u_n)\\) là dãy số giảm.",
        "note": "Phương pháp phổ biến và tổng quát nhất."
      },
      {
        "name": "Xét tính đơn điệu bằng thương số (khi u_n > 0)",
        "eq": "Với \\(u_n > 0, \\forall n \\in \\mathbb{N}^*\\), xét \\(T = \\frac{u_{n+1}}{u_n}\\):<br>• \\(T > 1 \\Rightarrow (u_n)\\) tăng; \\quad • \\(T < 1 \\Rightarrow (u_n)\\) giảm.",
        "note": "Rất hiệu quả khi \\(u_n\\) chứa lũy thừa \\(a^n\\) hoặc giai thừa \\(n!\\)."
      },
      {
        "name": "Điều kiện dãy số bị chặn",
        "eq": "\\(\\exists m, M \\in \\mathbb{R} : m \\le u_n \\le M, \\quad \\forall n \\in \\mathbb{N}^*\\)",
        "note": "Thường tách phần nguyên \\(u_n = a + \\frac{b}{n+c}\\) hoặc dùng bất đẳng thức, đánh giá \\(|\\sin n| \\le 1\\)."
      }
    ],
    "methods": [
      "Khi xét dấu \\(u_{n+1} - u_n\\), chú ý thay đúng \\(n\\) bởi \\((n+1)\\) ở mọi vị trí có \\(n\\) trong công thức \\(u_n\\), sau đó quy đồng hoặc nhóm nhân tử và sử dụng \\(n \\ge 1\\).",
      "Với dãy cho bởi hệ thức truy hồi: Tính \\(u_1, u_2, u_3, u_4\\) để dự đoán công thức tổng quát \\(u_n\\), sau đó chứng minh bằng phương pháp quy nạp toán học (Bước 1: kiểm tra \\(n=1\\); Bước 2: giả sử đúng với \\(n=k\\), chứng minh đúng với \\(n=k+1\\)).",
      "Lỗi dễ mắc: Chỉ tính \\(u_1 < u_2 < u_3\\) rồi vội kết luận dãy tăng mà không chứng minh tổng quát cho mọi \\(n \\in \\mathbb{N}^*\\) (nhưng để chứng minh dãy KHÔNG tăng/không giảm thì chỉ cần chỉ ra 3 số hạng cụ thể vi phạm)."
    ],
    "applications": [
      "Dãy Fibonacci \\(F_1 = 1, F_2 = 1, F_{n} = F_{n-1} + F_{n-2}\\) mô tả sự phân nhánh thực vật và cấu trúc xoắn ốc trong tự nhiên.",
      "Biểu diễn thuật toán lặp và độ phức tạp tính toán trong khoa học máy tính."
    ],
    "diagramCaption": "Biểu diễn hình học các số hạng u_n trên hệ trục tọa độ (n; u_n): phân biệt dãy tăng, dãy giảm và đường biên chặn trên M, chặn dưới m."
  },
  {
    "num": 6,
    "chapter": 2,
    "vol": 1,
    "title": "Cấp số cộng",
    "subtitle": "Định nghĩa cấp số cộng, công sai d, công thức số hạng tổng quát u_n, tính chất trung bình cộng và tổng n số hạng đầu S_n.",
    "concepts": [
      "Cấp số cộng (CSC) là một dãy số (hữu hạn hoặc vô hạn), trong đó kể từ số hạng thứ hai, mỗi số hạng đều bằng số hạng đứng ngay trước nó cộng với một số không đổi \\(d\\): \\(u_{n+1} = u_n + d, \\forall n \\in \\mathbb{N}^*\\). Số \\(d = u_{n+1} - u_n\\) gọi là công sai.",
      "Nếu \\(d > 0\\) thì CSC là dãy số tăng; nếu \\(d < 0\\) thì CSC là dãy số giảm; nếu \\(d = 0\\) thì CSC là dãy số không đổi (mọi số hạng đều bằng \\(u_1\\)).",
      "Tính chất đặc trưng của 3 số hạng liên tiếp: Ba số \\(a, b, c\\) theo thứ tự lập thành một cấp số cộng khi và chỉ khi \\(a + c = 2b \\iff b = \\frac{a+c}{2}\\)."
    ],
    "formulas": [
      {
        "name": "1. Hệ thức truy hồi & Công sai",
        "eq": "\\(u_{n+1} = u_n + d \\iff d = u_{n+1} - u_n \\quad (n \\in \\mathbb{N}^*)\\)",
        "note": "Để chứng minh \\((u_n)\\) là CSC, ta chứng minh hiệu \\(u_{n+1} - u_n\\) là hằng số không phụ thuộc \\(n\\)."
      },
      {
        "name": "2. Số hạng tổng quát u_n",
        "eq": "\\(u_n = u_1 + (n - 1)d \\quad (n \\ge 2)\\)<br>Mở rộng: \\(u_n = u_k + (n - k)d \\implies d = \\frac{u_n - u_k}{n - k}\\)",
        "note": "Từ \\(u_1\\) đến \\(u_n\\) có đúng \\((n-1)\\) khoảng cách công sai \\(d\\)."
      },
      {
        "name": "3. Tính chất các số hạng cách đều",
        "eq": "\\(u_k = \\frac{u_{k-1} + u_{k+1}}{2} = \\frac{u_{k-r} + u_{k+r}}{2} \\quad (k > r \\ge 1)\\)",
        "note": "Mỗi số hạng (trừ số hạng đầu và cuối) bằng trung bình cộng hai số hạng đứng kề nó."
      },
      {
        "name": "4. Tổng n số hạng đầu tiên S_n",
        "eq": "\\(S_n = u_1 + u_2 + \\dots + u_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n - 1)d]}{2}\\)",
        "note": "Liên hệ giữa \\(u_n\\) và \\(S_n\\): \\(u_1 = S_1\\) và \\(u_n = S_n - S_{n-1}\\) với \\(n \\ge 2\\)."
      }
    ],
    "methods": [
      "Phương pháp giải hệ phương trình CSC: Biểu diễn mọi số hạng và tổng trong đề bài theo hai ẩn cơ bản là số hạng đầu \\(u_1\\) và công sai \\(d\\), rồi giải hệ tìm \\((u_1; d)\\).",
      "Mẹo đặt ẩn đối xứng: Nếu biết tổng và tích của 3 số hạng liên tiếp lập thành CSC, đặt 3 số đó là \\(x - d,\\; x,\\; x + d\\) để tính ngay \\(x\\).",
      "Lỗi dễ mắc trong bài toán thực tế: Nhầm lẫn giữa số mốc và số khoảng (ví dụ từ tầng 1 lên tầng 10 hoặc từ năm 2020 đến năm 2030 có bao nhiêu số hạng \\(n\\) và bao nhiêu bước nhảy \\(n-1\\))."
    ],
    "applications": [
      "Tính tổng số ghế trong rạp hát/khán đài thiết kế theo hình rẻ quạt (mỗi hàng sau nhiều hơn hàng trước \\(d\\) ghế), số viên gạch xếp bậc thang hoặc số ống thép xếp chồng hình thang.",
      "Bài toán tiết kiệm gửi góp đều đặn, lương tăng định kì một mức cố định hoặc chuyển động thẳng biến đổi đều."
    ],
    "diagramCaption": "Mô hình bậc thang đều của Cấp số cộng (mỗi bậc tăng thêm d) và cách ghép đảo ngược hai dãy để suy ra công thức tổng S_n = n(u_1 + u_n)/2."
  },
  {
    "num": 7,
    "chapter": 2,
    "vol": 1,
    "title": "Cấp số nhân",
    "subtitle": "Định nghĩa cấp số nhân, công bội q, công thức số hạng tổng quát u_n, trung bình nhân và tổng n số hạng đầu S_n.",
    "concepts": [
      "Cấp số nhân (CSN) là một dãy số (hữu hạn hoặc vô hạn), trong đó kể từ số hạng thứ hai, mỗi số hạng đều bằng tích của số hạng đứng ngay trước nó với một số không đổi \\(q\\): \\(u_{n+1} = u_n \\cdot q, \\forall n \\in \\mathbb{N}^*\\). Số \\(q\\) gọi là công bội.",
      "Các trường hợp đặc biệt: Nếu \\(q = 1\\) thì CSN là dãy số không đổi \\(u_1, u_1, u_1, \\dots\\); nếu \\(q = 0\\) thì dãy có dạng \\(u_1, 0, 0, \\dots\\); nếu \\(u_1 = 0\\) thì mọi số hạng đều bằng \\(0\\); nếu \\(q < 0\\) thì CSN là dãy số đan dấu.",
      "Tính chất đặc trưng của 3 số hạng liên tiếp khác 0: Ba số \\(a, b, c\\) khác 0 theo thứ tự lập thành một CSN khi và chỉ khi \\(b^2 = a \\cdot c \\iff |b| = \\sqrt{ac}\\)."
    ],
    "formulas": [
      {
        "name": "1. Hệ thức truy hồi & Công bội",
        "eq": "\\(u_{n+1} = u_n \\cdot q \\quad (n \\in \\mathbb{N}^*); \\qquad q = \\frac{u_{n+1}}{u_n} \\; (\\text{khi } u_n \\ne 0)\\)",
        "note": "Không chia cho \\(u_n\\) nếu chưa biết \\(u_n \\ne 0\\)."
      },
      {
        "name": "2. Số hạng tổng quát u_n",
        "eq": "\\(u_n = u_1 \\cdot q^{n-1} \\quad (n \\ge 2)\\)<br>Mở rộng: \\(u_n = u_k \\cdot q^{n-k}\\)",
        "note": "Chú ý: Nếu \\(n - k\\) chẵn thì \\(q^{n-k}\\) có thể cho 2 giá trị \\(\\pm q\\); nếu \\(n - k\\) lẻ thì chỉ có 1 giá trị \\(q\\)."
      },
      {
        "name": "3. Tính chất các số hạng cách đều",
        "eq": "\\(u_k^2 = u_{k-1} \\cdot u_{k+1} = u_{k-r} \\cdot u_{k+r} \\quad (k > r \\ge 1)\\)",
        "note": "Bình phương mỗi số hạng (trừ đầu/cuối) bằng tích hai số hạng cách đều nó."
      },
      {
        "name": "4. Tổng n số hạng đầu tiên S_n",
        "eq": "• Khi \\(q \\ne 1\\): \\(S_n = \\frac{u_1(1 - q^n)}{1 - q} = \\frac{u_1(q^n - 1)}{q - 1}\\)<br>• Khi \\(q = 1\\): \\(S_n = n \\cdot u_1\\)",
        "note": "Nếu \\(|q| < 1\\), khi \\(n \\to +\\infty\\) ta có tổng CSN lùi vô hạn \\(S = \\frac{u_1}{1-q}\\)."
      },
      {
        "name": "5. Mô hình tăng trưởng r% và Lãi kép",
        "eq": "• Tăng \\(r\\%\\) mỗi kì: nhân với \\(q = 1 + \\frac{r}{100}\\); Giảm \\(r\\%\\) mỗi kì: nhân với \\(q = 1 - \\frac{r}{100}\\).<br>• Sau \\(n\\) kì: \\(A_n = A_0 \\left(1 + \\frac{r}{100}\\right)^n\\)",
        "note": "\\(A_0\\) là tại mốc \\(t=0\\); sau \\(1\\) kì là \\(A_1 = A_0 q\\), sau \\(n\\) kì là \\(A_n = A_0 q^n\\)."
      }
    ],
    "methods": [
      "Khi giải hệ phương trình CSN: Đưa các số hạng và tổng về \\(u_1\\) và \\(q\\), sau đó lập tỉ số vế theo vế giữa hai phương trình để khử \\(u_1\\) và tìm \\(q\\).",
      "Nếu bài toán chưa cho \\(q \\ne 1\\) khi tính tổng \\(S_n\\), cần xét riêng trường hợp \\(q = 1\\) (\\(S_n = nu_1\\)) và \\(q \\ne 1\\).",
      "Lỗi dễ mắc: Nhầm số mũ \\(n\\) và \\(n-1\\) trong bài toán thực tế (nếu \\(u_1\\) là đầu năm thứ 1 thì cuối năm thứ 1 là \\(u_1 q\\), cuối năm thứ \\(n\\) là \\(u_1 q^n\\))."
    ],
    "applications": [
      "Bài toán hạt thóc trên bàn cờ vua (\\(S_{64} = 2^{64} - 1\\)), sự nhân đôi của vi khuẩn, phân rã chất phóng xạ theo chu kì bán rã.",
      "Tính lãi kép ngân hàng, tăng trưởng dân số và khấu hao tài sản cố định theo tỉ lệ phần trăm mỗi năm."
    ],
    "diagramCaption": "Sự tăng trưởng theo hàm mũ của Cấp số nhân (cây phân nhánh nhân đôi q = 2) so sánh với tăng tuyến tính của Cấp số cộng."
  },
  {
    "num": 8,
    "chapter": 3,
    "vol": 1,
    "title": "Mẫu số liệu ghép nhóm",
    "subtitle": "Ghép nhóm dữ liệu, độ rộng lớp, giá trị đại diện, bảng tần số – tần suất ghép nhóm và biểu đồ cột liền nhau (histogram).",
    "concepts": [
      "Mẫu số liệu ghép nhóm được tạo thành bằng cách chia miền giá trị của mẫu số liệu thành các nhóm (lớp), thường có dạng nửa khoảng \\([a_i; a_{i+1})\\) (nhóm cuối cùng có thể đóng ở đầu mút phải \\([a_k; a_{k+1}]\\)). Quy ước: \\([a_i; a_{i+1})\\) gồm các giá trị \\(x\\) thỏa mãn \\(a_i \\le x < a_{i+1}\\).",
      "Các thông số của mỗi nhóm \\([a_i; a_{i+1})\\): Độ dài (độ rộng) của nhóm là \\(h_i = a_{i+1} - a_i\\); Giá trị đại diện là trung điểm của nhóm \\(c_i = \\frac{a_i + a_{i+1}}{2}\\); Tần số \\(n_i\\) là số quan sát rơi vào nhóm đó; Cỡ mẫu \\(n = \\sum_{i=1}^k n_i\\); Tần suất \\(f_i = \\frac{n_i}{n}\\) (tổng \\(\\sum f_i = 1\\) hay \\(100\\%\\)).",
      "Ý nghĩa và hạn chế: Bảng ghép nhóm giúp tóm tắt gọn gàng các tập dữ liệu lớn và làm nổi bật quy luật phân bố, nhưng làm mất đi giá trị chính xác của từng số liệu riêng lẻ (nên các số đặc trưng tính từ bảng ghép nhóm là giá trị xấp xỉ)."
    ],
    "formulas": [
      {
        "name": "Độ rộng nhóm & Giá trị đại diện",
        "eq": "\\(h_i = a_{i+1} - a_i; \\qquad c_i = \\frac{a_i + a_{i+1}}{2}\\)",
        "note": "Thông thường ta chọn các nhóm có cùng độ rộng \\(h_1 = h_2 = \\dots = h_k = h\\)."
      },
      {
        "name": "Cỡ mẫu & Tần suất của nhóm",
        "eq": "\\(n = n_1 + n_2 + \\dots + n_k = \\sum_{i=1}^k n_i; \\qquad f_i = \\frac{n_i}{n} \\; (\\text{hoặc } f_i\\% = \\frac{n_i}{n}\\cdot 100\\%)\\)",
        "note": "Kiểm tra: \\(\\sum_{i=1}^k f_i = 1\\) (hoặc \\(100\\%\\))."
      },
      {
        "name": "Tần số tích lũy đến nhóm thứ i",
        "eq": "\\(cf_i = n_1 + n_2 + \\dots + n_i\\)",
        "note": "Cột tần số tích lũy \\(cf_i\\) cho biết có bao nhiêu số liệu nhỏ hơn \\(a_{i+1}\\), dùng để tìm nhóm chứa trung vị/tứ phân vị."
      }
    ],
    "methods": [
      "Quy trình chuyển mẫu số liệu không ghép nhóm sang ghép nhóm: (1) Tìm khoảng biến thiên \\(R = x_{\\max} - x_{\\min}\\); (2) Chia thành \\(k\\) nhóm có độ rộng đều nhau bao phủ toàn bộ dữ liệu và không chồng lấn; (3) Đếm số giá trị thuộc từng nhóm \\([a_i; a_{i+1})\\) (chú ý giá trị bằng đúng \\(a_{i+1}\\) phải xếp vào nhóm kế tiếp \\([a_{i+1}; a_{i+2})\\)); (4) Kiểm tra \\(\\sum n_i = n\\).",
      "Biểu diễn trực quan: Vẽ biểu đồ tần số hình cột liền nhau (histogram) và đa giác tần số nối các điểm \\((c_i; n_i)\\).",
      "Lỗi dễ mắc: Đếm nhầm phần tử nằm ngay tại biên \\(a_{i+1}\\) vào nhóm \\([a_i; a_{i+1})\\) thay vì nhóm \\([a_{i+1}; a_{i+2})\\)."
    ],
    "applications": [
      "Thống kê phổ điểm thi tốt nghiệp THPT theo các khoảng điểm, phân bố chiều cao/cân nặng học sinh, thời gian chờ xe buýt hoặc thu nhập hộ gia đình.",
      "Đọc và phân tích biểu đồ histogram trong báo cáo khoa học và kinh tế."
    ],
    "diagramCaption": "Biểu đồ tần số ghép nhóm dạng cột liền nhau (Histogram) và đường đa giác tần số nối các điểm đại diện (c_i; n_i)."
  },
  {
    "num": 9,
    "chapter": 3,
    "vol": 1,
    "title": "Các số đặc trưng đo xu thế trung tâm",
    "subtitle": "Công thức tính số trung bình cộng, trung vị (M_e), tứ phân vị và mốt (M_o) của mẫu số liệu ghép nhóm.",
    "concepts": [
      "Số trung bình của mẫu số liệu ghép nhóm (\\(\\bar{x}\\)) ước lượng số trung bình của mẫu gốc bằng cách coi mọi số liệu trong nhóm \\(i\\) đều nhận giá trị đại diện \\(c_i\\).",
      "Trung vị của mẫu số liệu ghép nhóm (\\(M_e\\), cũng là tứ phân vị thứ hai \\(Q_2\\)) chia mẫu số liệu đã sắp thứ tự thành hai phần có số lượng bằng nhau (mỗi bên \\(50\\%\\)). Nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng \\(\\frac{n}{2}\\) được gọi là nhóm chứa trung vị.",
      "Mốt của mẫu số liệu ghép nhóm (\\(M_o\\)) đặc trưng cho giá trị xuất hiện nhiều nhất. Nhóm có tần số lớn nhất được gọi là nhóm chứa mốt.",
      "So sánh ý nghĩa: Số trung bình dùng toàn bộ dữ liệu nhưng rất nhạy với các giá trị ngoại lệ (quá lớn hoặc quá nhỏ); Trung vị không bị ảnh hưởng bởi giá trị ngoại lệ nên phản ánh tốt hơn khi dữ liệu lệch; Mốt cho biết phân khúc phổ biến nhất."
    ],
    "formulas": [
      {
        "name": "1. Số trung bình cộng ghép nhóm",
        "eq": "\\(\\bar{x} = \\frac{n_1 c_1 + n_2 c_2 + \\dots + n_k c_k}{n} = \\sum_{i=1}^k f_i c_i\\)",
        "note": "Trong đó \\(c_i = \\frac{a_i + a_{i+1}}{2}\\) là giá trị đại diện của nhóm thứ \\(i\\)."
      },
      {
        "name": "2. Trung vị ghép nhóm M_e (giả sử nhóm p là [u_p; u_{p+1}) chứa trung vị)",
        "eq": "\\(M_e = u_p + \\frac{\\frac{n}{2} - cf_{p-1}}{n_p} \\cdot (u_{p+1} - u_p) = L + \\frac{\\frac{n}{2} - F}{f} \\cdot h\\)",
        "note": "\\(L = u_p\\): đầu mút trái nhóm trung vị; \\(F = cf_{p-1}\\): tần số tích lũy của nhóm ngay trước đó (nếu \\(p=1\\) thì \\(F=0\\)); \\(f = n_p\\): tần số nhóm trung vị; \\(h\\): độ rộng nhóm."
      },
      {
        "name": "3. Tứ phân vị Q_1, Q_2, Q_3",
        "eq": "\\(Q_r = u_p + \\frac{\\frac{r \\cdot n}{4} - cf_{p-1}}{n_p} \\cdot (u_{p+1} - u_p) \\quad (r \\in \\{1; 2; 3\\})\\)",
        "note": "Nhóm chứa \\(Q_1\\) ứng với vị trí tích lũy \\(\\frac{n}{4}\\); \\(Q_2 = M_e\\) ứng với \\(\\frac{n}{2}\\); \\(Q_3\\) ứng với \\(\\frac{3n}{4}\\)."
      },
      {
        "name": "4. Mốt ghép nhóm M_o (giả sử nhóm m có tần số lớn nhất n_m)",
        "eq": "\\(M_o = u_m + \\frac{n_m - n_{m-1}}{(n_m - n_{m-1}) + (n_m - n_{m+1})} \\cdot (u_{m+1} - u_m) = L + \\frac{d_1}{d_1 + d_2} \\cdot h\\)",
        "note": "Trong đó \\(d_1 = n_m - n_{m-1}\\), \\(d_2 = n_m - n_{m+1}\\) (nếu \\(m=1\\) thì \\(n_0=0\\); nếu \\(m=k\\) thì \\(n_{k+1}=0\\)). Chỉ nội suy khi các nhóm có cùng độ rộng."
      }
    ],
    "methods": [
      "Quy trình tính nhanh trên bảng: Lập thêm 2 cột phụ là cột Giá trị đại diện \\(c_i\\) (để tính \\(\\bar{x}\\)) và cột Tần số tích lũy \\(cf_i\\) (để tìm ngay nhóm chứa \\(M_e, Q_1, Q_3\\)).",
      "Cách xác định nhóm chứa trung vị: Tính \\(\\frac{n}{2}\\), dò từ trên xuống ở cột \\(cf_i\\), nhóm đầu tiên có \\(cf_p \\ge \\frac{n}{2}\\) chính là nhóm chứa trung vị.",
      "Lỗi dễ mắc: Thay nhầm \\(F\\) là tần số tích lũy của chính nhóm trung vị thay vì nhóm đứng TRƯỚC nó (\\(cf_{p-1}\\)); quên ghi đơn vị và dấu xấp xỉ khi kết luận thực tế."
    ],
    "applications": [
      "Xác định mức lương trung vị, thời gian hoàn thành bài thi trung bình và khung giờ cao điểm (mốt) của lưu lượng giao thông hoặc khách hàng siêu thị.",
      "Phân tích ngưỡng điểm chuẩn tuyển sinh dựa vào tứ phân vị \\(Q_3\\) (nhóm \\(25\\%\\) thí sinh điểm cao nhất)."
    ],
    "diagramCaption": "Minh họa hình học cách nội suy Trung vị M_e (chia đôi diện tích biểu đồ) và Mốt M_o (giao điểm hai đường chéo tại cột cao nhất)."
  },
  {
    "num": 10,
    "chapter": 4,
    "vol": 1,
    "title": "Đường thẳng và mặt phẳng trong không gian",
    "subtitle": "Các tính chất thừa nhận của hình học không gian, cách xác định mặt phẳng, giao điểm – giao tuyến – thiết diện và hình chóp, hình tứ diện.",
    "concepts": [
      "Các tính chất thừa nhận cơ bản: (1) Có một và chỉ một đường thẳng đi qua hai điểm phân biệt; (2) Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng; (3) Nếu một đường thẳng có hai điểm phân biệt thuộc một mặt phẳng thì mọi điểm của đường thẳng đều thuộc mặt phẳng đó (\\(d \\subset (P)\\)); (4) Tồn tại 4 điểm không cùng thuộc một mặt phẳng; (5) Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất (giao tuyến) chứa tất cả các điểm chung của hai mặt phẳng đó.",
      "Bốn cách xác định duy nhất một mặt phẳng: (1) Qua 3 điểm không thẳng hàng \\((ABC)\\); (2) Qua 1 đường thẳng và 1 điểm không thuộc đường thẳng đó \\((d, A)\\); (3) Qua 2 đường thẳng cắt nhau \\((a, b)\\); (4) Qua 2 đường thẳng song song (sẽ học ở Bài 11).",
      "Vị trí tương đối của đường thẳng \\(d\\) và mặt phẳng \\((P)\\): (1) \\(d \\subset (P)\\) (có từ 2 điểm chung trở lên); (2) \\(d\\) cắt \\((P)\\) tại duy nhất một điểm chung \\(I = d \\cap (P)\\); (3) \\(d\\) và \\((P)\\) không có điểm chung (\\(d \\parallel (P)\\)).",
      "Hình chóp \\(S.A_1A_2\\dots A_n\\) có đáy là đa giác lồi \\(A_1A_2\\dots A_n\\) và các mặt bên là các tam giác chung đỉnh \\(S\\). Hình chóp tam giác \\(S.ABC\\) còn gọi là hình tứ diện (có 4 mặt đều là tam giác, 6 cạnh, 4 đỉnh; hai cạnh không có đỉnh chung gọi là hai cạnh đối diện)."
    ],
    "formulas": [
      {
        "name": "Kí hiệu thuộc (∈) và chứa trong (⊂)",
        "eq": "Điểm \\(A\\) thuộc đường \\(d\\) hoặc mặt \\((P)\\): \\(A \\in d,\\; A \\in (P)\\)<br>Đường \\(d\\) nằm trong mặt \\((P)\\): \\(d \\subset (P)\\)",
        "note": "Không dùng kí hiệu \\(\\in\\) cho đường thẳng với mặt phẳng."
      },
      {
        "name": "Tìm giao tuyến của hai mặt phẳng (P) và (Q)",
        "eq": "\\(\\left\\{\\begin{array}{l} A \\in (P) \\cap (Q) \\\\ B \\in (P) \\cap (Q) \\end{array}\\right. \\implies (P) \\cap (Q) = AB\\)",
        "note": "Muốn tìm giao tuyến của hai mặt phẳng, ta tìm 2 điểm chung phân biệt của chúng."
      },
      {
        "name": "Tìm giao điểm I của đường thẳng d và mặt phẳng (P)",
        "eq": "Chọn mặt phẳng phụ \\((Q) \\supset d\\), tìm giao tuyến \\(\\Delta = (P) \\cap (Q)\\).<br>Trong \\((Q)\\), giao điểm \\(I = d \\cap \\Delta\\) chính là \\(d \\cap (P)\\).",
        "note": "Chỉ được cho hai đường thẳng cắt nhau khi chúng cùng nằm trong một mặt phẳng."
      },
      {
        "name": "Chứng minh 3 điểm thẳng hàng / 3 đường đồng quy",
        "eq": "• 3 điểm cùng thuộc 2 mặt phẳng phân biệt \\((P)\\) và \\((Q)\\) thì thẳng hàng trên giao tuyến \\(d = (P)\\cap(Q)\\).<br>• 3 giao tuyến của 3 mặt phẳng cắt nhau từng đôi một hoặc đôi một song song, hoặc đồng quy.",
        "note": "Ứng dụng trực tiếp tính chất duy nhất của giao tuyến."
      }
    ],
    "methods": [
      "Quy tắc vẽ hình biểu diễn không gian: Đường nhìn thấy vẽ nét liền; đường bị che khuất vẽ nét đứt; bảo toàn quan hệ thuộc, thẳng hàng và tỉ số độ dài trên cùng một đoạn thẳng.",
      "Phương pháp dựng thiết diện của hình chóp cắt bởi mặt phẳng \\((\\alpha)\\): Tìm các đoạn giao tuyến của \\((\\alpha)\\) với từng mặt của hình chóp (kéo dài giao tuyến trong mặt phẳng đáy để cắt các cạnh đáy kéo dài, từ đó nối với điểm trên cạnh bên tương ứng) cho đến khi khép kín thành một đa giác.",
      "Lỗi dễ mắc: Cho hai đường thẳng không đồng phẳng (chéo nhau) cắt nhau trên hình vẽ phẳng!"
    ],
    "applications": [
      "Xác định mặt cắt (thiết diện) của chi tiết cơ khí, khối bê tông, mái nhà đa giác hoặc khối tinh thể khi cắt bởi mặt phẳng.",
      "Giải thích vì sao kiềng 3 chân hoặc giá đỡ máy ảnh 3 chân (tripod) luôn đứng vững không bị cập kênh trên mọi mặt phẳng (vì 3 điểm không thẳng hàng luôn xác định duy nhất một mặt phẳng)."
    ],
    "diagramCaption": "Tìm giao tuyến hai mặt phẳng, giao điểm của đường thẳng với mặt phẳng bằng mặt phẳng phụ và thiết diện của hình chóp."
  },
  {
    "num": 11,
    "chapter": 4,
    "vol": 1,
    "title": "Hai đường thẳng song song",
    "subtitle": "Vị trí tương đối của hai đường thẳng trong không gian (đồng phẳng, chéo nhau), tính chất bắc cầu và định lí giao tuyến song song.",
    "concepts": [
      "Trong không gian, hai đường thẳng \\(a\\) và \\(b\\) có hai trường hợp lớn: (1) Đồng phẳng (cùng nằm trong một mặt phẳng): có thể cắt nhau (1 điểm chung), song song (\\(a \\parallel b\\), không có điểm chung) hoặc trùng nhau (\\(a \\equiv b\\)); (2) Không đồng phẳng: gọi là hai đường thẳng chéo nhau (không có điểm chung và không có mặt phẳng nào chứa cả hai).",
      "Tiên đề Euclid trong không gian: Qua một điểm không nằm trên đường thẳng \\(a\\), có một và chỉ một đường thẳng \\(b\\) song song với \\(a\\). Hai đường thẳng song song xác định duy nhất một mặt phẳng \\(\\text{mp}(a, b)\\).",
      "Tính chất bắc cầu: Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau (\\(a \\parallel c\\) và \\(b \\parallel c \\Rightarrow a \\parallel b\\)).",
      "Định lí về ba giao tuyến: Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến ấy hoặc đồng quy tại một điểm, hoặc đôi một song song với nhau."
    ],
    "formulas": [
      {
        "name": "Định nghĩa hai đường thẳng song song vs chéo nhau",
        "eq": "• \\(a \\parallel b \\iff a, b\\) đồng phẳng và \\(a \\cap b = \\varnothing\\).<br>• \\(a, b\\) chéo nhau \\(\\iff a, b\\) không đồng phẳng (suy ra \\(a \\cap b = \\varnothing\\)).",
        "note": "Cả song song và chéo nhau đều không có điểm chung, điểm khác biệt cốt lõi là tính đồng phẳng."
      },
      {
        "name": "Hệ quả giao tuyến của hai mặt phẳng chứa hai đường song song",
        "eq": "\\(\\left\\{\\begin{array}{l} a \\subset (P),\\; b \\subset (Q) \\\\ a \\parallel b \\\\ (P) \\cap (Q) = d \\end{array}\\right. \\implies d \\parallel a \\parallel b \\; (\\text{hoặc } d \\text{ trùng } a, b)\\)",
        "note": "Công cụ quan trọng bậc nhất để tìm giao tuyến của hai mặt phẳng khi mới biết 1 điểm chung \\(M\\): giao tuyến là đường thẳng qua \\(M\\) và song song với \\(a, b\\)."
      },
      {
        "name": "Tính chất bắc cầu",
        "eq": "\\(\\left\\{\\begin{array}{l} a \\parallel c,\\; b \\parallel c \\\\ a \\ne b \\end{array}\\right. \\implies a \\parallel b\\)",
        "note": "Kết hợp với đường trung bình tam giác/hình thang hoặc định lí Thales đảo để chứng minh song song."
      }
    ],
    "methods": [
      "Bốn cách chứng minh hai đường thẳng \\(a \\parallel b\\) trong không gian: (1) Chứng minh \\(a, b\\) cùng nằm trong một mặt phẳng rồi dùng hình học phẳng (đường trung bình, định lí Thales đảo, cạnh đối hình bình hành); (2) Chứng minh \\(a\\) và \\(b\\) cùng song song với đường thứ ba \\(c\\); (3) Áp dụng định lí giao tuyến của hai mặt phẳng chứa hai đường song song; (4) Áp dụng định lí 3 giao tuyến.",
      "Cách tìm giao tuyến của \\((P)\\) và \\((Q)\\) khi có 1 điểm chung \\(S\\) và \\(a \\subset (P), b \\subset (Q)\\) với \\(a \\parallel b\\): Giao tuyến chính là đường thẳng \\(Sx\\) đi qua \\(S\\) và \\(Sx \\parallel a \\parallel b\\).",
      "Lỗi dễ mắc: Thấy hai đường thẳng không cắt nhau liền kết luận chúng song song (quên trường hợp hai đường chéo nhau như cạnh bên \\(SA\\) và cạnh đáy \\(BC\\) của tứ diện \\(S.ABC\\))."
    ],
    "applications": [
      "Xác định đường nóc mái nhà như giao tuyến song song với hai mép tường đối diện.",
      "Dựng thiết diện hình thang hoặc hình bình hành khi mặt phẳng cắt chứa các cặp đường song song."
    ],
    "diagramCaption": "Minh họa 4 vị trí tương đối của hai đường thẳng trong không gian và định lí giao tuyến song song của hai mặt phẳng chứa a // b."
  },
  {
    "num": 12,
    "chapter": 4,
    "vol": 1,
    "title": "Đường thẳng và mặt phẳng song song",
    "subtitle": "Điều kiện để đường thẳng song song với mặt phẳng, tính chất giao tuyến và cách dựng thiết diện song song với đường thẳng.",
    "concepts": [
      "Đường thẳng \\(d\\) được gọi là song song với mặt phẳng \\((P)\\), kí hiệu \\(d \\parallel (P)\\), nếu \\(d\\) và \\((P)\\) không có điểm chung nào (\\(d \\cap (P) = \\varnothing\\)).",
      "Định lí dấu hiệu nhận biết: Nếu đường thẳng \\(d\\) không nằm trong mặt phẳng \\((P)\\) và \\(d\\) song song với một đường thẳng \\(a\\) nào đó nằm trong \\((P)\\) thì \\(d \\parallel (P)\\).",
      "Định lí tính chất (giao tuyến): Cho đường thẳng \\(d \\parallel (P)\\). Nếu mặt phẳng \\((Q)\\) chứa \\(d\\) và cắt \\((P)\\) theo giao tuyến \\(a\\) thì \\(a \\parallel d\\).",
      "Hệ quả về hai đường thẳng chéo nhau: Cho hai đường thẳng chéo nhau \\(a\\) và \\(b\\), có duy nhất một mặt phẳng chứa \\(a\\) và song song với \\(b\\)."
    ],
    "formulas": [
      {
        "name": "1. Dấu hiệu chứng minh d // (P)",
        "eq": "\\(\\left\\{\\begin{array}{l} d \\not\\subset (P) \\\\ d \\parallel a \\\\ a \\subset (P) \\end{array}\\right. \\implies d \\parallel (P)\\)",
        "note": "Bắt buộc phải nêu đủ 3 ý: \\(d \\not\\subset (P)\\), \\(d \\parallel a\\) và \\(a \\subset (P)\\)."
      },
      {
        "name": "2. Tính chất giao tuyến khi d // (P)",
        "eq": "\\(\\left\\{\\begin{array}{l} d \\parallel (P) \\\\ d \\subset (Q) \\\\ (P) \\cap (Q) = a \\end{array}\\right. \\implies a \\parallel d\\)",
        "note": "Dùng để kẻ giao tuyến: qua điểm chung \\(M \\in (P)\\cap(Q)\\), kẻ \\(Mx \\parallel d\\) nằm trong \\((P)\\)."
      },
      {
        "name": "3. Giao tuyến của hai mặt phẳng cùng song song với d",
        "eq": "\\(\\left\\{\\begin{array}{l} (P) \\cap (Q) = a \\\\ (P) \\parallel d,\\; (Q) \\parallel d \\end{array}\\right. \\implies a \\parallel d\\)",
        "note": "Hai mặt phẳng phân biệt cùng song song với \\(d\\) thì giao tuyến (nếu có) cũng song song với \\(d\\)."
      }
    ],
    "methods": [
      "Cách chứng minh \\(d \\parallel (P)\\): Tìm một đường thẳng phụ \\(a \\subset (P)\\) (thường chọn \\(a\\) là giao tuyến của \\((P)\\) với một mặt phẳng \\((Q)\\) chứa \\(d\\), hoặc đường trung bình, đường chia tỉ lệ Thales) sao cho \\(d \\parallel a\\).",
      "Cách dựng thiết diện bởi mặt phẳng \\((\\alpha)\\) đi qua điểm \\(M\\) và song song với các đường thẳng \\(d_1, d_2\\): Từ điểm chung \\(M\\) trên mặt chứa \\(d_1\\), kẻ giao tuyến song song với \\(d_1\\) để tìm các đỉnh tiếp theo của thiết diện.",
      "Lỗi dễ mắc: Không kiểm tra điều kiện \\(d \\not\\subset (P)\\) hoặc suy ra \\(d \\parallel (P)\\) chỉ từ cảm nhận trực quan của hình vẽ."
    ],
    "applications": [
      "Kiểm tra độ phẳng ngang của mặt bàn, mặt sàn xây dựng bằng bọt thủy chuẩn (nivo) đặt theo các hướng.",
      "Thiết kế hệ thống xà gồ, dầm ngang song song với mặt sàn trong kiến trúc."
    ],
    "diagramCaption": "Dấu hiệu nhận biết d // (P) thông qua đường thẳng phụ a ⊂ (P) và tính chất giao tuyến a = (P) ∩ (Q) song song với d."
  },
  {
    "num": 13,
    "chapter": 4,
    "vol": 1,
    "title": "Hai mặt phẳng song song",
    "subtitle": "Định nghĩa, dấu hiệu nhận biết hai mặt phẳng song song, định lí Thales trong không gian và hình lăng trụ – hình hộp – hình chóp cụt.",
    "concepts": [
      "Hai mặt phẳng \\((P)\\) và \\((Q)\\) được gọi là song song với nhau, kí hiệu \\((P) \\parallel (Q)\\), nếu chúng không có điểm chung (\\((P) \\cap (Q) = \\varnothing\\)).",
      "Dấu hiệu nhận biết cốt lõi: Nếu mặt phẳng \\((P)\\) chứa hai đường thẳng cắt nhau \\(a, b\\) và hai đường thẳng này cùng song song với mặt phẳng \\((Q)\\) thì \\((P) \\parallel (Q)\\).",
      "Tính chất: (1) Qua một điểm \\(A \\notin (Q)\\) có một và chỉ một mặt phẳng \\((P)\\) song song với \\((Q)\\); (2) Nếu mặt phẳng \\((R)\\) cắt một trong hai mặt phẳng song song \\((P), (Q)\\) thì phải cắt mặt phẳng còn lại và hai giao tuyến song song với nhau; (3) Định lí Thales trong không gian: Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kì những đoạn thẳng tương ứng tỉ lệ.",
      "Hình lăng trụ và hình hộp: Hình lăng trụ có hai mặt đáy nằm trên hai mặt phẳng song song, các cạnh bên song song và bằng nhau, các mặt bên là những hình bình hành. Hình lăng trụ có đáy là hình bình hành gọi là hình hộp (6 mặt đều là hình bình hành, 4 đường chéo cắt nhau tại trung điểm của mỗi đường). Hình chóp cụt được tạo thành khi cắt hình chóp bởi một mặt phẳng song song với đáy (hai đáy là hai đa giác đồng dạng, các mặt bên là những hình thang)."
    ],
    "formulas": [
      {
        "name": "1. Dấu hiệu nhận biết hai mặt phẳng song song",
        "eq": "\\(\\left\\{\\begin{array}{l} a, b \\subset (P); \\quad a \\cap b = I \\\\ a \\parallel (Q), \\quad b \\parallel (Q) \\end{array}\\right. \\implies (P) \\parallel (Q)\\)",
        "note": "Bắt buộc \\(a\\) và \\(b\\) phải là HAI ĐƯỜNG THẲNG CẮT NHAU trong \\((P)\\) (nếu \\(a \\parallel b\\) thì kết luận sai!)."
      },
      {
        "name": "2. Tính chất giao tuyến của mặt phẳng thứ ba",
        "eq": "\\(\\left\\{\\begin{array}{l} (P) \\parallel (Q) \\\\ (R) \\cap (P) = a, \\quad (R) \\cap (Q) = b \\end{array}\\right. \\implies a \\parallel b\\)",
        "note": "Mặt phẳng thứ ba cắt hai mặt phẳng song song theo hai giao tuyến song song."
      },
      {
        "name": "3. Định lí Thales trong không gian",
        "eq": "\\((P) \\parallel (Q) \\parallel (R)\\) cắt \\(d_1\\) tại \\(A, B, C\\) và \\(d_2\\) tại \\(A', B', C'\\):<br>\\(\\frac{AB}{A'B'} = \\frac{BC}{B'C'} = \\frac{AC}{A'C'} \\iff \\frac{AB}{BC} = \\frac{A'B'}{B'C'}\\)",
        "note": "Áp dụng cho cả trường hợp hai cát tuyến \\(d_1, d_2\\) chéo nhau."
      },
      {
        "name": "4. Thiết diện song song với đáy hình chóp",
        "eq": "Mặt phẳng \\((P)\\) song song với đáy hình chóp cách đỉnh \\(S\\) theo tỉ số \\(\\frac{SA'}{SA} = k\\) (\\(0 < k < 1\\)) thì:<br>\\(\\frac{S_{\\text{thiết diện}}}{S_{\\text{đáy}}} = k^2\\)",
        "note": "Thiết diện là đa giác đồng dạng với đáy theo tỉ số đồng dạng \\(k\\)."
      }
    ],
    "methods": [
      "Cách chứng minh \\((P) \\parallel (Q)\\): Chọn trong \\((P)\\) hai đường thẳng cắt nhau \\(a, b\\) rồi chứng minh \\(a \\parallel a' \\subset (Q)\\) và \\(b \\parallel b' \\subset (Q)\\).",
      "Cách chứng minh \\(d \\parallel (Q)\\) gián tiếp qua hai mặt phẳng song song: Chứng minh \\(d \\subset (P)\\) mà \\((P) \\parallel (Q) \\Rightarrow d \\parallel (Q)\\).",
      "Lỗi dễ mắc: Chỉ chứng minh hai đường thẳng song song trong \\((P)\\) cùng song song với \\((Q)\\) đã vội kết luận \\((P) \\parallel (Q)\\) (thiếu điều kiện hai đường cắt nhau)."
    ],
    "applications": [
      "Kết cấu các tầng nhà cao tầng, kệ sách nhiều ngăn song song và tính diện tích mặt cắt ngang của tháp/đê chắn sóng.",
      "Tính chất 4 đường chéo đồng quy tại tâm đối xứng của hình hộp ứng dụng trong thiết kế khung giàn không gian."
    ],
    "diagramCaption": "Hai mặt phẳng song song bị cắt bởi mặt phẳng thứ ba tạo giao tuyến song song và Định lí Thales không gian với 3 mặt phẳng song song."
  },
  {
    "num": 14,
    "chapter": 4,
    "vol": 1,
    "title": "Phép chiếu song song",
    "subtitle": "Định nghĩa phép chiếu song song, các tính chất bảo toàn (thẳng hàng, song song, tỉ số) và quy tắc vẽ hình biểu diễn không gian.",
    "concepts": [
      "Cho mặt phẳng \\((P)\\) và đường thẳng \\(l\\) cắt \\((P)\\). Với mỗi điểm \\(M\\) trong không gian, đường thẳng đi qua \\(M\\) và song song (hoặc trùng) với \\(l\\) cắt \\((P)\\) tại điểm \\(M'\\) xác định. Điểm \\(M'\\) gọi là hình chiếu song song của \\(M\\) lên mặt phẳng \\((P)\\) theo phương chiếu \\(l\\).",
      "Nếu đường thẳng \\(a\\) song song hoặc trùng với phương chiếu \\(l\\) thì hình chiếu của \\(a\\) lên \\((P)\\) chỉ là một điểm. Nếu \\(a\\) không song song với \\(l\\) thì hình chiếu của \\(a\\) là một đường thẳng \\(a'\\).",
      "Các tính chất bảo toàn của phép chiếu song song (đối với các đường không song song với phương chiếu \\(l\\)): (1) Bảo toàn tính thẳng hàng của 3 điểm và thứ tự các điểm trên đường thẳng; (2) Hình chiếu của hai đường thẳng song song là hai đường thẳng song song hoặc trùng nhau; (3) Bảo toàn tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng hoặc nằm trên hai đường thẳng song song.",
      "Lưu ý quan trọng: Phép chiếu song song nói chung KHÔNG bảo toàn độ dài đoạn thẳng, KHÔNG bảo toàn độ lớn của góc và KHÔNG bảo toàn tính vuông góc. Hình biểu diễn của một hình trong không gian là hình đồng dạng với hình chiếu song song của hình đó lên mặt phẳng bản vẽ."
    ],
    "formulas": [
      {
        "name": "Bảo toàn tỉ số đoạn thẳng trên cùng đường hoặc hai đường song song",
        "eq": "Nếu \\(AB \\parallel CD\\) (hoặc \\(A, B, C, D\\) thẳng hàng) và không song song với \\(l\\) thì:<br>\\(\\frac{A'B'}{C'D'} = \\frac{AB}{CD}\\)",
        "note": "Hệ quả: Trung điểm \\(I\\) của đoạn \\(AB\\) luôn có hình chiếu \\(I'\\) là trung điểm của \\(A'B'\\); trọng tâm tam giác chiếu thành trọng tâm tam giác ảnh."
      },
      {
        "name": "Quy tắc hình biểu diễn của các hình phẳng thường gặp",
        "eq": "• Tam giác bất kì (đều, cân, vuông) \\(\\longrightarrow\\) Tam giác bất kì.<br>• Hình bình hành, hình chữ nhật, hình thoi, hình vuông \\(\\longrightarrow\\) Hình bình hành.<br>• Hình thang (đáy \\(a, b\\)) \\(\\longrightarrow\\) Hình thang có tỉ số hai đáy không đổi \\(\\frac{a'}{b'} = \\frac{a}{b}\\).<br>• Đường tròn \\(\\longrightarrow\\) Đường elip (tâm tròn chiếu thành tâm elip).",
        "note": "Khi vẽ hình không gian, ta được vẽ tam giác vuông/đều thành tam giác thường và hình vuông/chữ nhật thành hình bình hành để dễ nhìn."
      }
    ],
    "methods": [
      "Để xác định ảnh của một điểm/đường qua phép chiếu song song: Xác định rõ mặt phẳng chiếu \\((P)\\) và phương chiếu \\(l\\), sau đó kẻ đường thẳng qua điểm cần chiếu song song với \\(l\\) cắt \\((P)\\).",
      "Dùng tính chất bảo toàn tỉ số của phép chiếu song song để chứng minh đẳng thức tỉ số đoạn thẳng trong không gian bằng cách chiếu lên một mặt phẳng thuận lợi.",
      "Lỗi dễ mắc: Nhìn thấy góc vuông trên hình biểu diễn hoặc nghĩ rằng tỉ số hai đoạn thẳng cắt nhau (không song song) được bảo toàn qua phép chiếu song song (chỉ bảo toàn tỉ số của hai đoạn thẳng cùng thuộc 1 đường hoặc trên 2 đường song song!)."
    ],
    "applications": [
      "Giải thích hiện tượng bóng nắng của các vật thể trên mặt đất (các tia nắng Mặt Trời từ rất xa coi như song song với nhau).",
      "Cơ sở toán học của môn Vẽ kĩ thuật (hình chiếu trục đo) và đồ họa 3D trên máy tính."
    ],
    "diagramCaption": "Phép chiếu song song theo phương l lên mặt phẳng (P): bảo toàn tính thẳng hàng, song song, tỉ số trung điểm và biến hình vuông thành hình bình hành."
  },
  {
    "num": 15,
    "chapter": 5,
    "vol": 1,
    "title": "Giới hạn của dãy số",
    "subtitle": "Giới hạn hữu hạn, giới hạn vô cực của dãy số, các định lí về giới hạn hữu hạn và tổng của cấp số nhân lùi vô hạn.",
    "concepts": [
      "Dãy số \\((u_n)\\) có giới hạn là \\(0\\) khi \\(n \\to +\\infty\\), kí hiệu \\(\\lim_{n\\to+\\infty} u_n = 0\\) (hay \\(\\lim u_n = 0\\)), nếu \\(|u_n|\\) có thể nhỏ hơn một số dương bé tùy ý kể từ một số hạng nào đó trở đi. Dãy \\((u_n)\\) có giới hạn hữu hạn \\(L\\) nếu \\(\\lim (u_n - L) = 0\\).",
      "Dãy số \\((u_n)\\) có giới hạn là \\(+\\infty\\) nếu \\(u_n\\) lớn hơn một số dương bất kì kể từ một số hạng nào đó trở đi; \\(\\lim u_n = -\\infty \\iff \\lim(-u_n) = +\\infty\\). Lưu ý: Một dãy số không có giới hạn hữu hạn không có nghĩa là nó tiến ra vô cực (ví dụ \\(u_n = (-1)^n\\) đan dấu không có giới hạn).",
      "Cấp số nhân lùi vô hạn là cấp số nhân vô hạn có công bội \\(q\\) thỏa mãn \\(|q| < 1\\). Khi đó \\(\\lim q^n = 0\\) nên tổng vô hạn \\(S = u_1 + u_2 + \\dots + u_n + \\dots\\) hội tụ về một số hữu hạn."
    ],
    "formulas": [
      {
        "name": "1. Các giới hạn cơ bản cần nhớ",
        "eq": "• \\(\\lim \\frac{1}{n^k} = 0 \\; (k \\in \\mathbb{N}^*)\\); \\quad \\(\\lim c = c\\)<br>• \\(\\lim q^n = 0\\) nếu \\(|q| < 1\\); \\quad \\(\\lim q^n = +\\infty\\) nếu \\(q > 1\\)<br>• \\(\\lim n^k = +\\infty \\; (k \\in \\mathbb{N}^*)\\)",
        "note": "Nếu \\(|u_n| \\le v_n\\) mà \\(\\lim v_n = 0\\) thì \\(\\lim u_n = 0\\) (Định lí kẹp, ví dụ \\(\\lim \\frac{\\sin n}{n} = 0\\))."
      },
      {
        "name": "2. Định lí phép toán trên giới hạn hữu hạn",
        "eq": "Nếu \\(\\lim u_n = a\\) và \\(\\lim v_n = b\\) (hữu hạn) thì:<br>\\(\\lim(u_n \\pm v_n) = a \\pm b; \\quad \\lim(u_n \\cdot v_n) = a \\cdot b; \\quad \\lim\\frac{u_n}{v_n} = \\frac{a}{b}\\; (b \\ne 0)\\)<br>Nếu \\(u_n \\ge 0\\) thì \\(a \\ge 0\\) và \\(\\lim\\sqrt{u_n} = \\sqrt{a}\\).",
        "note": "Chỉ tách được tổng, hiệu, tích, thương khi từng giới hạn thành phần là HỮU HẠN."
      },
      {
        "name": "3. Quy tắc giới hạn vô cực",
        "eq": "• \\(\\lim u_n = a \\ne 0,\\; \\lim v_n = \\pm\\infty \\implies \\lim\\frac{u_n}{v_n} = 0\\)<br>• \\(\\lim u_n = a > 0,\\; \\lim v_n = 0\\; (v_n > 0) \\implies \\lim\\frac{u_n}{v_n} = +\\infty\\)<br>• \\(\\lim u_n = +\\infty,\\; \\lim v_n = a > 0 \\implies \\lim(u_n v_n) = +\\infty\\)",
        "note": "Với \\(a < 0\\), áp dụng quy tắc nhân/chia dấu thông thường."
      },
      {
        "name": "4. Tổng của cấp số nhân lùi vô hạn (|q| < 1)",
        "eq": "\\(S = u_1 + u_1 q + u_1 q^2 + \\dots = \\frac{u_1}{1 - q} \\quad (|q| < 1)\\)",
        "note": "Ứng dụng để đổi số thập phân vô hạn tuần hoàn ra phân số (ví dụ \\(0,(3) = \\frac{0,3}{1 - 0,1} = \\frac{1}{3}\\))."
      }
    ],
    "methods": [
      "Dạng phân thức \\(\\frac{P(n)}{Q(n)}\\): Chia cả tử và mẫu cho \\(n^k\\) với \\(k\\) là lũy thừa bậc cao nhất của \\(n\\) (Mẹo trắc nghiệm: bậc tử < bậc mẫu \\(\\to 0\\); bậc tử = bậc mẫu \\(\\to\\) tỉ số hai hệ số cao nhất; bậc tử > bậc mẫu \\(\\to \\pm\\infty\\)).",
      "Dạng chứa lũy thừa \\(\\frac{a \\cdot 3^n + b \\cdot 2^n}{c \\cdot 3^n + d}\\): Chia cả tử và mẫu cho lũy thừa có cơ số lớn nhất (ở đây là \\(3^n\\)) để xuất hiện \\((2/3)^n \\to 0\\).",
      "Dạng hiệu hai căn thức \\(\\sqrt{A_n} - \\sqrt{B_n}\\) (dạng \\(\\infty - \\infty\\)) khi hệ số bậc cao nhất trong căn bằng nhau: Nhân và chia với biểu thức liên hợp \\(\\sqrt{A_n} + \\sqrt{B_n}\\). Lưu ý khi đưa \\(n\\) ra khỏi căn bậc hai (với \\(n > 0\\)): \\(\\sqrt{a n^2 + bn} = n\\sqrt{a + \\frac{b}{n}}\\)."
    ],
    "applications": [
      "Biểu diễn số thập phân vô hạn tuần hoàn dưới dạng phân số tối giản và tính tổng diện tích/chu vi bông tuyết Koch (hình học Fractal).",
      "Tính tổng quãng đường quả bóng nảy lên xuống vô hạn lần trước khi dừng hẳn."
    ],
    "diagramCaption": "Sự hội tụ của dãy số u_n về giới hạn L khi n → +∞ và hình vuông minh họa tổng cấp số nhân lùi vô hạn 1/2 + 1/4 + 1/8 + ... = 1."
  },
  {
    "num": 16,
    "chapter": 5,
    "vol": 1,
    "title": "Giới hạn của hàm số",
    "subtitle": "Giới hạn hữu hạn của hàm số tại một điểm, giới hạn một bên, giới hạn tại vô cực, giới hạn vô cực và cách khử dạng vô định 0/0.",
    "concepts": [
      "Giới hạn hữu hạn tại một điểm: \\(\\lim_{x\\to x_0} f(x) = L\\) mô tả giá trị của \\(f(x)\\) tiến sát tới \\(L\\) khi \\(x\\) tiến dần tới \\(x_0\\) (với \\(x \\ne x_0\\), hàm số không nhất thiết phải xác định tại \\(x_0\\)).",
      "Giới hạn một bên: \\(\\lim_{x\\to x_0^+} f(x)\\) là giới hạn bên phải (với \\(x > x_0\\)); \\(\\lim_{x\\to x_0^-} f(x)\\) là giới hạn bên trái (với \\(x < x_0\\)). Định lí: \\(\\lim_{x\\to x_0} f(x) = L \\iff \\lim_{x\\to x_0^-} f(x) = \\lim_{x\\to x_0^+} f(x) = L\\).",
      "Ý nghĩa hình học (Tiệm cận của đồ thị): Nếu \\(\\lim_{x\\to x_0^+} f(x) = \\pm\\infty\\) hoặc \\(\\lim_{x\\to x_0^-} f(x) = \\pm\\infty\\) thì đường thẳng \\(x = x_0\\) là tiệm cận đứng; nếu \\(\\lim_{x\\to +\\infty} f(x) = L\\) hoặc \\(\\lim_{x\\to -\\infty} f(x) = L\\) thì đường thẳng \\(y = L\\) là tiệm cận ngang."
    ],
    "formulas": [
      {
        "name": "1. Giới hạn của hàm đa thức và phân thức khi mẫu khác 0",
        "eq": "Nếu \\(f(x)\\) là hàm sơ cấp xác định tại \\(x_0\\) thì \\(\\lim_{x\\to x_0} f(x) = f(x_0)\\) (thay trực tiếp \\(x = x_0\\)).",
        "note": "Luôn thử thay \\(x = x_0\\) trước tiên để nhận diện dạng của giới hạn."
      },
      {
        "name": "2. Điều kiện tồn tại giới hạn tại điểm x_0",
        "eq": "\\(\\lim_{x\\to x_0} f(x) = L \\iff \\lim_{x\\to x_0^-} f(x) = \\lim_{x\\to x_0^+} f(x) = L\\)",
        "note": "Nếu giới hạn trái khác giới hạn phải thì không tồn tại \\(\\lim_{x\\to x_0} f(x)\\)."
      },
      {
        "name": "3. Khử dạng vô định 0/0 khi x → x_0",
        "eq": "• Đa thức: \\(P(x_0) = 0 \\implies P(x) = (x - x_0) \\cdot Q(x)\\) (chia Horner hoặc bấm nghiệm để tách nhân tử \\(x - x_0\\)).<br>• Căn thức: Nhân lượng liên hợp \\(\\sqrt{A} - \\sqrt{B} = \\frac{A - B}{\\sqrt{A} + \\sqrt{B}}\\) hoặc \\(\\sqrt[3]{A} - \\sqrt[3]{B} = \\frac{A - B}{\\sqrt[3]{A^2} + \\sqrt[3]{AB} + \\sqrt[3]{B^2}}\\).",
        "note": "Vì \\(x \\to x_0\\) nghĩa là \\(x \\ne x_0\\) nên ta được phép giản ước nhân tử \\((x - x_0) \\ne 0\\)."
      },
      {
        "name": "4. Giới hạn tại vô cực (x → ±∞) & Chú ý đưa x ra khỏi căn",
        "eq": "\\(\\sqrt{ax^2 + bx + c} = |x|\\sqrt{a + \\frac{b}{x} + \\frac{c}{x^2}} = \\left\\{\\begin{array}{ll} x\\sqrt{a + \\dots} & \\text{khi } x \\to +\\infty \\\\ -x\\sqrt{a + \\dots} & \\text{khi } x \\to -\\infty \\end{array}\\right.\\)",
        "note": "Đặc biệt chú ý dấu trừ \\(|x| = -x\\) khi \\(x \\to -\\infty\\)!"
      },
      {
        "name": "5. Giới hạn lượng giác cơ bản (x đo bằng radian)",
        "eq": "\\(\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1; \\qquad \\lim_{x\\to 0} \\frac{\\tan x}{x} = 1; \\qquad \\lim_{x\\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}\\)",
        "note": "Mở rộng: \\(\\lim_{u(x)\\to 0}\\frac{\\sin u(x)}{u(x)} = 1\\)."
      }
    ],
    "methods": [
      "Khi tính \\(\\lim_{x\\to x_0} \\frac{u(x)}{v(x)}\\): Bước 1 thay \\(x_0\\). Nếu \\(v(x_0) \\ne 0\\) thì kết quả là \\(\\frac{u(x_0)}{v(x_0)}\\); nếu \\(v(x_0) = 0\\) và \\(u(x_0) \\ne 0\\) thì xét dấu tử và dấu mẫu để kết luận \\(+\\infty\\) hay \\(-\\infty\\); nếu \\(u(x_0) = v(x_0) = 0\\) (dạng \\(0/0\\)) thì tách nhân tử \\((x-x_0)\\) hoặc nhân liên hợp.",
      "Khi tính giới hạn một bên với biểu thức chứa \\(|x - x_0|\\): Nếu \\(x \\to x_0^+\\) thì \\(|x - x_0| = x - x_0\\); nếu \\(x \\to x_0^-\\) thì \\(|x - x_0| = -(x - x_0)\\).",
      "Lỗi dễ mắc: Quên \\(|x| = -x\\) khi \\(x \\to -\\infty\\) dẫn đến sai dấu kết quả!"
    ],
    "applications": [
      "Tính vận tốc tức thời từ vận tốc trung bình khi khoảng thời gian \\(\\Delta t \\to 0\\) (nền tảng của Đạo hàm ở Chương IX).",
      "Xác định trạng thái bão hòa của nồng độ chất phản ứng hoặc quần thể sinh vật khi thời gian \\(t \\to +\\infty\\) (tiệm cận ngang)."
    ],
    "diagramCaption": "Minh họa giới hạn trái – giới hạn phải tại điểm x_0, đường tiệm cận đứng x = x_0 và tiệm cận ngang y = L của đồ thị hàm số."
  },
  {
    "num": 17,
    "chapter": 5,
    "vol": 1,
    "title": "Hàm số liên tục",
    "subtitle": "Hàm số liên tục tại một điểm, liên tục trên khoảng/đoạn, tính liên tục của hàm sơ cấp và định lí giá trị trung gian.",
    "concepts": [
      "Cho hàm số \\(y = f(x)\\) xác định trên khoảng \\(K\\) và \\(x_0 \\in K\\). Hàm số \\(y = f(x)\\) được gọi là liên tục tại \\(x_0\\) nếu \\(\\lim_{x\\to x_0} f(x) = f(x_0)\\). Nếu không liên tục tại \\(x_0\\) thì gọi là gián đoạn tại \\(x_0\\).",
      "Hàm số liên tục trên một khoảng nếu nó liên tục tại mọi điểm của khoảng đó. Hàm số liên tục trên đoạn \\([a; b]\\) nếu nó liên tục trên khoảng \\((a; b)\\) và liên tục một phía tại hai đầu mút: \\(\\lim_{x\\to a^+} f(x) = f(a)\\) và \\(\\lim_{x\\to b^-} f(x) = f(b)\\).",
      "Tính chất của hàm sơ cấp: Hàm đa thức và các hàm \\(y = \\sin x, y = \\cos x\\) liên tục trên \\(\\mathbb{R}\\); hàm phân thức hữu tỉ, hàm căn thức và các hàm \\(y = \\tan x, y = \\cot x\\) liên tục trên từng khoảng của tập xác định của chúng. Tổng, hiệu, tích, thương (khi mẫu khác 0) của các hàm liên tục tại \\(x_0\\) cũng liên tục tại \\(x_0\\).",
      "Định lí giá trị trung gian (Hệ quả nghiệm của phương trình): Nếu hàm số \\(y = f(x)\\) liên tục trên đoạn \\([a; b]\\) và \\(f(a) \\cdot f(b) < 0\\) (hai đầu mút trái dấu) thì tồn tại ít nhất một điểm \\(c \\in (a; b)\\) sao cho \\(f(c) = 0\\) (tức phương trình \\(f(x) = 0\\) có ít nhất một nghiệm trong khoảng \\((a; b)\\))."
    ],
    "formulas": [
      {
        "name": "1. Điều kiện liên tục tại điểm x_0",
        "eq": "\\(f(x)\\text{ liên tục tại } x_0 \\iff \\left\\{\\begin{array}{l} x_0 \\in D \\; (\\text{tức } f(x_0) \\text{ xác định}) \\\\ \\lim_{x\\to x_0} f(x) = f(x_0) \\end{array}\\right.\\)",
        "note": "Với hàm cho bởi dấu \\(\\ne x_0\\) và \\(= x_0\\), ta tính \\(\\lim_{x\\to x_0} f(x)\\) rồi cho bằng \\(f(x_0)\\)."
      },
      {
        "name": "2. Điều kiện liên tục thông qua giới hạn một bên",
        "eq": "\\(f(x)\\text{ liên tục tại } x_0 \\iff \\lim_{x\\to x_0^-} f(x) = \\lim_{x\\to x_0^+} f(x) = f(x_0)\\)",
        "note": "Áp dụng cho hàm số cho bởi nhiều công thức theo các miền \\(x < x_0\\) và \\(x \\ge x_0\\)."
      },
      {
        "name": "3. Định lí nghiệm của hàm số liên tục trên đoạn [a; b]",
        "eq": "\\(\\left\\{\\begin{array}{l} f(x)\\text{ liên tục trên } [a; b] \\\\ f(a) \\cdot f(b) < 0 \\end{array}\\right. \\implies \\exists c \\in (a; b) : f(c) = 0\\)",
        "note": "Định lí khẳng định có ÍT NHẤT 1 nghiệm trong \\((a; b)\\), không khẳng định nghiệm duy nhất. Muốn chứng minh có ít nhất \\(k\\) nghiệm, ta chia thành \\(k\\) đoạn con rời nhau phần trong."
      }
    ],
    "methods": [
      "Tìm tham số \\(m\\) để hàm số liên tục tại \\(x_0\\): (1) Tính \\(f(x_0)\\) theo \\(m\\); (2) Tính \\(\\lim_{x\\to x_0} f(x)\\) (hoặc cả \\(\\lim_{x\\to x_0^-} f(x)\\) và \\(\\lim_{x\\to x_0^+} f(x)\\)); (3) Giải phương trình \\(\\lim_{x\\to x_0^-} f(x) = \\lim_{x\\to x_0^+} f(x) = f(x_0)\\).",
      "Chứng minh phương trình \\(f(x) = 0\\) luôn có nghiệm với mọi tham số \\(m\\): Chọn hai giá trị \\(a, b\\) khéo léo (sao cho triệt tiêu tham số \\(m\\) hoặc làm \\(f(a)\\cdot f(b) < 0, \\forall m\\)) và nêu rõ \\(f(x)\\) là hàm đa thức/sơ cấp nên liên tục trên \\([a; b]\\).",
      "Lỗi dễ mắc: Quên kiểm tra điều kiện \\(f(x)\\) liên tục trên đoạn \\([a; b]\\) trước khi áp dụng \\(f(a)\\cdot f(b) < 0\\) (nếu hàm gián đoạn trong \\((a; b)\\) thì định lí không còn đúng, ví dụ \\(f(x) = \\frac{1}{x}\\) trên \\([-1; 1]\\))."
    ],
    "applications": [
      "Thuật toán chia đôi (Bisection method) trong giải tích số và máy tính cầm tay để tìm nghiệm xấp xỉ của phương trình phức tạp.",
      "Khẳng định sự tồn tại thời điểm nhiệt độ, mực nước hoặc lợi nhuận đi qua mức cân bằng \\(0\\)."
    ],
    "diagramCaption": "So sánh đồ thị hàm số liên tục (nét liền không đứt) với hàm gián đoạn tại x_0 và minh họa Định lí giá trị trung gian f(a)·f(b) < 0 cắt trục Ox."
  },
  {
    "num": 18,
    "chapter": 6,
    "vol": 2,
    "title": "Lũy thừa với số mũ thực",
    "subtitle": "Lũy thừa với số mũ nguyên, căn bậc n, lũy thừa với số mũ hữu tỉ – số mũ thực và các tính chất biến đổi.",
    "concepts": [
      "Lũy thừa với số mũ nguyên: Cho \\(n \\in \\mathbb{N}^*\\), \\(a^n = a \\cdot a \\cdots a\\) (\\(n\\) thừa số \\(a\\)). Với \\(a \\ne 0\\): \\(a^0 = 1\\) và \\(a^{-n} = \\frac{1}{a^n}\\). Chú ý: \\(0^0\\) và \\(0^{-n}\\) (\\(n \\in \\mathbb{N}^*\\)) không có nghĩa.",
      "Căn bậc \\(n\\): Cho số thực \\(b\\) và số nguyên \\(n \\ge 2\\). Số \\(a\\) được gọi là căn bậc \\(n\\) của \\(b\\) nếu \\(a^n = b\\). Khi \\(n\\) lẻ, với mọi \\(b \\in \\mathbb{R}\\) có duy nhất một căn bậc \\(n\\) kí hiệu \\(\\sqrt[n]{b}\\); khi \\(n\\) chẵn, chỉ \\(b \\ge 0\\) mới có căn bậc \\(n\\) thực và \\(\\sqrt[n]{b} \\ge 0\\) là căn số học không âm.",
      "Lũy thừa với số mũ hữu tỉ và thực: Cho số thực dương \\(a > 0\\) và số hữu tỉ \\(r = \\frac{m}{n}\\) (\\(m \\in \\mathbb{Z}, n \\in \\mathbb{N}, n \\ge 2\\)), ta định nghĩa \\(a^r = a^{\\frac{m}{n}} = \\sqrt[n]{a^m}\\). Với số vô tỉ \\(\\alpha = \\lim r_n\\) (\\(a > 0\\)), \\(a^\\alpha = \\lim a^{r_n}\\). Như vậy khi số mũ không nguyên, cơ số \\(a\\) bắt buộc phải dương (\\(a > 0\\)).",
      "Tính chất so sánh (với \\(a > 0\\)): Luôn có \\(a^x > 0, \\forall x \\in \\mathbb{R}\\). Nếu cơ số \\(a > 1\\) thì \\(a^\\alpha > a^\\beta \\iff \\alpha > \\beta\\) (cùng chiều); nếu \\(0 < a < 1\\) thì \\(a^\\alpha > a^\\beta \\iff \\alpha < \\beta\\) (ngược chiều)."
    ],
    "formulas": [
      {
        "name": "1. Định nghĩa lũy thừa mũ âm & mũ phân số",
        "eq": "\\(a^0 = 1,\\; a^{-n} = \\frac{1}{a^n}\\; (a \\ne 0)\\); \\qquad \\(a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m\\; (a > 0, n \\ge 2)\\)",
        "note": "Chuyển căn thức về dạng lũy thừa mũ phân số giúp rút gọn biểu thức cực nhanh."
      },
      {
        "name": "2. Năm quy tắc tính lũy thừa với số mũ thực (a > 0, b > 0; α, β ∈ ℝ)",
        "eq": "• \\(a^\\alpha \\cdot a^\\beta = a^{\\alpha + \\beta}\\); \\qquad • \\(\\frac{a^\\alpha}{a^\\beta} = a^{\\alpha - \\beta}\\)<br>• \\((a^\\alpha)^\\beta = a^{\\alpha\\beta}\\); \\qquad • \\((ab)^\\alpha = a^\\alpha b^\\alpha\\); \\qquad • \\(\\left(\\frac{a}{b}\\right)^\\alpha = \\frac{a^\\alpha}{b^\\alpha}\\)",
        "note": "Tất cả tính chất của lũy thừa số mũ nguyên dương đều giữ nguyên cho số mũ thực khi \\(a, b > 0\\)."
      },
      {
        "name": "3. Tính chất căn bậc n (a, b ≥ 0)",
        "eq": "\\(\\sqrt[n]{a}\\cdot\\sqrt[n]{b} = \\sqrt[n]{ab}; \\quad \\sqrt[n]{\\sqrt[k]{a}} = \\sqrt[nk]{a}; \\quad \\sqrt[n]{a^n} = \\left\\{\\begin{array}{ll} a & \\text{nếu } n \\text{ lẻ} \\\\ |a| & \\text{nếu } n \\text{ chẵn} \\end{array}\\right.\\)",
        "note": "Chú ý dấu giá trị tuyệt đối \\(|a|\\) khi \\(n\\) chẵn."
      },
      {
        "name": "4. So sánh hai lũy thừa cùng cơ số",
        "eq": "• Với \\(a > 1\\): \\(a^\\alpha > a^\\beta \\iff \\alpha > \\beta\\)<br>• Với \\(0 < a < 1\\): \\(a^\\alpha > a^\\beta \\iff \\alpha < \\beta\\)",
        "note": "Hệ quả: Với \\(a > 1\\), \\(a^\\alpha > 1 \\iff \\alpha > 0\\); với \\(0 < a < 1\\), \\(a^\\alpha > 1 \\iff \\alpha < 0\\)."
      }
    ],
    "methods": [
      "Cách rút gọn biểu thức chứa căn và lũy thừa: Đổi toàn bộ các căn thức \\(\\sqrt[n]{a^m}\\) sang lũy thừa mũ hữu tỉ \\(a^{m/n}\\), đưa các số về cùng cơ số nguyên tố (như \\(2, 3, 5\\)) hoặc dùng hằng đẳng thức đáng nhớ với \\(x = a^{1/2}, y = b^{1/2}\\).",
      "Cách so sánh hai lũy thừa: Đưa về cùng cơ số \\(a\\) rồi xét \\(a > 1\\) hay \\(0 < a < 1\\); hoặc đưa về cùng số mũ dương \\(\\alpha > 0\\) (nếu \\(0 < a < b\\) và \\(\\alpha > 0\\) thì \\(a^\\alpha < b^\\alpha\\)).",
      "Lỗi dễ mắc: Không đảo chiều bất đẳng thức khi cơ số \\(0 < a < 1\\); hoặc viết \\((-2)^{\\frac{1}{2}}\\) (cơ số âm không xác định với số mũ không nguyên)."
    ],
    "applications": [
      "Tính tiền gốc và lãi kép \\(A = P(1+r)^n\\) sau \\(n\\) kì gửi ngân hàng.",
      "Công thức định luật Kepler thứ ba trong thiên văn học \\(T^2 \\propto R^3 \\iff T = k R^{3/2}\\)."
    ],
    "diagramCaption": "Sơ đồ chuyển đổi giữa căn bậc n và lũy thừa mũ hữu tỉ a^(m/n) cùng quy tắc so sánh theo cơ số a > 1 và 0 < a < 1."
  },
  {
    "num": 19,
    "chapter": 6,
    "vol": 2,
    "title": "Lôgarit",
    "subtitle": "Định nghĩa lôgarit, điều kiện tồn tại, các quy tắc tính lôgarit (tích, thương, lũy thừa), công thức đổi cơ số và log, ln.",
    "concepts": [
      "Định nghĩa: Cho hai số thực dương \\(a, b\\) với \\(a \\ne 1\\). Số thực \\(\\alpha\\) thỏa mãn đẳng thức \\(a^\\alpha = b\\) được gọi là lôgarit cơ số \\(a\\) của \\(b\\), kí hiệu là \\(\\log_a b = \\alpha\\).",
      "Điều kiện để \\(\\log_a b\\) có nghĩa: Cơ số \\(0 < a \\ne 1\\) và biểu thức lấy lôgarit (đối số) phải dương \\(b > 0\\) (không có lôgarit của số âm và số 0!).",
      "Hai loại lôgarit đặc biệt thường dùng: (1) Lôgarit thập phân (cơ số 10): viết là \\(\\log b\\) hoặc \\(\\lg b\\) thay cho \\(\\log_{10} b\\); (2) Lôgarit tự nhiên (cơ số \\(e \\approx 2,71828\\dots\\)): viết là \\(\\ln b\\) thay cho \\(\\log_e b\\)."
    ],
    "formulas": [
      {
        "name": "1. Định nghĩa & 4 tính chất cơ bản (0 < a ≠ 1, b > 0)",
        "eq": "\\(\\alpha = \\log_a b \\iff a^\\alpha = b\\)<br>\\(\\log_a 1 = 0; \\quad \\log_a a = 1; \\quad \\log_a(a^\\alpha) = \\alpha; \\quad a^{\\log_a b} = b\\)",
        "note": "Công thức \\(a^{\\log_a b} = b\\) rất hay dùng khi số mũ có chứa lôgarit."
      },
      {
        "name": "2. Lôgarit của một tích, một thương và một lũy thừa (M, N > 0)",
        "eq": "• \\(\\log_a(MN) = \\log_a M + \\log_a N\\)<br>• \\(\\log_a\\left(\\frac{M}{N}\\right) = \\log_a M - \\log_a N; \\quad \\log_a\\left(\\frac{1}{N}\\right) = -\\log_a N\\)<br>• \\(\\log_a(M^\\alpha) = \\alpha \\log_a M; \\quad \\log_a\\sqrt[n]{M} = \\frac{1}{n}\\log_a M\\)",
        "note": "Chú ý: Nếu chỉ biết \\(x \\ne 0\\) và \\(n\\) chẵn thì \\(\\log_a(x^{2k}) = 2k\\log_a|x|\\)."
      },
      {
        "name": "3. Công thức đổi cơ số (0 < a, c ≠ 1; b > 0)",
        "eq": "\\(\\log_a b = \\frac{\\log_c b}{\\log_c a} = \\frac{\\ln b}{\\ln a} \\iff \\log_c a \\cdot \\log_a b = \\log_c b\\)<br>Hệ quả: \\(\\log_a b = \\frac{1}{\\log_b a}\\; (b \\ne 1)\\); \\quad \\(\\log_{a^\\alpha} b = \\frac{1}{\\alpha}\\log_a b\\; (\\alpha \\ne 0)\\)",
        "note": "Mũ ở đối số đưa ra ngoài giữ nguyên trên tử (\\(\\alpha\\)); mũ ở cơ số đưa ra ngoài phải nghịch đảo xuống mẫu (\\(\\frac{1}{\\alpha}\\))."
      }
    ],
    "methods": [
      "Biểu diễn \\(\\log_a b\\) theo các lôgarit đã cho: Phân tích cơ số \\(a\\) và đối số \\(b\\) ra thừa số nguyên tố, sau đó dùng công thức đổi cơ số sang cơ số chung (thường là cơ số nguyên tố nhỏ nhất đề bài cho).",
      "Khi biến đổi biểu thức chứa \\(\\log_a[f(x)]\\), bước đầu tiên luôn là đặt điều kiện xác định \\(f(x) > 0\\) (và cơ số \\(0 < g(x) \\ne 1\\)).",
      "Lỗi dễ mắc: Nhầm \\(\\log_a(M + N)\\) thành \\(\\log_a M + \\log_a N\\) hoặc nhầm \\(\\frac{\\log_a M}{\\log_a N}\\) thành \\(\\log_a M - \\log_a N\\) (thực tế \\(\\frac{\\log_a M}{\\log_a N} = \\log_N M\\))."
    ],
    "applications": [
      "Tính độ pH của dung dịch hóa học: \\(\\text{pH} = -\\log[\\text{H}^+] \\iff [\\text{H}^+] = 10^{-\\text{pH}}\\) (mol/L).",
      "Tính mức cường độ âm \\(L(\\text{B}) = \\log\\left(\\frac{I}{I_0}\\right)\\) (hoặc \\(L(\\text{dB}) = 10\\log\\left(\\frac{I}{I_0}\\right)\\)) và độ lớn địa chấn trên thang Richter \\(M = \\log A - \\log A_0\\)."
    ],
    "diagramCaption": "Cầu nối hai chiều giữa Lũy thừa a^α = b và Lôgarit α = log_a(b) cùng sơ đồ quy tắc Tích – Thương – Đổi cơ số."
  },
  {
    "num": 20,
    "chapter": 6,
    "vol": 2,
    "title": "Hàm số mũ và hàm số lôgarit",
    "subtitle": "Tập xác định, tập giá trị, sự biến thiên, tiệm cận và tính đối xứng qua đường thẳng y = x của đồ thị y = a^x và y = log_a x.",
    "concepts": [
      "Hàm số mũ \\(y = a^x\\) (với cơ số \\(0 < a \\ne 1\\)): Tập xác định \\(D = \\mathbb{R}\\); Tập giá trị \\(T = (0; +\\infty)\\) (đồ thị nằm hoàn toàn phía trên trục hoành \\(Ox\\)); luôn đi qua điểm \\((0; 1)\\) và \\((1; a)\\); nhận trục hoành \\(Ox\\) (\\(y = 0\\)) làm đường tiệm cận ngang. Nếu \\(a > 1\\) hàm số đồng biến trên \\(\\mathbb{R}\\); nếu \\(0 < a < 1\\) hàm số nghịch biến trên \\(\\mathbb{R}\\).",
      "Hàm số lôgarit \\(y = \\log_a x\\) (với cơ số \\(0 < a \\ne 1\\)): Tập xác định \\(D = (0; +\\infty)\\) (đồ thị nằm hoàn toàn bên phải trục tung \\(Oy\\)); Tập giá trị \\(T = \\mathbb{R}\\); luôn đi qua điểm \\((1; 0)\\) và \\((a; 1)\\); nhận trục tung \\(Oy\\) (\\(x = 0\\)) làm đường tiệm cận đứng. Nếu \\(a > 1\\) hàm số đồng biến trên \\((0; +\\infty)\\); nếu \\(0 < a < 1\\) hàm số nghịch biến trên \\((0; +\\infty)\\).",
      "Mối quan hệ đối xứng: Với cùng cơ số \\(a\\), đồ thị của hai hàm số \\(y = a^x\\) và \\(y = \\log_a x\\) đối xứng với nhau qua đường phân giác của góc phần tư thứ nhất \\(y = x\\)."
    ],
    "formulas": [
      {
        "name": "Bảng đối chiếu Hàm số mũ y = a^x và Hàm số lôgarit y = log_a x",
        "eq": "• \\(y = a^x\\): \\(D = \\mathbb{R},\\; T = (0;+\\infty),\\; \\text{TCN } y=0,\\; \\text{qua } (0;1)\\)<br>• \\(y = \\log_a x\\): \\(D = (0;+\\infty),\\; T = \\mathbb{R},\\; \\text{TCĐ } x=0,\\; \\text{qua } (1;0)\\)",
        "note": "Cả hai hàm đều đồng biến khi \\(a > 1\\) và nghịch biến khi \\(0 < a < 1\\)."
      },
      {
        "name": "Giới hạn ở hai đầu miền xác định",
        "eq": "• Khi \\(a > 1\\): \\(\\lim_{x\\to -\\infty} a^x = 0,\\; \\lim_{x\\to +\\infty} a^x = +\\infty\\); \\quad \\(\\lim_{x\\to 0^+} \\log_a x = -\\infty,\\; \\lim_{x\\to +\\infty} \\log_a x = +\\infty\\)<br>• Khi \\(0 < a < 1\\): \\(\\lim_{x\\to -\\infty} a^x = +\\infty,\\; \\lim_{x\\to +\\infty} a^x = 0\\); \\quad \\(\\lim_{x\\to 0^+} \\log_a x = +\\infty,\\; \\lim_{x\\to +\\infty} \\log_a x = -\\infty\\)",
        "note": "Hàm mũ và hàm lôgarit liên tục trên toàn bộ tập xác định của chúng."
      },
      {
        "name": "Mô hình tăng trưởng mũ & Phân rã phóng xạ",
        "eq": "\\(N(t) = N_0 (1 + r)^t = N_0 e^{kt}; \\qquad m(t) = m_0 \\cdot 2^{-\\frac{t}{T}} = m_0 \\cdot \\left(\\frac{1}{2}\\right)^{\\frac{t}{T}}\\)",
        "note": "\\(T\\) là chu kì bán rã (thời gian để lượng chất phóng xạ giảm còn một nửa)."
      }
    ],
    "methods": [
      "Tìm tập xác định của hàm số \\(y = \\log_{g(x)} f(x)\\): Giải hệ điều kiện \\(\\left\\{\\begin{array}{l} f(x) > 0 \\\\ 0 < g(x) \\ne 1 \\end{array}\\right.\\). Với hàm số \\(y = [f(x)]^\\alpha\\) có \\(\\alpha\\) không nguyên thì điều kiện là \\(f(x) > 0\\).",
      "Mẹo đọc đồ thị nhận biết cơ số \\(a, b, c\\): Kẻ đường thẳng \\(y = 1\\) cắt các đồ thị \\(y = \\log_a x, \\log_b x\\) tại các hoành độ \\(x = a, b\\); hoặc kẻ đường thẳng \\(x = 1\\) cắt các đồ thị \\(y = a^x, b^x\\) tại các tung độ \\(y = a, b\\).",
      "Lỗi dễ mắc: Nhầm tập xác định của \\(y = \\log_a(x^2 - 1)\\) là \\(x^2 - 1 \\ge 0\\) (phải là dấu lớn hơn hẳn \\(x^2 - 1 > 0\\))."
    ],
    "applications": [
      "Dự báo quy mô dân số \\(P(t) = P_0 e^{rt}\\), tính thời gian hoàn vốn đầu tư và xác định tuổi cổ vật bằng phương pháp đồng vị phóng xạ Carbon-14 (\\(T \\approx 5730\\) năm).",
      "Mô hình làm nguội của Newton và sự suy giảm cường độ ánh sáng khi truyền qua môi trường hấp thụ."
    ],
    "diagramCaption": "Đồ thị hàm số mũ y = a^x và hàm số lôgarit y = log_a x trong hai trường hợp a > 1 và 0 < a < 1, đối xứng nhau qua đường phân giác y = x."
  },
  {
    "num": 21,
    "chapter": 6,
    "vol": 2,
    "title": "Phương trình, bất phương trình mũ và lôgarit",
    "subtitle": "Phương pháp giải phương trình, bất phương trình mũ và lôgarit cơ bản – nâng cao và quy tắc bảo toàn/đảo chiều theo cơ số.",
    "concepts": [
      "Phương trình mũ cơ bản \\(a^x = b\\) (\\(0 < a \\ne 1\\)): Vì \\(a^x > 0, \\forall x \\in \\mathbb{R}\\) nên nếu \\(b \\le 0\\) thì phương trình vô nghiệm; nếu \\(b > 0\\) thì phương trình luôn có nghiệm duy nhất \\(x = \\log_a b\\).",
      "Phương trình lôgarit cơ bản \\(\\log_a x = b\\) (\\(0 < a \\ne 1\\)): Với mọi \\(b \\in \\mathbb{R}\\), phương trình luôn có nghiệm duy nhất \\(x = a^b\\) (tự động thỏa mãn điều kiện \\(x > 0\\)).",
      "Nguyên tắc vàng khi giải bất phương trình mũ và lôgarit: (1) Xét cơ số \\(a\\): nếu \\(a > 1\\) thì giữ nguyên chiều bất phương trình; nếu \\(0 < a < 1\\) thì PHẢI ĐẢO CHIỀU bất phương trình; (2) Với bất phương trình lôgarit, bắt buộc phải kết hợp điều kiện xác định làm cho mọi biểu thức trong log đều dương (\\(> 0\\))."
    ],
    "formulas": [
      {
        "name": "1. Phương trình mũ cơ bản & Đưa về cùng cơ số (0 < a ≠ 1)",
        "eq": "• \\(a^x = b \\iff \\left\\{\\begin{array}{ll} x = \\log_a b & \\text{nếu } b > 0 \\\\ \\text{vô nghiệm} & \\text{nếu } b \\le 0 \\end{array}\\right.\\)<br>• \\(a^{f(x)} = a^{g(x)} \\iff f(x) = g(x)\\)",
        "note": "Nếu cơ số chứa ẩn, cần xét thêm trường hợp cơ số bằng 1."
      },
      {
        "name": "2. Phương trình lôgarit cơ bản & Đưa về cùng cơ số (0 < a ≠ 1)",
        "eq": "• \\(\\log_a f(x) = b \\iff f(x) = a^b\\) (tự thỏa \\(f(x) > 0\\) vì \\(a^b > 0\\))<br>• \\(\\log_a f(x) = \\log_a g(x) \\iff \\left\\{\\begin{array}{l} f(x) > 0 \\; (\\text{hoặc } g(x) > 0) \\\\ f(x) = g(x) \\end{array}\\right.\\)",
        "note": "Chỉ cần đặt điều kiện dương cho 1 trong 2 biểu thức \\(f(x)\\) hoặc \\(g(x)\\) khi \\(f(x) = g(x)\\)."
      },
      {
        "name": "3. Bất phương trình mũ (0 < a ≠ 1)",
        "eq": "• Với \\(a > 1\\): \\(a^{f(x)} > a^{g(x)} \\iff f(x) > g(x)\\)<br>• Với \\(0 < a < 1\\): \\(a^{f(x)} > a^{g(x)} \\iff f(x) < g(x)\\) (ĐẢO CHIỀU)",
        "note": "Nếu \\(a^{f(x)} > b\\) với \\(b \\le 0\\) thì nghiệm là mọi \\(x\\) làm \\(f(x)\\) xác định; nếu \\(a^{f(x)} \\le b\\) với \\(b \\le 0\\) thì vô nghiệm."
      },
      {
        "name": "4. Bất phương trình lôgarit (0 < a ≠ 1)",
        "eq": "• Với \\(a > 1\\): \\(\\log_a f(x) > \\log_a g(x) \\iff \\left\\{\\begin{array}{l} g(x) > 0 \\\\ f(x) > g(x) \\end{array}\\right.\\); \\quad \\(\\log_a f(x) < b \\iff 0 < f(x) < a^b\\)<br>• Với \\(0 < a < 1\\): \\(\\log_a f(x) > \\log_a g(x) \\iff \\left\\{\\begin{array}{l} f(x) > 0 \\\\ f(x) < g(x) \\end{array}\\right.\\); \\quad \\(\\log_a f(x) > b \\iff 0 < f(x) < a^b\\)",
        "note": "Rất dễ quên chặn dưới \\(0 < f(x)\\) khi giải \\(\\log_a f(x) < b\\) (với \\(a>1\\)) hoặc \\(\\log_a f(x) > b\\) (với \\(0<a<1\\))!"
      }
    ],
    "methods": [
      "Các phương pháp giải nâng cao: (1) Đưa về cùng cơ số; (2) Đặt ẩn phụ: đặt \\(t = a^x\\) (điều kiện \\(t > 0\\)) hoặc đặt \\(t = \\log_a x\\) (\\(t \\in \\mathbb{R}\\)); (3) Lôgarit hóa hai vế dương của phương trình \\(a^{f(x)} = b^{g(x)}\\).",
      "Khi gộp \\(\\log_a f(x) + \\log_a g(x) = \\log_a[f(x)g(x)]\\), bắt buộc phải đặt điều kiện riêng \\(f(x) > 0\\) VÀ \\(g(x) > 0\\) ngay từ đầu (vì \\(f(x)g(x) > 0\\) chứa cả trường hợp cả hai cùng âm làm log ban đầu vô nghĩa).",
      "Lỗi dễ mắc: Quên điều kiện \\(f(x) > 0\\) ở bất phương trình \\(\\log_2 f(x) < 3 \\iff 0 < f(x) < 8\\); quên đảo chiều khi cơ số \\(0 < a < 1\\) (ví dụ \\(\\log_{0,5} x\\) hoặc \\((1/3)^x\\))."
    ],
    "applications": [
      "Giải bài toán tìm số năm \\(n\\) tối thiểu để số tiền tiết kiệm \\(P(1+r)^n\\) vượt mốc mục tiêu \\(A\\): \\(n > \\log_{1+r}\\left(\\frac{A}{P}\\right)\\).",
      "Tính thời gian thuốc kháng sinh đào thải trong máu xuống dưới ngưỡng an toàn."
    ],
    "diagramCaption": "Sơ đồ thuật toán giải bất phương trình Mũ và Lôgarit: phân nhánh theo cơ số a > 1 (giữ chiều) và 0 < a < 1 (đảo chiều + chặn điều kiện > 0)."
  },
  {
    "num": 22,
    "chapter": 7,
    "vol": 2,
    "title": "Hai đường thẳng vuông góc",
    "subtitle": "Góc giữa hai đường thẳng bất kì trong không gian, định nghĩa hai đường thẳng vuông góc (cắt nhau hoặc chéo nhau) và phương pháp chứng minh.",
    "concepts": [
      "Góc giữa hai đường thẳng \\(a\\) và \\(b\\) trong không gian, kí hiệu \\((a, b)\\), là góc giữa hai đường thẳng \\(a'\\) và \\(b'\\) cùng đi qua một điểm \\(O\\) bất kì và lần lượt song song (hoặc trùng) với \\(a\\) và \\(b\\).",
      "Miền giá trị của góc giữa hai đường thẳng: \\(0^\\circ \\le (a, b) \\le 90^\\circ\\) (luôn là góc nhọn hoặc góc vuông, không bao giờ là góc tù!). Nếu \\(a \\parallel b\\) hoặc \\(a \\equiv b\\) thì \\((a, b) = 0^\\circ\\).",
      "Hai đường thẳng \\(a\\) và \\(b\\) được gọi là vuông góc với nhau, kí hiệu \\(a \\perp b\\), nếu góc giữa chúng bằng \\(90^\\circ\\). Lưu ý cực kì quan trọng: Trong không gian, hai đường thẳng vuông góc với nhau có thể CẮT NHAU hoặc CHÉO NHAU (không nhất thiết phải cắt nhau như trong mặt phẳng).",
      "Tính chất: Nếu một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng còn lại (\\(a \\parallel b\\) và \\(c \\perp a \\Rightarrow c \\perp b\\))."
    ],
    "formulas": [
      {
        "name": "1. Định nghĩa góc giữa hai đường thẳng a và b",
        "eq": "Lấy \\(O\\) bất kì (thường chọn \\(O \\in a\\) hoặc \\(O\\) là trung điểm), kẻ \\(a' \\parallel a,\\; b' \\parallel b\\) qua \\(O\\):<br>\\((a, b) = (a', b') \\in [0^\\circ; 90^\\circ]\\)",
        "note": "Nếu trong tam giác tính ra góc \\(\\widehat{A'OB'} > 90^\\circ\\) thì góc giữa hai đường thẳng là \\(180^\\circ - \\widehat{A'OB'}\\)."
      },
      {
        "name": "2. Điều kiện hai đường thẳng vuông góc",
        "eq": "\\(a \\perp b \\iff (a, b) = 90^\\circ\\); \\qquad \\left\\{\\begin{array}{l} a \\parallel b \\\\ c \\perp a \\end{array}\\right. \\implies c \\perp b\\)",
        "note": "Hai cạnh đối của tứ diện đều (ví dụ \\(AB\\) và \\(CD\\)) luôn chéo nhau và vuông góc với nhau."
      },
      {
        "name": "3. Định lí Côsin tính góc giữa hai đường thẳng",
        "eq": "Trong \\(\\triangle OMN\\) có \\(OM \\parallel a,\\; ON \\parallel b\\):<br>\\(\\cos(a, b) = |\\cos\\widehat{MON}| = \\frac{|OM^2 + ON^2 - MN^2|}{2 \\cdot OM \\cdot ON}\\)",
        "note": "Lấy trị tuyệt đối \\(|\\cos\\widehat{MON}|\\) để đảm bảo góc \\((a, b) \\le 90^\\circ\\)."
      }
    ],
    "methods": [
      "Cách xác định và tính góc \\((a, b)\\) giữa hai đường chéo nhau: Từ một điểm thuận lợi (thường là trung điểm một đoạn thẳng trong hình chóp để tận dụng đường trung bình song song với \\(a\\) và \\(b\\)), dựng tam giác chứa hai cạnh song song với \\(a, b\\) rồi áp dụng định lí Côsin hoặc hệ thức lượng tam giác vuông.",
      "Cách chứng minh \\(a \\perp b\\): (1) Kẻ \\(a' \\parallel a\\) cắt \\(b\\) rồi dùng định lí Pythagore đảo hoặc tính chất tam giác cân/đều; (2) Dùng tích vô hướng \\(\\vec{u}_a \\cdot \\vec{u}_b = 0\\); (3) Chứng minh \\(a\\) vuông góc với một mặt phẳng chứa \\(b\\) (Bài 23).",
      "Lỗi dễ mắc: Kết luận góc giữa hai đường thẳng bằng \\(120^\\circ\\) (quên lấy góc bù \\(180^\\circ - 120^\\circ = 60^\\circ\\)) hoặc tưởng rằng hai đường thẳng vuông góc trong không gian thì bắt buộc phải cắt nhau."
    ],
    "applications": [
      "Trong hình lập phương \\(ABCD.A'B'C'D'\\), các cặp cạnh chéo nhau như \\(AB \\perp CC'\\), \\(AB \\perp B'C'\\), \\(AC \\perp B'D'\\) giúp định hình kết cấu khung vuông góc.",
      "Tính góc lệch giữa hai thanh giằng chéo nhau trong kết cấu cầu thép và giàn giáo xây dựng."
    ],
    "diagramCaption": "Cách xác định góc (a, b) giữa hai đường thẳng chéo nhau bằng phép tịnh tiến song song về điểm O và ví dụ hai đường vuông góc chéo nhau trong hình lập phương."
  },
  {
    "num": 23,
    "chapter": 7,
    "vol": 2,
    "title": "Đường thẳng vuông góc với mặt phẳng",
    "subtitle": "Định nghĩa, điều kiện để đường thẳng vuông góc mặt phẳng, tính chất cơ bản và định lí ba đường vuông góc.",
    "concepts": [
      "Định nghĩa: Đường thẳng \\(d\\) được gọi là vuông góc với mặt phẳng \\((P)\\), kí hiệu \\(d \\perp (P)\\), nếu \\(d\\) vuông góc với MỌI đường thẳng \\(a\\) nằm trong mặt phẳng \\((P)\\).",
      "Định lí dấu hiệu nhận biết (cốt lõi): Nếu một đường thẳng vuông góc với HAI đường thẳng cắt nhau cùng thuộc một mặt phẳng thì nó vuông góc với mặt phẳng ấy.",
      "Tính chất: (1) Có duy nhất một mặt phẳng đi qua một điểm cho trước và vuông góc với một đường thẳng cho trước (mặt phẳng trung trực của đoạn thẳng \\(AB\\) đi qua trung điểm \\(I\\) của \\(AB\\) và vuông góc với \\(AB\\), là tập hợp các điểm cách đều \\(A\\) và \\(B\\)); (2) Có duy nhất một đường thẳng đi qua một điểm cho trước và vuông góc với một mặt phẳng cho trước; (3) Hai đường thẳng phân biệt cùng vuông góc với một mặt phẳng thì song song với nhau; hai mặt phẳng phân biệt cùng vuông góc với một đường thẳng thì song song với nhau.",
      "Định lí ba đường vuông góc: Cho đường thẳng \\(a\\) nằm trong mặt phẳng \\((P)\\) và đường thẳng \\(b\\) không nằm trong \\((P)\\) đồng thời không vuông góc với \\((P)\\). Gọi \\(b'\\) là hình chiếu vuông góc của \\(b\\) trên \\((P)\\). Khi đó \\(a \\perp b \\iff a \\perp b'\\)."
    ],
    "formulas": [
      {
        "name": "1. Dấu hiệu chứng minh d ⊥ (P) (vuông góc 2 đường cắt nhau)",
        "eq": "\\(\\left\\{\\begin{array}{l} a, b \\subset (P); \\quad a \\cap b = I \\\\ d \\perp a, \\quad d \\perp b \\end{array}\\right. \\implies d \\perp (P)\\)",
        "note": "Từ \\(d \\perp (P)\\), ta suy ra ngay \\(d \\perp c\\) với mọi đường thẳng \\(c \\subset (P)\\)."
      },
      {
        "name": "2. Cách chứng minh d ⊥ c trong không gian (phương pháp mạnh nhất)",
        "eq": "\\(\\left\\{\\begin{array}{l} d \\perp (P) \\\\ c \\subset (P) \\end{array}\\right. \\implies d \\perp c\\)",
        "note": "Muốn chứng minh \\(d \\perp c\\), ta tìm mặt phẳng \\((P) \\supset c\\) rồi chứng minh \\(d \\perp (P)\\)."
      },
      {
        "name": "3. Liên hệ giữa quan hệ song song và vuông góc",
        "eq": "• \\(\\left\\{\\begin{array}{l} a \\perp (P) \\\\ b \\perp (P) \\end{array}\\right. \\;(a \\ne b) \\implies a \\parallel b; \\qquad \\left\\{\\begin{array}{l} a \\parallel b \\\\ a \\perp (P) \\end{array}\\right. \\implies b \\perp (P)\\)<br>• \\(\\left\\{\\begin{array}{l} (P) \\perp d \\\\ (Q) \\perp d \\end{array}\\right. \\;((P) \\ne (Q)) \\implies (P) \\parallel (Q); \\qquad \\left\\{\\begin{array}{l} d \\parallel (P) \\\\ \\Delta \\perp (P) \\end{array}\\right. \\implies \\Delta \\perp d\\)",
        "note": "Rất hữu ích khi chuyển chứng minh vuông góc từ đường này sang đường song song với nó."
      },
      {
        "name": "4. Định lí ba đường vuông góc",
        "eq": "Với \\(a \\subset (P)\\) và \\(b'\\) là hình chiếu vuông góc của \\(b\\) lên \\((P)\\):<br>\\(a \\perp b \\iff a \\perp b'\\)",
        "note": "Bản chất là chứng minh \\(a \\perp \\text{mp}(b, b')\\)."
      }
    ],
    "methods": [
      "Quy trình chuẩn chứng minh \\(d \\perp (P)\\): Tìm trong \\((P)\\) hai đường thẳng cắt nhau \\(a, b\\) sao cho \\(d \\perp a\\) (thường do giả thiết đường cao \\(SA \\perp \\text{đáy}\\)) và \\(d \\perp b\\) (thường do tính chất đáy là hình vuông, chữ nhật, tam giác vuông hoặc tam giác cân/đều).",
      "Ứng dụng trong hình chóp có \\(SA \\perp (ABC)\\): Nếu \\(\\triangle ABC\\) vuông tại \\(B\\) thì \\(BC \\perp AB\\) và \\(BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp SB\\) (và nếu kẻ \\(AH \\perp SB\\) thì \\(AH \\perp (SBC) \\Rightarrow AH \\perp SC\\)).",
      "Lỗi dễ mắc: Mới chỉ ra \\(d\\) vuông góc với 1 đường thẳng trong \\((P)\\) hoặc 2 đường thẳng song song trong \\((P)\\) đã kết luận \\(d \\perp (P)\\)."
    ],
    "applications": [
      "Sử dụng dây dọi trong xây dựng để kiểm tra cột nhà, bức tường có thẳng đứng vuông góc với mặt sàn nằm ngang hay không.",
      "Thiết kế trục quay động cơ vuông góc với mặt phẳng bánh răng."
    ],
    "diagramCaption": "Dấu hiệu d ⊥ (P) khi d vuông góc với hai đường cắt nhau a, b ⊂ (P) và mô hình Định lí ba đường vuông góc (a ⊥ b ⇔ a ⊥ b')."
  },
  {
    "num": 24,
    "chapter": 7,
    "vol": 2,
    "title": "Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng",
    "subtitle": "Định nghĩa phép chiếu vuông góc, cách xác định và tính góc giữa đường thẳng với mặt phẳng và công thức diện tích hình chiếu.",
    "concepts": [
      "Phép chiếu vuông góc lên mặt phẳng \\((P)\\) là phép chiếu song song theo phương chiếu \\(l\\) vuông góc với mặt phẳng \\((P)\\). Hình chiếu vuông góc của điểm \\(M\\) trên \\((P)\\) chính là chân đường vuông góc \\(H\\) kẻ từ \\(M\\) xuống \\((P)\\) (\\(MH \\perp (P)\\) tại \\(H\\)).",
      "Định nghĩa góc giữa đường thẳng \\(d\\) và mặt phẳng \\((P)\\), kí hiệu \\((d, (P))\\): (1) Nếu \\(d \\perp (P)\\) thì góc giữa \\(d\\) và \\((P)\\) bằng \\(90^\\circ\\); (2) Nếu \\(d\\) không vuông góc với \\((P)\\) thì góc giữa \\(d\\) và \\((P)\\) là góc giữa \\(d\\) và hình chiếu vuông góc \\(d'\\) của nó trên \\((P)\\): \\((d, (P)) = (d, d')\\).",
      "Miền giá trị: \\(0^\\circ \\le (d, (P)) \\le 90^\\circ\\). Đặc biệt nếu \\(d \\parallel (P)\\) hoặc \\(d \\subset (P)\\) thì \\((d, (P)) = 0^\\circ\\). Góc giữa \\(d\\) và hình chiếu \\(d'\\) là góc nhỏ nhất trong các góc tạo bởi \\(d\\) với mọi đường thẳng nằm trong \\((P)\\)."
    ],
    "formulas": [
      {
        "name": "1. Quy tắc 3 bước xác định góc giữa đường xiên AB và mặt phẳng (P)",
        "eq": "• Bước 1: Tìm giao điểm \\(B = AB \\cap (P)\\) (Đỉnh góc).<br>• Bước 2: Từ \\(A\\), tìm chân đường vuông góc \\(H\\) trên \\((P)\\) sao cho \\(AH \\perp (P)\\).<br>• Bước 3: \\(HB\\) là hình chiếu của \\(AB\\) lên \\((P) \\implies (AB, (P)) = (AB, HB) = \\widehat{ABH}\\).",
        "note": "Tam giác \\(AHB\\) luôn vuông tại \\(H\\)!"
      },
      {
        "name": "2. Hệ thức lượng trong tam giác vuông AHB (vuông tại H)",
        "eq": "\\(\\sin\\alpha = \\frac{AH}{AB}; \\qquad \\cos\\alpha = \\frac{HB}{AB}; \\qquad \\tan\\alpha = \\frac{AH}{HB}; \\qquad AB^2 = AH^2 + HB^2\\)",
        "note": "Với \\(\\alpha = \\widehat{ABH} = (AB, (P))\\)."
      },
      {
        "name": "3. Công thức diện tích hình chiếu của một đa giác",
        "eq": "\\(S' = S \\cdot \\cos\\varphi\\)",
        "note": "\\(S\\): diện tích đa giác trong mặt phẳng \\((Q)\\); \\(S'\\): diện tích hình chiếu vuông góc trên \\((P)\\); \\(\\varphi\\): góc giữa \\((P)\\) và \\((Q)\\)."
      }
    ],
    "methods": [
      "Mẹo nhớ nhanh xác định góc \\((AB, (P))\\): 'Giao – Chiếu – Nối': (1) Tìm giao điểm \\(B\\); (2) Tìm hình chiếu vuông góc \\(H\\) của điểm còn lại \\(A\\) xuống \\((P)\\); (3) Nối \\(H\\) với \\(B\\) thì góc cần tìm luôn đặt tại giao điểm \\(B\\) (\\(\\widehat{ABH}\\)).",
      "Trong hình chóp \\(S.ABC\\) có \\(SA \\perp (ABC)\\): Góc giữa cạnh bên \\(SB, SC\\) với mặt đáy \\((ABC)\\) lần lượt là \\(\\widehat{SBA}, \\widehat{SCA}\\). Góc giữa \\(SC\\) với mặt bên \\((SAB)\\) (khi \\(BC \\perp (SAB)\\)) là \\(\\widehat{CSB}\\).",
      "Lỗi dễ mắc: Lấy nhầm góc giữa \\(AB\\) với một đường bất kì trong \\((P)\\) mà chưa chứng minh đường đó là hình chiếu vuông góc \\(HB\\) (tức chưa chứng minh \\(AH \\perp (P)\\))."
    ],
    "applications": [
      "Tính độ dốc của đường đèo, cầu thang, mái nhà hoặc góc nghiêng tối ưu của tấm pin năng lượng mặt trời so với mặt đất.",
      "Tính chiều cao của tháp/cây từ chiều dài bóng trên mặt đất và góc nâng của tia nắng Mặt Trời: \\(h = d \\cdot \\tan\\alpha\\)."
    ],
    "diagramCaption": "Quy tắc 'Giao – Chiếu – Nối' xác định góc α = ∠ABH giữa đường xiên AB và mặt phẳng (P) trong tam giác vuông AHB."
  },
  {
    "num": 25,
    "chapter": 7,
    "vol": 2,
    "title": "Hai mặt phẳng vuông góc",
    "subtitle": "Góc giữa hai mặt phẳng, góc nhị diện, điều kiện hai mặt phẳng vuông góc, các định lí hệ quả và hình lăng trụ đứng – hình chóp đều.",
    "concepts": [
      "Góc giữa hai mặt phẳng \\((P)\\) và \\((Q)\\), kí hiệu \\(((P), (Q))\\), là góc giữa hai đường thẳng lần lượt vuông góc với \\((P)\\) và \\((Q)\\), luôn thỏa mãn \\(0^\\circ \\le ((P), (Q)) \\le 90^\\circ\\). Cách dựng thực hành: Nếu \\((P)\\) cắt \\((Q)\\) theo giao tuyến \\(c\\), từ điểm \\(I \\in c\\) kẻ \\(a \\subset (P)\\) có \\(a \\perp c\\) và \\(b \\subset (Q)\\) có \\(b \\perp c\\) thì \\(((P), (Q)) = (a, b)\\).",
      "Góc nhị diện \\([P, c, Q]\\) gồm hai nửa mặt phẳng \\((P), (Q)\\) có chung bờ \\(c\\). Với \\(I \\in c\\), tia \\(Ix \\subset (P), Ix \\perp c\\) và tia \\(Iy \\subset (Q), Iy \\perp c\\) tạo thành góc phẳng nhị diện \\(\\widehat{xIy} \\in [0^\\circ; 180^\\circ]\\) (chú ý: góc phẳng nhị diện có thể tù, còn góc giữa hai mặt phẳng luôn \\(\\le 90^\\circ\\)!).",
      "Hai mặt phẳng vuông góc: \\((P) \\perp (Q) \\iff ((P), (Q)) = 90^\\circ\\). Dấu hiệu nhận biết: Nếu một mặt phẳng chứa một đường thẳng vuông góc với mặt phẳng kia thì hai mặt phẳng đó vuông góc với nhau.",
      "Các khối đa diện đặc biệt: (1) Lăng trụ đứng có cạnh bên vuông góc với đáy (mặt bên là hình chữ nhật, cạnh bên bằng chiều cao \\(h\\)); Lăng trụ đều là lăng trụ đứng có đáy là đa giác đều; Hình hộp đứng (đáy là hình bình hành); Hình hộp chữ nhật (6 mặt là hình chữ nhật); Hình lập phương (6 mặt là hình vuông); (2) Hình chóp đều có đáy là đa giác đều và chân đường cao \\(SO\\) trùng với tâm \\(O\\) của đáy (các cạnh bên bằng nhau, các mặt bên là các tam giác cân bằng nhau)."
    ],
    "formulas": [
      {
        "name": "1. Xác định góc giữa hai mặt phẳng cắt nhau theo giao tuyến c",
        "eq": "\\(\\left\\{\\begin{array}{l} (P) \\cap (Q) = c \\\\ a \\subset (P),\\; a \\perp c \\text{ tại } I \\\\ b \\subset (Q),\\; b \\perp c \\text{ tại } I \\end{array}\\right. \\implies ((P), (Q)) = (a, b) \\in [0^\\circ; 90^\\circ]\\)",
        "note": "Với góc phẳng nhị diện \\([A, c, B]\\), số đo góc nhị diện là \\(\\widehat{AIB} \\in [0^\\circ; 180^\\circ]\\)."
      },
      {
        "name": "2. Dấu hiệu chứng minh hai mặt phẳng vuông góc (P) ⊥ (Q)",
        "eq": "\\(\\left\\{\\begin{array}{l} d \\subset (P) \\\\ d \\perp (Q) \\end{array}\\right. \\implies (P) \\perp (Q)\\)",
        "note": "Muốn chứng minh \\((P) \\perp (Q)\\), ta chỉ ra trong \\((P)\\) có chứa 1 đường thẳng \\(d \\perp (Q)\\)."
      },
      {
        "name": "3. Hai định lí tính chất cực kì quan trọng để xác định đường cao SO",
        "eq": "• Định lí 1 (Đường vuông góc giao tuyến): \\(\\left\\{\\begin{array}{l} (P) \\perp (Q),\\; (P) \\cap (Q) = c \\\\ a \\subset (P),\\; a \\perp c \\end{array}\\right. \\implies a \\perp (Q)\\)<br>• Định lí 2 (Giao tuyến của 2 mặt cùng vuông góc với đáy): \\(\\left\\{\\begin{array}{l} (P) \\cap (Q) = d \\\\ (P) \\perp (R),\\; (Q) \\perp (R) \\end{array}\\right. \\implies d \\perp (R)\\)",
        "note": "Ví dụ: Nếu mặt bên \\((SAB) \\perp (ABC)\\) thì đường cao \\(SH\\) của \\(\\triangle SAB\\) kẻ xuống giao tuyến \\(AB\\) chính là đường cao của hình chóp (\\(SH \\perp (ABC)\\))!"
      },
      {
        "name": "4. Đường chéo của hình hộp chữ nhật (kích thước a, b, c) & Hình lập phương cạnh a",
        "eq": "\\(d_{\\text{hình hộp chữ nhật}} = \\sqrt{a^2 + b^2 + c^2}; \\qquad d_{\\text{lập phương}} = a\\sqrt{3}\\)",
        "note": "Trong chóp tam giác đều \\(S.ABC\\) cạnh đáy \\(a\\): bán kính ngoại tiếp đáy \\(R = AO = \\frac{a\\sqrt{3}}{3}\\), nội tiếp \\(r = OM = \\frac{a\\sqrt{3}}{6}\\)."
      }
    ],
    "methods": [
      "Mẫu dựng góc giữa mặt bên \\((SBC)\\) và mặt đáy \\((ABC)\\) khi biết \\(SA \\perp (ABC)\\): (1) Giao tuyến là \\(BC\\); (2) Từ chân đường cao \\(A\\), kẻ \\(AH \\perp BC\\) tại \\(H\\); (3) Theo định lí 3 đường vuông góc, \\(SH \\perp BC\\); (4) Vậy góc \\(((SBC), (ABC)) = (SH, AH) = \\widehat{SHA}\\).",
      "Cách tìm chân đường cao hình chóp từ giả thiết mặt bên vuông góc đáy: Nếu \\((SAB) \\perp (ABC)\\) và \\((SAC) \\perp (ABC)\\) thì giao tuyến \\(SA \\perp (ABC)\\). Nếu chỉ có \\((SAB) \\perp (ABC)\\) thì từ \\(S\\) hạ \\(SH \\perp AB\\) (giao tuyến), suy ra \\(SH \\perp (ABC)\\).",
      "Lỗi dễ mắc: Nhầm góc phẳng nhị diện (có thể tù \\(> 90^\\circ\\)) với góc giữa hai mặt phẳng (luôn \\(\\le 90^\\circ\\)); hoặc trong hình chóp đều tưởng nhầm góc giữa mặt bên và đáy là góc giữa cạnh bên và đáy."
    ],
    "applications": [
      "Tính độ nghiêng mái dốc kim tự tháp Ai Cập, mái nhà tứ giác đều và góc mở của laptop, cánh cửa.",
      "Thiết kế các vách ngăn chịu lực vuông góc với sàn trong xây dựng dân dụng."
    ],
    "diagramCaption": "Cách xác định góc giữa hai mặt phẳng ((SBC), (ABC)) = ∠SHA qua giao tuyến BC và mô hình hình chóp tứ giác đều S.ABCD."
  },
  {
    "num": 26,
    "chapter": 7,
    "vol": 2,
    "title": "Khoảng cách",
    "subtitle": "Khoảng cách từ một điểm đến đường thẳng/mặt phẳng, khoảng cách giữa đường và mặt song song, hai mặt song song và hai đường chéo nhau.",
    "concepts": [
      "Khoảng cách từ điểm \\(M\\) đến đường thẳng \\(a\\) (hoặc mặt phẳng \\((P)\\)), kí hiệu \\(d(M, a)\\) (hoặc \\(d(M, (P))\\)), là độ dài đoạn vuông góc \\(MH\\) kẻ từ \\(M\\) đến \\(a\\) (hoặc \\((P)\\)). Đây là khoảng cách ngắn nhất từ \\(M\\) tới mọi điểm thuộc \\(a\\) (hoặc \\((P)\\)).",
      "Khoảng cách giữa đường thẳng \\(a\\) và mặt phẳng \\((P)\\) song song với nhau là khoảng cách từ một điểm \\(M\\) bất kì trên \\(a\\) đến \\((P)\\): \\(d(a, (P)) = d(M, (P))\\). Khoảng cách giữa hai mặt phẳng song song \\((P) \\parallel (Q)\\) là khoảng cách từ một điểm bất kì của mặt này đến mặt kia.",
      "Đường vuông góc chung và khoảng cách giữa hai đường thẳng chéo nhau \\(a, b\\): Đường thẳng \\(\\Delta\\) cắt cả \\(a, b\\) (tại \\(M, N\\)) và cùng vuông góc với \\(a, b\\) gọi là đường vuông góc chung của \\(a\\) và \\(b\\). Độ dài đoạn vuông góc chung \\(MN\\) là khoảng cách giữa hai đường chéo nhau: \\(d(a, b) = MN\\) (cũng bằng khoảng cách từ \\(a\\) đến mặt phẳng \\((P)\\) chứa \\(b\\) và song song với \\(a\\))."
    ],
    "formulas": [
      {
        "name": "1. Quy đổi tỉ số khoảng cách từ điểm M bất kì về chân đường cao A",
        "eq": "Cho \\(AM\\) cắt mặt phẳng \\((P)\\) tại \\(I\\) (hoặc \\(AM \\parallel (P)\\)):<br>• Nếu \\(AM \\parallel (P) \\implies d(M, (P)) = d(A, (P))\\)<br>• Nếu \\(AM \\cap (P) = I \\implies \\frac{d(M, (P))}{d(A, (P))} = \\frac{MI}{AI}\\)",
        "note": "Đây là kĩ thuật 'Đổi điểm' quan trọng nhất: luôn đưa điểm khó tính \\(M\\) về chân đường cao \\(A\\)!"
      },
      {
        "name": "2. Bài toán gốc: Tính d(A, (SBC)) khi biết SA ⊥ (ABC) (chân đường cao A)",
        "eq": "• Bước 1: Trong đáy \\((ABC)\\), từ \\(A\\) kẻ \\(AE \\perp BC\\) tại \\(E\\) (\\(BC\\) là giao tuyến).<br>• Bước 2: Trong \\(\\triangle SAE\\) vuông tại \\(A\\), kẻ \\(AH \\perp SE\\) tại \\(H \\implies AH \\perp (SBC)\\).<br>• Công thức: \\(\\frac{1}{AH^2} = \\frac{1}{SA^2} + \\frac{1}{AE^2} \\iff AH = \\frac{SA \\cdot AE}{\\sqrt{SA^2 + AE^2}}\\)",
        "note": "Nếu \\(\\triangle ABC\\) vuông tại \\(B\\) thì \\(E \\equiv B\\) (chỉ cần kẻ 1 đường \\(AH \\perp SB\\))."
      },
      {
        "name": "3. Công thức 1/d^2 cho tứ diện vuông O.ABC (OA, OB, OC đôi một vuông góc)",
        "eq": "Gọi \\(OH = d(O, (ABC))\\) thì \\(H\\) là trực tâm \\(\\triangle ABC\\) và:<br>\\(\\frac{1}{OH^2} = \\frac{1}{OA^2} + \\frac{1}{OB^2} + \\frac{1}{OC^2}\\)",
        "note": "Áp dụng cực nhanh khi 3 cạnh xuất phát từ \\(O\\) đôi một vuông góc."
      },
      {
        "name": "4. Khoảng cách giữa hai đường thẳng chéo nhau a và b",
        "eq": "Dựng mặt phẳng \\((P) \\supset b\\) sao cho \\(a \\parallel (P)\\). Khi đó với mọi \\(M \\in a\\):<br>\\(d(a, b) = d(a, (P)) = d(M, (P))\\)",
        "note": "Quy bài toán khoảng cách hai đường chéo nhau về bài toán khoảng cách từ điểm đến mặt phẳng!"
      }
    ],
    "methods": [
      "Ba bước vàng tính \\(d(M, (P))\\): (1) Nếu \\(M\\) là chân đường cao của hình chóp \\(\\to\\) dùng bài toán mẫu 2 nét vẽ (\\(AE \\perp \\text{giao tuyến}\\), \\(AH \\perp SE\\)); (2) Nếu \\(M\\) không phải chân đường cao \\(\\to\\) nối \\(M\\) với chân đường cao \\(A\\) để đổi khoảng cách theo tỉ số \\(\\frac{d(M,(P))}{d(A,(P))} = \\frac{MI}{AI}\\); (3) Hoặc dùng phương pháp thể tích \\(d(M, (P)) = \\frac{3V_{M.ABC}}{S_{\\triangle ABC}}\\) (Bài 27).",
      "Hai trường hợp tính \\(d(a, b)\\) giữa hai đường chéo nhau: (1) Nếu \\(a \\perp b\\) (ví dụ \\(SA \\perp BC\\)): dựng đoạn vuông góc chung trực tiếp; (2) Trường hợp tổng quát (ví dụ \\(d(SA, BC)\\) hoặc \\(d(AB, SC)\\)): qua \\(C\\) kẻ đường thẳng \\(Cx \\parallel AB\\) để tạo mặt phẳng \\((SCx) \\parallel AB\\), rồi tính \\(d(AB, SC) = d(A, (SCx))\\).",
      "Lỗi dễ mắc: Kẻ \\(AH \\perp SB\\) rồi kết luận ngay \\(AH = d(A, (SBC))\\) khi \\(\\triangle ABC\\) KHÔNG vuông tại \\(B\\) (phải kẻ \\(AE \\perp BC\\) trước rồi mới kẻ \\(AH \\perp SE\\)!)."
    ],
    "applications": [
      "Tính khoảng cách an toàn tối thiểu giữa hai đường ống dẫn khí/đường dây cao thế chéo nhau hoặc hai hành lang bay của máy bay ở các độ cao khác nhau.",
      "Tính chiều dài ngắn nhất của cáp neo nối từ chân trụ đến mái nghiêng."
    ],
    "diagramCaption": "Bài toán gốc 2 nét vẽ tính khoảng cách từ chân đường cao A đến mặt bên (SBC): kẻ AE ⊥ BC và AH ⊥ SE, cùng phương pháp mặt phẳng song song tính d(a, b)."
  },
  {
    "num": 27,
    "chapter": 7,
    "vol": 2,
    "title": "Thể tích",
    "subtitle": "Công thức tính thể tích khối hộp chữ nhật, khối lăng trụ, khối chóp và khối chóp cụt đều kèm các công thức diện tích đáy.",
    "concepts": [
      "Thể tích của một khối đa diện là số đo phần không gian mà khối đa diện đó chiếm chỗ, luôn là một số dương và có tính chất cộng được (nếu chia khối \\(H\\) thành hai khối \\(H_1, H_2\\) không có điểm trong chung thì \\(V(H) = V(H_1) + V(H_2)\\)).",
      "Trong mọi công thức thể tích, \\(B\\) (hoặc \\(S_{\\text{đáy}}\\)) là diện tích mặt đáy, còn \\(h\\) bắt buộc phải là CHIỀU CAO (tức khoảng cách vuông góc từ đỉnh hoặc mặt đáy trên xuống mặt phẳng chứa đáy dưới), tuyệt đối không phải độ dài cạnh bên xiên!",
      "Chú ý phân biệt hệ số \\(\\frac{1}{3}\\): Khối lăng trụ có \\(V = B \\cdot h\\) (không có \\(\\frac{1}{3}\\)); khối chóp có \\(V = \\frac{1}{3} B \\cdot h\\) (có hệ số \\(\\frac{1}{3}\\)). Đối với lăng trụ đứng và hình hộp chữ nhật, cạnh bên vuông góc với đáy nên độ dài cạnh bên chính là chiều cao \\(h\\)."
    ],
    "formulas": [
      {
        "name": "1. Thể tích khối hộp chữ nhật, khối lập phương & khối lăng trụ",
        "eq": "• Khối hộp chữ nhật (3 kích thước \\(a, b, c\\)): \\(V = a \\cdot b \\cdot c\\)<br>• Khối lập phương cạnh \\(a\\): \\(V = a^3\\)<br>• Khối lăng trụ bất kì (diện tích đáy \\(B\\), chiều cao \\(h\\)): \\(V_{\\text{lăng trụ}} = B \\cdot h\\)",
        "note": "Với lăng trụ xiên có cạnh bên \\(l\\) tạo với đáy góc \\(\\alpha\\), chiều cao là \\(h = l \\cdot \\sin\\alpha\\)."
      },
      {
        "name": "2. Thể tích khối chóp & Khối chóp cụt",
        "eq": "• Khối chóp (diện tích đáy \\(B\\), chiều cao \\(h\\)): \\(V_{\\text{chóp}} = \\frac{1}{3} B \\cdot h\\)<br>• Khối chóp cụt (diện tích 2 đáy \\(B_1, B_2\\), chiều cao \\(h\\)): \\(V_{\\text{chóp cụt}} = \\frac{h}{3}\\left(B_1 + B_2 + \\sqrt{B_1 B_2}\\right)\\)",
        "note": "Từ \\(V = \\frac{1}{3}Bh \\implies h = d(S, (ABC)) = \\frac{3V_{S.ABC}}{S_{\\triangle ABC}}\\) (dùng thể tích để tính khoảng cách!)."
      },
      {
        "name": "3. Tỉ số thể tích Simson (cho khối chóp tam giác S.ABC)",
        "eq": "Lấy \\(A' \\in SA,\\; B' \\in SB,\\; C' \\in SC\\) thì:<br>\\(\\frac{V_{S.A'B'C'}}{V_{S.ABC}} = \\frac{SA'}{SA} \\cdot \\frac{SB'}{SB} \\cdot \\frac{SC'}{SC}\\)",
        "note": "Chỉ áp dụng trực tiếp cho chóp TAM GIÁC; với chóp tứ giác phải chia đáy thành 2 tam giác trước."
      },
      {
        "name": "4. Các công thức diện tích đáy B hay dùng nhất",
        "eq": "• Tam giác đều cạnh \\(a\\): \\(S = \\frac{a^2\\sqrt{3}}{4}\\), đường cao \\(h_đ = \\frac{a\\sqrt{3}}{2}\\)<br>• Tam giác thường: \\(S = \\frac{1}{2}a h_a = \\frac{1}{2}ab\\sin C = \\sqrt{p(p-a)(p-b)(p-c)}\\)<br>• Hình vuông cạnh \\(a\\): \\(S = a^2\\) (đường chéo \\(a\\sqrt{2}\\)); Hình chữ nhật: \\(S = ab\\)<br>• Hình thoi: \\(S = \\frac{1}{2}d_1 d_2\\); Hình thang: \\(S = \\frac{(a+b)h}{2}\\)",
        "note": "Thể tích tứ diện vuông \\(O.ABC\\) (với \\(OA, OB, OC\\) đôi một vuông góc): \\(V = \\frac{1}{6} OA \\cdot OB \\cdot OC\\)."
      }
    ],
    "methods": [
      "Quy trình 3 bước tính thể tích khối chóp/lăng trụ: (1) Tính diện tích mặt đáy \\(B\\) dựa vào hình học phẳng; (2) Xác định chân đường cao \\(H\\) của đỉnh xuống đáy và tính chiều cao \\(h = SH\\) (dùng định lí Pythagore hoặc tỉ số lượng giác \\(h = \\text{cạnh chiếu} \\cdot \\tan\\alpha\\)); (3) Ráp vào công thức \\(V = \\frac{1}{3}Bh\\) (chóp) hoặc \\(V = Bh\\) (lăng trụ) và kiểm tra đơn vị lập phương.",
      "Cách xác định nhanh chân đường cao \\(H\\) của hình chóp: (1) Có cạnh bên \\(SA \\perp \\text{đáy} \\Rightarrow h = SA\\); (2) Hai mặt bên \\((SAB)\\) và \\((SAC)\\) cùng vuông góc với đáy \\(\\Rightarrow SA \\perp \\text{đáy}\\); (3) Mặt bên \\((SAB) \\perp \\text{đáy}\\) \\(\\Rightarrow\\) đường cao \\(SH\\) của \\(\\triangle SAB\\) vuông góc với đáy; (4) Hình chóp đều hoặc các cạnh bên bằng nhau \\(\\Rightarrow H\\) là tâm đường tròn ngoại tiếp đáy.",
      "Lỗi dễ mắc: Quên nhân \\(\\frac{1}{3}\\) khi tính thể tích khối chóp (hoặc nhân thừa \\(\\frac{1}{3}\\) cho khối lăng trụ); lấy nhầm độ dài cạnh bên xiên hoặc trung đoạn mặt bên làm chiều cao \\(h\\)."
    ],
    "applications": [
      "Tính dung tích bể chứa nước, thể tích bê tông đúc trụ cầu, mái vòm, gầu xúc máy đào (dạng chóp cụt) và thể tích kim tự tháp.",
      "Ứng dụng công thức \\(h = \\frac{3V}{B}\\) để tính khoảng cách từ một điểm đến mặt phẳng mà không cần dựng hình chiếu phức tạp."
    ],
    "diagramCaption": "So sánh trực quan Thể tích khối lăng trụ V = B·h, khối chóp V = (1/3)B·h và khối chóp cụt V = (h/3)(B_1 + B_2 + √(B_1·B_2))."
  },
  {
    "num": 28,
    "chapter": 8,
    "vol": 2,
    "title": "Biến cố hợp, biến cố giao, biến cố độc lập",
    "subtitle": "Phép thử ngẫu nhiên, không gian mẫu Ω, biến cố đối, biến cố hợp A ∪ B, biến cố giao A ∩ B, biến cố xung khắc và biến cố độc lập.",
    "concepts": [
      "Không gian mẫu \\(\\Omega\\) là tập hợp tất cả các kết quả có thể xảy ra của một phép thử ngẫu nhiên; mỗi biến cố \\(A\\) là một tập con của \\(\\Omega\\) (\\(A \\subset \\Omega\\)). Biến cố đối của \\(A\\) là \\(\\bar{A} = \\Omega \\setminus A\\) ('\\(A\\) không xảy ra'), luôn có \\(P(\\bar{A}) = 1 - P(A)\\).",
      "Biến cố hợp \\(A \\cup B\\) xảy ra khi và chỉ khi có ÍT NHẤT MỘT trong hai biến cố \\(A\\) hoặc \\(B\\) xảy ra (gắn với từ khóa 'hoặc', 'ít nhất một').",
      "Biến cố giao \\(A \\cap B\\) (còn viết gọn là \\(AB\\)) xảy ra khi và chỉ khi CẢ HAI biến cố \\(A\\) và \\(B\\) đồng thời xảy ra (gắn với từ khóa 'và', 'cả hai', 'đồng thời').",
      "Biến cố xung khắc vs Biến cố độc lập: (1) Hai biến cố \\(A\\) và \\(B\\) là XUNG KHẮC nếu chúng không bao giờ cùng xảy ra trong một phép thử (\\(A \\cap B = \\varnothing \\Rightarrow P(A \\cap B) = 0\\)); (2) Hai biến cố \\(A\\) và \\(B\\) là ĐỘC LẬP nếu việc xảy ra hay không xảy ra của biến cố này không làm ảnh hưởng tới xác suất xảy ra của biến cố kia (điều kiện cần và đủ: \\(P(A \\cap B) = P(A)\\cdot P(B)\\))."
    ],
    "formulas": [
      {
        "name": "1. Xác suất cổ điển (khi các kết quả sơ cấp đồng khả năng)",
        "eq": "\\(P(A) = \\frac{n(A)}{n(\\Omega)} = \\frac{|A|}{|\\Omega|}; \\qquad 0 \\le P(A) \\le 1; \\qquad P(\\bar{A}) = 1 - P(A)\\)",
        "note": "\\(P(\\Omega) = 1\\) (biến cố chắc chắn); \\(P(\\varnothing) = 0\\) (biến cố không thể)."
      },
      {
        "name": "2. Bảng từ khóa chuyển lời văn sang kí hiệu tập hợp biến cố",
        "eq": "• 'Ít nhất một trong hai \\(A, B\\) xảy ra' \\(\\longrightarrow A \\cup B\\)<br>• 'Cả hai \\(A\\) và \\(B\\) cùng xảy ra' \\(\\longrightarrow A \\cap B = AB\\)<br>• 'Chỉ \\(A\\) xảy ra, \\(B\\) không xảy ra' \\(\\longrightarrow A\\bar{B} = A \\setminus B\\)<br>• 'Cả hai đều không xảy ra' \\(\\longrightarrow \\bar{A}\\bar{B} = \\overline{A \\cup B}\\)",
        "note": "Theo luật De Morgan: \\(\\overline{A \\cup B} = \\bar{A} \\cap \\bar{B}\\) và \\(\\overline{A \\cap B} = \\bar{A} \\cup \\bar{B}\\)."
      },
      {
        "name": "3. Phân biệt Xung khắc và Độc lập (với P(A) > 0, P(B) > 0)",
        "eq": "• \\(A, B\\) xung khắc \\(\\iff A \\cap B = \\varnothing \\implies P(A \\cap B) = 0\\)<br>• \\(A, B\\) độc lập \\(\\iff P(A \\cap B) = P(A) \\cdot P(B)\\)",
        "note": "Nếu \\(P(A) > 0\\) và \\(P(B) > 0\\): hai biến cố xung khắc thì KHÔNG ĐỘC LẬP; hai biến cố độc lập thì KHÔNG XUNG KHẮC!"
      }
    ],
    "methods": [
      "Khi gặp bài toán biểu diễn biến cố phức tạp (như 'có đúng 1 trong 2 người bắn trúng' hoặc 'ít nhất 1 động cơ hoạt động'): Phân tích thành các biến cố sơ cấp \\(A, B, \\bar{A}, \\bar{B}\\). Ví dụ: 'Có đúng 1 biến cố xảy ra' là \\(C = A\\bar{B} \\cup \\bar{A}B\\) (hai biến cố \\(A\\bar{B}\\) và \\(\\bar{A}B\\) xung khắc nhau).",
      "Nếu \\(A\\) và \\(B\\) độc lập thì các cặp \\((A, \\bar{B})\\), \\((\\bar{A}, B)\\) và \\((\\bar{A}, \\bar{B})\\) cũng độc lập với nhau.",
      "Lỗi dễ mắc: Nhầm lẫn hai khái niệm 'xung khắc' và 'độc lập' là giống nhau (thực chất chúng hoàn toàn trái ngược nhau khi \\(P(A), P(B) > 0\\)!)."
    ],
    "applications": [
      "Phân tích độ tin cậy của hệ thống kĩ thuật mắc nối tiếp (cần cả hai \\(A \\cap B\\)) và mắc song song dự phòng (cần ít nhất một \\(A \\cup B\\)).",
      "Xét nghiệm sàng lọc y tế và phân tích di truyền các tính trạng phân li độc lập."
    ],
    "diagramCaption": "Biểu đồ Venn minh họa trực quan các vùng biến cố: Hợp A ∪ B, Giao A ∩ B, Biến cố đối Ā, Chỉ A xảy ra (A\\B) và Hai biến cố xung khắc."
  },
  {
    "num": 29,
    "chapter": 8,
    "vol": 2,
    "title": "Công thức cộng xác suất",
    "subtitle": "Công thức cộng xác suất cho hai biến cố xung khắc và hai biến cố bất kì, mở rộng cho ba biến cố và phương pháp phần bù.",
    "concepts": [
      "Quy tắc cộng cho hai biến cố xung khắc: Nếu \\(A\\) và \\(B\\) là hai biến cố xung khắc (\\(A \\cap B = \\varnothing\\)) thì xác suất để \\(A\\) hoặc \\(B\\) xảy ra bằng tổng xác suất của chúng: \\(P(A \\cup B) = P(A) + P(B)\\).",
      "Quy tắc cộng tổng quát cho hai biến cố bất kì: Với hai biến cố \\(A, B\\) bất kì, \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\). Phải trừ đi \\(P(A \\cap B)\\) vì phần giao \\(A \\cap B\\) đã được tính lặp hai lần trong \\(P(A)\\) và \\(P(B)\\).",
      "Chiến lược tính qua biến cố đối: Biến cố \\(E =\\) 'Có ít nhất một biến cố xảy ra' có biến cố đối là \\(\\bar{E} =\\) 'Không có biến cố nào xảy ra', do đó \\(P(E) = 1 - P(\\bar{E})\\)."
    ],
    "formulas": [
      {
        "name": "1. Công thức cộng cho hai biến cố xung khắc (A ∩ B = ∅)",
        "eq": "\\(P(A \\cup B) = P(A) + P(B)\\)<br>Mở rộng cho \\(k\\) biến cố đôi một xung khắc: \\(P(A_1 \\cup A_2 \\cup \\dots \\cup A_k) = \\sum_{i=1}^k P(A_i)\\)",
        "note": "Hệ quả: \\(P(A) = P(A\\cap B) + P(A\\cap\\bar{B})\\) vì \\(A\\cap B\\) và \\(A\\cap\\bar{B}\\) xung khắc."
      },
      {
        "name": "2. Công thức cộng tổng quát cho hai biến cố bất kì",
        "eq": "\\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\)<br>Suy ra: \\(P(A \\cap B) = P(A) + P(B) - P(A \\cup B)\\)",
        "note": "Nếu \\(P(A) + P(B) > 1\\) thì hai biến cố \\(A, B\\) chắc chắn KHÔNG thể xung khắc (vì \\(P(A\\cup B) \\le 1\\))."
      },
      {
        "name": "3. Công thức cộng mở rộng cho ba biến cố A, B, C",
        "eq": "\\(P(A\\cup B\\cup C) = P(A)+P(B)+P(C) - P(AB)-P(BC)-P(CA) + P(ABC)\\)",
        "note": "Nguyên lí bù trừ: Cộng đơn – Trừ đôi – Cộng ba."
      },
      {
        "name": "4. Công thức tính xác suất 'Chỉ A xảy ra' và 'Cả hai không xảy ra'",
        "eq": "\\(P(A\\bar{B}) = P(A) - P(A \\cap B); \\qquad P(\\bar{A}\\bar{B}) = 1 - P(A \\cup B)\\)",
        "note": "Dễ dàng kiểm tra ngay trên sơ đồ Venn."
      }
    ],
    "methods": [
      "Quy trình 3 bước áp dụng công thức cộng: (1) Gọi tên rõ biến cố \\(A, B\\) và xác định biến cố cần tính là \\(A \\cup B\\) (hoặc \\(A \\cap B\\)); (2) Kiểm tra xem \\(A\\) và \\(B\\) có xung khắc không: nếu không có phần tử chung thì cộng trực tiếp \\(P(A) + P(B)\\); nếu có phần chung (ví dụ số vừa chia hết cho 2 vừa chia hết cho 3 là chia hết cho 6) thì bắt buộc phải tính \\(P(A \\cap B)\\) và trừ đi; (3) Kiểm tra kết quả nằm trong đoạn \\([0; 1]\\).",
      "Mẹo vẽ sơ đồ Venn điền số lượng phần tử hoặc xác suất: Điền vùng giao \\(A \\cap B\\) ở giữa trước, sau đó lấy tổng của \\(A\\) trừ đi phần giao để ra vùng \\(A \\setminus B\\).",
      "Lỗi dễ mắc: Dùng \\(P(A \\cup B) = P(A) + P(B)\\) cho hai biến cố không xung khắc dẫn đến xác suất lớn hơn 1 hoặc kết quả sai!"
    ],
    "applications": [
      "Thống kê thị trường, khảo sát tỉ lệ học sinh thích môn Toán, môn Lí hoặc cả hai môn; tỉ lệ khách hàng mua sản phẩm A hoặc B.",
      "Tính xác suất rút được thẻ mang số chia hết cho \\(a\\) hoặc chia hết cho \\(b\\)."
    ],
    "diagramCaption": "Minh họa nguyên lí bù trừ P(A ∪ B) = P(A) + P(B) - P(A ∩ B): trừ đi phần giao bị tô chồng hai lần."
  },
  {
    "num": 30,
    "chapter": 8,
    "vol": 2,
    "title": "Công thức nhân xác suất cho hai biến cố độc lập",
    "subtitle": "Quy tắc nhân xác suất P(A ∩ B) = P(A)P(B), kết hợp quy tắc cộng – nhân và phương pháp sơ đồ hình cây.",
    "concepts": [
      "Công thức nhân xác suất: Nếu hai biến cố \\(A\\) và \\(B\\) độc lập với nhau thì xác suất để cả hai biến cố cùng xảy ra bằng tích xác suất của chúng: \\(P(A \\cap B) = P(A) \\cdot P(B)\\). Mở rộng cho \\(n\\) biến cố độc lập: \\(P(A_1 A_2 \\dots A_n) = P(A_1)P(A_2)\\dots P(A_n)\\).",
      "Nhận diện phép thử độc lập trong thực tế: Các phép thử lặp lại có hoàn lại (lấy bi ra xem màu rồi bỏ lại vào hộp trước khi lấy tiếp), gieo xúc xắc/đồng xu nhiều lần, các xạ thủ bắn độc lập vào bia, các bóng đèn/động cơ hoạt động độc lập.",
      "Chú ý: Nếu lấy nhiều lần KHÔNG HOÀN LẠI thì các lần lấy phụ thuộc nhau, không được tự ý nhân các xác suất biên nếu chưa xét điều kiện của bước trước.",
      "Sơ đồ hình cây (Probability Tree): Biểu diễn các phép thử nối tiếp theo từng tầng nhánh; xác suất của một nhánh kết quả cuối cùng bằng TÍCH các xác suất dọc theo đường đi trên nhánh đó; xác suất của biến cố gồm nhiều nhánh rời nhau bằng TỔNG xác suất của các nhánh đó."
    ],
    "formulas": [
      {
        "name": "1. Công thức nhân cho hai biến cố độc lập A và B",
        "eq": "\\(A, B\\text{ độc lập } \\iff P(AB) = P(A) \\cdot P(B)\\)<br>Hệ quả: \\(P(A\\bar{B}) = P(A)P(\\bar{B}); \\quad P(\\bar{A}B) = P(\\bar{A})P(B); \\quad P(\\bar{A}\\bar{B}) = P(\\bar{A})P(\\bar{B})\\)",
        "note": "Trong đó \\(P(\\bar{A}) = 1 - P(A)\\) và \\(P(\\bar{B}) = 1 - P(B)\\)."
      },
      {
        "name": "2. Kết hợp Công thức cộng và Công thức nhân khi A, B độc lập",
        "eq": "\\(P(A \\cup B) = P(A) + P(B) - P(A)P(B) = 1 - P(\\bar{A})P(\\bar{B})\\)",
        "note": "Hai cách tính xác suất 'Có ít nhất một trong hai biến cố độc lập \\(A, B\\) xảy ra' cho cùng một kết quả."
      },
      {
        "name": "3. Xác suất 'Có ít nhất 1 lần thành công' trong n phép thử độc lập",
        "eq": "\\(P(\\text{ít nhất 1 thành công}) = 1 - P(\\bar{A}_1)P(\\bar{A}_2)\\dots P(\\bar{A}_n)\\)",
        "note": "Nếu mỗi lần có cùng xác suất thất bại \\(q = 1 - p\\) thì \\(P = 1 - q^n\\)."
      },
      {
        "name": "4. Xác suất 'Có đúng 1 trong 2 biến cố độc lập A, B xảy ra'",
        "eq": "\\(P(A\\bar{B} \\cup \\bar{A}B) = P(A)P(\\bar{B}) + P(\\bar{A})P(B)\\)",
        "note": "Vì \\(A\\bar{B}\\) và \\(\\bar{A}B\\) xung khắc nên dùng công thức cộng, còn bên trong mỗi tích dùng công thức nhân."
      }
    ],
    "methods": [
      "Quy tắc phối hợp Cộng – Nhân: Phân tích biến cố cần tính thành HỢP của các trường hợp đôi một xung khắc (dùng phép CỘNG \\(+\\)), trong mỗi trường hợp gồm các bước/điều kiện độc lập xảy ra đồng thời (dùng phép NHÂN \\(\\times\\)).",
      "Cách vẽ và tính trên Sơ đồ hình cây: Tại mỗi nút phân nhánh, tổng xác suất các nhánh con đi ra từ cùng một nút luôn bằng \\(1\\). Nhân dọc theo nhánh từ gốc đến ngọn, sau đó cộng các ngọn thỏa mãn yêu cầu đề bài.",
      "Lỗi dễ mắc: Khi \\(A, B\\) độc lập, tính \\(P(A \\cup B)\\) bằng \\(P(A) + P(B)\\) mà quên trừ đi tích \\(P(A)P(B)\\)!"
    ],
    "applications": [
      "Tính xác suất trúng đích của hệ thống phòng không nhiều tên lửa bắn độc lập, độ an toàn của hệ thống phanh kép trên ô tô và xác suất di truyền gen Mendel.",
      "Tính xác suất vượt qua kì thi trắc nghiệm hoặc xác suất hệ thống máy chủ hoạt động liên tục không gián đoạn."
    ],
    "diagramCaption": "Sơ đồ hình cây (Tree Diagram) cho hai phép thử độc lập: quy tắc Nhân dọc theo nhánh và Cộng các nhánh xung khắc."
  },
  {
    "num": 31,
    "chapter": 9,
    "vol": 2,
    "title": "Định nghĩa và ý nghĩa của đạo hàm",
    "subtitle": "Định nghĩa đạo hàm tại một điểm từ giới hạn thương sai phân, ý nghĩa hình học (tiếp tuyến) và ý nghĩa vật lí (vận tốc tức thời).",
    "concepts": [
      "Định nghĩa đạo hàm tại một điểm: Cho hàm số \\(y = f(x)\\) xác định trên khoảng \\((a; b)\\) và \\(x_0 \\in (a; b)\\). Nếu tồn tại giới hạn hữu hạn \\(\\lim_{x\\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}\\) thì giới hạn đó được gọi là đạo hàm của hàm số \\(y = f(x)\\) tại điểm \\(x_0\\), kí hiệu là \\(f'(x_0)\\) hoặc \\(y'(x_0)\\). Đặt \\(\\Delta x = x - x_0\\) (số gia của đối số) và \\(\\Delta y = f(x_0 + \\Delta x) - f(x_0)\\) (số gia của hàm số), ta có \\(f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}\\).",
      "Quan hệ giữa tính có đạo hàm và tính liên tục: Nếu hàm số \\(y = f(x)\\) có đạo hàm tại \\(x_0\\) thì nó LIÊN TỤC tại \\(x_0\\). Chiều ngược lại không đúng: một hàm số liên tục tại \\(x_0\\) có thể không có đạo hàm tại \\(x_0\\) (ví dụ \\(y = |x|\\) liên tục tại \\(x = 0\\) nhưng đồ thị bị gãy khúc tạo góc nhọn nên không có đạo hàm tại \\(0\\)).",
      "Ý nghĩa hình học của đạo hàm: Đạo hàm \\(f'(x_0)\\) là hệ số góc \\(k\\) của tiếp tuyến với đồ thị \\((C): y = f(x)\\) tại tiếp điểm \\(M_0(x_0; f(x_0))\\).",
      "Ý nghĩa vật lí của đạo hàm: Nếu chất điểm chuyển động theo phương trình quãng đường \\(s = s(t)\\) thì vận tốc tức thời tại thời điểm \\(t_0\\) là \\(v(t_0) = s'(t_0)\\). Nếu điện lượng truyền qua dây dẫn là \\(q = q(t)\\) thì cường độ dòng điện tức thời là \\(I(t_0) = q'(t_0)\\)."
    ],
    "formulas": [
      {
        "name": "1. Định nghĩa đạo hàm tại điểm x_0",
        "eq": "\\(f'(x_0) = \\lim_{x\\to x_0} \\frac{f(x) - f(x_0)}{x - x_0} = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x} = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}\\)",
        "note": "Tỉ số \\(\\frac{\\Delta y}{\\Delta x}\\) là tốc độ biến thiên trung bình; \\(f'(x_0)\\) là tốc độ biến thiên tức thời."
      },
      {
        "name": "2. Hệ số góc và Phương trình tiếp tuyến tại tiếp điểm M(x_0; y_0)",
        "eq": "Hệ số góc: \\(k = f'(x_0) = \\tan\\alpha\\)<br>Phương trình tiếp tuyến: \\(y - y_0 = f'(x_0)(x - x_0) \\iff y = f'(x_0)(x - x_0) + f(x_0)\\)",
        "note": "Trong đó \\(y_0 = f(x_0)\\) là tung độ tiếp điểm."
      },
      {
        "name": "3. Vận tốc tức thời và Cường độ dòng điện tức thời",
        "eq": "\\(v(t_0) = s'(t_0); \\qquad I(t_0) = q'(t_0)\\)",
        "note": "Khi vật dừng lại thì vận tốc tức thời bằng 0: \\(v(t) = s'(t) = 0\\)."
      }
    ],
    "methods": [
      "Quy trình 3 bước tính đạo hàm tại \\(x_0\\) bằng định nghĩa: (1) Tính \\(\\Delta y = f(x_0 + \\Delta x) - f(x_0)\\) và rút gọn theo \\(\\Delta x\\); (2) Lập tỉ số \\(\\frac{\\Delta y}{\\Delta x}\\) và giản ước \\(\\Delta x\\); (3) Tính giới hạn \\(\\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}\\).",
      "Ba dạng bài viết phương trình tiếp tuyến của đồ thị \\((C): y = f(x)\\):<br>• Dạng 1 (Biết tiếp điểm \\(M(x_0; y_0)\\)): Tính \\(f'(x_0)\\) rồi thay vào \\(y = f'(x_0)(x - x_0) + y_0\\).<br>• Dạng 2 (Biết hoành độ \\(x_0\\) hoặc tung độ \\(y_0\\)): Tìm \\(x_0, y_0\\) rồi quay về Dạng 1.<br>• Dạng 3 (Biết hệ số góc \\(k\\)): Giải phương trình \\(f'(x_0) = k\\) để tìm \\(x_0\\). Lưu ý: Tiếp tuyến song song với \\(d: y = ax + b \\Rightarrow k = a\\) (nhớ kiểm tra không trùng \\(d\\)); tiếp tuyến vuông góc với \\(d: y = ax + b \\;(a \\ne 0) \\Rightarrow k = -\\frac{1}{a}\\).",
      "Lỗi dễ mắc: Nhầm \\(f'(x)\\) (còn chứa biến \\(x\\)) làm hệ số góc tiếp tuyến thay vì phải thay số \\(x_0\\) vào \\(f'(x_0)\\)!"
    ],
    "applications": [
      "Xác định phương tiếp tuyến của quỹ đạo chuyển động và hướng văng của tia lửa khi mài kim loại trên đá mài tròn.",
      "Tính tốc độ tức thời hiển thị trên đồng hồ công-tơ-mét ô tô và tốc độ phản ứng hóa học tức thời."
    ],
    "diagramCaption": "Cát tuyến M_0M tiến dần tới vị trí giới hạn là Tiếp tuyến M_0T khi x → x_0, với hệ số góc k = tan α = f'(x_0)."
  },
  {
    "num": 32,
    "chapter": 9,
    "vol": 2,
    "title": "Các quy tắc tính đạo hàm",
    "subtitle": "Bảng đạo hàm các hàm số sơ cấp cơ bản, quy tắc đạo hàm của tổng – hiệu – tích – thương và quy tắc đạo hàm của hàm hợp.",
    "concepts": [
      "Thay vì tính giới hạn thương sai phân mỗi lần, ta sử dụng bảng đạo hàm của các hàm số sơ cấp cơ bản (lũy thừa, căn thức, lượng giác, mũ, lôgarit) kết hợp với các quy tắc đạo hàm của tổng, hiệu, tích, thương.",
      "Quy tắc đạo hàm của hàm hợp: Nếu hàm số \\(u = g(x)\\) có đạo hàm tại \\(x\\) là \\(u'_x\\) và hàm số \\(y = f(u)\\) có đạo hàm tại \\(u\\) là \\(y'_u\\) thì hàm hợp \\(y = f(g(x))\\) có đạo hàm tại \\(x\\) là \\(y'_x = y'_u \\cdot u'_x = f'(u) \\cdot u'(x)\\).",
      "Mọi công thức đạo hàm của hàm hợp \\(f(u)\\) đều giống hệt công thức của \\(f(x)\\) nhưng BẮT BUỘC NHÂN THÊM \\(u'\\) ở cuối!"
    ],
    "formulas": [
      {
        "name": "1. Quy tắc đạo hàm của tổng, hiệu, tích, thương (u = u(x), v = v(x))",
        "eq": "• \\((u \\pm v)' = u' \\pm v'\\); \\qquad • \\((k \\cdot u)' = k \\cdot u'\\; (k \\text{ là hằng số})\\)<br>• \\((u \\cdot v)' = u'v + uv'\\); \\qquad • \\((u v w)' = u'vw + uv'w + uvw'\\)<br>• \\(\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}\\; (v \\ne 0)\\); \\qquad • \\(\\left(\\frac{1}{v}\\right)' = -\\frac{v'}{v^2}\\)",
        "note": "Mẹo tính nhanh đạo hàm hàm bậc nhất trên bậc nhất: \\(\\left(\\frac{ax+b}{cx+d}\\right)' = \\frac{ad - bc}{(cx+d)^2}\\)."
      },
      {
        "name": "2. Đạo hàm hàm lũy thừa và căn thức (đối chiếu x và hàm hợp u)",
        "eq": "• \\((c)' = 0\\); \\quad \\((x)' = 1\\); \\quad \\((x^\\alpha)' = \\alpha x^{\\alpha-1} \\; \\longrightarrow \\; (u^\\alpha)' = \\alpha u^{\\alpha-1} \\cdot u'\\)<br>• \\((\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}\\; (x > 0) \\; \\longrightarrow \\; (\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}\\; (u > 0)\\)",
        "note": "Hệ quả: \\(\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}\\)."
      },
      {
        "name": "3. Đạo hàm các hàm số lượng giác (góc tính bằng radian)",
        "eq": "• \\((\\sin x)' = \\cos x \\; \\longrightarrow \\; (\\sin u)' = u' \\cdot \\cos u\\)<br>• \\((\\cos x)' = -\\sin x \\; \\longrightarrow \\; (\\cos u)' = -u' \\cdot \\sin u\\)<br>• \\((\\tan x)' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x \\; \\longrightarrow \\; (\\tan u)' = \\frac{u'}{\\cos^2 u}\\)<br>• \\((\\cot x)' = -\\frac{1}{\\sin^2 x} = -(1 + \\cot^2 x) \\; \\longrightarrow \\; (\\cot u)' = -\\frac{u'}{\\sin^2 u}\\)",
        "note": "Mẹo nhớ dấu: Đạo hàm của các hàm bắt đầu bằng chữ 'c' (\\(\\cos, \\cot\\)) luôn có dấu trừ (\\(-\\))!"
      },
      {
        "name": "4. Đạo hàm hàm số mũ và hàm số lôgarit",
        "eq": "• \\((e^x)' = e^x \\; \\longrightarrow \\; (e^u)' = u' \\cdot e^u\\)<br>• \\((a^x)' = a^x \\ln a \\; \\longrightarrow \\; (a^u)' = u' \\cdot a^u \\ln a\\; (0 < a \\ne 1)\\)<br>• \\((\\ln x)' = \\frac{1}{x} \\; \\longrightarrow \\; (\\ln u)' = \\frac{u'}{u}\\; (u > 0)\\)<br>• \\((\\log_a x)' = \\frac{1}{x \\ln a} \\; \\longrightarrow \\; (\\log_a u)' = \\frac{u'}{u \\ln a}\\; (u > 0, 0 < a \\ne 1)\\)",
        "note": "Chú ý: \\((a^x)'\\) là nhân \\(\\ln a\\), còn \\((\\log_a x)'\\) là chia cho \\(\\ln a\\) ở dưới mẫu."
      }
    ],
    "methods": [
      "Quy tắc bóc vỏ từ ngoài vào trong khi tính đạo hàm hàm hợp phức tạp (ví dụ \\(y = \\sin^3(2x + 1)\\)): (1) Lớp ngoài cùng là lũy thừa \\(u^3 \\to 3\\sin^2(2x+1)\\); (2) Nhân đạo hàm lớp giữa \\(\\sin(2x+1) \\to \\cos(2x+1)\\); (3) Nhân đạo hàm lớp trong cùng \\((2x+1)' = 2\\). Kết quả: \\(y' = 6\\sin^2(2x+1)\\cos(2x+1) = 3\\sin(4x+2)\\sin(2x+1)\\).",
      "Với biểu thức lôgarit có tích/thương/lũy thừa (như \\(y = \\ln\\frac{x+1}{x-2}\\)), hãy tách thành \\(\\ln(x+1) - \\ln(x-2)\\) trước khi lấy đạo hàm để tránh phải dùng quy tắc thương phức tạp.",
      "Lỗi dễ mắc: Quên nhân \\(u'\\) khi đạo hàm hàm hợp (ví dụ viết \\((e^{2x})' = e^{2x}\\) thay vì \\(2e^{2x}\\)); nhầm \\((uv)' = u'v'\\); quên dấu trừ ở \\((\\cos x)' = -\\sin x\\)."
    ],
    "applications": [
      "Tìm cực trị, khảo sát tốc độ tăng/giảm của doanh thu, chi phí biên trong kinh tế học (Marginal Cost \\(MC = C'(q)\\)).",
      "Tính tốc độ phân rã phóng xạ tức thời \\(N'(t) = -\\lambda N_0 e^{-\\lambda t}\\) và suất điện động cảm ứng \\(e = -\\Phi'(t)\\)."
    ],
    "diagramCaption": "Sơ đồ dây chuyền đạo hàm hàm hợp y = f(u(x)) ⇒ y'_x = f'(u)·u'(x) và bảng đối chiếu nhanh đạo hàm cơ bản – hàm hợp."
  },
  {
    "num": 33,
    "chapter": 9,
    "vol": 2,
    "title": "Đạo hàm cấp hai",
    "subtitle": "Định nghĩa đạo hàm cấp hai f''(x), cách tính và ý nghĩa cơ học (gia tốc tức thời a(t) = v'(t) = s''(t)).",
    "concepts": [
      "Định nghĩa: Cho hàm số \\(y = f(x)\\) có đạo hàm \\(y' = f'(x)\\) tại mọi điểm \\(x \\in (a; b)\\). Nếu hàm số \\(f'(x)\\) lại có đạo hàm tại \\(x\\) thì ta gọi đạo hàm của \\(f'(x)\\) là đạo hàm cấp hai của hàm số \\(y = f(x)\\) tại \\(x\\), kí hiệu là \\(f''(x)\\) hoặc \\(y''\\).",
      "Công thức định nghĩa: \\(f''(x) = [f'(x)]'\\). Chú ý phân biệt kí hiệu: \\(f''(x)\\) là đạo hàm của \\(f'(x)\\), hoàn toàn khác với bình phương đạo hàm cấp một \\([f'(x)]^2\\)!",
      "Ý nghĩa cơ học của đạo hàm cấp hai: Một chất điểm chuyển động theo phương trình \\(s = s(t)\\) có vận tốc tức thời là \\(v(t) = s'(t)\\). Đạo hàm cấp hai \\(s''(t) = v'(t)\\) chính là GIA TỐC TỨC THỜI \\(a(t)\\) của chuyển động tại thời điểm \\(t\\) (đặc trưng cho tốc độ biến thiên của vận tốc, đơn vị \\(\\text{m/s}^2\\))."
    ],
    "formulas": [
      {
        "name": "1. Định nghĩa đạo hàm cấp hai",
        "eq": "\\(f''(x) = \\big(f'(x)\\big)'; \\qquad y'' = (y')'\\)",
        "note": "Để tính \\(f''(x_0)\\), ta phải tìm hàm \\(f'(x)\\) rồi đạo hàm tiếp ra \\(f''(x)\\), sau đó mới thay số \\(x = x_0\\) ở bước cuối cùng!"
      },
      {
        "name": "2. Một số công thức đạo hàm cấp hai thường gặp",
        "eq": "• \\((x^n)'' = n(n - 1)x^{n-2}\\); \\qquad • \\((e^{kx})'' = k^2 e^{kx}\\)<br>• \\((\\sin(\\omega x + \\varphi))'' = -\\omega^2 \\sin(\\omega x + \\varphi)\\)<br>• \\((\\cos(\\omega x + \\varphi))'' = -\\omega^2 \\cos(\\omega x + \\varphi)\\)",
        "note": "Với dao động điều hòa \\(x(t) = A\\cos(\\omega t + \\varphi)\\), ta chứng minh được ngay \\(a(t) = x''(t) = -\\omega^2 x(t)\\) (liên hệ trực tiếp với Vật lí 11 Bài 3!)."
      },
      {
        "name": "3. Chuỗi đạo hàm cơ học: Quãng đường → Vận tốc → Gia tốc",
        "eq": "\\(s(t) \\xrightarrow{\\text{đạo hàm lần 1}} v(t) = s'(t) \\xrightarrow{\\text{đạo hàm lần 2}} a(t) = v'(t) = s''(t)\\)",
        "note": "Theo định luật II Newton, lực hợp lực tác dụng lên vật có khối lượng \\(m\\) là \\(F(t) = m \\cdot a(t) = m \\cdot s''(t)\\)."
      }
    ],
    "methods": [
      "Quy trình tính \\(y''\\) và chứng minh hệ thức đạo hàm (ví dụ chứng minh \\(y'' + 4y = 0\\)): (1) Tính \\(y'\\) và rút gọn tối đa biểu thức \\(y'\\) trước khi đạo hàm lần thứ hai; (2) Tính \\(y'' = (y')'\\); (3) Thay \\(y, y', y''\\) vào vế trái của đẳng thức để rút gọn về vế phải.",
      "Trong bài toán chuyển động \\(s(t)\\): Nếu đề hỏi 'gia tốc của vật tại thời điểm vận tốc bằng 0', ta giải phương trình \\(v(t) = s'(t) = 0\\) để tìm thời điểm \\(t_0\\), sau đó thay \\(t_0\\) vào \\(a(t_0) = s''(t_0)\\).",
      "Lỗi dễ mắc: Thay số \\(x_0\\) vào \\(f'(x_0)\\) ra một hằng số rồi lấy đạo hàm của hằng số đó bằng \\(0\\) (sai hoàn toàn vì phải đạo hàm theo biến \\(x\\) ra \\(f''(x)\\) trước rồi mới thay \\(x_0\\)!)."
    ],
    "applications": [
      "Chứng minh phương trình động lực học của dao động điều hòa \\(x'' + \\omega^2 x = 0\\) trong Vật lí 11.",
      "Tính gia tốc hãm phanh của xe ô tô, tàu cao tốc và đánh giá độ lồi/lõm, điểm uốn của đường cong thiết kế cầu đường."
    ],
    "diagramCaption": "Mối liên hệ chuỗi đạo hàm s(t) → v(t) = s'(t) → a(t) = s''(t) trong chuyển động cơ học và dao động điều hòa."
  }
];
const formulaSummaryTable = [
  {
    "topic": "1. Hệ thức lượng giác cơ bản (Bài 1)",
    "formula": "\\(\\sin^2\\alpha+\\cos^2\\alpha=1; \\quad 1+\\tan^2\\alpha=\\frac{1}{\\cos^2\\alpha}; \\quad 1+\\cot^2\\alpha=\\frac{1}{\\sin^2\\alpha}; \\quad \\tan\\alpha\\cot\\alpha=1\\)"
  },
  {
    "topic": "2. Công thức cộng & Nhân đôi (Bài 2)",
    "formula": "\\(\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b; \\quad \\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b; \\quad \\sin 2a=2\\sin a\\cos a; \\quad \\cos 2a=2\\cos^2a-1=1-2\\sin^2a\\)"
  },
  {
    "topic": "3. Hạ bậc & Tổng thành tích (Bài 2)",
    "formula": "\\(\\sin^2a=\\frac{1-\\cos 2a}{2}; \\quad \\cos^2a=\\frac{1+\\cos 2a}{2}; \\quad \\cos a+\\cos b=2\\cos\\frac{a+b}{2}\\cos\\frac{a-b}{2}; \\quad \\sin a+\\sin b=2\\sin\\frac{a+b}{2}\\cos\\frac{a-b}{2}\\)"
  },
  {
    "topic": "4. Phương trình lượng giác cơ bản (Bài 4)",
    "formula": "\\(\\sin u=\\sin v \\iff u=v+k2\\pi \\text{ hoặc } u=\\pi-v+k2\\pi; \\quad \\cos u=\\cos v \\iff u=\\pm v+k2\\pi; \\quad \\tan u=\\tan v \\iff u=v+k\\pi\\)"
  },
  {
    "topic": "5. Cấp số cộng (CSC - Bài 6)",
    "formula": "\\(u_{n+1}=u_n+d; \\quad u_n=u_1+(n-1)d; \\quad u_k=\\frac{u_{k-1}+u_{k+1}}{2}; \\quad S_n=\\frac{n(u_1+u_n)}{2}=\\frac{n[2u_1+(n-1)d]}{2}\\)"
  },
  {
    "topic": "6. Cấp số nhân (CSN - Bài 7)",
    "formula": "\\(u_{n+1}=u_n\\cdot q; \\quad u_n=u_1\\cdot q^{n-1}; \\quad u_k^2=u_{k-1}u_{k+1}; \\quad S_n=\\frac{u_1(1-q^n)}{1-q}\\;(q\\ne 1); \\quad S_{\\infty}=\\frac{u_1}{1-q}\\;(|q|<1)\\)"
  },
  {
    "topic": "7. Số đặc trưng mẫu ghép nhóm (Bài 8–9)",
    "formula": "\\(c_i=\\frac{a_i+a_{i+1}}{2}; \\quad \\bar{x}=\\frac{1}{n}\\sum n_ic_i; \\quad M_e=L+\\frac{\\frac{n}{2}-F}{f}h; \\quad M_o=L+\\frac{d_1}{d_1+d_2}h\\)"
  },
  {
    "topic": "8. Quan hệ song song không gian (Bài 10–14)",
    "formula": "\\(d\\not\\subset(P),\\; d\\parallel a\\subset(P) \\Rightarrow d\\parallel(P); \\quad a\\cap b=I\\subset(P),\\; a,b\\parallel(Q)\\Rightarrow (P)\\parallel(Q); \\quad \\text{Thales: } \\frac{AB}{A'B'}=\\frac{BC}{B'C'}\\)"
  },
  {
    "topic": "9. Giới hạn & Hàm số liên tục (Bài 15–17)",
    "formula": "\\(\\lim\\frac{1}{n^k}=0; \\quad \\lim_{|q|<1}q^n=0; \\quad \\lim_{x\\to 0}\\frac{\\sin x}{x}=1; \\quad \\text{Liên tục tại } x_0 \\iff \\lim_{x\\to x_0^-}f(x)=\\lim_{x\\to x_0^+}f(x)=f(x_0)\\)"
  },
  {
    "topic": "10. Lũy thừa & Lôgarit (Bài 18–19)",
    "formula": "\\(a^{\\frac{m}{n}}=\\sqrt[n]{a^m}; \\quad \\log_a(MN)=\\log_aM+\\log_aN; \\quad \\log_a\\frac{M}{N}=\\log_aM-\\log_aN; \\quad \\log_a(M^\\alpha)=\\alpha\\log_aM; \\quad \\log_ab=\\frac{\\ln b}{\\ln a}\\)"
  },
  {
    "topic": "11. PT & BPT Mũ – Lôgarit (Bài 20–21)",
    "formula": "\\(a>1\\): giữ nguyên chiều BPT; \\(0<a<1\\): ĐẢO CHIỀU BPT; \\quad \\(\\log_af(x)>\\log_ag(x)\\;(0<a<1) \\iff 0<f(x)<g(x)\\)"
  },
  {
    "topic": "12. Quan hệ vuông góc & Góc (Bài 22–25)",
    "formula": "\\(d\\perp a,\\; d\\perp b\\;(a\\cap b\\subset(P)) \\Rightarrow d\\perp(P); \\quad (AB,(P))=\\widehat{ABH}; \\quad ((P),(Q))=(a,b)\\; (a,b\\perp \\text{giao tuyến})\\)"
  },
  {
    "topic": "13. Khoảng cách & Thể tích (Bài 26–27)",
    "formula": "\\(\\frac{1}{AH^2}=\\frac{1}{SA^2}+\\frac{1}{AE^2}; \\quad V_{\\text{lăng trụ}}=Bh; \\quad V_{\\text{chóp}}=\\frac{1}{3}Bh; \\quad V_{\\text{chóp cụt}}=\\frac{h}{3}(B_1+B_2+\\sqrt{B_1B_2})\\)"
  },
  {
    "topic": "14. Quy tắc Cộng & Nhân xác suất (Bài 28–30)",
    "formula": "\\(P(A\\cup B)=P(A)+P(B)-P(A\\cap B); \\quad A,B \\text{ xung khắc } \\Rightarrow P(AB)=0; \\quad A,B \\text{ độc lập } \\iff P(AB)=P(A)P(B)\\)"
  },
  {
    "topic": "15. Đạo hàm, Tiếp tuyến & Cấp hai (Bài 31–33)",
    "formula": "\\(y=f'(x_0)(x-x_0)+f(x_0); \\quad (uv)'=u'v+uv'; \\quad \\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}; \\quad [f(u)]'=f'(u)u'; \\quad v(t)=s'(t),\\; a(t)=s''(t)\\)"
  }
];
const commonPitfalls = [
  {
    "icon": "fa-triangle-exclamation",
    "title": "1. Bỏ sót điều kiện xác định & Đảo chiều bất phương trình Mũ – Lôgarit",
    "desc": "Khi giải phương trình/bất phương trình lôgarit, bắt buộc đặt điều kiện cho mọi đối số dương (> 0) trước khi gộp log. Với cơ số 0 < a < 1, khi bỏ mũ hoặc bỏ log bắt buộc phải đảo chiều bất đẳng thức và chặn dưới (> 0)."
  },
  {
    "icon": "fa-cube",
    "title": "2. Ngộ nhận trực quan trong Hình học không gian & Nhầm chiều cao h",
    "desc": "Không được suy ra song song hay vuông góc chỉ từ dáng hình vẽ phẳng. Khi tính thể tích V = (1/3)Bh hoặc V = Bh, chiều cao h phải là khoảng cách vuông góc từ đỉnh xuống mặt phẳng đáy, tuyệt đối không lấy cạnh bên xiên làm chiều cao."
  },
  {
    "icon": "fa-dice",
    "title": "3. Nhầm lẫn giữa Biến cố Xung khắc và Biến cố Độc lập",
    "desc": "Xung khắc nghĩa là không cùng xảy ra (P(AB) = 0, dùng công thức cộng P(A∪B) = P(A) + P(B)); Độc lập nghĩa là không ảnh hưởng xác suất của nhau (P(AB) = P(A)P(B)). Lấy không hoàn lại tạo ra các biến cố phụ thuộc, không được nhân trực tiếp xác suất không điều kiện."
  },
  {
    "icon": "fa-chart-line",
    "title": "4. Quên nhân u'(x) ở Đạo hàm hàm hợp & Đưa x ra khỏi căn khi x → -∞",
    "desc": "Khi tính đạo hàm hàm hợp f(u(x)) luôn phải nhân thêm u'(x), và chú ý dấu âm của (cos u)' = -u'sin u, (cot u)' = -u'/sin²u. Khi tính giới hạn tại x → -∞, nhớ rằng √(x²) = |x| = -x."
  }
];

module.exports = { generalConventions, chapters, experientialModules, lessons, formulaSummaryTable, commonPitfalls };
