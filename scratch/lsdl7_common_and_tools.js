// Chủ đề chung, Thuật ngữ tra cứu & Bộ đề Trạng Nguyên 60:00 môn Lịch sử và Địa lí 7

const commonTopics = [
  {
    id: 'cd-1',
    num: 1,
    branch: 'Chủ đề chung',
    branchTag: 'Chủ đề chung',
    branchColor: 'purple',
    chapter: 'Chủ đề chung',
    title: 'Chủ đề chung 1. Các cuộc đại phát kiến địa lí thế kỉ XV–XVI',
    pages: 'tr. 205–208',
    objective: 'Hệ thống hóa nguyên nhân, điều kiện, 4 hành trình phát kiến tiêu biểu; phân tích tác động hai mặt đối với sự phát triển của thế giới và kĩ năng lập bảng so sánh.',
    mindmap: 'Nhu cầu vàng bạc, thị trường + Tiến bộ la bàn, tàu ca-ra-ven → 4 Chuyến đi: B. Đi-a-xơ (1487), C. Cô-lôm-bô (1492), V. đơ Ga-ma (1498), Ph. Ma-gien-lăng (1519-1522) → Giao lưu sinh vật & Kinh tế toàn cầu ↔ Mặt trái: Ách đô hộ thực dân & Buôn bán nô lệ da đen.',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#faf5ff" stroke="#a855f7"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#a855f7" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">TIẾN BỘ KĨ THUẬT</text>
        <text x="100" y="48" text-anchor="middle" fill="#f3e8ff" font-size="10">La bàn từ tính, hải đồ chính xác</text>
        <text x="100" y="68" text-anchor="middle" fill="#f3e8ff" font-size="10">Tàu buồm Ca-ra-ven vượt đại dương</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#9333ea" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">KẾT NỐI TOÀN CẦU</text>
        <text x="100" y="48" text-anchor="middle" fill="#f3e8ff" font-size="10">Giao lưu kinh tế & sinh vật</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Hình thành thị trường thế giới</text>
      </g>
      <g transform="translate(470, 25)">
        <rect x="0" y="0" width="190" height="85" rx="8" fill="#7e22ce" />
        <text x="95" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">MẶT TRÁI THỰC DÂN</text>
        <text x="95" y="48" text-anchor="middle" fill="#fca5a5" font-size="10">Cướp bóc thuộc địa, diệt chủng</text>
        <text x="95" y="68" text-anchor="middle" fill="#fca5a5" font-size="10">Buôn bán nô lệ da đen</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Nguyên nhân, điều kiện và các hành trình lịch sử',
        content: `• <strong>Nguyên nhân sâu xa:</strong> Nhu cầu tích lũy tư bản, tìm kiếm nguồn vàng bạc, hương liệu gia vị quý và thị trường tiêu thụ mới; các tuyến thương mại trên bộ truyền thống sang phương Đông bị đế quốc Ốt-tô-man phong tỏa.<br>• <strong>Điều kiện hàng hải:</strong> Khẳng định Trái Đất hình cầu; ứng dụng la bàn từ tính, bản đồ hàng hải và cải tiến kĩ thuật đóng tàu buồm Ca-ra-ven nhiều tầng buồm có thể chạy ngược gió.<br>• <strong>Bốn cuộc hành trình tiêu biểu:</strong><br>
        1. <em>1487 (B. Đi-a-xơ):</em> Đoàn thám hiểm Bồ Đào Nha đi tới Mũi Hảo Vọng ở cực Nam châu Phi.<br>
        2. <em>1492 (C. Cô-lôm-bô):</em> Đoàn thám hiểm Tây Ban Nha vượt Đại Tây Dương khám phá ra châu Mỹ.<br>
        3. <em>1498 (V. đơ Ga-ma):</em> Cập bến Ca-li-cút (Ấn Độ) bằng đường biển trực tiếp vòng qua châu Phi.<br>
        4. <em>1519–1522 (Ph. Ma-gien-lăng & En-ca-nô):</em> Đoàn thám hiểm đầu tiên đi vòng quanh Trái Đất.`
      },
      {
        title: '2. Tác động toàn cầu và đánh giá lịch sử đa chiều',
        content: `• <strong>Tác động tích cực:</strong> Đem lại hiểu biết chính xác về địa lí hành tinh; nối liền các đại dương và lục địa; thúc đẩy sự giao lưu văn hóa, trao đổi cây trồng (ngô, khoai tây, cà chua...), làm bùng nổ thương mại quốc tế và tích lũy tư bản nguyên thủy ở Tây Âu.<br>• <strong>Hậu quả tiêu cực:</strong> Khởi đầu quá trình xâm chiếm thuộc địa tàn khốc của thực dân phương Tây; bóc lột cưỡng bức và cướp đoạt tài nguyên; buôn bán hàng triệu nô lệ da đen qua Đại Tây Dương; làm suy sụp nhiều nền văn minh bản địa rực rỡ ở châu Mỹ.`
      }
    ],
    quiz: [
      {
        question: 'Chuyến thám hiểm nào đã thực hiện thành công chuyến đi vòng quanh Trái Đất bằng đường biển lần đầu tiên trong lịch sử (1519–1522)?',
        options: ['Đoàn của Va-xcô đơ Ga-ma', 'Đoàn của Ph. Ma-gien-lăng (sau do En-ca-nô chỉ huy đưa tàu trở về)', 'Đoàn của C. Cô-lôm-bô', 'Đoàn của Hên-ri Thủy thủ'],
        answer: 1,
        explanation: 'Đoàn thám hiểm của Ma-gien-lăng khởi hành năm 1519, sau khi ông hi sinh ở Phi-líp-pin, thuyền trưởng En-ca-nô đã đưa tàu Vic-to-ri-a trở về Tây Ban Nha năm 1522 hoàn thành chuyến đi vòng quanh Trái Đất.'
      }
    ],
    checklist: [
      'Ghi nhớ bảng 4 nhà thám hiểm: Đi-a-xơ (1487), Cô-lôm-bô (1492), Ga-ma (1498), Ma-gien-lăng (1519-1522)',
      'Phân tích được cả hai mặt tích cực và hậu quả bạo lực thực dân của phát kiến địa lí'
    ]
  },
  {
    id: 'cd-2',
    num: 2,
    branch: 'Chủ đề chung',
    branchTag: 'Chủ đề chung',
    branchColor: 'purple',
    chapter: 'Chủ đề chung',
    title: 'Chủ đề chung 2. Đô thị: lịch sử và hiện tại',
    pages: 'tr. 209–212',
    objective: 'Khái quát quá trình hình thành đô thị qua các thời kì (văn minh sông lớn cổ đại, cảng thị Hy Lạp - La Mã, thành thị trung đại Tây Âu, đô thị hiện đại); phân tích mối quan hệ nông thôn - thành thị và phát triển đô thị bền vững.',
    mindmap: 'Đô thị cổ đại: Gắn với đồng bằng sông lớn (Nin, Ti-grơ, Hằng) → Đô thị Hy Lạp - La Mã: Gắn với cảng biển và thương mại (A-ten) → Thành thị trung đại Tây Âu (từ TK XI): Phường hội, chợ phiên, tự do → Đô thị hiện đại: Trung tâm công nghiệp - dịch vụ & Thách thức ô nhiễm, ùn tắc, nhà ở → Đô thị xanh bền vững.',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#f5f3ff" stroke="#8b5cf6"/>
      <g transform="translate(25, 25)">
        <rect x="0" y="0" width="145" height="90" rx="8" fill="#8b5cf6" />
        <text x="72" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">ĐÔ THỊ SÔNG LỚN</text>
        <text x="72" y="48" text-anchor="middle" fill="#ede9fe" font-size="9">Lưu vực sông Nin</text>
        <text x="72" y="68" text-anchor="middle" fill="#ede9fe" font-size="9">Ti-grơ, Ơ-phrat, Hằng</text>
      </g>
      <g transform="translate(180, 25)">
        <rect x="0" y="0" width="155" height="90" rx="8" fill="#7c3aed" />
        <text x="77" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">CẢNG THỊ CỔ ĐẠI</text>
        <text x="77" y="48" text-anchor="middle" fill="#ede9fe" font-size="9">A-ten & cảng Pi-rê</text>
        <text x="77" y="68" text-anchor="middle" fill="#ede9fe" font-size="9">Thương mại, triết học</text>
      </g>
      <g transform="translate(345, 25)">
        <rect x="0" y="0" width="165" height="90" rx="8" fill="#6d28d9" />
        <text x="82" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">THÀNH THỊ TRUNG ĐẠI</text>
        <text x="82" y="48" text-anchor="middle" fill="#ede9fe" font-size="9">Phục hồi từ TK XI</text>
        <text x="82" y="68" text-anchor="middle" fill="#ede9fe" font-size="9">Phường hội, đại học</text>
      </g>
      <g transform="translate(520, 25)">
        <rect x="0" y="0" width="155" height="90" rx="8" fill="#5b21b6" />
        <text x="77" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">ĐÔ THỊ HIỆN ĐẠI</text>
        <text x="77" y="48" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="9">Siêu đô thị >10 tr dân</text>
        <text x="77" y="68" text-anchor="middle" fill="#ede9fe" font-size="9">Quy hoạch xanh</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Tiến trình phát triển của đô thị trong lịch sử',
        content: `• <strong>Đô thị thời cổ đại:</strong> Những đô thị đầu tiên của nhân loại xuất hiện gắn liền với các lưu vực sông lớn (sông Nin ở Ai Cập, Lưỡng Hà giữa hai sông Ti-grơ và Ơ-phrat, sông Ấn – Hằng, Hoàng Hà). Nơi đây có nông nghiệp trù phú tạo ra sản phẩm dư thừa, thúc đẩy phân công lao động và hình thành các trung tâm chính trị, quân sự, đền miếu tôn giáo.<br>• <strong>Đô thị Hy Lạp – La Mã cổ đại:</strong> Gắn liền với bến cảng và thương mại hàng hải trên biển Địa Trung Hải (như A-ten và cảng Pi-rê), là trung tâm văn hóa, nghị viện dân chủ và nghệ thuật điêu khắc.<br>• <strong>Thành thị trung đại Tây Âu (thế kỉ XI):</strong> Do thợ thủ công và thương nhân lập nên, tổ chức thành các <em>phường hội</em> và <em>thương hội</em>; nơi tự do, dân chủ phá vỡ tính cát cứ khép kín của lãnh địa phong kiến và là cái nôi ra đời các trường đại học đầu tiên.`
      },
      {
        title: '2. Đô thị hiện đại và yêu cầu phát triển bền vững',
        content: `• <strong>Đặc điểm đô thị hiện đại:</strong> Tập trung dày đặc các ngành công nghiệp công nghệ cao, dịch vụ ngân hàng, giáo dục, y tế và đầu mối giao thông. Xuất hiện các siêu đô thị trên 10 triệu dân.<br>• <strong>Thách thức & Giải pháp:</strong> Áp lực lớn về ùn tắc giao thông, ô nhiễm môi trường, thiếu nhà ở, rác thải và ngập lụt đô thị do biến đổi khí hậu. Cần thực hiện quy hoạch <strong>đô thị thông minh và sinh thái (đô thị xanh)</strong>: mở rộng mạng lưới giao thông công cộng tàu điện ngầm, tăng không gian công viên cây xanh và hồ điều hòa thấm nước.`
      }
    ],
    quiz: [
      {
        question: 'Những đô thị đầu tiên trong lịch sử nhân loại thời cổ đại thường xuất hiện ở đâu?',
        options: [
          'Vùng núi cao hiểm trở',
          'Lưu vực các con sông lớn phì nhiêu như sông Nin, Ti-grơ, Hoàng Hà',
          'Trên các hòn đảo san hô giữa biển sâu',
          'Sâu trong các thảm rừng lá kim taiga'
        ],
        answer: 1,
        explanation: 'Nông nghiệp phù sa màu mỡ ven các sông lớn tạo ra thặng dư của cải, dẫn tới phân công lao động và hình thành các đô thị cổ đại đầu tiên.'
      }
    ],
    checklist: [
      'Nêu được mối liên hệ giữa điều kiện tự nhiên và sự ra đời của các đô thị cổ đại',
      'Hiểu rõ vai trò của thành thị trung đại Tây Âu từ thế kỉ XI',
      'Đề xuất các giải pháp quy hoạch đô thị xanh và bền vững trong thời kì hiện đại'
    ]
  }
];

