const fs = require('fs');

const summaryTable = [
  {
    bai: 'Bài 1',
    name: 'Phép biến hình',
    cd: 'CĐ 1',
    concept: 'Quy tắc M ↦ M\' duy nhất, điểm bất động, phép đồng nhất e, phép co giãn trục',
    formula: 'f(M) = M\', f(x; y) = (x; ky)',
    app: 'Thu phóng phi đối xứng trong đồ họa vector, thiết kế font chữ'
  },
  {
    bai: 'Bài 2',
    name: 'Phép tịnh tiến',
    cd: 'CĐ 1',
    concept: 'Vectơ tịnh tiến MM\'⃗ = u⃗, bảo toàn khoảng cách, bảo toàn góc và diện tích',
    formula: 'x\' = x + a, y\' = y + b; M\'N\' = MN',
    app: 'Lát gạch vỉa hè, hoa văn lặp dải diềm, đội hình diễu hành'
  },
  {
    bai: 'Bài 3',
    name: 'Phép đối xứng trục',
    cd: 'CĐ 1',
    concept: 'Trục d là đường trung trực của MM\', tự đảo, bài toán cực trị khoảng cách Heron',
    formula: 'Đ_Ox: (x; -y), Đ_Oy: (-x; y); MA + MB = MA\' + MB ≥ A\'B',
    app: 'Đặt trạm bơm nước tối ưu trên bờ sông, định luật phản xạ ánh sáng'
  },
  {
    bai: 'Bài 4',
    name: 'Phép quay & Đối xứng tâm',
    cd: 'CĐ 1',
    concept: 'Quay tâm O góc α, ma trận lượng giác, phép đối xứng tâm là phép quay 180°',
    formula: 'x\' = x cos α - y sin α, y\' = x sin α + y cos α; x\' = 2a - x, y\' = 2b - y',
    app: 'Tuabin gió 3 cánh cân bằng động, bánh răng cơ khí, logo đối xứng'
  },
  {
    bai: 'Bài 5',
    name: 'Phép dời hình',
    cd: 'CĐ 1',
    concept: 'Bảo toàn khoảng cách M\'N\' = MN, hợp thành phép dời hình, hai hình bằng nhau H ≅ H\'',
    formula: 'M\'N\' = MN, H ≅ H\' ⟺ ∃f: f(H) = H\'',
    app: 'Kiểm tra sự bằng nhau của vòm đá Gothic, robotics gắp linh kiện'
  },
  {
    bai: 'Bài 6',
    name: 'Phép vị tự',
    cd: 'CĐ 1',
    concept: 'Vectơ IM\'⃗ = k IM⃗, tỉ số k ≠ 0, độ dài nhân |k|, diện tích nhân k²',
    formula: 'x\' = a + k(x - a), y\' = b + k(y - b); S\'/S = k²',
    app: 'Máy chiếu projector, ống kính zoom máy ảnh, sa bàn kiến trúc'
  },
  {
    bai: 'Bài 7',
    name: 'Phép đồng dạng & Fractal',
    cd: 'CĐ 1',
    concept: 'M\'N\' = k MN (k > 0), hợp thành dời hình và vị tự, bông tuyết Koch tự đồng dạng',
    formula: 'S\'/S = k²; Bông tuyết Koch: P_n = 3a(4/3)ⁿ⁻¹ ⟶ ∞, S_n ⟶ 8/5 S_0',
    app: 'Bản đồ địa lí, đo chiều cao gián tiếp, mô phỏng rạn san hô'
  },
  {
    bai: 'Bài 8',
    name: 'Lí thuyết đồ thị cơ bản',
    cd: 'CĐ 2',
    concept: 'Đơn đồ thị, đa đồ thị, đồ thị đầy đủ K_n, bậc đỉnh deg(v), định lí bắt tay',
    formula: '|E(K_n)| = n(n-1)/2; ∑ deg(v) = 2|E| (số đỉnh bậc lẻ luôn chẵn)',
    app: 'Mạng xã hội bạn bè, cấu trúc router internet, lịch thi đấu vòng tròn'
  },
  {
    bai: 'Bài 9',
    name: 'Euler và Hamilton',
    cd: 'CĐ 2',
    concept: 'Euler (qua mọi CẠNH 1 lần), Hamilton (qua mọi ĐỈNH 1 lần), định lí Ore và Dirac',
    formula: 'Euler: Mọi đỉnh bậc chẵn; Dirac: n ≥ 3, deg(v) ≥ n/2 ⟹ Chu trình Hamilton',
    app: 'Bài toán 7 cây cầu Königsberg, xe quét rác đô thị, tour du lịch TSP'
  },
  {
    bai: 'Bài 10',
    name: 'Đường đi tối ưu & Dijkstra',
    cd: 'CĐ 2',
    concept: 'Đồ thị có trọng số w(e) ≥ 0, thuật toán Dijkstra gắn nhãn, bài toán Người đưa thư',
    formula: 'd(v) = min(d(v), d(u) + w(u,v)); L_min = ∑ w(e) + d_min(A, B)',
    app: 'Tìm đường Google Maps, giao thức mạng OSPF, lộ trình bưu tá giao hàng'
  },
  {
    bai: 'Bài 11',
    name: 'Hình chiếu vuông góc & Trục đo',
    cd: 'CĐ 3',
    concept: 'Chiếu vuông góc vs trục đo; 3 hình chiếu: Đứng, Bằng, Cạnh; trục đo 3 góc 120°',
    formula: 'x\'O\'y\' = y\'O\'z\' = z\'O\'x\' = 120°; p = q = r = 1 (quy ước)',
    app: 'Bản vẽ gia công chi tiết cơ khí chữ L, mô hình 3D bậc tam cấp'
  },
  {
    bai: 'Bài 12',
    name: 'Bản vẽ kĩ thuật tiêu chuẩn',
    cd: 'CĐ 3',
    concept: 'Khổ giấy A0-A4, khung bản vẽ, khung tên góc phải, 5 loại nét vẽ, quy tắc ghi kích thước',
    formula: 'Khung: mép trái 20mm, còn lại 10mm; ⌀ (đường kính), R (bán kính)',
    app: 'Hồ sơ thiết kế trục máy cơ điện tử, bản vẽ chế tạo nhà máy chuẩn TCVN'
  }
];

