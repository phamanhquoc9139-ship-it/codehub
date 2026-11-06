// Dữ liệu 10 bài học Giáo Dục Công Dân 8 - SGK Kết Nối Tri Thức Với Cuộc Sống
// Bao gồm: 4 mạch kiến thức, 10 bài học, Sơ đồ SVG đầu bài, Hình minh họa SVG từng nội dung, 4 câu hỏi trắc nghiệm/bài

const machData = [
  {
    id: "dao-duc",
    name: "Giáo dục đạo đức",
    badge: "Đạo đức",
    color: "blue",
    lessons: "Bài 1 – 5",
    desc: "Truyền thống dân tộc; đa dạng dân tộc; lao động cần cù, sáng tạo; bảo vệ lẽ phải; bảo vệ môi trường và tài nguyên"
  },
  {
    id: "ky-nang",
    name: "Giáo dục kĩ năng sống",
    badge: "Kĩ năng sống",
    color: "emerald",
    lessons: "Bài 6 – 7",
    desc: "Xác định mục tiêu cá nhân theo tiêu chí SMART; phòng ngừa và ứng phó bạo lực gia đình"
  },
  {
    id: "kinh-te",
    name: "Giáo dục kinh tế",
    badge: "Kinh tế",
    color: "amber",
    lessons: "Bài 8",
    desc: "Lập kế hoạch chi tiêu, phân biệt nhu cầu thiết yếu và mong muốn, quản lí tài chính cá nhân"
  },
  {
    id: "phap-luat",
    name: "Giáo dục pháp luật",
    badge: "Pháp luật",
    color: "rose",
    lessons: "Bài 9 – 10",
    desc: "Phòng ngừa tai nạn vũ khí, cháy nổ, chất độc hại; Quyền và nghĩa vụ lao động của công dân"
  }
];

