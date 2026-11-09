const fs = require('fs');
const path = require('path');

const lessons = [
  {
    num: 1,
    id: "bai-1",
    chuyende: "Chuyên đề 1: Hệ phương trình bậc nhất ba ẩn",
    chuyendeId: "cd-1",
    title: "Bài 1. Hệ phương trình bậc nhất ba ẩn",
    subtitle: "Khái niệm phương trình, hệ phương trình ba ẩn, phương pháp khử Gauss và biện luận nghiệm",
    desc: "Nắm vững dạng tổng quát của phương trình và hệ phương trình bậc nhất ba ẩn, quy trình biến đổi tương đương đưa về hệ tam giác (phương pháp Gauss), cách đọc nghiệm và nhận biết trường hợp vô nghiệm, vô số nghiệm.",
    tag: "Chuyên đề 1 • Bài 1",
    sections: [
      {
        heading: "1. Phương trình và hệ phương trình bậc nhất ba ẩn",
        summary: "Phương trình bậc nhất ba ẩn $x, y, z$ có dạng $ax + by + cz = d$, trong đó $a, b, c, d$ là các số thực cho trước với $a^2 + b^2 + c^2 \\ne 0$.",
        details: [
          "**Nghiệm của phương trình:** Là bộ ba số có thứ tự $(x_0; y_0; z_0)$ sao cho khi thay vào phương trình ta được một đẳng thức đúng: $a x_0 + b y_0 + c z_0 = d$.",
          "**Hệ ba phương trình bậc nhất ba ẩn:** Là hệ gồm 3 phương trình bậc nhất dạng: $\\begin{cases} a_1 x + b_1 y + c_1 z = d_1 \\\\ a_2 x + b_2 y + c_2 z = d_2 \\\\ a_3 x + b_3 y + c_3 z = d_3 \\end{cases}$.",
          "**Nghiệm của hệ:** Là bộ ba số $(x_0; y_0; z_0)$ đồng thời thỏa mãn cả ba phương trình trong hệ.",
          "**Ý nghĩa hình học:** Mỗi phương trình bậc nhất ba ẩn biểu diễn một mặt phẳng trong không gian $Oxyz$. Nghiệm của hệ là giao điểm chung của ba mặt phẳng: duy nhất 1 điểm (nghiệm duy nhất), giao tuyến là đường thẳng/mặt phẳng trùng nhau (vô số nghiệm), hoặc không có điểm chung (vô nghiệm)."
        ]
      },
      {
        heading: "2. Phương pháp khử Gauss đưa về hệ bậc thang",
        summary: "Phương pháp Gauss biến đổi hệ ban đầu về hệ dạng tam giác hoặc hình thang bằng các phép biến đổi tương đương đại số.",
        details: [
          "**Ba phép biến đổi tương đương:** (1) Đổi chỗ hai phương trình; (2) Nhân hai vế của một phương trình với hằng số $k \\ne 0$; (3) Cộng vào một phương trình một bội số của phương trình khác.",
          "**Quy trình 4 bước:** (Bước 1) Chọn phương trình có hệ số của $x$ đơn giản làm phương trình đầu; khử ẩn $x$ ở hai phương trình còn lại. (Bước 2) Dùng phương trình thứ hai để khử ẩn $y$ ở phương trình thứ ba, thu được hệ dạng tam giác. (Bước 3) Giải ngược từ dưới lên: tìm $z$, thay lên tìm $y$, rồi thay lên phương trình đầu tìm $x$. (Bước 4) Thử lại nghiệm vào hệ gốc.",
          "**Dạng tam giác chuẩn:** $\\begin{cases} a_1 x + b_1 y + c_1 z = d_1 \\\\ b'_2 y + c'_2 z = d'_2 \\\\ c''_3 z = d''_3 \\end{cases}$. Khi $c''_3 \\ne 0$, ta có duy nhất $z = d''_3 / c''_3$."
        ]
      },
      {
        heading: "3. Nhận biết số nghiệm sau khi khử Gauss & Kĩ năng tính toán",
        summary: "Dựa vào dòng phương trình cuối cùng của hệ bậc thang để kết luận chính xác số nghiệm của hệ.",
        details: [
          "**Hệ vô nghiệm:** Khi quá trình khử xuất hiện một phương trình vô lí dạng $0x + 0y + 0z = k$ với $k \\ne 0$ (ví dụ: $0 = 5$).",
          "**Hệ có nghiệm duy nhất:** Khi hệ đưa về đúng dạng tam giác với các hệ số trên đường chéo chính đều khác 0 ($a_1, b'_2, c''_3 \\ne 0$).",
          "**Hệ có vô số nghiệm:** Khi xuất hiện phương trình đồng nhất $0 = 0$ và số phương trình độc lập còn lại ít hơn 3. Đặt ẩn tự do là tham số $t \\in \\mathbb{R}$, sau đó biểu diễn các ẩn còn lại theo $t$.",
          "**Lỗi sai thường gặp:** Nhân không hết các hạng tử ở vế phải $d_i$; nhầm dấu khi trừ hai phương trình; quên kiểm tra lại bộ nghiệm vào hệ ban đầu."
        ]
      }
    ],
    quizzes: [
      {
        q: "Phương trình nào dưới đây là phương trình bậc nhất ba ẩn?",
        options: [
          "$2x - 3y + z^2 = 5$",
          "$3x - 4y + 5z = 7$",
          "$xy + yz + zx = 1$",
          "$x + \\frac{1}{y} + z = 3$"
        ],
        answer: 1,
        explain: "Phương trình bậc nhất ba ẩn có dạng $ax + by + cz = d$ với các ẩn có bậc là 1 và không có tích các ẩn với nhau."
      },
      {
        q: "Khi thực hiện phương pháp khử Gauss, xuất hiện phương trình $0x + 0y + 0z = -3$, ta kết luận hệ phương trình:",
        options: [
          "Có vô số nghiệm",
          "Có nghiệm duy nhất $(0; 0; -3)$",
          "Vô nghiệm",
          "Có hai nghiệm phân biệt"
        ],
        answer: 2,
        explain: "Phương trình $0 = -3$ là mâu thuẫn hiển nhiên, do đó hệ phương trình không tồn tại bộ số nào thỏa mãn, tức vô nghiệm."
      },
      {
        q: "Hệ phương trình bậc nhất ba ẩn $\\begin{cases} x + y + z = 6 \\\\ y - 2z = -3 \\\\ 3z = 6 \\end{cases}$ có nghiệm duy nhất là:",
        options: [
          "$(3; 1; 2)$",
          "$(1; 2; 3)$",
          "$(2; 1; 3)$",
          "$(3; 2; 1)$"
        ],
        answer: 0,
        explain: "Từ phương trình cuối: $z = 2$. Thay vào phương trình 2: $y - 2(2) = -3 \\implies y = 1$. Thay vào phương trình đầu: $x + 1 + 2 = 6 \\implies x = 3$. Vậy nghiệm là $(3; 1; 2)$."
      }
    ]
  },
  {
    num: 2,
    id: "bai-2",
    chuyende: "Chuyên đề 1: Hệ phương trình bậc nhất ba ẩn",
    chuyendeId: "cd-1",
    title: "Bài 2. Ứng dụng của hệ phương trình bậc nhất ba ẩn",
    subtitle: "Mô hình hóa toán học các bài toán sản xuất, pha trộn hợp kim, cân bằng phản ứng hóa học và mạch điện Kirchhoff",
    desc: "Vận dụng hệ phương trình bậc nhất ba ẩn để giải quyết các vấn đề đa ngành: kinh tế (cân bằng cung cầu, tối ưu chi phí), kĩ thuật điện (định luật Kirchhoff), hóa học (bảo toàn nguyên tố) và sinh học (sinh khối quần thể).",
    tag: "Chuyên đề 1 • Bài 2",
    sections: [
      {
        heading: "1. Quy trình 4 bước mô hình hóa bài toán thực tế",
        summary: "Chuyển đổi bài toán thực tế ngôn ngữ tự nhiên sang mô hình hệ phương trình bậc nhất ba ẩn.",
        details: [
          "**Bước 1 - Đặt ẩn & Điều kiện:** Gọi $x, y, z$ lần lượt là ba đại lượng cần tìm. Ghi rõ đơn vị tính và điều kiện ràng buộc thực tế (ví dụ: $x, y, z \\ge 0$ hoặc $x, y, z \\in \\mathbb{N}^*$).",
          "**Bước 2 - Thiết lập hệ phương trình:** Phân tích từng mối quan hệ cân bằng trong đề bài (tổng sản lượng, tổng chi phí, bảo toàn khối lượng) để viết 3 phương trình tuyến tính độc lập.",
          "**Bước 3 - Giải hệ phương trình:** Sử dụng phương pháp khử Gauss hoặc máy tính cầm tay để tìm bộ nghiệm $(x; y; z)$.",
          "**Bước 4 - Đối chiếu & Kết luận:** Kiểm tra nghiệm có thỏa mãn điều kiện thực tế không (ví dụ số người không thể là phân số âm) và trả lời theo ngữ cảnh đề bài."
        ]
      },
      {
        heading: "2. Các mô hình ứng dụng tiêu biểu trong khoa học & đời sống",
        summary: "Phân loại các bài toán thực tế liên quan đến hệ ba ẩn.",
        details: [
          "**Bài toán kinh tế & phân bổ vốn:** Tổng số tiền đầu tư $x + y + z = S$; tổng tiền lãi $\\sum r_i x_i = L$; quan hệ giữa các kênh đầu tư $x - 2y = 0$.",
          "**Pha trộn dung dịch & hợp kim:** Bảo toàn tổng khối lượng $x + y + z = M$; bảo toàn khối lượng chất tan theo phần trăm nồng độ $c_1 x + c_2 y + c_3 z = c_M M$.",
          "**Cân bằng phản ứng hóa học:** Dùng bảo toàn số nguyên tử của từng nguyên tố ở hai vế để lập hệ phương trình cho các hệ số tỉ lượng.",
          "**Mạch điện một chiều phức tạp (Định luật Kirchhoff):** Kirchhoff 1 tại nút mạch (tổng dòng vào bằng tổng dòng ra: $I_1 - I_2 - I_3 = 0$); Kirchhoff 2 cho các mắt lưới vòng kín (tổng sụt áp bằng tổng suất điện động: $\\sum I_k R_k = \\sum E_k$)."
        ]
      },
      {
        heading: "3. Cân bằng thị trường nhiều mặt hàng (Kinh tế học)",
        summary: "Xác định giá cân bằng của ba mặt hàng phụ thuộc lẫn nhau khi cung bằng cầu.",
        details: [
          "**Hàm cầu và hàm cung:** Hàm cầu $Q_{Di}(P_1, P_2, P_3)$ và hàm cung $Q_{Si}(P_1, P_2, P_3)$ tuyến tính theo giá $P_1, P_2, P_3$.",
          "**Điều kiện cân bằng:** Thị trường đạt trạng thái cân bằng đồng thời khi $Q_{D1} = Q_{S1}, Q_{D2} = Q_{S2}, Q_{D3} = Q_{S3}$.",
          "**Ý nghĩa thực tiễn:** Giúp các nhà hoạch định chính sách dự báo biến động giá hàng hóa thay thế và bổ sung khi có biến động thuế hoặc nguồn cung."
        ]
      }
    ],
    quizzes: [
      {
        q: "Khi giải bài toán mạch điện bằng định luật Kirchhoff, tìm được dòng điện $I_2 = -1{,}5\\text{ A}$, kết quả này có ý nghĩa gì?",
        options: [
          "Phép tính bị sai vì cường độ dòng điện luôn dương",
          "Dòng điện $I_2$ có độ lớn $1{,}5\\text{ A}$ và có chiều thực tế ngược với chiều đã giả định",
          "Mạch điện bị đoản mạch tại nhánh thứ 2",
          "Nguồn điện tại nhánh thứ 2 đã bị hỏng"
        ],
        answer: 1,
        explain: "Trong quy ước giải mạch điện theo định luật Kirchhoff, nghiệm âm thể hiện dòng điện thực tế chạy ngược chiều so với mũi tên giả định ban đầu."
      },
      {
        q: "Để pha được 100 kg hợp kim chứa 30% đồng từ ba loại quặng có hàm lượng đồng lần lượt là 10%, 25% và 50%, phương trình bảo toàn khối lượng đồng là:",
        options: [
          "$10x + 25y + 50z = 30$",
          "$0{,}1x + 0{,}25y + 0{,}5z = 30$",
          "$x + y + z = 30$",
          "$0{,}1x + 0{,}25y + 0{,}5z = 100$"
        ],
        answer: 1,
        explain: "Lượng đồng nguyên chất trong hợp kim mới là $100 \\times 30\\% = 30\\text{ kg}$. Tổng lượng đồng từ 3 quặng là $0{,}1x + 0{,}25y + 0{,}5z = 30$."
      },
      {
        q: "Một nhà máy sản xuất ba loại sản phẩm A, B, C sử dụng 3 loại máy cắt, hàn, sơn. Hệ phương trình mô tả thời gian máy hoạt động là hệ phương trình bậc nhất ba ẩn với các ẩn số là:",
        options: [
          "Thời gian từng máy hoạt động",
          "Số lượng sản phẩm mỗi loại A, B, C được sản xuất",
          "Đơn giá của từng sản phẩm",
          "Chi phí tiền điện của từng máy"
        ],
        answer: 1,
        explain: "Để lập kế hoạch sản xuất, đại lượng chưa biết cần tìm chính là số lượng sản phẩm mỗi loại $x, y, z$ cần làm ra để tối ưu hóa thời gian sử dụng các máy."
      }
    ]
  },
  {
    num: 3,
    id: "bai-3",
    chuyende: "Chuyên đề 2: Phương pháp quy nạp toán học. Nhị thức Newton",
    chuyendeId: "cd-2",
    title: "Bài 3. Phương pháp quy nạp toán học",
    subtitle: "Nguyên lí quy nạp toán học, mô hình domino, kĩ thuật chứng minh đẳng thức, chia hết và bất đẳng thức",
    desc: "Hiểu bản chất của chứng minh quy nạp toán học gồm bước cơ sở và bước quy nạp; nắm vững các bài toán kinh điển: tổng lũy thừa, tính chia hết, công thức số hạng tổng quát của dãy số và ngụy biện quy nạp.",
    tag: "Chuyên đề 2 • Bài 3",
    sections: [
      {
        heading: "1. Vì sao phép thử hữu hạn không thể thay thế chứng minh",
        summary: "Phép thử với một số giá trị ban đầu chỉ cho giả đoán, không thể khẳng định tính đúng đắn với vô hạn số tự nhiên.",
        details: [
          "**Ví dụ Euler kinh điển:** Biểu thức $P(n) = n^2 - n + 41$ cho kết quả là số nguyên tố với mọi $n = 1, 2, \\dots, 40$. Tuy nhiên, tại $n = 41$, $P(41) = 41^2 - 41 + 41 = 41^2$, là hợp số!",
          "**Kết luận sư phạm:** Không thể kiểm tra bằng phép liệt kê hữu hạn để kết luận một mệnh đề đúng với mọi $n \\in \\mathbb{N}^*$. Cần một công cụ suy diễn logic chặt chẽ: Phương pháp quy nạp toán học."
        ]
      },
      {
        heading: "2. Nguyên lí quy nạp toán học & Mô hình Domino",
        summary: "Để chứng minh mệnh đề $P(n)$ đúng với mọi số tự nhiên $n \\ge p$ ($p$ là số tự nhiên cho trước), ta tiến hành đúng 2 bước.",
        details: [
          "**Bước 1 - Bước cơ sở (Base case):** Kiểm tra mệnh đề $P(n)$ đúng khi $n = p$.",
          "**Bước 2 - Bước quy nạp (Inductive step):** Giả sử mệnh đề $P(n)$ đúng với số tự nhiên bất kì $k \\ge p$ (gọi là giả thiết quy nạp: $P(k)$ đúng), ta cần chứng minh mệnh đề cũng đúng với $n = k + 1$ (tức chứng minh $P(k+1)$ đúng).",
          "**Kết luận:** Mệnh đề $P(n)$ đúng với mọi số tự nhiên $n \\ge p$.",
          "**Mô hình dây chuyền Domino:** Quân cờ đầu tiên bị gạt đổ (Bước cơ sở) và cấu trúc xếp sao cho bất kì quân thứ $k$ đổ thì quân thứ $k+1$ liền kề cũng phải đổ (Bước quy nạp) $\\implies$ Toàn bộ hàng cờ vô hạn đổ."
        ]
      },
      {
        heading: "3. Các kết quả toán học mẫu mực chứng minh bằng quy nạp",
        summary: "Hệ thống các công thức trọng tâm trong chương trình.",
        details: [
          "**Tổng $n$ số tự nhiên đầu tiên:** $1 + 2 + 3 + \\dots + n = \\frac{n(n+1)}{2}$.",
          "**Tổng $n$ số lẻ đầu tiên:** $1 + 3 + 5 + \\dots + (2n-1) = n^2$.",
          "**Tính chia hết:** $n(n+1)(n+2)$ luôn chia hết cho 6 với mọi $n \\in \\mathbb{N}^*$.",
          "**Bất đẳng thức:** $2^n > 2n + 1$ với mọi $n \\ge 3$.",
          "**Hình học & Tài chính:** Tổng các góc trong đa giác lồi $n$ cạnh là $S_n = (n-2)180^\\circ$ ($n \\ge 3$); Công thức tích lũy lãi kép sau $n$ kì hạn: $T_n = A(1+r)^n$."
        ]
      }
    ],
    quizzes: [
      {
        q: "Trong phương pháp quy nạp toán học để chứng minh $P(n)$ đúng với mọi $n \\ge 2$, bước cơ sở cần chứng minh mệnh đề đúng với:",
        options: [
          "$n = 0$",
          "$n = 1$",
          "$n = 2$",
          "$n = 3$"
        ],
        answer: 2,
        explain: "Bước cơ sở luôn bắt đầu tại giá trị nhỏ nhất của tập hợp chỉ số $n$, ở đây đề bài yêu cầu $n \\ge 2$ nên bước cơ sở là kiểm tra tại $n = 2$."
      },
      {
        q: "Công thức tính tổng của $n$ số lẻ đầu tiên $S_n = 1 + 3 + 5 + \\dots + (2n-1)$ là:",
        options: [
          "$S_n = n(n+1)$",
          "$S_n = n^2$",
          "$S_n = 2n^2 - 1$",
          "$S_n = \\frac{n(2n-1)}{2}$"
        ],
        answer: 1,
        explain: "Với $n=1: 1=1^2$. Với $n=2: 1+3=4=2^2$. Với $n=3: 1+3+5=9=3^2$. Tổng $n$ số lẻ đầu tiên luôn bằng $n^2$."
      },
      {
        q: "Một bài chứng minh quy nạp bị xem là 'ngụy biện quy nạp' (như nghịch lí mọi con mèo cùng màu) là do nguyên nhân nào?",
        options: [
          "Không có máy tính hỗ trợ kiểm tra",
          "Bước chuyển quy nạp từ $k$ sang $k+1$ bị đứt đoạn tại giá trị nhỏ nhất (ví dụ từ $k=1$ sang $k=2$ không có phần tử giao nhau)",
          "Bước cơ sở kiểm tra quá nhiều giá trị",
          "Sử dụng công thức nhị thức Newton"
        ],
        answer: 1,
        explain: "Ngụy biện quy nạp xảy ra khi bước chuyển từ $k$ sang $k+1$ bị ngộ nhận, đặc biệt thất bại tại các giá trị biên nhỏ nhất khiến chuỗi suy luận sụp đổ."
      }
    ]
  },
  {
    num: 4,
    id: "bai-4",
    chuyende: "Chuyên đề 2: Phương pháp quy nạp toán học. Nhị thức Newton",
    chuyendeId: "cd-2",
    title: "Bài 4. Nhị thức Newton",
    subtitle: "Tam giác Pascal, công thức khai triển nhị thức Newton tổng quát, số hạng thứ k+1 và ứng dụng tính tổng tổ hợp",
    desc: "Nắm vững công thức khai triển nhị thức Newton $(a+b)^n$, liên hệ mật thiết với tam giác Pascal và các tính chất tổ hợp $C_n^k$, kĩ thuật xác định hệ số của lũy thừa $x^m$ và tính tổng các hệ số.",
    tag: "Chuyên đề 2 • Bài 4",
    sections: [
      {
        heading: "1. Tam giác Pascal & Các hệ thức tổ hợp",
        summary: "Tam giác Pascal là bảng số tam giác gồm các hệ số nhị thức, hình thành theo quy tắc cộng biên.",
        details: [
          "**Quy tắc xây dựng:** Hàng 0 gồm số 1. Hai đầu mỗi hàng luôn bằng 1; mỗi số ở giữa bằng tổng của hai số nằm ngay phía trên nó: $C_{n+1}^k = C_n^{k-1} + C_n^k$.",
          "**Tính đối xứng:** Các hệ số cách đều hai đầu hàng thì bằng nhau: $C_n^k = C_n^{n-k}$.",
          "**Ví dụ các hàng đầu:** Hàng 0: 1; Hàng 1: 1 1; Hàng 2: 1 2 1; Hàng 3: 1 3 3 1; Hàng 4: 1 4 6 4 1; Hàng 5: 1 5 10 10 5 1."
        ]
      },
      {
        heading: "2. Công thức nhị thức Newton tổng quát",
        summary: "Khai triển của lũy thừa nhị thức với số mũ nguyên dương $n$.",
        details: [
          "**Công thức khai triển:** $(a+b)^n = \\sum_{k=0}^{n} C_n^k a^{n-k} b^k = C_n^0 a^n + C_n^1 a^{n-1}b + \\dots + C_n^k a^{n-k}b^k + \\dots + C_n^n b^n$.",
          "**Số lượng hạng tử:** Khai triển của $(a+b)^n$ luôn có đúng $n + 1$ hạng tử.",
          "**Quy luật số mũ:** Tổng số mũ của $a$ và $b$ trong mỗi hạng tử luôn bằng $n$; số mũ của $a$ giảm dần từ $n$ về 0, số mũ của $b$ tăng dần từ 0 lên $n$.",
          "**Số hạng tổng quát (thứ $k+1$):** $T_{k+1} = C_n^k a^{n-k} b^k$ với $0 \\le k \\le n$."
        ]
      },
      {
        heading: "3. Phương pháp tìm hệ số & Ứng dụng tính tổng tổ hợp",
        summary: "Kĩ năng trọng tâm khi giải bài tập nhị thức Newton.",
        details: [
          "**Tìm hệ số của $x^m$ trong $(ax+b)^n$:** Viết số hạng tổng quát $T_{k+1} = C_n^k (ax)^{n-k} b^k = C_n^k a^{n-k} b^k x^{n-k}$. Cho số mũ $n - k = m \\implies k = n - m$. Hệ số cần tìm là $C_n^m a^m b^{n-m}$.",
          "**Tổng các hệ số:** Đặt $x = 1$ vào đa thức khai triển. Ví dụ trong $(a+b)^n$, thay $a=b=1$ ta có: $C_n^0 + C_n^1 + C_n^2 + \\dots + C_n^n = 2^n$.",
          "**Ý nghĩa đếm số tập con:** Tổng $\\sum_{k=0}^n C_n^k = 2^n$ chính là số lượng tất cả các tập con của một tập hợp gồm $n$ phần tử."
        ]
      }
    ],
    quizzes: [
      {
        q: "Trong khai triển nhị thức Newton của biểu thức $(x + 2)^5$, số lượng các hạng tử là:",
        options: [
          "5",
          "6",
          "10",
          "32"
        ],
        answer: 1,
        explain: "Khai triển $(a+b)^n$ luôn có đúng $n+1$ hạng tử. Với $n=5$, số hạng tử là $5 + 1 = 6$."
      },
      {
        q: "Hệ số của $x^3$ trong khai triển nhị thức của $(2x + 1)^4$ là:",
        options: [
          "8",
          "24",
          "32",
          "16"
        ],
        answer: 2,
        explain: "Số hạng chứa $x^3$ có dạng $T_{k+1} = C_4^k (2x)^{4-k} (1)^k$. Ta cần $4 - k = 3 \\implies k = 1$. Hệ số là $C_4^1 \\cdot 2^3 \\cdot 1^1 = 4 \\times 8 = 32$."
      },
      {
        q: "Giá trị của tổng tổ hợp $S = C_6^0 + C_6^1 + C_6^2 + C_6^3 + C_6^4 + C_6^5 + C_6^6$ bằng:",
        options: [
          "36",
          "64",
          "128",
          "720"
        ],
        answer: 1,
        explain: "Áp dụng hệ quả nhị thức Newton với $a=b=1$: $\\sum_{k=0}^6 C_6^k = (1+1)^6 = 2^6 = 64$."
      }
    ]
  },
  {
    num: 5,
    id: "bai-5",
    chuyende: "Chuyên đề 3: Ba đường conic và ứng dụng",
    chuyendeId: "cd-3",
    title: "Bài 5. Elip",
    subtitle: "Định nghĩa tiêu cự, trục lớn trục nhỏ, tâm sai, phương trình chính tắc, đường chuẩn và quỹ đạo Kepler",
    desc: "Nắm vững định nghĩa hình học của Elip qua tổng khoảng cách $MF_1 + MF_2 = 2a$, phương trình chính tắc $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, các yếu tố đối xứng, tâm sai $0 < e < 1$, phương trình đường chuẩn và mô hình quỹ đạo hành tinh.",
    tag: "Chuyên đề 3 • Bài 5",
    sections: [
      {
        heading: "1. Định nghĩa & Phương trình chính tắc của Elip",
        summary: "Elip là tập hợp các điểm $M$ có tổng khoảng cách tới hai tiêu điểm cố định $F_1, F_2$ bằng hằng số $2a$ lớn hơn tiêu cự.",
        details: [
          "**Hệ thức định nghĩa:** $MF_1 + MF_2 = 2a$ với $2a > 2c = F_1F_2 > 0$.",
          "**Phương trình chính tắc:** $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ với $a > b > 0$ và hệ thức liên hệ then chốt: $b^2 = a^2 - c^2$.",
          "**Hình chữ nhật cơ sở:** Có 4 đỉnh $(\\pm a; \\pm b)$, giới hạn elip trong miền $-a \\le x \\le a, -b \\le y \\le b$."
        ]
      },
      {
        heading: "2. Các yếu tố hình học & Đường chuẩn của Elip",
        summary: "Toàn bộ thông số kích thước và tính chất đối xứng của Elip chuẩn.",
        details: [
          "**Tiêu điểm & Tiêu cự:** Hai tiêu điểm $F_1(-c; 0), F_2(c; 0)$; tiêu cự bằng $2c = 2\\sqrt{a^2 - b^2}$.",
          "**Các đỉnh & Trục:** Trục lớn $A_1A_2 = 2a$ nằm trên $Ox$; trục nhỏ $B_1B_2 = 2b$ nằm trên $Oy$.",
          "**Tâm sai:** $e = \\frac{c}{a}$ ($0 < e < 1$). Tâm sai đo độ dẹt của elip: $e \\to 0$ thì elip gần tròn; $e \\to 1$ thì elip càng dẹt.",
          "**Bán kính qua tiêu điểm:** $MF_1 = a + ex; MF_2 = a - ex$.",
          "**Đường chuẩn:** Hai đường thẳng $\\Delta_1: x = -\\frac{a}{e} = -\\frac{a^2}{c}$ và $\\Delta_2: x = \\frac{a}{e} = \\frac{a^2}{c}$."
        ]
      },
      {
        heading: "3. Ứng dụng thực tế: Định luật Kepler & Phòng thì thầm",
        summary: "Mô hình elip trong thiên văn học và âm học kiến trúc.",
        details: [
          "**Định luật Kepler 1:** Mọi hành tinh chuyển động quanh Mặt Trời theo quỹ đạo elip với Mặt Trời nằm ở một tiêu điểm.",
          "**Điểm cận nhật & Viễn nhật:** Khoảng cách gần nhất $r_{\\min} = a - c$; khoảng cách xa nhất $r_{\\max} = a + c$. Suy ra bán trục lớn $a = \\frac{r_{\\max} + r_{\\min}}{2}$, tiêu cự $c = \\frac{r_{\\max} - r_{\\min}}{2}$ và tâm sai $e = \\frac{r_{\\max} - r_{\\min}}{r_{\\max} + r_{\\min}}$.",
          "**Tính chất quang học (Phòng thì thầm):** Mọi tia sóng âm hoặc ánh sáng phát ra từ một tiêu điểm sau khi phản xạ qua thành elip đều hội tụ chính xác về tiêu điểm còn lại."
        ]
      }
    ],
    quizzes: [
      {
        q: "Phương trình chính tắc của Elip có độ dài trục lớn bằng 10 và tiêu cự bằng 6 là:",
        options: [
          "$\\frac{x^2}{25} + \\frac{y^2}{16} = 1$",
          "$\\frac{x^2}{100} + \\frac{y^2}{36} = 1$",
          "$\\frac{x^2}{25} + \\frac{y^2}{9} = 1$",
          "$\\frac{x^2}{16} + \\frac{y^2}{25} = 1$"
        ],
        answer: 0,
        explain: "Trục lớn $2a = 10 \\implies a = 5 \\implies a^2 = 25$. Tiêu cự $2c = 6 \\implies c = 3$. Bán trục nhỏ $b^2 = a^2 - c^2 = 25 - 9 = 16$. Vậy phương trình là $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$."
      },
      {
        q: "Tâm sai $e$ của elip $(E): \\frac{x^2}{16} + \\frac{y^2}{12} = 1$ bằng:",
        options: [
          "$\\frac{1}{2}$",
          "$\\frac{\\sqrt{3}}{2}$",
          "$\\frac{1}{4}$",
          "$\\frac{3}{4}$"
        ],
        answer: 0,
        explain: "Ta có $a^2 = 16 \\implies a = 4$, $b^2 = 12 \\implies c = \\sqrt{16 - 12} = 2$. Tâm sai $e = \\frac{c}{a} = \\frac{2}{4} = 0{,}5 = \\frac{1}{2}$."
      },
      {
        q: "Khoảng cách từ Mặt Trời đến một tiểu hành tinh tại điểm cận nhật là $1{,}2\\text{ AU}$ và tại điểm viễn nhật là $1{,}8\\text{ AU}$. Tâm sai $e$ của quỹ đạo này là:",
        options: [
          "$0{,}1$",
          "$0{,}2$",
          "$0{,}3$",
          "$0{,}4$"
        ],
        answer: 1,
        explain: "Tâm sai $e = \\frac{r_{\\max} - r_{\\min}}{r_{\\max} + r_{\\min}} = \\frac{1{,}8 - 1{,}2}{1{,}8 + 1{,}2} = \\frac{0{,}6}{3{,}0} = 0{,}2$."
      }
    ]
  },
  {
    num: 6,
    id: "bai-6",
    chuyende: "Chuyên đề 3: Ba đường conic và ứng dụng",
    chuyendeId: "cd-3",
    title: "Bài 6. Hypebol",
    subtitle: "Định nghĩa hiệu khoảng cách, hai nhánh, đường tiệm cận, tâm sai, hypebol vuông và hệ thống định vị LORAN",
    desc: "Khảo sát định nghĩa Hypebol qua $|MF_1 - MF_2| = 2a$, phương trình chính tắc $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, hai đường tiệm cận $y = \\pm \\frac{b}{a}x$, tâm sai $e > 1$, đường chuẩn và ứng dụng định vị vi sai thời gian đến.",
    tag: "Chuyên đề 3 • Bài 6",
    sections: [
      {
        heading: "1. Định nghĩa & Phương trình chính tắc của Hypebol",
        summary: "Hypebol là tập hợp các điểm $M$ có giá trị tuyệt đối của hiệu khoảng cách tới hai tiêu điểm $F_1, F_2$ bằng hằng số $2a < 2c$.",
        details: [
          "**Hệ thức định nghĩa:** $|MF_1 - MF_2| = 2a$ với $0 < 2a < 2c = F_1F_2$.",
          "**Phương trình chính tắc:** $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ với $a, b > 0$ và hệ thức liên hệ then chốt: $c^2 = a^2 + b^2$ ($c > a$).",
          "**Hai nhánh độc lập:** Nhánh phải ($x \\ge a$) ứng với $MF_1 - MF_2 = 2a$; nhánh trái ($x \\le -a$) ứng với $MF_2 - MF_1 = 2a$."
        ]
      },
      {
        heading: "2. Các yếu tố hình học & Đường tiệm cận của Hypebol",
        summary: "Các đặc trưng hình học độc đáo của đường Hypebol.",
        details: [
          "**Đỉnh & Tiêu điểm:** Hai đỉnh $A_1(-a; 0), A_2(a; 0)$ trên trục hoành; độ dài trục thực là $2a$; độ dài trục ảo là $2b$. Hai tiêu điểm $F_1(-c; 0), F_2(c; 0)$.",
          "**Tâm sai:** $e = \\frac{c}{a} > 1$.",
          "**Hai đường tiệm cận:** $y = \\frac{b}{a}x$ và $y = -\\frac{b}{a}x$. Khi $|x| \\to \\infty$, các nhánh hypebol tiến sát vô hạn vào hai đường thẳng này mà không cắt chúng.",
          "**Hình chữ nhật cơ sở:** Các đỉnh $(\\pm a; \\pm b)$; hai đường chéo của hình chữ nhật này chính là hai đường tiệm cận.",
          "**Hypebol vuông (đều):** Khi $a = b$, phương trình là $x^2 - y^2 = a^2$, hai tiệm cận vuông góc $y = \\pm x$ và tâm sai cố định $e = \\sqrt{2}$."
        ]
      },
      {
        heading: "3. Ứng dụng định vị LORAN & Tháp giải nhiệt",
        summary: "Ứng dụng vật lí và kĩ thuật của hypebol.",
        details: [
          "**Định vị vô tuyến hàng hải LORAN:** Hiệu thời gian nhận tín hiệu từ hai trạm phát vô tuyến cố định là một hằng số $\\implies$ Tàu thuyền nằm trên một nhánh hypebol. Giao điểm của hai đường hypebol xác định tọa độ chính xác của con tàu.",
          "**Kiến trúc tháp làm mát:** Bề mặt hypeboloid tròn xoay có độ bền chịu tải gió bão cực cao và tối ưu hóa đối lưu luồng khí tản nhiệt."
        ]
      }
    ],
    quizzes: [
      {
        q: "Phương trình chính tắc của Hypebol có trục thực bằng 8 và tiêu cự bằng 10 là:",
        options: [
          "$\\frac{x^2}{16} - \\frac{y^2}{9} = 1$",
          "$\\frac{x^2}{64} - \\frac{y^2}{36} = 1$",
          "$\\frac{x^2}{16} - \\frac{y^2}{25} = 1$",
          "$\\frac{x^2}{9} - \\frac{y^2}{16} = 1$"
        ],
        answer: 0,
        explain: "Trục thực $2a = 8 \\implies a = 4 \\implies a^2 = 16$. Tiêu cự $2c = 10 \\implies c = 5$. Trục ảo $b^2 = c^2 - a^2 = 25 - 16 = 9$. Phương trình là $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$."
      },
      {
        q: "Phương trình hai đường tiệm cận của hypebol $(H): \\frac{x^2}{9} - \\frac{y^2}{16} = 1$ là:",
        options: [
          "$y = \\pm \\frac{3}{4}x$",
          "$y = \\pm \\frac{4}{3}x$",
          "$y = \\pm \\frac{16}{9}x$",
          "$y = \\pm \\frac{5}{3}x$"
        ],
        answer: 1,
        explain: "Hypebol có $a^2 = 9 \\implies a = 3$ và $b^2 = 16 \\implies b = 4$. Hai đường tiệm cận là $y = \\pm \\frac{b}{a}x = \\pm \\frac{4}{3}x$."
      },
      {
        q: "Một hypebol vuông có độ dài trục thực bằng trục ảo ($a = b$) thì tâm sai $e$ của nó luôn bằng:",
        options: [
          "$1$",
          "$\\sqrt{2}$",
          "$2$",
          "$\\sqrt{3}$"
        ],
        answer: 1,
        explain: "Với hypebol vuông, $c = \\sqrt{a^2 + a^2} = a\\sqrt{2}$. Tâm sai $e = \\frac{c}{a} = \\frac{a\\sqrt{2}}{a} = \\sqrt{2}$."
      }
    ]
  },
  {
    num: 7,
    id: "bai-7",
    chuyende: "Chuyên đề 3: Ba đường conic và ứng dụng",
    chuyendeId: "cd-3",
    title: "Bài 7. Parabol",
    subtitle: "Định nghĩa tiêu điểm - đường chuẩn, tham số tiêu p, tính chất quang học phản xạ và ứng dụng chảo anten",
    desc: "Khảo sát định nghĩa Parabol qua khoảng cách $MF = d(M, \\Delta)$, phương trình chính tắc $y^2 = 2px$ ($p > 0$), tiêu điểm $F(p/2; 0)$, đường chuẩn $x = -p/2$, tâm sai $e = 1$ và nguyên lí chảo vệ tinh hội tụ sóng.",
    tag: "Chuyên đề 3 • Bài 7",
    sections: [
      {
        heading: "1. Định nghĩa & Phương trình chính tắc của Parabol",
        summary: "Parabol là tập hợp các điểm $M$ cách đều một điểm cố định $F$ (tiêu điểm) và một đường thẳng cố định $\\Delta$ (đường chuẩn).",
        details: [
          "**Hệ thức định nghĩa:** $MF = d(M, \\Delta)$.",
          "**Tham số tiêu $p$:** Là khoảng cách từ tiêu điểm $F$ đến đường chuẩn $\\Delta$ ($p > 0$).",
          "**Phương trình chính tắc:** $y^2 = 2px$ ($p > 0$) với đỉnh tại gốc tọa độ $O(0; 0)$ và trục đối xứng là trục hoành $Ox$.",
          "**Lưu ý quy ước:** Điểm trên parabol luôn có $x \\ge 0$, đồ thị mở sang phía bên phải trục hoành."
        ]
      },
      {
        heading: "2. Các yếu tố hình học của Parabol",
        summary: "Toàn bộ thông số tọa độ và phương trình của Parabol chính tắc.",
        details: [
          "**Đỉnh:** Gốc tọa độ $O(0; 0)$.",
          "**Tiêu điểm:** $F\\left(\\frac{p}{2}; 0\\right)$.",
          "**Đường chuẩn:** $\\Delta: x = -\\frac{p}{2}$.",
          "**Tâm sai:** $e = 1$.",
          "**Bán kính qua tiêu điểm:** Với điểm $M(x; y)$ thuộc parabol, $MF = x + \\frac{p}{2}$.",
          "**Dây tiêu cự vuông góc (Latus rectum):** Dây cung đi qua tiêu điểm $F$ và vuông góc với trục đối xứng có độ dài bằng $2p$."
        ]
      },
      {
        heading: "3. Tính chất quang học & Ứng dụng chảo vệ tinh, đèn pha",
        summary: "Nguyên lí phản xạ chùm tia song song qua tiêu điểm parabol.",
        details: [
          "**Định lí quang học parabol:** Mọi tia sáng (hoặc sóng điện từ) song song với trục đối xứng của gương cầu parabol, sau khi phản xạ đều hội tụ chính xác tại tiêu điểm $F$. Ngược lại, nguồn sáng đặt tại $F$ sẽ phát ra chùm tia song song.",
          "**Ứng dụng chảo Anten Parabol:** Hội tụ tín hiệu sóng vô tuyến cực yếu từ vệ tinh không gian về đầu thu LNB đặt tại tiêu điểm.",
          "**Ứng dụng cầu vòm & quỹ đạo:** Cấu trúc cầu treo dây võng cáp chủ uốn theo hình parabol phân bố tải trọng đều xuống mố cầu."
        ]
      }
    ],
    quizzes: [
      {
        q: "Phương trình chính tắc của Parabol có tiêu điểm $F(3; 0)$ là:",
        options: [
          "$y^2 = 6x$",
          "$y^2 = 12x$",
          "$y^2 = 3x$",
          "$x^2 = 12y$"
        ],
        answer: 1,
        explain: "Tiêu điểm $F(p/2; 0) = F(3; 0) \\implies \\frac{p}{2} = 3 \\implies p = 6$. Phương trình chính tắc $y^2 = 2px = 2(6)x = 12x$."
      },
      {
        q: "Khoảng cách từ điểm $M(2; 4)$ thuộc parabol $(P): y^2 = 8x$ đến tiêu điểm $F$ của nó là:",
        options: [
          "4",
          "6",
          "8",
          "2"
        ],
        answer: 0,
        explain: "Ta có $2p = 8 \\implies p = 4 \\implies p/2 = 2$. Bán kính qua tiêu điểm của $M(x; y)$ là $MF = x + \\frac{p}{2} = 2 + 2 = 4$."
      },
      {
        q: "Một chảo vệ tinh có dạng mặt cắt parabol sâu 0,5 m và đường kính miệng chảo 2 m. Để tín hiệu thu mạnh nhất, đầu thu phải đặt cách đỉnh chảo một khoảng bằng:",
        options: [
          "$0{,}25\\text{ m}$",
          "$0{,}5\\text{ m}$",
          "$1{,}0\\text{ m}$",
          "$0{,}75\\text{ m}$"
        ],
        answer: 1,
        explain: "Chọn hệ trục tọa độ với đỉnh chảo tại $O(0;0)$. Miệng chảo có bán kính $y = 1\\text{ m}$ và độ sâu $x = 0{,}5\\text{ m}$. Điểm mép chảo là $(0{,}5; 1)$. Thay vào $y^2 = 2px \\implies 1^2 = 2p(0{,}5) \\implies p = 1$. Khoảng cách từ đỉnh đến tiêu điểm (nơi đặt đầu thu) là $\\frac{p}{2} = 0{,}5\\text{ m}$."
      }
    ]
  },
  {
    num: 8,
    id: "bai-8",
    chuyende: "Chuyên đề 3: Ba đường conic và ứng dụng",
    chuyendeId: "cd-3",
    title: "Bài 8. Sự thống nhất giữa ba đường conic",
    subtitle: "Mặt cắt hình nón Dandelin, định nghĩa tiêu điểm - đường chuẩn thống nhất và phân loại quỹ đạo thiên thể",
    desc: "Tổng hợp toàn diện mối liên hệ sâu sắc giữa Elip, Hypebol và Parabol: từ góc nghiêng mặt phẳng cắt mặt nón tròn xoay đến định nghĩa chung $\\frac{MF}{d(M, \\Delta)} = e$, phương trình conic tổng quát và quan hệ vận tốc vũ trụ.",
    tag: "Chuyên đề 3 • Bài 8",
    sections: [
      {
        heading: "1. Nguồn gốc hình học: Thiết diện mặt nón tròn xoay",
        summary: "Ba đường conic cùng xuất phát từ giao tuyến của mặt phẳng với một mặt nón tròn xoay hai đỉnh đối xứng.",
        details: [
          "**Góc mở:** Gọi $\\alpha$ là góc nghiêng giữa đường sinh và trục nón; $\\beta$ là góc giữa mặt phẳng cắt và trục nón.",
          "**Đường tròn:** Khi mặt phẳng vuông góc với trục nón ($\\beta = 90^\\circ$).",
          "**Đường Elip:** Khi mặt phẳng cắt toàn bộ các đường sinh của một nhánh ($0 < \\alpha < \\beta < 90^\\circ$).",
          "**Đường Parabol:** Khi mặt phẳng song song với một đường sinh của mặt nón ($\\beta = \\alpha$).",
          "**Đường Hypebol:** Khi mặt phẳng cắt cả hai nhánh của mặt nón ($0 \\le \\beta < \\alpha$)."
        ]
      },
      {
        heading: "2. Định nghĩa thống nhất Tiêu điểm - Đường chuẩn",
        summary: "Một định nghĩa đại số duy nhất mô tả trọn vẹn cả ba đường Conic.",
        details: [
          "**Định lí thống nhất:** Cho tiêu điểm cố định $F$, đường chuẩn cố định $\\Delta$ ($F \\notin \\Delta$) và hằng số tâm sai $e > 0$. Tập hợp các điểm $M$ thỏa mãn tỉ số $\\frac{MF}{d(M, \\Delta)} = e$ là một đường conic.",
          "**Bảng phân loại tâm sai:**",
          "- $0 < e < 1$: Đường **Elip** (quỹ đạo khép kín, tuần hoàn).",
          "- $e = 1$: Đường **Parabol** (quỹ đạo mở, vận tốc thoát cấp 2).",
          "- $e > 1$: Đường **Hypebol** (quỹ đạo mở, vận tốc lớn hơn vận tốc thoát).",
          "**Phương trình tổng quát:** Cho $F(f; 0)$ và $\\Delta: x = d$, phương trình có dạng $(x - f)^2 + y^2 = e^2 (x - d)^2$."
        ]
      },
      {
        heading: "3. Mô hình cơ học thiên thể & Vận tốc tại cận điểm quỹ đạo",
        summary: "Phân loại chuyển động của các vật thể trong trường hấp dẫn Mặt Trời.",
        details: [
          "**Khối lượng thiên thể trung tâm:** Khối lượng Mặt Trời $M$, hằng số hấp dẫn $G = 6{,}674 \\times 10^{-11}\\text{ N m}^2/\\text{kg}^2$, khoảng cách cận điểm $p$.",
          "**Quan hệ vận tốc vũ trụ tại đỉnh quỹ đạo:**",
          "- Quỹ đạo Elip: $\\sqrt{\\frac{GM}{p}} < v < \\sqrt{\\frac{2GM}{p}}$ (hành tinh, sao chổi chu kì ngắn Halley).",
          "- Quỹ đạo Parabol: $v = \\sqrt{\\frac{2GM}{p}}$ (sao chổi bay một lần rồi thoát li vĩnh viễn).",
          "- Quỹ đạo Hypebol: $v > \\sqrt{\\frac{2GM}{p}}$ (các thiên thể liên sao bay xuyên qua hệ Mặt Trời như 'Oumuamua)."
        ]
      }
    ],
    quizzes: [
      {
        q: "Tập hợp các điểm $M$ thỏa mãn tỉ số khoảng cách $\\frac{MF}{d(M, \\Delta)} = 0{,}8$ là đường gì?",
        options: [
          "Đường tròn",
          "Đường Elip",
          "Đường Parabol",
          "Đường Hypebol"
        ],
        answer: 1,
        explain: "Vì tỉ số $e = 0{,}8$ thỏa mãn $0 < e < 1$, theo định nghĩa tiêu điểm - đường chuẩn thống nhất, đây là đường Elip."
      },
      {
        q: "Thiết diện tạo bởi mặt phẳng song song với một đường sinh của hình nón tròn xoay là đường nào?",
        options: [
          "Đường Elip",
          "Đường Parabol",
          "Đường Hypebol",
          "Đoạn thẳng"
        ],
        answer: 1,
        explain: "Khi mặt phẳng cắt song song với đúng một đường sinh của mặt nón, giao tuyến thu được luôn là một đường Parabol."
      },
      {
        q: "Một tàu thăm dò không gian tại điểm cận nhật có khoảng cách $p$ tới Mặt Trời đạt vận tốc $v > \\sqrt{\\frac{2GM}{p}}$. Quỹ đạo bay của tàu thăm dò là:",
        options: [
          "Quỹ đạo tròn",
          "Quỹ đạo elip khép kín",
          "Quỹ đạo parabol",
          "Quỹ đạo hypebol mở thoát khỏi hệ Mặt Trời"
        ],
        answer: 3,
        explain: "Vận tốc $v > \\sqrt{\\frac{2GM}{p}}$ lớn hơn vận tốc vũ trụ cấp 2 (vận tốc parabol), do đó năng lượng cơ học dương và tàu chuyển động theo quỹ đạo hypebol mở ra không gian liên sao."
      }
    ]
  }
];

const outputPath = path.join(__dirname, 'cd_toan10_data.js');
fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(lessons, null, 2) + ';\n', 'utf8');
console.log('Successfully generated scratch/cd_toan10_data.js with ' + lessons.length + ' lessons.');
