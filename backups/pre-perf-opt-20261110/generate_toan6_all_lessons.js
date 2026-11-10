const lessonsFullData = [
  {
    "id": 1,
    "vol": 1,
    "chapter": "Chương I: Tập hợp các số tự nhiên",
    "chapterId": 1,
    "lessonNum": "Bài 1",
    "title": "Tập hợp",
    "desc": "Khái niệm tập hợp, phần tử thuộc (∈), không thuộc (∉), 2 cách mô tả tập hợp và biểu đồ Ven.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Khái niệm tập hợp và phần tử:</strong> Tập hợp là một khái niệm cơ bản của toán học, dùng để chỉ một nhóm các đối tượng (gọi là phần tử của tập hợp) có chung một hoặc một số tính chất.</p>\n        <div class=\"p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs\">\n          • Kí hiệu: Đặt tên tập hợp bằng chữ cái in hoa (\\(A, B, X, Y...\\)).<br>\n          • Phần tử \\(x\\) thuộc tập hợp \\(A\\): kí hiệu \\(x \\in A\\).<br>\n          • Phần tử \\(y\\) không thuộc tập hợp \\(A\\): kí hiệu \\(y \\notin A\\).\n        </div>\n        <p><strong>2. Hai cách mô tả một tập hợp:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li><strong>Liệt kê các phần tử:</strong> Viết các phần tử trong dấu ngoặc nhọn \\(\\{\\}\\), cách nhau bởi dấu chấm phẩy \\(;\\). Mỗi phần tử chỉ được viết một lần, thứ tự liệt kê tùy ý. Ví dụ: \\(A = \\{0; 1; 2; 3; 4\\}\\).</li>\n          <li><strong>Nêu dấu hiệu đặc trưng:</strong> Chỉ ra tính chất đặc trưng cho các phần tử của tập hợp đó. Ví dụ: \\(A = \\{x \\in \\mathbb{N} \\mid x < 5\\}\\).</li>\n        </ul>\n        <p><strong>3. Biểu đồ Ven:</strong> Biểu diễn tập hợp bằng một đường cong khép kín, mỗi phần tử là một điểm bên trong đường cong.</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 120\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <ellipse cx=\"250\" cy=\"60\" rx=\"180\" ry=\"50\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2.5\" stroke-dasharray=\"4,2\"/>\n        <text x=\"110\" y=\"35\" fill=\"#1d4ed8\" font-size=\"14\" font-weight=\"bold\">Tập hợp A</text>\n        <circle cx=\"170\" cy=\"60\" r=\"4\" fill=\"#1e293b\"/><text x=\"180\" y=\"64\" font-size=\"12\" font-weight=\"bold\">0</text>\n        <circle cx=\"230\" cy=\"50\" r=\"4\" fill=\"#1e293b\"/><text x=\"240\" y=\"54\" font-size=\"12\" font-weight=\"bold\">1</text>\n        <circle cx=\"270\" cy=\"75\" r=\"4\" fill=\"#1e293b\"/><text x=\"280\" y=\"79\" font-size=\"12\" font-weight=\"bold\">2</text>\n        <circle cx=\"330\" cy=\"55\" r=\"4\" fill=\"#1e293b\"/><text x=\"340\" y=\"59\" font-size=\"12\" font-weight=\"bold\">3</text>\n        <circle cx=\"450\" cy=\"60\" r=\"4\" fill=\"#dc2626\"/><text x=\"460\" y=\"64\" fill=\"#dc2626\" font-size=\"12\" font-weight=\"bold\">5 ∉ A</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Cho tập hợp B = {x ∈ ℕ | 2 < x ≤ 6}. Cách viết liệt kê phần tử nào sau đây đúng?",
      "options": [
        "(Recommended) B = {3; 4; 5; 6}",
        "B = {2; 3; 4; 5; 6}",
        "B = {3; 4; 5}",
        "B = {2; 3; 4; 5}"
      ],
      "ans": 0,
      "expl": "Vì x > 2 nên x bắt đầu từ 3, và x ≤ 6 nên nhận cả số 6. Vậy B = {3; 4; 5; 6}."
    }
  },
  {
    "id": 2,
    "vol": 1,
    "chapter": "Chương I: Tập hợp các số tự nhiên",
    "chapterId": 1,
    "lessonNum": "Bài 2",
    "title": "Cách ghi số tự nhiên",
    "desc": "Hệ thập phân, cấu tạo số tự nhiên và cách đọc viết số La Mã từ 1 đến 30.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Hệ thập phân:</strong> Sử dụng 10 chữ số từ 0 đến 9. Trong hệ thập phân, cứ mười đơn vị ở một hàng thì tạo thành một đơn vị ở hàng liền trước nó.</p>\n        <div class=\"p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs\">\n          • Viết số dưới dạng tổng giá trị các chữ số:<br>\n          \\(\\overline{ab} = a \\times 10 + b\\) (với \\(a \\ne 0\\))<br>\n          \\(\\overline{abc} = a \\times 100 + b \\times 10 + c\\) (với \\(a \\ne 0\\))\n        </div>\n        <p><strong>2. Số La Mã từ 1 đến 30:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Ba chữ số cơ bản: <strong>I</strong> = 1, <strong>V</strong> = 5, <strong>X</strong> = 10.</li>\n          <li>Quy tắc ghép: Thêm bên phải là cộng (VI = 6, VII = 7, VIII = 8); thêm bên trái là trừ (IV = 4, IX = 9).</li>\n          <li>Số 11 đến 20: XI = 11, XII = 12, XIV = 14, XV = 15, XIX = 19, XX = 20.</li>\n          <li>Số 21 đến 30: XXI = 21, XXIV = 24, XXVI = 26, XXIX = 29, XXX = 30.</li>\n        </ul>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 100\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"20\" width=\"460\" height=\"60\" rx=\"10\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"42\" fill=\"#92400e\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">SỐ LA MÃ CƠ BẢN VÀ GHÉP</text>\n        <text x=\"250\" y=\"65\" fill=\"#78350f\" font-size=\"12\" font-mono text-anchor=\"middle\">I=1 • V=5 • X=10 • IV=4 • IX=9 • XXIV=24 • XXIX=29</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Số La Mã XXVII có giá trị trong hệ thập phân là bao nhiêu?",
      "options": [
        "(Recommended) 27",
        "25",
        "28",
        "24"
      ],
      "ans": 0,
      "expl": "XXVII = 10 + 10 + 5 + 1 + 1 = 27."
    }
  },
  {
    "id": 3,
    "vol": 1,
    "chapter": "Chương I: Tập hợp các số tự nhiên",
    "chapterId": 1,
    "lessonNum": "Bài 3",
    "title": "Thứ tự trong tập hợp các số tự nhiên",
    "desc": "Tập hợp ℕ, ℕ*, biểu diễn trên tia số gốc O và quan hệ so sánh.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Tập hợp số tự nhiên:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Tập hợp tất cả các số tự nhiên: \\(\\mathbb{N} = \\{0; 1; 2; 3; 4; ...\\}\\).</li>\n          <li>Tập hợp các số tự nhiên khác 0: \\(\\mathbb{N}^* = \\{1; 2; 3; 4; ...\\}\\).</li>\n        </ul>\n        <p><strong>2. Thứ tự trên tia số:</strong> Trên tia số nằm ngang có gốc \\(O\\), điểm biểu diễn số nhỏ hơn nằm ở bên trái điểm biểu diễn số lớn hơn. Số 0 là số tự nhiên nhỏ nhất, không có số tự nhiên lớn nhất.</p>\n        <p><strong>3. Kí hiệu so sánh:</strong> Ta dùng \\(a < b\\) hoặc \\(b > a\\). Kí hiệu \\(a \\le b\\) nghĩa là \\(a < b\\) hoặc \\(a = b\\). Kí hiệu \\(a \\ge b\\) nghĩa là \\(a > b\\) hoặc \\(a = b\\).</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 90\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <line x1=\"40\" y1=\"45\" x2=\"460\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n        <polygon points=\"465,45 455,40 455,50\" fill=\"#2563eb\"/>\n        <circle cx=\"60\" cy=\"45\" r=\"4\" fill=\"#dc2626\"/><text x=\"60\" y=\"68\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\" text-anchor=\"middle\">0 (O)</text>\n        <circle cx=\"130\" cy=\"45\" r=\"3\" fill=\"#1e293b\"/><text x=\"130\" y=\"68\" font-size=\"11\" text-anchor=\"middle\">1</text>\n        <circle cx=\"200\" cy=\"45\" r=\"3\" fill=\"#1e293b\"/><text x=\"200\" y=\"68\" font-size=\"11\" text-anchor=\"middle\">2</text>\n        <circle cx=\"270\" cy=\"45\" r=\"3\" fill=\"#1e293b\"/><text x=\"270\" y=\"68\" font-size=\"11\" text-anchor=\"middle\">3</text>\n        <circle cx=\"340\" cy=\"45\" r=\"3\" fill=\"#1e293b\"/><text x=\"340\" y=\"68\" font-size=\"11\" text-anchor=\"middle\">4</text>\n        <text x=\"410\" y=\"49\" font-size=\"14\" fill=\"#64748b\" text-anchor=\"middle\">...</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Khẳng định nào sau đây là SAI?",
      "options": [
        "(Recommended) Số 0 thuộc tập hợp ℕ*",
        "Số 0 là số tự nhiên nhỏ nhất",
        "Tập hợp ℕ có vô số phần tử",
        "Nếu a < b thì điểm a nằm bên trái điểm b trên tia số"
      ],
      "ans": 0,
      "expl": "Tập hợp ℕ* = {1; 2; 3; ...} không chứa số 0, nên 0 ∉ ℕ*."
    }
  },
  {
    "id": 4,
    "vol": 1,
    "chapter": "Chương I: Tập hợp các số tự nhiên",
    "chapterId": 1,
    "lessonNum": "Bài 4",
    "title": "Phép cộng và phép trừ số tự nhiên",
    "desc": "Tính chất giao hoán, kết hợp của phép cộng và điều kiện thực hiện phép trừ.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Phép cộng số tự nhiên:</strong> \\(a + b = c\\) (\\(a, b\\) là số hạng, \\(c\\) là tổng).</p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li><strong>Giao hoán:</strong> \\(a + b = b + a\\).</li>\n          <li><strong>Kết hợp:</strong> \\((a + b) + c = a + (b + c)\\).</li>\n          <li><strong>Cộng với số 0:</strong> \\(a + 0 = 0 + a = a\\).</li>\n        </ul>\n        <p><strong>2. Phép trừ số tự nhiên:</strong> \\(a - b = c\\) (\\(a\\) là số bị trừ, \\(b\\) là số trừ, \\(c\\) là hiệu).</p>\n        <div class=\"p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 text-xs\">\n          <strong>Điều kiện thực hiện phép trừ:</strong> Trong tập hợp số tự nhiên \\(\\mathbb{N}\\), phép trừ \\(a - b\\) thực hiện được khi và chỉ khi \\(a \\ge b\\).\n        </div>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#1e40af\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Tính chất: a + b = b + a  •  (a + b) + c = a + (b + c)</text>\n        <text x=\"250\" y=\"54\" fill=\"#64748b\" font-size=\"11\" text-anchor=\"middle\">Phép trừ a - b chỉ thực hiện được khi a ≥ b</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Tính nhanh giá trị của 135 + 360 + 65 + 40:",
      "options": [
        "(Recommended) 600",
        "590",
        "610",
        "500"
      ],
      "ans": 0,
      "expl": "Nhóm hợp lý: (135 + 65) + (360 + 40) = 200 + 400 = 600."
    }
  },
  {
    "id": 5,
    "vol": 1,
    "chapter": "Chương I: Tập hợp các số tự nhiên",
    "chapterId": 1,
    "lessonNum": "Bài 5",
    "title": "Phép nhân và phép chia số tự nhiên",
    "desc": "Tính chất phân phối, phép nhân và phép chia có dư a = b·q + r.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Phép nhân số tự nhiên:</strong> \\(a \\cdot b = p\\) (\\(a, b\\) là thừa số, \\(p\\) là tích).</p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li><strong>Giao hoán:</strong> \\(a \\cdot b = b \\cdot a\\).</li>\n          <li><strong>Kết hợp:</strong> \\((a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)\\).</li>\n          <li><strong>Phân phối đối với phép cộng:</strong> \\(a \\cdot (b + c) = a \\cdot b + a \\cdot c\\).</li>\n        </ul>\n        <p><strong>2. Phép chia hết và phép chia có dư:</strong></p>\n        <div class=\"p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs\">\n          Cho hai số tự nhiên \\(a\\) và \\(b\\) (\\(b \\ne 0\\)). Luôn tìm được duy nhất cặp số tự nhiên \\(q\\) (thương) và \\(r\\) (số dư) sao cho:<br>\n          <div class=\"font-mono font-bold text-center my-1 text-sm text-emerald-800 dark:text-emerald-300\">\\(a = b \\cdot q + r\\) với \\(0 \\le r < b\\)</div>\n          • Nếu \\(r = 0\\): là phép chia hết (\\(a : b = q\\)).<br>\n          • Nếu \\(r > 0\\): là phép chia có dư (số dư luôn nhỏ hơn số chia).\n        </div>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#15803d\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Phép chia có dư: a = b · q + r  (0 ≤ r &lt; b)</text>\n        <text x=\"250\" y=\"54\" fill=\"#166534\" font-size=\"11\" text-anchor=\"middle\">Số dư r luôn nhỏ hơn số chia b</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Trong phép chia một số tự nhiên cho 6, số dư lớn nhất có thể nhận là:",
      "options": [
        "(Recommended) 5",
        "6",
        "4",
        "0"
      ],
      "ans": 0,
      "expl": "Vì số dư r phải thỏa mãn 0 ≤ r < b, nên khi chia cho 6, số dư lớn nhất là 5."
    }
  },
  {
    "id": 6,
    "vol": 1,
    "chapter": "Chương I: Tập hợp các số tự nhiên",
    "chapterId": 1,
    "lessonNum": "Bài 6",
    "title": "Luỹ thừa với số mũ tự nhiên",
    "desc": "Định nghĩa lũy thừa, nhân và chia hai lũy thừa cùng cơ số.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Định nghĩa luỹ thừa:</strong> Luỹ thừa bậc \\(n\\) của \\(a\\) là tích của \\(n\\) thừa số bằng nhau, mỗi thừa số bằng \\(a\\):\n          \\[a^n = \\underbrace{a \\cdot a \\cdot ... \\cdot a}_{n \\text{ thừa số } a} \\quad (n \\in \\mathbb{N}^*)\\]\n          Trong đó: \\(a\\) là cơ số, \\(n\\) là số mũ. Quy ước: \\(a^1 = a\\); \\(a^0 = 1\\) (với \\(a \\ne 0\\)).\n        </p>\n        <p><strong>2. Nhân hai luỹ thừa cùng cơ số:</strong> Giữ nguyên cơ số, cộng các số mũ:\n          \\[a^m \\cdot a^n = a^{m+n}\\]\n        </p>\n        <p><strong>3. Chia hai luỹ thừa cùng cơ số:</strong> Giữ nguyên cơ số, trừ các số mũ:\n          \\[a^m : a^n = a^{m-n} \\quad (a \\ne 0, m \\ge n)\\]\n        </p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#ede9fe\" stroke=\"#7c3aed\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#5b21b6\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Nhân: aᵐ · aⁿ = aᵐ⁺ⁿ   •   Chia: aᵐ : aⁿ = aᵐ⁻ⁿ (a ≠ 0)</text>\n        <text x=\"250\" y=\"54\" fill=\"#6d28d9\" font-size=\"11\" text-anchor=\"middle\">Quy ước: a¹ = a  và  a⁰ = 1 (với a ≠ 0)</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Thu gọn tích 3⁴ · 3³ về một lũy thừa ta được:",
      "options": [
        "(Recommended) 3⁷",
        "3¹²",
        "9⁷",
        "9¹²"
      ],
      "ans": 0,
      "expl": "3⁴ · 3³ = 3^(4+3) = 3⁷."
    }
  },
  {
    "id": 7,
    "vol": 1,
    "chapter": "Chương I: Tập hợp các số tự nhiên",
    "chapterId": 1,
    "lessonNum": "Bài 7",
    "title": "Thứ tự thực hiện các phép tính",
    "desc": "Quy tắc ưu tiên phép tính không ngoặc và có ngoặc ( ) → [ ] → { }.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Biểu thức không có dấu ngoặc:</strong></p>\n        <div class=\"p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs\">\n          • Nếu chỉ có phép cộng, trừ (hoặc nhân, chia): thực hiện từ <strong>trái sang phải</strong>.<br>\n          • Nếu có cả cộng, trừ, nhân, chia, lũy thừa: thực hiện theo thứ tự:<br>\n          <div class=\"text-center font-bold text-sm text-blue-700 dark:text-blue-300 my-1\">\n            Luỹ thừa \\(\\rightarrow\\) Nhân và chia \\(\\rightarrow\\) Cộng và trừ\n          </div>\n        </div>\n        <p><strong>2. Biểu thức có dấu ngoặc:</strong></p>\n        <div class=\"p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-center font-bold\">\n          Thực hiện trong ngoặc tròn \\(( )\\) \\(\\rightarrow\\) ngoặc vuông \\([ ]\\) \\(\\rightarrow\\) ngoặc nhọn \\(\\{ \\}\\)\n        </div>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#0f172a\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Không ngoặc: Luỹ thừa → Nhân, chia → Cộng, trừ</text>\n        <text x=\"250\" y=\"54\" fill=\"#2563eb\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Có ngoặc: ( )  →  [ ]  →  { }</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Giá trị của biểu thức 100 - [60 - (9 - 2)²] là:",
      "options": [
        "(Recommended) 89",
        "51",
        "79",
        "99"
      ],
      "ans": 0,
      "expl": "(9 - 2)² = 7² = 49. Trong ngoặc vuông: 60 - 49 = 11. Cuối cùng: 100 - 11 = 89."
    }
  },
  {
    "id": 8,
    "vol": 1,
    "chapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    "chapterId": 2,
    "lessonNum": "Bài 8",
    "title": "Quan hệ chia hết và tính chất",
    "desc": "Khái niệm ước và bội, tính chất chia hết của một tổng và hiệu.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Khái niệm ước và bội:</strong> Cho \\(a, b \\in \\mathbb{N}, b \\ne 0\\). Nếu có số tự nhiên \\(q\\) sao cho \\(a = b \\cdot q\\) thì \\(a\\) chia hết cho \\(b\\) (\\(a \\ \\vdots \\ b\\)). Khi đó \\(a\\) là bội của \\(b\\), \\(b\\) là ước của \\(a\\).</p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Tập hợp các ước của \\(a\\) kí hiệu là \\(\\text{Ư}(a)\\).</li>\n          <li>Tập hợp các bội của \\(b\\) kí hiệu là \\(\\text{B}(b)\\).</li>\n        </ul>\n        <p><strong>2. Tính chất chia hết của một tổng:</strong></p>\n        <div class=\"p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs\">\n          • Nếu \\(a \\ \\vdots \\ m\\) và \\(b \\ \\vdots \\ m\\) thì \\((a + b) \\ \\vdots \\ m\\) và \\((a - b) \\ \\vdots \\ m\\) (với \\(a \\ge b\\)).<br>\n          • Nếu \\(a \\ \\vdots \\ m\\) và \\(b \\ \\not\\vdots \\ m\\) thì \\((a + b) \\ \\not\\vdots \\ m\\) và \\((a - b) \\ \\not\\vdots \\ m\\).\n        </div>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#1e40af\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">a ⋮ m và b ⋮ m  ⇒  (a ± b) ⋮ m</text>\n        <text x=\"250\" y=\"54\" fill=\"#dc2626\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">a ⋮ m và b ⋮̸ m  ⇒  (a ± b) ⋮̸ m</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Tổng nào sau đây KHÔNG chia hết cho 5?",
      "options": [
        "(Recommended) 15 + 25 + 33",
        "20 + 35 + 40",
        "50 + 105",
        "10 + 20 + 30 + 50"
      ],
      "ans": 0,
      "expl": "Trong tổng 15 + 25 + 33, có 15 ⋮ 5, 25 ⋮ 5 nhưng 33 không chia hết cho 5, nên cả tổng không chia hết cho 5."
    }
  },
  {
    "id": 9,
    "vol": 1,
    "chapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    "chapterId": 2,
    "lessonNum": "Bài 9",
    "title": "Dấu hiệu chia hết",
    "desc": "Dấu hiệu chia hết cho 2, 5 (chữ số tận cùng) và cho 3, 9 (tổng chữ số).",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Dấu hiệu chia hết cho 2 và cho 5:</strong> Dựa vào chữ số tận cùng của số đó.</p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li><strong>Cho 2:</strong> Chữ số tận cùng là 0, 2, 4, 6, 8 (số chẵn).</li>\n          <li><strong>Cho 5:</strong> Chữ số tận cùng là 0 hoặc 5.</li>\n          <li><strong>Cho cả 2 và 5:</strong> Chữ số tận cùng là 0.</li>\n        </ul>\n        <p><strong>2. Dấu hiệu chia hết cho 3 và cho 9:</strong> Dựa vào tổng các chữ số của số đó.</p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li><strong>Cho 9:</strong> Tổng các chữ số chia hết cho 9.</li>\n          <li><strong>Cho 3:</strong> Tổng các chữ số chia hết cho 3.</li>\n        </ul>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"220\" height=\"50\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/>\n        <text x=\"130\" y=\"36\" fill=\"#1e40af\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Cho 2 và 5</text>\n        <text x=\"130\" y=\"52\" fill=\"#1e3a8a\" font-size=\"10\" text-anchor=\"middle\">Xét chữ số tận cùng</text>\n\n        <rect x=\"260\" y=\"15\" width=\"220\" height=\"50\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\n        <text x=\"370\" y=\"36\" fill=\"#b45309\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Cho 3 và 9</text>\n        <text x=\"370\" y=\"52\" fill=\"#78350f\" font-size=\"10\" text-anchor=\"middle\">Xét tổng các chữ số</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Số 3*5 chia hết cho 9 khi chữ số * là:",
      "options": [
        "(Recommended) 1",
        "0",
        "4",
        "9"
      ],
      "ans": 0,
      "expl": "Tổng các chữ số: 3 + * + 5 = 8 + *. Để chia hết cho 9 thì 8 + * = 9 ⇒ * = 1."
    }
  },
  {
    "id": 10,
    "vol": 1,
    "chapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    "chapterId": 2,
    "lessonNum": "Bài 10",
    "title": "Số nguyên tố",
    "desc": "Khái niệm số nguyên tố, hợp số và phân tích một số ra thừa số nguyên tố.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Số nguyên tố và hợp số:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li><strong>Số nguyên tố:</strong> Là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó. Ví dụ: 2, 3, 5, 7, 11, 13, 17, 19... (Số 2 là số nguyên tố chẵn duy nhất).</li>\n          <li><strong>Hợp số:</strong> Là số tự nhiên lớn hơn 1, có nhiều hơn hai ước. Ví dụ: 4, 6, 8, 9, 10, 12...</li>\n          <li><em>Lưu ý:</em> Số 0 và số 1 không là số nguyên tố, cũng không là hợp số.</li>\n        </ul>\n        <p><strong>2. Phân tích một số ra thừa số nguyên tố:</strong> Viết số đó dưới dạng tích của các số nguyên tố (sử dụng sơ đồ cột dọc hoặc sơ đồ cây).</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#fdf2f8\" stroke=\"#db2777\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#9d174d\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Số nguyên tố: Chỉ có 2 ước (1 và chính nó) • Hợp số: Nhiều hơn 2 ước</text>\n        <text x=\"250\" y=\"54\" fill=\"#be185d\" font-size=\"11\" text-anchor=\"middle\">Số 0 và số 1 không là số nguyên tố, không là hợp số</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Phân tích số 60 ra thừa số nguyên tố ta được kết quả là:",
      "options": [
        "(Recommended) 2² · 3 · 5",
        "4 · 3 · 5",
        "2 · 30",
        "2 · 3 · 10"
      ],
      "ans": 0,
      "expl": "60 = 4 · 15 = 2² · 3 · 5 (các thừa số đều là số nguyên tố)."
    }
  },
  {
    "id": 11,
    "vol": 1,
    "chapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    "chapterId": 2,
    "lessonNum": "Bài 11",
    "title": "Ước chung. Ước chung lớn nhất",
    "desc": "Tìm ƯC, ƯCLN bằng cách phân tích ra TSNT và phân số tối giản.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Ước chung và ƯCLN:</strong> Số lớn nhất trong tập hợp các ước chung của \\(a\\) và \\(b\\) gọi là ước chung lớn nhất, kí hiệu là \\(\\text{ƯCLN}(a, b)\\).</p>\n        <p><strong>2. Quy tắc tìm ƯCLN bằng phân tích ra thừa số nguyên tố:</strong></p>\n        <ol class=\"list-decimal pl-5 space-y-1 text-xs\">\n          <li>Phân tích mỗi số ra thừa số nguyên tố.</li>\n          <li>Chọn ra các thừa số nguyên tố <strong>chung</strong>.</li>\n          <li>Lập tích các thừa số đã chọn, mỗi thừa số lấy với <strong>số mũ nhỏ nhất</strong>.</li>\n        </ol>\n        <p><strong>3. Phân số tối giản:</strong> Phân số \\(\\frac{a}{b}\\) là tối giản nếu \\(\\text{ƯCLN}(|a|, |b|) = 1\\). Muốn rút gọn phân số, ta chia cả tử và mẫu cho ƯCLN của chúng.</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#1e40af\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Tìm ƯCLN: Thừa số nguyên tố CHUNG với số mũ NHỎ NHẤT</text>\n        <text x=\"250\" y=\"54\" fill=\"#64748b\" font-size=\"11\" text-anchor=\"middle\">Hai số có ƯCLN = 1 gọi là hai số nguyên tố cùng nhau</text>\n      </svg>\n    ",
    "quiz": {
      "q": "ƯCLN(24, 36) có giá trị là:",
      "options": [
        "(Recommended) 12",
        "6",
        "18",
        "72"
      ],
      "ans": 0,
      "expl": "24 = 2³ · 3 và 36 = 2² · 3². Thừa số chung là 2 và 3. Lấy số mũ nhỏ nhất: 2² · 3 = 12."
    }
  },
  {
    "id": 12,
    "vol": 1,
    "chapter": "Chương II: Tính chia hết trong tập hợp các số tự nhiên",
    "chapterId": 2,
    "lessonNum": "Bài 12",
    "title": "Bội chung. Bội chung nhỏ nhất",
    "desc": "Tìm BC, BCNN bằng cách phân tích ra TSNT và ứng dụng quy đồng mẫu.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Bội chung và BCNN:</strong> Bội chung nhỏ nhất của \\(a\\) và \\(b\\) là số nhỏ nhất khác 0 trong tập hợp các bội chung, kí hiệu \\(\\text{BCNN}(a, b)\\).</p>\n        <p><strong>2. Quy tắc tìm BCNN bằng phân tích ra thừa số nguyên tố:</strong></p>\n        <ol class=\"list-decimal pl-5 space-y-1 text-xs\">\n          <li>Phân tích mỗi số ra thừa số nguyên tố.</li>\n          <li>Chọn ra các thừa số nguyên tố <strong>chung và riêng</strong>.</li>\n          <li>Lập tích các thừa số đã chọn, mỗi thừa số lấy với <strong>số mũ lớn nhất</strong>.</li>\n        </ol>\n        <p><strong>3. Ứng dụng:</strong> Tìm BCNN của các mẫu số để làm mẫu số chung khi quy đồng các phân số.</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#b45309\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Tìm BCNN: Thừa số CHUNG và RIÊNG với số mũ LỚN NHẤT</text>\n        <text x=\"250\" y=\"54\" fill=\"#78350f\" font-size=\"11\" text-anchor=\"middle\">BCNN được dùng làm Mẫu số chung khi quy đồng phân số</text>\n      </svg>\n    ",
    "quiz": {
      "q": "BCNN của 15 và 20 là:",
      "options": [
        "(Recommended) 60",
        "300",
        "5",
        "40"
      ],
      "ans": 0,
      "expl": "15 = 3 · 5 và 20 = 2² · 5. BCNN = 2² · 3 · 5 = 60."
    }
  },
  {
    "id": 13,
    "vol": 1,
    "chapter": "Chương III: Số nguyên",
    "chapterId": 3,
    "lessonNum": "Bài 13",
    "title": "Tập hợp các số nguyên",
    "desc": "Tập hợp ℤ, biểu diễn trên trục số, số đối và so sánh số nguyên.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Tập hợp số nguyên \\(\\mathbb{Z}\\):</strong> Bao gồm các số nguyên âm, số 0 và các số nguyên dương:\n          \\[\\mathbb{Z} = \\{...; -3; -2; -1; 0; 1; 2; 3; ...\\}\\]\n        </p>\n        <p><strong>2. Trục số nguyên:</strong> Trục nằm ngang có gốc 0, chiều dương từ trái sang phải. Bên trái 0 là số nguyên âm, bên phải 0 là số nguyên dương.</p>\n        <p><strong>3. Số đối:</strong> Hai số nguyên trên trục số cách đều gốc 0 là hai số đối nhau. Số đối của \\(a\\) là \\(-a\\). Số đối của 0 là 0.</p>\n        <p><strong>4. So sánh số nguyên:</strong> Mọi số âm đều nhỏ hơn 0 và nhỏ hơn mọi số dương. Giữa hai số nguyên âm, số nào có phần tự nhiên lớn hơn thì số đó nhỏ hơn.</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <line x1=\"30\" y1=\"40\" x2=\"470\" y2=\"40\" stroke=\"#0284c7\" stroke-width=\"2.5\"/>\n        <polygon points=\"475,40 465,35 465,45\" fill=\"#0284c7\"/>\n        <circle cx=\"250\" cy=\"40\" r=\"4\" fill=\"#f59e0b\"/><text x=\"250\" y=\"60\" font-weight=\"bold\" font-size=\"11\" text-anchor=\"middle\">0</text>\n        <circle cx=\"170\" cy=\"40\" r=\"3\" fill=\"#dc2626\"/><text x=\"170\" y=\"60\" fill=\"#dc2626\" font-size=\"10\" text-anchor=\"middle\">-1</text>\n        <circle cx=\"90\" cy=\"40\" r=\"3\" fill=\"#dc2626\"/><text x=\"90\" y=\"60\" fill=\"#dc2626\" font-size=\"10\" text-anchor=\"middle\">-2</text>\n        <circle cx=\"330\" cy=\"40\" r=\"3\" fill=\"#16a34a\"/><text x=\"330\" y=\"60\" fill=\"#16a34a\" font-size=\"10\" text-anchor=\"middle\">+1</text>\n        <circle cx=\"410\" cy=\"40\" r=\"3\" fill=\"#16a34a\"/><text x=\"410\" y=\"60\" fill=\"#16a34a\" font-size=\"10\" text-anchor=\"middle\">+2</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Sắp xếp các số nguyên sau theo thứ tự tăng dần: -7; 0; -12; 5; 3",
      "options": [
        "(Recommended) -12 < -7 < 0 < 3 < 5",
        "-7 < -12 < 0 < 3 < 5",
        "5 > 3 > 0 > -7 > -12",
        "-12 < -7 < 5 < 3 < 0"
      ],
      "ans": 0,
      "expl": "Số âm nhỏ hơn: -12 < -7 < 0 < 3 < 5."
    }
  },
  {
    "id": 14,
    "vol": 1,
    "chapter": "Chương III: Số nguyên",
    "chapterId": 3,
    "lessonNum": "Bài 14",
    "title": "Phép cộng và phép trừ số nguyên",
    "desc": "Cộng hai số cùng dấu, khác dấu và quy tắc trừ số nguyên a - b = a + (-b).",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Cộng hai số nguyên cùng dấu:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Cùng dương: Cộng như hai số tự nhiên.</li>\n          <li>Cùng âm: Cộng hai phần tự nhiên rồi đặt dấu \"-\" đằng trước kết quả: \\((-a) + (-b) = -(a + b)\\).</li>\n        </ul>\n        <p><strong>2. Cộng hai số nguyên khác dấu:</strong> Lấy phần tự nhiên lớn hơn trừ phần tự nhiên nhỏ hơn rồi đặt dấu của số có phần tự nhiên lớn hơn đằng trước kết quả. Hai số đối có tổng bằng 0: \\(a + (-a) = 0\\).</p>\n        <p><strong>3. Phép trừ số nguyên:</strong> Muốn trừ số nguyên \\(a\\) cho số nguyên \\(b\\), ta cộng \\(a\\) với số đối của \\(b\\):\n          \\[a - b = a + (-b)\\]\n        </p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#b91c1c\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Phép trừ số nguyên: a - b = a + (-b)</text>\n        <text x=\"250\" y=\"54\" fill=\"#991b1b\" font-size=\"11\" text-anchor=\"middle\">Tổng hai số đối nhau luôn bằng 0: a + (-a) = 0</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Kết quả của phép tính (-18) + (-12) - (-10) là:",
      "options": [
        "(Recommended) -20",
        "-40",
        "20",
        "-16"
      ],
      "ans": 0,
      "expl": "(-18) + (-12) = -30. Sau đó -30 - (-10) = -30 + 10 = -20."
    }
  },
  {
    "id": 15,
    "vol": 1,
    "chapter": "Chương III: Số nguyên",
    "chapterId": 3,
    "lessonNum": "Bài 15",
    "title": "Quy tắc dấu ngoặc",
    "desc": "Quy tắc phá ngoặc có dấu '+' hoặc '-' đằng trước trong biểu thức số nguyên.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>Quy tắc bỏ dấu ngoặc:</strong></p>\n        <div class=\"p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs space-y-1\">\n          <div>• Khi bỏ dấu ngoặc có dấu <strong>\"+\"</strong> đằng trước: <em>Giữ nguyên dấu</em> của các số hạng trong ngoặc:<br>\n          \\(+(a - b + c) = a - b + c\\)</div>\n          <div>• Khi bỏ dấu ngoặc có dấu <strong>\"-\"</strong> đằng trước: <em>Đổi dấu tất cả</em> các số hạng trong ngoặc (dấu \"+\" đổi thành \"-\", dấu \"-\" đổi thành \"+\"):<br>\n          \\(-(a - b + c) = -a + b - c\\)</div>\n        </div>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#1e40af\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Trước có dấu \"+\": GIỮ NGUYÊN DẤU</text>\n        <text x=\"250\" y=\"54\" fill=\"#dc2626\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Trước có dấu \"-\": ĐỔI TẤT CẢ CÁC DẤU (+ ↔ -)</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Bỏ dấu ngoặc trong biểu thức -(a - b + c) ta được:",
      "options": [
        "(Recommended) -a + b - c",
        "-a - b + c",
        "-a - b - c",
        "a - b + c"
      ],
      "ans": 0,
      "expl": "Trước ngoặc có dấu '-', đổi dấu: a thành -a, -b thành +b, +c thành -c."
    }
  },
  {
    "id": 16,
    "vol": 1,
    "chapter": "Chương III: Số nguyên",
    "chapterId": 3,
    "lessonNum": "Bài 16",
    "title": "Phép nhân số nguyên",
    "desc": "Quy tắc dấu khi nhân hai số nguyên cùng dấu và khác dấu.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>Quy tắc nhân hai số nguyên:</strong></p>\n        <div class=\"p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs\">\n          • <strong>Nhân hai số cùng dấu:</strong> Tích luôn là một số nguyên dương.<br>\n          \\((+) \\cdot (+) = (+)\\)  và  \\((-) \\cdot (-) = (+)\\)<br>\n          • <strong>Nhân hai số khác dấu:</strong> Tích luôn là một số nguyên âm.<br>\n          \\((+) \\cdot (-) = (-)\\)  và  \\((-) \\cdot (+) = (-)\\)\n        </div>\n        <p><strong>Tính chất:</strong> Giao hoán, kết hợp và phân phối đối với phép cộng/trừ tương tự số tự nhiên.</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"220\" height=\"50\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/>\n        <text x=\"130\" y=\"36\" fill=\"#15803d\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">CÙNG DẤU → DƯƠNG (+)</text>\n        <text x=\"130\" y=\"52\" fill=\"#14532d\" font-size=\"10\" text-anchor=\"middle\">(+) · (+) = (+) • (-) · (-) = (+)</text>\n\n        <rect x=\"260\" y=\"15\" width=\"220\" height=\"50\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.5\"/>\n        <text x=\"370\" y=\"36\" fill=\"#b91c1c\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">KHÁC DẤU → ÂM (-)</text>\n        <text x=\"370\" y=\"52\" fill=\"#7f1d1d\" font-size=\"10\" text-anchor=\"middle\">(+) · (-) = (-) • (-) · (+) = (-)</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Tích của (-8) · (-5) bằng:",
      "options": [
        "(Recommended) 40",
        "-40",
        "-13",
        "13"
      ],
      "ans": 0,
      "expl": "Nhân hai số nguyên cùng dấu âm cho kết quả dương: (-8) · (-5) = +40."
    }
  },
  {
    "id": 17,
    "vol": 1,
    "chapter": "Chương III: Số nguyên",
    "chapterId": 3,
    "lessonNum": "Bài 17",
    "title": "Phép chia hết. Ước và bội của một số nguyên",
    "desc": "Khái niệm ước và bội trong tập hợp ℤ, tính chất và các dạng toán chia hết.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Phép chia hết trong \\(\\mathbb{Z}\\):</strong> Cho \\(a, b \\in \\mathbb{Z}, b \\ne 0\\). Nếu có \\(q \\in \\mathbb{Z}\\) sao cho \\(a = b \\cdot q\\) thì ta nói \\(a\\) chia hết cho \\(b\\). Khi đó \\(a\\) là bội của \\(b\\), \\(b\\) là ước của \\(a\\).</p>\n        <p><strong>2. Chú ý quan trọng:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Nếu \\(a\\) là bội của \\(b\\) thì \\(-a\\) cũng là bội của \\(b\\).</li>\n          <li>Nếu \\(b\\) là ước của \\(a\\) thì \\(-b\\) cũng là ước của \\(a\\).</li>\n          <li>Số 0 là bội của mọi số nguyên khác 0, nhưng không là ước của bất kì số nguyên nào.</li>\n          <li>Các số 1 và -1 là ước của mọi số nguyên.</li>\n        </ul>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#0f172a\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">a ⋮ b khi a = b · q (q ∈ ℤ)</text>\n        <text x=\"250\" y=\"54\" fill=\"#2563eb\" font-size=\"11\" text-anchor=\"middle\">Nếu b là ước của a thì -b cũng là ước của a</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Tập hợp tất cả các ước nguyên của số 4 là:",
      "options": [
        "(Recommended) {-4; -2; -1; 1; 2; 4}",
        "{1; 2; 4}",
        "{-4; -2; -1; 0; 1; 2; 4}",
        "{-2; -1; 1; 2}"
      ],
      "ans": 0,
      "expl": "Ước nguyên của 4 gồm cả số âm và số dương: ±1, ±2, ±4."
    }
  },
  {
    "id": 18,
    "vol": 1,
    "chapter": "Chương IV: Một số hình phẳng trong thực tiễn",
    "chapterId": 4,
    "lessonNum": "Bài 18",
    "title": "Hình tam giác đều. Hình vuông. Hình lục giác đều",
    "desc": "Đặc điểm cạnh, góc và đường chéo của 3 hình đa giác đều cơ bản.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Tam giác đều:</strong> Có 3 cạnh bằng nhau, 3 góc bằng nhau và mỗi góc bằng \\(60^\\circ\\).</p>\n        <p><strong>2. Hình vuông:</strong> Có 4 cạnh bằng nhau, 4 góc vuông (\\(90^\\circ\\)), 2 đường chéo bằng nhau và vuông góc với nhau tại trung điểm.</p>\n        <p><strong>3. Hình lục giác đều:</strong> Có 6 cạnh bằng nhau, 6 góc bằng nhau và mỗi góc bằng \\(120^\\circ\\), 3 đường chéo chính bằng nhau và cắt nhau tại trung điểm của mỗi đường.</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 100\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"60,20 20,80 100,80\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n        <text x=\"60\" y=\"95\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Tam giác đều</text>\n        <rect x=\"180\" y=\"25\" width=\"55\" height=\"55\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/>\n        <text x=\"207\" y=\"95\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Hình vuông</text>\n        <polygon points=\"360,20 395,40 395,75 360,95 325,75 325,40\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/>\n        <text x=\"360\" y=\"105\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Lục giác đều</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Mỗi góc của hình lục giác đều có số đo bằng bao nhiêu?",
      "options": [
        "(Recommended) 120°",
        "60°",
        "90°",
        "108°"
      ],
      "ans": 0,
      "expl": "Trong lục giác đều, 6 góc đều bằng nhau và mỗi góc có số đo là 120°."
    }
  },
  {
    "id": 19,
    "vol": 1,
    "chapter": "Chương IV: Một số hình phẳng trong thực tiễn",
    "chapterId": 4,
    "lessonNum": "Bài 19",
    "title": "Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân",
    "desc": "Đặc điểm hình học của các tứ giác đặc biệt trong thực tiễn.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Hình chữ nhật:</strong> Có 4 góc vuông, các cạnh đối song song và bằng nhau, 2 đường chéo bằng nhau và cắt nhau tại trung điểm.</p>\n        <p><strong>2. Hình thoi:</strong> Có 4 cạnh bằng nhau, các cạnh đối song song, 2 đường chéo vuông góc với nhau tại trung điểm của mỗi đường.</p>\n        <p><strong>3. Hình bình hành:</strong> Các cạnh đối song song và bằng nhau, các góc đối bằng nhau, 2 đường chéo cắt nhau tại trung điểm của mỗi đường.</p>\n        <p><strong>4. Hình thang cân:</strong> Có hai cạnh đáy song song, hai cạnh bên bằng nhau, hai góc kề một đáy bằng nhau, hai đường chéo bằng nhau.</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 100\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"30\" width=\"70\" height=\"45\" fill=\"#f3e8ff\" stroke=\"#9333ea\" stroke-width=\"2\"/>\n        <text x=\"55\" y=\"90\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">H. chữ nhật</text>\n        <polygon points=\"175,20 205,52 175,84 145,52\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n        <text x=\"175\" y=\"95\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Hình thoi</text>\n        <polygon points=\"275,30 335,30 315,75 255,75\" fill=\"#e0e7ff\" stroke=\"#4f46e5\" stroke-width=\"2\"/>\n        <text x=\"295\" y=\"90\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">H. bình hành</text>\n        <polygon points=\"400,30 450,30 465,75 385,75\" fill=\"#ccfbf1\" stroke=\"#0d9488\" stroke-width=\"2\"/>\n        <text x=\"425\" y=\"90\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">H. thang cân</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Hình tứ giác nào sau đây có hai đường chéo vuông góc với nhau?",
      "options": [
        "(Recommended) Hình thoi",
        "Hình chữ nhật",
        "Hình bình hành",
        "Hình thang cân"
      ],
      "ans": 0,
      "expl": "Hình thoi có đặc điểm hai đường chéo vuông góc với nhau tại trung điểm của mỗi đường."
    }
  },
  {
    "id": 20,
    "vol": 1,
    "chapter": "Chương IV: Một số hình phẳng trong thực tiễn",
    "chapterId": 4,
    "lessonNum": "Bài 20",
    "title": "Chu vi và diện tích của một số tứ giác đã học",
    "desc": "Công thức tính chu vi và diện tích: hình chữ nhật, hình vuông, hình thang, hình bình hành, hình thoi.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>Bảng công thức tính Diện tích \\((S)\\) và Chu vi \\((C)\\):</strong></p>\n        <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs\">\n          <div class=\"p-2.5 bg-blue-50 dark:bg-blue-950/40 rounded-lg border border-blue-200\">\n            <strong>Hình chữ nhật:</strong> \\(C = 2(a + b)\\); \\(S = a \\cdot b\\)\n          </div>\n          <div class=\"p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg border border-emerald-200\">\n            <strong>Hình vuông:</strong> \\(C = 4a\\); \\(S = a^2\\)\n          </div>\n          <div class=\"p-2.5 bg-amber-50 dark:bg-amber-950/40 rounded-lg border border-amber-200\">\n            <strong>Hình bình hành:</strong> \\(C = 2(a + b)\\); \\(S = a \\cdot h\\)\n          </div>\n          <div class=\"p-2.5 bg-rose-50 dark:bg-rose-950/40 rounded-lg border border-rose-200\">\n            <strong>Hình thoi:</strong> \\(C = 4m\\); \\(S = \\frac{1}{2} a \\cdot b\\) (tích 2 đường chéo)\n          </div>\n          <div class=\"p-2.5 bg-purple-50 dark:bg-purple-950/40 rounded-lg border border-purple-200 sm:col-span-2\">\n            <strong>Hình thang:</strong> \\(S = \\frac{1}{2}(a + b) \\cdot h\\) (nửa tích tổng hai đáy với chiều cao)\n          </div>\n        </div>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#1e40af\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Hình thoi: S = ½(d₁ · d₂)  •  Hình thang: S = ½(a + b) · h</text>\n        <text x=\"250\" y=\"54\" fill=\"#2563eb\" font-size=\"11\" text-anchor=\"middle\">H. bình hành: S = a · h  •  H. chữ nhật: S = a · b</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Một mảnh đất hình bình hành có độ dài đáy 15 m và chiều cao tương ứng 8 m. Diện tích mảnh đất là:",
      "options": [
        "(Recommended) 120 m²",
        "60 m²",
        "46 m²",
        "23 m²"
      ],
      "ans": 0,
      "expl": "Diện tích hình bình hành = đáy · chiều cao = 15 · 8 = 120 m²."
    }
  },
  {
    "id": 21,
    "vol": 1,
    "chapter": "Chương V: Tính đối xứng của hình phẳng trong tự nhiên",
    "chapterId": 5,
    "lessonNum": "Bài 21",
    "title": "Hình có trục đối xứng",
    "desc": "Đường thẳng d gấp chồng khít hai phần và các hình có trục đối xứng thực tế.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Khái niệm:</strong> Đường thẳng \\(d\\) được gọi là <em>trục đối xứng</em> của một hình nếu khi gấp hình đó theo đường thẳng \\(d\\), hai phần của hình chồng khít lên nhau.</p>\n        <p><strong>2. Trục đối xứng của các hình quen thuộc:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Đoạn thẳng: có 1 trục đối xứng (đường trung trực).</li>\n          <li>Tam giác cân: có 1 trục đối xứng; Tam giác đều: có 3 trục đối xứng.</li>\n          <li>Hình chữ nhật: có 2 trục đối xứng (hai đường trung trực cạnh đối).</li>\n          <li>Hình thoi: có 2 trục đối xứng (hai đường chéo).</li>\n          <li>Hình vuông: có 4 trục đối xứng (2 đường chéo và 2 đường trung trực).</li>\n          <li>Hình tròn: có vô số trục đối xứng (mọi đường thẳng đi qua tâm).</li>\n        </ul>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"210,15 290,15 320,65 180,65\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n        <line x1=\"250\" y1=\"5\" x2=\"250\" y2=\"75\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4,3\"/>\n        <text x=\"250\" y=\"42\" fill=\"#b91c1c\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Trục d</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Hình chữ nhật có bao nhiêu trục đối xứng?",
      "options": [
        "(Recommended) 2",
        "4",
        "1",
        "Vô số"
      ],
      "ans": 0,
      "expl": "Hình chữ nhật có 2 trục đối xứng là hai đường trung trực của các cặp cạnh đối diện (đường chéo của hình chữ nhật không phải là trục đối xứng)."
    }
  },
  {
    "id": 22,
    "vol": 1,
    "chapter": "Chương V: Tính đối xứng của hình phẳng trong tự nhiên",
    "chapterId": 5,
    "lessonNum": "Bài 22",
    "title": "Hình có tâm đối xứng",
    "desc": "Điểm O quay nửa vòng 180° trùng khớp và các hình có tâm đối xứng.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Khái niệm:</strong> Điểm \\(O\\) được gọi là <em>tâm đối xứng</em> của một hình nếu khi quay hình đó quanh điểm \\(O\\) một nửa vòng (\\(180^\\circ\\)) thì hình thu được trùng khít với chính nó.</p>\n        <p><strong>2. Các hình có tâm đối xứng:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Đoạn thẳng: Tâm đối xứng là trung điểm của đoạn thẳng.</li>\n          <li>Hình bình hành, hình chữ nhật, hình thoi, hình vuông: Tâm đối xứng là giao điểm của hai đường chéo.</li>\n          <li>Lục giác đều: Tâm đối xứng là giao điểm của các đường chéo chính.</li>\n          <li>Hình tròn: Tâm đối xứng là tâm của đường tròn.</li>\n          <li><em>Lưu ý:</em> Tam giác đều không có tâm đối xứng!</li>\n        </ul>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 80\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"250,15 320,40 250,65 180,40\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/>\n        <circle cx=\"250\" cy=\"40\" r=\"4\" fill=\"#dc2626\"/>\n        <text x=\"250\" y=\"55\" fill=\"#b91c1c\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Tâm O (180°)</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Hình nào sau đây KHÔNG có tâm đối xứng?",
      "options": [
        "(Recommended) Tam giác đều",
        "Hình bình hành",
        "Hình thoi",
        "Hình chữ nhật"
      ],
      "ans": 0,
      "expl": "Tam giác đều chỉ có trục đối xứng chứ không có tâm đối xứng (khi quay 180° hình bị lộn ngược)."
    }
  },
  {
    "id": 23,
    "vol": 2,
    "chapter": "Chương VI: Phân số",
    "chapterId": 6,
    "lessonNum": "Bài 23",
    "title": "Mở rộng phân số. Phân số bằng nhau",
    "desc": "Khái niệm phân số a/b với a, b ∈ ℤ (b ≠ 0), điều kiện hai phân số bằng nhau và tính chất cơ bản.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Khái niệm phân số:</strong> Phân số là biểu thức có dạng \\(\\frac{a}{b}\\) với \\(a, b \\in \\mathbb{Z}, b \\ne 0\\) (\\(a\\) là tử số, \\(b\\) là mẫu số). Mọi số nguyên \\(a\\) đều có thể viết dưới dạng phân số là \\(\\frac{a}{1}\\).</p>\n        <p><strong>2. Hai phân số bằng nhau:</strong></p>\n        <div class=\"p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs font-mono font-bold text-center text-blue-900 dark:text-blue-200\">\n          \\(\\frac{a}{b} = \\frac{c}{d} \\iff a \\cdot d = b \\cdot c\\)\n        </div>\n        <p><strong>3. Tính chất cơ bản của phân số:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Nhân cả tử và mẫu với cùng một số nguyên khác 0: \\(\\frac{a}{b} = \\frac{a \\cdot m}{b \\cdot m}\\) (với \\(m \\in \\mathbb{Z}, m \\ne 0\\)).</li>\n          <li>Chia cả tử và mẫu cho cùng một ước chung: \\(\\frac{a}{b} = \\frac{a : n}{b : n}\\) (với \\(n \\in \\text{ƯC}(a, b)\\)). Ứng dụng để rút gọn phân số về phân số tối giản.</li>\n        </ul>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"55\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#1e40af\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Hai phân số bằng nhau: a/b = c/d  ⇔  a · d = b · c</text>\n        <text x=\"250\" y=\"56\" fill=\"#2563eb\" font-size=\"11\" text-anchor=\"middle\">Tính chất: a/b = (a · m) / (b · m)  =  (a : n) / (b : n)</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Tìm số nguyên x biết x/6 = -2/3:",
      "options": [
        "(Recommended) -4",
        "4",
        "-3",
        "3"
      ],
      "ans": 0,
      "expl": "Áp dụng định nghĩa phân số bằng nhau: x · 3 = 6 · (-2) = -12 ⇒ x = -12 / 3 = -4."
    }
  },
  {
    "id": 24,
    "vol": 2,
    "chapter": "Chương VI: Phân số",
    "chapterId": 6,
    "lessonNum": "Bài 24",
    "title": "So sánh phân số. Hỗn số dương",
    "desc": "Quy đồng mẫu số dương, quy tắc so sánh phân số và cấu tạo hỗn số dương.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Quy đồng mẫu số các phân số:</strong> Đưa các phân số có mẫu khác nhau về cùng một mẫu dương bằng cách tìm BCNN của các mẫu số làm mẫu số chung.</p>\n        <p><strong>2. Quy tắc so sánh phân số:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Luôn đổi phân số có mẫu âm thành mẫu dương: \\(\\frac{a}{-b} = \\frac{-a}{b}\\).</li>\n          <li>Trong hai phân số có cùng một mẫu dương, phân số nào có tử số lớn hơn thì phân số đó lớn hơn: nếu \\(a > b\\) thì \\(\\frac{a}{m} > \\frac{b}{m}\\) (với \\(m > 0\\)).</li>\n          <li>Phân số có tử và mẫu cùng dấu thì lớn hơn 0 (phân số dương); khác dấu thì nhỏ hơn 0 (phân số âm).</li>\n        </ul>\n        <p><strong>3. Hỗn số dương:</strong> Viết số dưới dạng \\(a\\frac{b}{c} = a + \\frac{b}{c}\\) (với \\(a \\in \\mathbb{N}, \\frac{b}{c} > 0\\) và \\(\\frac{b}{c} < 1\\)). Chuyển sang phân số: \\(a\\frac{b}{c} = \\frac{a \\cdot c + b}{c}\\).</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"55\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#b45309\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">So sánh cùng mẫu dương: a &gt; b  ⇒  a/m &gt; b/m</text>\n        <text x=\"250\" y=\"56\" fill=\"#78350f\" font-size=\"11\" text-anchor=\"middle\">Hỗn số dương: a (b/c) = (a · c + b) / c</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Viết hỗn số 3 và 2/5 dưới dạng phân số ta được:",
      "options": [
        "(Recommended) 17/5",
        "11/5",
        "6/5",
        "15/5"
      ],
      "ans": 0,
      "expl": "3 và 2/5 = (3 · 5 + 2)/5 = (15 + 2)/5 = 17/5."
    }
  },
  {
    "id": 25,
    "vol": 2,
    "chapter": "Chương VI: Phân số",
    "chapterId": 6,
    "lessonNum": "Bài 25",
    "title": "Phép cộng và phép trừ phân số",
    "desc": "Cộng trừ phân số cùng mẫu và khác mẫu, số đối của phân số và quy tắc trừ.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Phép cộng phân số:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Cùng mẫu số: Cộng tử với tử, giữ nguyên mẫu: \\(\\frac{a}{m} + \\frac{b}{m} = \\frac{a + b}{m}\\).</li>\n          <li>Khác mẫu số: Quy đồng mẫu dương rồi cộng các tử theo quy tắc cùng mẫu.</li>\n          <li>Tính chất: Giao hoán, kết hợp và cộng với số 0: \\(\\frac{a}{b} + 0 = \\frac{a}{b}\\).</li>\n        </ul>\n        <p><strong>2. Phép trừ phân số & Số đối:</strong></p>\n        <div class=\"p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 text-xs\">\n          • Số đối của phân số \\(\\frac{a}{b}\\) là \\(-\\frac{a}{b} = \\frac{-a}{b} = \\frac{a}{-b}\\). Tổng hai số đối luôn bằng 0.<br>\n          • Muốn trừ hai phân số, ta lấy số bị trừ cộng với số đối của số trừ:<br>\n          <div class=\"font-mono font-bold text-center my-1 text-sm text-rose-800 dark:text-rose-300\">\\(\\frac{a}{b} - \\frac{c}{d} = \\frac{a}{b} + \\left(-\\frac{c}{d}\\right)\\)</div>\n        </div>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"55\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#b91c1c\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Cộng cùng mẫu: a/m + b/m = (a + b)/m</text>\n        <text x=\"250\" y=\"56\" fill=\"#7f1d1d\" font-size=\"11\" text-anchor=\"middle\">Phép trừ: a/b - c/d = a/b + (-c/d)</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Kết quả của phép tính -3/7 + 5/7 là:",
      "options": [
        "(Recommended) 2/7",
        "-8/7",
        "8/7",
        "-2/7"
      ],
      "ans": 0,
      "expl": "Cùng mẫu 7: (-3 + 5)/7 = 2/7."
    }
  },
  {
    "id": 26,
    "vol": 2,
    "chapter": "Chương VI: Phân số",
    "chapterId": 6,
    "lessonNum": "Bài 26",
    "title": "Phép nhân và phép chia phân số",
    "desc": "Quy tắc nhân phân số, phân số nghịch đảo và phép chia phân số.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Phép nhân phân số:</strong> Muốn nhân hai phân số, ta nhân các tử với nhau và nhân các mẫu với nhau:\n          \\[\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}\\]\n          Tính chất: Giao hoán, kết hợp, nhân với 1, phân phối đối với phép cộng và phép trừ.\n        </p>\n        <p><strong>2. Phân số nghịch đảo:</strong> Hai số được gọi là nghịch đảo của nhau nếu tích của chúng bằng 1. Phân số nghịch đảo của \\(\\frac{a}{b}\\) là \\(\\frac{b}{a}\\) (với \\(a, b \\ne 0\\)).</p>\n        <p><strong>3. Phép chia phân số:</strong> Muốn chia một phân số cho một phân số khác 0, ta nhân số bị chia với phân số nghịch đảo của số chia:\n          \\[\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c}\\]\n        </p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"55\" rx=\"8\" fill=\"#ede9fe\" stroke=\"#7c3aed\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#5b21b6\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Nhân: (a/b) · (c/d) = (a · c) / (b · d)</text>\n        <text x=\"250\" y=\"56\" fill=\"#6d28d9\" font-size=\"11\" text-anchor=\"middle\">Chia: (a/b) : (c/d) = (a/b) · (d/c) (với c/d ≠ 0)</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Phân số nghịch đảo của -4/9 là:",
      "options": [
        "(Recommended) -9/4",
        "9/4",
        "4/9",
        "-4/9"
      ],
      "ans": 0,
      "expl": "Phân số nghịch đảo của a/b là b/a, do đó nghịch đảo của -4/9 là -9/4."
    }
  },
  {
    "id": 27,
    "vol": 2,
    "chapter": "Chương VI: Phân số",
    "chapterId": 6,
    "lessonNum": "Bài 27",
    "title": "Hai bài toán về phân số",
    "desc": "Tìm giá trị phân số của một số cho trước và Tìm một số biết giá trị phân số của nó.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p>Trong toán học và thực tế đời sống, có hai bài toán cơ bản về phân số thường gặp:</p>\n        <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 my-2 text-xs\">\n          <div class=\"p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800\">\n            <span class=\"font-bold text-emerald-800 dark:text-emerald-300\">BÀI TOÁN 1: Tìm giá trị phân số của một số</span>\n            <p class=\"mt-1 text-gray-600 dark:text-gray-300\">Muốn tìm \\(\\frac{m}{n}\\) của số \\(a\\) cho trước (\\(n \\in \\mathbb{N}^*\\)), ta tính:<br>\n            <strong class=\"font-mono text-sm text-emerald-700 dark:text-emerald-300\">\\(a \\cdot \\frac{m}{n}\\)</strong><br>\n            <em>Ví dụ:</em> 2/3 của 45 kg là: 45 · (2/3) = 30 kg.</p>\n          </div>\n          <div class=\"p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800\">\n            <span class=\"font-bold text-amber-800 dark:text-amber-300\">BÀI TOÁN 2: Tìm một số biết giá trị phân số của nó</span>\n            <p class=\"mt-1 text-gray-600 dark:text-gray-300\">Muốn tìm một số biết \\(\\frac{m}{n}\\) của nó bằng \\(b\\) (\\(m, n \\in \\mathbb{N}^*\\)), ta tính:<br>\n            <strong class=\"font-mono text-sm text-amber-700 dark:text-amber-300\">\\(b : \\frac{m}{n}\\)</strong><br>\n            <em>Ví dụ:</em> Tìm số biết 3/5 của nó là 24: 24 : (3/5) = 40.</p>\n          </div>\n        </div>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"220\" height=\"55\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/>\n        <text x=\"130\" y=\"36\" fill=\"#15803d\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Tìm m/n của số a</text>\n        <text x=\"130\" y=\"54\" fill=\"#14532d\" font-size=\"12\" font-mono font-bold text-anchor=\"middle\">a · (m/n)</text>\n\n        <rect x=\"260\" y=\"15\" width=\"220\" height=\"55\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\n        <text x=\"370\" y=\"36\" fill=\"#b45309\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Tìm số biết m/n là b</text>\n        <text x=\"370\" y=\"54\" fill=\"#78350f\" font-size=\"12\" font-mono font-bold text-anchor=\"middle\">b : (m/n)</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Một bình nước chứa 12 lít. Người ta lấy ra 3/4 lượng nước trong bình. Lượng nước đã lấy ra là:",
      "options": [
        "(Recommended) 9 lít",
        "16 lít",
        "4 lít",
        "6 lít"
      ],
      "ans": 0,
      "expl": "Áp dụng Bài toán 1: Lấy 12 · (3/4) = 9 lít nước."
    }
  },
  {
    "id": 28,
    "vol": 2,
    "chapter": "Chương VII: Số thập phân",
    "chapterId": 7,
    "lessonNum": "Bài 28",
    "title": "Số thập phân",
    "desc": "Phân số thập phân, cấu tạo số thập phân âm, dương và phương pháp so sánh.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Phân số thập phân và Số thập phân:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Phân số thập phân là phân số có mẫu số là lũy thừa của 10 (như 10, 100, 1000...).</li>\n          <li>Số thập phân gồm hai phần ngăn cách bởi dấu phẩy: phần nguyên (ở bên trái) và phần thập phân (ở bên phải).</li>\n          <li>Số đối của số thập phân dương \\(a\\) là số thập phân âm \\(-a\\).</li>\n        </ul>\n        <p><strong>2. So sánh số thập phân:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Mọi số thập phân âm đều nhỏ hơn 0 và nhỏ hơn mọi số thập phân dương.</li>\n          <li>Giữa hai số thập phân dương: so sánh phần nguyên trước; nếu phần nguyên bằng nhau thì so sánh chữ số ở hàng phần mười, hàng phần trăm, hàng phần nghìn...</li>\n          <li>Giữa hai số thập phân âm: số nào có phần đối lớn hơn thì số đó nhỏ hơn.</li>\n        </ul>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"55\" rx=\"8\" fill=\"#eff6ff\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#1e40af\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Phân số thập phân: a/10, a/100, a/1000...</text>\n        <text x=\"250\" y=\"56\" fill=\"#2563eb\" font-size=\"11\" text-anchor=\"middle\">So sánh: Số âm &lt; 0 &lt; Số dương</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Số thập phân nào sau đây nhỏ nhất?",
      "options": [
        "(Recommended) -5.25",
        "-5.2",
        "0",
        "1.05"
      ],
      "ans": 0,
      "expl": "Vì 5.25 > 5.2 nên đối với số âm ta có: -5.25 < -5.2 < 0 < 1.05."
    }
  },
  {
    "id": 29,
    "vol": 2,
    "chapter": "Chương VII: Số thập phân",
    "chapterId": 7,
    "lessonNum": "Bài 29",
    "title": "Tính toán với số thập phân",
    "desc": "Quy tắc cộng, trừ, nhân, chia số thập phân có dấu theo chuẩn số nguyên.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Phép cộng và trừ số thập phân:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Cộng trừ như các số tự nhiên (đặt thẳng hàng các chữ số cùng hàng và dấu phẩy).</li>\n          <li>Quy tắc dấu: Cộng hai số cùng dấu thì cộng phần dương rồi đặt dấu chung. Cộng hai số khác dấu thì lấy số lớn trừ số bé rồi lấy dấu của số có phần dương lớn hơn. Trừ số thập phân: \\(a - b = a + (-b)\\).</li>\n        </ul>\n        <p><strong>2. Phép nhân và chia số thập phân:</strong></p>\n        <div class=\"p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs\">\n          • Cùng dấu \\(\\rightarrow\\) Dương: \\((+) \\cdot (+) = (+)\\); \\((-) \\cdot (-) = (+)\\).<br>\n          • Khác dấu \\(\\rightarrow\\) Âm: \\((+) \\cdot (-) = (-)\\); \\((-) \\cdot (+) = (-)\\).<br>\n          • Phép chia tuân theo quy tắc dấu tương tự như phép nhân.\n        </div>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"55\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#0f172a\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Phép tính số thập phân tuân theo quy tắc dấu của số nguyên ℤ</text>\n        <text x=\"250\" y=\"56\" fill=\"#2563eb\" font-size=\"11\" text-anchor=\"middle\">a - b = a + (-b)  •  Cùng dấu (+)  •  Khác dấu (-)</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Giá trị của biểu thức (-1.25) · (-8) bằng:",
      "options": [
        "(Recommended) 10",
        "-10",
        "1",
        "-1"
      ],
      "ans": 0,
      "expl": "Nhân hai số cùng dấu âm ra kết quả dương: (-1.25) · (-8) = +10."
    }
  },
  {
    "id": 30,
    "vol": 2,
    "chapter": "Chương VII: Số thập phân",
    "chapterId": 7,
    "lessonNum": "Bài 30",
    "title": "Làm tròn và ước lượng",
    "desc": "Quy tắc làm tròn đến hàng chỉ định (≥ 5 tăng 1, < 5 giữ nguyên) và ứng dụng ước lượng.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Quy tắc làm tròn số thập phân:</strong> Để làm tròn số thập phân đến một hàng nào đó (gọi là hàng làm tròn):</p>\n        <div class=\"p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs space-y-1\">\n          <div>• Nhìn chữ số ngay sau hàng làm tròn:</div>\n          <div>• Nếu chữ số đó <strong>\\(\\ge 5\\)</strong>: Tăng chữ số hàng làm tròn thêm 1 đơn vị.</div>\n          <div>• Nếu chữ số đó <strong>\\(< 5\\)</strong>: Giữ nguyên chữ số hàng làm tròn.</div>\n          <div>• Sau đó, bỏ các chữ số ở phần thập phân sau hàng làm tròn, hoặc thay bằng chữ số 0 nếu ở phần nguyên.</div>\n        </div>\n        <p><strong>2. Ước lượng:</strong> Sử dụng làm tròn các số hạng/thừa số trong phép tính để tính nhẩm nhanh kết quả gần đúng, giúp kiểm tra tính hợp lý của phép tính.</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"220\" height=\"55\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"1.5\"/>\n        <text x=\"130\" y=\"36\" fill=\"#b91c1c\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Chữ số sau ≥ 5</text>\n        <text x=\"130\" y=\"54\" fill=\"#7f1d1d\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">TĂNG 1 ĐƠN VỊ (+1)</text>\n\n        <rect x=\"260\" y=\"15\" width=\"220\" height=\"55\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"1.5\"/>\n        <text x=\"370\" y=\"36\" fill=\"#15803d\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Chữ số sau &lt; 5</text>\n        <text x=\"370\" y=\"54\" fill=\"#14532d\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">GIỮ NGUYÊN</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Làm tròn số 73.846 đến hàng phần mười (chữ số thập phân thứ nhất):",
      "options": [
        "(Recommended) 73.8",
        "73.9",
        "74",
        "73.85"
      ],
      "ans": 0,
      "expl": "Chữ số hàng phần mười là 8. Chữ số ngay sau nó là 4 (< 5), nên giữ nguyên 73.8."
    }
  },
  {
    "id": 31,
    "vol": 2,
    "chapter": "Chương VII: Số thập phân",
    "chapterId": 7,
    "lessonNum": "Bài 31",
    "title": "Một số bài toán về tỉ số và tỉ số phần trăm",
    "desc": "Tỉ số của hai số, tỉ số phần trăm (a/b · 100%) và hai dạng toán phần trăm thực tế.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Tỉ số của hai số:</strong> Thương trong phép chia số \\(a\\) cho số \\(b\\) (\\(b \\ne 0\\)) gọi là tỉ số của \\(a\\) và \\(b\\), kí hiệu là \\(a : b\\) hoặc \\(\\frac{a}{b}\\).</p>\n        <p><strong>2. Tỉ số phần trăm:</strong> Tỉ số phần trăm của \\(a\\) và \\(b\\) là:\n          \\[\\frac{a}{b} \\cdot 100\\%\\]\n        </p>\n        <p><strong>3. Hai bài toán về tỉ số phần trăm:</strong></p>\n        <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 my-2 text-xs\">\n          <div class=\"p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800\">\n            <strong>Tìm m% của số a:</strong> Ta tính:<br>\n            <span class=\"font-mono font-bold text-sm text-purple-700 dark:text-purple-300\">\\(a \\cdot \\frac{m}{100}\\)</span>\n          </div>\n          <div class=\"p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800\">\n            <strong>Tìm một số biết m% của nó là b:</strong> Ta tính:<br>\n            <span class=\"font-mono font-bold text-sm text-blue-700 dark:text-blue-300\">\\(b : \\frac{m}{100}\\)</span>\n          </div>\n        </div>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"55\" rx=\"8\" fill=\"#f3e8ff\" stroke=\"#a855f7\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#6b21a8\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Tỉ số phần trăm: (a / b) · 100%</text>\n        <text x=\"250\" y=\"56\" fill=\"#7e22ce\" font-size=\"11\" text-anchor=\"middle\">Tìm m% của a: a · (m/100)  •  Tìm số biết m% là b: b : (m/100)</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Giá trị của 20% của 150 mét là:",
      "options": [
        "(Recommended) 30 mét",
        "20 mét",
        "15 mét",
        "75 mét"
      ],
      "ans": 0,
      "expl": "150 · (20 / 100) = 150 · 0.2 = 30 mét."
    }
  },
  {
    "id": 32,
    "vol": 2,
    "chapter": "Chương VIII: Những hình hình học cơ bản",
    "chapterId": 8,
    "lessonNum": "Bài 32",
    "title": "Điểm và đường thẳng",
    "desc": "Điểm thuộc và không thuộc đường thẳng, tiên đề đường thẳng và các vị trí tương đối.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Điểm và đường thẳng:</strong> Điểm được kí hiệu bằng chữ cái in hoa (\\(A, B, C...\\)), đường thẳng bằng chữ cái in thường (\\(a, b, d, m...\\)). Điểm \\(M\\) thuộc đường thẳng \\(d\\) kí hiệu \\(M \\in d\\); điểm \\(N\\) không thuộc \\(d\\) kí hiệu \\(N \\notin d\\).</p>\n        <p><strong>2. Tiên đề đường thẳng:</strong> Có một và chỉ một đường thẳng đi qua hai điểm phân biệt cho trước.</p>\n        <p><strong>3. Ba điểm thẳng hàng:</strong> Khi ba điểm cùng thuộc một đường thẳng. Khi đó có một và chỉ một điểm nằm giữa hai điểm còn lại.</p>\n        <p><strong>4. Hai đường thẳng trong mặt phẳng:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li><strong>Song song:</strong> Không có điểm chung nào.</li>\n          <li><strong>Cắt nhau:</strong> Có duy nhất một điểm chung (gọi là giao điểm).</li>\n          <li><strong>Trùng nhau:</strong> Có vô số điểm chung.</li>\n        </ul>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <line x1=\"30\" y1=\"30\" x2=\"220\" y2=\"30\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n        <line x1=\"30\" y1=\"55\" x2=\"220\" y2=\"55\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n        <text x=\"125\" y=\"75\" font-size=\"10\" font-weight=\"bold\" fill=\"#1e40af\" text-anchor=\"middle\">Song song (0 điểm chung)</text>\n\n        <line x1=\"280\" y1=\"20\" x2=\"460\" y2=\"65\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n        <line x1=\"280\" y1=\"65\" x2=\"460\" y2=\"20\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n        <circle cx=\"370\" cy=\"42.5\" r=\"4\" fill=\"#0f172a\"/>\n        <text x=\"370\" y=\"75\" font-size=\"10\" font-weight=\"bold\" fill=\"#991b1b\" text-anchor=\"middle\">Cắt nhau (1 điểm chung)</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Hai đường thẳng song song là hai đường thẳng:",
      "options": [
        "(Recommended) Không có điểm chung nào",
        "Có 1 điểm chung",
        "Có 2 điểm chung",
        "Có vô số điểm chung"
      ],
      "ans": 0,
      "expl": "Định nghĩa: Hai đường thẳng song song là hai đường thẳng không có bất kì điểm chung nào."
    }
  },
  {
    "id": 33,
    "vol": 2,
    "chapter": "Chương VIII: Những hình hình học cơ bản",
    "chapterId": 8,
    "lessonNum": "Bài 33",
    "title": "Điểm nằm giữa hai điểm. Tia",
    "desc": "Khái niệm điểm nằm giữa, định nghĩa tia gốc O và hai tia đối nhau.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Điểm nằm giữa hai điểm:</strong> Cho ba điểm thẳng hàng \\(A, B, C\\). Nếu điểm \\(B\\) nằm giữa hai điểm \\(A\\) và \\(C\\) thì hai điểm \\(A, C\\) nằm khác phía đối với điểm \\(B\\), hai điểm \\(A, B\\) nằm cùng phía đối với điểm \\(C\\).</p>\n        <p><strong>2. Tia gốc \\(O\\):</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Hình gồm điểm \\(O\\) và một phần đường thẳng bị chia ra bởi điểm \\(O\\) gọi là một tia gốc \\(O\\) (kí hiệu tia \\(Ox\\)). Điểm \\(O\\) gọi là gốc của tia.</li>\n          <li><strong>Hai tia đối nhau:</strong> Hai tia chung gốc tạo thành một đường thẳng được gọi là hai tia đối nhau.</li>\n          <li><strong>Hai tia trùng nhau:</strong> Hai tia chung gốc và cùng đi qua một điểm khác điểm gốc.</li>\n        </ul>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <line x1=\"40\" y1=\"40\" x2=\"460\" y2=\"40\" stroke=\"#0284c7\" stroke-width=\"2.5\"/>\n        <circle cx=\"250\" cy=\"40\" r=\"4\" fill=\"#dc2626\"/>\n        <text x=\"250\" y=\"60\" font-weight=\"bold\" font-size=\"11\" fill=\"#dc2626\" text-anchor=\"middle\">Gốc O</text>\n        <text x=\"50\" y=\"32\" font-size=\"12\" font-weight=\"bold\" fill=\"#0369a1\">Tia Ox</text>\n        <text x=\"430\" y=\"32\" font-size=\"12\" font-weight=\"bold\" fill=\"#0369a1\">Tia Oy</text>\n        <text x=\"250\" y=\"75\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"middle\">Ox và Oy là hai tia đối nhau (tạo thành đường thẳng xy)</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Nếu điểm M nằm giữa hai điểm E và F thì hai tia đối nhau là:",
      "options": [
        "(Recommended) Tia ME và tia MF",
        "Tia EM và tia FM",
        "Tia EF và tia FE",
        "Tia ME và tia EF"
      ],
      "ans": 0,
      "expl": "Điểm M nằm giữa nên gốc là M, hai tia đi về hai phía đối diện là tia ME và tia MF."
    }
  },
  {
    "id": 34,
    "vol": 2,
    "chapter": "Chương VIII: Những hình hình học cơ bản",
    "chapterId": 8,
    "lessonNum": "Bài 34",
    "title": "Đoạn thẳng. Độ dài đoạn thẳng",
    "desc": "Khái niệm đoạn thẳng AB, cách đo độ dài và hệ thức AM + MB = AB.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Đoạn thẳng \\(AB\\):</strong> Là hình gồm điểm \\(A\\), điểm \\(B\\) và tất cả các điểm nằm giữa \\(A\\) và \\(B\\). Hai điểm \\(A, B\\) gọi là hai đầu mút của đoạn thẳng.</p>\n        <p><strong>2. Độ dài đoạn thẳng:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Mỗi đoạn thẳng có một độ dài xác định và luôn là một số dương.</li>\n          <li>Hai đoạn thẳng bằng nhau nếu chúng có cùng độ dài.</li>\n          <li><strong>Hệ thức điểm nằm giữa:</strong> Nếu điểm \\(M\\) nằm giữa hai điểm \\(A\\) và \\(B\\) thì:\n            \\[AM + MB = AB\\]\n            Ngược lại, nếu \\(AM + MB = AB\\) thì điểm \\(M\\) nằm giữa \\(A\\) và \\(B\\).\n          </li>\n        </ul>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <line x1=\"60\" y1=\"40\" x2=\"440\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"3\"/>\n        <circle cx=\"60\" cy=\"40\" r=\"5\" fill=\"#1e293b\"/><text x=\"60\" y=\"60\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">A</text>\n        <circle cx=\"220\" cy=\"40\" r=\"4\" fill=\"#dc2626\"/><text x=\"220\" y=\"60\" font-weight=\"bold\" font-size=\"12\" fill=\"#dc2626\" text-anchor=\"middle\">M</text>\n        <circle cx=\"440\" cy=\"40\" r=\"5\" fill=\"#1e293b\"/><text x=\"440\" y=\"60\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">B</text>\n        <text x=\"250\" y=\"25\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\" text-anchor=\"middle\">M nằm giữa A và B  ⇔  AM + MB = AB</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Cho điểm K nằm giữa hai điểm C và D. Biết CK = 4 cm, CD = 9 cm. Độ dài đoạn KD bằng:",
      "options": [
        "(Recommended) 5 cm",
        "13 cm",
        "4.5 cm",
        "6 cm"
      ],
      "ans": 0,
      "expl": "Vì K nằm giữa C và D nên CK + KD = CD ⇒ KD = CD - CK = 9 - 4 = 5 cm."
    }
  },
  {
    "id": 35,
    "vol": 2,
    "chapter": "Chương VIII: Những hình hình học cơ bản",
    "chapterId": 8,
    "lessonNum": "Bài 35",
    "title": "Trung điểm của đoạn thẳng",
    "desc": "Định nghĩa điểm nằm giữa và cách đều hai đầu mút: IA = IB = AB/2.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Khái niệm trung điểm:</strong> Trung điểm \\(I\\) của đoạn thẳng \\(AB\\) (còn gọi là điểm chính giữa của đoạn thẳng \\(AB\\)) là điểm nằm giữa \\(A, B\\) và cách đều hai đầu mút \\(A\\) và \\(B\\).</p>\n        <div class=\"p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs font-mono font-bold text-center text-blue-900 dark:text-blue-200\">\n          \\(IA = IB = \\frac{AB}{2}\\)\n        </div>\n        <p><strong>2. Cách xác định trung điểm:</strong> Dùng thước có vạch đo cm lấy điểm có khoảng cách bằng nửa chiều dài đoạn thẳng, hoặc gấp giấy sao cho hai điểm đầu mút trùng nhau.</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <line x1=\"60\" y1=\"40\" x2=\"440\" y2=\"40\" stroke=\"#2563eb\" stroke-width=\"3\"/>\n        <circle cx=\"60\" cy=\"40\" r=\"5\" fill=\"#1e293b\"/><text x=\"60\" y=\"60\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">A</text>\n        <circle cx=\"250\" cy=\"40\" r=\"5\" fill=\"#e11d48\"/><text x=\"250\" y=\"60\" font-weight=\"bold\" font-size=\"12\" fill=\"#e11d48\" text-anchor=\"middle\">I (Trung điểm)</text>\n        <circle cx=\"440\" cy=\"40\" r=\"5\" fill=\"#1e293b\"/><text x=\"440\" y=\"60\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">B</text>\n        <line x1=\"150\" y1=\"35\" x2=\"155\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n        <line x1=\"340\" y1=\"35\" x2=\"345\" y2=\"45\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"25\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e40af\" text-anchor=\"middle\">IA = IB = AB / 2</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Đoạn thẳng MN dài 14 cm. I là trung điểm của MN. Độ dài đoạn thẳng MI là:",
      "options": [
        "(Recommended) 7 cm",
        "14 cm",
        "3.5 cm",
        "28 cm"
      ],
      "ans": 0,
      "expl": "Vì I là trung điểm của MN nên MI = MN / 2 = 14 / 2 = 7 cm."
    }
  },
  {
    "id": 36,
    "vol": 2,
    "chapter": "Chương VIII: Những hình hình học cơ bản",
    "chapterId": 8,
    "lessonNum": "Bài 36",
    "title": "Góc",
    "desc": "Định nghĩa góc, đỉnh và hai cạnh, điểm nằm trong góc và góc bẹt.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Khái niệm góc:</strong> Góc là hình gồm hai tia chung gốc. Gốc chung của hai tia gọi là <em>đỉnh</em> của góc. Hai tia gọi là <em>hai cạnh</em> của góc.</p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Góc \\(xOy\\) có đỉnh là \\(O\\), hai cạnh là hai tia \\(Ox\\) và \\(Oy\\). Kí hiệu: \\(\\widehat{xOy}\\) hoặc \\(\\widehat{O}\\).</li>\n          <li><strong>Góc bẹt:</strong> Là góc có hai cạnh là hai tia đối nhau.</li>\n        </ul>\n        <p><strong>2. Điểm nằm trong góc:</strong> Cho góc \\(xOy\\) không phải góc bẹt. Điểm \\(M\\) nằm trong góc nếu tia \\(OM\\) cắt một đoạn thẳng nối một điểm trên tia \\(Ox\\) với một điểm trên tia \\(Oy\\).</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 95\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <line x1=\"200\" y1=\"70\" x2=\"350\" y2=\"70\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n        <line x1=\"200\" y1=\"70\" x2=\"300\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"2.5\"/>\n        <circle cx=\"200\" cy=\"70\" r=\"4\" fill=\"#dc2626\"/>\n        <text x=\"185\" y=\"75\" font-weight=\"bold\" font-size=\"12\" fill=\"#dc2626\">O</text>\n        <text x=\"355\" y=\"75\" font-size=\"11\" font-weight=\"bold\">x</text>\n        <text x=\"305\" y=\"20\" font-size=\"11\" font-weight=\"bold\">y</text>\n        <path d=\"M 230 70 A 30 30 0 0 0 223 58\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"85\" font-size=\"11\" fill=\"#64748b\" text-anchor=\"middle\">Góc xOy (Đỉnh O, 2 cạnh Ox và Oy)</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Góc bẹt là góc có hai cạnh là:",
      "options": [
        "(Recommended) Hai tia đối nhau",
        "Hai tia trùng nhau",
        "Hai đoạn thẳng cắt nhau",
        "Hai tia vuông góc"
      ],
      "ans": 0,
      "expl": "Theo định nghĩa SGK, góc bẹt là góc có hai cạnh là hai tia đối nhau."
    }
  },
  {
    "id": 37,
    "vol": 2,
    "chapter": "Chương VIII: Những hình hình học cơ bản",
    "chapterId": 8,
    "lessonNum": "Bài 37",
    "title": "Số đo góc",
    "desc": "Đo góc bằng thước đo độ và phân loại 4 loại góc: nhọn, vuông, tù, bẹt.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Đo góc:</strong> Mỗi góc có một số đo xác định (đơn vị là độ, kí hiệu là \\(^\\circ\\)). Số đo của góc bẹt là \\(180^\\circ\\). Số đo của mỗi góc không vượt quá \\(180^\\circ\\).</p>\n        <p><strong>2. Phân loại 4 loại góc cơ bản theo số đo:</strong></p>\n        <div class=\"grid grid-cols-2 gap-2 text-xs\">\n          <div class=\"p-2.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200\">\n            <strong>Góc nhọn:</strong> Có số đo lớn hơn \\(0^\\circ\\) và nhỏ hơn \\(90^\\circ\\) (\\(0^\\circ < \\alpha < 90^\\circ\\)).\n          </div>\n          <div class=\"p-2.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200\">\n            <strong>Góc vuông:</strong> Có số đo bằng đúng \\(90^\\circ\\) (\\(\\alpha = 90^\\circ\\)).\n          </div>\n          <div class=\"p-2.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200\">\n            <strong>Góc tù:</strong> Có số đo lớn hơn \\(90^\\circ\\) và nhỏ hơn \\(180^\\circ\\) (\\(90^\\circ < \\alpha < 180^\\circ\\)).\n          </div>\n          <div class=\"p-2.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200\">\n            <strong>Góc bẹt:</strong> Có số đo bằng đúng \\(180^\\circ\\) (\\(\\alpha = 180^\\circ\\)).\n          </div>\n        </div>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"15\" y=\"15\" width=\"105\" height=\"55\" rx=\"6\" fill=\"#eff6ff\" stroke=\"#3b82f6\"/>\n        <text x=\"67\" y=\"38\" font-size=\"10\" font-weight=\"bold\" fill=\"#1e40af\" text-anchor=\"middle\">Góc nhọn</text>\n        <text x=\"67\" y=\"54\" font-size=\"9\" fill=\"#2563eb\" text-anchor=\"middle\">&lt; 90°</text>\n\n        <rect x=\"135\" y=\"15\" width=\"105\" height=\"55\" rx=\"6\" fill=\"#fee2e2\" stroke=\"#ef4444\"/>\n        <text x=\"187\" y=\"38\" font-size=\"10\" font-weight=\"bold\" fill=\"#b91c1c\" text-anchor=\"middle\">Góc vuông</text>\n        <text x=\"187\" y=\"54\" font-size=\"9\" fill=\"#dc2626\" text-anchor=\"middle\">= 90°</text>\n\n        <rect x=\"255\" y=\"15\" width=\"105\" height=\"55\" rx=\"6\" fill=\"#fef3c7\" stroke=\"#f59e0b\"/>\n        <text x=\"307\" y=\"38\" font-size=\"10\" font-weight=\"bold\" fill=\"#b45309\" text-anchor=\"middle\">Góc tù</text>\n        <text x=\"307\" y=\"54\" font-size=\"9\" fill=\"#d97706\" text-anchor=\"middle\">90° &lt; α &lt; 180°</text>\n\n        <rect x=\"375\" y=\"15\" width=\"110\" height=\"55\" rx=\"6\" fill=\"#ede9fe\" stroke=\"#8b5cf6\"/>\n        <text x=\"430\" y=\"38\" font-size=\"10\" font-weight=\"bold\" fill=\"#5b21b6\" text-anchor=\"middle\">Góc bẹt</text>\n        <text x=\"430\" y=\"54\" font-size=\"9\" fill=\"#7c3aed\" text-anchor=\"middle\">= 180°</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Góc có số đo bằng 130° thuộc loại góc nào?",
      "options": [
        "(Recommended) Góc tù",
        "Góc nhọn",
        "Góc vuông",
        "Góc bẹt"
      ],
      "ans": 0,
      "expl": "Vì 90° < 130° < 180° nên góc 130° là góc tù."
    }
  },
  {
    "id": 38,
    "vol": 2,
    "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
    "chapterId": 9,
    "lessonNum": "Bài 38",
    "title": "Dữ liệu và thu thập dữ liệu",
    "desc": "Khái niệm dữ liệu thống kê, phân loại dữ liệu số và không là số, tính hợp lí.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Dữ liệu thống kê:</strong> Các thông tin thu thập được như số liệu, chữ cái, hình ảnh... được gọi là dữ liệu. Các dữ liệu được ghi chép lại gọi là số liệu thống kê.</p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li><strong>Dữ liệu là số (số liệu):</strong> Điểm kiểm tra, chiều cao, cân nặng, nhiệt độ...</li>\n          <li><strong>Dữ liệu không phải là số:</strong> Giới tính (Nam, Nữ), màu sắc yêu thích, xếp loại hạnh kiểm...</li>\n        </ul>\n        <p><strong>2. Tính hợp lý của dữ liệu:</strong> Dữ liệu thu thập phải đáp ứng tiêu chí đúng định dạng và đúng thực tế (ví dụ: điểm thi không thể âm hay lớn hơn 10; số người không thể là số thập phân).</p>\n        <p><strong>3. Phương pháp thu thập dữ liệu:</strong> Quan sát, phỏng vấn, lập phiếu khảo sát, đo đạc, thực nghiệm, tra cứu sách báo / internet.</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"220\" height=\"55\" rx=\"8\" fill=\"#dbeafe\" stroke=\"#2563eb\" stroke-width=\"1.5\"/>\n        <text x=\"130\" y=\"36\" fill=\"#1e40af\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">DỮ LIỆU LÀ SỐ</text>\n        <text x=\"130\" y=\"54\" fill=\"#1e3a8a\" font-size=\"10\" text-anchor=\"middle\">Chiều cao, điểm số, nhiệt độ...</text>\n\n        <rect x=\"260\" y=\"15\" width=\"220\" height=\"55\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\n        <text x=\"370\" y=\"36\" fill=\"#b45309\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">DỮ LIỆU KHÔNG LÀ SỐ</text>\n        <text x=\"370\" y=\"54\" fill=\"#78350f\" font-size=\"10\" text-anchor=\"middle\">Màu sắc, giới tính, sở thích...</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Dãy dữ liệu nào sau đây là dữ liệu KHÔNG phải là số?",
      "options": [
        "(Recommended) Tên các môn thể thao yêu thích: Bóng đá, Cầu lông, Bơi",
        "Số học sinh của các lớp: 35, 40, 38, 42",
        "Chiều cao của học sinh (cm): 145, 150, 152",
        "Nhiệt độ các ngày trong tuần (°C): 25, 27, 28"
      ],
      "ans": 0,
      "expl": "Tên môn thể thao là các từ ngữ, văn bản chứ không phải là chữ số."
    }
  },
  {
    "id": 39,
    "vol": 2,
    "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
    "chapterId": 9,
    "lessonNum": "Bài 39",
    "title": "Bảng thống kê và biểu đồ tranh",
    "desc": "Trình bày dữ liệu bằng bảng thống kê và biểu diễn trực quan qua biểu đồ tranh.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Bảng thống kê:</strong> Là bảng gồm các hàng và các cột giúp sắp xếp, trình bày dữ liệu một cách khoa học, rõ ràng và thuận tiện cho việc so sánh, tổng hợp.</p>\n        <p><strong>2. Biểu đồ tranh:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Sử dụng các hình vẽ hoặc biểu tượng để biểu diễn dữ liệu thống kê.</li>\n          <li>Mỗi biểu tượng đại diện cho một số lượng đối tượng nhất định (luôn có phần chú giải ở chân biểu đồ).</li>\n          <li>Cách đọc: Lấy số lượng biểu tượng nhân với số lượng quy ước của một biểu tượng.</li>\n        </ul>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"55\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#64748b\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#0f172a\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Biểu đồ tranh dùng biểu tượng hình vẽ trực quan</text>\n        <text x=\"250\" y=\"56\" fill=\"#2563eb\" font-size=\"11\" text-anchor=\"middle\">Chú giải: Mỗi 🌟 = 10 cuốn sách • Mỗi ⭐ = 5 cuốn sách</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Trong biểu đồ tranh, một biểu tượng quả táo biểu thị 5 kg táo. Nếu có 6 biểu tượng quả táo thì tương ứng với:",
      "options": [
        "(Recommended) 30 kg táo",
        "11 kg táo",
        "6 kg táo",
        "25 kg táo"
      ],
      "ans": 0,
      "expl": "Số kg táo = 6 · 5 = 30 kg."
    }
  },
  {
    "id": 40,
    "vol": 2,
    "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
    "chapterId": 9,
    "lessonNum": "Bài 40",
    "title": "Biểu đồ cột",
    "desc": "Cấu tạo, cách vẽ và đọc thông tin từ biểu đồ cột đơn trong thống kê.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Cấu tạo biểu đồ cột:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Trục ngang: ghi danh sách các đối tượng được thống kê.</li>\n          <li>Trục dọc: chia vạch theo tỉ lệ thích hợp để biểu thị số lượng.</li>\n          <li>Các cột hình chữ nhật: có độ rộng bằng nhau và cách đều nhau. Độ cao của mỗi cột tương ứng với số lượng của đối tượng đó.</li>\n        </ul>\n        <p><strong>2. Cách đọc biểu đồ:</strong> Nhìn đỉnh của cột dóng sang trục dọc để biết giá trị số liệu của đối tượng.</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <line x1=\"60\" y1=\"65\" x2=\"440\" y2=\"65\" stroke=\"#64748b\" stroke-width=\"2\"/>\n        <line x1=\"60\" y1=\"65\" x2=\"60\" y2=\"15\" stroke=\"#64748b\" stroke-width=\"2\"/>\n        <rect x=\"100\" y=\"30\" width=\"30\" height=\"35\" fill=\"#3b82f6\" rx=\"2\"/>\n        <rect x=\"180\" y=\"20\" width=\"30\" height=\"45\" fill=\"#3b82f6\" rx=\"2\"/>\n        <rect x=\"260\" y=\"40\" width=\"30\" height=\"25\" fill=\"#3b82f6\" rx=\"2\"/>\n        <rect x=\"340\" y=\"15\" width=\"30\" height=\"50\" fill=\"#3b82f6\" rx=\"2\"/>\n        <text x=\"250\" y=\"78\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"middle\">Biểu đồ cột đơn: Độ cao tương ứng số liệu của đối tượng</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Trong biểu đồ cột, phát biểu nào sau đây là ĐÚNG?",
      "options": [
        "(Recommended) Chiều rộng các cột phải bằng nhau",
        "Chiều rộng các cột phải tỉ lệ với số liệu",
        "Khoảng cách giữa các cột không được đều nhau",
        "Không cần trục thẳng đứng chia độ"
      ],
      "ans": 0,
      "expl": "Trong biểu đồ cột chuẩn, chiều rộng các cột và khoảng cách giữa các cột phải bằng nhau; chỉ có độ cao của cột thay đổi theo số liệu."
    }
  },
  {
    "id": 41,
    "vol": 2,
    "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
    "chapterId": 9,
    "lessonNum": "Bài 41",
    "title": "Biểu đồ cột kép",
    "desc": "Biểu diễn và so sánh trực tiếp hai dãy dữ liệu cùng loại trên cùng đối tượng.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Khái niệm biểu đồ cột kép:</strong> Khi muốn so sánh hai dãy số liệu cùng loại của các đối tượng (ví dụ so sánh điểm trung bình giữa kì và cuối kì, số nam và số nữ), người ta ghép hai cột đơn cạnh nhau tạo thành biểu đồ cột kép.</p>\n        <p><strong>2. Đặc điểm nhận biết:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Mỗi đối tượng có 2 cột đặt sát nhau.</li>\n          <li>Hai cột được tô hai màu khác nhau để phân biệt.</li>\n          <li>Luôn có bảng chú giải màu sắc ở góc biểu đồ.</li>\n        </ul>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <line x1=\"50\" y1=\"65\" x2=\"450\" y2=\"65\" stroke=\"#64748b\" stroke-width=\"2\"/>\n        <!-- Nhóm 1 -->\n        <rect x=\"90\" y=\"25\" width=\"20\" height=\"40\" fill=\"#2563eb\" rx=\"1\"/>\n        <rect x=\"112\" y=\"35\" width=\"20\" height=\"30\" fill=\"#f59e0b\" rx=\"1\"/>\n        <!-- Nhóm 2 -->\n        <rect x=\"210\" y=\"15\" width=\"20\" height=\"50\" fill=\"#2563eb\" rx=\"1\"/>\n        <rect x=\"232\" y=\"30\" width=\"20\" height=\"35\" fill=\"#f59e0b\" rx=\"1\"/>\n        <!-- Nhóm 3 -->\n        <rect x=\"330\" y=\"30\" width=\"20\" height=\"35\" fill=\"#2563eb\" rx=\"1\"/>\n        <rect x=\"352\" y=\"20\" width=\"20\" height=\"45\" fill=\"#f59e0b\" rx=\"1\"/>\n        <text x=\"250\" y=\"78\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"middle\">Biểu đồ cột kép: So sánh trực tiếp 2 đại lượng cạnh nhau</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Ưu điểm nổi bật nhất của biểu đồ cột kép là gì?",
      "options": [
        "(Recommended) So sánh trực quan hai dãy số liệu cùng loại của từng đối tượng",
        "Vẽ dễ hơn biểu đồ tranh",
        "Có thể vẽ mà không cần số liệu",
        "Chỉ vẽ được cho dữ liệu chữ"
      ],
      "ans": 0,
      "expl": "Biểu đồ cột kép được thiết kế đặc thù để so sánh 2 dãy số liệu song song của cùng đối tượng."
    }
  },
  {
    "id": 42,
    "vol": 2,
    "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
    "chapterId": 9,
    "lessonNum": "Bài 42",
    "title": "Kết quả có thể và sự kiện trong trò chơi, thí nghiệm",
    "desc": "Tập hợp các kết quả có thể xảy ra và nhận biết sự kiện xảy ra hay không.",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Kết quả có thể của trò chơi, thí nghiệm:</strong></p>\n        <ul class=\"list-disc pl-5 space-y-1 text-xs\">\n          <li>Khi tung một đồng xu: có 2 kết quả có thể là Mặt sấp (S) hoặc Mặt ngửa (N).</li>\n          <li>Khi gieo một con xúc xắc 6 mặt: có 6 kết quả có thể là xuất hiện mặt 1, 2, 3, 4, 5 hoặc 6 chấm.</li>\n        </ul>\n        <p><strong>2. Sự kiện:</strong> Sự kiện là một hiện tượng có thể xảy ra hoặc không xảy ra trong một phép thử. Sự kiện xảy ra khi kết quả của phép thử thuộc tập các kết quả thuận lợi cho sự kiện đó.</p>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"150\" cy=\"42\" r=\"22\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n        <text x=\"150\" y=\"47\" font-weight=\"bold\" font-size=\"13\" fill=\"#854d0e\" text-anchor=\"middle\">S/N</text>\n        <text x=\"150\" y=\"78\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"middle\">Đồng xu: 2 kết quả</text>\n\n        <rect x=\"310\" y=\"22\" width=\"40\" height=\"40\" rx=\"6\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n        <circle cx=\"320\" cy=\"32\" r=\"2.5\" fill=\"#dc2626\"/>\n        <circle cx=\"340\" cy=\"52\" r=\"2.5\" fill=\"#dc2626\"/>\n        <circle cx=\"330\" cy=\"42\" r=\"2.5\" fill=\"#dc2626\"/>\n        <text x=\"330\" y=\"78\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"middle\">Xúc xắc: 6 kết quả (1..6)</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Gieo một con xúc xắc 6 mặt 1 lần. Sự kiện nào sau đây KHÔNG THỂ xảy ra?",
      "options": [
        "(Recommended) Xuất hiện mặt có 7 chấm",
        "Xuất hiện mặt có số chấm là số chẵn",
        "Xuất hiện mặt có 1 chấm",
        "Xuất hiện mặt có số chấm nhỏ hơn 6"
      ],
      "ans": 0,
      "expl": "Con xúc xắc tiêu chuẩn chỉ có các mặt từ 1 đến 6 chấm nên sự kiện xuất hiện mặt 7 chấm là sự kiện không thể xảy ra."
    }
  },
  {
    "id": 43,
    "vol": 2,
    "chapter": "Chương IX: Dữ liệu và xác suất thực nghiệm",
    "chapterId": 9,
    "lessonNum": "Bài 43",
    "title": "Xác suất thực nghiệm",
    "desc": "Công thức xác suất thực nghiệm k/n (số lần sự kiện xảy ra / tổng số lần thực hiện).",
    "content": "\n      <div class=\"space-y-3 text-sm text-gray-700 dark:text-gray-300\">\n        <p><strong>1. Khái niệm:</strong> Khi thực hiện lặp lại một thí nghiệm hoặc trò chơi nhiều lần, tỉ số giữa số lần xảy ra sự kiện và tổng số lần thực hiện thí nghiệm được gọi là <em>xác suất thực nghiệm</em> của sự kiện đó.</p>\n        <p><strong>2. Công thức tính xác suất thực nghiệm:</strong></p>\n        <div class=\"p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 text-center\">\n          <div class=\"font-mono font-black text-base text-rose-700 dark:text-rose-300\">\n            \\(\\text{Xác suất thực nghiệm} = \\frac{k}{n}\\)\n          </div>\n          <div class=\"text-xs text-gray-600 dark:text-gray-300 mt-1\">\n            • \\(k\\): Số lần sự kiện xảy ra<br>\n            • \\(n\\): Tổng số lần thực hiện thí nghiệm (\\(n \\in \\mathbb{N}^*\\))\n          </div>\n        </div>\n      </div>\n    ",
    "svg": "\n      <svg viewBox=\"0 0 500 85\" class=\"w-full max-w-md mx-auto h-auto select-none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"15\" width=\"460\" height=\"55\" rx=\"8\" fill=\"#fee2e2\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n        <text x=\"250\" y=\"38\" fill=\"#b91c1c\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Xác suất thực nghiệm = k / n</text>\n        <text x=\"250\" y=\"56\" fill=\"#991b1b\" font-size=\"11\" text-anchor=\"middle\">k = Số lần sự kiện xảy ra  •  n = Tổng số lần thử nghiệm</text>\n      </svg>\n    ",
    "quiz": {
      "q": "Tung đồng xu 30 lần, thấy có 18 lần xuất hiện mặt sấp. Xác suất thực nghiệm xuất hiện mặt sấp là:",
      "options": [
        "(Recommended) 18/30 = 60%",
        "12/30 = 40%",
        "18/12",
        "1/2 = 50%"
      ],
      "ans": 0,
      "expl": "Xác suất thực nghiệm = k / n = 18 / 30 = 3/5 = 60%."
    }
  }
];

module.exports = { lessonsFullData };
console.log('Toan 6 Full Lessons Data (43 detailed lessons) ready.');
