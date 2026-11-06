// KHTN 8 Data Part 2: Bài 13 đến Bài 29 (Vật lí: Chương III, IV, V, VI)
module.exports = [
  {
    id: 13,
    num: "Bài 13",
    chapter: "CHƯƠNG III. KHỐI LƯỢNG RIÊNG VÀ ÁP SUẤT",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Khối lượng riêng",
    desc: "Khái niệm khối lượng riêng, đơn vị đo (kg/m³, g/cm³), công thức tính và ý nghĩa vật lí trong đời sống.",
    keyPoints: [
      "Khối lượng riêng (kí hiệu D) của một chất là khối lượng của một đơn vị thể tích (1 m³) chất đó.",
      "Công thức tính khối lượng riêng:\n\\[D = \\frac{m}{V} \\iff m = D \\cdot V \\iff V = \\frac{m}{D}\\]\nTrong đó: m là khối lượng (kg hoặc g), V là thể tích (m³ hoặc cm³), D là khối lượng riêng (kg/m³ hoặc g/cm³).",
      "Đổi đơn vị: \\[1 \\text{ g/cm}^3 = 1000 \\text{ kg/m}^3\\] (Ví dụ: nước có D = 1000 kg/m³ = 1 g/cm³; sắt có D = 7800 kg/m³).",
      "Ý nghĩa: Biết khối lượng riêng giúp lựa chọn vật liệu chế tạo (nhôm nhẹ làm vỏ máy bay, chì nặng làm đáy tàu ngầm)."
    ],
    experiment: "Xác định khối lượng riêng của quả cầu sắt và khối đá hoa cương bằng cách cân khối lượng và đo thể tích bằng bình chia độ.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <g transform="translate(60, 30)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">CÔNG THỨC</text>
        <text x="80" y="40" text-anchor="middle" font-size="13" font-mono font-bold fill="#1e40af">D = m / V</text>
      </g>
      <g transform="translate(250, 30)">
        <rect x="0" y="0" width="180" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="90" y="20" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">ĐƠN VỊ ĐO CHUẨN</text>
        <text x="90" y="40" text-anchor="middle" font-size="11" font-mono font-bold fill="#1e40af">1 g/cm³ = 1000 kg/m³</text>
      </g>
    </svg>`,
    quiz: {
      q: "Một khối kim loại có thể tích 0,5 m³ và khối lượng 3900 kg. Khối lượng riêng của kim loại đó là:",
      options: [
        "7800 kg/m³",
        "1950 kg/m³",
        "3900 kg/m³",
        "780 kg/m³"
      ],
      ans: 0,
      expl: "Áp dụng công thức D = m / V = 3900 / 0,5 = 7800 kg/m³ (đây chính là khối lượng riêng của sắt)."
    }
  },
  {
    id: 14,
    num: "Bài 14",
    chapter: "CHƯƠNG III. KHỐI LƯỢNG RIÊNG VÀ ÁP SUẤT",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Thực hành xác định khối lượng riêng",
    desc: "Phương pháp đo khối lượng riêng của vật rắn hình hộp chữ nhật, vật rắn có hình dạng bất kì không thấm nước và chất lỏng.",
    keyPoints: [
      "1. Vật rắn hình hộp: Dùng cân đo khối lượng m; dùng thước đo kích thước (dài a, rộng b, cao c) để tính V = a × b × c ➔ Tính D = m / V.",
      "2. Vật rắn không thấm nước hình dạng bất kì: Cân khối lượng m; đo thể tích nước ban đầu V₁ trong ống đong, thả chìm vật đọc thể tích V₂ ➔ Thể tích vật V = V₂ - V₁ ➔ Tính D = m / V.",
      "3. Chất lỏng: Cân bình rỗng m₁; cho lượng chất lỏng thể tích V vào bình rồi cân m₂ ➔ Khối lượng chất lỏng m = m₂ - m₁ ➔ Tính D = m / V.",
      "Lưu ý sai số: Đọc ngang tầm mặt khum của chất lỏng, tránh bọt khí bám vào vật thể."
    ],
    experiment: "Thực hành đo khối lượng riêng của hòn sỏi bằng bình chia độ và cân điện tử; xác định khối lượng riêng của dầu ăn.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <g transform="translate(45, 25)">
        <text x="50" y="20" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">1. Cân khối lượng</text>
        <rect x="25" y="30" width="50" height="28" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="50" y="48" text-anchor="middle" font-size="11" font-bold fill="#1e40af">m (gam)</text>
      </g>
      <g transform="translate(180, 25)">
        <text x="50" y="20" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">2. Thể tích vật</text>
        <rect x="15" y="30" width="70" height="28" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="50" y="48" text-anchor="middle" font-size="10.5" font-mono font-bold fill="#1e40af">V = V₂ - V₁</text>
      </g>
      <g transform="translate(320, 25)">
        <text x="65" y="20" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">3. Tính kết quả</text>
        <rect x="15" y="30" width="100" height="28" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="65" y="48" text-anchor="middle" font-size="11" font-mono font-bold fill="#1e40af">D = m / V</text>
      </g>
    </svg>`,
    quiz: {
      q: "Thả chìm một hòn sỏi có khối lượng 54 gam vào ống đong chứa 60 mL nước, mực nước dâng lên mức 80 mL. Khối lượng riêng của hòn sỏi là:",
      options: [
        "2,7 g/cm³",
        "0,9 g/cm³",
        "0,675 g/cm³",
        "2700 g/cm³"
      ],
      ans: 0,
      expl: "Thể tích hòn sỏi V = 80 - 60 = 20 mL = 20 cm³. Khối lượng riêng D = m / V = 54 / 20 = 2,7 g/cm³ (= 2700 kg/m³)."
    }
  },
  {
    id: 15,
    num: "Bài 15",
    chapter: "CHƯƠNG III. KHỐI LƯỢNG RIÊNG VÀ ÁP SUẤT",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Áp suất trên một bề mặt",
    desc: "Khái niệm áp lực, định nghĩa áp suất, công thức p = F / S, đơn vị Pascal (Pa) và các biện pháp tăng, giảm áp suất trong thực tế.",
    keyPoints: [
      "Áp lực là lực ép có phương vuông góc với mặt bị ép.",
      "Áp suất (kí hiệu p) là độ lớn của áp lực trên một đơn vị diện tích bị ép:\n\\[p = \\frac{F}{S}\\]\nTrong đó: F là áp lực (N), S là diện tích bị ép (m²), p là áp suất (N/m² hoặc Pascal, kí hiệu Pa; 1 Pa = 1 N/m²).",
      "Quy luật tăng - giảm áp suất:\n• Muốn tăng áp suất: Tăng áp lực F hoặc giảm diện tích tiếp xúc S (lưỡi dao mài sắc, đầu đinh nhọn, kim tiêm nhỏ).\n• Muốn giảm áp suất: Tăng diện tích tiếp xúc S (xe tăng gắn bánh xích, móng nhà xây rộng, ván trượt tuyết)."
    ],
    experiment: "Thí nghiệm ấn khối gỗ có diện tích các mặt khác nhau lên khay chứa cát xốp mịn: Mặt có diện tích nhỏ lún sâu hơn mặt có diện tích lớn dưới cùng một áp lực.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <g transform="translate(60, 30)">
        <rect x="0" y="0" width="150" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="75" y="20" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">ÁP SUẤT</text>
        <text x="75" y="40" text-anchor="middle" font-size="13" font-mono font-bold fill="#1e40af">p = F / S (Pa)</text>
      </g>
      <g transform="translate(250, 30)">
        <text x="0" y="20" font-size="11" font-bold fill="#1d4ed8">• Giảm S ➔ Tăng p (Dao sắc, mũi đinh)</text>
        <text x="0" y="40" font-size="11" font-bold fill="#1e40af">• Tăng S ➔ Giảm p (Bánh xích, móng nhà)</text>
      </g>
    </svg>`,
    quiz: {
      q: "Tại sao lưỡi kéo, lưỡi dao cắt gọt lại thường được mài thật sắc bén?",
      options: [
        "Để làm giảm diện tích tiếp xúc S, làm tăng áp suất p lên vật cần cắt",
        "Để làm tăng áp lực F tác dụng lên vật",
        "Để làm giảm lực ma sát trượt khi cắt",
        "Để làm tăng diện tích tiếp xúc giúp cắt êm hơn"
      ],
      ans: 0,
      expl: "Mài sắc giúp diện tích tiếp xúc S rất nhỏ. Theo công thức p = F / S, với cùng lực tay ấn F, diện tích S càng nhỏ thì áp suất p sinh ra càng lớn, giúp việc cắt gọt dễ dàng."
    }
  },
  {
    id: 16,
    num: "Bài 16",
    chapter: "CHƯƠNG III. KHỐI LƯỢNG RIÊNG VÀ ÁP SUẤT",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Áp suất chất lỏng. Áp suất khí quyển",
    desc: "Đặc điểm áp suất chất lỏng, công thức p = d · h, nguyên lí bình thông nhau, máy nén thủy lực và hiện tượng áp suất khí quyển.",
    keyPoints: [
      "Áp suất chất lỏng: Chất lỏng gây áp suất theo mọi phương lên đáy bình, thành bình và các vật nhúng trong lòng nó.",
      "Công thức tính áp suất chất lỏng:\n\\[p = d \\cdot h\\]\nTrong đó: d là trọng lượng riêng của chất lỏng (N/m³), h là độ sâu tính từ điểm xét tới mặt thoáng chất lỏng (m).",
      "Bình thông nhau: Trong bình thông nhau chứa cùng một chất lỏng đứng yên, mực chất lỏng ở các nhánh luôn ở cùng một độ cao.",
      "Máy nén thủy lực: Lực tác dụng tỉ lệ thuận với diện tích piston: \\[\\frac{F_2}{F_1} = \\frac{S_2}{S_1}\\]",
      "Áp suất khí quyển: Trái Đất được bao bọc bởi lớp khí quyển dày; không khí có trọng lượng nên gây áp suất khí quyển theo mọi phương lên mọi vật trên mặt đất (ứng dụng giác hút, ống hút, barometer)."
    ],
    experiment: "Thí nghiệm cốc nước đầy úp ngược đậy bằng tờ giấy bìa: Tờ giấy không rơi do áp suất khí quyển hướng từ dưới lên cân bằng trọng lượng của cột nước.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <g transform="translate(60, 28)">
        <rect x="0" y="0" width="150" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="75" y="20" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">ÁP SUẤT CHẤT LỎNG</text>
        <text x="75" y="40" text-anchor="middle" font-size="13" font-mono font-bold fill="#1e40af">p = d · h</text>
      </g>
      <g transform="translate(250, 28)">
        <rect x="0" y="0" width="170" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="85" y="20" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">MÁY NÉN THỦY LỰC</text>
        <text x="85" y="40" text-anchor="middle" font-size="12" font-mono font-bold fill="#1e40af">F₂ / F₁ = S₂ / S₁</text>
      </g>
    </svg>`,
    quiz: {
      q: "Một thợ lặn lặn xuống độ sâu 20 m dưới biển. Biết trọng lượng riêng của nước biển là 10300 N/m³. Áp suất của nước biển tác dụng lên thợ lặn là:",
      options: [
        "206.000 Pa",
        "103.000 Pa",
        "51.500 Pa",
        "20.600 Pa"
      ],
      ans: 0,
      expl: "Áp dụng công thức p = d · h = 10300 × 20 = 206.000 Pa (N/m²)."
    }
  },
  {
    id: 17,
    num: "Bài 17",
    chapter: "CHƯƠNG III. KHỐI LƯỢNG RIÊNG VÀ ÁP SUẤT",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Lực đẩy Archimedes",
    desc: "Định luật Archimedes, công thức F_A = d · V, điều kiện vật nổi - lơ lửng - chìm và ứng dụng đóng tàu thuyền.",
    keyPoints: [
      "Lực đẩy Archimedes (F_A): Vật nhúng trong chất lỏng bị chất lỏng tác dụng một lực đẩy hướng thẳng đứng từ dưới lên trên, có độ lớn bằng trọng lượng của phần chất lỏng bị vật chiếm chỗ.",
      "Công thức tính lực đẩy Archimedes:\n\\[F_A = d \\cdot V\\]\nTrong đó: d là trọng lượng riêng của chất lỏng (N/m³), V là thể tích phần vật chìm trong chất lỏng (m³), F_A là lực đẩy (N).",
      "Điều kiện nổi, chìm của vật có trọng lượng P:\n• F_A < P (d_chất_lỏng < d_vật): Vật chìm xuống đáy.\n• F_A = P (d_chất_lỏng = d_vật): Vật lơ lửng trong chất lỏng.\n• F_A > P (d_chất_lỏng > d_vật): Vật nổi lên mặt thoáng cho đến khi F_A = P.",
      "Ứng dụng: Tàu thủy làm bằng thép nặng nhưng chế tạo rỗng ruột nên chiếm thể tích V rất lớn, tạo lực đẩy Archimedes khổng lồ giúp tàu nổi."
    ],
    experiment: "Thí nghiệm đo số chỉ lực kế khi vật ở ngoài không khí (P₁) và khi nhúng chìm hoàn toàn vào nước (P₂): Độ giảm số chỉ P₁ - P₂ chính bằng độ lớn lực đẩy Archimedes F_A.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <g transform="translate(60, 28)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">LỰC ĐẨY ARCHIMEDES</text>
        <text x="80" y="40" text-anchor="middle" font-size="13" font-mono font-bold fill="#1e40af">F_A = d · V_chìm</text>
      </g>
      <g transform="translate(250, 28)">
        <text x="0" y="16" font-size="10.5" font-bold fill="#1d4ed8">• F_A &gt; P: Vật nổi lên</text>
        <text x="0" y="34" font-size="10.5" font-bold fill="#1e40af">• F_A = P: Vật lơ lửng</text>
        <text x="0" y="52" font-size="10.5" font-bold fill="#1e3a8a">• F_A &lt; P: Vật chìm xuống</text>
      </g>
    </svg>`,
    quiz: {
      q: "Một khối sắt có thể tích 0,002 m³ được nhúng chìm hoàn toàn trong nước (trọng lượng riêng d = 10.000 N/m³). Lực đẩy Archimedes tác dụng lên khối sắt là:",
      options: [
        "20 N",
        "200 N",
        "2 N",
        "0,2 N"
      ],
      ans: 0,
      expl: "Áp dụng công thức F_A = d · V = 10.000 × 0,002 = 20 N."
    }
  },
  {
    id: 18,
    num: "Bài 18",
    chapter: "CHƯƠNG IV. TÁC DỤNG LÀM QUAY CỦA LỰC",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Tác dụng làm quay của lực. Moment lực",
    desc: "Đặc điểm tác dụng làm quay của lực quanh một trục, cánh tay đòn của lực và khái niệm moment lực (M = F · d).",
    keyPoints: [
      "Một lực tác dụng lên vật có thể làm vật quay quanh một trục hoặc một điểm tựa cố định.",
      "Cánh tay đòn (kí hiệu d): Là khoảng cách vuông góc từ trục quay đến giá của lực (tính bằng mét).",
      "Moment lực (kí hiệu M): Đặc trưng cho tác dụng làm quay của lực quanh một trục:\n\\[M = F \\cdot d\\]\nTrong đó: F là lực tác dụng (N), d là cánh tay đòn (m), M là moment lực (đơn vị Newton·mét, N·m).",
      "Quy luật: Lực càng lớn hoặc cánh tay đòn càng dài thì moment lực càng lớn, tác dụng làm quay càng mạnh; nếu giá của lực đi qua trục quay thì d = 0 ➔ không có tác dụng làm quay."
    ],
    experiment: "Thí nghiệm đẩy cánh cửa: Đặt tay đẩy ở mép cửa xa bản lề (d lớn) mở rất nhẹ nhàng; đặt tay sát bản lề (d nhỏ) mở rất nặng.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
      <g transform="translate(60, 30)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="11" font-bold fill="#6b21a8">MOMENT LỰC</text>
        <text x="80" y="40" text-anchor="middle" font-size="13" font-mono font-bold fill="#7e22ce">M = F · d (N·m)</text>
      </g>
      <g transform="translate(250, 30)">
        <text x="0" y="18" font-size="11" font-bold fill="#6b21a8">• d: Khoảng cách từ trục đến giá của lực</text>
        <text x="0" y="38" font-size="11" font-bold fill="#7e22ce">• Tăng F hoặc d ➔ Tăng tác dụng làm quay</text>
      </g>
    </svg>`,
    quiz: {
      q: "Dùng một chiếc cờ-lê có chiều dài cánh tay đòn 0,25 m để vặn bu-lông với lực tác dụng 80 N. Moment của lực tác dụng bằng:",
      options: [
        "20 N·m",
        "320 N·m",
        "200 N·m",
        "80,25 N·m"
      ],
      ans: 0,
      expl: "Áp dụng công thức M = F · d = 80 × 0,25 = 20 N·m."
    }
  },
  {
    id: 19,
    num: "Bài 19",
    chapter: "CHƯƠNG IV. TÁC DỤNG LÀM QUAY CỦA LỰC",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Đòn bẩy và ứng dụng",
    desc: "Cấu tạo đòn bẩy (điểm tựa O, các điểm tác dụng lực O₁, O₂), điều kiện cân bằng đòn bẩy và phân loại đòn bẩy trong đời sống.",
    keyPoints: [
      "Đòn bẩy là một thanh cứng có thể quay quanh một điểm tựa cố định (O). Lực nâng tác dụng tại O₁, tải trọng cần nâng đặt tại O₂.",
      "Điều kiện cân bằng đòn bẩy (Quy tắc moment lực):\n\\[F_1 \\cdot d_1 = F_2 \\cdot d_2 \\iff \\frac{F_1}{F_2} = \\frac{d_2}{d_1}\\]\n(Nếu cánh tay đòn d₁ > d₂ thì lực tác dụng F₁ < F₂, giúp ta được lợi về lực).",
      "Các loại đòn bẩy thực tế:\n• Đòn bẩy loại 1 (Điểm tựa ở giữa): Bập bênh, kéo cắt giấy, kìm bấm, búa nhổ đinh.\n• Đòn bẩy loại 2 (Vật ở giữa): Xe cút kít, kẹp hạt dẻ, đồ khui nắp chai (luôn có d₁ > d₂ ➔ có lợi về lực).\n• Đòn bẩy loại 3 (Lực ở giữa): Cần câu cá, cái nhíp, đũa ăn cơm (d₁ < d₂ ➔ thiệt về lực nhưng lợi về đường đi)."
    ],
    experiment: "Thí nghiệm cân đĩa đòn bẩy: Treo các quả nặng ở hai bên điểm tựa và điều chỉnh khoảng cách sao cho đòn bẩy nằm ngang thăng bằng.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <polygon points="120,60 110,75 130,75" fill="#9333ea"/>
        <line x1="20" y1="58" x2="220" y2="58" stroke="#3b0764" stroke-width="3"/>
        <circle cx="120" cy="58" r="4" fill="#ef4444"/>
        <text x="120" y="85" text-anchor="middle" font-size="10" font-bold fill="#9333ea">Điểm tựa O</text>
        <text x="40" y="48" font-size="10" font-bold fill="#2563eb">d₁ (F₁)</text>
        <text x="170" y="48" font-size="10" font-bold fill="#dc2626">d₂ (F₂)</text>
      </g>
      <g transform="translate(300, 30)">
        <rect x="0" y="0" width="150" height="48" rx="8" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/>
        <text x="75" y="20" text-anchor="middle" font-size="10" font-bold fill="#6b21a8">CÂN BẰNG ĐÒN BẨY</text>
        <text x="75" y="38" text-anchor="middle" font-size="11" font-mono font-bold fill="#7e22ce">F₁ · d₁ = F₂ · d₂</text>
      </g>
    </svg>`,
    quiz: {
      q: "Dụng cụ nào sau đây là ứng dụng của đòn bẩy nhằm mục đích ĐƯỢC LỢI VỀ LỰC (F_tay < F_vật)?",
      options: [
        "Kìm cắt kim loại và búa nhổ đinh",
        "Cần câu cá và nhíp gắp đồ",
        "Đũa ăn cơm gắp thức ăn",
        "Cái chổi quét nhà"
      ],
      ans: 0,
      expl: "Kìm và búa nhổ đinh có cánh tay đòn của tay dài hơn cánh tay đòn của vật (d₁ > d₂), do đó giúp giảm lực tác dụng của tay xuống rất nhiều (được lợi về lực)."
    }
  },
  {
    id: 20,
    num: "Bài 20",
    chapter: "CHƯƠNG V. ĐIỆN",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Hiện tượng nhiễm điện do cọ xát",
    desc: "Bản chất nhiễm điện do cọ xát, hai loại điện tích (dương và âm), tương tác giữa các điện tích và an toàn phòng chống sét.",
    keyPoints: [
      "Hiện tượng nhiễm điện: Nhiều vật sau khi cọ xát có khả năng hút các vật nhỏ nhẹ khác (mẩu giấy vụn, sợi bông) hoặc làm phát sáng bóng đèn bút thử điện.",
      "Hai loại điện tích: Điện tích dương (+) và điện tích âm (−).",
      "Quy luật tương tác điện: Các điện tích cùng dấu thì ĐẨY nhau; các điện tích khác dấu thì HÚT nhau.",
      "Giải thích theo thuyết electron: Nguyên tử trung hòa gồm hạt nhân (+) và electron (−). Khi cọ xát, electron dịch chuyển từ vật này sang vật khác: Vật nhận thêm electron nhiễm điện âm; vật mất bớt electron nhiễm điện dương.",
      "Hiện tượng sét: Là sự phóng điện mãnh liệt giữa các đám mây tích điện trái dấu hoặc giữa đám mây với mặt đất. Khi trời dông sét, không đứng dưới cây cao, tránh nơi trống trải và không dùng vật kim loại."
    ],
    experiment: "Thí nghiệm cọ xát thanh thủy tinh bằng lụa (nhiễm điện dương) và thanh nhựa bằng len (nhiễm điện âm), đưa lại gần nhau thấy chúng hút nhau.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <circle cx="30" cy="25" r="18" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
        <text x="30" y="31" text-anchor="middle" font-size="16" font-bold fill="#b91c1c">+</text>
        <circle cx="85" cy="25" r="18" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
        <text x="85" y="31" text-anchor="middle" font-size="16" font-bold fill="#b91c1c">+</text>
        <text x="57" y="60" text-anchor="middle" font-size="10" font-bold fill="#991b1b">Cùng loại: ĐẨY</text>
      </g>
      <g transform="translate(200, 25)">
        <circle cx="30" cy="25" r="18" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
        <text x="30" y="31" text-anchor="middle" font-size="16" font-bold fill="#b91c1c">+</text>
        <circle cx="85" cy="25" r="18" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <text x="85" y="31" text-anchor="middle" font-size="16" font-bold fill="#1d4ed8">−</text>
        <text x="57" y="60" text-anchor="middle" font-size="10" font-bold fill="#047857">Khác loại: HÚT</text>
      </g>
      <g transform="translate(340, 25)">
        <rect x="0" y="5" width="110" height="52" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="55" y="24" text-anchor="middle" font-size="10" font-bold fill="#92400e">Thuyết Electron</text>
        <text x="55" y="42" text-anchor="middle" font-size="9" fill="#b45309">Dịch chuyển e⁻</text>
      </g>
    </svg>`,
    quiz: {
      q: "Một thước nhựa sau khi cọ xát với mảnh vải len thì nhiễm điện âm. Nguyên nhân là vì:",
      options: [
        "Thước nhựa đã nhận thêm các hạt electron từ mảnh vải len",
        "Thước nhựa đã mất bớt các hạt electron sang mảnh vải len",
        "Thước nhựa đã nhận thêm các điện tích dương",
        "Mảnh vải len đã mất bớt điện tích âm"
      ],
      ans: 0,
      expl: "Theo thuyết electron, vật nhiễm điện âm là do nhận thêm các hạt electron mang điện tích âm từ vật khác chuyển sang."
    }
  },
  {
    id: 21,
    num: "Bài 21",
    chapter: "CHƯƠNG V. ĐIỆN",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Dòng điện, nguồn điện",
    desc: "Khái niệm dòng điện, quy ước chiều dòng điện, nguồn điện và phân biệt vật dẫn điện, vật cách điện.",
    keyPoints: [
      "Dòng điện là dòng chuyển dời có hướng của các hạt mang điện tích (trong kim loại là dòng electron tự do dịch chuyển có hướng).",
      "Nguồn điện: Thiết bị cung cấp và duy trì dòng điện cho các thiết bị điện hoạt động (pin, ắc quy, máy phát điện). Mỗi nguồn điện đều có hai cực: cực dương (+) và cực âm (−).",
      "Quy ước chiều dòng điện: Chiều từ cực dương qua dây dẫn và thiết bị điện tới cực âm của nguồn điện (ngược với chiều dịch chuyển của các electron tự do).",
      "Chất dẫn điện và cách điện:\n• Chất dẫn điện: Cho dòng điện chạy qua (đồng, nhôm, sắt, nước muối, dung dịch acid/base).\n• Chất cách điện: Không cho dòng điện chạy qua (nhựa, cao su, thủy tinh, sứ, không khí khô)."
    ],
    experiment: "Lắp mạch điện gồm pin 1,5V, bóng đèn và thử nghiệm cắm các vật liệu khác nhau (dây đồng, thước nhựa, ruột bút chì) vào khe hở để kiểm tra tính dẫn điện.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">CHIỀU DÒNG ĐIỆN</text>
        <text x="80" y="40" text-anchor="middle" font-size="11" font-mono font-bold fill="#1e40af">Cực (+) ➔ Cực (−)</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="180" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="90" y="20" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">CHIỀU DỊCH CHUYỂN e⁻</text>
        <text x="90" y="40" text-anchor="middle" font-size="11" font-mono font-bold fill="#1e40af">Cực (−) ➔ Cực (+)</text>
      </g>
    </svg>`,
    quiz: {
      q: "Trong kim loại, dòng điện là dòng chuyển dời có hướng của:",
      options: [
        "Các hạt electron tự do",
        "Các hạt điện tích dương",
        "Các nguyên tử kim loại",
        "Các hạt phân tử"
      ],
      ans: 0,
      expl: "Trong dây dẫn kim loại, các hạt mang điện tự do chính là các electron bứt ra khỏi nguyên tử và chuyển dời có hướng dưới tác dụng của lực điện trường."
    }
  },
  {
    id: 22,
    num: "Bài 22",
    chapter: "CHƯƠNG V. ĐIỆN",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Mạch điện đơn giản",
    desc: "Cấu tạo mạch điện cơ bản, kí hiệu quy ước trên sơ đồ mạch điện, mạch kín - mạch hở và vai trò của các thiết bị bảo vệ (cầu chì, rơ-le).",
    keyPoints: [
      "Thành phần mạch điện đơn giản: Nguồn điện (pin), thiết bị tiêu thụ điện (bóng đèn, động cơ), dây dẫn và thiết bị đóng ngắt (công tắc).",
      "Trạng thái mạch:\n• Mạch kín: Công tắc đóng, có dòng điện chạy qua thiết bị.\n• Mạch hở: Công tắc mở hoặc đứt dây dẫn, dòng điện ngừng chạy.",
      "Kí hiệu sơ đồ: Nguồn điện (vạch dài mảnh +, vạch ngắn dày −), bóng đèn (vòng tròn có dấu nhân ⨂), công tắc mở/đóng, cầu chì, điện trở.",
      "Thiết bị bảo vệ:\n• Cầu chì: Chứa dây chì nóng chảy tự ngắt mạch khi dòng điện quá tải tránh cháy nổ.\n• Cầu dao tự động (Aptomat): Tự ngắt mạch khi quá tải hoặc ngắn mạch (chập điện)."
    ],
    experiment: "Lắp ráp mạch điện gồm pin, công tắc và bóng đèn theo sơ đồ vẽ sẵn trên bảng thực hành; kiểm tra hoạt động khi bật/tắt công tắc.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <line x1="20" y1="45" x2="60" y2="45" stroke="#2563eb" stroke-width="2"/>
        <line x1="60" y1="35" x2="60" y2="55" stroke="#2563eb" stroke-width="3"/>
        <line x1="68" y1="40" x2="68" y2="50" stroke="#2563eb" stroke-width="4"/>
        <line x1="68" y1="45" x2="110" y2="45" stroke="#2563eb" stroke-width="2"/>
        <text x="64" y="24" text-anchor="middle" font-size="10" font-bold fill="#1d4ed8">Nguồn (+ | | -)</text>
      </g>
      <g transform="translate(190, 25)">
        <circle cx="35" cy="45" r="16" fill="none" stroke="#2563eb" stroke-width="2"/>
        <line x1="24" y1="34" x2="46" y2="56" stroke="#2563eb" stroke-width="2"/>
        <line x1="46" y1="34" x2="24" y2="56" stroke="#2563eb" stroke-width="2"/>
        <text x="35" y="24" text-anchor="middle" font-size="10" font-bold fill="#1d4ed8">Đèn (⨂)</text>
      </g>
      <g transform="translate(310, 25)">
        <circle cx="15" cy="45" r="3" fill="#2563eb"/>
        <line x1="15" y1="45" x2="40" y2="35" stroke="#2563eb" stroke-width="2"/>
        <circle cx="45" cy="45" r="3" fill="#2563eb"/>
        <text x="30" y="24" text-anchor="middle" font-size="10" font-bold fill="#1d4ed8">Công tắc K</text>
      </g>
      <text x="250" y="93" text-anchor="middle" font-size="10" font-bold fill="#1e40af">Sơ đồ mạch điện chuẩn hóa quốc tế</text>
    </svg>`,
    quiz: {
      q: "Bộ phận nào trong mạch điện gia đình có vai trò tự động ngắt mạch khi dòng điện tăng quá mức cho phép để bảo vệ đường dây?",
      options: [
        "Cầu chì hoặc cầu dao tự động (Aptomat)",
        "Bóng đèn sợi đốt",
        "Công tắc điện thông thường",
        "Ổ cắm điện"
      ],
      ans: 0,
      expl: "Cầu chì có dây chì sẽ nóng chảy và đứt mạch; aptomat sẽ tự động ngắt khi có sự cố quá tải hoặc chập mạch (ngắn mạch) để chống cháy nổ."
    }
  },
  {
    id: 23,
    num: "Bài 23",
    chapter: "CHƯƠNG V. ĐIỆN",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Tác dụng của dòng điện",
    desc: "Năm tác dụng cơ bản của dòng điện: tác dụng nhiệt, tác dụng phát sáng, tác dụng hóa học, tác dụng từ và tác dụng sinh lí.",
    keyPoints: [
      "1. Tác dụng nhiệt: Dòng điện chạy qua vật dẫn làm vật dẫn nóng lên (ứng dụng: bàn là, ấm đun nước, bếp điện, nồi cơm điện).",
      "2. Tác dụng phát sáng: Dòng điện chạy qua làm phát sáng chất khí hoặc chất bán dẫn (đèn huỳnh quang, đèn LED, đèn sợi đốt).",
      "3. Tác dụng từ: Dòng điện chạy qua cuộn dây làm cuộn dây có tính chất như một nam châm, hút được các vật bằng sắt, thép (ứng dụng: nam châm điện, chuông điện, động cơ điện).",
      "4. Tác dụng hóa học: Dòng điện chạy qua dung dịch điện phân làm phân li và tách kim loại ra bám vào điện cực (ứng dụng: mạ điện, luyện kim, nạp điện cho ắc quy).",
      "5. Tác dụng sinh lí: Dòng điện chạy qua cơ thể người và động vật gây co giật cơ, ngừng tim, ngừng thở nguy hiểm; trong y học dùng xung điện nhẹ kích tim, châm cứu."
    ],
    experiment: "Thí nghiệm cuộn dây đồng quấn quanh lõi đinh sắt nối vào pin có thể hút các mẩu đinh ghim sắt (chứng minh tác dụng từ của dòng điện).",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <g transform="translate(45, 25)">
        <text x="35" y="24" text-anchor="middle" font-size="20">🔥</text>
        <text x="35" y="50" text-anchor="middle" font-size="9.5" font-bold fill="#1d4ed8">Nhiệt</text>
      </g>
      <g transform="translate(130, 25)">
        <text x="35" y="24" text-anchor="middle" font-size="20">💡</text>
        <text x="35" y="50" text-anchor="middle" font-size="9.5" font-bold fill="#1d4ed8">Phát sáng</text>
      </g>
      <g transform="translate(215, 25)">
        <text x="35" y="24" text-anchor="middle" font-size="20">🧲</text>
        <text x="35" y="50" text-anchor="middle" font-size="9.5" font-bold fill="#1d4ed8">Tác dụng từ</text>
      </g>
      <g transform="translate(300, 25)">
        <text x="35" y="24" text-anchor="middle" font-size="20">🧪</text>
        <text x="35" y="50" text-anchor="middle" font-size="9.5" font-bold fill="#1d4ed8">Hóa học</text>
      </g>
      <g transform="translate(385, 25)">
        <text x="35" y="24" text-anchor="middle" font-size="20">⚡</text>
        <text x="35" y="50" text-anchor="middle" font-size="9.5" font-bold fill="#1d4ed8">Sinh lí</text>
      </g>
    </svg>`,
    quiz: {
      q: "Ứng dụng nào sau đây dựa trên TÁC DỤNG TỪ của dòng điện?",
      options: [
        "Nam châm điện nâng phế liệu sắt thép ở bến cảng",
        "Mạ vàng, mạ bạc cho đồ trang sức",
        "Bàn là điện là ủi quần áo",
        "Bóng đèn huỳnh quang chiếu sáng lớp học"
      ],
      ans: 0,
      expl: "Nam châm điện hoạt động dựa trên tác dụng từ của dòng điện chạy qua cuộn dây cuốn quanh lõi sắt non."
    }
  },
  {
    id: 24,
    num: "Bài 24",
    chapter: "CHƯƠNG V. ĐIỆN",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Cường độ dòng điện và hiệu điện thế",
    desc: "Khái niệm cường độ dòng điện (I, Ampe), hiệu điện thế (U, Volt), dụng cụ đo (Ampe kế, Vôn kế) và cách mắc vào mạch điện.",
    keyPoints: [
      "Cường độ dòng điện (kí hiệu I): Đặc trưng cho mức độ mạnh hay yếu của dòng điện.\n• Đơn vị: Ampe (A), miliampe (mA); 1 A = 1000 mA.\n• Dụng cụ đo: Ampe kế (kí hiệu Ⓐ). Quy tắc mắc: MẮC NỐI TIẾP vào đoạn mạch, cực (+) của ampe kế nối về phía cực (+) nguồn.",
      "Hiệu điện thế (kí hiệu U): Đặc trưng cho khả năng sinh ra dòng điện của nguồn điện giữa hai điểm.\n• Đơn vị: Volt (V), milivolt (mV), kilovolt (kV); 1 kV = 1000 V = 1.000.000 mV.\n• Dụng cụ đo: Vôn kế (kí hiệu Ⓥ). Quy tắc mắc: MẮC SONG SONG với hai điểm cần đo hiệu điện thế."
    ],
    experiment: "Quan sát ampe kế và vôn kế, xác định giới hạn đo (GHĐ) và độ chia nhỏ nhất (ĐCNN) trên mặt số đồng hồ.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <g transform="translate(60, 28)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#1d4ed8">CƯỜNG ĐỘ DÒNG ĐIỆN</text>
        <text x="80" y="38" text-anchor="middle" font-size="11" font-mono font-bold fill="#1e40af">I (A) • [A] MẮC NỐI TIẾP</text>
      </g>
      <g transform="translate(250, 28)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#1d4ed8">HIỆU ĐIỆN THẾ</text>
        <text x="80" y="38" text-anchor="middle" font-size="11" font-mono font-bold fill="#1e40af">U (V) • [V] MẮC SONG SONG</text>
      </g>
    </svg>`,
    quiz: {
      q: "Để đo hiệu điện thế giữa hai đầu một bóng đèn đang sáng, ta phải mắc Vôn kế như thế nào?",
      options: [
        "Mắc song song với bóng đèn, cực dương của vôn kế nối về phía cực dương của nguồn điện",
        "Mắc nối tiếp với bóng đèn",
        "Mắc nối tiếp với nguồn điện",
        "Mắc bất kì không cần phân biệt cực"
      ],
      ans: 0,
      expl: "Vôn kế luôn phải mắc song song với thiết bị cần đo hiệu điện thế và cực (+) của vôn kế phải nối về phía cực (+) của nguồn điện."
    }
  },
  {
    id: 25,
    num: "Bài 25",
    chapter: "CHƯƠNG V. ĐIỆN",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Thực hành đo cường độ dòng điện và hiệu điện thế",
    desc: "Kĩ năng lắp mạch, sử dụng ampe kế đo dòng điện I và vôn kế đo hiệu điện thế U trên đoạn mạch nối tiếp và song song.",
    keyPoints: [
      "Các bước tiến hành đo:\n1. Chọn ampe kế và vôn kế có GHĐ và ĐCNN thích hợp.\n2. Kiểm tra và chỉnh kim đồng hồ về đúng vạch số 0.\n3. Lắp ampe kế nối tiếp với bóng đèn, vôn kế song song với bóng đèn.\n4. Đóng công tắc, đọc và ghi số chỉ I và U kèm đơn vị.",
      "Quy luật trong đoạn mạch nối tiếp:\n• Cường độ dòng điện như nhau tại mọi vị trí: \\[I = I_1 = I_2\\]\n• Hiệu điện thế tổng bằng tổng các hiệu điện thế thành phần: \\[U = U_1 + U_2\\]",
      "Quy luật trong đoạn mạch song song:\n• Cường độ dòng điện mạch chính bằng tổng các mạch rẽ: \\[I = I_1 + I_2\\]\n• Hiệu điện thế giữa hai đầu các đoạn mạch rẽ bằng nhau: \\[U = U_1 = U_2\\]"
    ],
    experiment: "Lắp ráp mạch điện gồm 2 pin 1,5V, 2 bóng đèn mắc nối tiếp; đo I và U1, U2 rồi so sánh tổng U1 + U2 với hiệu điện thế toàn mạch.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#1d4ed8">MẠCH NỐI TIẾP</text>
        <text x="80" y="38" text-anchor="middle" font-size="10.5" font-mono font-bold fill="#1e40af">I = I₁ = I₂ | U = U₁ + U₂</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#1d4ed8">MẠCH SONG SONG</text>
        <text x="80" y="38" text-anchor="middle" font-size="10.5" font-mono font-bold fill="#1e40af">U = U₁ = U₂ | I = I₁ + I₂</text>
      </g>
    </svg>`,
    quiz: {
      q: "Hai bóng đèn Đ₁ và Đ₂ mắc nối tiếp vào nguồn điện có hiệu điện thế 9V. Dùng vôn kế đo được hiệu điện thế giữa hai đầu đèn Đ₁ là 4V. Hiệu điện thế giữa hai đầu đèn Đ₂ là:",
      options: [
        "5V",
        "9V",
        "4V",
        "13V"
      ],
      ans: 0,
      expl: "Trong đoạn mạch nối tiếp: U = U₁ + U₂ ➔ U₂ = U - U₁ = 9 - 4 = 5V."
    }
  },
  {
    id: 26,
    num: "Bài 26",
    chapter: "CHƯƠNG VI. NHIỆT",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Năng lượng nhiệt và nội năng",
    desc: "Bản chất chuyển động nhiệt của phân tử, khái niệm năng lượng nhiệt, nội năng và hai cách làm biến đổi nội năng (thực hiện công, truyền nhiệt).",
    keyPoints: [
      "Các phân tử, nguyên tử cấu tạo nên vật luôn chuyển động hỗn loạn không ngừng; nhiệt độ của vật càng cao thì các phân tử chuyển động càng nhanh.",
      "Năng lượng nhiệt: Là tổng động năng của các phân tử cấu tạo nên vật.",
      "Nội năng của vật: Là tổng động năng (do chuyển động nhiệt) và thế năng tương tác giữa các phân tử cấu tạo nên vật.",
      "Hai cách làm biến đổi nội năng của một vật:\n1. Thực hiện công: Ví dụ cọ xát thanh kim loại làm nó nóng lên.\n2. Truyền nhiệt: Cho vật tiếp xúc với vật có nhiệt độ cao hơn (ví dụ thả thanh kim loại vào cốc nước sôi).",
      "Nhiệt lượng (kí hiệu Q): Là phần nội năng mà vật nhận được hay mất đi trong quá trình truyền nhiệt (đơn vị Joule, J hoặc calo)."
    ],
    experiment: "Thí nghiệm cọ xát đồng xu lên mặt bàn gỗ rồi chạm vào mu bàn tay thấy đồng xu nóng lên (thực hiện công làm tăng nội năng).",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="11" font-bold fill="#9a3412">THỰC HIỆN CÔNG</text>
        <text x="80" y="40" text-anchor="middle" font-size="10" fill="#c2410c">Cọ xát, nén khí làm nóng</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="11" font-bold fill="#9a3412">TRUYỀN NHIỆT</text>
        <text x="80" y="40" text-anchor="middle" font-size="10" fill="#c2410c">Từ vật nóng sang vật lạnh</text>
      </g>
    </svg>`,
    quiz: {
      q: "Hành động nào sau đây làm biến đổi nội năng của vật bằng hình thức THỰC HIỆN CÔNG?",
      options: [
        "Dùng búa đập nhiều lần vào thanh sắt làm thanh sắt nóng lên",
        "Thả thìa nhôm vào cốc nước nóng làm thìa nóng lên",
        "Phơi quần áo ướt dưới ánh nắng mặt trời",
        "Nung thanh thép trong lò than rực lửa"
      ],
      ans: 0,
      expl: "Dùng búa đập vào thanh sắt là tác dụng lực cơ học làm thanh sắt biến dạng và nóng lên (thực hiện công). Các trường hợp còn lại đều là quá trình truyền nhiệt."
    }
  },
  {
    id: 27,
    num: "Bài 27",
    chapter: "CHƯƠNG VI. NHIỆT",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Thực hành đo năng lượng nhiệt bằng joulemeter",
    desc: "Cấu tạo và nguyên lí của joulemeter điện tử, thực hành đo năng lượng điện chuyển hóa thành năng lượng nhiệt đun sôi nước.",
    keyPoints: [
      "Joulemeter là thiết bị đo trực tiếp lượng năng lượng điện mà nguồn điện cung cấp cho thiết bị tiêu thụ (đơn vị Joule, J).",
      "Bộ dụng cụ thí nghiệm: Nguồn điện 12V, joulemeter, bình nhiệt lượng kế cách nhiệt chứa nước, dây điện trở gia nhiệt và nhiệt kế điện tử.",
      "Quy trình đo:\n1. Đổ lượng nước xác định m vào bình nhiệt lượng kế, ghi nhiệt độ ban đầu t₁.\n2. Bật nguồn điện qua joulemeter, theo dõi số chỉ năng lượng E (J).\n3. Khi nhiệt độ nước tăng lên đến t₂, ngắt nguồn điện và đọc giá trị năng lượng trên joulemeter.",
      "Nhận xét: Năng lượng nhiệt cung cấp tỉ lệ thuận với khối lượng nước và độ tăng nhiệt độ Δt = t₂ - t₁."
    ],
    experiment: "Sử dụng nhiệt lượng kế và joulemeter để khảo sát mối liên hệ giữa năng lượng nhiệt cung cấp và độ tăng nhiệt độ của 100g nước cất.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#9a3412">JOULEMETER</text>
        <text x="80" y="40" text-anchor="middle" font-size="11" font-mono font-bold fill="#c2410c">Đo Năng lượng E (J)</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#9a3412">NHIỆT KẾ ĐO</text>
        <text x="80" y="40" text-anchor="middle" font-size="11" font-mono font-bold fill="#c2410c">Độ tăng nhiệt Δt (°C)</text>
      </g>
    </svg>`,
    quiz: {
      q: "Thiết bị Joulemeter trong phòng thí nghiệm Khoa học tự nhiên 8 dùng để đo trực tiếp đại lượng nào?",
      options: [
        "Năng lượng điện tiêu thụ chuyển hóa thành nhiệt (Joule)",
        "Nhiệt độ của nước trong bình (°C)",
        "Khối lượng của nước trong nhiệt lượng kế (kg)",
        "Cường độ dòng điện chạy qua dây dẫn (Ampe)"
      ],
      ans: 0,
      expl: "Joulemeter là dụng cụ đo trực tiếp năng lượng điện tiêu thụ (Joule) cung cấp cho dây đốt trong bình nhiệt lượng kế."
    }
  },
  {
    id: 28,
    num: "Bài 28",
    chapter: "CHƯƠNG VI. NHIỆT",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Sự truyền nhiệt",
    desc: "Ba hình thức truyền nhiệt cơ bản: Dẫn nhiệt (chất rắn), Đối lưu (chất lỏng, chất khí) và Bức xạ nhiệt (truyền qua chân không).",
    keyPoints: [
      "1. Dẫn nhiệt: Là sự truyền nhiệt năng từ phần này sang phần khác của một vật hoặc giữa hai vật tiếp xúc với nhau mà không có sự chuyển dời vĩ mô của vật chất.\n• Chất rắn dẫn nhiệt tốt nhất (đặc biệt là kim loại: bạc, đồng, nhôm); chất lỏng và chất khí dẫn nhiệt kém.",
      "2. Đối lưu: Là sự truyền nhiệt bằng các dòng chất lỏng hoặc chất khí chuyển động ngược chiều nhau do chênh lệch khối lượng riêng (chất lỏng nóng nở ra, nhẹ hơn nổi lên; chất lỏng lạnh chìm xuống).\n• Đối lưu là hình thức truyền nhiệt chủ yếu trong chất lỏng và chất khí.",
      "3. Bức xạ nhiệt: Là sự truyền nhiệt bằng các tia nhiệt (sóng điện từ), có thể truyền được trong cả môi trường chân không (nhiệt lượng từ Mặt Trời truyền đến Trái Đất).\n• Vật có bề mặt sẫm màu, gồ ghề hấp thụ và bức xạ nhiệt tốt hơn vật sáng màu, nhẵn bóng."
    ],
    experiment: "Thí nghiệm gắn các đinh sáp dọc thanh đồng nung đầu mút (đinh rụng dần chứng minh dẫn nhiệt); thả hạt thuốc tím vào đáy cốc nước đun nóng (dòng đối lưu màu tím cuộn lên).",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
      <g transform="translate(45, 25)">
        <rect x="0" y="0" width="115" height="50" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
        <text x="57" y="20" text-anchor="middle" font-size="11" font-bold fill="#9a3412">1. DẪN NHIỆT</text>
        <text x="57" y="38" text-anchor="middle" font-size="9" fill="#c2410c">Chất rắn (Kim loại)</text>
      </g>
      <g transform="translate(185, 25)">
        <rect x="0" y="0" width="115" height="50" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
        <text x="57" y="20" text-anchor="middle" font-size="11" font-bold fill="#9a3412">2. ĐỐI LƯU</text>
        <text x="57" y="38" text-anchor="middle" font-size="9" fill="#c2410c">Chất lỏng &amp; Khí</text>
      </g>
      <g transform="translate(325, 25)">
        <rect x="0" y="0" width="125" height="50" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
        <text x="62" y="20" text-anchor="middle" font-size="11" font-bold fill="#9a3412">3. BỨC XẠ NHIỆT</text>
        <text x="62" y="38" text-anchor="middle" font-size="9" fill="#c2410c">Tia nhiệt (Chân không)</text>
      </g>
    </svg>`,
    quiz: {
      q: "Năng lượng nhiệt từ Mặt Trời truyền xuyên qua không gian vũ trụ chân không đến bề mặt Trái Đất chủ yếu bằng hình thức nào?",
      options: [
        "Bức xạ nhiệt",
        "Dẫn nhiệt",
        "Đối lưu",
        "Cả dẫn nhiệt và đối lưu"
      ],
      ans: 0,
      expl: "Trong không gian chân không không có các phân tử vật chất để dẫn nhiệt hay đối lưu, nên năng lượng nhiệt chỉ có thể truyền đi dưới dạng sóng điện từ (bức xạ nhiệt)."
    }
  },
  {
    id: 29,
    num: "Bài 29",
    chapter: "CHƯƠNG VI. NHIỆT",
    branch: "Vật lí",
    branchColor: "from-blue-600 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Sự nở vì nhiệt",
    desc: "Sự nở vì nhiệt của chất rắn, lỏng, khí; so sánh mức độ nở vì nhiệt và các ứng dụng thực tế (khe co giãn, băng kép).",
    keyPoints: [
      "Quy luật chung: Hầu hết các chất rắn, chất lỏng và chất khí đều NỞ RA khi nóng lên và CO LẠI khi lạnh đi.",
      "So sánh độ nở vì nhiệt của các chất: \\[\\text{Chất khí} > \\text{Chất lỏng} > \\text{Chất rắn}\\] (Các chất khí khác nhau nở vì nhiệt giống nhau; các chất lỏng và chất rắn khác nhau nở vì nhiệt khác nhau).",
      "Ứng dụng thực tế:\n• Khe co giãn trên đường ray xe lửa, đầu cầu thép: Tránh đường ray bị cong vênh, cầu bị nứt vỡ khi trời nắng nóng.\n• Băng kép (ghép từ hai thanh kim loại nở vì nhiệt khác nhau như đồng và thép): Khi nung nóng sẽ bị uốn cong về phía kim loại nở ít hơn (ứng dụng đóng ngắt tự động trong bàn là, ấm siêu tốc).\n• Nhiệt kế thủy ngân/rượu: Hoạt động dựa trên sự giãn nở vì nhiệt của chất lỏng."
    ],
    experiment: "Thí nghiệm hơ nóng băng kép đồng - thép: Băng kép cong về phía thanh thép do đồng nở vì nhiệt nhiều hơn thép.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#9a3412">SO SÁNH ĐỘ NỞ</text>
        <text x="80" y="38" text-anchor="middle" font-size="11" font-mono font-bold fill="#c2410c">Khí &gt; Lỏng &gt; Rắn</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#9a3412">ỨNG DỤNG BĂNG KÉP</text>
        <text x="80" y="38" text-anchor="middle" font-size="10.5" fill="#c2410c">Đóng ngắt bàn là tự động</text>
      </g>
    </svg>`,
    quiz: {
      q: "Tại sao chỗ tiếp nối giữa hai đầu thanh ray đường sắt lại luôn được đặt cách nhau một khe hở nhỏ?",
      options: [
        "Để khi trời nóng, thanh ray nở dài ra không bị kích ép làm cong vênh đường ray",
        "Để tiết kiệm kim loại thép khi làm đường sắt",
        "Để tạo âm thanh nhịp nhàng báo hiệu tàu hỏa đang chạy",
        "Để nước mưa thoát nhanh chóng không gây rỉ sét"
      ],
      ans: 0,
      expl: "Chất rắn nở ra khi nhiệt độ tăng. Chừa khe hở để khi mùa hè nhiệt độ cao, thép nở dài ra vẫn có không gian giãn nở, tránh lực đẩy cực lớn làm uốn cong trật ray."
    }
  }
];