const glossary = {
  history: [
    { term: 'Phong kiến phân quyền', desc: 'Thể chế chính trị mà quyền lực nhà nước bị chia cắt, phân tán trong tay các lãnh chúa phong kiến địa phương; triều đình trung ương hoặc nhà vua chỉ nắm quyền lực danh nghĩa.' },
    { term: 'Phong kiến tập quyền', desc: 'Chế độ nhà nước mà toàn bộ quyền lực tối cao về chính trị, kinh tế, quân sự tập trung chặt chẽ vào tay hoàng đế và bộ máy triều đình trung ương.' },
    { term: 'Lãnh địa phong kiến', desc: 'Vùng đất đai rộng lớn thuộc sở hữu riêng trọn vẹn của lãnh chúa Tây Âu, bao gồm lâu đài, ruộng đất, rừng và thôn làng nông nô; kinh tế mang tính chất tự cấp tự túc khép kín hoàn toàn.' },
    { term: 'Nông nô', desc: 'Người sản xuất chính trong lãnh địa phong kiến Tây Âu; có gia đình và công cụ riêng nhưng bị trói buộc chặt chẽ vào ruộng đất, mất tự do thân thể và phải nộp địa tô nặng nề cho lãnh chúa.' },
    { term: 'Phường hội', desc: 'Tổ chức liên kết của những người thợ thủ công cùng làm một nghề trong thành thị trung đại, nhằm bảo vệ quyền lợi hội viên và giữ gìn quy chế kĩ thuật sản xuất.' },
    { term: 'Thương hội', desc: 'Hội liên hiệp các thương nhân buôn bán tại thành thị trung đại nhằm bảo vệ hàng hóa, phân chia thị trường và chống lại sự ức hiếp của các lãnh chúa.' },
    { term: 'Điền trang', desc: 'Ruộng đất tư hữu quy mô lớn của vương hầu, quý tộc thời Trần, được lập nên chủ yếu bằng cách chiêu mộ dân nghèo không có ruộng đi khai hoang bãi bồi ven sông biển.' },
    { term: 'Thái ấp', desc: 'Vùng ruộng đất làng xã do nhà vua ban cấp cho quý tộc, hoàng thân, công thần để hưởng hoa lợi bổng lộc suốt đời, không được quyền tự tiện mua bán sang nhượng.' },
    { term: 'Cát cứ', desc: 'Tình trạng các thế lực thủ lĩnh địa phương tự ý chiếm cứ một vùng lãnh thổ, tự lập quân đội và chính quyền riêng, không tuân phục lệnh của triều đình trung ương.' },
    { term: 'Chế độ quân chủ', desc: 'Chính thể nhà nước do vua hoặc hoàng đế đứng đầu nắm giữ quyền lực tối cao, thường theo nguyên tắc cha truyền con nối.' },
    { term: 'Ngụ binh ư nông', desc: 'Chính sách quân sự độc đáo của nhà Lý - Trần: gửi binh sĩ ở nhà nông, luân phiên vừa tham gia luyện tập quân ngũ vừa sản xuất nông nghiệp trong thời bình.' }
  ],
  geography: [
    { term: 'Bán đảo', desc: 'Bộ phận đất liền nhô hẳn ra biển hoặc đại dương, có ba mặt tiếp giáp với mặt nước và một mặt nối liền với lục địa.' },
    { term: 'Lục địa', desc: 'Khối đất liền rộng lớn hàng triệu kilômét vuông, có biển và đại dương bao bọc xung quanh (ví dụ: lục địa Á - Âu, lục địa Ô-xtrây-li-a).' },
    { term: 'Châu lục', desc: 'Khái niệm địa lí tự nhiên bao gồm lục địa cùng với các đảo và quần đảo phụ cận thuộc về khu vực đó.' },
    { term: 'Mật độ dân số', desc: 'Số lượng cư dân sinh sống trung bình trên một đơn vị diện tích lãnh thổ nhất định, thường tính bằng người/km².' },
    { term: 'Đô thị hóa', desc: 'Quá trình mở rộng và phát triển mạng lưới đô thị, tăng nhanh số lượng, quy mô và tỉ trọng dân cư thành thị, đồng thời phổ biến lối sống thành thị.' },
    { term: 'Núi già & Núi trẻ', desc: 'Núi già hình thành cách đây hàng trăm triệu năm, bị phong hóa bào mòn nên đỉnh tròn sườn thoải; Núi trẻ hình thành muộn hơn trong thời kì Tân kiến tạo, đỉnh nhọn sườn dốc hiểm trở.' },
    { term: 'Đài nguyên (Tundra)', desc: 'Cảnh quan thực vật đặc trưng vùng cận cực và cực giá lạnh, chủ yếu chỉ có rêu, địa y và các loài cây bụi cằn cỗi thấp bé sinh trưởng trong mùa hạ ngắn ngủi.' },
    { term: 'Rừng Taiga', desc: 'Rừng lá kim bạt ngàn của đới ôn đới lạnh phương bắc (Bắc Á, Bắc Âu, Bắc Mỹ), cây thường xanh chịu rét tốt như thông, linh sam, tùng.' },
    { term: 'Hoang mạc hóa', desc: 'Quá trình thoái hóa đất đai nghiêm trọng ở các vùng khô hạn, bán khô hạn do biến đổi khí hậu khắc nghiệt và tác động khai thác quá tải của con người, khiến đất mất độ phì trở thành sa mạc cát cằn cỗi.' }
  ],
  skills: [
    'Bước 1: Đọc kĩ tên bản đồ, bảng chú giải, các kí hiệu màu sắc, đường nét và tỉ lệ xích bản đồ trước khi đọc nội dung.',
    'Bước 2: Lịch sử: Đặt sự kiện trong niên biểu theo trình tự nguyên nhân → diễn biến → kết quả → ý nghĩa lịch sử.',
    'Bước 3: Địa lí: Luôn đối chiếu vị trí địa lí, tọa độ vĩ độ với các đới khí hậu, lát cắt địa hình và hệ thống sông ngòi để giải thích bản chất.',
    'Bước 4: Bảng số liệu: Ghi chú đúng đơn vị tính (triệu người, %, nghìn km²), mốc năm khảo sát, không quy đổi nhầm số liệu trong quá khứ thành hiện hành.',
    'Bước 5: Trình bày báo cáo: Nêu luận điểm rõ ràng, minh họa bằng biểu đồ chuẩn dạng (cột/tròn/đường) và dẫn chứng từ tư liệu lịch sử - địa lí tin cậy.'
  ]
};

