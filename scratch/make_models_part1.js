// scratch/make_models_part1.js
// Models for Lessons 1 to 15

const existingModels = require('./hoa12_reaction_models.js');

const models1to15 = {
  1: existingModels[1],
  2: existingModels[2],
  
  // Model 3: Ôn tập chương 1 - Ester - Lipid
  3: {
    lessonId: 3,
    tag: 'Mô hình chuyển hóa tổng hợp Ester – Lipid',
    title: 'Mô hình chu trình chuyển hóa Triglyceride: Hydrogen hóa dầu mỡ & Xà phòng hóa tổng thể',
    badge: 'Mô hình phản ứng Lipids',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrC1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9 z" fill="#059669" /></marker>
      </defs>
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <rect x="20" y="20" width="260" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="150" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">DẦU THỰC VẬT (GỐC KHÔNG NO)</text>
      <g transform="translate(45, 95)">
        <text x="0" y="0" font-size="10" font-weight="bold" fill="#047857">CH₂–O–CO–C₁₇H₃₃ (Oleic)</text>
        <text x="0" y="24" font-size="10" font-weight="bold" fill="#047857">CH –O–CO–C₁₇H₃₃ (1 lk C=C)</text>
        <text x="0" y="48" font-size="10" font-weight="bold" fill="#047857">CH₂–O–CO–C₁₇H₃₃</text>
        <rect x="145" y="10" width="60" height="20" rx="6" fill="#f59e0b"/>
        <text x="175" y="24" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">Thể lỏng</text>
      </g>
      <text x="150" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">Chứa liên kết C=C (chưa no)</text>

      <path d="M 288 115 L 308 115" stroke="#059669" stroke-width="2.5" marker-end="url(#arrC1)"/>

      <rect x="318" y="20" width="240" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="438" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1e40af" class="dark:fill-blue-300">HYDROGEN HÓA (+3H₂, Ni, t°)</text>
      <g transform="translate(345, 95)">
        <text x="0" y="0" font-size="10" font-weight="bold" fill="#1d4ed8">CH₂–O–CO–C₁₇H₃₅ (Stearic)</text>
        <text x="0" y="24" font-size="10" font-weight="bold" fill="#1d4ed8">CH –O–CO–C₁₇H₃₅ (No hoàn toàn)</text>
        <text x="0" y="48" font-size="10" font-weight="bold" fill="#1d4ed8">CH₂–O–CO–C₁₇H₃₅</text>
        <rect x="145" y="10" width="60" height="20" rx="6" fill="#2563eb"/>
        <text x="175" y="24" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">Thể rắn</text>
      </g>
      <text x="438" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">Chuyển dầu lỏng thành bơ nhân tạo</text>

      <path d="M 568 115 L 588 115" stroke="#059669" stroke-width="2.5" marker-end="url(#arrC1)"/>

      <rect x="598" y="20" width="244" height="190" rx="12" fill="#fffbeb" class="dark:fill-amber-950/20" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="720" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#b45309" class="dark:fill-amber-300">THỦY PHÂN KIỀM (+3NaOH)</text>
      <g transform="translate(620, 95)">
        <rect x="0" y="-5" width="85" height="40" rx="6" fill="#10b981"/>
        <text x="42.5" y="12" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">C₃H₅(OH)₃</text>
        <text x="42.5" y="26" text-anchor="middle" fill="#fff" font-size="8">Glycerol</text>
        <text x="95" y="18" font-size="14" font-weight="bold" fill="#b45309">+</text>
        <rect x="110" y="-5" width="95" height="40" rx="6" fill="#f59e0b"/>
        <text x="157.5" y="12" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">3 C₁₇H₃₅COONa</text>
        <text x="157.5" y="26" text-anchor="middle" fill="#fff" font-size="8">Xà phòng</text>
      </g>
      <text x="720" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">Sản xuất xà phòng &amp; glycerol</text>
    </svg>`,
    mechanism: 'Chất béo lỏng (dầu thực vật chứa gốc acid béo không no như oleic) được hydrogen hóa xúc tác Ni ở nhiệt độ cao để chuyển thành chất béo rắn (margarine/bơ nhân tạo). Khi đun nóng chất béo với dung dịch NaOH, 3 liên kết ester bị cắt đứt hoàn toàn giải phóng 1 phân tử glycerol và 3 phân tử muối sodium của acid béo (thành phần chính của xà phòng).'
  },

  4: existingModels[4],

  // Model 5: Saccharose & Maltose
  5: {
    lessonId: 5,
    tag: 'Mô hình thủy phân liên kết Glycosidic',
    title: 'Mô hình cơ chế phân tử thủy phân Disaccharide: Saccharose + H₂O → Glucose + Fructose',
    badge: 'Mô hình liên kết α-1,β-2-Glycosidic',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrS5" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9 z" fill="#0284c7" /></marker></defs>
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <rect x="20" y="20" width="370" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="205" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">PHÂN TỬ SACCHAROSE (C₁₂H₂₂O₁₁)</text>
      <g transform="translate(60, 115)">
        <circle cx="45" cy="0" r="30" fill="#38bdf8" opacity="0.3" stroke="#0284c7" stroke-width="2"/>
        <text x="45" y="4" text-anchor="middle" font-weight="bold" font-size="10" fill="#0369a1">α-Glucose</text>
        <!-- Cầu nối Oxy -->
        <circle cx="125" cy="0" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
        <text x="125" y="4" text-anchor="middle" font-weight="bold" font-size="10" fill="#fff">–O–</text>
        <line x1="75" y1="0" x2="111" y2="0" stroke="#ef4444" stroke-width="2.5"/>
        <line x1="139" y1="0" x2="175" y2="0" stroke="#ef4444" stroke-width="2.5"/>
        <text x="125" y="-22" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">Cầu α-1,β-2-glycosidic</text>
        <circle cx="205" cy="0" r="30" fill="#a855f7" opacity="0.3" stroke="#7e22ce" stroke-width="2"/>
        <text x="205" y="4" text-anchor="middle" font-weight="bold" font-size="10" fill="#6b21a8">β-Fructose</text>
      </g>
      <text x="205" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Không còn nhóm –OH hemiacetal tự do (Không tráng bạc)</text>

      <path d="M 400 115 L 420 115" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrS5)"/>

      <rect x="430" y="20" width="410" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="635" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">SẢN PHẨM THỦY PHÂN (+H₂O, H⁺ hoặc Enzyme)</text>
      <g transform="translate(460, 115)">
        <g transform="translate(40, 0)">
          <circle cx="0" cy="0" r="28" fill="#38bdf8" opacity="0.4" stroke="#0284c7" stroke-width="2"/>
          <text x="0" y="4" text-anchor="middle" font-weight="bold" font-size="10" fill="#0369a1">D-Glucose</text>
          <text x="0" y="42" text-anchor="middle" font-size="9" font-weight="bold" fill="#059669">Mở vòng → Tráng bạc (+2Ag)</text>
        </g>
        <text x="120" y="4" font-size="18" font-weight="bold" fill="#64748b">+</text>
        <g transform="translate(200, 0)">
          <circle cx="0" cy="0" r="28" fill="#a855f7" opacity="0.4" stroke="#7e22ce" stroke-width="2"/>
          <text x="0" y="4" text-anchor="middle" font-weight="bold" font-size="10" fill="#6b21a8">D-Fructose</text>
          <text x="0" y="42" text-anchor="middle" font-size="9" font-weight="bold" fill="#7e22ce">Chuyển hóa base → Tráng bạc</text>
        </g>
      </g>
      <text x="635" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">1 mol Saccharose sau thủy phân tạo 2 mol hexose tráng gương</text>
    </svg>`,
    mechanism: 'Phân tử Saccharose được cấu tạo từ 1 gốc α-glucose và 1 gốc β-fructose liên kết qua cầu oxy α-1,β-2-glycosidic. Do cả hai nhóm –OH hemiacetal đã tham gia liên kết, phân tử không mở vòng được và không có tính khử. Dưới tác dụng của acid vô cơ hoặc enzyme invertase, liên kết glycosidic bị cắt đứt tạo hỗn hợp đường nghịch đảo gồm glucose và fructose có khả năng tham gia phản ứng tráng bạc.'
  },

  // Model 6: Tinh bột & Cellulose
  6: {
    lessonId: 6,
    tag: 'Mô hình tương tác đại phân tử polysaccharide',
    title: 'Mô hình phân tử Amylose xoắn giữ phân tử Iodine (Xanh tím) vs Mạch kéo dài Cellulose',
    badge: 'Mô hình hấp phụ Iodine & Mạng sợi',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <rect x="20" y="20" width="390" height="190" rx="12" fill="#faf5ff" class="dark:fill-purple-950/20" stroke="#c084fc" stroke-width="1.2"/>
      <text x="215" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#7e22ce" class="dark:fill-purple-300">TINH BỘT (AMYLOSE) HẤP PHỤ IODINE</text>
      <g transform="translate(80, 115)">
        <!-- Lò xo xoắn Amylose -->
        <path d="M 0 0 Q 30 -40 60 0 Q 90 40 120 0 Q 150 -40 180 0 Q 210 40 240 0" fill="none" stroke="#8b5cf6" stroke-width="5" stroke-linecap="round"/>
        <!-- Các phân tử I2 kẹp ở lõi -->
        <circle cx="60" cy="0" r="9" fill="#1e1b4b" stroke="#4338ca" stroke-width="2"/>
        <text x="60" y="3" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">I₂</text>
        <circle cx="120" cy="0" r="9" fill="#1e1b4b" stroke="#4338ca" stroke-width="2"/>
        <text x="120" y="3" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">I₂</text>
        <circle cx="180" cy="0" r="9" fill="#1e1b4b" stroke="#4338ca" stroke-width="2"/>
        <text x="180" y="3" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">I₂</text>
        <rect x="75" y="35" width="120" height="20" rx="6" fill="#1e1b4b"/>
        <text x="135" y="48" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">MÀU XANH TÍM ĐẶC TRƯNG</text>
      </g>
      <text x="215" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#7e22ce">Đun nóng: nhả I₂ mất màu; để nguội: xanh tím trở lại</text>

      <rect x="430" y="20" width="410" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="635" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">CELLULOSE (MẠCH THẲNG KÉO DÀI LIÊN KẾT HYDROGEN)</text>
      <g transform="translate(460, 100)">
        <!-- Mạch 1 -->
        <line x1="0" y1="0" x2="350" y2="0" stroke="#059669" stroke-width="4"/>
        <text x="175" y="-8" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">Mạch β-glucose thẳng hàng (không xoắn, không phân nhánh)</text>
        <!-- Liên kết H liên phân tử -->
        ${[40, 90, 140, 190, 240, 290].map(x => `
          <line x1="${x}" y1="5" x2="${x}" y2="25" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
        `).join('')}
        <text x="175" y="20" text-anchor="middle" font-size="8" font-weight="bold" fill="#dc2626">Liên kết hydrogen liên chuỗi</text>
        <!-- Mạch 2 -->
        <line x1="0" y1="30" x2="350" y2="30" stroke="#059669" stroke-width="4"/>
        <text x="175" y="50" text-anchor="middle" font-size="9" font-weight="bold" fill="#065f46">Tập hợp thành bó sợi vi thể (Microfibril) cực bền chắc</text>
      </g>
      <text x="635" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Không phản ứng màu với Iodine do mạch không xoắn</text>
    </svg>`,
    mechanism: 'Chuỗi Amylose của tinh bột cuộn xoắn lại thành hình lò xo tạo thành đường ống rỗng. Khi gặp iodine, các phân tử I₂ chui vào bên trong ống xoắn hình thành hợp chất bọc có màu xanh tím đặc trưng (khi đun nóng ống xoắn duỗi ra nhả I₂ làm mất màu). Ngược lại, Cellulose gồm các gốc β-glucose liên kết β-1,4-glycosidic tạo thành mạch thẳng tắp; các mạch xếp song song và liên kết chặt chẽ bằng mạng lưới liên kết hydrogen tạo nên cấu trúc sợi gỗ cực kỳ bền chắc.'
  },

  // Model 7: Ôn tập chương 2 - Carbohydrate
  7: {
    lessonId: 7,
    tag: 'Mô hình chu trình sinh địa hóa Carbohydrate',
    title: 'Mô hình chu trình tổng thể Carbohydrate: Quang hợp → Tinh bột/Cellulose → Thủy phân → Lên men rượu',
    badge: 'Mô hình chu trình Carbohydrate',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrC7" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9 z" fill="#059669" /></marker></defs>
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <g transform="translate(60, 115)">
        <circle cx="0" cy="0" r="35" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="0" y="-8" text-anchor="middle" font-weight="bold" font-size="10" fill="#854d0e">CO₂ + H₂O</text>
        <text x="0" y="8" text-anchor="middle" font-size="8" fill="#a16207">Ánh sáng mặt trời</text>
        <text x="0" y="20" text-anchor="middle" font-size="8" fill="#a16207">&amp; Diệp lục</text>
      </g>
      <path d="M 105 115 L 205 115" stroke="#059669" stroke-width="3" marker-end="url(#arrC7)"/>
      <text x="155" y="105" text-anchor="middle" font-size="9" font-weight="bold" fill="#059669">Quang hợp</text>

      <g transform="translate(260, 115)">
        <rect x="-50" y="-30" width="100" height="60" rx="10" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
        <text x="0" y="-8" text-anchor="middle" font-weight="bold" font-size="10" fill="#065f46">(C₆H₁₀O₅)n</text>
        <text x="0" y="12" text-anchor="middle" font-size="9" fill="#047857">Tinh bột / Gỗ</text>
      </g>
      <path d="M 320 115 L 430 115" stroke="#059669" stroke-width="3" marker-end="url(#arrC7)"/>
      <text x="375" y="105" text-anchor="middle" font-size="9" font-weight="bold" fill="#059669">Thủy phân (+H₂O)</text>

      <g transform="translate(485, 115)">
        <rect x="-50" y="-30" width="100" height="60" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
        <text x="0" y="-8" text-anchor="middle" font-weight="bold" font-size="10" fill="#0369a1">C₆H₁₂O₆</text>
        <text x="0" y="12" text-anchor="middle" font-size="9" fill="#0284c7">D-Glucose</text>
      </g>
      <path d="M 545 115 L 655 115" stroke="#059669" stroke-width="3" marker-end="url(#arrC7)"/>
      <text x="600" y="105" text-anchor="middle" font-size="9" font-weight="bold" fill="#059669">Lên men rượu</text>

      <g transform="translate(710, 115)">
        <rect x="-50" y="-30" width="100" height="60" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="0" y="-8" text-anchor="middle" font-weight="bold" font-size="10" fill="#b45309">2C₂H₅OH + 2CO₂</text>
        <text x="0" y="12" text-anchor="middle" font-size="9" fill="#92400e">Bio-Ethanol</text>
      </g>
      <text x="430" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Chu trình năng lượng sinh học khép kín cung cấp lương thực và nhiên liệu sinh học</text>
    </svg>`,
    mechanism: 'Carbohydrate được tổng hợp tự nhiên thông qua quá trình quang hợp của cây xanh từ CO₂ và H₂O. Tinh bột và cellulose đóng vai trò tích trữ năng lượng và cấu trúc tế bào thực vật. Khi thủy phân hoàn toàn với xúc tác acid hoặc enzyme, các polysaccharide chuyển hóa thành glucose. Glucose tiếp tục được lên men yếm khí tạo cồn sinh học ethanol (C₂H₅OH) và khí CO₂, khép kín chu trình carbon tự nhiên.'
  },

  // Model 8: Amine - Tính base & Cặp electron tự do
  8: {
    lessonId: 8,
    tag: 'Mô hình tương tác Acid – Base Amine',
    title: 'Mô hình cặp electron tự do của Nitrogen trong Amine & Phản ứng nhận Proton H⁺: CH₃NH₂ + H₂O ⇌ CH₃NH₃⁺ + OH⁻',
    badge: 'Mô hình cặp electron tự do :N',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrN8" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9 z" fill="#2563eb" /></marker></defs>
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <rect x="20" y="20" width="370" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="205" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">PHÂN TỬ METHYLAMINE (CH₃–NH₂)</text>
      <g transform="translate(160, 115)">
        <rect x="-65" y="-12" width="35" height="24" rx="6" fill="#0284c7"/>
        <text x="-47.5" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">CH₃</text>
        <line x1="-30" y1="0" x2="0" y2="0" stroke="#64748b" stroke-width="3"/>
        <circle cx="20" cy="0" r="20" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
        <text x="20" y="5" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">N</text>
        <!-- Cặp e tự do phía trên N -->
        <ellipse cx="20" cy="-30" rx="14" ry="8" fill="#fef08a" stroke="#eab308" stroke-width="1.5"/>
        <circle cx="16" cy="-30" r="2.5" fill="#ca8a04"/>
        <circle cx="24" cy="-30" r="2.5" fill="#ca8a04"/>
        <text x="20" y="-43" text-anchor="middle" font-size="8" font-weight="bold" fill="#ca8a04">Cặp e⁻ tự do</text>
        <!-- 2 nguyên tử H -->
        <circle cx="48" cy="-14" r="9" fill="#e2e8f0"/>
        <text x="48" y="-11" text-anchor="middle" font-size="8" font-weight="bold" fill="#0f172a">H</text>
        <circle cx="48" cy="14" r="9" fill="#e2e8f0"/>
        <text x="48" y="17" text-anchor="middle" font-size="8" font-weight="bold" fill="#0f172a">H</text>
      </g>
      <text x="205" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Nhóm –CH₃ đẩy electron làm tăng mật độ e trên N</text>

      <path d="M 400 115 L 420 115" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrN8)"/>

      <rect x="430" y="20" width="410" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="635" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">NHẬN PROTON H⁺ TỪ NƯỚC (TÍNH BASE)</text>
      <g transform="translate(560, 115)">
        <rect x="-65" y="-12" width="35" height="24" rx="6" fill="#0284c7"/>
        <text x="-47.5" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">CH₃</text>
        <line x1="-30" y1="0" x2="0" y2="0" stroke="#64748b" stroke-width="3"/>
        <circle cx="20" cy="0" r="20" fill="#2563eb"/>
        <text x="20" y="5" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">N⁺</text>
        <!-- H+ gắn vào cặp e -->
        <line x1="20" y1="-20" x2="20" y2="-8" stroke="#ef4444" stroke-width="2.5"/>
        <circle cx="20" cy="-28" r="9" fill="#ef4444"/>
        <text x="20" y="-25" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">H⁺</text>
        <text x="75" y="5" font-size="10" font-weight="bold" fill="#1e40af">CH₃NH₃⁺</text>
        <g transform="translate(130, 0)">
          <text x="0" y="5" font-size="14" font-weight="bold" fill="#64748b">+</text>
          <circle cx="35" cy="0" r="14" fill="#10b981"/>
          <text x="35" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">OH⁻</text>
        </g>
      </g>
      <text x="635" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Làm quỳ tím hóa xanh, phenolphthalein hóa hồng</text>
    </svg>`,
    mechanism: 'Nguyên tử Nitrogen trong nhóm amino của amine còn một cặp electron chưa liên kết. Khi tiếp xúc với nước, cặp electron tự do này dễ dàng nhận một proton H⁺ (đóng vai trò base theo Bronsted-Lowry và Lewis) để tạo cation alkylammonium [RNH₃]⁺ và giải phóng ion OH⁻, làm cho dung dịch amine có tính base và làm quỳ tím hóa xanh.'
  },

  9: existingModels[9],

  // Model 10: Protein & Enzyme
  10: {
    lessonId: 10,
    tag: 'Mô hình xúc tác sinh học Enzyme',
    title: 'Mô hình cơ chế Khóa và Chìa (Lock and Key) giữa Cơ chất & Trung tâm hoạt động của Enzyme',
    badge: 'Mô hình tương tác Enzyme – Cơ chất',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrE10" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9 z" fill="#059669" /></marker></defs>
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <rect x="20" y="20" width="260" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="150" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">1. ENZYME &amp; CƠ CHẤT TIẾP CẬN</text>
      <g transform="translate(150, 115)">
        <!-- Enzyme với khe rãnh -->
        <path d="M -50 30 C -50 0, -20 -10, 0 -10 C 20 -10, 50 0, 50 30 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
        <text x="0" y="20" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">Enzyme</text>
        <!-- Cơ chất khớp hình học -->
        <path d="M -20 -45 L 20 -45 L 12 -25 L -12 -25 Z" fill="#f59e0b" stroke="#d97706" stroke-width="1.8"/>
        <text x="0" y="-32" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">Cơ chất</text>
      </g>
      <text x="150" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Trung tâm hoạt động vừa khít cơ chất</text>

      <path d="M 288 115 L 308 115" stroke="#059669" stroke-width="2.5" marker-end="url(#arrE10)"/>

      <rect x="318" y="20" width="240" height="190" rx="12" fill="#fef3c7" class="dark:fill-amber-950/20" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="438" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#b45309" class="dark:fill-amber-300">2. PHỨC HỢP [ENZYME – CƠ CHẤT]</text>
      <g transform="translate(438, 115)">
        <path d="M -50 30 C -50 0, -20 -10, 0 -10 C 20 -10, 50 0, 50 30 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
        <path d="M -18 -8 L 18 -8 L 10 10 L -10 10 Z" fill="#f59e0b" stroke="#d97706" stroke-width="1.8"/>
        <text x="0" y="24" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">Khớp hoàn toàn</text>
      </g>
      <text x="438" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">Hạ thấp năng lượng hoạt hóa Ea</text>

      <path d="M 568 115 L 588 115" stroke="#059669" stroke-width="2.5" marker-end="url(#arrE10)"/>

      <rect x="598" y="20" width="244" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="720" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">3. GIẢI PHÓNG SẢN PHẨM</text>
      <g transform="translate(720, 115)">
        <!-- Enzyme nguyên vẹn -->
        <path d="M -50 30 C -50 0, -20 -10, 0 -10 C 20 -10, 50 0, 50 30 Z" fill="#3b82f6"/>
        <text x="0" y="20" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">Enzyme (tái tạo)</text>
        <!-- 2 mảnh sản phẩm rời ra -->
        <circle cx="-25" cy="-30" r="10" fill="#10b981"/>
        <text x="-25" y="-27" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">P1</text>
        <circle cx="25" cy="-30" r="10" fill="#06b6d4"/>
        <text x="25" y="-27" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">P2</text>
      </g>
      <text x="720" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Tốc độ tăng hàng triệu lần, tính chọn lọc cao</text>
    </svg>`,
    mechanism: 'Enzyme có cấu trúc không gian bậc 3, 4 phức tạp với một vùng rãnh đặc biệt gọi là trung tâm hoạt động. Trung tâm này có hình dạng hình học và nhóm chức khớp hoàn hảo với cơ chất theo mô hình "Khóa và chìa" (Lock and Key). Khi liên kết tạo phức hợp Enzyme – Cơ chất, năng lượng hoạt hóa của phản ứng giảm mạnh, các liên kết cần bẻ gãy bị kéo căng và phản ứng xảy ra nhanh gấp hàng triệu lần so với xúc tác hóa học thông thường.'
  },

  // Model 11: Ôn tập chương 3
  11: {
    lessonId: 11,
    tag: 'Mô hình nhận biết & cấu trúc Protein',
    title: 'Mô hình phản ứng màu Biuret: Peptide/Protein + Cu(OH)₂/NaOH → Phức màu Tím đặc trưng',
    badge: 'Mô hình phức màu Biuret',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <rect x="20" y="20" width="370" height="190" rx="12" fill="#faf5ff" class="dark:fill-purple-950/20" stroke="#c084fc" stroke-width="1.2"/>
      <text x="205" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#7e22ce" class="dark:fill-purple-300">ĐIỀU KIỆN PHẢN ỨNG MÀU BIURET</text>
      <g transform="translate(100, 115)">
        <rect x="0" y="-30" width="180" height="60" rx="10" fill="#f3e8ff" stroke="#a855f7" stroke-width="2"/>
        <text x="90" y="-8" text-anchor="middle" font-weight="bold" font-size="11" fill="#6b21a8">Từ Tripeptide trở lên</text>
        <text x="90" y="12" text-anchor="middle" font-size="9" fill="#7e22ce">(Tối thiểu 2 liên kết peptide –CO–NH–)</text>
      </g>
      <text x="205" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#7e22ce">Dipeptide không có phản ứng màu Biuret</text>

      <rect x="430" y="20" width="410" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="635" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">PHỨC CHẤT ĐỒNG – PEPTIDE MÀU TÍM</text>
      <g transform="translate(635, 115)">
        <circle cx="0" cy="0" r="22" fill="#7c3aed" stroke="#6d28d9" stroke-width="2.5"/>
        <text x="0" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">Cu²⁺</text>
        ${[-45, 45, 135, 225].map(deg => {
          const rad = (deg * Math.PI) / 180;
          const x = Math.cos(rad) * 45;
          const y = Math.sin(rad) * 45;
          return `
            <line x1="0" y1="0" x2="${x}" y2="${y}" stroke="#a855f7" stroke-width="2.5"/>
            <rect x="${x - 14}" y="${y - 10}" width="28" height="20" rx="5" fill="#9333ea"/>
            <text x="${x}" y="${y + 4}" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">N:–</text>
          `;
        }).join('')}
        <rect x="-70" y="45" width="140" height="20" rx="6" fill="#7c3aed"/>
        <text x="0" y="58" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">DUNG DỊCH MÀU TÍM ĐẶC TRƯNG</text>
      </g>
      <text x="635" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Dấu hiệu nhận biết đặc trưng của protein và peptide</text>
    </svg>`,
    mechanism: 'Hợp chất có từ 2 liên kết peptide trở lên (tripeptide, polypeptide, protein) trong môi trường kiềm (NaOH) có thể tạo phức chất phối trí với ion Cu²⁺ (từ CuSO₄). Nguyên tử Cu²⁺ liên kết phối trí với 4 nguyên tử Nitrogen của các nhóm peptide xung quanh tạo thành phức chất vòng càng chelate có màu tím (hoặc tím xanh) đặc trưng.'
  },

  12: existingModels[12],

  // Model 13: Vật liệu polymer - Lưu hóa cao su & Nylon-6,6
  13: {
    lessonId: 13,
    tag: 'Mô hình vật liệu polymer công nghệ cao',
    title: 'Mô hình mạng lưới cầu nối Disulfide (–S–S–) trong Lưu hóa Cao su & Liên kết Hydro Tơ Nylon-6,6',
    badge: 'Mô hình mạng lưới Cao su & Tơ',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <rect x="20" y="20" width="390" height="190" rx="12" fill="#fffbeb" class="dark:fill-amber-950/20" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="215" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#b45309" class="dark:fill-amber-300">CAO SU LƯU HÓA (CẦU NỐI –S–S–)</text>
      <g transform="translate(60, 100)">
        <line x1="0" y1="0" x2="310" y2="0" stroke="#059669" stroke-width="4"/>
        <text x="155" y="-8" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">Mạch polyisoprene 1</text>
        <!-- Cầu Disulfide S-S -->
        ${[60, 160, 250].map(x => `
          <line x1="${x}" y1="0" x2="${x}" y2="35" stroke="#f59e0b" stroke-width="3"/>
          <circle cx="${x}" cy="12" r="6" fill="#eab308"/>
          <text x="${x}" y="15" text-anchor="middle" fill="#fff" font-size="6" font-weight="bold">S</text>
          <circle cx="${x}" cy="23" r="6" fill="#eab308"/>
          <text x="${x}" y="26" text-anchor="middle" fill="#fff" font-size="6" font-weight="bold">S</text>
        `).join('')}
        <text x="210" y="22" font-size="9" font-weight="bold" fill="#b45309">Cầu disulfua –S–S–</text>
        <line x1="0" y1="35" x2="310" y2="35" stroke="#059669" stroke-width="4"/>
        <text x="155" y="52" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">Mạch polyisoprene 2</text>
      </g>
      <text x="215" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">Tăng độ đàn hồi, chịu nhiệt, khó tan trong dung môi</text>

      <rect x="430" y="20" width="410" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="635" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">TƠ NYLON-6,6 (TRÙNG NGƯNG AMIDE)</text>
      <g transform="translate(450, 115)">
        <text x="0" y="-15" font-size="9" font-weight="bold" fill="#1e40af">nH₂N–(CH₂)₆–NH₂ + nHOOC–(CH₂)₄–COOH</text>
        <path d="M 0 5 L 370 5" stroke="#2563eb" stroke-width="3"/>
        <text x="0" y="25" font-size="10" font-weight="bold" fill="#059669">→ [–NH–(CH₂)₆–NH–CO–(CH₂)₄–CO–]n + 2nH₂O</text>
        <rect x="230" y="38" width="140" height="20" rx="5" fill="#2563eb"/>
        <text x="300" y="51" text-anchor="middle" fill="#fff" font-weight="bold" font-size="8">Tơ Polyamide dai bền óng mượt</text>
      </g>
      <text x="635" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Ứng dụng dệt may, bít tất, dây cáp dù bền chắc</text>
    </svg>`,
    mechanism: 'Cao su thiên nhiên khi đun nóng với lưu huỳnh (lưu hóa) sẽ tạo ra các cầu nối disulfide –S–S– liên kết các mạch phân tử mạch thẳng thành mạng lưới không gian 3 chiều. Mạng lưới này giúp cao su đàn hồi tốt hơn, chịu ma sát tốt hơn và không bị chảy dính khi trời nóng. Tơ Nylon-6,6 được điều chế từ hexamethylenediamine và adipic acid qua phản ứng trùng ngưng tạo liên kết amide –CO–NH– có lực tương tác liên phân tử rất mạnh.'
  },

  // Model 14: Ôn tập chương 4
  14: {
    lessonId: 14,
    tag: 'Mô hình phân loại hình học phân tử Polymer',
    title: 'Mô hình so sánh 3 dạng cấu trúc hình học Polymer: Mạch không phân nhánh, Phân nhánh & Mạng không gian',
    badge: 'Mô hình cấu trúc mạch Polymer',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <rect x="20" y="20" width="260" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="150" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">1. MẠCH THẲNG (KHÔNG NHÁNH)</text>
      <g transform="translate(40, 100)">
        <path d="M 0 0 L 220 0" stroke="#0284c7" stroke-width="4"/>
        <path d="M 0 25 L 220 25" stroke="#0284c7" stroke-width="4"/>
        <text x="110" y="50" text-anchor="middle" font-size="9" font-weight="bold" fill="#0369a1">PE, PVC, Cellulose, Amylose</text>
      </g>
      <text x="150" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Xếp khít, độ bền kéo cao</text>

      <rect x="300" y="20" width="260" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="430" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">2. MẠCH PHÂN NHÁNH</text>
      <g transform="translate(320, 100)">
        <path d="M 0 0 L 220 0" stroke="#059669" stroke-width="4"/>
        <path d="M 50 0 L 80 30" stroke="#059669" stroke-width="3.5"/>
        <path d="M 140 0 L 170 30" stroke="#059669" stroke-width="3.5"/>
        <text x="110" y="50" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">Amylopectin, Glycogen</text>
      </g>
      <text x="430" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Nhánh cồng kềnh, dễ hòa tan hơn</text>

      <rect x="580" y="20" width="260" height="190" rx="12" fill="#fffbeb" class="dark:fill-amber-950/20" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="710" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#b45309" class="dark:fill-amber-300">3. MẠNG KHÔNG GIAN</text>
      <g transform="translate(600, 90)">
        <line x1="0" y1="0" x2="220" y2="0" stroke="#d97706" stroke-width="4"/>
        <line x1="50" y1="0" x2="50" y2="35" stroke="#ef4444" stroke-width="3"/>
        <line x1="160" y1="0" x2="160" y2="35" stroke="#ef4444" stroke-width="3"/>
        <line x1="0" y1="35" x2="220" y2="35" stroke="#d97706" stroke-width="4"/>
        <text x="110" y="60" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">Cao su lưu hóa, Nhựa Bakelite</text>
      </g>
      <text x="710" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">Không nóng chảy, không tan</text>
    </svg>`,
    mechanism: 'Polymer tồn tại ở 3 dạng cấu trúc hình học cơ bản: Mạch thẳng (PE, Cellulose) các chuỗi xếp song song bền cơ học; Mạch phân nhánh (Amylopectin) có các nhánh bên cản trở sự xếp chặt; Mạng không gian 3 chiều (Cao su lưu hóa, nhựa rezit/bakelite) các chuỗi được nối cứng với nhau bằng liên kết hóa học ngang, tạo độ cứng vượt trội, không thể nóng chảy mà bị phân hủy khi đun nóng.'
  },

  15: existingModels[15]
};

module.exports = models1to15;
