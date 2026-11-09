module.exports = [
  {
    "id": "bai-1",
    "num": 1,
    "chuyende": "Chuyên đề 1: Phép biến hình trong mặt phẳng",
    "chuyendeId": "cd-1",
    "title": "Bài 1. Phép biến hình",
    "subtitle": "Định nghĩa phép biến hình, điểm bất động, phép đồng nhất và phép co giãn trục",
    "desc": "Nắm vững định nghĩa phép biến hình f: M ↦ M', điều kiện xác định duy nhất, ảnh của một hình học và khảo sát phép biến đổi co/giãn tọa độ ứng dụng trong đồ họa máy tính.",
    "tag": "Chuyên đề 1 • Bài 1",
    "badgeColor": "sky",
    "sections": [
      {
        "heading": "1. Định nghĩa phép biến hình trong mặt phẳng",
        "summary": "Phép biến hình trong mặt phẳng là quy tắc đặt tương ứng mỗi điểm M của mặt phẳng với một điểm xác định duy nhất M' của mặt phẳng đó.",
        "details": [
          "**Kí hiệu:** $f(M) = M'$, trong đó $M'$ gọi là ảnh của điểm $M$ qua phép biến hình $f$, và $M$ gọi là tạo ảnh (nghịch ảnh) của $M'$.",
          "**Điều kiện cần và đủ:** Một quy tắc là phép biến hình khi và chỉ khi với mọi điểm $M$, luôn tìm được đúng một điểm $M'$ tương ứng (không được thiếu ảnh và không được có nhiều hơn một ảnh).",
          "**Điểm bất động:** Điểm $M$ thỏa mãn $f(M) = M$ được gọi là điểm bất động (điểm kép) của phép biến hình $f$.",
          "**Phép đồng nhất:** Phép biến hình biến mọi điểm $M$ trong mặt phẳng thành chính nó, kí hiệu là $e$ hoặc $Id$: $e(M) = M, \\forall M$. Mọi điểm đều là điểm bất động của phép đồng nhất."
        ]
      },
      {
        "heading": "2. Ảnh của một hình học",
        "summary": "Nếu $H$ là một hình trong mặt phẳng (tập hợp các điểm), thì ảnh của hình $H$ qua phép biến hình $f$ là tập hợp tất cả các điểm $M' = f(M)$ với $M \\in H$.",
        "details": [
          "**Kí hiệu:** $H' = f(H) = \\{M' = f(M) \\mid M \\in H\\}$.",
          "**Phương pháp tìm ảnh của hình:** Với đa giác, ta biến đổi từng đỉnh $A, B, C \\dots \\mapsto A', B', C' \\dots$ rồi nối lại. Với đường cong, ta sử dụng phương pháp quỹ tích hoặc đổi biến tọa độ biểu diễn tọa độ cũ $(x; y)$ theo tọa độ mới $(x'; y')$."
        ]
      },
      {
        "heading": "3. Phép co giãn trục trong mặt phẳng tọa độ",
        "summary": "Khảo sát quy tắc biến đổi tọa độ $f(x; y) = (x; ky)$ với hệ số tỉ lệ $k > 0$.",
        "details": [
          "**Bản chất:** Giữ nguyên hoành độ $x' = x$ và nhân tung độ với hệ số $k$: $y' = ky$.",
          "- Khi $0 < k < 1$: Các điểm bị nén lại gần trục hoành $Ox$, gọi là **phép co về trục $Ox$**.",
          "- Khi $k > 1$: Các điểm bị dãn xa khỏi trục hoành $Ox$, gọi là **phép giãn ra xa trục $Ox$**.",
          "**Biến dạng đường tròn thành elip:** Cho đường tròn đơn vị $(C): x^2 + y^2 = 1$. Qua phép co giãn $f(x; y) = (x; ky)$, ta có $x = x', y = y'/k$. Phương trình ảnh $(C')$ là $x'^2 + \\frac{y'^2}{k^2} = 1$, đây chính là phương trình chính tắc của đường elip có bán trục $a = 1, b = k$.",
          "**Ứng dụng thực tế:** Co giãn theo trục là thuật toán cốt lõi trong phần mềm chỉnh sửa ảnh số (scaling, transform), thiết kế font chữ và render mô hình đồ họa vector."
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Trong mặt phẳng, một quy tắc f được gọi là phép biến hình khi và chỉ khi:",
        "options": [
          "Mỗi điểm M biến thành vô số điểm M'",
          "Với mỗi điểm M xác định duy nhất một điểm M' là ảnh của M",
          "Mọi khoảng cách giữa hai điểm đều được giữ nguyên",
          "Ảnh của mọi đường thẳng đều phải là một đường tròn"
        ],
        "answer": 1,
        "explanation": "Theo định nghĩa, phép biến hình trong mặt phẳng là quy tắc đặt tương ứng mỗi điểm M với một điểm xác định duy nhất M'."
      },
      {
        "q": "Qua phép co giãn trục f(x; y) = (x; 2y), đường tròn x² + y² = 4 biến thành đường gì?",
        "options": [
          "Đường tròn bán kính bằng 8",
          "Đường elip có phương trình x² + y²/4 = 4 (tức x²/4 + y²/16 = 1)",
          "Đường hyperbol x² - y² = 4",
          "Một đường thẳng song song với trục hoành"
        ],
        "answer": 1,
        "explanation": "Ta có $x = x'$ và $y = y'/2$. Thay vào phương trình đường tròn: $x'^2 + (y'/2)^2 = 4 \\iff \\frac{x'^2}{4} + \\frac{y'^2}{16} = 1$, đây là phương trình elip."
      },
      {
        "q": "Phép đồng nhất e có bao nhiêu điểm bất động trong mặt phẳng?",
        "options": [
          "Chỉ duy nhất 1 điểm (gốc tọa độ O)",
          "Đúng 2 điểm",
          "Vô số điểm (mọi điểm trong mặt phẳng đều là điểm bất động)",
          "Không có điểm bất động nào"
        ],
        "answer": 2,
        "explanation": "Phép đồng nhất biến mọi điểm M thành chính nó ($e(M) = M$), do đó mọi điểm trong mặt phẳng đều là điểm bất động."
      }
    ]
  },
  {
    "id": "bai-2",
    "num": 2,
    "chuyende": "Chuyên đề 1: Phép biến hình trong mặt phẳng",
    "chuyendeId": "cd-1",
    "title": "Bài 2. Phép tịnh tiến",
    "subtitle": "Định nghĩa vectơ tịnh tiến, biểu thức tọa độ, tính chất bảo toàn khoảng cách và ứng dụng lát gạch",
    "desc": "Khái niệm phép tịnh tiến T_u, quy tắc dời điểm vector MM' = u, biểu thức tọa độ x' = x + a, y' = y + b, các tính chất bất biến hình học và ứng dụng trong hoa văn trang trí.",
    "tag": "Chuyên đề 1 • Bài 2",
    "badgeColor": "sky",
    "sections": [
      {
        "heading": "1. Định nghĩa và Biểu thức tọa độ",
        "summary": "Phép tịnh tiến theo vectơ $\\vec{u}$, kí hiệu là $T_{\\vec{u}}$, là phép biến hình biến mỗi điểm $M$ thành điểm $M'$ sao cho $\\overrightarrow{MM'} = \\vec{u}$.",
        "details": [
          "**Quy ước:** Phép tịnh tiến theo vectơ không $T_{\\vec{0}}$ chính là phép đồng nhất $e$.",
          "**Phép tịnh tiến đảo:** Phép tịnh tiến theo vectơ đối $T_{-\\vec{u}}$ biến $M'$ trở lại $M$, khôi phục nguyên vẹn vị trí hình ban đầu.",
          "**Biểu thức tọa độ:** Cho vectơ $\\vec{u} = (a; b)$ và điểm $M(x; y)$. Nếu $M'(x'; y') = T_{\\vec{u}}(M)$ thì: $$\\begin{cases} x' = x + a \\\\ y' = y + b \\end{cases}$$",
          "Từ đó suy ra công thức tọa độ điểm gốc: $x = x' - a, y = y' - b$."
        ]
      },
      {
        "heading": "2. Các tính chất cơ bản của Phép tịnh tiến",
        "summary": "Phép tịnh tiến bảo toàn nguyên vẹn khoảng cách giữa hai điểm bất kì: $M'N' = MN$.",
        "details": [
          "**Bảo toàn hình học:**",
          "- Biến ba điểm thẳng hàng thành ba điểm thẳng hàng và bảo toàn thứ tự giữa các điểm.",
          "- Biến đường thẳng $d$ thành đường thẳng $d'$ **song song hoặc trùng** với nó ($d' \\parallel d$ khi $\\vec{u}$ không cùng phương với VTCP của $d$; $d' \\equiv d$ khi $\\vec{u}$ là VTCP của $d$).",
          "- Biến đoạn thẳng thành đoạn thẳng bằng nó; biến tia thành tia; biến góc thành góc bằng nó.",
          "- Biến tam giác thành tam giác bằng nó ($S' = S$); biến đa giác thành đa giác bằng nó.",
          "- Biến đường tròn $(C)$ tâm $I$ bán kính $R$ thành đường tròn $(C')$ có tâm $I' = T_{\\vec{u}}(I)$ và **cùng bán kính $R' = R$**."
        ]
      },
      {
        "heading": "3. Phương pháp tìm ảnh và Ứng dụng",
        "summary": "Kĩ năng viết phương trình đường thẳng và đường tròn ảnh qua phép tịnh tiến.",
        "details": [
          "**Tìm ảnh đường thẳng $\\Delta: Ax + By + C = 0$:**",
          "- Cách 1 (song song): Đường thẳng $\\Delta'$ có cùng VTPT nên có dạng $Ax + By + C' = 0$. Chọn một điểm $M \\in \\Delta$, tìm $M' = T_{\\vec{u}}(M)$, thay tọa độ $M'$ vào để tìm $C'$.",
          "- Cách 2 (thế biến): Thay $x = x' - a, y = y' - b$ trực tiếp vào phương trình $\\Delta$.",
          "**Ứng dụng thực tiễn:** Tạo hoa văn dải diềm, đội hình diễu hành quân sự, kĩ thuật lát gạch sàn nhà lặp tuần hoàn theo hai vectơ cơ sở, và thiết kế chuyển động tịnh tiến trong game/hoạt hình 2D."
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Trong mặt phẳng Oxy, ảnh của điểm M(2; -5) qua phép tịnh tiến theo vectơ u = (3; 4) là điểm nào?",
        "options": [
          "M'(5; -1)",
          "M'(-1; -9)",
          "M'(6; -20)",
          "M'(5; -9)"
        ],
        "answer": 0,
        "explanation": "Ta có $x' = x + a = 2 + 3 = 5$ và $y' = y + b = -5 + 4 = -1$. Vậy $M'(5; -1)$."
      },
      {
        "q": "Phép tịnh tiến theo vectơ u khác 0 biến đường thẳng d thành đường thẳng d'. Khẳng định nào sau đây luôn đúng?",
        "options": [
          "d' luôn vuông góc với d",
          "d' luôn cắt d tại một điểm duy nhất",
          "d' song song hoặc trùng với d",
          "d' có phương vuông góc với vectơ u"
        ],
        "answer": 2,
        "explanation": "Phép tịnh tiến biến đường thẳng thành đường thẳng song song hoặc trùng với nó."
      },
      {
        "q": "Ảnh của đường tròn (C): (x - 1)² + (y + 2)² = 9 qua phép tịnh tiến theo vectơ u = (-2; 3) có phương trình là:",
        "options": [
          "(x + 1)² + (y - 1)² = 9",
          "(x - 3)² + (y + 5)² = 9",
          "(x + 1)² + (y - 1)² = 18",
          "(x - 1)² + (y + 2)² = 9"
        ],
        "answer": 0,
        "explanation": "Tâm đường tròn cũ $I(1; -2)$, bán kính $R = 3$. Tâm ảnh $I' = (1 - 2; -2 + 3) = (-1; 1)$, bán kính giữ nguyên $R = 3$. Do đó $(C'): (x + 1)^2 + (y - 1)^2 = 9$."
      }
    ]
  },
  {
    "id": "bai-3",
    "num": 3,
    "chuyende": "Chuyên đề 1: Phép biến hình trong mặt phẳng",
    "chuyendeId": "cd-1",
    "title": "Bài 3. Phép đối xứng trục",
    "subtitle": "Định nghĩa phép đối xứng trục, biểu thức tọa độ, tính chất và bài toán tối ưu đường đi ngắn nhất",
    "desc": "Định nghĩa phép đối xứng trục Đ_d, trục trung trực, tọa độ qua Ox và Oy, tính bảo toàn khoảng cách, trục đối xứng của hình và bài toán cực trị hình học tìm điểm M để MA + MB đạt giá trị nhỏ nhất.",
    "tag": "Chuyên đề 1 • Bài 3",
    "badgeColor": "sky",
    "sections": [
      {
        "heading": "1. Định nghĩa và Biểu thức tọa độ",
        "summary": "Phép đối xứng qua đường thẳng $d$, kí hiệu $Đ_d$, là phép biến hình biến mỗi điểm $M$ thuộc $d$ thành chính nó, và biến mỗi điểm $M \\notin d$ thành điểm $M'$ sao cho $d$ là đường trung trực của đoạn thẳng $MM'$.",
        "details": [
          "**Tính chất tự đảo:** $Đ_d(Đ_d(M)) = M$ với mọi $M$. Phép đối xứng trục trùng với phép biến hình ngược của chính nó.",
          "**Trục đối xứng của hình:** Đường thẳng $d$ gọi là trục đối xứng của hình $H$ nếu $Đ_d(H) = H$.",
          "**Biểu thức tọa độ đặc biệt:**",
          "- Qua trục hoành $Ox$: $M(x; y) \\mapsto M'(x; -y)$.",
          "- Qua trục tung $Oy$: $M(x; y) \\mapsto M'(-x; y)$.",
          "- Qua đường phân giác $y = x$: $M(x; y) \\mapsto M'(y; x)$."
        ]
      },
      {
        "heading": "2. Tính chất của Phép đối xứng trục",
        "summary": "Phép đối xứng trục bảo toàn khoảng cách giữa hai điểm: $M'N' = MN$.",
        "details": [
          "**Bảo toàn hình học:** Biến đoạn thẳng thành đoạn thẳng bằng nó; biến tam giác thành tam giác bằng nó ($S' = S$); biến góc thành góc bằng nó nhưng làm đảo hướng quay (ngược chiều kim đồng hồ thành thuận chiều kim đồng hồ).",
          "**Đường tròn:** Biến đường tròn $(I; R)$ thành đường tròn $(I'; R)$ có cùng bán kính, với tâm $I' = Đ_d(I)$.",
          "**Đường thẳng:** Biến đường thẳng $\\Delta$ thành đường thẳng $\\Delta'$. Nếu $\\Delta \\parallel d$ thì $\\Delta' \\parallel d$; nếu $\\Delta \\perp d$ thì $\\Delta' \\equiv \\Delta$."
        ]
      },
      {
        "heading": "3. Bài toán tối ưu tổng khoảng cách (Bài toán Heron)",
        "summary": "Cho đường thẳng $d$ và hai điểm $A, B$ cố định. Tìm điểm $M \\in d$ sao cho tổng khoảng cách $MA + MB$ đạt giá trị nhỏ nhất.",
        "details": [
          "**Trường hợp 1: $A, B$ nằm về hai phía khác nhau của $d$:**",
          "Tổng $MA + MB \\ge AB$. Dấu bằng xảy ra khi và chỉ khi ba điểm $A, M, B$ thẳng hàng, tức là $M = AB \\cap d$. Giá trị nhỏ nhất là $AB$.",
          "**Trường hợp 2: $A, B$ nằm cùng phía đối với $d$:**",
          "- Lấy điểm $A' = Đ_d(A)$ đối xứng với $A$ qua trục $d$. Khi đó với mọi điểm $M \\in d$, ta luôn có $MA = MA'$.",
          "- Khi đó: $MA + MB = MA' + MB \\ge A'B$.",
          "- Dấu bằng xảy ra khi $M = A'B \\cap d$. Vị trí này chính là điểm phản xạ ánh sáng (góc tới bằng góc phản xạ).",
          "**Ý nghĩa:** Nguyên lí biến đường gấp khúc thành đường thẳng qua phép đối xứng trục là chìa khóa giải quyết hàng loạt bài toán cực trị, thiết kế đường ống dẫn dầu từ hai trạm đến một bờ sông, và quang hình học phản xạ."
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Ảnh của điểm A(-3; 7) qua phép đối xứng trục hoành Ox là điểm nào?",
        "options": [
          "A'(3; 7)",
          "A'(-3; -7)",
          "A'(3; -7)",
          "A'(7; -3)"
        ],
        "answer": 1,
        "explanation": "Qua phép đối xứng trục hoành Ox, hoành độ giữ nguyên và tung độ đổi dấu: $(x; y) \\mapsto (x; -y)$, do đó $(-3; 7) \\mapsto (-3; -7)$."
      },
      {
        "q": "Trong bài toán tìm M trên bờ sông d sao cho quãng đường đi từ nhà A đến sông d rồi sang nhà B cùng phía ngắn nhất, điểm M được xác định bằng cách:",
        "options": [
          "Lấy trung điểm của đoạn thẳng AB chiếu vuông góc lên d",
          "Lấy giao điểm của đường thẳng A'B với d (với A' là điểm đối xứng của A qua d)",
          "Dựng tam giác đều nhận AB làm một cạnh",
          "Chọn điểm M trùng với chân đường cao kẻ từ A xuống d"
        ],
        "answer": 1,
        "explanation": "Vì A và B cùng phía, ta lấy $A' = Đ_d(A)$ thì $MA = MA'$, khi đó $MA + MB = MA' + MB \\ge A'B$. Dấu bằng đạt được khi $M = A'B \\cap d$."
      },
      {
        "q": "Hình tam giác đều có tất cả bao nhiêu trục đối xứng?",
        "options": [
          "1 trục đối xứng",
          "2 trục đối xứng",
          "3 trục đối xứng",
          "Vô số trục đối xứng"
        ],
        "answer": 2,
        "explanation": "Tam giác đều có đúng 3 trục đối xứng là 3 đường trung trực của 3 cạnh (đồng thời là 3 đường cao, trung tuyến, phân giác)."
      }
    ]
  },
  {
    "id": "bai-4",
    "num": 4,
    "chuyende": "Chuyên đề 1: Phép biến hình trong mặt phẳng",
    "chuyendeId": "cd-1",
    "title": "Bài 4. Phép quay và phép đối xứng tâm",
    "subtitle": "Định nghĩa phép quay Q_(O,α), ma trận góc quay, phép đối xứng tâm Đ_I và ứng dụng cánh quạt",
    "desc": "Khảo sát phép quay quanh gốc tọa độ và tâm bất kì I(a;b), bản chất phép đối xứng tâm là phép quay 180°, công thức tọa độ điểm M'(2a-x; 2b-y) và nhận diện tâm đối xứng của các hình học phẳng.",
    "tag": "Chuyên đề 1 • Bài 4",
    "badgeColor": "sky",
    "sections": [
      {
        "heading": "1. Phép quay trong mặt phẳng",
        "summary": "Cho điểm $O$ và góc lượng giác $\\alpha$. Phép biến hình biến điểm $O$ thành chính nó, và biến mỗi điểm $M \\ne O$ thành điểm $M'$ sao cho $OM' = OM$ và góc lượng giác $(\\overrightarrow{OM}, \\overrightarrow{OM'}) = \\alpha$ được gọi là phép quay tâm $O$ góc $\\alpha$, kí hiệu $Q_{(O, \\alpha)}$.",
        "details": [
          "**Quy ước chiều quay:** Chiều dương là ngược chiều kim đồng hồ; chiều âm là cùng chiều kim đồng hồ.",
          "**Góc đặc biệt:** Phép quay góc $0$ (hoặc bội $k2\\pi$) là phép đồng nhất. Phép quay góc $(2k+1)\\pi$ ($180^\\circ$) chính là phép đối xứng tâm $O$.",
          "**Biểu thức tọa độ quay quanh gốc $O(0; 0)$:** Nếu $M'(x'; y') = Q_{(O, \\alpha)}(M(x; y))$ thì: $$\\begin{cases} x' = x\\cos\\alpha - y\\sin\\alpha \\\\ y' = x\\sin\\alpha + y\\cos\\alpha \\end{cases}$$",
          "- Khi $\\alpha = 90^\\circ$: $x' = -y, y' = x$.",
          "- Khi $\\alpha = -90^\\circ$: $x' = y, y' = -x$.",
          "**Quay quanh tâm bất kì $I(a; b)$:** Đổi gốc tọa độ về $I$: $x' - a = (x - a)\\cos\\alpha - (y - b)\\sin\\alpha$ và $y' - b = (x - a)\\sin\\alpha + (y - b)\\cos\\alpha$."
        ]
      },
      {
        "heading": "2. Phép đối xứng tâm",
        "summary": "Phép đối xứng qua điểm $I$, kí hiệu $Đ_I$, là phép biến hình biến điểm $I$ thành chính nó và biến mỗi điểm $M \\ne I$ thành điểm $M'$ sao cho $I$ là trung điểm của đoạn thẳng $MM'$.",
        "details": [
          "**Bản chất:** $Đ_I$ chính là phép quay tâm $I$ góc $180^\\circ$ ($Q_{(I, 180^\\circ)}$).",
          "**Biểu thức tọa độ qua tâm $I(a; b)$:** $$\\begin{cases} x' = 2a - x \\\\ y' = 2b - y \\end{cases}$$",
          "**Tính chất:** Biến đường thẳng thành đường thẳng song song hoặc trùng với nó. Biến đoạn thẳng, tam giác thành hình bằng nó; biến đường tròn thành đường tròn cùng bán kính với tâm đối xứng qua $I$.",
          "**Hình có tâm đối xứng:** Hình $H$ có tâm đối xứng $I$ khi và chỉ khi $Đ_I(H) = H$. Ví dụ: hình bình hành (tâm là giao điểm 2 đường chéo), đường tròn (tâm đường tròn), đa giác đều có số cạnh chẵn."
        ]
      },
      {
        "heading": "3. Ứng dụng thực tế của Phép quay và Đối xứng tâm",
        "summary": "Thiết kế bánh răng cơ khí, cánh quạt tuabin gió, vô lăng xe, logo thương hiệu và các họa tiết đối xứng quay Mandala."
      }
    ],
    "quizzes": [
      {
        "q": "Ảnh của điểm A(4; 0) qua phép quay tâm O góc 90° (ngược chiều kim đồng hồ) là:",
        "options": [
          "A'(0; 4)",
          "A'(0; -4)",
          "A'(-4; 0)",
          "A'(4; 4)"
        ],
        "answer": 0,
        "explanation": "Áp dụng công thức quay $90^\\circ$: $x' = -y = 0$, $y' = x = 4$. Vậy $A'(0; 4)$."
      },
      {
        "q": "Ảnh của điểm M(3; -2) qua phép đối xứng tâm I(1; 2) là điểm nào?",
        "options": [
          "M'(-1; 6)",
          "M'(2; 0)",
          "M'(5; 6)",
          "M'(-1; -6)"
        ],
        "answer": 0,
        "explanation": "Ta có $x' = 2a - x = 2(1) - 3 = -1$ và $y' = 2b - y = 2(2) - (-2) = 4 + 2 = 6$. Vậy $M'(-1; 6)$."
      },
      {
        "q": "Hình nào sau đây KHÔNG có tâm đối xứng?",
        "options": [
          "Hình bình hành",
          "Hình lục giác đều",
          "Tam giác đều",
          "Hình tròn"
        ],
        "answer": 2,
        "explanation": "Tam giác đều chỉ có 3 trục đối xứng, không có tâm đối xứng (quay 180° tam giác đều bị lộn ngược đỉnh)."
      }
    ]
  },
  {
    "id": "bai-5",
    "num": 5,
    "chuyende": "Chuyên đề 1: Phép biến hình trong mặt phẳng",
    "chuyendeId": "cd-1",
    "title": "Bài 5. Phép dời hình",
    "subtitle": "Định nghĩa phép dời hình, tính chất bảo toàn cự li, hợp thành phép dời hình và khái niệm hai hình bằng nhau",
    "desc": "Tổng quát hóa họ các phép biến hình bảo toàn khoảng cách: tịnh tiến, đối xứng trục, quay, đối xứng tâm; định nghĩa hai hình bằng nhau và ứng dụng trong thiết kế đồ họa.",
    "tag": "Chuyên đề 1 • Bài 5",
    "badgeColor": "sky",
    "sections": [
      {
        "heading": "1. Định nghĩa Phép dời hình",
        "summary": "Phép biến hình $f$ được gọi là phép dời hình nếu nó bảo toàn khoảng cách giữa hai điểm bất kì.",
        "details": [
          "**Hệ thức cốt lõi:** Với mọi cặp điểm $M, N$ trong mặt phẳng và ảnh $M' = f(M), N' = f(N)$, ta luôn có: $$M'N' = MN$$",
          "**Các phép dời hình cơ sở:**",
          "- Phép đồng nhất $e$.",
          "- Phép tịnh tiến $T_{\\vec{u}}$.",
          "- Phép đối xứng trục $Đ_d$.",
          "- Phép quay $Q_{(O, \\alpha)}$ (bao gồm phép đối xứng tâm $Đ_I$)."
        ]
      },
      {
        "heading": "2. Tính chất chung của Phép dời hình",
        "summary": "Do bảo toàn khoảng cách, phép dời hình giữ nguyên vẹn toàn bộ hình dạng và kích thước của các hình học.",
        "details": [
          "Biến ba điểm thẳng hàng thành ba điểm thẳng hàng và bảo toàn thứ tự giữa các điểm.",
          "Biến đường thẳng thành đường thẳng; biến tia thành tia; biến đoạn thẳng thành đoạn thẳng bằng nó.",
          "Biến tam giác thành tam giác bằng nó; biến góc thành góc có số đo bằng nó; bảo toàn diện tích ($S' = S$).",
          "Biến đường tròn $(I; R)$ thành đường tròn $(I'; R)$ có cùng bán kính $R$."
        ]
      },
      {
        "heading": "3. Hợp thành của các phép dời hình & Khái niệm Hai hình bằng nhau",
        "summary": "Hợp thành liên tiếp của hai hay nhiều phép dời hình vẫn là một phép dời hình.",
        "details": [
          "**Định nghĩa Hai hình bằng nhau:** Hai hình $H$ và $H'$ được gọi là bằng nhau nếu tồn tại một phép dời hình biến hình $H$ thành hình $H'$, kí hiệu $H \\cong H'$.",
          "**Ý nghĩa:** Mở rộng định nghĩa bằng nhau từ tam giác ra mọi hình dạng phức tạp trong mặt phẳng (như hai bông hoa, hai lục giác, hai chi tiết máy cơ khí).",
          "Mọi phép dời hình trong mặt phẳng đều có thể biểu diễn dưới dạng hợp thành của không quá ba phép đối xứng trục."
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Phép biến hình nào sau đây KHÔNG PHẢI là phép dời hình?",
        "options": [
          "Phép tịnh tiến",
          "Phép đối xứng trục",
          "Phép vị tự tỉ số k = 2",
          "Phép quay góc 45°"
        ],
        "answer": 2,
        "explanation": "Phép vị tự tỉ số k = 2 làm nhân đôi mọi khoảng cách ($M'N' = 2 MN$), do đó không bảo toàn khoảng cách nên không phải phép dời hình."
      },
      {
        "q": "Thực hiện liên tiếp phép tịnh tiến theo vectơ u và phép quay góc 60°, kết quả ta thu được là:",
        "options": [
          "Một phép co giãn",
          "Một phép dời hình",
          "Một phép nghịch đảo",
          "Một phép chiếu song song"
        ],
        "answer": 1,
        "explanation": "Hợp thành liên tiếp của hai phép dời hình luôn là một phép dời hình."
      },
      {
        "q": "Hai hình H và H' trong mặt phẳng được gọi là bằng nhau khi nào?",
        "options": [
          "Khi chúng có cùng diện tích",
          "Khi chúng có cùng chu vi",
          "Khi có một phép dời hình biến hình H thành hình H'",
          "Khi các cạnh của chúng song song với nhau"
        ],
        "answer": 2,
        "explanation": "Định nghĩa: Hai hình được gọi là bằng nhau nếu có một phép dời hình biến hình này thành hình kia."
      }
    ]
  },
  {
    "id": "bai-6",
    "num": 6,
    "chuyende": "Chuyên đề 1: Phép biến hình trong mặt phẳng",
    "chuyendeId": "cd-1",
    "title": "Bài 6. Phép vị tự",
    "subtitle": "Định nghĩa tâm và tỉ số vị tự k, biểu thức tọa độ, tính chất độ dài |k|, diện tích k² và ứng dụng phóng to/thu nhỏ",
    "desc": "Khảo sát phép vị tự V_(I,k), vectơ IM' = k IM, biểu thức tọa độ, tính chất biến góc, tam giác đồng dạng, diện tích nhân k² và phương pháp dựng hình đồng dạng.",
    "tag": "Chuyên đề 1 • Bài 6",
    "badgeColor": "sky",
    "sections": [
      {
        "heading": "1. Định nghĩa và Biểu thức tọa độ",
        "summary": "Cho điểm $I$ cố định và một số thực $k \\ne 0$. Phép biến hình biến mỗi điểm $M$ thành điểm $M'$ sao cho $\\overrightarrow{IM'} = k \\overrightarrow{IM}$ được gọi là phép vị tự tâm $I$, tỉ số $k$, kí hiệu $V_{(I, k)}$.",
        "details": [
          "**Dấu của tỉ số $k$:**",
          "- Khi $k > 0$: Điểm $M'$ nằm trên tia $IM$ ($M$ và $M'$ cùng phía đối với tâm $I$).",
          "- Khi $k < 0$: Điểm $M'$ nằm trên tia đối của tia $IM$ ($M$ và $M'$ khác phía đối với tâm $I$).",
          "**Các trường hợp suy biến đặc biệt:**",
          "- $k = 1$: $V_{(I, 1)}$ là phép đồng nhất.",
          "- $k = -1$: $V_{(I, -1)}$ là phép đối xứng tâm $I$.",
          "**Biểu thức tọa độ với tâm $I(a; b)$:** Cho $M(x; y)$, ảnh $M'(x'; y') = V_{(I, k)}(M)$ thỏa mãn: $$\\begin{cases} x' = a + k(x - a) \\\\ y' = b + k(y - b) \\end{cases}$$"
        ]
      },
      {
        "heading": "2. Các tính chất cơ bản của Phép vị tự",
        "summary": "Phép vị tự tỉ số $k$ biến khoảng cách giữa hai điểm thành $|k|$ lần khoảng cách ban đầu: $M'N' = |k| MN$.",
        "details": [
          "**Biến đường thẳng:** Biến đường thẳng không đi qua tâm thành đường thẳng **song song** với nó; biến đường thẳng đi qua tâm thành chính nó.",
          "**Biến đoạn thẳng:** Biến đoạn thẳng độ dài $l$ thành đoạn thẳng có độ dài $|k|l$.",
          "**Biến tam giác:** Biến tam giác thành tam giác đồng dạng với nó có tỉ số đồng dạng bằng $|k|$; các góc tương ứng bằng nhau.",
          "**Biến diện tích:** Diện tích hình ảnh bằng $k^2$ lần diện tích hình ban đầu: $$\\frac{S'}{S} = k^2$$",
          "**Biến đường tròn:** Biến đường tròn $(C)$ tâm $O$ bán kính $R$ thành đường tròn $(C')$ có tâm $O' = V_{(I, k)}(O)$ và **bán kính mới $R' = |k| R$**."
        ]
      },
      {
        "heading": "3. Ứng dụng thực tiễn của Phép vị tự",
        "summary": "Công cụ toán học của kính lúp phóng đại, ống kính zoom máy ảnh, máy chiếu projector, tính tâm vị tự trong và ngoài của hai đường tròn."
      }
    ],
    "quizzes": [
      {
        "q": "Ảnh của điểm M(3; -1) qua phép vị tự tâm O(0; 0) tỉ số k = -2 là điểm nào?",
        "options": [
          "M'(-6; 2)",
          "M'(6; -2)",
          "M'(-1; 1)",
          "M'(-6; -2)"
        ],
        "answer": 0,
        "explanation": "Với tâm là gốc O(0; 0): $x' = kx = -2(3) = -6$ và $y' = ky = -2(-1) = 2$. Vậy $M'(-6; 2)$."
      },
      {
        "q": "Một tam giác có diện tích S = 12 cm². Qua phép vị tự tỉ số k = 3, diện tích của tam giác ảnh S' bằng:",
        "options": [
          "36 cm²",
          "72 cm²",
          "108 cm²",
          "144 cm²"
        ],
        "answer": 2,
        "explanation": "Tỉ số diện tích qua phép vị tự là $S'/S = k^2 = 3^2 = 9$. Do đó $S' = 9 \\times 12 = 108\\text{ cm}^2$."
      },
      {
        "q": "Phép vị tự tâm I tỉ số k = -1 tương đương với phép biến hình nào?",
        "options": [
          "Phép đối xứng tâm I",
          "Phép tịnh tiến",
          "Phép quay góc 90°",
          "Phép đồng nhất"
        ],
        "answer": 0,
        "explanation": "Khi $k = -1$, $\\overrightarrow{IM'} = -\\overrightarrow{IM}$, tức $I$ là trung điểm $MM'$, đây chính là định nghĩa của phép đối xứng tâm $I$."
      }
    ]
  },
  {
    "id": "bai-7",
    "num": 7,
    "chuyende": "Chuyên đề 1: Phép biến hình trong mặt phẳng",
    "chuyendeId": "cd-1",
    "title": "Bài 7. Phép đồng dạng",
    "subtitle": "Định nghĩa phép đồng dạng tỉ số k, phân tích hợp thành, hình học Fractal và bông tuyết Koch",
    "desc": "Định nghĩa phép đồng dạng tỉ số k > 0, hợp thành dời hình và vị tự, hai hình đồng dạng, ứng dụng bản vẽ theo tỉ lệ và khám phá cấu trúc tự đồng dạng Fractal bông tuyết Koch.",
    "tag": "Chuyên đề 1 • Bài 7",
    "badgeColor": "sky",
    "sections": [
      {
        "heading": "1. Định nghĩa Phép đồng dạng",
        "summary": "Phép biến hình $f$ được gọi là phép đồng dạng tỉ số $k$ ($k > 0$) nếu với hai điểm $M, N$ bất kì và ảnh $M', N'$ tương ứng, ta luôn có: $M'N' = k MN$.",
        "details": [
          "**Nhận xét:**",
          "- Phép dời hình là phép đồng dạng với tỉ số $k = 1$.",
          "- Phép vị tự tỉ số $k$ là phép đồng dạng với tỉ số $|k|$.",
          "- Hợp thành của một phép vị tự và một phép dời hình là một phép đồng dạng.",
          "**Tính chất:** Biến ba điểm thẳng hàng thành ba điểm thẳng hàng và bảo toàn thứ tự; biến góc thành góc bằng nó; biến tam giác thành tam giác đồng dạng; biến đường tròn bán kính $R$ thành đường tròn bán kính $kR$; diện tích nhân $k^2$."
        ]
      },
      {
        "heading": "2. Khái niệm Hai hình đồng dạng",
        "summary": "Hai hình $H$ và $H'$ được gọi là đồng dạng với nhau nếu có một phép đồng dạng biến hình $H$ thành hình $H'$, kí hiệu $H \\sim H'$.",
        "details": [
          "Hai hình đồng dạng có cùng \"hình dạng\" nhưng có thể khác nhau về kích thước và vị trí trong không gian.",
          "Mọi đường tròn đều đồng dạng với nhau; mọi hình vuông đều đồng dạng với nhau; mọi tam giác đều đều đồng dạng với nhau."
        ]
      },
      {
        "heading": "3. Hình học Fractal và Bông tuyết Koch (Koch Snowflake)",
        "summary": "Khám phá thế giới hình học fractal tự đồng dạng (Self-similarity) kì thú của toán học hiện đại.",
        "details": [
          "**Quy trình dựng đường cong Koch:** Bắt đầu từ tam giác đều cạnh $a$. Ở mỗi bước, chia mỗi đoạn thẳng thành 3 phần bằng nhau, dựng một tam giác đều hướng ra ngoài trên đoạn ở giữa, rồi xóa bỏ đoạn đáy giữa đó. Lặp lại vô hạn lần quá trình này.",
          "**Công thức chu vi ở bước thứ $n$ ($n \\ge 1$):** Số cạnh tăng gấp 4 lần và độ dài mỗi cạnh giảm còn $1/3$: $$P_n = 3a \\left(\\frac{4}{3}\\right)^{n-1}$$ Vì $4/3 > 1$, khi $n \\to \\infty$ thì chu vi $P_n \\to \\infty$ (**chu vi dài vô hạn!**).",
          "**Công thức diện tích ở bước thứ $n$:** $$S_n = \\left(8 - 3\\left(\\frac{4}{9}\\right)^{n-1}\\right) \\frac{a^2\\sqrt{3}}{20}$$ Khi $n \\to \\infty$, $(4/9)^{n-1} \\to 0$, diện tích tiệm cận về giá trị hữu hạn: $$S_\\infty = \\frac{8}{5} S_0 = \\frac{2\\sqrt{3}}{5} a^2$$ (**diện tích bị chặn hữu hạn!**).",
          "**Ý nghĩa thực tế:** Mô phỏng cấu trúc tự nhiên: đường bờ biển ngoằn ngoèo, tia sét phân nhánh, bông tuyết mùa đông, mạng lưới phế quản phổi và mạch máu cơ thể người."
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Nếu hình H đồng dạng với hình H' theo tỉ số k = 1/500 trên bản đồ địa chính, thì diện tích thực địa S của một khu đất gấp bao nhiêu lần diện tích S' trên bản đồ?",
        "options": [
          "500 lần",
          "1.000 lần",
          "250.000 lần",
          "2.500 lần"
        ],
        "answer": 2,
        "explanation": "Tỉ số diện tích tỉ lệ với bình phương tỉ số kích thước: $S / S' = (500)^2 = 250.000$ lần."
      },
      {
        "q": "Đặc điểm nghịch lí hình học nổi tiếng nhất của bông tuyết Koch (Koch Snowflake) sau vô hạn bước lặp là gì?",
        "options": [
          "Chu vi bằng 0 và diện tích bằng vô hạn",
          "Chu vi dài vô hạn nhưng diện tích lại bị chặn hữu hạn (bằng 8/5 diện tích ban đầu)",
          "Chu vi và diện tích đều tiến về 0",
          "Hình dáng trở thành một hình tròn hoàn hảo"
        ],
        "answer": 1,
        "explanation": "Bông tuyết Koch có chu vi tăng theo cấp số nhân công bội 4/3 nên tiến ra vô cực, trong khi diện tích tăng hội tụ về giá trị hữu hạn 8/5 S_tam_giác."
      },
      {
        "q": "Khẳng định nào sau đây là SAI về phép đồng dạng?",
        "options": [
          "Phép đồng dạng luôn bảo toàn độ lớn của các góc",
          "Mọi phép dời hình đều là phép đồng dạng với tỉ số k = 1",
          "Phép đồng dạng biến đường tròn bán kính R thành đường tròn bán kính kR",
          "Phép đồng dạng luôn biến một đoạn thẳng thành đoạn thẳng có cùng độ dài với nó"
        ],
        "answer": 3,
        "explanation": "Phép đồng dạng tỉ số k làm biến đổi độ dài đoạn thẳng thành k lần ($l' = kl$), chỉ khi k = 1 (phép dời hình) thì độ dài mới giữ nguyên."
      }
    ]
  },
  {
    "id": "bai-8",
    "num": 8,
    "chuyende": "Chuyên đề 2: Lí thuyết đồ thị",
    "chuyendeId": "cd-2",
    "title": "Bài 8. Một vài khái niệm cơ bản của lí thuyết đồ thị",
    "subtitle": "Đồ thị, đơn đồ thị, đa đồ thị, đồ thị đầy đủ K_n, bậc đỉnh, định lí bắt tay và tính liên thông",
    "desc": "Các khái niệm cơ sở: tập đỉnh V, tập cạnh E, bậc deg(v), đỉnh cô lập, đỉnh treo, định lí bắt tay kinh điển, đường đi, chu trình và tính liên thông trong đồ thị.",
    "tag": "Chuyên đề 2 • Bài 8",
    "badgeColor": "emerald",
    "sections": [
      {
        "heading": "1. Khái niệm Đồ thị, Đơn đồ thị, Đa đồ thị",
        "summary": "Đồ thị là một cấu trúc toán học gồm một tập hữu hạn các đỉnh (vertices) và một tập các cạnh (edges) nối các cặp đỉnh; kí hiệu $G = (V, E)$.",
        "details": [
          "**Đỉnh kề và Cạnh liên thuộc:** Hai đỉnh nối với nhau bởi một cạnh gọi là hai đỉnh kề nhau. Cạnh nối hai đỉnh $u, v$ kí hiệu là $e = (u, v)$ hoặc $uv$.",
          "**Khuyên (Loop):** Cạnh có hai đầu mút trùng nhau (nối một đỉnh với chính nó).",
          "**Đơn đồ thị (Simple Graph):** Đồ thị không có khuyên và giữa hai đỉnh bất kì có nhiều nhất một cạnh nối.",
          "**Đa đồ thị (Multigraph):** Đồ thị có thể có nhiều cạnh song song nối cùng một cặp đỉnh.",
          "**Đồ thị đầy đủ $K_n$:** Đơn đồ thị có $n$ đỉnh mà mọi cặp đỉnh phân biệt đều có cạnh nối. Số cạnh của $K_n$ là: $$|E(K_n)| = C_n^2 = \\frac{n(n-1)}{2}$$",
          "*Lưu ý:* Vị trí tọa độ hình học của đỉnh và hình dạng cong hay thẳng của cạnh không quan trọng; điều quan trọng nhất là danh sách các mối liên kết giữa các đỉnh."
        ]
      },
      {
        "heading": "2. Bậc của đỉnh & Định lí Bắt tay",
        "summary": "Bậc của đỉnh $v$, kí hiệu $\\deg(v)$, là số cạnh liên thuộc với đỉnh $v$ (mỗi khuyên được tính hai lần vào bậc).",
        "details": [
          "**Phân loại đỉnh:** Đỉnh có bậc 0 gọi là **đỉnh cô lập**; đỉnh có bậc 1 gọi là **đỉnh treo**.",
          "**Định lí Bắt tay (Handshaking Lemma):** Trong mọi đồ thị $G = (V, E)$, tổng bậc của tất cả các đỉnh bằng hai lần tổng số cạnh: $$\\sum_{v \\in V} \\deg(v) = 2 |E|$$",
          "**Hệ quả sống còn:**",
          "- Tổng bậc của tất cả các đỉnh trong một đồ thị luôn luôn là một **số chẵn**.",
          "- Trong mọi đồ thị, **số lượng đỉnh có bậc lẻ luôn luôn là một số chẵn** (không bao giờ tồn tại đồ thị có số đỉnh bậc lẻ là số lẻ, ví dụ: không thể có đồ thị có đúng 3 đỉnh bậc 3)."
        ]
      },
      {
        "heading": "3. Đường đi, Chu trình và Đồ thị liên thông",
        "summary": "Khái niệm liên kết chuyển động và cấu trúc liên thông trong mạng lưới đồ thị.",
        "details": [
          "**Đường đi (Path):** Dãy các đỉnh và cạnh liên tiếp $v_0, e_1, v_1, e_2, \\dots, e_k, v_k$. Độ dài đường đi bằng số cạnh $k$.",
          "**Chu trình (Cycle):** Đường đi khép kín có đỉnh đầu trùng đỉnh cuối ($v_0 = v_k$) và độ dài $\\ge 3$.",
          "**Tính liên thông (Connectedness):** Hai đỉnh $u, v$ gọi là liên thông nếu có ít nhất một đường đi nối giữa chúng. Đồ thị $G$ được gọi là **liên thông** nếu mọi cặp đỉnh phân biệt đều liên thông với nhau.",
          "**Ứng dụng:** Mô hình hóa mạng xã hội (đỉnh là người, cạnh là kết bạn), mạng internet (đỉnh là router, cạnh là cáp mạng), bản đồ giao thông và lịch thi đấu thể thao."
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Một đơn đồ thị có 6 đỉnh và 8 cạnh. Tổng bậc của tất cả 6 đỉnh trong đồ thị này bằng bao nhiêu?",
        "options": [
          "8",
          "14",
          "16",
          "48"
        ],
        "answer": 2,
        "explanation": "Theo Định lí bắt tay: $\\sum \\deg(v) = 2|E| = 2 \\times 8 = 16$."
      },
      {
        "q": "Số cạnh của một đồ thị đầy đủ K₅ (gồm 5 đỉnh) là:",
        "options": [
          "5 cạnh",
          "10 cạnh",
          "15 cạnh",
          "20 cạnh"
        ],
        "answer": 1,
        "explanation": "Số cạnh của đồ thị đầy đủ $K_n$ là $n(n-1)/2$. Với $n = 5$: $5 \\times 4 / 2 = 10$ cạnh."
      },
      {
        "q": "Trong một nhóm gồm 7 người bạn, có thể xảy ra trường hợp mỗi người đều bắt tay với đúng 3 người khác không?",
        "options": [
          "Có thể, nếu họ xếp thành vòng tròn",
          "Không thể, vì khi đó tổng bậc là 7 × 3 = 21 (số lẻ), vi phạm định lí bắt tay",
          "Có thể, nếu có 1 người bắt tay 2 lần",
          "Không thể, vì số người phải lớn hơn 10"
        ],
        "answer": 1,
        "explanation": "Mỗi người bắt tay 3 người tương ứng với đồ thị 7 đỉnh bậc 3. Tổng bậc là $7 \\times 3 = 21$, là số lẻ. Theo Định lí bắt tay, tổng bậc luôn là số chẵn ($2|E|$), nên trường hợp này không thể tồn tại."
      }
    ]
  },
  {
    "id": "bai-9",
    "num": 9,
    "chuyende": "Chuyên đề 2: Lí thuyết đồ thị",
    "chuyendeId": "cd-2",
    "title": "Bài 9. Đường đi Euler và đường đi Hamilton",
    "subtitle": "Đường đi/Chu trình Euler (qua mọi cạnh), bài toán cầu Königsberg, Đường đi/Chu trình Hamilton (qua mọi đỉnh) và Định lí Ore/Dirac",
    "desc": "Phân biệt rạch ròi bài toán Euler (duyệt cạnh) và bài toán Hamilton (duyệt đỉnh), tiêu chuẩn Euler về số đỉnh bậc lẻ, định lí Ore và hệ quả Dirac cho chu trình Hamilton.",
    "tag": "Chuyên đề 2 • Bài 9",
    "badgeColor": "emerald",
    "sections": [
      {
        "heading": "1. Đường đi và Chu trình Euler (Qua mọi cạnh đúng 1 lần)",
        "summary": "Đường đi Euler là đường đi đi qua mọi cạnh của đồ thị, mỗi cạnh đúng một lần. Chu trình Euler là đường đi Euler khép kín.",
        "details": [
          "**Định lí Euler (Điều kiện cần và đủ):** Cho đồ thị liên thông $G$:",
          "- $G$ có **chu trình Euler** $\\iff$ **mọi đỉnh của $G$ đều có bậc chẵn**.",
          "- $G$ có **đường đi Euler mở** (không khép kín) $\\iff$ **đồ thị có đúng hai đỉnh bậc lẻ**. Khi đó, đường đi phải bắt đầu từ một đỉnh bậc lẻ và kết thúc ở đỉnh bậc lẻ còn lại.",
          "- Nếu đồ thị có nhiều hơn 2 đỉnh bậc lẻ $\\implies$ không tồn tại đường đi Euler (không thể vẽ một nét liên tục qua hết các cạnh).",
          "**Bài toán Bảy cây cầu Königsberg (Euler 1736):** Bốn vùng đất có bậc lần lượt là 3, 3, 3, 5 (cả 4 đỉnh đều là đỉnh bậc lẻ). Do có tới 4 đỉnh bậc lẻ nên không thể đi dạo qua mỗi cây cầu đúng một lần."
        ]
      },
      {
        "heading": "2. Đường đi và Chu trình Hamilton (Qua mọi đỉnh đúng 1 lần)",
        "summary": "Đường đi Hamilton là đường đi đi qua mọi đỉnh của đồ thị, mỗi đỉnh đúng một lần. Chu trình Hamilton là chu trình đi qua mọi đỉnh đúng một lần rồi quay về đỉnh xuất phát.",
        "details": [
          "**Đặc điểm:** Khác với Euler có tiêu chuẩn cần và đủ rất đơn giản theo bậc chẵn/lẻ, bài toán tìm chu trình Hamilton thuộc lớp bài toán NP-đầy đủ (rất khó trong toán học tổng quát).",
          "**Định lí Ore (Điều kiện đủ):** Cho đơn đồ thị $G$ có $n \\ge 3$ đỉnh. Nếu với mọi cặp đỉnh không kề nhau $u, v$, ta đều có: $$\\deg(u) + \\deg(v) \\ge n$$ thì đồ thị $G$ có chu trình Hamilton.",
          "**Hệ quả Dirac (Điều kiện đủ):** Cho đơn đồ thị $G$ có $n \\ge 3$ đỉnh. Nếu mỗi đỉnh của $G$ đều có bậc ít nhất bằng $n/2$: $$\\deg(v) \\ge \\frac{n}{2}, \\quad \\forall v \\in V$$ thì đồ thị $G$ có chu trình Hamilton.",
          "*Lưu ý:* Định lí Ore và Dirac chỉ là điều kiện đủ, không phải điều kiện cần. Nhiều đồ thị không thỏa mãn Dirac nhưng vẫn có chu trình Hamilton (như đồ thị vòng $C_n$)."
        ]
      },
      {
        "heading": "3. So sánh tổng hợp Euler và Hamilton",
        "summary": "Bảng phân biệt cốt lõi phục vụ làm bài tập chính xác.",
        "details": [
          "- **Euler:** Trọng tâm là **CẠNH** (đi qua mỗi cạnh đúng 1 lần). Đỉnh có thể đi qua nhiều lần. Điều kiện cần và đủ kiểm tra bằng bậc chẵn/lẻ.",
          "- **Hamilton:** Trọng tâm là **ĐỈNH** (đi qua mỗi đỉnh đúng 1 lần). Cạnh không bắt buộc phải đi qua hết. Điều kiện đủ kiểm tra bằng bậc $\\ge n/2$."
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Một đồ thị liên thông có chu trình Euler khi và chỉ khi:",
        "options": [
          "Đồ thị có ít nhất một đỉnh bậc 1",
          "Mọi đỉnh của đồ thị đều có bậc chẵn",
          "Đồ thị có đúng hai đỉnh bậc lẻ",
          "Số đỉnh bằng số cạnh"
        ],
        "answer": 1,
        "explanation": "Định lí Euler khẳng định: Đồ thị liên thông có chu trình Euler khi và chỉ khi tất cả các đỉnh của đồ thị đều có bậc chẵn."
      },
      {
        "q": "Tại sao cư dân thành phố Königsberg không thể đi qua tất cả 7 cây cầu mỗi cầu đúng một lần?",
        "options": [
          "Vì các cây cầu bị gãy",
          "Vì đồ thị mô hình có 4 đỉnh đều mang bậc lẻ (3, 3, 3, 5), trong khi đường đi Euler chỉ cho phép tối đa 2 đỉnh bậc lẻ",
          "Vì đồ thị không liên thông",
          "Vì đồ thị có quá nhiều chu trình Hamilton"
        ],
        "answer": 1,
        "explanation": "Euler đã chứng minh đồ thị Königsberg có 4 đỉnh bậc lẻ, vượt quá số đỉnh bậc lẻ tối đa cho phép (2 đỉnh), do đó không tồn tại đường đi Euler."
      },
      {
        "q": "Theo định lí Dirac, một đơn đồ thị có 8 đỉnh chắc chắn có chu trình Hamilton nếu bậc của mỗi đỉnh thỏa mãn:",
        "options": [
          "deg(v) ≥ 2 với mọi v",
          "deg(v) ≥ 4 với mọi v (tức ≥ 8/2)",
          "deg(v) = 3 với mọi v",
          "Tổng bậc của 8 đỉnh bằng 16"
        ],
        "answer": 1,
        "explanation": "Hệ quả Dirac: Đơn đồ thị có n ≥ 3 đỉnh sẽ có chu trình Hamilton nếu mỗi đỉnh có bậc $\\deg(v) \\ge n/2$. Với $n = 8$, điều kiện là $\\deg(v) \\ge 4$."
      }
    ]
  },
  {
    "id": "bai-10",
    "num": 10,
    "chuyende": "Chuyên đề 2: Lí thuyết đồ thị",
    "chuyendeId": "cd-2",
    "title": "Bài 10. Bài toán tìm đường đi tối ưu",
    "subtitle": "Đồ thị có trọng số, thuật toán Dijkstra tìm đường ngắn nhất và bài toán Người đưa thư",
    "desc": "Phương pháp giải quyết các bài toán tối ưu trên mạng lưới: trọng số cạnh w(e) ≥ 0, thuật toán gắn nhãn cố định Dijkstra và giải pháp cho bài toán Người đưa thư (Chinese Postman Problem).",
    "tag": "Chuyên đề 2 • Bài 10",
    "badgeColor": "emerald",
    "sections": [
      {
        "heading": "1. Đồ thị có trọng số (Weighted Graph)",
        "summary": "Đồ thị có trọng số là đồ thị mà mỗi cạnh $e$ được gán với một số thực không âm $w(e) \\ge 0$, đại diện cho khoảng cách, thời gian di chuyển, chi phí hoặc cước phí viễn thông.",
        "details": [
          "**Trọng số của đường đi:** Bằng tổng trọng số của tất cả các cạnh tạo nên đường đi đó: $w(P) = \\sum_{e \\in P} w(e)$.",
          "**Bài toán đường đi ngắn nhất:** Tìm đường đi giữa đỉnh xuất phát $S$ và đỉnh đích $T$ sao cho $w(P)$ nhỏ nhất."
        ]
      },
      {
        "heading": "2. Thuật toán Dijkstra tìm đường đi ngắn nhất",
        "summary": "Thuật toán kinh điển của Edsger W. Dijkstra (1959) giải quyết bài toán tìm đường ngắn nhất từ một đỉnh nguồn đến các đỉnh còn lại.",
        "details": [
          "**Quy trình 4 bước gắn nhãn:**",
          "- **Bước 1 (Khởi tạo):** Gán cho đỉnh xuất phát nhãn vĩnh viễn $d(S) = 0$. Các đỉnh còn lại gán nhãn tạm thời $d(v) = \\infty$. Đỉnh hiện tại là $u = S$.",
          "- **Bước 2 (Cập nhật lân cận):** Với mỗi đỉnh kề $v$ chưa chốt nhãn vĩnh viễn, cập nhật nhãn tạm thời: $$d(v) = \\min(d(v), d(u) + w(u, v))$$ Lưu đỉnh trước để truy vết đường đi.",
          "- **Bước 3 (Chốt nhãn nhỏ nhất):** Trong số tất cả các đỉnh mang nhãn tạm thời, chọn đỉnh có giá trị nhãn nhỏ nhất và chuyển thành nhãn **vĩnh viễn**. Đặt đỉnh này làm đỉnh hiện tại $u$.",
          "- **Bước 4 (Dừng hoặc Lặp):** Lặp lại Bước 2 và 3 cho đến khi đỉnh đích $T$ được chốt nhãn vĩnh viễn.",
          "- **Truy vết:** Lần ngược từ đỉnh $T$ về $S$ theo các cạnh thỏa mãn $d(v) - d(u) = w(u, v)$.",
          "*Lưu ý bắt buộc:* Thuật toán chỉ đúng khi trọng số các cạnh không âm ($w \\ge 0$)."
        ]
      },
      {
        "heading": "3. Bài toán Người đưa thư (Chinese Postman Problem)",
        "summary": "Người đưa thư xuất phát từ bưu điện, cần đi qua tất cả các con đường (mỗi cạnh ít nhất một lần) để phát thư rồi quay trở về điểm ban đầu sao cho tổng quãng đường ngắn nhất.",
        "details": [
          "**Trường hợp 1: Mọi đỉnh đều có bậc chẵn:** Đồ thị có chu trình Euler. Chu trình Euler chính là hành trình tối ưu nhất; tổng quãng đường đúng bằng tổng trọng số của tất cả các cạnh trong đồ thị.",
          "**Trường hợp 2: Đồ thị có đúng hai đỉnh bậc lẻ $A$ và $B$:** Người đưa thư đi theo đường Euler từ $A$ đến $B$ (hoặc ngược lại) đã qua hết mọi cạnh, sau đó cần quay về đỉnh xuất phát bằng con **đường đi ngắn nhất giữa $A$ và $B$** (tìm bằng Dijkstra). Tổng độ dài hành trình tối ưu bằng: $$L_{\\min} = \\sum_{e \\in E} w(e) + d_{\\min}(A, B)$$ (các cạnh trên đường ngắn nhất giữa $A$ và $B$ phải đi lặp lại 2 lần)."
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Thuật toán Dijkstra được sử dụng để giải quyết bài toán nào trên đồ thị có trọng số không âm?",
        "options": [
          "Tìm đường đi ngắn nhất từ một đỉnh nguồn đến các đỉnh khác",
          "Đếm số chu trình Hamilton",
          "Tô màu các đỉnh của đồ thị",
          "Tìm số thành phần liên thông"
        ],
        "answer": 0,
        "explanation": "Thuật toán Dijkstra là thuật toán tối ưu tiêu chuẩn để tìm đường đi có tổng trọng số nhỏ nhất từ một đỉnh đến các đỉnh còn lại."
      },
      {
        "q": "Tổng trọng số tất cả các cạnh trong mạng lưới giao thông là 100 km. Đồ thị có đúng 2 đỉnh bậc lẻ A và B, với khoảng cách ngắn nhất giữa A và B là 15 km. Độ dài hành trình ngắn nhất của người đưa thư là:",
        "options": [
          "100 km",
          "115 km",
          "130 km",
          "150 km"
        ],
        "answer": 1,
        "explanation": "Hành trình người đưa thư phải đi qua mọi cạnh ít nhất một lần (100 km) và lặp lại đoạn nối 2 đỉnh lẻ ngắn nhất (15 km), do đó tổng độ dài là $100 + 15 = 115\\text{ km}$."
      },
      {
        "q": "Điều kiện tiên quyết để thuật toán Dijkstra hoạt động chính xác là:",
        "options": [
          "Đồ thị phải là đồ thị phẳng",
          "Tất cả trọng số trên các cạnh phải không âm (w ≥ 0)",
          "Mọi đỉnh phải có bậc chẵn",
          "Số cạnh phải nhỏ hơn 20"
        ],
        "answer": 1,
        "explanation": "Thuật toán Dijkstra áp dụng chiến lược tham lam (greedy) nên yêu cầu mọi trọng số cạnh phải không âm ($w \\ge 0$) để không vi phạm tính chất nhãn tối ưu."
      }
    ]
  },
  {
    "id": "bai-11",
    "num": 11,
    "chuyende": "Chuyên đề 3: Một số yếu tố vẽ kĩ thuật",
    "chuyendeId": "cd-3",
    "title": "Bài 11. Hình chiếu vuông góc và hình chiếu trục đo",
    "subtitle": "Các phép chiếu hình học, ba hình chiếu vuông góc (đứng, bằng, cạnh) và hình chiếu trục đo vuông góc đều",
    "desc": "Phương pháp biểu diễn vật thể không gian 3D lên mặt phẳng bản vẽ 2D: phép chiếu vuông góc, vị trí ba hình chiếu, quan hệ dóng thẳng hàng và hình chiếu trục đo vuông góc đều ba trục 120°.",
    "tag": "Chuyên đề 3 • Bài 11",
    "badgeColor": "violet",
    "sections": [
      {
        "heading": "1. Phép chiếu và Hình biểu diễn",
        "summary": "Hình biểu diễn của một vật thể trong không gian là hình chiếu của vật thể đó lên một mặt phẳng qua một phép chiếu xác định.",
        "details": [
          "**Phép chiếu xuyên tâm:** Tâm chiếu $S$ là điểm hữu hạn; các tia chiếu đồng quy tại $S$. Dùng vẽ **hình phối cảnh** (kiến trúc, nội thất, cảm giác xa gần theo thị giác).",
          "**Phép chiếu song song:** Tâm chiếu ở vô cực; các tia chiếu song song với nhau.",
          "- Nếu tia chiếu vuông góc với mặt phẳng chiếu $\\implies$ **Phép chiếu vuông góc** (cơ sở của bản vẽ kĩ thuật chế tạo).",
          "- Nếu tia chiếu không vuông góc $\\implies$ **Phép chiếu xiên** (dùng cho trục đo xiên cân)."
        ]
      },
      {
        "heading": "2. Phương pháp ba hình chiếu vuông góc",
        "summary": "Ba mặt phẳng hình chiếu đôi một vuông góc tạo thành góc phần tám để chiếu vật thể.",
        "details": [
          "**3 Mặt phẳng hình chiếu cơ bản:**",
          "- Mặt phẳng hình chiếu đứng (chính diện): Cho **Hình chiếu đứng** (hướng nhìn từ trước tới, thể hiện chiều dài và chiều cao).",
          "- Mặt phẳng hình chiếu bằng (nằm ngang): Cho **Hình chiếu bằng** (hướng nhìn từ trên xuống, thể hiện chiều dài và chiều rộng).",
          "- Mặt phẳng hình chiếu cạnh (bên trái): Cho **Hình chiếu cạnh** (hướng nhìn từ trái sang, thể hiện chiều rộng và chiều cao).",
          "**Quy ước mở mặt phẳng lên bản vẽ:**",
          "- Mở mặt phẳng hình chiếu bằng xuống dưới $90^\\circ$ quanh trục $Ox$.",
          "- Mở mặt phẳng hình chiếu cạnh sang phải $90^\\circ$ quanh trục $Oz$.",
          "**Quy tắc vị trí trên bản vẽ:** Hình chiếu bằng nằm **ngay phía dưới** hình chiếu đứng (dóng thẳng hàng theo chiều dài); Hình chiếu cạnh nằm **ngay bên phải** hình chiếu đứng (dóng thẳng hàng theo chiều cao)."
        ]
      },
      {
        "heading": "3. Hình chiếu trục đo vuông góc đều",
        "summary": "Hình biểu diễn không gian ba chiều giúp người đọc hình dung trực quan hình dạng khối vật thể.",
        "details": [
          "**Định nghĩa:** Là hình chiếu song song của vật thể cùng hệ trục tọa độ vuông góc $Oxyz$ lên mặt phẳng chiếu, với phương chiếu vuông góc với mặt phẳng chiếu.",
          "**Góc trục đo:** Các trục đo $O'x', O'y', O'z'$ tạo với nhau các góc bằng nhau đúng $120^\\circ$: $$\\widehat{x'O'y'} = \\widehat{y'O'z'} = \\widehat{z'O'x'} = 120^\\circ$$",
          "**Hệ số biến dạng:** Tỉ số giữa độ dài hình chiếu trên trục đo và độ dài thật trong không gian:",
          "- Theo trục $O'x'$: $p = O'A' / OA$.",
          "- Theo trục $O'y'$: $q = O'B' / OB$.",
          "- Theo trục $O'z'$: $r = O'C' / OC$.",
          "- Trong trục đo vuông góc đều lí thuyết: $p = q = r \\approx 0{,}82$. Để thuận tiện khi vẽ kĩ thuật thủ công, người ta **quy ước lấy $p = q = r = 1$** (kích thước đo đặt đúng bằng kích thước thật)."
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Theo quy chuẩn bố trí bản vẽ kĩ thuật, hình chiếu bằng được đặt ở vị trí nào so với hình chiếu đứng?",
        "options": [
          "Ở phía trên hình chiếu đứng",
          "Ở ngay phía dưới hình chiếu đứng, dóng thẳng hàng theo chiều dài",
          "Ở phía bên trái hình chiếu đứng",
          "Ở một trang giấy riêng biệt"
        ],
        "answer": 1,
        "explanation": "Quy tắc mở mặt phẳng chiếu: Mặt phẳng hình chiếu bằng được quay xuống dưới 90°, do đó hình chiếu bằng luôn nằm ngay phía dưới hình chiếu đứng."
      },
      {
        "q": "Trong hình chiếu trục đo vuông góc đều, góc giữa các trục đo O'x', O'y', O'z' có giá trị bằng bao nhiêu?",
        "options": [
          "90°",
          "120°",
          "135°",
          "150°"
        ],
        "answer": 1,
        "explanation": "Trong trục đo vuông góc đều, ba trục đo tạo thành 3 góc bằng nhau đôi một: $\\widehat{x'O'y'} = \\widehat{y'O'z'} = \\widehat{z'O'x'} = 120^\\circ$."
      },
      {
        "q": "Hệ số biến dạng quy ước theo ba trục đo p, q, r trong hình chiếu trục đo vuông góc đều thường được lấy bằng bao nhiêu để thuận tiện khi vẽ?",
        "options": [
          "p = q = r = 0,5",
          "p = q = r = 1",
          "p = 1, q = 0,5, r = 1",
          "p = q = r = 2"
        ],
        "answer": 1,
        "explanation": "Để thuận tiện dựng hình mà không cần nhân chia tỉ lệ 0,82, tiêu chuẩn vẽ kĩ thuật quy ước lấy hệ số biến dạng $p = q = r = 1$."
      }
    ]
  },
  {
    "id": "bai-12",
    "num": 12,
    "chuyende": "Chuyên đề 3: Một số yếu tố vẽ kĩ thuật",
    "chuyendeId": "cd-3",
    "title": "Bài 12. Bản vẽ kĩ thuật",
    "subtitle": "Tiêu chuẩn bản vẽ: Khung vẽ, khung tên, khổ giấy, tỉ lệ, 5 loại nét vẽ, quy tắc kích thước, quy trình đọc và lập bản vẽ",
    "desc": "Hệ thống hóa toàn bộ tiêu chuẩn quốc gia TCVN về bản vẽ kĩ thuật: khổ giấy A0-A4, nét liền đậm, đứt mảnh, trục đối xứng, nguyên tắc phản chuyển, đầy đủ, quy trình 5 bước đọc và 6 bước lập bản vẽ hoàn chỉnh.",
    "tag": "Chuyên đề 3 • Bài 12",
    "badgeColor": "violet",
    "sections": [
      {
        "heading": "1. Tiêu chuẩn Khung vẽ, Khung tên, Khổ giấy và Tỉ lệ",
        "summary": "Bản vẽ kĩ thuật là \"ngôn ngữ chung\" của ngành kĩ thuật, truyền đạt chính xác hình dáng, cấu tạo và kích thước của sản phẩm.",
        "details": [
          "**Khung bản vẽ:** Kẻ bằng nét liền đậm; mép trái chừa cách mép giấy $20\\text{ mm}$ (để đóng gáy tập hồ sơ); ba mép còn lại (trên, dưới, phải) chừa cách mép giấy $10\\text{ mm}$ (với A4 có thể chừa $5\\text{ mm}$).",
          "**Khung tên:** Đặt ở góc dưới cùng bên phải của bản vẽ; ghi tên chi tiết, vật liệu chế tạo, tỉ lệ, người vẽ, người kiểm tra, ngày vẽ, trường/lớp.",
          "**Các khổ giấy chính (theo TCVN):**",
          "- $A0: 1189 \\times 841\\text{ mm}$ (diện tích $\\approx 1\\text{ m}^2$).",
          "- $A1: 841 \\times 594\\text{ mm}$; $A2: 594 \\times 420\\text{ mm}$.",
          "- $A3: 420 \\times 297\\text{ mm}$; $A4: 297 \\times 210\\text{ mm}$.",
          "**Đơn vị đo:** Mặc định trên bản vẽ kĩ thuật cơ khí luôn là **milimét (mm)** (không cần ghi chữ mm sau con số).",
          "**Tỉ lệ bản vẽ:** Tỉ số kích thước đo trên bản vẽ chia kích thước thật.",
          "- Tỉ lệ nguyên hình: $1:1$.",
          "- Tỉ lệ thu nhỏ: $1:2, 1:5, 1:10, 1:20, 1:50$.",
          "- Tỉ lệ phóng to: $2:1, 5:1, 10:1, 20:1, 50:1$."
        ]
      },
      {
        "heading": "2. Các loại nét vẽ và Tiêu chuẩn ghi kích thước",
        "summary": "Bảng quy ước 5 loại nét vẽ chuẩn mực trong bản vẽ kĩ thuật.",
        "details": [
          "**Bảng phân loại nét vẽ:**",
          "- **Nét liền đậm (Continuous thick):** Vẽ đường bao thấy, cạnh thấy của vật thể (bề rộng $s \\approx 0{,}5 - 0{,}7\\text{ mm}$).",
          "- **Nét liền mảnh (Continuous thin):** Vẽ đường dóng kích thước, đường kích thước, đường gạch mặt cắt ($s/2$).",
          "- **Nét đứt mảnh (Dashed line):** Vẽ đường bao khuất, cạnh khuất bên trong vật thể.",
          "- **Nét gạch dài chấm mảnh (Chain thin):** Vẽ trục đối xứng, đường tâm đường tròn, đường chia trục.",
          "- **Nét lượn sóng (Wavy line):** Vẽ đường giới hạn phần cắt xén hoặc đường cắt lìa.",
          "**Quy tắc ghi kích thước:** Đường dóng nhô qua đường kích thước $2 - 4\\text{ mm}$; hai đầu đường kích thước có mũi tên chạm vào đường dóng; con số kích thước đặt phía trên đường kích thước; kí hiệu $\\varnothing$ cho đường kính và $R$ cho bán kính cong."
        ]
      },
      {
        "heading": "3. Quy trình Đọc và Lập bản vẽ kĩ thuật",
        "summary": "Các bước kĩ thuật chuẩn từ phân tích hình học đến hoàn thiện bản vẽ kĩ thuật.",
        "details": [
          "**Quy trình 5 bước Đọc bản vẽ:** (1) Đọc khung tên $\\to$ (2) Xác định vị trí các hình chiếu $\\to$ (3) Đọc kích thước tổng thể và kích thước bộ phận $\\to$ (4) Đọc yêu cầu kĩ thuật/vật liệu $\\to$ (5) Tổng hợp hình dung vật thể 3D trong không gian.",
          "**Quy trình 6 bước Lập bản vẽ chi tiết:**",
          "- Bước 1: Phân tích kết cấu vật thể thành các khối hình học cơ bản (hộp chữ nhật, lăng trụ, hình trụ, chóp cụt).",
          "- Bước 2: Chọn hướng chiếu chính (từ trước) thể hiện rõ nhất đặc trưng hình dáng để làm hình chiếu đứng.",
          "- Bước 3: Dựng các hình chiếu vuông góc (đứng, bằng, cạnh) bằng nét liền mảnh mờ.",
          "- Bước 4: Kiểm tra, tô đậm nét thấy, chuyển nét khuất thành nét đứt mảnh, kẻ đường tâm.",
          "- Bước 5: Ghi đầy đủ kích thước theo nguyên tắc không thừa không thiếu.",
          "- Bước 6: Kẻ khung bản vẽ, khung tên, điền thông tin và hoàn thiện."
        ]
      }
    ],
    "quizzes": [
      {
        "q": "Trong bản vẽ kĩ thuật, loại nét vẽ nào được dùng để biểu diễn đường bao khuất và cạnh khuất bên trong vật thể?",
        "options": [
          "Nét liền đậm",
          "Nét đứt mảnh",
          "Nét gạch dài chấm mảnh",
          "Nét lượn sóng"
        ],
        "answer": 1,
        "explanation": "Theo tiêu chuẩn vẽ kĩ thuật, nét đứt mảnh được quy ước biểu diễn đường bao khuất và cạnh khuất không nhìn thấy."
      },
      {
        "q": "Kích thước của khổ giấy A4 tiêu chuẩn theo TCVN là:",
        "options": [
          "297 × 210 mm",
          "420 × 297 mm",
          "594 × 420 mm",
          "210 × 148 mm"
        ],
        "answer": 0,
        "explanation": "Khổ giấy A4 chuẩn có kích thước chiều dài 297 mm và chiều rộng 210 mm."
      },
      {
        "q": "Khi ghi kích thước đường kính của một lỗ khoan tròn trên bản vẽ kĩ thuật, trước con số kích thước bắt buộc phải có kí hiệu nào?",
        "options": [
          "Kí hiệu R",
          "Kí hiệu Ø (hoặc ⌀)",
          "Kí hiệu d",
          "Kí hiệu cm"
        ],
        "answer": 1,
        "explanation": "Quy chuẩn ghi kích thước đường kính của hình tròn sử dụng kí hiệu $\\varnothing$ đặt trước con số kích thước (ví dụ: $\\varnothing 20$). Kí hiệu $R$ dùng cho bán kính cung cong."
      }
    ]
  }
];