const examQuestions = [
  {
    q: 'Năm 476, sự kiện lịch sử trọng đại nào đã diễn ra mở đầu thời kì trung đại ở Tây Âu?',
    options: ['Đế quốc La Mã phương Tây sụp đổ trước các bộ tộc người Giéc-man', 'Đế quốc Ba Tư xâm lược Hy Lạp', 'Vương quốc Phơ-răng tan rã', 'Thành thị trung đại bùng nổ'],
    answer: 0,
    explain: 'Năm 476, hoàng đế La Mã phương Tây bị phế truất, các tộc người Giéc-man tràn vào lập vương quốc mới, mở đầu thời kì phong kiến Tây Âu.'
  },
  {
    q: 'Hai giai cấp cơ bản đối kháng trong xã hội phong kiến Tây Âu là:',
    options: ['Chủ nô và Nô lệ', 'Lãnh chúa phong kiến và Nông nô', 'Tư sản và Vô sản', 'Địa chủ và Nông dân tự do'],
    answer: 1,
    explain: 'Xã hội phong kiến Tây Âu hình thành hai giai cấp cơ bản: Lãnh chúa (nắm ruộng đất, tư pháp) và Nông nô (phụ thuộc, nộp tô thuế).'
  },
  {
    q: 'Thành thị trung đại Tây Âu bắt đầu phục hồi và phát triển từ khoảng thời gian nào?',
    options: ['Thế kỉ V', 'Thế kỉ VIII', 'Thế kỉ XI', 'Thế kỉ XIV'],
    answer: 2,
    explanation: 'Từ khoảng thế kỉ XI, thủ công nghiệp và thương mại phục hồi, các thành thị trung đại hình thành.'
  },
  {
    q: 'Ai là nhà thám hiểm vượt Đại Tây Dương và phát hiện ra châu Mỹ vào năm 1492?',
    options: ['B. Đi-a-xơ', 'C. Cô-lôm-bô', 'Va-xcô đơ Ga-ma', 'Ph. Ma-gien-lăng'],
    answer: 1,
    explain: 'C. Cô-lôm-bô chỉ huy đoàn tàu Tây Ban Nha vượt Đại Tây Dương và cập bến vùng biển Ca-ri-bê thuộc châu Mỹ năm 1492.'
  },
  {
    q: 'Chuyến đi vòng quanh Trái Đất đầu tiên bằng đường biển trong lịch sử do ai khởi xướng (1519–1522)?',
    options: ['Ph. Ma-gien-lăng', 'B. Đi-a-xơ', 'Va-xcô đơ Ga-ma', 'Giăng Can-van'],
    answer: 0,
    explain: 'Ph. Ma-gien-lăng khởi hành năm 1519; sau khi ông tử trận ở Phi-líp-pin, đoàn do thuyền trưởng En-ca-nô đưa tàu trở về hoàn thành chuyến đi vòng quanh thế giới.'
  },
  {
    q: 'Cốt lõi tư tưởng tiến bộ của phong trào Văn hóa Phục hưng (thế kỉ XIV–XVII) là gì?',
    options: ['Tuyệt đối tôn sùng giáo lý tôn giáo', 'Chủ nghĩa nhân văn: đề cao con người, lí trí và tự do cá nhân', 'Bảo vệ quyền lợi của lãnh chúa phong kiến', 'Đề cao thuyết thần thánh sáng thế'],
    answer: 1,
    explain: 'Phong trào Văn hóa Phục hưng đề cao giá trị con người (chủ nghĩa nhân văn), tự do, khoa học và chống lại giáo điều phong kiến trung cổ.'
  },
  {
    q: 'Nhà cải cách tôn giáo nào công bố bản "95 luận đề" năm 1517 phê phán Giáo hội và thẻ miễn tội?',
    options: ['Mác-tin Lu-thơ', 'Giăng Can-van', 'Lê-ô-na đơ Vin-xi', 'Thô-mát Mơ-nơ'],
    answer: 0,
    explain: 'Năm 1517, tu sĩ Mác-tin Lu-thơ dán 95 luận đề phản đối thẻ miễn tội ở nhà thờ Vít-ten-béc (Đức), mở đầu cuộc Cải cách tôn giáo.'
  },
  {
    q: 'Triều đại phong kiến nào ở Trung Quốc được xem là thời kì thịnh vượng đỉnh cao nhất (618–907)?',
    options: ['Nhà Tần', 'Nhà Hán', 'Nhà Đường', 'Nhà Tống'],
    answer: 2,
    explanation: 'Nhà Đường (618–907) là triều đại phát triển rực rỡ nhất về chính trị, kinh tế, khoa cử và thơ ca của Trung Quốc thời phong kiến.'
  },
  {
    q: 'Tứ đại danh tác tiểu thuyết Minh – Thanh của Trung Quốc bao gồm:',
    options: [
      'Tam quốc diễn nghĩa, Thủy hử, Tây du kí, Hồng lâu mộng',
      'Đại Việt sử kí, Thơ Đường, Sử kí Tư Mã Thiên, Kinh Thi',
      'Liêu trai chí dị, Nho lâm ngoại sử, Kim Bình Mai, Phong thần',
      'Tam tự kinh, Luận ngữ, Đạo đức kinh, Nam Hoa kinh'
    ],
    answer: 0,
    explain: 'Tứ đại danh tác lừng danh thời Minh – Thanh gồm: Tam quốc diễn nghĩa, Thủy hử, Tây du kí, Hồng lâu mộng.'
  },
  {
    q: 'Vị vua kiệt xuất nào của Đế quốc Mô-gôn (Ấn Độ) đã thi hành chính sách hòa giải tôn giáo tiến bộ?',
    options: ['Ba-bua', 'A-cơ-ba', 'Sa Gia-han', 'A-sô-ca'],
    answer: 1,
    explanation: 'Vua A-cơ-ba (1556–1605) thi hành chính sách hòa giải dân tộc, bình đẳng tôn giáo giúp đế quốc Mô-gôn hưng thịnh.'
  },
  {
    q: 'Kiệt tác lăng mộ bằng đá cẩm thạch trắng nổi tiếng của Ấn Độ thời Mô-gôn là công trình nào?',
    options: ['Chùa hang A-gian-ta', 'Lăng Taj Mahal', 'Đền Khajuraho', 'Tháp Qutb Minar'],
    answer: 1,
    explain: 'Lăng Taj Mahal tại Agra là kiệt tác kiến trúc cẩm thạch trắng đỉnh cao của văn hóa Ấn Độ thời Mô-gôn.'
  },
  {
    q: 'Quần thể đền tháp Ăng-co Vát và Ăng-co Thom là di sản văn hóa vĩ đại của quốc gia Đông Nam Á nào?',
    options: ['Thái Lan', 'Lào', 'Cam-pu-chia', 'In-đô-nê-xi-a'],
    answer: 2,
    explanation: 'Ăng-co Vát và Ăng-co Thom là di sản kiến trúc đền tháp kì vĩ của người Khmer tại Cam-pu-chia.'
  },
  {
    q: 'Vương quốc Lan Xang (Lào) được Phà Ngừm sáng lập năm 1353 có tên gọi mang ý nghĩa là gì?',
    options: ['Vương quốc Voi Trắng', 'Vương quốc Triệu Voi', 'Đất nước Hoa Chăm-pa', 'Xứ sở Thạt Luổng'],
    answer: 1,
    explain: 'Lan Xang theo tiếng Lào có nghĩa là "Triệu Voi", biểu trưng cho sức mạnh hùng hậu của quốc gia.'
  },
  {
    q: 'Chiến thắng Bạch Đằng năm 938 do Ngô Quyền lãnh đạo đã đánh tan đạo quân xâm lược nào?',
    options: ['Quân Nam Hán', 'Quân Tống', 'Quân Mông Cổ', 'Quân Minh'],
    answer: 0,
    explain: 'Ngô Quyền dùng kế cọc ngầm đánh bại thủy quân Nam Hán do Lưu Hoằng Tháo chỉ huy trên sông Bạch Đằng năm 938.'
  },
  {
    q: 'Sau khi xưng vương năm 939, Ngô Quyền quyết định đóng đô tại đâu?',
    options: ['Hoa Lư', 'Cổ Loa', 'Thăng Long', 'Bạch Hạc'],
    answer: 1,
    explanation: 'Ngô Quyền chọn Cổ Loa làm kinh đô nhằm nối tiếp truyền thống dựng nước độc lập của Âu Lạc xưa.'
  },
  {
    q: 'Năm 968, sau khi dẹp yên loạn 12 sứ quân, Đinh Bộ Lĩnh đặt tên nước ta là gì?',
    options: ['Đại Cồ Việt', 'Đại Việt', 'Vạn Xuân', 'Đại Ngu'],
    answer: 0,
    explanation: 'Đinh Bộ Lĩnh lên ngôi hoàng đế, đặt quốc hiệu là Đại Cồ Việt, đóng đô tại Hoa Lư (Ninh Bình).'
  },
  {
    q: 'Năm 1010, vị vua nào đã ban "Chiếu dời đô", chuyển kinh đô từ Hoa Lư về Thăng Long?',
    options: ['Lý Thái Tổ (Lý Công Uẩn)', 'Lý Thái Tông', 'Lý Nhân Tông', 'Lê Hoàn'],
    answer: 0,
    explanation: 'Lý Công Uẩn (Lý Thái Tổ) dời đô từ Hoa Lư về thành Đại La và đổi tên là Thăng Long vào mùa thu năm 1010.'
  },
  {
    q: 'Bộ luật thành văn đầu tiên của nước Đại Việt được ban hành dưới thời Lý năm 1042 là:',
    options: ['Quốc triều hình luật', 'Hình thư', 'Hoàng triều luật lệ', 'Luật Gia Long'],
    answer: 1,
    explanation: 'Bộ luật Hình thư ban hành năm 1042 dưới thời vua Lý Thái Tông là bộ luật thành văn đầu tiên của dân tộc.'
  },
  {
    q: 'Bài thơ thần "Nam quốc sơn hà" gắn liền với chiến công oanh liệt trên phòng tuyến nào năm 1077?',
    options: ['Phòng tuyến sông Bạch Đằng', 'Phòng tuyến Tam Điệp', 'Phòng tuyến sông Như Nguyệt (sông Cầu)', 'Phòng tuyến Hàm Tử'],
    answer: 2,
    explanation: 'Lý Thường Kiệt chặn đứng quân Tống trên phòng tuyến sông Như Nguyệt năm 1077 cùng bài thơ thần khẳng định chủ quyền.'
  },
  {
    q: 'Chế độ chính trị độc đáo nào được thực hiện dưới triều nhà Trần để củng cố sự đoàn kết vương tộc?',
    options: ['Chế độ phong vương lập thái ấp', 'Chế độ Thái thượng hoàng cùng trị vì', 'Chế độ tam đầu chế', 'Chế độ phân quyền địa phương'],
    answer: 1,
    explanation: 'Vua cha nhường ngôi sớm cho con và lên làm Thái thượng hoàng để cùng quản lý quốc gia và chỉ dẫn thế hệ sau.'
  },
  {
    q: 'Trần Nhân Tông sau khi đánh tan quân Nguyên Mông đã xuất gia sáng lập dòng thiền Phật giáo nào?',
    options: ['Thiền phái Tì-ni-đa-lưu-chi', 'Thiền phái Trúc Lâm Yên Tử', 'Thiền phái Vô Ngôn Thông', 'Thiền phái Thảo Đường'],
    answer: 1,
    explanation: 'Trần Nhân Tông tu hành trên núi Yên Tử và lập nên Thiền phái Trúc Lâm Yên Tử thuần Việt.'
  },
  {
    q: 'Kế sách quân sự nào được quân dân nhà Trần áp dụng hiệu quả trong cả 3 lần kháng chiến chống Mông – Nguyên?',
    options: ['Đánh nhanh thắng nhanh', 'Vườn không nhà trống', 'Dàn trận địa giáp lá cà đối mặt', 'Đóng cửa thành cố thủ'],
    answer: 1,
    explanation: 'Rút lui khỏi kinh thành, thực hiện "vườn không nhà trống" triệt phá lương thực của giặc trước khi phản công quyết định.'
  },
  {
    q: 'Đại thắng trên sông Bạch Đằng năm 1288 do danh tướng nào chỉ huy đập tan cuộc xâm lược Mông – Nguyên lần thứ 3?',
    options: ['Trần Quốc Tuấn (Trần Hưng Đạo)', 'Trần Quang Khải', 'Trần Khánh Dư', 'Phạm Ngũ Lão'],
    answer: 0,
    explanation: 'Trần Hưng Đạo chỉ huy trận địa bọc cọc ngầm Bạch Đằng lịch sử tháng 4 năm 1288, bắt sống tướng giặc Ô Mã Nhi.'
  },
  {
    q: 'Dưới thời nhà Hồ (1400–1407), chính sách nào sau đây được ban hành nhằm phát triển kinh tế?',
    options: ['Ban hành chính sách hạn điền, hạn nô và phát hành tiền giấy Thông bảo hội sao', 'Xóa bỏ mọi sắc thuế cho nông dân', 'Đóng cửa toàn bộ chợ làng', 'Cấm sử dụng chữ Nôm'],
    answer: 0,
    explanation: 'Hồ Quý Ly ban hành chính sách hạn điền, hạn nô, phát hành tiền giấy và đề cao chữ Nôm trong hành chính.'
  },
  {
    q: 'Cuộc khởi nghĩa Lam Sơn (1418–1427) do ai khởi xướng và lãnh đạo chống lại ách đô hộ của nhà Minh?',
    options: ['Nguyễn Trãi', 'Lê Lợi', 'Nguyễn Chích', 'Trần Nguyên Hãn'],
    answer: 1,
    explanation: 'Lê Lợi là thủ lĩnh khởi nghĩa Lam Sơn, cùng quân sư Nguyễn Trãi lãnh đạo 10 năm gian khổ giành lại độc lập.'
  },
  {
    q: 'Hai chiến thắng quyết định tiêu diệt đạo quân chủ lực và viện binh nhà Minh năm 1426–1427 là:',
    options: [
      'Tốt Động – Chúc Động và Chi Lăng – Xương Giang',
      'Đông Bộ Đầu và Hàm Tử',
      'Bạch Đằng và Vân Đồn',
      'Như Nguyệt và Khâm Châu'
    ],
    answer: 0,
    explanation: 'Trận Tốt Động - Chúc Động (1426) và Chi Lăng - Xương Giang (1427) đã đập tan ý chí xâm lược của nhà Minh.'
  },
  {
    q: 'Dưới thời vua Lê Thánh Tông, bộ luật tiến bộ, hoàn chỉnh nhất thời phong kiến nước ta là:',
    options: ['Hình thư', 'Quốc triều hình luật (Luật Hồng Đức)', 'Hoàng Việt luật lệ', 'Luật Gia Long'],
    answer: 1,
    explanation: 'Quốc triều hình luật (Luật Hồng Đức) bảo vệ chủ quyền quốc gia và quyền lợi phụ nữ trong xã hội phong kiến.'
  },
  {
    q: 'Dưới thời vua Lê Thánh Tông, tổ chức văn học danh tiếng quy tụ 28 vị đại thần có tên là:',
    options: ['Hội Tao Đàn (Tao Đàn nhị thập bát tú)', 'Hội Trúc Lâm', 'Quốc sử quán', 'Văn Miếu viện'],
    answer: 0,
    explanation: 'Vua Lê Thánh Tông sáng lập Hội Tao Đàn quy tụ 28 vì sao văn học tài năng của triều đình.'
  },
  {
    q: 'Từ cuối thế kỉ X, trung tâm chính trị của Vương quốc Chăm-pa được dời về thành Vijaya thuộc tỉnh nào ngày nay?',
    options: ['Quảng Nam', 'Bình Định', 'Ninh Thuận', 'Phú Yên'],
    answer: 1,
    explanation: 'Vijaya (Đồ Bàn) của Chăm-pa tọa lạc tại thị xã An Nhơn, tỉnh Bình Định ngày nay.'
  },
  {
    q: 'Diện tích của châu Âu khoảng bao nhiêu kilômét vuông?',
    options: ['5 triệu km²', '10 triệu km²', '15 triệu km²', '20 triệu km²'],
    answer: 1,
    explanation: 'Châu Âu có diện tích khoảng 10 triệu km², nằm chủ yếu trong đới ôn hòa.'
  },
  {
    q: 'Kiểu khí hậu nào phổ biến ở phía tây châu Âu với mùa đông ấm, mùa hè mát và mưa đều quanh năm?',
    options: ['Khí hậu ôn đới hải dương', 'Khí hậu ôn đới lục địa', 'Khí hậu Địa Trung Hải', 'Khí hậu hàn đới'],
    answer: 0,
    explanation: 'Phía tây châu Âu chịu ảnh hưởng của gió tây ôn đới và dòng biển nóng tạo nên khí hậu ôn đới hải dương.'
  },
  {
    q: 'Tính đến năm 2020 theo số liệu SGK, Liên minh châu Âu (EU) gồm bao nhiêu quốc gia thành viên?',
    options: ['20 quốc gia', '25 quốc gia', '27 quốc gia', '30 quốc gia'],
    answer: 2,
    explanation: 'Năm 2020, Liên minh châu Âu (EU) có 27 quốc gia thành viên và dân số khoảng 447 triệu người.'
  },
  {
    q: 'Châu lục có diện tích lớn nhất và dân số đông nhất hành tinh là:',
    options: ['Châu Phi', 'Châu Mỹ', 'Châu Á', 'Châu Âu'],
    answer: 2,
    explanation: 'Châu Á rộng 44,4 triệu km² với dân số khoảng 4,6 tỉ người (năm 2020), đứng đầu thế giới.'
  },
  {
    q: 'Đỉnh núi Ê-vơ-rét cao 8.848 m thuộc dãy núi nào ở châu Á?',
    options: ['Dãy Côn Luân', 'Dãy Thiên Sơn', 'Dãy Hi-ma-lay-a', 'Dãy U-ran'],
    answer: 2,
    explanation: 'Đỉnh Ê-vơ-rét nằm trên dãy Hi-ma-lay-a là nóc nhà của Trái Đất.'
  },
  {
    q: 'Khu vực nào ở châu Á nắm giữ trữ lượng dầu mỏ và khí đốt tự nhiên lớn nhất thế giới?',
    options: ['Bắc Á', 'Tây Nam Á (vùng Vịnh)', 'Trung Á', 'Đông Nam Á'],
    answer: 1,
    explanation: 'Tây Nam Á có trữ lượng dầu khí dồi dào nhất hành tinh quanh khu vực vịnh Ba Tư.'
  },
  {
    q: 'Dòng sông dài nhất châu Phi và dài nhất hành tinh (khoảng 6.650 km) là:',
    options: ['Sông A-ma-dôn', 'Sông Nin', 'Sông Công-gô', 'Sông Dăm-be-di'],
    answer: 1,
    explanation: 'Sông Nin dài khoảng 6.650 km, chảy từ hồ Vích-to-ri-a đổ ra Địa Trung Hải.'
  },
  {
    q: 'Hoang mạc nhiệt đới nào có diện tích lớn nhất thế giới nằm ở phía bắc châu Phi?',
    options: ['Hoang mạc Ca-la-ha-ri', 'Hoang mạc Na-míp', 'Hoang mạc Xa-ha-ra', 'Hoang mạc Gô-bi'],
    answer: 2,
    explanation: 'Hoang mạc Xa-ha-ra trải rộng hơn 9 triệu km² chiếm trọn miền bắc châu Phi.'
  },
  {
    q: 'Dự án "Vành đai xanh châu Phi" (Great Green Wall) được xây dựng nhằm mục đích chính là gì?',
    options: [
      'Trồng dải rừng rộng lớn ngăn chặn sự hoang mạc hóa ở vùng Sahel',
      'Xây dựng đập thủy điện trên sông Công-gô',
      'Mở khu công nghiệp khai thác vàng',
      'Xây tuyến đường sắt nối Địa Trung Hải với Mũi Hảo Vọng'
    ],
    answer: 0,
    explanation: 'Dự án trồng dải cây xanh 8.000 km qua vùng Sahel để ngăn cản sa mạc Xa-ha-ra lan rộng.'
  },
  {
    q: 'Nen-xơn Man-đê-la là vị Tổng thống da đen đầu tiên của quốc gia nào, người đã lãnh đạo xóa bỏ chế độ Apartheid?',
    options: ['Ai Cập', 'Ni-giê-ri-a', 'Cộng hòa Nam Phi', 'Kê-ni-a'],
    answer: 2,
    explanation: 'Nen-xơn Man-đê-la trở thành Tổng thống Cộng hòa Nam Phi năm 1994 sau thắng lợi lịch sử xóa bỏ Apartheid.'
  },
  {
    q: 'Châu Mỹ nằm hoàn toàn ở bán cầu nào của Trái Đất?',
    options: ['Bán cầu Đông', 'Bán cầu Tây', 'Bán cầu Nam hoàn toàn', 'Bán cầu Bắc hoàn toàn'],
    answer: 1,
    explanation: 'Châu Mỹ là châu lục duy nhất nằm hoàn toàn ở bán cầu Tây, trải dài từ 72°B đến 54°N.'
  },
  {
    q: 'Hệ thống núi trẻ đồ sộ nào chạy dài dọc theo sườn tây của lục địa Bắc Mỹ?',
    options: ['Dãy An-đét', 'Dãy Coóc-đi-e', 'Dãy A-pa-lat', 'Dãy An-pơ'],
    answer: 1,
    explanation: 'Hệ thống Coóc-đi-e dài hơn 9.000 km chiếm lĩnh toàn bộ bờ tây Bắc Mỹ.'
  },
  {
    q: 'Tỉ lệ dân cư thành thị của khu vực Bắc Mỹ theo số liệu SGK năm 2020 đạt mức nào?',
    options: ['60%', '70%', '82,6%', '95%'],
    answer: 2,
    explanation: 'Bắc Mỹ có mức độ đô thị hóa cao hàng đầu thế giới với 82,6% dân cư sống ở đô thị.'
  },
  {
    q: 'Dãy núi trẻ dài nhất thế giới chạy dọc bờ biển phía tây Nam Mỹ là:',
    options: ['Dãy Rocky', 'Dãy An-đét', 'Dãy U-ran', 'Dãy Hi-ma-lay-a'],
    answer: 1,
    explanation: 'Dãy An-đét dài hơn 8.000 km, cao từ 3.000 đến 5.000 m ở bờ tây Nam Mỹ.'
  },
  {
    q: 'Rừng mưa nhiệt đới A-ma-dôn ở Nam Mỹ có diện tích khoảng bao nhiêu?',
    options: ['1 triệu km²', '3 triệu km²', 'Hơn 5 triệu km²', '10 triệu km²'],
    answer: 2,
    explanation: 'Rừng mưa A-ma-dôn rộng hơn 5 triệu km², là khu rừng nhiệt đới lớn nhất và được ví như lá phổi xanh của Trái Đất.'
  },
  {
    q: 'Lục địa Ô-xtrây-li-a có loài thú đặc hữu độc đáo nào nuôi con trong túi trước bụng?',
    options: ['Gấu trúc', 'Kangaroo (chuột túi)', 'Hươu cao cổ', 'Voi châu Á'],
    answer: 1,
    explanation: 'Kangaroo và Koala là các loài thú có túi bản địa nổi tiếng của Ô-xtrây-li-a.'
  },
  {
    q: 'Châu Nam Cực lưu giữ khoảng bao nhiêu phần trăm lượng nước ngọt dự trữ của toàn Trái Đất dưới dạng băng?',
    options: ['30%', '50%', '60%', '85%'],
    answer: 2,
    explanation: 'Gần 98% diện tích phủ băng của Nam Cực lưu giữ tới 60% lượng nước ngọt của toàn hành tinh.'
  },
  {
    q: 'Hiệp ước Nam Cực ký năm 1959 quy định điều khoản cốt lõi nào?',
    options: [
      'Cho phép các nước chia nhau khai khoáng vàng bạc',
      'Nam Cực chỉ được sử dụng cho mục đích hòa bình và tự do nghiên cứu khoa học, cấm quân sự hóa',
      'Được phép thử nghiệm vũ khí hạt nhân',
      'Phát triển các thành phố định cư thường trú'
    ],
    answer: 1,
    explanation: 'Hiệp ước Nam Cực năm 1959 bảo vệ châu lục này hoàn toàn phi quân sự hóa vì hòa bình và khoa học.'
  },
  {
    q: 'Các đô thị cổ đại đầu tiên của loài người ra đời gắn liền với yếu tố tự nhiên nào?',
    options: ['Đỉnh núi cao', 'Đồng bằng phù sa châu thổ của các con sông lớn', 'Khu rừng rậm hoang dã', 'Vùng sa mạc khô hạn'],
    answer: 1,
    explanation: 'Phù sa các dòng sông lớn (Nin, Lưỡng Hà, Ấn - Hằng, Hoàng Hà) cung cấp lương thực thặng dư hình thành nên các đô thị cổ đầu tiên.'
  },
  {
    q: 'Mô hình phát triển đô thị hiện đại hướng tới tương lai bền vững cần ưu tiên điều gì?',
    options: [
      'Xóa bỏ hoàn toàn cây xanh để xây nhà chọc trời',
      'Quy hoạch đô thị xanh, giao thông công cộng tàu điện ngầm, tăng hồ điều hòa và giảm phát thải',
      'Khuyến khích tất cả người dân sử dụng ô tô cá nhân chạy dầu',
      'Xả nước thải sinh hoạt trực tiếp ra sông hồ tự nhiên'
    ],
    answer: 1,
    explanation: 'Đô thị xanh thông minh kết hợp phương tiện công cộng ít phát thải và không gian thấm nước là giải pháp bền vững.'
  },
  {
    q: 'Bộ phận đất liền nhô ra biển có ba mặt giáp nước và một mặt nối với lục địa được gọi là gì?',
    options: ['Đảo', 'Quần đảo', 'Bán đảo', 'Eo đất'],
    answer: 2,
    explanation: 'Theo thuật ngữ địa lí, bán đảo là phần đất liền nhô ra biển có 3 mặt tiếp giáp với nước.'
  }
];