const formulaTable = [
  { name: 'Tịnh tiến theo vectơ u = (a; b)', formula: 'x\' = x + a, \\quad y\' = y + b', unit: 'Tọa độ Oxy', note: 'Bảo toàn khoảng cách: M\'N\' = MN' },
  { name: 'Quay quanh gốc tọa độ O góc α', formula: 'x\' = x\\cos\\alpha - y\\sin\\alpha, \\quad y\' = x\\sin\\alpha + y\\cos\\alpha', unit: 'Tọa độ Oxy', note: 'Quay +90°: x\' = -y, y\' = x; quay -90°: x\' = y, y\' = -x' },
  { name: 'Đối xứng tâm I(a; b)', formula: 'x\' = 2a - x, \\quad y\' = 2b - y', unit: 'Tọa độ Oxy', note: 'Chính là phép quay tâm I góc 180°' },
  { name: 'Đối xứng trục Ox & Oy', formula: 'Đ_{Ox}: (x; -y), \\quad Đ_{Oy}: (-x; y)', unit: 'Tọa độ Oxy', note: 'Đường phân giác y = x: (x; y) ↦ (y; x)' },
  { name: 'Vị tự tâm I(a; b) tỉ số k', formula: 'x\' = a + k(x - a), \\quad y\' = b + k(y - b)', unit: 'Tọa độ Oxy', note: 'Độ dài: l\' = |k|l; Diện tích: S\' = k² S' },
  { name: 'Diện tích và Chu vi đồng dạng', formula: '\\frac{S\'}{S} = k^2, \\quad \\frac{P\'}{P} = k', unit: 'Tỉ số k > 0', note: 'Góc tương ứng được bảo toàn hoàn toàn' },
  { name: 'Bông tuyết Koch (Bước lặp n)', formula: 'P_n = 3a\\left(\\frac{4}{3}\\right)^{n-1}, \\quad S_n \\to \\frac{8}{5}S_0', unit: 'Chu vi & Diện tích', note: 'Chu vi tiến ra vô cực, diện tích hữu hạn' },
  { name: 'Định lí Bắt tay (Handshaking)', formula: '\\sum_{v \\in V} \\deg(v) = 2|E|', unit: 'Bậc & Số cạnh', note: 'Tổng bậc luôn chẵn; số đỉnh bậc lẻ là số chẵn' },
  { name: 'Số cạnh đồ thị đầy đủ K_n', formula: '|E(K_n)| = \\frac{n(n - 1)}{2}', unit: 'Số cạnh', note: 'Mỗi đỉnh trong K_n đều có bậc n - 1' },
  { name: 'Định lí Euler (Chu trình & Đường đi)', formula: '\\text{Chu trình}: \\forall v, \\deg(v) \\text{ chẵn}; \\quad \\text{Đường mở}: \\text{đúng 2 đỉnh lẻ}', unit: 'Bậc chẵn/lẻ', note: 'Đồ thị Königsberg có 4 đỉnh lẻ ⟹ Không có đường Euler' },
  { name: 'Định lí Dirac (Chu trình Hamilton)', formula: 'n \\ge 3, \\quad \\deg(v) \\ge \\frac{n}{2}, \\; \\forall v \\in V', unit: 'Điều kiện đủ', note: 'Định lí Ore: deg(u) + deg(v) ≥ n với mọi cặp không kề' },
  { name: 'Bài toán Người đưa thư (2 đỉnh lẻ)', formula: 'L_{\\min} = \\sum_{e \\in E} w(e) + d_{\\min}(A, B)', unit: 'Trọng số nhỏ nhất', note: 'Lặp lại đường ngắn nhất nối giữa 2 đỉnh bậc lẻ' },
  { name: 'Góc trục đo vuông góc đều', formula: '\\widehat{x\'O\'y\'} = \\widehat{y\'O\'z\'} = \\widehat{z\'O\'x\'} = 120^\\circ', unit: 'Độ (°)', note: 'Hệ số biến dạng quy ước: p = q = r = 1' },
  { name: 'Kích thước khổ giấy chính TCVN', formula: 'A0: 1189 \\times 841, \\; A4: 297 \\times 210', unit: 'mm', note: 'Khung tên góc dưới phải; đơn vị đo cơ khí mặc định mm' }
];

