// KHTN 8 Data Part 3: Bài 30 đến Bài 47 (Sinh học: Chương VII & VIII)
module.exports = [
  {
    id: 30,
    num: "Bài 30",
    chapter: "CHƯƠNG VII. SINH HỌC CƠ THỂ NGƯỜI",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Khái quát về cơ thể người",
    desc: "Các cấp độ tổ chức cơ thể (tế bào ➔ mô ➔ cơ quan ➔ hệ cơ quan ➔ cơ thể), cấu trúc các hệ cơ quan và tính thống nhất của cơ thể.",
    keyPoints: [
      "Các cấp độ tổ chức sống của cơ thể người: Tế bào ➔ Mô ➔ Cơ quan ➔ Hệ cơ quan ➔ Cơ thể.",
      "Cơ thể người gồm 3 phần chính: Đầu, thân và các chi (tay, chân). Khoang thân được ngăn cách bởi cơ hoành thành khoang ngực (chứa tim, phổi) và khoang bụng (chứa dạ dày, ruột, gan, tụy, thận, bóng đái).",
      "Các hệ cơ quan chính: Hệ vận động, hệ tiêu hóa, hệ tuần hoàn, hệ hô hấp, hệ bài tiết, hệ thần kinh, hệ nội tiết, các giác quan và hệ sinh dục.",
      "Tính thống nhất: Mọi hệ cơ quan hoạt động phối hợp nhịp nhàng dưới sự điều khiển của hệ thần kinh và hệ nội tiết nhằm duy trì sự sống."
    ],
    experiment: "Quan sát mô hình giải phẫu cơ thể người, xác định vị trí của các cơ quan chính trong khoang ngực và khoang bụng.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(45, 25)">
        <rect x="0" y="5" width="65" height="42" rx="6" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="32" y="30" text-anchor="middle" font-size="11" font-bold fill="#065f46">Tế bào</text>
      </g>
      <path d="M 115 50 L 135 50" stroke="#059669" stroke-width="2"/>
      <g transform="translate(140, 25)">
        <rect x="0" y="5" width="60" height="42" rx="6" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="30" y="30" text-anchor="middle" font-size="11" font-bold fill="#065f46">Mô</text>
      </g>
      <path d="M 205 50 L 225 50" stroke="#059669" stroke-width="2"/>
      <g transform="translate(230, 25)">
        <rect x="0" y="5" width="65" height="42" rx="6" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="32" y="30" text-anchor="middle" font-size="11" font-bold fill="#065f46">Cơ quan</text>
      </g>
      <path d="M 300 50 L 320 50" stroke="#059669" stroke-width="2"/>
      <g transform="translate(325, 25)">
        <rect x="0" y="5" width="75" height="42" rx="6" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="37" y="30" text-anchor="middle" font-size="11" font-bold fill="#065f46">Hệ cơ quan</text>
      </g>
      <path d="M 405 50 L 420 50" stroke="#059669" stroke-width="2"/>
      <g transform="translate(425, 25)">
        <circle cx="20" cy="26" r="18" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="20" y="30" text-anchor="middle" font-size="11" font-bold fill="#065f46">Cơ thể</text>
      </g>
      <text x="250" y="93" text-anchor="middle" font-size="10" font-bold fill="#065f46">Cơ hoành ngăn cách khoang ngực và khoang bụng</text>
    </svg>`,
    quiz: {
      q: "Cơ quan nào sau đây nằm trong KHOANG NGỰC của cơ thể người?",
      options: [
        "Tim và hai lá phổi",
        "Dạ dày và gan",
        "Ruột non và ruột già",
        "Thận và bóng đái"
      ],
      ans: 0,
      expl: "Khoang ngực nằm phía trên cơ hoành, chứa tim và hai lá phổi được lồng ngực bảo vệ. Dạ dày, ruột, gan, thận nằm ở khoang bụng phía dưới cơ hoành."
    }
  },
  {
    id: 31,
    num: "Bài 31",
    chapter: "CHƯƠNG VII. SINH HỌC CƠ THỂ NGƯỜI",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Hệ vận động ở người",
    desc: "Cấu tạo bộ xương, khớp và cơ bắp; cơ chế vận động; các bệnh tật cơ xương khớp và kĩ năng sơ cứu gãy xương.",
    keyPoints: [
      "Cấu tạo hệ vận động: Gồm bộ xương (xương đầu, xương thân, xương chi) và hệ cơ (khoảng 600 cơ xương vân).",
      "Khớp xương: Khớp động (khớp cổ tay, đầu gối - linh hoạt nhất), khớp bán động (đốt sống), khớp bất động (khớp hộp sọ).",
      "Cơ chế vận động: Cơ bám vào xương qua gân; khi cơ co, nó rút ngắn và kéo xương chuyển động quanh khớp; cơ bắp thường hoạt động theo từng cặp đối kháng (cơ gấp co thì cơ duỗi giãn).",
      "Bảo vệ hệ vận động: Ngồi học đúng tư thế tránh cong vẹo cột sống, tắm nắng bổ sung vitamin D chống còi xương/loãng xương, luyện tập thể dục đều đặn.",
      "Sơ cứu gãy xương: Không nắn bóp hay dịch chuyển mạnh chi gãy; dùng nẹp cố định chắc chắn hai khớp liền kề và đưa đến bệnh viện."
    ],
    experiment: "Thực hành sơ cứu và băng bó cố định gãy xương cẳng tay bằng nẹp gỗ và băng y tế.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="110" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="55" y="22" text-anchor="middle" font-size="11" font-bold fill="#065f46">BỘ XƯƠNG</text>
        <text x="55" y="40" text-anchor="middle" font-size="9.5" fill="#047857">Nâng đỡ, bảo vệ</text>
      </g>
      <g transform="translate(195, 25)">
        <rect x="0" y="0" width="110" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="55" y="22" text-anchor="middle" font-size="11" font-bold fill="#065f46">KHỚP XƯƠNG</text>
        <text x="55" y="40" text-anchor="middle" font-size="9.5" fill="#047857">Động / Bán động</text>
      </g>
      <g transform="translate(330, 25)">
        <rect x="0" y="0" width="110" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="55" y="22" text-anchor="middle" font-size="11" font-bold fill="#065f46">HỆ CƠ VÂN</text>
        <text x="55" y="40" text-anchor="middle" font-size="9.5" fill="#047857">Cặp đối kháng</text>
      </g>
    </svg>`,
    quiz: {
      q: "Cặp cơ bắp nào sau đây ở cánh tay hoạt động đối kháng khi ta thực hiện động tác gập cẳng tay vào ngực?",
      options: [
        "Cơ nhị đầu (cơ hai đầu) co, cơ tam đầu (cơ ba đầu) giãn",
        "Cả cơ nhị đầu và cơ tam đầu đều co đồng thời",
        "Cơ nhị đầu giãn, cơ tam đầu co",
        "Cả hai cơ đều giãn hoàn toàn"
      ],
      ans: 0,
      expl: "Khi gập cẳng tay, cơ nhị đầu ở mặt trước cánh tay co rút ngắn lại kéo cẳng tay lên, đồng thời cơ tam đầu ở mặt sau cánh tay giãn ra (hoạt động đối kháng)."
    }
  },
  {
    id: 32,
    num: "Bài 32",
    chapter: "CHƯƠNG VII. SINH HỌC CƠ THỂ NGƯỜI",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Dinh dưỡng và tiêu hóa ở người",
    desc: "Cấu tạo ống tiêu hóa và các tuyến tiêu hóa; tiêu hóa cơ học và tiêu hóa hóa học; hấp thu chất dinh dưỡng và vệ sinh an toàn thực phẩm.",
    keyPoints: [
      "Quá trình tiêu hóa: Gồm biến đổi cơ học (nghiền nhỏ, đảo trộn thức ăn) và biến đổi hóa học (nhờ enzyme trong dịch tiêu hóa cắt nhỏ đại phân tử thành chất đơn giản cơ thể hấp thu được).",
      "Đường đi ống tiêu hóa: Khoang miệng ➔ Hầu ➔ Thực quản ➔ Dạ dày ➔ Ruột non ➔ Ruột già ➔ Hậu môn.",
      "Ruột non - Trung tâm tiêu hóa & hấp thu: Có diện tích bề mặt khổng lồ (nhờ nếp gấp, lông ruột, lông cực nhỏ) cùng hệ thống mao mạch máu và mạch bạch huyết dày đặc, là nơi hấp thu hầu hết chất dinh dưỡng.",
      "Bảo vệ hệ tiêu hóa: Ăn chín uống sôi, nhai kĩ no lâu, hạn chế đồ cay chua kích thích dạ dày, vệ sinh răng miệng ngừa sâu răng."
    ],
    experiment: "Thí nghiệm tìm hiểu vai trò xúc tác của enzyme amylase trong nước bọt thủy phân tinh bột chín thành đường maltose.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(45, 25)">
        <text x="40" y="20" font-size="10.5" font-bold fill="#065f46">Miệng</text>
        <text x="40" y="38" font-size="9" fill="#047857">Amylase</text>
      </g>
      <text x="100" y="50" font-size="14" fill="#059669">➔</text>
      <g transform="translate(125, 25)">
        <text x="40" y="20" font-size="10.5" font-bold fill="#065f46">Dạ dày</text>
        <text x="40" y="38" font-size="9" fill="#047857">Pepsin + HCl</text>
      </g>
      <text x="180" y="50" font-size="14" fill="#059669">➔</text>
      <g transform="translate(205, 25)">
        <text x="50" y="20" font-size="10.5" font-bold fill="#065f46">Ruột non</text>
        <text x="50" y="38" font-size="9" fill="#047857">Hấp thu chính</text>
      </g>
      <text x="270" y="50" font-size="14" fill="#059669">➔</text>
      <g transform="translate(295, 25)">
        <text x="45" y="20" font-size="10.5" font-bold fill="#065f46">Ruột già</text>
        <text x="45" y="38" font-size="9" fill="#047857">Hút lại nước</text>
      </g>
      <text x="355" y="50" font-size="14" fill="#059669">➔</text>
      <g transform="translate(380, 25)">
        <text x="40" y="20" font-size="10.5" font-bold fill="#065f46">Hậu môn</text>
        <text x="40" y="38" font-size="9" fill="#047857">Thải bã</text>
      </g>
    </svg>`,
    quiz: {
      q: "Cơ quan nào trong ống tiêu hóa là nơi diễn ra quá trình TIÊU HÓA HOÀN TOÀN và HẤP THU HẦU HẾT các chất dinh dưỡng vào máu?",
      options: [
        "Ruột non",
        "Dạ dày",
        "Khoang miệng",
        "Ruột già"
      ],
      ans: 0,
      expl: "Ruột non có đầy đủ các loại enzyme phân giải carbohydrate, protein, lipid và có cấu tạo vi nhung mao lông ruột làm tăng diện tích tiếp xúc lên hàng trăm mét vuông, giúp hấp thu dinh dưỡng triệt để."
    }
  },
  {
    id: 33,
    num: "Bài 33",
    chapter: "CHƯƠNG VII. SINH HỌC CƠ THỂ NGƯỜI",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Máu và hệ tuần hoàn của cơ thể người",
    desc: "Thành phần của máu, kháng nguyên - kháng thể, hệ nhóm máu ABO, vòng tuần hoàn lớn - nhỏ và sức khỏe tim mạch.",
    keyPoints: [
      "Thành phần máu: Gồm huyết tương (chiếm 55%, chứa 90% nước và các chất hòa tan) và các tế bào máu (hồng cầu vận chuyển O₂ và CO₂; bạch cầu bảo vệ cơ thể; tiểu cầu tham gia đông máu).",
      "Hệ nhóm máu ABO: Nhóm máu A, B, AB và O (xác định bởi kháng nguyên trên hồng cầu và kháng thể trong huyết tương). Nguyên tắc truyền máu: Không để kháng nguyên trên hồng cầu người cho bị ngưng kết bởi kháng thể trong huyết tương người nhận.",
      "Cấu tạo hệ tuần hoàn: Gồm tim (4 ngăn: 2 tâm nhĩ trên, 2 tâm thất dưới) và hệ mạch (động mạch ➔ mao mạch ➔ tĩnh mạch).",
      "Hai vòng tuần hoàn:\n• Vòng tuần hoàn nhỏ (tuần hoàn phổi): Tâm thất phải ➔ Động mạch phổi ➔ Phổi (trao đổi khí) ➔ Tĩnh mạch phổi ➔ Tâm nhĩ trái.\n• Vòng tuần hoàn lớn (tuần hoàn cơ thể): Tâm thất trái ➔ Động mạch chủ ➔ Các cơ quan ➔ Tĩnh mạch chủ ➔ Tâm nhĩ phải."
    ],
    experiment: "Thí nghiệm đếm nhịp tim và đo huyết áp bằng huyết áp kế điện tử ở trạng thái nghỉ ngơi và sau khi vận động mạnh.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#991b1b">VÒNG PHỔI (NHỎ)</text>
        <text x="80" y="38" text-anchor="middle" font-size="9" fill="#b91c1c">Thất phải ➔ Phổi ➔ Nhĩ trái</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#991b1b">VÒNG CƠ THỂ (LỚN)</text>
        <text x="80" y="38" text-anchor="middle" font-size="9" fill="#b91c1c">Thất trái ➔ Cơ thể ➔ Nhĩ phải</text>
      </g>
    </svg>`,
    quiz: {
      q: "Người có nhóm máu O có thể truyền hồng cầu an toàn cho những người mang nhóm máu nào sau đây?",
      options: [
        "Nhóm máu A, B, AB và O (tất cả các nhóm máu)",
        "Chỉ truyền được cho nhóm máu O",
        "Chỉ truyền được cho nhóm máu AB",
        "Truyền được cho nhóm máu A và B, không truyền được cho AB"
      ],
      ans: 0,
      expl: "Hồng cầu của nhóm máu O không chứa kháng nguyên A cũng không chứa kháng nguyên B, nên khi truyền vào cơ thể người nhận (A, B, AB, O) sẽ không bị các kháng thể trong huyết tương người nhận làm ngưng kết hồng cầu."
    }
  },
  {
    id: 34,
    num: "Bài 34",
    chapter: "CHƯƠNG VII. SINH HỌC CƠ THỂ NGƯỜI",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Hệ hô hấp ở người",
    desc: "Cấu tạo đường dẫn khí và phổi, cơ chế thông khí ở phổi, trao đổi khí ở phế nang và tế bào, tác hại của khói thuốc lá.",
    keyPoints: [
      "Hệ hô hấp gồm đường dẫn khí (mũi ➔ họng ➔ thanh quản ➔ khí quản ➔ phế quản) và 2 lá phổi.",
      "Chức năng đường dẫn khí: Làm ấm, làm ẩm không khí hít vào và ngăn cản bụi bẩn, vi khuẩn nhờ lớp lông mũi, chất nhầy và biểu mô có tiêm mao.",
      "Phế nang - Đơn vị trao đổi khí: Phổi chứa hàng trăm triệu phế nang mỏng manh bao quanh bởi lưới mao mạch; khí O₂ khuếch tán từ phế nang vào máu, khí CO₂ khuếch tán từ máu ra phế nang để thở ra.",
      "Cơ chế cử động hô hấp: Hít vào (cơ liên sườn và cơ hoành co ➔ lồng ngực nở rộng, áp suất giảm, khí tràn vào); thở ra (cơ giãn ➔ lồng ngực thu nhỏ, đẩy khí ra ngoài).",
      "Bảo vệ hệ hô hấp: Tránh xa khói thuốc lá (chứa nicotine, hắc ín gây ung thư phổi), đeo khẩu trang khi ra đường, giữ ấm cổ họng khi trời lạnh."
    ],
    experiment: "Thực hành hô hấp nhân tạo ép tim lồng ngực và hà hơi thổi ngạt cứu người bị đuối nước hoặc ngạt thở.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">ĐƯỜNG DẪN KHÍ</text>
        <text x="80" y="38" text-anchor="middle" font-size="9" fill="#047857">Làm ấm, ẩm, lọc sạch bụi</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">HAI LÁ PHỔI</text>
        <text x="80" y="38" text-anchor="middle" font-size="9" fill="#047857">Trao đổi khí O₂ &amp; CO₂</text>
      </g>
    </svg>`,
    quiz: {
      q: "Sự trao đổi khí giữa phế nang của phổi và các mao mạch máu diễn ra theo cơ chế vật lí nào?",
      options: [
        "Khuếch tán từ nơi có phân áp (nồng độ) cao sang nơi có phân áp thấp",
        "Vận chuyển chủ động ngược chiều gradient nồng độ",
        "Thẩm thấu qua màng bán thấm có tiêu tốn năng lượng ATP",
        "Hấp phụ bề mặt"
      ],
      ans: 0,
      expl: "O₂ và CO₂ trao đổi hoàn toàn thụ động qua màng mỏng phế nang theo cơ chế khuếch tán: O₂ từ phế nang (phân áp cao) vào máu (phân áp thấp), CO₂ từ máu vào phế nang."
    }
  },
  {
    id: 35,
    num: "Bài 35",
    chapter: "CHƯƠNG VII. SINH HỌC CƠ THỂ NGƯỜI",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Hệ bài tiết ở người",
    desc: "Cấu tạo hệ bài tiết nước tiểu, cấu trúc đơn vị chức năng thận (nephron), quá trình tạo nước tiểu và phòng tránh bệnh sỏi thận.",
    keyPoints: [
      "Hệ bài tiết nước tiểu gồm: Hai quả thận, hai ống dẫn nước tiểu, bóng đái (bàng quang) và ống đái.",
      "Cấu tạo quả thận: Phần vỏ và phần tủy chứa khoảng 1 triệu đơn vị chức năng (nephron). Mỗi nephron gồm cầu thận, nang cầu thận và ống thận.",
      "Quá trình tạo thành nước tiểu (ở nephron):\n1. Lọc máu (tại cầu thận) ➔ Tạo nước tiểu đầu (chứa nhiều chất dinh dưỡng và nước).\n2. Tái hấp thu (tại ống thận) ➔ Hấp thu lại nước, đường glucose và các ion cần thiết vào máu.\n3. Tiết tiếp (tại ống thận) ➔ Bài tiết các chất cặn bã, chất độc hại ➔ Tạo nước tiểu chính thức dẫn vào bể thận.",
      "Vệ sinh hệ bài tiết: Uống đủ 1,5 - 2 lít nước mỗi ngày, ăn uống nhạt vừa phải, không nhịn tiểu để tránh lắng cặn tạo sỏi thận."
    ],
    experiment: "Quan sát mô hình giải phẫu thận và sơ đồ cấu trúc một đơn vị thận nephron.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(45, 25)">
        <text x="35" y="20" font-size="10.5" font-bold fill="#065f46">1. Quả Thận</text>
        <text x="35" y="38" font-size="9" fill="#047857">1 triệu nephron</text>
      </g>
      <text x="105" y="50" font-size="14" fill="#059669">➔</text>
      <g transform="translate(130, 25)">
        <text x="45" y="20" font-size="10.5" font-bold fill="#065f46">2. Ống dẫn</text>
        <text x="45" y="38" font-size="9" fill="#047857">Dẫn nước tiểu</text>
      </g>
      <text x="195" y="50" font-size="14" fill="#059669">➔</text>
      <g transform="translate(220, 25)">
        <text x="45" y="20" font-size="10.5" font-bold fill="#065f46">3. Bóng đái</text>
        <text x="45" y="38" font-size="9" fill="#047857">Chứa nước tiểu</text>
      </g>
      <text x="285" y="50" font-size="14" fill="#059669">➔</text>
      <g transform="translate(310, 25)">
        <text x="40" y="20" font-size="10.5" font-bold fill="#065f46">4. Ống đái</text>
        <text x="40" y="38" font-size="9" fill="#047857">Thải ra ngoài</text>
      </g>
      <text x="250" y="93" text-anchor="middle" font-size="10" font-bold fill="#065f46">3 bước tạo nước tiểu: Lọc máu ➔ Tái hấp thu ➔ Tiết tiếp</text>
    </svg>`,
    quiz: {
      q: "Giai đoạn LỌC MÁU để tạo thành nước tiểu đầu diễn ra ở bộ phận nào của đơn vị thận (nephron)?",
      options: [
        "Cầu thận (ở nang cầu thận)",
        "Ống thận lượn gần",
        "Quai Henle",
        "Ống thu nhỏ"
      ],
      ans: 0,
      expl: "Máu theo động mạch đến cầu thận có áp lực cao, nước và các phân tử nhỏ được lọc qua vách mao mạch vào nang cầu thận tạo thành nước tiểu đầu."
    }
  },
  {
    id: 36,
    num: "Bài 36",
    chapter: "CHƯƠNG VII. SINH HỌC CƠ THỂ NGƯỜI",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Điều hòa môi trường trong của cơ thể người",
    desc: "Khái niệm môi trường trong (máu, dịch mô, bạch huyết), ý nghĩa cân bằng nội môi và vai trò của gan, thận trong điều hòa đường huyết và áp suất thẩm thấu.",
    keyPoints: [
      "Môi trường trong cơ thể: Gồm máu, dịch mô và dịch bạch huyết, bao quanh các tế bào để thực hiện trao đổi chất.",
      "Cân bằng nội môi: Là sự duy trì ổn định tương đối của môi trường trong cơ thể (nhiệt độ, pH, đường huyết, áp suất thẩm thấu) giúp tế bào và cơ thể tồn tại, hoạt động bình thường.",
      "Cơ chế điều hòa đường huyết của Gan và Tuyến tụy:\n• Khi đường huyết tăng (sau ăn): Tuyến tụy tiết hormone Insulin biến glucose thừa thành glycogen dự trữ ở gan và cơ ➔ hạ đường huyết về mức ổn định.\n• Khi đường huyết giảm (xa bữa ăn, đói): Tuyến tụy tiết hormone Glucagon kích thích gan phân giải glycogen thành glucose đưa vào máu ➔ tăng đường huyết.",
      "Vai trò của Thận: Điều hòa lượng nước và nồng độ muối khoáng trong máu qua việc tái hấp thu nước và bài tiết nước tiểu."
    ],
    experiment: "Tìm hiểu chỉ số xét nghiệm đường huyết (glucose máu bình thường: 4,0 - 6,0 mmol/L) và thảo luận về bệnh đái tháo đường.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">ĐƯỜNG HUYẾT TĂNG</text>
        <text x="80" y="38" text-anchor="middle" font-size="10" font-mono fill="#047857">Tụy tiết Insulin ➔ Gan</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">ĐƯỜNG HUYẾT GIẢM</text>
        <text x="80" y="38" text-anchor="middle" font-size="10" font-mono fill="#047857">Tụy tiết Glucagon ➔ Gan</text>
      </g>
    </svg>`,
    quiz: {
      q: "Khi lượng đường glucose trong máu tăng cao sau bữa ăn no, hormone nào sau đây được tiết ra để đưa đường huyết về mức ổn định?",
      options: [
        "Insulin (do tuyến tụy tiết ra)",
        "Glucagon (do tuyến tụy tiết ra)",
        "Adrenaline (do tuyến thượng thận tiết ra)",
        "Thyroxine (do tuyến giáp tiết ra)"
      ],
      ans: 0,
      expl: "Insulin có tác dụng kích thích tế bào hấp thu glucose và chuyển hóa glucose thành glycogen dự trữ ở gan và cơ, giúp hạ đường huyết về mức cân bằng an toàn."
    }
  },
  {
    id: 37,
    num: "Bài 37",
    chapter: "CHƯƠNG VII. SINH HỌC CƠ THỂ NGƯỜI",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Hệ thần kinh và các giác quan ở người",
    desc: "Cấu tạo neuron, trung ương thần kinh (não bộ, tủy sống), hệ thần kinh ngoại biên và cấu tạo mắt (thị giác), tai (thính giác).",
    keyPoints: [
      "Đơn vị cấu tạo của hệ thần kinh: Neuron thần kinh (gồm thân chứa nhân, sợi nhánh và sợi trục có bao myelin). Chức năng: Cảm ứng và dẫn truyền xung thần kinh.",
      "Bộ phận trung ương: Não bộ (đại não, tiểu não, não trung gian, trụ não) nằm trong hộp sọ và tủy sống nằm trong ống cột sống.",
      "Bộ phận ngoại biên: Các dây thần kinh và hạch thần kinh điều khiển cơ bắp và nội quan.",
      "Cơ quan thị giác (Mắt): Màng giác mạc ➔ Thể thủy tinh (thấu kính hội tụ) ➔ Màng lưới (võng mạc chứa tế bào thụ cảm thị giác hình que và hình nón) ➔ Dây thần kinh thị giác ➔ Não bộ.",
      "Cơ quan thính giác (Tai): Tai ngoài (vành tai, ống tai) ➔ Tai giữa (màng nhĩ, chuỗi xương tai) ➔ Tai trong (ốc tai chứa cơ quan Corti) ➔ Dây thần kinh thính giác."
    ],
    experiment: "Thí nghiệm kiểm tra phản xạ giật đầu gối khi gõ nhẹ vào gân dưới bánh chè và kiểm tra tật khúc xạ mắt bằng bảng đo thị lực.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">HỆ THẦN KINH</text>
        <text x="80" y="38" text-anchor="middle" font-size="9.5" fill="#047857">Não bộ &amp; Tủy sống (Neuron)</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">GIÁC QUAN</text>
        <text x="80" y="38" text-anchor="middle" font-size="9.5" fill="#047857">Thị giác (Mắt) &amp; Thính giác (Tai)</text>
      </g>
    </svg>`,
    quiz: {
      q: "Bộ phận nào của mắt đóng vai trò như một thấu kính hội tụ trong suốt, có khả năng điều tiết phồng xẹp để ảnh hội tụ rõ nét trên màng lưới?",
      options: [
        "Thể thủy tinh",
        "Lòng đen (mống mắt)",
        "Giác mạc (màng giác)",
        "Màng lưới (võng mạc)"
      ],
      ans: 0,
      expl: "Thể thủy tinh là một cấu trúc thấu kính hội tụ sinh học trong suốt, có thể thay đổi độ cong nhờ cơ thể mi để mắt nhìn rõ các vật ở cự li gần hay xa."
    }
  },
  {
    id: 38,
    num: "Bài 38",
    chapter: "CHƯƠNG VII. SINH HỌC CƠ THỂ NGƯỜI",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Hệ nội tiết ở người",
    desc: "Đặc điểm các tuyến nội tiết, vai trò của hormone và các tuyến nội tiết quan trọng (tuyến yên, tuyến giáp, tuyến tụy, tuyến thượng thận, tuyến sinh dục).",
    keyPoints: [
      "Đặc điểm hệ nội tiết: Không có ống dẫn riêng, các chất tiết (hormone) được tiết trực tiếp vào máu rồi theo hệ tuần hoàn đến các cơ quan đích với hoạt tính sinh học cực cao.",
      "Tuyến yên: Tuyến chỉ huy nằm ở đáy não, tiết hormone kích thích sinh trưởng (GH) và các hormone điều hòa hoạt động của các tuyến nội tiết khác.",
      "Tuyến giáp: Nằm trước sụn giáp ở cổ, tiết hormone Thyroxine (chứa iodine) điều hòa quá trình trao đổi chất và phát triển trí tuệ. Thiếu iodine gây bệnh bướu cổ.",
      "Tuyến tụy: Vừa là tuyến ngoại tiết (tiết dịch tụy tiêu hóa), vừa là tuyến nội tiết (tiết Insulin và Glucagon điều hòa đường huyết).",
      "Tuyến sinh dục: Tinh hoàn (ở nam) tiết testosterone kích thích dậy thì và sinh tinh; Buồng trứng (ở nữ) tiết estrogen kích thích dậy thì và chu kì kinh nguyệt."
    ],
    experiment: "Tìm hiểu triệu chứng và nguyên nhân gây bệnh bướu cổ do thiếu hụt nguyên tố vi lượng Iodine trong khẩu phần ăn.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(45, 25)">
        <text x="35" y="20" font-size="10.5" font-bold fill="#065f46">Tuyến yên</text>
        <text x="35" y="38" font-size="9" fill="#047857">Tuyến chỉ huy</text>
      </g>
      <g transform="translate(140, 25)">
        <text x="40" y="20" font-size="10.5" font-bold fill="#065f46">Tuyến giáp</text>
        <text x="40" y="38" font-size="9" fill="#047857">Thyroxine (I)</text>
      </g>
      <g transform="translate(240, 25)">
        <text x="35" y="20" font-size="10.5" font-bold fill="#065f46">Tuyến tụy</text>
        <text x="35" y="38" font-size="9" fill="#047857">Insulin/Glucagon</text>
      </g>
      <g transform="translate(340, 25)">
        <text x="45" y="20" font-size="10.5" font-bold fill="#065f46">Tuyến sinh dục</text>
        <text x="45" y="38" font-size="9" fill="#047857">Testosterone/Estrogen</text>
      </g>
      <text x="250" y="93" text-anchor="middle" font-size="10" font-bold fill="#065f46">Hormone ngấm thẳng vào máu với hoạt tính sinh học rất cao</text>
    </svg>`,
    quiz: {
      q: "Nguyên tố khoáng vi lượng nào là thành phần BẮT BUỘC để tuyến giáp tổng hợp hormone Thyroxine, giúp phòng ngừa bệnh bướu cổ?",
      options: [
        "Iodine (I)",
        "Calcium (Ca)",
        "Iron (Fe)",
        "Zinc (Zn)"
      ],
      ans: 0,
      expl: "Iodine là thành phần cấu tạo thiết yếu của hormone Thyroxine. Thiếu iodine khiến tuyến giáp phải phì đại để tăng bắt giữ iodine dẫn đến bệnh bướu cổ."
    }
  },
  {
    id: 39,
    num: "Bài 39",
    chapter: "CHƯƠNG VII. SINH HỌC CƠ THỂ NGƯỜI",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Da và điều hòa thân nhiệt ở người",
    desc: "Cấu tạo da 3 lớp (lớp biểu bì, lớp bì, lớp mỡ dưới da), các chức năng của da và cơ chế điều hòa thân nhiệt khi trời nóng/lạnh.",
    keyPoints: [
      "Cấu tạo da gồm 3 lớp:\n1. Lớp biểu bì: Tầng sừng ngoài cùng và tầng tế bào sống (chứa hạt sắc tố melanin quyết định màu da).\n2. Lớp bì: Chứa mạch máu, thụ quan cảm giác, tuyến mồ hôi, tuyến nhờn, chân lông và cơ dựng lông.\n3. Lớp mỡ dưới da: Chứa các tế bào mỡ cách nhiệt và đệm bảo vệ cơ thể.",
      "Cơ chế điều hòa thân nhiệt:\n• Khi trời nóng: Mao mạch dưới da dãn ra, tuyến mồ hôi tăng tiết mồ hôi; mồ hôi bay hơi làm mát bề mặt da.\n• Khi trời lạnh: Mao mạch dưới da co lại, cơ dựng lông co (nổi da gà), cơ bắp run rẩy để tạo nhiệt.",
      "Phòng say nắng, say nóng: Không chơi thể thao dưới nắng gắt quá lâu, uống bù nước điện giải, đội mũ nón khi ra ngoài."
    ],
    experiment: "Tìm hiểu cách sơ cứu người bị say nắng: Đưa vào nơi râm mát, nới lỏng quần áo, chườm mát và cho uống nước pha chút muối khoáng.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">KHI TRỜI NÓNG</text>
        <text x="80" y="38" text-anchor="middle" font-size="9.5" fill="#047857">Mạch dãn • Tiết mồ hôi</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">KHI TRỜI LẠNH</text>
        <text x="80" y="38" text-anchor="middle" font-size="9.5" fill="#047857">Mạch co • Nổi da gà • Run cơ</text>
      </g>
    </svg>`,
    quiz: {
      q: "Phản ứng nào sau đây của da diễn ra khi nhiệt độ môi trường xung quanh tăng cao (trời nắng nóng)?",
      options: [
        "Mao mạch dưới da dãn ra và tuyến mồ hôi tiết nhiều mồ hôi",
        "Mao mạch dưới da co lại và cơ dựng lông co",
        "Tuyến mồ hôi ngừng hoạt động để giữ nước",
        "Các cơ vân run rẩy tạo nhiệt"
      ],
      ans: 0,
      expl: "Khi trời nóng, mạch máu dưới da dãn rộng đưa máu đến gần bề mặt để tỏa nhiệt ra ngoài và tuyến mồ hôi tiết mồ hôi; mồ hôi bay hơi hấp thu nhiệt lượng giúp làm mát cơ thể."
    }
  },
  {
    id: 40,
    num: "Bài 40",
    chapter: "CHƯƠNG VII. SINH HỌC CƠ THỂ NGƯỜI",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Sinh sản ở người",
    desc: "Cấu tạo hệ sinh dục nam và nữ, hiện tượng thụ tinh - thụ thai, phát triển của phôi thai, biến đổi tuổi dậy thì và phòng tránh các bệnh lây truyền qua đường tình dục.",
    keyPoints: [
      "Hệ sinh dục nam: Tinh hoàn (sản xuất tinh trùng và testosterone), mào tinh, ống dẫn tinh, tuyến tiền liệt và dương vật.",
      "Hệ sinh dục nữ: Buồng trứng (sản xuất trứng và estrogen), ống dẫn trứng, tử cung (nơi làm tổ và nuôi dưỡng thai) và âm đạo.",
      "Quá trình thụ tinh và thụ thai:\n• Thụ tinh: Sự kết hợp giữa tinh trùng và trứng tạo thành hợp tử (diễn ra ở 1/3 phía ngoài ống dẫn trứng).\n• Thụ thai: Hợp tử phân chia thành phôi, di chuyển xuống tử cung và bám vào lớp niêm mạc tử cung để làm tổ.",
      "Tuổi dậy thì: Xuất hiện các dấu hiệu sinh dục phụ (vỡ giọng, mọc râu ở nam; ngực nở, xuất hiện kinh nguyệt ở nữ).",
      "Sức khỏe sinh sản: Giữ gìn vệ sinh cơ thể, trang bị hiểu biết giới tính, phòng tránh mang thai ngoài ý muốn và các bệnh lây qua đường tình dục (HIV/AIDS, viêm gan B, giang mai, lậu)."
    ],
    experiment: "Tìm hiểu chu kì kinh nguyệt 28 ngày ở nữ giới và thảo luận các biện pháp bảo vệ sức khỏe sinh sản tuổi vị thành niên.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">THỤ TINH</text>
        <text x="80" y="38" text-anchor="middle" font-size="9.5" fill="#047857">1/3 ngoài ống dẫn trứng</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">THỤ THAI</text>
        <text x="80" y="38" text-anchor="middle" font-size="9.5" fill="#047857">Phôi làm tổ ở tử cung</text>
      </g>
    </svg>`,
    quiz: {
      q: "Hiện tượng thụ tinh (sự kết hợp giữa tinh trùng và trứng tạo thành hợp tử) thông thường diễn ra ở vị trí nào?",
      options: [
        "1/3 phía ngoài của ống dẫn trứng",
        "Trong lòng tử cung",
        "Bên trong buồng trứng",
        "Trong âm đạo"
      ],
      ans: 0,
      expl: "Sau khi rụng, trứng di chuyển vào ống dẫn trứng. Quá trình thụ tinh diễn ra ở 1/3 phía ngoài của ống dẫn trứng, sau đó hợp tử phân chia thành phôi rồi mới di chuyển vào tử cung để làm tổ."
    }
  },
  {
    id: 41,
    num: "Bài 41",
    chapter: "CHƯƠNG VIII. SINH VẬT VÀ MÔI TRƯỜNG",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Môi trường và các nhân tố sinh thái",
    desc: "Khái niệm môi trường sống (4 loại môi trường), nhân tố sinh thái vô sinh và hữu sinh, quy luật giới hạn sinh thái.",
    keyPoints: [
      "Môi trường sống: Là nơi sinh sống của sinh vật, bao gồm tất cả những gì bao quanh và tác động trực tiếp/gián tiếp đến sự tồn tại, sinh trưởng của sinh vật. 4 môi trường chính: Trên cạn, dưới nước, trong đất và môi trường sinh vật.",
      "Nhân tố sinh thái: Được chia làm 2 nhóm:\n• Nhân tố vô sinh: Ánh sáng, nhiệt độ, độ ẩm, không khí, đất đá, nước...\n• Nhân tố hữu sinh: Thế giới sinh vật xung quanh và con người (con người có tác động ý thức riêng biệt).",
      "Giới hạn sinh thái: Là khoảng giá trị xác định của một nhân tố sinh thái mà trong đó sinh vật có thể tồn tại và phát triển ổn định.\n• Điểm cực thuận: Mức sinh vật phát triển tốt nhất.\n• Giới hạn dưới và giới hạn trên: Vượt qua điểm giới hạn thì sinh vật sẽ chết."
    ],
    experiment: "Khảo sát giới hạn nhiệt độ của cá rô phi Việt Nam (chết dưới 5,6°C và trên 42°C, cực thuận ở 30°C).",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <path d="M 20 60 Q 180 -10 340 60" fill="none" stroke="#059669" stroke-width="3"/>
        <line x1="20" y1="60" x2="340" y2="60" stroke="#94a3b8" stroke-width="1.5"/>
        <circle cx="20" cy="60" r="4" fill="#ef4444"/>
        <circle cx="180" cy="25" r="5" fill="#10b981"/>
        <circle cx="340" cy="60" r="4" fill="#ef4444"/>
        <text x="20" y="75" text-anchor="middle" font-size="9" font-bold fill="#dc2626">5,6°C (Dưới)</text>
        <text x="180" y="15" text-anchor="middle" font-size="10" font-bold fill="#047857">30°C (Cực thuận)</text>
        <text x="340" y="75" text-anchor="middle" font-size="9" font-bold fill="#dc2626">42°C (Trên)</text>
      </g>
    </svg>`,
    quiz: {
      q: "Cá rô phi ở Việt Nam chết ở nhiệt độ dưới 5,6°C và trên 42°C, sinh trưởng tốt nhất ở 30°C. Khoảng nhiệt độ từ 5,6°C đến 42°C được gọi là:",
      options: [
        "Giới hạn chịu đựng sinh thái về nhiệt độ của cá rô phi",
        "Khoảng cực thuận sinh thái",
        "Khoảng chống chịu bất lợi",
        "Môi trường sống vô sinh"
      ],
      ans: 0,
      expl: "Khoảng nhiệt độ từ giới hạn dưới (5,6°C) đến giới hạn trên (42°C) mà sinh vật còn có thể sống sót được gọi là giới hạn sinh thái của loài đối với nhiệt độ."
    }
  },
  {
    id: 42,
    num: "Bài 42",
    chapter: "CHƯƠNG VIII. SINH VẬT VÀ MÔI TRƯỜNG",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Quần thể sinh vật",
    desc: "Khái niệm quần thể sinh vật, các đặc trưng cơ bản (tỉ lệ giới tính, thành phần nhóm tuổi, mật độ, kích thước) và cơ chế tự điều chỉnh số lượng.",
    keyPoints: [
      "Quần thể sinh vật là tập hợp các cá thể cùng loài, cùng sinh sống trong một khoảng không gian xác định, vào một thời điểm nhất định và có khả năng sinh sản tạo ra thế hệ mới hữu thụ.",
      "Các đặc trưng cơ bản của quần thể:\n1. Tỉ lệ giới tính: Tỉ lệ giữa số cá thể đực và cái (thường xấp xỉ 1 : 1 ở giai đoạn non).\n2. Thành phần nhóm tuổi: Nhóm tuổi trước sinh sản, nhóm tuổi sinh sản và nhóm tuổi sau sinh sản.\n3. Mật độ cá thể: Số lượng cá thể trên một đơn vị diện tích (hoặc thể tích).\n4. Kích thước quần thể: Số lượng cá thể tối thiểu và tối đa mà quần thể có thể duy trì.\n5. Kiểu phân bố: Phân bố theo nhóm (phổ biến nhất), phân bố đồng đều hoặc ngẫu nhiên.",
      "Cơ chế tự điều chỉnh: Khi môi trường thuận lợi, số lượng tăng cao; khi nguồn thức ăn cạn kiệt, cạnh tranh tăng làm tăng tỉ lệ chết và di cư, đưa số lượng về mức cân bằng."
    ],
    experiment: "Khảo sát mật độ cây thông trong một khu rừng hoặc mật độ bèo hoa dâu trên một góc ao trường học.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">ĐẶC TRƯNG CƠ BẢN</text>
        <text x="80" y="38" text-anchor="middle" font-size="9.5" fill="#047857">Mật độ • Giới tính • Nhóm tuổi</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">TỰ ĐIỀU CHỈNH</text>
        <text x="80" y="38" text-anchor="middle" font-size="9.5" fill="#047857">Cân bằng theo sức chứa môi trường</text>
      </g>
    </svg>`,
    quiz: {
      q: "Tập hợp sinh vật nào sau đây là một QUẦN THỂ SINH VẬT theo đúng định nghĩa sinh học?",
      options: [
        "Các cây thông đuôi ngựa mọc trên một sườn đồi thông Ba Vì",
        "Các con cá sống trong một cái hồ tự nhiên",
        "Các con chim sống trong một khu rừng nhiệt đới",
        "Các loài cây xanh mọc trong một khu vườn bách thảo"
      ],
      ans: 0,
      expl: "Các cây thông đuôi ngựa mọc cùng trên đồi Ba Vì thuộc cùng một loài, cùng không gian và thời gian xác định nên cấu thành một quần thể sinh vật. Các tập hợp khác gồm nhiều loài khác nhau."
    }
  },
  {
    id: 43,
    num: "Bài 43",
    chapter: "CHƯƠNG VIII. SINH VẬT VÀ MÔI TRƯỜNG",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Quần xã sinh vật",
    desc: "Khái niệm quần xã sinh vật, độ đa dạng, loài ưu thế, loài đặc trưng và các mối quan hệ hỗ trợ/đối kháng giữa các loài.",
    keyPoints: [
      "Quần xã sinh vật là tập hợp nhiều quần thể sinh vật thuộc các loài khác nhau, cùng sống trong một không gian sinh cảnh xác định, gắn bó với nhau qua các mối quan hệ dinh dưỡng và nơi ở.",
      "Đặc trưng của quần xã: Độ đa dạng loài (số lượng loài phong phú), loài ưu thế (đóng vai trò quan trọng, số lượng cá thể lớn) và loài đặc trưng (chỉ có ở một quần xã nhất định như cá cóc Tam Đảo).",
      "Các mối quan hệ giữa các loài trong quần xã:\n• Quan hệ hỗ trợ: Cộng sinh (đôi bên cùng có lợi, gắn bó chặt chẽ), Hợp tác (cùng có lợi nhưng không bắt buộc), Hội sinh (một bên có lợi, bên kia không bị hại).\n• Quan hệ đối kháng: Cạnh tranh (tranh giành thức ăn, nơi ở), Kí sinh (sống nhờ trên vật chủ), Sinh vật ăn sinh vật khác (động vật ăn cỏ, thú ăn thịt), Ức chế - cảm nhiễm."
    ],
    experiment: "Khảo sát mối quan hệ cộng sinh giữa nấm và vi khuẩn lam/tảo đơn bào tạo nên địa y bám trên vỏ cây rừng.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">QUAN HỆ HỖ TRỢ</text>
        <text x="80" y="38" text-anchor="middle" font-size="9.5" fill="#047857">Cộng sinh • Hợp tác • Hội sinh</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">QUAN HỆ ĐỐI KHÁNG</text>
        <text x="80" y="38" text-anchor="middle" font-size="9.5" fill="#047857">Cạnh tranh • Kí sinh • Ăn thịt</text>
      </g>
    </svg>`,
    quiz: {
      q: "Mối quan hệ giữa hải quỳ và cua ẩn sĩ (hải quỳ bám trên vỏ ốc giúp ngụy trang và bảo vệ cua, cua mang hải quỳ di chuyển kiếm ăn) là ví dụ điển hình của mối quan hệ:",
      options: [
        "Hợp tác (đôi bên cùng có lợi nhưng không bắt buộc chặt chẽ)",
        "Kí sinh gây hại",
        "Cạnh tranh nơi ở",
        "Sinh vật ăn thịt con mồi"
      ],
      ans: 0,
      expl: "Đây là mối quan hệ hợp tác: Cả hai loài đều thu được lợi ích lớn nhưng chúng vẫn có thể tách rời và sống độc lập được."
    }
  },
  {
    id: 44,
    num: "Bài 44",
    chapter: "CHƯƠNG VIII. SINH VẬT VÀ MÔI TRƯỜNG",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Hệ sinh thái",
    desc: "Cấu trúc hệ sinh thái (thành phần vô sinh và hữu sinh), chuỗi thức ăn, lưới thức ăn, các bậc dinh dưỡng và tháp sinh thái.",
    keyPoints: [
      "Hệ sinh thái gồm quần xã sinh vật và sinh cảnh vô sinh (môi trường sống), trong đó các sinh vật luôn tác động qua lại lẫn nhau và với các nhân tố vô sinh tạo thành một hệ thống hoàn chỉnh, ổn định.",
      "Thành phần cấu trúc của hệ sinh thái:\n• Thành phần vô sinh (sinh cảnh): Khí hậu, đất đá, nước, mùn hữu cơ.\n• Thành phần hữu sinh: Sinh vật sản xuất (cây xanh, tảo quang hợp), Sinh vật tiêu thụ (động vật ăn cỏ, động vật ăn thịt), Sinh vật phân giải (vi khuẩn, nấm phân hủy xác bã hữu cơ thành chất khoáng).",
      "Chuỗi thức ăn: Một dãy gồm nhiều loài sinh vật có quan hệ dinh dưỡng với nhau; mỗi loài là một mắt xích, vừa là sinh vật tiêu thụ mắt xích phía trước, vừa là thức ăn của mắt xích phía sau.",
      "Lưới thức ăn: Nhiều chuỗi thức ăn có các mắt xích chung đan bện chằng chịt vào nhau trong quần xã."
    ],
    experiment: "Vẽ sơ đồ lưới thức ăn gồm 6 loài sinh vật trong một cánh đồng lúa: Cây lúa, châu chấu, chuột đồng, ếch, rắn nước và chim cú mèo.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(45, 25)">
        <rect x="0" y="5" width="80" height="42" rx="6" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="40" y="24" text-anchor="middle" font-size="10" font-bold fill="#065f46">SV Sản xuất</text>
        <text x="40" y="38" text-anchor="middle" font-size="8.5" fill="#047857">Cây xanh</text>
      </g>
      <text x="135" y="50" font-size="14" fill="#059669">➔</text>
      <g transform="translate(155, 25)">
        <rect x="0" y="5" width="80" height="42" rx="6" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="40" y="24" text-anchor="middle" font-size="10" font-bold fill="#065f46">SV Tiêu thụ 1</text>
        <text x="40" y="38" text-anchor="middle" font-size="8.5" fill="#047857">Động vật ăn cỏ</text>
      </g>
      <text x="245" y="50" font-size="14" fill="#059669">➔</text>
      <g transform="translate(265, 25)">
        <rect x="0" y="5" width="80" height="42" rx="6" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="40" y="24" text-anchor="middle" font-size="10" font-bold fill="#065f46">SV Tiêu thụ 2</text>
        <text x="40" y="38" text-anchor="middle" font-size="8.5" fill="#047857">Động vật ăn thịt</text>
      </g>
      <text x="355" y="50" font-size="14" fill="#059669">➔</text>
      <g transform="translate(375, 25)">
        <rect x="0" y="5" width="80" height="42" rx="6" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="40" y="24" text-anchor="middle" font-size="10" font-bold fill="#065f46">SV Phân giải</text>
        <text x="40" y="38" text-anchor="middle" font-size="8.5" fill="#047857">Vi khuẩn, nấm</text>
      </g>
    </svg>`,
    quiz: {
      q: "Trong một hệ sinh thái đồng cỏ, nhóm sinh vật nào đóng vai trò chuyển hóa năng lượng ánh sáng Mặt Trời thành năng lượng hóa học trong chất hữu cơ?",
      options: [
        "Sinh vật sản xuất (các loài cỏ, cây xanh)",
        "Sinh vật tiêu thụ bậc 1 (côn trùng ăn cỏ)",
        "Sinh vật phân giải (vi khuẩn, nấm đất)",
        "Sinh vật tiêu thụ bậc cao nhất (đại bàng)"
      ],
      ans: 0,
      expl: "Chỉ các sinh vật sản xuất có diệp lục (thực vật, tảo) mới có khả năng quang hợp hấp thu năng lượng ánh sáng Mặt Trời để tổng hợp chất hữu cơ nuôi sống toàn bộ hệ sinh thái."
    }
  },
  {
    id: 45,
    num: "Bài 45",
    chapter: "CHƯƠNG VIII. SINH VẬT VÀ MÔI TRƯỜNG",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Sinh quyển",
    desc: "Khái niệm sinh quyển, giới hạn của sinh quyển trên Trái Đất và các khu sinh học (biome) chính trên cạn, dưới nước ngọt và biển.",
    keyPoints: [
      "Sinh quyển là toàn bộ khoảng không gian trên Trái Đất có sinh vật sinh sống, bao gồm lớp dưới của khí quyển (tầng đối lưu), toàn bộ thủy quyển và lớp trên của thạch quyển (vỏ Trái Đất).",
      "Khu sinh học (Biome): Là các vùng địa lí sinh học rộng lớn có thảm thực vật và quần xã sinh vật đặc trưng theo điều kiện khí hậu.",
      "Các khu sinh học trên cạn:\n• Rừng mưa nhiệt đới: Nóng ẩm quanh năm, độ đa dạng sinh học cao nhất.\n• Rừng rụng lá ôn đới: Có 4 mùa rõ rệt, cây rụng lá vào mùa thu.\n• Rừng lá kim phương bắc (Taiga): Mùa đông rất lạnh giá, chủ yếu là thông, tùng.\n• Thảo nguyên và đồng cỏ: Khí hậu khô hạn, chủ yếu cỏ và động vật ăn cỏ gặm nhấm.\n• Hoang mạc và sa mạc: Cực kì khô nóng, thực vật mọng nước (xương rồng).",
      "Các khu sinh học dưới nước: Khu sinh học nước ngọt (ao, hồ, sông, suối) và khu sinh học biển (vùng ven bờ, rạn san hô, vùng biển khơi khổng lồ)."
    ],
    experiment: "Tìm hiểu vị trí địa lí và thảm thực vật nhiệt đới gió mùa của khu sinh học Việt Nam trên bản đồ phân bố sinh quyển thế giới.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">KHU SINH HỌC TRÊN CẠN</text>
        <text x="80" y="38" text-anchor="middle" font-size="9" fill="#047857">Rừng mưa • Taiga • Thảo nguyên</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">KHU SINH HỌC DƯỚI NƯỚC</text>
        <text x="80" y="38" text-anchor="middle" font-size="9" fill="#047857">Nước ngọt &amp; Hệ sinh thái biển</text>
      </g>
    </svg>`,
    quiz: {
      q: "Khu sinh học (biome) trên cạn nào sau đây có khí hậu nóng ẩm quanh năm và sở hữu độ đa dạng sinh học về các loài sinh vật cao nhất trên Trái Đất?",
      options: [
        "Khu sinh học Rừng mưa nhiệt đới",
        "Khu sinh học Rừng lá kim (Taiga)",
        "Khu sinh học Thảo nguyên ôn đới",
        "Khu sinh học Hoang mạc và sa mạc"
      ],
      ans: 0,
      expl: "Rừng mưa nhiệt đới phân bố quanh xích đạo với lượng mưa dồi dào, ánh sáng và nhiệt độ ấm áp quanh năm, tạo điều kiện thuận lợi nhất cho hàng triệu loài động thực vật sinh sôi."
    }
  },
  {
    id: 46,
    num: "Bài 46",
    chapter: "CHƯƠNG VIII. SINH VẬT VÀ MÔI TRƯỜNG",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Cân bằng tự nhiên",
    desc: "Khái niệm trạng thái cân bằng tự nhiên, cơ chế khống chế sinh học, các nhân tố gây mất cân bằng và giải pháp duy trì cân bằng sinh thái.",
    keyPoints: [
      "Cân bằng tự nhiên là trạng thái ổn định tương đối của hệ sinh thái, trong đó số lượng cá thể của các quần thể sinh vật và chuỗi dinh dưỡng được duy trì ở mức cân bằng phù hợp với nguồn sống của môi trường.",
      "Cơ chế duy trì cân bằng tự nhiên: Hiện tượng khống chế sinh học (số lượng cá thể của một loài bị kìm hãm bởi loài khác, ví dụ số lượng sâu tăng thì chim sâu tăng theo ➔ săn bắt làm giảm số lượng sâu trở lại).",
      "Các yếu tố làm mất cân bằng tự nhiên: Thiên tai (hạn hán, lũ lụt, cháy rừng) và tác động tiêu cực của con người (chặt phá rừng bừa bãi, săn bắn động vật hoang dã, ô nhiễm môi trường, du nhập loài ngoại lai xâm hại).",
      "Biện pháp duy trì cân bằng: Trồng rừng phủ xanh đất trống, bảo vệ động vật quý hiếm, sử dụng biện pháp sinh học phòng trừ sâu bệnh thay vì lạm dụng thuốc bảo vệ thực vật hóa học."
    ],
    experiment: "Tìm hiểu tác hại của ốc bươu vàng (loài ngoại lai xâm hại) phá hoại các cánh đồng lúa và làm mất cân bằng sinh thái đồng ruộng.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">KHỐNG CHẾ SINH HỌC</text>
        <text x="80" y="38" text-anchor="middle" font-size="9" fill="#047857">Thiên địch kìm hãm dịch hại</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">BẢO VỆ SINH CẢNH</text>
        <text x="80" y="38" text-anchor="middle" font-size="9" fill="#047857">Trồng rừng • Chống loài ngoại lai</text>
      </g>
    </svg>`,
    quiz: {
      q: "Hiện tượng số lượng cá thể của một loài sinh vật bị khống chế ở mức ổn định bởi các loài sinh vật khác trong quần xã được gọi là:",
      options: [
        "Hiện tượng khống chế sinh học",
        "Sự cạnh tranh cùng loài",
        "Sự tuyệt chủng hàng loạt",
        "Hiện tượng cộng sinh vĩnh cửu"
      ],
      ans: 0,
      expl: "Khống chế sinh học là cơ chế tự nhiên cốt lõi giúp quần xã duy trì trạng thái cân bằng động, không để một loài nào bùng phát số lượng quá mức gây hại sinh thái."
    }
  },
  {
    id: 47,
    num: "Bài 47",
    chapter: "CHƯƠNG VIII. SINH VẬT VÀ MÔI TRƯỜNG",
    branch: "Sinh học",
    branchColor: "from-emerald-600 to-green-600",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    title: "Bảo vệ môi trường",
    desc: "Tác động của con người đến môi trường, các dạng ô nhiễm (không khí, nước, đất), biến đổi khí hậu toàn cầu và các hành động bảo vệ đa dạng sinh học.",
    keyPoints: [
      "Tác động tiêu cực của con người: Phá rừng làm suy thoái đất, khí thải công nghiệp gây hiệu ứng nhà kính và biến đổi khí hậu, rác thải nhựa đe dọa sinh vật biển.",
      "Các dạng ô nhiễm môi trường chính:\n• Ô nhiễm không khí: Khí độc CO, SO₂, NO₂ và bụi mịn PM2.5 sinh ra từ xe cộ, nhà máy nhiệt điện.\n• Ô nhiễm nguồn nước: Nước thải công nghiệp, phân bón hóa học dư thừa và rác thải sinh hoạt xả thẳng ra sông hồ.\n• Ô nhiễm đất: Dư lượng thuốc trừ sâu, kim loại nặng và rác khó phân hủy.",
      "Bảo vệ đa dạng sinh học: Thành lập các vườn quốc gia, khu bảo tồn thiên nhiên (Cúc Phương, Cát Tiên, Ba Bể), nghiêm cấm buôn bán động vật hoang dã.",
      "Hành động thiết thực của học sinh: Thực hiện nguyên tắc 3R (Reduce - Giảm thiểu; Reuse - Tái sử dụng; Recycle - Tái chế), tiết kiệm điện nước, trồng cây xanh và tham gia ngày Chủ nhật xanh dọn rác."
    ],
    experiment: "Tìm hiểu chiến dịch Giờ Trái Đất và khảo sát lượng rác thải nhựa dùng một lần trong gia đình suốt 1 tuần.",
    svg: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="15" width="450" height="90" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">NGUYÊN TẮC 3R</text>
        <text x="80" y="38" text-anchor="middle" font-size="9" fill="#047857">Reduce • Reuse • Recycle</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="160" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
        <text x="80" y="20" text-anchor="middle" font-size="10.5" font-bold fill="#065f46">BẢO VỆ MÔI TRƯỜNG</text>
        <text x="80" y="38" text-anchor="middle" font-size="9" fill="#047857">Trồng cây • Phân loại rác • Tiết kiệm điện</text>
      </g>
    </svg>`,
    quiz: {
      q: "Hành động nào sau đây của học sinh trực tiếp góp phần giảm thiểu rác thải nhựa và bảo vệ môi trường học đường?",
      options: [
        "Sử dụng bình nước cá nhân và hộp đựng cơm dùng nhiều lần thay vì đồ nhựa dùng một lần",
        "Mỗi ngày mua một cốc trà sữa dùng ly nhựa rồi vứt vào thùng rác",
        "Đốt toàn bộ các loại túi nilon sau khi sử dụng trong vườn trường",
        "Vứt pin cũ chung vào túi rác sinh hoạt hàng ngày"
      ],
      ans: 0,
      expl: "Sử dụng đồ tái dùng nhiều lần (bình nước, hộp cơm) là hành động thực hiện nguyên tắc Reduce (giảm thiểu rác thải phát sinh ngay từ nguồn), giúp bảo vệ môi trường thiết thực nhất."
    }
  }
];
