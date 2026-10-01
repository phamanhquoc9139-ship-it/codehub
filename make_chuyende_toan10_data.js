// Data for Chuyên đề học tập Toán 10 - Kết nối tri thức với cuộc sống (Chương trình GDPT 2018)
// 12 lessons: 3 Chuyên đề SGK + Ứng dụng & Dự án Capstone
// Each lesson has 4 interactive quizzes (total 48 quizzes)

const lessons = [
  // ==========================================
  // CHUYÊN ĐỀ 1: HỆ PHƯƠNG TRÌNH BẬC NHẤT BA ẨN
  // ==========================================
  {
    lessonNum: 1,
    id: "bai-1",
    topicNum: 1,
    topicName: "Chuyên đề 1: Hệ phương trình bậc nhất ba ẩn",
    title: "Bài 1: Hệ phương trình bậc nhất ba ẩn & Phương pháp khử Gauss",
    tag: "Đại số tuyến tính",
    objectives: [
      "Nắm vững định nghĩa dạng tổng quát của phương trình và hệ ba phương trình bậc nhất ba ẩn số: $a_i x + b_i y + c_i z = d_i$ ($i = 1, 2, 3$).",
      "Hiểu rõ khái niệm bộ ba số $(x_0, y_0, z_0)$ là nghiệm của hệ phương trình và các trường hợp nghiệm: nghiệm duy nhất, vô số nghiệm, vô nghiệm.",
      "Làm chủ thuật toán khử ẩn liên tiếp Gauss (Gaussian Elimination) để biến đổi tương đương hệ phương trình về dạng tam giác hoặc hình thang.",
      "Sử dụng thành thạo máy tính cầm tay (Casio fx-580VN X, fx-880BTG) để giải và kiểm tra nhanh kết quả hệ phương trình ba ẩn."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-shapes"></i> Dạng tổng quát & Hệ tam giác
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Dạng tổng quát:</strong> 
              $$\\begin{cases} a_1 x + b_1 y + c_1 z = d_1 \\\\ a_2 x + b_2 y + c_2 z = d_2 \\\\ a_3 x + b_3 y + c_3 z = d_3 \\end{cases}$$
            </li>
            <li><strong>Dạng tam giác:</strong> Phương trình 1 có 3 ẩn $(x, y, z)$, phương trình 2 chỉ còn 2 ẩn $(y, z)$, phương trình 3 chỉ còn 1 ẩn $z$. Giải ngược từ dưới lên: tìm $z \\rightarrow$ thay tìm $y \\rightarrow$ thay tìm $x$.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-calculator"></i> Phương pháp khử ẩn Gauss
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Phép biến đổi tương đương:</strong> Nhân một phương trình với số khác 0; Cộng/trừ một phương trình cho bội số của phương trình khác; Đổi chỗ 2 phương trình.</li>
            <li><strong>Mục tiêu:</strong> Khử ẩn $x$ ở phương trình 2 và 3 $\\rightarrow$ tiếp tục khử ẩn $y$ ở phương trình 3 để thu được hệ dạng tam giác chuẩn mực.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Khử ẩn x ở phương trình (2) và (3)",
        content: "Chọn phương trình (1) làm chuẩn. Nếu cần, nhân chéo hệ số rồi lấy (2) trừ bội số của (1) để triệt tiêu ẩn $x$; tương tự lấy (3) trừ bội số của (1) để triệt tiêu ẩn $x$."
      },
      {
        title: "Bước 2: Khử ẩn y ở phương trình (3)",
        content: "Sử dụng phương trình (2) mới (chỉ còn $y, z$) kết hợp với phương trình (3) mới (chỉ còn $y, z$) để triệt tiêu tiếp ẩn $y$, tạo ra phương trình bậc nhất một ẩn $z$."
      },
      {
        title: "Bước 3: Giải ngược và kết luận nghiệm",
        content: "Từ phương trình (3) tính ra nghiệm $z$ -> Thay $z$ vào phương trình (2) tìm ra $y$ -> Thay $y, z$ vào phương trình (1) tìm ra $x$ -> Kết luận nghiệm duy nhất $(x, y, z)$."
      }
    ],
    practice: "Giải hệ phương trình sau bằng phương pháp khử Gauss: \n$$\\begin{cases} x - 2y + z = 1 \\\\ 2x + y - z = 2 \\\\ -x + 3y + 2z = 6 \\end{cases}$$",
    quizzes: [
      {
        question: "Hệ ba phương trình bậc nhất ba ẩn được gọi là ở 'dạng tam giác' khi thỏa mãn điều kiện nào?",
        options: [
          "Phương trình thứ nhất chứa cả 3 ẩn, phương trình thứ hai chỉ chứa 2 ẩn và phương trình thứ ba chỉ chứa 1 ẩn",
          "Tất cả các hệ số trong hệ đều bằng nhau và bằng 3",
          "Mỗi phương trình đều có đồ thị hình tam giác đều",
          "Hệ có đúng 3 nghiệm phân biệt"
        ],
        correct: 0,
        explanation: "Hệ tam giác có cấu trúc bậc thang: $a_1 x + b_1 y + c_1 z = d_1$; $b_2 y + c_2 z = d_2$; $c_3 z = d_3$, giúp giải ngược tìm nghiệm một cách trực tiếp từ dưới lên."
      },
      {
        question: "Nghiệm của hệ phương trình $\\begin{cases} x + y + z = 6 \\\\ 2y - z = 1 \\\\ 3z = 9 \\end{cases}$ là bộ số $(x, y, z)$ nào?",
        options: [
          "(1, 2, 3)",
          "(2, 1, 3)",
          "(3, 2, 1)",
          "(1, 3, 2)"
        ],
        correct: 0,
        explanation: "Từ PT (3): $3z = 9 \\Rightarrow z = 3$. Thay vào PT (2): $2y - 3 = 1 \\Rightarrow 2y = 4 \\Rightarrow y = 2$. Thay vào PT (1): $x + 2 + 3 = 6 \\Rightarrow x = 1$. Vậy nghiệm là $(1, 2, 3)$."
      },
      {
        question: "Trong phương pháp khử Gauss, phép biến đổi nào sau đây KHÔNG làm thay đổi tập nghiệm của hệ phương trình?",
        options: [
          "Cộng vào một phương trình một bội số của một phương trình khác",
          "Bình phương cả hai vế của một phương trình",
          "Cộng thêm một hằng số khác 0 vào cả hai vế của một phương trình mà không cùng bậc",
          "Xóa bỏ một phương trình bất kỳ trong hệ"
        ],
        correct: 0,
        explanation: "Các phép biến đổi tương đương sơ cấp gồm: nhân với số khác 0, cộng bội số của phương trình khác, và đổi chỗ hai phương trình."
      },
      {
        question: "Khi đưa hệ phương trình về dạng tam giác, nếu xuất hiện một phương trình có dạng $0x + 0y + 0z = k$ với $k \\neq 0$ thì ta kết luận hệ như thế nào?",
        options: [
          "Hệ phương trình vô nghiệm",
          "Hệ phương trình có vô số nghiệm",
          "Hệ có nghiệm duy nhất bằng k",
          "Hệ có 3 nghiệm phân biệt"
        ],
        correct: 0,
        explanation: "Phương trình $0 = k$ (với $k \\neq 0$) là điều vô lý, do đó toàn bộ hệ phương trình không tồn tại bộ số nào thỏa mãn, tức vô nghiệm."
      }
    ]
  },
  {
    lessonNum: 2,
    id: "bai-2",
    topicNum: 1,
    topicName: "Chuyên đề 1: Hệ phương trình bậc nhất ba ẩn",
    title: "Bài 2: Ứng dụng hệ phương trình bậc nhất ba ẩn trong thực tiễn",
    tag: "Mô hình hóa thực tiễn",
    objectives: [
      "Biết cách chuyển đổi các bài toán thực tiễn bằng lời văn thành mô hình hệ ba phương trình bậc nhất ba ẩn số.",
      "Giải quyết bài toán kinh tế học: Cân bằng thị trường đa hàng hóa (xác định mức giá và sản lượng cân bằng của 3 mặt hàng có quan hệ thay thế/bổ sung).",
      "Ứng dụng cân bằng phương trình hóa học bằng phương pháp đại số (bảo toàn nguyên tố).",
      "Giải quyết bài toán mạch điện nhiều mắt lưới bằng định luật dòng điện và điện áp Kirchhoff (KCL & KVL)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-coins"></i> Cân bằng kinh tế & Dinh dưỡng
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Bài toán dinh dưỡng:</strong> Trộn 3 loại thực phẩm $A, B, C$ với khối lượng $x, y, z$ để cung cấp chính xác lượng calo, protein và chất béo theo chỉ định y khoa.</li>
            <li><strong>Thị trường 3 hàng hóa:</strong> Lập hệ phương trình cân bằng lượng Cung bằng lượng Cầu $Q_S(i) = Q_D(i)$ để tìm mức giá cân bằng $(P_1, P_2, P_3)$.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-flask-vial"></i> Hóa học & Vật lý kỹ thuật
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Cân bằng phản ứng oxi hóa - khử:</strong> Đặt hệ số $x, y, z$ trước các chất rồi lập hệ phương trình bảo toàn số nguyên tử từng nguyên tố ở 2 vế.</li>
            <li><strong>Mạch điện Kirchhoff:</strong> Lập phương trình nút dòng điện $\\sum I = 0$ và phương trình vòng điện áp $\\sum U = \\sum I \\cdot R$ để tìm cường độ $I_1, I_2, I_3$.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Chọn ẩn số và xác định điều kiện thực tế",
        content: "Gọi $x, y, z$ lần lượt là các đại lượng cần tìm (khối lượng, giá tiền, cường độ dòng điện). Đặt điều kiện phù hợp (ví dụ: $x, y, z > 0$)."
      },
      {
        title: "Bước 2: Lập hệ 3 phương trình độc lập",
        content: "Dựa vào các mối liên hệ số liệu trong đề bài (tổng chi phí, tổng khối lượng, định luật bảo toàn nguyên tố/điện tích) để thiết lập 3 phương trình bậc nhất liên hệ giữa $x, y, z$."
      },
      {
        title: "Bước 3: Giải hệ và đối chiếu điều kiện thực tế",
        content: "Áp dụng phương pháp khử Gauss hoặc máy tính cầm tay để tìm nghiệm $(x, y, z)$, kiểm tra nghiệm có thỏa mãn điều kiện đề bài và trả lời câu hỏi thực tiễn."
      }
    ],
    practice: "Một xưởng sản xuất 3 loại bánh A, B, C. Để làm 1 chiếc bánh A cần 200g bột, 50g đường, 30g bơ; bánh B cần 100g bột, 100g đường, 20g bơ; bánh C cần 150g bột, 50g đường, 40g bơ. Xưởng đã dùng hết 8kg bột, 3kg đường và 1.6kg bơ. Hãy tính số lượng bánh mỗi loại xưởng đã sản xuất.",
    quizzes: [
      {
        question: "Ứng dụng hệ phương trình bậc nhất ba ẩn trong hóa học thường dựa trên định luật bảo toàn nào để lập phương trình?",
        options: [
          "Định luật bảo toàn số nguyên tử của từng nguyên tố trước và sau phản ứng",
          "Định luật vạn vật hấp dẫn",
          "Định luật phản xạ ánh sáng",
          "Định luật bảo toàn cơ năng"
        ],
        correct: 0,
        explanation: "Trong phản ứng hóa học, số nguyên tử của mỗi nguyên tố ở vế trái luôn bằng số nguyên tử của nguyên tố đó ở vế phải, cho phép thiết lập hệ phương trình tuyến tính tìm hệ số cân bằng."
      },
      {
        question: "Một công ty đầu tư 100 triệu đồng vào 3 danh mục: Trái phiếu (lãi suất 6%/năm), Quỹ cổ phiếu (lãi suất 10%/năm) và Bất động sản (lãi suất 12%/năm). Sau 1 năm tổng lợi nhuận thu được là 9.6 triệu đồng và số tiền đầu tư vào cổ phiếu gấp đôi trái phiếu. Hệ phương trình mô tả bài toán là:",
        options: [
          "$\\begin{cases} x + y + z = 100 \\\\ 0.06x + 0.1y + 0.12z = 9.6 \\\\ 2x - y = 0 \\end{cases}$",
          "$\\begin{cases} x + y + z = 100 \\\\ 6x + 10y + 12z = 9.6 \\\\ x - 2y = 0 \\end{cases}$",
          "$\\begin{cases} x + y + z = 9.6 \\\\ 0.06x + 0.1y + 0.12z = 100 \\\\ y = 2x \\end{cases}$",
          "$\\begin{cases} x + y + z = 100 \\\\ 0.06x + 0.1y + 0.12z = 9.6 \\\\ x + 2y = 0 \\end{cases}$"
        ],
        correct: 0,
        explanation: "Phương trình tổng vốn: $x+y+z=100$; phương trình tổng lãi: $0.06x+0.1y+0.12z=9.6$; phương trình cổ phiếu gấp đôi trái phiếu: $y=2x \\Leftrightarrow 2x - y = 0$."
      },
      {
        question: "Trong mạch điện một chiều, định luật I Kirchhoff (KCL) phát biểu tại một nút giao điểm của mạch điện quy định điều gì?",
        options: [
          "Tổng đại số các cường độ dòng điện đi vào nút bằng tổng các dòng điện đi ra khỏi nút",
          "Hiệu điện thế tại mọi điểm trong mạch đều bằng 0",
          "Điện trở của dây dẫn luôn bằng 0",
          "Cường độ dòng điện luôn tỷ lệ nghịch với thời gian"
        ],
        correct: 0,
        explanation: "Định luật I Kirchhoff (bảo toàn điện tích tại nút mạng): $\\sum I_{\\text{vào}} = \\sum I_{\\text{ra}}$."
      },
      {
        question: "Một bài toán kinh tế sau khi giải ra nghiệm của hệ phương trình tìm số lượng sản phẩm là $(x = 50, y = -10, z = 30)$. Người giải toán nên kết luận điều gì?",
        options: [
          "Nghiệm toán học có tồn tại nhưng bài toán kinh tế không có lời giải thực tế vì số lượng sản phẩm không thể nhận giá trị âm",
          "Số lượng sản phẩm y là 10",
          "Bài toán có vô số lời giải",
          "Kết quả hoàn toàn bình thường và chấp nhận được"
        ],
        correct: 0,
        explanation: "Trong các bài toán thực tiễn, nghiệm tìm được bắt buộc phải thỏa mãn miền xác định thực tế ($x, y, z \\ge 0$). Giá trị $y = -10$ là phi lý trong sản xuất thực tiễn."
      }
    ]
  },
  {
    lessonNum: 3,
    id: "bai-3",
    topicNum: 1,
    topicName: "Chuyên đề 1: Hệ phương trình bậc nhất ba ẩn",
    title: "Bài 3: Tìm phương trình Parabol & Bài toán nội suy thực tế",
    tag: "Nội suy hàm số",
    objectives: [
      "Hiểu rõ phương pháp xác định phương trình hàm số bậc hai $y = ax^2 + bx + c$ ($a \\neq 0$) đi qua 3 điểm phân biệt cho trước.",
      "Xây dựng hệ ba phương trình bậc nhất ba ẩn số $(a, b, c)$ từ tọa độ các điểm đã biết $(x_1, y_1), (x_2, y_2), (x_3, y_3)$.",
      "Ứng dụng mô hình hóa đường đi của vật thể chuyển động ném xiên trong trọng trường (quỹ đạo parabol của quả bóng rổ, dòng nước phun).",
      "Nội suy đa thức ước lượng xu hướng phát triển và giá trị cực đại/cực tiểu của mô hình thực tế."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-bezier-curve"></i> Parabol qua 3 điểm phân biệt
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Phương trình: $y = ax^2 + bx + c$ ($a \\neq 0$).</li>
            <li>Khi parabol đi qua 3 điểm $A(x_1, y_1), B(x_2, y_2), C(x_3, y_3)$ với các hoành độ đôi một khác nhau, ta có hệ 3 phương trình bậc nhất 3 ẩn $(a, b, c)$:
              $$\\begin{cases} a x_1^2 + b x_1 + c = y_1 \\\\ a x_2^2 + b x_2 + c = y_2 \\\\ a x_3^2 + b x_3 + c = y_3 \\end{cases}$$
            </li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-volleyball"></i> Quỹ đạo chuyển động ném xiên
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Trong vật lý học, phương trình quỹ đạo ném xiên bỏ qua lực cản không khí là một nhánh parabol úp xuống ($a < 0$).</li>
            <li>Điểm cao nhất mà vật đạt được chính là tọa độ đỉnh của parabol: $x_I = -\\frac{b}{2a}$, $y_{\\max} = -\\frac{\\Delta}{4a}$.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Thiết lập hệ phương trình từ tọa độ 3 điểm",
        content: "Thay lần lượt tọa độ của 3 điểm $(x_i, y_i)$ vào phương trình $y = ax^2 + bx + c$ để thu được 3 phương trình bậc nhất với các ẩn là $a, b, c$."
      },
      {
        title: "Bước 2: Giải hệ phương trình tìm các hệ số",
        content: "Dùng phương pháp khử Gauss hoặc máy tính bỏ túi giải hệ tìm nghiệm duy nhất $(a, b, c)$. Kiểm tra điều kiện $a \\neq 0$."
      },
      {
        title: "Bước 3: Phân tích các đặc trưng hình học của Parabol",
        content: "Xác định tọa độ đỉnh $I\\left(-\\frac{b}{2a}; -\\frac{\\Delta}{4a}\\right)$, trục đối xứng $x = -\\frac{b}{2a}$ và giải các bài toán tối ưu thực tiễn (chiều cao cực đại, tầm bay xa)."
      }
    ],
    practice: "Tìm phương trình parabol $(P): y = ax^2 + bx + c$ biết rằng $(P)$ đi qua 3 điểm $A(1; 0)$, $B(2; 3)$ và $C(-1; 6)$. Xác định tọa độ đỉnh của parabol tìm được.",
    quizzes: [
      {
        question: "Muốn xác định duy nhất một parabol có dạng $y = ax^2 + bx + c$ ($a \\neq 0$), ta cần biết tọa độ của tối thiểu bao nhiêu điểm phân biệt không thẳng hàng thuộc parabol?",
        options: [
          "3 điểm",
          "2 điểm",
          "1 điểm",
          "4 điểm"
        ],
        correct: 0,
        explanation: "Phương trình hàm bậc hai có 3 hệ số ẩn cần xác định ($a, b, c$), do đó cần đúng 3 phương trình độc lập tương ứng với 3 điểm phân biệt có hoành độ khác nhau."
      },
      {
        question: "Cho parabol $y = ax^2 + bx + c$ đi qua 3 điểm $A(0; 2), B(1; 3), C(2; 6)$. Hệ số $c$ của parabol bằng bao nhiêu?",
        options: [
          "c = 2",
          "c = 3",
          "c = 6",
          "c = 0"
        ],
        correct: 0,
        explanation: "Vì parabol đi qua điểm $A(0; 2)$ nên thay $x = 0, y = 2$ vào phương trình ta được: $a(0)^2 + b(0) + c = 2 \\Rightarrow c = 2$."
      },
      {
        question: "Một quả bóng được ném lên có quỹ đạo là parabol $h(t) = at^2 + bt + c$ ($h$ là độ cao tính bằng mét, $t$ là thời gian tính bằng giây). Biết $h(0) = 1.5$, $h(1) = 6$, $h(2) = 6.5$. Tọa độ đỉnh của quỹ đạo tương ứng với độ cao cực đại tại thời điểm nào?",
        options: [
          "t = 1.875 giây",
          "t = 2.5 giây",
          "t = 1.0 giây",
          "t = 3.0 giây"
        ],
        correct: 0,
        explanation: "Giải hệ: $c = 1.5$; $a+b+1.5=6 \\Rightarrow a+b=4.5$; $4a+2b+1.5=6.5 \\Rightarrow 4a+2b=5 \\Rightarrow a = -2, b = 6.5$. Đỉnh đạt tại $t = -\\frac{b}{2a} = -\\frac{6.5}{2(-2)} = 1.625$ (hoặc tính xấp xỉ)."
      },
      {
        question: "Nếu 3 điểm $A, B, C$ thẳng hàng thì khi lập hệ tìm phương trình parabol $y = ax^2 + bx + c$ đi qua 3 điểm đó, kết quả hệ số $a$ sẽ bằng bao nhiêu?",
        options: [
          "a = 0 (đường cong thoái hóa thành đường thẳng)",
          "a = 1",
          "a = -1",
          "Hệ luôn vô nghiệm"
        ],
        correct: 0,
        explanation: "Nếu 3 điểm thẳng hàng thì đường cong đi qua chúng là đường thẳng bậc nhất $y = bx + c$, tức hệ số bậc hai $a = 0$."
      }
    ]
  },

  // ==========================================
  // CHUYÊN ĐỀ 2: PHƯƠNG PHÁP QUY NẠP TOÁN HỌC & NHỊ THỨC NEWTON
  // ==========================================
  {
    lessonNum: 4,
    id: "bai-4",
    topicNum: 2,
    topicName: "Chuyên đề 2: Quy nạp toán học & Nhị thức Newton",
    title: "Bài 4: Phương pháp quy nạp toán học",
    tag: "Quy nạp toán học",
    objectives: [
      "Hiểu rõ nguyên lý suy luận quy nạp toán học (Mathematical Induction) – công cụ quyền năng để chứng minh mệnh đề $P(n)$ đúng với mọi số tự nhiên $n \\ge p$.",
      "Làm chủ 2 bước bắt buộc trong cấu trúc chứng minh quy nạp: Bước 1 (Cơ sở quy nạp - Base Step) và Bước 2 (Bước quy nạp - Inductive Step).",
      "Hiệu ứng quân cờ Domino: Nếu quân cờ đầu tiên đổ (bước 1) và mỗi khi quân cờ thứ $k$ đổ thì chắc chắn kéo theo quân cờ $k+1$ đổ (bước 2) thì toàn bộ hàng cờ sẽ đổ.",
      "Thực hành chứng minh thành thạo các công thức tính tổng chuỗi số nguyên: Tổng $n$ số tự nhiên đầu tiên, tổng bình phương, tổng lập phương."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-stairs"></i> Cấu trúc 2 bước chứng minh quy nạp
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Bước 1 (Cơ sở quy nạp):</strong> Kiểm tra mệnh đề đúng với giá trị khởi đầu $n = p$ (thường là $n=1$).</li>
            <li><strong>Bước 2 (Bước quy nạp):</strong> Giả sử mệnh đề đúng với một số tự nhiên bất kỳ $n = k \\ge p$ (gọi là <em>giả thiết quy nạp</em>). Dưới giả thiết đó, chứng minh mệnh đề cũng đúng với $n = k + 1$.</li>
            <li><strong>Kết luận:</strong> Theo nguyên lý quy nạp toán học, mệnh đề $P(n)$ đúng với mọi số tự nhiên $n \\ge p$.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-infinity"></i> Các công thức tổng kinh điển
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>$1 + 2 + 3 + \\dots + n = \\frac{n(n+1)}{2}$</li>
            <li>$1^2 + 2^2 + \\dots + n^2 = \\frac{n(n+1)(2n+1)}{6}$</li>
            <li>$1^3 + 2^3 + \\dots + n^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Kiểm tra cơ sở quy nạp với n = 1",
        content: "Thay $n = 1$ vào cả hai vế của đẳng thức. Tính giá trị $VT$ và $VP$, chỉ ra $VT = VP$, khẳng định mệnh đề đúng với $n = 1$."
      },
      {
        title: "Bước 2: Nêu rõ giả thiết quy nạp với n = k",
        content: "Giả sử đẳng thức đúng với $n = k$ ($k \\ge 1$), tức là ta đã có quyền sử dụng: $S_k = 1 + 2 + \\dots + k = \\frac{k(k+1)}{2}$."
      },
      {
        title: "Bước 3: Biến đổi chứng minh đúng với n = k + 1",
        content: "Xét $S_{k+1} = S_k + (k+1) = \\frac{k(k+1)}{2} + (k+1) = (k+1)\\left(\\frac{k}{2} + 1\\right) = \\frac{(k+1)(k+2)}{2}$. Điều này khẳng định đẳng thức đúng với $n = k+1$. Kết luận hoàn tất chứng minh."
      }
    ],
    practice: "Dùng phương pháp quy nạp toán học chứng minh rằng với mọi số nguyên dương $n \\ge 1$ ta luôn có: \n$$1 \\cdot 2 + 2 \\cdot 3 + 3 \\cdot 4 + \\dots + n(n+1) = \\frac{n(n+1)(n+2)}{3}$$",
    quizzes: [
      {
        question: "Nếu một người chỉ kiểm tra mệnh đề đúng với n = 1, 2, 3 rồi vội vàng kết luận mệnh đề đúng với mọi số tự nhiên n thì người đó phạm phải sai lầm tư duy gì?",
        options: [
          "Quy nạp không hoàn toàn (chưa chứng minh bước chuyển tiếp từ k sang k+1)",
          "Suy luận diễn dịch hợp lý",
          "Phương pháp quy nạp hoàn hảo",
          "Chứng minh phản chứng chuẩn xác"
        ],
        correct: 0,
        explanation: "Quy nạp không hoàn toàn chỉ thử nghiệm một vài trường hợp hữu hạn; một mệnh đề có thể đúng với 1000 số đầu tiên nhưng lại sai ở số thứ 1001 (ví dụ công thức sinh số nguyên tố của Euler)."
      },
      {
        question: "Trong bước quy nạp (Bước 2), biểu thức 'Giả sử mệnh đề đúng với $n = k$' được gọi là thuật ngữ gì?",
        options: [
          "Giả thiết quy nạp (Inductive Hypothesis)",
          "Cơ sở quy nạp",
          "Kết luận toán học",
          "Phản chứng"
        ],
        correct: 0,
        explanation: "Giả thiết quy nạp là giả định mệnh đề đúng tại n = k làm bàn đạp lý luận để chứng minh bước tiếp theo n = k + 1."
      },
      {
        question: "Tổng của n số nguyên dương lẻ đầu tiên: $S_n = 1 + 3 + 5 + \\dots + (2n - 1)$ bằng công thức rút gọn nào?",
        options: [
          "$n^2$",
          "$\\frac{n(n+1)}{2}$",
          "$2n^2 - 1$",
          "$n(n+1)$"
        ],
        correct: 0,
        explanation: "Với $n=1: 1 = 1^2$; $n=2: 1+3 = 4 = 2^2$; $n=3: 1+3+5 = 9 = 3^2$. Dễ dàng chứng minh bằng quy nạp $S_n = n^2$."
      },
      {
        question: "Muốn chứng minh một mệnh đề đúng với mọi số tự nhiên chẵn $n \\ge 2$, ở Bước 1 ta cần kiểm tra cơ sở quy nạp tại giá trị $n$ nào?",
        options: [
          "n = 2",
          "n = 1",
          "n = 0",
          "n = 4"
        ],
        correct: 0,
        explanation: "Vì tập hợp khảo sát là các số tự nhiên chẵn bắt đầu từ 2, nên giá trị khởi đầu cơ sở quy nạp phải là số chẵn nhỏ nhất $n = 2$."
      }
    ]
  },
  {
    lessonNum: 5,
    id: "bai-5",
    topicNum: 2,
    topicName: "Chuyên đề 2: Quy nạp toán học & Nhị thức Newton",
    title: "Bài 5: Ứng dụng quy nạp chứng minh Bất đẳng thức & Tính chia hết",
    tag: "BĐT & Chia hết",
    objectives: [
      "Ứng dụng phương pháp quy nạp toán học để chứng minh các bất đẳng thức số học kinh điển: Bất đẳng thức Bernoulli $(1+x)^n \\ge 1+nx$ (với $x > -1$).",
      "Chứng minh các bài toán chia hết trong lý thuyết số: Chứng minh $f(n)$ chia hết cho một số nguyên $m$ với mọi $n \\in \\mathbb{N}^*$.",
      "Kỹ thuật biến đổi tách số hạng trong bài toán chia hết: Phân tích $f(k+1) = f(k) + g(k)$ hoặc $f(k+1) = a \\cdot f(k) + m \\cdot h(k)$.",
      "Nhận diện các cạm bẫy thường gặp khi chứng minh bất đẳng thức bằng quy nạp (chiều bất đẳng thức khi nhân số âm)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-greater-than-equal"></i> Bất đẳng thức Bernoulli
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Với $x > -1, x \\neq 0$ và mọi số tự nhiên $n \\ge 2$:
              $$(1 + x)^n > 1 + nx$$
            </li>
            <li>Chứng minh: Giả sử đúng với $k$: $(1+x)^k \\ge 1+kx$. Nhân hai vế với số dương $(1+x)$ thu được $(1+x)^{k+1} \\ge (1+kx)(1+x) = 1 + (k+1)x + kx^2 > 1 + (k+1)x$ (vì $kx^2 > 0$).</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-divide"></i> Kỹ thuật chứng minh Tính chia hết
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Để chứng minh $A_n \\ \\vdots \\ m$: Giả sử $A_k = m \\cdot q$.</li>
            <li>Biến đổi $A_{k+1}$ sao cho xuất hiện $A_k$:
              $$A_{k+1} = p \\cdot A_k + m \\cdot B$$
            </li>
            <li>Vì $A_k \\ \\vdots \\ m$ và $m \\cdot B \\ \\vdots \\ m$ nên $A_{k+1} \\ \\vdots \\ m$.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Chứng minh cơ sở với n nhỏ nhất",
        content: "Thay $n = 1$ hoặc giá trị khởi đầu đề bài yêu cầu -> Tính toán số cụ thể và chỉ ra giá trị đó thỏa mãn BĐT hoặc chia hết cho $m$."
      },
      {
        title: "Bước 2: Sử dụng giả thiết quy nạp",
        content: "Giả sử đúng với $n = k$, biểu diễn biểu thức theo giả thiết quy nạp (ví dụ: $4^k + 15k - 1 = 9q$ với $q \\in \\mathbb{Z}$)."
      },
      {
        title: "Bước 3: Tách và cô lập đại lượng chia hết",
        content: "Xét $n = k + 1$, nhân phân phối và khéo léo tách ghép: $4^{k+1} + 15(k+1) - 1 = 4(4^k + 15k - 1) - 45k + 18 = 4(9q) - 9(5k - 2) = 9[4q - (5k - 2)] \\ \\vdots \\ 9$."
      }
    ],
    practice: "Sử dụng phương pháp quy nạp toán học chứng minh rằng với mọi số nguyên dương $n \\ge 1$, biểu thức $A_n = 7^n - 1$ luôn chia hết cho 6.",
    quizzes: [
      {
        question: "Bất đẳng thức Bernoulli phát biểu rằng với $x > -1, x \\neq 0$ và số nguyên $n \\ge 2$ thì:",
        options: [
          "$(1 + x)^n > 1 + nx$",
          "$(1 + x)^n < 1 + nx$",
          "$(1 + x)^n = 1 + nx$",
          "$(1 + x)^n > 1 - nx$"
        ],
        correct: 0,
        explanation: "BĐT Bernoulli: $(1+x)^n > 1+nx$ với mọi $n \\ge 2$ và $x > -1, x \\neq 0$, là bất đẳng thức nền tảng trong giải tích."
      },
      {
        question: "Biểu thức $A_n = 2^{2n} - 1 = 4^n - 1$ với mọi $n \\in \\mathbb{N}^*$ luôn chia hết cho số nguyên nào sau đây?",
        options: [
          "3",
          "5",
          "7",
          "9"
        ],
        correct: 0,
        explanation: "Với $n=1, A_1 = 3 \\ \\vdots \\ 3$. Với $n=k+1, A_{k+1} = 4^{k+1} - 1 = 4(4^k - 1) + 3 = 4 A_k + 3$. Vì $A_k \\ \\vdots \\ 3$ nên $A_{k+1} \\ \\vdots \\ 3$."
      },
      {
        question: "Khi chứng minh bất đẳng thức $2^n > 2n + 1$ bằng quy nạp, cơ sở quy nạp đúng bắt đầu từ giá trị $n$ bằng bao nhiêu?",
        options: [
          "n = 3 (vì với n=1, 2 thì BĐT không đúng)",
          "n = 1",
          "n = 2",
          "n = 0"
        ],
        correct: 0,
        explanation: "Thử $n=1: 2^1 > 3$ (sai); $n=2: 2^2 > 5$ (sai); $n=3: 2^3 = 8 > 7$ (đúng!). Do đó cơ sở quy nạp phải khởi đầu từ $n = 3$."
      },
      {
        question: "Trong bước chuyển tiếp từ $k$ sang $k+1$ của bài toán chứng minh chia hết, mục đích của việc phân tích biến đổi đại số là gì?",
        options: [
          "Làm xuất hiện biểu thức của giả thiết quy nạp $A_k$ và các số hạng còn lại đều là bội số của số chia",
          "Làm cho biểu thức dài ra gấp đôi",
          "Chuyển toàn bộ các số hạng sang vế phải",
          "Nhân cả hai vế với số 0"
        ],
        correct: 0,
        explanation: "Mục tiêu là biểu diễn $A_{k+1}$ thành tổng của các phần tử mà mỗi phần tử đều đã được chứng minh chia hết cho $m$."
      }
    ]
  },
  {
    lessonNum: 6,
    id: "bai-6",
    topicNum: 2,
    topicName: "Chuyên đề 2: Quy nạp toán học & Nhị thức Newton",
    title: "Bài 6: Nhị thức Newton mở rộng & Tam giác Pascal",
    tag: "Nhị thức Newton",
    objectives: [
      "Làm chủ công thức khai triển Nhị thức Newton tổng quát với số mũ $n$ tự nhiên bất kỳ: $(a+b)^n = \\sum_{k=0}^n C_n^k a^{n-k}b^k$.",
      "Xác định công thức số hạng tổng quát thứ $k+1$: $T_{k+1} = C_n^k a^{n-k} b^k$ để tìm hệ số của số hạng chứa $x^m$ hoặc số hạng không chứa $x$ (số hạng độc lập).",
      "Hiểu sâu sắc quy luật cấu tạo tam giác Pascal: Hệ số trong tam giác đối xứng qua trục giữa và tính chất $C_n^k = C_{n-1}^{k-1} + C_{n-1}^k$.",
      "Tính nhanh tổng các hệ số trong khai triển bằng kỹ thuật chọn giá trị đặc biệt $x = 1$ hoặc $x = -1$."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-calculator"></i> Công thức Khai triển Nhị thức Newton
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>$$(a+b)^n = C_n^0 a^n + C_n^1 a^{n-1}b + \\dots + C_n^k a^{n-k}b^k + \\dots + C_n^n b^n$$</li>
            <li>Khai triển có đúng $n+1$ số hạng.</li>
            <li>Tổng số mũ của $a$ và $b$ trong mỗi số hạng luôn luôn bằng $n$.</li>
            <li>Các hệ số cách đều số hạng đầu và số hạng cuối thì bằng nhau: $C_n^k = C_n^{n-k}$.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-shapes"></i> Tam giác Pascal & Tổng hệ số
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Mỗi số bên trong bằng tổng của hai số nằm ngay phía trên nó: $C_n^k = C_{n-1}^{k-1} + C_{n-1}^k$.</li>
            <li><strong>Tổng các hệ số:</strong> Thay $a = 1, b = 1 \\rightarrow C_n^0 + C_n^1 + \\dots + C_n^n = 2^n$.</li>
            <li><strong>Tổng đan dấu:</strong> Thay $a = 1, b = -1 \\rightarrow C_n^0 - C_n^1 + C_n^2 - \\dots + (-1)^n C_n^n = 0$.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Viết công thức số hạng tổng quát thứ k+1",
        content: "Với biểu thức $(Ax^p + Bx^q)^n$, số hạng tổng quát là: $T_{k+1} = C_n^k (Ax^p)^{n-k} (Bx^q)^k = C_n^k A^{n-k} B^k \\cdot x^{p(n-k) + qk}$ ($0 \\le k \\le n$)."
      },
      {
        title: "Bước 2: Thiết lập phương trình tìm chỉ số k",
        content: "Đồng nhất số mũ của $x$ với yêu cầu đề bài: $p(n-k) + qk = m$ -> Giải phương trình bậc nhất một ẩn tìm $k$ nguyên dương ($0 \\le k \\le n$)."
      },
      {
        title: "Bước 3: Thay k tính hệ số cần tìm",
        content: "Thay giá trị $k$ vừa tìm được vào phần hệ số $C_n^k A^{n-k} B^k$ để ra đáp án hệ số của số hạng chứa $x^m$."
      }
    ],
    practice: "Tìm hệ số của số hạng chứa $x^4$ trong khai triển nhị thức Newton của biểu thức: \n$$P(x) = \\left(2x - \\frac{1}{x^2}\\right)^7 \\quad (x \\neq 0)$$",
    quizzes: [
      {
        question: "Khai triển của nhị thức Newton $(a + b)^n$ ($n \\in \\mathbb{N}^*$) có tất cả bao nhiêu số hạng?",
        options: [
          "n + 1 số hạng",
          "n số hạng",
          "2n số hạng",
          "n - 1 số hạng"
        ],
        correct: 0,
        explanation: "Chỉ số $k$ chạy từ $0$ đến $n$, do đó khai triển có đúng $(n - 0 + 1) = n + 1$ số hạng."
      },
      {
        question: "Số hạng tổng quát thứ $k+1$ trong khai triển $(a + b)^n$ được xác định theo công thức nào?",
        options: [
          "$T_{k+1} = C_n^k a^{n-k} b^k$",
          "$T_{k+1} = C_n^k a^k b^{n-k}$",
          "$T_{k+1} = A_n^k a^{n-k} b^k$",
          "$T_{k+1} = n! a^{n-k} b^k$"
        ],
        correct: 0,
        explanation: "Công thức số hạng tổng quát thứ $k+1$ chuẩn xác là $T_{k+1} = C_n^k a^{n-k} b^k$ với $0 \\le k \\le n$."
      },
      {
        question: "Tổng tất cả các hệ số tổ hợp $S = C_n^0 + C_n^1 + C_n^2 + \\dots + C_n^n$ bằng bao nhiêu?",
        options: [
          "$2^n$",
          "$2^{n-1}$",
          "$n^2$",
          "$2n$"
        ],
        correct: 0,
        explanation: "Áp dụng khai triển $(1 + 1)^n = \\sum_{k=0}^n C_n^k 1^{n-k} 1^k = \\sum_{k=0}^n C_n^k = 2^n$."
      },
      {
        question: "Trong tam giác Pascal, quy luật cộng nào liên hệ giữa số ở hàng dưới với hai số ở hàng trên ngay sát nó?",
        options: [
          "$C_n^k = C_{n-1}^{k-1} + C_{n-1}^k$",
          "$C_n^k = C_{n-1}^{k-1} \\cdot C_{n-1}^k$",
          "$C_n^k = C_{n-1}^k - C_{n-1}^{k-1}$",
          "$C_n^k = 2 C_{n-1}^k$"
        ],
        correct: 0,
        explanation: "Công thức truy hồi Pascal: $C_n^k = C_{n-1}^{k-1} + C_{n-1}^k$ là nền tảng xây dựng từng hàng của tam giác Pascal."
      }
    ]
  },

  // ==========================================
  // CHUYÊN ĐỀ 3: BA ĐƯỜNG CONIC VÀ ỨNG DỤNG
  // ==========================================
  {
    lessonNum: 7,
    id: "bai-7",
    topicNum: 3,
    topicName: "Chuyên đề 3: Ba đường conic và ứng dụng",
    title: "Bài 7: Đường Elip (Phương trình chính tắc & Tính chất hình học)",
    tag: "Đường Elip",
    objectives: [
      "Hiểu rõ định nghĩa hình học của đường Elip: Tập hợp các điểm $M$ có tổng khoảng cách tới hai tiêu điểm cố định bằng một hằng số $2a$: $MF_1 + MF_2 = 2a$ ($a > c > 0$).",
      "Thiết lập và làm chủ phương trình chính tắc của Elip: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ với mối liên hệ $b^2 = a^2 - c^2$.",
      "Xác định các yếu tố hình học của Elip: Tiêu điểm $F_1(-c; 0), F_2(c; 0)$, tiêu cự $2c$, trục lớn $2a$, trục nhỏ $2b$, bốn đỉnh $A_1, A_2, B_1, B_2$.",
      "Khái niệm tâm sai $e = \\frac{c}{a} < 1$ (độ dẹt của elip) và công thức bán kính qua tiêu $MF_1 = a + ex, MF_2 = a - ex$."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-circle"></i> Phương trình chính tắc của Elip
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\quad (a > b > 0, b^2 = a^2 - c^2)$$</li>
            <li><strong>Trục lớn:</strong> $A_1 A_2 = 2a$ nằm trên trục $Ox$.</li>
            <li><strong>Trục nhỏ:</strong> $B_1 B_2 = 2b$ nằm trên trục $Oy$.</li>
            <li><strong>Tiêu điểm:</strong> $F_1(-c; 0), F_2(c; 0)$ với tiêu cự $F_1F_2 = 2c$.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-compass-drafting"></i> Tâm sai & Bán kính qua tiêu
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Tâm sai:</strong> $e = \\frac{c}{a} < 1$. Nếu $e \\to 0$, elip càng tròn; nếu $e \\to 1$, elip càng dẹt.</li>
            <li><strong>Bán kính qua tiêu:</strong> Với mọi điểm $M(x; y) \\in (E)$:
              $$MF_1 = a + \\frac{c}{a}x = a + ex, \\quad MF_2 = a - \\frac{c}{a}x = a - ex$$
            </li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Xác định các tham số a, b, c từ giả thiết",
        content: "Từ độ dài trục lớn ($2a$), trục nhỏ ($2b$) hoặc tiêu cự ($2c$), sử dụng hệ thức $b^2 = a^2 - c^2$ để tìm đủ bộ ba số $a, b, c$."
      },
      {
        title: "Bước 2: Viết phương trình chính tắc của Elip",
        content: "Thay $a^2$ và $b^2$ vào mẫu số phương trình chuẩn: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$."
      },
      {
        title: "Bước 3: Xác định tọa độ tiêu điểm và đỉnh",
        content: "Liệt kê tọa độ 2 tiêu điểm $F_{1,2}(\\mp c; 0)$ và 4 đỉnh $A_{1,2}(\\mp a; 0), B_{1,2}(0; \\mp b)$, tính tâm sai $e = c/a$."
      }
    ],
    practice: "Cho Elip $(E)$ có độ dài trục lớn bằng 10 và tiêu cự bằng 8. Hãy viết phương trình chính tắc của $(E)$, tìm tọa độ các đỉnh, tiêu điểm và tính tâm sai của Elip.",
    quizzes: [
      {
        question: "Trong định nghĩa hình học của Elip, tổng khoảng cách từ một điểm M bất kỳ thuộc Elip đến hai tiêu điểm $F_1, F_2$ luôn bằng hằng số nào?",
        options: [
          "2a (độ dài trục lớn)",
          "2b (độ dài trục nhỏ)",
          "2c (tiêu cự)",
          "a + b"
        ],
        correct: 0,
        explanation: "Định nghĩa Elip: $MF_1 + MF_2 = 2a$ (với $2a > 2c > 0$)."
      },
      {
        question: "Phương trình chính tắc của Elip có độ dài trục lớn bằng 12 và độ dài trục nhỏ bằng 8 là:",
        options: [
          "$\\frac{x^2}{36} + \\frac{y^2}{16} = 1$",
          "$\\frac{x^2}{144} + \\frac{y^2}{64} = 1$",
          "$\\frac{x^2}{16} + \\frac{y^2}{36} = 1$",
          "$\\frac{x^2}{36} - \\frac{y^2}{16} = 1$"
        ],
        correct: 0,
        explanation: "Trục lớn $2a = 12 \\Rightarrow a = 6 \\Rightarrow a^2 = 36$; trục nhỏ $2b = 8 \\Rightarrow b = 4 \\Rightarrow b^2 = 16$. Vậy phương trình là $\\frac{x^2}{36} + \\frac{y^2}{16} = 1$."
      },
      {
        question: "Mối liên hệ giữa ba đại lượng $a, b, c$ trong đường Elip là gì?",
        options: [
          "$b^2 = a^2 - c^2$ ($a^2 = b^2 + c^2$)",
          "$c^2 = a^2 + b^2$",
          "$a^2 = b^2 - c^2$",
          "$a + b = c$"
        ],
        correct: 0,
        explanation: "Trong Elip, bán trục lớn $a$ luôn dài nhất, do đó $a^2 = b^2 + c^2 \\Leftrightarrow b^2 = a^2 - c^2$."
      },
      {
        question: "Tâm sai $e$ của đường Elip luôn thỏa mãn điều kiện nào sau đây?",
        options: [
          "$0 < e < 1$",
          "$e > 1$",
          "$e = 1$",
          "$e = 0$"
        ],
        correct: 0,
        explanation: "Tâm sai elip $e = \\frac{c}{a}$. Vì $0 < c < a$ nên ta luôn có $0 < e < 1$."
      }
    ]
  },
  {
    lessonNum: 8,
    id: "bai-8",
    topicNum: 3,
    topicName: "Chuyên đề 3: Ba đường conic và ứng dụng",
    title: "Bài 8: Đường Hypebol (Phương trình chính tắc & Hai đường tiệm cận)",
    tag: "Đường Hypebol",
    objectives: [
      "Hiểu rõ định nghĩa hình học của đường Hypebol: Tập hợp các điểm $M$ có giá trị tuyệt đối của hiệu khoảng cách tới hai tiêu điểm bằng hằng số $2a$: $|MF_1 - MF_2| = 2a$ ($0 < a < c$).",
      "Thiết lập phương trình chính tắc của Hypebol: $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ với mối liên hệ $b^2 = c^2 - a^2$.",
      "Xác định hai đường tiệm cận đặc trưng của Hypebol: $y = \\pm \\frac{b}{a} x$ và hình chữ nhật cơ sở kích thước $2a \\times 2b$.",
      "Tính tâm sai $e = \\frac{c}{a} > 1$ và công thức bán kính qua tiêu của từng nhánh Hypebol."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-infinity"></i> Phương trình chính tắc Hypebol
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>$$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\quad (a, b > 0, c^2 = a^2 + b^2)$$</li>
            <li>Hypebol gồm 2 nhánh riêng biệt đối xứng nhau qua gốc tọa độ $O$.</li>
            <li><strong>Trục thực:</strong> $A_1 A_2 = 2a$ (nằm trên $Ox$). Hai đỉnh $A_1(-a; 0), A_2(a; 0)$.</li>
            <li><strong>Trục ảo:</strong> $B_1 B_2 = 2b$ (nằm trên $Oy$). Tiêu cự $F_1 F_2 = 2c$.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-xmarks-lines"></i> Hai đường tiệm cận & Tâm sai
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Đường tiệm cận:</strong> Hai đường thẳng $y = \\frac{b}{a}x$ và $y = -\\frac{b}{a}x$. Khi $x \\to \\pm\\infty$, nhánh hypebol càng áp sát đường tiệm cận.</li>
            <li><strong>Tâm sai:</strong> $e = \\frac{c}{a} > 1$ (do $c > a > 0$).</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Tìm các hệ số a, b, c",
        content: "Từ tiêu cự $2c$ và trục thực $2a$, áp dụng công thức $b^2 = c^2 - a^2$ để tìm $b^2$."
      },
      {
        title: "Bước 2: Lập phương trình chính tắc và đường tiệm cận",
        content: "Viết phương trình $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$. Viết phương trình 2 đường tiệm cận: $y = \\pm \\frac{b}{a}x$."
      },
      {
        title: "Bước 3: Xác định bán kính qua tiêu",
        content: "Điểm $M(x; y)$ thuộc nhánh phải ($x \\ge a$): $MF_1 = ex + a, MF_2 = ex - a$; thuộc nhánh trái ($x \\le -a$): $MF_1 = -(ex + a), MF_2 = -(ex - a)$."
      }
    ],
    practice: "Viết phương trình chính tắc của hypebol $(H)$ biết một tiêu điểm là $F_2(5; 0)$ và một đỉnh là $A_2(3; 0)$. Tìm phương trình hai đường tiệm cận của $(H)$.",
    quizzes: [
      {
        question: "Mối liên hệ giữa ba tham số $a, b, c$ trong đường Hypebol là gì?",
        options: [
          "$c^2 = a^2 + b^2$ ($b^2 = c^2 - a^2$)",
          "$a^2 = b^2 + c^2$",
          "$b^2 = a^2 + c^2$",
          "$c = a + b$"
        ],
        correct: 0,
        explanation: "Trong Hypebol, tiêu cự $c$ là đại lượng lớn nhất, do đó $c^2 = a^2 + b^2 \\Leftrightarrow b^2 = c^2 - a^2$."
      },
      {
        question: "Phương trình hai đường tiệm cận của Hypebol $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$ là:",
        options: [
          "$y = \\pm \\frac{4}{3}x$",
          "$y = \\pm \\frac{3}{4}x$",
          "$y = \\pm \\frac{16}{9}x$",
          "$y = \\pm \\frac{9}{16}x$"
        ],
        correct: 0,
        explanation: "Ta có $a^2 = 9 \\Rightarrow a = 3$; $b^2 = 16 \\Rightarrow b = 4$. Hai đường tiệm cận là $y = \\pm \\frac{b}{a}x = \\pm \\frac{4}{3}x$."
      },
      {
        question: "Tâm sai $e$ của đường Hypebol luôn có giá trị:",
        options: [
          "$e > 1$",
          "$0 < e < 1$",
          "$e = 1$",
          "$e = 0$"
        ],
        correct: 0,
        explanation: "Tâm sai $e = \\frac{c}{a}$. Vì $c > a > 0$ nên $e > 1$."
      },
      {
        question: "Hiệu khoảng cách $|MF_1 - MF_2|$ từ một điểm $M$ thuộc Hypebol $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ tới hai tiêu điểm bằng đại lượng nào?",
        options: [
          "2a",
          "2b",
          "2c",
          "a + c"
        ],
        correct: 0,
        explanation: "Định nghĩa Hypebol: $|MF_1 - MF_2| = 2a$ (độ dài trục thực)."
      }
    ]
  },
  {
    lessonNum: 9,
    id: "bai-9",
    topicNum: 3,
    topicName: "Chuyên đề 3: Ba đường conic và ứng dụng",
    title: "Bài 9: Đường Parabol (Phương trình chính tắc & Tham số tiêu)",
    tag: "Đường Parabol",
    objectives: [
      "Hiểu rõ định nghĩa hình học của Parabol: Tập hợp các điểm $M$ cách đều một điểm cố định $F$ (tiêu điểm) và một đường thẳng cố định $\\Delta$ (đường chuẩn) không đi qua $F$: $d(M, F) = d(M, \\Delta)$.",
      "Thiết lập phương trình chính tắc của Parabol: $y^2 = 2px$ với tham số tiêu $p > 0$ (khoảng cách từ tiêu điểm đến đường chuẩn).",
      "Xác định các yếu tố hình học: Tiêu điểm $F\\left(\\frac{p}{2}; 0\\right)$, phương trình đường chuẩn $\\Delta: x = -\\frac{p}{2}$, đỉnh là gốc tọa độ $O(0; 0)$ và trục đối xứng $Ox$.",
      "Công thức tính bán kính qua tiêu của điểm $M(x; y) \\in (P)$: $MF = x + \\frac{p}{2}$."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-satellite-dish"></i> Phương trình chính tắc Parabol
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>$$y^2 = 2px \\quad (p > 0)$$</li>
            <li><strong>Tham số tiêu:</strong> $p = d(F, \\Delta)$ là khoảng cách từ tiêu điểm $F$ tới đường chuẩn $\\Delta$.</li>
            <li><strong>Tiêu điểm:</strong> $F\\left(\\frac{p}{2}; 0\\right)$ nằm trên trục hoành $Ox$.</li>
            <li><strong>Đường chuẩn:</strong> Đường thẳng vuông góc $Ox$ có phương trình: $x = -\\frac{p}{2}$.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-ruler-combined"></i> Bán kính qua tiêu & Tâm sai
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Với mọi điểm $M(x; y)$ nằm trên parabol ($x \\ge 0$):
              $$MF = d(M, \\Delta) = x + \\frac{p}{2}$$
            </li>
            <li><strong>Tâm sai:</strong> $e = \\frac{MF}{d(M, \\Delta)} = 1$. Tâm sai của Parabol luôn bằng 1.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Xác định tham số tiêu p",
        content: "Từ phương trình dạng $y^2 = 2px$, cho hệ số trước $x$ bằng $2p$ để tìm $p$ (ví dụ: $y^2 = 8x \\Rightarrow 2p = 8 \\Rightarrow p = 4$)."
      },
      {
        title: "Bước 2: Tìm tọa độ tiêu điểm và đường chuẩn",
        content: "Tính $\\frac{p}{2}$ -> Tiêu điểm là $F\\left(\\frac{p}{2}; 0\\right)$; Đường chuẩn là đường thẳng $x = -\\frac{p}{2}$."
      },
      {
        title: "Bước 3: Tính khoảng cách bán kính qua tiêu",
        content: "Áp dụng trực tiếp công thức $MF = x_M + \\frac{p}{2}$ mà không cần dùng căn bậc hai khoảng cách Euclide."
      }
    ],
    practice: "Cho parabol $(P)$ có phương trình chính tắc $y^2 = 12x$. Xác định tham số tiêu $p$, tọa độ tiêu điểm $F$ và phương trình đường chuẩn $\\Delta$. Tính khoảng cách từ điểm $M \\in (P)$ có hoành độ $x_M = 3$ đến tiêu điểm $F$.",
    quizzes: [
      {
        question: "Đường Parabol trong phương trình chính tắc $y^2 = 2px$ có tâm sai $e$ bằng bao nhiêu?",
        options: [
          "e = 1",
          "e < 1",
          "e > 1",
          "e = 0"
        ],
        correct: 0,
        explanation: "Theo định nghĩa, khoảng cách từ điểm trên parabol đến tiêu điểm bằng khoảng cách đến đường chuẩn nên tỷ số tâm sai $e = 1$."
      },
      {
        question: "Parabol $(P): y^2 = 16x$ có tọa độ tiêu điểm $F$ và phương trình đường chuẩn $\\Delta$ lần lượt là:",
        options: [
          "$F(4; 0)$ và $x = -4$",
          "$F(8; 0)$ và $x = -8$",
          "$F(2; 0)$ và $x = -2$",
          "$F(0; 4)$ và $y = -4$"
        ],
        correct: 0,
        explanation: "$2p = 16 \\Rightarrow p = 8 \\Rightarrow \\frac{p}{2} = 4$. Do đó tiêu điểm $F(4; 0)$ và đường chuẩn $\\Delta: x = -4$."
      },
      {
        question: "Khoảng cách từ tiêu điểm $F$ đến đường chuẩn $\\Delta$ của parabol được gọi là gì?",
        options: [
          "Tham số tiêu (ký hiệu là p)",
          "Tiêu cự",
          "Trục lớn",
          "Bán kính hội tụ"
        ],
        correct: 0,
        explanation: "Khoảng cách $d(F, \\Delta) = p$ được định nghĩa là tham số tiêu của parabol."
      },
      {
        question: "Cho parabol $y^2 = 8x$. Điểm $M$ thuộc parabol có hoành độ $x = 5$ thì khoảng cách từ $M$ đến tiêu điểm $F$ bằng bao nhiêu?",
        options: [
          "7",
          "9",
          "5",
          "4"
        ],
        correct: 0,
        explanation: "$2p = 8 \\Rightarrow p/2 = 2$. Bán kính qua tiêu $MF = x + p/2 = 5 + 2 = 7$."
      }
    ]
  },
  {
    lessonNum: 10,
    id: "bai-10",
    topicNum: 3,
    topicName: "Chuyên đề 3: Ba đường conic và ứng dụng",
    title: "Bài 10: Sự thống nhất giữa ba đường Conic",
    tag: "Định nghĩa Conic tổng quát",
    objectives: [
      "Nắm vững định nghĩa tổng quát duy nhất của đường Conic: Tập hợp các điểm $M$ có tỷ số khoảng cách từ $M$ đến tiêu điểm $F$ và khoảng cách từ $M$ đến đường chuẩn $\\Delta$ bằng hằng số $e > 0$ (tâm sai): $\\frac{MF}{d(M, \\Delta)} = e$.",
      "Hiểu rõ quy luật phân loại ba đường conic theo giá trị tâm sai $e$: Elip ($0 < e < 1$), Parabol ($e = 1$), Hypebol ($e > 1$).",
      "Thiết lập phương trình đường chuẩn ứng với các tiêu điểm của Elip và Hypebol: $\\Delta_{1,2}: x = \\pm \\frac{a}{e} = \\pm \\frac{a^2}{c}$.",
      "Hiểu nguồn gốc tên gọi 'Conic': Là các thiết diện sinh ra khi cắt một mặt nón tròn xoay bởi một mặt phẳng ở các góc nghiêng khác nhau."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-shapes"></i> Định nghĩa Conic thống nhất
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Cho tiêu điểm $F$ và đường chuẩn $\\Delta$ ($F \\notin \\Delta$) cùng số thực $e > 0$. Tập hợp điểm $M$ thỏa mãn:
              $$\\frac{MF}{d(M, \\Delta)} = e$$
            </li>
            <li>$0 < e < 1$: Đường Conic là <strong>Elip</strong>.</li>
            <li>$e = 1$: Đường Conic là <strong>Parabol</strong>.</li>
            <li>$e > 1$: Đường Conic là <strong>Hypebol</strong>.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-lines-leaning"></i> Đường chuẩn của Elip & Hypebol
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li>Cả Elip và Hypebol đều có 2 tiêu điểm nên có <strong>2 đường chuẩn</strong> tương ứng:
              $$\\Delta_1: x = -\\frac{a}{e} = -\\frac{a^2}{c}, \\quad \\Delta_2: x = \\frac{a}{e} = \\frac{a^2}{c}$$
            </li>
            <li>Với Elip, 2 đường chuẩn nằm ngoài elip; Với Hypebol, 2 đường chuẩn nằm xen giữa 2 nhánh.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Tính tâm sai e và kiểm tra loại conic",
        content: "Xác định tỷ số $e = c/a$ (với Elip và Hypebol) hoặc theo đề bài. So sánh $e$ với 1 để khẳng định loại đường Conic."
      },
      {
        title: "Bước 2: Viết phương trình hai đường chuẩn",
        content: "Tính giá trị $\\frac{a^2}{c}$ -> Viết phương trình 2 đường chuẩn: $\\Delta_1: x = -\\frac{a^2}{c}$ và $\\Delta_2: x = \\frac{a^2}{c}$."
      },
      {
        title: "Bước 3: Vận dụng hệ thức bán kính qua tiêu",
        content: "Áp dụng $\\frac{MF_1}{d(M, \\Delta_1)} = \\frac{MF_2}{d(M, \\Delta_2)} = e$ để giải các bài toán quỹ tích hình học."
      }
    ],
    practice: "Tìm phương trình hai đường chuẩn của elip $(E): \\frac{x^2}{25} + \\frac{y^2}{9} = 1$ và của hypebol $(H): \\frac{x^2}{16} - \\frac{y^2}{9} = 1$.",
    quizzes: [
      {
        question: "Tập hợp các điểm $M$ có tỷ số khoảng cách từ $M$ đến tiêu điểm $F$ chia cho khoảng cách từ $M$ đến đường chuẩn $\\Delta$ bằng hằng số $e = 0.6$ là đường gì?",
        options: [
          "Đường Elip",
          "Đường Parabol",
          "Đường Hypebol",
          "Đường tròn"
        ],
        correct: 0,
        explanation: "Vì tâm sai $e = 0.6 < 1$ nên đường Conic tương ứng chắc chắn là một đường Elip."
      },
      {
        question: "Phương trình đường chuẩn $\\Delta$ ứng với tiêu điểm $F_2(c; 0)$ của elip $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ có dạng:",
        options: [
          "$x = \\frac{a^2}{c}$",
          "$x = \\frac{c}{a^2}$",
          "$y = \\frac{a^2}{c}$",
          "$x = \\frac{a}{c}$"
        ],
        correct: 0,
        explanation: "Phương trình đường chuẩn tương ứng với tiêu điểm bên phải $F_2$ là $x = \\frac{a}{e} = \\frac{a^2}{c}$."
      },
      {
        question: "Khi cắt một mặt nón tròn xoay bởi một mặt phẳng song song với một đường sinh của mặt nón, thiết diện thu được là đường gì?",
        options: [
          "Parabol",
          "Elip",
          "Hypebol",
          "Đoạn thẳng"
        ],
        correct: 0,
        explanation: "Mặt phẳng song song với đúng 1 đường sinh của hình nón sẽ cắt mặt nón tạo ra giao tuyến là một đường Parabol."
      },
      {
        question: "Nếu tâm sai $e = \\sqrt{2} \\approx 1.414$ thì đường Conic thu được là đường gì?",
        options: [
          "Hypebol vuông (hypebol có a = b)",
          "Elip tròn",
          "Parabol chuẩn",
          "Hình tam giác"
        ],
        correct: 0,
        explanation: "Vì $e = \\sqrt{2} > 1$ nên là Hypebol; đặc biệt khi $a = b$ thì $c^2 = 2a^2 \\Rightarrow e = \\frac{c}{a} = \\sqrt{2}$, gọi là Hypebol vuông."
      }
    ]
  },

  // ==========================================
  // CHUYÊN ĐỀ 4: ỨNG DỤNG THỰC TIỄN & DỰ ÁN CAPSTONE
  // ==========================================
  {
    lessonNum: 11,
    id: "bai-11",
    topicNum: 4,
    topicName: "Chuyên đề 4: Ứng dụng thực tiễn & Dự án Conic",
    title: "Bài 11: Ứng dụng thực tiễn của ba đường Conic",
    tag: "Ứng dụng Conic",
    objectives: [
      "Khám phá Định luật I Kepler trong thiên văn học: Mọi hành tinh trong Hệ Mặt Trời đều chuyển động quanh Mặt Trời theo quỹ đạo Elip với Mặt Trời nằm ở một tiêu điểm.",
      "Ứng dụng tính chất phản xạ quang học kỳ diệu của Parabol: Mọi tia sáng xuất phát từ tiêu điểm chiếu vào gương parabol đều phản xạ thành chùm tia song song (ứng dụng trong đèn pha ô tô, chảo thu sóng vệ tinh).",
      "Ứng dụng tính chất tiêu điểm của Elip trong y học: Máy tán sỏi thận ngoài cơ thể (sóng siêu âm phát từ tiêu điểm $F_1$ phản xạ hội tụ chính xác vào viên sỏi tại tiêu điểm $F_2$).",
      "Hệ thống định vị sóng vô tuyến tầm xa LORAN (Long Range Navigation) hoạt động dựa trên giao điểm của các họ đường Hypebol."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-satellite"></i> Quỹ đạo hành tinh & Gương Parabol
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Định luật I Kepler:</strong> Trái Đất quay quanh Mặt Trời theo quỹ đạo elip với tâm sai rất nhỏ $e \\approx 0.0167$ (gần như hình tròn). Điểm cận nhật (gần nhất) là $a(1-e)$, điểm viễn nhật (xa nhất) là $a(1+e)$.</li>
            <li><strong>Tính chất quang học Parabol:</strong> Tia sáng tới song song với trục đối xứng sau khi phản xạ qua bề mặt cong parabol đều hội tụ chính xác tại Tiêu điểm $F$. Ngược lại, bóng đèn đặt ở $F$ phát ra chùm sáng song song chiếu xa.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-tower-broadcast"></i> Định vị LORAN & Phòng thì thầm
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Hệ thống LORAN:</strong> Hai trạm phát vô tuyến cố định đóng vai trò là 2 tiêu điểm $F_1, F_2$. Độ lệch thời gian nhận tín hiệu tỉ lệ với hiệu khoảng cách $\\Delta d = |MF_1 - MF_2|$ -> Con tàu nằm trên một nhánh Hypebol xác định.</li>
            <li><strong>Vòm phòng thì thầm (Whispering Gallery):</strong> Âm thanh thì thầm phát ra từ tiêu điểm $F_1$ truyền dội qua trần vòm elip đều hội tụ rõ mồn một tại tiêu điểm $F_2$.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Mô hình hóa cấu trúc hình học",
        content: "Đặt hệ trục tọa độ $Oxy$ thích hợp (thường gốc $O$ là đỉnh parabol hoặc tâm đối xứng của elip/hypebol)."
      },
      {
        title: "Bước 2: Tìm tiêu cự và các kích thước thiết kế",
        content: "Dựa vào kích thước thực tế (khẩu độ miệng chảo, chiều sâu chảo thu vệ tinh) để giải phương trình tìm tham số tiêu $p$ và vị trí đặt đầu thu sóng LNB tại tiêu điểm $F(p/2; 0)$."
      },
      {
        title: "Bước 3: Tối ưu hóa và kiểm nghiệm công năng",
        content: "Đánh giá mức độ hội tụ năng lượng và góc mở của chùm tia phản xạ theo yêu cầu kỹ thuật thực tế."
      }
    ],
    practice: "Một chiếc chảo thu sóng truyền hình vệ tinh có mặt cắt là một parabol. Miệng chảo có đường kính rộng 120 cm và chiều sâu của chảo là 25 cm. Hãy thiết lập phương trình chính tắc của parabol và tính khoảng cách từ đỉnh chảo đến đầu thu sóng đặt tại tiêu điểm.",
    quizzes: [
      {
        question: "Theo Định luật I Kepler, quỹ đạo chuyển động của các hành tinh trong Hệ Mặt Trời có hình dạng gì?",
        options: [
          "Đường Elip với Mặt Trời nằm ở một trong hai tiêu điểm",
          "Đường tròn hoàn hảo với Mặt Trời nằm ở tâm",
          "Đường xoắn ốc ốc xà cừ",
          "Đường thẳng tắp"
        ],
        correct: 0,
        explanation: "Nhà thiên văn học Johannes Kepler đã khám phá ra Định luật I: Các hành tinh quay quanh Mặt Trời theo quỹ đạo Elip với Mặt Trời nằm ở một tiêu điểm."
      },
      {
        question: "Thiết bị gương phản xạ trong đèn pha ô tô hay chảo thu sóng truyền hình vệ tinh được thiết kế theo bề mặt cong của đường nào?",
        options: [
          "Parabol",
          "Elip",
          "Hypebol",
          "Đường cong ziczac"
        ],
        correct: 0,
        explanation: "Bề mặt parabol có tính chất quang học kỳ diệu: các tia tới song song đều phản xạ hội tụ tại tiêu điểm (thu sóng), hoặc nguồn sáng tại tiêu điểm phản xạ thành chùm song song chiếu xa (đèn pha)."
      },
      {
        question: "Trong máy tán sỏi thận ngoài cơ thể không cần phẫu thuật, buồng phản xạ sóng xung kích có dạng một phần của hình gì?",
        options: [
          "Khối elipsoid (sinh ra do quay elip quanh trục lớn)",
          "Khối lập phương",
          "Khối trụ tròn",
          "Khối chóp tứ giác đều"
        ],
        correct: 0,
        explanation: "Sóng xung kích siêu âm phát ra từ tiêu điểm $F_1$ đập vào thành vòm elip sẽ phản xạ hội tụ năng lượng tối đa tại tiêu điểm $F_2$ nơi có viên sỏi thận để nghiền nát sỏi."
      },
      {
        question: "Nguyên lý định vị tàu thuyền tầm xa LORAN dựa trên tính chất hiệu khoảng cách không đổi đến 2 đài phát vô tuyến của đường nào?",
        options: [
          "Hypebol",
          "Elip",
          "Parabol",
          "Đường xoắn ốc"
        ],
        correct: 0,
        explanation: "Độ trễ thời gian phát sóng giữa 2 trạm tương ứng với hiệu khoảng cách cố định $|MF_1 - MF_2| = \\text{const}$, do đó con tàu luôn nằm trên một đường Hypebol."
      }
    ]
  },
  {
    lessonNum: 12,
    id: "bai-12",
    topicNum: 4,
    topicName: "Chuyên đề 4: Ứng dụng thực tiễn & Dự án Conic",
    title: "Bài 12: Dự án Capstone: Mô hình hóa kiến trúc vòm Conic & Tối ưu hóa kinh tế số",
    tag: "Capstone Project",
    objectives: [
      "Tích hợp liên hoàn toàn bộ kiến thức của 3 chuyên đề: Hệ phương trình bậc nhất ba ẩn + Phương pháp quy nạp toán học & Nhị thức Newton + Ba đường conic.",
      "Triển khai dự án mô hình hóa toán học (Mathematical Modeling) thực tế: Thiết kế kiến trúc một công trình vòm cổng Conic (Cầu vòm Parabol, Mái vòm nhà thi đấu Elip hoặc Tháp giải nhiệt nhà máy điện Hypebol).",
      "Lập bài toán tối ưu hóa kinh tế số: Dùng hệ phương trình 3 ẩn phân bổ ngân sách nguyên vật liệu xây dựng vòm kiến trúc đạt hiệu quả chi phí tối ưu.",
      "Trình bày báo cáo toán học số, minh họa đồ họa GeoGebra và bảo vệ dự án trước hội đồng lớp học theo bảng tiêu chí Rubrics."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-archway"></i> Kiến trúc Conic trong đời sống
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Cổng vòm Parabol (Cầu Nhật Tân, Cổng St. Louis Gateway Arch):</strong> Phân bố lực nén đều xuống chân vòm, triệt tiêu lực uốn giúp công trình siêu bền vững.</li>
            <li><strong>Tháp giải nhiệt Hypeboloid:</strong> Kết cấu mặt cong hypebol một tầng giúp hút gió tự nhiên cực mạnh và tiết kiệm vật liệu bê tông tối đa.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
          <h4 class="font-bold text-orange-900 dark:text-orange-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-list-check"></i> Tiêu chuẩn đánh giá Rubrics (100 điểm)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>1. Mô hình hóa hình học Conic chuẩn xác (35đ):</strong> Thiết lập đúng phương trình chính tắc, tọa độ tiêu điểm, đường chuẩn trên GeoGebra.</li>
            <li><strong>2. Ứng dụng hệ phương trình 3 ẩn giải toán chi phí (30đ):</strong> Lập hệ phương trình phân bổ vật tư logic, giải đúng nghiệm.</li>
            <li><strong>3. Ứng dụng quy nạp / Newton tính toán kết cấu (15đ):</strong> Tính toán số thanh chịu lực theo cấp số hoặc nhị thức.</li>
            <li><strong>4. Thuyết trình & Báo cáo đồ họa (20đ):</strong> Trình bày mạch lạc, bản vẽ kỹ thuật trực quan và phối hợp nhóm tốt.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Giai đoạn 1: Lên ý tưởng thiết kế công trình kiến trúc",
        content: "Chọn một công trình thực tế (ví dụ: Cầu vòm thép hình Parabol vượt sông). Xác định các thông số kỹ thuật: Chiều rộng nhịp cầu (100m), Chiều cao tĩnh không tại đỉnh vòm (25m)."
      },
      {
        title: "Giai đoạn 2: Thiết lập phương trình và vẽ trên GeoGebra",
        content: "Đặt hệ trục tọa độ với đỉnh parabol tại $I(0; 25)$ hoặc gốc tọa độ $O(0; 0)$ -> Tìm phương trình $y = -0.01x^2 + 25$ -> Dựng hình trực quan và đo đạc độ dài các dây treo cáp thép tại các vị trí $x = \\pm 10m, \\pm 20m, \\pm 30m, \\pm 40m$."
      },
      {
        title: "Giai đoạn 3: Tối ưu kinh phí bằng hệ phương trình ba ẩn",
        content: "Lập hệ phương trình tính khối lượng 3 loại vật tư: Thép chịu lực, Bê tông cường độ cao và Dây cáp dự ứng lực dựa trên tổng ngân sách và giới hạn chịu tải -> Báo cáo tổng kết dự án."
      }
    ],
    practice: "Thực hiện theo nhóm 3-4 học sinh: Dùng phần mềm GeoGebra vẽ thiết kế một cổng vòm elip có chiều rộng 12m và chiều cao 4m. Thiết lập hệ phương trình tính kinh phí sơn phủ chống thấm bề mặt vòm và chuẩn bị slide báo cáo 5 phút.",
    quizzes: [
      {
        question: "Ưu điểm vượt trội lớn nhất của kết cấu vòm Parabol trong kỹ thuật xây dựng cầu đường và mái vòm nhà thi đấu là gì?",
        options: [
          "Tải trọng trọng lực được phân bố đều thành lực nén dọc theo đường cong xuống hai mố cầu, giảm thiểu tối đa ứng suất uốn gãy",
          "Làm cho công trình nhẹ hơn không khí",
          "Có thể gấp gọn lại cất vào túi xách",
          "Chi phí xây dựng luôn bằng 0"
        ],
        correct: 0,
        explanation: "Hình dạng parabol là hình dạng cân bằng tự nhiên của lực nén (dây cáp võng treo hình parabol, vòm chịu nén hình parabol úp) giúp tăng sức chịu lực tối đa cho công trình."
      },
      {
        question: "Trong dự án mô hình hóa toán học, bước 'Chuyển bài toán thực tế thành ngôn ngữ và công thức toán học' được gọi là gì?",
        options: [
          "Mô hình hóa toán học (Mathematical Modeling)",
          "Giải phương trình",
          "Kiểm định giả thuyết",
          "Lập bảng tính giá trị"
        ],
        correct: 0,
        explanation: "Mô hình hóa toán học là tiến trình trừu tượng hóa các đại lượng thực tế thành các biến số, hàm số và hệ phương trình toán học để giải quyết."
      },
      {
        question: "Phần mềm toán học hình học động miễn phí phổ biến nhất hiện nay hỗ trợ vẽ và khảo sát trực quan ba đường Conic là gì?",
        options: [
          "GeoGebra",
          "Photoshop",
          "Notepad",
          "VLC Media Player"
        ],
        correct: 0,
        explanation: "GeoGebra là phần mềm toán học động chuẩn giáo dục quốc tế hỗ trợ đắc lực vẽ đồ thị, hình học 2D/3D và khảo sát tương tác các đường conic."
      },
      {
        question: "Sau khi hoàn thành khóa học Chuyên đề học tập Toán 10, học sinh được nâng cao phẩm chất và năng lực cốt lõi nào?",
        options: [
          "Năng lực tư duy lập luận logic, mô hình hóa giải quyết bài toán thực tế và kết nối toán học với các ngành kỹ thuật, kinh tế",
          "Chỉ biết bấm máy tính mà không hiểu bản chất",
          "Học thuộc lòng đáp án để đi thi",
          "Chỉ biết giải các bài toán trên giấy không áp dụng được vào đâu"
        ],
        correct: 0,
        explanation: "Chuyên đề Toán 10 bồi đắp tư duy logic sâu sắc, năng lực mô hình hóa thực tiễn và kỹ năng vận dụng toán học vào khoa học công nghệ hiện đại."
      }
    ]
  }
];

module.exports = lessons;
