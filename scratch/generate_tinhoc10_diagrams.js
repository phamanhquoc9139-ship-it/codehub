// scratch/generate_tinhoc10_diagrams.js
const fs = require('fs');
const path = require('path');

function wrapSvg(title, topicLabel, svgContent) {
  return `
<div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
  <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-800 text-xs">
    <span class="font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
      <i class="fa-solid fa-laptop-code"></i> ${title}
    </span>
    <span class="text-slate-400 font-medium">${topicLabel}</span>
  </div>
  <div class="w-full overflow-x-auto flex justify-center py-2">
    <svg viewBox="0 0 720 180" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
      ${svgContent}
    </svg>
  </div>
</div>`;
}

const diagrams = {};

// Bài 1: Quá trình xử lí thông tin
diagrams[1] = wrapSvg("Mô hình quá trình xử lí thông tin cơ bản trong máy tính", "Chủ đề 1: Máy tính & Xã hội", `
  <defs>
    <marker id="arr1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#38bdf8"/>
    </marker>
  </defs>
  <!-- Input -->
  <rect x="40" y="60" width="160" height="60" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="120" y="85" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">ĐẦU VÀO (INPUT)</text>
  <text x="120" y="105" fill="#94a3b8" font-size="10" text-anchor="middle">Bàn phím, Chuột, Cảm biến</text>
  
  <line x1="200" y1="90" x2="270" y2="90" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arr1)"/>
  
  <!-- CPU Process -->
  <rect x="280" y="40" width="180" height="100" rx="12" fill="#0f172a" stroke="#a855f7" stroke-width="2.5"/>
  <text x="370" y="70" fill="#a855f7" font-size="14" font-weight="bold" text-anchor="middle">BỘ XỬ LÍ (CPU)</text>
  <text x="370" y="90" fill="#cbd5e1" font-size="11" text-anchor="middle">Khối số học & logic (ALU)</text>
  <text x="370" y="110" fill="#34d399" font-size="10" text-anchor="middle">Bộ nhớ trong: RAM & Cache</text>
  
  <line x1="460" y1="90" x2="530" y2="90" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arr1)"/>
  
  <!-- Output -->
  <rect x="540" y="60" width="150" height="60" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
  <text x="615" y="85" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">ĐẦU RA (OUTPUT)</text>
  <text x="615" y="105" fill="#94a3b8" font-size="10" text-anchor="middle">Màn hình, Loa, Máy in</text>
  <text x="370" y="165" fill="#64748b" font-size="11" text-anchor="middle">Bộ nhớ ngoài lưu trữ lâu dài: SSD, HDD, Thẻ nhớ, Đám mây</text>
`);

// Bài 2: Thiết bị thông minh
diagrams[2] = wrapSvg("Hệ sinh thái thiết bị thông minh & Kết nối vạn vật (IoT)", "Chủ đề 1: Máy tính & Xã hội", `
  <!-- Trung tâm Cloud / Internet -->
  <circle cx="360" cy="90" r="42" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="360" y="88" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">INTERNET</text>
  <text x="360" y="103" fill="#94a3b8" font-size="9" text-anchor="middle">&amp; CLOUD</text>

  <!-- Node Smartphone -->
  <line x1="320" y1="75" x2="160" y2="45" stroke="#475569" stroke-dasharray="3,3"/>
  <rect x="70" y="25" width="130" height="42" rx="8" fill="#1e293b" stroke="#34d399"/>
  <text x="135" y="51" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">📱 Smartphone</text>

  <!-- Node Smart Home -->
  <line x1="320" y1="105" x2="160" y2="135" stroke="#475569" stroke-dasharray="3,3"/>
  <rect x="70" y="115" width="130" height="42" rx="8" fill="#1e293b" stroke="#f59e0b"/>
  <text x="135" y="141" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">🏠 Smart Home (IoT)</text>

  <!-- Node Smartwatch -->
  <line x1="400" y1="75" x2="560" y2="45" stroke="#475569" stroke-dasharray="3,3"/>
  <rect x="520" y="25" width="130" height="42" rx="8" fill="#1e293b" stroke="#a855f7"/>
  <text x="585" y="51" fill="#a855f7" font-size="11" font-weight="bold" text-anchor="middle">⌚ Smartwatch</text>

  <!-- Node Robot Công nghiệp -->
  <line x1="400" y1="105" x2="560" y2="135" stroke="#475569" stroke-dasharray="3,3"/>
  <rect x="520" y="115" width="130" height="42" rx="8" fill="#1e293b" stroke="#f87171"/>
  <text x="585" y="141" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">🤖 Robot Tự hành</text>
`);

// Bài 3: Bảng mã kí tự
diagrams[3] = wrapSvg("Mã hóa kí tự văn bản: Từ ASCII (8 bit) đến Unicode / UTF-8", "Chủ đề 1: Máy tính & Xã hội", `
  <!-- Kí tự gốc -->
  <rect x="50" y="50" width="130" height="80" rx="10" fill="#1e293b" stroke="#38bdf8"/>
  <text x="115" y="80" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">KÍ TỰ GỐC</text>
  <text x="115" y="105" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">'A' / 'Â' / '⭐'</text>

  <path d="M 190 90 L 260 90" stroke="#64748b" stroke-width="2" marker-end="url(#arr1)"/>

  <!-- Bảng mã -->
  <rect x="270" y="35" width="200" height="110" rx="10" fill="#0f172a" stroke="#a855f7"/>
  <text x="370" y="65" fill="#a855f7" font-size="12" font-weight="bold" text-anchor="middle">BẢNG MÃ QUỐC TẾ</text>
  <text x="370" y="90" fill="#cbd5e1" font-size="11" text-anchor="middle">ASCII: 0 - 127 (7-8 bit)</text>
  <text x="370" y="110" fill="#34d399" font-size="11" text-anchor="middle">Unicode UTF-8: Đa byte biến đổi</text>
  <text x="370" y="130" fill="#94a3b8" font-size="10" text-anchor="middle">(Hỗ trợ tiếng Việt trọn vẹn)</text>

  <path d="M 480 90 L 540 90" stroke="#64748b" stroke-width="2" marker-end="url(#arr1)"/>

  <!-- Dãy bit nhị phân -->
  <rect x="550" y="50" width="130" height="80" rx="10" fill="#1e293b" stroke="#34d399"/>
  <text x="615" y="80" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">LƯU TRỮ BIT</text>
  <text x="615" y="105" fill="#fbbf24" font-size="12" font-family="monospace" text-anchor="middle">01000001 (65)</text>
`);

// Bài 4: Hệ nhị phân & Số bù 2
diagrams[4] = wrapSvg("Quy tắc đổi cơ số 10 ⇄ 2 và biểu diễn số nguyên bù 2", "Chủ đề 1: Máy tính & Xã hội", `
  <!-- Thập phân sang Nhị phân -->
  <rect x="50" y="30" width="280" height="120" rx="10" fill="#1e293b" stroke="#38bdf8"/>
  <text x="190" y="55" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CHUYỂN ĐỔI THẬP PHÂN ⇄ NHỊ PHÂN</text>
  <text x="190" y="80" fill="#cbd5e1" font-size="11" text-anchor="middle">13 ÷ 2 = 6 (dư 1) ↑</text>
  <text x="190" y="100" fill="#cbd5e1" font-size="11" text-anchor="middle">6 ÷ 2 = 3 (dư 0) ↑ ⟹ 13₁₀ = 1101₂</text>
  <text x="190" y="120" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">1101₂ = 1×8 + 1×4 + 0×2 + 1×1 = 13</text>

  <!-- Số bù 2 -->
  <rect x="370" y="30" width="300" height="120" rx="10" fill="#1e293b" stroke="#a855f7"/>
  <text x="520" y="55" fill="#a855f7" font-size="12" font-weight="bold" text-anchor="middle">BIỂU DIỄN SỐ ÂM (BÙ 2)</text>
  <text x="520" y="80" fill="#94a3b8" font-size="11" text-anchor="middle">+5 (8-bit): 0000 0101</text>
  <text x="520" y="100" fill="#fbbf24" font-size="11" text-anchor="middle">Đảo bit (Bù 1): 1111 1010</text>
  <text x="520" y="125" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Cộng 1: -5 = 1111 1011 (Bù 2)</text>
`);

