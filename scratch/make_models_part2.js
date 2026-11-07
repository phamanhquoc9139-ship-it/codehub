// scratch/make_models_part2.js
// Models for Lessons 16 to 30

const existingModels = require('./hoa12_reaction_models.js');

const models16to30 = {
  16: existingModels[16],

  // Model 17: Ôn tập chương 5 - Quy tắc Alpha & Pin điện
  17: {
    lessonId: 17,
    tag: 'Mô hình quy tắc phản ứng oxi hóa – khử',
    title: 'Mô hình quy tắc Alpha (α) trong dãy điện hóa: Cu²⁺ + Fe → Fe²⁺ + Cu (Oxi hóa mạnh + Khử mạnh)',
    badge: 'Mô hình quy tắc Alpha',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrAlp" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9 z" fill="#dc2626" /></marker></defs>
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <rect x="20" y="20" width="450" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="245" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">QUY TẮC ALPHA (α) TRÊN DÃY ĐIỆN HÓA</text>
      <g transform="translate(100, 115)">
        <!-- Cặp Fe2+/Fe -->
        <rect x="0" y="-40" width="70" height="30" rx="6" fill="#0284c7"/>
        <text x="35" y="-20" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">Fe²⁺</text>
        <line x1="35" y1="-10" x2="35" y2="10" stroke="#64748b" stroke-width="2"/>
        <rect x="0" y="10" width="70" height="30" rx="6" fill="#334155"/>
        <text x="35" y="30" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">Fe (khử mạnh)</text>
        <!-- Cặp Cu2+/Cu -->
        <rect x="220" y="-40" width="70" height="30" rx="6" fill="#ef4444"/>
        <text x="255" y="-20" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">Cu²⁺ (oxh mạnh)</text>
        <line x1="255" y1="-10" x2="255" y2="10" stroke="#64748b" stroke-width="2"/>
        <rect x="220" y="10" width="70" height="30" rx="6" fill="#ea580c"/>
        <text x="255" y="30" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">Cu</text>
        <!-- Nét vẽ Alpha -->
        <path d="M 220 -25 L 70 25 L 70 -25 L 220 25" fill="none" stroke="#dc2626" stroke-width="3.5" stroke-dasharray="4,3" marker-end="url(#arrAlp)"/>
        <text x="145" y="5" text-anchor="middle" font-weight="black" font-size="24" fill="#dc2626">α</text>
      </g>
      <text x="245" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Cu²⁺ + Fe → Fe²⁺ + Cu (Phản ứng tự diễn ra)</text>

      <rect x="490" y="20" width="350" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="665" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">Ý NGHĨA THỰC TIỄN</text>
      <g transform="translate(510, 75)">
        <text x="0" y="15" font-size="10" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Tính oxi hóa: Cu²⁺ &gt; Fe²⁺ &gt; Zn²⁺</text>
        <text x="0" y="38" font-size="10" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Tính khử: Zn &gt; Fe &gt; Cu</text>
        <text x="0" y="61" font-size="10" font-weight="bold" fill="#059669">• E°pin = E°(Cu²⁺/Cu) − E°(Fe²⁺/Fe) &gt; 0</text>
        <text x="0" y="84" font-size="10" font-weight="bold" fill="#1e40af">• Suất điện động chuẩn: 0.34 − (−0.44) = 0.78 V</text>
      </g>
      <text x="665" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Dự đoán chiều hướng mọi phản ứng thế kim loại</text>
    </svg>`,
    mechanism: 'Quy tắc Alpha (α) cho phép dự đoán chiều của phản ứng oxi hóa – khử giữa 2 cặp oxi hóa – khử trong dung dịch: Chất oxi hóa của cặp có thế điện cực chuẩn lớn hơn (Cu²⁺) sẽ tác dụng với chất khử của cặp có thế điện cực chuẩn nhỏ hơn (Fe) để tạo thành chất oxi hóa yếu hơn (Fe²⁺) và chất khử yếu hơn (Cu). Phản ứng tự diễn ra khi sức điện động chuẩn E°pin > 0.'
  },

  // Model 18: Cấu tạo & liên kết kim loại
  18: {
    lessonId: 18,
    tag: 'Mô hình liên kết kim loại',
    title: 'Mô hình mạng tinh thể kim loại & Biển electron tự do (Metallic Bonding Model)',
    badge: 'Mô hình biển electron (Electron Sea)',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <rect x="20" y="20" width="460" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="250" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">MẠNG TINH THỂ VÀ BIỂN ELECTRON TỰ DO</text>
      <g transform="translate(70, 70)">
        <!-- Biển electron nền mờ -->
        <rect x="0" y="0" width="360" height="100" rx="10" fill="#93c5fd" opacity="0.3"/>
        <!-- Lưới ion dương M n+ -->
        ${[0, 60, 120, 180, 240, 300].map(x => `
          <circle cx="${x + 30}" cy="25" r="16" fill="#1d4ed8" stroke="#1e40af" stroke-width="2"/>
          <text x="${x + 30}" y="30" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">Mⁿ⁺</text>
          <circle cx="${x + 30}" cy="75" r="16" fill="#1d4ed8" stroke="#1e40af" stroke-width="2"/>
          <text x="${x + 30}" y="80" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">Mⁿ⁺</text>
        `).join('')}
        <!-- Các hạt e- chuyển động tự do -->
        ${[20, 50, 90, 140, 170, 210, 260, 290, 330].map((x, idx) => `
          <circle cx="${x}" cy="${idx % 2 === 0 ? 50 : 20}" r="5" fill="#f59e0b"/>
          <text x="${x}" y="${idx % 2 === 0 ? 53 : 23}" text-anchor="middle" fill="#fff" font-size="6" font-weight="bold">e⁻</text>
        `).join('')}
      </g>
      <text x="250" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Lực hút tĩnh điện giữa ion Mⁿ⁺ và biển e⁻ tự do tạo liên kết kim loại</text>

      <rect x="500" y="20" width="340" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="670" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">4 TÍNH CHẤT VẬT LÍ CHUNG DO e⁻ GÂY RA</text>
      <g transform="translate(520, 70)">
        <text x="0" y="15" font-size="10" font-weight="bold" fill="#0284c7">• 1. Tính dẻo: Các lớp trượt lên nhau mà không vỡ</text>
        <text x="0" y="38" font-size="10" font-weight="bold" fill="#059669">• 2. Dẫn điện: e⁻ dịch chuyển có hướng (Ag &gt; Cu &gt; Au)</text>
        <text x="0" y="61" font-size="10" font-weight="bold" fill="#d97706">• 3. Dẫn nhiệt: e⁻ truyền động năng nhanh chóng</text>
        <text x="0" y="84" font-size="10" font-weight="bold" fill="#7c3aed">• 4. Ánh kim: e⁻ phản xạ hầu hết tia sáng nhìn thấy</text>
      </g>
      <text x="670" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Tất cả 4 tính chất vật lí chung đều do e⁻ tự do quyết định</text>
    </svg>`,
    mechanism: 'Trong tinh thể kim loại, các nguyên tử kim loại nhường electron hóa trị trở thành các cation Mⁿ⁺ nằm ở các nút mạng tinh thể, còn các electron hóa trị bứt ra tạo thành "biển electron tự do" di chuyển hỗn loạn giữa các cation. Liên kết kim loại chính là lực hút tĩnh điện giữa cation kim loại và biển electron tự do này, đem lại cho kim loại tính dẻo, tính dẫn điện, tính dẫn nhiệt và ánh kim.'
  },

  // Model 19: Tính chất kim loại - Tác dụng acid
  19: {
    lessonId: 19,
    tag: 'Mô hình phản ứng kim loại tác dụng acid',
    title: 'Mô hình nhường electron của Kim loại cho ion H⁺ giải phóng khí H₂: Fe + 2HCl → FeCl₂ + H₂↑',
    badge: 'Mô hình giải phóng H₂↑',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <g transform="translate(180, 115)">
        <rect x="-80" y="-45" width="60" height="90" rx="6" fill="#64748b" stroke="#334155" stroke-width="2"/>
        <text x="-50" y="5" text-anchor="middle" fill="#fff" font-weight="black" font-size="14">Fe</text>
        <!-- Bọt H2 thoát ra trên bề mặt sắt -->
        <circle cx="0" cy="-20" r="14" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2"/>
        <text x="0" y="-16" text-anchor="middle" fill="#0284c7" font-weight="bold" font-size="9">H₂↑</text>
        <circle cx="20" cy="-40" r="10" fill="#e0f2fe" stroke="#38bdf8"/>
        <text x="20" y="-37" text-anchor="middle" fill="#0284c7" font-size="8">H₂↑</text>
        <path d="M -20 -10 L 40 -10" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="3,3"/>
        <text x="10" y="-2" font-size="8" font-weight="bold" fill="#dc2626">2e⁻</text>
        <!-- Ion Fe2+ tan vào dung dịch -->
        <circle cx="50" cy="25" r="16" fill="#bbf7d0" stroke="#22c55e" stroke-width="2"/>
        <text x="50" y="29" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="10">Fe²⁺</text>
        <text x="85" y="29" font-size="10" font-weight="bold" fill="#059669">+ 2Cl⁻</text>
      </g>
      <rect x="490" y="20" width="350" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="665" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">ĐIỀU KIỆN PHẢN ỨNG VỚI ACID LOÃNG (HCl, H₂SO₄)</text>
      <g transform="translate(510, 75)">
        <text x="0" y="15" font-size="10" font-weight="bold" fill="#0284c7">• Kim loại đứng TRƯỚC Hydro trong dãy điện hóa (E° &lt; 0)</text>
        <text x="0" y="38" font-size="10" font-weight="bold" fill="#059669">• Ví dụ: Mg, Al, Zn, Fe nhường e cho H⁺</text>
        <text x="0" y="61" font-size="10" font-weight="bold" fill="#dc2626">• Cu, Ag, Au (E° &gt; 0) KHÔNG tác dụng với acid loãng</text>
        <text x="0" y="84" font-size="10" font-weight="bold" fill="#d97706">• Fe chỉ bị oxi hóa lên mức +2 (tạo muối FeCl₂)</text>
      </g>
      <text x="430" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Quá trình: Fe → Fe²⁺ + 2e⁻ kết hợp 2H⁺ + 2e⁻ → H₂↑</text>
    </svg>`,
    mechanism: 'Khi nhúng thanh kim loại có thế điện cực chuẩn âm hơn hydro (như Fe) vào dung dịch acid HCl loãng, các nguyên tử Fe trên bề mặt lập tức nhường electron: Fe → Fe²⁺ + 2e⁻ và tan vào dung dịch dưới dạng cation Fe²⁺. Các ion H⁺ trong acid di chuyển đến bề mặt thanh sắt nhận electron bị khử thành nguyên tử H, ghép đôi tạo phân tử khí H₂ sủi bọt thoát ra ngoài.'
  },

  // Model 20: Tách kim loại - Lò cao nhiệt luyện
  20: {
    lessonId: 20,
    tag: 'Mô hình công nghệ tách kim loại',
    title: 'Mô hình phản ứng Nhiệt luyện trong Lò Cao: Khí CO khử quặng sắt Fe₂O₃ → Fe + 3CO₂',
    badge: 'Mô hình nhiệt luyện quặng sắt',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <g transform="translate(80, 115)">
        <!-- Quặng Fe2O3 -->
        <rect x="0" y="-30" width="85" height="60" rx="8" fill="#f87171" stroke="#dc2626" stroke-width="2"/>
        <text x="42.5" y="-8" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">Fe₂O₃</text>
        <text x="42.5" y="10" text-anchor="middle" fill="#fff" font-size="9">Hematite đỏ</text>
        <!-- Luồng khí CO khử -->
        <path d="M 115 0 L 195 0" stroke="#f59e0b" stroke-width="4"/>
        <text x="155" y="-10" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">+ 3CO (Khí khử)</text>
        <text x="155" y="18" text-anchor="middle" font-size="9" fill="#d97706">t° cao (lò cao)</text>
        <!-- Sắt nóng chảy thu được -->
        <g transform="translate(225, 0)">
          <rect x="0" y="-30" width="85" height="60" rx="8" fill="#334155" stroke="#1e293b" stroke-width="2"/>
          <text x="42.5" y="-8" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">2 Fe</text>
          <text x="42.5" y="10" text-anchor="middle" fill="#fff" font-size="9">Gang / Thép lỏng</text>
        </g>
        <!-- Khí CO2 thoát ra -->
        <text x="340" y="5" font-size="14" font-weight="bold" fill="#64748b">+</text>
        <g transform="translate(365, 0)">
          <circle cx="30" cy="0" r="22" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
          <text x="30" y="4" text-anchor="middle" font-weight="bold" font-size="10" fill="#475569">3CO₂↑</text>
        </g>
      </g>
      <rect x="520" y="20" width="320" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="680" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">3 PHƯƠNG PHÁP TÁCH KIM LOẠI</text>
      <g transform="translate(540, 75)">
        <text x="0" y="15" font-size="10" font-weight="bold" fill="#b45309">• 1. Nhiệt luyện: Dùng CO, H₂, C khử oxit sau Al (Fe, Cu, Zn)</text>
        <text x="0" y="40" font-size="10" font-weight="bold" fill="#0284c7">• 2. Thủy luyện: Dùng Fe đẩy Cu²⁺ trong dung dịch muối</text>
        <text x="0" y="65" font-size="10" font-weight="bold" fill="#7c3aed">• 3. Điện phân nóng chảy: Bắt buộc cho kim loại mạnh (Al, Na, Ca)</text>
      </g>
      <text x="680" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Nhiệt luyện là phương pháp sản xuất gang thép lớn nhất thế giới</text>
    </svg>`,
    mechanism: 'Phương pháp nhiệt luyện sử dụng các chất khử mạnh như carbon monoxide (CO), H₂ hoặc than cốc C ở nhiệt độ cao để chiếm nguyên tử oxy trong oxit kim loại (đối với kim loại có độ hoạt động trung bình và yếu như Fe, Zn, Cu). Trong lò cao, khí CO lần lượt khử Fe₂O₃ → Fe₃O₄ → FeO → Fe nóng chảy chảy xuống đáy lò tạo thành gang lỏng.'
  },

  // Model 21: Hợp kim
  21: {
    lessonId: 21,
    tag: 'Mô hình vật liệu hợp kim tinh thể',
    title: 'Mô hình tinh thể Hợp kim Thay thế & Hợp kim Xen kẽ: Nguyên tử Carbon xen kẽ giữa các nguyên tử Sắt trong Thép',
    badge: 'Mô hình tinh thể Hợp kim',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <rect x="20" y="20" width="390" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="215" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">HỢP KIM XEN KẼ (THÉP: Fe + C)</text>
      <g transform="translate(60, 80)">
        ${[0, 50, 100, 150, 200, 250].map(x => `
          <circle cx="${x + 25}" cy="20" r="16" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
          <text x="${x + 25}" y="24" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">Fe</text>
          <circle cx="${x + 25}" cy="65" r="16" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
          <text x="${x + 25}" y="69" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">Fe</text>
        `).join('')}
        <!-- Nguyên tử Carbon nhỏ xen kẽ vào lỗ trống -->
        <circle cx="75" cy="42" r="8" fill="#1e293b"/>
        <text x="75" y="45" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">C</text>
        <circle cx="175" cy="42" r="8" fill="#1e293b"/>
        <text x="175" y="45" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold">C</text>
      </g>
      <text x="215" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Nguyên tử C chèn lỗ trống làm khóa các lớp trượt → Tăng độ cứng</text>

      <rect x="430" y="20" width="410" height="190" rx="12" fill="#fffbeb" class="dark:fill-amber-950/20" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="635" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#b45309" class="dark:fill-amber-300">HỢP KIM THAY THẾ (ĐỒNG THAU: Cu + Zn)</text>
      <g transform="translate(470, 80)">
        ${[0, 50, 100, 150, 200, 250].map((x, idx) => `
          <circle cx="${x + 25}" cy="20" r="16" fill="${idx % 3 === 1 ? '#eab308' : '#ea580c'}" stroke="#9a3412" stroke-width="1.5"/>
          <text x="${x + 25}" y="24" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">${idx % 3 === 1 ? 'Zn' : 'Cu'}</text>
          <circle cx="${x + 25}" cy="65" r="16" fill="${idx % 3 === 2 ? '#eab308' : '#ea580c'}" stroke="#9a3412" stroke-width="1.5"/>
          <text x="${x + 25}" y="69" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold">${idx % 3 === 2 ? 'Zn' : 'Cu'}</text>
        `).join('')}
      </g>
      <text x="635" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">Nguyên tử Zn thay thế vị trí Cu trong nút mạng tinh thể</text>
    </svg>`,
    mechanism: 'Hợp kim là vật liệu kim loại chứa hỗn hợp của một kim loại cơ bản với các kim loại hoặc phi kim khác. Trong hợp kim xen kẽ (như thép: C trong Fe), nguyên tử Carbon có bán kính nhỏ chui vào các lỗ trống giữa các nguyên tử Sắt, cản trở các lớp tinh thể trượt lên nhau làm cho thép cứng và bền hơn sắt nguyên chất rất nhiều. Trong hợp kim thay thế (như đồng thau Cu–Zn), nguyên tử kẽm thay thế trực tiếp vào vị trí của đồng trong mạng tinh thể.'
  },

  // Model 22: Ăn mòn kim loại
  22: {
    lessonId: 22,
    tag: 'Mô hình ăn mòn điện hóa pin vi mô',
    title: 'Mô hình ăn mòn điện hóa pin vi mô: Sắt (Fe) tiếp xúc với Carbon (C) trong màng không khí ẩm (O₂ + H₂O)',
    badge: 'Mô hình ăn mòn điện hóa Fe-C',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <g transform="translate(100, 100)">
        <!-- Màng nước điện li trên mặt -->
        <rect x="0" y="-35" width="360" height="35" fill="#38bdf8" opacity="0.3"/>
        <text x="180" y="-20" text-anchor="middle" font-size="9" font-weight="bold" fill="#0369a1">Màng nước hòa tan O₂ &amp; CO₂ (Dung dịch điện li)</text>
        <!-- Cực âm Fe -->
        <rect x="0" y="0" width="180" height="80" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
        <text x="90" y="30" text-anchor="middle" fill="#0f172a" font-weight="black" font-size="12">Fe (Cực âm Anode)</text>
        <text x="90" y="55" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">Fe → Fe²⁺ + 2e⁻ (Bị rỉ sét)</text>
        <!-- Dòng e chạy sang C -->
        <path d="M 120 15 L 220 15" stroke="#f59e0b" stroke-width="3" stroke-dasharray="3,3"/>
        <text x="170" y="10" font-size="8" font-weight="bold" fill="#d97706">2e⁻ →</text>
        <!-- Cực dương Carbon -->
        <rect x="180" y="0" width="180" height="80" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
        <text x="270" y="30" text-anchor="middle" fill="#fff" font-weight="black" font-size="12">C (Cực dương Cathode)</text>
        <text x="270" y="55" text-anchor="middle" font-size="9" font-weight="bold" fill="#38bdf8">2H₂O + O₂ + 4e⁻ → 4OH⁻</text>
      </g>
      <rect x="520" y="20" width="320" height="190" rx="12" fill="#fff1f2" class="dark:fill-rose-950/20" stroke="#f43f5e" stroke-width="1.2"/>
      <text x="680" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#be123c" class="dark:fill-rose-300">QUÁ TRÌNH TẠO RỈ SẮT</text>
      <g transform="translate(540, 75)">
        <text x="0" y="15" font-size="10" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Fe²⁺ + 2OH⁻ → Fe(OH)₂↓ (kết tủa trắng xanh)</text>
        <text x="0" y="40" font-size="10" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• 4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃↓ (nâu đỏ)</text>
        <text x="0" y="65" font-size="10" font-weight="bold" fill="#b91c1c">• 2Fe(OH)₃ → Fe₂O₃·nH₂O (Rỉ sắt xốp làm hỏng kim loại)</text>
      </g>
      <text x="680" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">Ăn mòn điện hóa phá hủy hàng triệu tấn kim loại mỗi năm</text>
    </svg>`,
    mechanism: 'Khi thép (hợp kim Fe–C) để trong không khí ẩm, trên bề mặt hình thành vô số pin điện hóa vi mô: Cực âm (anode) là sắt Fe bị oxi hóa nhường electron thành cation Fe²⁺ và bị ăn mòn rỉ sét. Các electron chuyển sang cực dương (cathode) là tạp chất Carbon, tại đây phân tử O₂ hòa tan trong màng nước nhận electron bị khử thành ion OH⁻. Fe²⁺ gặp OH⁻ và tiếp tục bị oxi hóa thành rỉ sắt Fe₂O₃·nH₂O màu nâu đỏ giòn xốp.'
  },

  // Model 23: Ôn tập chương 6
  23: {
    lessonId: 23,
    tag: 'Mô hình bảo vệ điện hóa Catot',
    title: 'Mô hình bảo vệ vỏ tàu biển bằng phương pháp Điện Hóa: Khối Kẽm (Zn) hy sinh bảo vệ Sắt (Fe)',
    badge: 'Mô hình bảo vệ Catot (Sacrificial Anode)',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <g transform="translate(100, 115)">
        <!-- Vỏ tàu biển bằng Fe -->
        <rect x="0" y="-40" width="380" height="80" rx="6" fill="#64748b" stroke="#334155" stroke-width="2"/>
        <text x="190" y="-10" text-anchor="middle" fill="#fff" font-weight="black" font-size="13">VỎ TÀU BIỂN BẰNG THÉP (Fe) ĐƯỢC BẢO VỆ</text>
        <text x="190" y="15" text-anchor="middle" font-size="10" font-weight="bold" fill="#38bdf8">Trở thành Catot (+) không bị oxi hóa</text>
        <!-- Khối kẽm áp vào vỏ tàu -->
        <g transform="translate(140, 40)">
          <rect x="-40" y="0" width="80" height="35" rx="6" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
          <text x="0" y="18" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">Khối Zn</text>
          <text x="0" y="30" text-anchor="middle" fill="#fff" font-size="8">(Anot hy sinh)</text>
          <!-- Zn tan ra bảo vệ Fe -->
          <text x="0" y="55" text-anchor="middle" font-size="9" font-weight="bold" fill="#d97706">Zn → Zn²⁺ + 2e⁻ (Zn tan dần)</text>
        </g>
      </g>
      <rect x="520" y="20" width="320" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="680" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">NGUYÊN LÝ BẢO VỆ CATOT</text>
      <g transform="translate(540, 75)">
        <text x="0" y="15" font-size="10" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Gắn kim loại hoạt động mạnh hơn (Zn) vào Fe</text>
        <text x="0" y="40" font-size="10" font-weight="bold" fill="#059669">• Zn có thế điện cực chuẩn nhỏ hơn nên bị ăn mòn trước</text>
        <text x="0" y="65" font-size="10" font-weight="bold" fill="#0284c7">• Vỏ tàu sắt đóng vai trò cực catot an toàn</text>
        <text x="0" y="90" font-size="10" font-weight="bold" fill="#b45309">• Định kì thay thế các khối kẽm bị mòn</text>
      </g>
      <text x="680" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Bảo vệ hàng triệu công trình giàn khoan dầu khí và tàu biển</text>
    </svg>`,
    mechanism: 'Phương pháp bảo vệ catot (điện hóa) gắn trực tiếp một khối kim loại có tính khử mạnh hơn sắt (như kẽm Zn) vào phần vỏ tàu ngâm trong nước biển. Khi đó một pin điện hóa được thiết lập: Kẽm đóng vai trò anot (−) có thế điện cực âm hơn nên bị oxi hóa nhường electron tan dần ra (kim loại hy sinh), còn vỏ tàu bằng thép đóng vai trò catot (+) được truyền electron bảo vệ an toàn hoàn toàn khỏi rỉ sét.'
  },

  // Model 24: Kim loại nhóm IA - Phản ứng Na với nước
  24: {
    lessonId: 24,
    tag: 'Mô hình phản ứng kim loại kiềm',
    title: 'Mô hình phản ứng mãnh liệt của Natri với Nước: 2Na + 2H₂O → 2NaOH + H₂↑ (Nóng chảy thành giọt tròn bốc cháy)',
    badge: 'Mô hình phản ứng Na + H₂O',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <g transform="translate(180, 115)">
        <!-- Mặt nước chậu -->
        <rect x="-120" y="0" width="240" height="80" fill="#38bdf8" opacity="0.4"/>
        <line x1="-120" y1="0" x2="120" y2="0" stroke="#0284c7" stroke-width="2.5"/>
        <text x="0" y="35" text-anchor="middle" font-weight="bold" font-size="11" fill="#0369a1">Dung dịch nước H₂O + Phenolphthalein</text>
        <!-- Giọt Na nóng chảy tròn chạy trên mặt nước -->
        <circle cx="0" cy="-12" r="18" fill="#cbd5e1" stroke="#94a3b8" stroke-width="2"/>
        <text x="0" y="-8" text-anchor="middle" fill="#0f172a" font-weight="black" font-size="11">Na</text>
        <!-- Ngọn lửa vàng cháy sáng -->
        <path d="M -12 -30 Q 0 -60 12 -30 Q 0 -45 -12 -30" fill="#facc15" stroke="#eab308" stroke-width="1.5"/>
        <text x="0" y="-65" text-anchor="middle" font-size="9" font-weight="bold" fill="#ca8a04">Khí H₂ bốc cháy ngọn lửa vàng</text>
        <!-- Vệt dung dịch hồng xung quanh -->
        <ellipse cx="0" cy="5" rx="50" ry="12" fill="#f43f5e" opacity="0.6"/>
        <text x="0" y="60" text-anchor="middle" font-size="9" font-weight="bold" fill="#be123c">NaOH làm phenolphthalein hóa hồng</text>
      </g>
      <rect x="490" y="20" width="350" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="665" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">ĐẶC ĐIỂM KIM LOẠI KIỀM (NHÓM IA)</text>
      <g transform="translate(510, 75)">
        <text x="0" y="15" font-size="10" font-weight="bold" fill="#0284c7">• Cấu hình e hóa trị ns¹ (dễ nhường 1e⁻ tạo cation M⁺)</text>
        <text x="0" y="40" font-size="10" font-weight="bold" fill="#dc2626">• Tính khử mạnh nhất trong tất cả các kim loại</text>
        <text x="0" y="65" font-size="10" font-weight="bold" fill="#d97706">• Nhiệt độ nóng chảy thấp, mềm (cắt được bằng dao)</text>
        <text x="0" y="90" font-size="10" font-weight="bold" fill="#059669">• Bảo quản: Phải ngâm chìm hoàn toàn trong dầu hỏa</text>
      </g>
      <text x="665" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Phản ứng tỏa nhiệt lượng lớn làm nóng chảy mẩu Natri</text>
    </svg>`,
    mechanism: 'Kim loại kiềm (nhóm IA) có năng lượng ion hóa thứ nhất rất nhỏ do chỉ có 1 electron lớp ngoài cùng (ns¹). Khi thả mẩu Natri vào nước, Na phản ứng tức thì mãnh liệt: 2Na + 2H₂O → 2NaOH + H₂↑. Nhiệt tỏa ra rất lớn làm nóng chảy mẩu natri thành giọt tròn lướt nhanh trên mặt nước và kích thích khí H₂ tự bốc cháy với ngọn lửa màu vàng đặc trưng của ion Na⁺.'
  },

  // Model 25: Kim loại nhóm IIA - Chu trình đá vôi & Nước cứng
  25: {
    lessonId: 25,
    tag: 'Mô hình chuyển hóa hợp chất kim loại kiềm thổ',
    title: 'Mô hình chu trình vôi: CaCO₃ (Đá vôi) ⇌ CaO (Vôi sống) → Ca(OH)₂ (Vôi tôi) & Cơ chế làm mềm nước cứng',
    badge: 'Mô hình chu trình vôi & Nước cứng',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <g transform="translate(180, 115)">
        <!-- Đỉnh CaCO3 -->
        <rect x="-45" y="-75" width="90" height="35" rx="6" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
        <text x="0" y="-53" text-anchor="middle" font-weight="bold" font-size="10" fill="#1e293b">CaCO₃ (Đá vôi)</text>
        <!-- Đáy trái CaO -->
        <rect x="-110" y="20" width="85" height="35" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="-67.5" y="42" text-anchor="middle" font-weight="bold" font-size="10" fill="#854d0e">CaO (Vôi sống)</text>
        <!-- Đáy phải Ca(OH)2 -->
        <rect x="25" y="20" width="95" height="35" rx="6" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
        <text x="72.5" y="42" text-anchor="middle" font-weight="bold" font-size="10" fill="#065f46">Ca(OH)₂ (Vôi tôi)</text>
        <!-- Mũi tên tam giác chu trình -->
        <path d="M -45 -55 L -90 15" stroke="#dc2626" stroke-width="2.5"/>
        <text x="-85" y="-20" font-size="8" font-weight="bold" fill="#dc2626">Nung 1000°C</text>
        <path d="M -25 40 L 20 40" stroke="#0284c7" stroke-width="2.5"/>
        <text x="-2" y="32" font-size="8" font-weight="bold" fill="#0284c7">+ H₂O</text>
        <path d="M 75 15 L 45 -55" stroke="#059669" stroke-width="2.5"/>
        <text x="75" y="-20" font-size="8" font-weight="bold" fill="#059669">+ CO₂</text>
      </g>
      <rect x="490" y="20" width="350" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="665" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">LÀM MỀM NƯỚC CỨNG (CHỨA Ca²⁺, Mg²⁺)</text>
      <g transform="translate(510, 75)">
        <text x="0" y="15" font-size="10" font-weight="bold" fill="#0284c7">• Nước cứng tạm thời: Chứa Ca(HCO₃)₂, Mg(HCO₃)₂</text>
        <text x="0" y="38" font-size="10" font-weight="bold" fill="#059669">→ Phương pháp: Đun sôi nhiệt phân: Ca(HCO₃)₂ → CaCO₃↓ + CO₂</text>
        <text x="0" y="61" font-size="10" font-weight="bold" fill="#b45309">• Làm mềm vĩnh cửu: Dùng Na₂CO₃ hoặc Na₃PO₄ kết tủa</text>
        <text x="0" y="84" font-size="10" font-weight="bold" fill="#7c3aed">• Trao đổi ion qua nhựa Cationite (giữ lại Ca²⁺, nhả Na⁺)</text>
      </g>
      <text x="665" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Bảo vệ nồi hơi, đường ống dẫn nước và tiết kiệm xà phòng</text>
    </svg>`,
    mechanism: 'Hợp chất canxi trải qua chu trình chuyển hóa khép kín: Đá vôi CaCO₃ nung ở 900–1000°C phân hủy tạo vôi sống CaO; CaO tôi với nước tỏa nhiệt mãnh liệt tạo vôi tôi Ca(OH)₂; vôi tôi tiếp xúc khí CO₂ trong khí quyển lại kết tủa thành CaCO₃. Trong tự nhiên, phản ứng hòa tan và tái kết tủa đá vôi bởi nước mưa chứa CO₂ hòa tan tạo nên các hang động thạch nhũ kỳ vĩ.'
  },

  // Model 26: Ôn tập chương 7 - Màu ngọn lửa
  26: {
    lessonId: 26,
    tag: 'Mô hình quang phổ phát xạ ngọn lửa',
    title: 'Mô hình quang phổ ngọn lửa đặc trưng kim loại kiềm & kiềm thổ: Na (Vàng), K (Tím), Ca (Đỏ cam), Ba (Lục vàng)',
    badge: 'Mô hình ngọn lửa nguyên tố',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.2" />
      <g transform="translate(100, 120)">
        <!-- Ngọn lửa Na vàng -->
        <g transform="translate(0, 0)">
          <path d="M -25 20 Q 0 -50 25 20 Q 0 -30 -25 20" fill="#facc15" opacity="0.9"/>
          <text x="0" y="40" text-anchor="middle" fill="#fde047" font-weight="bold" font-size="12">Na (Vàng tươi)</text>
          <text x="0" y="55" text-anchor="middle" fill="#94a3b8" font-size="9">λ = 589 nm</text>
        </g>
        <!-- Ngọn lửa K tím -->
        <g transform="translate(170, 0)">
          <path d="M -25 20 Q 0 -50 25 20 Q 0 -30 -25 20" fill="#c084fc" opacity="0.9"/>
          <text x="0" y="40" text-anchor="middle" fill="#e9d5ff" font-weight="bold" font-size="12">K (Tím nhạt)</text>
          <text x="0" y="55" text-anchor="middle" fill="#94a3b8" font-size="9">Nhìn qua kính coban</text>
        </g>
        <!-- Ngọn lửa Ca đỏ cam -->
        <g transform="translate(340, 0)">
          <path d="M -25 20 Q 0 -50 25 20 Q 0 -30 -25 20" fill="#f97316" opacity="0.9"/>
          <text x="0" y="40" text-anchor="middle" fill="#fdba74" font-weight="bold" font-size="12">Ca (Đỏ cam)</text>
          <text x="0" y="55" text-anchor="middle" fill="#94a3b8" font-size="9">Đặc trưng vôi</text>
        </g>
        <!-- Ngọn lửa Ba lục vàng -->
        <g transform="translate(510, 0)">
          <path d="M -25 20 Q 0 -50 25 20 Q 0 -30 -25 20" fill="#84cc16" opacity="0.9"/>
          <text x="0" y="40" text-anchor="middle" fill="#bef264" font-weight="bold" font-size="12">Ba (Lục vàng)</text>
          <text x="0" y="55" text-anchor="middle" fill="#94a3b8" font-size="9">Ứng dụng pháo hoa</text>
        </g>
      </g>
      <text x="430" y="205" text-anchor="middle" font-size="10" font-weight="bold" fill="#cbd5e1">Khi đốt nóng, electron nhảy lên mức năng lượng cao rồi quay về phát ra photon ánh sáng màu đặc trưng</text>
    </svg>`,
    mechanism: 'Khi đưa hợp chất kim loại kiềm hoặc kiềm thổ vào ngọn lửa đèn khí không màu, nhiệt độ cao kích thích các electron hóa trị chuyển lên các orbital có mức năng lượng cao hơn (trạng thái kích thích kém bền). Khi electron quay trở về các mức năng lượng cơ bản thấp hơn, chúng giải phóng năng lượng dưới dạng bức xạ photon ánh sáng nhìn thấy có bước sóng xác định, tạo màu ngọn lửa đặc trưng để nhận biết định tính.'
  },

  // Model 27: Kim loại chuyển tiếp dãy 1
  27: {
    lessonId: 27,
    tag: 'Mô hình cấu hình electron kim loại chuyển tiếp',
    title: 'Mô hình phân bố electron phân lớp 3d và các số oxi hóa biến đổi của Sắt (Fe: [Ar]3d⁶4s² → Fe²⁺, Fe³⁺)',
    badge: 'Mô hình phân lớp 3d',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <rect x="20" y="20" width="460" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="250" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">CẤU HÌNH ELECTRON CỦA Fe (Z = 26): [Ar] 3d⁶ 4s²</text>
      <g transform="translate(50, 115)">
        <!-- 5 ô lượng tử phân lớp 3d -->
        <text x="0" y="-15" font-size="11" font-weight="bold" fill="#0284c7">Phân lớp 3d (5 orbital):</text>
        ${[0, 35, 70, 105, 140].map((x, idx) => `
          <rect x="${x}" y="0" width="35" height="35" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
          <text x="${x + 12}" y="22" font-weight="bold" font-size="12" fill="#1e40af">↑</text>
          ${idx === 0 ? `<text x="${x + 22}" y="22" font-weight="bold" font-size="12" fill="#ef4444">↓</text>` : ''}
        `).join('')}
        <!-- 1 ô lượng tử 4s -->
        <g transform="translate(230, 0)">
          <text x="0" y="-15" font-size="11" font-weight="bold" fill="#d97706">Phân lớp 4s:</text>
          <rect x="0" y="0" width="35" height="35" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
          <text x="10" y="22" font-weight="bold" font-size="12" fill="#b45309">↑</text>
          <text x="20" y="22" font-weight="bold" font-size="12" fill="#b45309">↓</text>
        </g>
      </g>
      <text x="250" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Nhường 2e ở 4s tạo Fe²⁺ (3d⁶); nhường thêm 1e ở 3d tạo Fe³⁺ (3d⁵ bán bão hòa bền)</text>

      <rect x="500" y="20" width="340" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="670" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">ĐẶC ĐIỂM KIM LOẠI CHUYỂN TIẾP DÃY THỨ NHẤT</text>
      <g transform="translate(520, 75)">
        <text x="0" y="15" font-size="10" font-weight="bold" fill="#334155" class="dark:fill-slate-200">• Nhiều số oxi hóa: Mn (+2 đến +7), Cr (+2, +3, +6)</text>
        <text x="0" y="38" font-size="10" font-weight="bold" fill="#0284c7">• Ion thường có màu sắc rực rỡ do dịch chuyển d–d</text>
        <text x="0" y="61" font-size="10" font-weight="bold" fill="#059669">• Dễ tạo phức chất với các phối tử có cặp electron tự do</text>
        <text x="0" y="84" font-size="10" font-weight="bold" fill="#b45309">• Hợp chất có hoạt tính xúc tác mạnh trong công nghiệp</text>
      </g>
      <text x="670" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Phân lớp 3d chưa bão hòa mang lại tính chất hóa học phong phú</text>
    </svg>`,
    mechanism: 'Kim loại chuyển tiếp dãy thứ nhất (từ Sc đến Cu) có các electron đang điền dở vào phân lớp 3d bên trong. Vì mức năng lượng của 3d và 4s rất gần nhau, các nguyên tử này không chỉ mất các electron ở phân lớp ngoài cùng 4s mà còn có thể tham gia nhường các electron ở phân lớp 3d, dẫn đến khả năng thể hiện nhiều trạng thái số oxi hóa biến đổi và ion có màu sắc phong phú.'
  },

  28: existingModels[28],

  // Model 29: Tính chất & ứng dụng phức chất - Thế phối tử
  29: {
    lessonId: 29,
    tag: 'Mô hình phản ứng thế phối tử phức chất',
    title: 'Mô hình phản ứng thế phối tử (Ligand Substitution): [Cu(H₂O)₄]²⁺ (Xanh lam nhạt) + 4NH₃ → [Cu(NH₃)₄]²⁺ (Xanh thẫm) + 4H₂O',
    badge: 'Mô hình phản ứng thế Ligand',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <defs><marker id="arrCpx29" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9 z" fill="#1d4ed8" /></marker></defs>
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <rect x="20" y="20" width="370" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#60a5fa" stroke-width="1.2"/>
      <text x="205" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1d4ed8" class="dark:fill-blue-300">AQUA COMPLEX [Cu(H₂O)₄]²⁺ (XANH NHẠT)</text>
      <g transform="translate(180, 115)">
        <circle cx="0" cy="0" r="20" fill="#38bdf8"/>
        <text x="0" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">Cu²⁺</text>
        ${[0, 90, 180, 270].map(deg => {
          const rad = (deg * Math.PI) / 180;
          const x = Math.cos(rad) * 45;
          const y = Math.sin(rad) * 45;
          return `
            <line x1="0" y1="0" x2="${x}" y2="${y}" stroke="#0284c7" stroke-width="2"/>
            <rect x="${x - 18}" y="${y - 10}" width="36" height="20" rx="5" fill="#bae6fd"/>
            <text x="${x}" y="${y + 4}" text-anchor="middle" fill="#0369a1" font-size="8" font-weight="bold">H₂O:</text>
          `;
        }).join('')}
      </g>
      <text x="205" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#0284c7">Phối tử nước liên kết yếu hơn</text>

      <path d="M 400 115 L 420 115" stroke="#1d4ed8" stroke-width="3" marker-end="url(#arrCpx29)"/>
      <text x="410" y="100" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">+ 4NH₃</text>

      <rect x="430" y="20" width="410" height="190" rx="12" fill="#eff6ff" class="dark:fill-blue-950/20" stroke="#3b82f6" stroke-width="1.2"/>
      <text x="635" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1e40af" class="dark:fill-blue-300">AMMINE COMPLEX [Cu(NH₃)₄]²⁺ (XANH LAM THẪM)</text>
      <g transform="translate(635, 115)">
        <circle cx="0" cy="0" r="20" fill="#1e3a8a"/>
        <text x="0" y="4" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">Cu²⁺</text>
        ${[0, 90, 180, 270].map(deg => {
          const rad = (deg * Math.PI) / 180;
          const x = Math.cos(rad) * 45;
          const y = Math.sin(rad) * 45;
          return `
            <line x1="0" y1="0" x2="${x}" y2="${y}" stroke="#1d4ed8" stroke-width="2.5"/>
            <rect x="${x - 18}" y="${y - 10}" width="36" height="20" rx="5" fill="#3b82f6"/>
            <text x="${x}" y="${y + 4}" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">:NH₃</text>
          `;
        }).join('')}
        <text x="90" y="4" font-size="12" font-weight="bold" fill="#059669">+ 4H₂O</text>
      </g>
      <text x="635" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">Hằng số bền phức chất β lớn hơn nhiều so với phức aqua</text>
    </svg>`,
    mechanism: 'Phản ứng thế phối tử xảy ra khi một phối tử có khả năng cho cặp electron mạnh hơn (như NH₃) thay thế phối tử yếu hơn (như H₂O) trong cầu nội phức chất. Vì phối tử NH₃ có tính base Lewis mạnh hơn nước, liên kết phối trí Cu–N bền vững hơn Cu–O, chuyển phức chất từ [Cu(H₂O)₄]²⁺ màu xanh lam nhạt sang phức tetraamminecopper(II) [Cu(NH₃)₄]²⁺ có màu xanh lam thẫm đặc trưng.'
  },

  // Model 30: Ôn tập chương 8 - Phức chất sinh học Hemoglobin
  30: {
    lessonId: 30,
    tag: 'Mô hình phức chất sinh học sự sống',
    title: 'Mô hình liên kết phối trí Fe²⁺ trong Hemoglobin (Heme b) gắn thuận nghịch Oxy (O₂) vận chuyển trong máu',
    badge: 'Mô hình Heme – Hemoglobin',
    svg: `<svg viewBox="0 0 860 230" class="w-full h-auto rounded-xl shadow-xs" xmlns="http://www.w3.org/2000/svg">
      <rect width="860" height="230" rx="16" fill="#f8fafc" class="dark:fill-slate-900" stroke="#cbd5e1" class="dark:stroke-slate-800" stroke-width="1.2" />
      <rect x="20" y="20" width="460" height="190" rx="12" fill="#fff1f2" class="dark:fill-rose-950/20" stroke="#f43f5e" stroke-width="1.2"/>
      <text x="250" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#be123c" class="dark:fill-rose-300">CẤU TRÚC PHỨC TRUNG TÂM HEME (Fe²⁺ – PORPHYRIN)</text>
      <g transform="translate(250, 115)">
        <!-- Ion trung tâm Fe2+ -->
        <circle cx="0" cy="0" r="22" fill="#dc2626" stroke="#991b1b" stroke-width="2.5"/>
        <text x="0" y="5" text-anchor="middle" fill="#fff" font-weight="black" font-size="12">Fe²⁺</text>
        <!-- 4 Nitơ vòng porphyrin liên kết phối trí -->
        ${[-45, 45, 135, 225].map(deg => {
          const rad = (deg * Math.PI) / 180;
          const x = Math.cos(rad) * 45;
          const y = Math.sin(rad) * 45;
          return `
            <line x1="0" y1="0" x2="${x}" y2="${y}" stroke="#e11d48" stroke-width="2"/>
            <rect x="${x - 14}" y="${y - 10}" width="28" height="20" rx="5" fill="#fda4af"/>
            <text x="${x}" y="${y + 4}" text-anchor="middle" fill="#881337" font-size="8" font-weight="bold">N:–</text>
          `;
        }).join('')}
        <!-- Phối tử Oxy gắn phía trên -->
        <line x1="0" y1="-22" x2="0" y2="-55" stroke="#059669" stroke-width="3"/>
        <circle cx="0" cy="-65" r="12" fill="#059669"/>
        <text x="0" y="-61" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">O₂</text>
        <text x="45" y="-61" font-size="9" font-weight="bold" fill="#047857">Gắn thuận nghịch</text>
      </g>
      <text x="250" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">Vòng phẳng Porphyrin giữ chặt Fe²⁺ trong hồng cầu</text>

      <rect x="500" y="20" width="340" height="190" rx="12" fill="#ecfdf5" class="dark:fill-emerald-950/20" stroke="#34d399" stroke-width="1.2"/>
      <text x="670" y="42" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#065f46" class="dark:fill-emerald-300">VAI TRÒ SINH HỌC CỦA PHỨC CHẤT</text>
      <g transform="translate(520, 75)">
        <text x="0" y="15" font-size="10" font-weight="bold" fill="#be123c">• Hemoglobin (Fe²⁺): Vận chuyển O₂ từ phổi đến tế bào</text>
        <text x="0" y="40" font-size="10" font-weight="bold" fill="#059669">• Chlorophyll (Mg²⁺): Diệp lục quang hợp hấp thụ ánh sáng</text>
        <text x="0" y="65" font-size="10" font-weight="bold" fill="#0284c7">• Vitamin B12 (Co³⁺): Phức cobalt cần thiết cho tạo máu</text>
        <text x="0" y="90" font-size="10" font-weight="bold" fill="#b45309">• Thuốc Cisplatin [PtCl₂(NH₃)₂]: Trị ung thư</text>
      </g>
      <text x="670" y="196" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">Phức chất đóng vai trò sống còn trong y học và sinh học</text>
    </svg>`,
    mechanism: 'Trong cơ thể người, phân tử Hemoglobin trong hồng cầu chứa nhân Heme b là một phức chất có ion trung tâm Fe²⁺ nằm giữa vòng phẳng porphyrin với 4 liên kết phối trí với 4 nguyên tử Nitrogen. Vị trí phối trí thứ 5 liên kết với gốc histidine của chuỗi globin, còn vị trí thứ 6 liên kết thuận nghịch với phân tử oxy O₂: Tại phổi phân áp O₂ cao Heme gắn oxy tạo oxyhemoglobin màu đỏ tươi; tại mô phân áp O₂ thấp phức chất nhả O₂ nuôi dưỡng tế bào.'
  }
};

module.exports = models16to30;
