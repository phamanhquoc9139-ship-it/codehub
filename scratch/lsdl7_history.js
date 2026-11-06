// Lịch sử 7 - Bộ Kết nối tri thức với cuộc sống (18 bài)
module.exports = [
  // CHƯƠNG 1. TÂY ÂU TỪ THẾ KỈ V ĐẾN NỬA ĐẦU THẾ KỈ XVI
  {
    id: 'ls-bai-1',
    num: 1,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 1. Tây Âu từ thế kỉ V đến nửa đầu thế kỉ XVI',
    title: 'Bài 1. Quá trình hình thành và phát triển chế độ phong kiến ở Tây Âu',
    pages: 'tr. 8–13',
    objective: 'Nêu được quá trình hình thành chế độ phong kiến Tây Âu; phân tích được đặc điểm của lãnh địa phong kiến và quan hệ giữa lãnh chúa - nông nô; giải thích sự ra đời và vai trò của thành thị trung đại.',
    mindmap: 'La Mã sụp đổ (476) → Vương quốc Giéc-man & Ban phong ruộng đất → Hình thành Lãnh địa phong kiến (Lãnh chúa vs Nông nô) → Thế kỉ XI: Phục hồi thủ công nghiệp & Thành thị ra đời (Phường hội, Thương hội) → Kinh tế hàng hóa phá vỡ tính khép kín của lãnh địa.',
    svg: `<svg viewBox="0 0 700 240" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#d97706" stop-opacity="0.1"/>
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="680" height="220" rx="16" fill="url(#grad1)" stroke="#d97706" stroke-dasharray="4 4"/>
      <!-- Sơ đồ phân phong -->
      <g transform="translate(40, 30)">
        <rect x="0" y="0" width="160" height="60" rx="10" fill="#f59e0b" />
        <text x="80" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">VUA PHƠ-RĂNG</text>
        <text x="80" y="45" text-anchor="middle" fill="#fef3c7" font-size="10">Ban cấp đất & tước vị</text>
        
        <path d="M 80 60 L 80 100" stroke="#d97706" stroke-width="2" marker-end="url(#arrow)"/>
        
        <rect x="0" y="100" width="160" height="70" rx="10" fill="#b45309" />
        <text x="80" y="125" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">LÃNH CHÚA</text>
        <text x="80" y="145" text-anchor="middle" fill="#fed7aa" font-size="10">Chủ sở hữu lãnh địa</text>
        <text x="80" y="160" text-anchor="middle" fill="#fed7aa" font-size="9">Nắm kinh tế, tư pháp</text>
      </g>
      
      <g transform="translate(250, 40)">
        <circle cx="90" cy="80" r="70" fill="#fff" stroke="#d97706" stroke-width="3"/>
        <text x="90" y="65" text-anchor="middle" fill="#92400e" font-weight="bold" font-size="12">LÃNH ĐỊA</text>
        <text x="90" y="85" text-anchor="middle" fill="#78350f" font-size="10">Kinh tế tự nhiên</text>
        <text x="90" y="100" text-anchor="middle" fill="#78350f" font-size="10">Tự cấp tự túc, khép kín</text>
      </g>

      <g transform="translate(480, 30)">
        <rect x="0" y="0" width="170" height="70" rx="10" fill="#10b981" />
        <text x="85" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">THÀNH THỊ TRUNG ĐẠI</text>
        <text x="85" y="45" text-anchor="middle" fill="#d1fae5" font-size="10">Xuất hiện thế kỉ XI</text>
        <text x="85" y="60" text-anchor="middle" fill="#d1fae5" font-size="9">Thợ thủ công + Thương nhân</text>

        <rect x="0" y="100" width="170" height="70" rx="10" fill="#047857" />
        <text x="85" y="125" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">TÁC ĐỘNG</text>
        <text x="85" y="145" text-anchor="middle" fill="#a7f3d0" font-size="10">Phát triển kinh tế hàng hóa</text>
        <text x="85" y="160" text-anchor="middle" fill="#a7f3d0" font-size="9">Phá vỡ kinh tế lãnh địa</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Quá trình hình thành chế độ phong kiến ở Tây Âu',
        content: `• Năm 476, Đế quốc La Mã phương Tây suy yếu và sụp đổ hoàn toàn trước sự xâm nhập của các bộ tộc người Giéc-man. Xã hội Tây Âu chuyển biến từ thế giới cổ đại sang thời kì trung đại.<br>• Vua người Phơ-răng tiến hành phân phong đất đai và ban tước vị cho tướng lĩnh quân sự, quý tộc và tăng lữ Ki-tô giáo. Những người nhận đất dần biến ruộng đất thành sở hữu riêng, trở thành các <strong>lãnh chúa phong kiến</strong> giàu có và quyền lực.<br>• Nông dân bị cướp ruộng đất biến thành <strong>nông nô</strong>, sống phụ thuộc chặt chẽ vào lãnh chúa.`
      },
      {
        title: '2. Lãnh địa phong kiến và quan hệ giai cấp',
        content: `• <strong>Lãnh địa phong kiến:</strong> Là khu đất rộng lớn thuộc sở hữu riêng của một lãnh chúa, bao gồm lâu đài kiên cố, dinh thự, nhà thờ, thôn xóm nông nô, đất canh tác, đồng cỏ và rừng rậm. Lãnh địa mang tính chất tự cấp tự túc, đóng kín, hầu như không trao đổi buôn bán với bên ngoài.<br>• <strong>Lãnh chúa:</strong> Nắm toàn quyền về kinh tế, chính trị, quân sự và tư pháp trong lãnh địa; sống xa hoa dựa trên bóc lột địa tô và vô số thứ thuế nặng nề.<br>• <strong>Nông nô:</strong> Là lực lượng sản xuất chính, có gia đình riêng và công cụ sản xuất nhưng bị gắn chặt với ruộng đất của lãnh địa, không có quyền tự do thân thể, phải nộp địa tô và làm lao dịch.`
      },
      {
        title: '3. Sự ra đời của thành thị trung đại và vai trò lịch sử',
        content: `• <strong>Bối cảnh:</strong> Từ khoảng thế kỉ XI, lực lượng sản xuất phát triển, thủ công nghiệp dần tách khỏi nông nghiệp. Thợ thủ công đem hàng hóa đến những nơi giao thông thuận tiện, ngã ba sông, bến cảng, gần lâu đài để trao đổi và định cư, từ đó hình thành các <strong>thành thị trung đại</strong>.<br>• <strong>Tổ chức xã hội:</strong> Thợ thủ công lập ra <em>phường hội</em> để bảo vệ quyền lợi và giữ quy chế nghề nghiệp; thương nhân lập ra <em>thương hội</em>.<br>• <strong>Vai trò:</strong> Phá vỡ nền kinh tế tự nhiên khép kín của lãnh địa, thúc đẩy sản xuất hàng hóa và tiền tệ phát triển; tạo dựng tầng lớp thị dân mới, mang lại không khí tự do và đặt nền móng cho nền văn hóa, đại học thời trung đại.`
      }
    ],
    quiz: [
      {
        question: 'Mốc thời gian nào đánh dấu sự sụp đổ của Đế quốc La Mã phương Tây, mở đầu thời kì phong kiến ở Tây Âu?',
        options: ['Năm 395', 'Năm 476', 'Năm 800', 'Năm 1054'],
        answer: 1,
        explanation: 'Năm 476, hoàng đế cuối cùng của La Mã bị phế truất, các tộc người Giéc-man tràn vào lập vương quốc mới, mở đầu thời trung đại ở Tây Âu.'
      },
      {
        question: 'Đặc điểm kinh tế cơ bản nhất của lãnh địa phong kiến Tây Âu là gì?',
        options: ['Sản xuất hàng hóa trao đổi quốc tế sầm uất', 'Kinh tế công thương nghiệp phát triển rực rỡ', 'Nền kinh tế tự cấp tự túc, khép kín, nông nghiệp giữ vai trò chủ đạo', 'Kinh tế đồn điền thâm canh xuất khẩu'],
        answer: 2,
        explanation: 'Lãnh địa là một đơn vị kinh tế độc lập, tự cấp tự túc gần như hoàn toàn mọi nhu cầu lương thực và vật dụng của lãnh chúa và nông nô.'
      },
      {
        question: 'Thành thị trung đại Tây Âu ra đời vào khoảng thời gian nào và có tác động gì nổi bật?',
        options: [
          'Thế kỉ V, củng cố tính khép kín của lãnh địa',
          'Thế kỉ XI, thúc đẩy kinh tế hàng hóa và phá vỡ nền kinh tế tự cấp tự túc',
          'Thế kỉ XIV, khôi phục chế độ chiếm nô',
          'Thế kỉ XVI, dẫn tới phong trào cừu ăn thịt người'
        ],
        answer: 1,
        explanation: 'Vào khoảng thế kỉ XI, thành thị trung đại phục hồi và phát triển, thúc đẩy sản xuất hàng hóa, lưu thông tiền tệ và làm suy yếu kinh tế lãnh địa.'
      }
    ],
    checklist: [
      'Nắm được mốc năm 476 Đế quốc La Mã sụp đổ và các vương quốc Giéc-man ra đời',
      'Giải thích được cấu trúc và tính chất tự cấp tự túc của lãnh địa phong kiến',
      'Phân biệt được thân phận, quyền lợi giữa lãnh chúa và nông nô',
      'Hiểu rõ nguyên nhân ra đời và vai trò lịch sử của thành thị trung đại từ thế kỉ XI'
    ]
  },
  {
    id: 'ls-bai-2',
    num: 2,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 1. Tây Âu từ thế kỉ V đến nửa đầu thế kỉ XVI',
    title: 'Bài 2. Các cuộc phát kiến địa lí và sự hình thành quan hệ sản xuất tư bản chủ nghĩa ở Tây Âu',
    pages: 'tr. 14–19',
    objective: 'Nêu được nguyên nhân, điều kiện và các cuộc phát kiến địa lí tiêu biểu; phân tích hệ quả địa lí, kinh tế - xã hội và sự hình thành quan hệ sản xuất tư bản chủ nghĩa ở Tây Âu.',
    mindmap: 'Nhu cầu vàng bạc, hương liệu + Con đường biển mới → Phát kiến lớn: Đi-a-xơ (1487), Cô-lôm-bô (1492), Ga-ma (1498), Ma-gien-lăng (1519-1522) → Mở rộng thị trường thế giới & Tích lũy tư bản nguyên thủy ("Cừu ăn thịt người") → Ra đời Giai cấp tư sản & Vô sản làm thuê.',
    svg: `<svg viewBox="0 0 700 220" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="200" rx="16" fill="#fef3c7" stroke="#d97706"/>
      <text x="350" y="35" text-anchor="middle" font-weight="bold" fill="#78350f" font-size="14">CÁC MỐC PHÁT KIẾN ĐỊA LÍ TIÊU BIỂU (THẾ KỈ XV - XVI)</text>
      <g transform="translate(30, 60)">
        <rect x="0" y="0" width="145" height="110" rx="10" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
        <text x="72" y="25" text-anchor="middle" font-weight="black" fill="#b45309" font-size="13">B. ĐI-A-XƠ</text>
        <text x="72" y="45" text-anchor="middle" font-bold fill="#d97706" font-size="11">Năm 1487</text>
        <text x="72" y="70" text-anchor="middle" fill="#4b5563" font-size="10">Đi tới mũi cực Nam</text>
        <text x="72" y="85" text-anchor="middle" fill="#4b5563" font-size="10">châu Phi</text>
        <text x="72" y="100" text-anchor="middle" font-weight="bold" fill="#059669" font-size="10">(Mũi Hảo Vọng)</text>
      </g>
      <g transform="translate(195, 60)">
        <rect x="0" y="0" width="145" height="110" rx="10" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
        <text x="72" y="25" text-anchor="middle" font-weight="black" fill="#b45309" font-size="13">C. CÔ-LÔM-BÔ</text>
        <text x="72" y="45" text-anchor="middle" font-bold fill="#d97706" font-size="11">Năm 1492</text>
        <text x="72" y="70" text-anchor="middle" fill="#4b5563" font-size="10">Vượt Đại Tây Dương</text>
        <text x="72" y="85" text-anchor="middle" fill="#4b5563" font-size="10">phát kiến ra</text>
        <text x="72" y="100" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="10">CHÂU MỸ</text>
      </g>
      <g transform="translate(360, 60)">
        <rect x="0" y="0" width="145" height="110" rx="10" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
        <text x="72" y="25" text-anchor="middle" font-weight="black" fill="#b45309" font-size="13">VA-XCÔ ĐƠ GA-MA</text>
        <text x="72" y="45" text-anchor="middle" font-bold fill="#d97706" font-size="11">Năm 1498</text>
        <text x="72" y="70" text-anchor="middle" fill="#4b5563" font-size="10">Cập bến Ca-li-cút</text>
        <text x="72" y="85" text-anchor="middle" fill="#4b5563" font-size="10">Ấn Độ bằng</text>
        <text x="72" y="100" text-anchor="middle" font-weight="bold" fill="#059669" font-size="10">đường biển</text>
      </g>
      <g transform="translate(525, 60)">
        <rect x="0" y="0" width="145" height="110" rx="10" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
        <text x="72" y="25" text-anchor="middle" font-weight="black" fill="#b45309" font-size="13">MA-GIEN-LĂNG</text>
        <text x="72" y="45" text-anchor="middle" font-bold fill="#d97706" font-size="11">1519 – 1522</text>
        <text x="72" y="70" text-anchor="middle" fill="#4b5563" font-size="10">Chuyến thám hiểm</text>
        <text x="72" y="85" text-anchor="middle" fill="#4b5563" font-size="10">vòng quanh</text>
        <text x="72" y="100" text-anchor="middle" font-weight="bold" fill="#7c3aed" font-size="10">TRÁI ĐẤT</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Nguyên nhân và điều kiện của các cuộc phát kiến địa lí',
        content: `• <strong>Nguyên nhân:</strong> Kinh tế hàng hóa phát triển làm nhu cầu về vàng bạc, hương liệu, nguyên liệu và thị trường mới ở Tây Âu tăng vọt. Con đường thương mại trên bộ sang phương Đông bị đế quốc Ốt-tô-man kiểm soát chặt chẽ và đánh thuế rất cao.<br>• <strong>Điều kiện thuận lợi:</strong> Tiến bộ vượt bậc về khoa học hàng hải (la bàn, hải đồ chính xác, kĩ thuật đóng tàu buồm ca-ra-ven nhiều cột buồm vượt đại dương), sự khẳng định về Trái Đất hình cầu cùng sự tài trợ tài chính từ hoàng gia Tây Ban Nha và Bồ Đào Nha.`
      },
      {
        title: '2. Các cuộc phát kiến địa lí tiêu biểu',
        content: `• <strong>1487 (B. Đi-a-xơ):</strong> Dẫn đầu đoàn thám hiểm Bồ Đào Nha tới mũi phía nam châu Phi (được đặt tên là Mũi Hảo Vọng).<br>• <strong>1492 (C. Cô-lôm-bô):</strong> Được hoàng gia Tây Ban Nha tài trợ, dẫn đoàn tàu vượt Đại Tây Dương và phát hiện ra vùng đất mới châu Mỹ (vùng biển Ca-ri-bê).<br>• <strong>1498 (Va-xcô đơ Ga-ma):</strong> Vòng qua Mũi Hảo Vọng cập bến Ca-li-cút (Ấn Độ), mở ra tuyến thương mại đường biển trực tiếp giữa châu Âu và châu Á.<br>• <strong>1519 – 1522 (Ph. Ma-gien-lăng):</strong> Thực hiện chuyến đi vòng quanh Trái Đất lịch sử. Ma-gien-lăng hi sinh ở Phi-líp-pin, đoàn do thuyền trưởng En-ca-nô đưa tàu Vic-to-ri-a trở về Tây Ban Nha.`
      },
      {
        title: '3. Hệ quả và sự hình thành quan hệ sản xuất tư bản chủ nghĩa',
        content: `• <strong>Hệ quả tích cực:</strong> Mở rộng tri thức địa lí, kết nối giao thương toàn cầu, thúc đẩy tích lũy tư bản nguyên thủy.<br>• <strong>Mặt trái tiêu cực:</strong> Khởi đầu thời kì chủ nghĩa thực dân xâm lược, cướp đoạt tài nguyên, buôn bán nô lệ da đen và làm suy vong nhiều nền văn minh bản địa.<br>• <strong>Hình thành quan hệ tư bản:</strong> Phong trào "rào đất cướp ruộng" (hiện tượng <em>"cừu ăn thịt người"</em>) ở Anh biến nông dân mất đất thành lực lượng làm thuê (vô sản). Thương nhân, quý tộc mới và chủ xưởng giàu lên trở thành giai cấp tư sản.`
      }
    ],
    quiz: [
      {
        question: 'Ai là người chỉ huy đoàn thám hiểm đầu tiên đi vòng quanh Trái Đất bằng đường biển trong giai đoạn 1519–1522?',
        options: ['B. Đi-a-xơ', 'C. Cô-lôm-bô', 'Va-xcô đơ Ga-ma', 'Ph. Ma-gien-lăng'],
        answer: 3,
        explanation: 'Ph. Ma-gien-lăng chỉ huy đoàn thám hiểm Tây Ban Nha thực hiện chuyến đi vòng quanh thế giới (1519–1522).'
      },
      {
        question: 'Hiện tượng "cừu ăn thịt người" ở nước Anh thời kì đầu tích lũy tư bản dùng để chỉ điều gì?',
        options: [
          'Dịch bệnh bùng phát từ cừu lây sang người',
          'Quý tộc rào đất biến ruộng cày thành đồng cỏ nuôi cừu lấy lông, đẩy nông dân vào cảnh bần cùng hóa phải làm thuê',
          'Nạn đói do sâu bọ phá hoại mùa màng',
          'Sự phát triển của nghề chăn nuôi gia súc quy mô gia đình'
        ],
        answer: 1,
        explanation: 'Quý tộc mới chiếm ruộng đất của nông dân rào lại làm đồng cỏ nuôi cừu lấy len dạ bán cho xưởng dệt, khiến nông dân mất tư liệu sản xuất và biến thành lao động làm thuê.'
      }
    ],
    checklist: [
      'Ghi nhớ 4 cuộc thám hiểm tiêu biểu: Đi-a-xơ (1487), Cô-lôm-bô (1492), Ga-ma (1498), Ma-gien-lăng (1519-1522)',
      'Phân tích hai mặt tích cực và tiêu cực của phát kiến địa lí',
      'Hiểu rõ quá trình tích lũy tư bản nguyên thủy và sự hình thành hai giai cấp tư sản - vô sản'
    ]
  },
  {
    id: 'ls-bai-3',
    num: 3,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 1. Tây Âu từ thế kỉ V đến nửa đầu thế kỉ XVI',
    title: 'Bài 3. Phong trào Văn hóa Phục hưng và Cải cách tôn giáo',
    pages: 'tr. 20–25',
    objective: 'Trình bày được nguồn gốc, nội dung tư tưởng và các thành tựu tiêu biểu của phong trào Văn hóa Phục hưng; nêu bối cảnh, nội dung và tác động của phong trào Cải cách tôn giáo.',
    mindmap: 'Khởi đầu tại I-ta-li-a (TK XIV) → Phục hưng tinh hoa Hy Lạp - La Mã cổ đại & Đề cao con người (Chủ nghĩa nhân văn) → Thành tựu: Đơ Vin-xi, Mi-ken-lăng-giơ, Sếch-xpia, Ga-li-lê → Cải cách tôn giáo (1517: Lu-thơ & Can-van) → Đạo Tin Lành ra đời & Giáo hội phân hóa.',
    svg: `<svg viewBox="0 0 700 200" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="180" rx="16" fill="#fdf4ff" stroke="#c084fc"/>
      <g transform="translate(30, 30)">
        <rect x="0" y="0" width="300" height="140" rx="12" fill="#fff" stroke="#9333ea" stroke-width="2"/>
        <text x="150" y="25" text-anchor="middle" font-weight="black" fill="#7e22ce" font-size="13">VĂN HÓA PHỤC HƯNG (TK XIV - XVII)</text>
        <text x="15" y="55" fill="#4b5563" font-size="11">• Khởi xướng: Tại các thành thị I-ta-li-a</text>
        <text x="15" y="75" fill="#4b5563" font-size="11">• Cốt lõi: Chủ nghĩa nhân văn, đề cao con người</text>
        <text x="15" y="95" fill="#4b5563" font-size="11">• Danh nhân: Đơ Vin-xi, Sếch-xpia, Ga-li-lê</text>
        <text x="15" y="115" fill="#059669" font-weight="bold" font-size="11">• Ý nghĩa: Giải phóng tư tưởng khỏi giáo điều</text>
      </g>
      <g transform="translate(370, 30)">
        <rect x="0" y="0" width="300" height="140" rx="12" fill="#fff" stroke="#db2777" stroke-width="2"/>
        <text x="150" y="25" text-anchor="middle" font-weight="black" fill="#be185d" font-size="13">CẢI CÁCH TÔN GIÁO (TK XVI)</text>
        <text x="15" y="55" fill="#4b5563" font-size="11">• Mở đầu: Mác-tin Lu-thơ (95 luận đề năm 1517)</text>
        <text x="15" y="75" fill="#4b5563" font-size="11">• Lãnh tụ: Mác-tin Lu-thơ (Đức), Giăng Can-van</text>
        <text x="15" y="95" fill="#4b5563" font-size="11">• Phê phán: Giáo hoàng, thẻ miễn tội</text>
        <text x="15" y="115" fill="#2563eb" font-weight="bold" font-size="11">• Hệ quả: Ki-tô giáo phân hóa thành Tin Lành</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Phong trào Văn hóa Phục hưng',
        content: `• <strong>Nguồn gốc:</strong> Xuất hiện đầu tiên ở I-ta-li-a từ thế kỉ XIV rồi lan rộng khắp Tây Âu, nhằm khôi phục và làm sống lại các giá trị tinh hoa của văn hóa Hy Lạp – La Mã cổ đại.<br>• <strong>Nội dung cốt lõi:</strong> Đề cao giá trị chân chính của con người, tình cảm cá nhân và quyền tự do, cổ vũ tinh thần khám phá khoa học; phê phán trật tự phong kiến lỗi thời và sự thống trị độc tôn của Giáo hội Ki-tô giáo.<br>• <strong>Thành tựu đỉnh cao:</strong> Hội họa và kiến trúc (Lê-ô-na đơ Vin-xi với bức tranh <em>Nàng Mô-na Li-sa</em>, Mi-ken-lăng-giơ với tượng <em>Đa-vít</em>); Văn học (đại thi hào Sếch-xpia, Xéc-van-tét); Khoa học thiên văn (Cô-péc-ních, Ga-li-lê khẳng định thuyết Nhật tâm).`
      },
      {
        title: '2. Phong trào Cải cách tôn giáo',
        content: `• <strong>Nguyên nhân:</strong> Giáo hội Ki-tô giáo trung đại lộng quyền, tha hóa, áp đặt gánh nặng thuế má và công khai bán <em>"thẻ miễn tội"</em> để trục lợi, cản trở bước tiến của giai cấp tư sản.<br>• <strong>Diễn biến:</strong> Năm 1517, tu sĩ Mác-tin Lu-thơ dán bản <em>95 luận đề</em> phản đối thẻ miễn tội tại cửa nhà thờ Vít-ten-béc (Đức). Phong trào nhanh chóng bùng nổ sang Thụy Sĩ dưới sự dẫn dắt của Giăng Can-van.<br>• <strong>Tác động lịch sử:</strong> Làm suy giảm quyền lực độc tôn của Giáo hội La Mã; Ki-tô giáo Tây Âu bị phân hóa thành Công giáo La Mã và các giáo phái Cải cách (Tin Lành). Phản ánh sâu sắc bước trưởng thành và khát vọng của giai cấp thị dân, tư sản Tây Âu.`
      }
    ],
    quiz: [
      {
        question: 'Sự kiện nào đánh dấu sự bùng nổ của phong trào Cải cách tôn giáo ở Tây Âu?',
        options: [
          'Chuyến hải hành phát kiến ra châu Mỹ của Cô-lôm-bô',
          'Mác-tin Lu-thơ dán bản 95 luận đề phê phán Giáo hội và thẻ miễn tội năm 1517',
          'Hội đồng Giăng Can-van ban bố điều lệ tôn giáo mới',
          'Tác phẩm Đôn Ki-hô-tê của Xéc-van-tét ra đời'
        ],
        answer: 1,
        explanation: 'Năm 1517, Mác-tin Lu-thơ công bố 95 luận đề phản đối việc bán thẻ miễn tội, châm ngòi cho phong trào Cải cách tôn giáo.'
      }
    ],
    checklist: [
      'Nắm vững bản chất phong trào Văn hóa Phục hưng là đề cao con người (chủ nghĩa nhân văn)',
      'Liệt kê các danh nhân tiêu biểu: Lê-ô-na đơ Vin-xi, Sếch-xpia, Ga-li-lê, Cô-péc-ních',
      'Hiểu rõ bối cảnh bùng nổ và hệ quả của Cải cách tôn giáo (ra đời đạo Tin Lành)'
    ]
  },

  // CHƯƠNG 2. TRUNG QUỐC VÀ ẤN ĐỘ THỜI TRUNG ĐẠI
  {
    id: 'ls-bai-4',
    num: 4,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 2. Trung Quốc và Ấn Độ thời trung đại',
    title: 'Bài 4. Trung Quốc từ thế kỉ VII đến giữa thế kỉ XIX',
    pages: 'tr. 26–33',
    objective: 'Nêu tiến trình lịch sử Trung Quốc qua các triều đại Đường, Tống, Nguyên, Minh, Thanh; phân tích sự phát triển kinh tế và các thành tựu văn hóa tiêu biểu (Tứ đại phát minh).',
    mindmap: 'Nhà Tần thống nhất (221 TCN) → Nhà Đường thịnh vượng (618-907: Khoa cử, Con đường tơ lụa) → Thời Tống, Nguyên, Minh, Thanh → Tứ đại phát minh: Giấy, Kĩ thuật in, La bàn, Thuốc súng → Văn học: Thơ Đường, Tiểu thuyết Minh - Thanh.',
    svg: `<svg viewBox="0 0 700 180" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="160" rx="16" fill="#fff7ed" stroke="#ea580c"/>
      <text x="350" y="35" text-anchor="middle" font-weight="bold" fill="#9a3412" font-size="13">TIẾN TRÌNH CÁC TRIỀU ĐẠI TRUNG QUỐC TRUNG ĐẠI</text>
      <g transform="translate(30, 60)">
        <rect x="0" y="0" width="115" height="80" rx="8" fill="#ea580c" />
        <text x="57" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">NHÀ ĐƯỜNG</text>
        <text x="57" y="45" text-anchor="middle" fill="#ffedd5" font-size="10">618 – 907</text>
        <text x="57" y="65" text-anchor="middle" fill="#ffedd5" font-size="9">Cường thịnh đỉnh cao</text>
      </g>
      <g transform="translate(160, 60)">
        <rect x="0" y="0" width="115" height="80" rx="8" fill="#c2410c" />
        <text x="57" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">NHÀ TỐNG</text>
        <text x="57" y="45" text-anchor="middle" fill="#ffedd5" font-size="10">960 – 1279</text>
        <text x="57" y="65" text-anchor="middle" fill="#ffedd5" font-size="9">Kinh tế phát triển</text>
      </g>
      <g transform="translate(290, 60)">
        <rect x="0" y="0" width="115" height="80" rx="8" fill="#9a3412" />
        <text x="57" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">NHÀ NGUYÊN</text>
        <text x="57" y="45" text-anchor="middle" fill="#ffedd5" font-size="10">1271 – 1368</text>
        <text x="57" y="65" text-anchor="middle" fill="#ffedd5" font-size="9">Mông Cổ cai trị</text>
      </g>
      <g transform="translate(420, 60)">
        <rect x="0" y="0" width="115" height="80" rx="8" fill="#c2410c" />
        <text x="57" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">NHÀ MINH</text>
        <text x="57" y="45" text-anchor="middle" fill="#ffedd5" font-size="10">1368 – 1644</text>
        <text x="57" y="65" text-anchor="middle" fill="#ffedd5" font-size="9">Xây Tử Cấm Thành</text>
      </g>
      <g transform="translate(550, 60)">
        <rect x="0" y="0" width="115" height="80" rx="8" fill="#ea580c" />
        <text x="57" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">NHÀ THANH</text>
        <text x="57" y="45" text-anchor="middle" fill="#ffedd5" font-size="10">1644 – 1911</text>
        <text x="57" y="65" text-anchor="middle" fill="#ffedd5" font-size="9">Triều đại cuối cùng</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Tiến trình phát triển chính trị và kinh tế',
        content: `• <strong>Thời nhà Đường (618–907):</strong> Giai đoạn phong kiến phát triển cường thịnh nhất. Bộ máy nhà nước củng cố, tuyển chọn quan lại qua khoa cử; thực hiện chế độ quân điền và thuế tô dung điệu. Nông nghiệp và thủ công nghiệp (gốm sứ, dệt tơ lụa) mở rộng; <em>Con đường Tơ lụa</em> kết nối giao thương nhộn nhịp tới Trung Á và châu Âu.<br>• <strong>Thời Tống, Nguyên, Minh, Thanh:</strong> Đô thị và thương mại tiếp tục phát triển; mầm mống quan hệ sản xuất tư bản xuất hiện dưới thời Minh – Thanh trong một số xưởng thủ công (thuê mướn nhân công) nhưng kinh tế phong kiến vẫn giữ vị trí chủ đạo.`
      },
      {
        title: '2. Tứ đại phát minh và thành tựu văn hóa đồ sộ',
        content: `• <strong>Tứ đại phát minh:</strong> Bao gồm <em>Giấy viết, Kĩ thuật in ấn, La bàn và Thuốc súng</em>. Đây là những đóng góp vĩ đại làm thay đổi lịch sử văn minh thế giới.<br>• <strong>Tư tưởng & Tôn giáo:</strong> Nho giáo giữ vị trí tư tưởng chính thống của chế độ phong kiến; bên cạnh đó là Phật giáo và Đạo giáo.<br>• <strong>Văn học:</strong> Thơ Đường đạt đỉnh cao rực rỡ với hàng loạt tác gia kiệt xuất (Lý Bạch, Đỗ Phủ, Bạch Cư Dị); thời Minh – Thanh nở rộ tiểu thuyết chương hồi đồ sộ (<em>Tam quốc diễn nghĩa, Thủy hử, Tây du kí, Hồng lâu mộng</em>).<br>• <strong>Kiến trúc:</strong> Vạn Lí Trường Thành, Cố Cung (Tử Cấm Thành tại Bắc Kinh).`
      }
    ],
    quiz: [
      {
        question: 'Bốn phát minh kĩ thuật vĩ đại của Trung Quốc thời trung đại (Tứ đại phát minh) bao gồm:',
        options: [
          'Giấy, Kĩ thuật in, La bàn, Thuốc súng',
          'Đồng hồ, Xe ngựa, Thuyền buồm, Thủy tinh',
          'Luyện kim, Bàn tính, Đèn kéo quân, Kính thiên văn',
          'Bút lông, Mực tàu, Bản đồ, Kéo cắt vải'
        ],
        answer: 0,
        explanation: 'Tứ đại phát minh lừng danh của Trung Quốc gồm: Giấy viết, Kĩ thuật in, La bàn và Thuốc súng.'
      }
    ],
    checklist: [
      'Ghi nhớ trình tự các triều đại phong kiến: Đường (618-907), Tống, Nguyên, Minh, Thanh',
      'Nêu ý nghĩa của Tứ đại phát minh Trung Quốc đối với lịch sử thế giới',
      'Kể tên các tác phẩm văn học lớn: Thơ Đường và Tứ đại danh tác Minh - Thanh'
    ]
  },
  {
    id: 'ls-bai-5',
    num: 5,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 2. Trung Quốc và Ấn Độ thời trung đại',
    title: 'Bài 5. Ấn Độ từ thế kỉ IV đến giữa thế kỉ XIX',
    pages: 'tr. 34–38',
    objective: 'Nêu được các giai đoạn lịch sử tiêu biểu của Ấn Độ (Vương triều Gúp-ta, Hồi giáo Đê-li, Đế quốc Mô-gôn); trình bày những thành tựu văn hóa, nghệ thuật nổi bật.',
    mindmap: 'Vương triều Gúp-ta (TK IV - VI: Cực thịnh bản địa) → Vương triều Hồi giáo Đê-li (1206-1526) → Đế quốc Mô-gôn (1526-1858: Vua A-cơ-ba khoan dung tôn giáo) → Văn hóa: Chữ Phạn, Sử thi Mahabharata/Ramayana, Lăng Taj Mahal, Hang A-gian-ta.',
    svg: `<svg viewBox="0 0 700 180" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="160" rx="16" fill="#fffbeb" stroke="#f59e0b"/>
      <text x="350" y="35" text-anchor="middle" font-weight="bold" fill="#78350f" font-size="13">CÁC TRIỀU ĐẠI ẤN ĐỘ THỜI TRUNG ĐẠI</text>
      <g transform="translate(50, 60)">
        <rect x="0" y="0" width="180" height="85" rx="10" fill="#f59e0b" />
        <text x="90" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">VƯƠNG TRIỀU GÚP-TA</text>
        <text x="90" y="45" text-anchor="middle" fill="#fef3c7" font-size="10">Thế kỉ IV – VI</text>
        <text x="90" y="65" text-anchor="middle" fill="#fef3c7" font-size="9">Định hình văn hóa truyền thống</text>
      </g>
      <g transform="translate(260, 60)">
        <rect x="0" y="0" width="180" height="85" rx="10" fill="#d97706" />
        <text x="90" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">HỒI GIÁO ĐÊ-LI</text>
        <text x="90" y="45" text-anchor="middle" fill="#fef3c7" font-size="10">Năm 1206 – 1526</text>
        <text x="90" y="65" text-anchor="middle" fill="#fef3c7" font-size="9">Hồi giáo giữ quyền thống trị</text>
      </g>
      <g transform="translate(470, 60)">
        <rect x="0" y="0" width="180" height="85" rx="10" fill="#b45309" />
        <text x="90" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">ĐẾ QUỐC MÔ-GÔN</text>
        <text x="90" y="45" text-anchor="middle" fill="#fef3c7" font-size="10">Năm 1526 – giữa TK XIX</text>
        <text x="90" y="65" text-anchor="middle" fill="#fef3c7" font-size="9">Thời A-cơ-ba thịnh vượng</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Các thời kì lịch sử của Ấn Độ trung đại',
        content: `• <strong>Vương triều Gúp-ta (thế kỉ IV – VI):</strong> Thống nhất phần lớn miền Bắc Ấn Độ, tạo nên thời kì phát triển rực rỡ của kinh tế, văn học chữ Phạn và nghệ thuật điêu khắc kiến trúc.<br>• <strong>Vương triều Hồi giáo Đê-li (1206–1526):</strong> Người Hồi giáo gốc Thổ Nhĩ Kỳ chiếm quyền cai trị, áp đặt đạo Hồi làm quốc giáo, truyền bá kiến trúc Hồi giáo vào tiểu lục địa Ấn Độ.<br>• <strong>Đế quốc Mô-gôn (1526–giữa thế kỉ XIX):</strong> Được lập nên bởi người Mô-gôn. Đỉnh cao là thời trị vì của vua <strong>A-cơ-ba (1556–1605)</strong> với chính sách tiến bộ: hòa giải và khoan dung tôn giáo, giảm thuế, khuyến khích nông nghiệp và văn hóa phát triển.`
      },
      {
        title: '2. Thành tựu văn hóa Ấn Độ',
        content: `• <strong>Tôn giáo:</strong> Ấn Độ là cái nôi của hai tôn giáo lớn: Ấn Độ giáo (Hin-đu giáo) và Phật giáo; đạo Hồi du nhập và phát triển mạnh mẽ thời Đê-li và Mô-gôn.<br>• <strong>Kiến trúc & Nghệ thuật:</strong> Kết hợp giữa nghệ thuật truyền thống Ấn Độ và kiến trúc Hồi giáo. Công trình tiêu biểu là cụm hang động A-gian-ta, đền thờ Khajuraho và kiệt tác lăng mộ đá cẩm thạch trắng <strong>Taj Mahal</strong> tại Agra.<br>• <strong>Chữ viết & Khoa học:</strong> Hoàn thiện chữ Phạn, sáng tạo hệ thống số đếm bao gồm số 0 mà ngày nay thế giới đang sử dụng.`
      }
    ],
    quiz: [
      {
        question: 'Vị vua kiệt xuất nào của Đế quốc Mô-gôn đã thực hiện chính sách khoan dung tôn giáo và hòa hợp dân tộc?',
        options: ['Ba-bua', 'A-cơ-ba', 'Sa Gia-han', 'A-sô-ca'],
        answer: 1,
        explanation: 'Vua A-cơ-ba (1556–1605) thi hành chính sách hòa giải dân tộc, bình đẳng và tôn trọng các tôn giáo khác nhau.'
      }
    ],
    checklist: [
      'Phân biệt được 3 thời kì: Gúp-ta, Hồi giáo Đê-li và Đế quốc Mô-gôn',
      'Nêu ý nghĩa chính sách cải cách tiến bộ của vua A-cơ-ba',
      'Nhận biết các di sản kiến trúc nổi bật: Taj Mahal, chùa hang A-gian-ta'
    ]
  },

  // CHƯƠNG 3. ĐÔNG NAM Á TỪ NỬA SAU THẾ KỈ X ĐẾN NỬA ĐẦU THẾ KỈ XVI
  {
    id: 'ls-bai-6',
    num: 6,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 3. Đông Nam Á từ nửa sau thế kỉ X đến nửa đầu thế kỉ XVI',
    title: 'Bài 6. Các vương quốc phong kiến Đông Nam Á',
    pages: 'tr. 39–43',
    objective: 'Nêu sự hình thành và phát triển của các vương quốc phong kiến Đông Nam Á; trình bày đời sống kinh tế nông nghiệp, thương mại biển và các thành tựu văn hóa kiến trúc nổi bật.',
    mindmap: 'Vị trí ngã tư hàng hải thế giới → Vương quốc thịnh vượng: Pa-gan (Mi-an-ma), Ăng-co (Khmer), Su-khô-thay/A-yut-thay-a (Thái), Sri Vi-giay-a, Ma-lắc-ca → Nông nghiệp lúa nước & Cảng thị sầm uất → Di sản vĩ đại: Ăng-co Vát, Bô-rô-bu-đua.',
    svg: `<svg viewBox="0 0 700 180" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="160" rx="16" fill="#ecfdf5" stroke="#10b981"/>
      <text x="350" y="35" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="13">CÁC VƯƠNG QUỐC ĐÔNG NAM Á TIÊU BIỂU (TK X – XVI)</text>
      <g transform="translate(30, 60)">
        <rect x="0" y="0" width="145" height="85" rx="10" fill="#fff" stroke="#10b981" stroke-width="2"/>
        <text x="72" y="25" text-anchor="middle" font-weight="bold" fill="#047857" font-size="12">LỤC ĐỊA</text>
        <text x="72" y="45" text-anchor="middle" fill="#374151" font-size="10">Ăng-co (Khmer)</text>
        <text x="72" y="60" text-anchor="middle" fill="#374151" font-size="10">Pa-gan (Mi-an-ma)</text>
        <text x="72" y="75" text-anchor="middle" fill="#374151" font-size="10">Su-khô-thay, Lan Xang</text>
      </g>
      <g transform="translate(200, 60)">
        <rect x="0" y="0" width="145" height="85" rx="10" fill="#fff" stroke="#10b981" stroke-width="2"/>
        <text x="72" y="25" text-anchor="middle" font-weight="bold" fill="#047857" font-size="12">HẢI ĐẢO</text>
        <text x="72" y="45" text-anchor="middle" fill="#374151" font-size="10">Sri Vi-giay-a</text>
        <text x="72" y="60" text-anchor="middle" fill="#374151" font-size="10">Ma-giơ-pa-hit</text>
        <text x="72" y="75" text-anchor="middle" fill="#374151" font-size="10">Ma-lắc-ca (Thương cảng)</text>
      </g>
      <g transform="translate(370, 60)">
        <rect x="0" y="0" width="300" height="85" rx="10" fill="#10b981" />
        <text x="150" y="25" text-anchor="middle" font-weight="bold" fill="#fff" font-size="12">DI SẢN VĂN HÓA VĨ ĐẠI</text>
        <text x="150" y="48" text-anchor="middle" fill="#d1fae5" font-size="11">• Đền Ăng-co Vát, Ăng-co Thom (Cam-pu-chia)</text>
        <text x="150" y="68" text-anchor="middle" fill="#d1fae5" font-size="11">• Quần thể phật giáo Bô-rô-bu-đua (In-đô-nê-xi-a)</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Sự hình thành và phát triển của các vương quốc phong kiến',
        content: `• <strong>Giai đoạn thế kỉ X – XVI:</strong> Là thời kì phát triển thịnh đạt của các vương quốc phong kiến Đông Nam Á.<br>• <strong>Lục địa:</strong> Vương quốc Pa-gan (Mi-an-ma), Vương triều Ăng-co huy hoàng (Cam-pu-chia), các vương quốc Su-khô-thay và A-yut-thay-a của người Thái, Lan Xang (Lào).<br>• <strong>Hải đảo:</strong> Vương quốc Ma-giơ-pa-hit (In-đô-nê-xi-a) và cảng thị quốc tế sầm uất Ma-lắc-ca (Ma-lai-xi-a).`
      },
      {
        title: '2. Kinh tế và văn hóa',
        content: `• <strong>Kinh tế:</strong> Nông nghiệp trồng lúa nước là nền tảng vững chắc; thương mại đường biển bùng nổ mạnh mẽ nhờ vị trí ngã tư đường hàng hải kết nối Ấn Độ Dương và Thái Bình Dương.<br>• <strong>Văn hóa & Kiến trúc:</strong> Ảnh hưởng sâu rộng của Phật giáo và Hin-đu giáo từ Ấn Độ; Hồi giáo lan tỏa rộng rãi tại khu vực hải đảo từ thế kỉ XIII. Các công trình kiến trúc kì vĩ như Ăng-co Vát, Ăng-co Thom (Cam-pu-chia), Bô-rô-bu-đua (In-đô-nê-xi-a).`
      }
    ],
    quiz: [
      {
        question: 'Quần thể đền tháp Phật giáo Bô-rô-bu-đua là công trình kiến trúc nổi tiếng thuộc quốc gia Đông Nam Á nào hiện nay?',
        options: ['Cam-pu-chia', 'In-đô-nê-xi-a', 'Mi-an-ma', 'Thái Lan'],
        answer: 1,
        explanation: 'Bô-rô-bu-đua là đại kỳ quan Phật giáo thế giới xây dựng trên đảo Gia-va, In-đô-nê-xi-a.'
      }
    ],
    checklist: [
      'Nắm được các vương quốc lớn: Pa-gan, Ăng-co, Su-khô-thay, Lan Xang, Ma-lắc-ca',
      'Hiểu rõ sự kết hợp giữa kinh tế nông nghiệp lúa nước và thương mại đường biển',
      'Kể tên hai kiệt tác kiến trúc tôn giáo: Ăng-co Vát và Bô-rô-bu-đua'
    ]
  },
  {
    id: 'ls-bai-7',
    num: 7,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 3. Đông Nam Á từ nửa sau thế kỉ X đến nửa đầu thế kỉ XVI',
    title: 'Bài 7. Vương quốc Lào',
    pages: 'tr. 44–47',
    objective: 'Nêu sự hình thành và phát triển của Vương quốc Lan Xang; trình bày kinh tế, đời sống xã hội và công trình văn hóa Thạt Luổng.',
    mindmap: 'Người Lào Lùm dọc sông Mê Công → 1353: Phà Ngừm thống nhất lập Vương quốc Lan Xang ("Triệu Voi") → Cực thịnh TK XV - XVII → Phật giáo Nam tông & Chữ Lào → Thạt Luổng (Viêng Chăn).',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#fdf2f8" stroke="#db2777"/>
      <g transform="translate(30, 30)">
        <rect x="0" y="0" width="280" height="100" rx="10" fill="#db2777" />
        <text x="140" y="30" text-anchor="middle" fill="#fff" font-weight="bold" font-size="13">VƯƠNG QUỐC LAN XANG</text>
        <text x="140" y="55" text-anchor="middle" fill="#fce7f3" font-size="11">• Thành lập: 1353 bởi Phà Ngừm</text>
        <text x="140" y="75" text-anchor="middle" fill="#fce7f3" font-size="11">• Ý nghĩa: Vương quốc "Triệu Voi"</text>
      </g>
      <g transform="translate(350, 30)">
        <rect x="0" y="0" width="310" height="100" rx="10" fill="#fff" stroke="#db2777" stroke-width="2"/>
        <text x="155" y="30" text-anchor="middle" fill="#9d174d" font-weight="bold" font-size="13">BIỂU TƯỢNG VĂN HÓA THẠT LUỔNG</text>
        <text x="155" y="55" text-anchor="middle" fill="#4b5563" font-size="11">• Xây dựng tại thủ đô Viêng Chăn</text>
        <text x="155" y="75" text-anchor="middle" fill="#4b5563" font-size="11">• Tháp Phật giáo Nam tông nguy nga, mạ vàng</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Sự hình thành và phát triển của Vương quốc Lan Xang',
        content: `• Năm 1353, vua <strong>Phà Ngừm</strong> đã tập hợp và thống nhất các mường Lào, lập nên <strong>Vương quốc Lan Xang</strong> (nghĩa là "Triệu Voi").<br>• Lan Xang phát triển thịnh vượng từ thế kỉ XV đến XVII: chia đất nước thành các mường có quan cai quản, xây dựng quân đội quy củ, giữ hòa hiếu với các nước láng giềng như Đại Việt.`
      },
      {
        title: '2. Kinh tế và văn hóa đặc sắc',
        content: `• <strong>Kinh tế:</strong> Nông nghiệp lúa nước ven lưu vực sông Mê Công kết hợp chăn nuôi voi, gia súc, dệt vải và buôn bán lâm sản quý.<br>• <strong>Văn hóa:</strong> Phật giáo Nam tông là quốc giáo, hòa quyện với tín ngưỡng dân gian; chữ Lào phát triển; di sản văn hóa vĩ đại là <strong>Tháp Thạt Luổng</strong> ở Viêng Chăn biểu trưng cho sự đoàn kết và tinh thần độc lập của dân tộc Lào.`
      }
    ],
    quiz: [
      {
        question: 'Ai là người có công thống nhất các mường Lào lập nên Vương quốc Lan Xang năm 1353?',
        options: ['Chay-sét-tha', 'Phà Ngừm', 'Xụ-li-nha Vông-xa', 'A-nô-vông'],
        answer: 1,
        explanation: 'Phà Ngừm là vị vua sáng lập Vương quốc Lan Xang (Triệu Voi) năm 1353.'
      }
    ],
    checklist: [
      'Nhớ mốc năm 1353 Phà Ngừm lập ra vương quốc Lan Xang (Triệu Voi)',
      'Nêu vai trò của Phật giáo Nam tông và di tích Thạt Luổng ở Viêng Chăn'
    ]
  },
  {
    id: 'ls-bai-8',
    num: 8,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 3. Đông Nam Á từ nửa sau thế kỉ X đến nửa đầu thế kỉ XVI',
    title: 'Bài 8. Vương quốc Cam-pu-chia',
    pages: 'tr. 48–52',
    objective: 'Nêu các giai đoạn lịch sử của Cam-pu-chia; phân tích vai trò của Biển Hồ và hệ thống thủy lợi đối với nông nghiệp; trình bày thành tựu nghệ thuật kiến trúc Ăng-co.',
    mindmap: 'Năm 802: Jayavarman II lập Vương triều Ăng-co → Thời kì phát triển đỉnh cao (TK IX - XV) → Biển Hồ & Thủy lợi nuôi dưỡng nông nghiệp trù phú → Tuyệt tác kiến trúc thế giới: Ăng-co Vát & Ăng-co Thom.',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#f0fdf4" stroke="#16a34a"/>
      <g transform="translate(30, 30)">
        <rect x="0" y="0" width="300" height="100" rx="10" fill="#16a34a" />
        <text x="150" y="30" text-anchor="middle" fill="#fff" font-weight="bold" font-size="13">THỜI KÌ HOÀNG KIM ĂNG-CO</text>
        <text x="150" y="55" text-anchor="middle" fill="#dcfce7" font-size="11">• Khởi đầu: Năm 802 (Jayavarman II)</text>
        <text x="150" y="75" text-anchor="middle" fill="#dcfce7" font-size="11">• Kéo dài từ thế kỉ IX đến thế kỉ XV</text>
      </g>
      <g transform="translate(360, 30)">
        <rect x="0" y="0" width="310" height="100" rx="10" fill="#fff" stroke="#16a34a" stroke-width="2"/>
        <text x="155" y="30" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="13">NỀN TẢNG KINH TẾ & NGHỆ THUẬT</text>
        <text x="155" y="55" text-anchor="middle" fill="#4b5563" font-size="11">• Thủy lợi Biển Hồ tạo thặng dư lúa gạo</text>
        <text x="155" y="75" text-anchor="middle" fill="#4b5563" font-size="11">• Kiệt tác Ăng-co Vát, Ăng-co Thom huyền bí</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Thời kì Ăng-co hoàng kim (thế kỉ IX – XV)',
        content: `• Năm 802, vua <strong>Jayavarman II</strong> thống nhất đất nước, xác lập thời kì Ăng-co huy hoàng kéo dài đến thế kỉ XV.<br>• Các đời vua mở rộng lãnh thổ, đưa Ăng-co trở thành một trong những đế quốc hùng mạnh và trù phú nhất Đông Nam Á thời bấy giờ.`
      },
      {
        title: '2. Kinh tế Biển Hồ và kiệt tác kiến trúc Ăng-co',
        content: `• <strong>Kinh tế nông nghiệp:</strong> Nhờ nguồn nước ngọt và phù sa từ <em>Biển Hồ (Tonlé Sap)</em> kết hợp hệ thống kênh mương thủy lợi chằng chịt, nông nghiệp lúa nước cho sản lượng dồi dào, nuôi dưỡng đô thị khổng lồ.<br>• <strong>Kiến trúc & Điêu khắc:</strong> Các đền tháp bằng đá độc nhất vô nhị: <strong>Ăng-co Vát</strong> (thờ thần Vishnu của Hin-đu giáo) và <strong>Ăng-co Thom</strong> (trung tâm với đền Bayon có những khuôn mặt đá mỉm cười bí ẩn mang ảnh hưởng Phật giáo).`
      }
    ],
    quiz: [
      {
        question: 'Khu đền đá Ăng-co Vát ở Cam-pu-chia ban đầu được xây dựng để tôn vinh vị thần nào trong đạo Hin-đu?',
        options: ['Thần Sáng tạo Brahma', 'Thần Hủy diệt Shiva', 'Thần Bảo tồn Vishnu', 'Thần Sấm sét Indra'],
        answer: 2,
        explanation: 'Ăng-co Vát được vua Suryavarman II cho xây dựng vào đầu thế kỉ XII để thờ thần bảo tồn Vishnu.'
      }
    ],
    checklist: [
      'Hiểu rõ vai trò của Biển Hồ và hệ thống thủy lợi đối với nông nghiệp Ăng-co',
      'Phân biệt được giá trị của Ăng-co Vát và Ăng-co Thom'
    ]
  },

  // CHƯƠNG 4. VIỆT NAM TỪ ĐẦU THẾ KỈ X ĐẾN ĐẦU THẾ KỈ XVI
  {
    id: 'ls-bai-9',
    num: 9,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 4. Việt Nam từ đầu thế kỉ X đến đầu thế kỉ XVI',
    title: 'Bài 9. Ngô Quyền dựng nền độc lập',
    pages: 'tr. 53–56',
    objective: 'Nêu trận chiến Bạch Đằng năm 938 và ý nghĩa lịch sử to lớn; trình bày việc Ngô Quyền xưng vương, đóng đô ở Cổ Loa, mở đầu kỉ nguyên độc lập tự chủ lâu dài.',
    mindmap: 'Chiến thắng Bạch Đằng 938: Đóng cọc lòng sông + Nhử địch theo thủy triều → Đánh tan quân Nam Hán → 939: Ngô Quyền xưng vương, đóng đô Cổ Loa → Chấm dứt hơn 1000 năm Bắc thuộc.',
    svg: `<svg viewBox="0 0 700 170" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="150" rx="16" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="350" y="35" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">TRẬN BẠCH ĐẰNG LỊCH SỬ NĂM 938</text>
      <g transform="translate(40, 55)">
        <rect x="0" y="0" width="180" height="80" rx="8" fill="#3b82f6" />
        <text x="90" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">KẾ SÁCH ĐỘC ĐÁO</text>
        <text x="90" y="45" text-anchor="middle" fill="#dbeafe" font-size="10">Vót cọc nhọn bọc sắt</text>
        <text x="90" y="65" text-anchor="middle" fill="#dbeafe" font-size="10">Đóng cọc ngầm lòng sông</text>
      </g>
      <g transform="translate(260, 55)">
        <rect x="0" y="0" width="180" height="80" rx="8" fill="#1d4ed8" />
        <text x="90" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">DIỄN BIẾN</text>
        <text x="90" y="45" text-anchor="middle" fill="#dbeafe" font-size="10">Nhử địch khi nước triều lên</text>
        <text x="90" y="65" text-anchor="middle" fill="#dbeafe" font-size="10">Dốc toàn lực khi triều rút</text>
      </g>
      <g transform="translate(480, 55)">
        <rect x="0" y="0" width="180" height="80" rx="8" fill="#1e3a8a" />
        <text x="90" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">Ý NGHĨA LỊCH SỬ</text>
        <text x="90" y="45" text-anchor="middle" fill="#dbeafe" font-size="10">Chấm dứt 1000 năm Bắc thuộc</text>
        <text x="90" y="65" text-anchor="middle" fill="#facc15" font-weight="bold" font-size="10">Mở ra kỉ nguyên độc lập</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Chiến thắng Bạch Đằng năm 938 vang dội non sông',
        content: `• <strong>Bối cảnh:</strong> Kiều Công Tiễn giết Tiết độ sứ Dương Đình Nghệ rồi cầu cứu nhà Nam Hán. Ngô Quyền đem quân ra Bắc diệt phản tặc và bày trận địa đón đánh giặc.<br>• <strong>Nghệ thuật quân sự:</strong> Nắm bắt quy luật thủy triều của sông Bạch Đằng, cho đóng cọc vạt nhọn bọc sắt ở cửa sông. Khi thủy triều lên cho thuyền nhẹ ra khiêu chiến nhử địch vượt qua bãi cọc; khi triều rút thì dốc lực lượng phản công dữ dội làm thuyền giặc vướng cọc tan vỡ. Tướng giặc Lưu Hoằng Tháo tử trận.`
      },
      {
        title: '2. Ngô Quyền xưng vương, đóng đô ở Cổ Loa',
        content: `• Mùa xuân năm 939, Ngô Quyền xưng vương, bãi bỏ chức Tiết độ sứ của phong kiến phương Bắc, chọn <strong>Cổ Loa</strong> (Đông Anh, Hà Nội) làm kinh đô.<br>• Thiết lập bộ máy chính quyền độc lập: đặt trăm quan, quy định triều nghi, cử tướng lĩnh tài giỏi trấn giữ các châu mục.<br>• <strong>Ý nghĩa:</strong> Chiến thắng Bạch Đằng và sự nghiệp của Ngô Quyền đã chấm dứt hoàn toàn hơn 1.000 năm Bắc thuộc tăm tối, mở ra kỉ nguyên độc lập, tự chủ lâu dài cho dân tộc ta.`
      }
    ],
    quiz: [
      {
        question: 'Ngô Quyền quyết định chọn địa điểm nào làm kinh đô sau khi xưng vương năm 939?',
        options: ['Hoa Lư', 'Đại La', 'Cổ Loa', 'Thăng Long'],
        answer: 2,
        explanation: 'Ngô Quyền chọn Cổ Loa (kinh đô cũ của thời An Dương Vương) làm kinh đô để nối tiếp truyền thống dựng nước độc lập.'
      }
    ],
    checklist: [
      'Nắm vững diễn biến và nghệ thuật đóng cọc lòng sông Bạch Đằng năm 938',
      'Hiểu rõ ý nghĩa bước ngoặt lịch sử: chấm dứt hơn 1000 năm Bắc thuộc'
    ]
  },
  {
    id: 'ls-bai-10',
    num: 10,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 4. Việt Nam từ đầu thế kỉ X đến đầu thế kỉ XVI',
    title: 'Bài 10. Đinh Bộ Lĩnh thống nhất đất nước. Nhà Đinh và Tiền Lê',
    pages: 'tr. 57–62',
    objective: 'Trình bày công cuộc dẹp loạn 12 sứ quân của Đinh Bộ Lĩnh; nêu sự thành lập nước Đại Cồ Việt, triều Tiền Lê và chiến thắng kháng Tống năm 981.',
    mindmap: 'Loạn 12 sứ quân → Đinh Bộ Lĩnh dẹp loạn, thống nhất đất nước (967) → 968: Lên ngôi Hoàng đế, đặt quốc hiệu Đại Cồ Việt, đóng đô Hoa Lư → 980: Lê Hoàn lập nhà Tiền Lê → 981: Đánh tan quân xâm lược Tống.',
    svg: `<svg viewBox="0 0 700 150" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="130" rx="16" fill="#fdf4ff" stroke="#a855f7"/>
      <g transform="translate(30, 30)">
        <rect x="0" y="0" width="180" height="80" rx="8" fill="#a855f7" />
        <text x="90" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">967: DẸP 12 SỨ QUÂN</text>
        <text x="90" y="45" text-anchor="middle" fill="#fae8ff" font-size="10">Đinh Bộ Lĩnh tài thao lược</text>
        <text x="90" y="65" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Vạn Thắng Vương</text>
      </g>
      <g transform="translate(250, 30)">
        <rect x="0" y="0" width="190" height="80" rx="8" fill="#9333ea" />
        <text x="95" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">968: ĐẠI CỒ VIỆT</text>
        <text x="95" y="45" text-anchor="middle" fill="#fae8ff" font-size="10">Xưng Hoàng đế (Đinh Tiên Hoàng)</text>
        <text x="95" y="65" text-anchor="middle" fill="#fae8ff" font-size="10">Đóng đô tại Hoa Lư</text>
      </g>
      <g transform="translate(480, 30)">
        <rect x="0" y="0" width="180" height="80" rx="8" fill="#7e22ce" />
        <text x="90" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">981: KHÁNG TỐNG</text>
        <text x="90" y="45" text-anchor="middle" fill="#fae8ff" font-size="10">Lê Hoàn chỉ huy quyết chiến</text>
        <text x="90" y="65" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Bảo vệ vững chắc độc lập</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Đinh Bộ Lĩnh dẹp loạn 12 sứ quân và lập nước Đại Cồ Việt',
        content: `• Sau khi Ngô Quyền mất, các thế lực thổ hào nổi dậy chia cắt đất nước thành <em>Loạn 12 sứ quân</em>.<br>• <strong>Đinh Bộ Lĩnh</strong> (được xưng là Vạn Thắng Vương) tập hợp lực lượng liên kết và đánh dẹp các sứ quân, thống nhất non sông năm 967.<br>• Năm 968, Đinh Bộ Lĩnh lên ngôi <strong>Hoàng đế</strong> (Đinh Tiên Hoàng), khẳng định vị thế quốc gia ngang hàng với phong kiến phương Bắc; đặt quốc hiệu là <strong>Đại Cồ Việt</strong>, đóng đô ở vùng núi non hiểm trở <strong>Hoa Lư</strong> (Ninh Bình), đúc tiền đồng <em>Thái Bình hưng bảo</em>.`
      },
      {
        title: '2. Nhà Tiền Lê và cuộc kháng chiến chống Tống năm 981',
        content: `• Năm 979, Đinh Tiên Hoàng bị hại, con trai còn nhỏ tuổi. Quân Tống chuẩn bị sang xâm lược.<br>• Thái hậu Dương Vân Nga và triều thần suy tôn Thập đạo tướng quân <strong>Lê Hoàn</strong> lên làm vua (năm 980), lập ra nhà Tiền Lê.<br>• <strong>Kháng chiến chống Tống (981):</strong> Lê Hoàn trực tiếp chỉ huy chặn giặc trên sông Bạch Đằng và đường bộ Tây Kết. Quân Tống đại bại tháo chạy, tướng giặc Hầu Nhân Bảo bị chém đầu. Đất nước giữ vững nền hòa bình độc lập.`
      }
    ],
    quiz: [
      {
        question: 'Quốc hiệu đầu tiên của nước ta thời kì phong kiến độc lập do Đinh Bộ Lĩnh đặt năm 968 là gì?',
        options: ['Đại Việt', 'Đại Cồ Việt', 'Vạn Xuân', 'Đại Nam'],
        answer: 1,
        explanation: 'Năm 968, Đinh Bộ Lĩnh lên ngôi Hoàng đế đặt quốc hiệu là Đại Cồ Việt (nước Việt lớn).'
      }
    ],
    checklist: [
      'Ghi nhớ công lao dẹp loạn 12 sứ quân của Đinh Bộ Lĩnh',
      'Nắm các mốc: Đinh Tiên Hoàng lên ngôi 968, Lê Hoàn lập nhà Tiền Lê 980, đánh tan quân Tống 981'
    ]
  },
  {
    id: 'ls-bai-11',
    num: 11,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 4. Việt Nam từ đầu thế kỉ X đến đầu thế kỉ XVI',
    title: 'Bài 11. Nhà Lý xây dựng và phát triển đất nước (1009–1225)',
    pages: 'tr. 63–67',
    objective: 'Nêu sự thành lập nhà Lý và sự kiện dời đô về Thăng Long năm 1010; trình bày tổ chức bộ máy nhà nước, luật pháp (Hình thư 1042), kinh tế, giáo dục và văn hóa thời Lý.',
    mindmap: '1009: Lý Công Uẩn lên ngôi → 1010: Chiếu dời đô về Thăng Long → 1054: Đổi quốc hiệu Đại Việt → Chính sách: Ngụ binh ư nông, Luật Hình thư (1042) → Giáo dục: 1070 Văn Miếu, 1075 Khoa thi đầu tiên, 1076 Quốc Tử Giám.',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#fefce8" stroke="#ca8a04"/>
      <g transform="translate(30, 30)">
        <rect x="0" y="0" width="200" height="90" rx="8" fill="#ca8a04" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">1010: DỜI ĐÔ VỀ THĂNG LONG</text>
        <text x="100" y="48" text-anchor="middle" fill="#fef9c3" font-size="10">Địa thế rồng cuộn hổ ngồi</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef9c3" font-size="10">Kinh đô phồn thịnh muôn đời</text>
      </g>
      <g transform="translate(250, 30)">
        <rect x="0" y="0" width="200" height="90" rx="8" fill="#a16207" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">PHÁP LUẬT & QUÂN ĐỘI</text>
        <text x="100" y="48" text-anchor="middle" fill="#fef9c3" font-size="10">Bộ luật Hình thư (1042)</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef9c3" font-size="10">Chính sách "Ngụ binh ư nông"</text>
      </g>
      <g transform="translate(470, 30)">
        <rect x="0" y="0" width="190" height="90" rx="8" fill="#854d0e" />
        <text x="95" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">GIÁO DỤC KHOA CỬ</text>
        <text x="95" y="45" text-anchor="middle" fill="#fef9c3" font-size="10">1070: Lập Văn Miếu</text>
        <text x="95" y="62" text-anchor="middle" fill="#fef9c3" font-size="10">1075: Mở khoa thi đầu tiên</text>
        <text x="95" y="79" text-anchor="middle" fill="#fef9c3" font-size="10">1076: Lập Quốc Tử Giám</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Nhà Lý thành lập và sự kiện dời đô về Thăng Long',
        content: `• Cuối năm 1009, Lý Công Uẩn được triều thần suy tôn lên ngôi hoàng đế (Lý Thái Tổ), sáng lập triều Lý.<br>• Mùa thu năm 1010, Lý Thái Tổ ban bố <em>Chiếu dời đô</em>, chuyển kinh đô từ Hoa Lư chật hẹp ra thành Đại La và đổi tên là <strong>Thăng Long</strong> (Rồng bay lên). Thăng Long là trung tâm kinh tế, chính trị hội tụ tinh hoa đất trời.<br>• Năm 1054, nhà Lý đổi quốc hiệu thành <strong>Đại Việt</strong>.`
      },
      {
        title: '2. Xây dựng chính quyền, kinh tế và văn hóa giáo dục',
        content: `• <strong>Chính trị & Pháp luật:</strong> Củng cố chế độ quân chủ tập quyền; ban hành bộ luật thành văn đầu tiên của nước ta là <strong>Hình thư (1042)</strong>. Thực hiện chính sách <em>"ngụ binh ư nông"</em> (gửi binh ở nhà nông) vừa đảm bảo quân đội thường trực vừa giữ sức sản xuất.<br>• <strong>Kinh tế:</strong> Đắp đê phòng lũ lụt (đê Cơ Xá), vua trực tiếp cày ruộng tịch điền; mở thương cảng Vân Đồn buôn bán với tàu buôn nước ngoài.<br>• <strong>Giáo dục & Văn hóa:</strong> Năm 1070 lập Văn Miếu; năm 1075 mở khoa thi Nho học đầu tiên tuyển chọn nhân tài; năm 1076 lập Quốc Tử Giám - trường đại học đầu tiên của Việt Nam. Phật giáo rất hưng thịnh (chùa Một Cột, tháp Báo Thiên).`
      }
    ],
    quiz: [
      {
        question: 'Bộ luật thành văn đầu tiên trong lịch sử dân tộc ta được ban hành dưới triều vua Lý Thái Tông là bộ luật nào?',
        options: ['Quốc triều hình luật', 'Bộ luật Hình thư (1042)', 'Hoàng triều luật lệ', 'Luật Hồng Đức'],
        answer: 1,
        explanation: 'Năm 1042, Lý Thái Tông cho ban hành bộ luật Hình thư - bộ luật thành văn đầu tiên của Đại Việt.'
      }
    ],
    checklist: [
      'Ghi nhớ ý nghĩa quyết định dời đô về Thăng Long năm 1010 của Lý Thái Tổ',
      'Nắm rõ chính sách "ngụ binh ư nông" và bộ luật Hình thư năm 1042',
      'Hiểu các dấu mốc giáo dục: 1070 Văn Miếu, 1075 Khoa thi đầu tiên, 1076 Quốc Tử Giám'
    ]
  },
  {
    id: 'ls-bai-12',
    num: 12,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 4. Việt Nam từ đầu thế kỉ X đến đầu thế kỉ XVI',
    title: 'Bài 12. Cuộc kháng chiến chống quân xâm lược Tống (1075–1077)',
    pages: 'tr. 68–72',
    objective: 'Trình bày đường lối kháng chiến chủ động của Lý Thường Kiệt: "Tiến công trước để tự vệ" (1075) và phòng tuyến sông Như Nguyệt (1077); nêu ý nghĩa bài thơ "Nam quốc sơn hà".',
    mindmap: 'Nhà Tống âm mưu xâm lược → 1075: Lý Thường Kiệt chủ động tiến công Ung Châu, Khâm Châu, Liêm Châu rồi rút về → 1077: Xây phòng tuyến sông Như Nguyệt chặn giặc → Thơ thần Nam quốc sơn hà → Giảng hòa nhân đạo kết thúc chiến tranh.',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#fef2f2" stroke="#ef4444"/>
      <g transform="translate(30, 30)">
        <rect x="0" y="0" width="300" height="100" rx="10" fill="#ef4444" />
        <text x="150" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">GIAI ĐOẠN 1 (NĂM 1075)</text>
        <text x="150" y="50" text-anchor="middle" fill="#fee2e2" font-weight="bold" font-size="11">"Tiến công trước để tự vệ"</text>
        <text x="150" y="70" text-anchor="middle" fill="#fee2e2" font-size="10">Đánh tan căn cứ Ung Châu, Liêm Châu</text>
        <text x="150" y="88" text-anchor="middle" fill="#fee2e2" font-size="10">Phá vỡ kế hoạch tiếp tế của giặc rồi rút về</text>
      </g>
      <g transform="translate(360, 30)">
        <rect x="0" y="0" width="310" height="100" rx="10" fill="#b91c1c" />
        <text x="155" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">GIAI ĐOẠN 2 (NĂM 1077)</text>
        <text x="155" y="50" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="11">Phòng tuyến sông Như Nguyệt (sông Cầu)</text>
        <text x="155" y="70" text-anchor="middle" fill="#fee2e2" font-size="10">Quách Quỳ tuyệt vọng bị cầm chân</text>
        <text x="155" y="88" text-anchor="middle" fill="#fde047" font-weight="bold" font-size="10">Vang vọng bài thơ thần "Nam quốc sơn hà"</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Giai đoạn thứ nhất: Chủ động tiến công trước để tự vệ (1075)',
        content: `• Trước âm mưu xâm lược của nhà Tống, Lý Thường Kiệt chủ trương: <em>"Ngồi yên đợi giặc không bằng đem quân đánh trước để chặn mũi nhọn của giặc"</em>.<br>• Tháng 10–1075, Lý Thường Kiệt chỉ huy hơn 10 vạn quân bất ngờ tiến công vào đất Tống, triệt phá kho lương và căn cứ bàn đạp của giặc ở Khâm Châu, Liêm Châu và Ung Châu rồi chủ động rút quân về nước lập phòng tuyến chuẩn bị kháng chiến.`
      },
      {
        title: '2. Trận chiến trên phòng tuyến sông Như Nguyệt (1077)',
        content: `• Đầu năm 1077, 30 vạn quân Tống do Quách Quỳ chỉ huy tràn vào nước ta nhưng bị chặn đứng hoàn toàn trước chiến lũy tre vững chắc bên bờ nam <strong>sông Như Nguyệt</strong> (sông Cầu, Bắc Ninh).<br>• Đêm đêm, bài thơ thần <strong>Nam quốc sơn hà</strong> (được coi là bản Tuyên ngôn Độc lập đầu tiên của nước ta) vang lên làm quân sĩ ta nức lòng hăng hái, quân Tống khiếp đảm hoang mang.<br>• Khi quân giặc lâm vào thế quẫn bách, Lý Thường Kiệt chủ động đề nghị <em>giảng hòa</em> để bảo đảm tính mạng quân sĩ, giữ mối quan hệ hòa hiếu lâu dài. Cuộc kháng chiến thắng lợi oanh liệt.`
      }
    ],
    quiz: [
      {
        question: 'Tư tưởng chỉ đạo quân sự mang tính chủ động độc đáo của Lý Thường Kiệt trong cuộc kháng chiến chống Tống là gì?',
        options: [
          'Vườn không nhà trống',
          'Ngồi yên đợi giặc không bằng đem quân đánh trước để chặn mũi nhọn của giặc',
          'Đánh chắc tiến chắc',
          'Lấy đoản binh thắng trường trận'
        ],
        answer: 1,
        explanation: 'Lý Thường Kiệt chủ trương đem quân chủ động đánh phá các căn cứ bàn đạp chuẩn bị xâm lược của nhà Tống ở Ung Châu rồi rút quân phòng thủ vững chắc.'
      }
    ],
    checklist: [
      'Hiểu rõ tư tưởng tiến công trước để tự vệ năm 1075 của Lý Thường Kiệt',
      'Nắm vị trí và vai trò chiến lược của phòng tuyến sông Như Nguyệt năm 1077',
      'Phân tích ý nghĩa lịch sử của bài thơ thần "Nam quốc sơn hà"'
    ]
  },
  {
    id: 'ls-bai-13',
    num: 13,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 4. Việt Nam từ đầu thế kỉ X đến đầu thế kỉ XVI',
    title: 'Bài 13. Đại Việt thời Trần (1226–1400)',
    pages: 'tr. 73–77',
    objective: 'Nêu sự thành lập nhà Trần và chế độ Thái thượng hoàng; trình bày chính sách đắp đê, điền trang thái ấp, sự ra đời của Thiền phái Trúc Lâm và nghệ thuật quân sự toàn dân.',
    mindmap: '1226: Lý Chiêu Hoàng nhường ngôi cho Trần Cảnh → Chế độ Thái thượng hoàng cùng trị nước → Nông nghiệp: Đắp đê quai vạc (quan Hà đê sứ) + Lập Điền trang, Thái ấp → Tôn giáo: Trần Nhân Tông sáng lập Thiền phái Trúc Lâm Yên Tử.',
    svg: `<svg viewBox="0 0 700 150" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="130" rx="16" fill="#fdf2f8" stroke="#f43f5e"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#f43f5e" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">THÁI THƯỢNG HOÀNG</text>
        <text x="100" y="48" text-anchor="middle" fill="#ffe4e6" font-size="10">Vua cha cùng vua con trị vì</text>
        <text x="100" y="68" text-anchor="middle" fill="#ffe4e6" font-size="10">Củng cố khối đoàn kết vương thất</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#e11d48" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">ĐÊ ĐIỀU & KINH TẾ</text>
        <text x="100" y="48" text-anchor="middle" fill="#ffe4e6" font-size="10">Đặt chức quan Hà đê sứ</text>
        <text x="100" y="68" text-anchor="middle" fill="#ffe4e6" font-size="10">Lập điền trang, thái ấp</text>
      </g>
      <g transform="translate(470, 25)">
        <rect x="0" y="0" width="190" height="85" rx="8" fill="#9f1239" />
        <text x="95" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">VĂN HÓA ĐẶC SẮC</text>
        <text x="95" y="48" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Thiền phái Trúc Lâm Yên Tử</text>
        <text x="95" y="68" text-anchor="middle" fill="#ffe4e6" font-size="10">Quân dân một lòng đánh giặc</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Sự thành lập nhà Trần và bộ máy chính quyền',
        content: `• Đầu năm 1226, Lý Chiêu Hoàng nhường ngôi cho chồng là Trần Cảnh (Trần Thái Tông), triều Trần chính thức thành lập.<br>• <strong>Chế độ Thái thượng hoàng:</strong> Vua cha nhường ngôi sớm cho con và lên làm Thái thượng hoàng để cùng quản lí quốc gia, đào tạo người kế vị, tránh các cuộc tranh đoạt ngôi báu trong hoàng tộc.<br>• Đặt thêm các chức quan chuyên môn quản lí kinh tế: <em>Hà đê sứ</em> (trông coi đê điều), <em>Khuyến nông sứ</em>, <em>Đồn điền sứ</em>.`
      },
      {
        title: '2. Kinh tế, văn hóa và Phật giáo Trúc Lâm',
        content: `• <strong>Kinh tế:</strong> Đắp đê dọc hai bên bờ sông Hồng (đê quai vạc) bảo vệ mùa màng. Quý tộc được ban <em>thái ấp</em> và tự mộ dân nghèo khai hoang lập <em>điền trang</em>.<br>• <strong>Văn hóa & Tôn giáo:</strong> Nho giáo, Phật giáo và Đạo giáo cùng phát triển (Tam giáo đồng nguyên). Vua Trần Nhân Tông sau khi đánh thắng giặc Nguyên đã xuất gia lên núi Yên Tử lập nên <strong>Thiền phái Trúc Lâm Yên Tử</strong> mang đậm bản sắc tâm hồn dân tộc Việt.<br>• Sử học có bộ <em>Đại Việt sử kí</em> của Lê Văn Hưu.`
      }
    ],
    quiz: [
      {
        question: 'Ai là người sáng lập dòng Thiền phái Trúc Lâm Yên Tử mang đậm bản sắc Phật giáo Đại Việt?',
        options: ['Trần Thái Tông', 'Trần Thánh Tông', 'Trần Nhân Tông', 'Trần Hưng Đạo'],
        answer: 2,
        explanation: 'Trần Nhân Tông xuất gia tu hành tại núi Yên Tử và sáng lập Thiền phái Trúc Lâm mang bản sắc Phật giáo thuần Việt.'
      }
    ],
    checklist: [
      'Hiểu rõ sự chuyển giao quyền lực Lý - Trần năm 1226 và chế độ Thái thượng hoàng',
      'Nắm được chức năng của quan Hà đê sứ, phân biệt điền trang và thái ấp',
      'Biết được ý nghĩa của Thiền phái Trúc Lâm Yên Tử'
    ]
  },
  {
    id: 'ls-bai-14',
    num: 14,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 4. Việt Nam từ đầu thế kỉ X đến đầu thế kỉ XVI',
    title: 'Bài 14. Ba lần kháng chiến chống quân xâm lược Mông – Nguyên',
    pages: 'tr. 78–85',
    objective: 'Nêu diễn biến chính 3 lần kháng chiến (1258, 1285, 1287–1288); phân tích nghệ thuật "Vườn không nhà trống", trận Bạch Đằng 1288; trình bày nguyên nhân thắng lợi và ý nghĩa lịch sử.',
    mindmap: 'Lần 1 (1258): Đông Bộ Đầu → Lần 2 (1285): Hội nghị Diên Hồng, Hịch tướng sĩ, Hàm Tử, Chương Dương → Lần 3 (1287-1288): Trận Vân Đồn (Trần Khánh Dư) & Bạch Đằng (Trần Quốc Tuấn) → Đại phá giặc Nguyên, bảo vệ độc lập.',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#eff6ff" stroke="#2563eb"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="190" height="90" rx="8" fill="#2563eb" />
        <text x="95" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">LẦN 1 (NĂM 1258)</text>
        <text x="95" y="48" text-anchor="middle" fill="#dbeafe" font-size="10">Thực hiện Vườn không nhà trống</text>
        <text x="95" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Thắng lợi Đông Bộ Đầu</text>
      </g>
      <g transform="translate(245, 25)">
        <rect x="0" y="0" width="200" height="90" rx="8" fill="#1d4ed8" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">LẦN 2 (NĂM 1285)</text>
        <text x="100" y="48" text-anchor="middle" fill="#dbeafe" font-size="10">Hội nghị Bình Than, Diên Hồng</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Tây Kết, Hàm Tử, Chương Dương</text>
      </g>
      <g transform="translate(470, 25)">
        <rect x="0" y="0" width="200" height="90" rx="8" fill="#1e3a8a" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">LẦN 3 (1287 – 1288)</text>
        <text x="100" y="48" text-anchor="middle" fill="#dbeafe" font-size="10">Bắt đoàn thuyền lương Vân Đồn</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Đại thắng Bạch Đằng 1288</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Diễn biến ba lần kháng chiến chống Mông – Nguyên',
        content: `• <strong>Lần 1 (1258):</strong> Ngột Lương Hợp Thai dẫn quân Mông Cổ xâm lược. Nhà Trần rút khỏi kinh thành thực hiện kế sách <em>"vườn không nhà trống"</em> làm giặc thiếu lương thực rơi vào khốn đốn, sau đó phản công tại trận <strong>Đông Bộ Đầu</strong> giải phóng Thăng Long.<br>• <strong>Lần 2 (1285):</strong> Thoát Hoan dẫn 50 vạn quân xâm lược. Triều đình mở hội nghị tướng lĩnh ở Bình Than và hội nghị các bô lão ở <strong>Diên Hồng</strong> (đồng thanh hô "Đánh!"). Trần Quốc Tuấn viết <em>Hịch tướng sĩ</em> khích lệ lòng yêu nước. Quân dân nhà Trần phản công rực rỡ ở Tây Kết, Hàm Tử, Chương Dương; Thoát Hoan phải chui vào ống đồng tháo chạy.<br>• <strong>Lần 3 (1287–1288):</strong> Trần Khánh Dư tiêu diệt đoàn thuyền lương của Trương Văn Hổ ở <strong>Vân Đồn</strong>. Tháng 4–1288, Trần Quốc Tuấn chỉ huy trận địa bọc cọc ngầm lịch sử trên sông Bạch Đằng, bắt sống tướng giặc Ô Mã Nhi, đập tan hoàn toàn cuộc xâm lược.`
      },
      {
        title: '2. Nguyên nhân thắng lợi và bài học lịch sử',
        content: `• <strong>Nguyên nhân thắng lợi:</strong> Tinh thần đoàn kết toàn dân tộc ("Vua tôi đồng lòng, anh em hòa mục, cả nước góp sức"); tài thao lược thiên tài của các danh tướng (Trần Hưng Đạo, Trần Quang Khải...); nghệ thuật quân sự độc đáo: tránh thế giặc mạnh lúc đầu, triệt phá hậu cần, chọn địa hình hiểm trở để phản công quyết định.<br>• <strong>Ý nghĩa lịch sử:</strong> Đập tan ý chí xâm lược của đế quốc Nguyên Mông hùng mạnh nhất thế giới lúc bấy giờ; bảo vệ vững chắc độc lập dân tộc; góp phần ngăn chặn vó ngựa Mông Cổ bành trướng xuống Đông Nam Á.`
      }
    ],
    quiz: [
      {
        question: 'Tại trận thủy chiến Bạch Đằng năm 1288, vị tướng giặc khét tiếng nào của quân Nguyên đã bị quân dân nhà Trần bắt sống?',
        options: ['Thoát Hoan', 'Ô Mã Nhi', 'Toa Đô', 'Trương Văn Hổ'],
        answer: 1,
        explanation: 'Trong trận Bạch Đằng tháng 4 năm 1288, tướng chỉ huy thủy quân giặc là Ô Mã Nhi đã bị quân Trần bắt sống.'
      }
    ],
    checklist: [
      'Ghi nhớ các mốc 3 lần kháng chiến: 1258, 1285, 1287-1288',
      'Nêu ý nghĩa của Hội nghị Diên Hồng và Hịch tướng sĩ trong việc hiệu triệu đoàn kết',
      'Phân tích nghệ thuật quân sự trận Vân Đồn và trận Bạch Đằng 1288'
    ]
  },
  {
    id: 'ls-bai-15',
    num: 15,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 4. Việt Nam từ đầu thế kỉ X đến đầu thế kỉ XVI',
    title: 'Bài 15. Nhà Hồ và cuộc kháng chiến chống Minh đầu thế kỉ XV',
    pages: 'tr. 86–89',
    objective: 'Nêu sự thành lập nhà Hồ (1400); phân tích những cải cách táo bạo của Hồ Quý Ly và nguyên nhân thất bại của cuộc kháng chiến chống quân xâm lược Minh.',
    mindmap: '1400: Hồ Quý Ly lập nhà Hồ, đổi quốc hiệu Đại Ngu → Cải cách toàn diện: Hạn điền, Hạn nô, Tiền giấy (Thông bảo hội sao), Chữ Nôm, Xây Thành nhà Hồ → Kháng chiến chống Minh (1406-1407) thất bại do không quy tụ được lòng dân.',
    svg: `<svg viewBox="0 0 700 150" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="130" rx="16" fill="#f8fafc" stroke="#64748b"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="300" height="85" rx="8" fill="#475569" />
        <text x="150" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">CẢI CÁCH CỦA HỒ QUÝ LY</text>
        <text x="150" y="48" text-anchor="middle" fill="#cbd5e1" font-size="10">• Chính sách hạn điền, hạn nô</text>
        <text x="150" y="68" text-anchor="middle" fill="#cbd5e1" font-size="10">• Phát hành tiền giấy, đề cao chữ Nôm</text>
      </g>
      <g transform="translate(360, 25)">
        <rect x="0" y="0" width="310" height="85" rx="8" fill="#334155" />
        <text x="155" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">BÀI HỌC THẤT BẠI TRƯỚC QUÂN MINH</text>
        <text x="155" y="48" text-anchor="middle" fill="#fca5a5" font-weight="bold" font-size="10">Hồ Nguyên Trừng: "Thần không sợ đánh,..."</text>
        <text x="155" y="68" text-anchor="middle" fill="#fca5a5" font-weight="bold" font-size="10">"...chỉ sợ lòng dân không theo"</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Sự thành lập nhà Hồ và cuộc cải cách của Hồ Quý Ly',
        content: `• Năm 1400, Hồ Quý Ly phế truất vua Trần, lập ra triều Hồ, đổi tên nước thành <strong>Đại Ngu</strong> (mong ước sự an vui thái bình), dời đô về Tây Đô (Thanh Hóa).<br>• <strong>Cải cách tiến bộ:</strong> Thực hiện chính sách <em>hạn điền</em> và <em>hạn nô</em> nhằm suy giảm quyền lực kinh tế của quý tộc nhà Trần; lần đầu tiên phát hành <strong>tiền giấy</strong> (Thông bảo hội sao); đề cao chữ Nôm trong hành chính và văn học; cải tiến thi cử và xây dựng thành lũy kiên cố bằng đá (<strong>Thành nhà Hồ</strong>).`
      },
      {
        title: '2. Kháng chiến chống quân Minh thất bại và bài học lịch sử',
        content: `• Cuối năm 1406, nhà Minh huy động 20 vạn quân xâm lược nước ta. Nhà Hồ kháng chiến nhưng rơi vào thế cô lập, thất bại hoàn toàn vào giữa năm 1407.<br>• <strong>Nguyên nhân thất bại:</strong> Cải cách vội vã gây xáo trộn đời sống; việc phế truất nhà Trần không được sự ủng hộ rộng rãi của nhân dân; đường lối kháng chiến thiên về phòng ngự thụ động trong thành lũy. Đúng như tướng quốc Hồ Nguyên Trừng từng nói: <em>"Thần không sợ đánh, chỉ sợ lòng dân không theo"</em>.`
      }
    ],
    quiz: [
      {
        question: 'Dưới thời nhà Hồ, đồng tiền giấy đầu tiên trong lịch sử nước ta có tên gọi là gì?',
        options: ['Thái Bình hưng bảo', 'Thông bảo hội sao', 'Thiên Đức thông bảo', 'Cảnh Hưng thông bảo'],
        answer: 1,
        explanation: 'Hồ Quý Ly cho phát hành đồng tiền giấy đầu tiên mang tên "Thông bảo hội sao" nhằm thu hồi tiền đồng đúc vũ khí.'
      }
    ],
    checklist: [
      'Nắm các cải cách tiến bộ của Hồ Quý Ly: hạn điền, hạn nô, tiền giấy, chữ Nôm',
      'Phân tích sâu sắc bài học "lòng dân" dẫn đến sự thất bại của nhà Hồ năm 1407'
    ]
  },
  {
    id: 'ls-bai-16',
    num: 16,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 4. Việt Nam từ đầu thế kỉ X đến đầu thế kỉ XVI',
    title: 'Bài 16. Khởi nghĩa Lam Sơn (1418–1427)',
    pages: 'tr. 90–97',
    objective: 'Trình bày nguyên nhân, các giai đoạn phát triển của khởi nghĩa Lam Sơn (từ Lũng Nhai, chuyển vào Nghệ An đến đại thắng Tốt Động – Chúc Động và Chi Lăng – Xương Giang); nêu ý nghĩa lịch sử.',
    mindmap: '1416: Hội thề Lũng Nhai → 1418: Bùng nổ tại Lam Sơn (Lê Lợi, Nguyễn Trãi) → 1424: Kế sách Nguyễn Chích chuyển vào Nghệ An mở rộng căn cứ → 1426: Thắng trận Tốt Động - Chúc Động → 1427: Chém Liễu Thăng tại Chi Lăng - Xương Giang → Hội thề Đông Quan.',
    svg: `<svg viewBox="0 0 700 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#fff7ed" stroke="#f97316"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="190" height="90" rx="8" fill="#f97316" />
        <text x="95" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">1418 – 1423</text>
        <text x="95" y="48" text-anchor="middle" fill="#ffedd5" font-size="10">Núi rừng Lam Sơn gian khó</text>
        <text x="95" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Rút lên núi Chí Linh</text>
      </g>
      <g transform="translate(245, 25)">
        <rect x="0" y="0" width="200" height="90" rx="8" fill="#ea580c" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">1424 – 1425</text>
        <text x="100" y="48" text-anchor="middle" fill="#ffedd5" font-size="10">Kế sách Nguyễn Chích</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Tiến vào đất Nghệ An</text>
      </g>
      <g transform="translate(470, 25)">
        <rect x="0" y="0" width="200" height="90" rx="8" fill="#c2410c" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">1426 – 1427</text>
        <text x="100" y="48" text-anchor="middle" fill="#ffedd5" font-size="10">Tốt Động – Chúc Động</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Chi Lăng – Xương Giang</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Giai đoạn mở đầu và bước ngoặt chiến lược tiến vào Nghệ An',
        content: `• Năm 1416, Lê Lợi cùng 18 người đồng chí tổ chức <strong>Hội thề Lũng Nhai</strong> nguyện đồng lòng cứu nước. Mùa xuân 1418, cuộc khởi nghĩa bùng nổ ở căn cứ Lam Sơn (Thanh Hóa).<br>• Giai đoạn đầu (1418–1423), nghĩa quân gặp muôn vàn gian khổ, nhiều lần bị bao vây phải rút lên núi Chí Linh chịu đói rét. Nhờ sự cưu mang của nhân dân và gương hy sinh của Lê Lai liều mình cứu chúa, lực lượng được bảo toàn.<br>• Cuối năm 1424, theo kế sách sắc bén của tướng <strong>Nguyễn Chích</strong>, nghĩa quân rời vùng núi Thanh Hóa tiến vào giải phóng Nghệ An, sau đó giải phóng Tân Bình, Thuận Hóa, tạo nên vùng giải phóng rộng lớn làm bàn đạp phản công.`
      },
      {
        title: '2. Toàn thắng Tốt Động – Chúc Động và Chi Lăng – Xương Giang',
        content: `• <strong>Trận Tốt Động – Chúc Động (1426):</strong> Quân ta mai phục tiêu diệt hơn 5 vạn quân của Vương Thông, làm thay đổi hoàn toàn cục diện chiến tranh.<br>• <strong>Chiến dịch Chi Lăng – Xương Giang (1427):</strong> Đỉnh cao nghệ thuật quân sự. Tướng giặc Liễu Thăng dẫn 10 vạn viện binh bị chém đầu tại ải Chi Lăng; đạo viện binh của Mộc Thạnh hoảng loạn tháo chạy.<br>• Ngày 10–12–1427, Vương Thông buộc phải dự <strong>Hội thề Đông Quan</strong>, cam kết rút toàn bộ quân về nước. Lê Lợi cấp thuyền ngựa, lương thực tiễn quân giặc về nước thể hiện tinh thần nhân đạo sáng ngời.`
      }
    ],
    quiz: [
      {
        question: 'Ai là người đề xuất kế sách chiến lược dời địa bàn hoạt động từ vùng núi Thanh Hóa hiểm trở vào Nghệ An năm 1424?',
        options: ['Nguyễn Trãi', 'Trần Nguyên Hãn', 'Nguyễn Chích', 'Lê Sát'],
        answer: 2,
        explanation: 'Nguyễn Chích đã hiến kế chuyển quân vào Nghệ An - nơi đất rộng người đông, hiểm yếu để làm chỗ đứng chân mở rộng căn cứ.'
      }
    ],
    checklist: [
      'Nắm vững 3 giai đoạn: Khởi đầu Lam Sơn (1418-1423), Tiến vào Nghệ An (1424-1425), Giải phóng đất nước (1426-1427)',
      'Phân tích ý nghĩa hai chiến thắng quyết định: Tốt Động - Chúc Động và Chi Lăng - Xương Giang',
      'Hiểu rõ tinh thần nhân đạo qua Hội thề Đông Quan và Bình Ngô đại cáo'
    ]
  },
  {
    id: 'ls-bai-17',
    num: 17,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 4. Việt Nam từ đầu thế kỉ X đến đầu thế kỉ XVI',
    title: 'Bài 17. Đại Việt thời Lê sơ (1428–1527)',
    pages: 'tr. 98–103',
    objective: 'Nêu sự thành lập nhà Lê sơ; trình bày cải cách hành chính đỉnh cao của vua Lê Thánh Tông; nội dung bộ luật Hồng Đức; thành tựu kinh tế, giáo dục và Hội Tao Đàn.',
    mindmap: '1428: Lê Lợi lên ngôi lập triều Lê sơ → Thời vua Lê Thánh Tông (Hồng Đức) đạt đỉnh cao cực thịnh: Chia nước thành 13 đạo thừa tuyên + Luật Hồng Đức (Quốc triều hình luật) + Phép quân điền + Hội Tao Đàn & Đại Việt sử kí toàn thư.',
    svg: `<svg viewBox="0 0 700 150" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="130" rx="16" fill="#fdf4ff" stroke="#c026d3"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#c026d3" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">CẢI CÁCH HÀNH CHÍNH</text>
        <text x="100" y="48" text-anchor="middle" fill="#fae8ff" font-size="10">Bãi bỏ các chức quan trung gian</text>
        <text x="100" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Chia nước thành 13 đạo thừa tuyên</text>
      </g>
      <g transform="translate(250, 25)">
        <rect x="0" y="0" width="200" height="85" rx="8" fill="#a21caf" />
        <text x="100" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">LUẬT HỒNG ĐỨC</text>
        <text x="100" y="48" text-anchor="middle" fill="#fae8ff" font-size="10">Bộ luật hoàn chỉnh nhất</text>
        <text x="100" y="68" text-anchor="middle" fill="#fae8ff" font-size="10">Bảo vệ chủ quyền & quyền phụ nữ</text>
      </g>
      <g transform="translate(470, 25)">
        <rect x="0" y="0" width="190" height="85" rx="8" fill="#86198f" />
        <text x="95" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">VĂN HÓA & HỘI TAO ĐÀN</text>
        <text x="95" y="48" text-anchor="middle" fill="#fae8ff" font-size="10">Bia tiến sĩ Văn Miếu</text>
        <text x="95" y="68" text-anchor="middle" fill="#fef08a" font-weight="bold" font-size="10">Đại Việt sử kí toàn thư</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Cải cách hành chính và pháp luật thời Lê Thánh Tông',
        content: `• <strong>Tổ chức bộ máy nhà nước:</strong> Dưới thời vua <strong>Lê Thánh Tông (1460–1497)</strong>, chế độ quân chủ chuyên chế tập quyền đạt đỉnh cao thịnh vượng. Nhà vua bãi bỏ các chức vụ quyền thần lấn át vua (tướng quốc, đại tổng quản); trực tiếp điều hành Sáu bộ (Lại, Hộ, Lễ, Binh, Hình, Công). Cả nước được chia lại thành <strong>13 đạo thừa tuyên</strong>.<br>• <strong>Luật pháp:</strong> Ban hành bộ <strong>Quốc triều hình luật (Luật Hồng Đức)</strong> - bộ luật tiến bộ, hoàn chỉnh nhất thời phong kiến Việt Nam, có những điều khoản khẳng định chủ quyền biên giới quốc gia và bảo vệ quyền lợi tài sản của phụ nữ.`
      },
      {
        title: '2. Kinh tế, khoa cử và thành tựu văn hóa đỉnh cao',
        content: `• <strong>Kinh tế:</strong> Thực hiện <em>phép quân điền</em> chia ruộng công làng xã; đặt quan Hà đê sứ chăm lo hệ thống đê điều; các làng nghề thủ công phát triển mạnh (gốm Bát Tràng, đúc đồng Đại Bái).<br>• <strong>Giáo dục khoa cử:</strong> Nho giáo chiếm vị trí độc tôn. Dựng <em>bia tiến sĩ</em> tại Văn Miếu (khởi xướng năm 1484) để vinh danh người đỗ đại khoa: <em>"Hiền tài là nguyên khí của quốc gia"</em>.<br>• <strong>Văn học & Sử học:</strong> Vua Lê Thánh Tông sáng lập <strong>Hội Tao Đàn</strong> gồm 28 vị đại thần (Tao Đàn nhị thập bát tú). Sử học có bộ <strong>Đại Việt sử kí toàn thư</strong> của Ngô Sĩ Liên; toán học có Lương Thế Vinh.`
      }
    ],
    quiz: [
      {
        question: 'Dưới thời vua Lê Thánh Tông, cả nước Đại Việt được tổ chức chia thành bao nhiêu đạo thừa tuyên?',
        options: ['10 đạo', '12 đạo', '13 đạo', '24 lộ'],
        answer: 2,
        explanation: 'Vua Lê Thánh Tông đã thực hiện cải cách hành chính sâu rộng, chia cả nước thành 13 đạo thừa tuyên.'
      }
    ],
    checklist: [
      'Nắm rõ nội dung cải cách bộ máy nhà nước 13 đạo thừa tuyên của Lê Thánh Tông',
      'Hiểu giá trị tiến bộ của bộ Luật Hồng Đức',
      'Biết ý nghĩa câu nói "Hiền tài là nguyên khí của quốc gia" gắn với bia tiến sĩ Văn Miếu'
    ]
  },
  {
    id: 'ls-bai-18',
    num: 18,
    branch: 'Lịch sử',
    branchTag: 'Lịch sử',
    branchColor: 'amber',
    chapter: 'Chương 4. Việt Nam từ đầu thế kỉ X đến đầu thế kỉ XVI',
    title: 'Bài 18. Vương quốc Chăm-pa và vùng đất Nam Bộ từ đầu thế kỉ X đến đầu thế kỉ XVI',
    pages: 'tr. 104–109',
    objective: 'Nêu sự phát triển của Vương quốc Chăm-pa (dời đô về Vijaya - Bình Định); trình bày văn hóa tháp Chăm; khái quát tình hình kinh tế - xã hội vùng đất Nam Bộ thời kì này.',
    mindmap: 'Vương quốc Chăm-pa (Duyên hải miền Trung) → Cuối TK X: Chuyển trung tâm về Vijaya (Bình Định) → Văn hóa: Tháp Chăm bằng gạch nung độc đáo, nghệ thuật điêu khắc sa thạch → Vùng đất Nam Bộ (hạ lưu Mê Công) → Khai phá tự nhiên, đánh bắt thủy sản, giao lưu văn hóa đa dạng.',
    svg: `<svg viewBox="0 0 700 150" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="130" rx="16" fill="#fefce8" stroke="#eab308"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="300" height="85" rx="8" fill="#ca8a04" />
        <text x="150" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">VƯƠNG QUỐC CHĂM-PA</text>
        <text x="150" y="48" text-anchor="middle" fill="#fef9c3" font-size="10">• Trung tâm chính trị Vijaya (Đồ Bàn - Bình Định)</text>
        <text x="150" y="68" text-anchor="middle" fill="#fef9c3" font-size="10">• Tháp gạch nung, tượng vũ nữ Apsara</text>
      </g>
      <g transform="translate(360, 25)">
        <rect x="0" y="0" width="310" height="85" rx="8" fill="#a16207" />
        <text x="155" y="25" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">VÙNG ĐẤT NAM BỘ</text>
        <text x="155" y="48" text-anchor="middle" fill="#fef9c3" font-size="10">• Hạ lưu sông Mê Công, rừng ngập mặn</text>
        <text x="155" y="68" text-anchor="middle" fill="#fef9c3" font-size="10">• Khai thác lúa, thủy sản, giao lưu văn hóa phong phú</text>
      </g>
    </svg>`,
    sections: [
      {
        title: '1. Vương quốc Chăm-pa từ đầu thế kỉ X đến đầu thế kỉ XVI',
        content: `• <strong>Chính trị & Kinh tế:</strong> Từ cuối thế kỉ X, trung tâm chính trị của Chăm-pa chuyển từ Quảng Nam về phía nam tới <strong>Vijaya (thành Đồ Bàn, Bình Định ngày nay)</strong>. Nông nghiệp lúa nước, làm gốm, dệt vải và hoạt động buôn bán đường biển qua các thương cảng diễn ra sôi nổi.<br>• <strong>Văn hóa & Kiến trúc:</strong> Đậm nét ảnh hưởng của Hin-đu giáo và Phật giáo. Kiến trúc <em>tháp Chăm</em> xây bằng gạch nung kết dính không lộ mạch vữa (tháp Dương Long, tháp Cánh Tiên); nghệ thuật điêu khắc sa thạch tinh xảo miêu tả các vị thần, vũ nữ Apsara, tượng chim thần Garuda.`
      },
      {
        title: '2. Vùng đất Nam Bộ từ đầu thế kỉ X đến đầu thế kỉ XVI',
        content: `• Vùng đất Nam Bộ thời kì này nằm ở hạ lưu sông Mê Công với hệ thống kênh rạch chằng chịt, đồng trũng phèn mặn và rừng ngập mặn bao phủ. Dân cư thời kì này còn thưa thớt.<br>• Cư dân sinh sống chủ yếu bằng nghề trồng lúa nước, đánh bắt thủy hải sản, săn bắt lâm sản quý và trao đổi hàng hóa ven các dòng sông lớn.<br>• Có sự cộng cư, giao lưu văn hóa lâu đời giữa các cộng đồng cư dân bản địa, tạo tiền đề quan trọng cho quá trình mở cõi và phát triển trù phú của vùng đồng bằng Nam Bộ về sau.`
      }
    ],
    quiz: [
      {
        question: 'Từ cuối thế kỉ X, trung tâm chính trị của Vương quốc Chăm-pa được chuyển về địa danh Vijaya thuộc tỉnh thành nào ngày nay của Việt Nam?',
        options: ['Quảng Nam', 'Bình Định', 'Ninh Thuận', 'Khánh Hòa'],
        answer: 1,
        explanation: 'Vijaya (kinh đô Đồ Bàn) của Chăm-pa tọa lạc tại địa phận tỉnh Bình Định ngày nay.'
      }
    ],
    checklist: [
      'Xác định được kinh đô Vijaya của Chăm-pa tại Bình Định',
      'Nêu đặc điểm kiến trúc tháp Chăm và điêu khắc truyền thống',
      'Khái quát điều kiện tự nhiên và phương thức sinh kế của cư dân vùng đất Nam Bộ'
    ]
  }
];