// Bài 5: Cổng logic
diagrams[5] = wrapSvg("Các cổng lôgic cơ bản (AND, OR, XOR, NOT) và bảng chân trị", "Chủ đề 1: Máy tính & Xã hội", `
  <g transform="translate(40, 30)">
    <rect x="0" y="0" width="140" height="110" rx="8" fill="#1e293b" stroke="#38bdf8"/>
    <text x="70" y="30" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">CỔNG AND</text>
    <text x="70" y="55" fill="#94a3b8" font-size="10" text-anchor="middle">A ∧ B (VÀ)</text>
    <text x="70" y="80" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">1 AND 1 = 1</text>
    <text x="70" y="98" fill="#cbd5e1" font-size="9" text-anchor="middle">Các TH khác = 0</text>
  </g>
  <g transform="translate(200, 30)">
    <rect x="0" y="0" width="140" height="110" rx="8" fill="#1e293b" stroke="#34d399"/>
    <text x="70" y="30" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">CỔNG OR</text>
    <text x="70" y="55" fill="#94a3b8" font-size="10" text-anchor="middle">A ∨ B (HOẶC)</text>
    <text x="70" y="80" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">0 OR 0 = 0</text>
    <text x="70" y="98" fill="#cbd5e1" font-size="9" text-anchor="middle">Có 1 là Đúng</text>
  </g>
  <g transform="translate(360, 30)">
    <rect x="0" y="0" width="140" height="110" rx="8" fill="#1e293b" stroke="#fbbf24"/>
    <text x="70" y="30" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">CỔNG XOR</text>
    <text x="70" y="55" fill="#94a3b8" font-size="10" text-anchor="middle">A ⊕ B (Loại trừ)</text>
    <text x="70" y="80" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">1 ⊕ 0 = 1; 0 ⊕ 1 = 1</text>
    <text x="70" y="98" fill="#cbd5e1" font-size="9" text-anchor="middle">Giống nhau = 0</text>
  </g>
  <g transform="translate(520, 30)">
    <rect x="0" y="0" width="140" height="110" rx="8" fill="#1e293b" stroke="#f87171"/>
    <text x="70" y="30" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">CỔNG NOT</text>
    <text x="70" y="55" fill="#94a3b8" font-size="10" text-anchor="middle">¬ A (PHỦ ĐỊNH)</text>
    <text x="70" y="80" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">NOT 1 = 0</text>
    <text x="70" y="98" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">NOT 0 = 1</text>
  </g>
`);

// Bài 6: Đa phương tiện & Raster vs Vector
diagrams[6] = wrapSvg("Lấy mẫu âm thanh và so sánh bản chất Đồ họa Raster vs Vector", "Chủ đề 1: Máy tính & Xã hội", `
  <!-- Sóng âm thanh lấy mẫu -->
  <g transform="translate(50, 30)">
    <rect x="0" y="0" width="280" height="120" rx="10" fill="#1e293b" stroke="#38bdf8"/>
    <text x="140" y="25" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">LẤY MẪU & LƯỢNG TỬ HÓA ÂM THANH</text>
    <path d="M 20 70 Q 70 20, 140 70 T 260 70" fill="none" stroke="#34d399" stroke-width="2"/>
    <line x1="50" y1="45" x2="50" y2="70" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2,2"/>
    <line x1="90" y1="35" x2="90" y2="70" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2,2"/>
    <line x1="140" y1="70" x2="140" y2="70" stroke="#f59e0b" stroke-width="1.5"/>
    <line x1="190" y1="105" x2="190" y2="70" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2,2"/>
    <text x="140" y="105" fill="#cbd5e1" font-size="10" text-anchor="middle">Tần số mẫu (Hz) × Độ sâu bit (bit depth)</text>
  </g>
  <!-- Raster vs Vector -->
  <g transform="translate(370, 30)">
    <rect x="0" y="0" width="300" height="120" rx="10" fill="#1e293b" stroke="#a855f7"/>
    <text x="150" y="25" fill="#a855f7" font-size="11" font-weight="bold" text-anchor="middle">SO SÁNH ẢNH RASTER VS VECTOR</text>
    <!-- Raster pixel grid -->
    <rect x="30" y="45" width="20" height="20" fill="#ef4444" stroke="#000"/>
    <rect x="50" y="45" width="20" height="20" fill="#f87171" stroke="#000"/>
    <rect x="30" y="65" width="20" height="20" fill="#fca5a5" stroke="#000"/>
    <text x="40" y="105" fill="#ef4444" font-size="10" text-anchor="middle">Raster: Pixel (vỡ khi phóng)</text>
    <!-- Vector curve -->
    <circle cx="210" cy="55" r="18" fill="none" stroke="#38bdf8" stroke-width="3"/>
    <text x="210" y="105" fill="#38bdf8" font-size="10" text-anchor="middle">Vector: Toán học (sắc nét)</text>
  </g>
`);

// Bài 7: Quản lí tệp thiết bị số
diagrams[7] = wrapSvg("Cấu trúc cây thư mục phân cấp và quản lí tệp trên thiết bị di động", "Chủ đề 1: Máy tính & Xã hội", `
  <!-- Root -->
  <rect x="50" y="70" width="130" height="40" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="115" y="95" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">📁 Bộ nhớ trong</text>

  <line x1="180" y1="90" x2="260" y2="45" stroke="#475569" stroke-width="2"/>
  <line x1="180" y1="90" x2="260" y2="90" stroke="#475569" stroke-width="2"/>
  <line x1="180" y1="90" x2="260" y2="135" stroke="#475569" stroke-width="2"/>

  <!-- Subfolders -->
  <rect x="260" y="25" width="130" height="36" rx="6" fill="#1e293b" stroke="#34d399"/>
  <text x="325" y="48" fill="#34d399" font-size="11" text-anchor="middle">📁 Documents</text>

  <rect x="260" y="72" width="130" height="36" rx="6" fill="#1e293b" stroke="#f59e0b"/>
  <text x="325" y="95" fill="#f59e0b" font-size="11" text-anchor="middle">📁 DCIM (Ảnh chụp)</text>

  <rect x="260" y="118" width="130" height="36" rx="6" fill="#1e293b" stroke="#a855f7"/>
  <text x="325" y="141" fill="#a855f7" font-size="11" text-anchor="middle">📁 Download (Tải về)</text>

  <!-- Cloud Sync -->
  <rect x="460" y="55" width="210" height="70" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-dasharray="4,4"/>
  <text x="565" y="85" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">☁️ ĐỒNG BỘ ĐÁM MÂY</text>
  <text x="565" y="105" fill="#cbd5e1" font-size="10" text-anchor="middle">Google Drive / iCloud / OneDrive</text>
`);