const mistakesAndTips = [
  {
    title: 'Phân biệt Phép dời hình và Phép vị tự / Phép đồng dạng',
    desc: 'Phép dời hình bảo toàn khoảng cách tuyệt đối (kích thước không đổi). Phép vị tự và phép đồng dạng bảo toàn góc và tỉ lệ hình dáng, nhưng thay đổi kích thước theo tỉ số k (độ dài nhân |k|, diện tích nhân k²).'
  },
  {
    title: 'Phân biệt Đối xứng trục và Đối xứng tâm',
    desc: 'Đối xứng tâm là một phép quay góc 180° quanh một điểm, bảo toàn hướng quay của mặt phẳng. Đối xứng trục là phép lật mặt qua một đường thẳng, làm đảo ngược hướng quay trong mặt phẳng (từ ngược chiều kim đồng hồ thành thuận chiều).'
  },
  {
    title: 'Phân biệt Đường đi Euler và Đường đi Hamilton',
    desc: 'Euler xét qua mọi CẠNH đúng 1 lần (điều kiện cần và đủ kiểm tra bằng bậc chẵn/lẻ). Hamilton xét qua mọi ĐỈNH đúng 1 lần (kiểm tra điều kiện đủ bằng Dirac deg ≥ n/2 hoặc Ore deg(u)+deg(v) ≥ n).'
  },
  {
    title: 'Tránh ngộ nhận trong Hình chiếu vuông góc và Trục đo',
    desc: 'Hình chiếu vuông góc dùng để xác định chính xác cấu tạo và kích thước chế tạo; hình chiếu trục đo giúp hình dung không gian 3D. Độ dài và góc trên hình biểu diễn nói chung không bằng độ dài và góc thật trong không gian nếu chưa nhân hệ số tỉ lệ.'
  }
];

