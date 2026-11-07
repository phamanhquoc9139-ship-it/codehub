// scratch/sinhhoc11_lesson_diagrams_p2.js
// Sơ đồ SVG minh họa bài học từ Bài 16 đến Bài 29

const p2_diagrams = {
  // Bài 16: Thực hành cảm ứng ở thực vật
  16: {
    note: "Bố trí thí nghiệm cảm ứng: Hộp bìa khoét lỗ (hướng sáng), chậu cây nằm ngang (hướng trọng lực âm ở thân và dương ở rễ) và chậu đất bón phân (hướng hóa).",
    svg: `<svg viewBox="0 0 760 180" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="180" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <g transform="translate(30, 20)">
        <rect width="220" height="140" rx="8" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#047857">1. TN HƯỚNG SÁNG DƯƠNG</text>
        <text x="15" y="48" font-size="10" fill="#065f46">• Cây đậu trong hộp kín khoét 1 lỗ</text>
        <text x="15" y="68" font-size="10" fill="#065f46">• Ánh sáng chiếu lệch một bên</text>
        <text x="15" y="88" font-size="10" fill="#065f46">• Ngọn cây vươn dài và uốn cong</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#047857">chui chính xác qua lỗ sáng</text>
        <text x="15" y="126" font-size="9" fill="#64748b">Đối chứng: Hộp mở nắp mọc thẳng đứng</text>
      </g>

      <g transform="translate(270, 20)">
        <rect width="220" height="140" rx="8" fill="#fffbeb" class="dark:fill-amber-950/40" stroke="#f59e0b" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#b45309">2. TN HƯỚNG TRỌNG LỰC</text>
        <text x="15" y="48" font-size="10" fill="#92400e">• Đặt chậu cây non nằm ngang 90°</text>
        <text x="15" y="68" font-size="10" fill="#92400e">• Để trong bóng tối 24-48 giờ</text>
        <text x="15" y="88" font-size="10" font-weight="bold" fill="#b45309">• Ngọn thân uốn cong vươn lên (+)</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#047857">• Chóp rễ uốn cong đâm xuống (-)</text>
        <text x="15" y="126" font-size="9" fill="#64748b">Do rễ nhạy cảm với auxin gấp 100 lần thân</text>
      </g>

      <g transform="translate(510, 20)">
        <rect width="220" height="140" rx="8" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">3. TN HƯỚNG HÓA CỦA RỄ</text>
        <text x="15" y="48" font-size="10" fill="#1e40af">• Chôn 1 ống phân NPK bên trái chậu</text>
        <text x="15" y="68" font-size="10" fill="#1e40af">• Chôn 1 ống muối mặn NaCl bên phải</text>
        <text x="15" y="88" font-size="10" font-weight="bold" fill="#1d4ed8">• Rễ mọc dày đặc bọc ống NPK (+)</text>
        <text x="15" y="108" font-size="10" font-weight="bold" fill="#be123c">• Rễ né tránh hoàn toàn ống muối (-)</text>
        <text x="15" y="126" font-size="9" fill="#64748b">Hướng hóa dương với dinh dưỡng, âm với độc</text>
      </g>
    </svg>`
  },

  // Bài 17: Cảm ứng ở động vật (Neuron & Synapse)
  17: {
    note: "Cấu tạo neuron với bao myelin nhảy cóc eo Ranvier, điện thế hoạt động (Khử cực - Đảo cực - Tái phân cực) và dẫn truyền 1 chiều qua khe synapse hóa học.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Neuron & Điện thế hoạt động -->
      <g transform="translate(25, 20)">
        <rect width="350" height="150" rx="10" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="175" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#1d4ed8">NEURON & ĐIỆN THẾ MÀNG TẾ BÀO</text>
        <text x="15" y="50" font-size="11" fill="#1e40af"><tspan font-weight="bold">• Điện thế nghỉ (-70mV):</tspan> K⁺ khuếch tán ra ngoài qua kênh rò rỉ</text>
        <text x="15" y="70" font-size="11" fill="#1e40af"><tspan font-weight="bold">• Khử cực & Đảo cực (+30mV):</tspan> Kênh Na⁺ mở ồ ạt, Na⁺ tràn vào</text>
        <text x="15" y="90" font-size="11" fill="#1e40af"><tspan font-weight="bold">• Tái phân cực:</tspan> Kênh Na⁺ đóng, K⁺ mở ra ngoài</text>
        <text x="15" y="110" font-size="11" fill="#1e40af"><tspan font-weight="bold">• Sợi có bao Myelin:</tspan> Dẫn truyền xung điện 'nhảy cóc' qua các</text>
        <text x="15" y="130" font-size="11" font-weight="bold" fill="#2563eb">eo Ranvier với tốc độ cực nhanh ~100-120 m/s</text>
      </g>

      <!-- Khe Synapse hóa học -->
      <g transform="translate(390, 20)">
        <rect width="345" height="150" rx="10" fill="#faf5ff" class="dark:fill-purple-950/40" stroke="#a855f7" />
        <text x="172" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#7e22ce">DẪN TRUYỀN QUA KHE SYNAPSE HÓA HỌC</text>
        <text x="15" y="50" font-size="11" fill="#6b21a8">1. Xung điện đến cúc tận cùng mở kênh ion Ca²⁺ màng trước</text>
        <text x="15" y="70" font-size="11" fill="#6b21a8">2. Dòng Ca²⁺ kích thích bóng chứa ACETYLCHOLINE xuất bào</text>
        <text x="15" y="90" font-size="11" fill="#6b21a8">3. Khuếch tán qua khe gắn thụ thể đặc hiệu ở màng sau</text>
        <text x="15" y="110" font-size="11" fill="#6b21a8">4. Kênh Na⁺ màng sau mở gây xung điện mới lan truyền tiếp</text>
        <text x="15" y="132" font-size="11" font-weight="bold" fill="#9333ea">→ Chỉ truyền 1 chiều từ màng trước sang màng sau</text>
      </g>
    </svg>`
  },

  // Bài 18: Tập tính ở động vật
  18: {
    note: "So sánh tập tính bẩm sinh và tập tính học được; cơ chế điều kiện hóa Pavlov (thức ăn + chuông reo) và ứng dụng bẫy pheromone.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Bẩm sinh vs Học được -->
      <g transform="translate(25, 20)">
        <rect width="350" height="150" rx="10" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="175" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#047857">TẬP TÍNH BẨM SINH VS HỌC ĐƯỢC</text>
        <text x="15" y="52" font-size="11" fill="#065f46"><tspan font-weight="bold">• Tập tính bẩm sinh:</tspan> Sinh ra đã có, di truyền theo loài, bền vững</text>
        <text x="25" y="70" font-size="10" fill="#065f46">Ví dụ: Nhện chăng tơ, chim xây tổ, thú con bú sữa mẹ</text>
        <text x="15" y="94" font-size="11" fill="#065f46"><tspan font-weight="bold">• Tập tính học được:</tspan> Hình thành qua trải nghiệm cá thể, dễ đổi</text>
        <text x="25" y="112" font-size="10" fill="#065f46">Ví dụ: Khỉ dùng gậy khều chuối, người dừng đèn đỏ</text>
        <text x="15" y="134" font-size="11" font-weight="bold" fill="#047857">Cơ sở: Tính dẻo synapse (Synaptic plasticity) ở vỏ não</text>
      </g>

      <!-- Pavlov & Pheromone -->
      <g transform="translate(390, 20)">
        <rect width="345" height="150" rx="10" fill="#fffbeb" class="dark:fill-amber-950/40" stroke="#f59e0b" />
        <text x="172" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#b45309">CÁC HÌNH THỨC HỌC TẬP & GIAO TIẾP</text>
        <text x="15" y="50" font-size="11" fill="#92400e"><tspan font-weight="bold">• Điều kiện hóa cổ điển (Pavlov):</tspan> Kết hợp tiếng chuông với thức ăn</text>
        <text x="25" y="68" font-size="10" fill="#92400e">→ Hình thành đường liên hệ thần kinh tạm thời ở vỏ não</text>
        <text x="15" y="90" font-size="11" fill="#92400e"><tspan font-weight="bold">• In vết (Imprinting):</tspan> Vịt con đi theo vật chuyển động đầu đời</text>
        <text x="15" y="110" font-size="11" fill="#92400e"><tspan font-weight="bold">• Pheromone sinh học:</tspan> Mùi dẫn dụ bạn tình ở côn trùng</text>
        <text x="15" y="132" font-size="11" font-weight="bold" fill="#b45309">Ứng dụng: Bẫy pheromone diệt sâu hại quả không dùng thuốc</text>
      </g>
    </svg>`
  },

  // Bài 19: Khái quát sinh trưởng & phát triển
  19: {
    note: "Sự chuyển tiếp giữa Sinh trưởng (tăng khối lượng, kích thước) và Phát triển (phân hóa mô, phát sinh mầm hoa, thành thục sinh dục).",
    svg: `<svg viewBox="0 0 760 170" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr19" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#10b981" />
        </marker>
      </defs>
      <rect width="760" height="170" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <g transform="translate(30, 30)">
        <rect width="180" height="110" rx="10" fill="#ecfdf5" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="90" y="30" text-anchor="middle" font-weight="bold" font-size="12" fill="#047857">SINH TRƯỞNG (GROWTH)</text>
        <text x="15" y="55" font-size="11" fill="#065f46">• Tăng kích thước, khối lượng</text>
        <text x="15" y="75" font-size="11" fill="#065f46">• Do tăng số lượng tế bào</text>
        <text x="15" y="95" font-size="11" font-weight="bold" fill="#047857">Biến đổi định lượng</text>
      </g>
      <path d="M 220 85 L 265 85" stroke="#10b981" stroke-width="3" marker-end="url(#arr19)" />

      <g transform="translate(275, 30)">
        <rect width="200" height="110" rx="10" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="100" y="30" text-anchor="middle" font-weight="bold" font-size="12" fill="#1d4ed8">PHÂN HÓA TẾ BÀO</text>
        <text x="15" y="55" font-size="11" fill="#1e40af">• Biểu hiện gen chọn lọc</text>
        <text x="15" y="75" font-size="11" fill="#1e40af">• Tạo các mô chuyên trách</text>
        <text x="15" y="95" font-size="11" font-weight="bold" fill="#1d4ed8">Phát sinh hình thái cơ quan</text>
      </g>
      <path d="M 485 85 L 530 85" stroke="#10b981" stroke-width="3" marker-end="url(#arr19)" />

      <g transform="translate(540, 30)">
        <rect width="190" height="110" rx="10" fill="#faf5ff" class="dark:fill-purple-950/40" stroke="#a855f7" />
        <text x="95" y="30" text-anchor="middle" font-weight="bold" font-size="12" fill="#7e22ce">PHÁT TRIỂN (DEVELOPMENT)</text>
        <text x="15" y="55" font-size="11" fill="#6b21a8">• Biến đổi về CHẤT</text>
        <text x="15" y="75" font-size="11" fill="#6b21a8">• Thành thục sinh dục</text>
        <text x="15" y="95" font-size="11" font-weight="bold" fill="#7e22ce">Ra hoa, sinh sản thế hệ mới</text>
      </g>
    </svg>`
  },

  // Bài 20: Sinh trưởng & phát triển ở thực vật
  20: {
    note: "Mô phân sinh đỉnh (sinh trưởng sơ cấp) vs Mô phân sinh bên (thứ cấp tạo vòng năm gỗ sớm - muộn); 5 hormone thực vật đối kháng.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Mô phân sinh & Vòng năm -->
      <g transform="translate(25, 20)">
        <rect width="350" height="150" rx="10" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="175" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#047857">MÔ PHÂN SINH & VÒNG NĂM GỖ</text>
        <text x="15" y="50" font-size="11" fill="#065f46"><tspan font-weight="bold">• MPS đỉnh (ngọn chồi, rễ):</tspan> Sinh trưởng sơ cấp (dài thân, rễ)</text>
        <text x="15" y="72" font-size="11" fill="#065f46"><tspan font-weight="bold">• MPS bên (tầng sinh mạch):</tspan> Sinh trưởng thứ cấp (to thân cây)</text>
        <text x="15" y="94" font-size="11" font-weight="bold" fill="#047857">Cấu tạo 1 Vòng năm sinh trưởng:</text>
        <text x="25" y="112" font-size="10" fill="#065f46">1 dải gỗ sáng (mùa xuân ấm, mạch to) + 1 dải gỗ sẫm (mùa khô, mạch nhỏ)</text>
        <text x="15" y="134" font-size="11" font-weight="bold" fill="#15803d">→ Đếm số vòng gỗ sẫm = Tuổi chính xác của cây gỗ</text>
      </g>

      <!-- 5 Hormone Cây -->
      <g transform="translate(390, 20)">
        <rect width="345" height="150" rx="10" fill="#fdf4ff" class="dark:fill-fuchsia-950/40" stroke="#d946ef" />
        <text x="172" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#86198f">TƯƠNG QUAN 5 HORMONE THỰC VẬT</text>
        <text x="15" y="50" font-size="11" font-weight="bold" fill="#047857">Nhóm Kích thích:</text>
        <text x="25" y="68" font-size="10" fill="#065f46">• Auxin: Kéo dài tế bào, tạo rễ phụ, ưu thế ngọn</text>
        <text x="25" y="86" font-size="10" fill="#065f46">• GA: Vươn dài lóng thân, nảy mầm hạt</text>
        <text x="25" y="104" font-size="10" fill="#065f46">• Cytokinin: Phân chia tế bào, bật chồi nách bên</text>
        <text x="15" y="124" font-size="11" font-weight="bold" fill="#be123c">Nhóm Ức chế:</text>
        <text x="25" y="142" font-size="10" fill="#9f1239">• ABA: Đóng khí khổng, ngủ nghỉ; Ethylene: Kích chín quả</text>
      </g>
    </svg>`
  },

  // Bài 21: Thực hành bấm ngọn, hormone & tính tuổi cây
  21: {
    note: "Bấm ngọn giải phóng chồi nách, hormone NAA 50ppm kích cành giâm ra rễ và mặt cắt thớt gỗ xác định tuổi.",
    svg: `<svg viewBox="0 0 760 180" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="180" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <g transform="translate(30, 20)">
        <rect width="220" height="140" rx="8" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#047857">1. BẤM NGỌN, TỈA CÀNH</text>
        <text x="15" y="48" font-size="10" fill="#065f46">• Bấm ngọn chồi đỉnh cây đậu</text>
        <text x="15" y="68" font-size="10" fill="#065f46">• Mất nguồn sản xuất Auxin chính</text>
        <text x="15" y="88" font-size="10" fill="#065f46">• Phá bỏ hoàn toàn ưu thế ngọn</text>
        <text x="15" y="112" font-size="10" font-weight="bold" fill="#047857">Các chồi nách bật nhánh sum suê</text>
        <text x="15" y="128" font-size="9" fill="#64748b">Tăng số lượng cành hoa, quả thu hoạch</text>
      </g>

      <g transform="translate(270, 20)">
        <rect width="220" height="140" rx="8" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">2. XỬ LÍ HORMONE NAA</text>
        <text x="15" y="48" font-size="10" fill="#1e40af">• Cành rau ngót bánh tẻ cắt vát</text>
        <text x="15" y="68" font-size="10" fill="#1e40af">• Nhúng NAA 50ppm trong 15 phút</text>
        <text x="15" y="88" font-size="10" fill="#1e40af">• Giâm vào cát ẩm tưới sương</text>
        <text x="15" y="112" font-size="10" font-weight="bold" fill="#1d4ed8">Ra rễ phụ dày đặc sau 10 ngày</text>
        <text x="15" y="128" font-size="9" fill="#64748b">Đối chứng: Nước cất rễ rất ít và yếu</text>
      </g>

      <g transform="translate(510, 20)">
        <rect width="220" height="140" rx="8" fill="#fffbeb" class="dark:fill-amber-950/40" stroke="#f59e0b" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#b45309">3. ĐẾM VÒNG NĂM TÍNH TUỔI</text>
        <text x="15" y="48" font-size="10" fill="#92400e">• Thớt gỗ mới cưa phẳng mặt</text>
        <text x="15" y="68" font-size="10" fill="#92400e">• Dùng kính lúp soi từ tâm ra vỏ</text>
        <text x="15" y="88" font-size="10" fill="#92400e">• Đếm các dải màu sẫm hẹp</text>
        <text x="15" y="112" font-size="10" font-weight="bold" fill="#b45309">Số dải sẫm = Số năm tuổi cây</text>
        <text x="15" y="128" font-size="9" fill="#64748b">Vòng hẹp chứng tỏ năm hạn hán khô cằn</text>
      </g>
    </svg>`
  },

  // Bài 22: Sinh trưởng & phát triển ở động vật
  22: {
    note: "So sánh 3 hình thức phát triển: Không biến thái (người, thú), Biến thái hoàn toàn (Bướm: sâu-nhộng-bướm) vs Biến thái không hoàn toàn (châu chấu); tương tác Ecdysone và Juvenile.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- 3 Kiểu phát triển -->
      <g transform="translate(25, 20)">
        <rect width="360" height="150" rx="10" fill="#fff1f2" class="dark:fill-rose-950/40" stroke="#f43f5e" />
        <text x="180" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#be123c">3 HÌNH THỨC PHÁT TRIỂN Ở ĐỘNG VẬT</text>
        <text x="15" y="50" font-size="11" fill="#9f1239"><tspan font-weight="bold">• Không qua biến thái:</tspan> Con non giống con lớn (Người, Thú, Chim, Cá)</text>
        <text x="15" y="74" font-size="11" fill="#9f1239"><tspan font-weight="bold">• Biến thái hoàn toàn:</tspan> Ấu trùng khác biệt hoàn toàn con lớn;</text>
        <text x="25" y="92" font-size="10" fill="#9f1239">Trứng → Sâu non → NHỘNG (tái cấu trúc) → Bướm trưởng thành (Ếch)</text>
        <text x="15" y="116" font-size="11" fill="#9f1239"><tspan font-weight="bold">• Biến thái không hoàn toàn:</tspan> Ấu trùng gần giống con lớn, lột xác</text>
        <text x="25" y="134" font-size="10" font-weight="bold" fill="#be123c">nhiều lần lớn dần, KHÔNG có giai đoạn nhộng (Châu chấu, Gián, Tôm)</text>
      </g>

      <!-- Hormone Ecdysone & Juvenile -->
      <g transform="translate(400, 20)">
        <rect width="335" height="150" rx="10" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="167" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#1d4ed8">ĐIỀU HÒA HORMONE BIẾN THÁI</text>
        <text x="15" y="50" font-size="11" fill="#1e40af"><tspan font-weight="bold">• Ecdysone (Tuyến ngực):</tspan> Kích thích lột xác, hóa nhộng & bướm</text>
        <text x="15" y="74" font-size="11" fill="#1e40af"><tspan font-weight="bold">• Juvenile (Thể allata):</tspan> Duy trì sâu non, ức chế biến thái nhộng</text>
        <text x="15" y="98" font-size="11" font-weight="bold" fill="#2563eb">Ứng dụng nuôi tằm:</text>
        <text x="25" y="116" font-size="10" fill="#1d4ed8">Phun chất tương tự Juvenile kéo dài tuổi sâu ăn lá nhả kén tơ to!</text>
        <text x="15" y="136" font-size="10" fill="#047857">Thyroxine tuyến giáp xúc tác nòng nọc rụng đuôi thành ếch</text>
      </g>
    </svg>`
  },

  // Bài 23: Thực hành biến thái tằm & ếch
  23: {
    note: "Quan sát vòng đời biến thái ở tằm (sâu non 5 tuổi nhả tơ đóng kén hóa nhộng) và biến thái nòng nọc rụng đuôi mọc 4 chân thành ếch.",
    svg: `<svg viewBox="0 0 760 180" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="180" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Vòng đời Tằm -->
      <g transform="translate(30, 20)">
        <rect width="335" height="140" rx="8" fill="#fefce8" class="dark:fill-amber-950/40" stroke="#f59e0b" />
        <text x="167" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#b45309">VÒNG ĐỜI BƯỚM TẰM (BIẾN THÁI HOÀN TOÀN)</text>
        <text x="15" y="50" font-size="10" fill="#92400e">• Trứng tằm nhỏ li ti</text>
        <text x="15" y="70" font-size="10" fill="#92400e">• Sâu non ăn lá dâu dữ dội qua 4 lần lột xác (tuổi 1 → tuổi 5)</text>
        <text x="15" y="90" font-size="10" fill="#92400e">• Sâu đẫy sức nhả tơ vàng đóng kén hóa thành NHỘNG</text>
        <text x="15" y="112" font-size="10" font-weight="bold" fill="#b45309">• Ngài tằm cắn kén chui ra: cánh vảy, giao phối đẻ trứng</text>
      </g>

      <!-- Vòng đời Ếch -->
      <g transform="translate(395, 20)">
        <rect width="335" height="140" rx="8" fill="#ecfdf5" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="167" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#047857">BIẾN THÁI Ở ẾCH ĐỒNG</text>
        <text x="15" y="50" font-size="10" fill="#065f46">• Trứng ếch dưới nước nở thành NÒNG NỌC thở bằng mang</text>
        <text x="15" y="70" font-size="10" fill="#065f46">• Nòng nọc mọc 2 chân sau → mọc 2 chân trước</text>
        <text x="15" y="90" font-size="10" fill="#065f46">• Đuôi tự tiêu hủy theo chương trình apoptosis (nhờ Thyroxine)</text>
        <text x="15" y="112" font-size="10" font-weight="bold" fill="#047857">• Ếch con nhảy lên cạn thở bằng phổi và da ẩm</text>
      </g>
    </svg>`
  },

  // Bài 24: Khái quát về sinh sản
  24: {
    note: "So sánh bản chất di truyền: Sinh sản vô tính (nguyên phân con giống mẹ) vs Sinh sản hữu tính (giảm phân + thụ tinh tạo biến dị phong phú).",
    svg: `<svg viewBox="0 0 760 170" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="170" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <g transform="translate(30, 25)">
        <rect width="335" height="120" rx="10" fill="#ecfdf5" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="167" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#047857">SINH SẢN VÔ TÍNH (ASEXUAL)</text>
        <text x="15" y="52" font-size="11" fill="#065f46">• Không có sự kết hợp giao tử đực - cái</text>
        <text x="15" y="72" font-size="11" fill="#065f46">• Cơ chế: Nguyên phân từ 1 phần cơ thể mẹ</text>
        <text x="15" y="92" font-size="11" font-weight="bold" fill="#047857">Cơ thể con mang bộ gen GIỐNG HỆT MẸ</text>
        <text x="15" y="108" font-size="10" fill="#64748b">Ưu: Nhanh, bảo tồn tính tốt; Nhược: Kém thích nghi khi đổi môi trường</text>
      </g>

      <g transform="translate(395, 25)">
        <rect width="335" height="120" rx="10" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="167" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#1d4ed8">SINH SẢN HỮU TÍNH (SEXUAL)</text>
        <text x="15" y="52" font-size="11" fill="#1e40af">• Có sự hợp nhất giao tử đực (n) và cái (n)</text>
        <text x="15" y="72" font-size="11" fill="#1e40af">• Cơ chế: Giảm phân → Thụ tinh → Nguyên phân</text>
        <text x="15" y="92" font-size="11" font-weight="bold" fill="#1d4ed8">Tạo vô số BIẾN DỊ TỔ HỢP mới độc đáo</text>
        <text x="15" y="108" font-size="10" fill="#64748b">Là động lực tiến hóa giúp sinh vật thích nghi biến đổi ngoại cảnh</text>
      </g>
    </svg>`
  },

  // Bài 25: Sinh sản ở thực vật & Thụ tinh kép
  25: {
    note: "Cấu tạo hoa, hạt phấn mang 2 tinh tử, túi phôi và hiện tượng THỤ TINH KÉP đặc trưng tạo Phôi (2n) và Nội nhũ (3n).",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Cấu tạo hoa -->
      <g transform="translate(25, 20)">
        <rect width="320" height="150" rx="10" fill="#fdf2f8" class="dark:fill-pink-950/40" stroke="#ec4899" />
        <text x="160" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#9d174d">CẤU TẠO HOA LƯỠNG TÍNH</text>
        <text x="15" y="52" font-size="11" fill="#be185d"><tspan font-weight="bold">• Đài & Tràng hoa:</tspan> Bao bọc, cánh màu sắc quyến rũ côn trùng</text>
        <text x="15" y="74" font-size="11" fill="#be185d"><tspan font-weight="bold">• Nhị (đực):</tspan> Chỉ nhị + Bao phấn chứa hạt phấn</text>
        <text x="25" y="92" font-size="10" fill="#be185d">Hạt phấn chứa 1 nhân sinh dưỡng + 2 tinh tử (n)</text>
        <text x="15" y="114" font-size="11" fill="#be185d"><tspan font-weight="bold">• Nhụy (cái):</tspan> Đầu nhụy, vòi nhụy và bầu nhụy chứa noãn</text>
        <text x="25" y="132" font-size="10" fill="#be185d">Túi phôi chứa 1 noãn cầu (n) + 1 tế bào cực (2n)</text>
      </g>

      <!-- Thụ tinh kép -->
      <g transform="translate(365, 20)">
        <rect width="370" height="150" rx="10" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="185" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#047857">HIỆN TƯỢNG THỤ TINH KÉP (HẠT KÍN)</text>
        <text x="15" y="52" font-size="11" fill="#065f46">Ống phấn dẫn 2 tinh tử xuyên qua vòi nhụy vào túi phôi:</text>
        <text x="20" y="76" font-size="11" font-weight="bold" fill="#059669">Tinh tử 1 (n) + Noãn cầu (n) → HỢP TỬ (2n) → Phát triển thành PHÔI</text>
        <text x="20" y="104" font-size="11" font-weight="bold" fill="#059669">Tinh tử 2 (n) + Nhân cực (2n) → TẾ BÀO 3n → Phát triển thành NỘI NHŨ</text>
        <text x="15" y="132" font-size="11" fill="#047857"><tspan font-weight="bold">Biến đổi sau thụ tinh:</tspan> Noãn → HẠT; Bầu nhụy → QUẢ</text>
      </g>
    </svg>`
  },

  // Bài 26: Thực hành nhân giống & thụ phấn
  26: {
    note: "Kĩ thuật chiết cành (khoanh vỏ, cạo sạch tượng tầng), ghép mắt chữ T và thụ phấn nhân tạo hoa ngô/mướp.",
    svg: `<svg viewBox="0 0 760 180" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="180" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <g transform="translate(30, 20)">
        <rect width="220" height="140" rx="8" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#047857">1. KĨ THUẬT CHIẾT CÀNH</text>
        <text x="15" y="48" font-size="10" fill="#065f46">• Khoanh 2 vòng vỏ cách nhau 2-3cm</text>
        <text x="15" y="68" font-size="10" fill="#065f46">• Bóc vỏ, CẠO SẠCH TƯỢNG TẦNG</text>
        <text x="15" y="88" font-size="10" fill="#065f46">• Đắp bầu mùn xơ dừa ẩm, bọc nilon</text>
        <text x="15" y="112" font-size="10" font-weight="bold" fill="#047857">Rễ mọc từ mép vỏ phía trên</text>
        <text x="15" y="128" font-size="9" fill="#64748b">Do auxin & đường ứ lại ở mép trên</text>
      </g>

      <g transform="translate(270, 20)">
        <rect width="220" height="140" rx="8" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">2. GHÉP MẮT CHỮ T</text>
        <text x="15" y="48" font-size="10" fill="#1e40af">• Rạch vỏ chữ T trên gốc ghép</text>
        <text x="15" y="68" font-size="10" fill="#1e40af">• Gọt mắt ngủ hình khiên có mẩu vỏ</text>
        <text x="15" y="88" font-size="10" fill="#1e40af">• Cài mắt ghép áp sát tầng sinh mạch</text>
        <text x="15" y="112" font-size="10" font-weight="bold" fill="#1d4ed8">Buộc chặt nilon chừa đỉnh mắt</text>
        <text x="15" y="128" font-size="9" fill="#64748b">Cây con mang đặc tính tốt của cành ghép</text>
      </g>

      <g transform="translate(510, 20)">
        <rect width="220" height="140" rx="8" fill="#fefce8" class="dark:fill-amber-950/40" stroke="#f59e0b" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#b45309">3. THỤ PHẤN NHÂN TẠO</text>
        <text x="15" y="48" font-size="10" fill="#92400e">• Thực hiện sáng sớm mát mẻ 7-9h</text>
        <text x="15" y="68" font-size="10" fill="#92400e">• Lấy hoa đực quét lên nhụy hoa cái</text>
        <text x="15" y="88" font-size="10" fill="#92400e">• Đầu nhụy có chất dính đón phấn</text>
        <text x="15" y="112" font-size="10" font-weight="bold" fill="#b45309">Tăng tỉ lệ đậu quả đạt >90%</text>
        <text x="15" y="128" font-size="9" fill="#64748b">Quả tròn đều, không bị lép méo</text>
      </g>
    </svg>`
  },

  // Bài 27: Sinh sản ở động vật & Kế hoạch hóa
  27: {
    note: "Quá trình sinh tinh (4 tinh trùng n), sinh trứng (1 trứng n + 3 thể cực); trục dưới đồi - tuyến yên - tuyến sinh dục và cơ chế tránh thai.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Sinh tinh & Sinh trứng -->
      <g transform="translate(25, 20)">
        <rect width="360" height="150" rx="10" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="180" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#1d4ed8">SINH TINH & SINH TRỨNG Ở ĐỘNG VẬT</text>
        <text x="15" y="52" font-size="11" fill="#1e40af"><tspan font-weight="bold">• Sinh tinh (Tinh hoàn):</tspan> 1 Tinh bào bậc 1 (2n) qua giảm phân</text>
        <text x="25" y="70" font-size="10" font-weight="bold" fill="#2563eb">→ Tạo 4 TINH TRÙNG (n) có đuôi bơi linh hoạt</text>
        <text x="15" y="94" font-size="11" fill="#1e40af"><tspan font-weight="bold">• Sinh trứng (Buồng trứng):</tspan> 1 Noãn bào bậc 1 (2n) qua giảm phân</text>
        <text x="25" y="112" font-size="10" font-weight="bold" fill="#7c3aed">→ Tạo 1 TẾ BÀO TRỨNG (n) giàu noãn hoàng + 3 Thể cực tiêu biến</text>
        <text x="15" y="134" font-size="11" font-weight="bold" fill="#059669">Thụ tinh trong: Tăng xác suất thụ thai và bảo vệ hợp tử</text>
      </g>

      <!-- Điều hòa nội tiết & Tránh thai -->
      <g transform="translate(400, 20)">
        <rect width="335" height="150" rx="10" fill="#fffbeb" class="dark:fill-amber-950/40" stroke="#f59e0b" />
        <text x="167" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#b45309">ĐIỀU HÒA SINH SẢN & TRÁNH THAI</text>
        <text x="15" y="50" font-size="11" fill="#92400e"><tspan font-weight="bold">• Trục:</tspan> Dưới đồi (GnRH) → Tuyến yên (FSH, LH) → Tinh hoàn/Buồng trứng</text>
        <text x="15" y="72" font-size="11" fill="#92400e"><tspan font-weight="bold">• Viên thuốc tránh thai:</tspan> Chứa progesterone + estrogen duy trì</text>
        <text x="25" y="90" font-size="10" font-weight="bold" fill="#b45309">phản hồi âm ức chế FSH/LH → KHÔNG RỤNG TRỨNG</text>
        <text x="15" y="112" font-size="11" fill="#92400e"><tspan font-weight="bold">• Bao cao su:</tspan> Rào cản cơ học kép:</text>
        <text x="25" y="130" font-size="10" font-weight="bold" fill="#be123c">Ngừa thai hiệu quả + Phòng tránh lây nhiễm STDs / HIV</text>
      </g>
    </svg>`
  },

  // Bài 28: Hệ thống mở & Tự điều chỉnh
  28: {
    note: "Cơ thể là một hệ thống mở tự điều chỉnh: Sự liên hoàn rễ-thân-lá ở cây và mạng lưới máu kết nối Tiêu hóa - Hô hấp - Tế bào - Thận ở người.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Thực vật -->
      <g transform="translate(25, 20)">
        <rect width="350" height="150" rx="10" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="175" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#047857">TÍNH THỐNG NHẤT Ở CÂY XANH</text>
        <text x="15" y="50" font-size="11" fill="#065f46"><tspan font-weight="bold">• Rễ:</tspan> Hút H₂O & khoáng chuyển lên lá qua mạch gỗ</text>
        <text x="15" y="72" font-size="11" fill="#065f46"><tspan font-weight="bold">• Lá:</tspan> Quang hợp tạo sucrose chuyển nuôi thân và rễ qua mạch rây</text>
        <text x="15" y="94" font-size="11" fill="#065f46"><tspan font-weight="bold">• Thoát hơi nước:</tspan> Tạo lực hút chính kéo dòng nước từ rễ lên</text>
        <text x="15" y="116" font-size="11" fill="#065f46"><tspan font-weight="bold">• Hô hấp ti thể:</tspan> Tạo ATP cung cấp cho rễ hút khoáng chủ động</text>
        <text x="15" y="136" font-size="11" font-weight="bold" fill="#047857">Tác động 1 cơ quan ảnh hưởng đến toàn bộ cây</text>
      </g>

      <!-- Động vật -->
      <g transform="translate(390, 20)">
        <rect width="345" height="150" rx="10" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="172" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#1d4ed8">TÍNH THỐNG NHẤT Ở NGƯỜI</text>
        <text x="15" y="50" font-size="11" fill="#1e40af"><tspan font-weight="bold">• Tiêu hóa:</tspan> Biến đổi thức ăn, lông ruột hấp thu chất dinh dưỡng</text>
        <text x="15" y="72" font-size="11" fill="#1e40af"><tspan font-weight="bold">• Hô hấp:</tspan> Phế nang tiếp nhận O₂ và đào thải khí CO₂</text>
        <text x="15" y="94" font-size="11" fill="#1e40af"><tspan font-weight="bold">• Hệ tuần hoàn máu:</tspan> Luân chuyển nuôi dưỡng toàn bộ mô cơ thể</text>
        <text x="15" y="116" font-size="11" fill="#1e40af"><tspan font-weight="bold">• Bài tiết (Thận):</tspan> Lọc máu thải độc, giữ cân bằng nội môi</text>
        <text x="15" y="136" font-size="11" font-weight="bold" fill="#1d4ed8">Thần kinh & Thể dịch chỉ huy nhịp nhàng theo nhu cầu</text>
      </g>
    </svg>`
  },

  // Bài 29: Ngành nghề liên quan đến sinh học cơ thể
  29: {
    note: "Bản đồ ứng dụng nghề nghiệp: Y - Dược học (Tế bào gốc, vaccine), Nông - Lâm - Thủy sản, Công nghệ sinh học Bioreactor và Đạo đức sinh học 3R.",
    svg: `<svg viewBox="0 0 760 180" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="180" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <g transform="translate(25, 20)">
        <rect width="165" height="140" rx="8" fill="#fef2f2" class="dark:fill-rose-950/40" stroke="#f43f5e" />
        <text x="82" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#be123c">1. Y HỌC & DƯỢC</text>
        <text x="10" y="48" font-size="10" fill="#9f1239">• Bác sĩ điều trị, ngoại khoa</text>
        <text x="10" y="68" font-size="10" fill="#9f1239">• Trị liệu tế bào gốc</text>
        <text x="10" y="88" font-size="10" fill="#9f1239">• Nghiên cứu & bào chế thuốc</text>
        <text x="10" y="108" font-size="10" fill="#9f1239">• Sản xuất vaccine thế hệ mới</text>
        <text x="10" y="126" font-size="10" font-weight="bold" fill="#be123c">Bảo vệ sức khỏe nhân loại</text>
      </g>

      <g transform="translate(205, 20)">
        <rect width="170" height="140" rx="8" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="85" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#047857">2. NÔNG - LÂM - THỦY SẢN</text>
        <text x="10" y="48" font-size="10" fill="#065f46">• Kĩ sư chọn giống cây trồng</text>
        <text x="10" y="68" font-size="10" fill="#065f46">• Bác sĩ thú y, chăn nuôi</text>
        <text x="10" y="88" font-size="10" fill="#065f46">• Nông nghiệp nhà màng CNC</text>
        <text x="10" y="108" font-size="10" fill="#065f46">• Nuôi thủy sản tuần hoàn</text>
        <text x="10" y="126" font-size="10" font-weight="bold" fill="#047857">An ninh lương thực bền vững</text>
      </g>

      <g transform="translate(390, 20)">
        <rect width="175" height="140" rx="8" fill="#faf5ff" class="dark:fill-purple-950/40" stroke="#a855f7" />
        <text x="87" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#7e22ce">3. CÔNG NGHỆ SINH HỌC</text>
        <text x="10" y="48" font-size="10" fill="#6b21a8">• Nhân giống In vitro cấy mô</text>
        <text x="10" y="68" font-size="10" fill="#6b21a8">• Nuôi TB trong Bioreactor</text>
        <text x="10" y="88" font-size="10" fill="#6b21a8">• Thu hoạt chất quý (sâm, taxol)</text>
        <text x="10" y="108" font-size="10" fill="#6b21a8">• Sinh vật chuyển gen (GMO)</text>
        <text x="10" y="126" font-size="10" font-weight="bold" fill="#7e22ce">Kinh tế sinh học tương lai</text>
      </g>

      <g transform="translate(580, 20)">
        <rect width="155" height="140" rx="8" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="77" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">4. ĐẠO ĐỨC SINH HỌC</text>
        <text x="10" y="48" font-size="10" font-weight="bold" fill="#1e40af">Nguyên tắc chuẩn 3R:</text>
        <text x="10" y="68" font-size="10" fill="#1e40af">• Thay thế (Replace)</text>
        <text x="10" y="88" font-size="10" fill="#1e40af">• Giảm thiểu (Reduce)</text>
        <text x="10" y="108" font-size="10" fill="#1e40af">• Tinh chế nhân đạo (Refine)</text>
        <text x="10" y="126" font-size="10" font-weight="bold" fill="#1d4ed8">Tôn trọng quyền sống</text>
      </g>
    </svg>`
  }
};

module.exports = p2_diagrams;
