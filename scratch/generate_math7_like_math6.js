// Generator for toan_7.html formatted exactly like toan_6.html
const fs = require('fs');

const p1 = require('./toan7_data_p1.js');
const p2 = require('./toan7_data_p2.js');

// Map all 37 lessons
const rawChapters = [...p1.chaptersPart1, ...p2.chaptersPart2];

// SVG illustrations dictionary for 37 lessons
const lessonSvgs = {
  1: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Trục số biểu diễn số hữu tỉ -->
    <line x1="30" y1="55" x2="470" y2="55" stroke="#2563eb" stroke-width="2.5"/>
    <polygon points="475,55 465,50 465,60" fill="#2563eb"/>
    <polygon points="25,55 35,50 35,60" fill="#2563eb"/>
    <!-- Vạch chia -->
    <line x1="70" y1="48" x2="70" y2="62" stroke="#64748b" stroke-width="2"/><text x="70" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#64748b">-1</text>
    <line x1="130" y1="50" x2="130" y2="60" stroke="#f43f5e" stroke-width="2"/><circle cx="130" cy="55" r="4" fill="#f43f5e"/><text x="130" y="40" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#f43f5e">-2/3</text>
    <line x1="250" y1="45" x2="250" y2="65" stroke="#0f172a" stroke-width="2.5"/><text x="250" y="80" text-anchor="middle" font-size="13" font-black fill="#1d4ed8">0</text>
    <line x1="330" y1="50" x2="330" y2="60" stroke="#059669" stroke-width="2"/><circle cx="330" cy="55" r="4" fill="#059669"/><text x="330" y="40" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#059669">1/2</text>
    <line x1="410" y1="48" x2="410" y2="62" stroke="#64748b" stroke-width="2"/><text x="410" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#64748b">1</text>
    <text x="250" y="102" text-anchor="middle" font-size="11" font-semibold fill="#475569">Mọi số hữu tỉ x = a/b (b ≠ 0) đều được biểu diễn bằng một điểm trên trục số</text>
  </svg>`,

  2: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Quy tắc cộng trừ nhân chia số hữu tỉ -->
    <rect x="25" y="15" width="215" height="75" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="132" y="38" text-anchor="middle" font-size="12" font-black fill="#1d4ed8">PHÉP CỘNG &amp; TRỪ</text>
    <text x="132" y="65" text-anchor="middle" font-size="13" font-mono font-bold fill="#1e293b">a/b ± c/d = (ad ± bc)/bd</text>
    
    <rect x="260" y="15" width="215" height="75" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
    <text x="367" y="38" text-anchor="middle" font-size="12" font-black fill="#047857">PHÉP NHÂN &amp; CHIA</text>
    <text x="367" y="65" text-anchor="middle" font-size="13" font-mono font-bold fill="#1e293b">(a/b) ÷ (c/d) = (a·d) / (b·c)</text>
    <text x="250" y="103" text-anchor="middle" font-size="10.5" font-medium fill="#64748b">Quy tắc dấu: Nhân/chia cùng dấu ra dương (+), khác dấu ra âm (-)</text>
  </svg>`,

  3: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Lũy thừa với số mũ tự nhiên -->
    <rect x="20" y="15" width="460" height="75" rx="12" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
    <text x="250" y="38" text-anchor="middle" font-size="12" font-black fill="#7e22ce">CÁC CÔNG THỨC LŨY THỪA CỦA SỐ HỮU TỈ (x, y ∈ ℚ; m, n ∈ ℕ)</text>
    <g transform="translate(45, 50)" font-size="12" font-mono font-bold fill="#3b0764">
      <text x="0" y="20">xᵐ · xⁿ = xᵐ⁺ⁿ</text>
      <text x="120" y="20">xᵐ : xⁿ = xᵐ⁻ⁿ</text>
      <text x="240" y="20">(xᵐ)ⁿ = xᵐⁿ</text>
      <text x="340" y="20">(x·y)ⁿ = xⁿ·yⁿ</text>
    </g>
    <text x="250" y="103" text-anchor="middle" font-size="10.5" font-medium fill="#6b21a8">Quy ước: x⁰ = 1 (với x ≠ 0) ; x¹ = x</text>
  </svg>`,

  4: `<svg viewBox="0 0 500 115" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Cân thăng bằng: Quy tắc chuyển vế -->
    <line x1="120" y1="45" x2="380" y2="45" stroke="#334155" stroke-width="4"/>
    <polygon points="250,45 238,85 262,85" fill="#64748b"/>
    <!-- Đĩa cân trái -->
    <line x1="140" y1="45" x2="140" y2="70" stroke="#94a3b8" stroke-width="1.5"/>
    <ellipse cx="140" cy="70" rx="35" ry="8" fill="#e2e8f0" stroke="#64748b"/>
    <rect x="120" y="52" width="22" height="18" rx="3" fill="#3b82f6"/><text x="131" y="65" text-anchor="middle" fill="#fff" font-size="11" font-bold">x</text>
    <circle cx="152" cy="61" r="9" fill="#10b981"/><text x="152" y="65" text-anchor="middle" fill="#fff" font-size="10" font-bold">+a</text>
    <!-- Đĩa cân phải -->
    <line x1="360" y1="45" x2="360" y2="70" stroke="#94a3b8" stroke-width="1.5"/>
    <ellipse cx="360" cy="70" rx="35" ry="8" fill="#e2e8f0" stroke="#64748b"/>
    <rect x="348" y="50" width="24" height="20" rx="3" fill="#f59e0b"/><text x="360" y="64" text-anchor="middle" fill="#fff" font-size="11" font-bold">b</text>
    <path d="M 165 55 C 220 20, 280 20, 335 55" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,2"/>
    <polygon points="340,58 335,48 328,55" fill="#dc2626"/>
    <text x="250" y="24" text-anchor="middle" font-size="11" font-bold fill="#dc2626">Chuyển vế đổi dấu: x + a = b ⇒ x = b - a</text>
    <text x="250" y="105" text-anchor="middle" font-size="10.5" font-medium fill="#475569">Thứ tự ngoặc: ( ) → [ ] → { }</text>
  </svg>`,

  5: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Số thập phân vô hạn tuần hoàn -->
    <rect x="20" y="15" width="220" height="75" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
    <text x="130" y="40" text-anchor="middle" font-size="13" font-bold fill="#15803d">1/3 = 0,333... = 0,(3)</text>
    <text x="130" y="65" text-anchor="middle" font-size="11" fill="#475569">Chu kì là <strong fill="#15803d">3</strong> (1 chữ số)</text>

    <rect x="260" y="15" width="220" height="75" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="370" y="40" text-anchor="middle" font-size="13" font-bold fill="#1d4ed8">5/11 = 0,4545... = 0,(45)</text>
    <text x="370" y="65" text-anchor="middle" font-size="11" fill="#475569">Chu kì là <strong fill="#1d4ed8">45</strong> (2 chữ số)</text>
    <text x="250" y="103" text-anchor="middle" font-size="10.5" font-medium fill="#64748b">Phân số tối giản có mẫu chứa ước nguyên tố khác 2 và 5 thì viết được dưới dạng vô hạn tuần hoàn</text>
  </svg>`,

  6: `<svg viewBox="0 0 500 115" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Căn bậc hai số học và đường chéo √2 -->
    <line x1="40" y1="85" x2="460" y2="85" stroke="#334155" stroke-width="2"/>
    <circle cx="100" cy="85" r="3.5" fill="#0f172a"/><text x="100" y="102" text-anchor="middle" font-size="11" font-bold">0</text>
    <circle cx="220" cy="85" r="3.5" fill="#0f172a"/><text x="220" y="102" text-anchor="middle" font-size="11" font-bold">1</text>
    <!-- Tam giác vuông cạnh 1, cạnh huyền √2 -->
    <line x1="220" y1="85" x2="220" y2="25" stroke="#3b82f6" stroke-width="2"/>
    <line x1="100" y1="85" x2="220" y2="25" stroke="#e11d48" stroke-width="2.5"/>
    <text x="145" y="45" font-size="12" font-black fill="#e11d48">c = √2</text>
    <text x="230" y="55" font-size="10" font-bold fill="#3b82f6">1</text>
    <path d="M 220 25 A 134 134 0 0 1 270 85" fill="none" stroke="#e11d48" stroke-width="1.8" stroke-dasharray="3,3"/>
    <circle cx="270" cy="85" r="4" fill="#e11d48"/>
    <text x="270" y="103" text-anchor="middle" font-size="11" font-black fill="#e11d48">√2 ≈ 1,414...</text>
    <text x="375" y="45" text-anchor="middle" font-size="11" font-bold fill="#0f172a">Số vô tỉ (𝕀): Vô hạn không tuần hoàn</text>
    <text x="375" y="65" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">√a ≥ 0 khi a ≥ 0, (√a)² = a</text>
  </svg>`,

  7: `<svg viewBox="0 0 500 115" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Sơ đồ tập hợp số thực ℝ -->
    <ellipse cx="250" cy="55" rx="230" ry="45" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
    <text x="440" y="35" font-size="13" font-black fill="#1d4ed8">ℝ (Số thực)</text>
    <ellipse cx="190" cy="55" rx="160" ry="38" fill="#eff6ff" stroke="#0ea5e9" stroke-width="1.8"/>
    <text x="315" y="40" font-size="12" font-bold fill="#0284c7">ℚ (Hữu tỉ)</text>
    <ellipse cx="145" cy="55" rx="110" ry="30" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
    <text x="225" y="45" font-size="11" font-bold fill="#16a34a">ℤ (Nguyên)</text>
    <ellipse cx="105" cy="55" rx="60" ry="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="105" y="60" text-anchor="middle" font-size="11" font-black fill="#d97706">ℕ</text>
    <rect x="365" y="50" width="85" height="35" rx="8" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="407" y="66" text-anchor="middle" font-size="10.5" font-black fill="#e11d48">𝕀 (Vô tỉ)</text>
    <text x="407" y="79" text-anchor="middle" font-size="9" fill="#e11d48">√2, π, √3...</text>
    <text x="250" y="110" text-anchor="middle" font-size="10.5" font-medium fill="#475569">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ; 𝕀 ⊂ ℝ ; Trục số thực lấp đầy liên tục</text>
  </svg>`,

  8: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Góc đối đỉnh và tia phân giác -->
    <line x1="60" y1="95" x2="220" y2="25" stroke="#334155" stroke-width="2"/>
    <line x1="60" y1="25" x2="220" y2="95" stroke="#334155" stroke-width="2"/>
    <circle cx="140" cy="60" r="3" fill="#dc2626"/>
    <text x="140" y="75" text-anchor="middle" font-size="10" font-bold>O</text>
    <path d="M 125 53 A 20 20 0 0 1 125 67" fill="none" stroke="#2563eb" stroke-width="2"/>
    <path d="M 155 53 A 20 20 0 0 0 155 67" fill="none" stroke="#2563eb" stroke-width="2"/>
    <text x="140" y="112" text-anchor="middle" font-size="11" font-bold fill="#2563eb">Góc đối đỉnh thì bằng nhau: Ô₁ = Ô₃</text>
    <!-- Phân giác -->
    <line x1="300" y1="90" x2="450" y2="90" stroke="#334155" stroke-width="2"/>
    <line x1="300" y1="90" x2="400" y2="20" stroke="#334155" stroke-width="2"/>
    <line x1="300" y1="90" x2="435" y2="45" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,2"/>
    <path d="M 330 90 A 30 30 0 0 0 326 77" fill="none" stroke="#ea580c" stroke-width="2"/>
    <path d="M 326 77 A 30 30 0 0 0 318 64" fill="none" stroke="#ea580c" stroke-width="2"/>
    <text x="445" y="48" font-size="11" font-bold fill="#dc2626">Oz</text>
    <text x="375" y="112" text-anchor="middle" font-size="11" font-bold fill="#dc2626">Tia phân giác chia đôi góc: xÔz = zÔy</text>
  </svg>`,

    9: `<svg viewBox="0 0 500 125" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Hai đường thẳng song song và đường thẳng cắt -->
    <line x1="40" y1="38" x2="460" y2="38" stroke="#2563eb" stroke-width="2.5"/><text x="470" y="42" font-size="12" font-bold fill="#2563eb">a</text>
    <line x1="40" y1="80" x2="460" y2="80" stroke="#2563eb" stroke-width="2.5"/><text x="470" y="84" font-size="12" font-bold fill="#2563eb">b</text>
    <line x1="140" y1="12" x2="350" y2="105" stroke="#dc2626" stroke-width="2"/><text x="360" y="105" font-size="12" font-bold fill="#dc2626">c</text>
    <!-- Góc so le trong -->
    <path d="M 185 38 A 15 15 0 0 0 200 45" fill="none" stroke="#059669" stroke-width="2.5"/>
    <path d="M 305 80 A 15 15 0 0 0 290 73" fill="none" stroke="#059669" stroke-width="2.5"/>
    <text x="220" y="30" font-size="11" font-bold fill="#059669">A₃ (so le trong)</text>
    <text x="250" y="94" font-size="11" font-bold fill="#059669">B₁ (so le trong)</text>
    <text x="250" y="120" text-anchor="middle" font-size="10.5" font-bold fill="#1e293b">a // b ⇔ So le trong bằng nhau ⇔ Đồng vị bằng nhau</text>
  </svg>`,

  10: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Tiên đề Euclid -->
    <line x1="50" y1="75" x2="450" y2="75" stroke="#334155" stroke-width="2.5"/><text x="465" y="79" font-size="12" font-bold>a</text>
    <circle cx="250" cy="35" r="4.5" fill="#dc2626"/><text x="250" y="25" text-anchor="middle" font-size="12" font-black fill="#dc2626">M</text>
    <line x1="50" y1="35" x2="450" y2="35" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,3"/><text x="465" y="39" font-size="12" font-bold fill="#2563eb">b</text>
    <text x="250" y="100" text-anchor="middle" font-size="11" font-bold fill="#1e293b">Qua điểm M nằm ngoài đường thẳng a, chỉ có DUY NHẤT một đường thẳng b song song với a</text>
  </svg>`,

  11: `<svg viewBox="0 0 500 115" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Cấu trúc Định lí: Giả thiết & Kết luận -->
    <rect x="40" y="20" width="160" height="65" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="120" y="42" text-anchor="middle" font-size="12" font-black fill="#1d4ed8">GIẢ THIẾT (GT)</text>
    <text x="120" y="65" text-anchor="middle" font-size="11" fill="#1e293b">a ⊥ c và b ⊥ c</text>
    
    <line x1="210" y1="52" x2="280" y2="52" stroke="#059669" stroke-width="3"/>
    <polygon points="290,52 278,46 278,58" fill="#059669"/>
    <text x="250" y="42" text-anchor="middle" font-size="10.5" font-bold fill="#059669">Suy luận</text>

    <rect x="300" y="20" width="160" height="65" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="380" y="42" text-anchor="middle" font-size="12" font-black fill="#047857">KẾT LUẬN (KL)</text>
    <text x="380" y="65" text-anchor="middle" font-size="12" font-bold fill="#047857">a // b</text>
    <text x="250" y="105" text-anchor="middle" font-size="10.5" font-medium fill="#475569">Chứng minh định lí là dùng lập luận từ giả thiết và các định lí đã biết để suy ra kết luận</text>
  </svg>`,

  12: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Tổng các góc trong tam giác -->
    <polygon points="120,95 380,95 230,25" fill="#f8fafc" stroke="#2563eb" stroke-width="2.5"/>
    <text x="105" y="105" font-size="12" font-bold>B</text>
    <text x="390" y="105" font-size="12" font-bold>C</text>
    <text x="230" y="18" text-anchor="middle" font-size="12" font-bold>A</text>
    <!-- Góc A, B, C -->
    <path d="M 140 95 A 20 20 0 0 0 133 80" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
    <path d="M 360 95 A 20 20 0 0 1 367 80" fill="none" stroke="#10b981" stroke-width="2.5"/>
    <path d="M 220 38 A 20 20 0 0 0 240 38" fill="none" stroke="#e11d48" stroke-width="2.5"/>
    <!-- Đường // qua A -->
    <line x1="130" y1="25" x2="330" y2="25" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,2"/>
    <text x="250" y="115" text-anchor="middle" font-size="12" font-black fill="#1d4ed8">ĐỊNH LÍ: Â + B̂ + Ĉ = 180°</text>
  </svg>`,

    13: `<svg viewBox="0 0 500 130" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Hai tam giác bằng nhau c-c-c -->
    <g transform="translate(40, 8)">
      <polygon points="20,80 150,80 70,18" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="10" y="90" font-size="11" font-bold>B</text><text x="155" y="90" font-size="11" font-bold>C</text><text x="68" y="10" font-size="11" font-bold>A</text>
      <line x1="42" y1="46" x2="48" y2="51" stroke="#ef4444" stroke-width="2"/>
      <line x1="108" y1="46" x2="114" y2="51" stroke="#10b981" stroke-width="2"/>
      <line x1="112" y1="48" x2="118" y2="53" stroke="#10b981" stroke-width="2"/>
      <line x1="82" y1="77" x2="82" y2="83" stroke="#f59e0b" stroke-width="2"/>
    </g>
    <text x="250" y="55" text-anchor="middle" font-size="18" font-black fill="#16a34a">=</text>
    <g transform="translate(280, 8)">
      <polygon points="20,80 150,80 70,18" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
      <text x="10" y="90" font-size="11" font-bold>B'</text><text x="155" y="90" font-size="11" font-bold>C'</text><text x="68" y="10" font-size="11" font-bold>A'</text>
      <line x1="42" y1="46" x2="48" y2="51" stroke="#ef4444" stroke-width="2"/>
      <line x1="108" y1="46" x2="114" y2="51" stroke="#10b981" stroke-width="2"/>
      <line x1="112" y1="48" x2="118" y2="53" stroke="#10b981" stroke-width="2"/>
      <line x1="82" y1="77" x2="82" y2="83" stroke="#f59e0b" stroke-width="2"/>
    </g>
    <text x="250" y="122" text-anchor="middle" font-size="11" font-bold fill="#0f172a">Trường hợp Cạnh - Cạnh - Cạnh (c - c - c): 3 cặp cạnh tương ứng bằng nhau</text>
  </svg>`,

  14: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Trường hợp c-g-c và g-c-g -->
    <rect x="25" y="15" width="215" height="80" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
    <text x="132" y="38" text-anchor="middle" font-size="12" font-black fill="#a16207">CẠNH - GÓC - CẠNH (c-g-c)</text>
    <text x="132" y="60" text-anchor="middle" font-size="11" fill="#475569">Góc xen giữa hai cạnh</text>
    <text x="132" y="80" text-anchor="middle" font-size="11" font-bold fill="#854d0e">AB = A'B'; Â = Â'; AC = A'C'</text>

    <rect x="260" y="15" width="215" height="80" rx="10" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5"/>
    <text x="367" y="38" text-anchor="middle" font-size="12" font-black fill="#0f766e">GÓC - CẠNH - GÓC (g-c-g)</text>
    <text x="367" y="60" text-anchor="middle" font-size="11" fill="#475569">Một cạnh và hai góc kề</text>
    <text x="367" y="80" text-anchor="middle" font-size="11" font-bold fill="#115e59">B̂ = B̂'; BC = B'C'; Ĉ = Ĉ'</text>
    <text x="250" y="112" text-anchor="middle" font-size="10.5" font-medium fill="#64748b">Lưu ý: Góc phải nằm đúng vị trí xen giữa đối với trường hợp c-g-c</text>
  </svg>`,

    15: `<svg viewBox="0 0 500 150" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Tam giác 1: Cạnh huyền - Góc nhọn -->
    <g transform="translate(45, 10)">
      <polygon points="15,75 125,75 15,15" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <rect x="15" y="65" width="10" height="10" fill="none" stroke="#2563eb" stroke-width="1.5"/>
      <text x="75" y="38" font-size="10" font-bold fill="#e11d48">Cạnh huyền</text>
      <path d="M 110 75 A 15 15 0 0 1 115 65" fill="none" stroke="#10b981" stroke-width="2.5"/>
      <text x="70" y="98" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">1. Huyền - Góc nhọn</text>
    </g>
    <!-- Vách ngăn cách -->
    <line x1="250" y1="12" x2="250" y2="95" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,3"/>
    <!-- Tam giác 2: Cạnh huyền - Cạnh góc vuông -->
    <g transform="translate(295, 10)">
      <polygon points="15,75 125,75 15,15" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
      <rect x="15" y="65" width="10" height="10" fill="none" stroke="#059669" stroke-width="1.5"/>
      <text x="75" y="38" font-size="10" font-bold fill="#e11d48">Cạnh huyền</text>
      <line x1="10" y1="45" x2="20" y2="45" stroke="#f59e0b" stroke-width="2.5"/>
      <text x="70" y="98" text-anchor="middle" font-size="11" font-bold fill="#047857">2. Huyền - Cạnh góc vuông</text>
    </g>
    <!-- Hộp ghi chú chân trang có pill nền thanh lịch -->
    <rect x="35" y="118" width="430" height="24" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
    <text x="250" y="134" text-anchor="middle" font-size="10.5" font-medium fill="#475569">Áp dụng định lí Py-ta-go suy ra cạnh góc vuông còn lại bằng nhau (đưa về c-c-c)</text>
  </svg>`,

  16: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Tam giác cân và đường trung trực -->
    <g transform="translate(60, 10)">
      <polygon points="10,85 110,85 60,15" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <line x1="33" y1="48" x2="37" y2="52" stroke="#ef4444" stroke-width="2"/>
      <line x1="83" y1="48" x2="87" y2="52" stroke="#ef4444" stroke-width="2"/>
      <path d="M 25 85 A 15 15 0 0 0 20 73" fill="none" stroke="#2563eb" stroke-width="2"/>
      <path d="M 95 85 A 15 15 0 0 1 100 73" fill="none" stroke="#2563eb" stroke-width="2"/>
      <text x="60" y="103" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">Tam giác cân: AB = AC, B̂ = Ĉ</text>
    </g>
    <g transform="translate(280, 15)">
      <line x1="20" y1="55" x2="140" y2="55" stroke="#334155" stroke-width="2.5"/>
      <circle cx="80" cy="55" r="3" fill="#e11d48"/>
      <line x1="80" y1="10" x2="80" y2="85" stroke="#e11d48" stroke-width="2"/>
      <rect x="80" y="47" width="8" height="8" fill="none" stroke="#e11d48" stroke-width="1.5"/>
      <text x="80" y="100" text-anchor="middle" font-size="11" font-bold fill="#e11d48">Đường trung trực d ⊥ AB tại trung điểm</text>
    </g>
  </svg>`,

  17: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Thu thập và phân loại dữ liệu -->
    <rect x="25" y="20" width="215" height="70" rx="10" fill="#fdf4ff" stroke="#c026d3" stroke-width="1.8"/>
    <text x="132" y="45" text-anchor="middle" font-size="12" font-black fill="#a21caf">DỮ LIỆU ĐỊNH TÍNH</text>
    <text x="132" y="68" text-anchor="middle" font-size="11" fill="#475569">Chữ, tên danh mục (Màu sắc, Học lực...)</text>

    <rect x="260" y="20" width="215" height="70" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
    <text x="367" y="45" text-anchor="middle" font-size="12" font-black fill="#1d4ed8">DỮ LIỆU ĐỊNH LƯỢNG</text>
    <text x="367" y="68" text-anchor="middle" font-size="11" fill="#475569">Số liệu đo đạc (Chiều cao, Điểm số, Cân nặng...)</text>
    <text x="250" y="103" text-anchor="middle" font-size="10.5" font-medium fill="#64748b">Tiêu chí tính đại diện: Dữ liệu phải đảm bảo tính toàn diện và không thiên vị</text>
  </svg>`,

  18: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Biểu đồ hình quạt tròn -->
    <g transform="translate(130, 60)">
      <circle cx="0" cy="0" r="45" fill="#f1f5f9"/>
      <!-- Quạt 1: 50% = 180 deg -->
      <path d="M 0 0 L 45 0 A 45 45 0 0 1 -45 0 Z" fill="#3b82f6"/>
      <!-- Quạt 2: 25% = 90 deg -->
      <path d="M 0 0 L -45 0 A 45 45 0 0 1 0 -45 Z" fill="#10b981"/>
      <!-- Quạt 3: 25% = 90 deg -->
      <path d="M 0 0 L 0 -45 A 45 45 0 0 1 45 0 Z" fill="#f59e0b"/>
      <circle cx="0" cy="0" r="12" fill="#ffffff"/>
    </g>
    <!-- Chú giải -->
    <g transform="translate(240, 25)" font-size="11" font-bold>
      <rect x="0" y="5" width="12" height="12" rx="3" fill="#3b82f6"/><text x="20" y="16" fill="#1e293b">Loại A: 50% (Góc 180°)</text>
      <rect x="0" y="30" width="12" height="12" rx="3" fill="#10b981"/><text x="20" y="41" fill="#1e293b">Loại B: 25% (Góc 90°)</text>
      <rect x="0" y="55" width="12" height="12" rx="3" fill="#f59e0b"/><text x="20" y="66" fill="#1e293b">Loại C: 25% (Góc 90°)</text>
    </g>
    <text x="250" y="112" text-anchor="middle" font-size="10.5" font-medium fill="#475569">Hình quạt tròn: Biểu diễn cơ cấu tỉ lệ phần trăm của từng phần so với tổng thể (100%)</text>
  </svg>`,

  19: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Biểu đồ đoạn thẳng -->
    <line x1="60" y1="95" x2="440" y2="95" stroke="#475569" stroke-width="2"/>
    <line x1="60" y1="95" x2="60" y2="20" stroke="#475569" stroke-width="2"/>
    <polygon points="60,15 56,22 64,22" fill="#475569"/>
    <!-- Điểm và đường gấp khúc -->
    <polyline points="100,75 180,45 260,60 340,30 420,35" fill="none" stroke="#2563eb" stroke-width="2.5"/>
    <circle cx="100" cy="75" r="4" fill="#ef4444"/><text x="100" y="90" font-size="9" text-anchor="middle">T1</text>
    <circle cx="180" cy="45" r="4" fill="#ef4444"/><text x="180" y="90" font-size="9" text-anchor="middle">T2</text>
    <circle cx="260" cy="60" r="4" fill="#ef4444"/><text x="260" y="90" font-size="9" text-anchor="middle">T3</text>
    <circle cx="340" cy="30" r="4" fill="#ef4444"/><text x="340" y="90" font-size="9" text-anchor="middle">T4</text>
    <circle cx="420" cy="35" r="4" fill="#ef4444"/><text x="420" y="90" font-size="9" text-anchor="middle">T5</text>
    <text x="250" y="112" text-anchor="middle" font-size="10.5" font-medium fill="#475569">Biểu đồ đoạn thẳng: Thể hiện xu hướng biến thiên của số liệu theo thời gian</text>
  </svg>`,

  20: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Tỉ lệ thức -->
    <rect x="40" y="18" width="420" height="70" rx="12" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
    <text x="130" y="58" font-size="20" font-mono font-black fill="#1d4ed8">a / b = c / d</text>
    <line x1="225" y1="35" x2="275" y2="35" stroke="#059669" stroke-width="2"/>
    <line x1="225" y1="42" x2="275" y2="42" stroke="#059669" stroke-width="2"/>
    <text x="360" y="58" font-size="20" font-mono font-black fill="#059669">a · d = b · c</text>
    <text x="250" y="102" text-anchor="middle" font-size="11" font-bold fill="#475569">Tích ngoại tỉ bằng tích trung tỉ (với a, b, c, d ≠ 0)</text>
  </svg>`,

  21: `<svg viewBox="0 0 500 115" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Dãy tỉ số bằng nhau -->
    <rect x="25" y="18" width="450" height="70" rx="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
    <text x="250" y="44" text-anchor="middle" font-size="14" font-mono font-black fill="#15803d">x/a = y/b = z/c = (x + y + z)/(a + b + c)</text>
    <text x="250" y="68" text-anchor="middle" font-size="13" font-mono font-bold fill="#166534">= (x - y + z)/(a - b + c)</text>
    <text x="250" y="105" text-anchor="middle" font-size="10.5" font-medium fill="#475569">Tính chất áp dụng giải bài toán chia phần tỉ lệ thuận và phân phối thực tế</text>
  </svg>`,

  22: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Đại lượng tỉ lệ thuận y = kx -->
    <line x1="50" y1="95" x2="450" y2="95" stroke="#475569" stroke-width="2"/>
    <line x1="120" y1="105" x2="120" y2="15" stroke="#475569" stroke-width="2"/>
    <line x1="90" y1="105" x2="350" y2="25" stroke="#2563eb" stroke-width="2.5"/>
    <circle cx="120" cy="95" r="3.5" fill="#0f172a"/><text x="110" y="108" font-size="10">O</text>
    <circle cx="200" cy="71" r="3.5" fill="#ef4444"/><circle cx="280" cy="47" r="3.5" fill="#ef4444"/>
    <text x="360" y="30" font-size="14" font-mono font-black fill="#2563eb">y = k · x (k ≠ 0)</text>
    <text x="250" y="112" text-anchor="middle" font-size="10.5" font-medium fill="#475569">Tỉ số hai giá trị tương ứng luôn không đổi: y₁/x₁ = y₂/x₂ = k</text>
  </svg>`,

  23: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Đại lượng tỉ lệ nghịch y = a/x -->
    <line x1="50" y1="95" x2="450" y2="95" stroke="#475569" stroke-width="2"/>
    <line x1="100" y1="105" x2="100" y2="15" stroke="#475569" stroke-width="2"/>
    <path d="M 120 25 Q 140 85 400 90" fill="none" stroke="#e11d48" stroke-width="2.5"/>
    <text x="270" y="45" font-size="14" font-mono font-black fill="#e11d48">y = a / x (hoặc x · y = a)</text>
    <text x="250" y="112" text-anchor="middle" font-size="10.5" font-medium fill="#475569">Tích hai giá trị tương ứng luôn không đổi: x₁ · y₁ = x₂ · y₂ = a</text>
  </svg>`,

  24: `<svg viewBox="0 0 500 115" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Biểu thức đại số hình học -->
    <rect x="60" y="25" width="220" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="170" y="18" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">Chiều dài: x + 4</text>
    <text x="45" y="60" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">Rộng: x</text>
    <text x="170" y="58" text-anchor="middle" font-size="12" font-bold fill="#1e293b">Diện tích S = x(x + 4)</text>
    <g transform="translate(320, 35)">
      <text x="0" y="15" font-size="11" font-bold fill="#0f172a">• Biểu thức đại số gồm:</text>
      <text x="10" y="32" font-size="10.5" fill="#475569">Số, biến số (x, y...) và các phép toán</text>
      <text x="0" y="52" font-size="11" font-bold fill="#16a34a">• Giá trị của biểu thức tại x = x₀</text>
    </g>
  </svg>`,

  25: `<svg viewBox="0 0 500 110" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Đa thức một biến -->
    <rect x="25" y="18" width="450" height="70" rx="12" fill="#faf5ff" stroke="#a855f7" stroke-width="2"/>
    <text x="250" y="45" text-anchor="middle" font-size="15" font-mono font-black fill="#6b21a8">P(x) = 5x⁴ - 2x³ + 7x - 9</text>
    <text x="90" y="75" text-anchor="middle" font-size="10" font-bold fill="#a855f7">Hệ số cao nhất: 5</text>
    <text x="250" y="75" text-anchor="middle" font-size="10" font-bold fill="#a855f7">Bậc của P(x): 4</text>
    <text x="400" y="75" text-anchor="middle" font-size="10" font-bold fill="#a855f7">Hệ số tự do: -9</text>
    <text x="250" y="103" text-anchor="middle" font-size="10.5" font-medium fill="#475569">Nghiệm của đa thức là giá trị x₀ sao cho P(x₀) = 0</text>
  </svg>`,

  26: `<svg viewBox="0 0 500 115" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Cộng trừ đa thức một biến theo cột dọc -->
    <g transform="translate(130, 20)" font-mono font-bold font-size="13">
      <text x="40" y="20" fill="#1e293b">P(x) = 3x³ + 2x² - 5x + 1</text>
      <text x="15" y="42" fill="#2563eb">+</text>
      <text x="40" y="42" fill="#1e293b">Q(x) =  x³ - 4x² + 2x - 3</text>
      <line x1="20" y1="52" x2="240" y2="52" stroke="#475569" stroke-width="1.8"/>
      <text x="40" y="72" fill="#16a34a">     = 4x³ - 2x² - 3x - 2</text>
    </g>
    <text x="250" y="106" text-anchor="middle" font-size="10.5" font-medium fill="#475569">Đặt tính cột dọc: Xếp các hạng tử cùng lũy thừa thẳng cột trước khi cộng/trừ</text>
  </svg>`,

  27: `<svg viewBox="0 0 500 115" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Nhân đa thức một biến -->
    <rect x="40" y="20" width="420" height="68" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
    <text x="250" y="44" text-anchor="middle" font-size="14" font-mono font-bold fill="#15803d">A(B + C) = A·B + A·C</text>
    <text x="250" y="68" text-anchor="middle" font-size="13" font-mono font-bold fill="#166534">(A + B)(C + D) = A·C + A·D + B·C + B·D</text>
    <text x="250" y="104" text-anchor="middle" font-size="10.5" font-medium fill="#475569">Nhân từng hạng tử của đa thức này với từng hạng tử của đa thức kia rồi thu gọn</text>
  </svg>`,

  28: `<svg viewBox="0 0 500 115" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Phép chia đa thức một biến -->
    <rect x="50" y="20" width="400" height="68" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
    <text x="250" y="48" text-anchor="middle" font-size="15" font-mono font-black fill="#1d4ed8">A(x) = B(x) · Q(x) + R(x)</text>
    <text x="250" y="72" text-anchor="middle" font-size="11" font-bold fill="#475569">Đa thức bị chia = Đa thức chia × Thương + Đa thức dư (bậc R < bậc B)</text>
    <text x="250" y="104" text-anchor="middle" font-size="10.5" font-medium fill="#64748b">Khi R(x) = 0 thì A(x) chia hết cho B(x)</text>
  </svg>`,

  29: `<svg viewBox="0 0 500 115" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Biến cố chắc chắn, không thể, ngẫu nhiên -->
    <rect x="25" y="20" width="135" height="65" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
    <text x="92" y="44" text-anchor="middle" font-size="11" font-black fill="#15803d">CHẮC CHẮN</text>
    <text x="92" y="65" text-anchor="middle" font-size="10" fill="#475569">Luôn xảy ra (P = 1)</text>

    <rect x="182" y="20" width="135" height="65" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="249" y="44" text-anchor="middle" font-size="11" font-black fill="#b91c1c">KHÔNG THỂ</text>
    <text x="249" y="65" text-anchor="middle" font-size="10" fill="#475569">Không bao giờ xảy ra (P = 0)</text>

    <rect x="340" y="20" width="135" height="65" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="407" y="44" text-anchor="middle" font-size="11" font-black fill="#1d4ed8">NGẪU NHIÊN</text>
    <text x="407" y="65" text-anchor="middle" font-size="10" fill="#475569">Có thể xảy ra hoặc không</text>
    <text x="250" y="104" text-anchor="middle" font-size="10.5" font-medium fill="#475569">Ví dụ: Tung xúc xắc mặt 7 chấm là biến cố không thể; mặt ≤ 6 là biến cố chắc chắn</text>
  </svg>`,

  30: `<svg viewBox="0 0 500 115" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Xác suất của biến cố: Xúc xắc 6 mặt -->
    <g transform="translate(60, 25)">
      <rect x="0" y="0" width="50" height="50" rx="8" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <circle cx="15" cy="15" r="4" fill="#ef4444"/><circle cx="35" cy="35" r="4" fill="#ef4444"/>
      <circle cx="25" cy="25" r="4" fill="#ef4444"/>
    </g>
    <g transform="translate(160, 25)">
      <text x="0" y="22" font-size="13" font-bold fill="#1e293b">Xác suất P(A) = k / n</text>
      <text x="0" y="45" font-size="10.5" fill="#475569">• k: Số kết quả thuận lợi cho A</text>
      <text x="0" y="62" font-size="10.5" fill="#475569">• n: Tổng số kết quả có thể xảy ra</text>
    </g>
    <text x="250" y="104" text-anchor="middle" font-size="10.5" font-medium fill="#475569">Xác suất của biến cố luôn nằm trong khoảng từ 0 đến 1: 0 ≤ P(A) ≤ 1</text>
  </svg>`,

    31: `<svg viewBox="0 0 500 130" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Quan hệ góc và cạnh đối diện -->
    <polygon points="80,85 410,85 180,18" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
    <text x="175" y="12" font-size="12" font-bold>A (Góc tù / Lớn nhất)</text>
    <text x="65" y="95" font-size="11" font-bold>B</text>
    <text x="420" y="95" font-size="11" font-bold>C</text>
    <line x1="80" y1="88" x2="410" y2="88" stroke="#dc2626" stroke-width="3"/>
    <text x="245" y="103" text-anchor="middle" font-size="10.5" font-black fill="#dc2626">Cạnh BC đối diện dài nhất</text>
    <text x="250" y="123" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">Trong một tam giác: Cạnh đối diện góc lớn hơn là cạnh lớn hơn và ngược lại</text>
  </svg>`,

  32: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Đường vuông góc và đường xiên -->
    <line x1="40" y1="95" x2="460" y2="95" stroke="#334155" stroke-width="2.5"/><text x="470" y="99" font-size="12" font-bold>d</text>
    <circle cx="160" cy="25" r="4" fill="#0f172a"/><text x="160" y="15" text-anchor="middle" font-size="12" font-bold>A</text>
    <line x1="160" y1="25" x2="160" y2="95" stroke="#ef4444" stroke-width="2.5"/><rect x="160" y="85" width="10" height="10" fill="none" stroke="#ef4444" stroke-width="1.5"/><text x="160" y="110" font-size="11" font-bold fill="#ef4444">H (vuông góc)</text>
    <line x1="160" y1="25" x2="280" y2="95" stroke="#2563eb" stroke-width="2"/><text x="280" y="110" font-size="11" font-bold fill="#2563eb">B (xiên)</text>
    <line x1="160" y1="25" x2="390" y2="95" stroke="#059669" stroke-width="2"/><text x="390" y="110" font-size="11" font-bold fill="#059669">C (xiên)</text>
    <text x="320" y="45" font-size="11" font-black fill="#1e293b">Đoạn vuông góc ngắn nhất: AH < AB < AC</text>
  </svg>`,

  33: `<svg viewBox="0 0 500 115" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Bất đẳng thức tam giác -->
    <polygon points="100,85 360,85 220,25" fill="#eff6ff" stroke="#3b82f6" stroke-width="2.5"/>
    <text x="85" y="92" font-size="11" font-bold>B</text><text x="370" y="92" font-size="11" font-bold>C</text><text x="220" y="18" text-anchor="middle" font-size="11" font-bold>A</text>
    <text x="150" y="50" font-size="11" font-bold fill="#e11d48">c</text>
    <text x="300" y="50" font-size="11" font-bold fill="#059669">b</text>
    <text x="230" y="100" font-size="11" font-bold fill="#2563eb">a</text>
    <text x="250" y="112" text-anchor="middle" font-size="12" font-black fill="#1d4ed8">BẤT ĐẲNG THỨC: |b - c| < a < b + c</text>
  </svg>`,

  34: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Ba đường trung tuyến và Trọng tâm G -->
    <polygon points="100,95 400,95 240,20" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
    <!-- Trung điểm & trung tuyến -->
    <line x1="240" y1="20" x2="250" y2="95" stroke="#2563eb" stroke-width="1.8"/>
    <line x1="100" y1="95" x2="320" y2="57.5" stroke="#2563eb" stroke-width="1.8"/>
    <line x1="400" y1="95" x2="170" y2="57.5" stroke="#2563eb" stroke-width="1.8"/>
    <circle cx="245" cy="70" r="4.5" fill="#ef4444"/><text x="260" y="73" font-size="12" font-black fill="#ef4444">G</text>
    <text x="250" y="114" text-anchor="middle" font-size="11" font-bold fill="#1d4ed8">Trọng tâm G cách mỗi đỉnh bằng 2/3 độ dài đường trung tuyến: AG = 2/3 AM</text>
  </svg>`,

  35: `<svg viewBox="0 0 500 120" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Ba đường cao & Trực tâm H -->
    <polygon points="100,95 380,95 200,20" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
    <line x1="200" y1="20" x2="200" y2="95" stroke="#e11d48" stroke-width="1.8"/><rect x="200" y="87" width="8" height="8" fill="none" stroke="#e11d48"/>
    <line x1="100" y1="95" x2="270" y2="48" stroke="#e11d48" stroke-width="1.8"/>
    <line x1="380" y1="95" x2="160" y2="48" stroke="#e11d48" stroke-width="1.8"/>
    <circle cx="200" cy="62" r="4" fill="#047857"/><text x="215" y="65" font-size="12" font-black fill="#047857">H</text>
    <text x="250" y="114" text-anchor="middle" font-size="11" font-bold fill="#047857">Ba đường cao đồng quy tại Trực tâm H • Ba trung trực đồng quy tại Tâm ngoại tiếp O</text>
  </svg>`,

  36: `<svg viewBox="0 0 500 125" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Hình hộp chữ nhật 3D -->
    <g transform="translate(60, 15)">
      <!-- Khung trước -->
      <rect x="0" y="30" width="130" height="60" fill="#eff6ff" fill-opacity="0.6" stroke="#2563eb" stroke-width="2"/>
      <!-- Khung sau & nối -->
      <polygon points="0,30 40,0 170,0 130,30" fill="#dbeafe" fill-opacity="0.4" stroke="#2563eb" stroke-width="2"/>
      <polygon points="130,30 170,0 170,60 130,90" fill="#bfdbfe" fill-opacity="0.5" stroke="#2563eb" stroke-width="2"/>
      <!-- Nét khuất -->
      <line x1="0" y1="90" x2="40" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
      <line x1="40" y1="0" x2="40" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
      <line x1="40" y1="60" x2="170" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
      <!-- Kích thước -->
      <text x="65" y="105" text-anchor="middle" font-size="11" font-bold>a</text>
      <text x="140" y="70" font-size="11" font-bold>h</text>
      <text x="160" y="25" font-size="11" font-bold>b</text>
    </g>
    <g transform="translate(270, 30)">
      <text x="0" y="18" font-size="12" font-bold fill="#1d4ed8">HÌNH HỘP CHỮ NHẬT:</text>
      <text x="0" y="40" font-size="12" font-mono font-bold fill="#1e293b">• S_xq = 2(a + b) · h</text>
      <text x="0" y="60" font-size="12" font-mono font-bold fill="#1e293b">• V = a · b · h</text>
      <text x="0" y="80" font-size="11" fill="#475569">Hình lập phương: V = a³ ; S_xq = 4a²</text>
    </g>
  </svg>`,

  37: `<svg viewBox="0 0 500 125" class="w-full max-w-md mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
    <!-- Hình lăng trụ đứng tam giác 3D -->
    <g transform="translate(80, 15)">
      <!-- Đáy trên -->
      <polygon points="10,0 80,15 130,0" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
      <!-- Các mặt bên -->
      <polygon points="10,0 10,75 80,90 80,15" fill="#a7f3d0" fill-opacity="0.6" stroke="#059669" stroke-width="2"/>
      <polygon points="80,15 80,90 130,75 130,0" fill="#6ee7b7" fill-opacity="0.4" stroke="#059669" stroke-width="2"/>
      <!-- Đáy dưới -->
      <line x1="10" y1="75" x2="130" y2="75" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
      <!-- Chiều cao -->
      <line x1="140" y1="0" x2="140" y2="75" stroke="#e11d48" stroke-width="1.5"/>
      <text x="148" y="42" font-size="11" font-bold fill="#e11d48">h</text>
    </g>
    <g transform="translate(270, 30)">
      <text x="0" y="18" font-size="12" font-bold fill="#047857">LĂNG TRỤ ĐỨNG TAM GIÁC:</text>
      <text x="0" y="40" font-size="12" font-mono font-bold fill="#1e293b">• S_xq = C_đáy · h</text>
      <text x="0" y="60" font-size="12" font-mono font-bold fill="#1e293b">• V = S_đáy · h</text>
      <text x="0" y="80" font-size="11" fill="#475569">Mặt bên là các hình chữ nhật vuông góc với 2 đáy</text>
    </g>
  </svg>`
};

console.log('Total SVGs defined:', Object.keys(lessonSvgs).length);

// Flatten lessons and adapt content to toan_6 format
const allLessons = [];
let lessonIdCounter = 1;

rawChapters.forEach(chap => {
  const isVol1 = chap.chapterNum === 'I' || chap.chapterNum === 'II' || chap.chapterNum === 'III' || chap.chapterNum === 'IV' || chap.chapterNum === 'V';
  const vol = isVol1 ? 1 : 2;

  chap.lessons.forEach(l => {
    const curId = l.num || lessonIdCounter;
    lessonIdCounter++;

    // Format rich content
    const conceptsHtml = (l.coreConcepts || []).map((c, i) => `<li><strong>${i + 1}.</strong> ${c}</li>`).join('');
    const formulasHtml = (l.formulas && l.formulas.length > 0) ? `
      <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-800 text-xs">
        <strong class="text-blue-700 dark:text-blue-300 block mb-1">Công thức &amp; Tính chất:</strong>
        ${l.formulas.map(f => `• ${f}<br>`).join('')}
      </div>` : '';
    const methodsHtml = l.methods ? `
      <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs">
        <strong class="text-emerald-700 dark:text-emerald-300 block mb-1">Phương pháp giải toán:</strong>
        ${typeof l.methods === 'string' ? l.methods : l.methods.join('<br>')}
      </div>` : '';

    const content = `
      <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p><strong>1. Tóm tắt lý thuyết bài học:</strong></p>
        <ul class="list-none space-y-1.5 text-xs sm:text-sm">
          ${conceptsHtml}
        </ul>
        ${formulasHtml}
        ${methodsHtml}
        ${l.example ? `
        <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-xs">
          <strong class="text-amber-800 dark:text-amber-300 block mb-1">Ví dụ minh họa chuẩn:</strong>
          <p class="font-medium"><strong>Đề bài:</strong> ${l.example.problem}</p>
          <p class="mt-1 font-mono text-gray-800 dark:text-gray-200"><strong>Lời giải:</strong> ${l.example.solution}</p>
        </div>` : ''}
      </div>
    `;

    // Take the first quiz from l.quiz
    const qRaw = (l.quiz && l.quiz[0]) ? l.quiz[0] : {
      q: 'Khẳng định nào sau đây là đúng về kiến thức bài học?',
      options: ['Khẳng định đúng chuẩn SGK', 'Khẳng định sai 1', 'Khẳng định sai 2', 'Khẳng định sai 3'],
      answer: 0,
      explain: 'Kiến thức theo đúng quy tắc SGK Toán 7 Kết nối tri thức.'
    };

    allLessons.push({
      id: curId,
      vol: vol,
      chapter: `Chương ${chap.chapterNum}: ${chap.title}`,
      chapterId: chap.chapterNum,
      lessonNum: `Bài ${curId}`,
      title: l.title,
      desc: l.summary,
      content: content,
      svg: lessonSvgs[curId] || lessonSvgs[1],
      quiz: {
        q: qRaw.q,
        options: qRaw.options,
        ans: qRaw.answer,
        expl: qRaw.explain
      }
    });
  });
});

console.log('Total allLessons processed:', allLessons.length);

module.exports = {
  allLessons,
  rawChapters
};
