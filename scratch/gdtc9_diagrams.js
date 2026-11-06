// gdtc9_diagrams.js - 8 sơ đồ trực quan hóa vector SVG môn Giáo dục thể chất 9

const gdtc9Diagrams = {
  // SƠ ĐỒ 0: YẾU TỐ TỰ NHIÊN & PHÂN BỔ DINH DƯỠNG
  soDoDinhDuongYeuTo: `
    <svg viewBox="0 0 800 360" class="w-full h-auto max-h-[380px] select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-air" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#34d399"/>
          <stop offset="100%" stop-color="#059669"/>
        </linearGradient>
        <linearGradient id="grad-water" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
        <linearGradient id="grad-sun" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fbbf24"/>
          <stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
        <linearGradient id="grad-land" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#a78bfa"/>
          <stop offset="100%" stop-color="#7c3aed"/>
        </linearGradient>
      </defs>

      <!-- Background card -->
      <rect x="10" y="10" width="780" height="340" rx="18" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>

      <!-- Title -->
      <text x="400" y="38" text-anchor="middle" font-size="14" font-weight="800" fill="#0f172a" class="dark:fill-white">
        HỆ SINH THÁI RÈN LUYỆN SỨC KHỎE: 4 YẾU TỐ TỰ NHIÊN &amp; DINH DƯỠNG MỤC TIÊU
      </text>

      <!-- LEFT SIDE: 4 Natural Elements -->
      <g transform="translate(30, 60)">
        <!-- Box 1: Không khí -->
        <rect x="0" y="0" width="165" height="120" rx="14" fill="#ecfdf5" class="dark:fill-emerald-950/40" stroke="#10b981" stroke-width="1.5"/>
        <circle cx="28" cy="28" r="14" fill="url(#grad-air)"/>
        <text x="28" y="32" text-anchor="middle" font-size="12" fill="#ffffff" font-weight="bold">💨</text>
        <text x="50" y="32" font-size="12" font-weight="700" fill="#065f46" class="dark:fill-emerald-300">1. Không khí</text>
        <text x="12" y="60" font-size="10.5" fill="#047857" class="dark:fill-emerald-400">• Tắm không khí 15–30p/ngày</text>
        <text x="12" y="78" font-size="10.5" fill="#047857" class="dark:fill-emerald-400">• Buổi sáng thoáng đãng</text>
        <text x="12" y="96" font-size="10.5" fill="#047857" class="dark:fill-emerald-400">• Hít sâu, thở đều, thư giãn</text>

        <!-- Box 2: Nước lạnh -->
        <rect x="180" y="0" width="165" height="120" rx="14" fill="#f0f9ff" class="dark:fill-sky-950/40" stroke="#0ea5e9" stroke-width="1.5"/>
        <circle cx="208" cy="28" r="14" fill="url(#grad-water)"/>
        <text x="208" y="32" text-anchor="middle" font-size="12" fill="#ffffff" font-weight="bold">❄️</text>
        <text x="230" y="32" font-size="12" font-weight="700" fill="#0369a1" class="dark:fill-sky-300">2. Nước lạnh</text>
        <text x="192" y="60" font-size="10.5" fill="#0284c7" class="dark:fill-sky-400">• Bắt đầu từ 1–2 phút</text>
        <text x="192" y="78" font-size="10.5" fill="#0284c7" class="dark:fill-sky-400">• Giảm nhiệt độ từ từ</text>
        <text x="192" y="96" font-size="10.5" fill="#0284c7" class="dark:fill-sky-400">• Tuyệt đối không tắm khi vừa mệt</text>

        <!-- Box 3: Ánh nắng -->
        <rect x="0" y="135" width="165" height="125" rx="14" fill="#fffbeb" class="dark:fill-amber-950/40" stroke="#f59e0b" stroke-width="1.5"/>
        <circle cx="28" cy="163" r="14" fill="url(#grad-sun)"/>
        <text x="28" y="167" text-anchor="middle" font-size="12" fill="#ffffff" font-weight="bold">☀️</text>
        <text x="50" y="167" font-size="12" font-weight="700" fill="#92400e" class="dark:fill-amber-300">3. Ánh nắng</text>
        <text x="12" y="195" font-size="10.5" fill="#b45309" class="dark:fill-amber-400">• Tổng hợp Vitamin D &amp; Ca</text>
        <text x="12" y="213" font-size="10.5" fill="#b45309" class="dark:fill-amber-400">• Hè: 6:30–7:30 • Đông: 7:00–9:00</text>
        <text x="12" y="231" font-size="10.5" fill="#b45309" class="dark:fill-amber-400">• Che mặt, đội mũ, kính râm</text>

        <!-- Box 4: Địa hình & Nước -->
        <rect x="180" y="135" width="165" height="125" rx="14" fill="#faf5ff" class="dark:fill-purple-950/40" stroke="#a855f7" stroke-width="1.5"/>
        <circle cx="208" cy="163" r="14" fill="url(#grad-land)"/>
        <text x="208" y="167" text-anchor="middle" font-size="12" fill="#ffffff" font-weight="bold">🏞️</text>
        <text x="230" y="167" font-size="12" font-weight="700" fill="#6b21a8" class="dark:fill-purple-300">4. Địa hình tập</text>
        <text x="192" y="195" font-size="10.5" fill="#7e22ce" class="dark:fill-purple-400">• Lên dốc: Rèn sức mạnh</text>
        <text x="192" y="213" font-size="10.5" fill="#7e22ce" class="dark:fill-purple-400">• Nước nông: Sức cản &amp; phối hợp</text>
        <text x="192" y="231" font-size="10.5" fill="#7e22ce" class="dark:fill-purple-400">• Chướng ngại: Phản xạ linh hoạt</text>
      </g>

      <!-- RIGHT SIDE: Dinh dưỡng theo 4 mục tiêu vận động -->
      <g transform="translate(400, 60)">
        <rect x="0" y="0" width="365" height="260" rx="16" fill="#ffffff" class="dark:fill-slate-800" stroke="#e2e8f0" class="dark:stroke-slate-700" stroke-width="1.5"/>
        
        <text x="182" y="28" text-anchor="middle" font-size="12.5" font-weight="800" fill="#1e293b" class="dark:fill-slate-100">
          🍽️ ĐỊNH HƯỚNG DINH DƯỠNG THEO 4 MỤC TIÊU VẬN ĐỘNG
        </text>

        <!-- Target 1: Tốc độ cự li ngắn -->
        <g transform="translate(18, 45)">
          <rect x="0" y="0" width="330" height="42" rx="8" fill="#fef2f2" class="dark:fill-rose-950/40" stroke="#fecaca" class="dark:stroke-rose-900"/>
          <text x="12" y="18" font-size="11" font-weight="bold" fill="#991b1b" class="dark:fill-rose-300">Tốc độ (100 m):</text>
          <text x="115" y="18" font-size="10.5" fill="#b91c1c" class="dark:fill-rose-400">Carbohydrate ~58% tổng calo (ATP nhanh)</text>
          <text x="12" y="33" font-size="10" fill="#7f1d1d" class="dark:fill-rose-500">Ưu tiên đồ dễ tiêu, giàu protein nạc, vitamin C &amp; phốt pho</text>
        </g>

        <!-- Target 2: Sức bền -->
        <g transform="translate(18, 97)">
          <rect x="0" y="0" width="330" height="42" rx="8" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#bfdbfe" class="dark:stroke-blue-900"/>
          <text x="12" y="18" font-size="11" font-weight="bold" fill="#1e40af" class="dark:fill-blue-300">Sức bền (Chạy dài):</text>
          <text x="125" y="18" font-size="10.5" fill="#1d4ed8" class="dark:fill-blue-400">Lipid lành mạnh ~30% tổng calo</text>
          <text x="12" y="33" font-size="10" fill="#1e3a8a" class="dark:fill-blue-500">Năng lượng bền bỉ, bổ sung vitamin nhóm B, C; tránh mỡ xấu</text>
        </g>

        <!-- Target 3: Sức mạnh -->
        <g transform="translate(18, 149)">
          <rect x="0" y="0" width="330" height="42" rx="8" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#bbf7d0" class="dark:stroke-emerald-900"/>
          <text x="12" y="18" font-size="11" font-weight="bold" fill="#166534" class="dark:fill-emerald-300">Sức mạnh (Bật nhảy):</text>
          <text x="135" y="18" font-size="10.5" fill="#15803d" class="dark:fill-emerald-400">Protein > 2g/kg (>18% tổng calo)</text>
          <text x="12" y="33" font-size="10" fill="#14532d" class="dark:fill-emerald-500">Tái tạo sợi cơ; bổ sung khoáng chất: Kali, Natri, Magie, Sắt</text>
        </g>

        <!-- Target 4: Môn bóng phối hợp -->
        <g transform="translate(18, 201)">
          <rect x="0" y="0" width="330" height="42" rx="8" fill="#fffbeb" class="dark:fill-amber-950/40" stroke="#fde68a" class="dark:stroke-amber-900"/>
          <text x="12" y="18" font-size="11" font-weight="bold" fill="#92400e" class="dark:fill-amber-300">Môn bóng (Đá, Rổ, Lông):</text>
          <text x="145" y="18" font-size="10.5" fill="#b45309" class="dark:fill-amber-400">Phối hợp Nhanh – Mạnh – Bền</text>
          <text x="12" y="33" font-size="10" fill="#78350f" class="dark:fill-amber-500">Khẩu phần đa dạng, cân đối điện giải; uống đủ nước từng ngụm</text>
        </g>
      </g>
    </svg>
  `,

  // SƠ ĐỒ 1: CHẠY CỰ LI NGẮN 100M
  soDoChayNgan100m: `
    <svg viewBox="0 0 800 320" class="w-full h-auto max-h-[350px] select-none" xmlns="http://www.w3.org/2000/svg">
      <!-- Background -->
      <rect x="10" y="10" width="780" height="300" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>

      <text x="400" y="36" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        QUY TRÌNH KĨ THUẬT CHẠY CỰ LI NGẮN 100M (XUẤT PHÁT THẤP ĐẾN VỀ ĐÍCH)
      </text>

      <!-- Running track lane -->
      <rect x="35" y="195" width="730" height="85" rx="10" fill="#fee2e2" class="dark:fill-red-950/30" stroke="#ef4444" stroke-dasharray="6 4" stroke-width="1.5"/>
      <line x1="50" y1="195" x2="50" y2="280" stroke="#b91c1c" stroke-width="4"/>
      <text x="50" y="190" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">VẠCH XP</text>

      <line x1="740" y1="195" x2="740" y2="280" stroke="#b91c1c" stroke-width="4"/>
      <text x="740" y="190" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">ĐÍCH</text>

      <!-- 4 Stages Cards -->
      <!-- Stage 1: Xuất phát thấp -->
      <g transform="translate(40, 55)">
        <rect x="0" y="0" width="165" height="115" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#f87171" stroke-width="1.5"/>
        <rect x="0" y="0" width="165" height="26" rx="12" fill="#ef4444"/>
        <text x="82" y="17" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">1. XUẤT PHÁT THẤP</text>
        <text x="10" y="46" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">• "Vào chỗ": 2 tay sau vạch</text>
        <text x="10" y="64" font-size="10" fill="#475569" class="dark:fill-slate-300">• Chân trước thuận, gối sau chạm đất</text>
        <text x="10" y="82" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">• "Sẵn sàng": Nâng hông cao</text>
        <text x="10" y="100" font-size="10" fill="#475569" class="dark:fill-slate-300">• Trọng tâm đổ trước, mắt nhìn 1-2m</text>
      </g>

      <!-- Arrow 1 -> 2 -->
      <path d="M 215 112 L 235 112" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)"/>

      <!-- Stage 2: Chạy lao -->
      <g transform="translate(225, 55)">
        <rect x="0" y="0" width="165" height="115" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#fb923c" stroke-width="1.5"/>
        <rect x="0" y="0" width="165" height="26" rx="12" fill="#f97316"/>
        <text x="82" y="17" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">2. CHẠY LAO (15–25M)</text>
        <text x="10" y="46" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">• Rời bàn đạp: Đạp sau cực mạnh</text>
        <text x="10" y="64" font-size="10" fill="#475569" class="dark:fill-slate-300">• Thân người ban đầu ngả trước</text>
        <text x="10" y="82" font-size="10" fill="#475569" class="dark:fill-slate-300">• Bước đầu ngắn, tần số cao</text>
        <text x="10" y="100" font-size="10" fill="#475569" class="dark:fill-slate-300">• Nâng thân từ từ, không dựng đột ngột</text>
      </g>

      <!-- Arrow 2 -> 3 -->
      <path d="M 400 112 L 420 112" stroke="#f97316" stroke-width="2"/>

      <!-- Stage 3: Chạy giữa quãng -->
      <g transform="translate(410, 55)">
        <rect x="0" y="0" width="165" height="115" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#3b82f6" stroke-width="1.5"/>
        <rect x="0" y="0" width="165" height="26" rx="12" fill="#2563eb"/>
        <text x="82" y="17" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">3. CHẠY GIỮA QUÃNG</text>
        <text x="10" y="46" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">• Duy trì tốc độ tối đa</text>
        <text x="10" y="64" font-size="10" fill="#475569" class="dark:fill-slate-300">• Đạp sau nhanh, mạnh, phối hợp</text>
        <text x="10" y="82" font-size="10" fill="#475569" class="dark:fill-slate-300">• Thân ngả trước ~10–15°</text>
        <text x="10" y="100" font-size="10" fill="#475569" class="dark:fill-slate-300">• Đánh tay so le tự nhiên, thả lỏng vai</text>
      </g>

      <!-- Arrow 3 -> 4 -->
      <path d="M 585 112 L 605 112" stroke="#2563eb" stroke-width="2"/>

      <!-- Stage 4: Về đích -->
      <g transform="translate(595, 55)">
        <rect x="0" y="0" width="165" height="115" rx="12" fill="#ffffff" class="dark:fill-slate-800" stroke="#10b981" stroke-width="1.5"/>
        <rect x="0" y="0" width="165" height="26" rx="12" fill="#059669"/>
        <text x="82" y="17" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">4. VỀ ĐÍCH AN TOÀN</text>
        <text x="10" y="46" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">• Không giảm tốc trước vạch</text>
        <text x="10" y="64" font-size="10" fill="#475569" class="dark:fill-slate-300">• Đánh ngực hoặc vai chạm dây</text>
        <text x="10" y="82" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">• Tuyệt đối không nhảy vồ đích</text>
        <text x="10" y="100" font-size="10" fill="#475569" class="dark:fill-slate-300">• Qua đích giảm tốc từ từ, không dừng gấp</text>
      </g>

      <!-- Distance indicators on lane -->
      <text x="140" y="240" font-size="11" font-weight="bold" fill="#b91c1c">0–25m: Chạy lao</text>
      <text x="440" y="240" font-size="11" font-weight="bold" fill="#1e40af">25–95m: Tốc độ đỉnh cao giữa quãng</text>
      <text x="690" y="240" font-size="11" font-weight="bold" fill="#047857">100m: Chạm đích</text>
    </svg>
  `,

  // SƠ ĐỒ 2: NHẢY CAO KIỂU NẰM NGHIÊNG
  soDoNhayCaoNamNghieng: `
    <svg viewBox="0 0 800 340" class="w-full h-auto max-h-[360px] select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="780" height="320" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>

      <text x="400" y="36" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        ĐỘNG LỰC HỌC 4 PHA NHẢY CAO KIỂU NẰM NGHIÊNG (GÓC ĐÀ 30–40°)
      </text>

      <!-- 4 Phases Grid -->
      <!-- Pha 1: Chạy đà -->
      <g transform="translate(30, 60)">
        <rect x="0" y="0" width="170" height="245" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#6366f1" stroke-width="1.5"/>
        <rect x="0" y="0" width="170" height="32" rx="14" fill="#4f46e5"/>
        <text x="85" y="21" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">1. CHẠY ĐÀ CHẾCH</text>
        <circle cx="85" cy="72" r="26" fill="#e0e7ff" class="dark:fill-indigo-950/60"/>
        <text x="85" y="78" text-anchor="middle" font-size="18">🏃</text>
        <text x="85" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#4338ca" class="dark:fill-indigo-300">Góc đà: 30° – 40°</text>
        <text x="12" y="140" font-size="10" fill="#475569" class="dark:fill-slate-300">• Cự li 6–9 bước đà có nhịp</text>
        <text x="12" y="160" font-size="10" fill="#475569" class="dark:fill-slate-300">• Tăng tốc có kiểm soát</text>
        <text x="12" y="180" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">• Bước áp chót dài hơn</text>
        <text x="12" y="200" font-size="10" fill="#475569" class="dark:fill-slate-300">• Hạ thấp trọng tâm cơ thể</text>
        <text x="12" y="220" font-size="10" fill="#475569" class="dark:fill-slate-300">• Chuẩn bị đặt chân giậm</text>
      </g>

      <!-- Pha 2: Giậm nhảy -->
      <g transform="translate(220, 60)">
        <rect x="0" y="0" width="170" height="245" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#0ea5e9" stroke-width="1.5"/>
        <rect x="0" y="0" width="170" height="32" rx="14" fill="#0284c7"/>
        <text x="85" y="21" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">2. GIẬM NHẢY UY LỰC</text>
        <circle cx="85" cy="72" r="26" fill="#e0f2fe" class="dark:fill-sky-950/60"/>
        <text x="85" y="78" text-anchor="middle" font-size="18">🦶</text>
        <text x="85" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">Gót chuyển cả bàn chân</text>
        <text x="12" y="140" font-size="10" fill="#475569" class="dark:fill-slate-300">• Đặt chân giậm chắc, nhanh</text>
        <text x="12" y="160" font-size="10" fill="#475569" class="dark:fill-slate-300">• Cách xà khoảng 60–80 cm</text>
        <text x="12" y="180" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">• Đá mạnh chân lăng lên cao</text>
        <text x="12" y="200" font-size="10" fill="#475569" class="dark:fill-slate-300">• Hai tay đánh mạnh hỗ trợ</text>
        <text x="12" y="220" font-size="10" fill="#475569" class="dark:fill-slate-300">• Thân hơi nghiêng ra xa xà</text>
      </g>

      <!-- Pha 3: Trên không nằm nghiêng -->
      <g transform="translate(410, 60)">
        <rect x="0" y="0" width="170" height="245" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="0" y="0" width="170" height="32" rx="14" fill="#d97706"/>
        <text x="85" y="21" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">3. TRÊN KHÔNG QUA XÀ</text>
        <circle cx="85" cy="72" r="26" fill="#fef3c7" class="dark:fill-amber-950/60"/>
        <text x="85" y="78" text-anchor="middle" font-size="18">🤸</text>
        <text x="85" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">Tư thế nằm nghiêng</text>
        <text x="12" y="140" font-size="10" fill="#475569" class="dark:fill-slate-300">• Chân lăng qua xà trước</text>
        <text x="12" y="160" font-size="10" fill="#475569" class="dark:fill-slate-300">• Xoay thân song song mặt xà</text>
        <text x="12" y="180" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">• Nhanh chóng co chân giậm</text>
        <text x="12" y="200" font-size="10" fill="#475569" class="dark:fill-slate-300">• Tay và thân né chạm xà</text>
        <text x="12" y="220" font-size="10" fill="#475569" class="dark:fill-slate-300">• Giữ thân cân bằng liên tục</text>
      </g>

      <!-- Pha 4: Rơi xuống tiếp đất -->
      <g transform="translate(600, 60)">
        <rect x="0" y="0" width="170" height="245" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#10b981" stroke-width="1.5"/>
        <rect x="0" y="0" width="170" height="32" rx="14" fill="#059669"/>
        <text x="85" y="21" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">4. TIẾP ĐẤT AN TOÀN</text>
        <circle cx="85" cy="72" r="26" fill="#d1fae5" class="dark:fill-emerald-950/60"/>
        <text x="85" y="78" text-anchor="middle" font-size="18">🛬</text>
        <text x="85" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">Chân giậm tiếp đất</text>
        <text x="12" y="140" font-size="10" fill="#475569" class="dark:fill-slate-300">• Tiếp xúc đất bằng chân giậm</text>
        <text x="12" y="160" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">• Khuỵu gối để hoãn xung</text>
        <text x="12" y="180" font-size="10" fill="#475569" class="dark:fill-slate-300">• Dùng tay phụ giữ thăng bằng</text>
        <text x="12" y="200" font-size="10" fill="#475569" class="dark:fill-slate-300">• Tuyệt đối không chống tay cứng</text>
        <text x="12" y="220" font-size="10" fill="#475569" class="dark:fill-slate-300">• Tiếp đất vào giữa hố cát/đệm</text>
      </g>
    </svg>
  `,

  // SƠ ĐỒ 3: CHẠY CỰ LI TRUNG BÌNH & XỬ LÍ CỰC ĐIỂM
  soDoChayTrungBinh: `
    <svg viewBox="0 0 800 320" class="w-full h-auto max-h-[350px] select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="780" height="300" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>

      <text x="400" y="36" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        CHIẾN THUẬT PHÂN BỔ SỨC BỀN &amp; VƯỢT NGƯỠNG "CỰC ĐIỂM" CHẠY TRUNG BÌNH
      </text>

      <!-- Curve Track Graphic -->
      <g transform="translate(40, 60)">
        <rect x="0" y="0" width="340" height="230" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#0284c7" stroke-width="1.5"/>
        <text x="170" y="26" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">
          KĨ THUẬT CHẠY ĐƯỜNG CONG &amp; PHỐI HỢP THỞ
        </text>

        <!-- Curved path visualization -->
        <path d="M 40 180 C 40 80, 180 60, 300 60" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
        <path d="M 40 180 C 40 80, 180 60, 300 60" fill="none" stroke="#0284c7" stroke-width="2" stroke-dasharray="6 4"/>

        <circle cx="100" cy="115" r="14" fill="#0284c7"/>
        <text x="100" y="120" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">🏃</text>

        <text x="30" y="210" font-size="10.5" fill="#475569" class="dark:fill-slate-300">• Thân người chủ động nghiêng vào trong đường cua</text>
        <text x="30" y="225" font-size="10.5" fill="#475569" class="dark:fill-slate-300">• Tay phải đánh rộng hơn tay trái để giữ cân bằng</text>
        <text x="180" y="95" font-size="11" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">Nhịp thở đều đặn: 2 bước hít - 2 bước thở</text>
      </g>

      <!-- Dead Point & Second Wind Box -->
      <g transform="translate(410, 60)">
        <rect x="0" y="0" width="350" height="230" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="175" y="26" text-anchor="middle" font-size="12" font-weight="bold" fill="#e11d48" class="dark:fill-rose-300">
          XỬ LÍ HIỆN TƯỢNG "CỰC ĐIỂM" (DEAD POINT)
        </text>

        <!-- Step 1: Dấu hiệu -->
        <g transform="translate(20, 42)">
          <rect x="0" y="0" width="310" height="50" rx="8" fill="#fff1f2" class="dark:fill-rose-950/40" stroke="#fecdd3" class="dark:stroke-rose-900"/>
          <text x="10" y="18" font-size="11" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">1. Dấu hiệu nhận biết:</text>
          <text x="10" y="36" font-size="10" fill="#9f1239" class="dark:fill-rose-400">Tức ngực, thở dốc, chân tay nặng nề, cảm giác không thể chạy tiếp.</text>
        </g>

        <!-- Step 2: Cách vượt qua -->
        <g transform="translate(20, 102)">
          <rect x="0" y="0" width="310" height="60" rx="8" fill="#ecfdf5" class="dark:fill-emerald-950/40" stroke="#a7f3d0" class="dark:stroke-emerald-900"/>
          <text x="10" y="18" font-size="11" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">2. Phương pháp vượt qua an toàn:</text>
          <text x="10" y="34" font-size="10" fill="#065f46" class="dark:fill-emerald-400">• Giữ vững tâm lí, kiên trì, không hoảng loạn hoặc dừng gấp.</text>
          <text x="10" y="49" font-size="10" fill="#065f46" class="dark:fill-emerald-400">• Giảm nhẹ tốc độ bước, chủ động hít thật sâu và thở mạnh ra.</text>
        </g>

        <!-- Step 3: Hồi phục -->
        <g transform="translate(20, 172)">
          <rect x="0" y="0" width="310" height="45" rx="8" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#bfdbfe" class="dark:stroke-blue-900"/>
          <text x="10" y="18" font-size="11" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">3. Điểm hồi phục (Second Wind):</text>
          <text x="10" y="34" font-size="10" fill="#1e40af" class="dark:fill-blue-400">Oxy cân bằng trở lại, cảm giác dễ chịu, tiếp tục duy trì cự li về đích.</text>
        </g>
      </g>
    </svg>
  `,

  // SƠ ĐỒ 4: BÀI TẬP THỂ DỤC NHỊP ĐIỆU (8 ĐỘNG TÁC)
  soDoTheDucNhipDieu: `
    <svg viewBox="0 0 800 330" class="w-full h-auto max-h-[360px] select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="780" height="310" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>

      <text x="400" y="36" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        CHUỖI 8 ĐỘNG TÁC BÀI THỂ DỤC NHỊP ĐIỆU (THEO NHỊP 2 × 8 ĐẾM &amp; PHÁCH NHẠC)
      </text>

      <!-- Row 1: Phần 1 (Động tác 1 - 4) -->
      <g transform="translate(30, 55)">
        <text x="0" y="15" font-size="11.5" font-weight="bold" fill="#7c3aed" class="dark:fill-purple-300">PHẦN 1 (BÀI 1):</text>
        
        <!-- DT 1 -->
        <g transform="translate(0, 25)">
          <rect x="0" y="0" width="175" height="100" rx="10" fill="#faf5ff" class="dark:fill-purple-950/40" stroke="#c084fc" stroke-width="1.2"/>
          <text x="10" y="20" font-size="11" font-weight="bold" fill="#6b21a8" class="dark:fill-purple-200">1. Giậm chân tại chỗ</text>
          <text x="10" y="42" font-size="9.5" fill="#581c87" class="dark:fill-purple-300">• Bước luân phiên theo nhịp</text>
          <text x="10" y="60" font-size="9.5" fill="#581c87" class="dark:fill-purple-300">• Tay đánh trước sau tự nhiên</text>
          <text x="10" y="78" font-size="9.5" fill="#581c87" class="dark:fill-purple-300">• Thân thẳng, vai thả lỏng</text>
        </g>

        <!-- DT 2 -->
        <g transform="translate(190, 25)">
          <rect x="0" y="0" width="175" height="100" rx="10" fill="#faf5ff" class="dark:fill-purple-950/40" stroke="#c084fc" stroke-width="1.2"/>
          <text x="10" y="20" font-size="11" font-weight="bold" fill="#6b21a8" class="dark:fill-purple-200">2. Thu chân – tay cao</text>
          <text x="10" y="42" font-size="9.5" fill="#581c87" class="dark:fill-purple-300">• Bước sang bên, thu chân về</text>
          <text x="10" y="60" font-size="9.5" fill="#581c87" class="dark:fill-purple-300">• Đưa tay cao chữ V cạnh đầu</text>
          <text x="10" y="78" font-size="9.5" fill="#581c87" class="dark:fill-purple-300">• Thực hiện đổi bên nhịp nhàng</text>
        </g>

        <!-- DT 3 -->
        <g transform="translate(380, 25)">
          <rect x="0" y="0" width="175" height="100" rx="10" fill="#faf5ff" class="dark:fill-purple-950/40" stroke="#c084fc" stroke-width="1.2"/>
          <text x="10" y="20" font-size="11" font-weight="bold" fill="#6b21a8" class="dark:fill-purple-200">3. Bật tách chụm</text>
          <text x="10" y="42" font-size="9.5" fill="#581c87" class="dark:fill-purple-300">• Bật 2 chân tách rộng rồi chụm</text>
          <text x="10" y="60" font-size="9.5" fill="#581c87" class="dark:fill-purple-300">• Tay mở ngang / nâng chữ V</text>
          <text x="10" y="78" font-size="9.5" fill="#581c87" class="dark:fill-purple-300">• Tiếp đất nửa trước bàn chân</text>
        </g>

        <!-- DT 4 -->
        <g transform="translate(570, 25)">
          <rect x="0" y="0" width="170" height="100" rx="10" fill="#faf5ff" class="dark:fill-purple-950/40" stroke="#c084fc" stroke-width="1.2"/>
          <text x="10" y="20" font-size="11" font-weight="bold" fill="#6b21a8" class="dark:fill-purple-200">4. Vặn mình</text>
          <text x="10" y="42" font-size="9.5" fill="#581c87" class="dark:fill-purple-300">• Bước chéo, nâng gối xoay thân</text>
          <text x="10" y="60" font-size="9.5" fill="#581c87" class="dark:fill-purple-300">• Tay phối hợp theo hướng xoay</text>
          <text x="10" y="78" font-size="9.5" fill="#581c87" class="dark:fill-purple-300">• Chuyển động có kiểm soát</text>
        </g>
      </g>

      <!-- Row 2: Phần 2 (Động tác 5 - 8) -->
      <g transform="translate(30, 185)">
        <text x="0" y="15" font-size="11.5" font-weight="bold" fill="#059669" class="dark:fill-emerald-300">PHẦN 2 (BÀI 2):</text>

        <!-- DT 5 -->
        <g transform="translate(0, 25)">
          <rect x="0" y="0" width="175" height="90" rx="10" fill="#ecfdf5" class="dark:fill-emerald-950/40" stroke="#6ee7b7" stroke-width="1.2"/>
          <text x="10" y="20" font-size="11" font-weight="bold" fill="#065f46" class="dark:fill-emerald-200">5. Đặt gót</text>
          <text x="10" y="42" font-size="9.5" fill="#047857" class="dark:fill-emerald-300">• Gót chân đưa ra trước</text>
          <text x="10" y="60" font-size="9.5" fill="#047857" class="dark:fill-emerald-300">• Chân kia khuỵu nhẹ hoãn xung</text>
          <text x="10" y="76" font-size="9.5" fill="#047857" class="dark:fill-emerald-300">• Phối hợp đổi chân 2 bên</text>
        </g>

        <!-- DT 6 -->
        <g transform="translate(190, 25)">
          <rect x="0" y="0" width="175" height="90" rx="10" fill="#ecfdf5" class="dark:fill-emerald-950/40" stroke="#6ee7b7" stroke-width="1.2"/>
          <text x="10" y="20" font-size="11" font-weight="bold" fill="#065f46" class="dark:fill-emerald-200">6. Bước đuổi</text>
          <text x="10" y="42" font-size="9.5" fill="#047857" class="dark:fill-emerald-300">• Bước chếch sang bên đuổi theo</text>
          <text x="10" y="60" font-size="9.5" fill="#047857" class="dark:fill-emerald-300">• Chuyển hướng và đổi bên</text>
          <text x="10" y="76" font-size="9.5" fill="#047857" class="dark:fill-emerald-300">• Tay đưa ra trước theo nhịp</text>
        </g>

        <!-- DT 7 -->
        <g transform="translate(380, 25)">
          <rect x="0" y="0" width="175" height="90" rx="10" fill="#ecfdf5" class="dark:fill-emerald-950/40" stroke="#6ee7b7" stroke-width="1.2"/>
          <text x="10" y="20" font-size="11" font-weight="bold" fill="#065f46" class="dark:fill-emerald-200">7. Đẩy hông</text>
          <text x="10" y="42" font-size="9.5" fill="#047857" class="dark:fill-emerald-300">• Bước ngang rộng hơn vai</text>
          <text x="10" y="60" font-size="9.5" fill="#047857" class="dark:fill-emerald-300">• Thu chân và đẩy hông sang bên</text>
          <text x="10" y="76" font-size="9.5" fill="#047857" class="dark:fill-emerald-300">• Giữ thân dẻo dai biểu cảm</text>
        </g>

        <!-- DT 8 -->
        <g transform="translate(570, 25)">
          <rect x="0" y="0" width="170" height="90" rx="10" fill="#ecfdf5" class="dark:fill-emerald-950/40" stroke="#6ee7b7" stroke-width="1.2"/>
          <text x="10" y="20" font-size="11" font-weight="bold" fill="#065f46" class="dark:fill-emerald-200">8. Bật nhảy</text>
          <text x="10" y="42" font-size="9.5" fill="#047857" class="dark:fill-emerald-300">• Bước chéo chân chuẩn bị</text>
          <text x="10" y="60" font-size="9.5" fill="#047857" class="dark:fill-emerald-300">• Bật thẳng lên, mở tay chữ V</text>
          <text x="10" y="76" font-size="9.5" fill="#047857" class="dark:fill-emerald-300">• Tiếp đất êm ái khuỵu gối</text>
        </g>
      </g>
    </svg>
  `,

  // SƠ ĐỒ 5: CẦU LÔNG (ĐÁNH CẦU CAO TAY, ĐẬP CẦU & BỎ NHỎ)
  soDoCauLong: `
    <svg viewBox="0 0 800 320" class="w-full h-auto max-h-[350px] select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="780" height="300" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>

      <text x="400" y="36" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        TAM GIÁC KĨ THUẬT TẤN CÔNG &amp; GÀI CẦU MÔN CẦU LÔNG LỚP 9
      </text>

      <!-- 3 Columns for Badminton Skills -->
      <!-- Skill 1: Bật nhảy đánh cầu cao tay -->
      <g transform="translate(30, 55)">
        <rect x="0" y="0" width="230" height="235" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#0ea5e9" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="30" rx="14" fill="#0284c7"/>
        <text x="115" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">1. ĐÁNH CẦU CAO TAY BÊN PHẢI</text>
        <circle cx="115" cy="65" r="22" fill="#e0f2fe" class="dark:fill-sky-950/60"/>
        <text x="115" y="71" text-anchor="middle" font-size="16">🏸</text>
        <text x="12" y="105" font-size="10.5" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">• Tư thế chuẩn bị:</text>
        <text x="12" y="123" font-size="10" fill="#475569" class="dark:fill-slate-300">Chân trái trước, chân phải sau, mắt theo cầu.</text>
        <text x="12" y="145" font-size="10.5" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">• Bật nhảy &amp; đánh cầu:</text>
        <text x="12" y="163" font-size="10" fill="#475569" class="dark:fill-slate-300">Đạp chân bật lên, xoay hông và vai về trước.</text>
        <text x="12" y="181" font-size="10" fill="#475569" class="dark:fill-slate-300">Đánh cầu tại điểm cao phía trước trán.</text>
        <text x="12" y="203" font-size="10.5" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">• Tiếp đất an toàn:</text>
        <text x="12" y="221" font-size="10" fill="#475569" class="dark:fill-slate-300">Chân trái rồi chân phải, thu vợt về trước.</text>
      </g>

      <!-- Skill 2: Bật nhảy đập cầu thuận tay (Smash) -->
      <g transform="translate(285, 55)">
        <rect x="0" y="0" width="230" height="235" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#f43f5e" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="30" rx="14" fill="#e11d48"/>
        <text x="115" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">2. BẬT NHẢY ĐẬP CẦU (SMASH)</text>
        <circle cx="115" cy="65" r="22" fill="#ffe4e6" class="dark:fill-rose-950/60"/>
        <text x="115" y="71" text-anchor="middle" font-size="16">💥</text>
        <text x="12" y="105" font-size="10.5" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">• Động tác trên không:</text>
        <text x="12" y="123" font-size="10" fill="#475569" class="dark:fill-slate-300">Ưỡn thân vừa phải, xoay nhanh hông và vai.</text>
        <text x="12" y="145" font-size="10.5" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">• Điểm tiếp xúc &amp; Gập cổ tay:</text>
        <text x="12" y="163" font-size="10" fill="#475569" class="dark:fill-slate-300">Chạm cầu điểm cao nhất có thể phía trước.</text>
        <text x="12" y="181" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">Gập nhanh cổ tay, mặt vợt hơi úp.</text>
        <text x="12" y="203" font-size="10.5" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">• Quỹ đạo đường cầu:</text>
        <text x="12" y="221" font-size="10" fill="#475569" class="dark:fill-slate-300">Cầu bay cắm dốc, tốc độ cực nhanh sang sân đối thủ.</text>
      </g>

      <!-- Skill 3: Kĩ thuật bỏ nhỏ (Drop shot) -->
      <g transform="translate(540, 55)">
        <rect x="0" y="0" width="230" height="235" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#10b981" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="30" rx="14" fill="#059669"/>
        <text x="115" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">3. KĨ THUẬT BỎ NHỎ SÁT LƯỚI</text>
        <circle cx="115" cy="65" r="22" fill="#d1fae5" class="dark:fill-emerald-950/60"/>
        <text x="115" y="71" text-anchor="middle" font-size="16">🎯</text>
        <text x="12" y="105" font-size="10.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">• Bỏ nhỏ thuận tay:</text>
        <text x="12" y="123" font-size="10" fill="#475569" class="dark:fill-slate-300">Bước chân phải lên trước, chạm vợt nhẹ.</text>
        <text x="12" y="145" font-size="10.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">• Bỏ nhỏ trái tay:</text>
        <text x="12" y="163" font-size="10" fill="#475569" class="dark:fill-slate-300">Xoay cổ tay sang trái, lòng bàn tay úp xuống.</text>
        <text x="12" y="185" font-size="10.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">• Yêu cầu kĩ thuật:</text>
        <text x="12" y="203" font-size="10" fill="#475569" class="dark:fill-slate-300">Cầu vừa qua mép lưới rơi sát lưới đối phương.</text>
        <text x="12" y="221" font-size="10" fill="#475569" class="dark:fill-slate-300">Thu hồi vị trí trung tâm sân ngay lập tức.</text>
      </g>
    </svg>
  `,

  // SƠ ĐỒ 6: BÓNG ĐÁ 7 NGƯỜI
  soDoBongDa7Nguoi: `
    <svg viewBox="0 0 800 320" class="w-full h-auto max-h-[350px] select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="780" height="300" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>

      <text x="400" y="36" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        CÁC ĐIỂM CHẠM &amp; KĨ THUẬT CỐT LÕI MÔN BÓNG ĐÁ 7 NGƯỜI
      </text>

      <g transform="translate(30, 55)">
        <!-- Skill 1: Đá bóng mu giữa -->
        <rect x="0" y="0" width="230" height="235" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#2563eb" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="30" rx="14" fill="#1d4ed8"/>
        <text x="115" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">1. ĐÁ BÓNG MU GIỮA &amp; NÉM BIÊN</text>
        <circle cx="115" cy="65" r="22" fill="#dbeafe" class="dark:fill-blue-950/60"/>
        <text x="115" y="71" text-anchor="middle" font-size="16">⚽</text>
        <text x="12" y="105" font-size="10.5" font-weight="bold" fill="#1e40af" class="dark:fill-blue-300">• Chân trụ:</text>
        <text x="12" y="122" font-size="10" fill="#475569" class="dark:fill-slate-300">Đặt cách bóng 10–15 cm, mũi hướng đá.</text>
        <text x="12" y="142" font-size="10.5" font-weight="bold" fill="#1e40af" class="dark:fill-blue-300">• Điểm tiếp xúc:</text>
        <text x="12" y="159" font-size="10" fill="#475569" class="dark:fill-slate-300">Mu giữa bàn chân chạm tâm sau bóng.</text>
        <text x="12" y="179" font-size="10.5" font-weight="bold" fill="#1e40af" class="dark:fill-blue-300">• Cổ chân:</text>
        <text x="12" y="196" font-size="10" fill="#475569" class="dark:fill-slate-300">Mũi chân duỗi, cổ chân giữ chắc cứng.</text>
        <text x="12" y="216" font-size="10" fill="#047857" class="dark:fill-emerald-400">Ném biên: 2 tay qua đầu, 2 chân chạm đất.</text>
      </g>

      <!-- Skill 2: Dừng bóng bổng mu giữa -->
      <g transform="translate(285, 55)">
        <rect x="0" y="0" width="230" height="235" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="30" rx="14" fill="#d97706"/>
        <text x="115" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">2. DỪNG BÓNG BỔNG MU GIỮA</text>
        <circle cx="115" cy="65" r="22" fill="#fef3c7" class="dark:fill-amber-950/60"/>
        <text x="115" y="71" text-anchor="middle" font-size="16">📥</text>
        <text x="12" y="105" font-size="10.5" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">• Phán đoán điểm rơi:</text>
        <text x="12" y="122" font-size="10" fill="#475569" class="dark:fill-slate-300">Di chuyển nhanh đón hướng bóng rơi.</text>
        <text x="12" y="142" font-size="10.5" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">• Động tác đón bóng:</text>
        <text x="12" y="159" font-size="10" fill="#475569" class="dark:fill-slate-300">Đưa chân đón ra trước, gối hơi co nhẹ.</text>
        <text x="12" y="179" font-size="10.5" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">• Hoãn xung giảm lực:</text>
        <text x="12" y="196" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">Hạ chân và rút nhẹ về sau khi chạm bóng.</text>
        <text x="12" y="216" font-size="10" fill="#475569" class="dark:fill-slate-300">Bóng rơi êm sát chân trong tầm khống chế.</text>
      </g>

      <!-- Skill 3: Dẫn bóng mu ngoài -->
      <g transform="translate(540, 55)">
        <rect x="0" y="0" width="230" height="235" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#10b981" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="30" rx="14" fill="#059669"/>
        <text x="115" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">3. DẪN BÓNG BẰNG MU NGOÀI</text>
        <circle cx="115" cy="65" r="22" fill="#d1fae5" class="dark:fill-emerald-950/60"/>
        <text x="115" y="71" text-anchor="middle" font-size="16">⚡</text>
        <text x="12" y="105" font-size="10.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">• Vị trí tiếp xúc:</text>
        <text x="12" y="122" font-size="10" fill="#475569" class="dark:fill-slate-300">Mu ngoài từ ngón út đến cổ chân ngoài.</text>
        <text x="12" y="142" font-size="10.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">• Đẩy bóng điều khiển:</text>
        <text x="12" y="159" font-size="10" fill="#475569" class="dark:fill-slate-300">Mũi chân hơi chúc xuống, đẩy bóng 0,5–1m.</text>
        <text x="12" y="179" font-size="10.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">• Lợi thế kĩ thuật:</text>
        <text x="12" y="196" font-size="10" fill="#475569" class="dark:fill-slate-300">Dễ dàng đổi hướng đột ngột, che chắn bóng.</text>
        <text x="12" y="216" font-size="10" fill="#475569" class="dark:fill-slate-300">Luân phiên 2 chân, mắt quan sát cục diện.</text>
      </g>
    </svg>
  `,

  // SƠ ĐỒ 7: BÓNG RỔ (BƯỚC THUẬN, BƯỚC CHÉO & CHUYỀN VAI)
  soDoBongRo: `
    <svg viewBox="0 0 800 320" class="w-full h-auto max-h-[350px] select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="780" height="300" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.5"/>

      <text x="400" y="36" text-anchor="middle" font-size="13.5" font-weight="800" fill="#0f172a" class="dark:fill-white">
        KĨ THUẬT ĐỘT PHÁ TẤN CÔNG &amp; CHUYỀN BÓNG MÔN BÓNG RỔ LỚP 9
      </text>

      <g transform="translate(30, 55)">
        <!-- Skill 1: Bước thuận -->
        <rect x="0" y="0" width="230" height="235" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#f97316" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="30" rx="14" fill="#ea580c"/>
        <text x="115" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">1. ĐỘT PHÁ BƯỚC THUẬN</text>
        <circle cx="115" cy="65" r="22" fill="#ffedd5" class="dark:fill-orange-950/60"/>
        <text x="115" y="71" text-anchor="middle" font-size="16">🏀</text>
        <text x="12" y="105" font-size="10.5" font-weight="bold" fill="#c2410c" class="dark:fill-orange-300">• Chân trụ:</text>
        <text x="12" y="122" font-size="10" fill="#475569" class="dark:fill-slate-300">Chân trái làm trụ khi đột phá sang phải.</text>
        <text x="12" y="142" font-size="10.5" font-weight="bold" fill="#c2410c" class="dark:fill-orange-300">• Bước chân thuận:</text>
        <text x="12" y="159" font-size="10" fill="#475569" class="dark:fill-slate-300">Chân phải bước nhanh chếch trước sang phải.</text>
        <text x="12" y="179" font-size="10.5" font-weight="bold" fill="#c2410c" class="dark:fill-orange-300">• Nhịp đập bóng chuẩn:</text>
        <text x="12" y="196" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">Đập bóng xuống sân trước khi nhấc chân trụ.</text>
        <text x="12" y="216" font-size="10" fill="#475569" class="dark:fill-slate-300">Tránh lỗi chạy bước (traveling).</text>
      </g>

      <!-- Skill 2: Bước chéo -->
      <g transform="translate(285, 55)">
        <rect x="0" y="0" width="230" height="235" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#8b5cf6" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="30" rx="14" fill="#7c3aed"/>
        <text x="115" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">2. ĐỘT PHÁ BƯỚC CHÉO</text>
        <circle cx="115" cy="65" r="22" fill="#ede9fe" class="dark:fill-purple-950/60"/>
        <text x="115" y="71" text-anchor="middle" font-size="16">🔀</text>
        <text x="12" y="105" font-size="10.5" font-weight="bold" fill="#6d28d9" class="dark:fill-purple-300">• Đột phá sang phải:</text>
        <text x="12" y="122" font-size="10" fill="#475569" class="dark:fill-slate-300">Chân phải làm trụ vững chắc.</text>
        <text x="12" y="142" font-size="10.5" font-weight="bold" fill="#6d28d9" class="dark:fill-purple-300">• Bước chéo qua thân:</text>
        <text x="12" y="159" font-size="10" fill="#475569" class="dark:fill-slate-300">Chân trái bước chéo nhanh qua trước sang phải.</text>
        <text x="12" y="179" font-size="10.5" font-weight="bold" fill="#6d28d9" class="dark:fill-purple-300">• Hạ thấp trọng tâm:</text>
        <text x="12" y="196" font-size="10" fill="#475569" class="dark:fill-slate-300">Dùng vai che bóng vượt qua người phòng thủ.</text>
        <text x="12" y="216" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">Đập bóng xuống khi chân bước chạm đất.</text>
      </g>

      <!-- Skill 3: Chuyền một tay trên vai -->
      <g transform="translate(540, 55)">
        <rect x="0" y="0" width="230" height="235" rx="14" fill="#ffffff" class="dark:fill-slate-800" stroke="#059669" stroke-width="1.5"/>
        <rect x="0" y="0" width="230" height="30" rx="14" fill="#047857"/>
        <text x="115" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">3. CHUYỀN 1 TAY TRÊN VAI</text>
        <circle cx="115" cy="65" r="22" fill="#d1fae5" class="dark:fill-emerald-950/60"/>
        <text x="115" y="71" text-anchor="middle" font-size="16">🚀</text>
        <text x="12" y="105" font-size="10.5" font-weight="bold" fill="#065f46" class="dark:fill-emerald-300">• Chuẩn bị tư thế:</text>
        <text x="12" y="122" font-size="10" fill="#475569" class="dark:fill-slate-300">Đưa bóng lên trên vai phải, tay đỡ sau bóng.</text>
        <text x="12" y="142" font-size="10.5" font-weight="bold" fill="#065f46" class="dark:fill-emerald-300">• Lực phát động:</text>
        <text x="12" y="159" font-size="10" fill="#475569" class="dark:fill-slate-300">Đạp chân sau, xoay hông và thân về trước.</text>
        <text x="12" y="179" font-size="10.5" font-weight="bold" fill="#065f46" class="dark:fill-emerald-300">• Duỗi tay &amp; Miết ngón tay:</text>
        <text x="12" y="196" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-200">Gập cổ tay, ngón tay miết bóng bay xoáy chuẩn.</text>
        <text x="12" y="216" font-size="10" fill="#475569" class="dark:fill-slate-300">Đường chuyền xa cự li trung bình và dài.</text>
      </g>
    </svg>
  `
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = gdtc9Diagrams;
}
