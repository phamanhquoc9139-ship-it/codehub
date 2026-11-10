const fs = require('fs');
const path = require('path');

const lessons = [
  // ========================================================
  // CHUYÊN ĐỀ 1: PHÉP BIẾN HÌNH TRONG MẶT PHẲNG
  // ========================================================
  {
    lessonNum: 1,
    id: "bai-1",
    topicNum: 1,
    topicName: "Chuyên đề 1: Phép biến hình trong mặt phẳng",
    title: "Bài 1: Phép tịnh tiến và phép đối xứng trục",
    tag: "Hình học biến hình",
    objectives: [
      "Nắm vững định nghĩa phép tịnh tiến theo vectơ $\\vec{v}$ và biểu thức tọa độ: $x' = x + a, y' = y + b$.",
      "Hiểu tính chất cơ bản của phép tịnh tiến: bảo toàn khoảng cách, biến đường thẳng thành đường thẳng song song hoặc trùng, biến đường tròn $(I; R)$ thành đường tròn $(I'; R)$.",
      "Nắm vững định nghĩa phép đối xứng trục $d$ và biểu thức tọa độ khi trục đối xứng là trục $Ox$, $Oy$ hoặc đường phân giác $y = x$.",
      "Biết cách tìm trục đối xứng của các hình học quen thuộc (tam giác cân, hình chữ nhật, hình thoi) và ứng dụng xác định điểm cực trị hình học."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-arrows-up-down-left-right"></i> Phép tịnh tiến $T_{\\vec{v}}$
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Định nghĩa:</strong> Phép tịnh tiến theo vectơ $\\vec{v}$ là quy tắc đặt tương ứng mỗi điểm $M$ với điểm $M'$ sao cho $\\vec{MM'} = \\vec{v}$. Kí hiệu $T_{\\vec{v}}(M) = M'$.</li>
            <li><strong>Biểu thức tọa độ:</strong> Với $\\vec{v} = (a, b)$, nếu $M(x, y)$ và $M'(x', y')$ thì:
              $$\\begin{cases} x' = x + a \\\\ y' = y + b \\end{cases}$$
            </li>
            <li><strong>Tính chất:</strong> Bảo toàn khoảng cách giữa hai điểm bất kì ($M'N' = MN$). Biến tam giác thành tam giác bằng nó, biến góc thành góc bằng nó.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800">
          <h4 class="font-bold text-violet-900 dark:text-violet-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-arrows-split-up-and-left"></i> Phép đối xứng trục $D_d$
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Định nghĩa:</strong> Phép đối xứng qua đường thẳng $d$ biến mỗi điểm $M$ thành $M'$ sao cho $d$ là đường trung trực của đoạn thẳng $MM'$. Kí hiệu $D_d(M) = M'$.</li>
            <li><strong>Biểu thức tọa độ đặc biệt:</strong>
              <br>- Trục $Ox$: $x' = x, y' = -y$.
              <br>- Trục $Oy$: $x' = -x, y' = y$.
              <br>- Đường phân giác $y = x$: $x' = y, y' = x$.
            </li>
            <li><strong>Tính chất:</strong> Là phép dời hình (bảo toàn khoảng cách). Biến đường tròn $(I; R)$ thành đường tròn $(I'; R)$ với $I' = D_d(I)$.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Xác định quy tắc biến đổi và vectơ / trục đối xứng",
        content: "Đối với phép tịnh tiến, tìm tọa độ vectơ chỉ phương dịch chuyển $\\vec{v} = (a, b)$. Đối với phép đối xứng trục, viết phương trình tổng quát của đường thẳng trục đối xứng $d: Ax + By + C = 0$."
      },
      {
        title: "Bước 2: Thiết lập hệ phương trình biểu thức tọa độ",
        content: "Rút tọa độ gốc $(x, y)$ theo tọa độ ảnh $(x', y')$: với phép tịnh tiến thì $x = x' - a, y = y' - b$. Với phép đối xứng trục tổng quát, tìm hình chiếu vuông góc $H$ của $M$ lên $d$, sau đó dùng công thức trung điểm $M' = 2H - M$."
      },
      {
        title: "Bước 3: Thay vào phương trình đường thẳng hoặc đường tròn để tìm ảnh",
        content: "Thay $x, y$ vào phương trình ban đầu của hình $\\mathcal{H}$ để thu được phương trình của hình ảnh $\\mathcal{H}'$, sau đó rút gọn về dạng chuẩn tắc."
      }
    ],
    practice: "Trong mặt phẳng tọa độ $Oxy$, cho đường thẳng $\\Delta: 2x - 3y + 5 = 0$ và vectơ $\\vec{v} = (2; -1)$. \n1) Viết phương trình đường thẳng $\\Delta'$ là ảnh của $\\Delta$ qua phép tịnh tiến $T_{\\vec{v}}$. \n2) Viết phương trình đường thẳng $\\Delta''$ là ảnh của $\\Delta$ qua phép đối xứng trục $Ox$.",
    quizzes: [
      {
        question: "Trong mặt phẳng Oxy, cho điểm $M(3; -2)$ và vectơ $\\vec{v} = (-1; 4)$. Ảnh của điểm $M$ qua phép tịnh tiến $T_{\\vec{v}}$ là điểm $M'$ có tọa độ nào?",
        options: [
          "$M'(2; 2)$",
          "$M'(4; -6)$",
          "$M'(-3; -8)$",
          "$M'(2; -6)$"
        ],
        correct: 0,
        explanation: "Áp dụng biểu thức tọa độ của phép tịnh tiến: $x' = x + a = 3 + (-1) = 2$ và $y' = y + b = -2 + 4 = 2$. Do đó $M'(2; 2)$."
      },
      {
        question: "Ảnh của điểm $N(-4; 5)$ qua phép đối xứng trục $Ox$ là điểm có tọa độ:",
        options: [
          "$N'(-4; -5)$",
          "$N'(4; 5)$",
          "$N'(4; -5)$",
          "$N'(5; -4)$"
        ],
        correct: 0,
        explanation: "Phép đối xứng qua trục hoành $Ox$ giữ nguyên hoành độ và đổi dấu tung độ: $x' = x = -4, y' = -y = -5$. Điểm ảnh là $(-4; -5)$."
      },
      {
        question: "Khẳng định nào sau đây là SAI về tính chất của phép tịnh tiến?",
        options: [
          "Biến đường tròn bán kính R thành đường tròn có bán kính bằng 2R",
          "Biến đường thẳng thành đường thẳng song song hoặc trùng với nó",
          "Bảo toàn khoảng cách giữa hai điểm bất kì",
          "Biến tam giác thành tam giác bằng nó"
        ],
        correct: 0,
        explanation: "Phép tịnh tiến là một phép dời hình nên bảo toàn khoảng cách, do đó nó luôn biến đường tròn $(I; R)$ thành đường tròn $(I'; R)$ có cùng bán kính $R$ chứ không thể biến thành bán kính $2R$."
      },
      {
        question: "Một hình vuông có bao nhiêu trục đối xứng?",
        options: [
          "4 trục đối xứng (2 đường chéo và 2 đường trung trực của các cạnh đối)",
          "2 trục đối xứng",
          "1 trục đối xứng",
          "Vô số trục đối xứng"
        ],
        correct: 0,
        explanation: "Hình vuông có đúng 4 trục đối xứng: 2 trục là 2 đường chéo của hình vuông và 2 trục là 2 đường trung trực của các cặp cạnh đối diện."
      }
    ]
  },

  // ========================================================
  // BÀI 2
  // ========================================================
  {
    lessonNum: 2,
    id: "bai-2",
    topicNum: 1,
    topicName: "Chuyên đề 1: Phép biến hình trong mặt phẳng",
    title: "Bài 2: Phép đối xứng tâm và phép quay",
    tag: "Hình học biến hình",
    objectives: [
      "Nắm vững định nghĩa phép đối xứng tâm $I$ và biểu thức tọa độ: $x' = 2x_0 - x, y' = 2y_0 - y$.",
      "Hiểu rõ định nghĩa phép quay quanh tâm $I$ góc lượng giác $\\alpha$: $Q_{(I, \\alpha)}$.",
      "Làm chủ công thức biến đổi tọa độ của phép quay quanh gốc tọa độ $O$ với các góc đặc biệt $\\pm 90^\\circ, 180^\\circ$.",
      "Ứng dụng phép quay và đối xứng tâm trong chứng minh hình học, tìm tâm đối xứng của hình phẳng và giải bài toán dựng hình."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-dot-circle"></i> Phép đối xứng tâm $D_I$
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Định nghĩa:</strong> Phép đối xứng qua tâm $I$ biến điểm $I$ thành chính nó, biến mỗi điểm $M \\neq I$ thành điểm $M'$ sao cho $I$ là trung điểm của đoạn thẳng $MM'$.</li>
            <li><strong>Biểu thức tọa độ:</strong> Với tâm $I(x_0, y_0)$:
              $$\\begin{cases} x' = 2x_0 - x \\\\ y' = 2y_0 - y \\end{cases}$$
              Đặc biệt với gốc tọa độ $O(0, 0)$: $x' = -x, y' = -y$.
            </li>
            <li><strong>Tính chất:</strong> Bảo toàn khoảng cách, biến đường thẳng $d$ thành đường thẳng song song hoặc trùng với $d$.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-rotate"></i> Phép quay $Q_{(I, \\alpha)}$
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Định nghĩa:</strong> Biến điểm $I$ thành $I$; biến mỗi điểm $M \\neq I$ thành $M'$ sao cho $IM' = IM$ và góc lượng giác $(IM, IM') = \\alpha$. Chiều dương là ngược chiều kim đồng hồ.</li>
            <li><strong>Quay quanh gốc $O(0, 0)$ góc $90^\\circ$:</strong> $x' = -y, y' = x$.</li>
            <li><strong>Quay quanh gốc $O(0, 0)$ góc $-90^\\circ$:</strong> $x' = y, y' = -x$.</li>
            <li><strong>Quay góc $180^\\circ$:</strong> Chính là phép đối xứng tâm $O$: $x' = -x, y' = -y$.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Xác định tâm quay/tâm đối xứng và góc quay",
        content: "Tìm tọa độ tâm biến hình $I(x_0, y_0)$ và giá trị góc quay lượng giác $\\alpha$ (chú ý dấu: quay ngược chiều kim đồng hồ là góc dương, cùng chiều kim đồng hồ là góc âm)."
      },
      {
        title: "Bước 2: Áp dụng công thức biến đổi tọa độ điểm",
        content: "Với phép đối xứng tâm: dùng hệ $x' = 2x_0 - x, y' = 2y_0 - y$. Với phép quay quanh gốc $O$ góc $\\alpha$ tổng quát: $x' = x\\cos\\alpha - y\\sin\\alpha, y' = x\\sin\\alpha + y\\cos\\alpha$."
      },
      {
        title: "Bước 3: Xác định ảnh của đối tượng hình học",
        content: "Để tìm ảnh của đường thẳng hoặc đường tròn, ta lấy các điểm đại diện đặc trưng (tâm đường tròn, bán kính, hai điểm trên đường thẳng) rồi tìm ảnh của chúng."
      }
    ],
    practice: "Trong mặt phẳng $Oxy$, cho đường tròn $(C): (x - 2)^2 + (y + 1)^2 = 16$. \n1) Tìm phương trình đường tròn $(C')$ là ảnh của $(C)$ qua phép đối xứng tâm $I(1; 2)$. \n2) Tìm phương trình đường tròn $(C'')$ là ảnh của $(C)$ qua phép quay tâm $O$ góc $90^\\circ$.",
    quizzes: [
      {
        question: "Ảnh của điểm $A(4; -3)$ qua phép đối xứng qua gốc tọa độ $O(0; 0)$ là điểm nào?",
        options: [
          "$A'(-4; 3)$",
          "$A'(-4; -3)$",
          "$A'(4; 3)$",
          "$A'(3; -4)$"
        ],
        correct: 0,
        explanation: "Phép đối xứng tâm gốc tọa độ $O$ có biểu thức: $x' = -x, y' = -y$. Với $A(4; -3)$ ta có $x' = -4, y' = 3$, tức $A'(-4; 3)$."
      },
      {
        question: "Trong mặt phẳng Oxy, cho điểm $M(2; 5)$. Ảnh của điểm $M$ qua phép quay tâm $O$ góc quay $90^\\circ$ là:",
        options: [
          "$M'(-5; 2)$",
          "$M'(5; -2)$",
          "$M'(-2; -5)$",
          "$M'(5; 2)$"
        ],
        correct: 0,
        explanation: "Công thức phép quay quanh gốc $O$ góc $90^\\circ$: $x' = -y = -5$ và $y' = x = 2$. Do đó điểm ảnh là $M'(-5; 2)$."
      },
      {
        question: "Phép quay quanh tâm $I$ với góc quay $\\alpha = 180^\\circ$ tương đương với phép biến hình nào?",
        options: [
          "Phép đối xứng tâm I",
          "Phép tịnh tiến theo vectơ 0",
          "Phép đối xứng trục qua đường thẳng bất kì qua I",
          "Phép vị tự tâm I tỉ số k = 2"
        ],
        correct: 0,
        explanation: "Quay quanh $I$ góc $180^\\circ$ biến mỗi điểm $M$ thành $M'$ sao cho $I$ là trung điểm của $MM'$, điều này hoàn toàn trùng khớp với định nghĩa của phép đối xứng tâm $I$."
      },
      {
        question: "Hình nào sau đây KHÔNG có tâm đối xứng?",
        options: [
          "Tam giác đều",
          "Hình bình hành",
          "Hình tròn",
          "Hình thoi"
        ],
        correct: 0,
        explanation: "Tam giác đều có 3 trục đối xứng nhưng không có tâm đối xứng. Hình bình hành, hình tròn, hình thoi đều có tâm đối xứng là giao điểm các đường chéo hoặc tâm đường tròn."
      }
    ]
  },

  // ========================================================
  // BÀI 3
  // ========================================================
  {
    lessonNum: 3,
    id: "bai-3",
    topicNum: 1,
    topicName: "Chuyên đề 1: Phép biến hình trong mặt phẳng",
    title: "Bài 3: Phép vị tự và phép đồng dạng",
    tag: "Hình học biến hình",
    objectives: [
      "Nắm vững định nghĩa phép vị tự tâm $I$ tỉ số $k \\neq 0$: $V_{(I, k)}(M) = M' \\Leftrightarrow \\vec{IM'} = k\\vec{IM}$.",
      "Hiểu tính chất cơ bản: biến đường thẳng thành đường thẳng song song hoặc trùng, biến đoạn thẳng độ dài $d$ thành $|k|d$, biến đường tròn $(O; R)$ thành $(O'; |k|R)$.",
      "Nắm vững định nghĩa phép đồng dạng tỉ số $k > 0$: phép biến hình bảo toàn tỉ số khoảng cách giữa hai điểm bất kì $M'N' = k MN$.",
      "Hiểu rằng mọi phép đồng dạng đều là hợp thành của một phép dời hình và một phép vị tự, biết áp dụng giải toán tỷ lệ hình học."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-expand"></i> Phép vị tự $V_{(I, k)}$ ($k \\neq 0$)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Định nghĩa:</strong> Biến điểm $I$ thành chính nó, biến mỗi điểm $M$ thành $M'$ sao cho $\\vec{IM'} = k\\vec{IM}$.</li>
            <li><strong>Biểu thức tọa độ với tâm $O(0, 0)$:</strong>
              $$\\begin{cases} x' = kx \\\\ y' = ky \\end{cases}$$
            </li>
            <li><strong>Trường hợp đặc biệt:</strong> Khi $k = 1$ là phép đồng nhất; khi $k = -1$ là phép đối xứng tâm $I$.</li>
            <li><strong>Tính chất:</strong> Biến 3 điểm thẳng hàng thành 3 điểm thẳng hàng và bảo toàn thứ tự, biến góc thành góc bằng nó, biến tam giác thành tam giác đồng dạng.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800">
          <h4 class="font-bold text-violet-900 dark:text-violet-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-vector-square"></i> Phép đồng dạng tỉ số $k > 0$
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Định nghĩa:</strong> Phép biến hình $F$ gọi là phép đồng dạng tỉ số $k$ nếu với hai điểm $M, N$ bất kì có ảnh là $M', N'$ thì $M'N' = k MN$.</li>
            <li><strong>Định lý phân tích:</strong> Mọi phép đồng dạng tỉ số $k$ đều là hợp thành của một phép dời hình và một phép vị tự tỉ số $k$ (hoặc $-k$).</li>
            <li><strong>Diện tích hình ảnh:</strong> Nếu hình $\\mathcal{H}$ có diện tích $S$ thì hình ảnh qua phép đồng dạng tỉ số $k$ có diện tích $S' = k^2 S$.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Xác định tâm vị tự I và tỉ số vị tự k",
        content: "Tìm tọa độ tâm $I(x_0, y_0)$ và giá trị số thực $k \\neq 0$. Lưu ý nếu $k > 0$, điểm ảnh $M'$ nằm cùng phía với $M$ đối với $I$; nếu $k < 0$, điểm ảnh $M'$ nằm khác phía với $M$ đối với $I$."
      },
      {
        title: "Bước 2: Tìm ảnh của các yếu tố hình học cơ bản",
        content: "Để tìm ảnh của đường tròn $(C; R)$, ta tìm ảnh của tâm $I_C' = V_{(I, k)}(I_C)$ và bán kính mới $R' = |k|R$. Để tìm ảnh của đường thẳng $d$, đường thẳng ảnh $d'$ song song hoặc trùng với $d$, ta lấy một điểm trên $d$ tìm ảnh rồi viết phương trình."
      },
      {
        title: "Bước 3: Vận dụng tính chất tỷ lệ để giải quyết bài toán",
        content: "Sử dụng tính chất tỉ số diện tích $S' = k^2 S$ và tỉ số thể tích trong không gian để tính toán định lượng hoặc giải bài toán quỹ tích."
      }
    ],
    practice: "Trong mặt phẳng tọa độ $Oxy$, cho đường tròn $(C): (x - 1)^2 + (y - 3)^2 = 4$. \n1) Tìm phương trình đường tròn $(C')$ là ảnh của $(C)$ qua phép vị tự tâm $O(0; 0)$ tỉ số $k = -2$. \n2) Cho tam giác $ABC$ có diện tích $S = 24\\text{ cm}^2$. Tính diện tích tam giác $A'B'C'$ là ảnh của $\\Delta ABC$ qua phép đồng dạng tỉ số $k = 1.5$.",
    quizzes: [
      {
        question: "Cho điểm $M(-3; 6)$. Ảnh của điểm $M$ qua phép vị tự tâm gốc tọa độ $O$ tỉ số $k = -\\frac{1}{3}$ là:",
        options: [
          "$M'(1; -2)$",
          "$M'(-1; 2)$",
          "$M'(9; -18)$",
          "$M'(-1; -2)$"
        ],
        correct: 0,
        explanation: "Áp dụng biểu thức phép vị tự tâm $O$: $x' = kx = (-\\frac{1}{3}) \\cdot (-3) = 1$ và $y' = ky = (-\\frac{1}{3}) \\cdot 6 = -2$. Do đó $M'(1; -2)$."
      },
      {
        question: "Phép vị tự tâm $I$ tỉ số $k = -3$ biến đường tròn có bán kính $R = 5$ thành đường tròn có bán kính $R'$ bằng bao nhiêu?",
        options: [
          "$R' = 15$",
          "$R' = -15$",
          "$R' = 5$",
          "$R' = 25$"
        ],
        correct: 0,
        explanation: "Bán kính mới của đường tròn được tính theo công thức độ dài bán kính dương: $R' = |k| \\cdot R = |-3| \\cdot 5 = 15$."
      },
      {
        question: "Nếu hình đa giác $\\mathcal{H}$ có diện tích $S = 10\\text{ cm}^2$, diện tích của đa giác ảnh qua phép đồng dạng tỉ số $k = 3$ là:",
        options: [
          "$90\\text{ cm}^2$",
          "$30\\text{ cm}^2$",
          "$100\\text{ cm}^2$",
          "$60\\text{ cm}^2$"
        ],
        correct: 0,
        explanation: "Qua phép đồng dạng tỉ số $k$, diện tích hình học thay đổi theo tỉ số bình phương: $S' = k^2 \\cdot S = 3^2 \\cdot 10 = 90\\text{ cm}^2$."
      },
      {
        question: "Phát biểu nào sau đây là ĐÚNG về mối quan hệ giữa phép dời hình và phép vị tự?",
        options: [
          "Phép dời hình là một trường hợp đặc biệt của phép vị tự khi tỉ số $k = 1$ hoặc $k = -1$ (đối xứng tâm)",
          "Mọi phép vị tự đều là phép dời hình",
          "Phép vị tự luôn làm thay đổi hình dạng của tam giác",
          "Phép vị tự tỉ số $k = 2$ bảo toàn diện tích"
        ],
        correct: 0,
        explanation: "Khi $k = 1$, phép vị tự là phép đồng nhất (khoảng cách giữ nguyên). Khi $k = -1$, phép vị tự là phép đối xứng tâm (cũng là phép dời hình). Vì thế phép dời hình là trường hợp đặc biệt bảo toàn khoảng cách với $|k| = 1$."
      }
    ]
  },

  // ========================================================
  // BÀI 4
  // ========================================================
  {
    lessonNum: 4,
    id: "bai-4",
    topicNum: 1,
    topicName: "Chuyên đề 1: Phép biến hình trong mặt phẳng",
    title: "Bài 4: Ứng dụng phép biến hình trong thiết kế hoa văn và hình học",
    tag: "Ứng dụng hình học",
    objectives: [
      "Hiểu rõ nguyên lý toán học của nhóm đối xứng dải hoa văn viền (Frieze groups) và lát mặt phẳng (Wallpaper groups).",
      "Nhận biết và phân tích các phép biến hình trong nghệ thuật truyền thống Việt Nam: họa tiết thổ cẩm Tây Bắc, viền gốm sứ Bát Tràng, hoa văn chim Lạc trống đồng Đông Sơn.",
      "Làm quen với nghệ thuật lát kín mặt phẳng (Tessellation) nổi tiếng của nghệ sĩ M.C. Escher bằng cách phối hợp phép tịnh tiến, phép quay và phép đối xứng trục.",
      "Vận dụng phép dời hình và phép vị tự để sáng tạo một mẫu hoa văn trang trí hình học ứng dụng trong thiết kế đồ họa hoặc kiến trúc."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-gem"></i> Dải hoa văn viền & Nhóm Frieze
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Nguyên lý:</strong> Bắt đầu từ một họa tiết cơ sở (motif), lặp lại vô hạn theo một hướng duy nhất thông qua phép tịnh tiến $T_{\\vec{v}}$.</li>
            <li><strong>Các phép biến hình kết hợp:</strong>
              <br>- Đối xứng trục dọc hoặc trục ngang.
              <br>- Đối xứng tâm (quay $180^\\circ$).
              <br>- Phép trượt đối xứng (Glide reflection): tịnh tiến kết hợp đối xứng trục song song với hướng tịnh tiến.
            </li>
            <li><strong>Toán học chứng minh:</strong> Có chính xác đúng 7 kiểu cấu trúc đối xứng dải viền (7 Frieze groups) trong hình học phẳng.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800">
          <h4 class="font-bold text-violet-900 dark:text-violet-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-shapes"></i> Nghệ thuật lát mặt phẳng (Tessellation)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Định nghĩa:</strong> Phủ kín hoàn toàn mặt phẳng bằng các hình giống nhau mà không tạo ra bất kì khe hở hay sự chồng lấn nào.</li>
            <li><strong>Đa giác đều lát phẳng:</strong> Chỉ có đúng 3 đa giác đều có thể tự lát kín mặt phẳng: Tam giác đều (góc $60^\\circ$), Hình vuông (góc $90^\\circ$) và Lục giác đều (góc $120^\\circ$), vì góc của chúng là ước của $360^\\circ$.</li>
            <li><strong>Phương pháp biến dạng Escher:</strong> Cắt một phần của cạnh hình vuông và tịnh tiến hoặc quay ghép vào cạnh đối diện để tạo ra các sinh vật kỳ thú (chim, cá, thằn lằn).</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Lựa chọn đơn vị họa tiết cơ bản (Fundamental Motif)",
        content: "Thiết kế một mảnh hình khối cơ bản (tam giác, hình vuông hoặc lục giác) chứa các nét vẽ đặc trưng làm hạt nhân sinh ra toàn bộ mẫu hoa văn."
      },
      {
        title: "Bước 2: Lựa chọn phép biến hình sinh mẫu",
        content: "Chọn vectơ tịnh tiến $\\vec{v}$ để tạo chu kỳ lặp, kết hợp trục đối xứng $d$ để tạo sự cân xứng âm - dương hoặc chọn tâm quay $O$ với góc $60^\\circ, 90^\\circ, 120^\\circ$ để tạo vòng xoáy tỏa tia."
      },
      {
        title: "Bước 3: Lập trình hóa hoặc thi công mẫu hoa văn",
        content: "Áp dụng biểu thức tọa độ để tính toán vị trí từng mắt lưới trên phần mềm đồ họa (GeoGebra, Adobe Illustrator, Canva) hoặc cắt ghép thủ công trên giấy."
      }
    ],
    practice: "Phân tích mẫu hoa văn trên mặt trống đồng Đông Sơn: Xác định tâm đối xứng, các trục đối xứng của ngôi sao trung tâm và chỉ ra phép quay nào biến cánh sao này thành cánh sao kề bên nếu ngôi sao có 14 cánh.",
    quizzes: [
      {
        question: "Tại sao hình ngũ giác đều (5 cạnh bằng nhau, 5 góc $108^\\circ$) KHÔNG THỂ lát kín một mặt phẳng mà không có khe hở?",
        options: [
          "Vì số đo góc $108^\\circ$ không phải là ước số của $360^\\circ$ (3 đỉnh ghép lại được $324^\\circ < 360^\\circ$, 4 đỉnh được $432^\\circ > 360^\\circ$)",
          "Vì hình ngũ giác đều không có trục đối xứng",
          "Vì hình ngũ giác đều có diện tích quá lớn",
          "Vì ngũ giác đều chỉ vẽ được trong không gian 3 chiều"
        ],
        correct: 0,
        explanation: "Để các đa giác đều phủ kín mặt phẳng quanh một đỉnh chung, tổng số đo các góc gặp nhau tại đỉnh đó phải đúng bằng $360^\\circ$. Với ngũ giác đều, mỗi góc là $108^\\circ$, không có số nguyên dương $n$ nào để $n \\times 108^\\circ = 360^\\circ$."
      },
      {
        question: "Trong nghệ thuật trang trí viền (Frieze patterns), phép biến hình nào là bắt buộc PHẢI CÓ trong mọi dải hoa văn?",
        options: [
          "Phép tịnh tiến dọc theo một hướng cố định",
          "Phép quay $90^\\circ$",
          "Phép vị tự tỉ số k = 3",
          "Phép đối xứng tâm gốc tọa độ"
        ],
        correct: 0,
        explanation: "Dải hoa văn viền (Frieze pattern) theo định nghĩa toán học là một cấu trúc có tính tuần hoàn 1 chiều, do đó bắt buộc phải chứa phép tịnh tiến theo hướng của dải viền."
      },
      {
        question: "Một ngôi sao có 12 cánh đối xứng tỏa tròn đều quanh tâm O. Phép quay tâm O góc nhỏ nhất bằng bao nhiêu sẽ biến cánh sao này thành cánh sao kế tiếp?",
        options: [
          "$30^\\circ$",
          "$60^\\circ$",
          "$45^\\circ$",
          "$15^\\circ$"
        ],
        correct: 0,
        explanation: "Toàn bộ đường tròn là $360^\\circ$, chia đều cho 12 cánh sao ta có góc quay giữa hai cánh sao liên tiếp là: $\\frac{360^\\circ}{12} = 30^\\circ$."
      },
      {
        question: "Phép trượt đối xứng (Glide reflection) là sự kết hợp theo thứ tự của hai phép biến hình nào?",
        options: [
          "Một phép tịnh tiến theo vectơ song song với một đường thẳng và một phép đối xứng qua chính đường thẳng đó",
          "Một phép quay $90^\\circ$ và một phép vị tự tỉ số k = 2",
          "Hai phép đối xứng tâm liên tiếp",
          "Một phép đối xứng trục và một phép chiếu vuông góc"
        ],
        correct: 0,
        explanation: "Phép trượt đối xứng là hợp thành của một phép đối xứng trục qua đường thẳng $d$ và một phép tịnh tiến theo vectơ $\\vec{v}$ song song với trục $d$."
      }
    ]
  },

  // ========================================================
  // CHUYÊN ĐỀ 2: LÀM QUEN VỚI LÝ THUYẾT ĐỒ THỊ
  // ========================================================
  {
    lessonNum: 5,
    id: "bai-5",
    topicNum: 2,
    topicName: "Chuyên đề 2: Lý thuyết đồ thị",
    title: "Bài 5: Khái niệm đồ thị, bậc của đỉnh và ma trận kề",
    tag: "Lý thuyết đồ thị",
    objectives: [
      "Nắm vững định nghĩa đồ thị vô hướng $G = (V, E)$, tập đỉnh $V$, tập cạnh $E$ và đồ thị có hướng (Digraph).",
      "Hiểu rõ khái niệm đỉnh kề, cạnh liên thuộc, khuyên (loop), đa cạnh và đồ thị đơn.",
      "Làm chủ định nghĩa bậc của đỉnh $\\text{deg}(v)$, Bổ đề bắt tay (Handshaking Lemma): $\\sum_{v \\in V} \\text{deg}(v) = 2|E|$ và hệ quả số đỉnh bậc lẻ luôn chẵn.",
      "Biết cách biểu diễn đồ thị bằng ma trận kề (Adjacency Matrix) để lưu trữ và xử lý thuật toán trên máy tính."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800">
          <h4 class="font-bold text-violet-900 dark:text-violet-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-circle-nodes"></i> Đồ thị vô hướng & Bậc của đỉnh
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Đồ thị đơn vô hướng $G = (V, E)$:</strong> $V$ là tập các đỉnh (Vertices), $E$ là tập các cạnh (Edges) nối từng cặp đỉnh phân biệt, không chứa khuyên hay cạnh lặp.</li>
            <li><strong>Bậc của đỉnh $\\text{deg}(v)$:</strong> Là số lượng cạnh liên thuộc với đỉnh $v$. Đỉnh bậc 0 gọi là đỉnh cô lập; đỉnh bậc 1 gọi là đỉnh treo.</li>
            <li><strong>Bổ đề bắt tay:</strong> Tổng bậc của tất cả các đỉnh trong đồ thị bằng hai lần số cạnh:
              $$\\sum_{v \\in V} \\text{deg}(v) = 2|E|$$
            </li>
            <li><strong>Hệ quả quan trọng:</strong> Trong mọi đồ thị vô hướng, số lượng đỉnh có bậc lẻ luôn là một số chẵn.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-table-cells"></i> Biểu diễn đồ thị bằng Ma trận kề
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Ma trận kề $A = (a_{ij})_{n \\times n}$:</strong> Với $n = |V|$ đỉnh được đánh số $1, 2, \\dots, n$.</li>
            <li>$a_{ij} = 1$ nếu có cạnh nối giữa đỉnh $i$ và đỉnh $j$; $a_{ij} = 0$ nếu không có cạnh nối.</li>
            <li><strong>Tính chất ma trận kề của đồ thị vô hướng:</strong> Luôn là ma trận đối xứng qua đường chéo chính ($a_{ij} = a_{ji}$), đường chéo chính gồm toàn số 0 ($a_{ii} = 0$).</li>
            <li>Tổng các phần tử trên hàng $i$ chính bằng bậc của đỉnh $i$: $\\sum_{j=1}^n a_{ij} = \\text{deg}(v_i)$.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Liệt kê tập đỉnh V và tập cạnh E",
        content: "Đặt tên cho các đỉnh $V = \\{1, 2, \\dots, n\\}$ hoặc $\\{A, B, C, \\dots\\}$ và ghi nhận các cặp đỉnh có nối dây cạnh $e = (u, v)$."
      },
      {
        title: "Bước 2: Tính bậc của từng đỉnh và kiểm tra Bổ đề bắt tay",
        content: "Đếm số cạnh xuất phát từ mỗi đỉnh để tìm $\\text{deg}(v)$. Cộng tổng các bậc lại và chia đôi để xác định chính xác số cạnh $|E| = \\frac{1}{2}\\sum \\text{deg}(v)$."
      },
      {
        title: "Bước 3: Lập bảng ma trận kề n x n",
        content: "Kẻ ma trận kích thước $n \\times n$. Điền số 1 vào các ô $(i, j)$ nếu có cạnh giữa $i$ và $j$, điền số 0 vào các ô còn lại và kiểm tra tính đối xứng của ma trận."
      }
    ],
    practice: "Cho đồ thị đơn $G$ có 5 đỉnh với bậc của các đỉnh lần lượt là: 2, 3, 3, 4, 2. \n1) Hãy chứng minh đồ thị này thỏa mãn Bổ đề bắt tay và tính số cạnh $|E|$ của đồ thị. \n2) Vẽ một đồ thị minh họa và viết ma trận kề của nó.",
    quizzes: [
      {
        question: "Trong một đồ thị đơn vô hướng có 6 đỉnh, tổng bậc của tất cả các đỉnh bằng 18. Số cạnh của đồ thị này là bao nhiêu?",
        options: [
          "9 cạnh",
          "18 cạnh",
          "12 cạnh",
          "6 cạnh"
        ],
        correct: 0,
        explanation: "Theo Bổ đề bắt tay: $\\sum \\text{deg}(v) = 2|E| \\Rightarrow |E| = \\frac{18}{2} = 9$ cạnh."
      },
      {
        question: "Bộ bậc nào sau đây KHÔNG THỂ là dãy bậc của các đỉnh trong một đồ thị vô hướng?",
        options: [
          "(1, 2, 3, 3, 4) - có 3 đỉnh bậc lẻ",
          "(2, 2, 4, 4, 2) - có 0 đỉnh bậc lẻ",
          "(1, 1, 2, 3, 3) - có 4 đỉnh bậc lẻ",
          "(3, 3, 3, 3, 2) - có 4 đỉnh bậc lẻ"
        ],
        correct: 0,
        explanation: "Theo hệ quả của Bổ đề bắt tay, số đỉnh có bậc lẻ trong bất kì đồ thị vô hướng nào luôn phải là một số chẵn. Bộ (1, 2, 3, 3, 4) có 3 đỉnh bậc lẻ (đỉnh có bậc 1, 3, 3) nên không thể tồn tại đồ thị như vậy."
      },
      {
        question: "Ma trận kề của một đồ thị đơn vô hướng có đặc điểm cấu trúc nào sau đây?",
        options: [
          "Là ma trận vuông đối xứng qua đường chéo chính và các phần tử trên đường chéo chính bằng 0",
          "Là ma trận tam giác trên",
          "Mọi phần tử trong ma trận đều phải bằng 1",
          "Đường chéo chính chứa toàn số 1"
        ],
        correct: 0,
        explanation: "Vì cạnh vô hướng $(i, j) = (j, i)$ nên $a_{ij} = a_{ji}$ (đối xứng). Vì đồ thị đơn không có khuyên (cạnh nối đỉnh với chính nó) nên $a_{ii} = 0$ trên đường chéo chính."
      },
      {
        question: "Một đồ thị có 10 người tham gia một buổi tiệc. Nếu mỗi người đều bắt tay với đúng 3 người khác, thì có tổng cộng bao nhiêu cái bắt tay đã diễn ra?",
        options: [
          "15 cái bắt tay",
          "30 cái bắt tay",
          "10 cái bắt tay",
          "20 cái bắt tay"
        ],
        correct: 0,
        explanation: "Mỗi người là 1 đỉnh có bậc 3. Tổng bậc của 10 đỉnh là $10 \\times 3 = 30$. Mỗi cái bắt tay tương ứng với 1 cạnh. Do đó số cái bắt tay là $\\frac{30}{2} = 15$."
      }
    ]
  },

  // ========================================================
  // BÀI 6
  // ========================================================
  {
    lessonNum: 6,
    id: "bai-6",
    topicNum: 2,
    topicName: "Chuyên đề 2: Lý thuyết đồ thị",
    title: "Bài 6: Đồ thị Euler và bài toán 7 cây cầu Königsberg",
    tag: "Lý thuyết đồ thị",
    objectives: [
      "Hiểu rõ nguồn gốc lịch sử của lý thuyết đồ thị qua bài toán 7 cây cầu thành phố Königsberg do Leonhard Euler giải quyết năm 1736.",
      "Nắm vững định nghĩa đường đi Euler (Eulerian trail) và chu trình Euler (Eulerian circuit).",
      "Làm chủ Định lý Euler: Đồ thị liên thông có chu trình Euler khi và chỉ khi mọi đỉnh đều có bậc chẵn; có đường đi Euler khi và chỉ khi có đúng 2 đỉnh bậc lẻ.",
      "Vận dụng thuật toán tìm chu trình Euler (thuật toán Fleury, thuật toán Hierholzer) vào bài toán vẽ hình một nét và tối ưu lộ trình xe quét đường."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800">
          <h4 class="font-bold text-violet-900 dark:text-violet-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-bridge"></i> Bài toán 7 cây cầu Königsberg
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Bối cảnh:</strong> Thành phố Königsberg có dòng sông Pregel chia thành 4 vùng đất, kết nối với nhau bởi 7 cây cầu.</li>
            <li><strong>Câu hỏi đặt ra:</strong> Có thể xuất phát từ một vùng đất, đi qua tất cả 7 cây cầu đúng một lần duy nhất rồi quay về điểm ban đầu không?</li>
            <li><strong>Lời giải của Euler (1736):</strong> Chuyển 4 vùng đất thành 4 đỉnh, 7 cây cầu thành 7 cạnh. Bậc của 4 đỉnh lần lượt là: 3, 3, 3, 5 (toàn bậc lẻ).</li>
            <li><strong>Kết luận:</strong> Không thể tồn tại chuyến đi như vậy, vì mỗi lần đi vào một đỉnh rồi đi ra sẽ tiêu tốn 2 cạnh (cần bậc chẵn).</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-infinity"></i> Định lý Euler về Đồ thị Euler
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Chu trình Euler:</strong> Chu trình khép kín đi qua mọi cạnh của đồ thị đúng một lần. Đồ thị chứa chu trình Euler gọi là <em>đồ thị Euler</em>.</li>
            <li><strong>Định lý 1 (Chu trình Euler):</strong> Đồ thị liên thông $G$ là đồ thị Euler $\\Leftrightarrow$ Mọi đỉnh của $G$ đều có bậc chẵn.</li>
            <li><strong>Định lý 2 (Đường đi Euler - Nửa Euler):</strong> Đồ thị liên thông $G$ có đường đi Euler (không khép kín) $\\Leftrightarrow$ $G$ có đúng 2 đỉnh bậc lẻ. Đường đi bắt đầu tại một đỉnh bậc lẻ và kết thúc tại đỉnh bậc lẻ còn lại.</li>
            <li><strong>Ứng dụng:</strong> Bài toán vẽ một nét (không nhấc bút, không đè nét), tối ưu hành trình xe quét rác đường phố.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Kiểm tra tính liên thông của đồ thị",
        content: "Đảm bảo rằng tất cả các cạnh của đồ thị thuộc về cùng một thành phần liên thông (không có các cạnh bị cô lập tách rời nhau)."
      },
      {
        title: "Bước 2: Đếm bậc của tất cả các đỉnh",
        content: "Tính $\\text{deg}(v)$ cho từng đỉnh. Đếm số lượng đỉnh có bậc lẻ ($k$): \n- Nếu $k = 0$: Đồ thị là đồ thị Euler (có chu trình Euler khép kín). \n- Nếu $k = 2$: Đồ thị là nửa Euler (có đường đi Euler mở). \n- Nếu $k > 2$ hoặc $k = 1$: Không tồn tại đường đi hay chu trình Euler."
      },
      {
        title: "Bước 3: Xây dựng hành trình bằng thuật toán Fleury",
        content: "Bắt đầu từ đỉnh bậc lẻ (nếu có) hoặc đỉnh bất kì. Khi đi qua các cạnh, không bao giờ đi qua cầu (cạnh mà khi bỏ đi làm đồ thị mất liên thông) trừ khi không còn sự lựa chọn nào khác."
      }
    ],
    practice: "Xét hình vẽ phong bì thư quen thuộc (hình chữ nhật có 2 đường chéo ở nắp trên và đường chéo đáy). \n1) Hãy mô hình hóa hình vẽ thành đồ thị và tính bậc của từng đỉnh. \n2) Hình phong bì thư có thể vẽ được bằng đúng một nét mà không nhấc bút không? Nếu có, nét vẽ phải bắt đầu và kết thúc ở những điểm nào?",
    quizzes: [
      {
        question: "Đồ thị liên thông G có chu trình Euler khi và chỉ khi thỏa mãn điều kiện nào?",
        options: [
          "Tất cả các đỉnh của G đều có bậc chẵn",
          "Đồ thị có đúng 2 đỉnh bậc lẻ",
          "Số đỉnh bằng số cạnh",
          "Đồ thị có ít nhất một đỉnh bậc 0"
        ],
        correct: 0,
        explanation: "Theo Định lý Euler, một đồ thị liên thông có chu trình Euler khi và chỉ khi mọi đỉnh của nó đều có bậc chẵn (để mỗi lần vào một đỉnh bằng một cạnh thì có một cạnh khác đi ra)."
      },
      {
        question: "Một hình vẽ có thể vẽ được bằng một nét liền (không nhấc bút, không vẽ lại cạnh nào) khi đồ thị biểu diễn nó có:",
        options: [
          "Có 0 đỉnh bậc lẻ hoặc có đúng 2 đỉnh bậc lẻ",
          "Có đúng 3 đỉnh bậc lẻ",
          "Có 4 đỉnh bậc lẻ",
          "Số đỉnh bậc lẻ tùy ý"
        ],
        correct: 0,
        explanation: "Hình vẽ một nét tương ứng với đường đi Euler (có đúng 2 đỉnh bậc lẻ) hoặc chu trình Euler (có 0 đỉnh bậc lẻ, chu trình khép kín)."
      },
      {
        question: "Trong bài toán 7 cây cầu Königsberg, tại sao người dân không thể tìm được chuyến đi qua mỗi cây cầu đúng một lần?",
        options: [
          "Vì cả 4 vùng đất đều có bậc lẻ (3, 3, 3, 5), vượt quá số lượng tối đa 2 đỉnh bậc lẻ cho phép",
          "Vì các cây cầu bắc qua sông quá dài",
          "Vì có một vùng đất bị cô lập không có cầu",
          "Vì số lượng cây cầu là 7 không chia hết cho 2"
        ],
        correct: 0,
        explanation: "Đồ thị mô tả thành phố có 4 đỉnh và cả 4 đỉnh đều có bậc lẻ. Để có đường đi Euler chỉ được phép có tối đa 2 đỉnh bậc lẻ, do đó không thể tồn tại hành trình đi qua mỗi cầu đúng 1 lần."
      },
      {
        question: "Cho đồ thị liên thông G có 2 đỉnh bậc 3 và 4 đỉnh bậc 4. Khẳng định nào sau đây là ĐÚNG?",
        options: [
          "G có đường đi Euler nhưng không có chu trình Euler",
          "G có chu trình Euler",
          "G không có đường đi Euler",
          "G là cây"
        ],
        correct: 0,
        explanation: "G có đúng 2 đỉnh bậc lẻ (bậc 3), các đỉnh còn lại bậc chẵn (bậc 4). Do đó theo Định lý Euler, G có đường đi Euler xuất phát từ một đỉnh bậc 3 và kết thúc ở đỉnh bậc 3 kia, nhưng không có chu trình Euler khép kín."
      }
    ]
  },

  // ========================================================
  // BÀI 7
  // ========================================================
  {
    lessonNum: 7,
    id: "bai-7",
    topicNum: 2,
    topicName: "Chuyên đề 2: Lý thuyết đồ thị",
    title: "Bài 7: Đồ thị Hamilton và bài toán người bán hàng (TSP)",
    tag: "Lý thuyết đồ thị",
    objectives: [
      "Hiểu rõ sự khác biệt bản chất giữa Đồ thị Euler (đi qua mọi cạnh) và Đồ thị Hamilton (đi qua mọi đỉnh).",
      "Nắm vững định nghĩa đường đi Hamilton (Hamiltonian path) và chu trình Hamilton (Hamiltonian cycle).",
      "Hiểu định lý Dirac (1952) về điều kiện đủ để đồ thị có chu trình Hamilton: $n \\ge 3$ và $\\text{deg}(v) \\ge \\frac{n}{2}$ với mọi đỉnh.",
      "Làm quen với Bài toán Người bán hàng (Travelling Salesperson Problem - TSP), hiểu bản chất NP-hard và tiếp cận thuật toán xấp xỉ láng giềng gần nhất (Nearest Neighbor)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800">
          <h4 class="font-bold text-violet-900 dark:text-violet-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-route"></i> Chu trình Hamilton
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Định nghĩa:</strong> Đường đi qua tất cả các <em>đỉnh</em> của đồ thị đúng một lần gọi là đường đi Hamilton. Nếu điểm đầu trùng với điểm cuối thì gọi là <strong>chu trình Hamilton</strong>.</li>
            <li><strong>Đồ thị Hamilton:</strong> Đồ thị chứa chu trình Hamilton.</li>
            <li><strong>So sánh Euler vs Hamilton:</strong> Euler quan tâm tới việc đi qua mọi <em>cạnh</em>; Hamilton quan tâm tới việc viếng thăm mọi <em>đỉnh</em>.</li>
            <li><strong>Định lý Dirac (1952):</strong> Cho đồ thị đơn $G$ có $n \\ge 3$ đỉnh. Nếu mỗi đỉnh $v$ đều có bậc $\\text{deg}(v) \\ge \\frac{n}{2}$ thì $G$ chắc chắn chứa chu trình Hamilton.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-truck-fast"></i> Bài toán Người bán hàng (TSP)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Bài toán:</strong> Cho $n$ thành phố với khoảng cách/chi phí giữa các cặp thành phố. Một người bán hàng cần xuất phát từ thành phố quê hương, đi thăm mỗi thành phố đúng một lần rồi quay về với tổng chi phí nhỏ nhất.</li>
            <li><strong>Độ phức tạp tính toán:</strong> Số lượng hành trình ứng viên là $\\frac{(n-1)!}{2}$. Với $n = 20$, số phương án lên tới hơn $6 \\times 10^{16}$ (bùng nổ tổ hợp, bài toán NP-hard).</li>
            <li><strong>Thuật toán xấp xỉ Láng giềng gần nhất (Nearest Neighbor Heuristic):</strong> Tại mỗi bước, luôn chọn thành phố chưa viếng thăm gần nhất với vị trí hiện tại.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Kiểm tra các điều kiện nhận biết chu trình Hamilton",
        content: "Kiểm tra đồ thị có đỉnh bậc 1 không (nếu có đỉnh bậc 1 thì chắc chắn không có chu trình Hamilton). Áp dụng định lý Dirac: kiểm tra xem bậc của mọi đỉnh có đạt tối thiểu $\\frac{n}{2}$ không."
      },
      {
        title: "Bước 2: Tìm chu trình Hamilton trên đồ thị cụ thể",
        content: "Sử dụng phương pháp thử - quay lui: liệt kê các nhánh đi qua các đỉnh chưa thăm, đảm bảo không bỏ sót đỉnh nào và có cạnh khép kín về đỉnh xuất phát."
      },
      {
        title: "Bước 3: Giải bài toán TSP bằng thuật toán láng giềng gần nhất",
        content: "Khởi đầu tại đỉnh $S$. Chọn cạnh có trọng số nhỏ nhất nối tới đỉnh chưa thăm. Lặp lại cho đến khi đủ $n$ đỉnh, sau đó cộng thêm trọng số cạnh quay về $S$ để tính tổng chi phí."
      }
    ],
    practice: "Cho 4 thành phố A, B, C, D với ma trận khoảng cách (km) như sau: \n$d(A, B) = 10, d(A, C) = 15, d(A, D) = 20, d(B, C) = 35, d(B, D) = 25, d(C, D) = 30$. \n1) Hãy liệt kê tất cả các chu trình Hamilton xuất phát từ A và quay về A. \n2) Tìm chu trình có tổng quãng đường ngắn nhất giải bài toán TSP.",
    quizzes: [
      {
        question: "Sự khác biệt cốt lõi giữa chu trình Euler và chu trình Hamilton là gì?",
        options: [
          "Chu trình Euler đi qua mỗi cạnh đúng 1 lần; Chu trình Hamilton đi qua mỗi đỉnh đúng 1 lần",
          "Chu trình Euler chỉ áp dụng cho đồ thị có hướng; Chu trình Hamilton cho đồ thị vô hướng",
          "Chu trình Euler có độ phức tạp cao hơn chu trình Hamilton",
          "Chu trình Hamilton luôn dài hơn chu trình Euler"
        ],
        correct: 0,
        explanation: "Chu trình Euler yêu cầu đi qua tất cả các cạnh đúng 1 lần (các đỉnh có thể lặp lại nhiều lần). Ngược lại, chu trình Hamilton yêu cầu viếng thăm mọi đỉnh đúng 1 lần duy nhất."
      },
      {
        question: "Theo định lý Dirac, một đồ thị đơn có 6 đỉnh chắc chắn chứa chu trình Hamilton nếu bậc của mỗi đỉnh tối thiểu bằng:",
        options: [
          "3",
          "2",
          "4",
          "5"
        ],
        correct: 0,
        explanation: "Định lý Dirac yêu cầu $\\text{deg}(v) \\ge \\frac{n}{2}$. Với $n = 6$, bậc của mỗi đỉnh phải thỏa mãn $\\text{deg}(v) \\ge \\frac{6}{2} = 3$."
      },
      {
        question: "Nếu một đồ thị đơn vô hướng có một đỉnh treo (đỉnh có bậc 1) thì đồ thị đó có chu trình Hamilton không?",
        options: [
          "Chắc chắn không có chu trình Hamilton",
          "Luôn có chu trình Hamilton",
          "Chỉ có chu trình Hamilton nếu số đỉnh là số chẵn",
          "Chỉ có khi đồ thị là đồ thị phẳng"
        ],
        correct: 0,
        explanation: "Trong một chu trình khép kín, mỗi đỉnh được viếng thăm phải có ít nhất 1 cạnh đi vào và 1 cạnh đi ra phân biệt (bậc tối thiểu là 2). Đỉnh bậc 1 không thể vừa vào vừa ra nên không thể nằm trên chu trình Hamilton."
      },
      {
        question: "Trong bài toán Người bán hàng (TSP) hoàn chỉnh với n = 5 thành phố, có bao nhiêu chu trình Hamilton phân biệt (không phân biệt chiều quay)?",
        options: [
          "12 chu trình",
          "24 chu trình",
          "120 chu trình",
          "60 chu trình"
        ],
        correct: 0,
        explanation: "Số lượng chu trình Hamilton phân biệt trong đồ thị đầy đủ $K_n$ là $\\frac{(n-1)!}{2}$. Với $n = 5$, ta có $\\frac{(5-1)!}{2} = \\frac{4!}{2} = \\frac{24}{2} = 12$ chu trình."
      }
    ]
  },

  // ========================================================
  // BÀI 8
  // ========================================================
  {
    lessonNum: 8,
    id: "bai-8",
    topicNum: 3,
    topicName: "Chuyên đề 3: Thuật toán đồ thị & Vẽ kỹ thuật",
    title: "Bài 8: Cây khung nhỏ nhất và thuật toán Kruskal",
    tag: "Thuật toán tối ưu",
    objectives: [
      "Nắm vững định nghĩa Cây (Tree): đồ thị vô hướng liên thông không chứa chu trình.",
      "Hiểu các tính chất cơ bản của cây: có đúng $n - 1$ cạnh với $n$ đỉnh, giữa hai đỉnh bất kì luôn có duy nhất một đường đi đơn.",
      "Nắm vững khái niệm Cây khung (Spanning tree) của đồ thị liên thông và bài toán Cây khung nhỏ nhất (Minimum Spanning Tree - MST).",
      "Làm chủ Thuật toán tham lam Kruskal: sắp xếp các cạnh tăng dần, bổ sung cạnh không tạo chu trình để tối ưu mạng lưới đường dây truyền tải điện, cáp mạng."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-network-wired"></i> Khái niệm Cây & Cây khung
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Định nghĩa Cây:</strong> Là đồ thị vô hướng liên thông và không chứa bất kì chu trình nào.</li>
            <li><strong>Định lý tương đương:</strong> Cho đồ thị $G$ có $n$ đỉnh. $G$ là cây khi và chỉ khi $G$ liên thông và có đúng $n - 1$ cạnh ($|E| = |V| - 1$).</li>
            <li><strong>Cây khung (Spanning Tree):</strong> Là một đồ thị con của $G$, chứa tất cả $n$ đỉnh của $G$ và là một cây. Mọi đồ thị liên thông đều chứa ít nhất một cây khung.</li>
            <li><strong>Trọng số cây khung:</strong> Tổng trọng số của tất cả các cạnh thuộc cây khung đó: $W(T) = \\sum_{e \\in T} w(e)$.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-diagram-project"></i> Thuật toán Kruskal (MST)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Chiến lược tham lam (Greedy Strategy):</strong> Luôn ưu tiên chọn cạnh có chi phí rẻ nhất có thể mà không gây ra xung đột chu trình.</li>
            <li><strong>Các bước thực hiện:</strong>
              <br>1. Sắp xếp danh sách tất cả các cạnh theo thứ tự trọng số tăng dần.
              <br>2. Khởi tạo rừng cây gồm $n$ đỉnh rời rạc (tập cây rỗng $T = \\emptyset$).
              <br>3. Lần lượt duyệt từng cạnh: nếu cạnh nối hai đỉnh thuộc hai thành phần liên thông khác nhau (không tạo chu trình), nạp cạnh vào $T$.
              <br>4. Dừng khi $T$ gom đủ $n - 1$ cạnh.
            </li>
            <li><strong>Tính tối ưu:</strong> Thuật toán luôn đảm bảo tìm được cây khung có tổng trọng số nhỏ nhất tuyệt đối.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Lập bảng trọng số các cạnh và sắp xếp tăng dần",
        content: "Liệt kê toàn bộ các cạnh của đồ thị kèm trọng số tương ứng $w(e)$, sau đó xếp thứ tự từ cạnh có trọng số bé nhất đến lớn nhất."
      },
      {
        title: "Bước 2: Lựa chọn cạnh theo nguyên tắc không tạo chu trình",
        content: "Chọn cạnh nhỏ nhất đầu tiên. Tiếp tục xem xét các cạnh kế tiếp: nếu việc thêm cạnh tạo thành một vòng khép kín (chu trình) giữa các đỉnh đã chọn thì bỏ qua cạnh đó."
      },
      {
        title: "Bước 3: Dừng thuật toán và tính tổng trọng số MST",
        content: "Khi số cạnh được chọn đạt đúng $n - 1$ (với $n$ là số đỉnh của đồ thị), kết thúc thuật toán. Cộng tổng trọng số của các cạnh đã chọn để được chi phí tối ưu."
      }
    ],
    practice: "Một công ty viễn thông cần lắp đặt cáp quang kết nối 5 tòa nhà $A, B, C, D, E$ với chi phí dự kiến giữa các tòa nhà: \n$AB=4, AC=2, BC=1, BD=5, CD=8, CE=10, DE=2, BE=6$. \nÁp dụng thuật toán Kruskal để tìm sơ đồ lắp đặt cáp quang có tổng chi phí thấp nhất và tính tổng chi phí đó.",
    quizzes: [
      {
        question: "Một cây có 10 đỉnh thì có chính xác bao nhiêu cạnh?",
        options: [
          "9 cạnh",
          "10 cạnh",
          "11 cạnh",
          "45 cạnh"
        ],
        correct: 0,
        explanation: "Theo định lý cơ bản của lý thuyết đồ thị, một cây có $n$ đỉnh luôn có chính xác $n - 1$ cạnh. Với $n = 10$, số cạnh là $10 - 1 = 9$ cạnh."
      },
      {
        question: "Trong thuật toán Kruskal tìm cây khung nhỏ nhất, điều kiện để chấp nhận thêm một cạnh vào tập nghiệm là gì?",
        options: [
          "Cạnh đó có trọng số nhỏ nhất trong số các cạnh chưa xét và không tạo thành chu trình với các cạnh đã chọn",
          "Cạnh đó phải nối với đỉnh có bậc lớn nhất",
          "Cạnh đó phải đi qua gốc tọa độ",
          "Cạnh đó phải có trọng số lớn hơn trung bình cộng"
        ],
        correct: 0,
        explanation: "Thuật toán Kruskal duyệt các cạnh từ nhỏ đến lớn và chỉ nhận cạnh nếu nó không tạo chu trình khép kín với các cạnh đã chọn trước đó."
      },
      {
        question: "Ứng dụng thực tế nổi bật nhất của bài toán Cây khung nhỏ nhất (MST) là gì?",
        options: [
          "Thiết kế mạng lưới cấp nước, đường dây điện cao thế hoặc cáp mạng Internet kết nối các trạm với tổng chiều dài đường dây ngắn nhất",
          "Xếp hàng mua vé tàu tự động",
          "Vẽ tranh chân dung bằng máy tính",
          "Phân loại thư rác trong email"
        ],
        correct: 0,
        explanation: "Cây khung nhỏ nhất giải quyết bài toán kết nối tất cả các điểm mạng (thành phố, trạm biến áp, máy tính) sao cho mạng liên thông hoàn toàn mà tổng chi phí/chiều dài dây dẫn là nhỏ nhất."
      },
      {
        question: "Nếu một đồ thị liên thông có 6 đỉnh và 8 cạnh, để tạo thành một cây khung thì cần loại bỏ bao nhiêu cạnh?",
        options: [
          "3 cạnh",
          "2 cạnh",
          "1 cạnh",
          "4 cạnh"
        ],
        correct: 0,
        explanation: "Cây khung của đồ thị có 6 đỉnh cần đúng $6 - 1 = 5$ cạnh. Đồ thị hiện có 8 cạnh, vì vậy cần loại bỏ $8 - 5 = 3$ cạnh (phá vỡ các chu trình)."
      }
    ]
  },

  // ========================================================
  // BÀI 9
  // ========================================================
  {
    lessonNum: 9,
    id: "bai-9",
    topicNum: 3,
    topicName: "Chuyên đề 3: Thuật toán đồ thị & Vẽ kỹ thuật",
    title: "Bài 9: Thuật toán tìm đường đi ngắn nhất Dijkstra",
    tag: "Thuật toán tối ưu",
    objectives: [
      "Hiểu rõ bài toán tìm đường đi ngắn nhất giữa hai đỉnh trên đồ thị có trọng số không âm.",
      "Làm chủ nguyên lý hoạt động của Thuật toán Dijkstra (1959): hàm khoảng cách nhãn $d(v)$, kỹ thuật nới lỏng cạnh (Relaxation).",
      "Thực hiện thành thạo từng bước cập nhật bảng Dijkstra để tìm đường đi ngắn nhất và vết đường đi từ nguồn $S$ tới tất cả các đỉnh khác.",
      "Hiểu ứng dụng của thuật toán Dijkstra trong hệ thống định vị GPS, Google Maps và giao thức định tuyến mạng OSPF."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-map-location-dot"></i> Thuật toán Dijkstra (1959)
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Điều kiện áp dụng:</strong> Đồ thị có trọng số không âm trên tất cả các cạnh ($w(u, v) \\ge 0$).</li>
            <li><strong>Ý tưởng:</strong> Duy trì nhãn khoảng cách $d(v)$ là độ dài đường đi ngắn nhất tạm thời từ đỉnh xuất phát $s$ tới $v$. Khởi tạo $d(s) = 0$ và $d(v) = +\\infty$ với mọi $v \\neq s$.</li>
            <li><strong>Kỹ thuật nới lỏng (Relaxation):</strong> Nếu chọn đỉnh $u$ có $d(u)$ nhỏ nhất chưa chốt, với mỗi đỉnh kề $v$, nếu $d(u) + w(u, v) < d(v)$ thì cập nhật:
              $$d(v) = d(u) + w(u, v)$$
              và lưu đỉnh liền trước $\\text{previous}[v] = u$.
            </li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-compass"></i> Bảng theo dõi & Truy vết đường đi
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Cấu trúc bảng:</strong> Mỗi hàng biểu thị một bước lặp; các cột tương ứng với các đỉnh của đồ thị.</li>
            <li><strong>Chốt nhãn cố định:</strong> Đỉnh nào được chọn có $d(u)$ nhỏ nhất sẽ được đánh dấu vĩnh viễn (đã tối ưu hoàn toàn).</li>
            <li><strong>Truy vết ngược (Backtracking):</strong> Sau khi tới đỉnh đích $T$, lần ngược theo mảng $\\text{previous}$ từ $T$ về lại $s$ để chỉ ra lộ trình chi tiết các chặng dừng.</li>
            <li><strong>Ứng dụng:</strong> Tìm đường đi nhanh nhất tránh kẹt xe trên Google Maps, truyền gói tin Internet qua router.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Khởi tạo nhãn khoảng cách và tập đỉnh chưa duyệt",
        content: "Đặt $d(S) = 0$, mọi đỉnh khác $d(v) = \\infty$. Đặt tập đỉnh chưa duyệt $Q = V$."
      },
      {
        title: "Bước 2: Chọn đỉnh u có nhãn d(u) nhỏ nhất trong Q",
        content: "Lấy $u$ ra khỏi $Q$ (chốt nhãn vĩnh viễn). Nếu $u$ chính là đỉnh đích $T$, ta có thể dừng thuật toán sớm."
      },
      {
        title: "Bước 3: Nới lỏng (Relax) khoảng cách tới các đỉnh lân cận",
        content: "Với mỗi đỉnh $v \\in Q$ kề với $u$: kiểm tra nếu $d(u) + w(u, v) < d(v)$ thì gán $d(v) = d(u) + w(u, v)$ và ghi nhận đỉnh trước $p(v) = u$. Lặp lại Bước 2 cho tới khi $Q$ rỗng."
      }
    ],
    practice: "Cho mạng lưới giao thông gồm các nút giao $A, B, C, D, E$ với trọng số (thời gian di chuyển tính bằng phút): \n$A-B: 4$, $A-C: 2$, $B-C: 1$, $B-D: 5$, $C-D: 8$, $C-E: 10$, $D-E: 2$. \nÁp dụng thuật toán Dijkstra để tìm đường đi ngắn nhất từ nút giao A đến nút giao E và vẽ sơ đồ vết đường đi.",
    quizzes: [
      {
        question: "Thuật toán Dijkstra yêu cầu điều kiện bắt buộc nào đối với trọng số của các cạnh?",
        options: [
          "Trọng số trên các cạnh phải không âm ($w(e) \\ge 0$)",
          "Trọng số phải là các số nguyên dương lẻ",
          "Đồ thị phải là đồ thị phẳng",
          "Số đỉnh phải nhỏ hơn 100"
        ],
        correct: 0,
        explanation: "Thuật toán Dijkstra dựa trên tính chất tham lam rằng khoảng cách tới các đỉnh đã chốt sẽ không bao giờ giảm đi. Nếu có cạnh trọng số âm, giả định này bị phá vỡ và thuật toán có thể cho kết quả sai (khi đó phải dùng thuật toán Bellman-Ford)."
      },
      {
        question: "Khi khởi tạo thuật toán Dijkstra với đỉnh nguồn S, nhãn khoảng cách d(S) và d(v) của các đỉnh v khác S được gán bằng bao nhiêu?",
        options: [
          "$d(S) = 0$ và $d(v) = +\\infty$",
          "$d(S) = +\\infty$ và $d(v) = 0$",
          "$d(S) = 1$ và $d(v) = 0$",
          "$d(S) = 0$ và $d(v) = 0$"
        ],
        correct: 0,
        explanation: "Khoảng cách từ nguồn tới chính nó ban đầu là 0 ($d(S) = 0$), còn tới các đỉnh chưa biết được giả định là vô cực ($+\\infty$)."
      },
      {
        question: "Trong quá trình nới lỏng (relaxation), nếu $d(u) = 5$, cạnh $(u, v)$ có trọng số $w(u, v) = 3$ và nhãn hiện tại $d(v) = 10$, giá trị mới của $d(v)$ sẽ là:",
        options: [
          "8",
          "10",
          "5",
          "3"
        ],
        correct: 0,
        explanation: "Vì $d(u) + w(u, v) = 5 + 3 = 8 < 10$, nên nhãn của $v$ được cập nhật giảm xuống giá trị mới tối ưu hơn là 8."
      },
      {
        question: "Giao thức định tuyến phổ biến nào trên mạng Internet ứng dụng trực tiếp thuật toán Dijkstra?",
        options: [
          "OSPF (Open Shortest Path First)",
          "FTP (File Transfer Protocol)",
          "HTTP (Hypertext Transfer Protocol)",
          "DNS (Domain Name System)"
        ],
        correct: 0,
        explanation: "Giao thức định tuyến nội bộ OSPF sử dụng thuật toán Dijkstra để mỗi bộ định tuyến (router) tự tính toán bảng đường đi ngắn nhất tới các mạng đích trong hệ thống mạng tự trị."
      }
    ]
  },

  // ========================================================
  // CHUYÊN ĐỀ 3: MỘT SỐ YẾU TỐ VẼ KĨ THUẬT
  // ========================================================
  {
    lessonNum: 10,
    id: "bai-10",
    topicNum: 3,
    topicName: "Chuyên đề 3: Thuật toán đồ thị & Vẽ kỹ thuật",
    title: "Bài 10: Hình chiếu vuông góc (Hình chiếu đứng, bằng, cạnh)",
    tag: "Vẽ kỹ thuật",
    objectives: [
      "Hiểu rõ nguyên lý của phép chiếu vuông góc trong không gian: tia chiếu vuông góc với mặt phẳng hình chiếu.",
      "Làm chủ Phương pháp góc chiếu thứ nhất (TCVN & ISO): Vị trí tương đối và ý nghĩa của 3 mặt phẳng hình chiếu.",
      "Nắm vững mối quan hệ giữa 3 hình chiếu: Hình chiếu đứng (chiều dài, chiều cao), Hình chiếu bằng (chiều dài, chiều rộng) và Hình chiếu cạnh (chiều rộng, chiều cao).",
      "Vẽ được 3 hình chiếu vuông góc của các khối hình học cơ bản (khối đa diện, khối lăng trụ, khối tròn xoay có bậc và lỗ rỗng)."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-cube"></i> Hệ thống 3 mặt phẳng hình chiếu
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Mặt phẳng hình chiếu đứng $(P_1)$:</strong> Nằm chính diện trước mắt người quan sát. Cho <strong>Hình chiếu đứng</strong> (Front view) thể hiện chiều dài và chiều cao.</li>
            <li><strong>Mặt phẳng hình chiếu bằng $(P_2)$:</strong> Nằm ngang bên dưới vật thể. Cho <strong>Hình chiếu bằng</strong> (Top view) thể hiện chiều dài và chiều rộng.</li>
            <li><strong>Mặt phẳng hình chiếu cạnh $(P_3)$:</strong> Nằm ở phía bên phải (chiếu từ bên trái qua). Cho <strong>Hình chiếu cạnh</strong> (Side/Left view) thể hiện chiều rộng và chiều cao.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-ruler-combined"></i> Quy tắc bố trí bản vẽ theo TCVN
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Vị trí tiêu chuẩn:</strong>
              <br>- Hình chiếu bằng nằm ngay <em>bên dưới</em> hình chiếu đứng.
              <br>- Hình chiếu cạnh nằm ngay <em>bên phải</em> hình chiếu đứng.
            </li>
            <li><strong>Quy ước đường nét:</strong>
              <br>- Nét liền đậm: vẽ đường bao thấy, cạnh thấy của vật thể.
              <br>- Nét đứt mảnh: vẽ đường bao khuất, cạnh khuất bên trong.
              <br>- Nét gạch chấm mảnh: vẽ trục đối xứng, tâm đường tròn.
            </li>
            <li><strong>Đường gióng liên hệ:</strong> Dóng thẳng đứng giữa hình chiếu đứng và hình chiếu bằng; dóng nằm ngang giữa hình chiếu đứng và hình chiếu cạnh.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Phân tích hình dạng vật thể và chọn hướng chiếu chính",
        content: "Chọn hướng chiếu từ trước sao cho hình chiếu đứng thể hiện được nhiều đường nét đặc trưng và kích thước quan trọng nhất của vật thể."
      },
      {
        title: "Bước 2: Vẽ hình chiếu đứng và dóng các đường chuẩn",
        content: "Vẽ khung bao hình chiếu đứng với chiều dài $L$ và chiều cao $H$. Kẻ các đường gióng dọc xuống dưới cho hình chiếu bằng và dóng ngang sang phải cho hình chiếu cạnh."
      },
      {
        title: "Bước 3: Hoàn thiện hình chiếu bằng, cạnh và phân loại nét vẽ",
        content: "Vẽ hình chiếu bằng với chiều dài $L$ và chiều rộng $W$. Vẽ hình chiếu cạnh với chiều rộng $W$ và chiều cao $H$. Tô đậm các nét thấy, vẽ nét đứt cho cạnh khuất và vẽ trục đối xứng."
      }
    ],
    practice: "Cho một khối chữ L có kích thước: dài 60mm, rộng 40mm, cao 50mm, bậc khuyết góc có kích thước dài 30mm, cao 25mm. Hãy vẽ phác 3 hình chiếu vuông góc (đứng, bằng, cạnh) của vật thể này với đầy đủ các đường gióng tỷ lệ.",
    quizzes: [
      {
        question: "Theo tiêu chuẩn TCVN về phương pháp góc chiếu thứ nhất, vị trí của Hình chiếu bằng được bố trí ở đâu so với Hình chiếu đứng?",
        options: [
          "Nằm ở ngay phía dưới hình chiếu đứng",
          "Nằm ở ngay phía trên hình chiếu đứng",
          "Nằm ở bên phải hình chiếu đứng",
          "Nằm ở bên trái hình chiếu đứng"
        ],
        correct: 0,
        explanation: "Theo phương pháp chiếu góc thứ nhất (tiêu chuẩn Việt Nam TCVN và quốc tế ISO), mặt phẳng hình chiếu bằng được mở xoay xuống dưới, do đó hình chiếu bằng luôn đặt ngay phía dưới hình chiếu đứng."
      },
      {
        question: "Hình chiếu đứng của một vật thể thể hiện những chiều kích thước nào?",
        options: [
          "Chiều dài và chiều cao",
          "Chiều dài và chiều rộng",
          "Chiều rộng và chiều cao",
          "Chỉ thể hiện chiều dài"
        ],
        correct: 0,
        explanation: "Hình chiếu đứng được chiếu từ phía trước mặt, do đó thể hiện trực quan chiều dài và chiều cao của vật thể."
      },
      {
        question: "Quy ước tiêu chuẩn vẽ kỹ thuật sử dụng loại nét vẽ nào để thể hiện các cạnh khuất (bị che lấp)?",
        options: [
          "Nét đứt mảnh",
          "Nét liền đậm",
          "Nét gạch chấm mảnh",
          "Nét lượn sóng"
        ],
        correct: 0,
        explanation: "Nét liền đậm dùng cho các cạnh thấy; nét đứt mảnh quy ước dùng cho các đường bao khuất, cạnh khuất; nét gạch chấm mảnh dùng làm đường tâm và trục đối xứng."
      },
      {
        question: "Khi nhìn từ trên xuống dưới vuông góc với một khối nón đặt đứng trên đáy tròn, hình chiếu bằng thu được là hình gì?",
        options: [
          "Một hình tròn kèm một dấu chấm ở tâm biểu diễn đỉnh nón",
          "Một hình tam giác cân",
          "Một hình chữ nhật",
          "Một hình elip"
        ],
        correct: 0,
        explanation: "Khối nón có đáy tròn nằm ngang, khi chiếu vuông góc từ trên xuống sẽ thấy trọn vẹn đáy tròn và đỉnh nón chiếu trùng đúng vào tâm của hình tròn đó."
      }
    ]
  },

  // ========================================================
  // BÀI 11
  // ========================================================
  {
    lessonNum: 11,
    id: "bai-11",
    topicNum: 3,
    topicName: "Chuyên đề 3: Thuật toán đồ thị & Vẽ kỹ thuật",
    title: "Bài 11: Hình chiếu trục đo và mặt cắt - hình cắt",
    tag: "Vẽ kỹ thuật",
    objectives: [
      "Hiểu rõ bản chất của Hình chiếu trục đo (Axonometric projection) biểu diễn trực quan 3 chiều của vật thể trên một mặt phẳng phẳng.",
      "Phân biệt Hình chiếu trục đo vuông góc đều (Isometric) và Hình chiếu trục đo xiên góc cân (Cabinet/Dimetric): hệ trục tọa độ và hệ số biến dạng $p, q, r$.",
      "Nắm vững khái niệm Mặt cắt (Cross section) và Hình cắt (Sectional view) để biểu diễn các phần rỗng phức tạp bên trong vật thể cơ khí.",
      "Thực hiện vẽ hình chiếu trục đo của các khối vật thể đơn giản và kẻ nét gạch mặt cắt theo đúng tiêu chuẩn TCVN."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-shapes"></i> Hình chiếu trục đo vuông góc đều
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Hệ trục đo:</strong> Trục thẳng đứng $O'z'$, hai trục $O'x'$ và $O'y'$ tạo với nhau và với $O'z'$ các góc bằng nhau đúng $120^\\circ$:
              $$\\widehat{x'O'y'} = \\widehat{y'O'z'} = \\widehat{z'O'x'} = 120^\\circ$$
            </li>
            <li><strong>Hệ số biến dạng quy ước:</strong> $p = q = r = 1$ (kích thước trên cả 3 trục được lấy đúng bằng kích thước thật).</li>
            <li><strong>Hình tròn trên mặt trục đo:</strong> Biến thành hình Elip có trục lớn bằng $1.22d$ và trục nhỏ bằng $0.71d$.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-scissors"></i> Mặt cắt & Hình cắt
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Mục đích:</strong> Thể hiện cấu trúc rỗng, lỗ khoan, rãnh then bên trong vật thể mà không phải lạm dụng quá nhiều nét đứt gây rối bản vẽ.</li>
            <li><strong>Mặt phẳng cắt tưởng tượng:</strong> Cắt vật thể làm hai phần, bỏ đi phần trước, chiếu phần còn lại lên mặt phẳng hình chiếu.</li>
            <li><strong>Mặt cắt:</strong> Chỉ biểu diễn phần tiếp xúc trực tiếp giữa vật thể với mặt phẳng cắt (được kẻ gạch gạch chéo $45^\\circ$).</li>
            <li><strong>Hình cắt:</strong> Biểu diễn cả mặt cắt và các đường bao nhìn thấy ở phía sau mặt phẳng cắt.</li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Bước 1: Dựng hệ trục đo chuẩn xác",
        content: "Dùng thước kẻ và êke dựng trục $O'z'$ thẳng đứng, sau đó dựng hai trục $O'x'$ và $O'y'$ nghiêng đều $30^\\circ$ so với phương nằm ngang (tạo góc $120^\\circ$ với nhau)."
      },
      {
        title: "Bước 2: Dựng khối hộp bao ngoài và gọt tỉa các chi tiết",
        content: "Vẽ khối hộp chữ nhật có kích thước dài, rộng, cao tương ứng trên 3 trục đo. Từ các mặt ngoài, đo và gọt các bậc, rãnh theo kích thước bản vẽ."
      },
      {
        title: "Bước 3: Cắt 1/4 vật thể (nếu cần) và kẻ đường gạch gạch mặt cắt",
        content: "Khi cần thể hiện lỗ rỗng bên trong, cắt bỏ 1/4 góc trước của vật thể. Kẻ các đường gạch gạch chéo nghiêng $45^\\circ$ song song cách đều nhau trên phần tiếp xúc kim loại."
      }
    ],
    practice: "Cho một ống trụ rỗng bằng thép có đường kính ngoài $D = 60\\text{mm}$, đường kính lỗ trong $d = 30\\text{mm}$ và chiều cao $H = 80\\text{mm}$. Hãy vẽ hình cắt toàn phần trên hình chiếu đứng và hình chiếu trục đo cắt 1/4 của ống trụ.",
    quizzes: [
      {
        question: "Trong hình chiếu trục đo vuông góc đều, góc giữa ba trục tọa độ O'x', O'y', O'z' bằng bao nhiêu?",
        options: [
          "Mỗi góc đều bằng $120^\\circ$",
          "Mỗi góc đều bằng $90^\\circ$",
          "Một góc $90^\\circ$ và hai góc $135^\\circ$",
          "Mỗi góc đều bằng $60^\\circ$"
        ],
        correct: 0,
        explanation: "Hình chiếu trục đo vuông góc đều có đặc trưng là ba trục tọa độ phân bố đối xứng cách đều nhau trong mặt phẳng vẽ, mỗi góc giữa hai trục kề nhau bằng $\\frac{360^\\circ}{3} = 120^\\circ$."
      },
      {
        question: "Hệ số biến dạng quy ước p, q, r trên ba trục O'x', O'y', O'z' trong hình chiếu trục đo vuông góc đều thường được lấy là:",
        options: [
          "$p = q = r = 1$",
          "$p = 1, q = 0.5, r = 1$",
          "$p = q = 0.82, r = 1$",
          "$p = q = r = 0.5$"
        ],
        correct: 0,
        explanation: "Để thuận tiện cho người thiết kế đo đạc và thi công, trên bản vẽ kỹ thuật quy ước lấy hệ số biến dạng trên cả 3 trục $p = q = r = 1$."
      },
      {
        question: "Sự khác nhau cơ bản giữa 'Mặt cắt' và 'Hình cắt' là gì?",
        options: [
          "Mặt cắt chỉ vẽ phần tiếp xúc trực tiếp với mặt phẳng cắt; Hình cắt vẽ cả mặt cắt và các đường bao nhìn thấy phía sau mặt phẳng cắt",
          "Mặt cắt luôn lớn hơn hình cắt",
          "Hình cắt chỉ dùng cho vật thể bằng gỗ; Mặt cắt cho kim loại",
          "Mặt cắt vẽ bằng nét đứt; Hình cắt vẽ bằng nét liền"
        ],
        correct: 0,
        explanation: "Theo TCVN, mặt cắt chỉ thể hiện phần vật liệu bị mặt phẳng cắt đi qua (có kẻ gạch gạch). Hình cắt ngoài mặt cắt còn vẽ thêm tất cả các chi tiết, đường nét nhìn thấy ở đằng sau mặt phẳng cắt."
      },
      {
        question: "Các đường gạch gạch biểu diễn vật liệu kim loại trên mặt cắt theo quy chuẩn TCVN thường nghiêng một góc bao nhiêu so với đường bao hoặc trục đối xứng?",
        options: [
          "$45^\\circ$",
          "$90^\\circ$",
          "$30^\\circ$",
          "$60^\\circ$"
        ],
        correct: 0,
        explanation: "Đường kẻ gạch gạch mặt cắt kim loại được quy ước vẽ bằng nét liền mảnh, nghiêng một góc $45^\\circ$ so với đường bao chính hoặc trục đối xứng của vật thể."
      }
    ]
  },

  // ========================================================
  // CHUYÊN ĐỀ 4: DỰ ÁN CAPSTONE MÔ HÌNH HÓA TOÁN HỌC
  // ========================================================
  {
    lessonNum: 12,
    id: "bai-12",
    topicNum: 4,
    topicName: "Chuyên đề 4: Dự án Capstone Mô hình hóa toán học",
    title: "Bài 12: Dự án Capstone: Mô hình hóa mạng lưới giao thông & Bản vẽ 3D",
    tag: "Dự án liên môn",
    objectives: [
      "Tổng hợp kiến thức toàn bộ 3 chuyên đề: Phép biến hình, Lý thuyết đồ thị và Vẽ kỹ thuật vào một bài toán thực tế hoàn chỉnh.",
      "Thiết kế mô hình đồ thị có trọng số biểu diễn mạng lưới giao thông công cộng đô thị (xe buýt nhanh BRT, Metro).",
      "Vận dụng thuật toán Dijkstra để lập trình điều phối lộ trình cứu thương/cứu hỏa khẩn cấp và thuật toán Kruskal để tối ưu hóa tuyến cáp ngầm tín hiệu điều khiển đèn giao thông.",
      "Lập bản vẽ kỹ thuật hoàn chỉnh (3 hình chiếu vuông góc và hình chiếu trục đo) của trạm đón xe buýt thông minh có kết cấu mái che ứng dụng phép tịnh tiến và đối xứng hình học."
    ],
    summary: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
          <h4 class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-city"></i> Phần 1: Tối ưu mạng lưới thông minh
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Dữ liệu đầu vào:</strong> Sơ đồ gồm 8 nút giao thông trọng điểm $V_1, V_2, \\dots, V_8$ với độ dài và thời gian di chuyển theo giờ cao điểm.</li>
            <li><strong>Bài toán 1 (Cứu hộ khẩn cấp):</strong> Dùng Dijkstra xác định lộ trình từ Trung tâm cấp cứu $V_1$ đến hiện trường $V_8$ nhanh nhất.</li>
            <li><strong>Bài toán 2 (Mạng cáp quang giám sát giao thông):</strong> Dùng Kruskal kết nối tất cả 8 nút giao thông về trung tâm điều khiển với tổng độ dài đào hào cáp nhỏ nhất.</li>
            <li><strong>Bài toán 3 (Xe phun nước rửa đường):</strong> Đánh giá tính Euler để xe hoàn thành nhiệm vụ đi qua mọi con đường đúng 1 lần khép kín.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800">
          <h4 class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-drafting-compass"></i> Phần 2: Bản vẽ kỹ thuật trạm chờ xe buýt
          </h4>
          <ul class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
            <li><strong>Ý tưởng kiến trúc:</strong> Khung thép tiền chế modul lặp lại bằng phép tịnh tiến $T_{\\vec{v}}$, vách kính cường lực hoa văn trang trí đối xứng trục $D_d$.</li>
            <li><strong>Bộ hồ sơ bản vẽ gồm:</strong>
              <br>1. Mặt đứng chính diện (Hình chiếu đứng) tỷ lệ 1:50.
              <br>2. Mặt bằng bố trí ghế ngồi và luồng hành khách (Hình chiếu bằng).
              <br>3. Mặt cắt chi tiết kết cấu móng bu lông neo (Hình cắt cục bộ).
              <br>4. Phối cảnh 3D trực quan bằng hình chiếu trục đo vuông góc đều.
            </li>
          </ul>
        </div>
      </div>
    `,
    steps: [
      {
        title: "Giai đoạn 1: Khảo sát thực địa và mô hình hóa đồ thị",
        content: "Chuyển đổi bản đồ giao thông thực tế thành đồ thị toán học $G = (V, E, W)$. Lập ma trận khoảng cách và phân loại các loại phương tiện."
      },
      {
        title: "Giai đoạn 2: Thực thi các thuật toán tối ưu hóa",
        content: "Chạy thuật toán Dijkstra tìm đường đi ngắn nhất, thuật toán Kruskal tìm cây khung nhỏ nhất và thuật toán Euler kiểm tra hành trình tuần tra."
      },
      {
        title: "Giai đoạn 3: Thiết kế kỹ thuật và báo cáo tổng kết",
        content: "Thiết kế trạm dừng trên giấy vẽ hoặc phần mềm CAD (AutoCAD, SketchUp, Blender), lập bảng dự toán chi phí và trình bày báo cáo trước hội đồng đánh giá."
      }
    ],
    practice: "Nhiệm vụ Capstone: Chọn một ngã tư lớn hoặc khuôn viên trường học của bạn. \n1) Hãy vẽ sơ đồ đồ thị gồm ít nhất 6 địa điểm chính và đo khoảng cách tương đối giữa chúng. \n2) Xác định vị trí đặt máy phát Wi-Fi tập trung kết nối dây tới các trạm phụ tối ưu chi phí bằng Kruskal. \n3) Vẽ 3 hình chiếu vuông góc của một biển báo chỉ dẫn giao thông tại trường.",
    quizzes: [
      {
        question: "Trong một dự án quy hoạch mạng lưới đô thị thông minh, thuật toán Kruskal được ứng dụng tối ưu cho bài toán nào?",
        options: [
          "Kết nối tất cả các trạm quan trắc không khí về máy chủ trung tâm với tổng chiều dài đường cáp truyền tín hiệu là nhỏ nhất",
          "Tìm đường bay ngắn nhất giữa hai sân bay quốc tế",
          "Lập lịch đèn giao thông xanh - đỏ luân phiên",
          "Tính toán số lượng hành khách đi xe buýt mỗi ngày"
        ],
        correct: 0,
        explanation: "Thuật toán Kruskal tìm cây khung nhỏ nhất (MST), kết nối tất cả các đỉnh (trạm quan trắc) mà không tạo chu trình lãng phí, đảm bảo toàn bộ hệ thống liên thông với chi phí lắp đặt cáp nhỏ nhất."
      },
      {
        question: "Khi thiết kế một nhà ga tàu điện ngầm có mặt tiền dạng vòm đối xứng hai bên, kiến trúc sư đã sử dụng phép biến hình nào?",
        options: [
          "Phép đối xứng trục qua trục đối xứng thẳng đứng đi qua tâm vòm",
          "Phép tịnh tiến ngẫu nhiên",
          "Phép quay $45^\\circ$",
          "Phép vị tự tỉ số k = -5"
        ],
        correct: 0,
        explanation: "Tính đối xứng hai bên gương phản chiếu hoàn hảo qua trục thẳng đứng chính giữa là đặc trưng của phép đối xứng trục $D_d$."
      },
      {
        question: "Nếu cần lập lộ trình tuần tra kiểm tra mặt đường sao cho xe tuần tra đi qua mỗi tuyến phố trong khu đô thị đúng một lần duy nhất rồi quay về điểm ban đầu, đồ thị khu đô thị cần thỏa mãn tính chất gì?",
        options: [
          "Là đồ thị Euler (mọi nút giao đều có số lượng tuyến đường nối vào là số chẵn)",
          "Là đồ thị Hamilton",
          "Là đồ thị có đúng 1 đỉnh bậc lẻ",
          "Là đồ thị dạng cây không có chu trình"
        ],
        correct: 0,
        explanation: "Đi qua mỗi cạnh (tuyến đường) đúng 1 lần và quay về điểm ban đầu chính là định nghĩa của Chu trình Euler, đòi hỏi đồ thị phải liên thông và mọi đỉnh đều có bậc chẵn."
      },
      {
        question: "Khi thực hiện bản vẽ kỹ thuật chi tiết của một kết cấu kim loại có nhiều lỗ khoan ren khuất bên trong, phương pháp biểu diễn nào là hiệu quả nhất để người thợ gia công thấy rõ kích thước?",
        options: [
          "Sử dụng Hình cắt (Sectional view) kết hợp mặt cắt kẻ gạch $45^\\circ$",
          "Chỉ vẽ hình chiếu đứng và hình chiếu bằng",
          "Dùng nét đứt vẽ chồng chéo lên nhau thật dày",
          "Chỉ chụp một bức ảnh màu 2D"
        ],
        correct: 0,
        explanation: "Hình cắt cho phép 'cắt mở' vật thể để biến các đường ren, lỗ rỗng khuất bên trong thành các đường thấy rõ ràng, giúp ghi kích thước chính xác và tránh nhầm lẫn khi gia công cơ khí."
      }
    ]
  }
];

const fileContent = '// Data for Chuyên đề học tập Toán 11 - Kết nối tri thức với cuộc sống (GDPT 2018)\n// 12 lessons: 3 Chuyên đề SGK + Ứng dụng & Dự án Capstone\n// Each lesson has 4 interactive quizzes (total 48 quizzes)\n\nmodule.exports = ' + JSON.stringify(lessons, null, 2) + ';\n';

fs.writeFileSync(path.join(__dirname, 'make_chuyende_toan11_data.js'), fileContent, 'utf8');
console.log('Created make_chuyende_toan11_data.js successfully! Total lessons:', lessons.length);