// Bài 8: Kiến trúc mạng LAN, WAN
diagrams[8] = wrapSvg("Mô hình kiến trúc mạng cục bộ (LAN), mạng diện rộng (WAN) và Internet", "Chủ đề 2: Mạng & Internet", `
  <!-- LAN 1 -->
  <rect x="40" y="30" width="180" height="120" rx="10" fill="#1e293b" stroke="#34d399"/>
  <text x="130" y="55" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">MẠNG CỤC BỘ (LAN 1)</text>
  <text x="130" y="80" fill="#cbd5e1" font-size="10" text-anchor="middle">💻 PC A   💻 PC B</text>
  <rect x="80" y="95" width="100" height="30" rx="6" fill="#0f172a" stroke="#64748b"/>
  <text x="130" y="115" fill="#94a3b8" font-size="10" text-anchor="middle">Switch nội bộ</text>

  <line x1="220" y1="110" x2="280" y2="90" stroke="#38bdf8" stroke-width="2"/>

  <!-- Router & Internet Core -->
  <circle cx="360" cy="90" r="45" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="360" y="85" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ROUTER &amp;</text>
  <text x="360" y="102" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">INTERNET</text>

  <line x1="440" y1="90" x2="500" y2="110" stroke="#38bdf8" stroke-width="2"/>

  <!-- LAN 2 -->
  <rect x="500" y="30" width="180" height="120" rx="10" fill="#1e293b" stroke="#a855f7"/>
  <text x="590" y="55" fill="#a855f7" font-size="12" font-weight="bold" text-anchor="middle">MẠNG CỤC BỘ (LAN 2)</text>
  <text x="590" y="80" fill="#cbd5e1" font-size="10" text-anchor="middle">🖨️ Máy in   📱 Mobile</text>
  <rect x="540" y="95" width="100" height="30" rx="6" fill="#0f172a" stroke="#64748b"/>
  <text x="590" y="115" fill="#94a3b8" font-size="10" text-anchor="middle">Access Point</text>
`);

// Bài 9: An toàn không gian mạng
diagrams[9] = wrapSvg("Tam giác an toàn không gian mạng: Phòng chống Phishing, Mã độc & Bảo vệ 2FA", "Chủ đề 2: Mạng & Internet", `
  <!-- Phishing alert -->
  <g transform="translate(60, 35)">
    <rect x="0" y="0" width="170" height="110" rx="10" fill="#1e293b" stroke="#ef4444"/>
    <text x="85" y="30" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">⚠️ TẤN CÔNG GIẢ MẠO</text>
    <text x="85" y="55" fill="#fca5a5" font-size="10" text-anchor="middle">Email giả ngân hàng, SMS</text>
    <text x="85" y="75" fill="#cbd5e1" font-size="10" text-anchor="middle">Lừa click link độc hại</text>
    <text x="85" y="95" fill="#94a3b8" font-size="9" text-anchor="middle">Dấu hiệu: Sai tên miền, giục gấp</text>
  </g>
  <!-- 2FA shield -->
  <g transform="translate(275, 35)">
    <rect x="0" y="0" width="170" height="110" rx="10" fill="#1e293b" stroke="#22c55e"/>
    <text x="85" y="30" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">🛡️ XÁC THỰC 2 BƯỚC (2FA)</text>
    <text x="85" y="55" fill="#86efac" font-size="10" text-anchor="middle">Bước 1: Mật khẩu mạnh</text>
    <text x="85" y="75" fill="#86efac" font-size="10" text-anchor="middle">Bước 2: OTP / Authenticator</text>
    <text x="85" y="95" fill="#94a3b8" font-size="9" text-anchor="middle">Ngăn chặn 99% chiếm đoạt</text>
  </g>
  <!-- Password rules -->
  <g transform="translate(490, 35)">
    <rect x="0" y="0" width="170" height="110" rx="10" fill="#1e293b" stroke="#38bdf8"/>
    <text x="85" y="30" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">🔑 MẬT KHẨU AN TOÀN</text>
    <text x="85" y="55" fill="#7dd3fc" font-size="10" text-anchor="middle">≥ 12 kí tự phức tạp</text>
    <text x="85" y="75" fill="#cbd5e1" font-size="10" text-anchor="middle">Chữ HOA, thường, số, @#$</text>
    <text x="85" y="95" fill="#94a3b8" font-size="9" text-anchor="middle">Không dùng chung 1 mật khẩu</text>
  </g>
`);

// Bài 10: Tìm kiếm nâng cao
diagrams[10] = wrapSvg("Các toán tử tìm kiếm chuyên sâu trên công cụ tìm kiếm Google Search", "Chủ đề 2: Mạng & Internet", `
  <rect x="50" y="30" width="290" height="52" rx="8" fill="#1e293b" stroke="#38bdf8"/>
  <text x="65" y="55" fill="#38bdf8" font-size="12" font-weight="bold">"cụm từ chính xác"</text>
  <text x="65" y="72" fill="#94a3b8" font-size="10">Tìm đúng thứ tự từ: "tin học lớp 10"</text>

  <rect x="380" y="30" width="290" height="52" rx="8" fill="#1e293b" stroke="#34d399"/>
  <text x="395" y="55" fill="#34d399" font-size="12" font-weight="bold">site:tên_miền</text>
  <text x="395" y="72" fill="#94a3b8" font-size="10">Chỉ tìm trong web: python site:moet.gov.vn</text>

  <rect x="50" y="98" width="290" height="52" rx="8" fill="#1e293b" stroke="#f59e0b"/>
  <text x="65" y="123" fill="#f59e0b" font-size="12" font-weight="bold">-từ_loại_trừ</text>
  <text x="65" y="140" fill="#94a3b8" font-size="10">Bỏ kết quả không muốn: python -snake</text>

  <rect x="380" y="98" width="290" height="52" rx="8" fill="#1e293b" stroke="#a855f7"/>
  <text x="395" y="123" fill="#a855f7" font-size="12" font-weight="bold">filetype:định_dạng</text>
  <text x="395" y="140" fill="#94a3b8" font-size="10">Lọc tệp tài liệu: giao_trinh filetype:pdf</text>
`);

// Bài 11: Văn hóa ứng xử số & Bản quyền
diagrams[11] = wrapSvg("Văn hóa ứng xử số và các mức độ giấy phép Creative Commons (CC)", "Chủ đề 3: Đạo đức & Bản quyền", `
  <!-- Netiquette -->
  <rect x="40" y="35" width="290" height="110" rx="10" fill="#1e293b" stroke="#38bdf8"/>
  <text x="185" y="60" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">ỨNG XỬ SỐ & DẤU CHÂN KĨ THUẬT SỐ</text>
  <text x="185" y="85" fill="#cbd5e1" font-size="11" text-anchor="middle">• Tôn trọng, không quấy rối / thóa mạ</text>
  <text x="185" y="105" fill="#cbd5e1" font-size="11" text-anchor="middle">• Không phát tán tin giả mạo (Fake news)</text>
  <text x="185" y="125" fill="#f59e0b" font-size="10" text-anchor="middle">⚠️ Mọi bài đăng đều lưu vết lâu dài (Digital Footprint)</text>

  <!-- Creative Commons -->
  <rect x="370" y="35" width="310" height="110" rx="10" fill="#1e293b" stroke="#34d399"/>
  <text x="525" y="60" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">BẢN QUYỀN MỞ CREATIVE COMMONS</text>
  <text x="525" y="85" fill="#cbd5e1" font-size="11" text-anchor="middle">© Bản quyền giữ kín (All Rights Reserved)</text>
  <text x="525" y="105" fill="#fbbf24" font-size="11" text-anchor="middle">BY: Ghi nhận tác giả | NC: Phi thương mại</text>
  <text x="525" y="125" fill="#a855f7" font-size="10" text-anchor="middle">ND: Không phái sinh | SA: Chia sẻ tương tự</text>
`);

