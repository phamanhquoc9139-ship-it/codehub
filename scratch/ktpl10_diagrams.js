// scratch/ktpl10_diagrams.js
// SVG Diagrams for GDKTPL 10

module.exports = {
  // Sơ đồ 1: Chu trình 4 hoạt động kinh tế cơ bản
  economicCycleSVG: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
          <i class="fa-solid fa-arrows-spin"></i> Sơ đồ trực quan: Chu trình 4 hoạt động kinh tế cơ bản
        </span>
        <span class="text-slate-400">Hình thái tuần hoàn kinh tế</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 760 360" class="w-full max-w-[760px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradProd" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10b981"/>
              <stop offset="100%" stop-color="#059669"/>
            </linearGradient>
            <linearGradient id="gradDist" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3b82f6"/>
              <stop offset="100%" stop-color="#1d4ed8"/>
            </linearGradient>
            <linearGradient id="gradExch" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f59e0b"/>
              <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
            <linearGradient id="gradCons" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ec4899"/>
              <stop offset="100%" stop-color="#be185d"/>
            </linearGradient>
            <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M 0 0 L 8 4 L 0 8 z" fill="#94a3b8" />
            </marker>
            <marker id="arrowHeadEmerald" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M 0 0 L 8 4 L 0 8 z" fill="#10b981" />
            </marker>
          </defs>

          <!-- Central Circle Indicator -->
          <circle cx="380" cy="180" r="85" fill="#1e293b" stroke="#334155" stroke-width="2" stroke-dasharray="4 4"/>
          <text x="380" y="175" fill="#cbd5e1" font-size="13" font-weight="bold" text-anchor="middle">NỀN KINH TẾ</text>
          <text x="380" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">Chỉnh thể thống nhất</text>

          <!-- Connecting Arrows (Clockwise Loop) -->
          <!-- Top to Right: San xuat -> Phan phoi -->
          <path d="M 450 70 C 560 70, 600 110, 600 135" fill="none" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#arrowHead)" />
          
          <!-- Right to Bottom: Phan phoi -> Trao doi -->
          <path d="M 600 225 C 600 270, 520 290, 470 290" fill="none" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#arrowHead)" />

          <!-- Bottom to Left: Trao doi -> Tieu dung -->
          <path d="M 290 290 C 240 290, 160 270, 160 225" fill="none" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#arrowHead)" />

          <!-- Left to Top: Tieu dung -> San xuat (Feedback arrow) -->
          <path d="M 160 135 C 160 110, 200 70, 310 70" fill="none" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 3" marker-end="url(#arrowHeadEmerald)" />
          <text x="210" y="85" fill="#10b981" font-size="10" font-weight="bold">Động lực & Tín hiệu thị trường</text>

          <!-- 1. Sản xuất (TOP) -->
          <g transform="translate(310, 30)">
            <rect width="140" height="80" rx="14" fill="url(#gradProd)" stroke="#34d399" stroke-width="1.5" />
            <text x="70" y="32" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">1. SẢN XUẤT</text>
            <text x="70" y="52" fill="#e2e8f0" font-size="10" text-anchor="middle">Nền tảng của nền kinh tế</text>
            <text x="70" y="68" fill="#d1fae5" font-size="9" text-anchor="middle">Tạo ra hàng hoá & dịch vụ</text>
          </g>

          <!-- 2. Phân phối (RIGHT) -->
          <g transform="translate(530, 140)">
            <rect width="140" height="80" rx="14" fill="url(#gradDist)" stroke="#60a5fa" stroke-width="1.5" />
            <text x="70" y="32" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">2. PHÂN PHỐI</text>
            <text x="70" y="52" fill="#e2e8f0" font-size="10" text-anchor="middle">Phân bổ nguồn lực & kết quả</text>
            <text x="70" y="68" fill="#dbeafe" font-size="9" text-anchor="middle">Tiền công, Lợi nhuận, Thuế</text>
          </g>

          <!-- 3. Trao đổi (BOTTOM) -->
          <g transform="translate(310, 250)">
            <rect width="140" height="80" rx="14" fill="url(#gradExch)" stroke="#fbbf24" stroke-width="1.5" />
            <text x="70" y="32" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">3. TRAO ĐỔI</text>
            <text x="70" y="52" fill="#e2e8f0" font-size="10" text-anchor="middle">Cầu nối SX với Tiêu dùng</text>
            <text x="70" y="68" fill="#fef3c7" font-size="9" text-anchor="middle">Mua bán, giao thương hàng hoá</text>
          </g>

          <!-- 4. Tiêu dùng (LEFT) -->
          <g transform="translate(90, 140)">
            <rect width="140" height="80" rx="14" fill="url(#gradCons)" stroke="#f472b6" stroke-width="1.5" />
            <text x="70" y="32" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">4. TIÊU DÙNG</text>
            <text x="70" y="52" fill="#e2e8f0" font-size="10" text-anchor="middle">Mục đích & Động lực</text>
            <text x="70" y="68" fill="#fce7f3" font-size="9" text-anchor="middle">Thoả mãn nhu cầu con người</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 2: Cơ chế thị trường (Quan hệ Cung - Cầu - Giá cả)
  marketMechanismSVG: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
          <i class="fa-solid fa-scale-balanced"></i> Cơ chế vận hành: Tác động qua lại giữa Cung - Cầu - Giá cả
        </span>
        <span class="text-slate-400">Quy luật kinh tế khách quan</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 280" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="mArr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 z" fill="#60a5fa" />
            </marker>
            <marker id="mArrAmber" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 z" fill="#f59e0b" />
            </marker>
          </defs>

          <!-- 3 Pillars -->
          <!-- Cung -->
          <g transform="translate(60, 40)">
            <rect width="160" height="90" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="80" y="32" fill="#60a5fa" font-size="15" font-weight="bold" text-anchor="middle">CUNG (Supply)</text>
            <text x="80" y="55" fill="#cbd5e1" font-size="11" text-anchor="middle">Khả năng & ý muốn bán</text>
            <text x="80" y="73" fill="#94a3b8" font-size="10" text-anchor="middle">của người sản xuất</text>
          </g>

          <!-- Cầu -->
          <g transform="translate(500, 40)">
            <rect width="160" height="90" rx="12" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
            <text x="80" y="32" fill="#f472b6" font-size="15" font-weight="bold" text-anchor="middle">CẦU (Demand)</text>
            <text x="80" y="55" fill="#cbd5e1" font-size="11" text-anchor="middle">Nhu cầu có khả năng chi trả</text>
            <text x="80" y="73" fill="#94a3b8" font-size="10" text-anchor="middle">của người tiêu dùng</text>
          </g>

          <!-- GIÁ CẢ THỊ TRƯỜNG (Trung tâm) -->
          <g transform="translate(260, 160)">
            <rect width="200" height="90" rx="14" fill="#0f172a" stroke="#f59e0b" stroke-width="2.5"/>
            <text x="100" y="32" fill="#fbbf24" font-size="14" font-weight="black" text-anchor="middle">GIÁ CẢ THỊ TRƯỜNG</text>
            <text x="100" y="53" fill="#e2e8f0" font-size="10" text-anchor="middle">Tín hiệu điều tiết phân bổ</text>
            <text x="100" y="70" fill="#fef3c7" font-size="9" text-anchor="middle">Cân bằng Cung & Cầu</text>
          </g>

          <!-- Dynamic Connecting Lines -->
          <!-- Cung -> Giá cả -->
          <path d="M 140 135 L 280 180" fill="none" stroke="#60a5fa" stroke-width="2" marker-end="url(#mArr)"/>
          <text x="175" y="170" fill="#93c5fd" font-size="9">Cung > Cầu → Giá ↓</text>

          <!-- Cầu -> Giá cả -->
          <path d="M 580 135 L 440 180" fill="none" stroke="#60a5fa" stroke-width="2" marker-end="url(#mArr)"/>
          <text x="470" y="170" fill="#f9a8d4" font-size="9">Cầu > Cung → Giá ↑</text>

          <!-- Giá cả -> Cung/Cầu feedback -->
          <path d="M 330 155 L 200 135" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 2" marker-end="url(#mArrAmber)"/>
          <path d="M 390 155 L 520 135" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 2" marker-end="url(#mArrAmber)"/>
          <text x="360" y="110" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">Cơ chế tự điều chỉnh của 'Bàn tay vô hình'</text>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 3: Cơ cấu Ngân sách Nhà nước & Thuế
  budgetTaxSVG: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
          <i class="fa-solid fa-coins"></i> Cơ cấu Ngân sách Nhà nước: Nguồn thu & Nhiệm vụ chi
        </span>
        <span class="text-slate-400">Luật Ngân sách Nhà nước</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 740 300" class="w-full max-w-[740px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- NGÂN SÁCH NHÀ NƯỚC Ở GIỮA -->
          <rect x="250" y="20" width="240" height="60" rx="12" fill="#7c3aed" stroke="#a78bfa" stroke-width="2"/>
          <text x="370" y="45" fill="#ffffff" font-size="14" font-weight="black" text-anchor="middle">NGÂN SÁCH NHÀ NƯỚC</text>
          <text x="370" y="64" fill="#ede9fe" font-size="10" text-anchor="middle">Quỹ tiền tệ tập trung lớn nhất của quốc gia</text>

          <!-- NHÁNH TRÁI: NGUỒN THU -->
          <path d="M 310 85 L 180 120" fill="none" stroke="#10b981" stroke-width="2"/>
          <rect x="70" y="120" width="220" height="150" rx="10" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
          <text x="180" y="145" fill="#a7f3d0" font-size="13" font-weight="bold" text-anchor="middle">NGUỒN THU NGÂN SÁCH</text>
          <line x1="90" y1="155" x2="270" y2="155" stroke="#047857" stroke-width="1"/>
          <text x="85" y="175" fill="#d1fae5" font-size="11">• Thuế (nguồn thu chủ yếu & quan trọng nhất)</text>
          <text x="100" y="195" fill="#99f6e4" font-size="10">- Thuế trực thu (TNDN, TNCN...)</text>
          <text x="100" y="212" fill="#99f6e4" font-size="10">- Thuế gián thu (VAT, TTĐB, XNK...)</text>
          <text x="85" y="232" fill="#d1fae5" font-size="11">• Phí, lệ phí và thu từ tài sản/dầu khí</text>
          <text x="85" y="250" fill="#d1fae5" font-size="11">• Viện trợ & thu khác theo luật định</text>

          <!-- NHÁNH PHẢI: NHIỆM VỤ CHI -->
          <path d="M 430 85 L 560 120" fill="none" stroke="#f43f5e" stroke-width="2"/>
          <rect x="450" y="120" width="220" height="150" rx="10" fill="#881337" stroke="#fb7185" stroke-width="1.5"/>
          <text x="560" y="145" fill="#fecdd3" font-size="13" font-weight="bold" text-anchor="middle">NHIỆM VỤ CHI NGÂN SÁCH</text>
          <line x1="470" y1="155" x2="650" y2="155" stroke="#be123c" stroke-width="1"/>
          <text x="465" y="175" fill="#ffe4e6" font-size="11">• Chi đầu tư phát triển (hạ tầng giao thông...)</text>
          <text x="465" y="195" fill="#ffe4e6" font-size="11">• Chi thường xuyên (giáo dục, y tế, QP-AN...)</text>
          <text x="465" y="215" fill="#ffe4e6" font-size="11">• Chi trả nợ & viện trợ quốc tế</text>
          <text x="465" y="235" fill="#ffe4e6" font-size="11">• Chi dự trữ quốc gia & an sinh xã hội</text>
          <text x="465" y="253" fill="#ffe4e6" font-size="11">• Chi bổ sung quỹ dự trữ tài chính</text>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 4: Các mô hình doanh nghiệp & sản xuất kinh doanh
  businessModelsSVG: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
          <i class="fa-solid fa-sitemap"></i> Phân loại các mô hình sản xuất kinh doanh phổ biến
        </span>
        <span class="text-slate-400">Luật Doanh nghiệp & Luật HTX</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 760 270" class="w-full max-w-[760px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- Hộ kinh doanh -->
          <g transform="translate(20, 20)">
            <rect width="135" height="230" rx="10" fill="#1e293b" stroke="#cbd5e1" stroke-width="1"/>
            <rect width="135" height="40" rx="10" fill="#334155"/>
            <text x="67" y="25" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">HỘ KINH DOANH</text>
            <text x="10" y="60" fill="#94a3b8" font-size="10">• Do cá nhân / hộ GĐ</text>
            <text x="10" y="80" fill="#94a3b8" font-size="10">• Quy mô nhỏ, gọn</text>
            <text x="10" y="100" fill="#94a3b8" font-size="10">• Dễ thành lập, quản lí</text>
            <text x="10" y="125" fill="#f87171" font-size="10" font-weight="bold">Trách nhiệm:</text>
            <text x="10" y="145" fill="#fca5a5" font-size="9">Theo quy định PL</text>
            <text x="10" y="165" fill="#fca5a5" font-size="9">bằng tài sản cá nhân</text>
            <text x="10" y="200" fill="#fbbf24" font-size="9">Khó huy động vốn lớn</text>
          </g>

          <!-- DNTN -->
          <g transform="translate(165, 20)">
            <rect width="135" height="230" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
            <rect width="135" height="40" rx="10" fill="#78350f"/>
            <text x="67" y="25" fill="#fef3c7" font-size="11" font-weight="bold" text-anchor="middle">DOANH NGHIỆP TN</text>
            <text x="10" y="60" fill="#94a3b8" font-size="10">• 1 cá nhân làm chủ</text>
            <text x="10" y="80" fill="#94a3b8" font-size="10">• Toàn quyền quyết định</text>
            <text x="10" y="100" fill="#94a3b8" font-size="10">• Không phát hành CP</text>
            <text x="10" y="125" fill="#ef4444" font-size="10" font-weight="bold">Trách nhiệm VÔ HẠN:</text>
            <text x="10" y="145" fill="#fca5a5" font-size="9">Bằng toàn bộ tài sản</text>
            <text x="10" y="165" fill="#fca5a5" font-size="9">của chủ doanh nghiệp</text>
            <text x="10" y="200" fill="#f87171" font-size="9">Rủi ro tài sản cao</text>
          </g>

          <!-- CÔNG TY TNHH -->
          <g transform="translate(310, 20)">
            <rect width="140" height="230" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
            <rect width="140" height="40" rx="10" fill="#1e3a8a"/>
            <text x="70" y="25" fill="#dbeafe" font-size="11" font-weight="bold" text-anchor="middle">CÔNG TY TNHH</text>
            <text x="10" y="60" fill="#94a3b8" font-size="10">• 1 TV hoặc 2 - 50 TV</text>
            <text x="10" y="80" fill="#94a3b8" font-size="10">• Có tư cách pháp nhân</text>
            <text x="10" y="100" fill="#94a3b8" font-size="10">• Không phát hành CP</text>
            <text x="10" y="125" fill="#34d399" font-size="10" font-weight="bold">Trách nhiệm HỮU HẠN:</text>
            <text x="10" y="145" fill="#a7f3d0" font-size="9">Trong phạm vi vốn góp</text>
            <text x="10" y="165" fill="#a7f3d0" font-size="9">cam kết vào công ty</text>
            <text x="10" y="200" fill="#60a5fa" font-size="9">An toàn tài sản riêng</text>
          </g>

          <!-- CÔNG TY CỔ PHẦN -->
          <g transform="translate(460, 20)">
            <rect width="140" height="230" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
            <rect width="140" height="40" rx="10" fill="#064e3b"/>
            <text x="70" y="25" fill="#d1fae5" font-size="11" font-weight="bold" text-anchor="middle">CÔNG TY CỔ PHẦN</text>
            <text x="10" y="60" fill="#94a3b8" font-size="10">• Tối thiểu 3 cổ đông</text>
            <text x="10" y="80" fill="#94a3b8" font-size="10">• Không giới hạn tối đa</text>
            <text x="10" y="100" fill="#94a3b8" font-size="10">• Được phát hành CP</text>
            <text x="10" y="125" fill="#34d399" font-size="10" font-weight="bold">Trách nhiệm HỮU HẠN:</text>
            <text x="10" y="145" fill="#a7f3d0" font-size="9">Trong phạm vi vốn cổ phần</text>
            <text x="10" y="165" fill="#a7f3d0" font-size="9">đã mua / đăng kí</text>
            <text x="10" y="200" fill="#34d399" font-size="9">Dễ huy động vốn lớn</text>
          </g>

          <!-- HỢP TÁC XÃ -->
          <g transform="translate(610, 20)">
            <rect width="135" height="230" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
            <rect width="135" height="40" rx="10" fill="#581c87"/>
            <text x="67" y="25" fill="#f3e8ff" font-size="11" font-weight="bold" text-anchor="middle">HỢP TÁC XÃ</text>
            <text x="10" y="60" fill="#94a3b8" font-size="10">• Kinh tế tập thể</text>
            <text x="10" y="80" fill="#94a3b8" font-size="10">• Tự nguyện, đồng sở hữu</text>
            <text x="10" y="100" fill="#94a3b8" font-size="10">• Tư cách pháp nhân</text>
            <text x="10" y="125" fill="#c084fc" font-size="10" font-weight="bold">Bình đẳng dân chủ:</text>
            <text x="10" y="145" fill="#e9d5ff" font-size="9">Biểu quyết ngang nhau</text>
            <text x="10" y="165" fill="#e9d5ff" font-size="9">không phụ thuộc vốn</text>
            <text x="10" y="200" fill="#c084fc" font-size="9">Tương trợ cộng đồng</text>
          </g>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 5: Thứ bậc hiệu lực văn bản quy phạm pháp luật
  lawHierarchySVG: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
          <i class="fa-solid fa-gavel"></i> Thứ bậc hiệu lực của Hệ thống Văn bản Quy phạm Pháp luật Việt Nam
        </span>
        <span class="text-slate-400">Luật Ban hành VBQPPL</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 720 280" class="w-full max-w-[720px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- Kim tự tháp pháp luật -->
          <!-- Tầng 1: Hiến pháp -->
          <polygon points="360,20 270,75 450,75" fill="#b91c1c" stroke="#f87171" stroke-width="1.5"/>
          <text x="360" y="55" fill="#ffffff" font-size="12" font-weight="black" text-anchor="middle">HIẾN PHÁP</text>
          <text x="490" y="55" fill="#fca5a5" font-size="10">Luật cơ bản, hiệu lực pháp lí cao nhất</text>

          <!-- Tầng 2: Luật, Nghị quyết Quốc hội -->
          <polygon points="265,80 455,80 495,130 225,130" fill="#c2410c" stroke="#fb923c" stroke-width="1.5"/>
          <text x="360" y="110" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">LUẬT, BỘ LUẬT, NGHỊ QUYẾT QUỐC HỘI</text>
          <text x="540" y="110" fill="#fed7aa" font-size="10">Quốc hội ban hành</text>

          <!-- Tầng 3: Pháp lệnh, Nghị quyết UBTVQH, Lệnh Chủ tịch nước -->
          <polygon points="220,135 500,135 540,185 180,185" fill="#d97706" stroke="#fcd34d" stroke-width="1.5"/>
          <text x="360" y="165" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">PHÁP LỆNH, NGHỊ QUYẾT UBTVQH • LỆNH, QUYẾT ĐỊNH CHỦ TỊCH NƯỚC</text>

          <!-- Tầng 4: Nghị định Chính phủ, Quyết định Thủ tướng -->
          <polygon points="175,190 545,190 585,235 135,235" fill="#047857" stroke="#34d399" stroke-width="1.5"/>
          <text x="360" y="217" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">NGHỊ ĐỊNH CỦA CHÍNH PHỦ • QUYẾT ĐỊNH CỦA THỦ TƯỚNG</text>

          <!-- Tầng 5: Thông tư Bộ trưởng & VBQPPL của Chính quyền địa phương -->
          <polygon points="130,240 590,240 630,275 90,275" fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="360" y="262" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">THÔNG TƯ BỘ TRƯỞNG • NGHỊ QUYẾT HĐND • QUYẾT ĐỊNH UBND CÁC CẤP</text>
        </svg>
      </div>
    </div>
  `,

  // Sơ đồ 6: Bộ máy Nhà nước CHXHCN Việt Nam (Hiến pháp 2013 sửa đổi 2025)
  stateApparatusSVG: `
    <div class="my-6 p-4 sm:p-6 bg-slate-900 rounded-2xl border border-slate-700/80 shadow-md">
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-800 text-xs">
        <span class="font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
          <i class="fa-solid fa-landmark"></i> Cơ cấu Bộ máy Nhà nước Cộng hoà Xã hội Chủ nghĩa Việt Nam
        </span>
        <span class="text-slate-400">Hiến pháp năm 2013 (Sửa đổi, bổ sung 2025)</span>
      </div>
      <div class="w-full overflow-x-auto flex justify-center py-2">
        <svg viewBox="0 0 760 340" class="w-full max-w-[760px] h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
          <!-- QUỐC HỘI (Cơ quan quyền lực cao nhất) -->
          <rect x="260" y="15" width="240" height="55" rx="12" fill="#b91c1c" stroke="#f87171" stroke-width="2"/>
          <text x="380" y="38" fill="#ffffff" font-size="13" font-weight="black" text-anchor="middle">QUỐC HỘI</text>
          <text x="380" y="54" fill="#fecaca" font-size="9" text-anchor="middle">Cơ quan quyền lực nhà nước cao nhất • Lập hiến & Lập pháp</text>

          <!-- CHỦ TỊCH NƯỚC (Nguyên thủ quốc gia) -->
          <rect x="270" y="95" width="220" height="50" rx="10" fill="#c2410c" stroke="#fb923c" stroke-width="1.5"/>
          <text x="380" y="117" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">CHỦ TỊCH NƯỚC</text>
          <text x="380" y="133" fill="#fed7aa" font-size="9" text-anchor="middle">Nguyên thủ quốc gia • Thay mặt nước về đối nội, đối ngoại</text>

          <!-- Đường nối dọc từ QH -->
          <line x1="380" y1="70" x2="380" y2="95" stroke="#94a3b8" stroke-width="2"/>
          <line x1="380" y1="145" x2="380" y2="175" stroke="#94a3b8" stroke-width="2"/>
          <path d="M 140 175 L 620 175" fill="none" stroke="#94a3b8" stroke-width="2"/>

          <!-- 3 Nhánh Quyền lực cấp Trung ương -->
          <!-- 1. CHÍNH PHỦ (Hành pháp) -->
          <line x1="140" y1="175" x2="140" y2="195" stroke="#94a3b8" stroke-width="2"/>
          <rect x="30" y="195" width="220" height="60" rx="10" fill="#047857" stroke="#34d399" stroke-width="1.5"/>
          <text x="140" y="220" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">CHÍNH PHỦ</text>
          <text x="140" y="235" fill="#a7f3d0" font-size="9" text-anchor="middle">Cơ quan hành chính nhà nước cao nhất</text>
          <text x="140" y="247" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">Thực hiện quyền HÀNH PHÁP</text>

          <!-- 2. TOÀ ÁN NHÂN DÂN (Tư pháp - Xét xử) -->
          <line x1="380" y1="175" x2="380" y2="195" stroke="#94a3b8" stroke-width="2"/>
          <rect x="270" y="195" width="220" height="60" rx="10" fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="380" y="220" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">TOÀ ÁN NHÂN DÂN</text>
          <text x="380" y="235" fill="#bfdbfe" font-size="9" text-anchor="middle">Cơ quan xét xử của nước CHXHCNVN</text>
          <text x="380" y="247" fill="#93c5fd" font-size="9" font-weight="bold" text-anchor="middle">Thực hiện quyền TƯ PHÁP</text>

          <!-- 3. VIỆN KIỂM SÁT NHÂN DÂN (Công tố & Kiểm sát) -->
          <line x1="620" y1="175" x2="620" y2="195" stroke="#94a3b8" stroke-width="2"/>
          <rect x="510" y="195" width="220" height="60" rx="10" fill="#6b21a8" stroke="#c084fc" stroke-width="1.5"/>
          <text x="620" y="220" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">VIỆN KIỂM SÁT NHÂN DÂN</text>
          <text x="620" y="235" fill="#e9d5ff" font-size="9" text-anchor="middle">Thực hành quyền CÔNG TỐ</text>
          <text x="620" y="247" fill="#d8b4fe" font-size="9" text-anchor="middle">Kiểm sát hoạt động tư pháp</text>

          <!-- CẤP ĐỊA PHƯƠNG (DƯỚI CÙNG) -->
          <line x1="140" y1="255" x2="140" y2="280" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>
          <rect x="20" y="280" width="720" height="45" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1"/>
          <text x="380" y="300" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">CHÍNH QUYỀN ĐỊA PHƯƠNG: HỘI ĐỒNG NHÂN DÂN & UỶ BAN NHÂN DÂN CÁC CẤP</text>
          <text x="380" y="315" fill="#94a3b8" font-size="9" text-anchor="middle">HĐND (Cơ quan quyền lực địa phương) • UBND (Cơ quan chấp hành của HĐND, cơ quan hành chính ở địa phương)</text>
        </svg>
      </div>
    </div>
  `
};
