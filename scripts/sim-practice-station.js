/**
 * Học viện CodeHub - Trạm Thực Hành Mô Phỏng & Khám Phá Kiến Thức Trong Bài Học (Lớp 10 - 11 - 12)
 * Tích hợp quy trình chuẩn sư phạm 5 bước:
 *   [1. Lý thuyết] -> [2. Thực hành mô phỏng] -> [3. Khám phá kiến thức] -> [4. Luyện tập] -> [5. Kiểm tra]
 * Tái sử dụng 100% các Phòng thực hành hiện có:
 *   - window.CodeHubMath (scripts/math-simulations.js)
 *   - window.CodeHubPhysics (scripts/physics-simulations.js)
 *   - window.CodeHubChemistry (scripts/chemistry-simulations.js)
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CodeHubPracticeStation = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Ngân hàng câu hỏi Khám phá & Vận dụng gắn trực tiếp với từng Mô phỏng trong bài học
  const DISCOVERY_QUESTIONS_DB = {
    // =====================================================================
    // I. MÔN TOÁN HỌC (LỚP 10, 11, 12)
    // =====================================================================
    'toan10-b5': {
      subject: 'math',
      simType: 'trig',
      simOptions: { angleDeg: 60, studyMode: 'full360', func: 'sin-cos' },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 5',
      title: 'Thực hành Đường tròn lượng giác 360° & Giá trị lượng giác',
      guide: 'Kéo điểm M liên tục 360° qua cả 4 góc phần tư (hoặc chuyển sang chế độ Bài 5 Toán 10: 0°–180°) để quan sát dấu và giá trị của sin α, cos α, tan α, cot α.',
      questions: [
        {
          q: 'Khi kéo thanh trượt góc α từ 0° đến 180° (nửa đường tròn phía trên trục Ox), giá trị của sin α (tung độ điểm M) có đặc điểm gì?',
          opts: ['Luôn dương (sin α ≥ 0), đạt cực đại bằng 1 tại α = 90°', 'Luôn âm (sin α ≤ 0)', 'Đổi dấu từ dương sang âm khi qua 90°', 'Không xác định tại α = 90°'],
          ans: 0,
          exp: 'Trên đoạn $[0^\\circ; 180^\\circ]$, điểm $M$ nằm ở nửa mặt phẳng phía trên trục hoành $Ox$ nên tung độ $y_M = \\sin\\alpha \\ge 0$ và đạt giá trị lớn nhất $\\sin 90^\\circ = 1$.'
        },
        {
          q: 'Điều chỉnh góc α vượt qua 90° sang góc tù (90° < α < 180°). Quan sát dấu của cos α, tan α và cot α trên bảng số liệu:',
          opts: ['cos α > 0, tan α > 0, cot α > 0', 'cos α < 0, tan α < 0, cot α < 0', 'cos α < 0 nhưng tan α > 0', 'cos α > 0 nhưng tan α < 0'],
          ans: 1,
          exp: 'Với góc tù ($90^\\circ < \\alpha < 180^\\circ$), hoành độ $x_M = \\cos\\alpha < 0$ còn tung độ $y_M = \\sin\\alpha > 0$, do đó $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} < 0$ và $\\cot\\alpha < 0$.'
        },
        {
          q: 'Đặt góc α = 60° rồi đối chiếu với góc bù (180° − 60° = 120°) trên mô phỏng. Khẳng định nào sau đây đúng?',
          opts: ['sin 120° = sin 60° ≈ 0,866 và cos 120° = −cos 60° = −0,5', 'sin 120° = −sin 60° và cos 120° = cos 60°', 'tan 120° = tan 60°', 'Hai góc bù nhau có cos bằng nhau'],
          ans: 0,
          exp: 'Hai góc bù nhau ($\\alpha$ và $180^\\circ - \\alpha$) có điểm biểu diễn đối xứng nhau qua trục tung $Oy$, nên $\\sin(180^\\circ - \\alpha) = \\sin\\alpha$ còn $\\cos(180^\\circ - \\alpha) = -\\cos\\alpha$.'
        },
        {
          q: 'Bấm chọn nút góc đặc biệt α = 90° trên mô phỏng. Giá trị của tan 90° hiển thị như thế nào?',
          opts: ['tan 90° = 1', 'tan 90° = 0', 'Không xác định (∄) vì cos 90° = 0', 'tan 90° = −1'],
          ans: 2,
          exp: 'Tại $\\alpha = 90^\\circ$, điểm $M(0; 1)$ có $\\cos 90^\\circ = 0$ nên biểu thức $\\tan 90^\\circ = \\frac{\\sin 90^\\circ}{\\cos 90^\\circ}$ không xác định.'
        }
      ]
    },
    'toan10-b6': {
      subject: 'math',
      simType: 'geometry',
      simOptions: { mode: 'triangle' },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 6',
      title: 'Thực hành Hệ thức lượng trong tam giác (Kéo đỉnh A, B, C)',
      guide: 'Dùng chuột hoặc ngón tay kéo trực tiếp các đỉnh A, B, C trên mặt phẳng tọa độ để kiểm nghiệm định lý Côsin, định lý Sin và công thức Heron.',
      questions: [
        {
          q: 'Kéo đỉnh A trên mặt phẳng tọa độ sao cho góc Â trở thành góc tù (Â > 90°). Khi đó vị trí của tâm đường tròn ngoại tiếp O và trực tâm H thay đổi thế nào?',
          opts: ['Cả O và H đều nằm bên trong tam giác ABC', 'Tâm ngoại tiếp O và trực tâm H di chuyển ra bên ngoài tam giác ABC', 'O nằm trên cạnh BC', 'Trọng tâm G di chuyển ra ngoài tam giác'],
          ans: 1,
          exp: 'Trong tam giác tù ($\\hat{A} > 90^\\circ$), tâm đường tròn ngoại tiếp $O$ và trực tâm $H$ luôn nằm bên ngoài tam giác, trong khi trọng tâm $G$ và tâm nội tiếp $I$ luôn nằm bên trong tam giác.'
        },
        {
          q: 'Theo định lý Sin trong tam giác ABC bất kỳ với bán kính đường tròn ngoại tiếp R trên mô phỏng, tỉ số a / sin Â luôn bằng:',
          opts: ['R', '2R', 'R / 2', 'r (bán kính đường tròn nội tiếp)'],
          ans: 1,
          exp: 'Theo định lý Sin: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$, với $R$ là bán kính đường tròn ngoại tiếp tam giác.'
        },
        {
          q: 'Khi kéo 3 đỉnh A, B, C nằm thẳng hàng nhau trên cùng một đường thẳng, hiện tượng gì xảy ra trên mô phỏng?',
          opts: ['Diện tích S = 0 và không tồn tại đường tròn ngoại tiếp', 'Bán kính R = 0', 'Tam giác trở thành tam giác đều', 'Đường tròn nội tiếp đạt diện tích lớn nhất'],
          ans: 0,
          exp: 'Khi 3 điểm $A, B, C$ thẳng hàng, tam giác suy biến thành đoạn thẳng ($S = 0$) nên không có đường tròn đi qua cả 3 điểm thẳng hàng.'
        }
      ]
    },
    'toan10-b14': {
      subject: 'math',
      simType: 'stats10',
      simOptions: { mode: 'dispersion', x7: 9 },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 14',
      title: 'Thực hành Các số đặc trưng đo độ phân tán, Biểu đồ hộp Box-plot & Giá trị bất thường',
      guide: 'Kéo thanh trượt phần tử thứ 7 (x₇) hoặc bấm nút "Tạo giá trị bất thường (x₇ = 18)" để quan sát khoảng biến thiên R, khoảng tứ phân vị Δ_Q, phương sai s², độ lệch chuẩn s và ngưỡng phát hiện Outlier.',
      questions: [
        {
          q: 'Trên mô phỏng mẫu số liệu [5; 6; 6; 7; 7; 8; 9], tứ phân vị thứ nhất Q₁ = 6 và tứ phân vị thứ ba Q₃ = 8. Khoảng biến thiên R và khoảng tứ phân vị Δ_Q bằng bao nhiêu?',
          opts: ['Khoảng biến thiên R = 9 − 5 = 4 và khoảng tứ phân vị Δ_Q = Q₃ − Q₁ = 8 − 6 = 2', 'R = 2 và Δ_Q = 4', 'R = 7 và Δ_Q = 7', 'R = 14 và Δ_Q = 14'],
          ans: 0,
          exp: 'Ta có $R = x_{\\max} - x_{\\min} = 9 - 5 = 4$ và khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1 = 8 - 6 = 2$.'
        },
        {
          q: 'Bấm nút "Tạo giá trị bất thường (x₇ = 18)" trên mô phỏng. Ngưỡng phát hiện giá trị bất thường [Q₁ − 1,5Δ_Q; Q₃ + 1,5Δ_Q] bằng bao nhiêu và vì sao x₇ = 18 bị đánh dấu đỏ là Outlier?',
          opts: ['Ngưỡng là [6 − 3; 8 + 3] = [3; 11], do 18 > 11 nên x₇ = 18 là giá trị bất thường (Outlier)', 'Ngưỡng là [5; 9]', 'Ngưỡng là [0; 20]', 'Do 18 là số chẵn'],
          ans: 0,
          exp: 'Với $Q_1 = 6, Q_3 = 8, \\Delta_Q = 2$, ta có $Q_1 - 1{,}5\\Delta_Q = 3$ và $Q_3 + 1{,}5\\Delta_Q = 11$. Vì $18 > 11$ nên $x_7 = 18$ là giá trị bất thường.'
        },
        {
          q: 'Khi kéo x₇ từ 9 lên 18 (xuất hiện giá trị bất thường), đại lượng nào trên mô phỏng tăng vọt mạnh mẽ trong khi Δ_Q = 2 và trung vị M_e = 7 hoàn toàn không đổi?',
          opts: ['Khoảng biến thiên R (tăng từ 4 lên 13), số trung bình x̄ và độ lệch chuẩn s đều tăng mạnh', 'Trung vị M_e tăng gấp đôi', 'Khoảng tứ phân vị Δ_Q tăng gấp đôi', 'Không có đại lượng nào thay đổi'],
          ans: 0,
          exp: 'Khoảng biến thiên $R$, số trung bình $\\bar{x}$, phương sai $s^2$ và độ lệch chuẩn $s$ rất nhạy cảm với giá trị bất thường, còn $M_e$ và $\\Delta_Q$ không bị ảnh hưởng.'
        }
      ]
    },
    'toan10-b16': {
      subject: 'math',
      simType: 'quadratic',
      simOptions: { a: 1, b: -2, c: -3 },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 16',
      title: 'Thực hành Khảo sát Đồ thị Hàm số bậc hai y = ax² + bx + c',
      guide: 'Kéo các thanh trượt hệ số a, b, c để quan sát sự dịch chuyển của đỉnh Parabol I(-b/2a; -Δ/4a), trục đối xứng và hướng bề lõm.',
      questions: [
        {
          q: 'Trên mô phỏng, khi giữ nguyên b = −2, c = −3 và kéo thanh trượt hệ số a từ dương (a = 1) sang âm (a = −1), hình dạng Parabol thay đổi như thế nào?',
          opts: ['Bề lõm chuyển từ hướng lên trên sang hướng xuống dưới, đỉnh I trở thành điểm cao nhất', 'Parabol tịnh tiến sang phải 2 đơn vị', 'Đồ thị suy biến thành đường thẳng', 'Hoành độ đỉnh x_I luôn bằng 0'],
          ans: 0,
          exp: 'Khi $a > 0$ bề lõm Parabol quay lên trên (hàm đạt GTNN tại đỉnh $I$); khi $a < 0$ bề lõm quay xuống dưới (hàm đạt GTLN tại đỉnh $I$).'
        },
        {
          q: 'Đặt a = 1, b = −2, c = −3 trên thanh trượt. Tọa độ đỉnh I và phương trình trục đối xứng hiển thị trên mô phỏng là:',
          opts: ['Đỉnh I(1; −4) và trục đối xứng x = 1', 'Đỉnh I(−1; −4) và trục đối xứng x = −1', 'Đỉnh I(2; −3) và trục đối xứng x = 2', 'Đỉnh I(1; 0) và trục đối xứng x = 0'],
          ans: 0,
          exp: 'Ta có $x_I = -\\frac{b}{2a} = -\\frac{-2}{2\\cdot 1} = 1$ và $y_I = f(1) = 1^2 - 2(1) - 3 = -4$. Vậy đỉnh $I(1; -4)$ và trục đối xứng là đường thẳng $x = 1$.'
        },
        {
          q: 'Kéo thanh trượt hệ số a về đúng giá trị a = 0 (ví dụ b = −2, c = −3). Đồ thị trên mặt phẳng tọa độ chuyển thành hình gì?',
          opts: ['Vẫn là đường Parabol', 'Đường thẳng y = −2x − 3 (suy biến về hàm số bậc nhất)', 'Đường tròn tâm O', 'Không có đồ thị'],
          ans: 1,
          exp: 'Khi $a = 0$, số hạng $ax^2$ triệt tiêu nên hàm số trở thành hàm bậc nhất $y = bx + c$ có đồ thị là một đường thẳng.'
        },
        {
          q: 'Với a = 1, b = −2, c = −3 (a > 0 và hoành độ đỉnh x_I = 1), kết luận nào đúng về sự biến thiên của hàm số?',
          opts: ['Hàm số nghịch biến trên (−∞; 1) và đồng biến trên (1; +∞)', 'Hàm số đồng biến trên (−∞; 1) và nghịch biến trên (1; +∞)', 'Hàm số đồng biến trên toàn bộ ℝ', 'Hàm số nghịch biến trên (−1; 3)'],
          ans: 0,
          exp: 'Vì $a = 1 > 0$, hàm số bậc hai nghịch biến trên khoảng $(-\\infty; -\\frac{b}{2a}) = (-\\infty; 1)$ và đồng biến trên khoảng $(1; +\\infty)$.'
        }
      ]
    },
    'toan10-b17': {
      subject: 'math',
      simType: 'quadratic',
      simOptions: { a: 1, b: -2, c: -3 },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 17',
      title: 'Thực hành Xét dấu Tam thức bậc hai f(x) = ax² + bx + c',
      guide: 'Sử dụng 3 nút chọn nhanh "Δ > 0 (2 nghiệm)", "Δ = 0 (Tiếp xúc Ox)", "Δ < 0 (Vô nghiệm)" hoặc kéo thanh trượt a, b, c để quan sát phần đồ thị nằm phía trên/dưới trục hoành Ox.',
      questions: [
        {
          q: 'Bấm nút "Δ < 0 (Vô nghiệm)" (a = 1, b = −2, c = 2.5). Quan sát vị trí của Parabol so với trục hoành Ox, dấu của tam thức f(x) là:',
          opts: ['f(x) > 0 với mọi x ∈ ℝ (cùng dấu với hệ số a = 1 > 0)', 'f(x) < 0 với mọi x ∈ ℝ', 'f(x) đổi dấu tại x = 1', 'f(x) = 0 tại 2 điểm phân biệt'],
          ans: 0,
          exp: 'Khi $\\Delta < 0$, đồ thị không cắt trục hoành $Ox$ và nằm hoàn toàn phía trên $Ox$ (do $a = 1 > 0$), nên $f(x)$ luôn cùng dấu với $a$ ($\\forall x \\in \\mathbb{R}$).'
        },
        {
          q: 'Bấm nút "Δ > 0 (2 nghiệm)" (a = 1, b = −2, c = −3 có 2 nghiệm x₁ = −1, x₂ = 3). Trên khoảng (−1; 3), đồ thị nằm ở đâu so với trục Ox và dấu của f(x) thế nào?',
          opts: ['Nằm phía dưới trục Ox ⇒ f(x) < 0 (trái dấu với hệ số a = 1)', 'Nằm phía trên trục Ox ⇒ f(x) > 0', 'Trùng với trục Ox ⇒ f(x) = 0', 'Không xác định dấu'],
          ans: 0,
          exp: 'Theo định lý dấu tam thức bậc hai khi $\\Delta > 0$: "Trong trái – Ngoài cùng" — trong khoảng hai nghiệm $(-1; 3)$, $f(x)$ trái dấu với $a$ ($f(x) < 0$).'
        },
        {
          q: 'Bấm nút "Δ = 0 (Tiếp xúc Ox)" (a = 1, b = −2, c = 1). Tập nghiệm của bất phương trình f(x) > 0 là:',
          opts: ['S = ℝ \\ {1}', 'S = ℝ', 'S = ∅', 'S = (1; +∞)'],
          ans: 0,
          exp: 'Với $f(x) = x^2 - 2x + 1 = (x - 1)^2$, ta có $\\Delta = 0$ và nghiệm kép $x = 1$. Do đó $f(x) > 0 \\iff x \\neq 1$, hay $S = \\mathbb{R} \\setminus \\{1\\}$.'
        }
      ]
    },
    'toan10-b21': {
      subject: 'math',
      simType: 'geometry',
      simOptions: { mode: 'circle', ellipseA: 3.2, ellipseB: 1.0, ellipseThetaDeg: 55 },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 21',
      title: 'Thực hành Phương trình Đường tròn (C) & Phương trình Tiếp tuyến tại M₀',
      guide: 'Kéo thanh trượt bán kính R, hoành độ tâm x_I và góc θ của tiếp điểm M₀(x₀; y₀) trên đường tròn để quan sát vectơ pháp tuyến IM₀⃗ và phương trình tiếp tuyến.',
      questions: [
        {
          q: 'Trên bảng thông số của mô phỏng, nếu tâm đường tròn có tọa độ I(a; b) và bán kính R thì phương trình chính tắc của đường tròn (C) là:',
          opts: ['(x − a)² + (y − b)² = R²', '(x + a)² + (y + b)² = R²', '(x − a)² + (y − b)² = R', 'x² + y² − ax − by = R²'],
          ans: 0,
          exp: 'Phương trình chính tắc của đường tròn tâm $I(a; b)$, bán kính $R$ là $(x - a)^2 + (y - b)^2 = R^2$.'
        },
        {
          q: 'Khi bạn kéo thanh trượt góc θ để điểm M₀(x₀; y₀) di chuyển trên đường tròn tâm I(a; b), đường tiếp tuyến Δ màu đỏ tại M₀ luôn nhận vectơ nào làm vectơ pháp tuyến?',
          opts: ['Nhận vectơ bán kính IM₀⃗ = (x₀ − a; y₀ − b) làm vectơ pháp tuyến (vì tiếp tuyến vuông góc với bán kính tại tiếp điểm)', 'Nhận OM₀⃗ làm vectơ pháp tuyến', 'Song song với bán kính IM₀', 'Đi qua tâm I'],
          ans: 0,
          exp: 'Tiếp tuyến $\\Delta$ tại $M_0(x_0; y_0) \\in (C)$ vuông góc với bán kính $IM_0$ nên có phương trình $(x_0 - a)(x - x_0) + (y_0 - b)(y - y_0) = 0$.'
        },
        {
          q: 'Phương trình dạng khai triển x² + y² − 2ax − 2by + c = 0 là phương trình của một đường tròn khi và chỉ khi các hệ số a, b, c thỏa mãn điều kiện nào?',
          opts: ['a² + b² − c > 0 (khi đó tâm là I(a; b) và bán kính R = √(a² + b² − c))', 'a² + b² − c < 0', 'a² + b² − c = 0', 'Với mọi a, b, c ∈ ℝ'],
          ans: 0,
          exp: 'Đưa về dạng $(x-a)^2 + (y-b)^2 = a^2 + b^2 - c$, phương trình biểu diễn đường tròn khi và chỉ khi $a^2 + b^2 - c > 0$.'
        }
      ]
    },
    'toan10-b1': {
      subject: 'math',
      simType: 'logic_set',
      simOptions: { mode: 'logic', pVal: true, qVal: false, varX: 2.0 },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 1',
      title: 'Thực hành Mệnh đề Logic, Bảng chân trị P ⇒ Q, P ⇔ Q & Lượng từ ∀, ∃',
      guide: 'Bật/tắt chân trị Đúng (Đ) / Sai (S) của hai mệnh đề P, Q và kéo thanh trượt biến x để kiểm tra mệnh đề chứa biến P(x): x² − 4x + 3 ≤ 0.',
      questions: [
        {
          q: 'Trên bảng chân trị của mô phỏng, mệnh đề kéo theo "P ⇒ Q" nhận giá trị SAI (S) trong trường hợp duy nhất nào?',
          opts: ['Khi giả thiết P Đúng (Đ) nhưng kết luận Q Sai (S)', 'Khi P Sai (S) và Q Đúng (Đ)', 'Khi cả P và Q cùng Sai (S)', 'Khi cả P và Q cùng Đúng (Đ)'],
          ans: 0,
          exp: 'Mệnh đề kéo theo $P \\Rightarrow Q$ chỉ sai khi $P$ đúng mà $Q$ sai; trong mọi trường hợp còn lại $P \\Rightarrow Q$ đều đúng.'
        },
        {
          q: 'Kéo thanh trượt biến x về x = 2,0 trong mệnh đề chứa biến P(x): "x² − 4x + 3 ≤ 0". Giá trị vế trái và tính đúng/sai của P(2) là:',
          opts: ['2² − 4(2) + 3 = −1 ≤ 0 ⇒ P(2) là mệnh đề ĐÚNG', 'P(2) = 3 > 0 ⇒ Mệnh đề SAI', 'Không phải là mệnh đề khi x = 2', 'Vừa đúng vừa sai'],
          ans: 0,
          exp: 'Khi gán $x = 2$, mệnh đề chứa biến $P(x)$ trở thành một mệnh đề xác định: $4 - 8 + 3 = -1 \\le 0$ (mệnh đề Đúng).'
        },
        {
          q: 'Quan sát khung công thức lượng từ trên mô phỏng, mệnh đề phủ định của mệnh đề "∀x ∈ ℝ, x² − 4x + 3 ≤ 0" là:',
          opts: ['∃x ∈ ℝ, x² − 4x + 3 > 0', '∀x ∈ ℝ, x² − 4x + 3 > 0', '∃x ∈ ℝ, x² − 4x + 3 ≥ 0', '∄x ∈ ℝ, x² − 4x + 3 ≤ 0'],
          ans: 0,
          exp: 'Khi lấy phủ định mệnh đề chứa lượng từ, ta đổi $\\forall$ thành $\\exists$ (và ngược lại), đồng thời phủ định tính chất $P(x)$ ($\\le$ đổi thành $>$).'
        }
      ]
    },
    'toan10-b2': {
      subject: 'math',
      simType: 'logic_set',
      simOptions: { mode: 'venn', vennOp: 'inter' },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 2',
      title: 'Thực hành Biểu đồ Venn & Phép toán Tập hợp trên Trục số ℝ',
      guide: 'Chuyển đổi giữa "2. Biểu đồ Venn (Bài 2)" và "3. Tập con trục số ℝ (Bài 2)", bấm chọn các phép toán Giao A ∩ B, Hợp A ∪ B, Hiệu A \\ B và kéo các đầu mút khoảng/đoạn.',
      questions: [
        {
          q: 'Ở chế độ "2. Biểu đồ Venn", với n(A) = 18, n(B) = 15 và phần giao n(A ∩ B) = 7. Số phần tử của hợp hai tập hợp n(A ∪ B) bằng bao nhiêu?',
          opts: ['n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 18 + 15 − 7 = 26', 'n(A ∪ B) = 18 + 15 = 33', 'n(A ∪ B) = 18 − 7 = 11', 'n(A ∪ B) = 15 − 7 = 8'],
          ans: 0,
          exp: 'Theo công thức lực lượng hợp hai tập hợp hữu hạn: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 18 + 15 - 7 = 26$.'
        },
        {
          q: 'Chuyển sang chế độ "3. Tập con trục số ℝ" với A = [−3; 2] và B = (−1; 4,5). Giao A ∩ B và hợp A ∪ B trên trục số bằng:',
          opts: ['A ∩ B = (−1; 2] và A ∪ B = [−3; 4,5)', 'A ∩ B = [−1; 2] và A ∪ B = (−3; 4,5]', 'A ∩ B = [−3; −1] và A ∪ B = (2; 4,5)', 'A ∩ B = ∅'],
          ans: 0,
          exp: 'Phần chung của $[-3; 2]$ và $(-1; 4{,}5)$ là $(-1; 2]$ (không lấy $-1$ vì $-1 \\notin B$, lấy $2$ vì $2 \\in A$ và $2 \\in B$).'
        },
        {
          q: 'Trên chế độ trục số ℝ, nếu bạn kéo đầu mút sao cho A = [−4; −1] và B = (1; 4) (hai tập không giao nhau), kết quả A ∩ B hiển thị là gì?',
          opts: ['A ∩ B = ∅ (Hai tập hợp rời nhau)', 'A ∩ B = [−1; 1]', 'A ∩ B = {0}', 'A ∩ B = [−4; 4)'],
          ans: 0,
          exp: 'Vì $-1 < 1$ nên hai tập hợp $A$ và $B$ không có phần tử chung nào, suy ra $A \\cap B = \\varnothing$.'
        }
      ]
    },
    'toan10-b7': {
      subject: 'math',
      simType: 'vector',
      simOptions: { mode: 'concepts', scalarK: 1.0, ux: 3.0, uy: 2.0 },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 7',
      title: 'Thực hành Các khái niệm mở đầu về Vectơ: Phương, Hướng, Độ dài & Hai vectơ bằng nhau',
      guide: 'Ở chế độ "1. Khái niệm & k·u⃗", kéo đầu mút vectơ u⃗ = OA⃗ trên mặt phẳng và bấm các nút "k = 1 (Hai vectơ bằng nhau)", "k = −1 (Hai vectơ đối nhau)", "k = 0 (Vectơ-không)".',
      questions: [
        {
          q: 'Khi bấm nút "k = 1 (Hai vectơ bằng nhau)" trên mô phỏng, vectơ màu xanh lá và vectơ u⃗ màu xanh dương có quan hệ gì?',
          opts: ['Cùng hướng (cùng phương, cùng chiều) và có cùng độ dài |u⃗|', 'Chỉ có cùng độ dài nhưng ngược hướng', 'Có cùng điểm đầu', 'Vuông góc với nhau'],
          ans: 0,
          exp: 'Hai vectơ được gọi là bằng nhau khi và chỉ khi chúng có cùng hướng và cùng độ dài (không phụ thuộc vị trí điểm đặt).'
        },
        {
          q: 'Khi bấm nút "k = 0 (Vectơ-không 0⃗)", vectơ thu được có đặc điểm gì trên mô phỏng?',
          opts: ['Điểm đầu và điểm cuối trùng nhau, độ dài bằng 0 và được quy ước cùng phương, cùng hướng với mọi vectơ', 'Độ dài bằng 1', 'Không có phương', 'Luôn vuông góc với trục Ox'],
          ans: 0,
          exp: 'Vectơ-không $\\vec{0}$ (như $\\overrightarrow{AA}, \\overrightarrow{BB}$) có độ dài bằng $0$ và cùng phương, cùng hướng với mọi vectơ.'
        },
        {
          q: 'Kéo đầu mút vectơ u⃗ về tọa độ (3; 2). Độ dài |u⃗| hiển thị trên bảng thông số bằng bao nhiêu?',
          opts: ['|u⃗| = √(3² + 2²) = √13 ≈ 3,61', '|u⃗| = 3 + 2 = 5,00', '|u⃗| = 3² + 2² = 13,00', '|u⃗| = 1,00'],
          ans: 0,
          exp: 'Theo định lý Pythagore, độ dài của vectơ $\\vec{u}(3; 2)$ là $|\\vec{u}| = \\sqrt{3^2 + 2^2} = \\sqrt{13} \\approx 3{,}61$.'
        }
      ]
    },
    'toan10-b9': {
      subject: 'math',
      simType: 'vector',
      simOptions: { mode: 'concepts', scalarK: -1.5, ux: 3.0, uy: 2.0 },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 9',
      title: 'Thực hành Tích của một Vectơ với một số k·u⃗, Trung điểm I & Trọng tâm G',
      guide: 'Kéo thanh trượt số thực k từ −2,5 đến +2,5 trên mô phỏng để quan sát hướng và độ dài của vectơ k·u⃗, đồng thời kiểm nghiệm hệ thức trung điểm I và trọng tâm G.',
      questions: [
        {
          q: 'Trên mô phỏng, khi kéo thanh trượt số thực k sang giá trị âm (ví dụ k = −1,5) với u⃗ ≠ 0⃗, hướng và độ dài của vectơ k·u⃗ như thế nào?',
          opts: ['Ngược hướng với vectơ u⃗ và có độ dài |k·u⃗| = |k|·|u⃗| = 1,5|u⃗|', 'Cùng hướng với vectơ u⃗', 'Có độ dài âm (−1,5|u⃗|)', 'Vuông góc với u⃗'],
          ans: 0,
          exp: 'Tích $k\\vec{u}$ ($k < 0, \\vec{u} \\neq \\vec{0}$) là một vectơ ngược hướng với $\\vec{u}$ và có độ dài bằng $|k| \\cdot |\\vec{u}|$.'
        },
        {
          q: 'Quan sát điểm Trung điểm I của đoạn OA và Trọng tâm G của tam giác OAB trên mô phỏng. Hệ thức vectơ đặc trưng nào luôn đúng?',
          opts: ['IA⃗ + IO⃗ = 0⃗ (trung điểm) và GO⃗ + GA⃗ + GB⃗ = 0⃗ (trọng tâm)', 'IA⃗ = IO⃗', 'GO⃗ + GA⃗ = GB⃗', 'IA⃗ − IO⃗ = 0⃗'],
          ans: 0,
          exp: '$I$ là trung điểm $OA \\iff \\overrightarrow{IO} + \\overrightarrow{IA} = \\vec{0}$; $G$ là trọng tâm $\\triangle OAB \\iff \\overrightarrow{GO} + \\overrightarrow{GA} + \\overrightarrow{GB} = \\vec{0}$.'
        },
        {
          q: 'Điều kiện cần và đủ để hai vectơ u⃗ và v⃗ (với u⃗ ≠ 0⃗) cùng phương (nằm trên cùng một đường thẳng hoặc hai đường thẳng song song) là:',
          opts: ['Tồn tại duy nhất một số thực k sao cho v⃗ = k·u⃗', 'u⃗ · v⃗ = 0', '|u⃗| = |v⃗|', 'u⃗ + v⃗ = 0⃗'],
          ans: 0,
          exp: 'Hai vectơ $\\vec{u} \\neq \\vec{0}$ và $\\vec{v}$ cùng phương khi và chỉ khi tồn tại số thực $k$ để $\\vec{v} = k\\vec{u}$.'
        }
      ]
    },
    'toan10-b10': {
      subject: 'math',
      simType: 'vector',
      simOptions: { mode: 'vectors', ux: 2.0, uy: 3.0, vx: 4.0, vy: -1.0 },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 10',
      title: 'Thực hành Vectơ trong mặt phẳng tọa độ Oxy: Biểu diễn u⃗ = x·i⃗ + y·j⃗',
      guide: 'Kéo ngọn của hai vectơ u⃗ và v⃗ trên hệ trục tọa độ Oxy để quan sát sự phân tích theo hai vectơ đơn vị i⃗(1; 0), j⃗(0; 1) và phép toán tọa độ.',
      questions: [
        {
          q: 'Trên mô phỏng, khi đặt ngọn vectơ u⃗ tại tọa độ (2; 3), biểu diễn của u⃗ theo hai vectơ đơn vị trục hoành i⃗ = (1; 0) và trục tung j⃗ = (0; 1) là:',
          opts: ['u⃗ = 2i⃗ + 3j⃗', 'u⃗ = 3i⃗ + 2j⃗', 'u⃗ = 2i⃗ − 3j⃗', 'u⃗ = 5(i⃗ + j⃗)'],
          ans: 0,
          exp: 'Trong mặt phẳng tọa độ $Oxy$, $\\vec{u} = (x; y) \\iff \\vec{u} = x\\vec{i} + y\\vec{j}$. Với $\\vec{u} = (2; 3)$ ta có $\\vec{u} = 2\\vec{i} + 3\\vec{j}$.'
        },
        {
          q: 'Với hai điểm A(2; 3) (ngọn của u⃗) và B(4; −1) (ngọn của v⃗), tọa độ của vectơ AB⃗ = OB⃗ − OA⃗ = v⃗ − u⃗ là:',
          opts: ['AB⃗ = (4 − 2; −1 − 3) = (2; −4)', 'AB⃗ = (2 − 4; 3 − (−1)) = (−2; 4)', 'AB⃗ = (6; 2)', 'AB⃗ = (3; 1)'],
          ans: 0,
          exp: 'Muốn tìm tọa độ vectơ $\\overrightarrow{AB}$, ta lấy tọa độ điểm cuối $B$ trừ tọa độ điểm đầu $A$: $(x_B - x_A; y_B - y_A) = (2; -4)$.'
        },
        {
          q: 'Tọa độ trung điểm M của đoạn thẳng nối A(2; 3) và B(4; −1) bằng:',
          opts: ['M((2+4)/2; (3−1)/2) = (3; 1)', 'M(6; 2)', 'M(1; −2)', 'M(2; 2)'],
          ans: 0,
          exp: 'Tọa độ trung điểm $M$ của $AB$ là trung bình cộng tọa độ hai đầu mút: $x_M = \\frac{2+4}{2} = 3,\\, y_M = \\frac{3+(-1)}{2} = 1$.'
        }
      ]
    },
    'toan10-b12': {
      subject: 'math',
      simType: 'stats10',
      simOptions: { mode: 'error' },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 12',
      title: 'Thực hành Số gần đúng, Sai số tuyệt đối, Sai số tương đối & Quy tròn số',
      guide: 'Ở chế độ "1. Số gần đúng & Sai số (Bài 12)", bấm chọn các phép đo thực tế (π, √2, Chiều dài cầu 152,68 m) và chọn độ chính xác d = 0,1; 0,01; 0,001.',
      questions: [
        {
          q: 'Trên mô phỏng, khi chọn số gần đúng a = 3,14159265 (số π) với độ chính xác d = 0,01 (hàng phần trăm), hàng quy tròn chuẩn theo quy tắc SGK là hàng nào và kết quả quy tròn là bao nhiêu?',
          opts: ['Quy tròn đến hàng phần mười (gấp 10 lần d = 0,01), được kết quả là 3,1', 'Quy tròn đến hàng phần trăm được 3,14', 'Quy tròn đến hàng đơn vị được 3', 'Quy tròn đến hàng phần nghìn được 3,142'],
          ans: 0,
          exp: 'Theo quy tắc SGK Toán 10 Bài 12: Nếu độ chính xác $d$ đến hàng phần trăm ($0{,}01$) thì ta phải quy tròn số gần đúng $a$ đến hàng phần mười ($0{,}1$), được $3{,}1$.'
        },
        {
          q: 'Khi chọn phép đo "Chiều dài cầu a = 152,68 m" với độ chính xác d = 0,1 m, khoảng chứa giá trị đúng ā và sai số tương đối δ_a là:',
          opts: ['ā ∈ [152,58; 152,78] và δ_a ≤ 0,1 / 152,68 ≈ 0,0655%', 'ā ∈ [151,68; 153,68]', 'δ_a = 10%', 'Sai số tuyệt đối bằng 152,68 m'],
          ans: 0,
          exp: 'Với $\\bar{a} = a \\pm d = 152{,}68 \\pm 0{,}1$, số đúng nằm trong đoạn $[152{,}58; 152{,}78]$ và sai số tương đối $\\delta_a \\le \\frac{d}{|a|} = \\frac{0{,}1}{152{,}68} \\approx 0{,}0655\\%$.'
        },
        {
          q: 'Vì sao để đánh giá chất lượng chính xác giữa hai phép đo khác nhau (ví dụ đo chiều dài cây cầu 152,68 m và đo đường kính viên bi 1,41 cm có cùng d = 0,01), người ta phải dựa vào sai số tương đối δ_a?',
          opts: ['Vì sai số tương đối δ_a = Δ_a / |a| tính tỉ lệ phần trăm sai số so với độ lớn vật đo; δ_a càng nhỏ thì phép đo càng chính xác', 'Vì sai số tuyệt đối luôn bằng 0', 'Vì sai số tương đối không phụ thuộc vào a', 'Vì hai phép đo có cùng sai số tương đối'],
          ans: 0,
          exp: 'Cùng độ chính xác $d = 0{,}01$, phép đo cầu có $\\delta_a \\approx 0{,}0065\\%$ nhỏ hơn rất nhiều so với $\\delta_a \\approx 0{,}71\\%$ nên chính xác hơn.'
        }
      ]
    },
    'toan10-b13': {
      subject: 'math',
      simType: 'stats10',
      simOptions: { mode: 'central', x7: 9 },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 13',
      title: 'Thực hành Các số đặc trưng đo xu thế trung tâm: Số trung bình x̄, Trung vị M_e, Tứ phân vị & Mốt',
      guide: 'Quan sát mẫu số liệu 7 phần tử [5; 6; 6; 7; 7; 8; x₇] trên trục điểm cân bằng và kéo thanh trượt x₇ từ 9 lên 18 để so sánh độ ổn định của Trung vị M_e và Số trung bình x̄.',
      questions: [
        {
          q: 'Với mẫu số liệu cân đối [5; 6; 6; 7; 7; 8; 9] (khi x₇ = 9), giá trị của số trung bình cộng x̄, trung vị M_e (Q₂) và hai tứ phân vị Q₁, Q₃ là:',
          opts: ['x̄ ≈ 6,86; Trung vị M_e = 7; Q₁ = 6 và Q₃ = 8', 'x̄ = 7; M_e = 6; Q₁ = 5; Q₃ = 9', 'x̄ = 6; M_e = 8', 'Q₁ = 7; Q₃ = 7'],
          ans: 0,
          exp: 'Mẫu đã sắp thứ tự có $n = 7$ (lẻ) nên trung vị là số đứng thứ 4: $M_e = Q_2 = 7$. Nửa dưới $[5; 6; 6]$ có trung vị $Q_1 = 6$; nửa trên $[7; 8; 9]$ có trung vị $Q_3 = 8$.'
        },
        {
          q: 'Khi bạn kéo thanh trượt x₇ từ 9 lên 18 (bấm nút "Tạo giá trị bất thường x₇ = 18"), tam giác điểm tựa x̄ dịch chuyển mạnh sang phải (x̄ tăng lên 8,14), nhưng trung vị M_e thì sao?',
          opts: ['Trung vị M_e vẫn giữ nguyên bằng 7 (nên khi mẫu có giá trị bất thường/chênh lệch lớn, ta dùng Trung vị làm đại diện thay cho Số trung bình)', 'Trung vị M_e tăng lên 18', 'Trung vị M_e giảm xuống 5', 'Tứ phân vị Q₁ tăng lên 10'],
          ans: 0,
          exp: 'Trung vị $M_e$ chỉ phụ thuộc vào vị trí chính giữa của dãy sắp thứ tự nên không bị ảnh hưởng bởi các giá trị quá lớn hoặc quá nhỏ ở hai đầu.'
        },
        {
          q: 'Trong mẫu [5; 6; 6; 7; 7; 8; 9], hai giá trị 6 và 7 cùng xuất hiện nhiều nhất (tần số bằng 2). Khi đó Mốt (M_o) của mẫu là:',
          opts: ['Mẫu có hai mốt là M_o = 6 và M_o = 7', 'Mẫu không có mốt', 'Mốt bằng trung bình cộng 6,5', 'Mốt bằng 9'],
          ans: 0,
          exp: 'Một mẫu số liệu có thể có một hoặc nhiều mốt (các giá trị có tần số xuất hiện lớn nhất).'
        }
      ]
    },
    'toan10-b15': {
      subject: 'math',
      simType: 'quadratic',
      simOptions: { mode: 'parabola', a: 1, b: -2, c: 0, x0: 2.0 },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 15',
      title: 'Thực hành Khái niệm Hàm số, Đồ thị & Sự biến thiên (Đồng biến / Nghịch biến)',
      guide: 'Kéo thanh trượt "Điểm khảo sát (x₀)" từ −4 đến +5 để điểm M(x₀; f(x₀)) trượt dọc theo đồ thị và quan sát khoảng đồng biến (đồ thị đi lên) và nghịch biến (đồ thị đi xuống).',
      questions: [
        {
          q: 'Trên mô phỏng hàm số y = f(x) = x² − 2x (a = 1, b = −2, c = 0), khi bạn kéo thanh trượt điểm khảo sát về x₀ = 2,0, tọa độ điểm M(x₀; f(x₀)) thuộc đồ thị là:',
          opts: ['M(2; 0) (vì f(2) = 2² − 2·2 = 0)', 'M(2; 4)', 'M(0; 2)', 'M(2; −2)'],
          ans: 0,
          exp: 'Đồ thị hàm số $y = f(x)$ trên mặt phẳng $Oxy$ là tập hợp tất cả các điểm $M(x; f(x))$ với $x \\in D$. Tại $x_0 = 2$, $f(2) = 0$ nên $M(2; 0)$.'
        },
        {
          q: 'Khi kéo hoành độ x₀ tăng dần từ −3 đến 1 (trên khoảng (−∞; 1)), tung độ f(x₀) của điểm M thay đổi như thế nào từ trái sang phải?',
          opts: ['Tung độ f(x₀) giảm dần (đồ thị đi xuống từ trái sang phải) ⇒ Hàm số nghịch biến trên khoảng (−∞; 1)', 'Tung độ f(x₀) tăng dần ⇒ Hàm số đồng biến', 'Tung độ f(x₀) không đổi', 'Đồ thị bị đứt nét'],
          ans: 0,
          exp: 'Với mọi $x_1 < x_2$ thuộc $(-\\infty; 1)$, ta có $f(x_1) > f(x_2)$ (đồ thị đi xuống từ trái sang phải) nên hàm số nghịch biến trên $(-\\infty; 1)$.'
        },
        {
          q: 'Khi kéo hoành độ x₀ tăng dần trên khoảng (1; +∞), tung độ f(x₀) tăng lên (đồ thị đi lên từ trái sang phải). Khẳng định nào đúng?',
          opts: ['Hàm số đồng biến trên khoảng (1; +∞) (vì x₁ < x₂ ⇒ f(x₁) < f(x₂))', 'Hàm số nghịch biến trên (1; +∞)', 'Hàm số là hàm hằng', 'Tập giá trị của hàm số là (−∞; 0]'],
          ans: 0,
          exp: 'Trên khoảng $(1; +\\infty)$, khi $x$ tăng thì $f(x)$ tăng ($x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$), đồ thị đi lên từ trái sang phải nên hàm số đồng biến.'
        }
      ]
    },
    'toan10-b18': {
      subject: 'math',
      simType: 'quadratic',
      simOptions: { mode: 'irrat_eq', a: 1, b: -3, c: 2, d: 1, e: -1 },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 18',
      title: 'Thực hành Phương trình quy về phương trình bậc hai: √(ax² + bx + c) = dx + e',
      guide: 'Ở chế độ "2. PT √f(x) = dx + e (Bài 18)", kéo thanh trượt hệ số đường thẳng e để quan sát giao điểm của đường thẳng y = dx + e với nhánh căn dương √f(x) (nghiệm nhận) và nhánh âm −√f(x) (nghiệm ngoại lai).',
      questions: [
        {
          q: 'Khi giải phương trình dạng √f(x) = g(x) bằng cách bình phương hai vế đưa về f(x) = [g(x)]², điều kiện bắt buộc để không lấy nhầm nghiệm ngoại lai là gì?',
          opts: ['Phải có điều kiện g(x) ≥ 0 (hoặc giải xong phương trình hệ quả f(x) = [g(x)]² phải thử lại vào phương trình ban đầu)', 'Chỉ cần f(x) ≤ 0', 'Không cần điều kiện nào vì hai phương trình luôn tương đương', 'Chỉ cần g(x) < 0'],
          ans: 0,
          exp: 'Vì căn bậc hai số học $\\sqrt{f(x)} \\ge 0$ nên vế phải bắt buộc phải thỏa mãn $g(x) \\ge 0$. Khi đó $f(x) = [g(x)]^2 \\ge 0$ cũng tự động thỏa mãn.'
        },
        {
          q: 'Trên mô phỏng phương trình √(x² − 3x + 2) = x + e, khi bạn kéo thanh trượt hệ số e về e = 1 (tức √(x² − 3x + 2) = x + 1), nghiệm duy nhất thỏa mãn là:',
          opts: ['x = 1/5 = 0,20 (thỏa mãn x + 1 = 1,2 > 0)', 'x = 2', 'x = −2', 'Phương trình vô nghiệm'],
          ans: 0,
          exp: 'Bình phương hai vế: $x^2 - 3x + 2 = x^2 + 2x + 1 \\iff 5x = 1 \\iff x = 0{,}2$. Thử lại $x + 1 = 1{,}2 \\ge 0$ (nhận).'
        },
        {
          q: 'Vì sao trên đồ thị mô phỏng, những giao điểm của đường thẳng y = dx + e với nhánh nét đứt phía dưới trục hoành (y = −√f(x)) lại bị đánh dấu màu đỏ là "Nghiệm loại"?',
          opts: ['Vì tại đó dx + e < 0 nên chỉ thỏa mãn phương trình −√f(x) = dx + e chứ không thỏa mãn √f(x) = dx + e', 'Vì tại đó biểu thức trong căn âm', 'Vì đường thẳng song song với trục Ox', 'Vì hệ số a = 0'],
          ans: 0,
          exp: 'Phương trình bình phương $f(x) = (dx+e)^2 \\iff \\sqrt{f(x)} = dx+e$ hoặc $-\\sqrt{f(x)} = dx+e$. Các giao điểm với nhánh âm $-\\sqrt{f(x)}$ là nghiệm ngoại lai.'
        }
      ]
    },
    'toan10-b20': {
      subject: 'math',
      simType: 'vector',
      simOptions: { mode: 'twolines', la: 2.0, lb: -1.0, lc: -1.0, l2a: 1.0, l2b: 2.0, l2c: -3.0 },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 20',
      title: 'Thực hành Vị trí tương đối giữa hai Đường thẳng, Góc φ & Khoảng cách',
      guide: 'Ở chế độ "4. Hai đường thẳng & Góc (Bài 20)", bấm các nút chọn nhanh "Vuông góc (φ = 90°)", "Cắt nhau (φ = 45°)", "Song song (Δ₁ // Δ₂)", "Trùng nhau (Δ₁ ≡ Δ₂)" hoặc kéo thanh trượt a₁, b₁, c₁.',
      questions: [
        {
          q: 'Bấm nút "Vuông góc (φ = 90°)" trên mô phỏng với Δ₁: 2x − y − 1 = 0 (n⃗₁ = (2; −1)) và Δ₂: x + 2y − 3 = 0 (n⃗₂ = (1; 2)). Vì sao góc φ giữa hai đường thẳng bằng 90°?',
          opts: ['Vì tích vô hướng hai vectơ pháp tuyến n⃗₁ · n⃗₂ = 2(1) + (−1)(2) = 0 ⇒ cos φ = 0 ⇒ φ = 90°', 'Vì hai vectơ pháp tuyến cùng phương', 'Vì c₁ = c₂', 'Vì hai đường thẳng song song'],
          ans: 0,
          exp: 'Ta có $\\cos(\\Delta_1, \\Delta_2) = \\frac{|a_1a_2 + b_1b_2|}{\\sqrt{a_1^2+b_1^2}\\sqrt{a_2^2+b_2^2}} = 0 \\iff a_1a_2 + b_1b_2 = 0 \\iff \\Delta_1 \\perp \\Delta_2$.'
        },
        {
          q: 'Góc φ giữa hai đường thẳng bất kỳ trong mặt phẳng tọa độ luôn nằm trong phạm vi nào?',
          opts: ['0° ≤ φ ≤ 90° (vì cos φ = |n⃗₁ · n⃗₂| / (|n⃗₁|·|n⃗₂|) ≥ 0 luôn lấy giá trị tuyệt đối ở tử số)', '0° ≤ φ ≤ 180°', '0° ≤ φ ≤ 360°', '90° ≤ φ ≤ 180°'],
          ans: 0,
          exp: 'Theo định nghĩa SGK Toán 10 Bài 20, góc giữa hai đường thẳng cắt nhau là góc nhỏ nhất trong 4 góc tạo thành nên luôn thỏa mãn $0^\\circ \\le \\varphi \\le 90^\\circ$.'
        },
        {
          q: 'Bấm nút "Song song (Δ₁ // Δ₂)" (2x − y − 2 = 0 và 2x − y + 3 = 0). Số nghiệm của hệ gồm phương trình hai đường thẳng này là:',
          opts: ['Hệ phương trình vô nghiệm (vì hai đường thẳng song song không có điểm chung nào)', 'Có 1 nghiệm duy nhất', 'Có vô số nghiệm', 'Có 2 nghiệm'],
          ans: 0,
          exp: 'Hai đường thẳng song song không có giao điểm nên hệ hai phương trình bậc nhất hai ẩn tương ứng vô nghiệm.'
        }
      ]
    },
    'toan10-b23': {
      subject: 'math',
      simType: 'combinatorics10',
      simOptions: { mode: 'counting', ruleType: 'mul' },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 23',
      title: 'Thực hành Quy tắc đếm (Quy tắc Cộng & Quy tắc Nhân) qua Sơ đồ hình cây',
      guide: 'Chuyển đổi giữa nút "Quy tắc Nhân (m × n)" và "Quy tắc Cộng (m + n)" và kéo thanh trượt số cách chọn m, n để quan sát sự phân nhánh của Sơ đồ hình cây.',
      questions: [
        {
          q: 'Trên mô phỏng ở chế độ "Quy tắc Nhân (m × n)", với m = 3 chiếc Áo và n = 4 chiếc Quần, số nhánh lá cuối cùng trên sơ đồ hình cây (số bộ trang phục gồm 1 Áo và 1 Quần) là:',
          opts: ['3 × 4 = 12 bộ trang phục', '3 + 4 = 7 bộ trang phục', '4³ = 64 bộ', '3! = 6 bộ'],
          ans: 0,
          exp: 'Việc chọn một bộ trang phục gồm 2 công đoạn liên tiếp: Chọn áo ($3$ cách) rồi chọn quần ($4$ cách). Theo quy tắc nhân có $3 \\times 4 = 12$ cách.'
        },
        {
          q: 'Khi chuyển sang nút "Quy tắc Cộng (m + n)" với Phương án A có m = 3 cách và Phương án B có n = 4 cách (hai phương án độc lập, không trùng nhau), tổng số cách hoàn thành công việc là:',
          opts: ['3 + 4 = 7 cách', '3 × 4 = 12 cách', '4 − 3 = 1 cách', '2⁷ = 128 cách'],
          ans: 0,
          exp: 'Khi công việc được thực hiện bởi một trong hai phương án độc lập A hoặc B, ta áp dụng quy tắc cộng: $m + n = 3 + 4 = 7$ cách.'
        },
        {
          q: 'Từ tập các chữ số {1; 2; 3; 4}, dùng sơ đồ hình cây để lập số tự nhiên có 2 chữ số khác nhau. Công đoạn 1 (chọn chữ số hàng chục) có 4 cách, công đoạn 2 (chọn chữ số hàng đơn vị khác hàng chục) có mấy cách và lập được bao nhiêu số?',
          opts: ['Công đoạn 2 có 3 cách ⇒ Lập được 4 × 3 = 12 số', 'Công đoạn 2 có 4 cách ⇒ Lập được 16 số', 'Lập được 4 + 3 = 7 số', 'Lập được 6 số'],
          ans: 0,
          exp: 'Hàng chục có $4$ cách chọn; ứng với mỗi cách chọn hàng chục, hàng đơn vị còn $3$ cách chọn chữ số khác nó $\\Rightarrow 4 \\times 3 = 12$ số.'
        }
      ]
    },
    'toan10-b24': {
      subject: 'math',
      simType: 'combinatorics10',
      simOptions: { mode: 'pac', nTotal: 5, kPick: 3 },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 24',
      title: 'Thực hành Hoán vị P_n, Chỉnh hợp A_n^k và Tổ hợp C_n^k',
      guide: 'Ở chế độ "2. Hoán vị, Chỉnh hợp, Tổ hợp (Bài 24)", kéo thanh trượt tổng số phần tử n và số phần tử lấy ra k (0 ≤ k ≤ n) để so sánh trực quan C_n^k, A_n^k và P_n.',
      questions: [
        {
          q: 'Trên mô phỏng với n = 5 phần tử và lấy ra k = 3 phần tử, số tổ hợp C₅³ (chọn 3 phần tử không phân biệt thứ tự) và số chỉnh hợp A₅³ (chọn 3 phần tử có xếp thứ tự) lần lượt là:',
          opts: ['C₅³ = 10 và A₅³ = 3! · C₅³ = 6 × 10 = 60', 'C₅³ = 60 và A₅³ = 10', 'C₅³ = 15 và A₅³ = 120', 'C₅³ = 5 và A₅³ = 25'],
          ans: 0,
          exp: 'Mỗi tập con tổ hợp gồm $k = 3$ phần tử khi hoán vị thứ tự sẽ tạo ra $3! = 6$ chỉnh hợp, nên $A_5^3 = 3! \\cdot C_5^3 = 6 \\times 10 = 60$.'
        },
        {
          q: 'Giữ nguyên n = 6 trên mô phỏng và lần lượt kéo k = 2 rồi k = 4 (hai giá trị k cộng lại bằng 6). Bạn nhận thấy điều gì về giá trị của C₆² và C₆⁴?',
          opts: ['Bằng nhau và cùng bằng 15 (tính chất đối xứng C_n^k = C_n^{n−k})', 'C₆⁴ gấp đôi C₆²', 'C₆² = 12 và C₆⁴ = 24', 'A₆² = A₆⁴'],
          ans: 0,
          exp: 'Chọn ra $k$ phần tử từ $n$ phần tử đồng nghĩa với việc để lại $n - k$ phần tử, do đó $C_n^k = C_n^{n-k}$ ($C_6^2 = C_6^4 = 15$).'
        },
        {
          q: 'Khi kéo thanh trượt k = n (ví dụ n = 5, k = 5), số chỉnh hợp chập n của n phần tử A₅⁵ có quan hệ gì với số hoán vị P₅ = 5!?',
          opts: ['Bằng nhau: A₅⁵ = P₅ = 5! = 120 (còn C₅⁵ = 1)', 'A₅⁵ = 0', 'A₅⁵ = 1', 'P₅ gấp 5 lần A₅⁵'],
          ans: 0,
          exp: 'Chỉnh hợp chập $n$ của $n$ phần tử chính là một hoán vị của $n$ phần tử đó: $A_n^n = P_n = n!$.'
        }
      ]
    },
    'toan10-b25': {
      subject: 'math',
      simType: 'combinatorics10',
      simOptions: { mode: 'newton', newtonN: 4, newtonA: 1, newtonB: 2 },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 25',
      title: 'Thực hành Khai triển Nhị thức Newton (ax + b)ⁿ (n = 4, 5) & Tam giác Pascal',
      guide: 'Ở chế độ "3. Nhị thức Newton & Tam giác Pascal (Bài 25)", chọn bậc n = 4 hoặc n = 5 và thay đổi hệ số a, b để quan sát hàng hệ số tổ hợp C_n^k và khai triển tường minh.',
      questions: [
        {
          q: 'Trên mô phỏng Tam giác Pascal, khi đặt bậc n = 4 thì hàng thứ 4 gồm các hệ số tổ hợp C₄⁰, C₄¹, C₄², C₄³, C₄⁴ lần lượt là:',
          opts: ['1; 4; 6; 4; 1 (gồm n + 1 = 5 số hạng và có tổng bằng 2⁴ = 16)', '1; 3; 3; 1', '1; 5; 10; 10; 5; 1', '4; 6; 4'],
          ans: 0,
          exp: 'Hàng $n = 4$ của Tam giác Pascal là $1, 4, 6, 4, 1$ ứng với khai triển $(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$.'
        },
        {
          q: 'Đặt n = 5, a = 1, b = 2 trên mô phỏng (khai triển nhị thức (x + 2)⁵). Hệ số của số hạng chứa x³ (ứng với k = 2) bằng bao nhiêu?',
          opts: ['C₅² · 1³ · 2² = 10 × 4 = 40 (số hạng là 40x³)', 'C₅² = 10', 'C₅³ · 2³ = 80', '20'],
          ans: 0,
          exp: 'Số hạng tổng quát của $(x+2)^5$ là $T_{k+1} = C_5^k x^{5-k} 2^k$. Số hạng chứa $x^3$ ứng với $5-k=3 \\iff k=2$, có hệ số $C_5^2 \\cdot 2^2 = 10 \\times 4 = 40$.'
        },
        {
          q: 'Nếu đặt a = 1 và b = −1 trên mô phỏng (khai triển (x − 1)ⁿ với n ≥ 1), tổng tất cả các hệ số của đa thức khai triển bằng bao nhiêu?',
          opts: ['Bằng (1 − 1)ⁿ = 0 (vì tổng các hệ số ở vị trí chẵn bằng tổng các hệ số ở vị trí lẻ)', 'Bằng 2ⁿ', 'Bằng 1', 'Bằng −2ⁿ'],
          ans: 0,
          exp: 'Thay $x = 1$ vào $(x - 1)^n = \\sum_{k=0}^n C_n^k (-1)^k x^{n-k}$, ta được tổng các hệ số là $(1 - 1)^n = 0$.'
        }
      ]
    },
    'toan10-b26': {
      subject: 'math',
      simType: 'probability',
      simOptions: { expType: 'dice1' },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 26',
      title: 'Thực hành Biến cố, Không gian mẫu Ω và Định nghĩa cổ điển của Xác suất',
      guide: 'Thực hiện phép thử ngẫu nhiên gieo xúc xắc 6 mặt đồng chất để khảo sát không gian mẫu Ω = {1; 2; 3; 4; 5; 6}, xác suất cổ điển P(A) = n(A)/n(Ω) và biến cố đối Ā.',
      questions: [
        {
          q: 'Khi gieo một con xúc xắc cân đối và đồng chất 1 lần trên mô phỏng, không gian mẫu Ω gồm 6 kết quả đồng khả năng. Xác suất cổ điển của mỗi mặt k ∈ {1, 2, 3, 4, 5, 6} là:',
          opts: ['P(X = k) = 1/6 ≈ 0,167', 'P(X = k) = 1/2 = 0,500', 'P(X = k) = 1/36', 'P(X = k) = k/6'],
          ans: 0,
          exp: 'Vì con xúc xắc cân đối và đồng chất nên $6$ kết quả đầu ra đều đồng khả năng, mỗi mặt có xác suất lý thuyết $P = \\frac{1}{6} \\approx 0{,}167$.'
        },
        {
          q: 'Gọi A là biến cố "Số chấm xuất hiện nhỏ hơn hoặc bằng 4" (A = {1; 2; 3; 4} có n(A) = 4). Khi đó biến cố đối Ā và xác suất P(Ā) bằng:',
          opts: ['Ā = {5; 6} và P(Ā) = 1 − P(A) = 1 − 4/6 = 2/6 = 1/3', 'Ā = {4; 5; 6} và P(Ā) = 1/2', 'P(Ā) = 4/6', 'P(Ā) = 0'],
          ans: 0,
          exp: 'Biến cố đối của "$\\le 4$" là "$> 4$", tức $\\overline{A} = \\{5; 6\\}$ có $P(\\overline{A}) = 1 - P(A) = 1 - \\frac{2}{3} = \\frac{1}{3}$.'
        },
        {
          q: 'Với mọi biến cố A trong phép thử ngẫu nhiên có không gian mẫu hữu hạn Ω, giá trị xác suất P(A) luôn thỏa mãn bất đẳng thức nào?',
          opts: ['0 ≤ P(A) ≤ 1 (với P(∅) = 0 và P(Ω) = 1)', 'P(A) > 1', '−1 ≤ P(A) ≤ 1', 'P(A) = n(A)'],
          ans: 0,
          exp: 'Vì $0 \\le n(A) \\le n(\\Omega)$ nên $0 \\le P(A) = \\frac{n(A)}{n(\\Omega)} \\le 1$, và $P(A) + P(\\overline{A}) = 1$.'
        }
      ]
    },
    'toan10-b22': {
      subject: 'math',
      simType: 'geometry',
      simOptions: { mode: 'ellipse' },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 22',
      title: 'Thực hành Khảo sát Đường Elip, Hypebol & Parabol (Ba đường Conic)',
      guide: 'Chọn các chế độ "3. Elip (Bài 22)", "4. Hypebol" hoặc "5. Parabol" trên thanh nút mô phỏng, kéo thanh trượt bán trục a, b và góc θ để quan sát tiêu điểm F₁, F₂ và bán kính qua tiêu.',
      questions: [
        {
          q: 'Chọn chế độ "3. Elip (Bài 22)", giữ cố định a = 4,5 và b = 2,8 rồi kéo thanh trượt góc θ để điểm M chạy dọc theo toàn bộ đường Elip. Tổng khoảng cách MF₁ + MF₂ thay đổi thế nào?',
          opts: ['Luôn không đổi và bằng đúng 2a = 9,0', 'Thay đổi liên tục theo góc θ', 'Luôn bằng 2b = 5,6', 'Luôn bằng tiêu cự 2c'],
          ans: 0,
          exp: 'Theo định nghĩa đường Elip, tập hợp các điểm $M$ thỏa mãn $MF_1 + MF_2 = 2a$ không đổi (với $a = 4{,}5 \\Rightarrow 2a = 9{,}0$).'
        },
        {
          q: 'Trên mô phỏng Elip, khi bạn kéo bán trục nhỏ b tiến dần sát tới bán trục lớn a (b → a), tiêu cự 2c và tâm sai e = c/a thay đổi ra sao?',
          opts: ['Tiêu cự 2c → 0, hai tiêu điểm F₁, F₂ chập lại về gốc tọa độ O và Elip tiến dần về hình tròn', 'Tiêu cự 2c tăng ra vô cùng', 'Tâm sai e tiến về 1', 'Elip biến thành Hyperbol'],
          ans: 0,
          exp: 'Vì $c = \\sqrt{a^2 - b^2}$, khi $b \\to a$ thì $c \\to 0$ và tâm sai $e = \\frac{c}{a} \\to 0$, đường Elip trở nên tròn dần.'
        },
        {
          q: 'Với a = 5,0 và b = 3,0 trên mô phỏng, nửa tiêu cự c và tiêu cự 2c của Elip nhận giá trị bằng bao nhiêu?',
          opts: ['c = 4,0 và tiêu cự 2c = 8,0', 'c = 2,0 và tiêu cự 2c = 4,0', 'c = √34 và tiêu cự 2c = 2√34', 'c = 8,0 và 2c = 16,0'],
          ans: 0,
          exp: 'Ta có $c = \\sqrt{a^2 - b^2} = \\sqrt{5^2 - 3^2} = \\sqrt{16} = 4{,}0$, suy ra tiêu cự $2c = 8{,}0$ và hai tiêu điểm là $F_1(-4; 0), F_2(4; 0)$.'
        }
      ]
    },
    'toan10-b27': {
      subject: 'math',
      simType: 'probability',
      simOptions: { expType: 'dice2' },
      labUrl: 'math_lab.html',
      badge: 'Toán 10 • Bài 27',
      title: 'Thực hành Tính xác suất cổ điển & Xác suất thực nghiệm',
      guide: 'So sánh cột màu vàng cam (Tần suất thực nghiệm f_k = n_k/N) và chấm tròn màu xanh (Xác suất lý thuyết P(X=k)) khi tăng số lần gieo xúc xắc hoặc tung đồng xu.',
      questions: [
        {
          q: 'Trong thí nghiệm "Gieo 2 Xúc xắc (Tổng 2..12)", tổng số chấm nào có xác suất lý thuyết cao nhất (đỉnh cao nhất của các chấm tròn màu xanh)?',
          opts: ['Tổng bằng 6 (P = 5/36)', 'Tổng bằng 7 (P = 6/36 = 1/6 ≈ 0,167)', 'Tổng bằng 8 (P = 5/36)', 'Tổng bằng 12 (P = 1/36)'],
          ans: 1,
          exp: 'Không gian mẫu có $n(\\Omega) = 36$ kết quả đồng khả năng. Tổng bằng $7$ có $6$ cặp thuận lợi: $(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)$ nên $P(X=7) = \\frac{6}{36} = \\frac{1}{6}$ lớn nhất.'
        },
        {
          q: 'Khi bạn bấm "Đặt lại mẫu" rồi bấm "+10 phép thử", cột tần suất thực nghiệm có thể lệch nhiều so với chấm tròn lý thuyết. Nhưng khi bấm "+1000 phép thử" nhiều lần thì hiện tượng gì xảy ra?',
          opts: ['Đỉnh các cột tần suất thực nghiệm xấp xỉ sát với các chấm xác suất lý thuyết (Luật số lớn)', 'Các cột bằng nhau hết', 'Chỉ xuất hiện tổng bằng 7', 'Phương sai bằng 0'],
          ans: 0,
          exp: 'Khi số phép thử ngẫu nhiên độc lập $N$ đủ lớn, tần suất thực nghiệm $f_k = \\frac{n_k}{N}$ hội tụ về xác suất lý thuyết $P(A)$.'
        },
        {
          q: 'Chuyển sang chế độ "Tung 10 Đồng xu B(10; 0.5)". Biến cố xuất hiện đúng 5 mặt Ngửa có xác suất lý thuyết bằng:',
          opts: ['C(10, 5) / 2¹⁰ = 252 / 1024 ≈ 0,246', '5 / 10 = 0,500', '1 / 1024', '10 / 1024'],
          ans: 0,
          exp: 'Số kết quả thuận lợi để có đúng $5$ mặt ngửa trong $10$ lần tung là $C_{10}^5 = 252$, không gian mẫu $n(\\Omega) = 2^{10} = 1024$, nên $P = \\frac{252}{1024} \\approx 0{,}246$.'
        }
      ]
    },
    'toan11-b1': {
      "subject": "math",
      "simType": "trig",
      "simOptions": {
            "angleDeg": 45,
            "func": "sin-cos",
            "studyMode": "full360",
            "multiTurn": true
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 1",
      "title": "Thực hành Đường tròn lượng giác & Góc lượng giác bất kỳ",
      "guide": "Kéo thanh trượt góc lượng giác α từ 0° đến 720° (quay 2 vòng) hoặc kéo điểm M trên đường tròn đơn vị để quan sát tọa độ M(cos α; sin α) và chu kỳ tuần hoàn.",
      "questions": [
            {
                  "q": "Kéo thanh trượt góc lượng giác từ α = 45° lên α = 405° (45° + 360°). Vị trí điểm M trên đường tròn lượng giác thay đổi thế nào?",
                  "opts": [
                        "Trùng nhau hoàn toàn vì hai góc hơn kém nhau k·360° (k·2π rad)",
                        "Đối xứng nhau qua gốc O",
                        "Đối xứng nhau qua trục Ox",
                        "Đối xứng nhau qua trục Oy"
                  ],
                  "ans": 0,
                  "exp": "Các góc lượng giác có số đo sai khác nhau một bội nguyên của $360^\\circ$ ($2\\pi\\text{ rad}$) có cùng điểm biểu diễn $M$ trên đường tròn lượng giác."
            },
            {
                  "q": "Quan sát bảng số liệu tại mọi vị trí góc α, hệ thức lượng giác cơ bản nào luôn thỏa mãn đối với tọa độ điểm M(cos α; sin α)?",
                  "opts": [
                        "sin²α + cos²α = 1",
                        "sin α + cos α = 1",
                        "sin²α − cos²α = 1",
                        "tan α + cot α = 1"
                  ],
                  "ans": 0,
                  "exp": "Vì điểm $M(\\cos\\alpha; \\sin\\alpha)$ nằm trên đường tròn đơn vị bán kính $R = 1$ nên $OM^2 = \\cos^2\\alpha + \\sin^2\\alpha = 1$ với mọi $\\alpha$."
            },
            {
                  "q": "Khi điểm M nằm ở góc phần tư thứ III (180° < α < 270°), dấu của các giá trị lượng giác là:",
                  "opts": [
                        "sin α < 0, cos α < 0 nhưng tan α > 0 và cot α > 0",
                        "Tất cả đều âm",
                        "sin α > 0, cos α < 0",
                        "sin α < 0, cos α > 0"
                  ],
                  "ans": 0,
                  "exp": "Ở góc phần tư thứ III, cả hoành độ $\\cos\\alpha < 0$ và tung độ $\\sin\\alpha < 0$, nên thương số $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} > 0$ và $\\cot\\alpha > 0$."
            }
      ]
},
    'toan11-b2': {
      "subject": "math",
      "simType": "trig",
      "simOptions": {
            "mode": "formulas",
            "angleDeg": 60,
            "betaDeg": 45,
            "func": "sin-cos"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 2",
      "title": "Thực hành Công thức Lượng giác: Công thức cộng, Nhân đôi & Biến đổi tích - tổng",
      "guide": "Điều chỉnh hai góc α và β trên đường tròn lượng giác để kiểm chứng công thức cộng cos(α − β) = cos α cos β + sin α sin β và công thức nhân đôi sin 2α = 2 sin α cos α.",
      "questions": [
            {
                  "q": "Chọn góc α = 60° và β = 30° trên mô phỏng. Khi đó giá trị của cos(α − β) = cos 30° so với biểu thức cos α cos β + sin α sin β như thế nào?",
                  "opts": [
                        "Luôn bằng nhau và bằng √3/2 ≈ 0.866 theo công thức cộng côsin",
                        "Khác nhau 0.5",
                        "Bằng 1",
                        "Bằng 0"
                  ],
                  "ans": 0,
                  "exp": "Theo công thức cộng côsin: $\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$. Với $\\alpha = 60^\\circ, \\beta = 30^\\circ$: $\\cos 30^\\circ = \\frac{1}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{3}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{3}}{2}$."
            },
            {
                  "q": "Đặt góc α = 30°. Khi đó giá trị sin 2α = sin 60° = √3/2 so với 2 sin α cos α có kết quả là:",
                  "opts": [
                        "Bằng đúng 2 · (1/2) · (√3/2) = √3/2 (Công thức nhân đôi sin 2α = 2 sin α cos α)",
                        "Bằng 1",
                        "Bằng 1/2",
                        "Bằng 2"
                  ],
                  "ans": 0,
                  "exp": "Công thức nhân đôi khẳng định $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$. Với $\\alpha = 30^\\circ$, $2\\sin 30^\\circ\\cos 30^\\circ = 2 \\cdot \\frac{1}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{2} = \\sin 60^\\circ$."
            },
            {
                  "q": "Từ công thức nhân đôi cos 2α = 2cos²α − 1 = 1 − 2sin²α, ta suy ra công thức hạ bậc cos²α bằng:",
                  "opts": [
                        "(1 + cos 2α) / 2",
                        "(1 − cos 2α) / 2",
                        "1 + cos 2α",
                        "2(1 + cos 2α)"
                  ],
                  "ans": 0,
                  "exp": "Từ $\\cos 2\\alpha = 2\\cos^2\\alpha - 1 \\Rightarrow \\cos^2\\alpha = \\frac{1 + \\cos 2\\alpha}{2}$, và $\\sin^2\\alpha = \\frac{1 - \\cos 2\\alpha}{2}$."
            }
      ]
},
    'toan11-b3': {
      "subject": "math",
      "simType": "trig",
      "simOptions": {
            "angleDeg": 60,
            "func": "tan"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 3",
      "title": "Thực hành Đồ thị Hàm số lượng giác y = sin x, cos x, tan x, cot x",
      "guide": "Chuyển đổi giữa 3 nút \"y = sin x & cos x\", \"y = tan x (Tiệm cận)\" và \"y = cot x (Tiệm cận)\" để khảo sát tập giá trị, tính tuần hoàn và đường tiệm cận đứng.",
      "questions": [
            {
                  "q": "Chọn chế độ \"y = sin x & cos x\" trên mô phỏng. Tập giá trị và chu kỳ tuần hoàn của hai hàm số y = sin x và y = cos x là:",
                  "opts": [
                        "Tập giá trị [−1; 1] và chu kỳ tuần hoàn T = 2π",
                        "Tập giá trị ℝ và chu kỳ T = π",
                        "Tập giá trị [0; 1] và chu kỳ T = 2π",
                        "Tập giá trị [−π; π] và chu kỳ T = π"
                  ],
                  "ans": 0,
                  "exp": "Đồ thị hàm số $y = \\sin x$ và $y = \\cos x$ dao động điều hòa giữa hai đường nằm ngang $y = -1$ và $y = 1$ với chu kỳ cơ sở $T = 2\\pi$."
            },
            {
                  "q": "Chuyển sang chế độ \"y = tan x (Tiệm cận)\". Vì sao đồ thị được ngắt thành từng nhánh riêng biệt bởi các đường nét đứt thẳng đứng tại x = −π/2, x = π/2, x = 3π/2?",
                  "opts": [
                        "Đó là các đường tiệm cận đứng nơi cos x = 0 (hàm tan x không xác định, không được vẽ nối qua điểm gián đoạn)",
                        "Do hàm số đạt giá trị bằng 0 tại đó",
                        "Do chu kỳ của tan x bằng 2π",
                        "Do sin x = 0 tại đó"
                  ],
                  "ans": 0,
                  "exp": "Hàm số $y = \\tan x = \\frac{\\sin x}{\\cos x}$ có tập xác định $D = \\mathbb{R} \\setminus \\{\\frac{\\pi}{2} + k\\pi\\}$ và chu kỳ $T = \\pi$. Tại $x = \\frac{\\pi}{2} + k\\pi$, đồ thị nhận đường thẳng đứng làm tiệm cận và gián đoạn."
            },
            {
                  "q": "Quan sát mỗi nhánh của đồ thị hàm số y = tan x và y = cot x trên từng khoảng xác định:",
                  "opts": [
                        "y = tan x luôn đồng biến (đi lên), còn y = cot x luôn nghịch biến (đi xuống) trên từng khoảng xác định",
                        "Cả hai đều đồng biến",
                        "Cả hai đều nghịch biến",
                        "y = tan x nghịch biến còn y = cot x đồng biến"
                  ],
                  "ans": 0,
                  "exp": "Trên mỗi khoảng $(-\\frac{\\pi}{2} + k\\pi; \\frac{\\pi}{2} + k\\pi)$ hàm $y = \\tan x$ luôn đồng biến; còn trên mỗi khoảng $(k\\pi; \\pi + k\\pi)$ hàm $y = \\cot x$ luôn nghịch biến."
            }
      ]
},
    'toan11-b4': {
      "subject": "math",
      "simType": "trig",
      "simOptions": {
            "mode": "equations",
            "paramM": 0.5,
            "func": "sin-cos"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 4",
      "title": "Thực hành Phương trình Lượng giác Cơ bản: sin x = m & cos x = m",
      "guide": "Kéo thanh trượt tham số m từ −1.5 đến 1.5 để quan sát số giao điểm giữa đường thẳng nằm ngang y = m với đồ thị hàm số lượng giác và các điểm biểu diễn nghiệm trên đường tròn.",
      "questions": [
            {
                  "q": "Khi kéo thanh trượt m = 1.2 (|m| > 1) đối với phương trình sin x = m, hiện tượng gì xảy ra trên mô phỏng?",
                  "opts": [
                        "Đường thẳng y = 1.2 không cắt đồ thị sin x, phương trình vô nghiệm",
                        "Phương trình có 1 nghiệm",
                        "Phương trình có 2 nghiệm",
                        "Phương trình có vô số nghiệm"
                  ],
                  "ans": 0,
                  "exp": "Vì $-1 \\le \\sin x \\le 1$ với mọi $x \\in \\mathbb{R}$, phương trình $\\sin x = m$ chỉ có nghiệm khi và chỉ khi $|m| \\le 1$. Khi $|m| > 1$, phương trình vô nghiệm."
            },
            {
                  "q": "Với m = 1/2 (m = 0.5), nghiệm tổng quát của phương trình sin x = 1/2 trên một chu kỳ là x = π/6 và x = 5π/6. Công thức nghiệm tổng quát trên ℝ là:",
                  "opts": [
                        "x = π/6 + k2π và x = 5π/6 + k2π (k ∈ ℤ)",
                        "x = π/6 + kπ (k ∈ ℤ)",
                        "x = ±π/6 + k2π (k ∈ ℤ)",
                        "x = π/3 + k2π (k ∈ ℤ)"
                  ],
                  "ans": 0,
                  "exp": "Phương trình $\\sin x = \\sin \\alpha$ có nghiệm $x = \\alpha + k2\\pi$ và $x = \\pi - \\alpha + k2\\pi$ ($k \\in \\mathbb{Z}$). Với $\\sin x = \\frac{1}{2} = \\sin \\frac{\\pi}{6}$, nghiệm là $x = \\frac{\\pi}{6} + k2\\pi$ và $x = \\frac{5\\pi}{6} + k2\\pi$."
            },
            {
                  "q": "Đối với phương trình cos x = m với |m| ≤ 1, hai họ nghiệm tổng quát có tính chất đối xứng nào trên đường tròn lượng giác?",
                  "opts": [
                        "Đối xứng nhau qua trục hoành Ox: x = ±arccos(m) + k2π (k ∈ ℤ)",
                        "Đối xứng qua Oy",
                        "Đối xứng qua gốc O",
                        "Trùng nhau"
                  ],
                  "ans": 0,
                  "exp": "Vì $\\cos(-x) = \\cos x$, hai điểm biểu diễn nghiệm của $\\cos x = m$ có cùng hoành độ $m$ nên đối xứng nhau qua trục hoành $Ox$: $x = \\pm \\alpha + k2\\pi$."
            }
      ]
},
    'toan11-b5': {
      "subject": "math",
      "simType": "sequence",
      "simOptions": {
            "mode": "general",
            "fnType": "rational",
            "nTerms": 10
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 5",
      "title": "Thực hành Dãy số: Biểu diễn hình học, Dãy tăng, Dãy giảm & Dãy bị chặn",
      "guide": "Chọn các quy luật dãy số u_n = n/(n+1), u_n = 2n−1 hoặc u_n = (−1)ⁿ/n và kéo thanh trượt số hạng n từ 1 đến 15 để quan sát đồ thị điểm rời rạc (n, u_n).",
      "questions": [
            {
                  "q": "Khảo sát dãy số u_n = n / (n + 1). Khi n tăng dần từ 1 đến 15, các điểm (n, u_n) trên đồ thị thể hiện tính chất nào của dãy số?",
                  "opts": [
                        "Dãy số tăng và bị chặn trên bởi 1 (u_n < 1 với mọi n)",
                        "Dãy số giảm",
                        "Dãy số không bị chặn",
                        "Dãy số đan dấu"
                  ],
                  "ans": 0,
                  "exp": "Ta có $u_{n+1} - u_n = \\frac{n+1}{n+2} - \\frac{n}{n+1} = \\frac{1}{(n+1)(n+2)} > 0$, suy ra dãy số tăng; đồng thời $\\frac{1}{2} \\le u_n < 1$ nên dãy số bị chặn."
            },
            {
                  "q": "Với dãy số u_n = 2n − 1, các điểm biểu diễn (n, u_n) trên mặt phẳng tọa độ có vị trí đặc biệt nào?",
                  "opts": [
                        "Cùng nằm trên một đường thẳng y = 2x − 1 (dãy số tăng vô hạn, không bị chặn trên)",
                        "Nằm trên một đường parabol",
                        "Nằm trên một đường hypebol",
                        "Dao động quanh trục hoành"
                  ],
                  "ans": 0,
                  "exp": "Hàm số $f(n) = 2n - 1$ là hàm bậc nhất, do đó các điểm $(n, u_n)$ thẳng hàng và khi $n \\to +\\infty$ thì $u_n \\to +\\infty$."
            },
            {
                  "q": "Dãy số u_n = (−1)ⁿ / n có phải là dãy số đơn điệu (tăng hoặc giảm) không?",
                  "opts": [
                        "Không đơn điệu vì các số hạng đan dấu âm dương luân phiên, nhưng dãy bị chặn trong đoạn [−1; 0.5]",
                        "Là dãy tăng",
                        "Là dãy giảm",
                        "Là cấp số cộng"
                  ],
                  "ans": 0,
                  "exp": "Các số hạng $u_1 = -1, u_2 = 1/2, u_3 = -1/3, u_4 = 1/4,...$ đan xen dấu nên không tăng cũng không giảm, tuy nhiên $-1 \\le u_n \\le 0.5$ nên dãy bị chặn."
            }
      ]
},
    'toan11-b6': {
      "subject": "math",
      "simType": "sequence",
      "simOptions": {
            "mode": "ap",
            "u1": 2,
            "d": 1.5,
            "nTerms": 10
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 6",
      "title": "Thực hành Cấp số cộng: Số hạng tổng quát u_n và Tổng S_n",
      "guide": "Chọn chế độ \"1. Cấp số cộng\", kéo thanh trượt số hạng đầu u₁ và công sai d để khảo sát số hạng thứ n và tổng n số hạng đầu S_n.",
      "questions": [
            {
                  "q": "Với cấp số cộng có số hạng đầu u₁ = 2 và công sai d = 1.5, số hạng thứ 10 (u₁₀) và tổng 10 số hạng đầu (S₁₀) nhận giá trị là:",
                  "opts": [
                        "u₁₀ = 15.5 và S₁₀ = 87.5",
                        "u₁₀ = 17.0 và S₁₀ = 95.0",
                        "u₁₀ = 14.0 và S₁₀ = 80.0",
                        "u₁₀ = 15.5 và S₁₀ = 75.0"
                  ],
                  "ans": 0,
                  "exp": "Ta có $u_{10} = u_1 + 9d = 2 + 9(1.5) = 15.5$. Tổng $S_{10} = \\frac{10(u_1 + u_{10})}{2} = \\frac{10(2 + 15.5)}{2} = 87.5$."
            },
            {
                  "q": "Khi công sai d > 0, đồ thị các điểm (n, u_n) của cấp số cộng có dạng hình học như thế nào?",
                  "opts": [
                        "Các điểm nằm trên đường thẳng dốc lên từ trái sang phải (cấp số cộng tăng)",
                        "Đường thẳng dốc xuống",
                        "Đường cong parabol",
                        "Đường gãy khúc"
                  ],
                  "ans": 0,
                  "exp": "Vì $u_n = d \\cdot n + (u_1 - d)$ là hàm số bậc nhất với hệ số góc $d > 0$, các điểm $(n, u_n)$ nằm trên một đường thẳng đồng biến."
            },
            {
                  "q": "Nếu công sai d = 0 thì cấp số cộng trở thành dãy số như thế nào?",
                  "opts": [
                        "Dãy số không đổi: u_n = u₁ với mọi n và tổng S_n = n · u₁",
                        "Dãy số tăng",
                        "Dãy số giảm",
                        "Dãy số hội tụ về 0"
                  ],
                  "ans": 0,
                  "exp": "Khi $d = 0$, $u_n = u_1 + (n-1) \\cdot 0 = u_1$ không đổi với mọi $n$, tổng $S_n = u_1 + u_1 + ... + u_1 = n \\cdot u_1$."
            }
      ]
},
    'toan11-b7': {
      "subject": "math",
      "simType": "sequence",
      "simOptions": {
            "mode": "gp",
            "u1": 2,
            "q": 0.6,
            "nTerms": 10
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 7",
      "title": "Thực hành Cấp số nhân & Cấp số nhân lùi vô hạn",
      "guide": "Chuyển sang chế độ \"2. Cấp số nhân & Giới hạn\", kéo thanh trượt công bội q trong khoảng (−1; 1) để quan sát sự hội tụ của cấp số nhân lùi vô hạn và tổng S = u₁/(1−q).",
      "questions": [
            {
                  "q": "Với u₁ = 2 và công bội q = 0.6 (|q| < 1), khi số số hạng n tăng lên rất lớn (n → +∞), số hạng u_n và tổng S_n tiến dần đến giá trị nào?",
                  "opts": [
                        "u_n tiến về 0 và tổng S tiến dần về S = u₁ / (1 − q) = 2 / (1 − 0.6) = 5.0",
                        "u_n tăng ra vô cực và S tiến ra vô cực",
                        "u_n tiến về 1 và S tiến về 2",
                        "u_n dao động quanh 0"
                  ],
                  "ans": 0,
                  "exp": "Với $|q| < 1$, ta có $\\lim_{n \\to \\infty} q^n = 0$, do đó $\\lim u_n = 0$ và tổng cấp số nhân lùi vô hạn $S = \\frac{u_1}{1 - q} = \\frac{2}{0.4} = 5.0$."
            },
            {
                  "q": "Nếu bạn kéo thanh trượt công bội q > 1 (ví dụ q = 1.4), hiện tượng gì xảy ra với các số hạng u_n và tổng S_n?",
                  "opts": [
                        "u_n tăng nhanh theo hàm mũ và tổng S_n tiến ra dương vô cực (dãy phân kỳ, không tồn tại tổng vô hạn)",
                        "u_n tiến về 0",
                        "u_n hội tụ về 2",
                        "Tổng S_n tiến về 1.4"
                  ],
                  "ans": 0,
                  "exp": "Khi $|q| \\ge 1$, cấp số nhân không phải là cấp số nhân lùi vô hạn, $u_n$ tăng trưởng theo cấp số nhân ra vô cực và tổng phân kỳ."
            },
            {
                  "q": "Công thức tính tổng n số hạng đầu của cấp số nhân có công bội q ≠ 1 là:",
                  "opts": [
                        "S_n = u₁(1 − qⁿ) / (1 − q)",
                        "S_n = n(u₁ + u_n) / 2",
                        "S_n = u₁ · qⁿ",
                        "S_n = u₁ / (1 − q)"
                  ],
                  "ans": 0,
                  "exp": "Công thức tổng quát cho tổng $n$ số hạng đầu của CSN với $q \\ne 1$ là $S_n = \\frac{u_1(1 - q^n)}{1 - q}$."
            }
      ]
},
    'toan11-b8': {
      "subject": "math",
      "simType": "stats11",
      "simOptions": {
            "mode": "grouped_freq"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 8",
      "title": "Thực hành Mẫu số liệu ghép nhóm & Biểu đồ tần số ghép nhóm (Histogram)",
      "guide": "Quan sát 5 khoảng nhóm dữ liệu, kéo thanh trượt tần số mᵢ của từng nhóm để quan sát biểu đồ cột Histogram và bảng tần số tích lũy cfᵢ cập nhật tức thời.",
      "questions": [
            {
                  "q": "Cho mẫu ghép nhóm với khoảng nhóm [40; 60). Giá trị đại diện c₂ của nhóm này bằng bao nhiêu?",
                  "opts": [
                        "c₂ = (40 + 60) / 2 = 50",
                        "c₂ = 40",
                        "c₂ = 60",
                        "c₂ = 20 (độ dài khoảng)"
                  ],
                  "ans": 0,
                  "exp": "Giá trị đại diện của nhóm $[a_i; a_{i+1})$ là trung điểm của hai đầu mút: $c_i = \\frac{a_i + a_{i+1}}{2} = \\frac{40 + 60}{2} = 50$."
            },
            {
                  "q": "Tần số tích lũy cfᵢ của một nhóm ghép nhóm cho biết điều gì?",
                  "opts": [
                        "Số lượng giá trị trong mẫu số liệu có giá trị nhỏ hơn đầu mút bên phải của nhóm đó",
                        "Tần số của riêng nhóm đó",
                        "Tổng số lượng nhóm",
                        "Giá trị lớn nhất trong mẫu"
                  ],
                  "ans": 0,
                  "exp": "Tần số tích lũy $cf_i = m_1 + m_2 + ... + m_i$ biểu thị tổng số quan sát rơi vào các nhóm từ nhóm 1 đến nhóm $i$."
            },
            {
                  "q": "Trên biểu đồ cột ghép nhóm (Histogram), độ rộng của mỗi cột chữ nhật và chiều cao của cột tương ứng với các đại lượng nào?",
                  "opts": [
                        "Độ rộng là độ dài khoảng h = aᵢ₊₁ − aᵢ, chiều cao tỉ lệ với tần số nhóm mᵢ",
                        "Độ rộng là tần số, chiều cao là độ dài nhóm",
                        "Độ rộng bằng 1, chiều cao là giá trị đại diện",
                        "Độ rộng là cỡ mẫu n"
                  ],
                  "ans": 0,
                  "exp": "Mỗi cột trong Histogram có đáy là đoạn $[a_i; a_{i+1})$ trên trục hoành (chiều rộng $h$) và chiều cao biểu diễn tần số $m_i$ của nhóm đó."
            }
      ]
},
    'toan11-b9': {
      "subject": "math",
      "simType": "stats11",
      "simOptions": {
            "mode": "central_tendency"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 9",
      "title": "Thực hành Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
      "guide": "Chọn chế độ \"2. Xu thế trung tâm\", quan sát các đường chỉ báo số trung bình x̄, trung vị Mₑ, tứ phân vị Q₁, Q₃ và mốt Mₒ với công thức tính chi tiết từng bước.",
      "questions": [
            {
                  "q": "Công thức tính số trung bình x̄ của mẫu số liệu ghép nhóm gồm k nhóm với giá trị đại diện cᵢ và tần số mᵢ là:",
                  "opts": [
                        "x̄ = (m₁c₁ + m₂c₂ + ... + mₖcₖ) / n",
                        "x̄ = (c₁ + c₂ + ... + cₖ) / k",
                        "x̄ = (m₁ + m₂ + ... + mₖ) / k",
                        "x̄ = (c₁ + cₖ) / 2"
                  ],
                  "ans": 0,
                  "exp": "Số trung bình của mẫu ghép nhóm là trung bình có trọng số của các giá trị đại diện: $\\bar{x} = \\frac{1}{n} \\sum_{i=1}^k m_i c_i$."
            },
            {
                  "q": "Để xác định nhóm chứa trung vị Mₑ của mẫu số liệu ghép nhóm có cỡ mẫu n = 50, ta căn cứ vào điều kiện nào trên cột tần số tích lũy cfᵢ?",
                  "opts": [
                        "Nhóm đầu tiên có tần số tích lũy cf_p ≥ n/2 = 25",
                        "Nhóm có tần số lớn nhất",
                        "Nhóm nằm chính giữa",
                        "Nhóm có tần số tích lũy cf_p = 50"
                  ],
                  "ans": 0,
                  "exp": "Nhóm chứa trung vị là nhóm $[a_p; a_{p+1})$ đầu tiên có tần số tích lũy $cf_p \\ge \\frac{n}{2}$."
            },
            {
                  "q": "Nhóm chứa mốt Mₒ của mẫu số liệu ghép nhóm được xác định là:",
                  "opts": [
                        "Nhóm có tần số lớn nhất trong tất cả các nhóm",
                        "Nhóm có giá trị đại diện lớn nhất",
                        "Nhóm có độ dài khoảng lớn nhất",
                        "Nhóm đầu tiên"
                  ],
                  "ans": 0,
                  "exp": "Nhóm chứa mốt là nhóm có tần số $m_j$ lớn nhất trong bảng phân bố tần số ghép nhóm."
            }
      ]
},
    'toan11-b10': {
      "subject": "math",
      "simType": "spatial",
      "simOptions": {
            "solid": "pyramid4",
            "analysisMode": "section"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 10",
      "title": "Thực hành Đường thẳng & Mặt phẳng trong Không gian: Giao tuyến & Thiết diện",
      "guide": "Xoay 360° khối đa diện và kéo thanh trượt tỉ số cắt k = SM/SA để quan sát mặt phẳng thiết diện (màu vàng cam) cắt các mặt của hình chóp và giao tuyến các mặt phẳng.",
      "questions": [
            {
                  "q": "Khi hai mặt phẳng phân biệt có một điểm chung, theo tiên đề hình học không gian, giao tuyến của chúng là:",
                  "opts": [
                        "Một đường thẳng duy nhất đi qua điểm chung đó",
                        "Một đoạn thẳng",
                        "Một điểm duy nhất",
                        "Một hình đa giác"
                  ],
                  "ans": 0,
                  "exp": "Tiên đề: Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất chứa tất cả các điểm chung của hai mặt phẳng đó (đường thẳng giao tuyến)."
            },
            {
                  "q": "Thiết diện của hình chóp tứ giác S.ABCD cắt bởi mặt phẳng song song với mặt đáy (ABCD) có dạng hình học gì?",
                  "opts": [
                        "Hình tứ giác đồng dạng với đáy (ABCD), với tỉ số diện tích bằng k²",
                        "Hình tam giác",
                        "Hình ngũ giác",
                        "Hình tròn"
                  ],
                  "ans": 0,
                  "exp": "Mặt phẳng song song với đáy cắt 4 mặt bên theo các đoạn thẳng song song với các cạnh đáy, tạo thành thiết diện là tứ giác đồng dạng với đáy với tỉ số đồng dạng $k = \\frac{SM}{SA}$, diện tích $S_{td} = k^2 S_{đáy}$."
            },
            {
                  "q": "Có bao nhiêu cách xác định một mặt phẳng duy nhất trong không gian?",
                  "opts": [
                        "Qua 3 điểm không thẳng hàng; qua 1 đường thẳng và 1 điểm ngoài đường thẳng; qua 2 đường thẳng cắt nhau; qua 2 đường thẳng song song",
                        "Chỉ qua 3 điểm bất kỳ",
                        "Chỉ qua 2 đường thẳng",
                        "Chỉ qua 1 đường thẳng"
                  ],
                  "ans": 0,
                  "exp": "Có 4 cách cơ bản xác định duy nhất một mặt phẳng: 3 điểm không thẳng hàng; 1 điểm và 1 đường thẳng không chứa điểm; 2 đường thẳng cắt nhau; 2 đường thẳng song song."
            }
      ]
},
    'toan11-b11': {
      "subject": "math",
      "simType": "spatial",
      "simOptions": {
            "solid": "parallel_lines",
            "analysisMode": "parallel_lines"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 11",
      "title": "Thực hành Hai đường thẳng Song song & Chéo nhau trong Không gian",
      "guide": "Xoay khối không gian 360° để phân biệt trực quan giữa hai đường thẳng song song (cùng thuộc một mặt phẳng) và hai đường thẳng chéo nhau (không cùng thuộc mặt phẳng nào).",
      "questions": [
            {
                  "q": "Trong hình chóp tứ giác S.ABCD đáy hình bình hành, hai cạnh đối AB và CD là hai đường thẳng song song, còn cạnh bên SA và cạnh đáy CD là:",
                  "opts": [
                        "Hai đường thẳng chéo nhau (không đồng phẳng và không có điểm chung)",
                        "Hai đường thẳng cắt nhau",
                        "Hai đường thẳng song song",
                        "Hai đường thẳng trùng nhau"
                  ],
                  "ans": 0,
                  "exp": "Đường thẳng $SA$ cắt $(ABCD)$ tại $A \\notin CD$, do đó $SA$ và $CD$ không đồng phẳng, tức là hai đường thẳng chéo nhau."
            },
            {
                  "q": "Định lý về giao tuyến của ba mặt phẳng (Định lý ba đường giao tuyến) khẳng định nếu 3 mặt phẳng đôi một cắt nhau theo 3 giao tuyến phân biệt thì:",
                  "opts": [
                        "Ba giao tuyến đó hoặc đồng quy tại một điểm, hoặc đôi một song song với nhau",
                        "Ba giao tuyến luôn đồng quy",
                        "Ba giao tuyến luôn song song",
                        "Ba giao tuyến vuông góc nhau"
                  ],
                  "ans": 0,
                  "exp": "Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến đó hoặc đồng quy tại một điểm hoặc đôi một song song."
            },
            {
                  "q": "Hai đường thẳng không có điểm chung trong không gian có thể xảy ra các vị trí tương đối nào?",
                  "opts": [
                        "Song song với nhau (nếu cùng thuộc một mặt phẳng) hoặc chéo nhau (nếu không cùng thuộc mặt phẳng nào)",
                        "Chỉ có thể song song",
                        "Chỉ có thể chéo nhau",
                        "Cắt nhau"
                  ],
                  "ans": 0,
                  "exp": "Trong không gian, hai đường thẳng không có điểm chung thì có thể song song (đồng phẳng) hoặc chéo nhau (không đồng phẳng)."
            }
      ]
},
    'toan11-b12': {
      "subject": "math",
      "simType": "spatial",
      "simOptions": {
            "solid": "line_plane_parallel",
            "analysisMode": "line_parallel"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 12",
      "title": "Thực hành Đường thẳng và Mặt phẳng song song",
      "guide": "Xoay mô hình 3D để kiểm chứng điều kiện đường thẳng d song song với mặt phẳng (α): d không nằm trong (α) và d song song với một đường thẳng d' nằm trong (α).",
      "questions": [
            {
                  "q": "Điều kiện cần và đủ để đường thẳng d song song với mặt phẳng (α) là:",
                  "opts": [
                        "d ⊄ (α) và d song song với một đường thẳng d′ ⊂ (α)",
                        "d vuông góc với (α)",
                        "d có 1 điểm chung với (α)",
                        "d song song với mọi đường thẳng trong (α)"
                  ],
                  "ans": 0,
                  "exp": "Định lý dấu hiệu nhận biết: Nếu đường thẳng $d$ không nằm trong mặt phẳng $(\\alpha)$ và song song với một đường thẳng $d'$ nằm trong $(\\alpha)$ thì $d \\parallel (\\alpha)$."
            },
            {
                  "q": "Nếu đường thẳng d song song với mặt phẳng (α) thì bất kỳ mặt phẳng (β) nào chứa d mà cắt (α) theo giao tuyến d′ thì:",
                  "opts": [
                        "Giao tuyến d′ luôn song song với đường thẳng d",
                        "Giao tuyến d′ cắt d",
                        "Giao tuyến d′ vuông góc với d",
                        "d′ trùng với d"
                  ],
                  "ans": 0,
                  "exp": "Tính chất: Nếu $d \\parallel (\\alpha)$ và $(d \\subset (\\beta), (\\beta) \\cap (\\alpha) = d') \\Rightarrow d \\parallel d'."
            },
            {
                  "q": "Cho hai đường thẳng chéo nhau a và b. Có bao nhiêu mặt phẳng chứa a và song song với b?",
                  "opts": [
                        "Duy nhất 1 mặt phẳng",
                        "Vô số mặt phẳng",
                        "Không có mặt phẳng nào",
                        "Có 2 mặt phẳng"
                  ],
                  "ans": 0,
                  "exp": "Qua đường thẳng $a$, kẻ đường thẳng $b' \\parallel b$. Mặt phẳng xác định bởi hai đường thẳng cắt nhau $a$ và $b'$ là mặt phẳng duy nhất chứa $a$ và song song với $b$."
            }
      ]
},
    'toan11-b13': {
      "subject": "math",
      "simType": "spatial",
      "simOptions": {
            "solid": "two_planes_parallel",
            "analysisMode": "plane_parallel"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 13",
      "title": "Thực hành Hai mặt phẳng song song & Hình lăng trụ, Hình hộp",
      "guide": "Xoay mô hình hai mặt phẳng song song (α) ∥ (β), quan sát các mặt bên của hình lăng trụ/hình hộp là các hình bình hành và định lý Thales trong không gian.",
      "questions": [
            {
                  "q": "Điều kiện để mặt phẳng (α) song song với mặt phẳng (β) là:",
                  "opts": [
                        "(α) chứa hai đường thẳng cắt nhau cùng song song với (β)",
                        "(α) chứa một đường thẳng song song với (β)",
                        "(α) và (β) cùng vuông góc với một đường thẳng",
                        "(α) và (β) có 1 điểm chung"
                  ],
                  "ans": 0,
                  "exp": "Định lý dấu hiệu nhận biết: Nếu mặt phẳng $(\\alpha)$ chứa hai đường thẳng cắt nhau cùng song song với mặt phẳng $(\\beta)$ thì $(\\alpha) \\parallel (\\beta)$."
            },
            {
                  "q": "Hai mặt phẳng song song chắn trên hai cát tuyến bất kỳ các đoạn thẳng tương ứng tỉ lệ là nội dung của định lý nào?",
                  "opts": [
                        "Định lý Thales trong không gian",
                        "Định lý Pythagore",
                        "Định lý Cosin",
                        "Định lý Euler"
                  ],
                  "ans": 0,
                  "exp": "Định lý Thales trong không gian: Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kỳ các đoạn thẳng tương ứng tỉ lệ."
            },
            {
                  "q": "Trong hình lăng trụ, các cạnh bên và các mặt bên có tính chất hình học nào sau đây?",
                  "opts": [
                        "Các cạnh bên song song và bằng nhau; các mặt bên là các hình bình hành",
                        "Các cạnh bên cắt nhau tại đỉnh",
                        "Các mặt bên là hình vuông",
                        "Các mặt bên là tam giác"
                  ],
                  "ans": 0,
                  "exp": "Định nghĩa hình lăng trụ: Hai đáy là hai đa giác bằng nhau nằm trên hai mặt phẳng song song; các cạnh bên song song và bằng nhau; các mặt bên là các hình bình hành."
            }
      ]
},
    'toan11-b14': {
      "subject": "math",
      "simType": "spatial",
      "simOptions": {
            "solid": "parallel_projection",
            "analysisMode": "projection"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 14",
      "title": "Thực hành Phép chiếu song song & Hình biểu diễn trong Không gian",
      "guide": "Quan sát phép chiếu song song một hình tam giác/hình bình hành lên mặt phẳng chiếu (P) theo phương chiếu l; kiểm chứng các tính chất bảo toàn thẳng hàng và tỉ số.",
      "questions": [
            {
                  "q": "Phép chiếu song song bảo toàn tính chất hình học nào của các hình phẳng?",
                  "opts": [
                        "Biến ba điểm thẳng hàng thành ba điểm thẳng hàng (bảo toàn thứ tự); bảo toàn tính song song và tỉ số độ dài hai đoạn thẳng song song",
                        "Bảo toàn độ lớn của góc",
                        "Bảo toàn độ dài của mọi đoạn thẳng",
                        "Bảo toàn diện tích"
                  ],
                  "ans": 0,
                  "exp": "Phép chiếu song song bảo toàn tính thẳng hàng, thứ tự các điểm, tính song song của hai đường thẳng và tỉ số độ dài giữa hai đoạn thẳng song song hoặc cùng thuộc một đường thẳng."
            },
            {
                  "q": "Hình biểu diễn của một đường tròn trên mặt phẳng qua phép chiếu song song nói chung là:",
                  "opts": [
                        "Một đường elip (hoặc đường tròn trong trường hợp mặt phẳng tròn song song với mặt phẳng chiếu)",
                        "Một đoạn thẳng",
                        "Một đường parabol",
                        "Một hình chữ nhật"
                  ],
                  "ans": 0,
                  "exp": "Hình chiếu song song của đường tròn nói chung là một đường Elip, hoặc một đoạn thẳng nếu mặt phẳng chứa đường tròn song song với phương chiếu."
            },
            {
                  "q": "Hình biểu diễn của một hình vuông hoặc hình chữ nhật qua phép chiếu song song nói chung là:",
                  "opts": [
                        "Một hình bình hành (vì phép chiếu song song không nhất thiết bảo toàn góc vuông)",
                        "Một hình vuông",
                        "Một hình chữ nhật",
                        "Một hình thang vuông"
                  ],
                  "ans": 0,
                  "exp": "Vì phép chiếu song song bảo toàn tính song song nhưng không bảo toàn số đo góc nên hình biểu diễn của hình vuông/chữ nhật/hình thoi là hình bình hành."
            }
      ]
},
    'toan11-b15': {
      "subject": "math",
      "simType": "sequence",
      "simOptions": {
            "mode": "limit",
            "limType": "rational",
            "nTerms": 15
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 15",
      "title": "Thực hành Giới hạn của Dãy số: lim u_n = L & Tiệm cận ngang",
      "guide": "Kéo thanh trượt số hạng n từ 1 đến 50 để quan sát các điểm (n, u_n) tiến dần sát đường thẳng tiệm cận ngang y = L của các giới hạn tiêu biểu.",
      "questions": [
            {
                  "q": "Khảo sát dãy số u_n = (2n + 1) / (n + 3). Khi n tăng lên vô cùng (n → +∞), giá trị của u_n tiến dần đến số nào?",
                  "opts": [
                        "L = 2 vì chia cả tử và mẫu cho n: lim (2 + 1/n) / (1 + 3/n) = 2 / 1 = 2",
                        "L = 1",
                        "L = 0",
                        "L = +∞"
                  ],
                  "ans": 0,
                  "exp": "Ta có $\\lim_{n \\to \\infty} \\frac{2n+1}{n+3} = \\lim_{n \\to \\infty} \\frac{2 + 1/n}{1 + 3/n} = \\frac{2 + 0}{1 + 0} = 2$."
            },
            {
                  "q": "Nếu |q| < 1 (ví dụ q = 0.6), giới hạn của dãy số u_n = qⁿ khi n → +∞ bằng:",
                  "opts": [
                        "0",
                        "1",
                        "+∞",
                        "Không tồn tại"
                  ],
                  "ans": 0,
                  "exp": "Định lý giới hạn cơ bản: Nếu $|q| < 1$ thì $\\lim_{n \\to \\infty} q^n = 0$."
            },
            {
                  "q": "Khẳng định nào sau đây là định lý về mối liên hệ giữa dãy số có giới hạn hữu hạn và tính bị chặn?",
                  "opts": [
                        "Nếu dãy số (u_n) có giới hạn hữu hạn thì dãy số đó bị chặn",
                        "Mọi dãy số bị chặn đều có giới hạn",
                        "Dãy số tăng thì luôn có giới hạn",
                        "Dãy số phân kỳ thì không bị chặn"
                  ],
                  "ans": 0,
                  "exp": "Định lý: Mọi dãy số có giới hạn hữu hạn đều bị chặn (tuy nhiên điều ngược lại không đúng, ví dụ dãy $u_n = (-1)^n$ bị chặn nhưng không có giới hạn)."
            }
      ]
},
    'toan11-b16': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "rational",
            "analysisMode": "func_limit",
            "x0": 2
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 16",
      "title": "Thực hành Giới hạn của Hàm số: lim f(x) khi x → x₀ & Giới hạn một bên",
      "guide": "Kéo điểm x tiến dần về điểm x₀ = 2 từ bên trái (x → 2⁻) và từ bên phải (x → 2⁺) để kiểm tra sự tồn tại của giới hạn hàm số tại điểm và khử dạng vô định 0/0.",
      "questions": [
            {
                  "q": "Tính giới hạn dạng vô định 0/0: lim_{x → 2} (x² − 4) / (x − 2). Giá trị giới hạn bằng bao nhiêu?",
                  "opts": [
                        "4 (vì rút gọn phân thức (x − 2)(x + 2)/(x − 2) = x + 2 với x ≠ 2, khi x → 2 thì x + 2 → 4)",
                        "0",
                        "2",
                        "Không xác định"
                  ],
                  "ans": 0,
                  "exp": "Với $x \\ne 2$, $\\frac{x^2 - 4}{x - 2} = \\frac{(x - 2)(x + 2)}{x - 2} = x + 2$. Khi đó $\\lim_{x \\to 2} (x + 2) = 4$. Đồ thị có một \"điểm thủng\" tại $(2; 4)$ nhưng giới hạn vẫn tồn tại."
            },
            {
                  "q": "Điều kiện cần và đủ để hàm số f(x) có giới hạn hữu hạn L khi x tiến dần đến x₀ là:",
                  "opts": [
                        "Giới hạn bên trái và giới hạn bên phải tại x₀ cùng tồn tại và bằng nhau: lim_{x → x₀⁻} f(x) = lim_{x → x₀⁺} f(x) = L",
                        "f(x₀) xác định và bằng L",
                        "f(x) liên tục tại x₀",
                        "Đạo hàm tại x₀ bằng L"
                  ],
                  "ans": 0,
                  "exp": "Định lý giới hạn một bên: $\\lim_{x \\to x_0} f(x) = L \\iff \\lim_{x \\to x_0^-} f(x) = \\lim_{x \\to x_0^+} f(x) = L$."
            },
            {
                  "q": "Với hàm số y = 1 / (x − 1), khi x tiến dần đến 1 từ bên phải (x → 1⁺), giá trị hàm số tiến về:",
                  "opts": [
                        "+∞ (đường thẳng x = 1 là tiệm cận đứng của đồ thị)",
                        "−∞",
                        "0",
                        "1"
                  ],
                  "ans": 0,
                  "exp": "Khi $x \\to 1^+$, mẫu số $x - 1 > 0$ và tiến dần về $0$, tử số bằng $1 > 0$, do đó $\\lim_{x \\to 1^+} \\frac{1}{x - 1} = +\\infty$."
            }
      ]
},
    'toan11-b17': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "cubic",
            "analysisMode": "continuity",
            "x0": 1
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 17",
      "title": "Thực hành Hàm số Liên tục & Định lý Giá trị Trung gian (Tồn tại nghiệm)",
      "guide": "Khảo sát điều kiện liên tục lim_{x→x₀} f(x) = f(x₀), so sánh đường cong liên tục trơn tru với hàm gián đoạn và kiểm chứng sự tồn tại nghiệm f(a)·f(b) < 0.",
      "questions": [
            {
                  "q": "Hàm số f(x) được gọi là liên tục tại điểm x₀ nếu thỏa mãn đồng thời 3 điều kiện nào?",
                  "opts": [
                        "f(x) xác định tại x₀; tồn tại lim_{x→x₀} f(x); và lim_{x→x₀} f(x) = f(x₀)",
                        "f(x) có đạo hàm tại x₀",
                        "f(x) đồng biến qua x₀",
                        "f(x₀) = 0"
                  ],
                  "ans": 0,
                  "exp": "Định nghĩa: Hàm số $y = f(x)$ liên tục tại $x_0 \\iff \\lim_{x \\to x_0} f(x) = f(x_0)$."
            },
            {
                  "q": "Nếu hàm số f(x) liên tục trên đoạn [a; b] và f(a) · f(b) < 0 thì theo Định lý Giá trị Trung gian:",
                  "opts": [
                        "Phương trình f(x) = 0 luôn có ít nhất một nghiệm c nằm trong khoảng (a; b) (đồ thị cắt trục Ox)",
                        "Phương trình vô nghiệm",
                        "f(x) luôn đồng biến trên [a; b]",
                        "f(x) đạt cực trị tại c"
                  ],
                  "ans": 0,
                  "exp": "Định lý Bolzano: Nếu $f(x)$ liên tục trên đoạn $[a; b]$ và $f(a) \\cdot f(b) < 0$ thì tồn tại ít nhất một điểm $c \\in (a; b)$ sao cho $f(c) = 0$."
            },
            {
                  "q": "Các hàm đa thức, hàm phân thức hữu tỉ, hàm lượng giác, hàm mũ và lôgarit liên tục trên tập hợp nào?",
                  "opts": [
                        "Liên tục trên toàn bộ tập xác định của chúng",
                        "Chỉ liên tục trên (0; +∞)",
                        "Chỉ liên tục trên đoạn [−1; 1]",
                        "Không liên tục tại điểm nào"
                  ],
                  "ans": 0,
                  "exp": "Định lý: Các hàm số sơ cấp cơ bản liên tục trên từng khoảng xác định của chúng."
            }
      ]
},
    'toan11-b18': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "power",
            "analysisMode": "power_fn",
            "x0": 2
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 18",
      "title": "Thực hành Lũy thừa với Số mũ thực & Đồ thị Hàm lũy thừa y = x^α",
      "guide": "Kéo thanh trượt số mũ α qua các giá trị α > 1, α = 1, 0 < α < 1 và α < 0 để quan sát sự thay đổi hình dạng của đồ thị hàm số lũy thừa trên khoảng (0; +∞).",
      "questions": [
            {
                  "q": "Trên khoảng (0; +∞), mọi đồ thị hàm số lũy thừa y = x^α (với mọi α ∈ ℝ) luôn đi qua điểm cố định nào?",
                  "opts": [
                        "Điểm (1; 1) vì 1^α = 1 với mọi số mũ thực α",
                        "Điểm (0; 0)",
                        "Điểm (0; 1)",
                        "Điểm (2; 2)"
                  ],
                  "ans": 0,
                  "exp": "Vì $1^\\alpha = 1$ với mọi $\\alpha \\in \\mathbb{R}$, đồ thị hàm lũy thừa $y = x^\\alpha$ luôn đi qua điểm cố định $(1; 1)$."
            },
            {
                  "q": "Khi số mũ α < 0 (ví dụ α = −1, hàm số y = 1/x), tính đơn điệu và đường tiệm cận của hàm số trên (0; +∞) là:",
                  "opts": [
                        "Hàm số luôn nghịch biến, nhận trục Ox làm tiệm cận ngang và trục Oy làm tiệm cận đứng",
                        "Hàm số đồng biến",
                        "Hàm số không có tiệm cận",
                        "Đồ thị đi qua gốc O"
                  ],
                  "ans": 0,
                  "exp": "Khi $\\alpha < 0$, đạo hàm $y' = \\alpha x^{\\alpha - 1} < 0, \\forall x > 0$, hàm số nghịch biến, $\\lim_{x \\to +\\infty} x^\\alpha = 0$ (tiệm cận ngang $y=0$) và $\\lim_{x \\to 0^+} x^\\alpha = +\\infty$ (tiệm cận đứng $x=0$)."
            },
            {
                  "q": "Quy tắc nào sau đây về phép toán lũy thừa với a > 0 và số thực α, β là chính xác?",
                  "opts": [
                        "a^α · a^β = a^(α + β) và (a^α)^β = a^(α · β)",
                        "a^α · a^β = a^(α · β)",
                        "(a + b)^α = a^α + b^α",
                        "a^α / a^β = a^(α / β)"
                  ],
                  "ans": 0,
                  "exp": "Tính chất lũy thừa: $a^\\alpha \\cdot a^\\beta = a^{\\alpha + \\beta}$, $(a^\\alpha)^\\beta = a^{\\alpha \\beta}$, $\\frac{a^\\alpha}{a^\\beta} = a^{\\alpha - \\beta}$."
            }
      ]
},
    'toan11-b19': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "log",
            "analysisMode": "logarithm",
            "x0": 2
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 19",
      "title": "Thực hành Lôgarit: Định nghĩa, Công thức đổi cơ số & Ứng dụng thực tế",
      "guide": "Khảo sát định nghĩa log_a(b) = c ⟺ a^c = b (với a > 0, a ≠ 1, b > 0) và kiểm chứng các tính chất logarit của tích, thương, lũy thừa trên bảng tính động.",
      "questions": [
            {
                  "q": "Theo định nghĩa, giá trị log_a(b) = c có ý nghĩa tương đương với đẳng thức nào?",
                  "opts": [
                        "a^c = b (với điều kiện cơ số a > 0, a ≠ 1 và b > 0)",
                        "c^a = b",
                        "b^a = c",
                        "a · c = b"
                  ],
                  "ans": 0,
                  "exp": "Định nghĩa logarit: Cho $a > 0, a \\ne 1, b > 0$. Số $c$ thỏa mãn $a^c = b$ được gọi là logarit cơ số $a$ của $b$, ký hiệu $\\log_a b = c$."
            },
            {
                  "q": "Công thức đổi cơ số logarit từ cơ số a sang cơ số c (với a, c > 0, a, c ≠ 1, b > 0) là:",
                  "opts": [
                        "log_a(b) = log_c(b) / log_c(a)",
                        "log_a(b) = log_c(b) · log_c(a)",
                        "log_a(b) = log_c(a) / log_c(b)",
                        "log_a(b) = log_c(b − a)"
                  ],
                  "ans": 0,
                  "exp": "Công thức đổi cơ số: $\\log_a b = \\frac{\\log_c b}{\\log_c a}$, đặc biệt $\\log_a b = \\frac{\\ln b}{\\ln a} = \\frac{\\log b}{\\log a}$."
            },
            {
                  "q": "Trong thang đo độ Richter đo biên độ động đất hoặc thang độ pH đo độ axit/bazơ, người ta ứng dụng loại logarit nào?",
                  "opts": [
                        "Logarit thập phân log₁₀(x) (hoặc logarit tự nhiên ln x) để thu nhỏ dải biến thiên rất lớn thành các số đo tiện dụng",
                        "Hàm bậc hai",
                        "Hàm lượng giác",
                        "Cấp số cộng"
                  ],
                  "ans": 0,
                  "exp": "Logarit biến đổi phép nhân và lũy thừa quy mô lớn thành phép cộng tuyến tính ($M = \\log(A/A_0)$, $\\text{pH} = -\\log[H^+]$)."
            }
      ]
},
    'toan11-b20': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "exp",
            "analysisMode": "exp_log_pair",
            "x0": 1,
            "baseA": 2
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 20",
      "title": "Thực hành Khảo sát Đồ thị Hàm số Mũ y = aˣ và Hàm số Lôgarit y = logₐ(x)",
      "guide": "Chọn nút \"Hàm mũ: aˣ\" hoặc \"Logarit: logₐ(x)\", sau đó kéo thanh trượt \"Cơ số a\" từ lớn hơn 1 (a = 2,0) xuống nhỏ hơn 1 (a = 0,6) để quan sát tính đối xứng qua đường thẳng y = x.",
      "questions": [
            {
                  "q": "Chọn cơ số a = 2.0. Đồ thị hàm số y = 2ˣ và hàm số y = log₂(x) có mối quan hệ hình học nào đối với đường phân giác y = x?",
                  "opts": [
                        "Đối xứng nhau qua đường thẳng y = x (vì chúng là hai hàm số ngược nhau)",
                        "Đối xứng qua trục Ox",
                        "Đối xứng qua trục Oy",
                        "Đối xứng qua gốc O"
                  ],
                  "ans": 0,
                  "exp": "Vì hàm mũ $y = a^x$ và hàm logarit $y = \\log_a x$ là hai hàm số ngược nhau, đồ thị của chúng luôn đối xứng nhau qua đường phân giác của góc phần tư thứ nhất $y = x$."
            },
            {
                  "q": "Khi cơ số 0 < a < 1 (ví dụ a = 0.5), cả hai hàm số y = aˣ và y = logₐ(x) có chiều biến thiên như thế nào trên tập xác định?",
                  "opts": [
                        "Cùng nghịch biến (đồ thị đi xuống từ trái sang phải)",
                        "Cùng đồng biến",
                        "Hàm mũ đồng biến còn hàm logarit nghịch biến",
                        "Hàm mũ nghịch biến còn hàm logarit đồng biến"
                  ],
                  "ans": 0,
                  "exp": "Khi $0 < a < 1$, cả $y = a^x$ và $y = \\log_a x$ đều nghịch biến trên tập xác định tương ứng của chúng."
            },
            {
                  "q": "Đường tiệm cận của đồ thị hàm số mũ y = aˣ và đồ thị hàm số lôgarit y = logₐ(x) lần lượt là:",
                  "opts": [
                        "Hàm mũ nhận trục Ox (y = 0) làm tiệm cận ngang; hàm logarit nhận trục Oy (x = 0) làm tiệm cận đứng",
                        "Hàm mũ nhận Oy làm tiệm cận đứng",
                        "Cả hai cùng nhận Ox làm tiệm cận",
                        "Không có tiệm cận"
                  ],
                  "ans": 0,
                  "exp": "Đồ thị $y = a^x$ nhận trục hoành $Ox$ ($y = 0$) làm tiệm cận ngang, trong khi đồ thị $y = \\log_a x$ nhận trục tung $Oy$ ($x = 0$) làm tiệm cận đứng."
            }
      ]
},
    'toan11-b21': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "exp",
            "analysisMode": "exp_log_eqn",
            "x0": 2,
            "baseA": 2
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 21",
      "title": "Thực hành Phương trình & Bất phương trình Mũ – Lôgarit",
      "guide": "Kéo thanh trượt tham số b để quan sát giao điểm của đồ thị y = aˣ (hoặc y = logₐ x) với đường thẳng nằm ngang y = b và tập nghiệm bất phương trình.",
      "questions": [
            {
                  "q": "Phương trình mũ cơ bản aˣ = b (với a > 0, a ≠ 1) có nghiệm khi và chỉ khi:",
                  "opts": [
                        "b > 0 (khi đó nghiệm duy nhất là x = log_a b)",
                        "Với mọi b ∈ ℝ",
                        "b ≥ 0",
                        "b > 1"
                  ],
                  "ans": 0,
                  "exp": "Vì tập giá trị của hàm số mũ $y = a^x$ là $(0; +\\infty)$, phương trình $a^x = b$ có nghiệm duy nhất $x = \\log_a b$ khi $b > 0$ và vô nghiệm khi $b \\le 0$."
            },
            {
                  "q": "Khi cơ số a > 1, bất phương trình aˣ > b (với b > 0) có tập nghiệm là:",
                  "opts": [
                        "x > log_a(b) (chiều bất đẳng thức được giữ nguyên)",
                        "x < log_a(b)",
                        "x ≥ b",
                        "x > a"
                  ],
                  "ans": 0,
                  "exp": "Khi cơ số $a > 1$, hàm số mũ $y = a^x$ đồng biến, do đó $a^x > b \\iff x > \\log_a b$."
            },
            {
                  "q": "Khi giải bất phương trình lôgarit log_a(x) > b với cơ số 0 < a < 1, ta cần lưu ý điều gì?",
                  "opts": [
                        "Đổi chiều bất đẳng thức và đặt điều kiện x > 0: 0 < x < a^b",
                        "Giữ nguyên chiều: x > a^b",
                        "Không cần điều kiện x > 0",
                        "Tập nghiệm luôn là ℝ"
                  ],
                  "ans": 0,
                  "exp": "Khi $0 < a < 1$, hàm logarit nghịch biến nên $\\log_a x > b \\iff 0 < x < a^b$. Cần đặc biệt lưu ý điều kiện biểu thức dưới dấu logarit phải dương ($x > 0$)."
            }
      ]
},
    'toan11-b22': {
      "subject": "math",
      "simType": "spatial",
      "simOptions": {
            "solid": "perp_lines",
            "analysisMode": "perp_lines"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 22",
      "title": "Thực hành Hai đường thẳng Vuông góc & Vectơ chỉ phương trong Không gian",
      "guide": "Xoay khối không gian 360° để quan sát góc giữa hai đường thẳng (cắt nhau hoặc chéo nhau) và kiểm chứng tích vô hướng u₁⃗ · u₂⃗ = 0 khi hai đường thẳng vuông góc.",
      "questions": [
            {
                  "q": "Góc giữa hai đường thẳng a và b trong không gian có thể nhận số đo trong phạm vi nào?",
                  "opts": [
                        "Từ 0° đến 90° (0° ≤ φ ≤ 90°)",
                        "Từ 0° đến 180°",
                        "Từ 0° đến 360°",
                        "Bất kỳ"
                  ],
                  "ans": 0,
                  "exp": "Định nghĩa: Góc giữa hai đường thẳng trong không gian là góc giữa hai đường thẳng cắt nhau lần lượt song song với chúng, và quy ước luôn có số đo nằm trong đoạn $[0^\\circ; 90^\\circ]$."
            },
            {
                  "q": "Hai đường thẳng a và b có vectơ chỉ phương lần lượt là u₁⃗ và u₂⃗. Điều kiện cần và đủ để a ⊥ b là:",
                  "opts": [
                        "Tích vô hướng u₁⃗ · u₂⃗ = 0 (hai đường thẳng có thể cắt nhau hoặc chéo nhau)",
                        "a cắt b tại 1 điểm",
                        "u₁⃗ = u₂⃗",
                        "a và b cùng thuộc một mặt phẳng"
                  ],
                  "ans": 0,
                  "exp": "Hai đường thẳng vuông góc khi và chỉ khi góc giữa chúng bằng $90^\\circ$, tương đương tích vô hướng của hai vectơ chỉ phương bằng $0$: $\\vec{u_1} \\cdot \\vec{u_2} = 0$."
            },
            {
                  "q": "Trong hình lập phương ABCD.A′B′C′D′, hai đường thẳng chéo nhau AC và B′D′ có quan hệ vị trí nào?",
                  "opts": [
                        "Vuông góc với nhau (vì AC ⊥ BD mà BD ∥ B′D′)",
                        "Song song với nhau",
                        "Cắt nhau",
                        "Tạo với nhau góc 60°"
                  ],
                  "ans": 0,
                  "exp": "Đáy $ABCD$ là hình vuông nên $AC \\perp BD$. Mặt khác $BD \\parallel B'D'$, suy ra $AC \\perp B'D'$ (hai đường thẳng chéo nhau nhưng vuông góc nhau)."
            }
      ]
},
    'toan11-b23': {
      "subject": "math",
      "simType": "spatial",
      "simOptions": {
            "solid": "line_perp_plane",
            "analysisMode": "line_perp_plane"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 23",
      "title": "Thực hành Đường thẳng vuông góc với Mặt phẳng & Định lý ba đường vuông góc",
      "guide": "Xoay mô hình 3D kiểm chứng điều kiện d ⊥ (α): d vuông góc với hai đường thẳng cắt nhau trong (α), và quan sát định lý ba đường vuông góc.",
      "questions": [
            {
                  "q": "Điều kiện cần và đủ để đường thẳng d vuông góc với mặt phẳng (α) là:",
                  "opts": [
                        "d vuông góc với hai đường thẳng cắt nhau cùng nằm trong (α)",
                        "d vuông góc với một đường thẳng trong (α)",
                        "d vuông góc với hai đường thẳng song song trong (α)",
                        "d không cắt (α)"
                  ],
                  "ans": 0,
                  "exp": "Định lý dấu hiệu nhận biết: Nếu một đường thẳng vuông góc với hai đường thẳng cắt nhau cùng thuộc một mặt phẳng thì nó vuông góc với mặt phẳng đó."
            },
            {
                  "q": "Nếu đường thẳng d vuông góc với mặt phẳng (α) thì d có quan hệ như thế nào với các đường thẳng nằm trong (α)?",
                  "opts": [
                        "d vuông góc với mọi đường thẳng nằm trong (α)",
                        "d chỉ vuông góc với hai đường thẳng",
                        "d song song với các đường thẳng trong (α)",
                        "d cắt mọi đường thẳng trong (α)"
                  ],
                  "ans": 0,
                  "exp": "Định nghĩa: Đường thẳng $d$ vuông góc với mặt phẳng $(\\alpha)$ nếu $d$ vuông góc với mọi đường thẳng nằm trong $(\\alpha)$."
            },
            {
                  "q": "Cho đường thẳng a nằm trong (α) và b là đường thẳng không vuông góc với (α), có hình chiếu trên (α) là b′. Định lý ba đường vuông góc khẳng định:",
                  "opts": [
                        "a ⊥ b khi và chỉ khi a ⊥ b′",
                        "a luôn vuông góc với b",
                        "b luôn vuông góc với b′",
                        "a ∥ b′"
                  ],
                  "ans": 0,
                  "exp": "Định lý ba đường vuông góc: Cho đường thẳng $a$ nằm trong $(\\alpha)$ và $b$ không vuông góc với $(\\alpha)$, có hình chiếu $b'$ trên $(\\alpha)$. Khi đó $a \\perp b \\iff a \\perp b'$."
            }
      ]
},
    'toan11-b24': {
      "subject": "math",
      "simType": "spatial",
      "simOptions": {
            "solid": "line_plane_angle",
            "analysisMode": "line_plane_angle"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 24",
      "title": "Thực hành Phép chiếu vuông góc & Góc giữa đường thẳng và mặt phẳng",
      "guide": "Xoay khối 3D để xác định hình chiếu d′ của đường thẳng d lên mặt phẳng (α) và quan sát góc φ = (d, d′) là góc giữa đường thẳng và mặt phẳng.",
      "questions": [
            {
                  "q": "Nếu đường thẳng d không vuông góc với mặt phẳng (α) thì góc giữa đường thẳng d và mặt phẳng (α) được định nghĩa là:",
                  "opts": [
                        "Góc giữa đường thẳng d và hình chiếu vuông góc d′ của nó trên (α)",
                        "Góc giữa d và một đường bất kỳ trong (α)",
                        "Góc giữa d và pháp tuyến của (α)",
                        "Luôn bằng 90°"
                  ],
                  "ans": 0,
                  "exp": "Định nghĩa: Góc giữa đường thẳng $d$ và mặt phẳng $(\\alpha)$ không vuông góc với nó là góc giữa $d$ và hình chiếu $d'$ của $d$ trên $(\\alpha)$."
            },
            {
                  "q": "Góc φ giữa đường thẳng d và mặt phẳng (α) có thể nhận giá trị trong khoảng nào?",
                  "opts": [
                        "0° ≤ φ ≤ 90° (bằng 0° khi d ∥ (α) hoặc d ⊂ (α); bằng 90° khi d ⊥ (α))",
                        "0° < φ < 180°",
                        "Luôn là góc nhọn",
                        "Bất kỳ"
                  ],
                  "ans": 0,
                  "exp": "Góc giữa đường thẳng và mặt phẳng luôn có số đo trong đoạn $[0^\\circ; 90^\\circ]$."
            },
            {
                  "q": "Cho hình chóp S.ABCD có đáy ABCD là hình vuông và SA ⊥ (ABCD). Khi đó hình chiếu vuông góc của cạnh bên SC lên mặt đáy (ABCD) là đoạn thẳng nào?",
                  "opts": [
                        "Đoạn thẳng AC (suy ra góc giữa SC và đáy là góc ∠SCA)",
                        "Đoạn thẳng AB",
                        "Đoạn thẳng BC",
                        "Đoạn thẳng BD"
                  ],
                  "ans": 0,
                  "exp": "Vì $SA \\perp (ABCD)$ nên $A$ là hình chiếu của $S$ lên đáy, điểm $C \\in (ABCD)$ tự chiếu thành chính nó. Vậy hình chiếu của $SC$ lên $(ABCD)$ là $AC$, góc $(SC, (ABCD)) = \\widehat{SCA}$."
            }
      ]
},
    'toan11-b25': {
      "subject": "math",
      "simType": "spatial",
      "simOptions": {
            "solid": "two_planes_perp",
            "analysisMode": "two_planes_perp"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 25",
      "title": "Thực hành Hai mặt phẳng vuông góc & Góc giữa hai mặt phẳng",
      "guide": "Xoay mô hình hai mặt phẳng (P) ⊥ (Q), quan sát góc phẳng nhị diện xác định bởi hai đường thẳng cùng vuông góc với giao tuyến và định lý diện tích hình chiếu S′ = S cos φ.",
      "questions": [
            {
                  "q": "Điều kiện cần và đủ để hai mặt phẳng vuông góc với nhau là:",
                  "opts": [
                        "Mặt phẳng này chứa một đường thẳng vuông góc với mặt phẳng kia",
                        "Hai mặt phẳng cắt nhau tạo góc nhọn",
                        "Mỗi mặt phẳng chứa một đường thẳng song song",
                        "Hai mặt phẳng có giao tuyến vuông góc"
                  ],
                  "ans": 0,
                  "exp": "Định lý dấu hiệu nhận biết: Nếu một mặt phẳng chứa một đường thẳng vuông góc với một mặt phẳng khác thì hai mặt phẳng đó vuông góc với nhau."
            },
            {
                  "q": "Góc giữa hai mặt phẳng cắt nhau được đo bằng góc giữa hai đường thẳng nào sau đây?",
                  "opts": [
                        "Hai đường thẳng lần lượt nằm trong hai mặt phẳng và cùng vuông góc với giao tuyến tại một điểm",
                        "Hai đường thẳng bất kỳ",
                        "Đường giao tuyến và một cạnh bên",
                        "Hai đường thẳng song song"
                  ],
                  "ans": 0,
                  "exp": "Góc giữa hai mặt phẳng cắt nhau là góc giữa hai đường thẳng lần lượt nằm trong hai mặt phẳng đó và cùng vuông góc với giao tuyến tại một điểm."
            },
            {
                  "q": "Cho đa giác nằm trong mặt phẳng (P) có diện tích S. Hình chiếu vuông góc của đa giác đó lên mặt phẳng (Q) có diện tích S′. Công thức nào liên hệ giữa S và S′ (với φ là góc giữa (P) và (Q))?",
                  "opts": [
                        "S′ = S · cos φ",
                        "S′ = S / cos φ",
                        "S′ = S · sin φ",
                        "S′ = S · tan φ"
                  ],
                  "ans": 0,
                  "exp": "Định lý diện tích hình chiếu: $S' = S \\cdot \\cos\\varphi$, với $\\varphi$ là góc giữa mặt phẳng chứa hình ban đầu và mặt phẳng chiếu ($0^\\circ \\le \\varphi \\le 90^\\circ$)."
            }
      ]
},
    'toan11-b26': {
      "subject": "math",
      "simType": "spatial",
      "simOptions": {
            "solid": "pyramid4",
            "analysisMode": "distance"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 26",
      "title": "Thực hành Khoảng cách trong Không gian: Điểm đến mặt phẳng & Đường chéo nhau",
      "guide": "Xoay hình chóp S.ABCD, kéo thanh trượt chiều cao h và cạnh đáy a để quan sát khoảng cách d(S, (ABCD)) = SO và khoảng cách từ tâm O đến mặt bên (SBC).",
      "questions": [
            {
                  "q": "Khoảng cách từ điểm M đến mặt phẳng (α) được định nghĩa là:",
                  "opts": [
                        "Độ dài đoạn thẳng MH, với H là hình chiếu vuông góc của điểm M trên mặt phẳng (α)",
                        "Khoảng cách từ M đến một điểm bất kỳ thuộc (α)",
                        "Độ dài đoạn thẳng nối M với gốc O",
                        "Bằng 0"
                  ],
                  "ans": 0,
                  "exp": "Định nghĩa: Khoảng cách từ điểm $M$ đến mặt phẳng $(\\alpha)$ là khoảng cách ngắn nhất từ $M$ đến các điểm thuộc $(\\alpha)$, chính là độ dài đoạn vuông góc $MH$ ($H \\in (\\alpha)$)."
            },
            {
                  "q": "Khoảng cách giữa hai đường thẳng chéo nhau a và b trong không gian bằng:",
                  "opts": [
                        "Độ dài đoạn vuông góc chung của a và b (hoặc khoảng cách từ a đến mặt phẳng chứa b và song song với a)",
                        "Độ dài đoạn thẳng ngắn nhất nối hai điểm",
                        "Bằng 0",
                        "Khoảng cách giữa hai hình chiếu"
                  ],
                  "ans": 0,
                  "exp": "Khoảng cách giữa hai đường thẳng chéo nhau là độ dài đoạn vuông góc chung của chúng, hoặc bằng khoảng cách giữa một trong hai đường thẳng đó đến mặt phẳng song song với nó chứa đường thẳng còn lại."
            },
            {
                  "q": "Trong hình chóp tứ giác đều S.ABCD có chiều cao SO = h và cạnh đáy a, khoảng cách d(S, (ABCD)) bằng:",
                  "opts": [
                        "Bằng đúng chiều cao h = SO",
                        "Bằng a",
                        "Bằng cạnh bên SA",
                        "Bằng h / 2"
                  ],
                  "ans": 0,
                  "exp": "Vì trong hình chóp tứ giác đều, đỉnh $S$ chiếu vuông góc xuống tâm đối xứng $O$ của đáy, nên khoảng cách từ đỉnh $S$ đến mặt đáy chính là độ dài đường cao $SO = h$."
            }
      ]
},
    'toan11-b27': {
      "subject": "math",
      "simType": "spatial",
      "simOptions": {
            "solid": "pyramid4",
            "analysisMode": "volume"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 27",
      "title": "Thực hành Thể tích Khối Chóp, Lăng trụ & Chóp cụt",
      "guide": "Chuyển đổi giữa khối chóp và lăng trụ, thay đổi cạnh đáy a và chiều cao h để quan sát công thức thể tích V = ⅓·S·h và V = S·h cập nhật giá trị số tức thời.",
      "questions": [
            {
                  "q": "Công thức tính thể tích của một khối chóp có diện tích đáy B và chiều cao h là:",
                  "opts": [
                        "V = (1/3) · B · h",
                        "V = B · h",
                        "V = (1/2) · B · h",
                        "V = (4/3) · B · h"
                  ],
                  "ans": 0,
                  "exp": "Thể tích khối chóp bằng một phần ba tích của diện tích đáy và chiều cao: $V = \\frac{1}{3}Bh$."
            },
            {
                  "q": "Công thức tính thể tích của khối lăng trụ có diện tích đáy B và chiều cao h là:",
                  "opts": [
                        "V = B · h",
                        "V = (1/3) · B · h",
                        "V = 2B · h",
                        "V = (1/2) · B · h"
                  ],
                  "ans": 0,
                  "exp": "Thể tích khối lăng trụ (đứng hoặc xiên) bằng tích của diện tích đáy và chiều cao: $V = Bh$."
            },
            {
                  "q": "Một khối chóp tứ giác đều có cạnh đáy a = 4 và chiều cao h = 6. Thể tích V của khối chóp này bằng:",
                  "opts": [
                        "V = (1/3) · 4² · 6 = 32 (đvtt)",
                        "V = 4² · 6 = 96",
                        "V = 16",
                        "V = 48"
                  ],
                  "ans": 0,
                  "exp": "Diện tích đáy là hình vuông $B = a^2 = 4^2 = 16$. Thể tích $V = \\frac{1}{3} \\cdot 16 \\cdot 6 = 32$ đơn vị thể tích."
            }
      ]
},
    'toan11-b28': {
      "subject": "math",
      "simType": "logic_set",
      "simOptions": {
            "mode": "probability_events"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 28",
      "title": "Thực hành Biến cố Hợp, Biến cố Giao & Biến cố Độc lập (Biểu đồ Venn)",
      "guide": "Tô màu các vùng Biểu đồ Venn để phân biệt trực quan giữa biến cố hợp A ∪ B, biến cố giao AB (A ∩ B), biến cố đối Ā và điều kiện xung khắc AB = ∅.",
      "questions": [
            {
                  "q": "Biến cố \"A hoặc B xảy ra\" (A ∪ B) là biến cố nào sau đây?",
                  "opts": [
                        "Biến cố hợp của A và B (tập hợp tất cả các kết quả thuận lợi cho A hoặc thuận lợi cho B)",
                        "Biến cố giao AB",
                        "Biến cố đối của A",
                        "Biến cố chắc chắn"
                  ],
                  "ans": 0,
                  "exp": "Định nghĩa: Biến cố hợp của $A$ và $B$, ký hiệu $A \\cup B$, là biến cố xảy ra khi có ít nhất một trong hai biến cố $A$ hoặc $B$ xảy ra."
            },
            {
                  "q": "Hai biến cố A và B được gọi là xung khắc khi và chỉ khi:",
                  "opts": [
                        "A và B không thể cùng xảy ra trong cùng một phép thử (A ∩ B = ∅)",
                        "A và B luôn cùng xảy ra",
                        "P(A) + P(B) = 1",
                        "P(A) = P(B)"
                  ],
                  "ans": 0,
                  "exp": "Hai biến cố $A$ và $B$ là xung khắc nếu chúng không có kết quả chung nào, tức là $AB = \\emptyset$ và $P(AB) = 0$."
            },
            {
                  "q": "Hai biến cố A và B được gọi là độc lập khi:",
                  "opts": [
                        "Việc xảy ra hay không xảy ra của biến cố này không làm ảnh hưởng đến xác suất xảy ra của biến cố kia",
                        "A và B xung khắc nhau",
                        "A là biến cố đối của B",
                        "P(A) = 0.5"
                  ],
                  "ans": 0,
                  "exp": "Hai biến cố $A$ và $B$ là độc lập nếu việc biến cố $A$ xảy ra hay không xảy ra không ảnh hưởng tới xác suất xảy ra của biến cố $B$ và ngược lại."
            }
      ]
},
    'toan11-b29': {
      "subject": "math",
      "simType": "logic_set",
      "simOptions": {
            "mode": "addition_rule"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 29",
      "title": "Thực hành Công thức Cộng Xác suất: P(A ∪ B) = P(A) + P(B) − P(AB)",
      "guide": "Thay đổi diện tích hai hình tròn A, B và vùng giao nhau AB để kiểm chứng công thức cộng xác suất tổng quát và trường hợp đặc biệt khi A, B xung khắc.",
      "questions": [
            {
                  "q": "Với hai biến cố bất kỳ A và B cùng thuộc không gian mẫu Ω, công thức cộng xác suất tổng quát là:",
                  "opts": [
                        "P(A ∪ B) = P(A) + P(B) − P(AB)",
                        "P(A ∪ B) = P(A) + P(B)",
                        "P(A ∪ B) = P(A) · P(B)",
                        "P(A ∪ B) = P(A) + P(B) + P(AB)"
                  ],
                  "ans": 0,
                  "exp": "Công thức cộng xác suất cho hai biến cố bất kỳ: $P(A \\cup B) = P(A) + P(B) - P(AB)$ (trừ đi phần giao nhau bị tính lặp 2 lần)."
            },
            {
                  "q": "Cho P(A) = 0.4, P(B) = 0.5 và P(AB) = 0.2. Xác suất của biến cố hợp P(A ∪ B) nhận giá trị bằng:",
                  "opts": [
                        "P(A ∪ B) = 0.4 + 0.5 − 0.2 = 0.7",
                        "0.9",
                        "0.2",
                        "0.8"
                  ],
                  "ans": 0,
                  "exp": "Áp dụng công thức cộng: $P(A \\cup B) = 0.4 + 0.5 - 0.2 = 0.7$."
            },
            {
                  "q": "Nếu hai biến cố A và B xung khắc (không thể cùng xảy ra, AB = ∅) thì công thức cộng xác suất trở thành:",
                  "opts": [
                        "P(A ∪ B) = P(A) + P(B) (vì P(AB) = 0)",
                        "P(A ∪ B) = P(A) · P(B)",
                        "P(A ∪ B) = 1",
                        "P(A ∪ B) = 0"
                  ],
                  "ans": 0,
                  "exp": "Khi $A$ và $B$ xung khắc, $AB = \\emptyset \\Rightarrow P(AB) = 0$, suy ra $P(A \\cup B) = P(A) + P(B)$."
            }
      ]
},
    'toan11-b30': {
      "subject": "math",
      "simType": "bayes",
      "simOptions": {
            "mode": "tree_multiplication",
            "pA": 0.6,
            "pB_A": 0.7,
            "pB_notA": 0.7
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 30",
      "title": "Thực hành Công thức Nhân Xác suất cho Hai biến cố Độc lập (Sơ đồ cây)",
      "guide": "Điều chỉnh xác suất P(A) và P(B) trên Sơ đồ cây 2 giai đoạn để quan sát tích xác suất trên từng nhánh P(AB) = P(A)·P(B) và kiểm chứng tổng 4 nhánh luôn bằng 1.",
      "questions": [
            {
                  "q": "Nếu hai biến cố A và B độc lập thì công thức nhân xác suất của biến cố giao AB là:",
                  "opts": [
                        "P(AB) = P(A) · P(B)",
                        "P(AB) = P(A) + P(B)",
                        "P(AB) = P(A) / P(B)",
                        "P(AB) = P(A) + P(B) − P(A ∪ B)"
                  ],
                  "ans": 0,
                  "exp": "Định nghĩa: Hai biến cố $A$ và $B$ độc lập khi và chỉ khi xác suất xảy ra đồng thời cả $A$ và $B$ bằng tích xác suất của từng biến cố: $P(AB) = P(A) \\cdot P(B)$."
            },
            {
                  "q": "Gieo một đồng xu cân đối 2 lần liên tiếp. Gọi A là biến cố \"lần 1 ngửa\", B là \"lần 2 ngửa\". Vì hai lần gieo độc lập, xác suất để cả 2 lần đều ngửa P(AB) bằng:",
                  "opts": [
                        "P(AB) = (1/2) · (1/2) = 1/4 = 0.25",
                        "1/2",
                        "1",
                        "1/8"
                  ],
                  "ans": 0,
                  "exp": "Vì mỗi lần gieo đồng xu cân đối có $P(A) = 1/2$ và $P(B) = 1/2$, hai lần gieo độc lập nên $P(AB) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4} = 0.25$."
            },
            {
                  "q": "Nếu hai biến cố A và B độc lập thì các cặp biến cố nào sau đây cũng độc lập với nhau?",
                  "opts": [
                        "A và B̄; Ā và B; Ā và B̄",
                        "Chỉ A và B̄",
                        "Không có cặp nào khác độc lập",
                        "A và B xung khắc"
                  ],
                  "ans": 0,
                  "exp": "Định lý: Nếu $A$ và $B$ độc lập thì các cặp biến cố $(A, \\overline{B})$, $(\\overline{A}, B)$ và $(\\overline{A}, \\overline{B})$ cũng đôi một độc lập."
            }
      ]
},
    'toan11-b31': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "cubic",
            "analysisMode": "derivative_def",
            "x0": 1,
            "showSecant": true,
            "showTangent": true
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 31",
      "title": "Thực hành Ý nghĩa hình học & vật lý của Đạo hàm: Cát tuyến tiến đến Tiếp tuyến",
      "guide": "Kéo thanh trượt khoảng cách Δx từ 1.5 giảm dần về 0 để quan sát đường cát tuyến M₀M tiến dần đến vị trí giới hạn là tiếp tuyến tại điểm M₀(x₀; f(x₀)).",
      "questions": [
            {
                  "q": "Theo định nghĩa, đạo hàm của hàm số y = f(x) tại điểm x₀ là giới hạn nào sau đây (nếu tồn tại giới hạn hữu hạn)?",
                  "opts": [
                        "f′(x₀) = lim_{Δx → 0} [f(x₀ + Δx) − f(x₀)] / Δx",
                        "f′(x₀) = f(x₀ + Δx) − f(x₀)",
                        "f′(x₀) = lim_{x → 0} f(x)",
                        "f′(x₀) = f(x₀) / x₀"
                  ],
                  "ans": 0,
                  "exp": "Định nghĩa: Đạo hàm của hàm số $y = f(x)$ tại $x_0$ là $\\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$."
            },
            {
                  "q": "Ý nghĩa hình học của đạo hàm: Đạo hàm f′(x₀) chính là:",
                  "opts": [
                        "Hệ số góc k của tiếp tuyến của đồ thị hàm số y = f(x) tại điểm M₀(x₀; f(x₀))",
                        "Độ dài của tiếp tuyến",
                        "Hoành độ giao điểm với trục Ox",
                        "Diện tích hình phẳng"
                  ],
                  "ans": 0,
                  "exp": "Định lý ý nghĩa hình học: Đạo hàm $f'(x_0)$ là hệ số góc của tiếp tuyến của đồ thị hàm số tại tiếp điểm $M_0(x_0; f(x_0))$. Phương trình tiếp tuyến là $y - y_0 = f'(x_0)(x - x_0)$."
            },
            {
                  "q": "Ý nghĩa vật lý của đạo hàm: Một vật chuyển động thẳng có phương trình quãng đường s = s(t). Vận tốc tức thời v(t₀) của vật tại thời điểm t₀ bằng:",
                  "opts": [
                        "v(t₀) = s′(t₀) (đạo hàm của quãng đường theo thời gian)",
                        "v(t₀) = s(t₀) / t₀ (vận tốc trung bình)",
                        "v(t₀) = s′′(t₀)",
                        "v(t₀) = 1/2 s(t₀)"
                  ],
                  "ans": 0,
                  "exp": "Ý nghĩa cơ học: Vận tốc tức thời của chuyển động tại thời điểm $t_0$ là đạo hàm bậc nhất của quãng đường theo thời gian: $v(t_0) = s'(t_0)$."
            }
      ]
},
    'toan11-b32': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "cubic",
            "analysisMode": "derivative_rules",
            "x0": 1
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 32",
      "title": "Thực hành Các quy tắc tính Đạo hàm & Đồ thị Hàm đạo hàm f′(x)",
      "guide": "Quan sát đồ thị hàm số y = f(x) và đồ thị hàm đạo hàm y = f′(x). Kiểm chứng mối liên hệ: khi f′(x) > 0 thì hàm số đồng biến, khi f′(x) < 0 thì hàm số nghịch biến.",
      "questions": [
            {
                  "q": "Quy tắc tính đạo hàm của tích hai hàm số (u · v)′ bằng công thức nào?",
                  "opts": [
                        "(u · v)′ = u′v + uv′",
                        "(u · v)′ = u′ · v′",
                        "(u · v)′ = u′v − uv′",
                        "(u · v)′ = u′ + v′"
                  ],
                  "ans": 0,
                  "exp": "Quy tắc đạo hàm của tích: $(uv)' = u'v + uv'$."
            },
            {
                  "q": "Đạo hàm của hàm hợp y = f(u(x)) với u = u(x) có đạo hàm theo x là:",
                  "opts": [
                        "y′_x = y′_u · u′_x",
                        "y′_x = y′_u + u′_x",
                        "y′_x = f′(u)",
                        "y′_x = u′_x / y′_u"
                  ],
                  "ans": 0,
                  "exp": "Quy tắc đạo hàm hàm hợp: Nếu $u = g(x)$ có đạo hàm tại $x$ và $y = f(u)$ có đạo hàm tại $u$ thì $(f(g(x)))' = f'(u) \\cdot g'(x)$."
            },
            {
                  "q": "Quan sát đồ thị hàm số y = x³ − 3x trên mô phỏng. Hàm số đạt cực trị tại các điểm x mà tại đó đạo hàm f′(x) bằng:",
                  "opts": [
                        "f′(x) = 3x² − 3 = 0 ⟺ x = ±1",
                        "f′(x) = 1",
                        "f′(x) > 0",
                        "f′(x) không xác định"
                  ],
                  "ans": 0,
                  "exp": "Ta có $f'(x) = 3x^2 - 3 = 0 \\iff x = 1$ hoặc $x = -1$. Tại các điểm này tiếp tuyến nằm ngang ($k = 0$) và hàm số đổi chiều biến thiên."
            }
      ]
},
    'toan11-b33': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "cubic",
            "analysisMode": "second_derivative",
            "x0": 0
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 11 • Bài 33",
      "title": "Thực hành Đạo hàm Cấp hai: Gia tốc tức thời & Tính lồi - lõm của Đồ thị",
      "guide": "Quan sát đạo hàm cấp hai f′′(x) = (f′(x))′, kiểm chứng ý nghĩa gia tốc a(t) = s′′(t) và điểm uốn tại x = 0 nơi f′′(x) đổi dấu từ âm sang dương.",
      "questions": [
            {
                  "q": "Đạo hàm cấp hai f′′(x) của hàm số y = f(x) được định nghĩa là:",
                  "opts": [
                        "Đạo hàm của đạo hàm cấp một: f′′(x) = (f′(x))′",
                        "Bình phương đạo hàm cấp một: (f′(x))²",
                        "Đạo hàm hai lần của x",
                        "f(x) nhân 2"
                  ],
                  "ans": 0,
                  "exp": "Định nghĩa: Đạo hàm cấp hai của hàm số $y = f(x)$ là đạo hàm của hàm số $y = f'(x)$, ký hiệu $f''(x) = (f'(x))'$."
            },
            {
                  "q": "Ý nghĩa vật lý của đạo hàm cấp hai: Trong chuyển động thẳng với phương trình s = s(t), gia tốc tức thời a(t₀) của vật tại thời điểm t₀ bằng:",
                  "opts": [
                        "a(t₀) = v′(t₀) = s′′(t₀) (đạo hàm cấp hai của quãng đường theo thời gian)",
                        "a(t₀) = s′(t₀)",
                        "a(t₀) = s(t₀) / t₀²",
                        "a(t₀) = v(t₀) · t₀"
                  ],
                  "ans": 0,
                  "exp": "Gia tốc tức thời là tốc độ biến thiên của vận tốc: $a(t) = v'(t) = s''(t)$."
            },
            {
                  "q": "Với hàm số y = x³ − 3x, đạo hàm cấp hai là f′′(x) = 6x. Điểm uốn của đồ thị là điểm mà tại đó:",
                  "opts": [
                        "f′′(x) = 0 và đổi dấu qua điểm đó (tại x = 0, đồ thị đổi từ lồi sang lõm)",
                        "f′(x) = 0",
                        "f(x) = 0",
                        "f′′(x) > 0"
                  ],
                  "ans": 0,
                  "exp": "Ta có $f''(x) = 6x = 0 \\iff x = 0$. Khi $x < 0$, $f''(x) < 0$ (đồ thị lồi); khi $x > 0$, $f''(x) > 0$ (đồ thị lõm). Điểm $U(0; 0)$ là điểm uốn."
            }
      ]
},
    'toan12-b1': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "cubic",
            "x0": 0
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 1",
      "title": "Thực hành Tính đơn điệu và Cực trị của hàm số qua Đạo hàm",
      "guide": "Kéo thanh trượt x₀ từ −3,0 đến +3,0 dọc theo đồ thị hàm số y = x³ − 3x và quan sát dấu của hệ số góc tiếp tuyến f'(x₀) = 3x² − 3.",
      "questions": [
            {
                  "q": "Trên đồ thị hàm số y = x³ − 3x (có đạo hàm f'(x) = 3x² − 3 = 0 ⇔ x = ±1), các khoảng đồng biến và nghịch biến của hàm số là:",
                  "opts": [
                        "Đồng biến trên (−∞; −1) và (1; +∞); nghịch biến trên (−1; 1)",
                        "Đồng biến trên (−1; 1); nghịch biến trên (−∞; −1) và (1; +∞)",
                        "Đồng biến trên toàn miền ℝ",
                        "Nghịch biến trên (−∞; 0) và đồng biến trên (0; +∞)"
                  ],
                  "ans": 0,
                  "exp": "Đạo hàm $f'(x) = 3x^2 - 3 > 0 \\Leftrightarrow x \\in (-\\infty; -1) \\cup (1; +\\infty)$ nên hàm số đồng biến trên $(-\\infty; -1)$ và $(1; +\\infty)$; $f'(x) < 0 \\Leftrightarrow x \\in (-1; 1)$ nên hàm số nghịch biến trên $(-1; 1)$."
            },
            {
                  "q": "Tọa độ điểm cực đại và điểm cực tiểu của đồ thị hàm số y = x³ − 3x lần lượt là:",
                  "opts": [
                        "Điểm cực đại (−1; 2) và điểm cực tiểu (1; −2)",
                        "Điểm cực đại (1; −2) và điểm cực tiểu (−1; 2)",
                        "Điểm cực đại (0; 0) và điểm cực tiểu (1; −2)",
                        "Điểm cực đại (−1; 2) và điểm cực tiểu (0; 0)"
                  ],
                  "ans": 0,
                  "exp": "Tại $x = -1$, đạo hàm đổi dấu từ dương sang âm nên $x_{CĐ} = -1$, $y_{CĐ} = (-1)^3 - 3(-1) = 2 \\Rightarrow$ Điểm cực đại $(-1; 2)$. Tại $x = 1$, đạo hàm đổi dấu từ âm sang dương nên $x_{CT} = 1$, $y_{CT} = 1^3 - 3(1) = -2 \\Rightarrow$ Điểm cực tiểu $(1; -2)$."
            },
            {
                  "q": "Khi kéo tiếp điểm x₀ tiến dần qua điểm cực đại x = −1 từ trái sang phải, dấu của hệ số góc tiếp tuyến k = f'(x₀) biến thiên như thế nào?",
                  "opts": [
                        "Đổi dấu từ dương (> 0) sang triệt tiêu (= 0 tại x = −1) rồi sang âm (< 0)",
                        "Đổi dấu từ âm (< 0) sang dương (> 0)",
                        "Luôn giữ nguyên dấu dương không đổi",
                        "Đổi dấu từ âm sang không xác định"
                  ],
                  "ans": 0,
                  "exp": "Theo dấu hiệu I tìm cực trị, khi $x$ đi qua điểm cực đại từ trái sang phải thì $f'(x)$ đổi dấu từ dương sang âm, tại chính điểm cực trị $f'(-1) = 0$ (tiếp tuyến nằm ngang)."
            }
      ]
},
    'toan12-b2': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "cubic",
            "intA": -1,
            "intB": 2,
            "x0": 1
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 2",
      "title": "Thực hành Giá trị lớn nhất và Giá trị nhỏ nhất của hàm số trên một đoạn",
      "guide": "Quan sát đồ thị hàm số y = x³ − 3x trên đoạn [−1; 2], so sánh giá trị tại hai đầu mút và tại các điểm cực trị để tìm GTLN và GTNN.",
      "questions": [
            {
                  "q": "Giá trị lớn nhất (M) và giá trị nhỏ nhất (m) của hàm số y = x³ − 3x trên đoạn [−1; 2] là:",
                  "opts": [
                        "M = 2 (tại x = −1 và x = 2); m = −2 (tại x = 1)",
                        "M = 2 (tại x = 2); m = 0 (tại x = 0)",
                        "M = 4 (tại x = 2); m = −2 (tại x = 1)",
                        "M = 0; m = −2 (tại x = 1)"
                  ],
                  "ans": 0,
                  "exp": "Đạo hàm $f'(x) = 3x^2 - 3 = 0 \\Leftrightarrow x = 1 \\in (-1; 2)$ (loại $x = -1$ vì là đầu mút). Tính $f(-1) = 2$, $f(1) = -2$, $f(2) = 2$. Do đó $\\max_{[-1; 2]} y = 2$ và $\\min_{[-1; 2]} y = -2$."
            },
            {
                  "q": "Quy trình tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số f(x) liên tục trên đoạn [a; b] là:",
                  "opts": [
                        "Tìm các điểm xᵢ ∈ (a; b) mà f'(xᵢ) = 0 hoặc không xác định, tính f(a), f(b), f(xᵢ) rồi so sánh để chọn max, min",
                        "Chỉ cần tính giá trị tại hai đầu mút f(a) và f(b)",
                        "Giải phương trình f(x) = 0 để tìm nghiệm rồi tính giá trị hàm số",
                        "Chỉ cần tìm nghiệm của đạo hàm bậc hai f''(x) = 0"
                  ],
                  "ans": 0,
                  "exp": "Hàm số liên tục trên đoạn $[a; b]$ luôn đạt GTLN và GTNN tại các điểm tới hạn (nghiệm của $f'(x)=0$ hoặc $f'(x)$ không xác định) nằm trong $(a; b)$ hoặc tại chính hai đầu mút $a, b$."
            },
            {
                  "q": "Nếu hàm số f(x) đồng biến trên toàn bộ đoạn [a; b] thì khẳng định nào sau đây luôn đúng?",
                  "opts": [
                        "min f(x) = f(a) và max f(x) = f(b) trên [a; b]",
                        "min f(x) = f(b) và max f(x) = f(a) trên [a; b]",
                        "min f(x) = 0 và max f(x) = f(b)",
                        "Cần phải tính đạo hàm f'(x) mới xác định được"
                  ],
                  "ans": 0,
                  "exp": "Khi hàm số đồng biến trên $[a; b]$, với mọi $x \\in [a; b]$ ta có $a \\le x \\le b \\Rightarrow f(a) \\le f(x) \\le f(b)$. Do đó $\\min = f(a)$ và $\\max = f(b)$."
            }
      ]
},
    'toan12-b3': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "rational",
            "x0": 2
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 3",
      "title": "Thực hành Khảo sát Đường tiệm cận của đồ thị hàm số",
      "guide": "Chọn nút \"Phân thức: (2x−1)/(x−1)\" trên mô phỏng để quan sát 2 đường tiệm cận nét đứt màu vàng và dịch chuyển điểm x₀ tiến sát về x = 1 hoặc ra vô cực.",
      "questions": [
            {
                  "q": "Đồ thị hàm phân thức nhất biến y = (2x − 1)/(x − 1) có phương trình tiệm cận đứng và tiệm cận ngang lần lượt là:",
                  "opts": [
                        "Tiệm cận đứng x = 1, tiệm cận ngang y = 2",
                        "Tiệm cận đứng x = 2, tiệm cận ngang y = 1",
                        "Tiệm cận đứng x = −1, tiệm cận ngang y = 2",
                        "Tiệm cận đứng y = 2, tiệm cận ngang x = 1"
                  ],
                  "ans": 0,
                  "exp": "$\\lim_{x \\to 1^+} \\frac{2x-1}{x-1} = +\\infty \\Rightarrow$ TCĐ là đường thẳng $x = 1$. $\\lim_{x \\to \\pm\\infty} \\frac{2x-1}{x-1} = 2 \\Rightarrow$ TCN là đường thẳng $y = 2$."
            },
            {
                  "q": "Đường thẳng x = x₀ được gọi là đường tiệm cận đứng của đồ thị hàm số y = f(x) nếu thỏa mãn điều kiện nào sau đây?",
                  "opts": [
                        "Ít nhất một trong bốn giới hạn lim_{x → x₀⁺} f(x), lim_{x → x₀⁻} f(x) bằng +∞ hoặc −∞",
                        "lim_{x → +∞} f(x) = x₀",
                        "f(x₀) = 0",
                        "f'(x₀) = 0"
                  ],
                  "ans": 0,
                  "exp": "Theo định nghĩa SGK Toán 12, đường thẳng $x = x_0$ là tiệm cận đứng của đồ thị hàm số $y = f(x)$ nếu ít nhất một trong các điều kiện sau được thỏa mãn: $\\lim_{x \\to x_0^+} f(x) = +\\infty$, $\\lim_{x \\to x_0^+} f(x) = -\\infty$, $\\lim_{x \\to x_0^-} f(x) = +\\infty$, $\\lim_{x \\to x_0^-} f(x) = -\\infty$."
            },
            {
                  "q": "Giao điểm của tiệm cận đứng x = 1 và tiệm cận ngang y = 2 của đồ thị hàm số y = (2x − 1)/(x − 1) có vai trò hình học gì?",
                  "opts": [
                        "Là tâm đối xứng của hypebol đồ thị hàm số",
                        "Là trục đối xứng của đồ thị hàm số",
                        "Là điểm cực đại của hàm số",
                        "Là gốc tọa độ của mặt phẳng"
                  ],
                  "ans": 0,
                  "exp": "Đồ thị hàm số nhất biến $y = \\frac{ax+b}{cx+d}$ luôn nhận giao điểm của 2 đường tiệm cận $I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$ làm tâm đối xứng."
            }
      ]
},
    'toan12-b4': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "cubic",
            "x0": 1
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 4",
      "title": "Thực hành Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
      "guide": "Chuyển đổi qua lại giữa \"Bậc ba: x³ − 3x\" và \"Phân thức: (2x−1)/(x−1)\" để đối chiếu 5 bước khảo sát hàm số chuẩn SGK Toán 12.",
      "questions": [
            {
                  "q": "Sơ đồ khảo sát sự biến thiên và vẽ đồ thị hàm số theo chuẩn SGK Toán 12 gồm các bước chính nào?",
                  "opts": [
                        "Tìm TXĐ; xét chiều biến thiên (đạo hàm, cực trị, giới hạn & tiệm cận); lập BBT; vẽ đồ thị (giao trục tọa độ, tâm/trục đối xứng)",
                        "Chỉ cần tính đạo hàm f'(x) rồi vẽ đồ thị trên phần mềm",
                        "Lập bảng giá trị 10 điểm rồi nối lại thành đường cong",
                        "Tìm giá trị lớn nhất và nhỏ nhất trên đoạn [−5; 5]"
                  ],
                  "ans": 0,
                  "exp": "Sơ đồ khảo sát hoàn chỉnh gồm: 1. Tìm tập xác định. 2. Xét sự biến thiên (chiều biến thiên, cực trị, giới hạn vô cực và tiệm cận, lập bảng biến thiên). 3. Vẽ đồ thị (xác định các điểm đặc biệt, tính đối xứng)."
            },
            {
                  "q": "Đồ thị hàm số bậc ba y = ax³ + bx² + cx + d (a ≠ 0) luôn có tính chất đối xứng nào sau đây?",
                  "opts": [
                        "Nhận điểm uốn I(x₀; y₀) với x₀ = −b/(3a) (nghiệm của y'' = 0) làm tâm đối xứng",
                        "Nhận trục tung Oy làm trục đối xứng",
                        "Nhận trục hoành Ox làm trục đối xứng",
                        "Không có bất kì tâm hay trục đối xứng nào"
                  ],
                  "ans": 0,
                  "exp": "Đồ thị của mọi hàm số bậc ba luôn có đúng một tâm đối xứng chính là điểm uốn $I(x_0; y_0)$ với $y''(x_0) = 0 \\Leftrightarrow x_0 = -\\frac{b}{3a}$."
            },
            {
                  "q": "Số giao điểm của đồ thị hàm số y = x³ − 3x với trục hoành Ox là:",
                  "opts": [
                        "3 giao điểm phân biệt tại x = −√3, x = 0, x = √3",
                        "1 giao điểm duy nhất tại x = 0",
                        "2 giao điểm tại x = 0 và x = 3",
                        "Không có giao điểm nào"
                  ],
                  "ans": 0,
                  "exp": "Phương trình hoành độ giao điểm $x^3 - 3x = 0 \\Leftrightarrow x(x^2 - 3) = 0 \\Leftrightarrow x = 0$ hoặc $x = \\pm\\sqrt{3}$. Đồ thị cắt trục hoành tại 3 điểm phân biệt."
            }
      ]
},
    'toan12-b5': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "cubic",
            "x0": 1
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 5",
      "title": "Thực hành Ứng dụng đạo hàm giải quyết một số vấn đề thực tiễn",
      "guide": "Khảo sát hàm thể tích, chi phí và lợi nhuận qua đạo hàm để xác định điểm tối ưu (cực đại hoặc cực tiểu) trong các bài toán thực tiễn.",
      "questions": [
            {
                  "q": "Một tấm tôn hình vuông cạnh 60 cm được cắt bỏ 4 hình vuông cạnh x ở 4 góc rồi gập thành một chiếc hộp không nắp. Thể tích hộp V(x) = x(60 − 2x)² đạt cực đại khi x bằng bao nhiêu?",
                  "opts": [
                        "x = 10 cm (thể tích cực đại V_max = 16.000 cm³)",
                        "x = 15 cm (thể tích cực đại V_max = 13.500 cm³)",
                        "x = 20 cm (thể tích cực đại V_max = 8.000 cm³)",
                        "x = 5 cm (thể tích cực đại V_max = 12.500 cm³)"
                  ],
                  "ans": 0,
                  "exp": "Điều kiện $0 < x < 30$. $V(x) = 4x^3 - 240x^2 + 3600x$. $V'(x) = 12x^2 - 480x + 3600 = 0 \\Leftrightarrow x = 10$ (nhận) hoặc $x = 30$ (loại). Khi $x = 10\\text{ cm}$, $V_{max} = 10(40)^2 = 16.000\\text{ cm}^3$."
            },
            {
                  "q": "Trong kinh tế học, hàm lợi nhuận là P(x) = R(x) − C(x) với R(x) là doanh thu và C(x) là chi phí sản xuất. Lợi nhuận đạt tối đa tại mức sản lượng x khi thỏa mãn điều kiện biên tế nào?",
                  "opts": [
                        "Doanh thu biên tế bằng chi phí biên tế: R'(x) = C'(x) (tức P'(x) = 0)",
                        "Chi phí biên tế bằng 0: C'(x) = 0",
                        "Doanh thu đạt cực đại: R'(x) = 0",
                        "Tổng chi phí bằng tổng doanh thu: C(x) = R(x)"
                  ],
                  "ans": 0,
                  "exp": "Để $P(x)$ đạt cực đại thì điều kiện cần là $P'(x) = 0 \\Leftrightarrow R'(x) - C'(x) = 0 \\Leftrightarrow R'(x) = C'(x)$ (doanh thu biên tế bằng chi phí biên tế)."
            },
            {
                  "q": "Một giọt dầu loang trên mặt nước tạo thành hình tròn có bán kính r tăng với tốc độ không đổi 2 cm/s. Tốc độ tăng diện tích hình tròn tại thời điểm r = 10 cm là:",
                  "opts": [
                        "40π cm²/s (xấp xỉ 125,66 cm²/s)",
                        "20π cm²/s (xấp xỉ 62,83 cm²/s)",
                        "100π cm²/s",
                        "4π cm²/s"
                  ],
                  "ans": 0,
                  "exp": "Diện tích $S = \\pi r^2$. Lấy đạo hàm hai vế theo thời gian: $\\frac{dS}{dt} = 2\\pi r \\cdot \\frac{dr}{dt} = 2\\pi (10) \\cdot 2 = 40\\pi\\text{ cm}^2/\\text{s}$."
            }
      ]
},
    'toan12-b6': {
      "subject": "math",
      "simType": "spatial",
      "simOptions": {
            "solid": "box"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 6",
      "title": "Thực hành Vectơ trong không gian & Quy tắc hình hộp",
      "guide": "Chọn mô hình \"Hình hộp Oxyz\", xoay 360° để quan sát quy tắc cộng vectơ trong không gian: vectơ đường chéo bằng tổng 3 vectơ cạnh xuất phát từ một đỉnh.",
      "questions": [
            {
                  "q": "Trong hình hộp ABCD.A'B'C'D', quy tắc hình hộp xác định vectơ đường chéo AC' theo 3 vectơ cạnh xuất phát từ đỉnh A là:",
                  "opts": [
                        "vec(AC') = vec(AB) + vec(AD) + vec(AA')",
                        "vec(AC') = vec(AB) + vec(AD) − vec(AA')",
                        "vec(AC') = vec(AC) + vec(BD) + vec(AA')",
                        "vec(AC') = vec(A'B') + vec(A'D') + vec(A'A)"
                  ],
                  "ans": 0,
                  "exp": "Theo quy tắc hình hộp SGK Toán 12: $\\vec{AC'} = \\vec{AC} + \\vec{AA'} = (\\vec{AB} + \\vec{AD}) + \\vec{AA'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$."
            },
            {
                  "q": "Cho ba vectơ vec(a), vec(b), vec(c) không cùng phương. Điều kiện cần và đủ để ba vectơ đó đồng phẳng là:",
                  "opts": [
                        "Tồn tại duy nhất cặp số thực (m; n) sao cho vec(c) = m·vec(a) + n·vec(b)",
                        "Tích vô hướng vec(a) · vec(b) · vec(c) = 0",
                        "Độ dài |vec(a)| + |vec(b)| = |vec(c)|",
                        "Ba vectơ có độ dài bằng nhau"
                  ],
                  "ans": 0,
                  "exp": "Ba vectơ đồng phẳng khi và chỉ khi một trong ba vectơ biểu diễn được thành tổ hợp tuyến tính của hai vectơ còn lại: $\\vec{c} = m\\vec{a} + n\\vec{b}$."
            },
            {
                  "q": "Cho tứ diện đều ABCD có cạnh bằng a. Góc giữa hai vectơ vec(AB) và vec(BC) bằng bao nhiêu?",
                  "opts": [
                        "120°",
                        "60°",
                        "90°",
                        "30°"
                  ],
                  "ans": 0,
                  "exp": "Ta có $\\vec{BC} = -\\vec{CB}$, nên $(\\vec{AB}, \\vec{BC}) = 180^\\circ - (\\vec{BA}, \\vec{BC}) = 180^\\circ - 60^\\circ = 120^\\circ$."
            }
      ]
},
    'toan12-b7': {
      "subject": "math",
      "simType": "spatial",
      "simOptions": {
            "solid": "box"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 7",
      "title": "Thực hành Hệ trục tọa độ Oxyz & Tọa độ điểm trong không gian",
      "guide": "Xoay 360° hệ trục tọa độ Oxyz để quan sát các trục Ox (đỏ), Oy (xanh lá), Oz (xanh dương) và các hình chiếu vuông góc của một điểm lên các mặt phẳng tọa độ.",
      "questions": [
            {
                  "q": "Trong không gian Oxyz, cho điểm M(x; y; z). Đẳng thức vectơ nào sau đây xác định tọa độ của điểm M theo các vectơ đơn vị i⃗, j⃗, k⃗?",
                  "opts": [
                        "vec(OM) = x·i⃗ + y·j⃗ + z·k⃗",
                        "vec(OM) = z·i⃗ + y·j⃗ + x·k⃗",
                        "vec(OM) = (x + y + z)(i⃗ + j⃗ + k⃗)",
                        "vec(OM) = x²·i⃗ + y²·j⃗ + z²·k⃗"
                  ],
                  "ans": 0,
                  "exp": "Theo định nghĩa hệ tọa độ $Oxyz$, tọa độ của điểm $M(x; y; z)$ chính là bộ ba số thực thỏa mãn $\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$."
            },
            {
                  "q": "Hình chiếu vuông góc của điểm M(2; −3; 5) lên mặt phẳng tọa độ (Oxy) có tọa độ là:",
                  "opts": [
                        "M₁(2; −3; 0)",
                        "M₂(0; 0; 5)",
                        "M₃(2; 0; 5)",
                        "M₄(0; −3; 5)"
                  ],
                  "ans": 0,
                  "exp": "Hình chiếu vuông góc của điểm $M(x; y; z)$ lên mặt phẳng $(Oxy)$ có cao độ triệt tiêu: $z = 0$, giữ nguyên hoành độ và tung độ $\\Rightarrow M_1(2; -3; 0)$."
            },
            {
                  "q": "Khoảng cách từ điểm M(x₀; y₀; z₀) đến trục tọa độ Oz trong không gian Oxyz được tính bởi công thức:",
                  "opts": [
                        "d(M, Oz) = √(x₀² + y₀²)",
                        "d(M, Oz) = |z₀|",
                        "d(M, Oz) = √(x₀² + y₀² + z₀²)",
                        "d(M, Oz) = √(y₀² + z₀²)"
                  ],
                  "ans": 0,
                  "exp": "Hình chiếu vuông góc của $M$ lên $Oz$ là $H(0; 0; z_0)$. Khoảng cách $d(M, Oz) = MH = \\sqrt{(x_0 - 0)^2 + (y_0 - 0)^2 + (z_0 - z_0)^2} = \\sqrt{x_0^2 + y_0^2}$."
            }
      ]
},
    'toan12-b8': {
      "subject": "math",
      "simType": "spatial",
      "simOptions": {
            "solid": "box"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 8",
      "title": "Thực hành Biểu thức tọa độ của các phép toán vectơ trong Oxyz",
      "guide": "Thực hành tính độ dài vectơ, tích vô hướng, góc giữa hai vectơ và kiểm tra điều kiện vuông góc qua tọa độ 3 chiều trong không gian Oxyz.",
      "questions": [
            {
                  "q": "Cho vec(u) = (1; 2; −2) và vec(v) = (2; −1; 1). Tích vô hướng vec(u) · vec(v) có giá trị bằng:",
                  "opts": [
                        "−2",
                        "2",
                        "0",
                        "4"
                  ],
                  "ans": 0,
                  "exp": "$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2 = 1(2) + 2(-1) + (-2)(1) = 2 - 2 - 2 = -2$."
            },
            {
                  "q": "Độ dài của vectơ vec(u) = (2; −1; 2) trong không gian Oxyz bằng:",
                  "opts": [
                        "3",
                        "9",
                        "√5",
                        "5"
                  ],
                  "ans": 0,
                  "exp": "$|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$."
            },
            {
                  "q": "Cho hai vectơ vec(a) = (1; 0; 1) và vec(b) = (0; 1; 1). Số đo góc giữa hai vectơ (vec(a), vec(b)) là:",
                  "opts": [
                        "60°",
                        "45°",
                        "90°",
                        "120°"
                  ],
                  "ans": 0,
                  "exp": "$\\cos(\\vec{a}, \\vec{b}) = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|} = \\frac{1(0) + 0(1) + 1(1)}{\\sqrt{1^2+0^2+1^2}\\sqrt{0^2+1^2+1^2}} = \\frac{1}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2} \\Rightarrow (\\vec{a}, \\vec{b}) = 60^\\circ$."
            }
      ]
},
    'toan12-b9': {
      "subject": "math",
      "simType": "stats11",
      "simOptions": {
            "mode": "dispersion"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 9",
      "title": "Thực hành Khoảng biến thiên và Khoảng tứ phân vị của mẫu số liệu ghép nhóm",
      "guide": "Bấm nút \"3. Mức độ phân tán (Toán 12 Bài 9 & B10)\" trên mô phỏng để quan sát khoảng biến thiên R = a_k − a_1 và khoảng tứ phân vị Δ_Q = Q_3 − Q_1.",
      "questions": [
            {
                  "q": "Mẫu số liệu ghép nhóm gồm 5 nhóm: [20; 40), [40; 60), [60; 80), [80; 100), [100; 120). Khoảng biến thiên R của mẫu ghép nhóm này là:",
                  "opts": [
                        "R = 120 − 20 = 100",
                        "R = 100 − 40 = 60",
                        "R = 120 − 40 = 80",
                        "R = 50"
                  ],
                  "ans": 0,
                  "exp": "Theo công thức SGK Toán 12: Khoảng biến thiên của mẫu ghép nhóm bằng đầu mút phải của nhóm cuối cùng trừ đi đầu mút trái của nhóm đầu tiên: $R = a_k - a_1 = 120 - 20 = 100$."
            },
            {
                  "q": "Khoảng tứ phân vị Δ_Q = Q₃ − Q₁ của mẫu số liệu ghép nhóm có ý nghĩa thống kê quan trọng nào?",
                  "opts": [
                        "Đo độ phân tán của 50% số liệu chính giữa và không bị ảnh hưởng bởi các giá trị ngoại lai (quá lớn hoặc quá nhỏ)",
                        "Đo độ lệch tuyệt đối giữa giá trị lớn nhất và nhỏ nhất",
                        "Cho biết số lượng quan sát chính xác trong mẫu ghép nhóm",
                        "Đo mức độ sai số của phép đo số trung bình"
                  ],
                  "ans": 0,
                  "exp": "Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ chứa đúng 50% số liệu tập trung ở phần giữa của phân bố, do đó rất ổn định và không nhạy cảm với các điểm dị biệt (ngoại lai)."
            },
            {
                  "q": "Khi hai mẫu số liệu ghép nhóm có cùng khoảng biến thiên R = 100 nhưng mẫu A có Δ_Q = 15 còn mẫu B có Δ_Q = 35 thì kết luận nào đúng?",
                  "opts": [
                        "Mẫu A có số liệu tập trung chặt chẽ hơn quanh trung vị so với mẫu B",
                        "Mẫu B có số liệu tập trung chặt chẽ hơn so với mẫu A",
                        "Hai mẫu có độ phân tán hoàn toàn như nhau",
                        "Không thể so sánh được nếu chưa biết số trung bình"
                  ],
                  "ans": 0,
                  "exp": "Khoảng tứ phân vị càng nhỏ chứng tỏ 50% số liệu chính giữa càng dồn sát vào trung vị, tức mức độ phân tán của mẫu A thấp hơn (dữ liệu tập trung và đồng đều hơn mẫu B)."
            }
      ]
},
    'toan12-b10': {
      "subject": "math",
      "simType": "stats11",
      "simOptions": {
            "mode": "dispersion"
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 10",
      "title": "Thực hành Phương sai và Độ lệch chuẩn của mẫu số liệu ghép nhóm",
      "guide": "Quan sát các thẻ tính phương sai s² và độ lệch chuẩn s = √(s²) trên mô phỏng thống kê ghép nhóm để đánh giá mức độ biến động quanh số trung bình.",
      "questions": [
            {
                  "q": "Công thức tính phương sai s² của mẫu số liệu ghép nhóm với tần số mᵢ, giá trị đại diện cᵢ và số trung bình x̄ là:",
                  "opts": [
                        "s² = (1/n) · ∑ mᵢ(cᵢ − x̄)² = (1/n) · ∑ mᵢ cᵢ² − x̄²",
                        "s² = (1/n) · ∑ mᵢ(cᵢ − x̄)",
                        "s² = ∑ (cᵢ − x̄)²",
                        "s² = √( (1/n) · ∑ mᵢ cᵢ² )"
                  ],
                  "ans": 0,
                  "exp": "Theo SGK Toán 12: Phương sai mẫu ghép nhóm $s^2 = \\frac{1}{n} \\sum_{i=1}^k m_i (c_i - \\bar{x})^2 = \\frac{1}{n} \\sum_{i=1}^k m_i c_i^2 - \\bar{x}^2$."
            },
            {
                  "q": "Độ lệch chuẩn s = √(s²) có ưu điểm gì nổi bật hơn phương sai s² trong việc phân tích thực tế?",
                  "opts": [
                        "Độ lệch chuẩn có cùng đơn vị đo với số liệu ban đầu, giúp trực tiếp đánh giá độ lệch trung bình quanh x̄",
                        "Độ lệch chuẩn luôn luôn nhận giá trị nguyên",
                        "Độ lệch chuẩn không bao giờ phụ thuộc vào kích thước mẫu n",
                        "Độ lệch chuẩn luôn lớn hơn phương sai"
                  ],
                  "ans": 0,
                  "exp": "Vì phương sai có đơn vị là bình phương đơn vị số liệu (ví dụ phút²), nên khai căn bậc hai để thu được độ lệch chuẩn $s$ cùng đơn vị (phút), trực quan và dễ diễn giải trong đời sống."
            },
            {
                  "q": "Nếu điểm thi của một lớp có độ lệch chuẩn s = 0,8 điểm, còn lớp khác có s = 2,1 điểm (cùng điểm trung bình 7,5), nhận định nào sau đây là chuẩn xác?",
                  "opts": [
                        "Học lực lớp thứ nhất đồng đều hơn lớp thứ hai",
                        "Học lực lớp thứ hai đồng đều hơn lớp thứ nhất",
                        "Cả hai lớp học lực phân tán như nhau vì cùng điểm trung bình",
                        "Lớp thứ nhất có nhiều học sinh giỏi hơn lớp thứ hai"
                  ],
                  "opts_ans": 0,
                  "ans": 0,
                  "exp": "Độ lệch chuẩn càng nhỏ chứng tỏ các giá trị điểm số càng phân bố gần điểm trung bình, thể hiện mức độ đồng đều cao của tập thể lớp thứ nhất."
            }
      ]
},
    'toan12-b11': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "cubic",
            "showIntegral": true
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 11",
      "title": "Thực hành Khái niệm Nguyên hàm và Các tính chất cơ bản",
      "guide": "Bật ô \"Tô diện tích hình phẳng\" để đối chiếu mối liên hệ giữa hàm số f(x) = 3x² − 3 và họ các nguyên hàm F(x) = x³ − 3x + C.",
      "questions": [
            {
                  "q": "Hàm số F(x) được gọi là một nguyên hàm của hàm số f(x) trên khoảng K nếu thỏa mãn điều kiện nào?",
                  "opts": [
                        "F'(x) = f(x) với mọi x ∈ K",
                        "f'(x) = F(x) với mọi x ∈ K",
                        "F(x) = f''(x) với mọi x ∈ K",
                        "F(x) · f(x) = 1 với mọi x ∈ K"
                  ],
                  "ans": 0,
                  "exp": "Theo định nghĩa SGK Toán 12: Cho hàm số $f(x)$ xác định trên $K$. Hàm số $F(x)$ được gọi là một nguyên hàm của $f(x)$ trên $K$ nếu $F'(x) = f(x)$ với mọi $x \\in K$."
            },
            {
                  "q": "Họ tất cả các nguyên hàm của hàm số f(x) = 3x² − 3 trên ℝ là:",
                  "opts": [
                        "∫ (3x² − 3)dx = x³ − 3x + C",
                        "∫ (3x² − 3)dx = 6x + C",
                        "∫ (3x² − 3)dx = x³ − 3 + C",
                        "∫ (3x² − 3)dx = 3x³ − 3x + C"
                  ],
                  "ans": 0,
                  "exp": "Áp dụng công thức nguyên hàm cơ bản: $\\int 3x^2 dx = 3 \\cdot \\frac{x^3}{3} = x^3$, $\\int 3dx = 3x$. Do đó $\\int (3x^2 - 3)dx = x^3 - 3x + C$."
            },
            {
                  "q": "Khẳng định nào sau đây là sai về tính chất của nguyên hàm?",
                  "opts": [
                        "∫ [f(x) · g(x)]dx = ∫ f(x)dx · ∫ g(x)dx",
                        "∫ k·f(x)dx = k·∫ f(x)dx (với k ≠ 0 là hằng số)",
                        "∫ [f(x) + g(x)]dx = ∫ f(x)dx + ∫ g(x)dx",
                        "[∫ f(x)dx]' = f(x)"
                  ],
                  "ans": 0,
                  "exp": "Nguyên hàm của một tích KHÔNG bằng tích các nguyên hàm: $\\int [f(x)g(x)]dx \\ne \\int f(x)dx \\cdot \\int g(x)dx$. Để tính nguyên hàm của tích ta phải dùng phương pháp đổi biến số hoặc nguyên hàm từng phần."
            }
      ]
},
    'toan12-b12': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "cubic",
            "intA": -1,
            "intB": 2
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 12",
      "title": "Thực hành Định nghĩa Tích phân & Công thức Newton–Leibniz",
      "guide": "Kéo thanh trượt cận dưới a và cận trên b để quan sát giá trị tích phân đại số ∫ f(x)dx và đối chiếu với hiệu F(b) − F(a).",
      "questions": [
            {
                  "q": "Cho hàm số f(x) = 3x² − 3 có nguyên hàm F(x) = x³ − 3x. Giá trị của tích phân ∫_{-1}^{2} (3x² − 3)dx bằng:",
                  "opts": [
                        "0",
                        "2",
                        "4",
                        "−2"
                  ],
                  "ans": 0,
                  "exp": "Theo công thức Newton–Leibniz: $\\int_{-1}^2 (3x^2 - 3)dx = F(2) - F(-1) = (2^3 - 3\\cdot 2) - [(-1)^3 - 3(-1)] = (8 - 6) - (-1 + 3) = 2 - 2 = 0$."
            },
            {
                  "q": "Cho tích phân ∫₀² f(x)dx = 3 và ∫₂⁵ f(x)dx = 7. Theo tính chất chèn cận, tích phân ∫₀⁵ f(x)dx có giá trị là:",
                  "opts": [
                        "10",
                        "4",
                        "21",
                        "−4"
                  ],
                  "ans": 0,
                  "exp": "Tính chất chèn cận tích phân: $\\int_0^5 f(x)dx = \\int_0^2 f(x)dx + \\int_2^5 f(x)dx = 3 + 7 = 10$."
            },
            {
                  "q": "Đối với hàm số f(x) liên tục và không âm (f(x) ≥ 0) trên đoạn [a; b], ý nghĩa hình học của tích phân ∫_a^b f(x)dx là:",
                  "opts": [
                        "Bằng diện tích hình thang cong giới hạn bởi đồ thị y = f(x), trục Ox và hai đường thẳng x = a, x = b",
                        "Bằng thể tích khối tròn xoay khi quay đồ thị quanh trục Ox",
                        "Bằng độ dài cung cong y = f(x) từ a đến b",
                        "Bằng độ dốc tiếp tuyến tại điểm trung bình (a + b)/2"
                  ],
                  "ans": 0,
                  "exp": "Khi $f(x) \\ge 0$ trên $[a; b]$, tích phân $\\int_a^b f(x)dx$ chính là diện tích $S$ của hình phẳng giới hạn bởi đồ thị hàm số, trục hoành và hai đường thẳng $x = a, x = b$."
            }
      ]
},
    'toan12-b13': {
      "subject": "math",
      "simType": "calculus",
      "simOptions": {
            "family": "cubic",
            "intA": -1,
            "intB": 2
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 13",
      "title": "Thực hành Ứng dụng hình học của Tích phân — Diện tích & Thể tích tròn xoay",
      "guide": "Bật ô \"Tô diện tích hình phẳng ∫|f(x)|dx\" trên hàm số y = x³ − 3x, kéo thanh trượt cận a và b để so sánh diện tích phẳng S và thể tích tròn xoay V_Ox.",
      "questions": [
            {
                  "q": "Diện tích hình phẳng S giới hạn bởi đồ thị hàm số y = f(x), trục Ox và hai đường thẳng x = a, x = b (a < b) được tính bằng công thức:",
                  "opts": [
                        "S = ∫_a^b |f(x)|dx",
                        "S = ∫_a^b f(x)dx",
                        "S = π ∫_a^b [f(x)]² dx",
                        "S = |∫_a^b f(x)dx|"
                  ],
                  "ans": 0,
                  "exp": "Diện tích hình phẳng luôn không âm và bằng tích phân của giá trị tuyệt đối: $S = \\int_a^b |f(x)|dx$. Khi phần đồ thị nằm dưới trục $Ox$, $|f(x)| = -f(x)$ đảm bảo diện tích luôn dương."
            },
            {
                  "q": "Thể tích khối tròn xoay V sinh ra khi quay hình phẳng giới hạn bởi đồ thị y = f(x), trục Ox và hai đường x = a, x = b quanh trục Ox là:",
                  "opts": [
                        "V = π ∫_a^b [f(x)]² dx",
                        "V = ∫_a^b [f(x)]² dx",
                        "V = 2π ∫_a^b |f(x)|dx",
                        "V = π² ∫_a^b f(x)dx"
                  ],
                  "ans": 0,
                  "exp": "Công thức thể tích khối tròn xoay quay quanh trục $Ox$: $V = \\pi \\int_a^b [f(x)]^2 dx$. Mặt cắt vuông góc với $Ox$ tại $x$ là hình tròn bán kính $R = |f(x)|$, diện tích $S(x) = \\pi R^2 = \\pi [f(x)]^2$."
            },
            {
                  "q": "Diện tích hình phẳng giới hạn bởi hai đồ thị hàm số liên tục y = f₁(x) và y = f₂(x) trên đoạn [a; b] là:",
                  "opts": [
                        "S = ∫_a^b |f₁(x) − f₂(x)|dx",
                        "S = ∫_a^b [f₁(x) − f₂(x)]dx",
                        "S = π ∫_a^b [f₁²(x) − f₂²(x)]dx",
                        "S = |∫_a^b f₁(x)dx − ∫_a^b f₂(x)dx|"
                  ],
                  "ans": 0,
                  "exp": "Diện tích hình phẳng giữa hai đường cong bằng tích phân giá trị tuyệt đối hiệu của hai hàm số: $S = \\int_a^b |f_1(x) - f_2(x)|dx$."
            }
      ]
},
    'toan12-b14': {
      "subject": "math",
      "simType": "oxyz_analytic",
      "simOptions": {
            "R": 3.5,
            "cutZ": 1.5
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 14",
      "title": "Thực hành Phương trình Mặt phẳng trong không gian Oxyz",
      "guide": "Xoay 360° để quan sát mặt phẳng (α): z = h cắt mặt cầu và các trục tọa độ trong không gian Oxyz, phân tích vectơ pháp tuyến n⃗ = (A; B; C).",
      "questions": [
            {
                  "q": "Mặt phẳng đi qua điểm M₀(1; −2; 3) và nhận vectơ n⃗ = (2; −1; 4) làm vectơ pháp tuyến có phương trình tổng quát là:",
                  "opts": [
                        "2x − y + 4z − 16 = 0",
                        "2x − y + 4z + 16 = 0",
                        "x − 2y + 3z − 16 = 0",
                        "2x + y + 4z − 12 = 0"
                  ],
                  "ans": 0,
                  "exp": "Phương trình mặt phẳng: $A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\Leftrightarrow 2(x - 1) - 1(y + 2) + 4(z - 3) = 0 \\Leftrightarrow 2x - y + 4z - 2 - 2 - 12 = 0 \\Leftrightarrow 2x - y + 4z - 16 = 0$."
            },
            {
                  "q": "Phương trình mặt phẳng đi qua ba điểm A(2; 0; 0), B(0; −3; 0), C(0; 0; 4) theo đoạn chắn là:",
                  "opts": [
                        "x/2 + y/(−3) + z/4 = 1",
                        "x/2 + y/3 + z/4 = 1",
                        "2x − 3y + 4z = 1",
                        "x/2 − y/3 + z/4 = 0"
                  ],
                  "ans": 0,
                  "exp": "Theo công thức phương trình mặt phẳng theo đoạn chắn: $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1 \\Rightarrow \\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{4} = 1$."
            },
            {
                  "q": "Hai mặt phẳng (α): A₁x + B₁y + C₁z + D₁ = 0 và (β): A₂x + B₂y + C₂z + D₂ = 0 vuông góc với nhau khi và chỉ khi:",
                  "opts": [
                        "A₁A₂ + B₁B₂ + C₁C₂ = 0",
                        "A₁/A₂ = B₁/B₂ = C₁/C₂",
                        "A₁A₂ + B₁B₂ + C₁C₂ + D₁D₂ = 0",
                        "A₁B₂ − A₂B₁ = 0"
                  ],
                  "ans": 0,
                  "exp": "Hai mặt phẳng vuông góc khi và chỉ khi hai VTPT vuông góc: $\\vec{n}_1 \\perp \\vec{n}_2 \\Leftrightarrow \\vec{n}_1 \\cdot \\vec{n}_2 = A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$."
            }
      ]
},
    'toan12-b15': {
      "subject": "math",
      "simType": "oxyz_analytic",
      "simOptions": {
            "R": 3.5,
            "cutZ": 1.5
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 15",
      "title": "Thực hành Phương trình Đường thẳng trong không gian Oxyz",
      "guide": "Quan sát đường thẳng d đi qua điểm M₀ có VTCP u⃗ = (a; b; c), đối chiếu phương trình tham số và chính tắc trong không gian Oxyz.",
      "questions": [
            {
                  "q": "Đường thẳng d đi qua điểm M₀(x₀; y₀; z₀) và có vectơ chỉ phương u⃗ = (a; b; c) ≠ 0⃗ có phương trình tham số là:",
                  "opts": [
                        "{ x = x₀ + at; y = y₀ + bt; z = z₀ + ct } (t ∈ ℝ)",
                        "{ x = a + x₀t; y = b + y₀t; z = c + z₀t } (t ∈ ℝ)",
                        "ax + by + cz + d = 0",
                        "{ x = x₀t; y = y₀t; z = z₀t } (t ∈ ℝ)"
                  ],
                  "ans": 0,
                  "exp": "Theo SGK Toán 12, phương trình tham số của đường thẳng đi qua $M_0(x_0; y_0; z_0)$ với VTCP $\\vec{u} = (a; b; c)$ là $\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases}$ ($t \\in \\mathbb{R}$)."
            },
            {
                  "q": "Đường thẳng d đi qua điểm M(2; −1; 3) và có VTCP u⃗ = (3; 2; −4) có phương trình chính tắc là:",
                  "opts": [
                        "(x − 2)/3 = (y + 1)/2 = (z − 3)/(−4)",
                        "(x + 2)/3 = (y − 1)/2 = (z + 3)/(−4)",
                        "(x − 3)/2 = (y − 2)/(−1) = (z + 4)/3",
                        "(x − 2)/3 + (y + 1)/2 + (z − 3)/(−4) = 1"
                  ],
                  "ans": 0,
                  "exp": "Phương trình chính tắc của đường thẳng có dạng $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c} \\Rightarrow \\frac{x - 2}{3} = \\frac{y + 1}{2} = \\frac{z - 3}{-4}$."
            },
            {
                  "q": "Điều kiện để đường thẳng d có VTCP u⃗ song song với mặt phẳng (α) có VTPT n⃗ là:",
                  "opts": [
                        "u⃗ · n⃗ = 0 và d không nằm trong (α)",
                        "u⃗ và n⃗ cùng phương",
                        "u⃗ · n⃗ = 1",
                        "d cắt mặt phẳng (α) tại một điểm"
                  ],
                  "ans": 0,
                  "exp": "Đường thẳng song song với mặt phẳng khi VTCP của đường thẳng vuông góc với VTPT của mặt phẳng (tức $\\vec{u} \\cdot \\vec{n} = 0$) và đường thẳng không thuộc mặt phẳng."
            }
      ]
},
    'toan12-b16': {
      "subject": "math",
      "simType": "oxyz_analytic",
      "simOptions": {
            "R": 3.5,
            "cutZ": 1.5
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 16",
      "title": "Thực hành Công thức tính Góc và Khoảng cách trong Oxyz",
      "guide": "Thực hành tính góc giữa hai đường thẳng, góc giữa đường thẳng và mặt phẳng, góc giữa hai mặt phẳng và khoảng cách từ điểm đến mặt phẳng.",
      "questions": [
            {
                  "q": "Góc φ giữa đường thẳng d có VTCP u⃗ và mặt phẳng (α) có VTPT n⃗ được xác định bởi công thức:",
                  "opts": [
                        "sin φ = |u⃗ · n⃗| / (|u⃗| |n⃗|)",
                        "cos φ = |u⃗ · n⃗| / (|u⃗| |n⃗|)",
                        "tan φ = |u⃗ · n⃗| / (|u⃗| |n⃗|)",
                        "cos φ = (u⃗ · n⃗) / (|u⃗| |n⃗|)"
                  ],
                  "ans": 0,
                  "exp": "Vì góc giữa đường thẳng và mặt phẳng phụ với góc giữa VTCP $\\vec{u}$ và VTPT $\\vec{n}$, nên $\\sin \\varphi = |\\cos(\\vec{u}, \\vec{n})| = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}||\\vec{n}|}$."
            },
            {
                  "q": "Khoảng cách từ điểm M₀(1; 2; −1) đến mặt phẳng (α): 2x − 2y + z + 5 = 0 bằng:",
                  "opts": [
                        "2/3 (xấp xỉ 0,67)",
                        "4/3",
                        "2",
                        "4/9"
                  ],
                  "ans": 0,
                  "exp": "Công thức khoảng cách: $d(M_0, (\\alpha)) = \\frac{|A x_0 + B y_0 + C z_0 + D|}{\\sqrt{A^2 + B^2 + C^2}} = \\frac{|2(1) - 2(2) + 1(-1) + 5|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|2 - 4 - 1 + 5|}{\\sqrt{9}} = \\frac{2}{3}$."
            },
            {
                  "q": "Góc giữa hai mặt phẳng (α) và (β) có các vectơ pháp tuyến n⃗₁ = (1; 1; 0) và n⃗₂ = (0; 1; 1) bằng bao nhiêu?",
                  "opts": [
                        "60°",
                        "30°",
                        "45°",
                        "90°"
                  ],
                  "ans": 0,
                  "exp": "$\\cos((P), (Q)) = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1||\\vec{n}_2|} = \\frac{|1(0) + 1(1) + 0(1)|}{\\sqrt{1^2+1^2+0^2}\\sqrt{0^2+1^2+1^2}} = \\frac{1}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2} \\Rightarrow$ Góc giữa hai mặt phẳng là $60^\\circ$."
            }
      ]
},
    'toan12-b17': {
      "subject": "math",
      "simType": "oxyz_analytic",
      "simOptions": {
            "R": 3.5,
            "cutZ": 1.5
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 17",
      "title": "Thực hành Phương trình Mặt cầu & Vị trí tương đối với Mặt phẳng trong Oxyz",
      "guide": "Xoay 360° mặt cầu (S): x² + y² + z² = R² và kéo thanh trượt độ cao mặt phẳng cắt (α): z = h để khảo sát khoảng cách d(O, (α)) và bán kính đường tròn giao tuyến r = √(R² − d²).",
      "questions": [
            {
                  "q": "Mặt phẳng (α): z = 1,5 cắt mặt cầu (S): x² + y² + z² = 3,5² theo giao tuyến là đường tròn có bán kính r bằng:",
                  "opts": [
                        "r = √(3,5² − 1,5²) = √10 ≈ 3,16",
                        "r = 3,5 − 1,5 = 2,0",
                        "r = √(3,5² + 1,5²) = √14,5 ≈ 3,81",
                        "r = 1,5"
                  ],
                  "ans": 0,
                  "exp": "Khoảng cách từ tâm $O(0;0;0)$ đến mặt phẳng $(\\alpha): z = 1,5$ là $d = 1,5 < R = 3,5$. Mặt phẳng cắt mặt cầu theo đường tròn giao tuyến có bán kính $r = \\sqrt{R^2 - d^2} = \\sqrt{12,25 - 2,25} = \\sqrt{10} \\approx 3,16$."
            },
            {
                  "q": "Tâm I và bán kính R của mặt cầu (S): (x − 2)² + (y + 1)² + (z − 4)² = 25 là:",
                  "opts": [
                        "I(2; −1; 4) và R = 5",
                        "I(−2; 1; −4) và R = 5",
                        "I(2; −1; 4) và R = 25",
                        "I(−2; 1; −4) và R = 25"
                  ],
                  "ans": 0,
                  "exp": "Phương trình $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$ có tâm $I(a; b; c) = (2; -1; 4)$ và bán kính $R = \\sqrt{25} = 5$."
            },
            {
                  "q": "Điều kiện cần và đủ để phương trình x² + y² + z² − 2ax − 2by − 2cz + d = 0 là phương trình của một mặt cầu là:",
                  "opts": [
                        "a² + b² + c² − d > 0",
                        "a² + b² + c² − d ≥ 0",
                        "a² + b² + c² + d > 0",
                        "a + b + c − d > 0"
                  ],
                  "ans": 0,
                  "exp": "Phương trình tương đương $(x-a)^2 + (y-b)^2 + (z-c)^2 = a^2 + b^2 + c^2 - d$. Để là mặt cầu thì bán kính $R^2 = a^2 + b^2 + c^2 - d > 0$."
            }
      ]
},
    'toan12-b18': {
      "subject": "math",
      "simType": "bayes",
      "simOptions": {
            "pA": 0.2,
            "pB_A": 0.9,
            "pB_notA": 0.1
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 18",
      "title": "Thực hành Xác suất có điều kiện & Quy tắc nhân xác suất",
      "guide": "Điều chỉnh thanh trượt P(A), P(B|A) và P(B|Ā) trên sơ đồ hình cây để kiểm chứng công thức nhân xác suất và điều kiện độc lập của hai biến cố.",
      "questions": [
            {
                  "q": "Xác suất của biến cố B với điều kiện biến cố A đã xảy ra (với P(A) > 0) được định nghĩa bởi công thức:",
                  "opts": [
                        "P(B|A) = P(AB) / P(A)",
                        "P(B|A) = P(AB) / P(B)",
                        "P(B|A) = P(A) · P(B)",
                        "P(B|A) = P(A) + P(B) − P(AB)"
                  ],
                  "ans": 0,
                  "exp": "Theo định nghĩa SGK Toán 12: Xác suất có điều kiện $P(B|A) = \\frac{P(AB)}{P(A)}$ với $P(A) > 0$."
            },
            {
                  "q": "Cho P(A) = 0,4 và xác suất có điều kiện P(B|A) = 0,5. Xác suất của biến cố giao AB là:",
                  "opts": [
                        "P(AB) = 0,20",
                        "P(AB) = 0,90",
                        "P(AB) = 0,10",
                        "P(AB) = 0,80"
                  ],
                  "ans": 0,
                  "exp": "Quy tắc nhân xác suất: $P(AB) = P(A) \\cdot P(B|A) = 0,4 \\times 0,5 = 0,20$."
            },
            {
                  "q": "Khi hai biến cố A và B độc lập với nhau (P(A) > 0, P(B) > 0) thì khẳng định nào sau đây luôn đúng?",
                  "opts": [
                        "P(B|A) = P(B) và P(AB) = P(A) · P(B)",
                        "P(B|A) = P(A)",
                        "P(AB) = 0",
                        "P(A ∪ B) = 1"
                  ],
                  "ans": 0,
                  "exp": "Hai biến cố độc lập nghĩa là việc xảy ra hay không xảy ra của biến cố này không ảnh hưởng đến xác suất xảy ra của biến cố kia, do đó $P(B|A) = P(B)$ và $P(AB) = P(A)P(B)$."
            }
      ]
},
    'toan12-b19': {
      "subject": "math",
      "simType": "bayes",
      "simOptions": {
            "pA": 0.2,
            "pB_A": 0.9,
            "pB_notA": 0.1
      },
      "labUrl": "math_lab.html",
      "badge": "Toán 12 • Bài 19",
      "title": "Thực hành Công thức Xác suất toàn phần & Định lí Bayes",
      "guide": "Sử dụng sơ đồ cây 2 tầng để phân tích xác suất toàn phần P(B) = P(A)P(B|A) + P(Ā)P(B|Ā) và xác suất hậu nghiệm Bayes P(A|B).",
      "questions": [
            {
                  "q": "Cho biến cố A và biến cố đối Ā tạo thành hệ đầy đủ. Công thức xác suất toàn phần tính P(B) là:",
                  "opts": [
                        "P(B) = P(A)P(B|A) + P(Ā)P(B|Ā)",
                        "P(B) = P(A) + P(Ā) − P(AB)",
                        "P(B) = P(B|A) + P(B|Ā)",
                        "P(B) = P(A) · P(B|A)"
                  ],
                  "ans": 0,
                  "exp": "Theo công thức xác suất toàn phần SGK Toán 12: $P(B) = P(AB) + P(\\bar{A}B) = P(A)P(B|A) + P(\\bar{A})P(B|\\bar{A})$."
            },
            {
                  "q": "Với P(A) = 0,20, P(B|A) = 0,90 và P(B|Ā) = 0,10. Xác suất toàn phần P(B) và xác suất hậu nghiệm Bayes P(A|B) có giá trị lần lượt là:",
                  "opts": [
                        "P(B) = 0,26 và P(A|B) = 0,18 / 0,26 ≈ 69,23%",
                        "P(B) = 0,50 và P(A|B) = 0,20",
                        "P(B) = 0,20 và P(A|B) = 0,90",
                        "P(B) = 0,35 và P(A|B) = 0,55"
                  ],
                  "ans": 0,
                  "exp": "$P(\\bar{A}) = 1 - 0,20 = 0,80$. $P(B) = 0,20(0,90) + 0,80(0,10) = 0,18 + 0,08 = 0,26$. Theo công thức Bayes: $P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0,18}{0,26} \\approx 69,23\\%$."
            },
            {
                  "q": "Ứng dụng thực tiễn điển hình nhất của công thức Bayes trong y tế và công nghệ là gì?",
                  "opts": [
                        "Đánh giá xác suất mắc bệnh thực sự (P(A|B)) khi bệnh nhân có kết quả xét nghiệm dương tính (B)",
                        "Tính số lượng bệnh nhân tối đa bệnh viện có thể tiếp nhận",
                        "Đo nhiệt độ cơ thể bệnh nhân trung bình",
                        "Tính chi phí thuốc điều trị cho từng cá nhân"
                  ],
                  "ans": 0,
                  "exp": "Công thức Bayes cho phép cập nhật xác suất tiền nghiệm $P(A)$ (tỉ lệ nhiễm bệnh trong cộng đồng) thành xác suất hậu nghiệm $P(A|B)$ (xác suất thực sự mắc bệnh sau khi có kết quả xét nghiệm dương tính $B$), là nền tảng của sàng lọc y khoa và máy học AI."
            }
      ]
},
    'vatly10-b1': {
      "subject": "physics",
      "simType": "measurement",
      "simOptions": {},
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 1",
      "title": "Thực hành Làm quen với Vật lí & Phương pháp thực nghiệm",
      "guide": "Sử dụng mô hình thước cặp và dụng cụ đo để tìm hiểu phương pháp thực nghiệm và phương pháp mô hình hóa trong nghiên cứu Vật lí.",
      "questions": [
            {
                  "q": "Đối tượng nghiên cứu chính của Vật lí học là gì?",
                  "opts": [
                        "Các dạng vận động của vật chất (chất và trường) cùng năng lượng trong tự nhiên",
                        "Sự biến đổi của các chất tạo thành chất mới",
                        "Cấu tạo và sự phát triển của các cơ thể sinh vật",
                        "Quy luật phát triển của xã hội loài người"
                  ],
                  "ans": 0,
                  "exp": "Theo SGK Vật lí 10, đối tượng nghiên cứu của Vật lí là các dạng vận động của vật chất và năng lượng trong tự nhiên, từ phạm vi hạ nguyên tử đến toàn bộ vũ trụ."
            },
            {
                  "q": "Hai phương pháp nghiên cứu cốt lõi được sử dụng trong sự phát triển của Vật lí học là:",
                  "opts": [
                        "Phương pháp thực nghiệm và phương pháp mô hình",
                        "Phương pháp quan sát thụ động và ghi chép",
                        "Phương pháp phỏng vấn chuyên gia và khảo sát xã hội",
                        "Phương pháp lập trình trí tuệ nhân tạo"
                  ],
                  "ans": 0,
                  "exp": "Sự phát triển của Vật lí học dựa trên hai phương pháp chủ yếu: Phương pháp thực nghiệm (dùng thí nghiệm kiểm chứng giả thuyết) và Phương pháp mô hình (xây dựng mô hình vật chất, mô hình toán học để suy luận)."
            },
            {
                  "q": "Khi một giả thuyết vật lí đưa ra dự đoán mâu thuẫn với kết quả của các thí nghiệm kiểm chứng lặp lại độc lập, ta phải làm gì?",
                  "opts": [
                        "Bác bỏ hoặc chỉnh sửa giả thuyết ban đầu cho phù hợp với thực nghiệm",
                        "Bỏ qua kết quả thí nghiệm và giữ nguyên giả thuyết",
                        "Chỉ chấp nhận giả thuyết nếu được nhiều người tán thành",
                        "Thay đổi số liệu thực nghiệm để khớp với giả thuyết"
                  ],
                  "ans": 0,
                  "exp": "Thực nghiệm là tiêu chuẩn chân lý của Vật lí học; nếu dự đoán lý thuyết mâu thuẫn với thực nghiệm chính xác thì bắt buộc phải sửa đổi hoặc bác bỏ giả thuyết đó."
            }
      ]
},
    'vatly10-b2': {
      "subject": "physics",
      "simType": "measurement",
      "simOptions": {},
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 2",
      "title": "Thực hành Các quy tắc an toàn trong phòng thực hành Vật lí",
      "guide": "Tìm hiểu các biển cảnh báo nguy hiểm điện, quang học, nhiệt và tuân thủ các quy tắc an toàn trước khi vận hành thí nghiệm.",
      "questions": [
            {
                  "q": "Biển báo có hình tia chớp tam giác viền vàng cảnh báo điều gì trong phòng thực hành Vật lí?",
                  "opts": [
                        "Nguy hiểm điện giật (điện áp cao)",
                        "Nguy cơ cháy nổ hóa chất",
                        "Bức xạ laser gây hại mắt",
                        "Nhiệt độ cao gây bỏng"
                  ],
                  "ans": 0,
                  "exp": "Ký hiệu tia sét trong hình tam giác là biển cảnh báo nguy hiểm điện áp cao, yêu cầu học sinh không tự ý chạm vào dây dẫn trần hoặc bật nguồn khi chưa có lệnh của giáo viên."
            },
            {
                  "q": "Thao tác nào sau đây là đúng quy tắc an toàn khi sử dụng các thiết bị điện trong phòng thí nghiệm?",
                  "opts": [
                        "Ngắt nguồn điện chính trước khi cắm hoặc tháo lắp các linh kiện mạch điện",
                        "Chạm tay ướt vào công tắc điện để làm mát",
                        "Tự ý tăng điện áp máy biến thế lên mức tối đa để thí nghiệm nhanh hơn",
                        "Dùng dây dẫn có vỏ bọc bị hở"
                  ],
                  "ans": 0,
                  "exp": "Để đảm bảo an toàn tuyệt đối tránh điện giật và ngắn mạch, luôn phải ngắt nguồn điện trước khi thay đổi cấu trúc mạch hoặc chạm vào linh kiện dẫn điện."
            },
            {
                  "q": "Khi tiến hành thí nghiệm quang học sử dụng nguồn sáng phát tia laser, điều cấm kỵ nhất là gì?",
                  "opts": [
                        "Nhìn trực tiếp vào chùm tia laser hoặc chiếu tia laser vào mắt người khác",
                        "Đặt nguồn laser trên bàn phẳng",
                        "Bật công tắc nguồn laser trong phòng tối",
                        "Chiếu tia laser qua lăng kính thủy tinh"
                  ],
                  "ans": 0,
                  "exp": "Tia laser có mật độ năng lượng rất cao tại tiêu điểm, nếu chiếu thẳng vào mắt sẽ phá hủy võng mạc gây mù vĩnh viễn trong tích tắc."
            }
      ]
},
    'vatly10-b3': {
      "subject": "physics",
      "simType": "measurement",
      "simOptions": {},
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 3",
      "title": "Thực hành Tính sai số trong phép đo và Ghi kết quả đo",
      "guide": "Kéo mỏ kẹp thước cặp để đọc số đo trên thước chính và du xích (ĐCNN 0,05 mm), bấm nút \"Ghi lần đo\" để tính sai số và viết kết quả chuẩn SI.",
      "questions": [
            {
                  "q": "Trên thước cặp có ĐCNN là 0,05 mm, vạch số 0 của du xích nằm qua vạch 32 mm của thước chính và vạch thứ 9 của du xích trùng với một vạch thước chính. Giá trị đo là:",
                  "opts": [
                        "32 + 9 × 0,05 = 32,45 mm",
                        "32 + 9 = 41,00 mm",
                        "32,90 mm",
                        "32,05 mm"
                  ],
                  "ans": 0,
                  "exp": "Quy tắc đọc thước cặp: $L = L_0 + n \\times \\text{ĐCNN} = 32 + 9 \\times 0,05 = 32 + 0,45 = 32,45\\text{ mm}$."
            },
            {
                  "q": "Sai số tuyệt đối toàn phần ΔA của một đại lượng đo gián tiếp hoặc trực tiếp được tính bằng tổng của hai thành phần nào?",
                  "opts": [
                        "Sai số ngẫu nhiên trung bình (ΔĀ) và sai số dụng cụ (ΔA_dc)",
                        "Sai số tỉ đối và sai số hệ thống",
                        "Giá trị lớn nhất trừ đi giá trị nhỏ nhất",
                        "Tích của giá trị trung bình với sai số tỉ đối"
                  ],
                  "ans": 0,
                  "exp": "Theo chuẩn SGK Vật lí 10: $\\Delta A = \\overline{\\Delta A} + \\Delta A_{dc}$ (với $\\overline{\\Delta A}$ là sai số ngẫu nhiên trung bình qua các lần đo, $\\Delta A_{dc}$ thường lấy bằng nửa độ chia nhỏ nhất hoặc một độ chia nhỏ nhất)."
            },
            {
                  "q": "Kết quả đo chiều dài của một vật được viết dưới dạng L = 32,45 ± 0,08 (mm). Sai số tỉ đối δ của phép đo này bằng bao nhiêu?",
                  "opts": [
                        "δ = (0,08 / 32,45) × 100% ≈ 0,25%",
                        "δ = (32,45 / 0,08) × 100% ≈ 405%",
                        "δ = 0,08%",
                        "δ = 0,08 mm"
                  ],
                  "ans": 0,
                  "exp": "Sai số tỉ đối: $\\delta = \\frac{\\Delta L}{\\bar{L}} \\times 100\\% = \\frac{0,08}{32,45} \\times 100\\% \\approx 0,25\\%$."
            }
      ]
},
    'vatly10-b4': {
      "subject": "physics",
      "simType": "kinematics",
      "simOptions": {
            "mode": "linear",
            "v0": 5,
            "a": 0
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 4",
      "title": "Thực hành Độ dịch chuyển và Quãng đường đi được",
      "guide": "Quan sát chuyển động của xe trên quỹ đạo thẳng, phân biệt giữa quãng đường s (luôn dương) và độ dịch chuyển d (đại lượng vectơ có thể âm, dương hoặc bằng 0).",
      "questions": [
            {
                  "q": "Phát biểu nào sau đây phân biệt chính xác nhất giữa quãng đường đi được s và độ dịch chuyển d?",
                  "opts": [
                        "Quãng đường s là độ dài quỹ đạo chuyển động (vô hướng, s ≥ 0); độ dịch chuyển d là vectơ nối vị trí đầu và vị trí cuối (có thể âm, dương hoặc bằng 0)",
                        "Quãng đường và độ dịch chuyển luôn bằng nhau trong mọi trường hợp",
                        "Độ dịch chuyển luôn lớn hơn hoặc bằng quãng đường",
                        "Độ dịch chuyển không có hướng"
                  ],
                  "ans": 0,
                  "exp": "Quãng đường $s$ là độ dài thực tế của quỹ đạo (vô hướng, không âm). Độ dịch chuyển $\\vec{d}$ là vectơ nối vị trí đầu và cuối, có độ lớn $|d| \\le s$; dấu của $d$ phụ thuộc chiều dương đã chọn."
            },
            {
                  "q": "Một học sinh bơi từ đầu bể bơi đến cuối bể bơi dài 50 m rồi bơi ngược lại về vị trí xuất phát. Quãng đường bơi được s và độ dịch chuyển d là:",
                  "opts": [
                        "s = 100 m; d = 0 m",
                        "s = 50 m; d = 50 m",
                        "s = 100 m; d = 100 m",
                        "s = 0 m; d = 0 m"
                  ],
                  "ans": 0,
                  "exp": "Quãng đường tổng cộng $s = 50 + 50 = 100\\text{ m}$. Vì vị trí cuối trùng vị trí đầu nên độ dịch chuyển $\\vec{d} = \\vec{0} \\Rightarrow d = 0\\text{ m}$."
            },
            {
                  "q": "Trong trường hợp nào thì quãng đường đi được s bằng với độ lớn của độ dịch chuyển |d|?",
                  "opts": [
                        "Vật chuyển động thẳng và không đổi chiều chuyển động",
                        "Vật chuyển động tròn đều",
                        "Vật chuyển động thẳng rồi quay đầu ngược lại",
                        "Vật chuyển động zíc zắc"
                  ],
                  "ans": 0,
                  "exp": "Chỉ khi vật chuyển động thẳng và không đổi chiều thì $s = |d|$. Nếu đổi chiều hoặc chuyển động cong thì luôn có $s > |d|$."
            }
      ]
},
    'vatly10-b5': {
      "subject": "physics",
      "simType": "kinematics",
      "simOptions": {
            "mode": "linear",
            "v0": 8,
            "a": 0
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 5",
      "title": "Thực hành Tốc độ và Vận tốc trong chuyển động",
      "guide": "Thay đổi vận tốc đầu v₀ dương hoặc âm để đối chiếu giữa tốc độ (độ lớn |v|) và vectơ vận tốc v⃗ chỉ rõ phương chiều chuyển động.",
      "questions": [
            {
                  "q": "Sự khác biệt căn bản giữa tốc độ (speed) và vận tốc (velocity) trong Vật lí là gì?",
                  "opts": [
                        "Tốc độ là đại lượng vô hướng đặc trưng cho sự nhanh chậm (v_tb = s/t); vận tốc là đại lượng vectơ đặc trưng cho cả tốc độ và hướng chuyển động (v⃗_tb = d⃗/t)",
                        "Tốc độ có hướng còn vận tốc không có hướng",
                        "Tốc độ luôn nhỏ hơn vận tốc",
                        "Hai khái niệm hoàn toàn đồng nhất và thay thế được cho nhau"
                  ],
                  "ans": 0,
                  "exp": "Tốc độ là đại lượng vô hướng không âm $v = s/t$. Vận tốc là đại lượng vectơ $\\vec{v} = \\frac{\\vec{d}}{t}$, giá trị đại số có thể âm khi chuyển động ngược chiều dương."
            },
            {
                  "q": "Đồng hồ tốc độ (tốc kế - speedometer) gắn trên xe máy hoặc ô tô hiển thị đại lượng nào?",
                  "opts": [
                        "Tốc độ tức thời của xe tại thời điểm quan sát",
                        "Vận tốc trung bình trong cả chuyến đi",
                        "Độ dịch chuyển của xe",
                        "Gia tốc của xe"
                  ],
                  "ans": 0,
                  "exp": "Tốc kế đo độ lớn của vận tốc tức thời tại đúng thời điểm xe đang chạy, không cho biết hướng chuyển động."
            },
            {
                  "q": "Một ô tô chạy thẳng trên đường với tốc độ 72 km/h. Vận tốc này đổi sang đơn vị SI chuẩn (m/s) là:",
                  "opts": [
                        "20 m/s",
                        "25,9 m/s",
                        "200 m/s",
                        "7,2 m/s"
                  ],
                  "ans": 0,
                  "exp": "$72\\text{ km/h} = \\frac{72 \\times 1000\\text{ m}}{3600\\text{ s}} = \\frac{72}{3,6} = 20\\text{ m/s}$."
            }
      ]
},
    'vatly10-b6': {
      "subject": "physics",
      "simType": "kinematics",
      "simOptions": {
            "mode": "photogate",
            "v0": 4,
            "a": 1.5
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 6",
      "title": "Thực hành Đo tốc độ của vật chuyển động với Cổng quang điện",
      "guide": "Xe mang tấm chắn sáng d = 0,05 m đi qua hai cổng quang điện A và B nối đồng hồ hiện số để đo thời gian chắn sáng và tính tốc độ tức thời.",
      "questions": [
            {
                  "q": "Một tấm chắn sáng rộng d = 20 mm gắn trên xe đi qua cổng quang điện làm đồng hồ hiện số ghi nhận thời gian chắn sáng Δt = 0,04 s. Tốc độ tức thời của xe qua cổng là:",
                  "opts": [
                        "v = d / Δt = 0,02 m / 0,04 s = 0,5 m/s",
                        "v = 20 / 0,04 = 500 m/s",
                        "v = 0,04 / 0,02 = 2 m/s",
                        "v = 0,08 m/s"
                  ],
                  "ans": 0,
                  "exp": "Đổi $d = 20\\text{ mm} = 0,02\\text{ m}$. Tốc độ qua cổng: $v = \\frac{d}{\\Delta t} = \\frac{0,02}{0,04} = 0,5\\text{ m/s}$."
            },
            {
                  "q": "Tại sao việc đo tốc độ bằng cổng quang điện kết hợp tấm chắn sáng mỏng lại cho giá trị xấp xỉ chính xác vận tốc tức thời?",
                  "opts": [
                        "Vì khoảng thời gian chắn sáng Δt rất ngắn, tốc độ trung bình trong khoảng thời gian rất nhỏ xấp xỉ bằng tốc độ tức thời",
                        "Vì cổng quang điện làm xe chạy nhanh hơn",
                        "Vì cảm biến quang loại bỏ được lực ma sát",
                        "Vì đồng hồ đo chỉ chạy khi xe dừng lại"
                  ],
                  "ans": 0,
                  "exp": "Theo định nghĩa, vận tốc tức thời là giới hạn của vận tốc trung bình khi $\\Delta t \\to 0$. Tấm chắn sáng càng mỏng thì $\\Delta t$ càng nhỏ, giá trị đo được càng sát vận tốc tức thời."
            },
            {
                  "q": "Nếu khoảng cách giữa cổng A và cổng B là s = 0,5 m và thời gian xe đi từ cổng A đến B là t = 1,0 s, tốc độ trung bình trên đoạn AB là:",
                  "opts": [
                        "v_tb = s / t = 0,5 m/s",
                        "v_tb = 2,0 m/s",
                        "v_tb = 1,5 m/s",
                        "v_tb = 0,25 m/s"
                  ],
                  "ans": 0,
                  "exp": "$v_{tb} = \\frac{s}{t} = \\frac{0,5}{1,0} = 0,5\\text{ m/s}$."
            }
      ]
},
    'vatly10-b7': {
      "subject": "physics",
      "simType": "kinematics",
      "simOptions": {
            "mode": "linear",
            "v0": 6,
            "a": 0
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 7",
      "title": "Thực hành Đồ thị độ dịch chuyển – thời gian (d – t)",
      "guide": "Quan sát đồ thị d − t, nhận biết hệ số góc của đường thẳng chính là vận tốc v = Δd / Δt và phân tích các giai đoạn chuyển động.",
      "questions": [
            {
                  "q": "Hệ số góc (độ dốc slope = Δd / Δt) của đường thẳng trên đồ thị độ dịch chuyển − thời gian (d − t) biểu thị đại lượng vật lí nào?",
                  "opts": [
                        "Vận tốc chuyển động của vật (v)",
                        "Gia tốc của vật",
                        "Quãng đường đi được",
                        "Lực tác dụng lên vật"
                  ],
                  "ans": 0,
                  "exp": "Trên đồ thị $d - t$, độ dốc $\\frac{\\Delta d}{\\Delta t} = \\tan\\alpha = v$, chính là giá trị vận tốc của vật."
            },
            {
                  "q": "Đoạn đồ thị d − t là một đoạn thẳng nằm ngang song song với trục thời gian Ot cho biết vật đang ở trạng thái nào?",
                  "opts": [
                        "Vật đang đứng yên (độ dịch chuyển không đổi, v = 0)",
                        "Vật chuyển động thẳng đều với vận tốc rất lớn",
                        "Vật đang chuyển động nhanh dần đều",
                        "Vật đang rơi tự do"
                  ],
                  "ans": 0,
                  "exp": "Đoạn thẳng nằm ngang nghĩa là $d$ không đổi theo thời gian $t$, $\\Delta d = 0 \\Rightarrow v = 0$, vật đứng yên tại vị trí đó."
            },
            {
                  "q": "Nếu đồ thị d − t là một đường thẳng dốc xuống từ trái sang phải, điều này khẳng định:",
                  "opts": [
                        "Vật đang chuyển động thẳng đều theo chiều âm của trục tọa độ (v < 0)",
                        "Vật đang chuyển động chậm dần đều",
                        "Vật đang chuyển động nhanh dần đều",
                        "Gia tốc của vật là số dương"
                  ],
                  "ans": 0,
                  "exp": "Đồ thị dốc xuống nghĩa là $\\Delta d < 0$ khi $\\Delta t > 0$, do đó $v = \\frac{\\Delta d}{\\Delta t} < 0$, vật chuyển động thẳng đều ngược chiều dương."
            }
      ]
},
    'vatly10-b8': {
      "subject": "physics",
      "simType": "kinematics",
      "simOptions": {
            "mode": "linear",
            "v0": 2,
            "a": 3
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 8",
      "title": "Thực hành Chuyển động biến đổi & Vectơ Gia tốc",
      "guide": "Kéo thanh trượt gia tốc a dương hoặc âm để quan sát vectơ gia tốc a⃗ (vàng) và vectơ vận tốc v⃗ (xanh lá) cùng chiều hay ngược chiều.",
      "questions": [
            {
                  "q": "Gia tốc là đại lượng vật lí đặc trưng cho yếu tố nào của chuyển động?",
                  "opts": [
                        "Tốc độ thay đổi của vận tốc theo thời gian (a⃗ = Δv⃗ / Δt)",
                        "Độ nhanh chậm của chuyển động",
                        "Độ dài quãng đường vật đi được trong 1 giây",
                        "Mức độ cản trở chuyển động của môi trường"
                  ],
                  "ans": 0,
                  "exp": "Gia tốc đặc trưng cho sự biến thiên nhanh hay chậm của vận tốc cả về độ lớn lẫn phương chiều: $\\vec{a} = \\frac{\\Delta\\vec{v}}{\\Delta t}$, đơn vị $\\text{m/s}^2$."
            },
            {
                  "q": "Trong chuyển động thẳng, khi tích số a · v > 0 (vectơ gia tốc a⃗ cùng hướng với vectơ vận tốc v⃗), chuyển động đó là:",
                  "opts": [
                        "Chuyển động thẳng nhanh dần (tốc độ |v| tăng theo thời gian)",
                        "Chuyển động thẳng chậm dần",
                        "Chuyển động thẳng đều",
                        "Vật đứng yên"
                  ],
                  "ans": 0,
                  "exp": "Khi $\\vec{a} \\uparrow\\uparrow \\vec{v} \\Leftrightarrow a \\cdot v > 0$, gia tốc làm tăng độ lớn của vận tốc, chuyển động là nhanh dần."
            },
            {
                  "q": "Một chiếc ô tô đang chạy với vận tốc 15 m/s thì hãm phanh chuyển động chậm dần với gia tốc a = −3 m/s². Sau bao lâu thì ô tô dừng hẳn?",
                  "opts": [
                        "t = (0 − 15) / (−3) = 5 giây",
                        "t = 3 giây",
                        "t = 45 giây",
                        "t = 0,2 giây"
                  ],
                  "ans": 0,
                  "exp": "Khi dừng hẳn $v = 0$. Áp dụng $v = v_0 + at \\Rightarrow 0 = 15 + (-3)t \\Rightarrow t = 5\\text{ s}$."
            }
      ]
},
    'vatly10-b9': {
      "subject": "physics",
      "simType": "kinematics",
      "simOptions": {
            "mode": "linear",
            "v0": 4,
            "a": 2
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 9",
      "title": "Thực hành Chuyển động thẳng biến đổi đều & Đồ thị v – t",
      "guide": "Khảo sát các công thức v = v₀ + at, d = v₀t + ½at², hệ thức liên hệ v² − v₀² = 2ad và diện tích hình thang cong dưới đồ thị v − t.",
      "questions": [
            {
                  "q": "Trong chuyển động thẳng biến đổi đều, diện tích hình phẳng giới hạn bởi đồ thị vận tốc − thời gian (v − t), trục hoành và hai thời điểm t₁, t₂ biểu thị:",
                  "opts": [
                        "Độ dịch chuyển d của vật trong khoảng thời gian đó",
                        "Gia tốc của vật",
                        "Lực tác dụng lên vật",
                        "Công suất phát động"
                  ],
                  "ans": 0,
                  "exp": "Diện tích hình thang dưới đồ thị $v - t$ chính là tích phân $\\int_{t_1}^{t_2} v(t)dt = d$, tức độ dịch chuyển của vật."
            },
            {
                  "q": "Một đoàn tàu bắt đầu rời ga chuyển động thẳng nhanh dần đều với gia tốc a = 0,5 m/s². Vận tốc của tàu sau khi đi được quãng đường 100 m là:",
                  "opts": [
                        "v = √(2ad) = √(2 × 0,5 × 100) = 10 m/s",
                        "v = 5 m/s",
                        "v = 20 m/s",
                        "v = 100 m/s"
                  ],
                  "ans": 0,
                  "exp": "Tàu bắt đầu rời ga nên $v_0 = 0$. Sử dụng công thức độc lập thời gian: $v^2 - v_0^2 = 2ad \\Rightarrow v = \\sqrt{2 \\times 0,5 \\times 100} = 10\\text{ m/s}$."
            },
            {
                  "q": "Phương trình độ dịch chuyển của một vật là d = 4t + 2t² (d tính bằng m, t tính bằng s). Vận tốc ban đầu v₀ và gia tốc a của vật là:",
                  "opts": [
                        "v₀ = 4 m/s và a = 4 m/s²",
                        "v₀ = 4 m/s và a = 2 m/s²",
                        "v₀ = 2 m/s và a = 4 m/s²",
                        "v₀ = 0 và a = 4 m/s²"
                  ],
                  "ans": 0,
                  "exp": "So sánh với $d = v_0 t + \\frac{1}{2}at^2$, ta có $v_0 = 4\\text{ m/s}$ và $\\frac{1}{2}a = 2 \\Rightarrow a = 4\\text{ m/s}^2$."
            }
      ]
},
    'vatly10-b10': {
      "subject": "physics",
      "simType": "kinematics",
      "simOptions": {
            "mode": "freefall",
            "h0": 20,
            "g": 9.8
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 10",
      "title": "Thực hành Sự rơi tự do & Ống chân không Newton",
      "guide": "Thả rơi vật từ độ cao h₀ = 20 m, quan sát sự rơi nhanh dần đều với gia tốc g = 9,8 m/s² độc lập với khối lượng vật khi bỏ qua sức cản không khí.",
      "questions": [
            {
                  "q": "Sự rơi tự do là gì theo định nghĩa Vật lí chuẩn?",
                  "opts": [
                        "Sự rơi của các vật chỉ chịu tác dụng duy nhất của trọng lực",
                        "Sự rơi của vật nặng hơn không khí trong mọi điều kiện",
                        "Chuyển động của vật rơi khi có gió thổi",
                        "Sự rơi của vật có vận tốc ban đầu rất lớn"
                  ],
                  "ans": 0,
                  "exp": "Sự rơi tự do là chuyển động rơi chỉ dưới tác dụng của trọng lực. Trong không khí, nếu lực cản không khí rất nhỏ so với trọng lực thì có thể coi gần đúng là rơi tự do."
            },
            {
                  "q": "Thí nghiệm ống Newton hút chân không chứng minh điều quan trọng nào về sự rơi tự do?",
                  "opts": [
                        "Ở cùng một nơi, mọi vật rơi tự do như nhau với cùng gia tốc g, bất kể khối lượng hay hình dạng",
                        "Vật nặng luôn luôn rơi nhanh hơn vật nhẹ",
                        "Vật có diện tích lớn rơi nhanh hơn",
                        "Lực hút Trái Đất không tác dụng lên vật nhẹ trong chân không"
                  ],
                  "ans": 0,
                  "exp": "Trong ống hút chân không, hòn bi chì và chiếc lông vũ rơi chạm đáy cùng một lúc, chứng minh gia tốc rơi tự do $g$ không phụ thuộc khối lượng vật."
            },
            {
                  "q": "Thả một vật rơi tự do không vận tốc đầu từ độ cao h = 45 m tại nơi có g = 10 m/s². Thời gian vật chạm đất và vận tốc khi chạm đất là:",
                  "opts": [
                        "t = √(2h/g) = 3 s; v = gt = 30 m/s",
                        "t = 4,5 s; v = 45 m/s",
                        "t = 2 s; v = 20 m/s",
                        "t = 9 s; v = 90 m/s"
                  ],
                  "ans": 0,
                  "exp": "$t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\times 45}{10}} = 3\\text{ s}$; $v = gt = 10 \\times 3 = 30\\text{ m/s}$."
            }
      ]
},
    'vatly10-b11': {
      "subject": "physics",
      "simType": "kinematics",
      "simOptions": {
            "mode": "photogate",
            "h0": 1,
            "g": 9.8
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 11",
      "title": "Thực hành Đo gia tốc rơi tự do g bằng Cổng quang điện",
      "guide": "Sử dụng nam châm điện thả rơi bi thép qua cổng quang điện cách nhau khoảng cách h, đo thời gian rơi t và tính gia tốc g = 2h / t².",
      "questions": [
            {
                  "q": "Trong thí nghiệm đo gia tốc rơi tự do với máng đứng và đồng hồ hiện số, công thức tính g từ độ cao rơi h và thời gian rơi t là:",
                  "opts": [
                        "g = 2h / t²",
                        "g = h / t",
                        "g = h · t²",
                        "g = 2h · t"
                  ],
                  "ans": 0,
                  "exp": "Từ công thức rơi tự do $h = \\frac{1}{2}gt^2$ (khi $v_0 = 0$), suy ra công thức thực nghiệm: $g = \\frac{2h}{t^2}$."
            },
            {
                  "q": "Khi đo độ cao h = 0,800 m và thời gian rơi trung bình t = 0,404 s, giá trị gia tốc rơi tự do tính được là:",
                  "opts": [
                        "g = 2 × 0,800 / (0,404)² ≈ 9,80 m/s²",
                        "g = 8,90 m/s²",
                        "g = 10,5 m/s²",
                        "g = 9,45 m/s²"
                  ],
                  "ans": 0,
                  "exp": "$g = \\frac{2 \\times 0,800}{(0,404)^2} = \\frac{1,600}{0,1632} \\approx 9,80\\text{ m/s}^2$."
            },
            {
                  "q": "Để giảm thiểu sai số ngẫu nhiên trong phép đo gia tốc rơi tự do g, học sinh cần thực hiện biện pháp nào?",
                  "opts": [
                        "Lặp lại phép đo ít nhất 5 lần ở cùng độ cao rồi lấy giá trị trung bình",
                        "Chỉ đo 1 lần duy nhất để tránh máy nóng",
                        "Thả bi bằng tay thay vì dùng công tắc ngắt nam châm điện",
                        "Tăng khối lượng bi thép lên gấp 10 lần"
                  ],
                  "ans": 0,
                  "exp": "Lặp lại phép đo nhiều lần ở cùng điều kiện giúp loại trừ sai số ngẫu nhiên qua giá trị trung bình $\\bar{t}$, đồng thời nam châm điện đảm bảo $v_0 = 0$ chính xác."
            }
      ]
},
    'vatly10-b12': {
      "subject": "physics",
      "simType": "kinematics",
      "simOptions": {
            "mode": "projectile",
            "v0": 15,
            "angle": 45
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 12",
      "title": "Thực hành Chuyển động ném ngang & Ném xiên",
      "guide": "Điều chỉnh góc ném α (0°–90°) và vận tốc đầu v₀ để quan sát quỹ đạo parabol, tầm xa L và tầm cao H của vật bị ném.",
      "questions": [
            {
                  "q": "Trong chuyển động ném ngang bỏ qua sức cản không khí, chuyển động của vật được phân tích thành hai chuyển động thành phần nào?",
                  "opts": [
                        "Chuyển động thẳng đều theo phương ngang Ox và chuyển động rơi tự do theo phương thẳng đứng Oy",
                        "Cả hai phương đều là chuyển động thẳng đều",
                        "Cả hai phương đều là chuyển động biến đổi đều có gia tốc g",
                        "Chuyển động tròn đều quanh điểm ném"
                  ],
                  "ans": 0,
                  "exp": "Theo phương ngang $a_x = 0 \\Rightarrow$ chuyển động thẳng đều $v_x = v_0, x = v_0 t$. Theo phương thẳng đứng $a_y = g \\Rightarrow$ rơi tự do $v_y = gt, y = \\frac{1}{2}gt^2$."
            },
            {
                  "q": "Trong chuyển động ném xiên trên mặt đất bằng phẳng, góc ném α bằng bao nhiêu sẽ cho tầm bay xa L = (v₀² sin 2α) / g đạt giá trị lớn nhất?",
                  "opts": [
                        "α = 45°",
                        "α = 30°",
                        "α = 60°",
                        "α = 90°"
                  ],
                  "ans": 0,
                  "exp": "Tầm xa $L = \\frac{v_0^2 \\sin 2\\alpha}{g}$ cực đại khi $\\sin 2\\alpha = 1 \\Leftrightarrow 2\\alpha = 90^\\circ \\Leftrightarrow \\alpha = 45^\\circ$."
            },
            {
                  "q": "Tại điểm cao nhất của quỹ đạo chuyển động ném xiên, vectơ vận tốc v⃗ của vật có đặc điểm gì?",
                  "opts": [
                        "Có phương nằm ngang và độ lớn bằng thành phần v_x = v₀ cos α (v_y = 0)",
                        "Bằng 0 hoàn toàn (cả vx và vy đều bằng 0)",
                        "Có phương thẳng đứng hướng lên trên",
                        "Có độ lớn bằng v₀ ban đầu"
                  ],
                  "ans": 0,
                  "exp": "Tại đỉnh quỹ đạo, thành phần vận tốc thẳng đứng triệt tiêu $v_y = 0$, vật chỉ còn vận tốc theo phương ngang $v_x = v_0\\cos\\alpha$, do đó vectơ vận tốc nằm ngang."
            }
      ]
},
    'vatly10-b13': {
      "subject": "physics",
      "simType": "dynamics",
      "simOptions": {
            "mode": "vector_sum",
            "F1": 8,
            "F2": 6,
            "angleF": 90
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 13",
      "title": "Thực hành Tổng hợp và Phân tích lực — Cân bằng lực",
      "guide": "Điều chỉnh độ lớn F₁, F₂ và góc hợp α để quan sát quy tắc hình bình hành lực và điều kiện cân bằng của chất điểm.",
      "questions": [
            {
                  "q": "Hai lực đồng quy F₁ = 8 N và F₂ = 6 N tác dụng vào một chất điểm vuông góc với nhau (α = 90°). Độ lớn của hợp lực F là:",
                  "opts": [
                        "F = √(8² + 6²) = 10 N",
                        "F = 8 + 6 = 14 N",
                        "F = 8 − 6 = 2 N",
                        "F = 48 N"
                  ],
                  "ans": 0,
                  "exp": "Khi hai lực vuông góc: $F = \\sqrt{F_1^2 + F_2^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10\\text{ N}$."
            },
            {
                  "q": "Độ lớn của hợp lực F của hai lực đồng quy F₁ và F₂ luôn thỏa mãn bất đẳng thức nào sau đây?",
                  "opts": [
                        "|F₁ − F₂| ≤ F ≤ F₁ + F₂",
                        "F = F₁ + F₂ trong mọi trường hợp",
                        "F ≥ F₁ + F₂",
                        "F ≤ |F₁ − F₂|"
                  ],
                  "ans": 0,
                  "exp": "Theo quy tắc hình bình hành, độ lớn hợp lực cực tiểu khi hai lực ngược chiều ($F_{min} = |F_1 - F_2|$) và cực đại khi cùng chiều ($F_{max} = F_1 + F_2$)."
            },
            {
                  "q": "Điều kiện cân bằng của một chất điểm khi chịu tác dụng của nhiều lực F⃗₁, F⃗₂, ..., F⃗ₙ là:",
                  "opts": [
                        "Hợp lực của tất cả các lực tác dụng phải bằng 0: F⃗_net = ∑ F⃗ᵢ = 0⃗",
                        "Các lực phải có độ lớn bằng nhau",
                        "Số lượng lực tác dụng phải là số chẵn",
                        "Các lực phải cùng chiều"
                  ],
                  "ans": 0,
                  "exp": "Chất điểm cân bằng khi và chỉ khi tổng vectơ các lực tác dụng lên nó triệt tiêu: $\\sum \\vec{F} = \\vec{0}$."
            }
      ]
},
    'vatly10-b14': {
      "subject": "physics",
      "simType": "dynamics",
      "simOptions": {
            "mode": "newton",
            "F": 0,
            "m": 2,
            "mu": 0
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 14",
      "title": "Thực hành Định luật 1 Newton & Quán tính",
      "guide": "Đặt lực kéo F = 0 và ma sát μ = 0 để quan sát vật đứng yên mãi đứng yên hoặc vật đang chuyển động sẽ tiếp tục chuyển động thẳng đều mãi mãi.",
      "questions": [
            {
                  "q": "Nội dung định luật 1 Newton (Định luật quán tính) khẳng định điều gì?",
                  "opts": [
                        "Nếu một vật không chịu tác dụng của lực nào hoặc chịu tác dụng của các lực có hợp lực bằng 0, thì vật đang đứng yên sẽ tiếp tục đứng yên, đang chuyển động sẽ tiếp tục chuyển động thẳng đều",
                        "Mọi vật khi không có lực tác dụng đều phải dừng lại ngay lập tức",
                        "Lực là nguyên nhân duy trì chuyển động",
                        "Gia tốc của vật tỉ lệ nghịch với hợp lực"
                  ],
                  "ans": 0,
                  "exp": "Định luật 1 Newton chỉ rõ lực không phải là nguyên nhân duy trì chuyển động mà là nguyên nhân làm thay đổi vận tốc của vật."
            },
            {
                  "q": "Đại lượng vật lí nào là thước đo mức quán tính của một vật?",
                  "opts": [
                        "Khối lượng của vật (m)",
                        "Vận tốc của vật",
                        "Trọng lượng của vật",
                        "Thể tích của vật"
                  ],
                  "ans": 0,
                  "exp": "Khối lượng là đại lượng đặc trưng cho mức quán tính của vật; vật có khối lượng càng lớn thì càng khó thay đổi vận tốc (mức quán tính càng lớn)."
            },
            {
                  "q": "Hành khách ngồi trên xe buýt đang chạy thẳng đều bỗng bị ngả người về phía trước. Hiện tượng này xảy ra do đâu?",
                  "opts": [
                        "Xe buýt bất ngờ hãm phanh (giảm tốc) và do quán tính thân người có xu hướng duy trì vận tốc cũ",
                        "Xe buýt tăng ga đột ngột",
                        "Xe buýt rẽ nhanh sang bên phải",
                        "Trọng lực tác dụng lên hành khách tăng lên"
                  ],
                  "ans": 0,
                  "exp": "Khi xe phanh đột ngột, phần dưới cơ thể dính với xe giảm tốc độ theo xe, trong khi phần thân trên do quán tính vẫn tiếp tục tiến về trước với vận tốc cũ."
            }
      ]
},
    'vatly10-b15': {
      "subject": "physics",
      "simType": "dynamics",
      "simOptions": {
            "mode": "newton",
            "F": 12,
            "m": 3,
            "mu": 0
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 15",
      "title": "Thực hành Định luật 2 Newton — Mối quan hệ giữa F, m và a",
      "guide": "Thay đổi lực kéo F và khối lượng m để kiểm chứng công thức định luật 2 Newton a⃗ = F⃗_net / m và quan sát gia tốc thay đổi tức thời.",
      "questions": [
            {
                  "q": "Biểu thức vectơ chuẩn của Định luật 2 Newton là:",
                  "opts": [
                        "a⃗ = F⃗_net / m hay F⃗_net = m·a⃗",
                        "F⃗ = m / a⃗",
                        "a⃗ = m · F⃗",
                        "F⃗ · a⃗ = m"
                  ],
                  "ans": 0,
                  "exp": "Định luật 2 Newton: Gia tốc của một vật cùng hướng với hợp lực tác dụng, có độ lớn tỉ lệ thuận với độ lớn của hợp lực và tỉ lệ nghịch với khối lượng của vật: $\\vec{a} = \\frac{\\vec{F}_{net}}{m}$."
            },
            {
                  "q": "Tác dụng một lực kéo không đổi F = 15 N vào một vật có khối lượng m = 3 kg đặt trên mặt phẳng ngang không ma sát. Gia tốc của vật là:",
                  "opts": [
                        "a = F / m = 15 / 3 = 5 m/s²",
                        "a = 45 m/s²",
                        "a = 0,2 m/s²",
                        "a = 12 m/s²"
                  ],
                  "ans": 0,
                  "exp": "$a = \\frac{F}{m} = \\frac{15}{3} = 5\\text{ m/s}^2$."
            },
            {
                  "q": "Nếu giữ nguyên lực kéo F tác dụng nhưng tăng khối lượng của vật lên gấp đôi (m' = 2m) thì gia tốc của vật sẽ thay đổi thế nào?",
                  "opts": [
                        "Gia tốc giảm đi một nửa (a' = a / 2)",
                        "Gia tốc tăng gấp đôi",
                        "Gia tốc không thay đổi",
                        "Gia tốc tăng gấp 4 lần"
                  ],
                  "ans": 0,
                  "exp": "Vì gia tốc tỉ lệ nghịch với khối lượng ($a \\sim 1/m$) khi lực $F$ không đổi, nên $m$ tăng gấp đôi thì $a$ giảm đi một nửa."
            }
      ]
},
    'vatly10-b16': {
      "subject": "physics",
      "simType": "dynamics",
      "simOptions": {
            "mode": "newton",
            "F": 15,
            "m": 2
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 16",
      "title": "Thực hành Định luật 3 Newton — Tương tác Lực và Phản lực",
      "guide": "Quan sát cặp lực và phản lực trực đối F⃗_AB = −F⃗_BA xuất hiện đồng thời khi hai vật tương tác và đẩy nhau.",
      "questions": [
            {
                  "q": "Đặc điểm nào sau đây KHÔNG PHẢI là đặc điểm của cặp lực và phản lực trong Định luật 3 Newton?",
                  "opts": [
                        "Cùng đặt vào một vật nên chúng triệt tiêu nhau",
                        "Luôn xuất hiện và biến mất đồng thời",
                        "Cùng phương, ngược chiều và cùng độ lớn",
                        "Là hai lực trực đối đặt vào hai vật khác nhau"
                  ],
                  "ans": 0,
                  "exp": "Lực và phản lực đặt vào HAI VẬT KHÁC NHAU (vật A tác dụng lên B và B tác dụng lên A), nên chúng không cân bằng và không triệt tiêu nhau."
            },
            {
                  "q": "Một quả táo đặt nằm yên trên mặt bàn. Cặp lực nào sau đây là cặp lực trực đối cân bằng tác dụng lên cùng quả táo?",
                  "opts": [
                        "Trọng lực P⃗ của Trái Đất và phản lực N⃗ của mặt bàn tác dụng lên quả táo",
                        "Trọng lực của quả táo và lực hút của quả táo lên Trái Đất",
                        "Áp lực của quả táo lên bàn và phản lực của bàn lên quả táo",
                        "Lực ma sát và trọng lực"
                  ],
                  "ans": 0,
                  "exp": "Trọng lực $\\vec{P}$ và phản lực $\\vec{N}$ cùng tác dụng lên quả táo, cùng độ lớn và ngược chiều, triệt tiêu nhau làm quả táo đứng yên (cặp lực cân bằng)."
            },
            {
                  "q": "Khi một vận động viên nhảy cầu đạp chân vào ván nhảy, ván nhảy bị uốn cong và tác dụng lực ngược lại đẩy người bay lên. Hiện tượng này minh họa cho:",
                  "opts": [
                        "Định luật 3 Newton về lực và phản lực",
                        "Định luật vạn vật hấp dẫn",
                        "Định luật bảo toàn điện tích",
                        "Sự rơi tự do"
                  ],
                  "ans": 0,
                  "exp": "Người tác dụng lực vào ván nhảy $\\vec{F}_{người \\to ván}$, ván tác dụng trở lại người một phản lực $\\vec{F}_{ván \\to người} = -\\vec{F}_{người \\to ván}$ đẩy vận động viên lên cao."
            }
      ]
},
    'vatly10-b17': {
      "subject": "physics",
      "simType": "dynamics",
      "simOptions": {
            "mode": "newton",
            "F": 19.6,
            "m": 2
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 17",
      "title": "Thực hành Trọng lực và Lực căng dây",
      "guide": "Khảo sát trọng lực P = mg và lực căng dây T tác dụng lên vật treo thẳng đứng hoặc trên ròng rọc ở trạng thái cân bằng.",
      "questions": [
            {
                  "q": "Trọng lực P⃗ tác dụng lên một vật có khối lượng m ở gần bề mặt Trái Đất có đặc điểm nào?",
                  "opts": [
                        "Phương thẳng đứng, chiều hướng về tâm Trái Đất, độ lớn P = m·g",
                        "Phương nằm ngang, độ lớn tỉ lệ nghịch với khối lượng",
                        "Luôn hướng lên trên ngược chiều rơi",
                        "Không phụ thuộc vào vị trí địa lí"
                  ],
                  "ans": 0,
                  "exp": "Trọng lực là lực hấp dẫn của Trái Đất tác dụng lên vật, có phương thẳng đứng, chiều hướng xuống tâm Trái Đất và độ lớn $P = mg$."
            },
            {
                  "q": "Treo một vật có khối lượng m = 500 g vào đầu một sợi dây nhẹ không dãn tại nơi có g = 9,8 m/s². Khi vật cân bằng, lực căng dây T có độ lớn:",
                  "opts": [
                        "T = P = 0,5 kg × 9,8 m/s² = 4,9 N",
                        "T = 500 N",
                        "T = 4900 N",
                        "T = 2,45 N"
                  ],
                  "ans": 0,
                  "exp": "Đổi $m = 500\\text{ g} = 0,5\\text{ kg}$. Khi vật cân bằng, lực căng cân bằng với trọng lực: $T = P = mg = 0,5 \\times 9,8 = 4,9\\text{ N}$."
            },
            {
                  "q": "Lực căng của một sợi dây mềm, nhẹ, không dãn luôn có phương và chiều như thế nào?",
                  "opts": [
                        "Phương dọc theo chiều dài sợi dây, chiều hướng từ đầu dây vào phần giữa sợi dây (kéo vật)",
                        "Phương vuông góc với sợi dây",
                        "Có thể đẩy vật đi xa",
                        "Luôn luôn hướng thẳng đứng xuống đất"
                  ],
                  "ans": 0,
                  "exp": "Dây mềm chỉ có tác dụng kéo vật chứ không đẩy được, do đó lực căng dây luôn có phương trùng với trục sợi dây và hướng về phía dây bị kéo."
            }
      ]
},
    'vatly10-b18': {
      "subject": "physics",
      "simType": "dynamics",
      "simOptions": {
            "mode": "incline",
            "m": 2,
            "mu": 0.25,
            "alpha": 25
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 18",
      "title": "Thực hành Lực ma sát trên mặt phẳng nghiêng",
      "guide": "Điều chỉnh hệ số ma sát μ và góc nghiêng α để phân tích lực ma sát trượt F_mst = μ·N, ma sát nghỉ và điều kiện vật trượt xuống.",
      "questions": [
            {
                  "q": "Công thức tính độ lớn của lực ma sát trượt tác dụng lên vật chuyển động trên bề mặt là:",
                  "opts": [
                        "F_mst = μ_t · N (với μ_t là hệ số ma sát trượt, N là độ lớn áp lực vuông góc)",
                        "F_mst = μ_t · P",
                        "F_mst = m · g",
                        "F_mst = μ_t / N"
                  ],
                  "ans": 0,
                  "exp": "Độ lớn lực ma sát trượt tỉ lệ thuận với áp lực vuông góc giữa hai bề mặt: $F_{mst} = \\mu_t N$."
            },
            {
                  "q": "Một khối gỗ khối lượng m = 4 kg trượt trên sàn ngang có hệ số ma sát μ = 0,2 (lấy g = 10 m/s²). Độ lớn của lực ma sát trượt là:",
                  "opts": [
                        "F_mst = 0,2 × (4 × 10) = 8 N",
                        "F_mst = 80 N",
                        "F_mst = 0,8 N",
                        "F_mst = 4 N"
                  ],
                  "ans": 0,
                  "exp": "Trên sàn ngang $N = P = mg = 4 \\times 10 = 40\\text{ N}$. Do đó $F_{mst} = \\mu N = 0,2 \\times 40 = 8\\text{ N}$."
            },
            {
                  "q": "Đặt một vật trên mặt phẳng nghiêng góc α. Điều kiện để vật bắt đầu tự trượt xuống dốc là:",
                  "opts": [
                        "tan α > μ_n (thành phần kéo mg·sin α vượt quá ma sát nghỉ cực đại μ_n·mg·cos α)",
                        "sin α < μ_n",
                        "cos α > μ_n",
                        "Khối lượng vật phải rất lớn"
                  ],
                  "ans": 0,
                  "exp": "Thành phần trọng lực kéo xuống dốc là $P_x = mg\\sin\\alpha$, ma sát nghỉ cực đại là $F_{msn} = \\mu_n mg\\cos\\alpha$. Vật trượt khi $P_x > F_{msn} \\Leftrightarrow \\tan\\alpha > \\mu_n$."
            }
      ]
},
    'vatly10-b19': {
      "subject": "physics",
      "simType": "dynamics",
      "simOptions": {
            "mode": "drag",
            "m": 1
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 19",
      "title": "Thực hành Lực cản và Lực nâng của chất lưu",
      "guide": "Khảo sát lực cản không khí tăng theo vận tốc rơi v, quan sát vật đạt vận tốc giới hạn (terminal velocity) khi lực cản cân bằng trọng lực.",
      "questions": [
            {
                  "q": "Khi một vật rơi trong không khí từ độ cao lớn, tại sao vật không tăng vận tốc mãi mãi mà tiến dần tới một vận tốc giới hạn không đổi?",
                  "opts": [
                        "Vì khi vận tốc tăng, lực cản không khí tăng dần cho đến khi cân bằng với trọng lực (F_cản = P), khi đó gia tốc triệt tiêu (a = 0)",
                        "Vì Trái Đất ngừng hút vật ở vận tốc cao",
                        "Vì khối lượng vật giảm dần",
                        "Vì không khí bị đông đặc lại"
                  ],
                  "ans": 0,
                  "exp": "Lực cản không khí tăng theo bình phương vận tốc $F_c = kv^2$. Khi $F_c = P$, hợp lực triệt tiêu $F_{net} = 0 \\Rightarrow a = 0$, vật đạt vận tốc giới hạn và chuyển động thẳng đều."
            },
            {
                  "q": "Thiết kế dạng khí động học (aerodynamic) của ô tô thể thao và máy bay nhằm mục đích chủ yếu gì?",
                  "opts": [
                        "Giảm thiểu lực cản của không khí giúp tiết kiệm nhiên liệu và tăng tốc độ",
                        "Làm xe nặng hơn để bám đường tốt hơn",
                        "Tăng lực ma sát với không khí",
                        "Tạo tiếng ồn lớn hơn"
                  ],
                  "ans": 0,
                  "exp": "Hình dạng giọt nước thuôn dài khí động học giúp các dòng khí chảy trơn tru quanh thân xe, giảm vùng xoáy áp suất thấp phía sau, từ đó giảm lực cản không khí."
            },
            {
                  "q": "Lực nâng khí động học tác dụng lên cánh máy bay khi bay theo phương ngang sinh ra chủ yếu do cơ chế nào?",
                  "opts": [
                        "Chênh lệch áp suất giữa mặt dưới và mặt trên cánh theo định luật Bernoulli (vận tốc khí ở mặt trên nhanh hơn tạo áp suất nhỏ hơn mặt dưới)",
                        "Lực hút của Mặt Trời",
                        "Lực đẩy của động cơ phản lực hướng lên trên",
                        "Khối lượng riêng của máy bay nhẹ hơn không khí"
                  ],
                  "ans": 0,
                  "exp": "Cánh máy bay có mặt trên cong hơn mặt dưới, dòng khí phía trên đi nhanh hơn tạo áp suất tĩnh nhỏ hơn áp suất mặt dưới, tạo lực nâng hướng thẳng đứng lên trên."
            }
      ]
},
    'vatly10-b20': {
      "subject": "physics",
      "simType": "dynamics",
      "simOptions": {
            "mode": "incline",
            "m": 3,
            "mu": 0.15,
            "alpha": 30
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 20",
      "title": "Thực hành Phương pháp Động lực học giải bài toán Cơ học",
      "guide": "Phân tích các lực tác dụng lên vật trượt trên dốc nghiêng góc α = 30°, viết phương trình Định luật 2 Newton và chiếu lên hệ trục Oxy.",
      "questions": [
            {
                  "q": "Quy trình giải bài toán động lực học bằng phương pháp chiếu phương trình Newton lên hệ trục tọa độ gồm các bước chính nào?",
                  "opts": [
                        "Chọn hệ quy chiếu; xác định các lực tác dụng; viết ∑ F⃗ = m·a⃗; chọn hệ trục Oxy thích hợp; chiếu phương trình lên Oxy để giải đại số",
                        "Chỉ cần áp dụng công thức v = s / t",
                        "Tính động năng rồi chia cho quãng đường",
                        "Đo bằng thước rồi ước lượng gia tốc"
                  ],
                  "ans": 0,
                  "exp": "Đây là các bước chuẩn xác của phương pháp động lực học được giảng dạy trong SGK Vật lí 10 để giải quyết mọi bài toán cơ học chất điểm."
            },
            {
                  "q": "Một vật khối lượng m trượt xuống một mặt phẳng nghiêng góc α so với phương ngang, hệ số ma sát là μ. Biểu thức gia tốc trượt a là:",
                  "opts": [
                        "a = g(sin α − μ·cos α)",
                        "a = g(cos α − μ·sin α)",
                        "a = g·sin α + μ·g",
                        "a = g·tan α"
                  ],
                  "ans": 0,
                  "exp": "Chiếu lên phương chuyển động song song mặt nghiêng: $P_x - F_{mst} = ma \\Rightarrow mg\\sin\\alpha - \\mu mg\\cos\\alpha = ma \\Rightarrow a = g(\\sin\\alpha - \\mu\\cos\\alpha)$."
            },
            {
                  "q": "Tại sao khi giải bài toán chuyển động trên mặt phẳng nghiêng, người ta thường chọn trục Ox song song mặt nghiêng và Oy vuông góc mặt nghiêng?",
                  "opts": [
                        "Vì khi đó gia tốc theo trục Oy bằng 0 (a_y = 0), giúp việc tính phản lực N và gia tốc trượt a_x đơn giản nhất",
                        "Vì bắt buộc trục Ox luôn phải nằm ngang",
                        "Vì trọng lực P luôn nằm dọc theo trục Ox",
                        "Vì lực ma sát cùng chiều với Oy"
                  ],
                  "ans": 0,
                  "exp": "Vật chỉ chuyển động dọc theo dốc nghiêng nên $a_y = 0 \\Rightarrow N - mg\\cos\\alpha = 0 \\Rightarrow N = mg\\cos\\alpha$, phân tích hình chiếu trực tiếp không bị chéo."
            }
      ]
},
    'vatly10-b21': {
      "subject": "physics",
      "simType": "dynamics",
      "simOptions": {
            "mode": "moment"
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 21",
      "title": "Thực hành Moment lực & Cân bằng của vật rắn quanh trục quay",
      "guide": "Khảo sát cánh tay đòn d, tính moment M = F·d và kiểm chứng quy tắc moment lực cân bằng trên đòn bẩy: M_thuận = M_ngược.",
      "questions": [
            {
                  "q": "Moment lực đối với trục quay là đại lượng đặc trưng cho tác dụng nào của lực?",
                  "opts": [
                        "Tác dụng làm quay vật quanh trục (M = F · d)",
                        "Tác dụng làm vật biến dạng",
                        "Tác dụng làm vật chuyển động tịnh tiến",
                        "Tác dụng giữ vật đứng yên không ma sát"
                  ],
                  "ans": 0,
                  "exp": "Moment lực đặc trưng cho tác dụng làm quay của lực đối với một trục quay cố định: $M = F \\cdot d$, đơn vị là Newton mét ($\\text{N}\\cdot\\text{m}$)."
            },
            {
                  "q": "Cánh tay đòn d của lực đối với trục quay được định nghĩa chuẩn xác là:",
                  "opts": [
                        "Khoảng cách vuông góc từ trục quay đến giá của lực",
                        "Khoảng cách từ trục quay đến điểm đặt của lực",
                        "Độ dài của vectơ lực",
                        "Chiều dài toàn phần của thanh đòn"
                  ],
                  "ans": 0,
                  "exp": "Cánh tay đòn $d$ là khoảng cách vuông góc (đoạn thẳng vuông góc ngắn nhất) hạ từ trục quay đến đường thẳng chứa vectơ lực (giá của lực)."
            },
            {
                  "q": "Một thanh đòn nhẹ quay quanh trục O. Một lực F₁ = 20 N đặt cách trục quay d₁ = 1,5 m. Để thanh đòn cân bằng, lực F₂ đặt cách trục quay d₂ = 1,0 m ở phía đối diện phải có độ lớn:",
                  "opts": [
                        "F₂ = (F₁ · d₁) / d₂ = (20 × 1,5) / 1,0 = 30 N",
                        "F₂ = 20 N",
                        "F₂ = 15 N",
                        "F₂ = 13,3 N"
                  ],
                  "ans": 0,
                  "exp": "Áp dụng quy tắc moment lực cân bằng: $M_1 = M_2 \\Leftrightarrow F_1 d_1 = F_2 d_2 \\Rightarrow F_2 = \\frac{20 \\times 1,5}{1,0} = 30\\text{ N}$."
            }
      ]
},
    'vatly10-b22': {
      "subject": "physics",
      "simType": "dynamics",
      "simOptions": {
            "mode": "vector_sum",
            "F1": 6,
            "F2": 8,
            "angleF": 90
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 22",
      "title": "Thực hành Thí nghiệm Tổng hợp hai lực đồng quy",
      "guide": "Sử dụng bảng từ và 3 lực kế kéo vòng nhẫn cân bằng tại gốc O để kiểm chứng quy tắc hình bình hành F⃗ = F⃗₁ + F⃗₂.",
      "questions": [
            {
                  "q": "Trong thí nghiệm tổng hợp hai lực đồng quy dùng bảng từ và lực kế, khi vòng nhẫn nhỏ nằm yên tại tâm gốc O, khẳng định nào đúng?",
                  "opts": [
                        "Hợp lực của hai lực kế F⃗₁ và F⃗₂ cân bằng trực đối với lực kéo của lực kế thứ ba F⃗₃: F⃗₁ + F⃗₂ = −F⃗₃",
                        "Cả ba lực kế đều chỉ cùng một số đo",
                        "Góc giữa hai lực kế F₁ và F₂ bắt buộc phải bằng 90°",
                        "Lực kế thứ ba không chịu lực nào"
                  ],
                  "ans": 0,
                  "exp": "Vòng nhẫn cân bằng dưới tác dụng của 3 lực: $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0} \\Rightarrow \\vec{F}_{12} = \\vec{F}_1 + \\vec{F}_2 = -\\vec{F}_3$."
            },
            {
                  "q": "Nếu hai lực kế chỉ F₁ = 3 N và F₂ = 4 N tạo với nhau một góc α = 90°, lực kế thứ ba giữ vòng nhẫn cân bằng sẽ chỉ giá trị:",
                  "opts": [
                        "F₃ = √(3² + 4²) = 5 N",
                        "F₃ = 7 N",
                        "F₃ = 1 N",
                        "F₃ = 12 N"
                  ],
                  "ans": 0,
                  "exp": "$F_3 = F_{12} = \\sqrt{F_1^2 + F_2^2} = \\sqrt{9 + 16} = 5\\text{ N}$."
            },
            {
                  "q": "Để kết quả đo của lực kế chính xác nhất trong thí nghiệm thực hành tổng hợp lực, học sinh cần lưu ý điều gì?",
                  "opts": [
                        "Điều chỉnh điểm 0 của lực kế trước khi đo và giữ dây kéo song song với mặt bảng từ",
                        "Kéo lực kế vượt quá giới hạn đo tối đa",
                        "Để dây kéo cọ xát mạnh vào đinh ghim",
                        "Đặt bảng từ nằm nghiêng 45°"
                  ],
                  "ans": 0,
                  "exp": "Cần hiệu chỉnh mốc 0 ban đầu và kéo các sợi dây song song sát mặt phẳng bảng từ để tránh sinh thêm thành phần lực vuông góc làm sai lệch số đo."
            }
      ]
},
    'vatly10-b23': {
      "subject": "physics",
      "simType": "energy",
      "simOptions": {
            "F": 20,
            "s": 10,
            "m": 2
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 23",
      "title": "Thực hành Năng lượng & Công cơ học",
      "guide": "Điều chỉnh lực kéo F, quãng đường s và góc hợp α để phân biệt công phát động (A > 0), công cản (A < 0) và công bằng 0 khi góc vuông.",
      "questions": [
            {
                  "q": "Công cơ học sinh ra bởi một lực không đổi F làm vật dịch chuyển quãng đường s theo phương hợp góc α với hướng của lực được tính bằng công thức:",
                  "opts": [
                        "A = F · s · cos α",
                        "A = F · s · sin α",
                        "A = F · s · tan α",
                        "A = F / (s · cos α)"
                  ],
                  "ans": 0,
                  "exp": "Công cơ học là đại lượng vô hướng: $A = F \\cdot s \\cdot \\cos\\alpha$, đơn vị trong hệ SI là Joule ($\\text{J} = \\text{N}\\cdot\\text{m}$)."
            },
            {
                  "q": "Một người nâng một thùng hàng nặng 20 kg thẳng đứng lên cao 1,5 m với vận tốc không đổi (lấy g = 9,8 m/s²). Công của lực nâng là:",
                  "opts": [
                        "A = F · s = (20 × 9,8) × 1,5 = 294 J",
                        "A = 30 J",
                        "A = 3000 J",
                        "A = 0 J"
                  ],
                  "ans": 0,
                  "exp": "Lực nâng cân bằng với trọng lực $F = P = mg = 20 \\times 9,8 = 196\\text{ N}$. Vì lực cùng hướng chuyển động ($\\alpha = 0^\\circ, \\cos 0^\\circ = 1$), công $A = 196 \\times 1,5 = 294\\text{ J}$."
            },
            {
                  "q": "Trong trường hợp nào sau đây lực tác dụng lên vật nhưng KHÔNG SINH CÔNG (A = 0)?",
                  "opts": [
                        "Lực vuông góc với hướng chuyển động của vật (α = 90° như trọng lực khi vật trượt ngang)",
                        "Lực cùng hướng với hướng chuyển động",
                        "Lực ngược hướng với hướng chuyển động",
                        "Lực làm vật tăng tốc"
                  ],
                  "ans": 0,
                  "exp": "Khi $\\alpha = 90^\\circ$, $\\cos 90^\\circ = 0 \\Rightarrow A = 0$. Ví dụ phản lực $N$ hoặc lực hướng tâm trong chuyển động tròn đều không sinh công."
            }
      ]
},
    'vatly10-b24': {
      "subject": "physics",
      "simType": "energy",
      "simOptions": {
            "F": 30,
            "s": 15,
            "v": 5,
            "m": 2
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 24",
      "title": "Thực hành Công suất — Tốc độ thực hiện công",
      "guide": "Quan sát công suất 𝒫 = A / t = F·v, so sánh giữa đơn vị Watt (W) và đơn vị Mã lực (HP) trong đời sống kỹ thuật.",
      "questions": [
            {
                  "q": "Công suất là đại lượng vật lí đặc trưng cho yếu tố nào của quá trình sinh công?",
                  "opts": [
                        "Tốc độ thực hiện công nhanh hay chậm của người hoặc máy móc (𝒫 = A / t)",
                        "Tổng lượng công sinh ra nhiều hay ít",
                        "Mức độ bền bỉ của máy móc",
                        "Độ lớn của lực tác dụng"
                  ],
                  "ans": 0,
                  "exp": "Công suất là công sinh ra trong một đơn vị thời gian: $\\mathcal{P} = \\frac{A}{t}$, đặc trưng cho tốc độ sinh công của thiết bị."
            },
            {
                  "q": "Một cần cẩu thực hiện một công A = 120.000 J để nâng khối vật liệu lên cao trong thời gian t = 30 giây. Công suất của cần cẩu là:",
                  "opts": [
                        "𝒫 = 120.000 / 30 = 4.000 W (4 kW)",
                        "𝒫 = 3.600.000 W",
                        "𝒫 = 400 W",
                        "𝒫 = 30 kW"
                  ],
                  "ans": 0,
                  "exp": "$\\mathcal{P} = \\frac{A}{t} = \\frac{120.000}{30} = 4000\\text{ W} = 4\\text{ kW}$."
            },
            {
                  "q": "Mối liên hệ giữa công suất tức thời 𝒫, lực kéo F cùng hướng chuyển động và vận tốc tức thời v của xe là:",
                  "opts": [
                        "𝒫 = F · v",
                        "𝒫 = F / v",
                        "𝒫 = F · v²",
                        "𝒫 = ½ F · v"
                  ],
                  "ans": 0,
                  "exp": "Từ $A = F \\cdot s$, ta có $\\mathcal{P} = \\frac{A}{t} = F \\cdot \\frac{s}{t} = F \\cdot v$."
            }
      ]
},
    'vatly10-b25': {
      "subject": "physics",
      "simType": "energy",
      "simOptions": {
            "m": 2,
            "v": 6,
            "h": 5
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 25",
      "title": "Thực hành Động năng, Thế năng & Định lí động năng",
      "guide": "Điều chỉnh vận tốc v và độ cao h để quan sát giá trị động năng Wđ = ½mv² và thế năng trọng trường Wt = mgh biến đổi đồng bộ.",
      "questions": [
            {
                  "q": "Một vật có khối lượng m = 2 kg đang chuyển động với vận tốc v = 6 m/s. Động năng của vật là:",
                  "opts": [
                        "Wđ = ½ · m · v² = ½ × 2 × 6² = 36 J",
                        "Wđ = 2 × 6 = 12 J",
                        "Wđ = 72 J",
                        "Wđ = 18 J"
                  ],
                  "ans": 0,
                  "exp": "Động năng: $W_đ = \\frac{1}{2}mv^2 = \\frac{1}{2} \\times 2 \\times 6^2 = 36\\text{ J}$."
            },
            {
                  "q": "Thế năng trọng trường Wt của một vật phụ thuộc vào những yếu tố nào?",
                  "opts": [
                        "Khối lượng m, gia tốc trọng trường g và độ cao h của vật so với mốc thế năng đã chọn (Wt = mgh)",
                        "Chỉ phụ thuộc vào vận tốc của vật",
                        "Chỉ phụ thuộc vào thể tích của vật",
                        "Không phụ thuộc vào mốc thế năng"
                  ],
                  "ans": 0,
                  "exp": "Thế năng trọng trường là năng lượng tương tác giữa Trái Đất và vật: $W_t = mgh$, giá trị phụ thuộc vào việc chọn mốc tính độ cao ($h = 0$)."
            },
            {
                  "q": "Nội dung Định lí động năng khẳng định:",
                  "opts": [
                        "Độ biến thiên động năng của một vật bằng tổng công của các ngoại lực tác dụng lên vật: A = Wđ₂ − Wđ₁",
                        "Động năng luôn luôn là một hằng số bảo toàn",
                        "Công của ngoại lực luôn bằng thế năng của vật",
                        "Động năng tỉ lệ nghịch với khối lượng"
                  ],
                  "ans": 0,
                  "exp": "Định lí động năng: $A_{ngoại lực} = \\Delta W_đ = W_{đ2} - W_{đ1}$. Nếu công sinh ra dương thì động năng tăng, công cản âm thì động năng giảm."
            }
      ]
},
    'vatly10-b26': {
      "subject": "physics",
      "simType": "energy",
      "simOptions": {
            "m": 2,
            "v": 4,
            "h": 8
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 26",
      "title": "Thực hành Cơ năng & Định luật bảo toàn cơ năng",
      "guide": "Quan sát biểu đồ cột năng lượng Wđ, Wt và cơ năng toàn phần W = Wđ + Wt = const khi vật chuyển động trong trọng trường không ma sát.",
      "questions": [
            {
                  "q": "Điều kiện để cơ năng của một vật chuyển động trong trọng trường được bảo toàn (W = Wđ + Wt = const) là:",
                  "opts": [
                        "Vật chỉ chịu tác dụng của trọng lực (hoặc các lực thế), không có lực ma sát và lực cản sinh công",
                        "Vật phải chuyển động thẳng đều",
                        "Vận tốc của vật phải bằng 0",
                        "Độ cao của vật không đổi"
                  ],
                  "ans": 0,
                  "exp": "Cơ năng chỉ bảo toàn khi hệ là hệ kín và chỉ có lực thế (trọng lực, lực đàn hồi) sinh công, bỏ qua lực ma sát và lực cản."
            },
            {
                  "q": "Một vật được thả rơi tự do từ độ cao h = 20 m (lấy g = 10 m/s²). Vận tốc của vật tại vị trí có động năng bằng thế năng (Wđ = Wt) là:",
                  "opts": [
                        "v = √(g·h) = √(10 × 20) ≈ 14,14 m/s (tại độ cao h' = h/2 = 10 m)",
                        "v = 20 m/s",
                        "v = 10 m/s",
                        "v = 7,07 m/s"
                  ],
                  "ans": 0,
                  "exp": "Bảo toàn cơ năng: $W = mgh = W_đ + W_t = 2W_đ = 2(\\frac{1}{2}mv^2) = mv^2 \\Rightarrow v^2 = gh \\Rightarrow v = \\sqrt{gh} = \\sqrt{200} \\approx 14,14\\text{ m/s}$."
            },
            {
                  "q": "Trong thực tế khi vật chuyển động có ma sát, cơ năng không bảo toàn mà giảm dần. Phần cơ năng bị hao hụt đã chuyển hóa thành dạng năng lượng nào?",
                  "opts": [
                        "Nhiệt năng làm nóng vật và môi trường xung quanh",
                        "Quang năng phát sáng",
                        "Hạt nhân nguyên tử",
                        "Biến mất hoàn toàn khỏi vũ trụ"
                  ],
                  "ans": 0,
                  "exp": "Theo định luật bảo toàn và chuyển hóa năng lượng, phần cơ năng hao hụt do ma sát chuyển hóa thành nhiệt năng: $-\\Delta W = A_{mst} = Q$."
            }
      ]
},
    'vatly10-b27': {
      "subject": "physics",
      "simType": "energy",
      "simOptions": {
            "m": 2,
            "v": 5,
            "h": 6
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 27",
      "title": "Thực hành Hiệu suất trong chuyển hóa năng lượng",
      "guide": "Phân tích tỉ số giữa năng lượng có ích và năng lượng toàn phần, tính hiệu suất H = (A_ích / A_tp) × 100% của các động cơ.",
      "questions": [
            {
                  "q": "Hiệu suất H của một động cơ hoặc thiết bị chuyển hóa năng lượng được tính bằng công thức:",
                  "opts": [
                        "H = (A_ích / A_tp) × 100% = (𝒫_ích / 𝒫_tp) × 100%",
                        "H = (A_tp / A_ích) × 100%",
                        "H = (A_hao phí / A_tp) × 100%",
                        "H = A_ích × A_tp"
                  ],
                  "ans": 0,
                  "exp": "Hiệu suất là tỉ số phần trăm giữa năng lượng có ích thu được và tổng năng lượng toàn phần đã cung cấp: $H = \\frac{A_{ích}}{A_{tp}} \\times 100\\%$."
            },
            {
                  "q": "Một động cơ điện tiêu thụ công suất toàn phần 2 kW nhưng chỉ sinh ra công suất cơ học có ích là 1,6 kW. Hiệu suất của động cơ là:",
                  "opts": [
                        "H = (1,6 / 2,0) × 100% = 80%",
                        "H = 20%",
                        "H = 125%",
                        "H = 3,2%"
                  ],
                  "ans": 0,
                  "exp": "$H = \\frac{1,6}{2,0} \\times 100\\% = 80\\%$. Phần hao phí $20\\%$ chủ yếu tỏa nhiệt."
            },
            {
                  "q": "Tại sao hiệu suất H của mọi động cơ nhiệt và máy móc cơ học trong thực tế luôn nhỏ hơn 100% (H < 1)?",
                  "opts": [
                        "Vì luôn tồn tại ma sát, lực cản và sự thất thoát nhiệt không thể tránh khỏi trong quá trình vận hành",
                        "Do sai số của đồng hồ đo",
                        "Vì năng lượng bị tự hủy diệt",
                        "Vì nhiên liệu không chứa năng lượng"
                  ],
                  "ans": 0,
                  "exp": "Theo nguyên lí II nhiệt động lực học và thực tế cơ học, luôn có sự tiêu hao năng lượng do ma sát biến thành nhiệt tản mát ra môi trường nên năng lượng có ích luôn nhỏ hơn năng lượng toàn phần."
            }
      ]
},
    'vatly10-b28': {
      "subject": "physics",
      "simType": "momentum",
      "simOptions": {
            "m1": 2,
            "v1": 4,
            "m2": 1,
            "v2": 0
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 28",
      "title": "Thực hành Động lượng & Xung lượng của lực",
      "guide": "Quan sát vectơ động lượng p⃗ = m·v⃗ hiển thị trực tiếp trên xe, khảo sát mối liên hệ giữa xung lượng của lực F⃗·Δt và độ biến thiên động lượng Δp⃗.",
      "questions": [
            {
                  "q": "Động lượng p⃗ của một vật có khối lượng m đang chuyển động với vận tốc v⃗ được định nghĩa là:",
                  "opts": [
                        "p⃗ = m · v⃗ (vectơ cùng hướng với vectơ vận tốc v⃗, đơn vị kg·m/s)",
                        "p⃗ = m / v⃗",
                        "p = ½ m v²",
                        "p⃗ = m · a⃗"
                  ],
                  "ans": 0,
                  "exp": "Động lượng là đại lượng vectơ đo bằng tích của khối lượng và vận tốc của vật: $\\vec{p} = m\\vec{v}$, đơn vị chuẩn $\\text{kg}\\cdot\\text{m/s}$."
            },
            {
                  "q": "Một quả bóng tennis khối lượng m = 60 g bay với vận tốc v = 25 m/s. Độ lớn động lượng của quả bóng là:",
                  "opts": [
                        "p = 0,06 kg × 25 m/s = 1,5 kg·m/s",
                        "p = 1500 kg·m/s",
                        "p = 15 kg·m/s",
                        "p = 0,15 kg·m/s"
                  ],
                  "ans": 0,
                  "exp": "Đổi $m = 60\\text{ g} = 0,06\\text{ kg}$. Động lượng $p = mv = 0,06 \\times 25 = 1,5\\text{ kg}\\cdot\\text{m/s}$."
            },
            {
                  "q": "Dạng tổng quát của Định luật 2 Newton viết qua xung lượng của lực và độ biến thiên động lượng là:",
                  "opts": [
                        "F⃗ · Δt = Δp⃗ = p⃗₂ − p⃗₁",
                        "F⃗ = Δp⃗ · Δt",
                        "p⃗ = F⃗ / Δt",
                        "Δp⃗ = 0"
                  ],
                  "ans": 0,
                  "exp": "Xung lượng của lực bằng độ biến thiên động lượng của vật trong khoảng thời gian đó: $\\vec{F}\\Delta t = \\Delta \\vec{p} = \\vec{p}_2 - \\vec{p}_1$."
            }
      ]
},
    'vatly10-b29': {
      "subject": "physics",
      "simType": "momentum",
      "simOptions": {
            "m1": 2,
            "v1": 3,
            "m2": 2,
            "v2": -2,
            "e": 1
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 29",
      "title": "Thực hành Định luật bảo toàn động lượng & Chuyển động bằng phản lực",
      "guide": "Thiết lập hệ kín hai xe va chạm trên đệm khí, quan sát tổng động lượng p⃗_hệ = p⃗₁ + p⃗₂ không đổi trước và sau va chạm.",
      "questions": [
            {
                  "q": "Định luật bảo toàn động lượng được phát biểu chuẩn xác như thế nào?",
                  "opts": [
                        "Tổng động lượng của một hệ kín (cô lập) là một đại lượng bảo toàn (không đổi cả về phương, chiều và độ lớn): ∑ p⃗_trước = ∑ p⃗_sau",
                        "Động lượng của từng vật riêng lẻ luôn không đổi",
                        "Động lượng chỉ bảo toàn khi vận tốc của hệ bằng 0",
                        "Tổng động lượng tỉ lệ thuận với thời gian va chạm"
                  ],
                  "ans": 0,
                  "exp": "Trong một hệ kín không chịu ngoại lực tác dụng (hoặc tổng ngoại lực triệt tiêu), tổng vectơ động lượng của hệ luôn được bảo toàn: $\\sum \\vec{p} = \\text{const}$."
            },
            {
                  "q": "Khẩu pháo khối lượng M = 500 kg bắn viên đạn khối lượng m = 5 kg với vận tốc v = 400 m/s theo phương ngang. Vận tốc giật lùi V của khẩu pháo là:",
                  "opts": [
                        "V = −(m · v) / M = −(5 × 400) / 500 = −4 m/s (ngược chiều đạn)",
                        "V = 4 m/s (cùng chiều đạn)",
                        "V = 40 m/s",
                        "V = 0 m/s"
                  ],
                  "ans": 0,
                  "exp": "Bảo toàn động lượng cho hệ kín (pháo + đạn) ban đầu đứng yên: $M\\vec{V} + m\\vec{v} = \\vec{0} \\Rightarrow V = -\\frac{mv}{M} = -\\frac{5 \\times 400}{500} = -4\\text{ m/s}$."
            },
            {
                  "q": "Nguyên tắc chuyển động của tên lửa vũ trụ khi bay vào không gian dựa trên định luật vật lí nào?",
                  "opts": [
                        "Định luật bảo toàn động lượng qua chuyển động bằng phản lực (phun khí nóng lùi về sau làm thân tên lửa tiến về trước)",
                        "Lực đẩy của không khí xung quanh",
                        "Lực hút của Mặt Trăng",
                        "Sóng điện từ đẩy tên lửa"
                  ],
                  "ans": 0,
                  "exp": "Tên lửa mang theo cả nhiên liệu và chất oxy hóa, khi đốt cháy phun ra lượng khí lớn với vận tốc cao về phía sau, theo định luật bảo toàn động lượng thân tên lửa sẽ tăng tốc về phía trước ngay cả trong chân không vũ trụ."
            }
      ]
},
    'vatly10-b30': {
      "subject": "physics",
      "simType": "momentum",
      "simOptions": {
            "m1": 2,
            "v1": 4,
            "m2": 1.5,
            "v2": -2,
            "e": 0
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 30",
      "title": "Thực hành Đo động lượng trước và sau va chạm trên đệm khí",
      "guide": "Chuyển đổi giữa va chạm hoàn toàn đàn hồi (e = 1) và va chạm mềm (e = 0) để kiểm chứng sự bảo toàn động lượng qua thí nghiệm đo vận tốc.",
      "questions": [
            {
                  "q": "Trong va chạm mềm (e = 0), hai xe có khối lượng m₁ và m₂ chuyển động với vận tốc v₁ và v₂ sau khi va chạm sẽ dính liền vào nhau và chuyển động với vận tốc chung V bằng:",
                  "opts": [
                        "V = (m₁·v₁ + m₂·v₂) / (m₁ + m₂)",
                        "V = (v₁ + v₂) / 2",
                        "V = (m₁·v₁ − m₂·v₂) / (m₁ − m₂)",
                        "V = 0"
                  ],
                  "ans": 0,
                  "exp": "Theo định luật bảo toàn động lượng: $m_1 v_1 + m_2 v_2 = (m_1 + m_2)V \\Rightarrow V = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$."
            },
            {
                  "q": "Một xe khối lượng m₁ = 2 kg chạy với v₁ = 3 m/s va chạm mềm vào xe m₂ = 1 kg đang đứng yên (v₂ = 0). Vận tốc của hai xe sau va chạm là:",
                  "opts": [
                        "V = (2 × 3 + 1 × 0) / (2 + 1) = 6 / 3 = 2 m/s",
                        "V = 3 m/s",
                        "V = 1,5 m/s",
                        "V = 1 m/s"
                  ],
                  "ans": 0,
                  "exp": "$V = \\frac{2 \\times 3 + 0}{2 + 1} = \\frac{6}{3} = 2\\text{ m/s}$. Động lượng hệ bảo toàn: $p_{trước} = p_{sau} = 6\\text{ kg}\\cdot\\text{m/s}$."
            },
            {
                  "q": "Khác biệt căn bản giữa va chạm hoàn toàn đàn hồi và va chạm mềm là gì?",
                  "opts": [
                        "Va chạm đàn hồi bảo toàn cả động lượng và động năng; va chạm mềm chỉ bảo toàn động lượng, động năng bị tiêu hao biến thành nhiệt và biến dạng",
                        "Va chạm đàn hồi không bảo toàn động lượng",
                        "Va chạm mềm có động năng sau va chạm lớn hơn",
                        "Cả hai đều bảo toàn động năng tuyệt đối"
                  ],
                  "ans": 0,
                  "exp": "Trong va chạm mềm, sự biến dạng dính liền làm tiêu hao năng lượng thành nhiệt nên động năng không bảo toàn ($W_{đ,sau} < W_{đ,trước}$), nhưng động lượng luôn được bảo toàn trong cả 2 loại va chạm."
            }
      ]
},
    'vatly10-b31': {
      "subject": "physics",
      "simType": "circular",
      "simOptions": {},
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 31",
      "title": "Thực hành Động học của Chuyển động tròn đều",
      "guide": "Kéo thanh trượt Bán kính quỹ đạo R và Tốc độ góc ω, bật hiển thị vectơ vận tốc v để quan sát phương, chiều và độ lớn của vận tốc dài.",
      "questions": [
            {
                  "q": "Quan sát vectơ vận tốc v (màu xanh lá) của vật chuyển động tròn đều trên mô phỏng. Phương và độ lớn của vectơ vận tốc v có đặc điểm gì?",
                  "opts": [
                        "Phương luôn tiếp tuyến với quỹ đạo tròn (thay đổi liên tục), còn độ lớn v = ω·R không đổi",
                        "Cả hướng và độ lớn đều không đổi",
                        "Vectơ v luôn hướng vào tâm quỹ đạo",
                        "Độ lớn v tỉ lệ nghịch với bán kính R"
                  ],
                  "ans": 0,
                  "exp": "Trong chuyển động tròn đều, vectơ vận tốc $\\vec{v}$ luôn có phương tiếp tuyến với đường tròn quỹ đạo và có tốc độ dài không đổi $v = \\omega R$."
            },
            {
                  "q": "Khi giữ nguyên bán kính R = 1,2 m và tăng gấp đôi tốc độ góc ω từ 2,0 rad/s lên 4,0 rad/s trên thanh trượt, chu kỳ quay T và tốc độ dài v thay đổi thế nào?",
                  "opts": [
                        "Chu kỳ T giảm một nửa (từ π s xuống π/2 s) và tốc độ dài v tăng gấp đôi (từ 2,4 m/s lên 4,8 m/s)",
                        "Cả T và v đều tăng gấp đôi",
                        "Chu kỳ T tăng gấp đôi, v giảm một nửa",
                        "Chu kỳ T không đổi"
                  ],
                  "ans": 0,
                  "exp": "Ta có $T = \\frac{2\\pi}{\\omega}$ (tỉ lệ nghịch với $\\omega$) và $v = \\omega R$ (tỉ lệ thuận với $\\omega$)."
            },
            {
                  "q": "Mối liên hệ giữa tần số f (số vòng quay trong 1 giây) và tốc độ góc ω hiển thị trên bảng công thức SI là:",
                  "opts": [
                        "ω = 2πf (rad/s)",
                        "ω = f / 2π",
                        "ω = πf²",
                        "ω = 1 / f"
                  ],
                  "ans": 0,
                  "exp": "Trong một chu kỳ $T = \\frac{1}{f}$, bán kính nối vật quét được góc $2\\pi\\text{ rad}$ nên $\\omega = \\frac{2\\pi}{T} = 2\\pi f$."
            }
      ]
},
    'vatly10-b32': {
      "subject": "physics",
      "simType": "circular",
      "simOptions": {},
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 32",
      "title": "Thực hành Lực hướng tâm và Gia tốc hướng tâm",
      "guide": "Bật hiển thị vectơ gia tốc a⃗_ht và vectơ lực hướng tâm F⃗_ht (hướng vào tâm quỹ đạo), khảo sát công thức a_ht = v² / R = ω²·R.",
      "questions": [
            {
                  "q": "Vectơ gia tốc hướng tâm a⃗_ht trong chuyển động tròn đều có phương và chiều như thế nào?",
                  "opts": [
                        "Phương trùng với bán kính đường tròn và chiều luôn hướng vào tâm quỹ đạo",
                        "Phương tiếp tuyến với quỹ đạo đường tròn",
                        "Chiều luôn hướng ra xa tâm quỹ đạo",
                        "Có phương và chiều không đổi trong không gian"
                  ],
                  "ans": 0,
                  "exp": "Gia tốc hướng tâm đặc trưng cho sự thay đổi về HƯỚNG của vectơ vận tốc, luôn có phương bán kính và chiều hướng thẳng vào tâm quay."
            },
            {
                  "q": "Một vệ tinh nhân tạo quay tròn đều quanh Trái Đất ở độ cao mà gia tốc hướng tâm bằng gia tốc trọng trường g = 8,0 m/s² trên quỹ đạo có bán kính R = 8.000 km. Tốc độ dài của vệ tinh là:",
                  "opts": [
                        "v = √(a_ht · R) = √(8,0 × 8.000.000) = 8.000 m/s (8 km/s)",
                        "v = 1.000 m/s",
                        "v = 64.000 m/s",
                        "v = 640 m/s"
                  ],
                  "ans": 0,
                  "exp": "Đổi $R = 8.000\\text{ km} = 8 \\times 10^6\\text{ m}$. Từ $a_{ht} = \\frac{v^2}{R} \\Rightarrow v = \\sqrt{a_{ht} R} = \\sqrt{8 \\times 8 \\times 10^6} = 8.000\\text{ m/s} = 8\\text{ km/s}$ (xấp xỉ vận tốc vũ trụ cấp 1)."
            },
            {
                  "q": "Lực đóng vai trò là lực hướng tâm giữ cho ô tô chuyển động tròn đều qua khúc cua trên mặt đường nằm ngang là:",
                  "opts": [
                        "Lực ma sát nghỉ giữa lốp xe và mặt đường",
                        "Trọng lực của xe",
                        "Phản lực vuông góc của mặt đường",
                        "Lực kéo của động cơ"
                  ],
                  "ans": 0,
                  "exp": "Khi xe vào cua, quán tính có xu hướng làm xe văng ra ngoài, chính lực ma sát nghỉ hướng vào tâm đường cong đóng vai trò lực hướng tâm giữ cho xe không bị trượt."
            }
      ]
},
    'vatly10-b33': {
      "subject": "physics",
      "simType": "elastic",
      "simOptions": {
            "mode": "spring_hooke",
            "k": 50,
            "m": 0.2
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 33",
      "title": "Thực hành Biến dạng của vật rắn & Định luật Hooke",
      "guide": "Treo các quả nặng m vào lò xo thẳng đứng để đo độ dãn Δl, khảo sát sự phụ thuộc tỉ lệ thuận giữa lực đàn hồi F_đh và độ dãn theo định luật Hooke.",
      "questions": [
            {
                  "q": "Nội dung Định luật Hooke (Húc) đối với lò xo biến dạng kéo hoặc nén trong giới hạn đàn hồi là:",
                  "opts": [
                        "Trong giới hạn đàn hồi, độ lớn lực đàn hồi tỉ lệ thuận với độ biến dạng của lò xo: F_đh = k·|Δl|",
                        "Lực đàn hồi tỉ lệ nghịch với độ dãn",
                        "Lực đàn hồi tỉ lệ với bình phương độ dãn",
                        "Độ dãn không phụ thuộc vào độ cứng k"
                  ],
                  "ans": 0,
                  "exp": "Định luật Hooke: Trong giới hạn đàn hồi, lực đàn hồi tỉ lệ thuận với độ biến dạng: $F_{đh} = k|\\Delta l|$, trong đó $k$ là độ cứng (N/m), $\\Delta l$ là độ biến dạng (m)."
            },
            {
                  "q": "Treo một quả nặng có khối lượng m = 200 g vào lò xo có độ cứng k = 50 N/m tại nơi có g = 10 m/s². Độ dãn Δl của lò xo ở vị trí cân bằng là:",
                  "opts": [
                        "Δl = mg / k = (0,2 × 10) / 50 = 0,04 m = 4 cm",
                        "Δl = 2 cm",
                        "Δl = 10 cm",
                        "Δl = 40 cm"
                  ],
                  "ans": 0,
                  "exp": "Tại vị trí cân bằng $F_{đh} = P \\Leftrightarrow k\\Delta l = mg \\Rightarrow \\Delta l = \\frac{0,2 \\times 10}{50} = 0,04\\text{ m} = 4\\text{ cm}$."
            },
            {
                  "q": "Nếu vượt quá \"giới hạn đàn hồi\" của lò xo thì điều gì sẽ xảy ra?",
                  "opts": [
                        "Lò xo bị biến dạng vĩnh viễn (dãn biến dạng dư) và không thể tự co về chiều dài ban đầu khi thôi tác dụng lực",
                        "Độ cứng k của lò xo tăng gấp đôi",
                        "Lực đàn hồi tăng lên vô hạn",
                        "Lò xo lập tức biến thành chất dẻo hoàn toàn"
                  ],
                  "ans": 0,
                  "exp": "Khi lực kéo vượt quá giới hạn đàn hồi, các liên kết nguyên tử trong kim loại bị trượt quá mức gây biến dạng dư vĩnh viễn, định luật Hooke không còn áp dụng được."
            }
      ]
},
    'vatly10-b34': {
      "subject": "physics",
      "simType": "elastic",
      "simOptions": {
            "mode": "fluid_pressure",
            "depth": 2,
            "density": 1000
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 10 • Bài 34",
      "title": "Thực hành Khối lượng riêng, Áp suất chất lỏng & Lực đẩy Archimedes",
      "guide": "Thả đầu dò áp kế xuống độ sâu h trong các chất lỏng khác nhau (Nước, Dầu, Thủy ngân) để đo áp suất p = p₀ + ρgh và kiểm chứng lực đẩy Archimedes.",
      "questions": [
            {
                  "q": "Áp suất thủy tĩnh p tại độ sâu h dưới mặt thoáng của một khối chất lỏng có khối lượng riêng ρ và áp suất khí quyển p₀ trên mặt thoáng là:",
                  "opts": [
                        "p = p₀ + ρ·g·h",
                        "p = p₀ − ρ·g·h",
                        "p = ρ·g / h",
                        "p = p₀ · ρ·g·h"
                  ],
                  "ans": 0,
                  "exp": "Áp suất ở độ sâu $h$ bằng tổng áp suất khí quyển ở mặt thoáng $p_0$ cộng với áp suất do trọng lượng cột chất lỏng phía trên gây ra $\\rho gh$: $p = p_0 + \\rho gh$."
            },
            {
                  "q": "Tại đáy một hồ nước sâu h = 10 m (khối lượng riêng nước ρ = 1.000 kg/m³, g = 9,8 m/s², áp suất khí quyển p₀ = 101.325 Pa), áp suất tổng cộng là:",
                  "opts": [
                        "p = 101.325 + 1.000 × 9,8 × 10 = 199.325 Pa (gần 2 atm)",
                        "p = 98.000 Pa",
                        "p = 101.325 Pa",
                        "p = 299.325 Pa"
                  ],
                  "ans": 0,
                  "exp": "$\\rho gh = 1000 \\times 9,8 \\times 10 = 98.000\\text{ Pa}$. Áp suất toàn phần: $p = 101.325 + 98.000 = 199.325\\text{ Pa} \\approx 1,97\\text{ atm}$. Cứ xuống sâu $10\\text{ m}$ nước thì áp suất tăng thêm khoảng $1\\text{ atm}$."
            },
            {
                  "q": "Một vật có khối lượng riêng ρ_v được thả vào trong chất lỏng có khối lượng riêng ρ. Điều kiện để vật nổi một phần trên mặt thoáng chất lỏng là:",
                  "opts": [
                        "ρ_v < ρ (khối lượng riêng của vật nhỏ hơn khối lượng riêng của chất lỏng)",
                        "ρ_v > ρ",
                        "ρ_v = ρ",
                        "Khối lượng của vật phải rất nhỏ"
                  ],
                  "ans": 0,
                  "exp": "Khi vật chìm hoàn toàn $F_A = \\rho g V$. Trọng lực $P = \\rho_v g V$. Để vật nổi lên mặt thoáng thì $F_A > P \\Leftrightarrow \\rho > \\rho_v$, khi nổi cân bằng trên mặt thoáng $F_{A,chìm} = P$."
            }
      ]
},
    'vatly11-b1': {
      "subject": "physics",
      "simType": "shm",
      "simOptions": {
            "A": 8,
            "omega": 3,
            "phi0": 0,
            "curveType": "all"
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 1",
      "title": "Thực hành Dao động điều hòa & Vòng tròn lượng giác",
      "guide": "Quan sát chuyển động của chất điểm P trên trục Ox tương ứng với hình chiếu của điểm M chuyển động tròn đều. Điều chỉnh biên độ A, tần số góc ω và pha ban đầu φ₀ để kiểm chứng phương trình x = A·cos(ωt + φ₀).",
      "questions": [
            {
                  "q": "Phương trình dao động điều hoà của một vật có dạng x = A·cos(ωt + φ). Đại lượng (ωt + φ) được gọi là gì?",
                  "opts": [
                        "Pha của dao động tại thời điểm t, cho biết trạng thái dao động (li độ và chiều chuyển động)",
                        "Biên độ dao động của vật",
                        "Tần số góc của dao động",
                        "Pha ban đầu của dao động tại thời điểm t = 0"
                  ],
                  "ans": 0,
                  "exp": "Đại lượng $(\\omega t + \\varphi)$ là pha dao động tại thời điểm $t$, đơn vị radian (rad), quyết định trạng thái dao động gồm vị trí (li độ $x$) và chiều chuyển động tại thời điểm đó."
            },
            {
                  "q": "Mối liên hệ giữa chu kỳ T, tần số f và tần số góc ω trong dao động điều hòa là:",
                  "opts": [
                        "ω = 2π/T = 2π·f",
                        "ω = 2π·T = 2π/f",
                        "T = 2π·ω",
                        "f = 2π·ω"
                  ],
                  "ans": 0,
                  "exp": "Theo định nghĩa, chu kỳ $T = \\frac{2\\pi}{\\omega}$, tần số $f = \\frac{1}{T} = \\frac{\\omega}{2\\pi} \\Rightarrow \\omega = \\frac{2\\pi}{T} = 2\\pi f$."
            },
            {
                  "q": "Một vật dao động điều hòa với biên độ A = 8 cm. Quãng đường vật đi được trong một chu kỳ toàn phần T là:",
                  "opts": [
                        "s = 4A = 32 cm",
                        "s = 2A = 16 cm",
                        "s = A = 8 cm",
                        "s = 0 cm"
                  ],
                  "ans": 0,
                  "exp": "Trong một chu kỳ toàn phần $T$, vật đi từ một biên sang biên đối diện ($2A$) rồi quay trở lại vị trí ban đầu ($2A$), tổng quãng đường luôn là $s = 4A = 4 \\times 8 = 32\\text{ cm}$."
            }
      ]
},
    'vatly11-b2': {
      "subject": "physics",
      "simType": "shm",
      "simOptions": {
            "A": 10,
            "omega": 4,
            "phi0": 1.047,
            "curveType": "x"
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 2",
      "title": "Thực hành Mô tả dao động điều hòa qua đồ thị li độ – thời gian",
      "guide": "Khảo sát dạng đồ thị hình sin của li độ theo thời gian x(t). Xác định chu kỳ T bằng khoảng cách thời gian giữa hai đỉnh sóng liên tiếp và biên độ A là giá trị cực đại của li độ.",
      "questions": [
            {
                  "q": "Đồ thị li độ – thời gian x(t) của một dao động điều hòa có dạng là đường gì?",
                  "opts": [
                        "Đường hình sin (hoặc cosin)",
                        "Đường thẳng đi qua gốc tọa độ",
                        "Đường parabol",
                        "Đường hypebol"
                  ],
                  "ans": 0,
                  "exp": "Hàm số $x = A\\cos(\\omega t + \\varphi)$ là hàm tuần hoàn điều hòa có đồ thị biến thiên theo thời gian là đường hình sin (sinusoidal wave)."
            },
            {
                  "q": "Khoảng thời gian ngắn nhất giữa hai lần liên tiếp vật đi qua vị trí cân bằng theo cùng một chiều là:",
                  "opts": [
                        "Một chu kỳ T",
                        "Nửa chu kỳ T/2",
                        "Một phần tư chu kỳ T/4",
                        "Hai chu kỳ 2T"
                  ],
                  "ans": 0,
                  "exp": "Để lặp lại cùng vị trí (VTCB $x=0$) và cùng chiều chuyển động (cùng chiều dương hoặc âm), vật phải thực hiện đúng 1 dao động toàn phần, tức sau thời gian $t = T$."
            },
            {
                  "q": "Tại thời điểm ban đầu t = 0, vật đang ở vị trí biên dương x = +A. Pha ban đầu φ₀ của dao động bằng:",
                  "opts": [
                        "φ₀ = 0 rad",
                        "φ₀ = π/2 rad",
                        "φ₀ = π rad",
                        "φ₀ = −π/2 rad"
                  ],
                  "ans": 0,
                  "exp": "Tại $t = 0$: $x(0) = A\\cos(\\varphi_0) = +A \\Rightarrow \\cos(\\varphi_0) = 1 \\Rightarrow \\varphi_0 = 0\\text{ rad}$."
            }
      ]
},
    'vatly11-b3': {
      "subject": "physics",
      "simType": "shm",
      "simOptions": {
            "A": 8,
            "omega": 3,
            "phi0": 0,
            "showV": true,
            "showA": true,
            "curveType": "all"
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 3",
      "title": "Thực hành Vận tốc & Gia tốc trong dao động điều hòa",
      "guide": "Bật hiển thị đồng thời cả ba đồ thị x(t), v(t), a(t). Quan sát mối quan hệ lệch pha: vận tốc sớm pha π/2 so với li độ, gia tốc sớm pha π so với li độ (ngược pha).",
      "questions": [
            {
                  "q": "Mối quan hệ về pha giữa vận tốc v và li độ x trong dao động điều hòa là:",
                  "opts": [
                        "Vận tốc v sớm pha π/2 so với li độ x",
                        "Vận tốc v trễ pha π/2 so với li độ x",
                        "Vận tốc v cùng pha với li độ x",
                        "Vận tốc v ngược pha với li độ x"
                  ],
                  "ans": 0,
                  "exp": "$v = x' = -\\omega A \\sin(\\omega t + \\varphi) = \\omega A \\cos(\\omega t + \\varphi + \\frac{\\pi}{2})$. Do đó vận tốc sớm pha $\\frac{\\pi}{2}$ so với li độ."
            },
            {
                  "q": "Khi vật đi qua vị trí cân bằng (x = 0), vận tốc và gia tốc của vật có đặc điểm gì?",
                  "opts": [
                        "Tốc độ đạt cực đại v_max = ωA, gia tốc bằng 0",
                        "Vận tốc bằng 0, gia tốc đạt cực đại a_max = ω²A",
                        "Cả vận tốc và gia tốc đều đạt cực đại",
                        "Cả vận tốc và gia tốc đều bằng 0"
                  ],
                  "ans": 0,
                  "exp": "Tại VTCB $x = 0$: gia tốc $a = -\\omega^2 x = 0$; tốc độ $|v| = \\omega\\sqrt{A^2 - x^2} = \\omega A$ đạt cực đại."
            },
            {
                  "q": "Công thức độc lập thời gian liên hệ giữa li độ x, vận tốc v, tần số góc ω và biên độ A là:",
                  "opts": [
                        "A² = x² + (v/ω)²",
                        "A = x + v/ω",
                        "A² = x² + (ω/v)²",
                        "A² = x² + (v·ω)²"
                  ],
                  "ans": 0,
                  "exp": "Do $\\cos^2(\\omega t + \\varphi) + \\sin^2(\\omega t + \\varphi) = 1 \\Rightarrow \\left(\\frac{x}{A}\\right)^2 + \\left(\\frac{v}{\\omega A}\\right)^2 = 1 \\Rightarrow A^2 = x^2 + \\frac{v^2}{\\omega^2}$."
            }
      ]
},
    'vatly11-b4': {
      "subject": "physics",
      "simType": "shm",
      "simOptions": {
            "A": 6,
            "omega": 5,
            "phi0": 1.57,
            "curveType": "all"
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 4",
      "title": "Thực hành Luyện tập & Giải bài toán dao động điều hòa",
      "guide": "Sử dụng hệ thống mô phỏng để giải các bài toán xác định thời điểm, quãng đường, vận tốc tức thời và viết phương trình dao động từ các điều kiện ban đầu.",
      "questions": [
            {
                  "q": "Một chất điểm dao động điều hòa có chu kỳ T = 2 s. Thời gian ngắn nhất để chất điểm đi từ vị trí x = 0 đến vị trí x = A/2 là:",
                  "opts": [
                        "Δt = T/12 = 1/6 s",
                        "Δt = T/6 = 1/3 s",
                        "Δt = T/8 = 1/4 s",
                        "Δt = T/4 = 1/2 s"
                  ],
                  "ans": 0,
                  "exp": "Góc quét trên vòng tròn lượng giác từ VTCB đến $x = A/2$ là $\\Delta\\alpha = \\arcsin(1/2) = \\frac{\\pi}{6}$. Do đó thời gian $\\Delta t = \\frac{\\Delta\\alpha}{\\omega} = \\frac{\\pi/6}{2\\pi/T} = \\frac{T}{12} = \\frac{2}{12} = \\frac{1}{6}\\text{ s}$."
            },
            {
                  "q": "Chất điểm dao động với A = 5 cm, f = 2 Hz. Tốc độ cực đại v_max của chất điểm là:",
                  "opts": [
                        "v_max = 20π cm/s ≈ 62,8 cm/s",
                        "v_max = 10π cm/s",
                        "v_max = 10 cm/s",
                        "v_max = 40π cm/s"
                  ],
                  "ans": 0,
                  "exp": "$\\omega = 2\\pi f = 4\\pi\\text{ rad/s}$. $v_{max} = \\omega A = 4\\pi \\times 5 = 20\\pi\\text{ cm/s} \\approx 62{,}83\\text{ cm/s}$."
            },
            {
                  "q": "Gia tốc cực đại của vật dao động điều hòa đạt được khi vật ở vị trí nào?",
                  "opts": [
                        "Ở hai vị trí biên (x = ±A), độ lớn a_max = ω²A",
                        "Ở vị trí cân bằng (x = 0)",
                        "Ở vị trí x = A/2",
                        "Không phụ thuộc vào vị trí của vật"
                  ],
                  "ans": 0,
                  "exp": "Độ lớn gia tốc $|a| = \\omega^2 |x|$. Khi vật ở vị trí biên $x = \\pm A$, gia tốc có độ lớn cực đại $a_{max} = \\omega^2 A$ và luôn hướng về vị trí cân bằng."
            }
      ]
},
    'vatly11-b5': {
      "subject": "physics",
      "simType": "spring",
      "simOptions": {
            "m": 0.2,
            "k": 50,
            "A": 8,
            "showEnergy": true
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 5",
      "title": "Thực hành Động năng, Thế năng & Bảo toàn cơ năng trong dao động",
      "guide": "Kéo con lắc lò xo và quan sát biểu đồ cột cơ năng. Khi con lắc qua VTCB, động năng đạt cực đại và thế năng bằng 0; khi ở vị trí biên, thế năng đạt cực đại và động năng bằng 0.",
      "questions": [
            {
                  "q": "Công thức tính thế năng W_t của con lắc lò xo có độ cứng k tại li độ x là:",
                  "opts": [
                        "W_t = 1/2 · k · x²",
                        "W_t = k · x²",
                        "W_t = 1/2 · k · x",
                        "W_t = 1/2 · m · x²"
                  ],
                  "ans": 0,
                  "exp": "Thế năng đàn hồi của lò xo tại li độ $x$ tính bằng $W_t = \\frac{1}{2} k x^2$."
            },
            {
                  "q": "Trong quá trình dao động điều hòa không ma sát, đại lượng nào sau đây là KHÔNG ĐỔI theo thời gian?",
                  "opts": [
                        "Cơ năng toàn phần W = W_đ + W_t = 1/2 · k · A²",
                        "Động năng W_đ",
                        "Thế năng W_t",
                        "Vận tốc v của vật"
                  ],
                  "ans": 0,
                  "exp": "Khi bỏ qua mọi lực cản và ma sát, cơ năng toàn phần của hệ được bảo toàn: $W = W_đ + W_t = \\frac{1}{2}kA^2 = \\frac{1}{2}m\\omega^2 A^2 = \\text{hằng số}$."
            },
            {
                  "q": "Vị trí mà động năng bằng 3 lần thế năng (W_đ = 3W_t) là:",
                  "opts": [
                        "x = ± A/2",
                        "x = ± A/√2",
                        "x = ± A√3/2",
                        "x = 0"
                  ],
                  "ans": 0,
                  "exp": "$W = W_đ + W_t = 3W_t + W_t = 4W_t \\Rightarrow \\frac{1}{2}kA^2 = 4\\left(\\frac{1}{2}kx^2\\right) \\Rightarrow x^2 = \\frac{A^2}{4} \\Rightarrow x = \\pm \\frac{A}{2}$."
            }
      ]
},
    'vatly11-b6': {
      "subject": "physics",
      "simType": "spring",
      "simOptions": {
            "m": 0.2,
            "k": 50,
            "A": 10,
            "gamma": 0.05,
            "showEnergy": true
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 6",
      "title": "Thực hành Dao động tắt dần, Cưỡng bức & Hiện tượng cộng hưởng",
      "guide": "Tăng hệ số cản môi trường gamma để quan sát dao động tắt dần (biên độ giảm dần theo thời gian). Khảo sát hiện tượng cộng hưởng khi tần số ngoại lực cưỡng bức f bằng tần số riêng f₀.",
      "questions": [
            {
                  "q": "Nguyên nhân trực tiếp làm cho dao động của vật bị tắt dần theo thời gian là do:",
                  "opts": [
                        "Lực cản của môi trường và lực ma sát làm tiêu hao cơ năng chuyển thành nhiệt năng",
                        "Khối lượng của vật tăng dần theo thời gian",
                        "Độ cứng của lò xo bị suy giảm",
                        "Gia tốc trọng trường thay đổi"
                  ],
                  "ans": 0,
                  "exp": "Lực cản và lực ma sát sinh công âm làm cơ năng của hệ giảm dần theo thời gian và chuyển hóa thành nội năng (nhiệt lượng), dẫn đến biên độ dao động giảm dần."
            },
            {
                  "q": "Hiện tượng cộng hưởng cơ xảy ra khi nào?",
                  "opts": [
                        "Tần số của ngoại lực cưỡng bức f xấp xỉ bằng tần số dao động riêng f₀ của hệ",
                        "Biên độ của ngoại lực cưỡng bức rất lớn",
                        "Hệ số ma sát của môi trường triệt tiêu",
                        "Chu kỳ ngoại lực cưỡng bức gấp đôi chu kỳ riêng"
                  ],
                  "ans": 0,
                  "exp": "Hiện tượng cộng hưởng xảy ra khi tần số của lực cưỡng bức bằng tần số riêng của hệ dao động ($f = f_0$), khi đó biên độ dao động cưỡng bức đạt giá trị cực đại."
            },
            {
                  "q": "Ứng dụng nào sau đây tận dụng hiện tượng cộng hưởng có lợi?",
                  "opts": [
                        "Hộp cộng hưởng của đàn ghita, vĩ cầm giúp âm thanh phát ra to hơn",
                        "Thiết kế nhịp bước chân của đoàn quân khi hành quân qua cầu tre",
                        "Giảm chấn động khung xe khi đi trên đường gồ ghề",
                        "Bộ giảm chấn chống động đất của tòa nhà chọc trời"
                  ],
                  "ans": 0,
                  "exp": "Hộp đàn ghita, violin hoạt động như một hộp cộng hưởng âm, giúp khuếch đại cường độ âm thanh do dây đàn phát ra. Ngược lại, bước đều qua cầu dễ gây sập cầu do cộng hưởng có hại."
            }
      ]
},
    'vatly11-b7': {
      "subject": "physics",
      "simType": "pendulum",
      "simOptions": {
            "l": 1,
            "g": 9.8,
            "theta0": 30,
            "compareMode": true
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 7",
      "title": "Thực hành Bài tập chuyển hóa năng lượng & Con lắc đơn",
      "guide": "Khảo sát sự chuyển hóa qua lại giữa thế năng trọng trường W_t = mgl(1 - cosα) và động năng W_đ = 1/2·m·v² của con lắc đơn. So sánh nghiệm gần đúng góc nhỏ với nghiệm chính xác RK4.",
      "questions": [
            {
                  "q": "Công thức tính chu kỳ dao động điều hòa của con lắc đơn chiều dài l ở nơi có gia tốc trọng trường g (khi góc lệch nhỏ α₀ < 10°) là:",
                  "opts": [
                        "T = 2π · √(l / g)",
                        "T = 2π · √(g / l)",
                        "T = 2π · √(m / k)",
                        "T = 1/(2π) · √(l / g)"
                  ],
                  "ans": 0,
                  "exp": "Với góc lệch nhỏ $\\sin\\alpha \\approx \\alpha$, con lắc đơn dao động điều hòa với tần số góc $\\omega = \\sqrt{\\frac{g}{l}}$ và chu kỳ $T = 2\\pi\\sqrt{\\frac{l}{g}}$."
            },
            {
                  "q": "Tại vị trí có góc lệch cực đại α₀, thế năng và động năng của con lắc đơn bằng bao nhiêu?",
                  "opts": [
                        "Thế năng cực đại W_t = mgl(1 − cosα₀), động năng bằng 0",
                        "Động năng cực đại, thế năng bằng 0",
                        "Thế năng và động năng bằng nhau",
                        "Cơ năng bằng 0"
                  ],
                  "ans": 0,
                  "exp": "Tại vị trí biên $\\alpha = \\alpha_0$, vận tốc $v = 0$ nên động năng $W_đ = 0$. Toàn bộ cơ năng chuyển thành thế năng cực đại $W_t = mgh_{max} = mgl(1 - \\cos\\alpha_0)$."
            },
            {
                  "q": "Khi chiều dài dây treo của con lắc đơn tăng lên gấp 4 lần thì chu kỳ dao động điều hòa của nó sẽ:",
                  "opts": [
                        "Tăng lên 2 lần",
                        "Tăng lên 4 lần",
                        "Giảm đi 2 lần",
                        "Không đổi"
                  ],
                  "ans": 0,
                  "exp": "$T = 2\\pi\\sqrt{\\frac{l}{g}}$. Khi $l' = 4l \\Rightarrow T' = 2\\pi\\sqrt{\\frac{4l}{g}} = 2 \\times 2\\pi\\sqrt{\\frac{l}{g}} = 2T$."
            }
      ]
},
    'vatly11-b8': {
      "subject": "physics",
      "simType": "wave",
      "simOptions": {
            "A": 3,
            "f": 1.5,
            "v": 4,
            "waveType": "transverse"
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 8",
      "title": "Thực hành Mô tả sóng & Sự truyền sóng cơ",
      "guide": "Khảo sát bước sóng λ, chu kỳ T, tần số f và tốc độ truyền sóng v. Nhận diện sự khác biệt giữa tốc độ truyền pha dao động v và vận tốc dao động của từng phần tử môi trường.",
      "questions": [
            {
                  "q": "Bước sóng λ được định nghĩa là gì?",
                  "opts": [
                        "Quãng đường mà sóng truyền đi được trong một chu kỳ dao động T",
                        "Khoảng cách giữa hai điểm dao động ngược pha gần nhau nhất",
                        "Quãng đường sóng truyền đi trong 1 giây",
                        "Biên độ lớn nhất của sóng"
                  ],
                  "ans": 0,
                  "exp": "Bước sóng $\\lambda$ là quãng đường sóng truyền đi được trong một chu kỳ: $\\lambda = v \\cdot T = \\frac{v}{f}$, đồng thời cũng là khoảng cách giữa hai phần tử gần nhau nhất trên cùng phương truyền dao động cùng pha."
            },
            {
                  "q": "Một sóng cơ truyền trên mặt nước với tần số f = 50 Hz và tốc độ v = 2 m/s. Bước sóng λ của sóng này là:",
                  "opts": [
                        "λ = v / f = 2 / 50 = 0,04 m = 4 cm",
                        "λ = 100 cm",
                        "λ = 25 cm",
                        "λ = 10 cm"
                  ],
                  "ans": 0,
                  "exp": "$\\lambda = \\frac{v}{f} = \\frac{2\\text{ m/s}}{50\\text{ Hz}} = 0{,}04\\text{ m} = 4\\text{ cm}$."
            },
            {
                  "q": "Khi sóng cơ truyền qua các môi trường khác nhau (ví dụ từ không khí vào nước), đại lượng nào KHÔNG THAY ĐỔI?",
                  "opts": [
                        "Tần số f (và chu kỳ T)",
                        "Tốc độ truyền sóng v",
                        "Bước sóng λ",
                        "Biên độ sóng A"
                  ],
                  "ans": 0,
                  "exp": "Tần số $f$ do nguồn phát quy định nên không đổi khi truyền qua các môi trường khác nhau. Tốc độ $v$ phụ thuộc môi trường nên bước sóng $\\lambda = v/f$ sẽ thay đổi tương ứng."
            }
      ]
},
    'vatly11-b9': {
      "subject": "physics",
      "simType": "wave",
      "simOptions": {
            "A": 3,
            "f": 2,
            "v": 5,
            "waveType": "longitudinal"
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 9",
      "title": "Thực hành Sóng ngang, Sóng dọc & Truyền năng lượng",
      "guide": "Chuyển đổi giữa chế độ sóng ngang (phần tử dao động vuông góc phương truyền sóng) và sóng dọc (phần tử dao động trùng phương truyền sóng). Quan sát các vùng nén và giãn của môi trường.",
      "questions": [
            {
                  "q": "Đặc điểm phân biệt giữa sóng ngang và sóng dọc là:",
                  "opts": [
                        "Phương dao động của các phần tử môi trường so với phương truyền sóng",
                        "Tốc độ truyền sóng nhanh hay chậm",
                        "Tần số dao động của nguồn sóng",
                        "Biên độ của sóng"
                  ],
                  "ans": 0,
                  "exp": "Sóng ngang có phương dao động vuông góc với phương truyền sóng. Sóng dọc có phương dao động trùng với phương truyền sóng."
            },
            {
                  "q": "Sóng âm truyền trong chất khí và chất lỏng là loại sóng gì?",
                  "opts": [
                        "Sóng dọc (gồm các vùng môi trường bị nén và giãn liên tiếp)",
                        "Sóng ngang",
                        "Sóng điện từ",
                        "Sóng dừng"
                  ],
                  "ans": 0,
                  "exp": "Trong chất lỏng và chất khí, lực đàn hồi chống biến dạng trượt bằng 0 nên sóng cơ chỉ có thể truyền dưới dạng sóng dọc (biến dạng nén – giãn tích tụ áp suất)."
            },
            {
                  "q": "Quá trình lan truyền của sóng cơ trong không gian thực chất là quá trình truyền:",
                  "opts": [
                        "Pha dao động và năng lượng dao động, các phần tử môi trường không chuyển dời theo sóng",
                        "Các phần tử vật chất của môi trường đi xa",
                        "Khối lượng vật chất đi từ nguồn ra ngoài",
                        "Điện tích và từ trường"
                  ],
                  "ans": 0,
                  "exp": "Sóng cơ chỉ truyền trạng thái dao động (pha) và năng lượng; các phần tử môi trường chỉ dao động quanh vị trí cân bằng cố định của chúng, không bị cuốn trôi đi theo sóng."
            }
      ]
},
    'vatly11-b10': {
      "subject": "physics",
      "simType": "wave_acoustics",
      "simOptions": {
            "mode": "sound_tube",
            "tuningFreq": 440,
            "timeDiv": 0.5
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 10",
      "title": "Thực hành Đo tần số sóng âm bằng dao động kí điện tử",
      "guide": "Sử dụng dao động kí ảo để hiển thị tín hiệu âm thanh thu được từ âm thoa. Chỉnh nút Time/Div, đếm số ô trên màn hình cho một chu kỳ T để tính tần số âm f = 1/T.",
      "questions": [
            {
                  "q": "Trên màn hình dao động kí với núm quét thời gian TIME/DIV = 0,5 ms/div, một chu kỳ dao động hoàn chỉnh của tín hiệu chiếm 4,54 ô ngang. Tần số của sóng âm là:",
                  "opts": [
                        "f = 1 / (4,54 × 0,5 × 10⁻³) ≈ 440 Hz (Nốt La chuẩn A4)",
                        "f = 1000 Hz",
                        "f = 220 Hz",
                        "f = 512 Hz"
                  ],
                  "ans": 0,
                  "exp": "Chu kỳ $T = 4{,}54\\text{ div} \\times 0{,}5\\text{ ms/div} = 2{,}27\\text{ ms} = 2{,}27 \\times 10^{-3}\\text{ s}$. Tần số $f = \\frac{1}{T} = \\frac{1}{2{,}27 \\times 10^{-3}} \\approx 440\\text{ Hz}$."
            },
            {
                  "q": "Âm nghe được (âm thanh thông thường mà tai người bình thường cảm thụ được) có dải tần số nằm trong khoảng nào?",
                  "opts": [
                        "Từ 16 Hz đến 20.000 Hz",
                        "Dưới 16 Hz (Hạ âm)",
                        "Trên 20.000 Hz (Siêu âm)",
                        "Từ 100 Hz đến 1.000 Hz"
                  ],
                  "ans": 0,
                  "exp": "Tai người có màng nhĩ cảm thụ được sóng âm cơ học trong dải tần số từ khoảng $16\\text{ Hz}$ (ngưỡng trầm) đến $20.000\\text{ Hz}$ (ngưỡng bổng)."
            },
            {
                  "q": "Để giảm sai số ngẫu nhiên trong phép đo tần số sóng âm bằng dao động kí, phương pháp thực nghiệm tốt nhất là:",
                  "opts": [
                        "Đo thời gian của nhiều chu kỳ liên tiếp (ví dụ 5 chu kỳ) rồi chia trung bình",
                        "Chỉ đo 1 chu kỳ duy nhất",
                        "Tăng âm lượng âm thoa thật lớn",
                        "Thay đổi vị trí micro liên tục trong khi đo"
                  ],
                  "ans": 0,
                  "exp": "Đo khoảng thời gian ứng với nhiều chu kỳ $n\\cdot T$ trên màn hình rồi chia cho $n$ giúp giảm thiểu sai số đọc vạch chia của mắt và sai số lượng tử hóa ô lưới dao động kí."
            }
      ]
},
    'vatly11-b11': {
      "subject": "physics",
      "simType": "wave_acoustics",
      "simOptions": {
            "mode": "em_spectrum",
            "logLambda": -6.5
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 11",
      "title": "Thực hành Khám phá Thang sóng điện từ",
      "guide": "Kéo thanh trượt bước sóng để khảo sát toàn bộ dải phổ điện từ: từ tia gamma, tia X, tử ngoại, ánh sáng nhìn thấy, hồng ngoại, vi ba đến sóng vô tuyến. Tra cứu tần số, năng lượng photon và ứng dụng đời sống.",
      "questions": [
            {
                  "q": "Tốc độ truyền của tất cả các sóng điện từ trong chân không đều có giá trị bằng:",
                  "opts": [
                        "c = 3,00 × 10⁸ m/s (tốc độ ánh sáng)",
                        "v = 340 m/s",
                        "v = 1,5 × 10⁸ m/s",
                        "Phụ thuộc vào bước sóng của từng tia"
                  ],
                  "ans": 0,
                  "exp": "Trong chân không, mọi sóng điện từ bất kể bước sóng (từ sóng vô tuyến đến tia gamma) đều lan truyền với cùng một tốc độ $c = 3 \\times 10^8\\text{ m/s}$."
            },
            {
                  "q": "Dải bước sóng của vùng ánh sáng mà mắt người có thể nhìn thấy được (ánh sáng khả kiến) nằm trong khoảng:",
                  "opts": [
                        "Khoảng từ 380 nm (ánh sáng tím) đến 760 nm (ánh sáng đỏ)",
                        "Từ 1 mm đến 1 m",
                        "Từ 10 nm đến 380 nm",
                        "Dưới 1 nm"
                  ],
                  "ans": 0,
                  "exp": "Vùng ánh sáng nhìn thấy có bước sóng trong chân không khoảng từ $0{,}38\\mu\\text{m}$ ($380\\text{ nm}$) đến $0{,}76\\mu\\text{m}$ ($760\\text{ nm}$)."
            },
            {
                  "q": "Bức xạ điện từ có tác dụng nhiệt rất mạnh, được ứng dụng rộng rãi trong các thiết bị điều khiển từ xa (remote) và sưởi ấm là:",
                  "opts": [
                        "Tia hồng ngoại (Infrared - IR)",
                        "Tia tử ngoại (Ultraviolet - UV)",
                        "Tia X",
                        "Tia Gamma"
                  ],
                  "ans": 0,
                  "exp": "Tia hồng ngoại là bức xạ có bước sóng lớn hơn ánh sáng đỏ, tác dụng nổi bật nhất là tác dụng nhiệt, dùng trong đèn sưởi, camera tầm nhiệt và thiết bị điều khiển từ xa gia dụng."
            }
      ]
},
    'vatly11-b12': {
      "subject": "physics",
      "simType": "wave_acoustics",
      "simOptions": {
            "mode": "interference",
            "d": 24,
            "lambda": 4,
            "freq": 10
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 12",
      "title": "Thực hành Giao thoa hai nguồn sóng kết hợp",
      "guide": "Khảo sát giao thoa của 2 nguồn sóng nước cùng pha. Kéo điểm thử M để quan sát hiệu đường đi d₂ − d₁ và biên độ dao động tổng hợp A_M. Quan sát các vân cực đại (màu đỏ) và cực tiểu (màu xanh).",
      "questions": [
            {
                  "q": "Điều kiện để hai nguồn sóng là hai nguồn kết hợp có thể gây ra hiện tượng giao thoa ổn định là:",
                  "opts": [
                        "Cùng tần số và có hiệu số pha không đổi theo thời gian",
                        "Cùng biên độ và truyền cùng tốc độ",
                        "Cùng bước sóng nhưng khác tần số",
                        "Có phương dao động vuông góc với nhau"
                  ],
                  "ans": 0,
                  "exp": "Hai nguồn kết hợp là hai nguồn dao động cùng phương, cùng tần số và có độ lệch pha không đổi theo thời gian ($\\Delta\\varphi = \\text{const}$)."
            },
            {
                  "q": "Trong hiện tượng giao thoa sóng nước với 2 nguồn kết hợp đồng pha bước sóng λ, điều kiện để điểm M dao động với biên độ CỰC ĐẠI là:",
                  "opts": [
                        "d₂ − d₁ = k·λ (với k = 0, ±1, ±2, ...)",
                        "d₂ − d₁ = (k + 0,5)·λ",
                        "d₂ − d₁ = (2k + 1)·λ/4",
                        "d₂ + d₁ = k·λ"
                  ],
                  "ans": 0,
                  "exp": "Hai sóng gửi đến $M$ cùng pha khi hiệu đường đi bằng một số nguyên lần bước sóng: $d_2 - d_1 = k\\lambda$, khi đó biên độ tổng hợp cực đại $A_M = A_1 + A_2 = 2A$."
            },
            {
                  "q": "Khoảng cách giữa hai cực đại giao thoa liên tiếp đo dọc trên đoạn thẳng nối hai nguồn sóng S₁S₂ là:",
                  "opts": [
                        "λ / 2",
                        "λ",
                        "2λ",
                        "λ / 4"
                  ],
                  "ans": 0,
                  "exp": "Trên đoạn nối hai nguồn $S_1S_2$, hệ vân giao thoa tạo thành các điểm cực đại cách đều nhau một khoảng bằng nửa bước sóng: $\\Delta d = \\frac{\\lambda}{2}$."
            }
      ]
},
    'vatly11-b13': {
      "subject": "physics",
      "simType": "wave_acoustics",
      "simOptions": {
            "mode": "standing_wave",
            "harmonics": 3,
            "stringL": 1.2
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 13",
      "title": "Thực hành Sóng dừng trên sợi dây đàn hồi",
      "guide": "Thay đổi số bó sóng k (harmonics) từ 1 đến 6 và chuyển đổi điều kiện biên (2 đầu cố định hoặc 1 đầu tự do). Nhận diện các điểm nút (đứng yên) và điểm bụng (dao động cực đại biên độ 2A).",
      "questions": [
            {
                  "q": "Điều kiện để có sóng dừng trên một sợi dây có chiều dài L với hai đầu cố định là:",
                  "opts": [
                        "L = k · (λ / 2) với k = 1, 2, 3, ... (chiều dài dây bằng số nguyên lần nửa bước sóng)",
                        "L = (2k + 1) · (λ / 4)",
                        "L = k · λ",
                        "L = (2k + 1) · (λ / 2)"
                  ],
                  "ans": 0,
                  "exp": "Với 2 đầu cố định, hai đầu phải là 2 nút sóng, do đó chiều dài dây phải chứa nguyên lần nửa bước sóng: $L = k\\frac{\\lambda}{2}$ ($k$ chính là số bó sóng)."
            },
            {
                  "q": "Khoảng cách giữa một nút sóng và một bụng sóng liền kề nhau trên sợi dây có sóng dừng là:",
                  "opts": [
                        "λ / 4",
                        "λ / 2",
                        "λ",
                        "3λ / 4"
                  ],
                  "ans": 0,
                  "exp": "Khoảng cách giữa hai nút liên tiếp (hoặc hai bụng liên tiếp) là $\\lambda/2$. Khoảng cách từ một nút đến bụng liền kề bằng một nửa khoảng đó, tức $\\frac{\\lambda}{4}$."
            },
            {
                  "q": "Một sợi dây đàn hồi dài L = 1,2 m hai đầu cố định đang có sóng dừng với 3 bó sóng (k = 3). Bước sóng λ trên dây là:",
                  "opts": [
                        "λ = 2L / k = (2 × 1,2) / 3 = 0,8 m",
                        "λ = 0,4 m",
                        "λ = 1,2 m",
                        "λ = 2,4 m"
                  ],
                  "ans": 0,
                  "exp": "$L = k\\frac{\\lambda}{2} \\Rightarrow \\lambda = \\frac{2L}{k} = \\frac{2 \\times 1{,}2}{3} = 0{,}8\\text{ m} = 80\\text{ cm}$."
            }
      ]
},
    'vatly11-b14': {
      "subject": "physics",
      "simType": "wave_acoustics",
      "simOptions": {
            "mode": "interference",
            "d": 20,
            "lambda": 3
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 14",
      "title": "Thực hành Luyện tập & Giải bài toán về sóng cơ",
      "guide": "Sử dụng hệ thống mô phỏng để giải quyết các bài toán tổng hợp về độ lệch pha giữa hai điểm, số cực đại cực tiểu giao thoa trên đoạn S₁S₂ và phương trình sóng truyền.",
      "questions": [
            {
                  "q": "Hai điểm M và N nằm trên cùng một phương truyền sóng cách nhau một khoảng d. Độ lệch pha giữa M và N là:",
                  "opts": [
                        "Δφ = 2π·d / λ",
                        "Δφ = π·d / λ",
                        "Δφ = 2π·λ / d",
                        "Δφ = ω·d / v²"
                  ],
                  "ans": 0,
                  "exp": "Độ lệch pha do sóng truyền từ $M$ đến $N$ chậm hơn một khoảng thời gian $\\Delta t = d/v$ là $\\Delta\\varphi = \\omega\\Delta t = \\frac{2\\pi}{T}\\frac{d}{v} = \\frac{2\\pi d}{\\lambda}$."
            },
            {
                  "q": "Hai điểm trên cùng phương truyền sóng dao động NGƯỢC PHA nhau khi khoảng cách giữa chúng thỏa mãn:",
                  "opts": [
                        "d = (2k + 1) · (λ / 2) với k nguyên (số bán nguyên lần bước sóng)",
                        "d = k · λ",
                        "d = (2k + 1) · (λ / 4)",
                        "d = k · (λ / 2)"
                  ],
                  "ans": 0,
                  "exp": "$\\Delta\\varphi = \\frac{2\\pi d}{\\lambda} = (2k+1)\\pi \\Rightarrow d = (2k+1)\\frac{\\lambda}{2}$, tức khoảng cách là một số lẻ lần nửa bước sóng."
            },
            {
                  "q": "Hai nguồn sóng kết hợp cùng pha cách nhau d = 20 cm có bước sóng λ = 3 cm. Số đường cực đại giao thoa giữa hai nguồn là:",
                  "opts": [
                        "13 đường (k = −6 đến +6)",
                        "7 đường",
                        "14 đường",
                        "11 đường"
                  ],
                  "ans": 0,
                  "exp": "Số cực đại thỏa mãn: $-\\frac{d}{\\lambda} < k < \\frac{d}{\\lambda} \\Rightarrow -\\frac{20}{3} < k < \\frac{20}{3} \\Rightarrow -6{,}67 < k < 6{,}67 \\Rightarrow k \\in \\{-6, -5, \\dots, 0, \\dots, 6\\}$ (gồm 13 giá trị)."
            }
      ]
},
    'vatly11-b15': {
      "subject": "physics",
      "simType": "wave_acoustics",
      "simOptions": {
            "mode": "sound_tube",
            "tuningFreq": 512,
            "timeDiv": 0.5
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 15",
      "title": "Thực hành Đo tốc độ truyền âm bằng ống cộng hưởng",
      "guide": "Điều chỉnh mực nước trong ống cộng hưởng để tìm hai vị trí cộng hưởng âm to nhất liên tiếp L₁ và L₂. Áp dụng công thức L₂ − L₁ = λ/2 để suy ra bước sóng λ và tốc độ âm v = λ·f.",
      "questions": [
            {
                  "q": "Tại miệng ống hở của ống cộng hưởng, sóng âm phản xạ tạo thành phần tử sóng nào?",
                  "opts": [
                        "Bụng sóng âm (dao động áp suất cực đại)",
                        "Nút sóng âm",
                        "Không có sóng phản xạ",
                        "Sóng bị hấp thụ hoàn toàn"
                  ],
                  "ans": 0,
                  "exp": "Tại đầu hở của ống khí, không khí tự do dao động tiếp giáp môi trường ngoài nên hình thành một bụng sóng; tại mặt nước (đáy kín) hình thành một nút sóng."
            },
            {
                  "q": "Trong thí nghiệm với âm thoa f = 512 Hz, ghi nhận hai vị trí cộng hưởng liên tiếp có chiều dài cột khí L₁ = 16,5 cm và L₂ = 49,5 cm. Tốc độ truyền âm v đo được là:",
                  "opts": [
                        "v = 2·(L₂ − L₁)·f = 2·(0,33)·512 ≈ 338 m/s",
                        "v = 170 m/s",
                        "v = 512 m/s",
                        "v = 676 m/s"
                  ],
                  "ans": 0,
                  "exp": "$\\frac{\\lambda}{2} = L_2 - L_1 = 49{,}5 - 16{,}5 = 33\\text{ cm} = 0{,}33\\text{ m} \\Rightarrow \\lambda = 0{,}66\\text{ m}$. Vận tốc truyền âm: $v = \\lambda f = 0{,}66 \\times 512 \\approx 337{,}9\\text{ m/s}$."
            },
            {
                  "q": "Tốc độ truyền âm trong không khí phụ thuộc chủ yếu vào yếu tố nào sau đây?",
                  "opts": [
                        "Nhiệt độ của không khí (nhiệt độ càng cao tốc độ càng lớn)",
                        "Tần số âm thoa kích thích",
                        "Biên độ gõ của âm thoa",
                        "Đường kính tiết diện ống nghiệm"
                  ],
                  "ans": 0,
                  "exp": "Tốc độ âm trong chất khí phụ thuộc căn bậc hai của nhiệt độ nhiệt động $v \\propto \\sqrt{T}$, tăng khoảng $0{,}6\\text{ m/s}$ cho mỗi độ C tăng thêm, không phụ thuộc vào tần số hay biên độ âm."
            }
      ]
},
    'vatly11-b16': {
      "subject": "physics",
      "simType": "electrostatics",
      "simOptions": {
            "mode": "coulomb",
            "q1": 2,
            "q2": -3,
            "rCm": 8
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 16",
      "title": "Thực hành Định luật Coulomb & Lực tương tác tĩnh điện",
      "guide": "Thay đổi độ lớn và dấu của hai điện tích q₁, q₂ cùng khoảng cách r. Quan sát độ lớn lực tương tác F và phương chiều của hai vectơ lực tương tác F⃗₁₂ và F⃗₂₁.",
      "questions": [
            {
                  "q": "Nội dung Định luật Coulomb đối với lực tương tác tĩnh điện giữa hai điện tích điểm đặt trong chân không là:",
                  "opts": [
                        "Tỉ lệ thuận với tích độ lớn hai điện tích và tỉ lệ nghịch với bình phương khoảng cách giữa chúng: F = k·|q₁q₂| / r²",
                        "Tỉ lệ thuận với khoảng cách r",
                        "Tỉ lệ nghịch với tích hai điện tích",
                        "Tỉ lệ nghịch với khoảng cách r (bậc 1)"
                  ],
                  "ans": 0,
                  "exp": "Định luật Coulomb: $F = k\\frac{|q_1 q_2|}{r^2}$, với $k = 8{,}99 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$. Lực hút nếu $q_1 q_2 < 0$, lực đẩy nếu $q_1 q_2 > 0$."
            },
            {
                  "q": "Nếu giữ nguyên độ lớn hai điện tích nhưng tăng khoảng cách giữa chúng lên gấp 3 lần thì lực tương tác Coulomb sẽ:",
                  "opts": [
                        "Giảm đi 9 lần",
                        "Giảm đi 3 lần",
                        "Tăng lên 3 lần",
                        "Tăng lên 9 lần"
                  ],
                  "ans": 0,
                  "exp": "Lực $F \\propto \\frac{1}{r^2}$. Khi $r' = 3r \\Rightarrow F' = \\frac{F}{3^2} = \\frac{F}{9}$, tức giảm 9 lần."
            },
            {
                  "q": "Hai điện tích điểm q₁ = +2 μC và q₂ = −2 μC đặt cách nhau r = 10 cm trong không khí. Lực tương tác giữa chúng là:",
                  "opts": [
                        "Lực hút có độ lớn F = 3,6 N",
                        "Lực đẩy có độ lớn F = 3,6 N",
                        "Lực hút có độ lớn F = 36 N",
                        "Lực đẩy có độ lớn F = 0,36 N"
                  ],
                  "ans": 0,
                  "exp": "Hai điện tích trái dấu nên hút nhau. Độ lớn: $F = 9 \\times 10^9 \\frac{|2 \\times 10^{-6} \\times (-2 \\times 10^{-6})|}{(0{,}1)^2} = \\frac{36 \\times 10^{-3}}{0{,}01} = 3{,}6\\text{ N}$."
            }
      ]
},
    'vatly11-b17': {
      "subject": "physics",
      "simType": "electrostatics",
      "simOptions": {
            "mode": "field_lines"
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 17",
      "title": "Thực hành Khái niệm Điện trường & Đường sức điện",
      "guide": "Khảo sát dạng đường sức điện của điện tích điểm dương, âm, lưỡng cực điện và hai điện tích cùng dấu. Quan sát mật độ đường sức và phương của vectơ cường độ điện trường E⃗.",
      "questions": [
            {
                  "q": "Vectơ cường độ điện trường E⃗ do một điện tích điểm Q > 0 gây ra tại điểm M cách nó một khoảng r có hướng như thế nào?",
                  "opts": [
                        "Hướng ra xa điện tích Q",
                        "Hướng về phía điện tích Q",
                        "Tiếp tuyến với đường tròn tâm Q",
                        "Có hướng bất kỳ"
                  ],
                  "ans": 0,
                  "exp": "Điện trường do điện tích dương gây ra luôn hướng ra xa điện tích: $\\vec{E} = k\\frac{Q}{r^2}\\vec{e}_r$. Do điện tích âm gây ra thì hướng về phía điện tích âm."
            },
            {
                  "q": "Đặc điểm nào sau đây KHÔNG PHẢI là tính chất của đường sức điện trường tĩnh?",
                  "opts": [
                        "Các đường sức điện trường tĩnh là những đường cong khép kín",
                        "Qua mỗi điểm trong điện trường chỉ vẽ được một và chỉ một đường sức",
                        "Các đường sức không bao giờ cắt nhau",
                        "Nơi nào điện trường mạnh thì các đường sức được vẽ dày hơn"
                  ],
                  "ans": 0,
                  "exp": "Đường sức điện trường tĩnh là đường hở: xuất phát từ điện tích dương và kết thúc ở điện tích âm (hoặc ở vô cực). Chỉ có đường sức từ trường hoặc điện trường xoáy mới khép kín."
            },
            {
                  "q": "Nguyên lý chồng chất điện trường phát biểu rằng:",
                  "opts": [
                        "Vectơ cường độ điện trường tổng hợp tại một điểm bằng tổng các vectơ điện trường thành phần: E⃗ = E⃗₁ + E⃗₂ + ...",
                        "Độ lớn điện trường tổng hợp bằng tổng đại số các độ lớn",
                        "Điện trường tổng hợp luôn triệt tiêu",
                        "Điện trường thành phần mạnh nhất quyết định hoàn toàn"
                  ],
                  "ans": 0,
                  "exp": "Điện trường tuân theo nguyên lý chồng chất vectơ: $\\vec{E} = \\sum \\vec{E}_i$, việc tổng hợp tuân theo quy tắc hình bình hành lực."
            }
      ]
},
    'vatly11-b18': {
      "subject": "physics",
      "simType": "electrostatics",
      "simOptions": {
            "mode": "uniform_field",
            "voltageU": 200,
            "plateD": 4
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 18",
      "title": "Thực hành Điện trường đều & Chuyển động của hạt mang điện",
      "guide": "Khảo sát điện trường đều giữa hai bản kim loại tích điện trái dấu. Bắn chùm electron vào theo phương ngang, quan sát quỹ đạo parabol và tính độ lệch dưới tác dụng của lực điện F⃗ = q·E⃗.",
      "questions": [
            {
                  "q": "Mối liên hệ giữa cường độ điện trường đều E giữa hai bản kim loại phẳng song song tích điện trái dấu cách nhau khoảng d và hiệu điện thế U là:",
                  "opts": [
                        "E = U / d",
                        "E = U · d",
                        "E = d / U",
                        "E = U² / d"
                  ],
                  "ans": 0,
                  "exp": "Trong điện trường đều, cường độ điện trường $E = \\frac{U}{d}$ (đơn vị V/m), hướng từ bản cực dương sang bản cực âm."
            },
            {
                  "q": "Một electron bay theo phương vuông góc với các đường sức vào trong một điện trường đều. Quỹ đạo chuyển động của electron trong điện trường là:",
                  "opts": [
                        "Đường parabol uốn cong lệch về phía bản cực dương",
                        "Đường thẳng theo phương ban đầu",
                        "Đường tròn",
                        "Đường elip"
                  ],
                  "ans": 0,
                  "exp": "Tương tự chuyển động ném ngang trong trường trọng lực, electron chịu lực điện không đổi $F = eE$ hướng vuông góc với vận tốc đầu, tạo nên quỹ đạo là một nhánh parabol lệch về phía bản cực dương."
            },
            {
                  "q": "Hai bản cực song song cách nhau d = 4 cm, hiệu điện thế giữa hai bản là U = 200 V. Cường độ điện trường đều giữa hai bản là:",
                  "opts": [
                        "E = 200 / 0,04 = 5.000 V/m",
                        "E = 800 V/m",
                        "E = 50 V/m",
                        "E = 8 V/m"
                  ],
                  "ans": 0,
                  "exp": "$d = 4\\text{ cm} = 0{,}04\\text{ m}$. $E = \\frac{U}{d} = \\frac{200}{0{,}04} = 5000\\text{ V/m}$."
            }
      ]
},
    'vatly11-b19': {
      "subject": "physics",
      "simType": "electrostatics",
      "simOptions": {
            "mode": "potential"
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 19",
      "title": "Thực hành Thế năng điện & Công của lực điện trường",
      "guide": "Di chuyển điện tích thử q₀ giữa các vị trí trong điện trường. Kiểm chứng tính chất thế trường: công của lực điện A_MN không phụ thuộc vào hình dạng đường đi, chỉ phụ thuộc vào tọa độ điểm đầu M và điểm cuối N.",
      "questions": [
            {
                  "q": "Đặc điểm quan trọng nhất của công của lực điện trường tĩnh khi dịch chuyển một điện tích q từ điểm M đến điểm N là:",
                  "opts": [
                        "Chỉ phụ thuộc vào vị trí của điểm M và điểm N, không phụ thuộc vào hình dạng đường đi",
                        "Tỉ lệ thuận với chiều dài quãng đường đi được",
                        "Luôn luôn mang giá trị dương",
                        "Phụ thuộc vào thời gian dịch chuyển"
                  ],
                  "ans": 0,
                  "exp": "Điện trường tĩnh là một trường thế, do đó công của lực điện trường không phụ thuộc vào hình dạng đường cong dịch chuyển mà chỉ phụ thuộc vào tọa độ điểm đầu và điểm cuối: $A_{MN} = W_M - W_N$."
            },
            {
                  "q": "Công thức liên hệ giữa công của lực điện A_MN và độ giảm thế năng điện của điện tích q giữa hai điểm M và N là:",
                  "opts": [
                        "A_MN = W_M − W_N",
                        "A_MN = W_N − W_M",
                        "A_MN = W_M + W_N",
                        "A_MN = 1/2 · (W_M − W_N)"
                  ],
                  "ans": 0,
                  "exp": "Công của lực thế bằng độ giảm thế năng: $A_{MN} = -\\Delta W_t = W_M - W_N$."
            },
            {
                  "q": "Nếu điện tích q dịch chuyển theo một đường cong khép kín trong điện trường tĩnh thì tổng công của lực điện trường bằng:",
                  "opts": [
                        "Bằng 0",
                        "Luôn dương",
                        "Luôn âm",
                        "Phụ thuộc diện tích hình khép kín"
                  ],
                  "ans": 0,
                  "exp": "Vì điểm đầu và điểm cuối trùng nhau ($M \\equiv N$) nên $A = W_M - W_M = 0$. Đây là tiêu chí xác nhận trường tĩnh điện là một trường lực thế."
            }
      ]
},
    'vatly11-b20': {
      "subject": "physics",
      "simType": "electrostatics",
      "simOptions": {
            "mode": "potential"
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 20",
      "title": "Thực hành Điện thế, Hiệu điện thế & Mặt đẳng thế",
      "guide": "Khảo sát điện thế V tại từng điểm trong không gian và vẽ các mặt đẳng thế (mặt có cùng điện thế). Quan sát tính chất vectơ E⃗ luôn vuông góc với mặt đẳng thế và hướng về nơi có điện thế giảm.",
      "questions": [
            {
                  "q": "Hiệu điện thế giữa hai điểm M và N trong điện trường đặc trưng cho điều gì?",
                  "opts": [
                        "Khả năng sinh công của lực điện trường khi dịch chuyển một đơn vị điện tích dương từ M đến N: U_MN = V_M − V_N = A_MN / q",
                        "Năng lượng điện trường tổng cộng",
                        "Lực tương tác giữa M và N",
                        "Điện trở giữa hai điểm"
                  ],
                  "ans": 0,
                  "exp": "Hiệu điện thế $U_{MN} = V_M - V_N = \\frac{A_{MN}}{q}$ là đại lượng đặc trưng cho khả năng thực hiện công của điện trường khi di chuyển một điện tích $q$ từ $M$ đến $N$."
            },
            {
                  "q": "Mặt đẳng thế là mặt có tính chất gì?",
                  "opts": [
                        "Tất cả các điểm trên mặt đều có cùng một điện thế, vectơ điện trường E⃗ vuông góc với mặt đẳng thế",
                        "Tất cả các điểm có cùng cường độ điện trường",
                        "Mặt tiếp xúc giữa hai kim loại",
                        "Mặt phẳng tích điện đều"
                  ],
                  "ans": 0,
                  "exp": "Mặt đẳng thế là tập hợp các điểm có cùng điện thế. Khi dịch chuyển điện tích trên mặt đẳng thế, công $A = q(V_1 - V_2) = 0$, do đó lực điện $\\vec{F} = q\\vec{E}$ phải vuông góc với quỹ đạo dịch chuyển."
            },
            {
                  "q": "Vectơ cường độ điện trường E⃗ luôn có hướng chỉ từ nơi:",
                  "opts": [
                        "Có điện thế cao sang nơi có điện thế thấp",
                        "Có điện thế thấp sang nơi có điện thế cao",
                        "Tùy thuộc vào dấu của điện tích thử",
                        "Đi theo mặt đẳng thế"
                  ],
                  "ans": 0,
                  "exp": "Do $E = -\\frac{\\Delta V}{\\Delta s}$, chiều của vectơ cường độ điện trường $\\vec{E}$ luôn hướng theo chiều giảm nhanh nhất của điện thế (từ nơi có thế cao về nơi có thế thấp)."
            }
      ]
},
    'vatly11-b21': {
      "subject": "physics",
      "simType": "electrostatics",
      "simOptions": {
            "mode": "capacitor",
            "capArea": 200,
            "capDist": 2,
            "dielectricEps": 1
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 21",
      "title": "Thực hành Tụ điện, Điện dung & Năng lượng điện trường",
      "guide": "Thay đổi diện tích bản cực S, khoảng cách d và lớp điện môi ε của tụ điện phẳng. Khảo sát điện dung C = ε·ε₀·S/d, điện tích Q = C·U và năng lượng điện trường tích trữ W = 1/2·C·U².",
      "questions": [
            {
                  "q": "Công thức tính điện dung của tụ điện phẳng có diện tích bản cực S, khoảng cách giữa hai bản d và lớp điện môi ε là:",
                  "opts": [
                        "C = (ε · ε₀ · S) / d",
                        "C = (ε · d) / (ε₀ · S)",
                        "C = Q · U",
                        "C = (ε₀ · S · d) / ε"
                  ],
                  "ans": 0,
                  "exp": "Điện dung tụ phẳng tỉ lệ thuận với diện tích đối diện $S$ và hằng số điện môi $\\varepsilon$, tỉ lệ nghịch với khoảng cách $d$: $C = \\frac{\\varepsilon \\varepsilon_0 S}{d}$."
            },
            {
                  "q": "Năng lượng điện trường tích trữ bên trong tụ điện đã nạp điện tích Q dưới hiệu điện thế U là:",
                  "opts": [
                        "W = 1/2 · C · U² = 1/2 · Q · U = Q² / (2C)",
                        "W = C · U²",
                        "W = 1/2 · C · U",
                        "W = Q · U"
                  ],
                  "ans": 0,
                  "exp": "Năng lượng điện trường trong tụ điện được xác định bằng $W = \\frac{1}{2}CU^2 = \\frac{1}{2}QU = \\frac{Q^2}{2C}$ (đơn vị Joule)."
            },
            {
                  "q": "Khi ghép hai tụ điện có điện dung C₁ và C₂ song song với nhau thì điện dung tương đương của bộ tụ là:",
                  "opts": [
                        "C_b = C₁ + C₂",
                        "1/C_b = 1/C₁ + 1/C₂",
                        "C_b = (C₁ · C₂) / (C₁ + C₂)",
                        "C_b = |C₁ − C₂|"
                  ],
                  "ans": 0,
                  "exp": "Khi ghép song song, $U_1 = U_2 = U$, tổng điện tích $Q = Q_1 + Q_2 \\Rightarrow C_b U = C_1 U + C_2 U \\Rightarrow C_b = C_1 + C_2$."
            }
      ]
},
    'vatly11-b22': {
      "subject": "physics",
      "simType": "circuit",
      "simOptions": {
            "mode": "drift_velocity",
            "voltage": 12,
            "crossSection": 1.5
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 22",
      "title": "Thực hành Cường độ dòng điện & Vận tốc trôi của electron",
      "guide": "Quan sát chuyển động trôi có hướng của các electron tự do trong mạng tinh thể kim loại dưới tác dụng của điện trường. Tính toán cường độ dòng điện I = S·n·e·v_d và lượng điện tích chuyển qua tiết diện dây.",
      "questions": [
            {
                  "q": "Cường độ dòng điện I qua tiết diện thẳng của dây dẫn được định nghĩa bằng:",
                  "opts": [
                        "Lượng điện tích Δq chuyển qua tiết diện thẳng của dây dẫn trong một đơn vị thời gian: I = Δq / Δt",
                        "Vận tốc chuyển động của electron",
                        "Số lượng hạt mang điện tích",
                        "Điện thế giữa hai đầu dây"
                  ],
                  "ans": 0,
                  "exp": "Cường độ dòng điện là đại lượng đặc trưng cho tác dụng mạnh hay yếu của dòng điện, đo bằng thương số giữa lượng điện tích dịch chuyển $\\Delta q$ và thời gian $\\Delta t$: $I = \\frac{\\Delta q}{\\Delta t}$ (đơn vị Ampe, A)."
            },
            {
                  "q": "Công thức liên hệ giữa cường độ dòng điện I, mật độ electron tự do n, tiết diện dây dẫn S và vận tốc trôi v_d là:",
                  "opts": [
                        "I = n · e · S · v_d",
                        "I = n · e / (S · v_d)",
                        "I = v_d / (n · e · S)",
                        "I = S · v_d / (n · e)"
                  ],
                  "ans": 0,
                  "exp": "Trong thời gian $\\Delta t$, các electron trong hình trụ thể tích $V = S \\cdot v_d \\Delta t$ đi qua tiết diện dây, tổng điện tích $\\Delta q = n \\cdot e \\cdot S \\cdot v_d \\Delta t \\Rightarrow I = n e S v_d$."
            },
            {
                  "q": "Chiều quy ước của dòng điện trong mạch điện là chiều chuyển động của:",
                  "opts": [
                        "Các hạt mang điện tích dương (từ cực dương qua dây dẫn về cực âm)",
                        "Các electron tự do (từ cực âm về cực dương)",
                        "Ngẫu nhiên không theo quy tắc",
                        "Phụ thuộc vào nhiệt độ môi trường"
                  ],
                  "ans": 0,
                  "exp": "Quy ước lịch sử: Chiều dòng điện là chiều chuyển dời có hướng của các điện tích dương (tức ngược chiều chuyển động thực tế của electron trong kim loại)."
            }
      ]
},
    'vatly11-b23': {
      "subject": "physics",
      "simType": "circuit",
      "simOptions": {
            "mode": "ohm_resistor",
            "voltage": 12,
            "resistorR": 20
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 23",
      "title": "Thực hành Điện trở & Định luật Ohm cho đoạn mạch",
      "guide": "Khảo sát định luật Ohm I = U/R. Thay đổi chiều dài l, tiết diện S và vật liệu dây dẫn để kiểm chứng công thức điện trở R = ρ·l/S và sự tăng điện trở theo nhiệt độ R = R₀(1 + α·Δt).",
      "questions": [
            {
                  "q": "Nội dung Định luật Ohm cho đoạn mạch thuần điện trở R là:",
                  "opts": [
                        "Cường độ dòng điện chạy qua đoạn mạch tỉ lệ thuận với hiệu điện thế giữa hai đầu đoạn mạch và tỉ lệ nghịch với điện trở: I = U / R",
                        "Cường độ dòng điện tỉ lệ nghịch với hiệu điện thế",
                        "Điện trở tỉ lệ thuận với hiệu điện thế",
                        "Cường độ dòng điện tỉ lệ thuận với bình phương điện trở"
                  ],
                  "ans": 0,
                  "exp": "Định luật Ohm: $I = \\frac{U}{R}$ (Ampe = Volt / Ohm). Đồ thị $I-U$ là đường thẳng đi qua gốc tọa độ với độ dốc bằng độ dẫn điện $G = 1/R$."
            },
            {
                  "q": "Điện trở R của một đoạn dây kim loại hình trụ đồng chất phụ thuộc vào các thông số kích thước và vật liệu theo công thức:",
                  "opts": [
                        "R = ρ · (l / S)",
                        "R = ρ · (S / l)",
                        "R = (l · S) / ρ",
                        "R = ρ · l · S"
                  ],
                  "ans": 0,
                  "exp": "Điện trở tỉ lệ thuận với chiều dài dây $l$, tỉ lệ nghịch với tiết diện $S$ và phụ thuộc điện trở suất $\\rho$ của chất liệu: $R = \\rho\\frac{l}{S}$."
            },
            {
                  "q": "Khi nhiệt độ của một dây dẫn kim loại tăng lên thì điện trở của dây dẫn đó sẽ:",
                  "opts": [
                        "Tăng lên do các ion kim loại dao động nhiệt mạnh hơn cản trở dòng electron",
                        "Giảm đi",
                        "Hoàn toàn không đổi",
                        "Bằng 0 ngay lập tức"
                  ],
                  "ans": 0,
                  "exp": "Khi nhiệt độ tăng, các ion nút mạng dao động nhiệt mạnh hơn quanh vị trí cân bằng, làm tăng xác suất va chạm với các electron chuyển động trôi, khiến điện trở kim loại tăng theo: $R = R_0[1 + \\alpha(t - t_0)]$."
            }
      ]
},
    'vatly11-b24': {
      "subject": "physics",
      "simType": "circuit",
      "simOptions": {
            "mode": "dc_circuit",
            "emfE": 12,
            "internalR": 2,
            "loadR": 10
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 24",
      "title": "Thực hành Nguồn điện & Định luật Ohm cho toàn mạch",
      "guide": "Khảo sát toàn mạch gồm nguồn (E, r) và tải ngoài R_N. Kiểm chứng dòng điện I = E / (R_N + r), hiệu điện thế hai cực nguồn U = E − I·r và nhận diện hiện tượng đoản mạch khi R_N = 0.",
      "questions": [
            {
                  "q": "Nội dung Định luật Ohm đối với toàn mạch kín gồm nguồn điện có suất điện động E, điện trở trong r và điện trở mạch ngoài R_N là:",
                  "opts": [
                        "I = E / (R_N + r)",
                        "I = E / R_N",
                        "I = (E − r) / R_N",
                        "I = E · (R_N + r)"
                  ],
                  "ans": 0,
                  "exp": "Định luật Ohm cho toàn mạch: Cường độ dòng điện tỉ lệ thuận với suất điện động của nguồn và tỉ lệ nghịch với điện trở toàn phần của mạch: $I = \\frac{\\mathcal{E}}{R_N + r}$."
            },
            {
                  "q": "Hiệu điện thế giữa hai cực của nguồn điện (hiệu điện thế mạch ngoài U) liên hệ với suất điện động E và dòng điện I theo công thức:",
                  "opts": [
                        "U = E − I · r",
                        "U = E + I · r",
                        "U = I · r",
                        "U = E / r"
                  ],
                  "ans": 0,
                  "exp": "$U = I R_N = (\\mathcal{E} - Ir)$. Khi mạch ngoài hở ($I = 0$), hiệu điện thế hai cực nguồn đúng bằng suất điện động: $U = \\mathcal{E}$."
            },
            {
                  "q": "Hiện tượng đoản mạch (ngắn mạch) xảy ra khi nào và gây ra nguy cơ gì?",
                  "opts": [
                        "Xảy ra khi nối hai cực nguồn bằng dây có điện trở R_N ≈ 0, dòng điện cực đại I_đm = E/r có thể gây cháy nổ",
                        "Xảy ra khi ngắt khóa K làm mạch hở",
                        "Xảy ra khi tăng điện trở mạch ngoài R_N lên rất lớn",
                        "Làm cho nguồn điện nguội đi nhanh chóng"
                  ],
                  "ans": 0,
                  "exp": "Khi $R_N \\approx 0$, dòng điện đạt giá trị cực đại $I_{đm} = \\frac{\\mathcal{E}}{r}$. Tác dụng nhiệt tỏa ra $Q = I^2 r t$ rất lớn làm nóng chảy dây dẫn và gây cháy nổ nguy hiểm."
            }
      ]
},
    'vatly11-b25': {
      "subject": "physics",
      "simType": "circuit",
      "simOptions": {
            "mode": "power_efficiency",
            "emfE": 12,
            "internalR": 2,
            "loadR": 2
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 25",
      "title": "Thực hành Năng lượng, Công suất điện & Phối hợp trở kháng",
      "guide": "Khảo sát công suất mạch ngoài P = I²·R_N theo biến trở R_N. Kiểm chứng Định lý công suất cực đại khi R_N = r và đánh giá hiệu suất nguồn điện H = R_N / (R_N + r).",
      "questions": [
            {
                  "q": "Công suất tiêu thụ mạch ngoài P = I²·R_N đạt giá trị CỰC ĐẠI khi giá trị điện trở mạch ngoài R_N thỏa mãn điều kiện nào?",
                  "opts": [
                        "R_N = r (điện trở mạch ngoài bằng điện trở trong của nguồn)",
                        "R_N = 0",
                        "R_N rất lớn (tiến đến vô cùng)",
                        "R_N = 2r"
                  ],
                  "ans": 0,
                  "exp": "Áp dụng bất đẳng thức Cauchy cho mẫu số: $\\mathcal{P} = \\frac{\\mathcal{E}^2 R_N}{(R_N + r)^2} = \\frac{\\mathcal{E}^2}{(\\sqrt{R_N} + r/\\sqrt{R_N})^2} \\le \\frac{\\mathcal{E}^2}{4r}$. Dấu bằng xảy ra khi $R_N = r$."
            },
            {
                  "q": "Hiệu suất H của nguồn điện khi cấp điện cho mạch ngoài có điện trở R_N được tính theo công thức:",
                  "opts": [
                        "H = (U / E) × 100% = [R_N / (R_N + r)] × 100%",
                        "H = (r / R_N) × 100%",
                        "H = (E / U) × 100%",
                        "H = [r / (R_N + r)] × 100%"
                  ],
                  "ans": 0,
                  "exp": "Hiệu suất nguồn: $H = \\frac{A_{có ích}}{A_{toàn phần}} = \\frac{U I t}{\\mathcal{E} I t} = \\frac{U}{\\mathcal{E}} = \\frac{R_N}{R_N + r} \\times 100\\%$."
            },
            {
                  "q": "Nguồn điện có E = 12 V, r = 2 Ω mắc với biến trở R_N. Công suất mạch ngoài cực đại P_max có giá trị bằng:",
                  "opts": [
                        "P_max = E² / (4r) = 144 / 8 = 18 W",
                        "P_max = 72 W",
                        "P_max = 36 W",
                        "P_max = 9 W"
                  ],
                  "ans": 0,
                  "exp": "Khi $R_N = r = 2\\ \\Omega$, dòng điện $I = \\frac{12}{2+2} = 3\\text{ A}$. Công suất cực đại: $\\mathcal{P}_{max} = I^2 R_N = 3^2 \\times 2 = 18\\text{ W}$."
            }
      ]
},
    'vatly11-b26': {
      "subject": "physics",
      "simType": "circuit",
      "simOptions": {
            "mode": "battery_lab",
            "emfE": 12,
            "internalR": 2
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 11 • Bài 26",
      "title": "Thực hành Đo suất điện động & Điện trở trong của pin điện hóa",
      "guide": "Sử dụng mạch đo gồm pin điện hóa, biến trở, ampe kế và vôn kế. Ghi nhận 5 cặp số liệu (I, U), vẽ đường đồ thị thực nghiệm U theo I để xác định suất điện động E (giao điểm trục tung) và điện trở trong r (độ dốc).",
      "questions": [
            {
                  "q": "Trong phương pháp thực nghiệm đo suất điện động E và điện trở trong r của pin, đồ thị biểu diễn hiệu điện thế U theo cường độ dòng điện I có dạng là:",
                  "opts": [
                        "Đoạn thẳng dốc xuống cắt trục tung tại giá trị bằng E và có độ dốc bằng −r: U = E − r·I",
                        "Đường parabol đi qua gốc tọa độ",
                        "Đường thẳng dốc lên đi qua gốc tọa độ",
                        "Đường cong hypebol"
                  ],
                  "ans": 0,
                  "exp": "Phương trình $U = \\mathcal{E} - rI$ có dạng hàm bậc nhất $y = ax + b$ với hệ số góc $a = -r < 0$ và tung độ gốc $b = \\mathcal{E}$ (hiệu điện thế hở mạch khi $I = 0$)."
            },
            {
                  "q": "Khi ampe kế có điện trở R_A đáng kể mắc nối tiếp với biến trở thì giá trị điện trở trong đo được bằng phương pháp ngoại suy đồ thị sẽ:",
                  "opts": [
                        "Bao gồm cả điện trở trong của pin và điện trở của ampe kế: r_đo = r_pin + R_A",
                        "Đúng bằng điện trở trong của pin",
                        "Bằng 0",
                        "Bằng điện trở vôn kế"
                  ],
                  "ans": 0,
                  "exp": "Điện trở ampe kế $R_A$ ghép nối tiếp với nguồn nên điện trở tổng cộng cản trở dòng điện là $r + R_A$, do đó độ dốc đồ thị đo được là $-(r + R_A)$."
            },
            {
                  "q": "Để bảo vệ nguồn pin điện hóa và đồng hồ đo không bị hỏng do quá dòng trong thí nghiệm, trước khi đóng khóa K cần chú ý:",
                  "opts": [
                        "Điều chỉnh biến trở về giá trị lớn nhất",
                        "Điều chỉnh biến trở về giá trị bằng 0",
                        "Tháo vôn kế ra khỏi mạch",
                        "Mắc ampe kế song song với nguồn"
                  ],
                  "ans": 0,
                  "exp": "Để tránh đoản mạch và quá dòng làm cháy ampe kế hoặc hỏng pin, trước khi đóng mạch luôn phải vặn biến trở về mức điện trở lớn nhất để dòng điện ban đầu là nhỏ nhất."
            }
      ]
},
        'vatly12-b1': {
      "subject": "physics",
      "simType": "thermal",
      "simOptions": {
            "mode": "phase_change",
            "tempC": 25
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 1",
      "title": "Thực hành Mô hình cấu trúc của chất & Sự chuyển thể",
      "guide": "Kéo thanh trượt nhiệt độ từ −30°C đến 130°C để quan sát chuyển động của các phân tử ở thể rắn (dao động quanh nút mạng), thể lỏng (trượt lên nhau) và thể khí (chuyển động hỗn loạn tự do), cùng các mốc chuyển thể 0°C và 100°C.",
      "questions": [
            {
                  "q": "Theo mô hình động học phân tử, các phân tử cấu tạo nên chất rắn có đặc điểm chuyển động như thế nào?",
                  "opts": [
                        "Chỉ dao động quanh những vị trí cân bằng xác định cố định trong mạng tinh thể",
                        "Chuyển động tự do hoàn toàn không có vị trí cân bằng",
                        "Đứng yên tuyệt đối không có bất kỳ chuyển động nào",
                        "Chuyển động hỗn loạn không ngừng chiếm toàn bộ thể tích"
                  ],
                  "ans": 0,
                  "exp": "Trong thể rắn, lực liên kết phân tử rất mạnh giữ cho các phân tử ở những vị trí xác định tạo thành trật tự mạng tinh thể; các phân tử chỉ dao động nhiệt quanh các vị trí cân bằng này."
            },
            {
                  "q": "Quá trình chuyển từ thể lỏng sang thể khí (hơi) diễn ra trên bề mặt chất lỏng và ở mọi nhiệt độ được gọi là:",
                  "opts": [
                        "Sự bay hơi",
                        "Sự sôi",
                        "Sự ngưng tụ",
                        "Sự nóng chảy"
                  ],
                  "ans": 0,
                  "exp": "Sự bay hơi là sự hóa hơi xảy ra ở bề mặt chất lỏng và ở nhiệt độ bất kỳ. Sự sôi là sự hóa hơi đặc biệt xảy ra cả ở trên bề mặt và trong lòng khối chất lỏng tại nhiệt độ sôi xác định."
            },
            {
                  "q": "Khoảng cách trung bình giữa các phân tử của cùng một chất ở thể nào là lớn nhất?",
                  "opts": [
                        "Thể khí (lớn hơn kích thước phân tử hàng chục đến hàng trăm lần)",
                        "Thể lỏng",
                        "Thể rắn",
                        "Cả ba thể đều có khoảng cách phân tử bằng nhau"
                  ],
                  "ans": 0,
                  "exp": "Ở thể khí, mật độ phân tử rất nhỏ, khoảng cách trung bình giữa các phân tử gấp hàng chục đến hàng trăm lần kích thước của chúng, do đó chất khí dễ nén và chiếm toàn bộ thể tích bình chứa."
            }
      ]
},
    'vatly12-b2': {
      "subject": "physics",
      "simType": "thermal",
      "simOptions": {
            "mode": "first_law",
            "heatQ": 200,
            "workA": -50
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 2",
      "title": "Thực hành Nội năng & Định luật I của nhiệt động lực học",
      "guide": "Thay đổi nhiệt lượng truyền vào Q và công ngoại lực A tác dụng lên piston. Quan sát chuyển động của piston và kiểm chứng hệ thức định luật I: ΔU = A + Q.",
      "questions": [
            {
                  "q": "Nội năng của một vật được định nghĩa là:",
                  "opts": [
                        "Tổng động năng chuyển động nhiệt của các phân tử và thế năng tương tác giữa chúng",
                        "Chỉ bao gồm động năng chuyển động của toàn bộ vật",
                        "Thế năng hấp dẫn của vật so với mặt đất",
                        "Năng lượng điện trường bên trong nguyên tử"
                  ],
                  "ans": 0,
                  "exp": "Nội năng $U$ của một hệ nhiệt động là tổng động năng chuyển động hỗn loạn của các phân tử cấu tạo nên hệ và thế năng tương tác tĩnh điện giữa các phân tử đó: $U = E_đ + E_t$."
            },
            {
                  "q": "Biểu thức của Định luật I nhiệt động lực học là ΔU = A + Q. Khi một khối khí trong xylanh nhận nhiệt lượng 100 J và dãn nở thực hiện công 40 J lên piston thì độ biến thiên nội năng của khối khí là:",
                  "opts": [
                        "ΔU = Q + A = 100 + (−40) = +60 J (nội năng tăng 60 J)",
                        "ΔU = 140 J",
                        "ΔU = −60 J",
                        "ΔU = −140 J"
                  ],
                  "ans": 0,
                  "exp": "Theo quy ước dấu: Hệ nhận nhiệt lượng nên $Q = +100\\text{ J}$; hệ thực hiện công lên ngoại vật (dãn nở) nên $A = -40\\text{ J}$. Suy ra $\\Delta U = A + Q = -40 + 100 = +60\\text{ J}$."
            },
            {
                  "q": "Hai cách làm biến đổi nội năng của một vật là:",
                  "opts": [
                        "Thực hiện công và truyền nhiệt",
                        "Thay đổi vận tốc chuyển động và đưa vật lên cao",
                        "Chiếu sáng và nhiễm điện",
                        "Thay đổi thể tích và thay đổi hình dạng"
                  ],
                  "ans": 0,
                  "exp": "Có hai phương thức làm biến đổi nội năng: Thực hiện công (có sự chuyển dời vĩ mô, ví dụ cọ xát, nén khí) và Truyền nhiệt (không có sự chuyển dời cơ học vĩ mô, nhiệt truyền qua tiếp xúc va chạm vi mô)."
            }
      ]
},
    'vatly12-b3': {
      "subject": "physics",
      "simType": "thermal",
      "simOptions": {
            "mode": "phase_change",
            "tempC": 25
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 3",
      "title": "Thực hành Nhiệt độ, Thang nhiệt độ & Nhiệt kế",
      "guide": "Khảo sát thang đo nhiệt độ Celsius (°C) và thang đo Kelvin (K). Quan sát cột thủy ngân thay đổi theo nhiệt độ và kiểm chứng công thức chuyển đổi T(K) = t(°C) + 273,15.",
      "questions": [
            {
                  "q": "Nhiệt độ tuyệt đối T (Kelvin) liên hệ với nhiệt độ t (Celsius) theo công thức nào?",
                  "opts": [
                        "T (K) = t (°C) + 273,15",
                        "T (K) = t (°C) − 273,15",
                        "T (K) = 273,15 / t (°C)",
                        "T (K) = t (°C) × 1,8 + 32"
                  ],
                  "ans": 0,
                  "exp": "Thang Kelvin có gốc $0\\text{ K}$ tại độ không tuyệt đối, bằng $-273{,}15^circ\\text{C}$. Độ lớn của một độ Kelvin ($1\\text{ K}$) bằng đúng độ lớn của một độ Celsius ($1^circ\\text{C}$): $T\\text{ (K)} = t\\text{ (}^circ\\text{C)} + 273{,}15$."
            },
            {
                  "q": "Độ không tuyệt đối (0 K, tương đương −273,15°C) là trạng thái nhiệt độ mà tại đó:",
                  "opts": [
                        "Động năng chuyển động nhiệt của các phân tử đạt mức tối thiểu và không thể làm lạnh hơn nữa",
                        "Tất cả các chất đều biến thành thể khí",
                        "Áp suất chất khí đạt giá trị vô hạn",
                        "Nước sôi ở nhiệt độ bình thường"
                  ],
                  "ans": 0,
                  "exp": "Độ không tuyệt đối ($0\\text{ K}$) là giới hạn nhiệt độ thấp nhất trong vũ trụ, tại đó năng lượng chuyển động nhiệt của phân tử đạt giá trị tối thiểu theo cơ học lượng tử."
            },
            {
                  "q": "Nguyên tắc hoạt động chung của các loại nhiệt kế thông dụng (nhiệt kế thủy ngân, nhiệt kế rượu) dựa trên:",
                  "opts": [
                        "Sự nở vì nhiệt của chất lỏng khi nhiệt độ thay đổi",
                        "Hiện tượng cảm ứng điện từ",
                        "Sự thay đổi khối lượng chất lỏng",
                        "Hiện tượng bay hơi của chất lỏng"
                  ],
                  "ans": 0,
                  "exp": "Nhiệt kế chất lỏng hoạt động dựa trên sự giãn nở thể tích vì nhiệt của chất lỏng (thủy ngân hoặc rượu) chứa trong bầu nhiệt kế khi tiếp xúc với vật cần đo."
            }
      ]
},
    'vatly12-b4': {
      "subject": "physics",
      "simType": "thermal",
      "simOptions": {
            "mode": "specific_heat",
            "heaterPowerW": 50,
            "massG": 100
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 4",
      "title": "Thực hành Đo nhiệt dung riêng của chất lỏng",
      "guide": "Đun nóng khối nước bằng dây nung điện trở công suất P. Đo nhiệt lượng cung cấp Q = P·t và độ tăng nhiệt độ ΔT để tính nhiệt dung riêng thực nghiệm: c = Q / (m·ΔT).",
      "questions": [
            {
                  "q": "Nhiệt dung riêng c của một chất là đại lượng có ý nghĩa gì?",
                  "opts": [
                        "Nhiệt lượng cần truyền cho 1 kg chất đó để nhiệt độ của nó tăng thêm 1 K (hoặc 1°C)",
                        "Nhiệt lượng tỏa ra khi 1 kg chất chuyển từ thể lỏng sang thể rắn",
                        "Tổng nhiệt lượng chứa trong 1 kg chất đó",
                        "Nhiệt lượng cần thiết để làm nóng chảy 1 kg chất"
                  ],
                  "ans": 0,
                  "exp": "Nhiệt dung riêng $c = \\frac{Q}{m\\Delta T}$ (đơn vị $\\text{J}/(\\text{kg}\\cdot\\text{K})$) là nhiệt lượng cần cung cấp để $1\\text{ kg}$ chất đó tăng thêm $1\\text{ K}$ (hoặc $1^circ\\text{C}$)."
            },
            {
                  "q": "Đun nóng m = 200 g nước bằng dây nung công suất P = 100 W trong thời gian t = 84 s, nước tăng từ 25°C lên 35°C (bỏ qua hao phí). Nhiệt dung riêng của nước đo được là:",
                  "opts": [
                        "c = (100 × 84) / (0,2 × 10) = 4.200 J/(kg·K)",
                        "c = 2.100 J/(kg·K)",
                        "c = 8.400 J/(kg·K)",
                        "c = 3.800 J/(kg·K)"
                  ],
                  "ans": 0,
                  "exp": "$Q = P \\cdot t = 100 \\times 84 = 8400\\text{ J}$. $\\Delta T = 35 - 25 = 10\\text{ K}$. $c = \\frac{Q}{m\\Delta T} = \\frac{8400}{0{,}2 \\times 10} = 4200\\text{ J}/(\\text{kg}\\cdot\\text{K})$."
            },
            {
                  "q": "Nước có nhiệt dung riêng rất lớn (c ≈ 4184 J/kg·K). Đặc tính này có ý nghĩa quan trọng trong tự nhiên và đời sống là:",
                  "opts": [
                        "Giúp đại dương điều hòa khí hậu toàn cầu và dùng nước làm chất tản nhiệt trong động cơ xe",
                        "Làm cho nước đóng băng nhanh hơn các chất khác",
                        "Làm cho nước sôi ở nhiệt độ thấp hơn",
                        "Làm nước bay hơi nhanh chóng ở nhiệt độ phòng"
                  ],
                  "ans": 0,
                  "exp": "Vì nhiệt dung riêng rất lớn nên nước hấp thụ hoặc tỏa ra một nhiệt lượng khổng lồ mà nhiệt độ chỉ thay đổi ít, giúp điều hòa khí hậu vùng duyên hải và được dùng làm dung dịch làm mát tối ưu."
            }
      ]
},
    'vatly12-b5': {
      "subject": "physics",
      "simType": "thermal",
      "simOptions": {
            "mode": "latent_heat",
            "heaterPowerW": 60,
            "massG": 100
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 5",
      "title": "Thực hành Đo nhiệt nóng chảy riêng của nước đá",
      "guide": "Cung cấp nhiệt lượng cho khối nước đá ở 0°C. Quan sát đồ thị nhiệt độ nằm ngang không đổi trong suốt quá trình nóng chảy và xác định nhiệt nóng chảy riêng λ = Q / m.",
      "questions": [
            {
                  "q": "Nhiệt nóng chảy riêng λ của một chất rắn kết tinh được tính theo công thức nào?",
                  "opts": [
                        "λ = Q / m",
                        "λ = Q / (m · ΔT)",
                        "λ = Q · m",
                        "λ = m / Q"
                  ],
                  "ans": 0,
                  "exp": "Nhiệt nóng chảy riêng $\\lambda = \\frac{Q}{m}$ (đơn vị $\\text{J}/\\text{kg}$) là nhiệt lượng cần cung cấp cho $1\\text{ kg}$ chất rắn nóng chảy hoàn toàn ở nhiệt độ nóng chảy xác định mà không thay đổi nhiệt độ."
            },
            {
                  "q": "Trong suốt quá trình một khối nước đá đang nóng chảy thành nước ở 0°C dưới áp suất chuẩn, nhiệt độ của khối nước đá sẽ:",
                  "opts": [
                        "Không đổi ở 0°C cho đến khi toàn bộ khối đá tan hết thành nước",
                        "Tăng liên tục từ 0°C lên 10°C",
                        "Giảm xuống dưới 0°C",
                        "Dao động ngẫu nhiên xung quanh 0°C"
                  ],
                  "ans": 0,
                  "exp": "Trong suốt quá trình chuyển thể nóng chảy của chất rắn kết tinh, nhiệt lượng nhận vào được dùng để phá vỡ mạng tinh thể phân tử chứ không làm tăng động năng nhiệt, do đó nhiệt độ được giữ không đổi."
            },
            {
                  "q": "Nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn m = 500 g nước đá ở 0°C (biết nhiệt nóng chảy riêng λ = 3,34 × 10⁵ J/kg) là:",
                  "opts": [
                        "Q = m·λ = 0,5 × 3,34 × 10⁵ = 1,67 × 10⁵ J = 167 kJ",
                        "Q = 334 kJ",
                        "Q = 66,8 kJ",
                        "Q = 83,5 kJ"
                  ],
                  "ans": 0,
                  "exp": "$Q = m \\cdot \\lambda = 0{,}5\\text{ kg} \\times 3{,}34 \\times 10^5\\text{ J/kg} = 167.000\\text{ J} = 167\\text{ kJ}$."
            }
      ]
},
    'vatly12-b6': {
      "subject": "physics",
      "simType": "thermal",
      "simOptions": {
            "mode": "latent_heat",
            "heaterPowerW": 80,
            "massG": 100
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 6",
      "title": "Thực hành Đo nhiệt hóa hơi riêng của nước",
      "guide": "Đun nước sôi ở 100°C và tiếp tục cung cấp nhiệt lượng bằng dây nung để hóa hơi nước. Xác định nhiệt hóa hơi riêng L = Q / m qua công suất dây nung và thời gian hóa hơi.",
      "questions": [
            {
                  "q": "Nhiệt hóa hơi riêng L của một chất lỏng được định nghĩa là:",
                  "opts": [
                        "Nhiệt lượng cần cung cấp để 1 kg chất lỏng chuyển hoàn toàn sang thể khí ở nhiệt độ sôi",
                        "Nhiệt lượng cần cung cấp để 1 kg chất rắn nóng chảy",
                        "Nhiệt lượng cần thiết để tăng nhiệt độ thêm 1 K",
                        "Nhiệt lượng tỏa ra khi ngưng tụ ở nhiệt độ bất kỳ"
                  ],
                  "ans": 0,
                  "exp": "Nhiệt hóa hơi riêng $L = \\frac{Q}{m}$ (đơn vị $\\text{J}/\\text{kg}$) là nhiệt lượng cần cung cấp cho $1\\text{ kg}$ chất lỏng hóa hơi hoàn toàn ở nhiệt độ sôi xác định."
            },
            {
                  "q": "Nhiệt hóa hơi riêng của nước rất lớn (L ≈ 2,26 × 10⁶ J/kg). Hiện tượng thực tiễn nào sau đây là minh chứng rõ nhất?",
                  "opts": [
                        "Cơ thể toát mồ hôi: mồ hôi bay hơi lấy đi một lượng nhiệt lớn giúp làm mát cơ thể hiệu quả",
                        "Nước sôi ở 100°C",
                        "Nước chảy từ trên cao xuống sinh công",
                        "Băng tuyết nổi trên mặt nước"
                  ],
                  "ans": 0,
                  "exp": "Khi toát mồ hôi, mỗi gam nước bay hơi mang đi khoảng $2260\\text{ J}$ nhiệt lượng từ da, giúp điều hòa hạ nhiệt thân nhiệt nhanh chóng."
            },
            {
                  "q": "Một ấm đun nước công suất P = 1.000 W đang duy trì nước sôi ở 100°C. Khối lượng nước bị hóa hơi sau thời gian t = 226 giây (biết L = 2,26 × 10⁶ J/kg, bỏ qua hao phí) là:",
                  "opts": [
                        "m = (P·t) / L = (1000 × 226) / (2,26 × 10⁶) = 0,1 kg = 100 g",
                        "m = 50 g",
                        "m = 200 g",
                        "m = 500 g"
                  ],
                  "ans": 0,
                  "exp": "$Q = P \\cdot t = 1000 \\times 226 = 226.000\\text{ J}$. $m = \\frac{Q}{L} = \\frac{226000}{2{,}26 \\times 10^6} = 0{,}1\\text{ kg} = 100\\text{ g}$."
            }
      ]
},
    'vatly12-b7': {
      "subject": "physics",
      "simType": "thermal",
      "simOptions": {
            "mode": "first_law",
            "heatQ": 300,
            "workA": 100
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 7",
      "title": "Thực hành Bài tập về Vật lí nhiệt & Cân bằng nhiệt",
      "guide": "Sử dụng hệ thống mô phỏng để giải các bài toán tổng hợp về Định luật I nhiệt động lực học, đồ thị chuyển thể chất và phương trình cân bằng nhiệt: Q_tỏa = Q_thu.",
      "questions": [
            {
                  "q": "Phương trình cân bằng nhiệt của một hệ nhiệt cô lập nhiều vật tiếp xúc trao đổi nhiệt với nhau là:",
                  "opts": [
                        "Q_tỏa = Q_thu (Tổng nhiệt lượng các vật tỏa ra bằng tổng nhiệt lượng các vật thu vào)",
                        "Q_tỏa + Q_thu = ΔU",
                        "Q_tỏa − Q_thu = A",
                        "Q_tỏa = 0"
                  ],
                  "ans": 0,
                  "exp": "Trong một hệ kín cô lập về nhiệt (không trao đổi nhiệt với môi trường ngoài), theo định luật bảo toàn năng lượng: tổng nhiệt lượng do các vật tỏa ra bằng tổng nhiệt lượng do các vật khác thu vào: $Q_{tỏa} = Q_{thu}$."
            },
            {
                  "q": "Thả m₁ = 100 g đồng ở nhiệt độ t₁ = 100°C (c₁ = 380 J/kg·K) vào m₂ = 200 g nước ở t₂ = 20°C (c₂ = 4.200 J/kg·K). Nhiệt độ cân bằng t_cb của hệ xấp xỉ bằng:",
                  "opts": [
                        "t_cb ≈ 23,5°C",
                        "t_cb = 60°C",
                        "t_cb = 30°C",
                        "t_cb = 45°C"
                  ],
                  "ans": 0,
                  "exp": "$m_1 c_1 (t_1 - t_{cb}) = m_2 c_2 (t_{cb} - t_2) \\Rightarrow 0{,}1 \\times 380 \\times (100 - t_{cb}) = 0{,}2 \\times 4200 \\times (t_{cb} - 20) \\Rightarrow 38(100 - t_{cb}) = 840(t_{cb} - 20) \\Rightarrow 878 t_{cb} = 20600 \\Rightarrow t_{cb} \\approx 23{,}46^circ\\text{C}$."
            },
            {
                  "q": "Khi một chất chuyển thể từ rắn sang lỏng rồi sang khí, nội năng của chất đó biến thiên như thế nào?",
                  "opts": [
                        "Nội năng tăng lên do liên tục nhận nhiệt lượng",
                        "Nội năng giảm đi",
                        "Nội năng không thay đổi",
                        "Nội năng chỉ tăng khi nhiệt độ tăng"
                  ],
                  "ans": 0,
                  "exp": "Quá trình nóng chảy và hóa hơi đều là các quá trình thu nhiệt ($Q > 0$), nhiệt lượng này làm tăng thế năng tương tác phân tử và phá vỡ liên kết, do đó nội năng của chất tăng dần."
            }
      ]
},
    'vatly12-b8': {
      "subject": "physics",
      "simType": "gas",
      "simOptions": {
            "mode": "molecular_motion",
            "tempK": 300,
            "volumeL": 3
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 8",
      "title": "Thực hành Mô hình động học phân tử chất khí",
      "guide": "Quan sát các phân tử khí chuyển động nhiệt hỗn loạn trong bình kín. Khi tăng nhiệt độ, vận tốc phân tử tăng lên, va chạm vào thành bình thường xuyên và mạnh hơn, làm tăng áp suất khí.",
      "questions": [
            {
                  "q": "Theo thuyết động học phân tử chất khí, nguyên nhân gây ra áp suất của chất khí lên thành bình chứa là:",
                  "opts": [
                        "Do vô số phân tử khí chuyển động hỗn loạn không ngừng và va chạm liên tục vào thành bình",
                        "Do lực hút tĩnh điện giữa các phân tử khí và thành bình",
                        "Do trọng lượng của các phân tử khí đè nén xuống",
                        "Do chất khí có nhiệt độ cao tự nhiên giãn nở"
                  ],
                  "ans": 0,
                  "exp": "Mỗi va chạm của một phân tử khí lên thành bình truyền một xung lượng lực $\\Delta p = 2mv_x$. Vô số va chạm của hàng triệu phân tử trên một đơn vị diện tích trong một đơn vị thời gian tạo nên áp suất chất khí trung bình lên thành bình."
            },
            {
                  "q": "Mô hình \"Khí lí tưởng\" là mô hình trong đó các phân tử khí được coi là:",
                  "opts": [
                        "Chất điểm (kích thước bỏ qua) và chỉ tương tác với nhau khi va chạm đàn hồi",
                        "Những khối cầu có kích thước rất lớn",
                        "Tương tác hút nhau rất mạnh ở khoảng cách xa",
                        "Luôn chuyển động theo các đường cong xoắn ốc"
                  ],
                  "ans": 0,
                  "exp": "Khí lí tưởng là mô hình gần đúng: các phân tử được coi là chất điểm có khối lượng nhưng thể tích bản thân không đáng kể, và chỉ tương tác với nhau bằng các va chạm hoàn toàn đàn hồi khi tiếp xúc."
            },
            {
                  "q": "Khi nhiệt độ của khối khí lí tưởng tăng lên gấp đôi thì tốc độ căn quân phương (vận tốc nhiệt đặc trưng) của các phân tử khí sẽ:",
                  "opts": [
                        "Tăng lên √2 lần (khoảng 1,41 lần)",
                        "Tăng lên 2 lần",
                        "Tăng lên 4 lần",
                        "Không đổi"
                  ],
                  "ans": 0,
                  "exp": "Vận tốc căn quân phương $v_{rms} = \\sqrt{\\overline{v^2}} = \\sqrt{\\frac{3k_B T}{m}}$. Do đó khi $T' = 2T \\Rightarrow v'_{rms} = \\sqrt{2} v_{rms}$."
            }
      ]
},
    'vatly12-b9': {
      "subject": "physics",
      "simType": "gas",
      "simOptions": {
            "mode": "boyle",
            "tempK": 300,
            "volumeL": 3
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 9",
      "title": "Thực hành Định luật Boyle cho quá trình đẳng nhiệt",
      "guide": "Kéo piston để thay đổi thể tích V từ 1 L đến 6 L ở nhiệt độ không đổi T = 300 K. Quan sát áp suất p thay đổi nghịch với thể tích và đường biểu diễn p–V dạng hypebol đẳng nhiệt.",
      "questions": [
            {
                  "q": "Nội dung Định luật Boyle đối với một khối lượng khí xác định ở nhiệt độ không đổi (quá trình đẳng nhiệt) là:",
                  "opts": [
                        "Áp suất tỉ lệ nghịch với thể tích: p · V = hằng số (p₁V₁ = p₂V₂)",
                        "Áp suất tỉ lệ thuận với thể tích: p / V = hằng số",
                        "Thể tích tỉ lệ thuận với nhiệt độ tuyệt đối",
                        "Áp suất tỉ lệ nghịch với nhiệt độ"
                  ],
                  "ans": 0,
                  "exp": "Định luật Boyle: Trong quá trình đẳng nhiệt của một lượng khí xác định, áp suất tỉ lệ nghịch với thể tích: $p \\propto \\frac{1}{V} \\iff p \\cdot V = \\text{const}$."
            },
            {
                  "q": "Đồ thị biểu diễn mối liên hệ giữa áp suất p và thể tích V trong quá trình đẳng nhiệt trên hệ tọa độ (p, V) có dạng là:",
                  "opts": [
                        "Một nhánh đường hypebol",
                        "Đường thẳng đi qua gốc tọa độ",
                        "Đường thẳng song song với trục hoành",
                        "Đường parabol"
                  ],
                  "ans": 0,
                  "exp": "Vì phương trình có dạng $p = \\frac{C}{V}$ ($y = \\frac{a}{x}$), trên hệ trục tọa độ $(p, V)$ đường đẳng nhiệt có dạng là một nhánh hypebol."
            },
            {
                  "q": "Một khối khí ở áp suất p₁ = 2 atm có thể tích V₁ = 6 lít. Nếu nén đẳng nhiệt khối khí đến thể tích V₂ = 3 lít thì áp suất p₂ của khối khí là:",
                  "opts": [
                        "p₂ = (p₁·V₁) / V₂ = (2 × 6) / 3 = 4 atm",
                        "p₂ = 1 atm",
                        "p₂ = 3 atm",
                        "p₂ = 6 atm"
                  ],
                  "ans": 0,
                  "exp": "Áp dụng định luật Boyle: $p_1 V_1 = p_2 V_2 \\Rightarrow p_2 = \\frac{p_1 V_1}{V_2} = \\frac{2 \\times 6}{3} = 4\\text{ atm}$. Thể tích giảm 2 lần thì áp suất tăng 2 lần."
            }
      ]
},
    'vatly12-b10': {
      "subject": "physics",
      "simType": "gas",
      "simOptions": {
            "mode": "charles",
            "tempK": 300,
            "volumeL": 3
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 10",
      "title": "Thực hành Định luật Charles cho quá trình đẳng áp",
      "guide": "Đun nóng khối khí để tăng nhiệt độ tuyệt đối T từ 200 K đến 600 K dưới áp suất không đổi p = 1 atm. Quan sát piston tự do dịch chuyển tăng thể tích V và đường đẳng áp V–T thẳng qua gốc tọa độ.",
      "questions": [
            {
                  "q": "Nội dung Định luật Charles đối với một khối lượng khí xác định ở áp suất không đổi (quá trình đẳng áp) là:",
                  "opts": [
                        "Thể tích tỉ lệ thuận với nhiệt độ tuyệt đối: V / T = hằng số (V₁/T₁ = V₂/T₂)",
                        "Thể tích tỉ lệ nghịch với nhiệt độ tuyệt đối",
                        "Thể tích tỉ lệ thuận với nhiệt độ Celsius t",
                        "Áp suất tỉ lệ thuận với thể tích"
                  ],
                  "ans": 0,
                  "exp": "Định luật Charles: Trong quá trình đẳng áp của một khối lượng khí xác định, thể tích tỉ lệ thuận với nhiệt độ tuyệt đối: $\\frac{V}{T} = \\text{const}$."
            },
            {
                  "q": "Đường đẳng áp trong hệ tọa độ (V, T) có dạng là:",
                  "opts": [
                        "Đường thẳng mà nếu kéo dài sẽ đi qua gốc tọa độ O (0 K)",
                        "Đường hypebol",
                        "Đường cong parabol",
                        "Đường elip"
                  ],
                  "ans": 0,
                  "exp": "Vì $V = C \\cdot T$, phương trình là hàm bậc nhất không có hệ số tự do, nên trên hệ trục $(V, T)$ đồ thị là đường thẳng hướng về gốc tọa độ $O$ (nét đứt ở vùng gần $0\\text{ K}$ vì khí bị hóa lỏng trước khi tới $0\\text{ K}$)."
            },
            {
                  "q": "Một khối khí ở nhiệt độ T₁ = 300 K có thể tích V₁ = 2 lít. Đun nóng đẳng áp khối khí đến nhiệt độ T₂ = 450 K. Thể tích V₂ của khối khí sau khi đun là:",
                  "opts": [
                        "V₂ = V₁ · (T₂ / T₁) = 2 × (450 / 300) = 3 lít",
                        "V₂ = 4 lít",
                        "V₂ = 1,5 lít",
                        "V₂ = 2,5 lít"
                  ],
                  "ans": 0,
                  "exp": "$\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\Rightarrow V_2 = V_1 \\frac{T_2}{T_1} = 2 \\times \\frac{450}{300} = 3\\text{ lít}$."
            }
      ]
},
    'vatly12-b11': {
      "subject": "physics",
      "simType": "gas",
      "simOptions": {
            "mode": "state_equation",
            "tempK": 300,
            "volumeL": 3,
            "molN": 1
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 11",
      "title": "Thực hành Phương trình trạng thái của khí lí tưởng",
      "guide": "Điều chỉnh đồng thời p, V, T và số mol n. Kiểm chứng phương trình trạng thái Clapeyron – Mendeleev p·V = n·R·T và định luật kết hợp (p₁·V₁)/T₁ = (p₂·V₂)/T₂.",
      "questions": [
            {
                  "q": "Phương trình trạng thái của một lượng khí lí tưởng xác định chuyển từ trạng thái 1 sang trạng thái 2 là:",
                  "opts": [
                        "(p₁ · V₁) / T₁ = (p₂ · V₂) / T₂ = hằng số",
                        "p₁ · V₁ · T₁ = p₂ · V₂ · T₂",
                        "p₁ / (V₁ · T₁) = p₂ / (V₂ · T₂)",
                        "(p₁ · T₁) / V₁ = (p₂ · T₂) / V₂"
                  ],
                  "ans": 0,
                  "exp": "Phương trình trạng thái khí lí tưởng kết hợp cả 3 thông số: $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2} = \\text{const}$."
            },
            {
                  "q": "Dạng tổng quát của phương trình Clapeyron – Mendeleev cho n mol khí lí tưởng là:",
                  "opts": [
                        "p · V = n · R · T = (m / M) · R · T",
                        "p · V = n · R / T",
                        "p / V = n · R · T",
                        "p · T = n · R · V"
                  ],
                  "ans": 0,
                  "exp": "Phương trình Clapeyron - Mendeleev: $p V = n R T = \\frac{m}{M} R T$, trong đó $R = 8{,}31\\text{ J}/(\\text{mol}\\cdot\\text{K})$ là hằng số khí lí tưởng."
            },
            {
                  "q": "Ở điều kiện tiêu chuẩn (p₀ = 1 atm, T₀ = 273,15 K), thể tích của 1 mol khí lí tưởng bất kỳ xấp xỉ bằng:",
                  "opts": [
                        "22,4 lít (hoặc 24,79 L ở 25°C, 1 bar theo chuẩn mới)",
                        "10,0 lít",
                        "1,0 lít",
                        "100 lít"
                  ],
                  "ans": 0,
                  "exp": "Áp dụng $V = \\frac{n R T}{p} = \\frac{1 \\times 0{,}0821 \\times 273{,}15}{1} \\approx 22{,}4\\text{ lít}$."
            }
      ]
},
    'vatly12-b12': {
      "subject": "physics",
      "simType": "gas",
      "simOptions": {
            "mode": "molecular_motion",
            "tempK": 350,
            "volumeL": 2.5
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 12",
      "title": "Thực hành Áp suất khí theo mô hình ĐHPT & Động năng phân tử",
      "guide": "Khảo sát công thức áp suất khí p = 2/3·n·E_đ và mối liên hệ giữa động năng chuyển động nhiệt trung bình của phân tử với nhiệt độ tuyệt đối E_đ = 3/2·k_B·T.",
      "questions": [
            {
                  "q": "Biểu thức liên hệ giữa động năng tịnh tiến trung bình E_đ của một phân tử khí lí tưởng đơn nguyên tử và nhiệt độ tuyệt đối T là:",
                  "opts": [
                        "E_đ = 3/2 · k_B · T",
                        "E_đ = 1/2 · k_B · T",
                        "E_đ = 3 · k_B · T",
                        "E_đ = 5/2 · k_B · T"
                  ],
                  "ans": 0,
                  "exp": "Theo định luật phân bố đều năng lượng theo bậc tự do, mỗi bậc tự do tịnh tiến đóng góp $\\frac{1}{2}k_B T$. Với 3 bậc tự do tịnh tiến $(x, y, z)$: $\\overline{E_đ} = \\frac{3}{2} k_B T$."
            },
            {
                  "q": "Hằng số Boltzmann k_B có mối liên hệ với hằng số khí lí tưởng R và số Avogadro N_A theo công thức:",
                  "opts": [
                        "k_B = R / N_A ≈ 1,38 × 10⁻²³ J/K",
                        "k_B = R · N_A",
                        "k_B = N_A / R",
                        "k_B = R² / N_A"
                  ],
                  "ans": 0,
                  "exp": "Hằng số Boltzmann là hằng số khí trên mỗi phân tử đơn lẻ: $k_B = \\frac{R}{N_A} = \\frac{8{,}314}{6{,}022 \\times 10^{23}} \\approx 1{,}38 \\times 10^{-23}\\text{ J/K}$."
            },
            {
                  "q": "Mối quan hệ giữa áp suất p của chất khí và mật độ động năng phân tử là:",
                  "opts": [
                        "p = 2/3 · n₀ · E_đ (với n₀ là mật độ phân tử khí trên 1 m³)",
                        "p = 3/2 · n₀ · E_đ",
                        "p = 1/3 · n₀ · E_đ",
                        "p = n₀ · E_đ"
                  ],
                  "ans": 0,
                  "exp": "Từ thuyết động học phân tử: $p = \\frac{1}{3} n_0 m \\overline{v^2} = \\frac{2}{3} n_0 \\left(\\frac{1}{2}m\\overline{v^2}\\right) = \\frac{2}{3} n_0 \\overline{E_đ}$."
            }
      ]
},
    'vatly12-b13': {
      "subject": "physics",
      "simType": "gas",
      "simOptions": {
            "mode": "state_equation",
            "tempK": 400,
            "volumeL": 4
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 13",
      "title": "Thực hành Luyện tập & Giải bài toán về Khí lí tưởng",
      "guide": "Sử dụng hệ thống mô phỏng để giải các bài toán chu trình nhiệt động, tính công sinh ra trong quá trình đẳng áp A = p·ΔV và chuyển đổi đồ thị giữa các hệ tọa độ (p,V), (V,T), (p,T).",
      "questions": [
            {
                  "q": "Trong quá trình biến đổi đẳng tích của một lượng khí xác định (thể tích V = const), công cơ học A do khối khí thực hiện bằng:",
                  "opts": [
                        "A = 0 J (vì thể tích không đổi ΔV = 0 nên khí không thực hiện công)",
                        "A = p · V",
                        "A = n · R · T",
                        "A > 0"
                  ],
                  "ans": 0,
                  "exp": "Công cơ học trong biến đổi chất khí: $A = \\int p dV$. Trong quá trình đẳng tích $dV = 0 \\Rightarrow A = 0$. Theo định luật I: $\\Delta U = Q$."
            },
            {
                  "q": "Công cơ học mà một khối khí thực hiện khi dãn nở đẳng áp ở áp suất p = 2 × 10⁵ Pa từ thể tích V₁ = 2 lít lên V₂ = 5 lít là:",
                  "opts": [
                        "A' = p · ΔV = 2 × 10⁵ × (3 × 10⁻³) = 600 J",
                        "A' = 60 J",
                        "A' = 1.000 J",
                        "A' = 1.400 J"
                  ],
                  "ans": 0,
                  "exp": "$\\Delta V = 5 - 2 = 3\\text{ lít} = 3 \\times 10^{-3}\\text{ m}^3$. Công do khối khí sinh ra: $A' = p\\Delta V = 2 \\times 10^5 \\times 3 \\times 10^{-3} = 600\\text{ J}$."
            },
            {
                  "q": "Trong một chu trình biến đổi khép kín (trên đồ thị p–V là một đường cong kín theo chiều kim đồng hồ), công tổng cộng do chất khí thực hiện có giá trị bằng:",
                  "opts": [
                        "Diện tích hình phẳng giới hạn bởi chu trình kín trên đồ thị p–V",
                        "Bằng 0",
                        "Bằng nội năng ban đầu của khí",
                        "Bằng nhiệt lượng nhận từ nguồn lạnh"
                  ],
                  "ans": 0,
                  "exp": "Công cơ học thực hiện trong một chu trình kín chính bằng diện tích hình giới hạn bên trong đường chu trình trên hệ tọa độ $(p, V)$. Nếu chu trình quay theo chiều kim đồng hồ thì công sinh ra $A' > 0$ (chu trình động cơ nhiệt)."
            }
      ]
},
    'vatly12-b14': {
      "subject": "physics",
      "simType": "magnetism",
      "simOptions": {
            "mode": "faraday_lenz",
            "magnetPos": 120
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 14",
      "title": "Thực hành Từ trường & Đường sức từ",
      "guide": "Khảo sát dạng đường sức từ của nam châm thẳng và ống dây mang dòng điện. Nhận diện các cực từ (Bắc N, Nam S) và chiều quy ước của đường sức từ: \"Vào Nam ra Bắc\".",
      "questions": [
            {
                  "q": "Quy ước chiều của đường sức từ bên ngoài nam châm thẳng là:",
                  "opts": [
                        "Đi ra từ cực Bắc (N) và đi vào cực Nam (S)",
                        "Đi ra từ cực Nam (S) và đi vào cực Bắc (N)",
                        "Đồng tâm tròn khép kín quanh cực Bắc",
                        "Đi thẳng song song với thanh nam châm"
                  ],
                  "ans": 0,
                  "exp": "Quy ước chiều đường sức từ bên ngoài nam châm: \"Vào Nam (S) ra Bắc (N)\". Bên trong lòng thanh nam châm, đường sức đi từ cực Nam sang cực Bắc tạo thành những đường cong khép kín."
            },
            {
                  "q": "Tính chất cơ bản và quan trọng nhất của từ trường là:",
                  "opts": [
                        "Tác dụng lực từ lên nam châm khác hoặc lên dòng điện đặt trong nó",
                        "Hút tất cả các vật bằng kim loại đồng, nhôm, vàng",
                        "Tác dụng lực hấp dẫn lên mọi vật",
                        "Sinh ra ánh sáng nhìn thấy"
                  ],
                  "ans": 0,
                  "exp": "Từ trường là một dạng vật chất tồn tại xung quanh điện tích chuyển động (dòng điện) hoặc nam châm, có tính chất cơ bản là tác dụng lực từ lên kim nam châm hoặc dòng điện khác đặt trong nó."
            },
            {
                  "q": "Các đường sức từ có đặc điểm hình học nào khác biệt cơ bản so với các đường sức điện trường tĩnh?",
                  "opts": [
                        "Đường sức từ là những đường cong khép kín (hoặc vô hạn ở hai đầu), không có điểm bắt đầu hay kết thúc",
                        "Đường sức từ luôn xuất phát từ hạt mang điện",
                        "Đường sức từ có thể cắt nhau",
                        "Đường sức từ là các đoạn thẳng đứt quãng"
                  ],
                  "ans": 0,
                  "exp": "Từ trường là một trường xoáy: Không tồn tại đơn cực từ trong tự nhiên, do đó các đường sức từ luôn là những đường cong khép kín, trong khi đường sức tĩnh điện là đường hở bắt đầu từ $(+)$ và kết thúc ở $(-)$."
            }
      ]
},
    'vatly12-b15': {
      "subject": "physics",
      "simType": "magnetism",
      "simOptions": {
            "mode": "lorentz_force",
            "bFieldTesla": 0.5,
            "currentI": 3
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 15",
      "title": "Thực hành Lực từ & Cảm ứng từ B",
      "guide": "Thay đổi độ lớn cảm ứng từ B và cường độ dòng điện I. Kiểm chứng công thức lực từ F = B·I·l·sin α và xác định hướng của lực từ F⃗ theo quy tắc bàn tay trái.",
      "questions": [
            {
                  "q": "Độ lớn của lực từ tác dụng lên đoạn dây dẫn thẳng chiều dài l mang dòng điện I đặt trong từ trường đều B hợp với dây góc α là:",
                  "opts": [
                        "F = B · I · l · sin α",
                        "F = B · I · l · cos α",
                        "F = (B · I) / (l · sin α)",
                        "F = B · I / l"
                  ],
                  "ans": 0,
                  "exp": "Công thức lực từ (định luật Ampère): $F = B I l \\sin\\alpha$, trong đó $\\alpha = (\\vec{B}, \\vec{I})$. Khi dây vuông góc với đường sức từ ($\\alpha = 90^\\circ$), lực từ đạt cực đại $F_{max} = B I l$."
            },
            {
                  "q": "Quy tắc bàn tay trái xác định chiều của lực từ F⃗ tác dụng lên dòng điện phát biểu như thế nào?",
                  "opts": [
                        "Đặt bàn tay trái sao cho các đường sức từ B⃗ đâm vào lòng bàn tay, chiều từ cổ tay đến ngón tay chỉ chiều dòng điện I, ngón tay cái choãi ra 90° chỉ chiều lực từ F⃗",
                        "Đặt bàn tay phải sao cho ngón cái chỉ chiều dòng điện",
                        "Lực từ luôn cùng chiều với vectơ cảm ứng từ B⃗",
                        "Lực từ luôn cùng chiều với dòng điện I"
                  ],
                  "ans": 0,
                  "exp": "Quy tắc bàn tay trái: Đường sức từ hướng vào lòng bàn tay, 4 ngón tay theo chiều dòng điện $I$, ngón cái choãi $90^circ$ chỉ chiều lực từ $\\vec{F}$."
            },
            {
                  "q": "Một đoạn dây dẫn dài l = 20 cm mang dòng điện I = 5 A đặt vuông góc với từ trường đều B = 0,4 T. Lực từ tác dụng lên đoạn dây là:",
                  "opts": [
                        "F = 0,4 × 5 × 0,2 × sin 90° = 0,4 N",
                        "F = 4 N",
                        "F = 0,04 N",
                        "F = 2 N"
                  ],
                  "ans": 0,
                  "exp": "$F = B I l \\sin\\alpha = 0{,}4 \\times 5 \\times 0{,}2 \\times 1 = 0{,}4\\text{ N}$."
            }
      ]
},
    'vatly12-b16': {
      "subject": "physics",
      "simType": "magnetism",
      "simOptions": {
            "mode": "faraday_lenz",
            "magnetPos": 140
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 16",
      "title": "Thực hành Từ thông & Hiện tượng cảm ứng điện từ",
      "guide": "Kéo nam châm chuyển động tương đối so với cuộn dây kín. Quan sát từ thông Φ = B·S·cos α biến thiên, xuất hiện suất điện động cảm ứng e_c = −ΔΦ/Δt và dòng điện cảm ứng tuân theo Định luật Lenz.",
      "questions": [
            {
                  "q": "Từ thông qua một khung dây phẳng diện tích S gồm N vòng dây đặt trong từ trường đều B có vectơ pháp tuyến n⃗ hợp với B⃗ góc α là:",
                  "opts": [
                        "Φ = N · B · S · cos α (đơn vị Wb - Vêbe)",
                        "Φ = N · B · S · sin α",
                        "Φ = B · S / cos α",
                        "Φ = N · B / S"
                  ],
                  "ans": 0,
                  "exp": "Công thức từ thông: $\\Phi = N B S \\cos\\alpha$, đơn vị Weber ($1\\text{ Wb} = 1\\text{ T}\\cdot\\text{m}^2$). Từ thông đạt cực đại khi mặt khung dây vuông góc với $\\vec{B}$ (tức $\\alpha = 0^\\circ$)."
            },
            {
                  "q": "Định luật cơ bản về cảm ứng điện từ của Faraday phát biểu rằng độ lớn của suất điện động cảm ứng xuất hiện trong mạch kín tỉ lệ với:",
                  "opts": [
                        "Tốc độ biến thiên của từ thông qua mạch kín đó: |e_c| = |ΔΦ / Δt|",
                        "Độ lớn của cảm ứng từ B",
                        "Diện tích khung dây",
                        "Điện trở của mạch kín"
                  ],
                  "ans": 0,
                  "exp": "Định luật Faraday: $e_c = -\\frac{\\Delta\\Phi}{\\Delta t}$. Độ lớn của suất điện động cảm ứng tỉ lệ thuận với tốc độ biến thiên của từ thông qua mạch."
            },
            {
                  "q": "Hiện tượng cảm ứng điện từ xảy ra khi nào?",
                  "opts": [
                        "Khi có sự biến thiên từ thông qua mạch kín theo thời gian",
                        "Khi mạch kín được đặt trong từ trường không đổi",
                        "Khi cho dòng điện không đổi chạy qua mạch",
                        "Khi mạch kín đứng yên trong từ trường đều"
                  ],
                  "ans": 0,
                  "exp": "Điều kiện cốt lõi để xuất hiện suất điện động và dòng điện cảm ứng là từ thông gửi qua mạch kín phải biến thiên theo thời gian ($\\Delta\\Phi \\neq 0$)."
            }
      ]
},
    'vatly12-b17': {
      "subject": "physics",
      "simType": "magnetism",
      "simOptions": {
            "mode": "generator",
            "omegaRot": 4
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 17",
      "title": "Thực hành Máy phát điện xoay chiều",
      "guide": "Quay khung dây trong từ trường đều với tốc độ góc ω. Quan sát góc quay của khung dây đồng bộ với đồ thị suất điện động xoay chiều hình sin e(t) = E₀·cos(ωt).",
      "questions": [
            {
                  "q": "Nguyên tắc hoạt động của máy phát điện xoay chiều dựa trên:",
                  "opts": [
                        "Hiện tượng cảm ứng điện từ",
                        "Tác dụng từ của dòng điện",
                        "Hiện tượng nhiệt điện",
                        "Hiện tượng quang điện"
                  ],
                  "ans": 0,
                  "exp": "Máy phát điện xoay chiều hoạt động dựa trên hiện tượng cảm ứng điện từ: khi quay khung dây trong từ trường (hoặc quay nam châm quanh cuộn dây cố định), từ thông biến thiên tuần hoàn sinh ra suất điện động xoay chiều."
            },
            {
                  "q": "Hai bộ phận chính cấu tạo nên máy phát điện xoay chiều là:",
                  "opts": [
                        "Phần cảm (tạo ra từ trường) và phần ứng (tạo ra dòng điện)",
                        "Động cơ và trục quay",
                        "Khóa K và biến trở",
                        "Cầu dao và ampe kế"
                  ],
                  "ans": 0,
                  "exp": "Máy phát điện gồm hai bộ phận cơ bản: Phần cảm (nam châm vĩnh cửu hoặc nam châm điện để tạo ra từ trường) và Phần ứng (các cuộn dây để xuất hiện suất điện động cảm ứng). Một phần đứng yên (Stator), một phần quay (Rotor)."
            },
            {
                  "q": "Một máy phát điện xoay chiều một pha có p cặp cực từ, rotor quay với tốc độ n vòng/giây. Tần số f của dòng điện xoay chiều phát ra là:",
                  "opts": [
                        "f = n · p",
                        "f = n / p",
                        "f = 60 · n · p",
                        "f = p / n"
                  ],
                  "ans": 0,
                  "exp": "Công thức tần số dòng điện xoay chiều: $f = n \\cdot p$ (khi $n$ đo bằng vòng/giây) hoặc $f = \\frac{n \\cdot p}{60}$ (khi $n$ đo bằng vòng/phút)."
            }
      ]
},
    'vatly12-b18': {
      "subject": "physics",
      "simType": "magnetism",
      "simOptions": {
            "mode": "transformer",
            "n1Turns": 400,
            "n2Turns": 800
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 18",
      "title": "Thực hành Máy biến áp & Ứng dụng cảm ứng điện từ",
      "guide": "Thay đổi số vòng dây cuộn sơ cấp N₁ và cuộn thứ cấp N₂ trên lõi thép khép kín. Kiểm chứng hệ thức máy biến áp lí tưởng U₂/U₁ = N₂/N₁ và phân biệt máy tăng áp, hạ áp.",
      "questions": [
            {
                  "q": "Hệ thức liên hệ giữa điện áp hiệu dụng và số vòng dây trong máy biến áp lí tưởng (bỏ qua hao phí) là:",
                  "opts": [
                        "U₂ / U₁ = N₂ / N₁ = I₁ / I₂",
                        "U₂ / U₁ = N₁ / N₂",
                        "U₁ · U₂ = N₁ · N₂",
                        "U₂ / U₁ = I₂ / I₁"
                  ],
                  "ans": 0,
                  "exp": "Trong máy biến áp lí tưởng: Tỉ số điện áp hiệu dụng hai đầu cuộn thứ cấp và sơ cấp bằng tỉ số số vòng dây của hai cuộn: $\\frac{U_2}{U_1} = \\frac{N_2}{N_1}$. Do bảo toàn công suất $P_1 = P_2 \\iff U_1 I_1 = U_2 I_2 \\Rightarrow \\frac{U_2}{U_1} = \\frac{I_1}{I_2}$."
            },
            {
                  "q": "Khi cuộn thứ cấp có số vòng dây lớn hơn cuộn sơ cấp (N₂ > N₁) thì máy biến áp có tác dụng gì?",
                  "opts": [
                        "Tăng điện áp (Máy tăng áp) và giảm cường độ dòng điện",
                        "Hạ điện áp (Máy hạ áp)",
                        "Tăng tần số dòng điện",
                        "Biến đổi dòng xoay chiều thành dòng một chiều"
                  ],
                  "ans": 0,
                  "exp": "Khi $N_2 > N_1 \\Rightarrow U_2 > U_1$, đây là máy tăng áp, được dùng ở đầu đường dây truyền tải điện năng đi xa để giảm hao phí do tỏa nhiệt trên đường dây ($P_{hp} \\propto 1/U^2$)."
            },
            {
                  "q": "Dòng điện Foucault (Fu-cô) xuất hiện trong khối kim loại khi đặt trong từ trường biến thiên có ứng dụng có ích tiêu biểu trong:",
                  "opts": [
                        "Bếp từ nấu ăn và bộ phanh hãm điện từ của tàu cao tốc",
                        "Lõi thép của máy biến áp thông thường",
                        "Đường dây tải điện cao thế",
                        "Mạch vi xử lý máy tính"
                  ],
                  "ans": 0,
                  "exp": "Dòng Foucault sinh nhiệt lớn được ứng dụng trong bếp từ và lò tôi luyện kim; tác dụng cản trở chuyển động của dòng Foucault được dùng làm phanh điện từ êm ái cho tàu đệm từ và xe tải nặng."
            }
      ]
},
    'vatly12-b19': {
      "subject": "physics",
      "simType": "wave_acoustics",
      "simOptions": {
            "mode": "em_spectrum",
            "logLambda": -6.5
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 19",
      "title": "Thực hành Điện từ trường & Mô hình sóng điện từ",
      "guide": "Khảo sát mô hình sóng điện từ lan truyền trong không gian. Quan sát cấu trúc 3 chiều trực giao của vectơ điện trường E⃗, vectơ cảm ứng từ B⃗ và vectơ vận tốc truyền sóng v⃗.",
      "questions": [
            {
                  "q": "Trong sóng điện từ, vectơ cường độ điện trường E⃗ và vectơ cảm ứng từ B⃗ tại mỗi điểm luôn có mối quan hệ như thế nào?",
                  "opts": [
                        "Dao động cùng tần số, cùng pha và có phương vuông góc với nhau và vuông góc với phương truyền sóng",
                        "Dao động vuông pha với nhau",
                        "Dao động ngược pha với nhau",
                        "Có phương song song với nhau"
                  ],
                  "ans": 0,
                  "exp": "Sóng điện từ là sóng ngang: $\\vec{E} \\perp \\vec{B} \\perp \\vec{v}$. Tại mọi điểm trên phương truyền, điện trường và từ trường luôn biến thiên điều hòa cùng pha ($E$ và $B$ cùng đạt cực đại, cùng bằng 0 đồng thời)."
            },
            {
                  "q": "Luận điểm nổi tiếng của James Clerk Maxwell về mối liên hệ mật thiết giữa điện trường và từ trường là:",
                  "opts": [
                        "Một từ trường biến thiên theo thời gian sinh ra một điện trường xoáy; ngược lại, một điện trường biến thiên sinh ra một từ trường",
                        "Điện trường và từ trường tồn tại hoàn toàn độc lập",
                        "Từ trường chỉ sinh ra từ nam châm vĩnh cửu",
                        "Điện trường tĩnh luôn sinh ra từ trường xoáy"
                  ],
                  "ans": 0,
                  "exp": "Thuyết điện từ Maxwell khẳng định sự thống nhất biện chứng: từ trường biến thiên sinh ra điện trường xoáy, và điện trường biến thiên (dòng điện dịch) sinh ra từ trường, tạo nên điện từ trường lan truyền thành sóng điện từ."
            },
            {
                  "q": "Sóng điện từ có thể lan truyền được trong môi trường nào mà sóng cơ học hoàn toàn không thể truyền qua?",
                  "opts": [
                        "Môi trường chân không (với tốc độ c = 3 × 10⁸ m/s)",
                        "Chất lỏng",
                        "Chất rắn kim loại",
                        "Không khí loãng"
                  ],
                  "ans": 0,
                  "exp": "Sóng cơ cần môi trường vật chất đàn hồi để truyền dao động phân tử nên không truyền được trong chân không. Ngược lại, sóng điện từ là trường năng lượng lan truyền nên truyền tốt nhất trong chân không với tốc độ $c = 3 \\times 10^8\\text{ m/s}$."
            }
      ]
},
    'vatly12-b20': {
      "subject": "physics",
      "simType": "magnetism",
      "simOptions": {
            "mode": "lorentz_force",
            "bFieldTesla": 0.8,
            "currentI": 5
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 20",
      "title": "Thực hành Luyện tập & Giải bài toán về Từ trường",
      "guide": "Sử dụng hệ thống mô phỏng để giải quyết các bài toán tổng hợp về lực từ tác dụng lên đoạn dây dẫn, lực từ giữa hai dòng điện song song và tính toán suất điện động cảm ứng.",
      "questions": [
            {
                  "q": "Hai dây dẫn thẳng dài song song cách nhau một khoảng r mang hai dòng điện cùng chiều I₁ và I₂ sẽ tương tác với nhau như thế nào?",
                  "opts": [
                        "Hút nhau với độ lớn lực trên mỗi đơn vị chiều dài F/l = 2 × 10⁻⁷ · (I₁·I₂) / r",
                        "Đẩy nhau",
                        "Không tương tác với nhau",
                        "Vuông góc với nhau"
                  ],
                  "ans": 0,
                  "exp": "Hai dòng điện thẳng song song cùng chiều thì hút nhau, ngược chiều thì đẩy nhau. Lực từ tương tác trên một mét chiều dài: $\\frac{F}{l} = 2 \\times 10^{-7} \\frac{I_1 I_2}{r}$."
            },
            {
                  "q": "Khung dây phẳng diện tích S = 50 cm² gồm N = 100 vòng dây đặt vuông góc với từ trường đều B biến thiên đều đặn từ 0 đến 0,2 T trong thời gian Δt = 0,1 s. Suất điện động cảm ứng xuất hiện trong khung là:",
                  "opts": [
                        "|e_c| = N · S · (ΔB / Δt) = 100 × (50 × 10⁻⁴) × (0,2 / 0,1) = 1,0 V",
                        "|e_c| = 0,1 V",
                        "|e_c| = 10 V",
                        "|e_c| = 0,5 V"
                  ],
                  "ans": 0,
                  "exp": "$|e_c| = N \\left|\\frac{\\Delta\\Phi}{\\Delta t}\\right| = N S \\frac{\\Delta B}{\\Delta t} = 100 \\times (50 \\times 10^{-4}) \\times \\frac{0{,}2}{0{,}1} = 1{,}0\\text{ V}$."
            },
            {
                  "q": "Hạt điện tích q bay vào từ trường đều B với vận tốc v vuông góc với đường sức từ sẽ chịu tác dụng của lực Lorentz và chuyển động theo quỹ đạo:",
                  "opts": [
                        "Đường tròn phẳng nằm trong mặt phẳng vuông góc với B⃗, bán kính R = (m·v) / (|q|·B)",
                        "Đường thẳng theo phương vận tốc ban đầu",
                        "Đường parabol",
                        "Đường xoắn ốc có bước ốc không đổi"
                  ],
                  "ans": 0,
                  "exp": "Lực Lorentz $f_L = |q| v B$ luôn vuông góc với vận tốc $\\vec{v}$ đóng vai trò là lực hướng tâm: $|q| v B = \\frac{m v^2}{R} \\Rightarrow R = \\frac{m v}{|q| B}$, hạt chuyển động tròn đều."
            }
      ]
},
    'vatly12-b21': {
      "subject": "physics",
      "simType": "nuclear",
      "simOptions": {
            "mode": "nucleus_structure",
            "selectedNuclide": "U235"
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 21",
      "title": "Thực hành Cấu trúc hạt nhân nguyên tử",
      "guide": "Khám phá cấu tạo hạt nhân từ các nucleon (proton mang điện tích dương và neutron trung hòa). Chọn các đồng vị He-4, C-12, Fe-56, U-235 để khảo sát số khối A, điện tích Z và kích thước hạt nhân.",
      "questions": [
            {
                  "q": "Hạt nhân nguyên tử được ký hiệu là ^A_ZX. Thành phần cấu tạo của hạt nhân này gồm:",
                  "opts": [
                        "Z proton mang điện tích +e và N = (A − Z) neutron không mang điện",
                        "A proton và Z neutron",
                        "Z electron và A neutron",
                        "A nucleon đều mang điện tích dương"
                  ],
                  "ans": 0,
                  "exp": "Hạt nhân $^A_Z X$ có số hiệu nguyên tử $Z$ (số proton mang điện tích $+e$) và số khối $A$ (tổng số nucleon gồm cả proton và neutron). Số hạt neutron là $N = A - Z$."
            },
            {
                  "q": "Đồng vị là các nguyên tử mà hạt nhân của chúng có đặc điểm:",
                  "opts": [
                        "Cùng số proton Z nhưng khác số neutron N (do đó khác số khối A)",
                        "Cùng số neutron N nhưng khác số proton Z",
                        "Cùng số khối A nhưng khác số proton Z",
                        "Có cùng khối lượng nguyên tử"
                  ],
                  "ans": 0,
                  "exp": "Đồng vị là các nguyên tử của cùng một nguyên tố hóa học, có cùng số proton $Z$ (do đó cùng tính chất hóa học và vị trí trong bảng tuần hoàn) nhưng khác nhau về số neutron $N$ dẫn đến số khối $A$ khác nhau."
            },
            {
                  "q": "Lực hạt nhân (tương tác mạnh) giữ các nucleon liên kết chặt chẽ trong hạt nhân có đặc điểm gì?",
                  "opts": [
                        "Có cường độ rất mạnh nhưng chỉ có tác dụng trong phạm vi kích thước hạt nhân (khoảng 10⁻¹⁵ m)",
                        "Có bản chất là lực hút tĩnh điện giữa các proton",
                        "Có bán kính tác dụng vô hạn tương tự lực hấp dẫn",
                        "Chỉ hút các neutron với nhau"
                  ],
                  "ans": 0,
                  "exp": "Lực hạt nhân là lực tương tác mạnh nhất trong tự nhiên, không phụ thuộc vào điện tích, có tác dụng liên kết các nucleon bất chấp lực đẩy tĩnh điện giữa các proton, nhưng bán kính tác dụng cực ngắn $\\approx 10^{-15}\\text{ m}$."
            }
      ]
},
    'vatly12-b22': {
      "subject": "physics",
      "simType": "nuclear",
      "simOptions": {
            "mode": "nucleus_structure",
            "selectedNuclide": "Fe56"
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 22",
      "title": "Thực hành Phản ứng hạt nhân & Năng lượng liên kết",
      "guide": "Khảo sát độ hụt khối Δm = Z·m_p + (A − Z)·m_n − m_hn và năng lượng liên kết E_lk = Δm·c². Phân tích đường cong năng lượng liên kết riêng E_lkr theo số khối A, giải thích độ bền vững của ⁵⁶₂₆Fe.",
      "questions": [
            {
                  "q": "Đại lượng nào sau đây đặc trưng cho mức độ BỀN VỮNG của một hạt nhân nguyên tử?",
                  "opts": [
                        "Năng lượng liên kết riêng E_lkr = E_lk / A (năng lượng liên kết tính trên một nucleon)",
                        "Năng lượng liên kết toàn phần E_lk",
                        "Độ hụt khối Δm",
                        "Số khối A"
                  ],
                  "ans": 0,
                  "exp": "Độ bền vững của hạt nhân không phụ thuộc vào năng lượng liên kết toàn phần $E_{lk}$ mà phụ thuộc vào năng lượng liên kết riêng $E_{lkr} = \\frac{E_{lk}}{A}$. Năng lượng liên kết riêng càng lớn thì hạt nhân càng bền vững."
            },
            {
                  "q": "Khối lượng của hạt nhân luôn nhỏ hơn tổng khối lượng của các nucleon riêng rẽ cấu tạo nên nó. Độ chênh lệch này được gọi là:",
                  "opts": [
                        "Độ hụt khối: Δm = [Z·m_p + (A − Z)·m_n] − m_hn",
                        "Khối lượng phân rã",
                        "Năng lượng nghỉ",
                        "Độ sai lệch nguyên tử"
                  ],
                  "ans": 0,
                  "exp": "Khi các nucleon liên kết tạo thành hạt nhân, một phần khối lượng chuyển hóa thành năng lượng liên kết tỏa ra theo hệ thức Einstein: $E_{lk} = \\Delta m \\cdot c^2$. Độ chênh lệch $\\Delta m$ gọi là độ hụt khối."
            },
            {
                  "q": "Các hạt nhân bền vững nhất trong tự nhiên (như Sắt ⁵⁶₂₆Fe) có số khối A nằm trong khoảng nào và có năng lượng liên kết riêng khoảng bao nhiêu?",
                  "opts": [
                        "Số khối A từ 50 đến 80, năng lượng liên kết riêng đạt cực đại khoảng 8,8 MeV/nucleon",
                        "Số khối A rất nhỏ dưới 10",
                        "Số khối A rất lớn trên 200",
                        "Khoảng 1 MeV/nucleon"
                  ],
                  "ans": 0,
                  "exp": "Đường cong năng lượng liên kết riêng cho thấy các hạt nhân có số khối trung bình ($50 < A < 80$, đỉnh cao nhất là $^{56}_{26}\\text{Fe}$ với $E_{lkr} \\approx 8{,}79\\text{ MeV/nuclon}$) là bền vững nhất."
            }
      ]
},
    'vatly12-b23': {
      "subject": "physics",
      "simType": "nuclear",
      "simOptions": {
            "mode": "radioactivity",
            "halflifeT": 5
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 23",
      "title": "Thực hành Hiện tượng phóng xạ & Định luật phóng xạ",
      "guide": "Quan sát sự phân rã ngẫu nhiên của các hạt nhân phóng xạ. Theo dõi đồ thị hàm mũ N(t) = N₀·2^(-t/T) và nhận diện các tia phóng xạ α (hạt He-4), β⁻ (electron), β⁺ (positron) và tia γ (photon).",
      "questions": [
            {
                  "q": "Hiện tượng phóng xạ là hiện tượng:",
                  "opts": [
                        "Hạt nhân không bền vững tự động phân rã, phát ra các tia phóng xạ và biến đổi thành hạt nhân khác",
                        "Hạt nhân bị bắn phá bởi hạt photon",
                        "Hai hạt nhân nhẹ kết hợp thành hạt nhân nặng",
                        "Hạt nhân hấp thụ nhiệt lượng để phát sáng"
                  ],
                  "ans": 0,
                  "exp": "Phóng xạ là quá trình tự phân rã tự phát của hạt nhân không bền vững, hoàn toàn không phụ thuộc vào các điều kiện môi trường như nhiệt độ, áp suất hay liên kết hóa học."
            },
            {
                  "q": "Bản chất của tia phóng xạ Alpha (α) là dòng các hạt gì?",
                  "opts": [
                        "Hạt nhân nguyên tử Heli (⁴₂He) chuyển động với tốc độ khoảng 20.000 km/s",
                        "Dòng các hạt electron mang điện tích âm",
                        "Dòng các hạt proton mang điện tích dương",
                        "Sóng điện từ có bước sóng cực ngắn"
                  ],
                  "ans": 0,
                  "exp": "Tia $\\alpha$ là dòng các hạt nhân Heli $^4_2\\text{He}$ ($2$ proton và $2$ neutron), mang điện tích $+2e$, có khả năng ion hóa mạnh nhưng quãng đường đi trong không khí ngắn (vài cm)."
            },
            {
                  "q": "Ban đầu có N₀ = 1.000 hạt nhân phóng xạ có chu kì bán rã T = 10 ngày. Sau thời gian t = 30 ngày (3 chu kì bán rã), số hạt nhân CHƯA BỊ PHÂN RÃ còn lại là:",
                  "opts": [
                        "N = N₀ / 2³ = 1.000 / 8 = 125 hạt",
                        "N = 250 hạt",
                        "N = 500 hạt",
                        "N = 875 hạt"
                  ],
                  "ans": 0,
                  "exp": "Sau thời gian $t = 3T$, số hạt nhân còn lại: $N(t) = N_0 \\cdot 2^{-t/T} = 1000 \\cdot 2^{-3} = \\frac{1000}{8} = 125\\text{ hạt}$. Số hạt nhân đã bị phân rã là $\\Delta N = 1000 - 125 = 875\\text{ hạt}$."
            }
      ]
},
    'vatly12-b24': {
      "subject": "physics",
      "simType": "nuclear",
      "simOptions": {
            "mode": "nucleus_structure",
            "selectedNuclide": "U235"
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 24",
      "title": "Thực hành Công nghiệp hạt nhân & Phản ứng dây chuyền",
      "guide": "Tìm hiểu nguyên lí phản ứng phân hạch dây chuyền của Urani-235 trong lò phản ứng hạt nhân. Khám phá cơ chế điều khiển hệ số nhân neutron k = 1 bằng các thanh hấp thụ cadmium/boron để tạo năng lượng an toàn.",
      "questions": [
            {
                  "q": "Phản ứng phân hạch hạt nhân dây chuyền tự duy trì được trong lò phản ứng hạt nhân phát điện khi hệ số nhân neutron k thỏa mãn điều kiện:",
                  "opts": [
                        "k = 1 (trạng thái tới hạn, phản ứng dây chuyền diễn ra ổn định kiểm soát được)",
                        "k > 1 (trạng thái vượt tới hạn gây nổ)",
                        "k < 1 (phản ứng tắt dần)",
                        "k = 0"
                  ],
                  "ans": 0,
                  "exp": "Để lò phản ứng hạt nhân hoạt động ổn định cung cấp điện năng liên tục, hệ số nhân neutron phải được duy trì chính xác ở mức tới hạn $k = 1$ nhờ các thanh điều khiển hấp thụ neutron thừa (làm bằng Bo hoặc Cadmi)."
            },
            {
                  "q": "Nhiên liệu hạt nhân thông dụng nhất được sử dụng trong các nhà máy điện hạt nhân thương mại hiện nay là:",
                  "opts": [
                        "Đồng vị Urani-235 (²³⁵₉₂U) được làm giàu",
                        "Chì (²⁰⁶₈₂Pb)",
                        "Sắt (⁵⁶₂₆Fe)",
                        "Cacbon-12"
                  ],
                  "ans": 0,
                  "exp": "Urani-235 ($^{235}_{92}\\text{U}$) là đồng vị duy nhất trong tự nhiên có thể phân hạch bởi các neutron nhiệt (neutron chậm), giải phóng khoảng $200\\text{ MeV}$ trên mỗi hạt nhân phân hạch."
            },
            {
                  "q": "Ưu điểm lớn nhất của năng lượng hạt nhân trong bối cảnh chống biến đổi khí hậu toàn cầu là:",
                  "opts": [
                        "Sản xuất lượng điện khổng lồ liên tục và hầu như không phát thải khí nhà kính (CO₂) trong quá trình vận hành",
                        "Không bao giờ sinh ra chất thải phóng xạ",
                        "Chi phí xây dựng nhà máy rẻ nhất",
                        "Không đòi hỏi công nghệ bảo an nghiêm ngặt"
                  ],
                  "ans": 0,
                  "exp": "Nhà máy điện hạt nhân vận hành bằng năng lượng phân hạch, không đốt nhiên liệu hóa thạch nên không sinh ra khí thải nhà kính $\\text{CO}_2$, cung cấp nguồn điện nền sạch và ổn định."
            }
      ]
},
    'vatly12-b25': {
      "subject": "physics",
      "simType": "nuclear",
      "simOptions": {
            "mode": "carbon_dating",
            "decayFraction": 0.5
      },
      "labUrl": "physics_lab.html",
      "badge": "Vật Lí 12 • Bài 25",
      "title": "Thực hành Bài tập về Vật lí hạt nhân & Định tuổi C-14",
      "guide": "Sử dụng mô phỏng định tuổi bằng đồng vị Carbon-14 (chu kỳ bán rã T = 5730 năm). Kéo thanh tỉ lệ hoạt độ phóng xạ còn lại để suy ra niên đại của các mẫu hóa thạch, cổ vật khảo cổ.",
      "questions": [
            {
                  "q": "Phương pháp định tuổi khảo cổ học bằng đồng vị phóng xạ Cacbon ¹⁴₆C dựa trên nguyên tắc:",
                  "opts": [
                        "Khi sinh vật còn sống trao đổi chất giữ tỉ lệ ¹⁴C không đổi; khi chết quá trình trao đổi ngừng và ¹⁴C phân rã với chu kì T = 5.730 năm",
                        "Đo khối lượng tro than còn lại",
                        "Đo nhiệt độ của mẫu hóa thạch",
                        "Phân tích thành phần cấu tạo nguyên tử sắt"
                  ],
                  "ans": 0,
                  "exp": "Khi sinh vật hấp thụ $\\text{CO}_2$ qua quang hợp/ăn uống, tỉ lệ $^{14}\\text{C}/^{12}\\text{C}$ cân bằng với khí quyển. Khi sinh vật chết, $^{14}\\text{C}$ không được bù đắp và phân rã dần với $T = 5730\\text{ năm}$, cho phép tính tuổi: $t = -T\\frac{\\ln(N/N_0)}{\\ln 2}$."
            },
            {
                  "q": "Một mảnh gỗ cổ khảo cổ học có tỉ lệ hạt nhân ¹⁴C chỉ còn bằng 25% (1/4) so với gỗ tươi mới chặt. Biết chu kì bán rã của ¹⁴C là 5.730 năm. Tuổi của mảnh gỗ này là:",
                  "opts": [
                        "t = 2 · T = 2 × 5.730 = 11.460 năm",
                        "t = 5.730 năm",
                        "t = 17.190 năm",
                        "t = 2.865 năm"
                  ],
                  "ans": 0,
                  "exp": "Tỉ lệ còn lại $N/N_0 = 1/4 = (1/2)^2 \\Rightarrow t = 2T = 2 \\times 5730 = 11.460\\text{ năm}$."
            },
            {
                  "q": "Trong mọi phản ứng hạt nhân, hai định luật bảo toàn nào sau đây LUÔN LUÔN ĐƯỢC TUÂN THEO?",
                  "opts": [
                        "Định luật bảo toàn số khối A (số nucleon) và Định luật bảo toàn điện tích Z",
                        "Bảo toàn khối lượng nghỉ",
                        "Bảo toàn số hạt neutron",
                        "Bảo toàn số hạt proton riêng lẻ"
                  ],
                  "ans": 0,
                  "exp": "Bốn định luật bảo toàn trong phản ứng hạt nhân gồm: Bảo toàn số khối $A$, bảo toàn điện tích $Z$, bảo toàn động lượng $\\vec{p}$ và bảo toàn năng lượng toàn phần (kể cả năng lượng nghỉ $mc^2$). Khối lượng nghỉ không được bảo toàn."
            }
      ]
},
        'hoahoc10-b1': {
      "subject": "chemistry",
      "simType": "atomic",
      "simOptions": {
            "mode": "rutherford",
            "targetZ": 79
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 1",
      "title": "Nhập Môn Hóa Học & Phương Pháp Nghiên Cứu Nguyên Tử",
      "guide": "Bấm chuyển đổi giữa các chủ đề mô phỏng vi mô, quan sát tương tác giữa các hạt hạ nguyên tử và chùm tia α trong buồng chân không.",
      "questions": [
            {
                  "q": "Đối tượng nghiên cứu cốt lõi của môn Hóa học là gì?",
                  "opts": [
                        "Chất, sự biến đổi của chất và mối liên hệ năng lượng đi kèm",
                        "Chuyển động cơ học và quy luật rơi tự do của các vật thể",
                        "Sự phân bào và di truyền của các tế bào sinh vật sống",
                        "Cấu tạo địa chất và các mảng kiến tạo vỏ Trái Đất"
                  ],
                  "ans": 0,
                  "exp": "Hóa học là ngành khoa học tự nhiên nghiên cứu về thành phần, cấu trúc, tính chất của chất và sự biến đổi của các chất cùng năng lượng kèm theo."
            },
            {
                  "q": "Phương pháp nào sau đây đóng vai trò then chốt trong việc kiểm chứng các giả thuyết và lí thuyết hóa học?",
                  "opts": [
                        "Phương pháp nghiên cứu thực nghiệm kết hợp mô hình hóa",
                        "Phương pháp cảm quan và suy đoán không cần số liệu",
                        "Phương pháp truyền miệng trong dân gian",
                        "Phương pháp ghi nhớ thụ động không qua thực hành"
                  ],
                  "ans": 0,
                  "exp": "Nghiên cứu hóa học hiện đại đòi hỏi kết hợp chặt chẽ giữa quan sát, giả thuyết khoa học, thực nghiệm kiểm chứng và mô hình hóa trực quan."
            },
            {
                  "q": "Trong phòng thí nghiệm hóa học, quy tắc an toàn cơ bản nhất khi tiếp xúc với hóa chất là gì?",
                  "opts": [
                        "Tuyệt đối không nếm, ngửi trực tiếp hoặc tự ý trộn hóa chất khi chưa có hướng dẫn",
                        "Được phép nếm thử lượng nhỏ hóa chất nếu thấy có màu đẹp",
                        "Đổ trực tiếp hóa chất thừa sau thí nghiệm vào bồn rửa mà không qua xử lí",
                        "Dùng tay không cầm trực tiếp các kim loại kiềm và axit đặc"
                  ],
                  "ans": 0,
                  "exp": "Quy tắc an toàn tuyệt đối cấm nếm, ngửi trực tiếp hơi hóa chất độc, luôn mang kính bảo hộ và găng tay, xử lí chất thải theo quy định an toàn phòng lab."
            }
      ]
},
    'hoahoc10-b2': {
      "subject": "chemistry",
      "simType": "atomic",
      "simOptions": {
            "mode": "rutherford",
            "targetZ": 79,
            "energyMeV": 5.5
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 2",
      "title": "Thành Phần Của Nguyên Tử & Thí Nghiệm Rutherford",
      "guide": "Kéo thanh trượt năng lượng hạt α và thay đổi bia kim loại (Au, Ag, Al). Quan sát tỉ lệ hạt xuyên thẳng so với hạt bị tán xạ góc lớn trên màn huỳnh quang ZnS.",
      "questions": [
            {
                  "q": "Hiện tượng tuyệt đại đa số các hạt α (~99.9%) đi xuyên thẳng qua lá vàng mỏng trong thí nghiệm Rutherford chứng minh điều gì?",
                  "opts": [
                        "Nguyên tử có cấu tạo rỗng, các electron chuyển động trong không gian rất rộng xung quanh hạt nhân",
                        "Nguyên tử là một khối cầu đặc khít tích điện dương",
                        "Hạt nhân nguyên tử chiếm toàn bộ thể tích của nguyên tử",
                        "Hạt α không có khối lượng nên không bị cản trở"
                  ],
                  "ans": 0,
                  "exp": "Do phần lớn hạt α đi thẳng mà không bị lệch hướng, Rutherford kết luận nguyên tử có cấu tạo rỗng, hạt nhân chỉ chiếm một thể tích vô cùng nhỏ ($r_{hn} \\approx 10^{-14}\\text{ m} \\ll r_{nt} \\approx 10^{-10}\\text{ m}$)."
            },
            {
                  "q": "Hạt mang điện tích âm trong nguyên tử là hạt nào và có điện tích quy ước bằng bao nhiêu?",
                  "opts": [
                        "Electron, điện tích quy ước là -1 (e = -1.602 × 10⁻¹⁹ C)",
                        "Proton, điện tích quy ước là +1 (e = +1.602 × 10⁻¹⁹ C)",
                        "Neutron, không mang điện (q = 0)",
                        "Hạt alpha, điện tích quy ước là +2"
                  ],
                  "ans": 0,
                  "exp": "Vỏ nguyên tử chứa các electron (kí hiệu e) mang điện tích âm $q_e = -1.602 \\times 10^{-19}\\text{ C}$ (quy ước là -1) và khối lượng rất nhỏ $m_e \\approx 9.109 \\times 10^{-31}\\text{ kg}$."
            },
            {
                  "q": "Khối lượng của nguyên tử tập trung chủ yếu ở phần nào?",
                  "opts": [
                        "Hạt nhân nguyên tử (gồm proton và neutron)",
                        "Lớp vỏ electron của nguyên tử",
                        "Phân bố đồng đều khắp thể tích nguyên tử",
                        "Khoảng không gian rỗng giữa vỏ và hạt nhân"
                  ],
                  "ans": 0,
                  "exp": "Do khối lượng của electron quá nhỏ so với proton và neutron ($m_p \\approx m_n \\approx 1836\\ m_e$), khối lượng nguyên tử gần như tập trung hoàn toàn tại hạt nhân."
            }
      ]
},
    'hoahoc10-b3': {
      "subject": "chemistry",
      "simType": "atomic",
      "simOptions": {
            "mode": "isotope",
            "isoElement": "Cl",
            "isoRatio": 75.77
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 3",
      "title": "Nguyên Tố Hóa Học, Đồng Vị & Khối Lượng Nguyên Tử",
      "guide": "Chọn nguyên tố (Cl, Cu, C, H) và kéo thanh trượt tỉ lệ phần trăm các đồng vị để quan sát phổ khối lượng và giá trị nguyên tử khối trung bình tính toán tức thời.",
      "questions": [
            {
                  "q": "Hai nguyên tử được gọi là đồng vị của nhau khi nào?",
                  "opts": [
                        "Có cùng số proton (Z) nhưng khác nhau về số neutron (N), dẫn đến số khối A khác nhau",
                        "Có cùng số khối (A) nhưng khác nhau về số proton (Z)",
                        "Có cùng số neutron (N) nhưng khác nhau về số proton (Z)",
                        "Có cùng số electron hóa trị và cùng chu kì trong bảng tuần hoàn"
                  ],
                  "ans": 0,
                  "exp": "Các đồng vị của cùng một nguyên tố hóa học là những nguyên tử có cùng số proton (cùng số hiệu nguyên tử Z) nhưng khác nhau về số neutron (khác số khối A)."
            },
            {
                  "q": "Trong tự nhiên, Chlorine có 2 đồng vị bền là ³⁵Cl (chiếm 75.77%) và ³⁷Cl (chiếm 24.23%). Nguyên tử khối trung bình của Chlorine là:",
                  "opts": [
                        "35.485 u (thường lấy xấp xỉ 35.5 u)",
                        "36.000 u",
                        "35.000 u",
                        "37.000 u"
                  ],
                  "ans": 0,
                  "exp": "$\\overline{A} = \\frac{75.77 \\times 35 + 24.23 \\times 37}{100} = \\frac{2651.95 + 896.51}{100} = 35.4846 \\approx 35.5\\text{ u}$."
            },
            {
                  "q": "Kí hiệu nguyên tử $^{A}_{Z}\\text{X}$ cho biết những thông tin cốt lõi nào?",
                  "opts": [
                        "Kí hiệu hóa học X, số hiệu nguyên tử Z (số p = số e) và số khối A (A = Z + N)",
                        "Nguyên tử khối trung bình và hóa trị cao nhất trong oxide",
                        "Số neutron N ở góc trên bên trái và số electron ở góc dưới",
                        "Khối lượng tính bằng gam và thể tích của nguyên tử"
                  ],
                  "ans": 0,
                  "exp": "Kí hiệu $^{A}_{Z}\\text{X}$: Z là số hiệu nguyên tử (số proton = số electron trong nguyên tử trung hòa), A là số khối ($A = Z + N$). Số neutron $N = A - Z$."
            }
      ]
},
    'hoahoc10-b4': {
      "subject": "chemistry",
      "simType": "atomic",
      "simOptions": {
            "mode": "electron-orbitals",
            "orbitalZ": 11
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 4",
      "title": "Cấu Trúc Vỏ Electron, Orbital Nguyên Tử & Ôn Tập Chương 1",
      "guide": "Kéo thanh trượt số hiệu nguyên tử Z từ 1 đến 30. Quan sát sơ đồ ô lượng tử, thứ tự mức năng lượng Aufbau và quy tắc Hund khi điền electron.",
      "questions": [
            {
                  "q": "Theo nguyên lí vững bền (Aufbau), thứ tự các phân lớp theo chiều tăng dần năng lượng là:",
                  "opts": [
                        "1s 2s 2p 3s 3p 4s 3d 4p 5s ...",
                        "1s 2s 2p 3s 3p 3d 4s 4p 4d ...",
                        "1s 2s 3s 4s 2p 3p 4p 3d 4d ...",
                        "1s 2p 3d 4f 2s 3p 4d 5s ..."
                  ],
                  "ans": 0,
                  "exp": "Mức năng lượng phân lớp 4s thấp hơn phân lớp 3d nên electron sẽ điền đầy phân lớp 4s trước khi điền vào phân lớp 3d ($1s < 2s < 2p < 3s < 3p < 4s < 3d$)."
            },
            {
                  "q": "Số electron tối đa có thể chứa trong các phân lớp s, p, d, f lần lượt là:",
                  "opts": [
                        "2, 6, 10, 14",
                        "1, 3, 5, 7",
                        "2, 8, 18, 32",
                        "2, 4, 6, 8"
                  ],
                  "ans": 0,
                  "exp": "Mỗi AO chứa tối đa 2 electron. Phân lớp s (1 AO) chứa tối đa 2e; p (3 AO) chứa tối đa 6e; d (5 AO) chứa tối đa 10e; f (7 AO) chứa tối đa 14e."
            },
            {
                  "q": "Cấu hình electron nguyên tử của nguyên tố Potassium (Z = 19) là:",
                  "opts": [
                        "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ (hoặc viết gọn là [Ar] 4s¹)",
                        "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹",
                        "1s² 2s² 2p⁶ 3s² 3p⁵ 4s²",
                        "[Ne] 3s² 3p⁶ 4s¹"
                  ],
                  "ans": 0,
                  "exp": "Với Z = 19: phân lớp 4s có năng lượng thấp hơn 3d nên electron thứ 19 điền vào 4s: $1s^2 2s^2 2p^6 3s^2 3p^6 4s^1$, tức $[\\text{Ar}] 4s^1$. Nguyên tố nhóm IA, có 1e lớp ngoài cùng."
            }
      ]
},
    'hoahoc10-b5': {
      "subject": "chemistry",
      "simType": "periodic",
      "simOptions": {
            "mode": "periodic-table",
            "selectedElement": "Na"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 5",
      "title": "Cấu Tạo Của Bảng Tuần Hoàn Các Nguyên Tố Hóa Học",
      "guide": "Nhấp chuột vào từng ô nguyên tố để khám phá vị trí (Ô, Chu kì, Nhóm A/B), phân loại khối s/p/d/f và cấu hình electron tương ứng.",
      "questions": [
            {
                  "q": "Số thứ tự của chu kì trong bảng tuần hoàn bằng đại lượng nào của nguyên tử?",
                  "opts": [
                        "Số lớp electron của nguyên tử nguyên tố đó",
                        "Số electron lớp ngoài cùng",
                        "Số electron hóa trị",
                        "Số hiệu nguyên tử Z"
                  ],
                  "ans": 0,
                  "exp": "Trong bảng tuần hoàn, các nguyên tố có cùng số lớp electron được xếp vào cùng một hàng gọi là chu kì. Do đó, số thứ tự chu kì = số lớp electron."
            },
            {
                  "q": "Các nguyên tố thuộc nhóm A trong bảng tuần hoàn bao gồm:",
                  "opts": [
                        "Các nguyên tố khối s và khối p (electron cuối cùng điền vào phân lớp s hoặc p)",
                        "Chỉ bao gồm các nguyên tố kim loại chuyển tiếp",
                        "Các nguyên tố khối d và khối f",
                        "Tất cả các nguyên tố phi kim và khí hiếm"
                  ],
                  "ans": 0,
                  "exp": "Nhóm A (từ IA đến VIIIA) gồm các nguyên tố s (nhóm IA, IIA) và nguyên tố p (nhóm IIIA đến VIIIA)."
            },
            {
                  "q": "Nguyên tử nguyên tố X có cấu hình electron 1s² 2s² 2p⁶ 3s² 3p⁴. Vị trí của X trong bảng tuần hoàn là:",
                  "opts": [
                        "Ô số 16, chu kì 3, nhóm VIA",
                        "Ô số 16, chu kì 3, nhóm IVB",
                        "Ô số 6, chu kì 2, nhóm IVA",
                        "Ô số 16, chu kì 4, nhóm IIA"
                  ],
                  "ans": 0,
                  "exp": "Z = 16 (ô 16); có 3 lớp electron (chu kì 3); có 6 electron lớp ngoài cùng (3s² 3p⁴) thuộc khối p nên là nhóm VIA (nguyên tố Sulfur S)."
            }
      ]
},
    'hoahoc10-b6': {
      "subject": "chemistry",
      "simType": "periodic",
      "simOptions": {
            "mode": "atomic-trends",
            "trendProperty": "radius"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 6",
      "title": "Xu Hướng Biến Đổi Bán Kính, Độ Âm Điện & Năng Lượng Ion Hóa",
      "guide": "Bấm chọn các đại lượng (Bán kính, Độ âm điện, I₁) và quan sát biểu đồ so sánh xu hướng tuần hoàn giữa các nguyên tố trong cùng chu kì và phân nhóm.",
      "questions": [
            {
                  "q": "Trong một chu kì, đi từ trái sang phải theo chiều tăng dần của điện tích hạt nhân, bán kính nguyên tử biến đổi như thế nào?",
                  "opts": [
                        "Giảm dần, do số lớp e không đổi nhưng điện tích hạt nhân tăng làm tăng lực hút với electron",
                        "Tăng dần, do số hạt proton và neutron tăng lên",
                        "Không thay đổi, vì số lớp electron bằng nhau",
                        "Ban đầu tăng sau đó giảm mạnh"
                  ],
                  "ans": 0,
                  "exp": "Trong cùng chu kì, số lớp electron không đổi, khi Z tăng điện tích hạt nhân hiệu dụng tăng hút các electron về phía hạt nhân mạnh hơn, làm bán kính nguyên tử giảm dần."
            },
            {
                  "q": "Đại lượng đặc trưng cho khả năng hút electron của nguyên tử khi hình thành liên kết hóa học gọi là:",
                  "opts": [
                        "Độ âm điện (Electronegativity)",
                        "Năng lượng ion hóa thứ nhất (I₁)",
                        "Ái lực electron (Electron affinity)",
                        "Bán kính cộng hóa trị"
                  ],
                  "ans": 0,
                  "exp": "Độ âm điện là đại lượng đặc trưng cho khả năng hút electron của nguyên tử trong phân tử khi tham gia liên kết hóa học. Nguyên tố có độ âm điện lớn nhất là Fluorine ($\\chi = 3.98$)."
            },
            {
                  "q": "Trong một nhóm A, đi từ trên xuống dưới theo chiều tăng dần của Z, năng lượng ion hóa thứ nhất (I₁) có xu hướng:",
                  "opts": [
                        "Giảm dần, do số lớp e tăng, bán kính tăng, electron ngoài cùng liên kết lỏng lẻo hơn",
                        "Tăng dần, do khối lượng nguyên tử tăng",
                        "Không đổi qua tất cả các chu kì",
                        "Biến đổi thất thường không theo quy luật"
                  ],
                  "ans": 0,
                  "exp": "Đi từ trên xuống dưới trong nhóm A, số lớp e tăng $\\to$ bán kính nguyên tử tăng nhanh $\\to$ lực hút của hạt nhân với electron lớp ngoài cùng giảm $\\to$ dễ bứt electron hơn $\\to I_1$ giảm."
            }
      ]
},
    'hoahoc10-b7': {
      "subject": "chemistry",
      "simType": "periodic",
      "simOptions": {
            "mode": "oxide-hydroxide"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 7",
      "title": "Xu Hướng Biến Đổi Tính Acid – Base Của Oxide & Hydroxide",
      "guide": "Quan sát dãy biến đổi từ Na đến Cl ở chu kì 3: Oxide base mạnh (Na₂O) → Lưỡng tính (Al₂O₃) → Oxide acid rất mạnh (Cl₂O₇).",
      "questions": [
            {
                  "q": "Trong chu kì 3, dãy oxide nào sau đây được sắp xếp đúng theo chiều tính acid tăng dần?",
                  "opts": [
                        "Na₂O < MgO < Al₂O₃ < SiO₂ < P₂O₅ < SO₃ < Cl₂O₇",
                        "Cl₂O₇ < SO₃ < P₂O₅ < SiO₂ < Al₂O₃ < MgO < Na₂O",
                        "Al₂O₃ < Na₂O < MgO < SiO₂ < SO₃ < P₂O₅ < Cl₂O₇",
                        "Na₂O < Al₂O₃ < MgO < P₂O₅ < SiO₂ < Cl₂O₇ < SO₃"
                  ],
                  "ans": 0,
                  "exp": "Trong một chu kì, đi từ trái sang phải, tính base của oxide và hydroxide giảm dần, đồng thời tính acid tăng dần."
            },
            {
                  "q": "Hydroxide nào sau đây của chu kì 3 có tính chất lưỡng tính (tác dụng được với cả dung dịch acid mạnh và dung dịch base mạnh)?",
                  "opts": [
                        "Al(OH)₃",
                        "NaOH",
                        "Mg(OH)₂",
                        "H₂SiO₃"
                  ],
                  "ans": 0,
                  "exp": "$Al(OH)_3$ là hydroxide lưỡng tính: tan trong axit ($Al(OH)_3 + 3HCl \\to AlCl_3 + 3H_2O$) và tan trong kiềm mạnh ($Al(OH)_3 + NaOH \\to Na[Al(OH)_4]$)."
            },
            {
                  "q": "Trong số các hydroxide của các nguyên tố chu kì 3, acid nào có tính acid mạnh nhất?",
                  "opts": [
                        "HClO₄ (Perchloric acid)",
                        "H₂SO₄ (Sulfuric acid)",
                        "H₃PO₄ (Phosphoric acid)",
                        "H₂SiO₃ (Silicic acid)"
                  ],
                  "ans": 0,
                  "exp": "$HClO_4$ là acid mạnh nhất trong dãy các hydroxide chu kì 3, tương ứng với oxide cao nhất $Cl_2O_7$ ở cuối chu kì (nhóm VIIA)."
            }
      ]
},
    'hoahoc10-b8': {
      "subject": "chemistry",
      "simType": "periodic",
      "simOptions": {
            "mode": "periodic-table",
            "selectedElement": "Cl"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 8",
      "title": "Định Luật Tuần Hoàn & Ý Nghĩa Của Bảng Tuần Hoàn",
      "guide": "Sử dụng mối quan hệ 3 đỉnh tam giác: Vị trí trong bảng tuần hoàn ↔ Cấu hình electron ↔ Tính chất hóa học cơ bản để dự đoán tính chất.",
      "questions": [
            {
                  "q": "Nội dung cốt lõi của Định luật tuần hoàn Men-đê-lê-ép hiện đại phát biểu rằng tính chất của các đơn chất và hợp chất biến đổi tuần hoàn theo:",
                  "opts": [
                        "Chiều tăng dần của điện tích hạt nhân nguyên tử (Z)",
                        "Chiều tăng dần của nguyên tử khối",
                        "Số lượng đồng vị trong tự nhiên",
                        "Độ dồi dào của nguyên tố trong vỏ Trái Đất"
                  ],
                  "ans": 0,
                  "exp": "Định luật tuần hoàn: Tính chất của các đơn chất cũng như thành phần và tính chất của các hợp chất tạo nên từ chúng biến đổi tuần hoàn theo chiều tăng dần của điện tích hạt nhân nguyên tử."
            },
            {
                  "q": "Biết nguyên tố X ở chu kì 3, nhóm IIA. Công thức oxide cao nhất và tính chất của nó là:",
                  "opts": [
                        "XO, là oxide base",
                        "X₂O, là oxide base mạnh",
                        "XO₂, là oxide acid",
                        "X₂O₃, là oxide lưỡng tính"
                  ],
                  "ans": 0,
                  "exp": "Nhóm IIA có 2e hóa trị, hóa trị cao nhất với oxygen là II $\\to$ công thức oxide cao nhất là $XO$ (chính là $MgO$). Là oxide base tác dụng với acid tạo muối và nước."
            },
            {
                  "q": "So sánh tính kim loại giữa Sodium (Na, Z=11) và Magnesium (Mg, Z=12) cùng Potassium (K, Z=19):",
                  "opts": [
                        "K > Na > Mg",
                        "Mg > Na > K",
                        "Na > K > Mg",
                        "K > Mg > Na"
                  ],
                  "ans": 0,
                  "exp": "Trong chu kì 3: Na > Mg (tính kim loại giảm từ trái sang phải). Trong nhóm IA: K > Na (tính kim loại tăng từ trên xuống). Suy ra K > Na > Mg."
            }
      ]
},
    'hoahoc10-b9': {
      "subject": "chemistry",
      "simType": "periodic",
      "simOptions": {
            "mode": "atomic-trends",
            "trendProperty": "en"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 9",
      "title": "Ôn Tập Chương 2: Bảng Tuần Hoàn Các Nguyên Tố Hóa Học",
      "guide": "Luyện tập so sánh tính kim loại, phi kim, bán kính và độ âm điện qua việc giải các bài toán biện luận vị trí nguyên tố.",
      "questions": [
            {
                  "q": "Hai nguyên tố X (Z = 12) và Y (Z = 17) cùng thuộc chu kì 3. Nhận xét nào sau đây là chính xác?",
                  "opts": [
                        "X là kim loại (Mg), Y là phi kim điển hình (Cl); bán kính nguyên tử X lớn hơn Y",
                        "Y có bán kính nguyên tử lớn hơn X",
                        "X có độ âm điện lớn hơn Y",
                        "X và Y đều là các nguyên tố phi kim"
                  ],
                  "ans": 0,
                  "exp": "X là Mg (kim loại kiềm thổ, $r = 160\\text{ pm}$); Y là Cl (phi kim halogen, $r = 99\\text{ pm}$, độ âm điện 3.16). Trong chu kì 3, đi từ Mg đến Cl bán kính giảm, độ âm điện tăng."
            },
            {
                  "q": "Nguyên tố R có cấu hình electron lớp ngoài cùng là 3s² 3p⁵. Hợp chất khí với hydrogen của R có công thức là:",
                  "opts": [
                        "HR (hoặc RH)",
                        "RH₂",
                        "RH₃",
                        "RH₄"
                  ],
                  "ans": 0,
                  "exp": "R có 7e lớp ngoài cùng (nhóm VIIA). Hóa trị trong hợp chất khí với hydrogen là $8 - 7 = 1$. Do đó công thức là $HR$ (chính là $HCl$)."
            },
            {
                  "q": "Nguyên tố phi kim mạnh nhất và nguyên tố kim loại điển hình mạnh nhất (không tính phóng xạ) trong bảng tuần hoàn lần lượt là:",
                  "opts": [
                        "Fluorine (F) và Caesium (Cs)",
                        "Chlorine (Cl) và Francium (Fr)",
                        "Oxygen (O) và Potassium (K)",
                        "Helium (He) và Sodium (Na)"
                  ],
                  "ans": 0,
                  "exp": "Fluorine (F) ở góc trên bên phải có độ âm điện lớn nhất ($chi = 3.98$), là phi kim mạnh nhất. Caesium (Cs) ở góc dưới bên trái nhóm IA có tính kim loại mạnh nhất."
            }
      ]
},
    'hoahoc10-b10': {
      "subject": "chemistry",
      "simType": "bonding",
      "simOptions": {
            "mode": "octet-rule"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 10",
      "title": "Quy Tắc Octet & Xu Hướng Đạt Cấu Hình Khí Hiếm",
      "guide": "Quan sát các phương thức khác nhau (nhường e, nhận e, dùng chung e) của các nguyên tử để đạt lớp vỏ ngoài cùng chứa 8 electron bền vững.",
      "questions": [
            {
                  "q": "Theo quy tắc octet, khi tham gia liên kết hóa học, các nguyên tử có xu hướng:",
                  "opts": [
                        "Đạt cấu hình electron bền vững với 8 electron ở lớp ngoài cùng giống khí hiếm",
                        "Đạt cấu hình có số electron bằng số neutron trong hạt nhân",
                        "Nhường toàn bộ electron trong nguyên tử để trở thành hạt trần",
                        "Giữ nguyên cấu hình electron ban đầu của nguyên tử tự do"
                  ],
                  "ans": 0,
                  "exp": "Quy tắc octet chỉ ra rằng các nguyên tử có xu hướng nhường, nhận hoặc góp chung electron để đạt lớp vỏ ngoài cùng có 8 electron (hoặc 2 electron như Helium)."
            },
            {
                  "q": "Nguyên tử Magnesium (Mg, Z=12) có cấu hình e là [Ne] 3s². Để đạt octet, nguyên tử Mg sẽ:",
                  "opts": [
                        "Nhường 2 electron ở phân lớp 3s để tạo thành ion Mg²⁺",
                        "Nhận thêm 6 electron vào phân lớp 3p",
                        "Góp chung 2 electron với 2 nguyên tử khác",
                        "Nhường toàn bộ 12 electron"
                  ],
                  "ans": 0,
                  "exp": "$Mg \\to Mg^{2+} + 2e$. Cation $Mg^{2+}$ có cấu hình $[Ne]$ với 8e ở lớp thứ 2 bền vững."
            },
            {
                  "q": "Nguyên tử Oxygen (O, Z=8) có 6 electron lớp ngoài cùng. Để thỏa mãn quy tắc octet, nguyên tử O cần:",
                  "opts": [
                        "Nhận thêm 2 electron hoặc góp chung 2 cặp electron",
                        "Nhường đi 6 electron hóa trị",
                        "Nhận thêm 4 electron",
                        "Chỉ có thể tạo liên kết ion chứ không thể góp chung electron"
                  ],
                  "ans": 0,
                  "exp": "O (2,6) thiếu 2e để đạt octet (8e). O có thể nhận 2e tạo $O^{2-}$ hoặc tạo 2 liên kết cộng hóa trị (như trong $H_2O, CO_2$)."
            }
      ]
},
    'hoahoc10-b11': {
      "subject": "chemistry",
      "simType": "bonding",
      "simOptions": {
            "mode": "ionic-bond"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 11",
      "title": "Liên Kết Ion & Mạng Tinh Thể Lập Phương NaCl",
      "guide": "Quan sát quá trình nhường nhận electron giữa Na và Cl, sự hình thành cặp ion trái dấu và mạng tinh thể ion 3 chiều bền vững.",
      "questions": [
            {
                  "q": "Liên kết ion được hình thành nhờ lực tương tác nào giữa các hạt?",
                  "opts": [
                        "Lực hút tĩnh điện giữa các ion mang điện tích trái dấu",
                        "Lực hấp dẫn giữa khối lượng các nguyên tử",
                        "Lực chia sẻ cặp electron dùng chung",
                        "Lực từ trường giữa các spin electron"
                  ],
                  "ans": 0,
                  "exp": "Liên kết ion là liên kết hóa học được hình thành bởi lực hút tĩnh điện giữa cation mang điện tích dương và anion mang điện tích âm."
            },
            {
                  "q": "Trong mạng tinh thể NaCl, xung quanh mỗi ion Na⁺ được bao quanh bởi bao nhiêu ion Cl⁻ gần nhất?",
                  "opts": [
                        "6 ion Cl⁻ (Số phối trí là 6:6 dạng bát diện đều)",
                        "8 ion Cl⁻",
                        "4 ion Cl⁻",
                        "12 ion Cl⁻"
                  ],
                  "ans": 0,
                  "exp": "Tinh thể NaCl có cấu trúc lập phương tâm diện: mỗi ion $Na^+$ được bao quanh bởi 6 ion $Cl^-$, và ngược lại mỗi ion $Cl^-$ được bao quanh bởi 6 ion $Na^+$."
            },
            {
                  "q": "Hợp chất ion thường có tính chất vật lí đặc trưng nào sau đây?",
                  "opts": [
                        "Nhiệt độ nóng chảy và nhiệt độ sôi cao; dẫn điện khi nóng chảy hoặc tan trong nước",
                        "Nhiệt độ nóng chảy thấp, dễ bay hơi ở nhiệt độ phòng",
                        "Dẫn điện tốt ở trạng thái tinh thể rắn",
                        "Mềm, dẻo và dễ dát mỏng như kim loại"
                  ],
                  "ans": 0,
                  "exp": "Do lực liên kết ion rất mạnh, các hợp chất ion rắn ở nhiệt độ phòng, nhiệt độ nóng chảy rất cao, giòn, dẫn điện khi nóng chảy hoặc hòa tan thành dung dịch."
            }
      ]
},
    'hoahoc10-b12': {
      "subject": "chemistry",
      "simType": "bonding",
      "simOptions": {
            "mode": "covalent-bond",
            "activeMolecule": "H2O"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 12",
      "title": "Liên Kết Cộng Hóa Trị & Mô Hình Phân Tử 3D",
      "guide": "Dùng chuột xoay 360° các phân tử H₂O, CO₂, CH₄, NH₃, quan sát góc liên kết, công thức Lewis và sự xen phủ orbital tạo liên kết σ và π.",
      "questions": [
            {
                  "q": "Liên kết cộng hóa trị được hình thành giữa hai nguyên tử bằng cách nào?",
                  "opts": [
                        "Bằng một hay nhiều cặp electron dùng chung giữa hai nguyên tử",
                        "Bằng sự nhường hẳn electron từ nguyên tử này sang nguyên tử kia",
                        "Bằng lực tương tác van der Waals yếu",
                        "Bằng lực hút tĩnh điện giữa cation và anion"
                  ],
                  "ans": 0,
                  "exp": "Liên kết cộng hóa trị là liên kết được hình thành giữa hai nguyên tử bằng một hoặc nhiều cặp electron dùng chung."
            },
            {
                  "q": "Phân tử N₂ có liên kết ba gồm những loại liên kết nào sau đây?",
                  "opts": [
                        "1 liên kết σ (xen phủ trục) và 2 liên kết π (xen phủ bên)",
                        "3 liên kết σ bền vững",
                        "3 liên kết π linh động",
                        "2 liên kết σ và 1 liên kết π"
                  ],
                  "ans": 0,
                  "exp": "Trong liên kết ba $N \\equiv N$: có 1 liên kết $\\sigma$ hình thành do xen phủ trục giữa các orbital p, và 2 liên kết $\\pi$ hình thành do xen phủ bên."
            },
            {
                  "q": "Dựa vào hiệu độ âm điện Δχ, liên kết cộng hóa trị không phân cực có giá trị Δχ nằm trong khoảng nào?",
                  "opts": [
                        "0.0 ≤ Δχ < 0.4",
                        "0.4 ≤ Δχ < 1.7",
                        "Δχ ≥ 1.7",
                        "Δχ > 2.5"
                  ],
                  "ans": 0,
                  "exp": "Quy ước thực nghiệm: $0.0 \\le \\Delta\\chi < 0.4$: liên kết CHT không cực; $0.4 \\le \\Delta\\chi < 1.7$: liên kết CHT có cực; $\\Delta\\chi \\ge 1.7$: liên kết ion."
            }
      ]
},
    'hoahoc10-b13': {
      "subject": "chemistry",
      "simType": "bonding",
      "simOptions": {
            "mode": "hydrogen-bond"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 13",
      "title": "Liên Kết Hydrogen & Tương Tác Van Der Waals",
      "guide": "Quan sát mạng lưới liên kết hydrogen giữa các phân tử nước và giải thích nguyên nhân nhiệt độ sôi của H₂O cao vượt trội so với H₂S.",
      "questions": [
            {
                  "q": "Điều kiện cần và đủ để hình thành liên kết hydrogen liên phân tử là gì?",
                  "opts": [
                        "Nguyên tử H liên kết với nguyên tử có độ âm điện lớn (F, O, N) và nguyên tử F, O, N khác có cặp e tự do",
                        "Nguyên tử H liên kết với bất kì kim loại kiềm nào",
                        "Chỉ cần các phân tử chuyển động va chạm vào nhau ở nhiệt độ cao",
                        "Chỉ xuất hiện giữa các ion mang điện tích trái dấu trong tinh thể"
                  ],
                  "ans": 0,
                  "exp": "Liên kết hydrogen xuất hiện khi nguyên tử H linh động tích điện dương $\\delta^+$ liên kết với nguyên tử có độ âm điện lớn (F, O, N), tương tác với cặp electron tự do của nguyên tử F, O, N khác."
            },
            {
                  "q": "Tại sao nhiệt độ sôi của nước (H₂O: 100°C) lại cao hơn rất nhiều so với hợp chất cùng nhóm là H₂S (-60°C)?",
                  "opts": [
                        "Vì giữa các phân tử H₂O hình thành mạng lưới liên kết hydrogen liên phân tử bền vững",
                        "Vì khối lượng phân tử của H₂O lớn hơn H₂S",
                        "Vì H₂O là hợp chất ion còn H₂S là hợp chất cộng hóa trị",
                        "Vì liên kết cộng hóa trị O-H bền hơn liên kết S-H"
                  ],
                  "ans": 0,
                  "exp": "Dù phân tử khối của $H_2O$ (18) nhỏ hơn $H_2S$ (34), nước tạo được liên kết hydrogen liên phân tử rất mạnh, đòi hỏi nhiều năng lượng hơn để bứt các phân tử khỏi pha lỏng $\\to$ nhiệt độ sôi cao vượt bậc."
            },
            {
                  "q": "Tương tác van der Waals tăng lên khi nào?",
                  "opts": [
                        "Khi kích thước phân tử và số electron trong phân tử tăng lên",
                        "Khi nhiệt độ của môi trường tăng cao",
                        "Khi các phân tử ở cách xa nhau vô cùng",
                        "Khi phân tử chỉ chứa liên kết ion"
                  ],
                  "ans": 0,
                  "exp": "Tương tác van der Waals tăng khi kích thước đám mây electron và khối lượng phân tử tăng (làm tăng độ phân cực tạm thời), giải thích tại sao nhiệt độ sôi tăng từ $F_2 \\to Cl_2 \\to Br_2 \\to I_2$."
            }
      ]
},
    'hoahoc10-b14': {
      "subject": "chemistry",
      "simType": "bonding",
      "simOptions": {
            "mode": "covalent-bond",
            "activeMolecule": "CH4"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 14",
      "title": "Ôn Tập Chương 3: Liên Kết Hóa Học",
      "guide": "Phân biệt và so sánh toàn diện 4 loại liên kết/tương tác: Liên kết ion, liên kết cộng hóa trị (phân cực/không cực), liên kết hydrogen và van der Waals.",
      "questions": [
            {
                  "q": "Hợp chất nào sau đây có chứa liên kết ion trong phân tử?",
                  "opts": [
                        "K₂O và CaCl₂",
                        "HCl và H₂O",
                        "CH₄ và NH₃",
                        "CO₂ và SO₂"
                  ],
                  "ans": 0,
                  "exp": "Liên kết giữa kim loại điển hình (K, Ca) với phi kim điển hình (O, Cl) có hiệu độ âm điện lớn ($\\Delta\\chi \\ge 1.7$) là liên kết ion."
            },
            {
                  "q": "Phân tử CO₂ có 2 liên kết C=O phân cực mạnh nhưng phân tử CO₂ lại không phân cực vì lý do gì?",
                  "opts": [
                        "Cấu trúc phân tử thẳng (O=C=O, góc 180°), hai vectơ mômen lưỡng cực triệt tiêu lẫn nhau",
                        "Vì độ âm điện của Carbon và Oxygen bằng nhau",
                        "Vì phân tử CO₂ là chất khí ở điều kiện thường",
                        "Vì có liên kết ba giữa Carbon và Oxygen"
                  ],
                  "ans": 0,
                  "exp": "Dù liên kết $C=O$ có cực do $\\chi_O > \\chi_C$, nhưng phân tử có hình học đường thẳng đối xứng tâm (góc 180°), hai vectơ lưỡng cực ngược chiều và bằng nhau nên $\\vec{\\mu} = \\vec{\\mu}_1 + \\vec{\\mu}_2 = \\vec{0}$."
            },
            {
                  "q": "Sắp xếp độ bền giảm dần của các loại liên kết và tương tác hóa học:",
                  "opts": [
                        "Liên kết cộng hóa trị ≈ Liên kết ion > Liên kết hydrogen > Tương tác van der Waals",
                        "Tương tác van der Waals > Liên kết hydrogen > Liên kết ion",
                        "Liên kết hydrogen > Liên kết cộng hóa trị > Liên kết ion",
                        "Liên kết ion > Tương tác van der Waals > Liên kết cộng hóa trị"
                  ],
                  "ans": 0,
                  "exp": "Liên kết nội phân tử (cộng hóa trị, ion: vài trăm kJ/mol) bền hơn rất nhiều so với lực liên phân tử (liên kết hydrogen: $10-40\\text{ kJ/mol}$, van der Waals: $1-10\\text{ kJ/mol}$)."
            }
      ]
},
    'hoahoc10-b15': {
      "subject": "chemistry",
      "simType": "redox",
      "simOptions": {
            "mode": "redox-process",
            "rxnKey": "Zn_Cu"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 15",
      "title": "Phản Ứng Oxi Hóa – Khử & Sự Chuyển Dịch Electron",
      "guide": "Quan sát dòng chuyển dịch electron giữa chất khử (nhường e, SOH tăng) và chất oxi hóa (nhận e, SOH giảm) trong phản ứng hóa học.",
      "questions": [
            {
                  "q": "Dấu hiệu rõ ràng nhất để nhận biết một phản ứng thuộc loại phản ứng oxi hóa – khử là gì?",
                  "opts": [
                        "Có sự thay đổi số oxi hóa của ít nhất một nguyên tố hóa học trước và sau phản ứng",
                        "Có sự tạo thành chất kết tủa màu trắng",
                        "Có sự đổi màu của chất chỉ thị axit - bazơ",
                        "Số lượng nguyên tử của các chất trước và sau phản ứng không bằng nhau"
                  ],
                  "ans": 0,
                  "exp": "Phản ứng oxi hóa - khử là phản ứng hóa học luôn kèm theo sự chuyển dịch electron giữa các chất phản ứng, thể hiện qua sự thay đổi số oxi hóa của nguyên tố."
            },
            {
                  "q": "Trong phản ứng: Zn + 2HCl → ZnCl₂ + H₂↑, chất nào đóng vai trò là chất khử?",
                  "opts": [
                        "Zn, vì số oxi hóa tăng từ 0 lên +2 (nhường 2e)",
                        "HCl, vì số oxi hóa của H giảm từ +1 xuống 0",
                        "ZnCl₂, vì là sản phẩm muối",
                        "H₂, vì là chất khí thoát ra"
                  ],
                  "ans": 0,
                  "exp": "Zn nhường 2e ($Zn^0 \\to Zn^{+2} + 2e$), số oxi hóa tăng từ 0 lên +2 $\\to$ Zn là chất khử (bị oxi hóa). $H^+$ nhận electron $\\to$ HCl là chất oxi hóa (bị khử)."
            },
            {
                  "q": "Số oxi hóa của nguyên tố Manganese (Mn) trong hợp chất KMnO₄ là bao nhiêu?",
                  "opts": [
                        "+7",
                        "+6",
                        "+4",
                        "+2"
                  ],
                  "ans": 0,
                  "exp": "Trong $KMnO_4$: K có số oxi hóa +1, O có số oxi hóa -2. Ta có: $(+1) + x + 4 \\times (-2) = 0 \\implies x - 7 = 0 \\implies x = +7$."
            }
      ]
},
    'hoahoc10-b16': {
      "subject": "chemistry",
      "simType": "redox",
      "simOptions": {
            "mode": "electron-balance"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 16",
      "title": "Ôn Tập Chương 4: Cân Bằng Phương Trình Bằng Thăng Bằng Electron",
      "guide": "Thực hành cân bằng phản ứng oxi hóa - khử qua 4 bước chuẩn mực: Xác định SOH → Viết quá trình nhường/nhận e → Tìm hệ số bội chung → Đặt hệ số.",
      "questions": [
            {
                  "q": "Nguyên tắc bảo toàn cốt lõi khi cân bằng phản ứng oxi hóa – khử theo phương pháp thăng bằng electron là:",
                  "opts": [
                        "Tổng số electron do chất khử nhường bằng tổng số electron do chất oxi hóa nhận",
                        "Tổng số mol chất phản ứng bằng tổng số mol sản phẩm",
                        "Số oxi hóa của kim loại luôn bằng số oxi hóa của phi kim",
                        "Tổng hệ số các chất phản ứng luôn bằng số chẵn"
                  ],
                  "ans": 0,
                  "exp": "Nguyên tắc bảo toàn electron: $\\sum n_{e\\text{ nhường}} = \\sum n_{e\\text{ nhận}}$, bảo đảm điện tích và electron được bảo toàn toàn phần trong hệ kín."
            },
            {
                  "q": "Cho phản ứng: a Fe + b HNO₃ (loãng) → c Fe(NO₃)₃ + d NO↑ + e H₂O. Khi cân bằng với hệ số tối giản, tỉ lệ a : b là:",
                  "opts": [
                        "1 : 4 (Phương trình: Fe + 4HNO₃ → Fe(NO₃)₃ + NO + 2H₂O)",
                        "1 : 3",
                        "2 : 8",
                        "3 : 8"
                  ],
                  "ans": 0,
                  "exp": "$Fe^0 \\to Fe^{+3} + 3e$ (nhân 1); $N^{+5} + 3e \\to N^{+2}$ (nhân 1). Đặt hệ số: 1 Fe, 1 NO, 1 $Fe(NO_3)_3$. Số nguyên tử N ở vế phải $= 3 + 1 = 4 \\implies$ hệ số $HNO_3$ là 4. Tỉ lệ a : b = 1 : 4."
            },
            {
                  "q": "Trong phản ứng: Cl₂ + 2KOH → KCl + KClO + H₂O, Chlorine đóng vai trò gì?",
                  "opts": [
                        "Vừa là chất oxi hóa, vừa là chất khử (phản ứng tự oxi hóa – khử)",
                        "Chỉ là chất khử",
                        "Chỉ là chất oxi hóa",
                        "Chỉ là môi trường tạo phản ứng"
                  ],
                  "ans": 0,
                  "exp": "Trong $Cl_2$: số oxi hóa 0. Sau phản ứng tạo $Cl^-$ trong KCl (SOH giảm $\\to$ chất oxh) và $Cl^{+1}$ trong KClO (SOH tăng $\\to$ chất khử). Đây là phản ứng tự oxi hóa - khử."
            }
      ]
},
    'hoahoc10-b17': {
      "subject": "chemistry",
      "simType": "energy",
      "simOptions": {
            "mode": "enthalpy-diagram",
            "rxnType": "exo"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 17",
      "title": "Biến Thiên Enthalpy Trong Phản Ứng Hóa Học",
      "guide": "Chuyển đổi giữa phản ứng tỏa nhiệt (ΔH < 0) và thu nhiệt (ΔH > 0). Quan sát biểu đồ năng lượng, trạng thái chuyển tiếp và sự thay đổi nhiệt độ môi trường.",
      "questions": [
            {
                  "q": "Phản ứng tỏa nhiệt là phản ứng hóa học có đặc điểm năng lượng nào sau đây?",
                  "opts": [
                        "Giải phóng năng lượng dưới dạng nhiệt ra môi trường, biến thiên enthalpy ΔrH < 0",
                        "Hấp thụ năng lượng nhiệt từ môi trường, biến thiên enthalpy ΔrH > 0",
                        "Năng lượng của các chất sản phẩm lớn hơn năng lượng của các chất đầu",
                        "Nhiệt độ của môi trường xung quanh giảm đi rõ rệt"
                  ],
                  "ans": 0,
                  "exp": "Phản ứng tỏa nhiệt (exothermic): giải phóng nhiệt lượng, $\\Delta_r H < 0$. Vì tỏa nhiệt nên làm nhiệt độ môi trường xung quanh tăng lên."
            },
            {
                  "q": "Điều kiện chuẩn đối với chất khí trong nhiệt hóa học là gì?",
                  "opts": [
                        "Áp suất 1 bar (100 kPa) và nhiệt độ 25 °C (298 K)",
                        "Áp suất 1 atm và nhiệt độ 0 °C (273 K)",
                        "Nhiệt độ 100 °C và áp suất 1 bar",
                        "Nồng độ 1 mol/L ở nhiệt độ bất kì"
                  ],
                  "ans": 0,
                  "exp": "Điều kiện chuẩn trong hóa học hiện đại (IUPAC): áp suất chuẩn là 1 bar (100 kPa), nhiệt độ chuẩn thường lấy là 298.15 K (25 °C)."
            },
            {
                  "q": "Cho phản ứng nhiệt phân đá vôi: CaCO₃(s) → CaO(s) + CO₂(g) có ΔrH°₂₉₈ = +178.5 kJ. Phản ứng này là phản ứng:",
                  "opts": [
                        "Thu nhiệt, cần cung cấp liên tục nhiệt lượng để phản ứng xảy ra",
                        "Tỏa nhiệt, tự động bùng cháy khi tiếp xúc không khí",
                        "Không có sự trao đổi năng lượng với môi trường",
                        "Phản ứng tự xảy ra ở nhiệt độ thấp mà không cần đun nóng"
                  ],
                  "ans": 0,
                  "exp": "$\\Delta_r H^\\circ_{298} = +178.5\\text{ kJ} > 0$ là phản ứng thu nhiệt (endothermic), muốn nung vôi xảy ra liên tục phải đốt than cung cấp nhiệt độ cao (~900°C)."
            }
      ]
},
    'hoahoc10-b18': {
      "subject": "chemistry",
      "simType": "energy",
      "simOptions": {
            "mode": "enthalpy-calc"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 18",
      "title": "Ôn Tập Chương 5: Tính Toán Năng Lượng Hóa Học",
      "guide": "Vận dụng tính biến thiên enthalpy phản ứng theo 2 công thức chuẩn: Từ nhiệt tạo thành chuẩn (ΔfH°) và từ năng lượng liên kết (Eb).",
      "questions": [
            {
                  "q": "Công thức tính biến thiên enthalpy chuẩn của phản ứng theo nhiệt tạo thành chuẩn ΔfH°₂₉₈ của các chất là:",
                  "opts": [
                        "ΔrH°₂₉₈ = ∑ ΔfH°₂₉₈ (sản phẩm) - ∑ ΔfH°₂₉₈ (chất đầu)",
                        "ΔrH°₂₉₈ = ∑ ΔfH°₂₉₈ (chất đầu) - ∑ ΔfH°₂₉₈ (sản phẩm)",
                        "ΔrH°₂₉₈ = ∑ ΔfH°₂₉₈ (sản phẩm) + ∑ ΔfH°₂₉₈ (chất đầu)",
                        "ΔrH°₂₉₈ = [∑ ΔfH°₂₉₈ (chất đầu)] / [∑ ΔfH°₂₉₈ (sản phẩm)]"
                  ],
                  "ans": 0,
                  "exp": "Theo định luật Hess, biến thiên enthalpy của phản ứng bằng tổng nhiệt tạo thành của các chất sản phẩm trừ đi tổng nhiệt tạo thành của các chất đầu (nhân theo hệ số tỉ lượng)."
            },
            {
                  "q": "Khi tính ΔrH°₂₉₈ theo năng lượng liên kết Eb của các chất phản ứng ở thể khí, công thức đúng là:",
                  "opts": [
                        "ΔrH°₂₉₈ = ∑ Eb (chất đầu) - ∑ Eb (sản phẩm)",
                        "ΔrH°₂₉₈ = ∑ Eb (sản phẩm) - ∑ Eb (chất đầu)",
                        "ΔrH°₂₉₈ = ∑ Eb (chất đầu) × ∑ Eb (sản phẩm)",
                        "ΔrH°₂₉₈ = [∑ Eb (chất đầu) + ∑ Eb (sản phẩm)] / 2"
                  ],
                  "ans": 0,
                  "exp": "Để phản ứng xảy ra cần tốn năng lượng phá vỡ liên kết chất đầu ($\\sum E_b(\\text{cđ})$) và giải phóng năng lượng khi hình thành liên kết mới ở sản phẩm ($\\sum E_b(\\text{sp})$): $\\Delta_r H^\\circ = \\sum E_b(\\text{cđ}) - \\sum E_b(\\text{sp})$."
            },
            {
                  "q": "Nhiệt tạo thành chuẩn ΔfH°₂₉₈ của đơn chất bền vững nhất (như O₂(g), N₂(g), C(graphite)) có giá trị quy ước bằng:",
                  "opts": [
                        "0 kJ/mol",
                        "100 kJ/mol",
                        "-285.8 kJ/mol",
                        "Không xác định"
                  ],
                  "ans": 0,
                  "exp": "Theo quy ước quốc tế, nhiệt tạo thành chuẩn của đơn chất ở dạng bền vững nhất tại 298 K và 1 bar bằng 0 kJ/mol."
            }
      ]
},
    'hoahoc10-b19': {
      "subject": "chemistry",
      "simType": "kinetics",
      "simOptions": {
            "tempC": 25,
            "concM": 1,
            "surface": "powder",
            "hasCatalyst": false
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 19",
      "title": "Tốc Độ Phản Ứng & 5 Yếu Tố Điều Khiển Tốc Độ",
      "guide": "Điều chỉnh nhiệt độ, nồng độ chất tan, diện tích tiếp xúc và bật/tắt chất xúc tác. Quan sát tần số va chạm hiệu quả và tốc độ phản ứng tức thời.",
      "questions": [
            {
                  "q": "Theo thuyết va chạm hoạt động (va chạm hiệu quả), phản ứng hóa học chỉ xảy ra khi:",
                  "opts": [
                        "Các hạt va chạm với nhau có năng lượng đủ lớn (≥ Ea) và định hướng không gian phù hợp",
                        "Bất kì va chạm nào giữa các phân tử cũng lập tức tạo ra sản phẩm",
                        "Số lượng phân tử tham gia phản ứng phải là số chẵn",
                        "Nhiệt độ của hệ phản ứng phải đạt trên 500 °C"
                  ],
                  "ans": 0,
                  "exp": "Chỉ các va chạm hiệu quả (các phân tử có năng lượng $\\ge E_a$ và hướng va chạm thích hợp để bẻ gãy liên kết cũ) mới dẫn tới phản ứng hóa học tạo sản phẩm."
            },
            {
                  "q": "Khi tăng nhiệt độ của hệ phản ứng, tốc độ phản ứng tăng lên chủ yếu là do:",
                  "opts": [
                        "Tốc độ chuyển động của các hạt tăng, làm tăng tỉ lệ va chạm có năng lượng vượt qua năng lượng hoạt hóa Ea",
                        "Thể tích của các phân tử chất phản ứng co nhỏ lại",
                        "Nồng độ của các chất tan trong dung dịch tự động tăng lên",
                        "Năng lượng hoạt hóa Ea của phản ứng tự động tăng gấp đôi"
                  ],
                  "ans": 0,
                  "exp": "Khi nhiệt độ tăng, động năng trung bình của các phân tử tăng, dẫn đến tỉ lệ phân tử đạt năng lượng tối thiểu hoạt hóa ($E \\ge E_a$) tăng vọt $\\to$ tốc độ phản ứng tăng mạnh."
            },
            {
                  "q": "Chất xúc tác có tác dụng làm tăng tốc độ phản ứng hóa học là vì:",
                  "opts": [
                        "Tạo ra một con đường phản ứng mới có năng lượng hoạt hóa Ea thấp hơn",
                        "Làm tăng biến thiên enthalpy ΔrH của phản ứng",
                        "Trực tiếp bị tiêu hao và biến thành sản phẩm trong phản ứng",
                        "Làm nhiệt độ của dung dịch tự động sôi"
                  ],
                  "ans": 0,
                  "exp": "Chất xúc tác mở ra cơ chế phản ứng mới có năng lượng hoạt hóa $E_a$ thấp hơn, làm tăng số va chạm hiệu quả mà không bị tiêu hao sau phản ứng."
            }
      ]
},
    'hoahoc10-b20': {
      "subject": "chemistry",
      "simType": "kinetics",
      "simOptions": {
            "tempC": 45,
            "concM": 2,
            "surface": "powder",
            "hasCatalyst": true
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 20",
      "title": "Ôn Tập Chương 6: Vận Dụng Tốc Độ Phản Ứng Trong Đời Sống",
      "guide": "Áp dụng quy tắc Van 't Hoff (v₂ = v₁ · γ^(ΔT/10)) và các yếu tố nồng độ, diện tích bề mặt, áp suất, chất xúc tác vào bảo quản thực phẩm và sản xuất công nghiệp.",
      "questions": [
            {
                  "q": "Một phản ứng hóa học có hệ số nhiệt độ Van 't Hoff γ = 3. Khi tăng nhiệt độ từ 20 °C lên 50 °C, tốc độ phản ứng tăng lên bao nhiêu lần?",
                  "opts": [
                        "27 lần (vì 3^((50-20)/10) = 3³ = 27)",
                        "9 lần",
                        "30 lần",
                        "81 lần"
                  ],
                  "ans": 0,
                  "exp": "Theo quy tắc Van 't Hoff: $\\frac{v_2}{v_1} = \\gamma^{\\frac{T_2 - T_1}{10}} = 3^{\\frac{50 - 20}{10}} = 3^3 = 27$ lần."
            },
            {
                  "q": "Biện pháp nào sau đây vận dụng yếu tố diện tích bề mặt tiếp xúc để tăng tốc độ phản ứng?",
                  "opts": [
                        "Nghiền nhỏ đá vôi (CaCO₃) thành dạng bột mịn trước khi đưa vào lò nung vôi",
                        "Bảo quản thức ăn trong tủ lạnh ở 4 °C",
                        "Thêm men (enzyme) vào sữa ấm để làm sữa chua",
                        "Nén hỗn hợp khí N₂ và H₂ ở áp suất cao 200 bar trong tổng hợp NH₃"
                  ],
                  "ans": 0,
                  "exp": "Nghiền nhỏ chất rắn làm tăng diện tích tiếp xúc giữa chất rắn với chất khí/lỏng $\\to$ tăng số va chạm giữa các hạt $\\to$ tăng tốc độ phản ứng nung vôi."
            },
            {
                  "q": "Thực phẩm được bảo quản trong tủ lạnh lâu bị ôi thiu hơn so với để ở nhiệt độ phòng là do:",
                  "opts": [
                        "Nhiệt độ thấp làm giảm mạnh tốc độ các phản ứng sinh hóa phân hủy thức ăn",
                        "Tủ lạnh ngăn chặn hoàn toàn khí oxygen tiếp xúc với thức ăn",
                        "Nhiệt độ thấp làm nồng độ các chất trong thức ăn tăng cao",
                        "Tủ lạnh triệt tiêu hoàn toàn tương tác van der Waals"
                  ],
                  "ans": 0,
                  "exp": "Ở nhiệt độ thấp (tủ lạnh $0 - 4\\ ^\\circ\\text{C}$), tốc độ của các phản ứng oxi hóa và phản ứng phân hủy do vi sinh vật giảm đi nhiều lần, giúp bảo quản thực phẩm được lâu hơn."
            }
      ]
},
    'hoahoc10-b21': {
      "subject": "chemistry",
      "simType": "halogen",
      "simOptions": {
            "mode": "halogen-properties"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 21",
      "title": "Nhóm Halogen & Tính Oxi Hóa Biến Đổi Tuần Hoàn",
      "guide": "Quan sát màu sắc, trạng thái tập hợp của các phân tử đơn chất X₂ (F₂, Cl₂, Br₂, I₂) và kiểm nghiệm phản ứng thế halogen trong dung dịch muối.",
      "questions": [
            {
                  "q": "Đặc điểm cấu hình electron lớp ngoài cùng chung của các nguyên tử nhóm halogen (nhóm VIIA) là:",
                  "opts": [
                        "ns² np⁵ (có 7 electron lớp ngoài cùng, dễ nhận thêm 1e để đạt octet)",
                        "ns² np⁶ (bền vững như khí hiếm)",
                        "ns² np¹ (có 3 electron lớp ngoài cùng)",
                        "ns¹ (dễ nhường 1 electron)"
                  ],
                  "ans": 0,
                  "exp": "Các halogen thuộc nhóm VIIA có cấu hình electron lớp ngoài cùng dạng $ns^2 np^5$. Chúng có 7 electron hóa trị, có ái lực electron lớn, rất dễ nhận thêm 1e trở thành ion halide $X^-$."
            },
            {
                  "q": "Theo chiều từ Fluorine (F₂) đến Iodine (I₂), tính chất nào sau đây của các đơn chất halogen biến đổi đúng quy luật?",
                  "opts": [
                        "Tính oxi hóa giảm dần; nhiệt độ nóng chảy và nhiệt độ sôi tăng dần",
                        "Tính oxi hóa tăng dần; trạng thái từ rắn sang khí",
                        "Màu sắc của các đơn chất nhạt dần",
                        "Độ âm điện tăng dần từ F đến I"
                  ],
                  "ans": 0,
                  "exp": "Tính oxi hóa giảm dần: $F_2 > Cl_2 > Br_2 > I_2$. Nhiệt độ nóng chảy và sôi tăng dần do tương tác van der Waals tăng (khí lục nhạt $F_2 \\to$ khí vàng lục $Cl_2 \\to$ lỏng nâu đỏ $Br_2 \\to$ rắn tím đen $I_2$)."
            },
            {
                  "q": "Khi sục khí Chlorine (Cl₂) vào dung dịch muối Sodium bromide (NaBr), hiện tượng xảy ra là gì?",
                  "opts": [
                        "Dung dịch chuyển dần sang màu vàng cam/nâu đỏ do sinh ra Bromine (Br₂)",
                        "Không có hiện tượng gì xảy ra vì Br₂ mạnh hơn Cl₂",
                        "Xuất hiện kết tủa trắng bạc của kim loại Na",
                        "Dung dịch chuyển sang màu tím đậm của Iodine"
                  ],
                  "ans": 0,
                  "exp": "Do $Cl_2$ có tính oxi hóa mạnh hơn $Br_2$, xảy ra phản ứng thế halogen: $Cl_2 + 2NaBr \\to 2NaCl + Br_2$. $Br_2$ tan trong nước làm dung dịch có màu vàng cam đến nâu đỏ."
            }
      ]
},
    'hoahoc10-b22': {
      "subject": "chemistry",
      "simType": "halogen",
      "simOptions": {
            "mode": "halide-precipitation"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 22",
      "title": "Hydrogen Halide & Nhận Biết Ion Halide (AgNO₃)",
      "guide": "Thao tác nhỏ dung dịch AgNO₃ vào 4 ống nghiệm chứa F⁻, Cl⁻, Br⁻, I⁻ để phân biệt màu sắc kết tủa đặc trưng và so sánh tính acid/khử của các hợp chất.",
      "questions": [
            {
                  "q": "Thuốc thử đặc trưng để phân biệt các dung dịch muối halide (Cl⁻, Br⁻, I⁻) trong phòng thí nghiệm là:",
                  "opts": [
                        "Dung dịch Bạc nitrat (AgNO₃)",
                        "Dung dịch Bari clorua (BaCl₂)",
                        "Dung dịch Quỳ tím",
                        "Khí Carbon dioxide (CO₂)"
                  ],
                  "ans": 0,
                  "exp": "Dung dịch $AgNO_3$ tạo kết tủa màu đặc trưng với các ion halide: $AgCl \\downarrow$ (trắng), $AgBr \\downarrow$ (vàng nhạt), $AgI \\downarrow$ (vàng đậm); riêng $AgF$ tan tốt trong nước."
            },
            {
                  "q": "Hiện tượng quan sát được khi nhỏ vài giọt dung dịch AgNO₃ vào ống nghiệm chứa dung dịch NaCl là:",
                  "opts": [
                        "Xuất hiện kết tủa trắng AgCl, kết tủa này bị hóa đen khi để ngoài ánh sáng",
                        "Xuất hiện kết tủa màu vàng đậm AgI",
                        "Có sủi bọt khí không màu thoát ra mãnh liệt",
                        "Dung dịch không có hiện tượng gì vì AgCl tan hoàn toàn"
                  ],
                  "ans": 0,
                  "exp": "$NaCl + AgNO_3 \\to AgCl\\downarrow (\\text{trắng}) + NaNO_3$. Kết tủa $AgCl$ kém bền với ánh sáng: $2AgCl \\xrightarrow{h\\nu} 2Ag + Cl_2$, bạc kim loại sinh ra làm kết tủa hóa đen."
            },
            {
                  "q": "Trong dãy các hydrogen halide (HF, HCl, HBr, HI), tính acid trong dung dịch nước biến đổi theo chiều nào?",
                  "opts": [
                        "Tăng dần: HF (acid yếu) < HCl < HBr < HI (acid rất mạnh)",
                        "Giảm dần: HF > HCl > HBr > HI",
                        "Tất cả đều là các acid mạnh có độ mạnh bằng nhau",
                        "HF là acid mạnh nhất do độ âm điện của F lớn nhất"
                  ],
                  "ans": 0,
                  "exp": "Độ bền liên kết $H-X$ giảm dần từ $HF \\to HI$ (do bán kính nguyên tử halogen tăng làm độ dài liên kết tăng), làm phân tử $HI$ dễ phân li ra $H^+$ nhất trong nước $\\to$ tính acid tăng dần: $HF < HCl < HBr < HI$."
            }
      ]
},
    'hoahoc10-b23': {
      "subject": "chemistry",
      "simType": "halogen",
      "simOptions": {
            "mode": "halogen-properties"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 10 • Bài 23",
      "title": "Ôn Tập Chương 7: Nguyên Tố Nhóm Halogen",
      "guide": "Tổng kết toàn bộ tính chất vật lí, hóa học của nhóm Halogen, các phản ứng điều chế, tác dụng tẩy màu của nước Javel và ứng dụng hợp chất halide.",
      "questions": [
            {
                  "q": "Nước Javel (chứa hỗn hợp NaCl và NaClO) có tính tẩy màu và sát trùng mạnh là do:",
                  "opts": [
                        "Ion hypochlorite (ClO⁻) có tính oxi hóa rất mạnh",
                        "Chứa ion Cl⁻ có tính khử mạnh",
                        "Dung dịch có tính acid mạnh ăn mòn vết bẩn",
                        "Có khí chlorine thoát ra liên tục"
                  ],
                  "ans": 0,
                  "exp": "$Cl_2 + 2NaOH \\to NaCl + NaClO + H_2O$. Hợp chất $NaClO$ có nguyên tử $Cl^{+1}$ có tính oxi hóa rất mạnh, phá hủy các hợp chất màu và tiêu diệt vi khuẩn."
            },
            {
                  "q": "Để nhận biết hồ tinh bột trong thực phẩm hoặc phòng thí nghiệm, người ta dùng chất thử nào?",
                  "opts": [
                        "Dung dịch Iodine (I₂), tạo hợp chất bọc có màu xanh tím đặc trưng",
                        "Dung dịch Bạc nitrat (AgNO₃)",
                        "Dung dịch Nước vôi trong Ca(OH)₂",
                        "Dung dịch Phenolphthalein"
                  ],
                  "ans": 0,
                  "exp": "Dung dịch $I_2$ tác dụng với hồ tinh bột tạo phức chất màu xanh tím đặc trưng. Khi đun nóng màu xanh tím biến mất, để nguội lại xuất hiện."
            },
            {
                  "q": "Để phòng ngừa bệnh bướu cổ và thiểu năng trí tuệ do thiếu vi chất, muối ăn hằng ngày thường được bổ sung thêm một lượng nhỏ hợp chất của:",
                  "opts": [
                        "Iodine (dưới dạng muối KI hoặc KIO₃)",
                        "Fluorine (muối NaF)",
                        "Bromine (muối NaBr)",
                        "Chlorine nguyên chất"
                  ],
                  "ans": 0,
                  "exp": "Muối iod là muối ăn ($NaCl$) được trộn thêm lượng nhỏ muối iodide hoặc iodate (như $KI, KIO_3$) nhằm cung cấp nguyên tố vi lượng Iodine cần thiết cho tuyến giáp."
            }
      ]
},
        'hoahoc11-b1': {
      "subject": "chemistry",
      "simType": "equilibrium",
      "simOptions": {
            "mode": "lechatelier"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 1",
      "title": "Khái niệm về cân bằng hoá học & Nguyên lí Le Chatelier",
      "guide": "Điều chỉnh nhiệt độ (T), áp suất (P) hoặc nồng độ các chất để quan sát sự chuyển dịch cân bằng của hệ 2NO₂ (nâu đỏ) ⇌ N₂O₄ (không màu, tỏa nhiệt).",
      "questions": [
            {
                  "q": "Cho hệ cân bằng tỏa nhiệt trong bình kín: 2NO₂(k, nâu đỏ) ⇌ N₂O₄(k, không màu) có Δr H°₂₉₈ < 0. Khi ngâm bình vào chậu nước đá (hạ nhiệt độ), màu sắc của hỗn hợp khí thay đổi thế nào?",
                  "options": [
                        "Nhạt màu dần do cân bằng chuyển dịch theo chiều thuận (chiều tỏa nhiệt).",
                        "Đậm màu dần do cân bằng chuyển dịch theo chiều nghịch (chiều thu nhiệt).",
                        "Không đổi màu vì hằng số cân bằng Kc không phụ thuộc nhiệt độ.",
                        "Mất màu hoàn toàn ngay lập tức vì phản ứng diễn ra một chiều."
                  ],
                  "ans": 0,
                  "explanation": "Theo nguyên lí Le Chatelier, khi hạ nhiệt độ, cân bằng chuyển dịch theo chiều tỏa nhiệt (chiều làm tăng nhiệt độ, chiều thuận Δr H°₂₉₈ < 0), làm tăng nồng độ N₂O₄ (không màu) và giảm nồng độ NO₂ (nâu đỏ), do đó hỗn hợp nhạt màu dần."
            },
            {
                  "q": "Biểu thức hằng số cân bằng nồng độ Kc của phản ứng tổng hợp ammonia: N₂(k) + 3H₂(k) ⇌ 2NH₃(k) là gì?",
                  "options": [
                        "Kc = [NH₃]² / ([N₂] · [H₂]³)",
                        "Kc = ([N₂] · [H₂]³) / [NH₃]²",
                        "Kc = [NH₃] / ([N₂] · [H₂])",
                        "Kc = 2[NH₃] / ([N₂] + 3[H₂])"
                  ],
                  "ans": 0,
                  "explanation": "Hằng số cân bằng nồng độ Kc của phản ứng aA + bB ⇌ cC + dD được tính theo định luật tác dụng khối lượng: Kc = ([C]^c · [D]^d) / ([A]^a · [B]^b). Với phản ứng N₂ + 3H₂ ⇌ 2NH₃, ta có Kc = [NH₃]² / ([N₂] · [H₂]³)."
            },
            {
                  "q": "Yếu tố nào sau đây CHỈ làm tăng tốc độ đạt đến trạng thái cân bằng mà KHÔNG làm chuyển dịch trạng thái cân bằng hoá học?",
                  "options": [
                        "Chất xúc tác.",
                        "Nhiệt độ hệ phản ứng.",
                        "Nồng độ chất tham gia phản ứng.",
                        "Áp suất chung của hệ khí."
                  ],
                  "ans": 0,
                  "explanation": "Chất xúc tác làm tăng đồng thời tốc độ phản ứng thuận và tốc độ phản ứng nghịch với số lần bằng nhau (làm giảm năng lượng hoạt hóa Ea), giúp hệ nhanh đạt tới trạng thái cân bằng chứ không làm chuyển dịch cân bằng và không làm thay đổi hằng số cân bằng Kc."
            }
      ]
},
    'hoahoc11-b2': {
      "subject": "chemistry",
      "simType": "equilibrium",
      "simOptions": {
            "mode": "titration"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 2",
      "title": "Cân bằng trong dung dịch nước & Chuẩn độ acid - base",
      "guide": "Điều khiển khóa burette nhỏ từng giọt dung dịch chuẩn NaOH vào dung dịch HCl trong bình tam giác, theo dõi bước nhảy pH trên đồ thị sigmoid và sự đổi màu chất chỉ thị phenolphthalein.",
      "questions": [
            {
                  "q": "Một dung dịch có nồng độ ion H⁺ là [H⁺] = 1,0 × 10⁻³ M ở 25 °C. Giá trị pH của dung dịch này và môi trường tương ứng là:",
                  "options": [
                        "pH = 3, môi trường acid.",
                        "pH = 11, môi trường base.",
                        "pH = 3, môi trường trung tính.",
                        "pH = -3, môi trường acid mạnh."
                  ],
                  "ans": 0,
                  "explanation": "Định nghĩa pH = -log[H⁺] = -log(10⁻³) = 3. Vì pH < 7 ở 25 °C nên dung dịch có môi trường acid."
            },
            {
                  "q": "Trong quá trình chuẩn độ dung dịch HCl bằng dung dịch chuẩn NaOH với chất chỉ thị phenolphthalein, thời điểm kết thúc chuẩn độ (điểm tương đương) được nhận biết khi dung dịch chuyển màu như thế nào?",
                  "options": [
                        "Từ không màu chuyển sang màu hồng nhạt bền trong khoảng 30 giây.",
                        "Từ màu vàng chuyển sang màu đỏ da cam đậm.",
                        "Từ màu hồng đậm chuyển sang hoàn toàn không màu.",
                        "Xuất hiện kết tủa trắng đục dưới đáy bình tam giác."
                  ],
                  "ans": 0,
                  "explanation": "Trong môi trường acid (dư HCl), phenolphthalein không màu. Khi thêm vừa đủ NaOH đạt tới điểm tương đương (pH ≈ 7) và thêm dư nửa giọt kiềm (pH vượt qua 8,2 - 8,3), phenolphthalein chuyển sang màu hồng nhạt bền vững."
            },
            {
                  "q": "Theo thuyết acid - base của Brønsted - Lowry, trong phản ứng: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, chất đóng vai trò là base là:",
                  "options": [
                        "NH₃ vì đã nhận proton H⁺ từ H₂O.",
                        "H₂O vì nhường proton H⁺ cho NH₃.",
                        "NH₄⁺ vì mang điện tích dương.",
                        "OH⁻ vì mang điện tích âm."
                  ],
                  "ans": 0,
                  "explanation": "Theo thuyết Brønsted - Lowry, base là chất có khả năng nhận proton H⁺, còn acid là chất nhường proton H⁺. Trong phản ứng thuận, NH₃ nhận H⁺ từ H₂O để tạo NH₄⁺ nên NH₃ là base."
            }
      ]
},
    'hoahoc11-b3': {
      "subject": "chemistry",
      "simType": "equilibrium",
      "simOptions": {
            "mode": "lechatelier"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 3",
      "title": "Ôn tập chương 1: Cân bằng hoá học & Cân bằng ion",
      "guide": "Tổng hợp kiến thức chuyển dịch cân bằng, hằng số Kc, tích số ion của nước Kw và phép chuẩn độ thể tích dung dịch.",
      "questions": [
            {
                  "q": "Xét cân bằng: CO(k) + H₂O(k) ⇌ CO₂(k) + H₂(k) có Δr H°₂₉₈ < 0. Để tăng hiệu suất chuyển hóa CO thành CO₂, ta cần tác động biện pháp nào?",
                  "options": [
                        "Hạ nhiệt độ của hệ hoặc tăng nồng độ hơi nước H₂O.",
                        "Tăng áp suất chung của toàn hệ khí.",
                        "Tăng nhiệt độ của hệ phản ứng.",
                        "Giảm nồng độ hơi nước H₂O và giảm áp suất."
                  ],
                  "ans": 0,
                  "explanation": "Phản ứng có số mol khí ở 2 vế bằng nhau (1 + 1 = 1 + 1 = 2) nên áp suất không làm chuyển dịch cân bằng. Phản ứng thuận tỏa nhiệt (Δr H° < 0), nên khi hạ nhiệt độ cân bằng chuyển dịch theo chiều thuận. Tăng nồng độ H₂O cũng làm cân bằng dịch chuyển theo chiều thuận tạo thêm CO₂."
            },
            {
                  "q": "Ở 25 °C, tích số ion của nước Kw = [H⁺][OH⁻] = 1,0 × 10⁻¹⁴. Một dung dịch NaOH có nồng độ 0,01 M thì giá trị pOH và pH lần lượt là:",
                  "options": [
                        "pOH = 2 và pH = 12.",
                        "pOH = 12 và pH = 2.",
                        "pOH = 1 và pH = 13.",
                        "pOH = 7 và pH = 7."
                  ],
                  "ans": 0,
                  "explanation": "NaOH phân li hoàn toàn: [OH⁻] = 0,01 M = 10⁻² M. Suy ra pOH = -log[OH⁻] = 2. Từ pH + pOH = 14 => pH = 14 - 2 = 12."
            },
            {
                  "q": "Chuẩn độ 20,0 mL dung dịch HCl chưa biết nồng độ cần dùng vừa đủ 16,0 mL dung dịch NaOH 0,10 M. Nồng độ mol của dung dịch HCl là:",
                  "options": [
                        "0,08 M.",
                        "0,125 M.",
                        "0,10 M.",
                        "0,05 M."
                  ],
                  "ans": 0,
                  "explanation": "Phương trình phản ứng: HCl + NaOH -> NaCl + H₂O. Tại điểm tương đương: n(HCl) = n(NaOH) <=> C(HCl) · V(HCl) = C(NaOH) · V(NaOH) <=> C(HCl) · 20,0 = 0,10 · 16,0 => C(HCl) = 1,6 / 20 = 0,08 M."
            }
      ]
},
    'hoahoc11-b4': {
      "subject": "chemistry",
      "simType": "nitrogen",
      "simOptions": {
            "mode": "haber-bosch"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 4",
      "title": "Nitrogen & Tính kém hoạt động hóa học",
      "guide": "Quan sát cấu trúc phân tử N₂ với liên kết ba bền vững N≡N và khảo sát điều kiện nhiệt độ cao hoặc tia lửa điện để kích hoạt phản ứng.",
      "questions": [
            {
                  "q": "Ở điều kiện nhiệt độ thường, đơn chất nitrogen (N₂) rất trơ về mặt hoá học chủ yếu là do nguyên nhân nào?",
                  "options": [
                        "Phân tử N₂ chứa liên kết ba rất bền vững với năng lượng liên kết rất lớn (945 kJ/mol).",
                        "Nitrogen có độ âm điện quá nhỏ so với các phi kim cùng nhóm VA.",
                        "Phân tử N₂ có khối lượng quá nhẹ nên khó va chạm hiệu quả.",
                        "Nguyên tử nitrogen có bán kính quá lớn ngăn cản các chất khác tiếp cận."
                  ],
                  "ans": 0,
                  "explanation": "Phân tử N₂ có liên kết ba N≡N rất bền vững (năng lượng liên kết 945 kJ/mol). Ở nhiệt độ thường, các phân tử khác không đủ năng lượng để bẻ gãy liên kết này, do đó nitrogen rất trơ về mặt hoá học."
            },
            {
                  "q": "Trong tự nhiên, phản ứng giữa nitrogen và oxygen tạo thành nitrogen monoxide (NO) diễn ra ở điều kiện nào?",
                  "options": [
                        "Khi có tia lửa điện của sấm sét (khoảng 3000 °C) trong các cơn mưa dông.",
                        "Ở điều kiện nhiệt độ thường dưới tác dụng của ánh sáng mặt trời.",
                        "Dưới đáy biển sâu nơi có áp suất hàng trăm khí quyển.",
                        "Bên trong lục lạp của lá cây nhờ enzyme xúc tác quang hợp."
                  ],
                  "ans": 0,
                  "explanation": "Phản ứng N₂ + O₂ ⇌ 2NO đòi hỏi năng lượng rất cao (khoảng 3000 °C hoặc tia lửa điện). Trong tự nhiên, sấm sét cung cấp nhiệt độ cục bộ rất lớn này, tạo NO, sau đó tiếp tục bị oxi hóa thành NO₂ rồi theo nước mưa tạo acid rơi xuống đất cung cấp phân đạm tự nhiên (\"Lúa chiêm lấp ló đầu bờ...\")."
            },
            {
                  "q": "Kim loại nào sau đây có thể phản ứng với nitrogen ở ngay nhiệt độ thường tạo hợp chất nitride?",
                  "options": [
                        "Lithium (Li).",
                        "Magnesium (Mg).",
                        "Iron (Fe).",
                        "Aluminium (Al)."
                  ],
                  "ans": 0,
                  "explanation": "Ở nhiệt độ phòng (25 °C), kim loại kiềm Lithium phản ứng trực tiếp với N₂ tạo lithium nitride: 6Li + N₂ -> 2Li₃N. Các kim loại khác như Mg, Ca chỉ phản ứng khi đun nóng."
            }
      ]
},
    'hoahoc11-b5': {
      "subject": "chemistry",
      "simType": "nitrogen",
      "simOptions": {
            "mode": "ammonia"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 5",
      "title": "Ammonia & Muối Ammonium",
      "guide": "Thao tác thí nghiệm phun nước quỳ tím của bình khí NH₃, khảo sát tính base yếu, tính khử của ammonia và phản ứng nhiệt phân muối ammonium.",
      "questions": [
            {
                  "q": "Dung dịch ammonia (NH₃) trong nước có tính base yếu do cặp electron tự do trên nguyên tử nitrogen có khả năng:",
                  "options": [
                        "Nhận ion H⁺ từ phân tử nước tạo cation NH₄⁺ và giải phóng anion OH⁻.",
                        "Nhường electron cho kim loại tạo liên kết ion bền vững.",
                        "Tách phân tử nước thành khí hydrogen và oxygen.",
                        "Phân li hoàn toàn thành ion N³⁻ và H⁺."
                  ],
                  "ans": 0,
                  "explanation": "Trong dung dịch nước, NH₃ nhận proton H⁺ từ H₂O: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. Sự xuất hiện của ion OH⁻ làm dung dịch có tính base yếu, quỳ tím chuyển sang màu xanh và phenolphthalein chuyển hồng."
            },
            {
                  "q": "Hiện tượng \"khói trắng\" dày đặc xuất hiện khi đưa hai đầu đũa thủy tinh nhúng vào dung dịch nào lại gần nhau?",
                  "options": [
                        "Dung dịch NH₃ đặc và dung dịch HCl đặc.",
                        "Dung dịch NaOH đặc và dung dịch H₂SO₄ đặc.",
                        "Dung dịch NH₃ đặc và dung dịch HNO₃ loãng.",
                        "Dung dịch BaCl₂ và dung dịch Na₂SO₄."
                  ],
                  "ans": 0,
                  "explanation": "NH₃ và HCl đều là các chất dễ bay hơi. Khi gặp nhau trong không khí, chúng phản ứng với nhau tạo ra các tinh thể ammonium chloride NH₄Cl li ti lơ lửng, tạo thành làn khói trắng: NH₃(k) + HCl(k) -> NH₄Cl(r)."
            },
            {
                  "q": "Khi đun nóng muối ammonium hydrogencarbonate (NH₄HCO₃ - bột nở), sản phẩm sinh ra gồm những chất nào?",
                  "options": [
                        "NH₃, CO₂ và H₂O.",
                        "NH₄⁺ và CO₃²⁻.",
                        "N₂, CO và H₂O.",
                        "HNO₃ và CH₄."
                  ],
                  "ans": 0,
                  "explanation": "Muối NH₄HCO₃ kém bền nhiệt, bị phân huỷ khi đun nhẹ: NH₄HCO₃(r) -(t°)-> NH₃(k) + CO₂(k) + H₂O(h). Do sinh ra toàn các chất khí và hơi không để lại cặn nên được dùng làm bột nở trong làm bánh."
            }
      ]
},
    'hoahoc11-b6': {
      "subject": "chemistry",
      "simType": "nitrogen",
      "simOptions": {
            "mode": "acid-rain"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 6",
      "title": "Hợp chất oxygen của Nitrogen & Mưa acid, Hiện tượng phú dưỡng",
      "guide": "Mô phỏng chuỗi phản ứng hình thành mưa acid từ khí thải công nghiệp (NOx, SO₂) và cơ chế phú dưỡng hóa (eutrophication) trong hồ ao.",
      "questions": [
            {
                  "q": "Nước mưa bình thường có pH khoảng 5,6 do hòa tan khí CO₂ trong khí quyển. Nước mưa được coi là \"mưa acid\" khi giá trị pH giảm xuống dưới mức nào?",
                  "options": [
                        "pH < 5,6.",
                        "pH < 7,0.",
                        "pH < 3,0.",
                        "pH < 1,0."
                  ],
                  "ans": 0,
                  "explanation": "Nước mưa tự nhiên sạch chứa acid cacbonic yếu có pH ≈ 5,6. Khi trong khí quyển có lẫn NOx và SO₂, chúng tạo thành HNO₃ và H₂SO₄ làm pH của nước mưa giảm xuống dưới 5,6, gọi là hiện tượng mưa acid."
            },
            {
                  "q": "Nguyên nhân trực tiếp gây ra hiện tượng phú dưỡng (eutrophication) ở các thủy vực nước ngọt (ao, hồ) là do nước thải dư thừa hàm lượng lớn các nguyên tố dinh dưỡng nào?",
                  "options": [
                        "Nitrogen (N) và Phosphorus (P).",
                        "Carbon (C) và Hydrogen (H).",
                        "Sulfur (S) và Chlorine (Cl).",
                        "Sodium (Na) và Potassium (K)."
                  ],
                  "ans": 0,
                  "explanation": "Phú dưỡng là hiện tượng ao hồ tiếp nhận quá nhiều chất dinh dưỡng chứa Nitrogen (từ đạm amoni, nitrat) và Phosphorus (từ phân lân, bột giặt), kích thích tảo và thực vật thủy sinh bùng phát dữ dội, sau đó phân hủy làm cạn kiệt oxy hòa tan, khiến cá tôm chết ngạt."
            },
            {
                  "q": "Khi cho lá đồng (Cu) tác dụng với dung dịch HNO₃ đặc, nóng, hiện tượng quan sát được là:",
                  "options": [
                        "Dung dịch chuyển sang màu xanh lam và thoát ra khí NO₂ màu nâu đỏ.",
                        "Dung dịch chuyển sang màu xanh lam và thoát ra khí NO không màu hóa nâu.",
                        "Dung dịch không màu và thoát ra khí H₂ không màu, cháy nổ.",
                        "Xuất hiện kết tủa đen CuS dưới đáy ống nghiệm."
                  ],
                  "ans": 0,
                  "explanation": "Phản ứng: Cu + 4HNO₃(đặc) -> Cu(NO₃)₂ + 2NO₂↑ + 2H₂O. Ion Cu²⁺ trong dung dịch tạo màu xanh lam, khí NO₂ sinh ra có màu nâu đỏ đặc trưng và có mùi hắc độc."
            }
      ]
},
    'hoahoc11-b7': {
      "subject": "chemistry",
      "simType": "sulfur",
      "simOptions": {
            "mode": "allotropes"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 7",
      "title": "Sulfur & Sulfur dioxide (SO₂)",
      "guide": "Quan sát cấu trúc vòng 8 nguyên tử S₈ của tinh thể sulfur và thí nghiệm sục khí SO₂ làm mất màu cánh hoa hồng hoặc dung dịch nước bromine.",
      "questions": [
            {
                  "q": "Ở điều kiện thường, phân tử đơn chất sulfur tồn tại phổ biến nhất ở dạng cấu trúc nào?",
                  "options": [
                        "Dạng vòng khép kín gồm 8 nguyên tử sulfur (S₈).",
                        "Dạng đơn nguyên tử tự do (S).",
                        "Dạng phân tử hai nguyên tử giống oxygen (S₂).",
                        "Dạng mạng tinh thể kim cương vô tận."
                  ],
                  "ans": 0,
                  "explanation": "Ở nhiệt độ phòng, sulfur tồn tại chủ yếu ở dạng vòng mạch vòng gồm 8 nguyên tử (S₈) xếp nếp hình vương miện (dạng tà phương Sα hoặc đơn tà Sβ)."
            },
            {
                  "q": "Khí sulfur dioxide (SO₂) thể hiện tính khử khi tác dụng với chất nào sau đây?",
                  "options": [
                        "Dung dịch nước bromine (Br₂) làm mất màu nâu đỏ.",
                        "Khí hydrogen sulfide (H₂S) tạo kết tủa vàng sulfur.",
                        "Dung dịch kiềm NaOH tạo muối sulfite.",
                        "Kim loại magnesium (Mg) ở nhiệt độ cao."
                  ],
                  "ans": 0,
                  "explanation": "Trong SO₂, S có số oxi hóa +4 (trung gian). Khi tác dụng với chất oxi hóa mạnh như dung dịch Br₂: SO₂ + Br₂ + 2H₂O -> H₂SO₄ + 2HBr, số oxi hóa của S tăng từ +4 lên +6 (trong H₂SO₄), do đó SO₂ thể hiện tính khử, làm mất màu nước bromine."
            },
            {
                  "q": "Trong công nghiệp sản xuất sulfuric acid theo phương pháp tiếp xúc, phản ứng oxi hóa SO₂ thành SO₃ cần sử dụng chất xúc tác nào?",
                  "options": [
                        "Vanadium(V) oxide (V₂O₅) ở nhiệt độ 450 °C.",
                        "Bột kim loại sắt (Fe) ở áp suất 200 atm.",
                        "Niken (Ni) bột ở 100 °C.",
                        "Acid đặc H₂SO₄ ở nhiệt độ phòng."
                  ],
                  "ans": 0,
                  "explanation": "Phản ứng 2SO₂ + O₂ ⇌ 2SO₃ là phản ứng thuận nghịch, tỏa nhiệt, được thực hiện tối ưu ở 450 °C với chất xúc tác V₂O₅ (vanadium pentoxide)."
            }
      ]
},
    'hoahoc11-b8': {
      "subject": "chemistry",
      "simType": "sulfur",
      "simOptions": {
            "mode": "sulfuric-acid"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 8",
      "title": "Sulfuric acid & Muối Sulfate",
      "guide": "So sánh tính chất của H₂SO₄ loãng và H₂SO₄ đặc (tính háo nước than hóa đường saccarozơ, tính oxi hóa kim loại), thực hành nhận biết ion SO₄²⁻ bằng thuốc thử Ba²⁺.",
      "questions": [
            {
                  "q": "Khi nhỏ vài giọt dung dịch BaCl₂ vào ống nghiệm đựng dung dịch Na₂SO₄, hiện tượng quan sát được là:",
                  "options": [
                        "Xuất hiện kết tủa trắng không tan trong dung dịch acid mạnh (HCl, HNO₃).",
                        "Xuất hiện kết tủa vàng nhạt tan trong dung dịch acid.",
                        "Dung dịch sủi bọt khí không màu mùi hắc bay lên.",
                        "Không có hiện tượng gì xảy ra vì hai muối đều tan."
                  ],
                  "ans": 0,
                  "explanation": "Phản ứng trao đổi ion: Ba²⁺ + SO₄²⁻ -> BaSO₄↓ (màu trắng). Kết tủa BaSO₄ rất bền, không tan trong nước và cả trong dung dịch acid mạnh như HCl, HNO₃ loãng, dùng làm phản ứng đặc trưng nhận biết ion sulfate."
            },
            {
                  "q": "Hiện tượng gì xảy ra khi nhỏ vài mL dung dịch H₂SO₄ đặc vào cốc chứa bột đường saccharose (C₁₂H₂₂O₁₁)?",
                  "options": [
                        "Đường hóa than màu đen xốp, bốc khói và trào dâng lên miệng cốc do sinh khí CO₂ và SO₂.",
                        "Đường tan tạo thành dung dịch trong suốt không màu.",
                        "Đường biến thành bột màu trắng mịn lắng xuống đáy cốc.",
                        "Dung dịch chuyển sang màu đỏ rực và phát sáng lân tinh."
                  ],
                  "ans": 0,
                  "explanation": "H₂SO₄ đặc có tính háo nước mãnh liệt, hút H và O từ saccharose tạo carbon xốp đen: C₁₂H₂₂O₁₁ -(H₂SO₄ đ)-> 12C + 11H₂O. Một phần carbon tiếp tục bị H₂SO₄ đặc oxi hoá tạo CO₂ và SO₂: C + 2H₂SO₄ -> CO₂ + 2SO₂ + 2H₂O làm khối carbon xốp trào dâng lên."
            },
            {
                  "q": "Để pha loãng dung dịch H₂SO₄ đặc một cách an toàn trong phòng thí nghiệm, quy tắc bắt buộc là:",
                  "options": [
                        "Rót từ từ acid đặc vào nước dọc theo đũa thủy tinh và khuấy nhẹ; tuyệt đối không làm ngược lại.",
                        "Rót nhanh nước vào acid đặc để hạ nhiệt độ tức thời.",
                        "Đổ đồng thời cả hai chất vào cùng một lúc trong cốc kín.",
                        "Đun sôi nước trước rồi mới đổ acid đặc vào."
                  ],
                  "ans": 0,
                  "explanation": "Quá trình hòa tan H₂SO₄ đặc vào nước tỏa lượng nhiệt rất lớn. Do acid đặc nặng hơn nước, nếu đổ nước vào acid, các giọt nước nhẹ nổi lên trên mặt sẽ sôi đột ngột và bắn tung tóe các giọt acid nóng cực kì nguy hiểm. Bắt buộc phải rót từ từ acid vào nước!"
            }
      ]
},
    'hoahoc11-b9': {
      "subject": "chemistry",
      "simType": "sulfur",
      "simOptions": {
            "mode": "allotropes"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 9",
      "title": "Ôn tập chương 2: Hóa học vô cơ Nitrogen - Sulfur",
      "guide": "Hệ thống hóa tính chất chuỗi phản ứng oxi hóa khử của nitrogen, sulfur và các ứng dụng phân bón hóa học trong nông nghiệp.",
      "questions": [
            {
                  "q": "Kim loại nào sau đây bị thụ động hóa (không tan) trong dung dịch HNO₃ đặc nguội và H₂SO₄ đặc nguội?",
                  "options": [
                        "Aluminium (Al) và Iron (Fe).",
                        "Copper (Cu) và Silver (Ag).",
                        "Magnesium (Mg) và Zinc (Zn).",
                        "Sodium (Na) và Potassium (K)."
                  ],
                  "ans": 0,
                  "explanation": "Al, Fe và Cr bị thụ động hóa trong HNO₃ đặc nguội và H₂SO₄ đặc nguội do tạo ra một lớp màng oxide mỏng nhưng cực kì bền vững bao bọc bề mặt kim loại, ngăn cản phản ứng tiếp tục diễn ra."
            },
            {
                  "q": "Phân bón đạm urê có công thức hóa học là (NH₂)₂CO. Trong đất, urê chuyển hóa thành dạng muối nào mà cây trồng có thể hấp thụ?",
                  "options": [
                        "Ammonium carbonate (NH₄)₂CO₃ cung cấp ion NH₄⁺.",
                        "Nitrogen monoxide (NO).",
                        "Sulfur dioxide (SO₂).",
                        "Ammonium chloride (NH₄Cl)."
                  ],
                  "ans": 0,
                  "explanation": "Dưới tác dụng của vi sinh vật và enzyme urease trong đất ẩm: (NH₂)₂CO + 2H₂O -> (NH₄)₂CO₃. Cây trồng hấp thụ nitrogen dưới dạng ion NH₄⁺ hoặc NO₃⁻."
            },
            {
                  "q": "Để xử lí thủy ngân (Hg) rơi vãi khi nhiệt kế bị vỡ nhằm tránh nhiễm độc hơi thủy ngân, người ta dùng bột chất nào rắc lên?",
                  "options": [
                        "Bột sulfur (lưu huỳnh).",
                        "Bột than hoạt tính.",
                        "Vôi sống (CaO).",
                        "Muối ăn (NaCl)."
                  ],
                  "ans": 0,
                  "explanation": "Sulfur phản ứng trực tiếp với Hg ngay ở nhiệt độ thường tạo thành hợp chất thủy ngân(II) sulfide (HgS) rắn bền, không bay hơi và không độc: Hg + S -> HgS, giúp dễ dàng thu gom sạch sẽ."
            }
      ]
},
    'hoahoc11-b10': {
      "subject": "chemistry",
      "simType": "organic-basics",
      "simOptions": {
            "mode": "functional-groups"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 10",
      "title": "Hợp chất hữu cơ & Nhóm chức hoá học",
      "guide": "Xác định các nhóm chức đặc trưng (-OH, -CHO, -COOH, -COO-, -NH₂) và phân loại hợp chất hữu cơ thành hydrocarbon và dẫn xuất.",
      "questions": [
            {
                  "q": "Nhóm nguyên tử gây ra những tính chất hoá học đặc trưng của một phân tử hợp chất hữu cơ được gọi là:",
                  "options": [
                        "Nhóm chức.",
                        "Gốc tự do.",
                        "Đồng phân.",
                        "Mạch cacbon."
                  ],
                  "ans": 0,
                  "explanation": "Nhóm chức là nhóm nguyên tử quyết định các phản ứng và tính chất hoá học đặc trưng của lớp hợp chất hữu cơ (ví dụ nhóm -OH trong alcohol, nhóm -COOH trong carboxylic acid)."
            },
            {
                  "q": "Công thức cấu tạo thu gọn CH₃-CH₂-COOH chứa nhóm chức nào sau đây?",
                  "options": [
                        "Nhóm carboxyl (-COOH).",
                        "Nhóm hydroxyl (-OH).",
                        "Nhóm aldehyde (-CHO).",
                        "Nhóm amino (-NH₂)."
                  ],
                  "ans": 0,
                  "explanation": "Trong phân tử acid propanoic (CH₃-CH₂-COOH) có chứa nhóm carboxyl -COOH, là nhóm chức đặc trưng của carboxylic acid."
            },
            {
                  "q": "Đặc điểm chung nào sau đây KHÔNG PHẢI là đặc tính phổ biến của các hợp chất hữu cơ so với hợp chất vô cơ?",
                  "options": [
                        "Nhiệt độ nóng chảy và nhiệt độ sôi thường rất cao, khó bắt cháy.",
                        "Liên kết hoá học chủ yếu là liên kết cộng hoá trị.",
                        "Kém bền với nhiệt và thường dễ cháy.",
                        "Tốc độ phản ứng thường chậm và xảy ra theo nhiều hướng."
                  ],
                  "ans": 0,
                  "explanation": "Các hợp chất hữu cơ chủ yếu có liên kết cộng hoá trị nên nhiệt độ nóng chảy và nhiệt độ sôi thường thấp, đa số dễ cháy. Khẳng định \"nhiệt độ sôi rất cao, khó bắt cháy\" là sai."
            }
      ]
},
    'hoahoc11-b11': {
      "subject": "chemistry",
      "simType": "organic-basics",
      "simOptions": {
            "mode": "purification"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 11",
      "title": "Phương pháp tách biệt và tinh chế hợp chất hữu cơ",
      "guide": "Thao tác mô phỏng 4 phương pháp tách biệt: Chưng cất nhiệt độ sôi, Chiết lỏng - lỏng bằng phễu chiết, Kết tinh lại từ dung môi nóng và Sắc kí cột/bản mỏng.",
      "questions": [
            {
                  "q": "Để tách hai chất lỏng tan lẫn vào nhau nhưng có nhiệt độ sôi khác nhau đáng kể (ví dụ ethanol và nước), người ta sử dụng phương pháp nào?",
                  "options": [
                        "Chưng cất phân đoạn.",
                        "Chiết lỏng - lỏng bằng phễu chiết.",
                        "Kết tinh lại.",
                        "Sắc kí cột."
                  ],
                  "ans": 0,
                  "explanation": "Chưng cất là phương pháp dựa vào sự khác nhau về nhiệt độ sôi của các chất lỏng ở một áp suất nhất định. Hỗn hợp sôi, chất có nhiệt độ sôi thấp hơn sẽ bay hơi trước, qua ống sinh hàn ngưng tụ thành chất lỏng tinh khiết."
            },
            {
                  "q": "Phương pháp chiết lỏng - lỏng bằng phễu chiết được áp dụng dựa trên nguyên tắc nào sau đây?",
                  "options": [
                        "Sự khác nhau về độ tan của chất tan trong hai dung môi không trộn lẫn vào nhau.",
                        "Sự khác nhau về nhiệt độ sôi của các chất.",
                        "Sự khác nhau về độ bay hơi ở áp suất khí quyển.",
                        "Sự khác nhau về kích thước phân tử khi đi qua màng lọc."
                  ],
                  "ans": 0,
                  "explanation": "Phương pháp chiết lỏng - lỏng sử dụng một dung môi thứ hai không trộn lẫn với dung môi ban đầu, chất cần chiết tan tốt trong dung môi này hơn nhiều so với dung môi kia, sau đó phân lớp và xả tách bằng phễu chiết."
            },
            {
                  "q": "Trong kĩ thuật sắc kí bản mỏng (TLC) hoặc sắc kí cột, các chất được tách ra khỏi nhau chủ yếu là do sự khác nhau về:",
                  "options": [
                        "Khả năng hấp phụ trên pha tĩnh và khả năng hòa tan dịch chuyển trong pha động.",
                        "Khối lượng riêng của các chất.",
                        "Nhiệt độ nóng chảy của tinh thể chất rắn.",
                        "Điện tích hạt nhân của các nguyên tố trong hợp chất."
                  ],
                  "ans": 0,
                  "explanation": "Sắc kí dựa trên sự phân bố khác nhau của các chất giữa pha tĩnh (chất hấp phụ như silica gel) và pha động (dung môi chạy qua). Chất nào bị hấp phụ yếu hơn và tan tốt hơn trong pha động sẽ di chuyển nhanh hơn."
            }
      ]
},
    'hoahoc11-b12': {
      "subject": "chemistry",
      "simType": "organic-basics",
      "simOptions": {
            "mode": "spectroscopy"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 12",
      "title": "Công thức phân tử & Phổ khối lượng (MS)",
      "guide": "Đọc pic ion phân tử [M⁺] trên phổ khối lượng MS để xác định phân tử khối và lập công thức phân tử từ phần trăm khối lượng nguyên tố.",
      "questions": [
            {
                  "q": "Trên phổ khối lượng (MS) của một hợp chất hữu cơ, pic có giá trị m/z lớn nhất ứng với ion phân tử [M⁺] cho ta biết trực tiếp thông tin gì?",
                  "options": [
                        "Phân tử khối (M) của hợp chất hữu cơ đó.",
                        "Số lượng liên kết pi (π) trong phân tử.",
                        "Loại nhóm chức có mặt trong chất.",
                        "Độ bền nhiệt của khung cacbon."
                  ],
                  "ans": 0,
                  "explanation": "Ion phân tử [M⁺] sinh ra khi phân tử mất đi một electron: M -> M⁺ + e⁻. Khối lượng electron không đáng kể, do đó giá trị m/z của pic ion phân tử [M⁺] chính bằng phân tử khối M của chất."
            },
            {
                  "q": "Một hợp chất X có công thức đơn giản nhất là CH₂O và phân tử khối xác định từ phổ MS là 60. Công thức phân tử của X là:",
                  "options": [
                        "C₂H₄O₂.",
                        "C₃H₆O₃.",
                        "CH₂O.",
                        "C₄H₈O₄."
                  ],
                  "ans": 0,
                  "explanation": "Công thức phân tử có dạng (CH₂O)n. Ta có: M = (12 + 2·1 + 16) · n = 30n = 60 => n = 2. Vậy CTPT là C₂H₄O₂."
            },
            {
                  "q": "Đốt cháy hoàn toàn 4,4 g hợp chất hữu cơ X (C, H, O) thu được 8,8 g CO₂ và 3,6 g H₂O. Khối lượng nguyên tố oxygen có trong 4,4 g X là:",
                  "options": [
                        "1,6 g.",
                        "2,0 g.",
                        "0,8 g.",
                        "Không chứa oxygen (0 g)."
                  ],
                  "ans": 0,
                  "explanation": "Ta có: mC = (8,8 / 44) · 12 = 2,4 g; mH = (3,6 / 18) · 2 = 0,4 g. Khối lượng O: mO = mX - (mC + mH) = 4,4 - (2,4 + 0,4) = 1,6 g."
            }
      ]
},
    'hoahoc11-b13': {
      "subject": "chemistry",
      "simType": "organic-basics",
      "simOptions": {
            "mode": "isomers"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 13",
      "title": "Cấu tạo hoá học & Đồng phân cấu tạo, cis - trans",
      "guide": "Xây dựng khung cacbon, kéo thả liên kết tạo đồng phân mạch cacbon, đồng phân vị trí nhóm chức và phân tích điều kiện xuất hiện đồng phân hình học cis - trans.",
      "questions": [
            {
                  "q": "Hợp chất nào sau đây có đồng phân hình học cis - trans?",
                  "options": [
                        "But-2-ene (CH₃-CH=CH-CH₃).",
                        "But-1-ene (CH₂=CH-CH₂-CH₃).",
                        "Propene (CH₂=CH-CH₃).",
                        "2-Methylpropene (CH₂=C(CH₃)₂)."
                  ],
                  "ans": 0,
                  "explanation": "Điều kiện có đồng phân cis-trans tại nối đôi R₁R₂C=CR₃R₄ là R₁ ≠ R₂ và R₃ ≠ R₄. But-2-ene có dạng CH₃(H)C=C(H)CH₃ thỏa mãn điều kiện (H ≠ CH₃ ở cả 2 đầu), trong khi các chất còn lại đều có một đầu C nối đôi gắn 2 nguyên tử H giống nhau (CH₂=)."
            },
            {
                  "q": "Số lượng đồng phân cấu tạo ứng với công thức phân tử C₄H₁₀ (alkane) là:",
                  "options": [
                        "2 đồng phân (butane và 2-methylpropane).",
                        "3 đồng phân.",
                        "4 đồng phân.",
                        "1 đồng phân duy nhất."
                  ],
                  "ans": 0,
                  "explanation": "C₄H₁₀ có 2 đồng phân cấu tạo mạch cacbon: CH₃-CH₂-CH₂-CH₃ (butane) và CH₃-CH(CH₃)-CH₃ (2-methylpropane hay isobutane)."
            },
            {
                  "q": "Hiện tượng các chất có cùng công thức phân tử nhưng có cấu tạo hoá học khác nhau dẫn đến tính chất khác nhau được gọi là:",
                  "options": [
                        "Hiện tượng đồng phân.",
                        "Hiện tượng đồng đẳng.",
                        "Hiện tượng đồng khối.",
                        "Hiện tượng thù hình."
                  ],
                  "ans": 0,
                  "explanation": "Các chất đồng phân là những hợp chất khác nhau nhưng có cùng công thức phân tử (ví dụ dimethyl ether CH₃-O-CH₃ và ethanol CH₃-CH₂-OH cùng có CTPT C₂H₆O)."
            }
      ]
},
    'hoahoc11-b14': {
      "subject": "chemistry",
      "simType": "organic-basics",
      "simOptions": {
            "mode": "spectroscopy"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 14",
      "title": "Ôn tập chương 3: Đại cương hoá học hữu cơ & Phổ hồng ngoại IR",
      "guide": "Nhận diện tín hiệu dao động liên kết trên phổ IR: pic nhóm -OH (3200-3600 cm⁻¹), pic nhóm C=O carbonyl (1650-1750 cm⁻¹) và đối chiếu cấu trúc.",
      "questions": [
            {
                  "q": "Trên phổ hồng ngoại (IR), một tín hiệu hấp thụ mạnh và nhọn ở vùng số sóng khoảng 1715 cm⁻¹ là tín hiệu đặc trưng của liên kết nào?",
                  "options": [
                        "Liên kết C=O trong nhóm carbonyl (aldehyde, ketone, carboxylic acid).",
                        "Liên kết O-H trong nhóm alcohol.",
                        "Liên kết C-H trong gốc alkane.",
                        "Liên kết C≡C trong gốc alkyne."
                  ],
                  "ans": 0,
                  "explanation": "Liên kết đôi C=O có tín hiệu hấp thụ rất mạnh và đặc trưng trong khoảng số sóng 1650 - 1750 cm⁻¹. Đây là dấu hiệu nhận biết tin cậy của nhóm carbonyl."
            },
            {
                  "q": "Tín hiệu hấp thụ có dạng dải rộng hình chum (do ảnh hưởng của liên kết hydrogen) ở vùng số sóng 3200 - 3600 cm⁻¹ trên phổ IR cho thấy sự hiện diện của nhóm chức nào?",
                  "options": [
                        "Nhóm hydroxyl (-OH) của alcohol hoặc phenol.",
                        "Liên kết đôi C=C của alkene.",
                        "Liên kết C-Cl của dẫn xuất halogen.",
                        "Nhóm ester (-COO-)."
                  ],
                  "ans": 0,
                  "explanation": "Dao động hóa trị của liên kết O-H khi tạo liên kết hydrogen liên phân tử tạo ra một dải hấp thụ rất rộng ở vùng 3200 - 3600 cm⁻¹ trên phổ IR."
            },
            {
                  "q": "Cặp chất nào sau đây là đồng đẳng của nhau?",
                  "options": [
                        "CH₄ và C₂H₆.",
                        "CH₃-O-CH₃ và CH₃-CH₂-OH.",
                        "CH₂=CH₂ và cyclopropane.",
                        "CH₃-COOH và HCOOCH₃."
                  ],
                  "ans": 0,
                  "explanation": "Các chất đồng đẳng là những chất có cấu tạo tương tự nhau, có tính chất hoá học tương tự nhau nhưng phân tử hơn kém nhau một hay nhiều nhóm methylene (-CH₂-). CH₄ và C₂H₆ là 2 alkane kế tiếp trong dãy đồng đẳng."
            }
      ]
},
    'hoahoc11-b15': {
      "subject": "chemistry",
      "simType": "hydrocarbon",
      "simOptions": {
            "mode": "alkane"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 15",
      "title": "Alkane (Hydrocarbon no) & Phản ứng thế halogen",
      "guide": "Quan sát cấu trúc tứ diện đều của CH₄ và mô phỏng phản ứng thế clo từng nấc (tạo CH₃Cl, CH₂Cl₂, CHCl₃, CCl₄) dưới ánh sáng khuếch tán.",
      "questions": [
            {
                  "q": "Khi cho propane (CH₃-CH₂-CH₃) tác dụng với khí Cl₂ tỉ lệ mol 1:1 có chiếu sáng, sản phẩm chính theo quy tắc thế thế nào?",
                  "options": [
                        "2-chloropropane (nguyên tử halogen ưu tiên thế H ở nguyên tử C bậc cao hơn).",
                        "1-chloropropane (thế ở nguyên tử C bậc thấp hơn).",
                        "1,3-dichloropropane.",
                        "Hexane do ghép đôi mạch."
                  ],
                  "ans": 0,
                  "explanation": "Trong phản ứng thế halogen vào alkane có chiếu sáng, nguyên tử halogen ưu tiên thế nguyên tử hydrogen ở carbon bậc cao hơn (nguyên tử C gắn với nhiều gốc alkyl hơn). Carbon số 2 trong propane là C bậc 2, nên 2-chloropropane là sản phẩm chính."
            },
            {
                  "q": "Góc liên kết C-C-H và H-C-H trong phân tử alkane (lai hóa sp³) xấp xỉ bằng bao nhiêu?",
                  "options": [
                        "109,5° (góc tứ diện đều).",
                        "120° (tam giác phẳng).",
                        "180° (đoạn thẳng).",
                        "90° (góc vuông)."
                  ],
                  "ans": 0,
                  "explanation": "Trong phân tử alkane, mỗi nguyên tử carbon ở trạng thái lai hoá sp³, bốn liên kết đơn hướng về 4 đỉnh của một hình tứ diện với góc liên kết xấp xỉ 109,5°."
            },
            {
                  "q": "Phản ứng cracking alkane trong công nghiệp lọc hóa dầu nhằm mục đích chủ yếu gì?",
                  "options": [
                        "Bẻ gãy mạch carbon của alkane phân tử khối lớn thành các hydrocarbon phân tử khối nhỏ hơn (xăng, khí gas).",
                        "Nối dài mạch carbon tạo polymer siêu phân tử.",
                        "Oxi hoá hoàn toàn alkane thành CO₂ và H₂O.",
                        "Gắn thêm các nguyên tử halogen vào khung mạch."
                  ],
                  "ans": 0,
                  "explanation": "Cracking (bẻ gãy) dưới tác dụng của nhiệt độ và xúc tác giúp bẻ gãy các alkane mạch dài (trong dầu mỏ nặng) thành hỗn hợp alkane và alkene mạch ngắn hơn có giá trị kinh tế cao như xăng nhẹ và hóa chất cơ bản."
            }
      ]
},
    'hoahoc11-b16': {
      "subject": "chemistry",
      "simType": "hydrocarbon",
      "simOptions": {
            "mode": "alkene-markovnikov"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 16",
      "title": "Hydrocarbon không no (Alkene & Alkyne)",
      "guide": "Thực hành phản ứng cộng Br₂ làm mất màu nước bromine, khảo sát quy tắc cộng Markovnikov khi cộng HBr vào propene và phản ứng tráng bạc của but-1-yne.",
      "questions": [
            {
                  "q": "Khi cộng HBr vào propene (CH₃-CH=CH₂), theo quy tắc Markovnikov, sản phẩm chính thu được là chất nào?",
                  "options": [
                        "2-bromopropane (CH₃-CHBr-CH₃).",
                        "1-bromopropane (CH₃-CH₂-CH₂Br).",
                        "1,2-dibromopropane.",
                        "Propyl alcohol."
                  ],
                  "ans": 0,
                  "explanation": "Quy tắc Markovnikov: Trong phản ứng cộng HX vào alkene bất đối xứng, phần mang điện tích dương (H⁺) ưu tiên cộng vào nguyên tử carbon nối đôi bậc thấp hơn (chứa nhiều H hơn), còn phần mang điện tích âm (X⁻) cộng vào C nối đôi bậc cao hơn (ít H hơn). Do đó 2-bromopropane là sản phẩm chính."
            },
            {
                  "q": "Chất nào sau đây tác dụng được với dung dịch AgNO₃ trong NH₃ sinh ra kết tủa màu vàng nhạt?",
                  "options": [
                        "But-1-yne (CH≡C-CH₂-CH₃).",
                        "But-2-yne (CH₃-C≡C-CH₃).",
                        "But-2-ene (CH₃-CH=CH-CH₃).",
                        "Butane (CH₃-CH₂-CH₂-CH₃)."
                  ],
                  "ans": 0,
                  "explanation": "Các alk-1-yne (alkyne có liên kết ba đầu mạch) chứa nguyên tử H linh động gắn trực tiếp vào C≡C, có khả năng bị thế bởi ion kim loại Ag⁺ trong môi trường NH₃ tạo kết tủa màu vàng nhạt (Ag-C≡C-R↓). But-2-yne có liên kết ba ở giữa mạch nên không phản ứng."
            },
            {
                  "q": "Dẫn khí ethylene (CH₂=CH₂) vào dung dịch thuốc tím KMnO₄ ở điều kiện thường, hiện tượng quan sát được là:",
                  "options": [
                        "Dung dịch thuốc tím bị mất màu và xuất hiện kết tủa màu nâu đen (MnO₂).",
                        "Dung dịch thuốc tím chuyển sang màu vàng tươi.",
                        "Không có hiện tượng gì vì alkene bền vững với KMnO₄.",
                        "Có ngọn lửa màu xanh tự bốc cháy trên bề mặt chất lỏng."
                  ],
                  "ans": 0,
                  "explanation": "Ethylene bị oxi hoá bởi KMnO₄ tạo ethylene glycol: 3CH₂=CH₂ + 2KMnO₄ + 4H₂O -> 3HO-CH₂-CH₂-OH + 2MnO₂↓ (nâu đen) + 2KOH. Dung dịch mất màu tím tím và sinh kết tủa MnO₂."
            }
      ]
},
    'hoahoc11-b17': {
      "subject": "chemistry",
      "simType": "hydrocarbon",
      "simOptions": {
            "mode": "arene"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 17",
      "title": "Arene (Hydrocarbon thơm)",
      "guide": "Khảo sát cấu trúc vòng phẳng benzene lục giác đều, quy tắc thế ở nhân thơm (vị trí ortho/para khi có nhóm alkyl) và phản ứng nitro hóa tạo nitrobenzene.",
      "questions": [
            {
                  "q": "Hiện tượng tính thơm của benzene được biểu hiện ở đặc tính phản ứng nào?",
                  "options": [
                        "Dễ tham gia phản ứng thế, khó tham gia phản ứng cộng và rất bền với các tác nhân oxi hoá thông thường.",
                        "Dễ tham gia phản ứng cộng như alkene, khó thế.",
                        "Dễ bị oxi hóa làm mất màu dung dịch KMnO₄ ngay ở nhiệt độ thường.",
                        "Dễ bị phân huỷ thành các nguyên tố ở nhiệt độ phòng."
                  ],
                  "ans": 0,
                  "explanation": "Hệ liên kết π liên hợp khép kín trên 6 đỉnh lục giác tạo nên độ bền nhiệt động học cao của vòng thơm benzene, dẫn đến quy luật: \"Dễ thế, khó cộng, bền với tác nhân oxi hoá\" gọi là tính thơm."
            },
            {
                  "q": "Khi cho toluene (methylbenzene) tác dụng với hỗn hợp HNO₃ đặc và H₂SO₄ đặc (tỉ lệ 1:1, đun nóng), sản phẩm thế nitro ưu tiên định hướng vào vị trí nào?",
                  "options": [
                        "Vị trí ortho (o-) và para (p-).",
                        "Vị trí meta (m-).",
                        "Chỉ duy nhất vị trí meta (m-).",
                        "Vào nhánh methyl -CH₃."
                  ],
                  "ans": 0,
                  "explanation": "Nhóm alkyl (-CH₃) là nhóm đẩy electron, làm tăng mật độ electron của vòng benzene, đặc biệt ở các vị trí ortho (o-) và para (p-), do đó phản ứng thế electrophile định hướng ưu tiên vào các vị trí ortho và para."
            },
            {
                  "q": "Chất nào sau đây có khả năng làm mất màu dung dịch thuốc tím KMnO₄ khi đun nóng ở khoảng 80 - 100 °C?",
                  "options": [
                        "Toluene (C₆H₅CH₃).",
                        "Benzene (C₆H₆).",
                        "Hexane (C₆H₁₄).",
                        "Carbon tetrachloride (CCl₄)."
                  ],
                  "ans": 0,
                  "explanation": "Benzene không làm mất màu dung dịch KMnO₄ kể cả khi đun nóng. Tuy nhiên, các alkylbenzene như toluene chứa nhánh benzylic -CH₃ dễ bị oxi hoá khi đun nóng tạo muối potassium benzoate và kết tủa MnO₂, làm mất màu thuốc tím: C₆H₅CH₃ + 2KMnO₄ -(t°)-> C₆H₅COOK + 2MnO₂↓ + KOH + H₂O."
            }
      ]
},
    'hoahoc11-b18': {
      "subject": "chemistry",
      "simType": "hydrocarbon",
      "simOptions": {
            "mode": "test-tubes"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 18",
      "title": "Ôn tập chương 4: Phân biệt các lớp Hydrocarbon",
      "guide": "Phòng thí nghiệm nhận biết: Cho 4 mẫu thử khí (methane, ethylene, acetylene, benzene) lần lượt tác dụng với nước bromine, thuốc thử Tollens và KMnO₄.",
      "questions": [
            {
                  "q": "Thuốc thử nào sau đây được dùng để phân biệt nhanh propene (CH₂=CH-CH₃) và propyne (CH≡C-CH₃)?",
                  "options": [
                        "Dung dịch AgNO₃ trong NH₃ (propyne tạo kết tủa vàng, propene không có hiện tượng).",
                        "Dung dịch nước bromine Br₂.",
                        "Dung dịch KMnO₄ ở nhiệt độ phòng.",
                        "Que đóm cháy đỏ."
                  ],
                  "ans": 0,
                  "explanation": "Cả propene và propyne đều làm mất màu nước bromine và dung dịch KMnO₄. Riêng propyne là alk-1-yne có liên kết ba đầu mạch nên phản ứng được với dung dịch AgNO₃/NH₃ tạo kết tủa vàng nhạt CAg≡C-CH₃↓, còn propene thì không."
            },
            {
                  "q": "Để loại bỏ một lượng nhỏ khí ethylene lẫn trong khí methane, người ta dẫn hỗn hợp khí qua dung dịch nào sau đây?",
                  "options": [
                        "Dung dịch nước bromine dư.",
                        "Dung dịch NaOH dư.",
                        "Dung dịch HCl loãng.",
                        "Dung dịch nước vôi trong Ca(OH)₂."
                  ],
                  "ans": 0,
                  "explanation": "Ethylene phản ứng với nước bromine và bị giữ lại trong dung dịch tạo 1,2-dibromoethane lỏng: CH₂=CH₂ + Br₂ -> CH₂Br-CH₂Br. Methane là alkane không phản ứng với nước bromine nên thoát ra ngoài tinh khiết."
            },
            {
                  "q": "Công thức chung của dãy đồng đẳng alkyne là:",
                  "options": [
                        "CnH2n-2 (n ≥ 2).",
                        "CnH2n+2 (n ≥ 1).",
                        "CnH2n (n ≥ 2).",
                        "CnH2n-6 (n ≥ 6)."
                  ],
                  "ans": 0,
                  "explanation": "Alkyne là hydrocarbon mạch hở chứa 1 liên kết ba C≡C (độ bất bão hoà k = 2), có công thức phân tử tổng quát là CnH2n-2 với n ≥ 2."
            }
      ]
},
    'hoahoc11-b19': {
      "subject": "chemistry",
      "simType": "halogen-alcohol-phenol",
      "simOptions": {
            "mode": "zaitsev"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 19",
      "title": "Dẫn xuất halogen & Quy tắc tách Zaitsev",
      "guide": "Khảo sát phản ứng thủy phân dẫn xuất halogen trong dung dịch kiềm và phản ứng tách HX tạo alkene tuân theo quy tắc Zaitsev.",
      "questions": [
            {
                  "q": "Khi đun nóng 2-bromobutane (CH₃-CHBr-CH₂-CH₃) với KOH trong ethanol, theo quy tắc Zaitsev, sản phẩm chính thu được là:",
                  "options": [
                        "But-2-ene (CH₃-CH=CH-CH₃).",
                        "But-1-ene (CH₂=CH-CH₂-CH₃).",
                        "Butan-2-ol.",
                        "Butan-1-ol."
                  ],
                  "ans": 0,
                  "explanation": "Quy tắc Zaitsev: Trong phản ứng tách hydro halide (HX) ra khỏi dẫn xuất halogen, nguyên tử halogen X ưu tiên tách cùng với nguyên tử hydrogen ở carbon bên cạnh có bậc cao hơn để tạo alkene có nhiều nhóm thế hơn quanh nối đôi (alkene bền hơn). Carbon số 3 là C bậc 2 (ít H hơn C bậc 1 số 1), do đó but-2-ene là sản phẩm chính."
            },
            {
                  "q": "Hợp chất CFC (như Freon-12: CCl₂F₂) trước đây từng được dùng phổ biến trong máy lạnh và bình xịt, nhưng hiện nay bị cấm toàn cầu vì lí do chính nào?",
                  "options": [
                        "Gốc clo tự do sinh ra từ CFC phá hủy tầng ozone bảo vệ Trái Đất.",
                        "Gây hiện tượng mưa acid diện rộng.",
                        "Rất dễ bắt cháy và nổ mạnh khi tiếp xúc với không khí.",
                        "Có mùi hôi thối nồng nặc gây ô nhiễm môi trường sống."
                  ],
                  "ans": 0,
                  "explanation": "Các hợp chất chlorofluorocarbon (CFC) khi khuếch tán lên tầng bình lưu bị tia tử ngoại UV phân tách thành gốc tự do Clo Cl•. Mỗi gốc Cl• có thể phá hủy hàng trăm nghìn phân tử ozone O₃ theo cơ chế dây chuyền, tạo lỗ thủng tầng ozone."
            },
            {
                  "q": "Để chứng minh sự có mặt của nguyên tử chlorine trong dẫn xuất benzyl chloride (C₆H₅CH₂Cl), sau khi đun sôi với dung dịch NaOH, ta cần thực hiện tiếp bước nào trước khi nhỏ dung dịch AgNO₃?",
                  "options": [
                        "Acid hoá dung dịch bằng dung dịch HNO₃ loãng để trung hoà kiềm dư.",
                        "Nhỏ thêm dung dịch kiềm KOH đặc.",
                        "Sục khí CO₂ đến dư vào dung dịch.",
                        "Cho thêm một mẩu kim loại natri vào cốc."
                  ],
                  "ans": 0,
                  "explanation": "Sau khi đun sôi: C₆H₅CH₂Cl + NaOH -> C₆H₅CH₂OH + NaCl. Dung dịch còn dư ion OH⁻. Nếu nhỏ ngay AgNO₃ sẽ tạo kết tủa nâu đen Ag₂O lấn át kết tủa AgCl. Bắt buộc phải thêm dung dịch HNO₃ loãng để trung hòa hết NaOH dư, sau đó nhỏ AgNO₃ sẽ thấy kết tủa trắng AgCl."
            }
      ]
},
    'hoahoc11-b20': {
      "subject": "chemistry",
      "simType": "halogen-alcohol-phenol",
      "simOptions": {
            "mode": "alcohol"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 20",
      "title": "Alcohol & Liên kết hydrogen, Phản ứng tách nước",
      "guide": "Mô phỏng mạng liên kết hydrogen liên phân tử làm tăng nhiệt độ sôi của alcohol, phản ứng với kim loại Na, phản ứng tách nước tạo alkene ở 170 °C hoặc ether ở 140 °C và oxi hóa bằng CuO đen.",
      "questions": [
            {
                  "q": "Ethanol (C₂H₅OH) có nhiệt độ sôi (78,3 °C) cao hơn rất nhiều so với dimethyl ether (CH₃OCH₃: -24 °C) mặc dù hai chất có cùng phân tử khối (M = 46) là do:",
                  "options": [
                        "Các phân tử ethanol có khả năng tạo liên kết hydrogen liên phân tử bền vững với nhau.",
                        "Ethanol có khối lượng riêng lớn hơn nhiều so với ether.",
                        "Ethanol chứa nhiều nguyên tử hydrogen hơn.",
                        "Liên kết C-O trong ethanol là liên kết ion."
                  ],
                  "ans": 0,
                  "explanation": "Nguyên tử H linh động gắn với O có độ âm điện lớn trong nhóm -OH của ethanol tạo ra mạng lưới liên kết hydrogen liên phân tử bền vững, cần nhiều năng lượng nhiệt hơn để bẻ gãy khi chuyển pha sang hơi. Dimethyl ether không có H linh động gắn với O nên không tạo được liên kết hydrogen giữa các phân tử của nó."
            },
            {
                  "q": "Khi đun nóng ethanol với H₂SO₄ đặc ở 140 °C, sản phẩm hữu cơ chính thu được là gì?",
                  "options": [
                        "Diethyl ether (C₂H₅-O-C₂H₅).",
                        "Ethylene (CH₂=CH₂).",
                        "Ethyl hydrogen sulfate.",
                        "Acetaldehyde (CH₃CHO)."
                  ],
                  "ans": 0,
                  "explanation": "Ở 140 °C với H₂SO₄ đặc, hai phân tử alcohol tách 1 phân tử nước tạo ether: 2C₂H₅OH -(H₂SO₄ đ, 140°C)-> C₂H₅-O-C₂H₅ + H₂O. (Nếu đun ở nhiệt độ cao hơn khoảng 170 °C sẽ xảy ra phản ứng tách nước nội phân tử tạo alkene CH₂=CH₂)."
            },
            {
                  "q": "Khi dẫn hơi propan-2-ol đi qua ống nghiệm chứa bột CuO màu đen nung nóng, hiện tượng quan sát được và sản phẩm hữu cơ thu được là:",
                  "options": [
                        "Chất rắn đen chuyển sang màu đỏ gạch của đồng kim loại, thu được acetone (ketone).",
                        "Chất rắn tan hoàn toàn tạo dung dịch màu xanh lam, thu được propene.",
                        "Chất rắn màu đen chuyển sang màu trắng, thu được propanal.",
                        "Không có phản ứng vì CuO chỉ oxi hóa được alcohol bậc 1."
                  ],
                  "ans": 0,
                  "explanation": "Alcohol bậc hai (như propan-2-ol) bị oxi hóa không hoàn toàn bởi CuO nung nóng tạo ketone (acetone) và khử đồng(II) oxide đen thành kim loại Cu đỏ: CH₃-CH(OH)-CH₃ + CuO -(t°)-> CH₃-CO-CH₃ + Cu↓ + H₂O."
            }
      ]
},
    'hoahoc11-b21': {
      "subject": "chemistry",
      "simType": "halogen-alcohol-phenol",
      "simOptions": {
            "mode": "phenol"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 21",
      "title": "Phenol & Ảnh hưởng qua lại giữa nhóm -OH và vòng thơm",
      "guide": "Khảo sát tính acid yếu của phenol (phản ứng với NaOH nhưng không làm đổi màu quỳ tím) và phản ứng tạo kết tủa trắng 2,4,6-tribromophenol với nước bromine.",
      "questions": [
            {
                  "q": "Khi nhỏ vài giọt dung dịch nước bromine (màu vàng nâu) vào ống nghiệm chứa dung dịch phenol, hiện tượng quan sát được là:",
                  "options": [
                        "Xuất hiện kết tủa màu trắng đục của 2,4,6-tribromophenol.",
                        "Dung dịch chuyển sang màu xanh lam đậm.",
                        "Khí bromine bay lên ngùn ngụt không màu.",
                        "Không có hiện tượng gì do phenol không có nối đôi hở."
                  ],
                  "ans": 0,
                  "explanation": "Do ảnh hưởng của nhóm -OH đẩy mật độ electron vào vòng thơm, mật độ điện tích ở các vị trí ortho và para tăng cao, phenol phản ứng rất dễ dàng với nước bromine ngay ở điều kiện thường tạo kết tủa trắng 2,4,6-tribromophenol: C₆H₅OH + 3Br₂ -> C₆H₂Br₃OH↓ + 3HBr."
            },
            {
                  "q": "Dung dịch phenol trong nước thể hiện tính acid yếu, nhưng tính acid này yếu hơn acid nào sau đây?",
                  "options": [
                        "Carbonic acid (H₂CO₃) và acetic acid (CH₃COOH).",
                        "Ethanol (C₂H₅OH).",
                        "Nước cất tinh khiết (H₂O).",
                        "Ammonia (NH₃)."
                  ],
                  "ans": 0,
                  "explanation": "Phenol có tính acid yếu hơn H₂CO₃ nên không làm đổi màu quỳ tím và muối sodium phenolate bị acid cacbonic đẩy ra tạo lại phenol vẩn đục: C₆H₅ONa + CO₂ + H₂O -> C₆H₅OH↓ + NaHCO₃. Tuy nhiên tính acid của phenol vẫn mạnh hơn alcohol (C₂H₅OH không phản ứng với dung dịch kiềm)."
            },
            {
                  "q": "Chất nào sau đây phản ứng được với cả kim loại Na và dung dịch kiềm NaOH?",
                  "options": [
                        "Phenol (C₆H₅OH).",
                        "Ethanol (C₂H₅OH).",
                        "Toluene (C₆H₅CH₃).",
                        "Dimethyl ether (CH₃-O-CH₃)."
                  ],
                  "ans": 0,
                  "explanation": "Ethanol chỉ phản ứng với kim loại Na, không phản ứng với NaOH. Phenol vừa phản ứng với Na (tạo C₆H₅ONa + H₂), vừa phản ứng được với dung dịch kiềm NaOH (tạo C₆H₅ONa + H₂O) do nhóm -OH gắn trực tiếp vào vòng benzen mang tính acid."
            }
      ]
},
    'hoahoc11-b22': {
      "subject": "chemistry",
      "simType": "halogen-alcohol-phenol",
      "simOptions": {
            "mode": "polyalcohol"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 22",
      "title": "Ôn tập chương 5: Dẫn xuất halogen - Alcohol - Phenol",
      "guide": "Phân biệt alcohol đơn chức, polyalcohol có 2 nhóm -OH kề nhau (glycerol, ethylene glycol) bằng phức xanh lam với Cu(OH)₂ và phân biệt với phenol.",
      "questions": [
            {
                  "q": "Thuốc thử nào sau đây dùng để nhận biết các polyalcohol có các nhóm -OH liền kề (như glycerol, ethylene glycol)?",
                  "options": [
                        "Dung dịch Cu(OH)₂ trong môi trường kiềm (tạo phức chất tan màu xanh lam thẫm).",
                        "Dung dịch AgNO₃ trong NH₃ đun nóng.",
                        "Dung dịch quỳ tím đổi màu xanh.",
                        "Dung dịch nước bromine mất màu nâu đỏ."
                  ],
                  "ans": 0,
                  "explanation": "Các polyalcohol có từ 2 nhóm -OH kề nhau trở lên (như glycerol C₃H₅(OH)₃ hay ethylene glycol C₂H₄(OH)₂) có khả năng hòa tan kết tủa Cu(OH)₂ tạo thành dung dịch phức đồng màu xanh lam thẫm đặc trưng (copper(II) glycerate)."
            },
            {
                  "q": "Chất nào sau đây KHÔNG phản ứng với Cu(OH)₂ ở nhiệt độ thường tạo dung dịch màu xanh lam thẫm?",
                  "options": [
                        "Propan-1,3-diol (HO-CH₂-CH₂-CH₂-OH).",
                        "Glycerol (HO-CH₂-CH(OH)-CH₂-OH).",
                        "Ethylene glycol (HO-CH₂-CH₂-OH).",
                        "Propane-1,2-diol (CH₃-CH(OH)-CH₂-OH)."
                  ],
                  "ans": 0,
                  "explanation": "Điều kiện để hòa tan Cu(OH)₂ tạo phức xanh lam thẫm là các nhóm -OH phải liền kề nhau trên mạch cacbon. Trong propan-1,3-diol, hai nhóm -OH ở cách xa nhau (vị trí 1 và 3) nên không tạo được cấu trúc phức vòng càng chelate với ion Cu²⁺."
            },
            {
                  "q": "Nhiệt độ sôi của các chất được sắp xếp theo thứ tự tăng dần nào sau đây là đúng?",
                  "options": [
                        "CH₄ < CH₃Cl < C₂H₅OH < C₆H₅OH.",
                        "C₆H₅OH < C₂H₅OH < CH₃Cl < CH₄.",
                        "CH₃Cl < CH₄ < C₂H₅OH < C₆H₅OH.",
                        "CH₄ < C₂H₅OH < CH₃Cl < C₆H₅OH."
                  ],
                  "ans": 0,
                  "explanation": "CH₄ (phân tử không phân cực, không liên kết H) < CH₃Cl (phân tử phân cực, lực dipole-dipole) < C₂H₅OH (có liên kết hydrogen) < C₆H₅OH (phân tử khối lớn, liên kết hydrogen liên phân tử rất bền, chất rắn ở nhiệt độ thường sôi ở 181,8 °C)."
            }
      ]
},
    'hoahoc11-b23': {
      "subject": "chemistry",
      "simType": "carbonyl",
      "simOptions": {
            "mode": "tollens"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 23",
      "title": "Hợp chất Carbonyl (Aldehyde & Ketone)",
      "guide": "Thao tác phản ứng tráng bạc tráng gương của aldehyde với thuốc thử Tollens [Ag(NH₃)₂]OH, quan sát lớp gương bạc sáng loáng bám trên thành ống nghiệm.",
      "questions": [
            {
                  "q": "Khi nhỏ vài giọt formaldehyde (HCHO) hoặc acetaldehyde (CH₃CHO) vào ống nghiệm chứa thuốc thử Tollens (AgNO₃ trong NH₃) rồi ngâm vào cốc nước nóng, hiện tượng quan sát được là:",
                  "options": [
                        "Thành ống nghiệm xuất hiện một lớp kim loại bạc (Ag) sáng bóng như gương.",
                        "Dung dịch xuất hiện kết tủa trắng không tan trong acid.",
                        "Dung dịch bốc cháy với ngọn lửa màu vàng chói.",
                        "Không có hiện tượng gì do aldehyde không phản ứng với ion kim loại."
                  ],
                  "ans": 0,
                  "explanation": "Phản ứng tráng bạc: Aldehyde có tính khử mạnh, khử ion [Ag(NH₃)₂]⁺ thành kim loại bạc sáng bám chặt vào thành ống nghiệm: R-CHO + 2[Ag(NH₃)₂]OH -(t°)-> R-COONH₄ + 2Ag↓ + 3NH₃ + H₂O."
            },
            {
                  "q": "Một mol formaldehyde (HCHO) khi phản ứng hoàn toàn với lượng dư thuốc thử Tollens có thể giải phóng tối đa bao nhiêu mol kim loại bạc (Ag)?",
                  "options": [
                        "4 mol Ag.",
                        "2 mol Ag.",
                        "1 mol Ag.",
                        "3 mol Ag."
                  ],
                  "ans": 0,
                  "explanation": "Formaldehyde HCHO có cấu tạo đặc biệt: cả hai phía của nhóm carbonyl đều là nguyên tử H (tương đương 2 đầu aldehyde). Oxi hóa nấc 1 tạo HCOOH, chất này tiếp tục tráng bạc. Phương trình tổng quát: HCHO + 4[Ag(NH₃)₂]OH -> (NH₄)₂CO₃ + 4Ag↓ + 6NH₃ + 2H₂O. Do đó 1 mol HCHO sinh ra tối đa 4 mol Ag."
            },
            {
                  "q": "Chất nào sau đây tác dụng được với dung dịch I₂ trong kiềm (phản ứng tạo iodoform CHI₃ kết tủa màu vàng tươi)?",
                  "options": [
                        "Acetone (CH₃-CO-CH₃) và Acetaldehyde (CH₃-CHO).",
                        "Formaldehyde (H-CHO).",
                        "Benzophenone (C₆H₅-CO-C₆H₅).",
                        "Methanol (CH₃-OH)."
                  ],
                  "ans": 0,
                  "explanation": "Phản ứng iodoform đặc trưng cho các aldehyde và ketone có nhóm methyl gắn trực tiếp vào carbonyl (cấu trúc CH₃-C=O), tạo kết tủa vàng triiodomethane CHI₃ có mùi sát trùng đặc trưng."
            }
      ]
},
    'hoahoc11-b24': {
      "subject": "chemistry",
      "simType": "carbonyl",
      "simOptions": {
            "mode": "esterification"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 24",
      "title": "Carboxylic acid & Phản ứng ester hoá Fischer",
      "guide": "Mô phỏng phản ứng ester hoá thuận nghịch giữa acetic acid và ethanol với xúc tác H₂SO₄ đặc đun hồi lưu, quan sát lớp ester ethyl acetate có mùi thơm hoa quả nổi lên.",
      "questions": [
            {
                  "q": "Trong phản ứng ester hoá giữa acetic acid (CH₃COOH) và ethanol (C₂H₅OH) có xúc tác H₂SO₄ đặc đun nóng, acid sulfuric đặc đóng vai trò gì?",
                  "options": [
                        "Vừa là chất xúc tác tăng tốc độ phản ứng, vừa hút nước làm cân bằng chuyển dịch theo chiều thuận tạo nhiều ester.",
                        "Chỉ là chất dung môi hòa tan hai chất lỏng.",
                        "Chất oxi hoá chuyển hóa ethanol thành aldehyde.",
                        "Chất kiềm hóa môi trường phản ứng."
                  ],
                  "ans": 0,
                  "explanation": "Phản ứng ester hoá là phản ứng thuận nghịch: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. H₂SO₄ đặc đóng vai trò kép: (1) cung cấp H⁺ làm xúc tác cho phản ứng; (2) hút nước sinh ra, làm giảm nồng độ H₂O khiến cân bằng chuyển dịch theo chiều thuận tăng hiệu suất tạo ester."
            },
            {
                  "q": "Sau khi đun hồi lưu hỗn hợp phản ứng ester hóa, để tách este ethyl acetate ra khỏi hỗn hợp lỏng và làm nổi rõ lớp este, người ta thường thêm vào dung dịch nào?",
                  "options": [
                        "Dung dịch NaCl bão hòa lạnh.",
                        "Dung dịch HCl đặc.",
                        "Dung dịch cồn 90°.",
                        "Dung dịch acid nitric loãng."
                  ],
                  "ans": 0,
                  "explanation": "Thêm dung dịch NaCl bão hòa làm tăng khối lượng riêng của pha nước và làm giảm độ tan của ethyl acetate trong nước (hiệu ứng muối kết), giúp lớp ester nhẹ hơn nổi rõ rệt lên bề mặt và dễ chiết tách."
            },
            {
                  "q": "So với dung dịch hydrochloric acid (HCl) cùng nồng độ mol 0,1 M, dung dịch acetic acid (CH₃COOH) có pH cao hơn (ít chua hơn) là do:",
                  "options": [
                        "Acetic acid là một acid yếu, chỉ phân li một phần trong nước giải phóng ion H⁺.",
                        "Acetic acid có phân tử khối lớn hơn nên phân li chậm hơn.",
                        "Acetic acid chứa nguyên tử carbon làm giảm tính acid.",
                        "Acetic acid phản ứng với nước tạo môi trường trung tính."
                  ],
                  "ans": 0,
                  "explanation": "HCl là acid mạnh phân li hoàn toàn: [H⁺] = 0,1 M (pH = 1). Acetic acid là acid yếu, phân li thuận nghịch: CH₃COOH ⇌ CH₃COO⁻ + H⁺ với hằng số Ka ≈ 1,8 × 10⁻⁵, nồng độ [H⁺] chỉ khoảng 1,34 × 10⁻³ M nên pH ≈ 2,87 (lớn hơn 1)."
            }
      ]
},
    'hoahoc11-b25': {
      "subject": "chemistry",
      "simType": "carbonyl",
      "simOptions": {
            "mode": "tollens"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 11 • Bài 25",
      "title": "Ôn tập chương 6: Hợp chất Carbonyl & Dẫn xuất Carboxylic acid",
      "guide": "Tổng kết chuỗi chuyển hóa hoá học hữu cơ lớp 11: Alkane -> Alkene -> Dẫn xuất halogen -> Alcohol -> Aldehyde -> Carboxylic acid -> Ester.",
      "questions": [
            {
                  "q": "Sắp xếp theo thứ tự tăng dần nhiệt độ sôi của các chất sau: (1) C₂H₆, (2) CH₃CHO, (3) C₂H₅OH, (4) CH₃COOH:",
                  "options": [
                        "(1) < (2) < (3) < (4).",
                        "(1) < (3) < (2) < (4).",
                        "(4) < (3) < (2) < (1).",
                        "(2) < (1) < (3) < (4)."
                  ],
                  "ans": 0,
                  "explanation": "C₂H₆ (khí, không phân cực) < CH₃CHO (lỏng, có lưỡng cực nhưng không có liên kết H) < C₂H₅OH (có liên kết hydrogen liên phân tử, ts = 78,3 °C) < CH₃COOH (có liên kết hydrogen dạng nhị hợp dimer rất bền vững, ts = 118 °C)."
            },
            {
                  "q": "Cho sơ đồ chuyển hoá: C₂H₄ -(+H₂O, H⁺)-> X -(+CuO, t°)-> Y -(+AgNO₃/NH₃, t°)-> Z. Các chất X và Y lần lượt là:",
                  "options": [
                        "X là C₂H₅OH và Y là CH₃CHO.",
                        "X là CH₃CHO và Y là CH₃COOH.",
                        "X là CH₃OCH₃ và Y là HCHO.",
                        "X là C₂H₅OH và Y là CH₃COOH."
                  ],
                  "ans": 0,
                  "explanation": "C₂H₄ + H₂O -(H⁺, t°)-> C₂H₅OH (X: ethanol). Tiếp theo C₂H₅OH + CuO -(t°)-> CH₃CHO (Y: acetaldehyde) + Cu + H₂O. Acetaldehyde tráng bạc tạo Z: CH₃COONH₄ + Ag."
            },
            {
                  "q": "Để phân biệt 3 chất lỏng không màu đựng trong 3 lọ mất nhãn: ethanol (C₂H₅OH), acetic acid (CH₃COOH) và acetaldehyde (CH₃CHO), chỉ cần dùng một thuốc thử duy nhất là:",
                  "options": [
                        "Dung dịch Na₂CO₃ hoặc CaCO₃ (hoặc quỳ tím).",
                        "Dung dịch nước bromine.",
                        "Khí hydrogen có xúc tác Ni.",
                        "Dung dịch sodium chloride."
                  ],
                  "ans": 0,
                  "explanation": "Dùng quỳ tím: Acetic acid làm quỳ tím chuyển màu đỏ hồng; ethanol và acetaldehyde không đổi màu quỳ tím. Với 2 chất còn lại, dùng thuốc thử Tollens (hoặc đun với CuO) thì acetaldehyde tráng bạc, ethanol không phản ứng. Hoặc dùng đá vôi CaCO₃: chỉ có acetic acid sủi bọt khí CO₂."
            }
      ]
},

        'hoahoc12-b1': {
      "subject": "chemistry",
      "simType": "ester",
      "simOptions": {
            "mode": "esterification"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 1",
      "title": "Ester & Phản Ứng Ester Hóa Fischer",
      "guide": "Điều chỉnh nhiệt độ đun hồi lưu, quan sát sự hình thành lớp este nhẹ nổi lên trên mặt chất lỏng và khảo sát cân bằng hóa học.",
      "questions": [
            {
                  "q": "Phản ứng ester hóa giữa acetic acid (CH₃COOH) và ethanol (C₂H₅OH) có xúc tác H₂SO₄ đặc đun nóng là phản ứng:",
                  "options": [
                        "Thuận nghịch và tỏa nhiệt nhẹ, hiệu suất thường không đạt 100%.",
                        "Một chiều hoàn toàn, không thể xảy ra phản ứng nghịch.",
                        "Phản ứng oxi hóa – khử tạo ra khí CO₂ và H₂O.",
                        "Phản ứng trao đổi ion trong môi trường kiềm."
                  ],
                  "ans": 0,
                  "explanation": "Phản ứng ester hóa giữa acid carboxylic và alcohol là phản ứng thuận nghịch: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. Để tăng hiệu suất cần dùng dư một trong hai chất hoặc hút nước bằng H₂SO₄ đặc."
            },
            {
                  "q": "So với alcohol và carboxylic acid có cùng phân tử khối hoặc cùng số nguyên tử carbon, nhiệt độ sôi của ester thường:",
                  "options": [
                        "Thấp hơn đáng kể do giữa các phân tử ester không tạo được liên kết hydrogen liên phân tử.",
                        "Cao hơn nhiều do phân tử ester có khối lượng phân tử lớn hơn.",
                        "Bằng nhau vì đều là các chất hữu cơ có nhóm chứa oxygen.",
                        "Cao hơn alcohol nhưng thấp hơn acid."
                  ],
                  "ans": 0,
                  "explanation": "Ester không có nguyên tử H linh động gắn trực tiếp vào oxygen nên không tạo được liên kết hydrogen liên phân tử như alcohol và acid, vì vậy nhiệt độ sôi của ester thấp hơn nhiều so với các chất cùng phân tử khối."
            },
            {
                  "q": "Khi thủy phân methyl formate (HCOOCH₃) trong dung dịch NaOH đun nóng, sản phẩm thu được gồm những chất nào?",
                  "options": [
                        "HCOONa (sodium formate) và CH₃OH (methanol).",
                        "CH₃COONa và HCHO.",
                        "CH₃COONa và CH₃OH.",
                        "HCOOH và CH₃ONa."
                  ],
                  "ans": 0,
                  "explanation": "Phương trình phản ứng thủy phân trong môi trường kiềm (xà phòng hóa): HCOOCH₃ + NaOH -(t°)-> HCOONa + CH₃OH. Phản ứng này diễn ra một chiều."
            }
      ]
},
    'hoahoc12-b2': {
      "subject": "chemistry",
      "simType": "lipid",
      "simOptions": {
            "mode": "saponification"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 2",
      "title": "Lipid, Xà Phòng & Cơ Chế Micelle Tẩy Rửa",
      "guide": "Thao tác phản ứng xà phòng hóa chất béo tristearin với dung dịch NaOH, thêm dung dịch NaCl bão hòa để tách bánh xà phòng và quan sát cấu trúc hạt micelle.",
      "questions": [
            {
                  "q": "Sau khi đun sôi hỗn hợp gồm chất béo (mỡ lợn hoặc dầu thực vật) với dung dịch NaOH, để xà phòng kết tinh nổi lên bề mặt, người ta thực hiện bước nào?",
                  "options": [
                        "Rót thêm dung dịch NaCl bão hòa (nước muối) nóng rồi để nguội.",
                        "Nhỏ thêm vài giọt acid H₂SO₄ đặc.",
                        "Cho thêm cồn ethanol 96° vào để hòa tan.",
                        "Sục khí CO₂ vào dung dịch đến dư."
                  ],
                  "ans": 0,
                  "explanation": "Dung dịch NaCl bão hòa làm tăng khối lượng riêng của pha nước và làm giảm độ tan của muối sodium của acid béo (hiệu ứng muối kết), giúp xà phòng nhẹ hơn đóng bánh nổi lên trên."
            },
            {
                  "q": "Cấu trúc của một phân tử xà phòng (ví dụ C₁₇H₃₅COONa) gồm hai phần có đặc tính nào?",
                  "options": [
                        "Phần đầu ưa nước phân cực (-COO⁻Na⁺) và phần đuôi kị nước không phân cực (gốc hydrocarbon dài C₁₇H₃₅-).",
                        "Cả hai đầu đều kị nước và không hòa tan trong chất lỏng.",
                        "Cả hai đầu đều ưa nước và tan vô hạn trong nước.",
                        "Phần đầu kị nước và phần đuôi ưa nước."
                  ],
                  "ans": 0,
                  "explanation": "Phân tử xà phòng lưỡng ái: gốc hydrocarbon dài kị nước hòa tan vào vết dầu mỡ, còn đầu ion -COO⁻Na⁺ phân cực ưa nước hướng ra ngoài tiếp xúc với phân tử nước."
            },
            {
                  "q": "Xà phòng thông thường có nhược điểm lớn khi giặt rửa trong môi trường nào sau đây?",
                  "options": [
                        "Nước cứng (nước chứa nhiều ion Ca²⁺ và Mg²⁺) vì tạo kết tủa muối không tan.",
                        "Nước mềm tinh khiết.",
                        "Nước ấm ở 40 °C.",
                        "Dung dịch có tính kiềm nhẹ."
                  ],
                  "ans": 0,
                  "explanation": "Trong nước cứng, ion Ca²⁺ và Mg²⁺ kết hợp với anion acid béo tạo kết tủa muối không tan (ví dụ (C₁₇H₃₅COO)₂Ca↓) làm mất tác dụng tẩy rửa và bám bẩn vào sợi vải. Chất giặt rửa tổng hợp không bị nhược điểm này."
            }
      ]
},
    'hoahoc12-b3': {
      "subject": "chemistry",
      "simType": "ester",
      "simOptions": {
            "mode": "micelle"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 3",
      "title": "Ôn Tập Chương 1: Ester – Lipid & Chất Giặt Rửa",
      "guide": "Hệ thống hóa cấu tạo phân tử triacylglycerol, phản ứng hydrogen hóa chất béo lỏng thành chất béo rắn (bơ nhân tạo) và cơ chế micelle làm sạch.",
      "questions": [
            {
                  "q": "Chất béo nào sau đây tồn tại ở trạng thái lỏng ở nhiệt độ phòng (25 °C)?",
                  "options": [
                        "Triolein (C₁₇H₃₃COO)₃C₃H₅ do chứa gốc acid béo không no có liên kết đôi cis.",
                        "Tristearin (C₁₇H₃₅COO)₃C₃H₅.",
                        "Tripalmitin (C₁₅H₃₁COO)₃C₃H₅.",
                        "Mỡ lợn đông đặc."
                  ],
                  "ans": 0,
                  "explanation": "Triolein chứa gốc acid oleic không no (có 1 nối đôi cis ở C9=C10) làm mạch bị gập khúc, các phân tử khó xếp khít nhau nên có nhiệt độ nóng chảy thấp (chất béo lỏng / dầu thực vật)."
            },
            {
                  "q": "Phản ứng hydrogen hóa chất béo lỏng (dầu thực vật) thành chất béo rắn (bơ thực vật / shortening) trong công nghiệp sử dụng chất xúc tác nào?",
                  "options": [
                        "Kim loại Niken (Ni) đun nóng ở nhiệt độ khoảng 180 - 200 °C.",
                        "Acid sulfuric đặc H₂SO₄.",
                        "Bột than hoạt tính ở nhiệt độ thường.",
                        "Dung dịch thuốc tím KMnO₄."
                  ],
                  "ans": 0,
                  "explanation": "Phản ứng cộng H₂ vào liên kết đôi C=C của gốc acid béo không no: (C₁₇H₃₃COO)₃C₃H₅ + 3H₂ -(Ni, t°)-> (C₁₇H₃₅COO)₃C₃H₅ giúp chuyển dầu lỏng thành mỡ/bơ rắn dễ bảo quản và vận chuyển."
            },
            {
                  "q": "Thủy phân hoàn toàn 1 mol triolein cần dùng vừa đủ bao nhiêu mol NaOH và thu được bao nhiêu mol glycerol?",
                  "options": [
                        "3 mol NaOH và 1 mol glycerol.",
                        "1 mol NaOH và 1 mol glycerol.",
                        "3 mol NaOH và 3 mol glycerol.",
                        "2 mol NaOH và 1 mol glycerol."
                  ],
                  "ans": 0,
                  "explanation": "Phương trình xà phòng hóa triacylglycerol: (RCOO)₃C₃H₅ + 3NaOH -> 3RCOONa + C₃H₅(OH)₃. Do đó 1 mol chất béo luôn tiêu tốn 3 mol NaOH và tạo ra đúng 1 mol glycerol."
            }
      ]
},
    'hoahoc12-b4': {
      "subject": "chemistry",
      "simType": "glucose",
      "simOptions": {
            "mode": "glucose-fructose"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 4",
      "title": "Carbohydrate: Glucose & Fructose",
      "guide": "Khảo sát cấu trúc dạng mạch hở và mạch vòng α, β-hemiacetal; thực hành phản ứng tráng bạc Tollens và phản ứng tạo kết tủa đỏ gạch Cu₂O.",
      "questions": [
            {
                  "q": "Trong môi trường kiềm (như khi đun nóng với dung dịch AgNO₃ trong NH₃), fructose vẫn có khả năng tham gia phản ứng tráng bạc là do:",
                  "options": [
                        "Fructose chuyển hóa thuận nghịch thành glucose thông qua trung gian enediol.",
                        "Bản thân phân tử fructose có nhóm chức aldehyde (-CHO) mạch hở.",
                        "Fructose bị phân hủy hoàn toàn thành formaldehyde.",
                        "Fructose là một hợp chất disaccharide."
                  ],
                  "ans": 0,
                  "explanation": "Trong môi trường kiềm, nhóm ketone của fructose có thể đồng phân hóa thuận nghịch thành nhóm aldehyde của glucose qua dạng enediol: Fructose ⇌ Glucose, do đó fructose cũng cho phản ứng tráng bạc và làm mất màu Cu(OH)₂."
            },
            {
                  "q": "Khi cho dung dịch glucose tác dụng với Cu(OH)₂ ở nhiệt độ thường và khi đun nóng, hiện tượng lần lượt là:",
                  "options": [
                        "Ở nhiệt độ thường tạo dung dịch màu xanh lam thẫm; khi đun nóng xuất hiện kết tủa màu đỏ gạch (Cu₂O).",
                        "Ở nhiệt độ thường không phản ứng; khi đun nóng xuất hiện kết tủa đen CuO.",
                        "Cả hai điều kiện đều tạo kết tủa màu đỏ gạch.",
                        "Dung dịch chuyển sang màu tím hoa cà."
                  ],
                  "ans": 0,
                  "explanation": "Ở nhiệt độ phòng, glucose có nhiều nhóm -OH liền kề nên hòa tan Cu(OH)₂ tạo phức màu xanh lam thẫm. Khi đun nóng, nhóm aldehyde -CHO khử Cu(II) thành kết tủa đỏ gạch copper(I) oxide Cu₂O↓."
            },
            {
                  "q": "Trong máu người khỏe mạnh bình thường, nồng độ glucose được duy trì ổn định ở mức khoảng bao nhiêu?",
                  "options": [
                        "Khoảng 4,4 – 7,2 mmol/L (tương đương 0,8 – 1,2 g/L hay 0,1%).",
                        "Khoảng 15,0 – 20,0 mmol/L.",
                        "Khoảng 0,01 mmol/L.",
                        "Khoảng 50 mmol/L."
                  ],
                  "ans": 0,
                  "explanation": "Nồng độ glucose sinh lí trong máu người ổn định ở mức khoảng 0,1% (hay 4,4 - 7,2 mmol/L). Nếu vượt quá mức này kéo dài là dấu hiệu của bệnh đái tháo đường (tiểu đường)."
            }
      ]
},
    'hoahoc12-b5': {
      "subject": "chemistry",
      "simType": "saccharose",
      "simOptions": {
            "mode": "disaccharides"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 5",
      "title": "Saccharose & Maltose",
      "guide": "Phân tích liên kết glycosidic giữa 2 gốc monosaccharide; chứng minh saccharose không tráng bạc nhưng sau khi thủy phân thì cho phản ứng tráng bạc.",
      "questions": [
            {
                  "q": "Phân tử saccharose (đường mía) được cấu tạo từ hai gốc monosaccharide nào qua liên kết glycosidic?",
                  "options": [
                        "Một gốc α-glucose và một gốc β-fructose qua liên kết α-1,2-glycosidic.",
                        "Hai gốc α-glucose qua liên kết α-1,4-glycosidic.",
                        "Hai gốc β-galactose.",
                        "Một gốc α-glucose và một gốc β-glucose."
                  ],
                  "ans": 0,
                  "explanation": "Saccharose gồm một gốc α-glucose liên kết với một gốc β-fructose bằng liên kết α-1,2-glycosidic (cả 2 nhóm -OH hemiacetal đều tham gia liên kết, vòng không mở được nên saccharose không có tính khử)."
            },
            {
                  "q": "Dung dịch saccharose tinh khiết không tham gia phản ứng tráng bạc, nhưng sau khi đun nóng với dung dịch acid HCl loãng rồi kiềm hóa thì lại tráng bạc được. Hiện tượng này là do:",
                  "options": [
                        "Saccharose bị thủy phân tạo ra glucose và fructose, cả hai chất này đều có khả năng tráng bạc.",
                        "Acid HCl đóng vai trò là chất khử ion Ag⁺.",
                        "Saccharose bị nhiệt phân giải phóng kim loại bạc.",
                        "Dung dịch tạo thành có tính base làm bạc tự kết tinh."
                  ],
                  "ans": 0,
                  "explanation": "Thủy phân: C₁₂H₂₂O₁₁ + H₂O -(H⁺, t°)-> C₆H₁₂O₆ (glucose) + C₆H₁₂O₆ (fructose). Cả glucose và fructose sinh ra đều tham gia phản ứng tráng bạc với thuốc thử Tollens."
            },
            {
                  "q": "Điểm khác biệt cơ bản về tính khử giữa maltose và saccharose là:",
                  "options": [
                        "Maltose còn nhóm -OH hemiacetal tự do có thể mở vòng tạo nhóm -CHO nên có tính khử, còn saccharose thì không.",
                        "Saccharose có tính khử mạnh hơn maltose.",
                        "Cả hai chất đều không có tính khử.",
                        "Maltose không bị thủy phân trong môi trường acid."
                  ],
                  "ans": 0,
                  "explanation": "Maltose được cấu tạo từ 2 gốc α-glucose qua liên kết α-1,4-glycosidic, gốc glucose thứ hai vẫn còn nhóm -OH hemiacetal tự do có thể mở vòng tạo nhóm -CHO, vì vậy maltose có tính khử (tráng bạc, khử Cu(OH)₂)."
            }
      ]
},
    'hoahoc12-b6': {
      "subject": "chemistry",
      "simType": "starch",
      "simOptions": {
            "mode": "polysaccharides-iodine"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 6",
      "title": "Tinh Bột, Cellulose & Phản Ứng Màu Với Iodine",
      "guide": "Khảo sát cấu trúc xoắn amylose và phân nhánh amylopectin; mô phỏng phản ứng bắt màu xanh tím của tinh bột với dung dịch iodine khi đun nóng và làm nguội.",
      "questions": [
            {
                  "q": "Khi nhỏ vài giọt dung dịch iodine (I₂) vào hồ tinh bột ở nhiệt độ phòng, hiện tượng quan sát được và khi đun nóng hỗn hợp là:",
                  "options": [
                        "Xuất hiện màu xanh tím đặc trưng; khi đun nóng màu xanh tím biến mất, để nguội lại xuất hiện trở lại.",
                        "Xuất hiện kết tủa đỏ gạch bền với nhiệt độ.",
                        "Dung dịch chuyển sang màu tím hoa cà và không đổi khi đun nóng.",
                        "Có khói màu tím bay lên ngùn ngụt."
                  ],
                  "ans": 0,
                  "explanation": "Phân tử amylose trong tinh bột có cấu trúc xoắn lò xo, các phân tử iodine chui vào trong lòng xoắn tạo hợp chất bọc có màu xanh tím. Khi đun nóng, cấu trúc xoắn duỗi ra, I₂ giải phóng làm mất màu; để nguội cấu trúc xoắn tái lập và màu xanh tím hiện lại."
            },
            {
                  "q": "Cellulose có cấu trúc mạch thẳng không phân nhánh gồm nhiều gốc β-glucose liên kết với nhau qua loại liên kết nào?",
                  "options": [
                        "Liên kết β-1,4-glycosidic.",
                        "Liên kết α-1,4-glycosidic.",
                        "Liên kết α-1,6-glycosidic.",
                        "Liên kết peptide -CO-NH-."
                  ],
                  "ans": 0,
                  "explanation": "Cellulose gồm các mắt xích β-glucose liên kết với nhau qua liên kết β-1,4-glycosidic tạo thành mạch thẳng dài không xoắn, các mạch xếp song song tạo thành các bó sợi cellulose cực kì bền chắc."
            },
            {
                  "q": "Thuốc súng không khói (cellulose trinitrate) được điều chế bằng phản ứng giữa cellulose với hỗn hợp chất nào?",
                  "options": [
                        "Dung dịch HNO₃ đặc có xúc tác H₂SO₄ đặc đun nóng.",
                        "Dung dịch nước cường toan (HCl đặc và HNO₃ đặc tỉ lệ 3:1).",
                        "Khí nitrogen dioxide NO₂ trong bình kín.",
                        "Muối kali nitrat KNO₃ rắn."
                  ],
                  "ans": 0,
                  "explanation": "Phản ứng ester hóa các nhóm -OH của cellulose: [C₆H₇O₂(OH)₃]n + 3n HNO₃ -(H₂SO₄ đ, t°)-> [C₆H₇O₂(ONO₂)₃]n + 3n H₂O. Sản phẩm cellulose trinitrate là chất dễ cháy nổ mạnh, không sinh khói."
            }
      ]
},
    'hoahoc12-b7': {
      "subject": "chemistry",
      "simType": "carbohydrate",
      "simOptions": {
            "mode": "glucose-fructose"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 7",
      "title": "Ôn Tập Chương 2: Phân Loại & Chuyển Hóa Carbohydrate",
      "guide": "Tổng kết sơ đồ nhận biết và phân biệt monosaccharide, disaccharide và polysaccharide bằng các thuốc thử đặc trưng.",
      "questions": [
            {
                  "q": "Để phân biệt 3 dung dịch riêng biệt mất nhãn: glucose, saccharose và hồ tinh bột, ta có thể dùng lần lượt hai thuốc thử nào?",
                  "options": [
                        "Dung dịch iodine (nhận biết tinh bột màu xanh tím) và thuốc thử Tollens AgNO₃/NH₃ (nhận biết glucose tráng bạc).",
                        "Dung dịch NaOH và quỳ tím.",
                        "Dung dịch HCl và BaCl₂.",
                        "Khí hydrogen có xúc tác Ni."
                  ],
                  "ans": 0,
                  "explanation": "Thuốc thử iodine: chỉ có hồ tinh bột cho màu xanh tím. Hai mẫu còn lại dùng thuốc thử Tollens: glucose cho kết tủa bạc sáng (tráng gương), còn saccharose không phản ứng."
            },
            {
                  "q": "Sản phẩm cuối cùng của quá trình thủy phân hoàn toàn tinh bột nhờ enzyme amylase trong hệ tiêu hóa của con người là chất nào?",
                  "options": [
                        "Glucose.",
                        "Fructose.",
                        "Saccharose.",
                        "Galactose."
                  ],
                  "ans": 0,
                  "explanation": "Quá trình tiêu hóa tinh bột diễn ra từng nấc: Tinh bột -> Dextrin -> Maltose -> Glucose. Glucose được hấp thụ qua thành ruột non vào máu cung cấp năng lượng cho tế bào."
            },
            {
                  "q": "Chất nào sau đây tan được trong nước Schweizer (dung dịch Cu(OH)₂ trong ammonia)?",
                  "options": [
                        "Cellulose.",
                        "Tinh bột.",
                        "Polyetylen (PE).",
                        "Lipid (chất béo)."
                  ],
                  "ans": 0,
                  "explanation": "Cellulose không tan trong nước và các dung môi hữu cơ thông thường, nhưng tan được trong nước Schweizer [Cu(NH₃)₄](OH)₂ tạo dung dịch nhớt dùng để kéo sợi tơ nhân tạo (tơ đồng - amoniac)."
            }
      ]
},
    'hoahoc12-b8': {
      "subject": "chemistry",
      "simType": "amine",
      "simOptions": {
            "mode": "amine"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 8",
      "title": "Amine & Tính Base, Phản Ứng Với Bromine",
      "guide": "Khảo sát cấu trúc hình chóp của amine, so sánh lực base với ammonia và quan sát kết tủa trắng khi nhỏ nước bromine vào aniline.",
      "questions": [
            {
                  "q": "Dãy các chất nào sau đây được sắp xếp theo thứ tự lực base tăng dần đúng nhất?",
                  "options": [
                        "C₆H₅NH₂ (aniline) < NH₃ < CH₃NH₂ < (CH₃)₂NH (dimethylamine).",
                        "(CH₃)₂NH < CH₃NH₂ < NH₃ < C₆H₅NH₂.",
                        "NH₃ < C₆H₅NH₂ < CH₃NH₂ < (CH₃)₂NH.",
                        "C₆H₅NH₂ < (CH₃)₂NH < CH₃NH₂ < NH₃."
                  ],
                  "ans": 0,
                  "explanation": "Gốc phenyl -C₆H₅ hút electron làm giảm mật độ electron trên nguyên tử N, tính base aniline rất yếu (không đổi màu quỳ). Gốc alkyl -CH₃ đẩy electron làm tăng mật độ electron trên N, tính base mạnh hơn NH₃, amine bậc 2 (CH₃)₂NH có tính base mạnh nhất trong dãy."
            },
            {
                  "q": "Khi nhỏ vài giọt dung dịch nước bromine vào ống nghiệm chứa aniline (C₆H₅NH₂), hiện tượng quan sát được là:",
                  "options": [
                        "Xuất hiện kết tủa màu trắng đục của 2,4,6-tribromoaniline.",
                        "Dung dịch chuyển sang màu xanh lam đậm.",
                        "Có khí không màu bay lên sủi bọt mạnh.",
                        "Không có hiện tượng gì do aniline không tan trong nước."
                  ],
                  "ans": 0,
                  "explanation": "Nhóm amino -NH₂ là nhóm đẩy electron mạnh hoạt hóa nhân thơm, làm mật độ electron ở các vị trí ortho và para tăng cao, aniline phản ứng tức thời với nước bromine tạo kết tủa trắng 2,4,6-tribromoaniline: C₆H₅NH₂ + 3Br₂ -> C₆H₂Br₃NH₂↓ + 3HBr."
            },
            {
                  "q": "Bậc của một phân tử amine được xác định bằng:",
                  "options": [
                        "Số nguyên tử hydrogen trong phân tử ammonia (NH₃) bị thay thế bởi gốc hydrocarbon.",
                        "Bậc của nguyên tử carbon liên kết trực tiếp với nhóm amino.",
                        "Tổng số nguyên tử carbon có trong phân tử amine.",
                        "Số nhóm chức amino có mặt trong phân tử."
                  ],
                  "ans": 0,
                  "explanation": "Khác với bậc alcohol (tính theo bậc của carbon gắn nhóm -OH), bậc của amine bằng số gốc hydrocarbon gắn trực tiếp vào nguyên tử nitrogen (số nguyên tử H của NH₃ bị thay thế): bậc 1 (RNH₂), bậc 2 (R-NH-R'), bậc 3 (R-N(R')-R'')."
            }
      ]
},
    'hoahoc12-b9': {
      "subject": "chemistry",
      "simType": "amino-acid",
      "simOptions": {
            "mode": "amino-acid-ph"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 9",
      "title": "Amino Acid, Ion Lưỡng Cực & Sự Điện Di",
      "guide": "Điều chỉnh pH môi trường để quan sát sự chuyển dịch dạng tồn tại của amino acid (cation, ion lưỡng cực, anion) trong điện trường.",
      "questions": [
            {
                  "q": "Trong dung dịch nước ở điều kiện pH sinh lí (pH ≈ 7), amino acid tồn tại chủ yếu ở dạng cấu trúc nào?",
                  "options": [
                        "Ion lưỡng cực (H₃N⁺-CH(R)-COO⁻) có cả điện tích dương và điện tích âm.",
                        "Phân tử trung hòa không mang điện (H₂N-CH(R)-COOH).",
                        "Chỉ tồn tại ở dạng cation mang điện tích dương.",
                        "Chỉ tồn tại ở dạng anion mang điện tích âm."
                  ],
                  "ans": 0,
                  "explanation": "Nhóm -COOH có tính acid nhường proton H⁺ cho nhóm -NH₂ có tính base trong cùng một phân tử, tạo thành ion lưỡng cực H₃N⁺-CH(R)-COO⁻. Do cấu trúc ion lưỡng cực này mà amino acid là chất rắn kết tinh, nhiệt độ nóng chảy cao và tan tốt trong nước."
            },
            {
                  "q": "Glycine (H₂N-CH₂-COOH) có điểm đẳng điện pI = 5,97. Khi đặt dung dịch glycine ở môi trường pH = 2 vào điện trường, các phân tử glycine sẽ di chuyển về phía cực nào?",
                  "options": [
                        "Di chuyển về phía cực âm (Cathode) do nhận thêm H⁺ tồn tại ở dạng cation H₃N⁺-CH₂-COOH mang điện tích dương.",
                        "Di chuyển về phía cực dương (Anode) do mang điện tích âm.",
                        "Đứng yên không di chuyển vì phân tử trung hòa điện.",
                        "Di chuyển ngẫu nhiên không định hướng."
                  ],
                  "ans": 0,
                  "explanation": "Ở pH = 2 (môi trường acid mạnh, pH < pI), nhóm carboxyl bị proton hóa, phân tử tồn tại ở dạng cation H₃N⁺-CH₂-COOH mang điện tích +1, do đó bị hút về phía cực âm (Cathode)."
            },
            {
                  "q": "Glutamic acid (chất điều chế mì chính bột ngọt) chứa bao nhiêu nhóm amino (-NH₂) và bao nhiêu nhóm carboxyl (-COOH)?",
                  "options": [
                        "1 nhóm -NH₂ và 2 nhóm -COOH (làm quỳ tím hóa đỏ hồng).",
                        "2 nhóm -NH₂ và 1 nhóm -COOH (làm quỳ tím hóa xanh).",
                        "1 nhóm -NH₂ và 1 nhóm -COOH.",
                        "2 nhóm -NH₂ và 2 nhóm -COOH."
                  ],
                  "ans": 0,
                  "explanation": "Glutamic acid: HOOC-CH₂-CH₂-CH(NH₂)-COOH có 2 nhóm -COOH và 1 nhóm -NH₂, số nhóm acid nhiều hơn nhóm base nên dung dịch có pH < 7, làm quỳ tím chuyển sang màu đỏ nhạt."
            }
      ]
},
    'hoahoc12-b10': {
      "subject": "chemistry",
      "simType": "protein",
      "simOptions": {
            "mode": "peptide-biuret"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 10",
      "title": "Protein, Enzyme & Phản Ứng Màu Biuret",
      "guide": "Thao tác phản ứng màu biuret của lòng trắng trứng (albumin) với Cu(OH)₂ trong môi trường kiềm, khảo sát cơ chế enzyme xúc tác.",
      "questions": [
            {
                  "q": "Khi nhỏ vài giọt dung dịch CuSO₄ vào ống nghiệm chứa dung dịch lòng trắng trứng (albumin) đã thêm sẵn dung dịch NaOH, hiện tượng quan sát được là:",
                  "options": [
                        "Xuất hiện màu tím hoa cà (violet) đặc trưng của phản ứng màu biuret.",
                        "Xuất hiện kết tủa màu đỏ gạch của Cu₂O.",
                        "Dung dịch chuyển sang màu vàng tươi.",
                        "Xuất hiện kết tủa màu đen lắng xuống đáy."
                  ],
                  "ans": 0,
                  "explanation": "Protein và các peptide có từ 2 liên kết peptide trở lên phản ứng với Cu(OH)₂ trong môi trường kiềm tạo phức chất chelate màu tím hoa cà đặc trưng (phản ứng biuret)."
            },
            {
                  "q": "Chất nào sau đây KHÔNG cho phản ứng màu biuret khi tác dụng với Cu(OH)₂ trong môi trường kiềm?",
                  "options": [
                        "Dipeptide Gly-Ala.",
                        "Tripeptide Gly-Ala-Val.",
                        "Tetrapeptide Ala-Gly-Ala-Val.",
                        "Protein albumin (lòng trắng trứng)."
                  ],
                  "ans": 0,
                  "explanation": "Điều kiện để xảy ra phản ứng màu biuret là phân tử phải chứa từ 2 liên kết peptide trở lên (từ tripeptide trở lên). Dipeptide chỉ có 1 liên kết peptide nên không đủ tạo phức vòng càng với ion Cu²⁺, do đó không có phản ứng biuret."
            },
            {
                  "q": "Đặc điểm nào sau đây thể hiện tính chọn lọc cao của enzyme trong các phản ứng sinh hóa?",
                  "options": [
                        "Mỗi enzyme chỉ xúc tác cho một phản ứng hoặc một loại phản ứng nhất định đối với cơ chất phù hợp (mô hình khóa và chìa).",
                        "Enzyme xúc tác cho mọi phản ứng hóa học ở bất kì nhiệt độ nào.",
                        "Enzyme hoạt động mạnh nhất ở nhiệt độ trên 100 °C.",
                        "Enzyme không bị biến tính bởi nhiệt độ và acid."
                  ],
                  "ans": 0,
                  "explanation": "Trung tâm hoạt động của enzyme có cấu trúc không gian ba chiều vừa khít với cơ chất tương ứng (cơ chế \"ổ khóa và chìa khóa\"), giúp enzyme có tính chọn lọc và đặc hiệu tuyệt đối."
            }
      ]
},
    'hoahoc12-b11': {
      "subject": "chemistry",
      "simType": "peptide",
      "simOptions": {
            "mode": "peptide-biuret"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 11",
      "title": "Ôn Tập Chương 3: Hợp Chất Chứa Nitrogen & Peptide",
      "guide": "Hệ thống hóa cấu trúc bậc của protein, phản ứng đông tụ protein bởi nhiệt hoặc acid/cồn và sơ đồ thủy phân liên kết peptide.",
      "questions": [
            {
                  "q": "Hiện tượng khi nấu canh cua, gạch cua đóng thành từng mảng nổi lên trên mặt nước là do:",
                  "options": [
                        "Sự đông tụ của protein khi bị đun nóng (biến tính thuận nghịch/bất thuận nghịch).",
                        "Chất béo trong cua bị xà phòng hóa.",
                        "Carbohydrate trong cua bị kết tinh.",
                        "Muối canxi trong vỏ cua bị kết tủa."
                  ],
                  "ans": 0,
                  "explanation": "Dưới tác dụng của nhiệt độ cao, các liên kết hydro và tương tác yếu duy trì cấu trúc không gian của protein trong thịt cua bị phá vỡ, chuỗi polypeptide duỗi xoắn và liên kết lại với nhau tạo mảng kết tủa xốp nổi lên (sự đông tụ protein)."
            },
            {
                  "q": "Số lượng liên kết peptide có trong một phân tử pentapeptide mạch hở là:",
                  "options": [
                        "4 liên kết peptide.",
                        "5 liên kết peptide.",
                        "3 liên kết peptide.",
                        "6 liên kết peptide."
                  ],
                  "ans": 0,
                  "explanation": "Một n-peptide mạch hở được tạo nên từ n gốc α-amino acid liên kết với nhau bằng (n - 1) liên kết peptide. Pentapeptide có n = 5 nên có 5 - 1 = 4 liên kết peptide."
            },
            {
                  "q": "Thủy phân hoàn toàn 1 mol tetrapeptide Gly-Ala-Val-Phe bằng dung dịch HCl dư thu được sản phẩm gồm:",
                  "options": [
                        "1 mol Gly, 1 mol Ala, 1 mol Val và 1 mol Phe (dưới dạng muối chloride).",
                        "2 mol Gly và 2 mol Ala.",
                        "4 mol Glycine.",
                        "Hỗn hợp khí nitrogen và carbon dioxide."
                  ],
                  "ans": 0,
                  "explanation": "Thủy phân hoàn toàn bẻ gãy tất cả các liên kết peptide, giải phóng đầy đủ các α-amino acid thành phần tương ứng với tỉ lệ mol 1:1:1:1."
            }
      ]
},
    'hoahoc12-b12': {
      "subject": "chemistry",
      "simType": "polymer",
      "simOptions": {
            "mode": "polymerization"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 12",
      "title": "Đại Cương Về Polymer: Trùng Hợp & Trùng Ngưng",
      "guide": "Phân biệt phản ứng trùng hợp (từ monome có liên kết đôi) và phản ứng trùng ngưng (từ monome có ít nhất 2 nhóm chức, giải phóng phân tử nhỏ H₂O).",
      "questions": [
            {
                  "q": "Điều kiện cần về mặt cấu tạo của monomer để có thể tham gia phản ứng trùng hợp là:",
                  "options": [
                        "Phân tử phải chứa liên kết đôi C=C (hoặc vòng kém bền có thể mở vòng).",
                        "Phân tử phải có ít nhất hai nhóm chức có khả năng phản ứng với nhau.",
                        "Phân tử phải chứa nguyên tử kim loại kiềm.",
                        "Phân tử phải có khối lượng phân tử rất lớn."
                  ],
                  "ans": 0,
                  "explanation": "Phản ứng trùng hợp là quá trình kết hợp nhiều phân tử nhỏ giống nhau hoặc tương tự nhau thành phân tử lớn mà không giải phóng phân tử nhỏ khác, đòi hỏi monome phải có liên kết bội (như CH₂=CH₂) hoặc vòng kém bền."
            },
            {
                  "q": "Phản ứng tổng hợp tơ nylon-6,6 từ hexamethylenediamine và adipic acid thuộc loại phản ứng nào?",
                  "options": [
                        "Phản ứng trùng ngưng (đồng trùng ngưng) giải phóng phân tử nước H₂O.",
                        "Phản ứng trùng hợp mạch hở.",
                        "Phản ứng thủy phân trong môi trường kiềm.",
                        "Phản ứng ester hóa Fischer."
                  ],
                  "ans": 0,
                  "explanation": "n H₂N-(CH₂)₆-NH₂ + n HOOC-(CH₂)₄-COOH -(t°, p, xt)-> [-NH-(CH₂)₆-NH-CO-(CH₂)₄-CO-]n + 2n H₂O. Do có giải phóng các phân tử nhỏ H₂O nên đây là phản ứng trùng ngưng."
            },
            {
                  "q": "Polymer nào sau đây có cấu trúc mạng lưới không gian ba chiều?",
                  "options": [
                        "Cao su lưu hóa và nhựa bakelite (nhựa rezit).",
                        "Polyethylene (PE) và Poly(vinyl chloride) (PVC).",
                        "Amylopectin của tinh bột.",
                        "Cellulose."
                  ],
                  "ans": 0,
                  "explanation": "PE, PVC có mạch không phân nhánh; amylopectin và glycogen có mạch phân nhánh; cao su lưu hóa (có cầu nối disulfide -S-S-) và nhựa bakelite (rezit) có cấu trúc mạng không gian 3 chiều."
            }
      ]
},
    'hoahoc12-b13': {
      "subject": "chemistry",
      "simType": "polymer-materials",
      "simOptions": {
            "mode": "elastomer-vulcanization"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 13",
      "title": "Vật Liệu Polymer: Chất Dẻo, Tơ, Cao Su & Composite",
      "guide": "Kéo thanh trượt lực đàn hồi để kiểm chứng tính chất co giãn của cao su lưu hóa có cầu nối disulfide; phân biệt tơ thiên nhiên và tơ tổng hợp.",
      "questions": [
            {
                  "q": "Bản chất của quá trình lưu hóa cao su thiên nhiên bằng bột sulfur (lưu huỳnh) là:",
                  "options": [
                        "Tạo ra các cầu nối disulfide (-S-S-) liên kết các mạch polyisoprene thành mạng lưới không gian ba chiều đàn hồi.",
                        "Làm đứt gãy các mạch polymer thành các phân tử nhỏ hơn.",
                        "Oxi hóa hoàn toàn cao su thành SO₂.",
                        "Biến cao su từ nhiệt dẻo thành chất lỏng linh động."
                  ],
                  "ans": 0,
                  "explanation": "Ở nhiệt độ cao, sulfur tạo cầu nối -S-S- nối các mạch polymer lại với nhau thành mạng lưới 3D, ngăn các mạch trượt lên nhau khi bị kéo dãn, giúp cao su lưu hóa có độ bền cơ học, độ đàn hồi và chịu nhiệt vượt trội."
            },
            {
                  "q": "Tơ nào sau đây thuộc loại tơ bán tổng hợp (tơ nhân tạo)?",
                  "options": [
                        "Tơ visco và tơ cellulose acetate.",
                        "Tơ tằm và len lông cừu.",
                        "Tơ nylon-6,6 và tơ olon (nitron).",
                        "Sợi bông thiên nhiên."
                  ],
                  "ans": 0,
                  "explanation": "Tơ visco và tơ acetate được chế biến bằng con đường hóa học từ polymer thiên nhiên (cellulose) nên được xếp vào nhóm tơ bán tổng hợp (tơ nhân tạo)."
            },
            {
                  "q": "Vật liệu composite gồm có hai thành phần chính nào?",
                  "options": [
                        "Pha nền (chất kết dính liên tục, thường là nhựa polymer) và pha phân tán (vật liệu gia cường như sợi thủy tinh, sợi carbon).",
                        "Kim loại đồng và kim loại kẽm.",
                        "Xà phòng và chất giặt rửa tổng hợp.",
                        "Dung môi nước và muối ăn."
                  ],
                  "ans": 0,
                  "explanation": "Vật liệu composite kết hợp pha nền (giữ vai trò liên kết, truyền lực) và pha gia cường (tăng độ bền kéo, chịu lực, chịu nhiệt), tạo ra vật liệu mới nhẹ và bền hơn từng thành phần riêng lẻ."
            }
      ]
},
    'hoahoc12-b14': {
      "subject": "chemistry",
      "simType": "recycling",
      "simOptions": {
            "mode": "composite-recycling"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 14",
      "title": "Ôn Tập Chương 4: Tái Chế Nhựa & Bảo Vệ Môi Trường",
      "guide": "Tìm hiểu 7 mã nhận diện nhựa (SPI resin codes), cơ chế phân loại tại nguồn và các giải pháp tái chế cơ học, hóa học bảo vệ môi trường.",
      "questions": [
            {
                  "q": "Biểu tượng hình tam giác có số 1 bên trong (♳ PETE) dưới đáy chai nước ngọt dùng để chỉ loại nhựa nào?",
                  "options": [
                        "Poly(ethylene terephthalate) – loại nhựa rất phổ biến, dễ tái chế làm sợi dệt hoặc chai mới.",
                        "Poly(vinyl chloride) (PVC).",
                        "Polystyrene (PS).",
                        "Polypropylene (PP)."
                  ],
                  "ans": 0,
                  "explanation": "Mã số 1 (PET hay PETE) là Poly(ethylene terephthalate), dùng làm chai nước tinh khiết, nước giải khát có ga, là loại nhựa tái chế phổ biến nhất thế giới."
            },
            {
                  "q": "Khi đốt rác thải nhựa chứa PVC (Poly(vinyl chloride)) không đúng quy trình xử lí, khí độc nào sinh ra gây nguy cơ mưa acid và hủy hoại đường hô hấp?",
                  "options": [
                        "Khí hydrogen chloride (HCl) và độc chất dioxin.",
                        "Khí ammonia (NH₃).",
                        "Khí methane (CH₄).",
                        "Khí oxygen (O₂)."
                  ],
                  "ans": 0,
                  "explanation": "PVC chứa nguyên tử chlorine (-CH₂-CHCl-)n. Khi bị đốt cháy sinh ra khí HCl độc hại kết hợp hơi nước tạo acid hydrochloric gây mưa acid và sinh các hợp chất clo hữu cơ cực độc như dioxin."
            },
            {
                  "q": "Tơ nitron (hay tơ olon) được tổng hợp bằng phản ứng trùng hợp monomer nào sau đây?",
                  "options": [
                        "Acrylonitrile (CH₂=CH-CN hay vinyl cyanide).",
                        "Vinyl chloride (CH₂=CH-Cl).",
                        "Styrene (C₆H₅-CH=CH₂).",
                        "Caprolactam."
                  ],
                  "ans": 0,
                  "explanation": "n CH₂=CH-CN -(t°, p, xt)-> (-CH₂-CH(CN)-)n (tơ nitron / olon), dùng để dệt vải may áo ấm, bện sợi len nhân tạo do giữ nhiệt rất tốt."
            }
      ]
},
    'hoahoc12-b15': {
      "subject": "chemistry",
      "simType": "galvanic-cell",
      "simOptions": {
            "mode": "galvanic-cell"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 15",
      "title": "Pin Điện Hóa Zn – Cu (Daniell) & Thế Điện Cực Chuẩn",
      "guide": "Theo dõi dòng electron di chuyển từ thanh kẽm Zn qua vôn kế sang thanh đồng Cu, quan sát kim vôn kế chỉ đúng 1,10 V và vai trò cầu muối.",
      "questions": [
            {
                  "q": "Trong pin điện hóa Galvani Zn – Cu (pin Daniell), tại điện cực kẽm (anode) và điện cực đồng (cathode) xảy ra các quá trình tương ứng là:",
                  "options": [
                        "Anode (cực âm): Zn → Zn²⁺ + 2e (quá trình oxi hóa); Cathode (cực dương): Cu²⁺ + 2e → Cu (quá trình khử).",
                        "Anode (cực dương): Cu → Cu²⁺ + 2e; Cathode (cực âm): Zn²⁺ + 2e → Zn.",
                        "Cả hai cực đều xảy ra quá trình oxi hóa.",
                        "Cả hai cực đều xảy ra quá trình khử."
                  ],
                  "ans": 0,
                  "explanation": "Trong pin điện, cực âm (anode) là nơi chất khử mạnh hơn bị oxi hóa: Zn -> Zn²⁺ + 2e. Cực dương (cathode) là nơi ion kim loại có tính oxi hóa mạnh hơn bị khử: Cu²⁺ + 2e -> Cu."
            },
            {
                  "q": "Biết E°(Zn²⁺/Zn) = -0,76 V và E°(Cu²⁺/Cu) = +0,34 V. Sức điện động chuẩn của pin điện hóa Zn – Cu là:",
                  "options": [
                        "E°pin = E°cathode - E°anode = 0,34 - (-0,76) = 1,10 V.",
                        "E°pin = 0,34 + (-0,76) = -0,42 V.",
                        "E°pin = -0,76 - 0,34 = -1,10 V.",
                        "E°pin = 0,34 V."
                  ],
                  "ans": 0,
                  "explanation": "Sức điện động chuẩn của pin luôn dương: E°pin = E°(+) - E°(-) = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = 0,34 - (-0,76) = 1,10 V."
            },
            {
                  "q": "Trong pin điện hóa, cầu muối (chứa dung dịch chất điện li trơ như KCl hay KNO₃) có vai trò thiết yếu nào?",
                  "options": [
                        "Khép kín mạch điện và trung hòa điện tích dung dịch ở hai nửa pin nhờ sự di chuyển của các ion.",
                        "Tạo ra dòng electron chạy trực tiếp qua cầu muối.",
                        "Làm tăng nồng độ ion kim loại ở cả hai cốc.",
                        "Ngăn không cho dung dịch ở hai cốc bay hơi."
                  ],
                  "ans": 0,
                  "explanation": "Khi pin hoạt động, ion Zn²⁺ sinh ra làm cốc anode thừa điện tích dương, cation Cu²⁺ mất đi làm cốc cathode thừa điện tích âm. Các ion K⁺ và Cl⁻ trong cầu muối di chuyển tương ứng để trung hòa điện tích và khép kín mạch."
            }
      ]
},
    'hoahoc12-b16': {
      "subject": "chemistry",
      "simType": "electrolysis",
      "simOptions": {
            "mode": "electrolysis"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 16",
      "title": "Điện Phân Dung Dịch, Nóng Chảy & Định Luật Faraday",
      "guide": "Kéo thanh trượt cường độ dòng điện I và thời gian t để tính toán khối lượng kim loại giải phóng tại cathode theo công thức m = AIt / (nF).",
      "questions": [
            {
                  "q": "Điện phân dung dịch CuSO₄ với hai điện cực trơ (platinum hoặc than chì), tại cực âm (cathode) và cực dương (anode) lần lượt thu được:",
                  "options": [
                        "Cathode (-) thu được kim loại Cu bám vào; Anode (+) thu được khí oxygen (O₂).",
                        "Cathode (-) thu được khí H₂; Anode (+) thu được khí Cl₂.",
                        "Cathode (-) thu được khí O₂; Anode (+) thu được kim loại Cu.",
                        "Cả hai cực đều thoát ra khí hydrogen."
                  ],
                  "ans": 0,
                  "explanation": "Tại cathode (-): ion Cu²⁺ có tính oxi hóa mạnh hơn H₂O nên bị khử trước: Cu²⁺ + 2e -> Cu↓. Tại anode (+): H₂O bị oxi hóa tạo khí O₂: 2H₂O -> O₂↑ + 4H⁺ + 4e. Phương trình: 2CuSO₄ + 2H₂O -(đpdd)-> 2Cu + O₂↑ + 2H₂SO₄."
            },
            {
                  "q": "Để mạ một lớp bạc (Ag) mỏng lên một chiếc thìa sắt, cách mắc nào sau đây là chính xác?",
                  "options": [
                        "Nối chiếc thìa sắt vào cực âm (cathode), dùng thanh bạc tinh khiết làm cực dương (anode), nhúng trong dung dịch AgNO₃.",
                        "Nối chiếc thìa sắt vào cực dương (anode), thanh bạc vào cực âm (cathode).",
                        "Dùng hai thanh sắt làm điện cực trong dung dịch NaCl.",
                        "Nối thìa sắt với nguồn điện xoay chiều 220V."
                  ],
                  "ans": 0,
                  "explanation": "Nguyên tắc mạ điện: Vật cần mạ luôn gắn vào cực âm (cathode) để ion kim loại mạ di chuyển đến và bị khử bám đều lên bề mặt (Ag⁺ + 1e -> Ag). Kim loại mạ làm anode tan để bổ sung ion liên tục vào dung dịch."
            },
            {
                  "q": "Điện phân dung dịch CuSO₄ với cường độ dòng điện I = 2,0 A trong thời gian t = 1930 giây. Biết khối lượng mol của Cu = 64 g/mol và hằng số Faraday F = 96500 C/mol. Khối lượng Cu bám vào cathode là:",
                  "options": [
                        "1,28 gam.",
                        "2,56 gam.",
                        "0,64 gam.",
                        "6,40 gam."
                  ],
                  "ans": 0,
                  "explanation": "Áp dụng định luật Faraday: m = (A · I · t) / (n · F) = (64 · 2,0 · 1930) / (2 · 96500) = 247040 / 193000 = 1,28 gam."
            }
      ]
},
    'hoahoc12-b17': {
      "subject": "chemistry",
      "simType": "electrochemistry",
      "simOptions": {
            "mode": "faraday-calculator"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 17",
      "title": "Ôn Tập Chương 5: Pin Điện Hóa & Ứng Dụng Điện Phân",
      "guide": "So sánh sự khác biệt cơ bản giữa bình pin điện hóa (phản ứng hóa học sinh ra dòng điện) và bình điện phân (dùng dòng điện cưỡng bức phản ứng).",
      "questions": [
            {
                  "q": "Điểm khác biệt cơ bản về dấu của các điện cực giữa pin điện hóa và bình điện phân là:",
                  "options": [
                        "Trong pin điện hóa: Anode là cực âm (-), Cathode là cực dương (+). Trong bình điện phân: Anode nối cực dương (+), Cathode nối cực âm (-).",
                        "Trong cả hai hệ, Anode luôn là cực dương và Cathode luôn là cực âm.",
                        "Trong cả hai hệ, Anode luôn là cực âm và Cathode luôn là cực dương.",
                        "Dấu điện cực thay đổi liên tục theo tần số dòng điện."
                  ],
                  "ans": 0,
                  "explanation": "Quy tắc bất biến: Anode luôn là nơi xảy ra quá trình oxi hóa, Cathode luôn là nơi xảy ra quá trình khử. Nhưng về dấu: Pin tự sinh điện tích nên Anode là cực âm (-); Bình điện phân nhận nguồn ngoài nên Anode nối cực dương (+) của nguồn."
            },
            {
                  "q": "Để sản xuất kim loại nhôm (Al) trong công nghiệp, người ta tiến hành điện phân nóng chảy hợp chất nào?",
                  "options": [
                        "Al₂O₃ nóng chảy hòa tan trong criolit (Na₃AlF₆) ở khoảng 950 °C.",
                        "Dung dịch muối AlCl₃ trong nước.",
                        "AlCl₃ nóng chảy ở nhiệt độ cao.",
                        "Al(OH)₃ kết tủa."
                  ],
                  "ans": 0,
                  "explanation": "AlCl₃ là hợp chất cộng hóa trị thăng hoa khi đun nóng; dung dịch muối Al thì H₂O bị khử trước sinh H₂. Vì vậy bắt buộc phải điện phân Al₂O₃ nóng chảy trong criolit Na₃AlF₆ để hạ nhiệt độ nóng chảy từ 2050 °C xuống 950 °C và tăng tính dẫn điện."
            },
            {
                  "q": "Một acquy chì (lead-acid battery) khi phóng điện, phản ứng tổng quát diễn ra là:",
                  "options": [
                        "Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O (nồng độ dung dịch H₂SO₄ giảm dần).",
                        "2H₂O → 2H₂ + O₂.",
                        "PbSO₄ → Pb + PbO₂ + H₂SO₄.",
                        "Pb + O₂ → PbO₂."
                  ],
                  "ans": 0,
                  "explanation": "Khi acquy phóng điện: Pb (cực âm) và PbO₂ (cực dương) cùng phản ứng với dung dịch H₂SO₄ tạo thành kết tủa PbSO₄ bám vào hai bản cực và nước H₂O, làm khối lượng riêng của dung dịch acid giảm dần."
            }
      ]
},
    'hoahoc12-b18': {
      "subject": "chemistry",
      "simType": "metal-crystal",
      "simOptions": {
            "mode": "metal-crystal"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 18",
      "title": "Cấu Tạo & Liên Kết Trong Tinh Thể Kim Loại",
      "guide": "Kéo chuột xoay mô hình 3D của 3 kiểu mạng tinh thể kim loại (BCC lập phương tâm khối, FCC lập phương tâm diện, HCP lục phương).",
      "questions": [
            {
                  "q": "Các tính chất vật lí chung của kim loại (tính dẻo, tính dẫn điện, tính dẫn nhiệt và ánh kim) chủ yếu do thành phần nào gây nên?",
                  "options": [
                        "Sự có mặt của các electron tự do chuyển động hỗn loạn trong toàn bộ mạng tinh thể kim loại.",
                        "Khối lượng riêng lớn của các cation kim loại.",
                        "Các liên kết cộng hóa trị định hướng chặt chẽ.",
                        "Điện tích hạt nhân rất lớn của nguyên tử kim loại."
                  ],
                  "ans": 0,
                  "explanation": "Mô hình liên kết kim loại: các cation kim loại dao động quanh nút mạng và các electron tự do di chuyển tự do trong toàn bộ tinh thể (\"khí electron\"). Khí electron này chịu trách nhiệm cho 4 tính chất vật lí chung: dẻo, dẫn điện, dẫn nhiệt và ánh kim."
            },
            {
                  "q": "Kim loại nào sau đây có độ dẫn điện và dẫn nhiệt tốt nhất ở điều kiện thường?",
                  "options": [
                        "Bạc (Ag) (tiếp theo là Cu, Au, Al, Fe).",
                        "Đồng (Cu).",
                        "Vàng (Au).",
                        "Nhôm (Al)."
                  ],
                  "ans": 0,
                  "explanation": "Thứ tự dẫn điện và dẫn nhiệt giảm dần của các kim loại thông dụng: Ag > Cu > Au > Al > Fe. Bạc có độ dẫn điện tốt nhất nhưng đắt tiền nên đồng và nhôm được dùng phổ biến làm dây tải điện."
            },
            {
                  "q": "Mạng tinh thể lập phương tâm khối (BCC) có độ đặc khít xấp xỉ bằng bao nhiêu và là kiểu mạng của những kim loại nào?",
                  "options": [
                        "Độ đặc khít 68%, gồm các kim loại kiềm (Li, Na, K), Ba, Fe(α), Cr.",
                        "Độ đặc khít 74%, gồm Cu, Ag, Au, Al.",
                        "Độ đặc khít 52%, gồm chì và thiếc.",
                        "Độ đặc khít 90%, gồm kim cương và than chì."
                  ],
                  "ans": 0,
                  "explanation": "Mạng lập phương tâm khối (BCC) có độ đặc khít 68% (nguyên tử ở 8 đỉnh và 1 nguyên tử ở chính giữa tâm khối). Các kim loại kiềm nhóm IA, Fe(α), Cr kết tinh theo kiểu mạng này."
            }
      ]
},
    'hoahoc12-b19': {
      "subject": "chemistry",
      "simType": "metals",
      "simOptions": {
            "mode": "displacement-series"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 19",
      "title": "Tính Chất Hóa Học Của Kim Loại & Dãy Điện Hóa",
      "guide": "Thao tác thí nghiệm nhúng thanh kim loại vào dung dịch muối; áp dụng quy tắc α để dự đoán phản ứng xảy ra giữa hai cặp oxi hóa – khử.",
      "questions": [
            {
                  "q": "Cho một đinh sắt (Fe) sạch vào dung dịch CuSO₄ màu xanh lam. Sau một thời gian, hiện tượng quan sát được là:",
                  "options": [
                        "Có lớp kim loại màu đỏ gạch (Cu) bám ngoài đinh sắt, màu xanh lam của dung dịch nhạt dần.",
                        "Đinh sắt tan hoàn toàn và sủi bọt khí không màu mãnh liệt.",
                        "Dung dịch chuyển sang màu đỏ máu và có kết tủa trắng.",
                        "Không có hiện tượng gì vì sắt trơ với muối đồng."
                  ],
                  "ans": 0,
                  "explanation": "Phương trình phản ứng: Fe + CuSO₄ -> FeSO₄ + Cu↓. Sắt có tính khử mạnh hơn đồng nên khử Cu²⁺ thành Cu màu đỏ bám vào bề mặt đinh sắt; nồng độ Cu²⁺ giảm làm màu xanh lam của dung dịch nhạt dần."
            },
            {
                  "q": "Theo quy tắc alpha (α) trong dãy điện hóa, phản ứng giữa hai cặp oxi hóa – khử xảy ra theo chiều nào?",
                  "options": [
                        "Chất oxi hóa mạnh hơn tác dụng với chất khử mạnh hơn sinh ra chất oxi hóa yếu hơn và chất khử yếu hơn.",
                        "Chất oxi hóa yếu tác dụng với chất khử yếu sinh ra chất oxi hóa mạnh và chất khử mạnh.",
                        "Chỉ diễn ra theo một chiều không phụ thuộc vào thế điện cực chuẩn.",
                        "Kim loại đứng sau đẩy kim loại đứng trước ra khỏi muối."
                  ],
                  "ans": 0,
                  "explanation": "Quy tắc α: Chất oxi hóa có E° lớn hơn (mạnh hơn) phản ứng với chất khử có E° nhỏ hơn (mạnh hơn) tạo thành dạng khử của cặp có E° lớn hơn (khử yếu hơn) và dạng oxi hóa của cặp có E° nhỏ hơn (oxi hóa yếu hơn)."
            },
            {
                  "q": "Kim loại nào sau đây phản ứng mãnh liệt với nước ngay ở điều kiện thường tạo thành dung dịch kiềm và giải phóng khí H₂?",
                  "options": [
                        "Sodium (Na) và Potassium (K).",
                        "Sắt (Fe) và Đồng (Cu).",
                        "Nhôm (Al) và Bạc (Ag).",
                        "Chì (Pb) và Thủy ngân (Hg)."
                  ],
                  "ans": 0,
                  "explanation": "Các kim loại kiềm (nhóm IA: Li, Na, K, Rb, Cs) và một số kim loại kiềm thổ (Ca, Sr, Ba) có thế điện cực chuẩn rất âm, khử nước mãnh liệt ở ngay nhiệt độ thường: 2Na + 2H₂O -> 2NaOH + H₂↑."
            }
      ]
},
    'hoahoc12-b20': {
      "subject": "chemistry",
      "simType": "metals",
      "simOptions": {
            "mode": "displacement-series"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 20",
      "title": "Kim Loại Trong Tự Nhiên & Phương Pháp Tách Kim Loại",
      "guide": "Phân tích 3 phương pháp điều chế kim loại chính: Nhiệt luyện (khử bằng CO, C, H₂), Thủy luyện (dùng kim loại mạnh đẩy) và Điện phân (nóng chảy / dung dịch).",
      "questions": [
            {
                  "q": "Phương pháp nhiệt luyện thường được dùng trong công nghiệp luyện kim để điều chế nhóm kim loại nào?",
                  "options": [
                        "Các kim loại có độ hoạt động trung bình và yếu (đứng sau Al trong dãy hoạt động như Fe, Zn, Cu, Pb).",
                        "Các kim loại kiềm và kiềm thổ (Na, K, Ca, Mg).",
                        "Kim loại nhôm (Al).",
                        "Tất cả các kim loại có trong bảng tuần hoàn."
                  ],
                  "ans": 0,
                  "explanation": "Nhiệt luyện dùng các chất khử mạnh như C, CO, H₂ hoặc Al để khử oxide kim loại ở nhiệt độ cao (ví dụ trong lò cao luyện gang: Fe₂O₃ + 3CO -(t°)-> 2Fe + 3CO₂). Phương pháp này chỉ áp dụng cho kim loại sau Al; kim loại trước Al có liên kết M-O quá bền."
            },
            {
                  "q": "Để tách lấy kim loại vàng (Au) từ quặng vàng tự nhiên hạt mịn, phương pháp thủy luyện hiện đại dùng dung dịch chất nào để hòa tan vàng?",
                  "options": [
                        "Dung dịch sodium cyanide (NaCN) sục khí oxygen tạo phức tan [Au(CN)₂]⁻, sau đó dùng bụi kẽm (Zn) để khử thu vàng.",
                        "Dung dịch acid sulfuric loãng.",
                        "Dung dịch nước vôi trong Ca(OH)₂.",
                        "Dung dịch muối ăn NaCl."
                  ],
                  "ans": 0,
                  "explanation": "Quy trình xyanua hóa (cyanidation): 4Au + 8NaCN + O₂ + 2H₂O -> 4Na[Au(CN)₂] + 4NaOH. Sau đó dùng bụi Zn kết tủa vàng: Zn + 2[Au(CN)₂]⁻ -> [Zn(CN)₄]²⁻ + 2Au↓."
            },
            {
                  "q": "Kim loại magnesium (Mg) được sản xuất chủ yếu trong công nghiệp bằng phương pháp nào?",
                  "options": [
                        "Điện phân muối magnesium chloride (MgCl₂) nóng chảy.",
                        "Khử MgO bằng khí CO ở nhiệt độ cao.",
                        "Điện phân dung dịch MgSO₄ trong nước.",
                        "Cho kim loại Fe đẩy Mg ra khỏi muối."
                  ],
                  "ans": 0,
                  "explanation": "Magnesium có tính khử rất mạnh (đứng trước Al), không thể khử bằng CO/H₂ và không thể điện phân dung dịch nước (H₂O bị khử trước sinh H₂). Bắt buộc phải điện phân nóng chảy muối MgCl₂: MgCl₂ -(đpnc)-> Mg + Cl₂↑."
            }
      ]
},
    'hoahoc12-b21': {
      "subject": "chemistry",
      "simType": "metals",
      "simOptions": {
            "mode": "metal-crystal"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 21",
      "title": "Hợp Kim & Tính Chất Của Hợp Kim",
      "guide": "Khảo sát cấu trúc mạng tinh thể dung dịch rắn thay thế / xen kẽ; so sánh độ cứng, độ bền cơ học và nhiệt độ nóng chảy của hợp kim với kim loại cơ sở.",
      "questions": [
            {
                  "q": "So với các kim loại thành phần nguyên chất, hợp kim thường có đặc điểm tính chất nào sau đây?",
                  "options": [
                        "Độ cứng và độ bền cơ học cao hơn, nhiệt độ nóng chảy thường thấp hơn, độ dẫn điện và dẫn nhiệt thường kém hơn.",
                        "Luôn dẫn điện và dẫn nhiệt tốt hơn kim loại nguyên chất.",
                        "Có nhiệt độ nóng chảy cao hơn các kim loại thành phần.",
                        "Độ dẻo tăng lên và rất dễ biến dạng khi uốn cong."
                  ],
                  "ans": 0,
                  "explanation": "Sự có mặt của các nguyên tử khác kích thước trong mạng tinh thể hợp kim làm xáo trộn tính tuần hoàn của mạng, cản trở sự trượt của các lớp tinh thể lên nhau (tăng độ cứng) và làm tăng sự tán xạ của electron dẫn (giảm độ dẫn điện, nhiệt)."
            },
            {
                  "q": "Thép không gỉ (Inox 304) là hợp kim của sắt (Fe) với các nguyên tố kim loại chủ yếu nào giúp tạo màng oxide bảo vệ chống ăn mòn tuyệt vời?",
                  "options": [
                        "Chromium (Cr) và Nickel (Ni).",
                        "Đồng (Cu) và Kẽm (Zn).",
                        "Chì (Pb) và Thiếc (Sn).",
                        "Nhôm (Al) và Magie (Mg)."
                  ],
                  "ans": 0,
                  "explanation": "Thép không gỉ chứa khoảng 18% Cr và 8% Ni. Chromium tạo ra một lớp màng oxide Cr₂O₃ cực mỏng, vô định hình, tự chữa lành và bám dính rất chắc trên bề mặt, ngăn chặn hoàn toàn sự oxi hóa của sắt."
            },
            {
                  "q": "Đồng thau (brass) là hợp kim được ứng dụng rộng rãi trong chế tạo nhạc cụ và đồ trang trí, thành phần gồm hai kim loại nào?",
                  "options": [
                        "Đồng (Cu) và Kẽm (Zn).",
                        "Đồng (Cu) và Thiếc (Sn).",
                        "Đồng (Cu) và Nhôm (Al).",
                        "Đồng (Cu) và Chì (Pb)."
                  ],
                  "ans": 0,
                  "explanation": "Đồng thau là hợp kim của Cu và Zn (màu vàng sáng giống vàng). Còn hợp kim của Cu với Sn (thiếc) được gọi là đồng thanh (bronze)."
            }
      ]
},
    'hoahoc12-b22': {
      "subject": "chemistry",
      "simType": "metals",
      "simOptions": {
            "mode": "corrosion-protection"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 22",
      "title": "Sự Ăn Mòn Kim Loại & Phương Pháp Bảo Vệ",
      "guide": "Mô phỏng ăn mòn điện hóa giọt nước biển trên tấm thép; phân tích cơ chế bảo vệ điện hóa gắn khối kẽm (vật hi sinh) bảo vệ vỏ tàu biển.",
      "questions": [
            {
                  "q": "Để xảy ra sự ăn mòn điện hóa học kim loại, cần đồng thời thỏa mãn đủ 3 điều kiện nào sau đây?",
                  "options": [
                        "Hai điện cực khác chất; hai điện cực tiếp xúc trực tiếp hoặc gián tiếp; hai điện cực cùng tiếp xúc với dung dịch chất điện li.",
                        "Chỉ cần kim loại tiếp xúc với không khí khô.",
                        "Kim loại phải được nung nóng trên 500 °C.",
                        "Phải có dòng điện bên ngoài cấp vào liên tục."
                  ],
                  "ans": 0,
                  "explanation": "Ăn mòn điện hóa là quá trình phá hủy kim loại do phát sinh dòng điện tế vi, đòi hỏi đủ 3 điều kiện: (1) 2 điện cực khác bản chất (kim loại - kim loại hoặc kim loại - phi kim như Fe-C); (2) tiếp xúc điện; (3) cùng nhúng trong dung dịch điện li."
            },
            {
                  "q": "Để bảo vệ vỏ tàu thủy bằng thép (Fe) ngâm trong nước biển, người ta thường gắn các khối kim loại nào vào đuôi tàu và chân vịt?",
                  "options": [
                        "Khối Kẽm (Zn) – phương pháp bảo vệ bằng điện cực hi sinh.",
                        "Khối Đồng (Cu).",
                        "Khối Chì (Pb).",
                        "Khối Vàng (Au)."
                  ],
                  "ans": 0,
                  "explanation": "Kẽm có tính khử mạnh hơn sắt (E° Zn²⁺/Zn = -0,76 V < E° Fe²⁺/Fe = -0,44 V). Khi gắn với vỏ tàu trong nước biển, kẽm đóng vai trò anode bị ăn mòn trước (Zn -> Zn²⁺ + 2e), còn thép đóng vai trò cathode được bảo vệ an toàn."
            },
            {
                  "q": "Trong hiện tượng ăn mòn điện hóa của một mẩu gang (hợp kim Fe - C) trong không khí ẩm, quá trình xảy ra tại cực âm (anode) là:",
                  "options": [
                        "Fe → Fe²⁺ + 2e (Sắt bị oxi hóa thành ion tan vào dung dịch màng ẩm).",
                        "O₂ + 2H₂O + 4e → 4OH⁻.",
                        "C → C⁴⁺ + 4e.",
                        "2H⁺ + 2e → H₂."
                  ],
                  "ans": 0,
                  "explanation": "Fe có tính khử mạnh hơn carbon nên đóng vai trò là cực âm (anode) và bị oxi hóa: Fe -> Fe²⁺ + 2e. Carbon đóng vai trò cathode hút electron, tại đó O₂ hòa tan trong giọt ẩm nhận e: O₂ + 2H₂O + 4e -> 4OH⁻. Sau đó tạo gỉ sắt Fe₂O₃·xH₂O."
            }
      ]
},
    'hoahoc12-b23': {
      "subject": "chemistry",
      "simType": "metals",
      "simOptions": {
            "mode": "corrosion-protection"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 23",
      "title": "Ôn Tập Chương 6: Đại Cương Về Kim Loại",
      "guide": "Hệ thống hóa toàn diện vị trí, cấu tạo nguyên tử, tính chất vật lí, tính chất hóa học và các phương pháp bảo vệ kim loại chống ăn mòn.",
      "questions": [
            {
                  "q": "Kim loại nào sau đây có nhiệt độ nóng chảy cao nhất (dùng làm dây tóc bóng đèn sợi đốt) và kim loại nào có nhiệt độ nóng chảy thấp nhất (chất lỏng ở nhiệt độ thường)?",
                  "options": [
                        "Cao nhất là Tungsten (Vonfram, W: 3422 °C); Thấp nhất là Thủy ngân (Hg: -38,8 °C).",
                        "Cao nhất là Sắt (Fe); Thấp nhất là Chì (Pb).",
                        "Cao nhất là Vàng (Au); Thấp nhất là Kẽm (Zn).",
                        "Cao nhất là Chromium (Cr); Thấp nhất là Gallium (Ga)."
                  ],
                  "ans": 0,
                  "explanation": "Wolfram (W) có liên kết kim loại cực bền với nhiệt độ nóng chảy cao nhất trong các kim loại (3422 °C). Thủy ngân (Hg) có liên kết kim loại yếu nhất và là kim loại duy nhất ở thể lỏng ở nhiệt độ phòng (nóng chảy ở -38,8 °C)."
            },
            {
                  "q": "Kim loại nào cứng nhất có thể rạch được thủy tinh (độ cứng bằng 8,5 trên thang Mohs)?",
                  "options": [
                        "Chromium (Cr).",
                        "Kim cương (C).",
                        "Tungsten (W).",
                        "Titanium (Ti)."
                  ],
                  "ans": 0,
                  "explanation": "Chromium (Cr) là kim loại cứng nhất trong tất cả các kim loại (độ cứng xấp xỉ 8,5/10), có thể cắt rạch được kính thủy tinh. (Kim cương cứng nhất nhưng là phi kim carbon)."
            },
            {
                  "q": "Ngâm một lá kẽm (Zn) có khối lượng 10,0 gam vào 100 mL dung dịch CuSO₄ 1,0 M. Sau khi phản ứng hoàn toàn, khối lượng lá kim loại sau khi sấy khô sẽ biến đổi thế nào?",
                  "options": [
                        "Giảm 0,10 gam (vì 1 mol Zn tan ra 65 g thay thế bằng 1 mol Cu bám vào 64 g, độ giảm 1 g/mol).",
                        "Tăng 1,00 gam.",
                        "Không đổi khối lượng.",
                        "Giảm 6,50 gam."
                  ],
                  "ans": 0,
                  "explanation": "Phương trình: Zn + CuSO₄ -> ZnSO₄ + Cu. Số mol CuSO₄ = 0,1 mol. Khối lượng kim loại thay đổi: Δm = m(Cu bám) - m(Zn tan) = 0,1 · 64 - 0,1 · 65 = 6,4 - 6,5 = -0,1 gam (giảm 0,1 gam)."
            }
      ]
},
    'hoahoc12-b24': {
      "subject": "chemistry",
      "simType": "group-ia",
      "simOptions": {
            "mode": "group-ia-reaction"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 24",
      "title": "Nguyên Tố Nhóm IA (Kim Loại Kiềm)",
      "guide": "Thao tác thả mẩu kim loại Na vào chậu nước có pha phenolphthalein; thử màu ngọn lửa đặc trưng của các muối kim loại kiềm (Li, Na, K).",
      "questions": [
            {
                  "q": "Màu ngọn lửa đặc trưng khi đốt các hợp chất của kim loại kiềm Sodium (Na) và Potassium (K) trên ngọn lửa đèn khí không màu lần lượt là:",
                  "options": [
                        "Muối Sodium phát màu vàng tươi chói lọi; Muối Potassium phát màu tím nhạt.",
                        "Sodium phát màu đỏ tươi; Potassium phát màu xanh lục.",
                        "Sodium phát màu xanh lam; Potassium phát màu đỏ gạch.",
                        "Cả hai đều phát màu trắng sáng."
                  ],
                  "ans": 0,
                  "explanation": "Thử màu ngọn lửa: Khi đốt nóng, các electron hóa trị nhảy lên mức năng lượng cao rồi quay về mức cơ bản, phát ra bức xạ quang phổ đặc trưng: Li màu đỏ tươi, Na màu vàng tươi, K màu tím (quan sát qua kính coban)."
            },
            {
                  "q": "Để bảo quản an toàn các kim loại kiềm (như Na, K) trong phòng thí nghiệm tránh phản ứng với hơi ẩm và oxygen trong không khí, người ta ngâm chúng trong chất lỏng nào?",
                  "options": [
                        "Dầu hỏa khan (kerosene) tinh khiết.",
                        "Nước cất hai lần.",
                        "Cồn rượu 96°.",
                        "Dung dịch acid sulfuric loãng."
                  ],
                  "ans": 0,
                  "explanation": "Kim loại kiềm phản ứng mãnh liệt với nước và oxygen trong không khí. Dầu hỏa là hỗn hợp hydrocarbon không phản ứng và có khối lượng riêng nhẹ hơn Na/K giúp bao bọc cách ly hoàn toàn kim loại khỏi môi trường."
            },
            {
                  "q": "Các kim loại kiềm có khối lượng riêng nhỏ, nhiệt độ nóng chảy thấp và độ cứng rất mềm (có thể dùng dao cắt dễ dàng) là do nguyên nhân nào?",
                  "options": [
                        "Mạng tinh thể lập phương tâm khối rỗng (độ đặc khít chỉ 68%), bán kính nguyên tử lớn và mỗi nguyên tử chỉ đóng góp 1 electron hóa trị vào liên kết kim loại.",
                        "Kim loại kiềm có độ âm điện quá lớn.",
                        "Trong tinh thể có chứa nhiều bọt khí hydro.",
                        "Mạng tinh thể là dạng vô định hình."
                  ],
                  "ans": 0,
                  "explanation": "Nguyên tử kim loại kiềm có cấu hình electron ns¹, bán kính nguyên tử lớn nhất trong chu kì, mạng tinh thể BCC kém khít nên lực liên kết kim loại rất yếu, dẫn đến nhiệt độ nóng chảy thấp và rất mềm."
            }
      ]
},
    'hoahoc12-b25': {
      "subject": "chemistry",
      "simType": "group-iia",
      "simOptions": {
            "mode": "group-iia-solubility"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 25",
      "title": "Nguyên Tố Nhóm IIA (Kim Loại Kiềm Thổ)",
      "guide": "Khảo sát độ tan của muối kiềm thổ; mô phỏng phản ứng xâm thực đá vôi tạo hang động nhũ đá CaCO₃ + CO₂ + H₂O ⇌ Ca(HCO₃)₂.",
      "questions": [
            {
                  "q": "Hiện tượng tạo thành thạch nhũ trong các hang động đá vôi (như vịnh Hạ Long, động Phong Nha) là kết quả của phản ứng hóa học nào?",
                  "options": [
                        "Ca(HCO₃)₂ phân hủy giải phóng khí CO₂ và tái tạo kết tủa: Ca(HCO₃)₂ -(t°)-> CaCO₃↓ + CO₂↑ + H₂O.",
                        "CaCO₃ bị nước biển mài mòn cơ học thuần túy.",
                        "CaSO₄ tác dụng với CO₂ tạo đá vôi.",
                        "Vôi sống CaO hút ẩm trong hang động."
                  ],
                  "ans": 0,
                  "explanation": "Nước mưa hòa tan CO₂ khí quyển chảy qua núi đá vôi hòa tan đá tạo dung dịch Ca(HCO₃)₂ (quá trình xâm thực). Khi dung dịch này rỉ xuống trần hang, nhiệt độ và sự giảm áp suất làm Ca(HCO₃)₂ phân hủy tạo lại kết tủa CaCO₃ lắng đọng hàng triệu năm thành thạch nhũ tuyệt đẹp."
            },
            {
                  "q": "Chất nào sau đây được dùng làm chất cản quang khi chụp X-quang đường tiêu hóa nhờ khả năng hấp thụ tia X mạnh và hoàn toàn không tan, không độc hại?",
                  "options": [
                        "Barium sulfate (BaSO₄).",
                        "Barium chloride (BaCl₂).",
                        "Calcium carbonate (CaCO₃).",
                        "Magnesium sulfate (MgSO₄)."
                  ],
                  "ans": 0,
                  "explanation": "BaSO₄ là chất cản quang lí tưởng vì nguyên tử Ba (Z=56) có mật độ electron lớn hấp thụ tia X cực tốt, đồng thời BaSO₄ có tích số tan cực nhỏ (Ksp ≈ 10⁻¹⁰), không tan trong acid dạ dày nên không giải phóng ion Ba²⁺ độc hại."
            },
            {
                  "q": "Thạch cao nung (dùng để đúc tượng, bó bột khi gãy xương) có công thức hóa học là:",
                  "options": [
                        "CaSO₄·0,5H₂O (hoặc CaSO₄·H₂O).",
                        "CaSO₄·2H₂O (thạch cao sống).",
                        "CaSO₄ khan (thạch cao khan).",
                        "CaCO₃·MgCO₃."
                  ],
                  "ans": 0,
                  "explanation": "Thạch cao sống CaSO₄·2H₂O khi nung ở khoảng 160 °C mất một phần nước tạo thạch cao nung CaSO₄·0,5H₂O. Khi nhào với nước, thạch cao nung nở thể tích và đông cứng nhanh, rất thích hợp đúc tượng và bó bột y tế."
            }
      ]
},
    'hoahoc12-b26': {
      "subject": "chemistry",
      "simType": "hard-water",
      "simOptions": {
            "mode": "hard-water"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 26",
      "title": "Nước Cứng & Phương Pháp Làm Mềm Nước Cứng",
      "guide": "Phân loại nước cứng tạm thời, vĩnh cửu, toàn phần; thực hành làm mềm bằng phương pháp đun sôi, hóa chất (Na₂CO₃) và cột trao đổi ion zeolite.",
      "questions": [
            {
                  "q": "Nước cứng tạm thời là loại nước chứa các ion nào sau đây?",
                  "options": [
                        "Các cation Ca²⁺, Mg²⁺ và anion hydrogencarbonate (HCO₃⁻).",
                        "Các cation Ca²⁺, Mg²⁺ và các anion Cl⁻, SO₄²⁻.",
                        "Các ion Na⁺, K⁺ và Cl⁻.",
                        "Chỉ chứa duy nhất cation sắt Fe³⁺."
                  ],
                  "ans": 0,
                  "explanation": "Nước cứng tạm thời chứa muối Ca(HCO₃)₂ và Mg(HCO₃)₂. Gọi là tạm thời vì tính cứng này có thể làm mất đi dễ dàng bằng cách đun sôi (nhiệt phân HCO₃⁻ thành kết tủa carbonate)."
            },
            {
                  "q": "Chất nào sau đây có thể dùng để làm mềm cả nước cứng tạm thời và nước cứng vĩnh cửu bằng phương pháp kết tủa hóa chất?",
                  "options": [
                        "Sodium carbonate (Na₂CO₃) hoặc Sodium phosphate (Na₃PO₄).",
                        "Hydrochloric acid (HCl).",
                        "Sodium chloride (NaCl).",
                        "Acid sulfuric loãng (H₂SO₄)."
                  ],
                  "ans": 0,
                  "explanation": "Ion CO₃²⁻ (từ Na₂CO₃) và PO₄³⁻ (từ Na₃PO₄) tạo kết tủa không tan với cả Ca²⁺ và Mg²⁺ (như CaCO₃↓, MgCO₃↓, Ca₃(PO₄)₂↓), do đó loại bỏ hoàn toàn các ion gây cứng dù ở dạng muối bicarbonate, sulfate hay chloride."
            },
            {
                  "q": "Trong công nghiệp hiện đại, phương pháp làm mềm nước cứng phổ biến và kinh tế nhất mà không cần thêm hóa chất độc hại vào nước là:",
                  "options": [
                        "Phương pháp trao đổi ion qua cột nhựa Zeolite hoặc cationit (nhựa giữ Ca²⁺, Mg²⁺ và giải phóng Na⁺).",
                        "Chưng cất đun sôi toàn bộ nước.",
                        "Dùng acid nitric để trung hòa.",
                        "Sục khí clo dư vào nước."
                  ],
                  "ans": 0,
                  "explanation": "Phương pháp trao đổi ion cho nước cứng chảy qua cột chứa hạt nhựa cationit (chứa sẵn Na⁺ hoặc H⁺). Cation Ca²⁺ và Mg²⁺ có điện tích cao hơn nên bị hạt nhựa hấp phụ giữ lại và hoán đổi Na⁺ vào nước, làm nước mềm triệt để."
            }
      ]
},
    'hoahoc12-b27': {
      "subject": "chemistry",
      "simType": "transition-metals",
      "simOptions": {
            "mode": "oxidation-states"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 27",
      "title": "Kim Loại Chuyển Tiếp Dãy Thứ Nhất & Số Oxi Hóa Biến Đổi",
      "guide": "Khảo sát cấu hình electron phân lớp 3d và dãy màu sắc ion dung dịch đặc trưng của Chromium, Manganese, Iron và Copper.",
      "questions": [
            {
                  "q": "Nguyên nhân chính khiến các kim loại chuyển tiếp dãy thứ nhất (từ Sc đến Cu) có nhiều trạng thái oxi hóa khác nhau là do:",
                  "options": [
                        "Năng lượng của các phân lớp 3d và 4s xấp xỉ nhau, các electron ở cả hai phân lớp đều có thể tham gia tạo liên kết.",
                        "Bán kính nguyên tử của chúng lớn bất thường.",
                        "Các nguyên tử kim loại chuyển tiếp không có electron tự do.",
                        "Phân lớp 3d luôn bão hòa 10 electron."
                  ],
                  "ans": 0,
                  "explanation": "Phân lớp 3d và 4s có mức năng lượng rất sát nhau. Khi tham gia phản ứng, nguyên tử không chỉ mất 2 electron ở lớp ngoài cùng 4s mà còn có thể mất thêm từ 1 đến 5 electron ở phân lớp 3d chưa bão hòa, tạo ra nhiều trạng thái oxi hóa biến đổi (ví dụ Mn: +2, +3, +4, +6, +7)."
            },
            {
                  "q": "Trong môi trường acid, dung dịch thuốc tím potassium permanganate (KMnO₄, số oxi hóa của Mn là +7) bị khử bởi Fe²⁺ thành ion Mn²⁺ không màu. Màu sắc của dung dịch biến đổi thế nào?",
                  "options": [
                        "Từ màu tím thẫm chuyển sang gần như không màu (hoặc màu vàng nhạt của Fe³⁺).",
                        "Từ không màu chuyển sang màu xanh lam đậm.",
                        "Từ màu vàng chuyển sang màu đỏ gạch.",
                        "Xuất hiện kết tủa trắng không tan."
                  ],
                  "ans": 0,
                  "explanation": "Phương trình: MnO₄⁻ (+7, tím thẫm) + 5Fe²⁺ + 8H⁺ -> Mn²⁺ (+2, không màu/hồng rất nhạt) + 5Fe³⁺ (vàng nâu) + 4H₂O. Dung dịch mất màu tím đặc trưng, dùng làm phản ứng chuẩn độ oxi hóa – khử."
            },
            {
                  "q": "Cấu hình electron nguyên tử của nguyên tố Đồng (Copper, Z = 29) ở trạng thái cơ bản là:",
                  "options": [
                        "[Ar] 3d¹⁰ 4s¹ (cấu hình bão hòa phân lớp d bền vững).",
                        "[Ar] 3d⁹ 4s².",
                        "[Ar] 3d⁸ 4s² 4p¹.",
                        "[Ar] 4s² 3d⁹."
                  ],
                  "ans": 0,
                  "explanation": "Quy tắc bán bão hòa và bão hòa: một electron từ phân lớp 4s nhảy sang phân lớp 3d để đạt trạng thái bão hòa 3d¹⁰ có độ bền nhiệt động học cao hơn, do đó cấu hình thực tế của Cu là [Ar] 3d¹⁰ 4s¹."
            }
      ]
},
    'hoahoc12-b28': {
      "subject": "chemistry",
      "simType": "complexes",
      "simOptions": {
            "mode": "complex-geometry-3d"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 28",
      "title": "Sơ Lược Về Phức Chất & Cấu Trúc Bát Diện 3D",
      "guide": "Kéo chuột xoay mô hình 3D phức chất bát diện [Fe(CN)₆]³⁻, xác định nguyên tử trung tâm, phối tử và số phối trí.",
      "questions": [
            {
                  "q": "Trong ion phức chất [Fe(CN)₆]³⁻, nguyên tử trung tâm, phối tử và số phối trí lần lượt là:",
                  "options": [
                        "Nguyên tử trung tâm là cation Fe³⁺; phối tử là ion CN⁻ (cyano); số phối trí là 6.",
                        "Nguyên tử trung tâm là CN⁻; phối tử là Fe; số phối trí là 3.",
                        "Nguyên tử trung tâm là Fe²⁺; phối tử là N³⁻; số phối trí là 6.",
                        "Nguyên tử trung tâm là C; phối tử là Fe³⁺; số phối trí là 4."
                  ],
                  "ans": 0,
                  "explanation": "Cấu trúc phức chất: Cation Fe³⁺ đóng vai trò là nguyên tử trung tâm có các orbital trống. Sáu anion CN⁻ đóng vai trò là phối tử có cặp electron tự do tạo liên kết phối trí với Fe³⁺, tạo cấu trúc hình học bát diện đều có số phối trí bằng 6."
            },
            {
                  "q": "Bản chất liên kết hóa học giữa nguyên tử trung tâm và các phối tử trong phân tử phức chất là:",
                  "options": [
                        "Liên kết cộng hóa trị phối trí (cho – nhận), phối tử nhường cặp electron tự do vào orbital d/sp trống của nguyên tử trung tâm.",
                        "Liên kết ion thuần túy do lực hút tĩnh điện.",
                        "Liên kết kim loại giữa các nguyên tử cùng loại.",
                        "Liên kết hydrogen liên phân tử."
                  ],
                  "ans": 0,
                  "explanation": "Phối tử là các base Lewis (chứa cặp electron chưa liên kết như :NH₃, :Cl⁻, :OH⁻, :CN⁻) đóng góp cặp electron vào các orbital lai hóa trống của cation kim loại chuyển tiếp (acid Lewis) tạo liên kết cho - nhận."
            },
            {
                  "q": "Dạng hình học không gian của ion phức chất [PtCl₄]²⁻ và [Zn(NH₃)₄]²⁺ lần lượt là:",
                  "options": [
                        "[PtCl₄]²⁻ có dạng vuông phẳng (square planar); [Zn(NH₃)₄]²⁺ có dạng tứ diện (tetrahedral).",
                        "Cả hai đều có dạng bát diện đều.",
                        "Cả hai đều có dạng đường thẳng.",
                        "[PtCl₄]²⁻ dạng tứ diện; [Zn(NH₃)₄]²⁺ dạng vuông phẳng."
                  ],
                  "ans": 0,
                  "explanation": "Với số phối trí 4: Phức chất ion d⁸ của Pt(II) lai hóa dsp² tạo cấu trúc vuông phẳng ([PtCl₄]²⁻). Còn ion d¹⁰ của Zn(II) lai hóa sp³ tạo cấu trúc tứ diện đều ([Zn(NH₃)₄]²⁺)."
            }
      ]
},
    'hoahoc12-b29': {
      "subject": "chemistry",
      "simType": "coordination",
      "simOptions": {
            "mode": "complex-formation-color"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 29",
      "title": "Tính Chất & Ứng Dụng Của Phức Chất (Cu²⁺ + NH₃)",
      "guide": "Bấm nhỏ từng giọt dung dịch NH₃ vào dung dịch CuSO₄: quan sát kết tủa xanh nhạt Cu(OH)₂ tan dần tạo dung dịch phức [Cu(NH₃)₄(H₂O)₂]²⁺ màu xanh lam thẫm.",
      "questions": [
            {
                  "q": "Khi nhỏ từ từ dung dịch ammonia (NH₃) vào ống nghiệm chứa dung dịch copper(II) sulfate (CuSO₄) cho đến dư, hiện tượng quan sát được là:",
                  "options": [
                        "Ban đầu xuất hiện kết tủa màu xanh nhạt Cu(OH)₂, sau đó kết tủa tan dần tạo dung dịch phức chất màu xanh lam thẫm.",
                        "Dung dịch chuyển sang màu đỏ máu và không có kết tủa.",
                        "Xuất hiện kết tủa màu trắng bền không tan trong kiềm.",
                        "Có kim loại đồng màu đỏ lắng xuống đáy ống nghiệm."
                  ],
                  "ans": 0,
                  "explanation": "Giai đoạn 1: NH₃ tạo môi trường kiềm kết tủa Cu²⁺: Cu²⁺ + 2NH₃ + 2H₂O -> Cu(OH)₂↓ (xanh nhạt) + 2NH₄⁺. Giai đoạn 2: Khi dư NH₃, các phân tử NH₃ đóng vai trò phối tử thay thế hòa tan kết tủa: Cu(OH)₂ + 4NH₃ + 2H₂O -> [Cu(NH₃)₄(H₂O)₂]²⁺ (xanh thẫm) + 2OH⁻."
            },
            {
                  "q": "Phức chất Cisplatin [Pt(NH₃)₂Cl₂] nổi tiếng trong y học hiện đại với vai trò là:",
                  "options": [
                        "Thuốc hóa trị điều trị ung thư (ung thư tinh hoàn, buồng trứng, phổi) nhờ khả năng liên kết chéo với DNA tế bào ung thư.",
                        "Thuốc giảm đau hạ sốt.",
                        "Thuốc sát trùng vết thương ngoài da.",
                        "Chất kích thích tăng trưởng cây trồng."
                  ],
                  "ans": 0,
                  "explanation": "Cisplatin (đồng phân cis của phức vuông phẳng diamminedichloroplatinum(II)) xâm nhập vào tế bào ung thư, hai phối tử Cl⁻ bị thủy phân rồi gắn vào các base guanine của chuỗi xoắn kép DNA, ngăn chặn quá trình nhân đôi tế bào ung thư."
            },
            {
                  "q": "Để nhận biết ion Fe³⁺ trong dung dịch phân tích hóa học định tính, người ta thường dùng dung dịch potassium thiocyanate (KSCN) vì sinh ra phức chất có màu gì?",
                  "options": [
                        "Màu đỏ máu (blood red) của phức chất [Fe(SCN)(H₂O)₅]²⁺.",
                        "Màu xanh lam thẫm.",
                        "Màu vàng chanh.",
                        "Màu tím hoa cà."
                  ],
                  "ans": 0,
                  "explanation": "Phản ứng tạo phức chất thiocyanate cực kì nhạy: Fe³⁺ + SCN⁻ + 5H₂O -> [Fe(SCN)(H₂O)₅]²⁺ có màu đỏ máu đặc trưng, nhận biết được lượng vết Fe³⁺ ở nồng độ cực nhỏ."
            }
      ]
},
    'hoahoc12-b30': {
      "subject": "chemistry",
      "simType": "transition-metals",
      "simOptions": {
            "mode": "oxidation-states"
      },
      "labUrl": "chemistry_lab.html",
      "badge": "Hóa Học 12 • Bài 30",
      "title": "Ôn Tập Chương 8: Kim Loại Chuyển Tiếp & Phức Chất",
      "guide": "Tổng kết danh pháp phức chất, màu sắc ion kim loại chuyển tiếp, cơ chế xúc tác đồng thể của phức chất và vai trò sinh học của hemoglobin (Fe²⁺) và diệp lục (Mg²⁺).",
      "questions": [
            {
                  "q": "Trong cơ thể người và động vật có vú, phức chất Hemoglobin (chứa ion kim loại Fe²⁺ trong nhân hemin) đảm nhiệm chức năng sinh học tối quan trọng nào?",
                  "options": [
                        "Vận chuyển khí oxygen (O₂) từ phổi đến các mô tế bào và vận chuyển CO₂ về phổi để đào thải.",
                        "Tiêu hóa tinh bột thành đường glucose.",
                        "Tổng hợp chất béo dưới da.",
                        "Tạo màu men răng bảo vệ xương."
                  ],
                  "ans": 0,
                  "explanation": "Hemoglobin là protein phức tạp có nhóm ngoại hemin chứa Fe²⁺ ở tâm phối trí. Phân tử O₂ tạo liên kết phối trí thuận nghịch với Fe²⁺ tạo oxyhemoglobin mang oxy theo dòng máu đi nuôi toàn cơ thể."
            },
            {
                  "q": "Tại sao khi hít phải khí than carbon monoxide (CO), con người bị ngạt thở và có nguy cơ tử vong nhanh chóng?",
                  "options": [
                        "Khí CO liên kết với Fe²⁺ trong hemoglobin bền gấp hơn 200 lần so với O₂, làm tê liệt khả năng vận chuyển oxy của máu.",
                        "Khí CO làm tăng huyết áp đột ngột gây vỡ mạch máu.",
                        "Khí CO phá hủy màng tế bào bạch cầu.",
                        "Khí CO làm đông tụ hoàn toàn protein huyết tương."
                  ],
                  "ans": 0,
                  "explanation": "CO là phối tử trường mạnh, tạo liên kết phối trí với Fe²⁺ trong hemoglobin bền hơn O₂ hơn 200 lần tạo carboxyhemoglobin (HbCO). Một khi Fe²⁺ đã bị CO chiếm giữ, hemoglobin không thể nhận O₂ được nữa, khiến cơ thể bị ngạt oxy tế bào nghiêm trọng."
            },
            {
                  "q": "Chất diệp lục (chlorophyll) trong lá cây xanh giúp quang hợp hấp thụ ánh sáng mặt trời là phức chất có nguyên tử trung tâm là kim loại nào?",
                  "options": [
                        "Magnesium (Mg²⁺) liên kết với vòng porphyrin.",
                        "Iron (Fe²⁺).",
                        "Copper (Cu²⁺).",
                        "Zinc (Zn²⁺)."
                  ],
                  "ans": 0,
                  "explanation": "Diệp lục tố (chlorophyll) có cấu trúc tương tự hemoglobin nhưng nguyên tử trung tâm là ion Mg²⁺ phối trí với vòng porphyrin khép kín, hấp thụ ánh sáng đỏ và xanh lam, phản xạ ánh sáng xanh lục nên lá cây có màu xanh lục."
            }
      ]
}
  };

  function renderMath(el) {
    if (typeof renderMathInElement === 'function' && el) {
      renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }
  }

  function createEngineInstance(subject, simType, mountEl, simOptions) {
    if (subject === 'math' && window.CodeHubMath) {
      return window.CodeHubMath.create(simType, mountEl, simOptions);
    }
    if (subject === 'physics' && window.CodeHubPhysics) {
      return window.CodeHubPhysics.create(simType, mountEl, simOptions);
    }
    if (subject === 'chemistry' && window.CodeHubChemistry) {
      return window.CodeHubChemistry.create(simType, mountEl, simOptions);
    }
    return null;
  }

  function enhanceStation(containerId, stationKey) {
    const container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
    const cfg = DISCOVERY_QUESTIONS_DB[stationKey];
    if (!container || !cfg) return null;
    if (container.dataset.stationMounted === 'true') return null;
    container.dataset.stationMounted = 'true';

    const themeColors = {
      math: {
        grad: 'from-indigo-600 via-blue-600 to-purple-600',
        badgeBg: 'bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
        btnPrimary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
        icon: 'fa-compass-drafting',
        labName: 'Phòng Thực Hành Toán Học'
      },
      physics: {
        grad: 'from-blue-600 via-sky-600 to-indigo-600',
        badgeBg: 'bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
        btnPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
        icon: 'fa-atom',
        labName: 'Phòng Thí Nghiệm Vật Lý'
      },
      chemistry: {
        grad: 'from-teal-600 via-emerald-600 to-cyan-600',
        badgeBg: 'bg-teal-100 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800',
        btnPrimary: 'bg-teal-600 hover:bg-teal-700 text-white',
        icon: 'fa-flask-vial',
        labName: 'Phòng Thí Nghiệm Hóa Học'
      }
    }[cfg.subject];

    const questionsHtml = cfg.questions.map((item, qIdx) => {
      const optsHtml = item.opts.map((optText, oIdx) => {
        const letter = ['A', 'B', 'C', 'D'][oIdx] || String(oIdx + 1);
        return `
          <button type="button" data-q="${qIdx}" data-o="${oIdx}" class="sim-disc-opt w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-indigo-400 dark:hover:border-indigo-500 text-xs text-slate-700 dark:text-slate-200 transition flex items-start gap-2 cursor-pointer">
            <span class="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">${letter}</span>
            <span class="flex-1 leading-relaxed">${optText}</span>
          </button>
        `;
      }).join('');

      return `
        <div class="sim-disc-card p-4 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2.5" data-q-card="${qIdx}">
          <div class="flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
            <span class="px-2 py-0.5 rounded-md ${themeColors.badgeBg} border text-[11px] font-extrabold shrink-0 mt-0.5">Khám phá ${qIdx + 1}</span>
            <span class="leading-relaxed">${item.q}</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">${optsHtml}</div>
          <div data-q-exp="${qIdx}" class="hidden p-3 rounded-xl text-xs leading-relaxed border"></div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="codehub-practice-station my-6 rounded-3xl border-2 border-indigo-500/25 dark:border-indigo-400/25 bg-white dark:bg-slate-900 shadow-md overflow-hidden font-sans">
        <!-- 5-Step Pedagogical Learning Flow Banner -->
        <div class="px-4 py-2.5 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-2 text-[11px] border-b border-slate-800">
          <div class="flex flex-wrap items-center gap-1.5 font-semibold">
            <span class="text-slate-400 uppercase tracking-wider font-extrabold mr-1">Quy trình học tập:</span>
            <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300">1. Lý thuyết</span>
            <span class="text-slate-500">→</span>
            <span class="px-2.5 py-0.5 rounded bg-gradient-to-r ${themeColors.grad} text-white font-bold shadow-2xs">2. Mô phỏng tương tác</span>
            <span class="text-slate-500">→</span>
            <span class="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">3. Khám phá kiến thức</span>
            <span class="text-slate-500">→</span>
            <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300">4. Luyện tập</span>
            <span class="text-slate-500">→</span>
            <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300">5. Kiểm tra</span>
          </div>
          <a href="${cfg.labUrl}" target="_blank" class="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 font-bold">
            <span>Mở ${themeColors.labName} đầy đủ</span>
            <span>↗</span>
          </a>
        </div>

        <!-- Station Action Header with "Thực hành mô phỏng" Button -->
        <div class="p-4 sm:px-6 bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div class="space-y-0.5">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase border ${themeColors.badgeBg}">${cfg.badge}</span>
              <h4 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">${cfg.title}</h4>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              <strong>Hướng dẫn thực hành:</strong> ${cfg.guide}
            </p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button type="button" data-action="practice-sim" class="px-4 py-2 rounded-xl bg-gradient-to-r ${themeColors.grad} hover:opacity-95 text-white font-extrabold text-xs shadow-sm transition flex items-center gap-1.5 cursor-pointer">
              <span>🔬</span>
              <span>Thực hành mô phỏng</span>
            </button>
            <button type="button" data-action="jump-discovery" class="px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-bold text-xs transition cursor-pointer">
              <span>💡 Câu hỏi khám phá (${cfg.questions.length})</span>
            </button>
          </div>
        </div>

        <!-- Interactive Simulation Canvas Mount -->
        <div data-sim-body class="p-3 sm:p-5 bg-white dark:bg-slate-900">
          <div data-sim-mount></div>
        </div>

        <!-- Step 3: Discovery & Application Questions Linked to Simulation -->
        <div data-discovery-section class="p-4 sm:p-6 bg-slate-50/60 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h5 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span class="w-6 h-6 rounded-lg bg-amber-500 text-white text-xs font-black flex items-center justify-center">?</span>
                <span>Khám Phá Kiến Thức &amp; Vận Dụng Qua Mô Phỏng</span>
              </h5>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Hãy điều chỉnh các thanh trượt trên mô phỏng phía trên để kiểm nghiệm và chọn đáp án đúng cho ${cfg.questions.length} câu hỏi khám phá:</p>
            </div>
            <div class="flex items-center gap-2">
              <span data-disc-score class="px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs">
                Đã trả lời đúng: 0/${cfg.questions.length}
              </span>
              <button type="button" data-action="reset-discovery" class="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 cursor-pointer">
                Làm lại
              </button>
            </div>
          </div>

          <div class="space-y-3">
            ${questionsHtml}
          </div>
        </div>
      </div>
    `;

    const mountEl = container.querySelector('[data-sim-mount]');
    const simBody = container.querySelector('[data-sim-body]');
    const discSection = container.querySelector('[data-discovery-section]');
    const scoreBadge = container.querySelector('[data-disc-score]');

    // Mount the existing simulation engine
    let simInstance = createEngineInstance(cfg.subject, cfg.simType, mountEl, cfg.simOptions);

    // "Thực hành mô phỏng" button: scrolls/focuses the interactive simulation and ensures it's visible & rendered
    const practiceBtn = container.querySelector('[data-action="practice-sim"]');
    practiceBtn.addEventListener('click', () => {
      if (simBody.classList.contains('hidden')) {
        simBody.classList.remove('hidden');
      }
      if (!simInstance) {
        simInstance = createEngineInstance(cfg.subject, cfg.simType, mountEl, cfg.simOptions);
      } else if (typeof simInstance.renderAll === 'function') {
        simInstance.renderAll();
      }
      simBody.scrollIntoView({ behavior: 'smooth', block: 'center' });
      simBody.classList.add('ring-2', 'ring-indigo-500');
      setTimeout(() => simBody.classList.remove('ring-2', 'ring-indigo-500'), 1400);
    });

    container.querySelector('[data-action="jump-discovery"]').addEventListener('click', () => {
      discSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // Interactive Discovery Quiz Logic
    const userAnswers = {};
    const updateScore = () => {
      let correctCount = 0;
      cfg.questions.forEach((qItem, idx) => {
        if (userAnswers[idx] === qItem.ans) correctCount++;
      });
      scoreBadge.textContent = `Đã trả lời đúng: ${correctCount}/${cfg.questions.length}`;
      if (correctCount === cfg.questions.length) {
        scoreBadge.className = 'px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 font-extrabold text-xs';
      }
    };

    container.querySelectorAll('.sim-disc-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const qIdx = parseInt(btn.dataset.q, 10);
        const oIdx = parseInt(btn.dataset.o, 10);
        const qItem = cfg.questions[qIdx];
        userAnswers[qIdx] = oIdx;

        const card = container.querySelector(`[data-q-card="${qIdx}"]`);
        card.querySelectorAll('.sim-disc-opt').forEach(b => {
          const idx = parseInt(b.dataset.o, 10);
          if (idx === qItem.ans) {
            b.className = 'sim-disc-opt w-full text-left p-2.5 rounded-xl border-2 border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/50 text-xs font-bold text-emerald-900 dark:text-emerald-200 transition flex items-start gap-2 cursor-pointer';
          } else if (idx === oIdx && oIdx !== qItem.ans) {
            b.className = 'sim-disc-opt w-full text-left p-2.5 rounded-xl border-2 border-rose-500 bg-rose-50/90 dark:bg-rose-950/50 text-xs font-semibold text-rose-900 dark:text-rose-200 transition flex items-start gap-2 cursor-pointer';
          } else {
            b.className = 'sim-disc-opt w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-500 dark:text-slate-400 transition flex items-start gap-2 cursor-pointer opacity-75';
          }
        });

        const expBox = container.querySelector(`[data-q-exp="${qIdx}"]`);
        const isCorrect = oIdx === qItem.ans;
        expBox.classList.remove('hidden');
        expBox.className = isCorrect
          ? 'p-3 rounded-xl text-xs leading-relaxed border bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
          : 'p-3 rounded-xl text-xs leading-relaxed border bg-amber-50/80 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200';
        expBox.innerHTML = `<strong>${isCorrect ? '✓ Chính xác!' : '✗ Chưa chính xác — Đáp án đúng là ' + ['A', 'B', 'C', 'D'][qItem.ans] + ':'}</strong> ${qItem.exp}`;
        renderMath(expBox);
        updateScore();
      });
    });

    container.querySelector('[data-action="reset-discovery"]').addEventListener('click', () => {
      Object.keys(userAnswers).forEach(k => delete userAnswers[k]);
      scoreBadge.textContent = `Đã trả lời đúng: 0/${cfg.questions.length}`;
      scoreBadge.className = 'px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs';
      container.querySelectorAll('.sim-disc-opt').forEach(b => {
        b.className = 'sim-disc-opt w-full text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-indigo-400 dark:hover:border-indigo-500 text-xs text-slate-700 dark:text-slate-200 transition flex items-start gap-2 cursor-pointer';
      });
      container.querySelectorAll('[data-q-exp]').forEach(exp => exp.classList.add('hidden'));
    });

    renderMath(container);
    return simInstance;
  }

  function mountAll(mappings) {
    if (!Array.isArray(mappings)) return;
    mappings.forEach(({ containerId, stationKey }) => {
      if (document.getElementById(containerId)) {
        enhanceStation(containerId, stationKey);
      }
    });
  }

  return {
    DISCOVERY_QUESTIONS_DB,
    enhanceStation,
    mountAll
  };
});
