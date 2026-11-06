const chapters = [
  {
    num: 1,
    roman: "I",
    title: "Dao động",
    pages: "Trang 5–30",
    color: "indigo",
    icon: "fa-wave-square",
    lessons: [1, 2, 3, 4, 5, 6, 7],
    summary: "Nghiên cứu dao động điều hòa, các đại lượng đặc trưng (li độ, biên độ, chu kì, tần số, pha), vận tốc – gia tốc, sự chuyển hóa động năng – thế năng và các dao động tắt dần, cưỡng bức, hiện tượng cộng hưởng."
  },
  {
    num: 2,
    roman: "II",
    title: "Sóng",
    pages: "Trang 31–59",
    color: "sky",
    icon: "fa-water",
    lessons: [8, 9, 10, 11, 12, 13, 14, 15],
    summary: "Khám phá sự hình thành và truyền sóng cơ, sóng ngang – sóng dọc, sóng âm, thang sóng điện từ, hiện tượng giao thoa sóng cơ và giao thoa ánh sáng Young, sóng dừng và 2 bài thực hành đo tần số/tốc độ truyền âm."
  },
  {
    num: 3,
    roman: "III",
    title: "Điện trường",
    pages: "Trang 60–89",
    color: "amber",
    icon: "fa-bolt",
    lessons: [16, 17, 18, 19, 20, 21],
    summary: "Hệ thống hóa định luật Coulomb, khái niệm điện trường, đường sức điện, điện trường đều, công của lực điện, thế năng điện, điện thế – hiệu điện thế, cấu tạo, ghép tụ và năng lượng của tụ điện."
  },
  {
    num: 4,
    roman: "IV",
    title: "Dòng điện. Mạch điện",
    pages: "Trang 90–113",
    color: "emerald",
    icon: "fa-microchip",
    lessons: [22, 23, 24, 25, 26],
    summary: "Làm chủ cường độ dòng điện, tốc độ trôi hạt tải, điện trở và định luật Ohm, sự phụ thuộc của điện trở vào nhiệt độ, nguồn điện – suất điện động, định luật Ohm toàn mạch, công suất điện và thực hành đo suất điện động – điện trở trong của pin."
  }
];