// Bài 12: Inkscape & Đồ họa Vector
diagrams[12] = wrapSvg("Giao diện phần mềm đồ họa vector Inkscape và các công cụ cốt lõi", "Chủ đề 4: Đồ họa Inkscape (ICT)", `
  <rect x="40" y="25" width="640" height="130" rx="10" fill="#0f172a" stroke="#334155" stroke-width="2"/>
  <!-- Menu & Tool controls -->
  <rect x="40" y="25" width="640" height="24" rx="10" fill="#1e293b"/>
  <text x="60" y="41" fill="#94a3b8" font-size="10">File  Edit  View  Layer  Object  Path  Text  Filters  Help</text>
  <!-- Toolbox -->
  <rect x="40" y="49" width="45" height="106" fill="#1e293b"/>
  <text x="62" y="70" fill="#38bdf8" font-size="11" text-anchor="middle">↖ S</text>
  <text x="62" y="90" fill="#34d399" font-size="11" text-anchor="middle">□ R</text>
  <text x="62" y="110" fill="#fbbf24" font-size="11" text-anchor="middle">○ E</text>
  <text x="62" y="130" fill="#a855f7" font-size="11" text-anchor="middle">🖋 B</text>
  <text x="62" y="148" fill="#f87171" font-size="11" text-anchor="middle">T</text>
  <!-- Canvas -->
  <rect x="180" y="60" width="160" height="80" fill="#334155" stroke="#64748b"/>
  <text x="260" y="105" fill="#ffffff" font-size="11" text-anchor="middle">Trang vẽ (Canvas)</text>
  <!-- Color Palette -->
  <rect x="380" y="60" width="280" height="80" rx="8" fill="#1e293b" stroke="#475569"/>
  <text x="520" y="85" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Định dạng tệp: .SVG (Chuẩn vector mở)</text>
  <text x="520" y="110" fill="#cbd5e1" font-size="10" text-anchor="middle">Phóng to thu nhỏ không bao giờ vỡ hạt</text>
`);

// Bài 13: Các phép toán Boole trên Path
diagrams[13] = wrapSvg("Các phép ghép/cắt đối tượng đồ họa trong thực đơn Path (Boolean Operations)", "Chủ đề 4: Đồ họa Inkscape (ICT)", `
  <g transform="translate(50, 30)">
    <circle cx="40" cy="50" r="30" fill="#38bdf8" fill-opacity="0.6"/>
    <circle cx="70" cy="50" r="30" fill="#38bdf8" fill-opacity="0.6"/>
    <text x="55" y="110" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Union (Hợp)</text>
    <text x="55" y="125" fill="#94a3b8" font-size="9" text-anchor="middle">Ctrl + +</text>
  </g>
  <g transform="translate(190, 30)">
    <path d="M 40 20 A 30 30 0 1 0 70 80 A 30 30 0 0 1 40 20" fill="#ef4444"/>
    <text x="55" y="110" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">Difference (Hiệu)</text>
    <text x="55" y="125" fill="#94a3b8" font-size="9" text-anchor="middle">Ctrl + - (Dưới trừ trên)</text>
  </g>
  <g transform="translate(330, 30)">
    <path d="M 40 20 A 30 30 0 0 1 40 80 A 30 30 0 0 1 40 20" fill="#34d399"/>
    <text x="40" y="110" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Intersection (Giao)</text>
    <text x="40" y="125" fill="#94a3b8" font-size="9" text-anchor="middle">Ctrl + *</text>
  </g>
  <g transform="translate(470, 30)">
    <circle cx="40" cy="50" r="30" fill="#a855f7" fill-opacity="0.7"/>
    <circle cx="70" cy="50" r="30" fill="#a855f7" fill-opacity="0.7"/>
    <path d="M 55 25 A 30 30 0 0 1 55 75 A 30 30 0 0 1 55 25" fill="#0f172a"/>
    <text x="55" y="110" fill="#a855f7" font-size="12" font-weight="bold" text-anchor="middle">Exclusion (Loại trừ)</text>
    <text x="55" y="125" fill="#94a3b8" font-size="9" text-anchor="middle">Ctrl + ^</text>
  </g>
`);

// Bài 14: Điểm neo & Đường cong Bézier
diagrams[14] = wrapSvg("Đường cong Bézier, điểm neo (Nodes) và tay nắm điều khiển hướng (Handles)", "Chủ đề 4: Đồ họa Inkscape (ICT)", `
  <!-- Curve -->
  <path d="M 120 120 C 180 20, 320 20, 380 120 S 520 220, 600 60" fill="none" stroke="#38bdf8" stroke-width="4"/>
  <!-- Node 1 -->
  <circle cx="120" cy="120" r="6" fill="#f59e0b"/>
  <text x="120" y="145" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Nút bắt đầu</text>
  <!-- Node 2 -->
  <circle cx="380" cy="120" r="6" fill="#22c55e"/>
  <line x1="320" y1="70" x2="440" y2="170" stroke="#f87171" stroke-width="1.5" stroke-dasharray="3,3"/>
  <circle cx="320" cy="70" r="4" fill="#f87171"/>
  <circle cx="440" cy="170" r="4" fill="#f87171"/>
  <text x="380" y="105" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">Nút trơn (Smooth Node)</text>
  <text x="450" y="165" fill="#f87171" font-size="10">Tay nắm hướng</text>
  <!-- Node 3 -->
  <circle cx="600" cy="60" r="6" fill="#f59e0b"/>
  <text x="600" y="45" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Nút kết thúc</text>
`);

// Bài 15: Quy trình xuất bản đồ họa
diagrams[15] = wrapSvg("Quy trình 5 bước hoàn thiện sản phẩm đồ họa số từ thiết kế đến xuất bản", "Chủ đề 4: Đồ họa Inkscape (ICT)", `
  <g transform="translate(30, 60)">
    <rect x="0" y="0" width="115" height="50" rx="8" fill="#1e293b" stroke="#38bdf8"/>
    <text x="57" y="25" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. Ý TƯỞNG</text>
    <text x="57" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">Phác thảo bố cục</text>
  </g>
  <text x="160" y="90" fill="#64748b" font-size="16">→</text>
  <g transform="translate(180, 60)">
    <rect x="0" y="0" width="115" height="50" rx="8" fill="#1e293b" stroke="#34d399"/>
    <text x="57" y="25" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">2. DỰNG HÌNH</text>
    <text x="57" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">Vẽ vector Inkscape</text>
  </g>
  <text x="310" y="90" fill="#64748b" font-size="16">→</text>
  <g transform="translate(330, 60)">
    <rect x="0" y="0" width="115" height="50" rx="8" fill="#1e293b" stroke="#fbbf24"/>
    <text x="57" y="25" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">3. PHỐI MÀU</text>
    <text x="57" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">Fill &amp; Stroke, Font</text>
  </g>
  <text x="460" y="90" fill="#64748b" font-size="16">→</text>
  <g transform="translate(480, 60)">
    <rect x="0" y="0" width="115" height="50" rx="8" fill="#1e293b" stroke="#a855f7"/>
    <text x="57" y="25" fill="#a855f7" font-size="11" font-weight="bold" text-anchor="middle">4. LƯU TỆP SVG</text>
    <text x="57" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">Giữ nguyên bản gốc</text>
  </g>
  <text x="610" y="90" fill="#64748b" font-size="16">→</text>
  <g transform="translate(630, 60)">
    <rect x="0" y="0" width="60" height="50" rx="8" fill="#1e293b" stroke="#f87171"/>
    <text x="30" y="25" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">5. XUẤT</text>
    <text x="30" y="40" fill="#94a3b8" font-size="8" text-anchor="middle">PNG / PDF</text>
  </g>
`);

// Bài 16: Môi trường Python
diagrams[16] = wrapSvg("Môi trường thực thi Python: Từ mã nguồn .py đến máy ảo Python (PVM)", "Chủ đề 5: Lập trình Python (CS)", `
  <rect x="50" y="50" width="160" height="70" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="130" y="80" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">MÃ NGUỒN (.py)</text>
  <text x="130" y="100" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">print("Hello 10")</text>

  <path d="M 220 85 L 280 85" stroke="#64748b" stroke-width="2" marker-end="url(#arr1)"/>

  <rect x="290" y="40" width="180" height="90" rx="10" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="380" y="70" fill="#a855f7" font-size="13" font-weight="bold" text-anchor="middle">TRÌNH THÔNG DỊCH</text>
  <text x="380" y="90" fill="#34d399" font-size="11" text-anchor="middle">Biên dịch ra Bytecode</text>
  <text x="380" y="110" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">(.pyc / In-memory)</text>

  <path d="M 480 85 L 540 85" stroke="#64748b" stroke-width="2" marker-end="url(#arr1)"/>

  <rect x="550" y="50" width="140" height="70" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
  <text x="620" y="80" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">MÁY ẢO PVM</text>
  <text x="620" y="100" fill="#cbd5e1" font-size="10" text-anchor="middle">Thực thi ra CPU</text>
`);

