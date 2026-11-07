// scratch/hoa12_reaction_models.js
// 8 Molecular Chemical Reaction Models for Chemistry Grade 12 (Kết nối tri thức)

module.exports = {
  // Model 1: Thủy phân ester trong kiềm (Xà phòng hóa) - Lesson 1
  1: {
    lessonId: 1,
    tag: 'Mô hình cơ chế phản ứng hữu cơ',
    title: 'Mô hình cơ chế phân tử phản ứng Xà phòng hóa Ester: CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH',
    badge: 'Mô hình phân tử CPK & Electron',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrEm1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#059669" />
        </marker>
        <marker id="arrRed1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#dc2626" />
        </marker>
      </defs>

      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />

      <!-- GIAI ĐOẠN 1: Chất tham gia & Tấn công Nucleophile -->
      <rect x="18" y="18" width="260" height="194" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2" />
      <text x="148" y="38" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">GIAI ĐOẠN 1: TẤN CÔNG NUCLEOPHILE</text>

      <g transform="translate(100, 115)">
        <!-- Ester CH3-C(=O)-O-C2H5 -->
        <!-- Carbonyl C -->
        <circle cx="0" cy="0" r="17" fill="#334155" stroke="#1e293b" stroke-width="2"/>
        <text x="0" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">C</text>
        <text x="14" y="-8" font-size="9" font-weight="bold" fill="#ef4444">δ⁺</text>

        <!-- Oxygen =O -->
        <line x1="-3" y1="-14" x2="-3" y2="-40" stroke="#ef4444" stroke-width="2.5"/>
        <line x1="3" y1="-14" x2="3" y2="-40" stroke="#ef4444" stroke-width="2.5"/>
        <circle cx="0" cy="-45" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="1.8"/>
        <text x="0" y="-41" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">O</text>
        <text x="12" y="-48" font-size="9" font-weight="bold" fill="#ef4444">δ⁻</text>

        <!-- Nhóm CH3 -->
        <line x1="-15" y1="5" x2="-48" y2="15" stroke="#64748b" stroke-width="2.5"/>
        <rect x="-65" y="5" width="26" height="18" rx="6" fill="#0284c7"/>
        <text x="-52" y="18" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">CH₃</text>

        <!-- Nhóm -O-C2H5 -->
        <line x1="15" y1="5" x2="38" y2="15" stroke="#ef4444" stroke-width="2.5"/>
        <circle cx="45" cy="18" r="13" fill="#ef4444" stroke="#b91c1c" stroke-width="1.8"/>
        <text x="45" y="22" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">O</text>

        <line x1="56" y1="22" x2="80" y2="30" stroke="#64748b" stroke-width="2.5"/>
        <rect x="80" y="22" width="28" height="18" rx="6" fill="#0284c7"/>
        <text x="94" y="35" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">C₂H₅</text>

        <!-- Ion OH- tiếp cận -->
        <g transform="translate(15, -70)">
          <path d="M 12 10 Q 5 35 -6 52" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrRed1)"/>
          <circle cx="15" cy="5" r="12" fill="#f59e0b" stroke="#d97706" stroke-width="1.8"/>
          <text x="15" y="9" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">OH⁻</text>
        </g>
      </g>
      <text x="148" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">OH⁻ mang điện âm tấn công C(δ⁺)</text>

      <!-- Mũi tên chuyển tiếp 1 -> 2 -->
      <path d="M 288 115 L 308 115" stroke="#059669" stroke-width="2.5" marker-end="url(#arrEm1)"/>

      <!-- GIAI ĐOẠN 2: Trạng thái trung gian tứ diện -->
      <rect x="318" y="18" width="240" height="194" rx="12" fill="#f0fdf4" class="dark:fill-slate-800/80" stroke="#10b981" stroke-width="1.2"/>
      <text x="438" y="38" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">GIAI ĐOẠN 2: TRUNG GIAN TỨ DIỆN</text>

      <g transform="translate(438, 115)">
        <circle cx="0" cy="0" r="17" fill="#334155" stroke="#1e293b" stroke-width="2"/>
        <text x="0" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">C</text>

        <!-- -O(-) phía trên -->
        <line x1="0" y1="-14" x2="0" y2="-38" stroke="#ef4444" stroke-width="2.5"/>
        <circle cx="0" cy="-45" r="13" fill="#ef4444" stroke="#b91c1c" stroke-width="1.8"/>
        <text x="0" y="-41" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">O⁻</text>

        <!-- -CH3 bên trái -->
        <line x1="-15" y1="0" x2="-35" y2="0" stroke="#64748b" stroke-width="2.5"/>
        <rect x="-58" y="-9" width="25" height="18" rx="6" fill="#0284c7"/>
        <text x="-45.5" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">CH₃</text>

        <!-- -OH gắn vào dưới trái -->
        <line x1="-10" y1="12" x2="-25" y2="30" stroke="#f59e0b" stroke-width="2.5"/>
        <circle cx="-32" cy="38" r="12" fill="#f59e0b" stroke="#d97706" stroke-width="1.5"/>
        <text x="-32" y="42" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">OH</text>

        <!-- -OC2H5 sắp đứt liên kết (nét đứt đỏ) -->
        <line x1="12" y1="8" x2="35" y2="25" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="3,3"/>
        <circle cx="42" cy="30" r="12" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
        <text x="42" y="34" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">O</text>
        <rect x="56" y="24" width="24" height="16" rx="5" fill="#0284c7"/>
        <text x="68" y="36" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">C₂H₅</text>
        <text x="45" y="52" font-size="9" font-weight="bold" fill="#dc2626">đứt liên kết C–O</text>
      </g>
      <text x="438" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Cặp e đẩy tái tạo C=O, tách C₂H₅O⁻</text>

      <!-- Mũi tên chuyển tiếp 2 -> 3 -->
      <path d="M 568 115 L 588 115" stroke="#059669" stroke-width="2.5" marker-end="url(#arrEm1)"/>

      <!-- GIAI ĐOẠN 3: Sản phẩm Muối Carboxylate & Alcohol -->
      <rect x="598" y="18" width="244" height="194" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="720" y="38" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">GIAI ĐOẠN 3: MUỐI &amp; ALCOHOL</text>

      <g transform="translate(660, 115)">
        <!-- Muối CH3COONa -->
        <circle cx="0" cy="0" r="15" fill="#334155"/>
        <text x="0" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">C</text>
        <circle cx="0" cy="-32" r="12" fill="#ef4444"/>
        <text x="0" y="-28" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">O</text>
        <circle cx="28" cy="15" r="12" fill="#ef4444"/>
        <text x="28" y="19" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">O⁻</text>
        <circle cx="48" cy="15" r="10" fill="#8b5cf6"/>
        <text x="48" y="18" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">Na⁺</text>
        <rect x="-42" y="-7" width="24" height="16" rx="5" fill="#0284c7"/>
        <text x="-30" y="5" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">CH₃</text>
        <text x="0" y="42" text-anchor="middle" font-size="9" font-weight="bold" fill="#065f46">CH₃COONa</text>
      </g>

      <g transform="translate(775, 115)">
        <!-- Alcohol C2H5OH -->
        <circle cx="0" cy="-5" r="12" fill="#ef4444"/>
        <text x="0" y="-1" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">O</text>
        <circle cx="15" cy="-15" r="8" fill="#e2e8f0"/>
        <text x="15" y="-12" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="8">H</text>
        <rect x="-35" y="-12" width="25" height="16" rx="5" fill="#0284c7"/>
        <text x="-22.5" y="0" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">C₂H₅</text>
        <text x="-5" y="42" text-anchor="middle" font-size="9" font-weight="bold" fill="#0284c7">C₂H₅OH</text>
      </g>
      <text x="720" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Phản ứng một chiều hoàn toàn (→)</text>
    </svg>`,
    mechanism: 'Ion OH⁻ mang điện tích âm đóng vai trò tác nhân nucleophile tấn công vào nguyên tử C mang điện tích dương bộ phận (δ⁺) của nhóm carbonyl (C=O). Hợp chất trung gian tứ diện kém bền nhanh chóng tái lập liên kết đôi C=O, bẻ gãy liên kết C–O acyl và giải phóng ion ethoxide (C₂H₅O⁻). Chuyển dịch proton H⁺ hoàn tất tạo muối sodium acetate (CH₃COONa) và ethanol (C₂H₅OH).'
  },

  // Model 2: Hạt Micelle & Cơ chế tẩy rửa xà phòng - Lesson 2
  2: {
    lessonId: 2,
    tag: 'Mô hình hóa lý bề mặt & tẩy rửa',
    title: 'Mô hình cấu trúc Micelle phân tử & Cơ chế tẩy sạch vết dầu mỡ của Xà phòng',
    badge: 'Mô hình phân tử Micelle',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />

      <!-- KHUNG 1: Cấu tạo 1 phân tử muối acid béo -->
      <rect x="20" y="20" width="260" height="190" rx="12" fill="#f0fdfa" class="dark:fill-teal-950/20" stroke="#2dd4bf" stroke-width="1.2"/>
      <text x="150" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#0f766e" class="dark:fill-teal-300">CẤU TẠO PHÂN TỬ XÀ PHÒNG</text>

      <g transform="translate(45, 110)">
        <!-- Đuôi kị nước (Hydrophobic tail) -->
        <path d="M 0 0 L 15 -12 L 30 0 L 45 -12 L 60 0 L 75 -12 L 90 0 L 105 -12 L 120 0 L 135 -12 L 150 0" fill="none" stroke="#64748b" stroke-width="3.5" stroke-linecap="round"/>
        <text x="75" y="24" text-anchor="middle" font-size="9" font-weight="bold" fill="#475569">Đuôi hydrocarbon C₁₇H₃₅– (Kị nước, ưa dầu)</text>

        <!-- Đầu ưa nước (Hydrophilic head) -->
        <circle cx="170" cy="0" r="16" fill="#0d9488" stroke="#115e59" stroke-width="2"/>
        <text x="170" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">–COO⁻</text>
        <circle cx="198" cy="-8" r="9" fill="#8b5cf6"/>
        <text x="198" y="-5" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">Na⁺</text>
        <text x="175" y="32" text-anchor="middle" font-size="9" font-weight="bold" fill="#0d9488">Đầu –COO⁻ (Ưa nước)</text>
      </g>
      <text x="150" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">Cấu trúc lưỡng ái tính (Amphiphilic)</text>

      <!-- KHUNG 2: Thâm nhập hạt dầu bẩn -->
      <rect x="295" y="20" width="265" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="427" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1e40af" class="dark:fill-blue-300">BAO VÂY HẠT DẦU BẨN</text>

      <g transform="translate(427, 120)">
        <!-- Giọt dầu trên mặt vải -->
        <line x1="-95" y1="45" x2="95" y2="45" stroke="#94a3b8" stroke-width="3"/>
        <text x="-70" y="58" font-size="9" font-weight="bold" fill="#64748b">Bề mặt sợi vải</text>

        <path d="M -60 45 Q 0 -25 60 45 Z" fill="#fef08a" stroke="#eab308" stroke-width="2"/>
        <text x="0" y="32" text-anchor="middle" font-weight="bold" font-size="10" fill="#854d0e">Giọt dầu mỡ</text>

        <!-- Đuôi xà phòng cắm vào dầu -->
        <g stroke="#64748b" stroke-width="2.5" fill="none">
          <path d="M -40 -35 L -35 -20 L -30 -5 L -25 15"/>
          <path d="M 0 -45 L 0 -30 L 0 -15 L 0 5"/>
          <path d="M 40 -35 L 35 -20 L 30 -5 L 25 15"/>
        </g>
        <!-- Đầu ưa nước hướng ra ngoài nước -->
        <circle cx="-42" cy="-40" r="10" fill="#0d9488"/>
        <text x="-42" y="-37" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">–</text>
        <circle cx="0" cy="-50" r="10" fill="#0d9488"/>
        <text x="0" y="-47" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">–</text>
        <circle cx="42" cy="-40" r="10" fill="#0d9488"/>
        <text x="42" y="-37" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">–</text>
      </g>
      <text x="427" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">Đuôi tan trong dầu, đầu cản nước</text>

      <!-- KHUNG 3: Hạt Micelle nhũ hóa trôi đi -->
      <rect x="575" y="20" width="265" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="707" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">HẠT MICELLE HOÀN CHỈNH</text>

      <g transform="translate(707, 118)">
        <!-- Lõi dầu tròn -->
        <circle cx="0" cy="0" r="26" fill="#fef08a" stroke="#eab308" stroke-width="2"/>
        <text x="0" y="4" text-anchor="middle" font-size="9" font-weight="bold" fill="#854d0e">Dầu bẩn</text>

        <!-- 8 nan hoa xà phòng xung quanh -->
        ${[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
          const rad = (deg * Math.PI) / 180;
          const x1 = Math.cos(rad) * 26;
          const y1 = Math.sin(rad) * 26;
          const x2 = Math.cos(rad) * 50;
          const y2 = Math.sin(rad) * 50;
          return `
            <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#64748b" stroke-width="2.5"/>
            <circle cx="${x2}" cy="${y2}" r="8" fill="#0d9488"/>
            <text x="${x2}" y="${y2 + 3}" text-anchor="middle" fill="#fff" font-size="6" font-weight="bold">–</text>
          `;
        }).join('')}
      </g>
      <text x="707" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">Các đầu âm đẩy nhau, bị dòng nước cuốn trôi</text>
    </svg>`,
    mechanism: 'Phân tử xà phòng có cấu tạo hai đầu đối lập: đuôi dài hydrocarbon không phân cực kị nước thâm nhập vào các giọt dầu mỡ, trong khi đầu carboxylate –COO⁻ phân cực mạnh ưa nước hướng ra dung dịch. Dưới tác dụng cơ học cọ xát, các giọt dầu bị xé nhỏ thành các hạt micelle hình cầu lơ lửng. Do các đầu –COO⁻ đều tích điện âm đẩy nhau, các hạt micelle không thể kết tụ lại mà bị nước cuốn trôi hoàn toàn.'
  },

  // Model 3: Phản ứng Tráng Bạc của D-Glucose - Lesson 4
  4: {
    lessonId: 4,
    tag: 'Mô hình phản ứng oxi hóa – khử carbohydrate',
    title: 'Mô hình cơ chế phân tử phản ứng Tráng Bạc: Glucose + 2[Ag(NH₃)₂]OH → Ammonium Gluconate + 2Ag↓ + 3NH₃ + H₂O',
    badge: 'Mô hình phân tử Tráng Bạc',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrSlv" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#0284c7" />
        </marker>
      </defs>
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />

      <!-- KHUNG 1: Dạng mạch hở Glucose mang nhóm -CHO -->
      <rect x="20" y="20" width="260" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="150" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">GLUCOSE DẠNG MẠCH HỞ (–CHO)</text>

      <g transform="translate(140, 115)">
        <!-- Nhóm -CH=O -->
        <circle cx="0" cy="-35" r="14" fill="#334155"/>
        <text x="0" y="-31" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">C</text>
        <circle cx="28" cy="-45" r="12" fill="#ef4444"/>
        <text x="28" y="-41" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">O</text>
        <line x1="12" y1="-38" x2="19" y2="-43" stroke="#ef4444" stroke-width="2"/>
        <line x1="9" y1="-32" x2="16" y2="-37" stroke="#ef4444" stroke-width="2"/>
        <circle cx="-25" cy="-35" r="9" fill="#e2e8f0"/>
        <text x="-25" y="-32" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="8">H</text>
        <line x1="-12" y1="-35" x2="-16" y2="-35" stroke="#94a3b8" stroke-width="2"/>

        <!-- Trục C2 - C5 -->
        <line x1="0" y1="-21" x2="0" y2="40" stroke="#64748b" stroke-width="3"/>
        <rect x="-38" y="-12" width="76" height="20" rx="6" fill="#0284c7"/>
        <text x="0" y="2" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">(CHOH)₄</text>

        <!-- Đuôi CH2OH -->
        <rect x="-38" y="20" width="76" height="20" rx="6" fill="#0d9488"/>
        <text x="0" y="34" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">CH₂OH</text>
      </g>
      <text x="150" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Nhóm aldehyde –CHO có tính khử mạnh</text>

      <path d="M 288 115 L 308 115" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrSlv)"/>

      <!-- KHUNG 2: Phức [Ag(NH3)2]+ tiếp nhận e -->
      <rect x="318" y="20" width="240" height="190" rx="12" fill="#f8fafc" class="dark:fill-slate-800/80" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="438" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#334155" class="dark:fill-slate-200">ION PHỨC TOLLENS [Ag(NH₃)₂]⁺</text>

      <g transform="translate(438, 115)">
        <circle cx="0" cy="0" r="18" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2.5"/>
        <text x="0" y="4" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="11">Ag⁺</text>

        <!-- 2 phối tử NH3 -->
        <line x1="-18" y1="0" x2="-45" y2="0" stroke="#3b82f6" stroke-width="2.5"/>
        <rect x="-70" y="-11" width="25" height="22" rx="6" fill="#3b82f6"/>
        <text x="-57.5" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">NH₃</text>

        <line x1="18" y1="0" x2="45" y2="0" stroke="#3b82f6" stroke-width="2.5"/>
        <rect x="45" y="-11" width="25" height="22" rx="6" fill="#3b82f6"/>
        <text x="57.5" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">NH₃</text>

        <!-- Mũi tên e- nhận -->
        <path d="M -50 -55 Q 0 -35 0 -22" fill="none" stroke="#eab308" stroke-width="2.5" stroke-dasharray="3,3" marker-end="url(#arrSlv)"/>
        <text x="-25" y="-45" font-size="10" font-weight="bold" fill="#ca8a04">+ 1e⁻ (Nhận e)</text>
      </g>
      <text x="438" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#475569">Ag⁺ nhận e khử thành Ag kim loại</text>

      <path d="M 568 115 L 588 115" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrSlv)"/>

      <!-- KHUNG 3: Lớp gương Bạc kết tinh -->
      <rect x="598" y="20" width="244" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="720" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">GƯƠNG BẠC (Ag) BÁM THÀNH ỐNG</text>

      <g transform="translate(680, 115)">
        <!-- Ammonium gluconate -->
        <rect x="-35" y="-35" width="85" height="20" rx="5" fill="#059669"/>
        <text x="7.5" y="-21" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">R–COONH₄</text>
        <text x="7.5" y="-5" text-anchor="middle" font-size="8" font-weight="bold" fill="#047857">Ammonium gluconate</text>

        <!-- Các tinh thể Ag kim loại sáng bóng -->
        <g transform="translate(85, 0)">
          <circle cx="0" cy="-25" r="14" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
          <text x="0" y="-21" text-anchor="middle" fill="#334155" font-weight="bold" font-size="10">Ag</text>
          <circle cx="22" cy="-10" r="14" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
          <text x="22" y="-6" text-anchor="middle" fill="#334155" font-weight="bold" font-size="10">Ag</text>
          <circle cx="-10" cy="5" r="14" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
          <text x="-10" y="9" text-anchor="middle" fill="#334155" font-weight="bold" font-size="10">Ag</text>
          <circle cx="15" cy="18" r="14" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
          <text x="15" y="22" text-anchor="middle" fill="#334155" font-weight="bold" font-size="10">Ag</text>
          <text x="6" y="45" text-anchor="middle" font-size="9" font-weight="bold" fill="#475569">2Ag↓ (sáng bóng)</text>
        </g>
      </g>
      <text x="720" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">1 mol Glucose sinh ra 2 mol Ag kim loại</text>
    </svg>`,
    mechanism: 'Trong môi trường kiềm nhẹ của thuốc thử Tollens, dạng vòng hemiacetal của glucose mở ra thành dạng mạch hở chứa nhóm aldehyde (–CHO). Nhóm –CHO khử phức ion bạc [Ag(NH₃)₂]⁺ về nguyên tử Ag kim loại tự do, đồng thời chính nó bị oxi hóa thành nhóm carboxylate trong muối ammonium gluconate. Các nguyên tử Ag kết tụ lại bám đều vào thành thủy tinh tạo thành lớp gương bạc sáng bóng đặc trưng.'
  },

  // Model 4: Hình thành liên kết Peptide - Lesson 9
  9: {
    lessonId: 9,
    tag: 'Mô hình phản ứng ngưng tụ peptide',
    title: 'Mô hình cơ chế phân tử phản ứng tạo Liên kết Peptide: Glycine + Alanine → Gly-Ala + H₂O',
    badge: 'Mô hình liên kết –CO–NH–',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrPep" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#8b5cf6" />
        </marker>
      </defs>
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />

      <!-- KHUNG 1: 2 Amino Acid riêng biệt -->
      <rect x="20" y="20" width="370" height="190" rx="12" fill="#f5f3ff" class="dark:fill-purple-950/20" stroke="#a78bfa" stroke-width="1.2"/>
      <text x="205" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#6d28d9" class="dark:fill-purple-300">HAI AMINO ACID (GLYCINE &amp; ALANINE)</text>

      <g transform="translate(60, 115)">
        <!-- Glycine: H2N-CH2-COOH -->
        <rect x="0" y="-10" width="28" height="20" rx="6" fill="#3b82f6"/>
        <text x="14" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">H₂N</text>
        <line x1="28" y1="0" x2="48" y2="0" stroke="#64748b" stroke-width="2.5"/>
        <rect x="48" y="-10" width="28" height="20" rx="6" fill="#0284c7"/>
        <text x="62" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">CH₂</text>
        <line x1="76" y1="0" x2="96" y2="0" stroke="#64748b" stroke-width="2.5"/>
        <rect x="96" y="-10" width="20" height="20" rx="6" fill="#334155"/>
        <text x="106" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">C</text>
        <circle cx="106" cy="-26" r="10" fill="#ef4444"/>
        <text x="106" y="-23" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">O</text>
        <!-- Vùng tách OH -->
        <rect x="122" y="-12" width="26" height="24" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2"/>
        <text x="135" y="4" text-anchor="middle" fill="#b91c1c" font-weight="bold" font-size="9">–OH</text>
        <text x="65" y="28" text-anchor="middle" font-size="9" font-weight="bold" fill="#6d28d9">Glycine</text>

        <!-- Alanine: H-NH-CH(CH3)-COOH -->
        <g transform="translate(165, 0)">
          <!-- Vùng tách H -->
          <rect x="0" y="-12" width="20" height="24" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2"/>
          <text x="10" y="4" text-anchor="middle" fill="#b91c1c" font-weight="bold" font-size="9">H–</text>
          <rect x="25" y="-10" width="24" height="20" rx="6" fill="#3b82f6"/>
          <text x="37" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">NH</text>
          <line x1="49" y1="0" x2="65" y2="0" stroke="#64748b" stroke-width="2.5"/>
          <rect x="65" y="-10" width="25" height="20" rx="6" fill="#0284c7"/>
          <text x="77.5" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">CH</text>
          <line x1="77.5" y1="10" x2="77.5" y2="24" stroke="#64748b" stroke-width="2"/>
          <rect x="65" y="24" width="25" height="16" rx="5" fill="#f59e0b"/>
          <text x="77.5" y="36" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">CH₃</text>
          <line x1="90" y1="0" x2="105" y2="0" stroke="#64748b" stroke-width="2.5"/>
          <rect x="105" y="-10" width="38" height="20" rx="6" fill="#059669"/>
          <text x="124" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">COOH</text>
          <text x="80" y="52" text-anchor="middle" font-size="9" font-weight="bold" fill="#6d28d9">Alanine</text>
        </g>
      </g>
      <text x="205" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">Tách –OH từ –COOH và –H từ –NH₂ tạo H₂O</text>

      <path d="M 400 115 L 420 115" stroke="#8b5cf6" stroke-width="2.5" marker-end="url(#arrPep)"/>

      <!-- KHUNG 2: Dipeptide Gly-Ala với liên kết -CO-NH- -->
      <rect x="430" y="20" width="410" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="635" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">DIPEPTIDE GLYCYLALANINE (GLY-ALA)</text>

      <g transform="translate(470, 115)">
        <rect x="0" y="-10" width="28" height="20" rx="6" fill="#3b82f6"/>
        <text x="14" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">H₂N</text>
        <line x1="28" y1="0" x2="48" y2="0" stroke="#64748b" stroke-width="2.5"/>
        <rect x="48" y="-10" width="28" height="20" rx="6" fill="#0284c7"/>
        <text x="62" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">CH₂</text>

        <!-- KHỐI LIÊN KẾT PEPTIDE HIGHLIGHT -->
        <rect x="85" y="-35" width="90" height="65" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
        <text x="130" y="-20" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">Liên kết peptide</text>

        <rect x="95" y="-10" width="22" height="20" rx="6" fill="#334155"/>
        <text x="106" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">C</text>
        <circle cx="106" cy="-10" r="2" fill="#ef4444"/>
        <line x1="106" y1="-10" x2="106" y2="-18" stroke="#ef4444" stroke-width="2"/>
        <circle cx="106" cy="-18" r="8" fill="#ef4444"/>
        <text x="106" y="-15" text-anchor="middle" fill="#fff" font-weight="bold" font-size="7">O</text>

        <line x1="117" y1="0" x2="135" y2="0" stroke="#f59e0b" stroke-width="3.5"/>

        <rect x="135" y="-10" width="25" height="20" rx="6" fill="#3b82f6"/>
        <text x="147.5" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">NH</text>

        <!-- Phần còn lại của Alanine -->
        <line x1="160" y1="0" x2="185" y2="0" stroke="#64748b" stroke-width="2.5"/>
        <rect x="185" y="-10" width="25" height="20" rx="6" fill="#0284c7"/>
        <text x="197.5" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">CH</text>
        <line x1="197.5" y1="10" x2="197.5" y2="24" stroke="#64748b" stroke-width="2"/>
        <rect x="185" y="24" width="25" height="16" rx="5" fill="#f59e0b"/>
        <text x="197.5" y="36" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">CH₃</text>
        <line x1="210" y1="0" x2="230" y2="0" stroke="#64748b" stroke-width="2.5"/>
        <rect x="230" y="-10" width="38" height="20" rx="6" fill="#059669"/>
        <text x="249" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">COOH</text>

        <!-- H2O tách ra -->
        <g transform="translate(290, 0)">
          <circle cx="15" cy="0" r="14" fill="#38bdf8"/>
          <text x="15" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">+ H₂O</text>
        </g>
      </g>
      <text x="635" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Liên kết amide giữa 2 đơn vị α-amino acid</text>
    </svg>`,
    mechanism: 'Nhóm carboxyl (–COOH) của đơn vị amino acid thứ nhất (Glycine) tương tác loại bỏ nhóm –OH, đồng thời nhóm amino (–NH₂) của đơn vị amino acid thứ hai (Alanine) loại bỏ nguyên tử –H để giải phóng 1 phân tử nước (H₂O). Nguyên tử C carbonyl liên kết trực tiếp với nguyên tử N tạo thành liên kết peptide (–CO–NH–) bền vững trong đại phân tử protein.'
  },

  // Model 5: Trùng hợp Polyethylene (PE) - Lesson 12
  12: {
    lessonId: 12,
    tag: 'Mô hình phản ứng trùng hợp polymer',
    title: 'Mô hình cơ chế bẻ gãy liên kết đôi π & Trùng hợp tạo Polyethylene (PE): nCH₂=CH₂ → (–CH₂–CH₂–)n',
    badge: 'Mô hình bẻ gãy liên kết π',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrPol" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#0284c7" />
        </marker>
      </defs>
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />

      <!-- KHUNG 1: Các monomer Ethylene CH2=CH2 -->
      <rect x="20" y="20" width="260" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="150" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">MONOMER ETHYLENE (CH₂=CH₂)</text>

      <g transform="translate(100, 115)">
        <!-- 2 phân tử Ethylene -->
        <g transform="translate(-20, 0)">
          <rect x="-35" y="-12" width="28" height="24" rx="6" fill="#0284c7"/>
          <text x="-21" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">CH₂</text>
          <!-- Liên kết đôi C=C -->
          <line x1="-7" y1="-4" x2="15" y2="-4" stroke="#334155" stroke-width="2.5"/>
          <line x1="-7" y1="4" x2="15" y2="4" stroke="#ef4444" stroke-width="2.5"/>
          <text x="4" y="-10" text-anchor="middle" font-size="8" font-weight="bold" fill="#ef4444">π kém bền</text>
          <rect x="15" y="-12" width="28" height="24" rx="6" fill="#0284c7"/>
          <text x="29" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">CH₂</text>
        </g>
        <text x="75" y="4" font-size="16" font-weight="bold" fill="#64748b">+</text>
        <g transform="translate(110, 0)">
          <rect x="-35" y="-12" width="28" height="24" rx="6" fill="#0284c7"/>
          <text x="-21" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">CH₂</text>
          <line x1="-7" y1="-4" x2="15" y2="-4" stroke="#334155" stroke-width="2.5"/>
          <line x1="-7" y1="4" x2="15" y2="4" stroke="#ef4444" stroke-width="2.5"/>
          <rect x="15" y="-12" width="28" height="24" rx="6" fill="#0284c7"/>
          <text x="29" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">CH₂</text>
        </g>
      </g>
      <text x="150" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Mỗi monomer có 1 liên kết σ + 1 liên kết π</text>

      <path d="M 288 115 L 308 115" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrPol)"/>

      <!-- KHUNG 2: Kích hoạt nhiệt độ & Xúc tác mở liên kết pi -->
      <rect x="318" y="20" width="240" height="190" rx="12" fill="#fffbeb" class="dark:fill-amber-950/20" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="438" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#b45309" class="dark:fill-amber-300">BẺ GÃY LIÊN KẾT π (t°, p, xt)</text>

      <g transform="translate(438, 115)">
        <rect x="-65" y="-12" width="28" height="24" rx="6" fill="#0284c7"/>
        <text x="-51" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">·CH₂</text>
        <line x1="-37" y1="0" x2="-5" y2="0" stroke="#334155" stroke-width="3"/>
        <rect x="-5" y="-12" width="28" height="24" rx="6" fill="#0284c7"/>
        <text x="9" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">CH₂·</text>

        <!-- e- tự do ở 2 đầu -->
        <circle cx="-60" cy="-18" r="4" fill="#dc2626"/>
        <circle cx="18" cy="-18" r="4" fill="#dc2626"/>
        <text x="-21" y="-20" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">2 electron hóa trị tự do</text>
        <path d="M -25 25 L 5 25" stroke="#f59e0b" stroke-width="2"/>
        <text x="-10" y="42" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">Mở ra liên kết 2 phía</text>
      </g>
      <text x="438" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">Trung gian hoạt động kết nối liên tục</text>

      <path d="M 568 115 L 588 115" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrPol)"/>

      <!-- KHUNG 3: Chuỗi Polymer PE mạch dài -->
      <rect x="598" y="20" width="244" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="720" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">POLYETHYLENE (–CH₂–CH₂–)n</text>

      <g transform="translate(720, 115)">
        <text x="-95" y="4" font-size="16" font-weight="bold" fill="#059669">···[</text>
        <rect x="-75" y="-12" width="26" height="24" rx="6" fill="#0284c7"/>
        <text x="-62" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">CH₂</text>
        <line x1="-49" y1="0" x2="-35" y2="0" stroke="#059669" stroke-width="3"/>
        <rect x="-35" y="-12" width="26" height="24" rx="6" fill="#0284c7"/>
        <text x="-22" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">CH₂</text>
        <line x1="-9" y1="0" x2="5" y2="0" stroke="#059669" stroke-width="3"/>
        <rect x="5" y="-12" width="26" height="24" rx="6" fill="#0284c7"/>
        <text x="18" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">CH₂</text>
        <line x1="31" y1="0" x2="45" y2="0" stroke="#059669" stroke-width="3"/>
        <rect x="45" y="-12" width="26" height="24" rx="6" fill="#0284c7"/>
        <text x="58" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">CH₂</text>
        <text x="75" y="4" font-size="16" font-weight="bold" fill="#059669">]n···</text>
      </g>
      <text x="720" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Đại phân tử mạch dài uốn dẻo, bền hóa học</text>
    </svg>`,
    mechanism: 'Dưới tác dụng của nhiệt độ cao, áp suất lớn và chất khơi mào (xúc tác), liên kết π kém bền trong liên kết đôi C=C của các phân tử monomer ethylene bị bẻ gãy. Hai electron hóa trị tự do được giải phóng ở hai đầu nguyên tử carbon, nhanh chóng liên kết cộng hóa trị với các monomer bên cạnh để nối dài thành chuỗi mạch polymer Polyethylene (PE) khổng lồ.'
  },

  // Model 6: Pin điện hóa Daniell (Zn-Cu) - Lesson 15
  15: {
    lessonId: 15,
    tag: 'Mô hình nguồn điện hóa học & điện cực',
    title: 'Mô hình dòng electron & chuyển dịch ion trong Pin điện hóa Daniell: Zn + Cu²⁺ → Zn²⁺ + Cu (E°pin = 1.10 V)',
    badge: 'Mô hình phân tử Pin Daniell',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrVolt" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b" />
        </marker>
        <marker id="arrZn" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#3b82f6" />
        </marker>
      </defs>
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />

      <!-- KHUNG PIN TOÀN PHẦN -->
      <!-- Dây dẫn ngoài & Vôn kế -->
      <path d="M 175 110 L 175 40 L 430 40 L 685 40 L 685 110" fill="none" stroke="#64748b" stroke-width="3"/>
      <!-- Chiều electron -->
      <path d="M 230 35 L 350 35" fill="none" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrVolt)"/>
      <text x="290" y="28" text-anchor="middle" font-size="10" font-weight="bold" fill="#d97706">Chiều e⁻ (từ Anot sang Catot)</text>
      <!-- Vôn kế V = 1.10V -->
      <circle cx="430" cy="40" r="18" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="430" y="44" text-anchor="middle" font-weight="black" font-size="10" fill="#854d0e">1.10V</text>

      <!-- CẦU MUỐI (Salt Bridge) -->
      <path d="M 255 130 L 255 75 L 605 75 L 605 130" fill="none" stroke="#e0e7ff" stroke-width="22" stroke-linecap="round"/>
      <path d="M 255 130 L 255 75 L 605 75 L 605 130" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round"/>
      <text x="430" y="79" text-anchor="middle" font-size="9" font-weight="bold" fill="#4338ca">CẦU MUỐI (KCl / KNO₃): Cl⁻ ← | → K⁺</text>

      <!-- CỰC ÂM ANODE (Thanh Zn) -->
      <rect x="70" y="90" width="210" height="120" rx="12" fill="#eff6ff" class="dark:fill-blue-950/30" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="175" y="108" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">ANODE (−): THANH KẼM (Zn)</text>
      <!-- Thanh Zn -->
      <rect x="165" y="115" width="20" height="75" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
      <text x="175" y="155" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="10">Zn</text>
      <!-- Zn2+ tan ra -->
      <circle cx="120" cy="160" r="12" fill="#dbeafe"/>
      <text x="120" y="164" text-anchor="middle" fill="#1d4ed8" font-weight="bold" font-size="9">Zn²⁺</text>
      <text x="175" y="202" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">Zn → Zn²⁺ + 2e⁻ (Bị oxi hóa)</text>

      <!-- CỰC DƯƠNG CATHODE (Thanh Cu) -->
      <rect x="580" y="90" width="210" height="120" rx="12" fill="#fff7ed" class="dark:fill-amber-950/30" stroke="#f97316" stroke-width="1.5"/>
      <text x="685" y="108" text-anchor="middle" font-weight="bold" font-size="11" fill="#c2410c">CATHODE (+): THANH ĐỒNG (Cu)</text>
      <!-- Thanh Cu -->
      <rect x="675" y="115" width="20" height="75" rx="3" fill="#ea580c" stroke="#9a3412" stroke-width="1.5"/>
      <text x="685" y="155" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">Cu</text>
      <!-- Cu2+ nhận e bám vào -->
      <circle cx="635" cy="160" r="12" fill="#ffedd5"/>
      <text x="635" y="164" text-anchor="middle" fill="#c2410c" font-weight="bold" font-size="9">Cu²⁺</text>
      <text x="685" y="202" text-anchor="middle" font-size="10" font-weight="bold" fill="#9a3412">Cu²⁺ + 2e⁻ → Cu↓ (Bị khử)</text>
    </svg>`,
    mechanism: 'Tại cực âm (anode), thanh Zn có thế điện cực chuẩn âm hơn nên bị oxi hóa: Zn → Zn²⁺ + 2e⁻. Các electron giải phóng di chuyển theo dây dẫn ngoài sang cực dương (cathode) tạo thành dòng điện làm kim vôn kế lệch 1.10 V. Tại cực dương, các ion Cu²⁺ trong dung dịch nhận electron bị khử thành Cu kim loại bám lên thanh đồng: Cu²⁺ + 2e⁻ → Cu. Cầu muối di chuyển ion Cl⁻ về anot và K⁺ về catot để trung hòa điện tích.'
  },

  // Model 7: Điện phân dung dịch NaCl có màng ngăn - Lesson 16
  16: {
    lessonId: 16,
    tag: 'Mô hình bình điện phân công nghiệp',
    title: 'Mô hình cơ chế điện phân dung dịch NaCl có màng ngăn xốp: 2NaCl + 2H₂O → 2NaOH + Cl₂↑ + H₂↑',
    badge: 'Mô hình bể điện phân Chlor-Alkali',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />

      <!-- BỂ ĐIỆN PHÂN -->
      <rect x="180" y="25" width="500" height="180" rx="14" fill="#f0fdf4" class="dark:fill-slate-800/80" stroke="#059669" stroke-width="2"/>

      <!-- Nguồn điện 1 chiều phía trên -->
      <g transform="translate(430, 25)">
        <line x1="-150" y1="0" x2="-150" y2="40" stroke="#dc2626" stroke-width="3"/>
        <line x1="150" y1="0" x2="150" y2="40" stroke="#2563eb" stroke-width="3"/>
        <line x1="-150" y1="0" x2="150" y2="0" stroke="#64748b" stroke-width="2"/>
        <rect x="-30" y="-12" width="60" height="24" rx="6" fill="#0f172a"/>
        <text x="0" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">DC POWER</text>
        <text x="-140" y="15" font-weight="bold" font-size="11" fill="#dc2626">(+) Cực dương</text>
        <text x="140" y="15" text-anchor="end" font-weight="bold" font-size="11" fill="#2563eb">(−) Cực âm</text>
      </g>

      <!-- MÀNG NGĂN XỐP Ở GIỮA -->
      <line x1="430" y1="40" x2="430" y2="195" stroke="#94a3b8" stroke-width="8" stroke-dasharray="6,4"/>
      <rect x="385" y="105" width="90" height="20" rx="5" fill="#fef08a" stroke="#ca8a04"/>
      <text x="430" y="119" text-anchor="middle" font-size="9" font-weight="bold" fill="#854d0e">Màng ngăn xốp</text>
      <text x="430" y="145" text-anchor="middle" font-size="9" font-weight="bold" fill="#0284c7">Na⁺ đi qua →</text>

      <!-- VÙNG ANODE (+) BÊN TRÁI -->
      <g transform="translate(280, 115)">
        <!-- Điện cực Titan/Graphite -->
        <rect x="-10" y="-55" width="20" height="100" rx="4" fill="#334155"/>
        <text x="0" y="5" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">Anode (+)</text>
        <!-- Bọt khí Cl2 màu vàng lục -->
        <circle cx="-35" cy="-20" r="10" fill="#facc15" opacity="0.8"/>
        <text x="-35" y="-17" text-anchor="middle" font-size="8" font-weight="bold" fill="#713f12">Cl₂↑</text>
        <circle cx="-25" cy="-45" r="12" fill="#facc15" opacity="0.9"/>
        <text x="-25" y="-41" text-anchor="middle" font-size="9" font-weight="bold" fill="#713f12">Cl₂↑</text>
        <text x="0" y="65" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">2Cl⁻ − 2e⁻ → Cl₂↑</text>
        <text x="0" y="80" text-anchor="middle" font-size="9" fill="#64748b">(Khí vàng lục thoát ra)</text>
      </g>

      <!-- VÙNG CATHODE (-) BÊN PHẢI -->
      <g transform="translate(580, 115)">
        <!-- Điện cực Thép/Sắt -->
        <rect x="-10" y="-55" width="20" height="100" rx="4" fill="#64748b"/>
        <text x="0" y="5" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">Cathode (−)</text>
        <!-- Bọt khí H2 không màu -->
        <circle cx="35" cy="-20" r="10" fill="#e0f2fe" stroke="#38bdf8"/>
        <text x="35" y="-17" text-anchor="middle" font-size="8" font-weight="bold" fill="#0369a1">H₂↑</text>
        <circle cx="25" cy="-45" r="12" fill="#e0f2fe" stroke="#38bdf8"/>
        <text x="25" y="-41" text-anchor="middle" font-size="9" font-weight="bold" fill="#0369a1">H₂↑</text>
        <text x="0" y="65" text-anchor="middle" font-size="10" font-weight="bold" fill="#2563eb">2H₂O + 2e⁻ → H₂↑ + 2OH⁻</text>
        <text x="0" y="80" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">Tạo dd NaOH ở khoang catot</text>
      </g>
    </svg>`,
    mechanism: 'Dưới tác dụng của dòng điện một chiều: Tại Anode (+), ion Cl⁻ bị oxi hóa nhường electron tạo khí Cl₂ màu vàng lục (2Cl⁻ − 2e⁻ → Cl₂↑). Tại Cathode (−), phân tử H₂O bị khử nhận electron tạo bọt khí H₂ và giải phóng ion OH⁻ (2H₂O + 2e⁻ → H₂↑ + 2OH⁻). Màng ngăn xốp cho phép ion Na⁺ khuếch tán sang khoang catot tạo dung dịch NaOH, đồng thời ngăn không cho Cl₂ tiếp xúc với NaOH (tránh tạo nước Javel).'
  },

  // Model 8: Phối trí bát diện trong Phức chất [Cu(NH3)4(H2O)2]2+ - Lesson 28
  28: {
    lessonId: 28,
    tag: 'Mô hình liên kết cho – nhận phức chất',
    title: 'Mô hình liên kết phối trí cho – nhận & Phối tử trong Phức chất bát diện: [Cu(NH₃)₄(H₂O)₂]²⁺ (Xanh lam thẫm)',
    badge: 'Mô hình liên kết cho–nhận bát diện',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrCpx" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#2563eb" />
        </marker>
      </defs>
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />

      <!-- KHUNG 1: Cấu trúc lập thể Bát diện -->
      <rect x="20" y="20" width="460" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="250" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">CẤU TRÚC PHỐI TRÍ BÁT DIỆN CỦA [Cu(NH₃)₄(H₂O)₂]²⁺</text>

      <g transform="translate(250, 115)">
        <!-- Ion trung tâm Cu2+ -->
        <circle cx="0" cy="0" r="22" fill="#1d4ed8" stroke="#1e40af" stroke-width="2"/>
        <text x="0" y="5" text-anchor="middle" fill="#fff" font-weight="black" font-size="12">Cu²⁺</text>

        <!-- 4 Phối tử NH3 ở mặt phẳng vuông (Xích đạo) -->
        <!-- NH3 trái -->
        <path d="M -75 0 L -25 0" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrCpx)"/>
        <rect x="-115" y="-12" width="38" height="24" rx="6" fill="#3b82f6"/>
        <text x="-96" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">:NH₃</text>

        <!-- NH3 phải -->
        <path d="M 75 0 L 25 0" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrCpx)"/>
        <rect x="78" y="-12" width="38" height="24" rx="6" fill="#3b82f6"/>
        <text x="97" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">:NH₃</text>

        <!-- NH3 góc xiên 1 -->
        <path d="M -50 -45 L -16 -16" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrCpx)"/>
        <rect x="-85" y="-62" width="38" height="24" rx="6" fill="#3b82f6"/>
        <text x="-66" y="-46" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">:NH₃</text>

        <!-- NH3 góc xiên 2 -->
        <path d="M 50 45 L 16 16" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrCpx)"/>
        <rect x="48" y="38" width="38" height="24" rx="6" fill="#3b82f6"/>
        <text x="67" y="54" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">:NH₃</text>

        <!-- 2 Phối tử H2O ở 2 trục dọc -->
        <path d="M 0 -60 L 0 -25" stroke="#06b6d4" stroke-width="2.5" marker-end="url(#arrCpx)"/>
        <rect x="-24" y="-85" width="48" height="24" rx="6" fill="#0891b2"/>
        <text x="0" y="-69" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">:OH₂</text>

        <path d="M 0 60 L 0 25" stroke="#06b6d4" stroke-width="2.5" marker-end="url(#arrCpx)"/>
        <rect x="-24" y="62" width="48" height="24" rx="6" fill="#0891b2"/>
        <text x="0" y="78" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">:OH₂</text>
      </g>
      <text x="250" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Mũi tên thể hiện liên kết cho – nhận: Phối tử → Ion trung tâm</text>

      <!-- KHUNG 2: Đặc điểm bản chất liên kết -->
      <rect x="500" y="20" width="340" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="670" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">THÔNG SỐ PHỨC CHẤT</text>

      <g transform="translate(520, 65)">
        <text x="0" y="15" font-size="11" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Nguyên tử/Ion trung tâm: <tspan fill="#1d4ed8">Cu²⁺</tspan></text>
        <text x="0" y="38" font-size="11" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Phối tử (Ligand): <tspan fill="#2563eb">4 NH₃</tspan> và <tspan fill="#0891b2">2 H₂O</tspan></text>
        <text x="0" y="61" font-size="11" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Số phối trí: <tspan fill="#059669">6</tspan> (Hình học bát diện)</text>
        <text x="0" y="84" font-size="11" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Điện tích phức: <tspan fill="#dc2626">+2</tspan></text>
        <text x="0" y="107" font-size="11" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Màu sắc: <tspan fill="#1e40af">Xanh lam thẫm (Deep Blue)</tspan></text>
      </g>
      <text x="670" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Cặp e tự do của N và O điền vào orbital trống của Cu²⁺</text>
    </svg>`,
    mechanism: 'Nguyên tử trung tâm Cu²⁺ có các orbital d và lai hóa còn trống. Mỗi phân tử phối tử NH₃ (qua cặp electron không chia trên nguyên tử N) và phối tử H₂O (qua cặp electron trên nguyên tử O) đóng vai trò chất cho electron (base Lewis) điền vào các orbital trống của Cu²⁺ (acid Lewis) tạo nên 6 liên kết cộng hóa trị phối trí (liên kết cho–nhận). Cấu trúc phối trí bát diện làm thay đổi sự phân tách mức năng lượng orbital d, hấp thụ vùng ánh sáng vàng-cam và phản xạ màu xanh lam thẫm đặc trưng.'
  }
};
