// khtn9_svg_p2.js - 18 bản vẽ vector SVG riêng biệt độc quyền cho Bài 18 đến Bài 35 (Hóa học)
module.exports = {
  // Bài 18: Tính chất chung của kim loại
  18: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1.2"/>
        <text x="75" y="28" text-anchor="middle" font-size="16">🔨</text>
        <text x="75" y="55" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b45309">TÍNH DẺO &amp; DÁT</text>
        <text x="75" y="75" text-anchor="middle" font-size="8.5" fill="#64748b">Vàng (Au) dẻo nhất</text>
      </g>
      <g transform="translate(195, 20)">
        <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#0ea5e9" stroke-width="1.2"/>
        <text x="75" y="28" text-anchor="middle" font-size="16">⚡</text>
        <text x="75" y="55" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0369a1">DẪN ĐIỆN &amp; NHIỆT</text>
        <text x="75" y="75" text-anchor="middle" font-size="8.5" fill="#64748b">Ag > Cu > Au > Al > Fe</text>
      </g>
      <g transform="translate(365, 20)">
        <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#eab308" stroke-width="1.2"/>
        <text x="75" y="28" text-anchor="middle" font-size="16">✨</text>
        <text x="75" y="55" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#a16207">ÁNH KIM ĐẶC TRƯNG</text>
        <text x="75" y="75" text-anchor="middle" font-size="8.5" fill="#64748b">Phản xạ ánh sáng</text>
      </g>
      <g transform="translate(535, 20)">
        <rect x="0" y="0" width="160" height="95" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.2"/>
        <text x="80" y="28" text-anchor="middle" font-size="16">🧪</text>
        <text x="80" y="55" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">TÍNH CHẤT HÓA HỌC</text>
        <text x="80" y="72" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#059669">Tính khử: M -> M^n+ + ne</text>
        <text x="80" y="85" text-anchor="middle" font-size="8" fill="#64748b">Tác dụng phi kim, acid, muối</text>
      </g>
    </svg>
  `,

  // Bài 19: Dãy hoạt động hóa học
  19: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.2"/>
      <text x="360" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">DÃY HOẠT ĐỘNG HÓA HỌC CỦA KIM LOẠI</text>
      <g transform="translate(20, 32)">
        <rect x="0" y="0" width="130" height="42" rx="5" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
        <text x="65" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#b91c1c">K, Na, Ca</text>
        <text x="65" y="34" text-anchor="middle" font-size="8" fill="#7f1d1d">+ H2O ở t° phòng</text>

        <rect x="140" y="0" width="220" height="42" rx="5" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
        <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">Mg, Al, Zn, Fe, Pb</text>
        <text x="250" y="34" text-anchor="middle" font-size="8" fill="#78350f">Đẩy H2 khỏi dung dịch acid loãng</text>

        <rect x="370" y="0" width="45" height="42" rx="5" fill="#f1f5f9" stroke="#64748b" stroke-width="1"/>
        <text x="392" y="26" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">(H)</text>

        <rect x="425" y="0" width="165" height="42" rx="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="1"/>
        <text x="507" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#0369a1">Cu, Ag, Au</text>
        <text x="507" y="34" text-anchor="middle" font-size="8" fill="#0c4a6e">Không tác dụng acid loãng</text>
      </g>
      <line x1="30" y1="88" x2="600" y2="88" stroke="#16a34a" stroke-width="2.5"/>
      <polygon points="600,88 592,84 592,92" fill="#16a34a"/>
      <text x="315" y="103" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#15803d">Hoạt động hóa học giảm dần ———></text>
      <text x="360" y="122" text-anchor="middle" font-size="9" font-style="italic" fill="#475569">Ghi nhớ: Khi Nào Cần May Áo Giáp Sắt Phải Hỏi Cụ Bạc Vàng</text>
    </svg>
  `,

  // Bài 20: Tách kim loại & Luyện gang thép
  20: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="1.2"/>
      <!-- Sơ đồ lò cao luyện gang -->
      <g transform="translate(30, 15)">
        <polygon points="40,95 20,25 70,25 50,95" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
        <text x="45" y="18" text-anchor="middle" font-size="8.5" font-weight="bold">LÒ CAO</text>
        <text x="45" y="55" text-anchor="middle" font-size="7.5" fill="#dc2626">CO nóng</text>
        <text x="45" y="75" text-anchor="middle" font-size="7.5" fill="#b91c1c">Gang lỏng</text>
      </g>
      <g transform="translate(130, 25)">
        <rect x="0" y="0" width="280" height="85" rx="6" fill="#ffffff" stroke="#d97706" stroke-width="1"/>
        <text x="140" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b45309">NHIỆT LUYỆN KHỬ OXIDE SẮT</text>
        <text x="140" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Fe2O3 + 3CO -> 2Fe + 3CO2 (t°)</text>
        <text x="15" y="65" font-size="8.5" fill="#334155">• Quặng hematite + than coke + đá vôi</text>
        <text x="15" y="78" font-size="8.5" fill="#334155">• Gang (2-5% C) -> Luyện thép (&lt; 2% C)</text>
      </g>
      <g transform="translate(430, 25)">
        <rect x="0" y="0" width="260" height="85" rx="6" fill="#ffffff" stroke="#0284c7" stroke-width="1"/>
        <text x="130" y="20" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0369a1">ĐIỆN PHÂN NÓNG CHẢY</text>
        <text x="130" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">2Al2O3 -đpnc-> 4Al + 3O2</text>
        <text x="15" y="65" font-size="8.5" fill="#334155">• Dùng cho kim loại mạnh: K, Na, Mg, Al</text>
        <text x="15" y="78" font-size="8.5" fill="#334155">• Cryolite Na3AlF6 hạ nhiệt độ nóng chảy</text>
      </g>
    </svg>
  `,

  // Bài 21: So sánh phi kim & kim loại
  21: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <g transform="translate(25, 15)">
        <rect x="0" y="0" width="320" height="105" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1"/>
        <text x="160" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">KIM LOẠI (METALS)</text>
        <text x="15" y="44" font-size="9" fill="#334155">• Có ánh kim, dẻo, dẫn điện/nhiệt tốt</text>
        <text x="15" y="62" font-size="9" fill="#334155">• Dễ nhường e tạo cation dương (M^n+)</text>
        <text x="15" y="80" font-size="9" fill="#334155">• Thường tạo Basic Oxide (Na2O, CaO, FeO)</text>
        <text x="15" y="98" font-size="9" font-weight="bold" fill="#2563eb">• Hầu hết là chất rắn (trừ Hg lỏng)</text>
      </g>
      <g transform="translate(375, 15)">
        <rect x="0" y="0" width="320" height="105" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1"/>
        <text x="160" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">PHI KIM (NON-METALS)</text>
        <text x="15" y="44" font-size="9" fill="#334155">• Không ánh kim, giòn ở thể rắn, cách điện</text>
        <text x="15" y="62" font-size="9" fill="#334155">• Dễ nhận hoặc dùng chung e (Anion / CHT)</text>
        <text x="15" y="80" font-size="9" fill="#334155">• Thường tạo Acidic Oxide (CO2, SO2, P2O5)</text>
        <text x="15" y="98" font-size="9" font-weight="bold" fill="#059669">• Tồn tại cả 3 thể: rắn (C,S), lỏng (Br2), khí (O2)</text>
      </g>
    </svg>
  `,

  // Bài 22: Giới thiệu Hợp chất hữu cơ
  22: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="200" height="95" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1"/>
        <text x="100" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">ĐẶC ĐIỂM NGUYÊN TỬ C</text>
        <text x="12" y="48" font-size="9" fill="#334155">• Hóa trị IV bất biến</text>
        <text x="12" y="66" font-size="9" fill="#334155">• Liên kết tạo mạch thẳng,</text>
        <text x="12" y="82" font-size="9" fill="#334155">  mạch nhánh hoặc mạch vòng</text>
      </g>
      <g transform="translate(250, 20)">
        <rect x="0" y="0" width="210" height="95" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1"/>
        <text x="105" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">HYDROCARBON</text>
        <text x="12" y="48" font-size="9" fill="#334155">• Chỉ chứa nguyên tố C và H</text>
        <text x="12" y="66" font-size="9" fill="#334155">• Alkane no: CH4, C2H6...</text>
        <text x="12" y="82" font-size="9" fill="#334155">• Alkene không no: C2H4...</text>
      </g>
      <g transform="translate(480, 20)">
        <rect x="0" y="0" width="210" height="95" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1"/>
        <text x="105" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b45309">DẪN XUẤT HYDROCARBON</text>
        <text x="12" y="48" font-size="9" fill="#334155">• Chứa C, H và O, N, halogen...</text>
        <text x="12" y="66" font-size="9" fill="#334155">• Rượu: C2H5OH (nhóm -OH)</text>
        <text x="12" y="82" font-size="9" fill="#334155">• Acid: CH3COOH (nhóm -COOH)</text>
      </g>
    </svg>
  `,

  // Bài 23: Alkane
  23: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <!-- Phân tử Methane CH4 -->
      <g transform="translate(50, 15)">
        <circle cx="65" cy="55" r="15" fill="#334155"/>
        <text x="65" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">C</text>
        <line x1="65" y1="40" x2="65" y2="24" stroke="#334155" stroke-width="2"/>
        <text x="65" y="20" text-anchor="middle" font-size="10" font-weight="bold">H</text>
        <line x1="65" y1="70" x2="65" y2="86" stroke="#334155" stroke-width="2"/>
        <text x="65" y="98" text-anchor="middle" font-size="10" font-weight="bold">H</text>
        <line x1="50" y1="55" x2="34" y2="55" stroke="#334155" stroke-width="2"/>
        <text x="26" y="59" text-anchor="middle" font-size="10" font-weight="bold">H</text>
        <line x1="80" y1="55" x2="96" y2="55" stroke="#334155" stroke-width="2"/>
        <text x="104" y="59" text-anchor="middle" font-size="10" font-weight="bold">H</text>
        <text x="65" y="115" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">Methane (CH4)</text>
      </g>
      <!-- Khung đặc điểm & phản ứng -->
      <g transform="translate(200, 20)">
        <rect x="0" y="0" width="490" height="95" rx="8" fill="#ffffff" stroke="#0ea5e9" stroke-width="1"/>
        <text x="245" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">CÔNG THỨC CHUNG ALKANE: CnH2n+2 (n ≥ 1)</text>
        <text x="20" y="50" font-size="10" font-weight="bold" fill="#dc2626">• Phản ứng cháy tỏa nhiệt:</text>
        <text x="195" y="50" font-size="10" font-family="monospace">CH4 + 2O2 -> CO2 + 2H2O (Delta H &lt; 0)</text>
        <text x="20" y="72" font-size="10" font-weight="bold" fill="#2563eb">• Phản ứng thế Halogen:</text>
        <text x="195" y="72" font-size="10" font-family="monospace">CH4 + Cl2 -as-> CH3Cl + HCl</text>
        <text x="20" y="90" font-size="8.5" fill="#64748b">Thành phần chính khí thiên nhiên &amp; Biogas; khí đốt LPG (Propane + Butane)</text>
      </g>
    </svg>
  `,

  // Bài 24: Alkene
  24: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.2"/>
      <!-- Liên kết đôi C=C của Ethene -->
      <g transform="translate(40, 30)">
        <circle cx="50" cy="40" r="14" fill="#334155"/>
        <text x="50" y="45" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">C</text>
        <circle cx="95" cy="40" r="14" fill="#334155"/>
        <text x="95" y="45" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">C</text>
        <line x1="64" y1="36" x2="81" y2="36" stroke="#16a34a" stroke-width="2.5"/>
        <line x1="64" y1="44" x2="81" y2="44" stroke="#16a34a" stroke-width="2.5"/>
        <text x="25" y="24" font-size="10" font-weight="bold">H</text>
        <text x="25" y="66" font-size="10" font-weight="bold">H</text>
        <text x="120" y="24" font-size="10" font-weight="bold">H</text>
        <text x="120" y="66" font-size="10" font-weight="bold">H</text>
        <text x="72" y="85" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">Ethene (C2H4)</text>
      </g>
      <!-- Khung phản ứng cộng & trùng hợp -->
      <g transform="translate(200, 20)">
        <rect x="0" y="0" width="490" height="95" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1"/>
        <text x="245" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">CÔNG THỨC CHUNG ALKENE: CnH2n (n ≥ 2)</text>
        <text x="15" y="50" font-size="9.5" font-weight="bold" fill="#b45309">• Phản ứng cộng Bromine:</text>
        <text x="180" y="50" font-size="9.5" font-family="monospace">CH2=CH2 + Br2 -> CH2Br-CH2Br (Mất màu Br2)</text>
        <text x="15" y="72" font-size="9.5" font-weight="bold" fill="#0284c7">• Phản ứng trùng hợp PE:</text>
        <text x="180" y="72" font-size="9.5" font-family="monospace">n CH2=CH2 -t°, p, xt-> (-CH2-CH2-)n</text>
        <text x="15" y="90" font-size="8.5" fill="#64748b">Hormone thực vật kích thích hoa quả chín nhanh tự nhiên</text>
      </g>
    </svg>
  `,

  // Bài 25: Nguồn nhiên liệu
  25: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="1.2"/>
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#475569" stroke-width="1.2"/>
        <text x="75" y="28" text-anchor="middle" font-size="16">🪨</text>
        <text x="75" y="55" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#334155">NHIÊN LIỆU RẮN</text>
        <text x="75" y="75" text-anchor="middle" font-size="8.5" fill="#64748b">Than đá, than bùn, củi</text>
      </g>
      <g transform="translate(195, 20)">
        <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#ea580c" stroke-width="1.2"/>
        <text x="75" y="28" text-anchor="middle" font-size="16">⛽</text>
        <text x="75" y="55" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#c2410c">NHIÊN LIỆU LỎNG</text>
        <text x="75" y="75" text-anchor="middle" font-size="8.5" fill="#64748b">Xăng, dầu diesel, cồn</text>
      </g>
      <g transform="translate(365, 20)">
        <rect x="0" y="0" width="150" height="95" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.2"/>
        <text x="75" y="28" text-anchor="middle" font-size="16">🔥</text>
        <text x="75" y="55" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0369a1">NHIÊN LIỆU KHÍ</text>
        <text x="75" y="75" text-anchor="middle" font-size="8.5" fill="#64748b">Khí thiên nhiên, LPG</text>
      </g>
      <g transform="translate(535, 20)">
        <rect x="0" y="0" width="160" height="95" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="1.2"/>
        <text x="80" y="28" text-anchor="middle" font-size="16">⚠️</text>
        <text x="80" y="55" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">CẢNH BÁO KHÍ CO</text>
        <text x="80" y="72" text-anchor="middle" font-size="8" fill="#7f1d1d">Không đốt than phòng kín</text>
        <text x="80" y="85" text-anchor="middle" font-size="8" fill="#7f1d1d">Gây ngạt hôn mê tử vong</text>
      </g>
    </svg>
  `,

  // Bài 26: Ethylic Alcohol
  26: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="220" height="95" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1"/>
        <text x="110" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">CẤU TẠO ETHANOL (C2H5OH)</text>
        <text x="110" y="52" text-anchor="middle" font-size="13" font-family="monospace" font-weight="bold">CH3-CH2-OH</text>
        <rect x="135" y="38" width="45" height="20" rx="3" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
        <text x="157" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">-OH</text>
        <text x="110" y="78" text-anchor="middle" font-size="9" fill="#475569">Nhóm hydroxyl linh động</text>
      </g>
      <g transform="translate(270, 20)">
        <rect x="0" y="0" width="420" height="95" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="210" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">TÍNH CHẤT &amp; CÔNG THỨC ĐỘ RƯỢU</text>
        <text x="20" y="50" font-size="10" font-weight="bold" fill="#2563eb">• Tác dụng với Sodium (Na):</text>
        <text x="180" y="50" font-size="10" font-family="monospace">2C2H5OH + 2Na -> 2C2H5ONa + H2↑</text>
        <text x="20" y="74" font-size="10.5" font-weight="bold" fill="#059669">• Độ rượu = (V_alcohol / V_dd) × 100</text>
        <text x="20" y="90" font-size="8.5" fill="#64748b">Lên men tinh bột: C6H12O6 -men rượu-> 2C2H5OH + 2CO2↑</text>
      </g>
    </svg>
  `,

  // Bài 27: Acetic Acid
  27: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#fef2f2" stroke="#fecaca" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="220" height="95" rx="8" fill="#ffffff" stroke="#ef4444" stroke-width="1"/>
        <text x="110" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">CẤU TẠO ACETIC ACID</text>
        <text x="110" y="52" text-anchor="middle" font-size="13" font-family="monospace" font-weight="bold">CH3-COOH</text>
        <rect x="125" y="38" width="55" height="20" rx="3" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
        <text x="152" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">-COOH</text>
        <text x="110" y="78" text-anchor="middle" font-size="9" fill="#475569">Nhóm carboxyl quy định tính acid</text>
      </g>
      <g transform="translate(270, 20)">
        <rect x="0" y="0" width="420" height="95" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="210" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">TÍNH CHẤT ACID &amp; ESTE HÓA</text>
        <text x="15" y="48" font-size="9.5" fill="#334155">• Quỳ tím hóa đỏ; tác dụng Mg, NaOH, CaCO3</text>
        <text x="15" y="68" font-size="10" font-weight="bold" fill="#dc2626">• Este hóa: CH3COOH + C2H5OH &lt;=> CH3COOC2H5 + H2O</text>
        <text x="15" y="88" font-size="9" fill="#059669">• Lên men giấm: C2H5OH + O2 -men giấm-> CH3COOH + H2O</text>
      </g>
    </svg>
  `,

  // Bài 28: Lipid
  28: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="230" height="95" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1"/>
        <text x="115" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">CHẤT BÉO (TRIGLYCERIDE)</text>
        <text x="115" y="52" text-anchor="middle" font-size="12" font-family="monospace" font-weight="bold">(R-COO)3C3H5</text>
        <text x="115" y="75" text-anchor="middle" font-size="8.5" fill="#475569">Glycerol + 3 gốc Acid béo</text>
        <text x="115" y="90" text-anchor="middle" font-size="8" fill="#64748b">Dầu lỏng (axit béo chưa no) | Mỡ rắn (no)</text>
      </g>
      <g transform="translate(280, 20)">
        <rect x="0" y="0" width="410" height="95" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="205" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">PHẢN ỨNG XÀ PHÒNG HÓA</text>
        <text x="205" y="50" text-anchor="middle" font-size="10.5" font-family="monospace" font-weight="bold" fill="#059669">(RCOO)3C3H5 + 3NaOH -> 3RCOONa + C3H5(OH)3</text>
        <text x="20" y="74" font-size="9" fill="#334155">• <strong>RCOONa:</strong> Muối sodium của acid béo (Xà phòng bánh)</text>
        <text x="20" y="90" font-size="9" fill="#334155">• <strong>C3H5(OH)3:</strong> Glycerol (rượu 3 chức dưỡng ẩm)</text>
      </g>
    </svg>
  `,

  // Bài 29: Carbohydrate. Glucose & Saccharose
  29: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="310" height="95" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1"/>
        <text x="155" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">GLUCOSE (C6H12O6) - ĐƯỜNG NHO</text>
        <text x="15" y="48" font-size="9" fill="#334155">• Monosaccharide (đường đơn) có trong quả chín, máu</text>
        <text x="15" y="68" font-size="10" font-weight="bold" fill="#0284c7">• Phản ứng tráng bạc: C6H12O6 + Ag2O -> 2Ag↓</text>
        <text x="15" y="88" font-size="8.5" fill="#64748b">Lớp bạc kim loại sáng bóng bám thành ống nghiệm</text>
      </g>
      <g transform="translate(365, 20)">
        <rect x="0" y="0" width="325" height="95" rx="8" fill="#ffffff" stroke="#0ea5e9" stroke-width="1"/>
        <text x="162" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">SACCHAROSE (C12H22O11) - ĐƯỜNG MÍA</text>
        <text x="15" y="48" font-size="9" fill="#334155">• Disaccharide (đường đôi) trong mía, củ cải đường</text>
        <text x="15" y="68" font-size="10" font-weight="bold" fill="#b45309">• Thủy phân: C12H22O11 + H2O -> C6H12O6 + C6H12O6</text>
        <text x="15" y="88" font-size="8.5" fill="#64748b">Tạo 1 phân tử Glucose + 1 phân tử Fructose</text>
      </g>
    </svg>
  `,

  // Bài 30: Tinh bột & Cellulose
  30: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="310" height="95" rx="8" fill="#ffffff" stroke="#9333ea" stroke-width="1"/>
        <text x="155" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#6b21a8">TINH BỘT (C6H10O5)n</text>
        <text x="15" y="48" font-size="9" fill="#334155">• Polysaccharide dự trữ ở hạt gạo, ngô, củ khoai</text>
        <text x="15" y="68" font-size="10" font-weight="bold" fill="#4f46e5">• Thuốc thử Iodine (I2) -> Màu xanh tím</text>
        <text x="15" y="88" font-size="8.5" fill="#64748b">Thủy phân nhờ enzyme/acid tạo Glucose</text>
      </g>
      <g transform="translate(365, 20)">
        <rect x="0" y="0" width="325" height="95" rx="8" fill="#ffffff" stroke="#059669" stroke-width="1"/>
        <text x="162" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">CELLULOSE (C6H10O5)m</text>
        <text x="15" y="48" font-size="9" fill="#334155">• Cấu tạo thành tế bào thực vật, sợi bông (98%), gỗ</text>
        <text x="15" y="68" font-size="9" fill="#334155">• Không tan trong nước, tạo sợi bền chắc</text>
        <text x="15" y="88" font-size="8.5" fill="#64748b">Nguyên liệu sản xuất giấy, tơ visco, màng phim</text>
      </g>
    </svg>
  `,

  // Bài 31: Protein
  31: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="260" height="95" rx="8" fill="#ffffff" stroke="#e11d48" stroke-width="1"/>
        <text x="130" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#be123c">CẤU TẠO ĐẠI PHÂN TỬ PROTEIN</text>
        <text x="12" y="48" font-size="9" fill="#334155">• Đơn phân là các amino acid</text>
        <text x="12" y="66" font-size="9" font-weight="bold" fill="#e11d48">• Liên kết peptide (-CO-NH-)</text>
        <text x="12" y="84" font-size="8.5" fill="#64748b">Chứa C, H, O, N và lưu huỳnh S</text>
      </g>
      <g transform="translate(310, 20)">
        <rect x="0" y="0" width="380" height="95" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="190" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">TÍNH CHẤT BIẾN TÍNH &amp; NHẬN BIẾT</text>
        <text x="15" y="48" font-size="9.5" fill="#334155">• Đun nóng hoặc acid/kiềm: <strong>Đông tụ protein</strong> (trứng chín)</text>
        <text x="15" y="68" font-size="9.5" fill="#334155">• Đốt cháy tỏa mùi khét đặc trưng (tóc, lông vũ cháy)</text>
        <text x="15" y="88" font-size="8.5" fill="#64748b">Nền tảng sự sống: Cấu tạo mô, enzyme xúc tác, kháng thể miễn dịch</text>
      </g>
    </svg>
  `,

  // Bài 32: Polymer
  32: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="200" height="95" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1"/>
        <text x="100" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">POLYMER THIÊN NHIÊN</text>
        <text x="12" y="48" font-size="9" fill="#334155">• Tinh bột, cellulose</text>
        <text x="12" y="66" font-size="9" fill="#334155">• Tơ tằm, len lông cừu</text>
        <text x="12" y="84" font-size="9" fill="#334155">• Cao su thiên nhiên</text>
      </g>
      <g transform="translate(245, 20)">
        <rect x="0" y="0" width="220" height="95" rx="8" fill="#ffffff" stroke="#059669" stroke-width="1"/>
        <text x="110" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">POLYMER TỔNG HỢP</text>
        <text x="12" y="48" font-size="9" fill="#334155">• Nhựa PE, PVC, PP</text>
        <text x="12" y="66" font-size="9" fill="#334155">• Tơ nylon-6,6</text>
        <text x="12" y="84" font-size="9" fill="#334155">• Cao su buna đàn hồi</text>
      </g>
      <g transform="translate(485, 20)">
        <rect x="0" y="0" width="210" height="95" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1.2"/>
        <text x="105" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#15803d">NGUYÊN TẮC 3R BẢO VỆ MT</text>
        <text x="12" y="48" font-size="9" fill="#166534">♻️ Reduce (Giảm phát sinh)</text>
        <text x="12" y="66" font-size="9" fill="#166534">♻️ Reuse (Tái sử dụng)</text>
        <text x="12" y="84" font-size="9" fill="#166534">♻️ Recycle (Tái chế rác nhựa)</text>
      </g>
    </svg>
  `,

  // Bài 33: Hóa học vỏ Trái Đất & Tài nguyên
  33: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="310" height="95" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1"/>
        <text x="155" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">THÀNH PHẦN NGUYÊN TỐ VỎ TRÁI ĐẤT</text>
        <text x="20" y="48" font-size="9.5" fill="#334155">• <strong>Oxygen (O):</strong> 46.6% (nhiều nhất)</text>
        <text x="20" y="66" font-size="9.5" fill="#334155">• <strong>Silicon (Si):</strong> 27.7% (đứng thứ hai)</text>
        <text x="20" y="84" font-size="9.5" fill="#334155">• <strong>Aluminium (Al):</strong> 8.1% | <strong>Sắt (Fe):</strong> 5.0%</text>
      </g>
      <g transform="translate(365, 20)">
        <rect x="0" y="0" width="325" height="95" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1"/>
        <text x="162" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">KHAI THÁC KHOÁNG SẢN BỀN VỮNG</text>
        <text x="15" y="48" font-size="9" fill="#334155">• Quặng là đất đá chứa hàm lượng có ích kinh tế</text>
        <text x="15" y="66" font-size="9" fill="#334155">• Giảm thiểu bụi mịn, xỉ thải và kim loại nặng</text>
        <text x="15" y="84" font-size="9" fill="#334155">• Hoàn thổ, phục hồi thảm thực vật sau khai thác</text>
      </g>
    </svg>
  `,

  // Bài 34: Khai thác đá vôi & Công nghiệp Silicate
  34: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#fafaf9" stroke="#e7e5e4" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="310" height="95" rx="8" fill="#ffffff" stroke="#78716c" stroke-width="1"/>
        <text x="155" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#44403c">CHU TRÌNH CHUYỂN HÓA ĐÁ VÔI</text>
        <text x="15" y="48" font-size="9.5" font-family="monospace">CaCO3 -900°C-> CaO (vôi sống) + CO2↑</text>
        <text x="15" y="68" font-size="9.5" font-family="monospace">CaO + H2O -> Ca(OH)2 (vôi tôi tỏa nhiệt)</text>
        <text x="15" y="88" font-size="9.5" font-family="monospace">Ca(OH)2 + CO2 -> CaCO3↓ + H2O (vẩn đục)</text>
      </g>
      <g transform="translate(365, 20)">
        <rect x="0" y="0" width="325" height="95" rx="8" fill="#ffffff" stroke="#0ea5e9" stroke-width="1"/>
        <text x="162" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">CÔNG NGHIỆP SILICATE</text>
        <text x="15" y="48" font-size="9" fill="#334155">• <strong>Xi măng:</strong> Đá vôi + đất sét nung clinker 1450°C</text>
        <text x="15" y="68" font-size="9" fill="#334155">• <strong>Thủy tinh:</strong> Cát thạch anh SiO2 + đá vôi + soda</text>
        <text x="15" y="88" font-size="9" fill="#334155">• <strong>Đồ gốm sứ:</strong> Đất sét trắng nung men chịu nhiệt</text>
      </g>
    </svg>
  `,

  // Bài 35: Chu trình Carbon & Ấm lên toàn cầu
  35: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#fef2f2" stroke="#fecaca" stroke-width="1.2"/>
      <g transform="translate(30, 15)">
        <rect x="0" y="0" width="660" height="105" rx="8" fill="#ffffff" stroke="#ef4444" stroke-width="1"/>
        <text x="330" y="22" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#b91c1c">CHU TRÌNH NGUYÊN TỐ CARBON &amp; HIỆU ỨNG NHÀ KÍNH</text>
        <rect x="230" y="32" width="200" height="25" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
        <text x="330" y="48" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#991b1b">CO2 TRONG KHÍ QUYỂN</text>
        <!-- Mũi tên quang hợp vs đốt cháy -->
        <text x="80" y="75" font-size="9" font-weight="bold" fill="#15803d"><- Quang hợp cây xanh</text>
        <text x="80" y="90" font-size="8" fill="#166534">(Hấp thụ CO2 tổng hợp hữu cơ)</text>
        <text x="500" y="75" font-size="9" font-weight="bold" fill="#dc2626">Đốt than, dầu khí -></text>
        <text x="500" y="90" font-size="8" fill="#991b1b">(Giải phóng ồ ạt CO2 gây ấm lên)</text>
      </g>
    </svg>
  `
};