const arenaQuestions = [
  {
    q: 'Câu 1: Trong mặt phẳng tọa độ Oxy, cho vectơ u = (2; -3). Ảnh của điểm M(-1; 5) qua phép tịnh tiến theo vectơ u là điểm nào?',
    options: [
      'A. M\'(1; 2)',
      'B. M\'(-3; 8)',
      'C. M\'(3; -8)',
      'D. M\'(-2; -15)'
    ],
    answer: 0,
    explanation: 'x\' = x + a = -1 + 2 = 1; y\' = y + b = 5 + (-3) = 2. Vậy M\'(1; 2).'
  },
  {
    q: 'Câu 2: Ảnh của đường thẳng d: 2x - 3y + 5 = 0 qua phép đối xứng trục hoành Ox có phương trình là:',
    options: [
      'A. 2x + 3y + 5 = 0',
      'B. -2x - 3y + 5 = 0',
      'C. 2x - 3y - 5 = 0',
      'D. 3x - 2y + 5 = 0'
    ],
    answer: 0,
    explanation: 'Qua phép đối xứng trục hoành Ox: x ↦ x và y ↦ -y. Thay vào phương trình d: 2x - 3(-y) + 5 = 0 ⟺ 2x + 3y + 5 = 0.'
  },
  {
    q: 'Câu 3: Phép quay tâm O góc lượng giác 90° biến điểm P(-3; 4) thành điểm nào?',
    options: [
      'A. P\'(-4; -3)',
      'B. P\'(4; 3)',
      'C. P\'(-3; -4)',
      'D. P\'(3; 4)'
    ],
    answer: 0,
    explanation: 'Với góc quay +90°: x\' = -y = -4 và y\' = x = -3. Vậy P\'(-4; -3).'
  },
  {
    q: 'Câu 4: Ảnh của điểm M(2; -4) qua phép đối xứng tâm I(1; 3) là điểm nào?',
    options: [
      'A. M\'(0; 10)',
      'B. M\'(-1; 7)',
      'C. M\'(3; 2)',
      'D. M\'(0; -10)'
    ],
    answer: 0,
    explanation: 'x\' = 2a - x = 2(1) - 2 = 0; y\' = 2b - y = 2(3) - (-4) = 6 + 4 = 10. Vậy M\'(0; 10).'
  },
  {
    q: 'Câu 5: Cho tam giác ABC có diện tích S = 15 cm². Qua phép vị tự tâm I tỉ số k = -3, diện tích của tam giác ảnh A\'B\'C\' là:',
    options: [
      'A. 45 cm²',
      'B. 90 cm²',
      'C. 135 cm²',
      'D. -45 cm²'
    ],
    answer: 2,
    explanation: 'Tỉ số diện tích qua phép vị tự là S\'/S = k² = (-3)² = 9. Do đó S\' = 9 × 15 = 135 cm².'
  },
  {
    q: 'Câu 6: Phép biến hình nào sau đây KHÔNG PHẢI là phép dời hình?',
    options: [
      'A. Phép đối xứng trục',
      'B. Phép vị tự tỉ số k = 1/2',
      'C. Phép quay góc 120°',
      'D. Phép tịnh tiến theo vectơ u'
    ],
    answer: 1,
    explanation: 'Phép vị tự tỉ số k = 1/2 làm khoảng cách giảm đi một nửa (M\'N\' = 1/2 MN), không bảo toàn khoảng cách nên không phải phép dời hình.'
  },
  {
    q: 'Câu 7: Phát biểu nào sau đây về bông tuyết Koch sau vô hạn bước lặp là chính xác?',
    options: [
      'A. Chu vi tiến ra vô cùng trong khi diện tích tiến về giá trị hữu hạn bằng 8/5 diện tích tam giác ban đầu',
      'B. Cả chu vi và diện tích đều tiến ra vô cùng',
      'C. Chu vi và diện tích đều tiến về 0',
      'D. Chu vi hữu hạn nhưng diện tích bằng vô hạn'
    ],
    answer: 0,
    explanation: 'Bông tuyết Koch là hình học fractal nổi tiếng có chu vi tăng theo công bội 4/3 tiến ra vô cùng, nhưng diện tích hội tụ về 8/5 diện tích tam giác ban đầu.'
  },
  {
    q: 'Câu 8: Một đơn đồ thị có 7 đỉnh và 11 cạnh. Tổng bậc của tất cả 7 đỉnh trong đồ thị này bằng:',
    options: [
      'A. 14',
      'B. 18',
      'C. 22',
      'D. 77'
    ],
    answer: 2,
    explanation: 'Theo Định lí bắt tay: Tổng bậc = 2|E| = 2 × 11 = 22.'
  },
  {
    q: 'Câu 9: Số cạnh của một đồ thị đầy đủ K₆ (gồm 6 đỉnh) là:',
    options: [
      'A. 6 cạnh',
      'B. 12 cạnh',
      'C. 15 cạnh',
      'D. 30 cạnh'
    ],
    answer: 2,
    explanation: '|E(K_n)| = n(n - 1) / 2. Với n = 6: |E| = 6 × 5 / 2 = 15 cạnh.'
  },
  {
    q: 'Câu 10: Khẳng định nào sau đây là hệ quả đúng của Định lí Bắt tay?',
    options: [
      'A. Trong mọi đồ thị, số đỉnh có bậc lẻ luôn luôn là một số chẵn',
      'B. Mọi đồ thị đều phải có ít nhất một đỉnh cô lập',
      'C. Đồ thị nào cũng có chu trình Hamilton',
      'D. Bậc của mọi đỉnh trong đồ thị đều phải bằng nhau'
    ],
    answer: 0,
    explanation: 'Vì tổng bậc luôn chẵn (bằng 2|E|) và tổng bậc của các đỉnh bậc chẵn là số chẵn, nên tổng bậc của các đỉnh bậc lẻ phải là số chẵn, suy ra số lượng đỉnh bậc lẻ bắt buộc phải là số chẵn.'
  },
  {
    q: 'Câu 11: Một đồ thị liên thông có đường đi Euler mở (không khép kín) khi và chỉ khi:',
    options: [
      'A. Tất cả các đỉnh đều có bậc lẻ',
      'B. Đồ thị có đúng hai đỉnh bậc lẻ (hai đỉnh này là điểm đầu và điểm cuối của đường đi)',
      'C. Mọi đỉnh đều có bậc chẵn',
      'D. Số đỉnh bằng số cạnh cộng 1'
    ],
    answer: 1,
    explanation: 'Tiêu chuẩn Euler: Đồ thị liên thông có đường đi Euler mở khi và chỉ khi có đúng 2 đỉnh bậc lẻ.'
  },
  {
    q: 'Câu 12: Đồ thị Bảy cây cầu Königsberg có bao nhiêu đỉnh bậc lẻ khiến người đi dạo không thể đi qua mỗi cầu đúng một lần?',
    options: [
      'A. Đúng 2 đỉnh bậc lẻ',
      'B. Đúng 3 đỉnh bậc lẻ',
      'C. Đúng 4 đỉnh bậc lẻ',
      'D. Không có đỉnh bậc lẻ nào'
    ],
    answer: 2,
    explanation: 'Mô hình cầu Königsberg có 4 vùng đất với bậc là 3, 3, 3, 5 (cả 4 đỉnh đều là đỉnh bậc lẻ), vượt quá số đỉnh lẻ cho phép của đường đi Euler (tối đa 2 đỉnh lẻ).'
  },
  {
    q: 'Câu 13: Theo định lí Dirac, đơn đồ thị có n = 10 đỉnh chắc chắn tồn tại chu trình Hamilton nếu bậc của mỗi đỉnh thỏa mãn:',
    options: [
      'A. deg(v) ≥ 3 với mọi đỉnh v',
      'B. deg(v) ≥ 5 với mọi đỉnh v (tức ≥ 10/2)',
      'C. deg(v) = 4 với mọi đỉnh v',
      'D. Tổng bậc của 10 đỉnh bằng 20'
    ],
    answer: 1,
    explanation: 'Hệ quả Dirac: Đơn đồ thị n ≥ 3 đỉnh có chu trình Hamilton nếu deg(v) ≥ n/2 với mọi v. Với n = 10, điều kiện là deg(v) ≥ 5.'
  },
  {
    q: 'Câu 14: Thuật toán Dijkstra dùng để giải bài toán nào trên đồ thị có trọng số không âm?',
    options: [
      'A. Tìm cây khung nhỏ nhất',
      'B. Tìm đường đi ngắn nhất từ một đỉnh nguồn đến các đỉnh còn lại',
      'C. Tìm chu trình Euler',
      'D. Đếm số thành phần liên thông'
    ],
    answer: 1,
    explanation: 'Thuật toán Dijkstra là thuật toán gắn nhãn tiêu chuẩn để tìm đường đi có tổng trọng số nhỏ nhất từ một đỉnh đến các đỉnh khác.'
  },
  {
    q: 'Câu 15: Trong bài toán Người đưa thư, tổng trọng số tất cả các cạnh là 50 km. Đồ thị có 2 đỉnh bậc lẻ A và B với khoảng cách ngắn nhất giữa A và B là 8 km. Chiều dài hành trình ngắn nhất của người đưa thư là:',
    options: [
      'A. 50 km',
      'B. 58 km',
      'C. 66 km',
      'D. 100 km'
    ],
    answer: 1,
    explanation: 'L_min = ∑ w(e) + d_min(A, B) = 50 + 8 = 58 km.'
  },
  {
    q: 'Câu 16: Trong phương pháp ba hình chiếu vuông góc, hình chiếu cạnh được thu được bằng cách nhìn vật thể theo hướng nào?',
    options: [
      'A. Từ trước tới',
      'B. Từ trên xuống',
      'C. Từ trái sang',
      'D. Từ dưới lên'
    ],
    answer: 2,
    explanation: 'Hình chiếu cạnh nhận được từ hướng chiếu từ trái sang phải, chiếu lên mặt phẳng hình chiếu cạnh.'
  },
  {
    q: 'Câu 17: Trong hình chiếu trục đo vuông góc đều, góc giữa ba trục đo O\'x\', O\'y\', O\'z\' bằng nhau và có độ lớn là:',
    options: [
      'A. 90°',
      'B. 120°',
      'C. 135°',
      'D. 150°'
    ],
    answer: 1,
    explanation: 'Trục đo vuông góc đều có ba trục đo lệch nhau đôi một góc bằng 120°.'
  },
  {
    q: 'Câu 18: Loại nét vẽ nào trong bản vẽ kĩ thuật được dùng để vẽ đường kích thước và đường dóng kích thước?',
    options: [
      'A. Nét liền đậm',
      'B. Nét liền mảnh',
      'C. Nét đứt mảnh',
      'D. Nét gạch dài chấm mảnh'
    ],
    answer: 1,
    explanation: 'Đường kích thước và đường dóng kích thước được quy ước vẽ bằng nét liền mảnh.'
  },
  {
    q: 'Câu 19: Trên bản vẽ kĩ thuật, kí hiệu ⌀25 thể hiện điều gì?',
    options: [
      'A. Bán kính hình tròn là 25 mm',
      'B. Chiều dài đoạn thẳng là 25 mm',
      'C. Đường kính của hình tròn là 25 mm',
      'D. Góc nghiêng vát mép là 25°'
    ],
    answer: 2,
    explanation: 'Kí hiệu ⌀ (hoặc Ø) biểu thị đường kính của hình tròn.'
  },
  {
    q: 'Câu 20: Khoảng cách chừa lề mép trái của khung bản vẽ kĩ thuật theo TCVN là bao nhiêu để đóng gáy hồ sơ?',
    options: [
      'A. 5 mm',
      'B. 10 mm',
      'C. 20 mm',
      'D. 25 mm'
    ],
    answer: 2,
    explanation: 'Theo tiêu chuẩn, mép trái của khung bản vẽ phải chừa rộng 20 mm để phục vụ đóng gáy tập hồ sơ bản vẽ; ba mép còn lại chừa 10 mm.'
  }
];

const reviewData = {
  summaryTable,
  formulaTable,
  mistakesAndTips,
  arenaQuestions
};

fs.writeFileSync('C:/Users/ADMIN/.gemini/antigravity/scratch/cs-learning-platform/scratch/toan11_review_arena.js', 'module.exports = ' + JSON.stringify(reviewData, null, 2) + ';', 'utf8');
console.log('Successfully generated scratch/toan11_review_arena.js with review tables and 20 Arena questions.');
