// khtn9_svg_p3.js - 16 bản vẽ vector SVG riêng biệt độc quyền cho Bài 36 đến Bài 51 (Sinh học)
module.exports = {
  // Bài 36: Khái quát di truyền học
  36: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="190" height="95" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1"/>
        <text x="95" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">KIỂU GENE (GENOTYPE)</text>
        <text x="15" y="48" font-size="9" fill="#334155">• Đồng hợp trội: <strong>AA</strong></text>
        <text x="15" y="66" font-size="9" fill="#334155">• Dị hợp tử: <strong>Aa</strong></text>
        <text x="15" y="84" font-size="9" fill="#334155">• Đồng hợp lặn: <strong>aa</strong></text>
      </g>
      <text x="245" y="70" font-size="18" font-weight="bold" fill="#16a34a">+</text>
      <g transform="translate(270, 20)">
        <rect x="0" y="0" width="180" height="95" rx="8" fill="#ffffff" stroke="#0ea5e9" stroke-width="1"/>
        <text x="90" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">MÔI TRƯỜNG SỐNG</text>
        <text x="15" y="48" font-size="9" fill="#334155">• Dinh dưỡng, khí hậu</text>
        <text x="15" y="66" font-size="9" fill="#334155">• Ánh sáng, nhiệt độ</text>
        <text x="15" y="84" font-size="9" fill="#334155">• Chăm sóc rèn luyện</text>
      </g>
      <text x="475" y="70" font-size="18" font-weight="bold" fill="#0284c7">=</text>
      <g transform="translate(500, 20)">
        <rect x="0" y="0" width="190" height="95" rx="8" fill="#ffffff" stroke="#8b5cf6" stroke-width="1.2"/>
        <text x="95" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#6d28d9">KIỂU HÌNH (PHENOTYPE)</text>
        <text x="15" y="48" font-size="9" font-weight="bold" fill="#059669">• Tính trạng trội (A-)</text>
        <text x="15" y="66" font-size="9" font-weight="bold" fill="#dc2626">• Tính trạng lặn (aa)</text>
        <text x="15" y="84" font-size="8.5" fill="#64748b">Biểu hiện ra bên ngoài cơ thể</text>
      </g>
    </svg>
  `,

  // Bài 37: Quy luật di truyền Mendel
  37: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.2"/>
      <!-- Sơ đồ Punnett 1 cặp -->
      <g transform="translate(30, 15)">
        <text x="150" y="16" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6b21a8">PHÂN LI 1 CẶP (Aa × Aa)</text>
        <rect x="30" y="25" width="110" height="40" fill="#dcfce7" stroke="#16a34a"/>
        <text x="85" y="48" text-anchor="middle" font-size="9" font-weight="bold">3/4 Trội (Hoa đỏ)</text>
        <rect x="140" y="25" width="40" height="40" fill="#fee2e2" stroke="#ef4444"/>
        <text x="160" y="48" text-anchor="middle" font-size="8.5" font-weight="bold">1/4 Lặn</text>
        <text x="105" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">Tỉ lệ kiểu hình: 3 Trội : 1 Lặn</text>
        <text x="105" y="100" text-anchor="middle" font-size="9" fill="#64748b">Kiểu gene: 1 AA : 2 Aa : 1 aa</text>
      </g>
      <!-- Phân li độc lập 2 cặp -->
      <g transform="translate(360, 15)">
        <rect x="0" y="0" width="330" height="105" rx="8" fill="#ffffff" stroke="#9333ea" stroke-width="1"/>
        <text x="165" y="22" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#7e22ce">PHÂN LI ĐỘC LẬP 2 CẶP (AaBb × AaBb)</text>
        <text x="20" y="45" font-size="9.5" font-weight="bold" fill="#15803d">9 Vàng, trơn (A-B-)</text>
        <text x="180" y="45" font-size="9.5" font-weight="bold" fill="#0284c7">3 Vàng, nhăn (A-bb)</text>
        <text x="20" y="68" font-size="9.5" font-weight="bold" fill="#d97706">3 Xanh, trơn (aaB-)</text>
        <text x="180" y="68" font-size="9.5" font-weight="bold" fill="#dc2626">1 Xanh, nhăn (aabb)</text>
        <text x="165" y="94" text-anchor="middle" font-size="11" font-weight="bold" fill="#6b21a8">TỈ LỆ KIỂU HÌNH KINH ĐIỂN: 9 : 3 : 3 : 1</text>
      </g>
    </svg>
  `,

  // Bài 38: Nucleic acid & Gene
  38: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <text x="150" y="15" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">MÔ HÌNH CẶP BASE BỔ SUNG TRONG DNA</text>
        <rect x="20" y="30" width="110" height="30" rx="4" fill="#3b82f6"/>
        <text x="75" y="50" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">A (Adenine)</text>
        <line x1="130" y1="40" x2="160" y2="40" stroke="#1e293b" stroke-width="2"/>
        <line x1="130" y1="50" x2="160" y2="50" stroke="#1e293b" stroke-width="2"/>
        <text x="145" y="32" text-anchor="middle" font-size="7.5" fill="#64748b">2 lk H</text>
        <rect x="160" y="30" width="110" height="30" rx="4" fill="#ef4444"/>
        <text x="215" y="50" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">T (Thymine)</text>
        <!-- Cặp G = C -->
        <rect x="20" y="68" width="110" height="30" rx="4" fill="#10b981"/>
        <text x="75" y="88" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">G (Guanine)</text>
        <line x1="130" y1="76" x2="160" y2="76" stroke="#1e293b" stroke-width="1.8"/>
        <line x1="130" y1="83" x2="160" y2="83" stroke="#1e293b" stroke-width="1.8"/>
        <line x1="130" y1="90" x2="160" y2="90" stroke="#1e293b" stroke-width="1.8"/>
        <text x="145" y="70" text-anchor="middle" font-size="7.5" fill="#64748b">3 lk H</text>
        <rect x="160" y="68" width="110" height="30" rx="4" fill="#f59e0b"/>
        <text x="215" y="88" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">C (Cytosine)</text>
      </g>
      <g transform="translate(350, 20)">
        <rect x="0" y="0" width="340" height="95" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1"/>
        <text x="170" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">ĐẶC TRƯNG GENE &amp; RNA</text>
        <text x="15" y="48" font-size="9" fill="#334155">• DNA gồm 2 mạch polynucleotide xoắn song song</text>
        <text x="15" y="68" font-size="9" fill="#334155">• Nguyên tắc bổ sung: <strong>A = T, G = C</strong></text>
        <text x="15" y="88" font-size="9" font-weight="bold" fill="#2563eb">• RNA có 1 mạch đơn, dùng Uracil (U) thay Thymine (T)</text>
      </g>
    </svg>
  `,

  // Bài 39: Tái bản DNA & Phiên mã RNA
  39: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.2"/>
      <!-- Tái bản bán bảo toàn -->
      <g transform="translate(30, 15)">
        <rect x="0" y="0" width="320" height="105" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1"/>
        <text x="160" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">TÁI BẢN DNA (BÁN BẢO TOÀN)</text>
        <text x="15" y="50" font-size="9.5" fill="#334155">• Mỗi DNA con gồm <strong>1 mạch cũ + 1 mạch mới</strong></text>
        <text x="15" y="70" font-size="9.5" fill="#334155">• Enzyme DNA polymerase xúc tác lắp bổ sung</text>
        <text x="15" y="90" font-size="9" font-weight="bold" fill="#059669">-> Truyền nguyên vẹn thông tin qua phân bào</text>
      </g>
      <!-- Phiên mã RNA -->
      <g transform="translate(370, 15)">
        <rect x="0" y="0" width="325" height="105" rx="8" fill="#ffffff" stroke="#0ea5e9" stroke-width="1"/>
        <text x="162" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">PHIÊN MÃ RNA (TRANSCRIPTION)</text>
        <text x="15" y="50" font-size="9.5" fill="#334155">• Dùng 1 mạch khuôn của gene (3' -> 5')</text>
        <text x="15" y="70" font-size="9.5" font-family="monospace" font-weight="bold" fill="#0284c7">A_khuôn -> U | T_khuôn -> A | G <-> C</text>
        <text x="15" y="90" font-size="9" font-weight="bold" fill="#0369a1">-> Tạo phân tử mRNA đưa ra ribosome dịch mã</text>
      </g>
    </svg>
  `,

  // Bài 40: Dịch mã & Mối quan hệ Gene -> Tính trạng
  40: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#fafafa" stroke="#e5e5e5" stroke-width="1.2"/>
      <g transform="translate(20, 20)">
        <rect x="0" y="0" width="130" height="75" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
        <text x="65" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">GENE (DNA)</text>
        <text x="65" y="50" text-anchor="middle" font-size="8.5" fill="#64748b">Trình tự nucleotide</text>
      </g>
      <line x1="150" y1="55" x2="195" y2="55" stroke="#3b82f6" stroke-width="2.5"/>
      <polygon points="195,55 185,50 185,60" fill="#3b82f6"/>
      <text x="172" y="45" text-anchor="middle" font-size="8" fill="#64748b">Phiên mã</text>
      <g transform="translate(195, 20)">
        <rect x="0" y="0" width="130" height="75" rx="6" fill="#dcfce7" stroke="#10b981" stroke-width="1"/>
        <text x="65" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">mRNA</text>
        <text x="65" y="50" text-anchor="middle" font-size="8.5" fill="#64748b">Trình tự Codon bộ ba</text>
      </g>
      <line x1="325" y1="55" x2="370" y2="55" stroke="#10b981" stroke-width="2.5"/>
      <polygon points="370,55 360,50 360,60" fill="#10b981"/>
      <text x="347" y="45" text-anchor="middle" font-size="8" fill="#64748b">Dịch mã</text>
      <g transform="translate(370, 20)">
        <rect x="0" y="0" width="135" height="75" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
        <text x="67" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">PROTEIN</text>
        <text x="67" y="50" text-anchor="middle" font-size="8.5" fill="#64748b">Chuỗi amino acid</text>
      </g>
      <line x1="505" y1="55" x2="550" y2="55" stroke="#f59e0b" stroke-width="2.5"/>
      <polygon points="550,55 540,50 540,60" fill="#f59e0b"/>
      <g transform="translate(550, 20)">
        <rect x="0" y="0" width="145" height="75" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
        <text x="72" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">TÍNH TRẠNG</text>
        <text x="72" y="50" text-anchor="middle" font-size="8.5" fill="#64748b">Kiểu hình cơ thể</text>
      </g>
      <text x="360" y="118" text-anchor="middle" font-size="10" font-weight="bold" fill="#4338ca">LUỒNG TRUYỀN ĐẠT THÔNG TIN TRUNG TÂM SINH HỌC PHÂN TỬ</text>
    </svg>
  `,

  // Bài 41: Đột biến gene
  41: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="1.2"/>
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="200" height="95" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.2"/>
        <text x="100" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">1. THAY THẾ 1 CẶP</text>
        <text x="12" y="48" font-size="9" fill="#334155">• Thay A-T bằng G-C</text>
        <text x="12" y="66" font-size="9" fill="#334155">• Chỉ ảnh hưởng 1 bộ ba</text>
        <text x="12" y="84" font-size="8.5" fill="#64748b">Ví dụ: Hồng cầu hình liềm</text>
      </g>
      <g transform="translate(245, 20)">
        <rect x="0" y="0" width="220" height="95" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="1.2"/>
        <text x="110" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#dc2626">2. MẤT 1 CẶP NUCLEOTIDE</text>
        <text x="12" y="48" font-size="9" fill="#334155">• Bị khuyết 1 cặp nu</text>
        <text x="12" y="66" font-size="9" font-weight="bold" fill="#b91c1c">• Dịch khung đọc mã</text>
        <text x="12" y="84" font-size="8.5" fill="#64748b">Thay đổi toàn bộ amino acid sau đó</text>
      </g>
      <g transform="translate(485, 20)">
        <rect x="0" y="0" width="210" height="95" rx="8" fill="#ffffff" stroke="#ea580c" stroke-width="1.2"/>
        <text x="105" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#ea580c">3. THÊM 1 CẶP NUCLEOTIDE</text>
        <text x="12" y="48" font-size="9" fill="#334155">• Chèn thêm 1 cặp nu</text>
        <text x="12" y="66" font-size="9" font-weight="bold" fill="#c2410c">• Dịch khung đọc mã</text>
        <text x="12" y="84" font-size="8.5" fill="#64748b">Hậu quả nghiêm trọng</text>
      </g>
    </svg>
  `,

  // Bài 42: Nhiễm sắc thể & Bộ NST
  42: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="310" height="95" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1"/>
        <text x="155" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">CẤU TẠO NHIỄM SẮC THỂ (NST)</text>
        <text x="15" y="48" font-size="9" fill="#334155">• <strong>Cấu tạo hóa học:</strong> DNA mạch kép + Protein Histone</text>
        <text x="15" y="68" font-size="9" fill="#334155">• NST kép gồm 2 chromatid chị em đính tại tâm động</text>
        <text x="15" y="88" font-size="8.5" fill="#64748b">Tâm động là nơi thoi phân bào đính vào để kéo NST phân li</text>
      </g>
      <g transform="translate(365, 20)">
        <rect x="0" y="0" width="325" height="95" rx="8" fill="#ffffff" stroke="#059669" stroke-width="1"/>
        <text x="162" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">BỘ NHIỄM SẮC THỂ LOÀI</text>
        <text x="15" y="48" font-size="9.5" fill="#334155">• Tế bào sinh dưỡng: <strong>Lưỡng bội 2n</strong> (cặp tương đồng)</text>
        <text x="15" y="68" font-size="9.5" fill="#334155">• Tế bào giao tử: <strong>Đơn bội n</strong> (chỉ chứa 1 chiếc của cặp)</text>
        <text x="15" y="88" font-size="9" font-weight="bold" fill="#047857">Người: 2n = 46 (23 cặp) • Ruồi giấm: 2n = 8</text>
      </g>
    </svg>
  `,

  // Bài 43: Nguyên phân vs Giảm phân
  43: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#fafafa" stroke="#e5e5e5" stroke-width="1.2"/>
      <!-- Nguyên phân -->
      <g transform="translate(25, 15)">
        <rect x="0" y="0" width="320" height="105" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1"/>
        <text x="160" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">NGUYÊN PHÂN (1 LẦN PHÂN CHIA)</text>
        <circle cx="50" cy="55" r="18" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.2"/>
        <text x="50" y="59" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#166534">2n</text>
        <line x1="80" y1="55" x2="135" y2="55" stroke="#16a34a" stroke-width="2"/>
        <polygon points="135,55 127,51 127,59" fill="#16a34a"/>
        <circle cx="170" cy="38" r="14" fill="#dcfce7" stroke="#16a34a"/>
        <text x="170" y="42" text-anchor="middle" font-size="8.5" font-weight="bold">2n</text>
        <circle cx="170" cy="72" r="14" fill="#dcfce7" stroke="#16a34a"/>
        <text x="170" y="76" text-anchor="middle" font-size="8.5" font-weight="bold">2n</text>
        <text x="250" y="52" font-size="9" font-weight="bold" fill="#15803d">2 tế bào con</text>
        <text x="250" y="68" font-size="8" fill="#166534">Giống hệt mẹ (2n)</text>
      </g>
      <!-- Giảm phân -->
      <g transform="translate(370, 15)">
        <rect x="0" y="0" width="325" height="105" rx="8" fill="#fdf2f8" stroke="#db2777" stroke-width="1"/>
        <text x="162" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#be185d">GIẢM PHÂN (2 LẦN PHÂN CHIA)</text>
        <circle cx="45" cy="55" r="18" fill="#fbcfe8" stroke="#db2777" stroke-width="1.2"/>
        <text x="45" y="59" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#9d174d">2n</text>
        <line x1="75" y1="55" x2="130" y2="55" stroke="#db2777" stroke-width="2"/>
        <polygon points="130,55 122,51 122,59" fill="#db2777"/>
        <!-- 4 giao tử n -->
        <circle cx="160" cy="28" r="10" fill="#fce7f3" stroke="#db2777"/><text x="160" y="31" text-anchor="middle" font-size="7.5">n</text>
        <circle cx="160" cy="48" r="10" fill="#fce7f3" stroke="#db2777"/><text x="160" y="51" text-anchor="middle" font-size="7.5">n</text>
        <circle cx="160" cy="68" r="10" fill="#fce7f3" stroke="#db2777"/><text x="160" y="71" text-anchor="middle" font-size="7.5">n</text>
        <circle cx="160" cy="88" r="10" fill="#fce7f3" stroke="#db2777"/><text x="160" y="91" text-anchor="middle" font-size="7.5">n</text>
        <text x="235" y="52" font-size="9" font-weight="bold" fill="#be185d">4 giao tử (n)</text>
        <text x="235" y="68" font-size="8" fill="#9d174d">Bộ NST giảm 1/2</text>
      </g>
    </svg>
  `,

  // Bài 44: NST giới tính & Cơ chế giới tính
  44: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="180" height="95" rx="8" fill="#ffffff" stroke="#ec4899" stroke-width="1"/>
        <text x="90" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#db2777">MẸ (NỮ: 44A + XX)</text>
        <text x="90" y="55" text-anchor="middle" font-size="13" font-weight="bold" fill="#db2777">Trứng (X)</text>
        <text x="90" y="80" text-anchor="middle" font-size="8.5" fill="#64748b">100% mang NST X</text>
      </g>
      <text x="230" y="70" font-size="18" font-weight="bold" fill="#6b21a8">×</text>
      <g transform="translate(255, 20)">
        <rect x="0" y="0" width="190" height="95" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1"/>
        <text x="95" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">BỐ (NAM: 44A + XY)</text>
        <text x="95" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">50% Tinh trùng X</text>
        <text x="95" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">50% Tinh trùng Y</text>
      </g>
      <text x="465" y="70" font-size="18" font-weight="bold" fill="#6b21a8">=</text>
      <g transform="translate(490, 20)">
        <rect x="0" y="0" width="200" height="95" rx="8" fill="#ffffff" stroke="#8b5cf6" stroke-width="1.2"/>
        <text x="100" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#6d28d9">TỈ LỆ THỤ TINH CON 1:1</text>
        <text x="15" y="52" font-size="10" font-weight="bold" fill="#db2777">• Trứng X + TT X -> Con gái (XX)</text>
        <text x="15" y="75" font-size="10" font-weight="bold" fill="#1d4ed8">• Trứng X + TT Y -> Con trai (XY)</text>
      </g>
    </svg>
  `,

  // Bài 45: Di truyền liên kết
  45: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="250" height="95" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1"/>
        <text x="125" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">THÍ NGHIỆM MORGAN (RUỒI GIẤM)</text>
        <text x="15" y="48" font-size="9" fill="#334155">• Lai phân tích ruồi đực F1 (BV/bv) với (bv/bv)</text>
        <text x="15" y="68" font-size="9.5" font-weight="bold" fill="#2563eb">• Kết quả: 1 Thân xám, cánh dài (BV/bv)</text>
        <text x="68" y="86" font-size="9.5" font-weight="bold" fill="#475569">: 1 Thân đen, cánh cụt (bv/bv)</text>
      </g>
      <g transform="translate(300, 20)">
        <rect x="0" y="0" width="390" height="95" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        <text x="195" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">BẢN CHẤT QUY LUẬT LIÊN KẾT GENE</text>
        <text x="15" y="48" font-size="9.5" fill="#334155">• Các gene cùng nằm trên 1 NST di truyền cùng nhau</text>
        <text x="15" y="68" font-size="9.5" fill="#334155">• Giữ vững từng nhóm tính trạng tốt luôn đi kèm</text>
        <text x="15" y="88" font-size="8.5" fill="#64748b">Số nhóm gene liên kết = số NST đơn bội n của loài (Người: 23 nhóm)</text>
      </g>
    </svg>
  `,

  // Bài 46: Đột biến NST
  46: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#fef2f2" stroke="#fecaca" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="310" height="95" rx="8" fill="#ffffff" stroke="#ef4444" stroke-width="1"/>
        <text x="155" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">ĐỘT BIẾN CẤU TRÚC NST</text>
        <text x="15" y="48" font-size="9" fill="#334155">• <strong>Mất đoạn:</strong> Giảm gene, gây hại (mất đoạn NST 5)</text>
        <text x="15" y="66" font-size="9" fill="#334155">• <strong>Lặp đoạn:</strong> Tăng số lượng bản sao gene</text>
        <text x="15" y="84" font-size="9" fill="#334155">• <strong>Đảo đoạn &amp; Chuyển đoạn</strong> giữa các NST</text>
      </g>
      <g transform="translate(365, 20)">
        <rect x="0" y="0" width="325" height="95" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="1"/>
        <text x="162" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">ĐỘT BIẾN SỐ LƯỢNG NST</text>
        <text x="15" y="48" font-size="9.5" font-weight="bold" fill="#dc2626">• Thể lệch bội: Hội chứng Down (2n+1=47, 3 NST 21)</text>
        <text x="15" y="68" font-size="9" fill="#334155">• Hội chứng Turner ở nữ (chỉ có 1 NST X: XO, 2n-1=45)</text>
        <text x="15" y="88" font-size="9" fill="#334155">• Đa bội lẻ (3n) quả không hạt | Đa bội chẵn (4n) to lớn</text>
      </g>
    </svg>
  `,

  // Bài 47: Di truyền học với con người
  47: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="310" height="95" rx="8" fill="#ffffff" stroke="#0ea5e9" stroke-width="1"/>
        <text x="155" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">NGHIÊN CỨU PHẢ HỆ &amp; TƯ VẤN</text>
        <text x="15" y="48" font-size="9" fill="#334155">• Theo dõi bệnh tật di truyền qua nhiều thế hệ</text>
        <text x="15" y="68" font-size="9" fill="#334155">• Bệnh mù màu, máu khó đông (gene lặn trên NST X)</text>
        <text x="15" y="88" font-size="8.5" fill="#64748b">Tư vấn tiền hôn nhân dự phòng sinh con dị tật</text>
      </g>
      <g transform="translate(365, 20)">
        <rect x="0" y="0" width="325" height="95" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1"/>
        <text x="162" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">SÀNG LỌC &amp; PHÁP LUẬT HÔN NHÂN</text>
        <text x="15" y="48" font-size="9" fill="#334155">• Siêu âm đo độ mờ da gáy, xét nghiệm NIPT thai nhi</text>
        <text x="15" y="68" font-size="9.5" font-weight="bold" fill="#dc2626">• CẤM kết hôn cận huyết trong phạm vi 3 đời</text>
        <text x="15" y="88" font-size="8.5" fill="#64748b">Tránh allele lặn có hại gặp nhau ở thể đồng hợp gây bệnh</text>
      </g>
    </svg>
  `,

  // Bài 48: Ứng dụng công nghệ di truyền
  48: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="220" height="95" rx="8" fill="#ffffff" stroke="#9333ea" stroke-width="1"/>
        <text x="110" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#7e22ce">DNA TÁI TỔ HỢP</text>
        <text x="12" y="46" font-size="8.5" fill="#334155">1. Tách plasmid &amp; gene cần</text>
        <text x="12" y="62" font-size="8.5" fill="#334155">2. Cắt bằng Restrictase</text>
        <text x="12" y="78" font-size="8.5" fill="#334155">3. Nối bằng Ligase</text>
      </g>
      <g transform="translate(265, 20)">
        <rect x="0" y="0" width="210" height="95" rx="8" fill="#ffffff" stroke="#059669" stroke-width="1"/>
        <text x="105" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">DƯỢC PHẨM SINH HỌC</text>
        <text x="12" y="48" font-size="9" fill="#334155">• Vi khuẩn E. coli biến đổi gene</text>
        <text x="12" y="66" font-size="9.5" font-weight="bold" fill="#059669">• Sản xuất Insulin người</text>
        <text x="12" y="84" font-size="8.5" fill="#64748b">Trị bệnh đái tháo đường</text>
      </g>
      <g transform="translate(490, 20)">
        <rect x="0" y="0" width="200" height="95" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1"/>
        <text x="100" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b45309">SINH VẬT GMO</text>
        <text x="12" y="48" font-size="9" fill="#334155">• Ngô Bt kháng sâu hại</text>
        <text x="12" y="66" font-size="9" fill="#334155">• Lúa vàng giàu tiền vitamin A</text>
        <text x="12" y="84" font-size="8.5" fill="#64748b">Liệu pháp gene chữa bệnh nan y</text>
      </g>
    </svg>
  `,

  // Bài 49: Khái niệm tiến hóa & Các hình thức chọn lọc
  49: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.2"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="310" height="95" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1"/>
        <text x="155" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">CHỌN LỌC TỰ NHIÊN (DARWIN - 1859)</text>
        <text x="15" y="48" font-size="9" fill="#334155">• Đấu tranh sinh tồn giữa các cá thể trong quần thể</text>
        <text x="15" y="68" font-size="9.5" font-weight="bold" fill="#15803d">• Cá thể mang biến dị có lợi -> Sống sót &amp; sinh sản ưu thế</text>
        <text x="15" y="88" font-size="8.5" fill="#64748b">Ví dụ: Bướm bạch dương đen thích nghi thân cây bám bồ hóng</text>
      </g>
      <g transform="translate(365, 20)">
        <rect x="0" y="0" width="325" height="95" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1"/>
        <text x="162" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">CHỌN LỌC NHÂN TẠO (DO CON NGƯỜI)</text>
        <text x="15" y="48" font-size="9" fill="#334155">• Con người chọn giữ lại tính trạng có lợi cho kinh tế</text>
        <text x="15" y="68" font-size="9" fill="#334155">• Đào thải các cá thể không mong muốn</text>
        <text x="15" y="88" font-size="8.5" fill="#64748b">Tạo ra hàng trăm giống chó, hoa lan, lúa cao sản từ dạng dại</text>
      </g>
    </svg>
  `,

  // Bài 50: Cơ chế tiến hóa
  50: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
      <g transform="translate(30, 15)">
        <rect x="0" y="0" width="660" height="105" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1"/>
        <text x="330" y="24" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1d4ed8">5 NHÂN TỐ TIẾN HÓA LÀM BIẾN ĐỔI TẦN SỐ ALLELE &amp; THÀNH PHẦN KIỂU GENE</text>
        <g transform="translate(15, 38)">
          <rect x="0" y="0" width="115" height="50" rx="4" fill="#dbeafe"/>
          <text x="57" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">1. Đột biến</text>
          <text x="57" y="38" text-anchor="middle" font-size="7.5" fill="#64748b">Tạo allele mới</text>
        </g>
        <g transform="translate(145, 38)">
          <rect x="0" y="0" width="115" height="50" rx="4" fill="#dcfce7"/>
          <text x="57" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#065f46">2. Di nhập gene</text>
          <text x="57" y="38" text-anchor="middle" font-size="7.5" fill="#64748b">Trao đổi cá thể</text>
        </g>
        <g transform="translate(275, 38)">
          <rect x="0" y="0" width="120" height="50" rx="4" fill="#fef3c7"/>
          <text x="60" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#92400e">3. Chọn lọc TN</text>
          <text x="60" y="38" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#b45309">Định hướng duy nhất</text>
        </g>
        <g transform="translate(410, 38)">
          <rect x="0" y="0" width="115" height="50" rx="4" fill="#fee2e2"/>
          <text x="57" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#991b1b">4. Yếu tố ngẫu nhiên</text>
          <text x="57" y="38" text-anchor="middle" font-size="7.5" fill="#64748b">Thiên tai đột ngột</text>
        </g>
        <g transform="translate(540, 38)">
          <rect x="0" y="0" width="110" height="50" rx="4" fill="#f1f5f9"/>
          <text x="55" y="22" text-anchor="middle" font-size="9" font-weight="bold" fill="#334155">5. Giao phối</text>
          <text x="55" y="38" text-anchor="middle" font-size="7.5" fill="#64748b">Không ngẫu nhiên</text>
        </g>
      </g>
    </svg>
  `,

  // Bài 51: Sự phát sinh & phát triển sự sống, nguồn gốc loài người
  51: `
    <svg viewBox="0 0 720 135" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="710" height="125" rx="12" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.2"/>
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="190" height="95" rx="8" fill="#ffffff" stroke="#9333ea" stroke-width="1"/>
        <text x="95" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#7e22ce">1. TIẾN HÓA HÓA HỌC</text>
        <text x="12" y="48" font-size="8.5" fill="#334155">• Vô cơ -> Hữu cơ đơn giản</text>
        <text x="12" y="66" font-size="8.5" fill="#334155">• Trùng ngưng -> Đại phân tử</text>
        <text x="12" y="84" font-size="8" fill="#64748b">Thí nghiệm Miller - Urey (1953)</text>
      </g>
      <g transform="translate(230, 20)">
        <rect x="0" y="0" width="200" height="95" rx="8" fill="#ffffff" stroke="#0ea5e9" stroke-width="1"/>
        <text x="100" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0369a1">2. TIỀN SINH HỌC &amp; SH</text>
        <text x="12" y="48" font-size="8.5" fill="#334155">• Giọt coacervate sơ khai</text>
        <text x="12" y="66" font-size="8.5" fill="#334155">• Nhân sơ -> Nhân thực -> Đa bào</text>
        <text x="12" y="84" font-size="8" fill="#64748b">Quang hợp làm tăng O2 khí quyển</text>
      </g>
      <g transform="translate(445, 20)">
        <rect x="0" y="0" width="250" height="95" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1.2"/>
        <text x="125" y="24" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#15803d">3. NGUỒN GỐC LOÀI NGƯỜI</text>
        <text x="12" y="48" font-size="8.5" fill="#334155">• Bộ Linh trưởng, chung tổ tiên vượn người</text>
        <text x="12" y="66" font-size="8.5" font-weight="bold" fill="#166534">• Đi thẳng 2 chân -> Dùng tay chế tạo công cụ</text>
        <text x="12" y="84" font-size="8" fill="#64748b">Não bộ phát triển và tiếng nói giao tiếp</text>
      </g>
    </svg>
  `
};
