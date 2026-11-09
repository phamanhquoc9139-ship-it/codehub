// Generator for ict12_svgs.js
const fs = require('fs');

const svgs = {
  1: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">GIAO DIỆN GANTTPROJECT VÀ CẤU TRÚC PHÂN CẤP NHIỆM VỤ (WBS)</text>
  
  <!-- Left panel: Task Table with WBS Indent -->
  <rect x="25" y="45" width="370" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <rect x="25" y="45" width="370" height="28" rx="8" fill="#0f172a"/>
  <text x="40" y="63" font-size="9.5" font-weight="700" fill="#38bdf8">Tên nhiệm vụ (WBS)</text>
  <text x="210" y="63" font-size="9.5" font-weight="700" fill="#38bdf8">Bắt đầu</text>
  <text x="280" y="63" font-size="9.5" font-weight="700" fill="#38bdf8">Thời lượng</text>
  <text x="350" y="63" font-size="9.5" font-weight="700" fill="#38bdf8">Tiến độ</text>

  <!-- Summary Task 1 -->
  <rect x="30" y="77" width="360" height="22" rx="3" fill="#334155"/>
  <text x="40" y="92" font-size="9.5" font-weight="900" fill="#f8fafc">▼ 1. Chuẩn bị kỉ yếu 12A1</text>
  <text x="210" y="92" font-size="8.5" fill="#e2e8f0">01/03</text>
  <text x="285" y="92" font-size="8.5" font-weight="700" fill="#38bdf8">14 ngày</text>
  <text x="355" y="92" font-size="8.5" font-weight="700" fill="#4ade80">100%</text>

  <!-- Subtask 1.1 (Indented) -->
  <rect x="30" y="103" width="360" height="20" rx="2" fill="#1e293b"/>
  <text x="60" y="117" font-size="9" fill="#e2e8f0">↳ 1.1 Họp ban cán sự & duyệt ý tưởng</text>
  <text x="210" y="117" font-size="8.5" fill="#94a3b8">01/03</text>
  <text x="285" y="117" font-size="8.5" fill="#94a3b8">2 ngày</text>
  <text x="355" y="117" font-size="8.5" fill="#4ade80">100%</text>

  <!-- Subtask 1.2 (Indented) -->
  <rect x="30" y="127" width="360" height="20" rx="2" fill="#1e293b"/>
  <text x="60" y="141" font-size="9" fill="#e2e8f0">↳ 1.2 Viết kịch bản chi tiết</text>
  <text x="210" y="141" font-size="8.5" fill="#94a3b8">03/03</text>
  <text x="285" y="141" font-size="8.5" fill="#94a3b8">5 ngày</text>
  <text x="355" y="141" font-size="8.5" fill="#4ade80">100%</text>

  <!-- Summary Task 2 -->
  <rect x="30" y="151" width="360" height="22" rx="3" fill="#334155"/>
  <text x="40" y="166" font-size="9.5" font-weight="900" fill="#f8fafc">▼ 2. Thu thập tư liệu & Dựng phim</text>
  <text x="210" y="166" font-size="8.5" fill="#e2e8f0">08/03</text>
  <text x="285" y="166" font-size="8.5" font-weight="700" fill="#38bdf8">18 ngày</text>
  <text x="355" y="166" font-size="8.5" font-weight="700" fill="#fbbf24">60%</text>

  <!-- Subtask 2.1 -->
  <rect x="30" y="177" width="360" height="20" rx="2" fill="#1e293b"/>
  <text x="60" y="191" font-size="9" fill="#e2e8f0">↳ 2.1 Quay cảnh lớp học & phỏng vấn</text>
  <text x="210" y="191" font-size="8.5" fill="#94a3b8">08/03</text>
  <text x="285" y="191" font-size="8.5" fill="#94a3b8">8 ngày</text>
  <text x="355" y="191" font-size="8.5" fill="#4ade80">100%</text>

  <text x="210" y="212" text-anchor="middle" font-size="8.5" font-weight="700" fill="#38bdf8">Nút Indent (→) tạo nhiệm vụ con • Tự động tính thời gian</text>

  <!-- Right panel: Gantt Chart Timeline -->
  <rect x="410" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <rect x="410" y="45" width="365" height="28" rx="8" fill="#0f172a"/>
  <!-- Days header -->
  <text x="440" y="63" font-size="9" font-weight="700" fill="#94a3b8">T2 (01)</text>
  <text x="490" y="63" font-size="9" font-weight="700" fill="#94a3b8">T4 (03)</text>
  <text x="540" y="63" font-size="9" font-weight="700" fill="#94a3b8">T2 (08)</text>
  <text x="590" y="63" font-size="9" font-weight="700" fill="#94a3b8">T6 (12)</text>
  <text x="640" y="63" font-size="9" font-weight="700" fill="#94a3b8">T4 (17)</text>
  <text x="700" y="63" font-size="9" font-weight="700" fill="#94a3b8">T2 (22)</text>

  <!-- Timeline Grid Lines -->
  <line x1="450" y1="73" x2="450" y2="200" stroke="#334155" stroke-dasharray="2,2"/>
  <line x1="500" y1="73" x2="500" y2="200" stroke="#334155" stroke-dasharray="2,2"/>
  <line x1="550" y1="73" x2="550" y2="200" stroke="#334155" stroke-dasharray="2,2"/>
  <line x1="600" y1="73" x2="600" y2="200" stroke="#334155" stroke-dasharray="2,2"/>
  <line x1="650" y1="73" x2="650" y2="200" stroke="#334155" stroke-dasharray="2,2"/>
  <line x1="710" y1="73" x2="710" y2="200" stroke="#334155" stroke-dasharray="2,2"/>

  <!-- Summary Bar 1 (bracket shape) -->
  <path d="M430,82 L550,82 L550,88 L546,85 L434,85 L430,88 Z" fill="#94a3b8"/>

  <!-- Bar 1.1 -->
  <rect x="430" y="106" width="30" height="14" rx="3" fill="#0284c7" stroke="#38bdf8"/>
  <!-- Bar 1.2 -->
  <rect x="465" y="130" width="80" height="14" rx="3" fill="#0284c7" stroke="#38bdf8"/>
  <!-- Link arrow 1.1 to 1.2 -->
  <path d="M460,113 L465,113 L465,130" stroke="#f59e0b" stroke-width="1.5" fill="none"/>

  <!-- Summary Bar 2 -->
  <path d="M550,156 L720,156 L720,162 L716,159 L554,159 L550,162 Z" fill="#94a3b8"/>

  <!-- Bar 2.1 -->
  <rect x="550" y="180" width="100" height="14" rx="3" fill="#10b981" stroke="#34d399"/>
  <!-- Progress overlay on 2.1 -->
  <rect x="550" y="180" width="100" height="14" rx="3" fill="#059669"/>

  <text x="590" y="212" text-anchor="middle" font-size="8.5" font-weight="700" fill="#4ade80">Thanh thời gian trực quan • Hiển thị liên kết phụ thuộc FS</text>
</svg>`,

  2: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">QUAN HỆ TIỀN NHIỆM (PREDECESSORS) VÀ MỐC TIẾN ĐỘ (MILESTONE)</text>
  
  <!-- Left: Dependency Types (FS, SS, FF) -->
  <rect x="25" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="207" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. CÁC KIỂU LIÊN KẾT PHỤ THUỘC</text>
  
  <!-- FS: Finish to Start -->
  <g transform="translate(45, 80)">
    <rect x="0" y="0" width="80" height="20" rx="4" fill="#0284c7"/>
    <text x="40" y="14" text-anchor="middle" font-size="8.5" font-weight="700" fill="#ffffff">Nhiệm vụ A</text>
    
    <path d="M80,10 L115,10 L115,30 L130,30" stroke="#f59e0b" stroke-width="2" fill="none"/>
    <polygon points="130,30 124,27 124,33" fill="#f59e0b"/>

    <rect x="130" y="20" width="85" height="20" rx="4" fill="#10b981"/>
    <text x="172" y="34" text-anchor="middle" font-size="8.5" font-weight="700" fill="#ffffff">Nhiệm vụ B</text>

    <text x="235" y="22" font-size="10" font-weight="700" fill="#38bdf8">Kiểu FS (Finish-to-Start)</text>
    <text x="235" y="36" font-size="8" fill="#94a3b8">A xong thì B mới được bắt đầu</text>
  </g>

  <!-- SS: Start to Start -->
  <g transform="translate(45, 135)">
    <rect x="0" y="0" width="80" height="20" rx="4" fill="#0284c7"/>
    <text x="40" y="14" text-anchor="middle" font-size="8.5" font-weight="700" fill="#ffffff">Nhiệm vụ C</text>
    
    <path d="M0,10 L-10,10 L-10,25 L10,25" stroke="#a855f7" stroke-width="2" fill="none"/>
    <polygon points="10,25 4,22 4,28" fill="#a855f7"/>

    <rect x="10" y="15" width="85" height="20" rx="4" fill="#6366f1"/>
    <text x="52" y="29" text-anchor="middle" font-size="8.5" font-weight="700" fill="#ffffff">Nhiệm vụ D</text>

    <text x="130" y="18" font-size="10" font-weight="700" fill="#c084fc">Kiểu SS (Start-to-Start)</text>
    <text x="130" y="32" font-size="8" fill="#94a3b8">C bắt đầu thì D cũng bắt đầu cùng</text>
  </g>

  <text x="207" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#4ade80">Tự động dịch chuyển toàn bộ khi khâu trước bị trễ hạn</text>

  <!-- Right: Milestone Concept -->
  <rect x="410" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="592" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#fbbf24">2. MỐC QUAN TRỌNG (MILESTONE)</text>
  
  <!-- Milestone Diamond Shape -->
  <g transform="translate(592, 115)">
    <rect x="-18" y="-18" width="36" height="36" rx="4" transform="rotate(45)" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
    <text x="0" y="4" text-anchor="middle" font-size="11" font-weight="900" fill="#0f172a">★</text>
  </g>

  <rect x="435" y="150" width="315" height="36" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="592" y="165" text-anchor="middle" font-size="9.5" font-weight="700" fill="#e2e8f0">THỜI LƯỢNG = 0 NGÀY (Duration: 0d)</text>
  <text x="592" y="178" text-anchor="middle" font-size="8.5" fill="#94a3b8">Đánh dấu sự kiện kết thúc giai đoạn: Kí duyệt kịch bản, Công chiếu</text>

  <text x="592" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#38bdf8">Tích chọn checkbox 'Milestone' trong Task Properties</text>
</svg>`,

  3: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">PHÂN BỔ NGUỒN LỰC VÀ NHẬN DIỆN CẢNH BÁO QUÁ TẢI (200% OVERLOAD)</text>
  
  <!-- Left: Normal Resource Allocation 100% -->
  <rect x="25" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#22c55e" stroke-width="1.5"/>
  <text x="207" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#4ade80">1. PHÂN BỔ HỢP LÝ (TẢI 100%)</text>
  
  <rect x="45" y="85" width="325" height="40" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="60" y="105" font-size="10" font-weight="700" fill="#e2e8f0">Thành viên: Nguyễn Văn A (Quay phim)</text>
  <text x="60" y="118" font-size="8.5" fill="#94a3b8">Định mức: 150.000đ/ngày • Nghỉ: Chủ Nhật</text>

  <!-- Allocation bar normal -->
  <rect x="45" y="135" width="160" height="24" rx="4" fill="#0284c7" stroke="#38bdf8"/>
  <text x="125" y="151" text-anchor="middle" font-size="8.5" font-weight="700" fill="#ffffff">Nhiệm vụ 1 (100%)</text>

  <rect x="210" y="135" width="160" height="24" rx="4" fill="#10b981" stroke="#34d399"/>
  <text x="290" y="151" text-anchor="middle" font-size="8.5" font-weight="700" fill="#ffffff">Nhiệm vụ 2 (100%)</text>

  <text x="207" y="185" text-anchor="middle" font-size="9" fill="#e2e8f0">Hai nhiệm vụ nối tiếp nhau tuần tự</text>
  <text x="207" y="205" text-anchor="middle" font-size="9" font-weight="700" fill="#22c55e">✓ Tải tối đa 100% • Không xung đột công việc</text>

  <!-- Right: Resource Overload 200% -->
  <rect x="410" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="592" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#f87171">2. CẢNH BÁO QUÁ TẢI (OVERLOAD 200%)</text>
  
  <rect x="430" y="85" width="325" height="40" rx="6" fill="#0f172a" stroke="#ef4444"/>
  <text x="445" y="105" font-size="10" font-weight="700" fill="#fca5a5">Thành viên: Trần Nam (Đạo diễn & Dựng)</text>
  <text x="445" y="118" font-size="8.5" font-weight="700" fill="#ef4444">⚠️ CẢNH BÁO: TỔNG TẢI 200% TRONG TUẦN 3</text>

  <!-- Overlapping tasks -->
  <rect x="430" y="132" width="220" height="18" rx="3" fill="#0284c7"/>
  <text x="540" y="145" text-anchor="middle" font-size="8" fill="#ffffff">Quay bổ sung (100% tải)</text>

  <rect x="520" y="154" width="220" height="18" rx="3" fill="#ef4444"/>
  <text x="630" y="167" text-anchor="middle" font-size="8" font-weight="700" fill="#ffffff">Dựng clip thô (100% tải) ➜ TRÙNG NHAU!</text>

  <!-- Overload highlight zone -->
  <rect x="520" y="130" width="130" height="45" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>

  <text x="592" y="205" text-anchor="middle" font-size="8.5" font-weight="700" fill="#fbbf24">Giải pháp: Giảm tỉ lệ 50%, dời lịch hoặc đổi người</text>
</svg>`,

  4: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">ĐỐI CHIẾU ĐƯỜNG CƠ SỞ (BASELINE) VÀ THEO DÕI TIẾN ĐỘ THỰC TẾ</text>
  
  <!-- Left panel: Baseline Principle -->
  <rect x="25" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="207" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. BẢN SAO ĐÓNG BĂNG KẾ HOẠCH GỐC</text>
  
  <rect x="45" y="85" width="325" height="50" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="60" y="105" font-size="9.5" font-weight="700" fill="#fbbf24">Baseline (Đường cơ sở chuẩn)</text>
  <text x="60" y="122" font-size="8.5" fill="#94a3b8">Lưu cố định sau khi ban giám hiệu/giáo viên phê duyệt kế hoạch</text>

  <rect x="45" y="145" width="325" height="40" rx="6" fill="#0f172a" stroke="#0ea5e9"/>
  <text x="60" y="162" font-size="9.5" font-weight="700" fill="#38bdf8">So sánh tiến độ liên tục</text>
  <text x="60" y="176" font-size="8.5" fill="#e2e8f0">Nhận diện khâu nào xong sớm, khâu nào bị chậm trễ</text>

  <text x="207" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#4ade80">Lệnh: Project > Baselines > Create Baseline</text>

  <!-- Right panel: Comparison Visual -->
  <rect x="410" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="592" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">2. SO SÁNH TRÊN BIỂU ĐỒ GANTT</text>
  
  <!-- Task 1: Finished early -->
  <g transform="translate(430, 85)">
    <text x="0" y="12" font-size="9" font-weight="700" fill="#e2e8f0">Thu thập ảnh:</text>
    <!-- Actual Bar (Top) -->
    <rect x="90" y="0" width="80" height="14" rx="2" fill="#10b981"/>
    <text x="175" y="11" font-size="8" font-weight="700" fill="#4ade80">Xong sớm 1 ngày (100%)</text>
    <!-- Baseline Bar (Bottom) -->
    <rect x="90" y="16" width="105" height="6" rx="1" fill="#64748b"/>
    <text x="200" y="22" font-size="7.5" fill="#94a3b8">Baseline gốc</text>
  </g>

  <!-- Task 2: Delayed -->
  <g transform="translate(430, 135)">
    <text x="0" y="12" font-size="9" font-weight="700" fill="#e2e8f0">Quay ngoại cảnh:</text>
    <!-- Actual Bar (Top, shifted right) -->
    <rect x="120" y="0" width="110" height="14" rx="2" fill="#ef4444"/>
    <text x="235" y="11" font-size="8" font-weight="700" fill="#f87171">Trễ 2 ngày (40%)</text>
    <!-- Baseline Bar (Bottom) -->
    <rect x="90" y="16" width="110" height="6" rx="1" fill="#64748b"/>
    <text x="205" y="22" font-size="7.5" fill="#94a3b8">Baseline gốc</text>
  </g>

  <text x="592" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#fbbf24">Dải màu đậm bên trong thanh biểu thị % Progress thực tế</text>
</svg>`,

  5: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">TÍCH HỢP TƯ LIỆU ĐÁM MÂY (WEB LINK) VÀ BÁO CÁO TIẾN ĐỘ</text>
  
  <!-- Left: Web Link in GanttProject -->
  <rect x="25" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="207" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. GẮN LIÊN KẾT ĐÁM MÂY (WEB LINK)</text>
  
  <rect x="45" y="85" width="325" height="65" rx="6" fill="#0f172a" stroke="#0ea5e9"/>
  <text x="60" y="105" font-size="9" font-weight="700" fill="#38bdf8">Hộp thoại Task Properties > Web Link:</text>
  <rect x="60" y="115" width="295" height="24" rx="4" fill="#1e293b" stroke="#334155"/>
  <text x="70" y="131" font-size="8.5" font-family="monospace" fill="#67e8f9">https://drive.google.com/drive/folders/kỷ-yếu-12a1</text>

  <g transform="translate(45, 160)">
    <circle cx="15" cy="15" r="10" fill="#0284c7"/>
    <text x="15" y="19" text-anchor="middle" font-size="11" fill="#ffffff">🔗</text>
    <text x="35" y="18" font-size="9" fill="#e2e8f0">Nhấp biểu tượng quả cầu để mở trực tiếp kịch bản, ảnh thô</text>
  </g>
  <text x="207" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#4ade80">Tránh phân mảnh dữ liệu • Không cần gửi file qua Zalo/Email</text>

  <!-- Right: Report & Mindmap Output -->
  <rect x="410" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="592" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">2. XUẤT BÁO CÁO TIẾN ĐỘ TRỰC QUAN</text>
  
  <!-- Mindmap nodes -->
  <rect x="520" y="85" width="145" height="26" rx="6" fill="#4338ca" stroke="#818cf8"/>
  <text x="592" y="101" text-anchor="middle" font-size="9" font-weight="900" fill="#ffffff">BÁO CÁO KỈ YẾU 12A1</text>

  <!-- Branches -->
  <line x1="520" y1="98" x2="455" y2="125" stroke="#38bdf8" stroke-width="1.5"/>
  <rect x="425" y="125" width="85" height="20" rx="4" fill="#0284c7"/>
  <text x="467" y="138" text-anchor="middle" font-size="8" fill="#ffffff">Đã xong: 22 việc</text>

  <line x1="592" y1="111" x2="592" y2="125" stroke="#f59e0b" stroke-width="1.5"/>
  <rect x="550" y="125" width="85" height="20" rx="4" fill="#d97706"/>
  <text x="592" y="138" text-anchor="middle" font-size="8" fill="#ffffff">Đang làm: 3 việc</text>

  <line x1="665" y1="98" x2="725" y2="125" stroke="#22c55e" stroke-width="1.5"/>
  <rect x="685" y="125" width="80" height="20" rx="4" fill="#15803d"/>
  <text x="725" y="138" text-anchor="middle" font-size="8" fill="#ffffff">Dư: 250.000đ</text>

  <text x="592" y="180" text-anchor="middle" font-size="9" fill="#e2e8f0">Xuất ảnh Gantt Chart PNG + Quyết toán bảng tính</text>
  <text x="592" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#38bdf8">Minh bạch tiến độ trước Ban giám hiệu và Phụ huynh</text>
</svg>`,

  6: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">QUY TRÌNH CÀI ĐẶT VÀ GỠ BỎ PHẦN MỀM CHUẨN MỰC</text>
  
  <!-- Left: Windows Control Panel Uninstall -->
  <rect x="25" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="207" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. WINDOWS: PROGRAMS & FEATURES</text>
  
  <rect x="45" y="82" width="325" height="22" rx="4" fill="#0f172a"/>
  <text x="55" y="97" font-size="8.5" font-family="monospace" fill="#38bdf8">Control Panel > Programs > Programs and Features</text>

  <!-- Software list table row -->
  <rect x="45" y="110" width="325" height="28" rx="4" fill="#334155" stroke="#0ea5e9"/>
  <text x="55" y="127" font-size="9" font-weight="700" fill="#ffffff">GanttProject 3.2</text>
  <rect x="290" y="114" width="70" height="20" rx="3" fill="#ef4444"/>
  <text x="325" y="127" text-anchor="middle" font-size="8.5" font-weight="700" fill="#ffffff">Uninstall</text>

  <rect x="45" y="145" width="325" height="40" rx="4" fill="#450a0a" stroke="#ef4444"/>
  <text x="55" y="160" font-size="8.5" font-weight="700" fill="#fca5a5">❌ SAI LẦM: Kéo Shortcut Desktop vào thùng rác</text>
  <text x="55" y="175" font-size="7.5" fill="#fca5a5">Chỉ xóa tệp lối tắt (.lnk), phần mềm và dữ liệu trong ổ C vẫn còn!</text>

  <text x="207" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#22c55e">Dọn dẹp sạch Registry, thư viện DLL và Cache</text>

  <!-- Right: Mobile App Uninstall -->
  <rect x="410" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="592" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">2. THIẾT BỊ DI ĐỘNG (ANDROID & IOS)</text>
  
  <!-- Android side -->
  <g transform="translate(430, 85)">
    <rect x="0" y="0" width="150" height="90" rx="6" fill="#0f172a" stroke="#22c55e"/>
    <text x="75" y="20" text-anchor="middle" font-size="9.5" font-weight="700" fill="#4ade80">ANDROID (Google Play)</text>
    <circle cx="75" cy="45" r="14" fill="#15803d"/>
    <text x="75" y="49" text-anchor="middle" font-size="12" fill="#ffffff">📱</text>
    <text x="75" y="72" text-anchor="middle" font-size="8" fill="#e2e8f0">Chạm giữ > Gỡ cài đặt</text>
    <text x="75" y="83" text-anchor="middle" font-size="7" fill="#94a3b8">Không gỡ app hệ thống</text>
  </g>

  <!-- iOS side -->
  <g transform="translate(605, 85)">
    <rect x="0" y="0" width="150" height="90" rx="6" fill="#0f172a" stroke="#38bdf8"/>
    <text x="75" y="20" text-anchor="middle" font-size="9.5" font-weight="700" fill="#38bdf8">APPLE IOS (App Store)</text>
    <circle cx="75" cy="45" r="14" fill="#0369a1"/>
    <text x="75" y="49" text-anchor="middle" font-size="12" fill="#ffffff">🍎</text>
    <text x="75" y="72" text-anchor="middle" font-size="8" fill="#e2e8f0">Chạm giữ > Xóa ứng dụng</text>
    <text x="75" y="83" text-anchor="middle" font-size="7" fill="#fbbf24">Phân biệt với Ẩn màn hình</text>
  </g>

  <text x="592" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#4ade80">Chỉ tải từ kho ứng dụng chính thức • Tránh file APK lạ</text>
</svg>`,

  7: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">CÀI ĐẶT HỆ ĐIỀU HÀNH: TẠO USB BOOT VÀ PHÂN VÙNG AN TOÀN</text>
  
  <!-- Left: Rufus USB Creator -->
  <rect x="25" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="207" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. CÔNG CỤ TẠO USB BOOT (RUFUS)</text>
  
  <rect x="45" y="82" width="325" height="30" rx="4" fill="#0f172a"/>
  <text x="55" y="96" font-size="8.5" fill="#94a3b8">File nguồn:</text>
  <text x="110" y="96" font-size="8.5" font-weight="700" fill="#67e8f9">Windows_11_23H2_x64.iso (Microsoft chuẩn)</text>

  <rect x="45" y="118" width="155" height="42" rx="4" fill="#0f172a" stroke="#0ea5e9"/>
  <text x="122" y="133" text-anchor="middle" font-size="9" font-weight="700" fill="#38bdf8">GPT / UEFI</text>
  <text x="122" y="148" text-anchor="middle" font-size="7.5" fill="#94a3b8">Máy tính đời mới chuẩn NVMe</text>

  <rect x="215" y="118" width="155" height="42" rx="4" fill="#0f172a" stroke="#64748b"/>
  <text x="292" y="133" text-anchor="middle" font-size="9" font-weight="700" fill="#94a3b8">MBR / BIOS Legacy</text>
  <text x="292" y="148" text-anchor="middle" font-size="7.5" fill="#64748b">Máy tính đời cũ hơn 10 năm</text>

  <text x="207" y="180" text-anchor="middle" font-size="8.5" fill="#fca5a5">⚠️ USB tối thiểu 8GB • Toàn bộ dữ liệu USB sẽ bị xóa sạch</text>
  <text x="207" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#fbbf24">Phím tắt Boot Menu: F12, F11, F9, Esc tùy dòng máy</text>

  <!-- Right: Partition Management -->
  <rect x="410" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="592" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">2. CHỌN PHÂN VÙNG CÀI ĐẶT AN TOÀN</text>
  
  <rect x="430" y="85" width="325" height="26" rx="4" fill="#1e293b" stroke="#334155"/>
  <text x="440" y="101" font-size="8.5" fill="#94a3b8">Tùy chọn cài đặt:</text>
  <text x="530" y="101" font-size="8.5" font-weight="700" fill="#38bdf8">Custom: Install Windows only (advanced)</text>

  <!-- Disk partitions visual -->
  <g transform="translate(430, 120)">
    <!-- Partition C -->
    <rect x="0" y="0" width="150" height="42" rx="4" fill="#450a0a" stroke="#ef4444"/>
    <text x="75" y="17" text-anchor="middle" font-size="8.5" font-weight="700" fill="#fca5a5">Drive 0 Partition 3 (Ổ C:)</text>
    <text x="75" y="32" text-anchor="middle" font-size="7.5" font-weight="700" fill="#ffffff">FORMAT ĐỂ CÀI WINDOWS MỚI</text>

    <!-- Partition D -->
    <rect x="165" y="0" width="160" height="42" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="245" y="17" text-anchor="middle" font-size="8.5" font-weight="700" fill="#6ee7b7">Drive 0 Partition 4 (Ổ D: DATA)</text>
    <text x="245" y="32" text-anchor="middle" font-size="7.5" font-weight="700" fill="#ffffff">GIỮ NGUYÊN BẢO TOÀN DỮ LIỆU</text>
  </g>

  <text x="592" y="185" text-anchor="middle" font-size="8.5" fill="#e2e8f0">Không tắt nguồn trong khi cài đặt • Máy sẽ khởi động lại vài lần</text>
  <text x="592" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#4ade80">Cài đặt Driver và cập nhật Windows Update sau khi hoàn tất</text>
</svg>`,

  8: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">CHIẾN LƯỢC SAO LƯU 3-2-1 VÀ PHÒNG CHỐNG MÃ ĐỘC TỐNG TIỀN (RANSOMWARE)</text>
  
  <!-- Left: 3-2-1 Backup Rule -->
  <rect x="25" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#22c55e" stroke-width="1.5"/>
  <text x="207" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#4ade80">QUY TẮC SAO LƯU KINH ĐIỂN 3 - 2 - 1</text>
  
  <!-- Node 3 -->
  <g transform="translate(45, 85)">
    <rect x="0" y="0" width="95" height="80" rx="6" fill="#0f172a" stroke="#0ea5e9"/>
    <text x="47" y="28" text-anchor="middle" font-size="20" font-weight="900" fill="#38bdf8">3</text>
    <text x="47" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#ffffff">BẢN SAO</text>
    <text x="47" y="64" text-anchor="middle" font-size="7.5" fill="#94a3b8">1 gốc + 2 backup</text>
  </g>

  <!-- Node 2 -->
  <g transform="translate(160, 85)">
    <rect x="0" y="0" width="95" height="80" rx="6" fill="#0f172a" stroke="#f59e0b"/>
    <text x="47" y="28" text-anchor="middle" font-size="20" font-weight="900" fill="#fbbf24">2</text>
    <text x="47" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#ffffff">PHƯƠNG TIỆN</text>
    <text x="47" y="64" text-anchor="middle" font-size="7.5" fill="#94a3b8">Ổ máy + Ổ cứng ngoài</text>
  </g>

  <!-- Node 1 -->
  <g transform="translate(275, 85)">
    <rect x="0" y="0" width="95" height="80" rx="6" fill="#0f172a" stroke="#22c55e"/>
    <text x="47" y="28" text-anchor="middle" font-size="20" font-weight="900" fill="#4ade80">1</text>
    <text x="47" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#ffffff">NGOẠI VI</text>
    <text x="47" y="64" text-anchor="middle" font-size="7.5" fill="#94a3b8">Lưu trên Đám mây</text>
  </g>

  <text x="207" y="185" text-anchor="middle" font-size="8.5" fill="#e2e8f0">Phòng ngừa rủi ro cháy nổ, ngập nước, mất trộm máy tính</text>
  <text x="207" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#4ade80">Đảm bảo khả năng phục hồi dữ liệu 100% trong mọi tình huống</text>

  <!-- Right: Ransomware Threat -->
  <rect x="410" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="592" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#f87171">HIỂM HỌA MÃ ĐỘC TỐNG TIỀN (RANSOMWARE)</text>
  
  <rect x="430" y="85" width="325" height="75" rx="6" fill="#450a0a" stroke="#ef4444"/>
  <text x="445" y="105" font-size="10" font-weight="900" fill="#f87171">🔒 TỆP BỊ MÃ HÓA BẤT ĐỐI XỨNG</text>
  <text x="445" y="122" font-size="8.5" fill="#fca5a5">• Bài_tiểu_luận.docx ➔ Bài_tiểu_luận.docx.LOCKED</text>
  <text x="445" y="137" font-size="8.5" fill="#fca5a5">• Anh_kỉ_yếu.jpg ➔ Anh_kỉ_yếu.jpg.LOCKED</text>
  <text x="445" y="152" font-size="8" font-weight="700" fill="#fbbf24">Yêu cầu trả tiền chuộc Bitcoin để lấy chìa khóa giải mã</text>

  <rect x="430" y="170" width="325" height="36" rx="4" fill="#0f172a" stroke="#334155"/>
  <text x="592" y="185" text-anchor="middle" font-size="8.5" font-weight="700" fill="#ffffff">ĐỒNG BỘ (SYNC) ≠ SAO LƯU (BACKUP)</text>
  <text x="592" y="198" text-anchor="middle" font-size="7.5" fill="#94a3b8">Sync tự động xóa/đè tệp hỏng lên đám mây; chỉ có Backup mới an toàn</text>
</svg>`,

  9: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">CÔNG CỤ THỰC HÀNH BẢO VỆ: FILE HISTORY, GOOGLE DRIVE VÀ 7-ZIP AES</text>
  
  <!-- Left: File History Timeline Restore -->
  <rect x="25" y="45" width="240" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="145" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. WINDOWS FILE HISTORY</text>
  
  <rect x="40" y="80" width="210" height="60" rx="4" fill="#0f172a"/>
  <text x="145" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#e2e8f0">Duyệt phiên bản theo giờ</text>
  <text x="145" y="115" text-anchor="middle" font-size="8" fill="#38bdf8">14:00 (Hôm nay) ➔ 09:30 (Hôm qua)</text>
  <circle cx="145" cy="130" r="8" fill="#10b981"/>
  <text x="145" y="133" text-anchor="middle" font-size="9" font-weight="900" fill="#ffffff">↺</text>

  <text x="145" y="165" text-anchor="middle" font-size="8.5" fill="#e2e8f0">Nút xanh Restore khôi phục tệp</text>
  <text x="145" y="185" text-anchor="middle" font-size="8" fill="#94a3b8">Lưu lịch sử thay đổi tài liệu</text>
  <text x="145" y="205" text-anchor="middle" font-size="8" font-weight="700" fill="#4ade80">Không sợ lưu đè nhầm nội dung</text>

  <!-- Center: Google Drive 3 Sync Icons -->
  <rect x="280" y="45" width="240" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="400" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">2. TRẠNG THÁI GOOGLE DRIVE</text>
  
  <g transform="translate(300, 85)">
    <circle cx="20" cy="15" r="10" fill="#10b981"/>
    <text x="20" y="19" text-anchor="middle" font-size="10" font-weight="900" fill="#ffffff">✓</text>
    <text x="40" y="19" font-size="8.5" font-weight="700" fill="#4ade80">Dấu tích xanh: Đã đồng bộ</text>

    <circle cx="20" cy="45" r="10" fill="#0ea5e9"/>
    <text x="20" y="49" text-anchor="middle" font-size="10" font-weight="900" fill="#ffffff">⇄</text>
    <text x="40" y="49" font-size="8.5" font-weight="700" fill="#38bdf8">Xoay tròn: Đang tải lên</text>

    <circle cx="20" cy="75" r="10" fill="#ef4444"/>
    <text x="20" y="79" text-anchor="middle" font-size="10" font-weight="900" fill="#ffffff">!</text>
    <text x="40" y="79" font-size="8.5" font-weight="700" fill="#f87171">Chấm than đỏ: Lỗi xung đột</text>
  </g>

  <text x="400" y="190" text-anchor="middle" font-size="8.5" fill="#e2e8f0">Sync or Backup this folder</text>
  <text x="400" y="208" text-anchor="middle" font-size="8" font-weight="700" fill="#fbbf24">Kiểm tra Drive trên web xác nhận</text>

  <!-- Right: 7-Zip AES-256 Encryption -->
  <rect x="535" y="45" width="240" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="655" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">3. MÃ HÓA 7-ZIP AES-256</text>
  
  <rect x="550" y="80" width="210" height="70" rx="4" fill="#0f172a" stroke="#8b5cf6"/>
  <text x="560" y="98" font-size="8.5" font-weight="700" fill="#c084fc">Encryption Method: AES-256</text>
  <text x="560" y="115" font-size="8" fill="#e2e8f0">Password: ••••••••••••</text>
  <rect x="560" y="125" width="10" height="10" rx="2" fill="#8b5cf6"/>
  <text x="565" y="133" text-anchor="middle" font-size="8" font-weight="900" fill="#ffffff">✓</text>
  <text x="575" y="133" font-size="8" font-weight="700" fill="#ffffff">Encrypt file names (.7z)</text>

  <text x="655" y="170" text-anchor="middle" font-size="8.5" fill="#e2e8f0">Ẩn hoàn toàn tên tệp bên trong</text>
  <text x="655" y="190" text-anchor="middle" font-size="8" fill="#94a3b8">Bảo mật chuẩn quân sự</text>
  <text x="655" y="208" text-anchor="middle" font-size="8" font-weight="700" fill="#4ade80">Quét virus với Windows Defender</text>
</svg>`,

  10: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">XÁC SUẤT CỔ ĐIỂN, CÁC HÀM TỔ HỢP VÀ SỐ NGẪU NHIÊN TRONG EXCEL</text>
  
  <!-- Left: Classical Probability & Combinatorics -->
  <rect x="25" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="207" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. XÁC SUẤT CỔ ĐIỂN VÀ HÀM ĐẾM</text>
  
  <rect x="45" y="80" width="325" height="32" rx="4" fill="#0f172a" stroke="#0ea5e9"/>
  <text x="207" y="101" text-anchor="middle" font-size="12" font-family="monospace" font-weight="900" fill="#38bdf8">P(A) = m(A) / n(A)</text>

  <g transform="translate(45, 120)">
    <rect x="0" y="0" width="155" height="40" rx="4" fill="#0f172a"/>
    <text x="77" y="16" text-anchor="middle" font-size="9" font-weight="700" fill="#fbbf24">COMBIN(n, k)</text>
    <text x="77" y="30" text-anchor="middle" font-size="7.5" fill="#94a3b8">Tổ hợp chập k của n (không thứ tự)</text>

    <rect x="170" y="0" width="155" height="40" rx="4" fill="#0f172a"/>
    <text x="247" y="16" text-anchor="middle" font-size="9" font-weight="700" fill="#4ade80">PERMUT(n, k)</text>
    <text x="247" y="30" text-anchor="middle" font-size="7.5" fill="#94a3b8">Chỉnh hợp chập k của n (có thứ tự)</text>
  </g>

  <text x="207" y="180" text-anchor="middle" font-size="8.5" fill="#e2e8f0">BINOM.DIST(k, n, p, cumulative) tính phân phối nhị thức</text>
  <text x="207" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#38bdf8">Ví dụ SGK: Chọn 3 học sinh = COMBIN(4,1)*COMBIN(5,2) / COMBIN(9,3)</text>

  <!-- Right: Random Generator & Value Freeze -->
  <rect x="410" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="592" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">2. HÀM TẠO SỐ NGẪU NHIÊN VÀ CỐ ĐỊNH GIÁ TRỊ</text>
  
  <rect x="430" y="80" width="325" height="45" rx="4" fill="#0f172a" stroke="#334155"/>
  <text x="445" y="98" font-size="9.5" font-family="monospace" fill="#38bdf8">• RAND(): Số thực [0; 1)</text>
  <text x="445" y="114" font-size="9.5" font-family="monospace" fill="#fbbf24">• RANDBETWEEN(1, 40): Số nguyên từ 1 đến 40</text>

  <rect x="430" y="135" width="325" height="45" rx="4" fill="#0f172a" stroke="#22c55e"/>
  <text x="592" y="152" text-anchor="middle" font-size="9.5" font-weight="700" fill="#4ade80">KĨ THUẬT CỐ ĐỊNH GIÁ TRỊ (VALUE FREEZE)</text>
  <text x="592" y="168" text-anchor="middle" font-size="8.5" fill="#e2e8f0">Copy (Ctrl+C) ➔ Paste Special > Values (Số 123)</text>

  <text x="592" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#f59e0b">Tránh bảng tính tự đổi số ngẫu nhiên khi nhấn F9 hoặc nhập dữ liệu mới</text>
</svg>`,

  11: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM VÀ ĐỘ PHÂN TÁN DỮ LIỆU</text>
  
  <!-- Left: Central Tendency -->
  <rect x="25" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="207" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. XU THẾ TRUNG TÂM (CENTRAL TENDENCY)</text>
  
  <g transform="translate(45, 80)">
    <rect x="0" y="0" width="155" height="45" rx="4" fill="#0f172a" stroke="#0ea5e9"/>
    <text x="77" y="18" text-anchor="middle" font-size="9" font-weight="700" fill="#38bdf8">AVERAGE (Trung bình)</text>
    <text x="77" y="34" text-anchor="middle" font-size="7.5" fill="#94a3b8">Nhạy cảm với ngoại lệ (Outlier)</text>

    <rect x="170" y="0" width="155" height="45" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="247" y="18" text-anchor="middle" font-size="9" font-weight="700" fill="#4ade80">MEDIAN (Trung vị)</text>
    <text x="247" y="34" text-anchor="middle" font-size="7.5" fill="#94a3b8">Chống chịu ngoại lệ cực tốt</text>

    <rect x="0" y="55" width="155" height="45" rx="4" fill="#0f172a" stroke="#f59e0b"/>
    <text x="77" y="73" text-anchor="middle" font-size="9" font-weight="700" fill="#fbbf24">MODE.SNGL (Mốt)</text>
    <text x="77" y="89" text-anchor="middle" font-size="7.5" fill="#94a3b8">Giá trị xuất hiện nhiều nhất</text>

    <rect x="170" y="55" width="155" height="45" rx="4" fill="#0f172a" stroke="#8b5cf6"/>
    <text x="247" y="73" text-anchor="middle" font-size="9" font-weight="700" fill="#c084fc">QUARTILE.INC</text>
    <text x="247" y="89" text-anchor="middle" font-size="7.5" fill="#94a3b8">Tứ phân vị Q1 (25%), Q3 (75%)</text>
  </g>

  <text x="207" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#4ade80">Dữ liệu lệch ➔ Ưu tiên dùng Trung vị (MEDIAN) làm đại diện</text>

  <!-- Right: Dispersion & CV -->
  <rect x="410" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="592" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">2. ĐỘ PHÂN TÁN VÀ HỆ SỐ BIẾN THIÊN (CV)</text>
  
  <g transform="translate(430, 80)">
    <rect x="0" y="0" width="325" height="24" rx="3" fill="#0f172a"/>
    <text x="15" y="16" font-size="8.5" font-weight="700" fill="#38bdf8">• Khoảng biến thiên (Range):</text>
    <text x="180" y="16" font-size="8.5" font-family="monospace" fill="#ffffff">MAX - MIN</text>

    <rect x="0" y="28" width="325" height="24" rx="3" fill="#0f172a"/>
    <text x="15" y="44" font-size="8.5" font-weight="700" fill="#38bdf8">• Khoảng tứ phân vị (IQR):</text>
    <text x="180" y="44" font-size="8.5" font-family="monospace" fill="#ffffff">Q3 - Q1 (50% dữ liệu ở giữa)</text>

    <rect x="0" y="56" width="325" height="24" rx="3" fill="#0f172a"/>
    <text x="15" y="72" font-size="8.5" font-weight="700" fill="#38bdf8">• Độ lệch chuẩn (STDEV):</text>
    <text x="180" y="72" font-size="8.5" font-family="monospace" fill="#ffffff">STDEV.S (căn bậc hai phương sai)</text>

    <rect x="0" y="84" width="325" height="28" rx="4" fill="#0f172a" stroke="#22c55e"/>
    <text x="15" y="102" font-size="9" font-weight="900" fill="#4ade80">• Hệ số biến thiên (CV):</text>
    <text x="180" y="102" font-size="9" font-family="monospace" font-weight="700" fill="#6ee7b7">(STDEV / MEAN) × 100%</text>
  </g>

  <text x="592" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#fbbf24">CV càng nhỏ thì dữ liệu càng có độ đồng đều và tính ổn định cao</text>
</svg>`,

  12: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">MÔ TẢ SỐ LIỆU ĐA CHIỀU VỚI PIVOTTABLE VÀ GHÉP NHÓM (GROUPING)</text>
  
  <!-- Left: 4-Quadrant Pivot Layout -->
  <rect x="25" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="207" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. CẤU TRÚC 4 PHÂN VÙNG PIVOTTABLE FIELDS</text>
  
  <g transform="translate(45, 80)">
    <!-- Filters -->
    <rect x="0" y="0" width="155" height="45" rx="4" fill="#0f172a" stroke="#64748b"/>
    <text x="77" y="18" text-anchor="middle" font-size="9" font-weight="700" fill="#94a3b8">FILTERS (Bộ lọc)</text>
    <text x="77" y="32" text-anchor="middle" font-size="7.5" fill="#64748b">Lọc phạm vi toàn bảng</text>

    <!-- Columns -->
    <rect x="170" y="0" width="155" height="45" rx="4" fill="#0f172a" stroke="#0ea5e9"/>
    <text x="247" y="18" text-anchor="middle" font-size="9" font-weight="700" fill="#38bdf8">COLUMNS (Cột)</text>
    <text x="247" y="32" text-anchor="middle" font-size="7.5" fill="#94a3b8">Tạo nhóm cột phân loại ngang</text>

    <!-- Rows -->
    <rect x="0" y="55" width="155" height="45" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="77" y="73" text-anchor="middle" font-size="9" font-weight="700" fill="#4ade80">ROWS (Hàng)</text>
    <text x="77" y="87" text-anchor="middle" font-size="7.5" fill="#94a3b8">Tạo các dòng phân nhóm</text>

    <!-- Values -->
    <rect x="170" y="55" width="155" height="45" rx="4" fill="#0f172a" stroke="#f59e0b"/>
    <text x="247" y="73" text-anchor="middle" font-size="9" font-weight="700" fill="#fbbf24">VALUES (Giá trị)</text>
    <text x="247" y="87" text-anchor="middle" font-size="7.5" fill="#94a3b8">Count (Đếm) hoặc Sum (Tổng)</text>
  </g>

  <text x="207" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#38bdf8">Bảng nguồn bắt buộc: 1 dòng tiêu đề duy nhất • Không merge cells</text>

  <!-- Right: Frequency, % & Grouping -->
  <rect x="410" y="45" width="365" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="592" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">2. TẦN SUẤT VÀ GHÉP NHÓM (GROUPING)</text>
  
  <rect x="430" y="80" width="325" height="40" rx="4" fill="#0f172a" stroke="#22c55e"/>
  <text x="445" y="96" font-size="9" font-weight="700" fill="#4ade80">Hiển thị Tần suất (% of Grand Total):</text>
  <text x="445" y="110" font-size="8" fill="#e2e8f0">Value Field Settings > Show Values As > % of Grand Total</text>

  <rect x="430" y="130" width="325" height="48" rx="4" fill="#0f172a" stroke="#f59e0b"/>
  <text x="445" y="146" font-size="9" font-weight="700" fill="#fbbf24">Ghép nhóm biến định lượng (Grouping):</text>
  <text x="445" y="160" font-size="8" fill="#e2e8f0">Độ rộng khoảng: h = (Max - Min) / k</text>
  <text x="445" y="172" font-size="7.5" fill="#94a3b8">Ví dụ: Điểm 10 đến 30 chia k=4 ➔ Nhập By = 5 (khoảng: 10-15, 15-20...)</text>

  <text x="592" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#4ade80">Tổng hợp hàng trăm nghìn dòng dữ liệu chỉ trong vài giây</text>
</svg>`,

  13: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">MÔ TẢ THỐNG KÊ BẰNG BIỂU ĐỒ: CỘT, TRÒN, HISTOGRAM VÀ PARETO</text>
  
  <!-- Chart 1: Column -->
  <g transform="translate(25, 45)">
    <rect width="170" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="85" y="24" text-anchor="middle" font-size="10.5" font-weight="700" fill="#38bdf8">1. BIỂU ĐỒ CỘT</text>
    <!-- Bar visuals -->
    <rect x="35" y="80" width="22" height="60" rx="2" fill="#0284c7"/>
    <rect x="75" y="55" width="22" height="85" rx="2" fill="#0284c7"/>
    <rect x="115" y="95" width="22" height="45" rx="2" fill="#0284c7"/>
    <line x1="25" y1="140" x2="145" y2="140" stroke="#64748b"/>
    <text x="85" y="165" text-anchor="middle" font-size="9" fill="#e2e8f0">So sánh số lượng</text>
    <text x="85" y="180" text-anchor="middle" font-size="8" fill="#94a3b8">Giữa các nhóm rời rạc</text>
  </g>

  <!-- Chart 2: Pie -->
  <g transform="translate(215, 45)">
    <rect width="170" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="85" y="24" text-anchor="middle" font-size="10.5" font-weight="700" fill="#38bdf8">2. BIỂU ĐỒ TRÒN</text>
    <!-- Pie visual -->
    <circle cx="85" cy="95" r="40" fill="#0284c7"/>
    <path d="M85,95 L85,55 A40,40 0 0,1 125,95 Z" fill="#f59e0b"/>
    <path d="M85,95 L125,95 A40,40 0 0,1 85,135 Z" fill="#10b981"/>
    <text x="85" y="165" text-anchor="middle" font-size="9" fill="#e2e8f0">Cơ cấu tỉ lệ % (Tổng 100%)</text>
    <text x="85" y="180" text-anchor="middle" font-size="8" fill="#94a3b8">Nên có dưới 6 thành phần</text>
  </g>

  <!-- Chart 3: Histogram -->
  <g transform="translate(405, 45)">
    <rect width="170" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="85" y="24" text-anchor="middle" font-size="10.5" font-weight="700" fill="#38bdf8">3. HISTOGRAM</text>
    <!-- Contiguous bars -->
    <rect x="25" y="105" width="24" height="35" fill="#6366f1"/>
    <rect x="49" y="70" width="24" height="70" fill="#6366f1"/>
    <rect x="73" y="50" width="24" height="90" fill="#6366f1"/>
    <rect x="97" y="80" width="24" height="60" fill="#6366f1"/>
    <rect x="121" y="115" width="24" height="25" fill="#6366f1"/>
    <line x1="20" y1="140" x2="150" y2="140" stroke="#64748b"/>
    <text x="85" y="165" text-anchor="middle" font-size="9" fill="#e2e8f0">Phân bố tần số liên tục</text>
    <text x="85" y="180" text-anchor="middle" font-size="8" fill="#94a3b8">Các cột dính sát (bins)</text>
  </g>

  <!-- Chart 4: Pareto -->
  <g transform="translate(595, 45)">
    <rect width="180" height="175" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="90" y="24" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fbbf24">4. BIỂU ĐỒ PARETO</text>
    <!-- Descending bars -->
    <rect x="25" y="60" width="25" height="80" fill="#f59e0b"/>
    <rect x="55" y="85" width="25" height="55" fill="#f59e0b"/>
    <rect x="85" y="110" width="25" height="30" fill="#f59e0b"/>
    <rect x="115" y="125" width="25" height="15" fill="#f59e0b"/>
    <!-- Cumulative line -->
    <path d="M37,70 Q70,90 100,105 T130,110" stroke="#ef4444" stroke-width="2" fill="none"/>
    <circle cx="37" cy="70" r="2.5" fill="#ffffff"/>
    <circle cx="67" cy="95" r="2.5" fill="#ffffff"/>
    <circle cx="97" cy="115" r="2.5" fill="#ffffff"/>
    <circle cx="127" cy="120" r="2.5" fill="#ffffff"/>
    <line x1="20" y1="140" x2="155" y2="140" stroke="#64748b"/>
    <text x="90" y="165" text-anchor="middle" font-size="9" font-weight="700" fill="#fbbf24">Nguyên lý 80 / 20</text>
    <text x="90" y="180" text-anchor="middle" font-size="8" fill="#94a3b8">Tìm nguyên nhân then chốt</text>
  </g>
</svg>`,

  14: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">PHÂN TÍCH TƯƠNG QUAN TUYẾN TÍNH VÀ BIỂU ĐỒ PHÂN TÁN (SCATTER PLOT)</text>
  
  <!-- Left: Scatter Plots (Positive, Negative, Zero) -->
  <rect x="25" y="45" width="460" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="255" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. CÁC HÌNH THÁI TƯƠNG QUAN TUYẾN TÍNH</text>
  
  <!-- Positive Correlation -->
  <g transform="translate(45, 80)">
    <rect width="125" height="100" rx="4" fill="#0f172a"/>
    <line x1="15" y1="85" x2="110" y2="85" stroke="#475569"/>
    <line x1="15" y1="85" x2="15" y2="15" stroke="#475569"/>
    <!-- Dots along upward line -->
    <circle cx="30" cy="75" r="3" fill="#38bdf8"/>
    <circle cx="45" cy="65" r="3" fill="#38bdf8"/>
    <circle cx="60" cy="50" r="3" fill="#38bdf8"/>
    <circle cx="75" cy="40" r="3" fill="#38bdf8"/>
    <circle cx="90" cy="25" r="3" fill="#38bdf8"/>
    <line x1="25" y1="80" x2="100" y2="20" stroke="#0ea5e9" stroke-width="1.5" stroke-dasharray="2,2"/>
    <text x="62" y="112" text-anchor="middle" font-size="8.5" font-weight="700" fill="#38bdf8">Thuận (r > 0)</text>
  </g>

  <!-- Negative Correlation -->
  <g transform="translate(195, 80)">
    <rect width="125" height="100" rx="4" fill="#0f172a"/>
    <line x1="15" y1="85" x2="110" y2="85" stroke="#475569"/>
    <line x1="15" y1="85" x2="15" y2="15" stroke="#475569"/>
    <!-- Dots along downward line -->
    <circle cx="30" cy="25" r="3" fill="#f43f5e"/>
    <circle cx="45" cy="40" r="3" fill="#f43f5e"/>
    <circle cx="60" cy="50" r="3" fill="#f43f5e"/>
    <circle cx="75" cy="65" r="3" fill="#f43f5e"/>
    <circle cx="90" cy="75" r="3" fill="#f43f5e"/>
    <line x1="25" y1="20" x2="100" y2="80" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="2,2"/>
    <text x="62" y="112" text-anchor="middle" font-size="8.5" font-weight="700" fill="#f43f5e">Nghịch (r &lt; 0)</text>
  </g>

  <!-- Zero Correlation -->
  <g transform="translate(345, 80)">
    <rect width="125" height="100" rx="4" fill="#0f172a"/>
    <line x1="15" y1="85" x2="110" y2="85" stroke="#475569"/>
    <line x1="15" y1="85" x2="15" y2="15" stroke="#475569"/>
    <!-- Random dots -->
    <circle cx="35" cy="40" r="3" fill="#94a3b8"/>
    <circle cx="50" cy="70" r="3" fill="#94a3b8"/>
    <circle cx="65" cy="30" r="3" fill="#94a3b8"/>
    <circle cx="80" cy="60" r="3" fill="#94a3b8"/>
    <circle cx="95" cy="45" r="3" fill="#94a3b8"/>
    <text x="62" y="112" text-anchor="middle" font-size="8.5" font-weight="700" fill="#94a3b8">Không tương quan (r ≈ 0)</text>
  </g>

  <text x="255" y="210" text-anchor="middle" font-size="8.5" font-weight="700" fill="#4ade80">Hàm Excel: =CORREL(array1, array2) • Miền giá trị [-1; 1]</text>

  <!-- Right: Correlation vs Causation -->
  <rect x="505" y="45" width="270" height="175" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="640" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#fbbf24">2. NGUYÊN LÝ CỐT LÕI</text>
  
  <rect x="520" y="85" width="240" height="40" rx="6" fill="#450a0a" stroke="#ef4444"/>
  <text x="640" y="103" text-anchor="middle" font-size="9" font-weight="900" fill="#fca5a5">TƯƠNG QUAN ≠ NHÂN QUẢ</text>
  <text x="640" y="117" text-anchor="middle" font-size="8" fill="#fecaca">Correlation is NOT Causation</text>

  <rect x="520" y="135" width="240" height="50" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="530" y="152" font-size="8" fill="#e2e8f0">• r cao không chứng minh X gây ra Y</text>
  <text x="530" y="167" font-size="8" fill="#e2e8f0">• Có thể do 'Biến ẩn thứ 3' chi phối</text>
  <text x="530" y="179" font-size="7.5" fill="#94a3b8">(Ví dụ: Nắng nóng làm tăng cả kem & đuối nước)</text>

  <text x="640" y="210" text-anchor="middle" font-size="8.5" font-weight="700" fill="#38bdf8">Mẫu quan sát tối thiểu: Từ 5 cặp trở lên</text>
</svg>`,

  15: `<svg viewBox="0 0 800 240" class="w-full h-auto rounded-xl" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="240" rx="12" fill="#0f172a"/>
  <text x="400" y="24" text-anchor="middle" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="1">KIỂM ĐỊNH GIẢ THUYẾT THỐNG KÊ: MIỀN BÁC BỎ VÀ QUY TẮC P-VALUE</text>
  
  <!-- Left: Normal Curve with Rejection Regions -->
  <rect x="25" y="45" width="440" height="175" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="245" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">1. PHÂN PHỐI CHUẨN VÀ MIỀN BÁC BỎ H0 (α = 0.05)</text>
  
  <!-- Normal curve outline -->
  <path d="M50,150 Q145,150 195,120 Q245,60 295,120 Q345,150 440,150" stroke="#38bdf8" stroke-width="2.5" fill="none"/>
  
  <!-- Shaded left critical region (alpha/2 = 0.025) -->
  <path d="M50,150 Q100,150 130,140 L130,150 Z" fill="#ef4444" opacity="0.6"/>
  <text x="100" y="165" text-anchor="middle" font-size="8" font-weight="700" fill="#f87171">Bác bỏ H0</text>

  <!-- Shaded right critical region (alpha/2 = 0.025) -->
  <path d="M360,140 Q390,150 440,150 L360,150 Z" fill="#ef4444" opacity="0.6"/>
  <text x="390" y="165" text-anchor="middle" font-size="8" font-weight="700" fill="#f87171">Bác bỏ H0</text>

  <!-- Non-rejection region -->
  <text x="245" y="125" text-anchor="middle" font-size="10" font-weight="900" fill="#4ade80">CHƯA ĐỦ BẰNG CHỨNG BÁC BỎ H0</text>
  <text x="245" y="140" text-anchor="middle" font-size="8.5" fill="#e2e8f0">Xác suất chấp nhận: 1 - α = 95%</text>

  <line x1="50" y1="150" x2="440" y2="150" stroke="#64748b"/>
  <text x="245" y="208" text-anchor="middle" font-size="8.5" font-weight="700" fill="#38bdf8">Giả thuyết gốc H0: μ = μ0 (Không khác biệt) • Mức ý nghĩa α = 5%</text>

  <!-- Right: p-value Decision Rule & Excel Functions -->
  <rect x="480" y="45" width="295" height="175" rx="8" fill="#1e293b" stroke="#22c55e" stroke-width="1.5"/>
  <text x="627" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#4ade80">2. QUY TẮC QUYẾT ĐỊNH VÀNG</text>
  
  <rect x="495" y="80" width="265" height="42" rx="4" fill="#0f172a" stroke="#ef4444"/>
  <text x="627" y="97" text-anchor="middle" font-size="10.5" font-weight="900" fill="#f87171">p-value ≤ α (0.05)</text>
  <text x="627" y="112" text-anchor="middle" font-size="8.5" font-weight="700" fill="#ffffff">➔ BÁC BỎ H0 (Có ý nghĩa thống kê)</text>

  <rect x="495" y="128" width="265" height="42" rx="4" fill="#0f172a" stroke="#22c55e"/>
  <text x="627" y="145" text-anchor="middle" font-size="10.5" font-weight="900" fill="#4ade80">p-value > α (0.05)</text>
  <text x="627" y="160" text-anchor="middle" font-size="8.5" font-weight="700" fill="#ffffff">➔ CHƯA ĐỦ BẰNG CHỨNG BÁC BỎ H0</text>

  <text x="627" y="190" text-anchor="middle" font-size="8" fill="#e2e8f0">• 1 mẫu: =Z.TEST(array, x, [sigma])</text>
  <text x="627" y="208" text-anchor="middle" font-size="8" font-weight="700" fill="#fbbf24">• 2 mẫu độc lập: =T.TEST(mẫu1, mẫu2, 2, 3)</text>
</svg>`
};

fs.writeFileSync('scratch/ict12_svgs.js', 'module.exports = ' + JSON.stringify(svgs, null, 2) + ';\n', 'utf8');
console.log('Saved ict12_svgs.js successfully');
