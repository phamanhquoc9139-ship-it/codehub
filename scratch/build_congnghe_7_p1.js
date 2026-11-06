// Builder script for Công Nghệ Lớp 7 (Technology 7)
// SGK Kết nối tri thức với cuộc sống - GDPT 2018
const fs = require('fs');
const path = require('path');

console.log("Generating Cong Nghe Lop 7 (Technology 7)...");

// Lessons Data covering all 16 lessons + Review
const lessonsData = [
  // ==================== CHƯƠNG I: TRỒNG TRỌT ====================
  {
    chapter: "Chương I: Trồng trọt",
    chapterTag: "CHƯƠNG 1",
    chapterColor: "bg-emerald-600",
    id: "bai-1",
    lessonNum: "Bài 1",
    title: "Bài 1. Giới thiệu về trồng trọt",
    pages: "SGK tr. 6–11",
    objective: "Nêu vai trò, triển vọng của trồng trọt; phân loại cây trồng theo mục đích; nhận biết các phương thức sản xuất, đặc điểm trồng trọt công nghệ cao và một số nghề trong lĩnh vực này.",
    mindmap: {
      nodes: [
        { title: "VAI TRÒ & TRIỂN VỌNG", desc: "Lương thực, nguyên liệu chế biến, xuất khẩu, chăn nuôi, việc làm", color: "#059669" },
        { title: "NHÓM CÂY TRỒNG", desc: "Cây lương thực, công nghiệp, rau, quả, thuốc, gia vị, hoa cảnh, gỗ", color: "#10b981" },
        { title: "PHƯƠNG THỨC & CÔNG NGHỆ", desc: "Ngoài tự nhiên, nhà có mái che, kết hợp; Nông nghiệp công nghệ cao", color: "#047857" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 1: CÔNG NGHỆ CAO TRONG TRỒNG TRỌT -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-emerald-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-emerald-500/20">
          <span class="text-xs font-bold text-emerald-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-seedling"></i> Hình 1: Hệ Thống Trồng Trọt Nông Nghiệp Công Nghệ Cao &amp; Phân Nhóm Cây Trồng
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 6–11</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 220" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <!-- 3 Phương thức sản xuất -->
            <rect x="15" y="15" width="250" height="190" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
            <rect x="25" y="25" width="230" height="24" rx="5" fill="#065f46"/>
            <text x="140" y="41" text-anchor="middle" fill="#a7f3d0" font-size="11" font-weight="900">3 PHƯƠNG THỨC TRỒNG TRỌT</text>
            <text x="30" y="70" fill="#f8fafc" font-size="9.5" font-weight="700">1. Ngoài tự nhiên:</text>
            <text x="30" y="86" fill="#94a3b8" font-size="8.5">Đơn giản, diện tích lớn; dễ bị sâu bệnh &amp; thời tiết.</text>
            <text x="30" y="110" fill="#f8fafc" font-size="9.5" font-weight="700">2. Trong nhà có mái che:</text>
            <text x="30" y="126" fill="#94a3b8" font-size="8.5">Chủ động chăm sóc, giảm thời tiết, làm trái vụ.</text>
            <text x="30" y="150" fill="#f8fafc" font-size="9.5" font-weight="700">3. Trồng trọt kết hợp:</text>
            <text x="30" y="166" fill="#94a3b8" font-size="8.5">Gieo ươm trong nhà lưới &rarr; đưa ra đồng ruộng.</text>

            <!-- Đặc trưng công nghệ cao -->
            <rect x="280" y="15" width="260" height="190" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
            <rect x="290" y="25" width="240" height="24" rx="5" fill="#0369a1"/>
            <text x="410" y="41" text-anchor="middle" fill="#bae6fd" font-size="11" font-weight="900">TRỒNG TRỌT CÔNG NGHỆ CAO</text>
            <text x="295" y="70" fill="#38bdf8" font-size="9.5" font-weight="700">&bull; Giống mới:</text>
            <text x="355" y="70" fill="#f8fafc" font-size="9">Năng suất cao, chống chịu tốt.</text>
            <text x="295" y="95" fill="#38bdf8" font-size="9.5" font-weight="700">&bull; Không dùng đất:</text>
            <text x="385" y="95" fill="#f8fafc" font-size="9">Giá thể, thủy canh, khí canh.</text>
            <text x="295" y="120" fill="#38bdf8" font-size="9.5" font-weight="700">&bull; Tự động hóa:</text>
            <text x="365" y="120" fill="#f8fafc" font-size="9">Tưới nhỏ giọt, điều khiển nhiệt/ẩm.</text>
            <text x="295" y="145" fill="#38bdf8" font-size="9.5" font-weight="700">&bull; Chuỗi khép kín:</text>
            <text x="375" y="145" fill="#f8fafc" font-size="9">Nghiên cứu &rarr; Sản xuất &rarr; Tiêu thụ.</text>
            <rect x="295" y="162" width="230" height="28" rx="4" fill="#0c4a6e"/>
            <text x="410" y="180" text-anchor="middle" fill="#7dd3fc" font-size="8.5" font-weight="800">Tiết kiệm công lao động &bull; Chất lượng cao</text>

            <!-- Nghề nghiệp trồng trọt -->
            <rect x="555" y="15" width="250" height="190" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
            <rect x="565" y="25" width="230" height="24" rx="5" fill="#92400e"/>
            <text x="680" y="41" text-anchor="middle" fill="#fde68a" font-size="11" font-weight="900">NGHỀ NGHIỆP TRỒNG TRỌT</text>
            <text x="570" y="75" fill="#fbbf24" font-size="9.5" font-weight="700">1. Kĩ sư trồng trọt:</text>
            <text x="570" y="90" fill="#cbd5e1" font-size="8.5">Quản lí sản xuất, quy trình kĩ thuật canh tác.</text>
            <text x="570" y="115" fill="#fbbf24" font-size="9.5" font-weight="700">2. Kĩ sư bảo vệ thực vật:</text>
            <text x="570" y="130" fill="#cbd5e1" font-size="8.5">Phòng trừ sâu bệnh, bảo vệ môi trường.</text>
            <text x="570" y="155" fill="#fbbf24" font-size="9.5" font-weight="700">3. Kĩ sư chọn giống cây trồng:</text>
            <text x="570" y="170" fill="#cbd5e1" font-size="8.5">Nghiên cứu, lai tạo &amp; bảo tồn giống mới.</text>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Vai trò và triển vọng của trồng trọt",
        content: `
          <p><strong>Vai trò thiết yếu:</strong> Trồng trọt cung cấp các sản phẩm thiết yếu như gạo, ngô, rau, củ, quả phục vụ đời sống con người; cung cấp nguyên liệu cho công nghiệp chế biến và xuất khẩu; tạo nguồn thức ăn dồi dào cho ngành chăn nuôi; góp phần giải quyết việc làm và nâng cao thu nhập cho người dân. Sự phát triển của trồng trọt còn là bệ phóng hỗ trợ nhiều ngành sản xuất, thương mại, dịch vụ khác.</p>
          <p class="mt-2"><strong>Triển vọng phát triển tại Việt Nam:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Việt Nam có khí hậu nhiệt đới gió mùa với các mùa vụ phong phú, địa hình đa dạng gồm đồng bằng châu thổ, trung du, miền núi, cao nguyên và dải ven biển.</li>
            <li>Nước ta có bề dày truyền thống nông nghiệp lúa nước, người lao động cần cù, giàu kinh nghiệm thực tế.</li>
            <li>Khoa học công nghệ, máy móc cơ giới và chính sách khuyến nông của Nhà nước ngày càng hoàn thiện, tạo điều kiện mở rộng vùng chuyên canh, nâng cao năng suất và chất lượng nông sản.</li>
            <li>Xu thế tương lai: Sản xuất hướng đến <em>chất lượng cao, an toàn vệ sinh thực phẩm (VietGAP, GlobalGAP), hiệu quả kinh tế và phát triển bền vững</em>.</li>
          </ul>
        `
      },
      {
        heading: "2. Các nhóm cây trồng phổ biến",
        content: `
          <p>Dựa vào <strong>mục đích sử dụng chính</strong>, cây trồng được phân chia thành các nhóm:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
            <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              <span class="font-bold text-emerald-800 dark:text-emerald-300 block text-xs">Cây lương thực</span>
              <span class="text-gray-700 dark:text-gray-300 text-xs">Lúa, ngô, lúa mì, sắn (khoai mì), khoai tây, khoai lang; cung cấp tinh bột và năng lượng chính cho con người.</span>
            </div>
            <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
              <span class="font-bold text-amber-800 dark:text-amber-300 block text-xs">Cây công nghiệp</span>
              <span class="text-gray-700 dark:text-gray-300 text-xs">Mía, lạc (đậu phộng), đậu tương, bông, đay, chè, cà phê, cao su; cung cấp nguyên liệu chế biến và công nghiệp dệt may.</span>
            </div>
            <div class="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800">
              <span class="font-bold text-teal-800 dark:text-teal-300 block text-xs">Cây ăn quả &amp; Cây rau</span>
              <span class="text-gray-700 dark:text-gray-300 text-xs">Cam, xoài, nhãn, chuối, thanh long; rau muống, bắp cải, cà chua; cung cấp vitamin, khoáng chất và chất xơ.</span>
            </div>
            <div class="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
              <span class="font-bold text-blue-800 dark:text-blue-300 block text-xs">Cây thuốc, Gia vị &amp; Cây hoa cảnh, Cây gỗ</span>
              <span class="text-gray-700 dark:text-gray-300 text-xs">Sâm, đinh lăng; gừng, tỏi, ớt; hoa hồng, cúc, đào, mai trang trí cảnh quan; keo, bạch đàn, lim, sến lấy gỗ và nguyên liệu lâm sản.</span>
            </div>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 italic mt-2">* Lưu ý: Một cây trồng có thể có nhiều công dụng khác nhau (ví dụ: cây sen vừa lấy củ/hạt làm thực phẩm, vừa làm thuốc, vừa làm cảnh); khi phân nhóm cần căn cứ vào mục đích sử dụng chủ yếu đang xét.</p>
        `
      },
      {
        heading: "3. Các phương thức trồng trọt phổ biến",
        content: `
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Trồng trọt ngoài tự nhiên:</strong> Mọi khâu canh tác từ làm đất, gieo trồng đến chăm sóc đều tiến hành trực tiếp trong điều kiện môi trường tự nhiên. <em>Ưu điểm:</em> Quy trình đơn giản, chi phí thấp, triển khai được trên quy mô diện tích rất lớn. <em>Nhược điểm:</em> Chịu ảnh hưởng trực tiếp của thời tiết bất lợi (giá rét, hạn hán, mưa bão, lũ lụt) và áp lực sâu bệnh hại.</li>
            <li><strong>Trồng trọt trong nhà có mái che:</strong> Thực hiện trong nhà lưới, nhà kính, nhà màng. <em>Ưu điểm:</em> Chủ động kiểm soát tiểu khí hậu, giảm tác động của thời tiết cực đoan và sâu bệnh gây hại, có thể sản xuất rau quả trái vụ mang lại giá trị kinh tế cao. <em>Nhược điểm:</em> Yêu cầu vốn đầu tư lớn, hệ thống trang thiết bị hiện đại và kĩ thuật vận hành chuyên sâu.</li>
            <li><strong>Trồng trọt kết hợp:</strong> Kết hợp cả hai phương thức theo từng giai đoạn sinh trưởng của cây. Ví dụ: Gieo hạt và ươm nuôi cây con khỏe mạnh trong nhà màng có mái che, khi cây cứng cáp và thời tiết thuận lợi thì đem trồng đại trà ngoài đồng ruộng tự nhiên.</li>
          </ul>
        `
      },
      {
        heading: "4. Trồng trọt công nghệ cao và các ngành nghề liên quan",
        content: `
          <p><strong>Đặc điểm của trồng trọt công nghệ cao:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Ưu tiên ứng dụng các giống cây trồng mới cho năng suất vượt trội, phẩm chất đồng đều và thời gian sinh trưởng phù hợp.</li>
            <li>Ứng dụng giá thể (xơ dừa, vỏ trấu hun) hoặc dung dịch dinh dưỡng (thủy canh, khí canh) để thay thế đất tự nhiên.</li>
            <li>Tự động hóa các khâu tưới tiêu nhỏ giọt, bón phân tự động, cảm biến điều chỉnh nhiệt độ, độ ẩm và thông gió.</li>
            <li>Quy trình sản xuất khép kín từ nghiên cứu chọn giống, chăm sóc tiêu chuẩn đến bảo quản và chuỗi tiêu thụ.</li>
          </ul>
          <p class="mt-2 font-bold text-gray-900 dark:text-white">Một số ngành nghề tiêu biểu:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Kĩ sư trồng trọt:</strong> Quản lí, chỉ đạo quy trình canh tác, nghiên cứu ứng dụng công nghệ nhằm nâng cao năng suất và chất lượng nông sản.</li>
            <li><strong>Kĩ sư bảo vệ thực vật:</strong> Điều tra, chẩn đoán sâu bệnh hại cây trồng, đề xuất biện pháp phòng ngừa và xử lí an toàn sinh học, bảo đảm an toàn thực phẩm.</li>
            <li><strong>Kĩ sư chọn giống cây trồng:</strong> Thu thập, bảo tồn nguồn gen bản địa quý hiếm, nghiên cứu lai tạo và khảo nghiệm các giống cây trồng mới.</li>
          </ul>
        `
      }
    ],
    application: "Khảo sát các loại cây trồng xung quanh gia đình, trường học hoặc địa phương. Lập bảng ghi chép: Tên cây &bull; Bộ phận sử dụng &bull; Phân nhóm cây trồng &bull; Phương thức canh tác &bull; Điều kiện chăm sóc cần chú ý. Định hướng nghề nghiệp tương lai dựa trên sở thích nghiên cứu sinh học, quan sát tự nhiên và làm việc ngoài trời.",
    quizzes: [
      {
        q: "Phương thức trồng trọt nào cho phép người trồng chủ động điều chỉnh ánh sáng, độ ẩm và sản xuất nông sản trái vụ?",
        opts: ["Trồng trọt trong nhà có mái che", "Trồng trọt ngoài tự nhiên thuần túy", "Trồng trọt du canh phát rừng", "Trồng trọt quảng canh"],
        ans: 0,
        explain: "Nhà kính, nhà lưới có hệ thống che chắn và điều khiển vi khí hậu giúp chủ động chăm sóc và sản xuất trái vụ hiệu quả."
      },
      {
        q: "Kĩ sư chuyên nghiên cứu, nhận biết và đưa ra giải pháp phòng ngừa sâu bệnh hại cây trồng thuộc chuyên ngành nào?",
        opts: ["Kĩ sư bảo vệ thực vật", "Kĩ sư lâm nghiệp", "Kĩ sư cơ khí nông nghiệp", "Kĩ sư chế biến thực phẩm"],
        ans: 0,
        explain: "Kĩ sư bảo vệ thực vật phụ trách nghiên cứu tác nhân gây hại và biện pháp phòng trừ an toàn sinh học cho cây trồng."
      }
    ]
  },

  // ==================== BÀI 2 ====================
  {
    chapter: "Chương I: Trồng trọt",
    chapterTag: "CHƯƠNG 1",
    chapterColor: "bg-emerald-600",
    id: "bai-2",
    lessonNum: "Bài 2",
    title: "Bài 2. Làm đất trồng cây",
    pages: "SGK tr. 12–13",
    objective: "Nêu thành phần và vai trò của đất trồng; trình bày mục đích, yêu cầu của một số công việc làm đất và kĩ thuật bón phân lót.",
    mindmap: {
      nodes: [
        { title: "THÀNH PHẦN ĐẤT", desc: "Phần rắn (khoáng, mùn) - Phần lỏng (nước) - Phần khí (oxygen)", color: "#059669" },
        { title: "CÁC BƯỚC LÀM ĐẤT", desc: "Cày sâu 20–30cm &rarr; Bừa, đập nhỏ đất &rarr; Lên luống thoát nước", color: "#d97706" },
        { title: "BÓN PHÂN LÓT", desc: "Bón trước khi gieo trồng; dùng phân hữu cơ hoai mục và phân lân", color: "#2563eb" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 2: CẤU TẠO ĐẤT VÀ QUY TRÌNH LÀM ĐẤT -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-emerald-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-emerald-500/20">
          <span class="text-xs font-bold text-emerald-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-mountain"></i> Hình 2: 3 Thành Phần Của Đất Trồng &amp; Quy Trình Làm Đất Bón Lót
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 12–13</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 220" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <!-- 3 Thành phần của đất -->
            <rect x="15" y="15" width="370" height="190" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
            <rect x="25" y="25" width="350" height="24" rx="5" fill="#78350f"/>
            <text x="200" y="41" text-anchor="middle" fill="#fde68a" font-size="11" font-weight="900">3 THÀNH PHẦN CHÍNH CỦA ĐẤT TRỒNG</text>
            
            <circle cx="85" cy="120" r="45" fill="#334155" stroke="#f59e0b" stroke-width="2"/>
            <path d="M 85 120 L 85 75 A 45 45 0 0 1 130 120 Z" fill="#d97706"/>
            <path d="M 85 120 L 130 120 A 45 45 0 0 1 85 165 Z" fill="#0284c7"/>
            <path d="M 85 120 L 85 165 A 45 45 0 0 1 85 75 Z" fill="#15803d"/>
            <text x="85" y="115" text-anchor="middle" fill="#ffffff" font-size="8" font-weight="900">ĐẤT</text>
            <text x="85" y="127" text-anchor="middle" fill="#cbd5e1" font-size="7">TRỒNG</text>

            <g transform="translate(145, 60)">
              <rect x="0" y="0" width="12" height="12" rx="2" fill="#15803d"/>
              <text x="18" y="10" fill="#a7f3d0" font-size="9" font-weight="700">Phần rắn (~50%):</text>
              <text x="18" y="23" fill="#cbd5e1" font-size="8">Chất khoáng + chất hữu cơ &rarr; dinh dưỡng &amp; giữ cây đứng.</text>

              <rect x="0" y="38" width="12" height="12" rx="2" fill="#0284c7"/>
              <text x="18" y="48" fill="#7dd3fc" font-size="9" font-weight="700">Phần lỏng (~25%):</text>
              <text x="18" y="61" fill="#cbd5e1" font-size="8">Nước hòa tan chất dinh dưỡng cho rễ hấp thụ.</text>

              <rect x="0" y="76" width="12" height="12" rx="2" fill="#d97706"/>
              <text x="18" y="86" fill="#fde68a" font-size="9" font-weight="700">Phần khí (~25%):</text>
              <text x="18" y="99" fill="#cbd5e1" font-size="8">Không khí trong khe đất cung cấp O₂ cho rễ thở.</text>
            </g>

            <!-- Quy trình làm đất -->
            <rect x="405" y="15" width="400" height="190" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
            <rect x="415" y="25" width="380" height="24" rx="5" fill="#065f46"/>
            <text x="605" y="41" text-anchor="middle" fill="#a7f3d0" font-size="11" font-weight="900">QUY TRÌNH 4 BƯỚC LÀM ĐẤT &amp; BÓN LÓT</text>

            <!-- Step boxes -->
            <g transform="translate(420, 60)">
              <rect x="0" y="0" width="85" height="130" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <text x="42" y="20" text-anchor="middle" fill="#34d399" font-size="10" font-weight="900">1. CÀY ĐẤT</text>
              <text x="42" y="38" text-anchor="middle" fill="#f8fafc" font-size="8">Sâu 20–30cm</text>
              <text x="8" y="60" fill="#94a3b8" font-size="7.5">&bull; Đảo lớp mặt</text>
              <text x="8" y="75" fill="#94a3b8" font-size="7.5">&bull; Tăng bề dày</text>
              <text x="8" y="90" fill="#94a3b8" font-size="7.5">&bull; Vùi cỏ dại</text>
              <text x="8" y="105" fill="#94a3b8" font-size="7.5">&bull; Làm đất thoáng</text>

              <rect x="95" y="0" width="85" height="130" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <text x="137" y="20" text-anchor="middle" fill="#34d399" font-size="10" font-weight="900">2. BỪA / ĐẬP</text>
              <text x="137" y="38" text-anchor="middle" fill="#f8fafc" font-size="8">Làm nhỏ đất</text>
              <text x="103" y="60" fill="#94a3b8" font-size="7.5">&bull; Thu gom cỏ</text>
              <text x="103" y="75" fill="#94a3b8" font-size="7.5">&bull; Trộn đều phân</text>
              <text x="103" y="90" fill="#94a3b8" font-size="7.5">&bull; San phẳng mặt</text>
              <text x="103" y="105" fill="#94a3b8" font-size="7.5">&bull; Giữ độ ẩm</text>

              <rect x="190" y="0" width="85" height="130" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <text x="232" y="20" text-anchor="middle" fill="#34d399" font-size="10" font-weight="900">3. LÊN LUỐNG</text>
              <text x="232" y="38" text-anchor="middle" fill="#f8fafc" font-size="8">Tạo tầng đất</text>
              <text x="198" y="60" fill="#94a3b8" font-size="7.5">&bull; Dễ chăm sóc</text>
              <text x="198" y="75" fill="#94a3b8" font-size="7.5">&bull; Thoát nước tốt</text>
              <text x="198" y="90" fill="#94a3b8" font-size="7.5">&bull; Chống úng ngập</text>
              <text x="198" y="105" fill="#94a3b8" font-size="7.5">&bull; Cho cây củ/rau</text>

              <rect x="285" y="0" width="85" height="130" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2"/>
              <text x="327" y="20" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="900">4. BÓN LÓT</text>
              <text x="327" y="38" text-anchor="middle" fill="#fde68a" font-size="8">Trước khi gieo</text>
              <text x="293" y="60" fill="#fde68a" font-size="7.5">&bull; Phân chuồng hoai</text>
              <text x="293" y="75" fill="#fde68a" font-size="7.5">&bull; Phân lân</text>
              <text x="293" y="90" fill="#cbd5e1" font-size="7.5">&bull; Rải hoặc rạch hốc</text>
              <text x="293" y="105" fill="#cbd5e1" font-size="7.5">&bull; Cung cấp dinh dưỡng</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Thành phần và vai trò của đất trồng",
        content: `
          <p>Đất trồng là môi trường sống thiết yếu của cây, gồm 3 phần cấu thành gắn bó mật thiết:</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-1">
            <li><strong>Phần rắn:</strong> Gồm các hợp chất vô cơ (chất khoáng từ đá mẹ) và hợp chất hữu cơ (xác thực vật, vi sinh vật phân giải tạo mùn). Cung cấp đầy đủ các nguyên tố dinh dưỡng đa - trung - vi lượng cần thiết và giữ cho bộ rễ cây đứng vững chắc.</li>
            <li><strong>Phần lỏng:</strong> Là lượng nước chứa trong các mao quản của đất. Nước đóng vai trò hòa tan các chất dinh dưỡng dưới dạng ion để lông hút của rễ cây dễ dàng hấp thụ, đồng thời điều hòa nhiệt độ đất.</li>
            <li><strong>Phần khí:</strong> Là không khí nằm trong các khe hở của hạt đất, chứa nhiều oxygen cần thiết cho sự hô hấp của rễ cây và vi sinh vật có ích.</li>
          </ul>
          <div class="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 mt-2 text-xs">
            <strong>Mối liên hệ tương hỗ:</strong> Đất quá nén chặt khiến phần khí bị đẩy ra ngoài &rarr; rễ ngạt thở; đất quá khô thiếu phần lỏng &rarr; cây héo rũ; đất bị úng nước lâu ngày đẩy hết oxygen &rarr; rễ bị thối nhũn và cây có thể chết.
          </div>
        `
      },
      {
        heading: "2. Kĩ thuật làm đất trồng cây",
        content: `
          <p>Làm đất là công đoạn đầu tiên trong quy trình canh tác, nhằm cải tạo tính chất lí học và sinh học của đất:</p>
          <ul class="list-disc pl-5 space-y-1.5 mt-1">
            <li><strong>Cày đất:</strong> Dùng máy cày hoặc lưỡi cày xới xáo lớp đất mặt ở độ sâu tiêu chuẩn từ <strong>20 &ndash; 30 cm</strong>. Mục đích: Tăng bề dày tầng canh tác, làm tơi xốp đất, thoáng khí và vùi lấp tàn dư cỏ dại, mầm mống sâu bệnh xuống tầng sâu để tiêu diệt.</li>
            <li><strong>Bừa hoặc đập đất:</strong> Làm vụn nhỏ các cục đất to, thu gom sạch rễ cỏ dại sót lại, trộn đều phân bón và san phẳng bề mặt ruộng vườn, tạo độ ẩm đồng đều cho hạt nảy mầm.</li>
            <li><strong>Lên luống:</strong> Vun đất thành các luống cao (thường rộng 0.8 &ndash; 1.2m, cao 15 &ndash; 30cm). Mục đích: Tạo tầng đất tơi dày cho rễ và củ phát triển, thuận tiện cho việc đi lại chăm sóc, bón phân, tưới nước và đặc biệt giúp thoát nước nhanh chóng khi mưa lớn, tránh ngập úng gốc cây.</li>
          </ul>
        `
      },
      {
        heading: "3. Kĩ thuật bón phân lót",
        content: `
          <p><strong>Khái niệm &amp; Mục đích:</strong> Bón phân lót là việc bón phân vào đất <em>ngay trước khi gieo hạt hoặc đặt cây con</em>. Mục đích là chuẩn bị sẵn nguồn dưỡng chất dự trữ trong đất để cây non hấp thụ ngay khi rễ vừa nhú ra, giúp cây con bén rễ nhanh và sinh trưởng khỏe mạnh ngay từ đầu.</p>
          <p class="mt-2"><strong>Loại phân thường dùng:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Phân hữu cơ hoai mục</strong> (phân chuồng ủ hoai, phân trùn quế, phân compost): Cung cấp mùn, cải tạo kết cấu xốp của đất và giải phóng dinh dưỡng từ từ.</li>
            <li><strong>Phân lân:</strong> Kích thích bộ rễ phát triển mạnh ăn sâu và rộng, tăng sức chống rét, chống hạn cho cây con.</li>
          </ul>
          <p class="mt-2"><strong>Phương pháp bón:</strong> Rải đều khắp mặt ruộng rồi bừa xới trộn sâu vào đất; hoặc bón tập trung theo hàng/theo từng hốc trồng. <em>Lưu ý kĩ thuật:</em> Cần lấp một lớp đất mỏng cách li phân lót với hạt giống hoặc rễ cây non để tránh hiện tượng sót rễ do nồng độ phân bón cao.</p>
        `
      }
    ],
    application: "Thiết kế quy trình chuẩn bị đất trồng một chậu rau hoặc hoa tại nhà: Lựa chọn đất thịt pha cát trộn giá thể xơ dừa, đập nhỏ đất, nhặt sạch sỏi đá và cỏ dại, kiểm tra lỗ thoát nước dưới đáy chậu, lót một lớp phân trùn quế/hữu cơ hoai mục dưới đáy và tưới ẩm đều trước khi gieo hạt.",
    quizzes: [
      {
        q: "Thành phần nào của đất trồng đóng vai trò cung cấp khí oxygen giúp rễ cây hô hấp?",
        opts: ["Phần khí", "Phần lỏng", "Phần rắn", "Phần hữu cơ"],
        ans: 0,
        explain: "Phần khí chứa trong các khe hở của đất chứa oxygen cần thiết cho sự hô hấp của bộ rễ và các sinh vật có ích trong đất."
      },
      {
        q: "Độ sâu tiêu chuẩn khi thực hiện cày đất lớp mặt thường là bao nhiêu?",
        opts: ["Khoảng 20–30 cm", "Khoảng 5–10 cm", "Khoảng 50–70 cm", "Khoảng 1–2 mét"],
        ans: 0,
        explain: "Cày đất lớp mặt ở độ sâu 20–30 cm giúp xới xáo tầng đất canh tác màu mỡ, vùi cỏ dại và làm thoáng đất."
      }
    ]
  },

  // ==================== BÀI 3 ====================
  {
    chapter: "Chương I: Trồng trọt",
    chapterTag: "CHƯƠNG 1",
    chapterColor: "bg-emerald-600",
    id: "bai-3",
    lessonNum: "Bài 3",
    title: "Bài 3. Gieo trồng, chăm sóc và phòng trừ sâu, bệnh cho cây trồng",
    pages: "SGK tr. 14–18",
    objective: "Trình bày hình thức và yêu cầu gieo trồng; giải thích công việc chăm sóc; nêu nguyên tắc và các biện pháp phòng trừ sâu bệnh; vận dụng bảo đảm an toàn lao động và môi trường.",
    mindmap: {
      nodes: [
        { title: "GIEO TRỒNG", desc: "Gieo hạt, trồng cây con; bảo đảm thời vụ, mật độ, khoảng cách, độ sâu", color: "#059669" },
        { title: "CHĂM SÓC", desc: "Tỉa dặm, làm cỏ, vun xới, tưới tiêu nước, bón phân thúc", color: "#10b981" },
        { title: "PHÒNG TRỪ SÂU BỆNH", desc: "Nguyên tắc phòng là chính; biện pháp canh tác, thủ công, sinh học, hóa học", color: "#d97706" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 3: BIỆN PHÁP PHÒNG TRỪ VÀ AN TOÀN BVTV -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-emerald-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-emerald-500/20">
          <span class="text-xs font-bold text-emerald-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-shield-virus"></i> Hình 3: 5 Biện Pháp Phòng Trừ Sâu Bệnh &amp; Nguyên Tắc 4 Đúng Của Thuốc BVTV
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 14–18</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 220" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <!-- 5 Biện pháp -->
            <rect x="15" y="15" width="480" height="190" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
            <rect x="25" y="25" width="460" height="24" rx="5" fill="#065f46"/>
            <text x="255" y="41" text-anchor="middle" fill="#a7f3d0" font-size="11" font-weight="900">5 BIỆN PHÁP PHÒNG TRỪ TỔNG HỢP (IPM)</text>

            <g transform="translate(25, 60)">
              <rect x="0" y="0" width="85" height="130" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <text x="42" y="18" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="900">1. CANH TÁC</text>
              <text x="6" y="40" fill="#cbd5e1" font-size="7.5">&bull; Luân canh cây</text>
              <text x="6" y="58" fill="#cbd5e1" font-size="7.5">&bull; Giống chống chịu</text>
              <text x="6" y="76" fill="#cbd5e1" font-size="7.5">&bull; Gieo đúng vụ</text>
              <text x="6" y="94" fill="#cbd5e1" font-size="7.5">&bull; Vệ sinh đồng</text>
              <text x="42" y="118" text-anchor="middle" fill="#34d399" font-size="7.5" font-weight="700">Hiệu quả lâu dài</text>

              <rect x="95" y="0" width="85" height="130" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <text x="137" y="18" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="900">2. THỦ CÔNG</text>
              <text x="101" y="40" fill="#cbd5e1" font-size="7.5">&bull; Bắt sâu bằng tay</text>
              <text x="101" y="58" fill="#cbd5e1" font-size="7.5">&bull; Ngắt lá bị bệnh</text>
              <text x="101" y="76" fill="#cbd5e1" font-size="7.5">&bull; Bẫy đèn, bẫy bả</text>
              <text x="101" y="94" fill="#cbd5e1" font-size="7.5">&bull; Vợt bắt côn trùng</text>
              <text x="137" y="118" text-anchor="middle" fill="#34d399" font-size="7.5" font-weight="700">Dễ làm, tốn công</text>

              <rect x="190" y="0" width="85" height="130" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
              <text x="232" y="18" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="900">3. SINH HỌC</text>
              <text x="196" y="40" fill="#e0f2fe" font-size="7.5">&bull; Ong mắt đỏ</text>
              <text x="196" y="58" fill="#e0f2fe" font-size="7.5">&bull; Bọ rùa ăn rệp</text>
              <text x="196" y="76" fill="#e0f2fe" font-size="7.5">&bull; Chim, ếch, nhái</text>
              <text x="196" y="94" fill="#e0f2fe" font-size="7.5">&bull; Nấm trừ sâu BT</text>
              <text x="232" y="118" text-anchor="middle" fill="#38bdf8" font-size="7.5" font-weight="800">Thân thiện môi trường</text>

              <rect x="285" y="0" width="85" height="130" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="1"/>
              <text x="327" y="18" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="900">4. HÓA HỌC</text>
              <text x="291" y="40" fill="#fecaca" font-size="7.5">&bull; Thuốc BVTV</text>
              <text x="291" y="58" fill="#fecaca" font-size="7.5">&bull; Diệt sâu nhanh</text>
              <text x="291" y="76" fill="#cbd5e1" font-size="7.5">&bull; Dập tắt dịch lớn</text>
              <text x="291" y="94" fill="#cbd5e1" font-size="7.5">&bull; Dễ gây ngộ độc</text>
              <text x="327" y="118" text-anchor="middle" fill="#ef4444" font-size="7.5" font-weight="800">Chỉ dùng khi cần</text>

              <rect x="380" y="0" width="85" height="130" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
              <text x="422" y="18" text-anchor="middle" fill="#fde68a" font-size="9" font-weight="900">5. KIỂM DỊCH</text>
              <text x="386" y="40" fill="#cbd5e1" font-size="7.5">&bull; Soát nông sản</text>
              <text x="386" y="58" fill="#cbd5e1" font-size="7.5">&bull; Xuất nhập khẩu</text>
              <text x="386" y="76" fill="#cbd5e1" font-size="7.5">&bull; Ngăn dịch bệnh lây lan vùng</text>
              <text x="422" y="118" text-anchor="middle" fill="#f59e0b" font-size="7.5" font-weight="700">Ngăn lây lan</text>
            </g>

            <!-- Quy tắc an toàn thuốc BVTV -->
            <rect x="515" y="15" width="290" height="190" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
            <rect x="525" y="25" width="270" height="24" rx="5" fill="#7f1d1d"/>
            <text x="660" y="41" text-anchor="middle" fill="#fecaca" font-size="11" font-weight="900">AN TOÀN THUỐC BẢO VỆ THỰC VẬT</text>
            <text x="530" y="70" fill="#f87171" font-size="9.5" font-weight="800">&bull; Nguyên tắc 4 Đúng:</text>
            <text x="530" y="85" fill="#f8fafc" font-size="8.5">Đúng thuốc &bull; Đúng lúc &bull; Đúng nồng độ liều lượng &bull; Đúng cách.</text>
            <text x="530" y="108" fill="#f87171" font-size="9.5" font-weight="800">&bull; Trang bị bảo hộ:</text>
            <text x="530" y="123" fill="#cbd5e1" font-size="8.5">Găng tay, kính mắt, khẩu trang, áo dài tay chống thấm.</text>
            <text x="530" y="145" fill="#f87171" font-size="9.5" font-weight="800">&bull; Điều cấm:</text>
            <text x="530" y="160" fill="#fca5a5" font-size="8.2">Không phun ngược gió; không đổ bao bì ra nguồn nước.</text>
            <rect x="525" y="172" width="270" height="22" rx="4" fill="#991b1b"/>
            <text x="660" y="187" text-anchor="middle" fill="#ffffff" font-size="8.2" font-weight="900">⚠️ Học sinh TUYỆT ĐỐI KHÔNG tự pha/phun thuốc hóa học</text>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Kĩ thuật gieo trồng cây nông nghiệp",
        content: `
          <p><strong>Hình thức gieo trồng:</strong> Gồm gieo hạt trực tiếp, trồng bằng cây con có rễ, hoặc trồng bằng củ, đoạn thân cành (như mía, sắn, khoai lang).</p>
          <p class="mt-2"><strong>Yêu cầu kĩ thuật cốt lõi:</strong> Phải bảo đảm 4 yếu tố: <em>Thời vụ &bull; Mật độ &bull; Khoảng cách &bull; Độ nông sâu</em>.</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Hạt nhỏ (hạt cải, xà lách): Gieo trên mặt đất ẩm tơi xốp, phủ lớp trấu/tro mỏng rồi tưới phun sương nhẹ.</li>
            <li>Hạt lớn (ngô, đậu phộng): Vùi sâu gấp 2 &ndash; 3 lần đường kính của hạt, lấp đất đều và không nén quá chặt làm ngạt mầm.</li>
            <li>Trồng cây con: Đặt cây thẳng đứng, độ sâu ngang cổ rễ, nén đất nhẹ quanh gốc giữ cây đứng vững và tưới nước ngay sau khi trồng.</li>
          </ul>
          <p class="mt-2 text-xs text-gray-700 dark:text-gray-300"><strong>Các thời vụ chính ở nước ta:</strong> Vụ đông xuân (tháng 11 đến tháng 4 năm sau), vụ hè thu (tháng 4 &ndash; 7), vụ mùa (tháng 7 &ndash; 11). Miền Bắc có thêm <em>vụ đông</em> (tháng 10 &ndash; 12) rất thích hợp cho các loại cây ưa lạnh như ngô, khoai tây, bắp cải, su hào, súp lơ.</p>
        `
      },
      {
        heading: "2. Quy trình chăm sóc cây trồng",
        content: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Tỉa và dặm cây:</strong> Tỉa bỏ cây còi cọc, yếu ớt, bị sâu bệnh hại, tỉa bớt nơi quá dày; dặm cây con khỏe mạnh vào những khoảng trống bị chết để duy trì mật độ và khoảng cách tối ưu.</li>
            <li><strong>Làm cỏ và vun xới:</strong> Làm sạch cỏ dại nhằm triệt tiêu sự cạnh tranh nước, ánh sáng, phân bón và loại bỏ nơi trú ẩn của sâu bệnh; vun xới đất giúp gốc đứng vững, rễ hô hấp tốt.</li>
            <li><strong>Tưới và tiêu nước:</strong> Cung cấp nước đầy đủ theo từng giai đoạn phát triển (nhất là thời kì ra hoa, tạo quả); tiêu thoát nước kịp thời khi mưa bão ngập úng tránh thối rễ.</li>
            <li><strong>Bón phân thúc:</strong> Bổ sung dinh dưỡng đa lượng (đạm, kali) trong các giai đoạn phát triển cành lá, phân hóa mầm hoa và nuôi quả. Cần làm sạch cỏ trước khi bón và vùi phân lấp đất tránh bốc hơi rửa trôi.</li>
          </ul>
        `
      },
      {
        heading: "3. Nguyên tắc và các biện pháp phòng trừ sâu, bệnh",
        content: `
          <p><strong>Nguyên tắc vàng:</strong> <em>Phòng là chính; trừ sớm, kịp thời và triệt để; phối hợp đồng bộ nhiều biện pháp.</em></p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs">
            <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700">
              <span class="font-bold text-emerald-600 block">Biện pháp canh tác</span>
              Vệ sinh đồng ruộng, gieo đúng thời vụ, bón phân cân đối, luân canh cây trồng khác họ giúp cắt đứt chu kì sinh trưởng của sâu bệnh.
            </div>
            <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700">
              <span class="font-bold text-teal-600 block">Biện pháp thủ công</span>
              Bắt sâu, bẫy đèn, bẫy dính màu vàng, ngắt bỏ cành lá mang ổ trứng sâu. Hiệu quả cao khi sâu bệnh mới phát sinh diện hẹp.
            </div>
            <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700">
              <span class="font-bold text-blue-600 block">Biện pháp sinh học</span>
              Bảo vệ thiên địch (bọ rùa ăn rệp, ong mắt đỏ kí sinh trứng sâu đục thân, chim sâu, ếch nhái); phun chế phẩm vi sinh (vi khuẩn Bt, nấm trắng). An toàn cho con người và hệ sinh thái.
            </div>
            <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-gray-800 border border-slate-200 dark:border-gray-700">
              <span class="font-bold text-rose-600 block">Biện pháp hóa học</span>
              Sử dụng thuốc BVTV để dập dịch nhanh chóng khi mật độ sâu bệnh vượt ngưỡng gây hại kinh tế. Nhược điểm: Dễ gây ngộ độc, ô nhiễm nguồn nước và đất.
            </div>
          </div>
        `
      },
      {
        heading: "4. Quy tắc an toàn khi sử dụng thuốc bảo vệ thực vật",
        content: `
          <p>Chỉ sử dụng thuốc có trong danh mục cho phép. Tuân thủ nghiêm ngặt <strong>Nguyên tắc 4 đúng: Đúng thuốc &bull; Đúng nồng độ liều lượng &bull; Đúng lúc &bull; Đúng cách</strong>.</p>
          <ul class="list-disc pl-5 space-y-1 mt-1 text-xs">
            <li>Tuân thủ thời gian cách li ghi trên nhãn thuốc trước khi thu hoạch để nông sản không còn dư lượng độc hại.</li>
            <li>Mang đầy đủ đồ bảo hộ: Quần áo dài tay chống thấm, găng tay cao su, ủng, kính bảo hộ và khẩu trang hoạt tính.</li>
            <li>Không phun ngược chiều gió; không phun khi trời sắp mưa hoặc lúc trưa nắng gắt.</li>
            <li>Thu gom bao bì, vỏ chai thuốc đúng bể chứa quy định; không rửa bình xịt hoặc đổ dung dịch thừa vào kênh mương, ao hồ.</li>
          </ul>
          <div class="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-300 font-bold text-xs mt-2">
            ⚠️ Lưu ý an toàn cho học sinh: Học sinh tuyệt đối không được tự ý pha chế, tiếp xúc hoặc phun thuốc bảo vệ thực vật hóa học.
          </div>
        `
      }
    ],
    application: "Quan sát một chậu cây hoặc vườn rau ở nhà, phát hiện dấu hiệu sâu hại (lá bị thủng, có rệp bám) hoặc bệnh hại (đốm vàng, xoăn lá). Áp dụng ngay biện pháp thủ công (bắt sâu, lau sạch rệp bằng nước rửa chén pha loãng hoặc ngắt lá bệnh) và báo cho người lớn nếu tình trạng lây lan rộng.",
    quizzes: [
      {
        q: "Biện pháp phòng trừ sâu bệnh nào sử dụng các loài thiên địch như bọ rùa, ong mắt đỏ hoặc chế phẩm vi sinh?",
        opts: ["Biện pháp sinh học", "Biện pháp hóa học", "Biện pháp kiểm dịch thực vật", "Biện pháp thủ công"],
        ans: 0,
        explain: "Biện pháp sinh học sử dụng các loài sinh vật có ích (thiên địch) hoặc nấm, vi khuẩn có lợi để khống chế dịch hại."
      },
      {
        q: "Khi hạt giống có kích thước lớn như hạt ngô, hạt đậu phộng, độ sâu gieo hạt thích hợp là bao nhiêu?",
        opts: ["Gấp 2–3 lần đường kính hạt", "Gieo nông ngay trên bề mặt", "Vùi sâu từ 15–20 cm", "Vùi sâu càng nhiều càng tốt"],
        ans: 0,
        explain: "Hạt lớn vùi sâu gấp 2–3 lần đường kính giúp rễ giữ đất ẩm tốt mà mầm vẫn dễ dàng vươn lên mặt đất."
      }
    ]
  },

  // ==================== BÀI 4 ====================
  {
    chapter: "Chương I: Trồng trọt",
    chapterTag: "CHƯƠNG 1",
    chapterColor: "bg-emerald-600",
    id: "bai-4",
    lessonNum: "Bài 4",
    title: "Bài 4. Thu hoạch sản phẩm trồng trọt",
    pages: "SGK tr. 19–20",
    objective: "Nêu mục đích và yêu cầu thu hoạch; nhận biết các phương pháp phổ biến; vận dụng cách thu hoạch phù hợp cho từng loại sản phẩm nông sản.",
    mindmap: {
      nodes: [
        { title: "MỤC ĐÍCH & YÊU CẦU", desc: "Hạn chế thất thoát, giữ phẩm chất; Đúng lúc, nhanh gọn, cẩn thận", color: "#059669" },
        { title: "PHƯƠNG PHÁP THU HOẠCH", desc: "Hái (quả, đậu), Nhổ (su hào, sắn), Đào (khoai), Cắt (lúa, hoa)", color: "#d97706" },
        { title: "BẢO QUẢN NÔNG SẢN", desc: "Bảo quản thường, bảo quản lạnh, bảo quản kín và hút chân không", color: "#2563eb" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 4: 4 PHƯƠNG PHÁP THU HOẠCH & BẢO QUẢN -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-emerald-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-emerald-500/20">
          <span class="text-xs font-bold text-emerald-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-basket-shopping"></i> Hình 4: 4 Phương Pháp Thu Hoạch &amp; Công Nghệ Bảo Quản Nông Sản
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 19–20</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 200" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <!-- 4 Phương pháp thu hoạch -->
            <rect x="15" y="15" width="450" height="170" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
            <rect x="25" y="25" width="430" height="24" rx="5" fill="#065f46"/>
            <text x="240" y="41" text-anchor="middle" fill="#a7f3d0" font-size="11" font-weight="900">4 PHƯƠNG PHÁP THU HOẠCH NÔNG SẢN PHỔ BIẾN</text>

            <g transform="translate(25, 60)">
              <rect x="0" y="0" width="100" height="110" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <text x="50" y="22" text-anchor="middle" fill="#34d399" font-size="11" font-weight="900">1. HÁI</text>
              <circle cx="50" cy="50" r="16" fill="#10b981" fill-opacity="0.2"/>
              <text x="50" y="56" text-anchor="middle" fill="#6ee7b7" font-size="16">🍎</text>
              <text x="50" y="80" text-anchor="middle" fill="#f8fafc" font-size="8.5">Cam, nhãn, đậu,</text>
              <text x="50" y="94" text-anchor="middle" fill="#cbd5e1" font-size="8">chôm chôm, rau</text>

              <rect x="110" y="0" width="100" height="110" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <text x="160" y="22" text-anchor="middle" fill="#34d399" font-size="11" font-weight="900">2. NHỔ</text>
              <circle cx="160" cy="50" r="16" fill="#10b981" fill-opacity="0.2"/>
              <text x="160" y="56" text-anchor="middle" fill="#6ee7b7" font-size="16">🥕</text>
              <text x="160" y="80" text-anchor="middle" fill="#f8fafc" font-size="8.5">Su hào, cà rốt,</text>
              <text x="160" y="94" text-anchor="middle" fill="#cbd5e1" font-size="8">lạc (đậu phộng), sắn</text>

              <rect x="220" y="0" width="100" height="110" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <text x="270" y="22" text-anchor="middle" fill="#34d399" font-size="11" font-weight="900">3. ĐÀO</text>
              <circle cx="270" cy="50" r="16" fill="#10b981" fill-opacity="0.2"/>
              <text x="270" y="56" text-anchor="middle" fill="#6ee7b7" font-size="16">🥔</text>
              <text x="270" y="80" text-anchor="middle" fill="#f8fafc" font-size="8.5">Khoai tây,</text>
              <text x="270" y="94" text-anchor="middle" fill="#cbd5e1" font-size="8">khoai lang, củ mài</text>

              <rect x="330" y="0" width="100" height="110" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <text x="380" y="22" text-anchor="middle" fill="#34d399" font-size="11" font-weight="900">4. CẮT</text>
              <circle cx="380" cy="50" r="16" fill="#10b981" fill-opacity="0.2"/>
              <text x="380" y="56" text-anchor="middle" fill="#6ee7b7" font-size="16">🌾</text>
              <text x="380" y="80" text-anchor="middle" fill="#f8fafc" font-size="8.5">Lúa, hoa tươi,</text>
              <text x="380" y="94" text-anchor="middle" fill="#cbd5e1" font-size="8">bắp cải, mía</text>
            </g>

            <!-- 4 Phương pháp bảo quản -->
            <rect x="480" y="15" width="325" height="170" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
            <rect x="490" y="25" width="305" height="24" rx="5" fill="#0369a1"/>
            <text x="642" y="41" text-anchor="middle" fill="#bae6fd" font-size="11" font-weight="900">CÁC PHƯƠNG PHÁP BẢO QUẢN NÔNG SẢN</text>

            <g transform="translate(495, 60)">
              <text x="10" y="18" fill="#38bdf8" font-size="9.5" font-weight="800">1. Bảo quản thông thường:</text>
              <text x="10" y="32" fill="#cbd5e1" font-size="8.5">Để nơi khô ráo, thoáng mát (hạt giống, thóc lúa, ngô phơi khô).</text>

              <text x="10" y="52" fill="#38bdf8" font-size="9.5" font-weight="800">2. Bảo quản lạnh (kho lạnh 0 - 5°C):</text>
              <text x="10" y="66" fill="#cbd5e1" font-size="8.5">Hạ nhiệt độ làm chậm hô hấp của rau, quả tươi, nấm tươi.</text>

              <text x="10" y="86" fill="#38bdf8" font-size="9.5" font-weight="800">3. Bảo quản kín &amp; Hút chân không:</text>
              <text x="10" y="100" fill="#cbd5e1" font-size="8.5">Hút hết oxygen, ngăn ngừa nấm mốc và mọt phá hoại.</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Mục đích và yêu cầu kĩ thuật khi thu hoạch",
        content: `
          <p>Thu hoạch là công đoạn hoàn tất chu kì sản xuất cây trồng, quyết định đến kết quả mùa vụ:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>Mục đích:</strong> Thu gom nông sản kịp thời để hạn chế tối đa thất thoát về số lượng và giữ trọn vẹn chất lượng dinh dưỡng của sản phẩm.</li>
            <li><strong>Yêu cầu kĩ thuật:</strong> Phải thu hoạch <em>đúng độ chín thương phẩm, nhanh, gọn và cẩn thận</em>; sử dụng công cụ, đồ đựng và phương pháp thích hợp nhằm tránh làm bầm dập, trầy xước vỏ làm vi khuẩn xâm nhập gây thối hỏng.</li>
          </ul>
        `
      },
      {
        heading: "2. Các phương pháp thu hoạch phổ biến",
        content: `
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Hái:</strong> Dùng tay hoặc kéo chuyên dụng bấm cuống nhẹ nhàng; áp dụng với các loại cây ăn quả (cam, xoài, nhãn, chôm chôm), quả rau (cà chua, ớt, đậu cô ve) hoặc ngọn rau.</li>
            <li><strong>Nhổ:</strong> Dùng tay nắm sát gốc nhổ dứt khoát; áp dụng cho các loại củ nông và cây thân thảo như su hào, củ cải, cà rốt, sắn, lạc.</li>
            <li><strong>Đào:</strong> Sử dụng cuốc, xẻng hoặc dĩa đào bới đất nhẹ nhàng tránh chém trúng củ; áp dụng cho khoai tây, khoai lang, gừng, nghệ.</li>
            <li><strong>Cắt:</strong> Dùng liềm, dao hoặc máy gặt; áp dụng cho lúa, bắp cải, mía, hoa tươi cắt cành.</li>
          </ul>
          <p class="mt-2 text-xs text-gray-500 dark:text-gray-400 italic">Hiện nay nhiều vùng chuyên canh ứng dụng máy gặt đập liên hợp hoặc máy thu hoạch chuyên dụng giúp nâng cao năng suất thu hoạch gấp hàng chục lần và giảm hao hụt.</p>
        `
      },
      {
        heading: "3. Bảo quản sản phẩm sau thu hoạch",
        content: `
          <p>Sau thu hoạch, nông sản vẫn tiếp tục các hoạt động hô hấp tế bào nên rất dễ suy giảm chất lượng nếu không được bảo quản đúng cách:</p>
          <ul class="list-disc pl-5 space-y-1 mt-1 text-xs">
            <li><strong>Bảo quản trong kho thông thường:</strong> Nông sản (thóc, đỗ, ngô) cần được phơi/sấy đạt độ ẩm tiêu chuẩn (< 13%), cất giữ nơi khô ráo, thoáng khí, chống ẩm mốc và chuột bọ.</li>
            <li><strong>Bảo quản lạnh:</strong> Duy trì nhiệt độ thấp thích hợp trong kho mát giúp làm chậm quá trình hô hấp và vi sinh vật gây hại, giữ rau củ quả tươi ngon lâu dài.</li>
            <li><strong>Bảo quản kín &amp; Hút chân không:</strong> Cách li hoàn toàn nông sản với không khí và hơi ẩm, ngăn chặn sự phát triển của nấm mốc và côn trùng.</li>
          </ul>
        `
      }
    ],
    application: "Quan sát một loại nông sản tại gia đình (như rau xanh, chuối chín hoặc khoai tây). Nêu dấu hiệu nhận biết khi nào nên thu hoạch, cách thu hoạch tránh dập nát và biện pháp bảo quản trong tủ lạnh hoặc nơi khô thoáng để sử dụng được lâu nhất.",
    quizzes: [
      {
        q: "Phương pháp thu hoạch nào phù hợp nhất đối với cây khoai tây và khoai lang?",
        opts: ["Đào", "Hái", "Nhổ", "Cắt"],
        ans: 0,
        explain: "Khoai tây và khoai lang mọc sâu dưới đất nên cần dùng cuốc hoặc máy chuyên dụng để đào bới tránh làm sứt mẻ củ."
      },
      {
        q: "Yêu cầu kĩ thuật quan trọng hàng đầu khi tiến hành thu hoạch nông sản là gì?",
        opts: ["Thu hoạch đúng độ chín, nhanh gọn và tránh dập nát", "Thu hoạch thật sớm khi quả còn non", "Thu hoạch vào giữa trưa nắng gắt", "Để nông sản rơi tự do xuống đất"],
        ans: 0,
        explain: "Thu hoạch đúng độ chín, cẩn thận tránh trầy xước dập nát giúp giữ trọn vẹn chất lượng và giá trị thương phẩm của nông sản."
      }
    ]
  },

  // ==================== BÀI 5 ====================
  {
    chapter: "Chương I: Trồng trọt",
    chapterTag: "CHƯƠNG 1",
    chapterColor: "bg-emerald-600",
    id: "bai-5",
    lessonNum: "Bài 5",
    title: "Bài 5. Nhân giống vô tính cây trồng",
    pages: "SGK tr. 21–23",
    objective: "Giải thích khái niệm nhân giống vô tính; phân biệt giâm, chiết, ghép và nuôi cấy mô; nêu và thực hiện thành thạo quy trình giâm cành; bảo đảm an toàn lao động.",
    mindmap: {
      nodes: [
        { title: "KHÁI NIỆM & ƯU ĐIỂM", desc: "Tạo cây mới từ cơ quan sinh dưỡng (thân, lá, rễ); giữ nguyên đặc tính cây mẹ", color: "#059669" },
        { title: "4 PHƯƠNG PHÁP", desc: "Giâm cành &bull; Chiết cành &bull; Ghép &bull; Nuôi cấy mô tế bào", color: "#10b981" },
        { title: "QUY TRÌNH GIÂM CÀNH", desc: "5 bước: Chọn cành bánh tẻ &rarr; Cắt vát &rarr; Nhúng kích rễ &rarr; Cắm cành &rarr; Chăm sóc", color: "#d97706" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 5: QUY TRÌNH 5 BƯỚC GIÂM CÀNH -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-emerald-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-emerald-500/20">
          <span class="text-xs font-bold text-emerald-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-scissors"></i> Hình 5: 4 Phương Pháp Nhân Giống Vô Tính &amp; Quy Trình 5 Bước Giâm Cành
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 21–23</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 220" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <!-- 5 Steps of Stem Cutting -->
            <rect x="15" y="15" width="790" height="190" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#065f46"/>
            <text x="410" y="41" text-anchor="middle" fill="#a7f3d0" font-size="11" font-weight="900">QUY TRÌNH 5 BƯỚC GIÂM CÀNH BÁNH TẺ TIÊU CHUẨN</text>

            <g transform="translate(30, 60)">
              <!-- Step 1 -->
              <rect x="0" y="0" width="140" height="130" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <circle cx="70" cy="22" r="14" fill="#10b981" fill-opacity="0.2"/>
              <text x="70" y="27" text-anchor="middle" fill="#34d399" font-size="11" font-weight="900">BƯỚC 1</text>
              <text x="70" y="48" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="800">CHỌN CÀNH</text>
              <text x="10" y="68" fill="#94a3b8" font-size="8">&bull; Chọn cành bánh tẻ</text>
              <text x="10" y="82" fill="#94a3b8" font-size="8">&bull; Không quá non/già</text>
              <text x="10" y="96" fill="#94a3b8" font-size="8">&bull; Khỏe, không sâu bệnh</text>
              <text x="10" y="110" fill="#6ee7b7" font-size="7.5" font-weight="700">&rarr; Cây mẹ năng suất cao</text>

              <!-- Step 2 -->
              <rect x="155" y="0" width="140" height="130" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <circle cx="225" cy="22" r="14" fill="#10b981" fill-opacity="0.2"/>
              <text x="225" y="27" text-anchor="middle" fill="#34d399" font-size="11" font-weight="900">BƯỚC 2</text>
              <text x="225" y="48" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="800">CẮT CÀNH</text>
              <text x="165" y="68" fill="#94a3b8" font-size="8">&bull; Dài 10 &ndash; 15 cm</text>
              <text x="165" y="82" fill="#94a3b8" font-size="8">&bull; Cắt vát góc chéo</text>
              <text x="165" y="96" fill="#94a3b8" font-size="8">&bull; Giữ 2 &ndash; 4 lá</text>
              <text x="165" y="110" fill="#6ee7b7" font-size="7.5" font-weight="700">&bull; Cắt bớt phiến lá (giảm thoát hơi)</text>

              <!-- Step 3 -->
              <rect x="310" y="0" width="140" height="130" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
              <circle cx="380" cy="22" r="14" fill="#38bdf8" fill-opacity="0.2"/>
              <text x="380" y="27" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="900">BƯỚC 3</text>
              <text x="380" y="48" text-anchor="middle" fill="#bae6fd" font-size="9" font-weight="800">XỬ LÍ KÍCH RỄ</text>
              <text x="320" y="68" fill="#e0f2fe" font-size="8">&bull; Nhúng gốc 1 &ndash; 2 cm</text>
              <text x="320" y="82" fill="#e0f2fe" font-size="8">&bull; Dung dịch kích rễ</text>
              <text x="320" y="96" fill="#e0f2fe" font-size="8">&bull; Ngâm trong 5 &ndash; 10 giây</text>
              <text x="320" y="110" fill="#38bdf8" font-size="7.5" font-weight="700">&rarr; Kích thích ra rễ nhanh</text>

              <!-- Step 4 -->
              <rect x="465" y="0" width="140" height="130" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <circle cx="535" cy="22" r="14" fill="#10b981" fill-opacity="0.2"/>
              <text x="535" y="27" text-anchor="middle" fill="#34d399" font-size="11" font-weight="900">BƯỚC 4</text>
              <text x="535" y="48" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="800">CẮM CÀNH</text>
              <text x="475" y="68" fill="#94a3b8" font-size="8">&bull; Cắm chếch vào đất ẩm</text>
              <text x="475" y="82" fill="#94a3b8" font-size="8">&bull; Sâu khoảng 3 &ndash; 5 cm</text>
              <text x="475" y="96" fill="#94a3b8" font-size="8">&bull; Khoảng cách 5x5 hoặc 10x10cm</text>
              <text x="475" y="110" fill="#6ee7b7" font-size="7.5" font-weight="700">&bull; Nén nhẹ quanh gốc</text>

              <!-- Step 5 -->
              <rect x="620" y="0" width="140" height="130" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <circle cx="690" cy="22" r="14" fill="#10b981" fill-opacity="0.2"/>
              <text x="690" y="27" text-anchor="middle" fill="#34d399" font-size="11" font-weight="900">BƯỚC 5</text>
              <text x="690" y="48" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="800">CHĂM SÓC</text>
              <text x="630" y="68" fill="#94a3b8" font-size="8">&bull; Tưới ẩm định kì</text>
              <text x="630" y="82" fill="#94a3b8" font-size="8">&bull; Che mát tránh nắng</text>
              <text x="630" y="96" fill="#94a3b8" font-size="8">&bull; Sau 10 &ndash; 15 ngày kiểm tra</text>
              <text x="630" y="110" fill="#6ee7b7" font-size="7.5" font-weight="700">&rarr; Rễ chuyển vàng &rarr; Đem trồng</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Khái niệm và các phương pháp nhân giống vô tính",
        content: `
          <p><strong>Khái niệm:</strong> Nhân giống vô tính là phương pháp tạo ra cây giống mới trực tiếp từ một bộ phận sinh dưỡng (thân, cành, lá, rễ) của cây mẹ. <em>Đặc điểm nổi bật:</em> Cây con giữ nguyên vẹn 100% các đặc tính di truyền quý giá của cây mẹ, nhanh ra hoa tạo quả và rút ngắn thời gian sinh trưởng so với gieo từ hạt.</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs">
            <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              <span class="font-bold text-emerald-800 dark:text-emerald-300 block">Giâm cành</span>
              Cắt một đoạn cành bánh tẻ khỏi cây mẹ, xử lí kích rễ và cắm vào giá thể ẩm để cành bén rễ, nảy chồi phát triển thành cây hoàn chỉnh (hoa hồng, rau ngót, sắn, mía).
            </div>
            <div class="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800">
              <span class="font-bold text-teal-800 dark:text-teal-300 block">Chiết cành</span>
              Bóc một khoanh vỏ trên cành cây đang sống, bó bầu đất ẩm quanh vết cắt để kích thích mọc rễ ngay trên cây mẹ; khi rễ già thì cắt cành đem trồng (cam, chanh, bưởi, nhãn).
            </div>
            <div class="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
              <span class="font-bold text-blue-800 dark:text-blue-300 block">Ghép cành / Ghép mắt</span>
              Gắn một phần của cây này (mắt ghép, chồi hoặc cành) vào gốc của một cây khác (gốc ghép) có bộ rễ khỏe, để nhựa nguyên từ gốc ghép nuôi phần ghép phát triển (xoài, mít, hoa giấy).
            </div>
            <div class="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
              <span class="font-bold text-purple-800 dark:text-purple-300 block">Nuôi cấy mô tế bào</span>
              Kĩ thuật nhân giống đỉnh cao trong phòng thí nghiệm vô trùng; từ một mẩu mô tế bào có thể nhân bản hàng triệu cây con sạch bệnh, đồng đều di truyền trong thời gian ngắn (hoa lan, chuối cấy mô).
            </div>
          </div>
        `
      },
      {
        heading: "2. Quy trình thực hành giâm cành tiêu chuẩn",
        content: `
          <ol class="list-decimal pl-5 space-y-1.5 text-xs">
            <li><strong>Bước 1 - Chọn cành:</strong> Chọn cành bánh tẻ (cành không quá non cũng không quá già), vỏ cành nhẵn bóng, mập mạp, các chồi nách khỏe và hoàn toàn không bị sâu bệnh gây hại.</li>
            <li><strong>Bước 2 - Cắt cành giâm:</strong> Dùng kéo cắt cành sắc bén cắt vát chéo một góc 45° thành từng đoạn dài khoảng <strong>10 &ndash; 15 cm</strong>, mỗi đoạn có từ 2 &ndash; 4 lá. Cắt tỉa bớt 1/2 phiến lá để giảm thiểu sự thoát hơi nước của cành giâm.</li>
            <li><strong>Bước 3 - Xử lí chất kích thích ra rễ:</strong> Nhúng phần gốc cành giâm sâu khoảng 1 &ndash; 2 cm vào dung dịch thuốc kích rễ (như N3M, Atonik) trong khoảng <strong>5 &ndash; 10 giây</strong> rồi vớt ra để ráo.</li>
            <li><strong>Bước 4 - Cắm cành vào giá thể:</strong> Cắm cành hơi chếch một góc nghiêng vào khay cát hoặc giá thể đất ẩm tơi xốp, độ sâu cắm cành từ <strong>3 &ndash; 5 cm</strong>; khoảng cách hàng và cây từ 5x5 cm hoặc 10x10 cm. Nén nhẹ quanh gốc.</li>
            <li><strong>Bước 5 - Chăm sóc cành giâm:</strong> Đặt khay giâm nơi râm mát, tưới phun sương giữ ẩm thường xuyên. Sau khoảng 10 &ndash; 15 ngày kiểm tra, khi rễ ra nhiều, chuyển từ màu trắng sang màu vàng nâu thì chuyển cây con ra vườn ươm hoặc trồng vào chậu.</li>
          </ol>
        `
      },
      {
        heading: "3. An toàn lao động và tiêu chí đánh giá",
        content: `
          <p class="text-xs">Sử dụng dao kéo cẩn thận, luôn hướng lưỡi cắt ra xa người; không đùa nghịch trong giờ thực hành; dung dịch kích thích ra rễ là hóa chất sinh trưởng nên tuyệt đối không được uống hay để dính vào mắt, miệng; sau khi thao tác phải rửa tay sạch bằng xà phòng.</p>
          <p class="text-xs mt-1"><strong>Tiêu chí đánh giá sản phẩm:</strong> Tỉ lệ cành sống sót cao (> 85%), cành ra nhiều rễ tơ trắng/vàng khỏe mạnh, chồi nách bật mầm xanh tốt và bộ rễ phát triển đồng đều.</p>
        `
      }
    ],
    application: "Thực hành giâm 5 cành hoa hồng hoặc rau ngót tại góc ban công/vườn nhà theo đúng quy trình 5 bước. Theo dõi và ghi nhật kí: Ngày giâm &bull; Thời gian bắt đầu nhú mầm &bull; Số ngày rễ hình thành &bull; Tỉ lệ cành sống thành công.",
    quizzes: [
      {
        q: "Khi cắt cành giâm, vì sao người ta thường cắt vát chéo và cắt bớt một phần phiến lá?",
        opts: ["Tăng diện tích tiếp xúc hút nước/ra rễ và giảm sự thoát hơi nước", "Để cành cắm sâu hơn và ngắm đẹp mắt hơn", "Để cành không bị gãy khi có gió to", "Để loại bỏ toàn bộ chất dinh dưỡng cũ"],
        ans: 0,
        explain: "Vết cắt vát làm tăng bề mặt tiếp xúc hút dung dịch/ra rễ; cắt bớt phiến lá giúp giảm thoát hơi nước qua khí khổng khi rễ chưa mọc."
      },
      {
        q: "Phương pháp nhân giống vô tính nào kích thích cành ra rễ ngay trên cây mẹ trước khi cắt rời?",
        opts: ["Chiết cành", "Giâm cành", "Gieo hạt", "Nuôi cấy mô"],
        ans: 0,
        explain: "Chiết cành là bóc khoanh vỏ và bó bầu đất ẩm quanh thân cành trên cây mẹ để rễ đâm ra rồi mới cắt rời đem trồng."
      }
    ]
  },

  // ==================== BÀI 6 ====================
  {
    chapter: "Chương I: Trồng trọt",
    chapterTag: "CHƯƠNG 1",
    chapterColor: "bg-emerald-600",
    id: "bai-6",
    lessonNum: "Bài 6",
    title: "Bài 6. Dự án trồng rau an toàn",
    pages: "SGK tr. 24–26",
    objective: "Lập kế hoạch và tính toán chi phí trồng một loại rau ở quy mô hộ gia đình; thực hiện thành thạo các công việc trồng, chăm sóc; bảo đảm an toàn lao động và vệ sinh môi trường.",
    mindmap: {
      nodes: [
        { title: "LẬP KẾ HOẠCH & DỰ TOÁN", desc: "Chọn loại rau, mùa vụ, chuẩn bị vật tư, lập bảng chi phí chi tiết", color: "#059669" },
        { title: "QUY TRÌNH TRỒNG RAU", desc: "Giá thể xơ dừa/đất sạch &rarr; Gieo trồng &rarr; Chăm sóc định kì &rarr; Thu hoạch", color: "#10b981" },
        { title: "ĐÁNH GIÁ & BÁO CÁO", desc: "Nhật kí theo dõi, bảng tính chi phí, sản phẩm rau sạch an toàn", color: "#047857" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 6: SƠ ĐỒ DỰ ÁN TRỒNG RAU AN TOÀN -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-emerald-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-emerald-500/20">
          <span class="text-xs font-bold text-emerald-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-list-check"></i> Hình 6: Sơ Đồ Quy Trình Dự Án Trồng Rau An Toàn &amp; Mẫu Dự Toán
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 24–26</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 200" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="170" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#065f46"/>
            <text x="410" y="41" text-anchor="middle" fill="#a7f3d0" font-size="11" font-weight="900">4 BƯỚC THỰC HIỆN DỰ ÁN TRỒNG RAU SẠCH TẠI NHÀ</text>

            <g transform="translate(30, 60)">
              <!-- Step 1 -->
              <rect x="0" y="0" width="175" height="110" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <text x="87" y="20" text-anchor="middle" fill="#34d399" font-size="10" font-weight="900">1. CHUẨN BỊ VẬT TƯ</text>
              <text x="10" y="40" fill="#f8fafc" font-size="8">&bull; Thùng xốp đục lỗ thoát</text>
              <text x="10" y="55" fill="#f8fafc" font-size="8">&bull; Đất sạch / Giá thể xơ dừa</text>
              <text x="10" y="70" fill="#f8fafc" font-size="8">&bull; Phân trùn quế / vi sinh</text>
              <text x="10" y="85" fill="#f8fafc" font-size="8">&bull; Hạt giống có xuất xứ rõ</text>
              <text x="10" y="100" fill="#6ee7b7" font-size="7.5" font-weight="700">&rarr; Dự toán chi phí chi tiết</text>

              <!-- Step 2 -->
              <rect x="195" y="0" width="175" height="110" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <text x="282" y="20" text-anchor="middle" fill="#34d399" font-size="10" font-weight="900">2. GIEO HẠT / TRỒNG</text>
              <text x="205" y="40" fill="#f8fafc" font-size="8">&bull; Đổ đất cách miệng 5–7cm</text>
              <text x="205" y="55" fill="#f8fafc" font-size="8">&bull; Ngâm ủ hạt giống ấm</text>
              <text x="205" y="70" fill="#f8fafc" font-size="8">&bull; Gieo hàng / rạch luống nhỏ</text>
              <text x="205" y="85" fill="#f8fafc" font-size="8">&bull; Phủ lớp trấu mỏng</text>
              <text x="205" y="100" fill="#6ee7b7" font-size="7.5" font-weight="700">&rarr; Tưới phun sương giữ ẩm</text>

              <!-- Step 3 -->
              <rect x="390" y="0" width="175" height="110" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <text x="477" y="20" text-anchor="middle" fill="#34d399" font-size="10" font-weight="900">3. CHĂM SÓC AN TOÀN</text>
              <text x="400" y="40" fill="#f8fafc" font-size="8">&bull; Tưới sáng sớm / chiều mát</text>
              <text x="400" y="55" fill="#f8fafc" font-size="8">&bull; Tỉa bớt cây còi cọc</text>
              <text x="400" y="70" fill="#f8fafc" font-size="8">&bull; Bắt sâu bằng tay mỗi ngày</text>
              <text x="400" y="85" fill="#f8fafc" font-size="8">&bull; Bón phân vi sinh định kì</text>
              <text x="400" y="100" fill="#ef4444" font-size="7.5" font-weight="700">🚫 Không dùng thuốc hóa học</text>

              <!-- Step 4 -->
              <rect x="585" y="0" width="175" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
              <text x="672" y="20" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="900">4. THU HOẠCH &amp; ĐÁNH GIÁ</text>
              <text x="595" y="40" fill="#e0f2fe" font-size="8">&bull; Thu hoạch tỉa hoặc cả bụi</text>
              <text x="595" y="55" fill="#e0f2fe" font-size="8">&bull; Cắt sát gốc bằng kéo sạch</text>
              <text x="595" y="70" fill="#e0f2fe" font-size="8">&bull; Cân đo sản lượng thu được</text>
              <text x="595" y="85" fill="#e0f2fe" font-size="8">&bull; Hoàn thiện sổ nhật kí dự án</text>
              <text x="672" y="100" text-anchor="middle" fill="#7dd3fc" font-size="7.5" font-weight="800">Sản phẩm an toàn 100%</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Lập kế hoạch và dự toán chi phí dự án",
        content: `
          <p class="text-xs">Để thực hiện dự án trồng rau an toàn đạt hiệu quả cao, cần tiến hành khảo sát và lập bảng dự toán chi tiết:</p>
          <div class="overflow-x-auto mt-2">
            <table class="w-full text-left text-xs border border-gray-200 dark:border-gray-700">
              <thead class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold">
                <tr>
                  <th class="p-2 border">STT</th>
                  <th class="p-2 border">Hạng mục vật tư</th>
                  <th class="p-2 border">Số lượng</th>
                  <th class="p-2 border">Đơn giá (VNĐ)</th>
                  <th class="p-2 border">Thành tiền (VNĐ)</th>
                  <th class="p-2 border">Ghi chú</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                <tr><td class="p-2 border">1</td><td class="p-2 border font-medium">Hạt giống rau muống / cải ngọt</td><td class="p-2 border">1 gói (50g)</td><td class="p-2 border">15.000</td><td class="p-2 border">15.000</td><td class="p-2 border">Bao bì nguyên vẹn</td></tr>
                <tr><td class="p-2 border">2</td><td class="p-2 border font-medium">Thùng xốp trồng cây</td><td class="p-2 border">2 thùng</td><td class="p-2 border">0 (Tận dụng)</td><td class="p-2 border">0</td><td class="p-2 border">Đục lỗ thoát nước</td></tr>
                <tr><td class="p-2 border">3</td><td class="p-2 border font-medium">Đất dinh dưỡng hữu cơ (Tribat)</td><td class="p-2 border">2 bao (20dm³)</td><td class="p-2 border">35.000</td><td class="p-2 border">70.000</td><td class="p-2 border">Đất sạch sạch nấm bệnh</td></tr>
                <tr><td class="p-2 border">4</td><td class="p-2 border font-medium">Phân trùn quế vi sinh</td><td class="p-2 border">1 bao (2kg)</td><td class="p-2 border">25.000</td><td class="p-2 border">25.000</td><td class="p-2 border">Bón lót và bón thúc</td></tr>
                <tr><td class="p-2 border">5</td><td class="p-2 border font-medium">Bình tưới vòi sen / phun sương</td><td class="p-2 border">1 chiếc</td><td class="p-2 border">25.000</td><td class="p-2 border">25.000</td><td class="p-2 border">Dùng nhiều lần</td></tr>
                <tr class="font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300">
                  <td class="p-2 border" colspan="4">TỔNG CHI PHÍ DỰ KIẾN DỰ ÁN</td>
                  <td class="p-2 border" colspan="2">135.000 VNĐ</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "2. Quy trình kĩ thuật trồng và chăm sóc rau an toàn",
        content: `
          <ul class="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Chuẩn bị giá thể:</strong> Đổ đất sạch/giá thể vào thùng xốp, cách miệng thùng từ 5 &ndash; 7 cm để khi tưới đất không bị tràn ra ngoài.</li>
            <li><strong>Gieo hạt:</strong> Ngâm hạt giống trong nước ấm (2 sôi 3 lạnh) trong 3 &ndash; 4 giờ; rạch các hàng nông cách nhau 10 cm, rải đều hạt, lấp lớp đất mỏng 0.5 cm và tưới ẩm nhẹ.</li>
            <li><strong>Chăm sóc:</strong> Đặt chậu nơi có đủ ánh sáng mặt trời; tưới nước 2 lần/ngày vào sáng sớm và chiều muộn; tuyệt đối không để ứ đọng nước ngập úng; bắt sâu bằng tay vào sáng sớm; bón bổ sung phân trùn quế sau mỗi lứa thu hoạch.</li>
            <li><strong>Thu hoạch:</strong> Sau 25 &ndash; 30 ngày (với rau muống, cải), dùng dao hoặc kéo sạch cắt ngang cách gốc 2 &ndash; 3 cm để cây tiếp tục đâm nhánh cho lứa sau.</li>
          </ul>
        `
      },
      {
        heading: "3. Mẫu nhật kí theo dõi và đánh giá dự án",
        content: `
          <p class="text-xs">Nhật kí cần ghi rõ: Ngày thực hiện &bull; Công việc đã làm &bull; Tình trạng sinh trưởng (chiều cao, số lá, độ xanh) &bull; Tình hình sâu bệnh &bull; Kế hoạch tiếp theo.</p>
          <p class="text-xs mt-1"><strong>Báo cáo tổng kết:</strong> Học sinh trình bày báo cáo bằng sản phẩm rau thật, hình ảnh chụp tiến trình hoặc video clip ngắn ghi lại các công đoạn, kèm theo bảng đối chiếu chi phí thực tế với dự toán ban đầu.</p>
        `
      }
    ],
    application: "Tổ chức trồng thử nghiệm một thùng xốp rau cải mầm hoặc rau muống tại ban công. Tính toán chi phí đầu tư và khối lượng rau sạch thu hoạch được để đánh giá hiệu quả kinh tế so với việc mua rau ngoài chợ.",
    quizzes: [
      {
        q: "Khi trồng rau trong thùng xốp tại nhà, một thao tác kĩ thuật BẮT BUỘC phải thực hiện trước khi cho đất vào là gì?",
        opts: ["Đục các lỗ nhỏ gần đáy thùng để thoát nước chống úng", "Sơn màu đỏ quanh thùng xốp", "Bịt kín hoàn toàn đáy thùng", "Lót nilon kín xung quanh"],
        ans: 0,
        explain: "Phải đục lỗ thoát nước để tránh nước mưa hoặc nước tưới ứ đọng làm ngạt khí và thối rữa bộ rễ rau."
      },
      {
        q: "Khoảng cách đổ đất vào thùng xốp trồng rau cách miệng thùng khoảng bao nhiêu là hợp lí?",
        opts: ["Cách miệng khoảng 5–7 cm", "Đổ ngang bằng mép miệng thùng", "Chỉ đổ một lớp mỏng 1 cm", "Đổ tràn miệng thùng"],
        ans: 0,
        explain: "Cách miệng 5–7 cm giúp nước tưới và đất không bị trào ra ngoài sàn nhà khi tưới nước."
      }
    ]
  },

  // ==================== CHƯƠNG II: LÂM NGHIỆP ====================
  {
    chapter: "Chương II: Lâm nghiệp",
    chapterTag: "CHƯƠNG 2",
    chapterColor: "bg-teal-600",
    id: "bai-7",
    lessonNum: "Bài 7",
    title: "Bài 7. Giới thiệu về rừng",
    pages: "SGK tr. 29–32",
    objective: "Nêu thành phần và vai trò to lớn của rừng; phân biệt ba loại rừng phổ biến ở Việt Nam theo mục đích sử dụng; đề xuất việc bảo vệ rừng.",
    mindmap: {
      nodes: [
        { title: "KHÁI NIỆM & THÀNH PHẦN", desc: "Hệ sinh thái: Thực vật (chính), động vật, vi sinh vật, đất rừng & môi trường", color: "#0d9488" },
        { title: "VAI TRÒ CỦA RỪNG", desc: "Cung cấp lâm sản, điều hòa khí hậu, bảo vệ đất chống xói mòn, bảo tồn gen", color: "#14b8a6" },
        { title: "3 LOẠI RỪNG CHÍNH", desc: "Rừng phòng hộ &bull; Rừng sản xuất &bull; Rừng đặc dụng", color: "#047857" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 7: 3 LOẠI RỪNG & VAI TRÒ SINH THÁI -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-teal-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-teal-500/20">
          <span class="text-xs font-bold text-teal-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-tree"></i> Hình 7: Phân Loại 3 Nhóm Rừng Theo Mục Đích Sử Dụng Tại Việt Nam
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 29–32</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 200" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="170" rx="10" fill="#1e293b" stroke="#14b8a6" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#115e59"/>
            <text x="410" y="41" text-anchor="middle" fill="#ccfbf1" font-size="11" font-weight="900">3 LOẠI RỪNG CHÍNH TẠI VIỆT NAM (LUẬT LÂM NGHIỆP)</text>

            <g transform="translate(35, 60)">
              <!-- Rừng phòng hộ -->
              <rect x="0" y="0" width="235" height="110" rx="8" fill="#0f172a" stroke="#14b8a6" stroke-width="1.2"/>
              <text x="117" y="22" text-anchor="middle" fill="#2dd4bf" font-size="10.5" font-weight="900">1. RỪNG PHÒNG HỘ</text>
              <text x="15" y="45" fill="#f8fafc" font-size="8.5" font-weight="700">Mục đích chính: Bảo vệ nguồn sống</text>
              <text x="15" y="62" fill="#cbd5e1" font-size="8">&bull; Phòng hộ đầu nguồn: Giữ nước, chống lũ</text>
              <text x="15" y="77" fill="#cbd5e1" font-size="8">&bull; Chắn gió, chắn cát bay ven biển miền Trung</text>
              <text x="15" y="92" fill="#cbd5e1" font-size="8">&bull; Rừng ngập mặn chắn sóng bảo vệ đê biển</text>

              <!-- Rừng sản xuất -->
              <rect x="255" y="0" width="235" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2"/>
              <text x="372" y="22" text-anchor="middle" fill="#fbbf24" font-size="10.5" font-weight="900">2. RỪNG SẢN XUẤT</text>
              <text x="270" y="45" fill="#f8fafc" font-size="8.5" font-weight="700">Mục đích chính: Kinh tế &amp; Gỗ</text>
              <text x="270" y="62" fill="#cbd5e1" font-size="8">&bull; Cung cấp gỗ gia dụng, gỗ xây dựng</text>
              <text x="270" y="77" fill="#cbd5e1" font-size="8">&bull; Cung cấp nguyên liệu giấy (keo, bạch đàn)</text>
              <text x="270" y="92" fill="#cbd5e1" font-size="8">&bull; Lâm sản ngoài gỗ: măng, nấm, quế, hồi</text>

              <!-- Rừng đặc dụng -->
              <rect x="510" y="0" width="235" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2"/>
              <text x="627" y="22" text-anchor="middle" fill="#38bdf8" font-size="10.5" font-weight="900">3. RỪNG ĐẶC DỤNG</text>
              <text x="525" y="45" fill="#f8fafc" font-size="8.5" font-weight="700">Mục đích chính: Bảo tồn &amp; Nghiên cứu</text>
              <text x="525" y="62" fill="#cbd5e1" font-size="8">&bull; Vườn quốc gia (Cúc Phương, Ba Vì, Cát Tiên)</text>
              <text x="525" y="77" fill="#cbd5e1" font-size="8">&bull; Khu bảo tồn thiên nhiên, bảo tồn gen quý</text>
              <text x="525" y="92" fill="#cbd5e1" font-size="8">&bull; Khu bảo vệ di tích lịch sử, danh lam thắng cảnh</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Khái niệm và vai trò của rừng đối với đời sống",
        content: `
          <p><strong>Khái niệm rừng:</strong> Rừng là một hệ sinh thái phức tạp bao gồm quần xã thực vật rừng, động vật rừng, vi sinh vật, đất rừng và các yếu tố khí hậu môi trường; trong đó thực vật (các tầng cây gỗ, cây bụi) giữ vai trò thành phần chủ chốt.</p>
          <p class="mt-2 font-bold text-gray-900 dark:text-white">Vai trò to lớn của rừng:</p>
          <ul class="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Cung cấp lâm sản:</strong> Cung cấp gỗ phục vụ xây dựng, đồ mộc gia dụng, bột giấy và các lâm sản ngoài gỗ có giá trị cao (dược liệu, tinh dầu quế, hồi, nấm, măng).</li>
            <li><strong>Bảo vệ môi trường &amp; Điều hòa khí hậu:</strong> Hấp thụ $CO_2$, nhả $O_2$ (được ví như "lá phổi xanh" của Trái Đất), giữ cân bằng lượng mưa và độ ẩm không khí, giảm hiệu ứng nhà kính.</li>
            <li><strong>Bảo vệ nguồn nước &amp; Đất đai:</strong> Tán cây cản sức rơi của hạt mưa, mạng lưới rễ giữ đất giúp chống xói mòn, sạt lở đất đồi núi và giữ nguồn nước ngầm dồi dào.</li>
            <li><strong>Chắn gió bão &amp; Sóng biển:</strong> Rừng phi lao chắn cát bay lấn ruộng; rừng ngập mặn chắn sóng bão, bảo vệ đê điều và bãi bồi ven biển.</li>
            <li><strong>Bảo tồn đa dạng sinh học:</strong> Nơi cư trú, sinh sản tự nhiên của hàng ngàn loài động thực vật quý hiếm, bảo tồn nguồn gen sinh học.</li>
          </ul>
        `
      },
      {
        heading: "2. Phân loại rừng theo mục đích sử dụng",
        content: `
          <p class="text-xs">Theo Luật Lâm nghiệp Việt Nam, căn cứ vào mục đích quản lí và sử dụng chủ yếu, rừng được chia làm 3 loại:</p>
          <ul class="list-disc pl-5 space-y-2 mt-2 text-xs">
            <li><strong>Rừng phòng hộ:</strong> Mục đích chủ yếu là bảo vệ nguồn nước, bảo vệ đất, chống xói mòn sa mạc hóa, hạn chế lũ lụt thiên tai và điều hòa khí hậu. Bao gồm: <em>Rừng phòng hộ đầu nguồn; Rừng phòng hộ chắn gió, chắn cát bay; Rừng phòng hộ chắn sóng, lấn biển; Rừng bảo vệ môi trường sinh thái.</em></li>
            <li><strong>Rừng sản xuất:</strong> Mục đích chủ yếu là sản xuất, kinh doanh gỗ và các loại lâm sản ngoài gỗ; kết hợp phòng hộ bảo vệ môi trường. Các loài cây phổ biến: keo, bạch đàn, thông, quế, tre nứa.</li>
            <li><strong>Rừng đặc dụng:</strong> Mục đích chủ yếu là bảo tồn thiên nhiên hoang dã, bảo tồn nguồn gen sinh vật quý hiếm; bảo vệ di tích lịch sử - văn hóa, danh lam thắng cảnh; phục vụ nghiên cứu khoa học và du lịch sinh thái. Bao gồm: <em>Vườn quốc gia (như Cúc Phương, Ba Bể, Phong Nha - Kẻ Bàng), Khu dự trữ thiên nhiên, Khu bảo tồn loài và sinh cảnh.</em></li>
          </ul>
        `
      }
    ],
    application: "Tìm hiểu thông tin về một khu rừng nổi tiếng ở địa phương hoặc tại Việt Nam (như Vườn quốc gia Cúc Phương, Rừng ngập mặn Cần Giờ, Rừng Tràm Trà Sư). Cho biết khu rừng đó thuộc loại rừng nào theo mục đích sử dụng và đề xuất 3 việc học sinh có thể làm để góp phần bảo vệ màu xanh của rừng.",
    quizzes: [
      {
        q: "Vườn quốc gia Cúc Phương và Khu bảo tồn thiên nhiên thuộc loại rừng nào sau đây?",
        opts: ["Rừng đặc dụng", "Rừng sản xuất", "Rừng phòng hộ chắn sóng", "Rừng nguyên liệu công nghiệp"],
        ans: 0,
        explain: "Vườn quốc gia và khu bảo tồn thiên nhiên phục vụ mục đích bảo tồn gen, nghiên cứu khoa học nên thuộc nhóm Rừng đặc dụng."
      },
      {
        q: "Rừng ngập mặn ven biển miền duyên hải có vai trò phòng hộ quan trọng nhất là gì?",
        opts: ["Chắn sóng, bảo vệ đê biển và chống sạt lở bãi bồi", "Cung cấp gỗ làm đồ gia dụng cao cấp", "Làm nơi chăn thả đại gia súc", "Làm đất trồng lúa nước"],
        ans: 0,
        explain: "Rừng ngập mặn với bộ rễ chống dày đặc giúp cản phá sóng biển, bảo vệ đê điều và bồi đắp phù sa ven biển."
      }
    ]
  },

  // ==================== BÀI 8 ====================
  {
    chapter: "Chương II: Lâm nghiệp",
    chapterTag: "CHƯƠNG 2",
    chapterColor: "bg-teal-600",
    id: "bai-8",
    lessonNum: "Bài 8",
    title: "Bài 8. Trồng, chăm sóc và bảo vệ rừng",
    pages: "SGK tr. 33–37",
    objective: "Nêu thời vụ, phương pháp và quy trình trồng rừng bằng cây con; trình bày công việc chăm sóc; đề xuất những việc nên và không nên làm để bảo vệ rừng.",
    mindmap: {
      nodes: [
        { title: "THỜI VỤ & PHƯƠNG PHÁP", desc: "Mùa xuân/thu (miền Bắc), mùa mưa (miền Nam); Cây con có bầu vs rễ trần", color: "#0d9488" },
        { title: "QUY TRÌNH TRỒNG RỪNG", desc: "Đào hố &rarr; Xé vỏ bầu &rarr; Đặt cây thẳng &rarr; Lấp nén đất &rarr; Vun gốc", color: "#14b8a6" },
        { title: "CHĂM SÓC & BẢO VỆ", desc: "Làm rào, phát quang cỏ, xới xáo; Phòng chống cháy rừng, cấm chặt phá", color: "#d97706" }
      ]
    },
    illustration: `
      <!-- HÌNH MINH HỌA BÀI 8: QUY TRÌNH TRỒNG CÂY CON CÓ BẦU -->
      <div class="my-5 p-4 rounded-xl bg-slate-900 text-white border border-teal-500/30">
        <div class="flex items-center justify-between mb-2 pb-2 border-b border-teal-500/20">
          <span class="text-xs font-bold text-teal-400 flex items-center gap-1.5 uppercase">
            <i class="fa-solid fa-seedling"></i> Hình 8: Quy Trình 5 Bước Trồng Rừng Bằng Cây Con Có Bầu Đất
          </span>
          <span class="text-[10px] text-gray-400 font-medium">KNTT &bull; SGK tr. 33–37</span>
        </div>
        <div class="w-full overflow-x-auto py-1">
          <svg viewBox="0 0 820 190" class="w-full min-w-[700px] h-auto drop-shadow font-sans select-none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="790" height="160" rx="10" fill="#1e293b" stroke="#14b8a6" stroke-width="1.5"/>
            <rect x="25" y="25" width="770" height="24" rx="5" fill="#115e59"/>
            <text x="410" y="41" text-anchor="middle" fill="#ccfbf1" font-size="11" font-weight="900">5 BƯỚC TRỒNG RỪNG BẰNG CÂY CON CÓ BẦU ĐẤT TIÊU CHUẨN</text>

            <g transform="translate(30, 60)">
              <!-- Step 1 -->
              <rect x="0" y="0" width="140" height="100" rx="6" fill="#0f172a" stroke="#14b8a6" stroke-width="1"/>
              <text x="70" y="20" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="900">1. ĐÀO HỐ</text>
              <text x="10" y="45" fill="#cbd5e1" font-size="8">&bull; Kích thước chuẩn</text>
              <text x="10" y="60" fill="#cbd5e1" font-size="8">&bull; Để lớp đất mặt riêng</text>
              <text x="10" y="75" fill="#cbd5e1" font-size="8">&bull; Vệ sinh sạch cỏ</text>

              <!-- Step 2 -->
              <rect x="155" y="0" width="140" height="100" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.2"/>
              <text x="225" y="20" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="900">2. XÉ VỎ BẦU</text>
              <text x="165" y="45" fill="#fde68a" font-size="8">&bull; Rạch nhẹ nilon</text>
              <text x="165" y="60" fill="#fde68a" font-size="8">&bull; Giữ nguyên bầu đất</text>
              <text x="165" y="75" fill="#ef4444" font-size="7.5" font-weight="800">⚠️ Không làm vỡ bầu</text>

              <!-- Step 3 -->
              <rect x="310" y="0" width="140" height="100" rx="6" fill="#0f172a" stroke="#14b8a6" stroke-width="1"/>
              <text x="380" y="20" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="900">3. ĐẶT CÂY</text>
              <text x="320" y="45" fill="#cbd5e1" font-size="8">&bull; Đặt vào giữa đáy hố</text>
              <text x="320" y="60" fill="#cbd5e1" font-size="8">&bull; Giữ thân cây thẳng</text>
              <text x="320" y="75" fill="#cbd5e1" font-size="8">&bull; Mặt bầu ngang miệng</text>

              <!-- Step 4 -->
              <rect x="465" y="0" width="140" height="100" rx="6" fill="#0f172a" stroke="#14b8a6" stroke-width="1"/>
              <text x="535" y="20" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="900">4. LẤP ĐẤT &amp; NÉN</text>
              <text x="475" y="45" fill="#cbd5e1" font-size="8">&bull; Cho lớp đất màu trước</text>
              <text x="475" y="60" fill="#cbd5e1" font-size="8">&bull; Nén nhẹ quanh bầu</text>
              <text x="475" y="75" fill="#cbd5e1" font-size="8">&bull; Tránh đạp giập rễ</text>

              <!-- Step 5 -->
              <rect x="620" y="0" width="140" height="100" rx="6" fill="#0f172a" stroke="#14b8a6" stroke-width="1"/>
              <text x="690" y="20" text-anchor="middle" fill="#2dd4bf" font-size="10" font-weight="900">5. VUN GỐC</text>
              <text x="630" y="45" fill="#cbd5e1" font-size="8">&bull; Vun đất cao hơn miệng</text>
              <text x="630" y="60" fill="#cbd5e1" font-size="8">&bull; Hình mui rùa thoát nước</text>
              <text x="630" y="75" fill="#cbd5e1" font-size="8">&bull; Cố định cọc chống gió</text>
            </g>
          </svg>
        </div>
      </div>
    `,
    sections: [
      {
        heading: "1. Thời vụ và phương pháp trồng rừng",
        content: `
          <p><strong>Thời vụ thích hợp:</strong> Trồng vào những thời điểm thời tiết ấm áp, độ ẩm cao và có mưa ẩm để cây con đạt tỉ lệ sống cao nhất.</p>
          <ul class="list-disc pl-5 space-y-1 text-xs">
            <li><em>Các tỉnh miền Bắc:</em> Trồng vào mùa xuân (tháng 2 &ndash; 4) và mùa thu (tháng 8 &ndash; 10).</li>
            <li><em>Các tỉnh miền Trung và miền Nam:</em> Trồng vào đầu mùa mưa (tháng 5 &ndash; 8).</li>
          </ul>
          <p class="mt-2 font-bold text-gray-900 dark:text-white">Hai phương pháp trồng rừng phổ biến:</p>
          <ul class="list-disc pl-5 space-y-1.5 text-xs">
            <li><strong>Trồng bằng cây con có bầu đất:</strong> Rễ cây nằm trọn trong bầu đất hữu cơ, rễ non không bị tổn thương khi vận chuyển, cây hồi phục nhanh và tỉ lệ sống rất cao (thường áp dụng phổ biến cho hầu hết các loại cây rừng).</li>
            <li><strong>Trồng bằng cây con rễ trần:</strong> Cây được nhổ khỏi vườn ươm, rũ sạch đất; chi phí rẻ, vận chuyển nhẹ nhưng chỉ áp dụng cho một số loài cây có khả năng đâm rễ tái sinh mạnh như tràm, đước, tre luồng.</li>
          </ul>
        `
      },
      {
        heading: "2. Quy trình trồng rừng bằng cây con có bầu",
        content: `
          <ol class="list-decimal pl-5 space-y-1 text-xs">
            <li><strong>Đào hố:</strong> Đào hố có kích thước phù hợp bầu cây (thường $30\times30\times30\text{ cm}$ hoặc $40\times40\times40\text{ cm}$), để riêng lớp đất màu tơi xốp bên trên.</li>
            <li><strong>Rạch bỏ vỏ bầu:</strong> Dùng dao sắc rạch nhẹ vỏ bao nilon và nhẹ nhàng bóc vỏ bầu; <em>tuyệt đối không làm vỡ bầu đất</em> làm đứt rễ non.</li>
            <li><strong>Đặt cây vào hố:</strong> Đặt bầu cây thẳng đứng ngay ngắn giữa lòng hố, mặt bầu ngang bằng hoặc thấp hơn miệng hố 1 &ndash; 2 cm.</li>
            <li><strong>Lấp và nén đất:</strong> Lấy lớp đất màu lấp quanh bầu, dùng hai tay hoặc gót chân nén chặt vừa phải vào xung quanh bầu đất giữ cây không ngả nghiêng.</li>
            <li><strong>Vun gốc:</strong> Vun thêm đất tơi xốp cao hơn miệng hố từ 3 &ndash; 5 cm tạo hình vòm mui rùa để không bị đọng nước khi mưa và cố định gốc cây.</li>
          </ol>
        `
      },
      {
        heading: "3. Chăm sóc và bảo vệ rừng",
        content: `
          <p class="text-xs">Rừng sau khi trồng cần được chăm sóc định kì trong 3 &ndash; 4 năm đầu (1 &ndash; 2 lần/năm): Rào chắn gia súc phá hoại, phát quang dây leo cỏ dại, tỉa cành sâu bệnh, xới đất vun gốc và bón phân bổ sung.</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs">
            <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800">
              <span class="font-bold text-emerald-800 dark:text-emerald-300 block">Việc NÊN làm</span>
              Tích cực trồng cây gây rừng; tham gia tuần tra phòng cháy rừng trong mùa hanh khô; tuyên truyền pháp luật bảo vệ động thực vật hoang dã.
            </div>
            <div class="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800">
              <span class="font-bold text-rose-800 dark:text-rose-300 block">Việc KHÔNG ĐƯỢC làm</span>
              Nghiêm cấm đốt rừng làm nương rẫy; cấm chặt phá cây rừng trái phép; không săn bắt, mua bán thú rừng; không thả rông trâu bò cắn phá cây rừng non.
            </div>
          </div>
        `
      }
    ],
    application: "Tham gia phong trào 'Tết trồng cây' hoặc ngày hội môi trường tại trường học. Thực hiện đúng các thao tác đào hố, xé vỏ bầu, lấp nén đất và cắm cọc bảo vệ một cây bóng mát mới trồng trong khuôn viên trường.",
    quizzes: [
      {
        q: "Thao tác kĩ thuật then chốt khi đặt cây con có bầu đất vào hố trồng là gì?",
        opts: ["Rạch bỏ vỏ bao nilon cẩn thận và giữ nguyên vẹn bầu đất", "Dùng chân giẫm nát bầu đất trước khi lấp", "Giữ nguyên lớp nilon để bảo vệ bầu", "Cắt đứt toàn bộ rễ cây"],
        ans: 0,
        explain: "Bóc vỏ bầu giúp rễ dễ đâm ra ngoài, đồng thời phải giữ nguyên bầu đất tránh làm đứt hệ rễ non của cây."
      },
      {
        q: "Thời vụ trồng rừng thích hợp nhất ở các tỉnh miền Bắc nước ta là vào thời gian nào?",
        opts: ["Mùa xuân và mùa thu", "Mùa đông rét đậm", "Giữa mùa hè nắng gắt", "Tháng 12 âm lịch"],
        ans: 0,
        explain: "Mùa xuân ấm áp có mưa phùn và mùa thu mát mẻ độ ẩm cao là hai thời vụ trồng rừng lí tưởng ở miền Bắc."
      }
    ]
  }
];

console.log("Loaded Chapter I & II lessons data. Total:", lessonsData.length);

module.exports = { lessonsDataP1: lessonsData };
