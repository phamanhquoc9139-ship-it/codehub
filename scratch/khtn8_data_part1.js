// KHTN 8 Data Part 1: Bài 1 đến Bài 12 (Mở đầu & Hóa học: Chương I & II)
module.exports = [
  {
    id: 1,
    num: "Bài 1",
    chapter: "BÀI MỞ ĐẦU",
    branch: "Mở đầu",
    branchColor: "from-blue-600 to-cyan-600",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    title: "Sử dụng một số hóa chất, thiết bị cơ bản trong phòng thí nghiệm",
    desc: "Quy tắc an toàn hóa chất, nhận biết nhãn cảnh báo nguy hiểm, sử dụng dụng cụ đo lường và thiết bị điện thí nghiệm.",
    keyPoints: [
      "Đọc kĩ nhãn hóa chất trước khi dùng: tên, công thức, độ tinh khiết, hạn dùng và các biểu tượng cảnh báo nguy hiểm (dễ cháy, ăn mòn, độc hại, nguy hại môi trường).",
      "Quy tắc tuyệt đối: Không nếm, không ngửi trực tiếp, không sờ tay vào hóa chất; không đổ hóa chất thừa trở lại lọ gốc; phân loại chất thải theo quy định.",
      "Pha loãng acid đặc an toàn: Luôn rót từ từ acid vào nước và khuấy nhẹ bằng đũa thủy tinh; TUYỆT ĐỐI KHÔNG làm ngược lại vì sẽ gây bắn nổ nguy hiểm.",
      "Sử dụng điện an toàn trong thí nghiệm: Mắc ampe kế nối tiếp, vôn kế song song; ngắt nguồn điện trước khi thay đổi mạch; tay khô ráo khi thao tác."
    ],
    experiment: "Thực hành nhận biết kí hiệu cảnh báo nguy hiểm trên chai hóa chất và lắp ráp bộ đo điện (nguồn pin 3V, bóng đèn, ampe kế đo cường độ, vôn kế đo hiệu điện thế).",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="15" width="460" height="90" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <g transform="translate(45, 28)">
        <polygon points="30,5 55,45 5,45" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
        <text x="30" y="38" text-anchor="middle" font-size="20">⚠️</text>
        <text x="30" y="62" text-anchor="middle" font-size="10" font-bold fill="#92400e">Ăn mòn / Độc</text>
      </g>
      <g transform="translate(160, 28)">
        <rect x="10" y="10" width="45" height="38" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
        <text x="32" y="35" text-anchor="middle" font-size="18">🔥</text>
        <text x="32" y="62" text-anchor="middle" font-size="10" font-bold fill="#991b1b">Dễ cháy nổ</text>
      </g>
      <g transform="translate(270, 28)">
        <circle cx="30" cy="28" r="20" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
        <text x="30" y="35" text-anchor="middle" font-size="16">💧➔🧪</text>
        <text x="30" y="62" text-anchor="middle" font-size="10" font-bold fill="#065f46">Acid vào nước</text>
      </g>
      <g transform="translate(380, 28)">
        <rect x="10" y="12" width="50" height="34" rx="6" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
        <text x="35" y="34" text-anchor="middle" font-size="12" font-mono font-bold fill="#5b21b6">[A] nt / [V] // </text>
        <text x="35" y="62" text-anchor="middle" font-size="10" font-bold fill="#5b21b6">Mắc mạch an toàn</text>
      </g>
    </svg>`,
    quiz: {
      q: "Quy tắc nào sau đây là BẮT BUỘC khi pha loãng dung dịch sulfuric acid đặc (H₂SO₄)?",
      options: [
        "Rót từ từ acid đặc vào cốc nước và khuấy đều bằng đũa thủy tinh",
        "Rót nhanh nước vào lọ acid đặc để làm nguội",
        "Đổ đồng thời cả nước và acid đặc vào một cốc thủy tinh",
        "Đun nóng acid đặc trước rồi mới đổ nước vào"
      ],
      ans: 0,
      expl: "Quá trình hòa tan acid đặc tỏa nhiệt cực lớn. Phải rót từ từ acid vào nước để nhiệt lượng tản đều, nếu đổ nước vào acid, nước sẽ sôi đột ngột và bắn acid ra ngoài gây bỏng nghiêm trọng."
    }
  },
  {
    id: 2,
    num: "Bài 2",
    chapter: "CHƯƠNG I. PHẢN ỨNG HÓA HỌC",
    branch: "Hóa học",
    branchColor: "from-emerald-600 to-teal-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Phản ứng hóa học",
    desc: "Phân biệt biến đổi vật lí và biến đổi hóa học, bản chất phản ứng và năng lượng phản ứng (tỏa nhiệt, thu nhiệt).",
    keyPoints: [
      "Biến đổi vật lí: Thay đổi trạng thái, hình dạng, kích thước nhưng KHÔNG tạo thành chất mới (ví dụ: nước đá tan chảy, cồn bay hơi).",
      "Biến đổi hóa học: Có sự biến đổi từ chất này thành chất khác có tính chất mới (ví dụ: than cháy tạo CO₂, đinh sắt bị gỉ tạo rỉ sắt Fe₂O₃·nH₂O).",
      "Dấu hiệu nhận biết phản ứng hóa học: Xuất hiện chất kết tủa, sinh chất khí, đổi màu sắc, tỏa nhiệt hoặc phát sáng.",
      "Bản chất: Trong phản ứng hóa học, liên kết giữa các nguyên tử bị phá vỡ và liên kết mới được hình thành; các nguyên tử chỉ sắp xếp lại, số lượng nguyên tử mỗi loại được bảo toàn.",
      "Năng lượng phản ứng: Phản ứng tỏa nhiệt giải phóng năng lượng (đốt cháy nhiên liệu); phản ứng thu nhiệt hấp thụ năng lượng từ môi trường."
    ],
    experiment: "Thí nghiệm đốt cháy đường saccharose và phản ứng giữa dung dịch BaCl₂ với Na₂SO₄ tạo kết tủa trắng BaSO₄.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(60, 30)">
        <rect x="0" y="0" width="110" height="42" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="55" y="25" text-anchor="middle" font-size="11" font-bold fill="#065f46">Chất phản ứng</text>
        <text x="55" y="58" text-anchor="middle" font-size="9.5" fill="#047857">Liên kết cũ đứt gãy</text>
      </g>
      <path d="M 185 51 L 225 51" stroke="#059669" stroke-width="3" marker-end="url(#arrow)"/>
      <polygon points="228,51 220,47 220,55" fill="#059669"/>
      <text x="207" y="42" text-anchor="middle" font-size="9" font-bold fill="#047857">Sắp xếp lại</text>
      <g transform="translate(245, 30)">
        <rect x="0" y="0" width="110" height="42" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="55" y="25" text-anchor="middle" font-size="11" font-bold fill="#065f46">Sản phẩm mới</text>
        <text x="55" y="58" text-anchor="middle" font-size="9.5" fill="#047857">Liên kết mới tạo thành</text>
      </g>
      <g transform="translate(370, 30)">
        <rect x="0" y="0" width="85" height="42" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="42" y="20" text-anchor="middle" font-size="10" font-bold fill="#b45309">Năng lượng</text>
        <text x="42" y="35" text-anchor="middle" font-size="9" fill="#92400e">Tỏa / Thu nhiệt</text>
      </g>
    </svg>`,
    quiz: {
      q: "Hiện tượng nào sau đây là dấu hiệu rõ rệt của một BIẾN ĐỔI HÓA HỌC?",
      options: [
        "Vôi sống (CaO) cho vào nước sôi lên, tỏa nhiệt mạnh và biến thành vôi tôi Ca(OH)₂",
        "Nước hoa mở nắp lâu ngày bị bay hơi bớt thể tích",
        "Thanh thủy tinh bị hơ nóng uốn cong hình dạng",
        "Hòa tan đường vào cốc nước tạo thành nước đường trong suốt"
      ],
      ans: 0,
      expl: "CaO phản ứng với nước tạo chất mới là Ca(OH)₂ và tỏa nhiệt mạnh (phản ứng hóa học). Các hiện tượng còn lại chỉ là biến đổi trạng thái hoặc hình dạng vật lí."
    }
  },
  {
    id: 3,
    num: "Bài 3",
    chapter: "CHƯƠNG I. PHẢN ỨNG HÓA HỌC",
    branch: "Hóa học",
    branchColor: "from-emerald-600 to-teal-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Mol và tỉ khối chất khí",
    desc: "Khái niệm mol, khối lượng mol, thể tích mol chất khí ở điều kiện chuẩn (25°C, 1 bar) và tỉ khối chất khí.",
    keyPoints: [
      "Mol là lượng chất chứa 6,022 × 10²³ hạt vi mô (hằng số Avogadro, kí hiệu N_A).",
      "Khối lượng mol (M): Khối lượng của 1 mol chất tính bằng gam (g/mol). Công thức: \\[n = \\frac{m}{M} \\iff m = n \\cdot M\\]",
      "Thể tích mol chất khí ở điều kiện chuẩn (25°C, 1 bar): 1 mol chất khí bất kì chiếm thể tích 24,79 Lít. Công thức: \\[V = n \\times 24,79 \\quad (L) \\iff n = \\frac{V}{24,79}\\]",
      "Tỉ khối của khí A đối với khí B: \\[d_{A/B} = \\frac{M_A}{M_B} \\quad ; \\quad d_{A/kk} = \\frac{M_A}{29}\\] (Khí A nặng hơn không khí nếu d > 1, nhẹ hơn nếu d < 1)."
    ],
    experiment: "Thu thập khí hydrogen (H₂, M=2 g/mol nhẹ hơn không khí) bằng cách úp ngược ống nghiệm và thu khí carbon dioxide (CO₂, M=44 g/mol nặng hơn không khí) bằng cách đặt đứng ống nghiệm.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
      <g transform="translate(50, 30)">
        <rect x="0" y="0" width="100" height="50" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="50" y="22" text-anchor="middle" font-size="11" font-bold fill="#166534">1 MOL CHẤT</text>
        <text x="50" y="40" text-anchor="middle" font-size="10" font-mono fill="#15803d">6,022 × 10²³ hạt</text>
      </g>
      <g transform="translate(170, 30)">
        <rect x="0" y="0" width="140" height="50" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="70" y="22" text-anchor="middle" font-size="11" font-bold fill="#166534">THỂ TÍCH KHÍ (đkc)</text>
        <text x="70" y="40" text-anchor="middle" font-size="10" font-mono font-bold fill="#15803d">V = n × 24,79 Lít</text>
      </g>
      <g transform="translate(330, 30)">
        <rect x="0" y="0" width="110" height="50" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="55" y="22" text-anchor="middle" font-size="11" font-bold fill="#166534">TỈ KHỐI KHÍ</text>
        <text x="55" y="40" text-anchor="middle" font-size="10" font-mono fill="#15803d">d = M_A / 29</text>
      </g>
    </svg>`,
    quiz: {
      q: "Ở điều kiện chuẩn (25°C, 1 bar), thể tích của 0,5 mol khí Oxygen (O₂) là bao nhiêu?",
      options: [
        "12,395 Lít",
        "24,79 Lít",
        "11,2 Lít",
        "22,4 Lít"
      ],
      ans: 0,
      expl: "Áp dụng công thức V = n × 24,79 Lít ở điều kiện chuẩn: V = 0,5 × 24,79 = 12,395 Lít (chú ý SGK mới tính theo 1 bar = 24,79L, không dùng 22,4L của đktc cũ)."
    }
  },
  {
    id: 4,
    num: "Bài 4",
    chapter: "CHƯƠNG I. PHẢN ỨNG HÓA HỌC",
    branch: "Hóa học",
    branchColor: "from-emerald-600 to-teal-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Dung dịch và nồng độ",
    desc: "Khái niệm dung dịch, chất tan, dung môi; độ tan; nồng độ phần trăm (C%) và nồng độ mol (C_M).",
    keyPoints: [
      "Dung dịch là hỗn hợp đồng nhất giữa chất tan và dung môi (thường là nước).",
      "Dung dịch chưa bão hòa còn hòa tan thêm chất tan; dung dịch bão hòa không thể hòa tan thêm chất tan đó ở nhiệt độ xác định.",
      "Nồng độ phần trăm (C%): Biểu thị số gam chất tan có trong 100 gam dung dịch:\n\\[C\\% = \\frac{m_{ct}}{m_{dd}} \\times 100\\% \\quad (m_{dd} = m_{ct} + m_{dm})\\]",
      "Nồng độ mol (C_M): Biểu thị số mol chất tan có trong 1 lít dung dịch:\n\\[C_M = \\frac{n}{V} \\quad (mol/L \\text{ hoặc } M, \\text{ với } V \\text{ tính bằng Lít})\\]",
      "Quy trình pha chế: Tính toán lượng chất tan và dung môi ➔ Cân/đong chính xác ➔ Hòa tan hoàn toàn vào bình định mức."
    ],
    experiment: "Thí nghiệm pha chế 100 g dung dịch muối ăn NaCl 5% từ tinh thể muối ăn và nước cất; pha chế 100 mL dung dịch CuSO₄ 0,5 M.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <g transform="translate(60, 30)">
        <rect x="0" y="0" width="170" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="85" y="20" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">NỒNG ĐỘ PHẦN TRĂM</text>
        <text x="85" y="38" text-anchor="middle" font-size="11" font-mono font-bold fill="#1e40af">C% = (m_ct / m_dd) × 100%</text>
      </g>
      <g transform="translate(260, 30)">
        <rect x="0" y="0" width="170" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="85" y="20" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">NỒNG ĐỘ MOL</text>
        <text x="85" y="38" text-anchor="middle" font-size="11" font-mono font-bold fill="#1e40af">C_M = n / V (mol/L)</text>
      </g>
    </svg>`,
    quiz: {
      q: "Hòa tan 10 gam đường vào 90 gam nước cất. Nồng độ phần trăm của dung dịch đường thu được là:",
      options: [
        "10%",
        "11,1%",
        "9%",
        "12%"
      ],
      ans: 0,
      expl: "Khối lượng dung dịch = m_chất_tan + m_dung_môi = 10 + 90 = 100 g. Nồng độ C% = (10 / 100) × 100% = 10%."
    }
  },
  {
    id: 5,
    num: "Bài 5",
    chapter: "CHƯƠNG I. PHẢN ỨNG HÓA HỌC",
    branch: "Hóa học",
    branchColor: "from-emerald-600 to-teal-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Định luật bảo toàn khối lượng và phương trình hóa học",
    desc: "Nội dung định luật bảo toàn khối lượng, quy tắc lập phương trình hóa học và ý nghĩa các hệ số tỉ lệ.",
    keyPoints: [
      "Định luật bảo toàn khối lượng: Trong một phản ứng hóa học, tổng khối lượng của các chất sản phẩm bằng tổng khối lượng của các chất phản ứng:\n\\[\\sum m_{phản\\ ứng} = \\sum m_{sản\\ phẩm}\\]",
      "Nguyên nhân: Trong phản ứng, các nguyên tử chỉ liên kết lại với nhau; số lượng nguyên tử của mỗi nguyên tố được giữ nguyên vẹn trước và sau phản ứng.",
      "Phương trình hóa học: Biểu diễn ngắn gọn phản ứng hóa học gồm công thức hóa học và hệ số tỉ lệ nguyên tối giản.",
      "Quy tắc cân bằng: Đặt hệ số trước công thức hóa học sao cho số nguyên tử mỗi nguyên tố ở hai vế bằng nhau; TUYỆT ĐỐI KHÔNG thay đổi chỉ số chân của công thức."
    ],
    experiment: "Thí nghiệm cân bình kín chứa dung dịch BaCl₂ và Na₂SO₄ trước và sau khi lắc trộn phản ứng: Kim cân thăng bằng hoàn toàn.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
      <g transform="translate(60, 30)">
        <rect x="0" y="0" width="115" height="50" rx="8" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/>
        <text x="57" y="22" text-anchor="middle" font-size="11" font-bold fill="#6b21a8">m (chất tham gia)</text>
        <text x="57" y="40" text-anchor="middle" font-size="10" font-mono fill="#7e22ce">m_A + m_B</text>
      </g>
      <text x="215" y="60" text-anchor="middle" font-size="24" font-bold fill="#9333ea">=</text>
      <g transform="translate(255, 30)">
        <rect x="0" y="0" width="115" height="50" rx="8" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/>
        <text x="57" y="22" text-anchor="middle" font-size="11" font-bold fill="#6b21a8">m (sản phẩm)</text>
        <text x="57" y="40" text-anchor="middle" font-size="10" font-mono fill="#7e22ce">m_C + m_D</text>
      </g>
      <text x="425" y="60" text-anchor="middle" font-size="18">⚖️</text>
    </svg>`,
    quiz: {
      q: "Đốt cháy hoàn toàn 2,4 gam kim loại Magnesium (Mg) trong không khí thu được 4,0 gam Magnesium oxide (MgO). Khối lượng khí Oxygen (O₂) đã phản ứng là:",
      options: [
        "1,6 gam",
        "6,4 gam",
        "2,0 gam",
        "1,2 gam"
      ],
      ans: 0,
      expl: "Theo định luật bảo toàn khối lượng: m_Mg + m_O₂ = m_MgO ➔ m_O₂ = 4,0 - 2,4 = 1,6 gam."
    }
  },
  {
    id: 6,
    num: "Bài 6",
    chapter: "CHƯƠNG I. PHẢN ỨNG HÓA HỌC",
    branch: "Hóa học",
    branchColor: "from-emerald-600 to-teal-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Tính theo phương trình hóa học",
    desc: "Phương pháp giải bài toán định lượng theo phương trình hóa học, xác định chất dư - chất hết và tính hiệu suất phản ứng.",
    keyPoints: [
      "Các bước giải bài toán theo PTHH:\n1. Đổi dữ kiện đề bài (khối lượng m, thể tích khí V) thành số mol n.\n2. Viết và cân bằng chính xác phương trình hóa học.\n3. Dựa vào tỉ lệ hệ số mol trên phương trình để tìm số mol chất cần tính.\n4. Đổi số mol chất tìm được sang đại lượng yêu cầu (khối lượng, thể tích khí, nồng độ).",
      "Bài toán lượng chất dư: So sánh tỉ số giữa số mol ban đầu và hệ số trong PTHH; tỉ số nào nhỏ hơn thì chất đó phản ứng hết, tính theo chất hết.",
      "Hiệu suất phản ứng (H%): \\[H\\% = \\frac{m_{thực\\ tế}}{m_{lí\\ thuyết}} \\times 100\\%\\] (với phản ứng sinh sản phẩm) hoặc \\[H\\% = \\frac{m_{phản\\ ứng}}{m_{ban\\ đầu}} \\times 100\\%\\] (với chất tham gia)."
    ],
    experiment: "Tính toán lượng vôi sống CaO điều chế được từ phản ứng nung đá vôi CaCO₃ ➔ CaO + CO₂ với hiệu suất 85%.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
      <g transform="translate(45, 30)">
        <circle cx="25" cy="25" r="20" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
        <text x="25" y="30" text-anchor="middle" font-size="11" font-bold fill="#c2410c">m, V</text>
        <text x="25" y="58" text-anchor="middle" font-size="9" fill="#9a3412">1. Đổi ra mol</text>
      </g>
      <path d="M 95 55 L 135 55" stroke="#ea580c" stroke-width="2"/>
      <g transform="translate(145, 30)">
        <rect x="0" y="0" width="80" height="50" rx="8" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
        <text x="40" y="23" text-anchor="middle" font-size="10" font-bold fill="#c2410c">Lập PTHH</text>
        <text x="40" y="40" text-anchor="middle" font-size="9" font-mono fill="#9a3412">A + B ➔ C</text>
      </g>
      <path d="M 235 55 L 275 55" stroke="#ea580c" stroke-width="2"/>
      <g transform="translate(285, 30)">
        <rect x="0" y="0" width="85" height="50" rx="8" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
        <text x="42" y="23" text-anchor="middle" font-size="10" font-bold fill="#c2410c">Tỉ lệ mol</text>
        <text x="42" y="40" text-anchor="middle" font-size="9" font-mono fill="#9a3412">n_tìm = n_cho</text>
      </g>
      <path d="M 380 55 L 415 55" stroke="#ea580c" stroke-width="2"/>
      <g transform="translate(425, 30)">
        <circle cx="20" cy="25" r="18" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
        <text x="20" y="29" text-anchor="middle" font-size="10" font-bold fill="#c2410c">Đáp số</text>
      </g>
    </svg>`,
    quiz: {
      q: "Cho 6,5 gam Zinc (Zn, M=65) tác dụng hoàn toàn với dung dịch HCl dư theo phương trình: Zn + 2HCl ➔ ZnCl₂ + H₂↑. Thể tích khí H₂ thoát ra ở điều kiện chuẩn (25°C, 1 bar) là:",
      options: [
        "2,479 Lít",
        "2,24 Lít",
        "4,958 Lít",
        "1,2395 Lít"
      ],
      ans: 0,
      expl: "Số mol Zn = 6,5 / 65 = 0,1 mol. Theo PTHH, n_H₂ = n_Zn = 0,1 mol. Thể tích V = 0,1 × 24,79 = 2,479 Lít."
    }
  },
  {
    id: 7,
    num: "Bài 7",
    chapter: "CHƯƠNG I. PHẢN ỨNG HÓA HỌC",
    branch: "Hóa học",
    branchColor: "from-emerald-600 to-teal-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Tốc độ phản ứng và chất xúc tác",
    desc: "Khái niệm tốc độ phản ứng, các yếu tố ảnh hưởng (nồng độ, nhiệt độ, diện tích tiếp xúc, áp suất) và vai trò của chất xúc tác.",
    keyPoints: [
      "Tốc độ phản ứng là đại lượng đặc trưng cho sự nhanh hay chậm của một phản ứng hóa học.",
      "Các yếu tố làm tăng tốc độ phản ứng:\n• Tăng nồng độ chất phản ứng.\n• Tăng nhiệt độ môi trường.\n• Tăng diện tích bề mặt tiếp xúc (nghiền nhỏ, đập vụn chất rắn).\n• Tăng áp suất (đối với phản ứng có chất khí tham gia).",
      "Chất xúc tác: Là chất làm tăng tốc độ phản ứng nhưng không bị tiêu hao hay biến đổi về chất sau khi phản ứng kết thúc (ví dụ enzyme trong sinh học, MnO₂ xúc tác phân hủy H₂O₂ thành O₂)."
    ],
    experiment: "Thí nghiệm hòa tan viên sủi C trong nước nóng vs nước lạnh; phản ứng phân hủy hydrogen peroxide (H₂O₂) khi có mặt bột xúc tác MnO₂ giải phóng khí O₂ làm que đóm bùng cháy.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
      <g transform="translate(45, 28)">
        <text x="35" y="25" text-anchor="middle" font-size="22">🌡️</text>
        <text x="35" y="55" text-anchor="middle" font-size="9.5" font-bold fill="#854d0e">Tăng nhiệt độ</text>
      </g>
      <g transform="translate(135, 28)">
        <text x="35" y="25" text-anchor="middle" font-size="22">🧪</text>
        <text x="35" y="55" text-anchor="middle" font-size="9.5" font-bold fill="#854d0e">Tăng nồng độ</text>
      </g>
      <g transform="translate(225, 28)">
        <text x="40" y="25" text-anchor="middle" font-size="22">🧩</text>
        <text x="40" y="55" text-anchor="middle" font-size="9.5" font-bold fill="#854d0e">Diện tích bề mặt</text>
      </g>
      <g transform="translate(325, 28)">
        <text x="35" y="25" text-anchor="middle" font-size="22">⚡</text>
        <text x="35" y="55" text-anchor="middle" font-size="9.5" font-bold fill="#854d0e">Chất xúc tác</text>
      </g>
      <g transform="translate(415, 28)">
        <text x="35" y="25" text-anchor="middle" font-size="22">⏱️</text>
        <text x="35" y="55" text-anchor="middle" font-size="9.5" font-bold fill="#854d0e">Tăng tốc độ</text>
      </g>
    </svg>`,
    quiz: {
      q: "Hành động nào sau đây ứng dụng việc TĂNG DIỆN TÍCH BỀ MẶT TIẾP XÚC để làm tăng tốc độ phản ứng cháy?",
      options: [
        "Chẻ nhỏ củi gỗ trước khi cho vào bếp đun nấu",
        "Thổi thêm quạt gió cung cấp nhiều oxygen",
        "Ủ ấm bếp lò bằng tro trấu qua đêm",
        "Cho thêm hóa chất xúc tác vào than củi"
      ],
      ans: 0,
      expl: "Chẻ nhỏ củi gỗ làm tăng diện tích bề mặt tiếp xúc giữa gỗ và oxygen trong không khí, giúp phản ứng cháy diễn ra nhanh hơn và mãnh liệt hơn."
    }
  },
  {
    id: 8,
    num: "Bài 8",
    chapter: "CHƯƠNG II. MỘT SỐ HỢP CHẤT THÔNG DỤNG",
    branch: "Hóa học",
    branchColor: "from-emerald-600 to-teal-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Acid",
    desc: "Khái niệm acid, tính chất hóa học chung (đổi màu quỳ tím, tác dụng với kim loại, base, oxide base) và ứng dụng các acid quan trọng.",
    keyPoints: [
      "Acid là những hợp chất mà phân tử gồm một hay nhiều nguyên tử hydrogen liên kết với gốc acid. Khi tan trong nước tạo ra ion H⁺.",
      "Tính chất hóa học chung của acid:\n1. Làm đổi màu quỳ tím thành đỏ.\n2. Tác dụng với nhiều kim loại (đứng trước H) ➔ Muối + H₂↑ (Ví dụ: Zn + 2HCl ➔ ZnCl₂ + H₂↑).\n3. Tác dụng với oxide base ➔ Muối + H₂O (Ví dụ: CuO + 2HCl ➔ CuCl₂ + H₂O).\n4. Tác dụng với base (phản ứng trung hòa) ➔ Muối + H₂O (Ví dụ: HCl + NaOH ➔ NaCl + H₂O).",
      "Các acid phổ biến: Hydrochloric acid (HCl), Sulfuric acid (H₂SO₄), Nitric acid (HNO₃), Acetic acid (CH₃COOH trong giấm ăn)."
    ],
    experiment: "Thí nghiệm nhỏ dung dịch HCl vào quỳ tím (hóa đỏ), cho lá kẽm Zn sủi bọt khí H₂, cho bột CuO màu đen tan thành dung dịch CuCl₂ màu xanh lam.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
      <g transform="translate(45, 25)">
        <rect x="0" y="0" width="70" height="40" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="35" y="24" text-anchor="middle" font-size="12" font-bold fill="#991b1b">ACID (H⁺)</text>
      </g>
      <g transform="translate(145, 25)">
        <text x="0" y="15" font-size="10.5" font-bold fill="#dc2626">• Quỳ tím hóa ĐỎ</text>
        <text x="0" y="32" font-size="10.5" font-bold fill="#b91c1c">• + Kim loại (trước H) ➔ Muối + H₂↑</text>
      </g>
      <g transform="translate(325, 25)">
        <text x="0" y="15" font-size="10.5" font-bold fill="#b91c1c">• + Base ➔ Muối + H₂O</text>
        <text x="0" y="32" font-size="10.5" font-bold fill="#991b1b">• + Oxide base ➔ Muối + H₂O</text>
      </g>
      <text x="250" y="93" text-anchor="middle" font-size="10" font-bold fill="#7f1d1d">Ví dụ: HCl, H₂SO₄, HNO₃, CH₃COOH</text>
    </svg>`,
    quiz: {
      q: "Dãy kim loại nào sau đây ĐỀU tác dụng được với dung dịch hydrochloric acid (HCl) loãng giải phóng khí hydrogen?",
      options: [
        "Mg, Zn, Fe, Al",
        "Cu, Ag, Au, Fe",
        "Zn, Cu, Al, Fe",
        "Ag, Mg, Fe, Zn"
      ],
      ans: 0,
      expl: "Chỉ các kim loại đứng trước hydrogen trong dãy hoạt động hóa học (như K, Na, Ca, Mg, Al, Zn, Fe) mới tác dụng với acid loãng giải phóng H₂. Các kim loại Cu, Ag, Au đứng sau H nên không phản ứng."
    }
  },
  {
    id: 9,
    num: "Bài 9",
    chapter: "CHƯƠNG II. MỘT SỐ HỢP CHẤT THÔNG DỤNG",
    branch: "Hóa học",
    branchColor: "from-emerald-600 to-teal-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Base. Thang pH",
    desc: "Khái niệm base, phân loại kiềm và base không tan, phản ứng trung hòa và ý nghĩa chỉ số pH trong đời sống.",
    keyPoints: [
      "Base là hợp chất mà phân tử gồm nguyên tử kim loại liên kết với một hay nhiều nhóm hydroxide (-OH). Khi tan trong nước tạo ion OH⁻.",
      "Phân loại: Base tan trong nước gọi là kiềm (NaOH, KOH, Ba(OH)₂, Ca(OH)₂); base không tan như Cu(OH)₂, Fe(OH)₃, Al(OH)₃.",
      "Tính chất hóa học:\n1. Dung dịch kiềm làm quỳ tím hóa XANH, phenolphthalein không màu hóa HỒNG.\n2. Tác dụng với acid tạo muối và nước (phản ứng trung hòa).\n3. Dung dịch kiềm tác dụng với oxide acid tạo muối và nước.\n4. Base không tan bị nhiệt phân hủy thành oxide base và hơi nước.",
      "Thang pH (0 đến 14): Đo độ acid/base của dung dịch:\n• pH < 7: Môi trường acid (pH càng nhỏ, tính acid càng mạnh).\n• pH = 7: Môi trường trung tính (nước cất).\n• pH > 7: Môi trường base (pH càng lớn, tính base càng mạnh)."
    ],
    experiment: "Thí nghiệm đo pH của giấm ăn, nước chanh, nước xà phòng, nước vôi trong bằng giấy chỉ thị pH hoặc bút đo pH điện tử.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <g transform="translate(45, 25)">
        <!-- Dải màu pH -->
        <defs>
          <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#ef4444"/>
            <stop offset="50%" stop-color="#10b981"/>
            <stop offset="100%" stop-color="#3b82f6"/>
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="390" height="24" rx="12" fill="url(#phGrad)"/>
        <text x="30" y="26" font-size="10" font-bold fill="#fff">pH = 1 (Acid)</text>
        <text x="205" y="26" text-anchor="middle" font-size="10" font-bold fill="#fff">pH = 7 (Trung tính)</text>
        <text x="370" y="26" text-anchor="end" font-size="10" font-bold fill="#fff">pH = 14 (Base)</text>
        <text x="205" y="58" text-anchor="middle" font-size="10.5" font-bold fill="#1e40af">Base tan: Quỳ tím hóa XANH • Phenolphthalein hóa HỒNG</text>
      </g>
    </svg>`,
    quiz: {
      q: "Dung dịch nào sau đây làm cho phenolphthalein không màu chuyển sang màu hồng?",
      options: [
        "Dung dịch Sodium hydroxide (NaOH)",
        "Dung dịch Hydrochloric acid (HCl)",
        "Dung dịch Nước cất tinh khiết",
        "Dung dịch Muối ăn (NaCl)"
      ],
      ans: 0,
      expl: "Chỉ có dung dịch base tan (kiềm) như NaOH mới có khả năng làm thuốc thử phenolphthalein không màu chuyển sang màu hồng đặc trưng."
    }
  },
  {
    id: 10,
    num: "Bài 10",
    chapter: "CHƯƠNG II. MỘT SỐ HỢP CHẤT THÔNG DỤNG",
    branch: "Hóa học",
    branchColor: "from-emerald-600 to-teal-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Oxide",
    desc: "Khái niệm và phân loại oxide (oxide base, oxide acid, oxide lưỡng tính, oxide trung tính), tính chất hóa học cơ bản.",
    keyPoints: [
      "Oxide là hợp chất gồm hai nguyên tố, trong đó có một nguyên tố là oxygen.",
      "Phân loại 4 nhóm oxide:\n1. Oxide base: Thường là oxide kim loại (Na₂O, CaO, BaO, CuO); tác dụng với acid tạo muối và nước.\n2. Oxide acid: Thường là oxide phi kim (CO₂, SO₂, SO₃, P₂O₅); tác dụng với dung dịch base tạo muối và nước.\n3. Oxide lưỡng tính: Tác dụng được với cả acid và dung dịch base (Al₂O₃, ZnO).\n4. Oxide trung tính (không tạo muối): Không tác dụng với acid, base ở điều kiện thường (CO, NO).",
      "Tính chất quan trọng: Một số oxide base (Na₂O, K₂O, CaO, BaO) tác dụng với nước tạo dung dịch kiềm; nhiều oxide acid tác dụng với nước tạo dung dịch acid tương ứng."
    ],
    experiment: "Thí nghiệm hòa tan vôi sống CaO vào nước tỏa nhiệt tạo dung dịch nước vôi trong Ca(OH)₂; sục khí CO₂ vào nước vôi trong thấy vẩn đục trắng CaCO₃.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
      <g transform="translate(45, 25)">
        <rect x="0" y="0" width="95" height="45" rx="8" fill="#fae8ff" stroke="#c026d3" stroke-width="1.5"/>
        <text x="47" y="20" text-anchor="middle" font-size="10" font-bold fill="#86198f">Oxide Base</text>
        <text x="47" y="36" text-anchor="middle" font-size="9" fill="#a21caf">Na₂O, CaO, CuO</text>
      </g>
      <g transform="translate(150, 25)">
        <rect x="0" y="0" width="95" height="45" rx="8" fill="#fae8ff" stroke="#c026d3" stroke-width="1.5"/>
        <text x="47" y="20" text-anchor="middle" font-size="10" font-bold fill="#86198f">Oxide Acid</text>
        <text x="47" y="36" text-anchor="middle" font-size="9" fill="#a21caf">CO₂, SO₂, P₂O₅</text>
      </g>
      <g transform="translate(255, 25)">
        <rect x="0" y="0" width="95" height="45" rx="8" fill="#fae8ff" stroke="#c026d3" stroke-width="1.5"/>
        <text x="47" y="20" text-anchor="middle" font-size="10" font-bold fill="#86198f">Lưỡng tính</text>
        <text x="47" y="36" text-anchor="middle" font-size="9" fill="#a21caf">Al₂O₃, ZnO</text>
      </g>
      <g transform="translate(360, 25)">
        <rect x="0" y="0" width="95" height="45" rx="8" fill="#fae8ff" stroke="#c026d3" stroke-width="1.5"/>
        <text x="47" y="20" text-anchor="middle" font-size="10" font-bold fill="#86198f">Trung tính</text>
        <text x="47" y="36" text-anchor="middle" font-size="9" fill="#a21caf">CO, NO</text>
      </g>
      <text x="250" y="94" text-anchor="middle" font-size="10" font-bold fill="#701a75">Oxide gồm 2 nguyên tố, trong đó có nguyên tố Oxygen</text>
    </svg>`,
    quiz: {
      q: "Oxide nào sau đây là một OXIDE LƯỠNG TÍNH (tác dụng được với cả dung dịch acid và dung dịch base)?",
      options: [
        "Al₂O₃ (Aluminium oxide)",
        "CaO (Calcium oxide)",
        "SO₂ (Sulfur dioxide)",
        "CO (Carbon monoxide)"
      ],
      ans: 0,
      expl: "Al₂O₃ và ZnO là oxide lưỡng tính vì chúng vừa phản ứng với dung dịch acid (như HCl), vừa phản ứng với dung dịch kiềm (như NaOH) tạo thành muối tương ứng."
    }
  },
  {
    id: 11,
    num: "Bài 11",
    chapter: "CHƯƠNG II. MỘT SỐ HỢP CHẤT THÔNG DỤNG",
    branch: "Hóa học",
    branchColor: "from-emerald-600 to-teal-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Muối",
    desc: "Khái niệm muối, danh pháp, tính tan, tính chất hóa học và các phương pháp điều chế muối thông dụng.",
    keyPoints: [
      "Muối là hợp chất gồm cation kim loại (hoặc cation ammonium NH₄⁺) liên kết với anion gốc acid.",
      "Tên gọi muối = Tên kim loại (kèm hóa trị nếu kim loại nhiều hóa trị) + Tên gốc acid (ví dụ: NaCl: sodium chloride; FeSO₄: iron(II) sulfate).",
      "Tính chất hóa học của muối:\n• Tác dụng với kim loại mạnh hơn ➔ Muối mới + Kim loại mới (Ví dụ: Fe + CuSO₄ ➔ FeSO₄ + Cu).\n• Tác dụng với acid ➔ Muối mới + Acid mới (Ví dụ: BaCl₂ + H₂SO₄ ➔ BaSO₄↓ + 2HCl).\n• Tác dụng với dung dịch base ➔ Muối mới + Base mới (Ví dụ: CuSO₄ + 2NaOH ➔ Cu(OH)₂↓ + Na₂SO₄).\n• Tác dụng với dung dịch muối khác (phản ứng trao đổi) ➔ Hai muối mới (điều kiện: có kết tủa hoặc bay hơi)."
    ],
    experiment: "Thí nghiệm nhúng đinh sắt sạch vào dung dịch đồng(II) sulfate CuSO₄: Đồng màu đỏ bám ngoài đinh sắt, màu xanh lam nhạt dần thành dung dịch FeSO₄.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
      <g transform="translate(50, 25)">
        <rect x="0" y="0" width="85" height="40" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
        <text x="42" y="24" text-anchor="middle" font-size="11" font-bold fill="#14532d">MUỐI</text>
      </g>
      <g transform="translate(150, 25)">
        <text x="0" y="15" font-size="10.5" font-bold fill="#15803d">• + Kim loại mạnh hơn ➔ Muối mới + Kim loại mới</text>
        <text x="0" y="32" font-size="10.5" font-bold fill="#166534">• + Dung dịch Acid ➔ Muối mới + Acid mới</text>
      </g>
      <g transform="translate(150, 65)">
        <text x="0" y="15" font-size="10.5" font-bold fill="#15803d">• + Dung dịch Base ➔ Muối mới + Base mới (có kết tủa)</text>
        <text x="0" y="32" font-size="10.5" font-bold fill="#166534">• + Dung dịch Muối ➔ Hai muối mới (phản ứng trao đổi)</text>
      </g>
    </svg>`,
    quiz: {
      q: "Hiện tượng quan sát được khi nhỏ dung dịch Barium chloride (BaCl₂) vào dung dịch Sodium sulfate (Na₂SO₄) là:",
      options: [
        "Xuất hiện kết tủa màu trắng không tan trong acid (BaSO₄)",
        "Sủi bọt khí không màu bay lên mạnh mẽ",
        "Dung dịch chuyển sang màu xanh lam đậm",
        "Không có hiện tượng gì xảy ra"
      ],
      ans: 0,
      expl: "Phương trình: BaCl₂ + Na₂SO₄ ➔ BaSO₄↓ (kết tủa trắng tinh khiết) + 2NaCl. Đây là phản ứng đặc trưng để nhận biết ion sulfate (SO₄²⁻)."
    }
  },
  {
    id: 12,
    num: "Bài 12",
    chapter: "CHƯƠNG II. MỘT SỐ HỢP CHẤT THÔNG DỤNG",
    branch: "Hóa học",
    branchColor: "from-emerald-600 to-teal-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Phân bón hóa học",
    desc: "Các loại phân bón đơn (phân đạm N, phân lân P, phân kali K), phân hỗn hợp NPK và nguyên tắc sử dụng phân bón hiệu quả, bảo vệ môi trường.",
    keyPoints: [
      "Phân bón hóa học cung cấp các nguyên tố dinh dưỡng khoáng thiết yếu cho cây trồng phát triển cân đối.",
      "Ba nhóm phân bón đơn cơ bản:\n• Phân đạm: Cung cấp nguyên tố Nitrogen (N), thúc đẩy cây đâm chồi, nảy lộc, phát triển thân lá (urê CO(NH₂)₂, phân đạm amoni NH₄NO₃).\n• Phân lân: Cung cấp nguyên tố Phosphorus (P), kích thích ra rễ, đẻ nhánh, trổ hoa và phát triển củ quả (supephotphat Ca(H₂PO₄)₂).\n• Phân kali: Cung cấp nguyên tố Potassium (K), giúp cành lá cứng cáp, tăng sức đề kháng chống sâu bệnh, tăng vị ngọt và chất lượng nông sản (KCl, K₂SO₄).",
      "Phân bón hỗn hợp NPK: Chứa đồng thời cả 3 nguyên tố dinh dưỡng chính N, P, K theo tỉ lệ thích hợp cho từng giai đoạn cây trồng.",
      "Nguyên tắc sử dụng: Bón đúng loại, đúng thời vụ, đúng liều lượng; không bón thừa gây ô nhiễm nguồn nước và thoái hóa đất nông nghiệp."
    ],
    experiment: "Tìm hiểu nhãn bao bì phân bón NPK 16-16-8 và khảo sát độ tan của một số loại phân bón thông dụng trong nước cất.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(50, 25)">
        <rect x="0" y="0" width="105" height="48" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="52" y="20" text-anchor="middle" font-size="11" font-bold fill="#065f46">PHÂN ĐẠM (N)</text>
        <text x="52" y="38" text-anchor="middle" font-size="9" fill="#047857">Phát triển thân lá</text>
      </g>
      <g transform="translate(170, 25)">
        <rect x="0" y="0" width="105" height="48" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="52" y="20" text-anchor="middle" font-size="11" font-bold fill="#065f46">PHÂN LÂN (P)</text>
        <text x="52" y="38" text-anchor="middle" font-size="9" fill="#047857">Phát triển bộ rễ</text>
      </g>
      <g transform="translate(290, 25)">
        <rect x="0" y="0" width="105" height="48" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="52" y="20" text-anchor="middle" font-size="11" font-bold fill="#065f46">PHÂN KALI (K)</text>
        <text x="52" y="38" text-anchor="middle" font-size="9" fill="#047857">Tăng sức chống chịu</text>
      </g>
      <text x="250" y="93" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">Bón phân 4 đúng: Đúng loại • Đúng liều • Đúng lúc • Đúng cách</text>
    </svg>`,
    quiz: {
      q: "Loại phân bón nào sau đây có vai trò CHỦ YẾU trong việc kích thích cây đâm chồi, nảy lộc và phát triển thân lá xanh tốt?",
      options: [
        "Phân đạm (cung cấp nguyên tố Nitrogen)",
        "Phân lân (cung cấp nguyên tố Phosphorus)",
        "Phân kali (cung cấp nguyên tố Potassium)",
        "Phân vi lượng (cung cấp Zn, Fe)"
      ],
      ans: 0,
      expl: "Phân đạm cung cấp nguyên tố Nitrogen (N) kích thích quá trình phân bào, sinh trưởng của tế bào sinh dưỡng, giúp cây phát triển cành lá to khỏe, quang hợp tốt."
    }
  }
];
