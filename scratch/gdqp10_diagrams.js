// scratch/gdqp10_diagrams.js
// Dedicated SVG Diagrams for GDQP 10

module.exports = {
  // Sơ đồ 1: Ba thành phần Lực lượng vũ trang nhân dân Việt Nam
  armedForcesSVG: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
          <i class="fa-solid fa-shield-halved"></i> Sơ đồ trực quan: Ba thành phần Lực lượng Vũ trang Nhân dân Việt Nam
        </span>
        <span class="text-slate-400">Luật Quốc phòng 2018</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 760 300" class="w-full max-w-[760px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- KHỐI ĐẦU NÃO Ở TRÊN -->
          <rect x="250" y="20" width="260" height="55" rx="12" fill="#991b1b" stroke="#f87171" stroke-width="2"/>
          <text x="380" y="44" fill="#ffffff" font-size="13" font-weight="black" text-anchor="middle">LỰC LƯỢNG VŨ TRANG NHÂN DÂN</text>
          <text x="380" y="62" fill="#fecaca" font-size="10" text-anchor="middle">Tuyệt đối trung thành với Đảng, Tổ quốc và Nhân dân</text>

          <!-- ĐƯỜNG PHÂN NHÁNH -->
          <line x1="380" y1="75" x2="380" y2="105" stroke="#94a3b8" stroke-width="2"/>
          <path d="M 140 105 L 620 105" fill="none" stroke="#94a3b8" stroke-width="2"/>
          <line x1="140" y1="105" x2="140" y2="125" stroke="#94a3b8" stroke-width="2"/>
          <line x1="380" y1="105" x2="380" y2="125" stroke="#94a3b8" stroke-width="2"/>
          <line x1="620" y1="105" x2="620" y2="125" stroke="#94a3b8" stroke-width="2"/>

          <!-- 1. QUÂN ĐỘI NHÂN DÂN -->
          <g transform="translate(30, 125)">
            <rect width="220" height="150" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
            <rect width="220" height="40" rx="12" fill="#047857"/>
            <text x="110" y="25" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">QUÂN ĐỘI NHÂN DÂN</text>
            <text x="12" y="60" fill="#a7f3d0" font-size="10" font-weight="bold">• Ngày truyền thống: 22/12/1944</text>
            <text x="12" y="78" fill="#ecfdf5" font-size="9">• Thành lập tại Cao Bằng (34 chiến sĩ)</text>
            <text x="12" y="96" fill="#ecfdf5" font-size="9">• Nòng cốt: Bảo vệ chủ quyền, toàn vẹn</text>
            <text x="12" y="112" fill="#ecfdf5" font-size="9">  lãnh thổ, vùng trời, vùng biển Tổ quốc</text>
            <text x="12" y="132" fill="#6ee7b7" font-size="9" font-weight="bold">• Gồm bộ đội chủ lực, bộ đội địa phương</text>
          </g>

          <!-- 2. CÔNG AN NHÂN DÂN -->
          <g transform="translate(270, 125)">
            <rect width="220" height="150" rx="12" fill="#78350f" stroke="#fbbf24" stroke-width="1.5"/>
            <rect width="220" height="40" rx="12" fill="#b45309"/>
            <text x="110" y="25" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">CÔNG AN NHÂN DÂN</text>
            <text x="12" y="60" fill="#fde68a" font-size="10" font-weight="bold">• Ngày truyền thống: 19/8/1945</text>
            <text x="12" y="78" fill="#fefce8" font-size="9">• Ra đời trong Tổng khởi nghĩa T8/1945</text>
            <text x="12" y="96" fill="#fefce8" font-size="9">• Nòng cốt: Bảo vệ an ninh quốc gia,</text>
            <text x="12" y="112" fill="#fefce8" font-size="9">  giữ gìn trật tự an toàn xã hội</text>
            <text x="12" y="132" fill="#fde047" font-size="9" font-weight="bold">• Gồm An ninh nhân dân & Cảnh sát ND</text>
          </g>

          <!-- 3. DÂN QUÂN TỰ VỆ -->
          <g transform="translate(510, 125)">
            <rect width="220" height="150" rx="12" fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5"/>
            <rect width="220" height="40" rx="12" fill="#1d4ed8"/>
            <text x="110" y="25" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">DÂN QUÂN TỰ VỆ</text>
            <text x="12" y="60" fill="#bfdbfe" font-size="10" font-weight="bold">• Ngày truyền thống: 28/3/1935</text>
            <text x="12" y="78" fill="#eff6ff" font-size="9">• Lực lượng vũ trang quần chúng tại chỗ</text>
            <text x="12" y="96" fill="#eff6ff" font-size="9">• 'Dân quân' tại xã, phường, thị trấn</text>
            <text x="12" y="112" fill="#eff6ff" font-size="9">• 'Tự vệ' tại cơ quan, tổ chức, doanh nghiệp</text>
            <text x="12" y="132" fill="#93c5fd" font-size="9" font-weight="bold">• Nòng cốt chiến tranh nhân dân địa phương</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 2: Hệ thống Biển báo Giao thông đường bộ
  trafficSignsSVG: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
          <i class="fa-solid fa-traffic-light"></i> Nhận diện 4 nhóm biển báo hiệu giao thông đường bộ cốt lõi
        </span>
        <span class="text-slate-400">Quy chuẩn QCVN 41:2019/BGTVT</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 740 240" class="w-full max-w-[740px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- 1. BIỂN CẤM -->
          <g transform="translate(30, 20)">
            <rect width="155" height="200" rx="12" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
            <!-- Hình minh hoạ: Hình tròn viền đỏ nền trắng -->
            <circle cx="77" cy="55" r="32" fill="#ffffff" stroke="#ef4444" stroke-width="7"/>
            <text x="77" y="110" fill="#fca5a5" font-size="11" font-weight="black" text-anchor="middle">BIỂN CẤM</text>
            <text x="12" y="132" fill="#cbd5e1" font-size="9">• Hình tròn, viền đỏ</text>
            <text x="12" y="148" fill="#cbd5e1" font-size="9">• Nền trắng, hình đen</text>
            <text x="12" y="166" fill="#f87171" font-size="9" font-weight="bold">• Ý nghĩa: Bắt buộc</text>
            <text x="12" y="180" fill="#f87171" font-size="9">  không được vi phạm</text>
          </g>

          <!-- 2. BIỂN CẢNH BÁO NGUY HIỂM -->
          <g transform="translate(210, 20)">
            <rect width="155" height="200" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
            <!-- Hình minh hoạ: Tam giác vàng viền đỏ -->
            <polygon points="77,25 40,85 114,85" fill="#fbbf24" stroke="#ef4444" stroke-width="4"/>
            <text x="77" y="55" fill="#1e293b" font-size="18" font-weight="bold" text-anchor="middle">!</text>
            <text x="77" y="110" fill="#fde68a" font-size="11" font-weight="black" text-anchor="middle">NGUY HIỂM</text>
            <text x="12" y="132" fill="#cbd5e1" font-size="9">• Hình tam giác đều</text>
            <text x="12" y="148" fill="#cbd5e1" font-size="9">• Viền đỏ, nền vàng</text>
            <text x="12" y="166" fill="#fbbf24" font-size="9" font-weight="bold">• Ý nghĩa: Cảnh báo</text>
            <text x="12" y="180" fill="#fbbf24" font-size="9">  nguy cơ để giảm tốc</text>
          </g>

          <!-- 3. BIỂN HIỆU LỆNH -->
          <g transform="translate(390, 20)">
            <rect width="155" height="200" rx="12" fill="#1e293b" stroke="#60a5fa" stroke-width="1.5"/>
            <!-- Hình minh hoạ: Hình tròn xanh lam hình trắng -->
            <circle cx="77" cy="55" r="32" fill="#2563eb" stroke="#3b82f6" stroke-width="2"/>
            <path d="M 62 55 L 85 55 M 78 47 L 86 55 L 78 63" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
            <text x="77" y="110" fill="#93c5fd" font-size="11" font-weight="black" text-anchor="middle">HIỆU LỆNH</text>
            <text x="12" y="132" fill="#cbd5e1" font-size="9">• Hình tròn, nền xanh</text>
            <text x="12" y="148" fill="#cbd5e1" font-size="9">• Hình vẽ màu trắng</text>
            <text x="12" y="166" fill="#60a5fa" font-size="9" font-weight="bold">• Ý nghĩa: Bắt buộc</text>
            <text x="12" y="180" fill="#60a5fa" font-size="9">  phải thi hành theo</text>
          </g>

          <!-- 4. BIỂN CHỈ DẪN -->
          <g transform="translate(570, 20)">
            <rect width="155" height="200" rx="12" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
            <!-- Hình minh hoạ: Hình vuông/chữ nhật xanh -->
            <rect x="47" y="27" width="60" height="55" rx="6" fill="#059669" stroke="#10b981" stroke-width="2"/>
            <text x="77" y="60" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">P</text>
            <text x="77" y="110" fill="#a7f3d0" font-size="11" font-weight="black" text-anchor="middle">CHỈ DẪN</text>
            <text x="12" y="132" fill="#cbd5e1" font-size="9">• Chữ nhật / hình vuông</text>
            <text x="12" y="148" fill="#cbd5e1" font-size="9">• Nền xanh, hình trắng</text>
            <text x="12" y="166" fill="#34d399" font-size="9" font-weight="bold">• Ý nghĩa: Hướng dẫn</text>
            <text x="12" y="180" fill="#34d399" font-size="9">  thông tin đường đi</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 3: An ninh mạng & Mô hình phòng vệ 4 lớp
  cyberSecuritySVG: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
          <i class="fa-solid fa-lock"></i> Mô hình 4 lớp phòng vệ an toàn thông tin & an ninh mạng
        </span>
        <span class="text-slate-400">Luật An ninh mạng 2018</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 740 220" class="w-full max-w-[740px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(20, 20)">
            <rect width="160" height="175" rx="12" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5"/>
            <circle cx="80" cy="45" r="22" fill="#0891b2"/>
            <text x="80" y="52" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">1</text>
            <text x="80" y="88" fill="#67e8f9" font-size="11" font-weight="bold" text-anchor="middle">MẬT KHẨU & 2FA</text>
            <text x="12" y="112" fill="#cbd5e1" font-size="9">• Mật khẩu dài > 10 kí tự</text>
            <text x="12" y="128" fill="#cbd5e1" font-size="9">• Bật xác thực 2 lớp (2FA)</text>
            <text x="12" y="144" fill="#cbd5e1" font-size="9">• Không chia sẻ mã OTP</text>
            <text x="12" y="160" fill="#22d3ee" font-size="9">Đổi định kì 3-6 tháng</text>
          </g>

          <g transform="translate(200, 20)">
            <rect width="160" height="175" rx="12" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
            <circle cx="80" cy="45" r="22" fill="#2563eb"/>
            <text x="80" y="52" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">2</text>
            <text x="80" y="88" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">CẬP NHẬT BẢN VÁ</text>
            <text x="12" y="112" fill="#cbd5e1" font-size="9">• Cập nhật OS thường xuyên</text>
            <text x="12" y="128" fill="#cbd5e1" font-size="9">• Cài phần mềm diệt virus</text>
            <text x="12" y="144" fill="#cbd5e1" font-size="9">• Không dùng app bẻ khoá</text>
            <text x="12" y="160" fill="#60a5fa" font-size="9">Vá lỗ hổng bảo mật</text>
          </g>

          <g transform="translate(380, 20)">
            <rect width="160" height="175" rx="12" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
            <circle cx="80" cy="45" r="22" fill="#7c3aed"/>
            <text x="80" y="52" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">3</text>
            <text x="80" y="88" fill="#c4b5fd" font-size="11" font-weight="bold" text-anchor="middle">CẢNH GIÁC LỪA ĐẢO</text>
            <text x="12" y="112" fill="#cbd5e1" font-size="9">• Không click link lạ/lừa đảo</text>
            <text x="12" y="128" fill="#cbd5e1" font-size="9">• Kiểm tra domain trang web</text>
            <text x="12" y="144" fill="#cbd5e1" font-size="9">• Cảnh giác bẫy trúng thưởng</text>
            <text x="12" y="160" fill="#a78bfa" font-size="9">Xác minh qua kênh khác</text>
          </g>

          <g transform="translate(560, 20)">
            <rect width="160" height="175" rx="12" fill="#0f172a" stroke="#ec4899" stroke-width="1.5"/>
            <circle cx="80" cy="45" r="22" fill="#db2777"/>
            <text x="80" y="52" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">4</text>
            <text x="80" y="88" fill="#f472b6" font-size="11" font-weight="bold" text-anchor="middle">BẢO VỆ DỮ LIỆU</text>
            <text x="12" y="112" fill="#cbd5e1" font-size="9">• Không lộ CCCD, tài khoản</text>
            <text x="12" y="128" fill="#cbd5e1" font-size="9">• Tránh Wi-Fi công cộng</text>
            <text x="12" y="144" fill="#cbd5e1" font-size="9">• Đăng xuất máy dùng chung</text>
            <text x="12" y="160" fill="#f472b6" font-size="9">Sao lưu dữ liệu định kì</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 4: Quy trình 4 bước xử lí khi gặp bom mìn / cháy nổ
  bombSafetySVG: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
          <i class="fa-solid fa-triangle-exclamation"></i> Quy trình 4 bước an toàn: Khi phát hiện bom mìn, vật nổ hoặc cháy nổ
        </span>
        <span class="text-slate-400">Nguyên tắc phòng thủ dân sự</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 740 180" class="w-full max-w-[740px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="mArrRed" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 z" fill="#f43f5e" />
            </marker>
          </defs>

          <!-- Bước 1 -->
          <g transform="translate(20, 20)">
            <rect width="150" height="140" rx="12" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
            <rect width="150" height="32" rx="12" fill="#be123c"/>
            <text x="75" y="21" fill="#ffffff" font-size="10" font-weight="black" text-anchor="middle">BƯỚC 1: KHÔNG CHẠM</text>
            <text x="12" y="55" fill="#fca5a5" font-size="9" font-weight="bold">TUYỆT ĐỐI KHÔNG:</text>
            <text x="12" y="75" fill="#cbd5e1" font-size="9">• Chạm, đá, nhặt</text>
            <text x="12" y="93" fill="#cbd5e1" font-size="9">• Đốt, cưa, đập gõ</text>
            <text x="12" y="111" fill="#cbd5e1" font-size="9">• Tự ý tháo gỡ</text>
            <text x="12" y="129" fill="#fda4af" font-size="9">Nguy cơ kích nổ tức thì</text>
          </g>

          <line x1="175" y1="90" x2="195" y2="90" stroke="#f43f5e" stroke-width="2" marker-end="url(#mArrRed)"/>

          <!-- Bước 2 -->
          <g transform="translate(205, 20)">
            <rect width="150" height="140" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
            <rect width="150" height="32" rx="12" fill="#b45309"/>
            <text x="75" y="21" fill="#ffffff" font-size="10" font-weight="black" text-anchor="middle">BƯỚC 2: RỜI XA NGAY</text>
            <text x="12" y="55" fill="#fde68a" font-size="9" font-weight="bold">RÚT LUI AN TOÀN:</text>
            <text x="12" y="75" fill="#cbd5e1" font-size="9">• Đi lùi theo vết chân cũ</text>
            <text x="12" y="93" fill="#cbd5e1" font-size="9">• Giữ khoảng cách > 50m</text>
            <text x="12" y="111" fill="#cbd5e1" font-size="9">• Tìm vật che đỡ kiên cố</text>
            <text x="12" y="129" fill="#fde047" font-size="9">Tránh mảnh văng sát thương</text>
          </g>

          <line x1="360" y1="90" x2="380" y2="90" stroke="#f43f5e" stroke-width="2" marker-end="url(#mArrRed)"/>

          <!-- Bước 3 -->
          <g transform="translate(390, 20)">
            <rect width="150" height="140" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <rect width="150" height="32" rx="12" fill="#1d4ed8"/>
            <text x="75" y="21" fill="#ffffff" font-size="10" font-weight="black" text-anchor="middle">BƯỚC 3: CẢNH BÁO</text>
            <text x="12" y="55" fill="#93c5fd" font-size="9" font-weight="bold">NGĂN CHẶN TỤ TẬP:</text>
            <text x="12" y="75" fill="#cbd5e1" font-size="9">• Đặt cành cây cảnh báo</text>
            <text x="12" y="93" fill="#cbd5e1" font-size="9">• Hô hoán mọi người tránh xa</text>
            <text x="12" y="111" fill="#cbd5e1" font-size="9">• Không quay phim chụp ảnh</text>
            <text x="12" y="129" fill="#60a5fa" font-size="9">Bảo vệ tính mạng người khác</text>
          </g>

          <line x1="545" y1="90" x2="565" y2="90" stroke="#f43f5e" stroke-width="2" marker-end="url(#mArrRed)"/>

          <!-- Bước 4 -->
          <g transform="translate(575, 20)">
            <rect width="150" height="140" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
            <rect width="150" height="32" rx="12" fill="#047857"/>
            <text x="75" y="21" fill="#ffffff" font-size="10" font-weight="black" text-anchor="middle">BƯỚC 4: BÁO CƠ QUAN</text>
            <text x="12" y="55" fill="#a7f3d0" font-size="9" font-weight="bold">LIÊN HỆ KHẨN CẤP:</text>
            <text x="12" y="75" fill="#cbd5e1" font-size="9">• Báo Công an / Quân sự</text>
            <text x="12" y="93" fill="#cbd5e1" font-size="9">• Gọi Cứu hỏa: <tspan fill="#ffffff" font-weight="bold">114</tspan></text>
            <text x="12" y="111" fill="#cbd5e1" font-size="9">• Gọi Cấp cứu: <tspan fill="#ffffff" font-weight="bold">115</tspan></text>
            <text x="12" y="129" fill="#34d399" font-size="9">Để chuyên môn xử lí</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 5: Đội hình Đội ngũ Tiểu đội (Hàng ngang & Hàng dọc)
  squadFormationSVG: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
          <i class="fa-solid fa-users-line"></i> Sơ đồ Đội hình Tiểu đội bộ binh: Hàng ngang & Hàng dọc
        </span>
        <span class="text-slate-400">Điều lệnh Đội ngũ QĐND</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 740 240" class="w-full max-w-[740px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- BÊN TRÁI: ĐỘI HÌNH HÀNG NGANG -->
          <g transform="translate(20, 20)">
            <rect width="335" height="200" rx="12" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
            <text x="167" y="28" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">ĐỘI HÌNH TIỂU ĐỘI HÀNG NGANG</text>
            
            <!-- Vị trí Tiểu đội trưởng (bên phải phía trước) -->
            <rect x="25" y="50" width="36" height="28" rx="6" fill="#dc2626"/>
            <text x="43" y="68" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">TĐT</text>

            <!-- Hàng ngang 8 chiến sĩ từ 1 đến 8 (từ phải qua trái) -->
            <g transform="translate(75, 50)">
              <rect x="0" y="0" width="26" height="28" rx="5" fill="#047857"/><text x="13" y="18" fill="#ffffff" font-size="9" text-anchor="middle">1</text>
              <rect x="30" y="0" width="26" height="28" rx="5" fill="#047857"/><text x="43" y="18" fill="#ffffff" font-size="9" text-anchor="middle">2</text>
              <rect x="60" y="0" width="26" height="28" rx="5" fill="#047857"/><text x="73" y="18" fill="#ffffff" font-size="9" text-anchor="middle">3</text>
              <rect x="90" y="0" width="26" height="28" rx="5" fill="#047857"/><text x="103" y="18" fill="#ffffff" font-size="9" text-anchor="middle">4</text>
              <rect x="120" y="0" width="26" height="28" rx="5" fill="#047857"/><text x="133" y="18" fill="#ffffff" font-size="9" text-anchor="middle">5</text>
              <rect x="150" y="0" width="26" height="28" rx="5" fill="#047857"/><text x="163" y="18" fill="#ffffff" font-size="9" text-anchor="middle">6</text>
              <rect x="180" y="0" width="26" height="28" rx="5" fill="#047857"/><text x="193" y="18" fill="#ffffff" font-size="9" text-anchor="middle">7</text>
              <rect x="210" y="0" width="26" height="28" rx="5" fill="#047857"/><text x="223" y="18" fill="#ffffff" font-size="9" text-anchor="middle">8</text>
            </g>

            <text x="25" y="110" fill="#cbd5e1" font-size="10">• Giãn cách giữa 2 người: khoảng 70 cm (gót)</text>
            <text x="25" y="128" fill="#cbd5e1" font-size="10">• Hàng ngang 2 hàng: số lẻ hàng trên, chẵn hàng dưới</text>
            <text x="25" y="146" fill="#cbd5e1" font-size="10">• Cự li giữa 2 hàng: khoảng 1 mét</text>
            <text x="25" y="170" fill="#6ee7b7" font-size="9" font-weight="bold">Dùng khi: Học tập, điểm danh, nhận lệnh, sinh hoạt</text>
          </g>

          <!-- BÊN PHẢI: ĐỘI HÌNH HÀNG DỌC -->
          <g transform="translate(385, 20)">
            <rect width="335" height="200" rx="12" fill="#1e293b" stroke="#60a5fa" stroke-width="1.5"/>
            <text x="167" y="28" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">ĐỘI HÌNH TIỂU ĐỘI HÀNG DỌC</text>
            
            <!-- Vị trí Tiểu đội trưởng đứng đầu hàng -->
            <rect x="35" y="50" width="34" height="22" rx="5" fill="#dc2626"/>
            <text x="52" y="65" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">TĐT</text>

            <!-- Hàng dọc 8 chiến sĩ phía sau -->
            <g transform="translate(80, 50)">
              <rect x="0" y="0" width="22" height="22" rx="4" fill="#1d4ed8"/><text x="11" y="15" fill="#ffffff" font-size="9" text-anchor="middle">1</text>
              <rect x="28" y="0" width="22" height="22" rx="4" fill="#1d4ed8"/><text x="39" y="15" fill="#ffffff" font-size="9" text-anchor="middle">2</text>
              <rect x="56" y="0" width="22" height="22" rx="4" fill="#1d4ed8"/><text x="67" y="15" fill="#ffffff" font-size="9" text-anchor="middle">3</text>
              <rect x="84" y="0" width="22" height="22" rx="4" fill="#1d4ed8"/><text x="95" y="15" fill="#ffffff" font-size="9" text-anchor="middle">4</text>
              <rect x="112" y="0" width="22" height="22" rx="4" fill="#1d4ed8"/><text x="123" y="15" fill="#ffffff" font-size="9" text-anchor="middle">5</text>
              <rect x="140" y="0" width="22" height="22" rx="4" fill="#1d4ed8"/><text x="151" y="15" fill="#ffffff" font-size="9" text-anchor="middle">6</text>
              <rect x="168" y="0" width="22" height="22" rx="4" fill="#1d4ed8"/><text x="179" y="15" fill="#ffffff" font-size="9" text-anchor="middle">7</text>
              <rect x="196" y="0" width="22" height="22" rx="4" fill="#1d4ed8"/><text x="207" y="15" fill="#ffffff" font-size="9" text-anchor="middle">8</text>
            </g>

            <text x="25" y="110" fill="#cbd5e1" font-size="10">• Cự li giữa người trước và sau: khoảng 1 mét</text>
            <text x="25" y="128" fill="#cbd5e1" font-size="10">• Điểm số từ trên xuống dưới theo thứ tự</text>
            <text x="25" y="146" fill="#cbd5e1" font-size="10">• Dóng hàng: Nhìn thẳng gáy người đứng trước</text>
            <text x="25" y="170" fill="#93c5fd" font-size="9" font-weight="bold">Dùng khi: Hành quân, di chuyển vị trí, cơ động</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 6: Quy trình Cấp cứu ban đầu & Chuyển thương an toàn
  firstAidSVG: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
          <i class="fa-solid fa-kit-medical"></i> Quy trình 4 bước Cấp cứu ban đầu & Chuyển thương an toàn
        </span>
        <span class="text-slate-400">Nguyên tắc Sơ cấp cứu hiện hành</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 740 180" class="w-full max-w-[740px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="mArrMed" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981" />
            </marker>
          </defs>

          <!-- Bước 1 -->
          <g transform="translate(20, 20)">
            <rect width="150" height="140" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <rect width="150" height="32" rx="12" fill="#1d4ed8"/>
            <text x="75" y="21" fill="#ffffff" font-size="10" font-weight="black" text-anchor="middle">1. HIỆN TRƯỜNG</text>
            <text x="12" y="55" fill="#93c5fd" font-size="9" font-weight="bold">ĐÁNH GIÁ AN TOÀN:</text>
            <text x="12" y="75" fill="#cbd5e1" font-size="9">• Ngắt nguồn điện/cháy</text>
            <text x="12" y="93" fill="#cbd5e1" font-size="9">• Tránh dòng nước chảy</text>
            <text x="12" y="111" fill="#cbd5e1" font-size="9">• Bảo đảm an toàn cho mình</text>
            <text x="12" y="129" fill="#60a5fa" font-size="9">Không để thêm nạn nhân</text>
          </g>

          <line x1="175" y1="90" x2="195" y2="90" stroke="#10b981" stroke-width="2" marker-end="url(#mArrMed)"/>

          <!-- Bước 2 -->
          <g transform="translate(205, 20)">
            <rect width="150" height="140" rx="12" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
            <rect width="150" height="32" rx="12" fill="#b91c1c"/>
            <text x="75" y="21" fill="#ffffff" font-size="10" font-weight="black" text-anchor="middle">2. GỌI TRỢ GIÚP</text>
            <text x="12" y="55" fill="#fca5a5" font-size="9" font-weight="bold">GỌI NGAY:</text>
            <text x="12" y="75" fill="#cbd5e1" font-size="9">• Cấp cứu y tế: <tspan fill="#ffffff" font-weight="bold">115</tspan></text>
            <text x="12" y="93" fill="#cbd5e1" font-size="9">• Báo người lớn xung quanh</text>
            <text x="12" y="111" fill="#cbd5e1" font-size="9">• Báo rõ vị trí, số nạn nhân</text>
            <text x="12" y="129" fill="#f87171" font-size="9">Lắng nghe chỉ dẫn cấp cứu</text>
          </g>

          <line x1="360" y1="90" x2="380" y2="90" stroke="#10b981" stroke-width="2" marker-end="url(#mArrMed)"/>

          <!-- Bước 3 -->
          <g transform="translate(390, 20)">
            <rect width="150" height="140" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
            <rect width="150" height="32" rx="12" fill="#047857"/>
            <text x="75" y="21" fill="#ffffff" font-size="10" font-weight="black" text-anchor="middle">3. SƠ CỨU TẠI CHỖ</text>
            <text x="12" y="55" fill="#a7f3d0" font-size="9" font-weight="bold">THAO TÁC CƠ BẢN:</text>
            <text x="12" y="75" fill="#cbd5e1" font-size="9">• Băng ép cầm máu sạch</text>
            <text x="12" y="93" fill="#cbd5e1" font-size="9">• Cố định gãy xương (nẹp)</text>
            <text x="12" y="111" fill="#cbd5e1" font-size="9">• Hạ nhiệt bằng nước mát</text>
            <text x="12" y="129" fill="#34d399" font-size="9">Không tự ý nắn xương</text>
          </g>

          <line x1="545" y1="90" x2="565" y2="90" stroke="#10b981" stroke-width="2" marker-end="url(#mArrMed)"/>

          <!-- Bước 4 -->
          <g transform="translate(575, 20)">
            <rect width="150" height="140" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
            <rect width="150" height="32" rx="12" fill="#b45309"/>
            <text x="75" y="21" fill="#ffffff" font-size="10" font-weight="black" text-anchor="middle">4. CHUYỂN THƯƠNG</text>
            <text x="12" y="55" fill="#fde68a" font-size="9" font-weight="bold">VẬN CHUYỂN AN TOÀN:</text>
            <text x="12" y="75" fill="#cbd5e1" font-size="9">• Dùng cáng bạt/cáng cứng</text>
            <text x="12" y="93" fill="#cbd5e1" font-size="9">• Nghi chấn thương cột sống:</text>
            <text x="12" y="111" fill="#cbd5e1" font-size="9">  GIỮ NGUYÊN TƯ THẾ</text>
            <text x="12" y="129" fill="#fbbf24" font-size="9">Đưa đến cơ sở y tế gần nhất</text>
          </g>
        </svg>
      </div>
    </div>
  `
};
