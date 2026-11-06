// 99 câu hỏi trắc nghiệm Toán 11 - Kết nối tri thức với cuộc sống (3 câu/bài x 33 bài: Nhận biết -> Áp dụng -> Vận dụng)

const quizzes = {
  1: [
    {
      q: "Trên đường tròn lượng giác tâm \\(O\\), bán kính \\(R = 1\\), điểm cuối \\(M\\) của góc lượng giác \\(\\alpha\\) có tọa độ là:",
      options: [
        "\\(M(\\sin\\alpha; \\cos\\alpha)\\)",
        "\\(M(\\cos\\alpha; \\sin\\alpha)\\)",
        "\\(M(-\\cos\\alpha; \\sin\\alpha)\\)",
        "\\(M(\\tan\\alpha; \\cot\\alpha)\\)"
      ],
      ans: 1,
      exp: "Theo định nghĩa trên đường tròn lượng giác đơn vị, hoành độ điểm \\(M\\) là \\(x_M = \\cos\\alpha\\) và tung độ điểm \\(M\\) là \\(y_M = \\sin\\alpha\\), nên \\(M(\\cos\\alpha; \\sin\\alpha)\\)."
    },
    {
      q: "Cho \\(\\sin\\alpha = \\frac{3}{5}\\) và \\(\\frac{\\pi}{2} < \\alpha < \\pi\\). Giá trị của \\(\\cos\\alpha\\) và \\(\\tan\\alpha\\) lần lượt là:",
      options: [
        "\\(\\cos\\alpha = \\frac{4}{5};\\; \\tan\\alpha = \\frac{3}{4}\\)",
        "\\(\\cos\\alpha = -\\frac{4}{5};\\; \\tan\\alpha = -\\frac{3}{4}\\)",
        "\\(\\cos\\alpha = -\\frac{4}{5};\\; \\tan\\alpha = -\\frac{4}{3}\\)",
        "\\(\\cos\\alpha = \\frac{2}{5};\\; \\tan\\alpha = \\frac{3}{2}\\)"
      ],
      ans: 1,
      exp: "Vì \\(\\alpha \\in \\left(\\frac{\\pi}{2}; \\pi\\right)\\) (góc phần tư thứ II) nên \\(\\cos\\alpha < 0\\). Ta có \\(\\cos\\alpha = -\\sqrt{1 - \\sin^2\\alpha} = -\\sqrt{1 - \\frac{9}{25}} = -\\frac{4}{5}\\). Suy ra \\(\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = -\\frac{3}{4}\\)."
    },
    {
      q: "Một bánh xe có bán kính \\(R = 40\\text{ cm}\\) quay được một góc \\(135^\\circ\\). Độ dài cung tròn \\(l\\) mà một điểm trên vành bánh xe đã đi được là:",
      options: [
        "\\(30\\pi\\text{ cm}\\)",
        "\\(45\\pi\\text{ cm}\\)",
        "\\(60\\pi\\text{ cm}\\)",
        "\\(15\\pi\\text{ cm}\\)"
      ],
      ans: 0,
      exp: "Đổi góc sang radian: \\(\\alpha = 135^\\circ \\cdot \\frac{\\pi}{180^\\circ} = \\frac{3\\pi}{4}\\text{ rad}\\). Độ dài cung tròn là \\(l = R\\alpha = 40 \\cdot \\frac{3\\pi}{4} = 30\\pi\\text{ cm}\\)."
    }
  ],
  2: [
    {
      q: "Trong các công thức lượng giác dưới đây, công thức nào là ĐÚNG?",
      options: [
        "\\(\\cos(a + b) = \\cos a\\cos b + \\sin a\\sin b\\)",
        "\\(\\cos(a - b) = \\cos a\\cos b + \\sin a\\sin b\\)",
        "\\(\\sin(a - b) = \\sin a\\cos b + \\cos a\\sin b\\)",
        "\\(\\cos 2a = 2\\sin^2 a - 1\\)"
      ],
      ans: 1,
      exp: "Theo công thức cộng: \\(\\cos(a - b) = \\cos a\\cos b + \\sin a\\sin b\\) và \\(\\cos(a + b) = \\cos a\\cos b - \\sin a\\sin b\\). Còn \\(\\cos 2a = 1 - 2\\sin^2 a = 2\\cos^2 a - 1\\)."
    },
    {
      q: "Cho \\(\\cos\\alpha = -\\frac{1}{3}\\). Giá trị của biểu thức \\(\\cos 2\\alpha\\) bằng:",
      options: [
        "\\(-\\frac{7}{9}\\)",
        "\\(\\frac{7}{9}\\)",
        "\\(-\\frac{2}{9}\\)",
        "\\(\\frac{1}{9}\\)"
      ],
      ans: 0,
      exp: "Áp dụng công thức nhân đôi \\(\\cos 2\\alpha = 2\\cos^2\\alpha - 1 = 2\\left(-\\frac{1}{3}\\right)^2 - 1 = \\frac{2}{9} - 1 = -\\frac{7}{9}\\)."
    },
    {
      q: "Rút gọn biểu thức \\(P = \\frac{\\sin 5x + \\sin x}{\\cos 5x + \\cos x}\\) (với điều kiện biểu thức có nghĩa), ta được kết quả là:",
      options: [
        "\\(\\tan 3x\\)",
        "\\(\\cot 3x\\)",
        "\\(\\tan 2x\\)",
        "\\(\\sin 3x\\)"
      ],
      ans: 0,
      exp: "Áp dụng công thức biến đổi tổng thành tích: \\(\\sin 5x + \\sin x = 2\\sin 3x\\cos 2x\\) và \\(\\cos 5x + \\cos x = 2\\cos 3x\\cos 2x\\). Do đó \\(P = \\frac{2\\sin 3x\\cos 2x}{2\\cos 3x\\cos 2x} = \\tan 3x\\)."
    }
  ],
  3: [
    {
      q: "Tập xác định \\(D\\) và chu kì tuần hoàn \\(T_0\\) của hàm số \\(y = \\tan x\\) lần lượt là:",
      options: [
        "\\(D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\};\\; T_0 = \\pi\\)",
        "\\(D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi \\mid k \\in \\mathbb{Z}\\right\\};\\; T_0 = \\pi\\)",
        "\\(D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k2\\pi \\mid k \\in \\mathbb{Z}\\right\\};\\; T_0 = 2\\pi\\)",
        "\\(D = \\mathbb{R};\\; T_0 = \\pi\\)"
      ],
      ans: 1,
      exp: "Hàm số \\(y = \\tan x = \\frac{\\sin x}{\\cos x}\\) xác định khi \\(\\cos x \\ne 0 \\iff x \\ne \\frac{\\pi}{2} + k\\pi\\; (k \\in \\mathbb{Z})\\), và có chu kì tuần hoàn cơ sở \\(T_0 = \\pi\\)."
    },
    {
      q: "Giá trị lớn nhất \\(M\\) và giá trị nhỏ nhất \\(m\\) của hàm số \\(y = 3 - 2\\cos 4x\\) trên \\(\\mathbb{R}\\) là:",
      options: [
        "\\(M = 5;\\; m = 1\\)",
        "\\(M = 3;\\; m = 1\\)",
        "\\(M = 5;\\; m = -5\\)",
        "\\(M = 7;\\; m = -1\\)"
      ],
      ans: 0,
      exp: "Vì \\(-1 \\le \\cos 4x \\le 1, \\forall x \\in \\mathbb{R}\\) nên \\(-2 \\le -2\\cos 4x \\le 2 \\implies 1 \\le 3 - 2\\cos 4x \\le 5\\). Vậy \\(M = 5\\) (khi \\(\\cos 4x = -1\\)) và \\(m = 1\\) (khi \\(\\cos 4x = 1\\))."
    },
    {
      q: "Mực nước \\(h\\) (m) tại một cửa biển theo thời gian \\(t\\) (giờ, \\(0 \\le t \\le 24\\)) được cho bởi \\(h(t) = 4 + 2\\cos\\left(\\frac{\\pi t}{6}\\right)\\). Chu kì lên xuống của thủy triều và độ sâu mực nước lớn nhất lần lượt là:",
      options: [
        "Chu kì 12 giờ; mực nước lớn nhất 6 m",
        "Chu kì 6 giờ; mực nước lớn nhất 6 m",
        "Chu kì 12 giờ; mực nước lớn nhất 4 m",
        "Chu kì 24 giờ; mực nước lớn nhất 8 m"
      ],
      ans: 0,
      exp: "Chu kì \\(T = \\frac{2\\pi}{\\pi/6} = 12\\) (giờ). Mực nước lớn nhất \\(h_{\\max} = 4 + 2 = 6\\text{ m}\\) (đạt được khi \\(\\cos(\\frac{\\pi t}{6}) = 1 \\iff t = 0, 12, 24\\) giờ)."
    }
  ],
  4: [
    {
      q: "Tập nghiệm của phương trình \\(\\cos x = \\frac{1}{2}\\) là:",
      options: [
        "\\(S = \\left\\{\\pm\\frac{\\pi}{6} + k2\\pi \\mid k \\in \\mathbb{Z}\\right\\}\\)",
        "\\(S = \\left\\{\\pm\\frac{\\pi}{3} + k2\\pi \\mid k \\in \\mathbb{Z}\\right\\}\\)",
        "\\(S = \\left\\{\\frac{\\pi}{3} + k2\\pi;\\; \\frac{2\\pi}{3} + k2\\pi \\mid k \\in \\mathbb{Z}\\right\\}\\)",
        "\\(S = \\left\\{\\pm\\frac{\\pi}{3} + k\\pi \\mid k \\in \\mathbb{Z}\\right\\}\\)"
      ],
      ans: 1,
      exp: "Ta có \\(\\cos x = \\frac{1}{2} = \\cos\\frac{\\pi}{3} \\iff x = \\pm\\frac{\\pi}{3} + k2\\pi\\; (k \\in \\mathbb{Z})\\)."
    },
    {
      q: "Phương trình \\(\\sin\\left(2x - \\frac{\\pi}{4}\\right) = 1\\) có các họ nghiệm là:",
      options: [
        "\\(x = \\frac{3\\pi}{8} + k\\pi \\; (k \\in \\mathbb{Z})\\)",
        "\\(x = \\frac{3\\pi}{8} + k2\\pi \\; (k \\in \\mathbb{Z})\\)",
        "\\(x = \\frac{\\pi}{8} + k\\pi \\; (k \\in \\mathbb{Z})\\)",
        "\\(x = \\frac{3\\pi}{4} + k2\\pi \\; (k \\in \\mathbb{Z})\\)"
      ],
      ans: 0,
      exp: "Vì \\(\\sin u = 1 \\iff u = \\frac{\\pi}{2} + k2\\pi\\) nên \\(2x - \\frac{\\pi}{4} = \\frac{\\pi}{2} + k2\\pi \\iff 2x = \\frac{3\\pi}{4} + k2\\pi \\iff x = \\frac{3\\pi}{8} + k\\pi\\; (k \\in \\mathbb{Z})\\)."
    },
    {
      q: "Số nghiệm của phương trình \\(2\\sin x - \\sqrt{3} = 0\\) thuộc đoạn \\([0; 2\\pi]\\) là:",
      options: [
        "1 nghiệm",
        "2 nghiệm",
        "3 nghiệm",
        "4 nghiệm"
      ],
      ans: 1,
      exp: "Ta có \\(\\sin x = \\frac{\\sqrt{3}}{2} \\iff x = \\frac{\\pi}{3} + k2\\pi\\) hoặc \\(x = \\frac{2\\pi}{3} + k2\\pi\\). Trên đoạn \\([0; 2\\pi]\\), chỉ có \\(k = 0\\) thỏa mãn cho đúng 2 nghiệm là \\(x = \\frac{\\pi}{3}\\) và \\(x = \\frac{2\\pi}{3}\\)."
    }
  ],
  5: [
    {
      q: "Cho dãy số \\((u_n)\\) với số hạng tổng quát \\(u_n = \\frac{2n - 1}{n + 1}\\). Số hạng thứ 5 của dãy số là:",
      options: [
        "\\(u_5 = \\frac{3}{2}\\)",
        "\\(u_5 = \\frac{9}{5}\\)",
        "\\(u_5 = \\frac{7}{6}\\)",
        "\\(u_5 = 2\\)"
      ],
      ans: 0,
      exp: "Thay \\(n = 5\\) vào công thức số hạng tổng quát: \\(u_5 = \\frac{2 \\cdot 5 - 1}{5 + 1} = \\frac{9}{6} = \\frac{3}{2}\\)."
    },
    {
      q: "Trong các dãy số \\((u_n)\\) cho bởi số hạng tổng quát sau, dãy số nào là dãy số TĂNG?",
      options: [
        "\\(u_n = \\frac{1}{n}\\)",
        "\\(u_n = 3 - 2n\\)",
        "\\(u_n = \\frac{n}{n + 1}\\)",
        "\\(u_n = (-2)^n\\)"
      ],
      ans: 2,
      exp: "Xét \\(u_n = \\frac{n}{n+1} = 1 - \\frac{1}{n+1}\\). Khi đó \\(u_{n+1} - u_n = \\frac{1}{n+1} - \\frac{1}{n+2} = \\frac{1}{(n+1)(n+2)} > 0, \\forall n \\in \\mathbb{N}^*\\), nên \\((u_n)\\) là dãy số tăng (và bị chặn trong \\([1/2; 1)\\))."
    },
    {
      q: "Cho dãy số \\((u_n)\\) xác định bởi \\(u_1 = 2\\) và \\(u_{n+1} = u_n + 2n + 1\\) với mọi \\(n \\ge 1\\). Công thức số hạng tổng quát \\(u_n\\) là:",
      options: [
        "\\(u_n = n^2 + 1\\)",
        "\\(u_n = n^2 + n\\)",
        "\\(u_n = 2n^2\\)",
        "\\(u_n = (n+1)^2\\)"
      ],
      ans: 0,
      exp: "Tính các số hạng đầu: \\(u_1 = 2 = 1^2+1\\); \\(u_2 = 2 + 3 = 5 = 2^2+1\\); \\(u_3 = 5 + 5 = 10 = 3^2+1\\). Bằng quy nạp hoặc cộng vế \\(u_n - u_1 = \\sum_{k=1}^{n-1}(2k+1) = n^2 - 1\\), ta được \\(u_n = n^2 + 1\\)."
    }
  ],
  6: [
    {
      q: "Cho cấp số cộng \\((u_n)\\) có số hạng đầu \\(u_1 = 3\\) và công sai \\(d = 4\\). Số hạng thứ 10 (\\(u_{10}\\)) và tổng 10 số hạng đầu (\\(S_{10}\\)) lần lượt là:",
      options: [
        "\\(u_{10} = 39;\\; S_{10} = 210\\)",
        "\\(u_{10} = 43;\\; S_{10} = 230\\)",
        "\\(u_{10} = 39;\\; S_{10} = 195\\)",
        "\\(u_{10} = 36;\\; S_{10} = 210\\)"
      ],
      ans: 0,
      exp: "Ta có \\(u_{10} = u_1 + 9d = 3 + 9 \\cdot 4 = 39\\). Tổng 10 số hạng đầu là \\(S_{10} = \\frac{10(u_1 + u_{10})}{2} = 5 \\cdot (3 + 39) = 210\\)."
    },
    {
      q: "Tìm \\(x\\) để ba số \\(2x - 1;\\; x + 2;\\; 3x + 1\\) theo thứ tự lập thành một cấp số cộng:",
      options: [
        "\\(x = 1\\)",
        "\\(x = \\frac{4}{3}\\)",
        "\\(x = 2\\)",
        "\\(x = \\frac{2}{3}\\)"
      ],
      ans: 1,
      exp: "Ba số \\(a, b, c\\) lập thành CSC khi \\(a + c = 2b \\iff (2x - 1) + (3x + 1) = 2(x + 2) \\iff 5x = 2x + 4 \\iff 3x = 4 \\iff x = \\frac{4}{3}\\)."
    },
    {
      q: "Một rạp hát có 20 hàng ghế. Hàng thứ nhất có 15 ghế, mỗi hàng sau có nhiều hơn hàng ngay trước nó 3 ghế. Tổng số ghế trong rạp hát đó là:",
      options: [
        "870 ghế",
        "720 ghế",
        "900 ghế",
        "840 ghế"
      ],
      ans: 0,
      exp: "Số ghế ở các hàng lập thành CSC với \\(u_1 = 15\\), công sai \\(d = 3\\) và \\(n = 20\\). Tổng số ghế là \\(S_{20} = \\frac{20[2 \\cdot 15 + (20 - 1) \\cdot 3]}{2} = 10 \\cdot (30 + 57) = 870\\) ghế."
    }
  ],
  7: [
    {
      q: "Cho cấp số nhân \\((u_n)\\) có \\(u_1 = 2\\) và công bội \\(q = 3\\). Số hạng \\(u_5\\) và tổng \\(S_5\\) của cấp số nhân lần lượt là:",
      options: [
        "\\(u_5 = 162;\\; S_5 = 242\\)",
        "\\(u_5 = 486;\\; S_5 = 242\\)",
        "\\(u_5 = 162;\\; S_5 = 121\\)",
        "\\(u_5 = 54;\\; S_5 = 242\\)"
      ],
      ans: 0,
      exp: "Ta có \\(u_5 = u_1 \\cdot q^4 = 2 \\cdot 3^4 = 162\\). Tổng 5 số hạng đầu là \\(S_5 = \\frac{u_1(q^5 - 1)}{q - 1} = \\frac{2(243 - 1)}{3 - 1} = 242\\)."
    },
    {
      q: "Cho cấp số nhân \\((u_n)\\) có các số hạng đều dương, biết \\(u_2 = 6\\) và \\(u_4 = 54\\). Giá trị của \\(u_1\\) và công bội \\(q\\) là:",
      options: [
        "\\(u_1 = 2;\\; q = 3\\)",
        "\\(u_1 = 3;\\; q = 2\\)",
        "\\(u_1 = 2;\\; q = -3\\)",
        "\\(u_1 = 1;\\; q = 6\\)"
      ],
      ans: 0,
      exp: "Ta có \\(\\frac{u_4}{u_2} = q^2 = \\frac{54}{6} = 9\\). Vì các số hạng đều dương nên \\(q > 0 \\implies q = 3\\) và \\(u_1 = \\frac{u_2}{q} = \\frac{6}{3} = 2\\)."
    },
    {
      q: "Một người gửi 100 triệu đồng vào ngân hàng theo thể thức lãi kép kì hạn 1 năm với lãi suất \\(7\\%/\\text{năm}\\). Nếu không rút tiền ra thì sau 5 năm tổng số tiền cả vốn lẫn lãi người đó nhận được xấp xỉ là:",
      options: [
        "140,26 triệu đồng",
        "135,00 triệu đồng",
        "131,08 triệu đồng",
        "150,07 triệu đồng"
      ],
      ans: 0,
      exp: "Áp dụng công thức lãi kép sau \\(n = 5\\) kì: \\(A_5 = P(1 + r)^5 = 100 \\cdot (1 + 0,07)^5 = 100 \\cdot (1,07)^5 \\approx 140,26\\) triệu đồng."
    }
  ],
  8: [
    {
      q: "Cho nhóm số liệu \\([15; 25)\\) trong bảng tần số ghép nhóm. Độ rộng \\(h\\) và giá trị đại diện \\(c\\) của nhóm này lần lượt là:",
      options: [
        "\\(h = 10;\\; c = 20\\)",
        "\\(h = 20;\\; c = 10\\)",
        "\\(h = 10;\\; c = 19,5\\)",
        "\\(h = 9;\\; c = 20\\)"
      ],
      ans: 0,
      exp: "Độ rộng của nhóm \\([15; 25)\\) là \\(h = 25 - 15 = 10\\); giá trị đại diện là trung điểm \\(c = \\frac{15 + 25}{2} = 20\\)."
    },
    {
      q: "Khi ghép nhóm mẫu số liệu, một quan sát có giá trị đúng bằng \\(20\\) sẽ được xếp vào nhóm nào trong hai nhóm liên tiếp \\([10; 20)\\) và \\([20; 30)\\)?",
      options: [
        "Xếp vào nhóm \\([20; 30)\\) vì nhóm này đóng ở đầu mút trái \\(20\\)",
        "Xếp vào nhóm \\([10; 20)\\)",
        "Cộng vào cả hai nhóm",
        "Bỏ qua không tính vào cỡ mẫu"
      ],
      ans: 0,
      exp: "Theo quy ước nửa khoảng \\([a_i; a_{i+1})\\) gồm các giá trị \\(a_i \\le x < a_{i+1}\\), nên giá trị \\(x = 20\\) không thuộc \\([10; 20)\\) mà thuộc nhóm \\([20; 30)\\)."
    },
    {
      q: "Khảo sát thời gian tập thể dục mỗi ngày của một nhóm học sinh thu được bảng ghép nhóm gồm 4 nhóm có tần số lần lượt là \\(n_1 = 8,\\; n_2 = 15,\\; n_3 = 12,\\; n_4 = 5\\). Cỡ mẫu \\(n\\) và tần suất \\(f_2\\) của nhóm thứ hai là:",
      options: [
        "\\(n = 40;\\; f_2 = 37,5\\%\\)",
        "\\(n = 40;\\; f_2 = 15\\%\\)",
        "\\(n = 35;\\; f_2 = 37,5\\%\\)",
        "\\(n = 40;\\; f_2 = 30\\%\\)"
      ],
      ans: 0,
      exp: "Cỡ mẫu \\(n = 8 + 15 + 12 + 5 = 40\\). Tần suất của nhóm thứ hai là \\(f_2 = \\frac{n_2}{n} = \\frac{15}{40} = 0,375 = 37,5\\%\\)."
    }
  ],
  9: [
    {
      q: "Cho mẫu số liệu ghép nhóm gồm 3 nhóm \\([0; 10),\\; [10; 20),\\; [20; 30)\\) với tần số tương ứng là \\(n_1 = 4,\\; n_2 = 10,\\; n_3 = 6\\). Số trung bình cộng \\(\\bar{x}\\) của mẫu số liệu ghép nhóm là:",
      options: [
        "\\(\\bar{x} = 16\\)",
        "\\(\\bar{x} = 15\\)",
        "\\(\\bar{x} = 14,5\\)",
        "\\(\\bar{x} = 17\\)"
      ],
      ans: 0,
      exp: "Giá trị đại diện của 3 nhóm là \\(c_1 = 5,\\; c_2 = 15,\\; c_3 = 25\\); cỡ mẫu \\(n = 4 + 10 + 6 = 20\\). Suy ra \\(\\bar{x} = \\frac{4 \\cdot 5 + 10 \\cdot 15 + 6 \\cdot 25}{20} = \\frac{20 + 150 + 150}{20} = \\frac{320}{20} = 16\\)."
    },
    {
      q: "Với mẫu số liệu ghép nhóm ở câu trên (\\([0; 10): 4;\\; [10; 20): 10;\\; [20; 30): 6\\)), trung vị \\(M_e\\) của mẫu số liệu ghép nhóm bằng:",
      options: [
        "\\(M_e = 16\\)",
        "\\(M_e = 15\\)",
        "\\(M_e = 14\\)",
        "\\(M_e = 15,5\\)"
      ],
      ans: 0,
      exp: "Ta có \\(\\frac{n}{2} = 10\\). Tần số tích lũy \\(cf_1 = 4 < 10\\), \\(cf_2 = 14 \\ge 10\\) nên nhóm chứa trung vị là \\([10; 20)\\) với \\(L = 10, F = cf_1 = 4, f = n_2 = 10, h = 10\\). Do đó \\(M_e = 10 + \\frac{10 - 4}{10} \\cdot 10 = 16\\)."
    },
    {
      q: "Vẫn với mẫu số liệu ghép nhóm trên (\\([0; 10): 4;\\; [10; 20): 10;\\; [20; 30): 6\\)), giá trị mốt \\(M_o\\) ước lượng theo công thức nội suy bằng:",
      options: [
        "\\(M_o = 16\\)",
        "\\(M_o = 15\\)",
        "\\(M_o = 14\\)",
        "\\(M_o = 16,5\\)"
      ],
      ans: 0,
      exp: "Nhóm chứa mốt là \\([10; 20)\\) có tần số lớn nhất \\(n_2 = 10\\). Ta có \\(L = 10,\\; d_1 = 10 - 4 = 6,\\; d_2 = 10 - 6 = 4,\\; h = 10\\). Vậy \\(M_o = 10 + \\frac{6}{6 + 4} \\cdot 10 = 16\\)."
    }
  ],
  10: [
    {
      q: "Trong không gian, mệnh đề nào dưới đây là ĐÚNG theo các tính chất thừa nhận?",
      options: [
        "Qua 3 điểm bất kì luôn xác định duy nhất một mặt phẳng",
        "Qua 3 điểm không thẳng hàng có một và chỉ một mặt phẳng",
        "Hai mặt phẳng phân biệt có một điểm chung thì có duy nhất một điểm chung đó",
        "Bốn điểm bất kì luôn đồng phẳng"
      ],
      ans: 1,
      exp: "Qua 3 điểm KHÔNG THẲNG HÀNG có một và chỉ một mặt phẳng (nếu 3 điểm thẳng hàng thì có vô số mặt phẳng đi qua chúng)."
    },
    {
      q: "Cho hình chóp \\(S.ABCD\\) có đáy \\(ABCD\\) là hình bình hành tâm \\(O\\). Giao tuyến của hai mặt phẳng \\((SAC)\\) và \\((SBD)\\) là đường thẳng nào?",
      options: [
        "Đường thẳng \\(SO\\)",
        "Đường thẳng \\(SA\\)",
        "Đường thẳng \\(AC\\)",
        "Đường thẳng \\(AB\\)"
      ],
      ans: 0,
      exp: "Điểm \\(S\\) là điểm chung thứ nhất của \\((SAC)\\) và \\((SBD)\\). Trong đáy \\((ABCD)\\), \\(O = AC \\cap BD\\) nên \\(O \\in AC \\subset (SAC)\\) và \\(O \\in BD \\subset (SBD)\\), suy ra \\(O\\) là điểm chung thứ hai. Vậy \\((SAC) \\cap (SBD) = SO\\)."
    },
    {
      q: "Cho tứ diện \\(ABCD\\). Gọi \\(M, N\\) lần lượt là trung điểm của \\(AB, AC\\) và \\(P\\) là điểm trên cạnh \\(CD\\) sao cho \\(CP = 2PD\\). Thiết diện của tứ diện \\(ABCD\\) cắt bởi mặt phẳng \\((MNP)\\) là hình gì?",
      options: [
        "Tam giác \\(MNP\\)",
        "Hình thang \\(MNPQ\\) (với \\(Q\\) là giao điểm của mặt phẳng \\((MNP)\\) với cạnh \\(BD\\))",
        "Ngũ giác",
        "Hình vuông"
      ],
      ans: 1,
      exp: "Trong \\((ACD)\\), vì \\(N\\) là trung điểm \\(AC\\) còn \\(P\\) không là trung điểm \\(CD\\) nên \\(NP\\) không song song \\(AD\\); kéo dài \\(NP\\) cắt \\(AD\\) tại \\(E\\). Trong \\((ABD)\\), nối \\(ME\\) cắt cạnh \\(BD\\) tại \\(Q\\). Vậy thiết diện là tứ giác \\(MNPQ\\) (hình thang vì \\(MN \\parallel BC \\parallel PQ\\))."
    }
  ],
  11: [
    {
      q: "Trong không gian, hai đường thẳng không có điểm chung thì:",
      options: [
        "Chắc chắn song song với nhau",
        "Chắc chắn chéo nhau",
        "Có thể song song với nhau (nếu đồng phẳng) hoặc chéo nhau (nếu không đồng phẳng)",
        "Luôn vuông góc với nhau"
      ],
      ans: 2,
      exp: "Hai đường thẳng không có điểm chung gồm 2 trường hợp: nếu cùng nằm trong một mặt phẳng thì chúng song song; nếu không cùng nằm trong bất kì mặt phẳng nào thì chúng chéo nhau."
    },
    {
      q: "Cho hình chóp \\(S.ABCD\\) có đáy \\(ABCD\\) là hình bình hành. Giao tuyến \\(d\\) của hai mặt phẳng \\((SAB)\\) và \\((SCD)\\) là:",
      options: [
        "Đường thẳng đi qua \\(S\\) và song song với \\(AB\\) (và \\(CD\\))",
        "Đường thẳng \\(SO\\) với \\(O = AC \\cap BD\\)",
        "Đường thẳng đi qua \\(S\\) và song song với \\(AD\\)",
        "Đường thẳng \\(AB\\)"
      ],
      ans: 0,
      exp: "Hai mặt phẳng \\((SAB)\\) và \\((SCD)\\) có điểm chung \\(S\\) và lần lượt chứa hai đường thẳng song song \\(AB \\parallel CD\\), nên giao tuyến \\(d\\) của chúng là đường thẳng qua \\(S\\) và song song với \\(AB, CD\\)."
    },
    {
      q: "Cho tứ diện \\(ABCD\\). Gọi \\(I, J\\) lần lượt là trọng tâm các tam giác \\(ABC\\) và \\(ABD\\). Đường thẳng \\(IJ\\) song song với đường thẳng nào sau đây?",
      options: [
        "\\(CD\\)",
        "\\(AB\\)",
        "\\(BC\\)",
        "\\(AD\\)"
      ],
      ans: 0,
      exp: "Gọi \\(M\\) là trung điểm \\(AB\\). Trong \\(\\triangle MCD\\), ta có \\(\\frac{MI}{MC} = \\frac{MJ}{MD} = \\frac{1}{3}\\), theo định lí Thales đảo suy ra \\(IJ \\parallel CD\\) (và \\(IJ = \\frac{1}{3}CD\\))."
    }
  ],
  12: [
    {
      q: "Cho đường thẳng \\(d \\not\\subset (P)\\). Điều kiện đủ để đường thẳng \\(d\\) song song với mặt phẳng \\((P)\\) là:",
      options: [
        "\\(d\\) song song với một đường thẳng \\(a\\) nào đó nằm trong \\((P)\\)",
        "\\(d\\) chéo nhau với một đường thẳng nằm trong \\((P)\\)",
        "\\(d\\) cắt một đường thẳng nằm trong \\((P)\\)",
        "\\(d\\) vuông góc với một đường thẳng nằm trong \\((P)\\)"
      ],
      ans: 0,
      exp: "Theo định lí dấu hiệu nhận biết: Nếu \\(d \\not\\subset (P)\\) và \\(d \\parallel a\\) với \\(a \\subset (P)\\) thì \\(d \\parallel (P)\\)."
    },
    {
      q: "Cho tứ diện \\(ABCD\\). Gọi \\(M, N\\) lần lượt là trung điểm của \\(AB\\) và \\(AC\\). Đường thẳng \\(MN\\) song song với mặt phẳng nào dưới đây?",
      options: [
        "\\((BCD)\\)",
        "\\((ABD)\\)",
        "\\((ACD)\\)",
        "\\((ABC)\\)"
      ],
      ans: 0,
      exp: "Vì \\(MN\\) là đường trung bình của \\(\\triangle ABC\\) nên \\(MN \\parallel BC\\). Mà \\(BC \\subset (BCD)\\) và \\(MN \\not\\subset (BCD)\\) nên \\(MN \\parallel (BCD)\\)."
    },
    {
      q: "Cho hình chóp \\(S.ABCD\\) có đáy \\(ABCD\\) là hình bình hành. Gọi \\(M\\) là trung điểm cạnh \\(SA\\). Mặt phẳng \\((P)\\) đi qua \\(M\\) và song song với \\(SB\\) và \\(AD\\). Thiết diện của hình chóp cắt bởi mặt phẳng \\((P)\\) là hình gì?",
      options: [
        "Hình thang",
        "Tam giác",
        "Hình bình hành",
        "Ngũ giác"
      ],
      ans: 0,
      exp: "Từ \\(M \\in SA\\): kẻ \\(MN \\parallel SB\\; (N \\in AB)\\), \\(MQ \\parallel AD\\; (Q \\in SD)\\) và \\(NP \\parallel AD\\; (P \\in BC)\\). Vì \\(MQ \\parallel AD \\parallel BC \\parallel NP\\) nhưng \\(MQ = \\frac{1}{2}AD < NP = AD\\), nên thiết diện \\(MNPQ\\) là một hình thang."
    }
  ],
  13: [
    {
      q: "Điều kiện đủ để hai mặt phẳng phân biệt \\((P)\\) và \\((Q)\\) song song với nhau là:",
      options: [
        "Mặt phẳng \\((P)\\) chứa hai đường thẳng cắt nhau \\(a, b\\) và cả \\(a, b\\) đều song song với \\((Q)\\)",
        "Mặt phẳng \\((P)\\) chứa hai đường thẳng song song \\(a, b\\) cùng song song với \\((Q)\\)",
        "Mặt phẳng \\((P)\\) chứa một đường thẳng song song với \\((Q)\\)",
        "Hai mặt phẳng có chung một giao tuyến"
      ],
      ans: 0,
      exp: "Muốn chứng minh \\((P) \\parallel (Q)\\), ta phải chỉ ra trong \\((P)\\) có HAI ĐƯỜNG THẲNG CẮT NHAU cùng song song với \\((Q)\\)."
    },
    {
      q: "Cho hình hộp \\(ABCD.A'B'C'D'\\). Mặt phẳng \\((AB'D')\\) song song với mặt phẳng nào dưới đây?",
      options: [
        "\\((BDC')\\)",
        "\\((A'B'C')\\)",
        "\\((ACC')\\)",
        "\\((ADD')\\)"
      ],
      ans: 0,
      exp: "Ta có \\(AB' \\parallel DC'\\) (vì \\(ABC'D'\\) là hình bình hành) và \\(B'D' \\parallel BD\\) (vì \\(BDD'B'\\) là hình bình hành). Hai đường cắt nhau \\(AB', B'D' \\subset (AB'D')\\) lần lượt song song với \\(DC', BD \\subset (BDC')\\), nên \\((AB'D') \\parallel (BDC')\\)."
    },
    {
      q: "Cho hình chóp \\(S.ABC\\) có diện tích đáy \\(S_{\\triangle ABC} = 36\\text{ cm}^2\\). Mặt phẳng \\((P)\\) song song với đáy \\((ABC)\\) và cắt cạnh \\(SA\\) tại \\(M\\) sao cho \\(SM = 2MA\\). Diện tích thiết diện tạo bởi \\((P)\\) và hình chóp bằng:",
      options: [
        "\\(16\\text{ cm}^2\\)",
        "\\(24\\text{ cm}^2\\)",
        "\\(9\\text{ cm}^2\\)",
        "\\(12\\text{ cm}^2\\)"
      ],
      ans: 0,
      exp: "Từ \\(SM = 2MA \\implies \\frac{SM}{SA} = \\frac{2}{3}\\). Vì \\((P) \\parallel (ABC)\\) nên thiết diện đồng dạng với \\(\\triangle ABC\\) theo tỉ số \\(k = \\frac{2}{3}\\). Do đó \\(S_{\\text{thiết diện}} = k^2 \\cdot S_{\\triangle ABC} = \\left(\\frac{2}{3}\\right)^2 \\cdot 36 = 16\\text{ cm}^2\\)."
    }
  ],
  14: [
    {
      q: "Qua phép chiếu song song lên mặt phẳng \\((P)\\) theo phương \\(l\\), tính chất nào sau đây KHÔNG được bảo toàn (trong trường hợp tổng quát)?",
      options: [
        "Tính thẳng hàng của ba điểm",
        "Tính song song của hai đường thẳng",
        "Độ lớn của góc và độ dài đoạn thẳng",
        "Tỉ số độ dài của hai đoạn thẳng nằm trên hai đường thẳng song song"
      ],
      ans: 2,
      exp: "Phép chiếu song song bảo toàn tính thẳng hàng, thứ tự điểm, tính song song và tỉ số độ dài trên cùng đường/hai đường song song; nhưng nói chung KHÔNG bảo toàn độ dài, góc hay tính vuông góc."
    },
    {
      q: "Hình biểu diễn của một hình lục giác đều qua phép chiếu song song là hình nào?",
      options: [
        "Một lục giác có các cặp cạnh đối song song và bằng nhau",
        "Luôn là một lục giác đều có các góc bằng \\(120^\\circ\\)",
        "Một hình bình hành",
        "Một hình thang cân"
      ],
      ans: 0,
      exp: "Trong lục giác đều, các cặp cạnh đối diện song song và bằng nhau. Phép chiếu song song bảo toàn tính song song và tỉ số bằng \\(1\\) trên hai đường song song, nên ảnh là một lục giác có 3 cặp cạnh đối song song và bằng nhau."
    },
    {
      q: "Cho hình bình hành \\(ABCD\\) nằm ngoài mặt phẳng \\((P)\\) có hình chiếu song song lên \\((P)\\) là tứ giác \\(A'B'C'D'\\) (không suy biến thành đoạn thẳng). Khi đó \\(A'B'C'D'\\) chắc chắn là:",
      options: [
        "Hình bình hành",
        "Hình chữ nhật",
        "Hình thoi",
        "Hình vuông"
      ],
      ans: 0,
      exp: "Vì \\(AB \\parallel CD\\) và \\(AD \\parallel BC\\) nên qua phép chiếu song song ta có \\(A'B' \\parallel C'D'\\) và \\(A'D' \\parallel B'C'\\), do đó \\(A'B'C'D'\\) là một hình bình hành."
    }
  ],
  15: [
    {
      q: "Giá trị của giới hạn \\(\\lim_{n\\to+\\infty} \\frac{3n^2 - 2n + 1}{n^2 + 4}\\) bằng:",
      options: [
        "\\(3\\)",
        "\\(0\\)",
        "\\(-2\\)",
        "\\(+\\infty\\)"
      ],
      ans: 0,
      exp: "Chia cả tử và mẫu cho \\(n^2\\): \\(\\lim \\frac{3 - \\frac{2}{n} + \\frac{1}{n^2}}{1 + \\frac{4}{n^2}} = \\frac{3 - 0 + 0}{1 + 0} = 3\\)."
    },
    {
      q: "Tổng của cấp số nhân lùi vô hạn \\(S = 1 + \\frac{1}{3} + \\frac{1}{9} + \\dots + \\frac{1}{3^n} + \\dots\\) bằng:",
      options: [
        "\\(\\frac{3}{2}\\)",
        "\\(2\\)",
        "\\(\\frac{4}{3}\\)",
        "\\(3\\)"
      ],
      ans: 0,
      exp: "Đây là tổng của cấp số nhân lùi vô hạn có số hạng đầu \\(u_1 = 1\\) và công bội \\(q = \\frac{1}{3}\\) (\\(|q| < 1\\)). Áp dụng công thức \\(S = \\frac{u_1}{1 - q} = \\frac{1}{1 - \\frac{1}{3}} = \\frac{3}{2}\\)."
    },
    {
      q: "Giá trị của giới hạn \\(\\lim_{n\\to+\\infty} \\left(\\sqrt{n^2 + 4n} - n\\right)\\) bằng:",
      options: [
        "\\(2\\)",
        "\\(4\\)",
        "\\(0\\)",
        "\\(+\\infty\\)"
      ],
      ans: 0,
      exp: "Nhân lượng liên hợp: \\(\\sqrt{n^2+4n} - n = \\frac{(n^2+4n) - n^2}{\\sqrt{n^2+4n} + n} = \\frac{4n}{n\\left(\\sqrt{1 + \\frac{4}{n}} + 1\\right)} = \\frac{4}{\\sqrt{1 + \\frac{4}{n}} + 1} \\xrightarrow{n\\to+\\infty} \\frac{4}{1 + 1} = 2\\)."
    }
  ],
  16: [
    {
      q: "Giá trị của giới hạn \\(\\lim_{x\\to 2} \\frac{x^2 - 4}{x - 2}\\) bằng:",
      options: [
        "\\(4\\)",
        "\\(2\\)",
        "\\(0\\)",
        "\\(+\\infty\\)"
      ],
      ans: 0,
      exp: "Đây là dạng vô định \\(0/0\\). Với \\(x \\ne 2\\), ta phân tích nhân tử: \\(\\lim_{x\\to 2} \\frac{(x - 2)(x + 2)}{x - 2} = \\lim_{x\\to 2}(x + 2) = 2 + 2 = 4\\)."
    },
    {
      q: "Giá trị của giới hạn \\(\\lim_{x\\to 1} \\frac{\\sqrt{x + 3} - 2}{x - 1}\\) bằng:",
      options: [
        "\\(\\frac{1}{4}\\)",
        "\\(\\frac{1}{2}\\)",
        "\\(4\\)",
        "\\(0\\)"
      ],
      ans: 0,
      exp: "Nhân lượng liên hợp cho tử thức: \\(\\lim_{x\\to 1} \\frac{(x + 3) - 4}{(x - 1)(\\sqrt{x + 3} + 2)} = \\lim_{x\\to 1} \\frac{1}{\\sqrt{x + 3} + 2} = \\frac{1}{2 + 2} = \\frac{1}{4}\\)."
    },
    {
      q: "Giá trị của giới hạn \\(\\lim_{x\\to -\\infty} \\frac{\\sqrt{4x^2 + 1} - x}{2x + 3}\\) bằng:",
      options: [
        "\\(-\\frac{3}{2}\\)",
        "\\(\\frac{1}{2}\\)",
        "\\(\\frac{3}{2}\\)",
        "\\(-\\frac{1}{2}\\)"
      ],
      ans: 0,
      exp: "Khi \\(x \\to -\\infty\\) thì \\(x < 0 \\implies \\sqrt{4x^2 + 1} = |x|\\sqrt{4 + \\frac{1}{x^2}} = -x\\sqrt{4 + \\frac{1}{x^2}}\\). Chia cả tử và mẫu cho \\(x\\): \\(\\lim_{x\\to -\\infty} \\frac{-\\sqrt{4 + \\frac{1}{x^2}} - 1}{2 + \\frac{3}{x}} = \\frac{-2 - 1}{2} = -\\frac{3}{2}\\)."
    }
  ],
  17: [
    {
      q: "Cho hàm số \\(f(x) = \\left\\{\\begin{array}{ll} \\frac{x^2 - 9}{x - 3} & \\text{khi } x \\ne 3 \\\\ m & \\text{khi } x = 3 \\end{array}\\right.\\). Tìm giá trị của tham số \\(m\\) để hàm số liên tục tại \\(x_0 = 3\\):",
      options: [
        "\\(m = 6\\)",
        "\\(m = 3\\)",
        "\\(m = 9\\)",
        "\\(m = 0\\)"
      ],
      ans: 0,
      exp: "Ta có \\(f(3) = m\\) và \\(\\lim_{x\\to 3} f(x) = \\lim_{x\\to 3} \\frac{(x - 3)(x + 3)}{x - 3} = \\lim_{x\\to 3}(x + 3) = 6\\). Để hàm số liên tục tại \\(x = 3\\) thì \\(\\lim_{x\\to 3} f(x) = f(3) \\iff m = 6\\)."
    },
    {
      q: "Hàm số nào dưới đây liên tục trên toàn bộ tập số thực \\(\\mathbb{R}\\)?",
      options: [
        "\\(y = x^3 - 3x + \\cos x\\)",
        "\\(y = \\frac{2x + 1}{x - 1}\\)",
        "\\(y = \\tan x\\)",
        "\\(y = \\sqrt{x - 2}\\)"
      ],
      ans: 0,
      exp: "Hàm đa thức \\(x^3 - 3x\\) và hàm \\(\\cos x\\) đều liên tục trên \\(\\mathbb{R}\\) nên tổng của chúng liên tục trên \\(\\mathbb{R}\\)."
    },
    {
      q: "Cho phương trình \\(x^3 - 3x + 1 = 0\\). Khẳng định nào sau đây là ĐÚNG khi áp dụng định lí giá trị trung gian?",
      options: [
        "Phương trình có đúng 3 nghiệm phân biệt thuộc các khoảng \\((-2; -1),\\; (0; 1)\\) và \\((1; 2)\\)",
        "Phương trình vô nghiệm trên \\(\\mathbb{R}\\)",
        "Phương trình chỉ có duy nhất 1 nghiệm trên \\(\\mathbb{R}\\)",
        "Phương trình không có nghiệm trong khoảng \\((0; 1)\\)"
      ],
      ans: 0,
      exp: "Hàm đa thức \\(f(x) = x^3 - 3x + 1\\) liên tục trên \\(\\mathbb{R}\\). Ta có \\(f(-2) = -1 < 0,\\; f(-1) = 3 > 0,\\; f(0) = 1 > 0,\\; f(1) = -1 < 0,\\; f(2) = 3 > 0\\). Do \\(f(-2)f(-1) < 0\\), \\(f(0)f(1) < 0\\), \\(f(1)f(2) < 0\\) nên phương trình bậc ba này có đúng 3 nghiệm phân biệt trong 3 khoảng trên."
    }
  ],
  18: [
    {
      q: "Với \\(a > 0\\), biểu thức \\(P = a^{\\frac{1}{3}} \\cdot \\sqrt{a}\\) được viết dưới dạng lũy thừa với số mũ hữu tỉ là:",
      options: [
        "\\(a^{\\frac{5}{6}}\\)",
        "\\(a^{\\frac{1}{6}}\\)",
        "\\(a^{\\frac{2}{3}}\\)",
        "\\(a^{\\frac{3}{2}}\\)"
      ],
      ans: 0,
      exp: "Ta có \\(\\sqrt{a} = a^{\\frac{1}{2}}\\). Suy ra \\(P = a^{\\frac{1}{3}} \\cdot a^{\\frac{1}{2}} = a^{\\frac{1}{3} + \\frac{1}{2}} = a^{\\frac{5}{6}}\\).",
    },
    {
      q: "Giá trị của biểu thức \\(A = 8^{\\frac{2}{3}} + \\left(\\frac{1}{9}\\right)^{-\\frac{1}{2}} - 2026^0\\) bằng:",
      options: [
        "\\(6\\)",
        "\\(7\\)",
        "\\(4\\)",
        "\\(8\\)"
      ],
      ans: 0,
      exp: "Ta có \\(8^{\\frac{2}{3}} = (2^3)^{\\frac{2}{3}} = 2^2 = 4\\); \\(\\left(\\frac{1}{9}\\right)^{-\\frac{1}{2}} = 9^{\\frac{1}{2}} = 3\\); \\(2026^0 = 1\\). Vậy \\(A = 4 + 3 - 1 = 6\\)."
    },
    {
      q: "Cho số thực \\(a\\) thỏa mãn \\(0 < a < 1\\). Khẳng định nào dưới đây là ĐÚNG?",
      options: [
        "\\(a^{\\sqrt{3}} < a^{\\sqrt{2}}\\)",
        "\\(a^{\\sqrt{3}} > a^{\\sqrt{2}}\\)",
        "\\(a^2 > 1\\)",
        "\\(a^{-1} < 1\\)"
      ],
      ans: 0,
      exp: "Vì cơ số \\(0 < a < 1\\) và \\(\\sqrt{3} > \\sqrt{2}\\) nên khi lấy lũy thừa cơ số \\(a\\) bất đẳng thức đảo chiều: \\(a^{\\sqrt{3}} < a^{\\sqrt{2}}\\)."
    }
  ],
  19: [
    {
      q: "Cho \\(a > 0, a \\ne 1\\). Giá trị của biểu thức \\(P = \\log_{a^2}(a^6)\\) bằng:",
      options: [
        "\\(3\\)",
        "\\(12\\)",
        "\\(4\\)",
        "\\(\\frac{1}{3}\\)"
      ],
      ans: 0,
      exp: "Áp dụng công thức đưa mũ ở cơ số và đối số ra ngoài: \\(\\log_{a^2}(a^6) = \\frac{6}{2}\\log_a a = 3 \\cdot 1 = 3\\)."
    },
    {
      q: "Cho \\(\\log_2 3 = a\\) và \\(\\log_2 5 = b\\). Khi đó \\(\\log_2 45\\) được biểu diễn theo \\(a\\) và \\(b\\) là:",
      options: [
        "\\(2a + b\\)",
        "\\(a^2 + b\\)",
        "\\(a + 2b\\)",
        "\\(2ab\\)"
      ],
      ans: 0,
      exp: "Phân tích \\(45 = 3^2 \\cdot 5\\). Ta có \\(\\log_2 45 = \\log_2(3^2 \\cdot 5) = 2\\log_2 3 + \\log_2 5 = 2a + b\\)."
    },
    {
      q: "Một dung dịch có nồng độ ion hydrogen \\([\\text{H}^+] = 2,5 \\times 10^{-4}\\text{ mol/L}\\). Độ pH của dung dịch đó (biết \\(\\text{pH} = -\\log[\\text{H}^+]\\)) xấp xỉ bằng:",
      options: [
        "\\(3,60\\)",
        "\\(4,40\\)",
        "\\(2,50\\)",
        "\\(4,00\\)"
      ],
      ans: 0,
      exp: "Ta có \\(\\text{pH} = -\\log(2,5 \\times 10^{-4}) = 4 - \\log 2,5 \\approx 4 - 0,398 = 3,60\\)."
    }
  ],
  20: [
    {
      q: "Tập xác định \\(D\\) của hàm số \\(y = \\log_3(2x - 6)\\) là:",
      options: [
        "\\(D = (3; +\\infty)\\)",
        "\\(D = [3; +\\infty)\\)",
        "\\(D = \\mathbb{R} \\setminus \\{3\\}\\)",
        "\\(D = (0; +\\infty)\\)"
      ],
      ans: 0,
      exp: "Biểu thức \\(\\log_3(2x - 6)\\) xác định khi và chỉ khi đối số dương: \\(2x - 6 > 0 \\iff x > 3\\). Vậy \\(D = (3; +\\infty)\\)."
    },
    {
      q: "Trong các hàm số dưới đây, hàm số nào NGHỊCH BIẾN trên tập xác định của nó?",
      options: [
        "\\(y = \\left(\\frac{2}{3}\\right)^x\\)",
        "\\(y = 2^x\\)",
        "\\(y = \\ln x\\)",
        "\\(y = \\log_{\\sqrt{3}} x\\)"
      ],
      ans: 0,
      exp: "Hàm số mũ \\(y = a^x\\) (hoặc \\(y = \\log_a x\\)) nghịch biến khi cơ số \\(0 < a < 1\\). Ở đây \\(a = \\frac{2}{3} \\in (0; 1)\\) nên \\(y = \\left(\\frac{2}{3}\\right)^x\\) nghịch biến trên \\(\\mathbb{R}\\)."
    },
    {
      q: "Đồng vị phóng xạ Carbon-14 có chu kì bán rã \\(T = 5730\\) năm theo công thức \\(m(t) = m_0 \\cdot \\left(\\frac{1}{2}\\right)^{\\frac{t}{T}}\\). Nếu một mẫu gỗ cổ còn lại \\(25\\%\\) lượng Carbon-14 so với ban đầu thì tuổi \\(t\\) của mẫu gỗ đó là:",
      options: [
        "11 460 năm",
        "5 730 năm",
        "17 190 năm",
        "2 865 năm"
      ],
      ans: 0,
      exp: "Vì \\(\\frac{m(t)}{m_0} = 25\\% = \\frac{1}{4} = \\left(\\frac{1}{2}\\right)^2\\) nên \\(\\frac{t}{T} = 2 \\implies t = 2T = 2 \\cdot 5730 = 11\\,460\\) năm."
    }
  ],
  21: [
    {
      q: "Nghiệm của phương trình \\(3^{2x - 1} = 27\\) là:",
      options: [
        "\\(x = 2\\)",
        "\\(x = 1\\)",
        "\\(x = 3\\)",
        "\\(x = \\frac{3}{2}\\)"
      ],
      ans: 0,
      exp: "Đưa về cùng cơ số 3: \\(3^{2x - 1} = 3^3 \\iff 2x - 1 = 3 \\iff 2x = 4 \\iff x = 2\\)."
    },
    {
      q: "Tập nghiệm \\(S\\) của bất phương trình \\(\\log_{\\frac{1}{2}}(x - 1) > -2\\) là:",
      options: [
        "\\(S = (1; 5)\\)",
        "\\(S = (-\\infty; 5)\\)",
        "\\(S = (5; +\\infty)\\)",
        "\\(S = [1; 5)\\)"
      ],
      ans: 0,
      exp: "Vì cơ số \\(a = \\frac{1}{2} \\in (0; 1)\\) nên bất phương trình tương đương với \\(0 < x - 1 < \\left(\\frac{1}{2}\\right)^{-2} \\iff 0 < x - 1 < 4 \\iff 1 < x < 5\\). Vậy \\(S = (1; 5)\\)."
    },
    {
      q: "Tổng tất cả các nghiệm của phương trình \\(4^x - 6 \\cdot 2^x + 8 = 0\\) bằng:",
      options: [
        "\\(3\\)",
        "\\(6\\)",
        "\\(2\\)",
        "\\(4\\)"
      ],
      ans: 0,
      exp: "Đặt \\(t = 2^x\\; (t > 0)\\), phương trình trở thành \\(t^2 - 6t + 8 = 0 \\iff t = 2\\) hoặc \\(t = 4\\) (đều dương). Suy ra \\(2^x = 2 \\iff x = 1\\) và \\(2^x = 4 \\iff x = 2\\). Tổng các nghiệm là \\(1 + 2 = 3\\)."
    }
  ],
  22: [
    {
      q: "Trong không gian, góc giữa hai đường thẳng bất kì \\(a\\) và \\(b\\) luôn nằm trong khoảng/đoạn nào?",
      options: [
        "\\([0^\\circ; 90^\\circ]\\)",
        "\\([0^\\circ; 180^\\circ]\\)",
        "\\((0^\\circ; 90^\\circ)\\)",
        "\\([90^\\circ; 180^\\circ]\\)"
      ],
      ans: 0,
      exp: "Theo định nghĩa, góc giữa hai đường thẳng trong không gian luôn không vượt quá \\(90^\\circ\\): \\(0^\\circ \\le (a, b) \\le 90^\\circ\\)."
    },
    {
      q: "Cho hình lập phương \\(ABCD.A'B'C'D'\\). Góc giữa hai đường thẳng chéo nhau \\(AB\\) và \\(B'D'\\) bằng:",
      options: [
        "\\(45^\\circ\\)",
        "\\(60^\\circ\\)",
        "\\(90^\\circ\\)",
        "\\(30^\\circ\\)"
      ],
      ans: 0,
      exp: "Vì \\(B'D' \\parallel BD\\) nên \\((AB, B'D') = (AB, BD) = \\widehat{ABD} = 45^\\circ\\) (do \\(ABCD\\) là hình vuông)."
    },
    {
      q: "Cho tứ diện đều \\(ABCD\\) cạnh \\(a\\). Gọi \\(M, N\\) lần lượt là trung điểm của \\(BC\\) và \\(AD\\). Góc giữa hai đường thẳng chéo nhau \\(AB\\) và \\(CD\\) bằng:",
      options: [
        "\\(90^\\circ\\)",
        "\\(60^\\circ\\)",
        "\\(45^\\circ\\)",
        "\\(30^\\circ\\)"
      ],
      ans: 0,
      exp: "Trong tứ diện đều \\(ABCD\\), các tam giác \\(ABC\\) và \\(DBC\\) là tam giác đều cạnh \\(a\\) nên \\(AM \\perp BC\\) và \\(DM \\perp BC \\implies BC \\perp (AMD) \\implies BC \\perp AD\\). Tương tự, mọi cặp cạnh đối của tứ diện đều đều vuông góc với nhau, nên \\((AB, CD) = 90^\\circ\\)."
    }
  ],
  23: [
    {
      q: "Đường thẳng \\(d\\) vuông góc với mặt phẳng \\((P)\\) khi và chỉ khi:",
      options: [
        "\\(d\\) vuông góc với hai đường thẳng cắt nhau cùng nằm trong \\((P)\\)",
        "\\(d\\) vuông góc với hai đường thẳng song song nằm trong \\((P)\\)",
        "\\(d\\) vuông góc với một đường thẳng nằm trong \\((P)\\)",
        "\\(d\\) cắt hai đường thẳng nằm trong \\((P)\\)"
      ],
      ans: 0,
      exp: "Định lí dấu hiệu nhận biết: Nếu đường thẳng \\(d\\) vuông góc với hai đường thẳng cắt nhau cùng thuộc mặt phẳng \\((P)\\) thì \\(d \\perp (P)\\)."
    },
    {
      q: "Cho hình chóp \\(S.ABC\\) có \\(SA \\perp (ABC)\\) và \\(\\triangle ABC\\) vuông tại \\(B\\). Khẳng định nào dưới đây là ĐÚNG?",
      options: [
        "\\(BC \\perp (SAB)\\)",
        "\\(AC \\perp (SAB)\\)",
        "\\(AB \\perp (SBC)\\)",
        "\\(SB \\perp (SAC)\\)"
      ],
      ans: 0,
      exp: "Ta có \\(BC \\perp AB\\) (do \\(\\triangle ABC\\) vuông tại \\(B\\)) và \\(BC \\perp SA\\) (do \\(SA \\perp (ABC)\\)). Vì \\(AB, SA\\) cắt nhau trong \\((SAB)\\) nên \\(BC \\perp (SAB)\\)."
    },
    {
      q: "Cho hình chóp \\(S.ABCD\\) có đáy \\(ABCD\\) là hình thoi tâm \\(O\\) và \\(SA = SC,\\; SB = SD\\). Đường thẳng nào sau đây vuông góc với mặt phẳng \\((SBD)\\)?",
      options: [
        "\\(AC\\)",
        "\\(AB\\)",
        "\\(CD\\)",
        "\\(BC\\)"
      ],
      ans: 0,
      exp: "Vì \\(\\triangle SAC\\) cân tại \\(S\\) có \\(O\\) là trung điểm \\(AC\\) nên \\(SO \\perp AC\\). Mặt khác \\(ABCD\\) là hình thoi nên \\(AC \\perp BD\\). Do \\(SO\\) và \\(BD\\) cắt nhau trong \\((SBD)\\) nên \\(AC \\perp (SBD)\\) (đồng thời \\(SO \\perp (ABCD)\\))."
    }
  ],
  24: [
    {
      q: "Cho đường thẳng \\(d\\) cắt mặt phẳng \\((P)\\) nhưng không vuông góc với \\((P)\\). Góc giữa đường thẳng \\(d\\) và mặt phẳng \\((P)\\) là:",
      options: [
        "Góc giữa \\(d\\) và hình chiếu vuông góc \\(d'\\) của nó trên mặt phẳng \\((P)\\)",
        "Góc giữa \\(d\\) và một đường thẳng bất kì nằm trong \\((P)\\)",
        "Luôn bằng \\(90^\\circ\\)",
        "Góc giữa \\(d\\) và đường thẳng vuông góc với \\((P)\\)"
      ],
      ans: 0,
      exp: "Theo định nghĩa, góc giữa đường thẳng \\(d\\) và mặt phẳng \\((P)\\) (khi \\(d \\not\\perp (P)\\)) là góc giữa \\(d\\) và hình chiếu vuông góc \\(d'\\) của \\(d\\) trên \\((P)\\)."
    },
    {
      q: "Cho hình chóp \\(S.ABC\\) có \\(SA \\perp (ABC)\\), biết \\(SA = a\\sqrt{3}\\) và \\(AC = a\\). Góc giữa cạnh bên \\(SC\\) và mặt phẳng đáy \\((ABC)\\) bằng:",
      options: [
        "\\(60^\\circ\\)",
        "\\(30^\\circ\\)",
        "\\(45^\\circ\\)",
        "\\(90^\\circ\\)"
      ],
      ans: 0,
      exp: "Vì \\(SA \\perp (ABC)\\) tại \\(A\\) nên \\(AC\\) là hình chiếu vuông góc của \\(SC\\) trên \\((ABC)\\). Suy ra \\((SC, (ABC)) = \\widehat{SCA}\\). Trong \\(\\triangle SAC\\) vuông tại \\(A\\): \\(\\tan\\widehat{SCA} = \\frac{SA}{AC} = \\frac{a\\sqrt{3}}{a} = \\sqrt{3} \\implies \\widehat{SCA} = 60^\\circ\\)."
    },
    {
      q: "Cho hình chóp tứ giác đều \\(S.ABCD\\) có cạnh đáy bằng \\(a\\) và cạnh bên bằng \\(a\\sqrt{2}\\). Giá trị \\(\\cos\\alpha\\) của góc \\(\\alpha\\) giữa cạnh bên \\(SA\\) và mặt đáy \\((ABCD)\\) là:",
      options: [
        "\\(\\cos\\alpha = \\frac{1}{2}\\) (tức \\(\\alpha = 60^\\circ\\))",
        "\\(\\cos\\alpha = \\frac{\\sqrt{2}}{2}\\)",
        "\\(\\cos\\alpha = \\frac{\\sqrt{3}}{2}\\)",
        "\\(\\cos\\alpha = \\frac{1}{3}\\)"
      ],
      ans: 0,
      exp: "Gọi \\(O = AC \\cap BD\\), vì \\(S.ABCD\\) là chóp đều nên \\(SO \\perp (ABCD)\\). Hình chiếu của \\(SA\\) lên \\((ABCD)\\) là \\(AO = \\frac{AC}{2} = \\frac{a\\sqrt{2}}{2}\\). Do đó \\(\\cos\\alpha = \\cos\\widehat{SAO} = \\frac{AO}{SA} = \\frac{a\\sqrt{2}/2}{a\\sqrt{2}} = \\frac{1}{2} \\implies \\alpha = 60^\\circ\\)."
    }
  ],
  25: [
    {
      q: "Cho hai mặt phẳng \\((P)\\) và \\((Q)\\) vuông góc với nhau và cắt nhau theo giao tuyến \\(c\\). Nếu đường thẳng \\(d \\subset (P)\\) và \\(d \\perp c\\) thì:",
      options: [
        "\\(d \\perp (Q)\\)",
        "\\(d \\parallel (Q)\\)",
        "\\(d \\subset (Q)\\)",
        "\\(d\\) tạo với \\((Q)\\) góc \\(45^\\circ\\)"
      ],
      ans: 0,
      exp: "Định lí tính chất hai mặt phẳng vuông góc: Nếu hai mặt phẳng vuông góc với nhau thì bất kì đường thẳng nào nằm trong mặt phẳng này và vuông góc với giao tuyến cũng vuông góc với mặt phẳng kia (\\(d \\perp (Q)\\))."
    },
    {
      q: "Cho hình chóp \\(S.ABC\\) có \\(\\triangle ABC\\) vuông cân tại \\(B\\), \\(AB = BC = a\\), \\(SA \\perp (ABC)\\) và \\(SA = a\\). Số đo góc giữa hai mặt phẳng \\((SBC)\\) và \\((ABC)\\) bằng:",
      options: [
        "\\(45^\\circ\\)",
        "\\(60^\\circ\\)",
        "\\(30^\\circ\\)",
        "\\(90^\\circ\\)"
      ],
      ans: 0,
      exp: "Giao tuyến là \\(BC\\). Ta có \\(AB \\perp BC\\) và \\(SB \\perp BC\\) (do \\(BC \\perp (SAB)\\)), nên \\(((SBC), (ABC)) = (SB, AB) = \\widehat{SBA}\\). Vì \\(\\triangle SAB\\) vuông cân tại \\(A\\) (\\(SA = AB = a\\)) nên \\(\\widehat{SBA} = 45^\\circ\\)."
    },
    {
      q: "Cho hình chóp tứ giác đều \\(S.ABCD\\) có cạnh đáy bằng \\(a\\) và chiều cao \\(SO = \\frac{a\\sqrt{3}}{2}\\). Góc giữa mặt bên \\((SCD)\\) và mặt đáy \\((ABCD)\\) bằng:",
      options: [
        "\\(60^\\circ\\)",
        "\\(45^\\circ\\)",
        "\\(30^\\circ\\)",
        "\\(75^\\circ\\)"
      ],
      ans: 0,
      exp: "Gọi \\(M\\) là trung điểm \\(CD\\). Ta có \\(OM \\perp CD\\) (\\(OM = \\frac{a}{2}\\)) và \\(SM \\perp CD\\), nên \\(((SCD), (ABCD)) = \\widehat{SMO}\\). Trong \\(\\triangle SOM\\) vuông tại \\(O\\): \\(\\tan\\widehat{SMO} = \\frac{SO}{OM} = \\frac{a\\sqrt{3}/2}{a/2} = \\sqrt{3} \\implies \\widehat{SMO} = 60^\\circ\\)."
    }
  ],
  26: [
    {
      q: "Cho hình chóp \\(S.ABC\\) có \\(SA \\perp (ABC)\\), \\(SA = 3a\\), \\(\\triangle ABC\\) vuông tại \\(B\\) có \\(AB = 4a\\). Khoảng cách từ điểm \\(A\\) đến mặt phẳng \\((SBC)\\) bằng:",
      options: [
        "\\(\\frac{12a}{5}\\)",
        "\\(\\frac{5a}{12}\\)",
        "\\(\\frac{7a}{5}\\)",
        "\\(5a\\)"
      ],
      ans: 0,
      exp: "Vì \\(BC \\perp AB\\) và \\(BC \\perp SA\\) nên \\(BC \\perp (SAB)\\). Trong \\(\\triangle SAB\\) vuông tại \\(A\\), kẻ \\(AH \\perp SB\\) thì \\(AH \\perp (SBC) \\implies d(A, (SBC)) = AH\\). Ta có \\(AH = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{3a \\cdot 4a}{5a} = \\frac{12a}{5}\\)."
    },
    {
      q: "Cho hình lập phương \\(ABCD.A'B'C'D'\\) có cạnh bằng \\(a\\). Khoảng cách giữa hai đường thẳng chéo nhau \\(AA'\\) và \\(BD\\) bằng:",
      options: [
        "\\(\\frac{a\\sqrt{2}}{2}\\)",
        "\\(a\\)",
        "\\(a\\sqrt{2}\\)",
        "\\(\\frac{a\\sqrt{3}}{2}\\)"
      ],
      ans: 0,
      exp: "Gọi \\(O = AC \\cap BD\\). Trong hình vuông \\(ABCD\\), \\(AO \\perp BD\\); mặt khác \\(AA' \\perp (ABCD) \\implies AA' \\perp AO\\). Vậy \\(AO\\) là đoạn vuông góc chung của \\(AA'\\) và \\(BD\\), nên \\(d(AA', BD) = AO = \\frac{a\\sqrt{2}}{2}\\)."
    },
    {
      q: "Cho tứ diện \\(O.ABC\\) có \\(OA, OB, OC\\) đôi một vuông góc và \\(OA = a,\\; OB = 2a,\\; OC = 2a\\). Khoảng cách \\(h\\) từ đỉnh \\(O\\) đến mặt phẳng \\((ABC)\\) bằng:",
      options: [
        "\\(\\frac{2a}{3}\\)",
        "\\(\\frac{3a}{2}\\)",
        "\\(\\frac{a}{3}\\)",
        "\\(\\frac{4a}{9}\\)"
      ],
      ans: 0,
      exp: "Áp dụng công thức tứ diện vuông: \\(\\frac{1}{h^2} = \\frac{1}{OA^2} + \\frac{1}{OB^2} + \\frac{1}{OC^2} = \\frac{1}{a^2} + \\frac{1}{4a^2} + \\frac{1}{4a^2} = \\frac{6}{4a^2} = \\frac{9}{4a^2} \\implies h = \\frac{2a}{3}\\)."
    }
  ],
  27: [
    {
      q: "Công thức tính thể tích \\(V\\) của khối chóp có diện tích đáy \\(B\\) và chiều cao \\(h\\), và thể tích \\(V'\\) của khối lăng trụ có cùng diện tích đáy \\(B\\) và chiều cao \\(h\\) lần lượt là:",
      options: [
        "\\(V = \\frac{1}{3}Bh;\\; V' = Bh\\)",
        "\\(V = Bh;\\; V' = \\frac{1}{3}Bh\\)",
        "\\(V = \\frac{1}{2}Bh;\\; V' = Bh\\)",
        "\\(V = \\frac{1}{3}Bh;\\; V' = 3Bh\\)"
      ],
      ans: 0,
      exp: "Khối chóp có thể tích \\(V = \\frac{1}{3}Bh\\), còn khối lăng trụ có thể tích \\(V' = Bh\\) (gấp 3 lần thể tích khối chóp có cùng diện tích đáy và chiều cao)."
    },
    {
      q: "Cho khối chóp \\(S.ABC\\) có đáy \\(ABC\\) là tam giác đều cạnh \\(a\\), \\(SA \\perp (ABC)\\) và \\(SA = 2a\\). Thể tích \\(V\\) của khối chóp \\(S.ABC\\) bằng:",
      options: [
        "\\(\\frac{a^3\\sqrt{3}}{6}\\)",
        "\\(\\frac{a^3\\sqrt{3}}{2}\\)",
        "\\(\\frac{a^3\\sqrt{3}}{4}\\)",
        "\\(\\frac{a^3\\sqrt{3}}{12}\\)"
      ],
      ans: 0,
      exp: "Diện tích đáy tam giác đều cạnh \\(a\\) là \\(B = \\frac{a^2\\sqrt{3}}{4}\\), chiều cao \\(h = SA = 2a\\). Vậy \\(V = \\frac{1}{3}Bh = \\frac{1}{3} \\cdot \\frac{a^2\\sqrt{3}}{4} \\cdot 2a = \\frac{a^3\\sqrt{3}}{6}\\)."
    },
    {
      q: "Một thùng đựng nước có dạng hình chóp cụt tứ giác đều với hai đáy là hình vuông có cạnh lần lượt là \\(2\\text{ dm}\\) và \\(4\\text{ dm}\\), chiều cao của thùng là \\(3\\text{ dm}\\). Dung tích của thùng nước đó là:",
      options: [
        "28 lít",
        "24 lít",
        "36 lít",
        "84 lít"
      ],
      ans: 0,
      exp: "Diện tích hai đáy là \\(B_1 = 2^2 = 4\\text{ dm}^2\\) và \\(B_2 = 4^2 = 16\\text{ dm}^2\\), chiều cao \\(h = 3\\text{ dm}\\). Thể tích chóp cụt: \\(V = \\frac{h}{3}(B_1 + B_2 + \\sqrt{B_1B_2}) = \\frac{3}{3}(4 + 16 + \\sqrt{4 \\cdot 16}) = 28\\text{ dm}^3 = 28\\) lít."
    }
  ],
  28: [
    {
      q: "Cho hai biến cố \\(A\\) và \\(B\\) có \\(P(A) > 0\\) và \\(P(B) > 0\\). Khẳng định nào dưới đây là ĐÚNG?",
      options: [
        "Nếu \\(A\\) và \\(B\\) là hai biến cố độc lập thì \\(P(A \\cap B) = P(A) \\cdot P(B)\\)",
        "Nếu \\(A\\) và \\(B\\) xung khắc thì chúng độc lập với nhau",
        "Biến cố hợp \\(A \\cup B\\) xảy ra khi cả \\(A\\) và \\(B\\) đồng thời xảy ra",
        "Luôn có \\(P(A \\cap B) = 0\\) với mọi \\(A, B\\)"
      ],
      ans: 0,
      exp: "Hai biến cố \\(A, B\\) độc lập khi và chỉ khi \\(P(A \\cap B) = P(A)P(B)\\). Nếu \\(A, B\\) xung khắc thì \\(P(A \\cap B) = 0 \\ne P(A)P(B)\\) nên chúng không độc lập."
    },
    {
      q: "Gieo một con xúc xắc cân đối và đồng chất 1 lần. Gọi \\(A\\) là biến cố 'Số chấm xuất hiện là số chẵn' và \\(B\\) là biến cố 'Số chấm xuất hiện lớn hơn 4'. Tập hợp mô tả biến cố giao \\(A \\cap B\\) là:",
      options: [
        "\\(\\{6\\}\\)",
        "\\(\\{2; 4; 5; 6\\}\\)",
        "\\(\\{4; 6\\}\\)",
        "\\(\\{5; 6\\}\\)"
      ],
      ans: 0,
      exp: "Ta có \\(A = \\{2; 4; 6\\}\\) và \\(B = \\{5; 6\\}\\). Suy ra biến cố giao \\(A \\cap B = \\{6\\}\\) và biến cố hợp \\(A \\cup B = \\{2; 4; 5; 6\\}\\)."
    },
    {
      q: "Hai xạ thủ \\(A\\) và \\(B\\) cùng bắn vào một tấm bia. Gọi \\(A_1, B_1\\) lần lượt là biến cố xạ thủ \\(A\\), xạ thủ \\(B\\) bắn trúng bia. Biến cố \\(C =\\) 'Chỉ có đúng một trong hai xạ thủ bắn trúng bia' được biểu diễn là:",
      options: [
        "\\(C = A_1\\bar{B}_1 \\cup \\bar{A}_1 B_1\\)",
        "\\(C = A_1 \\cup B_1\\)",
        "\\(C = A_1 \\cap B_1\\)",
        "\\(C = \\bar{A}_1 \\cap \\bar{B}_1\\)"
      ],
      ans: 0,
      exp: "'Có đúng 1 người bắn trúng' gồm 2 trường hợp xung khắc: hoặc \\(A\\) trúng và \\(B\\) trượt (\\(A_1\\bar{B}_1\\)), hoặc \\(A\\) trượt và \\(B\\) trúng (\\(\\bar{A}_1 B_1\\)). Vậy \\(C = A_1\\bar{B}_1 \\cup \\bar{A}_1 B_1\\)."
    }
  ],
  29: [
    {
      q: "Cho hai biến cố \\(A\\) và \\(B\\) bất kì. Công thức cộng xác suất tổng quát là:",
      options: [
        "\\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\)",
        "\\(P(A \\cup B) = P(A) + P(B)\\)",
        "\\(P(A \\cup B) = P(A) \\cdot P(B)\\)",
        "\\(P(A \\cup B) = P(A) + P(B) + P(A \\cap B)\\)"
      ],
      ans: 0,
      exp: "Với hai biến cố \\(A, B\\) bất kì, \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\). Chỉ khi \\(A, B\\) xung khắc (\\(P(A \\cap B) = 0\\)) mới có \\(P(A \\cup B) = P(A) + P(B)\\)."
    },
    {
      q: "Một lớp học có 40 học sinh, trong đó có 25 em giỏi Toán, 18 em giỏi Vật lí và 10 em giỏi cả hai môn Toán và Vật lí. Chọn ngẫu nhiên 1 học sinh trong lớp. Xác suất để học sinh được chọn giỏi ít nhất một trong hai môn Toán hoặc Vật lí là:",
      options: [
        "\\(\\frac{33}{40}\\)",
        "\\(\\frac{43}{40}\\)",
        "\\(\\frac{23}{40}\\)",
        "\\(\\frac{10}{40}\\)"
      ],
      ans: 0,
      exp: "Ta có \\(P(A) = \\frac{25}{40},\\; P(B) = \\frac{18}{40}\\) và \\(P(A \\cap B) = \\frac{10}{40}\\). Áp dụng công thức cộng: \\(P(A \\cup B) = \\frac{25}{40} + \\frac{18}{40} - \\frac{10}{40} = \\frac{33}{40}\\)."
    },
    {
      q: "Chọn ngẫu nhiên một số nguyên dương từ \\(1\\) đến \\(30\\). Xác suất để số được chọn chia hết cho \\(3\\) hoặc chia hết cho \\(5\\) là:",
      options: [
        "\\(\\frac{7}{15}\\)",
        "\\(\\frac{8}{15}\\)",
        "\\(\\frac{1}{2}\\)",
        "\\(\\frac{2}{5}\\)"
      ],
      ans: 0,
      exp: "Từ 1 đến 30 có 10 số chia hết cho 3 (\\(|A|=10\\)), 6 số chia hết cho 5 (\\(|B|=6\\)) và 2 số chia hết cho cả 3 và 5 (chia hết cho 15 là 15 và 30, \\(|A\\cap B|=2\\)). Vậy \\(P(A \\cup B) = \\frac{10 + 6 - 2}{30} = \\frac{14}{30} = \\frac{7}{15}\\)."
    }
  ],
  30: [
    {
      q: "Cho hai biến cố độc lập \\(A\\) và \\(B\\) với \\(P(A) = 0,6\\) và \\(P(B) = 0,5\\). Xác suất của biến cố giao \\(P(A \\cap B)\\) và biến cố hợp \\(P(A \\cup B)\\) lần lượt là:",
      options: [
        "\\(P(A \\cap B) = 0,3;\\; P(A \\cup B) = 0,8\\)",
        "\\(P(A \\cap B) = 0,3;\\; P(A \\cup B) = 1,1\\)",
        "\\(P(A \\cap B) = 0,1;\\; P(A \\cup B) = 0,8\\)",
        "\\(P(A \\cap B) = 0,3;\\; P(A \\cup B) = 0,7\\)"
      ],
      ans: 0,
      exp: "Vì \\(A, B\\) độc lập nên \\(P(A \\cap B) = P(A)P(B) = 0,6 \\cdot 0,5 = 0,3\\). Suy ra \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0,6 + 0,5 - 0,3 = 0,8\\)."
    },
    {
      q: "Hai xạ thủ bắn độc lập vào một mục tiêu. Xác suất bắn trúng của người thứ nhất là \\(0,8\\) và của người thứ hai là \\(0,7\\). Xác suất để mục tiêu bị bắn trúng (ít nhất một người bắn trúng) là:",
      options: [
        "\\(0,94\\)",
        "\\(0,56\\)",
        "\\(0,90\\)",
        "\\(0,38\\)"
      ],
      ans: 0,
      exp: "Xác suất cả hai người cùng bắn trượt là \\(P(\\bar{A}\\bar{B}) = (1 - 0,8)(1 - 0,7) = 0,2 \\cdot 0,3 = 0,06\\). Vậy xác suất có ít nhất 1 người bắn trúng là \\(1 - 0,06 = 0,94\\)."
    },
    {
      q: "Một hệ thống gồm 3 động cơ hoạt động độc lập có xác suất hoạt động tốt trong ngày lần lượt là \\(0,9;\\; 0,8\\) và \\(0,7\\). Xác suất để trong ngày có ĐÚNG 2 động cơ hoạt động tốt là:",
      options: [
        "\\(0,398\\)",
        "\\(0,504\\)",
        "\\(0,452\\)",
        "\\(0,092\\)"
      ],
      ans: 0,
      exp: "Ba trường hợp xung khắc có đúng 2 động cơ tốt: \\(P = 0,9 \\cdot 0,8 \\cdot (1 - 0,7) + 0,9 \\cdot (1 - 0,8) \\cdot 0,7 + (1 - 0,9) \\cdot 0,8 \\cdot 0,7 = 0,216 + 0,126 + 0,056 = 0,398\\)."
    }
  ],
  31: [
    {
      q: "Cho hàm số \\(y = f(x)\\) có đạo hàm tại \\(x_0\\) là \\(f'(x_0)\\). Phương trình tiếp tuyến của đồ thị hàm số tại điểm \\(M_0(x_0; f(x_0))\\) là:",
      options: [
        "\\(y = f'(x_0)(x - x_0) + f(x_0)\\)",
        "\\(y = f'(x_0)(x + x_0) - f(x_0)\\)",
        "\\(y = f(x_0)(x - x_0) + f'(x_0)\\)",
        "\\(y = f'(x)(x - x_0) + f(x_0)\\)"
      ],
      ans: 0,
      exp: "Theo ý nghĩa hình học của đạo hàm, tiếp tuyến tại \\(M_0(x_0; f(x_0))\\) có hệ số góc \\(k = f'(x_0)\\) và có phương trình \\(y - f(x_0) = f'(x_0)(x - x_0) \\iff y = f'(x_0)(x - x_0) + f(x_0)\\)."
    },
    {
      q: "Phương trình tiếp tuyến của đồ thị hàm số \\(y = x^3 - 2x + 1\\) tại điểm có hoành độ \\(x_0 = 2\\) là:",
      options: [
        "\\(y = 10x - 15\\)",
        "\\(y = 10x + 5\\)",
        "\\(y = 12x - 19\\)",
        "\\(y = 10x - 20\\)"
      ],
      ans: 0,
      exp: "Tại \\(x_0 = 2\\), ta có \\(y_0 = 2^3 - 2 \\cdot 2 + 1 = 5\\). Đạo hàm \\(y' = 3x^2 - 2 \\implies y'(2) = 3 \\cdot 4 - 2 = 10\\). Phương trình tiếp tuyến: \\(y = 10(x - 2) + 5 = 10x - 15\\)."
    },
    {
      q: "Một chất điểm chuyển động thẳng theo phương trình \\(s(t) = t^3 - 3t^2 + 12t + 2\\) (\\(s\\) tính bằng mét, \\(t\\) tính bằng giây). Vận tốc tức thời của chất điểm tại thời điểm \\(t = 3\\text{ s}\\) là:",
      options: [
        "\\(21\\text{ m/s}\\)",
        "\\(14\\text{ m/s}\\)",
        "\\(38\\text{ m/s}\\)",
        "\\(12\\text{ m/s}\\)"
      ],
      ans: 0,
      exp: "Vận tốc tức thời \\(v(t) = s'(t) = 3t^2 - 6t + 12\\). Tại \\(t = 3\\text{ s}\\), ta có \\(v(3) = 3 \\cdot 3^2 - 6 \\cdot 3 + 12 = 27 - 18 + 12 = 21\\text{ m/s}\\)."
    }
  ],
  32: [
    {
      q: "Đạo hàm của hàm số \\(y = \\sin 2x + e^{3x}\\) là:",
      options: [
        "\\(y' = 2\\cos 2x + 3e^{3x}\\)",
        "\\(y' = \\cos 2x + e^{3x}\\)",
        "\\(y' = -2\\cos 2x + 3e^{3x}\\)",
        "\\(y' = 2\\cos 2x + e^{3x}\\)"
      ],
      ans: 0,
      exp: "Áp dụng quy tắc đạo hàm hàm hợp: \\((\\sin 2x)' = (2x)'\\cos 2x = 2\\cos 2x\\) và \\((e^{3x})' = (3x)'e^{3x} = 3e^{3x}\\)."
    },
    {
      q: "Đạo hàm của hàm số \\(y = \\frac{2x + 1}{x - 2}\\) (với \\(x \\ne 2\\)) là:",
      options: [
        "\\(y' = -\\frac{5}{(x - 2)^2}\\)",
        "\\(y' = \\frac{5}{(x - 2)^2}\\)",
        "\\(y' = -\\frac{3}{(x - 2)^2}\\)",
        "\\(y' = \\frac{2}{(x - 2)^2}\\)"
      ],
      ans: 0,
      exp: "Áp dụng công thức đạo hàm thương \\(\\left(\\frac{ax+b}{cx+d}\\right)' = \\frac{ad - bc}{(cx+d)^2}\\), ta có \\(y' = \\frac{2 \\cdot (-2) - 1 \\cdot 1}{(x - 2)^2} = -\\frac{5}{(x - 2)^2}\\)."
    },
    {
      q: "Cho hàm số \\(y = \\ln(x^2 + 1)\\). Giá trị của \\(y'(2)\\) bằng:",
      options: [
        "\\(\\frac{4}{5}\\)",
        "\\(\\frac{1}{5}\\)",
        "\\(\\frac{2}{5}\\)",
        "\\(1\\)"
      ],
      ans: 0,
      exp: "Áp dụng công thức \\((\\ln u)' = \\frac{u'}{u}\\), ta có \\(y' = \\frac{(x^2 + 1)'}{x^2 + 1} = \\frac{2x}{x^2 + 1}\\). Thay \\(x = 2\\) được \\(y'(2) = \\frac{2 \\cdot 2}{2^2 + 1} = \\frac{4}{5}\\)."
    }
  ],
  33: [
    {
      q: "Cho hàm số \\(f(x) = x^4 - 3x^2 + 5x - 1\\). Đạo hàm cấp hai \\(f''(x)\\) của hàm số là:",
      options: [
        "\\(f''(x) = 12x^2 - 6\\)",
        "\\(f''(x) = 4x^3 - 6x + 5\\)",
        "\\(f''(x) = 12x^2 - 6x\\)",
        "\\(f''(x) = 24x\\)"
      ],
      ans: 0,
      exp: "Ta có \\(f'(x) = 4x^3 - 6x + 5\\). Lấy đạo hàm tiếp lần thứ hai được \\(f''(x) = (4x^3 - 6x + 5)' = 12x^2 - 6\\)."
    },
    {
      q: "Cho hàm số \\(y = \\cos 3x\\). Khẳng định nào dưới đây là ĐÚNG?",
      options: [
        "\\(y'' + 9y = 0\\)",
        "\\(y'' - 9y = 0\\)",
        "\\(y'' + 3y = 0\\)",
        "\\(y'' = 9\\cos 3x\\)"
      ],
      ans: 0,
      exp: "Ta có \\(y' = -3\\sin 3x \\implies y'' = -9\\cos 3x = -9y \\iff y'' + 9y = 0\\)."
    },
    {
      q: "Một vật chuyển động thẳng có phương trình quãng đường \\(s(t) = t^3 - 6t^2 + 15t\\) (\\(s\\) tính bằng mét, \\(t\\) tính bằng giây). Gia tốc tức thời \\(a(t)\\) của vật tại thời điểm \\(t = 4\\text{ s}\\) bằng:",
      options: [
        "\\(12\\text{ m/s}^2\\)",
        "\\(24\\text{ m/s}^2\\)",
        "\\(15\\text{ m/s}^2\\)",
        "\\(0\\text{ m/s}^2\\)"
      ],
      ans: 0,
      exp: "Vận tốc \\(v(t) = s'(t) = 3t^2 - 12t + 15\\). Gia tốc \\(a(t) = v'(t) = s''(t) = 6t - 12\\). Tại \\(t = 4\\text{ s}\\), ta có \\(a(4) = 6 \\cdot 4 - 12 = 12\\text{ m/s}^2\\)."
    }
  ]
};

module.exports = { quizzes };