const lessonsP1 = [
  {
    num: 1,
    chapter: 1,
    title: "Dao động điều hòa",
    pages: "tr. 6–9",
    type: "Lí thuyết",
    subtitle: "Khái niệm dao động cơ, dao động tuần hoàn, phương trình và các đại lượng đặc trưng của dao động điều hòa.",
    diagramCaption: "Sơ đồ liên hệ giữa chuyển động tròn đều và hình chiếu dao động điều hòa trên trục Ox cùng đồ thị li độ – thời gian (x–t).",
    sections: [
      {
        heading: "1. Khái niệm dao động cơ, dao động tuần hoàn và dao động điều hòa",
        items: [
          "<strong>Dao động cơ:</strong> Là chuyển động qua lại quanh một vị trí đặc biệt gọi là <em>vị trí cân bằng</em> (ví dụ: chuyển động của quả lắc đồng hồ, vật nặng gắn vào lò xo, chiếc xích đu).",
          "<strong>Dao động tuần hoàn:</strong> Là dao động mà sau những khoảng thời gian bằng nhau (gọi là chu kì), vật trở lại vị trí cũ theo hướng cũ (lặp lại trạng thái chuyển động).",
          "<strong>Dao động điều hòa:</strong> Là dao động trong đó li độ của vật là một hàm côsin (hoặc sin) của thời gian. Đồ thị li độ – thời gian $(x - t)$ của dao động điều hòa là một đường hình sin."
        ]
      },
      {
        heading: "2. Các đại lượng đặc trưng của dao động điều hòa",
        items: [
          "<strong>Li độ ($x$):</strong> Độ dịch chuyển có dấu từ vị trí cân bằng đến vị trí của vật tại thời điểm đang xét (đơn vị: $\\text{m}, \\text{cm}$). Ở vị trí cân bằng $x = 0$.",
          "<strong>Biên độ ($A$):</strong> Độ lớn cực đại của li độ ($A = |x|_{\\max}$), luôn dương ($A > 0$). Vật dao động trên quỹ đạo là đoạn thẳng dài $L = 2A$ (giữa hai biên $-A$ và $+A$).",
          "<strong>Chu kì ($T$):</strong> Khoảng thời gian để vật thực hiện được một dao động toàn phần, đơn vị là giây ($\\text{s}$). Nếu trong thời gian $\\Delta t$ vật thực hiện được $N$ dao động toàn phần thì $T = \\frac{\\Delta t}{N}$.",
          "<strong>Tần số ($f$):</strong> Số dao động toàn phần thực hiện được trong một giây, đơn vị là hertz ($\\text{Hz}$): $f = \\frac{1}{T} = \\frac{N}{\\Delta t}$."
        ]
      },
      {
        heading: "3. Phương trình dao động điều hòa và liên hệ chuyển động tròn đều",
        items: [
          "<strong>Phương trình li độ:</strong> $$x = A\\cos(\\omega t + \\varphi_0)$$",
          "<strong>Tần số góc ($\\omega$):</strong> Đại lượng liên hệ với chu kì và tần số qua hệ thức: $$\\omega = 2\\pi f = \\frac{2\\pi}{T} \\quad (\\text{đơn vị: rad/s})$$",
          "<strong>Pha của dao động ($\\omega t + \\varphi_0$):</strong> Cho phép xác định trạng thái (vị trí và chiều chuyển động) của vật tại thời điểm $t$ bất kì (đơn vị: $\\text{rad}$).",
          "<strong>Pha ban đầu ($\\varphi_0$):</strong> Cho biết tại thời điểm bắt đầu quan sát ($t = 0$), vật đang ở đâu và chuyển động theo chiều nào (thường chọn $\\varphi_0 \\in [-\\pi, \\pi]$). <em>Lưu ý:</em> Pha là góc (đo bằng radian), không phải li độ.",
          "<strong>Mô hình hình chiếu:</strong> Điểm $P$ chuyển động tròn đều trên đường tròn bán kính $A$ với tốc độ góc $\\omega$ thì hình chiếu $M$ của $P$ xuống đường kính $Ox$ dao động điều hòa với phương trình $x = A\\cos(\\omega t + \\varphi_0)$."
        ]
      }
    ],
    formulas: [
      { name: "Phương trình li độ", eq: "$$x = A\\cos(\\omega t + \\varphi_0)$$" },
      { name: "Tần số góc & Chu kì", eq: "$$\\omega = 2\\pi f = \\frac{2\\pi}{T}, \\quad f = \\frac{1}{T}$$" },
      { name: "Chiều dài quỹ đạo", eq: "$$L = 2A$$" },
      { name: "Quãng đường trong 1 chu kì", eq: "$$S_{1T} = 4A, \\quad S_{T/2} = 2A$$" }
    ],
    applications: [
      "Ứng dụng con lắc đồng hồ để đo thời gian chính xác nhờ tính tuần hoàn ổn định của dao động.",
      "Khảo sát dao động của màng loa, dây đàn và chuyển động pít-tông trong động cơ đốt trong."
    ]
  },
  {
    num: 2,
    chapter: 1,
    title: "Mô tả dao động điều hòa",
    pages: "tr. 10–13",
    type: "Lí thuyết",
    subtitle: "Cách đọc đồ thị li độ – thời gian (x–t), xác định biên độ, chu kì, pha ban đầu và độ lệch pha giữa hai dao động cùng tần số.",
    diagramCaption: "Đồ thị hai dao động điều hòa cùng chu kì lệch pha nhau Δφ trên hệ trục (x–t).",
    sections: [
      {
        heading: "1. Đọc và khai thác đồ thị li độ – thời gian (x–t)",
        items: [
          "Đồ thị $(x - t)$ có dạng đường hình sin, cho biết trực quan biên độ $A$, chu kì $T$ và trạng thái dao động ở từng thời điểm.",
          "<strong>Cách xác định các tham số từ đồ thị để lập phương trình:</strong><br>• <em>Bước 1 (Biên độ $A$):</em> Đọc giá trị đỉnh cao nhất trên trục tung $Ox$ ($A = x_{\\max}$).<br>• <em>Bước 2 (Chu kì $T$ và $\\omega$):</em> Xác định khoảng thời gian ngắn nhất giữa hai đỉnh dương liên tiếp (hoặc hai lần liên tiếp vật qua vị trí cân bằng theo cùng một chiều) để suy ra $T$, rồi tính $\\omega = \\frac{2\\pi}{T}$.<br>• <em>Bước 3 (Pha ban đầu $\\varphi_0$):</em> Nhìn tại gốc thời gian $t = 0$, đọc giá trị $x(0) = A\\cos\\varphi_0$ và xét xu hướng đồ thị đi lên ($v > 0 \\Rightarrow \\varphi_0 < 0$) hay đi xuống ($v < 0 \\Rightarrow \\varphi_0 > 0$) để chọn đúng $\\varphi_0 \\in [-\\pi, \\pi]$."
        ]
      },
      {
        heading: "2. Độ lệch pha giữa hai dao động cùng tần số",
        items: [
          "Xét hai dao động điều hòa có cùng tần số góc $\\omega$ (cùng chu kì $T$): $x_1 = A_1\\cos(\\omega t + \\varphi_1)$ và $x_2 = A_2\\cos(\\omega t + \\varphi_2)$.",
          "<strong>Độ lệch pha ($\\Delta\\varphi$):</strong> Hiệu số pha của hai dao động không đổi theo thời gian: $$\\Delta\\varphi = \\varphi_1 - \\varphi_2$$",
          "• Nếu $\\varphi_1 > \\varphi_2$: Dao động 1 <strong>sớm pha</strong> hơn dao động 2 một góc $(\\varphi_1 - \\varphi_2)$ (trên đồ thị, đỉnh của dao động 1 xuất hiện sớm hơn về phía trái trục thời gian).",
          "• Nếu $\\varphi_1 < \\varphi_2$: Dao động 1 <strong>trễ pha</strong> hơn dao động 2.",
          "• Nếu $\\Delta\\varphi = 0$ (hoặc $\\Delta\\varphi = k2\\pi$): Hai dao động <strong>cùng pha (đồng pha)</strong> – luôn cùng đạt cực đại hoặc cùng qua vị trí cân bằng theo một chiều tại cùng thời điểm.",
          "• Nếu $\\Delta\\varphi = \\pm\\pi$ (hoặc $\\Delta\\varphi = (2k+1)\\pi$): Hai dao động <strong>ngược pha</strong> – khi dao động này ở biên dương thì dao động kia ở biên âm."
        ]
      },
      {
        heading: "3. Công thức tính độ lệch pha theo khoảng lệch thời gian Δt",
        items: [
          "Nếu hai dao động cùng chu kì $T$ đạt cùng một trạng thái tương ứng (ví dụ cùng qua vị trí cân bằng theo chiều dương hoặc cùng đạt đỉnh cực đại) lệch nhau một khoảng thời gian $\\Delta t$, thì độ lớn độ lệch pha là: $$|\\Delta\\varphi| = \\frac{2\\pi |\\Delta t|}{T} = \\omega |\\Delta t|$$"
        ]
      }
    ],
    formulas: [
      { name: "Tại thời điểm t = 0", eq: "$$x_0 = A\\cos\\varphi_0, \\quad \\begin{cases} v_0 > 0 \\Rightarrow \\varphi_0 < 0 \\\\ v_0 < 0 \\Rightarrow \\varphi_0 > 0 \\end{cases}$$" },
      { name: "Độ lệch pha", eq: "$$\\Delta\\varphi = \\varphi_1 - \\varphi_2$$" },
      { name: "Lệch pha theo Δt", eq: "$$|\\Delta\\varphi| = \\frac{2\\pi |\\Delta t|}{T}$$" }
    ],
    applications: [
      "So sánh pha của hai tín hiệu điện xoay chiều trên màn hình dao động kí điện tử.",
      "Đồng bộ hóa nhịp dao động của các chi tiết máy cơ khí."
    ]
  },
  {
    num: 3,
    chapter: 1,
    title: "Vận tốc, gia tốc trong dao động điều hòa",
    pages: "tr. 14–16",
    type: "Lí thuyết",
    subtitle: "Phương trình, đồ thị, quan hệ pha và hệ thức độc lập thời gian giữa li độ x, vận tốc v và gia tốc a.",
    diagramCaption: "So sánh đồ thị x(t), v(t), a(t) theo thời gian và đường elip độc lập thời gian giữa (x, v).",
    sections: [
      {
        heading: "1. Vận tốc trong dao động điều hòa",
        items: [
          "Vận tốc tức thời là đạo hàm bậc nhất của li độ theo thời gian (bằng độ dốc của đồ thị $x - t$ tại thời điểm xét): $$v = \\frac{dx}{dt} = -\\omega A\\sin(\\omega t + \\varphi_0) = \\omega A\\cos\\left(\\omega t + \\varphi_0 + \\frac{\\pi}{2}\\right)$$",
          "• Vận tốc biến thiên điều hòa cùng tần số nhưng <strong>sớm pha $\\frac{\\pi}{2}$</strong> so với li độ $x$.",
          "• <strong>Ở vị trí cân bằng ($x = 0$):</strong> Tốc độ đạt cực đại $|v|_{\\max} = v_{\\max} = \\omega A$.",
          "• <strong>Ở hai vị trí biên ($x = \\pm A$):</strong> Vận tốc bằng không ($v = 0$).",
          "• <strong>Hệ thức độc lập thời gian $(x, v)$:</strong> $$\\left(\\frac{x}{A}\\right)^2 + \\left(\\frac{v}{\\omega A}\\right)^2 = 1 \\iff A^2 = x^2 + \\frac{v^2}{\\omega^2} \\iff v = \\pm\\omega\\sqrt{A^2 - x^2}$$"
        ]
      },
      {
        heading: "2. Gia tốc trong dao động điều hòa",
        items: [
          "Gia tốc tức thời là đạo hàm của vận tốc theo thời gian (độ dốc đồ thị $v - t$): $$a = \\frac{dv}{dt} = -\\omega^2 A\\cos(\\omega t + \\varphi_0) = -\\omega^2 x = \\omega^2 A\\cos(\\omega t + \\varphi_0 + \\pi)$$",
          "• Gia tốc biến thiên điều hòa cùng tần số, luôn <strong>ngược pha với li độ $x$</strong> và <strong>sớm pha $\\frac{\\pi}{2}$ so với vận tốc $v$</strong>.",
          "• <strong>Chiều của vectơ gia tốc $\\vec{a}$:</strong> Luôn hướng về vị trí cân bằng $O$, độ lớn tỉ lệ với độ lớn của li độ ($|a| = \\omega^2 |x|$).",
          "• <strong>Ở vị trí cân bằng ($x = 0$):</strong> Gia tốc bằng không ($a = 0$).",
          "• <strong>Ở hai vị trí biên ($x = \\pm A$):</strong> Độ lớn gia tốc đạt cực đại $a_{\\max} = \\omega^2 A$."
        ]
      },
      {
        heading: "3. Nhận xét đồ thị x(t), v(t), a(t) và chuyển động nhanh/chậm dần",
        items: [
          "Đồ thị $x(t)$, $v(t)$, $a(t)$ đều là những đường hình sin có cùng chu kì $T$ nhưng khác biên độ và lệch pha nhau từng đôi một.",
          "• Khi vật đi <strong>từ vị trí biên về vị trí cân bằng</strong>: $\\vec{v}$ và $\\vec{a}$ cùng chiều ($v \\cdot a > 0$) $\\Rightarrow$ vật chuyển động <strong>nhanh dần</strong> (nhưng không đều).",
          "• Khi vật đi <strong>từ vị trí cân bằng ra vị trí biên</strong>: $\\vec{v}$ và $\\vec{a}$ ngược chiều ($v \\cdot a < 0$) $\\Rightarrow$ vật chuyển động <strong>chậm dần</strong>."
        ]
      }
    ],
    formulas: [
      { name: "Phương trình vận tốc", eq: "$$v = -\\omega A\\sin(\\omega t + \\varphi_0), \\quad v_{\\max} = \\omega A$$" },
      { name: "Phương trình gia tốc", eq: "$$a = -\\omega^2 x = -\\omega^2 A\\cos(\\omega t + \\varphi_0), \\quad a_{\\max} = \\omega^2 A$$" },
      { name: "Độc lập thời gian (x, v)", eq: "$$x^2 + \\frac{v^2}{\\omega^2} = A^2 \\iff v^2 = \\omega^2(A^2 - x^2)$$" },
      { name: "Độc lập thời gian (v, a)", eq: "$$\\frac{v^2}{\\omega^2 A^2} + \\frac{a^2}{\\omega^4 A^2} = 1 \\iff \\frac{v^2}{v_{\\max}^2} + \\frac{a^2}{a_{\\max}^2} = 1$$" }
    ],
    applications: [
      "Sử dụng cảm biến gia tốc (Accelerometer) trong điện thoại thông minh và túi khí ô tô để đo gia tốc dao động.",
      "Tính toán lực quán tính cực đại tác dụng lên pít-tông và chi tiết máy ở hai điểm chết (vị trí biên)."
    ]
  },
  {
    num: 4,
    chapter: 1,
    title: "Bài tập về dao động điều hòa",
    pages: "tr. 17–19",
    type: "Bài tập",
    subtitle: "Phương pháp giải 4 dạng bài tập cốt lõi: đọc đồ thị, lập phương trình dao động, xác định độ lệch pha và tính (x, v, a).",
    diagramCaption: "Sơ đồ quy trình 4 bước xử lý đồ thị dao động điều hòa và vòng tròn lượng giác đa trục (x, v, a).",
    sections: [
      {
        heading: "1. Dạng 1: Đọc đồ thị (x–t), (v–t), (a–t) và viết phương trình dao động",
        items: [
          "<strong>Quy tắc vàng khi đọc đồ thị:</strong><br>1. Kiểm tra kĩ <strong>tên trục tung</strong> ($x$, $v$ hay $a$) và <strong>đơn vị đo</strong> ($\\text{cm}$ hay $\\text{m}$, $\\text{s}$ hay $\\text{ms}$).<br>2. Đọc giá trị biên cực đại trên trục tung ($A$, $v_{\\max}$ hoặc $a_{\\max}$).<br>3. Đọc khoảng thời gian giữa hai điểm đặc biệt (ví dụ từ biên dương về vị trí cân bằng là $T/4$, từ biên dương sang biên âm là $T/2$, giữa hai đỉnh cùng dấu liên tiếp là $T$) để tính $T$ và $\\omega = \\frac{2\\pi}{T}$.<br>4. Xác định cả <strong>giá trị tại $t = 0$</strong> và <strong>chiều biến thiên của đồ thị ngay sau $t = 0$</strong> (không bao giờ chỉ nhìn một điểm tọa độ mà bỏ qua chiều đi của đồ thị)."
        ]
      },
      {
        heading: "2. Dạng 2: Xác định trạng thái (x, v, a) tại thời điểm t hoặc tại li độ cho trước",
        items: [
          "• <strong>Khi biết thời điểm $t$:</strong> Thay trực tiếp $t$ vào phương trình $x(t)$, $v(t)$, $a(t)$ (nhớ để máy tính ở chế độ Radian – RAD).",
          "• <strong>Khi biết li độ $x$ (không cho $t$):</strong> Dùng ngay hai hệ thức độc lập thời gian: $$a = -\\omega^2 x \\quad \\text{và} \\quad |v| = \\omega\\sqrt{A^2 - x^2}$$",
          "• <strong>Các vị trí đặc biệt hay gặp:</strong><br>– Tại $x = \\pm\\frac{A}{2} \\Rightarrow |v| = \\frac{\\sqrt{3}}{2}v_{\\max}$.<br>– Tại $x = \\pm\\frac{A\\sqrt{2}}{2} \\Rightarrow |v| = \\frac{\\sqrt{2}}{2}v_{\\max}$.<br>– Tại $x = \\pm\\frac{A\\sqrt{3}}{2} \\Rightarrow |v| = \\frac{1}{2}v_{\\max}$."
        ]
      },
      {
        heading: "3. Dạng 3: Tìm biên độ A và tần số góc ω từ hai thời điểm hoặc từ (v_max, a_max)",
        items: [
          "• Nếu đề cho tốc độ cực đại $v_{\\max} = \\omega A$ và gia tốc cực đại $a_{\\max} = \\omega^2 A$: $$\\omega = \\frac{a_{\\max}}{v_{\\max}}, \\qquad A = \\frac{v_{\\max}^2}{a_{\\max}}$$",
          "• Nếu đề cho hai cặp giá trị $(x_1, v_1)$ và $(x_2, v_2)$ tại hai thời điểm khác nhau: $$\\omega = \\sqrt{\\frac{v_1^2 - v_2^2}{x_2^2 - x_1^2}}, \\qquad A = \\sqrt{x_1^2 + \\frac{v_1^2}{\\omega^2}}$$"
        ]
      }
    ],
    formulas: [
      { name: "Tính ω và A từ cực đại", eq: "$$\\omega = \\frac{a_{\\max}}{v_{\\max}}, \\quad A = \\frac{v_{\\max}^2}{a_{\\max}}$$" },
      { name: "Tính ω từ 2 trạng thái", eq: "$$\\omega = \\sqrt{\\frac{v_1^2 - v_2^2}{x_2^2 - x_1^2}}$$" },
      { name: "Vận tốc trung bình & Tốc độ TB", eq: "$$v_{\\text{tb}} = \\frac{\\Delta x}{\\Delta t}, \\quad \\bar{v}_{1T} = \\frac{4A}{T} = \\frac{2}{\\pi}v_{\\max}$$" }
    ],
    applications: [
      "Rèn kỹ năng đọc số liệu từ cảm biến dao động và phân tích pha trong thực nghiệm vật lí.",
      "Tránh sai lầm phổ biến: quên đổi đơn vị $\\text{cm} \\to \\text{m}$ khi tính lực/năng lượng hoặc để máy tính ở chế độ Độ (DEG) thay vì Radian (RAD)."
    ]
  },
  {
    num: 5,
    chapter: 1,
    title: "Động năng. Thế năng. Sự chuyển hóa năng lượng trong dao động điều hòa",
    pages: "tr. 20–23",
    type: "Lí thuyết",
    subtitle: "Biểu thức động năng, thế năng, định luật bảo toàn cơ năng của con lắc lò xo và con lắc đơn dao động góc nhỏ.",
    diagramCaption: "Đồ thị parabol của động năng W_đ, thế năng W_t theo li độ x và sự bảo toàn cơ năng W = 1/2 k A².",
    sections: [
      {
        heading: "1. Động năng, thế năng và cơ năng của con lắc lò xo",
        items: [
          "Xét vật nặng khối lượng $m$ gắn vào lò xo nhẹ độ cứng $k$ dao động điều hòa trên mặt phẳng ngang không ma sát với tần số góc $\\omega = \\sqrt{\\frac{k}{m}}$ và chu kì: $$T = 2\\pi\\sqrt{\\frac{m}{k}}$$",
          "• <strong>Động năng ($W_\\text{đ}$):</strong> $$W_\\text{đ} = \\frac{1}{2}mv^2 = \\frac{1}{2}m\\omega^2 A^2 \\sin^2(\\omega t + \\varphi_0) = W\\sin^2(\\omega t + \\varphi_0)$$",
          "• <strong>Thế năng đàn hồi ($W_\\text{t}$):</strong> Chọn mốc thế năng tại vị trí cân bằng ($x = 0$): $$W_\\text{t} = \\frac{1}{2}kx^2 = \\frac{1}{2}m\\omega^2 x^2 = \\frac{1}{2}kA^2 \\cos^2(\\omega t + \\varphi_0) = W\\cos^2(\\omega t + \\varphi_0)$$",
          "• <strong>Cơ năng ($W$):</strong> Khi bỏ qua mọi ma sát, cơ năng của con lắc được bảo toàn và tỉ lệ với bình phương biên độ dao động: $$W = W_\\text{đ} + W_\\text{t} = \\frac{1}{2}kA^2 = \\frac{1}{2}m\\omega^2 A^2 = \\frac{1}{2}mv_{\\max}^2 = \\text{hằng số}$$"
        ]
      },
      {
        heading: "2. Sự chuyển hóa năng lượng trong quá trình dao động",
        items: [
          "• <strong>Khi vật đi từ vị trí cân bằng ra biên:</strong> Tốc độ giảm, $|x|$ tăng $\\Rightarrow$ Động năng giảm dần và chuyển hóa thành thế năng đàn hồi.",
          "• <strong>Khi vật đi từ vị trí biên về vị trí cân bằng:</strong> $|x|$ giảm, tốc độ tăng $\\Rightarrow$ Thế năng giảm dần và chuyển hóa ngược lại thành động năng.",
          "• <strong>Ở vị trí cân bằng ($x = 0$):</strong> $W_\\text{t} = 0$, $W_\\text{đ} = W_{\\max} = W$.",
          "• <strong>Ở hai vị trí biên ($x = \\pm A$):</strong> $W_\\text{đ} = 0$, $W_\\text{t} = W_{\\max} = W$.",
          "• <strong>Chu kì biến thiên của $W_\\text{đ}$ và $W_\\text{t}$:</strong> Động năng và thế năng biến thiên tuần hoàn với tần số góc $\\omega' = 2\\omega$, tần số $f' = 2f$ và chu kì $T' = \\frac{T}{2}$."
        ]
      },
      {
        heading: "3. Con lắc đơn dao động điều hòa với góc lệch nhỏ",
        items: [
          "Con lắc đơn gồm vật nhỏ khối lượng $m$ treo ở đầu sợi dây mảnh không dãn chiều dài $l$ tại nơi có gia tốc trọng trường $g$.",
          "Khi góc lệch cực đại nhỏ ($\\alpha_0 \\le 10^\\circ$ hay $\\approx 0,175\\text{ rad}$), con lắc đơn dao động điều hòa với tần số góc $\\omega = \\sqrt{\\frac{g}{l}}$ và chu kì: $$T = 2\\pi\\sqrt{\\frac{l}{g}}$$",
          "Chọn mốc thế năng tại vị trí cân bằng (vị trí thấp nhất của vật), thế năng trọng trường của con lắc đơn ở li độ góc $\\alpha$ (tính bằng rad) và li độ cong $s = l\\alpha$ là: $$W_\\text{t} = mgl(1 - \\cos\\alpha) \\approx \\frac{1}{2}mgl\\alpha^2 = \\frac{1}{2}m\\omega^2 s^2$$",
          "Cơ năng của con lắc đơn (bỏ qua lực cản): $$W = W_\\text{đ} + W_\\text{t} = \\frac{1}{2}mv^2 + mgl(1 - \\cos\\alpha) = mgl(1 - \\cos\\alpha_0) \\approx \\frac{1}{2}mgl\\alpha_0^2$$"
        ]
      }
    ],
    formulas: [
      { name: "Cơ năng con lắc lò xo", eq: "$$W = W_\\text{đ} + W_\\text{t} = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2 = \\frac{1}{2}kA^2 = \\frac{1}{2}m\\omega^2 A^2$$" },
      { name: "Chu kì con lắc lò xo", eq: "$$T = 2\\pi\\sqrt{\\frac{m}{k}}, \\quad k = m\\omega^2$$" },
      { name: "Chu kì con lắc đơn", eq: "$$T = 2\\pi\\sqrt{\\frac{l}{g}}, \\quad \\omega = \\sqrt{\\frac{g}{l}}$$" },
      { name: "Thế năng con lắc đơn góc nhỏ", eq: "$$W_\\text{t} \\approx \\frac{1}{2}mgl\\alpha^2 \\quad (\\alpha \\text{ tính bằng rad})$$" }
    ],
    applications: [
      "Ứng dụng con lắc đơn để đo gia tốc rơi tự do $g$ tại các vị trí địa lí khác nhau trên Trái Đất.",
      "Thiết kế hệ thống lò xo tích trữ và giải phóng cơ năng đàn hồi trong cơ khí."
    ]
  },
  {
    num: 6,
    chapter: 1,
    title: "Dao động tắt dần. Dao động cưỡng bức. Hiện tượng cộng hưởng",
    pages: "tr. 24–27",
    type: "Lí thuyết",
    subtitle: "Phân biệt dao động tự do, dao động tắt dần, dao động cưỡng bức và điều kiện xảy ra hiện tượng cộng hưởng cơ.",
    diagramCaption: "Đồ thị dao động tắt dần theo thời gian và đường cong cộng hưởng phụ thuộc vào lực cản môi trường.",
    sections: [
      {
        heading: "1. Dao động tự do và Dao động tắt dần",
        items: [
          "<strong>Dao động tự do (dao động riêng):</strong> Là dao động của hệ chỉ xảy ra dưới tác dụng của nội lực sau kích thích ban đầu. Chu kì và tần số của dao động tự do chỉ phụ thuộc vào đặc tính cấu tạo riêng của hệ, gọi là <em>tần số riêng $f_0$</em> (ví dụ $f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$).",
          "<strong>Dao động tắt dần:</strong> Là dao động có <strong>biên độ và cơ năng giảm dần theo thời gian</strong>.",
          "• <em>Nguyên nhân:</em> Do lực ma sát và lực cản của môi trường sinh công âm, làm cơ năng của vật chuyển hóa dần thành nhiệt năng.",
          "• <em>Đặc điểm:</em> Lực cản của môi trường càng lớn thì dao động tắt dần càng nhanh. Nếu lực cản quá lớn, vật chỉ trở về vị trí cân bằng mà không dao động.",
          "• <em>Ứng dụng có lợi & có hại:</em> Có hại khi cần duy trì dao động của quả lắc đồng hồ; có lợi trong thiết bị <strong>giảm xóc ô tô, xe máy</strong> và cơ cấu đóng cửa tự động bằng thủy lực."
        ]
      },
      {
        heading: "2. Dao động cưỡng bức",
        items: [
          "<strong>Khái niệm:</strong> Dao động cưỡng bức là dao động của hệ chịu tác dụng của một ngoại lực biến thiên tuần hoàn theo thời gian: $F = F_0\\cos(2\\pi f t + \\varphi)$.",
          "<strong>Đặc điểm của dao động cưỡng bức ở giai đoạn ổn định:</strong><br>• Dao động cưỡng bức là dao động điều hòa có <strong>tần số bằng tần số $f$ của ngoại lực cưỡng bức</strong> (không phải tần số riêng $f_0$).<br>• <strong>Biên độ của dao động cưỡng bức</strong> không đổi theo thời gian và phụ thuộc vào 3 yếu tố:<br>  (1) Biên độ $F_0$ của ngoại lực cưỡng bức ($F_0$ càng lớn thì biên độ càng lớn);<br>  (2) Lực cản của môi trường (lực cản càng nhỏ thì biên độ càng lớn);<br>  (3) Độ chênh lệch $|f - f_0|$ giữa tần số ngoại lực $f$ và tần số riêng $f_0$ của hệ ($|f - f_0|$ càng nhỏ thì biên độ càng lớn)."
        ]
      },
      {
        heading: "3. Hiện tượng cộng hưởng",
        items: [
          "<strong>Định nghĩa:</strong> Hiện tượng biên độ của dao động cưỡng bức tăng nhanh đến giá trị cực đại khi tần số $f$ của lực cưỡng bức tiến đến bằng tần số riêng $f_0$ của hệ dao động được gọi là <strong>hiện tượng cộng hưởng</strong>.",
          "<strong>Điều kiện cộng hưởng:</strong> $$f = f_0 \\iff \\omega = \\omega_0 \\iff T = T_0$$",
          "• Đường cong biểu diễn sự phụ thuộc của biên độ cưỡng bức $A$ vào tần số ngoại lực $f$ gọi là <em>đường cong cộng hưởng</em>. Khi lực cản môi trường càng nhỏ, đỉnh cộng hưởng càng cao và nhọn (cộng hưởng càng sắc nét).",
          "• <strong>Thí nghiệm hệ nhiều con lắc đơn treo trên thanh căng ngang (con lắc Barton):</strong> Khi kích thích con lắc điều khiển $X$ dao động, con lắc nào có chiều dài bằng chiều dài con lắc $X$ (nên có $f_0 = f_X$) sẽ xảy ra cộng hưởng và dao động với biên độ mạnh nhất.",
          "• <strong>Lợi ích và tác hại của cộng hưởng:</strong><br>– <em>Có lợi:</em> Hộp cộng hưởng của đàn ghi-ta, vi-ô-lông; buồng cộng hưởng vi sóng trong lò vi sóng; mạch chọn sóng thu thanh/truyền hình; chụp cộng hưởng từ hạt nhân (MRI).<br>– <em>Có hại:</em> Cầu đường, tòa nhà cao tầng, bệ máy công nghiệp, khung máy bay nếu chịu ngoại lực tuần hoàn (gió xoáy, nhịp bước chân đều của đoàn quân, vòng quay động cơ) trùng với tần số riêng $f_0$ sẽ rung lắc dữ dội và có thể gãy sập (như sự cố sập cầu Tacoma năm 1940 hay cầu Bến Thủy/cầu treo)."
        ]
      }
    ],
    formulas: [
      { name: "Tần số dao động cưỡng bức", eq: "$$f_{\\text{cưỡng bức}} = f_{\\text{ngoại lực}}$$" },
      { name: "Điều kiện cộng hưởng", eq: "$$f = f_0 \\iff \\omega = \\omega_0 \\iff T = T_0$$" },
      { name: "Chiều dài con lắc cộng hưởng", eq: "$$l = l_0 \\implies T = 2\\pi\\sqrt{\\frac{l_0}{g}}$$" }
    ],
    applications: [
      "Thiết kế giảm chấn khối lượng (Tuned Mass Damper – quả cầu nặng hàng trăm tấn treo trên đỉnh tòa nhà chọc trời Taipei 101) để triệt tiêu cộng hưởng khi có bão hoặc động đất.",
      "Chế tạo hộp đàn gỗ rỗng của các nhạc cụ dây để khuếch đại âm thanh tự nhiên."
    ]
  },
  {
    num: 7,
    chapter: 1,
    title: "Bài tập về sự chuyển hóa năng lượng trong dao động điều hòa",
    pages: "tr. 28–30",
    type: "Bài tập",
    subtitle: "Vận dụng bảo toàn cơ năng để tìm li độ, vận tốc, tỉ số động năng – thế năng và đọc đồ thị năng lượng theo li độ.",
    diagramCaption: "Các vị trí đặc biệt trên trục li độ Ox theo tỉ số giữa động năng và thế năng (W_đ = n W_t).",
    sections: [
      {
        heading: "1. Dạng 1: Tìm vị trí và vận tốc khi biết tỉ số giữa Động năng và Thế năng (W_đ = n W_t)",
        items: [
          "Từ định luật bảo toàn cơ năng $W = W_\\text{đ} + W_\\text{t}$ và giả thiết $W_\\text{đ} = n W_\\text{t}$: $$W = (n + 1)W_\\text{t} \\iff \\frac{1}{2}kA^2 = (n + 1)\\frac{1}{2}kx^2 \\implies x = \\pm\\frac{A}{\\sqrt{n + 1}}$$",
          "Tương tự, vận tốc tại vị trí đó là: $$W = \\frac{n + 1}{n}W_\\text{đ} \\implies v = \\pm\\sqrt{\\frac{n}{n + 1}}\\,v_{\\max}$$",
          "• <strong>Trường hợp đặc biệt hay thi:</strong><br>– Khi $W_\\text{đ} = W_\\text{t}$ ($n = 1$): $x = \\pm\\frac{A}{\\sqrt{2}} = \\pm\\frac{A\\sqrt{2}}{2}$ và $|v| = \\frac{v_{\\max}}{\\sqrt{2}}$. Trong 1 chu kì có 4 lần $W_\\text{đ} = W_\\text{t}$, khoảng thời gian giữa hai lần liên tiếp là $\\Delta t = \\frac{T}{4}$.<br>– Khi $W_\\text{đ} = 3W_\\text{t}$ ($n = 3$): $x = \\pm\\frac{A}{2}$ và $|v| = \\frac{\\sqrt{3}}{2}v_{\\max}$.<br>– Khi $W_\\text{đ} = \\frac{1}{3}W_\\text{t}$ ($n = \\frac{1}{3}$): $x = \\pm\\frac{A\\sqrt{3}}{2}$ và $|v| = \\frac{1}{2}v_{\\max}$."
        ]
      },
      {
        heading: "2. Dạng 2: Đọc đồ thị năng lượng theo li độ x hoặc theo thời gian t",
        items: [
          "• <strong>Trên đồ thị năng lượng theo li độ $(W - x)$:</strong><br>– Đường parabol bề lõm quay lên đi qua gốc $O(0,0)$ là đồ thị thế năng $W_\\text{t}(x) = \\frac{1}{2}kx^2$.<br>– Đường parabol bề lõm quay xuống có đỉnh tại $x = 0$ là đồ thị động năng $W_\\text{đ}(x) = W - \\frac{1}{2}kx^2$.<br>– Giá trị cực đại trên trục tung là cơ năng $W$; giá trị giới hạn trên trục hoành là biên độ $A \\Rightarrow k = \\frac{2W}{A^2}$ (nhớ đổi $A$ ra mét!).<br>– Giao điểm của hai đường parabol ứng với $W_\\text{đ} = W_\\text{t} = \\frac{W}{2}$ tại $x = \\pm\\frac{A}{\\sqrt{2}}$.",
          "• <strong>Trên đồ thị năng lượng theo thời gian $(W - t)$:</strong> Chu kì biến thiên của động năng và thế năng bằng một nửa chu kì dao động của vật: $T_{\\text{năng lượng}} = \\frac{T}{2}$."
        ]
      },
      {
        heading: "3. Dạng 3: Bài toán năng lượng con lắc đơn góc nhỏ và dao động tắt dần",
        items: [
          "• Với con lắc đơn góc nhỏ ($\\alpha_0 \\le 10^\\circ$): $W = \\frac{1}{2}mgl\\alpha_0^2 = \\frac{1}{2}mv^2 + \\frac{1}{2}mgl\\alpha^2 \\Rightarrow v^2 = gl(\\alpha_0^2 - \\alpha^2)$ (với $\\alpha, \\alpha_0$ tính bằng rad; nếu cho độ thì đổi $\\alpha(\\text{rad}) = \\frac{\\pi}{180}\\alpha(^\\circ)$).",
          "• Khi biên độ của con lắc lò xo giảm đi $p\\%$ sau một số dao động do ma sát ($A' = A(1 - p)$), phần cơ năng đã chuyển hóa thành nhiệt là: $$\\Delta W = W - W' = W\\left[1 - \\left(\\frac{A'}{A}\\right)^2\\right]$$"
        ]
      }
    ],
    formulas: [
      { name: "Vị trí W_đ = n W_t", eq: "$$x = \\pm\\frac{A}{\\sqrt{n+1}}, \\quad |v| = \\sqrt{\\frac{n}{n+1}}\\,v_{\\max}$$" },
      { name: "Vị trí W_đ = W_t (n = 1)", eq: "$$x = \\pm\\frac{A\\sqrt{2}}{2}, \\quad \\Delta t_{\\text{liên tiếp}} = \\frac{T}{4}$$" },
      { name: "Tính độ cứng từ đồ thị", eq: "$$k = \\frac{2W}{A^2} \\quad (A \\text{ tính bằng m})$$" },
      { name: "Vận tốc con lắc đơn góc nhỏ", eq: "$$v^2 = gl(\\alpha_0^2 - \\alpha^2) = 2gl(\\cos\\alpha - \\cos\\alpha_0)$$" }
    ],
    applications: [
      "Tính toán phần trăm năng lượng tiêu hao sau mỗi chu kì của hệ giảm chấn.",
      "Xác định tốc độ qua vị trí cân bằng của quả cầu con lắc trong các thí nghiệm va chạm cơ học."
    ]
  },
  {
    num: 8,
    chapter: 2,
    title: "Mô tả sóng",
    pages: "tr. 31–36",
    type: "Lí thuyết",
    subtitle: "Sự hình thành sóng cơ, các đại lượng đặc trưng (A, T, f, v, λ), đồ thị (u–x), (u–t), độ lệch pha và cường độ sóng.",
    diagramCaption: "Đồ thị hình sin của sóng cơ theo không gian (u–x) tại một thời điểm và theo thời gian (u–t) tại một vị trí.",
    sections: [
      {
        heading: "1. Sự hình thành và bản chất của quá trình truyền sóng cơ",
        items: [
          "<strong>Khái niệm sóng cơ:</strong> Sóng cơ là những biến dạng cơ lan truyền trong một môi trường đàn hồi (rắn, lỏng, khí) theo thời gian.",
          "<strong>Cơ chế truyền sóng:</strong> Khi nguồn phát sóng dao động, nhờ có <strong>lực liên kết đàn hồi</strong> giữa các phần tử môi trường mà các phần tử lân cận lần lượt bị kéo vào dao động (phần tử càng xa nguồn thì bắt đầu dao động càng trễ pha hơn).",
          "<strong>Bản chất cốt lõi:</strong> Quá trình truyền sóng là quá trình <strong>truyền pha dao động và truyền năng lượng</strong>, còn <strong>các phần tử vật chất của môi trường chỉ dao động quanh vị trí cân bằng cố định của chúng chứ không truyền đi theo sóng</strong> (ví dụ: miếng xốp hoặc chiếc phao trên mặt nước chỉ nhấp nhô lên xuống tại chỗ khi sóng truyền qua)."
        ]
      },
      {
        heading: "2. Các đại lượng đặc trưng của sóng hình sin",
        items: [
          "• <strong>Biên độ sóng ($A$):</strong> Độ dịch chuyển cực đại của phần tử môi trường khỏi vị trí cân bằng của nó.",
          "• <strong>Chu kì ($T$) và tần số sóng ($f$):</strong> Chính là chu kì và tần số dao động của các phần tử môi trường, selalu bằng chu kì và tần số của nguồn phát sóng ($f = \\frac{1}{T}$). <em>Khi sóng truyền từ môi trường này sang môi trường khác, tần số $f$ và chu kì $T$ không đổi.</em>",
          "• <strong>Tốc độ truyền sóng ($v$):</strong> Là tốc độ lan truyền biến dạng (trạng thái dao động) trong không gian. Tốc độ truyền sóng phụ thuộc vào bản chất của môi trường (tính đàn hồi, mật độ, nhiệt độ): $v_{\\text{rắn}} > v_{\\text{lỏng}} > v_{\\text{khí}}$, không phụ thuộc tần số nguồn trong một môi trường xác định.",
          "• <strong>Bước sóng ($\\lambda$):</strong> Là quãng đường mà sóng truyền đi được trong một chu kì $T$; cũng là khoảng cách giữa hai điểm gần nhau nhất trên cùng một phương truyền sóng mà dao động tại hai điểm đó <strong>cùng pha</strong>: $$\\lambda = vT = \\frac{v}{f} \\iff v = \\lambda f$$"
        ]
      },
      {
        heading: "3. Phân biệt đồ thị (u–x) và đồ thị (u–t), Độ lệch pha và Cường độ sóng",
        items: [
          "• <strong>Đồ thị $(u - x)$ (tại một thời điểm $t$ xác định):</strong> Cho biết hình ảnh thực của sợi dây/mặt sóng trong không gian; khoảng cách ngang giữa hai đỉnh sóng liên tiếp bằng <strong>bước sóng $\\lambda$</strong>.",
          "• <strong>Đồ thị $(u - t)$ (tại một vị trí $x$ xác định):</strong> Biểu diễn sự dao động theo thời gian của một phần tử môi trường; khoảng cách ngang giữa hai đỉnh liên tiếp trên trục thời gian bằng <strong>chu kì $T$</strong>.",
          "• <strong>Độ lệch pha giữa hai điểm trên cùng phương truyền sóng cách nhau khoảng $\\Delta x$:</strong> $$\\Delta\\varphi = \\frac{2\\pi \\Delta x}{\\lambda}$$",
          "• <strong>Cường độ sóng ($I$):</strong> Là năng lượng sóng được truyền qua một đơn vị diện tích đặt vuông góc với phương truyền sóng trong một đơn vị thời gian: $$I = \\frac{E}{S \\cdot \\Delta t} = \\frac{P}{S} \\quad (\\text{đơn vị: W/m}^2)$$"
        ]
      }
    ],
    formulas: [
      { name: "Liên hệ Bước sóng – Tốc độ – Tần số", eq: "$$\\lambda = vT = \\frac{v}{f} \\iff v = \\lambda f$$" },
      { name: "Khoảng cách n đỉnh sóng liên tiếp", eq: "$$L = (n - 1)\\lambda$$" },
      { name: "Độ lệch pha trên phương truyền", eq: "$$\\Delta\\varphi = \\frac{2\\pi \\Delta x}{\\lambda}$$" },
      { name: "Cường độ sóng", eq: "$$I = \\frac{E}{S\\Delta t} = \\frac{P}{S} = \\frac{P}{4\\pi r^2} \\quad (\\text{sóng cầu})$$" }
    ],
    applications: [
      "Tính toán khoảng cách an toàn và cường độ âm của các nguồn loa công suất lớn.",
      "Sử dụng sóng địa chấn để khảo sát cấu trúc các lớp đất đá trong lòng Trái Đất."
    ]
  },
  {
    num: 9,
    chapter: 2,
    title: "Sóng ngang. Sóng dọc. Sự truyền năng lượng của sóng cơ",
    pages: "tr. 37–40",
    type: "Lí thuyết",
    subtitle: "So sánh phương dao động và phương truyền sóng của sóng ngang – sóng dọc, đặc điểm sóng âm và dải tần nghe được.",
    diagramCaption: "Mô hình so sánh sóng ngang trên dây đàn hồi (u ⊥ v) và sóng dọc gồm các vùng nén – dãn trên lò xo (u ∥ v).",
    sections: [
      {
        heading: "1. Sóng ngang",
        items: [
          "<strong>Định nghĩa:</strong> Sóng ngang là sóng trong đó các phần tử của môi trường <strong>dao động theo phương vuông góc với phương truyền sóng</strong>.",
          "<strong>Môi trường truyền:</strong> Sóng ngang truyền được trong chất rắn và trên bề mặt chất lỏng (ví dụ: sóng truyền trên sợi dây đàn hồi, sóng trên mặt nước).",
          "Trên hình ảnh sóng ngang có các <em>đỉnh sóng (gờ lồi)</em> và <em>hõm sóng (đáy sóng)</em> xen kẽ đều đặn."
        ]
      },
      {
        heading: "2. Sóng dọc",
        items: [
          "<strong>Định nghĩa:</strong> Sóng dọc là sóng trong đó các phần tử của môi trường <strong>dao động theo phương trùng (song song) với phương truyền sóng</strong>.",
          "<strong>Môi trường truyền:</strong> Sóng dọc truyền được trong cả 3 môi trường: chất khí, chất lỏng và chất rắn (ví dụ: sóng tạo bởi sự nén – dãn dọc theo trục lò xo, sóng âm truyền trong không khí).",
          "Khi sóng dọc truyền qua, môi trường xuất hiện các <em>vùng nén</em> (mật độ phần tử dày) và <em>vùng dãn</em> (mật độ phần tử thưa) luân phiên nhau; khoảng cách giữa tâm hai vùng nén liên tiếp (hoặc hai vùng dãn liên tiếp) bằng 1 bước sóng $\\lambda$."
        ]
      },
      {
        heading: "3. Quá trình truyền năng lượng của sóng cơ và Sóng âm",
        items: [
          "• Sóng cơ chỉ truyền được trong môi trường vật chất đàn hồi, <strong>không truyền được trong chân không</strong> (khác với sóng điện từ/ánh sáng).",
          "• <strong>Sóng âm:</strong> Khi nguồn âm (màng loa, dây thanh quản, âm thoa) dao động, nó tạo ra các vùng không khí nén – dãn truyền đi dưới dạng sóng dọc, mang năng lượng đến đập vào màng nhĩ làm màng nhĩ dao động, giúp ta cảm nhận được âm thanh.",
          "• <strong>Biên độ và tần số của âm:</strong> Âm có biên độ (cường độ) càng lớn thì nghe càng <strong>to</strong>; âm có tần số càng lớn thì nghe càng <strong>cao (thanh)</strong>, tần số nhỏ thì nghe càng <strong>trầm</strong>.",
          "• <strong>Phân loại sóng âm theo tần số:</strong><br>– <em>Hạ âm ($f < 16\\text{ Hz}$ hoặc $20\\text{ Hz}$):</em> Tai người không nghe được, một số loài như voi, cá voi, chim bồ câu cảm nhận được.<br>– <em>Âm nghe được ($20\\text{ Hz} \\le f \\le 20\\,000\\text{ Hz}$):</em> Giới hạn nghe của tai người bình thường (giảm dần theo tuổi).<br>– <em>Siêu âm ($f > 20\\,000\\text{ Hz}$):</em> Tai người không nghe được; dơi, cá heo, chó sử dụng để định vị; ứng dụng trong siêu âm y học, sonar tàu biển, làm sạch kim hoàn."
        ]
      }
    ],
    formulas: [
      { name: "Dải âm nghe được của tai người", eq: "$$20\\text{ Hz} \\le f \\le 20\\,000\\text{ Hz}$$" },
      { name: "Ánh sáng nhìn thấy (SGK)", eq: "$$0,38\\,\\mu\\text{m} \\le \\lambda \\le 0,76\\,\\mu\\text{m}$$" },
      { name: "Khoảng cách 2 vùng nén liên tiếp", eq: "$$d_{\\text{nén - nén}} = \\lambda = \\frac{v}{f}$$" }
    ],
    applications: [
      "Ứng dụng sóng siêu âm trong chẩn đoán hình ảnh y khoa và dò tìm đàn cá/đo độ sâu đáy biển (Sonar).",
      "Phân tích sóng địa chấn ngang (sóng S) và sóng địa chấn dọc (sóng P) để xác định tâm chấn động đất."
    ]
  },
  {
    num: 10,
    chapter: 2,
    title: "Thực hành: Đo tần số của sóng âm",
    pages: "tr. 41–43",
    type: "Thực hành",
    subtitle: "Sử dụng micro, bộ khuếch đại và dao động kí điện tử để hiển thị đồ thị sóng âm và xác định chu kì, tần số của âm thoa.",
    diagramCaption: "Sơ đồ bố trí thí nghiệm (Âm thoa → Micro → Khuếch đại → Dao động kí) và cách đếm số ô thời gian (SEC/DIV) trên màn hình.",
    sections: [
      {
        heading: "1. Mục tiêu và Dụng cụ thí nghiệm",
        items: [
          "<strong>Mục tiêu:</strong> Biết cách kết nối, điều chỉnh dao động kí điện tử để quan sát đồ thị dao động âm và đo được chu kì $T$, tần số $f$ của sóng âm do âm thoa phát ra.",
          "<strong>Dụng cụ:</strong><br>• Dao động kí điện tử (Oscilloscope) có các nút chỉnh $VOLTS/DIV$ (biên độ điện áp mỗi ô dọc) và $SEC/DIV$ hoặc $TIME/DIV$ (thời gian mỗi ô ngang).<br>• Micro (chuyển dao động cơ của sóng âm thành tín hiệu điện xoay chiều cùng tần số) và bộ khuếch đại tín hiệu.<br>• Âm thoa chuẩn kèm hộp cộng hưởng gỗ và búa cao su; giá đỡ, kẹp và dây nối đồng trục."
        ]
      },
      {
        heading: "2. Quy trình tiến hành thí nghiệm 4 bước",
        items: [
          "• <strong>Bước 1 (Lắp ráp & Cài đặt):</strong> Kết nối micro qua bộ khuếch đại vào cổng tín hiệu đầu vào (CH1) của dao động kí; bật nguồn, chọn chế độ ghép tín hiệu xoay chiều (AC) và chỉnh nút <em>Trigger</em> để hình ảnh sóng đứng yên ổn định trên màn hình.",
          "• <strong>Bước 2 (Kích thích nguồn âm):</strong> Dùng búa cao su gõ nhẹ và dứt khoát vào một nhánh của âm thoa, đặt hộp cộng hưởng hướng về phía micro.",
          "• <strong>Bước 3 (Điều chỉnh thang đo & Đọc số liệu):</strong> Xoay núm $VOLTS/DIV$ để chiều cao hình sin vừa khung màn hình; xoay núm $SEC/DIV$ (ví dụ đặt ở mức $0,5\\text{ ms/ô}$ hoặc $1\\text{ ms/ô}$) sao cho trên màn hình hiện rõ từ $2$ đến $5$ chu kì sóng đầy đủ.",
          "• <strong>Bước 4 (Tính toán chu kì và tần số):</strong> Đếm tổng số ô ngang $n$ ứng với $N$ chu kì sóng liên tiếp. Nếu mỗi ô ngang ứng với thời gian $t_0$ (giá trị nút $SEC/DIV$) thì tổng thời gian của $N$ chu kì là $\\Delta t = n \\cdot t_0$: $$T = \\frac{\\Delta t}{N} = \\frac{n \\cdot t_0}{N} \\implies f = \\frac{1}{T} = \\frac{N}{n \\cdot t_0}$$"
        ]
      },
      {
        heading: "3. Xử lí kết quả, sai số và Lưu ý an toàn phòng thực hành",
        items: [
          "• Lặp lại phép đo $3 - 5$ lần, tính giá trị trung bình $\\bar{f} = \\frac{f_1 + f_2 + \\cdots + f_k}{k}$, sai số tuyệt đối trung bình $\\overline{\\Delta f}$ và ghi kết quả $f = \\bar{f} \\pm \\Delta f$, đối chiếu với tần số chuẩn khắc trên thân âm thoa (thường là $440\\text{ Hz}$ hoặc $512\\text{ Hz}$).",
          "• <strong>An toàn thực hành:</strong> Không gõ âm thoa vào vật cứng kim loại (phải dùng búa cao su); không đưa tín hiệu điện áp vượt quá giới hạn đầu vào của dao động kí; giữ âm lượng vừa phải."
        ]
      }
    ],
    formulas: [
      { name: "Thời gian N chu kì trên màn hình", eq: "$$\\Delta t = n \\times (\\text{SEC/DIV})$$" },
      { name: "Chu kì và Tần số sóng âm", eq: "$$T = \\frac{\\Delta t}{N}, \\quad f = \\frac{1}{T} = \\frac{N}{\\Delta t}$$" },
      { name: "Biểu diễn kết quả đo", eq: "$$f = \\bar{f} \\pm \\Delta f \\quad (\\text{Hz})$$" }
    ],
    applications: [
      "Ứng dụng lên dây đàn nhạc cụ chính xác (nốt La chuẩn $A_4 = 440\\text{ Hz}$) và kiểm định thiết bị âm thanh.",
      "Phân tích dạng sóng tiếng nói và nhịp tim trong các thiết bị đo điện tử y sinh."
    ]
  },
  {
    num: 11,
    chapter: 2,
    title: "Sóng điện từ",
    pages: "tr. 44–47",
    type: "Lí thuyết",
    subtitle: "Bản chất sóng điện từ, tính chất truyền trong chân không và đặc điểm, ứng dụng của 7 vùng trong thang sóng điện từ.",
    diagramCaption: "Mô hình sóng điện từ ngang (E ⊥ B ⊥ v) và Thang phổ sóng điện từ từ Sóng vô tuyến đến Tia Gamma.",
    sections: [
      {
        heading: "1. Bản chất và đặc điểm của sóng điện từ",
        items: [
          "<strong>Định nghĩa:</strong> Sóng điện từ là sự lan truyền trong không gian của điện trường biến thiên và từ trường biến thiên.",
          "<strong>Các tính chất cơ bản của sóng điện từ:</strong><br>• Sóng điện từ <strong>truyền được trong chân không</strong> (khác hoàn toàn với sóng cơ) và trong các môi trường vật chất.<br>• Trong chân không, mọi sóng điện từ đều truyền với cùng tốc độ cực đại bằng tốc độ ánh sáng: $$c \\approx 3,0 \\times 10^8\\text{ m/s}, \\qquad c = \\lambda f \\iff \\lambda = \\frac{c}{f}$$<br>• Sóng điện từ là <strong>sóng ngang</strong>: Tại mỗi điểm trong không gian, vectơ cường độ điện trường $\\vec{E}$ và vectơ cảm ứng từ $\\vec{B}$ luôn vuông góc với nhau và cùng vuông góc với phương truyền sóng $\\vec{v}$ (tạo thành tam diện thuận $\\vec{E}, \\vec{B}, \\vec{v}$). Dao động của $\\vec{E}$ và $\\vec{B}$ tại một điểm luôn <strong>cùng pha</strong>.<br>• Sóng điện từ mang năng lượng; tần số càng cao thì năng lượng photon/bức xạ càng lớn."
        ]
      },
      {
        heading: "2. Thang sóng điện từ (Sắp xếp theo bước sóng giảm dần / tần số tăng dần)",
        items: [
          "Tất cả các bức xạ trong thang sóng điện từ có cùng bản chất vật lí (đều là sóng điện từ), chỉ khác nhau về bước sóng $\\lambda$ (và tần số $f$), dẫn đến tính chất tác dụng và khả năng đâm xuyên khác nhau:",
          "1. <strong>Sóng vô tuyến ($\\lambda$ từ vài $\\text{mm}$ đến hàng chục $\\text{km}$):</strong> Dùng trong phát thanh, truyền hình, thông tin liên lạc vô tuyến.",
          "2. <strong>Sóng vi ba ($\\lambda$ cỡ vài $\\text{mm}$ đến vài chục $\\text{cm}$):</strong> Dùng trong mạng di động, Wifi, hệ thống định vị Radar và lò vi sóng.",
          "3. <strong>Tia hồng ngoại ($0,76\\,\\mu\\text{m} < \\lambda < 1\\text{ mm}$):</strong> Mọi vật có nhiệt độ cao hơn $0\\text{ K}$ đều phát tia hồng ngoại; tác dụng nổi bật là <strong>tác dụng nhiệt</strong>; dùng trong điều khiển từ xa (remote), bếp hồng ngoại, camera nhìn đêm, cảm biến tự động.",
          "4. <strong>Ánh sáng nhìn thấy ($0,38\\,\\mu\\text{m} \\le \\lambda \\le 0,76\\,\\mu\\text{m}$):</strong> Dải quang phổ liên tục từ Đỏ ($\\lambda \\approx 0,76\\,\\mu\\text{m}$) đến Tím ($\\lambda \\approx 0,38\\,\\mu\\text{m}$) mà mắt người cảm nhận được.",
          "5. <strong>Tia tử ngoại – UV ($10\\text{ nm} \\le \\lambda < 380\\text{ nm}$):</strong> Phát ra từ Mặt Trời, hồ quang điện ($T > 2000^\\circ\\text{C}$); kích thích phát quang, diệt khuẩn nước/thực phẩm, tổng hợp vitamin D nhưng phơi nhiễm nhiều gây bỏng da, đục thủy tinh thể.",
          "6. <strong>Tia X – Tia Rơnghen ($10^{-11}\\text{ m} \\le \\lambda \\le 10^{-8}\\text{ m}$):</strong> Có khả năng đâm xuyên mạnh qua mô mềm nhưng bị xương và kim loại cản lại $\\Rightarrow$ dùng chụp X-quang y tế, kiểm tra hành lí sân bay, dò khuyết tật đúc kim loại.",
          "7. <strong>Tia gamma – $\\gamma$ ($\\lambda < 10^{-11}\\text{ m}$):</strong> Sinh ra trong phân rã hạt nhân, có tần số lớn nhất và khả năng đâm xuyên mạnh nhất; dùng trong xạ trị tiêu diệt tế bào ung thư và nghiên cứu hạt nhân."
        ]
      }
    ],
    formulas: [
      { name: "Bước sóng trong chân không", eq: "$$\\lambda = \\frac{c}{f} = cT \\quad (c = 3\\times 10^8\\text{ m/s})$$" },
      { name: "Chiết suất môi trường & Tốc độ", eq: "$$n = \\frac{c}{v} \\implies \\lambda_n = \\frac{\\lambda_0}{n}$$" },
      { name: "Quan hệ pha E và B", eq: "$$\\frac{E}{E_0} = \\frac{B}{B_0} = \\cos(\\omega t - kx)$$" }
    ],
    applications: [
      "Truyền thông vệ tinh, cáp quang, Wifi 5G, chẩn đoán hình ảnh CT/X-quang và khử trùng y tế bằng đèn UV.",
      "<strong>Lưu ý an toàn bức xạ:</strong> Tuyệt đối tuân thủ quy trình che chắn bằng chì/bê tông khi làm việc với tia X, tia gamma và đeo kính chống tia UV."
    ]
  },
  {
    num: 12,
    chapter: 2,
    title: "Giao thoa sóng",
    pages: "tr. 48–51",
    type: "Lí thuyết",
    subtitle: "Điều kiện giao thoa hai nguồn kết hợp, vị trí cực đại – cực tiểu giao thoa sóng cơ và thí nghiệm khe Young về giao thoa ánh sáng.",
    diagramCaption: "Hệ vân giao thoa sóng mặt nước từ hai nguồn kết hợp S₁, S₂ và sơ đồ thí nghiệm giao thoa ánh sáng hai khe Young.",
    sections: [
      {
        heading: "1. Hiện tượng giao thoa của hai sóng mặt nước (Sóng cơ)",
        items: [
          "<strong>Nguồn kết hợp:</strong> Hai nguồn phát sóng có <strong>cùng tần số</strong>, cùng phương dao động và có <strong>độ lệch pha không đổi theo thời gian</strong> gọi là hai nguồn kết hợp.",
          "<strong>Hiện tượng giao thoa:</strong> Là hiện tượng hai sóng kết hợp khi gặp nhau thì tại những điểm xác định trong không gian, chúng luôn tăng cường nhau (biên độ cực đại) hoặc triệt tiêu nhau (biên độ cực tiểu), tạo thành hệ các đường <em>vân giao thoa</em> dạng hypebol ổn định.",
          "<strong>Điều kiện cực đại và cực tiểu tại điểm M (với hai nguồn kết hợp CÙNG PHA):</strong> Gọi $d_1, d_2$ là khoảng cách từ hai nguồn $S_1, S_2$ đến điểm $M$, hiệu đường đi là $\\Delta d = d_2 - d_1$:<br>• <strong>Vị trí cực đại giao thoa</strong> (hai sóng tới $M$ cùng pha, tăng cường nhau): $$\\Delta d = d_2 - d_1 = k\\lambda \\quad (k = 0, \\pm 1, \\pm 2, \\dots)$$<br>• <strong>Vị trí cực tiểu giao thoa</strong> (hai sóng tới $M$ ngược pha, triệt tiêu nhau): $$\\Delta d = d_2 - d_1 = \\left(k + \\frac{1}{2}\\right)\\lambda \\quad (k = 0, \\pm 1, \\pm 2, \\dots)$$",
          "<em>Chú ý quan trọng:</em> Nếu hai nguồn có độ lệch pha ban đầu $\\Delta\\varphi_0 \\ne 0$ (ví dụ ngược pha), vị trí cực đại và cực tiểu sẽ đổi chỗ cho nhau; cần xét tổng độ lệch pha tại $M$."
        ]
      },
      {
        heading: "2. Thí nghiệm Young về giao thoa ánh sáng",
        items: [
          "Chiếu ánh sáng đơn sắc bước sóng $\\lambda$ qua hai khe hẹp song song $F_1, F_2$ cách nhau một khoảng rất nhỏ $a$ (cỡ $\\text{mm}$). Màn quan sát $E$ đặt song song và cách mặt phẳng hai khe một khoảng $D$ ($D \\gg a$, cỡ $\\text{m}$).",
          "Trên màn xuất hiện hệ những vạch sáng (cực đại) và vạch tối (cực tiểu) xen kẽ, song song và cách đều nhau gọi là <strong>hệ vân giao thoa Young</strong>. Hiện tượng này khẳng định ánh sáng có tính chất sóng.",
          "• <strong>Khoảng vân ($i$):</strong> Là khoảng cách giữa hai vân sáng liên tiếp (hoặc hai vân tối liên tiếp): $$i = \\frac{\\lambda D}{a} \\implies \\lambda = \\frac{ia}{D}$$",
          "• <strong>Vị trí vân sáng bậc $k$</strong> (tính từ vân sáng trung tâm $O$ ứng với $k = 0$): $$x_{\\text{sáng}} = k \\cdot i = k\\frac{\\lambda D}{a} \\quad (k = 0, \\pm 1, \\pm 2, \\dots)$$",
          "• <strong>Vị trí vân tối thứ $(k+1)$:</strong> $$x_{\\text{tối}} = \\left(k + \\frac{1}{2}\\right)i = \\left(k + 0,5\\right)\\frac{\\lambda D}{a} \\quad (k = 0, \\pm 1, \\pm 2, \\dots)$$"
        ]
      }
    ],
    formulas: [
      { name: "Cực đại giao thoa cùng pha", eq: "$$d_2 - d_1 = k\\lambda \\quad (k \\in \\mathbb{Z})$$" },
      { name: "Cực tiểu giao thoa cùng pha", eq: "$$d_2 - d_1 = \\left(k + \\frac{1}{2}\\right)\\lambda \\quad (k \\in \\mathbb{Z})$$" },
      { name: "Khoảng vân giao thoa Young", eq: "$$i = \\frac{\\lambda D}{a}, \\quad \\lambda = \\frac{ia}{D}$$" },
      { name: "Tọa độ vân sáng & vân tối", eq: "$$x_\\text{s} = ki, \\qquad x_\\text{t} = (k + 0,5)i$$" }
    ],
    applications: [
      "Đo chính xác bước sóng $\\lambda$ của các nguồn laser và ánh sáng đơn sắc.",
      "Ứng dụng nguyên lí giao thoa triệt tiêu trong tai nghe chống ồn chủ động (Active Noise Cancelling – ANC) và lớp phủ chống phản xạ trên ống kính máy ảnh."
    ]
  },
  {
    num: 13,
    chapter: 2,
    title: "Sóng dừng",
    pages: "tr. 52–54",
    type: "Lí thuyết",
    subtitle: "Sự tạo thành sóng dừng do giao thoa sóng tới và sóng phản xạ; đặc điểm nút – bụng và điều kiện sóng dừng trên dây, trong cột khí.",
    diagramCaption: "Các mode sóng dừng cơ bản và họa âm bậc cao trên dây hai đầu cố định (L = n λ/2) và ống khí một đầu kín, một đầu hở (L = (2n+1)λ/4).",
    sections: [
      {
        heading: "1. Phản xạ sóng và Sự tạo thành sóng dừng",
        items: [
          "• <strong>Phản xạ sóng:</strong> Khi gặp vật cản cố định, sóng phản xạ luôn <strong>ngược pha</strong> với sóng tới tại điểm phản xạ. Khi gặp vật cản tự do, sóng phản xạ luôn <strong>cùng pha</strong> với sóng tới tại điểm phản xạ.",
          "• <strong>Khái niệm sóng dừng:</strong> Là sóng truyền trên sợi dây (hoặc cột khí) trong trường hợp xuất hiện các <strong>nút sóng</strong> và các <strong>bụng sóng</strong> cố định trong không gian, do sự giao thoa giữa sóng tới và sóng phản xạ truyền cùng phương, ngược chiều.",
          "• <strong>Nút sóng:</strong> Là những điểm luôn đứng yên (biên độ dao động bằng $0$).",
          "• <strong>Bụng sóng:</strong> Là những điểm dao động với biên độ cực đại ($A_{\\text{bụng}} = 2A_{\\text{nguồn}}$).",
          "• <strong>Khoảng cách đặc biệt:</strong><br>– Khoảng cách giữa hai nút sóng liên tiếp (hoặc hai bụng sóng liên tiếp) bằng <strong>nửa bước sóng ($\\frac{\\lambda}{2}$)</strong>.<br>– Khoảng cách giữa một nút sóng và một bụng sóng kề nhau bằng <strong>một phần tư bước sóng ($\\frac{\\lambda}{4}$)</strong>."
        ]
      },
      {
        heading: "2. Điều kiện để có sóng dừng trên dây có hai đầu cố định",
        items: [
          "Hai đầu dây $A, B$ cố định đóng vai trò là hai nút sóng. Điều kiện để có sóng dừng trên dây chiều dài $L$ là chiều dài sợi dây phải bằng một số nguyên lần nửa bước sóng: $$L = n\\frac{\\lambda}{2} \\implies f_n = n\\frac{v}{2L} = n f_1 \\quad (n = 1, 2, 3, \\dots)$$",
          "• Trong đó $n$ là <strong>số bó sóng (số bụng sóng)</strong> trên dây; tổng <strong>số nút sóng</strong> (kể cả hai đầu dây) là $(n + 1)$.",
          "• Khi $n = 1$: $L = \\frac{\\lambda_1}{2} \\Rightarrow f_1 = \\frac{v}{2L}$ gọi là <strong>tần số âm cơ bản</strong> (ứng với dây đàn phát ra nốt nhạc chính)."
        ]
      },
      {
        heading: "3. Điều kiện sóng dừng trên dây một đầu cố định, một đầu tự do (hoặc ống khí một đầu kín – một đầu hở)",
        items: [
          "Đầu cố định (đầu ống kín) là một <strong>nút sóng</strong>; đầu tự do (miệng ống hở) là một <strong>bụng sóng</strong>.",
          "Điều kiện để có sóng dừng là chiều dài $L$ của dây (hoặc cột không khí) phải bằng một số lẻ lần một phần tư bước sóng: $$L = (2n + 1)\\frac{\\lambda}{4} = k_{\\text{lẻ}}\\frac{\\lambda}{4} \\implies f_n = (2n + 1)\\frac{v}{4L} \\quad (n = 0, 1, 2, 3, \\dots)$$",
          "• Trên dây (hoặc cột khí) khi đó có $(n + 1)$ bụng sóng và $(n + 1)$ nút sóng."
        ]
      }
    ],
    formulas: [
      { name: "Khoảng cách Nút – Nút & Nút – Bụng", eq: "$$d_{\\text{nút - nút}} = d_{\\text{bụng - bụng}} = \\frac{\\lambda}{2}, \\quad d_{\\text{nút - bụng kề}} = \\frac{\\lambda}{4}$$" },
      { name: "Hai đầu cố định (n bụng, n+1 nút)", eq: "$$L = n\\frac{\\lambda}{2} \\implies f_n = n\\frac{v}{2L} \\quad (n = 1, 2, 3, \\dots)$$" },
      { name: "Một cố định – một tự do", eq: "$$L = (2n + 1)\\frac{\\lambda}{4} \\implies f_n = (2n + 1)\\frac{v}{4L} \\quad (n = 0, 1, 2, \\dots)$$" }
    ],
    applications: [
      "Giải thích nguyên lí tạo nốt nhạc của các nhạc cụ dây (đàn ghi-ta, đàn bầu, piano – hai đầu cố định) và nhạc cụ hơi (sáo, kèn clarinet – cột khí cộng hưởng).",
      "Khi nghệ sĩ bấm phím đàn làm giảm chiều dài $L$ của dây thì tần số $f = \\frac{v}{2L}$ tăng lên, âm phát ra cao hơn."
    ]
  }
];

module.exports = { chapters, lessonsP1 };
