// Data for Chuyên đề học tập Toán 12 - Kết nối tri thức với cuộc sống (GDPT 2018)
// 12 lessons: 3 Chuyên đề SGK + Ứng dụng & Dự án Capstone
// Each lesson has 4 interactive quizzes (total 48 quizzes)

module.exports = [
  {
    "lessonNum": 1,
    "id": "bai-1",
    "topicNum": 1,
    "topicName": "Chuyên đề 1: Ứng dụng toán học giải quyết bài toán tối ưu",
    "title": "Bài 1: Bài toán quy hoạch tuyến tính & Phương pháp hình học",
    "tag": "Quy hoạch tuyến tính",
    "objectives": [
      "Nắm vững định nghĩa dạng tổng quát của bài toán quy hoạch tuyến tính hai ẩn: tìm GTLN hoặc GTNN của hàm mục tiêu $F(x, y) = ax + by + c$ trên miền đa giác nghiệm.",
      "Làm chủ kỹ thuật biểu diễn hình học miền chấp nhận được (Feasible Region) $\\mathcal{D}$ của hệ bất phương trình bậc nhất hai ẩn trên mặt phẳng tọa độ $Oxy$.",
      "Hiểu rõ Định lý cơ bản của quy hoạch tuyến tính: hàm mục tiêu luôn đạt giá trị tối ưu tại ít nhất một trong các đỉnh của miền đa giác lồi đóng $\\mathcal{D}$.",
      "Vận dụng quy hoạch tuyến tính giải bài toán thực tế: phân bổ nguyên vật liệu nhà máy, tối ưu khẩu phần dinh dưỡng hoặc tối đa hóa lợi nhuận sản xuất."
    ],
    "summary": "\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 my-4\">\n        <div class=\"p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800\">\n          <h4 class=\"font-bold text-teal-900 dark:text-teal-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-shapes\"></i> Mô hình bài toán & Hàm mục tiêu\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Biến quyết định:</strong> $x, y$ biểu thị số lượng sản phẩm loại I, II cần sản xuất ($x \\ge 0, y \\ge 0$).</li>\n            <li><strong>Hệ ràng buộc tài nguyên:</strong> Hệ bất phương trình bậc nhất hai ẩn mô tả giới hạn về giờ công, nguyên vật liệu, vốn đầu tư.</li>\n            <li><strong>Hàm mục tiêu:</strong> $F(x, y) = ax + by + c$ (thường là tổng doanh thu, lợi nhuận hoặc tổng chi phí). Cần tìm $(x, y) \\in \\mathcal{D}$ để $F$ đạt $\\max$ hoặc $\\min$.</li>\n          </ul>\n        </div>\n        <div class=\"p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800\">\n          <h4 class=\"font-bold text-emerald-900 dark:text-emerald-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-draw-polygon\"></i> Phương pháp đỉnh đa giác\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Miền nghiệm $\\mathcal{D}$:</strong> Là giao của các nửa mặt phẳng, tạo thành một miền đa giác lồi bị chặn (hoặc không bị chặn).</li>\n            <li><strong>Định lý cực trị:</strong> Nếu miền nghiệm $\\mathcal{D}$ là một đa giác lồi đóng thì giá trị lớn nhất và nhỏ nhất của hàm tuyến tính $F(x, y)$ luôn đạt được tại một trong các <em>đỉnh</em> của đa giác $\\mathcal{D}$.</li>\n            <li><strong>Quy tắc tìm:</strong> Tìm tọa độ tất cả các đỉnh $A_1, A_2, \\dots, A_k$ $\\rightarrow$ Tính giá trị $F(A_i)$ $\\rightarrow$ So sánh để chọn giá trị lớn nhất / nhỏ nhất.</li>\n          </ul>\n        </div>\n      </div>\n    ",
    "steps": [
      {
        "title": "Bước 1: Gọi biến và thiết lập hệ bất phương trình ràng buộc",
        "content": "Đặt ẩn số $x, y$ (kèm điều kiện $x, y \\ge 0$). Lập bảng số liệu thống kê chi phí, giờ máy, nguyên liệu để viết hệ bất phương trình bậc nhất hai ẩn và hàm mục tiêu $F(x, y)$."
      },
      {
        "title": "Bước 2: Vẽ miền nghiệm và xác định tọa độ các đỉnh",
        "content": "Vẽ các đường thẳng biên trên hệ trục $Oxy$. Xác định miền đa giác lồi $\\mathcal{D}$ không bị gạch bỏ. Giải các hệ phương trình giao điểm để tìm tọa độ chính xác của các đỉnh đa giác."
      },
      {
        "title": "Bước 3: Tính giá trị hàm mục tiêu tại các đỉnh và kết luận",
        "content": "Thay tọa độ từng đỉnh vào $F(x, y)$. Giá trị lớn nhất tìm được là $\\max F$, giá trị nhỏ nhất là $\\min F$. Diễn giải kết quả về mặt kinh tế cho doanh nghiệp."
      }
    ],
    "practice": "Một xưởng sản xuất hai loại sản phẩm A và B. Để sản xuất 1 kg loại A cần 2 giờ máy và 1 kg nguyên liệu, lãi 40 nghìn đồng. Để sản xuất 1 kg loại B cần 1 giờ máy và 2 kg nguyên liệu, lãi 30 nghìn đồng. Xưởng có tối đa 80 giờ máy và 100 kg nguyên liệu. Hãy lập kế hoạch sản xuất để xưởng thu được lợi nhuận cao nhất.",
    "quizzes": [
      {
        "question": "Theo định lý cơ bản của quy hoạch tuyến tính, nếu miền chấp nhận được D là một đa giác lồi đóng, thì giá trị lớn nhất của hàm mục tiêu $F(x, y) = ax + by$ luôn đạt được tại:",
        "options": [
          "Ít nhất một trong các đỉnh của đa giác D",
          "Tâm đối xứng của đa giác D",
          "Trọng tâm của đa giác D",
          "Điểm bất kì nằm sâu bên trong miền đa giác"
        ],
        "correct": 0,
        "explanation": "Hàm tuyến tính $F(x, y)$ không có điểm uốn hay cực trị địa phương bên trong miền đa giác; đường mức $ax + by = C$ sẽ tiếp xúc với biên ngoài cùng tại ít nhất một đỉnh của đa giác lồi đóng."
      },
      {
        "question": "Hàm mục tiêu $F(x, y) = 3x + 2y$ trên miền đa giác có các đỉnh $A(0; 0), B(4; 0), C(2; 3), D(0; 4)$ đạt giá trị lớn nhất bằng bao nhiêu?",
        "options": [
          "12 (đạt tại đỉnh B và đỉnh C)",
          "8",
          "15",
          "9"
        ],
        "correct": 0,
        "explanation": "Tính giá trị tại các đỉnh: $F(A) = 0$; $F(B) = 3(4) + 2(0) = 12$; $F(C) = 3(2) + 2(3) = 12$; $F(D) = 3(0) + 2(4) = 8$. Vậy GTLN bằng 12 (đạt tại mọi điểm trên đoạn thẳng nối B và C)."
      },
      {
        "question": "Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\end{cases}$ là một hình phẳng có dạng:",
        "options": [
          "Tam giác vuông cân có diện tích bằng 8",
          "Hình vuông có diện tích bằng 16",
          "Hình chữ nhật có diện tích bằng 8",
          "Miền không bị chặn"
        ],
        "correct": 0,
        "explanation": "Miền nghiệm giới hạn bởi hai trục tọa độ $Ox, Oy$ và đường thẳng $x + y = 4$, tạo thành tam giác vuông tại gốc $O(0, 0)$ với hai cạnh góc vuông có độ dài bằng 4. Diện tích $S = \\frac{1}{2} \\times 4 \\times 4 = 8$."
      },
      {
        "question": "Trong quy hoạch tuyến tính, nếu đường mức của hàm mục tiêu song song với một cạnh của miền đa giác nghiệm thì:",
        "options": [
          "Hàm mục tiêu đạt giá trị tối ưu tại vô số điểm (tại mọi điểm trên cạnh đó)",
          "Bài toán vô nghiệm",
          "Hàm mục tiêu không xác định",
          "Chỉ có đúng một nghiệm duy nhất tại gốc tọa độ"
        ],
        "correct": 0,
        "explanation": "Khi đường mức song song với một cạnh của đa giác lồi và đạt cực trị tại cạnh đó, toàn bộ đoạn thẳng biên nối hai đỉnh liên tiếp đều cho cùng một giá trị tối ưu, tức bài toán có vô số nghiệm tối ưu."
      }
    ]
  },
  {
    "lessonNum": 2,
    "id": "bai-2",
    "topicNum": 1,
    "topicName": "Chuyên đề 1: Ứng dụng toán học giải quyết bài toán tối ưu",
    "title": "Bài 2: Vận dụng đạo hàm trong bài toán tối ưu kinh tế & sản xuất",
    "tag": "Đạo hàm kinh tế",
    "objectives": [
      "Nắm vững các hàm số kinh tế cơ bản: Hàm tổng chi phí $C(x)$, hàm doanh thu $R(x) = p(x) \\cdot x$, hàm lợi nhuận $P(x) = R(x) - C(x)$.",
      "Hiểu rõ ý nghĩa kinh tế của đạo hàm: Chi phí biên $C'(x)$ (Marginal Cost) và Doanh thu biên $R'(x)$ (Marginal Revenue).",
      "Làm chủ nguyên lý tối ưu hóa lợi nhuận: Lợi nhuận cực đại khi $P'(x) = 0 \\Leftrightarrow R'(x) = C'(x)$ (doanh thu biên bằng chi phí biên).",
      "Vận dụng đạo hàm tìm mức giá bán tối ưu $p$, sản lượng tối ưu $x$ và khảo sát bài toán đánh thuế của nhà nước lên doanh nghiệp."
    ],
    "summary": "\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 my-4\">\n        <div class=\"p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800\">\n          <h4 class=\"font-bold text-teal-900 dark:text-teal-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-coins\"></i> Các hàm số kinh tế & Đạo hàm biên\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Chi phí biên $C'(x)$:</strong> Là chi phí phát sinh xấp xỉ khi doanh nghiệp sản xuất thêm 1 đơn vị sản phẩm thứ $x + 1$.</li>\n            <li><strong>Doanh thu biên $R'(x)$:</strong> Là doanh thu tăng thêm khi bán thêm 1 đơn vị sản phẩm thứ $x + 1$.</li>\n            <li><strong>Hàm cầu $p = D(x)$:</strong> Mối quan hệ giữa giá bán $p$ và lượng cầu $x$ của thị trường (thường là hàm nghịch biến: giá càng cao, lượng mua càng giảm).</li>\n          </ul>\n        </div>\n        <div class=\"p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800\">\n          <h4 class=\"font-bold text-emerald-900 dark:text-emerald-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-chart-line\"></i> Điều kiện tối ưu hóa lợi nhuận\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Hàm lợi nhuận:</strong> $P(x) = R(x) - C(x) = x \\cdot p(x) - C(x)$.</li>\n            <li><strong>Điều kiện cần cực đại:</strong> $P'(x) = R'(x) - C'(x) = 0 \\Leftrightarrow R'(x) = C'(x)$.</li>\n            <li><strong>Ý nghĩa kinh tế:</strong> Doanh nghiệp nên tiếp tục mở rộng sản xuất chừng nào doanh thu tăng thêm vẫn lớn hơn chi phí phát sinh ($R' > C'$); và dừng lại tại mức sản lượng mà $R' = C'$.</li>\n            <li><strong>Chi phí trung bình:</strong> $AC(x) = \\frac{C(x)}{x}$. Chi phí trung bình nhỏ nhất tại điểm mà $AC'(x) = 0 \\Leftrightarrow C'(x) = AC(x)$.</li>\n          </ul>\n        </div>\n      </div>\n    ",
    "steps": [
      {
        "title": "Bước 1: Thiết lập biểu thức hàm mục tiêu lợi nhuận hoặc chi phí",
        "content": "Xác định hàm cầu $p(x)$ và hàm tổng chi phí $C(x)$. Lập hàm doanh thu $R(x) = x \\cdot p(x)$ và hàm lợi nhuận $P(x) = R(x) - C(x)$ trên khoảng sản lượng $x > 0$."
      },
      {
        "title": "Bước 2: Tính đạo hàm và tìm điểm dừng",
        "content": "Tính đạo hàm bậc nhất $P'(x) = R'(x) - C'(x)$. Giải phương trình $P'(x) = 0$ để tìm các nghiệm dương $x_0$ khả thi."
      },
      {
        "title": "Bước 3: Lập bảng biến thiên hoặc kiểm tra đạo hàm bậc hai",
        "content": "Kiểm tra dấu của $P'(x)$ qua $x_0$ (hoặc kiểm tra $P''(x_0) < 0$) để khẳng định hàm số đạt cực đại toàn cục tại $x_0$. Tính mức giá tối ưu $p(x_0)$ và lợi nhuận tối đa."
      }
    ],
    "practice": "Một công ty sản xuất độc quyền có hàm cầu $p = 120 - 0.02x$ (đơn vị: nghìn đồng) và hàm tổng chi phí $C(x) = 20000 + 40x + 0.01x^2$ (nghìn đồng). \n1) Tìm sản lượng $x$ để lợi nhuận của công ty đạt giá trị lớn nhất. \n2) Xác định giá bán $p$ và lợi nhuận tối đa tương ứng.",
    "quizzes": [
      {
        "question": "Trong kinh tế học vi mô, doanh nghiệp độc quyền đạt lợi nhuận tối đa khi thỏa mãn điều kiện biên nào sau đây?",
        "options": [
          "Doanh thu biên bằng Chi phí biên ($R'(x) = C'(x)$)",
          "Doanh thu biên bằng 0",
          "Chi phí biên bằng 0",
          "Chi phí trung bình đạt giá trị lớn nhất"
        ],
        "correct": 0,
        "explanation": "Lợi nhuận $P(x) = R(x) - C(x)$. Đạo hàm $P'(x) = R'(x) - C'(x) = 0 \\Leftrightarrow R'(x) = C'(x)$. Tại điểm này, doanh thu thêm bù đắp vừa đúng chi phí tăng thêm."
      },
      {
        "question": "Cho hàm tổng chi phí $C(x) = 100 + 5x + 0.1x^2$. Chi phí biên tại mức sản lượng $x = 20$ là bao nhiêu?",
        "options": [
          "9",
          "5",
          "240",
          "12"
        ],
        "correct": 0,
        "explanation": "Chi phí biên là đạo hàm $C'(x) = 5 + 0.2x$. Tại $x = 20$, ta có $C'(20) = 5 + 0.2(20) = 5 + 4 = 9$."
      },
      {
        "question": "Hàm cầu của một sản phẩm là $p = 100 - x$. Hàm doanh thu $R(x)$ đạt giá trị cực đại tại mức sản lượng nào?",
        "options": [
          "$x = 50$",
          "$x = 100$",
          "$x = 25$",
          "$x = 75$"
        ],
        "correct": 0,
        "explanation": "Doanh thu $R(x) = x \\cdot p = x(100 - x) = 100x - x^2$. Đạo hàm $R'(x) = 100 - 2x = 0 \\Leftrightarrow x = 50$."
      },
      {
        "question": "Khi chi phí trung bình $AC(x) = \\frac{C(x)}{x}$ đạt giá trị nhỏ nhất, mối quan hệ giữa chi phí biên $C'(x)$ và chi phí trung bình là gì?",
        "options": [
          "$C'(x) = AC(x)$ (đường chi phí biên cắt đường chi phí trung bình tại điểm cực tiểu của AC)",
          "$C'(x) > AC(x)$",
          "$C'(x) = 0$",
          "$AC(x) = 0$"
        ],
        "correct": 0,
        "explanation": "Đạo hàm $[AC(x)]' = \\frac{C'(x)x - C(x)}{x^2} = 0 \\Leftrightarrow C'(x) = \\frac{C(x)}{x} = AC(x)$. Nghĩa là đường chi phí biên luôn đi qua đáy của đường chi phí trung bình."
      }
    ]
  },
  {
    "lessonNum": 3,
    "id": "bai-3",
    "topicNum": 1,
    "topicName": "Chuyên đề 1: Ứng dụng toán học giải quyết bài toán tối ưu",
    "title": "Bài 3: Ứng dụng đạo hàm giải bài toán tối ưu hình học & kỹ thuật",
    "tag": "Tối ưu hình học",
    "objectives": [
      "Làm chủ phương pháp xây dựng hàm mục tiêu một biến $f(x)$ cho các bài toán tối ưu hình học và kỹ thuật công nghiệp.",
      "Tìm thể tích lớn nhất của khối hộp chữ nhật, hình trụ, hình nón khi cho trước diện tích vật liệu.",
      "Tìm diện tích toàn phần nhỏ nhất (tiết kiệm vật liệu vỏ hộp kim loại/nhựa) khi cho trước dung tích thể tích $V_0$.",
      "Ứng dụng đạo hàm giải bài toán định tuyến đường ống tối ưu chi phí, bài toán phản xạ ánh sáng (Định luật Fermat) và khúc xạ quang học."
    ],
    "summary": "\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 my-4\">\n        <div class=\"p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800\">\n          <h4 class=\"font-bold text-teal-900 dark:text-teal-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-box-open\"></i> Bài toán thiết kế bao bì & Thể tích\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Cắt góc làm hộp:</strong> Tấm tôn hình chữ nhật kích thước $a \\times b$, cắt 4 góc vuông cạnh $x$ để gập thành hộp không nắp. Thể tích $V(x) = x(a - 2x)(b - 2x)$ với $0 < x < \\frac{\\min(a, b)}{2}$.</li>\n            <li><strong>Lon nước ngọt hình trụ:</strong> Thể tích cố định $V_0 = \\pi r^2 h \\Rightarrow h = \\frac{V_0}{\\pi r^2}$. Diện tích toàn phần (chi phí vỏ lon) $S_{tp}(r) = 2\\pi r^2 + 2\\pi rh = 2\\pi r^2 + \\frac{2V_0}{r}$. Đạt cực tiểu khi chiều cao bằng đường kính đáy: $h = 2r$.</li>\n          </ul>\n        </div>\n        <div class=\"p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800\">\n          <h4 class=\"font-bold text-emerald-900 dark:text-emerald-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-route\"></i> Bài toán kỹ thuật & Đường đi ngắn nhất\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Dẫn ống dầu:</strong> Nối từ trạm khoan $S$ ngoài khơi qua điểm $P(x)$ trên bờ rồi dẫn đường bộ về nhà máy $M$. Tổng chi phí $C(x) = k_1 \\sqrt{d_1^2 + x^2} + k_2(L - x)$ với đơn giá ngầm biển $k_1$ lớn hơn đơn giá đất liền $k_2$.</li>\n            <li><strong>Nguyên lý Fermat:</strong> Ánh sáng truyền giữa hai điểm theo quỹ đạo tốn ít thời gian nhất. Đạo hàm hàm thời gian $T(x) = \\frac{s_1}{v_1} + \\frac{s_2}{v_2}$ cho ra Định luật khúc xạ ánh sáng Snell: $\\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2}$.</li>\n          </ul>\n        </div>\n      </div>\n    ",
    "steps": [
      {
        "title": "Bước 1: Chọn ẩn số và thiết lập miền xác định",
        "content": "Chọn một kích thước hình học làm ẩn biến $x$ (ví dụ: bán kính đáy $r$, chiều cao $h$, hoặc cạnh cắt $x$). Tìm điều kiện hình học để xác định khoảng biến thiên $x \\in (a, b)$."
      },
      {
        "title": "Bước 2: Biểu diễn các đại lượng khác theo x",
        "content": "Dùng các định lý hình học (Pythagore, Thales, hệ thức lượng, công thức diện tích/thể tích) để biểu diễn đại lượng cần tối ưu thành hàm số một biến $f(x)$."
      },
      {
        "title": "Bước 3: Khảo sát cực trị bằng đạo hàm",
        "content": "Tính đạo hàm $f'(x)$, giải $f'(x) = 0$ trên miền xác định. Lập bảng biến thiên để tìm giá trị lớn nhất / nhỏ nhất và tính kích thước hình học tối ưu tương ứng."
      }
    ],
    "practice": "Người ta muốn thiết kế một vỏ lon sữa đặc hình trụ kín có thể tích không đổi $V = 314\\text{ cm}^3$ (lấy $\\pi \\approx 3.14$). Hãy tìm bán kính đáy $r$ và chiều cao $h$ của vỏ lon để lượng tôn kim loại dùng làm vỏ lon là ít nhất.",
    "quizzes": [
      {
        "question": "Một lon nước ngọt hình trụ kín có thể tích cố định $V_0$. Để diện tích toàn phần của lon là nhỏ nhất (tiết kiệm kim loại nhất), tỉ số giữa chiều cao h và bán kính đáy r phải bằng:",
        "options": [
          "$\\frac{h}{r} = 2$ (chiều cao bằng đường kính đáy)",
          "$\\frac{h}{r} = 1$",
          "$\\frac{h}{r} = 4$",
          "$\\frac{h}{r} = \\pi$"
        ],
        "correct": 0,
        "explanation": "Diện tích toàn phần $S = 2\\pi r^2 + \\frac{2V_0}{r}$. Đạo hàm $S'(r) = 4\\pi r - \\frac{2V_0}{r^2} = 0 \\Leftrightarrow V_0 = 2\\pi r^3$. Mà $V_0 = \\pi r^2 h$, nên $\\pi r^2 h = 2\\pi r^3 \\Rightarrow h = 2r$."
      },
      {
        "question": "Từ một tấm bìa hình vuông cạnh 12 cm, người ta cắt bỏ 4 hình vuông nhỏ cạnh x ở 4 góc rồi gập thành một hộp chữ nhật không nắp. Thể tích hộp đạt giá trị lớn nhất khi x bằng:",
        "options": [
          "$x = 2\\text{ cm}$",
          "$x = 3\\text{ cm}$",
          "$x = 4\\text{ cm}$",
          "$x = 1\\text{ cm}$"
        ],
        "correct": 0,
        "explanation": "Thể tích $V(x) = x(12 - 2x)^2 = 4x(6 - x)^2$ với $0 < x < 6$. Đạo hàm $V'(x) = 4(6 - x)(6 - 3x) = 0 \\Leftrightarrow x = 2\\text{ cm}$. Thể tích tối đa là $V(2) = 2(8)^2 = 128\\text{ cm}^3$."
      },
      {
        "question": "Một hàng rào dài 100 m được dùng để rào một khu vườn hình chữ nhật tựa vào một bờ tường thẳng có sẵn (chỉ cần rào 3 cạnh). Diện tích lớn nhất của khu vườn rào được là:",
        "options": [
          "$1250\\text{ m}^2$",
          "$2500\\text{ m}^2$",
          "$625\\text{ m}^2$",
          "$1000\\text{ m}^2$"
        ],
        "correct": 0,
        "explanation": "Gọi hai cạnh vuông góc với tường là $x$ ($x > 0$), cạnh song song với tường là $100 - 2x$. Diện tích $S(x) = x(100 - 2x) = 100x - 2x^2$. Đạt GTLN tại $x = 25\\text{ m}$. Diện tích cực đại $S = 25 \\times 50 = 1250\\text{ m}^2$."
      },
      {
        "question": "Nguyên lý Fermat trong quang học khẳng định rằng ánh sáng truyền giữa hai điểm theo con đường:",
        "options": [
          "Tốn ít thời gian nhất",
          "Có quãng đường hình học ngắn nhất",
          "Có vận tốc lớn nhất",
          "Song song với mặt đất"
        ],
        "correct": 0,
        "explanation": "Nguyên lý thời gian cực tiểu của Pierre de Fermat phát biểu rằng chùm tia sáng luôn chọn quỹ đạo chuyển động sao cho tổng thời gian truyền là nhỏ nhất."
      }
    ]
  },
  {
    "lessonNum": 4,
    "id": "bai-4",
    "topicNum": 2,
    "topicName": "Chuyên đề 2: Ứng dụng toán học trong tài chính",
    "title": "Bài 4: Lãi suất đơn, lãi suất kép & Giá trị thời gian của tiền",
    "tag": "Toán tài chính",
    "objectives": [
      "Phân biệt bản chất của Lãi đơn (Simple Interest) và Lãi kép (Compound Interest).",
      "Làm chủ công thức lãi kép: $S = P(1 + r)^n$, lãi kép ghép lãi $m$ kỳ mỗi năm $S = P\\left(1 + \\frac{r}{m}\\right)^{mt}$ và lãi kép liên tục $S = P \\cdot e^{rt}$.",
      "Nắm vững nguyên lý Giá trị thời gian của tiền (Time Value of Money - TVM): Giá trị hiện tại $PV$ và Giá trị tương lai $FV = PV(1 + r)^n$.",
      "Hiểu tác động của lạm phát, phân biệt Lãi suất danh nghĩa và Lãi suất thực tế theo phương trình Fisher: $1 + r_{\\text{thực}} = \\frac{1 + r_{\\text{danh nghĩa}}}{1 + i}$."
    ],
    "summary": "\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 my-4\">\n        <div class=\"p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800\">\n          <h4 class=\"font-bold text-teal-900 dark:text-teal-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-piggy-bank\"></i> Lãi đơn vs Lãi kép\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Lãi đơn:</strong> Tiền lãi chỉ tính trên vốn gốc ban đầu: $I = P \\cdot r \\cdot t \\Rightarrow S = P(1 + r \\cdot t)$.</li>\n            <li><strong>Lãi kép (Kỳ quan thứ 8):</strong> Tiền lãi của kỳ trước được cộng dồn vào gốc để tính lãi cho kỳ tiếp theo:\n              $$FV = PV(1 + r)^n$$\n            </li>\n            <li><strong>Ghép lãi $m$ lần/năm:</strong> Với lãi suất năm $r$, ghép lãi $m$ kỳ/năm trong $t$ năm: $FV = PV\\left(1 + \\frac{r}{m}\\right)^{mt}$.</li>\n            <li><strong>Quy tắc 72:</strong> Thời gian để số tiền nhân đôi xấp xỉ bằng $\\frac{72}{r(\\%)}$.</li>\n          </ul>\n        </div>\n        <div class=\"p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800\">\n          <h4 class=\"font-bold text-emerald-900 dark:text-emerald-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-hourglass-half\"></i> Giá trị hiện tại (PV) & Lạm phát\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Chiết khấu dòng tiền:</strong> 1 đồng hôm nay có giá trị cao hơn 1 đồng trong tương lai vì khả năng sinh lời. Giá trị hiện tại:\n              $$PV = \\frac{FV}{(1 + r)^n}$$\n            </li>\n            <li><strong>Lạm phát:</strong> Làm giảm sức mua của đồng tiền theo thời gian theo cấp số nhân: $P_n = P_0(1 + i)^n$.</li>\n            <li><strong>Phương trình Fisher:</strong> Lãi suất thực sau khi trừ lạm phát:\n              $$r_{\\text{thực}} \\approx r_{\\text{danh nghĩa}} - i$$\n            </li>\n          </ul>\n        </div>\n      </div>\n    ",
    "steps": [
      {
        "title": "Bước 1: Xác định vốn gốc, lãi suất và chu kỳ ghép lãi",
        "content": "Xác định vốn ban đầu $P$, lãi suất danh nghĩa năm $r$ và số kỳ ghép lãi trong năm $m$ (hàng năm $m=1$, quý $m=4$, tháng $m=12$). Tính lãi suất mỗi kỳ $i = \\frac{r}{m}$ và tổng số kỳ $n = m \\times t$."
      },
      {
        "title": "Bước 2: Áp dụng công thức lãi kép hoặc chiết khấu hiện tại",
        "content": "Nếu tính tiền nhận được trong tương lai: áp dụng $FV = PV(1 + i)^n$. Nếu tính số tiền cần đầu tư hiện tại để đạt mục tiêu tương lai: áp dụng $PV = \\frac{FV}{(1 + i)^n}$."
      },
      {
        "title": "Bước 3: Hiệu chỉnh theo lạm phát để đánh giá sức mua thực tế",
        "content": "Tính giá trị thực tế sau khi loại trừ tỷ lệ lạm phát để đưa ra quyết định đầu tư an toàn và hiệu quả."
      }
    ],
    "practice": "Ông Nam gửi tiết kiệm 200 triệu đồng vào ngân hàng với lãi suất 6%/năm theo hình thức lãi kép, kỳ hạn ghép lãi theo tháng ($m = 12$). \n1) Hỏi sau 5 năm, ông Nam nhận được cả gốc lẫn lãi là bao nhiêu tiền? \n2) Nếu tỷ lệ lạm phát bình quân là 3.5%/năm trong suốt thời gian đó, sức mua thực tế của số tiền sau 5 năm tương đương bao nhiêu tiền tại thời điểm hiện tại?",
    "quizzes": [
      {
        "question": "Một người gửi 100 triệu đồng vào ngân hàng với lãi suất 7%/năm, lãi kép tính hàng năm. Sau 3 năm, tổng số tiền (cả gốc lẫn lãi) người đó nhận được xấp xỉ bằng:",
        "options": [
          "122.50 triệu đồng",
          "121.00 triệu đồng",
          "107.00 triệu đồng",
          "130.00 triệu đồng"
        ],
        "correct": 0,
        "explanation": "Áp dụng công thức lãi kép: $FV = PV(1 + r)^n = 100 \\times (1 + 0.07)^3 = 100 \\times 1.225043 \\approx 122.50$ triệu đồng."
      },
      {
        "question": "Theo Quy tắc 72, với mức lãi suất kép 8%/năm, sau khoảng bao nhiêu năm thì số tiền tiết kiệm ban đầu sẽ tăng gấp đôi?",
        "options": [
          "Khoảng 9 năm",
          "Khoảng 12 năm",
          "Khoảng 6 năm",
          "Khoảng 8 năm"
        ],
        "correct": 0,
        "explanation": "Theo quy tắc 72 ước lượng nhanh thời gian nhân đôi vốn: $t \\approx \\frac{72}{r} = \\frac{72}{8} = 9$ năm."
      },
      {
        "question": "Nếu tỷ lệ lạm phát hàng năm là 4%, sau 10 năm sức mua của một món hàng trị giá 100 triệu đồng hiện nay sẽ tăng thành bao nhiêu tiền?",
        "options": [
          "$100 \\times (1 + 0.04)^{10} \\approx 148$ triệu đồng",
          "$140$ triệu đồng",
          "$104$ triệu đồng",
          "$120$ triệu đồng"
        ],
        "correct": 0,
        "explanation": "Giá cả tăng theo lãi kép của lạm phát: $P_{10} = 100 \\times (1.04)^{10} \\approx 148.02$ triệu đồng."
      },
      {
        "question": "Giá trị hiện tại PV của một khoản tiền 133.1 triệu đồng nhận được sau 3 năm với tỷ suất chiết khấu 10%/năm là:",
        "options": [
          "100 triệu đồng",
          "110 triệu đồng",
          "120 triệu đồng",
          "90 triệu đồng"
        ],
        "correct": 0,
        "explanation": "Áp dụng công thức chiết khấu giá trị hiện tại: $PV = \\frac{FV}{(1 + r)^n} = \\frac{133.1}{(1.1)^3} = \\frac{133.1}{1.331} = 100$ triệu đồng."
      }
    ]
  },
  {
    "lessonNum": 5,
    "id": "bai-5",
    "topicNum": 2,
    "topicName": "Chuyên đề 2: Ứng dụng toán học trong tài chính",
    "title": "Bài 5: Bài toán tiền gửi định kỳ (Niên kim tích lũy - Annuity)",
    "tag": "Toán tài chính",
    "objectives": [
      "Nắm vững khái niệm Niên kim (Annuity): chuỗi các khoản tiền bằng nhau phát sinh định kỳ cách đều nhau.",
      "Phân biệt Niên kim thông thường (Ordinary Annuity - gửi cuối kỳ) và Niên kim đầu kỳ (Annuity Due).",
      "Làm chủ công thức tính Giá trị tương lai của niên kim gửi cuối kỳ: $FV = A \\cdot \\frac{(1 + r)^n - 1}{r}$.",
      "Ứng dụng tính toán kế hoạch tích lũy tài chính cá nhân: tiết kiệm mua nhà, lập quỹ hưu trí và học phí đại học cho con."
    ],
    "summary": "\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 my-4\">\n        <div class=\"p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800\">\n          <h4 class=\"font-bold text-teal-900 dark:text-teal-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-calendar-check\"></i> Niên kim thông thường (Gửi cuối kỳ)\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Định nghĩa:</strong> Cuối mỗi kỳ (tháng/năm), gửi vào ngân hàng một số tiền cố định là $A$ với lãi suất mỗi kỳ là $r$.</li>\n            <li><strong>Cơ chế dồn lãi:</strong> Khoản tiền gửi kỳ đầu tiên được tính lãi trong $n - 1$ kỳ; khoản cuối cùng gửi vào cuối kỳ thứ $n$ không sinh lãi.</li>\n            <li><strong>Tổng giá trị tương lai (FV):</strong> Là tổng cấp số nhân có công bội $q = 1 + r$:\n              $$FV = A + A(1 + r) + \\dots + A(1 + r)^{n-1} = A \\cdot \\frac{(1 + r)^n - 1}{r}$$\n            </li>\n          </ul>\n        </div>\n        <div class=\"p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800\">\n          <h4 class=\"font-bold text-emerald-900 dark:text-emerald-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-umbrella-beach\"></i> Lập quỹ hưu trí & Tích lũy mục tiêu\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Bài toán đảo:</strong> Muốn tích lũy được số tiền mục tiêu $FV$ sau $n$ kỳ, số tiền định kỳ $A$ cần gửi mỗi tháng là:\n              $$A = FV \\cdot \\frac{r}{(1 + r)^n - 1}$$\n            </li>\n            <li><strong>Niên kim đầu kỳ:</strong> Nếu gửi tiền vào đầu mỗi kỳ, mỗi khoản đều sinh lãi thêm đúng 1 kỳ:\n              $$FV_{\\text{đầu kỳ}} = FV_{\\text{cuối kỳ}} \\times (1 + r) = A(1 + r) \\cdot \\frac{(1 + r)^n - 1}{r}$$\n            </li>\n          </ul>\n        </div>\n      </div>\n    ",
    "steps": [
      {
        "title": "Bước 1: Xác định số tiền gửi A, lãi suất kỳ r và tổng số kỳ n",
        "content": "Kiểm tra chu kỳ gửi tiền (nếu gửi hàng tháng thì đổi lãi suất năm ra lãi suất tháng $r = \\frac{r_{\\text{năm}}}{12}$ và tính tổng số tháng $n = 12 \\times t$)."
      },
      {
        "title": "Bước 2: Phân loại thời điểm gửi tiền (Đầu kỳ hay Cuối kỳ)",
        "content": "Xác định khoản thanh toán diễn ra vào cuối mỗi tháng hay đầu mỗi tháng để chọn đúng công thức nhân thêm hệ số $(1 + r)$ đối với niên kim đầu kỳ."
      },
      {
        "title": "Bước 3: Bấm máy tính và kiểm tra tổng tiền lãi phát sinh",
        "content": "Tính $FV$. Lấy $FV$ trừ đi tổng vốn gốc thực tế đã gửi ($n \\times A$) để biết chính xác số tiền lãi do lãi kép sinh ra."
      }
    ],
    "practice": "Chị Mai dự định sau 10 năm nữa khi về hưu sẽ có một khoản quỹ tiết kiệm trị giá 1 tỷ đồng. Ngân hàng áp dụng lãi suất 6%/năm ghép lãi hàng tháng (tức 0.5%/tháng). Hỏi vào cuối mỗi tháng, chị Mai cần gửi tiết kiệm cố định bao nhiêu tiền?",
    "quizzes": [
      {
        "question": "Công thức tính giá trị tương lai FV của một chuỗi niên kim gửi cố định A đồng vào cuối mỗi kỳ trong n kỳ với lãi suất r mỗi kỳ là:",
        "options": [
          "$FV = A \\cdot \\frac{(1 + r)^n - 1}{r}$",
          "$FV = A \\cdot (1 + r)^n$",
          "$FV = A \\cdot \\frac{1 - (1 + r)^{-n}}{r}$",
          "$FV = n \\cdot A \\cdot (1 + r)$"
        ],
        "correct": 0,
        "explanation": "Giá trị tương lai của niên kim gửi cuối kỳ là tổng của cấp số nhân $A \\sum_{k=0}^{n-1} (1 + r)^k = A \\cdot \\frac{(1 + r)^n - 1}{r}$."
      },
      {
        "question": "Anh An gửi 5 triệu đồng vào cuối mỗi tháng vào tài khoản tiết kiệm với lãi suất 0.5%/tháng. Sau 2 năm (24 tháng), tổng số tiền anh An nhận được xấp xỉ bằng:",
        "options": [
          "127.16 triệu đồng",
          "120.00 triệu đồng",
          "135.50 triệu đồng",
          "122.50 triệu đồng"
        ],
        "correct": 0,
        "explanation": "$FV = 5 \\cdot \\frac{(1 + 0.005)^{24} - 1}{0.005} = 5 \\cdot \\frac{1.12716 - 1}{0.005} \\approx 127.16$ triệu đồng (tiền gốc là 120 triệu, tiền lãi là 7.16 triệu)."
      },
      {
        "question": "So với niên kim thông thường (gửi tiền cuối kỳ), giá trị tương lai của niên kim đầu kỳ (gửi tiền vào đầu mỗi kỳ):",
        "options": [
          "Lớn hơn, gấp $(1 + r)$ lần niên kim cuối kỳ",
          "Nhỏ hơn, bằng niên kim cuối kỳ chia cho $(1 + r)$",
          "Hoàn toàn bằng nhau",
          "Lớn hơn gấp 2 lần"
        ],
        "correct": 0,
        "explanation": "Vì gửi vào đầu mỗi kỳ nên mọi khoản tiền đều được sinh lời thêm trọn vẹn một kỳ lãi suất, do đó $FV_{\\text{đầu kỳ}} = (1 + r) \\cdot FV_{\\text{cuối kỳ}}$."
      },
      {
        "question": "Số tiền lãi thuần thu được từ một tài khoản tiết kiệm niên kim tích lũy được tính bằng công thức nào?",
        "options": [
          "Tiền lãi = $FV - n \\cdot A$",
          "Tiền lãi = $FV - A$",
          "Tiền lãi = $n \\cdot A - FV$",
          "Tiền lãi = $A \\cdot r \\cdot n$"
        ],
        "correct": 0,
        "explanation": "Tổng số tiền gốc đã nộp qua $n$ kỳ là $n \\times A$. Do đó tổng tiền lãi thuần thu được bằng tổng giá trị tương lai trừ đi tổng gốc: $FV - nA$."
      }
    ]
  },
  {
    "lessonNum": 6,
    "id": "bai-6",
    "topicNum": 2,
    "topicName": "Chuyên đề 2: Ứng dụng toán học trong tài chính",
    "title": "Bài 6: Bài toán vay vốn trả góp & Bảng phân bổ nợ vay",
    "tag": "Toán tài chính",
    "objectives": [
      "Hiểu rõ bản chất tài chính của hình thức vay trả góp (Amortized Loan): cân bằng giữa số tiền vay ban đầu và giá trị hiện tại của chuỗi trả nợ định kỳ.",
      "Làm chủ công thức tính số tiền phải trả đều đặn mỗi tháng: $A = V_0 \\cdot \\frac{r}{1 - (1 + r)^{-n}}$.",
      "Lập được Bảng phân bổ nợ vay (Amortization Schedule): phân tách mỗi khoản thanh toán $A$ thành phần tiền lãi phát sinh $I_k$ và phần trừ nợ gốc $P_k$.",
      "Phân tích tác động của thời hạn vay và lãi suất đến tổng tiền lãi phải trả khi mua nhà trả góp hoặc mua ô tô."
    ],
    "summary": "\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 my-4\">\n        <div class=\"p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800\">\n          <h4 class=\"font-bold text-teal-900 dark:text-teal-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-hand-holding-dollar\"></i> Công thức trả góp niên kim\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Nguyên tắc cân bằng tài chính:</strong> Khoản tiền vay $V_0$ tại thời điểm $t = 0$ phải bằng tổng giá trị hiện tại ($PV$) của $n$ khoản trả góp định kỳ $A$:\n              $$V_0 = A \\cdot \\frac{1 - (1 + r)^{-n}}{r}$$\n            </li>\n            <li><strong>Số tiền trả cố định mỗi kỳ ($A$):</strong>\n              $$A = V_0 \\cdot \\frac{r}{1 - (1 + r)^{-n}} = V_0 \\cdot \\frac{r(1 + r)^n}{(1 + r)^n - 1}$$\n            </li>\n            <li><strong>Tổng số tiền đã trả:</strong> $n \\times A$. Tổng lãi phải trả cho ngân hàng: $n \\times A - V_0$.</li>\n          </ul>\n        </div>\n        <div class=\"p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800\">\n          <h4 class=\"font-bold text-emerald-900 dark:text-emerald-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-table\"></i> Bảng phân bổ nợ vay (Amortization)\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li>Tại mỗi kỳ $k$:\n              <br>- Tiền lãi kỳ $k$: $I_k = \\text{Dư nợ đầu kỳ } k \\times r$.\n              <br>- Tiền gốc kỳ $k$: $P_k = A - I_k$.\n              <br>- Dư nợ cuối kỳ $k$: $\\text{Dư nợ đầu} - P_k$.\n            </li>\n            <li><strong>Đặc điểm diễn biến:</strong> Trong những kỳ đầu tiên, tiền lãi chiếm tỷ trọng rất lớn, tiền trừ gốc rất ít; càng về các kỳ cuối, tiền lãi giảm dần và tiền trả gốc tăng nhanh.</li>\n          </ul>\n        </div>\n      </div>\n    ",
    "steps": [
      {
        "title": "Bước 1: Quy đổi lãi suất kỳ hạn và số kỳ thanh toán",
        "content": "Chuyển lãi suất năm sang lãi suất tháng $r = \\frac{r_{\\text{năm}}}{12}$ và tính tổng số tháng vay $n$ (ví dụ: vay 20 năm thì $n = 240$ tháng)."
      },
      {
        "title": "Bước 2: Tính số tiền trả cố định hàng tháng A",
        "content": "Sử dụng công thức $A = V_0 \\cdot \\frac{r}{1 - (1 + r)^{-n}}$. Dùng máy tính cầm tay tính toán chính xác giá trị $A$."
      },
      {
        "title": "Bước 3: Lập bảng tính dư nợ theo từng tháng",
        "content": "Tính tiền lãi tháng đầu tiên $I_1 = V_0 \\cdot r$, tiền gốc tháng đầu $P_1 = A - I_1$, dư nợ còn lại sau tháng đầu $V_1 = V_0 - P_1$. Lặp lại quy trình cho các tháng kế tiếp."
      }
    ],
    "practice": "Gia đình anh Hùng vay ngân hàng 600 triệu đồng để mua nhà với thời hạn 5 năm (60 tháng), lãi suất cố định 9%/năm (tức 0.75%/tháng) tính theo dư nợ giảm dần, trả góp đều đặn hàng tháng. \n1) Tính số tiền anh Hùng phải trả cố định mỗi tháng. \n2) Lập bảng phân tích nợ cho 3 tháng đầu tiên và tính tổng tiền lãi phải trả sau 5 năm.",
    "quizzes": [
      {
        "question": "Một người vay ngân hàng 100 triệu đồng với lãi suất 1%/tháng, trả góp đều đặn trong 12 tháng. Số tiền người đó phải trả mỗi tháng A được tính theo công thức nào?",
        "options": [
          "$A = 100 \\cdot \\frac{0.01}{1 - (1 + 0.01)^{-12}}$",
          "$A = \\frac{100}{12} + 100 \\cdot 0.01$",
          "$A = 100 \\cdot \\frac{(1 + 0.01)^{12} - 1}{0.01}$",
          "$A = \\frac{100 \\cdot (1 + 0.01)}{12}$"
        ],
        "correct": 0,
        "explanation": "Công thức chuẩn của trả góp niên kim theo dư nợ giảm dần là $A = V_0 \\cdot \\frac{r}{1 - (1 + r)^{-n}}$, với $V_0 = 100, r = 0.01, n = 12$."
      },
      {
        "question": "Trong phương thức vay trả góp niên kim cố định đều đặn hàng tháng (Amortization), nhận định nào sau đây là ĐÚNG về diễn biến của tiền lãi và tiền gốc?",
        "options": [
          "Tiền lãi hàng tháng giảm dần, tiền trả nợ gốc hàng tháng tăng dần",
          "Tiền lãi hàng tháng tăng dần, tiền trả nợ gốc giảm dần",
          "Cả tiền lãi và tiền gốc đều giữ nguyên không đổi mỗi tháng",
          "Tiền lãi giữ nguyên, chỉ có tiền gốc thay đổi"
        ],
        "correct": 0,
        "explanation": "Vì dư nợ giảm dần qua từng tháng nên tiền lãi tính trên dư nợ ($I_k = \\text{Dư nợ} \\times r$) sẽ giảm dần. Do tổng số tiền trả $A$ cố định, nên phần trả nợ gốc $P_k = A - I_k$ sẽ ngày càng tăng lên."
      },
      {
        "question": "Nếu vay 500 triệu đồng trong 10 năm với mức trả cố định 6.5 triệu đồng/tháng, tổng số tiền lãi người vay phải trả cho ngân hàng trong toàn bộ 10 năm là:",
        "options": [
          "280 triệu đồng",
          "500 triệu đồng",
          "780 triệu đồng",
          "180 triệu đồng"
        ],
        "correct": 0,
        "explanation": "10 năm = 120 tháng. Tổng số tiền đã thanh toán cho ngân hàng là $120 \\times 6.5 = 780$ triệu đồng. Tiền lãi thuần phải trả là $780 - 500 = 280$ triệu đồng."
      },
      {
        "question": "Tại kỳ thanh toán đầu tiên của khoản vay vốn V0 với lãi suất mỗi kỳ là r, số tiền lãi phải nộp bằng:",
        "options": [
          "$I_1 = V_0 \\cdot r$",
          "$I_1 = A$",
          "$I_1 = \\frac{V_0}{n}$",
          "$I_1 = 0$"
        ],
        "correct": 0,
        "explanation": "Kỳ đầu tiên chưa có khoản gốc nào được trả nên toàn bộ số dư nợ ban đầu là $V_0$. Tiền lãi của kỳ đầu tiên bằng đúng gốc nhân lãi suất: $I_1 = V_0 \\cdot r$."
      }
    ]
  },
  {
    "lessonNum": 7,
    "id": "bai-7",
    "topicNum": 2,
    "topicName": "Chuyên đề 2: Ứng dụng toán học trong tài chính",
    "title": "Bài 7: Đánh giá dự án đầu tư tài chính với NPV và IRR",
    "tag": "Phân tích đầu tư",
    "objectives": [
      "Hiểu rõ khái niệm dòng tiền ròng của dự án đầu tư (Net Cash Flow - NCF) qua các năm $CF_0, CF_1, \\dots, CF_n$.",
      "Làm chủ khái niệm và công thức tính Giá trị hiện tại ròng (Net Present Value - NPV): $NPV = \\sum_{t=0}^n \\frac{CF_t}{(1 + r)^t}$.",
      "Nắm vững quy tắc ra quyết định đầu tư: chấp nhận dự án khi $NPV > 0$, loại bỏ khi $NPV < 0$.",
      "Hiểu rõ Tỷ suất hoàn vốn nội bộ (Internal Rate of Return - IRR) là nghiệm lãi suất làm cho $NPV = 0$, biết so sánh IRR với chi phí sử dụng vốn để chọn dự án tối ưu."
    ],
    "summary": "\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 my-4\">\n        <div class=\"p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800\">\n          <h4 class=\"font-bold text-teal-900 dark:text-teal-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-scale-balanced\"></i> Giá trị hiện tại thuần (NPV)\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Định nghĩa:</strong> Là chênh lệch giữa tổng giá trị hiện tại của các dòng tiền thu về trong tương lai và vốn đầu tư ban đầu ($CF_0 < 0$):\n              $$NPV = -I_0 + \\sum_{t=1}^n \\frac{CF_t}{(1 + r)^t}$$\n            </li>\n            <li><strong>Quy tắc quyết định:</strong>\n              <br>- $NPV > 0$: Dự án sinh lời cao hơn chi phí vốn, <strong>chấp nhận đầu tư</strong>.\n              <br>- $NPV < 0$: Dự án gây thiệt hại tài chính, <strong>bác bỏ dự án</strong>.\n              <br>- $NPV = 0$: Điểm hòa vốn tài chính.\n            </li>\n          </ul>\n        </div>\n        <div class=\"p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800\">\n          <h4 class=\"font-bold text-emerald-900 dark:text-emerald-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-percent\"></i> Tỷ suất hoàn vốn nội bộ (IRR)\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Định nghĩa:</strong> Là mức tỷ suất chiết khấu $r^*$ làm cho giá trị hiện tại thuần $NPV$ của dự án đúng bằng 0:\n              $$-I_0 + \\sum_{t=1}^n \\frac{CF_t}{(1 + IRR)^t} = 0$$\n            </li>\n            <li><strong>Quy tắc so sánh:</strong> Nếu $IRR > r$ (chi phí sử dụng vốn / lãi suất vay) thì dự án đáng giá để đầu tư.</li>\n            <li><strong>Ý nghĩa:</strong> Thể hiện tỷ suất sinh lời nội tại tối đa mà dự án có thể gánh chịu được lãi vay mà không bị lỗ.</li>\n          </ul>\n        </div>\n      </div>\n    ",
    "steps": [
      {
        "title": "Bước 1: Lập bảng dự phóng dòng tiền thuần CF_t",
        "content": "Ghi nhận vốn đầu tư ban đầu $CF_0 = -I_0$ tại $t = 0$. Ước tính doanh thu trừ chi phí vận hành để có dòng tiền thuần hàng năm $CF_1, CF_2, \\dots, CF_n$."
      },
      {
        "title": "Bước 2: Chiết khấu dòng tiền và tính toán chỉ số NPV",
        "content": "Với chi phí sử dụng vốn $r$ cho trước, tính hệ số chiết khấu $\\frac{1}{(1 + r)^t}$ cho từng năm. Cộng dồn tất cả các giá trị hiện tại để tìm $NPV$."
      },
      {
        "title": "Bước 3: Tìm IRR bằng phương pháp nội suy hoặc máy tính cầm tay",
        "content": "Sử dụng tính năng Table / Solver trên máy tính cầm tay fx-580VN X để tìm nghiệm phương trình $NPV(r) = 0$. So sánh $IRR$ với lãi suất kỳ vọng để kết luận."
      }
    ],
    "practice": "Một công ty công nghệ xem xét đầu tư một dây chuyền tự động hóa với vốn đầu tư ban đầu 500 triệu đồng. Dự án hoạt động trong 3 năm và dự kiến mang lại dòng tiền thuần cuối mỗi năm lần lượt là: Năm 1: 200 triệu; Năm 2: 250 triệu; Năm 3: 300 triệu. Chi phí sử dụng vốn của công ty là 10%/năm. \n1) Hãy tính chỉ số NPV của dự án và cho biết công ty có nên đầu tư không? \n2) Ước tính tỷ suất hoàn vốn nội bộ IRR của dự án.",
    "quizzes": [
      {
        "question": "Quy tắc quyết định đầu tư theo phương pháp Giá trị hiện tại ròng (NPV) là:",
        "options": [
          "Chấp nhận dự án khi $NPV > 0$, loại bỏ khi $NPV < 0$",
          "Chấp nhận dự án khi $NPV < 0$",
          "Chấp nhận dự án khi $NPV = 0$",
          "Chỉ đầu tư khi $NPV$ lớn hơn tổng vốn đầu tư ban đầu"
        ],
        "correct": 0,
        "explanation": "$NPV > 0$ có nghĩa là giá trị hiện tại của dòng tiền thu về lớn hơn vốn bỏ ra sau khi đã bù đắp chi phí vốn cơ hội, mang lại giá trị gia tăng cho chủ đầu tư."
      },
      {
        "question": "Tỷ suất hoàn vốn nội bộ (IRR) của một dự án đầu tư được định nghĩa là mức tỷ suất chiết khấu làm cho:",
        "options": [
          "Giá trị hiện tại ròng $NPV = 0$",
          "Tổng doanh thu bằng 0",
          "Lợi nhuận gộp đạt cực đại",
          "$NPV$ đạt giá trị lớn nhất"
        ],
        "correct": 0,
        "explanation": "IRR (Internal Rate of Return) theo định nghĩa toán học là nghiệm của phương trình $NPV(IRR) = 0$, phản ánh tỷ suất sinh lời thực tế bên trong của dự án."
      },
      {
        "question": "Một dự án đầu tư ban đầu 100 triệu đồng ($CF_0 = -100$), năm thứ nhất thu về 121 triệu đồng ($CF_1 = 121$). Với chi phí vốn 10%/năm, giá trị hiện tại ròng NPV của dự án là:",
        "options": [
          "+10 triệu đồng",
          "+21 triệu đồng",
          "-10 triệu đồng",
          "0 triệu đồng"
        ],
        "correct": 0,
        "explanation": "$NPV = -100 + \\frac{121}{1 + 0.10} = -100 + 110 = +10$ triệu đồng. Do $NPV > 0$ nên dự án rất hiệu quả."
      },
      {
        "question": "Nếu tỷ suất hoàn vốn nội bộ của dự án A là $IRR = 15\\%$, trong khi lãi suất vay ngân hàng là $12\\%$, thì nhà đầu tư nên quyết định thế nào?",
        "options": [
          "Nên chấp nhận đầu tư vì $IRR > 12\\%$",
          "Nên từ chối vì $IRR$ phải đạt tối thiểu $20\\%$",
          "Không đủ thông tin để kết luận",
          "Dự án chắc chắn bị lỗ"
        ],
        "correct": 0,
        "explanation": "Khi $IRR = 15\\% > 12\\%$ (chi phí vay vốn), dự án sinh lời cao hơn lãi suất phải trả cho ngân hàng, tạo ra lợi nhuận thặng dư dương cho nhà đầu tư."
      }
    ]
  },
  {
    "lessonNum": 8,
    "id": "bai-8",
    "topicNum": 3,
    "topicName": "Chuyên đề 3: Biến ngẫu nhiên rời rạc & Phân bố xác suất",
    "title": "Bài 8: Khái niệm biến ngẫu nhiên rời rạc & Bảng phân bố xác suất",
    "tag": "Xác suất nâng cao",
    "objectives": [
      "Nắm vững định nghĩa biến ngẫu nhiên (Random Variable) và phân biệt Biến ngẫu nhiên rời rạc với Biến ngẫu nhiên liên tục.",
      "Lập Bảng phân bố xác suất của biến ngẫu nhiên rời rạc: các giá trị $x_1, x_2, \\dots, x_n$ và xác suất tương ứng $p_i = P(X = x_i)$.",
      "Nắm vững điều kiện chuẩn hóa bắt buộc của phân bố xác suất: $p_i \\ge 0$ và $\\sum_{i=1}^n p_i = 1$.",
      "Làm quen với Hàm phân bố xác suất tích lũy $F(x) = P(X \\le x)$ và ứng dụng tính xác suất trong các khoảng giá trị."
    ],
    "summary": "\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 my-4\">\n        <div class=\"p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800\">\n          <h4 class=\"font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-dice\"></i> Biến ngẫu nhiên rời rạc\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Định nghĩa:</strong> Biến ngẫu nhiên $X$ là một đại lượng nhận giá trị bằng số tùy thuộc vào kết quả của phép thử ngẫu nhiên.</li>\n            <li><strong>Rời rạc:</strong> Tập hợp các giá trị có thể nhận của $X$ là hữu hạn hoặc vô hạn đếm được (ví dụ: số chấm xuất hiện khi gieo xúc xắc, số phế phẩm trong lô hàng).</li>\n            <li><strong>Khác với liên tục:</strong> Biến liên tục nhận giá trị trên một khoảng thực liên tục (ví dụ: chiều cao, cân nặng, nhiệt độ).</li>\n          </ul>\n        </div>\n        <div class=\"p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800\">\n          <h4 class=\"font-bold text-teal-900 dark:text-teal-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-table-list\"></i> Bảng phân bố xác suất\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Cấu trúc bảng:</strong>\n              <br>- Hàng 1: Các giá trị có thể có: $x_1 < x_2 < \\dots < x_n$.\n              <br>- Hàng 2: Xác suất tương ứng: $p_1, p_2, \\dots, p_n$ với $p_i = P(X = x_i)$.\n            </li>\n            <li><strong>Điều kiện chuẩn hóa:</strong>\n              $$0 \\le p_i \\le 1 \\quad \\text{và} \\quad \\sum_{i=1}^n p_i = p_1 + p_2 + \\dots + p_n = 1$$\n            </li>\n            <li><strong>Hàm tích lũy:</strong> $F(x) = P(X \\le x) = \\sum_{x_i \\le x} p_i$.</li>\n          </ul>\n        </div>\n      </div>\n    ",
    "steps": [
      {
        "title": "Bước 1: Xác định không gian mẫu và tập giá trị của X",
        "content": "Mô tả không gian mẫu $\\Omega$ của phép thử. Liệt kê tất cả các giá trị số thực mà biến ngẫu nhiên $X$ có thể nhận: $X(\\Omega) = \\{x_1, x_2, \\dots, x_n\\}$."
      },
      {
        "title": "Bước 2: Tính xác suất tương ứng cho từng giá trị",
        "content": "Dùng các quy tắc đếm tổ hợp hoặc xác suất cổ điển để tính $p_i = P(X = x_i)$ với từng giá trị $x_i$."
      },
      {
        "title": "Bước 3: Lập bảng phân bố và kiểm tra điều kiện tổng xác suất",
        "content": "Kẻ bảng phân bố hai hàng. Cộng tổng các xác suất $\\sum p_i$; nếu tổng đúng bằng 1 thì bảng phân bố chính xác hoàn toàn."
      }
    ],
    "practice": "Gieo đồng thời 3 đồng xu cân đối đồng chất. Gọi $X$ là số đồng xu xuất hiện mặt ngửa (N). \n1) Tìm tập các giá trị có thể có của biến ngẫu nhiên $X$. \n2) Lập bảng phân bố xác suất của $X$. \n3) Tính xác suất để có ít nhất 2 đồng xu ngửa $P(X \\ge 2)$.",
    "quizzes": [
      {
        "question": "Biến ngẫu nhiên nào sau đây là biến ngẫu nhiên RỜI RẠC?",
        "options": [
          "Số lượng xe ô tô đi qua một trạm thu phí trong vòng 1 giờ",
          "Thời gian cần thiết để một học sinh hoàn thành bài thi môn Toán",
          "Chiều cao của các vận động viên bóng rổ",
          "Nhiệt độ ngoài trời tại Hà Nội lúc 12 giờ trưa"
        ],
        "correct": 0,
        "explanation": "Số lượng xe ô tô nhận các giá trị nguyên đếm được: 0, 1, 2, 3... nên là biến ngẫu nhiên rời rạc. Thời gian, chiều cao, nhiệt độ nhận các giá trị liên tục trong một khoảng số thực."
      },
      {
        "question": "Biến ngẫu nhiên X có bảng phân bố xác suất: P(X=1) = 0.2; P(X=2) = 0.5; P(X=3) = m. Giá trị của m phải bằng bao nhiêu?",
        "options": [
          "0.3",
          "0.7",
          "0.5",
          "1.0"
        ],
        "correct": 0,
        "explanation": "Tổng xác suất của toàn bộ các biến cố trong bảng phân bố phải bằng 1: $0.2 + 0.5 + m = 1 \\Rightarrow m = 1 - 0.7 = 0.3$."
      },
      {
        "question": "Gieo một con xúc xắc 6 mặt cân đối. Gọi X là số chấm xuất hiện. Xác suất P(X > 4) bằng:",
        "options": [
          "$\\frac{1}{3}$",
          "$\\frac{1}{2}$",
          "$\\frac{2}{3}$",
          "$\\frac{1}{6}$"
        ],
        "correct": 0,
        "explanation": "Biến cố $X > 4$ gồm hai kết quả: $X = 5$ hoặc $X = 6$. Xác suất là $P(X = 5) + P(X = 6) = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3}$."
      },
      {
        "question": "Một hộp có 3 quả bóng đỏ và 2 quả bóng xanh. Lấy ngẫu nhiên 2 quả bóng. Gọi X là số quả bóng đỏ lấy được. Tập giá trị của X là:",
        "options": [
          "$\\{0, 1, 2\\}$",
          "$\\{1, 2\\}$",
          "$\\{1, 2, 3\\}$",
          "$\\{0, 1, 2, 3\\}$"
        ],
        "correct": 0,
        "explanation": "Có thể lấy được 0 bóng đỏ (cả 2 bóng xanh), 1 bóng đỏ (1 đỏ 1 xanh) hoặc 2 bóng đỏ. Do chỉ lấy 2 quả bóng nên không thể có 3 bóng đỏ. Vậy tập giá trị là $\\{0, 1, 2\\}$."
      }
    ]
  },
  {
    "lessonNum": 9,
    "id": "bai-9",
    "topicNum": 3,
    "topicName": "Chuyên đề 3: Biến ngẫu nhiên rời rạc & Phân bố xác suất",
    "title": "Bài 9: Các số đặc trưng: Kỳ vọng, phương sai và độ lệch chuẩn",
    "tag": "Xác suất nâng cao",
    "objectives": [
      "Nắm vững định nghĩa và ý nghĩa thực tế của Kỳ vọng toán học $E(X)$: giá trị trung bình theo trọng số xác suất.",
      "Làm chủ công thức tính Kỳ vọng: $E(X) = \\mu = \\sum_{i=1}^n x_i p_i$ và các tính chất: $E(c) = c, E(aX + b) = aE(X) + b$.",
      "Nắm vững công thức tính Phương sai: $V(X) = \\sigma^2 = \\sum x_i^2 p_i - [E(X)]^2$ và Độ lệch chuẩn $\\sigma(X) = \\sqrt{V(X)}$.",
      "Hiểu rõ phương sai và độ lệch chuẩn đo lường mức độ biến động phân tán, rủi ro trong đầu tư tài chính và kiểm soát chất lượng."
    ],
    "summary": "\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 my-4\">\n        <div class=\"p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800\">\n          <h4 class=\"font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-bullseye\"></i> Kỳ vọng toán học E(X)\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Công thức:</strong>\n              $$E(X) = x_1 p_1 + x_2 p_2 + \\dots + x_n p_n = \\sum_{i=1}^n x_i p_i$$\n            </li>\n            <li><strong>Ý nghĩa:</strong> Là giá trị trung bình lý thuyết khi lặp lại phép thử vô số lần độc lập. Trong kinh doanh, là lợi nhuận kỳ vọng của dự án.</li>\n            <li><strong>Tính chất tuyến tính:</strong> Với hằng số $a, b$:\n              $$E(aX + b) = aE(X) + b \\quad \\text{và} \\quad E(X + Y) = E(X) + E(Y)$$\n            </li>\n          </ul>\n        </div>\n        <div class=\"p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800\">\n          <h4 class=\"font-bold text-teal-900 dark:text-teal-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-chart-simple\"></i> Phương sai V(X) & Độ lệch chuẩn\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Phương sai (Variance):</strong> Đo mức độ phân tán của các giá trị quanh giá trị kỳ vọng:\n              $$V(X) = \\sum_{i=1}^n (x_i - \\mu)^2 p_i = \\sum_{i=1}^n x_i^2 p_i - [E(X)]^2$$\n            </li>\n            <li><strong>Tính chất:</strong> $V(c) = 0$ và $V(aX + b) = a^2 V(X)$.</li>\n            <li><strong>Độ lệch chuẩn:</strong> $\\sigma(X) = \\sqrt{V(X)}$ (có cùng đơn vị đo với biến ngẫu nhiên $X$). $\\sigma$ càng lớn thể hiện mức độ rủi ro, bấp bênh càng cao.</li>\n          </ul>\n        </div>\n      </div>\n    ",
    "steps": [
      {
        "title": "Bước 1: Lập bảng phân bố xác suất hoàn chỉnh",
        "content": "Liệt kê các giá trị $x_i$ và xác suất $p_i$. Kiểm tra điều kiện $\\sum p_i = 1$."
      },
      {
        "title": "Bước 2: Tính kỳ vọng toán học E(X)",
        "content": "Nhân từng giá trị $x_i$ với xác suất tương ứng $p_i$ rồi cộng lại: $E(X) = \\sum x_i p_i$."
      },
      {
        "title": "Bước 3: Tính phương sai V(X) và độ lệch chuẩn",
        "content": "Tính $\\sum x_i^2 p_i$. Sau đó áp dụng công thức $V(X) = \\sum x_i^2 p_i - [E(X)]^2$. Lấy căn bậc hai để được độ lệch chuẩn $\\sigma(X) = \\sqrt{V(X)}$."
      }
    ],
    "practice": "Một nhà đầu tư xem xét hai phương án đầu tư tài chính A và B với tỷ suất sinh lời (%) được mô tả qua bảng phân bố xác suất sau: \n- Dự án A: Lời 20% (xác suất 0.5); Lời 10% (xác suất 0.5). \n- Dự án B: Lời 40% (xác suất 0.3); Lời 10% (xác suất 0.4); Lỗ -10% (xác suất 0.3). \nHãy tính tỷ suất sinh lời kỳ vọng và độ lệch chuẩn của từng dự án để tư vấn cho nhà đầu tư thích an toàn.",
    "quizzes": [
      {
        "question": "Biến ngẫu nhiên X nhận giá trị 0 với xác suất 0.4 và nhận giá trị 10 với xác suất 0.6. Kỳ vọng E(X) bằng:",
        "options": [
          "6",
          "5",
          "4",
          "10"
        ],
        "correct": 0,
        "explanation": "Áp dụng công thức tính kỳ vọng: $E(X) = 0 \\times 0.4 + 10 \\times 0.6 = 0 + 6 = 6$."
      },
      {
        "question": "Nếu biến ngẫu nhiên X có kỳ vọng $E(X) = 4$ và phương sai $V(X) = 2$, thì phương sai của biến ngẫu nhiên $Y = 3X + 5$ là bao nhiêu?",
        "options": [
          "18",
          "11",
          "6",
          "23"
        ],
        "correct": 0,
        "explanation": "Áp dụng tính chất phương sai: $V(aX + b) = a^2 V(X)$. Ở đây $a = 3$, do đó $V(3X + 5) = 3^2 \\times V(X) = 9 \\times 2 = 18$."
      },
      {
        "question": "Trong quản lý tài chính và đầu tư chứng khoán, chỉ số nào thường được sử dụng để định lượng MỨC ĐỘ RỦI RO của một danh mục đầu tư?",
        "options": [
          "Độ lệch chuẩn (hoặc phương sai) của tỷ suất sinh lời",
          "Kỳ vọng tỷ suất sinh lời",
          "Số lượng cổ phiếu nắm giữ",
          "Giá trị danh nghĩa của cổ phiếu"
        ],
        "correct": 0,
        "explanation": "Độ lệch chuẩn $\\sigma$ đo lường biên độ dao động, trồi sụt của tỷ suất lợi nhuận quanh mức trung bình. Độ lệch chuẩn càng cao, sự bấp bênh và rủi ro thua lỗ càng lớn."
      },
      {
        "question": "Biến ngẫu nhiên X có $E(X) = 5$ và $E(X^2) = 29$. Phương sai $V(X)$ bằng bao nhiêu?",
        "options": [
          "4",
          "24",
          "14",
          "2"
        ],
        "correct": 0,
        "explanation": "Áp dụng công thức tính nhanh phương sai: $V(X) = E(X^2) - [E(X)]^2 = 29 - 5^2 = 29 - 25 = 4$."
      }
    ]
  },
  {
    "lessonNum": 10,
    "id": "bai-10",
    "topicNum": 3,
    "topicName": "Chuyên đề 3: Biến ngẫu nhiên rời rạc & Phân bố xác suất",
    "title": "Bài 10: Phân bố nhị thức và công thức Bernoulli",
    "tag": "Xác suất nâng cao",
    "objectives": [
      "Nắm vững định nghĩa phép thử Bernoulli: phép thử chỉ có đúng 2 kết cục đối lập (Thành công $S$ với xác suất $p$, Thất bại $F$ với xác suất $q = 1 - p$).",
      "Làm chủ mô hình phân bố nhị thức $\\mathcal{B}(n, p)$: thực hiện $n$ phép thử Bernoulli độc lập, gọi $X$ là số lần thành công.",
      "Thực hiện thành thạo Công thức Bernoulli tính xác suất có đúng $k$ lần thành công: $P(X = k) = C_n^k p^k (1 - p)^{n - k}$.",
      "Ghi nhớ và vận dụng các công thức số đặc trưng: $E(X) = np$, $V(X) = np(1 - p)$ và $\\sigma(X) = \\sqrt{np(1 - p)}$."
    ],
    "summary": "\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 my-4\">\n        <div class=\"p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800\">\n          <h4 class=\"font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-atom\"></i> Phép thử Bernoulli & Phân bố nhị thức\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Điều kiện dãy phép thử Bernoulli:</strong>\n              <br>1. Có $n$ lần thử lặp lại.\n              <br>2. Mỗi lần thử chỉ có 2 kết quả: Thành công ($p$) hoặc Thất bại ($q = 1 - p$).\n              <br>3. Xác suất $p$ không đổi qua tất cả các lần thử.\n              <br>4. Các lần thử hoàn toàn độc lập với nhau.\n            </li>\n            <li><strong>Biến ngẫu nhiên nhị thức:</strong> Kí hiệu $X \\sim \\mathcal{B}(n, p)$, nhận các giá trị $k \\in \\{0, 1, 2, \\dots, n\\}$.</li>\n          </ul>\n        </div>\n        <div class=\"p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800\">\n          <h4 class=\"font-bold text-teal-900 dark:text-teal-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-square-root-variable\"></i> Công thức Bernoulli & Số đặc trưng\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Công thức Bernoulli:</strong>\n              $$P(X = k) = C_n^k \\cdot p^k \\cdot (1 - p)^{n - k} \\quad (k = 0, 1, \\dots, n)$$\n            </li>\n            <li><strong>Kỳ vọng toán học:</strong> $E(X) = n \\cdot p$.</li>\n            <li><strong>Phương sai:</strong> $V(X) = n \\cdot p \\cdot (1 - p)$.</li>\n            <li><strong>Độ lệch chuẩn:</strong> $\\sigma(X) = \\sqrt{n \\cdot p \\cdot (1 - p)}$.</li>\n          </ul>\n        </div>\n      </div>\n    ",
    "steps": [
      {
        "title": "Bước 1: Nhận diện mô hình phân bố nhị thức",
        "content": "Kiểm tra 4 điều kiện của dãy phép thử Bernoulli. Xác định số lần thử $n$ và xác suất thành công $p$ trong mỗi lần thử."
      },
      {
        "title": "Bước 2: Xác định biến cố cần tính xác suất",
        "content": "Đọc kỹ yêu cầu bài toán: đúng $k$ lần ($X = k$), ít nhất $k$ lần ($X \\ge k$) hay nhiều nhất $k$ lần ($X \\le k$). Sử dụng biến cố đối nếu số trường hợp quá nhiều."
      },
      {
        "title": "Bước 3: Áp dụng công thức và tính toán",
        "content": "Bấm tổ hợp $C_n^k$, lũy thừa $p^k$ và $(1 - p)^{n - k}$ trên máy tính cầm tay (sử dụng chức năng phân bố nhị thức Binomial PD / CD trên Casio fx-580VN X)."
      }
    ],
    "practice": "Tỷ lệ một loại hạt giống nảy mầm là $p = 0.8$. Người ta đem gieo ngẫu nhiên 10 hạt giống một cách độc lập. Gọi $X$ là số hạt nảy mầm. \n1) Biến ngẫu nhiên $X$ tuân theo phân bố gì? Tính kỳ vọng và độ lệch chuẩn của $X$. \n2) Tính xác suất để có đúng 8 hạt nảy mầm. \n3) Tính xác suất để có ít nhất 9 hạt nảy mầm.",
    "quizzes": [
      {
        "question": "Gieo một đồng xu cân đối đồng chất 5 lần liên tiếp. Xác suất để có đúng 3 lần xuất hiện mặt ngửa là:",
        "options": [
          "$C_5^3 \\cdot (0.5)^3 \\cdot (0.5)^2 = \\frac{10}{32} = \\frac{5}{16}$",
          "$\\frac{3}{5}$",
          "$\\frac{1}{32}$",
          "$\\frac{3}{32}$"
        ],
        "correct": 0,
        "explanation": "Áp dụng công thức Bernoulli với $n = 5, k = 3, p = 0.5$: $P(X = 3) = C_5^3 (0.5)^3 (0.5)^2 = 10 \\times \\frac{1}{32} = \\frac{5}{16}$."
      },
      {
        "question": "Biến ngẫu nhiên $X$ có phân bố nhị thức $\\mathcal{B}(100; 0.2)$. Kỳ vọng $E(X)$ và phương sai $V(X)$ của $X$ lần lượt là:",
        "options": [
          "$E(X) = 20$ và $V(X) = 16$",
          "$E(X) = 20$ và $V(X) = 4$",
          "$E(X) = 80$ và $V(X) = 16$",
          "$E(X) = 20$ và $V(X) = 20$"
        ],
        "correct": 0,
        "explanation": "$E(X) = np = 100 \\times 0.2 = 20$. Phương sai $V(X) = np(1 - p) = 100 \\times 0.2 \\times 0.8 = 16$."
      },
      {
        "question": "Một bài thi trắc nghiệm gồm 10 câu hỏi, mỗi câu có 4 phương án lựa chọn và chỉ có 1 phương án đúng. Một thí sinh chọn hoàn toàn ngẫu nhiên. Số câu trả lời đúng kỳ vọng của thí sinh đó là:",
        "options": [
          "2.5 câu",
          "5 câu",
          "1 câu",
          "4 câu"
        ],
        "correct": 0,
        "explanation": "Mỗi câu xác suất chọn đúng ngẫu nhiên là $p = \\frac{1}{4} = 0.25$. Với $n = 10$, số câu đúng kỳ vọng là $E(X) = np = 10 \\times 0.25 = 2.5$ câu."
      },
      {
        "question": "Đại lượng nào sau đây KHÔNG THỂ mô hình hóa bằng phân bố nhị thức?",
        "options": [
          "Thời gian chờ xe buýt đến bến",
          "Số linh kiện điện tử bị lỗi trong một lô kiểm tra gồm 50 linh kiện",
          "Số bệnh nhân bình phục sau khi dùng thuốc thử nghiệm trên 30 người",
          "Số lần xuất hiện mặt 6 chấm khi gieo xúc xắc 20 lần"
        ],
        "correct": 0,
        "explanation": "Thời gian chờ xe buýt là biến ngẫu nhiên liên tục. Phân bố nhị thức chỉ áp dụng cho số lần thành công (đếm nguyên) trong dãy các phép thử độc lập có hai kết cục."
      }
    ]
  },
  {
    "lessonNum": 11,
    "id": "bai-11",
    "topicNum": 3,
    "topicName": "Chuyên đề 3: Biến ngẫu nhiên rời rạc & Phân bố xác suất",
    "title": "Bài 11: Ứng dụng biến ngẫu nhiên trong bảo hiểm & quản trị rủi ro",
    "tag": "Định phí bảo hiểm",
    "objectives": [
      "Hiểu rõ nguyên lý định phí bảo hiểm thuần (Pure Premium) dựa trên tổn thất kỳ vọng $E(\\text{Loss})$.",
      "Làm chủ nguyên lý hoạt động của ngành bảo hiểm: Chia sẻ rủi ro (Risk Pooling) và Luật số lớn (Law of Large Numbers).",
      "Ứng dụng phân bố nhị thức tính xác suất phá sản (Ruin Probability) hoặc xác suất số ca bồi thường vượt quá quỹ dự phòng của công ty bảo hiểm.",
      "Làm quen với ứng dụng kiểm tra chất lượng sản phẩm công nghiệp theo giới hạn chất lượng chấp nhận được (AQL - Acceptance Quality Limit)."
    ],
    "summary": "\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 my-4\">\n        <div class=\"p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800\">\n          <h4 class=\"font-bold text-cyan-900 dark:text-cyan-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-shield-halved\"></i> Định phí bảo hiểm thuần\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Nguyên tắc công bằng tài chính:</strong> Phí bảo hiểm thuần mà khách hàng đóng phải bằng tổn thất bồi thường trung bình kỳ vọng:\n              $$\\text{Phí thuần } P_0 = E(X) = \\sum x_i p_i$$\n            </li>\n            <li><strong>Phí bảo hiểm thương mại:</strong> Bao gồm phí thuần cộng thêm chi phí quản lý vận hành, quỹ dự phòng rủi ro và lợi nhuận biên của công ty:\n              $$\\text{Phí gộp} = \\text{Phí thuần } (1 + \\theta)$$\n            </li>\n          </ul>\n        </div>\n        <div class=\"p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800\">\n          <h4 class=\"font-bold text-teal-900 dark:text-teal-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-users\"></i> Luật số lớn & Quản trị rủi ro\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Luật số lớn (Jacob Bernoulli):</strong> Khi số lượng hợp đồng bảo hiểm độc lập $n$ đủ lớn, tỷ lệ bồi thường thực tế sẽ tiến rất gần về xác suất lý thuyết $p$.</li>\n            <li><strong>Hiệu ứng đa dạng hóa:</strong> Độ lệch chuẩn của tỷ lệ bồi thường trung bình $\\frac{\\sigma}{\\sqrt{n}}$ giảm dần về 0 khi $n \\to \\infty$, giúp công ty kiểm soát được rủi ro vỡ quỹ.</li>\n          </ul>\n        </div>\n      </div>\n    ",
    "steps": [
      {
        "title": "Bước 1: Lập mô hình biến ngẫu nhiên số tiền bồi thường",
        "content": "Gọi $X$ là số tiền công ty phải bồi thường cho 1 hợp đồng (nhận giá trị 0 nếu không xảy ra sự kiện bảo hiểm, hoặc nhận số tiền chi trả nếu xảy ra rủi ro)."
      },
      {
        "title": "Bước 2: Tính tổn thất kỳ vọng E(X) trên mỗi hợp đồng",
        "content": "Nhân số tiền chi trả với xác suất xảy ra tai nạn $p$ để tính phí bảo hiểm thuần bình quân."
      },
      {
        "title": "Bước 3: Tính toán quỹ dự phòng cho danh mục n hợp đồng",
        "content": "Sử dụng phân bố nhị thức để tính xác suất số ca rủi ro vượt quá ngưỡng dự phòng an toàn (thường đảm bảo độ tin cậy từ 95% đến 99%)."
      }
    ],
    "practice": "Một công ty bảo hiểm cung cấp gói bảo hiểm tai nạn xe máy thời hạn 1 năm. Nếu xảy ra tai nạn nghiêm trọng, số tiền chi trả bồi thường là 50 triệu đồng. Thống kê cho thấy xác suất xảy ra tai nạn nghiêm trọng đối với một người đi xe máy trong năm là 0.2%. Chi phí quản lý và lợi nhuận dự kiến của công ty bằng 25% phí thuần. \n1) Hãy tính phí bảo hiểm mà mỗi chủ xe cần đóng. \n2) Nếu công ty bán được 10.000 hợp đồng, số tiền bồi thường kỳ vọng của toàn công ty trong năm là bao nhiêu?",
    "quizzes": [
      {
        "question": "Cơ sở toán học quan trọng nhất giúp các công ty bảo hiểm duy trì hoạt động ổn định và giảm thiểu rủi ro tài chính khi quy mô khách hàng tăng cao là:",
        "options": [
          "Luật số lớn (Law of Large Numbers)",
          "Định lý Pythagore",
          "Công thức lãi kép",
          "Bất đẳng thức Cauchy"
        ],
        "correct": 0,
        "explanation": "Luật số lớn khẳng định rằng khi số lượng hợp đồng đủ lớn, mức độ tổn thất trung bình thực tế sẽ tiến sát về giá trị kỳ vọng lý thuyết, loại bỏ tính bất định ngẫu nhiên."
      },
      {
        "question": "Một hợp đồng bảo hiểm xe hơi chi trả 100 triệu đồng nếu có tai nạn (xác suất tai nạn là 1%) và không bồi thường nếu không có tai nạn. Phí bảo hiểm thuần của hợp đồng này là:",
        "options": [
          "1 triệu đồng",
          "10 triệu đồng",
          "100 nghìn đồng",
          "5 triệu đồng"
        ],
        "correct": 0,
        "explanation": "Phí bảo hiểm thuần bằng tổn thất kỳ vọng: $E(X) = 100 \\text{ triệu} \\times 0.01 + 0 \\times 0.99 = 1$ triệu đồng."
      },
      {
        "question": "Nếu một công ty bảo hiểm có 1000 khách hàng độc lập, mỗi người có xác suất gặp sự cố là 0.01. Số vụ bồi thường kỳ vọng là:",
        "options": [
          "10 vụ",
          "1 vụ",
          "100 vụ",
          "50 vụ"
        ],
        "correct": 0,
        "explanation": "Số vụ bồi thường tuân theo phân bố nhị thức $\\mathcal{B}(1000; 0.01)$. Kỳ vọng $E(X) = np = 1000 \\times 0.01 = 10$ vụ."
      },
      {
        "question": "Khi một công ty bảo hiểm gộp chung rủi ro của nhiều cá nhân độc lập (Risk Pooling), độ biến động (đo bằng độ lệch chuẩn của tổn thất trung bình) sẽ:",
        "options": [
          "Giảm dần khi số lượng người tham gia tăng lên",
          "Tăng lên gấp đôi",
          "Không thay đổi",
          "Tiến về vô cùng"
        ],
        "correct": 0,
        "explanation": "Độ lệch chuẩn của trung bình mẫu bằng $\\frac{\\sigma}{\\sqrt{n}}$. Khi $n$ tăng, giá trị này giảm dần về 0, giúp rủi ro tổn thất trung bình trở nên cực kỳ ổn định và dự đoán được."
      }
    ]
  },
  {
    "lessonNum": 12,
    "id": "bai-12",
    "topicNum": 4,
    "topicName": "Chuyên đề 4: Dự án Capstone Mô hình hóa toán học",
    "title": "Bài 12: Dự án Capstone: Mô hình hóa danh mục đầu tư & Quản trị rủi ro",
    "tag": "Dự án liên môn",
    "objectives": [
      "Tổng hợp kiến thức toàn bộ 3 chuyên đề lớp 12: Tối ưu hóa (Quy hoạch tuyến tính, Đạo hàm), Toán tài chính (NPV/IRR, Niên kim) và Xác suất (Biến ngẫu nhiên, Kỳ vọng & Rủi ro).",
      "Xây dựng danh mục đầu tư tài chính tối ưu (Mô hình Modern Portfolio Theory đơn giản hóa): Phân bổ tỷ trọng vốn giữa các tài sản để tối đa hóa lợi nhuận kỳ vọng với rủi ro thấp nhất.",
      "Lập kế hoạch tài chính và thẩm định dòng tiền cho một dự án khởi nghiệp công nghệ (Startup): Tính điểm hòa vốn, phân tích độ nhạy NPV và lập phương án trả nợ vay ngân hàng.",
      "Trình bày báo cáo toán học mô hình hóa tài chính kết hợp biểu đồ trực quan hóa dữ liệu."
    ],
    "summary": "\n      <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 my-4\">\n        <div class=\"p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800\">\n          <h4 class=\"font-bold text-teal-900 dark:text-teal-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-briefcase\"></i> Phần 1: Tối ưu hóa danh mục đầu tư\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Mô hình phân bổ 2 tài sản:</strong> Đầu tư tỷ trọng $w_A$ vào tài sản A và $w_B = 1 - w_A$ vào tài sản B ($0 \\le w_A \\le 1$).</li>\n            <li><strong>Lợi nhuận kỳ vọng của danh mục:</strong> $E(R_P) = w_A E(R_A) + w_B E(R_B)$.</li>\n            <li><strong>Hàm mục tiêu tối ưu:</strong> Tối đa hóa tỷ số Sharpe (tỷ suất sinh lời vượt trội trên mỗi đơn vị rủi ro) bằng cách giải bài toán cực trị đạo hàm bậc nhất theo biến $w_A$.</li>\n          </ul>\n        </div>\n        <div class=\"p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800\">\n          <h4 class=\"font-bold text-emerald-900 dark:text-emerald-300 mb-2 flex items-center gap-2\">\n            <i class=\"fa-solid fa-file-invoice-dollar\"></i> Phần 2: Thẩm định dự án & Trả góp vốn vay\n          </h4>\n          <ul class=\"text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside\">\n            <li><strong>Vay vốn khởi nghiệp:</strong> Vay 1 tỷ đồng thời hạn 5 năm, lập bảng trả nợ định kỳ theo niên kim $A = V_0 \\frac{r}{1 - (1 + r)^{-n}}$.</li>\n            <li><strong>Đánh giá tính khả thi:</strong> Tính $NPV$ và $IRR$ dòng tiền thuần 5 năm của dự án.</li>\n            <li><strong>Phân tích kịch bản xác suất:</strong> Mô hình hóa 3 kịch bản thị trường (Thuận lợi, Bình thường, Khó khăn) bằng biến ngẫu nhiên rời rạc để ước tính xác suất trả nợ an toàn.</li>\n          </ul>\n        </div>\n      </div>\n    ",
    "steps": [
      {
        "title": "Giai đoạn 1: Thu thập số liệu thị trường và thiết lập bài toán",
        "content": "Chọn 2 loại tài sản đầu tư (cổ phiếu tăng trưởng và trái phiếu an toàn). Ước lượng tỷ suất sinh lời kỳ vọng và độ lệch chuẩn của từng tài sản."
      },
      {
        "title": "Giai đoạn 2: Giải bài toán tối ưu phân bổ tỷ trọng bằng đạo hàm",
        "content": "Viết hàm phương sai danh mục theo biến tỷ trọng $w$. Lấy đạo hàm tìm điểm rủi ro nhỏ nhất (Minimum Variance Portfolio)."
      },
      {
        "title": "Giai đoạn 3: Tổng hợp báo cáo tài chính và thẩm định khả thi",
        "content": "Tính toán dòng tiền ròng sau khi trừ khoản trả nợ vay ngân hàng, tính chỉ số NPV và lập biểu đồ trực quan hóa báo cáo trước hội đồng."
      }
    ],
    "practice": "Nhiệm vụ Capstone: Giả sử bạn có 100 triệu đồng vốn nhàn rỗi. \n1) Hãy phân bổ tỷ trọng đầu tư vào 2 kênh: Tiết kiệm ngân hàng (lãi suất chắc chắn 6%/năm) và Quỹ đầu tư cổ phiếu (kỳ vọng 14%/năm, độ lệch chuẩn 12%). \n2) Thiết lập hàm số lợi nhuận và rủi ro theo tỷ trọng $w$. Nếu bạn chấp nhận độ lệch chuẩn rủi ro tối đa là 6%, bạn nên đầu tư bao nhiêu tiền vào quỹ cổ phiếu?",
    "quizzes": [
      {
        "question": "Trong lý thuyết danh mục đầu tư hiện đại của Markowitz, mục tiêu cốt lõi của việc đa dạng hóa tài sản (không bỏ hết trứng vào một giỏ) là:",
        "options": [
          "Giảm thiểu phương sai và độ lệch chuẩn rủi ro của toàn bộ danh mục mà vẫn duy trì mức lợi nhuận kỳ vọng hợp lý",
          "Loại bỏ hoàn toàn mọi loại rủi ro trên thị trường",
          "Làm cho lợi nhuận luôn tăng gấp 10 lần",
          "Để không phải trả thuế cho nhà nước"
        ],
        "correct": 0,
        "explanation": "Bằng cách kết hợp các tài sản có hệ số tương quan thấp hoặc nghịch biến, rủi ro phi hệ thống của các tài sản riêng lẻ sẽ triệt tiêu lẫn nhau, làm giảm độ biến động tổng thể của danh mục."
      },
      {
        "question": "Nếu nhà đầu tư dành 60% vốn cho tài sản A (lợi nhuận kỳ vọng 10%) và 40% vốn cho tài sản B (lợi nhuận kỳ vọng 15%), tỷ suất sinh lời kỳ vọng của danh mục là:",
        "options": [
          "12%",
          "12.5%",
          "11%",
          "13%"
        ],
        "correct": 0,
        "explanation": "$E(R_P) = w_A E(R_A) + w_B E(R_B) = 0.6 \\times 10\\% + 0.4 \\times 15\\% = 6\\% + 6\\% = 12\\%$."
      },
      {
        "question": "Khi thẩm định một dự án khởi nghiệp bằng cả hai chỉ số NPV và IRR, trường hợp nào sau đây khẳng định dự án ĐẠT TIÊU CHUẨN ĐẦU TƯ?",
        "options": [
          "$NPV > 0$ và $IRR > \\text{Chi phí sử dụng vốn}$",
          "$NPV < 0$ và $IRR > 0$",
          "$NPV = 0$ và $IRR = 0$",
          "$NPV > 0$ và $IRR < \\text{Chi phí sử dụng vốn}$"
        ],
        "correct": 0,
        "explanation": "Dự án tốt về mặt tài chính khi giá trị hiện tại ròng $NPV > 0$ và tỷ suất sinh lời nội tại $IRR$ vượt trội hơn chi phí vốn đi vay."
      },
      {
        "question": "Trong bài toán quy hoạch tuyến tính phân bổ vốn đầu tư, nếu có thêm ràng buộc 'tổng số tiền đầu tư không vượt quá 500 triệu đồng' thì bất phương trình biểu diễn là:",
        "options": [
          "$x + y \\le 500$ (với $x, y \\ge 0$ là số tiền đầu tư vào kênh 1 và 2)",
          "$x + y \\ge 500$",
          "$x \\cdot y \\le 500$",
          "$x - y = 500$"
        ],
        "correct": 0,
        "explanation": "Ràng buộc ngân sách tổng vốn đầu tư không vượt quá giới hạn 500 triệu đồng được biểu diễn dưới dạng bất phương trình bậc nhất hai ẩn $x + y \\le 500$ với điều kiện không âm $x \\ge 0, y \\ge 0$."
      }
    ]
  }
];
