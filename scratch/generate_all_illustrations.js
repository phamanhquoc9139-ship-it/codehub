// Module generate_all_illustrations.js
// Exports getTopicIllustration(topicId) for GDTC 7

function getTopicIllustration(topicId) {
  switch (topicId) {
    case 'phan-1-kien-thuc-chung':
      return `
        <!-- HÌNH MINH HỌA 1: 4 YẾU TỐ MÔI TRƯỜNG & AN TOÀN TẬP LUYỆN -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-image"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 1: Đồ Họa Phân Tích 4 Yếu Tố Môi Trường &amp; An Toàn Y Học Thể Thao</h4>
                <p class="text-[11px] text-emerald-300/80">Nhiệt độ, độ ẩm, ánh sáng, nước và địa hình tự nhiên trong GDTC 7</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Chuẩn GDPT 2018</span>
          </div>

          <div class="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 850 360" class="w-full min-w-[750px] h-auto drop-shadow select-none font-sans" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad_temp" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#ef4444" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#b91c1c" stop-opacity="0.1"/>
                </linearGradient>
                <linearGradient id="grad_wind" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#0e7490" stop-opacity="0.1"/>
                </linearGradient>
                <linearGradient id="grad_sun" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
                </linearGradient>
                <linearGradient id="grad_terr" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
                </linearGradient>
              </defs>

              <circle cx="425" cy="180" r="48" fill="#1e293b" stroke="#10b981" stroke-width="2.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.4))"/>
              <text x="425" y="174" text-anchor="middle" fill="#34d399" font-size="11" font-weight="900" letter-spacing="0.5">MÔI TRƯỜNG</text>
              <text x="425" y="190" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="700">TỰ NHIÊN</text>
              <text x="425" y="204" text-anchor="middle" fill="#94a3b8" font-size="8.5">GDTC 7</text>

              <line x1="380" y1="150" x2="220" y2="85" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="4,3"/>
              <line x1="470" y1="150" x2="630" y2="85" stroke="#06b6d4" stroke-width="1.8" stroke-dasharray="4,3"/>
              <line x1="380" y1="210" x2="220" y2="275" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4,3"/>
              <line x1="470" y1="210" x2="630" y2="275" stroke="#10b981" stroke-width="1.8" stroke-dasharray="4,3"/>

              <!-- 1. Nhiệt độ không khí -->
              <g transform="translate(15, 15)">
                <rect width="360" height="135" rx="14" fill="url(#grad_temp)" stroke="#ef4444" stroke-width="1.5"/>
                <circle cx="32" cy="30" r="16" fill="#ef4444" fill-opacity="0.2"/>
                <text x="32" y="35" text-anchor="middle" fill="#fca5a5" font-size="16">🌡️</text>
                <text x="56" y="27" fill="#fca5a5" font-size="12" font-weight="800">1. NHIỆT ĐỘ KHÔNG KHÍ</text>
                <text x="56" y="42" fill="#94a3b8" font-size="9.5">Ảnh hưởng co dãn mạch &amp; điều nhiệt cơ thể</text>
                <path d="M 20 54 L 340 54" stroke="#ef4444" stroke-width="0.8" stroke-opacity="0.3"/>
                <text x="25" y="72" fill="#f8fafc" font-size="9.5">&bull; Trời nóng: Tập sáng sớm/chiều muộn, trang phục thoáng mát.</text>
                <text x="25" y="90" fill="#f8fafc" font-size="9.5">&bull; Trời lạnh: Khởi động kĩ, mặc ấm, bảo vệ đường hô hấp.</text>
                <rect x="25" y="100" width="310" height="24" rx="6" fill="#7f1d1d" fill-opacity="0.6" stroke="#ef4444" stroke-width="1"/>
                <text x="180" y="116" text-anchor="middle" fill="#fecaca" font-size="9" font-weight="800">⚠️ TUYỆT ĐỐI KHÔNG DỘI NƯỚC LẠNH NGAY KHI VỪA TẬP!</text>
              </g>

              <!-- 2. Độ ẩm & Gió -->
              <g transform="translate(475, 15)">
                <rect width="360" height="135" rx="14" fill="url(#grad_wind)" stroke="#06b6d4" stroke-width="1.5"/>
                <circle cx="32" cy="30" r="16" fill="#06b6d4" fill-opacity="0.2"/>
                <text x="32" y="35" text-anchor="middle" fill="#67e8f9" font-size="16">💨</text>
                <text x="56" y="27" fill="#67e8f9" font-size="12" font-weight="800">2. ĐỘ ẨM KHÔNG KHÍ &amp; GIÓ</text>
                <text x="56" y="42" fill="#94a3b8" font-size="9.5">Cản trở bốc hơi mồ hôi &amp; mất nhiệt nhanh</text>
                <path d="M 20 54 L 340 54" stroke="#06b6d4" stroke-width="0.8" stroke-opacity="0.3"/>
                <text x="25" y="72" fill="#f8fafc" font-size="9.5">&bull; Nắng nóng + ẩm cao: Khó toả nhiệt &rarr; giảm cường độ, lau mồ hôi.</text>
                <text x="25" y="90" fill="#f8fafc" font-size="9.5">&bull; Trời rét + ẩm cao: Dễ nhiễm lạnh &rarr; giữ ấm cổ ngực, tránh gió lùa.</text>
                <text x="25" y="108" fill="#f8fafc" font-size="9.5">&bull; Gió lớn: Làm tăng nhanh mất nước; gió rét làm giảm linh hoạt khớp.</text>
                <text x="25" y="124" fill="#a5f3fc" font-size="8.5" font-weight="700">&rarr; Nguyên tắc: Bù nước từng ngụm nhỏ, tập nơi kín gió khi trời rét.</text>
              </g>

              <!-- 3. Ánh sáng mặt trời -->
              <g transform="translate(15, 205)">
                <rect width="360" height="140" rx="14" fill="url(#grad_sun)" stroke="#f59e0b" stroke-width="1.5"/>
                <circle cx="32" cy="30" r="16" fill="#f59e0b" fill-opacity="0.2"/>
                <text x="32" y="35" text-anchor="middle" fill="#fde68a" font-size="16">☀️</text>
                <text x="56" y="27" fill="#fde68a" font-size="12" font-weight="800">3. ÁNH SÁNG MẶT TRỜI &amp; TIA UV</text>
                <text x="56" y="42" fill="#94a3b8" font-size="9.5">Hấp thu Vitamin D vs Tác hại tia tử ngoại UV</text>
                <path d="M 20 54 L 340 54" stroke="#f59e0b" stroke-width="0.8" stroke-opacity="0.3"/>
                <text x="25" y="72" fill="#f8fafc" font-size="9.5">&bull; Nắng sớm hợp lý: Kích thích tổng hợp Vitamin D, phát triển xương.</text>
                <text x="25" y="90" fill="#f8fafc" font-size="9.5">&bull; Nắng gắt (trưa - chiều): Tia UV phá huỷ tế bào da, say nắng, hại mắt.</text>
                <rect x="25" y="102" width="310" height="26" rx="6" fill="#78350f" fill-opacity="0.6" stroke="#f59e0b" stroke-width="1"/>
                <text x="180" y="119" text-anchor="middle" fill="#fef3c7" font-size="8.8" font-weight="700">Đội mũ, bôi kem chống nắng, tập dưới bóng râm râm mát</text>
              </g>

              <!-- 4. Nước & Địa hình tự nhiên -->
              <g transform="translate(475, 205)">
                <rect width="360" height="140" rx="14" fill="url(#grad_terr)" stroke="#10b981" stroke-width="1.5"/>
                <circle cx="32" cy="30" r="16" fill="#10b981" fill-opacity="0.2"/>
                <text x="32" y="35" text-anchor="middle" fill="#a7f3d0" font-size="16">⛰️</text>
                <text x="56" y="27" fill="#a7f3d0" font-size="12" font-weight="800">4. MÔI TRƯỜNG NƯỚC &amp; ĐỊA HÌNH</text>
                <text x="56" y="42" fill="#94a3b8" font-size="9.5">Rèn luyện kháng lực, sức bền &amp; sự khéo léo</text>
                <path d="M 20 54 L 340 54" stroke="#10b981" stroke-width="0.8" stroke-opacity="0.3"/>
                <text x="25" y="72" fill="#f8fafc" font-size="9.5">&bull; Bơi lội / Nước cạn: Tăng sức cản, phát triển toàn diện hệ hô hấp.</text>
                <text x="25" y="90" fill="#f8fafc" font-size="9.5">&bull; Chạy lên dốc: Phát triển sức mạnh cơ bắp và kĩ thuật đạp sau.</text>
                <text x="25" y="108" fill="#f8fafc" font-size="9.5">&bull; Chạy trên cát: Tăng sức mạnh bàn chân, mắt cá và thăng bằng.</text>
                <text x="25" y="126" fill="#f8fafc" font-size="9.5">&bull; Chạy địa hình mấp mô quanh co: Rèn sức bền dẻo dai và tính linh hoạt.</text>
              </g>
            </svg>
          </div>

          <div class="mt-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <span class="font-bold text-blue-300 block">Trước khi tập 20-30p</span>
                <span class="text-slate-300 text-[11px]">Uống 200 - 300ml nước lọc, khởi động kỹ các khớp</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">2</span>
              <div>
                <span class="font-bold text-amber-300 block">Trong khi luyện tập</span>
                <span class="text-slate-300 text-[11px]">Bổ sung 100-150ml sau mỗi 15-20 phút, uống từng ngụm nhỏ</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">3</span>
              <div>
                <span class="font-bold text-emerald-300 block">Sau khi kết thúc</span>
                <span class="text-slate-300 text-[11px]">Thả lỏng hồi tĩnh, lau khô mồ hôi, tuyệt đối không tắm lạnh ngay</span>
              </div>
            </div>
          </div>
        </div>
      `;

    case 'chay-cu-li-ngan-60m':
      return `
        <!-- HÌNH MINH HỌA 2: KĨ THUẬT 4 GIAI ĐOẠN CHẠY 60 M -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-person-running"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 2: Phân Tích Kĩ Thuật 4 Giai Đoạn Chạy Cự Li Ngắn (60 m)</h4>
                <p class="text-[11px] text-emerald-300/80">Xuất phát cao &rarr; Chạy lao sau XP &rarr; Chạy giữa quãng &rarr; Về đích và đánh đích</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Cự li 60 m</span>
          </div>

          <div class="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 850 280" class="w-full min-w-[750px] h-auto drop-shadow select-none font-sans" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="track_grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#b91c1c"/>
                  <stop offset="50%" stop-color="#c2410c"/>
                  <stop offset="100%" stop-color="#047857"/>
                </linearGradient>
              </defs>

              <!-- Running Track Ground -->
              <rect x="20" y="210" width="810" height="20" rx="4" fill="url(#track_grad)"/>
              <line x1="20" y1="210" x2="830" y2="210" stroke="#f8fafc" stroke-width="2"/>
              <line x1="40" y1="190" x2="40" y2="230" stroke="#f8fafc" stroke-width="3"/>
              <text x="40" y="245" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="900">VẠCH XP</text>

              <line x1="810" y1="170" x2="810" y2="230" stroke="#f59e0b" stroke-width="3" stroke-dasharray="3,3"/>
              <text x="810" y="245" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="900">DÂY ĐÍCH</text>

              <!-- PHASE 1: Xuất phát cao -->
              <g transform="translate(40, 20)">
                <rect width="170" height="175" rx="10" fill="#1e293b" fill-opacity="0.85" stroke="#ef4444" stroke-width="1.5"/>
                <rect x="10" y="10" width="150" height="22" rx="5" fill="#ef4444" fill-opacity="0.2"/>
                <text x="85" y="25" text-anchor="middle" fill="#fca5a5" font-size="10.5" font-weight="900">1. XUẤT PHÁT CAO</text>
                
                <!-- Stickman figure: Sẵn sàng -->
                <circle cx="85" cy="55" r="8" fill="#fca5a5"/>
                <line x1="85" y1="63" x2="72" y2="95" stroke="#fca5a5" stroke-width="3.5" stroke-linecap="round"/>
                <!-- Front leg bent -->
                <line x1="72" y1="95" x2="58" y2="125" stroke="#f87171" stroke-width="3" stroke-linecap="round"/>
                <line x1="58" y1="125" x2="52" y2="155" stroke="#f87171" stroke-width="3" stroke-linecap="round"/>
                <!-- Back leg -->
                <line x1="72" y1="95" x2="95" y2="125" stroke="#f87171" stroke-width="3" stroke-linecap="round"/>
                <line x1="95" y1="125" x2="110" y2="155" stroke="#f87171" stroke-width="3" stroke-linecap="round"/>
                <!-- Arms bent -->
                <line x1="78" y1="75" x2="60" y2="95" stroke="#fca5a5" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="78" y1="75" x2="95" y2="85" stroke="#fca5a5" stroke-width="2.5" stroke-linecap="round"/>

                <text x="85" y="170" text-anchor="middle" fill="#fca5a5" font-size="8.5" font-weight="700">Trọng tâm dồn 70% chân trước</text>
              </g>

              <!-- Arrow 1 -> 2 -->
              <path d="M 215 105 L 240 105" stroke="#f8fafc" stroke-width="2" marker-end="url(#arrow)"/>

              <!-- PHASE 2: Chạy lao -->
              <g transform="translate(245, 20)">
                <rect width="170" height="175" rx="10" fill="#1e293b" fill-opacity="0.85" stroke="#f97316" stroke-width="1.5"/>
                <rect x="10" y="10" width="150" height="22" rx="5" fill="#f97316" fill-opacity="0.2"/>
                <text x="85" y="25" text-anchor="middle" fill="#fdba74" font-size="10.5" font-weight="900">2. CHẠY LAO SAU XP</text>

                <!-- Runner leaning 45 deg -->
                <circle cx="105" cy="60" r="8" fill="#fdba74"/>
                <line x1="105" y1="68" x2="75" y2="105" stroke="#fdba74" stroke-width="3.5" stroke-linecap="round"/>
                <!-- Thrust leg -->
                <line x1="75" y1="105" x2="48" y2="148" stroke="#fb923c" stroke-width="3" stroke-linecap="round"/>
                <!-- Swing leg forward -->
                <line x1="75" y1="105" x2="100" y2="118" stroke="#fb923c" stroke-width="3" stroke-linecap="round"/>
                <line x1="100" y1="118" x2="88" y2="148" stroke="#fb923c" stroke-width="3" stroke-linecap="round"/>
                <!-- Arms swing -->
                <line x1="92" y1="80" x2="115" y2="92" stroke="#fdba74" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="92" y1="80" x2="68" y2="70" stroke="#fdba74" stroke-width="2.5" stroke-linecap="round"/>

                <text x="85" y="163" text-anchor="middle" fill="#fdba74" font-size="8.5" font-weight="700">Độ ngả thân 45°-50°</text>
                <text x="85" y="173" text-anchor="middle" fill="#94a3b8" font-size="8">Tăng dần độ dài &amp; tần số bước</text>
              </g>

              <!-- Arrow 2 -> 3 -->
              <path d="M 420 105 L 445 105" stroke="#f8fafc" stroke-width="2"/>

              <!-- PHASE 3: Chạy giữa quãng -->
              <g transform="translate(450, 20)">
                <rect width="170" height="175" rx="10" fill="#1e293b" fill-opacity="0.85" stroke="#10b981" stroke-width="1.5"/>
                <rect x="10" y="10" width="150" height="22" rx="5" fill="#10b981" fill-opacity="0.2"/>
                <text x="85" y="25" text-anchor="middle" fill="#6ee7b7" font-size="10.5" font-weight="900">3. CHẠY GIỮA QUÃNG</text>

                <!-- High knee runner -->
                <circle cx="85" cy="50" r="8" fill="#6ee7b7"/>
                <line x1="85" y1="58" x2="80" y2="98" stroke="#6ee7b7" stroke-width="3.5" stroke-linecap="round"/>
                <!-- Back drive leg (50-55 deg) -->
                <line x1="80" y1="98" x2="52" y2="148" stroke="#34d399" stroke-width="3" stroke-linecap="round"/>
                <!-- Front knee high 90 deg -->
                <line x1="80" y1="98" x2="112" y2="105" stroke="#34d399" stroke-width="3" stroke-linecap="round"/>
                <line x1="112" y1="105" x2="108" y2="135" stroke="#34d399" stroke-width="3" stroke-linecap="round"/>
                <!-- Arms swing 90 deg -->
                <line x1="82" y1="72" x2="60" y2="82" stroke="#6ee7b7" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="82" y1="72" x2="105" y2="65" stroke="#6ee7b7" stroke-width="2.5" stroke-linecap="round"/>

                <text x="85" y="163" text-anchor="middle" fill="#6ee7b7" font-size="8.5" font-weight="700">Đạp sau cực mạnh (50°-55°)</text>
                <text x="85" y="173" text-anchor="middle" fill="#94a3b8" font-size="8">Đùi nâng cao, đánh tay so le</text>
              </g>

              <!-- Arrow 3 -> 4 -->
              <path d="M 625 105 L 650 105" stroke="#f8fafc" stroke-width="2"/>

              <!-- PHASE 4: Về đích -->
              <g transform="translate(655, 20)">
                <rect width="170" height="175" rx="10" fill="#1e293b" fill-opacity="0.85" stroke="#3b82f6" stroke-width="1.5"/>
                <rect x="10" y="10" width="150" height="22" rx="5" fill="#3b82f6" fill-opacity="0.2"/>
                <text x="85" y="25" text-anchor="middle" fill="#93c5fd" font-size="10.5" font-weight="900">4. VỀ ĐÍCH &amp; ĐÁNH ĐÍCH</text>

                <!-- Runner breasting the tape -->
                <circle cx="98" cy="55" r="8" fill="#93c5fd"/>
                <line x1="98" y1="63" x2="75" y2="102" stroke="#93c5fd" stroke-width="3.5" stroke-linecap="round"/>
                <!-- Legs crossing -->
                <line x1="75" y1="102" x2="60" y2="148" stroke="#60a5fa" stroke-width="3" stroke-linecap="round"/>
                <line x1="75" y1="102" x2="105" y2="135" stroke="#60a5fa" stroke-width="3" stroke-linecap="round"/>
                <!-- Arms thrown back / torso dip -->
                <line x1="88" y1="76" x2="65" y2="92" stroke="#93c5fd" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="88" y1="76" x2="60" y2="68" stroke="#93c5fd" stroke-width="2.5" stroke-linecap="round"/>

                <text x="85" y="163" text-anchor="middle" fill="#93c5fd" font-size="8.5" font-weight="700">Gập ngực / Xoay vai chạm đích</text>
                <text x="85" y="173" text-anchor="middle" fill="#ef4444" font-size="8" font-weight="700">Cấm nhảy lên &amp; cấm dừng đột ngột</text>
              </g>
            </svg>
          </div>
        </div>
      `;

    case 'nhay-xa-kieu-ngoi':
      return `
        <!-- HÌNH MINH HỌA 3: KĨ THUẬT NHẢY XA KIỂU NGỒI & BÃI NHẢY CHUẨN -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-arrows-split-up-and-left"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 3: Phân Tích Kĩ Thuật Nhảy Xa Kiểu Ngồi &amp; Quy Cách Bãi Nhảy Tiêu Chuẩn</h4>
                <p class="text-[11px] text-emerald-300/80">Chạy đà &rarr; Giậm nhảy góc 70°-75° &rarr; Tư thế ngồi trên không &rarr; Tiếp đất hoãn xung</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Điền kinh lớp 7</span>
          </div>

          <div class="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 850 300" class="w-full min-w-[750px] h-auto drop-shadow select-none font-sans" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sand_grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.8"/>
                  <stop offset="100%" stop-color="#d97706" stop-opacity="0.9"/>
                </linearGradient>
              </defs>

              <!-- Runway & Sand Pit Ground -->
              <!-- Runway -->
              <rect x="20" y="215" width="430" height="15" fill="#dc2626" rx="2"/>
              <line x1="20" y1="215" x2="450" y2="215" stroke="#ffffff" stroke-width="2"/>
              <text x="150" y="245" fill="#f87171" font-size="10" font-weight="800">ĐƯỜNG CHẠY ĐÀ (&ge; 40 m)</text>

              <!-- Take-off Board -->
              <rect x="420" y="213" width="30" height="17" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
              <rect x="445" y="213" width="5" height="17" fill="#ef4444"/>
              <text x="435" y="245" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="900">VÁN GIẬM</text>
              <text x="435" y="258" text-anchor="middle" fill="#94a3b8" font-size="8">1.22 x 0.20m</text>

              <!-- Free space -->
              <rect x="450" y="215" width="70" height="15" fill="#475569"/>
              <text x="485" y="245" text-anchor="middle" fill="#94a3b8" font-size="8.5">1 - 3m</text>

              <!-- Sand pit -->
              <rect x="520" y="215" width="310" height="25" fill="url(#sand_grad)" rx="4"/>
              <text x="675" y="255" text-anchor="middle" fill="#fef3c7" font-size="11" font-weight="900">HỐ CÁT TIÊU CHUẨN (Rộng 2.75m &bull; Dài 7 - 9m)</text>

              <!-- FLIGHT TRAJECTORY CURVE -->
              <path d="M 435 210 Q 560 40 700 215" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4"/>

              <!-- STEP 1: CHẠY ĐÀ -->
              <g transform="translate(60, 60)">
                <circle cx="30" cy="50" r="7" fill="#fca5a5"/>
                <line x1="30" y1="57" x2="25" y2="85" stroke="#fca5a5" stroke-width="3"/>
                <line x1="25" y1="85" x2="10" y2="125" stroke="#fca5a5" stroke-width="2.8"/>
                <line x1="25" y1="85" x2="48" y2="115" stroke="#fca5a5" stroke-width="2.8"/>
                <line x1="48" y1="115" x2="40" y2="145" stroke="#fca5a5" stroke-width="2.8"/>
                <text x="30" y="25" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="900">1. CHẠY ĐÀ</text>
                <text x="30" y="38" text-anchor="middle" fill="#94a3b8" font-size="8">11 - 15 bước tăng tốc</text>
              </g>

              <!-- STEP 2: GIẬM NHẢY -->
              <g transform="translate(390, 45)">
                <circle cx="45" cy="55" r="7" fill="#fbbf24"/>
                <line x1="45" y1="62" x2="45" y2="95" stroke="#fbbf24" stroke-width="3"/>
                <!-- Takeoff leg straight on board -->
                <line x1="45" y1="95" x2="45" y2="155" stroke="#f59e0b" stroke-width="3.5"/>
                <!-- Free leg swinging forward high -->
                <line x1="45" y1="95" x2="72" y2="90" stroke="#f59e0b" stroke-width="3"/>
                <line x1="72" y1="90" x2="70" y2="120" stroke="#f59e0b" stroke-width="3"/>
                <!-- Arms swing up -->
                <line x1="45" y1="72" x2="68" y2="55" stroke="#fbbf24" stroke-width="2.5"/>
                <line x1="45" y1="72" x2="25" y2="65" stroke="#fbbf24" stroke-width="2.5"/>
                <text x="45" y="20" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="900">2. GIẬM NHẢY</text>
                <text x="45" y="33" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-weight="800">Góc giậm 70°-75°</text>
              </g>

              <!-- STEP 3: BAY TRÊN KHÔNG (TƯ THẾ NGỒI) -->
              <g transform="translate(540, 20)">
                <circle cx="45" cy="40" r="7" fill="#34d399"/>
                <!-- Torso bent forward -->
                <line x1="45" y1="47" x2="35" y2="75" stroke="#34d399" stroke-width="3"/>
                <!-- Both thighs pulled up to chest (SITTING POSE) -->
                <line x1="35" y1="75" x2="65" y2="70" stroke="#10b981" stroke-width="3.5"/>
                <line x1="65" y1="70" x2="70" y2="98" stroke="#10b981" stroke-width="3.5"/>
                <!-- Arms reaching forward -->
                <line x1="40" y1="58" x2="68" y2="58" stroke="#34d399" stroke-width="2.5"/>
                <text x="50" y="15" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="900">3. BAY TRÊN KHÔNG</text>
                <text x="50" y="27" text-anchor="middle" fill="#a7f3d0" font-size="8.5" font-weight="800">Tư thế "Ngồi trên không"</text>
              </g>

              <!-- STEP 4: RƠI XUỐNG CÁT (TIẾP ĐẤT) -->
              <g transform="translate(685, 65)">
                <circle cx="35" cy="45" r="7" fill="#a855f7"/>
                <line x1="35" y1="52" x2="25" y2="80" stroke="#a855f7" stroke-width="3"/>
                <!-- Knees deeply bent to absorb impact -->
                <line x1="25" y1="80" x2="48" y2="95" stroke="#c084fc" stroke-width="3.5"/>
                <line x1="48" y1="95" x2="35" y2="135" stroke="#c084fc" stroke-width="3.5"/>
                <!-- Arms reach forward -->
                <line x1="30" y1="62" x2="55" y2="75" stroke="#a855f7" stroke-width="2.5"/>
                <text x="40" y="20" text-anchor="middle" fill="#d8b4fe" font-size="10" font-weight="900">4. TIẾP ĐẤT</text>
                <text x="40" y="32" text-anchor="middle" fill="#f8fafc" font-size="8">Chùng gối hoãn xung</text>
                <text x="40" y="42" text-anchor="middle" fill="#fca5a5" font-size="7.5">Đổ người tới trước</text>
              </g>
            </svg>
          </div>
        </div>
      `;

    case 'chay-cu-li-trung-binh':
      return `
        <!-- HÌNH MINH HỌA 4: NHỊP THỞ & CHIẾN THUẬT CHẠY CỰ LI TRUNG BÌNH -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-lungs"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 4: Kĩ Thuật Hít Thở Thể Thao &amp; Chiến Thuật Vượt Hiện Tượng "Cực Điểm"</h4>
                <p class="text-[11px] text-emerald-300/80">Nhịp thở 2:2 &bull; Hô hấp lần hai &bull; Đường chạy vòng dồn làn số 1</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Cự li TB</span>
          </div>

          <div class="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 850 270" class="w-full min-w-[750px] h-auto drop-shadow select-none font-sans" xmlns="http://www.w3.org/2000/svg">
              <!-- Left Panel: Breathing rhythm -->
              <g transform="translate(15, 15)">
                <rect width="395" height="235" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#06b6d4" stroke-width="1.5"/>
                <rect x="15" y="15" width="365" height="26" rx="6" fill="#0891b2" fill-opacity="0.3"/>
                <text x="195" y="32" text-anchor="middle" fill="#67e8f9" font-size="11" font-weight="900">1. CHU KÌ HÍT THỞ THỂ THAO (NHỊP 2:2 HOẶC 3:3)</text>

                <!-- Inhale card -->
                <rect x="25" y="55" width="165" height="110" rx="8" fill="#0e7490" fill-opacity="0.25" stroke="#06b6d4" stroke-width="1"/>
                <text x="107" y="75" text-anchor="middle" fill="#a5f3fc" font-size="11" font-weight="800">2 BƯỚC HÍT VÀO</text>
                <circle cx="107" cy="105" r="20" fill="#06b6d4" fill-opacity="0.2"/>
                <text x="107" y="112" text-anchor="middle" fill="#38bdf8" font-size="20">👃</text>
                <text x="107" y="142" text-anchor="middle" fill="#e0f2fe" font-size="9" font-weight="700">Hít sâu bằng MŨI</text>
                <text x="107" y="155" text-anchor="middle" fill="#94a3b8" font-size="8">Nạp tối đa lượng O₂</text>

                <!-- Exhale card -->
                <rect x="205" y="55" width="165" height="110" rx="8" fill="#0369a1" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1"/>
                <text x="287" y="75" text-anchor="middle" fill="#bae6fd" font-size="11" font-weight="800">2 BƯỚC THỞ RA</text>
                <circle cx="287" cy="105" r="20" fill="#38bdf8" fill-opacity="0.2"/>
                <text x="287" y="112" text-anchor="middle" fill="#38bdf8" font-size="20">👄</text>
                <text x="287" y="142" text-anchor="middle" fill="#e0f2fe" font-size="9" font-weight="700">Thở mạnh bằng MIỆNG</text>
                <text x="287" y="155" text-anchor="middle" fill="#94a3b8" font-size="8">Tống hết CO₂ tồn đọng</text>

                <rect x="25" y="175" width="345" height="45" rx="6" fill="#0f172a" stroke="#0891b2" stroke-width="0.8"/>
                <text x="197" y="193" text-anchor="middle" fill="#67e8f9" font-size="9" font-weight="700">&bull; Thở nông &rarr; Thiếu O₂ &rarr; Mau mệt, chuột rút và đau xóc hông.</text>
                <text x="197" y="210" text-anchor="middle" fill="#f8fafc" font-size="8.5">&bull; Phải duy trì nhịp thở đều đặn và sâu ngay từ những bước chạy đầu tiên.</text>
              </g>

              <!-- Right Panel: Second wind & tactical line -->
              <g transform="translate(430, 15)">
                <rect width="405" height="235" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#f59e0b" stroke-width="1.5"/>
                <rect x="15" y="15" width="375" height="26" rx="6" fill="#d97706" fill-opacity="0.3"/>
                <text x="202" y="32" text-anchor="middle" fill="#fde68a" font-size="11" font-weight="900">2. HIỆN TƯỢNG "CỰC ĐIỂM" &amp; "HÔ HẤP LẦN HAI"</text>

                <!-- Energy Curve Diagram -->
                <path d="M 35 150 Q 85 80 145 155 Q 225 100 370 110" fill="none" stroke="#f59e0b" stroke-width="3"/>
                <circle cx="145" cy="155" r="7" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
                <text x="145" y="178" text-anchor="middle" fill="#fca5a5" font-size="9.5" font-weight="800">"CỰC ĐIỂM"</text>
                <text x="145" y="190" text-anchor="middle" fill="#f87171" font-size="8">Khó thở, chân nặng chì</text>

                <circle cx="280" cy="105" r="7" fill="#10b981" stroke="#ffffff" stroke-width="1.5"/>
                <text x="280" y="88" text-anchor="middle" fill="#6ee7b7" font-size="9.5" font-weight="800">"HÔ HẤP LẦN HAI"</text>
                <text x="280" y="100" text-anchor="middle" fill="#a7f3d0" font-size="8">Hô hấp thông suốt, ổn định</text>

                <!-- Strategy card -->
                <rect x="25" y="198" width="355" height="26" rx="6" fill="#78350f" fill-opacity="0.7" stroke="#f59e0b" stroke-width="1"/>
                <text x="202" y="215" text-anchor="middle" fill="#fef3c7" font-size="8.8" font-weight="800">Chiến thuật: Giảm nhẹ tốc độ + Thở sâu + Kiên trì &rarr; Vượt qua cực điểm</text>
              </g>
            </svg>
          </div>
        </div>
      `;

    case 'bai-the-duc-30-nhip':
      return `
        <!-- HÌNH MINH HỌA 5: MA TRẬN 30 NHỊP BÀI THỂ DỤC LIÊN HOÀN -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-child-reaching"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 5: Bảng Đồ Họa Phân Nhóm 30 Nhịp Bài Thể Dục Liên Hoàn Lớp 7</h4>
                <p class="text-[11px] text-emerald-300/80">6 Khối động tác: Vươn thở &bull; Nghiêng lườn &bull; Gập bụng &bull; Thăng bằng &bull; Bật nhảy &bull; Hồi tĩnh</p>
              </div>
            </div>
            <button onclick="openStopwatchModal()" class="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1 transition">
              <i class="fa-solid fa-play"></i> Bật Đếm Nhịp
            </button>
          </div>

          <!-- 6 Group Movement Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            <!-- Group 1 -->
            <div class="p-3.5 rounded-xl bg-slate-800/80 border border-emerald-500/40 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-500 text-slate-900">NHỊP 1 - 5</span>
                <span class="text-[11px] font-bold text-emerald-400">VƯƠN THỞ &amp; TAY</span>
              </div>
              <p class="text-xs font-semibold text-white">Kiễng gót, tay dang ngang &amp; lên cao</p>
              <p class="text-[11px] text-slate-300 leading-relaxed">&bull; N1: Kiễng gót, 2 tay dang ngang lòng bàn tay sấp.<br>&bull; N2-3: Vươn cao hít sâu, lòng bàn tay hướng vào nhau.<br>&bull; N4-5: Hạ gót, gập cẳng tay trước ngực, thở ra.</p>
            </div>

            <!-- Group 2 -->
            <div class="p-3.5 rounded-xl bg-slate-800/80 border border-teal-500/40 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-teal-500 text-slate-900">NHỊP 6 - 10</span>
                <span class="text-[11px] font-bold text-teal-400">NGHIÊNG LƯỜN &amp; VẶN MÌNH</span>
              </div>
              <p class="text-xs font-semibold text-white">Căng cơ liên sườn &amp; xoay thân 90°</p>
              <p class="text-[11px] text-slate-300 leading-relaxed">&bull; N6: Bước chân trái sang ngang, nghiêng lườn sâu.<br>&bull; N7: Thu về thẳng thân.<br>&bull; N8: Đổi nghiêng lườn sang phải.<br>&bull; N9-10: Vặn mình 90° sang trái/phải, hai tay dang ngang.</p>
            </div>

            <!-- Group 3 -->
            <div class="p-3.5 rounded-xl bg-slate-800/80 border border-cyan-500/40 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-cyan-500 text-slate-900">NHỊP 11 - 15</span>
                <span class="text-[11px] font-bold text-cyan-400">GẬP THÂN &amp; NGỒI XỔM</span>
              </div>
              <p class="text-xs font-semibold text-white">Rèn cơ bụng &amp; độ dẻo cột sống</p>
              <p class="text-[11px] text-slate-300 leading-relaxed">&bull; N11: Cúi gập thân sâu, 2 tay chạm 2 mũi chân.<br>&bull; N12: Đứng thẳng vươn tay.<br>&bull; N13-14: Ngồi xổm kiễng gót, 2 tay song song trước ngực, lưng thẳng.<br>&bull; N15: Đứng lên về TTCB.</p>
            </div>

            <!-- Group 4 -->
            <div class="p-3.5 rounded-xl bg-slate-800/80 border border-blue-500/40 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-blue-500 text-slate-900">NHỊP 16 - 20</span>
                <span class="text-[11px] font-bold text-blue-400">DUỖI CHÂN &amp; THĂNG BẰNG</span>
              </div>
              <p class="text-xs font-semibold text-white">Phát triển sức mạnh đùi &amp; thăng bằng</p>
              <p class="text-[11px] text-slate-300 leading-relaxed">&bull; N16-17: Chống tay ngồi xổm, duỗi thẳng chân trái ra sau.<br>&bull; N18: Thu chân trái, duỗi thẳng chân phải ra sau.<br>&bull; N19-20: Đứng lên thăng bằng 1 chân, 2 tay dang ngang giữ ổn định.</p>
            </div>

            <!-- Group 5 -->
            <div class="p-3.5 rounded-xl bg-slate-800/80 border border-amber-500/40 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-amber-500 text-slate-900">NHỊP 21 - 25</span>
                <span class="text-[11px] font-bold text-amber-400">BẬT NHẢY LIÊN HOÀN</span>
              </div>
              <p class="text-xs font-semibold text-white">Rèn sức bật bộc phát &amp; khéo léo</p>
              <p class="text-[11px] text-slate-300 leading-relaxed">&bull; N21: Bật nhảy tách 2 chân sang ngang, 2 tay dang ngang.<br>&bull; N22: Bật nhảy khép chân, vỗ 2 tay lên cao.<br>&bull; N23-24: Lặp lại bật tách và chụm chân nhịp nhàng.<br>&bull; N25: Rơi xuống chùng nhẹ gối hoãn xung.</p>
            </div>

            <!-- Group 6 -->
            <div class="p-3.5 rounded-xl bg-slate-800/80 border border-purple-500/40 space-y-1.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-black bg-purple-500 text-slate-900">NHỊP 26 - 30</span>
                <span class="text-[11px] font-bold text-purple-400">ĐIỀU HÒA &amp; HỒI TĨNH</span>
              </div>
              <p class="text-xs font-semibold text-white">Thả lỏng toàn thân trở về TTCB</p>
              <p class="text-[11px] text-slate-300 leading-relaxed">&bull; N26-27: Nâng đùi chân trái vỗ tay dưới đùi, đổi chân phải.<br>&bull; N28-29: Bước lùi nhẹ nhàng, lắc cổ tay cổ chân, hít sâu thở chậm.<br>&bull; N30: Đưa cơ thể về tư thế đứng nghiêm chuẩn bị.</p>
            </div>
          </div>
        </div>
      `;

    case 'cau-long':
      return `
        <!-- HÌNH MINH HỌA 6: CẦM VỢT & SÂN CẦU LÔNG TIÊU CHUẨN -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-feather"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 6: Kĩ Thuật Cầm Vợt &amp; Sơ Đồ Sân Cầu Lông Tiêu Chuẩn (BWF)</h4>
                <p class="text-[11px] text-emerald-300/80">Cầm thuận tay (V-grip) &bull; Cầm trái tay &bull; Kích thước sân đơn và sân đôi</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Cầu Lông</span>
          </div>

          <div class="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 850 280" class="w-full min-w-[750px] h-auto drop-shadow select-none font-sans" xmlns="http://www.w3.org/2000/svg">
              <!-- Left: Grips comparison -->
              <g transform="translate(15, 15)">
                <rect width="365" height="245" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#10b981" stroke-width="1.5"/>
                <rect x="15" y="15" width="335" height="25" rx="5" fill="#059669" fill-opacity="0.3"/>
                <text x="182" y="32" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="900">KĨ THUẬT CẦM VỢT CHUẨN THỂ THAO</text>

                <!-- Forehand V-grip -->
                <rect x="20" y="52" width="155" height="125" rx="8" fill="#064e3b" fill-opacity="0.4" stroke="#10b981" stroke-width="1"/>
                <text x="97" y="70" text-anchor="middle" fill="#a7f3d0" font-size="10.5" font-weight="800">CẦM THUẬN TAY</text>
                <text x="97" y="84" text-anchor="middle" fill="#34d399" font-size="9" font-weight="700">(Forehand / Chữ V)</text>
                <text x="97" y="105" text-anchor="middle" fill="#f8fafc" font-size="8.5">&bull; Ngón cái &amp; trỏ tạo hình chữ V</text>
                <text x="97" y="120" text-anchor="middle" fill="#f8fafc" font-size="8.5">&bull; Chữ V thẳng hàng cạnh trên cán</text>
                <text x="97" y="135" text-anchor="middle" fill="#f8fafc" font-size="8.5">&bull; Ngón trỏ hơi cách ngón giữa</text>
                <text x="97" y="155" text-anchor="middle" fill="#6ee7b7" font-size="8" font-weight="700">&rarr; Phát cầu, đập cầu, lốp cầu</text>

                <!-- Backhand Grip -->
                <rect x="190" y="52" width="155" height="125" rx="8" fill="#064e3b" fill-opacity="0.4" stroke="#10b981" stroke-width="1"/>
                <text x="267" y="70" text-anchor="middle" fill="#a7f3d0" font-size="10.5" font-weight="800">CẦM TRÁI TAY</text>
                <text x="267" y="84" text-anchor="middle" fill="#34d399" font-size="9" font-weight="700">(Backhand Grip)</text>
                <text x="267" y="105" text-anchor="middle" fill="#f8fafc" font-size="8.5">&bull; Vợt hơi xoay vào trong</text>
                <text x="267" y="120" text-anchor="middle" fill="#f8fafc" font-size="8.5">&bull; Ngón cái tựa vào cạnh rộng cán</text>
                <text x="267" y="135" text-anchor="middle" fill="#f8fafc" font-size="8.5">&bull; Lực bẩy chủ yếu từ ngón cái</text>
                <text x="267" y="155" text-anchor="middle" fill="#6ee7b7" font-size="8" font-weight="700">&rarr; Đỡ đập &amp; đánh cầu bên trái</text>

                <rect x="20" y="188" width="325" height="42" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="0.8"/>
                <text x="182" y="205" text-anchor="middle" fill="#fef3c7" font-size="8.8" font-weight="700">⚠️ Không nắm quá chặt làm cứng cổ tay; thả lỏng để phát lực linh hoạt!</text>
              </g>

              <!-- Right: Badminton Court Dimension -->
              <g transform="translate(400, 15)">
                <rect width="435" height="245" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#38bdf8" stroke-width="1.5"/>
                <rect x="15" y="15" width="405" height="25" rx="5" fill="#0284c7" fill-opacity="0.3"/>
                <text x="217" y="32" text-anchor="middle" fill="#bae6fd" font-size="11" font-weight="900">SƠ ĐỒ SÂN CẦU LÔNG CHUẨN QUỐC TẾ (BWF)</text>

                <!-- Court layout -->
                <rect x="30" y="55" width="375" height="135" fill="#047857" stroke="#ffffff" stroke-width="2"/>
                <!-- Net in middle -->
                <line x1="217" y1="50" x2="217" y2="195" stroke="#ffffff" stroke-width="3"/>
                <!-- Net posts text -->
                <text x="217" y="47" text-anchor="middle" fill="#fde68a" font-size="8.5" font-weight="800">LƯỚI: Cao 1.55m (cột) / 1.524m (giữa)</text>

                <!-- Singles sidelines (inner) -->
                <line x1="30" y1="67" x2="405" y2="67" stroke="#ffffff" stroke-width="1" stroke-dasharray="3,2"/>
                <line x1="30" y1="178" x2="405" y2="178" stroke="#ffffff" stroke-width="1" stroke-dasharray="3,2"/>
                <!-- Short service lines (1.98m from net) -->
                <line x1="162" y1="55" x2="162" y2="190" stroke="#ffffff" stroke-width="1.5"/>
                <line x1="272" y1="55" x2="272" y2="190" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Center service lines -->
                <line x1="30" y1="122" x2="162" y2="122" stroke="#ffffff" stroke-width="1.5"/>
                <line x1="272" y1="122" x2="405" y2="122" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Doubles long service line (0.76m from back) -->
                <line x1="52" y1="55" x2="52" y2="190" stroke="#ffffff" stroke-width="1" stroke-dasharray="3,2"/>
                <line x1="383" y1="55" x2="383" y2="190" stroke="#ffffff" stroke-width="1" stroke-dasharray="3,2"/>

                <!-- Dimensions text -->
                <text x="217" y="208" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="800">Tổng chiều dài sân: 13.40 m</text>
                <text x="217" y="222" text-anchor="middle" fill="#a7f3d0" font-size="8.5">Rộng sân Đôi: 6.10 m &bull; Rộng sân Đơn: 5.18 m</text>
                <text x="217" y="235" text-anchor="middle" fill="#94a3b8" font-size="8">Vạch giao cầu ngắn cách lưới: 1.98 m &bull; Vạch đáy giao cầu đôi cách biên: 0.76 m</text>
              </g>
            </svg>
          </div>
        </div>
      `;

    case 'bong-da':
      return `
        <!-- HÌNH MINH HỌA 7: KĨ THUẬT ĐÁ BÓNG & SÂN BÓNG ĐÁ 11 NGƯỜI -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-futbol"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 7: Phân Tích Kĩ Thuật Đá Bóng &amp; Sơ Đồ Sân Bóng Đá 11 Người Chuẩn FIFA</h4>
                <p class="text-[11px] text-emerald-300/80">Đá mu giữa bàn chân &bull; Đá lòng bàn chân &bull; Quy cách sân 105m x 68m</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Bóng Đá</span>
          </div>

          <div class="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 850 280" class="w-full min-w-[750px] h-auto drop-shadow select-none font-sans" xmlns="http://www.w3.org/2000/svg">
              <!-- Left: 2 Kicking techniques -->
              <g transform="translate(15, 15)">
                <rect width="365" height="245" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#10b981" stroke-width="1.5"/>
                <rect x="15" y="15" width="335" height="25" rx="5" fill="#047857" fill-opacity="0.3"/>
                <text x="182" y="32" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="900">SO SÁNH 2 KĨ THUẬT ĐÁ BÓNG CƠ BẢN</text>

                <!-- Instep kick -->
                <rect x="20" y="52" width="155" height="135" rx="8" fill="#064e3b" fill-opacity="0.4" stroke="#10b981" stroke-width="1"/>
                <text x="97" y="70" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="800">MU GIỮA BÀN CHÂN</text>
                <text x="97" y="84" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="700">(Instep Kick)</text>
                <text x="97" y="105" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Khóa chặt cổ chân</text>
                <text x="97" y="119" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Mũi chân cắm xuống đất</text>
                <text x="97" y="133" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Điểm tiếp xúc: Tâm bóng</text>
                <text x="97" y="150" text-anchor="middle" fill="#fca5a5" font-size="8" font-weight="700">Đặc tính: Căng, rất mạnh</text>
                <text x="97" y="165" text-anchor="middle" fill="#94a3b8" font-size="7.8">Sút cầu môn, chuyền dài</text>

                <!-- Inside kick -->
                <rect x="190" y="52" width="155" height="135" rx="8" fill="#064e3b" fill-opacity="0.4" stroke="#10b981" stroke-width="1"/>
                <text x="267" y="70" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="800">LÒNG BÀN CHÂN</text>
                <text x="267" y="84" text-anchor="middle" fill="#34d399" font-size="8.5" font-weight="700">(Inside Kick)</text>
                <text x="267" y="105" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Chân trụ cách bóng 15-20cm</text>
                <text x="267" y="119" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Bẻ vuông góc bàn chân 90°</text>
                <text x="267" y="133" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Mở rộng khớp háng</text>
                <text x="267" y="150" text-anchor="middle" fill="#6ee7b7" font-size="8" font-weight="700">Đặc tính: Rất chuẩn xác</text>
                <text x="267" y="165" text-anchor="middle" fill="#94a3b8" font-size="7.8">Chuyền cự li ngắn, phối hợp</text>

                <rect x="20" y="196" width="325" height="36" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="0.8"/>
                <text x="182" y="218" text-anchor="middle" fill="#fde68a" font-size="8.5" font-weight="700">Nguyên tắc: Chân trụ vững &rarr; Vung chân lăng đúng hướng &rarr; Khóa cổ chân</text>
              </g>

              <!-- Right: Football pitch FIFA dimensions -->
              <g transform="translate(400, 15)">
                <rect width="435" height="245" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#22c55e" stroke-width="1.5"/>
                <rect x="15" y="15" width="405" height="25" rx="5" fill="#15803d" fill-opacity="0.3"/>
                <text x="217" y="32" text-anchor="middle" fill="#86efac" font-size="11" font-weight="900">SÂN BÓNG ĐÁ 11 NGƯỜI TIÊU CHUẨN FIFA</text>

                <!-- Pitch field -->
                <rect x="30" y="52" width="375" height="145" fill="#15803d" stroke="#ffffff" stroke-width="2"/>
                <!-- Halfway line -->
                <line x1="217" y1="52" x2="217" y2="197" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Center circle (9.15m radius) -->
                <circle cx="217" cy="124" r="32" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <circle cx="217" cy="124" r="2.5" fill="#ffffff"/>

                <!-- Left Penalty area 16m50 -->
                <rect x="30" y="82" width="55" height="85" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Left Goal area 5m50 -->
                <rect x="30" y="100" width="20" height="48" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <circle cx="68" cy="124" r="2" fill="#ffffff"/>
                <!-- Left Goal -->
                <rect x="22" y="108" width="8" height="32" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>

                <!-- Right Penalty area 16m50 -->
                <rect x="350" y="82" width="55" height="85" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Right Goal area 5m50 -->
                <rect x="385" y="100" width="20" height="48" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <circle cx="367" cy="124" r="2" fill="#ffffff"/>
                <!-- Right Goal -->
                <rect x="405" y="108" width="8" height="32" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>

                <text x="217" y="212" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="800">Kích thước sân: Dài 105 m &bull; Rộng 68 m</text>
                <text x="217" y="225" text-anchor="middle" fill="#bbf7d0" font-size="8.5">Cầu môn: Rộng 7.32 m &bull; Cao 2.44 m &bull; Chấm 11m cách cầu môn 11m</text>
                <text x="217" y="238" text-anchor="middle" fill="#94a3b8" font-size="8">Vòng tròn trung tâm R = 9.15 m &bull; Khu 16m50: 40.32m x 16.5m</text>
              </g>
            </svg>
          </div>
        </div>
      `;

    case 'bong-ro':
      return `
        <!-- HÌNH MINH HỌA 8: DẪN BÓNG, NÉM RỔ & SÂN BÓNG RỔ FIBA -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border border-emerald-500/30 shadow-lg">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/40">
                <i class="fa-solid fa-basketball"></i>
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 8: Kĩ Thuật Dẫn Bóng, Ném Rổ 1 Tay &amp; Sơ Đồ Sân Bóng Rổ FIBA</h4>
                <p class="text-[11px] text-emerald-300/80">Dẫn bóng thấp tay &bull; Ném rổ 1 tay trên vai &bull; Sân 28m x 15m &bull; Chiều cao rổ 3.05m</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Bóng Rổ</span>
          </div>

          <div class="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 850 280" class="w-full min-w-[750px] h-auto drop-shadow select-none font-sans" xmlns="http://www.w3.org/2000/svg">
              <!-- Left: Dribble & Shooting Technique -->
              <g transform="translate(15, 15)">
                <rect width="365" height="245" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#f97316" stroke-width="1.5"/>
                <rect x="15" y="15" width="335" height="25" rx="5" fill="#ea580c" fill-opacity="0.3"/>
                <text x="182" y="32" text-anchor="middle" fill="#fdba74" font-size="11" font-weight="900">KĨ THUẬT DẪN BÓNG &amp; NÉM RỔ 1 TAY</text>

                <!-- Dribble card -->
                <rect x="20" y="52" width="155" height="135" rx="8" fill="#7c2d12" fill-opacity="0.35" stroke="#f97316" stroke-width="1"/>
                <text x="97" y="70" text-anchor="middle" fill="#fdba74" font-size="10" font-weight="800">DẪN BÓNG THẤP TAY</text>
                <text x="97" y="84" text-anchor="middle" fill="#fb923c" font-size="8.5" font-weight="700">(Low Dribble)</text>
                <text x="97" y="105" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Trọng tâm hạ thấp, gối chùng</text>
                <text x="97" y="119" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Bóng nảy dưới tầm thắt lưng</text>
                <text x="97" y="133" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Xòe ngón miết bóng nhịp nhàng</text>
                <text x="97" y="147" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Mắt ngẩng quan sát sân</text>
                <text x="97" y="165" text-anchor="middle" fill="#fdba74" font-size="8" font-weight="700">Dùng bảo vệ bóng khi bị áp sát</text>

                <!-- Shooting card -->
                <rect x="190" y="52" width="155" height="135" rx="8" fill="#7c2d12" fill-opacity="0.35" stroke="#f97316" stroke-width="1"/>
                <text x="267" y="70" text-anchor="middle" fill="#fdba74" font-size="10" font-weight="800">NÉM RỔ 1 TAY TRÊN VAI</text>
                <text x="267" y="84" text-anchor="middle" fill="#fb923c" font-size="8.5" font-weight="700">(One-hand Set Shot)</text>
                <text x="267" y="105" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Khuỷu tay vuông góc 90°</text>
                <text x="267" y="119" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Bóng trên đầu gối &amp; trước trán</text>
                <text x="267" y="133" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Lực từ chân &rarr; hông &rarr; tay</text>
                <text x="267" y="147" text-anchor="middle" fill="#f8fafc" font-size="8.2">&bull; Miết cổ tay tạo bóng xoáy ngược</text>
                <text x="267" y="165" text-anchor="middle" fill="#6ee7b7" font-size="8" font-weight="700">Quỹ đạo bóng hình cầu vồng</text>

                <rect x="20" y="196" width="325" height="36" rx="6" fill="#0f172a" stroke="#f97316" stroke-width="0.8"/>
                <text x="182" y="218" text-anchor="middle" fill="#fed7aa" font-size="8.5" font-weight="700">Lưu ý: Không dùng lòng bàn tay đập bóng; không gập khuỷu tay quá nhọn!</text>
              </g>

              <!-- Right: Basketball Court FIBA dimensions -->
              <g transform="translate(400, 15)">
                <rect width="435" height="245" rx="12" fill="#1e293b" fill-opacity="0.9" stroke="#ea580c" stroke-width="1.5"/>
                <rect x="15" y="15" width="405" height="25" rx="5" fill="#c2410c" fill-opacity="0.3"/>
                <text x="217" y="32" text-anchor="middle" fill="#ffedd5" font-size="11" font-weight="900">SÂN BÓNG RỔ TIÊU CHUẨN FIBA</text>

                <!-- Hardwood Court -->
                <rect x="30" y="52" width="375" height="145" fill="#b45309" stroke="#ffffff" stroke-width="2"/>
                <!-- Center line -->
                <line x1="217" y1="52" x2="217" y2="197" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Center circle (3.60m diameter) -->
                <circle cx="217" cy="124" r="24" fill="none" stroke="#ffffff" stroke-width="1.5"/>

                <!-- Left 3-point line (6.75m) -->
                <path d="M 30 75 L 60 75 A 58 58 0 0 1 60 174 L 30 174" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Left Key / Free throw lane -->
                <rect x="30" y="98" width="65" height="53" fill="#9a3412" fill-opacity="0.4" stroke="#ffffff" stroke-width="1.5"/>
                <path d="M 95 98 A 26 26 0 0 1 95 151" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Left Backboard & Rim -->
                <line x1="45" y1="110" x2="45" y2="138" stroke="#ffffff" stroke-width="3"/>
                <circle cx="50" cy="124" r="5" fill="none" stroke="#f97316" stroke-width="2"/>

                <!-- Right 3-point line (6.75m) -->
                <path d="M 405 75 L 375 75 A 58 58 0 0 0 375 174 L 405 174" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Right Key / Free throw lane -->
                <rect x="340" y="98" width="65" height="53" fill="#9a3412" fill-opacity="0.4" stroke="#ffffff" stroke-width="1.5"/>
                <path d="M 340 98 A 26 26 0 0 0 340 151" fill="none" stroke="#ffffff" stroke-width="1.5"/>
                <!-- Right Backboard & Rim -->
                <line x1="390" y1="110" x2="390" y2="138" stroke="#ffffff" stroke-width="3"/>
                <circle cx="385" cy="124" r="5" fill="none" stroke="#f97316" stroke-width="2"/>

                <text x="217" y="212" text-anchor="middle" fill="#f8fafc" font-size="9" font-weight="800">Kích thước sân: Dài 28 m &bull; Rộng 15 m</text>
                <text x="217" y="225" text-anchor="middle" fill="#fed7aa" font-size="8.5">Chiều cao vành rổ: 3.05 m &bull; Bảng rổ: 1.80 m x 1.05 m</text>
                <text x="217" y="238" text-anchor="middle" fill="#94a3b8" font-size="8">Vạch 3 điểm bán kính: 6.75 m &bull; Vạch ném phạt cách bảng rổ: 4.60 m</text>
              </g>
            </svg>
          </div>
        </div>
      `;

    default:
      return '';
  }
}

module.exports = { getTopicIllustration };
