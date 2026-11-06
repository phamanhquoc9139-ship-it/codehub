// gdtc9_lesson_illustrations.js - 23 hình mô phỏng vector SVG riêng biệt cho từng bài học môn GDTC 9

const lessonIllustrations = {
  // PHẦN I: KIẾN THỨC CHUNG
  'bai-ktc-1': `
    <svg viewBox="0 0 700 180" class="w-full h-auto max-h-[200px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="170" rx="14" fill="#f0fdf4" class="dark:fill-emerald-950/30" stroke="#86efac" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#166534" class="dark:fill-emerald-300">MÔ PHỎNG QUY TRÌNH TẮM KHÔNG KHÍ (15–30 PHÚT BUỔI SÁNG)</text>
      
      <!-- Step 1 -->
      <g transform="translate(30, 40)">
        <rect width="180" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bbf7d0" stroke-width="1"/>
        <circle cx="25" cy="25" r="14" fill="#dcfce7"/>
        <text x="25" y="29" text-anchor="middle" font-size="12">🌅</text>
        <text x="48" y="28" font-size="11" font-weight="bold" fill="#15803d" class="dark:fill-emerald-300">1. Không gian &amp; Giờ</text>
        <text x="12" y="55" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Buổi sáng sớm trong lành</text>
        <text x="12" y="73" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Nơi thoáng đãng, sạch sẽ</text>
        <text x="12" y="91" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Tránh gió lùa, sương muối</text>
      </g>
      <!-- Arrow -->
      <path d="M 225 95 L 245 95" stroke="#22c55e" stroke-width="2" marker-end="url(#arr-green)"/>
      
      <!-- Step 2 -->
      <g transform="translate(255, 40)">
        <rect width="180" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bbf7d0" stroke-width="1"/>
        <circle cx="25" cy="25" r="14" fill="#dcfce7"/>
        <text x="25" y="29" text-anchor="middle" font-size="12">🧘</text>
        <text x="48" y="28" font-size="11" font-weight="bold" fill="#15803d" class="dark:fill-emerald-300">2. Vận động &amp; Thở</text>
        <text x="12" y="55" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Đi bộ nhẹ hoặc ngồi thư giãn</text>
        <text x="12" y="73" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Hít sâu, thở đều đặn</text>
        <text x="12" y="91" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Trang phục mỏng, thoáng mát</text>
      </g>
      <!-- Arrow -->
      <path d="M 450 95 L 470 95" stroke="#22c55e" stroke-width="2"/>

      <!-- Step 3 -->
      <g transform="translate(480, 40)">
        <rect width="190" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bbf7d0" stroke-width="1"/>
        <circle cx="25" cy="25" r="14" fill="#dcfce7"/>
        <text x="25" y="29" text-anchor="middle" font-size="12">⚡</text>
        <text x="48" y="28" font-size="11" font-weight="bold" fill="#15803d" class="dark:fill-emerald-300">3. Lợi ích sức khoẻ</text>
        <text x="12" y="55" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Tăng cường hô hấp &amp; tuần hoàn</text>
        <text x="12" y="73" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Thư giãn hệ thần kinh</text>
        <text x="12" y="91" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Nâng cao khả năng thích nghi</text>
      </g>
    </svg>
  `,

  'bai-ktc-2': `
    <svg viewBox="0 0 700 180" class="w-full h-auto max-h-[200px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="170" rx="14" fill="#f0f9ff" class="dark:fill-sky-950/30" stroke="#7dd3fc" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">TIẾN TRÌNH RÈN LUYỆN THÍCH ỨNG NƯỚC LẠNH AN TOÀN</text>

      <g transform="translate(30, 40)">
        <rect width="180" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bae6fd" stroke-width="1"/>
        <text x="90" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">1. Khởi đầu từ từ</text>
        <text x="12" y="50" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Nhiệt độ nước mát vừa phải</text>
        <text x="12" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Thời gian ngắn: 1–2 phút</text>
        <text x="12" y="86" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Dội nước từ chân lên thân</text>
      </g>
      <path d="M 225 95 L 245 95" stroke="#0284c7" stroke-width="2"/>

      <g transform="translate(255, 40)">
        <rect width="180" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bae6fd" stroke-width="1"/>
        <text x="90" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">2. Tăng dần thích nghi</text>
        <text x="12" y="50" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Hạ dần nhiệt độ nước từ từ</text>
        <text x="12" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Kéo dài thời gian khi quen</text>
        <text x="12" y="86" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Tôi luyện mao mạch dưới da</text>
      </g>
      <path d="M 450 95 L 470 95" stroke="#0284c7" stroke-width="2"/>

      <g transform="translate(480, 40)">
        <rect width="190" height="115" rx="10" fill="#fff1f2" class="dark:fill-rose-950/40" stroke="#fecdd3" stroke-width="1"/>
        <text x="95" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#e11d48">⚠️ Cảnh báo an toàn</text>
        <text x="12" y="50" font-size="9.5" fill="#be123c" class="dark:fill-rose-300">• KHÔNG tắm khi vừa mệt nóng</text>
        <text x="12" y="68" font-size="9.5" fill="#be123c" class="dark:fill-rose-300">• Dừng ngay nếu rét run da gà</text>
        <text x="12" y="86" font-size="9.5" fill="#be123c" class="dark:fill-rose-300">• Lau khô người ngay, mặc ấm</text>
      </g>
    </svg>
  `,

  'bai-ktc-3': `
    <svg viewBox="0 0 700 180" class="w-full h-auto max-h-[200px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="170" rx="14" fill="#fffbeb" class="dark:fill-amber-950/30" stroke="#fcd34d" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">KHUNG GIỜ TẮM NẮNG TỔNG HỢP VITAMIN D VÀ BẢO VỆ DA</text>
      
      <g transform="translate(30, 40)">
        <rect width="200" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#fde68a" stroke-width="1"/>
        <text x="100" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#d97706">☀️ Khung giờ mùa hè</text>
        <text x="100" y="50" text-anchor="middle" font-size="14" font-weight="black" fill="#b45309">6:30 – 7:30 SÁNG</text>
        <text x="12" y="75" font-size="9" fill="#78350f" class="dark:fill-amber-300">• Nắng sớm dịu, giàu tia UVB có lợi</text>
        <text x="12" y="93" font-size="9" fill="#78350f" class="dark:fill-amber-300">• Tránh nắng gắt sau 10:00 trưa</text>
      </g>

      <g transform="translate(250, 40)">
        <rect width="200" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#fde68a" stroke-width="1"/>
        <text x="100" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#d97706">❄️ Khung giờ mùa đông</text>
        <text x="100" y="50" text-anchor="middle" font-size="14" font-weight="black" fill="#b45309">7:00 – 9:00 SÁNG</text>
        <text x="12" y="75" font-size="9" fill="#78350f" class="dark:fill-amber-300">• Đón nắng ấm tan sương</text>
        <text x="12" y="93" font-size="9" fill="#78350f" class="dark:fill-amber-300">• Giúp cơ thể hấp thu Canxi tối ưu</text>
      </g>

      <g transform="translate(470, 40)">
        <rect width="200" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#fde68a" stroke-width="1"/>
        <text x="100" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#d97706">🛡️ Biện pháp bảo vệ</text>
        <text x="12" y="50" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Đội mũ che mặt và gáy</text>
        <text x="12" y="70" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Đeo kính râm chống chói</text>
        <text x="12" y="90" font-size="9.5" fill="#475569" class="dark:fill-slate-300">• Uống đủ nước, bắt đầu 5-10p</text>
      </g>
    </svg>
  `,

  'bai-ktc-4': `
    <svg viewBox="0 0 700 170" class="w-full h-auto max-h-[190px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="160" rx="14" fill="#faf5ff" class="dark:fill-purple-950/30" stroke="#d8b4fe" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#7e22ce" class="dark:fill-purple-300">TÁC ĐỘNG CƠ SINH HỌC CỦA CÁC ĐỊA HÌNH RÈN LUYỆN</text>

      <g transform="translate(25, 40)">
        <rect width="150" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#e9d5ff"/>
        <text x="75" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8">1. Đường bằng</text>
        <text x="10" y="48" font-size="9" fill="#334155" class="dark:fill-slate-300">• Tốc độ tối đa</text>
        <text x="10" y="66" font-size="9" fill="#334155" class="dark:fill-slate-300">• Chạy vừa sức nhịp nhàng</text>
        <text x="10" y="84" font-size="9" fill="#334155" class="dark:fill-slate-300">• Ít chấn thương khớp</text>
      </g>

      <g transform="translate(190, 40)">
        <rect width="150" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#e9d5ff"/>
        <text x="75" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8">2. Đường dốc</text>
        <text x="10" y="48" font-size="9" fill="#334155" class="dark:fill-slate-300">• Lên dốc: Tăng sức mạnh</text>
        <text x="10" y="66" font-size="9" fill="#334155" class="dark:fill-slate-300">• Xuống dốc: Kiểm soát tần số</text>
        <text x="10" y="84" font-size="9" fill="#334155" class="dark:fill-slate-300">• Thận trọng tránh ngã</text>
      </g>

      <g transform="translate(355, 40)">
        <rect width="150" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#e9d5ff"/>
        <text x="75" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8">3. Nước nông</text>
        <text x="10" y="48" font-size="9" fill="#334155" class="dark:fill-slate-300">• Lực cản nước rèn cơ đùi</text>
        <text x="10" y="66" font-size="9" fill="#334155" class="dark:fill-slate-300">• Đi, chạy, bật nhảy</text>
        <text x="10" y="84" font-size="9" fill="#334155" class="dark:fill-slate-300">• Hoãn xung an toàn khớp</text>
      </g>

      <g transform="translate(520, 40)">
        <rect width="155" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#e9d5ff"/>
        <text x="77" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8">4. Chướng ngại vật</text>
        <text x="10" y="48" font-size="9" fill="#334155" class="dark:fill-slate-300">• Rèn phản xạ khéo léo</text>
        <text x="10" y="66" font-size="9" fill="#334155" class="dark:fill-slate-300">• Giữ thăng bằng cơ thể</text>
        <text x="10" y="84" font-size="9" fill="#334155" class="dark:fill-slate-300">• Xử lí tình huống nhanh</text>
      </g>
    </svg>
  `,

  'bai-ktc-5': `
    <svg viewBox="0 0 700 170" class="w-full h-auto max-h-[190px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="160" rx="14" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0f172a" class="dark:fill-white">BIỂU ĐỒ NĂNG LƯỢNG 4 MỤC TIÊU VẬN ĐỘNG THEO SGK</text>
      
      <!-- Bar 1 -->
      <g transform="translate(30, 45)">
        <text x="0" y="15" font-size="10" font-weight="bold" fill="#dc2626">Tốc độ (100m):</text>
        <rect x="110" y="4" width="174" height="16" rx="4" fill="#ef4444"/>
        <text x="290" y="16" font-size="10" font-weight="bold" fill="#b91c1c">Carbs ~58%</text>
      </g>

      <!-- Bar 2 -->
      <g transform="translate(30, 75)">
        <text x="0" y="15" font-size="10" font-weight="bold" fill="#2563eb">Sức bền (Chạy dài):</text>
        <rect x="110" y="4" width="90" height="16" rx="4" fill="#3b82f6"/>
        <text x="205" y="16" font-size="10" font-weight="bold" fill="#1d4ed8">Lipid ~30%</text>
      </g>

      <!-- Bar 3 -->
      <g transform="translate(30, 105)">
        <text x="0" y="15" font-size="10" font-weight="bold" fill="#059669">Sức mạnh (Nhảy cao):</text>
        <rect x="110" y="4" width="130" height="16" rx="4" fill="#10b981"/>
        <text x="245" y="16" font-size="10" font-weight="bold" fill="#047857">Protein > 2g/kg (>18%)</text>
      </g>

      <!-- Bar 4 -->
      <g transform="translate(30, 135)">
        <text x="0" y="15" font-size="10" font-weight="bold" fill="#d97706">Môn bóng (Đá, Rổ):</text>
        <rect x="110" y="4" width="165" height="16" rx="4" fill="#f59e0b"/>
        <text x="280" y="16" font-size="10" font-weight="bold" fill="#b45309">Phối hợp Nhanh – Mạnh – Bền</text>
      </g>

      <!-- Note right -->
      <g transform="translate(480, 45)">
        <rect width="190" height="105" rx="8" fill="#f1f5f9" class="dark:fill-slate-800" stroke="#cbd5e1"/>
        <text x="12" y="24" font-size="10" font-weight="bold" fill="#334155" class="dark:fill-slate-200">💡 Lưu ý vàng:</text>
        <text x="12" y="45" font-size="9" fill="#475569" class="dark:fill-slate-300">• Không ăn đồ chiên xào sát giờ</text>
        <text x="12" y="65" font-size="9" fill="#475569" class="dark:fill-slate-300">• Bù nước từng ngụm nhỏ 15p/lần</text>
        <text x="12" y="85" font-size="9" fill="#475569" class="dark:fill-slate-300">• Ăn nhẹ trước thi đấu 1.5 - 2h</text>
      </g>
    </svg>
  `,

  // PHẦN II: VẬN ĐỘNG CƠ BẢN
  'bai-chay-100m-1': `
    <svg viewBox="0 0 700 200" class="w-full h-auto max-h-[220px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="190" rx="14" fill="#fff1f2" class="dark:fill-rose-950/30" stroke="#fecdd3" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">MÔ PHỎNG 3 KHẨU LỆNH XUẤT PHÁT THẤP &amp; GÓC ĐẠP LAO 100M</text>

      <!-- Pos 1: Vào chỗ -->
      <g transform="translate(25, 45)">
        <rect width="195" height="135" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#fda4af"/>
        <text x="97" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#e11d48">1. "VÀO CHỖ"</text>
        <circle cx="97" cy="55" r="22" fill="#ffe4e6" class="dark:fill-rose-950/60"/>
        <text x="97" y="61" text-anchor="middle" font-size="16">🧎</text>
        <text x="10" y="95" font-size="9" fill="#475569" class="dark:fill-slate-300">• 2 tay sau vạch, rộng bằng vai</text>
        <text x="10" y="112" font-size="9" fill="#475569" class="dark:fill-slate-300">• Chân thuận trước, gối sau chạm đất</text>
        <text x="10" y="129" font-size="9" font-weight="bold" fill="#be123c">Góc gối trước ~90°</text>
      </g>

      <!-- Pos 2: Sẵn sàng -->
      <g transform="translate(245, 45)">
        <rect width="205" height="135" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#fda4af"/>
        <text x="102" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#e11d48">2. "SẴN SÀNG"</text>
        <circle cx="102" cy="55" r="22" fill="#ffe4e6" class="dark:fill-rose-950/60"/>
        <text x="102" y="61" text-anchor="middle" font-size="16">📐</text>
        <text x="10" y="95" font-size="9" fill="#475569" class="dark:fill-slate-300">• Hông nâng cao hơn vai 10–20cm</text>
        <text x="10" y="112" font-size="9" fill="#475569" class="dark:fill-slate-300">• Trọng tâm đổ về phía trước</text>
        <text x="10" y="129" font-size="9" font-weight="bold" fill="#be123c">Mắt nhìn trước 1–2m nghe lệnh</text>
      </g>

      <!-- Pos 3: Rời bàn đạp & Chạy lao -->
      <g transform="translate(475, 45)">
        <rect width="200" height="135" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#fda4af"/>
        <text x="100" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#e11d48">3. "CHẠY!" (ĐẠP LAO)</text>
        <circle cx="100" cy="55" r="22" fill="#ffe4e6" class="dark:fill-rose-950/60"/>
        <text x="100" y="61" text-anchor="middle" font-size="16">🏃💨</text>
        <text x="10" y="95" font-size="9" fill="#475569" class="dark:fill-slate-300">• Đạp cực mạnh 2 bàn đạp</text>
        <text x="10" y="112" font-size="9" fill="#475569" class="dark:fill-slate-300">• Thân ngả trước, bước đầu ngắn</text>
        <text x="10" y="129" font-size="9" font-weight="bold" fill="#be123c">Tăng tốc 15–25m đầu</text>
      </g>
    </svg>
  `,

  'bai-chay-100m-2': `
    <svg viewBox="0 0 700 180" class="w-full h-auto max-h-[200px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="170" rx="14" fill="#eff6ff" class="dark:fill-blue-950/30" stroke="#93c5fd" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">KĨ THUẬT CHẠY GIỮA QUÃNG (MAX SPEED) VÀ GẬP THÂN VỀ ĐÍCH</text>

      <g transform="translate(30, 40)">
        <rect width="305" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bfdbfe"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">🏃 CHẠY GIỮA QUÃNG (25M – 95M)</text>
        <text x="15" y="50" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Góc ngả thân: khoảng 10° – 15° so với phương thẳng đứng</text>
        <text x="15" y="70" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Góc tay: Khuỷu tay gập vuông góc ~90°, đánh so le nhịp nhàng</text>
        <text x="15" y="90" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Chân: Đạp sau nhanh, mạnh; tiếp xúc nửa trước bàn chân</text>
      </g>

      <g transform="translate(365, 40)">
        <rect width="305" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bfdbfe"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">🏁 CHẠM DÂY ĐÍCH (100M)</text>
        <text x="15" y="50" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Không giảm tốc độ trước vạch đích</text>
        <text x="15" y="70" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Ở bước cuối: Gập thân đánh ngực hoặc xoay vai chạm đích</text>
        <text x="15" y="90" font-size="9.5" font-weight="bold" fill="#b91c1c">• Tuyệt đối không nhảy vồ đích; qua đích giảm tốc từ từ</text>
      </g>
    </svg>
  `,

  'bai-nhay-cao-1': `
    <svg viewBox="0 0 700 180" class="w-full h-auto max-h-[200px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="170" rx="14" fill="#f0fdf4" class="dark:fill-emerald-950/30" stroke="#86efac" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#15803d" class="dark:fill-emerald-300">MÔ PHỎNG GÓC ĐÀ 30°–40° VÀ KĨ THUẬT ĐẶT CHÂN GIẬM NHẢY</text>

      <g transform="translate(30, 40)">
        <rect width="305" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bbf7d0"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">📐 ĐƯỜNG CHẠY ĐÀ CHẾCH</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Góc chạy đà chếch 30°–40° so với mặt phẳng xà</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• 6–9 bước đà tăng dần tốc độ có kiểm soát</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Bước áp chót dài hơn, hạ thấp trọng tâm tích luỹ lực</text>
      </g>

      <g transform="translate(365, 40)">
        <rect width="305" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bbf7d0"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">🦶 KĨ THUẬT GIẬM NHẢY</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Điểm giậm cách xà khoảng 60–80 cm</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Đặt chân từ gót chuyển nhanh sang cả bàn chân</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Chân lăng đá mạnh lên cao, 2 tay đánh mạnh hỗ trợ</text>
      </g>
    </svg>
  `,

  'bai-nhay-cao-2': `
    <svg viewBox="0 0 700 180" class="w-full h-auto max-h-[200px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="170" rx="14" fill="#fefce8" class="dark:fill-amber-950/30" stroke="#fef08a" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#a16207" class="dark:fill-amber-300">TƯ THẾ TRÊN KHÔNG NẰM NGHIÊNG QUA XÀ VÀ TIẾP ĐẤT</text>

      <g transform="translate(30, 40)">
        <rect width="305" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#fef08a"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">🤸 QUA XÀ NẰM NGHIÊNG</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Chân lăng qua xà trước, thân xoay nằm nghiêng</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Ngực và bụng song song với thanh xà</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Nhanh chóng co chân giậm sát thân tránh chạm xà</text>
      </g>

      <g transform="translate(365, 40)">
        <rect width="305" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#fef08a"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">🛬 TIẾP ĐẤT AN TOÀN</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Tiếp đất chủ động bằng chân giậm nhảy</text>
        <text x="15" y="68" font-size="9.5" font-weight="bold" fill="#15803d">• Khuỵu gối sâu để hoãn xung giảm lực</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Dùng hai tay hỗ trợ thăng bằng; không chống tay cứng</text>
      </g>
    </svg>
  `,

  'bai-nhay-cao-3': `
    <svg viewBox="0 0 700 190" class="w-full h-auto max-h-[210px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="180" rx="14" fill="#eef2ff" class="dark:fill-indigo-950/30" stroke="#a5b4fc" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#4338ca" class="dark:fill-indigo-300">SƠ ĐỒ PHỐI HỢP LIÊN HOÀN 4 PHA NHẢY CAO NẰM NGHIÊNG (TRANG 29 SGK)</text>

      <g transform="translate(20, 45)">
        <!-- Phase 1 -->
        <rect width="145" height="120" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#c7d2fe"/>
        <text x="72" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#4f46e5">1. Đà 6–9 bước</text>
        <text x="8" y="45" font-size="9" fill="#334155" class="dark:fill-slate-300">• Góc đà 30°–40°</text>
        <text x="8" y="65" font-size="9" fill="#334155" class="dark:fill-slate-300">• Tăng tốc nhịp nhàng</text>
        <text x="8" y="85" font-size="9" fill="#334155" class="dark:fill-slate-300">• 3 bước cuối hạ thấp</text>
        <text x="8" y="105" font-size="9" font-weight="bold" fill="#4338ca">Không khựng đà</text>
      </g>
      <path d="M 170 105 L 185 105" stroke="#4f46e5" stroke-width="2"/>

      <g transform="translate(190, 45)">
        <!-- Phase 2 -->
        <rect width="145" height="120" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#c7d2fe"/>
        <text x="72" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#4f46e5">2. Giậm cực mạnh</text>
        <text x="8" y="45" font-size="9" fill="#334155" class="dark:fill-slate-300">• Cách xà 60–80cm</text>
        <text x="8" y="65" font-size="9" fill="#334155" class="dark:fill-slate-300">• Gót sang cả bàn</text>
        <text x="8" y="85" font-size="9" fill="#334155" class="dark:fill-slate-300">• Đá lăng &amp; tay vung</text>
        <text x="8" y="105" font-size="9" font-weight="bold" fill="#4338ca">Bật cao không lao xà</text>
      </g>
      <path d="M 340 105 L 355 105" stroke="#4f46e5" stroke-width="2"/>

      <g transform="translate(360, 45)">
        <!-- Phase 3 -->
        <rect width="145" height="120" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#c7d2fe"/>
        <text x="72" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#4f46e5">3. Nằm nghiêng</text>
        <text x="8" y="45" font-size="9" fill="#334155" class="dark:fill-slate-300">• Thân song song xà</text>
        <text x="8" y="65" font-size="9" fill="#334155" class="dark:fill-slate-300">• Chân lăng qua trước</text>
        <text x="8" y="85" font-size="9" fill="#334155" class="dark:fill-slate-300">• Co nhanh chân giậm</text>
        <text x="8" y="105" font-size="9" font-weight="bold" fill="#4338ca">Tránh chạm xà</text>
      </g>
      <path d="M 510 105 L 525 105" stroke="#4f46e5" stroke-width="2"/>

      <g transform="translate(530, 45)">
        <!-- Phase 4 -->
        <rect width="145" height="120" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#c7d2fe"/>
        <text x="72" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#4f46e5">4. Tiếp đất êm</text>
        <text x="8" y="45" font-size="9" fill="#334155" class="dark:fill-slate-300">• Tiếp bằng chân giậm</text>
        <text x="8" y="65" font-size="9" fill="#334155" class="dark:fill-slate-300">• Khuỵu gối hoãn xung</text>
        <text x="8" y="85" font-size="9" fill="#334155" class="dark:fill-slate-300">• Rơi giữa đệm/cát</text>
        <text x="8" y="105" font-size="9" font-weight="bold" fill="#4338ca">An toàn tuyệt đối</text>
      </g>
    </svg>
  `,

  'bai-chay-tb-1': `
    <svg viewBox="0 0 700 170" class="w-full h-auto max-h-[190px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="160" rx="14" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0f172a" class="dark:fill-white">XUẤT PHÁT CAO &amp; PHÂN PHỐI SỨC ĐẦU CỰ LI CHẠY TRUNG BÌNH</text>

      <g transform="translate(30, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#e2e8f0"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">🚶 TƯ THẾ XUẤT PHÁT CAO</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Chân trước sát sau vạch xuất phát, chân sau cách 1 bàn chân</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Gối hơi khuỵu, trọng tâm dồn lên chân trước; thân ngả trước</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Hai tay co tự nhiên ngang hông; mắt nhìn trước 3–5m</text>
      </g>

      <g transform="translate(365, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#e2e8f0"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">⚖️ TĂNG TỐC &amp; VÀO NHỊP CHẠY</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Đạp chân xuất phát và tăng tốc có kiểm soát</text>
        <text x="15" y="68" font-size="9.5" font-weight="bold" fill="#b91c1c">• Tuyệt đối không bung hết sức ở những mét đầu tiên</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Nhanh chóng chuyển sang nhịp chạy bền duy trì thể lực</text>
      </g>
    </svg>
  `,

  'bai-chay-tb-2': `
    <svg viewBox="0 0 700 180" class="w-full h-auto max-h-[200px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="170" rx="14" fill="#fff1f2" class="dark:fill-rose-950/30" stroke="#fecdd3" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">KĨ THUẬT ĐƯỜNG CONG, NHỊP THỞ 2:2 VÀ VƯỢT QUA "CỰC ĐIỂM"</text>

      <g transform="translate(30, 40)">
        <rect width="305" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#fda4af"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#e11d48">🔄 CHẠY ĐƯỜNG CONG &amp; THỞ</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Thân nghiêng vào trong cua triệt tiêu lực ly tâm</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Tay phải đánh rộng biên độ hơn tay trái</text>
        <text x="15" y="88" font-size="9.5" font-weight="bold" fill="#047857">• Nhịp thở: 2 bước hít vào – 2 bước thở ra sâu</text>
      </g>

      <g transform="translate(365, 40)">
        <rect width="305" height="115" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#fda4af"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#e11d48">⚡ VƯỢT "CỰC ĐIỂM" (DEAD POINT)</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Khi tức ngực khó thở: Giữ bình tĩnh, không dừng lại</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Giảm nhẹ tốc độ, tăng độ sâu nhịp thở bằng miệng/mũi</text>
        <text x="15" y="88" font-size="9.5" font-weight="bold" fill="#1d4ed8">• Đón "Điểm hồi phục" (Second wind) tiếp tục về đích</text>
      </g>
    </svg>
  `,

  'bai-the-duc-1': `
    <svg viewBox="0 0 700 170" class="w-full h-auto max-h-[190px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="160" rx="14" fill="#faf5ff" class="dark:fill-purple-950/30" stroke="#d8b4fe" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#7e22ce" class="dark:fill-purple-300">BÀI THỂ DỤC NHỊP ĐIỆU - PHẦN 1 (ĐỘNG TÁC 1 ĐẾN 4)</text>

      <g transform="translate(20, 40)">
        <rect width="150" height="105" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#e9d5ff"/>
        <text x="75" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#6b21a8">1. Giậm chân tại chỗ</text>
        <text x="10" y="48" font-size="9" fill="#334155" class="dark:fill-slate-300">• Bước luân phiên</text>
        <text x="10" y="68" font-size="9" fill="#334155" class="dark:fill-slate-300">• Tay đánh tự nhiên</text>
        <text x="10" y="88" font-size="9" fill="#334155" class="dark:fill-slate-300">• Thân thẳng, vai thả lỏng</text>
      </g>

      <g transform="translate(185, 40)">
        <rect width="150" height="105" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#e9d5ff"/>
        <text x="75" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#6b21a8">2. Thu chân tay cao</text>
        <text x="10" y="48" font-size="9" fill="#334155" class="dark:fill-slate-300">• Bước sang bên, thu chân</text>
        <text x="10" y="68" font-size="9" fill="#334155" class="dark:fill-slate-300">• Tay mở chữ V cao</text>
        <text x="10" y="88" font-size="9" fill="#334155" class="dark:fill-slate-300">• Đổi bên nhịp nhàng</text>
      </g>

      <g transform="translate(350, 40)">
        <rect width="150" height="105" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#e9d5ff"/>
        <text x="75" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#6b21a8">3. Bật tách chụm</text>
        <text x="10" y="48" font-size="9" fill="#334155" class="dark:fill-slate-300">• Bật 2 chân tách rộng</text>
        <text x="10" y="68" font-size="9" fill="#334155" class="dark:fill-slate-300">• Bật chụm lại nhẹ nhàng</text>
        <text x="10" y="88" font-size="9" fill="#334155" class="dark:fill-slate-300">• Nửa trước bàn chân</text>
      </g>

      <g transform="translate(515, 40)">
        <rect width="165" height="105" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#e9d5ff"/>
        <text x="82" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#6b21a8">4. Vặn mình</text>
        <text x="10" y="48" font-size="9" fill="#334155" class="dark:fill-slate-300">• Bước chéo nâng gối</text>
        <text x="10" y="68" font-size="9" fill="#334155" class="dark:fill-slate-300">• Xoay thân có kiểm soát</text>
        <text x="10" y="88" font-size="9" fill="#334155" class="dark:fill-slate-300">• Tay xoay theo hướng thân</text>
      </g>
    </svg>
  `,

  'bai-the-duc-2': `
    <svg viewBox="0 0 700 170" class="w-full h-auto max-h-[190px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="160" rx="14" fill="#ecfdf5" class="dark:fill-emerald-950/30" stroke="#a7f3d0" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">BÀI THỂ DỤC NHỊP ĐIỆU - PHẦN 2 (ĐỘNG TÁC 5 ĐẾN 8 &amp; GHÉP NHẠC)</text>

      <g transform="translate(20, 40)">
        <rect width="150" height="105" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#bbf7d0"/>
        <text x="75" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">5. Đặt gót</text>
        <text x="10" y="48" font-size="9" fill="#334155" class="dark:fill-slate-300">• Gót chân đưa ra trước</text>
        <text x="10" y="68" font-size="9" fill="#334155" class="dark:fill-slate-300">• Chân kia khuỵu nhẹ</text>
        <text x="10" y="88" font-size="9" fill="#334155" class="dark:fill-slate-300">• Đổi chân theo nhịp</text>
      </g>

      <g transform="translate(185, 40)">
        <rect width="150" height="105" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#bbf7d0"/>
        <text x="75" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">6. Bước đuổi</text>
        <text x="10" y="48" font-size="9" fill="#334155" class="dark:fill-slate-300">• Bước chếch sang bên</text>
        <text x="10" y="68" font-size="9" fill="#334155" class="dark:fill-slate-300">• Chân kia bước đuổi</text>
        <text x="10" y="88" font-size="9" fill="#334155" class="dark:fill-slate-300">• Tay đưa trước nhịp nhàng</text>
      </g>

      <g transform="translate(350, 40)">
        <rect width="150" height="105" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#bbf7d0"/>
        <text x="75" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">7. Đẩy hông</text>
        <text x="10" y="48" font-size="9" fill="#334155" class="dark:fill-slate-300">• Bước ngang rộng hơn vai</text>
        <text x="10" y="68" font-size="9" fill="#334155" class="dark:fill-slate-300">• Đẩy hông uyển chuyển</text>
        <text x="10" y="88" font-size="9" fill="#334155" class="dark:fill-slate-300">• Đổi hướng dẻo dai</text>
      </g>

      <g transform="translate(515, 40)">
        <rect width="165" height="105" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#bbf7d0"/>
        <text x="82" y="22" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">8. Bật nhảy</text>
        <text x="10" y="48" font-size="9" fill="#334155" class="dark:fill-slate-300">• Bước chéo tạo đà</text>
        <text x="10" y="68" font-size="9" fill="#334155" class="dark:fill-slate-300">• Bật thẳng tay mở chữ V</text>
        <text x="10" y="88" font-size="9" fill="#334155" class="dark:fill-slate-300">• Tiếp đất khuỵu gối êm</text>
      </g>
    </svg>
  `,

  // PHẦN III: THỂ THAO TỰ CHỌN
  'bai-cau-long-1': `
    <svg viewBox="0 0 700 170" class="w-full h-auto max-h-[190px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="160" rx="14" fill="#f0f9ff" class="dark:fill-sky-950/30" stroke="#7dd3fc" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0369a1" class="dark:fill-sky-300">KĨ THUẬT BẬT NHẢY ĐÁNH CẦU CAO TAY BÊN PHẢI (CẦU LÔNG)</text>

      <g transform="translate(30, 40)">
        <rect width="200" height="105" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#bae6fd"/>
        <text x="100" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0284c7">1. Chuẩn bị &amp; Bật</text>
        <text x="10" y="45" font-size="9" fill="#334155" class="dark:fill-slate-300">• Chân trái trước, chân phải sau</text>
        <text x="10" y="65" font-size="9" fill="#334155" class="dark:fill-slate-300">• Khuỵu gối chân phải đạp bật</text>
        <text x="10" y="85" font-size="9" fill="#334155" class="dark:fill-slate-300">• Xoay hông và vai về trước</text>
      </g>

      <g transform="translate(250, 40)">
        <rect width="200" height="105" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#bae6fd"/>
        <text x="100" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0284c7">2. Tiếp xúc cầu trên cao</text>
        <text x="10" y="45" font-size="9" fill="#334155" class="dark:fill-slate-300">• Duỗi tay cầm vợt lên cao nhất</text>
        <text x="10" y="65" font-size="9" fill="#334155" class="dark:fill-slate-300">• Đánh cầu tại điểm cao trước trán</text>
        <text x="10" y="85" font-size="9" fill="#334155" class="dark:fill-slate-300">• Đưa cầu bay sâu cuối sân</text>
      </g>

      <g transform="translate(470, 40)">
        <rect width="200" height="105" rx="8" fill="#ffffff" class="dark:fill-slate-800" stroke="#bae6fd"/>
        <text x="100" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0284c7">3. Tiếp đất &amp; Hồi vị trí</text>
        <text x="10" y="45" font-size="9" fill="#334155" class="dark:fill-slate-300">• Rơi lần lượt chân trái rồi phải</text>
        <text x="10" y="65" font-size="9" fill="#334155" class="dark:fill-slate-300">• Thu vợt nhanh về trước ngực</text>
        <text x="10" y="85" font-size="9" fill="#334155" class="dark:fill-slate-300">• Trở lại tư thế sẵn sàng</text>
      </g>
    </svg>
  `,

  'bai-cau-long-2': `
    <svg viewBox="0 0 700 170" class="w-full h-auto max-h-[190px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="160" rx="14" fill="#fff1f2" class="dark:fill-rose-950/30" stroke="#fecdd3" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#be123c" class="dark:fill-rose-300">KĨ THUẬT BẬT NHẢY ĐẬP CẦU THUẬN TAY (SMASH TẤN CÔNG)</text>

      <g transform="translate(30, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#fda4af"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#e11d48">🚀 ĐỘNG TÁC BẬT NHẢY TRÊN KHÔNG</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Bật nhảy chủ động và cao hơn đánh cầu cao tay</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Ưỡn thân vừa phải, xoay nhanh hông và vai về trước</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Cánh tay vung hết biên độ tạo lực đòn bẩy</text>
      </g>

      <g transform="translate(365, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#fda4af"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#e11d48">💥 GẬP CỔ TAY &amp; ĐƯỜNG CẦU CẮM</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Chạm cầu tại điểm cao nhất có thể phía trước trán</text>
        <text x="15" y="68" font-size="9.5" font-weight="bold" fill="#be123c">• Gập nhanh cổ tay, mặt vợt hơi úp xuống</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Cầu bay cắm dốc, tốc độ cực nhanh sang sân đối phương</text>
      </g>
    </svg>
  `,

  'bai-cau-long-3': `
    <svg viewBox="0 0 700 170" class="w-full h-auto max-h-[190px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="160" rx="14" fill="#ecfdf5" class="dark:fill-emerald-950/30" stroke="#a7f3d0" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">KĨ THUẬT BỎ NHỎ SÁT LƯỚI THUẬN TAY VÀ TRÁI TAY (DROP SHOT)</text>

      <g transform="translate(30, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bbf7d0"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">🎯 BỎ NHỎ THUẬN TAY</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Bước chân phải lên chếch trước sang phải</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Duỗi tay đưa vợt đón cầu, cổ tay thả lỏng</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Chạm vợt nhẹ làm cầu vừa qua mép lưới rơi sát lưới</text>
      </g>

      <g transform="translate(365, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bbf7d0"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">🔄 BỎ NHỎ TRÁI TAY</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Bước chân tương tự đón hướng cầu rơi</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Xoay cổ tay sang trái, lòng bàn tay úp xuống</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Chạm nhẹ điều khiển cầu ngắn; thu hồi vị trí ngay</text>
      </g>
    </svg>
  `,

  'bai-bong-da-1': `
    <svg viewBox="0 0 700 170" class="w-full h-auto max-h-[190px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="160" rx="14" fill="#eff6ff" class="dark:fill-blue-950/30" stroke="#93c5fd" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">ĐÁ BÓNG BẰNG MU GIỮA BÀN CHÂN &amp; NÉM BIÊN TẠI CHỖ</text>

      <g transform="translate(30, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bfdbfe"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">⚽ SÚT BÓNG MU GIỮA</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Chân trụ đặt cạnh bóng 10–15cm, mũi chân hướng đá</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Mũi chân duỗi thẳng, khóa cứng cổ chân</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Mu giữa bàn chân sút vào tâm sau bóng tạo lực căng</text>
      </g>

      <g transform="translate(365, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bfdbfe"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">👐 NÉM BIÊN ĐÚNG LUẬT</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Hai chân chạm đất ở ngoài hoặc trên vạch biên</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Cầm bóng hai tay, đưa từ sau qua đầu ném liên tục</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Tay theo đà về trước, không nhấc chân khỏi mặt đất</text>
      </g>
    </svg>
  `,

  'bai-bong-da-2': `
    <svg viewBox="0 0 700 170" class="w-full h-auto max-h-[190px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="160" rx="14" fill="#fffbeb" class="dark:fill-amber-950/30" stroke="#fcd34d" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">KĨ THUẬT DỪNG BÓNG BỔNG BẰNG MU GIỮA HOÃN XUNG GIẢM LỰC</text>

      <g transform="translate(30, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#fde68a"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#d97706">1. ĐÓN HƯỚNG BÓNG RƠI</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Phán đoán chuẩn xác điểm rơi của bóng bổng</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Di chuyển nhanh, giữ cơ thể thăng bằng</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Nâng chân đón bóng, gối co nhẹ, cổ chân thả lỏng</text>
      </g>

      <g transform="translate(365, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#fde68a"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#d97706">2. HOÃN XUNG GIẢM LỰC</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Ngay khi bóng chạm mu giữa bàn chân</text>
        <text x="15" y="68" font-size="9.5" font-weight="bold" fill="#b45309">• Chủ động hạ chân và rút nhẹ về sau theo đà bóng</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Bóng rơi êm sát tầm chân, sẵn sàng dẫn hoặc sút</text>
      </g>
    </svg>
  `,

  'bai-bong-da-3': `
    <svg viewBox="0 0 700 170" class="w-full h-auto max-h-[190px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="160" rx="14" fill="#ecfdf5" class="dark:fill-emerald-950/30" stroke="#a7f3d0" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">KĨ THUẬT DẪN BÓNG BẰNG MU NGOÀI BÀN CHÂN &amp; ĐỔI HƯỚNG</text>

      <g transform="translate(30, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bbf7d0"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">🦶 TIẾP XÚC MU NGOÀI</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Tiếp xúc từ ngón út đến cạnh ngoài cổ chân</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Mũi chân hơi chúc xuống và khép nhẹ vào trong</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Đẩy bóng vừa tầm kiểm soát: 0,5–1 mét mỗi nhịp</text>
      </g>

      <g transform="translate(365, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bbf7d0"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">⚡ ƯU THẾ ĐỔI HƯỚNG &amp; CHE CHẮN</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Thuận lợi bẻ góc đổi hướng bóng đột ngột</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Dùng thân người che bóng khi đối phương áp sát</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Vừa dẫn bóng vừa ngẩng đầu quan sát trận đấu</text>
      </g>
    </svg>
  `,

  'bai-bong-ro-1': `
    <svg viewBox="0 0 700 170" class="w-full h-auto max-h-[190px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="160" rx="14" fill="#fff7ed" class="dark:fill-orange-950/30" stroke="#fed7aa" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#c2410c" class="dark:fill-orange-300">TẠI CHỖ VÀ DẪN BÓNG ĐỘT PHÁ BƯỚC THUẬN (BÓNG RỔ)</text>

      <g transform="translate(30, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#ffedd5"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#ea580c">1. CHÂN TRỤ &amp; BƯỚC THUẬN</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Khi đột phá sang phải: Chân trái làm chân trụ</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Chân phải bước nhanh chếch về trước sang phải</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Chuyển trọng tâm và thân người theo hướng bước</text>
      </g>

      <g transform="translate(365, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#ffedd5"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#ea580c">2. NHỊP ĐẬP BÓNG CHUẨN LUẬT</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Khi chân phải chạm đất, tay phải đập bóng xuống</text>
        <text x="15" y="68" font-size="9.5" font-weight="bold" fill="#c2410c">• Bóng phải rời tay TRƯỚC KHI chân trụ nhấc lên</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Chân trái bước theo sau; tránh lỗi chạy bước</text>
      </g>
    </svg>
  `,

  'bai-bong-ro-2': `
    <svg viewBox="0 0 700 170" class="w-full h-auto max-h-[190px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="160" rx="14" fill="#ede9fe" class="dark:fill-purple-950/30" stroke="#ddd6fe" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#6d28d9" class="dark:fill-purple-300">KĨ THUẬT ĐỘT PHÁ BƯỚC CHÉO (CROSS-STEP DRIVE CHE BÓNG)</text>

      <g transform="translate(30, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#c4b5fd"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#7c3aed">🔀 BƯỚC CHÉO QUA THÂN</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Khi đột phá sang phải: Chân phải làm chân trụ chắc</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Chân trái bước chéo nhanh qua trước sang phải</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Hạ thấp trọng tâm, dùng vai và lưng che bóng</text>
      </g>

      <g transform="translate(365, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#c4b5fd"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#7c3aed">⚡ THỜI ĐIỂM DẪN BÓNG</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Khi chân trái chạm đất, tay phải dẫn bóng xuống</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Chân phải theo sau sau khi bóng đã rời tay</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Đổi hướng nhanh chóng vượt qua hậu vệ đối phương</text>
      </g>
    </svg>
  `,

  'bai-bong-ro-3': `
    <svg viewBox="0 0 700 170" class="w-full h-auto max-h-[190px] select-none my-2" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="690" height="160" rx="14" fill="#ecfdf5" class="dark:fill-emerald-950/30" stroke="#a7f3d0" stroke-width="1.2"/>
      <text x="350" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">TẠI CHỖ CHUYỀN BÓNG MỘT TAY TRÊN VAI (BASEBALL PASS)</text>

      <g transform="translate(30, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bbf7d0"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">1. TƯ THẾ ĐÓN &amp; LÊN BÓNG</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Cầm bóng hai tay trước ngực, đưa lên trên vai phải</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Trọng lượng chuyển về chân phải, thân xoay nhẹ sang phải sau</text>
        <text x="15" y="88" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Tay phải đỡ phía sau và dưới bóng, khuỷu tay mở</text>
      </g>

      <g transform="translate(365, 40)">
        <rect width="305" height="105" rx="10" fill="#ffffff" class="dark:fill-slate-800" stroke="#bbf7d0"/>
        <text x="152" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">2. PHÁT LỰC &amp; MIẾT TAY</text>
        <text x="15" y="48" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Đạp chân phải, chuyển trọng lượng sang trái, xoay thân</text>
        <text x="15" y="68" font-size="9.5" fill="#334155" class="dark:fill-slate-300">• Duỗi tay từ sau ra trước-lên; gập cổ tay, ngón tay miết bóng</text>
        <text x="15" y="88" font-size="9.5" font-weight="bold" fill="#047857">• Chân phải bước lên giữ thăng bằng; chuyền xa phản công</text>
      </g>
    </svg>
  `
};

module.exports = lessonIllustrations;
