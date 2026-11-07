// scratch/hoahoc11_reaction_models.js
// 4 Mô hình cơ chế phản ứng hoá học phân tử trực quan chuẩn SGK Hoá học 11 KNTT

module.exports = {
  // Bài 1: Cân bằng chuyển dịch 2NO2 <=> N2O4
  1: {
    title: "Mô hình phân tử phản ứng cân bằng: 2NO₂ (nâu đỏ) ⇌ N₂O₄ (không màu)",
    badge: "Mô hình phản ứng thuận nghịch & Le Chatelier",
    note: "Phân tử NO₂ có 1 electron độc thân trên nguyên tử N. Khi hạ nhiệt độ (làm lạnh), 2 phân tử NO₂ ghép đôi electron tạo liên kết N-N tạo phân tử dimer N₂O₄ không màu (toả nhiệt). Khi tăng nhiệt độ, liên kết N-N bị bẻ gãy tái tạo NO₂ nâu đỏ.",
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrTeal" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#0d9488" />
        </marker>
        <marker id="arrRed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#ef4444" />
        </marker>
      </defs>

      <!-- Background Card -->
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />

      <!-- VÙNG 1: 2 Phân tử NO2 (Nâu đỏ) -->
      <rect x="20" y="20" width="310" height="190" rx="12" fill="#fef2f2" class="dark:fill-rose-950/20" stroke="#f87171" stroke-width="1.2" />
      <text x="175" y="42" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#b91c1c" class="dark:fill-rose-300">2 PHÂN TỬ NO₂ (MÀU NÂU ĐỎ ĐẬM)</text>
      
      <!-- Phân tử NO2 thứ 1 -->
      <g transform="translate(95, 115)">
        <circle cx="0" cy="-24" r="3.5" fill="#dc2626" />
        <text x="0" y="-31" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">e⁻ độc thân</text>
        <line x1="0" y1="0" x2="-26" y2="24" stroke="#dc2626" stroke-width="3.5" />
        <line x1="0" y1="0" x2="26" y2="24" stroke="#dc2626" stroke-width="3.5" />
        <circle cx="0" cy="0" r="19" fill="#2563eb" stroke="#1d4ed8" stroke-width="2" />
        <text x="0" y="5" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">N</text>
        <circle cx="-26" cy="24" r="15" fill="#ef4444" stroke="#b91c1c" stroke-width="1.8" />
        <text x="-26" y="28" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">O</text>
        <circle cx="26" cy="24" r="15" fill="#ef4444" stroke="#b91c1c" stroke-width="1.8" />
        <text x="26" y="28" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">O</text>
        <text x="0" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#7f1d1d" class="dark:fill-rose-300">NO₂ (1)</text>
      </g>

      <!-- Dấu + -->
      <text x="175" y="122" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="extrabold">+</text>

      <!-- Phân tử NO2 thứ 2 -->
      <g transform="translate(255, 115)">
        <circle cx="0" cy="-24" r="3.5" fill="#dc2626" />
        <text x="0" y="-31" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">e⁻ độc thân</text>
        <line x1="0" y1="0" x2="-26" y2="24" stroke="#dc2626" stroke-width="3.5" />
        <line x1="0" y1="0" x2="26" y2="24" stroke="#dc2626" stroke-width="3.5" />
        <circle cx="0" cy="0" r="19" fill="#2563eb" stroke="#1d4ed8" stroke-width="2" />
        <text x="0" y="5" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">N</text>
        <circle cx="-26" cy="24" r="15" fill="#ef4444" stroke="#b91c1c" stroke-width="1.8" />
        <text x="-26" y="28" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">O</text>
        <circle cx="26" cy="24" r="15" fill="#ef4444" stroke="#b91c1c" stroke-width="1.8" />
        <text x="26" y="28" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">O</text>
        <text x="0" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#7f1d1d" class="dark:fill-rose-300">NO₂ (2)</text>
      </g>
      <text x="175" y="196" text-anchor="middle" font-size="10" fill="#991b1b" class="dark:fill-rose-400">Có electron độc thân • Rất hoạt động</text>

      <!-- VÙNG 2: MŨI TÊN THUẬN NGHỊCH Ở GIỮA -->
      <g transform="translate(425, 115)">
        <!-- Mũi tên thuận (trên) -->
        <path d="M -70 -10 L 70 -10" stroke="#0d9488" stroke-width="3" marker-end="url(#arrTeal)" />
        <text x="0" y="-22" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">Hạ nhiệt độ (nước đá) • Toả nhiệt (ΔH &lt; 0)</text>

        <!-- Mũi tên nghịch (dưới) -->
        <path d="M 70 12 L -70 12" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrAmber)" />
        <text x="0" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309" class="dark:fill-amber-300">Tăng nhiệt độ (nước nóng) • Thu nhiệt (ΔH &gt; 0)</text>

        <text x="0" y="55" text-anchor="middle" font-size="10" font-weight="extrabold" fill="#0d9488">2NO₂ ⇌ N₂O₄</text>
      </g>

      <!-- VÙNG 3: Phân tử Dimer N2O4 (Không màu) -->
      <rect x="525" y="20" width="315" height="190" rx="12" fill="#f0fdfa" class="dark:fill-teal-950/20" stroke="#14b8a6" stroke-width="1.2" />
      <text x="682" y="42" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#0f766e" class="dark:fill-teal-300">PHÂN TỬ N₂O₄ (KHÔNG MÀU)</text>

      <!-- Phân tử N2O4 hoàn chỉnh -->
      <g transform="translate(682, 115)">
        <!-- Liên kết N-N ghép đôi -->
        <line x1="-36" y1="0" x2="36" y2="0" stroke="#2563eb" stroke-width="5" />
        <text x="0" y="-8" text-anchor="middle" font-size="9" font-weight="bold" fill="#2563eb">Liên kết N-N</text>

        <!-- N1 -->
        <circle cx="-36" cy="0" r="19" fill="#2563eb" stroke="#1d4ed8" stroke-width="2" />
        <text x="-36" y="5" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">N</text>
        <line x1="-36" y1="0" x2="-68" y2="-28" stroke="#ef4444" stroke-width="3.5" />
        <circle cx="-68" cy="-28" r="15" fill="#ef4444" stroke="#b91c1c" stroke-width="1.8" />
        <text x="-68" y="-24" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">O</text>
        <line x1="-36" y1="0" x2="-68" y2="28" stroke="#ef4444" stroke-width="3.5" />
        <circle cx="-68" cy="28" r="15" fill="#ef4444" stroke="#b91c1c" stroke-width="1.8" />
        <text x="-68" y="32" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">O</text>

        <!-- N2 -->
        <circle cx="36" cy="0" r="19" fill="#2563eb" stroke="#1d4ed8" stroke-width="2" />
        <text x="36" y="5" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">N</text>
        <line x1="36" y1="0" x2="68" y2="-28" stroke="#ef4444" stroke-width="3.5" />
        <circle cx="68" cy="-28" r="15" fill="#ef4444" stroke="#b91c1c" stroke-width="1.8" />
        <text x="68" y="-24" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">O</text>
        <line x1="36" y1="0" x2="68" y2="28" stroke="#ef4444" stroke-width="3.5" />
        <circle cx="68" cy="28" r="15" fill="#ef4444" stroke="#b91c1c" stroke-width="1.8" />
        <text x="68" y="32" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">O</text>

        <text x="0" y="58" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">Dinitrogen tetroxide (N₂O₄)</text>
      </g>
      <text x="682" y="196" text-anchor="middle" font-size="10" fill="#0f766e" class="dark:fill-teal-400">Đã ghép đôi electron • Bền hơn ở nhiệt độ thấp</text>
    </svg>`
  },

  // Bài 5: Cơ chế phân tử phản ứng Haber-Bosch N2 + 3H2 <=> 2NH3
  5: {
    title: "Mô hình cơ chế phân tử phản ứng Haber-Bosch: N₂ + 3H₂ ⇌ 2NH₃ trên xúc tác Fe",
    badge: "Mô hình động học & Xúc tác dị thể",
    note: "Khí N₂ có liên kết ba N≡N cực kì bền (945 kJ/mol) trơ ở nhiệt độ thường. Dưới tác dụng của nhiệt độ 400-450°C, áp suất 150-200 bar và xúc tác Fe, các liên kết cũ bị bẻ gãy, các nguyên tử N và H tự do hấp phụ trên bề mặt kim loại rồi tái tổ hợp thành 2 phân tử NH₃.",
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />

      <!-- GIAI ĐOẠN 1: Chất tham gia ban đầu (Trái) -->
      <rect x="20" y="20" width="250" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2" />
      <text x="145" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">1. CHẤT ĐẦU: 1 N₂ + 3 H₂</text>

      <!-- Phân tử N2 -->
      <g transform="translate(85, 105)">
        <line x1="-16" y1="-4" x2="16" y2="-4" stroke="#2563eb" stroke-width="3" />
        <line x1="-16" y1="0" x2="16" y2="0" stroke="#2563eb" stroke-width="3" />
        <line x1="-16" y1="4" x2="16" y2="4" stroke="#2563eb" stroke-width="3" />
        <circle cx="-18" cy="0" r="18" fill="#2563eb" stroke="#1d4ed8" stroke-width="2" />
        <text x="-18" y="5" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">N</text>
        <circle cx="18" cy="0" r="18" fill="#2563eb" stroke="#1d4ed8" stroke-width="2" />
        <text x="18" y="5" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">N</text>
        <text x="0" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af" class="dark:fill-blue-300">1 N₂ (N≡N)</text>
      </g>

      <text x="145" y="110" text-anchor="middle" fill="#2563eb" font-size="18" font-weight="bold">+</text>

      <!-- 3 H2 -->
      <g transform="translate(205, 75)">
        <line x1="-9" y1="0" x2="9" y2="0" stroke="#94a3b8" stroke-width="2.5" />
        <circle cx="-11" cy="0" r="11" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
        <text x="-11" y="4" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="9">H</text>
        <circle cx="11" cy="0" r="11" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
        <text x="11" y="4" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="9">H</text>
      </g>
      <g transform="translate(205, 110)">
        <line x1="-9" y1="0" x2="9" y2="0" stroke="#94a3b8" stroke-width="2.5" />
        <circle cx="-11" cy="0" r="11" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
        <text x="-11" y="4" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="9">H</text>
        <circle cx="11" cy="0" r="11" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
        <text x="11" y="4" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="9">H</text>
      </g>
      <g transform="translate(205, 145)">
        <line x1="-9" y1="0" x2="9" y2="0" stroke="#94a3b8" stroke-width="2.5" />
        <circle cx="-11" cy="0" r="11" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
        <text x="-11" y="4" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="9">H</text>
        <circle cx="11" cy="0" r="11" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
        <text x="11" y="4" text-anchor="middle" fill="#0f172a" font-weight="bold" font-size="9">H</text>
        <text x="0" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="#475569" class="dark:fill-slate-300">3 H₂ (H-H)</text>
      </g>
      <text x="145" y="196" text-anchor="middle" font-size="10" fill="#1e40af" class="dark:fill-blue-300">Tổng: 4 mol khí ban đầu</text>

      <!-- Mũi tên 1 -> 2 -->
      <path d="M 280 115 L 300 115" stroke="#0d9488" stroke-width="2.5" marker-end="url(#arrTeal)" />

      <!-- GIAI ĐOẠN 2: Bề mặt xúc tác Sắt Fe (Giữa) -->
      <rect x="310" y="20" width="240" height="190" rx="12" fill="#fffbeb" class="dark:fill-amber-950/20" stroke="#f59e0b" stroke-width="1.2" />
      <text x="430" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#b45309" class="dark:fill-amber-300">2. HẤP PHỤ TRÊN BỀ MẶT SẮT (Fe)</text>
      
      <!-- Bề mặt Fe -->
      <rect x="330" y="160" width="200" height="24" rx="6" fill="#475569" />
      <text x="430" y="176" text-anchor="middle" fill="#fff" font-weight="extrabold" font-size="10">XÚC TÁC Fe (450°C, 200 bar)</text>

      <!-- Nguyên tử N và H tự do hấp phụ -->
      <g transform="translate(370, 115)">
        <circle cx="0" cy="0" r="16" fill="#2563eb" stroke="#93c5fd" stroke-width="2" stroke-dasharray="3,2" />
        <text x="0" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">N</text>
        <line x1="0" y1="16" x2="0" y2="45" stroke="#94a3b8" stroke-dasharray="2,2" stroke-width="1.5" />
      </g>
      <g transform="translate(490, 115)">
        <circle cx="0" cy="0" r="16" fill="#2563eb" stroke="#93c5fd" stroke-width="2" stroke-dasharray="3,2" />
        <text x="0" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">N</text>
        <line x1="0" y1="16" x2="0" y2="45" stroke="#94a3b8" stroke-dasharray="2,2" stroke-width="1.5" />
      </g>
      
      <!-- 6 nguyên tử H tự do quanh N -->
      <circle cx="340" cy="75" r="9" fill="#f8fafc" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2,2" />
      <text x="340" y="78" text-anchor="middle" font-size="8" font-weight="bold">H</text>
      <circle cx="370" cy="65" r="9" fill="#f8fafc" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2,2" />
      <text x="370" y="68" text-anchor="middle" font-size="8" font-weight="bold">H</text>
      <circle cx="400" cy="75" r="9" fill="#f8fafc" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2,2" />
      <text x="400" y="78" text-anchor="middle" font-size="8" font-weight="bold">H</text>

      <circle cx="460" cy="75" r="9" fill="#f8fafc" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2,2" />
      <text x="460" y="78" text-anchor="middle" font-size="8" font-weight="bold">H</text>
      <circle cx="490" cy="65" r="9" fill="#f8fafc" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2,2" />
      <text x="490" y="68" text-anchor="middle" font-size="8" font-weight="bold">H</text>
      <circle cx="520" cy="75" r="9" fill="#f8fafc" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2,2" />
      <text x="520" y="78" text-anchor="middle" font-size="8" font-weight="bold">H</text>

      <text x="430" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309" class="dark:fill-amber-400">Bẻ gãy liên kết N≡N và H-H</text>

      <!-- Mũi tên 2 -> 3 -->
      <path d="M 560 115 L 580 115" stroke="#0d9488" stroke-width="2.5" marker-end="url(#arrTeal)" />

      <!-- GIAI ĐOẠN 3: Sản phẩm tạo thành 2 NH3 (Phải) -->
      <rect x="590" y="20" width="250" height="190" rx="12" fill="#f0fdfa" class="dark:fill-teal-950/20" stroke="#14b8a6" stroke-width="1.2" />
      <text x="715" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#0f766e" class="dark:fill-teal-300">3. SẢN PHẨM: 2 NH₃ THOÁT RA</text>

      <!-- NH3 (1) -->
      <g transform="translate(650, 115)">
        <ellipse cx="0" cy="-22" rx="7" ry="4" fill="#93c5fd" opacity="0.6" />
        <circle cx="-2" cy="-22" r="1.2" fill="#1e3a8a" />
        <circle cx="2" cy="-22" r="1.2" fill="#1e3a8a" />
        <line x1="0" y1="0" x2="-24" y2="24" stroke="#3b82f6" stroke-width="3" />
        <line x1="0" y1="0" x2="0" y2="30" stroke="#3b82f6" stroke-width="3" />
        <line x1="0" y1="0" x2="24" y2="24" stroke="#3b82f6" stroke-width="3" />
        <circle cx="0" cy="0" r="18" fill="#2563eb" stroke="#1d4ed8" stroke-width="2" />
        <text x="0" y="5" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">N</text>
        <circle cx="-24" cy="24" r="10" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
        <text x="-24" y="27" text-anchor="middle" font-size="8" font-weight="bold">H</text>
        <circle cx="0" cy="30" r="10" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
        <text x="0" y="33" text-anchor="middle" font-size="8" font-weight="bold">H</text>
        <circle cx="24" cy="24" r="10" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
        <text x="24" y="27" text-anchor="middle" font-size="8" font-weight="bold">H</text>
        <text x="0" y="54" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">NH₃ (1)</text>
      </g>

      <!-- NH3 (2) -->
      <g transform="translate(775, 115)">
        <ellipse cx="0" cy="-22" rx="7" ry="4" fill="#93c5fd" opacity="0.6" />
        <circle cx="-2" cy="-22" r="1.2" fill="#1e3a8a" />
        <circle cx="2" cy="-22" r="1.2" fill="#1e3a8a" />
        <line x1="0" y1="0" x2="-24" y2="24" stroke="#3b82f6" stroke-width="3" />
        <line x1="0" y1="0" x2="0" y2="30" stroke="#3b82f6" stroke-width="3" />
        <line x1="0" y1="0" x2="24" y2="24" stroke="#3b82f6" stroke-width="3" />
        <circle cx="0" cy="0" r="18" fill="#2563eb" stroke="#1d4ed8" stroke-width="2" />
        <text x="0" y="5" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">N</text>
        <circle cx="-24" cy="24" r="10" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
        <text x="-24" y="27" text-anchor="middle" font-size="8" font-weight="bold">H</text>
        <circle cx="0" cy="30" r="10" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
        <text x="0" y="33" text-anchor="middle" font-size="8" font-weight="bold">H</text>
        <circle cx="24" cy="24" r="10" fill="#f8fafc" stroke="#64748b" stroke-width="1.5" />
        <text x="24" y="27" text-anchor="middle" font-size="8" font-weight="bold">H</text>
        <text x="0" y="54" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e" class="dark:fill-teal-300">NH₃ (2)</text>
      </g>
      <text x="715" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e" class="dark:fill-teal-400">Tạo 6 liên kết N-H mới • Toả 92 kJ/mol</text>
    </svg>`
  },

  // Bài 16: Cơ chế phản ứng cộng Bromine vào Alkene
  16: {
    title: "Mô hình cơ chế phân tử phản ứng cộng Halogen: CH₂=CH₂ + Br₂ → CH₂Br-CH₂Br",
    badge: "Mô hình phản ứng cộng Alkene",
    note: "Liên kết đôi C=C gồm 1 liên kết σ bền và 1 liên kết π kém bền với đám mây electron hướng ra ngoài. Đám mây π tấn công phân tử Br₂ làm phân cực và cắt đứt liên kết Br-Br, 2 nguyên tử Bromine gắn vào 2 nguyên tử Carbon tạo 1,2-dibromoethane no, làm mất màu nâu đỏ đặc trưng.",
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />

      <!-- GIAI ĐOẠN 1: Tiếp cận -->
      <rect x="20" y="20" width="250" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2" />
      <text x="145" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">1. TIẾP CẬN: C₂H₄ + Br₂ (NÂU ĐỎ)</text>

      <!-- CH2=CH2 -->
      <g transform="translate(85, 115)">
        <line x1="-20" y1="-4" x2="20" y2="-4" stroke="#475569" stroke-width="3" />
        <line x1="-20" y1="4" x2="20" y2="4" stroke="#ef4444" stroke-width="3" stroke-dasharray="3,1.5" />
        <circle cx="-20" cy="0" r="16" fill="#334155" stroke="#1e293b" stroke-width="1.8" />
        <text x="-20" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">C</text>
        <circle cx="-38" cy="-20" r="9" fill="#f8fafc" stroke="#64748b" stroke-width="1.2" />
        <text x="-38" y="-17" text-anchor="middle" font-size="8" font-weight="bold">H</text>
        <circle cx="-38" cy="20" r="9" fill="#f8fafc" stroke="#64748b" stroke-width="1.2" />
        <text x="-38" y="23" text-anchor="middle" font-size="8" font-weight="bold">H</text>

        <circle cx="20" cy="0" r="16" fill="#334155" stroke="#1e293b" stroke-width="1.8" />
        <text x="20" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">C</text>
        <circle cx="38" cy="-20" r="9" fill="#f8fafc" stroke="#64748b" stroke-width="1.2" />
        <text x="38" y="-17" text-anchor="middle" font-size="8" font-weight="bold">H</text>
        <circle cx="38" cy="20" r="9" fill="#f8fafc" stroke="#64748b" stroke-width="1.2" />
        <text x="38" y="23" text-anchor="middle" font-size="8" font-weight="bold">H</text>
        <text x="0" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b" class="dark:fill-slate-300">Liên kết đôi C=C</text>
      </g>

      <text x="145" y="118" text-anchor="middle" fill="#b45309" font-size="18" font-weight="bold">+</text>

      <!-- Br2 -->
      <g transform="translate(205, 115)">
        <line x1="-16" y1="0" x2="16" y2="0" stroke="#b45309" stroke-width="4" />
        <circle cx="-16" cy="0" r="16" fill="#b45309" stroke="#78350f" stroke-width="1.8" />
        <text x="-16" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">Br</text>
        <circle cx="16" cy="0" r="16" fill="#b45309" stroke="#78350f" stroke-width="1.8" />
        <text x="16" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">Br</text>
        <text x="0" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">Br₂ nâu đỏ</text>
      </g>
      <text x="145" y="196" text-anchor="middle" font-size="10" fill="#1e40af" class="dark:fill-blue-300">Đám mây π tiếp cận phân tử Br₂</text>

      <!-- Mũi tên 1 -> 2 -->
      <path d="M 280 115 L 300 115" stroke="#0d9488" stroke-width="2.5" marker-end="url(#arrTeal)" />

      <!-- GIAI ĐOẠN 2: Bẻ gãy liên kết pi -->
      <rect x="310" y="20" width="240" height="190" rx="12" fill="#fffbeb" class="dark:fill-amber-950/20" stroke="#f59e0b" stroke-width="1.2" />
      <text x="430" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#b45309" class="dark:fill-amber-300">2. PHÂN CẮT LIÊN KẾT π VÀ Br-Br</text>

      <g transform="translate(430, 115)">
        <!-- Liên kết C-C đơn còn lại -->
        <line x1="-28" y1="0" x2="28" y2="0" stroke="#475569" stroke-width="3" />
        <path d="M -20 -10 Q 0 -24 20 -10" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,2" />

        <circle cx="-28" cy="0" r="16" fill="#334155" stroke="#1e293b" stroke-width="1.8" />
        <text x="-28" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">C</text>
        <circle cx="-48" cy="-18" r="8" fill="#f8fafc" stroke="#64748b" stroke-width="1" />
        <circle cx="-48" cy="18" r="8" fill="#f8fafc" stroke="#64748b" stroke-width="1" />

        <circle cx="28" cy="0" r="16" fill="#334155" stroke="#1e293b" stroke-width="1.8" />
        <text x="28" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">C</text>
        <circle cx="48" cy="-18" r="8" fill="#f8fafc" stroke="#64748b" stroke-width="1" />
        <circle cx="48" cy="18" r="8" fill="#f8fafc" stroke="#64748b" stroke-width="1" />

        <!-- 2 Nguyên tử Br đang tiến vào -->
        <line x1="-28" y1="0" x2="-28" y2="-45" stroke="#b45309" stroke-width="2" stroke-dasharray="3,2" />
        <circle cx="-28" cy="-45" r="14" fill="#b45309" stroke="#78350f" stroke-width="1.5" />
        <text x="-28" y="-41" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">Br</text>

        <line x1="28" y1="0" x2="28" y2="45" stroke="#b45309" stroke-width="2" stroke-dasharray="3,2" />
        <circle cx="28" cy="45" r="14" fill="#b45309" stroke="#78350f" stroke-width="1.5" />
        <text x="28" y="49" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">Br</text>
      </g>
      <text x="430" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309" class="dark:fill-amber-400">Mở vòng ion Bromonium trung gian</text>

      <!-- Mũi tên 2 -> 3 -->
      <path d="M 560 115 L 580 115" stroke="#0d9488" stroke-width="2.5" marker-end="url(#arrTeal)" />

      <!-- GIAI ĐOẠN 3: Sản phẩm no không màu -->
      <rect x="590" y="20" width="250" height="190" rx="12" fill="#f0fdfa" class="dark:fill-teal-950/20" stroke="#14b8a6" stroke-width="1.2" />
      <text x="715" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#0f766e" class="dark:fill-teal-300">3. SẢN PHẨM: 1,2-DIBROMOETHANE</text>

      <g transform="translate(715, 115)">
        <line x1="-32" y1="0" x2="32" y2="0" stroke="#475569" stroke-width="3.5" />

        <!-- C1 -->
        <circle cx="-32" cy="0" r="17" fill="#334155" stroke="#1e293b" stroke-width="1.8" />
        <text x="-32" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">C</text>
        <circle cx="-52" cy="-18" r="8" fill="#f8fafc" stroke="#64748b" stroke-width="1" />
        <circle cx="-52" cy="18" r="8" fill="#f8fafc" stroke="#64748b" stroke-width="1" />
        <!-- Br1 -->
        <line x1="-32" y1="0" x2="-32" y2="-45" stroke="#b45309" stroke-width="3" />
        <circle cx="-32" cy="-45" r="15" fill="#b45309" stroke="#78350f" stroke-width="1.8" />
        <text x="-32" y="-41" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">Br</text>

        <!-- C2 -->
        <circle cx="32" cy="0" r="17" fill="#334155" stroke="#1e293b" stroke-width="1.8" />
        <text x="32" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">C</text>
        <circle cx="52" cy="-18" r="8" fill="#f8fafc" stroke="#64748b" stroke-width="1" />
        <circle cx="52" cy="18" r="8" fill="#f8fafc" stroke="#64748b" stroke-width="1" />
        <!-- Br2 -->
        <line x1="32" y1="0" x2="32" y2="45" stroke="#b45309" stroke-width="3" />
        <circle cx="32" cy="45" r="15" fill="#b45309" stroke="#78350f" stroke-width="1.8" />
        <text x="32" y="49" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">Br</text>
      </g>
      <text x="715" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#059669" class="dark:fill-emerald-400">✨ Dung dịch hoàn toàn MẤT MÀU</text>
    </svg>`
  },

  // Bài 24: Cơ chế phản ứng Ester hoá Acid + Alcohol
  24: {
    title: "Mô hình cơ chế phân tử phản ứng Ester hoá: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O",
    badge: "Mô hình phản ứng hữu cơ thuận nghịch",
    note: "Dưới tác dụng của xúc tác H₂SO₄ đặc và nhiệt độ, nhóm -OH từ phân tử Carboxylic acid kết hợp với nguyên tử -H từ nhóm hydroxy của Alcohol tạo thành phân tử nước H₂O. Phần còn lại ghép nối tạo nhóm chức ester -COO- thơm mùi hoa quả.",
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />

      <!-- GIAI ĐOẠN 1: Chất tham gia -->
      <rect x="20" y="20" width="260" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2" />
      <text x="150" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">1. CHẤT ĐẦU: CH₃COOH + C₂H₅OH</text>

      <!-- CH3COOH -->
      <g transform="translate(80, 115)">
        <circle cx="-35" cy="0" r="16" fill="#334155" />
        <text x="-35" y="4" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">CH₃</text>
        <line x1="-19" y1="0" x2="5" y2="0" stroke="#475569" stroke-width="3" />
        <circle cx="5" cy="0" r="16" fill="#334155" />
        <text x="5" y="4" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">C</text>
        <line x1="5" y1="-5" x2="5" y2="-30" stroke="#ef4444" stroke-width="3" />
        <circle cx="5" cy="-30" r="12" fill="#ef4444" />
        <text x="5" y="-27" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">O</text>
        
        <!-- Nhóm OH khoanh viền đỏ -->
        <rect x="22" y="-14" width="36" height="28" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-dasharray="2,2" stroke-width="1.5" />
        <text x="40" y="4" text-anchor="middle" font-size="10" font-weight="extrabold" fill="#b91c1c">OH</text>
        <text x="0" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">CH₃COOH</text>
      </g>

      <text x="150" y="118" text-anchor="middle" fill="#2563eb" font-size="16" font-weight="bold">+</text>

      <!-- C2H5OH -->
      <g transform="translate(205, 115)">
        <!-- Nguyên tử H khoanh viền xanh -->
        <rect x="-24" y="-14" width="22" height="28" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-dasharray="2,2" stroke-width="1.5" />
        <text x="-13" y="4" text-anchor="middle" font-size="10" font-weight="extrabold" fill="#1d4ed8">H</text>
        <circle cx="12" cy="0" r="12" fill="#ef4444" />
        <text x="12" y="3" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">O</text>
        <line x1="24" y1="0" x2="38" y2="0" stroke="#475569" stroke-width="2.5" />
        <circle cx="38" cy="0" r="15" fill="#334155" />
        <text x="38" y="4" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">C₂H₅</text>
        <text x="15" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">H-O-C₂H₅</text>
      </g>
      <text x="150" y="196" text-anchor="middle" font-size="10" fill="#1e40af" class="dark:fill-blue-300">Nhóm -OH acid &amp; -H alcohol tiếp cận</text>

      <!-- Mũi tên 1 -> 2 -->
      <path d="M 290 115 L 310 115" stroke="#0d9488" stroke-width="2.5" marker-end="url(#arrTeal)" />

      <!-- GIAI ĐOẠN 2: Tách nước -->
      <rect x="320" y="20" width="220" height="190" rx="12" fill="#fffbeb" class="dark:fill-amber-950/20" stroke="#f59e0b" stroke-width="1.2" />
      <text x="430" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#b45309" class="dark:fill-amber-300">2. H₂SO₄ ĐẶC XÚC TÁC &amp; HÚT NƯỚC</text>

      <!-- Khối H2O tách rời trên cao -->
      <g transform="translate(430, 80)">
        <rect x="-35" y="-16" width="70" height="32" rx="10" fill="#bae6fd" stroke="#0284c7" stroke-width="1.8" />
        <text x="0" y="4" text-anchor="middle" font-size="11" font-weight="extrabold" fill="#0369a1">H - OH</text>
        <text x="0" y="28" text-anchor="middle" font-size="9" font-weight="bold" fill="#0284c7">Tạo H₂O</text>
      </g>

      <g transform="translate(370, 140)">
        <circle cx="0" cy="0" r="14" fill="#334155" />
        <text x="0" y="4" text-anchor="middle" fill="#fff" font-size="9">C</text>
        <line x1="14" y1="0" x2="35" y2="0" stroke="#059669" stroke-dasharray="3,2" stroke-width="2" />
      </g>
      <g transform="translate(480, 140)">
        <line x1="-35" y1="0" x2="-14" y2="0" stroke="#059669" stroke-dasharray="3,2" stroke-width="2" />
        <circle cx="0" cy="0" r="12" fill="#ef4444" />
        <text x="0" y="3" text-anchor="middle" fill="#fff" font-size="9">O</text>
      </g>
      <text x="430" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309" class="dark:fill-amber-400">Hút nước chuyển dịch cân bằng ⇌</text>

      <!-- Mũi tên 2 -> 3 -->
      <path d="M 550 115 L 570 115" stroke="#0d9488" stroke-width="2.5" marker-end="url(#arrTeal)" />

      <!-- GIAI ĐOẠN 3: Tạo Ester thơm -->
      <rect x="580" y="20" width="260" height="190" rx="12" fill="#f0fdfa" class="dark:fill-teal-950/20" stroke="#14b8a6" stroke-width="1.2" />
      <text x="710" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#0f766e" class="dark:fill-teal-300">3. SẢN PHẨM: ESTER THƠM + H₂O</text>

      <!-- Ester -->
      <g transform="translate(660, 115)">
        <circle cx="-45" cy="0" r="15" fill="#334155" />
        <text x="-45" y="4" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">CH₃</text>
        <line x1="-30" y1="0" x2="-10" y2="0" stroke="#475569" stroke-width="2.5" />
        
        <circle cx="-10" cy="0" r="16" fill="#334155" />
        <text x="-10" y="4" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">C</text>
        <line x1="-10" y1="-5" x2="-10" y2="-28" stroke="#ef4444" stroke-width="2.5" />
        <circle cx="-10" cy="-28" r="12" fill="#ef4444" />
        <text x="-10" y="-25" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">O</text>

        <!-- Liên kết ester C-O mới tạo -->
        <line x1="6" y1="0" x2="22" y2="0" stroke="#059669" stroke-width="4" />
        <circle cx="22" cy="0" r="13" fill="#ef4444" stroke="#059669" stroke-width="2" />
        <text x="22" y="3" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">O</text>

        <line x1="35" y1="0" x2="50" y2="0" stroke="#475569" stroke-width="2.5" />
        <circle cx="50" cy="0" r="15" fill="#334155" />
        <text x="50" y="4" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">C₂H₅</text>
        <text x="5" y="42" text-anchor="middle" font-size="10" font-weight="extrabold" fill="#059669">CH₃COOC₂H₅ (Ester)</text>
      </g>

      <!-- + H2O -->
      <g transform="translate(790, 115)">
        <text x="-25" y="5" text-anchor="middle" fill="#14b8a6" font-size="14" font-weight="bold">+</text>
        <circle cx="0" cy="0" r="14" fill="#ef4444" />
        <text x="0" y="4" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">O</text>
        <circle cx="-12" cy="14" r="8" fill="#f8fafc" stroke="#64748b" stroke-width="1" />
        <text x="-12" y="17" text-anchor="middle" font-size="7" font-weight="bold">H</text>
        <circle cx="12" cy="14" r="8" fill="#f8fafc" stroke="#64748b" stroke-width="1" />
        <text x="12" y="17" text-anchor="middle" font-size="7" font-weight="bold">H</text>
        <text x="0" y="38" text-anchor="middle" font-size="9" font-weight="bold" fill="#0284c7">H₂O</text>
      </g>
      <text x="710" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#059669" class="dark:fill-emerald-400">✨ Mùi thơm hoa quả táo, chuối</text>
    </svg>`
  }
};