// Bài 17: Biến và phép gán
diagrams[17] = wrapSvg("Cơ chế gán biến và tham chiếu đối tượng trong bộ nhớ Python", "Chủ đề 5: Lập trình Python (CS)", `
  <!-- Tên biến -->
  <g transform="translate(80, 40)">
    <rect x="0" y="0" width="140" height="40" rx="8" fill="#1e293b" stroke="#38bdf8"/>
    <text x="70" y="25" fill="#38bdf8" font-size="13" font-weight="bold" font-family="monospace" text-anchor="middle">x</text>
  </g>
  <g transform="translate(80, 95)">
    <rect x="0" y="0" width="140" height="40" rx="8" fill="#1e293b" stroke="#38bdf8"/>
    <text x="70" y="25" fill="#38bdf8" font-size="13" font-weight="bold" font-family="monospace" text-anchor="middle">y</text>
  </g>
  <path d="M 230 60 L 380 75" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arr1)"/>
  <path d="M 230 115 L 380 85" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arr1)"/>
  <!-- Đối tượng bộ nhớ -->
  <rect x="390" y="45" width="220" height="80" rx="12" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="500" y="75" fill="#a855f7" font-size="12" font-weight="bold" text-anchor="middle">ĐỐI TƯỢNG BỘ NHỚ</text>
  <text x="500" y="98" fill="#fbbf24" font-size="14" font-family="monospace" font-weight="bold" text-anchor="middle">Giá trị: 100 (int)</text>
  <text x="360" y="160" fill="#94a3b8" font-size="11" text-anchor="middle">Lệnh gán: x = 100; y = x (cả x và y cùng tham chiếu đến cùng đối tượng 100)</text>
`);

// Bài 18: Vào ra dữ liệu
diagrams[18] = wrapSvg("Luồng dữ liệu vào ra: Nhập dữ liệu input() và xuất kết quả print()", "Chủ đề 5: Lập trình Python (CS)", `
  <rect x="50" y="55" width="160" height="60" rx="8" fill="#1e293b" stroke="#f59e0b"/>
  <text x="130" y="80" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">BÀN PHÍM</text>
  <text x="130" y="100" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">input() ⟶ str</text>

  <line x1="220" y1="85" x2="280" y2="85" stroke="#64748b" stroke-width="2" marker-end="url(#arr1)"/>

  <rect x="290" y="40" width="180" height="90" rx="10" fill="#0f172a" stroke="#38bdf8"/>
  <text x="380" y="65" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ÉP KIỂU & TÍNH TOÁN</text>
  <text x="380" y="90" fill="#34d399" font-size="11" font-family="monospace" text-anchor="middle">n = int(input())</text>
  <text x="380" y="110" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">tong = n * 2</text>

  <line x1="480" y1="85" x2="540" y2="85" stroke="#64748b" stroke-width="2" marker-end="url(#arr1)"/>

  <rect x="550" y="55" width="140" height="60" rx="8" fill="#1e293b" stroke="#34d399"/>
  <text x="620" y="80" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">MÀN HÌNH</text>
  <text x="620" y="100" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">print(f"{tong}")</text>
`);

// Bài 19: Rẽ nhánh if
diagrams[19] = wrapSvg("Lưu đồ thuật toán cấu trúc rẽ nhánh if - elif - else trong Python", "Chủ đề 5: Lập trình Python (CS)", `
  <!-- Start -->
  <circle cx="90" cy="85" r="22" fill="#1e293b" stroke="#64748b"/>
  <text x="90" y="90" fill="#cbd5e1" font-size="11" text-anchor="middle">Vào</text>

  <line x1="115" y1="85" x2="200" y2="85" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr1)"/>

  <!-- Thoi Điều kiện -->
  <polygon points="280,45 360,85 280,125 200,85" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
  <text x="280" y="90" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">điều_kiện?</text>

  <!-- Đúng -->
  <line x1="280" y1="45" x2="280" y2="25" stroke="#22c55e" stroke-width="2"/>
  <line x1="280" y1="25" x2="430" y2="25" stroke="#22c55e" stroke-width="2" marker-end="url(#arr1)"/>
  <rect x="440" y="10" width="160" height="36" rx="6" fill="#1e293b" stroke="#22c55e"/>
  <text x="520" y="32" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">Khối lệnh Đúng (if)</text>

  <!-- Sai -->
  <line x1="280" y1="125" x2="280" y2="145" stroke="#ef4444" stroke-width="2"/>
  <line x1="280" y1="145" x2="430" y2="145" stroke="#ef4444" stroke-width="2" marker-end="url(#arr1)"/>
  <rect x="440" y="130" width="160" height="36" rx="6" fill="#1e293b" stroke="#ef4444"/>
  <text x="520" y="152" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Khối lệnh Sai (else)</text>
`);

// Bài 20: Vòng lặp for
diagrams[20] = wrapSvg("Lưu đồ thuật toán vòng lặp for i in range(start, stop, step)", "Chủ đề 5: Lập trình Python (CS)", `
  <rect x="60" y="55" width="140" height="60" rx="8" fill="#1e293b" stroke="#38bdf8"/>
  <text x="130" y="80" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Khởi tạo biến lặp</text>
  <text x="130" y="100" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">i = start</text>

  <line x1="200" y1="85" x2="280" y2="85" stroke="#64748b" stroke-width="2" marker-end="url(#arr1)"/>

  <polygon points="360,50 440,85 360,120 280,85" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
  <text x="360" y="90" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">i &lt; stop?</text>

  <!-- Thân lặp -->
  <line x1="360" y1="50" x2="360" y2="25" stroke="#22c55e" stroke-width="2"/>
  <line x1="360" y1="25" x2="520" y2="25" stroke="#22c55e" stroke-width="2" marker-end="url(#arr1)"/>
  <rect x="530" y="10" width="150" height="38" rx="6" fill="#1e293b" stroke="#22c55e"/>
  <text x="605" y="32" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">Thực thi thân lặp</text>

  <!-- Bước nhảy quay lại -->
  <path d="M 605 50 L 605 145 L 240 145 L 240 90" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arr1)"/>
  <text x="440" y="160" fill="#38bdf8" font-size="10" text-anchor="middle">Tăng i = i + step (Lặp lại)</text>
`);

// Bài 21: Vòng lặp while
diagrams[21] = wrapSvg("Lưu đồ thuật toán vòng lặp while điều_kiện và kiểm tra điều kiện dừng", "Chủ đề 5: Lập trình Python (CS)", `
  <polygon points="260,45 350,85 260,125 170,85" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
  <text x="260" y="90" fill="#a855f7" font-size="11" font-weight="bold" text-anchor="middle">điều_kiện True?</text>

  <!-- Nhánh True -->
  <line x1="350" y1="85" x2="430" y2="85" stroke="#22c55e" stroke-width="2.5" marker-end="url(#arr1)"/>
  <rect x="440" y="55" width="200" height="60" rx="8" fill="#1e293b" stroke="#22c55e"/>
  <text x="540" y="80" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">1. Thực thi khối lệnh</text>
  <text x="540" y="100" fill="#fbbf24" font-size="10" text-anchor="middle">2. Cập nhật biến để tiến tới dừng</text>

  <!-- Vòng quay lại -->
  <path d="M 540 115 L 540 155 L 120 155 L 120 85 L 165 85" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arr1)"/>

  <!-- Nhánh False thoát -->
  <line x1="260" y1="125" x2="260" y2="155" stroke="#ef4444" stroke-width="2"/>
  <text x="290" y="145" fill="#ef4444" font-size="10" font-weight="bold">False ⟶ Thoát</text>
`);

