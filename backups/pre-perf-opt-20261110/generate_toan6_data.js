const fs = require('fs');

const toan6Data = [
  // ================= TẬP 1 =================
  {
    id: 1,
    volume: 1,
    chapterNum: "Chương I",
    title: "Tập Hợp Các Số Tự Nhiên",
    tag: "SỐ HỌC CƠ BẢN",
    desc: "Tập hợp, phần tử, thứ tự trong ℕ, hệ thập phân, số La Mã, 4 phép tính, lũy thừa và thứ tự thực hiện phép tính.",
    sections: [
      {
        title: "1. Tập hợp và phần tử",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Khái niệm:</strong> Tập hợp là một nhóm các đối tượng có cùng đặc điểm. Phần tử thuộc tập hợp kí hiệu là \\(x \\in A\\), không thuộc kí hiệu là \\(y \\notin A\\).</li>
            <li><strong>Hai cách mô tả tập hợp:</strong>
              <div class="mt-1 pl-4 space-y-1">
                <div>• <em>Liệt kê các phần tử:</em> Viết các phần tử trong cặp dấu ngoặc nhọn \\(\\{\\}\\), ngăn cách bởi dấu chấm phẩy; mỗi phần tử chỉ liệt kê một lần. Ví dụ: \\(A = \\{0; 1; 2; 3; 4\\}\\).</div>
                <div>• <em>Nêu dấu hiệu đặc trưng:</em> Chỉ ra tính chất đặc trưng của các phần tử. Ví dụ: \\(A = \\{x \\in \\mathbb{N} \\mid x < 5\\}\\).</div>
              </div>
            </li>
            <li><strong>Tập hợp số tự nhiên:</strong>
              <div class="mt-1 pl-4 space-y-1">
                <div>• Tập hợp tất cả các số tự nhiên: \\(\\mathbb{N} = \\{0; 1; 2; 3; 4; ...\\}\\).</div>
                <div>• Tập hợp các số tự nhiên khác 0: \\(\\mathbb{N}^* = \\{1; 2; 3; 4; ...\\}\\).</div>
              </div>
            </li>
          </ul>
        `
      },
      {
        title: "2. Ghi số và thứ tự trong tập hợp số tự nhiên",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Hệ thập phân:</strong> Gồm 10 chữ số từ 0 đến 9. Giá trị của mỗi chữ số phụ thuộc vào vị trí (hàng, lớp) của nó trong số đó.</li>
            <li><strong>Viết số thành tổng giá trị các chữ số:</strong>
              <div class="p-2 bg-blue-50 dark:bg-blue-950/40 rounded-lg text-blue-900 dark:text-blue-200 font-mono text-xs my-1">
                \\(\\overline{ab} = a \\times 10 + b\\) (với \\(a \\ne 0\\))<br>
                \\(\\overline{abc} = a \\times 100 + b \\times 10 + c\\) (với \\(a \\ne 0\\))
              </div>
            </li>
            <li><strong>Chữ số La Mã từ 1 đến 30:</strong> Các kí tự cơ bản: <strong>I</strong> = 1, <strong>V</strong> = 5, <strong>X</strong> = 10. Ghép quy ước: IV = 4, IX = 9, XIV = 14, XIX = 19, XX = 20, XXIX = 29, XXX = 30.</li>
            <li><strong>Thứ tự trên tia số gốc \\(O\\):</strong> Điểm biểu diễn số nhỏ hơn nằm bên trái điểm biểu diễn số lớn hơn. Dùng các kí hiệu so sánh: \\(<, >, \\le, \\ge\\).</li>
          </ul>
        `
      },
      {
        title: "3. Các phép tính trong tập hợp số tự nhiên",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Phép cộng và phép trừ:</strong>
              <div class="mt-1 pl-4 space-y-1">
                <div>• Giao hoán: \\(a + b = b + a\\); Kết hợp: \\((a + b) + c = a + (b + c)\\).</div>
                <div>• Điều kiện thực hiện phép trừ \\(a - b\\) trong \\(\\mathbb{N}\\) là \\(a \\ge b\\).</div>
              </div>
            </li>
            <li><strong>Phép nhân và phép chia:</strong>
              <div class="mt-1 pl-4 space-y-1">
                <div>• Giao hoán: \\(a \\cdot b = b \\cdot a\\); Kết hợp: \\((a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)\\).</div>
                <div>• Phân phối của phép nhân đối với phép cộng/trừ: \\(a \\cdot (b \\pm c) = a \\cdot b \\pm a \\cdot c\\).</div>
                <div>• Phép chia có dư: \\(a = b \\cdot q + r\\) với số dư \\(0 \\le r < b\\) (nếu \\(r = 0\\) là phép chia hết).</div>
              </div>
            </li>
          </ul>
        `
      },
      {
        title: "4. Luỹ thừa với số mũ tự nhiên & Thứ tự thực hiện phép tính",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Định nghĩa luỹ thừa:</strong> \\(a^n = a \\cdot a \\cdot ... \\cdot a\\) (gồm \\(n\\) thừa số \\(a\\), với \\(n \\in \\mathbb{N}^*\\)). Quy ước: \\(a^1 = a\\); \\(a^0 = 1\\) (với \\(a \\ne 0\\)).</li>
            <li><strong>Quy tắc nhân và chia hai luỹ thừa cùng cơ số:</strong>
              <div class="p-2 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg text-emerald-900 dark:text-emerald-200 font-mono text-xs my-1">
                Nhân: \\(a^m \\cdot a^n = a^{m+n}\\)<br>
                Chia: \\(a^m : a^n = a^{m-n}\\) (với \\(a \\ne 0\\) và \\(m \\ge n\\))
              </div>
            </li>
            <li><strong>Thứ tự thực hiện phép tính chuẩn:</strong>
              <div class="mt-1 pl-4 space-y-1">
                <div>• Biểu thức <em>không có dấu ngoặc:</em> <strong>Luỹ thừa</strong> \\(\\rightarrow\\) <strong>Nhân và chia</strong> \\(\\rightarrow\\) <strong>Cộng và trừ</strong>.</div>
                <div>• Biểu thức <em>có dấu ngoặc:</em> <strong>( )</strong> \\(\\rightarrow\\) <strong>[ ]</strong> \\(\\rightarrow\\) <strong>{ }</strong>.</div>
              </div>
            </li>
          </ul>
        `
      }
    ],
    quizzes: [
      {
        q: "Cho tập hợp M = {x ∈ ℕ* | x ≤ 4}. Viết tập hợp M dưới dạng liệt kê phần tử:",
        options: [
          "(Recommended) M = {1; 2; 3; 4}",
          "M = {0; 1; 2; 3; 4}",
          "M = {1; 2; 3}",
          "M = {0; 1; 2; 3}"
        ],
        ans: 0,
        expl: "Vì x ∈ ℕ* nên x bắt đầu từ 1. Điều kiện x ≤ 4 nên M gồm các phần tử {1; 2; 3; 4}."
      },
      {
        q: "Giá trị của biểu thức 2³ · 2² - 5⁰ bằng bao nhiêu?",
        options: [
          "(Recommended) 31",
          "32",
          "30",
          "24"
        ],
        ans: 0,
        expl: "2³ · 2² = 2^(3+2) = 2⁵ = 32. Vì 5⁰ = 1 nên 32 - 1 = 31."
      }
    ]
  },

  {
    id: 2,
    volume: 1,
    chapterNum: "Chương II",
    title: "Tính Chia Hết Trong Tập Hợp Các Số Tự Nhiên",
    tag: "CHIA HẾT & SỐ NGUYÊN TỐ",
    desc: "Quan hệ chia hết, tính chất chia hết tổng/hiệu, dấu hiệu chia hết 2, 3, 5, 9, số nguyên tố, hợp số, ƯCLN và BCNN.",
    sections: [
      {
        title: "1. Quan hệ chia hết và Tính chất chia hết của một tổng",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Khái niệm:</strong> Cho \\(a, b \\in \\mathbb{N}\\) (\\(b \\ne 0\\)). Nếu có số tự nhiên \\(q\\) sao cho \\(a = b \\cdot q\\) thì ta nói \\(a\\) chia hết cho \\(b\\), kí hiệu \\(a \\ \\vdots \\ b\\). Khi đó \\(a\\) là <em>bội</em> của \\(b\\), còn \\(b\\) là <em>ước</em> của \\(a\\).</li>
            <li><strong>Tính chất chia hết của một tổng / hiệu:</strong>
              <div class="mt-1 pl-4 space-y-1">
                <div>• Nếu \\(a \\ \\vdots \\ m\\) và \\(b \\ \\vdots \\ m\\) thì \\((a + b) \\ \\vdots \\ m\\) và \\((a - b) \\ \\vdots \\ m\\) (với \\(a \\ge b\\)).</div>
                <div>• Nếu \\(a \\ \\vdots \\ m\\) và \\(b \\ \\not\\vdots \\ m\\) thì \\((a + b) \\ \\not\\vdots \\ m\\) và \\((a - b) \\ \\not\\vdots \\ m\\).</div>
              </div>
            </li>
          </ul>
        `
      },
      {
        title: "2. Dấu hiệu chia hết cho 2, 3, 5, 9",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-2 text-xs">
            <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
              <span class="font-bold text-blue-700 dark:text-blue-300">Chia hết cho 2 & 5 (Xét chữ số tận cùng):</span>
              <p class="mt-1 text-gray-600 dark:text-gray-300">• Cho 2: Chữ số tận cùng là 0, 2, 4, 6, 8 (số chẵn).<br>• Cho 5: Chữ số tận cùng là 0 hoặc 5.<br>• Cho cả 2 và 5: Tận cùng là chữ số 0.</p>
            </div>
            <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <span class="font-bold text-amber-700 dark:text-amber-300">Chia hết cho 3 & 9 (Xét tổng các chữ số):</span>
              <p class="mt-1 text-gray-600 dark:text-gray-300">• Cho 9: Tổng các chữ số chia hết cho 9.<br>• Cho 3: Tổng các chữ số chia hết cho 3.<br>• Chú ý: Một số chia hết cho 9 thì chắc chắn chia hết cho 3.</p>
            </div>
          </div>
        `
      },
      {
        title: "3. Số nguyên tố, Hợp số và Phân tích ra thừa số nguyên tố",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Số nguyên tố:</strong> Là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó (ví dụ: 2, 3, 5, 7, 11, 13, 17, 19...). Số 2 là số nguyên tố chẵn duy nhất và nhỏ nhất.</li>
            <li><strong>Hợp số:</strong> Là số tự nhiên lớn hơn 1, có nhiều hơn hai ước (ví dụ: 4, 6, 8, 9, 10...).</li>
            <li><em>Lưu ý đặc biệt:</em> Số 0 và số 1 không phải là số nguyên tố và cũng không phải là hợp số.</li>
            <li><strong>Phân tích ra thừa số nguyên tố:</strong> Mọi hợp số đều có thể viết được dưới dạng tích các thừa số nguyên tố. Ta có thể dùng sơ đồ cây hoặc sơ đồ cột dọc (chia lần lượt cho các số nguyên tố từ nhỏ đến lớn).</li>
          </ul>
        `
      },
      {
        title: "4. Ước chung, Bội chung, ƯCLN và BCNN",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Ước chung lớn nhất (ƯCLN):</strong> Là số lớn nhất trong tập hợp các ước chung.
              <div class="mt-1 pl-4 text-xs">
                Cách tìm: Phân tích các số ra TSNT → Chọn các thừa số nguyên tố <strong>chung</strong> → Lập tích với <strong>số mũ nhỏ nhất</strong>.
              </div>
            </li>
            <li><strong>Phân số tối giản:</strong> Phân số \\(\\frac{a}{b}\\) là tối giản nếu \\(\\text{ƯCLN}(a, b) = 1\\) (khi đó \\(a\\) và \\(b\\) được gọi là hai số nguyên tố cùng nhau).</li>
            <li><strong>Bội chung nhỏ nhất (BCNN):</strong> Là số nhỏ nhất khác 0 trong tập hợp các bội chung.
              <div class="mt-1 pl-4 text-xs">
                Cách tìm: Phân tích các số ra TSNT → Chọn các thừa số nguyên tố <strong>chung và riêng</strong> → Lập tích với <strong>số mũ lớn nhất</strong>. Ứng dụng quan trọng nhất để tìm mẫu chung khi quy đồng phân số.
              </div>
            </li>
          </ul>
        `
      }
    ],
    quizzes: [
      {
        q: "Số nào sau đây vừa chia hết cho 2, vừa chia hết cho 5, vừa chia hết cho 9?",
        options: [
          "(Recommended) 270",
          "135",
          "182",
          "340"
        ],
        ans: 0,
        expl: "Số 270 có tận cùng là 0 (chia hết cho 2 và 5) và có tổng các chữ số 2 + 7 + 0 = 9 chia hết cho 9."
      },
      {
        q: "Ước chung lớn nhất của 18 và 24 là:",
        options: [
          "(Recommended) 6",
          "12",
          "3",
          "72"
        ],
        ans: 0,
        expl: "18 = 2 · 3² và 24 = 2³ · 3. Các thừa số chung là 2 và 3 với số mũ nhỏ nhất là 1, do đó ƯCLN(18, 24) = 2 · 3 = 6."
      }
    ]
  },

  {
    id: 3,
    volume: 1,
    chapterNum: "Chương III",
    title: "Số Nguyên",
    tag: "TẬP HỢP SỐ NGUYÊN ℤ",
    desc: "Tập hợp số nguyên ℤ, trục số, số đối, so sánh số nguyên, các phép tính cộng trừ nhân chia và quy tắc dấu ngoặc.",
    sections: [
      {
        title: "1. Tập hợp các số nguyên và Trục số",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Tập hợp số nguyên \\(\\mathbb{Z}\\):</strong> Gồm các số nguyên âm, số 0 và các số nguyên dương:
              <div class="p-2 bg-blue-50 dark:bg-blue-950/40 rounded-lg text-blue-900 dark:text-blue-200 font-mono text-xs my-1 text-center">
                \\(\\mathbb{Z} = \\{...; -3; -2; -1; 0; 1; 2; 3; ...\\}\\)
              </div>
            </li>
            <li><strong>Trục số:</strong> Đường thẳng nằm ngang có mũi tên chỉ chiều dương (từ trái sang phải), có điểm gốc 0 và các vạch chia đơn vị đều nhau. Bên trái gốc 0 là các số nguyên âm, bên phải là các số nguyên dương.</li>
            <li><strong>Số đối:</strong> Hai số nguyên trên trục số nằm ở hai phía của gốc 0 và cách đều gốc 0 gọi là hai số đối nhau. Số đối của \\(a\\) là \\(-a\\), số đối của 0 là 0. Chú ý: \\(-(-a) = a\\).</li>
            <li><strong>So sánh số nguyên:</strong> Mọi số nguyên âm đều nhỏ hơn 0 và nhỏ hơn mọi số nguyên dương. Với hai số nguyên âm, số nào có phần số tự nhiên lớn hơn thì số đó nhỏ hơn (nếu \\(a > b > 0\\) thì \\(-a < -b\\)).</li>
          </ul>
        `
      },
      {
        title: "2. Các phép tính với số nguyên",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Cộng hai số nguyên cùng dấu:</strong> Cộng phần số tự nhiên rồi đặt dấu chung trước kết quả. Ví dụ: \\((-3) + (-5) = -(3+5) = -8\\).</li>
            <li><strong>Cộng hai số nguyên khác dấu:</strong> Lấy phần số tự nhiên lớn hơn trừ đi phần số tự nhiên nhỏ hơn rồi đặt dấu của số có phần tự nhiên lớn hơn trước kết quả. Hai số đối nhau luôn có tổng bằng 0: \\(a + (-a) = 0\\).</li>
            <li><strong>Phép trừ số nguyên:</strong> Muốn trừ số nguyên \\(a\\) cho số nguyên \\(b\\), ta cộng \\(a\\) với số đối của \\(b\\):
              <div class="p-2 bg-rose-50 dark:bg-rose-950/40 rounded-lg text-rose-900 dark:text-rose-200 font-mono text-xs my-1 text-center">
                \\(a - b = a + (-b)\\)
              </div>
            </li>
            <li><strong>Phép nhân hai số nguyên:</strong>
              <div class="mt-1 pl-4 space-y-1 text-xs">
                <div>• Cùng dấu \\(\\rightarrow\\) Kết quả Dương: \\((+) \\cdot (+) = (+)\\); \\((-) \\cdot (-) = (+)\\).</div>
                <div>• Khác dấu \\(\\rightarrow\\) Kết quả Âm: \\((+) \\cdot (-) = (-)\\); \\((-) \\cdot (+) = (-)\\).</div>
              </div>
            </li>
          </ul>
        `
      },
      {
        title: "3. Quy tắc dấu ngoặc & Quan hệ chia hết trong ℤ",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Quy tắc bỏ dấu ngoặc:</strong>
              <div class="mt-1 pl-4 space-y-1">
                <div>• Khi bỏ dấu ngoặc có dấu <strong>\\(+\\)</strong> đằng trước: <em>Giữ nguyên</em> dấu của các số hạng bên trong: \\(+(a - b + c) = a - b + c\\).</div>
                <div>• Khi bỏ dấu ngoặc có dấu <strong>\\(-\\)</strong> đằng trước: <em>Đổi dấu tất cả</em> các số hạng bên trong: \\(-(a - b + c) = -a + b - c\\).</div>
              </div>
            </li>
            <li><strong>Quan hệ chia hết trong \\(\\mathbb{Z}\\):</strong> Cho \\(a, b \\in \\mathbb{Z}\\) (\\(b \\ne 0\\)). Nếu có \\(q \\in \\mathbb{Z}\\) sao cho \\(a = b \\cdot q\\) thì \\(a\\) chia hết cho \\(b\\). Quy tắc xác định dấu của thương hoàn toàn tương tự như phép nhân hai số nguyên.</li>
          </ul>
        `
      }
    ],
    quizzes: [
      {
        q: "Kết quả của phép tính (-15) - (-25) bằng:",
        options: [
          "(Recommended) 10",
          "-40",
          "-10",
          "40"
        ],
        ans: 0,
        expl: "Theo quy tắc trừ số nguyên: (-15) - (-25) = (-15) + 25 = 25 - 15 = 10."
      },
      {
        q: "Tích của (-4) · (-5) · (-2) là:",
        options: [
          "(Recommended) -40",
          "40",
          "-20",
          "20"
        ],
        ans: 0,
        expl: "(-4) · (-5) = +20; sau đó (+20) · (-2) = -40 (tích của một số lẻ thừa số nguyên âm mang dấu âm)."
      }
    ]
  },

  {
    id: 4,
    volume: 1,
    chapterNum: "Chương IV",
    title: "Một Số Hình Phẳng Trong Thực Tiễn",
    tag: "HÌNH HỌC TRỰC QUAN",
    desc: "Đặc điểm hình học và công thức chu vi, diện tích: tam giác đều, hình vuông, lục giác đều, hình chữ nhật, hình thoi, hình bình hành, hình thang cân.",
    sections: [
      {
        title: "1. Đặc điểm nhận biết các hình phẳng cơ bản",
        content: `
          <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <div>• <strong>Tam giác đều:</strong> 3 cạnh bằng nhau, 3 góc bằng nhau và đều bằng \\(60^\\circ\\).</div>
            <div>• <strong>Hình vuông:</strong> 4 cạnh bằng nhau, 4 góc vuông (\\(90^\\circ\\)), 2 đường chéo bằng nhau và vuông góc tại trung điểm.</div>
            <div>• <strong>Hình lục giác đều:</strong> 6 cạnh bằng nhau, 6 góc bằng nhau và bằng \\(120^\\circ\\), 3 đường chéo chính bằng nhau và cắt nhau tại trung điểm.</div>
            <div>• <strong>Hình chữ nhật:</strong> 4 góc vuông, các cạnh đối song song và bằng nhau, 2 đường chéo bằng nhau và cắt nhau tại trung điểm.</div>
            <div>• <strong>Hình thoi:</strong> 4 cạnh bằng nhau, các cạnh đối song song, các góc đối bằng nhau, 2 đường chéo vuông góc với nhau tại trung điểm.</div>
            <div>• <strong>Hình bình hành:</strong> Các cạnh đối song song và bằng nhau, các góc đối bằng nhau, 2 đường chéo cắt nhau tại trung điểm của mỗi đường.</div>
            <div>• <strong>Hình thang cân:</strong> Hai đáy song song, hai cạnh bên bằng nhau, hai góc kề một đáy bằng nhau, hai đường chéo bằng nhau.</div>
          </div>
        `
      },
      {
        title: "2. Bảng công thức tính Chu vi (C) và Diện tích (S)",
        content: `
          <div class="overflow-x-auto my-2">
            <table class="w-full text-xs text-left border border-gray-200 dark:border-gray-700">
              <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                <tr>
                  <th class="p-2 border">Hình</th>
                  <th class="p-2 border">Các đại lượng</th>
                  <th class="p-2 border">Chu vi \\((C)\\)</th>
                  <th class="p-2 border">Diện tích \\((S)\\)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700 text-gray-600 dark:text-gray-300">
                <tr>
                  <td class="p-2 font-bold">Hình vuông</td>
                  <td class="p-2">Cạnh \\(a\\)</td>
                  <td class="p-2 font-mono">\\(C = 4a\\)</td>
                  <td class="p-2 font-mono text-blue-600 font-bold">\\(S = a^2\\)</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold">Hình chữ nhật</td>
                  <td class="p-2">Chiều dài \\(a\\), chiều rộng \\(b\\)</td>
                  <td class="p-2 font-mono">\\(C = 2(a + b)\\)</td>
                  <td class="p-2 font-mono text-blue-600 font-bold">\\(S = a \\cdot b\\)</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold">Hình bình hành</td>
                  <td class="p-2">Cạnh đáy \\(a\\), cạnh bên \\(b\\), chiều cao \\(h\\)</td>
                  <td class="p-2 font-mono">\\(C = 2(a + b)\\)</td>
                  <td class="p-2 font-mono text-blue-600 font-bold">\\(S = a \\cdot h\\)</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold">Hình thoi</td>
                  <td class="p-2">Cạnh \\(m\\), độ dài 2 đường chéo \\(a, b\\)</td>
                  <td class="p-2 font-mono">\\(C = 4m\\)</td>
                  <td class="p-2 font-mono text-blue-600 font-bold">\\(S = \\frac{1}{2} a \\cdot b\\)</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold">Hình thang cân</td>
                  <td class="p-2">Đáy \\(a, b\\), cạnh bên \\(c, d\\), chiều cao \\(h\\)</td>
                  <td class="p-2 font-mono">\\(C = a + b + c + d\\)</td>
                  <td class="p-2 font-mono text-blue-600 font-bold">\\(S = \\frac{1}{2}(a + b) \\cdot h\\)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    quizzes: [
      {
        q: "Một mảnh vườn hình thoi có độ dài hai đường chéo là 8 m và 6 m. Diện tích mảnh vườn đó là:",
        options: [
          "(Recommended) 24 m²",
          "48 m²",
          "14 m²",
          "28 m²"
        ],
        ans: 0,
        expl: "Diện tích hình thoi bằng nửa tích hai đường chéo: S = ½ · (8 · 6) = 24 m²."
      },
      {
        q: "Hình thang cân có độ dài hai đáy lần lượt là 5 cm và 9 cm, chiều cao là 4 cm. Diện tích của hình thang cân là:",
        options: [
          "(Recommended) 28 cm²",
          "56 cm²",
          "36 cm²",
          "18 cm²"
        ],
        ans: 0,
        expl: "Diện tích hình thang cân: S = ½ · (a + b) · h = ½ · (5 + 9) · 4 = ½ · 14 · 4 = 28 cm²."
      }
    ]
  },

  {
    id: 5,
    volume: 1,
    chapterNum: "Chương V",
    title: "Tính Đối Xứng Của Hình Phẳng Trong Tự Nhiên",
    tag: "ĐỐI XỨNG HỌC",
    desc: "Hình có trục đối xứng, hình có tâm đối xứng, nhận biết tính đối xứng trong tự nhiên, nghệ thuật và đời sống.",
    sections: [
      {
        title: "1. Hình có trục đối xứng",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Khái niệm:</strong> Một hình được gọi là có <em>trục đối xứng</em> nếu có một đường thẳng \\(d\\) chia hình đó thành hai phần sao cho khi gấp hình theo đường thẳng \\(d\\) thì hai phần đó chồng khít lên nhau. Đường thẳng \\(d\\) gọi là trục đối xứng của hình.</li>
            <li><strong>Ví dụ thực tế và hình học:</strong>
              <div class="mt-1 pl-4 space-y-1 text-xs">
                <div>• Đoạn thẳng có 1 trục đối xứng (đường trung trực).</div>
                <div>• Tam giác cân có 1 trục đối xứng; Tam giác đều có 3 trục đối xứng.</div>
                <div>• Hình chữ nhật có 2 trục đối xứng; Hình thoi có 2 trục đối xứng.</div>
                <div>• Hình vuông có 4 trục đối xứng. Hình tròn có vô số trục đối xứng (mọi đường thẳng đi qua tâm).</div>
                <div>• Trong tự nhiên: Cánh bướm, lá cây, chữ in hoa (A, M, T, Y, H...).</div>
              </div>
            </li>
          </ul>
        `
      },
      {
        title: "2. Hình có tâm đối xứng",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Khái niệm:</strong> Một hình được gọi là có <em>tâm đối xứng</em> nếu có một điểm \\(O\\) sao cho khi quay hình đó quanh điểm \\(O\\) đúng một nửa vòng (\\(180^\\circ\\)) thì hình đó lại trùng khít với chính nó. Điểm \\(O\\) gọi là tâm đối xứng của hình.</li>
            <li><strong>Ví dụ thực tế và hình học:</strong>
              <div class="mt-1 pl-4 space-y-1 text-xs">
                <div>• Đoạn thẳng có tâm đối xứng là trung điểm của đoạn thẳng đó.</div>
                <div>• Hình bình hành, hình chữ nhật, hình thoi, hình vuông: Tâm đối xứng là giao điểm của hai đường chéo.</div>
                <div>• Lục giác đều: Tâm đối xứng là giao điểm của các đường chéo chính.</div>
                <div>• Hình tròn: Tâm đối xứng chính là tâm \\(O\\) của đường tròn.</div>
                <div>• Chú ý: Tam giác đều <strong>không</strong> có tâm đối xứng!</div>
              </div>
            </li>
          </ul>
        `
      }
    ],
    quizzes: [
      {
        q: "Hình nào sau đây có trục đối xứng nhưng KHÔNG có tâm đối xứng?",
        options: [
          "(Recommended) Tam giác đều",
          "Hình vuông",
          "Hình chữ nhật",
          "Hình thoi"
        ],
        ans: 0,
        expl: "Tam giác đều có 3 trục đối xứng nhưng khi quay 180° quanh trọng tâm sẽ bị lộn ngược, không trùng khớp với chính nó nên không có tâm đối xứng."
      },
      {
        q: "Hình vuông có bao nhiêu trục đối xứng?",
        options: [
          "(Recommended) 4 trục đối xứng",
          "2 trục đối xứng",
          "1 trục đối xứng",
          "Vô số trục đối xứng"
        ],
        ans: 0,
        expl: "Hình vuông có 4 trục đối xứng: gồm 2 đường trung trực của các cạnh đối và 2 đường chéo."
      }
    ]
  },

  // ================= TẬP 2 =================
  {
    id: 6,
    volume: 2,
    chapterNum: "Chương VI",
    title: "Phân Số",
    tag: "PHÂN SỐ NÂNG CAO",
    desc: "Mở rộng khái niệm phân số, hai phân số bằng nhau, rút gọn, so sánh, hỗn số, các phép tính và hai bài toán cơ bản về phân số.",
    sections: [
      {
        title: "1. Khái niệm phân số và Hai phân số bằng nhau",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Mở rộng khái niệm phân số:</strong> Phân số là biểu thức có dạng \\(\\frac{a}{b}\\) với \\(a, b \\in \\mathbb{Z}, b \\ne 0\\) (\\(a\\) là tử số, \\(b\\) là mẫu số). Mọi số nguyên \\(a\\) đều viết được dưới dạng phân số là \\(\\frac{a}{1}\\).</li>
            <li><strong>Hai phân số bằng nhau:</strong>
              <div class="p-2 bg-blue-50 dark:bg-blue-950/40 rounded-lg text-blue-900 dark:text-blue-200 font-mono text-xs my-1 text-center">
                \\(\\frac{a}{b} = \\frac{c}{d} \\iff a \\cdot d = b \\cdot c\\)
              </div>
            </li>
            <li><strong>Tính chất cơ bản của phân số:</strong>
              <div class="mt-1 pl-4 space-y-1 text-xs">
                <div>• Nhân cả tử và mẫu với cùng một số nguyên \\(m \\ne 0\\): \\(\\frac{a}{b} = \\frac{a \\cdot m}{b \\cdot m}\\).</div>
                <div>• Chia cả tử và mẫu cho cùng một ước chung \\(n\\): \\(\\frac{a}{b} = \\frac{a : n}{b : n}\\) (ứng dụng để rút gọn phân số).</div>
              </div>
            </li>
          </ul>
        `
      },
      {
        title: "2. So sánh phân số và Hỗn số dương",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>So sánh hai phân số:</strong>
              <div class="mt-1 pl-4 space-y-1">
                <div>• Luôn đổi phân số có mẫu âm thành mẫu dương: \\(\\frac{a}{-b} = \\frac{-a}{b}\\).</div>
                <div>• Quy đồng mẫu dương rồi so sánh các tử số: phân số nào có tử lớn hơn thì lớn hơn.</div>
              </div>
            </li>
            <li><strong>Hỗn số dương:</strong> Viết dưới dạng \\(a\\frac{b}{c} = a + \\frac{b}{c}\\) (với \\(a \\in \\mathbb{N}, 0 < \\frac{b}{c} < 1\\)). Chuyển đổi: \\(a\\frac{b}{c} = \\frac{a \\cdot c + b}{c}\\).</li>
          </ul>
        `
      },
      {
        title: "3. Các phép tính phân số & Phân số nghịch đảo",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Cộng và trừ:</strong> Cùng mẫu: \\(\\frac{a}{m} + \\frac{b}{m} = \\frac{a + b}{m}\\). Khác mẫu thì quy đồng mẫu số chung trước khi cộng/trừ.</li>
            <li><strong>Phép nhân:</strong> Nhân tử với tử, mẫu với mẫu: \\(\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}\\).</li>
            <li><strong>Phân số nghịch đảo:</strong> Hai số có tích bằng 1 gọi là nghịch đảo của nhau. Phân số nghịch đảo của \\(\\frac{a}{b}\\) là \\(\\frac{b}{a}\\) (với \\(a, b \\ne 0\\)).</li>
            <li><strong>Phép chia:</strong> Muốn chia cho một phân số khác 0, ta nhân số bị chia với phân số nghịch đảo của số chia: \\(\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}\\).</li>
          </ul>
        `
      },
      {
        title: "4. Hai bài toán cơ bản về phân số",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-2 text-xs">
            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <span class="font-bold text-emerald-700 dark:text-emerald-300">BÀI TOÁN 1: Tìm giá trị phân số của một số</span>
              <p class="mt-1 text-gray-600 dark:text-gray-300">Muốn tìm \\(\\frac{m}{n}\\) của số \\(a\\) cho trước, ta tính: <br><strong class="font-mono text-sm text-emerald-600">\\(a \\cdot \\frac{m}{n}\\)</strong></p>
            </div>
            <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
              <span class="font-bold text-amber-700 dark:text-amber-300">BÀI TOÁN 2: Tìm một số biết giá trị phân số của nó</span>
              <p class="mt-1 text-gray-600 dark:text-gray-300">Muốn tìm một số biết \\(\\frac{m}{n}\\) của nó bằng \\(b\\), ta tính: <br><strong class="font-mono text-sm text-amber-600">\\(b : \\frac{m}{n}\\)</strong></p>
            </div>
          </div>
        `
      }
    ],
    quizzes: [
      {
        q: "Tìm x biết x - 1/3 = 5/6:",
        options: [
          "(Recommended) 7/6",
          "1/2",
          "1",
          "4/3"
        ],
        ans: 0,
        expl: "x = 5/6 + 1/3 = 5/6 + 2/6 = 7/6."
      },
      {
        q: "Tìm một số biết 3/5 của số đó bằng 24:",
        options: [
          "(Recommended) 40",
          "14.4",
          "36",
          "60"
        ],
        ans: 0,
        expl: "Theo bài toán 2 về phân số: Số cần tìm = 24 : (3/5) = 24 · (5/3) = 40."
      }
    ]
  },

  {
    id: 7,
    volume: 2,
    chapterNum: "Chương VII",
    title: "Số Thập Phân",
    tag: "SỐ THẬP PHÂN & TỈ SỐ %",
    desc: "Số thập phân, làm tròn, ước lượng, tỉ số và tỉ số phần trăm, các dạng toán tính phần trăm thực tế.",
    sections: [
      {
        title: "1. Số thập phân và Các phép tính số thập phân",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Phân số thập phân:</strong> Là phân số có mẫu số là luỹ thừa của 10 (như 10, 100, 1000...). Phân số thập phân viết được dưới dạng số thập phân gồm phần nguyên và phần thập phân ngăn cách bởi dấu phẩy.</li>
            <li><strong>Số thập phân âm:</strong> Số đối của số thập phân dương \\(a\\) là số thập phân âm \\(-a\\).</li>
            <li><strong>Các phép tính:</strong> Phép cộng, trừ, nhân, chia số thập phân tuân theo quy tắc dấu hoàn toàn tương tự như số nguyên (nhân chia cùng dấu ra dương, khác dấu ra âm).</li>
          </ul>
        `
      },
      {
        title: "2. Làm tròn số thập phân và Ước lượng",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Quy tắc làm tròn:</strong>
              <div class="mt-1 pl-4 space-y-1">
                <div>• Nếu chữ số ngay sau hàng làm tròn <strong>\\(\\ge 5\\)</strong>: Tăng chữ số hàng làm tròn thêm 1 đơn vị, thay các chữ số sau đó bằng số 0 (nếu ở phần nguyên) hoặc bỏ đi (nếu ở phần thập phân).</div>
                <div>• Nếu chữ số ngay sau hàng làm tròn <strong>\\(< 5\\)</strong>: Giữ nguyên chữ số hàng làm tròn, thay/bỏ các chữ số phía sau.</div>
              </div>
            </li>
            <li><strong>Ước lượng:</strong> Sử dụng làm tròn để tính nhẩm nhanh và kiểm tra tính hợp lý của kết quả tính toán.</li>
          </ul>
        `
      },
      {
        title: "3. Tỉ số và Tỉ số phần trăm (%)",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Tỉ số của hai số:</strong> Thương trong phép chia số \\(a\\) cho số \\(b\\) (\\(b \\ne 0\\)) gọi là tỉ số của \\(a\\) và \\(b\\), kí hiệu là \\(a : b\\) hoặc \\(\\frac{a}{b}\\).</li>
            <li><strong>Tỉ số phần trăm:</strong> Tỉ số phần trăm của \\(a\\) và \\(b\\) là: \\(\\frac{a}{b} \\cdot 100\\%\\).</li>
            <li><strong>Hai bài toán về tỉ số phần trăm:</strong>
              <div class="mt-1 pl-4 space-y-1 text-xs">
                <div>• Tìm \\(m\\%\\) của số \\(a\\): Tính \\(a \\cdot \\frac{m}{100}\\).</div>
                <div>• Tìm một số biết \\(m\\%\\) của nó là \\(b\\): Tính \\(b : \\frac{m}{100}\\).</div>
              </div>
            </li>
          </ul>
        `
      }
    ],
    quizzes: [
      {
        q: "Làm tròn số 48.375 đến hàng phần mười (chữ số thập phân thứ nhất) ta được:",
        options: [
          "(Recommended) 48.4",
          "48.3",
          "48.38",
          "49.0"
        ],
        ans: 0,
        expl: "Chữ số hàng phần mười là 3. Chữ số ngay sau nó là 7 (≥ 5), do đó tăng 3 lên 1 đơn vị thành 48.4."
      },
      {
        q: "Một lớp học có 40 học sinh, trong đó có 24 học sinh nữ. Tỉ số phần trăm của học sinh nữ so với cả lớp là:",
        options: [
          "(Recommended) 60%",
          "40%",
          "24%",
          "62.5%"
        ],
        ans: 0,
        expl: "Tỉ số phần trăm của học sinh nữ: (24 / 40) · 100% = 0.6 · 100% = 60%."
      }
    ]
  },

  {
    id: 8,
    volume: 2,
    chapterNum: "Chương VIII",
    title: "Những Hình Hình Học Cơ Bản",
    tag: "HÌNH HỌC PHẲNG",
    desc: "Điểm, đường thẳng, tia, đoạn thẳng, trung điểm, góc và phân loại 4 loại góc cơ bản (nhọn, vuông, tù, bẹt).",
    sections: [
      {
        title: "1. Điểm và Đường thẳng",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Điểm và đường thẳng:</strong> Điểm thuộc đường thẳng (\\(M \\in d\\)), điểm không thuộc đường thẳng (\\(N \\notin d\\)).</li>
            <li><strong>Tiên đề:</strong> Có một và chỉ một đường thẳng đi qua hai điểm phân biệt cho trước.</li>
            <li><strong>Ba điểm thẳng hàng:</strong> Khi ba điểm cùng thuộc một đường thẳng. Khi đó có một và chỉ một điểm nằm giữa hai điểm còn lại.</li>
            <li><strong>Hai đường thẳng:</strong> Có thể song song (không có điểm chung), cắt nhau (có duy nhất 1 điểm chung), hoặc trùng nhau.</li>
          </ul>
        `
      },
      {
        title: "2. Tia và Đoạn thẳng",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Tia:</strong> Hình gồm điểm \\(O\\) và một phần đường thẳng bị chia ra bởi điểm \\(O\\) gọi là một tia gốc \\(O\\). Hai tia chung gốc tạo thành một đường thẳng gọi là hai tia đối nhau.</li>
            <li><strong>Đoạn thẳng \\(AB\\):</strong> Là hình gồm điểm \\(A\\), điểm \\(B\\) và tất cả các điểm nằm giữa \\(A\\) và \\(B\\). Độ dài đoạn thẳng luôn là một số dương.</li>
            <li><strong>Trung điểm của đoạn thẳng:</strong> Trung điểm \\(I\\) của đoạn thẳng \\(AB\\) là điểm nằm giữa \\(A, B\\) và cách đều hai đầu mút:
              <div class="p-2 bg-blue-50 dark:bg-blue-950/40 rounded-lg text-blue-900 dark:text-blue-200 font-mono text-xs my-1 text-center">
                \\(IA = IB = \\frac{AB}{2}\\)
              </div>
            </li>
          </ul>
        `
      },
      {
        title: "3. Góc và Số đo góc",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Khái niệm góc:</strong> Góc là hình gồm hai tia chung gốc (gốc chung gọi là đỉnh, hai tia gọi là hai cạnh của góc).</li>
            <li><strong>Phân loại góc theo số đo:</strong>
              <div class="grid grid-cols-2 gap-2 text-xs my-1">
                <div class="p-2 bg-gray-50 dark:bg-gray-800 rounded border"><strong>Góc nhọn:</strong> \\(0^\\circ < \\alpha < 90^\\circ\\)</div>
                <div class="p-2 bg-gray-50 dark:bg-gray-800 rounded border"><strong>Góc vuông:</strong> \\(\\alpha = 90^\\circ\\)</div>
                <div class="p-2 bg-gray-50 dark:bg-gray-800 rounded border"><strong>Góc tù:</strong> \\(90^\\circ < \\alpha < 180^\\circ\\)</div>
                <div class="p-2 bg-gray-50 dark:bg-gray-800 rounded border"><strong>Góc bẹt:</strong> \\(\\alpha = 180^\\circ\\) (2 tia đối)</div>
              </div>
            </li>
          </ul>
        `
      }
    ],
    quizzes: [
      {
        q: "Trên đoạn thẳng AB dài 10 cm, điểm M là trung điểm của AB. Độ dài đoạn thẳng AM bằng:",
        options: [
          "(Recommended) 5 cm",
          "10 cm",
          "2.5 cm",
          "20 cm"
        ],
        ans: 0,
        expl: "Vì M là trung điểm của AB nên AM = AB / 2 = 10 / 2 = 5 cm."
      },
      {
        q: "Góc có số đo bằng 125° là loại góc nào?",
        options: [
          "(Recommended) Góc tù",
          "Góc nhọn",
          "Góc vuông",
          "Góc bẹt"
        ],
        ans: 0,
        expl: "Vì 90° < 125° < 180° nên góc 125° là góc tù."
      }
    ]
  },

  {
    id: 9,
    volume: 2,
    chapterNum: "Chương IX",
    title: "Dữ Liệu Và Xác Suất Thực Nghiệm",
    tag: "THỐNG KÊ & XÁC SUẤT",
    desc: "Thu thập dữ liệu, phân loại số/không là số, biểu đồ tranh, biểu đồ cột, biểu đồ cột kép và xác suất thực nghiệm k/n.",
    sections: [
      {
        title: "1. Thu thập và Tổ chức dữ liệu",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Dữ liệu thống kê:</strong> Các thông tin thu thập được như số liệu, chữ cái, hình ảnh... gọi là dữ liệu.
              <div class="mt-1 pl-4 space-y-1 text-xs">
                <div>• <em>Dữ liệu là số:</em> Chiều cao, cân nặng, điểm số, nhiệt độ...</div>
                <div>• <em>Dữ liệu không phải là số:</em> Tên màu sắc, sở thích, giới tính, xếp loại học lực...</div>
              </div>
            </li>
            <li><strong>Tính hợp lý của dữ liệu:</strong> Dữ liệu thu thập cần phải đúng định dạng và phù hợp với thực tế (ví dụ điểm số không được âm hay lớn hơn 10).</li>
            <li><strong>Phương pháp thu thập:</strong> Quan sát, lập phiếu hỏi khảo sát, đo đạc trực tiếp, làm thí nghiệm, tra cứu sách báo / internet.</li>
          </ul>
        `
      },
      {
        title: "2. Biểu diễn dữ liệu bằng bảng và biểu đồ",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Bảng thống kê:</strong> Bảng gồm các hàng và cột để trình bày dữ liệu một cách khoa học, rõ ràng.</li>
            <li><strong>Biểu đồ tranh:</strong> Dùng các biểu tượng, hình vẽ để biểu diễn số lượng (có chú thích 1 biểu tượng thay thế cho bao nhiêu đối tượng).</li>
            <li><strong>Biểu đồ cột:</strong> Dùng các cột có chiều rộng bằng nhau, chiều cao tương ứng với số liệu của từng đối tượng.</li>
            <li><strong>Biểu đồ cột kép:</strong> Dùng để ghép hai cột cạnh nhau nhằm so sánh trực tiếp hai dãy dữ liệu cùng loại của các đối tượng (ví dụ so sánh số học sinh giỏi nam và nữ của các lớp).</li>
          </ul>
        `
      },
      {
        title: "3. Xác suất thực nghiệm",
        content: `
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><strong>Sự kiện trong trò chơi, thí nghiệm:</strong> Mỗi lần thực hiện thí nghiệm (tung đồng xu, gieo xúc xắc...) ta được một kết quả. Sự kiện có thể xảy ra hoặc không xảy ra.</li>
            <li><strong>Công thức tính Xác suất thực nghiệm:</strong>
              <div class="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 my-2 text-center">
                <span class="text-xs text-rose-600 dark:text-rose-400 font-bold block mb-1">CÔNG THỨC XÁC SUẤT THỰC NGHIỆM</span>
                <span class="font-mono text-base font-black text-rose-700 dark:text-rose-300">\\(\\text{Xác suất thực nghiệm} = \\frac{k}{n} = \\frac{\\text{Số lần sự kiện xảy ra}}{\\text{Tổng số lần thực hiện thí nghiệm}}\\))</span>
              </div>
            </li>
          </ul>
        `
      }
    ],
    quizzes: [
      {
        q: "Gieo một con xúc xắc 6 mặt 50 lần, thấy có 12 lần xuất hiện mặt 6 chấm. Xác suất thực nghiệm xuất hiện mặt 6 chấm là:",
        options: [
          "(Recommended) 12/50 = 24%",
          "6/50 = 12%",
          "1/6 ≈ 16.7%",
          "38/50 = 76%"
        ],
        ans: 0,
        expl: "Xác suất thực nghiệm = k / n = 12 / 50 = 0.24 = 24%."
      },
      {
        q: "Dạng biểu đồ nào sau đây thích hợp nhất để so sánh số lượng học sinh Giỏi giữa học kì 1 và học kì 2 của 4 lớp khối 6?",
        options: [
          "(Recommended) Biểu đồ cột kép",
          "Biểu đồ tranh",
          "Biểu đồ cột đơn",
          "Bảng phân phối ngẫu nhiên"
        ],
        ans: 0,
        expl: "Biểu đồ cột kép được thiết kế đặc thù để so sánh 2 dãy số liệu cùng loại (học kì 1 và học kì 2) trên cùng các đối tượng (4 lớp)."
      }
    ]
  }
];

module.exports = { toan6Data };
console.log('Toan 6 Data (9 chuong) ready.');
