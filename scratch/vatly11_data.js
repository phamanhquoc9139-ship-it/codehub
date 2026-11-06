// Auto-generated Vật Lí 11 Complete Data (4 Chapters, 26 Lessons)
const chapters = [
  {
    "num": 1,
    "roman": "I",
    "title": "Dao động",
    "pages": "Trang 5–30",
    "color": "indigo",
    "icon": "fa-wave-square",
    "lessons": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "summary": "Nghiên cứu dao động điều hòa, các đại lượng đặc trưng (li độ, biên độ, chu kì, tần số, pha), vận tốc – gia tốc, sự chuyển hóa động năng – thế năng và các dao động tắt dần, cưỡng bức, hiện tượng cộng hưởng."
  },
  {
    "num": 2,
    "roman": "II",
    "title": "Sóng",
    "pages": "Trang 31–59",
    "color": "sky",
    "icon": "fa-water",
    "lessons": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ],
    "summary": "Khám phá sự hình thành và truyền sóng cơ, sóng ngang – sóng dọc, sóng âm, thang sóng điện từ, hiện tượng giao thoa sóng cơ và giao thoa ánh sáng Young, sóng dừng và 2 bài thực hành đo tần số/tốc độ truyền âm."
  },
  {
    "num": 3,
    "roman": "III",
    "title": "Điện trường",
    "pages": "Trang 60–89",
    "color": "amber",
    "icon": "fa-bolt",
    "lessons": [
      16,
      17,
      18,
      19,
      20,
      21
    ],
    "summary": "Hệ thống hóa định luật Coulomb, khái niệm điện trường, đường sức điện, điện trường đều, công của lực điện, thế năng điện, điện thế – hiệu điện thế, cấu tạo, ghép tụ và năng lượng của tụ điện."
  },
  {
    "num": 4,
    "roman": "IV",
    "title": "Dòng điện. Mạch điện",
    "pages": "Trang 90–113",
    "color": "emerald",
    "icon": "fa-microchip",
    "lessons": [
      22,
      23,
      24,
      25,
      26
    ],
    "summary": "Làm chủ cường độ dòng điện, tốc độ trôi hạt tải, điện trở và định luật Ohm, sự phụ thuộc của điện trở vào nhiệt độ, nguồn điện – suất điện động, định luật Ohm toàn mạch, công suất điện và thực hành đo suất điện động – điện trở trong của pin."
  }
];
const lessons = [
  {
    "num": 1,
    "chapter": 1,
    "title": "Dao động điều hòa",
    "pages": "tr. 6–9",
    "type": "Lí thuyết",
    "subtitle": "Khái niệm dao động cơ, dao động tuần hoàn, phương trình và các đại lượng đặc trưng của dao động điều hòa.",
    "diagramCaption": "Sơ đồ liên hệ giữa chuyển động tròn đều và hình chiếu dao động điều hòa trên trục Ox cùng đồ thị li độ – thời gian (x–t).",
    "sections": [
      {
        "heading": "1. Khái niệm dao động cơ, dao động tuần hoàn và dao động điều hòa",
        "items": [
          "<strong>Dao động cơ:</strong> Là chuyển động qua lại quanh một vị trí đặc biệt gọi là <em>vị trí cân bằng</em> (ví dụ: chuyển động của quả lắc đồng hồ, vật nặng gắn vào lò xo, chiếc xích đu).",
          "<strong>Dao động tuần hoàn:</strong> Là dao động mà sau những khoảng thời gian bằng nhau (gọi là chu kì), vật trở lại vị trí cũ theo hướng cũ (lặp lại trạng thái chuyển động).",
          "<strong>Dao động điều hòa:</strong> Là dao động trong đó li độ của vật là một hàm côsin (hoặc sin) của thời gian. Đồ thị li độ – thời gian $(x - t)$ của dao động điều hòa là một đường hình sin."
        ]
      },
      {
        "heading": "2. Các đại lượng đặc trưng của dao động điều hòa",
        "items": [
          "<strong>Li độ ($x$):</strong> Độ dịch chuyển có dấu từ vị trí cân bằng đến vị trí của vật tại thời điểm đang xét (đơn vị: $\\text{m}, \\text{cm}$). Ở vị trí cân bằng $x = 0$.",
          "<strong>Biên độ ($A$):</strong> Độ lớn cực đại của li độ ($A = |x|_{\\max}$), luôn dương ($A > 0$). Vật dao động trên quỹ đạo là đoạn thẳng dài $L = 2A$ (giữa hai biên $-A$ và $+A$).",
          "<strong>Chu kì ($T$):</strong> Khoảng thời gian để vật thực hiện được một dao động toàn phần, đơn vị là giây ($\\text{s}$). Nếu trong thời gian $\\Delta t$ vật thực hiện được $N$ dao động toàn phần thì $T = \\frac{\\Delta t}{N}$.",
          "<strong>Tần số ($f$):</strong> Số dao động toàn phần thực hiện được trong một giây, đơn vị là hertz ($\\text{Hz}$): $f = \\frac{1}{T} = \\frac{N}{\\Delta t}$."
        ]
      },
      {
        "heading": "3. Phương trình dao động điều hòa và liên hệ chuyển động tròn đều",
        "items": [
          "<strong>Phương trình li độ:</strong> $$x = A\\cos(\\omega t + \\varphi_0)$$",
          "<strong>Tần số góc ($\\omega$):</strong> Đại lượng liên hệ với chu kì và tần số qua hệ thức: $$\\omega = 2\\pi f = \\frac{2\\pi}{T} \\quad (\\text{đơn vị: rad/s})$$",
          "<strong>Pha của dao động ($\\omega t + \\varphi_0$):</strong> Cho phép xác định trạng thái (vị trí và chiều chuyển động) của vật tại thời điểm $t$ bất kì (đơn vị: $\\text{rad}$).",
          "<strong>Pha ban đầu ($\\varphi_0$):</strong> Cho biết tại thời điểm bắt đầu quan sát ($t = 0$), vật đang ở đâu và chuyển động theo chiều nào (thường chọn $\\varphi_0 \\in [-\\pi, \\pi]$). <em>Lưu ý:</em> Pha là góc (đo bằng radian), không phải li độ.",
          "<strong>Mô hình hình chiếu:</strong> Điểm $P$ chuyển động tròn đều trên đường tròn bán kính $A$ với tốc độ góc $\\omega$ thì hình chiếu $M$ của $P$ xuống đường kính $Ox$ dao động điều hòa với phương trình $x = A\\cos(\\omega t + \\varphi_0)$."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Phương trình li độ",
        "eq": "$$x = A\\cos(\\omega t + \\varphi_0)$$"
      },
      {
        "name": "Tần số góc & Chu kì",
        "eq": "$$\\omega = 2\\pi f = \\frac{2\\pi}{T}, \\quad f = \\frac{1}{T}$$"
      },
      {
        "name": "Chiều dài quỹ đạo",
        "eq": "$$L = 2A$$"
      },
      {
        "name": "Quãng đường trong 1 chu kì",
        "eq": "$$S_{1T} = 4A, \\quad S_{T/2} = 2A$$"
      }
    ],
    "applications": [
      "Ứng dụng con lắc đồng hồ để đo thời gian chính xác nhờ tính tuần hoàn ổn định của dao động.",
      "Khảo sát dao động của màng loa, dây đàn và chuyển động pít-tông trong động cơ đốt trong."
    ]
  },
  {
    "num": 2,
    "chapter": 1,
    "title": "Mô tả dao động điều hòa",
    "pages": "tr. 10–13",
    "type": "Lí thuyết",
    "subtitle": "Cách đọc đồ thị li độ – thời gian (x–t), xác định biên độ, chu kì, pha ban đầu và độ lệch pha giữa hai dao động cùng tần số.",
    "diagramCaption": "Đồ thị hai dao động điều hòa cùng chu kì lệch pha nhau Δφ trên hệ trục (x–t).",
    "sections": [
      {
        "heading": "1. Đọc và khai thác đồ thị li độ – thời gian (x–t)",
        "items": [
          "Đồ thị $(x - t)$ có dạng đường hình sin, cho biết trực quan biên độ $A$, chu kì $T$ và trạng thái dao động ở từng thời điểm.",
          "<strong>Cách xác định các tham số từ đồ thị để lập phương trình:</strong><br>• <em>Bước 1 (Biên độ $A$):</em> Đọc giá trị đỉnh cao nhất trên trục tung $Ox$ ($A = x_{\\max}$).<br>• <em>Bước 2 (Chu kì $T$ và $\\omega$):</em> Xác định khoảng thời gian ngắn nhất giữa hai đỉnh dương liên tiếp (hoặc hai lần liên tiếp vật qua vị trí cân bằng theo cùng một chiều) để suy ra $T$, rồi tính $\\omega = \\frac{2\\pi}{T}$.<br>• <em>Bước 3 (Pha ban đầu $\\varphi_0$):</em> Nhìn tại gốc thời gian $t = 0$, đọc giá trị $x(0) = A\\cos\\varphi_0$ và xét xu hướng đồ thị đi lên ($v > 0 \\Rightarrow \\varphi_0 < 0$) hay đi xuống ($v < 0 \\Rightarrow \\varphi_0 > 0$) để chọn đúng $\\varphi_0 \\in [-\\pi, \\pi]$."
        ]
      },
      {
        "heading": "2. Độ lệch pha giữa hai dao động cùng tần số",
        "items": [
          "Xét hai dao động điều hòa có cùng tần số góc $\\omega$ (cùng chu kì $T$): $x_1 = A_1\\cos(\\omega t + \\varphi_1)$ và $x_2 = A_2\\cos(\\omega t + \\varphi_2)$.",
          "<strong>Độ lệch pha ($\\Delta\\varphi$):</strong> Hiệu số pha của hai dao động không đổi theo thời gian: $$\\Delta\\varphi = \\varphi_1 - \\varphi_2$$",
          "• Nếu $\\varphi_1 > \\varphi_2$: Dao động 1 <strong>sớm pha</strong> hơn dao động 2 một góc $(\\varphi_1 - \\varphi_2)$ (trên đồ thị, đỉnh của dao động 1 xuất hiện sớm hơn về phía trái trục thời gian).",
          "• Nếu $\\varphi_1 < \\varphi_2$: Dao động 1 <strong>trễ pha</strong> hơn dao động 2.",
          "• Nếu $\\Delta\\varphi = 0$ (hoặc $\\Delta\\varphi = k2\\pi$): Hai dao động <strong>cùng pha (đồng pha)</strong> – luôn cùng đạt cực đại hoặc cùng qua vị trí cân bằng theo một chiều tại cùng thời điểm.",
          "• Nếu $\\Delta\\varphi = \\pm\\pi$ (hoặc $\\Delta\\varphi = (2k+1)\\pi$): Hai dao động <strong>ngược pha</strong> – khi dao động này ở biên dương thì dao động kia ở biên âm."
        ]
      },
      {
        "heading": "3. Công thức tính độ lệch pha theo khoảng lệch thời gian Δt",
        "items": [
          "Nếu hai dao động cùng chu kì $T$ đạt cùng một trạng thái tương ứng (ví dụ cùng qua vị trí cân bằng theo chiều dương hoặc cùng đạt đỉnh cực đại) lệch nhau một khoảng thời gian $\\Delta t$, thì độ lớn độ lệch pha là: $$|\\Delta\\varphi| = \\frac{2\\pi |\\Delta t|}{T} = \\omega |\\Delta t|$$"
        ]
      }
    ],
    "formulas": [
      {
        "name": "Tại thời điểm t = 0",
        "eq": "$$x_0 = A\\cos\\varphi_0, \\quad \\begin{cases} v_0 > 0 \\Rightarrow \\varphi_0 < 0 \\\\ v_0 < 0 \\Rightarrow \\varphi_0 > 0 \\end{cases}$$"
      },
      {
        "name": "Độ lệch pha",
        "eq": "$$\\Delta\\varphi = \\varphi_1 - \\varphi_2$$"
      },
      {
        "name": "Lệch pha theo Δt",
        "eq": "$$|\\Delta\\varphi| = \\frac{2\\pi |\\Delta t|}{T}$$"
      }
    ],
    "applications": [
      "So sánh pha của hai tín hiệu điện xoay chiều trên màn hình dao động kí điện tử.",
      "Đồng bộ hóa nhịp dao động của các chi tiết máy cơ khí."
    ]
  },
  {
    "num": 3,
    "chapter": 1,
    "title": "Vận tốc, gia tốc trong dao động điều hòa",
    "pages": "tr. 14–16",
    "type": "Lí thuyết",
    "subtitle": "Phương trình, đồ thị, quan hệ pha và hệ thức độc lập thời gian giữa li độ x, vận tốc v và gia tốc a.",
    "diagramCaption": "So sánh đồ thị x(t), v(t), a(t) theo thời gian và đường elip độc lập thời gian giữa (x, v).",
    "sections": [
      {
        "heading": "1. Vận tốc trong dao động điều hòa",
        "items": [
          "Vận tốc tức thời là đạo hàm bậc nhất của li độ theo thời gian (bằng độ dốc của đồ thị $x - t$ tại thời điểm xét): $$v = \\frac{dx}{dt} = -\\omega A\\sin(\\omega t + \\varphi_0) = \\omega A\\cos\\left(\\omega t + \\varphi_0 + \\frac{\\pi}{2}\\right)$$",
          "• Vận tốc biến thiên điều hòa cùng tần số nhưng <strong>sớm pha $\\frac{\\pi}{2}$</strong> so với li độ $x$.",
          "• <strong>Ở vị trí cân bằng ($x = 0$):</strong> Tốc độ đạt cực đại $|v|_{\\max} = v_{\\max} = \\omega A$.",
          "• <strong>Ở hai vị trí biên ($x = \\pm A$):</strong> Vận tốc bằng không ($v = 0$).",
          "• <strong>Hệ thức độc lập thời gian $(x, v)$:</strong> $$\\left(\\frac{x}{A}\\right)^2 + \\left(\\frac{v}{\\omega A}\\right)^2 = 1 \\iff A^2 = x^2 + \\frac{v^2}{\\omega^2} \\iff v = \\pm\\omega\\sqrt{A^2 - x^2}$$"
        ]
      },
      {
        "heading": "2. Gia tốc trong dao động điều hòa",
        "items": [
          "Gia tốc tức thời là đạo hàm của vận tốc theo thời gian (độ dốc đồ thị $v - t$): $$a = \\frac{dv}{dt} = -\\omega^2 A\\cos(\\omega t + \\varphi_0) = -\\omega^2 x = \\omega^2 A\\cos(\\omega t + \\varphi_0 + \\pi)$$",
          "• Gia tốc biến thiên điều hòa cùng tần số, luôn <strong>ngược pha với li độ $x$</strong> và <strong>sớm pha $\\frac{\\pi}{2}$ so với vận tốc $v$</strong>.",
          "• <strong>Chiều của vectơ gia tốc $\\vec{a}$:</strong> Luôn hướng về vị trí cân bằng $O$, độ lớn tỉ lệ với độ lớn của li độ ($|a| = \\omega^2 |x|$).",
          "• <strong>Ở vị trí cân bằng ($x = 0$):</strong> Gia tốc bằng không ($a = 0$).",
          "• <strong>Ở hai vị trí biên ($x = \\pm A$):</strong> Độ lớn gia tốc đạt cực đại $a_{\\max} = \\omega^2 A$."
        ]
      },
      {
        "heading": "3. Nhận xét đồ thị x(t), v(t), a(t) và chuyển động nhanh/chậm dần",
        "items": [
          "Đồ thị $x(t)$, $v(t)$, $a(t)$ đều là những đường hình sin có cùng chu kì $T$ nhưng khác biên độ và lệch pha nhau từng đôi một.",
          "• Khi vật đi <strong>từ vị trí biên về vị trí cân bằng</strong>: $\\vec{v}$ và $\\vec{a}$ cùng chiều ($v \\cdot a > 0$) $\\Rightarrow$ vật chuyển động <strong>nhanh dần</strong> (nhưng không đều).",
          "• Khi vật đi <strong>từ vị trí cân bằng ra vị trí biên</strong>: $\\vec{v}$ và $\\vec{a}$ ngược chiều ($v \\cdot a < 0$) $\\Rightarrow$ vật chuyển động <strong>chậm dần</strong>."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Phương trình vận tốc",
        "eq": "$$v = -\\omega A\\sin(\\omega t + \\varphi_0), \\quad v_{\\max} = \\omega A$$"
      },
      {
        "name": "Phương trình gia tốc",
        "eq": "$$a = -\\omega^2 x = -\\omega^2 A\\cos(\\omega t + \\varphi_0), \\quad a_{\\max} = \\omega^2 A$$"
      },
      {
        "name": "Độc lập thời gian (x, v)",
        "eq": "$$x^2 + \\frac{v^2}{\\omega^2} = A^2 \\iff v^2 = \\omega^2(A^2 - x^2)$$"
      },
      {
        "name": "Độc lập thời gian (v, a)",
        "eq": "$$\\frac{v^2}{\\omega^2 A^2} + \\frac{a^2}{\\omega^4 A^2} = 1 \\iff \\frac{v^2}{v_{\\max}^2} + \\frac{a^2}{a_{\\max}^2} = 1$$"
      }
    ],
    "applications": [
      "Sử dụng cảm biến gia tốc (Accelerometer) trong điện thoại thông minh và túi khí ô tô để đo gia tốc dao động.",
      "Tính toán lực quán tính cực đại tác dụng lên pít-tông và chi tiết máy ở hai điểm chết (vị trí biên)."
    ]
  },
  {
    "num": 4,
    "chapter": 1,
    "title": "Bài tập về dao động điều hòa",
    "pages": "tr. 17–19",
    "type": "Bài tập",
    "subtitle": "Phương pháp giải 4 dạng bài tập cốt lõi: đọc đồ thị, lập phương trình dao động, xác định độ lệch pha và tính (x, v, a).",
    "diagramCaption": "Sơ đồ quy trình 4 bước xử lý đồ thị dao động điều hòa và vòng tròn lượng giác đa trục (x, v, a).",
    "sections": [
      {
        "heading": "1. Dạng 1: Đọc đồ thị (x–t), (v–t), (a–t) và viết phương trình dao động",
        "items": [
          "<strong>Quy tắc vàng khi đọc đồ thị:</strong><br>1. Kiểm tra kĩ <strong>tên trục tung</strong> ($x$, $v$ hay $a$) và <strong>đơn vị đo</strong> ($\\text{cm}$ hay $\\text{m}$, $\\text{s}$ hay $\\text{ms}$).<br>2. Đọc giá trị biên cực đại trên trục tung ($A$, $v_{\\max}$ hoặc $a_{\\max}$).<br>3. Đọc khoảng thời gian giữa hai điểm đặc biệt (ví dụ từ biên dương về vị trí cân bằng là $T/4$, từ biên dương sang biên âm là $T/2$, giữa hai đỉnh cùng dấu liên tiếp là $T$) để tính $T$ và $\\omega = \\frac{2\\pi}{T}$.<br>4. Xác định cả <strong>giá trị tại $t = 0$</strong> và <strong>chiều biến thiên của đồ thị ngay sau $t = 0$</strong> (không bao giờ chỉ nhìn một điểm tọa độ mà bỏ qua chiều đi của đồ thị)."
        ]
      },
      {
        "heading": "2. Dạng 2: Xác định trạng thái (x, v, a) tại thời điểm t hoặc tại li độ cho trước",
        "items": [
          "• <strong>Khi biết thời điểm $t$:</strong> Thay trực tiếp $t$ vào phương trình $x(t)$, $v(t)$, $a(t)$ (nhớ để máy tính ở chế độ Radian – RAD).",
          "• <strong>Khi biết li độ $x$ (không cho $t$):</strong> Dùng ngay hai hệ thức độc lập thời gian: $$a = -\\omega^2 x \\quad \\text{và} \\quad |v| = \\omega\\sqrt{A^2 - x^2}$$",
          "• <strong>Các vị trí đặc biệt hay gặp:</strong><br>– Tại $x = \\pm\\frac{A}{2} \\Rightarrow |v| = \\frac{\\sqrt{3}}{2}v_{\\max}$.<br>– Tại $x = \\pm\\frac{A\\sqrt{2}}{2} \\Rightarrow |v| = \\frac{\\sqrt{2}}{2}v_{\\max}$.<br>– Tại $x = \\pm\\frac{A\\sqrt{3}}{2} \\Rightarrow |v| = \\frac{1}{2}v_{\\max}$."
        ]
      },
      {
        "heading": "3. Dạng 3: Tìm biên độ A và tần số góc ω từ hai thời điểm hoặc từ (v_max, a_max)",
        "items": [
          "• Nếu đề cho tốc độ cực đại $v_{\\max} = \\omega A$ và gia tốc cực đại $a_{\\max} = \\omega^2 A$: $$\\omega = \\frac{a_{\\max}}{v_{\\max}}, \\qquad A = \\frac{v_{\\max}^2}{a_{\\max}}$$",
          "• Nếu đề cho hai cặp giá trị $(x_1, v_1)$ và $(x_2, v_2)$ tại hai thời điểm khác nhau: $$\\omega = \\sqrt{\\frac{v_1^2 - v_2^2}{x_2^2 - x_1^2}}, \\qquad A = \\sqrt{x_1^2 + \\frac{v_1^2}{\\omega^2}}$$"
        ]
      }
    ],
    "formulas": [
      {
        "name": "Tính ω và A từ cực đại",
        "eq": "$$\\omega = \\frac{a_{\\max}}{v_{\\max}}, \\quad A = \\frac{v_{\\max}^2}{a_{\\max}}$$"
      },
      {
        "name": "Tính ω từ 2 trạng thái",
        "eq": "$$\\omega = \\sqrt{\\frac{v_1^2 - v_2^2}{x_2^2 - x_1^2}}$$"
      },
      {
        "name": "Vận tốc trung bình & Tốc độ TB",
        "eq": "$$v_{\\text{tb}} = \\frac{\\Delta x}{\\Delta t}, \\quad \\bar{v}_{1T} = \\frac{4A}{T} = \\frac{2}{\\pi}v_{\\max}$$"
      }
    ],
    "applications": [
      "Rèn kỹ năng đọc số liệu từ cảm biến dao động và phân tích pha trong thực nghiệm vật lí.",
      "Tránh sai lầm phổ biến: quên đổi đơn vị $\\text{cm} \\to \\text{m}$ khi tính lực/năng lượng hoặc để máy tính ở chế độ Độ (DEG) thay vì Radian (RAD)."
    ]
  },
  {
    "num": 5,
    "chapter": 1,
    "title": "Động năng. Thế năng. Sự chuyển hóa năng lượng trong dao động điều hòa",
    "pages": "tr. 20–23",
    "type": "Lí thuyết",
    "subtitle": "Biểu thức động năng, thế năng, định luật bảo toàn cơ năng của con lắc lò xo và con lắc đơn dao động góc nhỏ.",
    "diagramCaption": "Đồ thị parabol của động năng W_đ, thế năng W_t theo li độ x và sự bảo toàn cơ năng W = 1/2 k A².",
    "sections": [
      {
        "heading": "1. Động năng, thế năng và cơ năng của con lắc lò xo",
        "items": [
          "Xét vật nặng khối lượng $m$ gắn vào lò xo nhẹ độ cứng $k$ dao động điều hòa trên mặt phẳng ngang không ma sát với tần số góc $\\omega = \\sqrt{\\frac{k}{m}}$ và chu kì: $$T = 2\\pi\\sqrt{\\frac{m}{k}}$$",
          "• <strong>Động năng ($W_\\text{đ}$):</strong> $$W_\\text{đ} = \\frac{1}{2}mv^2 = \\frac{1}{2}m\\omega^2 A^2 \\sin^2(\\omega t + \\varphi_0) = W\\sin^2(\\omega t + \\varphi_0)$$",
          "• <strong>Thế năng đàn hồi ($W_\\text{t}$):</strong> Chọn mốc thế năng tại vị trí cân bằng ($x = 0$): $$W_\\text{t} = \\frac{1}{2}kx^2 = \\frac{1}{2}m\\omega^2 x^2 = \\frac{1}{2}kA^2 \\cos^2(\\omega t + \\varphi_0) = W\\cos^2(\\omega t + \\varphi_0)$$",
          "• <strong>Cơ năng ($W$):</strong> Khi bỏ qua mọi ma sát, cơ năng của con lắc được bảo toàn và tỉ lệ với bình phương biên độ dao động: $$W = W_\\text{đ} + W_\\text{t} = \\frac{1}{2}kA^2 = \\frac{1}{2}m\\omega^2 A^2 = \\frac{1}{2}mv_{\\max}^2 = \\text{hằng số}$$"
        ]
      },
      {
        "heading": "2. Sự chuyển hóa năng lượng trong quá trình dao động",
        "items": [
          "• <strong>Khi vật đi từ vị trí cân bằng ra biên:</strong> Tốc độ giảm, $|x|$ tăng $\\Rightarrow$ Động năng giảm dần và chuyển hóa thành thế năng đàn hồi.",
          "• <strong>Khi vật đi từ vị trí biên về vị trí cân bằng:</strong> $|x|$ giảm, tốc độ tăng $\\Rightarrow$ Thế năng giảm dần và chuyển hóa ngược lại thành động năng.",
          "• <strong>Ở vị trí cân bằng ($x = 0$):</strong> $W_\\text{t} = 0$, $W_\\text{đ} = W_{\\max} = W$.",
          "• <strong>Ở hai vị trí biên ($x = \\pm A$):</strong> $W_\\text{đ} = 0$, $W_\\text{t} = W_{\\max} = W$.",
          "• <strong>Chu kì biến thiên của $W_\\text{đ}$ và $W_\\text{t}$:</strong> Động năng và thế năng biến thiên tuần hoàn với tần số góc $\\omega' = 2\\omega$, tần số $f' = 2f$ và chu kì $T' = \\frac{T}{2}$."
        ]
      },
      {
        "heading": "3. Con lắc đơn dao động điều hòa với góc lệch nhỏ",
        "items": [
          "Con lắc đơn gồm vật nhỏ khối lượng $m$ treo ở đầu sợi dây mảnh không dãn chiều dài $l$ tại nơi có gia tốc trọng trường $g$.",
          "Khi góc lệch cực đại nhỏ ($\\alpha_0 \\le 10^\\circ$ hay $\\approx 0,175\\text{ rad}$), con lắc đơn dao động điều hòa với tần số góc $\\omega = \\sqrt{\\frac{g}{l}}$ và chu kì: $$T = 2\\pi\\sqrt{\\frac{l}{g}}$$",
          "Chọn mốc thế năng tại vị trí cân bằng (vị trí thấp nhất của vật), thế năng trọng trường của con lắc đơn ở li độ góc $\\alpha$ (tính bằng rad) và li độ cong $s = l\\alpha$ là: $$W_\\text{t} = mgl(1 - \\cos\\alpha) \\approx \\frac{1}{2}mgl\\alpha^2 = \\frac{1}{2}m\\omega^2 s^2$$",
          "Cơ năng của con lắc đơn (bỏ qua lực cản): $$W = W_\\text{đ} + W_\\text{t} = \\frac{1}{2}mv^2 + mgl(1 - \\cos\\alpha) = mgl(1 - \\cos\\alpha_0) \\approx \\frac{1}{2}mgl\\alpha_0^2$$"
        ]
      }
    ],
    "formulas": [
      {
        "name": "Cơ năng con lắc lò xo",
        "eq": "$$W = W_\\text{đ} + W_\\text{t} = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2 = \\frac{1}{2}kA^2 = \\frac{1}{2}m\\omega^2 A^2$$"
      },
      {
        "name": "Chu kì con lắc lò xo",
        "eq": "$$T = 2\\pi\\sqrt{\\frac{m}{k}}, \\quad k = m\\omega^2$$"
      },
      {
        "name": "Chu kì con lắc đơn",
        "eq": "$$T = 2\\pi\\sqrt{\\frac{l}{g}}, \\quad \\omega = \\sqrt{\\frac{g}{l}}$$"
      },
      {
        "name": "Thế năng con lắc đơn góc nhỏ",
        "eq": "$$W_\\text{t} \\approx \\frac{1}{2}mgl\\alpha^2 \\quad (\\alpha \\text{ tính bằng rad})$$"
      }
    ],
    "applications": [
      "Ứng dụng con lắc đơn để đo gia tốc rơi tự do $g$ tại các vị trí địa lí khác nhau trên Trái Đất.",
      "Thiết kế hệ thống lò xo tích trữ và giải phóng cơ năng đàn hồi trong cơ khí."
    ]
  },
  {
    "num": 6,
    "chapter": 1,
    "title": "Dao động tắt dần. Dao động cưỡng bức. Hiện tượng cộng hưởng",
    "pages": "tr. 24–27",
    "type": "Lí thuyết",
    "subtitle": "Phân biệt dao động tự do, dao động tắt dần, dao động cưỡng bức và điều kiện xảy ra hiện tượng cộng hưởng cơ.",
    "diagramCaption": "Đồ thị dao động tắt dần theo thời gian và đường cong cộng hưởng phụ thuộc vào lực cản môi trường.",
    "sections": [
      {
        "heading": "1. Dao động tự do và Dao động tắt dần",
        "items": [
          "<strong>Dao động tự do (dao động riêng):</strong> Là dao động của hệ chỉ xảy ra dưới tác dụng của nội lực sau kích thích ban đầu. Chu kì và tần số của dao động tự do chỉ phụ thuộc vào đặc tính cấu tạo riêng của hệ, gọi là <em>tần số riêng $f_0$</em> (ví dụ $f_0 = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}$).",
          "<strong>Dao động tắt dần:</strong> Là dao động có <strong>biên độ và cơ năng giảm dần theo thời gian</strong>.",
          "• <em>Nguyên nhân:</em> Do lực ma sát và lực cản của môi trường sinh công âm, làm cơ năng của vật chuyển hóa dần thành nhiệt năng.",
          "• <em>Đặc điểm:</em> Lực cản của môi trường càng lớn thì dao động tắt dần càng nhanh. Nếu lực cản quá lớn, vật chỉ trở về vị trí cân bằng mà không dao động.",
          "• <em>Ứng dụng có lợi & có hại:</em> Có hại khi cần duy trì dao động của quả lắc đồng hồ; có lợi trong thiết bị <strong>giảm xóc ô tô, xe máy</strong> và cơ cấu đóng cửa tự động bằng thủy lực."
        ]
      },
      {
        "heading": "2. Dao động cưỡng bức",
        "items": [
          "<strong>Khái niệm:</strong> Dao động cưỡng bức là dao động của hệ chịu tác dụng của một ngoại lực biến thiên tuần hoàn theo thời gian: $F = F_0\\cos(2\\pi f t + \\varphi)$.",
          "<strong>Đặc điểm của dao động cưỡng bức ở giai đoạn ổn định:</strong><br>• Dao động cưỡng bức là dao động điều hòa có <strong>tần số bằng tần số $f$ của ngoại lực cưỡng bức</strong> (không phải tần số riêng $f_0$).<br>• <strong>Biên độ của dao động cưỡng bức</strong> không đổi theo thời gian và phụ thuộc vào 3 yếu tố:<br>  (1) Biên độ $F_0$ của ngoại lực cưỡng bức ($F_0$ càng lớn thì biên độ càng lớn);<br>  (2) Lực cản của môi trường (lực cản càng nhỏ thì biên độ càng lớn);<br>  (3) Độ chênh lệch $|f - f_0|$ giữa tần số ngoại lực $f$ và tần số riêng $f_0$ của hệ ($|f - f_0|$ càng nhỏ thì biên độ càng lớn)."
        ]
      },
      {
        "heading": "3. Hiện tượng cộng hưởng",
        "items": [
          "<strong>Định nghĩa:</strong> Hiện tượng biên độ của dao động cưỡng bức tăng nhanh đến giá trị cực đại khi tần số $f$ của lực cưỡng bức tiến đến bằng tần số riêng $f_0$ của hệ dao động được gọi là <strong>hiện tượng cộng hưởng</strong>.",
          "<strong>Điều kiện cộng hưởng:</strong> $$f = f_0 \\iff \\omega = \\omega_0 \\iff T = T_0$$",
          "• Đường cong biểu diễn sự phụ thuộc của biên độ cưỡng bức $A$ vào tần số ngoại lực $f$ gọi là <em>đường cong cộng hưởng</em>. Khi lực cản môi trường càng nhỏ, đỉnh cộng hưởng càng cao và nhọn (cộng hưởng càng sắc nét).",
          "• <strong>Thí nghiệm hệ nhiều con lắc đơn treo trên thanh căng ngang (con lắc Barton):</strong> Khi kích thích con lắc điều khiển $X$ dao động, con lắc nào có chiều dài bằng chiều dài con lắc $X$ (nên có $f_0 = f_X$) sẽ xảy ra cộng hưởng và dao động với biên độ mạnh nhất.",
          "• <strong>Lợi ích và tác hại của cộng hưởng:</strong><br>– <em>Có lợi:</em> Hộp cộng hưởng của đàn ghi-ta, vi-ô-lông; buồng cộng hưởng vi sóng trong lò vi sóng; mạch chọn sóng thu thanh/truyền hình; chụp cộng hưởng từ hạt nhân (MRI).<br>– <em>Có hại:</em> Cầu đường, tòa nhà cao tầng, bệ máy công nghiệp, khung máy bay nếu chịu ngoại lực tuần hoàn (gió xoáy, nhịp bước chân đều của đoàn quân, vòng quay động cơ) trùng với tần số riêng $f_0$ sẽ rung lắc dữ dội và có thể gãy sập (như sự cố sập cầu Tacoma năm 1940 hay cầu Bến Thủy/cầu treo)."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Tần số dao động cưỡng bức",
        "eq": "$$f_{\\text{cưỡng bức}} = f_{\\text{ngoại lực}}$$"
      },
      {
        "name": "Điều kiện cộng hưởng",
        "eq": "$$f = f_0 \\iff \\omega = \\omega_0 \\iff T = T_0$$"
      },
      {
        "name": "Chiều dài con lắc cộng hưởng",
        "eq": "$$l = l_0 \\implies T = 2\\pi\\sqrt{\\frac{l_0}{g}}$$"
      }
    ],
    "applications": [
      "Thiết kế giảm chấn khối lượng (Tuned Mass Damper – quả cầu nặng hàng trăm tấn treo trên đỉnh tòa nhà chọc trời Taipei 101) để triệt tiêu cộng hưởng khi có bão hoặc động đất.",
      "Chế tạo hộp đàn gỗ rỗng của các nhạc cụ dây để khuếch đại âm thanh tự nhiên."
    ]
  },
  {
    "num": 7,
    "chapter": 1,
    "title": "Bài tập về sự chuyển hóa năng lượng trong dao động điều hòa",
    "pages": "tr. 28–30",
    "type": "Bài tập",
    "subtitle": "Vận dụng bảo toàn cơ năng để tìm li độ, vận tốc, tỉ số động năng – thế năng và đọc đồ thị năng lượng theo li độ.",
    "diagramCaption": "Các vị trí đặc biệt trên trục li độ Ox theo tỉ số giữa động năng và thế năng (W_đ = n W_t).",
    "sections": [
      {
        "heading": "1. Dạng 1: Tìm vị trí và vận tốc khi biết tỉ số giữa Động năng và Thế năng (W_đ = n W_t)",
        "items": [
          "Từ định luật bảo toàn cơ năng $W = W_\\text{đ} + W_\\text{t}$ và giả thiết $W_\\text{đ} = n W_\\text{t}$: $$W = (n + 1)W_\\text{t} \\iff \\frac{1}{2}kA^2 = (n + 1)\\frac{1}{2}kx^2 \\implies x = \\pm\\frac{A}{\\sqrt{n + 1}}$$",
          "Tương tự, vận tốc tại vị trí đó là: $$W = \\frac{n + 1}{n}W_\\text{đ} \\implies v = \\pm\\sqrt{\\frac{n}{n + 1}}\\,v_{\\max}$$",
          "• <strong>Trường hợp đặc biệt hay thi:</strong><br>– Khi $W_\\text{đ} = W_\\text{t}$ ($n = 1$): $x = \\pm\\frac{A}{\\sqrt{2}} = \\pm\\frac{A\\sqrt{2}}{2}$ và $|v| = \\frac{v_{\\max}}{\\sqrt{2}}$. Trong 1 chu kì có 4 lần $W_\\text{đ} = W_\\text{t}$, khoảng thời gian giữa hai lần liên tiếp là $\\Delta t = \\frac{T}{4}$.<br>– Khi $W_\\text{đ} = 3W_\\text{t}$ ($n = 3$): $x = \\pm\\frac{A}{2}$ và $|v| = \\frac{\\sqrt{3}}{2}v_{\\max}$.<br>– Khi $W_\\text{đ} = \\frac{1}{3}W_\\text{t}$ ($n = \\frac{1}{3}$): $x = \\pm\\frac{A\\sqrt{3}}{2}$ và $|v| = \\frac{1}{2}v_{\\max}$."
        ]
      },
      {
        "heading": "2. Dạng 2: Đọc đồ thị năng lượng theo li độ x hoặc theo thời gian t",
        "items": [
          "• <strong>Trên đồ thị năng lượng theo li độ $(W - x)$:</strong><br>– Đường parabol bề lõm quay lên đi qua gốc $O(0,0)$ là đồ thị thế năng $W_\\text{t}(x) = \\frac{1}{2}kx^2$.<br>– Đường parabol bề lõm quay xuống có đỉnh tại $x = 0$ là đồ thị động năng $W_\\text{đ}(x) = W - \\frac{1}{2}kx^2$.<br>– Giá trị cực đại trên trục tung là cơ năng $W$; giá trị giới hạn trên trục hoành là biên độ $A \\Rightarrow k = \\frac{2W}{A^2}$ (nhớ đổi $A$ ra mét!).<br>– Giao điểm của hai đường parabol ứng với $W_\\text{đ} = W_\\text{t} = \\frac{W}{2}$ tại $x = \\pm\\frac{A}{\\sqrt{2}}$.",
          "• <strong>Trên đồ thị năng lượng theo thời gian $(W - t)$:</strong> Chu kì biến thiên của động năng và thế năng bằng một nửa chu kì dao động của vật: $T_{\\text{năng lượng}} = \\frac{T}{2}$."
        ]
      },
      {
        "heading": "3. Dạng 3: Bài toán năng lượng con lắc đơn góc nhỏ và dao động tắt dần",
        "items": [
          "• Với con lắc đơn góc nhỏ ($\\alpha_0 \\le 10^\\circ$): $W = \\frac{1}{2}mgl\\alpha_0^2 = \\frac{1}{2}mv^2 + \\frac{1}{2}mgl\\alpha^2 \\Rightarrow v^2 = gl(\\alpha_0^2 - \\alpha^2)$ (với $\\alpha, \\alpha_0$ tính bằng rad; nếu cho độ thì đổi $\\alpha(\\text{rad}) = \\frac{\\pi}{180}\\alpha(^\\circ)$).",
          "• Khi biên độ của con lắc lò xo giảm đi $p\\%$ sau một số dao động do ma sát ($A' = A(1 - p)$), phần cơ năng đã chuyển hóa thành nhiệt là: $$\\Delta W = W - W' = W\\left[1 - \\left(\\frac{A'}{A}\\right)^2\\right]$$"
        ]
      }
    ],
    "formulas": [
      {
        "name": "Vị trí W_đ = n W_t",
        "eq": "$$x = \\pm\\frac{A}{\\sqrt{n+1}}, \\quad |v| = \\sqrt{\\frac{n}{n+1}}\\,v_{\\max}$$"
      },
      {
        "name": "Vị trí W_đ = W_t (n = 1)",
        "eq": "$$x = \\pm\\frac{A\\sqrt{2}}{2}, \\quad \\Delta t_{\\text{liên tiếp}} = \\frac{T}{4}$$"
      },
      {
        "name": "Tính độ cứng từ đồ thị",
        "eq": "$$k = \\frac{2W}{A^2} \\quad (A \\text{ tính bằng m})$$"
      },
      {
        "name": "Vận tốc con lắc đơn góc nhỏ",
        "eq": "$$v^2 = gl(\\alpha_0^2 - \\alpha^2) = 2gl(\\cos\\alpha - \\cos\\alpha_0)$$"
      }
    ],
    "applications": [
      "Tính toán phần trăm năng lượng tiêu hao sau mỗi chu kì của hệ giảm chấn.",
      "Xác định tốc độ qua vị trí cân bằng của quả cầu con lắc trong các thí nghiệm va chạm cơ học."
    ]
  },
  {
    "num": 8,
    "chapter": 2,
    "title": "Mô tả sóng",
    "pages": "tr. 31–36",
    "type": "Lí thuyết",
    "subtitle": "Sự hình thành sóng cơ, các đại lượng đặc trưng (A, T, f, v, λ), đồ thị (u–x), (u–t), độ lệch pha và cường độ sóng.",
    "diagramCaption": "Đồ thị hình sin của sóng cơ theo không gian (u–x) tại một thời điểm và theo thời gian (u–t) tại một vị trí.",
    "sections": [
      {
        "heading": "1. Sự hình thành và bản chất của quá trình truyền sóng cơ",
        "items": [
          "<strong>Khái niệm sóng cơ:</strong> Sóng cơ là những biến dạng cơ lan truyền trong một môi trường đàn hồi (rắn, lỏng, khí) theo thời gian.",
          "<strong>Cơ chế truyền sóng:</strong> Khi nguồn phát sóng dao động, nhờ có <strong>lực liên kết đàn hồi</strong> giữa các phần tử môi trường mà các phần tử lân cận lần lượt bị kéo vào dao động (phần tử càng xa nguồn thì bắt đầu dao động càng trễ pha hơn).",
          "<strong>Bản chất cốt lõi:</strong> Quá trình truyền sóng là quá trình <strong>truyền pha dao động và truyền năng lượng</strong>, còn <strong>các phần tử vật chất của môi trường chỉ dao động quanh vị trí cân bằng cố định của chúng chứ không truyền đi theo sóng</strong> (ví dụ: miếng xốp hoặc chiếc phao trên mặt nước chỉ nhấp nhô lên xuống tại chỗ khi sóng truyền qua)."
        ]
      },
      {
        "heading": "2. Các đại lượng đặc trưng của sóng hình sin",
        "items": [
          "• <strong>Biên độ sóng ($A$):</strong> Độ dịch chuyển cực đại của phần tử môi trường khỏi vị trí cân bằng của nó.",
          "• <strong>Chu kì ($T$) và tần số sóng ($f$):</strong> Chính là chu kì và tần số dao động của các phần tử môi trường, selalu bằng chu kì và tần số của nguồn phát sóng ($f = \\frac{1}{T}$). <em>Khi sóng truyền từ môi trường này sang môi trường khác, tần số $f$ và chu kì $T$ không đổi.</em>",
          "• <strong>Tốc độ truyền sóng ($v$):</strong> Là tốc độ lan truyền biến dạng (trạng thái dao động) trong không gian. Tốc độ truyền sóng phụ thuộc vào bản chất của môi trường (tính đàn hồi, mật độ, nhiệt độ): $v_{\\text{rắn}} > v_{\\text{lỏng}} > v_{\\text{khí}}$, không phụ thuộc tần số nguồn trong một môi trường xác định.",
          "• <strong>Bước sóng ($\\lambda$):</strong> Là quãng đường mà sóng truyền đi được trong một chu kì $T$; cũng là khoảng cách giữa hai điểm gần nhau nhất trên cùng một phương truyền sóng mà dao động tại hai điểm đó <strong>cùng pha</strong>: $$\\lambda = vT = \\frac{v}{f} \\iff v = \\lambda f$$"
        ]
      },
      {
        "heading": "3. Phân biệt đồ thị (u–x) và đồ thị (u–t), Độ lệch pha và Cường độ sóng",
        "items": [
          "• <strong>Đồ thị $(u - x)$ (tại một thời điểm $t$ xác định):</strong> Cho biết hình ảnh thực của sợi dây/mặt sóng trong không gian; khoảng cách ngang giữa hai đỉnh sóng liên tiếp bằng <strong>bước sóng $\\lambda$</strong>.",
          "• <strong>Đồ thị $(u - t)$ (tại một vị trí $x$ xác định):</strong> Biểu diễn sự dao động theo thời gian của một phần tử môi trường; khoảng cách ngang giữa hai đỉnh liên tiếp trên trục thời gian bằng <strong>chu kì $T$</strong>.",
          "• <strong>Độ lệch pha giữa hai điểm trên cùng phương truyền sóng cách nhau khoảng $\\Delta x$:</strong> $$\\Delta\\varphi = \\frac{2\\pi \\Delta x}{\\lambda}$$",
          "• <strong>Cường độ sóng ($I$):</strong> Là năng lượng sóng được truyền qua một đơn vị diện tích đặt vuông góc với phương truyền sóng trong một đơn vị thời gian: $$I = \\frac{E}{S \\cdot \\Delta t} = \\frac{P}{S} \\quad (\\text{đơn vị: W/m}^2)$$"
        ]
      }
    ],
    "formulas": [
      {
        "name": "Liên hệ Bước sóng – Tốc độ – Tần số",
        "eq": "$$\\lambda = vT = \\frac{v}{f} \\iff v = \\lambda f$$"
      },
      {
        "name": "Khoảng cách n đỉnh sóng liên tiếp",
        "eq": "$$L = (n - 1)\\lambda$$"
      },
      {
        "name": "Độ lệch pha trên phương truyền",
        "eq": "$$\\Delta\\varphi = \\frac{2\\pi \\Delta x}{\\lambda}$$"
      },
      {
        "name": "Cường độ sóng",
        "eq": "$$I = \\frac{E}{S\\Delta t} = \\frac{P}{S} = \\frac{P}{4\\pi r^2} \\quad (\\text{sóng cầu})$$"
      }
    ],
    "applications": [
      "Tính toán khoảng cách an toàn và cường độ âm của các nguồn loa công suất lớn.",
      "Sử dụng sóng địa chấn để khảo sát cấu trúc các lớp đất đá trong lòng Trái Đất."
    ]
  },
  {
    "num": 9,
    "chapter": 2,
    "title": "Sóng ngang. Sóng dọc. Sự truyền năng lượng của sóng cơ",
    "pages": "tr. 37–40",
    "type": "Lí thuyết",
    "subtitle": "So sánh phương dao động và phương truyền sóng của sóng ngang – sóng dọc, đặc điểm sóng âm và dải tần nghe được.",
    "diagramCaption": "Mô hình so sánh sóng ngang trên dây đàn hồi (u ⊥ v) và sóng dọc gồm các vùng nén – dãn trên lò xo (u ∥ v).",
    "sections": [
      {
        "heading": "1. Sóng ngang",
        "items": [
          "<strong>Định nghĩa:</strong> Sóng ngang là sóng trong đó các phần tử của môi trường <strong>dao động theo phương vuông góc với phương truyền sóng</strong>.",
          "<strong>Môi trường truyền:</strong> Sóng ngang truyền được trong chất rắn và trên bề mặt chất lỏng (ví dụ: sóng truyền trên sợi dây đàn hồi, sóng trên mặt nước).",
          "Trên hình ảnh sóng ngang có các <em>đỉnh sóng (gờ lồi)</em> và <em>hõm sóng (đáy sóng)</em> xen kẽ đều đặn."
        ]
      },
      {
        "heading": "2. Sóng dọc",
        "items": [
          "<strong>Định nghĩa:</strong> Sóng dọc là sóng trong đó các phần tử của môi trường <strong>dao động theo phương trùng (song song) với phương truyền sóng</strong>.",
          "<strong>Môi trường truyền:</strong> Sóng dọc truyền được trong cả 3 môi trường: chất khí, chất lỏng và chất rắn (ví dụ: sóng tạo bởi sự nén – dãn dọc theo trục lò xo, sóng âm truyền trong không khí).",
          "Khi sóng dọc truyền qua, môi trường xuất hiện các <em>vùng nén</em> (mật độ phần tử dày) và <em>vùng dãn</em> (mật độ phần tử thưa) luân phiên nhau; khoảng cách giữa tâm hai vùng nén liên tiếp (hoặc hai vùng dãn liên tiếp) bằng 1 bước sóng $\\lambda$."
        ]
      },
      {
        "heading": "3. Quá trình truyền năng lượng của sóng cơ và Sóng âm",
        "items": [
          "• Sóng cơ chỉ truyền được trong môi trường vật chất đàn hồi, <strong>không truyền được trong chân không</strong> (khác với sóng điện từ/ánh sáng).",
          "• <strong>Sóng âm:</strong> Khi nguồn âm (màng loa, dây thanh quản, âm thoa) dao động, nó tạo ra các vùng không khí nén – dãn truyền đi dưới dạng sóng dọc, mang năng lượng đến đập vào màng nhĩ làm màng nhĩ dao động, giúp ta cảm nhận được âm thanh.",
          "• <strong>Biên độ và tần số của âm:</strong> Âm có biên độ (cường độ) càng lớn thì nghe càng <strong>to</strong>; âm có tần số càng lớn thì nghe càng <strong>cao (thanh)</strong>, tần số nhỏ thì nghe càng <strong>trầm</strong>.",
          "• <strong>Phân loại sóng âm theo tần số:</strong><br>– <em>Hạ âm ($f < 16\\text{ Hz}$ hoặc $20\\text{ Hz}$):</em> Tai người không nghe được, một số loài như voi, cá voi, chim bồ câu cảm nhận được.<br>– <em>Âm nghe được ($20\\text{ Hz} \\le f \\le 20\\,000\\text{ Hz}$):</em> Giới hạn nghe của tai người bình thường (giảm dần theo tuổi).<br>– <em>Siêu âm ($f > 20\\,000\\text{ Hz}$):</em> Tai người không nghe được; dơi, cá heo, chó sử dụng để định vị; ứng dụng trong siêu âm y học, sonar tàu biển, làm sạch kim hoàn."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Dải âm nghe được của tai người",
        "eq": "$$20\\text{ Hz} \\le f \\le 20\\,000\\text{ Hz}$$"
      },
      {
        "name": "Ánh sáng nhìn thấy (SGK)",
        "eq": "$$0,38\\,\\mu\\text{m} \\le \\lambda \\le 0,76\\,\\mu\\text{m}$$"
      },
      {
        "name": "Khoảng cách 2 vùng nén liên tiếp",
        "eq": "$$d_{\\text{nén - nén}} = \\lambda = \\frac{v}{f}$$"
      }
    ],
    "applications": [
      "Ứng dụng sóng siêu âm trong chẩn đoán hình ảnh y khoa và dò tìm đàn cá/đo độ sâu đáy biển (Sonar).",
      "Phân tích sóng địa chấn ngang (sóng S) và sóng địa chấn dọc (sóng P) để xác định tâm chấn động đất."
    ]
  },
  {
    "num": 10,
    "chapter": 2,
    "title": "Thực hành: Đo tần số của sóng âm",
    "pages": "tr. 41–43",
    "type": "Thực hành",
    "subtitle": "Sử dụng micro, bộ khuếch đại và dao động kí điện tử để hiển thị đồ thị sóng âm và xác định chu kì, tần số của âm thoa.",
    "diagramCaption": "Sơ đồ bố trí thí nghiệm (Âm thoa → Micro → Khuếch đại → Dao động kí) và cách đếm số ô thời gian (SEC/DIV) trên màn hình.",
    "sections": [
      {
        "heading": "1. Mục tiêu và Dụng cụ thí nghiệm",
        "items": [
          "<strong>Mục tiêu:</strong> Biết cách kết nối, điều chỉnh dao động kí điện tử để quan sát đồ thị dao động âm và đo được chu kì $T$, tần số $f$ của sóng âm do âm thoa phát ra.",
          "<strong>Dụng cụ:</strong><br>• Dao động kí điện tử (Oscilloscope) có các nút chỉnh $VOLTS/DIV$ (biên độ điện áp mỗi ô dọc) và $SEC/DIV$ hoặc $TIME/DIV$ (thời gian mỗi ô ngang).<br>• Micro (chuyển dao động cơ của sóng âm thành tín hiệu điện xoay chiều cùng tần số) và bộ khuếch đại tín hiệu.<br>• Âm thoa chuẩn kèm hộp cộng hưởng gỗ và búa cao su; giá đỡ, kẹp và dây nối đồng trục."
        ]
      },
      {
        "heading": "2. Quy trình tiến hành thí nghiệm 4 bước",
        "items": [
          "• <strong>Bước 1 (Lắp ráp & Cài đặt):</strong> Kết nối micro qua bộ khuếch đại vào cổng tín hiệu đầu vào (CH1) của dao động kí; bật nguồn, chọn chế độ ghép tín hiệu xoay chiều (AC) và chỉnh nút <em>Trigger</em> để hình ảnh sóng đứng yên ổn định trên màn hình.",
          "• <strong>Bước 2 (Kích thích nguồn âm):</strong> Dùng búa cao su gõ nhẹ và dứt khoát vào một nhánh của âm thoa, đặt hộp cộng hưởng hướng về phía micro.",
          "• <strong>Bước 3 (Điều chỉnh thang đo & Đọc số liệu):</strong> Xoay núm $VOLTS/DIV$ để chiều cao hình sin vừa khung màn hình; xoay núm $SEC/DIV$ (ví dụ đặt ở mức $0,5\\text{ ms/ô}$ hoặc $1\\text{ ms/ô}$) sao cho trên màn hình hiện rõ từ $2$ đến $5$ chu kì sóng đầy đủ.",
          "• <strong>Bước 4 (Tính toán chu kì và tần số):</strong> Đếm tổng số ô ngang $n$ ứng với $N$ chu kì sóng liên tiếp. Nếu mỗi ô ngang ứng với thời gian $t_0$ (giá trị nút $SEC/DIV$) thì tổng thời gian của $N$ chu kì là $\\Delta t = n \\cdot t_0$: $$T = \\frac{\\Delta t}{N} = \\frac{n \\cdot t_0}{N} \\implies f = \\frac{1}{T} = \\frac{N}{n \\cdot t_0}$$"
        ]
      },
      {
        "heading": "3. Xử lí kết quả, sai số và Lưu ý an toàn phòng thực hành",
        "items": [
          "• Lặp lại phép đo $3 - 5$ lần, tính giá trị trung bình $\\bar{f} = \\frac{f_1 + f_2 + \\cdots + f_k}{k}$, sai số tuyệt đối trung bình $\\overline{\\Delta f}$ và ghi kết quả $f = \\bar{f} \\pm \\Delta f$, đối chiếu với tần số chuẩn khắc trên thân âm thoa (thường là $440\\text{ Hz}$ hoặc $512\\text{ Hz}$).",
          "• <strong>An toàn thực hành:</strong> Không gõ âm thoa vào vật cứng kim loại (phải dùng búa cao su); không đưa tín hiệu điện áp vượt quá giới hạn đầu vào của dao động kí; giữ âm lượng vừa phải."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Thời gian N chu kì trên màn hình",
        "eq": "$$\\Delta t = n \\times (\\text{SEC/DIV})$$"
      },
      {
        "name": "Chu kì và Tần số sóng âm",
        "eq": "$$T = \\frac{\\Delta t}{N}, \\quad f = \\frac{1}{T} = \\frac{N}{\\Delta t}$$"
      },
      {
        "name": "Biểu diễn kết quả đo",
        "eq": "$$f = \\bar{f} \\pm \\Delta f \\quad (\\text{Hz})$$"
      }
    ],
    "applications": [
      "Ứng dụng lên dây đàn nhạc cụ chính xác (nốt La chuẩn $A_4 = 440\\text{ Hz}$) và kiểm định thiết bị âm thanh.",
      "Phân tích dạng sóng tiếng nói và nhịp tim trong các thiết bị đo điện tử y sinh."
    ]
  },
  {
    "num": 11,
    "chapter": 2,
    "title": "Sóng điện từ",
    "pages": "tr. 44–47",
    "type": "Lí thuyết",
    "subtitle": "Bản chất sóng điện từ, tính chất truyền trong chân không và đặc điểm, ứng dụng của 7 vùng trong thang sóng điện từ.",
    "diagramCaption": "Mô hình sóng điện từ ngang (E ⊥ B ⊥ v) và Thang phổ sóng điện từ từ Sóng vô tuyến đến Tia Gamma.",
    "sections": [
      {
        "heading": "1. Bản chất và đặc điểm của sóng điện từ",
        "items": [
          "<strong>Định nghĩa:</strong> Sóng điện từ là sự lan truyền trong không gian của điện trường biến thiên và từ trường biến thiên.",
          "<strong>Các tính chất cơ bản của sóng điện từ:</strong><br>• Sóng điện từ <strong>truyền được trong chân không</strong> (khác hoàn toàn với sóng cơ) và trong các môi trường vật chất.<br>• Trong chân không, mọi sóng điện từ đều truyền với cùng tốc độ cực đại bằng tốc độ ánh sáng: $$c \\approx 3,0 \\times 10^8\\text{ m/s}, \\qquad c = \\lambda f \\iff \\lambda = \\frac{c}{f}$$<br>• Sóng điện từ là <strong>sóng ngang</strong>: Tại mỗi điểm trong không gian, vectơ cường độ điện trường $\\vec{E}$ và vectơ cảm ứng từ $\\vec{B}$ luôn vuông góc với nhau và cùng vuông góc với phương truyền sóng $\\vec{v}$ (tạo thành tam diện thuận $\\vec{E}, \\vec{B}, \\vec{v}$). Dao động của $\\vec{E}$ và $\\vec{B}$ tại một điểm luôn <strong>cùng pha</strong>.<br>• Sóng điện từ mang năng lượng; tần số càng cao thì năng lượng photon/bức xạ càng lớn."
        ]
      },
      {
        "heading": "2. Thang sóng điện từ (Sắp xếp theo bước sóng giảm dần / tần số tăng dần)",
        "items": [
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
    "formulas": [
      {
        "name": "Bước sóng trong chân không",
        "eq": "$$\\lambda = \\frac{c}{f} = cT \\quad (c = 3\\times 10^8\\text{ m/s})$$"
      },
      {
        "name": "Chiết suất môi trường & Tốc độ",
        "eq": "$$n = \\frac{c}{v} \\implies \\lambda_n = \\frac{\\lambda_0}{n}$$"
      },
      {
        "name": "Quan hệ pha E và B",
        "eq": "$$\\frac{E}{E_0} = \\frac{B}{B_0} = \\cos(\\omega t - kx)$$"
      }
    ],
    "applications": [
      "Truyền thông vệ tinh, cáp quang, Wifi 5G, chẩn đoán hình ảnh CT/X-quang và khử trùng y tế bằng đèn UV.",
      "<strong>Lưu ý an toàn bức xạ:</strong> Tuyệt đối tuân thủ quy trình che chắn bằng chì/bê tông khi làm việc với tia X, tia gamma và đeo kính chống tia UV."
    ]
  },
  {
    "num": 12,
    "chapter": 2,
    "title": "Giao thoa sóng",
    "pages": "tr. 48–51",
    "type": "Lí thuyết",
    "subtitle": "Điều kiện giao thoa hai nguồn kết hợp, vị trí cực đại – cực tiểu giao thoa sóng cơ và thí nghiệm khe Young về giao thoa ánh sáng.",
    "diagramCaption": "Hệ vân giao thoa sóng mặt nước từ hai nguồn kết hợp S₁, S₂ và sơ đồ thí nghiệm giao thoa ánh sáng hai khe Young.",
    "sections": [
      {
        "heading": "1. Hiện tượng giao thoa của hai sóng mặt nước (Sóng cơ)",
        "items": [
          "<strong>Nguồn kết hợp:</strong> Hai nguồn phát sóng có <strong>cùng tần số</strong>, cùng phương dao động và có <strong>độ lệch pha không đổi theo thời gian</strong> gọi là hai nguồn kết hợp.",
          "<strong>Hiện tượng giao thoa:</strong> Là hiện tượng hai sóng kết hợp khi gặp nhau thì tại những điểm xác định trong không gian, chúng luôn tăng cường nhau (biên độ cực đại) hoặc triệt tiêu nhau (biên độ cực tiểu), tạo thành hệ các đường <em>vân giao thoa</em> dạng hypebol ổn định.",
          "<strong>Điều kiện cực đại và cực tiểu tại điểm M (với hai nguồn kết hợp CÙNG PHA):</strong> Gọi $d_1, d_2$ là khoảng cách từ hai nguồn $S_1, S_2$ đến điểm $M$, hiệu đường đi là $\\Delta d = d_2 - d_1$:<br>• <strong>Vị trí cực đại giao thoa</strong> (hai sóng tới $M$ cùng pha, tăng cường nhau): $$\\Delta d = d_2 - d_1 = k\\lambda \\quad (k = 0, \\pm 1, \\pm 2, \\dots)$$<br>• <strong>Vị trí cực tiểu giao thoa</strong> (hai sóng tới $M$ ngược pha, triệt tiêu nhau): $$\\Delta d = d_2 - d_1 = \\left(k + \\frac{1}{2}\\right)\\lambda \\quad (k = 0, \\pm 1, \\pm 2, \\dots)$$",
          "<em>Chú ý quan trọng:</em> Nếu hai nguồn có độ lệch pha ban đầu $\\Delta\\varphi_0 \\ne 0$ (ví dụ ngược pha), vị trí cực đại và cực tiểu sẽ đổi chỗ cho nhau; cần xét tổng độ lệch pha tại $M$."
        ]
      },
      {
        "heading": "2. Thí nghiệm Young về giao thoa ánh sáng",
        "items": [
          "Chiếu ánh sáng đơn sắc bước sóng $\\lambda$ qua hai khe hẹp song song $F_1, F_2$ cách nhau một khoảng rất nhỏ $a$ (cỡ $\\text{mm}$). Màn quan sát $E$ đặt song song và cách mặt phẳng hai khe một khoảng $D$ ($D \\gg a$, cỡ $\\text{m}$).",
          "Trên màn xuất hiện hệ những vạch sáng (cực đại) và vạch tối (cực tiểu) xen kẽ, song song và cách đều nhau gọi là <strong>hệ vân giao thoa Young</strong>. Hiện tượng này khẳng định ánh sáng có tính chất sóng.",
          "• <strong>Khoảng vân ($i$):</strong> Là khoảng cách giữa hai vân sáng liên tiếp (hoặc hai vân tối liên tiếp): $$i = \\frac{\\lambda D}{a} \\implies \\lambda = \\frac{ia}{D}$$",
          "• <strong>Vị trí vân sáng bậc $k$</strong> (tính từ vân sáng trung tâm $O$ ứng với $k = 0$): $$x_{\\text{sáng}} = k \\cdot i = k\\frac{\\lambda D}{a} \\quad (k = 0, \\pm 1, \\pm 2, \\dots)$$",
          "• <strong>Vị trí vân tối thứ $(k+1)$:</strong> $$x_{\\text{tối}} = \\left(k + \\frac{1}{2}\\right)i = \\left(k + 0,5\\right)\\frac{\\lambda D}{a} \\quad (k = 0, \\pm 1, \\pm 2, \\dots)$$"
        ]
      }
    ],
    "formulas": [
      {
        "name": "Cực đại giao thoa cùng pha",
        "eq": "$$d_2 - d_1 = k\\lambda \\quad (k \\in \\mathbb{Z})$$"
      },
      {
        "name": "Cực tiểu giao thoa cùng pha",
        "eq": "$$d_2 - d_1 = \\left(k + \\frac{1}{2}\\right)\\lambda \\quad (k \\in \\mathbb{Z})$$"
      },
      {
        "name": "Khoảng vân giao thoa Young",
        "eq": "$$i = \\frac{\\lambda D}{a}, \\quad \\lambda = \\frac{ia}{D}$$"
      },
      {
        "name": "Tọa độ vân sáng & vân tối",
        "eq": "$$x_\\text{s} = ki, \\qquad x_\\text{t} = (k + 0,5)i$$"
      }
    ],
    "applications": [
      "Đo chính xác bước sóng $\\lambda$ của các nguồn laser và ánh sáng đơn sắc.",
      "Ứng dụng nguyên lí giao thoa triệt tiêu trong tai nghe chống ồn chủ động (Active Noise Cancelling – ANC) và lớp phủ chống phản xạ trên ống kính máy ảnh."
    ]
  },
  {
    "num": 13,
    "chapter": 2,
    "title": "Sóng dừng",
    "pages": "tr. 52–54",
    "type": "Lí thuyết",
    "subtitle": "Sự tạo thành sóng dừng do giao thoa sóng tới và sóng phản xạ; đặc điểm nút – bụng và điều kiện sóng dừng trên dây, trong cột khí.",
    "diagramCaption": "Các mode sóng dừng cơ bản và họa âm bậc cao trên dây hai đầu cố định (L = n λ/2) và ống khí một đầu kín, một đầu hở (L = (2n+1)λ/4).",
    "sections": [
      {
        "heading": "1. Phản xạ sóng và Sự tạo thành sóng dừng",
        "items": [
          "• <strong>Phản xạ sóng:</strong> Khi gặp vật cản cố định, sóng phản xạ luôn <strong>ngược pha</strong> với sóng tới tại điểm phản xạ. Khi gặp vật cản tự do, sóng phản xạ luôn <strong>cùng pha</strong> với sóng tới tại điểm phản xạ.",
          "• <strong>Khái niệm sóng dừng:</strong> Là sóng truyền trên sợi dây (hoặc cột khí) trong trường hợp xuất hiện các <strong>nút sóng</strong> và các <strong>bụng sóng</strong> cố định trong không gian, do sự giao thoa giữa sóng tới và sóng phản xạ truyền cùng phương, ngược chiều.",
          "• <strong>Nút sóng:</strong> Là những điểm luôn đứng yên (biên độ dao động bằng $0$).",
          "• <strong>Bụng sóng:</strong> Là những điểm dao động với biên độ cực đại ($A_{\\text{bụng}} = 2A_{\\text{nguồn}}$).",
          "• <strong>Khoảng cách đặc biệt:</strong><br>– Khoảng cách giữa hai nút sóng liên tiếp (hoặc hai bụng sóng liên tiếp) bằng <strong>nửa bước sóng ($\\frac{\\lambda}{2}$)</strong>.<br>– Khoảng cách giữa một nút sóng và một bụng sóng kề nhau bằng <strong>một phần tư bước sóng ($\\frac{\\lambda}{4}$)</strong>."
        ]
      },
      {
        "heading": "2. Điều kiện để có sóng dừng trên dây có hai đầu cố định",
        "items": [
          "Hai đầu dây $A, B$ cố định đóng vai trò là hai nút sóng. Điều kiện để có sóng dừng trên dây chiều dài $L$ là chiều dài sợi dây phải bằng một số nguyên lần nửa bước sóng: $$L = n\\frac{\\lambda}{2} \\implies f_n = n\\frac{v}{2L} = n f_1 \\quad (n = 1, 2, 3, \\dots)$$",
          "• Trong đó $n$ là <strong>số bó sóng (số bụng sóng)</strong> trên dây; tổng <strong>số nút sóng</strong> (kể cả hai đầu dây) là $(n + 1)$.",
          "• Khi $n = 1$: $L = \\frac{\\lambda_1}{2} \\Rightarrow f_1 = \\frac{v}{2L}$ gọi là <strong>tần số âm cơ bản</strong> (ứng với dây đàn phát ra nốt nhạc chính)."
        ]
      },
      {
        "heading": "3. Điều kiện sóng dừng trên dây một đầu cố định, một đầu tự do (hoặc ống khí một đầu kín – một đầu hở)",
        "items": [
          "Đầu cố định (đầu ống kín) là một <strong>nút sóng</strong>; đầu tự do (miệng ống hở) là một <strong>bụng sóng</strong>.",
          "Điều kiện để có sóng dừng là chiều dài $L$ của dây (hoặc cột không khí) phải bằng một số lẻ lần một phần tư bước sóng: $$L = (2n + 1)\\frac{\\lambda}{4} = k_{\\text{lẻ}}\\frac{\\lambda}{4} \\implies f_n = (2n + 1)\\frac{v}{4L} \\quad (n = 0, 1, 2, 3, \\dots)$$",
          "• Trên dây (hoặc cột khí) khi đó có $(n + 1)$ bụng sóng và $(n + 1)$ nút sóng."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Khoảng cách Nút – Nút & Nút – Bụng",
        "eq": "$$d_{\\text{nút - nút}} = d_{\\text{bụng - bụng}} = \\frac{\\lambda}{2}, \\quad d_{\\text{nút - bụng kề}} = \\frac{\\lambda}{4}$$"
      },
      {
        "name": "Hai đầu cố định (n bụng, n+1 nút)",
        "eq": "$$L = n\\frac{\\lambda}{2} \\implies f_n = n\\frac{v}{2L} \\quad (n = 1, 2, 3, \\dots)$$"
      },
      {
        "name": "Một cố định – một tự do",
        "eq": "$$L = (2n + 1)\\frac{\\lambda}{4} \\implies f_n = (2n + 1)\\frac{v}{4L} \\quad (n = 0, 1, 2, \\dots)$$"
      }
    ],
    "applications": [
      "Giải thích nguyên lí tạo nốt nhạc của các nhạc cụ dây (đàn ghi-ta, đàn bầu, piano – hai đầu cố định) và nhạc cụ hơi (sáo, kèn clarinet – cột khí cộng hưởng).",
      "Khi nghệ sĩ bấm phím đàn làm giảm chiều dài $L$ của dây thì tần số $f = \\frac{v}{2L}$ tăng lên, âm phát ra cao hơn."
    ]
  },
  {
    "num": 14,
    "chapter": 2,
    "title": "Bài tập về sóng",
    "pages": "tr. 55–57",
    "type": "Bài tập",
    "subtitle": "Hệ thống phương pháp giải các dạng bài tập truyền sóng cơ, sóng điện từ, giao thoa sóng mặt nước, khe Young và sóng dừng.",
    "diagramCaption": "Sơ đồ phân biệt tốc độ truyền sóng v = λf với tốc độ dao động phần tử u'(t) và tổng hợp công thức Giao thoa – Sóng dừng.",
    "sections": [
      {
        "heading": "1. Dạng 1: Xác định các đại lượng đặc trưng của sóng (λ, T, f, v) và chiều chuyển động của phần tử",
        "items": [
          "• Từ phương trình sóng dạng tổng quát $u = A\\cos\\left(\\omega t - \\frac{2\\pi x}{\\lambda}\\right) = A\\cos\\left[2\\pi\\left(\\frac{t}{T} - \\frac{x}{\\lambda}\\right)\\right]$:<br>– Đọc hệ số trước $t$ để suy ra $\\omega = 2\\pi f \\Rightarrow T, f$.<br>– Đọc hệ số trước $x$ (chú ý đơn vị của $x$) để suy ra $\\frac{2\\pi}{\\lambda} \\Rightarrow \\lambda$ và tốc độ truyền sóng $v = \\lambda f$.",
          "• <strong>Phân biệt cực kỳ quan trọng:</strong><br>– <em>Tốc độ truyền sóng $v = \\lambda f$:</em> Là hằng số đối với một môi trường đồng nhất.<br>– <em>Vận tốc dao động của phần tử môi trường $v_{\\text{phần tử}} = u'(t) = -\\omega A\\sin(\\omega t - \\dots)$:</em> Biến thiên điều hòa theo thời gian với $v_{\\text{phần tử max}} = \\omega A = 2\\pi f A$.",
          "• <strong>Xác định chiều đi lên / đi xuống của phần tử trên hình sóng:</strong> Giả sử sóng truyền từ trái sang phải, vẽ thêm hình ảnh sợi dây ở thời điểm ngay sau đó một chút (dịch nhẹ đồ thị hình sin sang phải): điểm nào trên đường mới nằm cao hơn đường cũ thì đang đi lên, thấp hơn thì đang đi xuống (quy tắc: <em>'Sườn trước đi lên, sườn sau đi xuống'</em>)."
        ]
      },
      {
        "heading": "2. Dạng 2: Bài toán Giao thoa sóng cơ và Giao thoa ánh sáng Young",
        "items": [
          "• <strong>Giao thoa sóng cơ (2 nguồn cùng pha $S_1, S_2$):</strong><br>– Tính bước sóng $\\lambda = \\frac{v}{f}$.<br>– Xét tỉ số $\\frac{d_2 - d_1}{\\lambda}$: nếu ra số nguyên $k$ thì $M$ thuộc cực đại bậc $k$; nếu ra số bán nguyên $(k + 0,5)$ thì $M$ thuộc cực tiểu thứ $(k+1)$.<br>– Số điểm cực đại trên đoạn nối hai nguồn $S_1S_2$ (không tính hai nguồn): $-\\frac{S_1S_2}{\\lambda} < k < \\frac{S_1S_2}{\\lambda} \\Rightarrow N_{\\text{CĐ}} = 2\\left\\lfloor\\frac{S_1S_2}{\\lambda}\\right\\rfloor + 1$.",
          "• <strong>Giao thoa khe Young:</strong><br>– Đổi đồng nhất đơn vị chuẩn trước khi thay số: $\\lambda\\,(\\mu\\text{m}) = 10^{-6}\\text{ m}$, $D\\,(\\text{m})$, $a\\,(\\text{mm}) = 10^{-3}\\text{ m} \\implies i\\,(\\text{mm}) = \\frac{\\lambda(\\mu\\text{m}) \\cdot D(\\text{m})}{a(\\text{mm})}$.<br>– Khoảng cách giữa $N$ vân sáng liên tiếp là $(N - 1)i$."
        ]
      },
      {
        "heading": "3. Dạng 3: Bài toán Sóng dừng trên dây và trong cột khí",
        "items": [
          "• <strong>Hai đầu cố định:</strong> $L = n\\frac{\\lambda}{2} \\Rightarrow f_n = n\\frac{v}{2L}$. Hiệu hai tần số liên tiếp cho sóng dừng bằng tần số cơ bản: $f_{n+1} - f_n = f_1 = \\frac{v}{2L}$.",
          "• <strong>Một đầu cố định – một đầu tự do:</strong> $L = (2n + 1)\\frac{\\lambda}{4} \\Rightarrow f_n = (2n + 1)\\frac{v}{4L}$. Hiệu hai tần số liên tiếp cho sóng dừng bằng 2 lần tần số cơ bản: $f_{n+1} - f_n = 2f_0 = \\frac{v}{2L}$."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Tỉ số tốc độ phần tử cực đại & truyền sóng",
        "eq": "$$\\frac{v_{\\text{phần tử max}}}{v_{\\text{truyền sóng}}} = \\frac{\\omega A}{\\lambda f} = \\frac{2\\pi A}{\\lambda}$$"
      },
      {
        "name": "Số cực đại trên đoạn S₁S₂ (cùng pha)",
        "eq": "$$-\\frac{S_1S_2}{\\lambda} < k < \\frac{S_1S_2}{\\lambda} \\quad (k \\in \\mathbb{Z})$$"
      },
      {
        "name": "Công thức nhanh khoảng vân i (mm)",
        "eq": "$$i\\,(\\text{mm}) = \\frac{\\lambda\\,(\\mu\\text{m}) \\cdot D\\,(\\text{m})}{a\\,(\\text{mm})}$$"
      },
      {
        "name": "Khoảng cách N nút liên tiếp (sóng dừng)",
        "eq": "$$d_{N\\text{ nút}} = (N - 1)\\frac{\\lambda}{2}$$"
      }
    ],
    "applications": [
      "Giải nhanh các bài toán thực tế về đo khoảng cách bằng sóng siêu âm và xác định bước sóng ánh sáng.",
      "Kiểm tra tần số cộng hưởng của dây đàn và ống sáo."
    ]
  },
  {
    "num": 15,
    "chapter": 2,
    "title": "Thực hành: Đo tốc độ truyền âm",
    "pages": "tr. 58–59",
    "type": "Thực hành",
    "subtitle": "Ứng dụng hiện tượng cộng hưởng sóng dừng trong ống khí có pít-tông di động để xác định bước sóng và tốc độ truyền âm trong không khí.",
    "diagramCaption": "Sơ đồ ống trụ cộng hưởng âm với pít-tông di động tại hai vị trí âm to nhất liên tiếp l₁, l₂ (cách nhau d = l₂ − l₁ = λ/2).",
    "sections": [
      {
        "heading": "1. Nguyên lí đo tốc độ truyền âm bằng hiện tượng sóng dừng cột khí",
        "items": [
          "Đặt một loa nhỏ nối với máy phát âm tần (phát ra âm có tần số $f$ xác định, ví dụ $f = 500\\text{ Hz}$) ngay sát miệng hở của một ống hình trụ trong suốt có gắn thước đo chiều dài. Bên trong ống có một pít-tông có thể kéo dịch chuyển để thay đổi chiều dài $l$ của cột không khí.",
          "• Sóng âm từ loa truyền vào cột không khí và phản xạ lại ở bề mặt pít-tông (đóng vai trò là một <strong>đầu cố định – nút sóng</strong>), còn miệng ống gần loa đóng vai trò là <strong>đầu tự do – bụng sóng</strong>.",
          "• Khi điều chỉnh vị trí pít-tông sao cho chiều dài cột không khí thỏa mãn điều kiện sóng dừng $l = (2n + 1)\\frac{\\lambda}{4}$ thì xảy ra <strong>hiện tượng cộng hưởng âm</strong>: tại đó ta nghe thấy <strong>âm phát ra to nhất</strong>.",
          "• <strong>Tại sao dùng hiệu hai vị trí liên tiếp $(l_2 - l_1)$?</strong> Do bụng sóng ở miệng ống thực tế nằm hơi nhô ra ngoài miệng ống một chút (hiệu ứng đầu ống), nên nếu chỉ đo $l_1$ sẽ có sai số hệ thống. Khi lấy hiệu khoảng cách giữa <strong>hai vị trí pít-tông liên tiếp có âm to nhất</strong> ($l_1$ và $l_2$), sai số đầu ống triệt tiêu hoàn toàn: $$d = l_2 - l_1 = \\frac{\\lambda}{2} \\implies \\lambda = 2(l_2 - l_1) \\implies v = \\lambda f = 2(l_2 - l_1)f$$"
        ]
      },
      {
        "heading": "2. Các bước tiến hành thí nghiệm và xử lí số liệu",
        "items": [
          "1. Lắp đặt dụng cụ, bật máy phát tần số ở giá trị chuẩn (ví dụ $f = 500\\text{ Hz}$ hoặc $680\\text{ Hz}$), chỉnh biên độ âm vừa đủ nghe rõ.",
          "2. Kéo pít-tông từ sát miệng ống ra xa từ từ, lắng nghe và đánh dấu vị trí đầu tiên nghe thấy âm to nhất là $l_1$.",
          "3. Tiếp tục kéo pít-tông ra xa hơn đến vị trí thứ hai nghe thấy âm to nhất liên tiếp, ghi giá trị $l_2$. Tính $d = l_2 - l_1$.",
          "4. Lặp lại phép đo $3 - 5$ lần, tính giá trị trung bình $\\bar{d}$, suy ra $\\bar{v} = 2\\bar{d}f$ và sai số phép đo $\\Delta v$."
        ]
      },
      {
        "heading": "3. Bảng tham khảo tốc độ truyền âm trong các môi trường (SGK tr. 59)",
        "items": [
          "• <strong>Trong không khí (ở $20^\\circ\\text{C}$):</strong> $v \\approx 340\\text{ m/s}$ (tốc độ âm trong khí tăng khi nhiệt độ tăng).",
          "• <strong>Trong nước:</strong> $v \\approx 1\\,500\\text{ m/s}$.",
          "• <strong>Trong gỗ:</strong> $v \\approx 3\\,400\\text{ m/s}$.",
          "• <strong>Trong thép:</strong> $v \\approx 6\\,100\\text{ m/s}$."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Khoảng cách 2 cộng hưởng liên tiếp",
        "eq": "$$d = l_2 - l_1 = \\frac{\\lambda}{2} \\implies \\lambda = 2(l_2 - l_1)$$"
      },
      {
        "name": "Công thức tính tốc độ truyền âm",
        "eq": "$$v = \\lambda f = 2(l_2 - l_1)f$$"
      },
      {
        "name": "Sai số tỉ đối của phép đo",
        "eq": "$$\\frac{\\Delta v}{\\bar{v}} = \\frac{\\Delta d}{\\bar{d}} + \\frac{\\Delta f}{\\bar{f}}$$"
      }
    ],
    "applications": [
      "Phương pháp cộng hưởng cột khí giúp đo nhanh tốc độ âm trong các chất khí khác nhau mà không cần không gian rộng.",
      "Ứng dụng trong thiết kế chiều dài ống sáo, ống tiêu và ống đàn Đại phong cầm (Organ)."
    ]
  },
  {
    "num": 16,
    "chapter": 3,
    "title": "Lực tương tác giữa các điện tích",
    "pages": "tr. 60–64",
    "type": "Lí thuyết",
    "subtitle": "Hai loại điện tích, điện tích điểm, định luật Coulomb về lực tương tác tĩnh điện trong chân không và trong điện môi.",
    "diagramCaption": "Biểu diễn vectơ lực tương tác tĩnh điện Coulomb giữa hai điện tích điểm cùng dấu (đẩy nhau) và trái dấu (hút nhau).",
    "sections": [
      {
        "heading": "1. Hai loại điện tích và Tương tác tĩnh điện",
        "items": [
          "• Trong tự nhiên có hai loại điện tích: <strong>điện tích dương ($q > 0$)</strong> và <strong>điện tích âm ($q < 0$)</strong>. Hai điện tích <strong>cùng dấu thì đẩy nhau</strong>, hai điện tích <strong>trái dấu thì hút nhau</strong>.",
          "• <strong>Điện tích điểm:</strong> Là một vật tích điện có kích thước rất nhỏ so với khoảng cách tới điểm mà ta đang xét.",
          "• <strong>Đơn vị điện tích trong hệ SI:</strong> coulomb (kí hiệu $\\text{C}$). Các ước số thường gặp: $1\\text{ mC} = 10^{-3}\\text{ C}$, $1\\,\\mu\\text{C} = 10^{-6}\\text{ C}$, $1\\text{ nC} = 10^{-9}\\text{ C}$, $1\\text{ pC} = 10^{-12}\\text{ C}$. Điện tích nguyên tố có độ lớn $e = 1,6 \\times 10^{-19}\\text{ C}$."
        ]
      },
      {
        "heading": "2. Định luật Coulomb",
        "items": [
          "<strong>Phát biểu:</strong> Lực hút hay đẩy giữa hai điện tích điểm đặt trong chân không có phương trùng với đường thẳng nối hai điện tích điểm đó, có độ lớn tỉ lệ thuận với tích độ lớn của hai điện tích và tỉ lệ nghịch với bình phương khoảng cách giữa chúng.",
          "<strong>Biểu thức trong chân không (hoặc không khí gần đúng):</strong> $$F = k\\frac{|q_1 q_2|}{r^2} = \\frac{|q_1 q_2|}{4\\pi\\varepsilon_0 r^2}$$",
          "• Trong đó: $r$ là khoảng cách giữa hai điện tích điểm ($\\text{m}$); hệ số tỉ lệ $k = \\frac{1}{4\\pi\\varepsilon_0} \\approx 9,0 \\times 10^9\\,\\frac{\\text{N}\\cdot\\text{m}^2}{\\text{C}^2}$; hằng số điện môi chân không $\\varepsilon_0 \\approx 8,85 \\times 10^{-12}\\,\\frac{\\text{C}^2}{\\text{N}\\cdot\\text{m}^2}$.",
          "• <strong>Trong môi trường điện môi đồng nhất có hằng số điện môi $\\varepsilon$ (hoặc $\\varepsilon_r \\ge 1$):</strong> Lực tương tác giảm đi $\\varepsilon$ lần so với trong chân không: $$F = k\\frac{|q_1 q_2|}{\\varepsilon r^2} = \\frac{F_0}{\\varepsilon}$$",
          "• <strong>Nguyên lí chồng chất lực điện:</strong> Khi một điện tích chịu tác dụng của nhiều điện tích điểm khác, hợp lực tác dụng lên nó bằng tổng vectơ các lực thành phần: $\\vec{F} = \\vec{F}_1 + \\vec{F}_2 + \\cdots$."
        ]
      },
      {
        "heading": "3. Ứng dụng thực tế của lực tĩnh điện trong SGK",
        "items": [
          "• <strong>Sơn tĩnh điện:</strong> Hạt sơn khi phun ra được tích điện dương, còn vật kim loại cần sơn được tích điện âm; nhờ lực hút tĩnh điện Coulomb, các hạt sơn bám chặt và phủ đều lên mọi ngóc ngách của bề mặt vật, tiết kiệm sơn và bền đẹp.",
          "• <strong>Lọc bụi tĩnh điện và máy photocopy / máy in laser:</strong> Tích điện cho các hạt bụi khói công nghiệp để hút chúng về bản cực trái dấu, làm sạch khí thải."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Định luật Coulomb (chân không)",
        "eq": "$$F = k\\frac{|q_1 q_2|}{r^2}, \\quad k = 9\\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$$"
      },
      {
        "name": "Liên hệ hằng số điện môi ε₀",
        "eq": "$$k = \\frac{1}{4\\pi\\varepsilon_0}, \\quad \\varepsilon_0 \\approx 8,85\\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)$$"
      },
      {
        "name": "Trong điện môi đồng nhất ε",
        "eq": "$$F_{\\varepsilon} = \\frac{F_0}{\\varepsilon} = k\\frac{|q_1 q_2|}{\\varepsilon r^2}$$"
      },
      {
        "name": "Tổng hợp 2 lực góc α",
        "eq": "$$F = \\sqrt{F_1^2 + F_2^2 + 2F_1F_2\\cos\\alpha}$$"
      }
    ],
    "applications": [
      "Công nghệ sơn tĩnh điện khung xe ô tô, xe máy, hàng rào kim loại.",
      "Hệ thống lọc bụi tĩnh điện tại các nhà máy nhiệt điện, nhà máy xi măng bảo vệ môi trường."
    ]
  },
  {
    "num": 17,
    "chapter": 3,
    "title": "Khái niệm điện trường",
    "pages": "tr. 65–70",
    "type": "Lí thuyết",
    "subtitle": "Bản chất điện trường, vectơ cường độ điện trường E, điện trường của điện tích điểm, nguyên lí chồng chất và đường sức điện.",
    "diagramCaption": "Vectơ cường độ điện trường E tại điểm M do điện tích Q dương/âm gây ra và hệ đường sức điện (điện phổ).",
    "sections": [
      {
        "heading": "1. Khái niệm điện trường và Cường độ điện trường",
        "items": [
          "<strong>Điện trường:</strong> Là một dạng vật chất (môi trường) tồn tại xung quanh điện tích và gắn liền với điện tích; điện trường tác dụng lực điện lên các điện tích khác đặt trong nó (truyền tương tác điện).",
          "<strong>Vectơ cường độ điện trường ($\\vec{E}$):</strong> Đặc trưng cho độ mạnh yếu và phương chiều của điện trường về phương diện tác dụng lực tại một điểm. Đặt một điện tích thử dương $q > 0$ nhỏ tại điểm $M$, thương số giữa lực điện $\\vec{F}$ tác dụng lên $q$ và độ lớn điện tích $q$ không phụ thuộc vào $q$: $$\\vec{E} = \\frac{\\vec{F}}{q} \\implies \\vec{F} = q\\vec{E}$$",
          "• <strong>Đơn vị cường độ điện trường:</strong> vôn trên mét ($\\text{V/m}$) hoặc niutơn trên culông ($\\text{N/C}$).",
          "• <strong>Chiều của $\\vec{F}$ và $\\vec{E}$:</strong> Nếu $q > 0$ thì $\\vec{F} \\uparrow\\uparrow \\vec{E}$ (cùng chiều); nếu $q < 0$ thì $\\vec{F} \\uparrow\\downarrow \\vec{E}$ (ngược chiều)."
        ]
      },
      {
        "heading": "2. Cường độ điện trường của một điện tích điểm Q và Nguyên lí chồng chất",
        "items": [
          "Cường độ điện trường do một điện tích điểm $Q$ gây ra tại một điểm $M$ cách $Q$ một đoạn $r$ trong chân không (hoặc điện môi $\\varepsilon$) có độ lớn: $$E = k\\frac{|Q|}{r^2} = \\frac{|Q|}{4\\pi\\varepsilon_0 r^2} \\quad \\left(\\text{trong điện môi: } E = k\\frac{|Q|}{\\varepsilon r^2}\\right)$$",
          "• <strong>Phương và chiều của $\\vec{E}$ do $Q$ gây ra:</strong> Có điểm đặt tại $M$, phương nằm trên đường thẳng nối $Q$ và $M$; <strong>hướng ra xa $Q$ nếu $Q > 0$</strong> và <strong>hướng lại gần $Q$ nếu $Q < 0$</strong>. (<em>Lưu ý:</em> Độ lớn $E$ tại $M$ hoàn toàn không phụ thuộc vào điện tích thử $q$ đặt tại $M$).",
          "• <strong>Nguyên lí chồng chất điện trường:</strong> Nếu tại điểm $M$ có nhiều điện trường $\\vec{E}_1, \\vec{E}_2, \\dots$ do các điện tích $Q_1, Q_2, \\dots$ gây ra đồng thời thì cường độ điện trường tổng hợp tại $M$ là: $$\\vec{E} = \\vec{E}_1 + \\vec{E}_2 + \\cdots$$"
        ]
      },
      {
        "heading": "3. Điện phổ và Đường sức điện",
        "items": [
          "• <strong>Điện phổ:</strong> Là hình ảnh các hạt nhỏ cách điện (như bột mạt cưa, hạt cỏ trong dầu cách điện) sắp xếp thành những đường cong rõ nét dưới tác dụng của điện trường, giúp quan sát trực quan hình dạng điện trường.",
          "• <strong>Đường sức điện:</strong> Là đường được vẽ trong điện trường sao cho <strong>tiếp tuyến tại bất kì điểm nào trên đường cũng trùng với phương của vectơ cường độ điện trường $\\vec{E}$ tại điểm đó</strong>; chiều của đường sức điện là chiều của $\\vec{E}$.",
          "• <strong>Các tính chất của đường sức điện:</strong><br>1. Qua mỗi điểm trong điện trường chỉ vẽ được <strong>một và chỉ một</strong> đường sức điện (các đường sức điện <strong>không bao giờ cắt nhau</strong>).<br>2. Đường sức điện là những đường có hướng: <strong>bắt đầu (đi ra) từ điện tích dương</strong> và <strong>kết thúc (đi vào) ở điện tích âm</strong> (hoặc ở vô cực nếu chỉ có một loại điện tích).<br>3. Nơi nào cường độ điện trường lớn hơn thì các đường sức điện ở đó được vẽ <strong>mau (dày) hơn</strong>; nơi nào điện trường yếu hơn thì đường sức <strong>thưa hơn</strong>."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Định nghĩa Cường độ điện trường",
        "eq": "$$\\vec{E} = \\frac{\\vec{F}}{q} \\iff \\vec{F} = q\\vec{E} \\quad (F = |q|E)$$"
      },
      {
        "name": "Điện trường của điện tích điểm Q",
        "eq": "$$E = k\\frac{|Q|}{r^2} \\quad (\\text{đơn vị: V/m hoặc N/C})$$"
      },
      {
        "name": "Nguyên lí chồng chất điện trường",
        "eq": "$$\\vec{E} = \\vec{E}_1 + \\vec{E}_2 + \\cdots$$"
      },
      {
        "name": "Điều kiện điện trường triệt tiêu (E = 0)",
        "eq": "$$\\vec{E}_1 + \\vec{E}_2 = \\vec{0} \\iff \\begin{cases} \\vec{E}_1 \\uparrow\\downarrow \\vec{E}_2 \\\\ E_1 = E_2 \\end{cases}$$"
      }
    ],
    "applications": [
      "Xác định vùng an toàn quanh đường dây tải điện cao thế và trạm biến áp.",
      "Giải thích hiện tượng phóng điện mũi nhọn (cột thu lôi chống sét Benjamin Franklin) do mật độ điện tích và đường sức tập trung rất dày ở đầu nhọn."
    ]
  },
  {
    "num": 18,
    "chapter": 3,
    "title": "Điện trường đều",
    "pages": "tr. 71–75",
    "type": "Lí thuyết",
    "subtitle": "Đặc điểm điện trường đều giữa hai bản phẳng song song tích điện trái dấu, liên hệ E = U/d và chuyển động của hạt mang điện.",
    "diagramCaption": "Điện trường đều giữa hai bản kim loại phẳng song song và quỹ đạo parabol của hạt tích điện bay vào vuông góc đường sức.",
    "sections": [
      {
        "heading": "1. Khái niệm điện trường đều và Điện trường giữa hai bản phẳng song song",
        "items": [
          "<strong>Định nghĩa:</strong> Điện trường đều là điện trường mà vectơ cường độ điện trường $\\vec{E}$ tại mọi điểm đều có <strong>cùng phương, cùng chiều và cùng độ lớn</strong>.",
          "• Hệ các đường sức của điện trường đều là những <strong>đường thẳng song song, cùng chiều và cách đều nhau</strong>.",
          "• <strong>Cách tạo ra điện trường đều:</strong> Đặt hai bản kim loại phẳng lớn song song với nhau, cách nhau một khoảng $d$ nhỏ so với kích thước bản và tích điện trái dấu có độ lớn bằng nhau. Điện trường ở khoảng không gian giữa hai bản (trừ phần sát mép bản) là điện trường đều, có đường sức vuông góc với hai bản, đi từ bản dương sang bản âm.",
          "• <strong>Liên hệ giữa cường độ điện trường đều $E$ và hiệu điện thế $U$ giữa hai bản:</strong> $$E = \\frac{U}{d} \\implies U = E \\cdot d \\quad (\\text{đơn vị của } E: \\text{V/m})$$"
        ]
      },
      {
        "heading": "2. Tác dụng của điện trường đều lên điện tích chuyển động",
        "items": [
          "Khi một hạt mang điện tích $q$, khối lượng $m$ chuyển động trong điện trường đều $\\vec{E}$, hạt chịu tác dụng của lực điện không đổi $\\vec{F} = q\\vec{E}$ và thu gia tốc không đổi theo định luật II Newton: $$\\vec{a} = \\frac{\\vec{F}}{m} = \\frac{q\\vec{E}}{m}$$",
          "• <strong>Trường hợp 1 (Hạt bay vào dọc theo đường sức điện):</strong> Hạt chuyển động <strong>thẳng biến đổi đều</strong> (nhanh dần đều nếu lực điện cùng chiều vận tốc đầu $\\vec{v}_0$; chậm dần đều nếu lực điện ngược chiều $\\vec{v}_0$).",
          "• <strong>Trường hợp 2 (Hạt bay vào theo phương Ox vuông góc với các đường sức điện Oy):</strong> Tương tự chuyển động ném ngang trong trọng trường!<br>– Theo phương $Ox$ (vuông góc $\\vec{E}$): Chuyển động thẳng đều $x = v_0 t$.<br>– Theo phương $Oy$ (song song $\\vec{E}$): Chuyển động biến đổi đều với gia tốc $a_y = \\frac{|q|E}{m} = \\frac{|q|U}{md}$ và độ lệch $y = \\frac{1}{2}a_y t^2 = \\frac{|q|E}{2mv_0^2}x^2$.<br>– <strong>Quỹ đạo của hạt trong vùng điện trường đều là một nhánh đường parabol</strong> (lệch về phía bản âm nếu $q > 0$, lệch về phía bản dương nếu $q < 0$)."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Cường độ điện trường đều",
        "eq": "$$E = \\frac{U}{d} \\iff U = E \\cdot d$$"
      },
      {
        "name": "Gia tốc của hạt tích điện",
        "eq": "$$a = \\frac{|q|E}{m} = \\frac{|q|U}{md}$$"
      },
      {
        "name": "Phương trình quỹ đạo Parabol (v₀ ⊥ E)",
        "eq": "$$y = \\frac{1}{2}a t^2 = \\frac{|q|E}{2mv_0^2}x^2$$"
      }
    ],
    "applications": [
      "Ứng dụng lái tia electron trong ống phóng điện tử (CRT), dao động kí điện tử, máy gia tốc hạt.",
      "Công nghệ in phun tĩnh điện (Inkjet Printer): Tích điện cho các giọt mực siêu nhỏ rồi dùng cặp bản phẳng tạo điện trường đều làm lệch giọt mực đến đúng vị trí chữ cái trên trang giấy; thí nghiệm giọt dầu Millikan đo điện tích nguyên tố $e$."
    ]
  },
  {
    "num": 19,
    "chapter": 3,
    "title": "Thế năng điện",
    "pages": "tr. 76–78",
    "type": "Lí thuyết",
    "subtitle": "Công của lực điện trường tĩnh, tính chất thế của trường tĩnh điện và thế năng của một điện tích trong điện trường.",
    "diagramCaption": "Công của lực điện khi dịch chuyển điện tích q từ M đến N không phụ thuộc hình dạng đường đi mà chỉ phụ thuộc khoảng cách hình chiếu d = MH dọc theo đường sức.",
    "sections": [
      {
        "heading": "1. Công của lực điện",
        "items": [
          "Xét điện tích $q$ dịch chuyển từ điểm $M$ đến điểm $N$ theo một đường bất kì trong điện trường đều $\\vec{E}$. Gọi $d = MH = s\\cos\\alpha$ là độ dài đại số của hình chiếu đoạn nối $MN$ lên một đường sức điện (theo chiều đường sức thì $d > 0$, ngược chiều đường sức thì $d < 0$): $$A_{MN} = qEd$$",
          "• <strong>Tính chất đặc biệt (Trường thế):</strong> Công của lực điện trong sự dịch chuyển của một điện tích trong điện trường tĩnh <strong>không phụ thuộc vào hình dạng của đường đi mà chỉ phụ thuộc vào vị trí của điểm đầu $M$ và điểm cuối $N$</strong>. (Nếu điện tích dịch chuyển theo một đường cong kín quay về điểm xuất phát thì công của lực điện bằng $0$)."
        ]
      },
      {
        "heading": "2. Thế năng của một điện tích trong điện trường (Thế năng điện)",
        "items": [
          "<strong>Khái niệm:</strong> Thế năng của một điện tích $q$ trong điện trường (còn gọi là thế năng điện, kí hiệu $W_M$) đặc trưng cho khả năng sinh công của điện trường khi đặt điện tích $q$ tại điểm $M$ đang xét.",
          "• <strong>Trong điện trường đều:</strong> Nếu chọn mốc thế năng tại bản âm ($W_0 = 0$) và điểm $M$ cách bản âm một khoảng $d$ thì $W_M = A_{M\\to\\text{bản âm}} = qEd$.",
          "• <strong>Trong điện trường bất kì:</strong> Thường chọn mốc thế năng ở vô cực ($W_\\infty = 0$). Khi đó thế năng của điện tích $q$ tại điểm $M$ bằng công của lực điện khi dịch chuyển $q$ từ $M$ ra xa vô cực: $$W_M = A_{M\\infty} = qV_M$$",
          "• <strong>Liên hệ giữa công của lực điện và độ giảm thế năng điện:</strong> Khi điện tích $q$ dịch chuyển từ $M$ đến $N$, công mà lực điện thực hiện bằng độ giảm thế năng điện của điện tích: $$A_{MN} = W_M - W_N = -\\Delta W_\\text{t}$$",
          "• Nếu lực điện sinh công dương ($A_{MN} > 0$) thì thế năng điện giảm ($W_M > W_N$) và động năng tăng (theo định luật bảo toàn năng lượng $W_M + W_{\\text{đ}M} = W_N + W_{\\text{đ}N}$ khi chỉ có lực điện tác dụng)."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Công của lực điện trường đều",
        "eq": "$$A_{MN} = qEd = qE \\cdot s\\cos\\alpha$$"
      },
      {
        "name": "Công & Độ biến thiên thế năng",
        "eq": "$$A_{MN} = W_M - W_N = -\\Delta W_\\text{t}$$"
      },
      {
        "name": "Thế năng điện tại điểm M",
        "eq": "$$W_M = A_{M\\infty} = qV_M \\quad (\\text{đơn vị: J})$$"
      },
      {
        "name": "Định lí động năng trong điện trường",
        "eq": "$$A_{MN} = W_{\\text{đ}N} - W_{\\text{đ}M} = \\frac{1}{2}mv_N^2 - \\frac{1}{2}mv_M^2$$"
      }
    ],
    "applications": [
      "Tính tốc độ của electron và ion sau khi được tăng tốc trong điện trường của súng phóng điện tử và máy X-quang.",
      "Tương tự như thế năng trọng trường $mgh$, thế năng điện giúp giải quyết các bài toán chuyển động phức tạp trong điện trường mà không cần tính tích phân theo quỹ đạo."
    ]
  },
  {
    "num": 20,
    "chapter": 3,
    "title": "Điện thế",
    "pages": "tr. 79–82",
    "type": "Lí thuyết",
    "subtitle": "Khái niệm điện thế tại một điểm, hiệu điện thế giữa hai điểm, công thức A = qU và mối liên hệ giữa E với U.",
    "diagramCaption": "Các mặt đẳng thế vuông góc với đường sức điện; điện thế giảm dần theo chiều đường sức điện (V_M > V_N).",
    "sections": [
      {
        "heading": "1. Điện thế tại một điểm trong điện trường",
        "items": [
          "Thương số giữa thế năng điện $W_M$ của một điện tích $q$ đặt tại điểm $M$ và điện tích $q$ không phụ thuộc vào độ lớn hay dấu của $q$, mà chỉ phụ thuộc vào điện trường và vị trí điểm $M$.",
          "<strong>Định nghĩa:</strong> Điện thế tại một điểm $M$ trong điện trường (kí hiệu $V_M$) là đại lượng đặc trưng riêng cho điện trường về phương diện tạo ra thế năng khi đặt tại đó một điện tích $q$, được xác định bằng thương số của công của lực điện dịch chuyển $q$ từ $M$ ra vô cực và độ lớn của $q$: $$V_M = \\frac{W_M}{q} = \\frac{A_{M\\infty}}{q} \\implies W_M = qV_M$$",
          "• <strong>Đặc điểm:</strong> Điện thế là đại lượng <strong>vô hướng</strong>, có thể dương, âm hoặc bằng $0$ tùy thuộc vào cách chọn mốc điện thế (thường chọn điện thế ở mặt đất hoặc ở vô cực làm mốc $0\\text{ V}$). Đơn vị của điện thế là <strong>vôn ($\\text{V}$)</strong>, $1\\text{ V} = 1\\text{ J/C}$."
        ]
      },
      {
        "heading": "2. Hiệu điện thế giữa hai điểm (U_MN) và Công của lực điện",
        "items": [
          "<strong>Định nghĩa hiệu điện thế:</strong> Hiệu điện thế giữa hai điểm $M$ và $N$ trong điện trường là đại lượng đặc trưng cho khả năng sinh công của điện trường trong sự dịch chuyển một điện tích từ $M$ đến $N$: $$U_{MN} = V_M - V_N = \\frac{W_M - W_N}{q} = \\frac{A_{MN}}{q}$$",
          "• Suy ra công thức tổng quát tính <strong>công của lực điện</strong> (đúng cho mọi điện trường tĩnh, cả đều và không đều): $$A_{MN} = qU_{MN} = q(V_M - V_N)$$",
          "• Chú ý: $U_{MN} = -U_{NM}$. Giá trị của hiệu điện thế $U_{MN}$ entre hai điểm xác định là <strong>không phụ thuộc vào việc chọn mốc điện thế</strong>."
        ]
      },
      {
        "heading": "3. Hệ thức liên hệ giữa Cường độ điện trường và Hiệu điện thế",
        "items": [
          "Từ $A_{MN} = qEd$ và $A_{MN} = qU_{MN}$ đối với hai điểm $M, N$ nằm trên cùng một đường sức của điện trường đều cách nhau đoạn $d$: $$E = \\frac{U_{MN}}{d} \\iff U_{MN} = V_M - V_N = E \\cdot d$$",
          "• <strong>Quy tắc quan trọng:</strong> Chiều của đường sức điện luôn hướng từ nơi có <strong>điện thế cao sang nơi có điện thế thấp</strong> (dọc theo chiều đường sức điện, điện thế giảm dần).",
          "• Với điện trường bất kì không đều, công thức $E = \\frac{|\\Delta V|}{\\Delta d}$ chỉ áp dụng gần đúng cho hai điểm rất gần nhau dọc theo đường sức."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Điện thế tại điểm M",
        "eq": "$$V_M = \\frac{W_M}{q} = \\frac{A_{M\\infty}}{q} \\quad (1\\text{ V} = 1\\text{ J/C})$$"
      },
      {
        "name": "Hiệu điện thế & Công lực điện",
        "eq": "$$U_{MN} = V_M - V_N = \\frac{A_{MN}}{q} \\iff A_{MN} = qU_{MN}$$"
      },
      {
        "name": "Liên hệ E và U (điện trường đều)",
        "eq": "$$E = \\frac{U}{d} \\iff U = E \\cdot d$$"
      }
    ],
    "applications": [
      "Giải thích điện áp bước và lý do chim đậu trên một dây trần cao thế không bị giật (vì hai chân chim rất gần nhau trên cùng một dây dẫn đẳng thế nên $U \\approx 0$).",
      "Đo điện tâm đồ (ECG) và điện não đồ (EEG) dựa trên sự chênh lệch điện thế sinh học giữa các điểm trên cơ thể."
    ]
  },
  {
    "num": 21,
    "chapter": 3,
    "title": "Tụ điện",
    "pages": "tr. 83–89",
    "type": "Lí thuyết",
    "subtitle": "Cấu tạo tụ điện, định nghĩa điện dung C = Q/U, công thức ghép tụ điện nối tiếp – song song và năng lượng điện trường trong tụ điện.",
    "diagramCaption": "Cấu tạo tụ điện phẳng, sơ đồ ghép tụ điện nối tiếp (1/C = Σ1/C_i) và ghép tụ điện song song (C = ΣC_i).",
    "sections": [
      {
        "heading": "1. Cấu tạo tụ điện, Cách tích điện và Điện dung của tụ điện",
        "items": [
          "<strong>Cấu tạo:</strong> Tụ điện là một hệ hai vật dẫn đặt gần nhau và ngăn cách nhau bằng một lớp cách điện (điện môi). Mỗi vật dẫn đó gọi là một <em>bản của tụ điện</em>. Tụ điện phẳng gồm hai bản kim loại phẳng đặt song song đối diện nhau.",
          "• <strong>Tích điện và phóng điện:</strong> Để tích điện cho tụ, ta nối hai bản tụ với hai cực của nguồn điện một chiều: bản nối cực dương tích điện $+Q$, bản nối cực âm tích điện $-Q$. Độ lớn $Q$ trên bản dương gọi là <em>điện tích của tụ điện</em>.",
          "<strong>Điện dung của tụ điện ($C$):</strong> Là đại lượng đặc trưng cho khả năng tích điện của tụ điện ở một hiệu điện thế nhất định, được đo bằng thương số của điện tích $Q$ của tụ và hiệu điện thế $U$ giữa hai bản tụ: $$C = \\frac{Q}{U} \\iff Q = C \\cdot U$$",
          "• Điện dung $C$ chỉ phụ thuộc vào cấu tạo hình học của tụ và chất điện môi giữa hai bản ($C = \\frac{\\varepsilon S}{4\\pi kd} = \\frac{\\varepsilon\\varepsilon_0 S}{d}$), <strong>không phụ thuộc vào $Q$ và $U$</strong>.",
          "• <strong>Đơn vị điện dung:</strong> fara (kí hiệu $\\text{F}$), $1\\text{ F} = 1\\text{ C/V}$. Các ước thông dụng: $1\\,\\mu\\text{F} = 10^{-6}\\text{ F}$, $1\\text{ nF} = 10^{-9}\\text{ F}$, $1\\text{ pF} = 10^{-12}\\text{ F}$.",
          "• <strong>Số liệu định mức trên vỏ tụ (ví dụ $1000\\,\\mu\\text{F} - 25\\text{ V}$):</strong> Cho biết điện dung $C = 1000\\,\\mu\\text{F}$ và hiệu điện thế giới hạn (tối đa) được phép đặt vào tụ $U_{\\text{gh}} = 25\\text{ V}$ (nếu đặt $U > U_{\\text{gh}}$ thì lớp điện môi bị <em>đánh thủng</em> làm hỏng tụ)."
        ]
      },
      {
        "heading": "2. Ghép các tụ điện: Ghép nối tiếp và Ghép song song",
        "items": [
          "• <strong>Ghép nối tiếp ($C_1$ nt $C_2$ nt $\\dots$ nt $C_n$):</strong> Bản âm của tụ trước nối với bản dương của tụ kế tiếp:<br>– Điện tích trên các tụ bằng nhau: $Q_{\\text{bộ}} = Q_1 = Q_2 = \\cdots = Q_n$.<br>– Hiệu điện thế tổng: $U_{\\text{bộ}} = U_1 + U_2 + \\cdots + U_n$.<br>– Điện dung tương đương (giảm đi, nhỏ hơn điện dung nhỏ nhất): $$\\frac{1}{C_{\\text{bộ}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\cdots + \\frac{1}{C_n} \\quad \\left(\\text{với 2 tụ: } C_{\\text{bộ}} = \\frac{C_1 C_2}{C_1 + C_2}\\right)$$",
          "• <strong>Ghép song song ($C_1 \\parallel C_2 \\parallel \\dots \\parallel C_n$):</strong> Các bản cùng dấu nối chung với nhau:<br>– Hiệu điện thế bằng nhau: $U_{\\text{bộ}} = U_1 = U_2 = \\cdots = U_n$.<br>– Điện tích tổng: $Q_{\\text{bộ}} = Q_1 + Q_2 + \\cdots + Q_n$.<br>– Điện dung tương đương (tăng lên): $$C_{\\text{bộ}} = C_1 + C_2 + \\cdots + C_n$$"
        ]
      },
      {
        "heading": "3. Năng lượng của tụ điện (Năng lượng điện trường)",
        "items": [
          "Khi tụ điện được tích điện, điện trường giữa hai bản tụ dự trữ một năng lượng gọi là <strong>năng lượng điện trường trong tụ điện</strong>: $$W = \\frac{1}{2}QU = \\frac{1}{2}CU^2 = \\frac{Q^2}{2C} \\quad (\\text{đơn vị: J})$$",
          "<strong>Lưu ý an toàn bắt buộc:</strong> Sau khi đã ngắt mạch điện khỏi nguồn, tụ điện (nhất là các tụ dung lượng lớn/điện áp cao trong nguồn tivi, lò vi sóng, đèn flash) vẫn còn lưu giữ điện tích và hiệu điện thế lớn; tuyệt đối không chạm tay trực tiếp vào hai cực tụ mà phải xả điện an toàn qua điện trở trước khi sửa chữa."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Điện dung & Điện tích tụ điện",
        "eq": "$$C = \\frac{Q}{U} \\iff Q = CU, \\quad C_{\\text{phẳng}} = \\frac{\\varepsilon\\varepsilon_0 S}{d}$$"
      },
      {
        "name": "Ghép tụ điện nối tiếp",
        "eq": "$$Q = Q_1 = Q_2, \\quad U = U_1 + U_2, \\quad \\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2}$$"
      },
      {
        "name": "Ghép tụ điện song song",
        "eq": "$$U = U_1 = U_2, \\quad Q = Q_1 + Q_2, \\quad C = C_1 + C_2$$"
      },
      {
        "name": "Năng lượng tụ điện",
        "eq": "$$W = \\frac{1}{2}QU = \\frac{1}{2}CU^2 = \\frac{Q^2}{2C}$$"
      }
    ],
    "applications": [
      "Tích trữ và phóng năng lượng cực nhanh trong đèn flash máy ảnh, máy khử rung tim cấp cứu y tế (Defibrillator), tụ khởi động động cơ quạt điện.",
      "Lọc nguồn một chiều phẳng và làm mạch chọn sóng trong các thiết bị điện tử."
    ]
  },
  {
    "num": 22,
    "chapter": 4,
    "title": "Cường độ dòng điện",
    "pages": "tr. 90–94",
    "type": "Lí thuyết",
    "subtitle": "Bản chất dòng điện, chiều quy ước, định nghĩa cường độ dòng điện I = Δq/Δt, đơn vị điện lượng Ah/mAh và công thức tốc độ trôi I = nSve.",
    "diagramCaption": "Mô hình chuyển động có hướng của các electron tự do trong dây dẫn kim loại ngược chiều điện trường E với tốc độ trôi v.",
    "sections": [
      {
        "heading": "1. Dòng điện và Cường độ dòng điện",
        "items": [
          "<strong>Dòng điện:</strong> Là dòng dịch chuyển có hướng của các hạt mang điện (điện tích tự do). Trong kim loại, hạt mang điện tự do là các <em>electron tự do</em> (dịch chuyển ngược chiều điện trường). Trong dung dịch điện phân, cả <em>ion dương và ion âm</em> cùng dịch chuyển có hướng theo hai chiều ngược nhau.",
          "<strong>Chiều quy ước của dòng điện:</strong> Là chiều dịch chuyển có hướng của các điện tích dương (ngược với chiều dịch chuyển của các electron tự do trong kim loại).",
          "<strong>Cường độ dòng điện ($I$):</strong> Là đại lượng đặc trưng cho tác dụng mạnh, yếu của dòng điện, được xác định bằng điện lượng $\\Delta q$ chuyển qua tiết diện thẳng của vật dẫn trong một đơn vị thời gian $\\Delta t$: $$I = \\frac{\\Delta q}{\\Delta t} \\implies \\Delta q = I \\cdot \\Delta t$$",
          "• <strong>Dòng điện không đổi:</strong> Là dòng điện có chiều và cường độ không thay đổi theo thời gian ($I = \\frac{q}{t}$).",
          "• <strong>Đơn vị trong hệ SI:</strong> Cường độ dòng điện đo bằng ampe ($\\text{A}$); điện lượng đo bằng culông ($\\text{C}$), với $1\\text{ C} = 1\\text{ A}\\cdot\\text{s}$. Số electron đi qua tiết diện dây trong thời gian $\\Delta t$ là $N_e = \\frac{\\Delta q}{e} = \\frac{I\\Delta t}{1,6\\times 10^{-19}}$."
        ]
      },
      {
        "heading": "2. Liên hệ giữa Cường độ dòng điện với mật độ và tốc độ dịch chuyển có hướng của hạt mang điện",
        "items": [
          "Xét một đoạn dây dẫn kim loại hình trụ có tiết diện thẳng $S$ ($\\text{m}^2$), mật độ electron tự do là $n$ (số hạt trên $1\\text{ m}^3$), mỗi hạt mang điện tích có độ lớn $e = 1,6\\times 10^{-19}\\text{ C}$ chuyển động có hướng với tốc độ trôi trung bình $v$ ($\\text{m/s}$). Trong thời gian $\\Delta t$, các electron trong thể tích $V = S \\cdot (v\\Delta t)$ đều đi qua tiết diện thẳng, mang theo tổng điện lượng $\\Delta q = n \\cdot (Sv\\Delta t) \\cdot e$:",
          "$$I = \\frac{\\Delta q}{\\Delta t} = n S v e \\implies v = \\frac{I}{n S e}$$",
          "• <em>Giải thích nghịch lí thực tế:</em> Tốc độ trôi có hướng $v$ của electron trong dây đồng rất nhỏ (chỉ cỡ $10^{-4} - 10^{-3}\\text{ m/s}$, tức vài phần mười milimét mỗi giây), nhưng cường độ dòng điện $I$ vẫn lớn vì mật độ electron tự do trong kim loại cực kì lớn ($n \\approx 8,5 \\times 10^{28}\\text{ hạt/m}^3$), và khi đóng công tắc đèn sáng ngay lập tức vì <strong>điện trường lan truyền trong dây với tốc độ xấp xỉ tốc độ ánh sáng $c$</strong>."
        ]
      },
      {
        "heading": "3. Ý nghĩa thông số mAh (miliampe-giờ) trên Pin và Sạc dự phòng",
        "items": [
          "• Đơn vị $\\text{Ah}$ (ampe-giờ) hay $\\text{mAh}$ (miliampe-giờ) ghi trên pin điện thoại/sạc dự phòng là đơn vị đo <strong>điện lượng cực đại ($q$)</strong> mà pin có thể cung cấp (không phải đơn vị năng lượng trực tiếp): $$1\\text{ Ah} = 1\\text{ A} \\times 3600\\text{ s} = 3\\,600\\text{ C}, \\qquad 1\\text{ mAh} = 10^{-3}\\text{ Ah} = 3,6\\text{ C}$$"
        ]
      }
    ],
    "formulas": [
      {
        "name": "Cường độ dòng điện & Điện lượng",
        "eq": "$$I = \\frac{\\Delta q}{\\Delta t} \\iff \\Delta q = I\\Delta t = N_e \\cdot e$$"
      },
      {
        "name": "Công thức tốc độ trôi hạt tải",
        "eq": "$$I = n S v e \\implies v = \\frac{I}{n S e}$$"
      },
      {
        "name": "Quy đổi đơn vị mAh sang Coulomb",
        "eq": "$$1\\text{ Ah} = 3\\,600\\text{ C}, \\quad 1\\text{ mAh} = 3,6\\text{ C}$$"
      }
    ],
    "applications": [
      "Tính toán thời gian sử dụng thực tế của pin điện thoại, laptop từ dung lượng $\\text{mAh}$ và dòng tiêu thụ trung bình.",
      "Sử dụng Ampe kế (mắc nối tiếp vào đoạn mạch, chốt dương hướng về cực dương nguồn) để đo dòng điện."
    ]
  },
  {
    "num": 23,
    "chapter": 4,
    "title": "Điện trở. Định luật Ohm",
    "pages": "tr. 95–101",
    "type": "Lí thuyết",
    "subtitle": "Khái niệm điện trở, định luật Ohm cho vật dẫn kim loại, đường đặc trưng Vôn – Ampe, công thức R = ρl/S và sự phụ thuộc vào nhiệt độ.",
    "diagramCaption": "Đường đặc trưng Vôn – Ampe (I–U) của điện trở kim loại ở nhiệt độ không đổi (đường thẳng) so với dây tóc bóng đèn sợi đốt (đường cong) và nhiệt điện trở NTC/PTC.",
    "sections": [
      {
        "heading": "1. Điện trở, Định luật Ohm và Đường đặc trưng Vôn – Ampe",
        "items": [
          "<strong>Điện trở ($R$):</strong> Là đại lượng đặc trưng cho mức độ cản trở dòng điện của vật dẫn, được xác định bằng thương số giữa hiệu điện thế $U$ đặt vào hai đầu vật dẫn và cường độ dòng điện $I$ chạy qua nó: $$R = \\frac{U}{I}$$",
          "• <strong>Đơn vị điện trở:</strong> ôm (kí hiệu $\\Omega$), $1\\,\\Omega = 1\\text{ V/A}$; $1\\text{ k}\\Omega = 10^3\\,\\Omega$, $1\\text{ M}\\Omega = 10^6\\,\\Omega$.",
          "<strong>Định luật Ohm cho vật dẫn kim loại (ở nhiệt độ không đổi):</strong> Cường độ dòng điện chạy qua vật dẫn tỉ lệ thuận với hiệu điện thế ở hai đầu vật dẫn và tỉ lệ nghịch với điện trở của nó: $$I = \\frac{U}{R} \\iff U = I \\cdot R$$",
          "• <strong>Đường đặc trưng Vôn – Ampe $(I - U)$:</strong> Với vật dẫn kim loại ở nhiệt độ không đổi, đồ thị $I$ theo $U$ là một <strong>đường thẳng đi qua gốc tọa độ</strong>. Đường thẳng nào có <strong>độ dốc $\\tan\\alpha = \\frac{I}{U} = \\frac{1}{R}$ càng lớn thì điện trở $R$ càng nhỏ</strong>."
        ]
      },
      {
        "heading": "2. Nguyên nhân gây ra điện trở và Công thức điện trở theo kích thước hình học",
        "items": [
          "• <strong>Nguyên nhân vi mô:</strong> Trong kim loại, sự chuyển động có hướng của các electron tự do bị cản trở do va chạm với các <strong>ion dương ở nút mạng tinh thể</strong> (đang dao động nhiệt quanh vị trí cân bằng) và các nguyên tử tạp chất.",
          "• <strong>Công thức tính điện trở của dây dẫn đồng chất hình trụ chiều dài $l$, tiết diện $S$:</strong> $$R = \\rho\\frac{l}{S}$$",
          "• Trong đó $\\rho$ là <strong>điện trở suất</strong> của vật liệu (đơn vị $\\Omega\\cdot\\text{m}$), bằng điện trở của một khối vật dẫn hình lập phương cạnh $1\\text{ m}$. Vật liệu có $\\rho$ càng nhỏ thì dẫn điện càng tốt (Bạc, Đồng, Vàng, Nhôm)."
        ]
      },
      {
        "heading": "3. Ảnh hưởng của nhiệt độ lên điện trở: Đèn sợi đốt, Điện trở nhiệt (Thermistor) và Siêu dẫn",
        "items": [
          "• <strong>Với kim loại:</strong> Khi nhiệt độ $t$ tăng, các ion ở nút mạng dao động nhiệt mạnh hơn làm tăng xác suất va chạm với electron tự do, nên điện trở suất $\\rho$ và điện trở $R$ của kim loại <strong>tăng tuyến tính theo nhiệt độ</strong>: $$\\rho = \\rho_0[1 + \\alpha(t - t_0)], \\qquad R = R_0[1 + \\alpha(t - t_0)]$$ (với $\\alpha > 0$ là hệ số nhiệt điện trở, đơn vị $\\text{K}^{-1}$).",
          "• <strong>Đường đặc trưng $I - U$ của bóng đèn sợi đốt (dây tóc vonfram):</strong> Không phải là đường thẳng mà là <strong>đường cong có độ dốc giảm dần khi $U$ tăng</strong>, vì khi dòng điện tăng làm dây tóc nóng lên tới hàng nghìn độ C, kéo theo điện trở $R$ tăng mạnh.",
          "• <strong>Điện trở nhiệt (Thermistor):</strong> Là linh kiện bán dẫn có điện trở biến thiên rất nhạy theo nhiệt độ:<br>– <em>Điện trở nhiệt thuận (PTC – Positive Temperature Coefficient):</em> Khi nhiệt độ tăng thì điện trở tăng mạnh.<br>– <em>Điện trở nhiệt nghịch (NTC – Negative Temperature Coefficient):</em> Khi nhiệt độ tăng thì điện trở giảm mạnh (do mật độ hạt tải tăng vọt).",
          "• <strong>Hiện tượng siêu dẫn:</strong> Khi hạ nhiệt độ xuống dưới nhiệt độ tới hạn $T_c$, điện trở của một số vật liệu đột ngột giảm xuống bằng $0$."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Định luật Ohm cho đoạn mạch",
        "eq": "$$I = \\frac{U}{R} \\iff U = IR, \\quad R = \\frac{U}{I}$$"
      },
      {
        "name": "Điện trở dây dẫn đồng chất",
        "eq": "$$R = \\rho\\frac{l}{S} = \\rho\\frac{4l}{\\pi d^2}$$"
      },
      {
        "name": "Sự phụ thuộc nhiệt độ (kim loại)",
        "eq": "$$R = R_0[1 + \\alpha(t - t_0)], \\quad \\rho = \\rho_0[1 + \\alpha(t - t_0)]$$"
      },
      {
        "name": "Ghép điện trở Nối tiếp & Song song",
        "eq": "$$R_{\\text{nt}} = R_1 + R_2 + \\cdots, \\qquad \\frac{1}{R_{\\parallel}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots$$"
      }
    ],
    "applications": [
      "Chế tạo cảm biến nhiệt độ, rơ-le tự ngắt bảo vệ quá nhiệt trong bàn là, nồi cơm điện, pin sạc dùng nhiệt điện trở NTC/PTC.",
      "Lựa chọn tiết diện dây đồng phù hợp khi thiết kế đường dây điện trong nhà để giảm sụt áp."
    ]
  },
  {
    "num": 24,
    "chapter": 4,
    "title": "Nguồn điện",
    "pages": "tr. 102–105",
    "type": "Lí thuyết",
    "subtitle": "Vai trò của lực lạ trong nguồn điện, suất điện động E = A/q, điện trở trong r, định luật Ohm toàn mạch và hiện tượng đoản mạch.",
    "diagramCaption": "Sơ đồ mạch điện kín gồm nguồn điện (E, r) nối với mạch ngoài R và đồ thị hiệu điện thế hai cực U = E − I r.",
    "sections": [
      {
        "heading": "1. Nguồn điện, Lực lạ và Suất điện động của nguồn điện",
        "items": [
          "<strong>Vai trò của nguồn điện:</strong> Tạo ra và duy trì một hiệu điện thế giữa hai cực nhằm duy trì dòng điện lâu dài trong mạch.",
          "<strong>Lực lạ bên trong nguồn:</strong> Ở mạch ngoài, các hạt mang điện dương chuyển động từ cực dương (điện thế cao) sang cực âm (điện thế thấp) dưới tác dụng của lực điện. Để duy trì sự tích điện ở hai cực, bên trong nguồn điện phải có <strong>lực lạ</strong> (bản chất là lực hóa học trong pin/ắc quy, lực từ trong máy phát điện...) làm dịch chuyển các điện tích dương <strong>ngược chiều điện trường</strong> từ cực âm về cực dương.",
          "<strong>Suất điện động của nguồn điện ($\\mathcal{E}$ hoặc $E$):</strong> Là đại lượng đặc trưng cho khả năng thực hiện công của nguồn điện, được đo bằng thương số giữa công $A$ của lực lạ thực hiện khi làm dịch chuyển một điện tích dương $q$ bên trong nguồn từ cực âm đến cực dương và độ lớn của điện tích $q$ đó: $$\\mathcal{E} = \\frac{A_{\\text{lạ}}}{q} \\implies A_{\\text{nguồn}} = q\\mathcal{E} = \\mathcal{E}It$$",
          "• Đơn vị của suất điện động là <strong>vôn ($\\text{V}$)</strong>. Số vôn ghi trên vỏ pin/ắc quy cho biết giá trị suất điện động của nguồn; nó bằng hiệu điện thế giữa hai cực khi mạch ngoài để hở ($I = 0 \\Rightarrow U_{\\text{hở}} = \\mathcal{E}$)."
        ]
      },
      {
        "heading": "2. Điện trở trong của nguồn và Định luật Ohm cho toàn mạch",
        "items": [
          "Mỗi nguồn điện thực tế đều có một <strong>điện trở trong $r$</strong> (do sự cản trở chuyển động của các hạt tải điện bên trong nguồn).",
          "Xét mạch điện kín gồm nguồn điện $(\\mathcal{E}, r)$ nối với mạch ngoài có điện trở tương đương $R_N$ (hay $R$). Theo bảo toàn năng lượng trong thời gian $t$: $A_{\\text{nguồn}} = Q_{\\text{ngoài}} + Q_{\\text{trong}} \\iff \\mathcal{E}It = I^2 R t + I^2 r t$, suy ra:",
          "$$\\mathcal{E} = I(R + r) = IR + Ir = U_N + Ir$$",
          "• <strong>Định luật Ohm đối với toàn mạch:</strong> Cường độ dòng điện chạy trong mạch điện kín tỉ lệ thuận với suất điện động của nguồn điện và tỉ lệ nghịch với điện trở toàn phần của mạch đó: $$I = \\frac{\\mathcal{E}}{R + r}$$",
          "• <strong>Hiệu điện thế mạch ngoài (hiệu điện thế giữa hai cực của nguồn):</strong> $$U = I \\cdot R = \\mathcal{E} - I \\cdot r$$ (Trong đó $Ir$ là <em>độ giảm thế ở mạch trong</em>. Khi mạch ngoài hở $I = 0$ hoặc khi nguồn lí tưởng $r = 0$ thì $U = \\mathcal{E}$; khi dòng điện $I$ càng lớn thì hiệu điện thế đầu cực $U$ càng giảm)."
        ]
      },
      {
        "heading": "3. Hiện tượng đoản mạch (ngắn mạch) và Quy tắc an toàn",
        "items": [
          "• Khi hai cực của nguồn điện được nối trực tiếp với nhau bằng một dây dẫn có điện trở không đáng kể ($R \\approx 0$), hiện tượng này gọi là <strong>đoản mạch (hay ngắn mạch)</strong>.",
          "• Khi đó dòng điện trong mạch đạt giá trị cực đại rất lớn: $$I_{\\text{đoản mạch}} = \\frac{\\mathcal{E}}{r}$$",
          "• <strong>Tác hại & Phòng tránh:</strong> Với ắc quy chì hoặc mạng điện gia đình có $r$ rất nhỏ, dòng đoản mạch lên tới hàng백 ampe sẽ làm hỏng nguồn, nóng chảy vỏ dây và gây cháy nổ hỏa hoạn. Phải luôn lắp <strong>cầu chì hoặc aptomat (CB)</strong> để tự động ngắt mạch khi xảy ra đoản mạch."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Suất điện động & Công của nguồn",
        "eq": "$$\\mathcal{E} = \\frac{A_{\\text{lạ}}}{q} \\implies A_{\\text{nguồn}} = q\\mathcal{E} = \\mathcal{E}It$$"
      },
      {
        "name": "Định luật Ohm cho toàn mạch",
        "eq": "$$I = \\frac{\\mathcal{E}}{R + r} \\iff \\mathcal{E} = I(R + r)$$"
      },
      {
        "name": "Hiệu điện thế hai cực nguồn",
        "eq": "$$U = IR = \\mathcal{E} - Ir$$"
      },
      {
        "name": "Cường độ dòng đoản mạch (R = 0)",
        "eq": "$$I_{\\text{max}} = \\frac{\\mathcal{E}}{r}$$"
      }
    ],
    "applications": [
      "Giải thích vì sao khi bấm đề nổ máy ô tô/xe máy (dòng điện đề rất lớn), đèn pha xe bị tối sầm đi một chút (do độ sụt áp $Ir$ trong bình ắc quy tăng vọt làm $U = \\mathcal{E} - Ir$ giảm).",
      "Thiết kế aptomat chống chập điện bảo vệ an toàn lưới điện gia đình."
    ]
  },
  {
    "num": 25,
    "chapter": 4,
    "title": "Năng lượng và công suất điện",
    "pages": "tr. 106–110",
    "type": "Lí thuyết",
    "subtitle": "Điện năng tiêu thụ A = UIt, công suất tiêu thụ P = UI, định luật Joule – Lenz, công suất nguồn điện và bài toán tính tiền điện kWh.",
    "diagramCaption": "Sơ đồ chuyển hóa năng lượng điện trong đoạn mạch, công tơ điện đo kWh và so sánh hiệu suất chiếu sáng của đèn sợi đốt với đèn LED.",
    "sections": [
      {
        "heading": "1. Năng lượng điện (Điện năng tiêu thụ) và Công suất điện của một đoạn mạch",
        "items": [
          "<strong>Năng lượng điện tiêu thụ của đoạn mạch ($A$ hay $W$):</strong> Bằng công của lực điện thực hiện khi di chuyển các điện tích qua đoạn mạch đó trong thời gian $t$: $$W = A = qU = UIt \\quad (\\text{đơn vị: Jun – J})$$",
          "<strong>Công suất tiêu thụ điện của đoạn mạch ($P$):</strong> Đặc trưng cho tốc độ tiêu thụ năng lượng điện của đoạn mạch đó trong một đơn vị thời gian: $$P = \\frac{A}{t} = U \\cdot I \\quad (\\text{đơn vị: Oát – W}, \\; 1\\text{ W} = 1\\text{ J/s})$$",
          "• <strong>Ý nghĩa số ghi định mức trên thiết bị điện (ví dụ $220\\text{ V} - 1000\\text{ W}$):</strong> Cho biết hiệu điện thế định mức $U_{\\text{đm}} = 220\\text{ V}$ và công suất định mức $P_{\\text{đm}} = 1000\\text{ W}$ khi thiết bị hoạt động bình thường ở đúng $U_{\\text{đm}}$. Từ đó suy ra điện trở của thiết bị (coi không đổi): $R = \\frac{U_{\\text{đm}}^2}{P_{\\text{đm}}}$ và dòng định mức $I_{\\text{đm}} = \\frac{P_{\\text{đm}}}{U_{\\text{đm}}}$."
        ]
      },
      {
        "heading": "2. Nhiệt lượng tỏa ra trên vật dẫn (Định luật Joule – Lenz) và Hiệu suất nguồn điện",
        "items": [
          "Khi dòng điện chạy qua đoạn mạch chỉ chứa điện trở thuần $R$, toàn bộ điện năng tiêu thụ biến đổi hoàn toàn thành nhiệt năng tỏa ra:",
          "$$Q = I^2 R t = UIt = \\frac{U^2}{R}t, \\qquad P_{\\text{tỏa nhiệt}} = I^2 R = \\frac{U^2}{R}$$",
          "• <strong>Công và công suất của nguồn điện:</strong> $A_{\\text{nguồn}} = \\mathcal{E}It$, $P_{\\text{nguồn}} = \\mathcal{E}I$.",
          "• <strong>Hiệu suất của nguồn điện ($H$):</strong> Tỉ số giữa công suất có ích cung cấp cho mạch ngoài và công suất toàn phần của nguồn: $$H = \\frac{P_{\\text{ngoài}}}{P_{\\text{nguồn}}} = \\frac{UI}{\\mathcal{E}I} = \\frac{U}{\\mathcal{E}} = \\frac{R}{R + r}$$"
        ]
      },
      {
        "heading": "3. Đơn vị đo điện năng thực tế (kWh – Số điện) và Sử dụng điện tiết kiệm, hiệu quả",
        "items": [
          "• Trên công tơ điện gia đình, điện năng tiêu thụ được tính bằng đơn vị <strong>kilôoát giờ ($\\text{kWh}$)</strong>, thường gọi là <em>một số điện</em>: $$1\\text{ kWh} = 1\\,000\\text{ W} \\times 3\\,600\\text{ s} = 3\\,600\\,000\\text{ J} = 3,6 \\times 10^6\\text{ J}$$",
          "• <strong>Cách tính điện năng tiêu thụ ra số điện ($\\text{kWh}$):</strong> Đổi công suất $P$ ra $\\text{kW}$, thời gian sử dụng $t$ ra giờ ($\\text{h}$), nhân $W(\\text{kWh}) = P(\\text{kW}) \\times t(\\text{h})$.",
          "• <strong>So sánh đèn sợi đốt và đèn LED (SGK tr. 109):</strong> Để tạo ra cùng một độ sáng (quang thông), đèn sợi đốt tiêu tốn công suất lớn gấp $6 - 8$ lần đèn LED vì hơn $90\\%$ điện năng trong đèn sợi đốt bị hao phí thành nhiệt lượng, trong khi đèn LED chuyển hóa phần lớn điện năng thành ánh sáng và có tuổi thọ cao gấp hàng chục lần."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Điện năng & Công suất đoạn mạch",
        "eq": "$$A = W = UIt, \\qquad P = \\frac{A}{t} = UI$$"
      },
      {
        "name": "Đoạn mạch thuần điện trở R",
        "eq": "$$Q = I^2 Rt = \\frac{U^2}{R}t, \\qquad P = I^2 R = \\frac{U^2}{R}$$"
      },
      {
        "name": "Công suất & Hiệu suất nguồn điện",
        "eq": "$$P_{\\text{ng}} = \\mathcal{E}I, \\qquad H = \\frac{U}{\\mathcal{E}} = \\frac{R}{R + r}$$"
      },
      {
        "name": "Quy đổi 1 số điện (kWh)",
        "eq": "$$1\\text{ kWh} = 3,6 \\times 10^6\\text{ J}$$"
      }
    ],
    "applications": [
      "Tính toán hóa đơn tiền điện bậc thang hàng tháng của hộ gia đình và lựa chọn thiết bị dán nhãn năng lượng 5 sao.",
      "Thiết kế các thiết bị gia nhiệt bằng điện (bàn là, ấm siêu tốc, bếp hồng ngoại, lò sưởi)."
    ]
  },
  {
    "num": 26,
    "chapter": 4,
    "title": "Thực hành: Đo suất điện động và điện trở trong của pin điện hóa",
    "pages": "tr. 111–113",
    "type": "Thực hành",
    "subtitle": "Thiết kế sơ đồ mạch thực hành, thu thập các cặp số liệu (U, I) và vẽ đường đặc trưng U–I để xác định E và r của pin mới, pin cũ.",
    "diagramCaption": "Sơ đồ mạch điện thực hành đo (E, r) và đồ thị tuyến tính U = E − rI dùng xác định tung độ gốc E và độ dốc r.",
    "sections": [
      {
        "heading": "1. Mục tiêu, Cơ sở lí thuyết và Dụng cụ thí nghiệm",
        "items": [
          "<strong>Mục tiêu:</strong> Đo và so sánh được suất điện động $\\mathcal{E}$ và điện trở trong $r$ của một pin điện hóa mới và một pin đã qua sử dụng.",
          "<strong>Cơ sở lí thuyết:</strong> Trong mạch kín gồm pin $(\\mathcal{E}, r)$ nối với biến trở tải $R$, hiệu điện thế hai cực của pin phụ thuộc bậc nhất vào cường độ dòng điện theo hệ thức: $$U = \\mathcal{E} - r \\cdot I$$",
          "• Đồ thị biểu diễn sự phụ thuộc của $U$ vào $I$ là một <strong>đoạn thẳng dốc xuống</strong>:<br>– Giao điểm của đường thẳng kéo dài với trục tung (khi $I = 0$) cho giá trị <strong>suất điện động $\\mathcal{E}$</strong>.<br>– Độ lớn hệ số góc (độ dốc) của đường thẳng cho giá trị <strong>điện trở trong $r$</strong>: $$r = -\\frac{\\Delta U}{\\Delta I} = \\frac{U_1 - U_2}{I_2 - I_1}$$",
          "<strong>Dụng cụ:</strong> 1 pin mới $1,5\\text{ V}$ và 1 pin cũ $1,5\\text{ V}$; biến trở con chạy $100\\,\\Omega$; điện trở bảo vệ $R_0 = 10\\,\\Omega$; 2 đồng hồ đo điện đa năng hiện số (1 chiếc chỉnh làm Vôn kế một chiều DCV, 1 chiếc làm Ampe kế một chiều DCA); công tắc $K$, đế lắp pin và dây nối."
        ]
      },
      {
        "heading": "2. Các bước tiến hành thí nghiệm chuẩn SGK",
        "items": [
          "1. <strong>Lắp mạch điện theo sơ đồ:</strong> Mắc nối tiếp pin, công tắc $K$, điện trở bảo vệ $R_0$, biến trở $R$ và Ampe kế thành một vòng kín; mắc Vôn kế <strong>song song trực tiếp vào hai cực của pin</strong> (hoặc hai đầu cụm nguồn). <em>Tuyệt đối không bật đồng hồ sang thang đo $\\Omega$ để chọc trực tiếp vào hai cực của pin đang có điện!</em>",
          "2. Đặt con chạy của biến trở ở vị trí có giá trị điện trở lớn nhất (khoảng $100\\,\\Omega$). Đóng khóa $K$, đọc nhanh cặp giá trị $(U_1, I_1)$ trên hai đồng hồ rồi <strong>ngắt khóa $K$ ngay sau mỗi lần đọc</strong> (để tránh dòng điện chạy lâu làm nóng mạch và làm yếu pin).",
          "3. Giảm dần giá trị của biến trở $R$ theo từng nấc, đóng khóa $K$ đọc các cặp giá trị $(U_2, I_2), (U_3, I_3), \\dots$ và ghi vào bảng số liệu.",
          "4. Vẽ đường thẳng khớp tốt nhất với các điểm thực nghiệm trên hệ trục $(U - I)$ để xác định $\\mathcal{E}$ và $r$. Lặp lại quy trình tương tự đối với viên pin cũ và so sánh kết quả."
        ]
      },
      {
        "heading": "3. Nhận xét kết quả thực nghiệm (So sánh Pin mới và Pin cũ) & Quy tắc an toàn",
        "items": [
          "• <strong>Kết quả điển hình:</strong> Pin cũ (đã qua sử dụng lâu ngày) có suất điện động $\\mathcal{E}$ chỉ giảm nhẹ so với pin mới (ví dụ từ $1,55\\text{ V}$ xuống $1,35\\text{ V}$), nhưng <strong>điện trở trong $r$ của pin cũ tăng lên rất nhiều lần</strong> so với pin mới (từ cỡ $0,5\\,\\Omega$ tăng lên vài chục $\\Omega$), khiến pin cũ không thể cấp dòng lớn cho tải.",
          "• <strong>Quy tắc an toàn bắt buộc:</strong> Luôn mắc điện trở bảo vệ $R_0$; không bao giờ kéo biến trở về $0\\,\\Omega$ nếu không có $R_0$ để tránh đoản mạch; luôn ngắt công tắc giữa các lần đo; chọn đúng thang đo và cắm đúng cực dương (đỏ) – âm (đen) của đồng hồ đa năng."
        ]
      }
    ],
    "formulas": [
      {
        "name": "Phương trình đường thẳng thực nghiệm",
        "eq": "$$U = \\mathcal{E} - rI$$"
      },
      {
        "name": "Xác định suất điện động E",
        "eq": "$$\\mathcal{E} = U(0) \\quad (\\text{giao điểm trục tung khi } I = 0)$$"
      },
      {
        "name": "Xác định điện trở trong r từ độ dốc",
        "eq": "$$r = \\left|\\frac{\\Delta U}{\\Delta I}\\right| = \\frac{U_1 - U_2}{I_2 - I_1}$$"
      }
    ],
    "applications": [
      "Kiểm tra chất lượng và mức độ chai của pin điện thoại, ắc quy xe điện thông qua việc đo nội trở $r$.",
      "Rèn kỹ năng vẽ đồ thị tuyến tính hóa số liệu thực nghiệm và đánh giá sai số trong phòng thí nghiệm Vật lí."
    ]
  }
];
const formulaSummaryTable = [
  {
    "topic": "1. Dao động điều hòa (Bài 1–2)",
    "formula": "$$x = A\\cos(\\omega t + \\varphi_0), \\quad \\omega = 2\\pi f = \\frac{2\\pi}{T}, \\quad |\\Delta\\varphi| = \\frac{2\\pi|\\Delta t|}{T}$$"
  },
  {
    "topic": "2. Vận tốc & Gia tốc DĐĐH (Bài 3–4)",
    "formula": "$$v = -\\omega A\\sin(\\omega t + \\varphi_0), \\quad a = -\\omega^2 x, \\quad x^2 + \\frac{v^2}{\\omega^2} = A^2$$"
  },
  {
    "topic": "3. Năng lượng & Chu kì con lắc (Bài 5, 7)",
    "formula": "$$W = W_\\text{đ} + W_\\text{t} = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2 = \\frac{1}{2}kA^2; \\quad T_{\\text{lx}} = 2\\pi\\sqrt{\\frac{m}{k}}, \\; T_{\\text{đơn}} = 2\\pi\\sqrt{\\frac{l}{g}}$$"
  },
  {
    "topic": "4. Cộng hưởng cơ (Bài 6)",
    "formula": "$$f_{\\text{cưỡng bức}} = f_{\\text{ngoại lực}}; \\quad \\text{Cộng hưởng } (A_{\\max}) \\iff f = f_0 \\; (T = T_0)$$"
  },
  {
    "topic": "5. Đại lượng sóng & Cường độ sóng (Bài 8–9)",
    "formula": "$$\\lambda = vT = \\frac{v}{f}, \\quad \\Delta\\varphi = \\frac{2\\pi\\Delta x}{\\lambda}, \\quad I = \\frac{E}{S\\Delta t} = \\frac{P}{S}$$"
  },
  {
    "topic": "6. Sóng điện từ (Bài 11)",
    "formula": "$$c = \\lambda f \\approx 3,0\\times 10^8\\text{ m/s (trong chân không)}, \\quad \\vec{E} \\perp \\vec{B} \\perp \\vec{v}$$"
  },
  {
    "topic": "7. Giao thoa sóng cơ cùng pha (Bài 12)",
    "formula": "$$\\text{Cực đại: } d_2 - d_1 = k\\lambda; \\qquad \\text{Cực tiểu: } d_2 - d_1 = \\left(k + \\frac{1}{2}\\right)\\lambda$$"
  },
  {
    "topic": "8. Giao thoa ánh sáng Young (Bài 12)",
    "formula": "$$i = \\frac{\\lambda D}{a}, \\quad x_{\\text{sáng}} = ki, \\quad x_{\\text{tối}} = (k + 0,5)i$$"
  },
  {
    "topic": "9. Sóng dừng trên dây & cột khí (Bài 13, 15)",
    "formula": "$$\\text{2 đầu cố định: } L = n\\frac{\\lambda}{2}; \\quad \\text{1 cố định - 1 tự do: } L = (2n + 1)\\frac{\\lambda}{4}; \\quad v_{\\text{âm}} = 2(l_2 - l_1)f$$"
  },
  {
    "topic": "10. Định luật Coulomb (Bài 16)",
    "formula": "$$F = k\\frac{|q_1 q_2|}{\\varepsilon r^2}, \\quad k = \\frac{1}{4\\pi\\varepsilon_0} = 9\\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$$"
  },
  {
    "topic": "11. Cường độ điện trường (Bài 17–18)",
    "formula": "$$\\vec{E} = \\frac{\\vec{F}}{q}, \\quad E_Q = k\\frac{|Q|}{\\varepsilon r^2}, \\quad \\vec{E} = \\sum\\vec{E}_i; \\quad \\text{Điện trường đều: } E = \\frac{U}{d}$$"
  },
  {
    "topic": "12. Công, Thế năng điện & Điện thế (Bài 19–20)",
    "formula": "$$A_{MN} = qEd = W_M - W_N = qU_{MN} = q(V_M - V_N), \\quad V_M = \\frac{W_M}{q}$$"
  },
  {
    "topic": "13. Tụ điện, Ghép tụ & Năng lượng tụ (Bài 21)",
    "formula": "$$Q = CU; \\quad \\text{NT: } \\frac{1}{C} = \\sum\\frac{1}{C_i}; \\quad \\text{SS: } C = \\sum C_i; \\quad W = \\frac{1}{2}QU = \\frac{1}{2}CU^2 = \\frac{Q^2}{2C}$$"
  },
  {
    "topic": "14. Cường độ dòng điện & Tốc độ trôi (Bài 22)",
    "formula": "$$I = \\frac{\\Delta q}{\\Delta t}, \\quad I = nSve, \\quad 1\\text{ Ah} = 3\\,600\\text{ C}, \\; 1\\text{ mAh} = 3,6\\text{ C}$$"
  },
  {
    "topic": "15. Điện trở, Định luật Ohm & Nhiệt độ (Bài 23)",
    "formula": "$$I = \\frac{U}{R}, \\quad R = \\rho\\frac{l}{S}, \\quad R = R_0[1 + \\alpha(t - t_0)]$$"
  },
  {
    "topic": "16. Nguồn điện & Định luật Ohm toàn mạch (Bài 24, 26)",
    "formula": "$$\\mathcal{E} = \\frac{A_{\\text{lạ}}}{q}, \\quad I = \\frac{\\mathcal{E}}{R + r}, \\quad U = IR = \\mathcal{E} - Ir, \\quad r = \\left|\\frac{\\Delta U}{\\Delta I}\\right|$$"
  },
  {
    "topic": "17. Điện năng, Công suất & Định luật Joule–Lenz (Bài 25)",
    "formula": "$$A = UIt, \\quad P = UI, \\quad Q = I^2Rt, \\quad P_{\\text{ng}} = \\mathcal{E}I, \\quad 1\\text{ kWh} = 3,6\\times 10^6\\text{ J}$$"
  }
];
const safetyRules = [
  {
    "title": "1. An toàn thí nghiệm Dao động & Sóng âm (Bài 10, 15)",
    "desc": "Cố định chắc chắn giá đỡ con lắc và ống trụ cộng hưởng; dùng búa cao su gõ nhẹ âm thoa (không gõ vào kim loại); điều chỉnh âm lượng máy phát tần số vừa phải và không đưa tín hiệu điện áp vượt quá giới hạn đầu vào của dao động kí."
  },
  {
    "title": "2. An toàn bức xạ Sóng điện từ & Laser (Bài 11, 12)",
    "desc": "Tuyệt đối không nhìn trực tiếp vào chùm tia Laser khi làm thí nghiệm giao thoa khe Young; hiểu rõ nguy cơ phơi nhiễm bức xạ năng lượng cao (tia tử ngoại UV, tia X, tia gamma) và nguyên tắc che chắn chuyên môn."
  },
  {
    "title": "3. An toàn Tĩnh điện & Xả điện Tụ điện (Bài 16–21)",
    "desc": "Không đặt hiệu điện thế vượt quá giá trị định mức (U_gh) ghi trên vỏ tụ điện để tránh đánh thủng và nổ tụ; tụ điện sau khi ngắt khỏi nguồn vẫn còn tích điện nên bắt buộc phải xả điện an toàn qua điện trở trước khi chạm tay thao tác."
  },
  {
    "title": "4. An toàn Mạch điện & Phòng chống Đoản mạch (Bài 22–26)",
    "desc": "Chỉ sử dụng nguồn điện một chiều điện áp thấp theo đúng hướng dẫn thí nghiệm (tuyệt đối không cắm trực tiếp vào điện lưới 220 V); không nối tắt hai cực nguồn điện; luôn mắc điện trở bảo vệ, chọn đúng thang đo Vôn kế/Ampe kế và ngắt công tắc K ngay sau mỗi lần đọc số liệu."
  }
];

module.exports = { chapters, lessons, formulaSummaryTable, safetyRules };