// Bài 22: Danh sách list
diagrams[22] = wrapSvg("Cấu trúc lưu trữ danh sách list: Chỉ số dương (0..n-1) và chỉ số âm (-1..-n)", "Chủ đề 5: Lập trình Python (CS)", `
  <!-- Boxes -->
  <g transform="translate(60, 40)">
    <text x="15" y="-10" fill="#94a3b8" font-size="11">Chỉ số dương:</text>
    <text x="75" y="-10" fill="#38bdf8" font-size="11" font-weight="bold">0</text>
    <text x="175" y="-10" fill="#38bdf8" font-size="11" font-weight="bold">1</text>
    <text x="275" y="-10" fill="#38bdf8" font-size="11" font-weight="bold">2</text>
    <text x="375" y="-10" fill="#38bdf8" font-size="11" font-weight="bold">3</text>
    <text x="475" y="-10" fill="#38bdf8" font-size="11" font-weight="bold">4</text>
    
    <!-- Cells -->
    <rect x="50" y="0" width="100" height="50" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="100" y="32" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">10</text>
    <rect x="150" y="0" width="100" height="50" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="200" y="32" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">20</text>
    <rect x="250" y="0" width="100" height="50" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="300" y="32" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">30</text>
    <rect x="350" y="0" width="100" height="50" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="400" y="32" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">40</text>
    <rect x="450" y="0" width="100" height="50" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="500" y="32" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">50</text>

    <text x="15" y="75" fill="#94a3b8" font-size="11">Chỉ số âm:</text>
    <text x="75" y="75" fill="#f87171" font-size="11" font-weight="bold">-5</text>
    <text x="175" y="75" fill="#f87171" font-size="11" font-weight="bold">-4</text>
    <text x="275" y="75" fill="#f87171" font-size="11" font-weight="bold">-3</text>
    <text x="375" y="75" fill="#f87171" font-size="11" font-weight="bold">-2</text>
    <text x="475" y="75" fill="#f87171" font-size="11" font-weight="bold">-1</text>
  </g>
`);

// Bài 23: Thao tác danh sách
diagrams[23] = wrapSvg("Các phương thức biến đổi danh sách list: append, insert, remove, pop", "Chủ đề 5: Lập trình Python (CS)", `
  <rect x="50" y="30" width="280" height="50" rx="8" fill="#1e293b" stroke="#34d399"/>
  <text x="65" y="52" fill="#34d399" font-size="12" font-weight="bold">a.append(x)</text>
  <text x="65" y="68" fill="#cbd5e1" font-size="10">Thêm phần tử x vào cuối danh sách</text>

  <rect x="380" y="30" width="280" height="50" rx="8" fill="#1e293b" stroke="#38bdf8"/>
  <text x="395" y="52" fill="#38bdf8" font-size="12" font-weight="bold">a.insert(i, x)</text>
  <text x="395" y="68" fill="#cbd5e1" font-size="10">Chèn x vào vị trí chỉ số i</text>

  <rect x="50" y="100" width="280" height="50" rx="8" fill="#1e293b" stroke="#ef4444"/>
  <text x="65" y="122" fill="#ef4444" font-size="12" font-weight="bold">a.remove(x)</text>
  <text x="65" y="138" fill="#cbd5e1" font-size="10">Xóa phần tử đầu tiên có giá trị bằng x</text>

  <rect x="380" y="100" width="280" height="50" rx="8" fill="#1e293b" stroke="#f59e0b"/>
  <text x="395" y="122" fill="#f59e0b" font-size="12" font-weight="bold">a.pop(i) / del a[i]</text>
  <text x="395" y="138" fill="#cbd5e1" font-size="10">Lấy ra và xóa phần tử tại chỉ số i</text>
`);

// Bài 24: Xâu kí tự
diagrams[24] = wrapSvg("Cấu trúc xâu kí tự str và trích xuất lát cắt s[start:stop]", "Chủ đề 5: Lập trình Python (CS)", `
  <g transform="translate(100, 45)">
    <rect x="0" y="0" width="85" height="45" fill="#1e293b" stroke="#38bdf8"/>
    <text x="42" y="28" fill="#38bdf8" font-size="16" font-family="monospace" text-anchor="middle">'P' (0)</text>
    <rect x="85" y="0" width="85" height="45" fill="#1e293b" stroke="#38bdf8"/>
    <text x="127" y="28" fill="#38bdf8" font-size="16" font-family="monospace" text-anchor="middle">'y' (1)</text>
    <rect x="170" y="0" width="85" height="45" fill="#1e293b" stroke="#38bdf8"/>
    <text x="212" y="28" fill="#38bdf8" font-size="16" font-family="monospace" text-anchor="middle">'t' (2)</text>
    <rect x="255" y="0" width="85" height="45" fill="#1e293b" stroke="#38bdf8"/>
    <text x="297" y="28" fill="#38bdf8" font-size="16" font-family="monospace" text-anchor="middle">'h' (3)</text>
    <rect x="340" y="0" width="85" height="45" fill="#1e293b" stroke="#38bdf8"/>
    <text x="382" y="28" fill="#38bdf8" font-size="16" font-family="monospace" text-anchor="middle">'o' (4)</text>
    <rect x="425" y="0" width="85" height="45" fill="#1e293b" stroke="#38bdf8"/>
    <text x="467" y="28" fill="#38bdf8" font-size="16" font-family="monospace" text-anchor="middle">'n' (5)</text>
    
    <text x="255" y="80" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">Lát cắt: s[1:4] ⟶ 'yth' (chỉ lấy từ chỉ số 1 đến 3, không lấy 4)</text>
  </g>
`);

// Bài 25: Phương thức xâu split và join
diagrams[25] = wrapSvg("Chuyển đổi hai chiều: Xâu kí tự split() ⇄ Danh sách join()", "Chủ đề 5: Lập trình Python (CS)", `
  <!-- String -->
  <rect x="50" y="60" width="220" height="55" rx="8" fill="#1e293b" stroke="#38bdf8"/>
  <text x="160" y="85" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">XÂU: "Học lập trình"</text>
  <text x="160" y="102" fill="#94a3b8" font-size="10" text-anchor="middle">Chuỗi kí tự liên tục</text>

  <!-- split arrow -->
  <path d="M 280 75 L 430 75" stroke="#34d399" stroke-width="2.5" marker-end="url(#arr1)"/>
  <text x="355" y="68" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">s.split() ⟶</text>

  <!-- join arrow -->
  <path d="M 430 100 L 280 100" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arr1)"/>
  <text x="355" y="120" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">⟵ " ".join(list)</text>

  <!-- List -->
  <rect x="440" y="60" width="230" height="55" rx="8" fill="#1e293b" stroke="#a855f7"/>
  <text x="555" y="85" fill="#a855f7" font-size="12" font-weight="bold" text-anchor="middle">DANH SÁCH LIST</text>
  <text x="555" y="102" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">["Học", "lập", "trình"]</text>
`);

// Bài 26: Hàm def và return
diagrams[26] = wrapSvg("Cấu trúc hàm trong Python: Định nghĩa def, tham số và giá trị trả về return", "Chủ đề 5: Lập trình Python (CS)", `
  <rect x="60" y="30" width="600" height="120" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
  <text x="80" y="60" fill="#38bdf8" font-size="14" font-weight="bold" font-family="monospace">def <tspan fill="#34d399">tinh_tong</tspan>(<tspan fill="#fbbf24">a, b</tspan>):</text>
  <text x="120" y="90" fill="#cbd5e1" font-size="13" font-family="monospace">s = a + b    <tspan fill="#64748b"># Thân hàm xử lí</tspan></text>
  <text x="120" y="120" fill="#a855f7" font-size="14" font-weight="bold" font-family="monospace">return <tspan fill="#ffffff">s</tspan>         <tspan fill="#64748b"># Trả kết quả về nơi gọi</tspan></text>
`);

