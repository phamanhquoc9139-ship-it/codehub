// scratch/sinhhoc11_lesson_diagrams_p1.js
// Sơ đồ SVG minh họa bài học từ Bài 1 đến Bài 15

const p1_diagrams = {
  // Bài 1: Môi trường -> Thu nhận -> Đồng hóa & Dị hóa -> ATP -> Thải cặn
  1: {
    note: "Sơ đồ dòng vật chất & năng lượng: Môi trường → Thu nhận chất → Tế bào (Đồng hóa & Dị hóa) → ATP & Sinh khối → Đào thải cặn bã.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#10b981" />
        </marker>
        <marker id="arrAmb" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b" />
        </marker>
      </defs>
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Node 1: Môi trường ngoài -->
      <rect x="25" y="45" width="130" height="100" rx="10" fill="#e0f2fe" class="dark:fill-sky-950/60" stroke="#0ea5e9" stroke-width="1.5" />
      <text x="90" y="75" text-anchor="middle" font-weight="bold" font-size="12" fill="#0369a1" class="dark:fill-sky-300">MÔI TRƯỜNG</text>
      <text x="90" y="98" text-anchor="middle" font-size="11" fill="#0284c7" class="dark:fill-sky-400">• Thức ăn, Nước</text>
      <text x="90" y="118" text-anchor="middle" font-size="11" fill="#0284c7" class="dark:fill-sky-400">• O₂, CO₂, Khoáng</text>
      <text x="90" y="136" text-anchor="middle" font-size="11" fill="#0284c7" class="dark:fill-sky-400">• Quang năng</text>

      <!-- Arrow 1 to 2 -->
      <path d="M 155 95 L 210 95" stroke="#10b981" stroke-width="2.5" marker-end="url(#arr1)" />
      <text x="182" y="85" text-anchor="middle" font-size="10" font-weight="bold" fill="#059669">Thu nhận</text>

      <!-- Node 2: Tế bào sống -->
      <rect x="215" y="25" width="330" height="140" rx="12" fill="#ffffff" class="dark:fill-slate-850" stroke="#10b981" stroke-width="1.5" />
      <text x="380" y="48" text-anchor="middle" font-weight="bold" font-size="13" fill="#065f46" class="dark:fill-emerald-300">TẾ BÀO SINH VẬT (CHUYỂN HÓA VẬT CHẤT & NĂNG LƯỢNG)</text>
      
      <!-- Sub-box Đồng hóa -->
      <rect x="230" y="60" width="140" height="90" rx="8" fill="#ecfdf5" class="dark:fill-emerald-950/50" stroke="#34d399" />
      <text x="300" y="80" text-anchor="middle" font-weight="bold" font-size="11" fill="#047857" class="dark:fill-emerald-300">ĐỒNG HÓA</text>
      <text x="300" y="100" text-anchor="middle" font-size="10" fill="#059669">• Tổng hợp chất hữu cơ</text>
      <text x="300" y="118" text-anchor="middle" font-size="10" fill="#059669">• Tiêu tốn ATP</text>
      <text x="300" y="136" text-anchor="middle" font-size="10" font-weight="semibold" fill="#047857">Tạo sinh khối cơ thể</text>

      <!-- Sub-box Dị hóa -->
      <rect x="390" y="60" width="140" height="90" rx="8" fill="#fffbeb" class="dark:fill-amber-950/50" stroke="#fbbf24" />
      <text x="460" y="80" text-anchor="middle" font-weight="bold" font-size="11" fill="#b45309" class="dark:fill-amber-300">DỊ HÓA</text>
      <text x="460" y="100" text-anchor="middle" font-size="10" fill="#d97706">• Phân giải chất hữu cơ</text>
      <text x="460" y="118" text-anchor="middle" font-size="10" fill="#d97706">• Giải phóng năng lượng</text>
      <text x="460" y="136" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">Nạp ~30.5 kJ/mol ATP</text>

      <!-- Center inter-arrows -->
      <path d="M 390 90 L 372 90" stroke="#10b981" stroke-width="2" marker-end="url(#arr1)" />
      <path d="M 372 120 L 390 120" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrAmb)" />

      <!-- Arrow 2 to 3 -->
      <path d="M 545 95 L 600 95" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrAmb)" />
      <text x="572" y="85" text-anchor="middle" font-size="10" font-weight="bold" fill="#d97706">Bài tiết</text>

      <!-- Node 3: Sản phẩm thải -->
      <rect x="605" y="45" width="130" height="100" rx="10" fill="#fef2f2" class="dark:fill-rose-950/60" stroke="#f43f5e" stroke-width="1.5" />
      <text x="670" y="75" text-anchor="middle" font-weight="bold" font-size="12" fill="#be123c" class="dark:fill-rose-300">ĐÀO THẢI</text>
      <text x="670" y="98" text-anchor="middle" font-size="11" fill="#e11d48" class="dark:fill-rose-400">• CO₂, H₂O thừa</text>
      <text x="670" y="118" text-anchor="middle" font-size="11" fill="#e11d48" class="dark:fill-rose-400">• Chất cặn bã, Ure</text>
      <text x="670" y="136" text-anchor="middle" font-size="11" fill="#e11d48" class="dark:fill-rose-400">• Tỏa nhiệt năng</text>
    </svg>`
  },

  // Bài 2: Rễ -> Caspary -> Mạch gỗ vs Mạch rây & Khí khổng
  2: {
    note: "Cấu tạo lông hút rễ, đai Caspary kiểm soát con đường gian bào, dòng mạch gỗ đi lên và cơ chế đóng mở khí khổng.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Rễ & Lông hút -->
      <g transform="translate(30, 25)">
        <rect width="210" height="140" rx="10" fill="#ecfdf5" class="dark:fill-emerald-950/50" stroke="#10b981" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="12" fill="#047857" class="dark:fill-emerald-300">HẤP THỤ Ở RỄ</text>
        <text x="15" y="48" font-size="11" fill="#065f46" class="dark:fill-emerald-400">• Lông hút: Thẩm thấu nước</text>
        <text x="15" y="68" font-size="11" fill="#065f46" class="dark:fill-emerald-400">• Khoáng: Thụ động & Chủ động (ATP)</text>
        <text x="15" y="88" font-size="11" fill="#065f46" class="dark:fill-emerald-400">• Đường TB chất: Xuyên cầu sinh chất</text>
        <text x="15" y="108" font-size="11" fill="#b45309" class="dark:fill-amber-400 font-bold">• Đai Caspary: Chặn đường gian bào</text>
        <text x="15" y="126" font-size="10" fill="#047857" class="dark:fill-emerald-300">→ Bắt buộc chọn lọc qua màng sinh chất</text>
      </g>

      <!-- Dòng Mạch gỗ vs Mạch rây -->
      <g transform="translate(265, 25)">
        <rect width="230" height="140" rx="10" fill="#eff6ff" class="dark:fill-blue-950/50" stroke="#3b82f6" />
        <text x="115" y="24" text-anchor="middle" font-weight="bold" font-size="12" fill="#1e40af" class="dark:fill-blue-300">VẬN CHUYỂN TRONG THÂN</text>
        <text x="15" y="48" font-size="11" font-weight="bold" fill="#2563eb" class="dark:fill-blue-400">Mạch gỗ (Xylem) - Đi lên:</text>
        <text x="15" y="66" font-size="10" fill="#1d4ed8" class="dark:fill-blue-300">Nước & khoáng (Thoát hơi + Liên kết + Áp suất rễ)</text>
        <text x="15" y="90" font-size="11" font-weight="bold" fill="#7c3aed" class="dark:fill-purple-400">Mạch rây (Phloem) - Hai chiều:</text>
        <text x="15" y="108" font-size="10" fill="#6d28d9" class="dark:fill-purple-300">Dịch sucrose từ Nguồn (Lá) → Bồn chứa (Rễ, Quả)</text>
        <path d="M 60 130 L 60 115" stroke="#2563eb" stroke-width="3" />
        <path d="M 170 115 L 170 130" stroke="#7c3aed" stroke-width="3" />
      </g>

      <!-- Khí khổng -->
      <g transform="translate(520, 25)">
        <rect width="210" height="140" rx="10" fill="#fdf4ff" class="dark:fill-fuchsia-950/50" stroke="#d946ef" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="12" fill="#86198f" class="dark:fill-fuchsia-300">CƠ CHẾ KHÍ KHỔNG</text>
        <text x="15" y="48" font-size="11" fill="#a21caf" class="dark:fill-fuchsia-400">• 2 tế bào hình hạt đậu</text>
        <text x="15" y="68" font-size="11" fill="#a21caf" class="dark:fill-fuchsia-400">• Thành trong dày, thành ngoài mỏng</text>
        <text x="15" y="88" font-size="11" font-weight="bold" fill="#047857" class="dark:fill-emerald-400">• Trương nước → Mở khe khổng</text>
        <text x="15" y="108" font-size="11" font-weight="bold" fill="#be123c" class="dark:fill-rose-400">• Mất nước / Stress ABA → Đóng khe</text>
        <text x="15" y="126" font-size="10" fill="#701a75" class="dark:fill-fuchsia-300">Thoát hơi nước tạo sức hút kéo cột nước</text>
      </g>
    </svg>`
  },

  // Bài 3: Thực hành nước & khoáng
  3: {
    note: "Quy trình thực nghiệm: Cành cúc nhuộm màu mạch gỗ, kiểm tra thoát hơi bằng CoCl₂ và tách biểu bì soi khí khổng.",
    svg: `<svg viewBox="0 0 760 180" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="180" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <g transform="translate(30, 20)">
        <rect width="220" height="140" rx="8" fill="#fff1f2" class="dark:fill-rose-950/40" stroke="#f43f5e" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#be123c">TN1: VẬN CHUYỂN MẠCH GỖ</text>
        <text x="15" y="48" font-size="10" fill="#9f1239">• Cắm hoa trắng vào cốc mực đỏ</text>
        <text x="15" y="68" font-size="10" fill="#9f1239">• Cốc đối chứng: Nước cất</text>
        <text x="15" y="88" font-size="10" fill="#9f1239">• Gân lá & cánh hoa chuyển đỏ</text>
        <text x="15" y="112" font-size="10" font-weight="bold" fill="#be123c">→ Chứng minh dòng mạch gỗ đi lên</text>
      </g>

      <g transform="translate(270, 20)">
        <rect width="220" height="140" rx="8" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">TN2: THOÁT HƠI NƯỚC LÁ</text>
        <text x="15" y="48" font-size="10" fill="#1e40af">• Kẹp giấy tẩm CoCl₂ vào 2 mặt lá</text>
        <text x="15" y="68" font-size="10" fill="#1e40af">• CoCl₂ khan xanh → ngậm nước hồng</text>
        <text x="15" y="88" font-size="10" fill="#1e40af">• Mặt dưới chuyển hồng nhanh hơn</text>
        <text x="15" y="112" font-size="10" font-weight="bold" fill="#1d4ed8">→ Khí khổng tập trung ở mặt dưới</text>
      </g>

      <g transform="translate(510, 20)">
        <rect width="220" height="140" rx="8" fill="#ecfdf5" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#047857">TN3: SOI KHÍ KHỔNG BIỂU BÌ</text>
        <text x="15" y="48" font-size="10" fill="#065f46">• Bóc màng biểu bì dưới lá thài lài</text>
        <text x="15" y="68" font-size="10" fill="#065f46">• Đặt lam kính giọt nước, đậy lamen</text>
        <text x="15" y="88" font-size="10" fill="#065f46">• Kính hiển vi 10x → 40x</text>
        <text x="15" y="112" font-size="10" font-weight="bold" fill="#047857">→ Thấy tế bào hạt đậu có lục lạp</text>
      </g>
    </svg>`
  },

  // Bài 4: Quang hợp C3, C4, CAM
  4: {
    note: "Hai pha quang hợp: Pha sáng màng thylakoid tạo ATP/NADPH + Chu trình Calvin stroma cố định CO₂ ở C3, C4 và CAM.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Bào quan Lục lạp -->
      <rect x="25" y="20" width="350" height="150" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/40" stroke="#10b981" stroke-width="1.5" />
      <text x="200" y="42" text-anchor="middle" font-weight="bold" font-size="12" fill="#065f46" class="dark:fill-emerald-300">BÀO QUAN LỤC LẠP (CHLOROPLAST)</text>

      <!-- Pha sáng Thylakoid -->
      <rect x="40" y="55" width="150" height="100" rx="8" fill="#10b981" />
      <text x="115" y="75" text-anchor="middle" font-weight="bold" font-size="11" fill="#ffffff">PHA SÁNG (Thylakoid)</text>
      <text x="115" y="95" text-anchor="middle" font-size="10" fill="#e2e8f0">Quang năng + H₂O</text>
      <text x="115" y="112" text-anchor="middle" font-size="10" fill="#e2e8f0">Quang phân li nước:</text>
      <text x="115" y="128" text-anchor="middle" font-size="10" font-weight="bold" fill="#fef08a">→ O₂ + ATP + NADPH</text>
      <text x="115" y="145" text-anchor="middle" font-size="9" fill="#d1fae5">O₂ bay ra khí quyển</text>

      <!-- Pha tối Calvin Stroma -->
      <rect x="210" y="55" width="150" height="100" rx="8" fill="#0284c7" />
      <text x="285" y="75" text-anchor="middle" font-weight="bold" font-size="11" fill="#ffffff">PHA TỐI (Stroma)</text>
      <text x="285" y="95" text-anchor="middle" font-size="10" fill="#e0f2fe">Chu trình Calvin</text>
      <text x="285" y="112" text-anchor="middle" font-size="10" fill="#e0f2fe">Dùng CO₂ + ATP + NADPH</text>
      <text x="285" y="128" text-anchor="middle" font-size="10" font-weight="bold" fill="#fef08a">→ Glucose (C₆H₁₂O₆)</text>
      <text x="285" y="145" text-anchor="middle" font-size="9" fill="#bae6fd">Tái sinh chất nhận RuBP</text>

      <!-- C3, C4, CAM Compare -->
      <rect x="395" y="20" width="340" height="150" rx="12" fill="#fffbeb" class="dark:fill-amber-950/40" stroke="#f59e0b" stroke-width="1.5" />
      <text x="565" y="38" text-anchor="middle" font-weight="bold" font-size="12" fill="#b45309" class="dark:fill-amber-300">SO SÁNH C3 - C4 - CAM</text>
      <text x="410" y="58" font-size="11" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">• C3 (Lúa, cam, đậu):</text>
      <text x="420" y="73" font-size="10" fill="#92400e" class="dark:fill-amber-400">Cố định 3-PGA, có quang hô hấp khi khô nóng</text>
      <text x="410" y="94" font-size="11" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">• C4 (Ngô, mía):</text>
      <text x="420" y="109" font-size="10" fill="#92400e" class="dark:fill-amber-400">Tách biệt không gian (Mô giậu + Bao bó mạch) → Năng suất cao</text>
      <text x="410" y="130" font-size="11" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">• CAM (Xương rồng, dứa):</text>
      <text x="420" y="145" font-size="10" fill="#92400e" class="dark:fill-amber-400">Tách biệt thời gian (Mở đêm, đóng ngày) → Chống hạn cực tốt</text>
    </svg>`
  },

  // Bài 5: Thực hành quang hợp
  5: {
    note: "Tách chiết hệ sắc tố trên giấy sắc kí và thí nghiệm chứng minh lá quang hợp tạo tinh bột bằng dung dịch Iodine.",
    svg: `<svg viewBox="0 0 760 180" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="180" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <g transform="translate(30, 20)">
        <rect width="220" height="140" rx="8" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#047857">1. TÁCH SẮC TỐ QUANG HỢP</text>
        <text x="15" y="48" font-size="10" fill="#065f46">• Nghiền lá trong cồn 90°</text>
        <text x="15" y="68" font-size="10" fill="#065f46">• Chấm lên giấy sắc kí</text>
        <text x="15" y="88" font-size="10" fill="#065f46">• 4 dải màu: Chl b → Chl a →</text>
        <text x="25" y="106" font-size="10" fill="#065f46">Xanthophyll → Carotene</text>
        <text x="15" y="126" font-size="10" font-weight="bold" fill="#047857">An toàn: Đun cồn cách thủy!</text>
      </g>

      <g transform="translate(270, 20)">
        <rect width="220" height="140" rx="8" fill="#fefce8" class="dark:fill-amber-950/40" stroke="#f59e0b" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#b45309">2. THỬ TINH BỘT (IODINE)</text>
        <text x="15" y="48" font-size="10" fill="#92400e">• Để cây trong tối 48h khử tinh bột</text>
        <text x="15" y="68" font-size="10" fill="#92400e">• Dán băng đen che 1 phần lá</text>
        <text x="15" y="88" font-size="10" fill="#92400e">• Chiếu sáng 6h, tẩy cồn nóng</text>
        <text x="15" y="108" font-size="10" fill="#92400e">• Nhỏ thuốc thử Iodine</text>
        <text x="15" y="126" font-size="10" font-weight="bold" fill="#b45309">Vùng chiếu sáng → Xanh tím đậm</text>
      </g>

      <g transform="translate(510, 20)">
        <rect width="220" height="140" rx="8" fill="#eff6ff" class="dark:fill-sky-950/40" stroke="#0ea5e9" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#0369a1">3. CHỨNG MINH THẢI O₂</text>
        <text x="15" y="48" font-size="10" fill="#075985">• Cành rong đuôi chó trong nước</text>
        <text x="15" y="68" font-size="10" fill="#075985">• Chiếu đèn sáng → Sủi bọt khí</text>
        <text x="15" y="88" font-size="10" fill="#075985">• Khí tích tụ đẩy nước ống nghiệm</text>
        <text x="15" y="108" font-size="10" fill="#075985">• Thử que đóm còn tàn đỏ</text>
        <text x="15" y="126" font-size="10" font-weight="bold" fill="#0369a1">Que đóm bùng cháy sáng bừng!</text>
      </g>
    </svg>`
  },

  // Bài 6: Hô hấp tế bào
  6: {
    note: "3 giai đoạn hô hấp hiếu khí (Đường phân bào tương, Chu trình Krebs chất nền ti thể, Chuỗi truyền electron màng trong) tạo ~30-32 ATP.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Bào tương -->
      <rect x="25" y="20" width="220" height="150" rx="10" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
      <text x="135" y="42" text-anchor="middle" font-weight="bold" font-size="12" fill="#065f46" class="dark:fill-emerald-300">1. ĐƯỜNG PHÂN (BÀO TƯƠNG)</text>
      <text x="35" y="68" font-size="11" fill="#047857" class="dark:fill-emerald-400">Glucose (6C)</text>
      <text x="35" y="90" font-size="11" fill="#047857" class="dark:fill-emerald-400">↓ Phân giải không cần O₂</text>
      <text x="35" y="112" font-size="11" font-weight="bold" fill="#047857" class="dark:fill-emerald-300">2 Pyruvate (3C)</text>
      <text x="35" y="132" font-size="11" fill="#047857" class="dark:fill-emerald-400">+ 2 ATP + 2 NADH</text>
      <text x="35" y="152" font-size="10" fill="#be123c">Nếu thiếu O₂ → Lên men rượu/lactic</text>

      <!-- Chất nền ti thể -->
      <rect x="260" y="20" width="230" height="150" rx="10" fill="#fffbeb" class="dark:fill-amber-950/40" stroke="#f59e0b" />
      <text x="375" y="42" text-anchor="middle" font-weight="bold" font-size="12" fill="#b45309" class="dark:fill-amber-300">2. CHU TRÌNH KREBS (TI THỂ)</text>
      <text x="275" y="68" font-size="11" fill="#b45309" class="dark:fill-amber-400">2 Pyruvate → 2 Acetyl-CoA</text>
      <text x="275" y="90" font-size="11" fill="#b45309" class="dark:fill-amber-400">Đi vào chu trình Krebs:</text>
      <text x="275" y="112" font-size="11" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">• Giải phóng toàn bộ CO₂</text>
      <text x="275" y="132" font-size="11" fill="#b45309" class="dark:fill-amber-400">• Tạo 2 ATP</text>
      <text x="275" y="152" font-size="11" fill="#b45309" class="dark:fill-amber-400">• Nhiều NADH và FADH₂ mang e⁻</text>

      <!-- Màng trong ti thể -->
      <rect x="505" y="20" width="230" height="150" rx="10" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
      <text x="620" y="42" text-anchor="middle" font-weight="bold" font-size="12" fill="#1e40af" class="dark:fill-blue-300">3. CHUỖI CHUYỀN ELECTRON</text>
      <text x="520" y="68" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">Diễn ra trên màng trong ti thể</text>
      <text x="520" y="90" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">NADH, FADH₂ truyền e⁻ cho O₂</text>
      <text x="520" y="112" font-size="11" font-weight="bold" fill="#1d4ed8" class="dark:fill-blue-300">O₂ nhận e⁻ tạo H₂O</text>
      <text x="520" y="132" font-size="12" font-weight="extrabold" fill="#2563eb" class="dark:fill-blue-400">Tổng hợp ~26-28 ATP!</text>
      <text x="520" y="152" font-size="10" font-weight="bold" fill="#059669">Tổng toàn quá trình: ~30-32 ATP</text>
    </svg>`
  },

  // Bài 7: Thực hành hô hấp hạt nảy mầm
  7: {
    note: "Thí nghiệm hô hấp hạt đậu nảy mầm: Nước vôi trong Ca(OH)₂ vẩn đục vì CO₂, que đóm tắt vì thiếu O₂ và nhiệt độ phích tăng.",
    svg: `<svg viewBox="0 0 760 180" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="180" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <g transform="translate(30, 20)">
        <rect width="220" height="140" rx="8" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#047857">1. THẢI KHÍ CO₂</text>
        <text x="15" y="48" font-size="10" fill="#065f46">• Hạt đậu nảy mầm trong bình kín</text>
        <text x="15" y="68" font-size="10" fill="#065f46">• Dẫn khí sục vào nước vôi trong</text>
        <text x="15" y="88" font-size="10" fill="#065f46">• Ca(OH)₂ + CO₂ → CaCO₃↓</text>
        <text x="15" y="112" font-size="10" font-weight="bold" fill="#047857">Nước vôi vẩn đục trắng</text>
        <text x="15" y="128" font-size="9" fill="#64748b">Đối chứng: Hạt luộc chín nước trong</text>
      </g>

      <g transform="translate(270, 20)">
        <rect width="220" height="140" rx="8" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">2. TIÊU THỤ KHÍ O₂</text>
        <text x="15" y="48" font-size="10" fill="#1e40af">• Đậy kín bình hạt nảy mầm qua đêm</text>
        <text x="15" y="68" font-size="10" fill="#1e40af">• Hô hấp tiêu thụ cạn kiệt O₂</text>
        <text x="15" y="88" font-size="10" fill="#1e40af">• Đưa que đóm đang cháy vào bình</text>
        <text x="15" y="112" font-size="10" font-weight="bold" fill="#1d4ed8">Que đóm lập tức bị tắt ngấm</text>
        <text x="15" y="128" font-size="9" fill="#64748b">Chứng minh nồng độ O₂ giảm sâu</text>
      </g>

      <g transform="translate(510, 20)">
        <rect width="220" height="140" rx="8" fill="#fff1f2" class="dark:fill-rose-950/40" stroke="#f43f5e" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#be123c">3. TỎA NHIỆT NĂNG</text>
        <text x="15" y="48" font-size="10" fill="#9f1239">• Cho hạt nảy mầm vào phích cách nhiệt</text>
        <text x="15" y="68" font-size="10" fill="#9f1239">• Cắm nhiệt kế vào giữa khối hạt</text>
        <text x="15" y="88" font-size="10" fill="#9f1239">• Ghi nhiệt độ sau mỗi 2 giờ</text>
        <text x="15" y="112" font-size="10" font-weight="bold" fill="#be123c">Nhiệt độ tăng thêm 3 - 7 °C</text>
        <text x="15" y="128" font-size="9" fill="#64748b">Đối chứng: Hạt luộc không tăng nhiệt</text>
      </g>
    </svg>`
  },

  // Bài 8: Tiêu hóa ở động vật & Người
  8: {
    note: "Ống tiêu hóa người, enzyme phân giải và cấu tạo lông ruột diện tích hấp thụ >300 m²; so sánh dạ dày 4 ngăn động vật nhai lại.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Ống tiêu hóa người -->
      <rect x="25" y="20" width="370" height="150" rx="10" fill="#fff1f2" class="dark:fill-rose-950/40" stroke="#f43f5e" />
      <text x="210" y="40" text-anchor="middle" font-weight="bold" font-size="12" fill="#be123c">ỐNG TIÊU HÓA Ở NGƯỜI</text>
      <text x="40" y="64" font-size="11" fill="#9f1239"><tspan font-weight="bold">• Miệng:</tspan> Răng nghiền + Amylase biến tinh bột chín → maltose</text>
      <text x="40" y="86" font-size="11" fill="#9f1239"><tspan font-weight="bold">• Dạ dày:</tspan> Co bóp nhũ trấp + HCl (pH 1.5-2) + Pepsin cắt protein</text>
      <text x="40" y="108" font-size="11" fill="#9f1239"><tspan font-weight="bold">• Ruột non:</tspan> Dịch tụy, mật, ruột tiêu hóa triệt để</text>
      <text x="40" y="128" font-size="11" fill="#9f1239"><tspan font-weight="bold">• Nhung mao ruột:</tspan> Diện tích > 300 m² hấp thu vào máu/bạch huyết</text>
      <text x="40" y="150" font-size="11" fill="#9f1239"><tspan font-weight="bold">• Ruột già:</tspan> Hút lại 90% nước, tạo phân đào thải qua hậu môn</text>

      <!-- Động vật nhai lại 4 ngăn -->
      <rect x="410" y="20" width="325" height="150" rx="10" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
      <text x="572" y="40" text-anchor="middle" font-weight="bold" font-size="12" fill="#047857">DẠ DÀY 4 NGĂN (TRÂU, BÒ)</text>
      <text x="425" y="64" font-size="11" fill="#065f46"><tspan font-weight="bold">1. Dạ cỏ:</tspan> Chứa VSV cộng sinh phân giải cellulose</text>
      <text x="425" y="86" font-size="11" fill="#065f46"><tspan font-weight="bold">2. Dạ tổ ong:</tspan> Đẩy từng viên thức ăn lên miệng nhai lại</text>
      <text x="425" y="108" font-size="11" fill="#065f46"><tspan font-weight="bold">3. Dạ lá sách:</tspan> Hút ép bớt nước khỏi bã thức ăn</text>
      <text x="425" y="130" font-size="11" fill="#065f46"><tspan font-weight="bold">4. Dạ múi khế:</tspan> Dạ dày thực sự (tiết HCl và pepsin)</text>
      <text x="425" y="152" font-size="10" font-weight="bold" fill="#047857">Ruột rất dài + Manh tràng lớn tiêu hóa cỏ xơ</text>
    </svg>`
  },

  // Bài 9: Hô hấp ở động vật
  9: {
    note: "4 bề mặt trao đổi khí: Da ẩm, hệ ống khí côn trùng, phiến mang cá dòng chảy ngược chiều và phế nang phổi người.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <g transform="translate(25, 20)">
        <rect width="160" height="150" rx="8" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="80" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#047857">1. QUA DA ẨM</text>
        <text x="12" y="48" font-size="10" fill="#065f46">• Giun đất, Lưỡng cư</text>
        <text x="12" y="68" font-size="10" fill="#065f46">• Da luôn ẩm ướt</text>
        <text x="12" y="88" font-size="10" fill="#065f46">• Mao mạch dưới da</text>
        <text x="12" y="108" font-size="10" fill="#065f46">• O₂ khuếch tán thẳng</text>
        <text x="12" y="128" font-size="10" fill="#be123c">Da khô → Ngạt chết</text>
      </g>

      <g transform="translate(200, 20)">
        <rect width="165" height="150" rx="8" fill="#fffbeb" class="dark:fill-amber-950/40" stroke="#f59e0b" />
        <text x="82" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#b45309">2. ỐNG KHÍ (CÔN TRÙNG)</text>
        <text x="12" y="48" font-size="10" fill="#92400e">• Lỗ thở thành cơ thể</text>
        <text x="12" y="68" font-size="10" fill="#92400e">• Phân nhánh ống vi khí</text>
        <text x="12" y="88" font-size="10" fill="#92400e">• Dẫn O₂ tới từng tế bào</text>
        <text x="12" y="108" font-size="10" fill="#92400e">• Không qua máu vận chuyển</text>
        <text x="12" y="128" font-size="10" font-weight="bold" fill="#b45309">Trao đổi khí trực tiếp</text>
      </g>

      <g transform="translate(380, 20)">
        <rect width="175" height="150" rx="8" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="87" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">3. MANG CÁ XƯƠNG</text>
        <text x="12" y="48" font-size="10" fill="#1e40af">• Phiến mang mỏng</text>
        <text x="12" y="68" font-size="10" fill="#1e40af">• Dòng nước & dòng máu</text>
        <text x="12" y="88" font-size="10" font-weight="bold" fill="#1d4ed8">chảy NGƯỢC CHIỀU</text>
        <text x="12" y="108" font-size="10" fill="#1e40af">• Duy trì gradient PO₂</text>
        <text x="12" y="128" font-size="10" font-weight="bold" fill="#059669">Lấy >80% O₂ tan!</text>
      </g>

      <g transform="translate(570, 20)">
        <rect width="165" height="150" rx="8" fill="#fdf4ff" class="dark:fill-purple-950/40" stroke="#c084fc" />
        <text x="82" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#7e22ce">4. PHỔI & PHẾ NANG</text>
        <text x="12" y="48" font-size="10" fill="#6b21a8">• Chim: 9 túi khí 1 chiều</text>
        <text x="12" y="68" font-size="10" fill="#6b21a8">• Người: Hàng trăm triệu</text>
        <text x="12" y="88" font-size="10" fill="#6b21a8">phế nang mỏng, ẩm ướt</text>
        <text x="12" y="108" font-size="10" fill="#6b21a8">• Hb gắn O₂ (HbO₂)</text>
        <text x="12" y="128" font-size="10" font-weight="bold" fill="#7e22ce">Diện tích > 100 m²</text>
      </g>
    </svg>`
  },

  // Bài 10: Tuần hoàn ở động vật
  10: {
    note: "Tim 4 ngăn, hệ dẫn truyền tự động nhịp tim, 2 vòng tuần hoàn kép và gradient huyết áp giảm từ động mạch chủ đến tĩnh mạch.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Tim & Hệ dẫn truyền -->
      <rect x="25" y="20" width="350" height="150" rx="10" fill="#fff1f2" class="dark:fill-rose-950/40" stroke="#f43f5e" />
      <text x="200" y="40" text-anchor="middle" font-weight="bold" font-size="12" fill="#be123c">TIM 4 NGĂN & HỆ DẪN TRUYỀN TỰ ĐỘNG</text>
      <text x="40" y="64" font-size="11" fill="#9f1239">• Cấu tạo: Tâm nhĩ phải, Tâm nhĩ trái, Tâm thất phải, Tâm thất trái</text>
      <text x="40" y="86" font-size="11" font-weight="bold" fill="#e11d48">Hệ dẫn truyền tim (Tính tự động):</text>
      <text x="40" y="106" font-size="10" fill="#9f1239">Nút xoang nhĩ (phát nhịp) → Nút nhĩ thất → Bó His → Mạng Purkinje</text>
      <text x="40" y="128" font-size="11" fill="#9f1239">• Chu kì 0.8s: Co nhĩ (0.1s) → Co thất (0.3s) → Dãn chung (0.4s)</text>
      <text x="40" y="150" font-size="10" font-weight="bold" fill="#047857">Nghỉ ngơi 0.4s giúp tim làm việc bền bỉ suốt đời không mệt</text>

      <!-- Hai vòng tuần hoàn & Huyết áp -->
      <rect x="390" y="20" width="345" height="150" rx="10" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
      <text x="562" y="40" text-anchor="middle" font-weight="bold" font-size="12" fill="#1d4ed8">HAI VÒNG TUẦN HOÀN KÉP Ở NGƯỜI</text>
      <text x="405" y="64" font-size="11" fill="#1e40af"><tspan font-weight="bold">• Vòng nhỏ (Phổi):</tspan> Thất phải → ĐM phổi → Phổi (nhả CO₂ lấy O₂) → TM phổi → Nhĩ trái</text>
      <text x="405" y="96" font-size="11" fill="#1e40af"><tspan font-weight="bold">• Vòng lớn (Cơ thể):</tspan> Thất trái → ĐM chủ → Nuôi các cơ quan mô → TM chủ → Nhĩ phải</text>
      <text x="405" y="126" font-size="11" font-weight="bold" fill="#2563eb">Quy luật biến thiên huyết áp:</text>
      <text x="405" y="146" font-size="10" font-weight="bold" fill="#b91c1c">Động mạch chủ (~120mmHg) > Mao mạch > Tĩnh mạch chủ (~0mmHg)</text>
    </svg>`
  },

  // Bài 11: Thực hành đo huyết áp, nhịp tim
  11: {
    note: "Kĩ thuật đo huyết áp động mạch cánh tay ngang tim, đếm nhịp mạch trước/sau vận động và quan sát mao mạch vây cá.",
    svg: `<svg viewBox="0 0 760 180" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="180" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <g transform="translate(30, 20)">
        <rect width="220" height="140" rx="8" fill="#fef2f2" class="dark:fill-rose-950/40" stroke="#f43f5e" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#be123c">1. ĐO HUYẾT ÁP BẮP TAY</text>
        <text x="15" y="48" font-size="10" fill="#9f1239">• Quấn bao quấn ngang tầm tim</text>
        <text x="15" y="68" font-size="10" fill="#9f1239">• Ngồi yên tĩnh, không nói chuyện</text>
        <text x="15" y="88" font-size="10" fill="#9f1239">• Tâm thu (tối đa): ~110-120 mmHg</text>
        <text x="15" y="108" font-size="10" fill="#9f1239">• Tâm trương (tối thiểu): ~70-80 mmHg</text>
        <text x="15" y="126" font-size="10" font-weight="bold" fill="#be123c">Chuẩn bình thông nhau</text>
      </g>

      <g transform="translate(270, 20)">
        <rect width="220" height="140" rx="8" fill="#fffbeb" class="dark:fill-amber-950/40" stroke="#f59e0b" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#b45309">2. ĐẾM MẠCH ĐẬP CỔ TAY</text>
        <text x="15" y="48" font-size="10" fill="#92400e">• 2 ngón tay đặt rãnh quay</text>
        <text x="15" y="68" font-size="10" fill="#92400e">• Nghỉ ngơi: 70 - 80 nhịp/phút</text>
        <text x="15" y="88" font-size="10" fill="#92400e">• Vận động 2 phút: 120-150 nhịp/phút</text>
        <text x="15" y="108" font-size="10" fill="#92400e">• Tăng cung lượng tim cấp O₂</text>
        <text x="15" y="126" font-size="10" font-weight="bold" fill="#b45309">Hồi phục dần sau 5-10 phút</text>
      </g>

      <g transform="translate(510, 20)">
        <rect width="220" height="140" rx="8" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">3. SOI MAO MẠCH CÁ</text>
        <text x="15" y="48" font-size="10" fill="#1e40af">• Quấn bông ướt giữ ẩm mang cá</text>
        <text x="15" y="68" font-size="10" fill="#1e40af">• Trải vây đuôi lên lam kính soi 10x</text>
        <text x="15" y="88" font-size="10" fill="#1e40af">• Lòng mao mạch cực nhỏ hẹp</text>
        <text x="15" y="108" font-size="10" fill="#1e40af">• Hồng cầu trườn hàng 1 đơn lẻ</text>
        <text x="15" y="126" font-size="10" font-weight="bold" fill="#1d4ed8">Tốc độ chậm để trao đổi chất</text>
      </g>
    </svg>`
  },

  // Bài 12: Miễn dịch ở người
  12: {
    note: "Miễn dịch không đặc hiệu (da, niêm mạc, thực bào) và đặc hiệu: Tế bào B tiết kháng thể dịch thể vs Tế bào T độc tiêu diệt tế bào nhiễm.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <rect x="25" y="20" width="220" height="150" rx="10" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
      <text x="135" y="42" text-anchor="middle" font-weight="bold" font-size="12" fill="#065f46" class="dark:fill-emerald-300">MIỄN DỊCH BẨM SINH</text>
      <text x="35" y="68" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Không đặc hiệu, có sẵn khi sinh</text>
      <text x="35" y="88" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Rào cản da nguyên vẹn, niêm mạc</text>
      <text x="35" y="108" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Dịch tiết lysozyme, axit dạ dày</text>
      <text x="35" y="128" font-size="11" fill="#047857" class="dark:fill-emerald-400">• Đại thực bào ăn vật lạ</text>
      <text x="35" y="148" font-size="10" font-weight="bold" fill="#065f46">Phản ứng viêm sưng nóng đỏ đau</text>

      <rect x="260" y="20" width="230" height="150" rx="10" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
      <text x="375" y="42" text-anchor="middle" font-weight="bold" font-size="12" fill="#1e40af" class="dark:fill-blue-300">MIỄN DỊCH DỊCH THỂ (LYMPHO B)</text>
      <text x="275" y="68" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• Tế bào B nhận diện kháng nguyên</text>
      <text x="275" y="88" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• Biệt hóa thành TƯƠNG BÀO</text>
      <text x="275" y="108" font-size="11" font-weight="bold" fill="#2563eb">• Tiết Kháng thể hình chữ Y</text>
      <text x="275" y="128" font-size="11" fill="#1d4ed8" class="dark:fill-blue-400">• Kháng thể khớp đặc hiệu epitop</text>
      <text x="275" y="148" font-size="10" font-weight="bold" fill="#1e40af">Trung hòa & ngưng kết mầm bệnh</text>

      <rect x="505" y="20" width="230" height="150" rx="10" fill="#faf5ff" class="dark:fill-purple-950/40" stroke="#a855f7" />
      <text x="620" y="42" text-anchor="middle" font-weight="bold" font-size="12" fill="#6b21a8" class="dark:fill-purple-300">MIỄN DỊCH TẾ BÀO (LYMPHO T)</text>
      <text x="520" y="68" font-size="11" fill="#7e22ce" class="dark:fill-purple-400">• T hỗ trợ (TH/CD4): Tiết cytokine</text>
      <text x="520" y="88" font-size="11" font-weight="bold" fill="#9333ea">• T độc (TC/CD8): Nhận diện tế bào lạ</text>
      <text x="520" y="108" font-size="11" fill="#7e22ce" class="dark:fill-purple-400">• Tiết perforin đục thủng màng</text>
      <text x="520" y="128" font-size="11" fill="#7e22ce" class="dark:fill-purple-400">• Tiêu diệt tế bào nhiễm virus/ghép</text>
      <text x="520" y="148" font-size="10" font-weight="bold" fill="#6b21a8">Tế bào nhớ B & T lưu trữ nhiều năm</text>
    </svg>`
  },

  // Bài 13: Bài tiết & Cân bằng nội môi (Nephron)
  13: {
    note: "Cấu tạo Nephron: Lọc tại cầu thận, tái hấp thu 99% nước và toàn bộ glucose tại ống thận, hormone ADH và hệ RAA điều hòa nội môi.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Cầu thận & Nang Bowman -->
      <g transform="translate(30, 20)">
        <rect width="210" height="150" rx="10" fill="#fef2f2" class="dark:fill-rose-950/40" stroke="#f43f5e" />
        <text x="105" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#be123c">1. LỌC TẠI CẦU THẬN</text>
        <text x="12" y="48" font-size="10" fill="#9f1239">• Cuộn mao mạch trong nang Bowman</text>
        <text x="12" y="68" font-size="10" fill="#9f1239">• Áp suất lọc đẩy nước & chất tan</text>
        <text x="12" y="88" font-size="10" font-weight="bold" fill="#be123c">• Tạo ~180 Lít nước tiểu đầu/ngày</text>
        <text x="12" y="108" font-size="10" fill="#9f1239">• Không có tế bào máu, không protein lớn</text>
        <text x="12" y="128" font-size="10" fill="#9f1239">• Chứa glucose, amino acid, ion</text>
      </g>

      <!-- Tái hấp thu & Tiết ở Ống thận -->
      <g transform="translate(255, 20)">
        <rect width="240" height="150" rx="10" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="120" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">2. TÁI HẤP THU & TIẾT</text>
        <text x="12" y="48" font-size="10" fill="#1e40af"><tspan font-weight="bold">• Ống lượn gần:</tspan> Tái hấp thu 100% glucose,</text>
        <text x="20" y="64" font-size="10" fill="#1e40af">amino acid và ~65% Na⁺, H₂O</text>
        <text x="12" y="84" font-size="10" fill="#1e40af"><tspan font-weight="bold">• Quai Henle:</tspan> Tạo chênh lệch thẩm thấu</text>
        <text x="12" y="104" font-size="10" fill="#1e40af"><tspan font-weight="bold">• Ống lượn xa & Ống góp:</tspan></text>
        <text x="20" y="120" font-size="10" fill="#1e40af">Tiết H⁺, K⁺, chất cặn + hút nước nhờ ADH</text>
        <text x="12" y="138" font-size="10" font-weight="bold" fill="#1d4ed8">Nước tiểu chính thức: ~1.5 lít/ngày</text>
      </g>

      <!-- Điều hòa nội môi -->
      <g transform="translate(510, 20)">
        <rect width="220" height="150" rx="10" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="110" y="24" text-anchor="middle" font-weight="bold" font-size="11" fill="#047857">3. ĐIỀU HÒA NỘI MÔI</text>
        <text x="12" y="48" font-size="10" fill="#065f46"><tspan font-weight="bold">• Khát / Mất nước:</tspan> Tuyến yên tiết ADH</text>
        <text x="20" y="64" font-size="10" fill="#065f46">kích thích tái hấp thu nước ở ống góp</text>
        <text x="12" y="84" font-size="10" fill="#065f46"><tspan font-weight="bold">• Đường huyết cao:</tspan> Insulin chuyển</text>
        <text x="20" y="100" font-size="10" fill="#065f46">glucose thành glycogen dự trữ</text>
        <text x="12" y="120" font-size="10" fill="#065f46"><tspan font-weight="bold">• Đường huyết thấp:</tspan> Glucagon phân giải</text>
        <text x="20" y="136" font-size="10" fill="#047857" font-weight="bold">Phản hồi âm duy trì cân bằng động</text>
      </g>
    </svg>`
  },

  // Bài 14: Cảm ứng ở sinh vật
  14: {
    note: "Cung phản ứng cảm ứng sinh học: Tác nhân kích thích → Thụ thể tiếp nhận → Dẫn truyền/Xử lí → Cơ quan đáp ứng.",
    svg: `<svg viewBox="0 0 760 170" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr14" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#6366f1" />
        </marker>
      </defs>
      <rect width="760" height="170" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <g transform="translate(20, 35)">
        <rect width="125" height="100" rx="8" fill="#fef2f2" class="dark:fill-rose-950/40" stroke="#f43f5e" />
        <text x="62" y="32" text-anchor="middle" font-weight="bold" font-size="11" fill="#be123c">KÍCH THÍCH</text>
        <text x="62" y="55" text-anchor="middle" font-size="10" fill="#9f1239">• Ánh sáng, nhiệt</text>
        <text x="62" y="72" text-anchor="middle" font-size="10" fill="#9f1239">• Trọng lực, nước</text>
        <text x="62" y="89" text-anchor="middle" font-size="10" fill="#9f1239">• Cơ học, hóa chất</text>
      </g>
      <path d="M 150 85 L 180 85" stroke="#6366f1" stroke-width="2.5" marker-end="url(#arr14)" />

      <g transform="translate(185, 35)">
        <rect width="125" height="100" rx="8" fill="#eff6ff" class="dark:fill-blue-950/40" stroke="#3b82f6" />
        <text x="62" y="32" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">THỤ THỂ</text>
        <text x="62" y="55" text-anchor="middle" font-size="10" fill="#1e40af">• Thụ thể màng</text>
        <text x="62" y="72" text-anchor="middle" font-size="10" fill="#1e40af">• Tế bào thụ cảm</text>
        <text x="62" y="89" text-anchor="middle" font-size="10" fill="#1e40af">• Biến đổi tín hiệu</text>
      </g>
      <path d="M 315 85 L 345 85" stroke="#6366f1" stroke-width="2.5" marker-end="url(#arr14)" />

      <g transform="translate(350, 35)">
        <rect width="135" height="100" rx="8" fill="#faf5ff" class="dark:fill-purple-950/40" stroke="#a855f7" />
        <text x="67" y="32" text-anchor="middle" font-weight="bold" font-size="11" fill="#7e22ce">DẪN TRUYỀN & XỬ LÍ</text>
        <text x="67" y="55" text-anchor="middle" font-size="10" fill="#6b21a8">• Cây: Dòng ion / Auxin</text>
        <text x="67" y="72" text-anchor="middle" font-size="10" fill="#6b21a8">• Động vật: Neuron,</text>
        <text x="67" y="89" text-anchor="middle" font-size="10" fill="#6b21a8">Tủy sống & Não bộ</text>
      </g>
      <path d="M 490 85 L 520 85" stroke="#6366f1" stroke-width="2.5" marker-end="url(#arr14)" />

      <g transform="translate(525, 35)">
        <rect width="125" height="100" rx="8" fill="#fffbeb" class="dark:fill-amber-950/40" stroke="#f59e0b" />
        <text x="62" y="32" text-anchor="middle" font-weight="bold" font-size="11" fill="#b45309">CƠ QUAN ĐÁP ỨNG</text>
        <text x="62" y="55" text-anchor="middle" font-size="10" fill="#92400e">• Cơ vân co rút</text>
        <text x="62" y="72" text-anchor="middle" font-size="10" fill="#92400e">• Tuyến nội tiết</text>
        <text x="62" y="89" text-anchor="middle" font-size="10" fill="#92400e">• Tế bào thể gối</text>
      </g>
      <path d="M 655 85 L 675 85" stroke="#6366f1" stroke-width="2.5" marker-end="url(#arr14)" />

      <g transform="translate(680, 48)">
        <circle cx="35" cy="37" r="35" fill="#10b981" />
        <text x="35" y="34" text-anchor="middle" font-weight="bold" font-size="10" fill="#ffffff">ĐÁP ỨNG</text>
        <text x="35" y="48" text-anchor="middle" font-size="9" fill="#e2e8f0">THÍCH NGHI</text>
      </g>
    </svg>`
  },

  // Bài 15: Cảm ứng ở thực vật (Auxin hướng sáng)
  15: {
    note: "Auxin dồn về phía khuất tối làm tế bào phía tối kéo dài nhanh hơn, làm ngọn uốn cong hướng sáng; ứng động cụp lá trinh nữ do thể gối.",
    svg: `<svg viewBox="0 0 760 190" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="760" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-900 border border-slate-200 dark:border-slate-800" />
      
      <!-- Hướng sáng Auxin -->
      <g transform="translate(30, 20)">
        <rect width="350" height="150" rx="10" fill="#f0fdf4" class="dark:fill-emerald-950/40" stroke="#10b981" />
        <text x="175" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#047857">CƠ CHẾ AUXIN HƯỚNG SÁNG DƯƠNG (THÂN)</text>
        <text x="15" y="50" font-size="11" fill="#065f46">• Ánh sáng chiếu lệch từ 1 phía bên phải</text>
        <text x="15" y="70" font-size="11" fill="#065f46">• Hormone Auxin (IAA) di chuyển né tránh sáng dồn sang PHÍA TỐI</text>
        <text x="15" y="90" font-size="11" font-weight="bold" fill="#047857">• Phía tối: Nồng độ auxin cao → Bơm H⁺ mềm thành tế bào</text>
        <text x="15" y="110" font-size="11" fill="#065f46">• Tế bào phía tối kéo dài nhanh hơn nhiều so với phía sáng</text>
        <text x="15" y="132" font-size="11" font-weight="bold" fill="#15803d">→ Ngọn thân uốn cong chính xác về phía nguồn sáng</text>
      </g>

      <!-- Ứng động Cụp lá Trinh nữ -->
      <g transform="translate(400, 20)">
        <rect width="330" height="150" rx="10" fill="#fdf4ff" class="dark:fill-fuchsia-950/40" stroke="#d946ef" />
        <text x="165" y="26" text-anchor="middle" font-weight="bold" font-size="12" fill="#86198f">ỨNG ĐỘNG KHÔNG SINH TRƯỞNG (CỤP LÁ TRINH NỮ)</text>
        <text x="15" y="50" font-size="11" fill="#a21caf">• Va chạm cơ học kích thích lan truyền điện học dọc cuống lá</text>
        <text x="15" y="72" font-size="11" font-weight="bold" fill="#701a75">• Tế bào nửa dưới THỂ GỐI ở cuống lá mất nước đột ngột</text>
        <text x="15" y="92" font-size="11" fill="#a21caf">• Dòng ion K⁺ và Cl⁻ thoát ra → Nước thẩm thấu ồ ạt ra ngoài</text>
        <text x="15" y="112" font-size="11" fill="#a21caf">• Giảm sức trương nước nửa dưới → Lá chét cụp xuống tức thì</text>
        <text x="15" y="132" font-size="10" fill="#6b21a8">Sau vài phút nước tràn lại, lá mở bung trở lại bình thường</text>
      </g>
    </svg>`
  }
};

module.exports = p1_diagrams;
