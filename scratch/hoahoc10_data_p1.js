// scratch/hoahoc10_data_p1.js
// Hóa Học 10 – Bộ Kết nối tri thức với cuộc sống (Chương 1 – 3: Bài 1 – Bài 14)

const chapters = [
  {
    num: 1,
    title: "Chương 1. Cấu tạo nguyên tử",
    shortTitle: "Chương 1: Cấu tạo nguyên tử",
    pages: "tr. 12–27",
    color: "cyan",
    desc: "Thành phần nguyên tử (p, n, e), thí nghiệm tìm ra các hạt, nguyên tố hóa học, đồng vị, nguyên tử khối trung bình, orbital nguyên tử (AO) và cấu hình electron.",
    lessons: [1, 2, 3, 4]
  },
  {
    num: 2,
    title: "Chương 2. Bảng tuần hoàn các nguyên tố hóa học và định luật tuần hoàn",
    shortTitle: "Chương 2: Bảng tuần hoàn & Định luật tuần hoàn",
    pages: "tr. 28–47",
    color: "emerald",
    desc: "Nguyên tắc sắp xếp, cấu tạo ô – chu kì – nhóm; quy luật biến đổi bán kính, độ âm điện, năng lượng ion hóa, tính kim loại/phi kim, tính acid/base của oxide – hydroxide và định luật tuần hoàn.",
    lessons: [5, 6, 7, 8, 9]
  },
  {
    num: 3,
    title: "Chương 3. Liên kết hóa học",
    shortTitle: "Chương 3: Liên kết hóa học",
    pages: "tr. 48–69",
    color: "indigo",
    desc: "Quy tắc octet, liên kết ion và mạng tinh thể ion, liên kết cộng hóa trị (Lewis, cho – nhận, σ, π, năng lượng liên kết), liên kết hydrogen và tương tác van der Waals.",
    lessons: [10, 11, 12, 13, 14]
  },
  {
    num: 4,
    title: "Chương 4. Phản ứng oxi hóa – khử",
    shortTitle: "Chương 4: Phản ứng oxi hóa – khử",
    pages: "tr. 70–79",
    color: "amber",
    desc: "Quy tắc xác định số oxi hóa, chất khử, chất oxi hóa, quá trình oxi hóa, quá trình khử, phương pháp thăng bằng electron và ứng dụng thực tiễn.",
    lessons: [15, 16]
  },
  {
    num: 5,
    title: "Chương 5. Năng lượng hóa học",
    shortTitle: "Chương 5: Năng lượng hóa học",
    pages: "tr. 80–90",
    color: "rose",
    desc: "Phản ứng tỏa nhiệt, phản ứng thu nhiệt, biến thiên enthalpy chuẩn ΔrH°298, nhiệt tạo thành chuẩn ΔfH°298, định luật Hess và tính ΔrH°298 theo năng lượng liên kết.",
    lessons: [17, 18]
  },
  {
    num: 6,
    title: "Chương 6. Tốc độ phản ứng hóa học",
    shortTitle: "Chương 6: Tốc độ phản ứng",
    pages: "tr. 91–102",
    color: "purple",
    desc: "Khái niệm tốc độ phản ứng, tốc độ trung bình, định luật tác dụng khối lượng, hệ số nhiệt độ Van't Hoff và 5 yếu tố ảnh hưởng đến tốc độ phản ứng.",
    lessons: [19, 20]
  },
  {
    num: 7,
    title: "Chương 7. Nguyên tố nhóm halogen",
    shortTitle: "Chương 7: Nguyên tố nhóm halogen",
    pages: "tr. 103–118",
    color: "teal",
    desc: "Đơn chất nhóm VIIA (F2, Cl2, Br2, I2), điều chế chlorine, nước Javel, hydrogen halide (HX), hydrohalic acid, muối halide, nhận biết ion X⁻ và an toàn hóa chất.",
    lessons: [21, 22, 23]
  }
];

