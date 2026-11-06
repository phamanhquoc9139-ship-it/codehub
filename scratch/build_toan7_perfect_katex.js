const fs = require('fs');

// Load raw data and SVGs
const { rawChapters } = require('./generate_math7_like_math6.js');
const { allLessons: baseLessons } = require('./generate_math7_like_math6.js');

// Map of beautifully crafted KaTeX content for each of the 37 lessons
const lessonMathContent = {
  1: {
    cleanTitle: "Tập hợp các số hữu tỉ",
    cleanChap: "Số hữu tỉ",
    desc: "Khái niệm số hữu tỉ, số đối, biểu diễn trên trục số và so sánh hai số hữu tỉ.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Khái niệm số hữu tỉ và tập hợp \\(\\mathbb{Q}\\):</strong></p>
        <p>Số hữu tỉ là số viết được dưới dạng phân số \\(\\frac{a}{b}\\) với \\(a, b \\in \\mathbb{Z}, b \\neq 0\\). Tập hợp các số hữu tỉ được kí hiệu là \\(\\mathbb{Q}\\).</p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          • Kí hiệu: \\(\\mathbb{Q} = \\left\\{ \\frac{a}{b} \\;\\middle|\\; a, b \\in \\mathbb{Z}, b \\ne 0 \\right\\}\\)<br>
          • Mối quan hệ giữa các tập hợp số: \\(\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}\\).<br>
          • Số đối: Hai số hữu tỉ đối nhau có tổng bằng 0: \\(x + (-x) = 0\\).
        </div>
        <p><strong>2. Biểu diễn số hữu tỉ trên trục số &amp; So sánh:</strong></p>
        <ul class="list-disc pl-5 space-y-1 text-xs">
          <li>Mỗi số hữu tỉ được biểu diễn bởi một điểm trên trục số. Điểm biểu diễn số hữu tỉ \\(x\\) gọi là điểm \\(x\\).</li>
          <li>Với hai số hữu tỉ bất kì \\(x, y\\), ta luôn có: hoặc \\(x < y\\), hoặc \\(x > y\\), hoặc \\(x = y\\).</li>
          <li>Nếu \\(x < y\\) thì trên trục số nằm ngang, điểm \\(x\\) nằm bên trái điểm \\(y\\).</li>
          <li>Số hữu tỉ lớn hơn 0 gọi là số hữu tỉ dương; nhỏ hơn 0 gọi là số hữu tỉ âm. Số 0 không là số hữu tỉ dương cũng không là số hữu tỉ âm.</li>
        </ul>
        <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs">
          <strong class="text-amber-800 dark:text-amber-300 block mb-1">Ví dụ minh họa chuẩn:</strong>
          <p class="font-medium"><strong>Đề bài:</strong> So sánh hai số hữu tỉ \\(x = -\\frac{2}{3}\\) và \\(y = -\\frac{3}{4}\\).</p>
          <p class="mt-1 font-mono text-gray-800 dark:text-gray-200"><strong>Lời giải:</strong> Quy đồng mẫu dương: \\(x = -\\frac{8}{12}\\); \\(y = -\\frac{9}{12}\\). Vì \\(-8 > -9\\) nên \\(-\\frac{8}{12} > -\\frac{9}{12}\\), do đó \\(-\\frac{2}{3} > -\\frac{3}{4}\\).</p>
        </div>
      </div>
    `,
    quiz: {
      q: "Số đối của số hữu tỉ \\(-\\frac{3}{5}\\) là số nào?",
      options: [
        "(Recommended) \\(\\frac{3}{5}\\)",
        "\\(-\\frac{5}{3}\\)",
        "\\(\\frac{5}{3}\\)",
        "\\(-\\frac{3}{5}\\)"
      ],
      ans: 0,
      expl: "Số đối của \\(-\\frac{3}{5}\\) là \\(\\frac{3}{5}\\) vì tổng của chúng bằng 0: \\(-\\frac{3}{5} + \\frac{3}{5} = 0\\)."
    }
  },

  2: {
    cleanTitle: "Cộng, trừ, nhân, chia số hữu tỉ",
    cleanChap: "Số hữu tỉ",
    desc: "Quy tắc cộng, trừ, nhân, chia số hữu tỉ và tính chất của các phép toán.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Phép cộng và phép trừ số hữu tỉ:</strong></p>
        <p>Viết hai số hữu tỉ dưới dạng hai phân số có cùng một mẫu dương rồi áp dụng quy tắc cộng, trừ phân số:</p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          \\[\\frac{a}{m} + \\frac{b}{m} = \\frac{a + b}{m} \\quad ; \\quad \\frac{a}{m} - \\frac{b}{m} = \\frac{a - b}{m}\\]
          • Tổng quát: \\(\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{ad \\pm bc}{bd}\\)
        </div>
        <p><strong>2. Phép nhân và phép chia số hữu tỉ:</strong></p>
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs">
          \\[\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d} \\quad ; \\quad \\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c} \\quad (c, d \\ne 0)\\]
          • Tính chất phân phối: \\(a(b \\pm c) = ab \\pm ac\\)
        </div>
        <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs">
          <strong class="text-amber-800 dark:text-amber-300 block mb-1">Ví dụ minh họa chuẩn:</strong>
          <p class="font-medium"><strong>Đề bài:</strong> Tính giá trị biểu thức: \\(A = \\left(-\\frac{2}{3}\\right) + \\frac{5}{6} \\cdot \\left(-\\frac{4}{5}\\right)\\).</p>
          <p class="mt-1 font-mono text-gray-800 dark:text-gray-200"><strong>Lời giải:</strong> Thực hiện phép nhân trước: \\(\\frac{5}{6} \\cdot \\left(-\\frac{4}{5}\\right) = -\\frac{4}{6} = -\\frac{2}{3}\\). Sau đó cộng: \\(A = \\left(-\\frac{2}{3}\\right) + \\left(-\\frac{2}{3}\\right) = -\\frac{4}{3}\\).</p>
        </div>
      </div>
    `,
    quiz: {
      q: "Kết quả của phép tính \\(\\frac{1}{2} - \\left(-\\frac{1}{3}\\right)\\) là:",
      options: [
        "(Recommended) \\(\\frac{5}{6}\\)",
        "\\(\\frac{1}{6}\\)",
        "\\(-\\frac{5}{6}\\)",
        "\\(-\\frac{1}{6}\\)"
      ],
      ans: 0,
      expl: "\\(\\frac{1}{2} - \\left(-\\frac{1}{3}\\right) = \\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}\\)."
    }
  },

  3: {
    cleanTitle: "Lũy thừa với số mũ tự nhiên của một số hữu tỉ",
    cleanChap: "Số hữu tỉ",
    desc: "Định nghĩa lũy thừa, các công thức nhân, chia, lũy thừa của lũy thừa, tích và thương.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Định nghĩa luỹ thừa:</strong></p>
        <p>Lũy thừa bậc \\(n\\) của số hữu tỉ \\(x\\) (kí hiệu là \\(x^n\\), với \\(n \\in \\mathbb{N}^*\\)) là tích của \\(n\\) thừa số bằng \\(x\\):</p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs text-center">
          \\[x^n = \\underbrace{x \\cdot x \\cdot ... \\cdot x}_{n \\text{ thừa số } x} \\quad (x \\in \\mathbb{Q}, n \\in \\mathbb{N}^*)\\]
          • Quy ước: \\(x^1 = x\\) ; \\(x^0 = 1\\) (với \\(x \\ne 0\\)).<br>
          • Luỹ thừa bậc chẵn của số âm là số dương: \\((-x)^{2k} > 0\\). Luỹ thừa bậc lẻ giữ nguyên dấu âm: \\((-x)^{2k+1} < 0\\).<br>
          • Phân biệt rõ: \\((-x)^2 = x^2\\), còn \\(-x^2 = -(x^2)\\).
        </div>

        <p><strong>2. Các công thức lũy thừa quan trọng:</strong></p>
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs space-y-1.5">
          <p>• Nhân hai lũy thừa cùng cơ số: \\[x^m \\cdot x^n = x^{m+n}\\]</p>
          <p>• Chia hai lũy thừa cùng cơ số: \\[x^m : x^n = x^{m-n} \\quad (x \\ne 0, m \\ge n)\\]</p>
          <p>• Lũy thừa của lũy thừa: \\[(x^m)^n = x^{m \\cdot n}\\]</p>
          <p>• Lũy thừa của một tích và một thương: \\[(x \\cdot y)^n = x^n \\cdot y^n \\quad ; \\quad \\left(\\frac{x}{y}\\right)^n = \\frac{x^n}{y^n} \\quad (y \\ne 0)\\]</p>
        </div>

        <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs">
          <strong class="text-amber-800 dark:text-amber-300 block mb-1">Ví dụ minh họa chuẩn:</strong>
          <p class="font-medium"><strong>Đề bài:</strong> Rút gọn biểu thức: \\[P = \\frac{2^3 \\cdot 9^2}{6^3}\\]</p>
          <p class="mt-1 text-gray-800 dark:text-gray-200"><strong>Lời giải:</strong> Phân tích các cơ số về thừa số nguyên tố: \\(9^2 = (3^2)^2 = 3^4\\); \\(6^3 = (2 \\cdot 3)^3 = 2^3 \\cdot 3^3\\). Khi đó:
          \\[P = \\frac{2^3 \\cdot 3^4}{2^3 \\cdot 3^3} = \\frac{2^3}{2^3} \\cdot \\frac{3^4}{3^3} = 1 \\cdot 3 = 3\\]</p>
        </div>
      </div>
    `,
    quiz: {
      q: "Giá trị của biểu thức \\(\\left(-\\frac{1}{2}\\right)^3\\) là:",
      options: [
        "(Recommended) \\(-\\frac{1}{8}\\)",
        "\\(\\frac{1}{8}\\)",
        "\\(-\\frac{1}{6}\\)",
        "\\(\\frac{1}{6}\\)"
      ],
      ans: 0,
      expl: "\\(\\left(-\\frac{1}{2}\\right)^3 = \\frac{(-1)^3}{2^3} = \\frac{-1}{8} = -\\frac{1}{8}\\)."
    }
  },

  4: {
    cleanTitle: "Thứ tự thực hiện phép tính. Quy tắc chuyển vế",
    cleanChap: "Số hữu tỉ",
    desc: "Thứ tự thực hiện các phép tính số hữu tỉ và quy tắc chuyển vế đổi dấu trong đẳng thức.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Thứ tự thực hiện các phép tính:</strong></p>
        <ul class="list-disc pl-5 space-y-1 text-xs">
          <li>Với biểu thức không có dấu ngoặc: <strong>Lũy thừa \\(\\rightarrow\\) Nhân và chia \\(\\rightarrow\\) Cộng và trừ</strong>.</li>
          <li>Với biểu thức có dấu ngoặc: <strong>Ngoặc tròn \\(( ) \\rightarrow\\) Ngoặc vuông \\([ ] \\rightarrow\\) Ngoặc nhọn \\(\\{ \\}\\)</strong>.</li>
        </ul>
        <p><strong>2. Quy tắc chuyển vế:</strong></p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải <strong>đổi dấu</strong> số hạng đó: dấu \\(+\\) đổi thành dấu \\(-\\) và dấu \\(-\\) đổi thành dấu \\(+\\).
          \\[x + a = b \\implies x = b - a\\]
          \\[x - a = b \\implies x = b + a\\]
        </div>
        <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs">
          <strong class="text-amber-800 dark:text-amber-300 block mb-1">Ví dụ minh họa chuẩn:</strong>
          <p class="font-medium"><strong>Đề bài:</strong> Tìm \\(x\\), biết: \\(x - \\frac{1}{3} = \\frac{5}{6}\\).</p>
          <p class="mt-1 font-mono text-gray-800 dark:text-gray-200"><strong>Lời giải:</strong> Chuyển vế \\(-\\frac{1}{3}\\) sang vế phải: \\[x = \\frac{5}{6} + \\frac{1}{3} = \\frac{5}{6} + \\frac{2}{6} = \\frac{7}{6}\\]</p>
        </div>
      </div>
    `,
    quiz: {
      q: "Tìm \\(x\\), biết: \\(x + \\frac{3}{4} = \\frac{1}{2}\\).",
      options: [
        "(Recommended) \\(x = -\\frac{1}{4}\\)",
        "\\(x = \\frac{1}{4}\\)",
        "\\(x = \\frac{5}{4}\\)",
        "\\(x = -\\frac{5}{4}\\)"
      ],
      ans: 0,
      expl: "\\(x = \\frac{1}{2} - \\frac{3}{4} = \\frac{2}{4} - \\frac{3}{4} = -\\frac{1}{4}\\)."
    }
  },

  5: {
    cleanTitle: "Làm quen với số thập phân vô hạn tuần hoàn",
    cleanChap: "Số thực",
    desc: "Số thập phân hữu hạn và số thập phân vô hạn tuần hoàn, chu kì của số thập phân.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Số thập phân hữu hạn và vô hạn tuần hoàn:</strong></p>
        <ul class="list-disc pl-5 space-y-1 text-xs">
          <li>Nếu phân số tối giản với mẫu dương không có ước nguyên tố nào khác 2 và 5 thì phân số đó viết được dưới dạng <strong>số thập phân hữu hạn</strong>. Ví dụ: \\(\\frac{3}{20} = 0,15\\).</li>
          <li>Nếu phân số tối giản với mẫu dương có chứa ước nguyên tố khác 2 và 5 thì phân số đó viết được dưới dạng <strong>số thập phân vô hạn tuần hoàn</strong>. Ví dụ: \\(\\frac{1}{3} = 0,333... = 0,(3)\\).</li>
        </ul>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          • Kí hiệu: Chữ số hoặc cụm chữ số lặp lại vô hạn lần được gọi là <strong>chu kì</strong> và đặt trong dấu ngoặc đơn.<br>
          • Ví dụ: \\(0,4545... = 0,(45)\\) có chu kì là 45; \\(0,1666... = 0,1(6)\\) có chu kì là 6.
        </div>
        <p><strong>2. Mỗi số hữu tỉ được biểu diễn bởi một số thập phân hữu hạn hoặc vô hạn tuần hoàn.</strong></p>
      </div>
    `,
    quiz: {
      q: "Phân số \\(\\frac{5}{12}\\) được viết dưới dạng số thập phân vô hạn tuần hoàn là:",
      options: [
        "(Recommended) \\(0,41(6)\\)",
        "\\(0,(416)\\)",
        "\\(0,4(16)\\)",
        "\\(0,416\\)"
      ],
      ans: 0,
      expl: "Thực hiện phép chia \\(5 : 12 = 0,41666... = 0,41(6)\\)."
    }
  },

  6: {
    cleanTitle: "Số vô tỉ. Căn bậc hai số học",
    cleanChap: "Số thực",
    desc: "Khái niệm số vô tỉ, định nghĩa căn bậc hai số học và tính chất.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Số vô tỉ (tập hợp \\(\\mathbb{I}\\)):</strong></p>
        <p>Số vô tỉ là số viết được dưới dạng <strong>số thập phân vô hạn không tuần hoàn</strong>. Tập hợp các số vô tỉ được kí hiệu là \\(\\mathbb{I}\\). Ví dụ: \\(\\sqrt{2} \\approx 1,4142135...\\); \\(\\pi \\approx 3,1415926...\\).</p>
        <p><strong>2. Căn bậc hai số học:</strong></p>
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs">
          Căn bậc hai số học của một số \\(a\\) không âm (kí hiệu là \\(\\sqrt{a}\\)) là số không âm \\(x\\) sao cho \\(x^2 = a\\).
          \\[\\sqrt{a} = x \\iff x \\ge 0 \\quad \\text{và} \\quad x^2 = a\\]
          • Lưu ý: Số âm không có căn bậc hai số học. \\(\\sqrt{0} = 0\\). Với \\(a > 0\\), ta có \\((\\sqrt{a})^2 = a\\).
        </div>
        <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs">
          <strong class="text-amber-800 dark:text-amber-300 block mb-1">Ví dụ minh họa:</strong>
          <p>• \\(\\sqrt{81} = 9\\) vì \\(9 \\ge 0\\) và \\(9^2 = 81\\).<br>
          • \\(\\sqrt{0,25} = 0,5\\) vì \\(0,5 \\ge 0\\) và \\(0,5^2 = 0,25\\).</p>
        </div>
      </div>
    `,
    quiz: {
      q: "Căn bậc hai số học của 64 là:",
      options: [
        "(Recommended) 8",
        "-8",
        "\\(\\pm 8\\)",
        "4096"
      ],
      ans: 0,
      expl: "\\(\\sqrt{64} = 8\\) vì \\(8 \\ge 0\\) và \\(8^2 = 64\\)."
    }
  },

  7: {
    cleanTitle: "Tập hợp các số thực",
    cleanChap: "Số thực",
    desc: "Tập hợp số thực R, trục số thực, giá trị tuyệt đối và làm tròn số.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Tập hợp số thực \\(\\mathbb{R}\\):</strong></p>
        <p>Số hữu tỉ và số vô tỉ được gọi chung là <strong>số thực</strong>. Tập hợp các số thực được kí hiệu là \\(\\mathbb{R}\\).</p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          \\[\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I} \\quad ; \\quad \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}\\]
          • Mỗi số thực được biểu diễn bởi một điểm trên trục số. Ngược lại, mỗi điểm trên trục số đều biểu diễn một số thực. Trục số thực được lấp đầy liên tục.
        </div>
        <p><strong>2. Giá trị tuyệt đối của một số thực:</strong></p>
        <p>Giá trị tuyệt đối của số thực \\(x\\) (kí hiệu \\(|x|\\)) là khoảng cách từ điểm \\(x\\) đến điểm gốc 0 trên trục số:</p>
        <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 text-xs">
          \\[|x| = \\begin{cases} x & \\text{nếu } x \\ge 0 \\\\ -x & \\text{nếu } x < 0 \\end{cases}\\]
          • \\(|x| \\ge 0\\) với mọi \\(x \\in \\mathbb{R}\\). Hai số đối nhau có giá trị tuyệt đối bằng nhau: \\(|-x| = |x|\\).
        </div>
      </div>
    `,
    quiz: {
      q: "Giá trị của biểu thức \\(|-4,5| + |3,2|\\) là:",
      options: [
        "(Recommended) 7,7",
        "1,3",
        "-1,3",
        "-7,7"
      ],
      ans: 0,
      expl: "\\(|-4,5| + |3,2| = 4,5 + 3,2 = 7,7\\)."
    }
  },

  8: {
    cleanTitle: "Góc ở vị trí đặc biệt. Tia phân giác của một góc",
    cleanChap: "Góc và hai đường thẳng song song",
    desc: "Hai góc kề bù, đối đỉnh, định nghĩa và tính chất của tia phân giác.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Hai góc kề bù và đối đỉnh:</strong></p>
        <ul class="list-disc pl-5 space-y-1 text-xs">
          <li><strong>Hai góc kề bù:</strong> Là hai góc vừa kề nhau vừa bù nhau (có một cạnh chung và hai cạnh còn lại là hai tia đối nhau). Tổng số đo của chúng bằng \\(180^\\circ\\): \\[\\widehat{xOy} + \\widehat{yOz} = 180^\\circ\\]</li>
          <li><strong>Hai góc đối đỉnh:</strong> Mỗi cạnh của góc này là tia đối của một cạnh của góc kia. <strong>Định lí: Hai góc đối đỉnh thì bằng nhau</strong>: \\[\\widehat{O_1} = \\widehat{O_3} \\quad ; \\quad \\widehat{O_2} = \\widehat{O_4}\\]</li>
        </ul>
        <p><strong>2. Tia phân giác của một góc:</strong></p>
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs">
          Tia phân giác của một góc là tia nằm trong góc và tạo với hai cạnh của góc đó hai góc bằng nhau:
          \\[\\widehat{xOz} = \\widehat{zOy} = \\frac{1}{2}\\widehat{xOy}\\]
        </div>
      </div>
    `,
    quiz: {
      q: "Cho góc \\(\\widehat{xOy} = 70^\\circ\\). Tia \\(Oz\\) là tia phân giác của góc \\(\\widehat{xOy}\\). Số đo góc \\(\\widehat{xOz}\\) là:",
      options: [
        "(Recommended) \\(35^\\circ\\)",
        "\\(70^\\circ\\)",
        "\\(140^\\circ\\)",
        "\\(110^\\circ\\)"
      ],
      ans: 0,
      expl: "\\(\\widehat{xOz} = \\frac{1}{2}\\widehat{xOy} = \\frac{70^\\circ}{2} = 35^\\circ\\)."
    }
  },

  9: {
    cleanTitle: "Hai đường thẳng song song và dấu hiệu nhận biết",
    cleanChap: "Góc và hai đường thẳng song song",
    desc: "Các cặp góc so le trong, đồng vị và dấu hiệu nhận biết hai đường thẳng song song.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Các góc tạo bởi một đường thẳng cắt hai đường thẳng:</strong></p>
        <p>Đường thẳng \\(c\\) cắt hai đường thẳng \\(a\\) và \\(b\\) tạo ra các cặp góc so le trong, đồng vị và trong cùng phía.</p>
        <p><strong>2. Dấu hiệu nhận biết hai đường thẳng song song:</strong></p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          Nếu đường thẳng \\(c\\) cắt hai đường thẳng \\(a, b\\) và trong các góc tạo thành có:
          <ul class="list-disc pl-5 mt-1 space-y-0.5">
            <li>Một cặp góc so le trong bằng nhau, hoặc</li>
            <li>Một cặp góc đồng vị bằng nhau</li>
          </ul>
          thì \\(a\\) và \\(b\\) song song với nhau (kí hiệu \\(a // b\\)).
        </div>
      </div>
    `,
    quiz: {
      q: "Nếu đường thẳng \\(c\\) cắt hai đường thẳng song song \\(a\\) và \\(b\\) thì cặp góc so le trong:",
      options: [
        "(Recommended) Bằng nhau",
        "Có tổng bằng \\(180^\\circ\\)",
        "Phụ nhau",
        "Kề bù nhau"
      ],
      ans: 0,
      expl: "Theo tính chất của hai đường thẳng song song, hai góc so le trong luôn bằng nhau."
    }
  },

  10: {
    cleanTitle: "Tiên đề Euclid. Tính chất của hai đường thẳng song song",
    cleanChap: "Góc và hai đường thẳng song song",
    desc: "Nội dung tiên đề Euclid và tính chất từ vuông góc đến song song.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Tiên đề Euclid về đường thẳng song song:</strong></p>
        <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs font-bold text-amber-900 dark:text-amber-200">
          Qua một điểm ở ngoài một đường thẳng, chỉ có một đường thẳng song song với đường thẳng đó.
        </div>
        <p><strong>2. Quan hệ giữa tính vuông góc với tính song song:</strong></p>
        <ul class="list-disc pl-5 space-y-1 text-xs">
          <li>Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì chúng song song với nhau: \\[a \\perp c \\text{ và } b \\perp c \\implies a // b\\]</li>
          <li>Một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia: \\[a // b \\text{ và } c \\perp a \\implies c \\perp b\\]</li>
          <li>Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì chúng song song với nhau: \\[a // c \\text{ và } b // c \\implies a // b\\]</li>
        </ul>
      </div>
    `,
    quiz: {
      q: "Cho \\(a // b\\) và \\(c \\perp a\\). Khi đó kết luận nào sau đây đúng?",
      options: [
        "(Recommended) \\(c \\perp b\\)",
        "\\(c // b\\)",
        "\\(a \\perp b\\)",
        "\\(c\\) trùng với \\(b\\)"
      ],
      ans: 0,
      expl: "Định lí: Một đường thẳng vuông góc với một trong hai đường thẳng song song thì cũng vuông góc với đường thẳng còn lại."
    }
  },

  11: {
    cleanTitle: "Định lí và chứng minh định lí",
    cleanChap: "Góc và hai đường thẳng song song",
    desc: "Cấu trúc giả thiết và kết luận của định lí, quy trình lập luận chứng minh.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Khái niệm định lí:</strong></p>
        <p>Định lí là một khẳng định được coi là đúng, được suy ra từ những khẳng định được coi là đúng trước đó.</p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          Mỗi định lí thường phát biểu dưới dạng: <strong>"Nếu ... thì ..."</strong>.<br>
          • Phần giữa từ "Nếu" và từ "thì" là <strong>Giả thiết (GT)</strong>.<br>
          • Phần sau từ "thì" là <strong>Kết luận (KL)</strong>.
        </div>
        <p><strong>2. Chứng minh định lí:</strong> Là dùng lập luận để từ giả thiết suy ra kết luận.</p>
      </div>
    `,
    quiz: {
      q: "Trong định lí: \"Nếu hai góc đối đỉnh thì hai góc đó bằng nhau\", phần kết luận là:",
      options: [
        "(Recommended) Hai góc đó bằng nhau",
        "Hai góc đối đỉnh",
        "Hai góc kề bù",
        "Hai góc có chung đỉnh"
      ],
      ans: 0,
      expl: "Phần sau từ \"thì\" là phần kết luận của định lí: \"Hai góc đó bằng nhau\"."
    }
  },

  12: {
    cleanTitle: "Tổng các góc trong một tam giác",
    cleanChap: "Tam giác bằng nhau",
    desc: "Định lí tổng 3 góc trong tam giác, tam giác vuông và góc ngoài.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Định lí tổng ba góc của một tam giác:</strong></p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs text-center font-bold">
          Tổng số đo ba góc của một tam giác bằng \\(180^\\circ\\).
          \\[\\text{Trong } \\triangle ABC: \\quad \\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ\\]
        </div>
        <p><strong>2. Áp dụng vào tam giác vuông và góc ngoài:</strong></p>
        <ul class="list-disc pl-5 space-y-1 text-xs">
          <li>Trong tam giác vuông, hai góc nhọn <strong>phụ nhau</strong> (tổng bằng \\(90^\\circ\\)): \\[\\widehat{B} + \\widehat{C} = 90^\\circ\\]</li>
          <li>Mỗi góc ngoài của một tam giác có số đo bằng tổng số đo hai góc trong không kề với nó: \\[\\widehat{ACx} = \\widehat{A} + \\widehat{B}\\]</li>
        </ul>
      </div>
    `,
    quiz: {
      q: "Cho tam giác \\(ABC\\) có \\(\\widehat{A} = 60^\\circ, \\widehat{B} = 75^\\circ\\). Số đo của góc \\(\\widehat{C}\\) là:",
      options: [
        "(Recommended) \\(45^\\circ\\)",
        "\\(55^\\circ\\)",
        "\\(135^\\circ\\)",
        "\\(90^\\circ\\)"
      ],
      ans: 0,
      expl: "\\(\\widehat{C} = 180^\\circ - (60^\\circ + 75^\\circ) = 180^\\circ - 135^\\circ = 45^\\circ\\)."
    }
  },

  13: {
    cleanTitle: "Hai tam giác bằng nhau. Trường hợp Cạnh - Cạnh - Cạnh",
    cleanChap: "Tam giác bằng nhau",
    desc: "Khái niệm hai tam giác bằng nhau và trường hợp bằng nhau thứ nhất (c-c-c).",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Khái niệm hai tam giác bằng nhau:</strong></p>
        <p>Hai tam giác \\(ABC\\) và \\(A'B'C'\\) bằng nhau (kí hiệu \\(\\triangle ABC = \\triangle A'B'C'\\)) nếu chúng có các cạnh tương ứng bằng nhau và các góc tương ứng bằng nhau.</p>
        <p><strong>2. Trường hợp bằng nhau thứ nhất: Cạnh - Cạnh - Cạnh (c-c-c):</strong></p>
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs">
          Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.
          \\[AB = A'B', BC = B'C', AC = A'C' \\implies \\triangle ABC = \\triangle A'B'C'\\quad (c-c-c)\\]
        </div>
      </div>
    `,
    quiz: {
      q: "Để chứng minh \\(\\triangle ABC = \\triangle MNP\\) theo trường hợp c-c-c khi đã có \\(AB = MN\\) và \\(AC = MP\\), ta cần thêm điều kiện gì?",
      options: [
        "(Recommended) \\(BC = NP\\)",
        "\\(\\widehat{A} = \\widehat{M}\\)",
        "\\(BC = MP\\)",
        "\\(\\widehat{B} = \\widehat{N}\\)"
      ],
      ans: 0,
      expl: "Cần cặp cạnh thứ ba bằng nhau: \\(BC = NP\\)."
    }
  },

  14: {
    cleanTitle: "Trường hợp bằng nhau thứ hai và thứ ba của tam giác",
    cleanChap: "Tam giác bằng nhau",
    desc: "Trường hợp Cạnh - Góc - Cạnh (c-g-c) và Góc - Cạnh - Góc (g-c-g).",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Trường hợp Cạnh - Góc - Cạnh (c-g-c):</strong></p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          Nếu hai cạnh và <strong>góc xen giữa</strong> của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia thì hai tam giác đó bằng nhau.
        </div>
        <p><strong>2. Trường hợp Góc - Cạnh - Góc (g-c-g):</strong></p>
        <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 text-xs">
          Nếu một cạnh và <strong>hai góc kề</strong> của tam giác này bằng một cạnh và hai góc kề của tam giác kia thì hai tam giác đó bằng nhau.
        </div>
      </div>
    `,
    quiz: {
      q: "Trong trường hợp bằng nhau c-g-c, vị trí của góc bằng nhau phải là:",
      options: [
        "(Recommended) Góc xen giữa hai cặp cạnh bằng nhau",
        "Góc đối diện cạnh lớn nhất",
        "Góc bất kì",
        "Góc vuông"
      ],
      ans: 0,
      expl: "Quy tắc c-g-c bắt buộc góc phải nằm xen giữa hai cạnh bằng nhau."
    }
  },

    15: {
    cleanTitle: "Các trường hợp bằng nhau của tam giác vuông",
    cleanChap: "Tam giác bằng nhau",
    desc: "Các trường hợp cạnh huyền - góc nhọn, cạnh huyền - cạnh góc vuông.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Tóm tắt lý thuyết bài học:</strong></p>
        <p class="leading-relaxed">Tam giác vuông có một góc vuông (\\(90^\\circ\\)). Vì thế, các trường hợp bằng nhau tổng quát của tam giác (c-c-c, c-g-c, g-c-g) được suy ra thành các quy tắc ngắn gọn hơn:</p>
        <div class="space-y-1.5 pl-2 text-xs">
          <p>• <strong>Hai cạnh góc vuông:</strong> Nếu hai cạnh góc vuông của tam giác vuông này bằng hai cạnh góc vuông của tam giác vuông kia thì hai tam giác đó bằng nhau (trường hợp c-g-c).</p>
          <p>• <strong>Cạnh góc vuông - Góc nhọn kề:</strong> Nếu một cạnh góc vuông và góc nhọn kề cạnh ấy của tam giác vuông này bằng một cạnh góc vuông và góc nhọn kề cạnh ấy của tam giác vuông kia thì hai tam giác đó bằng nhau (trường hợp g-c-g).</p>
        </div>

        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs space-y-2">
          <h4 class="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5"><i class="fa-solid fa-shapes text-blue-600"></i> Công thức &amp; Tính chất đặc biệt:</h4>
          <p>• <strong>Trường hợp Cạnh huyền - Góc nhọn:</strong> Nếu cạnh huyền và một góc nhọn của tam giác vuông này bằng cạnh huyền và một góc nhọn của tam giác vuông kia thì hai tam giác vuông đó bằng nhau.</p>
          <p>• <strong>Trường hợp Cạnh huyền - Cạnh góc vuông:</strong> Nếu cạnh huyền và một cạnh góc vuông của tam giác vuông này bằng cạnh huyền và một cạnh góc vuông của tam giác vuông kia thì hai tam giác vuông đó bằng nhau (hệ quả định lí Py-ta-go: \\[c^2 = a^2 + b^2 \\implies b = \\sqrt{c^2 - a^2}\\] khi cạnh huyền và 1 cạnh góc vuông bằng nhau thì cạnh còn lại cũng tự động bằng nhau).</p>
        </div>

        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs space-y-1.5">
          <h4 class="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5"><i class="fa-solid fa-lightbulb text-emerald-600"></i> Phương pháp giải toán:</h4>
          <p class="leading-relaxed">Để chứng minh hai tam giác vuông bằng nhau, ưu tiên kiểm tra xem đã có yếu tố <strong>cạnh huyền</strong> bằng nhau hay chưa:</p>
          <p>• Nếu có <em>cạnh huyền</em> + <em>góc nhọn</em> bằng nhau \\(\\rightarrow\\) Áp dụng trường hợp <strong>Cạnh huyền - Góc nhọn</strong>.</p>
          <p>• Nếu có <em>cạnh huyền</em> + <em>cạnh góc vuông</em> bằng nhau \\(\\rightarrow\\) Áp dụng trường hợp <strong>Cạnh huyền - Cạnh góc vuông</strong>.</p>
        </div>

        <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs">
          <h4 class="font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center gap-1.5"><i class="fa-solid fa-bookmark text-amber-600"></i> Ví dụ minh họa chuẩn:</h4>
          <p class="font-medium"><strong>Đề bài:</strong> Cho tam giác \\(ABC\\) cân tại \\(A\\). Kẻ đường cao \\(AH \\perp BC\\) (với \\(H \\in BC\\)). Chứng minh rằng: \\[\\triangle ABH = \\triangle ACH\\]</p>
          <p class="mt-1.5 text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Lời giải:</strong> Xét hai tam giác vuông \\(\\triangle ABH\\) và \\(\\triangle ACH\\) (vuông tại \\(H\\) do \\(AH \\perp BC\\)):<br>
          • Cạnh huyền \\(AB = AC\\) (do \\(\\triangle ABC\\) cân tại \\(A\\)).<br>
          • Cạnh góc vuông \\(AH\\) là cạnh chung.<br>
          \\(\\implies \\triangle ABH = \\triangle ACH\\) (theo trường hợp <em>cạnh huyền - cạnh góc vuông</em>). Suy ra \\(HB = HC\\) và \\(\\widehat{BAH} = \\widehat{CAH}\\).</p>
        </div>
      </div>
    `,
    quiz: {
      q: "Hai tam giác vuông bằng nhau theo trường hợp \"Cạnh huyền - Cạnh góc vuông\" là do hệ quả của định lí nào?",
      options: [
        "(Recommended) Định lí Py-ta-go",
        "Định lí Ta-lét",
        "Định lí Euclid",
        "Bất đẳng thức tam giác"
      ],
      ans: 0,
      expl: "Theo định lí Py-ta-go, khi cạnh huyền và 1 cạnh góc vuông bằng nhau thì cạnh góc vuông còn lại cũng bằng nhau, đưa về trường hợp c-c-c."
    }
  },

  16: {
    cleanTitle: "Tam giác cân. Đường trung trực của đoạn thẳng",
    cleanChap: "Tam giác bằng nhau",
    desc: "Định nghĩa, tính chất, dấu hiệu nhận biết tam giác cân, tam giác đều và đường trung trực.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Tam giác cân và tam giác đều:</strong></p>
        <ul class="list-disc pl-5 space-y-1 text-xs">
          <li><strong>Tam giác cân:</strong> Là tam giác có hai cạnh bằng nhau. Trong tam giác cân, hai góc ở đáy bằng nhau: \\[\\triangle ABC \\text{ cân tại } A \\iff AB = AC \\iff \\widehat{B} = \\widehat{C}\\]</li>
          <li><strong>Tam giác đều:</strong> Có 3 cạnh bằng nhau và 3 góc bằng nhau, mỗi góc bằng \\(60^\\circ\\): \\[AB = BC = CA \\iff \\widehat{A} = \\widehat{B} = \\widehat{C} = 60^\\circ\\]</li>
        </ul>
        <p><strong>2. Đường trung trực của đoạn thẳng:</strong></p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          Đường thẳng vuông góc với một đoạn thẳng tại trung điểm của nó được gọi là <strong>đường trung trực</strong> của đoạn thẳng đó.<br>
          • Tính chất: Điểm nằm trên đường trung trực thì cách đều hai đầu mút đoạn thẳng: \\(M \\in d \\iff MA = MB\\).
        </div>
      </div>
    `,
    quiz: {
      q: "Tam giác \\(ABC\\) cân tại \\(A\\) có góc ở đỉnh \\(\\widehat{A} = 40^\\circ\\). Số đo của mỗi góc ở đáy là:",
      options: [
        "(Recommended) \\(70^\\circ\\)",
        "\\(80^\\circ\\)",
        "\\(60^\\circ\\)",
        "\\(140^\\circ\\)"
      ],
      ans: 0,
      expl: "\\(\\widehat{B} = \\widehat{C} = \\frac{180^\\circ - 40^\\circ}{2} = 70^\\circ\\)."
    }
  },

  17: {
    cleanTitle: "Thu thập và phân loại dữ liệu",
    cleanChap: "Thu thập và biểu diễn dữ liệu",
    desc: "Phương pháp thu thập dữ liệu, phân loại dữ liệu định tính và định lượng, tính đại diện.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Phân loại dữ liệu:</strong></p>
        <ul class="list-disc pl-5 space-y-1 text-xs">
          <li><strong>Dữ liệu định tính:</strong> Biểu diễn bằng chữ, kí hiệu hoặc danh mục (như Giới tính, Quê quán, Xếp loại rèn luyện...).</li>
          <li><strong>Dữ liệu định lượng:</strong> Biểu diễn bằng số thực, đo đếm được (như Chiều cao, Nhiệt độ, Điểm số, Cân nặng...).</li>
        </ul>
        <p><strong>2. Tính đại diện của dữ liệu:</strong> Mẫu khảo sát phải có kích thước đủ lớn và mang tính ngẫu nhiên, bao quát toàn bộ đối tượng điều tra.</p>
      </div>
    `,
    quiz: {
      q: "Dãy dữ liệu nào sau đây là dữ liệu định lượng?",
      options: [
        "(Recommended) Điểm kiểm tra Toán của tổ: 8; 9; 7,5; 10",
        "Màu áo yêu thích: Đỏ, Xanh, Vàng",
        "Nơi sinh: Hà Nội, Đà Nẵng, Huế",
        "Xếp loại học lực: Tốt, Khá, Đạt"
      ],
      ans: 0,
      expl: "Điểm số là dữ liệu được biểu diễn bằng số thực đo lường được nên là dữ liệu định lượng."
    }
  },

  18: {
    cleanTitle: "Biểu đồ hình quạt tròn",
    cleanChap: "Thu thập và biểu diễn dữ liệu",
    desc: "Đặc điểm biểu đồ quạt tròn, cách đọc và phân tích tỉ lệ phần trăm cơ cấu.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Đặc điểm biểu đồ hình quạt tròn:</strong></p>
        <ul class="list-disc pl-5 space-y-1 text-xs">
          <li>Dùng để thể hiện <strong>cơ cấu, tỉ lệ phần trăm</strong> của từng phần so với toàn thể (tổng các phần luôn bằng \\(100\\%\\)).</li>
          <li>Mỗi hình quạt tròn biểu diễn một danh mục. Cả hình tròn ứng với \\(360^\\circ\\) (tương đương \\(100\\%\\)).</li>
          <li>Góc ở tâm của hình quạt biểu diễn \\(p\\%\\) là: \\[\\alpha = p\\% \\cdot 360^\\circ = p \\cdot 3,6^\\circ\\]</li>
        </ul>
      </div>
    `,
    quiz: {
      q: "Trong biểu đồ hình quạt tròn, một hình quạt tròn biểu diễn \\(25\\%\\) số liệu có góc ở tâm bằng bao nhiêu độ?",
      options: [
        "(Recommended) \\(90^\\circ\\)",
        "\\(45^\\circ\\)",
        "\\(60^\\circ\\)",
        "\\(180^\\circ\\)"
      ],
      ans: 0,
      expl: "\\(25\\% \\times 360^\\circ = 0,25 \\times 360^\\circ = 90^\\circ\\)."
    }
  },

  19: {
    cleanTitle: "Biểu đồ đoạn thẳng",
    cleanChap: "Thu thập và biểu diễn dữ liệu",
    desc: "Cách đọc, vẽ và phân tích xu hướng biến thiên số liệu theo thời gian.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Ý nghĩa của biểu đồ đoạn thẳng:</strong></p>
        <p>Biểu đồ đoạn thẳng giúp người xem dễ dàng nhận thấy <strong>xu thế tăng, giảm hay ổn định</strong> của một đại lượng qua các mốc thời gian liên tục.</p>
        <p><strong>2. Cấu tạo:</strong> Trục ngang thể hiện các mốc thời gian; trục thẳng đứng thể hiện giá trị của đại lượng; các điểm được nối với nhau tạo thành đường gấp khúc.</p>
      </div>
    `,
    quiz: {
      q: "Để biểu diễn sự thay đổi nhiệt độ tại Hà Nội trong 7 ngày của một tuần, biểu đồ nào thích hợp nhất?",
      options: [
        "(Recommended) Biểu đồ đoạn thẳng",
        "Biểu đồ hình quạt tròn",
        "Biểu đồ tranh",
        "Sơ đồ Venn"
      ],
      ans: 0,
      expl: "Biểu đồ đoạn thẳng thể hiện tốt nhất xu thế thay đổi của dữ liệu theo thời gian liên tục."
    }
  },

  20: {
    cleanTitle: "Tỉ lệ thức",
    cleanChap: "Tỉ lệ thức và đại lượng tỉ lệ",
    desc: "Định nghĩa tỉ lệ thức, tính chất tích chéo ngoại tỉ bằng trung tỉ.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Định nghĩa tỉ lệ thức:</strong></p>
        <p>Tỉ lệ thức là đẳng thức của hai tỉ số: \\[\\frac{a}{b} = \\frac{c}{d} \\quad \\text{hoặc} \\quad a : b = c : d\\]</p>
        <p><strong>2. Tính chất cơ bản của tỉ lệ thức:</strong></p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          Tích ngoại tỉ bằng tích trung tỉ:
          \\[\\frac{a}{b} = \\frac{c}{d} \\iff a \\cdot d = b \\cdot c \\quad (a, b, c, d \\ne 0)\\]
          • Từ \\(a \\cdot d = b \\cdot c\\), ta có thể suy ra 4 tỉ lệ thức:
          \\[\\frac{a}{b} = \\frac{c}{d} \\quad ; \\quad \\frac{a}{c} = \\frac{b}{d} \\quad ; \\quad \\frac{d}{b} = \\frac{c}{a} \\quad ; \\quad \\frac{d}{c} = \\frac{b}{a}\\]
        </div>
      </div>
    `,
    quiz: {
      q: "Tìm \\(x\\) trong tỉ lệ thức: \\(\\frac{x}{6} = \\frac{5}{2}\\).",
      options: [
        "(Recommended) \\(x = 15\\)",
        "\\(x = 10\\)",
        "\\(x = 12\\)",
        "\\(x = 30\\)"
      ],
      ans: 0,
      expl: "\\(x \\cdot 2 = 6 \\cdot 5 = 30 \\implies x = 30 : 2 = 15\\)."
    }
  },

  21: {
    cleanTitle: "Tính chất của dãy tỉ số bằng nhau",
    cleanChap: "Tỉ lệ thức và đại lượng tỉ lệ",
    desc: "Tính chất dãy tỉ số bằng nhau và ứng dụng giải bài toán chia phần tỉ lệ.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Tính chất dãy tỉ số bằng nhau:</strong></p>
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs text-center">
          \\[\\frac{a}{b} = \\frac{c}{d} = \\frac{a + c}{b + d} = \\frac{a - c}{b - d} \\quad (b \\ne d, b \\ne -d)\\]
          \\[\\frac{a}{b} = \\frac{c}{d} = \\frac{e}{f} = \\frac{a + c + e}{b + d + f} = \\frac{a - c + e}{b - d + f}\\]
        </div>
        <p><strong>2. Ứng dụng:</strong> Dùng để chia một đại lượng thành các phần tỉ lệ với các số cho trước.</p>
      </div>
    `,
    quiz: {
      q: "Cho \\(\\frac{x}{2} = \\frac{y}{3}\\) và \\(x + y = 20\\). Giá trị của \\(x\\) và \\(y\\) là:",
      options: [
        "(Recommended) \\(x = 8 ; y = 12\\)",
        "\\(x = 10 ; y = 10\\)",
        "\\(x = 12 ; y = 8\\)",
        "\\(x = 6 ; y = 14\\)"
      ],
      ans: 0,
      expl: "\\(\\frac{x}{2} = \\frac{y}{3} = \\frac{x+y}{2+3} = \\frac{20}{5} = 4 \\implies x = 8 ; y = 12\\)."
    }
  },

  22: {
    cleanTitle: "Đại lượng tỉ lệ thuận",
    cleanChap: "Tỉ lệ thức và đại lượng tỉ lệ",
    desc: "Định nghĩa, công thức liên hệ y = kx và tính chất của hai đại lượng tỉ lệ thuận.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Định nghĩa đại lượng tỉ lệ thuận:</strong></p>
        <p>Nếu đại lượng \\(y\\) liên hệ với đại lượng \\(x\\) theo công thức \\[y = k \\cdot x \\quad (k \\text{ là hằng số khác } 0)\\] thì ta nói \\(y\\) tỉ lệ thuận với \\(x\\) theo hệ số tỉ lệ \\(k\\).</p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          • Nếu \\(y\\) tỉ lệ thuận với \\(x\\) theo hệ số \\(k\\) thì \\(x\\) tỉ lệ thuận với \\(y\\) theo hệ số \\(\\frac{1}{k}\\).<br>
          • Tỉ số hai giá trị tương ứng không đổi: \\[\\frac{y_1}{x_1} = \\frac{y_2}{x_2} = ... = k\\]
          • Tỉ số hai giá trị bất kì của đại lượng này bằng tỉ số hai giá trị tương ứng của đại lượng kia: \\[\\frac{x_1}{x_2} = \\frac{y_1}{y_2}\\]
        </div>
      </div>
    `,
    quiz: {
      q: "Cho \\(y\\) tỉ lệ thuận với \\(x\\) theo hệ số tỉ lệ \\(k = 3\\). Khi \\(x = 4\\) thì \\(y\\) bằng:",
      options: [
        "(Recommended) 12",
        "7",
        "\\(\\frac{4}{3}\\)",
        "1"
      ],
      ans: 0,
      expl: "\\(y = kx = 3 \\times 4 = 12\\)."
    }
  },

  23: {
    cleanTitle: "Đại lượng tỉ lệ nghịch",
    cleanChap: "Tỉ lệ thức và đại lượng tỉ lệ",
    desc: "Định nghĩa, công thức liên hệ y = a/x và tính chất của hai đại lượng tỉ lệ nghịch.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Định nghĩa đại lượng tỉ lệ nghịch:</strong></p>
        <p>Nếu đại lượng \\(y\\) liên hệ với đại lượng \\(x\\) theo công thức \\[y = \\frac{a}{x} \\quad \\text{hay} \\quad x \\cdot y = a \\quad (a \\text{ là hằng số khác } 0)\\] thì ta nói \\(y\\) tỉ lệ nghịch với \\(x\\) theo hệ số tỉ lệ \\(a\\).</p>
        <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 text-xs">
          • Tích hai giá trị tương ứng luôn không đổi: \\[x_1 \\cdot y_1 = x_2 \\cdot y_2 = ... = a\\]
          • Tỉ số hai giá trị bất kì của đại lượng này bằng nghịch đảo tỉ số hai giá trị tương ứng của đại lượng kia: \\[\\frac{x_1}{x_2} = \\frac{y_2}{y_1}\\]
        </div>
      </div>
    `,
    quiz: {
      q: "Cho \\(y\\) tỉ lệ nghịch với \\(x\\) theo hệ số tỉ lệ \\(a = 24\\). Khi \\(x = 6\\) thì \\(y\\) bằng:",
      options: [
        "(Recommended) 4",
        "144",
        "18",
        "30"
      ],
      ans: 0,
      expl: "\\(y = \\frac{a}{x} = \\frac{24}{6} = 4\\)."
    }
  },

  24: {
    cleanTitle: "Biểu thức đại số",
    cleanChap: "Biểu thức đại số và đa thức một biến",
    desc: "Khái niệm biến số, biểu thức số, biểu thức đại số và cách tính giá trị của biểu thức.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Khái niệm biểu thức đại số:</strong></p>
        <p>Biểu thức gồm các số, các chữ (gọi là <strong>biến số</strong>) và các phép toán (cộng, trừ, nhân, chia, nâng lên lũy thừa) được gọi là <strong>biểu thức đại số</strong>.</p>
        <p><strong>2. Giá trị của một biểu thức đại số:</strong> Thay các giá trị cho trước của biến vào biểu thức rồi thực hiện các phép tính theo đúng thứ tự.</p>
      </div>
    `,
    quiz: {
      q: "Giá trị của biểu thức \\(A = 2x^2 - 3x + 1\\) tại \\(x = 2\\) là:",
      options: [
        "(Recommended) 3",
        "5",
        "1",
        "7"
      ],
      ans: 0,
      expl: "\\(A = 2(2^2) - 3(2) + 1 = 2(4) - 6 + 1 = 8 - 6 + 1 = 3\\)."
    }
  },

  25: {
    cleanTitle: "Đa thức một biến",
    cleanChap: "Biểu thức đại số và đa thức một biến",
    desc: "Đơn thức, đa thức một biến, bậc, hệ số cao nhất, hệ số tự do và nghiệm của đa thức.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Đa thức một biến:</strong></p>
        <p>Là tổng của những đơn thức của cùng một biến. Dạng thu gọn sắp xếp theo lũy thừa giảm dần: \\[P(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0 \\quad (a_n \\ne 0)\\]</p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          • <strong>Bậc:</strong> Là số mũ lớn nhất của biến có hệ số khác 0 (ở đây bậc là \\(n\\)).<br>
          • <strong>Hệ số cao nhất:</strong> \\(a_n\\) &bull; <strong>Hệ số tự do:</strong> \\(a_0\\).<br>
          • <strong>Nghiệm của đa thức:</strong> Giá trị \\(x_0\\) thỏa mãn \\(P(x_0) = 0\\).
        </div>
      </div>
    `,
    quiz: {
      q: "Bậc của đa thức \\(P(x) = 5x^4 - 2x^3 + x^2 - 7\\) là:",
      options: [
        "(Recommended) 4",
        "5",
        "3",
        "2"
      ],
      ans: 0,
      expl: "Số mũ cao nhất của biến \\(x\\) trong đa thức là 4 nên bậc của \\(P(x)\\) là 4."
    }
  },

  26: {
    cleanTitle: "Phép cộng và phép trừ đa thức một biến",
    cleanChap: "Biểu thức đại số và đa thức một biến",
    desc: "Quy tắc cộng trừ đa thức một biến theo hàng ngang và đặt tính cột dọc.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>Hai cách cộng, trừ đa thức một biến:</strong></p>
        <ul class="list-disc pl-5 space-y-1 text-xs">
          <li><strong>Cách 1 (Hàng ngang):</strong> Bỏ dấu ngoặc (đổi dấu nếu trước ngoặc có dấu trừ) rồi nhóm các hạng tử cùng bậc (đồng dạng) để thu gọn.</li>
          <li><strong>Cách 2 (Đặt tính cột dọc):</strong> Sắp xếp các đa thức theo lũy thừa giảm dần của biến, đặt các hạng tử cùng bậc thẳng cột với nhau rồi thực hiện phép tính.</li>
        </ul>
      </div>
    `,
    quiz: {
      q: "Cho \\(P(x) = 3x^2 - x + 2\\) và \\(Q(x) = x^2 + 2x - 1\\). Tổng \\(P(x) + Q(x)\\) là:",
      options: [
        "(Recommended) \\(4x^2 + x + 1\\)",
        "\\(4x^2 - 3x + 1\\)",
        "\\(2x^2 + x + 3\\)",
        "\\(4x^2 + 3x - 1\\)"
      ],
      ans: 0,
      expl: "\\((3x^2 + x^2) + (-x + 2x) + (2 - 1) = 4x^2 + x + 1\\)."
    }
  },

  27: {
    cleanTitle: "Phép nhân đa thức một biến",
    cleanChap: "Biểu thức đại số và đa thức một biến",
    desc: "Nhân đơn thức với đơn thức, đơn thức với đa thức và đa thức với đa thức.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Quy tắc nhân đa thức một biến:</strong></p>
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs">
          • Nhân đơn thức với đa thức: \\[A(B + C) = A \\cdot B + A \\cdot C\\]
          • Nhân đa thức với đa thức: \\[ (A + B)(C + D) = A \\cdot C + A \\cdot D + B \\cdot C + B \\cdot D \\]
        </div>
      </div>
    `,
    quiz: {
      q: "Thực hiện phép nhân \\(2x(x - 3)\\) ta được:",
      options: [
        "(Recommended) \\(2x^2 - 6x\\)",
        "\\(2x^2 - 3x\\)",
        "\\(2x - 6\\)",
        "\\(2x^2 + 6x\\)"
      ],
      ans: 0,
      expl: "\\(2x \\cdot x - 2x \\cdot 3 = 2x^2 - 6x\\)."
    }
  },

  28: {
    cleanTitle: "Phép chia đa thức một biến",
    cleanChap: "Biểu thức đại số và đa thức một biến",
    desc: "Chia đơn thức cho đơn thức, đặt tính chia đa thức cho đa thức có dư.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Phép chia hết và phép chia có dư:</strong></p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          Với hai đa thức \\(A(x)\\) và \\(B(x)\\) (\\(B(x) \\ne 0\\)), luôn tìm được duy nhất cặp đa thức thương \\(Q(x)\\) và đa thức dư \\(R(x)\\) sao cho:
          \\[A(x) = B(x) \\cdot Q(x) + R(x)\\]
          Trong đó bậc của \\(R(x)\\) nhỏ hơn bậc của \\(B(x)\\).<br>
          • Khi \\(R(x) = 0\\), ta có phép chia hết.
        </div>
      </div>
    `,
    quiz: {
      q: "Thực hiện phép chia \\((6x^3 - 4x^2) : (2x^2)\\) ta được thương là:",
      options: [
        "(Recommended) \\(3x - 2\\)",
        "\\(3x^2 - 2\\)",
        "\\(3x + 2\\)",
        "\\(6x - 4\\)"
      ],
      ans: 0,
      expl: "\\(\\frac{6x^3}{2x^2} - \\frac{4x^2}{2x^2} = 3x - 2\\)."
    }
  },

  29: {
    cleanTitle: "Làm quen với biến cố",
    cleanChap: "Biến cố và xác suất",
    desc: "Khái niệm biến cố ngẫu nhiên, biến cố chắc chắn và biến cố không thể.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Phân loại biến cố:</strong></p>
        <ul class="list-disc pl-5 space-y-1 text-xs">
          <li><strong>Biến cố chắc chắn:</strong> Là biến cố luôn luôn xảy ra trong phép thử. (Xác suất bằng 1).</li>
          <li><strong>Biến cố không thể:</strong> Là biến cố không bao giờ xảy ra trong phép thử. (Xác suất bằng 0).</li>
          <li><strong>Biến cố ngẫu nhiên:</strong> Là biến cố có thể xảy ra hoặc không thể xảy ra tùy thuộc vào kết quả của phép thử.</li>
        </ul>
      </div>
    `,
    quiz: {
      q: "Tung một con xúc xắc 6 mặt cân đối. Biến cố \"Mặt xuất hiện có số chấm lớn hơn 7\" là biến cố gì?",
      options: [
        "(Recommended) Biến cố không thể",
        "Biến cố chắc chắn",
        "Biến cố ngẫu nhiên",
        "Biến cố đồng khả năng"
      ],
      ans: 0,
      expl: "Xúc xắc chỉ có số chấm từ 1 đến 6 nên biến cố số chấm lớn hơn 7 là không bao giờ xảy ra (biến cố không thể)."
    }
  },

  30: {
    cleanTitle: "Xác suất của biến cố",
    cleanChap: "Biến cố và xác suất",
    desc: "Định nghĩa xác suất biến cố ngẫu nhiên trong mô hình đồng khả năng.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Công thức tính xác suất:</strong></p>
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs">
          Xác suất của biến cố \\(A\\) trong trò chơi có \\(n\\) kết quả có thể và đồng khả năng:
          \\[P(A) = \\frac{k}{n}\\]
          Trong đó: \\(k\\) là số kết quả thuận lợi cho \\(A\\); \\(n\\) là tổng số kết quả có thể xảy ra.<br>
          • Luôn có: \\[0 \\le P(A) \\le 1\\]
        </div>
      </div>
    `,
    quiz: {
      q: "Gieo ngẫu nhiên một con xúc xắc 6 mặt. Xác suất xuất hiện mặt chẵn chấm là:",
      options: [
        "(Recommended) \\(\\frac{1}{2}\\)",
        "\\(\\frac{1}{3}\\)",
        "\\(\\frac{1}{6}\\)",
        "\\(\\frac{2}{3}\\)"
      ],
      ans: 0,
      expl: "Có 3 mặt chẵn (2, 4, 6) trên tổng số 6 mặt: \\(P = \\frac{3}{6} = \\frac{1}{2}\\)."
    }
  },

  31: {
    cleanTitle: "Quan hệ giữa góc và cạnh đối diện trong một tam giác",
    cleanChap: "Quan hệ giữa các yếu tố trong tam giác",
    desc: "Định lí góc đối diện cạnh lớn hơn và cạnh đối diện góc lớn hơn.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Định lí quan hệ góc - cạnh đối diện:</strong></p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          Trong một tam giác:
          <ul class="list-disc pl-5 mt-1 space-y-0.5">
            <li>Góc đối diện với cạnh lớn hơn là <strong>góc lớn hơn</strong>: \\[AC > AB \\iff \\widehat{B} > \\widehat{C}\\]</li>
            <li>Cạnh đối diện với góc lớn hơn là <strong>cạnh lớn hơn</strong>.</li>
          </ul>
        </div>
      </div>
    `,
    quiz: {
      q: "Trong tam giác \\(ABC\\), nếu \\(BC > AB > AC\\) thì quan hệ giữa ba góc là:",
      options: [
        "(Recommended) \\(\\widehat{A} > \\widehat{C} > \\widehat{B}\\)",
        "\\(\\widehat{A} > \\widehat{B} > \\widehat{C}\\)",
        "\\(\\widehat{C} > \\widehat{B} > \\widehat{A}\\)",
        "\\(\\widehat{B} > \\widehat{A} > \\widehat{C}\\)"
      ],
      ans: 0,
      expl: "Cạnh đối diện \\(BC\\) là \\(\\widehat{A}\\), cạnh đối diện \\(AB\\) là \\(\\widehat{C}\\), cạnh đối diện \\(AC\\) là \\(\\widehat{B}\\)."
    }
  },

  32: {
    cleanTitle: "Quan hệ giữa đường vuông góc và đường xiên",
    cleanChap: "Quan hệ giữa các yếu tố trong tam giác",
    desc: "Khái niệm đường vuông góc, đường xiên và định lí so sánh độ dài.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Khái niệm và so sánh:</strong></p>
        <p>Từ điểm \\(A\\) ngoài đường thẳng \\(d\\), kẻ \\(AH \\perp d\\) tại \\(H\\) và các đường xiên \\(AB, AC\\) (với \\(B, C \\in d, B, C \\ne H\\)).</p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          • Trong các đường kẻ từ một điểm đến một đường thẳng, <strong>đường vuông góc là đường ngắn nhất</strong>: \\[AH < AB\\]
          • Hình chiếu lớn hơn thì đường xiên lớn hơn: \\[HB > HC \\iff AB > AC\\]
        </div>
      </div>
    `,
    quiz: {
      q: "Từ điểm \\(M\\) nằm ngoài đường thẳng \\(a\\), đoạn thẳng ngắn nhất kẻ từ \\(M\\) đến \\(a\\) là:",
      options: [
        "(Recommended) Đoạn vuông góc",
        "Đoạn xiên bất kì",
        "Đường chéo",
        "Đoạn nối đến gốc tọa độ"
      ],
      ans: 0,
      expl: "Theo định lí, đoạn vuông góc luôn là đoạn thẳng ngắn nhất từ một điểm ngoài đường thẳng đến đường thẳng đó."
    }
  },

  33: {
    cleanTitle: "Quan hệ giữa ba cạnh của một tam giác. Bất đẳng thức tam giác",
    cleanChap: "Quan hệ giữa các yếu tố trong tam giác",
    desc: "Bất đẳng thức tam giác và điều kiện để ba đoạn thẳng tạo thành tam giác.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Bất đẳng thức tam giác:</strong></p>
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs text-center font-bold">
          Trong một tam giác, độ dài một cạnh bất kì luôn lớn hơn hiệu và nhỏ hơn tổng độ dài hai cạnh còn lại.
          \\[|b - c| < a < b + c\\]
        </div>
        <p><strong>2. Nhận xét:</strong> Để kiểm tra 3 đoạn thẳng có tạo thành tam giác không, chỉ cần so sánh độ dài cạnh lớn nhất với tổng độ dài hai cạnh nhỏ hơn.</p>
      </div>
    `,
    quiz: {
      q: "Bộ ba độ dài đoạn thẳng nào sau đây CÓ THỂ là độ dài ba cạnh của một tam giác?",
      options: [
        "(Recommended) 3 cm, 4 cm, 5 cm",
        "2 cm, 3 cm, 6 cm",
        "1 cm, 2 cm, 3 cm",
        "4 cm, 5 cm, 10 cm"
      ],
      ans: 0,
      expl: "\\(3 + 4 = 7 > 5\\) (thỏa mãn bất đẳng thức tam giác). Các bộ còn lại đều có tổng 2 cạnh nhỏ \\(\\le\\) cạnh lớn nhất."
    }
  },

  34: {
    cleanTitle: "Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác",
    cleanChap: "Quan hệ giữa các yếu tố trong tam giác",
    desc: "Tính chất Trọng tâm G và Tâm đường tròn nội tiếp I của tam giác.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Ba đường trung tuyến (Trọng tâm G):</strong></p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          Ba đường trung tuyến của một tam giác cùng đi qua một điểm. Điểm đó gọi là <strong>Trọng tâm (kí hiệu G)</strong>.<br>
          • Trọng tâm cách mỗi đỉnh một khoảng bằng \\(\\frac{2}{3}\\) độ dài đường trung tuyến đi qua đỉnh đó:
          \\[\\frac{AG}{AM} = \\frac{BG}{BN} = \\frac{CG}{CP} = \\frac{2}{3}\\]
        </div>
        <p><strong>2. Ba đường phân giác (Tâm nội tiếp I):</strong></p>
        <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 text-xs">
          Ba đường phân giác của một tam giác cùng đi qua một điểm. Điểm này <strong>cách đều ba cạnh</strong> của tam giác và là tâm đường tròn nội tiếp.
        </div>
      </div>
    `,
    quiz: {
      q: "Giao điểm của ba đường trung tuyến trong một tam giác được gọi là:",
      options: [
        "(Recommended) Trọng tâm",
        "Trực tâm",
        "Tâm đường tròn ngoại tiếp",
        "Tâm đường tròn nội tiếp"
      ],
      ans: 0,
      expl: "Giao điểm của 3 đường trung tuyến gọi là Trọng tâm của tam giác."
    }
  },

  35: {
    cleanTitle: "Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác",
    cleanChap: "Quan hệ giữa các yếu tố trong tam giác",
    desc: "Tính chất Tâm ngoại tiếp O và Trực tâm H của tam giác.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Ba đường trung trực (Tâm ngoại tiếp O):</strong></p>
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs">
          Ba đường trung trực của một tam giác cùng đi qua một điểm. Điểm này <strong>cách đều ba đỉnh</strong> của tam giác:
          \\[OA = OB = OC\\]
          Điểm \\(O\\) là tâm của đường tròn đi qua ba đỉnh (đường tròn ngoại tiếp tam giác).
        </div>
        <p><strong>2. Ba đường cao (Trực tâm H):</strong></p>
        <div class="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800 text-xs">
          Ba đường cao của một tam giác cùng đi qua một điểm. Điểm đó gọi là <strong>Trực tâm (kí hiệu H)</strong> của tam giác.
        </div>
      </div>
    `,
    quiz: {
      q: "Giao điểm của ba đường cao trong một tam giác được gọi là:",
      options: [
        "(Recommended) Trực tâm",
        "Trọng tâm",
        "Tâm đối xứng",
        "Tâm ngoại tiếp"
      ],
      ans: 0,
      expl: "Giao điểm của ba đường cao được gọi là Trực tâm của tam giác."
    }
  },

  36: {
    cleanTitle: "Hình hộp chữ nhật và hình lập phương",
    cleanChap: "Một số hình khối trong thực tiễn",
    desc: "Đặc điểm đỉnh, cạnh, mặt, công thức tính diện tích xung quanh và thể tích.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Hình hộp chữ nhật (kích thước \\(a, b\\), chiều cao \\(h\\)):</strong></p>
        <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
          • Diện tích xung quanh: \\[S_{xq} = 2(a + b) \\cdot h\\]
          • Thể tích: \\[V = a \\cdot b \\cdot h\\]
        </div>
        <p><strong>2. Hình lập phương (cạnh \\(a\\)):</strong></p>
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs">
          • Diện tích xung quanh: \\[S_{xq} = 4a^2\\]
          • Thể tích: \\[V = a^3\\]
        </div>
      </div>
    `,
    quiz: {
      q: "Một hình lập phương có cạnh bằng 5 cm thì thể tích của nó là:",
      options: [
        "(Recommended) \\(125\\text{ cm}^3\\)",
        "\\(100\\text{ cm}^3\\)",
        "\\(25\\text{ cm}^3\\)",
        "\\(150\\text{ cm}^3\\)"
      ],
      ans: 0,
      expl: "\\(V = a^3 = 5^3 = 125\\text{ cm}^3\\)."
    }
  },

  37: {
    cleanTitle: "Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác",
    cleanChap: "Một số hình khối trong thực tiễn",
    desc: "Đặc điểm đáy, mặt bên và công thức tính diện tích xung quanh, thể tích lăng trụ đứng.",
    content: `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Đặc điểm hình lăng trụ đứng:</strong></p>
        <ul class="list-disc pl-5 space-y-1 text-xs">
          <li>Hai mặt đáy song song và bằng nhau (là tam giác hoặc tứ giác).</li>
          <li>Các mặt bên là các hình chữ nhật vuông góc với hai đáy.</li>
          <li>Độ dài một cạnh bên là chiều cao của lăng trụ đứng (kí hiệu \\(h\\)).</li>
        </ul>
        <p><strong>2. Công thức tính diện tích xung quanh và thể tích:</strong></p>
        <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800 text-xs text-center font-bold">
          \\[S_{xq} = C_{\\text{đáy}} \\cdot h \\quad ; \\quad V = S_{\\text{đáy}} \\cdot h\\]
          (\\(C_{\\text{đáy}}\\) là chu vi đáy; \\(S_{\\text{đáy}}\\) là diện tích đáy; \\(h\\) là chiều cao).
        </div>
      </div>
    `,
    quiz: {
      q: "Các mặt bên của hình lăng trụ đứng tam giác là hình gì?",
      options: [
        "(Recommended) Hình chữ nhật",
        "Hình tam giác",
        "Hình bình hành",
        "Hình vuông"
      ],
      ans: 0,
      expl: "Các mặt bên của hình lăng trụ đứng luôn là các hình chữ nhật vuông góc với đáy."
    }
  }
};

// Now build the updated allLessons array with clean titles and pristine KaTeX
const enrichedLessons = baseLessons.map((l, idx) => {
  const m = lessonMathContent[l.id];
  if (!m) return l;

  return {
    ...l,
    title: m.cleanTitle,
    chapter: `Chương ${l.chapterId}: ${m.cleanChap}`,
    desc: m.desc,
    content: m.content,
    quiz: m.quiz
  };
});

console.log('Enriched lessons count:', enrichedLessons.length);

module.exports = {
  enrichedLessons,
  rawChapters
};
