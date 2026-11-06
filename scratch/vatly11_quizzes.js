// 78 câu hỏi trắc nghiệm Vật lí 11 - Kết nối tri thức với cuộc sống (3 câu/bài x 26 bài)
const quizzes = {
  1: [
    {
      q: "Phương trình li độ của một vật dao động điều hòa có dạng \\(x = A\\cos(\\omega t + \\varphi)\\). Đại lượng \\((\\omega t + \\varphi)\\) được gọi là gì?",
      options: [
        "Biên độ dao động (luôn dương)",
        "Pha của dao động tại thời điểm t (đơn vị rad)",
        "Pha ban đầu tại thời điểm t = 0",
        "Tần số góc của dao động"
      ],
      ans: 1,
      exp: "Trong phương trình \\(x = A\\cos(\\omega t + \\varphi)\\), \\(A\\) là biên độ, \\(\\varphi\\) là pha ban đầu, còn \\((\\omega t + \\varphi)\\) là pha của dao động tại thời điểm \\(t\\), cho phép xác định trạng thái (vị trí và chiều chuyển động) của vật."
    },
    {
      q: "Một chất điểm dao động điều hòa với phương trình \\(x = 6\\cos(4\\pi t - \\frac{\\pi}{3})\\) (cm). Biên độ và pha ban đầu của dao động lần lượt là:",
      options: [
        "A = 6 cm; \\(\\varphi = 4\\pi\\) rad",
        "A = 6 cm; \\(\\varphi = -\\frac{\\pi}{3}\\) rad",
        "A = -6 cm; \\(\\varphi = \\frac{\\pi}{3}\\) rad",
        "A = 12 cm; \\(\\varphi = -\\frac{\\pi}{3}\\) rad"
      ],
      ans: 1,
      exp: "Đối chiếu với phương trình chuẩn \\(x = A\\cos(\\omega t + \\varphi)\\), ta có biên độ \\(A = 6\\text{ cm}\\) (chiều dài quỹ đạo \\(L = 2A = 12\\text{ cm}\\)) và pha ban đầu \\(\\varphi = -\\frac{\\pi}{3}\\text{ rad}\\)."
    },
    {
      q: "Đồ thị biểu diễn sự phụ thuộc của li độ \\(x\\) theo thời gian \\(t\\) trong dao động điều hòa có dạng là đường gì?",
      options: [
        "Đường thẳng đi qua gốc tọa độ",
        "Đường hình sin",
        "Đường elip",
        "Đường parabol"
      ],
      ans: 1,
      exp: "Do li độ biến thiên theo hàm cosin (hoặc sin) của thời gian \\(x = A\\cos(\\omega t + \\varphi)\\), nên đồ thị \\(x(t)\\) là một đường hình sin."
    }
  ],
  2: [
    {
      q: "Mối liên hệ đúng giữa tần số góc \\(\\omega\\), chu kì \\(T\\) và tần số \\(f\\) của một dao động điều hòa là:",
      options: [
        "\\(\\omega = \\frac{2\\pi}{f} = 2\\pi T\\)",
        "\\(\\omega = \\frac{2\\pi}{T} = 2\\pi f\\)",
        "\\(T = 2\\pi\\omega = \\frac{1}{f}\\)",
        "\\(f = \\frac{2\\pi}{T} = \\frac{\\omega}{2\\pi}\\)"
      ],
      ans: 1,
      exp: "Chu kì \\(T = \\frac{1}{f}\\) (s), tần số \\(f = \\frac{1}{T}\\) (Hz), và tần số góc \\(\\omega = \\frac{2\\pi}{T} = 2\\pi f\\) (rad/s)."
    },
    {
      q: "Trong một chu kì dao động điều hòa \\(T\\), quãng đường mà vật đi được luôn bằng:",
      options: [
        "1A",
        "2A",
        "3A",
        "4A"
      ],
      ans: 3,
      exp: "Trong 1 chu kì \\(T\\), vật thực hiện trọn vẹn 1 dao động toàn phần nên luôn đi được quãng đường \\(S = 4A\\) (nửa chu kì \\(T/2\\) luôn đi được \\(2A\\))."
    },
    {
      q: "Hai dao động điều hòa cùng tần số có pha ban đầu lần lượt là \\(\\varphi_1 = \\frac{\\pi}{6}\\text{ rad}\\) và \\(\\varphi_2 = -\\frac{5\\pi}{6}\\text{ rad}\\). Hai dao động này:",
      options: [
        "Cùng pha nhau",
        "Ngược pha nhau",
        "Vuông pha nhau",
        "Lệch pha nhau góc \\(\\frac{\\pi}{3}\\)"
      ],
      ans: 1,
      exp: "Độ lệch pha \\(\\Delta\\varphi = \\varphi_1 - \\varphi_2 = \\frac{\\pi}{6} - (-\\frac{5\\pi}{6}) = \\pi\\text{ rad} = (2k+1)\\pi\\) (với \\(k=0\\)), nên hai dao động ngược pha nhau."
    }
  ],
  3: [
    {
      q: "Trong dao động điều hòa, hệ thức độc lập thời gian liên hệ giữa li độ \\(x\\), vận tốc \\(v\\), biên độ \\(A\\) và tần số góc \\(\\omega\\) là:",
      options: [
        "\\(A^2 = x^2 + \\omega^2 v^2\\)",
        "\\(\\frac{x^2}{A^2} + \\frac{v^2}{\\omega^2 A^2} = 1\\)",
        "\\(v^2 = \\omega(A^2 - x^2)\\)",
        "\\(x^2 = A^2 + \\frac{v^2}{\\omega^2}\\)"
      ],
      ans: 1,
      exp: "Vì \\(x = A\\cos(\\omega t + \\varphi)\\) và \\(v = -\\omega A\\sin(\\omega t + \\varphi)\\) vuông pha nhau nên \\(\\left(\\frac{x}{A}\\right)^2 + \\left(\\frac{v}{v_{\\max}}\\right)^2 = 1 \\Leftrightarrow A^2 = x^2 + \\frac{v^2}{\\omega^2}\\)."
    },
    {
      q: "Trong dao động điều hòa, vectơ gia tốc \\(\\vec{a}\\) của vật có đặc điểm nào sau đây?",
      options: [
        "Luôn cùng hướng với vectơ vận tốc và có độ lớn tỉ lệ với tốc độ",
        "Luôn hướng về vị trí cân bằng và có độ lớn tỉ lệ với độ lớn của li độ (\\(a = -\\omega^2 x\\))",
        "Luôn hướng ra biên và có độ lớn cực đại ở vị trí cân bằng",
        "Có độ lớn không đổi trong suốt quá trình dao động"
      ],
      ans: 1,
      exp: "Từ công thức \\(a = -\\omega^2 x\\), dấu trừ chứng tỏ vectơ gia tốc \\(\\vec{a}\\) luôn ngược dấu với li độ \\(x\\), nghĩa là luôn hướng về vị trí cân bằng (VTCB), có độ lớn cực đại \\(\\omega^2 A\\) ở biên và bằng 0 ở VTCB."
    },
    {
      q: "Trong dao động điều hòa, vận tốc \\(v\\) biến thiên như thế nào so với li độ \\(x\\) và gia tốc \\(a\\)?",
      options: [
        "Cùng pha với li độ \\(x\\), ngược pha với gia tốc \\(a\\)",
        "Sớm pha \\(\\frac{\\pi}{2}\\) so với li độ \\(x\\) và trễ pha \\(\\frac{\\pi}{2}\\) so với gia tốc \\(a\\)",
        "Trễ pha \\(\\frac{\\pi}{2}\\) so với li độ \\(x\\) và sớm pha \\(\\frac{\\pi}{2}\\) so với gia tốc \\(a\\)",
        "Ngược pha với cả li độ \\(x\\) và gia tốc \\(a\\)"
      ],
      ans: 1,
      exp: "Ta có \\(v = \\omega A\\cos(\\omega t + \\varphi + \\frac{\\pi}{2})\\) và \\(a = \\omega^2 A\\cos(\\omega t + \\varphi + \\pi)\\). Vậy \\(v\\) sớm pha \\(\\frac{\\pi}{2}\\) so với \\(x\\), còn \\(a\\) sớm pha \\(\\frac{\\pi}{2}\\) so với \\(v\\) (và ngược pha với \\(x\\))."
    }
  ],
  4: [
    {
      q: "Một vật dao động điều hòa dọc theo trục Ox với biên độ \\(A = 10\\text{ cm}\\), chu kì \\(T = 2\\text{ s}\\). Tại thời điểm \\(t = 0\\), vật đi qua vị trí \\(x = 5\\text{ cm}\\) theo chiều âm. Phương trình dao động của vật là:",
      options: [
        "\\(x = 10\\cos(\\pi t + \\frac{\\pi}{3})\\text{ (cm)}\\)",
        "\\(x = 10\\cos(\\pi t - \\frac{\\pi}{3})\\text{ (cm)}\\)",
        "\\(x = 10\\cos(2\\pi t + \\frac{\\pi}{6})\\text{ (cm)}\\)",
        "\\(x = 10\\cos(\\pi t + \\frac{2\\pi}{3})\\text{ (cm)}\\)"
      ],
      ans: 0,
      exp: "Ta có \\(\\omega = \\frac{2\\pi}{T} = \\pi\\text{ rad/s}\\). Tại \\(t = 0\\): \\(x_0 = A\\cos\\varphi = 5 \\Rightarrow \\cos\\varphi = \\frac{1}{2} \\Rightarrow \\varphi = \\pm\\frac{\\pi}{3}\\). Vì vật chuyển động theo chiều âm (\\(v_0 = -\\omega A\\sin\\varphi < 0\\)) nên \\(\\sin\\varphi > 0 \\Rightarrow \\varphi = +\\frac{\\pi}{3}\\text{ rad}\\)."
    },
    {
      q: "Một chất điểm dao động điều hòa với chu kì \\(T\\) và biên độ \\(A\\). Khoảng thời gian ngắn nhất để vật đi từ vị trí cân bằng \\(x = 0\\) đến vị trí có li độ \\(x = \\frac{A\\sqrt{2}}{2}\\) là:",
      options: [
        "\\(T/12\\)",
        "\\(T/8\\)",
        "\\(T/6\\)",
        "\\(T/4\\)"
      ],
      ans: 1,
      exp: "Dùng đường tròn pha: từ VTCB (\\(x=0\\)) đến \\(x = A\\sqrt{2}/2\\) tương ứng với góc quét \\(\\Delta\\alpha = \\frac{\\pi}{4}\\text{ rad}\\). Do đó thời gian ngắn nhất là \\(\\Delta t = \\frac{\\Delta\\alpha}{2\\pi}T = \\frac{T}{8}\\)."
    },
    {
      q: "Một vật dao động điều hòa có tốc độ cực đại \\(v_{\\max} = 20\\pi\\text{ cm/s}\\) và gia tốc cực đại \\(a_{\\max} = 0,4\\pi^2\\text{ m/s}^2\\). Chu kì và biên độ dao động của vật là:",
      options: [
        "\\(T = 1\\text{ s}; A = 10\\text{ cm}\\)",
        "\\(T = 2\\text{ s}; A = 10\\text{ cm}\\)",
        "\\(T = 1\\text{ s}; A = 20\\text{ cm}\\)",
        "\\(T = 0,5\\text{ s}; A = 5\\text{ cm}\\)"
      ],
      ans: 0,
      exp: "Đổi \\(a_{\\max} = 0,4\\pi^2\\text{ m/s}^2 = 40\\pi^2\\text{ cm/s}^2\\). Ta có \\(\\omega = \\frac{a_{\\max}}{v_{\\max}} = \\frac{40\\pi^2}{20\\pi} = 2\\pi\\text{ rad/s} \\Rightarrow T = \\frac{2\\pi}{\\omega} = 1\\text{ s}\\) và biên độ \\(A = \\frac{v_{\\max}}{\\omega} = \\frac{20\\pi}{2\\pi} = 10\\text{ cm}\\)."
    }
  ],
  5: [
    {
      q: "Một con lắc lò xo gồm vật nhỏ khối lượng \\(m\\) và lò xo nhẹ có độ cứng \\(k\\) dao động điều hòa với biên độ \\(A\\). Cơ năng của con lắc được tính bằng công thức nào?",
      options: [
        "\\(W = \\frac{1}{2}kA^2 = \\frac{1}{2}m\\omega^2 A^2\\)",
        "\\(W = kA^2 = m\\omega^2 A^2\\)",
        "\\(W = \\frac{1}{2}kx^2\\)",
        "\\(W = \\frac{1}{2}m\\omega A^2\\)"
      ],
      ans: 0,
      exp: "Cơ năng \\(W = W_đ + W_t = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2 = \\frac{1}{2}kA^2 = \\frac{1}{2}m\\omega^2 A^2 = \\text{hằng số}\\) (khi bỏ qua ma sát)."
    },
    {
      q: "Nếu li độ của một vật dao động điều hòa biến thiên với chu kì \\(T\\) và tần số \\(f\\), thì động năng \\(W_đ\\) và thế năng \\(W_t\\) của nó biến thiên tuần hoàn với:",
      options: [
        "Chu kì \\(T' = T\\), tần số \\(f' = f\\)",
        "Chu kì \\(T' = \\frac{T}{2}\\), tần số \\(f' = 2f\\)",
        "Chu kì \\(T' = 2T\\), tần số \\(f' = \\frac{f}{2}\\)",
        "Chu kì \\(T' = \\frac{T}{4}\\), tần số \\(f' = 4f\\)"
      ],
      ans: 1,
      exp: "Vì \\(W_t = \\frac{1}{2}kA^2\\cos^2(\\omega t + \\varphi) = \\frac{1}{4}kA^2[1 + \\cos(2\\omega t + 2\\varphi)]\\), nên động năng và thế năng biến thiên tuần hoàn với tần số góc \\(\\omega' = 2\\omega\\), tần số \\(f' = 2f\\) và chu kì \\(T' = T/2\\)."
    },
    {
      q: "Tại vị trí mà động năng của vật dao động điều hòa bằng 3 lần thế năng (\\(W_đ = 3W_t\\)), vật có li độ \\(x\\) bằng:",
      options: [
        "\\(x = \\pm \\frac{A}{2}\\)",
        "\\(x = \\pm \\frac{A\\sqrt{2}}{2}\\)",
        "\\(x = \\pm \\frac{A\\sqrt{3}}{2}\\)",
        "\\(x = \\pm \\frac{A}{4}\\)"
      ],
      ans: 0,
      exp: "Khi \\(W_đ = nW_t\\), ta có \\(W = W_đ + W_t = (n+1)W_t \\Rightarrow A^2 = (n+1)x^2 \\Rightarrow x = \\pm\\frac{A}{\\sqrt{n+1}}\\). Thay \\(n = 3\\) được \\(x = \\pm\\frac{A}{2}\\)."
    }
  ],
  6: [
    {
      q: "Dao động tắt dần là dao động có đặc điểm nào sau đây?",
      options: [
        "Có tần số giảm dần theo thời gian do lực cản của môi trường",
        "Có biên độ và cơ năng giảm dần theo thời gian do ma sát hoặc lực cản của môi trường",
        "Có biên độ luôn không đổi nhưng pha ban đầu giảm dần",
        "Chỉ xảy ra khi có ngoại lực tuần hoàn tác dụng"
      ],
      ans: 1,
      exp: "Do lực ma sát và lực cản của môi trường sinh công âm làm tiêu hao cơ năng thành nhiệt năng, nên biên độ và cơ năng của dao động giảm dần theo thời gian."
    },
    {
      q: "Khi một hệ thực hiện dao động cưỡng bức ở giai đoạn ổn định dưới tác dụng của ngoại lực tuần hoàn \\(F = F_0\\cos(2\\pi f t)\\), phát biểu nào sau đây là ĐÚNG?",
      options: [
        "Tần số dao động cưỡng bức luôn bằng tần số riêng \\(f_0\\) của hệ",
        "Tần số dao động cưỡng bức bằng tần số \\(f\\) của ngoại lực cưỡng bức",
        "Biên độ dao động cưỡng bức chỉ phụ thuộc vào pha ban đầu",
        "Biên độ dao động cưỡng bức không phụ thuộc vào lực cản môi trường"
      ],
      ans: 1,
      exp: "Dao động cưỡng bức có biên độ không đổi và có tần số bằng tần số \\(f\\) của ngoại lực cưỡng bức. Biên độ phụ thuộc vào \\(F_0\\), độ chênh lệch \\(|f - f_0|\\) và lực cản môi trường."
    },
    {
      q: "Hiện tượng cộng hưởng cơ xảy ra rõ nét nhất khi nào?",
      options: [
        "Tần số ngoại lực cưỡng bức \\(f\\) rất lớn so với tần số riêng \\(f_0\\) của hệ",
        "Tần số ngoại lực cưỡng bức \\(f\\) bằng tần số riêng \\(f_0\\) của hệ (\\(f = f_0\\)) và lực cản môi trường nhỏ",
        "Biên độ ngoại lực \\(F_0\\) bằng không",
        "Lực ma sát của môi trường rất lớn"
      ],
      ans: 1,
      exp: "Khi \\(f = f_0\\), biên độ dao động cưỡng bức tăng đột ngột đạt giá trị cực đại \\(A_{\\max}\\). Lực cản môi trường càng nhỏ thì đỉnh cộng hưởng càng nhọn và cao."
    }
  ],
  7: [
    {
      q: "Một con lắc đơn có chiều dài \\(l = 1\\text{ m}\\), vật nặng khối lượng \\(m = 200\\text{ g}\\) dao động điều hòa tại nơi có \\(g = 10\\text{ m/s}^2\\) với biên độ góc \\(\\alpha_0 = 0,1\\text{ rad}\\). Cơ năng của con lắc là:",
      options: [
        "0,01 J",
        "0,1 J",
        "0,02 J",
        "1 J"
      ],
      ans: 0,
      exp: "Với \\(\\alpha_0 \\le 10^\\circ\\) (đổi ra rad), cơ năng con lắc đơn là \\(W = \\frac{1}{2}mgl\\alpha_0^2 = \\frac{1}{2} \\cdot 0,2 \\cdot 10 \\cdot 1 \\cdot (0,1)^2 = 0,01\\text{ J}\\)."
    },
    {
      q: "Một vật khối lượng \\(m = 100\\text{ g}\\) dao động điều hòa có đồ thị động năng theo thời gian cho biết động năng cực đại là \\(80\\text{ mJ}\\) và khoảng thời gian giữa hai lần liên tiếp động năng bằng không là \\(0,25\\text{ s}\\). Chu kì dao động \\(T\\) và tốc độ cực đại \\(v_{\\max}\\) của vật là:",
      options: [
        "\\(T = 0,5\\text{ s}; v_{\\max} = \\frac{4}{\\sqrt{10}}\\text{ m/s}\\)",
        "\\(T = 0,25\\text{ s}; v_{\\max} = 0,8\\text{ m/s}\\)",
        "\\(T = 0,5\\text{ s}; v_{\\max} = 1,6\\text{ m/s}\\)",
        "\\(T = 1,0\\text{ s}; v_{\\max} = 0,4\\text{ m/s}\\)"
      ],
      ans: 0,
      exp: "Hai lần liên tiếp \\(W_đ = 0\\) (vật ở hai biên) cách nhau \\(\\frac{T}{2} = 0,25\\text{ s} \\Rightarrow T = 0,5\\text{ s}\\). Từ \\(W = W_{đ\\max} = \\frac{1}{2}mv_{\\max}^2 = 0,08\\text{ J} \\Rightarrow v_{\\max} = \\sqrt{\\frac{2 \\cdot 0,08}{0,1}} = \\sqrt{1,6} = \\frac{4}{\\sqrt{10}}\\text{ m/s} \\approx 1,265\\text{ m/s}\\)."
    },
    {
      q: "Một con lắc lò xo dao động tắt dần chậm trên mặt phẳng ngang có hệ số ma sát \\(\\mu\\). Sau khi biên độ giảm từ \\(A_0\\) xuống \\(A_1\\), phần năng lượng đã chuyển hóa thành nhiệt năng bằng:",
      options: [
        "\\(\\Delta W = \\frac{1}{2}k(A_0 - A_1)^2\\)",
        "\\(\\Delta W = \\frac{1}{2}k(A_0^2 - A_1^2)\\)",
        "\\(\\Delta W = k(A_0^2 - A_1^2)\\)",
        "\\(\\Delta W = \\frac{1}{2}kA_1^2\\)"
      ],
      ans: 1,
      exp: "Theo định luật bảo toàn năng lượng, phần cơ năng tiêu hao chuyển thành nhiệt do công của lực ma sát bằng độ giảm cơ năng: \\(\\Delta W = W_0 - W_1 = \\frac{1}{2}kA_0^2 - \\frac{1}{2}kA_1^2 = \\frac{1}{2}k(A_0^2 - A_1^2)\\)."
    }
  ],
  8: [
    {
      q: "Khi sóng cơ truyền đi trong một môi trường đàn hồi, đại lượng nào sau đây được truyền đi theo chiều truyền sóng?",
      options: [
        "Các phần tử vật chất của môi trường truyền đi xa nguồn",
        "Pha dao động và năng lượng sóng (các phần tử môi trường chỉ dao động quanh vị trí cân bằng)",
        "Khối lượng của nguồn sóng",
        "Chỉ có các phần tử ở đỉnh sóng di chuyển theo sóng"
      ],
      ans: 1,
      exp: "Bản chất của quá trình truyền sóng cơ là truyền pha dao động và năng lượng sóng, còn bản thân các phần tử vật chất của môi trường chỉ dao động tại chỗ quanh vị trí cân bằng của chúng."
    },
    {
      q: "Bước sóng \\(\\lambda\\) được định nghĩa đầy đủ và chính xác là:",
      options: [
        "Quãng đường sóng truyền đi được trong 1 giây",
        "Quãng đường sóng truyền đi được trong một chu kì \\(T\\) (hoặc khoảng cách gần nhất giữa hai điểm trên cùng phương truyền sóng dao động cùng pha)",
        "Khoảng cách giữa hai điểm gần nhất trên cùng phương truyền sóng dao động ngược pha",
        "Tích của tốc độ truyền sóng và tần số sóng (\\(\\lambda = v \\cdot f\\))"
      ],
      ans: 1,
      exp: "Bước sóng \\(\\lambda = vT = \\frac{v}{f}\\) là quãng đường sóng truyền được trong một chu kì \\(T\\), cũng là khoảng cách ngắn nhất giữa hai điểm trên cùng phương truyền sóng dao động cùng pha."
    },
    {
      q: "Hai điểm M và N nằm trên cùng một phương truyền sóng cách nhau một khoảng \\(d\\). Độ lệch pha \\(\\Delta\\varphi\\) giữa hai dao động tại M và N ở cùng một thời điểm là:",
      options: [
        "\\(\\Delta\\varphi = \\frac{2\\pi \\lambda}{d}\\)",
        "\\(\\Delta\\varphi = \\frac{2\\pi d}{\\lambda}\\)",
        "\\(\\Delta\\varphi = \\frac{\\pi d}{\\lambda}\\)",
        "\\(\\Delta\\varphi = \\frac{d}{2\\pi\\lambda}\\)"
      ],
      ans: 1,
      exp: "Từ phương trình sóng \\(u_M = A\\cos(\\omega t - \\frac{2\\pi x}{\\lambda})\\), độ lệch pha giữa hai điểm cách nhau khoảng \\(d\\) trên cùng phương truyền sóng là \\(\\Delta\\varphi = \\frac{2\\pi d}{\\lambda}\\)."
    }
  ],
  9: [
    {
      q: "Phát biểu nào sau đây phân biệt ĐÚNG sóng ngang và sóng dọc?",
      options: [
        "Sóng ngang có phương dao động của các phần tử trùng với phương truyền sóng; sóng dọc có phương dao động vuông góc với phương truyền sóng",
        "Sóng ngang có phương dao động của các phần tử vuông góc với phương truyền sóng; sóng dọc có phương dao động trùng với phương truyền sóng",
        "Sóng ngang truyền được trong chất khí; sóng dọc chỉ truyền được trên mặt nước",
        "Sóng ngang là sóng âm; sóng dọc là sóng ánh sáng"
      ],
      ans: 1,
      exp: "Sóng ngang có phương dao động vuông góc với phương truyền sóng (truyền trên mặt nước và trong chất rắn); sóng dọc có phương dao động trùng với phương truyền sóng (truyền được trong cả rắn, lỏng, khí)."
    },
    {
      q: "Đối với một môi trường đồng tính, tốc độ truyền sóng cơ (và sóng âm) thường sắp xếp theo thứ tự nào?",
      options: [
        "\\(v_{\\text{khí}} > v_{\\text{lỏng}} > v_{\\text{rắn}}\\)",
        "\\(v_{\\text{rắn}} > v_{\\text{lỏng}} > v_{\\text{khí}}\\)",
        "\\(v_{\\text{lỏng}} > v_{\\text{rắn}} > v_{\\text{khí}}\\)",
        "Bằng nhau trong cả ba môi trường rắn, lỏng, khí"
      ],
      ans: 1,
      exp: "Do mật độ hạt và lực liên kết đàn hồi trong chất rắn lớn hơn chất lỏng và lớn hơn nhiều so với chất khí nên tốc độ truyền sóng cơ thỏa mãn \\(v_{\\text{rắn}} > v_{\\text{lỏng}} > v_{\\text{khí}}\\). Trong chân không, sóng cơ không truyền được."
    },
    {
      q: "Tai người bình thường có thể nghe được sóng âm có tần số nằm trong khoảng nào?",
      options: [
        "Từ 0 Hz đến 16 Hz (Hạ âm)",
        "Từ 16 Hz đến 20 000 Hz (Âm nghe được)",
        "Lớn hơn 20 000 Hz (Siêu âm)",
        "Mọi tần số bất kì nếu biên độ đủ lớn"
      ],
      ans: 1,
      exp: "Sóng âm nghe được đối với tai người nằm trong dải tần số \\(16\\text{ Hz} \\le f \\le 20\\,000\\text{ Hz}\\). Dưới \\(16\\text{ Hz}\\) là hạ âm, trên \\(20\\text{ kHz}\\) là siêu âm."
    }
  ],
  10: [
    {
      q: "Trong bài thực hành đo tần số của sóng âm (Bài 10), micro đóng vai trò gì trong hệ thống thí nghiệm?",
      options: [
        "Phát ra sóng âm có tần số chuẩn để kích thích âm thoa",
        "Biến đổi dao động cơ học của sóng âm thành tín hiệu điện có cùng tần số đưa vào dao động kí",
        "Đo trực tiếp tốc độ truyền âm trong không khí",
        "Tăng tần số của âm thoa lên gấp đôi để dễ quan sát"
      ],
      ans: 1,
      exp: "Micro nhận dao động áp suất không khí từ sóng âm của âm thoa và chuyển đổi thành tín hiệu điện biến thiên cùng chu kì \\(T\\) và tần số \\(f\\) để hiển thị trên màn hình dao động kí (oscilloscope)."
    },
    {
      q: "Trên màn hình dao động kí, biết mỗi ô ngang ứng với thời gian \\(\\Delta t_0 = 0,5\\text{ ms/div}\\). Nếu một chu kì đầy đủ của sóng âm chiếm 4 ô ngang thì tần số \\(f\\) của sóng âm đó là:",
      options: [
        "250 Hz",
        "500 Hz",
        "1000 Hz",
        "2000 Hz"
      ],
      ans: 1,
      exp: "Chu kì của sóng âm là \\(T = n \\cdot \\Delta t_0 = 4 \\cdot 0,5\\text{ ms} = 2\\text{ ms} = 2 \\times 10^{-3}\\text{ s}\\). Suy ra tần số \\(f = \\frac{1}{T} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ Hz}\\)."
    },
    {
      q: "Để giảm sai số ngẫu nhiên khi đọc chu kì \\(T\\) trên màn hình dao động kí, ta nên thao tác như thế nào?",
      options: [
        "Gõ âm thoa thật mạnh bằng búa sắt",
        "Đo tổng chiều dài của \\(N\\) chu kì liên tiếp (ví dụ \\(N = 4\\) hoặc \\(5\\) chu kì) rồi chia cho \\(N\\) để tính trung bình",
        "Chỉ đo 1/4 chu kì rồi nhân 4",
        "Đặt micro cách âm thoa càng xa càng tốt"
      ],
      ans: 1,
      exp: "Đo tổng số ô của nhiều chu kì liên tiếp \\(N\\) trên màn hình rồi lấy \\(T = \\frac{L_{\\text{tổng}} \\cdot \\Delta t_0}{N}\\) giúp giảm đáng kể sai số đọc vạch chia trên lưới ô vuông."
    }
  ],
  11: [
    {
      q: "Phát biểu nào sau đây là ĐÚNG khi nói về tính chất của sóng điện từ?",
      options: [
        "Sóng điện từ là sóng dọc và không truyền được trong chân không",
        "Sóng điện từ là sóng ngang, truyền được trong chân không với tốc độ \\(c \\approx 3 \\times 10^8\\text{ m/s}\\), có \\(\\vec{E} \\perp \\vec{B} \\perp \\vec{v}\\)",
        "Trong sóng điện từ, cường độ điện trường \\(\\vec{E}\\) và cảm ứng từ \\(\\vec{B}\\) biến thiên ngược pha nhau",
        "Tốc độ sóng điện từ trong môi trường vật chất luôn lớn hơn trong chân không"
      ],
      ans: 1,
      exp: "Sóng điện từ là sóng ngang (\\(\\vec{E} \\perp \\vec{B} \\perp \\vec{v}\\)), trong đó \\(\\vec{E}\\) và \\(\\vec{B}\\) tại một điểm luôn biến thiên cùng pha. Trong môi trường có chiết suất \\(n > 1\\), tốc độ giảm còn \\(v = c/n < c\\)."
    },
    {
      q: "Trong thang sóng điện từ, các bức xạ được sắp xếp theo thứ tự bước sóng \\(\\lambda\\) GIẢM DẦN (tần số tăng dần) là:",
      options: [
        "Sóng vô tuyến \\(\\to\\) Tia hồng ngoại \\(\\to\\) Ánh sáng nhìn thấy \\(\\to\\) Tia tử ngoại \\(\\to\\) Tia X \\(\\to\\) Tia gamma (\\(\\gamma\\))",
        "Tia gamma \\(\\to\\) Tia X \\(\\to\\) Tia tử ngoại \\(\\to\\) Ánh sáng nhìn thấy \\(\\to\\) Tia hồng ngoại \\(\\to\\) Sóng vô tuyến",
        "Sóng vô tuyến \\(\\to\\) Ánh sáng nhìn thấy \\(\\to\\) Tia hồng ngoại \\(\\to\\) Tia X \\(\\to\\) Tia tử ngoại",
        "Tia hồng ngoại \\(\\to\\) Sóng vô tuyến \\(\\to\\) Tia tử ngoại \\(\\to\\) Ánh sáng nhìn thấy"
      ],
      ans: 0,
      exp: "Theo thang sóng điện từ, sóng vô tuyến có bước sóng dài nhất (từ vài mm đến hàng km), tiếp đến là hồng ngoại, ánh sáng khả kiến (\\(0,38\\text{ }\\mu\\text{m} - 0,76\\text{ }\\mu\\text{m}\\)), tử ngoại, tia X và ngắn nhất là tia gamma (\\(\\gamma\\))."
    },
    {
      q: "Một đài phát thanh phát sóng vô tuyến ở tần số \\(f = 100\\text{ MHz}\\). Lấy tốc độ ánh sáng trong chân không \\(c = 3 \\times 10^8\\text{ m/s}\\). Bước sóng của sóng vô tuyến này là:",
      options: [
        "0,3 m",
        "3 m",
        "30 m",
        "300 m"
      ],
      ans: 1,
      exp: "Đổi \\(f = 100\\text{ MHz} = 100 \\times 10^6\\text{ Hz} = 10^8\\text{ Hz}\\). Bước sóng \\(\\lambda = \\frac{c}{f} = \\frac{3 \\times 10^8}{10^8} = 3\\text{ m}\\)."
    }
  ],
  12: [
    {
      q: "Điều kiện để hai sóng cơ gặp nhau tạo thành hệ vân giao thoa ổn định là hai nguồn phát sóng phải là hai nguồn kết hợp, tức là:",
      options: [
        "Dao động cùng biên độ và truyền ngược chiều nhau",
        "Dao động cùng phương, cùng tần số và có độ lệch pha không đổi theo thời gian",
        "Dao động cùng pha và có biên độ rất lớn",
        "Truyền trên cùng một sợi dây có một đầu cố định"
      ],
      ans: 1,
      exp: "Hai nguồn kết hợp là hai nguồn dao động cùng phương, cùng tần số (hoặc bước sóng) và có độ lệch pha không đổi theo thời gian."
    },
    {
      q: "Trong thí nghiệm giao thoa sóng trên mặt nước với hai nguồn kết hợp cùng pha \\(S_1, S_2\\), tại điểm M cách hai nguồn lần lượt là \\(d_1, d_2\\) sẽ có biên độ dao động CỰC ĐẠI khi hiệu đường truyền bằng:",
      options: [
        "\\(d_2 - d_1 = k\\lambda\\) (với \\(k = 0, \\pm 1, \\pm 2, \\dots\\))",
        "\\(d_2 - d_1 = (k + 0,5)\\lambda\\) (với \\(k = 0, \\pm 1, \\pm 2, \\dots\\))",
        "\\(d_2 - d_1 = (2k + 1)\\lambda\\)",
        "\\(d_2 + d_1 = k\\lambda\\)"
      ],
      ans: 0,
      exp: "Với hai nguồn cùng pha, cực đại giao thoa xảy ra tại các điểm có hiệu đường đi bằng một số nguyên lần bước sóng \\(d_2 - d_1 = k\\lambda\\), còn cực tiểu xảy ra khi \\(d_2 - d_1 = (k + 0,5)\\lambda\\)."
    },
    {
      q: "Trong thí nghiệm Y-âng về giao thoa ánh sáng đơn sắc có bước sóng \\(\\lambda\\), khoảng cách giữa hai khe là \\(a\\) và khoảng cách từ mặt phẳng chứa hai khe đến màn quan sát là \\(D\\). Công thức tính khoảng vân \\(i\\) là:",
      options: [
        "\\(i = \\frac{aD}{\\lambda}\\)",
        "\\(i = \\frac{\\lambda D}{a}\\)",
        "\\(i = \\frac{\\lambda a}{D}\\)",
        "\\(i = \\frac{D}{\\lambda a}\\)"
      ],
      ans: 1,
      exp: "Khoảng vân \\(i = \\frac{\\lambda D}{a}\\) là khoảng cách giữa hai vân sáng (hoặc hai vân tối) liên tiếp trên màn quan sát. Vị trí vân sáng bậc \\(k\\) là \\(x_s = ki\\)."
    }
  ],
  13: [
    {
      q: "Trên một sợi dây có sóng dừng ổn định với bước sóng \\(\\lambda\\), khoảng cách giữa hai nút sóng liên tiếp (hoặc hai bụng sóng liên tiếp) bằng:",
      options: [
        "\\(\\lambda\\)",
        "\\(\\frac{\\lambda}{2}\\)",
        "\\(\\frac{\\lambda}{4}\\)",
        "\\(2\\lambda\\)"
      ],
      ans: 1,
      exp: "Trong sóng dừng, khoảng cách giữa hai nút liên tiếp hoặc hai bụng liên tiếp bằng \\(\\frac{\\lambda}{2}\\), còn khoảng cách giữa một nút và một bụng kề nó bằng \\(\\frac{\\lambda}{4}\\)."
    },
    {
      q: "Điều kiện để có sóng dừng trên một sợi dây đàn hồi chiều dài \\(L\\) có HAI ĐẦU CỐ ĐỊNH là:",
      options: [
        "\\(L = k\\frac{\\lambda}{2}\\) (với \\(k = 1, 2, 3, \\dots\\))",
        "\\(L = (2k + 1)\\frac{\\lambda}{4}\\) (với \\(k = 0, 1, 2, \\dots\\))",
        "\\(L = k\\lambda\\) (với \\(k = 1, 2, 3, \\dots\\))",
        "\\(L = (k + 0,5)\\lambda\\)"
      ],
      ans: 0,
      exp: "Khi dây có hai đầu cố định (hai đầu là nút sóng), chiều dài dây phải bằng một số nguyên lần nửa bước sóng: \\(L = k\\frac{\\lambda}{2}\\), trong đó \\(k\\) là số bó sóng (số bụng sóng), số nút sóng là \\(k + 1\\)."
    },
    {
      q: "Một ống khí hình trụ có một đầu kín và một đầu hở (chiều dài cột khí là \\(L\\)). Điều kiện để xảy ra sóng dừng của sóng âm trong ống khí này là:",
      options: [
        "\\(L = k\\frac{\\lambda}{2}\\) (với \\(k = 1, 2, 3, \\dots\\))",
        "\\(L = (2k + 1)\\frac{\\lambda}{4}\\) (với \\(k = 0, 1, 2, \\dots\\))",
        "\\(L = k\\lambda\\)",
        "\\(L = (2k + 1)\\frac{\\lambda}{2}\\)"
      ],
      ans: 1,
      exp: "Đầu kín là nút dao động, đầu hở là bụng dao động nên điều kiện sóng dừng tương tự dây một đầu cố định – một đầu tự do: \\(L = (2k + 1)\\frac{\\lambda}{4}\\) (một số lẻ lần \\(\\lambda/4\\))."
    }
  ],
  14: [
    {
      q: "Trên mặt nước có hai nguồn sóng kết hợp \\(S_1, S_2\\) dao động cùng pha, cách nhau \\(S_1S_2 = 10\\text{ cm}\\), bước sóng \\(\\lambda = 2\\text{ cm}\\). Số đường cực đại giao thoa trên đoạn thẳng \\(S_1S_2\\) (không tính hai nguồn) là:",
      options: [
        "9 cực đại",
        "10 cực đại",
        "11 cực đại",
        "5 cực đại"
      ],
      ans: 0,
      exp: "Số cực đại trên đoạn nối hai nguồn thỏa mãn \\(-\\frac{S_1S_2}{\\lambda} < k < \\frac{S_1S_2}{\\lambda} \\Leftrightarrow -5 < k < 5\\). Vì không tính hai nguồn nên \\(k \\in \\{-4, -3, -2, -1, 0, 1, 2, 3, 4\\}\\), có tất cả 9 cực đại."
    },
    {
      q: "Trong thí nghiệm Y-âng về giao thoa ánh sáng, biết \\(a = 1\\text{ mm}\\), \\(D = 2\\text{ m}\\), ánh sáng đơn sắc có bước sóng \\(\\lambda = 0,5\\text{ }\\mu\\text{m}\\). Khoảng cách từ vân sáng trung tâm đến vân sáng bậc 4 là:",
      options: [
        "1 mm",
        "2 mm",
        "4 mm",
        "3,5 mm"
      ],
      ans: 2,
      exp: "Khoảng vân \\(i = \\frac{\\lambda D}{a} = \\frac{0,5 \\times 10^{-6} \\cdot 2}{10^{-3}} = 10^{-3}\\text{ m} = 1\\text{ mm}\\). Vị trí vân sáng bậc 4 là \\(x_{s4} = 4i = 4\\text{ mm}\\)."
    },
    {
      q: "Một sợi dây đàn hồi dài \\(L = 1,2\\text{ m}\\) hai đầu cố định, khi kích thích với tần số \\(f = 50\\text{ Hz}\\) thì trên dây xuất hiện sóng dừng với 4 bụng sóng. Tốc độ truyền sóng trên dây là:",
      options: [
        "15 m/s",
        "30 m/s",
        "60 m/s",
        "20 m/s"
      ],
      ans: 1,
      exp: "Dây hai đầu cố định có 4 bụng sóng (\\(k = 4\\)): \\(L = 4\\frac{\\lambda}{2} = 2\\lambda \\Rightarrow \\lambda = \\frac{1,2}{2} = 0,6\\text{ m}\\). Tốc độ truyền sóng \\(v = \\lambda f = 0,6 \\cdot 50 = 30\\text{ m/s}\\)."
    }
  ],
  15: [
    {
      q: "Trong bài thực hành đo tốc độ truyền âm trong không khí bằng phương pháp cộng hưởng cột khí (Bài 15), khoảng cách \\(\\Delta l = l_2 - l_1\\) giữa hai vị trí pít-tông liên tiếp nghe thấy âm to nhất bằng:",
      options: [
        "Một phần tư bước sóng (\\(\\frac{\\lambda}{4}\\))",
        "Một nửa bước sóng (\\(\\frac{\\lambda}{2}\\))",
        "Một bước sóng (\\(\\lambda\\))",
        "Hai lần bước sóng (\\(2\\lambda\\))"
      ],
      ans: 1,
      exp: "Do ống khí có một đầu kín (pít-tông là nút) và một đầu hở (miệng ống gần âm thoa là bụng), cộng hưởng xảy ra khi \\(l_n = (2n-1)\\frac{\\lambda}{4}\\). Hiệu hai chiều dài liên tiếp \\(\\Delta l = l_2 - l_1 = \\frac{3\\lambda}{4} - \\frac{\\lambda}{4} = \\frac{\\lambda}{2}\\)."
    },
    {
      q: "Tại sao trong thí nghiệm đo tốc độ truyền âm bằng ống cộng hưởng, ta lại tính \\(\\lambda = 2(l_2 - l_1)\\) thay vì chỉ đo vị trí cộng hưởng đầu tiên \\(\\lambda = 4l_1\\)?",
      options: [
        "Vì vị trí \\(l_1\\) không bao giờ nghe thấy âm cộng hưởng",
        "Để triệt tiêu sai số hệ thống tại miệng ống (do bụng sóng thực tế nằm nhô ra ngoài miệng ống một đoạn nhỏ \\(\\Delta l_0\\))",
        "Vì tần số âm thoa thay đổi khi kéo pít-tông",
        "Để làm tăng tần số âm thanh nghe được"
      ],
      ans: 1,
      exp: "Thực tế bụng sóng nằm nhô ra ngoài miệng ống một đoạn hiệu chỉnh \\(e\\), nên \\(l_1 + e = \\frac{\\lambda}{4}\\) và \\(l_2 + e = \\frac{3\\lambda}{4}\\). Khi lấy hiệu \\(l_2 - l_1 = \\frac{\\lambda}{2}\\), đại lượng \\(e\\) bị triệt tiêu hoàn toàn giúp kết quả chính xác hơn."
    },
    {
      q: "Trong thí nghiệm đo tốc độ truyền âm với âm thoa có tần số \\(f = 440\\text{ Hz}\\), học sinh đo được hai vị trí cộng hưởng liên tiếp cách nhau \\(\\Delta l = l_2 - l_1 = 39\\text{ cm}\\). Tốc độ truyền âm đo được là:",
      options: [
        "171,6 m/s",
        "343,2 m/s",
        "330,0 m/s",
        "686,4 m/s"
      ],
      ans: 1,
      exp: "Ta có \\(\\lambda = 2\\Delta l = 2 \\cdot 0,39\\text{ m} = 0,78\\text{ m}\\). Tốc độ truyền âm \\(v = \\lambda f = 0,78 \\cdot 440 = 343,2\\text{ m/s}\\)."
    }
  ],
  16: [
    {
      q: "Theo định luật Coulomb, độ lớn lực tương tác tĩnh điện \\(F\\) giữa hai điện tích điểm \\(q_1, q_2\\) đặt cách nhau một khoảng \\(r\\) trong chân không được xác định bởi công thức:",
      options: [
        "\\(F = k\\frac{|q_1 q_2|}{r}\\)",
        "\\(F = k\\frac{|q_1 q_2|}{r^2}\\) (với \\(k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2\\))",
        "\\(F = \\frac{|q_1 q_2|}{k r^2}\\)",
        "\\(F = k|q_1 q_2|r^2\\)"
      ],
      ans: 1,
      exp: "Định luật Coulomb: lực tương tác giữa hai điện tích điểm đặt trong chân không có phương trùng với đường thẳng nối hai điện tích, có độ lớn tỉ lệ thuận với tích độ lớn hai điện tích và tỉ lệ nghịch với bình phương khoảng cách giữa chúng: \\(F = k\\frac{|q_1 q_2|}{r^2}\\)."
    },
    {
      q: "Nếu tăng đồng thời độ lớn của mỗi điện tích điểm lên gấp đôi và cũng tăng khoảng cách giữa chúng lên gấp đôi thì độ lớn lực tương tác tĩnh điện giữa chúng sẽ:",
      options: [
        "Tăng gấp 4 lần",
        "Giảm đi 2 lần",
        "Không thay đổi",
        "Giảm đi 4 lần"
      ],
      ans: 2,
      exp: "Ta có \\(F' = k\\frac{|2q_1 \\cdot 2q_2|}{(2r)^2} = \\frac{4}{4} k\\frac{|q_1 q_2|}{r^2} = F\\). Vậy lực tương tác không thay đổi."
    },
    {
      q: "Đặt hai điện tích điểm trong một môi trường điện môi đồng tính có hằng số điện môi \\(\\varepsilon > 1\\) (giữ nguyên khoảng cách \\(r\\)) thì lực tương tác tĩnh điện giữa chúng so với khi đặt trong chân không sẽ:",
      options: [
        "Tăng lên \\(\\varepsilon\\) lần",
        "Giảm đi \\(\\varepsilon\\) lần (\\(F = \\frac{F_0}{\\varepsilon}\\))",
        "Giảm đi \\(\\varepsilon^2\\) lần",
        "Không đổi vì điện tích không đổi"
      ],
      ans: 1,
      exp: "Trong môi trường có hằng số điện môi \\(\\varepsilon\\), lực Coulomb là \\(F = \\frac{k|q_1 q_2|}{\\varepsilon r^2} = \\frac{F_0}{\\varepsilon}\\), tức giảm đi \\(\\varepsilon\\) lần so với trong chân không."
    }
  ],
  17: [
    {
      q: "Cường độ điện trường \\(\\vec{E}\\) tại một điểm đặc trưng cho điện trường tại điểm đó về mặt tác dụng lực và được xác định bằng thương số:",
      options: [
        "\\(\\vec{E} = \\vec{F} \\cdot q\\)",
        "\\(\\vec{E} = \\frac{\\vec{F}}{q}\\) (với \\(q\\) là điện tích thử đặt tại điểm đó)",
        "\\(E = \\frac{q}{F}\\)",
        "\\(E = k\\frac{|Q|}{r}\\)"
      ],
      ans: 1,
      exp: "Theo định nghĩa, \\(\\vec{E} = \\frac{\\vec{F}}{q}\\), suy ra \\(\\vec{F} = q\\vec{E}\\). Lưu ý: độ lớn và hướng của \\(\\vec{E}\\) tại một điểm chỉ phụ thuộc vào điện tích nguồn tạo ra điện trường, KHÔNG phụ thuộc vào điện tích thử \\(q\\)."
    },
    {
      q: "Khi đặt một điện tích thử âm (\\(q < 0\\)) tại một điểm trong điện trường có vectơ cường độ điện trường \\(\\vec{E}\\), lực điện \\(\\vec{F}\\) tác dụng lên \\(q\\) sẽ:",
      options: [
        "Cùng phương, cùng chiều với \\(\\vec{E}\\)",
        "Cùng phương, ngược chiều với \\(\\vec{E}\\)",
        "Vuông góc với \\(\\vec{E}\\)",
        "Bằng không"
      ],
      ans: 1,
      exp: "Từ công thức \\(\\vec{F} = q\\vec{E}\\), nếu \\(q > 0\\) thì \\(\\vec{F} \\uparrow\\uparrow \\vec{E}\\); nếu \\(q < 0\\) thì \\(\\vec{F} \\uparrow\\downarrow \\vec{E}\\) (ngược chiều với \\(\\vec{E}\\))."
    },
    {
      q: "Phát biểu nào sau đây về đường sức điện của điện trường tĩnh là SAI?",
      options: [
        "Qua mỗi điểm trong điện trường chỉ vẽ được một đường sức điện duy nhất (các đường sức không cắt nhau)",
        "Các đường sức của điện trường tĩnh là những đường cong khép kín",
        "Đường sức điện xuất phát từ điện tích dương (hoặc vô cực) và kết thúc ở điện tích âm (hoặc vô cực)",
        "Nơi nào điện trường mạnh hơn thì các đường sức điện được vẽ dày (mau) hơn"
      ],
      ans: 1,
      exp: "Đường sức của điện trường tĩnh là các đường KHÔNG khép kín (xuất phát từ điện tích dương hoặc vô cực và tận cùng ở điện tích âm hoặc vô cực)."
    }
  ],
  18: [
    {
      q: "Điện trường đều là điện trường mà vectơ cường độ điện trường \\(\\vec{E}\\) tại mọi điểm có:",
      options: [
        "Độ lớn bằng nhau nhưng hướng thay đổi liên tục",
        "Cùng phương, cùng chiều và cùng độ lớn; các đường sức điện là những đường thẳng song song cách đều nhau",
        "Đường sức điện là những đường tròn đồng tâm",
        "Độ lớn giảm dần theo bình phương khoảng cách"
      ],
      ans: 1,
      exp: "Trong điện trường đều (như vùng không gian giữa hai bản kim loại phẳng đặt song song tích điện trái dấu), \\(\\vec{E}\\) có cùng hướng và cùng độ lớn tại mọi điểm."
    },
    {
      q: "Giữa hai bản kim loại phẳng song song cách nhau \\(d = 2\\text{ cm}\\) có hiệu điện thế \\(U = 100\\text{ V}\\). Cường độ điện trường đều giữa hai bản phẳng là:",
      options: [
        "50 V/m",
        "200 V/m",
        "5000 V/m",
        "2 V/m"
      ],
      ans: 2,
      exp: "Đổi \\(d = 2\\text{ cm} = 0,02\\text{ m}\\). Áp dụng công thức \\(E = \\frac{U}{d} = \\frac{100}{0,02} = 5000\\text{ V/m}\\)."
    },
    {
      q: "Một hạt điện tích bay vào vùng điện trường đều \\(\\vec{E}\\) theo phương vuông góc với các đường sức điện (\\(\\vec{v}_0 \\perp \\vec{E}\\), bỏ qua trọng lực). Quỹ đạo chuyển động của hạt trong điện trường đều là:",
      options: [
        "Một đường thẳng song song với \\(\\vec{E}\\)",
        "Một nhánh đường parabol (tương tự chuyển động ném ngang trong trọng trường)",
        "Một đường tròn đều",
        "Một đường xoắn ốc"
      ],
      ans: 1,
      exp: "Theo phương Ox (\\(\\perp \\vec{E}\\)) hạt chuyển động thẳng đều \\(x = v_0 t\\); theo phương Oy (\\(\\parallel \\vec{E}\\)) hạt chuyển động nhanh dần đều \\(y = \\frac{1}{2}\\frac{|q|E}{m}t^2\\). Khử \\(t\\) được \\(y = \\frac{|q|E}{2mv_0^2}x^2\\) là một nhánh parabol."
    }
  ],
  19: [
    {
      q: "Công của lực điện trường đều làm di chuyển một điện tích \\(q\\) từ điểm M đến điểm N được tính bằng công thức \\(A_{MN} = qEd\\). Trong đó \\(d\\) là:",
      options: [
        "Độ dài quãng đường thực tế mà điện tích đã đi từ M đến N",
        "Độ dài đại số hình chiếu của đoạn thẳng \\(\\overrightarrow{MN}\\) lên phương của đường sức điện (\\(d = MN\\cos\\alpha\\))",
        "Khoảng cách giữa hai bản tụ điện bất kì",
        "Bán kính quỹ đạo của điện tích"
      ],
      ans: 1,
      exp: "Lực điện trường là lực thế: công \\(A_{MN} = qEd = qE \\cdot MN\\cos\\alpha\\) không phụ thuộc vào hình dạng đường đi mà chỉ phụ thuộc vào vị trí điểm đầu M và điểm cuối N (\\(d\\) là hình chiếu đại số của \\(\\overrightarrow{MN}\\) lên chiều đường sức)."
    },
    {
      q: "Khi một điện tích \\(q\\) dịch chuyển dọc theo một đường cong kín trong điện trường tĩnh (đi từ M rồi quay trở lại đúng điểm M) thì công của lực điện bằng:",
      options: [
        "\\(2qEd\\)",
        "0 (bằng không)",
        "Cực đại",
        "Phụ thuộc vào chu vi của đường cong kín"
      ],
      ans: 1,
      exp: "Vì điểm đầu và điểm cuối trùng nhau (\\(d = 0\\)) và trường tĩnh điện là trường thế nên công của lực điện trên mọi đường cong kín luôn bằng 0."
    },
    {
      q: "Mối liên hệ đúng giữa công của lực điện \\(A_{MN}\\) khi điện tích \\(q\\) di chuyển từ M đến N và thế năng điện tại hai điểm đó là:",
      options: [
        "\\(A_{MN} = W_N - W_M\\)",
        "\\(A_{MN} = W_M - W_N\\)",
        "\\(A_{MN} = W_M + W_N\\)",
        "\\(A_{MN} = \\frac{W_M}{W_N}\\)"
      ],
      ans: 1,
      exp: "Tương tự trọng trường, công của lực điện bằng độ giảm thế năng điện: \\(A_{MN} = W_M - W_N\\). Nếu \\(A_{MN} > 0\\) thì thế năng điện giảm; nếu \\(A_{MN} < 0\\) thì thế năng điện tăng."
    }
  ],
  20: [
    {
      q: "Hiệu điện thế \\(U_{MN}\\) giữa hai điểm M và N trong điện trường được xác định bởi công thức nào sau đây?",
      options: [
        "\\(U_{MN} = V_N - V_M = \\frac{A_{MN}}{q}\\)",
        "\\(U_{MN} = V_M - V_N = \\frac{A_{MN}}{q}\\)",
        "\\(U_{MN} = A_{MN} \\cdot q\\)",
        "\\(U_{MN} = \\frac{q}{A_{MN}}\\)"
      ],
      ans: 1,
      exp: "Hiệu điện thế \\(U_{MN} = V_M - V_N = \\frac{W_M - W_N}{q} = \\frac{A_{MN}}{q}\\) đặc trưng cho khả năng sinh công của điện trường khi di chuyển một đơn vị điện tích dương từ M đến N."
    },
    {
      q: "Đơn vị của điện thế và hiệu điện thế trong hệ SI là Vôn (V). Hệ thức quy đổi đúng là:",
      options: [
        "\\(1\\text{ V} = 1\\text{ J}\\cdot\\text{C}\\)",
        "\\(1\\text{ V} = 1\\text{ J/C}\\)",
        "\\(1\\text{ V} = 1\\text{ N/C}\\)",
        "\\(1\\text{ V} = 1\\text{ C/J}\\)"
      ],
      ans: 1,
      exp: "Từ \\(U = \\frac{A}{q}\\), ta có \\(1\\text{ V} = \\frac{1\\text{ J}}{1\\text{ C}} = 1\\text{ J/C}\\). Ngoài ra, cường độ điện trường có đơn vị \\(1\\text{ V/m} = 1\\text{ N/C}\\)."
    },
    {
      q: "Một hạt electron (\\(q = -1,6 \\times 10^{-19}\\text{ C}\\)) bắt đầu chuyển động từ trạng thái nghỉ từ bản âm sang bản dương giữa hai bản phẳng có hiệu điện thế \\(U = 100\\text{ V}\\). Động năng của electron khi vừa đến bản dương là:",
      options: [
        "\\(100\\text{ J}\\)",
        "\\(1,6 \\times 10^{-17}\\text{ J}\\) (tức \\(100\\text{ eV}\\))",
        "\\(1,6 \\times 10^{-19}\\text{ J}\\)",
        "\\(0\\text{ J}\\)"
      ],
      ans: 1,
      exp: "Theo định lí động năng: \\(W_đ - 0 = A = |q|U = 1,6 \\times 10^{-19} \\cdot 100 = 1,6 \\times 10^{-17}\\text{ J} = 100\\text{ eV}\\)."
    }
  ],
  21: [
    {
      q: "Điện dung \\(C\\) của một tụ điện đặc trưng cho khả năng tích điện của tụ ở một hiệu điện thế nhất định và được tính bằng công thức:",
      options: [
        "\\(C = Q \\cdot U\\)",
        "\\(C = \\frac{Q}{U}\\) (đơn vị Fara - F)",
        "\\(C = \\frac{U}{Q}\\)",
        "\\(C = \\frac{1}{2}QU^2\\)"
      ],
      ans: 1,
      exp: "Điện dung \\(C = \\frac{Q}{U}\\). Lưu ý: \\(C\\) chỉ phụ thuộc vào cấu tạo hình học của tụ và chất điện môi giữa hai bản (\\(C = \\frac{\\varepsilon S}{4\\pi k d}\\)), không phụ thuộc vào \\(Q\\) hay \\(U\\)."
    },
    {
      q: "Hai tụ điện có điện dung \\(C_1 = 3\\text{ }\\mu\\text{F}\\) và \\(C_2 = 6\\text{ }\\mu\\text{F}\\) được ghép NỐI TIẾP với nhau. Điện dung tương đương \\(C_b\\) của bộ tụ là:",
      options: [
        "\\(9\\text{ }\\mu\\text{F}\\)",
        "\\(2\\text{ }\\mu\\text{F}\\)",
        "\\(4,5\\text{ }\\mu\\text{F}\\)",
        "\\(0,5\\text{ }\\mu\\text{F}\\)"
      ],
      ans: 1,
      exp: "Khi ghép nối tiếp hai tụ: \\(\\frac{1}{C_b} = \\frac{1}{C_1} + \\frac{1}{C_2} \\Rightarrow C_b = \\frac{C_1 C_2}{C_1 + C_2} = \\frac{3 \\cdot 6}{3 + 6} = 2\\text{ }\\mu\\text{F}\\) (nếu ghép song song thì \\(C_b = C_1 + C_2 = 9\\text{ }\\mu\\text{F}\\))."
    },
    {
      q: "Năng lượng điện trường \\(W\\) dự trữ bên trong một tụ điện có điện dung \\(C\\) khi được tích điện đến hiệu điện thế \\(U\\) (điện tích \\(Q\\)) là:",
      options: [
        "\\(W = \\frac{1}{2}CU^2 = \\frac{1}{2}QU = \\frac{Q^2}{2C}\\)",
        "\\(W = CU^2 = QU\\)",
        "\\(W = \\frac{1}{2}C^2 U\\)",
        "\\(W = \\frac{Q}{2C^2}\\)"
      ],
      ans: 0,
      exp: "Năng lượng của tụ điện chính là năng lượng điện trường giữa hai bản tụ: \\(W = \\frac{1}{2}CU^2 = \\frac{1}{2}QU = \\frac{Q^2}{2C}\\)."
    }
  ],
  22: [
    {
      q: "Cường độ dòng điện không đổi \\(I\\) chạy qua một tiết diện thẳng của dây dẫn được xác định bằng công thức:",
      options: [
        "\\(I = \\Delta q \\cdot \\Delta t\\)",
        "\\(I = \\frac{\\Delta q}{\\Delta t}\\) (đơn vị Ampe, \\(1\\text{ A} = 1\\text{ C/s}\\))",
        "\\(I = \\frac{\\Delta t}{\\Delta q}\\)",
        "\\(I = \\frac{\\Delta q}{S}\\)"
      ],
      ans: 1,
      exp: "Cường độ dòng điện đặc trưng cho độ mạnh yếu của dòng điện, bằng điện lượng \\(\\Delta q\\) chuyển qua tiết diện thẳng của vật dẫn trong một đơn vị thời gian: \\(I = \\frac{\\Delta q}{\\Delta t}\\)."
    },
    {
      q: "Biểu thức liên hệ giữa cường độ dòng điện \\(I\\) với mật độ hạt tải điện \\(n\\), diện tích tiết diện dây \\(S\\), độ lớn điện tích hạt tải \\(e\\) và tốc độ dịch chuyển có hướng \\(v\\) là:",
      options: [
        "\\(I = \\frac{nSe}{v}\\)",
        "\\(I = Snve\\)",
        "\\(I = \\frac{nv}{Se}\\)",
        "\\(I = S^2 nve\\)"
      ],
      ans: 1,
      exp: "Trong thời gian \\(\\Delta t\\), các hạt tải điện trong thể tích hình trụ \\(V = S \\cdot (v\\Delta t)\\) đều đi qua tiết diện \\(S\\), nên \\(\\Delta q = n(Sv\\Delta t)e \\Rightarrow I = \\frac{\\Delta q}{\\Delta t} = Snve\\)."
    },
    {
      q: "Một dòng điện không đổi có cường độ \\(I = 1,6\\text{ A}\\) chạy qua dây dẫn kim loại. Biết điện tích nguyên tố \\(e = 1,6 \\times 10^{-19}\\text{ C}\\). Số electron dịch chuyển qua tiết diện thẳng của dây dẫn trong \\(1\\text{ giây}\\) là:",
      options: [
        "\\(10^{18}\\) hạt",
        "\\(10^{19}\\) hạt",
        "\\(1,6 \\times 10^{19}\\) hạt",
        "\\(10^{20}\\) hạt"
      ],
      ans: 1,
      exp: "Điện lượng qua tiết diện trong \\(\\Delta t = 1\\text{ s}\\) là \\(\\Delta q = I\\Delta t = 1,6\\text{ C}\\). Số electron tương ứng là \\(N = \\frac{\\Delta q}{e} = \\frac{1,6}{1,6 \\times 10^{-19}} = 10^{19}\\) hạt."
    }
  ],
  23: [
    {
      q: "Theo định luật Ohm đối với vật dẫn kim loại ở nhiệt độ không đổi, cường độ dòng điện \\(I\\) chạy qua vật dẫn:",
      options: [
        "Tỉ lệ thuận với hiệu điện thế \\(U\\) hai đầu vật dẫn và tỉ lệ nghịch với điện trở \\(R\\) của nó (\\(I = \\frac{U}{R}\\))",
        "Tỉ lệ thuận với cả hiệu điện thế \\(U\\) và điện trở \\(R\\) (\\(I = U \\cdot R\\))",
        "Tỉ lệ nghịch với hiệu điện thế \\(U\\) hai đầu vật dẫn",
        "Không phụ thuộc vào hiệu điện thế \\(U\\)"
      ],
      ans: 0,
      exp: "Định luật Ohm: \\(I = \\frac{U}{R}\\). Ở nhiệt độ không đổi, đường đặc trưng Vôn - Ampe \\(I(U)\\) của dây dẫn kim loại là một đoạn thẳng đi qua gốc tọa độ."
    },
    {
      q: "Khi nhiệt độ của dây dẫn kim loại (ví dụ dây tóc bóng đèn sợi đốt) tăng lên thì điện trở suất \\(\\rho\\) và điện trở \\(R\\) của nó thay đổi như thế nào?",
      options: [
        "Giảm đi nhanh chóng (tương tự nhiệt điện trở NTC)",
        "Tăng lên theo hàm bậc nhất \\(R = R_0[1 + \\alpha(t - t_0)]\\) do chuyển động nhiệt của các ion nút mạng tăng",
        "Luôn giữ nguyên không đổi ở mọi nhiệt độ",
        "Bằng không ngay khi đèn phát sáng"
      ],
      ans: 1,
      exp: "Khi nhiệt độ kim loại tăng, các ion dương ở nút mạng tinh thể dao động nhiệt mạnh hơn làm cản trở dòng electron tự do nhiều hơn, khiến \\(\\rho\\) và \\(R\\) tăng theo hệ thức \\(R = R_0[1 + \\alpha(t - t_0)]\\)."
    },
    {
      q: "Linh kiện nhiệt điện trở NTC (Negative Temperature Coefficient) có đặc điểm nổi bật nào và dùng để làm gì?",
      options: [
        "Điện trở tăng mạnh khi nhiệt độ tăng; dùng làm dây đốt nóng",
        "Điện trở giảm mạnh khi nhiệt độ tăng; dùng làm cảm biến nhiệt và báo cháy tự động",
        "Điện trở chỉ phụ thuộc vào ánh sáng chiếu vào",
        "Có điện trở bằng không ở nhiệt độ phòng"
      ],
      ans: 1,
      exp: "Nhiệt điện trở NTC có hệ số nhiệt điện trở âm: khi nhiệt độ tăng, mật độ hạt tải điện trong bán dẫn tăng vọt làm điện trở giảm mạnh, rất nhạy để chế tạo cảm biến nhiệt độ và mạch báo cháy."
    }
  ],
  24: [
    {
      q: "Suất điện động \\(\\mathcal{E}\\) của nguồn điện đặc trưng cho khả năng thực hiện công của lực lạ bên trong nguồn và được tính bằng công thức:",
      options: [
        "\\(\\mathcal{E} = A \\cdot q\\)",
        "\\(\\mathcal{E} = \\frac{A}{q}\\) (với \\(A\\) là công của lực lạ dịch chuyển điện tích dương \\(q\\) ngược chiều điện trường bên trong nguồn)",
        "\\(\\mathcal{E} = \\frac{q}{A}\\)",
        "\\(\\mathcal{E} = I \\cdot R_N\\)"
      ],
      ans: 1,
      exp: "Suất điện động \\(\\mathcal{E} = \\frac{A}{q}\\) có đơn vị là Vôn (V). Khi mạch ngoài hở (\\(I = 0\\)), hiệu điện thế giữa hai cực của nguồn đúng bằng suất điện động \\(U_N = \\mathcal{E}\\)."
    },
    {
      q: "Cho mạch điện kín gồm nguồn điện có suất điện động \\(\\mathcal{E}\\), điện trở trong \\(r\\) nối với mạch ngoài có điện trở tương đương \\(R_N\\). Biểu thức định luật Ohm cho toàn mạch và hiệu điện thế mạch ngoài \\(U_N\\) là:",
      options: [
        "\\(I = \\frac{\\mathcal{E}}{R_N - r}\\); \\(U_N = \\mathcal{E} + Ir\\)",
        "\\(I = \\frac{\\mathcal{E}}{R_N + r}\\); \\(U_N = I R_N = \\mathcal{E} - Ir\\)",
        "\\(I = \\frac{\\mathcal{E}}{R_N}\\); \\(U_N = \\mathcal{E}\\)",
        "\\(I = \\mathcal{E}(R_N + r)\\)"
      ],
      ans: 1,
      exp: "Theo định luật Ohm toàn mạch: \\(I = \\frac{\\mathcal{E}}{R_N + r} \\Leftrightarrow \\mathcal{E} = I R_N + Ir = U_N + Ir \\Rightarrow U_N = \\mathcal{E} - Ir\\) (trong đó \\(Ir\\) là độ giảm thế bên trong nguồn)."
    },
    {
      q: "Hiện tượng đoản mạch (ngắn mạch) của nguồn điện xảy ra khi nào và gây nguy hiểm gì?",
      options: [
        "Khi ngắt khóa K làm \\(R_N \\to \\infty\\) và \\(I = 0\\)",
        "Khi nối trực tiếp hai cực của nguồn bằng dây dẫn có điện trở rất nhỏ (\\(R_N \\approx 0\\)), làm dòng điện tăng vọt tới \\(I_{\\max} = \\frac{\\mathcal{E}}{r}\\) gây nóng chảy dây, hỏng nguồn hoặc cháy nổ",
        "Khi ghép nối tiếp hai bóng đèn có cùng điện trở",
        "Khi dùng vôn kế có điện trở rất lớn đo hai cực của pin"
      ],
      ans: 1,
      exp: "Khi \\(R_N \\approx 0\\), dòng điện đạt giá trị cực đại \\(I_{đm} = \\frac{\\mathcal{E}}{r}\\). Nếu \\(r\\) nhỏ (như ắc quy hoặc mạng điện dân dụng), dòng đoản mạch cực lớn sẽ tỏa nhiệt mạnh gây cháy nổ nếu không có cầu chì/aptomat ngắt mạch."
    }
  ],
  25: [
    {
      q: "Công suất tiêu thụ điện năng \\(\\mathcal{P}\\) của một đoạn mạch có hiệu điện thế \\(U\\) và dòng điện \\(I\\) chạy qua được tính bằng công thức tổng quát nào?",
      options: [
        "\\(\\mathcal{P} = U I t\\)",
        "\\(\\mathcal{P} = U I = \\frac{A}{t}\\) (đơn vị Oát - W)",
        "\\(\\mathcal{P} = \\frac{U}{I}\\)",
        "\\(\\mathcal{P} = U^2 I\\)"
      ],
      ans: 1,
      exp: "Năng lượng điện tiêu thụ là \\(A = UIt\\), còn công suất tiêu thụ điện là \\(\\mathcal{P} = \\frac{A}{t} = UI\\). Nếu đoạn mạch thuần điện trở \\(R\\) thì \\(\\mathcal{P} = UI = I^2 R = \\frac{U^2}{R}\\)."
    },
    {
      q: "Một bóng đèn có ghi thông số định mức \\(220\\text{ V} - 100\\text{ W}\\). Điện trở của bóng đèn khi sáng bình thường và điện năng nó tiêu thụ trong \\(10\\text{ giờ}\\) hoạt động đúng định mức là:",
      options: [
        "\\(R = 484\\text{ }\\Omega\\); \\(A = 1\\text{ kWh} = 3,6 \\times 10^6\\text{ J}\\)",
        "\\(R = 2,2\\text{ }\\Omega\\); \\(A = 10\\text{ kWh}\\)",
        "\\(R = 484\\text{ }\\Omega\\); \\(A = 100\\text{ J}\\)",
        "\\(R = 220\\text{ }\\Omega\\); \\(A = 1\\text{ kWh}\\)"
      ],
      ans: 0,
      exp: "Điện trở định mức: \\(R = \\frac{U_{đm}^2}{\\mathcal{P}_{đm}} = \\frac{220^2}{100} = 484\\text{ }\\Omega\\). Điện năng tiêu thụ trong \\(t = 10\\text{ h}\\) là \\(A = \\mathcal{P}t = 0,1\\text{ kW} \\cdot 10\\text{ h} = 1\\text{ kWh} = 3,6 \\times 10^6\\text{ J}\\)."
    },
    {
      q: "Đối với toàn mạch kín gồm nguồn điện \\((\\mathcal{E}, r)\\) và mạch ngoài \\(R_N\\), hiệu suất \\(H\\) của nguồn điện được tính theo công thức:",
      options: [
        "\\(H = \\frac{U_N}{\\mathcal{E}} = \\frac{R_N}{R_N + r}\\)",
        "\\(H = \\frac{r}{R_N + r}\\)",
        "\\(H = \\frac{\\mathcal{E}}{U_N}\\)",
        "\\(H = \\frac{R_N + r}{R_N}\\)"
      ],
      ans: 0,
      exp: "Hiệu suất nguồn điện bằng tỉ số giữa công suất có ích ở mạch ngoài và công suất toàn phần của nguồn: \\(H = \\frac{\\mathcal{P}_N}{\\mathcal{P}_{\\text{nguồn}}} = \\frac{U_N I}{\\mathcal{E} I} = \\frac{U_N}{\\mathcal{E}} = \\frac{R_N}{R_N + r}\\)."
    }
  ],
  26: [
    {
      q: "Trong bài thực hành đo suất điện động \\(\\mathcal{E}\\) và điện trở trong \\(r\\) của pin điện hóa (Bài 26), đồ thị biểu diễn sự phụ thuộc của hiệu điện thế hai cực \\(U\\) theo cường độ dòng điện \\(I\\) có dạng là:",
      options: [
        "Một đường thẳng đi qua gốc tọa độ có hệ số góc dương",
        "Một đoạn thẳng dốc xuống theo phương trình \\(U = \\mathcal{E} - Ir\\), cắt trục tung tại \\(U = \\mathcal{E}\\) và có độ dốc bằng \\(-r\\)",
        "Một đường parabol có đỉnh tại gốc tọa độ",
        "Một đường thẳng nằm ngang song song với trục \\(I\\)"
      ],
      ans: 1,
      exp: "Từ hệ thức \\(U = \\mathcal{E} - Ir\\), đồ thị \\(U(I)\\) là một đường thẳng bậc nhất có hệ số góc \\(-r < 0\\). Giao điểm với trục tung (\\(I = 0\\)) cho \\(\\mathcal{E}\\), và độ dốc \\(r = \\frac{U_1 - U_2}{I_2 - I_1}\\)."
    },
    {
      q: "Tại sao trong mạch thí nghiệm đo \\(\\mathcal{E}\\) và \\(r\\) của pin, người ta phải mắc nối tiếp thêm một điện trở bảo vệ \\(R_0\\) với biến trở \\(R_b\\)?",
      options: [
        "Để làm tăng suất điện động \\(\\mathcal{E}\\) của pin lên gấp đôi",
        "Để ngăn ngừa hiện tượng đoản mạch (ngắn mạch) làm hỏng pin và ampe kế khi học sinh vô tình kéo con chạy biến trở về vị trí \\(R_b = 0\\)",
        "Để vôn kế chỉ giá trị bằng không",
        "Để làm giảm điện trở trong \\(r\\) của pin về 0"
      ],
      ans: 1,
      exp: "Nếu không có \\(R_0\\), khi dịch chuyển con chạy đến vị trí \\(R_b = 0\\) thì mạch ngoài có điện trở bằng 0 gây đoản mạch pin và làm quá tải ampe kế."
    },
    {
      q: "Trong thí nghiệm đo \\(\\mathcal{E}\\) và \\(r\\) của một viên pin: khi \\(I_1 = 0,2\\text{ A}\\) thì vôn kế chỉ \\(U_1 = 1,40\\text{ V}\\); khi \\(I_2 = 0,6\\text{ A}\\) thì vôn kế chỉ \\(U_2 = 1,20\\text{ V}\\). Giá trị suất điện động \\(\\mathcal{E}\\) và điện trở trong \\(r\\) của pin là:",
      options: [
        "\\(\\mathcal{E} = 1,50\\text{ V}; r = 0,5\\text{ }\\Omega\\)",
        "\\(\\mathcal{E} = 1,60\\text{ V}; r = 1,0\\text{ }\\Omega\\)",
        "\\(\\mathcal{E} = 1,40\\text{ V}; r = 0,5\\text{ }\\Omega\\)",
        "\\(\\mathcal{E} = 1,50\\text{ V}; r = 2,0\\text{ }\\Omega\\)"
      ],
      ans: 0,
      exp: "Ta có \\(r = \\frac{U_1 - U_2}{I_2 - I_1} = \\frac{1,40 - 1,20}{0,6 - 0,2} = \\frac{0,20}{0,4} = 0,5\\text{ }\\Omega\\). Thay lại vào \\(\\mathcal{E} = U_1 + I_1 r = 1,40 + 0,2 \\cdot 0,5 = 1,50\\text{ V}\\)."
    }
  ]
};

module.exports = { quizzes };