const lessonsP1 = {
  1: {
    num: 1,
    chapter: 1,
    title: "Thành phần của nguyên tử",
    pages: "tr. 13–16",
    isReview: false,
    subtitle: "Hạt nhân (proton, neutron), vỏ electron, thí nghiệm khám phá nguyên tử rỗng của Thomson – Rutherford – Chadwick, kích thước và khối lượng nguyên tử",
    diagramCaption: "Sơ đồ cấu tạo nguyên tử rỗng (Hạt nhân p, n & Vỏ e) và Thí nghiệm bắn hạt α vào lá vàng mỏng của Rutherford (1911)",
    keyFormulas: [
      "Nguyên tử trung hòa về điện: <strong>Số proton (p) = Số electron (e)</strong>",
      "Khối lượng nguyên tử gần đúng: <strong>m<sub>nt</sub> ≈ m<sub>p</sub> + m<sub>n</sub></strong> (do m<sub>e</sub> ≈ 0,00055 amu rất nhỏ)",
      "Đơn vị độ dài vi mô: <strong>1 pm = 10<sup>−12</sup> m</strong>; <strong>1 Å = 10<sup>−10</sup> m = 100 pm</strong>",
      "Đơn vị khối lượng nguyên tử: <strong>1 amu = 1/12 m<sub>C-12</sub> ≈ 1,661 × 10<sup>−27</sup> kg</strong>"
    ],
    sections: [
      {
        heading: "1. Các hạt cấu tạo nên nguyên tử",
        items: [
          "Nguyên tử có <strong>cấu tạo rỗng</strong>, gồm hai phần: <strong>Hạt nhân (Nucleus)</strong> mang điện tích dương nằm ở tâm và <strong>Vỏ nguyên tử</strong> gồm các electron mang điện tích âm chuyển động rất nhanh xung quanh hạt nhân.",
          "<strong>Đặc điểm 3 loại hạt cơ bản:</strong><br>• <strong>Proton (kí hiệu p):</strong> nằm trong hạt nhân, điện tích tương đối <strong>+1</strong> (q<sub>p</sub> = +1,602 × 10<sup>−19</sup> C), khối lượng xấp xỉ <strong>1 amu</strong>.<br>• <strong>Neutron (kí hiệu n):</strong> nằm trong hạt nhân, <strong>không mang điện (0)</strong>, khối lượng xấp xỉ <strong>1 amu</strong>.<br>• <strong>Electron (kí hiệu e):</strong> chuyển động ở vỏ nguyên tử, điện tích tương đối <strong>−1</strong> (q<sub>e</sub> = −1,602 × 10<sup>−19</sup> C), khối lượng khoảng <strong>1/1837 amu ≈ 0,00055 amu</strong>.",
          "<strong>Tính trung hòa điện:</strong> Trong mọi nguyên tử trung hòa, <strong>số proton luôn bằng số electron (p = e)</strong>.",
          "<strong>Trường hợp đặc biệt:</strong> Nguyên tử <strong>Hydrogen nhẹ (Protium, <sup>1</sup><sub>1</sub>H)</strong> chỉ có 1 proton và 1 electron, <strong>hạt nhân không có neutron</strong>."
        ],
        table: {
          headers: ["Hạt cơ bản", "Kí hiệu", "Điện tích tương đối", "Khối lượng gần đúng", "Vị trí trong nguyên tử"],
          rows: [
            ["Proton", "p", "+1", "≈ 1 amu", "Trong hạt nhân"],
            ["Neutron", "n", "0 (không mang điện)", "≈ 1 amu", "Trong hạt nhân"],
            ["Electron", "e", "−1", "1/1837 amu (≈ 0,00055 amu)", "Lớp vỏ nguyên tử"]
          ]
        }
      },
      {
        heading: "2. Lịch sử thí nghiệm khám phá cấu tạo nguyên tử",
        items: [
          "<strong>J.J. Thomson (1897) – Phát hiện electron:</strong> Phóng điện thế cao qua ống tia âm cực chứa khí loãng, tia âm cực bị lệch về phía cực dương của điện trường → phát hiện chùm hạt mang điện tích âm gọi là <strong>electron</strong>.",
          "<strong>E. Rutherford (1911) – Phát hiện hạt nhân & cấu tạo rỗng:</strong> Chiếu chùm hạt alpha (α, mang điện dương) vào lá vàng cực mỏng (≈ 10<sup>−6</sup> m). <em>Hiện tượng:</em> Hầu hết hạt α xuyên thẳng qua lá vàng; một số ít bị lệch hướng; tỉ lệ rất nhỏ (khoảng 1/10.000) bị bật ngược trở lại. <em>Kết luận:</em> Nguyên tử có cấu tạo rỗng; phần lớn khối lượng và toàn bộ điện tích dương tập trung ở một vùng tâm cực nhỏ gọi là <strong>hạt nhân</strong>.",
          "<strong>E. Rutherford (1918) – Phát hiện proton:</strong> Bắn phá hạt nhân nitrogen bằng hạt α, phát hiện hạt proton (p).",
          "<strong>J. Chadwick (1932) – Phát hiện neutron:</strong> Bắn hạt α vào tấm beryllium (Be), phát hiện hạt không mang điện có khối lượng xấp xỉ proton là <strong>neutron (n)</strong>."
        ]
      },
      {
        heading: "3. Kích thước và khối lượng nguyên tử",
        items: [
          "<strong>So sánh kích thước:</strong> Đường kính nguyên tử cỡ <strong>10<sup>−10</sup> m (1 Å hay 100 pm)</strong>, trong khi đường kính hạt nhân cỡ <strong>10<sup>−14</sup> m (10<sup>−2</sup> pm)</strong> → Đường kính nguyên tử lớn gấp khoảng <strong>10.000 lần</strong> đường kính hạt nhân.",
          "<strong>Khối lượng nguyên tử tập trung ở hạt nhân:</strong> Do khối lượng electron quá nhỏ (chỉ bằng 1/1837 khối lượng proton), nên khối lượng nguyên tử gần như tập trung toàn bộ ở hạt nhân: <strong>m<sub>nguyên tử</sub> ≈ m<sub>hạt nhân</sub> = (p + n) amu</strong>."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Phân tích Thí nghiệm Lá vàng của Rutherford (1911)",
      detail: "Khi đọc hình thí nghiệm Rutherford: (1) Các tia α đi thẳng chứng tỏ phần lớn không gian nguyên tử là <strong>khoảng trống</strong>; (2) Các tia α bật ngược hoặc lệch góc lớn chứng tỏ chúng va chạm hoặc đi gần một tâm mang điện dương có mật độ khối lượng cực lớn là <strong>hạt nhân nguyên tử</strong>."
    },
    examplesAndMistakes: [
      "<strong>Ví dụ minh họa:</strong> Nguyên tử nhôm (Al) có 13 proton, 14 neutron và 13 electron. Khối lượng gần đúng của nguyên tử Al là 13 + 14 = 27 amu; khối lượng vỏ electron chỉ chiếm (13 × 0,00055) / 27 ≈ 0,026% tổng khối lượng.",
      "<strong>Lỗi cần tránh:</strong> Nhầm rằng mọi nguyên tử đều có neutron (quên ngoại lệ <sup>1</sup><sub>1</sub>H không có neutron); quên đổi đơn vị 1 Å = 100 pm = 0,1 nm."
    ]
  },

  2: {
    num: 2,
    chapter: 1,
    title: "Nguyên tố hóa học",
    pages: "tr. 17–20",
    isReview: false,
    subtitle: "Số hiệu nguyên tử (Z), số khối (A), kí hiệu nguyên tử, đồng vị bền – phóng xạ và công thức tính nguyên tử khối trung bình từ phổ khối lượng",
    diagramCaption: "Sơ đồ Kí hiệu nguyên tử, 3 đồng vị của Hydrogen (Protium, Deuterium, Tritium) và Phổ khối lượng của Chlorine",
    keyFormulas: [
      "Số khối: <strong>A = Z + N</strong>  ⇔  Số neutron: <strong>N = A − Z</strong>",
      "Trong nguyên tử trung hòa: <strong>Số p = Số e = Z (số hiệu nguyên tử = số đơn vị điện tích hạt nhân)</strong>",
      "Kí hiệu nguyên tử chuẩn: <strong><sup>A</sup><sub>Z</sub>X</strong> (A viết trên bên trái, Z viết dưới bên trái)",
      "Nguyên tử khối trung bình: <strong>Ā = (A<sub>1</sub>·a<sub>1</sub> + A<sub>2</sub>·a<sub>2</sub> + ... + A<sub>n</sub>·a<sub>n</sub>) / 100</strong> (với a<sub>1</sub> + a<sub>2</sub> + ... = 100%)"
    ],
    sections: [
      {
        heading: "1. Điện tích hạt nhân, Số hiệu nguyên tử (Z) và Số khối (A)",
        items: [
          "<strong>Số đơn vị điện tích hạt nhân (Z):</strong> Hạt nhân có Z proton thì điện tích hạt nhân là <strong>+Z</strong> và số đơn vị điện tích hạt nhân là <strong>Z</strong>. Giá trị Z cũng chính là <strong>số hiệu nguyên tử</strong> trong bảng tuần hoàn.",
          "<strong>Số khối (A):</strong> Là tổng số hạt proton (Z) và tổng số hạt neutron (N) có trong hạt nhân: <strong>A = Z + N</strong>.",
          "<strong>Kí hiệu nguyên tử <sup>A</sup><sub>Z</sub>X:</strong> Cho biết đặc trưng cấu tạo của nguyên tử nguyên tố X. <em>Ví dụ:</em> Kí hiệu <strong><sup>23</sup><sub>11</sub>Na</strong> cho biết nguyên tử sodium có Z = 11 (11 proton, 11 electron khi trung hòa) và số khối A = 23 → số neutron N = 23 − 11 = 12."
        ]
      },
      {
        heading: "2. Nguyên tố hóa học và Đồng vị (Isotopes)",
        items: [
          "<strong>Nguyên tố hóa học:</strong> Là tập hợp các nguyên tử có <strong>cùng số đơn vị điện tích hạt nhân (cùng số proton Z)</strong>. Các nguyên tử thuộc cùng một nguyên tố hóa học có tính chất hóa học giống nhau.",
          "<strong>Đồng vị:</strong> Là những nguyên tử có <strong>cùng số proton (Z) nhưng khác nhau về số neutron (N)</strong>, dẫn đến <strong>số khối (A) khác nhau</strong>.",
          "<strong>Ví dụ 3 đồng vị của Hydrogen:</strong><br>• <strong>Protium (<sup>1</sup><sub>1</sub>H):</strong> 1p, 0n (chiếm 99,984% trong tự nhiên).<br>• <strong>Deuterium (<sup>2</sup><sub>1</sub>H hay D):</strong> 1p, 1n (chiếm 0,016%).<br>• <strong>Tritium (<sup>3</sup><sub>1</sub>H hay T):</strong> 1p, 2n (đồng vị phóng xạ, hàm lượng cực nhỏ).",
          "<strong>Phân loại & Ứng dụng đồng vị:</strong> Ngoài các đồng vị bền trong tự nhiên, nhiều đồng vị phóng xạ (như <sup>60</sup>Co, <sup>131</sup>I, <sup>14</sup>C) được ứng dụng rộng rãi để điều trị ung thư trong y học, xác định niên đại cổ vật khảo cổ, kiểm tra khuyết tật kim loại và tạo giống cây trồng đột biến."
        ]
      },
      {
        heading: "3. Nguyên tử khối và Nguyên tử khối trung bình (Ā)",
        items: [
          "<strong>Nguyên tử khối:</strong> Cho biết khối lượng của một nguyên tử nặng gấp bao nhiêu lần 1 amu. Do m<sub>p</sub> ≈ m<sub>n</sub> ≈ 1 amu và m<sub>e</sub> rất nhỏ, nên nguyên tử khối của một đồng vị xấp xỉ bằng số khối A của nó.",
          "<strong>Nguyên tử khối trung bình (Ā):</strong> Hầu hết nguyên tố trong tự nhiên là hỗn hợp của nhiều đồng vị với tỉ lệ phần trăm số nguyên tử xác định (đo bằng phương pháp <strong>phổ khối lượng – Mass Spectrometry</strong>). Công thức tính: <strong>Ā = (A<sub>1</sub>·a<sub>1</sub> + A<sub>2</sub>·a<sub>2</sub> + ...) / 100</strong>.",
          "<strong>Phương pháp giải bài toán đồng vị hai chiều:</strong><br>• <em>Thuận:</em> Biết số khối A<sub>1</sub>, A<sub>2</sub> và % đồng vị a<sub>1</sub>, a<sub>2</sub> → Tính Ā.<br>• <em>Ngược:</em> Biết Ā và A<sub>1</sub>, A<sub>2</sub> → Đặt phần trăm đồng vị thứ nhất là x% (0 < x < 100), đồng vị thứ hai là (100 − x)%, giải phương trình tìm x, từ đó suy ra % khối lượng đồng vị trong hợp chất."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Cách đọc Phổ khối lượng (Mass Spectrum) để tính Nguyên tử khối trung bình",
      detail: "Trên giản đồ phổ khối lượng: trục hoành biểu diễn tỉ số <strong>m/z</strong> (với z = +1 thì m/z chính là số khối A của đồng vị), trục tung biểu diễn <strong>cường độ tương đối (%)</strong> tương ứng với phần trăm số nguyên tử của từng đồng vị."
    },
    examplesAndMistakes: [
      "<strong>Ví dụ chuẩn SGK:</strong> Trong tự nhiên, chlorine có hai đồng vị bền là <sup>35</sup><sub>17</sub>Cl chiếm 75,76% và <sup>37</sup><sub>17</sub>Cl chiếm 24,24%. Nguyên tử khối trung bình của chlorine là: Ā<sub>Cl</sub> = (35 × 75,76 + 37 × 24,24) / 100 ≈ <strong>35,48</strong> (thường lấy 35,5).",
      "<strong>Lỗi cần tránh:</strong> Nhầm vị trí số khối A (ở trên) và số hiệu Z (ở dưới) trong kí hiệu <sup>A</sup><sub>Z</sub>X; hoặc quên chia cho 100 khi tính nguyên tử khối trung bình."
    ]
  },

  3: {
    num: 3,
    chapter: 1,
    title: "Cấu trúc lớp vỏ electron nguyên tử",
    pages: "tr. 21–25",
    isReview: false,
    subtitle: "Mô hình hiện đại, orbital nguyên tử (AO s, p), lớp – phân lớp electron, 3 nguyên lí/quy tắc (Vững bền, Pauli, Hund) và cách viết cấu hình electron",
    diagramCaption: "Hình dạng Orbital nguyên tử (AO s hình cầu, AO p hình số 8 nổi) và Biểu diễn electron vào ô orbital theo Pauli – Hund",
    keyFormulas: [
      "Số AO trong lớp thứ n (n ≤ 4): <strong>Số AO = n<sup>2</sup></strong>",
      "Số electron tối đa trong lớp thứ n: <strong>Số e tối đa = 2n<sup>2</sup></strong> (Lớp K: 2e; Lớp L: 8e; Lớp M: 18e; Lớp N: 32e)",
      "Số AO & sức chứa phân lớp: <strong>s (1 AO, tối đa 2e: s<sup>2</sup>) • p (3 AO, tối đa 6e: p<sup>6</sup>) • d (5 AO, tối đa 10e: d<sup>10</sup>) • f (7 AO, tối đa 14e: f<sup>14</sup>)</strong>",
      "Electron lớp ngoài cùng: <strong>1–3e (thường là kim loại) • 5–7e (thường là phi kim) • 8e (khí hiếm, trừ He có 2e)</strong>"
    ],
    sections: [
      {
        heading: "1. Mô hình chuyển động của electron và Orbital nguyên tử (AO)",
        items: [
          "<strong>Mô hình hành tinh nguyên tử Rutherford – Bohr:</strong> Coi electron quay quanh hạt nhân theo những quỹ đạo tròn hay bầu dục xác định như các hành tinh quay quanh Mặt Trời. Mô hình này có ý nghĩa lịch sử quan trọng nhưng không giải thích được đầy đủ mọi tính chất của nguyên tử.",
          "<strong>Mô hình hiện đại về sự chuyển động của electron:</strong> Trong nguyên tử, các electron chuyển động <strong>rất nhanh</strong> xung quanh hạt nhân và <strong>không theo một quỹ đạo xác định</strong>, tạo nên đám mây electron.",
          "<strong>Orbital nguyên tử (Atomic Orbital – kí hiệu AO):</strong> Là khu vực không gian xung quanh hạt nhân mà tại đó <strong>xác suất có mặt (tìm thấy) electron là lớn nhất (khoảng 90%)</strong>.",
          "<strong>Hình dạng các AO cơ bản:</strong><br>• <strong>AO s:</strong> Có dạng <strong>hình cầu</strong> đối xứng qua tâm hạt nhân.<br>• <strong>AO p:</strong> Gồm 3 orbital (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>) có dạng <strong>hình số tám nổi (hai múi)</strong> định hướng dọc theo 3 trục tọa độ vuông góc Oxyz."
        ]
      },
      {
        heading: "2. Lớp và Phân lớp electron – Sức chứa tối đa",
        items: [
          "<strong>Lớp electron:</strong> Gồm các electron có mức năng lượng gần bằng nhau, được sắp xếp từ gần ra xa hạt nhân theo thứ tự <strong>n = 1, 2, 3, 4, 5, 6, 7</strong> tương ứng với tên chữ cái in hoa <strong>K, L, M, N, O, P, Q</strong>.",
          "<strong>Phân lớp electron:</strong> Mỗi lớp lại chia thành các phân lớp kí hiệu bằng chữ thường <strong>s, p, d, f</strong>. Các electron trong cùng một phân lớp có mức năng lượng bằng nhau. Lớp thứ n (với n ≤ 4) có đúng n phân lớp:<br>• Lớp K (n = 1): có 1 phân lớp <strong>1s</strong> (1 AO → tối đa 2e).<br>• Lớp L (n = 2): có 2 phân lớp <strong>2s, 2p</strong> (1 + 3 = 4 AO → tối đa 8e).<br>• Lớp M (n = 3): có 3 phân lớp <strong>3s, 3p, 3d</strong> (1 + 3 + 5 = 9 AO → tối đa 18e).<br>• Lớp N (n = 4): có 4 phân lớp <strong>4s, 4p, 4d, 4f</strong> (1 + 3 + 5 + 7 = 16 AO → tối đa 32e)."
        ],
        table: {
          headers: ["Phân lớp", "Số lượng AO", "Số electron tối đa", "Kí hiệu phân lớp bão hòa"],
          rows: [
            ["Phân lớp s", "1 AO (hình cầu)", "2 electron", "s²"],
            ["Phân lớp p", "3 AO (px, py, pz)", "6 electron", "p⁶"],
            ["Phân lớp d", "5 AO", "10 electron", "d¹⁰"],
            ["Phân lớp f", "7 AO", "14 electron", "f¹⁴"]
          ]
        }
      },
      {
        heading: "3. Ba nguyên lí – quy tắc phân bố electron & Cách viết Cấu hình electron",
        items: [
          "<strong>1. Nguyên lí vững bền:</strong> Ở trạng thái cơ bản, các electron lần lượt chiếm các orbital có mức năng lượng <strong>từ thấp đến cao</strong>: <strong>1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p...</strong> (Lưu ý: mức năng lượng 4s thấp hơn 3d nên điền 4s trước 3d, nhưng khi viết cấu hình phải xếp lại theo đúng thứ tự lớp 3d trước 4s).",
          "<strong>2. Nguyên lí ngăn cấm Pauli:</strong> Trên một orbital (1 ô vuông) chỉ có thể có <strong>tối đa 2 electron</strong> và hai electron này phải có chiều tự quay (spin) ngược nhau, biểu diễn bằng hai mũi tên ngược chiều (<strong>↑↓</strong> – electron ghép đôi; nếu có 1e thì viết <strong>↑</strong> – electron độc thân).",
          "<strong>3. Quy tắc Hund:</strong> Trong cùng một phân lớp chưa bão hòa (như p, d, f), các electron sẽ phân bố vào các orbital sao cho <strong>số electron độc thân là tối đa</strong> và các electron độc thân này phải có chiều mũi tên (spin) song song cùng hướng (↑ ↑ ↑) trước khi ghép đôi.",
          "<strong>Dự đoán tính chất hóa học cơ bản theo số electron lớp ngoài cùng:</strong><br>• Có <strong>1, 2, 3e</strong> lớp ngoài cùng: Thường là nguyên tử <strong>kim loại</strong> (trừ H có 1e, He có 2e là khí hiếm, B có 3e là phi kim).<br>• Có <strong>4e</strong> lớp ngoài cùng: Có thể là phi kim (C, Si) hoặc kim loại (Sn, Pb).<br>• Có <strong>5, 6, 7e</strong> lớp ngoài cùng: Thường là nguyên tử <strong>phi kim</strong>.<br>• Có <strong>8e</strong> lớp ngoài cùng (riêng He có 2e): Là nguyên tử <strong>khí hiếm</strong>, rất bền vững, hầu như không tham gia phản ứng hóa học."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Quy trình chuẩn viết cấu hình electron và biểu diễn vào ô orbital",
      detail: "<strong>Ví dụ 1: Oxygen (Z = 8):</strong> Cấu hình electron là <strong>1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup></strong>. Phân lớp ngoài cùng 2p<sup>4</sup> có 3 ô orbital: điền 3 mũi tên quay lên vào 3 ô trước, sau đó điền electron thứ 4 quay xuống vào ô đầu tiên → O có <strong>2 electron độc thân</strong>, có 6e lớp ngoài cùng nên là phi kim.<br><strong>Ví dụ 2: Potassium (K, Z = 19):</strong> Cấu hình đầy đủ <strong>1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>1</sup></strong> hay viết gọn theo khí hiếm <strong>[Ar]4s<sup>1</sup></strong>; phân bố theo lớp là (2, 8, 8, 1); thuộc nguyên tố họ s, có 1e lớp ngoài cùng nên là kim loại mạnh."
    },
    examplesAndMistakes: [
      "<strong>Phân biệt nguyên tố họ s, p, d, f:</strong> Dựa vào electron cuối cùng điền vào phân lớp nào theo chiều mức năng lượng. Ví dụ Fe (Z = 26) điền theo mức năng lượng: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>3d<sup>6</sup> → viết thành <strong>[Ar]3d<sup>6</sup>4s<sup>2</sup></strong>, electron cuối điền vào 3d nên Fe là nguyên tố họ d.",
      "<strong>Lỗi cần tránh:</strong> Ghép đôi electron trong phân lớp 2p<sup>2</sup> hoặc 2p<sup>3</sup> vào cùng một ô trước khi chia đều vào các ô trống (vi phạm quy tắc Hund)."
    ]
  },

  4: {
    num: 4,
    chapter: 1,
    title: "Ôn tập chương 1: Cấu tạo nguyên tử",
    pages: "tr. 26–27",
    isReview: true,
    subtitle: "Hệ thống hóa kiến thức hạt nhân – vỏ nguyên tử, đồng vị, nguyên tử khối trung bình, cấu hình electron 20 nguyên tố đầu và các lỗi sai thường gặp",
    diagramCaption: "Sơ đồ tư duy tổng kết Chương 1: Cấu tạo nguyên tử & Bảng cấu hình electron nguyên tử (Z = 1 đến Z = 20)",
    keyFormulas: [
      "Tổng hạt cơ bản trong nguyên tử trung hòa: <strong>S = p + n + e = 2Z + N</strong> (với nguyên tử có Z ≤ 82 thường thỏa: <strong>1 ≤ N/Z ≤ 1,52</strong>)",
      "Công thức nguyên tử khối trung bình: <strong>Ā = (Σ A<sub>i</sub> · x<sub>i</sub>) / 100</strong>",
      "Thứ tự mức năng lượng điền electron (Z ≤ 30): <strong>1s → 2s → 2p → 3s → 3p → 4s → 3d</strong>"
    ],
    sections: [
      {
        heading: "1. Bảng hệ thống hóa kiến thức trọng tâm Chương 1",
        items: [
          "<strong>Cấu tạo nguyên tử:</strong> Gồm hạt nhân (chứa proton mang điện +1, neutron không mang điện; tập trung hầu hết khối lượng nguyên tử) và vỏ electron (chứa các electron mang điện −1 chuyển động rất nhanh trong các AO).",
          "<strong>Nguyên tố hóa học & Đồng vị:</strong> Các nguyên tử có cùng Z thuộc cùng một nguyên tố hóa học. Đồng vị là các nguyên tử có cùng Z nhưng khác N (khác số khối A).",
          "<strong>Cấu trúc lớp vỏ electron:</strong> Gồm lớp (K, L, M, N...), phân lớp (s, p, d, f) và orbital nguyên tử (AO s hình cầu, AO p hình số 8 nổi). Phân bố electron tuân theo 3 nguyên lí/quy tắc: Vững bền, Pauli, Hund."
        ],
        table: {
          headers: ["Z", "Nguyên tố", "Cấu hình electron", "Số e lớp ngoài cùng", "Loại nguyên tố"],
          rows: [
            ["Z = 1; Z = 2", "H; He", "H: 1s¹  |  He: 1s²", "H: 1e  |  He: 2e", "H: Phi kim; He: Khí hiếm"],
            ["Z = 6; Z = 7; Z = 8", "C; N; O", "C: 1s²2s²2p² | N: 1s²2s²2p³ | O: 1s²2s²2p⁴", "4e; 5e; 6e", "Phi kim (họ p)"],
            ["Z = 11; Z = 12; Z = 13", "Na; Mg; Al", "Na: [Ne]3s¹ | Mg: [Ne]3s² | Al: [Ne]3s²3p¹", "1e; 2e; 3e", "Kim loại (họ s, p)"],
            ["Z = 15; Z = 16; Z = 17", "P; S; Cl", "P: [Ne]3s²3p³ | S: [Ne]3s²3p⁴ | Cl: [Ne]3s²3p⁵", "5e; 6e; 7e", "Phi kim (họ p)"],
            ["Z = 18; Z = 19; Z = 20", "Ar; K; Ca", "Ar: [Ne]3s²3p⁶ | K: [Ar]4s¹ | Ca: [Ar]4s²", "8e; 1e; 2e", "Ar: Khí hiếm; K, Ca: Kim loại"]
          ]
        }
      },
      {
        heading: "2. Các dạng bài tập cốt lõi & Lỗi sai cần tránh trong Chương 1",
        items: [
          "<strong>Dạng 1 – Tìm số hạt p, n, e khi biết tổng số hạt S và hiệu số hạt:</strong> Lập hệ phương trình <strong>2Z + N = S</strong> kết hợp với dữ kiện hạt mang điện (2Z) nhiều hơn hạt không mang điện (N) là k hạt: <strong>2Z − N = k</strong>.",
          "<strong>Dạng 2 – Bài toán đồng vị và phổ khối lượng:</strong> Từ phổ khối lượng đọc giá trị m/z (= A<sub>i</sub>) và % cường độ tương đối (= a<sub>i</sub>), thay vào công thức Ā. Hoặc từ Ā tìm % từng đồng vị rồi suy ra phần trăm khối lượng của một đồng vị trong phân tử hợp chất.",
          "<strong>Dạng 3 – Viết cấu hình electron, xác định số electron độc thân:</strong> Luôn vẽ ô orbital cho phân lớp chưa bão hòa ngoài cùng để đếm chính xác số electron độc thân theo quy tắc Hund.",
          "<strong>Bốn lỗi sai điển hình cần tránh:</strong> (1) Nhầm số khối A với số hiệu Z; (2) Nhầm hạt mang điện trong nguyên tử (gồm cả p và e, tức 2Z) với hạt mang điện trong hạt nhân (chỉ có p, tức Z); (3) Quên rằng <sup>1</sup><sub>1</sub>H không có neutron; (4) Ghép đôi electron phân lớp p trước khi điền độc thân."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Ghi nhớ nhanh số electron độc thân ở trạng thái cơ bản (Z ≤ 20)",
      detail: "• Cấu hình phân lớp ngoài cùng <strong>ns<sup>1</sup>, np<sup>1</sup>, np<sup>5</sup></strong> → có <strong>1 electron độc thân</strong>.<br>• Cấu hình <strong>np<sup>2</sup>, np<sup>4</sup></strong> → có <strong>2 electron độc thân</strong>.<br>• Cấu hình <strong>np<sup>3</sup></strong> (như N, P) → có <strong>3 electron độc thân</strong>.<br>• Cấu hình <strong>ns<sup>2</sup>, np<sup>6</sup></strong> → có <strong>0 electron độc thân</strong> (tất cả đã ghép đôi)."
    },
    examplesAndMistakes: [
      "<strong>Bài tập mẫu tổng hợp:</strong> Nguyên tử X có tổng số hạt p, n, e là 40; trong đó tổng số hạt mang điện nhiều hơn số hạt không mang điện là 12. Ta có hệ: 2Z + N = 40 và 2Z − N = 12 ⇒ Z = 13, N = 14, A = 27 (Aluminum – <sup>27</sup><sub>13</sub>Al, cấu hình 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup>)."
    ]
  },

  5: {
    num: 5,
    chapter: 2,
    title: "Cấu tạo của bảng tuần hoàn các nguyên tố hóa học",
    pages: "tr. 29–33",
    isReview: false,
    subtitle: "Lịch sử phát minh (Mendeleev), 3 nguyên tắc sắp xếp, cấu tạo Ô nguyên tố – Chu kì (7 chu kì) – Nhóm (8 nhóm A, 8 nhóm B) và mối liên hệ với cấu hình electron",
    diagramCaption: "Sơ đồ cấu tạo Ô nguyên tố, 7 Chu kì, 18 Cột (Nhóm A & Nhóm B), các khối nguyên tố s, p, d, f và Trục suy luận hai chiều Vị trí ↔ Cấu hình",
    keyFormulas: [
      "<strong>Số thứ tự ô nguyên tố = Số hiệu nguyên tử (Z) = Số proton = Số electron (nguyên tử trung hòa)</strong>",
      "<strong>Số thứ tự chu kì = Số lớp electron</strong> trong nguyên tử",
      "Với nguyên tố nhóm A (họ s, p): <strong>Số thứ tự nhóm A (IA → VIIIA) = Số electron lớp ngoài cùng</strong> (trừ He có 2e nhưng thuộc nhóm VIIIA)"
    ],
    sections: [
      {
        heading: "1. Lịch sử phát minh và 3 Nguyên tắc sắp xếp bảng tuần hoàn hiện đại",
        items: [
          "<strong>Lịch sử phát minh:</strong> Năm 1869, nhà hóa học người Nga <strong>D.I. Mendeleev</strong> (cùng thời với L. Meyer người Đức) công bố bảng tuần hoàn đầu tiên sắp xếp theo chiều tăng khối lượng nguyên tử và tiên đoán chính xác tính chất nhiều nguyên tố chưa tìm ra.",
          "<strong>Ba nguyên tắc sắp xếp của Bảng tuần hoàn hiện đại:</strong><br>1. Các nguyên tố được sắp xếp theo <strong>chiều tăng dần của điện tích hạt nhân nguyên tử (Z)</strong>.<br>2. Các nguyên tố có <strong>cùng số lớp electron</strong> trong nguyên tử được xếp thành một hàng ngang gọi là <strong>chu kì</strong>.<br>3. Các nguyên tố có <strong>cùng số electron hóa trị</strong> trong nguyên tử (có cấu hình electron hóa trị tương tự nhau, tính chất hóa học gần giống nhau) được xếp thành một cột dọc gọi là <strong>nhóm</strong>."
        ]
      },
      {
        heading: "2. Cấu tạo Bảng tuần hoàn: Ô nguyên tố – Chu kì – Nhóm",
        items: [
          "<strong>1. Ô nguyên tố:</strong> Mỗi nguyên tố hóa học được xếp vào 1 ô. Ô nguyên tố cung cấp các thông tin cơ bản: <em>Số hiệu nguyên tử (Z), Kí hiệu hóa học, Tên nguyên tố, Nguyên tử khối trung bình, Độ âm điện, Cấu hình electron và Số oxi hóa phổ biến</em>. <strong>Số thứ tự của ô nguyên tố luôn bằng số hiệu nguyên tử Z</strong>.",
          "<strong>2. Chu kì (Hàng ngang):</strong> Bảng tuần hoàn gồm <strong>7 chu kì</strong>, đánh số từ 1 đến 7:<br>• <strong>Chu kì nhỏ (Chu kì 1, 2, 3):</strong> Chu kì 1 có <strong>2 nguyên tố</strong> (H, He); Chu kì 2 có <strong>8 nguyên tố</strong> (Li → Ne); Chu kì 3 có <strong>8 nguyên tố</strong> (Na → Ar).<br>• <strong>Chu kì lớn (Chu kì 4, 5, 6, 7):</strong> Chu kì 4 và 5 mỗi chu kì có <strong>18 nguyên tố</strong>; Chu kì 6 và 7 mỗi chu kì có <strong>32 nguyên tố</strong> (bao gồm họ Lanthanide và Actinide xếp thành 2 hàng riêng ở cuối bảng).",
          "<strong>3. Nhóm nguyên tố (Cột dọc):</strong> Bảng tuần hoàn hiện đại có <strong>18 cột</strong> chia thành 8 nhóm A (đánh số IA đến VIIIA) và 8 nhóm B (đánh số IB đến VIIIB, riêng nhóm VIIIB chiếm 3 cột 8, 9, 10):<br>• <strong>Nhóm A (Nguyên tố đại diện):</strong> Gồm các nguyên tố thuộc khối <strong>s</strong> (nhóm IA, IIA) và khối <strong>p</strong> (từ nhóm IIIA đến VIIIA, trừ He là nguyên tố s).<br>• <strong>Nhóm B (Nguyên tố chuyển tiếp):</strong> Gồm các nguyên tố khối <strong>d</strong> và khối <strong>f</strong>, chỉ xuất hiện từ chu kì 4 trở đi."
        ],
        table: {
          headers: ["Tên nhóm A điển hình", "Vị trí nhóm", "Cấu hình e lớp ngoài cùng", "Đặc điểm tính chất nổi bật"],
          rows: [
            ["Kim loại kiềm", "Nhóm IA (trừ H)", "ns¹ (1e ngoài cùng)", "Kim loại hoạt động rất mạnh (Li, Na, K, Rb, Cs)"],
            ["Kim loại kiềm thổ", "Nhóm IIA", "ns² (2e ngoài cùng)", "Kim loại hoạt động mạnh (Be, Mg, Ca, Sr, Ba)"],
            ["Nhóm Halogen", "Nhóm VIIA", "ns²np⁵ (7e ngoài cùng)", "Phi kim điển hình, oxi hóa mạnh (F, Cl, Br, I)"],
            ["Nhóm Khí hiếm", "Nhóm VIIIA", "ns²np⁶ (riêng He: 1s²)", "Bền vững, tồn tại dạng nguyên tử đơn lẻ ở đk thường"]
          ]
        }
      },
      {
        heading: "3. Phân loại nguyên tố theo Cấu hình electron và Tính chất",
        items: [
          "<strong>Theo phân lớp electron cuối cùng được điền:</strong> Chia thành 4 khối nguyên tố <strong>s, p, d, f</strong>.<br>• <em>Khối s & p:</em> Tạo nên các nguyên tố nhóm A.<br>• <em>Khối d & f:</em> Tạo nên các nguyên tố nhóm B (kim loại chuyển tiếp).",
          "<strong>Theo tính chất hóa học:</strong> Chia thành <strong>Kim loại</strong> (chiếm hơn 80% tổng số nguyên tố, nằm ở bên trái, phía dưới và toàn bộ nhóm B), <strong>Phi kim</strong> (nằm ở góc trên bên phải bảng tuần hoàn, trừ H ở IA) và <strong>Khí hiếm</strong> (cột cuối cùng VIIIA)."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Quy tắc vàng suy luận hai chiều giữa Vị trí và Cấu hình electron (Nhóm A)",
      detail: "• <strong>Chiều thuận:</strong> Biết Z = 16 (Sulfur) → Cấu hình 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup> → Có 16e nên ở <strong>Ô 16</strong>; có 3 lớp e nên ở <strong>Chu kì 3</strong>; là nguyên tố p có 6e lớp ngoài cùng nên thuộc <strong>Nhóm VIA</strong>.<br>• <strong>Chiều ngược:</strong> Nguyên tố X ở Chu kì 3, Nhóm VA → Có 3 lớp electron, lớp ngoài cùng có 5e → Cấu hình electron là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>3</sup> (Z = 15, Phosphorus)."
    },
    examplesAndMistakes: [
      "<strong>Lỗi cần tránh:</strong> Nhầm Helium (He, Z = 2, cấu hình 1s<sup>2</sup>) thuộc nhóm IIA vì có 2e ngoài cùng — thực tế He là khí hiếm nên được xếp vào <strong>Nhóm VIIIA</strong>."
    ]
  },

  6: {
    num: 6,
    chapter: 2,
    title: "Xu hướng biến đổi một số tính chất của nguyên tử các nguyên tố trong một chu kì và trong một nhóm",
    pages: "tr. 34–39",
    isReview: false,
    subtitle: "Giải thích nguyên nhân và quy luật biến đổi bán kính nguyên tử (R), độ âm điện (χ), năng lượng ion hóa thứ nhất (I1), tính kim loại và tính phi kim",
    diagramCaption: "Sơ đồ tổng hợp quy luật biến đổi Bán kính nguyên tử, Độ âm điện, Năng lượng ion hóa, Tính kim loại & Tính phi kim theo Chu kì và Nhóm A",
    keyFormulas: [
      "Trong một <strong>Chu kì (Trái → Phải, Z tăng)</strong>: <strong>Bán kính R giảm • Tính kim loại giảm</strong>  |  <strong>Độ âm điện χ tăng • Năng lượng ion hóa I<sub>1</sub> tăng • Tính phi kim tăng</strong>",
      "Trong một <strong>Nhóm A (Trên → Dưới, Z tăng)</strong>: <strong>Bán kính R tăng • Tính kim loại tăng</strong>  |  <strong>Độ âm điện χ giảm • Năng lượng ion hóa I<sub>1</sub> giảm • Tính phi kim giảm</strong>",
      "Quá trình ion hóa thứ nhất: <strong>X(g) → X<sup>+</sup>(g) + e</strong>  (Năng lượng tối thiểu cần cung cấp là I<sub>1</sub>, đơn vị kJ/mol)"
    ],
    sections: [
      {
        heading: "1. Giải thích nguyên nhân gốc rễ của các xu hướng biến đổi",
        items: [
          "<strong>Khi đi từ trái sang phải trong một chu kì:</strong> Điện tích hạt nhân (Z) tăng dần nhưng <strong>số lớp electron giữ nguyên không đổi</strong> → lực hút tĩnh điện giữa hạt nhân với các electron lớp ngoài cùng <strong>mạnh dần lên</strong>, kéo lớp vỏ electron co lại gần hạt nhân hơn.",
          "<strong>Khi đi từ trên xuống dưới trong một nhóm A:</strong> Điện tích hạt nhân tăng nhưng <strong>số lớp electron tăng lên rõ rệt</strong>, đồng thời hiệu ứng chắn của các lớp electron bên trong tăng → khoảng cách từ hạt nhân tới electron lớp ngoài cùng lớn hơn nên lực hút của hạt nhân với electron ngoài cùng <strong>yếu dần đi</strong>."
        ],
        table: {
          headers: ["Đại lượng / Tính chất", "Trong một Chu kì (Trái → Phải)", "Trong một Nhóm A (Trên → Dưới)", "Nguyên tố cực trị (nhóm A)"],
          rows: [
            ["Bán kính nguyên tử (R)", "Giảm dần", "Tăng dần", "Nhỏ nhất: He, F; Lớn nhất: Cs, Fr"],
            ["Năng lượng ion hóa thứ nhất (I₁)", "Có xu hướng tăng", "Giảm dần", "Thấp ở kim loại kiềm (IA), rất cao ở khí hiếm"],
            ["Độ âm điện (χ – thang Pauling)", "Tăng dần", "Giảm dần", "Lớn nhất: F (χ = 3,98); Nhỏ nhất: Cs (χ = 0,79)"],
            ["Tính kim loại (nhường e)", "Giảm dần", "Tăng dần", "Mạnh nhất ở góc dưới bên trái (Cs / nhóm IA)"],
            ["Tính phi kim (nhận e)", "Tăng dần", "Giảm dần", "Mạnh nhất ở góc trên bên phải: Fluorine (F)"]
          ]
        }
      },
      {
        heading: "2. Khái niệm Độ âm điện, Năng lượng ion hóa, Tính kim loại và Tính phi kim",
        items: [
          "<strong>Năng lượng ion hóa thứ nhất (I<sub>1</sub>):</strong> Là năng lượng tối thiểu cần thiết để tách 1 electron ra khỏi nguyên tử ở trạng thái khí, không bị kích thích: <strong>X(g) → X<sup>+</sup>(g) + e</strong>. Nguyên tử càng dễ nhường electron (bán kính lớn) thì I<sub>1</sub> càng nhỏ.",
          "<strong>Độ âm điện (χ):</strong> Đặc trưng cho <strong>khả năng hút electron của nguyên tử khi hình thành liên kết hóa học</strong>. Theo thang Pauling, <strong>Fluorine (F)</strong> có độ âm điện lớn nhất (χ = 3,98).",
          "<strong>Tính kim loại:</strong> Là tính chất của một nguyên tố mà nguyên tử của nó dễ <strong>nhường electron</strong> để trở thành ion dương (cation: M → M<sup>n+</sup> + ne). Nguyên tử càng dễ nhường electron thì tính kim loại càng mạnh.",
          "<strong>Tính phi kim:</strong> Là tính chất của một nguyên tố mà nguyên tử của nó dễ <strong>nhận electron</strong> để trở thành ion âm (anion: X + ne → X<sup>n−</sup>). Nguyên tử càng dễ nhận electron thì tính phi kim càng mạnh."
        ]
      },
      {
        heading: "3. Thí nghiệm chứng minh xu hướng biến đổi tính kim loại và tính phi kim",
        items: [
          "<strong>Thí nghiệm 1 – So sánh tính kim loại của Na và Mg (cùng chu kì 3) với nước có phenolphthalein:</strong><br>• <em>Hiện tượng:</em> Mẫu Na (cỡ hạt đậu xanh) nóng chảy thành giọt tròn, chạy nhanh trên mặt nước, sủi bọt khí mạnh và dung dịch hóa hồng đậm ngay ở nhiệt độ thường (<strong>2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub>↑</strong>). Trong khi đó dây Mg đã cạo sạch lớp oxide hầu như không phản ứng với nước lạnh, chỉ phản ứng chậm khi đun nóng.<br>• <em>Kết luận:</em> Tính kim loại của <strong>Na > Mg</strong> (đúng quy luật giảm dần từ trái sang phải trong chu kì 3).",
          "<strong>Thí nghiệm 2 – So sánh tính phi kim (tính oxi hóa) của Cl và I (cùng nhóm VIIA):</strong><br>• <em>Hiện tượng:</em> Nhỏ nước chlorine (Cl<sub>2</sub>) vào ống nghiệm chứa dung dịch potassium iodide (KI) có sẵn vài giọt hồ tinh bột thì dung dịch lập tức chuyển sang màu xanh tím đặc trưng của iodine (<strong>Cl<sub>2</sub> + 2KI → 2KCl + I<sub>2</sub></strong>).<br>• <em>Kết luận:</em> Chlorine đẩy được iodine ra khỏi dung dịch muối iodide → Tính phi kim của <strong>Cl > I</strong> (đúng quy luật giảm dần từ trên xuống dưới trong nhóm VIIA)."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "An toàn thực hành bắt buộc khi làm thí nghiệm với Sodium (Na) và nước Chlorine",
      detail: "⚠️ <strong>Cảnh báo an toàn:</strong> Kim loại kiềm (Na, K) phản ứng mãnh liệt với nước và tỏa nhiệt lớn, có thể gây nổ bắn kiềm nóng bỏng mắt/da. Chỉ giáo viên thực hiện hoặc dùng mẫu Na cực nhỏ đã thấm khô dầu hỏa bằng giấy lọc, đeo kính bảo hộ, tuyệt đối không dùng tay trần cầm Na hay ném mẩu Na lớn vào nước."
    },
    examplesAndMistakes: [
      "<strong>Phương pháp so sánh nhanh 3 nguyên tố qua nguyên tố bắc cầu:</strong> Ví dụ so sánh tính kim loại của Na (Z=11, CK3-IA), Mg (Z=12, CK3-IIA) và K (Z=19, CK4-IA): Cùng chu kì 3 thì Na > Mg; cùng nhóm IA thì K > Na ⇒ Thứ tự tính kim loại tăng dần: <strong>Mg < Na < K</strong>."
    ]
  },

  7: {
    num: 7,
    chapter: 2,
    title: "Xu hướng biến đổi thành phần và tính chất của hợp chất trong một chu kì",
    pages: "tr. 40–42",
    isReview: false,
    subtitle: "Quy luật biến đổi hóa trị cao nhất với oxygen, công thức oxide cao nhất – hợp chất khí với hydrogen và xu hướng tính acid – base của oxide, hydroxide chu kì 3",
    diagramCaption: "Bảng biến đổi thành phần và tính chất Acid – Base của dãy Oxide và Hydroxide cao nhất các nguyên tố Chu kì 3 (Na → Cl)",
    keyFormulas: [
      "Nguyên tố thuộc <strong>Nhóm nA</strong> (I ≤ n ≤ VII, trừ F): Hóa trị cao nhất với oxygen bằng <strong>n</strong> → Oxide cao nhất: <strong>R<sub>2</sub>O<sub>n</sub></strong> (rút gọn nếu n chẵn)",
      "Với phi kim nhóm IVA → VIIA: Hóa trị với hydrogen là <strong>(8 − n)</strong> → Hợp chất khí với H: <strong>RH<sub>8−n</sub></strong>  (Tổng hóa trị: <strong>n + (8 − n) = 8</strong>)",
      "Trong một chu kì (Trái → Phải): <strong>Tính base của oxide và hydroxide cao nhất giảm dần, đồng thời tính acid của chúng tăng dần</strong>"
    ],
    sections: [
      {
        heading: "1. Xu hướng biến đổi thành phần của Oxide và Hydroxide cao nhất",
        items: [
          "Đi từ trái sang phải trong một chu kì (xét chu kì 2 và chu kì 3), <strong>hóa trị cao nhất của các nguyên tố nhóm A với oxygen tăng lần lượt từ I đến VII</strong> (bằng số thứ tự nhóm A, ngoại trừ Fluorine không có số oxi hóa dương do có độ âm điện lớn nhất).",
          "Tương ứng với oxide cao nhất của các nguyên tố chu kì 3 là dãy các hydroxide (hoặc oxoacid đối với phi kim, khi viết ở dạng hydrate hóa và rút gọn nước)."
        ],
        table: {
          headers: ["Nhóm A", "IA (Na)", "IIA (Mg)", "IIIA (Al)", "IVA (Si)", "VA (P)", "VIA (S)", "VIIA (Cl)"],
          rows: [
            ["Hóa trị cao nhất với O", "I", "II", "III", "IV", "V", "VI", "VII"],
            ["Công thức Oxide cao nhất", "Na₂O", "MgO", "Al₂O₃", "SiO₂", "P₂O₅", "SO₃", "Cl₂O₇"],
            ["Tính chất của Oxide", "Oxide base mạnh", "Oxide base", "Oxide lưỡng tính", "Oxide acid yếu", "Oxide acid trung bình", "Oxide acid mạnh", "Oxide acid rất mạnh"],
            ["Công thức Hydroxide / Acid", "NaOH", "Mg(OH)₂", "Al(OH)₃", "H₂SiO₃", "H₃PO₄", "H₂SO₄", "HClO₄"],
            ["Tính chất của Hydroxide", "Base mạnh (kiềm)", "Base yếu", "Hydroxide lưỡng tính", "Acid yếu", "Acid trung bình", "Acid mạnh", "Acid rất mạnh (mạnh nhất)"]
          ]
        }
      },
      {
        heading: "2. Xu hướng biến đổi tính Acid – Base của Oxide và Hydroxide trong một chu kì",
        items: [
          "<strong>Quy luật:</strong> Trong một chu kì, theo chiều tăng dần của điện tích hạt nhân (từ trái sang phải), <strong>tính base của oxide và hydroxide tương ứng giảm dần, đồng thời tính acid của chúng tăng dần</strong>.",
          "<strong>Minh họa qua các phương trình phản ứng ở Chu kì 3:</strong><br>• <strong>Na<sub>2</sub>O & NaOH:</strong> Na<sub>2</sub>O tan hoàn toàn trong nước tạo dung dịch kiềm mạnh làm quỳ tím hóa xanh: <strong>Na<sub>2</sub>O + H<sub>2</sub>O → 2NaOH</strong>.<br>• <strong>MgO & Mg(OH)<sub>2</sub>:</strong> Phản ứng yếu hơn với nước, Mg(OH)<sub>2</sub> là base yếu ít tan.<br>• <strong>Al<sub>2</sub>O<sub>3</sub> & Al(OH)<sub>3</sub> (Chất lưỡng tính):</strong> Vừa tác dụng được với dung dịch acid mạnh (HCl), vừa tác dụng được với dung dịch kiềm mạnh (NaOH):<br>  <strong>Al(OH)<sub>3</sub> + 3HCl → AlCl<sub>3</sub> + 3H<sub>2</sub>O</strong>  và  <strong>Al(OH)<sub>3</sub> + NaOH → Na[Al(OH)<sub>4</sub>]</strong> (hoặc viết NaAlO<sub>2</sub> + 2H<sub>2</sub>O).<br>• <strong>P<sub>2</sub>O<sub>5</sub>, SO<sub>3</sub>, Cl<sub>2</sub>O<sub>7</sub>:</strong> Tác dụng với nước tạo các acid có độ mạnh tăng dần: H<sub>3</sub>PO<sub>4</sub> < H<sub>2</sub>SO<sub>4</sub> < HClO<sub>4</sub>."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Bài toán thực tế: Tính phần trăm khối lượng nguyên tố trong Oxide cao nhất & Hợp chất khí với H",
      detail: "Nếu nguyên tố R thuộc nhóm VA → hợp chất khí với H là <strong>RH<sub>3</sub></strong>, công thức oxide cao nhất là <strong>R<sub>2</sub>O<sub>5</sub></strong>. Khi đề bài cho % khối lượng của R hoặc O trong oxide cao nhất (hoặc trong RH<sub>8−n</sub>), ta thiết lập tỉ lệ khối lượng mol để giải tìm nguyên tử khối M<sub>R</sub> và tên nguyên tố R."
    },
    examplesAndMistakes: [
      "<strong>Ví dụ tính toán:</strong> Nguyên tố R thuộc nhóm VIA. Trong oxide cao nhất (RO<sub>3</sub>), oxygen chiếm 60% về khối lượng. Ta có: 48 / (M<sub>R</sub> + 48) = 0,60 ⇒ M<sub>R</sub> = 32 (g/mol) ⇒ R là <strong>Sulfur (S)</strong>.",
      "<strong>Lỗi cần tránh:</strong> Viết công thức hydroxide cao nhất của S là S(OH)<sub>6</sub> hay của Cl là Cl(OH)<sub>7</sub> trong phương trình — phải chuyển về dạng oxoacid bền là <strong>H<sub>2</sub>SO<sub>4</sub></strong> và <strong>HClO<sub>4</sub></strong>."
    ]
  },

  8: {
    num: 8,
    chapter: 2,
    title: "Định luật tuần hoàn. Ý nghĩa của bảng tuần hoàn các nguyên tố hóa học",
    pages: "tr. 43–44",
    isReview: false,
    subtitle: "Phát biểu hoàn chỉnh Định luật tuần hoàn và phương pháp suy luận hai chiều giữa Vị trí nguyên tố – Cấu tạo nguyên tử – Tính chất hóa học",
    diagramCaption: "Sơ đồ tam giác vàng Ý nghĩa Bảng tuần hoàn: Vị trí nguyên tố ↔ Cấu tạo nguyên tử ↔ Tính chất đơn chất & hợp chất",
    keyFormulas: [
      "<strong>Định luật tuần hoàn:</strong> Tính chất của các nguyên tố và đơn chất, cũng như thành phần và tính chất của các hợp chất tạo nên từ các nguyên tố đó, <strong>biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân nguyên tử</strong>.",
      "Suy luận cốt lõi: <strong>Vị trí (Ô, Chu kì, Nhóm)  ⇄  Cấu tạo nguyên tử (Z, số lớp e, số e ngoài cùng)  ⇄  Tính chất hóa học (Kim loại/Phi kim, Oxide/Hydroxide, So sánh với nguyên tố lân cận)</strong>"
    ],
    sections: [
      {
        heading: "1. Định luật tuần hoàn các nguyên tố hóa học",
        items: [
          "<strong>Nguyên nhân của sự biến đổi tuần hoàn:</strong> Khi điện tích hạt nhân (Z) tăng dần, cấu hình electron lớp ngoài cùng của nguyên tử các nguyên tố (số electron hóa trị từ 1 đến 8) được <strong>lặp đi lặp lại một cách tuần hoàn sau mỗi chu kì</strong>. Chính sự biến đổi tuần hoàn của cấu hình electron lớp ngoài cùng là nguyên nhân quyết định sự biến đổi tuần hoàn tính chất hóa học của các nguyên tố.",
          "<strong>Nội dung Định luật tuần hoàn:</strong> <em>“Tính chất của các nguyên tố và đơn chất, cũng như thành phần và tính chất của các hợp chất tạo nên từ các nguyên tố đó, biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân nguyên tử.”</em>"
        ]
      },
      {
        heading: "2. Ý nghĩa của Bảng tuần hoàn các nguyên tố hóa học",
        items: [
          "<strong>Chiều 1 – Biết vị trí nguyên tố trong bảng tuần hoàn → Suy ra cấu tạo và tính chất:</strong><br>• Từ số thứ tự ô, chu kì, nhóm A → suy ra số proton, số electron, số lớp electron và số electron lớp ngoài cùng.<br>• Từ số electron lớp ngoài cùng → dự đoán nguyên tố là kim loại, phi kim hay khí hiếm; xác định hóa trị cao nhất với oxygen, hóa trị với hydrogen, công thức và tính acid – base của oxide/hydroxide cao nhất.<br>• So sánh tính chất hóa học của nguyên tố đó với các nguyên tố lân cận trong cùng chu kì và cùng nhóm.",
          "<strong>Chiều 2 – Biết cấu tạo nguyên tử → Suy ra vị trí và tính chất:</strong> Từ số hiệu Z hoặc cấu hình electron → xác định chính xác ô, chu kì, nhóm và dự đoán toàn bộ tính chất hóa học cơ bản của nguyên tố."
        ],
        table: {
          headers: ["Dữ kiện đề bài cho (Ví dụ: Nguyên tố P ở Ô 15, Chu kì 3, Nhóm VA)", "Suy ra Cấu tạo nguyên tử", "Suy ra Tính chất nguyên tố & Hợp chất"],
          rows: [
            ["Ô số 15", "Z = 15 → có 15 proton, 15 electron", "Cấu hình e: 1s²2s²2p⁶3s²3p³"],
            ["Chu kì 3", "Có 3 lớp electron (K, L, M)", "Bán kính: R(Si) > R(P) > R(S)"],
            ["Nhóm VA", "Có 5 electron lớp ngoài cùng", "Là phi kim; tính phi kim: Si < P < S và N > P > As"],
            ["Hợp chất tiêu biểu", "Hóa trị cao nhất với O là V; với H là III", "Oxide cao nhất P₂O₅ (oxide acid); H₃PO₄ (acid trung bình); hợp chất khí PH₃"]
          ]
        }
      }
    ],
    experimentsAndSafety: {
      title: "Kĩ năng vận dụng so sánh một nguyên tố với 4 nguyên tố xung quanh trong Bảng tuần hoàn",
      detail: "Khi xét nguyên tố X và 4 nguyên tố lân cận (trái, phải cùng chu kì; trên, dưới cùng nhóm A): hãy vẽ một hình chữ nhật 3×3 lấy X làm tâm để thấy ngay chiều mũi tên tăng/giảm bán kính, độ âm điện và tính kim loại – phi kim mà không bao giờ bị nhầm dấu."
    },
    examplesAndMistakes: [
      "<strong>Ví dụ vận dụng:</strong> Nguyên tố Sulfur (S, Z = 16) nằm ở ô 16, chu kì 3, nhóm VIA. Xung quanh S có P (Z=15), Cl (Z=17) cùng chu kì 3 và O (Z=8), Se (Z=34) cùng nhóm VIA. Tính phi kim của S mạnh hơn P và Se, nhưng yếu hơn O và Cl."
    ]
  },

  9: {
    num: 9,
    chapter: 2,
    title: "Ôn tập chương 2: Bảng tuần hoàn và định luật tuần hoàn",
    pages: "tr. 45–47",
    isReview: true,
    subtitle: "Tổng hợp cấu tạo bảng tuần hoàn, quy luật biến đổi tính chất nguyên tử – hợp chất và phương pháp giải các dạng toán trọng tâm Chương 2",
    diagramCaption: "Bản đồ tổng kết quy luật biến đổi toàn diện Chương 2 & Sơ đồ giải bài toán 2 nguyên tố kế tiếp trong Chu kì / Nhóm A",
    keyFormulas: [
      "Hai nguyên tố thuộc <strong>2 ô liên tiếp trong cùng một chu kì</strong>: <strong>Z<sub>B</sub> − Z<sub>A</sub> = 1</strong>",
      "Hai nguyên tố thuộc <strong>2 chu kì liên tiếp trong cùng một nhóm A</strong>: <strong>Z<sub>B</sub> − Z<sub>A</sub> = 8</strong> (chu kì nhỏ 2, 3) hoặc <strong>18</strong> (chu kì lớn) hoặc <strong>32</strong>",
      "Tỉ lệ khối lượng trong Oxide cao nhất R<sub>2</sub>O<sub>n</sub>: <strong>%m<sub>O</sub> = (16n / (2M<sub>R</sub> + 16n)) × 100%</strong>"
    ],
    sections: [
      {
        heading: "1. Tóm tắt hệ thống lý thuyết cốt lõi Chương 2",
        items: [
          "<strong>Cấu tạo bảng tuần hoàn:</strong> Số thứ tự ô = Z; Số thứ tự chu kì = số lớp electron (7 chu kì: 3 nhỏ, 4 lớn); Số thứ tự nhóm A = số electron lớp ngoài cùng.",
          "<strong>Quy luật biến đổi trong một chu kì (Trái → Phải):</strong> Bán kính nguyên tử giảm, tính kim loại giảm, tính base của oxide/hydroxide giảm; độ âm điện tăng, năng lượng ion hóa I<sub>1</sub> tăng, tính phi kim tăng, tính acid của oxide/hydroxide tăng.",
          "<strong>Quy luật biến đổi trong một nhóm A (Trên → Dưới):</strong> Bán kính nguyên tử tăng, tính kim loại tăng; độ âm điện giảm, năng lượng ion hóa I<sub>1</sub> giảm, tính phi kim giảm."
        ]
      },
      {
        heading: "2. Ba dạng bài tập tính toán đặc trưng của Chương 2",
        items: [
          "<strong>Dạng 1 – Xác định nguyên tố từ công thức Oxide cao nhất và Hợp chất khí với Hydrogen:</strong><br>• Bước 1: Từ công thức hợp chất khí với H là RH<sub>a</sub> suy ra hóa trị cao nhất với oxygen là <strong>b = 8 − a</strong> → công thức oxide cao nhất là <strong>R<sub>2</sub>O<sub>b</sub></strong>.<br>• Bước 2: Dựa vào % khối lượng của R hoặc O để lập phương trình tìm M<sub>R</sub>.",
          "<strong>Dạng 2 – Bài toán hai nguyên tố kế tiếp nhau trong cùng một chu kì hoặc cùng một nhóm A:</strong><br>• Nếu A, B kế tiếp trong cùng một chu kì và tổng số proton Z<sub>A</sub> + Z<sub>B</sub> = S ⇒ Giải hệ Z<sub>A</sub> + Z<sub>B</sub> = S và Z<sub>B</sub> − Z<sub>A</sub> = 1.<br>• Nếu A, B thuộc hai chu kì liên tiếp trong cùng một nhóm A (thường có tổng Z ≤ 38) ⇒ Giải hệ Z<sub>A</sub> + Z<sub>B</sub> = S và Z<sub>B</sub> − Z<sub>A</sub> = 8 (hoặc 18).",
          "<strong>Dạng 3 – Bài toán kim loại kiềm (nhóm IA) hoặc kiềm thổ (nhóm IIA) tác dụng với nước / dung dịch acid:</strong><br>• Kim loại nhóm IA (hóa trị I): <strong>2M + 2H<sub>2</sub>O → 2MOH + H<sub>2</sub>↑</strong> (số mol M = 2n<sub>H2</sub>).<br>• Kim loại nhóm IIA (hóa trị II): <strong>M + 2HCl → MCl<sub>2</sub> + H<sub>2</sub>↑</strong> (số mol M = n<sub>H2</sub>). Nếu là hai kim loại kế tiếp cùng nhóm, tính khối lượng mol trung bình M̄ = m<sub>hh</sub> / n<sub>hh</sub> rồi suy ra hai kim loại có M<sub>1</sub> < M̄ < M<sub>2</sub>."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Mẹo giải thích tự luận các câu hỏi so sánh xu hướng trong đề thi",
      detail: "Khi trả lời câu hỏi tự luận giải thích vì sao bán kính / độ âm điện / tính kim loại biến đổi: luôn trình bày đủ 3 ý: (1) Xác định vị trí (cùng chu kì hay cùng nhóm A); (2) Nêu sự thay đổi của <strong>điện tích hạt nhân Z</strong> và <strong>số lớp electron</strong>; (3) Suy ra sự thay đổi <strong>lực hút giữa hạt nhân với electron lớp ngoài cùng</strong>."
    },
    examplesAndMistakes: [
      "<strong>Ví dụ mẫu:</strong> Hòa tan hoàn toàn 6,2 g hỗn hợp hai kim loại kiềm thuộc hai chu kì liên tiếp vào nước thu được 2,479 L khí H<sub>2</sub> (ở đkc: 25°C, 1 bar, 1 mol khí = 24,79 L). Số mol H<sub>2</sub> = 0,1 mol ⇒ n<sub>kim loại</sub> = 2 × 0,1 = 0,2 mol ⇒ M̄ = 6,2 / 0,2 = 31 g/mol. Hai kim loại kiềm kế tiếp có M<sub>1</sub> < 31 < M<sub>2</sub> là <strong>Sodium (Na = 23) và Potassium (K = 39)</strong>."
    ]
  },

  10: {
    num: 10,
    chapter: 3,
    title: "Quy tắc octet",
    pages: "tr. 48–50",
    isReview: false,
    subtitle: "Khái niệm liên kết hóa học, vai trò của electron hóa trị, nội dung Quy tắc octet (bộ tám electron), quy tắc bộ đôi (duet) với H và các trường hợp ngoại lệ",
    diagramCaption: "Sơ đồ cơ chế đạt cấu hình bền khí hiếm theo Quy tắc Octet: Nhường – Nhận electron (NaF) và Góp chung electron (Cl2, H2O)",
    keyFormulas: [
      "<strong>Quy tắc Octet (Bộ tám):</strong> Khi hình thành liên kết hóa học, nguyên tử của các nguyên tố có xu hướng <strong>nhường, nhận hoặc góp chung electron</strong> để đạt tới cấu hình electron bền vững của nguyên tử khí hiếm với <strong>8 electron ở lớp ngoài cùng</strong> (hoặc 2 electron ở lớp ngoài cùng như khí hiếm Helium đối với Hydrogen, Lithium).",
      "Kim loại (1, 2, 3e ngoài cùng): <strong>Nhường 1, 2, 3e</strong> → đạt octet ở lớp sát trong",
      "Phi kim (5, 6, 7e ngoài cùng): <strong>Nhận 3, 2, 1e</strong> hoặc <strong>góp chung (8 − n) electron</strong> → đạt octet"
    ],
    sections: [
      {
        heading: "1. Khái niệm Liên kết hóa học và Electron hóa trị",
        items: [
          "<strong>Liên kết hóa học:</strong> Là sự kết hợp giữa các nguyên tử tạo thành phân tử hay tinh thể bền vững hơn. Khi các nguyên tử liên kết với nhau, hệ phân tử tạo thành luôn có <strong>mức năng lượng thấp hơn</strong> tổng năng lượng của các nguyên tử riêng rẽ ban đầu.",
          "<strong>Electron hóa trị:</strong> Là các electron có khả năng tham gia vào việc hình thành liên kết hóa học. Đối với các nguyên tố nhóm A, electron hóa trị chính là <strong>các electron ở lớp ngoài cùng</strong>."
        ]
      },
      {
        heading: "2. Nội dung Quy tắc Octet và 2 con đường đạt cấu hình bền khí hiếm",
        items: [
          "Nguyên tử các khí hiếm (nhóm VIIIA) có 8 electron lớp ngoài cùng (riêng He có 2e) nên rất bền vững, hầu như không tham gia phản ứng hóa học ở điều kiện thường.",
          "<strong>Nội dung Quy tắc Octet (G.N. Lewis, 1916):</strong> <em>Trong quá trình hình thành liên kết hóa học, nguyên tử của các nguyên tố nhóm A có xu hướng nhường, nhận hoặc góp chung electron để đạt tới cấu hình electron bền vững của nguyên tử khí hiếm gần nhất với 8 electron ở lớp ngoài cùng (hoặc 2 electron như Helium).</em>",
          "<strong>Con đường 1 – Nhường và Nhận electron (Tạo ion):</strong><br>• Nguyên tử Sodium (Na, Z=11: 2, 8, 1) nhường 1e ở lớp ngoài cùng để tạo ion Na<sup>+</sup> có cấu hình bền (2, 8) giống khí hiếm Neon.<br>• Nguyên tử Fluorine (F, Z=9: 2, 7) nhận 1e để tạo ion F<sup>−</sup> có cấu hình bền (2, 8) giống khí hiếm Neon.",
          "<strong>Con đường 2 – Góp chung cặp electron (Tạo phân tử cộng hóa trị):</strong><br>• Trong phân tử Cl<sub>2</sub>: Mỗi nguyên tử Cl (có 7e ngoài cùng) góp chung 1 electron tạo thành 1 cặp electron dùng chung → cả hai nguyên tử Cl đều đạt đủ 8e lớp ngoài cùng.<br>• Trong phân tử H<sub>2</sub>O: Nguyên tử O (6e ngoài cùng) góp chung 2e với 2 nguyên tử H → O đạt đủ 8e (octet), còn mỗi nguyên tử H đạt 2e bền vững như khí hiếm He."
        ]
      },
      {
        heading: "3. Các trường hợp ngoại lệ của Quy tắc Octet",
        items: [
          "Quy tắc octet rất hữu ích cho các nguyên tố chu kì 2 (như C, N, O, F), nhưng <strong>không áp dụng máy móc cho mọi hợp chất</strong>. Một số ngoại lệ tiêu biểu:<br>• <strong>Thiếu octet (Ít hơn 8e):</strong> Phân tử BeH<sub>2</sub> (Be có 4e), BF<sub>3</sub> hoặc AlCl<sub>3</sub> (nguyên tử trung tâm B, Al chỉ có 6e xung quanh).<br>• <strong>Số lẻ electron (Gốc tự do):</strong> Phân tử NO (tổng 11e hóa trị), NO<sub>2</sub> (tổng 17e hóa trị).<br>• <strong>Mở rộng octet (Nhiều hơn 8e ở nguyên tố chu kì 3 trở đi có phân lớp d trống):</strong> Phân tử PCl<sub>5</sub> (P có 10e xung quanh), SF<sub>6</sub> (S có 12e xung quanh)."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Cách kiểm tra nhanh một nguyên tử đã thỏa mãn Quy tắc Octet hay chưa",
      detail: "Khi kiểm tra công thức Lewis của một phân tử: tổng số electron xung quanh mỗi nguyên tử bằng <strong>(Số electron thuộc các cặp liên kết dùng chung với nó) + (Số electron tự do chưa tham gia liên kết của riêng nó)</strong>. Nếu tổng này bằng <strong>8</strong> (hoặc bằng <strong>2</strong> đối với nguyên tử H) thì nguyên tử đó thỏa mãn quy tắc octet."
    },
    examplesAndMistakes: [
      "<strong>Ví dụ minh họa:</strong> Trong phân tử Nitrogen (N<sub>2</sub>), mỗi nguyên tử N (nhóm VA, có 5e ngoài cùng) cần thêm 3e để đạt 8e, nên hai nguyên tử N góp chung 3 cặp electron tạo liên kết ba (<strong>:N≡N:</strong>). Mỗi nguyên tử N có 6e dùng chung + 2e riêng = 8e (đạt octet)."
    ]
  },

  11: {
    num: 11,
    chapter: 3,
    title: "Liên kết ion",
    pages: "tr. 50–54",
    isReview: false,
    subtitle: "Sự tạo thành cation, anion, bản chất lực hút tĩnh điện của liên kết ion, cấu trúc mạng tinh thể NaCl và tính chất vật lí đặc trưng của hợp chất ion",
    diagramCaption: "Sơ đồ nhường – nhận electron tạo liên kết ion trong NaCl, CaCl2 và Cấu trúc mạng tinh thể lập phương tâm diện của NaCl (Số phối trí 6:6)",
    keyFormulas: [
      "Sự tạo thành <strong>Cation (Ion dương)</strong>: <strong>M (kim loại) → M<sup>n+</sup> + n·e</strong>  (Số e của M<sup>n+</sup> = Z<sub>M</sub> − n)",
      "Sự tạo thành <strong>Anion (Ion âm)</strong>: <strong>X (phi kim) + m·e → X<sup>m−</sup></strong>  (Số e của X<sup>m−</sup> = Z<sub>X</sub> + m)",
      "Phương trình tạo liên kết ion: <strong>m·M<sup>n+</sup> + n·X<sup>m−</sup> → M<sub>m</sub>X<sub>n</sub></strong> (Lực hút tĩnh điện giữa các ion trái dấu)"
    ],
    sections: [
      {
        heading: "1. Sự tạo thành Ion (Cation và Anion) & Phân loại Ion",
        items: [
          "<strong>Sự tạo thành Cation (Ion dương):</strong> Khi nguyên tử kim loại nhường đi n electron hóa trị thì trở thành ion dương mang điện tích n+ (<strong>M → M<sup>n+</sup> + ne</strong>). Tên gọi: <em>Ion + tên kim loại</em> (kèm hóa trị La Mã nếu kim loại có nhiều hóa trị, như Fe<sup>2+</sup> là ion sắt(II), Fe<sup>3+</sup> là ion sắt(III)).",
          "<strong>Sự tạo thành Anion (Ion âm):</strong> Khi nguyên tử phi kim nhận thêm m electron thì trở thành ion âm mang điện tích m− (<strong>X + me → X<sup>m−</sup></strong>). Tên anion đơn nguyên tử thường có đuôi <strong>-ide</strong> (Cl<sup>−</sup>: chloride; S<sup>2−</sup>: sulfide; O<sup>2−</sup>: oxide).",
          "<strong>Ion đơn nguyên tử và Ion đa nguyên tử:</strong><br>• <em>Ion đơn nguyên tử:</em> Tạo nên từ 1 nguyên tử mang điện (Na<sup>+</sup>, Mg<sup>2+</sup>, Al<sup>3+</sup>, F<sup>−</sup>, Cl<sup>−</sup>, O<sup>2−</sup>).<br>• <em>Ion đa nguyên tử:</em> Là nhóm các nguyên tử liên kết cộng hóa trị với nhau nhưng mang điện tích chung: <strong>NH<sub>4</sub><sup>+</sup> (ammonium), OH<sup>−</sup> (hydroxide), NO<sub>3</sub><sup>−</sup> (nitrate), CO<sub>3</sub><sup>2−</sup> (carbonate), HCO<sub>3</sub><sup>−</sup> (hydrogencarbonate), SO<sub>4</sub><sup>2−</sup> (sulfate), PO<sub>4</sub><sup>3−</sup> (phosphate)</strong>."
        ]
      },
      {
        heading: "2. Sự hình thành Liên kết ion",
        items: [
          "<strong>Khái niệm:</strong> <strong>Liên kết ion</strong> là liên kết được hình thành bởi <strong>lực hút tĩnh điện giữa các ion mang điện tích trái dấu</strong> (thường hình thành giữa kim loại điển hình và phi kim điển hình, có hiệu độ âm điện Δχ ≥ 1,7).",
          "<strong>Ví dụ 1 – Phân tử Sodium chloride (NaCl):</strong><br>• Quá trình nhường – nhận e: <strong>Na → Na<sup>+</sup> + 1e</strong> và <strong>Cl + 1e → Cl<sup>−</sup></strong>.<br>• Các ion trái dấu hút nhau: <strong>Na<sup>+</sup> + Cl<sup>−</sup> → NaCl</strong>.",
          "<strong>Ví dụ 2 – Phân tử Calcium chloride (CaCl<sub>2</sub>):</strong><br>• Một nguyên tử Ca (Z=20) nhường 2e cho hai nguyên tử Cl (Z=17, mỗi nguyên tử Cl nhận 1e): <strong>Ca → Ca<sup>2+</sup> + 2e</strong> và <strong>2Cl + 2e → 2Cl<sup>−</sup></strong>.<br>• Hút tĩnh điện: <strong>Ca<sup>2+</sup> + 2Cl<sup>−</sup> → CaCl<sub>2</sub></strong>."
        ]
      },
      {
        heading: "3. Tinh thể Ion và Tính chất chung của Hợp chất Ion",
        items: [
          "<strong>Cấu trúc mạng tinh thể Ion (Điển hình là tinh thể NaCl):</strong> Ở điều kiện thường, các hợp chất ion tồn tại ở dạng tinh thể rắn. Trong mạng tinh thể NaCl, các ion Na<sup>+</sup> và Cl<sup>−</sup> phân bố luân phiên có trật tự tại các nút mạng lập phương tâm diện: <strong>xung quanh mỗi ion Na<sup>+</sup> có 6 ion Cl<sup>−</sup> gần nhất và xung quanh mỗi ion Cl<sup>−</sup> có 6 ion Na<sup>+</sup> gần nhất</strong>.",
          "<strong>Giải thích các tính chất vật lí đặc trưng của hợp chất ion:</strong><br>• <strong>Trạng thái rắn, nhiệt độ nóng chảy và nhiệt độ sôi rất cao:</strong> Do lực hút tĩnh điện giữa các ion trái dấu trong mạng tinh thể rất lớn (ví dụ NaCl nóng chảy ở 801°C, MgO nóng chảy ở 2852°C).<br>• <strong>Khá cứng nhưng giòn (dễ vỡ khi chịu lực tác động mạnh):</strong> Khi tác dụng lực làm trượt một lớp tinh thể, các ion cùng dấu bị đẩy tới đối diện nhau gây lực đẩy tĩnh điện mạnh làm tinh thể tách vỡ.<br>• <strong>Khả năng dẫn điện:</strong> Ở <strong>trạng thái rắn khan, hợp chất ion KHÔNG dẫn điện</strong> (vì các ion bị giữ chặt tại nút mạng, không di chuyển tự do được). Nhưng khi <strong>nóng chảy hoặc hòa tan trong nước</strong>, mạng tinh thể bị phá vỡ tạo các ion chuyển động tự do nên <strong>dẫn điện tốt</strong>."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Lưu ý về tính tan của các muối Ion trong nước",
      detail: "Đa số hợp chất ion tan nhiều trong dung môi phân cực như nước, nhưng có những ngoại lệ không tan hoặc rất ít tan thường dùng để nhận biết ion trong phòng thí nghiệm như: <strong>AgCl↓ (trắng), AgBr↓ (vàng nhạt), AgI↓ (vàng đậm), BaSO<sub>4</sub>↓ (trắng), CaCO<sub>3</sub>↓ (trắng)</strong>."
    },
    examplesAndMistakes: [
      "<strong>Dãy các vi hạt đẳng electron (cùng có 10 electron giống khí hiếm Ne):</strong> <strong>N<sup>3−</sup>, O<sup>2−</sup>, F<sup>−</sup>, Ne, Na<sup>+</sup>, Mg<sup>2+</sup>, Al<sup>3+</sup></strong> đều có cấu hình 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>. Trong dãy ion đẳng electron này, khi điện tích hạt nhân Z tăng từ 7 (N) đến 13 (Al) thì bán kính ion giảm dần: <strong>R(N<sup>3−</sup>) > R(O<sup>2−</sup>) > R(F<sup>−</sup>) > R(Na<sup>+</sup>) > R(Mg<sup>2+</sup>) > R(Al<sup>3+</sup>)</strong>."
    ]
  },

  12: {
    num: 12,
    chapter: 3,
    title: "Liên kết cộng hóa trị",
    pages: "tr. 54–63",
    isReview: false,
    subtitle: "Cặp electron dùng chung, công thức electron – Lewis – cấu tạo, liên kết cho – nhận, hiệu độ âm điện Δχ, sự xen phủ orbital tạo liên kết σ, π và năng lượng liên kết (Eb)",
    diagramCaption: "Sơ đồ Công thức Lewis của các phân tử tiêu biểu (HCl, O2, N2, CO2, NH4+) và Sự xen phủ trục (liên kết σ) – xen phủ bên (liên kết π)",
    keyFormulas: [
      "Phân loại liên kết theo hiệu độ âm điện <strong>Δχ = |χ<sub>A</sub> − χ<sub>B</sub>|</strong> (quy ước gần đúng):<br>• <strong>0 ≤ Δχ < 0,4</strong>: Liên kết cộng hóa trị không phân cực<br>• <strong>0,4 ≤ Δχ < 1,7</strong>: Liên kết cộng hóa trị phân cực<br>• <strong>Δχ ≥ 1,7</strong>: Liên kết ion",
      "Thành phần liên kết theo sự xen phủ AO: <strong>Liên kết đơn (–) = 1σ</strong>  •  <strong>Liên kết đôi (=) = 1σ + 1π</strong>  •  <strong>Liên kết ba (≡) = 1σ + 2π</strong>",
      "Năng lượng liên kết <strong>E<sub>b</sub> (kJ/mol)</strong> càng lớn → Liên kết càng bền vững"
    ],
    sections: [
      {
        heading: "1. Sự hình thành Liên kết cộng hóa trị & Ba loại công thức biểu diễn",
        items: [
          "<strong>Khái niệm:</strong> <strong>Liên kết cộng hóa trị</strong> là liên kết được hình thành giữa hai nguyên tử bằng <strong>một hay nhiều cặp electron dùng chung</strong> (thường giữa các nguyên tử phi kim với nhau).",
          "<strong>Ba cách biểu diễn phân tử cộng hóa trị:</strong><br>1. <strong>Công thức electron:</strong> Biểu diễn tất cả các cặp electron dùng chung và các cặp electron hóa trị riêng của từng nguyên tử bằng các dấu chấm (·).<br>2. <strong>Công thức Lewis:</strong> Thay mỗi cặp electron dùng chung bằng 1 gạch nối (–), đồng thời <strong>giữ nguyên các cặp electron hóa trị chưa tham gia liên kết</strong> xung quanh các nguyên tử.<br>3. <strong>Công thức cấu tạo:</strong> Chỉ biểu diễn các liên kết đơn (–), đôi (=), ba (≡) bằng gạch nối, lược bỏ các cặp electron riêng.",
          "<strong>Liên kết cho – nhận (Liên kết phối trí):</strong> Là trường hợp đặc biệt của liên kết cộng hóa trị mà trong đó <strong>cặp electron dùng chung chỉ do một nguyên tử đóng góp (nguyên tử cho)</strong> vào orbital trống của nguyên tử kia (nguyên tử nhận), biểu diễn bằng mũi tên (<strong>→</strong>) trong công thức cấu tạo. <em>Ví dụ kinh điển:</em> Khi NH<sub>3</sub> kết hợp với H<sup>+</sup> tạo ion <strong>NH<sub>4</sub><sup>+</sup></strong>, nguyên tử N dùng cặp electron chưa liên kết cho vào AO 1s trống của H<sup>+</sup> (sau khi hình thành, cả 4 liên kết N–H trong NH<sub>4</sub><sup>+</sup> đều hoàn toàn tương đương nhau). Các phân tử có liên kết cho – nhận khác: <strong>CO, SO<sub>2</sub>, SO<sub>3</sub>, HNO<sub>3</sub></strong>."
        ],
        table: {
          headers: ["Phân tử", "Số cặp e dùng chung", "Công thức cấu tạo", "Bậc liên kết & Thành phần σ, π", "Loại liên kết"],
          rows: [
            ["H₂; Cl₂", "1 cặp e dùng chung", "H – H  |  Cl – Cl", "Liên kết đơn (1σ)", "CHT không phân cực (Δχ = 0)"],
            ["HCl; H₂O", "1 cặp e trên mỗi liên kết", "H – Cl  |  H – O – H", "Liên kết đơn (1σ)", "CHT phân cực"],
            ["O₂", "2 cặp e dùng chung", "O = O", "Liên kết đôi (1σ + 1π)", "CHT không phân cực"],
            ["CO₂", "Mỗi C=O có 2 cặp e", "O = C = O (thẳng hàng)", "2 liên kết đôi (2σ + 2π)", "Liên kết C=O phân cực, phân tử không phân cực"],
            ["N₂", "3 cặp e dùng chung", "N ≡ N", "Liên kết ba (1σ + 2π)", "CHT không phân cực (Eb = 945 kJ/mol rất bền)"]
          ]
        }
      },
      {
        heading: "2. Độ âm điện và Sự phân cực của liên kết cộng hóa trị",
        items: [
          "<strong>Liên kết cộng hóa trị không phân cực:</strong> Cặp electron dùng chung nằm chính giữa hai nguyên tử (không bị hút lệch về phía nguyên tử nào), thường gặp ở các đơn chất (H<sub>2</sub>, Cl<sub>2</sub>, O<sub>2</sub>, N<sub>2</sub>) hoặc khi <strong>0 ≤ Δχ < 0,4</strong> (như liên kết C–H trong CH<sub>4</sub> có Δχ = 2,55 − 2,20 = 0,35).",
          "<strong>Liên kết cộng hóa trị phân cực:</strong> Cặp electron dùng chung bị <strong>hút lệch về phía nguyên tử có độ âm điện lớn hơn</strong> (thường khi <strong>0,4 ≤ Δχ < 1,7</strong>), ví dụ trong H<sup>δ+</sup>–Cl<sup>δ−</sup>, H<sub>2</sub>O, NH<sub>3</sub>.",
          "<strong>Lưu ý quan trọng về cấu trúc không gian của CO<sub>2</sub>:</strong> Trong phân tử CO<sub>2</sub> (O=C=O), mỗi liên kết C=O là liên kết cộng hóa trị phân cực (O hút e mạnh hơn C), nhưng do phân tử CO<sub>2</sub> có <strong>cấu tạo thẳng (góc liên kết 180°)</strong> nên hai vector độ phân cực ngược chiều và bằng nhau đã <strong>triệt tiêu hoàn toàn</strong> → phân tử CO<sub>2</sub> không phân cực."
        ]
      },
      {
        heading: "3. Sự xen phủ Orbital nguyên tử (Liên kết σ và Liên kết π) & Năng lượng liên kết",
        items: [
          "<strong>Sự xen phủ trục → Tạo liên kết Sigma (σ):</strong> Các orbital nguyên tử xen phủ với nhau <strong>dọc theo trục nối hai hạt nhân</strong> (gồm xen phủ s–s như trong H<sub>2</sub>, xen phủ s–p như trong HF/HCl, xen phủ trục p–p như trong Cl<sub>2</sub>). Vùng xen phủ nằm trên trục liên kết nên <strong>liên kết σ rất bền vững</strong> và hai nguyên tử có thể quay tự do quanh trục liên kết đơn.",
          "<strong>Sự xen phủ bên → Tạo liên kết Pi (π):</strong> Hai orbital p có trục song song nhau xen phủ với nhau ở <strong>hai phía của trục nối tâm hai hạt nhân</strong>. Do mật độ xen phủ nhỏ hơn xen phủ trục nên <strong>liên kết π kém bền hơn liên kết σ</strong>.",
          "<strong>Năng lượng liên kết (E<sub>b</sub>):</strong> Là năng lượng cần thiết để <strong>phá vỡ 1 mol liên kết xác định trong phân tử ở thể khí</strong> (tại 25°C, 1 bar) tạo thành các nguyên tử ở thể khí. Đơn vị: <strong>kJ/mol</strong>. Giá trị E<sub>b</sub> càng lớn thì liên kết hóa học đó càng bền (ví dụ E<sub>b</sub>(N≡N) = 945 kJ/mol rất lớn nên khí N<sub>2</sub> rất trơ ở nhiệt độ thường)."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Thực hành lắp ráp mô hình phân tử rỗng và đặc (CH4, C2H4, C2H2, C2H5OH, CH3COOH)",
      detail: "• <strong>Methane (CH<sub>4</sub>):</strong> Cấu trúc tứ diện đều, góc liên kết H–C–H = 109,5°, gồm 4 liên kết đơn (4σ).<br>• <strong>Ethylene (C<sub>2</sub>H<sub>4</sub>, CH<sub>2</sub>=CH<sub>2</sub>):</strong> Phân tử phẳng, góc liên kết ≈ 120°, có 1 liên kết đôi C=C và 4 liên kết đơn C–H → Tổng cộng <strong>5 liên kết σ và 1 liên kết π</strong>.<br>• <strong>Acetylene (C<sub>2</sub>H<sub>2</sub>, HC≡CH):</strong> Phân tử thẳng (180°), có 1 liên kết ba C≡C và 2 liên kết đơn C–H → Tổng cộng <strong>3 liên kết σ và 2 liên kết π</strong>."
    },
    examplesAndMistakes: [
      "<strong>Ngoại lệ của quy ước hiệu độ âm điện Δχ:</strong> Quy tắc Δχ chỉ mang tính tương đối. Ví dụ phân tử <strong>HF</strong> có Δχ = 3,98 − 2,20 = 1,78 (≥ 1,7) nhưng liên kết trong HF vẫn là <strong>liên kết cộng hóa trị phân cực mạnh</strong> (do H không thể mất hẳn electron tạo hạt nhân trần H<sup>+</sup> tự do trong phân tử khí). Ngược lại, <strong>AlCl<sub>3</sub></strong> dù tạo từ kim loại Al và phi kim Cl nhưng có Δχ = 3,16 − 1,61 = 1,55 (< 1,7) nên mang bản chất <strong>liên kết cộng hóa trị phân cực</strong>."
    ]
  },

  13: {
    num: 13,
    chapter: 3,
    title: "Liên kết hydrogen và tương tác van der Waals",
    pages: "tr. 64–67",
    isReview: false,
    subtitle: "Điều kiện hình thành liên kết hydrogen, giải thích tính chất bất thường của nước, bản chất tương tác van der Waals và ảnh hưởng đến nhiệt độ nóng chảy, nhiệt độ sôi",
    diagramCaption: "Sơ đồ Liên kết Hydrogen giữa các phân tử H2O, HF, NH3, C2H5OH và Tương tác lưỡng cực tức thời – lưỡng cực cảm ứng van der Waals",
    keyFormulas: [
      "Điều kiện tạo <strong>Liên kết Hydrogen (···)</strong>: Nguyên tử <strong>H phải liên kết trực tiếp với nguyên tử có độ âm điện lớn (F, O, N)</strong> và nguyên tử F, O, N ở phân tử lân cận phải có <strong>ít nhất 1 cặp electron hóa trị chưa tham gia liên kết</strong>",
      "Độ bền liên kết: <strong>Liên kết Ion / Cộng hóa trị  ≫  Liên kết Hydrogen  >  Tương tác van der Waals</strong>",
      "Tương tác van der Waals tăng khi: <strong>Khối lượng phân tử (tổng số electron, kích thước phân tử) tăng</strong> và <strong>diện tích bề mặt tiếp xúc tăng (mạch thẳng > mạch phân nhánh)</strong>"
    ],
    sections: [
      {
        heading: "1. Liên kết Hydrogen: Bản chất, Điều kiện và Ảnh hưởng",
        items: [
          "<strong>Khái niệm:</strong> Liên kết hydrogen là một loại liên kết yếu được hình thành giữa nguyên tử <strong>H (đã liên kết với một nguyên tử có độ âm điện lớn, thường là F, O, N)</strong> với một nguyên tử khác có độ âm điện lớn (F, O, N) còn <strong>cặp electron hóa trị chưa tham gia liên kết</strong>. Biểu diễn bằng <strong>dấu ba chấm (···)</strong>.",
          "<strong>Các chất tạo được liên kết hydrogen điển hình:</strong> <strong>H<sub>2</sub>O, HF, NH<sub>3</sub>, rượu (alcohol: R–OH như C<sub>2</sub>H<sub>5</sub>OH), carboxylic acid (R–COOH như CH<sub>3</sub>COOH)</strong>, protein, DNA. Liên kết hydrogen có thể hình thành giữa các phân tử cùng loại hoặc giữa các phân tử chất tan với nước (làm C<sub>2</sub>H<sub>5</sub>OH, NH<sub>3</sub> tan vô hạn/rất tốt trong nước).",
          "<strong>Giải thích các tính chất đặc biệt của Nước (H<sub>2</sub>O):</strong><br>• Mỗi phân tử H<sub>2</sub>O có 2 nguyên tử H<sup>δ+</sup> và 2 cặp electron riêng trên O<sup>δ−</sup> nên có thể tạo <strong>tối đa 4 liên kết hydrogen</strong> với 4 phân tử H<sub>2</sub>O xung quanh → làm nước có <strong>nhiệt độ sôi cao bất thường (100°C)</strong> so với H<sub>2</sub>S (−60,7°C), CH<sub>4</sub> (−161,6°C).<br>• <strong>Vì sao nước đá nổi trên mặt nước lỏng và nước có khối lượng riêng lớn nhất ở 4°C?</strong> Trong tinh thể nước đá (ở 0°C), các liên kết hydrogen giữ các phân tử H<sub>2</sub>O trong cấu trúc tứ diện có nhiều khoảng trống (cấu trúc rỗng) nên khối lượng riêng của nước đá (0,917 g/cm<sup>3</sup>) nhỏ hơn nước lỏng → nước đá nổi trên nước. Khi tăng nhiệt độ từ 0°C lên 4°C, một phần liên kết hydrogen bị đứt làm cấu trúc rỗng sụp đổ, các phân tử xếp sít nhau hơn nên khối lượng riêng đạt cực đại (1,00 g/cm<sup>3</sup> ở 4°C); trên 4°C sự giãn nở nhiệt chiếm ưu thế làm khối lượng riêng giảm dần."
        ]
      },
      {
        heading: "2. Tương tác van der Waals và Ảnh hưởng đến Nhiệt độ sôi",
        items: [
          "<strong>Bản chất:</strong> Do các electron chuyển động không ngừng trong nguyên tử/phân tử nên tại một thời điểm bất kì có sự phân bố electron không đều, xuất hiện <strong>lưỡng cực tức thời</strong>; lưỡng cực tức thời này làm phân cực các phân tử lân cận tạo thành <strong>lưỡng cực cảm ứng</strong>. Lực hút tĩnh điện yếu giữa các lưỡng cực (cố định hoặc tức thời – cảm ứng) được gọi là <strong>tương tác van der Waals</strong>.",
          "<strong>Hai yếu tố quyết định độ mạnh của tương tác van der Waals:</strong><br>1. <strong>Kích thước và khối lượng phân tử (Tổng số electron):</strong> Khi khối lượng phân tử và số electron tăng lên, đám mây electron càng dễ bị biến dạng phân cực → tương tác van der Waals càng mạnh → <strong>nhiệt độ nóng chảy và nhiệt độ sôi tăng dần</strong>. <em>Ví dụ:</em><br>  • Dãy khí hiếm: He (−269°C) < Ne (−246°C) < Ar (−186°C) < Kr (−153°C) < Xe (−108°C).<br>  • Dãy đơn chất halogen: <strong>F<sub>2</sub> (khí) < Cl<sub>2</sub> (khí) < Br<sub>2</sub> (lỏng) < I<sub>2</sub> (rắn)</strong>.<br>2. <strong>Hình dạng phân tử (Diện tích bề mặt tiếp xúc):</strong> Giữa các đồng phân có cùng công thức phân tử (như C<sub>5</sub>H<sub>12</sub>), phân tử có <strong>mạch carbon không phân nhánh (pentane, t<sub>s</sub> = 36,1°C)</strong> có diện tích bề mặt tiếp xúc giữa các phân tử lớn hơn so với phân tử phân nhánh dạng cầu <strong>(neopentane, t<sub>s</sub> = 9,5°C)</strong> → tương tác van der Waals mạnh hơn → nhiệt độ sôi cao hơn."
        ],
        table: {
          headers: ["Dãy chất so sánh", "Thứ tự Nhiệt độ sôi (t°s)", "Giải thích nguyên nhân chính"],
          rows: [
            ["H₂O vs H₂S", "t°s(H₂O = 100°C) > t°s(H₂S = −60,7°C)", "H₂O tạo được liên kết hydrogen liên phân tử bền hơn nhiều so với H₂S"],
            ["C₂H₅OH vs CH₃OCH₃ (cùng M = 46)", "t°s(C₂H₅OH = 78,3°C) > t°s(CH₃OCH₃ = −24°C)", "C₂H₅OH có nhóm –OH tạo được liên kết hydrogen liên phân tử, còn ether thì không"],
            ["CH₃COOH vs C₂H₅OH", "t°s(CH₃COOH = 118°C) > t°s(C₂H₅OH = 78,3°C)", "Liên kết hydrogen của acid bền hơn (O trong –COOH phân cực mạnh hơn và tạo dimer vòng)"],
            ["F₂ < Cl₂ < Br₂ < I₂", "Tăng dần từ F₂ (−188°C) đến I₂ (+184°C)", "Khối lượng phân tử và số electron tăng → tương tác van der Waals tăng mạnh"],
            ["Pentane vs Neopentane (C₅H₁₂)", "t°s(pentane = 36,1°C) > t°s(neopentane = 9,5°C)", "Pentane mạch thẳng có diện tích tiếp xúc lớn hơn neopentane mạch nhánh"]
          ]
        }
      }
    ],
    experimentsAndSafety: {
      title: "Ứng dụng sinh học thú vị của tương tác van der Waals: Chân tắc kè bám trên tường kính",
      detail: "Dưới bàn chân tắc kè có hàng triệu sợi lông cực nhỏ (setae), mỗi sợi lại chia thành hàng trăm nhánh nano (spatulae) làm tăng diện tích tiếp xúc với bề mặt kính lên mức tối đa. Tổng hợp hàng tỉ tương tác van der Waals giữa các sợi nano này với mặt kính tạo ra lực bám lớn giúp tắc kè di chuyển dễ dàng trên trần kính nhẵn bóng."
    },
    examplesAndMistakes: [
      "<strong>Lỗi cần tránh khi biểu diễn liên kết hydrogen giữa H<sub>2</sub>O và NH<sub>3</sub>:</strong> Chỉ nối nét đứt (···) giữa nguyên tử <strong>H<sup>δ+</sup></strong> của phân tử này với nguyên tử <strong>O<sup>δ−</sup> hoặc N<sup>δ−</sup></strong> (nơi có cặp electron chưa liên kết) của phân tử kia; tuyệt đối không nối nét đứt giữa H với H hoặc giữa O với N."
    ]
  },

  14: {
    num: 14,
    chapter: 3,
    title: "Ôn tập chương 3: Liên kết hóa học",
    pages: "tr. 68–69",
    isReview: true,
    subtitle: "Bảng đối chiếu toàn diện 3 loại liên kết trong phân tử (Ion – Cộng hóa trị không cực – Cộng hóa trị phân cực) và 2 loại tương tác liên phân tử (Hydrogen – van der Waals)",
    diagramCaption: "Sơ đồ tổng hợp và phân biệt các loại Liên kết hóa học & Tương tác liên phân tử trong Chương 3",
    keyFormulas: [
      "Quy trình so sánh nhiệt độ sôi các chất: <strong>Chất tạo liên kết Ion (rất cao)  >  Chất tạo liên kết Hydrogen (Acid > Alcohol > Nước/Amine > Aldehyde/Ester)  >  Chất chỉ có tương tác van der Waals (Phân tử khối lớn hơn, mạch thẳng hơn thì sôi cao hơn)</strong>",
      "Số liên kết trong hợp chất hữu cơ mạch hở C<sub>x</sub>H<sub>y</sub>: Tổng số liên kết σ = <strong>x + y − 1</strong>"
    ],
    sections: [
      {
        heading: "1. Bảng so sánh tổng hợp Liên kết Ion và Liên kết Cộng hóa trị",
        items: [
          "Chương 3 giúp giải thích vì sao các nguyên tử kết hợp với nhau thành phân tử/tinh thể và vì sao các chất có trạng thái, nhiệt độ nóng chảy, nhiệt độ sôi và độ tan khác nhau."
        ],
        table: {
          headers: ["Tiêu chí so sánh", "Liên kết Ion", "Liên kết CHT phân cực", "Liên kết CHT không phân cực"],
          rows: [
            ["Bản chất liên kết", "Lực hút tĩnh điện giữa các ion mang điện tích trái dấu (nhường – nhận e)", "Dùng chung cặp electron, nhưng cặp e bị lệch về nguyên tử có độ âm điện lớn hơn", "Dùng chung cặp electron, cặp e nằm chính giữa hai nguyên tử"],
            ["Thành phần nguyên tố", "Kim loại điển hình + Phi kim điển hình", "Hai nguyên tử phi kim khác nhau", "Hai nguyên tử phi kim giống nhau (hoặc C–H)"],
            ["Hiệu độ âm điện (Δχ)", "Thường Δχ ≥ 1,7", "Thường 0,4 ≤ Δχ < 1,7", "Thường 0 ≤ Δχ < 0,4"],
            ["Cấu trúc & Trạng thái ở đk thường", "Mạng tinh thể ion bền vững; chất rắn ở điều kiện thường", "Cấu trúc phân tử (hoặc tinh thể nguyên tử); khí, lỏng hoặc rắn", "Cấu trúc phân tử; đa số là chất khí ở đk thường (trừ Br₂, I₂, S, P, C)"],
            ["Nhiệt độ nóng chảy, nhiệt độ sôi", "Rất cao (NaCl: 801°C, MgO: 2852°C)", "Thấp hơn chất ion; cao hơn nếu có liên kết hydrogen", "Thấp (phụ thuộc tương tác van der Waals)"],
            ["Tính dẫn điện", "Rắn khan không dẫn điện; nóng chảy hoặc dung dịch dẫn điện tốt", "Dung dịch trong nước có thể dẫn điện (nếu điện li như HCl)", "Không dẫn điện ở mọi trạng thái"]
          ]
        }
      },
      {
        heading: "2. Tổng kết kỹ năng giải bài tập Chương 3",
        items: [
          "<strong>Kỹ năng 1 – Viết công thức Lewis & đếm số cặp electron dùng chung / chưa liên kết:</strong> Xác định số electron lớp ngoài cùng của mỗi nguyên tử (bằng số thứ tự nhóm A), tính số electron cần góp chung để đạt 8e (hoặc 2e với H).",
          "<strong>Kỹ năng 2 – Đếm số liên kết σ và π trong phân tử:</strong> Mọi liên kết đơn đều là 1σ; mỗi liên kết đôi có 1σ + 1π; mỗi liên kết ba có 1σ + 2π.",
          "<strong>Kỹ năng 3 – Sắp xếp nhiệt độ sôi và giải thích độ tan:</strong> Kiểm tra xem chất có tạo được liên kết hydrogen liên phân tử hay không trước, sau đó mới so sánh khối lượng phân tử M và mức độ phân nhánh theo tương tác van der Waals."
        ]
      }
    ],
    experimentsAndSafety: {
      title: "Lưu ý các hợp chất vừa có liên kết ion vừa có liên kết cộng hóa trị",
      detail: "Trong các muối chứa ion đa nguyên tử như <strong>NH<sub>4</sub>Cl, NaNO<sub>3</sub>, CaCO<sub>3</sub>, K<sub>2</sub>SO<sub>4</sub>, NaOH</strong>: liên kết giữa cation (NH<sub>4</sub><sup>+</sup>, Na<sup>+</sup>, Ca<sup>2+</sup>, K<sup>+</sup>) với anion (Cl<sup>−</sup>, NO<sub>3</sub><sup>−</sup>, CO<sub>3</sub><sup>2−</sup>, SO<sub>4</sub><sup>2−</sup>, OH<sup>−</sup>) là <strong>liên kết ion</strong>; còn liên kết giữa các nguyên tử bên trong ion đa nguyên tử (như liên kết N–H, N–O, C–O, S–O, O–H) là <strong>liên kết cộng hóa trị</strong>."
    },
    examplesAndMistakes: [
      "<strong>Ví dụ tổng hợp:</strong> Sắp xếp theo chiều tăng dần nhiệt độ sôi của các chất: CH<sub>4</sub> (M=16), SiH<sub>4</sub> (M=32), NH<sub>3</sub> (M=17), H<sub>2</sub>O (M=18).<br><em>Giải:</em> CH<sub>4</sub> và SiH<sub>4</sub> không có liên kết hydrogen, M(SiH<sub>4</sub>) > M(CH<sub>4</sub>) nên t<sub>s</sub>(CH<sub>4</sub>) < t<sub>s</sub>(SiH<sub>4</sub>). NH<sub>3</sub> và H<sub>2</sub>O đều có liên kết hydrogen, nhưng O có độ âm điện lớn hơn N và H<sub>2</sub>O tạo nhiều liên kết hydrogen hơn nên t<sub>s</sub>(NH<sub>3</sub>) < t<sub>s</sub>(H<sub>2</sub>O). Thứ tự tăng dần: <strong>CH<sub>4</sub> < SiH<sub>4</sub> < NH<sub>3</sub> < H<sub>2</sub>O</strong>."
    ]
  }
};

module.exports = { chapters, lessonsP1 };
