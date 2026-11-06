// scratch/hoahoc10_diagrams.js
// 23 Sơ đồ & Hình vẽ trực quan SVG cho 23 bài Hóa Học 10 (Kết nối tri thức với cuộc sống)

const diagrams = {
  // Bài 1: Thí nghiệm Rutherford bắn hạt alpha vào lá vàng & Cấu tạo nguyên tử rỗng
  1: `<svg viewBox="0 0 820 230" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="220" rx="16" fill="#ecfeff" stroke="#06b6d4" stroke-width="1.5"/>
    <!-- Left: Atom structure -->
    <rect x="20" y="20" width="365" height="190" rx="12" fill="#ffffff" stroke="#a5f3fc"/>
    <text x="202" y="42" text-anchor="middle" font-size="13" font-weight="800" fill="#0e7490">1. MÔ HÌNH NGUYÊN TỬ RỖNG (p = e)</text>
    <circle cx="135" cy="122" r="68" fill="none" stroke="#38bdf8" stroke-dasharray="4 3" stroke-width="1.5"/>
    <circle cx="135" cy="122" r="44" fill="none" stroke="#0284c7" stroke-dasharray="4 3" stroke-width="1.5"/>
    <circle cx="135" cy="122" r="16" fill="#ef4444"/>
    <text x="135" y="126" text-anchor="middle" font-size="10" font-weight="800" fill="#ffffff">p+, n</text>
    <circle cx="135" cy="54" r="6" fill="#2563eb"/><text x="135" y="57" text-anchor="middle" font-size="8" font-weight="800" fill="#fff">−</text>
    <circle cx="179" cy="122" r="6" fill="#2563eb"/><text x="179" y="125" text-anchor="middle" font-size="8" font-weight="800" fill="#fff">−</text>
    <circle cx="88" cy="172" r="6" fill="#2563eb"/><text x="88" y="175" text-anchor="middle" font-size="8" font-weight="800" fill="#fff">−</text>
    <text x="222" y="82" font-size="11" font-weight="700" fill="#be123c">• Hạt nhân (ở tâm, d ≈ 10⁻¹⁴ m):</text>
    <text x="230" y="98" font-size="10.5" fill="#334155">- Proton (p): q = +1, m ≈ 1 amu</text>
    <text x="230" y="114" font-size="10.5" fill="#334155">- Neutron (n): q = 0, m ≈ 1 amu</text>
    <text x="222" y="138" font-size="11" font-weight="700" fill="#1d4ed8">• Vỏ nguyên tử (d ≈ 10⁻¹⁰ m):</text>
    <text x="230" y="154" font-size="10.5" fill="#334155">- Electron (e): q = −1, m ≈ 0,00055 amu</text>
    <rect x="222" y="166" width="150" height="28" rx="6" fill="#cffafe"/>
    <text x="297" y="184" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0f766e">Trung hòa: Số p = Số e</text>

    <!-- Right: Rutherford experiment -->
    <rect x="400" y="20" width="400" height="190" rx="12" fill="#ffffff" stroke="#a5f3fc"/>
    <text x="600" y="42" text-anchor="middle" font-size="13" font-weight="800" fill="#0e7490">2. THÍ NGHIỆM BẮN HẠT α VÀO LÁ VÀNG (RUTHERFORD, 1911)</text>
    <rect x="418" y="102" width="54" height="36" rx="6" fill="#475569"/>
    <text x="445" y="124" text-anchor="middle" font-size="10" font-weight="800" fill="#f8fafc">Nguồn α</text>
    <!-- Gold foil -->
    <rect x="565" y="65" width="10" height="115" rx="3" fill="#f59e0b" stroke="#b45309"/>
    <text x="570" y="58" text-anchor="middle" font-size="10" font-weight="800" fill="#b45309">Lá vàng (Au)</text>
    <!-- Rays -->
    <line x1="472" y1="112" x2="710" y2="112" stroke="#16a34a" stroke-width="2.2"/>
    <line x1="472" y1="128" x2="710" y2="128" stroke="#16a34a" stroke-width="2.2"/>
    <polyline points="472,120 568,120 695,75" fill="none" stroke="#ea580c" stroke-width="2"/>
    <polyline points="472,124 565,124 495,165" fill="none" stroke="#dc2626" stroke-width="2"/>
    <text x="716" y="116" font-size="10" font-weight="700" fill="#15803d">Hầu hết xuyên thẳng</text>
    <text x="716" y="130" font-size="9.5" fill="#15803d">(Nguyên tử rỗng)</text>
    <text x="680" y="70" font-size="10" font-weight="700" fill="#c2410c">Một số lệch hướng</text>
    <text x="485" y="182" font-size="10" font-weight="700" fill="#b91c1c">Rất ít bật ngược (Chạm hạt nhân +)</text>
  </svg>`,

  // Bài 2: Kí hiệu nguyên tử, 3 đồng vị Hydrogen & Phổ khối lượng Chlorine
  2: `<svg viewBox="0 0 820 230" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="220" rx="16" fill="#ecfeff" stroke="#06b6d4" stroke-width="1.5"/>
    <!-- Box 1: Atomic Symbol -->
    <rect x="18" y="20" width="235" height="190" rx="12" fill="#ffffff" stroke="#a5f3fc"/>
    <text x="135" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#0e7490">1. KÍ HIỆU NGUYÊN TỬ</text>
    <text x="78" y="102" font-size="22" font-weight="900" fill="#dc2626">A</text>
    <text x="78" y="138" font-size="22" font-weight="900" fill="#2563eb">Z</text>
    <text x="102" y="128" font-size="42" font-weight="900" fill="#0f172a">X</text>
    <text x="148" y="96" font-size="10.5" font-weight="700" fill="#dc2626">← Số khối A = Z + N</text>
    <text x="148" y="134" font-size="10.5" font-weight="700" fill="#2563eb">← Số hiệu Z = p = e</text>
    <rect x="30" y="155" width="210" height="40" rx="8" fill="#f0fdfa" stroke="#5eead4"/>
    <text x="135" y="173" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f766e">VD: ²³₁₁Na có Z = 11 (11p, 11e)</text>
    <text x="135" y="188" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f766e">A = 23 ⇒ Số neutron N = 23 − 11 = 12</text>

    <!-- Box 2: 3 Isotopes of H -->
    <rect x="268" y="20" width="275" height="190" rx="12" fill="#ffffff" stroke="#a5f3fc"/>
    <text x="405" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#0e7490">2. BA ĐỒNG VỊ CỦA HYDROGEN (Z = 1)</text>
    <circle cx="315" cy="108" r="28" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
    <circle cx="315" cy="108" r="8" fill="#ef4444"/><text x="315" y="111" text-anchor="middle" font-size="8" font-weight="800" fill="#fff">1p</text>
    <text x="315" y="155" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">¹₁H (Protium)</text>
    <text x="315" y="170" text-anchor="middle" font-size="9.5" fill="#475569">1p, 0n (99,984%)</text>

    <circle cx="405" cy="108" r="28" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
    <circle cx="400" cy="108" r="7" fill="#ef4444"/><circle cx="411" cy="108" r="7" fill="#64748b"/>
    <text x="405" y="155" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">²₁H (Deuterium)</text>
    <text x="405" y="170" text-anchor="middle" font-size="9.5" fill="#475569">1p, 1n (0,016%)</text>

    <circle cx="495" cy="108" r="28" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
    <circle cx="489" cy="105" r="6.5" fill="#ef4444"/><circle cx="501" cy="103" r="6.5" fill="#64748b"/><circle cx="496" cy="114" r="6.5" fill="#64748b"/>
    <text x="495" y="155" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">³₁H (Tritium)</text>
    <text x="495" y="170" text-anchor="middle" font-size="9.5" fill="#475569">1p, 2n (Phóng xạ)</text>

    <!-- Box 3: Mass spectrum of Cl -->
    <rect x="558" y="20" width="244" height="190" rx="12" fill="#ffffff" stroke="#a5f3fc"/>
    <text x="680" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#0e7490">3. PHỔ KHỐI LƯỢNG CỦA Cl</text>
    <line x1="590" y1="155" x2="775" y2="155" stroke="#334155" stroke-width="1.5"/>
    <line x1="590" y1="65" x2="590" y2="155" stroke="#334155" stroke-width="1.5"/>
    <rect x="630" y="78" width="26" height="77" fill="#0891b2" rx="3"/>
    <text x="643" y="72" text-anchor="middle" font-size="10" font-weight="800" fill="#0e7490">75,76%</text>
    <text x="643" y="169" text-anchor="middle" font-size="10" font-weight="800" fill="#0f172a">³⁵Cl</text>
    <rect x="705" y="128" width="26" height="27" fill="#f59e0b" rx="3"/>
    <text x="718" y="122" text-anchor="middle" font-size="10" font-weight="800" fill="#b45309">24,24%</text>
    <text x="718" y="169" text-anchor="middle" font-size="10" font-weight="800" fill="#0f172a">³⁷Cl</text>
    <text x="680" y="193" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0f766e">Ā(Cl) = (35×75,76 + 37×24,24)/100 ≈ 35,48</text>
  </svg>`,

  // Bài 3: Hình dạng AO s, p & Quy tắc Pauli - Hund
  3: `<svg viewBox="0 0 820 230" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="220" rx="16" fill="#ecfeff" stroke="#06b6d4" stroke-width="1.5"/>
    <!-- Left: AO shapes -->
    <rect x="18" y="20" width="380" height="190" rx="12" fill="#ffffff" stroke="#a5f3fc"/>
    <text x="208" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#0e7490">1. HÌNH DẠNG ORBITAL NGUYÊN TỬ (AO s &amp; AO p)</text>
    <!-- AO s -->
    <circle cx="95" cy="118" r="40" fill="#38bdf8" fill-opacity="0.3" stroke="#0284c7" stroke-width="2"/>
    <line x1="45" y1="118" x2="145" y2="118" stroke="#64748b" stroke-dasharray="3 2"/>
    <line x1="95" y1="68" x2="95" y2="168" stroke="#64748b" stroke-dasharray="3 2"/>
    <text x="95" y="182" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">AO s (Hình cầu)</text>
    <!-- AO px, py, pz -->
    <ellipse cx="225" cy="118" rx="38" ry="15" fill="#f43f5e" fill-opacity="0.28" stroke="#e11d48" stroke-width="1.8"/>
    <text x="225" y="182" text-anchor="middle" font-size="11" font-weight="800" fill="#be123c">AO px (Trục Ox)</text>
    <ellipse cx="332" cy="118" rx="15" ry="42" fill="#8b5cf6" fill-opacity="0.28" stroke="#6d28d9" stroke-width="1.8"/>
    <text x="332" y="182" text-anchor="middle" font-size="11" font-weight="800" fill="#5b21b6">AO pz (Hình số 8 nổi)</text>

    <!-- Right: Pauli & Hund -->
    <rect x="412" y="20" width="390" height="190" rx="12" fill="#ffffff" stroke="#a5f3fc"/>
    <text x="607" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#0e7490">2. BIỂU DIỄN Ô ORBITAL THEO VỮNG BỀN – PAULI – HUND</text>
    <text x="430" y="68" font-size="11" font-weight="700" fill="#0f172a">Ví dụ Oxygen (Z = 8): Cấu hình 1s² 2s² 2p⁴ (Có 2e độc thân):</text>
    <!-- 1s2 -->
    <rect x="440" y="82" width="36" height="36" rx="5" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
    <text x="458" y="106" text-anchor="middle" font-size="16" font-weight="900" fill="#15803d">↑↓</text>
    <text x="458" y="134" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">1s²</text>
    <!-- 2s2 -->
    <rect x="500" y="82" width="36" height="36" rx="5" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
    <text x="518" y="106" text-anchor="middle" font-size="16" font-weight="900" fill="#15803d">↑↓</text>
    <text x="518" y="134" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">2s²</text>
    <!-- 2p4 -->
    <rect x="565" y="82" width="36" height="36" rx="5" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <rect x="601" y="82" width="36" height="36" rx="5" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <rect x="637" y="82" width="36" height="36" rx="5" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
    <text x="583" y="106" text-anchor="middle" font-size="16" font-weight="900" fill="#1d4ed8">↑↓</text>
    <text x="619" y="106" text-anchor="middle" font-size="16" font-weight="900" fill="#dc2626">↑</text>
    <text x="655" y="106" text-anchor="middle" font-size="16" font-weight="900" fill="#dc2626">↑</text>
    <text x="619" y="134" text-anchor="middle" font-size="11" font-weight="800" fill="#1d4ed8">2p⁴ (Đúng Hund)</text>

    <rect x="430" y="150" width="352" height="46" rx="8" fill="#fef2f2" stroke="#fecaca"/>
    <text x="606" y="168" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b91c1c">• Pauli: Tối đa 2e/1 ô (ngược spin ↑↓)  • Hund: Điền độc thân ↑ ↑ ↑ trước</text>
    <text x="606" y="185" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f766e">• Số e ngoài cùng: 1–3e (Kim loại) | 5–7e (Phi kim) | 8e (Khí hiếm)</text>
  </svg>`,

  // Bài 4: Ôn tập Chương 1
  4: `<svg viewBox="0 0 820 210" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="200" rx="16" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <text x="410" y="30" text-anchor="middle" font-size="14" font-weight="900" fill="#0f766e">BẢN ĐỒ TƯ DUY ÔN TẬP CHƯƠNG 1: CẤU TẠO NGUYÊN TỬ</text>
    <rect x="20" y="48" width="250" height="140" rx="12" fill="#ffffff" stroke="#5eead4"/>
    <text x="145" y="70" text-anchor="middle" font-size="12" font-weight="800" fill="#0e7490">1. HẠT CƠ BẢN &amp; KÍ HIỆU</text>
    <text x="34" y="92" font-size="11" fill="#334155">• Hạt nhân: Proton (+1), Neutron (0)</text>
    <text x="34" y="112" font-size="11" fill="#334155">• Vỏ: Electron (−1); Trung hòa: p = e = Z</text>
    <text x="34" y="132" font-size="11" fill="#334155">• Số khối: A = Z + N; Kí hiệu ᴬᴢX</text>
    <text x="34" y="152" font-size="11" font-weight="700" fill="#0f766e">• Tổng hạt: S = 2Z + N (1 ≤ N/Z ≤ 1,52)</text>

    <rect x="285" y="48" width="250" height="140" rx="12" fill="#ffffff" stroke="#5eead4"/>
    <text x="410" y="70" text-anchor="middle" font-size="12" font-weight="800" fill="#0e7490">2. ĐỒNG VỊ &amp; PHỔ KHỐI LƯỢNG</text>
    <text x="299" y="92" font-size="11" fill="#334155">• Cùng nguyên tố: Cùng số proton Z</text>
    <text x="299" y="112" font-size="11" fill="#334155">• Đồng vị: Cùng Z nhưng khác N (khác A)</text>
    <text x="299" y="132" font-size="11" font-weight="700" fill="#b45309">• Ā = (A₁·a₁ + A₂·a₂ + ...) / 100</text>
    <text x="299" y="152" font-size="11" fill="#334155">• Tổng phần trăm: a₁ + a₂ + ... = 100%</text>

    <rect x="550" y="48" width="250" height="140" rx="12" fill="#ffffff" stroke="#5eead4"/>
    <text x="675" y="70" text-anchor="middle" font-size="12" font-weight="800" fill="#0e7490">3. LỚP VỎ &amp; CẤU HÌNH ELECTRON</text>
    <text x="564" y="92" font-size="11" fill="#334155">• Lớp n: n² AO, tối đa 2n² electron</text>
    <text x="564" y="112" font-size="11" fill="#334155">• Phân lớp: s² (1 AO), p⁶ (3 AO), d¹⁰ (5 AO)</text>
    <text x="564" y="132" font-size="11" fill="#334155">• 3 nguyên tắc: Vững bền – Pauli – Hund</text>
    <text x="564" y="152" font-size="11" font-weight="700" fill="#be123c">• Chú ý: K (Z=19): 1s²2s²2p⁶3s²3p⁶4s¹</text>
  </svg>`,

  // Bài 5: Cấu tạo Bảng tuần hoàn
  5: `<svg viewBox="0 0 820 225" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="215" rx="16" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
    <!-- Left: Element Cell -->
    <rect x="20" y="22" width="220" height="180" rx="12" fill="#ffffff" stroke="#6ee7b7"/>
    <text x="130" y="42" text-anchor="middle" font-size="12" font-weight="800" fill="#047857">1. Ô NGUYÊN TỐ (STT Ô = Z)</text>
    <rect x="65" y="56" width="130" height="115" rx="10" fill="#f0fdf4" stroke="#059669" stroke-width="2"/>
    <text x="76" y="76" font-size="13" font-weight="900" fill="#dc2626">12</text>
    <text x="182" y="76" text-anchor="end" font-size="11" font-weight="700" fill="#2563eb">24,305</text>
    <text x="130" y="112" text-anchor="middle" font-size="28" font-weight="900" fill="#065f46">Mg</text>
    <text x="130" y="132" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Magnesium</text>
    <text x="130" y="148" text-anchor="middle" font-size="10" fill="#475569">[Ne]3s² • χ = 1,31</text>
    <text x="130" y="162" text-anchor="middle" font-size="10" font-weight="700" fill="#b45309">Số oxi hóa: +2</text>

    <!-- Right: Blocks s, p, d, f & Period/Group -->
    <rect x="255" y="22" width="545" height="180" rx="12" fill="#ffffff" stroke="#6ee7b7"/>
    <text x="527" y="42" text-anchor="middle" font-size="12" font-weight="800" fill="#047857">2. CẤU TRÚC 7 CHU KÌ – 18 CỘT (8 NHÓM A &amp; 8 NHÓM B) – 4 KHỐI s, p, d, f</text>
    <!-- s block -->
    <rect x="275" y="60" width="75" height="92" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
    <text x="312" y="102" text-anchor="middle" font-size="12" font-weight="800" fill="#1d4ed8">Khối s</text>
    <text x="312" y="118" text-anchor="middle" font-size="10" fill="#1e40af">IA, IIA</text>
    <!-- d block -->
    <rect x="358" y="88" width="165" height="64" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
    <text x="440" y="118" text-anchor="middle" font-size="12" font-weight="800" fill="#b45309">Khối d (Nhóm B)</text>
    <text x="440" y="134" text-anchor="middle" font-size="10" fill="#92400e">Kim loại chuyển tiếp (CK 4–7)</text>
    <!-- p block -->
    <rect x="531" y="60" width="135" height="92" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
    <text x="598" y="102" text-anchor="middle" font-size="12" font-weight="800" fill="#15803d">Khối p</text>
    <text x="598" y="118" text-anchor="middle" font-size="10" fill="#166534">IIIA → VIIIA</text>
    <!-- f block -->
    <rect x="358" y="160" width="240" height="30" rx="6" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/>
    <text x="478" y="179" text-anchor="middle" font-size="10.5" font-weight="800" fill="#6b21a8">Khối f (Họ Lanthanide &amp; Actinide – CK 6, 7)</text>
    <!-- Key rules -->
    <rect x="676" y="60" width="110" height="130" rx="8" fill="#ecfdf5" stroke="#34d399"/>
    <text x="731" y="82" text-anchor="middle" font-size="10.5" font-weight="800" fill="#065f46">QUY TẮC NHÓM A</text>
    <text x="731" y="104" text-anchor="middle" font-size="10" fill="#0f172a">• STT Ô = Z</text>
    <text x="731" y="126" text-anchor="middle" font-size="10" fill="#0f172a">• STT Chu kì</text>
    <text x="731" y="140" text-anchor="middle" font-size="10" font-weight="700" fill="#047857">= Số lớp e</text>
    <text x="731" y="162" text-anchor="middle" font-size="10" fill="#0f172a">• STT Nhóm A</text>
    <text x="731" y="176" text-anchor="middle" font-size="10" font-weight="700" fill="#047857">= Số e ngoài cùng</text>
  </svg>`,

  // Bài 6: Xu hướng biến đổi bán kính, độ âm điện, tính kim loại / phi kim
  6: `<svg viewBox="0 0 820 225" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="215" rx="16" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
    <text x="410" y="30" text-anchor="middle" font-size="13.5" font-weight="900" fill="#047857">SƠ ĐỒ BIẾN ĐỔI TÍNH CHẤT NGUYÊN TỬ TRONG CHU KÌ VÀ NHÓM A</text>
    <!-- Top arrow: Period Left -> Right -->
    <rect x="190" y="45" width="580" height="58" rx="10" fill="#ffffff" stroke="#34d399" stroke-width="1.5"/>
    <text x="480" y="65" text-anchor="middle" font-size="12" font-weight="800" fill="#0f766e">TRONG MỘT CHU KÌ (TRÁI → PHẢI, Z TĂNG, SỐ LỚP E KHÔNG ĐỔI):</text>
    <text x="480" y="84" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">• Bán kính R GIẢM  • Tính kim loại GIẢM   |   • Độ âm điện χ TĂNG  • Năng lượng I₁ TĂNG  • Tính phi kim TĂNG</text>

    <!-- Left arrow: Group Top -> Bottom -->
    <rect x="20" y="45" width="155" height="160" rx="10" fill="#ffffff" stroke="#34d399" stroke-width="1.5"/>
    <text x="97" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0f766e">TRONG NHÓM A</text>
    <text x="97" y="84" text-anchor="middle" font-size="10.5" font-weight="700" fill="#047857">(TRÊN ↓ DƯỚI)</text>
    <text x="97" y="108" text-anchor="middle" font-size="10.5" font-weight="700" fill="#2563eb">• Số lớp e TĂNG</text>
    <text x="97" y="128" text-anchor="middle" font-size="10.5" font-weight="700" fill="#2563eb">• Bán kính R TĂNG</text>
    <text x="97" y="148" text-anchor="middle" font-size="10.5" font-weight="700" fill="#2563eb">• Tính KL TĂNG</text>
    <text x="97" y="170" text-anchor="middle" font-size="10.5" font-weight="700" fill="#dc2626">• χ, I₁ GIẢM</text>
    <text x="97" y="190" text-anchor="middle" font-size="10.5" font-weight="700" fill="#dc2626">• Tính PK GIẢM</text>

    <!-- Center comparison cards -->
    <rect x="190" y="115" width="280" height="90" rx="10" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="330" y="136" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1d4ed8">KIM LOẠI MẠNH NHẤT (Góc dưới trái)</text>
    <text x="330" y="156" text-anchor="middle" font-size="11" fill="#1e3a8a">Nhóm IA (Cs, K, Na): Bán kính lớn,</text>
    <text x="330" y="174" text-anchor="middle" font-size="11" fill="#1e3a8a">I₁ nhỏ, χ nhỏ (Cs = 0,79) → Dễ nhường e</text>

    <rect x="490" y="115" width="280" height="90" rx="10" fill="#fff1f2" stroke="#fda4af"/>
    <text x="630" y="136" text-anchor="middle" font-size="11.5" font-weight="800" fill="#be123c">PHI KIM MẠNH NHẤT (Góc trên phải)</text>
    <text x="630" y="156" text-anchor="middle" font-size="11" fill="#881337">Fluorine (F, Z=9): Bán kính rất nhỏ,</text>
    <text x="630" y="174" text-anchor="middle" font-size="11" fill="#881337">χ lớn nhất bảng (3,98) → Dễ nhận 1e</text>
  </svg>`,

  // Bài 7: Xu hướng biến đổi Oxide & Hydroxide Chu kì 3
  7: `<svg viewBox="0 0 820 215" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="205" rx="16" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
    <text x="410" y="28" text-anchor="middle" font-size="13.5" font-weight="900" fill="#047857">DÃY BIẾN ĐỔI OXIDE &amp; HYDROXIDE CAO NHẤT CHU KÌ 3 (TỪ TRÁI SANG PHẢI)</text>
    <!-- 7 Columns for Na to Cl -->
    <rect x="18" y="42" width="106" height="122" rx="8" fill="#dbeafe" stroke="#3b82f6"/>
    <text x="71" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1d4ed8">IA (I)</text>
    <text x="71" y="82" text-anchor="middle" font-size="13" font-weight="900" fill="#1e3a8a">Na₂O</text>
    <text x="71" y="104" text-anchor="middle" font-size="12" font-weight="800" fill="#1d4ed8">NaOH</text>
    <text x="71" y="128" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">Base mạnh</text>
    <text x="71" y="144" text-anchor="middle" font-size="9.5" fill="#1e40af">(Kiềm)</text>

    <rect x="132" y="42" width="106" height="122" rx="8" fill="#e0f2fe" stroke="#0ea5e9"/>
    <text x="185" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">IIA (II)</text>
    <text x="185" y="82" text-anchor="middle" font-size="13" font-weight="900" fill="#0c4a6e">MgO</text>
    <text x="185" y="104" text-anchor="middle" font-size="12" font-weight="800" fill="#0369a1">Mg(OH)₂</text>
    <text x="185" y="128" text-anchor="middle" font-size="10" font-weight="700" fill="#0369a1">Base yếu</text>

    <rect x="246" y="42" width="106" height="122" rx="8" fill="#f3e8ff" stroke="#9333ea"/>
    <text x="299" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#7e22ce">IIIA (III)</text>
    <text x="299" y="82" text-anchor="middle" font-size="13" font-weight="900" fill="#581c87">Al₂O₃</text>
    <text x="299" y="104" text-anchor="middle" font-size="12" font-weight="800" fill="#7e22ce">Al(OH)₃</text>
    <text x="299" y="128" text-anchor="middle" font-size="10" font-weight="800" fill="#6b21a8">Lưỡng tính</text>

    <rect x="360" y="42" width="106" height="122" rx="8" fill="#fef9c3" stroke="#eab308"/>
    <text x="413" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#a16207">IVA (IV)</text>
    <text x="413" y="82" text-anchor="middle" font-size="13" font-weight="900" fill="#713f12">SiO₂</text>
    <text x="413" y="104" text-anchor="middle" font-size="12" font-weight="800" fill="#a16207">H₂SiO₃</text>
    <text x="413" y="128" text-anchor="middle" font-size="10" font-weight="700" fill="#a16207">Acid rất yếu</text>
    <text x="413" y="144" text-anchor="middle" font-size="9.5" fill="#713f12">(SiH₄)</text>

    <rect x="474" y="42" width="106" height="122" rx="8" fill="#ffedd5" stroke="#f97316"/>
    <text x="527" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#c2410c">VA (V)</text>
    <text x="527" y="82" text-anchor="middle" font-size="13" font-weight="900" fill="#7c2d12">P₂O₅</text>
    <text x="527" y="104" text-anchor="middle" font-size="12" font-weight="800" fill="#c2410c">H₃PO₄</text>
    <text x="527" y="128" text-anchor="middle" font-size="10" font-weight="700" fill="#c2410c">Acid TB</text>
    <text x="527" y="144" text-anchor="middle" font-size="9.5" fill="#7c2d12">(PH₃)</text>

    <rect x="588" y="42" width="106" height="122" rx="8" fill="#fee2e2" stroke="#ef4444"/>
    <text x="641" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#b91c1c">VIA (VI)</text>
    <text x="641" y="82" text-anchor="middle" font-size="13" font-weight="900" fill="#7f1d1d">SO₃</text>
    <text x="641" y="104" text-anchor="middle" font-size="12" font-weight="800" fill="#b91c1c">H₂SO₄</text>
    <text x="641" y="128" text-anchor="middle" font-size="10" font-weight="700" fill="#b91c1c">Acid mạnh</text>
    <text x="641" y="144" text-anchor="middle" font-size="9.5" fill="#7f1d1d">(H₂S)</text>

    <rect x="702" y="42" width="100" height="122" rx="8" fill="#ffe4e6" stroke="#e11d48"/>
    <text x="752" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#be123c">VIIA (VII)</text>
    <text x="752" y="82" text-anchor="middle" font-size="13" font-weight="900" fill="#881337">Cl₂O₇</text>
    <text x="752" y="104" text-anchor="middle" font-size="12" font-weight="800" fill="#be123c">HClO₄</text>
    <text x="752" y="128" text-anchor="middle" font-size="10" font-weight="800" fill="#be123c">Acid rất mạnh</text>
    <text x="752" y="144" text-anchor="middle" font-size="9.5" fill="#881337">(HCl)</text>

    <!-- Bottom bar -->
    <rect x="18" y="172" width="784" height="28" rx="6" fill="#065f46"/>
    <text x="410" y="190" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">CHIỀU TỪ TRÁI SANG PHẢI CHU KÌ 3: TÍNH BASE GIẢM DẦN  ━━━━━►  TÍNH ACID TĂNG DẦN</text>
  </svg>`,

  // Bài 8: Định luật tuần hoàn & Ý nghĩa bảng tuần hoàn
  8: `<svg viewBox="0 0 820 205" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="195" rx="16" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
    <text x="410" y="28" text-anchor="middle" font-size="13.5" font-weight="900" fill="#047857">TAM GIÁC SUY LUẬN HAI CHIỀU: Ý NGHĨA CỦA BẢNG TUẦN HOÀN</text>
    <rect x="35" y="52" width="225" height="125" rx="12" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
    <text x="147" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="#047857">1. VỊ TRÍ TRONG BTH</text>
    <text x="50" y="100" font-size="11" fill="#334155">• Số thứ tự Ô nguyên tố</text>
    <text x="50" y="122" font-size="11" fill="#334155">• Số thứ tự Chu kì</text>
    <text x="50" y="144" font-size="11" fill="#334155">• Số thứ tự Nhóm A</text>

    <text x="278" y="115" text-anchor="middle" font-size="22" font-weight="900" fill="#059669">⇄</text>

    <rect x="297" y="52" width="225" height="125" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="409" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="#0369a1">2. CẤU TẠO NGUYÊN TỬ</text>
    <text x="312" y="100" font-size="11" fill="#334155">• Số proton = Số electron = Z</text>
    <text x="312" y="122" font-size="11" fill="#334155">• Số lớp electron</text>
    <text x="312" y="144" font-size="11" fill="#334155">• Số electron lớp ngoài cùng</text>

    <text x="540" y="115" text-anchor="middle" font-size="22" font-weight="900" fill="#059669">⇄</text>

    <rect x="559" y="52" width="225" height="125" rx="12" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
    <text x="671" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="#b45309">3. TÍNH CHẤT HÓA HỌC</text>
    <text x="574" y="100" font-size="11" fill="#334155">• Kim loại / Phi kim / Khí hiếm</text>
    <text x="574" y="122" font-size="11" fill="#334155">• Công thức R₂Oₙ &amp; RH₈₋ₙ</text>
    <text x="574" y="144" font-size="11" fill="#334155">• So sánh với nguyên tố lân cận</text>
  </svg>`,

  // Bài 9: Ôn tập Chương 2
  9: `<svg viewBox="0 0 820 205" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="195" rx="16" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
    <text x="410" y="28" text-anchor="middle" font-size="13.5" font-weight="900" fill="#15803d">SƠ ĐỒ GIẢI NHANH CÁC DẠNG BÀI TẬP CHƯƠNG 2</text>
    <rect x="20" y="46" width="250" height="140" rx="12" fill="#ffffff" stroke="#86efac"/>
    <text x="145" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="#15803d">DẠNG 1: OXIDE &amp; HỢP CHẤT KHÍ H</text>
    <text x="34" y="92" font-size="10.5" fill="#334155">• Nhóm nA (IV → VII):</text>
    <text x="34" y="112" font-size="10.5" font-weight="700" fill="#047857">  Oxide cao nhất: R₂Oₙ</text>
    <text x="34" y="132" font-size="10.5" font-weight="700" fill="#0369a1">  Hợp chất khí với H: RH₈₋ₙ</text>
    <text x="34" y="154" font-size="10.5" fill="#334155">• Tổng hóa trị: n + (8 − n) = 8</text>

    <rect x="285" y="46" width="250" height="140" rx="12" fill="#ffffff" stroke="#86efac"/>
    <text x="410" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="#15803d">DẠNG 2: HAI NGUYÊN TỐ KẾ TIẾP</text>
    <text x="299" y="92" font-size="10.5" fill="#334155">• Cùng 1 chu kì (2 ô liên tiếp):</text>
    <text x="299" y="112" font-size="10.5" font-weight="700" fill="#b45309">  Z(B) − Z(A) = 1</text>
    <text x="299" y="134" font-size="10.5" fill="#334155">• Cùng 1 nhóm A (2 chu kì kế tiếp):</text>
    <text x="299" y="154" font-size="10.5" font-weight="700" fill="#be123c">  Z(B) − Z(A) = 8 (hoặc 18)</text>

    <rect x="550" y="46" width="250" height="140" rx="12" fill="#ffffff" stroke="#86efac"/>
    <text x="675" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="#15803d">DẠNG 3: KIM LOẠI IA, IIA + H₂O/HCl</text>
    <text x="564" y="92" font-size="10.5" fill="#334155">• Nhóm IA: n(M) = 2 · n(H₂)</text>
    <text x="564" y="112" font-size="10.5" fill="#334155">• Nhóm IIA: n(M) = n(H₂)</text>
    <text x="564" y="134" font-size="10.5" font-weight="700" fill="#1d4ed8">• Tìm M̄ = m(hỗn hợp) / n(hỗn hợp)</text>
    <text x="564" y="154" font-size="10.5" fill="#334155">• Chọn M₁ &lt; M̄ &lt; M₂ trong nhóm</text>
  </svg>`,

  // Bài 10: Quy tắc Octet
  10: `<svg viewBox="0 0 820 215" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="205" rx="16" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
    <text x="410" y="28" text-anchor="middle" font-size="13.5" font-weight="900" fill="#4338ca">HAI CON ĐƯỜNG ĐẠT CẤU HÌNH BỀN KHÍ HIẾM (8e NGOÀI CÙNG) THEO QUY TẮC OCTET</text>
    <!-- Left: Transfer electron (NaF) -->
    <rect x="20" y="42" width="380" height="152" rx="12" fill="#ffffff" stroke="#a5b4fc"/>
    <text x="210" y="64" text-anchor="middle" font-size="12" font-weight="800" fill="#3730a3">1. NHƯỜNG – NHẬN ELECTRON (TẠO PHÂN TỬ NaF)</text>
    <circle cx="95" cy="122" r="32" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>
    <text x="95" y="120" text-anchor="middle" font-size="13" font-weight="900" fill="#1e3a8a">Na</text>
    <text x="95" y="136" text-anchor="middle" font-size="10" font-weight="700" fill="#1d4ed8">(2, 8, 1)</text>
    <text x="155" y="106" text-anchor="middle" font-size="10" font-weight="800" fill="#dc2626">Nhường 1e →</text>
    <circle cx="215" cy="122" r="32" fill="#fee2e2" stroke="#ef4444" stroke-width="1.8"/>
    <text x="215" y="120" text-anchor="middle" font-size="13" font-weight="900" fill="#991b1b">F</text>
    <text x="215" y="136" text-anchor="middle" font-size="10" font-weight="700" fill="#b91c1c">(2, 7)</text>
    <text x="275" y="126" text-anchor="middle" font-size="18" font-weight="900" fill="#4338ca">→</text>
    <rect x="298" y="92" width="88" height="60" rx="8" fill="#eef2ff" stroke="#4f46e5"/>
    <text x="342" y="116" text-anchor="middle" font-size="12" font-weight="900" fill="#312e81">Na⁺ F⁻</text>
    <text x="342" y="134" text-anchor="middle" font-size="10" font-weight="700" fill="#047857">Đều đạt (2, 8)</text>
    <text x="342" y="147" text-anchor="middle" font-size="9.5" fill="#475569">giống khí hiếm Ne</text>

    <!-- Right: Share electron (Cl2 & H2O) -->
    <rect x="420" y="42" width="380" height="152" rx="12" fill="#ffffff" stroke="#a5b4fc"/>
    <text x="610" y="64" text-anchor="middle" font-size="12" font-weight="800" fill="#3730a3">2. GÓP CHUNG CẶP ELECTRON (PHÂN TỬ Cl₂ &amp; H₂O)</text>
    <circle cx="525" cy="124" r="38" fill="#dcfce7" fill-opacity="0.6" stroke="#16a34a" stroke-width="1.8"/>
    <circle cx="575" cy="124" r="38" fill="#dcfce7" fill-opacity="0.6" stroke="#16a34a" stroke-width="1.8"/>
    <text x="510" y="128" text-anchor="middle" font-size="13" font-weight="900" fill="#14532d">Cl</text>
    <text x="590" y="128" text-anchor="middle" font-size="13" font-weight="900" fill="#14532d">Cl</text>
    <text x="550" y="128" text-anchor="middle" font-size="14" font-weight="900" fill="#dc2626">:</text>
    <text x="550" y="178" text-anchor="middle" font-size="10.5" font-weight="700" fill="#15803d">Mỗi Cl đạt 8e (Octet)</text>

    <circle cx="715" cy="124" r="36" fill="#fef3c7" fill-opacity="0.7" stroke="#d97706" stroke-width="1.8"/>
    <circle cx="672" cy="124" r="20" fill="#e0f2fe" fill-opacity="0.7" stroke="#0284c7" stroke-width="1.5"/>
    <circle cx="758" cy="124" r="20" fill="#e0f2fe" fill-opacity="0.7" stroke="#0284c7" stroke-width="1.5"/>
    <text x="665" y="128" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">H</text>
    <text x="715" y="128" text-anchor="middle" font-size="13" font-weight="900" fill="#92400e">O</text>
    <text x="765" y="128" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">H</text>
    <text x="715" y="178" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b45309">O đạt 8e; H đạt 2e (He)</text>
  </svg>`,

  // Bài 11: Liên kết Ion & Mạng tinh thể NaCl
  11: `<svg viewBox="0 0 820 220" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="210" rx="16" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
    <rect x="20" y="20" width="420" height="180" rx="12" fill="#ffffff" stroke="#a5b4fc"/>
    <text x="230" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#3730a3">1. SỰ TẠO THÀNH LIÊN KẾT ION TRONG NaCl &amp; CaCl₂</text>
    <text x="36" y="72" font-size="11" font-weight="700" fill="#1e3a8a">• Kim loại nhường e tạo Cation: Na → Na⁺ + 1e  |  Ca → Ca²⁺ + 2e</text>
    <text x="36" y="96" font-size="11" font-weight="700" fill="#15803d">• Phi kim nhận e tạo Anion: Cl + 1e → Cl⁻</text>
    <text x="36" y="120" font-size="11" font-weight="800" fill="#be123c">• Hút tĩnh điện: Na⁺ + Cl⁻ → NaCl   |   Ca²⁺ + 2Cl⁻ → CaCl₂</text>
    <rect x="36" y="136" width="388" height="50" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="230" y="156" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">Tính chất hợp chất Ion: Rắn, nhiệt độ nóng chảy &amp; sôi rất cao, cứng nhưng giòn;</text>
    <text x="230" y="174" text-anchor="middle" font-size="10.5" font-weight="800" fill="#dc2626">Trạng thái RẮN KHAN không dẫn điện; NÓNG CHẢY hoặc DUNG DỊCH dẫn điện tốt.</text>

    <rect x="455" y="20" width="345" height="180" rx="12" fill="#ffffff" stroke="#a5b4fc"/>
    <text x="627" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#3730a3">2. MẠNG TINH THỂ ION NaCl (PHỐI TRÍ 6 : 6)</text>
    <!-- Lattice grid -->
    <line x1="530" y1="75" x2="670" y2="75" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="530" y1="120" x2="670" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="530" y1="165" x2="670" y2="165" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="530" y1="75" x2="530" y2="165" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="600" y1="75" x2="600" y2="165" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="670" y1="75" x2="670" y2="165" stroke="#94a3b8" stroke-width="1.5"/>
    <!-- Ions -->
    <circle cx="530" cy="75" r="13" fill="#22c55e"/><text x="530" y="79" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">Cl⁻</text>
    <circle cx="600" cy="75" r="9" fill="#3b82f6"/><text x="600" y="78" text-anchor="middle" font-size="8" font-weight="800" fill="#fff">Na⁺</text>
    <circle cx="670" cy="75" r="13" fill="#22c55e"/><text x="670" y="79" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">Cl⁻</text>

    <circle cx="530" cy="120" r="9" fill="#3b82f6"/><text x="530" y="123" text-anchor="middle" font-size="8" font-weight="800" fill="#fff">Na⁺</text>
    <circle cx="600" cy="120" r="13" fill="#22c55e"/><text x="600" y="124" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">Cl⁻</text>
    <circle cx="670" cy="120" r="9" fill="#3b82f6"/><text x="670" y="123" text-anchor="middle" font-size="8" font-weight="800" fill="#fff">Na⁺</text>

    <circle cx="530" cy="165" r="13" fill="#22c55e"/><text x="530" y="169" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">Cl⁻</text>
    <circle cx="600" cy="165" r="9" fill="#3b82f6"/><text x="600" y="168" text-anchor="middle" font-size="8" font-weight="800" fill="#fff">Na⁺</text>
    <circle cx="670" cy="165" r="13" fill="#22c55e"/><text x="670" y="169" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">Cl⁻</text>

    <text x="735" y="105" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">Mỗi Na⁺ được</text>
    <text x="735" y="120" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">bao quanh bởi</text>
    <text x="735" y="135" text-anchor="middle" font-size="10.5" font-weight="800" fill="#15803d">6 ion Cl⁻ gần nhất</text>
  </svg>`,

  // Bài 12: Liên kết Cộng hóa trị (Lewis, Cho-Nhận, Sigma & Pi)
  12: `<svg viewBox="0 0 820 225" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="215" rx="16" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
    <!-- Left: Lewis & Sigma/Pi counts -->
    <rect x="18" y="20" width="420" height="185" rx="12" fill="#ffffff" stroke="#a5b4fc"/>
    <text x="228" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#3730a3">1. CÔNG THỨC CẤU TẠO &amp; THÀNH PHẦN LIÊN KẾT σ, π</text>
    <text x="34" y="68" font-size="11.5" font-weight="700" fill="#0f172a">• Liên kết đơn (H–Cl, Cl–Cl): 1 cặp e chung = <tspan fill="#2563eb" font-weight="800">1 liên kết σ</tspan></text>
    <text x="34" y="92" font-size="11.5" font-weight="700" fill="#0f172a">• Liên kết đôi (O=O, O=C=O): 2 cặp e chung = <tspan fill="#16a34a" font-weight="800">1σ + 1π</tspan></text>
    <text x="34" y="116" font-size="11.5" font-weight="700" fill="#0f172a">• Liên kết ba (N≡N, HC≡CH): 3 cặp e chung = <tspan fill="#dc2626" font-weight="800">1σ + 2π</tspan></text>
    <text x="34" y="140" font-size="11.5" font-weight="700" fill="#6d28d9">• Liên kết cho – nhận (H₃N: → H⁺ tạo NH₄⁺): Cặp e do 1 nguyên tử đóng góp</text>
    <rect x="34" y="152" width="388" height="38" rx="8" fill="#eef2ff" stroke="#818cf8"/>
    <text x="228" y="175" text-anchor="middle" font-size="11" font-weight="800" fill="#312e81">Hiệu độ âm điện Δχ: [0; 0,4) Không cực | [0,4; 1,7) Phân cực | ≥ 1,7 Ion</text>

    <!-- Right: Orbital Overlap Sigma vs Pi -->
    <rect x="452" y="20" width="350" height="185" rx="12" fill="#ffffff" stroke="#a5b4fc"/>
    <text x="627" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#3730a3">2. XEN PHỦ TRỤC (σ) &amp; XEN PHỦ BÊN (π)</text>
    <!-- Axial overlap -->
    <ellipse cx="525" cy="86" rx="34" ry="14" fill="#38bdf8" fill-opacity="0.35" stroke="#0284c7" stroke-width="1.8"/>
    <ellipse cx="575" cy="86" rx="34" ry="14" fill="#38bdf8" fill-opacity="0.35" stroke="#0284c7" stroke-width="1.8"/>
    <line x1="480" y1="86" x2="620" y2="86" stroke="#0f172a" stroke-dasharray="3 2"/>
    <text x="705" y="84" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">Xen phủ trục → Liên kết σ</text>
    <text x="705" y="99" text-anchor="middle" font-size="10" fill="#475569">(Vùng xen phủ trên trục, rất bền)</text>

    <!-- Lateral overlap -->
    <ellipse cx="525" cy="152" rx="14" ry="34" fill="#f43f5e" fill-opacity="0.3" stroke="#e11d48" stroke-width="1.8"/>
    <ellipse cx="565" cy="152" rx="14" ry="34" fill="#f43f5e" fill-opacity="0.3" stroke="#e11d48" stroke-width="1.8"/>
    <line x1="525" y1="125" x2="565" y2="125" stroke="#e11d48" stroke-width="2.5" stroke-dasharray="3 2"/>
    <line x1="525" y1="179" x2="565" y2="179" stroke="#e11d48" stroke-width="2.5" stroke-dasharray="3 2"/>
    <text x="705" y="150" text-anchor="middle" font-size="11" font-weight="800" fill="#be123c">Xen phủ bên → Liên kết π</text>
    <text x="705" y="165" text-anchor="middle" font-size="10" fill="#475569">(Kém bền hơn liên kết σ)</text>
  </svg>`,

  // Bài 13: Liên kết Hydrogen & Tương tác van der Waals
  13: `<svg viewBox="0 0 820 220" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="210" rx="16" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
    <!-- Left: Hydrogen bonding -->
    <rect x="18" y="20" width="415" height="180" rx="12" fill="#ffffff" stroke="#a5b4fc"/>
    <text x="225" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#3730a3">1. LIÊN KẾT HYDROGEN GIỮA CÁC PHÂN TỬ H₂O / HF</text>
    <circle cx="95" cy="105" r="20" fill="#ef4444"/><text x="95" y="109" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">Oδ⁻</text>
    <circle cx="60" cy="132" r="11" fill="#3b82f6"/><text x="60" y="136" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">H</text>
    <circle cx="135" cy="105" r="12" fill="#3b82f6"/><text x="135" y="109" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">Hδ⁺</text>
    <line x1="78" y1="117" x2="68" y2="125" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="115" y1="105" x2="123" y2="105" stroke="#0f172a" stroke-width="2.5"/>
    <!-- Dotted H-bond -->
    <line x1="149" y1="105" x2="215" y2="105" stroke="#dc2626" stroke-width="3" stroke-dasharray="4 4"/>
    <text x="182" y="95" text-anchor="middle" font-size="10.5" font-weight="800" fill="#dc2626">Liên kết H (···)</text>
    <!-- Second H2O -->
    <circle cx="238" cy="105" r="20" fill="#ef4444"/><text x="238" y="109" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">:Oδ⁻</text>
    <circle cx="272" cy="80" r="11" fill="#3b82f6"/><text x="272" y="84" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">H</text>
    <circle cx="272" cy="132" r="11" fill="#3b82f6"/><text x="272" y="136" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">H</text>
    <line x1="254" y1="93" x2="264" y2="86" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="254" y1="117" x2="264" y2="125" stroke="#0f172a" stroke-width="2.5"/>
    <text x="225" y="164" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1e3a8a">• Điều kiện: H gắn trực tiếp vào F, O, N hút cặp e riêng trên F, O, N</text>
    <text x="225" y="182" text-anchor="middle" font-size="10.5" font-weight="700" fill="#047857">• Làm tăng nhiệt độ sôi &amp; độ tan trong nước (Acid &gt; Rượu &gt; Nước)</text>

    <!-- Right: van der Waals -->
    <rect x="448" y="20" width="352" height="180" rx="12" fill="#ffffff" stroke="#a5b4fc"/>
    <text x="624" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#3730a3">2. TƯƠNG TÁC VAN DER WAALS</text>
    <ellipse cx="545" cy="102" rx="45" ry="26" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.8"/>
    <text x="518" y="106" font-size="12" font-weight="800" fill="#dc2626">δ+</text>
    <text x="566" y="106" font-size="12" font-weight="800" fill="#2563eb">δ−</text>
    <text x="545" y="142" text-anchor="middle" font-size="9.5" font-weight="700" fill="#4338ca">Lưỡng cực tức thời</text>
    <line x1="593" y1="102" x2="645" y2="102" stroke="#6366f1" stroke-width="2.5" stroke-dasharray="3 3"/>
    <ellipse cx="695" cy="102" rx="45" ry="26" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.8"/>
    <text x="668" y="106" font-size="12" font-weight="800" fill="#dc2626">δ+</text>
    <text x="716" y="106" font-size="12" font-weight="800" fill="#2563eb">δ−</text>
    <text x="695" y="142" text-anchor="middle" font-size="9.5" font-weight="700" fill="#4338ca">Lưỡng cực cảm ứng</text>
    <text x="624" y="166" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">• Tăng khi khối lượng phân tử M (số e) tăng (F₂ &lt; Cl₂ &lt; Br₂ &lt; I₂)</text>
    <text x="624" y="183" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b45309">• Đồng phân mạch thẳng (pentane) sôi cao hơn mạch nhánh (neopentane)</text>
  </svg>`,

  // Bài 14: Ôn tập Chương 3
  14: `<svg viewBox="0 0 820 205" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="195" rx="16" fill="#eef2ff" stroke="#4f46e5" stroke-width="1.5"/>
    <text x="410" y="28" text-anchor="middle" font-size="13.5" font-weight="900" fill="#3730a3">THANG SO SÁNH BẢN CHẤT LIÊN KẾT &amp; NHIỆT ĐỘ SÔI CÁC CHẤT (CHƯƠNG 3)</text>
    <rect x="20" y="46" width="250" height="140" rx="12" fill="#ffffff" stroke="#818cf8"/>
    <text x="145" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="#3730a3">1. LIÊN KẾT ION (Δχ ≥ 1,7)</text>
    <text x="34" y="92" font-size="10.5" fill="#334155">• Kim loại điển hình + Phi kim điển hình</text>
    <text x="34" y="112" font-size="10.5" fill="#334155">• Bản chất: Hút tĩnh điện ion trái dấu</text>
    <text x="34" y="132" font-size="10.5" font-weight="700" fill="#be123c">• Nhiệt độ nóng chảy &amp; sôi RẤT CAO</text>
    <text x="34" y="152" font-size="10.5" fill="#334155">• VD: NaCl, MgO, CaF₂, K₂O, CaCl₂</text>

    <rect x="285" y="46" width="250" height="140" rx="12" fill="#ffffff" stroke="#818cf8"/>
    <text x="410" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="#3730a3">2. LIÊN KẾT CỘNG HÓA TRỊ</text>
    <text x="299" y="92" font-size="10.5" fill="#334155">• Góp chung cặp electron (σ và π)</text>
    <text x="299" y="112" font-size="10.5" fill="#0369a1">• Không cực (0 ≤ Δχ &lt; 0,4): H₂, Cl₂, N₂, CH₄</text>
    <text x="299" y="132" font-size="10.5" fill="#047857">• Phân cực (0,4 ≤ Δχ &lt; 1,7): HCl, H₂O, NH₃</text>
    <text x="299" y="152" font-size="10.5" font-weight="700" fill="#6d28d9">• Ngoại lệ: HF, AlCl₃ là CHT phân cực</text>

    <rect x="550" y="46" width="250" height="140" rx="12" fill="#ffffff" stroke="#818cf8"/>
    <text x="675" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="#3730a3">3. TƯƠNG TÁC LIÊN PHÂN TỬ</text>
    <text x="564" y="92" font-size="10.5" fill="#334155">• Liên kết Hydrogen (···H–F/O/N):</text>
    <text x="564" y="112" font-size="10.5" font-weight="700" fill="#b45309">  Làm tăng vọt t°s và độ tan trong H₂O</text>
    <text x="564" y="132" font-size="10.5" fill="#334155">• Tương tác van der Waals:</text>
    <text x="564" y="152" font-size="10.5" fill="#334155">  M càng lớn, ít nhánh → t°s càng cao</text>
  </svg>`,

  // Bài 15: Phản ứng Oxi hóa – Khử & 4 bước cân bằng
  15: `<svg viewBox="0 0 820 225" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="215" rx="16" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="18" y="20" width="385" height="185" rx="12" fill="#ffffff" stroke="#fcd34d"/>
    <text x="210" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#b45309">1. QUY TẮC VÀNG: “KHỬ CHO – O NHẬN”</text>
    <rect x="34" y="58" width="160" height="72" rx="10" fill="#dbeafe" stroke="#2563eb"/>
    <text x="114" y="78" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e3a8a">CHẤT KHỬ</text>
    <text x="114" y="96" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d4ed8">Nhường electron</text>
    <text x="114" y="114" text-anchor="middle" font-size="10" fill="#1e40af">(Số oxi hóa TĂNG ↑)</text>
    <text x="210" y="96" text-anchor="middle" font-size="12" font-weight="900" fill="#dc2626">─ e ─►</text>
    <rect x="226" y="58" width="160" height="72" rx="10" fill="#fee2e2" stroke="#ef4444"/>
    <text x="306" y="78" text-anchor="middle" font-size="11.5" font-weight="800" fill="#991b1b">CHẤT OXI HÓA</text>
    <text x="306" y="96" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b91c1c">Nhận electron</text>
    <text x="306" y="114" text-anchor="middle" font-size="10" fill="#7f1d1d">(Số oxi hóa GIẢM ↓)</text>
    <text x="210" y="154" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">• Sự oxi hóa (Quá trình oxi hóa) = Quá trình chất khử nhường e</text>
    <text x="210" y="174" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">• Sự khử (Quá trình khử) = Quá trình chất oxi hóa nhận e</text>

    <rect x="418" y="20" width="384" height="185" rx="12" fill="#ffffff" stroke="#fcd34d"/>
    <text x="610" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#b45309">2. BỐN BƯỚC CÂN BẰNG THĂNG BẰNG ELECTRON</text>
    <text x="434" y="68" font-size="11" font-weight="700" fill="#0f172a">VD:  4 N⁻³H₃  +  5 O₂⁰  →  4 N⁺²O  +  6 H₂O⁻²</text>
    <text x="434" y="94" font-size="10.5" fill="#334155">• B1: Xác định nguyên tố đổi số oxi hóa (N: −3 → +2; O: 0 → −2)</text>
    <text x="434" y="116" font-size="10.5" fill="#1d4ed8">• B2: Quá trình oxi hóa: N⁻³ → N⁺² + 5e   (nhân hệ số × 4)</text>
    <text x="434" y="136" font-size="10.5" fill="#b91c1c">      Quá trình khử:     O₂⁰ + 4e → 2O⁻²  (nhân hệ số × 5)</text>
    <text x="434" y="158" font-size="10.5" font-weight="700" fill="#047857">• B3 &amp; B4: Đặt hệ số (4, 5, 4, 6) &amp; kiểm tra tổng nguyên tử O hai vế!</text>
  </svg>`,

  // Bài 16: Ôn tập Chương 4
  16: `<svg viewBox="0 0 820 205" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="195" rx="16" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
    <text x="410" y="28" text-anchor="middle" font-size="13.5" font-weight="900" fill="#b45309">TỔNG KẾT CHƯƠNG 4: NHẬN DIỆN NHANH &amp; ĐỊNH LUẬT BẢO TOÀN ELECTRON</text>
    <rect x="20" y="46" width="380" height="140" rx="12" fill="#ffffff" stroke="#fcd34d"/>
    <text x="210" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="#b45309">1. NHẬN DIỆN NHANH PHẢN ỨNG REDOX</text>
    <text x="36" y="94" font-size="11" font-weight="700" fill="#15803d">✓ Có ĐƠN CHẤT tham gia hoặc tạo thành → LUÔN LÀ Oxi hóa - Khử</text>
    <text x="36" y="118" font-size="11" font-weight="700" fill="#dc2626">✕ Phản ứng trao đổi ion (Trung hòa, kết tủa) → KHÔNG PHẢI Redox</text>
    <text x="36" y="142" font-size="11" fill="#334155">• Tự oxi hóa – khử: Cl₂ + 2NaOH → NaCl + NaClO + H₂O</text>

    <rect x="420" y="46" width="380" height="140" rx="12" fill="#ffffff" stroke="#fcd34d"/>
    <text x="610" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="#b45309">2. BẢO TOÀN ELECTRON GIẢI TOÁN KIM LOẠI</text>
    <text x="436" y="94" font-size="11" font-weight="800" fill="#1d4ed8">Tổng số mol e Kim loại nhường = Tổng số mol e Acid nhận</text>
    <text x="436" y="118" font-size="10.5" fill="#334155">• Với HCl / H₂SO₄ loãng:  Σ n · n(M) = 2 · n(H₂)</text>
    <text x="436" y="140" font-size="10.5" fill="#334155">• Với HNO₃:  Σ n · n(M) = 1·n(NO₂) + 3·n(NO) + 8·n(N₂O) + 10·n(N₂)</text>
    <text x="436" y="162" font-size="10.5" fill="#334155">• Với H₂SO₄ đặc:  Σ n · n(M) = 2·n(SO₂) + 6·n(S) + 8·n(H₂S)</text>
  </svg>`,

  // Bài 17: Biến thiên Enthalpy (Giản đồ năng lượng Tỏa nhiệt vs Thu nhiệt)
  17: `<svg viewBox="0 0 820 230" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="220" rx="16" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
    <!-- Left: Exothermic -->
    <rect x="18" y="20" width="385" height="190" rx="12" fill="#ffffff" stroke="#fda4af"/>
    <text x="210" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#be123c">1. PHẢN ỨNG TỎA NHIỆT (ΔrH°₂₉₈ &lt; 0)</text>
    <line x1="55" y1="175" x2="365" y2="175" stroke="#334155" stroke-width="1.5"/>
    <line x1="55" y1="60" x2="55" y2="175" stroke="#334155" stroke-width="1.5"/>
    <rect x="75" y="75" width="105" height="26" rx="5" fill="#dbeafe" stroke="#2563eb"/>
    <text x="127" y="92" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1e3a8a">Chất đầu (CĐ)</text>
    <rect x="235" y="135" width="110" height="26" rx="5" fill="#dcfce7" stroke="#16a34a"/>
    <text x="290" y="152" text-anchor="middle" font-size="10.5" font-weight="800" fill="#14532d">Sản phẩm (SP)</text>
    <line x1="180" y1="88" x2="235" y2="148" stroke="#e11d48" stroke-width="2.5"/>
    <text x="215" y="106" font-size="11" font-weight="800" fill="#be123c">ΔrH°₂₉₈ &lt; 0</text>
    <text x="210" y="195" text-anchor="middle" font-size="10.5" font-weight="700" fill="#be123c">H(CĐ) &gt; H(SP) → Giải phóng nhiệt ra môi trường</text>

    <!-- Right: Endothermic -->
    <rect x="418" y="20" width="384" height="190" rx="12" fill="#ffffff" stroke="#fda4af"/>
    <text x="610" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#0369a1">2. PHẢN ỨNG THU NHIỆT (ΔrH°₂₉₈ &gt; 0)</text>
    <line x1="455" y1="175" x2="765" y2="175" stroke="#334155" stroke-width="1.5"/>
    <line x1="455" y1="60" x2="455" y2="175" stroke="#334155" stroke-width="1.5"/>
    <rect x="475" y="135" width="105" height="26" rx="5" fill="#dbeafe" stroke="#2563eb"/>
    <text x="527" y="152" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1e3a8a">Chất đầu (CĐ)</text>
    <rect x="635" y="75" width="110" height="26" rx="5" fill="#dcfce7" stroke="#16a34a"/>
    <text x="690" y="92" text-anchor="middle" font-size="10.5" font-weight="800" fill="#14532d">Sản phẩm (SP)</text>
    <line x1="580" y1="148" x2="635" y2="88" stroke="#0284c7" stroke-width="2.5"/>
    <text x="595" y="106" font-size="11" font-weight="800" fill="#0369a1">ΔrH°₂₉₈ &gt; 0</text>
    <text x="610" y="195" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0369a1">H(CĐ) &lt; H(SP) → Hấp thụ nhiệt từ môi trường</text>
  </svg>`,

  // Bài 18: Ôn tập Chương 5
  18: `<svg viewBox="0 0 820 205" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="195" rx="16" fill="#fff1f2" stroke="#e11d48" stroke-width="1.5"/>
    <text x="410" y="28" text-anchor="middle" font-size="13.5" font-weight="900" fill="#be123c">HAI CÔNG THỨC TÍNH BIẾN THIÊN ENTHALPY CHUẨN ΔrH°₂₉₈ (CHƯƠNG 5)</text>
    <rect x="20" y="46" width="380" height="140" rx="12" fill="#ffffff" stroke="#fda4af"/>
    <text x="210" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="#be123c">1. THEO NHIỆT TẠO THÀNH CHUẨN (ΔfH°₂₉₈)</text>
    <text x="210" y="96" text-anchor="middle" font-size="12" font-weight="900" fill="#0f172a">ΔrH°₂₉₈ = Σ ν·ΔfH°₂₉₈(SP) − Σ ν·ΔfH°₂₉₈(CĐ)</text>
    <text x="210" y="122" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">Quy tắc nhớ: Lấy SAU trừ TRƯỚC (Sản phẩm − Chất đầu)</text>
    <text x="210" y="146" text-anchor="middle" font-size="10.5" fill="#475569">• Đơn chất bền nhất có ΔfH°₂₉₈ = 0 kJ/mol</text>

    <rect x="420" y="46" width="380" height="140" rx="12" fill="#ffffff" stroke="#fda4af"/>
    <text x="610" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="#1d4ed8">2. THEO NĂNG LƯỢNG LIÊN KẾT (Eb - CHẤT KHÍ)</text>
    <text x="610" y="96" text-anchor="middle" font-size="12" font-weight="900" fill="#0f172a">ΔrH°₂₉₈ = Σ Eb(Chất đầu) − Σ Eb(Sản phẩm)</text>
    <text x="610" y="122" text-anchor="middle" font-size="11" font-weight="800" fill="#b45309">Quy tắc nhớ: Lấy TRƯỚC trừ SAU (Chất đầu − Sản phẩm)</text>
    <text x="610" y="146" text-anchor="middle" font-size="10.5" fill="#475569">• Chỉ áp dụng khi mọi chất ở thể khí (g); Đơn chất khí có Eb ≠ 0</text>
  </svg>`,

  // Bài 19: Tốc độ phản ứng & Giản đồ năng lượng hoạt hóa khi có xúc tác
  19: `<svg viewBox="0 0 820 230" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="220" rx="16" fill="#faf5ff" stroke="#9333ea" stroke-width="1.5"/>
    <!-- Left: Concentration vs Time -->
    <rect x="18" y="20" width="380" height="190" rx="12" fill="#ffffff" stroke="#d8b4fe"/>
    <text x="208" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#6b21a8">1. ĐỒ THỊ NỒNG ĐỘ THEO THỜI GIAN (A → B)</text>
    <line x1="55" y1="175" x2="365" y2="175" stroke="#334155" stroke-width="1.5"/>
    <line x1="55" y1="58" x2="55" y2="175" stroke="#334155" stroke-width="1.5"/>
    <!-- Product curve (rising) -->
    <path d="M 55 175 Q 140 85 350 75" fill="none" stroke="#16a34a" stroke-width="2.8"/>
    <text x="295" y="68" font-size="10.5" font-weight="800" fill="#15803d">[Sản phẩm] tăng</text>
    <!-- Reactant curve (falling) -->
    <path d="M 55 70 Q 140 155 350 165" fill="none" stroke="#dc2626" stroke-width="2.8"/>
    <text x="295" y="155" font-size="10.5" font-weight="800" fill="#b91c1c">[Chất đầu] giảm</text>
    <text x="208" y="196" text-anchor="middle" font-size="10.5" font-weight="700" fill="#581c87">v(tb) = −(1/a)(ΔC_A/Δt) = +(1/b)(ΔC_B/Δt)</text>

    <!-- Right: Catalyst & Activation Energy -->
    <rect x="415" y="20" width="387" height="190" rx="12" fill="#ffffff" stroke="#d8b4fe"/>
    <text x="608" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#6b21a8">2. VAI TRÒ CỦA CHẤT XÚC TÁC (GIẢM NĂNG LƯỢNG HOẠT HÓA Ea)</text>
    <line x1="450" y1="175" x2="770" y2="175" stroke="#334155" stroke-width="1.5"/>
    <line x1="450" y1="58" x2="450" y2="175" stroke="#334155" stroke-width="1.5"/>
    <!-- Without catalyst -->
    <path d="M 465 135 Q 585 30 735 155" fill="none" stroke="#dc2626" stroke-width="2.5"/>
    <text x="585" y="66" text-anchor="middle" font-size="10" font-weight="800" fill="#b91c1c">Không có xúc tác (Ea cao)</text>
    <!-- With catalyst -->
    <path d="M 465 135 Q 585 88 735 155" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="5 3"/>
    <text x="585" y="122" text-anchor="middle" font-size="10" font-weight="800" fill="#0369a1">Có xúc tác (Ea thấp hơn)</text>
    <text x="608" y="196" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f766e">5 Yếu tố: Nồng độ • Áp suất (khí) • Nhiệt độ (γ) • Diện tích • Xúc tác</text>
  </svg>`,

  // Bài 20: Ôn tập Chương 6
  20: `<svg viewBox="0 0 820 205" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="195" rx="16" fill="#faf5ff" stroke="#7e22ce" stroke-width="1.5"/>
    <text x="410" y="28" text-anchor="middle" font-size="13.5" font-weight="900" fill="#6b21a8">BA TRỤ CỘT CÔNG THỨC ÔN TẬP CHƯƠNG 6: TỐC ĐỘ PHẢN ỨNG</text>
    <rect x="20" y="46" width="250" height="140" rx="12" fill="#ffffff" stroke="#c084fc"/>
    <text x="145" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="#6b21a8">1. TỐC ĐỘ TRUNG BÌNH</text>
    <text x="145" y="96" text-anchor="middle" font-size="11" font-weight="800" fill="#0f172a">v(tb) = |ΔC| / (hệ số × Δt)</text>
    <text x="34" y="122" font-size="10.5" fill="#334155">• Đổi số mol ra nồng độ: C = n / V</text>
    <text x="34" y="144" font-size="10.5" fill="#334155">• Đơn vị: mol/(L·s) hoặc M/phút</text>

    <rect x="285" y="46" width="250" height="140" rx="12" fill="#ffffff" stroke="#c084fc"/>
    <text x="410" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="#6b21a8">2. ĐỊNH LUẬT TÁC DỤNG KHỐI LƯỢNG</text>
    <text x="410" y="96" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1d4ed8">v = k · C_A^a · C_B^b</text>
    <text x="299" y="122" font-size="10.5" fill="#334155">• k chỉ phụ thuộc Nhiệt độ &amp; Bản chất</text>
    <text x="299" y="144" font-size="10.5" font-weight="700" fill="#be123c">• KHÔNG viết chất rắn (s) vào biểu thức v</text>

    <rect x="550" y="46" width="250" height="140" rx="12" fill="#ffffff" stroke="#c084fc"/>
    <text x="675" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="#6b21a8">3. HỆ SỐ NHIỆT ĐỘ VAN'T HOFF</text>
    <text x="675" y="96" text-anchor="middle" font-size="11.5" font-weight="800" fill="#15803d">v₂ / v₁ = t₁ / t₂ = γ^((T₂ − T₁)/10)</text>
    <text x="564" y="122" font-size="10.5" fill="#334155">• Tăng 10°C → tốc độ tăng γ = 2 đến 4 lần</text>
    <text x="564" y="144" font-size="10.5" fill="#334155">• Tốc độ tăng k lần → thời gian giảm k lần</text>
  </svg>`,

  // Bài 21: Nhóm Halogen & Điện phân dung dịch NaCl có màng ngăn
  21: `<svg viewBox="0 0 820 225" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="215" rx="16" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
    <!-- Left: 4 Halogens -->
    <rect x="18" y="20" width="420" height="185" rx="12" fill="#ffffff" stroke="#5eead4"/>
    <text x="228" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#0f766e">1. BIẾN ĐỔI ĐƠN CHẤT NHÓM HALOGEN (VIIA: ns²np⁵)</text>
    <rect x="30" y="56" width="90" height="90" rx="8" fill="#ecfccb" stroke="#84cc16"/>
    <text x="75" y="78" text-anchor="middle" font-size="14" font-weight="900" fill="#3f6212">F₂ (Khí)</text>
    <text x="75" y="98" text-anchor="middle" font-size="10" font-weight="700" fill="#4d7c0f">Lục nhạt</text>
    <text x="75" y="116" text-anchor="middle" font-size="9.5" fill="#365314">t°s = −188°C</text>
    <text x="75" y="134" text-anchor="middle" font-size="9.5" font-weight="800" fill="#dc2626">Chỉ có −1</text>

    <rect x="130" y="56" width="90" height="90" rx="8" fill="#fef08a" stroke="#eab308"/>
    <text x="175" y="78" text-anchor="middle" font-size="14" font-weight="900" fill="#713f12">Cl₂ (Khí)</text>
    <text x="175" y="98" text-anchor="middle" font-size="10" font-weight="700" fill="#854d0e">Vàng lục</text>
    <text x="175" y="116" text-anchor="middle" font-size="9.5" fill="#713f12">t°s = −34°C</text>
    <text x="175" y="134" text-anchor="middle" font-size="9.5" fill="#713f12">−1,+1,+3,+5,+7</text>

    <rect x="230" y="56" width="90" height="90" rx="8" fill="#fed7aa" stroke="#ea580c"/>
    <text x="275" y="78" text-anchor="middle" font-size="14" font-weight="900" fill="#7c2d12">Br₂ (Lỏng)</text>
    <text x="275" y="98" text-anchor="middle" font-size="10" font-weight="700" fill="#9a3412">Nâu đỏ</text>
    <text x="275" y="116" text-anchor="middle" font-size="9.5" fill="#7c2d12">t°s = +58,8°C</text>
    <text x="275" y="134" text-anchor="middle" font-size="9.5" fill="#7c2d12">Dễ bay hơi</text>

    <rect x="330" y="56" width="95" height="90" rx="8" fill="#e9d5ff" stroke="#7e22ce"/>
    <text x="377" y="78" text-anchor="middle" font-size="14" font-weight="900" fill="#581c87">I₂ (Rắn)</text>
    <text x="377" y="98" text-anchor="middle" font-size="10" font-weight="700" fill="#6b21a8">Đen tím</text>
    <text x="377" y="116" text-anchor="middle" font-size="9.5" fill="#581c87">t°s = +184°C</text>
    <text x="377" y="134" text-anchor="middle" font-size="9.5" font-weight="700" fill="#6b21a8">Thăng hoa</text>

    <rect x="30" y="156" width="395" height="36" rx="6" fill="#0f766e"/>
    <text x="227" y="178" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">TÍNH OXI HÓA GIẢM DẦN:  F₂ &gt; Cl₂ &gt; Br₂ &gt; I₂  (t°s tăng dần do van der Waals tăng)</text>

    <!-- Right: Membrane Electrolysis -->
    <rect x="452" y="20" width="350" height="185" rx="12" fill="#ffffff" stroke="#5eead4"/>
    <text x="627" y="42" text-anchor="middle" font-size="12" font-weight="800" fill="#0f766e">2. ĐIỆN PHÂN DD NaCl BÃO HÒA CÓ MÀNG NGĂN</text>
    <rect x="480" y="58" width="294" height="96" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
    <line x1="627" y1="58" x2="627" y2="154" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5 3"/>
    <text x="627" y="108" text-anchor="middle" font-size="9.5" font-weight="800" fill="#dc2626">Màng ngăn</text>
    <text x="550" y="80" text-anchor="middle" font-size="11" font-weight="800" fill="#b45309">Anode (+)</text>
    <text x="550" y="102" text-anchor="middle" font-size="12" font-weight="900" fill="#15803d">Khí Cl₂↑</text>
    <text x="550" y="122" text-anchor="middle" font-size="9.5" fill="#475569">2Cl⁻ → Cl₂ + 2e</text>
    <text x="704" y="80" text-anchor="middle" font-size="11" font-weight="800" fill="#1d4ed8">Cathode (−)</text>
    <text x="704" y="102" text-anchor="middle" font-size="12" font-weight="900" fill="#2563eb">H₂↑ + dd NaOH</text>
    <text x="704" y="122" text-anchor="middle" font-size="9.5" fill="#475569">2H₂O + 2e → H₂ + 2OH⁻</text>
    <text x="627" y="175" text-anchor="middle" font-size="10.5" font-weight="700" fill="#be123c">Nếu KHÔNG màng ngăn: Cl₂ + 2NaOH → NaCl + NaClO + H₂O (Nước Javel)</text>
  </svg>`,

  // Bài 22: Hydrogen halide & Nhận biết ion Halide bằng AgNO3
  22: `<svg viewBox="0 0 820 225" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="215" rx="16" fill="#f0fdfa" stroke="#14b8a6" stroke-width="1.5"/>
    <!-- Left: Boiling points & Acid strength of HX -->
    <rect x="18" y="20" width="385" height="185" rx="12" fill="#ffffff" stroke="#5eead4"/>
    <text x="210" y="42" text-anchor="middle" font-size="12" font-weight="800" fill="#0f766e">1. NHIỆT ĐỘ SÔI &amp; TÍNH ACID CỦA DÃY HX</text>
    <!-- Boiling point bars -->
    <text x="34" y="68" font-size="11" font-weight="800" fill="#dc2626">• Nhiệt độ sôi: HCl (−85°C) &lt; HBr (−67°C) &lt; HI (−35°C) &lt; HF (+19,5°C)</text>
    <text x="34" y="86" font-size="10" fill="#475569">  (HF sôi cao bất thường do có liên kết Hydrogen liên phân tử ···H–F···H–F···)</text>
    <text x="34" y="112" font-size="11" font-weight="800" fill="#1d4ed8">• Độ mạnh tính Acid tăng dần:  HF (yếu) &lt; HCl &lt; HBr &lt; HI (mạnh nhất)</text>
    <text x="34" y="130" font-size="10" fill="#475569">  (Do bán kính X tăng → độ dài liên kết H–X tăng → độ bền liên kết giảm)</text>
    <text x="34" y="156" font-size="11" font-weight="800" fill="#15803d">• Tính khử ion Halide tăng dần:  F⁻ &lt; Cl⁻ &lt; Br⁻ &lt; I⁻</text>
    <text x="34" y="176" font-size="10.5" font-weight="700" fill="#b45309">• Riêng HF ăn mòn thủy tinh: SiO₂ + 4HF → SiF₄↑ + 2H₂O</text>

    <!-- Right: AgNO3 Test Tubes -->
    <rect x="418" y="20" width="384" height="185" rx="12" fill="#ffffff" stroke="#5eead4"/>
    <text x="610" y="42" text-anchor="middle" font-size="12" font-weight="800" fill="#0f766e">2. NHẬN BIẾT ION HALIDE (X⁻) BẰNG DUNG DỊCH AgNO₃</text>
    <!-- Tube 1: F- -->
    <rect x="440" y="62" width="68" height="95" rx="10" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
    <text x="474" y="95" text-anchor="middle" font-size="12" font-weight="800" fill="#0369a1">NaF</text>
    <text x="474" y="115" text-anchor="middle" font-size="9.5" fill="#475569">Trong suốt</text>
    <text x="474" y="174" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0369a1">Không tủa</text>
    <text x="474" y="188" text-anchor="middle" font-size="9.5" fill="#64748b">(AgF tan)</text>

    <!-- Tube 2: Cl- -->
    <rect x="530" y="62" width="68" height="95" rx="10" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
    <rect x="532" y="122" width="64" height="33" rx="8" fill="#e2e8f0"/>
    <text x="564" y="95" text-anchor="middle" font-size="12" font-weight="800" fill="#334155">NaCl</text>
    <text x="564" y="142" text-anchor="middle" font-size="10" font-weight="800" fill="#0f172a">AgCl↓</text>
    <text x="564" y="174" text-anchor="middle" font-size="10.5" font-weight="800" fill="#334155">Tủa TRẮNG</text>

    <!-- Tube 3: Br- -->
    <rect x="620" y="62" width="68" height="95" rx="10" fill="#f8fafc" stroke="#eab308" stroke-width="1.5"/>
    <rect x="622" y="122" width="64" height="33" rx="8" fill="#fef08a"/>
    <text x="654" y="95" text-anchor="middle" font-size="12" font-weight="800" fill="#854d0e">NaBr</text>
    <text x="654" y="142" text-anchor="middle" font-size="10" font-weight="800" fill="#713f12">AgBr↓</text>
    <text x="654" y="174" text-anchor="middle" font-size="10.5" font-weight="800" fill="#a16207">VÀNG NHẠT</text>

    <!-- Tube 4: I- -->
    <rect x="710" y="62" width="68" height="95" rx="10" fill="#f8fafc" stroke="#ca8a04" stroke-width="1.5"/>
    <rect x="712" y="122" width="64" height="33" rx="8" fill="#facc15"/>
    <text x="744" y="95" text-anchor="middle" font-size="12" font-weight="800" fill="#713f12">NaI</text>
    <text x="744" y="142" text-anchor="middle" font-size="10" font-weight="800" fill="#713f12">AgI↓</text>
    <text x="744" y="174" text-anchor="middle" font-size="10.5" font-weight="800" fill="#b45309">VÀNG ĐẬM</text>
  </svg>`,

  // Bài 23: Ôn tập Chương 7
  23: `<svg viewBox="0 0 820 205" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="810" height="195" rx="16" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <text x="410" y="28" text-anchor="middle" font-size="13.5" font-weight="900" fill="#0f766e">SƠ ĐỒ TỔNG KẾT CHƯƠNG 7: QUY LUẬT ĐỐI LẬP X₂ vs HX &amp; CHUỖI PHẢN ỨNG</text>
    <rect x="20" y="46" width="380" height="140" rx="12" fill="#ffffff" stroke="#5eead4"/>
    <text x="210" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="#0f766e">1. QUY LUẬT BIẾN ĐỔI TỪ F ĐẾN I</text>
    <text x="36" y="94" font-size="11" font-weight="700" fill="#be123c">• Tính oxi hóa đơn chất X₂ GIẢM:  F₂ &gt; Cl₂ &gt; Br₂ &gt; I₂</text>
    <text x="36" y="118" font-size="11" font-weight="700" fill="#1d4ed8">• Tính acid dung dịch HX TĂNG:   HF &lt; HCl &lt; HBr &lt; HI</text>
    <text x="36" y="142" font-size="11" font-weight="700" fill="#15803d">• Tính khử ion Halide X⁻ TĂNG:    F⁻ &lt; Cl⁻ &lt; Br⁻ &lt; I⁻</text>
    <text x="36" y="166" font-size="11" font-weight="700" fill="#b45309">• Nhiệt độ sôi HX:                HCl &lt; HBr &lt; HI &lt; HF (LK H)</text>

    <rect x="420" y="46" width="380" height="140" rx="12" fill="#ffffff" stroke="#5eead4"/>
    <text x="610" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="#0f766e">2. PHƯƠNG TRÌNH TRỌNG TÂM CỦA CHLORINE</text>
    <text x="436" y="94" font-size="10.5" fill="#334155">• PTN: MnO₂ + 4HCl(đặc) → (t°) MnCl₂ + Cl₂↑ + 2H₂O</text>
    <text x="436" y="116" font-size="10.5" fill="#334155">• CN: 2NaCl + 2H₂O → (đpdd, màng ngăn) 2NaOH + H₂↑ + Cl₂↑</text>
    <text x="436" y="138" font-size="10.5" fill="#334155">• Nước Javel (lạnh): Cl₂ + 2NaOH → NaCl + NaClO + H₂O</text>
    <text x="436" y="160" font-size="10.5" fill="#334155">• Kiềm đặc nóng (100°C): 3Cl₂ + 6KOH → 5KCl + KClO₃ + 3H₂O</text>
  </svg>`
};

module.exports = diagrams;
