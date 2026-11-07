// toan12_data_tap1.js - Data for Tập Một: Chương I, II, III
module.exports = {
  tap1Meta: {
    title: "TẬP MỘT",
    description: "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số, Vectơ và hệ tọa độ Oxyz, Thống kê đo mức độ phân tán của mẫu số liệu ghép nhóm.",
    chapters: ["Chương I", "Chương II", "Chương III"],
    lessonCount: 10
  },
  chuong1: {
    id: "chuong-1",
    code: "CHƯƠNG I",
    title: "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    desc: "Khảo sát tính đơn điệu, cực trị, giá trị lớn nhất - nhỏ nhất, các đường tiệm cận (đứng, ngang, xiên), quy trình vẽ đồ thị và ứng dụng tối ưu hóa thực tiễn.",
    badgeColor: "indigo",
    lessons: [
      {
        id: "bai-1",
        num: "Bài 1",
        title: "Tính đơn điệu và cực trị của hàm số",
        duration: "90 phút",
        objective: "Nắm vững định nghĩa, dấu hiệu đạo hàm của tính đơn điệu và cực trị địa phương; thành thạo quy trình lập bảng biến thiên và biện luận đồ thị f'.",
        theorySections: [
          {
            title: "1. Tính đơn điệu của hàm số",
            badge: "Khái niệm & Định lí",
            points: [
              "Hàm số $y=f(x)$ **đồng biến (tăng)** trên khoảng $K$ nếu với mọi $x_1, x_2 \\in K$ thỏa mãn $x_1 < x_2$ thì $f(x_1) < f(x_2)$. Đồ thị hàm số đồng biến đi lên từ trái sang phải.",
              "Hàm số $y=f(x)$ **nghịch biến (giảm)** trên khoảng $K$ nếu với mọi $x_1, x_2 \\in K$ thỏa mãn $x_1 < x_2$ thì $f(x_1) > f(x_2)$. Đồ thị hàm số nghịch biến đi xuống từ trái sang phải.",
              "**Định lí về dấu đạo hàm:** Giả sử hàm số $f$ có đạo hàm trên khoảng $K$. Nếu $f'(x) > 0$ với mọi $x \\in K$ thì hàm số đồng biến trên $K$; nếu $f'(x) < 0$ với mọi $x \\in K$ thì hàm số nghịch biến trên $K$.",
              "**Mở rộng:** Nếu $f'(x) \\ge 0$ (hoặc $f'(x) \\le 0$) với mọi $x \\in K$ và đẳng thức $f'(x) = 0$ chỉ xảy ra tại một số hữu hạn điểm thì hàm số vẫn đồng biến (hoặc nghịch biến) trên khoảng $K$. Nếu $f'(x) = 0$ với mọi $x \\in K$ thì $f(x)$ là hàm hằng.",
              "**Lưu ý quan trọng:** Tính đơn điệu chỉ xét trên từng khoảng của tập xác định $D$, tuyệt đối không ghép qua các điểm gián đoạn hoặc dùng kí hiệu hợp $\\cup$ khi kết luận khoảng đơn điệu."
            ]
          },
          {
            title: "2. Cực trị của hàm số",
            badge: "Cực đại & Cực tiểu",
            points: [
              "**Định nghĩa:** Cho hàm số $f$ xác định trên tập $D$ và $x_0 \\in D$. $x_0$ là **điểm cực đại** nếu tồn tại khoảng mở $(a; b) \\subset D$ chứa $x_0$ sao cho $f(x) \\le f(x_0)$ với mọi $x \\in (a; b) \\setminus \\{x_0\\}$. $f(x_0)$ gọi là **giá trị cực đại** (hay cực đại của hàm số).",
              "$x_0$ là **điểm cực tiểu** nếu tồn tại khoảng mở $(a; b) \\subset D$ chứa $x_0$ sao cho $f(x) \\ge f(x_0)$ với mọi $x \\in (a; b) \\setminus \\{x_0\\}$. $f(x_0)$ gọi là **giá trị cực tiểu**.",
              "**Điểm cực trị của đồ thị:** Điểm $M(x_0; f(x_0))$ trên mặt phẳng tọa độ gọi là điểm cực trị của đồ thị hàm số.",
              "**Bản chất:** Cực trị là khái niệm có tính chất *địa phương* (trong một lân cận của $x_0$), hoàn toàn khác với GTLN/GTNN trên toàn bộ miền xác định.",
              "**Dấu hiệu I (Quy tắc đổi dấu f'):** Giả sử $f$ liên tục trên $(a; b)$ chứa $x_0$ và có đạo hàm trên $(a; b) \\setminus \\{x_0\\}$.",
              "• Nếu $f'(x)$ đổi dấu từ dương sang âm khi $x$ qua $x_0$ theo chiều tăng thì $x_0$ là điểm cực đại.",
              "• Nếu $f'(x)$ đổi dấu từ âm sang dương khi $x$ qua $x_0$ theo chiều tăng thì $x_0$ là điểm cực tiểu.",
              "• Nếu $f'(x)$ không đổi dấu khi qua $x_0$ thì $x_0$ không phải là điểm cực trị (dù cho $f'(x_0) = 0$ như trường hợp $y = x^3$).",
              "**Chú ý:** Đạo hàm tại điểm cực trị có thể bằng $0$ hoặc không tồn tại (như tại đỉnh nhọn của đồ thị $y = |x|$ tại $x=0$). Miễn là hàm số liên tục và $f'$ đổi dấu thì điểm đó vẫn là cực trị."
            ]
          },
          {
            title: "3. Quy trình 4 bước xét đơn điệu & tìm cực trị",
            badge: "Thuật toán giải",
            points: [
              "**Bước 1 (Tập xác định):** Tìm tập xác định $D$ của hàm số.",
              "**Bước 2 (Tính đạo hàm & tìm điểm tới hạn):** Tính $f'(x)$. Giải phương trình $f'(x) = 0$ và tìm các điểm $x_i \\in D$ mà tại đó $f'(x_i)$ không xác định.",
              "**Bước 3 (Lập bảng biến thiên):** Sắp xếp các điểm tới hạn theo thứ tự tăng dần. Xác định dấu của $f'(x)$ trên từng khoảng và vẽ mũi tên biểu thị chiều biến thiên (đi lên khi $f'>0$, đi xuống khi $f'<0$).",
              "**Bước 4 (Kết luận):** Kết luận rõ ràng các khoảng đồng biến, nghịch biến; chỉ rõ điểm cực đại $x_{CĐ}$, điểm cực tiểu $x_{CT}$, giá trị cực đại $y_{CĐ} = f(x_{CĐ})$, giá trị cực tiểu $y_{CT} = f(x_{CT})$ và tọa độ điểm cực trị trên đồ thị $(x_0; y_0)$."
            ]
          },
          {
            title: "4. Dạng bài vận dụng & Ý nghĩa thực tiễn",
            badge: "Vận dụng nâng cao",
            points: [
              "**Biện luận từ đồ thị đạo hàm $f'(x)$:** Quan sát vị trí đồ thị $f'$ so với trục hoành $Ox$. Khoảng mà đồ thị $f'$ nằm phía trên $Ox$ ($f'>0$) là khoảng đồng biến của $f$; khoảng đồ thị $f'$ nằm phía dưới $Ox$ ($f'<0$) là khoảng nghịch biến. Các giao điểm cắt xuyên qua $Ox$ của $f'$ chính là các điểm cực trị.",
              "**Ý nghĩa trong cơ học chuyển động:** Nếu phương trình tọa độ của chất điểm là $s = s(t)$ thì vận tốc tức thời là $v(t) = s'(t)$. Khi $v(t) > 0$, chất điểm chuyển động theo chiều dương; khi $v(t) < 0$, chất điểm chuyển động theo chiều âm. Thời điểm chất điểm đổi chiều chuyển động xảy ra khi $v(t) = 0$ và $v(t)$ đổi dấu."
            ]
          }
        ],
        quizzes: [
          {
            q: "Hàm số $y = -x^3 + 3x^2 - 4$ đồng biến trên khoảng nào dưới đây?",
            options: ["A. $(0; 2)$", "B. $(-\\infty; 0)$", "C. $(2; +\\infty)$", "D. $(-\\infty; 2)$"],
            correct: 0,
            explain: "Ta có $y' = -3x^2 + 6x = -3x(x - 2)$. Cho $y' = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Hệ số $a = -3 < 0$ nên $y' > 0$ trong khoảng hai nghiệm $(0; 2)$. Do đó hàm số đồng biến trên khoảng $(0; 2)$."
          },
          {
            q: "Hàm số $y = x^4 - 2x^2 + 3$ có bao nhiêu điểm cực trị?",
            options: ["A. 1 điểm", "B. 2 điểm", "C. 3 điểm", "D. 0 điểm"],
            correct: 2,
            explain: "Ta có $y' = 4x^3 - 4x = 4x(x^2 - 1) = 4x(x - 1)(x + 1)$. Phương trình $y' = 0$ có 3 nghiệm đơn phân biệt $x = -1, x = 0, x = 1$. Vì đạo hàm đổi dấu qua cả 3 nghiệm này nên hàm số có đúng 3 điểm cực trị (2 cực tiểu, 1 cực đại)."
          },
          {
            q: "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ có bảng xét dấu đạo hàm $f'(x)$ đổi dấu từ $-$ sang $+$ khi qua $x = 1$, và giữ nguyên dấu $+$ khi qua $x = 3$. Khẳng định nào sau đây đúng?",
            options: [
              "A. $x = 1$ là điểm cực tiểu của hàm số",
              "B. $x = 3$ là điểm cực đại của hàm số",
              "C. $x = 1$ là điểm cực đại của hàm số",
              "D. Hàm số đạt cực trị tại cả $x = 1$ và $x = 3$"
            ],
            correct: 0,
            explain: "Theo Dấu hiệu I, khi $f'(x)$ đổi dấu từ âm sang dương khi đi qua $x = 1$ thì hàm số đạt cực tiểu tại $x = 1$. Tại $x = 3$, đạo hàm không đổi dấu nên $x = 3$ không phải là điểm cực trị."
          }
        ]
      },
      {
        id: "bai-2",
        num: "Bài 2",
        title: "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
        duration: "90 phút",
        objective: "Nắm vững định nghĩa GTLN, GTNN; thành thạo phương pháp tìm min/max trên đoạn $[a;b]$ và trên khoảng; xây dựng mô hình hàm số giải bài toán tối ưu hóa thực tiễn.",
        theorySections: [
          {
            title: "1. Khái niệm GTLN (Max) và GTNN (Min)",
            badge: "Định nghĩa chuẩn",
            points: [
              "Cho hàm số $y = f(x)$ xác định trên tập hợp $D$.",
              "Số $M$ gọi là **giá trị lớn nhất (GTLN)** của $f$ trên $D$, kí hiệu $M = \\max_{D} f(x)$, nếu $f(x) \\le M$ với mọi $x \\in D$ và tồn tại $x_0 \\in D$ sao cho $f(x_0) = M$.",
              "Số $m$ gọi là **giá trị nhỏ nhất (GTNN)** của $f$ trên $D$, kí hiệu $m = \\min_{D} f(x)$, nếu $f(x) \\ge m$ với mọi $x \\in D$ và tồn tại $x_0 \\in D$ sao cho $f(x_0) = m$.",
              "**Lưu ý bắt buộc:** Cả hai điều kiện đều phải được thỏa mãn. Nếu $f(x) < M$ nhưng không có điểm nào trong $D$ đạt giá trị $M$ (ví dụ hàm $y = \\frac{x}{x+1}$ trên $[0; +\\infty)$ có tiệm cận $y=1$) thì $M$ KHÔNG phải là GTLN trên miền đó."
            ]
          },
          {
            title: "2. Phương pháp tìm GTLN và GTNN",
            badge: "Quy trình tính toán",
            points: [
              "**Trường hợp 1: Tìm min/max trên đoạn đóng $[a; b]$ (hàm liên tục):**",
              "• Định lí Weierstrass bảo đảm mọi hàm số liên tục trên đoạn đóng $[a; b]$ đều luôn đạt được cả GTLN và GTNN.",
              "• Bước 1: Tính đạo hàm $f'(x)$.",
              "• Bước 2: Tìm các nghiệm $x_1, x_2, \\dots, x_k \\in (a; b)$ của phương trình $f'(x) = 0$ hoặc tại đó $f'(x)$ không xác định.",
              "• Bước 3: Tính các giá trị $f(a), f(b), f(x_1), f(x_2), \\dots, f(x_k)$.",
              "• Bước 4: So sánh các giá trị trên. Số lớn nhất chính là $\\max_{[a; b]} f(x)$, số nhỏ nhất chính là $\\min_{[a; b]} f(x)$ mà KHÔNG CẦN lập bảng biến thiên.",
              "**Trường hợp 2: Tìm min/max trên khoảng $(a; b)$, nửa khoảng hoặc miền vô hạn:**",
              "• Bắt buộc phải lập bảng biến thiên hoàn chỉnh trên tập xác định tương ứng.",
              "• Tính các giới hạn tại các đầu mút vô cực hoặc điểm gián đoạn $\\lim_{x \\to a^+} f(x), \\lim_{x \\to b^-} f(x), \\lim_{x \\to \\pm\\infty} f(x)$.",
              "• Quan sát bảng biến thiên để xác định điểm cao nhất, thấp nhất mà đồ thị thực sự chạm tới trong tập xác định."
            ]
          },
          {
            title: "3. Quy trình 4 bước giải bài toán tối ưu hóa thực tiễn",
            badge: "Mô hình hóa thực tế",
            points: [
              "**Bước 1 (Xác định biến và đại lượng tối ưu):** Chọn đại lượng cần tối đa hóa hoặc tối thiểu hóa (doanh thu, lợi nhuận, thể tích, chi phí vật liệu, thời gian di chuyển), đặt là hàm $Q$. Chọn biến độc lập chính $x$, đặt điều kiện hình học hoặc thực tế cho $x$ (ví dụ: kích thước $x > 0$, phần trăm $0 < x < 100$).",
              "**Bước 2 (Thiết lập hàm mục tiêu):** Dùng các mối quan hệ hình học, vật lý hoặc kinh tế để biểu diễn tất cả đại lượng phụ theo $x$, từ đó rút ra hàm số một biến $Q = Q(x)$ trên miền xác định $D$.",
              "**Bước 3 (Khảo sát cực trị & tìm min/max):** Tính đạo hàm $Q'(x)$, giải $Q'(x) = 0$, lập bảng biến thiên hoặc dùng đạo hàm cấp hai $Q''(x)$ để tìm điểm đạt GTLN hoặc GTNN trên $D$.",
              "**Bước 4 (Kết luận & Kiểm tra điều kiện):** Đối chiếu với điều kiện thực tế, trả lời kèm theo đơn vị đo (mét, lít, đồng, giờ,...).",
              "**Các mô hình kinh tế cốt lõi:**",
              "• Hàm doanh thu: $R(x) = x \\cdot p(x)$ (với $x$ là sản lượng bán ra, $p(x)$ là đơn giá bán theo mức sản lượng).",
              "• Hàm lợi nhuận: $P(x) = R(x) - C(x)$ (với $C(x)$ là hàm tổng chi phí sản xuất). Để tối đa hóa lợi nhuận thì chi phí biên phải bằng doanh thu biên: $C'(x) = R'(x)$."
            ]
          }
        ],
        quizzes: [
          {
            q: "Giá trị lớn nhất của hàm số $f(x) = x^3 - 3x + 2$ trên đoạn $[0; 2]$ bằng bao nhiêu?",
            options: ["A. 4", "B. 2", "C. 0", "D. 6"],
            correct: 0,
            explain: "Ta có $f'(x) = 3x^2 - 3 = 0 \\Leftrightarrow x = \\pm 1$. Vì xét trên $[0; 2]$ nên ta chỉ nhận $x = 1$. Tính các giá trị: $f(0) = 2$, $f(1) = 0$, $f(2) = 2^3 - 3(2) + 2 = 4$. Do đó giá trị lớn nhất là 4 tại $x = 2$."
          },
          {
            q: "Một xưởng sản xuất cần làm những chiếc hộp hình trụ kín có dung tích $V = 54\\pi$ cm$^3$. Để tiết kiệm vật liệu nhất (diện tích toàn phần nhỏ nhất), bán kính đáy $r$ của hình trụ phải bằng bao nhiêu?",
            options: ["A. $r = 3$ cm", "B. $r = 2$ cm", "C. $r = 4$ cm", "D. $r = 6$ cm"],
            correct: 0,
            explain: "Thể tích trụ $V = \\pi r^2 h = 54\\pi \\Rightarrow h = \\frac{54}{r^2}$. Diện tích toàn phần $S_{tp} = 2\\pi r^2 + 2\\pi rh = 2\\pi r^2 + \\frac{108\\pi}{r}$. Đạo hàm theo $r$: $S'(r) = 4\\pi r - \\frac{108\\pi}{r^2}$. Cho $S'(r) = 0 \\Leftrightarrow 4r = \\frac{108}{r^2} \\Leftrightarrow r^3 = 27 \\Leftrightarrow r = 3$ cm."
          },
          {
            q: "Hàm số $y = \\frac{2x - 1}{x + 1}$ trên nửa khoảng $[0; +\\infty)$ có GTLN và GTNN như thế nào?",
            options: [
              "A. GTNN bằng $-1$, không có GTLN",
              "B. GTNN bằng $-1$, GTLN bằng 2",
              "C. GTLN bằng 2, không có GTNN",
              "D. Không có cả GTLN và GTNN"
            ],
            correct: 0,
            explain: "Hàm số xác định trên $[0; +\\infty)$ vì mẫu $x+1 > 0$. Ta có $y' = \\frac{2(1) - (-1)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0$ nên hàm số luôn đồng biến trên $[0; +\\infty)$. Do đó $\\min = y(0) = -1$. Khi $x \\to +\\infty$, $y \\to 2$, nhưng $y(x) < 2$ với mọi $x$, do đó hàm số KHÔNG đạt được giá trị 2, tức không có GTLN."
          }
        ]
      },
      {
        id: "bai-3",
        num: "Bài 3",
        title: "Đường tiệm cận của đồ thị hàm số",
        duration: "90 phút",
        objective: "Hiểu bản chất hình học và giải tích của 3 loại đường tiệm cận: tiệm cận đứng, tiệm cận ngang và tiệm cận xiên; nắm vững cách tìm tiệm cận bằng giới hạn và phép chia đa thức.",
        theorySections: [
          {
            title: "1. Tiệm cận đứng (TCĐ)",
            badge: "Giới hạn tại điểm biên",
            points: [
              "**Định nghĩa:** Đường thẳng $x = a$ được gọi là **đường tiệm cận đứng** của đồ thị hàm số $y = f(x)$ nếu ít nhất một trong các điều kiện sau được thỏa mãn:",
              "$$\\lim_{x \\to a^+} f(x) = +\\infty, \\quad \\lim_{x \\to a^+} f(x) = -\\infty, \\quad \\lim_{x \\to a^-} f(x) = +\\infty, \\quad \\lim_{x \\to a^-} f(x) = -\\infty.$$",
              "**Cách tìm:** Ứng viên điểm $x = a$ là các điểm làm cho mẫu số triệt tiêu hoặc mút khoảng xác định của hàm số. Sau đó tính giới hạn một bên:",
              "• Nếu tử khác 0 và mẫu tiến về 0 thì giới hạn ra $\\pm\\infty \\Rightarrow x = a$ là tiệm cận đứng.",
              "• Nếu cả tử và mẫu cùng triệt tiêu (dạng $\\frac{0}{0}$), phải khử dạng vô định rút gọn trước. Nếu sau khi rút gọn giới hạn là hữu hạn thì $x = a$ KHÔNG phải tiệm cận đứng mà chỉ là điểm khuyết của đồ thị."
            ]
          },
          {
            title: "2. Tiệm cận ngang (TCN)",
            badge: "Giới hạn ở vô cực",
            points: [
              "**Định nghĩa:** Đường thẳng $y = b$ được gọi là **đường tiệm cận ngang** của đồ thị hàm số $y = f(x)$ nếu:",
              "$$\\lim_{x \\to +\\infty} f(x) = b \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} f(x) = b.$$",
              "**Tính chất:** Đồ thị có thể có tối đa 2 đường tiệm cận ngang khác nhau khi $x \\to +\\infty$ và $x \\to -\\infty$ (thường gặp ở hàm chứa dấu căn bậc hai như $y = \\frac{\\sqrt{x^2+1}}{x}$).",
              "• Hàm phân thức hữu tỉ $\\frac{P(x)}{Q(x)}$: Nếu bậc của tử nhỏ hơn bậc của mẫu thì đồ thị có TCN là $y = 0$. Nếu bậc của tử bằng bậc của mẫu thì TCN là $y = \\frac{a_n}{b_n}$ (tỉ số hệ số cao nhất). Nếu bậc tử lớn hơn bậc mẫu thì không có TCN."
            ]
          },
          {
            title: "3. Tiệm cận xiên (TCX)",
            badge: "Hàm hữu tỉ & Tiệm cận nghiêng",
            points: [
              "**Định nghĩa:** Đường thẳng $y = ax + b$ ($a \\ne 0$) được gọi là **đường tiệm cận xiên** của đồ thị hàm số $y = f(x)$ nếu:",
              "$$\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} [f(x) - (ax + b)] = 0.$$",
              "**Công thức xác định hệ số:**",
              "$$a = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x}, \\qquad b = \\lim_{x \\to \\pm\\infty} [f(x) - ax].$$",
              "**Trường hợp hàm phân thức bậc 2 trên bậc 1:** $y = \\frac{Ax^2 + Bx + C}{mx + n}$ ($A \\ne 0, m \\ne 0$).",
              "• Thực hiện phép chia đa thức tử cho mẫu: $y = ax + b + \\frac{R}{mx + n}$.",
              "• Vì $\\lim_{x \\to \\pm\\infty} \\frac{R}{mx + n} = 0$, suy ra ngay đường thẳng $y = ax + b$ là tiệm cận xiên mà không cần tính tích phân hay giới hạn phức tạp."
            ]
          },
          {
            title: "4. Nhận biết và vẽ tiệm cận trên đồ thị",
            badge: "Kĩ năng đọc hình",
            points: [
              "• Trên đồ thị phẳng, đường tiệm cận luôn được biểu diễn bằng **nét đứt nét (dashed line)** để phân biệt với đường cong đồ thị.",
              "• Đồ thị hàm số có thể cắt đường tiệm cận ngang hoặc tiệm cận xiên tại một hoặc nhiều điểm hữu hạn; nhưng đồ thị KHÔNG BAO GIỜ cắt đường tiệm cận đứng tại điểm xác định.",
              "• Giao điểm của tiệm cận đứng $x = a$ và tiệm cận ngang $y = b$ (hoặc tiệm cận xiên $y = ax+b$) chính là **tâm đối xứng** của đồ thị hàm phân thức."
            ]
          }
        ],
        quizzes: [
          {
            q: "Đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$ có đường tiệm cận đứng và tiệm cận ngang lần lượt là:",
            options: [
              "A. $x = -2$ và $y = 3$",
              "B. $x = 2$ và $y = 3$",
              "C. $x = 3$ và $y = -2$",
              "D. $x = -2$ và $y = -1/2$"
            ],
            correct: 0,
            explain: "Mẫu số triệt tiêu tại $x = -2$ (tử khác 0) nên tiệm cận đứng là $x = -2$. Giới hạn khi $x \\to \\pm\\infty$ là $\\lim_{x \\to \\pm\\infty} \\frac{3x-1}{x+2} = 3$ nên tiệm cận ngang là $y = 3$."
          },
          {
            q: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - 3x + 5}{x - 1}$ là đường thẳng nào?",
            options: ["A. $y = x - 2$", "B. $y = x - 4$", "C. $y = x + 2$", "D. $y = 2x - 1$"],
            correct: 0,
            explain: "Thực hiện phép chia tử cho mẫu: $x^2 - 3x + 5 = (x - 1)(x - 2) + 3$. Do đó $y = x - 2 + \\frac{3}{x - 1}$. Vì $\\lim_{x \\to \\pm\\infty} \\frac{3}{x - 1} = 0$ nên đường tiệm cận xiên là $y = x - 2$."
          },
          {
            q: "Đồ thị hàm số $y = \\frac{\\sqrt{x^2 + 4}}{x - 1}$ có tất cả bao nhiêu đường tiệm cận (gồm cả đứng, ngang, xiên)?",
            options: ["A. 3", "B. 2", "C. 1", "D. 4"],
            correct: 0,
            explain: "• Tiệm cận đứng: $x = 1$ do $\\lim_{x \\to 1^+} y = +\\infty$. • Tiệm cận ngang khi $x \\to +\\infty$: $\\lim_{x \\to +\\infty} \\frac{\\sqrt{x^2(1+4/x^2)}}{x-1} = \\lim \\frac{x\\sqrt{1+4/x^2}}{x(1-1/x)} = 1 \\Rightarrow y = 1$. • Tiệm cận ngang khi $x \\to -\\infty$: $\\lim_{x \\to -\\infty} \\frac{-x\\sqrt{1+4/x^2}}{x(1-1/x)} = -1 \\Rightarrow y = -1$. Tổng cộng có 3 tiệm cận: $x = 1, y = 1, y = -1$."
          }
        ]
      },
      {
        id: "bai-4",
        num: "Bài 4",
        title: "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
        duration: "120 phút",
        objective: "Nắm vững sơ đồ tổng quát khảo sát hàm số; thành thạo khảo sát 3 dạng đồ thị chuẩn SGK: hàm đa thức bậc ba, hàm phân thức bậc nhất/bậc nhất và hàm phân thức bậc hai/bậc nhất; nhận biết tâm và trục đối xứng.",
        theorySections: [
          {
            title: "1. Sơ đồ tổng quát 5 bước khảo sát hàm số",
            badge: "Thuật toán chuẩn",
            points: [
              "**Bước 1 (Tập xác định & Tính đối xứng):** Tìm tập xác định $D$. Kiểm tra tính chẵn, lẻ hoặc chu kì (nếu có) để rút gọn miền khảo sát.",
              "**Bước 2 (Sự biến thiên):**",
              "• Tính $f'(x)$, giải phương trình $f'(x) = 0$ và tìm điểm không có đạo hàm.",
              "• Xét dấu $f'(x)$, xác định các khoảng đồng biến, nghịch biến và các điểm cực trị.",
              "• Tính các giới hạn tại vô cực và giới hạn một bên tại các điểm gián đoạn để tìm các đường tiệm cận (đứng, ngang, xiên).",
              "**Bước 3 (Lập bảng biến thiên):** Điền đủ hàng $x$, hàng dấu $f'(x)$ và hàng giá trị $f(x)$ với chiều mũi tên, các giá trị cực trị và giới hạn vô cực.",
              "**Bước 4 (Khảo sát độ cong & điểm uốn - nếu cần):** Tính $f''(x)$, giải $f''(x) = 0$. Khoảng $f''(x) > 0$ thì đồ thị lồi xuống (hõm lên); khoảng $f''(x) < 0$ đồ thị lồi lên. Điểm mà $f''$ đổi dấu là **điểm uốn** $U(x_0; f(x_0))$.",
              "**Bước 5 (Vẽ đồ thị):**",
              "• Vẽ các đường tiệm cận (nét đứt) và các trục tọa độ.",
              "• Tìm giao điểm với $Oy$: cho $x=0 \\Rightarrow y=f(0)$. Tìm giao điểm với $Ox$: giải $f(x)=0$.",
              "• Lấy thêm vài điểm đặc biệt (điểm cực trị, điểm uốn, điểm phụ đối xứng) rồi nối các nhánh cong trơn láng."
            ]
          },
          {
            title: "2. Ba dạng hàm số trọng tâm lớp 12",
            badge: "Cấu trúc đồ thị",
            points: [
              "**Dạng 1: Hàm bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\ne 0$):**",
              "• Tập xác định: $D = \\mathbb{R}$. Không có tiệm cận.",
              "• $y' = 3ax^2 + 2bx + c$. Đồ thị có 2 cực trị khi $\\Delta' > 0$; không có cực trị khi $\\Delta' \\le 0$.",
              "• Đồ thị luôn có một **tâm đối xứng** chính là điểm uốn $U$ với hoành độ $x_U = -\\frac{b}{3a}$ (nghiệm của $y'' = 6ax + 2b = 0$).",
              "**Dạng 2: Hàm phân thức hữu tỉ bậc nhất/nhất $y = \\frac{ax+b}{cx+d}$ ($c \\ne 0, ad - bc \\ne 0$):**",
              "• Tập xác định: $D = \\mathbb{R} \\setminus \\{-d/c\\}$.",
              "• Đạo hàm: $y' = \\frac{ad - bc}{(cx+d)^2}$. Nếu $ad-bc > 0$, hàm số luôn đồng biến trên từng khoảng xác định. Nếu $ad-bc < 0$, luôn nghịch biến. Hàm số KHÔNG có cực trị.",
              "• Tiệm cận đứng: $x = -d/c$; Tiệm cận ngang: $y = a/c$.",
              "• Đồ thị là một đường Hyperbol có **tâm đối xứng** là giao điểm hai tiệm cận $I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$, nhận 2 đường phân giác góc tạo bởi tiệm cận làm trục đối xứng.",
              "**Dạng 3: Hàm phân thức bậc hai/nhất $y = \\frac{ax^2+bx+c}{mx+n}$ ($a \\ne 0, m \\ne 0$, đa thức tử không chia hết cho mẫu):**",
              "• Chia đa thức: $y = \\alpha x + \\beta + \\frac{\\gamma}{mx+n}$.",
              "• Tiệm cận đứng: $x = -n/m$; Tiệm cận xiên: $y = \\alpha x + \\beta$.",
              "• Tâm đối xứng là giao điểm của TCĐ và TCX: $I(-n/m; \\alpha(-n/m) + \\beta)$."
            ]
          }
        ],
        quizzes: [
          {
            q: "Tâm đối xứng của đồ thị hàm số bậc ba $y = x^3 - 3x^2 + 2$ có tọa độ là:",
            options: ["A. $(1; 0)$", "B. $(0; 2)$", "C. $(2; -2)$", "D. $(-1; -2)$"],
            correct: 0,
            explain: "Ta có $y' = 3x^2 - 6x$, $y'' = 6x - 6$. Cho $y'' = 0 \\Leftrightarrow x = 1$. Thay $x = 1$ vào hàm số: $y = 1^3 - 3(1)^2 + 2 = 0$. Vậy tâm đối xứng là điểm uốn $U(1; 0)$."
          },
          {
            q: "Giao điểm của hai đường tiệm cận của đồ thị hàm số $y = \\frac{2x - 3}{x + 1}$ là điểm nào?",
            options: ["A. $I(-1; 2)$", "B. $I(1; 2)$", "C. $I(-1; -3)$", "D. $I(2; -1)$"],
            correct: 0,
            explain: "Đồ thị hàm số có tiệm cận đứng là $x = -1$ và tiệm cận ngang là $y = 2$. Do đó giao điểm của hai đường tiệm cận (đồng thời là tâm đối xứng) có tọa độ là $I(-1; 2)$."
          },
          {
            q: "Đồ thị hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\ne 0$) có hai điểm cực trị nằm về hai phía của trục tung khi và chỉ khi:",
            options: ["A. $ac < 0$", "B. $ab > 0$", "C. $ad < 0$", "D. $b^2 - 3ac < 0$"],
            correct: 0,
            explain: "Hai điểm cực trị nằm về hai phía trục tung nghĩa là phương trình $y' = 3ax^2 + 2bx + c = 0$ có hai nghiệm trái dấu ($x_1 < 0 < x_2$), điều này tương đương với $3a \\cdot c < 0 \\Leftrightarrow ac < 0$."
          }
        ]
      },
      {
        id: "bai-5",
        num: "Bài 5",
        title: "Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn",
        duration: "90 phút",
        objective: "Hiểu đạo hàm là tốc độ thay đổi tức thời; vận dụng vào bài toán vật lý (vận tốc, gia tốc), sinh học (tốc độ sinh trưởng), môi trường (chi phí xử lý ô nhiễm) và kinh tế (chi phí biên, doanh thu biên).",
        theorySections: [
          {
            title: "1. Tốc độ thay đổi tức thời & Ý nghĩa vật lý",
            badge: "Cơ học & Động lực học",
            points: [
              "**Tốc độ biến thiên:** Nếu một đại lượng $y$ phụ thuộc vào $x$ theo hàm số $y = f(x)$, tỉ số $\\frac{\\Delta y}{\\Delta x}$ là tốc độ thay đổi trung bình. Khi $\\Delta x \\to 0$, giới hạn $\\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = f'(x)$ chính là **tốc độ thay đổi tức thời** của $y$ tại điểm $x$.",
              "**Chuyển động thẳng:**",
              "• Vận tốc tức thời: $v(t) = s'(t)$ (đạo hàm bậc nhất của hàm quãng đường/tọa độ theo thời gian $t$).",
              "• Gia tốc tức thời: $a(t) = v'(t) = s''(t)$ (đạo hàm bậc hai của hàm quãng đường).",
              "• Chiều chuyển động: $v(t) > 0$ vật chuyển động theo chiều dương; $v(t) < 0$ vật chuyển động theo chiều âm.",
              "• Tính chất nhanh/chậm dần: Vật chuyển động **nhanh dần** khi vận tốc và gia tốc cùng dấu ($v(t) \\cdot a(t) > 0$); vật chuyển động **chậm dần** khi vận tốc và gia tốc trái dấu ($v(t) \\cdot a(t) < 0$)."
            ]
          },
          {
            title: "2. Ứng dụng trong kinh tế: Phân tích biên tế (Marginal Analysis)",
            badge: "Kinh tế vi mô",
            points: [
              "**Chi phí biên (Marginal Cost):** Nếu $C(x)$ là tổng chi phí sản xuất $x$ đơn vị sản phẩm thì $C'(x)$ gọi là chi phí biên tại mức sản lượng $x$.",
              "• Ý nghĩa: $C'(x) \\approx C(x+1) - C(x)$, biểu thị xấp xỉ chi phí tăng thêm khi doanh nghiệp sản xuất thêm đơn vị sản phẩm thứ $x+1$.",
              "**Doanh thu biên (Marginal Revenue):** $R'(x)$ là đạo hàm của hàm tổng doanh thu $R(x)$. Biểu thị doanh thu tăng thêm khi bán thêm 1 đơn vị hàng hóa.",
              "**Lợi nhuận biên (Marginal Profit):** $P'(x) = R'(x) - C'(x)$. Lợi nhuận đạt cực đại tại điểm mà $P'(x) = 0 \\Leftrightarrow R'(x) = C'(x)$ (Doanh thu biên bằng Chi phí biên)."
            ]
          },
          {
            title: "3. Ứng dụng trong môi trường và sinh học",
            badge: "Mô hình sinh thái",
            points: [
              "• **Chi phí xử lý chất thải/ô nhiễm:** Mô hình chi phí $C(p) = \\frac{k \\cdot p}{100 - p}$ để loại bỏ $p\\%$ chất độc hại trong môi trường. Khi $p \\to 100\\%$, $C(p) \\to +\\infty$ phản ánh thực tế kỹ thuật: việc loại bỏ hoàn toàn $100\\%$ tạp chất đòi hỏi chi phí vô hạn, giúp nhà hoạch định chính sách tìm điểm cân bằng kinh tế tối ưu.",
              "• **Tăng trưởng dân số/quần thể vi khuẩn:** $N'(t)$ là tốc độ sinh trưởng tức thời tại thời điểm $t$."
            ]
          }
        ],
        quizzes: [
          {
            q: "Một vật chuyển động thẳng có phương trình $s(t) = -t^3 + 6t^2 + 15t$ (với $t$ tính bằng giây, $s$ tính bằng mét). Vận tốc tức thời của vật tại thời điểm gia tốc bằng 0 là:",
            options: ["A. $27$ m/s", "B. $15$ m/s", "C. $12$ m/s", "D. $0$ m/s"],
            correct: 0,
            explain: "Ta có $v(t) = s'(t) = -3t^2 + 12t + 15$ và gia tốc $a(t) = v'(t) = -6t + 12$. Gia tốc triệt tiêu khi $a(t) = 0 \\Leftrightarrow -6t + 12 = 0 \\Leftrightarrow t = 2$ s. Thay $t = 2$ vào vận tốc: $v(2) = -3(2^2) + 12(2) + 15 = -12 + 24 + 15 = 27$ m/s."
          },
          {
            q: "Hàm chi phí sản xuất $x$ sản phẩm của một xưởng là $C(x) = 0,05x^2 + 20x + 5000$ (nghìn đồng). Chi phí biên tại mức sản lượng $x = 100$ sản phẩm là bao nhiêu?",
            options: ["A. 30 nghìn đồng", "B. 25 nghìn đồng", "C. 20 nghìn đồng", "D. 35 nghìn đồng"],
            correct: 0,
            explain: "Chi phí biên là $C'(x) = 0,1x + 20$. Tại $x = 100$, chi phí biên là $C'(100) = 0,1(100) + 20 = 10 + 20 = 30$ nghìn đồng (nghĩa là chi phí để sản xuất thêm sản phẩm thứ 101 ước tính là 30 nghìn đồng)."
          },
          {
            q: "Để loại bỏ $x\\%$ chất ô nhiễm ra khỏi nguồn nước, chi phí ước tính là $C(x) = \\frac{250x}{100 - x}$ (triệu đồng). Nhận xét nào sau đây đúng về tiệm cận của hàm chi phí?",
            options: [
              "A. Đường thẳng $x = 100$ là tiệm cận đứng, thể hiện chi phí tiến tới vô cùng khi muốn làm sạch 100%",
              "B. Đường thẳng $y = 250$ là tiệm cận ngang",
              "C. Đường thẳng $x = 0$ là tiệm cận đứng",
              "D. Chi phí có giá trị cực đại tại $x = 100$"
            ],
            correct: 0,
            explain: "Khi $x \\to 100^-$, mẫu số $100 - x \\to 0^+$ nên $\\lim_{x \\to 100^-} C(x) = +\\infty$. Do đó $x = 100$ là tiệm cận đứng. Về mặt ý nghĩa thực tiễn, điều này phản ánh không thể loại bỏ hoàn toàn $100\\%$ chất ô nhiễm nếu chỉ dùng chi phí hữu hạn."
          }
        ]
      },
      {
        id: "on-tap-chuong-1",
        num: "Ôn tập",
        title: "Ôn tập chương I — Các dạng cốt lõi",
        duration: "60 phút",
        objective: "Hệ thống hóa toàn bộ kiến thức Chương I: đơn điệu, cực trị, min/max, 3 loại tiệm cận, vẽ đồ thị và giải toán tối ưu; cảnh báo các bẫy thường gặp.",
        theorySections: [
          {
            title: "1. Ma trận phương pháp và dấu hiệu nhận biết",
            badge: "Tổng hợp",
            points: [
              "• **Đơn điệu:** Xét dấu $f'(x)$. Dương $\\Rightarrow$ tăng, âm $\\Rightarrow$ giảm. Đạo hàm bằng 0 tại hữu hạn điểm không làm mất tính đơn điệu.",
              "• **Cực trị:** $f'$ đổi dấu $+\\to-$ là Cực đại; $-\\to+$ là Cực tiểu. Nhớ kiểm tra liên tục tại điểm xét.",
              "• **Min/Max đoạn $[a;b]$:** So sánh giá trị hai đầu mút và các điểm dừng bên trong đoạn, không cần vẽ biến thiên.",
              "• **Tiệm cận:** TCĐ $x = a$ khi mẫu $=0$ và tử $\\ne 0$; TCN $y = b$ khi $x \\to \\pm\\infty$; TCX $y = ax+b$ khi chia tử cho mẫu hàm bậc hai/nhất.",
              "• **Tối ưu thực tiễn:** Thiết lập hàm $Q(x)$ với biến $x$ thỏa mãn ràng buộc thực tế, đạo hàm tìm điểm tới hạn rồi đối chiếu điều kiện."
            ]
          },
          {
            title: "2. Các lỗi sai thường gặp cần tránh",
            badge: "Cảnh báo bẫy",
            points: [
              "❌ **Lỗi kết luận đơn điệu:** Viết hàm số đồng biến trên $(-\\infty; 1) \\cup (1; +\\infty)$ là SAI. Phải dùng từ 'và' hoặc dấu chấm phẩy: trên $(-\\infty; 1)$ và $(1; +\\infty)$.",
              "❌ **Lỗi nhầm cực trị và GTLN/GTNN:** Cực đại chỉ lớn hơn các điểm xung quanh lân cận, không nhất thiết là giá trị lớn nhất trên toàn bộ tập xác định.",
              "❌ **Lỗi tiệm cận đứng:** Thấy mẫu triệt tiêu vội kết luận là tiệm cận đứng mà quên kiểm tra tử số (bẫy nghiệm trùng triệt tiêu).",
              "❌ **Lỗi tối ưu:** Quên đặt điều kiện tập xác định thực tế (như chiều dài cạnh $x > 0$ hay sản lượng $x \\in \\mathbb{N}^*$) dẫn đến chọn nghiệm không thực tế."
            ]
          }
        ],
        quizzes: []
      }
    ]
  },
  chuong2: {
    id: "chuong-2",
    code: "CHƯƠNG II",
    title: "Vectơ và hệ trục tọa độ trong không gian",
    desc: "Mở rộng đại số vectơ từ mặt phẳng vào không gian ba chiều; quy tắc hình hộp; hệ trục Oxyz; biểu thức tọa độ, tích vô hướng, độ dài và góc giữa hai vectơ.",
    badgeColor: "emerald",
    lessons: [
      {
        id: "bai-6",
        num: "Bài 6",
        title: "Vectơ trong không gian",
        duration: "90 phút",
        objective: "Nắm vững định nghĩa vectơ không gian, quy tắc cộng trừ vectơ, quy tắc tam giác, hình bình hành, quy tắc hình hộp và điều kiện ba vectơ đồng phẳng.",
        theorySections: [
          {
            title: "1. Khái niệm vectơ & Các phép toán cơ bản",
            badge: "Định nghĩa & Tính chất",
            points: [
              "**Định nghĩa:** Vectơ trong không gian là một đoạn thẳng có hướng. Kí hiệu $\\overrightarrow{AB}$ với $A$ là điểm đầu, $B$ là điểm cuối. Độ dài của vectơ là khoảng cách giữa $A$ và $B$, kí hiệu $|\\overrightarrow{AB}| = AB$. Vectơ có độ dài bằng 0 gọi là vectơ-không, kí hiệu $\\vec 0$.",
              "**Giá và phương:** Giá của vectơ là đường thẳng đi qua điểm đầu và điểm cuối của nó. Hai vectơ cùng phương khi giá của chúng song song hoặc trùng nhau. Khi cùng phương, chúng có thể cùng hướng hoặc ngược hướng.",
              "**Vectơ bằng nhau & Vectơ đối:** Hai vectơ $\\vec a$ và $\\vec b$ bằng nhau nếu chúng cùng hướng và cùng độ dài. Vectơ đối của $\\vec a$ là vectơ có cùng độ dài nhưng ngược hướng, kí hiệu là $-\\vec a$.",
              "**Phép nhân vectơ với số thực:** Cho số $k \\in \\mathbb{R}$ và $\\vec a \\ne \\vec 0$. Vectơ $k\\vec a$ cùng hướng với $\\vec a$ khi $k > 0$, ngược hướng khi $k < 0$, và có độ dài $|k\\vec a| = |k||\\vec a|$."
            ]
          },
          {
            title: "2. Các quy tắc vectơ không gian then chốt",
            badge: "Quy tắc cốt lõi",
            points: [
              "**Quy tắc ba điểm (Quy tắc tam giác):** Với ba điểm bất kì $A, B, C$, ta luôn có:",
              "$$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}, \\qquad \\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}.$$",
              "**Quy tắc hình bình hành:** Nếu tứ giác $ABCD$ là hình bình hành thì:",
              "$$\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}.$$",
              "**Quy tắc hình hộp (Đặc trưng không gian 3D):** Cho hình hộp $ABCD.A'B'C'D'$. Tổng của ba vectơ xuất phát từ cùng một đỉnh trên ba cạnh bằng vectơ đường chéo xuất phát từ đỉnh đó:",
              "$$\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}.$$",
              "**Tính chất trung điểm và trọng tâm:**",
              "• $M$ là trung điểm đoạn $AB \\Leftrightarrow \\overrightarrow{MA} + \\overrightarrow{MB} = \\vec 0 \\Leftrightarrow \\overrightarrow{OM} = \\frac{1}{2}(\\overrightarrow{OA} + \\overrightarrow{OB})$ (với mọi điểm $O$).",
              "• $G$ là trọng tâm tam giác $ABC \\Leftrightarrow \\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec 0 \\Leftrightarrow \\overrightarrow{OG} = \\frac{1}{3}(\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC})$."
            ]
          },
          {
            title: "3. Sự đồng phẳng của ba vectơ",
            badge: "Định lí phân tích",
            points: [
              "**Định nghĩa:** Ba vectơ gọi là **đồng phẳng** nếu giá của chúng cùng song song với một mặt phẳng.",
              "**Định lí phân tích:** Cho hai vectơ $\\vec a, \\vec b$ không cùng phương. Ba vectơ $\\vec a, \\vec b, \\vec c$ đồng phẳng khi và chỉ khi tồn tại duy nhất một cặp số thực $(m, n)$ sao cho:",
              "$$\\vec c = m\\vec a + n\\vec b.$$",
              "Nếu ba vectơ $\\vec a, \\vec b, \\vec c$ không đồng phẳng thì với mọi vectơ $\\vec x$ trong không gian, luôn phân tích duy nhất được $\\vec x = m\\vec a + n\\vec b + p\\vec c$."
            ]
          }
        ],
        quizzes: [
          {
            q: "Cho hình hộp $ABCD.A'B'C'D'$. Tổng ba vectơ $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}$ bằng vectơ nào sau đây?",
            options: ["A. $\\overrightarrow{AC'}$", "B. $\\overrightarrow{A'C}$", "C. $\\overrightarrow{BD'}$", "D. $\\overrightarrow{CA'}$"],
            correct: 0,
            explain: "Theo Quy tắc hình hộp trong không gian, tổng 3 vectơ chung gốc xuất phát từ một đỉnh dọc theo 3 cạnh bằng vectơ đường chéo xuất phát từ đỉnh đó: $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$."
          },
          {
            q: "Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm tam giác $BCD$. Khẳng định nào sau đây là khẳng định ĐÚNG?",
            options: [
              "A. $\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD} = 3\\overrightarrow{AG}$",
              "B. $\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD} = \\overrightarrow{AG}$",
              "C. $\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD} = 2\\overrightarrow{AG}$",
              "D. $\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD} = 4\\overrightarrow{AG}$"
            ],
            correct: 0,
            explain: "Vì $G$ là trọng tâm tam giác $BCD$ nên $\\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD} = \\vec 0$. Với điểm $A$ bất kì: $\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD} = (\\overrightarrow{AG} + \\overrightarrow{GB}) + (\\overrightarrow{AG} + \\overrightarrow{GC}) + (\\overrightarrow{AG} + \\overrightarrow{GD}) = 3\\overrightarrow{AG} + \\vec 0 = 3\\overrightarrow{AG}$."
          },
          {
            q: "Cho ba vectơ $\\vec a, \\vec b, \\vec c$ trong đó $\\vec a, \\vec b$ không cùng phương. Nếu $\\vec c = 2\\vec a - 3\\vec b$ thì ba vectơ $\\vec a, \\vec b, \\vec c$ có tính chất gì?",
            options: [
              "A. Đồng phẳng",
              "B. Đôi một vuông góc",
              "C. Cùng hướng",
              "D. Không đồng phẳng"
            ],
            correct: 0,
            explain: "Vì vectơ $\\vec c$ biểu diễn tuyến tính được qua hai vectơ không cùng phương $\\vec a$ và $\\vec b$ (với các hệ số $m = 2, n = -3$) nên theo định lí phân tích vectơ, ba vectơ $\\vec a, \\vec b, \\vec c$ đồng phẳng."
          }
        ]
      },
      {
        id: "bai-7",
        num: "Bài 7",
        title: "Hệ trục tọa độ trong không gian",
        duration: "90 phút",
        objective: "Nắm vững cấu trúc hệ trục tọa độ Oxyz; tọa độ của điểm và vectơ; các hình chiếu lên trục và mặt phẳng tọa độ; công thức trung điểm và trọng tâm; mở rộng tọa độ cầu.",
        theorySections: [
          {
            title: "1. Cấu trúc hệ tọa độ Đề-các Oxyz",
            badge: "Không gian 3 chiều",
            points: [
              "Hệ trục tọa độ vuông góc trong không gian gồm ba trục số $Ox$ (trục hoành), $Oy$ (trục tung) và $Oz$ (trục cao) đôi một vuông góc tại gốc tọa độ $O(0;0;0)$.",
              "Các vectơ đơn vị trên ba trục: $\\vec i$ trên $Ox$, $\\vec j$ trên $Oy$, $\\vec k$ trên $Oz$. Chúng thỏa mãn:",
              "$$|\\vec i| = |\\vec j| = |\\vec k| = 1, \\qquad \\vec i \\cdot \\vec j = \\vec j \\cdot \\vec k = \\vec k \\cdot \\vec i = 0.$$",
              "Ba mặt phẳng tọa độ đôi một vuông góc:",
              "• Mặt phẳng $(Oxy)$ có phương trình $z = 0$.",
              "• Mặt phẳng $(Oyz)$ có phương trình $x = 0$.",
              "• Mặt phẳng $(Ozx)$ có phương trình $y = 0$."
            ]
          },
          {
            title: "2. Tọa độ của điểm và vectơ",
            badge: "Tọa độ Đề-các",
            points: [
              "**Tọa độ điểm:** Với mỗi điểm $M$ trong không gian, tồn tại duy nhất bộ ba số thực $(x; y; z)$ sao cho $\\overrightarrow{OM} = x\\vec i + y\\vec j + z\\vec k$. Ta viết $M(x; y; z)$ hoặc $M=(x; y; z)$.",
              "**Hình chiếu vuông góc của điểm $M(x; y; z)$:**",
              "• Chiếu lên các trục tọa độ: Lên $Ox$ là $M_x(x; 0; 0)$; lên $Oy$ là $M_y(0; y; 0)$; lên $Oz$ là $M_z(0; 0; z)$.",
              "• Chiếu lên các mặt phẳng tọa độ: Lên $(Oxy)$ là $M_{xy}(x; y; 0)$; lên $(Oyz)$ là $M_{yz}(0; y; z)$; lên $(Ozx)$ là $M_{zx}(x; 0; z)$.",
              "**Tọa độ vectơ $\\overrightarrow{AB}$:** Cho $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$:",
              "$$\\overrightarrow{AB} = (x_B - x_A; y_B - y_A; z_B - z_A).$$",
              "**Tọa độ trung điểm & Trọng tâm:**",
              "• Trung điểm $M$ của $AB$: $M\\left(\\frac{x_A + x_B}{2}; \\frac{y_A + y_B}{2}; \\frac{z_A + z_B}{2}\\right)$.",
              "• Trọng tâm $G$ của tam giác $ABC$: $G\\left(\\frac{x_A + x_B + x_C}{3}; \\frac{y_A + y_B + y_C}{3}; \\frac{z_A + z_B + z_C}{3}\\right)$."
            ]
          },
          {
            title: "3. Mở rộng: Hệ tọa độ cầu (Spherical Coordinates)",
            badge: "Kiến thức bổ trợ SGK",
            points: [
              "Đối với các vật thể có tính đối xứng cầu (hành tinh, vệ tinh, radar), tọa độ cầu $(r, \\theta, \\varphi)$ rất thuận tiện:",
              "• $r \\ge 0$: khoảng cách từ điểm $M$ đến gốc $O$ ($r = \\sqrt{x^2+y^2+z^2}$).",
              "• $\\theta \\in [0; 2\\pi)$: góc phương vị trên mặt phẳng $(Oxy)$ tính từ trục $Ox$.",
              "• $\\varphi \\in [0; \\pi]$: góc cực tính từ trục dương $Oz$ hạ xuống.",
              "Công thức chuyển đổi sang tọa độ Đề-các: $x = r\\sin\\varphi\\cos\\theta$, $y = r\\sin\\varphi\\sin\\theta$, $z = r\\cos\\varphi$."
            ]
          }
        ],
        quizzes: [
          {
            q: "Trong không gian $Oxyz$, cho điểm $M(2; -3; 5)$. Hình chiếu vuông góc của điểm $M$ lên mặt phẳng tọa độ $(Oxy)$ có tọa độ là:",
            options: ["A. $(2; -3; 0)$", "B. $(0; 0; 5)$", "C. $(2; 0; 5)$", "D. $(0; -3; 5)$"],
            correct: 0,
            explain: "Hình chiếu vuông góc của điểm $M(x; y; z)$ lên mặt phẳng $(Oxy)$ giữ nguyên hoành độ và tung độ, cho cao độ $z = 0$. Do đó hình chiếu là $(2; -3; 0)$."
          },
          {
            q: "Cho hai điểm $A(1; 2; -1)$ và $B(3; 0; 5)$. Tọa độ trung điểm $I$ của đoạn thẳng $AB$ là:",
            options: ["A. $(2; 1; 2)$", "B. $(4; 2; 4)$", "C. $(1; -1; 3)$", "D. $(2; -1; 3)$"],
            correct: 0,
            explain: "Tọa độ trung điểm $I = \\left(\\frac{1+3}{2}; \\frac{2+0}{2}; \\frac{-1+5}{2}\\right) = (2; 1; 2)$."
          },
          {
            q: "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 0; 2), B(-2; 1; 3)$ và trọng tâm $G(1; 2; 1)$. Tọa độ đỉnh $C$ là:",
            options: ["A. $C(4; 5; -2)$", "B. $C(2; 3; 0)$", "C. $C(0; 3; 6)$", "D. $C(4; 3; 2)$"],
            correct: 0,
            explain: "Từ công thức trọng tâm: $x_C = 3x_G - x_A - x_B = 3(1) - 1 - (-2) = 4$; $y_C = 3y_G - y_A - y_B = 3(2) - 0 - 1 = 5$; $z_C = 3z_G - z_A - z_B = 3(1) - 2 - 3 = -2$. Vậy $C(4; 5; -2)$."
          }
        ]
      },
      {
        id: "bai-8",
        num: "Bài 8",
        title: "Biểu thức tọa độ của các phép toán vectơ",
        duration: "90 phút",
        objective: "Nắm vững biểu thức tọa độ của phép cộng, trừ, nhân với vô hướng, tích vô hướng, độ dài vectơ, khoảng cách giữa hai điểm và góc giữa hai vectơ.",
        theorySections: [
          {
            title: "1. Biểu thức tọa độ các phép toán cơ bản",
            badge: "Phép toán đại số",
            points: [
              "Cho hai vectơ $\\vec a = (x_1; y_1; z_1)$ và $\\vec b = (x_2; y_2; z_2)$, số thực $k \\in \\mathbb{R}$:",
              "• Phép cộng: $\\vec a + \\vec b = (x_1 + x_2; y_1 + y_2; z_1 + z_2)$.",
              "• Phép trừ: $\\vec a - \\vec b = (x_1 - x_2; y_1 - y_2; z_1 - z_2)$.",
              "• Phép nhân với số thực: $k\\vec a = (kx_1; ky_1; kz_1)$.",
              "• Điều kiện hai vectơ cùng phương: $\\vec b$ cùng phương $\\vec a$ (với $\\vec a \\ne \\vec 0$) khi và chỉ khi tồn tại $k \\in \\mathbb{R}$ sao cho $x_2 = kx_1, y_2 = ky_1, z_2 = kz_1$ (nếu các tọa độ khác 0: $\\frac{x_2}{x_1} = \\frac{y_2}{y_1} = \\frac{z_2}{z_1}$)."
            ]
          },
          {
            title: "2. Tích vô hướng, độ dài & khoảng cách",
            badge: "Định lượng hình học",
            points: [
              "**Tích vô hướng:** Cho $\\vec a = (x_1; y_1; z_1)$ và $\\vec b = (x_2; y_2; z_2)$:",
              "$$\\vec a \\cdot \\vec b = x_1 x_2 + y_1 y_2 + z_1 z_2.$$",
              "• Hai vectơ vuông góc: $\\vec a \\perp \\vec b \\Leftrightarrow \\vec a \\cdot \\vec b = 0 \\Leftrightarrow x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$.",
              "**Độ dài của vectơ:**",
              "$$|\\vec a| = \\sqrt{\\vec a^2} = \\sqrt{x_1^2 + y_1^2 + z_1^2}.$$",
              "**Khoảng cách giữa hai điểm $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$:**",
              "$$AB = |\\overrightarrow{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}.$$"
            ]
          },
          {
            title: "3. Góc giữa hai vectơ trong không gian",
            badge: "Công thức Cosin",
            points: [
              "Góc $\\theta = (\\vec a, \\vec b)$ giữa hai vectơ khác $\\vec 0$ được tính qua côsin:",
              "$$\\cos \\theta = \\frac{\\vec a \\cdot \\vec b}{|\\vec a| \\cdot |\\vec b|} = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2 + y_1^2 + z_1^2} \\cdot \\sqrt{x_2^2 + y_2^2 + z_2^2}}.$$",
              "• Quy ước miền góc giữa hai vectơ: $0^\\circ \\le \\theta \\le 180^\\circ$.",
              "• Phân biệt: Góc giữa hai vectơ có thể tù (nếu tích vô hướng âm). Trong khi đó, **góc giữa hai đường thẳng** luôn là góc nhọn hoặc góc vuông ($0^\\circ \\le \\varphi \\le 90^\\circ$), công thức sẽ lấy thêm dấu trị tuyệt đối ở tử số."
            ]
          }
        ],
        quizzes: [
          {
            q: "Cho hai vectơ $\\vec a = (1; 2; -2)$ và $\\vec b = (2; -1; 1)$. Tích vô hướng $\\vec a \\cdot \\vec b$ bằng:",
            options: ["A. $-2$", "B. $2$", "C. $4$", "D. $0$"],
            correct: 0,
            explain: "Ta có $\\vec a \\cdot \\vec b = (1)(2) + (2)(-1) + (-2)(1) = 2 - 2 - 2 = -2$."
          },
          {
            q: "Độ dài của vectơ $\\vec u = (2; -3; 6)$ là:",
            options: ["A. 7", "B. 49", "C. $\\sqrt{11}$", "D. 5"],
            correct: 0,
            explain: "Độ dài $|\\vec u| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
          },
          {
            q: "Góc giữa hai vectơ $\\vec a = (1; 1; 0)$ và $\\vec b = (0; 1; 1)$ bằng:",
            options: ["A. $60^\\circ$", "B. $45^\\circ$", "C. $90^\\circ$", "D. $120^\\circ$"],
            correct: 0,
            explain: "Ta có $\\vec a \\cdot \\vec b = 1(0) + 1(1) + 0(1) = 1$. Độ dài $|\\vec a| = \\sqrt{1^2+1^2+0} = \\sqrt{2}$, $|\\vec b| = \\sqrt{0+1^2+1^2} = \\sqrt{2}$. Do đó $\\cos(\\vec a, \\vec b) = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\Rightarrow \\theta = 60^\\circ$."
          }
        ]
      },
      {
        id: "on-tap-chuong-2",
        num: "Ôn tập",
        title: "Ôn tập chương II — Cách giải hình tọa độ không gian",
        duration: "60 phút",
        objective: "Hệ thống quy trình gắn hệ trục tọa độ Oxyz vào khối đa diện thực tế để giải quyết các bài toán khoảng cách, góc, lực cân bằng và định vị không gian.",
        theorySections: [
          {
            title: "1. Phương pháp gắn trục tọa độ vào hình không gian",
            badge: "Kĩ năng then chốt",
            points: [
              "• **Bước 1 (Chọn gốc $O$):** Chọn một đỉnh có 3 cạnh đôi một vuông góc (như đỉnh góc vuông của hình hộp chữ nhật, hình lập phương, hoặc chân đường cao hình chóp vuông góc đáy).",
              "• **Bước 2 (Gán 3 trục $Ox, Oy, Oz$):** Đặt mặt đất/đáy làm mặt phẳng $(Oxy)$ với hai trục $Ox, Oy$ vuông góc; đặt phương thẳng đứng làm trục $Oz$.",
              "• **Bước 3 (Xác định tọa độ các đỉnh):** Dựa vào kích thước hình học (dài, rộng, cao) để viết tọa độ từng điểm.",
              "• **Bước 4 (Đại số hóa bài toán):** Chuyển các quan hệ hình học thuần túy (song song, vuông góc, khoảng cách, góc) thành các phép tính đại số tọa độ vectơ."
            ]
          },
          {
            title: "2. Cảnh báo lỗi đại số vectơ",
            badge: "Lưu ý",
            points: [
              "❌ **Lỗi cộng độ dài:** Tuyệt đối không nhầm $|\\vec a + \\vec b| = |\\vec a| + |\\vec b|$. Đẳng thức chỉ xảy ra khi hai vectơ cùng hướng.",
              "❌ **Lỗi góc:** Không nhầm lẫn giữa góc giữa hai vectơ (có thể tù, côsin âm) và góc giữa hai đường thẳng (luôn nhọn hoặc vuông, côsin $\\ge 0$)."
            ]
          }
        ],
        quizzes: []
      }
    ]
  },
  chuong3: {
    id: "chuong-3",
    code: "CHƯƠNG III",
    title: "Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm",
    desc: "Đo lường độ biến động và độ trải rộng của dữ liệu thực nghiệm ghép nhóm: khoảng biến thiên, khoảng tứ phân vị (nội suy), phương sai, độ lệch chuẩn và hệ số biến thiên.",
    badgeColor: "amber",
    lessons: [
      {
        id: "bai-9",
        num: "Bài 9",
        title: "Khoảng biến thiên và khoảng tứ phân vị",
        duration: "90 phút",
        objective: "Nắm vững khái niệm mẫu ghép nhóm; tính khoảng biến thiên R; thành thạo công thức nội suy tìm tứ phân vị Q1, Q2, Q3 và tính khoảng tứ phân vị Delta_Q.",
        theorySections: [
          {
            title: "1. Cấu trúc mẫu số liệu ghép nhóm",
            badge: "Khái niệm",
            points: [
              "Mẫu số liệu ghép nhóm được chia thành $k$ nhóm nửa khoảng liên tiếp $[a_1; a_2), [a_2; a_3), \\dots, [a_k; a_{k+1})$.",
              "Mỗi nhóm $i$ có **tần số** $m_i$ (số quan sát rơi vào nhóm). Tổng cỡ mẫu là $n = \\sum_{i=1}^k m_i$.",
              "**Giá trị đại diện** của nhóm $[a_i; a_{i+1})$ là trung điểm của nhóm: $x_i = \\frac{a_i + a_{i+1}}{2}$.",
              "Độ dài của mỗi nhóm là $h_i = a_{i+1} - a_i$ (thường các nhóm có cùng độ dài $h$)."
            ]
          },
          {
            title: "2. Khoảng biến thiên (Range - R)",
            badge: "Đo độ trải rộng",
            points: [
              "**Khoảng biến thiên xấp xỉ** của mẫu ghép nhóm là hiệu giữa cận trên của nhóm cuối cùng và cận dưới của nhóm đầu tiên:",
              "$$R = a_{k+1} - a_1.$$",
              "• Ý nghĩa: Đo khoảng trải rộng từ giá trị nhỏ nhất đến giá trị lớn nhất trong mẫu.",
              "• Hạn chế: Rất nhạy cảm với các giá trị ngoại lệ (giá trị bất thường quá lớn hoặc quá nhỏ ở hai đầu biên)."
            ]
          },
          {
            title: "3. Tứ phân vị & Công thức nội suy xấp xỉ",
            badge: "Công thức cốt lõi",
            points: [
              "Bộ ba tứ phân vị $Q_1, Q_2, Q_3$ chia mẫu số liệu đã sắp xếp thành 4 phần bằng nhau; $Q_2$ chính là trung vị.",
              "**Công thức nội suy tính tứ phân vị thứ $r$ ($r = 1, 2, 3$):**",
              "• Xác định nhóm chứa tứ phân vị $Q_r$: Lập bảng tần số tích lũy $cf$. Nhóm $[a_p; a_{p+1})$ là nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng $\\frac{r \\cdot n}{4}$.",
              "• Áp dụng công thức nội suy tuyến tính:",
              "$$Q_r = L + \\frac{\\frac{r \\cdot n}{4} - N_{\\text{trước}}}{m} \\cdot h,$$",
              "trong đó: $L = a_p$ là cận dưới của nhóm chứa $Q_r$; $N_{\\text{trước}}$ là tổng tần số của các nhóm đứng trước nhóm chứa $Q_r$; $m$ là tần số của nhóm chứa $Q_r$; $h$ là độ dài của nhóm đó.",
              "**Khoảng tứ phân vị (Interquartile Range - $\\Delta_Q$):**",
              "$$\\Delta_Q = Q_3 - Q_1.$$",
              "• Ý nghĩa: Đo độ phân tán của $50\\%$ số liệu nằm ở chính giữa mẫu. Không bị ảnh hưởng bởi các giá trị ngoại lệ ở hai đầu cực trị."
            ]
          }
        ],
        quizzes: [
          {
            q: "Cho mẫu số liệu ghép nhóm về thời gian tự học (giờ/tuần) của 40 học sinh: $[0; 5)$ có 4 em, $[5; 10)$ có 14 em, $[10; 15)$ có 16 em, $[15; 20)$ có 6 em. Khoảng biến thiên $R$ của mẫu ghép nhóm là:",
            options: ["A. 20 giờ", "B. 15 giờ", "C. 16 giờ", "D. 12 giờ"],
            correct: 0,
            explain: "Khoảng biến thiên của mẫu số liệu ghép nhóm tính bằng cận trên nhóm cuối trừ cận dưới nhóm đầu: $R = a_{k+1} - a_1 = 20 - 0 = 20$ giờ."
          },
          {
            q: "Nhóm chứa tứ phân vị thứ nhất $Q_1$ của mẫu gồm $n = 40$ học sinh trên là nhóm nào?",
            options: ["A. $[5; 10)$", "B. $[0; 5)$", "C. $[10; 15)$", "D. $[15; 20)$"],
            correct: 0,
            explain: "Vị trí của $Q_1$ là $\\frac{n}{4} = \\frac{40}{4} = 10$. Tần số tích lũy nhóm 1 là 4; nhóm 2 là $4 + 14 = 18 \\ge 10$. Do đó nhóm chứa $Q_1$ là nhóm thứ hai: $[5; 10)$."
          },
          {
            q: "Khoảng tứ phân vị $\\Delta_Q$ có ưu điểm nổi bật nào so với khoảng biến thiên $R$ khi đánh giá độ phân tán?",
            options: [
              "A. Không bị ảnh hưởng bởi các giá trị đột biến/ngoại lệ ở hai đầu biên",
              "B. Luôn luôn có giá trị lớn hơn khoảng biến thiên",
              "C. Dễ tính hơn không cần nội suy",
              "D. Phản ánh toàn bộ 100% dữ liệu của mẫu"
            ],
            correct: 0,
            explain: "Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ chỉ đo độ trải rộng của $50\\%$ quan sát nằm ở trung tâm mẫu số liệu, do đó nó loại bỏ hoàn toàn ảnh hưởng của các giá trị ngoại lệ quá nhỏ hoặc quá lớn ở hai đầu biên."
          }
        ]
      },
      {
        id: "bai-10",
        num: "Bài 10",
        title: "Phương sai và độ lệch chuẩn",
        duration: "90 phút",
        objective: "Nắm vững công thức tính số trung bình, phương sai, độ lệch chuẩn và hệ số biến thiên của mẫu số liệu ghép nhóm; hiểu ý nghĩa chỉ số rủi ro trong tài chính.",
        theorySections: [
          {
            title: "1. Số trung bình của mẫu ghép nhóm",
            badge: "Trung bình có trọng số",
            points: [
              "Dùng giá trị đại diện $x_i = \\frac{a_i + a_{i+1}}{2}$ cho mỗi nhóm $i$ với tần số $m_i$:",
              "$$\\bar x = \\frac{1}{n} \\sum_{i=1}^k m_i x_i = \\frac{m_1 x_1 + m_2 x_2 + \\dots + m_k x_k}{n}, \\qquad n = \\sum_{i=1}^k m_i.$$",
              "Ý nghĩa: Đại diện cho mức độ bình quân của toàn bộ mẫu số liệu ghép nhóm."
            ]
          },
          {
            title: "2. Phương sai & Độ lệch chuẩn",
            badge: "Công thức đo độ lệch",
            points: [
              "**Phương sai ($s^2$):** Đo mức độ phân tán trung bình bình phương khoảng cách từ các quan sát đến số trung bình:",
              "$$s^2 = \\frac{1}{n} \\sum_{i=1}^k m_i (x_i - \\bar x)^2 = \\frac{1}{n}\\left(\\sum_{i=1}^k m_i x_i^2\\right) - (\\bar x)^2.$$",
              "• Công thức thu gọn $\\frac{1}{n}\\sum m_i x_i^2 - \\bar x^2$ giúp tính toán nhanh và tránh tích lũy sai số làm tròn.",
              "**Độ lệch chuẩn ($s$):** Là căn bậc hai số học của phương sai:",
              "$$s = \\sqrt{s^2}.$$",
              "• Đơn vị: Phương sai mang bình phương đơn vị dữ liệu; còn độ lệch chuẩn $s$ có **cùng đơn vị** với dữ liệu gốc, giúp diễn đạt mức độ lệch điển hình quanh giá trị trung bình."
            ]
          },
          {
            title: "3. Hệ số biến thiên & Ý nghĩa thực tiễn",
            badge: "So sánh tương đối",
            points: [
              "**Hệ số biến thiên (Coefficient of Variation - $CV$):**",
              "$$CV = \\frac{s}{\\bar x} \\quad (\\text{hoặc } CV = \\frac{s}{\\bar x} \\times 100\\%).$$",
              "• Ứng dụng: Khi so sánh độ phân tán giữa hai tập dữ liệu có đơn vị đo khác nhau hoặc có giá trị trung bình $\\bar x$ chênh lệch nhau rất lớn, không thể dùng trực tiếp độ lệch chuẩn $s$ mà phải dùng hệ số biến thiên $CV$.",
              "• Ứng dụng trong tài chính & đầu tư: Độ lệch chuẩn của tỉ suất sinh lời đo lường mức độ **rủi ro** của danh mục đầu tư. Cổ phiếu có độ lệch chuẩn cao hơn nghĩa là mức dao động giá mạnh hơn, rủi ro biến động lớn hơn."
            ]
          }
        ],
        quizzes: [
          {
            q: "Nếu mỗi quan sát trong mẫu ghép nhóm đều được nhân lên 2 lần thì độ lệch chuẩn của mẫu số liệu mới sẽ thay đổi thế nào?",
            options: ["A. Tăng lên 2 lần", "B. Tăng lên 4 lần", "C. Không thay đổi", "D. Giảm đi 2 lần"],
            correct: 0,
            explain: "Khi các giá trị được nhân với hằng số $k > 0$, phương sai mới sẽ bằng $k^2 s^2$, do đó độ lệch chuẩn mới $s' = \\sqrt{k^2 s^2} = k \\cdot s$. Với $k = 2$, độ lệch chuẩn tăng 2 lần."
          },
          {
            q: "Để so sánh độ phân tán về chiều cao (tính bằng cm) và cân nặng (tính bằng kg) của một nhóm học sinh, ta nên dùng chỉ số nào?",
            options: ["A. Hệ số biến thiên $CV$", "B. Độ lệch chuẩn $s$", "C. Khoảng biến thiên $R$", "D. Phương sai $s^2$"],
            correct: 0,
            explain: "Vì chiều cao và cân nặng có đơn vị đo khác nhau (cm và kg), không thể so sánh trực tiếp độ lệch chuẩn hay phương sai. Ta bắt buộc phải dùng đại lượng phi thứ nguyên là Hệ số biến thiên $CV = s/\\bar x$."
          },
          {
            q: "Hai mã cổ phiếu A và B có cùng mức lợi nhuận trung bình hàng năm là $12\\%$. Cổ phiếu A có độ lệch chuẩn lợi nhuận là $3\\%$, cổ phiếu B có độ lệch chuẩn là $8\\%$. Nhà đầu tư ngại rủi ro nên chọn cổ phiếu nào?",
            options: [
              "A. Cổ phiếu A vì có độ lệch chuẩn nhỏ hơn, mức độ rủi ro biến động thấp hơn",
              "B. Cổ phiếu B vì dao động mạnh hơn",
              "C. Cả hai cổ phiếu có rủi ro như nhau",
              "D. Không thể kết luận"
            ],
            correct: 0,
            explain: "Trong tài chính, độ lệch chuẩn đo lường mức độ biến động quanh tỷ suất lợi nhuận kỳ vọng. Độ lệch chuẩn của A ($3\\%$) thấp hơn B ($8\\%$) nên mức độ rủi ro ít hơn, phù hợp cho nhà đầu tư ngại rủi ro."
          }
        ]
      },
      {
        id: "on-tap-chuong-3",
        num: "Ôn tập",
        title: "Ôn tập chương III — Phân tích dữ liệu ghép nhóm",
        duration: "60 phút",
        objective: "Tổng hợp mối quan hệ giữa các số đặc trưng đo độ phân tán: R mô tả 2 đầu, Delta_Q mô tả 50% ở giữa, s mô tả độ lệch quanh trung bình; thành thạo bấm máy tính thống kê.",
        theorySections: [
          {
            title: "1. Bảng so sánh 3 nhóm số đặc trưng đo độ phân tán",
            badge: "So sánh tổng hợp",
            points: [
              "• **Khoảng biến thiên $R = a_{k+1} - a_1$:** Đo phạm vi toàn bộ dữ liệu. Ưu: Dễ tính. Nhược: Cực kì nhạy với số liệu ngoại lai.",
              "• **Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$:** Đo phạm vi của $50\\%$ lõi dữ liệu trung tâm. Ưu: Vững vàng, kháng nhiễu ngoại lai. Nhược: Bỏ qua thông tin hai đầu mút.",
              "• **Phương sai $s^2$ & Độ lệch chuẩn $s$:** Tận dụng thông tin của toàn bộ mọi quan sát trong mẫu thông qua độ lệch so với trung bình $\\bar x$. Chuẩn mực trong thống kê suy diễn."
            ]
          }
        ],
        quizzes: []
      }
    ]
  }
};