const lessonsData = [
  // ==================== BÀI 1 ====================
  {
    id: 1,
    machId: "dao-duc",
    machName: "Mạch 1: Giáo dục đạo đức",
    title: "Bài 1. Tự hào về truyền thống dân tộc Việt Nam",
    desc: "Khái niệm, biểu hiện của truyền thống dân tộc; ý nghĩa lịch sử - thời đại và trách nhiệm giữ gìn, phát huy của học sinh.",
    objectives: [
      "Nêu được khái niệm và các truyền thống tốt đẹp tiêu biểu của dân tộc Việt Nam.",
      "Hiểu được ý nghĩa to lớn của truyền thống dân tộc đối với cá nhân, cộng đồng và sự phát triển đất nước.",
      "Biết tự hào, trân trọng, có hành vi giữ gìn, phát huy truyền thống và phê phán các biểu hiện sai lệch, hủ tục lạc hậu."
    ],
    // SVG 1: Mindmap tổng quan bài học
    svgHeader: `
      <svg viewBox="0 0 750 140" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="110" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#1d4ed8">HỆ GIÁ TRỊ TRUYỀN THỐNG DÂN TỘC VIỆT NAM</text>
        <g transform="translate(35, 60)">
          <rect width="150" height="50" rx="8" fill="#fff" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="75" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">1. YÊU NƯỚC - BẤT KHUẤT</text>
          <text x="75" y="40" text-anchor="middle" font-size="9" fill="#64748b">Chống ngoại xâm, chủ quyền</text>
        </g>
        <g transform="translate(205, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">2. ĐOÀN KẾT - NHÂN NGHĨA</text>
          <text x="77" y="40" text-anchor="middle" font-size="9" fill="#64748b">Tương thân tương ái, lá lành đùm lá rách</text>
        </g>
        <g transform="translate(380, 60)">
          <rect width="155" height="50" rx="8" fill="#fff" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">3. CẦN CÙ - SÁNG TẠO</text>
          <text x="77" y="40" text-anchor="middle" font-size="9" fill="#64748b">Vượt khó, bàn tay vàng, làng nghề</text>
        </g>
        <g transform="translate(555, 60)">
          <rect width="160" height="50" rx="8" fill="#fff" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="80" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">4. TÔN SƯ TRỌNG ĐẠO</text>
          <text x="80" y="40" text-anchor="middle" font-size="9" fill="#64748b">Uống nước nhớ nguồn, hiếu học</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-flag text-blue-600"></i>
            1. Khái niệm và những truyền thống tiêu biểu của dân tộc
          </h4>
          <p>• <strong>Truyền thống dân tộc Việt Nam:</strong> Là những giá trị vật chất và tinh thần tốt đẹp, bền vững được hình thành trong suốt chiều dài lịch sử dựng nước và giữ nước, được truyền từ đời này qua đời khác, lưu truyền trong phong tục, tập quán, lối sống và cách ứng xử của con người Việt Nam.</p>
          <p class="mt-1">• <strong>Các truyền thống nổi bật:</strong> Lòng yêu nước nồng nàn; tinh thần đoàn kết đại nghĩa; nhân nghĩa, khoan dung; cần cù, vượt khó trong lao động; hiếu học, tôn sư trọng đạo; đạo lí “Uống nước nhớ nguồn”, hiếu thảo với cha mẹ tổ tiên.</p>
        </div>

        <!-- HÌNH MINH HỌA NỘI DUNG 1.1: Cây cội nguồn truyền thống -->
        <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-tree"></i> Hình 1.1: Sơ đồ Cội nguồn và Sự lan tỏa của các giá trị truyền thống dân tộc
          </div>
          <svg viewBox="0 0 540 145" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
            <!-- Cội nguồn lịch sử -->
            <rect x="180" y="10" width="180" height="30" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.8"/>
            <text x="270" y="30" text-anchor="middle" font-size="11" font-weight="900" fill="#f8fafc">NGUỒN CỘI LỊCH SỬ DÂN TỘC</text>
            <!-- 3 Nhánh lan tỏa -->
            <path d="M 220 40 L 90 65" stroke="#3b82f6" stroke-width="2"/>
            <path d="M 270 40 L 270 65" stroke="#3b82f6" stroke-width="2"/>
            <path d="M 320 40 L 450 65" stroke="#3b82f6" stroke-width="2"/>
            <!-- Nhánh 1: Tinh thần -->
            <g transform="translate(15, 65)">
              <rect width="150" height="65" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
              <text x="75" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">ĐỜI SỐNG TINH THẦN</text>
              <text x="75" y="40" text-anchor="middle" font-size="8.5" fill="#475569">Lòng yêu nước, hiếu thảo,</text>
              <text x="75" y="54" text-anchor="middle" font-size="8.5" fill="#475569">tôn sư trọng đạo, nhân ái</text>
            </g>
            <!-- Nhánh 2: Vật chất & Nghệ thuật -->
            <g transform="translate(195, 65)">
              <rect width="150" height="65" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
              <text x="75" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">DI SẢN VẬT THỂ</text>
              <text x="75" y="40" text-anchor="middle" font-size="8.5" fill="#475569">Làng nghề thủ công, kiến trúc,</text>
              <text x="75" y="54" text-anchor="middle" font-size="8.5" fill="#475569">ẩm thực, trang phục cổ truyền</text>
            </g>
            <!-- Nhánh 3: Phong tục & Lễ hội -->
            <g transform="translate(375, 65)">
              <rect width="150" height="65" rx="6" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.2"/>
              <text x="75" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b45309">PHONG TỤC TẬP QUÁN</text>
              <text x="75" y="40" text-anchor="middle" font-size="8.5" fill="#475569">Tết Nguyên Đán, Giỗ Tổ,</text>
              <text x="75" y="54" text-anchor="middle" font-size="8.5" fill="#475569">lễ hội dân gian cộng đồng</text>
            </g>
          </svg>
        </div>

        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-heart text-emerald-600"></i>
            2. Ý nghĩa và trách nhiệm của học sinh
          </h4>
          <p>• <strong>Ý nghĩa:</strong> Truyền thống là cội nguồn sức mạnh vô địch giúp dân tộc Việt Nam vượt qua mọi phong ba bão táp, đập tan mọi kẻ thù xâm lược; là hành trang quý giá để thế hệ trẻ tự tin hội nhập quốc tế mà không bị hòa tan, giữ vững bản sắc văn hóa dân tộc.</p>
          <p class="mt-1">• <strong>Trách nhiệm của học sinh:</strong> Tích cực học tập, tìm hiểu lịch sử địa phương; kính trọng thầy cô, lễ phép với ông bà cha mẹ; giữ gìn vệ sinh di tích lịch sử; kiên quyết bài trừ những hủ tục mê tín dị đoan, tệ nạn không còn phù hợp đời sống văn minh.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Giá trị tinh thần tốt đẹp nào được coi là cội nguồn sức mạnh lớn nhất giúp nhân dân Việt Nam chiến thắng giặc ngoại xâm suốt mấy ngàn năm?",
        options: ["(Recommended) Lòng yêu nước nồng nàn", "Khả năng giao thương quốc tế", "Sự phong phú về tài nguyên", "Quy mô dân số đông đúc"],
        ans: 0,
        expl: "Yêu nước là sợi chỉ đỏ xuyên suốt lịch sử dựng nước và giữ nước của dân tộc Việt Nam."
      },
      {
        q: "Hành vi nào dưới đây thể hiện sự kế thừa và phát huy truyền thống tốt đẹp của dân tộc?",
        options: ["(Recommended) Tích cực tham gia chăm sóc, dọn dẹp nghĩa trang liệt sĩ địa phương", "Chi tiền tổ chức cúng bái linh đình, mê tín dị đoan", "Bắt buộc mọi người phải sống theo hủ tục phong kiến xưa", "Từ chối học tiếng nước ngoài vì sợ mất bản sắc"],
        ans: 0,
        expl: "Chăm sóc nghĩa trang liệt sĩ là biểu hiện thiết thực của truyền thống 'Uống nước nhớ nguồn', 'Đền ơn đáp nghĩa'."
      },
      {
        q: "Việc học tập và tiếp thu tinh hoa văn hóa nhân loại cần tuân theo nguyên tắc nào sau đây?",
        options: ["(Recommended) Tiếp thu có chọn lọc, hòa nhập nhưng không hòa tan bản sắc dân tộc", "Sao chép nguyên xi mọi lối sống hiện đại từ nước ngoài", "Bài trừ tuyệt đối mọi yếu tố văn hóa từ phương Tây", "Xem văn hóa phương Tây hoàn toàn vượt trội truyền thống dân tộc"],
        ans: 0,
        expl: "Hội nhập quốc tế đòi hỏi tiếp thu có chọn lọc những tiến bộ văn minh nhưng kiên quyết giữ vững cốt cách, bản sắc dân tộc."
      },
      {
        q: "Câu ca dao tục ngữ nào sau đây phản ánh truyền thống 'Tôn sư trọng đạo'?",
        options: ["(Recommended) Không thầy đố mày làm nên", "Ăn quả nhớ kẻ trồng cây", "Lá lành đùm lá rách", "Có công mài sắt, có ngày nên kim"],
        ans: 0,
        expl: "'Không thầy đố mày làm nên' đề cao vai trò thiêng liêng của người thầy dạy dỗ tri thức và đạo làm người."
      }
    ]
  },

  // ==================== BÀI 2 ====================
  {
    id: 2,
    machId: "dao-duc",
    machName: "Mạch 1: Giáo dục đạo đức",
    title: "Bài 2. Tôn trọng sự đa dạng của các dân tộc",
    desc: "Khái niệm đa dạng văn hóa; biểu hiện của thái độ tôn trọng và ý nghĩa đối với sự bình đẳng, hòa bình, đoàn kết quốc tế.",
    objectives: [
      "Nhận biết được những biểu hiện sinh động của sự đa dạng giữa các dân tộc trên thế giới và tại Việt Nam.",
      "Hiểu được vì sao phải tôn trọng sự đa dạng về phong tục, tập quán, trang phục, tín ngưỡng của các dân tộc.",
      "Có thái độ cởi mở, không định kiến, kì thị hay phân biệt đối xử với đồng bào dân tộc thiểu số và bạn bè quốc tế."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 135" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="105" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#047857">TÔN TRỌNG SỰ ĐA DẠNG VĂN HÓA CỦA CÁC DÂN TỘC</text>
        <g transform="translate(45, 60)">
          <rect width="180" height="45" rx="8" fill="#fff" stroke="#34d399" stroke-width="1.5"/>
          <text x="90" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#065f46">1. ĐA DẠNG NGÔN NGỮ</text>
          <text x="90" y="36" text-anchor="middle" font-size="8.5" fill="#64748b">Tiếng nói, chữ viết của 54 dân tộc</text>
        </g>
        <g transform="translate(285, 60)">
          <rect width="180" height="45" rx="8" fill="#fff" stroke="#34d399" stroke-width="1.5"/>
          <text x="90" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#065f46">2. PHONG TỤC & TRANG PHỤC</text>
          <text x="90" y="36" text-anchor="middle" font-size="8.5" fill="#64748b">Thổ cẩm, nhà rông, lễ hội cồng chiêng</text>
        </g>
        <g transform="translate(525, 60)">
          <rect width="180" height="45" rx="8" fill="#fff" stroke="#34d399" stroke-width="1.5"/>
          <text x="90" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#065f46">3. HỢP TÁC BÌNH ĐẲNG</text>
          <text x="90" y="36" text-anchor="middle" font-size="8.5" fill="#64748b">Học hỏi, giao lưu không định kiến</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-earth-americas text-emerald-600"></i>
            1. Khái niệm và biểu hiện của sự đa dạng văn hóa
          </h4>
          <p>• Mỗi dân tộc trên thế giới và 54 dân tộc anh em tại Việt Nam đều có bản sắc riêng về ngôn ngữ, chữ viết, trang phục, nhà ở, ẩm thực, phong tục tập quán và lễ hội dân gian.</p>
          <p class="mt-1">• <strong>Tôn trọng sự đa dạng:</strong> Là việc thừa nhận, trân trọng nét độc đáo, sự khác biệt chính đáng của các dân tộc; không lấy nền văn hóa của mình làm thước đo duy nhất để đánh giá hay phán xét dân tộc khác.</p>
        </div>

        <!-- HÌNH MINH HỌA NỘI DUNG 2.1: Bức tranh đa sắc thái văn hóa -->
        <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-palette"></i> Hình 2.1: 4 Trụ cột thể hiện thái độ văn minh tôn trọng sự đa dạng
          </div>
          <svg viewBox="0 0 540 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(15, 12)">
              <rect width="115" height="95" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
              <text x="57" y="24" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1d4ed8">1. LẮNG NGHE</text>
              <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Chủ động tìm hiểu</text>
              <text x="57" y="58" text-anchor="middle" font-size="8" fill="#475569">từ nguồn chính thống,</text>
              <text x="57" y="72" text-anchor="middle" font-size="8" fill="#64748b">hỏi chuyện lịch sự</text>
            </g>
            <g transform="translate(145, 12)">
              <rect width="115" height="95" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
              <text x="57" y="24" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#047857">2. BÌNH ĐẲNG</text>
              <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Không kì thị màu da,</text>
              <text x="57" y="58" text-anchor="middle" font-size="8" fill="#475569">tiếng nói, trang phục</text>
              <text x="57" y="72" text-anchor="middle" font-size="8" fill="#64748b">hay nguồn gốc</text>
            </g>
            <g transform="translate(275, 12)">
              <rect width="115" height="95" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
              <text x="57" y="24" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#b45309">3. KHÔNG ÁP ĐẶT</text>
              <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Không lấy thói quen</text>
              <text x="57" y="58" text-anchor="middle" font-size="8" fill="#475569">cá nhân để chê bai</text>
              <text x="57" y="72" text-anchor="middle" font-size="8" fill="#64748b">món ăn, tập tục lạ</text>
            </g>
            <g transform="translate(405, 12)">
              <rect width="115" height="95" rx="8" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
              <text x="57" y="24" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#86198f">4. PHẢN BÁC KÌ THỊ</text>
              <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Lên tiếng trước định kiến,</text>
              <text x="57" y="58" text-anchor="middle" font-size="8" fill="#475569">bảo vệ quyền lợi của</text>
              <text x="57" y="72" text-anchor="middle" font-size="8" fill="#64748b">đồng bào thiểu số</text>
            </g>
          </svg>
        </div>

        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-handshake text-blue-600"></i>
            2. Ý nghĩa đối với khối đại đoàn kết và hòa bình thế giới
          </h4>
          <p>• Tôn trọng sự đa dạng văn hóa giúp tạo môi trường học hỏi lẫn nhau, mở rộng tầm nhìn, khơi nguồn sáng tạo mới; ngăn chặn xung đột, xây dựng một xã hội hòa bình, tiến bộ và bình đẳng giữa mọi cộng đồng.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Thái độ ứng xử nào dưới đây thể hiện sự tôn trọng sự đa dạng của các dân tộc?",
        options: ["(Recommended) Lịch sự tìm hiểu ý nghĩa bộ trang phục truyền thống của bạn người dân tộc Mông", "Chế giễu giọng nói lơ lớ của một người bạn đến từ vùng khác", "Bắt bạn bè phải từ bỏ thói quen ăn uống truyền thống của họ", "Lan truyền định kiến tiêu cực về một nhóm dân tộc thiểu số"],
        ans: 0,
        expl: "Lắng nghe và tìm hiểu nét đẹp văn hóa trang phục là biểu hiện đẹp của việc tôn trọng sự đa dạng."
      },
      {
        q: "Khi một du khách quốc tế ăn một món ăn truyền thống của Việt Nam bằng đũa còn lóng ngóng, em nên làm gì?",
        options: ["(Recommended) Nhẹ nhàng, nhiệt tình hướng dẫn bạn cách cầm đũa đúng cách", "Cười phá lên và gọi mọi người xung quanh cùng quay video", "Chê bai bạn vụng về và không biết thưởng thức ẩm thực", "Bỏ đi chỗ khác với thái độ khó chịu"],
        ans: 0,
        expl: "Sự hiếu khách, thân thiện và hướng dẫn lịch sự thể hiện lòng tự hào văn hóa và tôn trọng người khác."
      },
      {
        q: "Sự đa dạng của các dân tộc mang lại ý nghĩa to lớn nào sau đây cho nhân loại?",
        options: ["(Recommended) Làm phong phú đời sống tinh thần và tạo cơ hội hợp tác, học hỏi lẫn nhau", "Gây ra sự chia rẽ bắt buộc giữa các nền kinh tế", "Làm chậm tiến trình phát triển khoa học công nghệ", "Khiến ngôn ngữ bị biến mất hoàn toàn"],
        ans: 0,
        expl: "Mỗi nền văn hóa là một mảnh ghép rực rỡ làm nên bức tranh di sản văn hóa chung của nhân loại."
      },
      {
        q: "Hành động nào dưới đây vi phạm quyền bình đẳng và tôn trọng các dân tộc?",
        options: ["(Recommended) Phân biệt đối xử trong tuyển dụng dựa trên nguồn gốc dân tộc", "Hỗ trợ học bổng phát triển cho học sinh vùng sâu vùng xa", "Bảo tồn các ngôn ngữ và chữ viết cổ của đồng bào thiểu số", "Tổ chức ngày hội giao lưu văn hóa các dân tộc Việt Nam"],
        ans: 0,
        expl: "Phân biệt đối xử hoặc kì thị dựa trên dân tộc là hành vi vi phạm pháp luật và đạo đức xã hội."
      }
    ]
  },

  // ==================== BÀI 3 ====================
  {
    id: 3,
    machId: "dao-duc",
    machName: "Mạch 1: Giáo dục đạo đức",
    title: "Bài 3. Lao động cần cù, sáng tạo",
    desc: "Khái niệm cần cù, sáng tạo; mối quan hệ bổ trợ giữa hai yếu tố; biểu hiện trong học tập, lao động và cách rèn luyện của học sinh.",
    objectives: [
      "Nêu được khái niệm, biểu hiện của lao động cần cù và lao động sáng tạo.",
      "Giải thích được mối quan hệ mật thiết và ý nghĩa của cần cù, sáng tạo trong học tập và đời sống.",
      "Tự giác rèn luyện thói quen chăm chỉ, chủ động đổi mới phương pháp học tập, nâng cao hiệu quả công việc."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 135" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="105" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#b45309">MỐI QUAN HỆ GIỮA CẦN CÙ VÀ SÁNG TẠO TRONG LAO ĐỘNG</text>
        <g transform="translate(60, 58)">
          <rect width="260" height="48" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="130" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">CẦN CÙ (Chăm chỉ, kiên trì)</text>
          <text x="130" y="38" text-anchor="middle" font-size="8.5" fill="#64748b">Làm việc đều đặn, vượt khó, trách nhiệm</text>
        </g>
        <circle cx="375" cy="82" r="14" fill="#f59e0b"/>
        <text x="375" y="87" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">+</text>
        <g transform="translate(430, 58)">
          <rect width="260" height="48" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="130" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">SÁNG TẠO (Cải tiến, đổi mới)</text>
          <text x="130" y="38" text-anchor="middle" font-size="8.5" fill="#64748b">Tìm cách làm mới, tăng năng suất, tiết kiệm</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-hammer text-amber-600"></i>
            1. Khái niệm và mối quan hệ bổ trợ
          </h4>
          <p>• <strong>Cần cù:</strong> Là sự chăm chỉ, chịu khó, làm việc thường xuyên, kiên trì vượt qua khó khăn để hoàn thành mục tiêu nhiệm vụ đề ra.</p>
          <p class="mt-1">• <strong>Sáng tạo:</strong> Là luôn chủ động suy nghĩ, tìm tòi, phát hiện cách làm mới, cải tiến phương pháp, công cụ và quy trình để đạt năng suất, chất lượng cao hơn.</p>
          <p class="mt-1">• <strong>Mối quan hệ:</strong> Cần cù là cái gốc giúp duy trì nỗ lực và tích lũy tri thức; sáng tạo giúp công việc bứt phá, tránh lối mòn máy móc rập khuôn. Thiếu cần cù thì ý tưởng chỉ là viển vông; thiếu sáng tạo thì công việc tốn sức mà ít hiệu quả.</p>
        </div>

        <!-- HÌNH MINH HỌA NỘI DUNG 3.1: Vòng lặp cải tiến Kaizen trong học tập -->
        <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div class="text-[11px] font-bold text-amber-600 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-arrows-spin"></i> Hình 3.1: Chu trình 4 bước rèn luyện Cần cù kết hợp Sáng tạo của học sinh
          </div>
          <svg viewBox="0 0 540 100" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 15)">
              <rect width="115" height="70" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
              <text x="57" y="26" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1d4ed8">1. LẬP KẾ HOẠCH</text>
              <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Mục tiêu rõ ràng,</text>
              <text x="57" y="58" text-anchor="middle" font-size="8" fill="#475569">phân chia thời gian</text>
            </g>
            <path d="M 130 50 L 145 50" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(150, 15)">
              <rect width="115" height="70" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
              <text x="57" y="26" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#b45309">2. KIÊN TRÌ LÀM</text>
              <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Không trì hoãn,</text>
              <text x="57" y="58" text-anchor="middle" font-size="8" fill="#475569">vượt qua nản chí</text>
            </g>
            <path d="M 270 50 L 285 50" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(290, 15)">
              <rect width="115" height="70" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
              <text x="57" y="26" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#047857">3. ĐỔI MỚI CÁCH LÀM</text>
              <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Sơ đồ tư duy, flashcard,</text>
              <text x="57" y="58" text-anchor="middle" font-size="8" fill="#475569">tối ưu hóa quy trình</text>
            </g>
            <path d="M 410 50 L 425 50" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(430, 15)">
              <rect width="105" height="70" rx="8" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
              <text x="52" y="26" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#86198f">4. TỔNG KẾT RÚT KN</text>
              <text x="52" y="44" text-anchor="middle" font-size="8" fill="#475569">Đánh giá hiệu quả,</text>
              <text x="52" y="58" text-anchor="middle" font-size="8" fill="#475569">cải tiến tiếp tục</text>
            </g>
          </svg>
        </div>

        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap text-blue-600"></i>
            2. Biểu hiện cụ thể và cách rèn luyện của học sinh
          </h4>
          <p>• Trong học tập: Tự giác làm bài tập về nhà; chủ động đọc trước bài mới; biết tóm tắt kiến thức bằng sơ đồ tư duy; tìm nhiều cách giải khác nhau cho một bài toán; không học vẹt, không sao chép bài của bạn.</p>
          <p class="mt-1">• Trong lao động việc nhà: Giúp đỡ gia đình quét dọn ngăn nắp; tìm cách sắp xếp đồ dùng thông minh gọn gàng, tiết kiệm diện tích.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Hành động nào dưới đây thể hiện sự kết hợp hài hòa giữa cần cù và sáng tạo trong học tập?",
        options: ["(Recommended) Chăm chỉ giải bài tập hằng ngày và tự đúc kết công thức tính nhanh bằng sơ đồ tư duy", "Chỉ chăm chăm học vẹt thuộc lòng từng câu chữ trong sách giáo khoa", "Chỉ thích nghĩ ra mẹo vặt đi thi mà không chịu làm bài tập rèn luyện", "Sao chép nguyên văn bài làm trên mạng để nộp cho thầy cô"],
        ans: 0,
        expl: "Cần cù làm bài kết hợp với sáng tạo đúc kết sơ đồ tư duy giúp ghi nhớ sâu và đạt kết quả vượt trội."
      },
      {
        q: "Biểu hiện nào sau đây đi ngược lại với tinh thần sáng tạo trong lao động?",
        options: ["(Recommended) Luôn làm việc theo lối mòn cũ kĩ, sợ thay đổi và ngại áp dụng công nghệ mới", "Chủ động đề xuất phương án cải tiến quy trình đóng gói sản phẩm", "Tận dụng phế liệu để chế tạo ra mô hình đồ chơi khoa học", "Tìm tòi phần mềm học tập mới giúp quản lí thời gian biểu"],
        ans: 0,
        expl: "Ngại đổi mới, bảo thủ và ỷ lại là rào cản lớn nhất của sự sáng tạo."
      },
      {
        q: "Câu thành ngữ, tục ngữ nào dưới đây ca ngợi tinh thần cần cù, kiên trì trong lao động?",
        options: ["(Recommended) Có công mài sắt, có ngày nên kim", "Há miệng chờ sung", "Ăn cắp quen tay, ngủ ngày quen mắt", "Đủng đỉnh như chú lái đò"],
        ans: 0,
        expl: "'Có công mài sắt, có ngày nên kim' khẳng định sức mạnh của lòng kiên trì, chịu khó rèn luyện sẽ gặt hái thành công."
      },
      {
        q: "Khi gặp một bài tập hóc búa chưa tìm ra lời giải, học sinh có tinh thần cần cù và sáng tạo sẽ:",
        options: ["(Recommended) Kiên trì suy nghĩ, tra cứu tài liệu, trao đổi với thầy cô và thử nhiều hướng tiếp cận khác nhau", "Lên mạng chép đáp án ngay lập tức để hoàn thành đối phó", "Bỏ qua không làm vì cho rằng đề quá khó", "Nhờ bạn thân làm hộ"],
        ans: 0,
        expl: "Không nản chí, kiên trì tìm tòi nhiều phương pháp giải mới là bản chất của cần cù và sáng tạo."
      }
    ]
  },

  // ==================== BÀI 4 ====================
  {
    id: 4,
    machId: "dao-duc",
    machName: "Mạch 1: Giáo dục đạo đức",
    title: "Bài 4. Bảo vệ lẽ phải",
    desc: "Khái niệm lẽ phải và bảo vệ lẽ phải; ý nghĩa đối với công bằng xã hội; phương pháp bảo vệ lẽ phải văn minh, an toàn trong học đường.",
    objectives: [
      "Hiểu được thế nào là lẽ phải và thế nào là người biết bảo vệ lẽ phải.",
      "Nhận thức được ý nghĩa của việc tôn trọng sự thật, giữ gìn kỉ cương và lẽ công bằng trong cuộc sống.",
      "Biết ủng hộ điều đúng, dám lên tiếng phản đối điều sai trái bằng thái độ văn minh, đúng mực và đảm bảo an toàn."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 135" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="105" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#1d4ed8">BẢO VỆ LẼ PHẢI - CƠ SỞ CỦA CÔNG BẰNG VÀ VĂN MINH HỌC ĐƯỜNG</text>
        <g transform="translate(60, 58)">
          <rect width="270" height="48" rx="8" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="135" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">LẼ PHẢI LÀ GÌ?</text>
          <text x="135" y="38" text-anchor="middle" font-size="8.5" fill="#64748b">Điều đúng đắn, phù hợp sự thật, đạo lí & luật pháp</text>
        </g>
        <g transform="translate(420, 58)">
          <rect width="270" height="48" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
          <text x="135" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">HÀNH ĐỘNG BẢO VỆ</text>
          <text x="135" y="38" text-anchor="middle" font-size="8.5" fill="#64748b">Ủng hộ điều đúng, phê phán điều sai một cách văn minh</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-scale-balanced text-blue-600"></i>
            1. Khái niệm và biểu hiện của việc bảo vệ lẽ phải
          </h4>
          <p>• <strong>Lẽ phải:</strong> Là những điều được coi là đúng đắn, phù hợp với chân lí, đạo đức, chuẩn mực xã hội và lợi ích chung của cộng đồng.</p>
          <p class="mt-1">• <strong>Bảo vệ lẽ phải:</strong> Là việc công nhận, ủng hộ, tuân theo và bảo vệ những điều đúng đắn; biết điều chỉnh suy nghĩ, hành vi của mình theo lẽ phải; kiên quyết không đồng tình, phê phán và đấu tranh loại bỏ những hành vi sai trái, gian lận, bất công.</p>
        </div>

        <!-- HÌNH MINH HỌA NỘI DUNG 4.1: Cán cân công lí lẽ phải -->
        <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-scale-unbalanced"></i> Hình 4.1: 4 Bước giải quyết tình huống bảo vệ lẽ phải an toàn trong trường học
          </div>
          <svg viewBox="0 0 540 100" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 15)">
              <rect width="115" height="70" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
              <text x="57" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">1. XÁC MINH SỰ THẬT</text>
              <text x="57" y="42" text-anchor="middle" font-size="8" fill="#475569">Lắng nghe đa chiều,</text>
              <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">không vội quy chụp</text>
            </g>
            <path d="M 130 50 L 145 50" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(150, 15)">
              <rect width="115" height="70" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
              <text x="57" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">2. BÀY TỎ CHÍNH KIẾN</text>
              <text x="57" y="42" text-anchor="middle" font-size="8" fill="#475569">Bằng lí lẽ ôn hòa,</text>
              <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">tôn trọng bạn bè</text>
            </g>
            <path d="M 270 50 L 285 50" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(290, 15)">
              <rect width="115" height="70" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
              <text x="57" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">3. BẢO VỆ NGƯỜI YẾU</text>
              <text x="57" y="42" text-anchor="middle" font-size="8" fill="#475569">Ủng hộ người làm đúng,</text>
              <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">không để bị cô lập</text>
            </g>
            <path d="M 410 50 L 425 50" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(430, 15)">
              <rect width="105" height="70" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
              <text x="52" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#991b1b">4. BÁO THẦY CÔ/BGH</text>
              <text x="52" y="42" text-anchor="middle" font-size="8" fill="#475569">Khi có nguy cơ bạo lực,</text>
              <text x="52" y="56" text-anchor="middle" font-size="8" fill="#475569">bảo toàn sự an toàn</text>
            </g>
          </svg>
        </div>

        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-shield text-emerald-600"></i>
            2. Ý nghĩa và hành động ứng xử thông minh
          </h4>
          <p>• Bảo vệ lẽ phải giúp củng cố niềm tin, lòng nhân ái, duy trì trật tự kỉ cương và sự công bằng trong tập thể; giúp con người sống thanh thản, tự tin và được mọi người tôn trọng.</p>
          <p class="mt-1">• <strong>Nguyên tắc vàng:</strong> Bảo vệ lẽ phải không đồng nghĩa với nóng nảy cãi vã hay sử dụng bạo lực. Cần dùng chứng cứ xác thực, lời lẽ hòa nhã, và biết tìm kiếm sự hỗ trợ từ người lớn đáng tin cậy khi có nguy cơ mất an toàn.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Hành vi nào dưới đây là biểu hiện của người biết bảo vệ lẽ phải?",
        options: ["(Recommended) Dám lên tiếng bênh vực một bạn bị vu oan trước tập thể lớp", "Thấy bạn thân quay cóp bài kiểm tra nhưng im lặng lờ đi", "Gió chiều nào che chiều ấy để lấy lòng mọi người", "Chia sẻ thông tin bêu xấu người khác trên mạng khi chưa xác minh sự thật"],
        ans: 0,
        expl: "Bênh vực người bị đối xử bất công dựa trên sự thật chính là dũng cảm bảo vệ lẽ phải."
      },
      {
        q: "Khi chứng kiến một nhóm bạn đang có hành vi bắt nạt, đe dọa trấn lột tiền của một bạn học cùng trường, em nên xử trí như thế nào?",
        options: ["(Recommended) Lập tức báo cho thầy cô giám thị, giáo viên chủ nhiệm hoặc bảo vệ nhà trường can thiệp", "Một mình xông vào đánh nhau với nhóm bạn đó để giải cứu", "Đứng lại cổ vũ và dùng điện thoại quay video đăng lên mạng xã hội", "Bỏ đi và coi như không liên quan đến mình"],
        ans: 0,
        expl: "Báo ngay cho thầy cô/người có trách nhiệm là cách bảo vệ bạn an toàn, thông minh và hiệu quả nhất."
      },
      {
        q: "Người luôn ủng hộ điều đúng, phản đối điều sai trái một cách công tâm, không vì quan hệ cá nhân được gọi là người:",
        options: ["(Recommended) Biết bảo vệ lẽ phải", "Bảo thủ, cố chấp", "Bao đồng, thích can thiệp", "Nhu nhược, thiếu quyết đoán"],
        ans: 0,
        expl: "Tôn trọng sự thật, không thiên vị bè phái là phẩm chất cốt lõi của người bảo vệ lẽ phải."
      },
      {
        q: "Ý nghĩa to lớn nhất của việc bảo vệ lẽ phải trong xã hội là gì?",
        options: ["(Recommended) Góp phần bảo vệ công lí, giữ gìn trật tự kỉ cương và quyền lợi chính đáng của mọi người", "Giúp bản thân nhanh chóng trở nên nổi tiếng trên mạng", "Để mọi người phải sợ và phục tùng ý muốn của mình", "Làm cho không ai dám tranh luận hay phản biện"],
        ans: 0,
        expl: "Bảo vệ lẽ phải duy trì nền tảng đạo đức, công lí và văn minh xã hội."
      }
    ]
  },

  // ==================== BÀI 5 ====================
  {
    id: 5,
    machId: "dao-duc",
    machName: "Mạch 1: Giáo dục đạo đức",
    title: "Bài 5. Bảo vệ môi trường và tài nguyên thiên nhiên",
    desc: "Khái niệm môi trường, tài nguyên; vai trò đối với sự sống; thực trạng suy thoái và trách nhiệm hành động xanh của công dân.",
    objectives: [
      "Nêu được khái niệm môi trường, tài nguyên thiên nhiên và phân loại tài nguyên tái tạo/không tái tạo.",
      "Phân tích được vai trò quyết định của môi trường và nguyên nhân, hậu quả của biến đổi khí hậu, ô nhiễm.",
      "Thực hiện các hành vi bảo vệ môi trường hằng ngày (tiết kiệm điện nước, giảm đồ nhựa dùng 1 lần, phân loại rác)."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 135" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="105" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#047857">BẢO VỆ MÔI TRƯỜNG VÀ TÀI NGUYÊN THIÊN NHIÊN</text>
        <g transform="translate(60, 58)">
          <rect width="280" height="48" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
          <text x="140" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#065f46">MÔI TRƯỜNG SỐNG</text>
          <text x="140" y="38" text-anchor="middle" font-size="8.5" fill="#64748b">Không khí, đất, nước, hệ sinh thái tự nhiên & xã hội</text>
        </g>
        <g transform="translate(410, 58)">
          <rect width="280" height="48" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
          <text x="140" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#065f46">TÀI NGUYÊN THIÊN NHIÊN</text>
          <text x="140" y="38" text-anchor="middle" font-size="8.5" fill="#64748b">Rừng, khoáng sản, thủy hải sản, năng lượng mặt trời/gió</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-leaf text-emerald-600"></i>
            1. Khái niệm môi trường và tài nguyên thiên nhiên
          </h4>
          <p>• <strong>Môi trường:</strong> Là hệ thống các yếu tố tự nhiên và nhân tạo bao quanh con người, ảnh hưởng trực tiếp đến đời sống, sự tồn tại và phát triển của con người và sinh vật.</p>
          <p class="mt-1">• <strong>Tài nguyên thiên nhiên:</strong> Là các nguồn của cải vật chất có sẵn trong tự nhiên mà con người có thể khai thác, sử dụng cho sản xuất và sinh hoạt (đất, nước, rừng, khoáng sản, sinh vật...).</p>
          <p class="mt-1">• Tài nguyên gồm có: Tài nguyên tái tạo (rừng, nước...) và Tài nguyên không tái tạo (than đá, dầu mỏ, quặng kim loại - có hạn, sẽ cạn kiệt nếu khai thác lãng phí).</p>
        </div>

        <!-- HÌNH MINH HỌA NỘI DUNG 5.1: Mô hình 3R và lối sống xanh -->
        <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-recycle"></i> Hình 5.1: Nguyên tắc 3R trong quản lí rác thải và bảo vệ tài nguyên
          </div>
          <svg viewBox="0 0 540 100" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(25, 15)">
              <rect width="145" height="70" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
              <text x="72" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">REDUCE (Giảm thiểu)</text>
              <text x="72" y="46" text-anchor="middle" font-size="8.5" fill="#475569">Hạn chế túi nilon,</text>
              <text x="72" y="58" text-anchor="middle" font-size="8.5" fill="#475569">tiết kiệm điện nước</text>
            </g>
            <path d="M 185 50 L 205 50" stroke="#10b981" stroke-width="2.5"/>
            <g transform="translate(210, 15)">
              <rect width="145" height="70" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
              <text x="72" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">REUSE (Tái sử dụng)</text>
              <text x="72" y="46" text-anchor="middle" font-size="8.5" fill="#475569">Dùng chai thủy tinh,</text>
              <text x="72" y="58" text-anchor="middle" font-size="8.5" fill="#475569">túi vải đi chợ nhiều lần</text>
            </g>
            <path d="M 370 50 L 390 50" stroke="#3b82f6" stroke-width="2.5"/>
            <g transform="translate(395, 15)">
              <rect width="130" height="70" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
              <text x="65" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">RECYCLE (Tái chế)</text>
              <text x="65" y="46" text-anchor="middle" font-size="8.5" fill="#475569">Phân loại giấy vụn,</text>
              <text x="65" y="58" text-anchor="middle" font-size="8.5" fill="#475569">nhựa, kim loại bán ve chai</text>
            </g>
          </svg>
        </div>

        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-seedling text-blue-600"></i>
            2. Trách nhiệm hành động cụ thể của công dân học sinh
          </h4>
          <p>• Phân loại rác tại nguồn (rác hữu cơ, rác tái chế, rác thải nguy hại như pin); tắt đèn quạt khi ra khỏi phòng học; tham gia trồng cây xanh gây rừng; không vứt rác, xả nước bẩn ra kênh rạch.</p>
          <p class="mt-1">• Kiên quyết lên án các hành vi phá hoại môi trường như chặt phá rừng bừa bãi, săn bắn động vật hoang dã, xả trộm nước thải công nghiệp.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Loại tài nguyên nào dưới đây thuộc nhóm tài nguyên KHÔNG THỂ TÁI TẠO (hữu hạn)?",
        options: ["(Recommended) Dầu mỏ, than đá và quặng sắt", "Năng lượng bức xạ mặt trời", "Năng lượng gió tự nhiên", "Nguồn nước ngọt tuần hoàn"],
        ans: 0,
        expl: "Khoáng sản hóa thạch (than đá, dầu mỏ) mất hàng triệu năm hình thành nên không thể tái tạo trong đời sống con người."
      },
      {
        q: "Nguyên tắc '3R' trong bảo vệ môi trường bao gồm những từ khóa tiếng Anh nào?",
        options: ["(Recommended) Reduce (Giảm thiểu) - Reuse (Tái sử dụng) - Recycle (Tái chế)", "Read - Review - Remember", "Run - Rest - Restart", "Real - Right - Respect"],
        ans: 0,
        expl: "3R viết tắt của Reduce, Reuse và Recycle - nguyên tắc nền tảng của kinh tế tuần hoàn và bảo vệ môi trường."
      },
      {
        q: "Hành động nào dưới đây của học sinh góp phần thiết thực vào việc bảo vệ môi trường trường học?",
        options: ["(Recommended) Bỏ rác đúng nơi quy định và tắt các thiết bị điện khi tan học", "Vứt vỏ hộp sữa vào bồn hoa của lớp học", "Khắc tên, viết bậy lên thân cây xanh trong sân trường", "Để vòi nước nhà vệ sinh chảy tràn lan không khóa"],
        ans: 0,
        expl: "Tiết kiệm điện nước và giữ gìn vệ sinh chung là trách nhiệm cơ bản của mỗi học sinh."
      },
      {
        q: "Tại sao việc xả rác thải nhựa (túi nilon, chai nhựa dùng 1 lần) bừa bãi lại cực kì nguy hại cho môi trường?",
        options: ["(Recommended) Vì rác thải nhựa mất từ hàng trăm đến hàng ngàn năm mới có thể phân hủy hoàn toàn", "Vì nhựa có giá thành quá đắt đỏ", "Vì nhựa làm nước sông chảy nhanh hơn", "Vì nhựa tự biến thành kim loại nặng"],
        ans: 0,
        expl: "Nhựa phân hủy cực kì chậm, vỡ vụn thành các hạt vi nhựa gây ô nhiễm đất, nguồn nước và đe dọa sinh vật biển."
      }
    ]
  },

  // ==================== BÀI 6 ====================
  {
    id: 6,
    machId: "ky-nang",
    machName: "Mạch 2: Giáo dục kĩ năng sống",
    title: "Bài 6. Xác định mục tiêu cá nhân",
    desc: "Khái niệm, phân loại mục tiêu; nguyên tắc SMART và quy trình 6 bước lập kế hoạch hành động hiện thực hóa mục tiêu.",
    objectives: [
      "Hiểu được khái niệm, ý nghĩa sống có mục tiêu đối với sự phát triển của bản thân.",
      "Vận dụng thành thạo nguyên tắc SMART để xây dựng mục tiêu học tập, rèn luyện phù hợp khả năng.",
      "Biết thực hiện quy trình 6 bước lập kế hoạch, theo dõi tiến độ và điều chỉnh linh hoạt khi hoàn cảnh thay đổi."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 135" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="105" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#1d4ed8">XÁC ĐỊNH MỤC TIÊU CÁ NHÂN THEO NGUYÊN TẮC SMART</text>
        <g transform="translate(30, 60)">
          <rect width="130" height="45" rx="6" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="65" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">S - SPECIFIC</text>
          <text x="65" y="36" text-anchor="middle" font-size="8" fill="#64748b">Cụ thể, rõ ràng</text>
        </g>
        <g transform="translate(170, 60)">
          <rect width="130" height="45" rx="6" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="65" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">M - MEASURABLE</text>
          <text x="65" y="36" text-anchor="middle" font-size="8" fill="#64748b">Đo lường được</text>
        </g>
        <g transform="translate(310, 60)">
          <rect width="130" height="45" rx="6" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="65" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">A - ATTAINABLE</text>
          <text x="65" y="36" text-anchor="middle" font-size="8" fill="#64748b">Khả thi, đạt được</text>
        </g>
        <g transform="translate(450, 60)">
          <rect width="130" height="45" rx="6" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="65" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">R - RELEVANT</text>
          <text x="65" y="36" text-anchor="middle" font-size="8" fill="#64748b">Phù hợp thực tế</text>
        </g>
        <g transform="translate(590, 60)">
          <rect width="130" height="45" rx="6" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="65" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">T - TIME-BOUND</text>
          <text x="65" y="36" text-anchor="middle" font-size="8" fill="#64748b">Thời hạn hoàn thành</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-bullseye text-blue-600"></i>
            1. Khái niệm và tiêu chuẩn mục tiêu SMART
          </h4>
          <p>• <strong>Mục tiêu cá nhân:</strong> Là kết quả cụ thể mà một người mong muốn đạt được trong một khoảng thời gian nhất định (ngắn hạn: vài tuần, vài tháng; trung hạn: 1-2 năm; dài hạn: 3-5 năm trở lên).</p>
          <p class="mt-1">• <strong>Tiêu chuẩn SMART:</strong></p>
          <ul class="list-disc pl-5 mt-1 space-y-0.5 text-xs">
            <li><strong>S (Specific):</strong> Rõ ràng, cụ thể, không mơ hồ chung chung.</li>
            <li><strong>M (Measurable):</strong> Đo lường được bằng con số, tiêu chí định lượng.</li>
            <li><strong>A (Attainable):</strong> Có tính khả thi, vừa sức, có thể đạt được qua nỗ lực.</li>
            <li><strong>R (Relevant):</strong> Phù hợp với năng lực, sở thích và định hướng bản thân.</li>
            <li><strong>T (Time-bound):</strong> Có thời hạn chót (deadline) rõ ràng để hoàn thành.</li>
          </ul>
        </div>

        <!-- HÌNH MINH HỌA NỘI DUNG 6.1: Quy trình 6 bước -->
        <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-stairs"></i> Hình 6.1: Quy trình 6 bước xây dựng và thực hiện mục tiêu cá nhân
          </div>
          <svg viewBox="0 0 540 85" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 10)">
              <rect width="80" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
              <text x="40" y="20" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#1d4ed8">B1. Liệt kê</text>
              <text x="40" y="36" text-anchor="middle" font-size="7.5" fill="#475569">Mong muốn</text>
              <text x="40" y="48" text-anchor="middle" font-size="7.5" fill="#475569">bản thân</text>
            </g>
            <path d="M 92 40 L 98 40" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(100, 10)">
              <rect width="80" height="60" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
              <text x="40" y="20" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#047857">B2. Sắp xếp</text>
              <text x="40" y="36" text-anchor="middle" font-size="7.5" fill="#475569">Thứ tự</text>
              <text x="40" y="48" text-anchor="middle" font-size="7.5" fill="#475569">ưu tiên</text>
            </g>
            <path d="M 182 40 L 188 40" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(190, 10)">
              <rect width="80" height="60" rx="6" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.2"/>
              <text x="40" y="20" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#b45309">B3. Chuẩn hóa</text>
              <text x="40" y="36" text-anchor="middle" font-size="7.5" fill="#475569">Theo chuẩn</text>
              <text x="40" y="48" text-anchor="middle" font-size="7.5" fill="#475569">SMART</text>
            </g>
            <path d="M 272 40 L 278 40" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(280, 10)">
              <rect width="80" height="60" rx="6" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.2"/>
              <text x="40" y="20" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#86198f">B4. Lập KH</text>
              <text x="40" y="36" text-anchor="middle" font-size="7.5" fill="#475569">Chia nhỏ việc,</text>
              <text x="40" y="48" text-anchor="middle" font-size="7.5" fill="#475569">bắt tay làm</text>
            </g>
            <path d="M 362 40 L 368 40" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(370, 10)">
              <rect width="80" height="60" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.2"/>
              <text x="40" y="20" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#991b1b">B5. Theo dõi</text>
              <text x="40" y="36" text-anchor="middle" font-size="7.5" fill="#475569">Kiểm tra &</text>
              <text x="40" y="48" text-anchor="middle" font-size="7.5" fill="#475569">điều chỉnh</text>
            </g>
            <path d="M 452 40 L 458 40" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(460, 10)">
              <rect width="70" height="60" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.2"/>
              <text x="35" y="20" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0f172a">B6. Đánh giá</text>
              <text x="35" y="36" text-anchor="middle" font-size="7.5" fill="#475569">Tổng kết,</text>
              <text x="35" y="48" text-anchor="middle" font-size="7.5" fill="#475569">mục tiêu mới</text>
            </g>
          </svg>
        </div>

        <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-900 dark:text-emerald-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-compass text-emerald-600"></i>
            2. Ý nghĩa của việc xác định mục tiêu
          </h4>
          <p>• Mục tiêu cá nhân tựa như chiếc la bàn định hướng cho cuộc sống; giúp ta tập trung năng lượng, phân bổ thời gian hợp lí, kiên định vượt qua cám dỗ lười biếng và không ngừng tiến bộ mỗi ngày.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Mục tiêu nào sau đây đáp ứng ĐẦY ĐỦ nhất các tiêu chí của nguyên tắc SMART?",
        options: ["(Recommended) 'Đạt điểm tổng kết môn Tiếng Anh từ 8.5 trở lên trong học kì 1 bằng cách học 10 từ mới mỗi ngày'", "'Mình sẽ cố gắng học thật giỏi môn Tiếng Anh trong tương lai'", "'Mình muốn trở thành tỉ phú giàu nhất thế giới vào năm sau'", "'Mình sẽ đọc sách nhiều hơn khi có thời gian rảnh'"],
        ans: 0,
        expl: "Mục tiêu này cụ thể (môn Anh), đo lường được (8.5), khả thi (10 từ/ngày), phù hợp và có mốc thời gian (học kì 1)."
      },
      {
        q: "Chữ cái 'M' trong mô hình SMART đại diện cho tiêu chí nào?",
        options: ["(Recommended) Measurable (Đo lường được bằng chỉ số cụ thể)", "Meaningful (Có ý nghĩa mơ hồ)", "Money (Phải kiếm ra tiền ngay)", "Maximum (Phải đạt mức cao nhất thế giới)"],
        ans: 0,
        expl: "M - Measurable: Mục tiêu phải có thước đo kết quả để theo dõi tiến độ hoàn thành."
      },
      {
        q: "Khi gặp trở ngại hoặc tình hình thực tế thay đổi khiến tiến độ mục tiêu bị chậm lại, em nên làm gì?",
        options: ["(Recommended) Đánh giá lại nguyên nhân, điều chỉnh phương pháp hoặc giãn thời hạn hợp lí mà không bỏ cuộc", "Vứt bỏ toàn bộ mục tiêu và từ bỏ thói quen lập kế hoạch", "Tự trách móc bản thân và không dám đặt mục tiêu nào nữa", "Đổ lỗi cho hoàn cảnh và gia đình"],
        ans: 0,
        expl: "Kế hoạch là công cụ linh hoạt, cần bình tĩnh điều chỉnh phương pháp khi hoàn cảnh thay đổi."
      },
      {
        q: "Bước đầu tiên trong quy trình 6 bước xác định mục tiêu cá nhân là gì?",
        options: ["(Recommended) Liệt kê những điều bản thân thực sự mong muốn đạt được", "Đánh giá kết quả cuối cùng", "Chọn ngày kết thúc mục tiêu", "Chi tiền mua sắm dụng cụ"],
        ans: 0,
        expl: "Bước 1 là động não liệt kê mọi mong muốn của bản thân trước khi chọn lọc và xếp thứ tự ưu tiên."
      }
    ]
  },

  // ==================== BÀI 7 ====================
  {
    id: 7,
    machId: "ky-nang",
    machName: "Mạch 2: Giáo dục kĩ năng sống",
    title: "Bài 7. Phòng, chống bạo lực gia đình",
    desc: "Khái niệm bạo lực gia đình; 4 hình thức bạo lực phổ biến; hậu quả nghiêm trọng và kĩ năng ứng phó, tìm kiếm sự trợ giúp khẩn cấp.",
    objectives: [
      "Nhận biết được khái niệm và 4 hình thức bạo lực gia đình (thể chất, tinh thần, kinh tế, tình dục).",
      "Hiểu rõ tác hại khôn lường của bạo lực gia đình đối với thể chất, tâm lí nạn nhân và hạnh phúc gia đình.",
      "Nắm vững các kĩ năng phòng ngừa, tự bảo vệ an toàn và cách liên hệ với các địa chỉ, đường dây nóng hỗ trợ khẩn cấp (Hotline 111, 113)."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 135" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="105" rx="12" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#b91c1c">4 HÌNH THỨC BẠO LỰC GIA ĐÌNH CẦN NHẬN BIẾT VÀ PHÒNG CHỐNG</text>
        <g transform="translate(35, 60)">
          <rect width="155" height="45" rx="6" fill="#fff" stroke="#f87171" stroke-width="1.5"/>
          <text x="77" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#991b1b">1. BẠO LỰC THỂ CHẤT</text>
          <text x="77" y="36" text-anchor="middle" font-size="8" fill="#64748b">Đánh đập, ngược đãi, gây thương tích</text>
        </g>
        <g transform="translate(205, 60)">
          <rect width="155" height="45" rx="6" fill="#fff" stroke="#f87171" stroke-width="1.5"/>
          <text x="77" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#991b1b">2. BẠO LỰC TINH THẦN</text>
          <text x="77" y="36" text-anchor="middle" font-size="8" fill="#64748b">Lăng mạ, sỉ nhục, cô lập, đe dọa</text>
        </g>
        <g transform="translate(375, 60)">
          <rect width="155" height="45" rx="6" fill="#fff" stroke="#f87171" stroke-width="1.5"/>
          <text x="77" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#991b1b">3. BẠO LỰC KINH TẾ</text>
          <text x="77" y="36" text-anchor="middle" font-size="8" fill="#64748b">Tước đoạt tài sản, ép buộc lao động</text>
        </g>
        <g transform="translate(545, 60)">
          <rect width="160" height="45" rx="6" fill="#fff" stroke="#f87171" stroke-width="1.5"/>
          <text x="80" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#991b1b">4. BẠO LỰC TÌNH DỤC</text>
          <text x="80" y="36" text-anchor="middle" font-size="8" fill="#64748b">Ép buộc hành vi tình dục trái ý muốn</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-hand-fist text-rose-600"></i>
            1. Khái niệm và các hình thức bạo lực gia đình
          </h4>
          <p>• <strong>Bạo lực gia đình:</strong> Là hành vi cố ý của thành viên gia đình gây tổn hại hoặc có khả năng gây tổn hại về thể chất, tinh thần, tình dục, kinh tế đối với thành viên khác trong gia đình (theo Luật Phòng, chống bạo lực gia đình).</p>
          <p class="mt-1">• <strong>4 Dạng bạo lực phổ biến:</strong> Thể chất (đánh đập, giam cầm); Tinh thần (chửi bới, xúc phạm danh dự, cô lập); Kinh tế (chiếm đoạt tài sản, ngăn cấm làm việc, ép phụ thuộc tiền bạc); Tình dục (cưỡng ép quan hệ trái ý muốn).</p>
        </div>

        <!-- HÌNH MINH HỌA NỘI DUNG 7.1: Sơ đồ ứng phó và hotline khẩn cấp -->
        <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div class="text-[11px] font-bold text-rose-600 dark:text-rose-400 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-phone-volume"></i> Hình 7.1: Quy trình 3 bước ứng phó khẩn cấp và các đường dây nóng bảo vệ
          </div>
          <svg viewBox="0 0 540 100" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(15, 12)">
              <rect width="155" height="75" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
              <text x="77" y="24" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">1. RỜI ĐẾN NƠI AN TOÀN</text>
              <text x="77" y="44" text-anchor="middle" font-size="8.5" fill="#475569">Không ở lại đôi co,</text>
              <text x="77" y="58" text-anchor="middle" font-size="8.5" fill="#475569">chạy sang nhà hàng xóm</text>
              <text x="77" y="70" text-anchor="middle" font-size="8" font-weight="bold" fill="#b91c1c">Ưu tiên tính mạng</text>
            </g>
            <path d="M 175 50 L 190 50" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(195, 12)">
              <rect width="155" height="75" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
              <text x="77" y="24" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">2. TÌM NGƯỜI LỚN</text>
              <text x="77" y="44" text-anchor="middle" font-size="8.5" fill="#475569">Báo thầy cô, người thân,</text>
              <text x="77" y="58" text-anchor="middle" font-size="8.5" fill="#475569">tổ trưởng dân phố</text>
              <text x="77" y="70" text-anchor="middle" font-size="8" font-weight="bold" fill="#b45309">Tìm trợ giúp tin cậy</text>
            </g>
            <path d="M 355 50 L 370 50" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(375, 12)">
              <rect width="150" height="75" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
              <text x="75" y="24" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">3. GỌI TỔNG ĐÀI</text>
              <text x="75" y="42" text-anchor="middle" font-size="9" font-weight="900" fill="#dc2626">111 (Bảo vệ trẻ em)</text>
              <text x="75" y="56" text-anchor="middle" font-size="9" font-weight="900" fill="#1d4ed8">113 (Công an khẩn cấp)</text>
              <text x="75" y="70" text-anchor="middle" font-size="8" fill="#475569">Miễn phí 24/7</text>
            </g>
          </svg>
        </div>

        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-house-chimney-crack text-blue-600"></i>
            2. Hậu quả và cách phòng ngừa, ứng phó thông minh
          </h4>
          <p>• Hậu quả: Làm tổn hại nghiêm trọng sức khỏe, gây sang chấn tâm lí lâu dài (đặc biệt đối với trẻ em); phá vỡ hạnh phúc gia đình, gây mất an ninh trật tự xã hội.</p>
          <p class="mt-1">• <strong>Nguyên tắc sống an toàn:</strong> Khi xảy ra bạo lực, tuyệt đối không hung hăng cãi vã làm tình hình căng thẳng thêm; ưu tiên tìm đường thoát hiểm an toàn đến nhà người thân hoặc cơ quan công an gần nhất.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Hành vi nào dưới đây được xếp vào dạng 'Bạo lực gia đình về tinh thần'?",
        options: ["(Recommended) Thường xuyên sỉ nhục, lăng mạ, chửi bới và đe dọa cô lập nạn nhân", "Cố ý đánh đập gây thương tích trên thân thể", "Đập phá và chiếm đoạt tiền bạc, tài sản cá nhân", "Bắt nạn nhân phải làm việc quá sức để kiếm tiền"],
        ans: 0,
        expl: "Chửi bới, lăng mạ, đe dọa gây tổn thương nghiêm trọng đến tâm lí là bạo lực tinh thần."
      },
      {
        q: "Tổng đài điện thoại quốc gia bảo vệ trẻ em (miễn cước 24/7) tại Việt Nam có đầu số là:",
        options: ["(Recommended) 111", "113", "114", "115"],
        ans: 0,
        expl: "Tổng đài 111 tiếp nhận thông báo, tư vấn và can thiệp bảo vệ trẻ em mọi lúc mọi nơi."
      },
      {
        q: "Khi chứng kiến hoặc bản thân đang ở trong tình huống có người thân nổi giận dùng bạo lực nguy hiểm, ưu tiên số 1 của em là:",
        options: ["(Recommended) Nhanh chóng tìm cách thoát ra ngoài đến nơi an toàn và gọi người lớn trợ giúp", "Ở lại cãi nhau tay đôi để phân xử thắng thua", "Cầm hung khí để đánh lại", "Khóa trái cửa phòng lại một mình mà không báo ai"],
        ans: 0,
        expl: "Ưu tiên cao nhất là bảo vệ tính mạng, sức khỏe bằng cách thoát đến nơi an toàn và gọi người hỗ trợ."
      },
      {
        q: "Quan niệm nào sau đây là SAI LẦM nghiêm trọng về bạo lực gia đình?",
        options: ["(Recommended) 'Chuyện bạo lực trong nhà là chuyện riêng, người ngoài không có quyền can thiệp'", "Bạo lực gia đình là hành vi vi phạm pháp luật cần bị xử lí", "Mọi thành viên trong gia đình đều có quyền được sống an toàn, bình đẳng", "Nạn nhân bạo lực gia đình cần được bảo vệ và trợ giúp y tế, tâm lí"],
        ans: 0,
        expl: "Bạo lực gia đình không phải chuyện riêng tư nội bộ mà là hành vi vi phạm pháp luật xâm hại quyền con người."
      }
    ]
  },

  // ==================== BÀI 8 ====================
  {
    id: 8,
    machId: "kinh-te",
    machName: "Mạch 3: Giáo dục kinh tế",
    title: "Bài 8. Lập kế hoạch chi tiêu",
    desc: "Khái niệm kế hoạch chi tiêu; phân biệt nhu cầu thiết yếu và mong muốn; quy tắc phân bổ ngân sách 50/30/20 và thói quen tiết kiệm tài chính.",
    objectives: [
      "Hiểu được sự cần thiết của việc quản lí tài chính và lập kế hoạch chi tiêu cá nhân.",
      "Phân biệt rõ ràng giữa nhu cầu thiết yếu (Needs) và mong muốn sở thích (Wants).",
      "Biết lập bảng kế hoạch thu chi cân đối, thực hiện thói quen tiết kiệm và không chi tiêu bốc đồng."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 135" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="105" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#b45309">QUY TẮC QUẢN LÍ TÀI CHÍNH CÁ NHÂN & KẾ HOẠCH CHI TIÊU</text>
        <g transform="translate(60, 58)">
          <rect width="200" height="48" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="100" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">1. THIẾT YẾU (50%)</text>
          <text x="100" y="38" text-anchor="middle" font-size="8.5" fill="#64748b">Ăn uống, học tập, đi lại bắt buộc</text>
        </g>
        <g transform="translate(275, 58)">
          <rect width="200" height="48" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="100" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">2. MONG MUỐN (30%)</text>
          <text x="100" y="38" text-anchor="middle" font-size="8.5" fill="#64748b">Giải trí, sở thích, xem phim, quà vặt</text>
        </g>
        <g transform="translate(490, 58)">
          <rect width="200" height="48" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="100" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">3. TIẾT KIỆM (20%)</text>
          <text x="100" y="38" text-anchor="middle" font-size="8.5" fill="#64748b">Dự phòng phát sinh, mục tiêu lớn</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
          <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-wallet text-amber-600"></i>
            1. Khái niệm và phân biệt nhu cầu thiết yếu vs mong muốn
          </h4>
          <p>• <strong>Kế hoạch chi tiêu:</strong> Là tập hợp các dự tính thu nhập và phân bổ các khoản chi tiêu trong một khoảng thời gian cụ thể (tuần, tháng) nhằm cân đối tài chính và đạt mục tiêu tiết kiệm.</p>
          <p class="mt-1">• <strong>Nhu cầu thiết yếu (Needs):</strong> Những thứ bắt buộc phải có để duy trì học tập và sinh hoạt hàng ngày (sách vở, đồ dùng học tập, bữa ăn sáng, phương tiện đi lại...). Không có sẽ ảnh hưởng trực tiếp đến sức khỏe và việc học.</p>
          <p class="mt-1">• <strong>Mong muốn (Wants):</strong> Những thứ thỏa mãn sở thích cá nhân nhưng không bắt buộc phải có ngay (trà sữa, quần áo thời trang theo trào lưu, đồ chơi điện tử...). Có thể hoãn lại hoặc cắt giảm.</p>
        </div>

        <!-- HÌNH MINH HỌA NỘI DUNG 8.1: Quy trình 5 bước lập kế hoạch chi tiêu -->
        <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div class="text-[11px] font-bold text-amber-600 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-file-invoice-dollar"></i> Hình 8.1: Quy trình 5 bước quản lí ngân sách cá nhân thông minh
          </div>
          <svg viewBox="0 0 540 85" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 10)">
              <rect width="95" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
              <text x="47" y="20" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#1d4ed8">1. Xác định thu</text>
              <text x="47" y="36" text-anchor="middle" font-size="7.5" fill="#475569">Tiền tiêu vặt,</text>
              <text x="47" y="48" text-anchor="middle" font-size="7.5" fill="#475569">tiền thưởng</text>
            </g>
            <path d="M 108 40 L 115 40" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(118, 10)">
              <rect width="95" height="60" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
              <text x="47" y="20" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#047857">2. Liệt kê khoản chi</text>
              <text x="47" y="36" text-anchor="middle" font-size="7.5" fill="#475569">Phân nhóm: Cần</text>
              <text x="47" y="48" text-anchor="middle" font-size="7.5" fill="#475569">và Thích</text>
            </g>
            <path d="M 216 40 L 223 40" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(225, 10)">
              <rect width="95" height="60" rx="6" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.2"/>
              <text x="47" y="20" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#b45309">3. Cân đối ngân sách</text>
              <text x="47" y="36" text-anchor="middle" font-size="7.5" fill="#475569">Đảm bảo Thu &ge; Chi</text>
              <text x="47" y="48" text-anchor="middle" font-size="7.5" fill="#475569">+ trích tiết kiệm</text>
            </g>
            <path d="M 323 40 L 330 40" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(332, 10)">
              <rect width="95" height="60" rx="6" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.2"/>
              <text x="47" y="20" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#86198f">4. Thực hiện & ghi</text>
              <text x="47" y="36" text-anchor="middle" font-size="7.5" fill="#475569">Ghi nhật kí chi tiêu</text>
              <text x="47" y="48" text-anchor="middle" font-size="7.5" fill="#475569">tránh mua bốc đồng</text>
            </g>
            <path d="M 430 40 L 437 40" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(440, 10)">
              <rect width="90" height="60" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.2"/>
              <text x="45" y="20" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0f172a">5. Đánh giá</text>
              <text x="45" y="36" text-anchor="middle" font-size="7.5" fill="#475569">Cuối tháng rà soát,</text>
              <text x="45" y="48" text-anchor="middle" font-size="7.5" fill="#475569">điều chỉnh lại</text>
            </g>
          </svg>
        </div>

        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-piggy-bank text-blue-600"></i>
            2. Thói quen tiết kiệm và nguyên tắc mua sắm thông thái
          </h4>
          <p>• <strong>Nguyên tắc vàng:</strong> Tiết kiệm trước khi tiêu, chứ không phải tiêu xong còn thừa mới tiết kiệm. Luôn tự hỏi: <em>"Món đồ này mình thực sự cần hay chỉ đang nhất thời thích?"</em> trước khi móc ví.</p>
          <p class="mt-1">• So sánh giá cả, cân nhắc chất lượng; không chạy theo quảng cáo hào nhoáng hay áp lực mua sắm đua đòi theo bạn bè.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Khoản chi tiêu nào dưới đây của học sinh được xếp vào nhóm 'Nhu cầu thiết yếu'?",
        options: ["(Recommended) Tiền mua sách giáo khoa, vở ghi và vé xe buýt đi học", "Tiền nạp thẻ mua trang phục trong trò chơi điện tử", "Tiền mua trà sữa mỗi ngày cùng nhóm bạn", "Tiền mua đôi giày hàng hiệu phiên bản giới hạn"],
        ans: 0,
        expl: "Sách vở và phương tiện đi lại là những nhu cầu cơ bản, thiết yếu phục vụ trực tiếp cho việc học tập."
      },
      {
        q: "Theo quy tắc tài chính phổ biến 50/30/20, phần trăm ngân sách dành cho 'Tiết kiệm và Quỹ dự phòng' là bao nhiêu?",
        options: ["(Recommended) 20%", "50%", "30%", "5%"],
        ans: 0,
        expl: "Quy tắc 50/30/20: 50% cho nhu cầu thiết yếu, 30% cho mong muốn cá nhân và 20% cho tiết kiệm/dự phòng."
      },
      {
        q: "Hành động nào dưới đây là biểu hiện của người có kĩ năng chi tiêu thông minh?",
        options: ["(Recommended) Luôn lập danh sách những món đồ cần mua trước khi đi siêu thị và bám sát ngân sách", "Cứ có tiền là tiêu hết ngay lập tức theo cảm hứng", "Vay mượn tiền bạn bè để mua đồ hiệu cho bằng bạn bằng bè", "Không bao giờ ghi chép các khoản chi tiêu hằng ngày"],
        ans: 0,
        expl: "Lập danh sách trước khi mua giúp tránh bị cám dỗ chi tiêu bốc đồng và kiểm soát ngân sách hiệu quả."
      },
      {
        q: "Lợi ích lớn nhất của việc duy trì thói quen tiết kiệm tiền từ khi còn ngồi trên ghế nhà trường là:",
        options: ["(Recommended) Chủ động tài chính khi có việc khẩn cấp và rèn luyện tính kỉ luật, tự lập", "Trở thành người keo kiệt không bao giờ giúp đỡ ai", "Để khoe khoang sự giàu có với bạn bè trong lớp", "Không cần phải học tập chăm chỉ nữa"],
        ans: 0,
        expl: "Tiết kiệm giúp con người chủ động trước rủi ro bất ngờ và xây dựng thói quen tự lập tài chính vững chắc."
      }
    ]
  },

  // ==================== BÀI 9 ====================
  {
    id: 9,
    machId: "phap-luat",
    machName: "Mạch 4: Giáo dục pháp luật",
    title: "Bài 9. Phòng ngừa tai nạn vũ khí, cháy, nổ và các chất độc hại",
    desc: "Nhận diện nguy cơ; nguyên tắc an toàn PCCC, hóa chất; quy định của pháp luật và kĩ năng thoát hiểm khẩn cấp khi có hỏa hoạn.",
    objectives: [
      "Nhận biết được các nguy cơ gây tai nạn từ vũ khí, bom mìn, cháy, nổ và các chất độc hại.",
      "Hiểu và thực hiện đúng các quy định của pháp luật về quản lí vũ khí, vật liệu nổ và phòng cháy chữa cháy.",
      "Thực hành thành thạo kĩ năng báo động, thoát hiểm an toàn khi có hỏa hoạn và không tiếp xúc với vật nghi nguy hiểm."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 135" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="105" rx="12" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#b91c1c">PHÒNG NGỪA TAI NẠN VŨ KHÍ, CHÁY NỔ VÀ CÁC CHẤT ĐỘC HẠI</text>
        <g transform="translate(45, 60)">
          <rect width="180" height="45" rx="6" fill="#fff" stroke="#f87171" stroke-width="1.5"/>
          <text x="90" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#991b1b">1. VŨ KHÍ & BOM MÌN</text>
          <text x="90" y="36" text-anchor="middle" font-size="8.5" fill="#64748b">Không chạm, không nhặt vật lạ</text>
        </g>
        <g transform="translate(285, 60)">
          <rect width="180" height="45" rx="6" fill="#fff" stroke="#f87171" stroke-width="1.5"/>
          <text x="90" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#991b1b">2. PHÒNG CHỐNG CHÁY NỔ</text>
          <text x="90" y="36" text-anchor="middle" font-size="8.5" fill="#64748b">Cắt điện, bình cứu hỏa, gọi 114</text>
        </g>
        <g transform="translate(525, 60)">
          <rect width="180" height="45" rx="6" fill="#fff" stroke="#f87171" stroke-width="1.5"/>
          <text x="90" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#991b1b">3. HÓA CHẤT ĐỘC HẠI</text>
          <text x="90" y="36" text-anchor="middle" font-size="8.5" fill="#64748b">Không ngửi, nếm, nhãn cảnh báo</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation text-rose-600"></i>
            1. Nhận diện nguy cơ và quy định của pháp luật
          </h4>
          <p>• Tai nạn từ vũ khí, bom mìn sót lại sau chiến tranh, pháo nổ tự chế, khí gas rò rỉ, chập cháy điện hay hóa chất độc hại gây thiệt hại thảm khốc về tính mạng, sức khỏe (thương tật suốt đời) và tài sản.</p>
          <p class="mt-1">• <strong>Pháp luật nghiêm cấm:</strong> Chế tạo, tàng trữ, vận chuyển, sử dụng, mua bán trái phép vũ khí, vật liệu nổ, pháo nổ và các chất phóng xạ, chất độc hại; không được đốt lửa ở nơi có biển cấm lửa.</p>
        </div>

        <!-- HÌNH MINH HỌA NỘI DUNG 9.1: Kĩ năng thoát hiểm đám cháy -->
        <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div class="text-[11px] font-bold text-rose-600 dark:text-rose-400 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-person-running"></i> Hình 9.1: 4 Kĩ năng sống còn khi xảy ra hỏa hoạn khẩn cấp
          </div>
          <svg viewBox="0 0 540 100" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 15)">
              <rect width="115" height="70" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
              <text x="57" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#991b1b">1. BÁO ĐỘNG & 114</text>
              <text x="57" y="42" text-anchor="middle" font-size="8" fill="#475569">Hô hoán mọi người,</text>
              <text x="57" y="56" text-anchor="middle" font-size="8" font-weight="bold" fill="#dc2626">Gọi cứu hỏa 114</text>
            </g>
            <path d="M 130 50 L 145 50" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(150, 15)">
              <rect width="115" height="70" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
              <text x="57" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#92400e">2. BẢO VỆ ĐƯỜNG THỞ</text>
              <text x="57" y="42" text-anchor="middle" font-size="8" fill="#475569">Dùng khăn vải ướt</text>
              <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">bịt kín mũi và miệng</text>
            </g>
            <path d="M 270 50 L 285 50" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(290, 15)">
              <rect width="115" height="70" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
              <text x="57" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">3. BÒ THẤP NGƯỜI</text>
              <text x="57" y="42" text-anchor="middle" font-size="8" fill="#475569">Khói độc bay ở trên,</text>
              <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">men theo chân tường</text>
            </g>
            <path d="M 410 50 L 425 50" stroke="#94a3b8" stroke-width="2"/>
            <g transform="translate(430, 15)">
              <rect width="105" height="70" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
              <text x="52" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a">4. KHÔNG ĐI THANG MÁY</text>
              <text x="52" y="42" text-anchor="middle" font-size="8" fill="#475569">Chỉ dùng thang bộ,</text>
              <text x="52" y="56" text-anchor="middle" font-size="8" fill="#475569">không quay lại lấy đồ</text>
            </g>
          </svg>
        </div>

        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-fire-extinguisher text-blue-600"></i>
            2. Trách nhiệm và kĩ năng ứng phó cơ bản
          </h4>
          <p>• Khi phát hiện vật lạ nghi là bom mìn hoặc hóa chất rò rỉ: Tuyệt đối không chạm vào, không ném đá, cảnh báo mọi người xung quanh tránh xa và báo ngay cơ quan công an hoặc chính quyền địa phương.</p>
          <p class="mt-1">• Khi có cháy: Báo động lớn tiếng, ngắt cầu dao điện nếu có thể, gọi 114; dùng khăn ướt bịt mũi miệng, cúi thấp người men theo lối thoát hiểm. Không sử dụng thang máy khi có hỏa hoạn.</p>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Khi phát hiện một vật thể bằng kim loại rỉ sét nghi là đầu đạn hay mìn còn sót lại sau chiến tranh, hành động ĐÚNG là:",
        options: ["(Recommended) Giữ nguyên hiện trường, cảnh báo mọi người xung quanh tránh xa và báo ngay cho công an xã/phường", "Nhặt lên đem bán phế liệu để lấy tiền", "Dùng gậy gõ mạnh xem bên trong có thuốc nổ không", "Đem đốt lửa lên để xem đạn có nổ được không"],
        ans: 0,
        expl: "Tuyệt đối không đụng chạm vào bom mìn vật nổ, phải giữ khoảng cách an toàn và báo cơ quan chức năng xử lí chuyên môn."
      },
      {
        q: "Số điện thoại khẩn cấp quốc gia gọi lực lượng Cảnh sát Phòng cháy chữa cháy và Cứu nạn cứu hộ tại Việt Nam là:",
        options: ["(Recommended) 114", "113", "115", "111"],
        ans: 0,
        expl: "114 là số điện thoại khẩn cấp gọi lực lượng Cảnh sát PCCC và CNCH."
      },
      {
        q: "Tại sao khi di chuyển thoát nạn trong đám cháy có nhiều khói độc, ta phải cúi thấp người hoặc bò sát mặt đất?",
        options: ["(Recommended) Vì khói độc và nhiệt độ cao có xu hướng bốc lên trần, không khí sạch giàu oxy còn lại ở sát sàn nhà", "Vì bò như vậy sẽ chạy nhanh hơn chạy bình thường", "Vì sợ bị nhìn thấy từ bên ngoài", "Vì thang bộ chỉ cho phép bò"],
        ans: 0,
        expl: "Khói độc nhẹ hơn không khí bốc lên trên, lớp không khí thở được nằm sát sàn từ 30-50 cm."
      },
      {
        q: "Hành vi nào dưới đây bị pháp luật Việt Nam NGHIÊM CẤM tuyệt đối?",
        options: ["(Recommended) Tự ý mua hóa chất trên mạng về pha chế pháo nổ vào dịp Tết", "Trang bị bình chữa cháy bột trong nhà ở", "Tham gia các buổi tập huấn diễn tập PCCC tại trường học", "Khóa van bình gas an toàn sau khi nấu nướng"],
        ans: 0,
        expl: "Tự chế tạo, mua bán, tàng trữ và đốt pháo nổ trái phép là hành vi vi phạm pháp luật hình sự."
      }
    ]
  },

  // ==================== BÀI 10 ====================
  {
    id: 10,
    machId: "phap-luat",
    machName: "Mạch 4: Giáo dục pháp luật",
    title: "Bài 10. Quyền và nghĩa vụ lao động của công dân",
    desc: "Khái niệm lao động; quyền và nghĩa vụ lao động của công dân; quy định đặc biệt bảo vệ lao động người chưa thành niên.",
    objectives: [
      "Hiểu được vai trò của lao động đối với sự phát triển của cá nhân, gia đình và toàn xã hội.",
      "Nắm vững các quyền và nghĩa vụ lao động cơ bản của công dân theo quy định của pháp luật.",
      "Biết các quy định pháp luật bảo vệ lao động người chưa thành niên (độ tuổi tối thiểu, thời giờ làm việc, công việc cấm sử dụng)."
    ],
    svgHeader: `
      <svg viewBox="0 0 750 135" class="w-full max-w-2xl mx-auto h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="720" height="105" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        <text x="375" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#1d4ed8">QUYỀN VÀ NGHĨA VỤ LAO ĐỘNG CỦA CÔNG DÂN</text>
        <g transform="translate(60, 58)">
          <rect width="270" height="48" rx="8" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="135" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">1. QUYỀN LAO ĐỘNG</text>
          <text x="135" y="38" text-anchor="middle" font-size="8.5" fill="#64748b">Tự do chọn nghề, hưởng lương, nghỉ ngơi, an toàn</text>
        </g>
        <g transform="translate(420, 58)">
          <rect width="270" height="48" rx="8" fill="#fff" stroke="#10b981" stroke-width="1.5"/>
          <text x="135" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">2. NGHĨA VỤ LAO ĐỘNG</text>
          <text x="135" y="38" text-anchor="middle" font-size="8.5" fill="#64748b">Tự nuôi sống bản thân, chấp hành kỉ luật & an toàn</text>
        </g>
      </svg>
    `,
    content: `
      <div class="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800">
          <h4 class="font-bold text-blue-900 dark:text-blue-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-briefcase text-blue-600"></i>
            1. Khái niệm lao động và vai trò
          </h4>
          <p>• <strong>Lao động:</strong> Là hoạt động có mục đích, có ý thức của con người nhằm tạo ra của cải vật chất và giá trị tinh thần cho xã hội.</p>
          <p class="mt-1">• Lao động là nhân tố quyết định sự tồn tại và phát triển của nhân loại; giúp con người hoàn thiện nhân cách, rèn luyện thể lực, trí lực và mang lại nguồn thu nhập nuôi sống bản thân và gia đình.</p>
        </div>

        <!-- HÌNH MINH HỌA NỘI DUNG 10.1: Cán cân quyền và nghĩa vụ lao động -->
        <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
            <i class="fa-solid fa-scale-balanced"></i> Hình 10.1: Sự cân bằng giữa Quyền và Nghĩa vụ của người lao động
          </div>
          <svg viewBox="0 0 540 100" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 15)">
              <rect width="235" height="70" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
              <text x="117" y="26" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">QUYỀN CỦA NGƯỜI LAO ĐỘNG</text>
              <text x="20" y="44" font-size="8.5" fill="#475569">• Tự do lựa chọn việc làm, nghề nghiệp</text>
              <text x="20" y="58" font-size="8.5" fill="#475569">• Hưởng lương đúng hạn, thỏa thuận bình đẳng</text>
              <text x="20" y="70" font-size="8.5" fill="#475569">• Được bảo đảm an toàn, vệ sinh lao động</text>
            </g>
            <g transform="translate(285, 15)">
              <rect width="235" height="70" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>
              <text x="117" y="26" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">NGHĨA VỤ CỦA NGƯỜI LAO ĐỘNG</text>
              <text x="20" y="44" font-size="8.5" fill="#475569">• Thực hiện hợp đồng lao động đã giao kết</text>
              <text x="20" y="58" font-size="8.5" fill="#475569">• Chấp hành kỉ luật lao động, nội quy công ty</text>
              <text x="20" y="70" font-size="8.5" fill="#475569">• Tuân thủ nghiêm ngặt quy định an toàn</text>
            </g>
          </svg>
        </div>

        <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-800">
          <h4 class="font-bold text-rose-900 dark:text-rose-200 text-base mb-1.5 flex items-center gap-2">
            <i class="fa-solid fa-child-reaching text-rose-600"></i>
            2. Quy định đặc biệt bảo vệ người lao động chưa thành niên
          </h4>
          <p>• <strong>Người lao động chưa thành niên:</strong> Là người lao động chưa đủ 18 tuổi.</p>
          <p class="mt-1">• <strong>Nguyên tắc bảo vệ:</strong></p>
          <ul class="list-disc pl-5 mt-1 space-y-0.5 text-xs">
            <li>Người từ đủ 15 đến dưới 18 tuổi: Thời giờ làm việc không quá 8 giờ/ngày và 40 giờ/tuần.</li>
            <li>Người chưa đủ 15 tuổi: Thời giờ làm việc không quá 4 giờ/ngày và 20 giờ/tuần; không được làm thêm giờ, làm việc ban đêm.</li>
            <li>Nghiêm cấm lạm dụng, bóc lột sức lao động của người chưa thành niên hoặc sử dụng vào các công việc nặng nhọc, độc hại, nguy hiểm (như hầm mỏ, hóa chất, cơ sở karaoke, vũ trường...).</li>
          </ul>
        </div>
      </div>
    `,
    quiz: [
      {
        q: "Theo Bộ luật Lao động Việt Nam, độ tuổi tối thiểu của người lao động nói chung là:",
        options: ["(Recommended) Đủ 15 tuổi", "Đủ 18 tuổi", "Đủ 16 tuổi", "Đủ 14 tuổi"],
        ans: 0,
        expl: "Theo quy định, người lao động là người từ đủ 15 tuổi trở lên có khả năng lao động và làm việc theo hợp đồng."
      },
      {
        q: "Hành vi nào dưới đây của người sử dụng lao động bị pháp luật NGHIÊM CẤM?",
        options: ["(Recommended) Sử dụng lao động chưa thành niên vào công việc nặng nhọc, độc hại dưới hầm lò mỏ than", "Kí kết hợp đồng lao động bằng văn bản với người lao động", "Trang bị đầy đủ đồ bảo hộ lao động cho công nhân", "Tổ chức khám sức khỏe định kì hàng năm cho nhân viên"],
        ans: 0,
        expl: "Pháp luật nghiêm cấm bố trí người chưa thành niên làm công việc nặng nhọc, độc hại nguy hiểm ảnh hưởng sự phát triển thể chất và tinh thần."
      },
      {
        q: "Nội dung nào dưới đây thuộc về NGHĨA VỤ của người lao động?",
        options: ["(Recommended) Chấp hành kỉ luật lao động, nội quy cơ quan và tuân thủ quy chuẩn an toàn vệ sinh", "Được quyền đơn phương đòi tăng lương vô căn cứ bất kì lúc nào", "Được nghỉ ngơi hưởng nguyên lương theo luật định", "Được từ chối làm việc khi thấy không vừa ý"],
        ans: 0,
        expl: "Tuân thủ hợp đồng, nội quy và quy chuẩn an toàn lao động là nghĩa vụ bắt buộc của người lao động."
      },
      {
        q: "Một bạn học sinh 14 tuổi muốn tìm việc làm thêm vào dịp hè để phụ giúp gia đình. Lời khuyên ĐÚNG ĐẮN nhất dành cho bạn là:",
        options: ["(Recommended) Hỏi ý kiến cha mẹ, chỉ chọn công việc nhẹ nhàng phù hợp lứa tuổi và có sự giám sát của người lớn", "Tự ý bỏ nhà đi làm phục vụ ở quán bar ban đêm vì lương cao", "Kí hợp đồng lao động độc hại miễn là có nhiều tiền", "Làm việc 12 tiếng mỗi ngày để kiếm thật nhiều tiền"],
        ans: 0,
        expl: "Lao động dưới 15 tuổi phải có sự đồng ý của cha mẹ/người giám hộ và chỉ được làm công việc nhẹ nhàng theo danh mục cho phép."
      }
    ]
  }
];

module.exports = { machData, lessonsData };