// Bài 27: Tham số và đối số
diagrams[27] = wrapSvg("Cơ chế truyền đối số thực tế vào tham số hình thức khi gọi hàm", "Chủ đề 5: Lập trình Python (CS)", `
  <!-- Function call -->
  <rect x="60" y="45" width="240" height="70" rx="8" fill="#1e293b" stroke="#f59e0b"/>
  <text x="180" y="70" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">LỆNH GỌI HÀM</text>
  <text x="180" y="95" fill="#ffffff" font-size="13" font-family="monospace" text-anchor="middle">ket_qua = tinh(<tspan fill="#34d399">5</tspan>, <tspan fill="#38bdf8">10</tspan>)</text>

  <path d="M 310 70 L 400 70" stroke="#34d399" stroke-width="2" marker-end="url(#arr1)"/>
  <path d="M 310 95 L 400 95" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr1)"/>

  <!-- Function def -->
  <rect x="410" y="45" width="250" height="70" rx="8" fill="#0f172a" stroke="#38bdf8"/>
  <text x="535" y="70" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ĐỊNH NGHĨA HÀM</text>
  <text x="535" y="95" fill="#ffffff" font-size="13" font-family="monospace" text-anchor="middle">def tinh(<tspan fill="#34d399">x</tspan>, <tspan fill="#38bdf8">y</tspan>):</text>
  <text x="360" y="150" fill="#cbd5e1" font-size="11" text-anchor="middle">Đối số 5 truyền vào tham số x; đối số 10 truyền vào tham số y</text>
`);

// Bài 28: Phạm vi biến
diagrams[28] = wrapSvg("Không gian tên (Namespace) và phạm vi: Biến toàn cục vs Biến cục bộ", "Chủ đề 5: Lập trình Python (CS)", `
  <!-- Global scope -->
  <rect x="50" y="25" width="620" height="130" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="75" y="50" fill="#38bdf8" font-size="13" font-weight="bold">PHẠM VI TOÀN CỤC (GLOBAL SCOPE)</text>
  <text x="75" y="75" fill="#cbd5e1" font-size="11" font-family="monospace">x = 100  # Biến toàn cục (đọc được ở mọi nơi)</text>

  <!-- Local scope -->
  <rect x="250" y="55" width="390" height="85" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>
  <text x="270" y="78" fill="#a855f7" font-size="11" font-weight="bold">PHẠM VI CỤC BỘ TRONG HÀM (LOCAL SCOPE)</text>
  <text x="270" y="100" fill="#34d399" font-size="11" font-family="monospace">def my_func():</text>
  <text x="300" y="120" fill="#fbbf24" font-size="11" font-family="monospace">y = 50   # Biến cục bộ (hàm kết thúc là biến mất)</text>
`);

// Bài 29: Nhận biết lỗi
diagrams[29] = wrapSvg("Phân loại 3 nhóm lỗi lập trình kinh điển: Syntax, Runtime và Logic", "Chủ đề 5: Lập trình Python (CS)", `
  <g transform="translate(40, 35)">
    <rect x="0" y="0" width="190" height="110" rx="10" fill="#1e293b" stroke="#ef4444"/>
    <text x="95" y="30" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">LỖI CÚ PHÁP (SYNTAX)</text>
    <text x="95" y="55" fill="#fca5a5" font-size="10" text-anchor="middle">Thiếu dấu :, sai thụt lề</text>
    <text x="95" y="75" fill="#fca5a5" font-size="10" text-anchor="middle">Chưa chạy đã dừng</text>
    <text x="95" y="95" fill="#94a3b8" font-size="9" text-anchor="middle">Dễ phát hiện nhất</text>
  </g>
  <g transform="translate(265, 35)">
    <rect x="0" y="0" width="190" height="110" rx="10" fill="#1e293b" stroke="#f59e0b"/>
    <text x="95" y="30" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">LỖI KHI CHẠY (RUNTIME)</text>
    <text x="95" y="55" fill="#fde68a" font-size="10" text-anchor="middle">Chia cho 0, IndexError</text>
    <text x="95" y="75" fill="#fde68a" font-size="10" text-anchor="middle">Chương trình bị sập giữa chừng</text>
    <text x="95" y="95" fill="#94a3b8" font-size="9" text-anchor="middle">Báo Exception Traceback</text>
  </g>
  <g transform="translate(490, 35)">
    <rect x="0" y="0" width="190" height="110" rx="10" fill="#1e293b" stroke="#a855f7"/>
    <text x="95" y="30" fill="#a855f7" font-size="12" font-weight="bold" text-anchor="middle">LỖI LOGIC (NGỮ NGHĨA)</text>
    <text x="95" y="55" fill="#e9d5ff" font-size="10" text-anchor="middle">Thuật toán sai, tính nhầm</text>
    <text x="95" y="75" fill="#e9d5ff" font-size="10" text-anchor="middle">Chạy mượt nhưng KẾT QUẢ SAI</text>
    <text x="95" y="95" fill="#94a3b8" font-size="9" text-anchor="middle">Khó phát hiện nhất</text>
  </g>
`);

// Bài 30: Kiểm thử và gỡ lỗi
diagrams[30] = wrapSvg("Chu trình kiểm thử phần mềm (Testing) và quy trình gỡ lỗi (Debugging)", "Chủ đề 5: Lập trình Python (CS)", `
  <rect x="50" y="55" width="170" height="60" rx="10" fill="#1e293b" stroke="#38bdf8"/>
  <text x="135" y="80" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">1. TẠO TEST CASES</text>
  <text x="135" y="100" fill="#94a3b8" font-size="10" text-anchor="middle">Chuẩn, Biên, Đặc biệt</text>

  <path d="M 230 85 L 270 85" stroke="#64748b" stroke-width="2" marker-end="url(#arr1)"/>

  <rect x="280" y="55" width="160" height="60" rx="10" fill="#1e293b" stroke="#f59e0b"/>
  <text x="360" y="80" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">2. CHẠY THỬ NGHIỆM</text>
  <text x="360" y="100" fill="#cbd5e1" font-size="10" text-anchor="middle">Thực tế vs Mong đợi</text>

  <path d="M 450 85 L 490 85" stroke="#64748b" stroke-width="2" marker-end="url(#arr1)"/>

  <rect x="500" y="55" width="170" height="60" rx="10" fill="#1e293b" stroke="#22c55e"/>
  <text x="585" y="80" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">3. GỠ LỖI (DEBUG)</text>
  <text x="585" y="100" fill="#94a3b8" font-size="10" text-anchor="middle">Đặt print / Breakpoint</text>
`);

// Bài 31: Thực hành viết chương trình
diagrams[31] = wrapSvg("Quy trình 5 bước xây dựng chương trình hoàn chỉnh từ bài toán thực tế", "Chủ đề 5: Lập trình Python (CS)", `
  <g transform="translate(30, 60)">
    <rect x="0" y="0" width="115" height="50" rx="8" fill="#1e293b" stroke="#38bdf8"/>
    <text x="57" y="25" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. XÁC ĐỊNH</text>
    <text x="57" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">Input, Output, Đ/k</text>
  </g>
  <text x="160" y="90" fill="#64748b" font-size="16">→</text>
  <g transform="translate(180, 60)">
    <rect x="0" y="0" width="115" height="50" rx="8" fill="#1e293b" stroke="#34d399"/>
    <text x="57" y="25" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">2. THUẬT TOÁN</text>
    <text x="57" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">Sơ đồ khối / Mã giả</text>
  </g>
  <text x="310" y="90" fill="#64748b" font-size="16">→</text>
  <g transform="translate(330, 60)">
    <rect x="0" y="0" width="115" height="50" rx="8" fill="#1e293b" stroke="#fbbf24"/>
    <text x="57" y="25" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">3. VIẾT MÃ</text>
    <text x="57" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">Coding chuẩn Python</text>
  </g>
  <text x="460" y="90" fill="#64748b" font-size="16">→</text>
  <g transform="translate(480, 60)">
    <rect x="0" y="0" width="115" height="50" rx="8" fill="#1e293b" stroke="#a855f7"/>
    <text x="57" y="25" fill="#a855f7" font-size="11" font-weight="bold" text-anchor="middle">4. KIỂM THỬ</text>
    <text x="57" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">Chạy test cases</text>
  </g>
  <text x="610" y="90" fill="#64748b" font-size="16">→</text>
  <g transform="translate(630, 60)">
    <rect x="0" y="0" width="60" height="50" rx="8" fill="#1e293b" stroke="#22c55e"/>
    <text x="30" y="25" fill="#22c55e" font-size="10" font-weight="bold" text-anchor="middle">5. TỐI ƯU</text>
    <text x="30" y="40" fill="#94a3b8" font-size="8" text-anchor="middle">Chú thích</text>
  </g>
`);