const atlasData = {
  timelines: [
    { year: 'Năm 476', title: 'Đế quốc La Mã Tây phương sụp đổ', desc: 'Mở đầu thời kì phong kiến trung đại ở Tây Âu.' },
    { year: 'Năm 938', title: 'Đại thắng Bạch Đằng của Ngô Quyền', desc: 'Chấm dứt hơn 1000 năm Bắc thuộc, mở ra kỉ nguyên độc lập.' },
    { year: 'Năm 968', title: 'Đinh Bộ Lĩnh lập nước Đại Cồ Việt', desc: 'Thống nhất đất nước sau loạn 12 sứ quân, định đô Hoa Lư.' },
    { year: 'Năm 1010', title: 'Lý Thái Tổ dời đô về Thăng Long', desc: 'Mở đầu thời kì thịnh trị, dựng nền văn hiến Thăng Long.' },
    { year: 'Năm 1075–1077', title: 'Kháng chiến chống Tống (Lý Thường Kiệt)', desc: 'Phòng tuyến sông Như Nguyệt & Thơ thần Nam quốc sơn hà.' },
    { year: 'Năm 1226', title: 'Nhà Trần thành lập', desc: 'Thực hiện chế độ Thái thượng hoàng, đắp đê quai vạc.' },
    { year: '1258, 1285, 1288', title: 'Ba lần đại thắng Mông – Nguyên', desc: 'Hội nghị Diên Hồng, Hịch tướng sĩ, đại phá giặc trên sông Bạch Đằng.' },
    { year: 'Năm 1400', title: 'Hồ Quý Ly lập nhà Hồ', desc: 'Quốc hiệu Đại Ngu, phát hành tiền giấy, xây Thành Tây Đô.' },
    { year: 'Năm 1418–1427', title: 'Khởi nghĩa Lam Sơn toàn thắng', desc: 'Lê Lợi, Nguyễn Trãi lãnh đạo đánh đuổi quân Minh, giải phóng dân tộc.' },
    { year: 'Năm 1428–1527', title: 'Triều Lê sơ cực thịnh', desc: 'Vua Lê Thánh Tông ban Luật Hồng Đức, mở rộng bờ cõi.' },
    { year: 'Năm 1492', title: 'C. Cô-lôm-bô phát kiến ra châu Mỹ', desc: 'Mở ra kỉ nguyên thám hiểm đại dương và liên kết toàn cầu.' },
    { year: 'Năm 1517', title: 'Cải cách tôn giáo của Mác-tin Lu-thơ', desc: 'Công bố 95 luận đề, dẫn đến sự ra đời của đạo Tin Lành.' },
    { year: 'Năm 1519–1522', title: 'Hành trình vòng quanh Trái Đất của Ma-gien-lăng', desc: 'Chứng minh trên thực tế Trái Đất có dạng hình cầu.' },
    { year: 'Năm 1959', title: 'Ký kết Hiệp ước Nam Cực', desc: 'Châu Nam Cực trở thành vùng đất phi quân sự vì mục đích hòa bình.' },
    { year: 'Năm 1994', title: 'Xóa bỏ Apartheid ở Nam Phi', desc: 'Nen-xơn Man-đê-la trở thành Tổng thống da đen đầu tiên.' }
  ],
  continents: [
    { name: 'Châu Á', area: '44,4 triệu km²', pop: '~4,6 tỉ người (2020)', feature: 'Châu lục lớn nhất thế giới, đỉnh Ê-vơ-rét 8848 m, cái nôi của 4 tôn giáo lớn.' },
    { name: 'Châu Phi', area: '30,3 triệu km²', pop: '~1,34 tỉ người (2020)', feature: 'Châu lục nóng nhất, hoang mạc Xa-ha-ra, sông Nin dài 6650 km, dân số trẻ.' },
    { name: 'Châu Mỹ', area: '42 triệu km²', pop: '~1 tỉ người', feature: 'Nằm ở bán cầu Tây, dãy Coóc-đi-e, An-đét, rừng mưa nhiệt đới A-ma-dôn.' },
    { name: 'Châu Âu', area: '10 triệu km²', pop: '~747 triệu người (2020)', feature: 'Chủ yếu đới ôn hòa, 2/3 là đồng bằng, Liên minh châu Âu (EU) 27 nước.' },
    { name: 'Châu Đại Dương', area: '8,5 triệu km²', pop: '~43 triệu người', feature: 'Lục địa Ô-xtrây-li-a (7,7 tr km²), sinh vật đặc hữu thú có túi kangaroo.' },
    { name: 'Châu Nam Cực', area: '14 triệu km²', pop: '0 (chỉ có nhà KH)', feature: 'Băng dày bao phủ 98% diện tích, chứa 60% nước ngọt Trái Đất, cực lạnh -94,5°C.' }
  ]
};

module.exports = {
  commonTopics,
  glossary,
  examQuestions,
  atlasData
};
