// Kho hình minh họa chi tiết từng nội dung cho toàn bộ 20 bài học Công Nghệ 8
// Mỗi hình được thiết kế chuẩn vector SVG viewBox cố định, sắc nét, responsive, dark-mode ready

const inlineSvgs = {
  // ==================== CHƯƠNG I: VẼ KĨ THUẬT ====================
  // Bài 1: Tiêu chuẩn bản vẽ
  bai1_khoGiay: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-file-lines"></i> Hình 1.1: Quan hệ phân chia kích thước các khổ giấy chính dãy A (TCVN 7285:2003)
      </div>
      <svg viewBox="0 0 540 160" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="15" width="500" height="130" fill="#f8fafc" stroke="#3b82f6" stroke-width="2" rx="6"/>
        <text x="35" y="35" font-size="11" font-weight="900" fill="#1d4ed8">A0 (1189 × 841 mm)</text>
        <line x1="270" y1="15" x2="270" y2="145" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,2"/>
        <rect x="25" y="45" width="240" height="95" fill="#eff6ff" stroke="#60a5fa" stroke-width="1.5" rx="4"/>
        <text x="145" y="95" text-anchor="middle" font-size="13" font-weight="bold" fill="#2563eb">A1 (841 × 594 mm)</text>
        
        <line x1="270" y1="80" x2="520" y2="80" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,2"/>
        <rect x="275" y="20" width="240" height="55" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5" rx="4"/>
        <text x="395" y="52" text-anchor="middle" font-size="12" font-weight="bold" fill="#4338ca">A2 (594 × 420 mm)</text>

        <line x1="395" y1="80" x2="395" y2="145" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,2"/>
        <rect x="275" y="85" width="115" height="55" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5" rx="4"/>
        <text x="332" y="117" text-anchor="middle" font-size="11" font-weight="bold" fill="#a21caf">A3 (420×297)</text>

        <rect x="400" y="85" width="115" height="55" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="4"/>
        <text x="457" y="117" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">A4 (297×210)</text>
      </svg>
      <div class="text-[10px] text-gray-500 text-center mt-1">Mỗi khổ giấy tiếp theo bằng một nửa khổ giấy liền trước chia đôi theo cạnh dài</div>
    </div>
  `,

  bai1_netVe: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-pen-nib"></i> Hình 1.2: Các loại nét vẽ kĩ thuật tiêu chuẩn thường dùng
      </div>
      <svg viewBox="0 0 540 130" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="20" x2="210" y2="20" stroke="#1e293b" stroke-width="3.5"/>
        <text x="230" y="24" font-size="11" font-weight="bold" fill="#1e293b">Nét liền đậm (0.5 mm):</text>
        <text x="380" y="24" font-size="10.5" fill="#64748b">Đường bao thấy, cạnh thấy</text>

        <line x1="30" y1="50" x2="210" y2="50" stroke="#475569" stroke-width="1.5" stroke-dasharray="6,3"/>
        <text x="230" y="54" font-size="11" font-weight="bold" fill="#1e293b">Nét đứt mảnh (0.25 mm):</text>
        <text x="380" y="54" font-size="10.5" fill="#64748b">Đường bao khuất, cạnh khuất</text>

        <line x1="30" y1="80" x2="210" y2="80" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="14,3,2,3"/>
        <text x="230" y="84" font-size="11" font-weight="bold" fill="#0284c7">Nét gạch chấm mảnh:</text>
        <text x="380" y="84" font-size="10.5" fill="#64748b">Đường tâm, trục đối xứng</text>

        <line x1="30" y1="110" x2="210" y2="110" stroke="#94a3b8" stroke-width="1.2"/>
        <text x="230" y="114" font-size="11" font-weight="bold" fill="#64748b">Nét liền mảnh:</text>
        <text x="380" y="114" font-size="10.5" fill="#64748b">Đường gióng, đường kích thước</text>
      </svg>
    </div>
  `,

  // Bài 2: Hình chiếu vuông góc
  bai2_baMatPhang: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-cube"></i> Hình 2.1: Hệ thống 3 mặt phẳng chiếu vuông góc trong không gian
      </div>
      <svg viewBox="0 0 540 160" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="120,20 320,20 320,110 120,110" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        <text x="220" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">Mặt đứng P1 (Hình chiếu đứng)</text>
        <polygon points="120,110 320,110 240,155 40,155" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
        <text x="180" y="135" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">Mặt bằng P2 (Hình chiếu bằng)</text>
        <polygon points="320,20 420,50 420,140 320,110" fill="#faf5ff" stroke="#a855f7" stroke-width="2"/>
        <text x="375" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#7e22ce" transform="rotate(18, 375, 85)">Mặt cạnh P3 (HC cạnh)</text>
        
        <path d="M 60,65 L 115,65" stroke="#ef4444" stroke-width="2"/>
        <text x="80" y="55" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">Từ trước</text>
        <path d="M 220,160 L 220,120" stroke="#ef4444" stroke-width="2"/>
        <text x="220" y="160" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">Từ trên</text>
        <path d="M 455,95 L 425,95" stroke="#ef4444" stroke-width="2"/>
        <text x="465" y="98" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">Từ trái</text>
      </svg>
      <div class="text-[10px] text-gray-500 text-center mt-1">Mở MP bằng P2 xuống dưới 90°, mở MP cạnh P3 sang phải 90° để đưa về cùng một mặt phẳng bản vẽ</div>
    </div>
  `,

  bai2_viTriHinhChieu: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-table-cells"></i> Hình 2.2: Bố cục vị trí 3 hình chiếu trên mặt phẳng bản vẽ
      </div>
      <svg viewBox="0 0 540 140" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <!-- Vị trí Hình chiếu đứng -->
        <g transform="translate(60, 15)">
          <rect width="160" height="50" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
          <text x="80" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">HÌNH CHIẾU ĐỨNG</text>
          <text x="80" y="42" text-anchor="middle" font-size="9" fill="#64748b">(Góc trên bên trái)</text>
        </g>
        <!-- Vị trí Hình chiếu bằng -->
        <g transform="translate(60, 75)">
          <rect width="160" height="50" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
          <text x="80" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">HÌNH CHIẾU BẰNG</text>
          <text x="80" y="42" text-anchor="middle" font-size="9" fill="#64748b">(Ở ngay dưới HC đứng)</text>
        </g>
        <!-- Vị trí Hình chiếu cạnh -->
        <g transform="translate(260, 15)">
          <rect width="160" height="50" rx="6" fill="#faf5ff" stroke="#a855f7" stroke-width="2"/>
          <text x="80" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#7e22ce">HÌNH CHIẾU CẠNH</text>
          <text x="80" y="42" text-anchor="middle" font-size="9" fill="#64748b">(Ở ngay bên phải HC đứng)</text>
        </g>
        <!-- Đường gióng kết nối -->
        <line x1="140" y1="65" x2="140" y2="75" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
        <line x1="220" y1="40" x2="260" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
        <text x="470" y="65" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">Gióng thẳng hàng</text>
        <text x="470" y="80" text-anchor="middle" font-size="9" fill="#64748b">Dài bằng nhau</text>
        <text x="470" y="93" text-anchor="middle" font-size="9" fill="#64748b">Cao bằng nhau</text>
      </svg>
    </div>
  `,

  // Bài 3: Bản vẽ chi tiết
  bai3_cauTruc: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-list-check"></i> Hình 3.1: 4 Nội dung chính cấu thành Bản vẽ chi tiết
      </div>
      <svg viewBox="0 0 540 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 12)">
          <rect width="115" height="95" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <circle cx="57" cy="22" r="12" fill="#3b82f6"/>
          <text x="57" y="26" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">1</text>
          <text x="57" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">KHUNG TÊN</text>
          <text x="57" y="68" text-anchor="middle" font-size="8.5" fill="#64748b">Tên chi tiết</text>
          <text x="57" y="80" text-anchor="middle" font-size="8.5" fill="#64748b">Vật liệu, tỉ lệ</text>
        </g>
        <g transform="translate(145, 12)">
          <rect width="115" height="95" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
          <circle cx="57" cy="22" r="12" fill="#10b981"/>
          <text x="57" y="26" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">2</text>
          <text x="57" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">HÌNH BIỂU DIỄN</text>
          <text x="57" y="68" text-anchor="middle" font-size="8.5" fill="#64748b">Hình chiếu</text>
          <text x="57" y="80" text-anchor="middle" font-size="8.5" fill="#64748b">Hình cắt, mặt cắt</text>
        </g>
        <g transform="translate(275, 12)">
          <rect width="115" height="95" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="57" cy="22" r="12" fill="#f59e0b"/>
          <text x="57" y="26" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">3</text>
          <text x="57" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">KÍCH THƯỚC</text>
          <text x="57" y="68" text-anchor="middle" font-size="8.5" fill="#64748b">Kích thước chung</text>
          <text x="57" y="80" text-anchor="middle" font-size="8.5" fill="#64748b">Kích thước phần tử</text>
        </g>
        <g transform="translate(405, 12)">
          <rect width="115" height="95" rx="8" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
          <circle cx="57" cy="22" r="12" fill="#d946ef"/>
          <text x="57" y="26" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">4</text>
          <text x="57" y="52" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#86198f">YÊU CẦU KĨ THUẬT</text>
          <text x="57" y="68" text-anchor="middle" font-size="8.5" fill="#64748b">Gia công, mạ</text>
          <text x="57" y="80" text-anchor="middle" font-size="8.5" fill="#64748b">Nhiệt luyện</text>
        </g>
      </svg>
    </div>
  `,

  // Bài 4: Bản vẽ lắp
  bai4_bangKe: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-amber-600 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-table-list"></i> Hình 4.1: Mẫu Bảng kê chi tiết trên Bản vẽ lắp ráp
      </div>
      <svg viewBox="0 0 540 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="10" width="500" height="95" fill="#fff" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="20" y="10" width="500" height="24" fill="#f1f5f9"/>
        <line x1="70" y1="10" x2="70" y2="105" stroke="#94a3b8"/>
        <line x1="270" y1="10" x2="270" y2="105" stroke="#94a3b8"/>
        <line x1="340" y1="10" x2="340" y2="105" stroke="#94a3b8"/>
        <line x1="430" y1="10" x2="430" y2="105" stroke="#94a3b8"/>

        <text x="45" y="26" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#334155">STT</text>
        <text x="170" y="26" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#334155">TÊN CHI TIẾT</text>
        <text x="305" y="26" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#334155">SL</text>
        <text x="385" y="26" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#334155">VẬT LIỆU</text>
        <text x="475" y="26" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#334155">GHI CHÚ</text>

        <line x1="20" y1="34" x2="520" y2="34" stroke="#cbd5e1"/>
        <text x="45" y="48" text-anchor="middle" font-size="9.5" fill="#475569">1</text>
        <text x="80" y="48" font-size="9.5" fill="#1e293b">Thân van</text>
        <text x="305" y="48" text-anchor="middle" font-size="9.5" fill="#475569">1</text>
        <text x="385" y="48" text-anchor="middle" font-size="9.5" fill="#475569">Gang xám</text>
        <text x="475" y="48" text-anchor="middle" font-size="9.5" fill="#64748b">Đúc</text>

        <line x1="20" y1="58" x2="520" y2="58" stroke="#cbd5e1"/>
        <text x="45" y="72" text-anchor="middle" font-size="9.5" fill="#475569">2</text>
        <text x="80" y="72" font-size="9.5" fill="#1e293b">Trục van</text>
        <text x="305" y="72" text-anchor="middle" font-size="9.5" fill="#475569">1</text>
        <text x="385" y="72" text-anchor="middle" font-size="9.5" fill="#475569">Thép C45</text>
        <text x="475" y="72" text-anchor="middle" font-size="9.5" fill="#64748b">Tiện</text>

        <line x1="20" y1="82" x2="520" y2="82" stroke="#cbd5e1"/>
        <text x="45" y="96" text-anchor="middle" font-size="9.5" fill="#475569">3</text>
        <text x="80" y="96" font-size="9.5" fill="#1e293b">Tay quay điều khiển</text>
        <text x="305" y="96" text-anchor="middle" font-size="9.5" fill="#475569">1</text>
        <text x="385" y="96" text-anchor="middle" font-size="9.5" fill="#475569">Thép</text>
        <text x="475" y="96" text-anchor="middle" font-size="9.5" fill="#64748b">Hàn</text>
      </svg>
    </div>
  `,

  // Bài 5: Bản vẽ nhà
  bai5_cacHinhBieuDien: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-house"></i> Hình 5.1: 3 Hình biểu diễn chủ yếu của Bản vẽ nhà
      </div>
      <svg viewBox="0 0 540 130" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 10)">
          <rect width="150" height="105" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="75" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">1. MẶT BẰNG</text>
          <rect x="25" y="35" width="100" height="55" fill="#fff" stroke="#93c5fd" stroke-width="1.2"/>
          <line x1="75" y1="35" x2="75" y2="90" stroke="#93c5fd"/>
          <text x="50" y="65" text-anchor="middle" font-size="8" fill="#64748b">Phòng khách</text>
          <text x="100" y="65" text-anchor="middle" font-size="8" fill="#64748b">Bếp ăn</text>
          <text x="75" y="100" text-anchor="middle" font-size="8" font-weight="bold" fill="#2563eb">Hình cắt nằm ngang quan trọng nhất</text>
        </g>
        <g transform="translate(195, 10)">
          <rect width="150" height="105" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
          <text x="75" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">2. MẶT ĐỨNG</text>
          <polygon points="25,55 75,35 125,55" fill="#fee2e2" stroke="#ef4444"/>
          <rect x="35" y="55" width="80" height="35" fill="#fff" stroke="#6ee7b7"/>
          <rect x="65" y="66" width="20" height="24" fill="#fef3c7" stroke="#f59e0b"/>
          <text x="75" y="100" text-anchor="middle" font-size="8" font-weight="bold" fill="#059669">Hình chiếu ngoài mặt tiền</text>
        </g>
        <g transform="translate(370, 10)">
          <rect width="150" height="105" rx="8" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
          <text x="75" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#7e22ce">3. MẶT CẮT</text>
          <line x1="30" y1="38" x2="120" y2="38" stroke="#a855f7" stroke-width="2"/>
          <line x1="30" y1="65" x2="120" y2="65" stroke="#a855f7" stroke-width="2"/>
          <line x1="30" y1="90" x2="120" y2="90" stroke="#a855f7" stroke-width="2"/>
          <text x="75" y="54" text-anchor="middle" font-size="8" fill="#64748b">Tầng 2 (h = 3.6m)</text>
          <text x="75" y="80" text-anchor="middle" font-size="8" fill="#64748b">Tầng 1 (h = 3.9m)</text>
          <text x="75" y="100" text-anchor="middle" font-size="8" font-weight="bold" fill="#9333ea">Cắt dọc theo chiều cao</text>
        </g>
      </svg>
    </div>
  `,

  // ==================== CHƯƠNG II: CƠ KHÍ ====================
  // Bài 6: Vật liệu cơ khí
  bai6_soDoVatLieu: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-amber-600 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-sitemap"></i> Hình 6.1: Sơ đồ phân loại tổng quát Vật liệu Cơ khí
      </div>
      <svg viewBox="0 0 540 135" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="180" y="10" width="180" height="28" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="270" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#f8fafc">VẬT LIỆU CƠ KHÍ</text>

        <path d="M 220 38 L 130 60" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="40" y="60" width="180" height="65" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
        <text x="130" y="78" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">1. KIM LOẠI</text>
        <text x="50" y="95" font-size="9" fill="#334155">• Kim loại đen: Thép (C&le;2.14%), Gang</text>
        <text x="50" y="112" font-size="9" fill="#334155">• Kim loại màu: Đồng, Nhôm &amp; hợp kim</text>

        <path d="M 320 38 L 410 60" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="320" y="60" width="180" height="65" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="1.2"/>
        <text x="410" y="78" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b91c1c">2. PHI KIM LOẠI</text>
        <text x="330" y="95" font-size="9" fill="#334155">• Chất dẻo: Nhiệt dẻo &amp; Nhiệt rắn</text>
        <text x="330" y="112" font-size="9" fill="#334155">• Cao su: Đàn hồi, giảm chấn tốt</text>
      </svg>
    </div>
  `,

  // Bài 7: Truyền và biến đổi chuyển động
  bai7_truyenDong: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-arrows-spin"></i> Hình 7.1: Bộ truyền động đai và cơ cấu tay quay - con trượt
      </div>
      <svg viewBox="0 0 540 130" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 10)">
          <rect width="240" height="110" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="120" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">1. Truyền động đai</text>
          <circle cx="60" cy="58" r="26" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="60" y="62" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1d4ed8">D1</text>
          <circle cx="170" cy="58" r="16" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
          <text x="170" y="62" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1d4ed8">D2</text>
          <path d="M 60 32 L 170 42 A 16 16 0 0 1 170 74 L 60 84 A 26 26 0 0 1 60 32" fill="none" stroke="#475569" stroke-width="2.5"/>
          <text x="120" y="100" text-anchor="middle" font-size="9" font-mono font-bold fill="#0284c7">i = n1/n2 = D2/D1</text>
        </g>
        <g transform="translate(280, 10)">
          <rect width="245" height="110" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="122" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">2. Tay quay - con trượt</text>
          <circle cx="50" cy="62" r="5" fill="#059669"/>
          <line x1="50" y1="62" x2="85" y2="40" stroke="#059669" stroke-width="3.5"/>
          <circle cx="85" cy="40" r="3.5" fill="#10b981"/>
          <line x1="85" y1="40" x2="165" y2="62" stroke="#f59e0b" stroke-width="2.5"/>
          <circle cx="165" cy="62" r="3.5" fill="#d97706"/>
          <rect x="150" y="52" width="32" height="20" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" rx="3"/>
          <path d="M 195 62 L 225 62" stroke="#dc2626" stroke-width="1.5"/>
          <text x="122" y="100" text-anchor="middle" font-size="8.5" fill="#475569">Biến quay tròn thành tịnh tiến</text>
        </g>
      </svg>
    </div>
  `,

  // Bài 8: Gia công cơ khí cầm tay
  bai8_dungCu: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-teal-600 dark:text-teal-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-wrench"></i> Hình 8.1: Thao tác sử dụng dụng cụ gia công cầm tay cơ bản
      </div>
      <svg viewBox="0 0 540 115" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 10)">
          <rect width="155" height="95" rx="6" fill="#fff" stroke="#cbd5e1"/>
          <text x="77" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">1. CƯA TAY</text>
          <path d="M 25 65 L 25 38 L 125 38 L 125 65" fill="none" stroke="#475569" stroke-width="2.5"/>
          <line x1="25" y1="60" x2="125" y2="60" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,1"/>
          <rect x="125" y="42" width="14" height="26" fill="#d97706" rx="2"/>
          <text x="77" y="78" text-anchor="middle" font-size="8" fill="#64748b">Lắp răng hướng về trước</text>
          <text x="77" y="89" text-anchor="middle" font-size="7.5" fill="#94a3b8">Đẩy ấn lực, kéo nhẹ tay</text>
        </g>
        <g transform="translate(190, 10)">
          <rect width="155" height="95" rx="6" fill="#fff" stroke="#cbd5e1"/>
          <text x="77" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">2. DŨA KIM LOẠI</text>
          <rect x="25" y="45" width="80" height="7" fill="#94a3b8" stroke="#475569"/>
          <rect x="105" y="42" width="30" height="13" fill="#b45309" rx="3"/>
          <text x="77" y="72" text-anchor="middle" font-size="8" fill="#64748b">Dũa dẹt, tam giác, tròn</text>
          <text x="77" y="85" text-anchor="middle" font-size="7.5" fill="#94a3b8">Tạo mặt phẳng nhẵn mịn</text>
        </g>
        <g transform="translate(365, 10)">
          <rect width="160" height="95" rx="6" fill="#fff" stroke="#cbd5e1"/>
          <text x="80" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">3. THƯỚC CẶP</text>
          <rect x="20" y="40" width="120" height="10" fill="#e2e8f0" stroke="#64748b"/>
          <path d="M 30 40 L 30 68 L 36 68 L 36 40" fill="#94a3b8"/>
          <path d="M 60 40 L 60 68 L 66 68 L 66 40" fill="#3b82f6"/>
          <text x="80" y="72" text-anchor="middle" font-size="8" fill="#64748b">Đo ngoài, đo trong, đo sâu</text>
          <text x="80" y="85" text-anchor="middle" font-size="7.5" fill="#94a3b8">Độ chính xác tới 0.1 mm</text>
        </g>
      </svg>
    </div>
  `,

  // Bài 9: Ngành nghề cơ khí
  bai9_ngheCoKhi: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-user-gear"></i> Hình 9.1: Các vị trí việc làm trọng yếu trong ngành Cơ khí chế tạo
      </div>
      <svg viewBox="0 0 540 100" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 12)">
          <rect width="115" height="75" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1d4ed8">KĨ SƯ CƠ KHÍ</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Thiết kế máy,</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">lập quy trình CN</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">ĐH/Cao đẳng</text>
        </g>
        <g transform="translate(145, 12)">
          <rect width="115" height="75" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#047857">THỢ GIA CÔNG</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Tiện, Phay, Bào,</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">vận hành máy CNC</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">Trung cấp nghề</text>
        </g>
        <g transform="translate(275, 12)">
          <rect width="115" height="75" rx="6" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#b45309">THỢ HÀN</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Hàn điện, hàn hơi,</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">kết cấu kim loại</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">Chứng chỉ nghề</text>
        </g>
        <g transform="translate(405, 12)">
          <rect width="115" height="75" rx="6" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#86198f">LẮP RÁP &amp; SỬA CHỮA</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Bảo dưỡng động cơ,</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">thiết bị tự động</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">Thợ kĩ thuật</text>
        </g>
      </svg>
    </div>
  `,

  // Bài 10: Dự án gia công
  bai10_quyTrinh: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-list-ol"></i> Hình 10.1: Quy trình 5 bước gia công sản phẩm móc khóa kim loại
      </div>
      <svg viewBox="0 0 540 85" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 10)">
          <rect width="95" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
          <text x="47" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">Bước 1</text>
          <text x="47" y="38" text-anchor="middle" font-size="8.5" fill="#334155">Đọc bản vẽ &amp;</text>
          <text x="47" y="50" text-anchor="middle" font-size="8.5" fill="#334155">chuẩn bị phôi</text>
        </g>
        <path d="M 108 40 L 118 40" stroke="#94a3b8" stroke-width="2"/>
        <g transform="translate(120, 10)">
          <rect width="90" height="60" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
          <text x="45" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">Bước 2</text>
          <text x="45" y="38" text-anchor="middle" font-size="8.5" fill="#334155">Vạch dấu</text>
          <text x="45" y="50" text-anchor="middle" font-size="8.5" fill="#334155">lên phôi nhôm</text>
        </g>
        <path d="M 213 40 L 223 40" stroke="#94a3b8" stroke-width="2"/>
        <g transform="translate(225, 10)">
          <rect width="90" height="60" rx="6" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.2"/>
          <text x="45" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">Bước 3</text>
          <text x="45" y="38" text-anchor="middle" font-size="8.5" fill="#334155">Cưa cắt</text>
          <text x="45" y="50" text-anchor="middle" font-size="8.5" fill="#334155">theo đường dấu</text>
        </g>
        <path d="M 318 40 L 328 40" stroke="#94a3b8" stroke-width="2"/>
        <g transform="translate(330, 10)">
          <rect width="90" height="60" rx="6" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.2"/>
          <text x="45" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#86198f">Bước 4</text>
          <text x="45" y="38" text-anchor="middle" font-size="8.5" fill="#334155">Dũa các cạnh</text>
          <text x="45" y="50" text-anchor="middle" font-size="8.5" fill="#334155">&amp; khoan lỗ treo</text>
        </g>
        <path d="M 423 40 L 433 40" stroke="#94a3b8" stroke-width="2"/>
        <g transform="translate(435, 10)">
          <rect width="95" height="60" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.2"/>
          <text x="47" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a">Bước 5</text>
          <text x="47" y="38" text-anchor="middle" font-size="8.5" fill="#334155">Đánh bóng &amp;</text>
          <text x="47" y="50" text-anchor="middle" font-size="8.5" fill="#334155">kiểm tra kích thước</text>
        </g>
      </svg>
    </div>
  `,

  // ==================== CHƯƠNG III: AN TOÀN ĐIỆN ====================
  // Bài 11: Tai nạn điện
  bai11_dienApBuoc: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-red-600 dark:text-red-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-triangle-exclamation"></i> Hình 11.1: Hiện tượng Điện Áp Bước khi dây dẫn cao thế rơi chạm mặt đất
      </div>
      <svg viewBox="0 0 540 130" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="85" x2="520" y2="85" stroke="#78716c" stroke-width="3"/>
        <path d="M 100 15 L 120 85" stroke="#dc2626" stroke-width="2.5"/>
        <polygon points="120,85 128,77 125,87 135,83 120,95" fill="#f59e0b"/>
        <text x="120" y="105" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">Điểm chạm đất (U max)</text>
        
        <path d="M 60 85 A 60 60 0 0 1 180 85" fill="none" stroke="#f87171" stroke-width="1.5" stroke-dasharray="3,3"/>
        <path d="M 30 85 A 90 90 0 0 1 210 85" fill="none" stroke="#fca5a5" stroke-width="1.5" stroke-dasharray="3,3"/>

        <g transform="translate(320, 25)">
          <line x1="30" y1="40" x2="20" y2="60" stroke="#1e293b" stroke-width="2"/>
          <line x1="30" y1="40" x2="45" y2="60" stroke="#1e293b" stroke-width="2"/>
          <circle cx="30" cy="18" r="8" fill="#1e293b"/>
          <line x1="30" y1="26" x2="30" y2="40" stroke="#1e293b" stroke-width="3"/>
          <path d="M 20 62 L 45 62" stroke="#dc2626" stroke-width="2"/>
          <text x="32" y="74" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">U bước = U1 - U2</text>
        </g>
        <text x="352" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">KHOẢNG CÁCH NGUY HIỂM &lt; 10 MÉT</text>
        <text x="352" y="112" text-anchor="middle" font-size="8.5" fill="#475569">Thoát hiểm: Chụm 2 chân nhảy lò cò hoặc lướt nhẹ ra xa</text>
      </svg>
    </div>
  `,

  // Bài 12: Biện pháp an toàn điện
  bai12_noiDat: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-shield-halved"></i> Hình 12.1: Sơ đồ nối đất bảo vệ triệt tiêu dòng rò qua người
      </div>
      <svg viewBox="0 0 540 115" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="15" width="120" height="75" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
        <text x="110" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">Vỏ kim loại</text>
        <text x="110" y="65" text-anchor="middle" font-size="8.5" fill="#dc2626">Bị rò điện (dây pha)</text>

        <path d="M 170 52 L 250 52 L 250 90" stroke="#16a34a" stroke-width="3"/>
        <line x1="235" y1="90" x2="265" y2="90" stroke="#16a34a" stroke-width="3"/>
        <line x1="240" y1="95" x2="260" y2="95" stroke="#16a34a" stroke-width="2.5"/>
        <line x1="245" y1="100" x2="255" y2="100" stroke="#16a34a" stroke-width="2"/>
        <text x="250" y="44" text-anchor="middle" font-size="9" font-weight="bold" fill="#16a34a">Dây nối đất (R &le; 4 &Omega;)</text>

        <g transform="translate(360, 15)">
          <circle cx="40" cy="20" r="10" fill="#334155"/>
          <line x1="40" y1="30" x2="40" y2="60" stroke="#334155" stroke-width="3"/>
          <line x1="40" y1="40" x2="0" y2="40" stroke="#334155" stroke-width="2"/>
          <line x1="40" y1="60" x2="25" y2="90" stroke="#334155" stroke-width="2"/>
          <line x1="40" y1="60" x2="55" y2="90" stroke="#334155" stroke-width="2"/>
          <text x="75" y="45" font-size="9" fill="#475569">R người &asymp; 1000 &Omega;</text>
          <text x="75" y="60" font-size="9" font-weight="bold" fill="#16a34a">Dòng điện đi xuống đất,</text>
          <text x="75" y="72" font-size="9" font-weight="bold" fill="#16a34a">người không bị giật!</text>
        </g>
      </svg>
    </div>
  `,

  // Bài 13: Sơ cứu tai nạn điện
  bai13_quyTrinhCPR: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-red-600 dark:text-red-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-heart-pulse"></i> Hình 13.1: Quy trình khẩn cấp sơ cứu và hồi sức tim phổi (CPR)
      </div>
      <svg viewBox="0 0 540 95" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 10)">
          <rect width="155" height="75" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#991b1b">1. TÁCH NGUỒN</text>
          <text x="77" y="42" text-anchor="middle" font-size="8.5" fill="#475569">Cắt cầu dao hoặc</text>
          <text x="77" y="55" text-anchor="middle" font-size="8.5" fill="#475569">dùng gậy gỗ khô gạt dây</text>
          <text x="77" y="68" text-anchor="middle" font-size="8" font-weight="bold" fill="#b91c1c">Tuyệt đối không sờ tay!</text>
        </g>
        <path d="M 175 48 L 190 48" stroke="#94a3b8" stroke-width="2"/>
        <g transform="translate(195, 10)">
          <rect width="155" height="75" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="77" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#92400e">2. GỌI CẤP CỨU</text>
          <text x="77" y="42" text-anchor="middle" font-size="8.5" fill="#475569">Gọi ngay 115 / người lớn</text>
          <text x="77" y="55" text-anchor="middle" font-size="8.5" fill="#475569">Đặt nơi thoáng khí</text>
          <text x="77" y="68" text-anchor="middle" font-size="8" font-weight="bold" fill="#b45309">Kiểm tra nhịp thở</text>
        </g>
        <path d="M 355 48 L 370 48" stroke="#94a3b8" stroke-width="2"/>
        <g transform="translate(375, 10)">
          <rect width="150" height="75" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="75" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">3. HỒI SỨC CPR</text>
          <text x="75" y="42" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#2563eb">30 lần ép tim lồng ngực</text>
          <text x="75" y="55" text-anchor="middle" font-size="8.5" fill="#475569">kết hợp 2 lần thổi ngạt</text>
          <text x="75" y="68" text-anchor="middle" font-size="8" font-mono font-bold fill="#1e40af">Tỉ lệ 30 : 2 liên tục</text>
        </g>
      </svg>
    </div>
  `,

  // ==================== CHƯƠNG IV: KĨ THUẬT ĐIỆN ====================
  // Bài 14: Cấu trúc mạch điện
  bai14_cauTrucMach: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-bolt"></i> Hình 14.1: Sơ đồ 3 khối chức năng cơ bản của mạch điện
      </div>
      <svg viewBox="0 0 540 95" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 12)">
          <rect width="135" height="68" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
          <text x="67" y="30" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">1. NGUỒN ĐIỆN</text>
          <text x="67" y="48" text-anchor="middle" font-size="8" fill="#475569">Pin, ắc quy, máy phát,</text>
          <text x="67" y="60" text-anchor="middle" font-size="8" fill="#475569">lưới điện xoay chiều</text>
        </g>
        <path d="M 160 46 L 195 46" stroke="#3b82f6" stroke-width="2.5"/>
        <g transform="translate(200, 12)">
          <rect width="140" height="68" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
          <text x="70" y="26" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">2. TRUYỀN DẪN,</text>
          <text x="70" y="40" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#047857">ĐÓNG CẮT &amp; BẢO VỆ</text>
          <text x="70" y="56" text-anchor="middle" font-size="8" fill="#475569">Dây dẫn, công tắc, cầu chì</text>
        </g>
        <path d="M 345 46 L 380 46" stroke="#10b981" stroke-width="2.5"/>
        <g transform="translate(385, 12)">
          <rect width="135" height="68" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
          <text x="67" y="30" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b45309">3. TẢI TIÊU THỤ</text>
          <text x="67" y="48" text-anchor="middle" font-size="8" fill="#475569">Đèn (quang năng),</text>
          <text x="67" y="60" text-anchor="middle" font-size="8" fill="#475569">động cơ, quạt (cơ năng)</text>
        </g>
      </svg>
    </div>
  `,

  // Bài 15: Cảm biến
  bai15_baLoaiSensor: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-amber-600 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-microchip"></i> Hình 15.1: 3 Loại mô đun cảm biến thông dụng trong đời sống
      </div>
      <svg viewBox="0 0 540 115" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 10)">
          <rect width="155" height="95" rx="8" fill="#fff" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="77" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">1. CẢM BIẾN ÁNH SÁNG</text>
          <circle cx="77" cy="46" r="12" fill="#fef3c7" stroke="#f59e0b"/>
          <path d="M 68 42 L 86 50 M 68 50 L 86 42" stroke="#d97706" stroke-width="2"/>
          <text x="77" y="74" text-anchor="middle" font-size="8" fill="#475569">Quang trở (LDR)</text>
          <text x="77" y="86" text-anchor="middle" font-size="7.5" fill="#64748b">Sáng: R giảm &bull; Tối: R tăng</text>
        </g>
        <g transform="translate(190, 10)">
          <rect width="155" height="95" rx="8" fill="#fff" stroke="#ef4444" stroke-width="1.5"/>
          <text x="77" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">2. CẢM BIẾN NHIỆT ĐỘ</text>
          <rect x="65" y="38" width="24" height="18" fill="#fee2e2" stroke="#dc2626" rx="3"/>
          <text x="77" y="50" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#dc2626">NTC</text>
          <text x="77" y="74" text-anchor="middle" font-size="8" fill="#475569">Nhiệt điện trở âm</text>
          <text x="77" y="86" text-anchor="middle" font-size="7.5" fill="#64748b">Nhiệt tăng &rarr; Điện trở giảm</text>
        </g>
        <g transform="translate(365, 10)">
          <rect width="160" height="95" rx="8" fill="#fff" stroke="#0ea5e9" stroke-width="1.5"/>
          <text x="80" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">3. CẢM BIẾN ĐỘ ẨM</text>
          <line x1="72" y1="35" x2="72" y2="58" stroke="#0284c7" stroke-width="3"/>
          <line x1="88" y1="35" x2="88" y2="58" stroke="#0284c7" stroke-width="3"/>
          <text x="80" y="74" text-anchor="middle" font-size="8" fill="#475569">Điện cực đo độ ẩm đất</text>
          <text x="80" y="86" text-anchor="middle" font-size="7.5" fill="#64748b">Đất khô: Không dẫn điện</text>
        </g>
      </svg>
    </div>
  `,

  // Bài 16: Lắp ráp mạch điều khiển
  bai16_soDoRelay: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-toggle-on"></i> Hình 16.1: Sơ đồ chân và nguyên lí đóng ngắt của Rơ Le (Relay 5 chân)
      </div>
      <svg viewBox="0 0 540 120" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="15" width="200" height="90" rx="8" fill="#fff" stroke="#0284c7" stroke-width="1.8"/>
        <text x="150" y="32" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0369a1">RƠ LE ĐIỀU KHIỂN (RELAY)</text>
        <path d="M 70 52 C 80 42, 90 42, 95 52 C 100 42, 110 42, 115 52" fill="none" stroke="#ea580c" stroke-width="2.5"/>
        <text x="95" y="75" text-anchor="middle" font-size="8.5" fill="#c2410c">Cuộn hút (Coil)</text>
        <circle cx="170" cy="52" r="4" fill="#0284c7"/>
        <text x="170" y="68" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0284c7">COM</text>
        <circle cx="210" cy="42" r="3" fill="#64748b"/>
        <text x="225" y="45" font-size="8" fill="#64748b">NC</text>
        <circle cx="210" cy="62" r="3" fill="#16a34a"/>
        <text x="225" y="65" font-size="8" font-weight="bold" fill="#16a34a">NO</text>
        <line x1="170" y1="52" x2="208" y2="43" stroke="#0284c7" stroke-width="2"/>

        <g transform="translate(280, 18)">
          <rect width="230" height="82" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="15" y="24" font-size="9.5" font-weight="bold" fill="#1e293b">• COM (Common): Chân chung</text>
          <text x="15" y="42" font-size="9" fill="#475569">• <strong>NO:</strong> Thường mở (kích điện &rarr; hút đóng)</text>
          <text x="15" y="60" font-size="9" fill="#475569">• <strong>NC:</strong> Thường đóng (kích điện &rarr; nhả ra)</text>
        </g>
      </svg>
    </div>
  `,

  // Bài 17: Ngành nghề kĩ thuật điện
  bai17_ngheDien: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-blue-600 dark:text-blue-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-users-gear"></i> Hình 17.1: Các hướng nghề nghiệp chủ yếu ngành Kĩ thuật điện
      </div>
      <svg viewBox="0 0 540 95" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 10)">
          <rect width="115" height="75" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">KĨ SƯ ĐIỆN</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Thiết kế hệ thống,</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">mạng lưới truyền tải</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">Trình độ Đại học</text>
        </g>
        <g transform="translate(145, 10)">
          <rect width="115" height="75" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">ĐIỆN DÂN DỤNG</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Lắp đặt, sửa chữa</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">mạch điện gia đình</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">Thợ kĩ thuật</text>
        </g>
        <g transform="translate(275, 10)">
          <rect width="115" height="75" rx="6" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">ĐIỆN CÔNG NGHIỆP</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Vận hành tủ điện,</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">động cơ nhà máy</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">Kĩ thuật viên</text>
        </g>
        <g transform="translate(405, 10)">
          <rect width="115" height="75" rx="6" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
          <text x="57" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#86198f">NĂNG LƯỢNG MỚI</text>
          <text x="57" y="44" text-anchor="middle" font-size="8" fill="#475569">Điện mặt trời,</text>
          <text x="57" y="56" text-anchor="middle" font-size="8" fill="#475569">điện gió, trạm sạc</text>
          <text x="57" y="68" text-anchor="middle" font-size="8" fill="#64748b">Chuyên viên năng lượng</text>
        </g>
      </svg>
    </div>
  `,

  // ==================== CHƯƠNG V: THIẾT KẾ KĨ THUẬT ====================
  // Bài 18: Giới thiệu thiết kế kĩ thuật
  bai18_vaiTro: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-teal-600 dark:text-teal-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-lightbulb"></i> Hình 18.1: Vai trò của Thiết kế kĩ thuật kết nối sáng tạo với sản xuất đời sống
      </div>
      <svg viewBox="0 0 540 95" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 12)">
          <rect width="135" height="68" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
          <text x="67" y="30" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">Ý TƯỞNG SÁNG TẠO</text>
          <text x="67" y="48" text-anchor="middle" font-size="8.5" fill="#475569">Nhu cầu con người,</text>
          <text x="67" y="60" text-anchor="middle" font-size="8.5" fill="#475569">phát minh khoa học</text>
        </g>
        <path d="M 160 46 L 195 46" stroke="#3b82f6" stroke-width="2.5"/>
        <g transform="translate(200, 12)">
          <rect width="140" height="68" rx="8" fill="#fdf4ff" stroke="#d946ef" stroke-width="2"/>
          <text x="70" y="28" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#86198f">THIẾT KẾ KĨ THUẬT</text>
          <text x="70" y="46" text-anchor="middle" font-size="8.5" fill="#475569">Tính toán kết cấu,</text>
          <text x="70" y="58" text-anchor="middle" font-size="8.5" fill="#475569">bản vẽ &amp; tiêu chuẩn</text>
        </g>
        <path d="M 345 46 L 380 46" stroke="#d946ef" stroke-width="2.5"/>
        <g transform="translate(385, 12)">
          <rect width="135" height="68" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
          <text x="67" y="30" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">SẢN PHẨM HỮU ÍCH</text>
          <text x="67" y="48" text-anchor="middle" font-size="8.5" fill="#475569">Máy móc, công trình,</text>
          <text x="67" y="60" text-anchor="middle" font-size="8.5" fill="#475569">nâng cao đời sống</text>
        </g>
      </svg>
    </div>
  `,

  // Bài 19: Quy trình thiết kế 5 bước
  bai19_vongLap: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-purple-600 dark:text-purple-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-arrows-spin"></i> Hình 19.1: Vòng lặp phản hồi 5 bước trong Quy trình thiết kế kĩ thuật
      </div>
      <svg viewBox="0 0 540 125" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 18)">
          <rect width="90" height="48" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
          <text x="45" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">1. XÁC ĐỊNH</text>
          <text x="45" y="32" text-anchor="middle" font-size="8" fill="#334155">Vấn đề &amp; Yêu cầu</text>
        </g>
        <path d="M 103 42 L 115 42" stroke="#3b82f6" stroke-width="2"/>
        <g transform="translate(117, 18)">
          <rect width="90" height="48" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
          <text x="45" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">2. TÌM GIẢI PHÁP</text>
          <text x="45" y="32" text-anchor="middle" font-size="8" fill="#334155">Chọn phương án</text>
        </g>
        <path d="M 210 42 L 222 42" stroke="#10b981" stroke-width="2"/>
        <g transform="translate(224, 18)">
          <rect width="90" height="48" rx="6" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="45" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">3. CHẾ TẠO</text>
          <text x="45" y="32" text-anchor="middle" font-size="8" fill="#334155">Mẫu thử nghiệm</text>
        </g>
        <path d="M 317 42 L 329 42" stroke="#f59e0b" stroke-width="2"/>
        <g transform="translate(331, 18)">
          <rect width="90" height="48" rx="6" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
          <text x="45" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#86198f">4. THỬ NGHIỆM</text>
          <text x="45" y="32" text-anchor="middle" font-size="8" fill="#334155">&amp; Đánh giá</text>
        </g>
        <path d="M 424 42 L 436 42" stroke="#d946ef" stroke-width="2"/>
        <g transform="translate(438, 18)">
          <rect width="92" height="48" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
          <text x="46" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e293b">5. LẬP HỒ SƠ</text>
          <text x="46" y="32" text-anchor="middle" font-size="8" fill="#334155">Bản vẽ kĩ thuật</text>
        </g>

        <path d="M 376 68 L 376 95 L 162 95 L 162 68" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2"/>
        <text x="270" y="90" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#ef4444">&larr; Nếu KHÔNG ĐẠT tiêu chí: Điều chỉnh lại giải pháp / mô hình &larr;</text>
      </svg>
    </div>
  `,

  // Bài 20: Hệ thống tưới cây tự động
  bai20_soDoTuoi: `
    <div class="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
      <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
        <i class="fa-solid fa-faucet-drip"></i> Hình 20.1: Sơ đồ kết nối phần cứng Hệ thống tưới cây tự động mini
      </div>
      <svg viewBox="0 0 540 135" class="w-full max-w-lg mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 22)">
          <polygon points="10,40 20,80 60,80 70,40" fill="#78350f"/>
          <ellipse cx="40" cy="40" rx="30" ry="8" fill="#451a03"/>
          <path d="M 40 40 L 40 15 C 30 15, 25 25, 25 25" fill="none" stroke="#16a34a" stroke-width="2.5"/>
          <line x1="36" y1="35" x2="36" y2="65" stroke="#0284c7" stroke-width="3"/>
          <line x1="44" y1="35" x2="44" y2="65" stroke="#0284c7" stroke-width="3"/>
          <text x="40" y="95" text-anchor="middle" font-size="8" font-weight="bold" fill="#78350f">Chậu cây</text>
        </g>

        <path d="M 60 48 L 140 48" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,2"/>
        <text x="100" y="42" text-anchor="middle" font-size="8" fill="#0284c7">Tín hiệu độ ẩm</text>

        <g transform="translate(145, 18)">
          <rect width="130" height="72" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
          <text x="65" y="24" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1d4ed8">MÔ ĐUN ĐIỀU KHIỂN</text>
          <text x="65" y="40" text-anchor="middle" font-size="8" fill="#475569">Mạch so sánh LM393</text>
          <text x="65" y="52" text-anchor="middle" font-size="8" fill="#475569">+ Rơ le đóng ngắt 5V/12V</text>
          <text x="65" y="66" text-anchor="middle" font-size="8" font-weight="bold" fill="#2563eb">Đất khô &rarr; Bật Relay</text>
        </g>

        <path d="M 275 48 L 340 48" stroke="#dc2626" stroke-width="2"/>

        <g transform="translate(345, 22)">
          <rect width="55" height="48" rx="6" fill="#1e293b" stroke="#64748b"/>
          <circle cx="27" cy="24" r="10" fill="#3b82f6"/>
          <text x="27" y="28" text-anchor="middle" font-size="8" fill="#fff">Bơm</text>
          <text x="27" y="62" text-anchor="middle" font-size="7.5" fill="#64748b">12VDC</text>
        </g>

        <path d="M 400 48 L 460 48 L 460 68" fill="none" stroke="#0284c7" stroke-width="3"/>
        <g transform="translate(445, 72)">
          <circle cx="15" cy="15" r="6" fill="#0ea5e9"/>
          <line x1="15" y1="21" x2="15" y2="30" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="2,2"/>
          <text x="15" y="42" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0284c7">Béc tưới</text>
        </g>
      </svg>
      <div class="text-[10px] text-gray-500 text-center mt-1">Chu trình khép kín: Khi độ ẩm đất giảm xuống dưới ngưỡng cài đặt &rarr; mô đun kích rơ le bật bơm nước tự động</div>
    </div>
  `
};

module.exports = { inlineSvgs };