// Bài 32: Ôn tập Python
diagrams[32] = wrapSvg("Bản đồ tư duy (Mindmap) tổng hợp kiến thức lập trình Python 10", "Chủ đề 5: Lập trình Python (CS)", `
  <!-- Center Core -->
  <circle cx="360" cy="90" r="45" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="360" y="86" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">PYTHON 10</text>
  <text x="360" y="104" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Cốt lõi</text>

  <!-- Node Data types -->
  <line x1="320" y1="70" x2="180" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <rect x="60" y="20" width="140" height="40" rx="6" fill="#1e293b" stroke="#38bdf8"/>
  <text x="130" y="45" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Kiểu: int, float, str, list</text>

  <!-- Node Controls -->
  <line x1="320" y1="110" x2="180" y2="140" stroke="#64748b" stroke-width="1.5"/>
  <rect x="60" y="120" width="140" height="40" rx="6" fill="#1e293b" stroke="#f59e0b"/>
  <text x="130" y="145" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Rẽ nhánh if - elif - else</text>

  <!-- Node Loops -->
  <line x1="400" y1="70" x2="540" y2="40" stroke="#64748b" stroke-width="1.5"/>
  <rect x="520" y="20" width="140" height="40" rx="6" fill="#1e293b" stroke="#34d399"/>
  <text x="590" y="45" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Vòng lặp: for &amp; while</text>

  <!-- Node Functions -->
  <line x1="400" y1="110" x2="540" y2="140" stroke="#64748b" stroke-width="1.5"/>
  <rect x="520" y="120" width="140" height="40" rx="6" fill="#1e293b" stroke="#a855f7"/>
  <text x="590" y="145" fill="#a855f7" font-size="11" font-weight="bold" text-anchor="middle">Hàm def &amp; return</text>
`);

// Bài 33: Nghề thiết kế đồ họa
diagrams[33] = wrapSvg("Lộ trình nghề nghiệp và các sản phẩm chuyên môn của Nhà thiết kế đồ họa", "Chủ đề 6: Hướng nghiệp Tin học", `
  <g transform="translate(60, 35)">
    <rect x="0" y="0" width="170" height="110" rx="10" fill="#1e293b" stroke="#38bdf8"/>
    <text x="85" y="30" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">NHẬN DIỆN THƯƠNG HIỆU</text>
    <text x="85" y="55" fill="#cbd5e1" font-size="10" text-anchor="middle">Logo, Bộ nhận diện</text>
    <text x="85" y="75" fill="#cbd5e1" font-size="10" text-anchor="middle">Profile, Danh thiếp</text>
    <text x="85" y="95" fill="#94a3b8" font-size="9" text-anchor="middle">Công cụ: Inkscape, AI</text>
  </g>
  <g transform="translate(275, 35)">
    <rect x="0" y="0" width="170" height="110" rx="10" fill="#1e293b" stroke="#34d399"/>
    <text x="85" y="30" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">TRUYỀN THÔNG & QUẢNG CÁO</text>
    <text x="85" y="55" fill="#cbd5e1" font-size="10" text-anchor="middle">Poster, Banner, Tờ rơi</text>
    <text x="85" y="75" fill="#cbd5e1" font-size="10" text-anchor="middle">Infographic, Ảnh mạng</text>
    <text x="85" y="95" fill="#94a3b8" font-size="9" text-anchor="middle">Bố cục thị giác, Màu sắc</text>
  </g>
  <g transform="translate(490, 35)">
    <rect x="0" y="0" width="170" height="110" rx="10" fill="#1e293b" stroke="#a855f7"/>
    <text x="85" y="30" fill="#a855f7" font-size="12" font-weight="bold" text-anchor="middle">GIAO DIỆN SỐ (UI/UX)</text>
    <text x="85" y="55" fill="#cbd5e1" font-size="10" text-anchor="middle">Giao diện App di động</text>
    <text x="85" y="75" fill="#cbd5e1" font-size="10" text-anchor="middle">Giao diện Trang web</text>
    <text x="85" y="95" fill="#94a3b8" font-size="9" text-anchor="middle">Trải nghiệm người dùng</text>
  </g>
`);

// Bài 34: Nghề phát triển phần mềm
diagrams[34] = wrapSvg("Vòng đời phát triển phần mềm (SDLC) và các vai trò chuyên môn trong dự án", "Chủ đề 6: Hướng nghiệp Tin học", `
  <g transform="translate(40, 50)">
    <rect x="0" y="0" width="115" height="60" rx="8" fill="#1e293b" stroke="#38bdf8"/>
    <text x="57" y="25" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. PHÂN TÍCH</text>
    <text x="57" y="42" fill="#94a3b8" font-size="9" text-anchor="middle">Business Analyst</text>
  </g>
  <text x="165" y="85" fill="#64748b" font-size="16">→</text>
  <g transform="translate(180, 50)">
    <rect x="0" y="0" width="115" height="60" rx="8" fill="#1e293b" stroke="#34d399"/>
    <text x="57" y="25" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">2. THIẾT KẾ</text>
    <text x="57" y="42" fill="#94a3b8" font-size="9" text-anchor="middle">Kiến trúc &amp; UI/UX</text>
  </g>
  <text x="305" y="85" fill="#64748b" font-size="16">→</text>
  <g transform="translate(320, 50)">
    <rect x="0" y="0" width="115" height="60" rx="8" fill="#1e293b" stroke="#fbbf24"/>
    <text x="57" y="25" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">3. LẬP TRÌNH</text>
    <text x="57" y="42" fill="#94a3b8" font-size="9" text-anchor="middle">Front / Back-end</text>
  </g>
  <text x="445" y="85" fill="#64748b" font-size="16">→</text>
  <g transform="translate(460, 50)">
    <rect x="0" y="0" width="105" height="60" rx="8" fill="#1e293b" stroke="#a855f7"/>
    <text x="52" y="25" fill="#a855f7" font-size="11" font-weight="bold" text-anchor="middle">4. KIỂM THỬ</text>
    <text x="52" y="42" fill="#94a3b8" font-size="9" text-anchor="middle">QA/QC Tester</text>
  </g>
  <text x="575" y="85" fill="#64748b" font-size="16">→</text>
  <g transform="translate(590, 50)">
    <rect x="0" y="0" width="95" height="60" rx="8" fill="#1e293b" stroke="#f87171"/>
    <text x="47" y="25" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">5. PHÁT HÀNH</text>
    <text x="47" y="42" fill="#94a3b8" font-size="9" text-anchor="middle">DevOps, Vận hành</text>
  </g>
`);

let out = '// scratch/tinhoc10_diagrams.js\n// Trọn bộ 34 mô hình đồ họa vector pure SVG cho 34 bài Tin học 10\nmodule.exports = {\n';
for (let i = 1; i <= 34; i++) {
  out += `  ${i}: \`${diagrams[i]}\`,\n`;
}
out += '};\n';

fs.writeFileSync(path.join(__dirname, 'tinhoc10_diagrams.js'), out, 'utf8');
console.log('Successfully generated 34 SVG diagrams in tinhoc10_diagrams.js!');
