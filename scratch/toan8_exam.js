// Toán 8 - Đề thi Đấu trường Trạng Nguyên 40 câu trắc nghiệm toàn diện (60:00)
module.exports = [
  // --- PHẦN 1: ĐA THỨC & HẰNG ĐẲNG THỨC (Chương I & II - 10 câu) ---
  {
    id: 1,
    part: 'Phần 1: Đa thức & Hằng đẳng thức',
    q: 'Bậc của đơn thức $-4x^3y^2z^4$ là:',
    opts: ['9', '8', '7', '5'],
    ans: 0,
    explain: 'Tổng số mũ của các biến là $3 + 2 + 4 = 9$.'
  },
  {
    id: 2,
    part: 'Phần 1: Đa thức & Hằng đẳng thức',
    q: 'Kết quả của phép nhân $3x^2y(2x - 5y)$ là:',
    opts: ['$6x^3y - 15x^2y^2$', '$6x^2y - 15x^2y^2$', '$5x^3y - 15x^2y^2$', '$6x^3y - 5x^2y^2$'],
    ans: 0,
    explain: '$3x^2y \\cdot 2x - 3x^2y \\cdot 5y = 6x^3y - 15x^2y^2$.'
  },
  {
    id: 3,
    part: 'Phần 1: Đa thức & Hằng đẳng thức',
    q: 'Đẳng thức nào sau đây là hằng đẳng thức hiệu hai bình phương?',
    opts: ['$A^2 - B^2 = (A - B)(A + B)$', '$(A - B)^2 = A^2 - 2AB + B^2$', '$(A - B)^2 = A^2 - B^2$', '$A^2 - B^2 = (A - B)^2$'],
    ans: 0,
    explain: 'Hiệu hai bình phương có công thức $A^2 - B^2 = (A - B)(A + B)$.'
  },
  {
    id: 4,
    part: 'Phần 1: Đa thức & Hằng đẳng thức',
    q: 'Khai triển $(2x - 1)^2$ ta được kết quả là:',
    opts: ['$4x^2 - 4x + 1$', '$4x^2 - 2x + 1$', '$2x^2 - 4x + 1$', '$4x^2 + 4x + 1$'],
    ans: 0,
    explain: '$(2x - 1)^2 = (2x)^2 - 2(2x)(1) + 1^2 = 4x^2 - 4x + 1$.'
  },
  {
    id: 5,
    part: 'Phần 1: Đa thức & Hằng đẳng thức',
    q: 'Biểu thức $(x + 2)^3$ có dạng khai triển là:',
    opts: ['$x^3 + 6x^2 + 12x + 8$', '$x^3 + 3x^2 + 6x + 8$', '$x^3 + 6x^2 + 6x + 8$', '$x^3 + 8$'],
    ans: 0,
    explain: '$(x + 2)^3 = x^3 + 3 \\cdot x^2 \\cdot 2 + 3 \\cdot x \\cdot 2^2 + 2^3 = x^3 + 6x^2 + 12x + 8$.'
  },
  {
    id: 6,
    part: 'Phần 1: Đa thức & Hằng đẳng thức',
    q: 'Đa thức $x^3 - 8$ được viết dưới dạng tích là:',
    opts: ['$(x - 2)(x^2 + 2x + 4)$', '$(x - 2)(x^2 - 2x + 4)$', '$(x + 2)(x^2 - 2x + 4)$', '$(x - 2)^3$'],
    ans: 0,
    explain: '$x^3 - 8 = x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)$.'
  },
  {
    id: 7,
    part: 'Phần 1: Đa thức & Hằng đẳng thức',
    q: 'Phân tích đa thức $5x(x - 2) - 3(x - 2)$ thành nhân tử ta được:',
    opts: ['$(x - 2)(5x - 3)$', '$(x - 2)(5x + 3)$', '$(x + 2)(5x - 3)$', '$5x - 3$'],
    ans: 0,
    explain: 'Đặt nhân tử chung $(x - 2)$ ra ngoài, ta được $(x - 2)(5x - 3)$.'
  },
  {
    id: 8,
    part: 'Phần 1: Đa thức & Hằng đẳng thức',
    q: 'Phân tích đa thức $x^2 - 6x + 9 - y^2$ thành nhân tử:',
    opts: ['$(x - 3 - y)(x - 3 + y)$', '$(x - 3 - y)^2$', '$(x + 3 - y)(x + 3 + y)$', '$(x - 6 - y)(x - 6 + y)$'],
    ans: 0,
    explain: '$(x^2 - 6x + 9) - y^2 = (x - 3)^2 - y^2 = (x - 3 - y)(x - 3 + y)$.'
  },
  {
    id: 9,
    part: 'Phần 1: Đa thức & Hằng đẳng thức',
    q: 'Thương của phép chia $(15x^4y^3 - 10x^3y^2) : (5x^2y^2)$ là:',
    opts: ['$3x^2y - 2x$', '$3x^2y + 2x$', '$3xy - 2$', '$3x^2 - 2x$'],
    ans: 0,
    explain: '$15x^4y^3 : 5x^2y^2 - 10x^3y^2 : 5x^2y^2 = 3x^2y - 2x$.'
  },
  {
    id: 10,
    part: 'Phần 1: Đa thức & Hằng đẳng thức',
    q: 'Tìm $x$ biết: $(x - 3)(x + 3) - x(x - 2) = 1$.',
    opts: ['$x = 5$', '$x = -5$', '$x = 4$', '$x = 3$'],
    ans: 0,
    explain: '$x^2 - 9 - x^2 + 2x = 1 \\iff 2x - 9 = 1 \\iff 2x = 10 \\iff x = 5$.'
  },

  // --- PHẦN 2: HÌNH HỌC PHẲNG (Chương III & IV - 10 câu) ---
  {
    id: 11,
    part: 'Phần 2: Hình học phẳng',
    q: 'Tứ giác $ABCD$ có $\\widehat{A} = 65^\\circ, \\widehat{B} = 115^\\circ, \\widehat{C} = 80^\\circ$. Số đo góc $\\widehat{D}$ là:',
    opts: ['$100^\\circ$', '$90^\\circ$', '$110^\\circ$', '$80^\\circ$'],
    ans: 0,
    explain: 'Tổng 4 góc tứ giác là $360^\\circ \\implies \\widehat{D} = 360^\\circ - (65^\\circ + 115^\\circ + 80^\\circ) = 100^\\circ$.'
  },
  {
    id: 12,
    part: 'Phần 2: Hình học phẳng',
    q: 'Hình thang có hai đường chéo bằng nhau là:',
    opts: ['Hình thang cân', 'Hình chữ nhật', 'Hình bình hành', 'Hình thoi'],
    ans: 0,
    explain: 'Theo dấu hiệu nhận biết: Hình thang có hai đường chéo bằng nhau là hình thang cân.'
  },
  {
    id: 13,
    part: 'Phần 2: Hình học phẳng',
    q: 'Hình bình hành có hai đường chéo vuông góc với nhau là:',
    opts: ['Hình thoi', 'Hình chữ nhật', 'Hình thang cân', 'Hình vuông'],
    ans: 0,
    explain: 'Hình bình hành có hai đường chéo vuông góc là hình thoi.'
  },
  {
    id: 14,
    part: 'Phần 2: Hình học phẳng',
    q: 'Hình chữ nhật có hai cạnh kề bằng nhau là:',
    opts: ['Hình vuông', 'Hình thoi', 'Hình bình hành', 'Hình thang'],
    ans: 0,
    explain: 'Hình chữ nhật có hai cạnh kề bằng nhau là hình vuông.'
  },
  {
    id: 15,
    part: 'Phần 2: Hình học phẳng',
    q: 'Cho tam giác $ABC$ vuông tại $A$ có cạnh huyền $BC = 12$ cm. Độ dài đường trung tuyến $AM$ ứng với cạnh huyền là:',
    opts: ['6 cm', '12 cm', '4 cm', '8 cm'],
    ans: 0,
    explain: 'Trong tam giác vuông, trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: $AM = 12 : 2 = 6$ cm.'
  },
  {
    id: 16,
    part: 'Phần 2: Hình học phẳng',
    q: 'Cho $\\triangle ABC$ có $MN \\parallel BC$ ($M \\in AB, N \\in AC$). Biết $AM = 3$ cm, $MB = 6$ cm, $AN = 4$ cm. Độ dài $NC$ bằng:',
    opts: ['8 cm', '6 cm', '4 cm', '12 cm'],
    ans: 0,
    explain: 'Theo định lí Thalès: $\\frac{AM}{MB} = \\frac{AN}{NC} \\implies \\frac{3}{6} = \\frac{4}{NC} \\implies NC = \\frac{6 \\cdot 4}{3} = 8$ cm.'
  },
  {
    id: 17,
    part: 'Phần 2: Hình học phẳng',
    q: 'Đường trung bình của tam giác có tính chất:',
    opts: ['Song song với cạnh thứ ba và bằng một nửa cạnh ấy', 'Vuông góc với cạnh thứ ba', 'Bằng cạnh thứ ba', 'Đi qua trọng tâm tam giác'],
    ans: 0,
    explain: 'Đoạn thẳng nối trung điểm hai cạnh tam giác thì song song với cạnh thứ ba và bằng nửa cạnh ấy.'
  },
  {
    id: 18,
    part: 'Phần 2: Hình học phẳng',
    q: 'Cho $\\triangle ABC$, $AD$ là tia phân giác của $\\widehat{A}$ ($D \\in BC$). Đẳng thức nào sau đây ĐÚNG?',
    opts: ['$\\dfrac{BD}{DC} = \\dfrac{AB}{AC}$', '$\\dfrac{BD}{DC} = \\dfrac{AC}{AB}$', '$\\dfrac{BD}{AB} = \\dfrac{AC}{DC}$', '$\\dfrac{BD}{BC} = \\dfrac{AB}{AC}$'],
    ans: 0,
    explain: 'Theo tính chất đường phân giác: $\\dfrac{BD}{DC} = \\dfrac{AB}{AC}$.'
  },
  {
    id: 19,
    part: 'Phần 2: Hình học phẳng',
    q: 'Hình thoi có độ dài hai đường chéo là 6 cm và 8 cm. Diện tích của hình thoi đó là:',
    opts: ['$24\\text{ cm}^2$', '$48\\text{ cm}^2$', '$14\\text{ cm}^2$', '$28\\text{ cm}^2$'],
    ans: 0,
    explain: 'Diện tích hình thoi bằng nửa tích hai đường chéo: $S = \\frac{1}{2} \\cdot 6 \\cdot 8 = 24\\text{ cm}^2$.'
  },
  {
    id: 20,
    part: 'Phần 2: Hình học phẳng',
    q: 'Khẳng định nào sau đây là ĐÚNG?',
    opts: ['Hình vuông vừa là hình chữ nhật vừa là hình thoi', 'Mọi hình thoi đều là hình vuông', 'Mọi hình chữ nhật đều là hình vuông', 'Hình thang cân có hai đường chéo vuông góc'],
    ans: 0,
    explain: 'Hình vuông hội tụ đủ 4 góc vuông (hình chữ nhật) và 4 cạnh bằng nhau (hình thoi).'
  },

  // --- PHẦN 3: PHÂN THỨC & PHƯƠNG TRÌNH, HÀM SỐ (Chương VI & VII - 10 câu) ---
  {
    id: 21,
    part: 'Phần 3: Phân thức, Phương trình & Hàm số',
    q: 'Điều kiện xác định của phân thức $\\dfrac{x + 2}{x - 5}$ là:',
    opts: ['$x \\ne 5$', '$x \\ne -2$', '$x \\ne 0$', '$x > 5$'],
    ans: 0,
    explain: 'Mẫu thức khác 0: $x - 5 \\ne 0 \\iff x \\ne 5$.'
  },
  {
    id: 22,
    part: 'Phần 3: Phân thức, Phương trình & Hàm số',
    q: 'Rút gọn phân thức $\\dfrac{x^2 - 4}{2x - 4}$ được kết quả:',
    opts: ['$\\dfrac{x + 2}{2}$', '$\\dfrac{x - 2}{2}$', '$x + 2$', '$\\dfrac{1}{2}$'],
    ans: 0,
    explain: '$\\dfrac{(x - 2)(x + 2)}{2(x - 2)} = \\dfrac{x + 2}{2}$.'
  },
  {
    id: 23,
    part: 'Phần 3: Phân thức, Phương trình & Hàm số',
    q: 'Kết quả của phép tính $\\dfrac{3}{x - 1} + \\dfrac{2}{1 - x}$ là:',
    opts: ['$\\dfrac{1}{x - 1}$', '$\\dfrac{5}{x - 1}$', '$-\\dfrac{1}{x - 1}$', '$\\dfrac{1}{1 - x}$'],
    ans: 0,
    explain: '$\\dfrac{3}{x - 1} - \\dfrac{2}{x - 1} = \\dfrac{1}{x - 1}$.'
  },
  {
    id: 24,
    part: 'Phần 3: Phân thức, Phương trình & Hàm số',
    q: 'Thực hiện phép nhân $\\dfrac{x - 2}{3x} \\cdot \\dfrac{6x^2}{x^2 - 4}$ thu được kết quả là:',
    opts: ['$\\dfrac{2x}{x + 2}$', '$\\dfrac{2x}{x - 2}$', '$\\dfrac{x}{x + 2}$', '$\\dfrac{2}{x + 2}$'],
    ans: 0,
    explain: '$\\dfrac{x - 2}{3x} \\cdot \\dfrac{6x^2}{(x - 2)(x + 2)} = \\dfrac{2x}{x + 2}$.'
  },
  {
    id: 25,
    part: 'Phần 3: Phân thức, Phương trình & Hàm số',
    q: 'Phương trình nào sau đây là phương trình bậc nhất một ẩn?',
    opts: ['$2x - 5 = 0$', '$x^2 - 4 = 0$', '$0x + 3 = 0$', '$\\dfrac{1}{x} + 2 = 0$'],
    ans: 0,
    explain: 'Dạng $ax + b = 0$ với $a = 2 \\ne 0$.'
  },
  {
    id: 26,
    part: 'Phần 3: Phân thức, Phương trình & Hàm số',
    q: 'Nghiệm của phương trình $5x - 10 = 0$ là:',
    opts: ['$x = 2$', '$x = -2$', '$x = 5$', '$x = 10$'],
    ans: 0,
    explain: '$5x = 10 \\iff x = 2$.'
  },
  {
    id: 27,
    part: 'Phần 3: Phân thức, Phương trình & Hàm số',
    q: 'Hàm số $y = 2x - 3$ là hàm số bậc nhất đồng biến vì:',
    opts: ['Hệ số $a = 2 > 0$', 'Tung độ gốc $b = -3 < 0$', 'Hệ số $a = -3 < 0$', 'Đi qua gốc tọa độ'],
    ans: 0,
    explain: 'Hàm số bậc nhất $y = ax + b$ đồng biến khi và chỉ khi hệ số $a > 0$.'
  },
  {
    id: 28,
    part: 'Phần 3: Phân thức, Phương trình & Hàm số',
    q: 'Đồ thị hàm số $y = 3x - 6$ cắt trục tung tại điểm có tọa độ là:',
    opts: ['$(0; -6)$', '$(2; 0)$', '$(0; 6)$', '$(-6; 0)$'],
    ans: 0,
    explain: 'Cho $x = 0 \\implies y = -6$, vậy giao điểm với trục tung là $(0; -6)$.'
  },
  {
    id: 29,
    part: 'Phần 3: Phân thức, Phương trình & Hàm số',
    q: 'Đường thẳng $(d): y = -2x + 1$ có hệ số góc là:',
    opts: ['-2', '1', '2', '-1'],
    ans: 0,
    explain: 'Hệ số góc của đường thẳng $y = ax + b$ chính là hệ số $a = -2$.'
  },
  {
    id: 30,
    part: 'Phần 3: Phân thức, Phương trình & Hàm số',
    q: 'Hai đường thẳng $y = (m - 1)x + 2$ và $y = 3x - 1$ song song với nhau khi:',
    opts: ['$m = 4$', '$m = 3$', '$m = 2$', '$m = -4$'],
    ans: 0,
    explain: 'Để hai đường thẳng song song: $a = a\' \\iff m - 1 = 3 \\iff m = 4$ (và $2 \\ne -1$ luôn đúng).'
  },

  // --- PHẦN 4: THỐNG KÊ, XÁC SUẤT, ĐỒNG DẠNG & HÌNH KHỐI (Chương V, VIII, IX, X - 10 câu) ---
  {
    id: 31,
    part: 'Phần 4: Thống kê, Xác suất, Đồng dạng & Không gian',
    q: 'Gieo một con xúc xắc 6 mặt cân đối. Xác suất xuất hiện mặt có số chấm lớn hơn 4 là:',
    opts: ['$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$', '$\\dfrac{1}{6}$'],
    ans: 0,
    explain: 'Các mặt lớn hơn 4 là $\\{5; 6\\}$ (2 kết quả). Xác suất $P = \\frac{2}{6} = \\frac{1}{3}$.'
  },
  {
    id: 32,
    part: 'Phần 4: Thống kê, Xác suất, Đồng dạng & Không gian',
    q: 'Nếu thực hiện phép thử 200 lần và biến cố $A$ xuất hiện 80 lần thì xác suất thực nghiệm của $A$ là:',
    opts: ['0,4', '0,8', '0,2', '2,5'],
    ans: 0,
    explain: '$P_{TN} = \\frac{80}{200} = 0,4$.'
  },
  {
    id: 33,
    part: 'Phần 4: Thống kê, Xác suất, Đồng dạng & Không gian',
    q: 'Cho $\\triangle ABC \\sim \\triangle A\'B\'C\'$ theo tỉ số $k = 3$. Tỉ số diện tích $\\dfrac{S_{ABC}}{S_{A\'B\'C\'}}$ bằng:',
    opts: ['9', '3', '6', '$\\dfrac{1}{3}$'],
    ans: 0,
    explain: 'Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng: $k^2 = 3^2 = 9$.'
  },
  {
    id: 34,
    part: 'Phần 4: Thống kê, Xác suất, Đồng dạng & Không gian',
    q: 'Tam giác vuông có hai cạnh góc vuông là 9 cm và 12 cm. Cạnh huyền có độ dài là:',
    opts: ['15 cm', '21 cm', '18 cm', '16 cm'],
    ans: 0,
    explain: 'Áp dụng định lí Pythagore: $c^2 = 9^2 + 12^2 = 81 + 144 = 225 \\implies c = 15$ cm.'
  },
  {
    id: 35,
    part: 'Phần 4: Thống kê, Xác suất, Đồng dạng & Không gian',
    q: 'Một cọc tiêu cao 2 m có bóng dài 1 m. Cùng lúc đó bóng của cột cờ dài 5 m. Chiều cao của cột cờ là:',
    opts: ['10 m', '7 m', '2,5 m', '8 m'],
    ans: 0,
    explain: 'Theo tỉ số tam giác đồng dạng: $\\frac{h}{2} = \\frac{5}{1} \\implies h = 10$ m.'
  },
  {
    id: 36,
    part: 'Phần 4: Thống kê, Xác suất, Đồng dạng & Không gian',
    q: 'Mặt đáy của hình chóp tứ giác đều là hình gì?',
    opts: ['Hình vuông', 'Hình chữ nhật', 'Hình thoi', 'Tam giác đều'],
    ans: 0,
    explain: 'Hình chóp tứ giác đều có đáy là hình vuông và các mặt bên là tam giác cân bằng nhau.'
  },
  {
    id: 37,
    part: 'Phần 4: Thống kê, Xác suất, Đồng dạng & Không gian',
    q: 'Công thức tính diện tích xung quanh của hình chóp đều là:',
    opts: ['$S_{xq} = p \\cdot d$', '$S_{xq} = 2p \\cdot d$', '$S_{xq} = \\frac{1}{2} p \\cdot d$', '$S_{xq} = p \\cdot h$'],
    ans: 0,
    explain: 'Diện tích xung quanh hình chóp đều bằng nửa chu vi đáy nhân với trung đoạn: $S_{xq} = p \\cdot d$.'
  },
  {
    id: 38,
    part: 'Phần 4: Thống kê, Xác suất, Đồng dạng & Không gian',
    q: 'Thể tích của hình chóp tam giác đều có diện tích đáy $24\\text{ cm}^2$ và chiều cao $9$ cm là:',
    opts: ['$72\\text{ cm}^3$', '$216\\text{ cm}^3$', '$108\\text{ cm}^3$', '$36\\text{ cm}^3$'],
    ans: 0,
    explain: '$V = \\frac{1}{3} S_{đáy} \\cdot h = \\frac{1}{3} \\cdot 24 \\cdot 9 = 72\\text{ cm}^3$.'
  },
  {
    id: 39,
    part: 'Phần 4: Thống kê, Xác suất, Đồng dạng & Không gian',
    q: 'Cặp tam giác vuông nào sau đây ĐỒNG DẠNG với nhau?',
    opts: ['Có một góc nhọn bằng nhau', 'Có một cạnh huyền bằng nhau', 'Có chu vi bằng nhau', 'Có một cạnh góc vuông bằng nhau'],
    ans: 0,
    explain: 'Hai tam giác vuông có thêm 1 góc nhọn bằng nhau thì đồng dạng theo trường hợp góc - góc.'
  },
  {
    id: 40,
    part: 'Phần 4: Thống kê, Xác suất, Đồng dạng & Không gian',
    q: 'Dữ liệu nào sau đây là số liệu liên tục?',
    opts: ['Nhiệt độ sôi của một chất lỏng', 'Số học sinh trong một lớp', 'Số bàn thắng trong một trận đấu', 'Số ô tô trong bãi đỗ'],
    ans: 0,
    explain: 'Nhiệt độ thu được qua phép đo đạc và có thể nhận bất kì giá trị nào trong một khoảng liên tục.'
  }
];
