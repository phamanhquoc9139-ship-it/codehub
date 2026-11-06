// Technical illustrations helper for GDTC 7
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
                <h4 class="text-xs sm:text-sm font-black text-white tracking-wide uppercase">Hình 1: Đồ Họa Phân Tích 4 Yếu Tố Môi Trường &amp; Nguyên Tắc An Toàn Y Học Thể Thao</h4>
                <p class="text-[11px] text-emerald-300/80">Ứng dụng nhiệt độ, độ ẩm, ánh sáng và địa hình vào rèn luyện thể lực lớp 7</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Chuẩn GDPT 2018</span>
          </div>

          <!-- SVG Diagram: 4 Yếu tố môi trường -->
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

              <!-- Center Core Circle -->
              <circle cx="425" cy="180" r="48" fill="#1e293b" stroke="#10b981" stroke-width="2.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.4))"/>
              <text x="425" y="174" text-anchor="middle" fill="#34d399" font-size="11" font-weight="900" letter-spacing="0.5">MÔI TRƯỜNG</text>
              <text x="425" y="190" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="700">TỰ NHIÊN</text>
              <text x="425" y="204" text-anchor="middle" fill="#94a3b8" font-size="8.5">GDTC 7</text>

              <!-- Connection Lines -->
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

          <!-- Bottom Protocol Card -->
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
    default:
      return '';
  }
}

console.log("Illustration helper loaded successfully");
